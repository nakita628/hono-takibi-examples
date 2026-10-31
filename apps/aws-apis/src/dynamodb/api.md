<h1 id="amazon-dynamodb">Amazon DynamoDB v2012-08-10</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Amazon DynamoDB</fullname> <p>Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability. DynamoDB lets you offload the administrative burdens of operating and scaling a distributed database, so that you don't have to worry about hardware provisioning, setup and configuration, replication, software patching, or cluster scaling.</p> <p>With DynamoDB, you can create database tables that can store and retrieve any amount of data, and serve any level of request traffic. You can scale up or scale down your tables' throughput capacity without downtime or performance degradation, and use the Amazon Web Services Management Console to monitor resource utilization and performance metrics.</p> <p>DynamoDB automatically spreads the data and traffic for your tables over a sufficient number of servers to handle your throughput and storage requirements, while maintaining consistent and fast performance. All of your data is stored on solid state disks (SSDs) and automatically replicated across multiple Availability Zones in an Amazon Web Services Region, providing built-in high availability and data durability.</p>

Base URLs:

* <a href="http://dynamodb.us-east-1.amazonaws.com">http://dynamodb.us-east-1.amazonaws.com</a> - The DynamoDB multi-region endpoint

* <a href="https://dynamodb.us-east-1.amazonaws.com">https://dynamodb.us-east-1.amazonaws.com</a> - The DynamoDB multi-region endpoint

* <a href="http://dynamodb.cn-north-1.amazonaws.com.cn">http://dynamodb.cn-north-1.amazonaws.com.cn</a> - The DynamoDB endpoint for China (Beijing) and China (Ningxia)

* <a href="https://dynamodb.cn-north-1.amazonaws.com.cn">https://dynamodb.cn-north-1.amazonaws.com.cn</a> - The DynamoDB endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/dynamodb/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-dynamodb-default">Default</h1>

## BatchExecuteStatement

<a id="opIdBatchExecuteStatement"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.BatchExecuteStatement' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.BatchExecuteStatement' \
  -d '{
    "Statements": {},
    "ReturnConsumedCapacity": "INDEXES"
  }'
```

`POST /#X-Amz-Target=DynamoDB_20120810.BatchExecuteStatement`

<p>This operation allows you to perform batch reads or writes on data stored in DynamoDB, using PartiQL. Each read statement in a <code>BatchExecuteStatement</code> must specify an equality condition on all key attributes. This enforces that each <code>SELECT</code> statement in a batch returns at most a single item.</p> <note> <p>The entire batch must consist of either read statements or write statements, you cannot mix both in one batch.</p> </note> <important> <p>A HTTP 200 response does not mean that all statements in the BatchExecuteStatement succeeded. Error details for individual statements can be found under the <a href="https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchStatementResponse.html#DDB-Type-BatchStatementResponse-Error">Error</a> field of the <code>BatchStatementResponse</code> for each statement.</p> </important>

> Body parameter

```json
{
  "Statements": {},
  "ReturnConsumedCapacity": "INDEXES"
}
```

<h3 id="batchexecutestatement-parameters">Parameters</h3>

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
|body|body|[BatchExecuteStatementInput](#schemabatchexecutestatementinput)|true|none|
|» Statements|body|object|true|none|
|» ReturnConsumedCapacity|body|[ReturnConsumedCapacity](#schemareturnconsumedcapacity)|false|<p>Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDB_20120810.BatchExecuteStatement|
|» ReturnConsumedCapacity|INDEXES|
|» ReturnConsumedCapacity|TOTAL|
|» ReturnConsumedCapacity|NONE|

> Example responses

> 200 Response

```json
{
  "Responses": {},
  "ConsumedCapacity": {}
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

<h3 id="batchexecutestatement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchExecuteStatementOutput](#schemabatchexecutestatementoutput)|
|480|480|RequestLimitExceeded|[RequestLimitExceeded](#schemarequestlimitexceeded)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchGetItem

<a id="opIdBatchGetItem"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.BatchGetItem' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.BatchGetItem' \
  -d '{
    "RequestItems": {
      "property1": {
        "Keys": {},
        "AttributesToGet": {},
        "ConsistentRead": {},
        "ProjectionExpression": {},
        "ExpressionAttributeNames": {
          "property1": "string",
          "property2": "string"
        }
      },
      "property2": {
        "Keys": {},
        "AttributesToGet": {},
        "ConsistentRead": {},
        "ProjectionExpression": {},
        "ExpressionAttributeNames": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "ReturnConsumedCapacity": "INDEXES"
  }'
```

`POST /#X-Amz-Target=DynamoDB_20120810.BatchGetItem`

<p>The <code>BatchGetItem</code> operation returns the attributes of one or more items from one or more tables. You identify requested items by primary key.</p> <p>A single operation can retrieve up to 16 MB of data, which can contain as many as 100 items. <code>BatchGetItem</code> returns a partial result if the response size limit is exceeded, the table's provisioned throughput is exceeded, more than 1MB per partition is requested, or an internal processing failure occurs. If a partial result is returned, the operation returns a value for <code>UnprocessedKeys</code>. You can use this value to retry the operation starting with the next item to get.</p> <important> <p>If you request more than 100 items, <code>BatchGetItem</code> returns a <code>ValidationException</code> with the message "Too many items requested for the BatchGetItem call."</p> </important> <p>For example, if you ask to retrieve 100 items, but each individual item is 300 KB in size, the system returns 52 items (so as not to exceed the 16 MB limit). It also returns an appropriate <code>UnprocessedKeys</code> value so you can get the next page of results. If desired, your application can include its own logic to assemble the pages of results into one dataset.</p> <p>If <i>none</i> of the items can be processed due to insufficient provisioned throughput on all of the tables in the request, then <code>BatchGetItem</code> returns a <code>ProvisionedThroughputExceededException</code>. If <i>at least one</i> of the items is successfully processed, then <code>BatchGetItem</code> completes successfully, while returning the keys of the unread items in <code>UnprocessedKeys</code>.</p> <important> <p>If DynamoDB returns any unprocessed items, you should retry the batch operation on those items. However, <i>we strongly recommend that you use an exponential backoff algorithm</i>. If you retry the batch operation immediately, the underlying read or write requests can still fail due to throttling on the individual tables. If you delay the batch operation using exponential backoff, the individual requests in the batch are much more likely to succeed.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ErrorHandling.html#BatchOperations">Batch Operations and Error Handling</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> </important> <p>By default, <code>BatchGetItem</code> performs eventually consistent reads on every table in the request. If you want strongly consistent reads instead, you can set <code>ConsistentRead</code> to <code>true</code> for any or all tables.</p> <p>In order to minimize response latency, <code>BatchGetItem</code> may retrieve items in parallel.</p> <p>When designing your application, keep in mind that DynamoDB does not return items in any particular order. To help parse the response by item, include the primary key values for the items in your request in the <code>ProjectionExpression</code> parameter.</p> <p>If a requested item does not exist, it is not returned in the result. Requests for nonexistent items consume the minimum read capacity units according to the type of read. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.html#CapacityUnitCalculations">Working with Tables</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>

> Body parameter

```json
{
  "RequestItems": {
    "property1": {
      "Keys": {},
      "AttributesToGet": {},
      "ConsistentRead": {},
      "ProjectionExpression": {},
      "ExpressionAttributeNames": {
        "property1": "string",
        "property2": "string"
      }
    },
    "property2": {
      "Keys": {},
      "AttributesToGet": {},
      "ConsistentRead": {},
      "ProjectionExpression": {},
      "ExpressionAttributeNames": {
        "property1": "string",
        "property2": "string"
      }
    }
  },
  "ReturnConsumedCapacity": "INDEXES"
}
```

<h3 id="batchgetitem-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|RequestItems|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[BatchGetItemInput](#schemabatchgetiteminput)|true|none|
|» RequestItems|body|object|true|none|
|» » **additionalProperties**|body|[KeysAndAttributes](#schemakeysandattributes)|false|<p>Represents a set of primary keys and, for each key, the attributes to retrieve from the table.</p> <p>For each primary key, you must provide <i>all</i> of the key attributes. For example, with a simple primary key, you only need to provide the partition key. For a composite primary key, you must provide <i>both</i> the partition key and the sort key.</p>|
|» ReturnConsumedCapacity|body|[ReturnConsumedCapacity](#schemareturnconsumedcapacity)|false|<p>Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDB_20120810.BatchGetItem|
|» ReturnConsumedCapacity|INDEXES|
|» ReturnConsumedCapacity|TOTAL|
|» ReturnConsumedCapacity|NONE|

> Example responses

> 200 Response

```json
{
  "Responses": {
    "Music": [
      {
        "AlbumTitle": {
          "S": "Somewhat Famous"
        }
      },
      {
        "AlbumTitle": {
          "S": "Blue Sky Blues"
        }
      },
      {
        "AlbumTitle": {
          "S": "Louder Than Ever"
        }
      }
    ]
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

<h3 id="batchgetitem-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchGetItemOutput](#schemabatchgetitemoutput)|
|480|480|ProvisionedThroughputExceededException|[ProvisionedThroughputExceededException](#schemaprovisionedthroughputexceededexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|RequestLimitExceeded|[RequestLimitExceeded](#schemarequestlimitexceeded)|
|483|483|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchWriteItem

<a id="opIdBatchWriteItem"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.BatchWriteItem' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.BatchWriteItem' \
  -d '{
    "RequestItems": {
      "property1": [
        {
          "PutRequest": {
            "Item": {
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
          },
          "DeleteRequest": {
            "Key": {
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
          }
        }
      ],
      "property2": [
        {
          "PutRequest": {
            "Item": {
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
          },
          "DeleteRequest": {
            "Key": {
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
          }
        }
      ]
    },
    "ReturnConsumedCapacity": "INDEXES",
    "ReturnItemCollectionMetrics": {}
  }'
```

`POST /#X-Amz-Target=DynamoDB_20120810.BatchWriteItem`

<p>The <code>BatchWriteItem</code> operation puts or deletes multiple items in one or more tables. A single call to <code>BatchWriteItem</code> can transmit up to 16MB of data over the network, consisting of up to 25 item put or delete operations. While individual items can be up to 400 KB once stored, it's important to note that an item's representation might be greater than 400KB while being sent in DynamoDB's JSON format for the API call. For more details on this distinction, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html">Naming Rules and Data Types</a>.</p> <note> <p> <code>BatchWriteItem</code> cannot update items. If you perform a <code>BatchWriteItem</code> operation on an existing item, that item's values will be overwritten by the operation and it will appear like it was updated. To update items, we recommend you use the <code>UpdateItem</code> action.</p> </note> <p>The individual <code>PutItem</code> and <code>DeleteItem</code> operations specified in <code>BatchWriteItem</code> are atomic; however <code>BatchWriteItem</code> as a whole is not. If any requested operations fail because the table's provisioned throughput is exceeded or an internal processing failure occurs, the failed operations are returned in the <code>UnprocessedItems</code> response parameter. You can investigate and optionally resend the requests. Typically, you would call <code>BatchWriteItem</code> in a loop. Each iteration would check for unprocessed items and submit a new <code>BatchWriteItem</code> request with those unprocessed items until all items have been processed.</p> <p>If <i>none</i> of the items can be processed due to insufficient provisioned throughput on all of the tables in the request, then <code>BatchWriteItem</code> returns a <code>ProvisionedThroughputExceededException</code>.</p> <important> <p>If DynamoDB returns any unprocessed items, you should retry the batch operation on those items. However, <i>we strongly recommend that you use an exponential backoff algorithm</i>. If you retry the batch operation immediately, the underlying read or write requests can still fail due to throttling on the individual tables. If you delay the batch operation using exponential backoff, the individual requests in the batch are much more likely to succeed.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ErrorHandling.html#Programming.Errors.BatchOperations">Batch Operations and Error Handling</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> </important> <p>With <code>BatchWriteItem</code>, you can efficiently write or delete large amounts of data, such as from Amazon EMR, or copy data from another database into DynamoDB. In order to improve performance with these large-scale operations, <code>BatchWriteItem</code> does not behave in the same way as individual <code>PutItem</code> and <code>DeleteItem</code> calls would. For example, you cannot specify conditions on individual put and delete requests, and <code>BatchWriteItem</code> does not return deleted items in the response.</p> <p>If you use a programming language that supports concurrency, you can use threads to write items in parallel. Your application must include the necessary logic to manage the threads. With languages that don't support threading, you must update or delete the specified items one at a time. In both situations, <code>BatchWriteItem</code> performs the specified put and delete operations in parallel, giving you the power of the thread pool approach without having to introduce complexity into your application.</p> <p>Parallel processing reduces latency, but each specified put and delete request consumes the same number of write capacity units whether it is processed in parallel or not. Delete operations on nonexistent items consume one write capacity unit.</p> <p>If one or more of the following is true, DynamoDB rejects the entire batch write operation:</p> <ul> <li> <p>One or more tables specified in the <code>BatchWriteItem</code> request does not exist.</p> </li> <li> <p>Primary key attributes specified on an item in the request do not match those in the corresponding table's primary key schema.</p> </li> <li> <p>You try to perform multiple operations on the same item in the same <code>BatchWriteItem</code> request. For example, you cannot put and delete the same item in the same <code>BatchWriteItem</code> request. </p> </li> <li> <p> Your request contains at least two items with identical hash and range keys (which essentially is two put operations). </p> </li> <li> <p>There are more than 25 requests in the batch.</p> </li> <li> <p>Any individual item in a batch exceeds 400 KB.</p> </li> <li> <p>The total request size exceeds 16 MB.</p> </li> </ul>

> Body parameter

```json
{
  "RequestItems": {
    "property1": [
      {
        "PutRequest": {
          "Item": {
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
        },
        "DeleteRequest": {
          "Key": {
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
        }
      }
    ],
    "property2": [
      {
        "PutRequest": {
          "Item": {
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
        },
        "DeleteRequest": {
          "Key": {
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
        }
      }
    ]
  },
  "ReturnConsumedCapacity": "INDEXES",
  "ReturnItemCollectionMetrics": {}
}
```

<h3 id="batchwriteitem-parameters">Parameters</h3>

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
|body|body|[BatchWriteItemInput](#schemabatchwriteiteminput)|true|none|
|» RequestItems|body|object|true|none|
|» » **additionalProperties**|body|[WriteRequests](#schemawriterequests)|false|none|
|» ReturnConsumedCapacity|body|[ReturnConsumedCapacity](#schemareturnconsumedcapacity)|false|<p>Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul>|
|» ReturnItemCollectionMetrics|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDB_20120810.BatchWriteItem|
|» ReturnConsumedCapacity|INDEXES|
|» ReturnConsumedCapacity|TOTAL|
|» ReturnConsumedCapacity|NONE|

> Example responses

> 200 Response

```json
{}
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

<h3 id="batchwriteitem-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchWriteItemOutput](#schemabatchwriteitemoutput)|
|480|480|ProvisionedThroughputExceededException|[ProvisionedThroughputExceededException](#schemaprovisionedthroughputexceededexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ItemCollectionSizeLimitExceededException|[ItemCollectionSizeLimitExceededException](#schemaitemcollectionsizelimitexceededexception)|
|483|483|RequestLimitExceeded|[RequestLimitExceeded](#schemarequestlimitexceeded)|
|484|484|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateBackup

<a id="opIdCreateBackup"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.CreateBackup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.CreateBackup' \
  -d '{
    "TableName": {},
    "BackupName": {}
  }'
```

`POST /#X-Amz-Target=DynamoDB_20120810.CreateBackup`

<p>Creates a backup for an existing table.</p> <p> Each time you create an on-demand backup, the entire table data is backed up. There is no limit to the number of on-demand backups that can be taken. </p> <p> When you create an on-demand backup, a time marker of the request is cataloged, and the backup is created asynchronously, by applying all changes until the time of the request to the last full table snapshot. Backup requests are processed instantaneously and become available for restore within minutes. </p> <p>You can call <code>CreateBackup</code> at a maximum rate of 50 times per second.</p> <p>All backups in DynamoDB work without consuming any provisioned throughput on the table.</p> <p> If you submit a backup request on 2018-12-14 at 14:25:00, the backup is guaranteed to contain all data committed to the table up to 14:24:00, and data committed after 14:26:00 will not be. The backup might contain data modifications made between 14:24:00 and 14:26:00. On-demand backup does not support causal consistency. </p> <p> Along with data, the following are also included on the backups: </p> <ul> <li> <p>Global secondary indexes (GSIs)</p> </li> <li> <p>Local secondary indexes (LSIs)</p> </li> <li> <p>Streams</p> </li> <li> <p>Provisioned read and write capacity</p> </li> </ul>

> Body parameter

```json
{
  "TableName": {},
  "BackupName": {}
}
```

<h3 id="createbackup-parameters">Parameters</h3>

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
|body|body|[CreateBackupInput](#schemacreatebackupinput)|true|none|
|» TableName|body|object|true|none|
|» BackupName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDB_20120810.CreateBackup|

> Example responses

> 200 Response

```json
{
  "BackupDetails": {
    "BackupArn": {},
    "BackupName": {},
    "BackupSizeBytes": {},
    "BackupStatus": {},
    "BackupType": {},
    "BackupCreationDateTime": {},
    "BackupExpiryDateTime": {}
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

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="createbackup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateBackupOutput](#schemacreatebackupoutput)|
|480|480|TableNotFoundException|[TableNotFoundException](#schematablenotfoundexception)|
|481|481|TableInUseException|[TableInUseException](#schematableinuseexception)|
|482|482|ContinuousBackupsUnavailableException|[ContinuousBackupsUnavailableException](#schemacontinuousbackupsunavailableexception)|
|483|483|BackupInUseException|[BackupInUseException](#schemabackupinuseexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateGlobalTable

<a id="opIdCreateGlobalTable"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.CreateGlobalTable' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.CreateGlobalTable' \
  -d '{
    "GlobalTableName": {},
    "ReplicationGroup": {}
  }'
```

`POST /#X-Amz-Target=DynamoDB_20120810.CreateGlobalTable`

<p>Creates a global table from an existing table. A global table creates a replication relationship between two or more DynamoDB tables with the same table name in the provided Regions. </p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29 (Legacy)</a> of global tables. We recommend using <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> when creating new global tables, as it provides greater flexibility, higher efficiency and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you are using, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.DetermineVersion.html">Determining the version</a>. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html"> Updating global tables</a>. </p> </important> <p>If you want to add a new replica table to a global table, each of the following conditions must be true:</p> <ul> <li> <p>The table must have the same primary key as all of the other replicas.</p> </li> <li> <p>The table must have the same name as all of the other replicas.</p> </li> <li> <p>The table must have DynamoDB Streams enabled, with the stream containing both the new and the old images of the item.</p> </li> <li> <p>None of the replica tables in the global table can contain any data.</p> </li> </ul> <p> If global secondary indexes are specified, then the following conditions must also be met: </p> <ul> <li> <p> The global secondary indexes must have the same name. </p> </li> <li> <p> The global secondary indexes must have the same hash key and sort key (if present). </p> </li> </ul> <p> If local secondary indexes are specified, then the following conditions must also be met: </p> <ul> <li> <p> The local secondary indexes must have the same name. </p> </li> <li> <p> The local secondary indexes must have the same hash key and sort key (if present). </p> </li> </ul> <important> <p> Write capacity settings should be set consistently across your replica tables and secondary indexes. DynamoDB strongly recommends enabling auto scaling to manage the write capacity settings for all of your global tables replicas and indexes. </p> <p> If you prefer to manage write capacity settings manually, you should provision equal replicated write capacity units to your replica tables. You should also provision equal replicated write capacity units to matching secondary indexes across your global table. </p> </important>

> Body parameter

```json
{
  "GlobalTableName": {},
  "ReplicationGroup": {}
}
```

<h3 id="createglobaltable-parameters">Parameters</h3>

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
|body|body|[CreateGlobalTableInput](#schemacreateglobaltableinput)|true|none|
|» GlobalTableName|body|object|true|none|
|» ReplicationGroup|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDB_20120810.CreateGlobalTable|

> Example responses

> 200 Response

```json
{
  "GlobalTableDescription": {
    "ReplicationGroup": {},
    "GlobalTableArn": {},
    "CreationDateTime": {},
    "GlobalTableStatus": {},
    "GlobalTableName": {}
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

<h3 id="createglobaltable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateGlobalTableOutput](#schemacreateglobaltableoutput)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|GlobalTableAlreadyExistsException|[GlobalTableAlreadyExistsException](#schemaglobaltablealreadyexistsexception)|
|483|483|TableNotFoundException|[TableNotFoundException](#schematablenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateTable

<a id="opIdCreateTable"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.CreateTable' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.CreateTable' \
  -d '{
    "AttributeDefinitions": {},
    "TableName": {},
    "KeySchema": {},
    "LocalSecondaryIndexes": {},
    "GlobalSecondaryIndexes": {},
    "BillingMode": {},
    "ProvisionedThroughput": {
      "ReadCapacityUnits": {},
      "WriteCapacityUnits": {}
    },
    "StreamSpecification": {
      "StreamEnabled": {},
      "StreamViewType": {}
    },
    "SSESpecification": {
      "Enabled": {},
      "SSEType": {},
      "KMSMasterKeyId": {}
    },
    "Tags": {},
    "TableClass": {},
    "DeletionProtectionEnabled": {}
  }'
```

`POST /#X-Amz-Target=DynamoDB_20120810.CreateTable`

<p>The <code>CreateTable</code> operation adds a new table to your account. In an Amazon Web Services account, table names must be unique within each Region. That is, you can have two tables with same name if you create the tables in different Regions.</p> <p> <code>CreateTable</code> is an asynchronous operation. Upon receiving a <code>CreateTable</code> request, DynamoDB immediately returns a response with a <code>TableStatus</code> of <code>CREATING</code>. After the table is created, DynamoDB sets the <code>TableStatus</code> to <code>ACTIVE</code>. You can perform read and write operations only on an <code>ACTIVE</code> table. </p> <p>You can optionally define secondary indexes on the new table, as part of the <code>CreateTable</code> operation. If you want to create multiple tables with secondary indexes on them, you must create the tables sequentially. Only one table with secondary indexes can be in the <code>CREATING</code> state at any given time.</p> <p>You can use the <code>DescribeTable</code> action to check the table status.</p>

> Body parameter

```json
{
  "AttributeDefinitions": {},
  "TableName": {},
  "KeySchema": {},
  "LocalSecondaryIndexes": {},
  "GlobalSecondaryIndexes": {},
  "BillingMode": {},
  "ProvisionedThroughput": {
    "ReadCapacityUnits": {},
    "WriteCapacityUnits": {}
  },
  "StreamSpecification": {
    "StreamEnabled": {},
    "StreamViewType": {}
  },
  "SSESpecification": {
    "Enabled": {},
    "SSEType": {},
    "KMSMasterKeyId": {}
  },
  "Tags": {},
  "TableClass": {},
  "DeletionProtectionEnabled": {}
}
```

<h3 id="createtable-parameters">Parameters</h3>

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
|body|body|[CreateTableInput](#schemacreatetableinput)|true|none|
|» AttributeDefinitions|body|object|true|none|
|» TableName|body|object|true|none|
|» KeySchema|body|object|true|none|
|» LocalSecondaryIndexes|body|object|false|none|
|» GlobalSecondaryIndexes|body|object|false|none|
|» BillingMode|body|object|false|none|
|» ProvisionedThroughput|body|object|false|none|
|» » ReadCapacityUnits|body|object|true|none|
|» » WriteCapacityUnits|body|object|true|none|
|» StreamSpecification|body|object|false|none|
|» » StreamEnabled|body|object|true|none|
|» » StreamViewType|body|object|false|none|
|» SSESpecification|body|object|false|none|
|» » Enabled|body|object|false|none|
|» » SSEType|body|object|false|none|
|» » KMSMasterKeyId|body|object|false|none|
|» Tags|body|object|false|none|
|» TableClass|body|object|false|none|
|» DeletionProtectionEnabled|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDB_20120810.CreateTable|

> Example responses

> 200 Response

```json
{
  "TableDescription": {
    "AttributeDefinitions": [
      {
        "AttributeName": "Artist",
        "AttributeType": "S"
      },
      {
        "AttributeName": "SongTitle",
        "AttributeType": "S"
      }
    ],
    "CreationDateTime": "1421866952.062",
    "ItemCount": 0,
    "KeySchema": [
      {
        "AttributeName": "Artist",
        "KeyType": "HASH"
      },
      {
        "AttributeName": "SongTitle",
        "KeyType": "RANGE"
      }
    ],
    "ProvisionedThroughput": {
      "ReadCapacityUnits": 5,
      "WriteCapacityUnits": 5
    },
    "TableName": "Music",
    "TableSizeBytes": 0,
    "TableStatus": "CREATING"
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

<h3 id="createtable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateTableOutput](#schemacreatetableoutput)|
|480|480|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBackup

<a id="opIdDeleteBackup"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.DeleteBackup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.DeleteBackup' \
  -d '{
    "BackupArn": {}
  }'
```

`POST /#X-Amz-Target=DynamoDB_20120810.DeleteBackup`

<p>Deletes an existing backup of a table.</p> <p>You can call <code>DeleteBackup</code> at a maximum rate of 10 times per second.</p>

> Body parameter

```json
{
  "BackupArn": {}
}
```

<h3 id="deletebackup-parameters">Parameters</h3>

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
|body|body|[DeleteBackupInput](#schemadeletebackupinput)|true|none|
|» BackupArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDB_20120810.DeleteBackup|

> Example responses

> 200 Response

```json
{
  "BackupDescription": {
    "BackupDetails": {
      "BackupArn": {},
      "BackupName": {},
      "BackupSizeBytes": {},
      "BackupStatus": {},
      "BackupType": {},
      "BackupCreationDateTime": {},
      "BackupExpiryDateTime": {}
    },
    "SourceTableDetails": {
      "TableName": {},
      "TableId": {},
      "TableArn": {},
      "TableSizeBytes": {},
      "KeySchema": {},
      "TableCreationDateTime": {},
      "ProvisionedThroughput": {
        "ReadCapacityUnits": {},
        "WriteCapacityUnits": {}
      },
      "ItemCount": {},
      "BillingMode": {}
    },
    "SourceTableFeatureDetails": {
      "LocalSecondaryIndexes": {},
      "GlobalSecondaryIndexes": {},
      "StreamDescription": {
        "StreamEnabled": {},
        "StreamViewType": {}
      },
      "TimeToLiveDescription": {
        "TimeToLiveStatus": {},
        "AttributeName": {}
      },
      "SSEDescription": {
        "Status": {},
        "SSEType": {},
        "KMSMasterKeyArn": {},
        "InaccessibleEncryptionDateTime": {}
      }
    }
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

<h3 id="deletebackup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteBackupOutput](#schemadeletebackupoutput)|
|480|480|BackupNotFoundException|[BackupNotFoundException](#schemabackupnotfoundexception)|
|481|481|BackupInUseException|[BackupInUseException](#schemabackupinuseexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteItem

<a id="opIdDeleteItem"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.DeleteItem' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.DeleteItem' \
  -d '{
    "TableName": {},
    "Key": {
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
    "Expected": {
      "property1": {
        "Value": {
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
        "Exists": {},
        "ComparisonOperator": {},
        "AttributeValueList": {}
      },
      "property2": {
        "Value": {
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
        "Exists": {},
        "ComparisonOperator": {},
        "AttributeValueList": {}
      }
    },
    "ConditionalOperator": {},
    "ReturnValues": {},
    "ReturnConsumedCapacity": "INDEXES",
    "ReturnItemCollectionMetrics": {},
    "ConditionExpression": {},
    "ExpressionAttributeNames": {
      "property1": "string",
      "property2": "string"
    },
    "ExpressionAttributeValues": {
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
    "ReturnValuesOnConditionCheckFailure": {}
  }'
```

`POST /#X-Amz-Target=DynamoDB_20120810.DeleteItem`

<p>Deletes a single item in a table by primary key. You can perform a conditional delete operation that deletes the item if it exists, or if it has an expected attribute value.</p> <p>In addition to deleting an item, you can also return the item's attribute values in the same operation, using the <code>ReturnValues</code> parameter.</p> <p>Unless you specify conditions, the <code>DeleteItem</code> is an idempotent operation; running it multiple times on the same item or attribute does <i>not</i> result in an error response.</p> <p>Conditional deletes are useful for deleting items only if specific conditions are met. If those conditions are met, DynamoDB performs the delete. Otherwise, the item is not deleted.</p>

> Body parameter

```json
{
  "TableName": {},
  "Key": {
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
  "Expected": {
    "property1": {
      "Value": {
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
      "Exists": {},
      "ComparisonOperator": {},
      "AttributeValueList": {}
    },
    "property2": {
      "Value": {
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
      "Exists": {},
      "ComparisonOperator": {},
      "AttributeValueList": {}
    }
  },
  "ConditionalOperator": {},
  "ReturnValues": {},
  "ReturnConsumedCapacity": "INDEXES",
  "ReturnItemCollectionMetrics": {},
  "ConditionExpression": {},
  "ExpressionAttributeNames": {
    "property1": "string",
    "property2": "string"
  },
  "ExpressionAttributeValues": {
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
  "ReturnValuesOnConditionCheckFailure": {}
}
```

<h3 id="deleteitem-parameters">Parameters</h3>

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
|body|body|[DeleteItemInput](#schemadeleteiteminput)|true|none|
|» TableName|body|object|true|none|
|» Key|body|object|true|none|
|» » **additionalProperties**|body|[AttributeValue](#schemaattributevalue)|false|<p>Represents the data for an attribute.</p> <p>Each attribute value is described as a name-value pair. The name is the data type, and the value is the data itself.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes">Data Types</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>|
|» Expected|body|object|false|none|
|» » **additionalProperties**|body|[ExpectedAttributeValue](#schemaexpectedattributevalue)|false|<p>Represents a condition to be compared with an attribute value. This condition can be used with <code>DeleteItem</code>, <code>PutItem</code>, or <code>UpdateItem</code> operations; if the comparison evaluates to true, the operation succeeds; if not, the operation fails. You can use <code>ExpectedAttributeValue</code> in one of two different ways:</p> <ul> <li> <p>Use <code>AttributeValueList</code> to specify one or more values to compare against an attribute. Use <code>ComparisonOperator</code> to specify how you want to perform the comparison. If the comparison evaluates to true, then the conditional operation succeeds.</p> </li> <li> <p>Use <code>Value</code> to specify a value that DynamoDB will compare against an attribute. If the values match, then <code>ExpectedAttributeValue</code> evaluates to true and the conditional operation succeeds. Optionally, you can also set <code>Exists</code> to false, indicating that you <i>do not</i> expect to find the attribute value in the table. In this case, the conditional operation succeeds only if the comparison evaluates to false.</p> </li> </ul> <p> <code>Value</code> and <code>Exists</code> are incompatible with <code>AttributeValueList</code> and <code>ComparisonOperator</code>. Note that if you use both sets of parameters at once, DynamoDB will return a <code>ValidationException</code> exception.</p>|
|» ConditionalOperator|body|object|false|none|
|» ReturnValues|body|object|false|none|
|» ReturnConsumedCapacity|body|[ReturnConsumedCapacity](#schemareturnconsumedcapacity)|false|<p>Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul>|
|» ReturnItemCollectionMetrics|body|object|false|none|
|» ConditionExpression|body|object|false|none|
|» ExpressionAttributeNames|body|object|false|none|
|» » **additionalProperties**|body|[AttributeName](#schemaattributename)|false|none|
|» ExpressionAttributeValues|body|object|false|none|
|» » **additionalProperties**|body|[AttributeValue](#schemaattributevalue)|false|<p>Represents the data for an attribute.</p> <p>Each attribute value is described as a name-value pair. The name is the data type, and the value is the data itself.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes">Data Types</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>|
|» ReturnValuesOnConditionCheckFailure|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDB_20120810.DeleteItem|
|» ReturnConsumedCapacity|INDEXES|
|» ReturnConsumedCapacity|TOTAL|
|» ReturnConsumedCapacity|NONE|

> Example responses

> 200 Response

```json
{
  "ConsumedCapacity": {
    "CapacityUnits": 1,
    "TableName": "Music"
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

<h3 id="deleteitem-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteItemOutput](#schemadeleteitemoutput)|
|480|480|ConditionalCheckFailedException|[ConditionalCheckFailedException](#schemaconditionalcheckfailedexception)|
|481|481|ProvisionedThroughputExceededException|[ProvisionedThroughputExceededException](#schemaprovisionedthroughputexceededexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ItemCollectionSizeLimitExceededException|[ItemCollectionSizeLimitExceededException](#schemaitemcollectionsizelimitexceededexception)|
|484|484|TransactionConflictException|[TransactionConflictException](#schematransactionconflictexception)|
|485|485|RequestLimitExceeded|[RequestLimitExceeded](#schemarequestlimitexceeded)|
|486|486|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteTable

<a id="opIdDeleteTable"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.DeleteTable' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.DeleteTable' \
  -d '{
    "TableName": {}
  }'
```

`POST /#X-Amz-Target=DynamoDB_20120810.DeleteTable`

<p>The <code>DeleteTable</code> operation deletes a table and all of its items. After a <code>DeleteTable</code> request, the specified table is in the <code>DELETING</code> state until DynamoDB completes the deletion. If the table is in the <code>ACTIVE</code> state, you can delete it. If a table is in <code>CREATING</code> or <code>UPDATING</code> states, then DynamoDB returns a <code>ResourceInUseException</code>. If the specified table does not exist, DynamoDB returns a <code>ResourceNotFoundException</code>. If table is already in the <code>DELETING</code> state, no error is returned. </p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> of global tables. </p> </important> <note> <p>DynamoDB might continue to accept data read and write operations, such as <code>GetItem</code> and <code>PutItem</code>, on a table in the <code>DELETING</code> state until the table deletion is complete.</p> </note> <p>When you delete a table, any indexes on that table are also deleted.</p> <p>If you have DynamoDB Streams enabled on the table, then the corresponding stream on that table goes into the <code>DISABLED</code> state, and the stream is automatically deleted after 24 hours.</p> <p>Use the <code>DescribeTable</code> action to check the status of the table. </p>

> Body parameter

```json
{
  "TableName": {}
}
```

<h3 id="deletetable-parameters">Parameters</h3>

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
|body|body|[DeleteTableInput](#schemadeletetableinput)|true|none|
|» TableName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDB_20120810.DeleteTable|

> Example responses

> 200 Response

```json
{
  "TableDescription": {
    "ItemCount": 0,
    "ProvisionedThroughput": {
      "NumberOfDecreasesToday": 1,
      "ReadCapacityUnits": 5,
      "WriteCapacityUnits": 5
    },
    "TableName": "Music",
    "TableSizeBytes": 0,
    "TableStatus": "DELETING"
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

<h3 id="deletetable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteTableOutput](#schemadeletetableoutput)|
|480|480|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeBackup

<a id="opIdDescribeBackup"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.DescribeBackup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.DescribeBackup' \
  -d '{
    "BackupArn": {}
  }'
```

`POST /#X-Amz-Target=DynamoDB_20120810.DescribeBackup`

<p>Describes an existing backup of a table.</p> <p>You can call <code>DescribeBackup</code> at a maximum rate of 10 times per second.</p>

> Body parameter

```json
{
  "BackupArn": {}
}
```

<h3 id="describebackup-parameters">Parameters</h3>

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
|body|body|[DescribeBackupInput](#schemadescribebackupinput)|true|none|
|» BackupArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDB_20120810.DescribeBackup|

> Example responses

> 200 Response

```json
{
  "BackupDescription": {
    "BackupDetails": {
      "BackupArn": {},
      "BackupName": {},
      "BackupSizeBytes": {},
      "BackupStatus": {},
      "BackupType": {},
      "BackupCreationDateTime": {},
      "BackupExpiryDateTime": {}
    },
    "SourceTableDetails": {
      "TableName": {},
      "TableId": {},
      "TableArn": {},
      "TableSizeBytes": {},
      "KeySchema": {},
      "TableCreationDateTime": {},
      "ProvisionedThroughput": {
        "ReadCapacityUnits": {},
        "WriteCapacityUnits": {}
      },
      "ItemCount": {},
      "BillingMode": {}
    },
    "SourceTableFeatureDetails": {
      "LocalSecondaryIndexes": {},
      "GlobalSecondaryIndexes": {},
      "StreamDescription": {
        "StreamEnabled": {},
        "StreamViewType": {}
      },
      "TimeToLiveDescription": {
        "TimeToLiveStatus": {},
        "AttributeName": {}
      },
      "SSEDescription": {
        "Status": {},
        "SSEType": {},
        "KMSMasterKeyArn": {},
        "InaccessibleEncryptionDateTime": {}
      }
    }
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

<h3 id="describebackup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeBackupOutput](#schemadescribebackupoutput)|
|480|480|BackupNotFoundException|[BackupNotFoundException](#schemabackupnotfoundexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeContinuousBackups

<a id="opIdDescribeContinuousBackups"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.DescribeContinuousBackups' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.DescribeContinuousBackups' \
  -d '{
    "TableName": {}
  }'
```

`POST /#X-Amz-Target=DynamoDB_20120810.DescribeContinuousBackups`

<p>Checks the status of continuous backups and point in time recovery on the specified table. Continuous backups are <code>ENABLED</code> on all tables at table creation. If point in time recovery is enabled, <code>PointInTimeRecoveryStatus</code> will be set to ENABLED.</p> <p> After continuous backups and point in time recovery are enabled, you can restore to any point in time within <code>EarliestRestorableDateTime</code> and <code>LatestRestorableDateTime</code>. </p> <p> <code>LatestRestorableDateTime</code> is typically 5 minutes before the current time. You can restore your table to any point in time during the last 35 days. </p> <p>You can call <code>DescribeContinuousBackups</code> at a maximum rate of 10 times per second.</p>

> Body parameter

```json
{
  "TableName": {}
}
```

<h3 id="describecontinuousbackups-parameters">Parameters</h3>

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
|body|body|[DescribeContinuousBackupsInput](#schemadescribecontinuousbackupsinput)|true|none|
|» TableName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDB_20120810.DescribeContinuousBackups|

> Example responses

> 200 Response

```json
{
  "ContinuousBackupsDescription": {
    "ContinuousBackupsStatus": {},
    "PointInTimeRecoveryDescription": {
      "PointInTimeRecoveryStatus": {},
      "EarliestRestorableDateTime": {},
      "LatestRestorableDateTime": {}
    }
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

<h3 id="describecontinuousbackups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeContinuousBackupsOutput](#schemadescribecontinuousbackupsoutput)|
|480|480|TableNotFoundException|[TableNotFoundException](#schematablenotfoundexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeContributorInsights

<a id="opIdDescribeContributorInsights"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.DescribeContributorInsights' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.DescribeContributorInsights' \
  -d '{
    "TableName": {},
    "IndexName": {}
  }'
```

`POST /#X-Amz-Target=DynamoDB_20120810.DescribeContributorInsights`

Returns information about contributor insights for a given table or global secondary index.

> Body parameter

```json
{
  "TableName": {},
  "IndexName": {}
}
```

<h3 id="describecontributorinsights-parameters">Parameters</h3>

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
|body|body|[DescribeContributorInsightsInput](#schemadescribecontributorinsightsinput)|true|none|
|» TableName|body|object|true|none|
|» IndexName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDB_20120810.DescribeContributorInsights|

> Example responses

> 200 Response

```json
{
  "TableName": {},
  "IndexName": {},
  "ContributorInsightsRuleList": {},
  "ContributorInsightsStatus": {},
  "LastUpdateDateTime": {},
  "FailureException": {
    "ExceptionName": {},
    "ExceptionDescription": {}
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

<h3 id="describecontributorinsights-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeContributorInsightsOutput](#schemadescribecontributorinsightsoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeEndpoints

<a id="opIdDescribeEndpoints"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.DescribeEndpoints' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.DescribeEndpoints' \
  -d '{}'
```

`POST /#X-Amz-Target=DynamoDB_20120810.DescribeEndpoints`

Returns the regional endpoint information. For more information on policy permissions, please see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/inter-network-traffic-privacy.html#inter-network-traffic-DescribeEndpoints">Internetwork traffic privacy</a>.

> Body parameter

```json
{}
```

<h3 id="describeendpoints-parameters">Parameters</h3>

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
|body|body|[DescribeEndpointsRequest](#schemadescribeendpointsrequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDB_20120810.DescribeEndpoints|

> Example responses

> 200 Response

```json
{
  "Endpoints": {}
}
```

<h3 id="describeendpoints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEndpointsResponse](#schemadescribeendpointsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeExport

<a id="opIdDescribeExport"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.DescribeExport' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.DescribeExport' \
  -d '{
    "ExportArn": {}
  }'
```

`POST /#X-Amz-Target=DynamoDB_20120810.DescribeExport`

Describes an existing table export.

> Body parameter

```json
{
  "ExportArn": {}
}
```

<h3 id="describeexport-parameters">Parameters</h3>

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
|body|body|[DescribeExportInput](#schemadescribeexportinput)|true|none|
|» ExportArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDB_20120810.DescribeExport|

> Example responses

> 200 Response

```json
{
  "ExportDescription": {
    "ExportArn": {},
    "ExportStatus": {},
    "StartTime": {},
    "EndTime": {},
    "ExportManifest": {},
    "TableArn": {},
    "TableId": {},
    "ExportTime": {},
    "ClientToken": {},
    "S3Bucket": {},
    "S3BucketOwner": {},
    "S3Prefix": {},
    "S3SseAlgorithm": {},
    "S3SseKmsKeyId": {},
    "FailureCode": {},
    "FailureMessage": {},
    "ExportFormat": {},
    "BilledSizeBytes": {},
    "ItemCount": {}
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

<h3 id="describeexport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeExportOutput](#schemadescribeexportoutput)|
|480|480|ExportNotFoundException|[ExportNotFoundException](#schemaexportnotfoundexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeGlobalTable

<a id="opIdDescribeGlobalTable"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.DescribeGlobalTable' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.DescribeGlobalTable' \
  -d '{
    "GlobalTableName": {}
  }'
```

`POST /#X-Amz-Target=DynamoDB_20120810.DescribeGlobalTable`

<p>Returns information about the specified global table.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29 (Legacy)</a> of global tables. We recommend using <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> when creating new global tables, as it provides greater flexibility, higher efficiency and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you are using, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.DetermineVersion.html">Determining the version</a>. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html"> Updating global tables</a>. </p> </important>

> Body parameter

```json
{
  "GlobalTableName": {}
}
```

<h3 id="describeglobaltable-parameters">Parameters</h3>

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
|body|body|[DescribeGlobalTableInput](#schemadescribeglobaltableinput)|true|none|
|» GlobalTableName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDB_20120810.DescribeGlobalTable|

> Example responses

> 200 Response

```json
{
  "GlobalTableDescription": {
    "ReplicationGroup": {},
    "GlobalTableArn": {},
    "CreationDateTime": {},
    "GlobalTableStatus": {},
    "GlobalTableName": {}
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

<h3 id="describeglobaltable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeGlobalTableOutput](#schemadescribeglobaltableoutput)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|GlobalTableNotFoundException|[GlobalTableNotFoundException](#schemaglobaltablenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeGlobalTableSettings

<a id="opIdDescribeGlobalTableSettings"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.DescribeGlobalTableSettings' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.DescribeGlobalTableSettings' \
  -d '{
    "GlobalTableName": {}
  }'
```

`POST /#X-Amz-Target=DynamoDB_20120810.DescribeGlobalTableSettings`

<p>Describes Region-specific settings for a global table.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29 (Legacy)</a> of global tables. We recommend using <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> when creating new global tables, as it provides greater flexibility, higher efficiency and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you are using, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.DetermineVersion.html">Determining the version</a>. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html"> Updating global tables</a>. </p> </important>

> Body parameter

```json
{
  "GlobalTableName": {}
}
```

<h3 id="describeglobaltablesettings-parameters">Parameters</h3>

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
|body|body|[DescribeGlobalTableSettingsInput](#schemadescribeglobaltablesettingsinput)|true|none|
|» GlobalTableName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDB_20120810.DescribeGlobalTableSettings|

> Example responses

> 200 Response

```json
{
  "GlobalTableName": {},
  "ReplicaSettings": {}
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

<h3 id="describeglobaltablesettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeGlobalTableSettingsOutput](#schemadescribeglobaltablesettingsoutput)|
|480|480|GlobalTableNotFoundException|[GlobalTableNotFoundException](#schemaglobaltablenotfoundexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeImport

<a id="opIdDescribeImport"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.DescribeImport' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.DescribeImport' \
  -d '{
    "ImportArn": {}
  }'
```

`POST /#X-Amz-Target=DynamoDB_20120810.DescribeImport`

 Represents the properties of the import. 

> Body parameter

```json
{
  "ImportArn": {}
}
```

<h3 id="describeimport-parameters">Parameters</h3>

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
|body|body|[DescribeImportInput](#schemadescribeimportinput)|true|none|
|» ImportArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDB_20120810.DescribeImport|

> Example responses

> 200 Response

```json
{
  "ImportTableDescription": {
    "ImportArn": {},
    "ImportStatus": {},
    "TableArn": {},
    "TableId": {},
    "ClientToken": {},
    "S3BucketSource": {
      "S3BucketOwner": {},
      "S3Bucket": {},
      "S3KeyPrefix": {}
    },
    "ErrorCount": {},
    "CloudWatchLogGroupArn": {},
    "InputFormat": {},
    "InputFormatOptions": {
      "Csv": {
        "Delimiter": {},
        "HeaderList": {}
      }
    },
    "InputCompressionType": {},
    "TableCreationParameters": {
      "TableName": {},
      "AttributeDefinitions": {},
      "KeySchema": {},
      "BillingMode": {},
      "ProvisionedThroughput": {
        "ReadCapacityUnits": {},
        "WriteCapacityUnits": {}
      },
      "SSESpecification": {
        "Enabled": {},
        "SSEType": {},
        "KMSMasterKeyId": {}
      },
      "GlobalSecondaryIndexes": {}
    },
    "StartTime": {},
    "EndTime": {},
    "ProcessedSizeBytes": {},
    "ProcessedItemCount": {},
    "ImportedItemCount": {},
    "FailureCode": {},
    "FailureMessage": {}
  }
}
```

> 480 Response

```json
null
```

<h3 id="describeimport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeImportOutput](#schemadescribeimportoutput)|
|480|480|ImportNotFoundException|[ImportNotFoundException](#schemaimportnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeKinesisStreamingDestination

<a id="opIdDescribeKinesisStreamingDestination"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.DescribeKinesisStreamingDestination' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.DescribeKinesisStreamingDestination' \
  -d '{
    "TableName": {}
  }'
```

`POST /#X-Amz-Target=DynamoDB_20120810.DescribeKinesisStreamingDestination`

Returns information about the status of Kinesis streaming.

> Body parameter

```json
{
  "TableName": {}
}
```

<h3 id="describekinesisstreamingdestination-parameters">Parameters</h3>

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
|body|body|[DescribeKinesisStreamingDestinationInput](#schemadescribekinesisstreamingdestinationinput)|true|none|
|» TableName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDB_20120810.DescribeKinesisStreamingDestination|

> Example responses

> 200 Response

```json
{
  "TableName": {},
  "KinesisDataStreamDestinations": {}
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

<h3 id="describekinesisstreamingdestination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeKinesisStreamingDestinationOutput](#schemadescribekinesisstreamingdestinationoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeLimits

<a id="opIdDescribeLimits"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.DescribeLimits' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.DescribeLimits' \
  -d '{}'
```

`POST /#X-Amz-Target=DynamoDB_20120810.DescribeLimits`

<p>Returns the current provisioned-capacity quotas for your Amazon Web Services account in a Region, both for the Region as a whole and for any one DynamoDB table that you create there.</p> <p>When you establish an Amazon Web Services account, the account has initial quotas on the maximum read capacity units and write capacity units that you can provision across all of your DynamoDB tables in a given Region. Also, there are per-table quotas that apply when you create a table there. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Service, Account, and Table Quotas</a> page in the <i>Amazon DynamoDB Developer Guide</i>.</p> <p>Although you can increase these quotas by filing a case at <a href="https://console.aws.amazon.com/support/home#/">Amazon Web Services Support Center</a>, obtaining the increase is not instantaneous. The <code>DescribeLimits</code> action lets you write code to compare the capacity you are currently using to those quotas imposed by your account so that you have enough time to apply for an increase before you hit a quota.</p> <p>For example, you could use one of the Amazon Web Services SDKs to do the following:</p> <ol> <li> <p>Call <code>DescribeLimits</code> for a particular Region to obtain your current account quotas on provisioned capacity there.</p> </li> <li> <p>Create a variable to hold the aggregate read capacity units provisioned for all your tables in that Region, and one to hold the aggregate write capacity units. Zero them both.</p> </li> <li> <p>Call <code>ListTables</code> to obtain a list of all your DynamoDB tables.</p> </li> <li> <p>For each table name listed by <code>ListTables</code>, do the following:</p> <ul> <li> <p>Call <code>DescribeTable</code> with the table name.</p> </li> <li> <p>Use the data returned by <code>DescribeTable</code> to add the read capacity units and write capacity units provisioned for the table itself to your variables.</p> </li> <li> <p>If the table has one or more global secondary indexes (GSIs), loop over these GSIs and add their provisioned capacity values to your variables as well.</p> </li> </ul> </li> <li> <p>Report the account quotas for that Region returned by <code>DescribeLimits</code>, along with the total current provisioned capacity levels you have calculated.</p> </li> </ol> <p>This will let you see whether you are getting close to your account-level quotas.</p> <p>The per-table quotas apply only when you are creating a new table. They restrict the sum of the provisioned capacity of the new table itself and all its global secondary indexes.</p> <p>For existing tables and their GSIs, DynamoDB doesn't let you increase provisioned capacity extremely rapidly, but the only quota that applies is that the aggregate provisioned capacity over all your tables and GSIs cannot exceed either of the per-account quotas.</p> <note> <p> <code>DescribeLimits</code> should only be called periodically. You can expect throttling errors if you call it more than once in a minute.</p> </note> <p>The <code>DescribeLimits</code> Request element has no content.</p>

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
|X-Amz-Target|DynamoDB_20120810.DescribeLimits|

> Example responses

> 200 Response

```json
{
  "AccountMaxReadCapacityUnits": 20000,
  "AccountMaxWriteCapacityUnits": 20000,
  "TableMaxReadCapacityUnits": 10000,
  "TableMaxWriteCapacityUnits": 10000
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
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeTable

<a id="opIdDescribeTable"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.DescribeTable' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.DescribeTable' \
  -d '{
    "TableName": {}
  }'
```

`POST /#X-Amz-Target=DynamoDB_20120810.DescribeTable`

<p>Returns information about the table, including the current status of the table, when it was created, the primary key schema, and any indexes on the table.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> of global tables. </p> </important> <note> <p>If you issue a <code>DescribeTable</code> request immediately after a <code>CreateTable</code> request, DynamoDB might return a <code>ResourceNotFoundException</code>. This is because <code>DescribeTable</code> uses an eventually consistent query, and the metadata for your table might not be available at that moment. Wait for a few seconds, and then try the <code>DescribeTable</code> request again.</p> </note>

> Body parameter

```json
{
  "TableName": {}
}
```

<h3 id="describetable-parameters">Parameters</h3>

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
|body|body|[DescribeTableInput](#schemadescribetableinput)|true|none|
|» TableName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDB_20120810.DescribeTable|

> Example responses

> 200 Response

```json
{
  "Table": {
    "AttributeDefinitions": [
      {
        "AttributeName": "Artist",
        "AttributeType": "S"
      },
      {
        "AttributeName": "SongTitle",
        "AttributeType": "S"
      }
    ],
    "CreationDateTime": "1421866952.062",
    "ItemCount": 0,
    "KeySchema": [
      {
        "AttributeName": "Artist",
        "KeyType": "HASH"
      },
      {
        "AttributeName": "SongTitle",
        "KeyType": "RANGE"
      }
    ],
    "ProvisionedThroughput": {
      "NumberOfDecreasesToday": 1,
      "ReadCapacityUnits": 5,
      "WriteCapacityUnits": 5
    },
    "TableName": "Music",
    "TableSizeBytes": 0,
    "TableStatus": "ACTIVE"
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

<h3 id="describetable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTableOutput](#schemadescribetableoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeTableReplicaAutoScaling

<a id="opIdDescribeTableReplicaAutoScaling"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.DescribeTableReplicaAutoScaling' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.DescribeTableReplicaAutoScaling' \
  -d '{
    "TableName": {}
  }'
```

`POST /#X-Amz-Target=DynamoDB_20120810.DescribeTableReplicaAutoScaling`

<p>Describes auto scaling settings across replicas of the global table at once.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> of global tables.</p> </important>

> Body parameter

```json
{
  "TableName": {}
}
```

<h3 id="describetablereplicaautoscaling-parameters">Parameters</h3>

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
|body|body|[DescribeTableReplicaAutoScalingInput](#schemadescribetablereplicaautoscalinginput)|true|none|
|» TableName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDB_20120810.DescribeTableReplicaAutoScaling|

> Example responses

> 200 Response

```json
{
  "TableAutoScalingDescription": {
    "TableName": {},
    "TableStatus": {},
    "Replicas": {}
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

<h3 id="describetablereplicaautoscaling-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTableReplicaAutoScalingOutput](#schemadescribetablereplicaautoscalingoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeTimeToLive

<a id="opIdDescribeTimeToLive"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.DescribeTimeToLive' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.DescribeTimeToLive' \
  -d '{
    "TableName": {}
  }'
```

`POST /#X-Amz-Target=DynamoDB_20120810.DescribeTimeToLive`

Gives a description of the Time to Live (TTL) status on the specified table. 

> Body parameter

```json
{
  "TableName": {}
}
```

<h3 id="describetimetolive-parameters">Parameters</h3>

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
|body|body|[DescribeTimeToLiveInput](#schemadescribetimetoliveinput)|true|none|
|» TableName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDB_20120810.DescribeTimeToLive|

> Example responses

> 200 Response

```json
{
  "TimeToLiveDescription": {
    "TimeToLiveStatus": {},
    "AttributeName": {}
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

<h3 id="describetimetolive-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTimeToLiveOutput](#schemadescribetimetoliveoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisableKinesisStreamingDestination

<a id="opIdDisableKinesisStreamingDestination"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.DisableKinesisStreamingDestination' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.DisableKinesisStreamingDestination' \
  -d '{
    "TableName": {},
    "StreamArn": {}
  }'
```

`POST /#X-Amz-Target=DynamoDB_20120810.DisableKinesisStreamingDestination`

Stops replication from the DynamoDB table to the Kinesis data stream. This is done without deleting either of the resources.

> Body parameter

```json
{
  "TableName": {},
  "StreamArn": {}
}
```

<h3 id="disablekinesisstreamingdestination-parameters">Parameters</h3>

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
|body|body|[KinesisStreamingDestinationInput](#schemakinesisstreamingdestinationinput)|true|none|
|» TableName|body|object|true|none|
|» StreamArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDB_20120810.DisableKinesisStreamingDestination|

> Example responses

> 200 Response

```json
{
  "TableName": {},
  "StreamArn": {},
  "DestinationStatus": {}
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

<h3 id="disablekinesisstreamingdestination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[KinesisStreamingDestinationOutput](#schemakinesisstreamingdestinationoutput)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## EnableKinesisStreamingDestination

<a id="opIdEnableKinesisStreamingDestination"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.EnableKinesisStreamingDestination' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.EnableKinesisStreamingDestination' \
  -d '{
    "TableName": {},
    "StreamArn": {}
  }'
```

`POST /#X-Amz-Target=DynamoDB_20120810.EnableKinesisStreamingDestination`

Starts table data replication to the specified Kinesis data stream at a timestamp chosen during the enable workflow. If this operation doesn't return results immediately, use DescribeKinesisStreamingDestination to check if streaming to the Kinesis data stream is ACTIVE.

> Body parameter

```json
{
  "TableName": {},
  "StreamArn": {}
}
```

<h3 id="enablekinesisstreamingdestination-parameters">Parameters</h3>

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
|body|body|[KinesisStreamingDestinationInput](#schemakinesisstreamingdestinationinput)|true|none|
|» TableName|body|object|true|none|
|» StreamArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDB_20120810.EnableKinesisStreamingDestination|

> Example responses

> 200 Response

```json
{
  "TableName": {},
  "StreamArn": {},
  "DestinationStatus": {}
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

<h3 id="enablekinesisstreamingdestination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[KinesisStreamingDestinationOutput](#schemakinesisstreamingdestinationoutput)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ExecuteStatement

<a id="opIdExecuteStatement"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.ExecuteStatement' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.ExecuteStatement' \
  -d '{
    "Statement": {},
    "Parameters": {},
    "ConsistentRead": {},
    "NextToken": {},
    "ReturnConsumedCapacity": "INDEXES",
    "Limit": {},
    "ReturnValuesOnConditionCheckFailure": {}
  }'
```

`POST /#X-Amz-Target=DynamoDB_20120810.ExecuteStatement`

<p>This operation allows you to perform reads and singleton writes on data stored in DynamoDB, using PartiQL.</p> <p>For PartiQL reads (<code>SELECT</code> statement), if the total number of processed items exceeds the maximum dataset size limit of 1 MB, the read stops and results are returned to the user as a <code>LastEvaluatedKey</code> value to continue the read in a subsequent operation. If the filter criteria in <code>WHERE</code> clause does not match any data, the read will return an empty result set.</p> <p>A single <code>SELECT</code> statement response can return up to the maximum number of items (if using the Limit parameter) or a maximum of 1 MB of data (and then apply any filtering to the results using <code>WHERE</code> clause). If <code>LastEvaluatedKey</code> is present in the response, you need to paginate the result set. If <code>NextToken</code> is present, you need to paginate the result set and include <code>NextToken</code>.</p>

> Body parameter

```json
{
  "Statement": {},
  "Parameters": {},
  "ConsistentRead": {},
  "NextToken": {},
  "ReturnConsumedCapacity": "INDEXES",
  "Limit": {},
  "ReturnValuesOnConditionCheckFailure": {}
}
```

<h3 id="executestatement-parameters">Parameters</h3>

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
|body|body|[ExecuteStatementInput](#schemaexecutestatementinput)|true|none|
|» Statement|body|object|true|none|
|» Parameters|body|object|false|none|
|» ConsistentRead|body|object|false|none|
|» NextToken|body|object|false|none|
|» ReturnConsumedCapacity|body|[ReturnConsumedCapacity](#schemareturnconsumedcapacity)|false|<p>Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul>|
|» Limit|body|object|false|none|
|» ReturnValuesOnConditionCheckFailure|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDB_20120810.ExecuteStatement|
|» ReturnConsumedCapacity|INDEXES|
|» ReturnConsumedCapacity|TOTAL|
|» ReturnConsumedCapacity|NONE|

> Example responses

> 200 Response

```json
{
  "Items": {},
  "NextToken": {},
  "ConsumedCapacity": {
    "TableName": {},
    "CapacityUnits": {},
    "ReadCapacityUnits": {},
    "WriteCapacityUnits": {},
    "Table": {
      "ReadCapacityUnits": {},
      "WriteCapacityUnits": {},
      "CapacityUnits": {}
    },
    "LocalSecondaryIndexes": {
      "property1": {
        "ReadCapacityUnits": {},
        "WriteCapacityUnits": {},
        "CapacityUnits": {}
      },
      "property2": {
        "ReadCapacityUnits": {},
        "WriteCapacityUnits": {},
        "CapacityUnits": {}
      }
    },
    "GlobalSecondaryIndexes": {
      "property1": {
        "ReadCapacityUnits": {},
        "WriteCapacityUnits": {},
        "CapacityUnits": {}
      },
      "property2": {
        "ReadCapacityUnits": {},
        "WriteCapacityUnits": {},
        "CapacityUnits": {}
      }
    }
  },
  "LastEvaluatedKey": {
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

<h3 id="executestatement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ExecuteStatementOutput](#schemaexecutestatementoutput)|
|480|480|ConditionalCheckFailedException|[ConditionalCheckFailedException](#schemaconditionalcheckfailedexception)|
|481|481|ProvisionedThroughputExceededException|[ProvisionedThroughputExceededException](#schemaprovisionedthroughputexceededexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ItemCollectionSizeLimitExceededException|[ItemCollectionSizeLimitExceededException](#schemaitemcollectionsizelimitexceededexception)|
|484|484|TransactionConflictException|[TransactionConflictException](#schematransactionconflictexception)|
|485|485|RequestLimitExceeded|[RequestLimitExceeded](#schemarequestlimitexceeded)|
|486|486|InternalServerError|[InternalServerError](#schemainternalservererror)|
|487|487|DuplicateItemException|[DuplicateItemException](#schemaduplicateitemexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ExecuteTransaction

<a id="opIdExecuteTransaction"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.ExecuteTransaction' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.ExecuteTransaction' \
  -d '{
    "TransactStatements": {},
    "ClientRequestToken": {},
    "ReturnConsumedCapacity": {}
  }'
```

`POST /#X-Amz-Target=DynamoDB_20120810.ExecuteTransaction`

<p>This operation allows you to perform transactional reads or writes on data stored in DynamoDB, using PartiQL.</p> <note> <p>The entire transaction must consist of either read statements or write statements, you cannot mix both in one transaction. The EXISTS function is an exception and can be used to check the condition of specific attributes of the item in a similar manner to <code>ConditionCheck</code> in the <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/transaction-apis.html#transaction-apis-txwriteitems">TransactWriteItems</a> API.</p> </note>

> Body parameter

```json
{
  "TransactStatements": {},
  "ClientRequestToken": {},
  "ReturnConsumedCapacity": {}
}
```

<h3 id="executetransaction-parameters">Parameters</h3>

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
|body|body|[ExecuteTransactionInput](#schemaexecutetransactioninput)|true|none|
|» TransactStatements|body|object|true|none|
|» ClientRequestToken|body|object|false|none|
|» ReturnConsumedCapacity|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDB_20120810.ExecuteTransaction|

> Example responses

> 200 Response

```json
{
  "Responses": {},
  "ConsumedCapacity": {}
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

<h3 id="executetransaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ExecuteTransactionOutput](#schemaexecutetransactionoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|TransactionCanceledException|[TransactionCanceledException](#schematransactioncanceledexception)|
|482|482|TransactionInProgressException|[TransactionInProgressException](#schematransactioninprogressexception)|
|483|483|IdempotentParameterMismatchException|[IdempotentParameterMismatchException](#schemaidempotentparametermismatchexception)|
|484|484|ProvisionedThroughputExceededException|[ProvisionedThroughputExceededException](#schemaprovisionedthroughputexceededexception)|
|485|485|RequestLimitExceeded|[RequestLimitExceeded](#schemarequestlimitexceeded)|
|486|486|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ExportTableToPointInTime

<a id="opIdExportTableToPointInTime"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.ExportTableToPointInTime' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.ExportTableToPointInTime' \
  -d '{
    "TableArn": {},
    "ExportTime": {},
    "ClientToken": {},
    "S3Bucket": {},
    "S3BucketOwner": {},
    "S3Prefix": {},
    "S3SseAlgorithm": {},
    "S3SseKmsKeyId": {},
    "ExportFormat": {}
  }'
```

`POST /#X-Amz-Target=DynamoDB_20120810.ExportTableToPointInTime`

Exports table data to an S3 bucket. The table must have point in time recovery enabled, and you can export data from any time within the point in time recovery window.

> Body parameter

```json
{
  "TableArn": {},
  "ExportTime": {},
  "ClientToken": {},
  "S3Bucket": {},
  "S3BucketOwner": {},
  "S3Prefix": {},
  "S3SseAlgorithm": {},
  "S3SseKmsKeyId": {},
  "ExportFormat": {}
}
```

<h3 id="exporttabletopointintime-parameters">Parameters</h3>

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
|body|body|[ExportTableToPointInTimeInput](#schemaexporttabletopointintimeinput)|true|none|
|» TableArn|body|object|true|none|
|» ExportTime|body|object|false|none|
|» ClientToken|body|object|false|none|
|» S3Bucket|body|object|true|none|
|» S3BucketOwner|body|object|false|none|
|» S3Prefix|body|object|false|none|
|» S3SseAlgorithm|body|object|false|none|
|» S3SseKmsKeyId|body|object|false|none|
|» ExportFormat|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDB_20120810.ExportTableToPointInTime|

> Example responses

> 200 Response

```json
{
  "ExportDescription": {
    "ExportArn": {},
    "ExportStatus": {},
    "StartTime": {},
    "EndTime": {},
    "ExportManifest": {},
    "TableArn": {},
    "TableId": {},
    "ExportTime": {},
    "ClientToken": {},
    "S3Bucket": {},
    "S3BucketOwner": {},
    "S3Prefix": {},
    "S3SseAlgorithm": {},
    "S3SseKmsKeyId": {},
    "FailureCode": {},
    "FailureMessage": {},
    "ExportFormat": {},
    "BilledSizeBytes": {},
    "ItemCount": {}
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

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="exporttabletopointintime-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ExportTableToPointInTimeOutput](#schemaexporttabletopointintimeoutput)|
|480|480|TableNotFoundException|[TableNotFoundException](#schematablenotfoundexception)|
|481|481|PointInTimeRecoveryUnavailableException|[PointInTimeRecoveryUnavailableException](#schemapointintimerecoveryunavailableexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InvalidExportTimeException|[InvalidExportTimeException](#schemainvalidexporttimeexception)|
|484|484|ExportConflictException|[ExportConflictException](#schemaexportconflictexception)|
|485|485|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetItem

<a id="opIdGetItem"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.GetItem' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.GetItem' \
  -d '{
    "TableName": {},
    "Key": {
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
    "AttributesToGet": {},
    "ConsistentRead": {},
    "ReturnConsumedCapacity": "INDEXES",
    "ProjectionExpression": {},
    "ExpressionAttributeNames": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /#X-Amz-Target=DynamoDB_20120810.GetItem`

<p>The <code>GetItem</code> operation returns a set of attributes for the item with the given primary key. If there is no matching item, <code>GetItem</code> does not return any data and there will be no <code>Item</code> element in the response.</p> <p> <code>GetItem</code> provides an eventually consistent read by default. If your application requires a strongly consistent read, set <code>ConsistentRead</code> to <code>true</code>. Although a strongly consistent read might take more time than an eventually consistent read, it always returns the last updated value.</p>

> Body parameter

```json
{
  "TableName": {},
  "Key": {
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
  "AttributesToGet": {},
  "ConsistentRead": {},
  "ReturnConsumedCapacity": "INDEXES",
  "ProjectionExpression": {},
  "ExpressionAttributeNames": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="getitem-parameters">Parameters</h3>

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
|body|body|[GetItemInput](#schemagetiteminput)|true|none|
|» TableName|body|object|true|none|
|» Key|body|object|true|none|
|» » **additionalProperties**|body|[AttributeValue](#schemaattributevalue)|false|<p>Represents the data for an attribute.</p> <p>Each attribute value is described as a name-value pair. The name is the data type, and the value is the data itself.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes">Data Types</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>|
|» AttributesToGet|body|object|false|none|
|» ConsistentRead|body|object|false|none|
|» ReturnConsumedCapacity|body|[ReturnConsumedCapacity](#schemareturnconsumedcapacity)|false|<p>Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul>|
|» ProjectionExpression|body|object|false|none|
|» ExpressionAttributeNames|body|object|false|none|
|» » **additionalProperties**|body|[AttributeName](#schemaattributename)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDB_20120810.GetItem|
|» ReturnConsumedCapacity|INDEXES|
|» ReturnConsumedCapacity|TOTAL|
|» ReturnConsumedCapacity|NONE|

> Example responses

> 200 Response

```json
{
  "Item": {
    "AlbumTitle": {
      "S": "Songs About Life"
    },
    "Artist": {
      "S": "Acme Band"
    },
    "SongTitle": {
      "S": "Happy Day"
    }
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

<h3 id="getitem-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetItemOutput](#schemagetitemoutput)|
|480|480|ProvisionedThroughputExceededException|[ProvisionedThroughputExceededException](#schemaprovisionedthroughputexceededexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|RequestLimitExceeded|[RequestLimitExceeded](#schemarequestlimitexceeded)|
|483|483|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ImportTable

<a id="opIdImportTable"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.ImportTable' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.ImportTable' \
  -d '{
    "ClientToken": {},
    "S3BucketSource": {
      "S3BucketOwner": {},
      "S3Bucket": {},
      "S3KeyPrefix": {}
    },
    "InputFormat": {},
    "InputFormatOptions": {
      "Csv": {
        "Delimiter": {},
        "HeaderList": {}
      }
    },
    "InputCompressionType": {},
    "TableCreationParameters": {
      "TableName": {},
      "AttributeDefinitions": {},
      "KeySchema": {},
      "BillingMode": {},
      "ProvisionedThroughput": {
        "ReadCapacityUnits": {},
        "WriteCapacityUnits": {}
      },
      "SSESpecification": {
        "Enabled": {},
        "SSEType": {},
        "KMSMasterKeyId": {}
      },
      "GlobalSecondaryIndexes": {}
    }
  }'
```

`POST /#X-Amz-Target=DynamoDB_20120810.ImportTable`

 Imports table data from an S3 bucket. 

> Body parameter

```json
{
  "ClientToken": {},
  "S3BucketSource": {
    "S3BucketOwner": {},
    "S3Bucket": {},
    "S3KeyPrefix": {}
  },
  "InputFormat": {},
  "InputFormatOptions": {
    "Csv": {
      "Delimiter": {},
      "HeaderList": {}
    }
  },
  "InputCompressionType": {},
  "TableCreationParameters": {
    "TableName": {},
    "AttributeDefinitions": {},
    "KeySchema": {},
    "BillingMode": {},
    "ProvisionedThroughput": {
      "ReadCapacityUnits": {},
      "WriteCapacityUnits": {}
    },
    "SSESpecification": {
      "Enabled": {},
      "SSEType": {},
      "KMSMasterKeyId": {}
    },
    "GlobalSecondaryIndexes": {}
  }
}
```

<h3 id="importtable-parameters">Parameters</h3>

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
|body|body|[ImportTableInput](#schemaimporttableinput)|true|none|
|» ClientToken|body|object|false|none|
|» S3BucketSource|body|object|true|none|
|» » S3BucketOwner|body|object|false|none|
|» » S3Bucket|body|object|true|none|
|» » S3KeyPrefix|body|object|false|none|
|» InputFormat|body|object|true|none|
|» InputFormatOptions|body|object|false|none|
|» » Csv|body|object|false|none|
|» » » Delimiter|body|object|false|none|
|» » » HeaderList|body|object|false|none|
|» InputCompressionType|body|object|false|none|
|» TableCreationParameters|body|object|true|none|
|» » TableName|body|object|true|none|
|» » AttributeDefinitions|body|object|true|none|
|» » KeySchema|body|object|true|none|
|» » BillingMode|body|object|false|none|
|» » ProvisionedThroughput|body|[ProvisionedThroughput](#schemaprovisionedthroughput)|false|<p>Represents the provisioned throughput settings for a specified table or index. The settings can be modified using the <code>UpdateTable</code> operation.</p> <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Service, Account, and Table Quotas</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>|
|» » SSESpecification|body|[SSESpecification](#schemassespecification)|false|Represents the settings used to enable server-side encryption.|
|» » GlobalSecondaryIndexes|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDB_20120810.ImportTable|

> Example responses

> 200 Response

```json
{
  "ImportTableDescription": {
    "ImportArn": {},
    "ImportStatus": {},
    "TableArn": {},
    "TableId": {},
    "ClientToken": {},
    "S3BucketSource": {
      "S3BucketOwner": {},
      "S3Bucket": {},
      "S3KeyPrefix": {}
    },
    "ErrorCount": {},
    "CloudWatchLogGroupArn": {},
    "InputFormat": {},
    "InputFormatOptions": {
      "Csv": {
        "Delimiter": {},
        "HeaderList": {}
      }
    },
    "InputCompressionType": {},
    "TableCreationParameters": {
      "TableName": {},
      "AttributeDefinitions": {},
      "KeySchema": {},
      "BillingMode": {},
      "ProvisionedThroughput": {
        "ReadCapacityUnits": {},
        "WriteCapacityUnits": {}
      },
      "SSESpecification": {
        "Enabled": {},
        "SSEType": {},
        "KMSMasterKeyId": {}
      },
      "GlobalSecondaryIndexes": {}
    },
    "StartTime": {},
    "EndTime": {},
    "ProcessedSizeBytes": {},
    "ProcessedItemCount": {},
    "ImportedItemCount": {},
    "FailureCode": {},
    "FailureMessage": {}
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

<h3 id="importtable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ImportTableOutput](#schemaimporttableoutput)|
|480|480|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|ImportConflictException|[ImportConflictException](#schemaimportconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListBackups

<a id="opIdListBackups"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.ListBackups' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.ListBackups' \
  -d '{
    "TableName": {},
    "Limit": {},
    "TimeRangeLowerBound": {},
    "TimeRangeUpperBound": {},
    "ExclusiveStartBackupArn": {},
    "BackupType": {}
  }'
```

`POST /#X-Amz-Target=DynamoDB_20120810.ListBackups`

<p>List backups associated with an Amazon Web Services account. To list backups for a given table, specify <code>TableName</code>. <code>ListBackups</code> returns a paginated list of results with at most 1 MB worth of items in a page. You can also specify a maximum number of entries to be returned in a page.</p> <p>In the request, start time is inclusive, but end time is exclusive. Note that these boundaries are for the time at which the original backup was requested.</p> <p>You can call <code>ListBackups</code> a maximum of five times per second.</p>

> Body parameter

```json
{
  "TableName": {},
  "Limit": {},
  "TimeRangeLowerBound": {},
  "TimeRangeUpperBound": {},
  "ExclusiveStartBackupArn": {},
  "BackupType": {}
}
```

<h3 id="listbackups-parameters">Parameters</h3>

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
|body|body|[ListBackupsInput](#schemalistbackupsinput)|true|none|
|» TableName|body|object|false|none|
|» Limit|body|object|false|none|
|» TimeRangeLowerBound|body|object|false|none|
|» TimeRangeUpperBound|body|object|false|none|
|» ExclusiveStartBackupArn|body|object|false|none|
|» BackupType|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDB_20120810.ListBackups|

> Example responses

> 200 Response

```json
{
  "BackupSummaries": {},
  "LastEvaluatedBackupArn": {}
}
```

> 480 Response

```json
null
```

<h3 id="listbackups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListBackupsOutput](#schemalistbackupsoutput)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListContributorInsights

<a id="opIdListContributorInsights"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.ListContributorInsights' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.ListContributorInsights' \
  -d '{
    "TableName": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=DynamoDB_20120810.ListContributorInsights`

Returns a list of ContributorInsightsSummary for a table and all its global secondary indexes.

> Body parameter

```json
{
  "TableName": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listcontributorinsights-parameters">Parameters</h3>

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
|body|body|[ListContributorInsightsInput](#schemalistcontributorinsightsinput)|true|none|
|» TableName|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDB_20120810.ListContributorInsights|

> Example responses

> 200 Response

```json
{
  "ContributorInsightsSummaries": {},
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

<h3 id="listcontributorinsights-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListContributorInsightsOutput](#schemalistcontributorinsightsoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListExports

<a id="opIdListExports"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.ListExports' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.ListExports' \
  -d '{
    "TableArn": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=DynamoDB_20120810.ListExports`

Lists completed exports within the past 90 days.

> Body parameter

```json
{
  "TableArn": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listexports-parameters">Parameters</h3>

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
|body|body|[ListExportsInput](#schemalistexportsinput)|true|none|
|» TableArn|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDB_20120810.ListExports|

> Example responses

> 200 Response

```json
{
  "ExportSummaries": {},
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

<h3 id="listexports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListExportsOutput](#schemalistexportsoutput)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListGlobalTables

<a id="opIdListGlobalTables"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.ListGlobalTables' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.ListGlobalTables' \
  -d '{
    "ExclusiveStartGlobalTableName": {},
    "Limit": {},
    "RegionName": {}
  }'
```

`POST /#X-Amz-Target=DynamoDB_20120810.ListGlobalTables`

<p>Lists all global tables that have a replica in the specified Region.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29 (Legacy)</a> of global tables. We recommend using <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> when creating new global tables, as it provides greater flexibility, higher efficiency and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you are using, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.DetermineVersion.html">Determining the version</a>. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html"> Updating global tables</a>. </p> </important>

> Body parameter

```json
{
  "ExclusiveStartGlobalTableName": {},
  "Limit": {},
  "RegionName": {}
}
```

<h3 id="listglobaltables-parameters">Parameters</h3>

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
|body|body|[ListGlobalTablesInput](#schemalistglobaltablesinput)|true|none|
|» ExclusiveStartGlobalTableName|body|object|false|none|
|» Limit|body|object|false|none|
|» RegionName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDB_20120810.ListGlobalTables|

> Example responses

> 200 Response

```json
{
  "GlobalTables": {},
  "LastEvaluatedGlobalTableName": {}
}
```

> 480 Response

```json
null
```

<h3 id="listglobaltables-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListGlobalTablesOutput](#schemalistglobaltablesoutput)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListImports

<a id="opIdListImports"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.ListImports' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.ListImports' \
  -d '{
    "TableArn": {},
    "PageSize": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=DynamoDB_20120810.ListImports`

 Lists completed imports within the past 90 days. 

> Body parameter

```json
{
  "TableArn": {},
  "PageSize": {},
  "NextToken": {}
}
```

<h3 id="listimports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PageSize|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListImportsInput](#schemalistimportsinput)|true|none|
|» TableArn|body|object|false|none|
|» PageSize|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDB_20120810.ListImports|

> Example responses

> 200 Response

```json
{
  "ImportSummaryList": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="listimports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListImportsOutput](#schemalistimportsoutput)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTables

<a id="opIdListTables"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.ListTables' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.ListTables' \
  -d '{
    "ExclusiveStartTableName": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=DynamoDB_20120810.ListTables`

Returns an array of table names associated with the current account and endpoint. The output from <code>ListTables</code> is paginated, with each page returning a maximum of 100 table names.

> Body parameter

```json
{
  "ExclusiveStartTableName": {},
  "Limit": {}
}
```

<h3 id="listtables-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|ExclusiveStartTableName|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListTablesInput](#schemalisttablesinput)|true|none|
|» ExclusiveStartTableName|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDB_20120810.ListTables|

> Example responses

> 200 Response

```json
{
  "TableNames": [
    "Forum",
    "ProductCatalog",
    "Reply",
    "Thread"
  ]
}
```

> 480 Response

```json
null
```

<h3 id="listtables-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTablesOutput](#schemalisttablesoutput)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsOfResource

<a id="opIdListTagsOfResource"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.ListTagsOfResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.ListTagsOfResource' \
  -d '{
    "ResourceArn": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=DynamoDB_20120810.ListTagsOfResource`

<p>List all tags on an Amazon DynamoDB resource. You can call ListTagsOfResource up to 10 times per second, per account.</p> <p>For an overview on tagging DynamoDB resources, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html">Tagging for DynamoDB</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>

> Body parameter

```json
{
  "ResourceArn": {},
  "NextToken": {}
}
```

<h3 id="listtagsofresource-parameters">Parameters</h3>

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
|body|body|[ListTagsOfResourceInput](#schemalisttagsofresourceinput)|true|none|
|» ResourceArn|body|object|true|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDB_20120810.ListTagsOfResource|

> Example responses

> 200 Response

```json
{
  "Tags": {},
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

<h3 id="listtagsofresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsOfResourceOutput](#schemalisttagsofresourceoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutItem

<a id="opIdPutItem"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.PutItem' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.PutItem' \
  -d '{
    "TableName": {},
    "Item": {
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
    "Expected": {
      "property1": {
        "Value": {
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
        "Exists": {},
        "ComparisonOperator": {},
        "AttributeValueList": {}
      },
      "property2": {
        "Value": {
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
        "Exists": {},
        "ComparisonOperator": {},
        "AttributeValueList": {}
      }
    },
    "ReturnValues": {},
    "ReturnConsumedCapacity": "INDEXES",
    "ReturnItemCollectionMetrics": {},
    "ConditionalOperator": {},
    "ConditionExpression": {},
    "ExpressionAttributeNames": {
      "property1": "string",
      "property2": "string"
    },
    "ExpressionAttributeValues": {
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
    "ReturnValuesOnConditionCheckFailure": {}
  }'
```

`POST /#X-Amz-Target=DynamoDB_20120810.PutItem`

<p>Creates a new item, or replaces an old item with a new item. If an item that has the same primary key as the new item already exists in the specified table, the new item completely replaces the existing item. You can perform a conditional put operation (add a new item if one with the specified primary key doesn't exist), or replace an existing item if it has certain attribute values. You can return the item's attribute values in the same operation, using the <code>ReturnValues</code> parameter.</p> <p>When you add an item, the primary key attributes are the only required attributes. </p> <p>Empty String and Binary attribute values are allowed. Attribute values of type String and Binary must have a length greater than zero if the attribute is used as a key attribute for a table or index. Set type attributes cannot be empty. </p> <p>Invalid Requests with empty values will be rejected with a <code>ValidationException</code> exception.</p> <note> <p>To prevent a new item from replacing an existing item, use a conditional expression that contains the <code>attribute_not_exists</code> function with the name of the attribute being used as the partition key for the table. Since every record must contain that attribute, the <code>attribute_not_exists</code> function will only succeed if no matching item exists.</p> </note> <p>For more information about <code>PutItem</code>, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithItems.html">Working with Items</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>

> Body parameter

```json
{
  "TableName": {},
  "Item": {
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
  "Expected": {
    "property1": {
      "Value": {
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
      "Exists": {},
      "ComparisonOperator": {},
      "AttributeValueList": {}
    },
    "property2": {
      "Value": {
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
      "Exists": {},
      "ComparisonOperator": {},
      "AttributeValueList": {}
    }
  },
  "ReturnValues": {},
  "ReturnConsumedCapacity": "INDEXES",
  "ReturnItemCollectionMetrics": {},
  "ConditionalOperator": {},
  "ConditionExpression": {},
  "ExpressionAttributeNames": {
    "property1": "string",
    "property2": "string"
  },
  "ExpressionAttributeValues": {
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
  "ReturnValuesOnConditionCheckFailure": {}
}
```

<h3 id="putitem-parameters">Parameters</h3>

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
|body|body|[PutItemInput](#schemaputiteminput)|true|none|
|» TableName|body|object|true|none|
|» Item|body|object|true|none|
|» » **additionalProperties**|body|[AttributeValue](#schemaattributevalue)|false|<p>Represents the data for an attribute.</p> <p>Each attribute value is described as a name-value pair. The name is the data type, and the value is the data itself.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes">Data Types</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>|
|» Expected|body|object|false|none|
|» » **additionalProperties**|body|[ExpectedAttributeValue](#schemaexpectedattributevalue)|false|<p>Represents a condition to be compared with an attribute value. This condition can be used with <code>DeleteItem</code>, <code>PutItem</code>, or <code>UpdateItem</code> operations; if the comparison evaluates to true, the operation succeeds; if not, the operation fails. You can use <code>ExpectedAttributeValue</code> in one of two different ways:</p> <ul> <li> <p>Use <code>AttributeValueList</code> to specify one or more values to compare against an attribute. Use <code>ComparisonOperator</code> to specify how you want to perform the comparison. If the comparison evaluates to true, then the conditional operation succeeds.</p> </li> <li> <p>Use <code>Value</code> to specify a value that DynamoDB will compare against an attribute. If the values match, then <code>ExpectedAttributeValue</code> evaluates to true and the conditional operation succeeds. Optionally, you can also set <code>Exists</code> to false, indicating that you <i>do not</i> expect to find the attribute value in the table. In this case, the conditional operation succeeds only if the comparison evaluates to false.</p> </li> </ul> <p> <code>Value</code> and <code>Exists</code> are incompatible with <code>AttributeValueList</code> and <code>ComparisonOperator</code>. Note that if you use both sets of parameters at once, DynamoDB will return a <code>ValidationException</code> exception.</p>|
|» ReturnValues|body|object|false|none|
|» ReturnConsumedCapacity|body|[ReturnConsumedCapacity](#schemareturnconsumedcapacity)|false|<p>Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul>|
|» ReturnItemCollectionMetrics|body|object|false|none|
|» ConditionalOperator|body|object|false|none|
|» ConditionExpression|body|object|false|none|
|» ExpressionAttributeNames|body|object|false|none|
|» » **additionalProperties**|body|[AttributeName](#schemaattributename)|false|none|
|» ExpressionAttributeValues|body|object|false|none|
|» » **additionalProperties**|body|[AttributeValue](#schemaattributevalue)|false|<p>Represents the data for an attribute.</p> <p>Each attribute value is described as a name-value pair. The name is the data type, and the value is the data itself.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes">Data Types</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>|
|» ReturnValuesOnConditionCheckFailure|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDB_20120810.PutItem|
|» ReturnConsumedCapacity|INDEXES|
|» ReturnConsumedCapacity|TOTAL|
|» ReturnConsumedCapacity|NONE|

> Example responses

> 200 Response

```json
{
  "ConsumedCapacity": {
    "CapacityUnits": 1,
    "TableName": "Music"
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

<h3 id="putitem-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutItemOutput](#schemaputitemoutput)|
|480|480|ConditionalCheckFailedException|[ConditionalCheckFailedException](#schemaconditionalcheckfailedexception)|
|481|481|ProvisionedThroughputExceededException|[ProvisionedThroughputExceededException](#schemaprovisionedthroughputexceededexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ItemCollectionSizeLimitExceededException|[ItemCollectionSizeLimitExceededException](#schemaitemcollectionsizelimitexceededexception)|
|484|484|TransactionConflictException|[TransactionConflictException](#schematransactionconflictexception)|
|485|485|RequestLimitExceeded|[RequestLimitExceeded](#schemarequestlimitexceeded)|
|486|486|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## Query

<a id="opIdQuery"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.Query' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.Query' \
  -d '{
    "TableName": {},
    "IndexName": {},
    "Select": {},
    "AttributesToGet": {},
    "Limit": {},
    "ConsistentRead": {},
    "KeyConditions": {
      "property1": {
        "AttributeValueList": {},
        "ComparisonOperator": {}
      },
      "property2": {
        "AttributeValueList": {},
        "ComparisonOperator": {}
      }
    },
    "QueryFilter": {
      "property1": {
        "AttributeValueList": {},
        "ComparisonOperator": {}
      },
      "property2": {
        "AttributeValueList": {},
        "ComparisonOperator": {}
      }
    },
    "ConditionalOperator": {},
    "ScanIndexForward": {},
    "ExclusiveStartKey": {
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
    "ReturnConsumedCapacity": "INDEXES",
    "ProjectionExpression": {},
    "FilterExpression": {},
    "KeyConditionExpression": {},
    "ExpressionAttributeNames": {
      "property1": "string",
      "property2": "string"
    },
    "ExpressionAttributeValues": {
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
  }'
```

`POST /#X-Amz-Target=DynamoDB_20120810.Query`

<p>You must provide the name of the partition key attribute and a single value for that attribute. <code>Query</code> returns all items with that partition key value. Optionally, you can provide a sort key attribute and use a comparison operator to refine the search results.</p> <p>Use the <code>KeyConditionExpression</code> parameter to provide a specific value for the partition key. The <code>Query</code> operation will return all of the items from the table or index with that partition key value. You can optionally narrow the scope of the <code>Query</code> operation by specifying a sort key value and a comparison operator in <code>KeyConditionExpression</code>. To further refine the <code>Query</code> results, you can optionally provide a <code>FilterExpression</code>. A <code>FilterExpression</code> determines which items within the results should be returned to you. All of the other results are discarded. </p> <p> A <code>Query</code> operation always returns a result set. If no matching items are found, the result set will be empty. Queries that do not return results consume the minimum number of read capacity units for that type of read operation. </p> <note> <p> DynamoDB calculates the number of read capacity units consumed based on item size, not on the amount of data that is returned to an application. The number of capacity units consumed will be the same whether you request all of the attributes (the default behavior) or just some of them (using a projection expression). The number will also be the same whether or not you use a <code>FilterExpression</code>. </p> </note> <p> <code>Query</code> results are always sorted by the sort key value. If the data type of the sort key is Number, the results are returned in numeric order; otherwise, the results are returned in order of UTF-8 bytes. By default, the sort order is ascending. To reverse the order, set the <code>ScanIndexForward</code> parameter to false. </p> <p> A single <code>Query</code> operation will read up to the maximum number of items set (if using the <code>Limit</code> parameter) or a maximum of 1 MB of data and then apply any filtering to the results using <code>FilterExpression</code>. If <code>LastEvaluatedKey</code> is present in the response, you will need to paginate the result set. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Query.html#Query.Pagination">Paginating the Results</a> in the <i>Amazon DynamoDB Developer Guide</i>. </p> <p> <code>FilterExpression</code> is applied after a <code>Query</code> finishes, but before the results are returned. A <code>FilterExpression</code> cannot contain partition key or sort key attributes. You need to specify those attributes in the <code>KeyConditionExpression</code>. </p> <note> <p> A <code>Query</code> operation can return an empty result set and a <code>LastEvaluatedKey</code> if all the items read for the page of results are filtered out. </p> </note> <p>You can query a table, a local secondary index, or a global secondary index. For a query on a table or on a local secondary index, you can set the <code>ConsistentRead</code> parameter to <code>true</code> and obtain a strongly consistent result. Global secondary indexes support eventually consistent reads only, so do not specify <code>ConsistentRead</code> when querying a global secondary index.</p>

> Body parameter

```json
{
  "TableName": {},
  "IndexName": {},
  "Select": {},
  "AttributesToGet": {},
  "Limit": {},
  "ConsistentRead": {},
  "KeyConditions": {
    "property1": {
      "AttributeValueList": {},
      "ComparisonOperator": {}
    },
    "property2": {
      "AttributeValueList": {},
      "ComparisonOperator": {}
    }
  },
  "QueryFilter": {
    "property1": {
      "AttributeValueList": {},
      "ComparisonOperator": {}
    },
    "property2": {
      "AttributeValueList": {},
      "ComparisonOperator": {}
    }
  },
  "ConditionalOperator": {},
  "ScanIndexForward": {},
  "ExclusiveStartKey": {
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
  "ReturnConsumedCapacity": "INDEXES",
  "ProjectionExpression": {},
  "FilterExpression": {},
  "KeyConditionExpression": {},
  "ExpressionAttributeNames": {
    "property1": "string",
    "property2": "string"
  },
  "ExpressionAttributeValues": {
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
}
```

<h3 id="query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|ExclusiveStartKey|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[QueryInput](#schemaqueryinput)|true|none|
|» TableName|body|object|true|none|
|» IndexName|body|object|false|none|
|» Select|body|object|false|none|
|» AttributesToGet|body|object|false|none|
|» Limit|body|object|false|none|
|» ConsistentRead|body|object|false|none|
|» KeyConditions|body|object|false|none|
|» » **additionalProperties**|body|[Condition](#schemacondition)|false|<p>Represents the selection criteria for a <code>Query</code> or <code>Scan</code> operation:</p> <ul> <li> <p>For a <code>Query</code> operation, <code>Condition</code> is used for specifying the <code>KeyConditions</code> to use when querying a table or an index. For <code>KeyConditions</code>, only the following comparison operators are supported:</p> <p> <code>EQ \| LE \| LT \| GE \| GT \| BEGINS_WITH \| BETWEEN</code> </p> <p> <code>Condition</code> is also used in a <code>QueryFilter</code>, which evaluates the query results and returns only the desired values.</p> </li> <li> <p>For a <code>Scan</code> operation, <code>Condition</code> is used in a <code>ScanFilter</code>, which evaluates the scan results and returns only the desired values.</p> </li> </ul>|
|» QueryFilter|body|object|false|none|
|» » **additionalProperties**|body|[Condition](#schemacondition)|false|<p>Represents the selection criteria for a <code>Query</code> or <code>Scan</code> operation:</p> <ul> <li> <p>For a <code>Query</code> operation, <code>Condition</code> is used for specifying the <code>KeyConditions</code> to use when querying a table or an index. For <code>KeyConditions</code>, only the following comparison operators are supported:</p> <p> <code>EQ \| LE \| LT \| GE \| GT \| BEGINS_WITH \| BETWEEN</code> </p> <p> <code>Condition</code> is also used in a <code>QueryFilter</code>, which evaluates the query results and returns only the desired values.</p> </li> <li> <p>For a <code>Scan</code> operation, <code>Condition</code> is used in a <code>ScanFilter</code>, which evaluates the scan results and returns only the desired values.</p> </li> </ul>|
|» ConditionalOperator|body|object|false|none|
|» ScanIndexForward|body|object|false|none|
|» ExclusiveStartKey|body|object|false|none|
|» » **additionalProperties**|body|[AttributeValue](#schemaattributevalue)|false|<p>Represents the data for an attribute.</p> <p>Each attribute value is described as a name-value pair. The name is the data type, and the value is the data itself.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes">Data Types</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>|
|» ReturnConsumedCapacity|body|[ReturnConsumedCapacity](#schemareturnconsumedcapacity)|false|<p>Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul>|
|» ProjectionExpression|body|object|false|none|
|» FilterExpression|body|object|false|none|
|» KeyConditionExpression|body|object|false|none|
|» ExpressionAttributeNames|body|object|false|none|
|» » **additionalProperties**|body|[AttributeName](#schemaattributename)|false|none|
|» ExpressionAttributeValues|body|object|false|none|
|» » **additionalProperties**|body|[AttributeValue](#schemaattributevalue)|false|<p>Represents the data for an attribute.</p> <p>Each attribute value is described as a name-value pair. The name is the data type, and the value is the data itself.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes">Data Types</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDB_20120810.Query|
|» ReturnConsumedCapacity|INDEXES|
|» ReturnConsumedCapacity|TOTAL|
|» ReturnConsumedCapacity|NONE|

> Example responses

> 200 Response

```json
{
  "ConsumedCapacity": {},
  "Count": 2,
  "Items": [
    {
      "SongTitle": {
        "S": "Call Me Today"
      }
    }
  ],
  "ScannedCount": 2
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

<h3 id="query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[QueryOutput](#schemaqueryoutput)|
|480|480|ProvisionedThroughputExceededException|[ProvisionedThroughputExceededException](#schemaprovisionedthroughputexceededexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|RequestLimitExceeded|[RequestLimitExceeded](#schemarequestlimitexceeded)|
|483|483|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RestoreTableFromBackup

<a id="opIdRestoreTableFromBackup"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.RestoreTableFromBackup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.RestoreTableFromBackup' \
  -d '{
    "TargetTableName": {},
    "BackupArn": {},
    "BillingModeOverride": {},
    "GlobalSecondaryIndexOverride": {},
    "LocalSecondaryIndexOverride": {},
    "ProvisionedThroughputOverride": {
      "ReadCapacityUnits": {},
      "WriteCapacityUnits": {}
    },
    "SSESpecificationOverride": {
      "Enabled": {},
      "SSEType": {},
      "KMSMasterKeyId": {}
    }
  }'
```

`POST /#X-Amz-Target=DynamoDB_20120810.RestoreTableFromBackup`

<p>Creates a new table from an existing backup. Any number of users can execute up to 50 concurrent restores (any type of restore) in a given account. </p> <p>You can call <code>RestoreTableFromBackup</code> at a maximum rate of 10 times per second.</p> <p>You must manually set up the following on the restored table:</p> <ul> <li> <p>Auto scaling policies</p> </li> <li> <p>IAM policies</p> </li> <li> <p>Amazon CloudWatch metrics and alarms</p> </li> <li> <p>Tags</p> </li> <li> <p>Stream settings</p> </li> <li> <p>Time to Live (TTL) settings</p> </li> </ul>

> Body parameter

```json
{
  "TargetTableName": {},
  "BackupArn": {},
  "BillingModeOverride": {},
  "GlobalSecondaryIndexOverride": {},
  "LocalSecondaryIndexOverride": {},
  "ProvisionedThroughputOverride": {
    "ReadCapacityUnits": {},
    "WriteCapacityUnits": {}
  },
  "SSESpecificationOverride": {
    "Enabled": {},
    "SSEType": {},
    "KMSMasterKeyId": {}
  }
}
```

<h3 id="restoretablefrombackup-parameters">Parameters</h3>

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
|body|body|[RestoreTableFromBackupInput](#schemarestoretablefrombackupinput)|true|none|
|» TargetTableName|body|object|true|none|
|» BackupArn|body|object|true|none|
|» BillingModeOverride|body|object|false|none|
|» GlobalSecondaryIndexOverride|body|object|false|none|
|» LocalSecondaryIndexOverride|body|object|false|none|
|» ProvisionedThroughputOverride|body|object|false|none|
|» » ReadCapacityUnits|body|object|true|none|
|» » WriteCapacityUnits|body|object|true|none|
|» SSESpecificationOverride|body|object|false|none|
|» » Enabled|body|object|false|none|
|» » SSEType|body|object|false|none|
|» » KMSMasterKeyId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDB_20120810.RestoreTableFromBackup|

> Example responses

> 200 Response

```json
{
  "TableDescription": {
    "AttributeDefinitions": {},
    "TableName": {},
    "KeySchema": {},
    "TableStatus": {},
    "CreationDateTime": {},
    "ProvisionedThroughput": {
      "LastIncreaseDateTime": {},
      "LastDecreaseDateTime": {},
      "NumberOfDecreasesToday": {},
      "ReadCapacityUnits": {},
      "WriteCapacityUnits": {}
    },
    "TableSizeBytes": {},
    "ItemCount": {},
    "TableArn": {},
    "TableId": {},
    "BillingModeSummary": {
      "BillingMode": {},
      "LastUpdateToPayPerRequestDateTime": {}
    },
    "LocalSecondaryIndexes": {},
    "GlobalSecondaryIndexes": {},
    "StreamSpecification": {
      "StreamEnabled": {},
      "StreamViewType": {}
    },
    "LatestStreamLabel": {},
    "LatestStreamArn": {},
    "GlobalTableVersion": {},
    "Replicas": {},
    "RestoreSummary": {
      "SourceBackupArn": {},
      "SourceTableArn": {},
      "RestoreDateTime": {},
      "RestoreInProgress": {}
    },
    "SSEDescription": {
      "Status": {},
      "SSEType": {},
      "KMSMasterKeyArn": {},
      "InaccessibleEncryptionDateTime": {}
    },
    "ArchivalSummary": {
      "ArchivalDateTime": {},
      "ArchivalReason": {},
      "ArchivalBackupArn": {}
    },
    "TableClassSummary": {
      "TableClass": {},
      "LastUpdateDateTime": {}
    },
    "DeletionProtectionEnabled": {}
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

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="restoretablefrombackup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RestoreTableFromBackupOutput](#schemarestoretablefrombackupoutput)|
|480|480|TableAlreadyExistsException|[TableAlreadyExistsException](#schematablealreadyexistsexception)|
|481|481|TableInUseException|[TableInUseException](#schematableinuseexception)|
|482|482|BackupNotFoundException|[BackupNotFoundException](#schemabackupnotfoundexception)|
|483|483|BackupInUseException|[BackupInUseException](#schemabackupinuseexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RestoreTableToPointInTime

<a id="opIdRestoreTableToPointInTime"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.RestoreTableToPointInTime' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.RestoreTableToPointInTime' \
  -d '{
    "SourceTableArn": {},
    "SourceTableName": {},
    "TargetTableName": {},
    "UseLatestRestorableTime": {},
    "RestoreDateTime": {},
    "BillingModeOverride": {},
    "GlobalSecondaryIndexOverride": {},
    "LocalSecondaryIndexOverride": {},
    "ProvisionedThroughputOverride": {
      "ReadCapacityUnits": {},
      "WriteCapacityUnits": {}
    },
    "SSESpecificationOverride": {
      "Enabled": {},
      "SSEType": {},
      "KMSMasterKeyId": {}
    }
  }'
```

`POST /#X-Amz-Target=DynamoDB_20120810.RestoreTableToPointInTime`

<p>Restores the specified table to the specified point in time within <code>EarliestRestorableDateTime</code> and <code>LatestRestorableDateTime</code>. You can restore your table to any point in time during the last 35 days. Any number of users can execute up to 4 concurrent restores (any type of restore) in a given account. </p> <p> When you restore using point in time recovery, DynamoDB restores your table data to the state based on the selected date and time (day:hour:minute:second) to a new table. </p> <p> Along with data, the following are also included on the new restored table using point in time recovery: </p> <ul> <li> <p>Global secondary indexes (GSIs)</p> </li> <li> <p>Local secondary indexes (LSIs)</p> </li> <li> <p>Provisioned read and write capacity</p> </li> <li> <p>Encryption settings</p> <important> <p> All these settings come from the current settings of the source table at the time of restore. </p> </important> </li> </ul> <p>You must manually set up the following on the restored table:</p> <ul> <li> <p>Auto scaling policies</p> </li> <li> <p>IAM policies</p> </li> <li> <p>Amazon CloudWatch metrics and alarms</p> </li> <li> <p>Tags</p> </li> <li> <p>Stream settings</p> </li> <li> <p>Time to Live (TTL) settings</p> </li> <li> <p>Point in time recovery settings</p> </li> </ul>

> Body parameter

```json
{
  "SourceTableArn": {},
  "SourceTableName": {},
  "TargetTableName": {},
  "UseLatestRestorableTime": {},
  "RestoreDateTime": {},
  "BillingModeOverride": {},
  "GlobalSecondaryIndexOverride": {},
  "LocalSecondaryIndexOverride": {},
  "ProvisionedThroughputOverride": {
    "ReadCapacityUnits": {},
    "WriteCapacityUnits": {}
  },
  "SSESpecificationOverride": {
    "Enabled": {},
    "SSEType": {},
    "KMSMasterKeyId": {}
  }
}
```

<h3 id="restoretabletopointintime-parameters">Parameters</h3>

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
|body|body|[RestoreTableToPointInTimeInput](#schemarestoretabletopointintimeinput)|true|none|
|» SourceTableArn|body|object|false|none|
|» SourceTableName|body|object|false|none|
|» TargetTableName|body|object|true|none|
|» UseLatestRestorableTime|body|object|false|none|
|» RestoreDateTime|body|object|false|none|
|» BillingModeOverride|body|object|false|none|
|» GlobalSecondaryIndexOverride|body|object|false|none|
|» LocalSecondaryIndexOverride|body|object|false|none|
|» ProvisionedThroughputOverride|body|object|false|none|
|» » ReadCapacityUnits|body|object|true|none|
|» » WriteCapacityUnits|body|object|true|none|
|» SSESpecificationOverride|body|object|false|none|
|» » Enabled|body|object|false|none|
|» » SSEType|body|object|false|none|
|» » KMSMasterKeyId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDB_20120810.RestoreTableToPointInTime|

> Example responses

> 200 Response

```json
{
  "TableDescription": {
    "AttributeDefinitions": {},
    "TableName": {},
    "KeySchema": {},
    "TableStatus": {},
    "CreationDateTime": {},
    "ProvisionedThroughput": {
      "LastIncreaseDateTime": {},
      "LastDecreaseDateTime": {},
      "NumberOfDecreasesToday": {},
      "ReadCapacityUnits": {},
      "WriteCapacityUnits": {}
    },
    "TableSizeBytes": {},
    "ItemCount": {},
    "TableArn": {},
    "TableId": {},
    "BillingModeSummary": {
      "BillingMode": {},
      "LastUpdateToPayPerRequestDateTime": {}
    },
    "LocalSecondaryIndexes": {},
    "GlobalSecondaryIndexes": {},
    "StreamSpecification": {
      "StreamEnabled": {},
      "StreamViewType": {}
    },
    "LatestStreamLabel": {},
    "LatestStreamArn": {},
    "GlobalTableVersion": {},
    "Replicas": {},
    "RestoreSummary": {
      "SourceBackupArn": {},
      "SourceTableArn": {},
      "RestoreDateTime": {},
      "RestoreInProgress": {}
    },
    "SSEDescription": {
      "Status": {},
      "SSEType": {},
      "KMSMasterKeyArn": {},
      "InaccessibleEncryptionDateTime": {}
    },
    "ArchivalSummary": {
      "ArchivalDateTime": {},
      "ArchivalReason": {},
      "ArchivalBackupArn": {}
    },
    "TableClassSummary": {
      "TableClass": {},
      "LastUpdateDateTime": {}
    },
    "DeletionProtectionEnabled": {}
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

<h3 id="restoretabletopointintime-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RestoreTableToPointInTimeOutput](#schemarestoretabletopointintimeoutput)|
|480|480|TableAlreadyExistsException|[TableAlreadyExistsException](#schematablealreadyexistsexception)|
|481|481|TableNotFoundException|[TableNotFoundException](#schematablenotfoundexception)|
|482|482|TableInUseException|[TableInUseException](#schematableinuseexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|InvalidRestoreTimeException|[InvalidRestoreTimeException](#schemainvalidrestoretimeexception)|
|485|485|PointInTimeRecoveryUnavailableException|[PointInTimeRecoveryUnavailableException](#schemapointintimerecoveryunavailableexception)|
|486|486|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## Scan

<a id="opIdScan"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.Scan' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.Scan' \
  -d '{
    "TableName": {},
    "IndexName": {},
    "AttributesToGet": {},
    "Limit": {},
    "Select": {},
    "ScanFilter": {
      "property1": {
        "AttributeValueList": {},
        "ComparisonOperator": {}
      },
      "property2": {
        "AttributeValueList": {},
        "ComparisonOperator": {}
      }
    },
    "ConditionalOperator": {},
    "ExclusiveStartKey": {
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
    "ReturnConsumedCapacity": "INDEXES",
    "TotalSegments": {},
    "Segment": {},
    "ProjectionExpression": {},
    "FilterExpression": {},
    "ExpressionAttributeNames": {
      "property1": "string",
      "property2": "string"
    },
    "ExpressionAttributeValues": {
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
    "ConsistentRead": {}
  }'
```

`POST /#X-Amz-Target=DynamoDB_20120810.Scan`

<p>The <code>Scan</code> operation returns one or more items and item attributes by accessing every item in a table or a secondary index. To have DynamoDB return fewer items, you can provide a <code>FilterExpression</code> operation.</p> <p>If the total size of scanned items exceeds the maximum dataset size limit of 1 MB, the scan completes and results are returned to the user. The <code>LastEvaluatedKey</code> value is also returned and the requestor can use the <code>LastEvaluatedKey</code> to continue the scan in a subsequent operation. Each scan response also includes number of items that were scanned (ScannedCount) as part of the request. If using a <code>FilterExpression</code>, a scan result can result in no items meeting the criteria and the <code>Count</code> will result in zero. If you did not use a <code>FilterExpression</code> in the scan request, then <code>Count</code> is the same as <code>ScannedCount</code>.</p> <note> <p> <code>Count</code> and <code>ScannedCount</code> only return the count of items specific to a single scan request and, unless the table is less than 1MB, do not represent the total number of items in the table. </p> </note> <p>A single <code>Scan</code> operation first reads up to the maximum number of items set (if using the <code>Limit</code> parameter) or a maximum of 1 MB of data and then applies any filtering to the results if a <code>FilterExpression</code> is provided. If <code>LastEvaluatedKey</code> is present in the response, pagination is required to complete the full table scan. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Scan.html#Scan.Pagination">Paginating the Results</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> <p> <code>Scan</code> operations proceed sequentially; however, for faster performance on a large table or secondary index, applications can request a parallel <code>Scan</code> operation by providing the <code>Segment</code> and <code>TotalSegments</code> parameters. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Scan.html#Scan.ParallelScan">Parallel Scan</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> <p>By default, a <code>Scan</code> uses eventually consistent reads when accessing the items in a table. Therefore, the results from an eventually consistent <code>Scan</code> may not include the latest item changes at the time the scan iterates through each item in the table. If you require a strongly consistent read of each item as the scan iterates through the items in the table, you can set the <code>ConsistentRead</code> parameter to true. Strong consistency only relates to the consistency of the read at the item level.</p> <note> <p> DynamoDB does not provide snapshot isolation for a scan operation when the <code>ConsistentRead</code> parameter is set to true. Thus, a DynamoDB scan operation does not guarantee that all reads in a scan see a consistent snapshot of the table when the scan operation was requested. </p> </note>

> Body parameter

```json
{
  "TableName": {},
  "IndexName": {},
  "AttributesToGet": {},
  "Limit": {},
  "Select": {},
  "ScanFilter": {
    "property1": {
      "AttributeValueList": {},
      "ComparisonOperator": {}
    },
    "property2": {
      "AttributeValueList": {},
      "ComparisonOperator": {}
    }
  },
  "ConditionalOperator": {},
  "ExclusiveStartKey": {
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
  "ReturnConsumedCapacity": "INDEXES",
  "TotalSegments": {},
  "Segment": {},
  "ProjectionExpression": {},
  "FilterExpression": {},
  "ExpressionAttributeNames": {
    "property1": "string",
    "property2": "string"
  },
  "ExpressionAttributeValues": {
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
  "ConsistentRead": {}
}
```

<h3 id="scan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|ExclusiveStartKey|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ScanInput](#schemascaninput)|true|none|
|» TableName|body|object|true|none|
|» IndexName|body|object|false|none|
|» AttributesToGet|body|object|false|none|
|» Limit|body|object|false|none|
|» Select|body|object|false|none|
|» ScanFilter|body|object|false|none|
|» » **additionalProperties**|body|[Condition](#schemacondition)|false|<p>Represents the selection criteria for a <code>Query</code> or <code>Scan</code> operation:</p> <ul> <li> <p>For a <code>Query</code> operation, <code>Condition</code> is used for specifying the <code>KeyConditions</code> to use when querying a table or an index. For <code>KeyConditions</code>, only the following comparison operators are supported:</p> <p> <code>EQ \| LE \| LT \| GE \| GT \| BEGINS_WITH \| BETWEEN</code> </p> <p> <code>Condition</code> is also used in a <code>QueryFilter</code>, which evaluates the query results and returns only the desired values.</p> </li> <li> <p>For a <code>Scan</code> operation, <code>Condition</code> is used in a <code>ScanFilter</code>, which evaluates the scan results and returns only the desired values.</p> </li> </ul>|
|» ConditionalOperator|body|object|false|none|
|» ExclusiveStartKey|body|object|false|none|
|» » **additionalProperties**|body|[AttributeValue](#schemaattributevalue)|false|<p>Represents the data for an attribute.</p> <p>Each attribute value is described as a name-value pair. The name is the data type, and the value is the data itself.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes">Data Types</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>|
|» ReturnConsumedCapacity|body|[ReturnConsumedCapacity](#schemareturnconsumedcapacity)|false|<p>Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul>|
|» TotalSegments|body|object|false|none|
|» Segment|body|object|false|none|
|» ProjectionExpression|body|object|false|none|
|» FilterExpression|body|object|false|none|
|» ExpressionAttributeNames|body|object|false|none|
|» » **additionalProperties**|body|[AttributeName](#schemaattributename)|false|none|
|» ExpressionAttributeValues|body|object|false|none|
|» » **additionalProperties**|body|[AttributeValue](#schemaattributevalue)|false|<p>Represents the data for an attribute.</p> <p>Each attribute value is described as a name-value pair. The name is the data type, and the value is the data itself.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes">Data Types</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>|
|» ConsistentRead|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDB_20120810.Scan|
|» ReturnConsumedCapacity|INDEXES|
|» ReturnConsumedCapacity|TOTAL|
|» ReturnConsumedCapacity|NONE|

> Example responses

> 200 Response

```json
{
  "ConsumedCapacity": {},
  "Count": 2,
  "Items": [
    {
      "AlbumTitle": {
        "S": "Somewhat Famous"
      },
      "SongTitle": {
        "S": "Call Me Today"
      }
    },
    {
      "AlbumTitle": {
        "S": "Blue Sky Blues"
      },
      "SongTitle": {
        "S": "Scared of My Shadow"
      }
    }
  ],
  "ScannedCount": 3
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

<h3 id="scan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ScanOutput](#schemascanoutput)|
|480|480|ProvisionedThroughputExceededException|[ProvisionedThroughputExceededException](#schemaprovisionedthroughputexceededexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|RequestLimitExceeded|[RequestLimitExceeded](#schemarequestlimitexceeded)|
|483|483|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.TagResource' \
  -d '{
    "ResourceArn": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=DynamoDB_20120810.TagResource`

<p>Associate a set of tags with an Amazon DynamoDB resource. You can then activate these user-defined tags so that they appear on the Billing and Cost Management console for cost allocation tracking. You can call TagResource up to five times per second, per account. </p> <p>For an overview on tagging DynamoDB resources, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html">Tagging for DynamoDB</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>

> Body parameter

```json
{
  "ResourceArn": {},
  "Tags": {}
}
```

<h3 id="tagresource-parameters">Parameters</h3>

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
|body|body|[TagResourceInput](#schematagresourceinput)|true|none|
|» ResourceArn|body|object|true|none|
|» Tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDB_20120810.TagResource|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|
|483|483|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TransactGetItems

<a id="opIdTransactGetItems"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.TransactGetItems' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.TransactGetItems' \
  -d '{
    "TransactItems": {},
    "ReturnConsumedCapacity": {}
  }'
```

`POST /#X-Amz-Target=DynamoDB_20120810.TransactGetItems`

<p> <code>TransactGetItems</code> is a synchronous operation that atomically retrieves multiple items from one or more tables (but not from indexes) in a single account and Region. A <code>TransactGetItems</code> call can contain up to 100 <code>TransactGetItem</code> objects, each of which contains a <code>Get</code> structure that specifies an item to retrieve from a table in the account and Region. A call to <code>TransactGetItems</code> cannot retrieve items from tables in more than one Amazon Web Services account or Region. The aggregate size of the items in the transaction cannot exceed 4 MB.</p> <p>DynamoDB rejects the entire <code>TransactGetItems</code> request if any of the following is true:</p> <ul> <li> <p>A conflicting operation is in the process of updating an item to be read.</p> </li> <li> <p>There is insufficient provisioned capacity for the transaction to be completed.</p> </li> <li> <p>There is a user error, such as an invalid data format.</p> </li> <li> <p>The aggregate size of the items in the transaction exceeded 4 MB.</p> </li> </ul>

> Body parameter

```json
{
  "TransactItems": {},
  "ReturnConsumedCapacity": {}
}
```

<h3 id="transactgetitems-parameters">Parameters</h3>

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
|body|body|[TransactGetItemsInput](#schematransactgetitemsinput)|true|none|
|» TransactItems|body|object|true|none|
|» ReturnConsumedCapacity|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDB_20120810.TransactGetItems|

> Example responses

> 200 Response

```json
{
  "ConsumedCapacity": {},
  "Responses": {}
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

<h3 id="transactgetitems-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TransactGetItemsOutput](#schematransactgetitemsoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|TransactionCanceledException|[TransactionCanceledException](#schematransactioncanceledexception)|
|482|482|ProvisionedThroughputExceededException|[ProvisionedThroughputExceededException](#schemaprovisionedthroughputexceededexception)|
|483|483|RequestLimitExceeded|[RequestLimitExceeded](#schemarequestlimitexceeded)|
|484|484|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TransactWriteItems

<a id="opIdTransactWriteItems"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.TransactWriteItems' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.TransactWriteItems' \
  -d '{
    "TransactItems": {},
    "ReturnConsumedCapacity": "INDEXES",
    "ReturnItemCollectionMetrics": {},
    "ClientRequestToken": {}
  }'
```

`POST /#X-Amz-Target=DynamoDB_20120810.TransactWriteItems`

<p> <code>TransactWriteItems</code> is a synchronous write operation that groups up to 100 action requests. These actions can target items in different tables, but not in different Amazon Web Services accounts or Regions, and no two actions can target the same item. For example, you cannot both <code>ConditionCheck</code> and <code>Update</code> the same item. The aggregate size of the items in the transaction cannot exceed 4 MB.</p> <p>The actions are completed atomically so that either all of them succeed, or all of them fail. They are defined by the following objects:</p> <ul> <li> <p> <code>Put</code>  —   Initiates a <code>PutItem</code> operation to write a new item. This structure specifies the primary key of the item to be written, the name of the table to write it in, an optional condition expression that must be satisfied for the write to succeed, a list of the item's attributes, and a field indicating whether to retrieve the item's attributes if the condition is not met.</p> </li> <li> <p> <code>Update</code>  —   Initiates an <code>UpdateItem</code> operation to update an existing item. This structure specifies the primary key of the item to be updated, the name of the table where it resides, an optional condition expression that must be satisfied for the update to succeed, an expression that defines one or more attributes to be updated, and a field indicating whether to retrieve the item's attributes if the condition is not met.</p> </li> <li> <p> <code>Delete</code>  —   Initiates a <code>DeleteItem</code> operation to delete an existing item. This structure specifies the primary key of the item to be deleted, the name of the table where it resides, an optional condition expression that must be satisfied for the deletion to succeed, and a field indicating whether to retrieve the item's attributes if the condition is not met.</p> </li> <li> <p> <code>ConditionCheck</code>  —   Applies a condition to an item that is not being modified by the transaction. This structure specifies the primary key of the item to be checked, the name of the table where it resides, a condition expression that must be satisfied for the transaction to succeed, and a field indicating whether to retrieve the item's attributes if the condition is not met.</p> </li> </ul> <p>DynamoDB rejects the entire <code>TransactWriteItems</code> request if any of the following is true:</p> <ul> <li> <p>A condition in one of the condition expressions is not met.</p> </li> <li> <p>An ongoing operation is in the process of updating the same item.</p> </li> <li> <p>There is insufficient provisioned capacity for the transaction to be completed.</p> </li> <li> <p>An item size becomes too large (bigger than 400 KB), a local secondary index (LSI) becomes too large, or a similar validation error occurs because of changes made by the transaction.</p> </li> <li> <p>The aggregate size of the items in the transaction exceeds 4 MB.</p> </li> <li> <p>There is a user error, such as an invalid data format.</p> </li> </ul>

> Body parameter

```json
{
  "TransactItems": {},
  "ReturnConsumedCapacity": "INDEXES",
  "ReturnItemCollectionMetrics": {},
  "ClientRequestToken": {}
}
```

<h3 id="transactwriteitems-parameters">Parameters</h3>

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
|body|body|[TransactWriteItemsInput](#schematransactwriteitemsinput)|true|none|
|» TransactItems|body|object|true|none|
|» ReturnConsumedCapacity|body|[ReturnConsumedCapacity](#schemareturnconsumedcapacity)|false|<p>Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul>|
|» ReturnItemCollectionMetrics|body|object|false|none|
|» ClientRequestToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDB_20120810.TransactWriteItems|
|» ReturnConsumedCapacity|INDEXES|
|» ReturnConsumedCapacity|TOTAL|
|» ReturnConsumedCapacity|NONE|

> Example responses

> 200 Response

```json
{
  "ConsumedCapacity": {},
  "ItemCollectionMetrics": {
    "property1": [
      {
        "ItemCollectionKey": {
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
        "SizeEstimateRangeGB": {}
      }
    ],
    "property2": [
      {
        "ItemCollectionKey": {
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
        "SizeEstimateRangeGB": {}
      }
    ]
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

<h3 id="transactwriteitems-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TransactWriteItemsOutput](#schematransactwriteitemsoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|TransactionCanceledException|[TransactionCanceledException](#schematransactioncanceledexception)|
|482|482|TransactionInProgressException|[TransactionInProgressException](#schematransactioninprogressexception)|
|483|483|IdempotentParameterMismatchException|[IdempotentParameterMismatchException](#schemaidempotentparametermismatchexception)|
|484|484|ProvisionedThroughputExceededException|[ProvisionedThroughputExceededException](#schemaprovisionedthroughputexceededexception)|
|485|485|RequestLimitExceeded|[RequestLimitExceeded](#schemarequestlimitexceeded)|
|486|486|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.UntagResource' \
  -d '{
    "ResourceArn": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=DynamoDB_20120810.UntagResource`

<p>Removes the association of tags from an Amazon DynamoDB resource. You can call <code>UntagResource</code> up to five times per second, per account. </p> <p>For an overview on tagging DynamoDB resources, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html">Tagging for DynamoDB</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>

> Body parameter

```json
{
  "ResourceArn": {},
  "TagKeys": {}
}
```

<h3 id="untagresource-parameters">Parameters</h3>

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
|body|body|[UntagResourceInput](#schemauntagresourceinput)|true|none|
|» ResourceArn|body|object|true|none|
|» TagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDB_20120810.UntagResource|

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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|
|483|483|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateContinuousBackups

<a id="opIdUpdateContinuousBackups"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.UpdateContinuousBackups' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.UpdateContinuousBackups' \
  -d '{
    "TableName": {},
    "PointInTimeRecoverySpecification": {
      "PointInTimeRecoveryEnabled": {}
    }
  }'
```

`POST /#X-Amz-Target=DynamoDB_20120810.UpdateContinuousBackups`

<p> <code>UpdateContinuousBackups</code> enables or disables point in time recovery for the specified table. A successful <code>UpdateContinuousBackups</code> call returns the current <code>ContinuousBackupsDescription</code>. Continuous backups are <code>ENABLED</code> on all tables at table creation. If point in time recovery is enabled, <code>PointInTimeRecoveryStatus</code> will be set to ENABLED.</p> <p> Once continuous backups and point in time recovery are enabled, you can restore to any point in time within <code>EarliestRestorableDateTime</code> and <code>LatestRestorableDateTime</code>. </p> <p> <code>LatestRestorableDateTime</code> is typically 5 minutes before the current time. You can restore your table to any point in time during the last 35 days. </p>

> Body parameter

```json
{
  "TableName": {},
  "PointInTimeRecoverySpecification": {
    "PointInTimeRecoveryEnabled": {}
  }
}
```

<h3 id="updatecontinuousbackups-parameters">Parameters</h3>

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
|body|body|[UpdateContinuousBackupsInput](#schemaupdatecontinuousbackupsinput)|true|none|
|» TableName|body|object|true|none|
|» PointInTimeRecoverySpecification|body|object|true|none|
|» » PointInTimeRecoveryEnabled|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDB_20120810.UpdateContinuousBackups|

> Example responses

> 200 Response

```json
{
  "ContinuousBackupsDescription": {
    "ContinuousBackupsStatus": {},
    "PointInTimeRecoveryDescription": {
      "PointInTimeRecoveryStatus": {},
      "EarliestRestorableDateTime": {},
      "LatestRestorableDateTime": {}
    }
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

<h3 id="updatecontinuousbackups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateContinuousBackupsOutput](#schemaupdatecontinuousbackupsoutput)|
|480|480|TableNotFoundException|[TableNotFoundException](#schematablenotfoundexception)|
|481|481|ContinuousBackupsUnavailableException|[ContinuousBackupsUnavailableException](#schemacontinuousbackupsunavailableexception)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateContributorInsights

<a id="opIdUpdateContributorInsights"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.UpdateContributorInsights' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.UpdateContributorInsights' \
  -d '{
    "TableName": {},
    "IndexName": {},
    "ContributorInsightsAction": {}
  }'
```

`POST /#X-Amz-Target=DynamoDB_20120810.UpdateContributorInsights`

Updates the status for contributor insights for a specific table or index. CloudWatch Contributor Insights for DynamoDB graphs display the partition key and (if applicable) sort key of frequently accessed items and frequently throttled items in plaintext. If you require the use of Amazon Web Services Key Management Service (KMS) to encrypt this table’s partition key and sort key data with an Amazon Web Services managed key or customer managed key, you should not enable CloudWatch Contributor Insights for DynamoDB for this table.

> Body parameter

```json
{
  "TableName": {},
  "IndexName": {},
  "ContributorInsightsAction": {}
}
```

<h3 id="updatecontributorinsights-parameters">Parameters</h3>

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
|body|body|[UpdateContributorInsightsInput](#schemaupdatecontributorinsightsinput)|true|none|
|» TableName|body|object|true|none|
|» IndexName|body|object|false|none|
|» ContributorInsightsAction|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDB_20120810.UpdateContributorInsights|

> Example responses

> 200 Response

```json
{
  "TableName": {},
  "IndexName": {},
  "ContributorInsightsStatus": {}
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

<h3 id="updatecontributorinsights-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateContributorInsightsOutput](#schemaupdatecontributorinsightsoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateGlobalTable

<a id="opIdUpdateGlobalTable"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.UpdateGlobalTable' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.UpdateGlobalTable' \
  -d '{
    "GlobalTableName": {},
    "ReplicaUpdates": {}
  }'
```

`POST /#X-Amz-Target=DynamoDB_20120810.UpdateGlobalTable`

<p>Adds or removes replicas in the specified global table. The global table must already exist to be able to use this operation. Any replica to be added must be empty, have the same name as the global table, have the same key schema, have DynamoDB Streams enabled, and have the same provisioned and maximum write capacity units.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29 (Legacy)</a> of global tables. We recommend using <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> when creating new global tables, as it provides greater flexibility, higher efficiency and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you are using, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.DetermineVersion.html">Determining the version</a>. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html"> Updating global tables</a>. </p> </important> <note> <p> This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29</a> of global tables. If you are using global tables <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21</a> you can use <a href="https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTable.html">DescribeTable</a> instead. </p> <p> Although you can use <code>UpdateGlobalTable</code> to add replicas and remove replicas in a single request, for simplicity we recommend that you issue separate requests for adding or removing replicas. </p> </note> <p> If global secondary indexes are specified, then the following conditions must also be met: </p> <ul> <li> <p> The global secondary indexes must have the same name. </p> </li> <li> <p> The global secondary indexes must have the same hash key and sort key (if present). </p> </li> <li> <p> The global secondary indexes must have the same provisioned and maximum write capacity units. </p> </li> </ul>

> Body parameter

```json
{
  "GlobalTableName": {},
  "ReplicaUpdates": {}
}
```

<h3 id="updateglobaltable-parameters">Parameters</h3>

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
|body|body|[UpdateGlobalTableInput](#schemaupdateglobaltableinput)|true|none|
|» GlobalTableName|body|object|true|none|
|» ReplicaUpdates|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDB_20120810.UpdateGlobalTable|

> Example responses

> 200 Response

```json
{
  "GlobalTableDescription": {
    "ReplicationGroup": {},
    "GlobalTableArn": {},
    "CreationDateTime": {},
    "GlobalTableStatus": {},
    "GlobalTableName": {}
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

> 484 Response

```json
null
```

<h3 id="updateglobaltable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateGlobalTableOutput](#schemaupdateglobaltableoutput)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|GlobalTableNotFoundException|[GlobalTableNotFoundException](#schemaglobaltablenotfoundexception)|
|482|482|ReplicaAlreadyExistsException|[ReplicaAlreadyExistsException](#schemareplicaalreadyexistsexception)|
|483|483|ReplicaNotFoundException|[ReplicaNotFoundException](#schemareplicanotfoundexception)|
|484|484|TableNotFoundException|[TableNotFoundException](#schematablenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateGlobalTableSettings

<a id="opIdUpdateGlobalTableSettings"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.UpdateGlobalTableSettings' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.UpdateGlobalTableSettings' \
  -d '{
    "GlobalTableName": {},
    "GlobalTableBillingMode": {},
    "GlobalTableProvisionedWriteCapacityUnits": {},
    "GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate": {
      "MinimumUnits": {},
      "MaximumUnits": {},
      "AutoScalingDisabled": {},
      "AutoScalingRoleArn": {},
      "ScalingPolicyUpdate": {
        "PolicyName": {},
        "TargetTrackingScalingPolicyConfiguration": {
          "DisableScaleIn": {},
          "ScaleInCooldown": {},
          "ScaleOutCooldown": {},
          "TargetValue": {}
        }
      }
    },
    "GlobalTableGlobalSecondaryIndexSettingsUpdate": {},
    "ReplicaSettingsUpdate": {}
  }'
```

`POST /#X-Amz-Target=DynamoDB_20120810.UpdateGlobalTableSettings`

<p>Updates settings for a global table.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29 (Legacy)</a> of global tables. We recommend using <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> when creating new global tables, as it provides greater flexibility, higher efficiency and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you are using, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.DetermineVersion.html">Determining the version</a>. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html"> Updating global tables</a>. </p> </important>

> Body parameter

```json
{
  "GlobalTableName": {},
  "GlobalTableBillingMode": {},
  "GlobalTableProvisionedWriteCapacityUnits": {},
  "GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate": {
    "MinimumUnits": {},
    "MaximumUnits": {},
    "AutoScalingDisabled": {},
    "AutoScalingRoleArn": {},
    "ScalingPolicyUpdate": {
      "PolicyName": {},
      "TargetTrackingScalingPolicyConfiguration": {
        "DisableScaleIn": {},
        "ScaleInCooldown": {},
        "ScaleOutCooldown": {},
        "TargetValue": {}
      }
    }
  },
  "GlobalTableGlobalSecondaryIndexSettingsUpdate": {},
  "ReplicaSettingsUpdate": {}
}
```

<h3 id="updateglobaltablesettings-parameters">Parameters</h3>

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
|body|body|[UpdateGlobalTableSettingsInput](#schemaupdateglobaltablesettingsinput)|true|none|
|» GlobalTableName|body|object|true|none|
|» GlobalTableBillingMode|body|object|false|none|
|» GlobalTableProvisionedWriteCapacityUnits|body|object|false|none|
|» GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate|body|object|false|none|
|» » MinimumUnits|body|object|false|none|
|» » MaximumUnits|body|object|false|none|
|» » AutoScalingDisabled|body|object|false|none|
|» » AutoScalingRoleArn|body|object|false|none|
|» » ScalingPolicyUpdate|body|object|false|none|
|» » » PolicyName|body|object|false|none|
|» » » TargetTrackingScalingPolicyConfiguration|body|object|true|none|
|» » » » DisableScaleIn|body|object|false|none|
|» » » » ScaleInCooldown|body|object|false|none|
|» » » » ScaleOutCooldown|body|object|false|none|
|» » » » TargetValue|body|object|true|none|
|» GlobalTableGlobalSecondaryIndexSettingsUpdate|body|object|false|none|
|» ReplicaSettingsUpdate|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDB_20120810.UpdateGlobalTableSettings|

> Example responses

> 200 Response

```json
{
  "GlobalTableName": {},
  "ReplicaSettings": {}
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

<h3 id="updateglobaltablesettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateGlobalTableSettingsOutput](#schemaupdateglobaltablesettingsoutput)|
|480|480|GlobalTableNotFoundException|[GlobalTableNotFoundException](#schemaglobaltablenotfoundexception)|
|481|481|ReplicaNotFoundException|[ReplicaNotFoundException](#schemareplicanotfoundexception)|
|482|482|IndexNotFoundException|[IndexNotFoundException](#schemaindexnotfoundexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|485|485|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateItem

<a id="opIdUpdateItem"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.UpdateItem' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.UpdateItem' \
  -d '{
    "TableName": {},
    "Key": {
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
    "AttributeUpdates": {
      "property1": {
        "Value": {
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
        "Action": {}
      },
      "property2": {
        "Value": {
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
        "Action": {}
      }
    },
    "Expected": {
      "property1": {
        "Value": {
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
        "Exists": {},
        "ComparisonOperator": {},
        "AttributeValueList": {}
      },
      "property2": {
        "Value": {
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
        "Exists": {},
        "ComparisonOperator": {},
        "AttributeValueList": {}
      }
    },
    "ConditionalOperator": {},
    "ReturnValues": {},
    "ReturnConsumedCapacity": "INDEXES",
    "ReturnItemCollectionMetrics": {},
    "UpdateExpression": {},
    "ConditionExpression": {},
    "ExpressionAttributeNames": {
      "property1": "string",
      "property2": "string"
    },
    "ExpressionAttributeValues": {
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
    "ReturnValuesOnConditionCheckFailure": {}
  }'
```

`POST /#X-Amz-Target=DynamoDB_20120810.UpdateItem`

<p>Edits an existing item's attributes, or adds a new item to the table if it does not already exist. You can put, delete, or add attribute values. You can also perform a conditional update on an existing item (insert a new attribute name-value pair if it doesn't exist, or replace an existing name-value pair if it has certain expected attribute values).</p> <p>You can also return the item's attribute values in the same <code>UpdateItem</code> operation using the <code>ReturnValues</code> parameter.</p>

> Body parameter

```json
{
  "TableName": {},
  "Key": {
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
  "AttributeUpdates": {
    "property1": {
      "Value": {
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
      "Action": {}
    },
    "property2": {
      "Value": {
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
      "Action": {}
    }
  },
  "Expected": {
    "property1": {
      "Value": {
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
      "Exists": {},
      "ComparisonOperator": {},
      "AttributeValueList": {}
    },
    "property2": {
      "Value": {
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
      "Exists": {},
      "ComparisonOperator": {},
      "AttributeValueList": {}
    }
  },
  "ConditionalOperator": {},
  "ReturnValues": {},
  "ReturnConsumedCapacity": "INDEXES",
  "ReturnItemCollectionMetrics": {},
  "UpdateExpression": {},
  "ConditionExpression": {},
  "ExpressionAttributeNames": {
    "property1": "string",
    "property2": "string"
  },
  "ExpressionAttributeValues": {
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
  "ReturnValuesOnConditionCheckFailure": {}
}
```

<h3 id="updateitem-parameters">Parameters</h3>

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
|body|body|[UpdateItemInput](#schemaupdateiteminput)|true|none|
|» TableName|body|object|true|none|
|» Key|body|object|true|none|
|» » **additionalProperties**|body|[AttributeValue](#schemaattributevalue)|false|<p>Represents the data for an attribute.</p> <p>Each attribute value is described as a name-value pair. The name is the data type, and the value is the data itself.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes">Data Types</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>|
|» AttributeUpdates|body|object|false|none|
|» » **additionalProperties**|body|[AttributeValueUpdate](#schemaattributevalueupdate)|false|<p>For the <code>UpdateItem</code> operation, represents the attributes to be modified, the action to perform on each, and the new value for each.</p> <note> <p>You cannot use <code>UpdateItem</code> to update any primary key attributes. Instead, you will need to delete the item, and then use <code>PutItem</code> to create a new item with new attributes.</p> </note> <p>Attribute values cannot be null; string and binary type attributes must have lengths greater than zero; and set type attributes must not be empty. Requests with empty values will be rejected with a <code>ValidationException</code> exception.</p>|
|» Expected|body|object|false|none|
|» » **additionalProperties**|body|[ExpectedAttributeValue](#schemaexpectedattributevalue)|false|<p>Represents a condition to be compared with an attribute value. This condition can be used with <code>DeleteItem</code>, <code>PutItem</code>, or <code>UpdateItem</code> operations; if the comparison evaluates to true, the operation succeeds; if not, the operation fails. You can use <code>ExpectedAttributeValue</code> in one of two different ways:</p> <ul> <li> <p>Use <code>AttributeValueList</code> to specify one or more values to compare against an attribute. Use <code>ComparisonOperator</code> to specify how you want to perform the comparison. If the comparison evaluates to true, then the conditional operation succeeds.</p> </li> <li> <p>Use <code>Value</code> to specify a value that DynamoDB will compare against an attribute. If the values match, then <code>ExpectedAttributeValue</code> evaluates to true and the conditional operation succeeds. Optionally, you can also set <code>Exists</code> to false, indicating that you <i>do not</i> expect to find the attribute value in the table. In this case, the conditional operation succeeds only if the comparison evaluates to false.</p> </li> </ul> <p> <code>Value</code> and <code>Exists</code> are incompatible with <code>AttributeValueList</code> and <code>ComparisonOperator</code>. Note that if you use both sets of parameters at once, DynamoDB will return a <code>ValidationException</code> exception.</p>|
|» ConditionalOperator|body|object|false|none|
|» ReturnValues|body|object|false|none|
|» ReturnConsumedCapacity|body|[ReturnConsumedCapacity](#schemareturnconsumedcapacity)|false|<p>Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul>|
|» ReturnItemCollectionMetrics|body|object|false|none|
|» UpdateExpression|body|object|false|none|
|» ConditionExpression|body|object|false|none|
|» ExpressionAttributeNames|body|object|false|none|
|» » **additionalProperties**|body|[AttributeName](#schemaattributename)|false|none|
|» ExpressionAttributeValues|body|object|false|none|
|» » **additionalProperties**|body|[AttributeValue](#schemaattributevalue)|false|<p>Represents the data for an attribute.</p> <p>Each attribute value is described as a name-value pair. The name is the data type, and the value is the data itself.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes">Data Types</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>|
|» ReturnValuesOnConditionCheckFailure|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDB_20120810.UpdateItem|
|» ReturnConsumedCapacity|INDEXES|
|» ReturnConsumedCapacity|TOTAL|
|» ReturnConsumedCapacity|NONE|

> Example responses

> 200 Response

```json
{
  "Attributes": {
    "AlbumTitle": {
      "S": "Louder Than Ever"
    },
    "Artist": {
      "S": "Acme Band"
    },
    "SongTitle": {
      "S": "Happy Day"
    },
    "Year": {
      "N": "2015"
    }
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

<h3 id="updateitem-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateItemOutput](#schemaupdateitemoutput)|
|480|480|ConditionalCheckFailedException|[ConditionalCheckFailedException](#schemaconditionalcheckfailedexception)|
|481|481|ProvisionedThroughputExceededException|[ProvisionedThroughputExceededException](#schemaprovisionedthroughputexceededexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ItemCollectionSizeLimitExceededException|[ItemCollectionSizeLimitExceededException](#schemaitemcollectionsizelimitexceededexception)|
|484|484|TransactionConflictException|[TransactionConflictException](#schematransactionconflictexception)|
|485|485|RequestLimitExceeded|[RequestLimitExceeded](#schemarequestlimitexceeded)|
|486|486|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateTable

<a id="opIdUpdateTable"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.UpdateTable' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.UpdateTable' \
  -d '{
    "AttributeDefinitions": {},
    "TableName": {},
    "BillingMode": {},
    "ProvisionedThroughput": {
      "ReadCapacityUnits": {},
      "WriteCapacityUnits": {}
    },
    "GlobalSecondaryIndexUpdates": {},
    "StreamSpecification": {
      "StreamEnabled": {},
      "StreamViewType": {}
    },
    "SSESpecification": {
      "Enabled": {},
      "SSEType": {},
      "KMSMasterKeyId": {}
    },
    "ReplicaUpdates": {},
    "TableClass": {},
    "DeletionProtectionEnabled": {}
  }'
```

`POST /#X-Amz-Target=DynamoDB_20120810.UpdateTable`

<p>Modifies the provisioned throughput settings, global secondary indexes, or DynamoDB Streams settings for a given table.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> of global tables. </p> </important> <p>You can only perform one of the following operations at once:</p> <ul> <li> <p>Modify the provisioned throughput settings of the table.</p> </li> <li> <p>Remove a global secondary index from the table.</p> </li> <li> <p>Create a new global secondary index on the table. After the index begins backfilling, you can use <code>UpdateTable</code> to perform other operations.</p> </li> </ul> <p> <code>UpdateTable</code> is an asynchronous operation; while it is executing, the table status changes from <code>ACTIVE</code> to <code>UPDATING</code>. While it is <code>UPDATING</code>, you cannot issue another <code>UpdateTable</code> request. When the table returns to the <code>ACTIVE</code> state, the <code>UpdateTable</code> operation is complete.</p>

> Body parameter

```json
{
  "AttributeDefinitions": {},
  "TableName": {},
  "BillingMode": {},
  "ProvisionedThroughput": {
    "ReadCapacityUnits": {},
    "WriteCapacityUnits": {}
  },
  "GlobalSecondaryIndexUpdates": {},
  "StreamSpecification": {
    "StreamEnabled": {},
    "StreamViewType": {}
  },
  "SSESpecification": {
    "Enabled": {},
    "SSEType": {},
    "KMSMasterKeyId": {}
  },
  "ReplicaUpdates": {},
  "TableClass": {},
  "DeletionProtectionEnabled": {}
}
```

<h3 id="updatetable-parameters">Parameters</h3>

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
|body|body|[UpdateTableInput](#schemaupdatetableinput)|true|none|
|» AttributeDefinitions|body|object|false|none|
|» TableName|body|object|true|none|
|» BillingMode|body|object|false|none|
|» ProvisionedThroughput|body|object|false|none|
|» » ReadCapacityUnits|body|object|true|none|
|» » WriteCapacityUnits|body|object|true|none|
|» GlobalSecondaryIndexUpdates|body|object|false|none|
|» StreamSpecification|body|object|false|none|
|» » StreamEnabled|body|object|true|none|
|» » StreamViewType|body|object|false|none|
|» SSESpecification|body|object|false|none|
|» » Enabled|body|object|false|none|
|» » SSEType|body|object|false|none|
|» » KMSMasterKeyId|body|object|false|none|
|» ReplicaUpdates|body|object|false|none|
|» TableClass|body|object|false|none|
|» DeletionProtectionEnabled|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDB_20120810.UpdateTable|

> Example responses

> 200 Response

```json
{
  "TableDescription": {
    "AttributeDefinitions": [
      {
        "AttributeName": "Artist",
        "AttributeType": "S"
      },
      {
        "AttributeName": "SongTitle",
        "AttributeType": "S"
      }
    ],
    "CreationDateTime": "1421866952.062",
    "ItemCount": 0,
    "KeySchema": [
      {
        "AttributeName": "Artist",
        "KeyType": "HASH"
      },
      {
        "AttributeName": "SongTitle",
        "KeyType": "RANGE"
      }
    ],
    "ProvisionedThroughput": {
      "LastIncreaseDateTime": "1421874759.194",
      "NumberOfDecreasesToday": 1,
      "ReadCapacityUnits": 1,
      "WriteCapacityUnits": 1
    },
    "TableName": "MusicCollection",
    "TableSizeBytes": 0,
    "TableStatus": "UPDATING"
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

<h3 id="updatetable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateTableOutput](#schemaupdatetableoutput)|
|480|480|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateTableReplicaAutoScaling

<a id="opIdUpdateTableReplicaAutoScaling"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.UpdateTableReplicaAutoScaling' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.UpdateTableReplicaAutoScaling' \
  -d '{
    "GlobalSecondaryIndexUpdates": {},
    "TableName": {},
    "ProvisionedWriteCapacityAutoScalingUpdate": {
      "MinimumUnits": {},
      "MaximumUnits": {},
      "AutoScalingDisabled": {},
      "AutoScalingRoleArn": {},
      "ScalingPolicyUpdate": {
        "PolicyName": {},
        "TargetTrackingScalingPolicyConfiguration": {
          "DisableScaleIn": {},
          "ScaleInCooldown": {},
          "ScaleOutCooldown": {},
          "TargetValue": {}
        }
      }
    },
    "ReplicaUpdates": {}
  }'
```

`POST /#X-Amz-Target=DynamoDB_20120810.UpdateTableReplicaAutoScaling`

<p>Updates auto scaling settings on your global tables at once.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> of global tables. </p> </important>

> Body parameter

```json
{
  "GlobalSecondaryIndexUpdates": {},
  "TableName": {},
  "ProvisionedWriteCapacityAutoScalingUpdate": {
    "MinimumUnits": {},
    "MaximumUnits": {},
    "AutoScalingDisabled": {},
    "AutoScalingRoleArn": {},
    "ScalingPolicyUpdate": {
      "PolicyName": {},
      "TargetTrackingScalingPolicyConfiguration": {
        "DisableScaleIn": {},
        "ScaleInCooldown": {},
        "ScaleOutCooldown": {},
        "TargetValue": {}
      }
    }
  },
  "ReplicaUpdates": {}
}
```

<h3 id="updatetablereplicaautoscaling-parameters">Parameters</h3>

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
|body|body|[UpdateTableReplicaAutoScalingInput](#schemaupdatetablereplicaautoscalinginput)|true|none|
|» GlobalSecondaryIndexUpdates|body|object|false|none|
|» TableName|body|object|true|none|
|» ProvisionedWriteCapacityAutoScalingUpdate|body|[AutoScalingSettingsUpdate](#schemaautoscalingsettingsupdate)|false|Represents the auto scaling settings to be modified for a global table or global secondary index.|
|» ReplicaUpdates|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDB_20120810.UpdateTableReplicaAutoScaling|

> Example responses

> 200 Response

```json
{
  "TableAutoScalingDescription": {
    "TableName": {},
    "TableStatus": {},
    "Replicas": {}
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

<h3 id="updatetablereplicaautoscaling-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateTableReplicaAutoScalingOutput](#schemaupdatetablereplicaautoscalingoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateTimeToLive

<a id="opIdUpdateTimeToLive"></a>

> Code samples

```bash
curl 'https://dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDB_20120810.UpdateTimeToLive' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDB_20120810.UpdateTimeToLive' \
  -d '{
    "TableName": {},
    "TimeToLiveSpecification": {
      "Enabled": {},
      "AttributeName": {}
    }
  }'
```

`POST /#X-Amz-Target=DynamoDB_20120810.UpdateTimeToLive`

<p>The <code>UpdateTimeToLive</code> method enables or disables Time to Live (TTL) for the specified table. A successful <code>UpdateTimeToLive</code> call returns the current <code>TimeToLiveSpecification</code>. It can take up to one hour for the change to fully process. Any additional <code>UpdateTimeToLive</code> calls for the same table during this one hour duration result in a <code>ValidationException</code>. </p> <p>TTL compares the current time in epoch time format to the time stored in the TTL attribute of an item. If the epoch time value stored in the attribute is less than the current time, the item is marked as expired and subsequently deleted.</p> <note> <p> The epoch time format is the number of seconds elapsed since 12:00:00 AM January 1, 1970 UTC. </p> </note> <p>DynamoDB deletes expired items on a best-effort basis to ensure availability of throughput for other data operations. </p> <important> <p>DynamoDB typically deletes expired items within two days of expiration. The exact duration within which an item gets deleted after expiration is specific to the nature of the workload. Items that have expired and not been deleted will still show up in reads, queries, and scans.</p> </important> <p>As items are deleted, they are removed from any local secondary index and global secondary index immediately in the same eventually consistent way as a standard delete operation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html">Time To Live</a> in the Amazon DynamoDB Developer Guide. </p>

> Body parameter

```json
{
  "TableName": {},
  "TimeToLiveSpecification": {
    "Enabled": {},
    "AttributeName": {}
  }
}
```

<h3 id="updatetimetolive-parameters">Parameters</h3>

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
|body|body|[UpdateTimeToLiveInput](#schemaupdatetimetoliveinput)|true|none|
|» TableName|body|object|true|none|
|» TimeToLiveSpecification|body|object|true|none|
|» » Enabled|body|object|true|none|
|» » AttributeName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDB_20120810.UpdateTimeToLive|

> Example responses

> 200 Response

```json
{
  "TimeToLiveSpecification": {
    "Enabled": {},
    "AttributeName": {}
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

<h3 id="updatetimetolive-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateTimeToLiveOutput](#schemaupdatetimetoliveoutput)|
|480|480|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_BatchExecuteStatementOutput">BatchExecuteStatementOutput</h2>
<!-- backwards compatibility -->
<a id="schemabatchexecutestatementoutput"></a>
<a id="schema_BatchExecuteStatementOutput"></a>
<a id="tocSbatchexecutestatementoutput"></a>
<a id="tocsbatchexecutestatementoutput"></a>

```json
{
  "Responses": {},
  "ConsumedCapacity": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Responses|object|false|none|none|
|ConsumedCapacity|object|false|none|none|

<h2 id="tocS_BatchExecuteStatementInput">BatchExecuteStatementInput</h2>
<!-- backwards compatibility -->
<a id="schemabatchexecutestatementinput"></a>
<a id="schema_BatchExecuteStatementInput"></a>
<a id="tocSbatchexecutestatementinput"></a>
<a id="tocsbatchexecutestatementinput"></a>

```json
{
  "Statements": {},
  "ReturnConsumedCapacity": "INDEXES"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Statements|object|true|none|none|
|ReturnConsumedCapacity|[ReturnConsumedCapacity](#schemareturnconsumedcapacity)|false|none|<p>Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul>|

#### Enumerated Values

|Property|Value|
|---|---|
|ReturnConsumedCapacity|INDEXES|
|ReturnConsumedCapacity|TOTAL|
|ReturnConsumedCapacity|NONE|

<h2 id="tocS_RequestLimitExceeded">RequestLimitExceeded</h2>
<!-- backwards compatibility -->
<a id="schemarequestlimitexceeded"></a>
<a id="schema_RequestLimitExceeded"></a>
<a id="tocSrequestlimitexceeded"></a>
<a id="tocsrequestlimitexceeded"></a>

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

<h2 id="tocS_BatchGetItemOutput">BatchGetItemOutput</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetitemoutput"></a>
<a id="schema_BatchGetItemOutput"></a>
<a id="tocSbatchgetitemoutput"></a>
<a id="tocsbatchgetitemoutput"></a>

```json
{
  "Responses": {
    "Music": [
      {
        "AlbumTitle": {
          "S": "Somewhat Famous"
        }
      },
      {
        "AlbumTitle": {
          "S": "Blue Sky Blues"
        }
      },
      {
        "AlbumTitle": {
          "S": "Louder Than Ever"
        }
      }
    ]
  }
}
```

Represents the output of a <code>BatchGetItem</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Responses|object|false|none|none|
|UnprocessedKeys|object|false|none|none|
|ConsumedCapacity|object|false|none|none|

<h2 id="tocS_BatchGetItemInput">BatchGetItemInput</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetiteminput"></a>
<a id="schema_BatchGetItemInput"></a>
<a id="tocSbatchgetiteminput"></a>
<a id="tocsbatchgetiteminput"></a>

```json
{
  "RequestItems": {
    "property1": {
      "Keys": {},
      "AttributesToGet": {},
      "ConsistentRead": {},
      "ProjectionExpression": {},
      "ExpressionAttributeNames": {
        "property1": "string",
        "property2": "string"
      }
    },
    "property2": {
      "Keys": {},
      "AttributesToGet": {},
      "ConsistentRead": {},
      "ProjectionExpression": {},
      "ExpressionAttributeNames": {
        "property1": "string",
        "property2": "string"
      }
    }
  },
  "ReturnConsumedCapacity": "INDEXES"
}
```

Represents the input of a <code>BatchGetItem</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RequestItems|object|true|none|none|
|ReturnConsumedCapacity|[ReturnConsumedCapacity](#schemareturnconsumedcapacity)|false|none|<p>Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul>|

#### Enumerated Values

|Property|Value|
|---|---|
|ReturnConsumedCapacity|INDEXES|
|ReturnConsumedCapacity|TOTAL|
|ReturnConsumedCapacity|NONE|

<h2 id="tocS_ProvisionedThroughputExceededException">ProvisionedThroughputExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaprovisionedthroughputexceededexception"></a>
<a id="schema_ProvisionedThroughputExceededException"></a>
<a id="tocSprovisionedthroughputexceededexception"></a>
<a id="tocsprovisionedthroughputexceededexception"></a>

```json
null
```

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_BatchWriteItemOutput">BatchWriteItemOutput</h2>
<!-- backwards compatibility -->
<a id="schemabatchwriteitemoutput"></a>
<a id="schema_BatchWriteItemOutput"></a>
<a id="tocSbatchwriteitemoutput"></a>
<a id="tocsbatchwriteitemoutput"></a>

```json
{}
```

Represents the output of a <code>BatchWriteItem</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UnprocessedItems|object|false|none|none|
|ItemCollectionMetrics|object|false|none|none|
|ConsumedCapacity|object|false|none|none|

<h2 id="tocS_BatchWriteItemInput">BatchWriteItemInput</h2>
<!-- backwards compatibility -->
<a id="schemabatchwriteiteminput"></a>
<a id="schema_BatchWriteItemInput"></a>
<a id="tocSbatchwriteiteminput"></a>
<a id="tocsbatchwriteiteminput"></a>

```json
{
  "RequestItems": {
    "property1": [
      {
        "PutRequest": {
          "Item": {
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
        },
        "DeleteRequest": {
          "Key": {
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
        }
      }
    ],
    "property2": [
      {
        "PutRequest": {
          "Item": {
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
        },
        "DeleteRequest": {
          "Key": {
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
        }
      }
    ]
  },
  "ReturnConsumedCapacity": "INDEXES",
  "ReturnItemCollectionMetrics": {}
}
```

Represents the input of a <code>BatchWriteItem</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RequestItems|object|true|none|none|
|ReturnConsumedCapacity|[ReturnConsumedCapacity](#schemareturnconsumedcapacity)|false|none|<p>Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul>|
|ReturnItemCollectionMetrics|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ReturnConsumedCapacity|INDEXES|
|ReturnConsumedCapacity|TOTAL|
|ReturnConsumedCapacity|NONE|

<h2 id="tocS_ItemCollectionSizeLimitExceededException">ItemCollectionSizeLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaitemcollectionsizelimitexceededexception"></a>
<a id="schema_ItemCollectionSizeLimitExceededException"></a>
<a id="tocSitemcollectionsizelimitexceededexception"></a>
<a id="tocsitemcollectionsizelimitexceededexception"></a>

```json
null
```

<h2 id="tocS_CreateBackupOutput">CreateBackupOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatebackupoutput"></a>
<a id="schema_CreateBackupOutput"></a>
<a id="tocScreatebackupoutput"></a>
<a id="tocscreatebackupoutput"></a>

```json
{
  "BackupDetails": {
    "BackupArn": {},
    "BackupName": {},
    "BackupSizeBytes": {},
    "BackupStatus": {},
    "BackupType": {},
    "BackupCreationDateTime": {},
    "BackupExpiryDateTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupDetails|object|false|none|none|

<h2 id="tocS_CreateBackupInput">CreateBackupInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatebackupinput"></a>
<a id="schema_CreateBackupInput"></a>
<a id="tocScreatebackupinput"></a>
<a id="tocscreatebackupinput"></a>

```json
{
  "TableName": {},
  "BackupName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableName|object|true|none|none|
|BackupName|object|true|none|none|

<h2 id="tocS_TableNotFoundException">TableNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schematablenotfoundexception"></a>
<a id="schema_TableNotFoundException"></a>
<a id="tocStablenotfoundexception"></a>
<a id="tocstablenotfoundexception"></a>

```json
null
```

<h2 id="tocS_TableInUseException">TableInUseException</h2>
<!-- backwards compatibility -->
<a id="schematableinuseexception"></a>
<a id="schema_TableInUseException"></a>
<a id="tocStableinuseexception"></a>
<a id="tocstableinuseexception"></a>

```json
null
```

<h2 id="tocS_ContinuousBackupsUnavailableException">ContinuousBackupsUnavailableException</h2>
<!-- backwards compatibility -->
<a id="schemacontinuousbackupsunavailableexception"></a>
<a id="schema_ContinuousBackupsUnavailableException"></a>
<a id="tocScontinuousbackupsunavailableexception"></a>
<a id="tocscontinuousbackupsunavailableexception"></a>

```json
null
```

<h2 id="tocS_BackupInUseException">BackupInUseException</h2>
<!-- backwards compatibility -->
<a id="schemabackupinuseexception"></a>
<a id="schema_BackupInUseException"></a>
<a id="tocSbackupinuseexception"></a>
<a id="tocsbackupinuseexception"></a>

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

<h2 id="tocS_CreateGlobalTableOutput">CreateGlobalTableOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreateglobaltableoutput"></a>
<a id="schema_CreateGlobalTableOutput"></a>
<a id="tocScreateglobaltableoutput"></a>
<a id="tocscreateglobaltableoutput"></a>

```json
{
  "GlobalTableDescription": {
    "ReplicationGroup": {},
    "GlobalTableArn": {},
    "CreationDateTime": {},
    "GlobalTableStatus": {},
    "GlobalTableName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalTableDescription|object|false|none|none|

<h2 id="tocS_CreateGlobalTableInput">CreateGlobalTableInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateglobaltableinput"></a>
<a id="schema_CreateGlobalTableInput"></a>
<a id="tocScreateglobaltableinput"></a>
<a id="tocscreateglobaltableinput"></a>

```json
{
  "GlobalTableName": {},
  "ReplicationGroup": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalTableName|object|true|none|none|
|ReplicationGroup|object|true|none|none|

<h2 id="tocS_GlobalTableAlreadyExistsException">GlobalTableAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaglobaltablealreadyexistsexception"></a>
<a id="schema_GlobalTableAlreadyExistsException"></a>
<a id="tocSglobaltablealreadyexistsexception"></a>
<a id="tocsglobaltablealreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_CreateTableOutput">CreateTableOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatetableoutput"></a>
<a id="schema_CreateTableOutput"></a>
<a id="tocScreatetableoutput"></a>
<a id="tocscreatetableoutput"></a>

```json
{
  "TableDescription": {
    "AttributeDefinitions": [
      {
        "AttributeName": "Artist",
        "AttributeType": "S"
      },
      {
        "AttributeName": "SongTitle",
        "AttributeType": "S"
      }
    ],
    "CreationDateTime": "1421866952.062",
    "ItemCount": 0,
    "KeySchema": [
      {
        "AttributeName": "Artist",
        "KeyType": "HASH"
      },
      {
        "AttributeName": "SongTitle",
        "KeyType": "RANGE"
      }
    ],
    "ProvisionedThroughput": {
      "ReadCapacityUnits": 5,
      "WriteCapacityUnits": 5
    },
    "TableName": "Music",
    "TableSizeBytes": 0,
    "TableStatus": "CREATING"
  }
}
```

Represents the output of a <code>CreateTable</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableDescription|object|false|none|none|

<h2 id="tocS_CreateTableInput">CreateTableInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatetableinput"></a>
<a id="schema_CreateTableInput"></a>
<a id="tocScreatetableinput"></a>
<a id="tocscreatetableinput"></a>

```json
{
  "AttributeDefinitions": {},
  "TableName": {},
  "KeySchema": {},
  "LocalSecondaryIndexes": {},
  "GlobalSecondaryIndexes": {},
  "BillingMode": {},
  "ProvisionedThroughput": {
    "ReadCapacityUnits": {},
    "WriteCapacityUnits": {}
  },
  "StreamSpecification": {
    "StreamEnabled": {},
    "StreamViewType": {}
  },
  "SSESpecification": {
    "Enabled": {},
    "SSEType": {},
    "KMSMasterKeyId": {}
  },
  "Tags": {},
  "TableClass": {},
  "DeletionProtectionEnabled": {}
}
```

Represents the input of a <code>CreateTable</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttributeDefinitions|object|true|none|none|
|TableName|object|true|none|none|
|KeySchema|object|true|none|none|
|LocalSecondaryIndexes|object|false|none|none|
|GlobalSecondaryIndexes|object|false|none|none|
|BillingMode|object|false|none|none|
|ProvisionedThroughput|object|false|none|none|
|StreamSpecification|object|false|none|none|
|SSESpecification|object|false|none|none|
|Tags|object|false|none|none|
|TableClass|object|false|none|none|
|DeletionProtectionEnabled|object|false|none|none|

<h2 id="tocS_ResourceInUseException">ResourceInUseException</h2>
<!-- backwards compatibility -->
<a id="schemaresourceinuseexception"></a>
<a id="schema_ResourceInUseException"></a>
<a id="tocSresourceinuseexception"></a>
<a id="tocsresourceinuseexception"></a>

```json
null
```

<h2 id="tocS_DeleteBackupOutput">DeleteBackupOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletebackupoutput"></a>
<a id="schema_DeleteBackupOutput"></a>
<a id="tocSdeletebackupoutput"></a>
<a id="tocsdeletebackupoutput"></a>

```json
{
  "BackupDescription": {
    "BackupDetails": {
      "BackupArn": {},
      "BackupName": {},
      "BackupSizeBytes": {},
      "BackupStatus": {},
      "BackupType": {},
      "BackupCreationDateTime": {},
      "BackupExpiryDateTime": {}
    },
    "SourceTableDetails": {
      "TableName": {},
      "TableId": {},
      "TableArn": {},
      "TableSizeBytes": {},
      "KeySchema": {},
      "TableCreationDateTime": {},
      "ProvisionedThroughput": {
        "ReadCapacityUnits": {},
        "WriteCapacityUnits": {}
      },
      "ItemCount": {},
      "BillingMode": {}
    },
    "SourceTableFeatureDetails": {
      "LocalSecondaryIndexes": {},
      "GlobalSecondaryIndexes": {},
      "StreamDescription": {
        "StreamEnabled": {},
        "StreamViewType": {}
      },
      "TimeToLiveDescription": {
        "TimeToLiveStatus": {},
        "AttributeName": {}
      },
      "SSEDescription": {
        "Status": {},
        "SSEType": {},
        "KMSMasterKeyArn": {},
        "InaccessibleEncryptionDateTime": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupDescription|object|false|none|none|

<h2 id="tocS_DeleteBackupInput">DeleteBackupInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletebackupinput"></a>
<a id="schema_DeleteBackupInput"></a>
<a id="tocSdeletebackupinput"></a>
<a id="tocsdeletebackupinput"></a>

```json
{
  "BackupArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupArn|object|true|none|none|

<h2 id="tocS_BackupNotFoundException">BackupNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemabackupnotfoundexception"></a>
<a id="schema_BackupNotFoundException"></a>
<a id="tocSbackupnotfoundexception"></a>
<a id="tocsbackupnotfoundexception"></a>

```json
null
```

<h2 id="tocS_DeleteItemOutput">DeleteItemOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteitemoutput"></a>
<a id="schema_DeleteItemOutput"></a>
<a id="tocSdeleteitemoutput"></a>
<a id="tocsdeleteitemoutput"></a>

```json
{
  "ConsumedCapacity": {
    "CapacityUnits": 1,
    "TableName": "Music"
  }
}
```

Represents the output of a <code>DeleteItem</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attributes|object|false|none|none|
|ConsumedCapacity|object|false|none|none|
|ItemCollectionMetrics|object|false|none|none|

<h2 id="tocS_DeleteItemInput">DeleteItemInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteiteminput"></a>
<a id="schema_DeleteItemInput"></a>
<a id="tocSdeleteiteminput"></a>
<a id="tocsdeleteiteminput"></a>

```json
{
  "TableName": {},
  "Key": {
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
  "Expected": {
    "property1": {
      "Value": {
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
      "Exists": {},
      "ComparisonOperator": {},
      "AttributeValueList": {}
    },
    "property2": {
      "Value": {
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
      "Exists": {},
      "ComparisonOperator": {},
      "AttributeValueList": {}
    }
  },
  "ConditionalOperator": {},
  "ReturnValues": {},
  "ReturnConsumedCapacity": "INDEXES",
  "ReturnItemCollectionMetrics": {},
  "ConditionExpression": {},
  "ExpressionAttributeNames": {
    "property1": "string",
    "property2": "string"
  },
  "ExpressionAttributeValues": {
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
  "ReturnValuesOnConditionCheckFailure": {}
}
```

Represents the input of a <code>DeleteItem</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableName|object|true|none|none|
|Key|object|true|none|none|
|Expected|object|false|none|none|
|ConditionalOperator|object|false|none|none|
|ReturnValues|object|false|none|none|
|ReturnConsumedCapacity|[ReturnConsumedCapacity](#schemareturnconsumedcapacity)|false|none|<p>Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul>|
|ReturnItemCollectionMetrics|object|false|none|none|
|ConditionExpression|object|false|none|none|
|ExpressionAttributeNames|object|false|none|none|
|ExpressionAttributeValues|object|false|none|none|
|ReturnValuesOnConditionCheckFailure|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ReturnConsumedCapacity|INDEXES|
|ReturnConsumedCapacity|TOTAL|
|ReturnConsumedCapacity|NONE|

<h2 id="tocS_ConditionalCheckFailedException">ConditionalCheckFailedException</h2>
<!-- backwards compatibility -->
<a id="schemaconditionalcheckfailedexception"></a>
<a id="schema_ConditionalCheckFailedException"></a>
<a id="tocSconditionalcheckfailedexception"></a>
<a id="tocsconditionalcheckfailedexception"></a>

```json
null
```

<h2 id="tocS_TransactionConflictException">TransactionConflictException</h2>
<!-- backwards compatibility -->
<a id="schematransactionconflictexception"></a>
<a id="schema_TransactionConflictException"></a>
<a id="tocStransactionconflictexception"></a>
<a id="tocstransactionconflictexception"></a>

```json
null
```

<h2 id="tocS_DeleteTableOutput">DeleteTableOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletetableoutput"></a>
<a id="schema_DeleteTableOutput"></a>
<a id="tocSdeletetableoutput"></a>
<a id="tocsdeletetableoutput"></a>

```json
{
  "TableDescription": {
    "ItemCount": 0,
    "ProvisionedThroughput": {
      "NumberOfDecreasesToday": 1,
      "ReadCapacityUnits": 5,
      "WriteCapacityUnits": 5
    },
    "TableName": "Music",
    "TableSizeBytes": 0,
    "TableStatus": "DELETING"
  }
}
```

Represents the output of a <code>DeleteTable</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableDescription|object|false|none|none|

<h2 id="tocS_DeleteTableInput">DeleteTableInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletetableinput"></a>
<a id="schema_DeleteTableInput"></a>
<a id="tocSdeletetableinput"></a>
<a id="tocsdeletetableinput"></a>

```json
{
  "TableName": {}
}
```

Represents the input of a <code>DeleteTable</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableName|object|true|none|none|

<h2 id="tocS_DescribeBackupOutput">DescribeBackupOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribebackupoutput"></a>
<a id="schema_DescribeBackupOutput"></a>
<a id="tocSdescribebackupoutput"></a>
<a id="tocsdescribebackupoutput"></a>

```json
{
  "BackupDescription": {
    "BackupDetails": {
      "BackupArn": {},
      "BackupName": {},
      "BackupSizeBytes": {},
      "BackupStatus": {},
      "BackupType": {},
      "BackupCreationDateTime": {},
      "BackupExpiryDateTime": {}
    },
    "SourceTableDetails": {
      "TableName": {},
      "TableId": {},
      "TableArn": {},
      "TableSizeBytes": {},
      "KeySchema": {},
      "TableCreationDateTime": {},
      "ProvisionedThroughput": {
        "ReadCapacityUnits": {},
        "WriteCapacityUnits": {}
      },
      "ItemCount": {},
      "BillingMode": {}
    },
    "SourceTableFeatureDetails": {
      "LocalSecondaryIndexes": {},
      "GlobalSecondaryIndexes": {},
      "StreamDescription": {
        "StreamEnabled": {},
        "StreamViewType": {}
      },
      "TimeToLiveDescription": {
        "TimeToLiveStatus": {},
        "AttributeName": {}
      },
      "SSEDescription": {
        "Status": {},
        "SSEType": {},
        "KMSMasterKeyArn": {},
        "InaccessibleEncryptionDateTime": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupDescription|object|false|none|none|

<h2 id="tocS_DescribeBackupInput">DescribeBackupInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribebackupinput"></a>
<a id="schema_DescribeBackupInput"></a>
<a id="tocSdescribebackupinput"></a>
<a id="tocsdescribebackupinput"></a>

```json
{
  "BackupArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupArn|object|true|none|none|

<h2 id="tocS_DescribeContinuousBackupsOutput">DescribeContinuousBackupsOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribecontinuousbackupsoutput"></a>
<a id="schema_DescribeContinuousBackupsOutput"></a>
<a id="tocSdescribecontinuousbackupsoutput"></a>
<a id="tocsdescribecontinuousbackupsoutput"></a>

```json
{
  "ContinuousBackupsDescription": {
    "ContinuousBackupsStatus": {},
    "PointInTimeRecoveryDescription": {
      "PointInTimeRecoveryStatus": {},
      "EarliestRestorableDateTime": {},
      "LatestRestorableDateTime": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContinuousBackupsDescription|object|false|none|none|

<h2 id="tocS_DescribeContinuousBackupsInput">DescribeContinuousBackupsInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribecontinuousbackupsinput"></a>
<a id="schema_DescribeContinuousBackupsInput"></a>
<a id="tocSdescribecontinuousbackupsinput"></a>
<a id="tocsdescribecontinuousbackupsinput"></a>

```json
{
  "TableName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableName|object|true|none|none|

<h2 id="tocS_DescribeContributorInsightsOutput">DescribeContributorInsightsOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribecontributorinsightsoutput"></a>
<a id="schema_DescribeContributorInsightsOutput"></a>
<a id="tocSdescribecontributorinsightsoutput"></a>
<a id="tocsdescribecontributorinsightsoutput"></a>

```json
{
  "TableName": {},
  "IndexName": {},
  "ContributorInsightsRuleList": {},
  "ContributorInsightsStatus": {},
  "LastUpdateDateTime": {},
  "FailureException": {
    "ExceptionName": {},
    "ExceptionDescription": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableName|object|false|none|none|
|IndexName|object|false|none|none|
|ContributorInsightsRuleList|object|false|none|none|
|ContributorInsightsStatus|object|false|none|none|
|LastUpdateDateTime|object|false|none|none|
|FailureException|object|false|none|none|

<h2 id="tocS_DescribeContributorInsightsInput">DescribeContributorInsightsInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribecontributorinsightsinput"></a>
<a id="schema_DescribeContributorInsightsInput"></a>
<a id="tocSdescribecontributorinsightsinput"></a>
<a id="tocsdescribecontributorinsightsinput"></a>

```json
{
  "TableName": {},
  "IndexName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableName|object|true|none|none|
|IndexName|object|false|none|none|

<h2 id="tocS_DescribeEndpointsResponse">DescribeEndpointsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeendpointsresponse"></a>
<a id="schema_DescribeEndpointsResponse"></a>
<a id="tocSdescribeendpointsresponse"></a>
<a id="tocsdescribeendpointsresponse"></a>

```json
{
  "Endpoints": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Endpoints|object|true|none|none|

<h2 id="tocS_DescribeEndpointsRequest">DescribeEndpointsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeendpointsrequest"></a>
<a id="schema_DescribeEndpointsRequest"></a>
<a id="tocSdescribeendpointsrequest"></a>
<a id="tocsdescribeendpointsrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeExportOutput">DescribeExportOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeexportoutput"></a>
<a id="schema_DescribeExportOutput"></a>
<a id="tocSdescribeexportoutput"></a>
<a id="tocsdescribeexportoutput"></a>

```json
{
  "ExportDescription": {
    "ExportArn": {},
    "ExportStatus": {},
    "StartTime": {},
    "EndTime": {},
    "ExportManifest": {},
    "TableArn": {},
    "TableId": {},
    "ExportTime": {},
    "ClientToken": {},
    "S3Bucket": {},
    "S3BucketOwner": {},
    "S3Prefix": {},
    "S3SseAlgorithm": {},
    "S3SseKmsKeyId": {},
    "FailureCode": {},
    "FailureMessage": {},
    "ExportFormat": {},
    "BilledSizeBytes": {},
    "ItemCount": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExportDescription|object|false|none|none|

<h2 id="tocS_DescribeExportInput">DescribeExportInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeexportinput"></a>
<a id="schema_DescribeExportInput"></a>
<a id="tocSdescribeexportinput"></a>
<a id="tocsdescribeexportinput"></a>

```json
{
  "ExportArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExportArn|object|true|none|none|

<h2 id="tocS_ExportNotFoundException">ExportNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaexportnotfoundexception"></a>
<a id="schema_ExportNotFoundException"></a>
<a id="tocSexportnotfoundexception"></a>
<a id="tocsexportnotfoundexception"></a>

```json
null
```

<h2 id="tocS_DescribeGlobalTableOutput">DescribeGlobalTableOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeglobaltableoutput"></a>
<a id="schema_DescribeGlobalTableOutput"></a>
<a id="tocSdescribeglobaltableoutput"></a>
<a id="tocsdescribeglobaltableoutput"></a>

```json
{
  "GlobalTableDescription": {
    "ReplicationGroup": {},
    "GlobalTableArn": {},
    "CreationDateTime": {},
    "GlobalTableStatus": {},
    "GlobalTableName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalTableDescription|object|false|none|none|

<h2 id="tocS_DescribeGlobalTableInput">DescribeGlobalTableInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeglobaltableinput"></a>
<a id="schema_DescribeGlobalTableInput"></a>
<a id="tocSdescribeglobaltableinput"></a>
<a id="tocsdescribeglobaltableinput"></a>

```json
{
  "GlobalTableName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalTableName|object|true|none|none|

<h2 id="tocS_GlobalTableNotFoundException">GlobalTableNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaglobaltablenotfoundexception"></a>
<a id="schema_GlobalTableNotFoundException"></a>
<a id="tocSglobaltablenotfoundexception"></a>
<a id="tocsglobaltablenotfoundexception"></a>

```json
null
```

<h2 id="tocS_DescribeGlobalTableSettingsOutput">DescribeGlobalTableSettingsOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeglobaltablesettingsoutput"></a>
<a id="schema_DescribeGlobalTableSettingsOutput"></a>
<a id="tocSdescribeglobaltablesettingsoutput"></a>
<a id="tocsdescribeglobaltablesettingsoutput"></a>

```json
{
  "GlobalTableName": {},
  "ReplicaSettings": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalTableName|object|false|none|none|
|ReplicaSettings|object|false|none|none|

<h2 id="tocS_DescribeGlobalTableSettingsInput">DescribeGlobalTableSettingsInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeglobaltablesettingsinput"></a>
<a id="schema_DescribeGlobalTableSettingsInput"></a>
<a id="tocSdescribeglobaltablesettingsinput"></a>
<a id="tocsdescribeglobaltablesettingsinput"></a>

```json
{
  "GlobalTableName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalTableName|object|true|none|none|

<h2 id="tocS_DescribeImportOutput">DescribeImportOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeimportoutput"></a>
<a id="schema_DescribeImportOutput"></a>
<a id="tocSdescribeimportoutput"></a>
<a id="tocsdescribeimportoutput"></a>

```json
{
  "ImportTableDescription": {
    "ImportArn": {},
    "ImportStatus": {},
    "TableArn": {},
    "TableId": {},
    "ClientToken": {},
    "S3BucketSource": {
      "S3BucketOwner": {},
      "S3Bucket": {},
      "S3KeyPrefix": {}
    },
    "ErrorCount": {},
    "CloudWatchLogGroupArn": {},
    "InputFormat": {},
    "InputFormatOptions": {
      "Csv": {
        "Delimiter": {},
        "HeaderList": {}
      }
    },
    "InputCompressionType": {},
    "TableCreationParameters": {
      "TableName": {},
      "AttributeDefinitions": {},
      "KeySchema": {},
      "BillingMode": {},
      "ProvisionedThroughput": {
        "ReadCapacityUnits": {},
        "WriteCapacityUnits": {}
      },
      "SSESpecification": {
        "Enabled": {},
        "SSEType": {},
        "KMSMasterKeyId": {}
      },
      "GlobalSecondaryIndexes": {}
    },
    "StartTime": {},
    "EndTime": {},
    "ProcessedSizeBytes": {},
    "ProcessedItemCount": {},
    "ImportedItemCount": {},
    "FailureCode": {},
    "FailureMessage": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ImportTableDescription|object|true|none|none|

<h2 id="tocS_DescribeImportInput">DescribeImportInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeimportinput"></a>
<a id="schema_DescribeImportInput"></a>
<a id="tocSdescribeimportinput"></a>
<a id="tocsdescribeimportinput"></a>

```json
{
  "ImportArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ImportArn|object|true|none|none|

<h2 id="tocS_ImportNotFoundException">ImportNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaimportnotfoundexception"></a>
<a id="schema_ImportNotFoundException"></a>
<a id="tocSimportnotfoundexception"></a>
<a id="tocsimportnotfoundexception"></a>

```json
null
```

<h2 id="tocS_DescribeKinesisStreamingDestinationOutput">DescribeKinesisStreamingDestinationOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribekinesisstreamingdestinationoutput"></a>
<a id="schema_DescribeKinesisStreamingDestinationOutput"></a>
<a id="tocSdescribekinesisstreamingdestinationoutput"></a>
<a id="tocsdescribekinesisstreamingdestinationoutput"></a>

```json
{
  "TableName": {},
  "KinesisDataStreamDestinations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableName|object|false|none|none|
|KinesisDataStreamDestinations|object|false|none|none|

<h2 id="tocS_DescribeKinesisStreamingDestinationInput">DescribeKinesisStreamingDestinationInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribekinesisstreamingdestinationinput"></a>
<a id="schema_DescribeKinesisStreamingDestinationInput"></a>
<a id="tocSdescribekinesisstreamingdestinationinput"></a>
<a id="tocsdescribekinesisstreamingdestinationinput"></a>

```json
{
  "TableName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableName|object|true|none|none|

<h2 id="tocS_DescribeLimitsOutput">DescribeLimitsOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribelimitsoutput"></a>
<a id="schema_DescribeLimitsOutput"></a>
<a id="tocSdescribelimitsoutput"></a>
<a id="tocsdescribelimitsoutput"></a>

```json
{
  "AccountMaxReadCapacityUnits": 20000,
  "AccountMaxWriteCapacityUnits": 20000,
  "TableMaxReadCapacityUnits": 10000,
  "TableMaxWriteCapacityUnits": 10000
}
```

Represents the output of a <code>DescribeLimits</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountMaxReadCapacityUnits|object|false|none|none|
|AccountMaxWriteCapacityUnits|object|false|none|none|
|TableMaxReadCapacityUnits|object|false|none|none|
|TableMaxWriteCapacityUnits|object|false|none|none|

<h2 id="tocS_DescribeLimitsInput">DescribeLimitsInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribelimitsinput"></a>
<a id="schema_DescribeLimitsInput"></a>
<a id="tocSdescribelimitsinput"></a>
<a id="tocsdescribelimitsinput"></a>

```json
{}
```

Represents the input of a <code>DescribeLimits</code> operation. Has no content.

<h2 id="tocS_DescribeTableOutput">DescribeTableOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribetableoutput"></a>
<a id="schema_DescribeTableOutput"></a>
<a id="tocSdescribetableoutput"></a>
<a id="tocsdescribetableoutput"></a>

```json
{
  "Table": {
    "AttributeDefinitions": [
      {
        "AttributeName": "Artist",
        "AttributeType": "S"
      },
      {
        "AttributeName": "SongTitle",
        "AttributeType": "S"
      }
    ],
    "CreationDateTime": "1421866952.062",
    "ItemCount": 0,
    "KeySchema": [
      {
        "AttributeName": "Artist",
        "KeyType": "HASH"
      },
      {
        "AttributeName": "SongTitle",
        "KeyType": "RANGE"
      }
    ],
    "ProvisionedThroughput": {
      "NumberOfDecreasesToday": 1,
      "ReadCapacityUnits": 5,
      "WriteCapacityUnits": 5
    },
    "TableName": "Music",
    "TableSizeBytes": 0,
    "TableStatus": "ACTIVE"
  }
}
```

Represents the output of a <code>DescribeTable</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Table|object|false|none|none|

<h2 id="tocS_DescribeTableInput">DescribeTableInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribetableinput"></a>
<a id="schema_DescribeTableInput"></a>
<a id="tocSdescribetableinput"></a>
<a id="tocsdescribetableinput"></a>

```json
{
  "TableName": {}
}
```

Represents the input of a <code>DescribeTable</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableName|object|true|none|none|

<h2 id="tocS_DescribeTableReplicaAutoScalingOutput">DescribeTableReplicaAutoScalingOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribetablereplicaautoscalingoutput"></a>
<a id="schema_DescribeTableReplicaAutoScalingOutput"></a>
<a id="tocSdescribetablereplicaautoscalingoutput"></a>
<a id="tocsdescribetablereplicaautoscalingoutput"></a>

```json
{
  "TableAutoScalingDescription": {
    "TableName": {},
    "TableStatus": {},
    "Replicas": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableAutoScalingDescription|object|false|none|none|

<h2 id="tocS_DescribeTableReplicaAutoScalingInput">DescribeTableReplicaAutoScalingInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribetablereplicaautoscalinginput"></a>
<a id="schema_DescribeTableReplicaAutoScalingInput"></a>
<a id="tocSdescribetablereplicaautoscalinginput"></a>
<a id="tocsdescribetablereplicaautoscalinginput"></a>

```json
{
  "TableName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableName|object|true|none|none|

<h2 id="tocS_DescribeTimeToLiveOutput">DescribeTimeToLiveOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribetimetoliveoutput"></a>
<a id="schema_DescribeTimeToLiveOutput"></a>
<a id="tocSdescribetimetoliveoutput"></a>
<a id="tocsdescribetimetoliveoutput"></a>

```json
{
  "TimeToLiveDescription": {
    "TimeToLiveStatus": {},
    "AttributeName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TimeToLiveDescription|object|false|none|none|

<h2 id="tocS_DescribeTimeToLiveInput">DescribeTimeToLiveInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribetimetoliveinput"></a>
<a id="schema_DescribeTimeToLiveInput"></a>
<a id="tocSdescribetimetoliveinput"></a>
<a id="tocsdescribetimetoliveinput"></a>

```json
{
  "TableName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableName|object|true|none|none|

<h2 id="tocS_KinesisStreamingDestinationOutput">KinesisStreamingDestinationOutput</h2>
<!-- backwards compatibility -->
<a id="schemakinesisstreamingdestinationoutput"></a>
<a id="schema_KinesisStreamingDestinationOutput"></a>
<a id="tocSkinesisstreamingdestinationoutput"></a>
<a id="tocskinesisstreamingdestinationoutput"></a>

```json
{
  "TableName": {},
  "StreamArn": {},
  "DestinationStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableName|object|false|none|none|
|StreamArn|object|false|none|none|
|DestinationStatus|object|false|none|none|

<h2 id="tocS_KinesisStreamingDestinationInput">KinesisStreamingDestinationInput</h2>
<!-- backwards compatibility -->
<a id="schemakinesisstreamingdestinationinput"></a>
<a id="schema_KinesisStreamingDestinationInput"></a>
<a id="tocSkinesisstreamingdestinationinput"></a>
<a id="tocskinesisstreamingdestinationinput"></a>

```json
{
  "TableName": {},
  "StreamArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableName|object|true|none|none|
|StreamArn|object|true|none|none|

<h2 id="tocS_ExecuteStatementOutput">ExecuteStatementOutput</h2>
<!-- backwards compatibility -->
<a id="schemaexecutestatementoutput"></a>
<a id="schema_ExecuteStatementOutput"></a>
<a id="tocSexecutestatementoutput"></a>
<a id="tocsexecutestatementoutput"></a>

```json
{
  "Items": {},
  "NextToken": {},
  "ConsumedCapacity": {
    "TableName": {},
    "CapacityUnits": {},
    "ReadCapacityUnits": {},
    "WriteCapacityUnits": {},
    "Table": {
      "ReadCapacityUnits": {},
      "WriteCapacityUnits": {},
      "CapacityUnits": {}
    },
    "LocalSecondaryIndexes": {
      "property1": {
        "ReadCapacityUnits": {},
        "WriteCapacityUnits": {},
        "CapacityUnits": {}
      },
      "property2": {
        "ReadCapacityUnits": {},
        "WriteCapacityUnits": {},
        "CapacityUnits": {}
      }
    },
    "GlobalSecondaryIndexes": {
      "property1": {
        "ReadCapacityUnits": {},
        "WriteCapacityUnits": {},
        "CapacityUnits": {}
      },
      "property2": {
        "ReadCapacityUnits": {},
        "WriteCapacityUnits": {},
        "CapacityUnits": {}
      }
    }
  },
  "LastEvaluatedKey": {
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
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|object|false|none|none|
|NextToken|object|false|none|none|
|ConsumedCapacity|[ConsumedCapacity](#schemaconsumedcapacity)|false|none|The capacity units consumed by an operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. <code>ConsumedCapacity</code> is only returned if the request asked for it. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughputIntro.html">Provisioned Throughput</a> in the <i>Amazon DynamoDB Developer Guide</i>.|
|LastEvaluatedKey|object|false|none|none|

<h2 id="tocS_ExecuteStatementInput">ExecuteStatementInput</h2>
<!-- backwards compatibility -->
<a id="schemaexecutestatementinput"></a>
<a id="schema_ExecuteStatementInput"></a>
<a id="tocSexecutestatementinput"></a>
<a id="tocsexecutestatementinput"></a>

```json
{
  "Statement": {},
  "Parameters": {},
  "ConsistentRead": {},
  "NextToken": {},
  "ReturnConsumedCapacity": "INDEXES",
  "Limit": {},
  "ReturnValuesOnConditionCheckFailure": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Statement|object|true|none|none|
|Parameters|object|false|none|none|
|ConsistentRead|object|false|none|none|
|NextToken|object|false|none|none|
|ReturnConsumedCapacity|[ReturnConsumedCapacity](#schemareturnconsumedcapacity)|false|none|<p>Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul>|
|Limit|object|false|none|none|
|ReturnValuesOnConditionCheckFailure|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ReturnConsumedCapacity|INDEXES|
|ReturnConsumedCapacity|TOTAL|
|ReturnConsumedCapacity|NONE|

<h2 id="tocS_DuplicateItemException">DuplicateItemException</h2>
<!-- backwards compatibility -->
<a id="schemaduplicateitemexception"></a>
<a id="schema_DuplicateItemException"></a>
<a id="tocSduplicateitemexception"></a>
<a id="tocsduplicateitemexception"></a>

```json
null
```

<h2 id="tocS_ExecuteTransactionOutput">ExecuteTransactionOutput</h2>
<!-- backwards compatibility -->
<a id="schemaexecutetransactionoutput"></a>
<a id="schema_ExecuteTransactionOutput"></a>
<a id="tocSexecutetransactionoutput"></a>
<a id="tocsexecutetransactionoutput"></a>

```json
{
  "Responses": {},
  "ConsumedCapacity": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Responses|object|false|none|none|
|ConsumedCapacity|object|false|none|none|

<h2 id="tocS_ExecuteTransactionInput">ExecuteTransactionInput</h2>
<!-- backwards compatibility -->
<a id="schemaexecutetransactioninput"></a>
<a id="schema_ExecuteTransactionInput"></a>
<a id="tocSexecutetransactioninput"></a>
<a id="tocsexecutetransactioninput"></a>

```json
{
  "TransactStatements": {},
  "ClientRequestToken": {},
  "ReturnConsumedCapacity": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TransactStatements|object|true|none|none|
|ClientRequestToken|object|false|none|none|
|ReturnConsumedCapacity|object|false|none|none|

<h2 id="tocS_TransactionCanceledException">TransactionCanceledException</h2>
<!-- backwards compatibility -->
<a id="schematransactioncanceledexception"></a>
<a id="schema_TransactionCanceledException"></a>
<a id="tocStransactioncanceledexception"></a>
<a id="tocstransactioncanceledexception"></a>

```json
null
```

<h2 id="tocS_TransactionInProgressException">TransactionInProgressException</h2>
<!-- backwards compatibility -->
<a id="schematransactioninprogressexception"></a>
<a id="schema_TransactionInProgressException"></a>
<a id="tocStransactioninprogressexception"></a>
<a id="tocstransactioninprogressexception"></a>

```json
null
```

<h2 id="tocS_IdempotentParameterMismatchException">IdempotentParameterMismatchException</h2>
<!-- backwards compatibility -->
<a id="schemaidempotentparametermismatchexception"></a>
<a id="schema_IdempotentParameterMismatchException"></a>
<a id="tocSidempotentparametermismatchexception"></a>
<a id="tocsidempotentparametermismatchexception"></a>

```json
null
```

<h2 id="tocS_ExportTableToPointInTimeOutput">ExportTableToPointInTimeOutput</h2>
<!-- backwards compatibility -->
<a id="schemaexporttabletopointintimeoutput"></a>
<a id="schema_ExportTableToPointInTimeOutput"></a>
<a id="tocSexporttabletopointintimeoutput"></a>
<a id="tocsexporttabletopointintimeoutput"></a>

```json
{
  "ExportDescription": {
    "ExportArn": {},
    "ExportStatus": {},
    "StartTime": {},
    "EndTime": {},
    "ExportManifest": {},
    "TableArn": {},
    "TableId": {},
    "ExportTime": {},
    "ClientToken": {},
    "S3Bucket": {},
    "S3BucketOwner": {},
    "S3Prefix": {},
    "S3SseAlgorithm": {},
    "S3SseKmsKeyId": {},
    "FailureCode": {},
    "FailureMessage": {},
    "ExportFormat": {},
    "BilledSizeBytes": {},
    "ItemCount": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExportDescription|object|false|none|none|

<h2 id="tocS_ExportTableToPointInTimeInput">ExportTableToPointInTimeInput</h2>
<!-- backwards compatibility -->
<a id="schemaexporttabletopointintimeinput"></a>
<a id="schema_ExportTableToPointInTimeInput"></a>
<a id="tocSexporttabletopointintimeinput"></a>
<a id="tocsexporttabletopointintimeinput"></a>

```json
{
  "TableArn": {},
  "ExportTime": {},
  "ClientToken": {},
  "S3Bucket": {},
  "S3BucketOwner": {},
  "S3Prefix": {},
  "S3SseAlgorithm": {},
  "S3SseKmsKeyId": {},
  "ExportFormat": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableArn|object|true|none|none|
|ExportTime|object|false|none|none|
|ClientToken|object|false|none|none|
|S3Bucket|object|true|none|none|
|S3BucketOwner|object|false|none|none|
|S3Prefix|object|false|none|none|
|S3SseAlgorithm|object|false|none|none|
|S3SseKmsKeyId|object|false|none|none|
|ExportFormat|object|false|none|none|

<h2 id="tocS_PointInTimeRecoveryUnavailableException">PointInTimeRecoveryUnavailableException</h2>
<!-- backwards compatibility -->
<a id="schemapointintimerecoveryunavailableexception"></a>
<a id="schema_PointInTimeRecoveryUnavailableException"></a>
<a id="tocSpointintimerecoveryunavailableexception"></a>
<a id="tocspointintimerecoveryunavailableexception"></a>

```json
null
```

<h2 id="tocS_InvalidExportTimeException">InvalidExportTimeException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidexporttimeexception"></a>
<a id="schema_InvalidExportTimeException"></a>
<a id="tocSinvalidexporttimeexception"></a>
<a id="tocsinvalidexporttimeexception"></a>

```json
null
```

<h2 id="tocS_ExportConflictException">ExportConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaexportconflictexception"></a>
<a id="schema_ExportConflictException"></a>
<a id="tocSexportconflictexception"></a>
<a id="tocsexportconflictexception"></a>

```json
null
```

<h2 id="tocS_GetItemOutput">GetItemOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetitemoutput"></a>
<a id="schema_GetItemOutput"></a>
<a id="tocSgetitemoutput"></a>
<a id="tocsgetitemoutput"></a>

```json
{
  "Item": {
    "AlbumTitle": {
      "S": "Songs About Life"
    },
    "Artist": {
      "S": "Acme Band"
    },
    "SongTitle": {
      "S": "Happy Day"
    }
  }
}
```

Represents the output of a <code>GetItem</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Item|object|false|none|none|
|ConsumedCapacity|object|false|none|none|

<h2 id="tocS_GetItemInput">GetItemInput</h2>
<!-- backwards compatibility -->
<a id="schemagetiteminput"></a>
<a id="schema_GetItemInput"></a>
<a id="tocSgetiteminput"></a>
<a id="tocsgetiteminput"></a>

```json
{
  "TableName": {},
  "Key": {
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
  "AttributesToGet": {},
  "ConsistentRead": {},
  "ReturnConsumedCapacity": "INDEXES",
  "ProjectionExpression": {},
  "ExpressionAttributeNames": {
    "property1": "string",
    "property2": "string"
  }
}
```

Represents the input of a <code>GetItem</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableName|object|true|none|none|
|Key|object|true|none|none|
|AttributesToGet|object|false|none|none|
|ConsistentRead|object|false|none|none|
|ReturnConsumedCapacity|[ReturnConsumedCapacity](#schemareturnconsumedcapacity)|false|none|<p>Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul>|
|ProjectionExpression|object|false|none|none|
|ExpressionAttributeNames|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ReturnConsumedCapacity|INDEXES|
|ReturnConsumedCapacity|TOTAL|
|ReturnConsumedCapacity|NONE|

<h2 id="tocS_ImportTableOutput">ImportTableOutput</h2>
<!-- backwards compatibility -->
<a id="schemaimporttableoutput"></a>
<a id="schema_ImportTableOutput"></a>
<a id="tocSimporttableoutput"></a>
<a id="tocsimporttableoutput"></a>

```json
{
  "ImportTableDescription": {
    "ImportArn": {},
    "ImportStatus": {},
    "TableArn": {},
    "TableId": {},
    "ClientToken": {},
    "S3BucketSource": {
      "S3BucketOwner": {},
      "S3Bucket": {},
      "S3KeyPrefix": {}
    },
    "ErrorCount": {},
    "CloudWatchLogGroupArn": {},
    "InputFormat": {},
    "InputFormatOptions": {
      "Csv": {
        "Delimiter": {},
        "HeaderList": {}
      }
    },
    "InputCompressionType": {},
    "TableCreationParameters": {
      "TableName": {},
      "AttributeDefinitions": {},
      "KeySchema": {},
      "BillingMode": {},
      "ProvisionedThroughput": {
        "ReadCapacityUnits": {},
        "WriteCapacityUnits": {}
      },
      "SSESpecification": {
        "Enabled": {},
        "SSEType": {},
        "KMSMasterKeyId": {}
      },
      "GlobalSecondaryIndexes": {}
    },
    "StartTime": {},
    "EndTime": {},
    "ProcessedSizeBytes": {},
    "ProcessedItemCount": {},
    "ImportedItemCount": {},
    "FailureCode": {},
    "FailureMessage": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ImportTableDescription|object|true|none|none|

<h2 id="tocS_ImportTableInput">ImportTableInput</h2>
<!-- backwards compatibility -->
<a id="schemaimporttableinput"></a>
<a id="schema_ImportTableInput"></a>
<a id="tocSimporttableinput"></a>
<a id="tocsimporttableinput"></a>

```json
{
  "ClientToken": {},
  "S3BucketSource": {
    "S3BucketOwner": {},
    "S3Bucket": {},
    "S3KeyPrefix": {}
  },
  "InputFormat": {},
  "InputFormatOptions": {
    "Csv": {
      "Delimiter": {},
      "HeaderList": {}
    }
  },
  "InputCompressionType": {},
  "TableCreationParameters": {
    "TableName": {},
    "AttributeDefinitions": {},
    "KeySchema": {},
    "BillingMode": {},
    "ProvisionedThroughput": {
      "ReadCapacityUnits": {},
      "WriteCapacityUnits": {}
    },
    "SSESpecification": {
      "Enabled": {},
      "SSEType": {},
      "KMSMasterKeyId": {}
    },
    "GlobalSecondaryIndexes": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientToken|object|false|none|none|
|S3BucketSource|object|true|none|none|
|InputFormat|object|true|none|none|
|InputFormatOptions|object|false|none|none|
|InputCompressionType|object|false|none|none|
|TableCreationParameters|object|true|none|none|

<h2 id="tocS_ImportConflictException">ImportConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaimportconflictexception"></a>
<a id="schema_ImportConflictException"></a>
<a id="tocSimportconflictexception"></a>
<a id="tocsimportconflictexception"></a>

```json
null
```

<h2 id="tocS_ListBackupsOutput">ListBackupsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistbackupsoutput"></a>
<a id="schema_ListBackupsOutput"></a>
<a id="tocSlistbackupsoutput"></a>
<a id="tocslistbackupsoutput"></a>

```json
{
  "BackupSummaries": {},
  "LastEvaluatedBackupArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupSummaries|object|false|none|none|
|LastEvaluatedBackupArn|object|false|none|none|

<h2 id="tocS_ListBackupsInput">ListBackupsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistbackupsinput"></a>
<a id="schema_ListBackupsInput"></a>
<a id="tocSlistbackupsinput"></a>
<a id="tocslistbackupsinput"></a>

```json
{
  "TableName": {},
  "Limit": {},
  "TimeRangeLowerBound": {},
  "TimeRangeUpperBound": {},
  "ExclusiveStartBackupArn": {},
  "BackupType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableName|object|false|none|none|
|Limit|object|false|none|none|
|TimeRangeLowerBound|object|false|none|none|
|TimeRangeUpperBound|object|false|none|none|
|ExclusiveStartBackupArn|object|false|none|none|
|BackupType|object|false|none|none|

<h2 id="tocS_ListContributorInsightsOutput">ListContributorInsightsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistcontributorinsightsoutput"></a>
<a id="schema_ListContributorInsightsOutput"></a>
<a id="tocSlistcontributorinsightsoutput"></a>
<a id="tocslistcontributorinsightsoutput"></a>

```json
{
  "ContributorInsightsSummaries": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContributorInsightsSummaries|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListContributorInsightsInput">ListContributorInsightsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistcontributorinsightsinput"></a>
<a id="schema_ListContributorInsightsInput"></a>
<a id="tocSlistcontributorinsightsinput"></a>
<a id="tocslistcontributorinsightsinput"></a>

```json
{
  "TableName": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableName|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListExportsOutput">ListExportsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistexportsoutput"></a>
<a id="schema_ListExportsOutput"></a>
<a id="tocSlistexportsoutput"></a>
<a id="tocslistexportsoutput"></a>

```json
{
  "ExportSummaries": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExportSummaries|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListExportsInput">ListExportsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistexportsinput"></a>
<a id="schema_ListExportsInput"></a>
<a id="tocSlistexportsinput"></a>
<a id="tocslistexportsinput"></a>

```json
{
  "TableArn": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableArn|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListGlobalTablesOutput">ListGlobalTablesOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistglobaltablesoutput"></a>
<a id="schema_ListGlobalTablesOutput"></a>
<a id="tocSlistglobaltablesoutput"></a>
<a id="tocslistglobaltablesoutput"></a>

```json
{
  "GlobalTables": {},
  "LastEvaluatedGlobalTableName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalTables|object|false|none|none|
|LastEvaluatedGlobalTableName|object|false|none|none|

<h2 id="tocS_ListGlobalTablesInput">ListGlobalTablesInput</h2>
<!-- backwards compatibility -->
<a id="schemalistglobaltablesinput"></a>
<a id="schema_ListGlobalTablesInput"></a>
<a id="tocSlistglobaltablesinput"></a>
<a id="tocslistglobaltablesinput"></a>

```json
{
  "ExclusiveStartGlobalTableName": {},
  "Limit": {},
  "RegionName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExclusiveStartGlobalTableName|object|false|none|none|
|Limit|object|false|none|none|
|RegionName|object|false|none|none|

<h2 id="tocS_ListImportsOutput">ListImportsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistimportsoutput"></a>
<a id="schema_ListImportsOutput"></a>
<a id="tocSlistimportsoutput"></a>
<a id="tocslistimportsoutput"></a>

```json
{
  "ImportSummaryList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ImportSummaryList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListImportsInput">ListImportsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistimportsinput"></a>
<a id="schema_ListImportsInput"></a>
<a id="tocSlistimportsinput"></a>
<a id="tocslistimportsinput"></a>

```json
{
  "TableArn": {},
  "PageSize": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableArn|object|false|none|none|
|PageSize|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTablesOutput">ListTablesOutput</h2>
<!-- backwards compatibility -->
<a id="schemalisttablesoutput"></a>
<a id="schema_ListTablesOutput"></a>
<a id="tocSlisttablesoutput"></a>
<a id="tocslisttablesoutput"></a>

```json
{
  "TableNames": [
    "Forum",
    "ProductCatalog",
    "Reply",
    "Thread"
  ]
}
```

Represents the output of a <code>ListTables</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableNames|object|false|none|none|
|LastEvaluatedTableName|object|false|none|none|

<h2 id="tocS_ListTablesInput">ListTablesInput</h2>
<!-- backwards compatibility -->
<a id="schemalisttablesinput"></a>
<a id="schema_ListTablesInput"></a>
<a id="tocSlisttablesinput"></a>
<a id="tocslisttablesinput"></a>

```json
{
  "ExclusiveStartTableName": {},
  "Limit": {}
}
```

Represents the input of a <code>ListTables</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExclusiveStartTableName|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_ListTagsOfResourceOutput">ListTagsOfResourceOutput</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsofresourceoutput"></a>
<a id="schema_ListTagsOfResourceOutput"></a>
<a id="tocSlisttagsofresourceoutput"></a>
<a id="tocslisttagsofresourceoutput"></a>

```json
{
  "Tags": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTagsOfResourceInput">ListTagsOfResourceInput</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsofresourceinput"></a>
<a id="schema_ListTagsOfResourceInput"></a>
<a id="tocSlisttagsofresourceinput"></a>
<a id="tocslisttagsofresourceinput"></a>

```json
{
  "ResourceArn": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_PutItemOutput">PutItemOutput</h2>
<!-- backwards compatibility -->
<a id="schemaputitemoutput"></a>
<a id="schema_PutItemOutput"></a>
<a id="tocSputitemoutput"></a>
<a id="tocsputitemoutput"></a>

```json
{
  "ConsumedCapacity": {
    "CapacityUnits": 1,
    "TableName": "Music"
  }
}
```

Represents the output of a <code>PutItem</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attributes|object|false|none|none|
|ConsumedCapacity|object|false|none|none|
|ItemCollectionMetrics|object|false|none|none|

<h2 id="tocS_PutItemInput">PutItemInput</h2>
<!-- backwards compatibility -->
<a id="schemaputiteminput"></a>
<a id="schema_PutItemInput"></a>
<a id="tocSputiteminput"></a>
<a id="tocsputiteminput"></a>

```json
{
  "TableName": {},
  "Item": {
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
  "Expected": {
    "property1": {
      "Value": {
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
      "Exists": {},
      "ComparisonOperator": {},
      "AttributeValueList": {}
    },
    "property2": {
      "Value": {
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
      "Exists": {},
      "ComparisonOperator": {},
      "AttributeValueList": {}
    }
  },
  "ReturnValues": {},
  "ReturnConsumedCapacity": "INDEXES",
  "ReturnItemCollectionMetrics": {},
  "ConditionalOperator": {},
  "ConditionExpression": {},
  "ExpressionAttributeNames": {
    "property1": "string",
    "property2": "string"
  },
  "ExpressionAttributeValues": {
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
  "ReturnValuesOnConditionCheckFailure": {}
}
```

Represents the input of a <code>PutItem</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableName|object|true|none|none|
|Item|object|true|none|none|
|Expected|object|false|none|none|
|ReturnValues|object|false|none|none|
|ReturnConsumedCapacity|[ReturnConsumedCapacity](#schemareturnconsumedcapacity)|false|none|<p>Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul>|
|ReturnItemCollectionMetrics|object|false|none|none|
|ConditionalOperator|object|false|none|none|
|ConditionExpression|object|false|none|none|
|ExpressionAttributeNames|object|false|none|none|
|ExpressionAttributeValues|object|false|none|none|
|ReturnValuesOnConditionCheckFailure|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ReturnConsumedCapacity|INDEXES|
|ReturnConsumedCapacity|TOTAL|
|ReturnConsumedCapacity|NONE|

<h2 id="tocS_QueryOutput">QueryOutput</h2>
<!-- backwards compatibility -->
<a id="schemaqueryoutput"></a>
<a id="schema_QueryOutput"></a>
<a id="tocSqueryoutput"></a>
<a id="tocsqueryoutput"></a>

```json
{
  "ConsumedCapacity": {},
  "Count": 2,
  "Items": [
    {
      "SongTitle": {
        "S": "Call Me Today"
      }
    }
  ],
  "ScannedCount": 2
}
```

Represents the output of a <code>Query</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|object|false|none|none|
|Count|object|false|none|none|
|ScannedCount|object|false|none|none|
|LastEvaluatedKey|object|false|none|none|
|ConsumedCapacity|object|false|none|none|

<h2 id="tocS_QueryInput">QueryInput</h2>
<!-- backwards compatibility -->
<a id="schemaqueryinput"></a>
<a id="schema_QueryInput"></a>
<a id="tocSqueryinput"></a>
<a id="tocsqueryinput"></a>

```json
{
  "TableName": {},
  "IndexName": {},
  "Select": {},
  "AttributesToGet": {},
  "Limit": {},
  "ConsistentRead": {},
  "KeyConditions": {
    "property1": {
      "AttributeValueList": {},
      "ComparisonOperator": {}
    },
    "property2": {
      "AttributeValueList": {},
      "ComparisonOperator": {}
    }
  },
  "QueryFilter": {
    "property1": {
      "AttributeValueList": {},
      "ComparisonOperator": {}
    },
    "property2": {
      "AttributeValueList": {},
      "ComparisonOperator": {}
    }
  },
  "ConditionalOperator": {},
  "ScanIndexForward": {},
  "ExclusiveStartKey": {
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
  "ReturnConsumedCapacity": "INDEXES",
  "ProjectionExpression": {},
  "FilterExpression": {},
  "KeyConditionExpression": {},
  "ExpressionAttributeNames": {
    "property1": "string",
    "property2": "string"
  },
  "ExpressionAttributeValues": {
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
}
```

Represents the input of a <code>Query</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableName|object|true|none|none|
|IndexName|object|false|none|none|
|Select|object|false|none|none|
|AttributesToGet|object|false|none|none|
|Limit|object|false|none|none|
|ConsistentRead|object|false|none|none|
|KeyConditions|object|false|none|none|
|QueryFilter|object|false|none|none|
|ConditionalOperator|object|false|none|none|
|ScanIndexForward|object|false|none|none|
|ExclusiveStartKey|object|false|none|none|
|ReturnConsumedCapacity|[ReturnConsumedCapacity](#schemareturnconsumedcapacity)|false|none|<p>Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul>|
|ProjectionExpression|object|false|none|none|
|FilterExpression|object|false|none|none|
|KeyConditionExpression|object|false|none|none|
|ExpressionAttributeNames|object|false|none|none|
|ExpressionAttributeValues|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ReturnConsumedCapacity|INDEXES|
|ReturnConsumedCapacity|TOTAL|
|ReturnConsumedCapacity|NONE|

<h2 id="tocS_RestoreTableFromBackupOutput">RestoreTableFromBackupOutput</h2>
<!-- backwards compatibility -->
<a id="schemarestoretablefrombackupoutput"></a>
<a id="schema_RestoreTableFromBackupOutput"></a>
<a id="tocSrestoretablefrombackupoutput"></a>
<a id="tocsrestoretablefrombackupoutput"></a>

```json
{
  "TableDescription": {
    "AttributeDefinitions": {},
    "TableName": {},
    "KeySchema": {},
    "TableStatus": {},
    "CreationDateTime": {},
    "ProvisionedThroughput": {
      "LastIncreaseDateTime": {},
      "LastDecreaseDateTime": {},
      "NumberOfDecreasesToday": {},
      "ReadCapacityUnits": {},
      "WriteCapacityUnits": {}
    },
    "TableSizeBytes": {},
    "ItemCount": {},
    "TableArn": {},
    "TableId": {},
    "BillingModeSummary": {
      "BillingMode": {},
      "LastUpdateToPayPerRequestDateTime": {}
    },
    "LocalSecondaryIndexes": {},
    "GlobalSecondaryIndexes": {},
    "StreamSpecification": {
      "StreamEnabled": {},
      "StreamViewType": {}
    },
    "LatestStreamLabel": {},
    "LatestStreamArn": {},
    "GlobalTableVersion": {},
    "Replicas": {},
    "RestoreSummary": {
      "SourceBackupArn": {},
      "SourceTableArn": {},
      "RestoreDateTime": {},
      "RestoreInProgress": {}
    },
    "SSEDescription": {
      "Status": {},
      "SSEType": {},
      "KMSMasterKeyArn": {},
      "InaccessibleEncryptionDateTime": {}
    },
    "ArchivalSummary": {
      "ArchivalDateTime": {},
      "ArchivalReason": {},
      "ArchivalBackupArn": {}
    },
    "TableClassSummary": {
      "TableClass": {},
      "LastUpdateDateTime": {}
    },
    "DeletionProtectionEnabled": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableDescription|object|false|none|none|

<h2 id="tocS_RestoreTableFromBackupInput">RestoreTableFromBackupInput</h2>
<!-- backwards compatibility -->
<a id="schemarestoretablefrombackupinput"></a>
<a id="schema_RestoreTableFromBackupInput"></a>
<a id="tocSrestoretablefrombackupinput"></a>
<a id="tocsrestoretablefrombackupinput"></a>

```json
{
  "TargetTableName": {},
  "BackupArn": {},
  "BillingModeOverride": {},
  "GlobalSecondaryIndexOverride": {},
  "LocalSecondaryIndexOverride": {},
  "ProvisionedThroughputOverride": {
    "ReadCapacityUnits": {},
    "WriteCapacityUnits": {}
  },
  "SSESpecificationOverride": {
    "Enabled": {},
    "SSEType": {},
    "KMSMasterKeyId": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetTableName|object|true|none|none|
|BackupArn|object|true|none|none|
|BillingModeOverride|object|false|none|none|
|GlobalSecondaryIndexOverride|object|false|none|none|
|LocalSecondaryIndexOverride|object|false|none|none|
|ProvisionedThroughputOverride|object|false|none|none|
|SSESpecificationOverride|object|false|none|none|

<h2 id="tocS_TableAlreadyExistsException">TableAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schematablealreadyexistsexception"></a>
<a id="schema_TableAlreadyExistsException"></a>
<a id="tocStablealreadyexistsexception"></a>
<a id="tocstablealreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_RestoreTableToPointInTimeOutput">RestoreTableToPointInTimeOutput</h2>
<!-- backwards compatibility -->
<a id="schemarestoretabletopointintimeoutput"></a>
<a id="schema_RestoreTableToPointInTimeOutput"></a>
<a id="tocSrestoretabletopointintimeoutput"></a>
<a id="tocsrestoretabletopointintimeoutput"></a>

```json
{
  "TableDescription": {
    "AttributeDefinitions": {},
    "TableName": {},
    "KeySchema": {},
    "TableStatus": {},
    "CreationDateTime": {},
    "ProvisionedThroughput": {
      "LastIncreaseDateTime": {},
      "LastDecreaseDateTime": {},
      "NumberOfDecreasesToday": {},
      "ReadCapacityUnits": {},
      "WriteCapacityUnits": {}
    },
    "TableSizeBytes": {},
    "ItemCount": {},
    "TableArn": {},
    "TableId": {},
    "BillingModeSummary": {
      "BillingMode": {},
      "LastUpdateToPayPerRequestDateTime": {}
    },
    "LocalSecondaryIndexes": {},
    "GlobalSecondaryIndexes": {},
    "StreamSpecification": {
      "StreamEnabled": {},
      "StreamViewType": {}
    },
    "LatestStreamLabel": {},
    "LatestStreamArn": {},
    "GlobalTableVersion": {},
    "Replicas": {},
    "RestoreSummary": {
      "SourceBackupArn": {},
      "SourceTableArn": {},
      "RestoreDateTime": {},
      "RestoreInProgress": {}
    },
    "SSEDescription": {
      "Status": {},
      "SSEType": {},
      "KMSMasterKeyArn": {},
      "InaccessibleEncryptionDateTime": {}
    },
    "ArchivalSummary": {
      "ArchivalDateTime": {},
      "ArchivalReason": {},
      "ArchivalBackupArn": {}
    },
    "TableClassSummary": {
      "TableClass": {},
      "LastUpdateDateTime": {}
    },
    "DeletionProtectionEnabled": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableDescription|object|false|none|none|

<h2 id="tocS_RestoreTableToPointInTimeInput">RestoreTableToPointInTimeInput</h2>
<!-- backwards compatibility -->
<a id="schemarestoretabletopointintimeinput"></a>
<a id="schema_RestoreTableToPointInTimeInput"></a>
<a id="tocSrestoretabletopointintimeinput"></a>
<a id="tocsrestoretabletopointintimeinput"></a>

```json
{
  "SourceTableArn": {},
  "SourceTableName": {},
  "TargetTableName": {},
  "UseLatestRestorableTime": {},
  "RestoreDateTime": {},
  "BillingModeOverride": {},
  "GlobalSecondaryIndexOverride": {},
  "LocalSecondaryIndexOverride": {},
  "ProvisionedThroughputOverride": {
    "ReadCapacityUnits": {},
    "WriteCapacityUnits": {}
  },
  "SSESpecificationOverride": {
    "Enabled": {},
    "SSEType": {},
    "KMSMasterKeyId": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceTableArn|object|false|none|none|
|SourceTableName|object|false|none|none|
|TargetTableName|object|true|none|none|
|UseLatestRestorableTime|object|false|none|none|
|RestoreDateTime|object|false|none|none|
|BillingModeOverride|object|false|none|none|
|GlobalSecondaryIndexOverride|object|false|none|none|
|LocalSecondaryIndexOverride|object|false|none|none|
|ProvisionedThroughputOverride|object|false|none|none|
|SSESpecificationOverride|object|false|none|none|

<h2 id="tocS_InvalidRestoreTimeException">InvalidRestoreTimeException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrestoretimeexception"></a>
<a id="schema_InvalidRestoreTimeException"></a>
<a id="tocSinvalidrestoretimeexception"></a>
<a id="tocsinvalidrestoretimeexception"></a>

```json
null
```

<h2 id="tocS_ScanOutput">ScanOutput</h2>
<!-- backwards compatibility -->
<a id="schemascanoutput"></a>
<a id="schema_ScanOutput"></a>
<a id="tocSscanoutput"></a>
<a id="tocsscanoutput"></a>

```json
{
  "ConsumedCapacity": {},
  "Count": 2,
  "Items": [
    {
      "AlbumTitle": {
        "S": "Somewhat Famous"
      },
      "SongTitle": {
        "S": "Call Me Today"
      }
    },
    {
      "AlbumTitle": {
        "S": "Blue Sky Blues"
      },
      "SongTitle": {
        "S": "Scared of My Shadow"
      }
    }
  ],
  "ScannedCount": 3
}
```

Represents the output of a <code>Scan</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|object|false|none|none|
|Count|object|false|none|none|
|ScannedCount|object|false|none|none|
|LastEvaluatedKey|object|false|none|none|
|ConsumedCapacity|object|false|none|none|

<h2 id="tocS_ScanInput">ScanInput</h2>
<!-- backwards compatibility -->
<a id="schemascaninput"></a>
<a id="schema_ScanInput"></a>
<a id="tocSscaninput"></a>
<a id="tocsscaninput"></a>

```json
{
  "TableName": {},
  "IndexName": {},
  "AttributesToGet": {},
  "Limit": {},
  "Select": {},
  "ScanFilter": {
    "property1": {
      "AttributeValueList": {},
      "ComparisonOperator": {}
    },
    "property2": {
      "AttributeValueList": {},
      "ComparisonOperator": {}
    }
  },
  "ConditionalOperator": {},
  "ExclusiveStartKey": {
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
  "ReturnConsumedCapacity": "INDEXES",
  "TotalSegments": {},
  "Segment": {},
  "ProjectionExpression": {},
  "FilterExpression": {},
  "ExpressionAttributeNames": {
    "property1": "string",
    "property2": "string"
  },
  "ExpressionAttributeValues": {
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
  "ConsistentRead": {}
}
```

Represents the input of a <code>Scan</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableName|object|true|none|none|
|IndexName|object|false|none|none|
|AttributesToGet|object|false|none|none|
|Limit|object|false|none|none|
|Select|object|false|none|none|
|ScanFilter|object|false|none|none|
|ConditionalOperator|object|false|none|none|
|ExclusiveStartKey|object|false|none|none|
|ReturnConsumedCapacity|[ReturnConsumedCapacity](#schemareturnconsumedcapacity)|false|none|<p>Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul>|
|TotalSegments|object|false|none|none|
|Segment|object|false|none|none|
|ProjectionExpression|object|false|none|none|
|FilterExpression|object|false|none|none|
|ExpressionAttributeNames|object|false|none|none|
|ExpressionAttributeValues|object|false|none|none|
|ConsistentRead|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ReturnConsumedCapacity|INDEXES|
|ReturnConsumedCapacity|TOTAL|
|ReturnConsumedCapacity|NONE|

<h2 id="tocS_TagResourceInput">TagResourceInput</h2>
<!-- backwards compatibility -->
<a id="schematagresourceinput"></a>
<a id="schema_TagResourceInput"></a>
<a id="tocStagresourceinput"></a>
<a id="tocstagresourceinput"></a>

```json
{
  "ResourceArn": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|Tags|object|true|none|none|

<h2 id="tocS_TransactGetItemsOutput">TransactGetItemsOutput</h2>
<!-- backwards compatibility -->
<a id="schematransactgetitemsoutput"></a>
<a id="schema_TransactGetItemsOutput"></a>
<a id="tocStransactgetitemsoutput"></a>
<a id="tocstransactgetitemsoutput"></a>

```json
{
  "ConsumedCapacity": {},
  "Responses": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConsumedCapacity|object|false|none|none|
|Responses|object|false|none|none|

<h2 id="tocS_TransactGetItemsInput">TransactGetItemsInput</h2>
<!-- backwards compatibility -->
<a id="schematransactgetitemsinput"></a>
<a id="schema_TransactGetItemsInput"></a>
<a id="tocStransactgetitemsinput"></a>
<a id="tocstransactgetitemsinput"></a>

```json
{
  "TransactItems": {},
  "ReturnConsumedCapacity": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TransactItems|object|true|none|none|
|ReturnConsumedCapacity|object|false|none|none|

<h2 id="tocS_TransactWriteItemsOutput">TransactWriteItemsOutput</h2>
<!-- backwards compatibility -->
<a id="schematransactwriteitemsoutput"></a>
<a id="schema_TransactWriteItemsOutput"></a>
<a id="tocStransactwriteitemsoutput"></a>
<a id="tocstransactwriteitemsoutput"></a>

```json
{
  "ConsumedCapacity": {},
  "ItemCollectionMetrics": {
    "property1": [
      {
        "ItemCollectionKey": {
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
        "SizeEstimateRangeGB": {}
      }
    ],
    "property2": [
      {
        "ItemCollectionKey": {
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
        "SizeEstimateRangeGB": {}
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConsumedCapacity|object|false|none|none|
|ItemCollectionMetrics|object|false|none|none|

<h2 id="tocS_TransactWriteItemsInput">TransactWriteItemsInput</h2>
<!-- backwards compatibility -->
<a id="schematransactwriteitemsinput"></a>
<a id="schema_TransactWriteItemsInput"></a>
<a id="tocStransactwriteitemsinput"></a>
<a id="tocstransactwriteitemsinput"></a>

```json
{
  "TransactItems": {},
  "ReturnConsumedCapacity": "INDEXES",
  "ReturnItemCollectionMetrics": {},
  "ClientRequestToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TransactItems|object|true|none|none|
|ReturnConsumedCapacity|[ReturnConsumedCapacity](#schemareturnconsumedcapacity)|false|none|<p>Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul>|
|ReturnItemCollectionMetrics|object|false|none|none|
|ClientRequestToken|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ReturnConsumedCapacity|INDEXES|
|ReturnConsumedCapacity|TOTAL|
|ReturnConsumedCapacity|NONE|

<h2 id="tocS_UntagResourceInput">UntagResourceInput</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceinput"></a>
<a id="schema_UntagResourceInput"></a>
<a id="tocSuntagresourceinput"></a>
<a id="tocsuntagresourceinput"></a>

```json
{
  "ResourceArn": {},
  "TagKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|TagKeys|object|true|none|none|

<h2 id="tocS_UpdateContinuousBackupsOutput">UpdateContinuousBackupsOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecontinuousbackupsoutput"></a>
<a id="schema_UpdateContinuousBackupsOutput"></a>
<a id="tocSupdatecontinuousbackupsoutput"></a>
<a id="tocsupdatecontinuousbackupsoutput"></a>

```json
{
  "ContinuousBackupsDescription": {
    "ContinuousBackupsStatus": {},
    "PointInTimeRecoveryDescription": {
      "PointInTimeRecoveryStatus": {},
      "EarliestRestorableDateTime": {},
      "LatestRestorableDateTime": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContinuousBackupsDescription|object|false|none|none|

<h2 id="tocS_UpdateContinuousBackupsInput">UpdateContinuousBackupsInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecontinuousbackupsinput"></a>
<a id="schema_UpdateContinuousBackupsInput"></a>
<a id="tocSupdatecontinuousbackupsinput"></a>
<a id="tocsupdatecontinuousbackupsinput"></a>

```json
{
  "TableName": {},
  "PointInTimeRecoverySpecification": {
    "PointInTimeRecoveryEnabled": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableName|object|true|none|none|
|PointInTimeRecoverySpecification|object|true|none|none|

<h2 id="tocS_UpdateContributorInsightsOutput">UpdateContributorInsightsOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecontributorinsightsoutput"></a>
<a id="schema_UpdateContributorInsightsOutput"></a>
<a id="tocSupdatecontributorinsightsoutput"></a>
<a id="tocsupdatecontributorinsightsoutput"></a>

```json
{
  "TableName": {},
  "IndexName": {},
  "ContributorInsightsStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableName|object|false|none|none|
|IndexName|object|false|none|none|
|ContributorInsightsStatus|object|false|none|none|

<h2 id="tocS_UpdateContributorInsightsInput">UpdateContributorInsightsInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecontributorinsightsinput"></a>
<a id="schema_UpdateContributorInsightsInput"></a>
<a id="tocSupdatecontributorinsightsinput"></a>
<a id="tocsupdatecontributorinsightsinput"></a>

```json
{
  "TableName": {},
  "IndexName": {},
  "ContributorInsightsAction": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableName|object|true|none|none|
|IndexName|object|false|none|none|
|ContributorInsightsAction|object|true|none|none|

<h2 id="tocS_UpdateGlobalTableOutput">UpdateGlobalTableOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateglobaltableoutput"></a>
<a id="schema_UpdateGlobalTableOutput"></a>
<a id="tocSupdateglobaltableoutput"></a>
<a id="tocsupdateglobaltableoutput"></a>

```json
{
  "GlobalTableDescription": {
    "ReplicationGroup": {},
    "GlobalTableArn": {},
    "CreationDateTime": {},
    "GlobalTableStatus": {},
    "GlobalTableName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalTableDescription|object|false|none|none|

<h2 id="tocS_UpdateGlobalTableInput">UpdateGlobalTableInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateglobaltableinput"></a>
<a id="schema_UpdateGlobalTableInput"></a>
<a id="tocSupdateglobaltableinput"></a>
<a id="tocsupdateglobaltableinput"></a>

```json
{
  "GlobalTableName": {},
  "ReplicaUpdates": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalTableName|object|true|none|none|
|ReplicaUpdates|object|true|none|none|

<h2 id="tocS_ReplicaAlreadyExistsException">ReplicaAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemareplicaalreadyexistsexception"></a>
<a id="schema_ReplicaAlreadyExistsException"></a>
<a id="tocSreplicaalreadyexistsexception"></a>
<a id="tocsreplicaalreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_ReplicaNotFoundException">ReplicaNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemareplicanotfoundexception"></a>
<a id="schema_ReplicaNotFoundException"></a>
<a id="tocSreplicanotfoundexception"></a>
<a id="tocsreplicanotfoundexception"></a>

```json
null
```

<h2 id="tocS_UpdateGlobalTableSettingsOutput">UpdateGlobalTableSettingsOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateglobaltablesettingsoutput"></a>
<a id="schema_UpdateGlobalTableSettingsOutput"></a>
<a id="tocSupdateglobaltablesettingsoutput"></a>
<a id="tocsupdateglobaltablesettingsoutput"></a>

```json
{
  "GlobalTableName": {},
  "ReplicaSettings": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalTableName|object|false|none|none|
|ReplicaSettings|object|false|none|none|

<h2 id="tocS_UpdateGlobalTableSettingsInput">UpdateGlobalTableSettingsInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateglobaltablesettingsinput"></a>
<a id="schema_UpdateGlobalTableSettingsInput"></a>
<a id="tocSupdateglobaltablesettingsinput"></a>
<a id="tocsupdateglobaltablesettingsinput"></a>

```json
{
  "GlobalTableName": {},
  "GlobalTableBillingMode": {},
  "GlobalTableProvisionedWriteCapacityUnits": {},
  "GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate": {
    "MinimumUnits": {},
    "MaximumUnits": {},
    "AutoScalingDisabled": {},
    "AutoScalingRoleArn": {},
    "ScalingPolicyUpdate": {
      "PolicyName": {},
      "TargetTrackingScalingPolicyConfiguration": {
        "DisableScaleIn": {},
        "ScaleInCooldown": {},
        "ScaleOutCooldown": {},
        "TargetValue": {}
      }
    }
  },
  "GlobalTableGlobalSecondaryIndexSettingsUpdate": {},
  "ReplicaSettingsUpdate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalTableName|object|true|none|none|
|GlobalTableBillingMode|object|false|none|none|
|GlobalTableProvisionedWriteCapacityUnits|object|false|none|none|
|GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate|object|false|none|none|
|GlobalTableGlobalSecondaryIndexSettingsUpdate|object|false|none|none|
|ReplicaSettingsUpdate|object|false|none|none|

<h2 id="tocS_IndexNotFoundException">IndexNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaindexnotfoundexception"></a>
<a id="schema_IndexNotFoundException"></a>
<a id="tocSindexnotfoundexception"></a>
<a id="tocsindexnotfoundexception"></a>

```json
null
```

<h2 id="tocS_UpdateItemOutput">UpdateItemOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateitemoutput"></a>
<a id="schema_UpdateItemOutput"></a>
<a id="tocSupdateitemoutput"></a>
<a id="tocsupdateitemoutput"></a>

```json
{
  "Attributes": {
    "AlbumTitle": {
      "S": "Louder Than Ever"
    },
    "Artist": {
      "S": "Acme Band"
    },
    "SongTitle": {
      "S": "Happy Day"
    },
    "Year": {
      "N": "2015"
    }
  }
}
```

Represents the output of an <code>UpdateItem</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attributes|object|false|none|none|
|ConsumedCapacity|object|false|none|none|
|ItemCollectionMetrics|object|false|none|none|

<h2 id="tocS_UpdateItemInput">UpdateItemInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateiteminput"></a>
<a id="schema_UpdateItemInput"></a>
<a id="tocSupdateiteminput"></a>
<a id="tocsupdateiteminput"></a>

```json
{
  "TableName": {},
  "Key": {
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
  "AttributeUpdates": {
    "property1": {
      "Value": {
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
      "Action": {}
    },
    "property2": {
      "Value": {
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
      "Action": {}
    }
  },
  "Expected": {
    "property1": {
      "Value": {
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
      "Exists": {},
      "ComparisonOperator": {},
      "AttributeValueList": {}
    },
    "property2": {
      "Value": {
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
      "Exists": {},
      "ComparisonOperator": {},
      "AttributeValueList": {}
    }
  },
  "ConditionalOperator": {},
  "ReturnValues": {},
  "ReturnConsumedCapacity": "INDEXES",
  "ReturnItemCollectionMetrics": {},
  "UpdateExpression": {},
  "ConditionExpression": {},
  "ExpressionAttributeNames": {
    "property1": "string",
    "property2": "string"
  },
  "ExpressionAttributeValues": {
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
  "ReturnValuesOnConditionCheckFailure": {}
}
```

Represents the input of an <code>UpdateItem</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableName|object|true|none|none|
|Key|object|true|none|none|
|AttributeUpdates|object|false|none|none|
|Expected|object|false|none|none|
|ConditionalOperator|object|false|none|none|
|ReturnValues|object|false|none|none|
|ReturnConsumedCapacity|[ReturnConsumedCapacity](#schemareturnconsumedcapacity)|false|none|<p>Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul>|
|ReturnItemCollectionMetrics|object|false|none|none|
|UpdateExpression|object|false|none|none|
|ConditionExpression|object|false|none|none|
|ExpressionAttributeNames|object|false|none|none|
|ExpressionAttributeValues|object|false|none|none|
|ReturnValuesOnConditionCheckFailure|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ReturnConsumedCapacity|INDEXES|
|ReturnConsumedCapacity|TOTAL|
|ReturnConsumedCapacity|NONE|

<h2 id="tocS_UpdateTableOutput">UpdateTableOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetableoutput"></a>
<a id="schema_UpdateTableOutput"></a>
<a id="tocSupdatetableoutput"></a>
<a id="tocsupdatetableoutput"></a>

```json
{
  "TableDescription": {
    "AttributeDefinitions": [
      {
        "AttributeName": "Artist",
        "AttributeType": "S"
      },
      {
        "AttributeName": "SongTitle",
        "AttributeType": "S"
      }
    ],
    "CreationDateTime": "1421866952.062",
    "ItemCount": 0,
    "KeySchema": [
      {
        "AttributeName": "Artist",
        "KeyType": "HASH"
      },
      {
        "AttributeName": "SongTitle",
        "KeyType": "RANGE"
      }
    ],
    "ProvisionedThroughput": {
      "LastIncreaseDateTime": "1421874759.194",
      "NumberOfDecreasesToday": 1,
      "ReadCapacityUnits": 1,
      "WriteCapacityUnits": 1
    },
    "TableName": "MusicCollection",
    "TableSizeBytes": 0,
    "TableStatus": "UPDATING"
  }
}
```

Represents the output of an <code>UpdateTable</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableDescription|object|false|none|none|

<h2 id="tocS_UpdateTableInput">UpdateTableInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetableinput"></a>
<a id="schema_UpdateTableInput"></a>
<a id="tocSupdatetableinput"></a>
<a id="tocsupdatetableinput"></a>

```json
{
  "AttributeDefinitions": {},
  "TableName": {},
  "BillingMode": {},
  "ProvisionedThroughput": {
    "ReadCapacityUnits": {},
    "WriteCapacityUnits": {}
  },
  "GlobalSecondaryIndexUpdates": {},
  "StreamSpecification": {
    "StreamEnabled": {},
    "StreamViewType": {}
  },
  "SSESpecification": {
    "Enabled": {},
    "SSEType": {},
    "KMSMasterKeyId": {}
  },
  "ReplicaUpdates": {},
  "TableClass": {},
  "DeletionProtectionEnabled": {}
}
```

Represents the input of an <code>UpdateTable</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttributeDefinitions|object|false|none|none|
|TableName|object|true|none|none|
|BillingMode|object|false|none|none|
|ProvisionedThroughput|object|false|none|none|
|GlobalSecondaryIndexUpdates|object|false|none|none|
|StreamSpecification|object|false|none|none|
|SSESpecification|object|false|none|none|
|ReplicaUpdates|object|false|none|none|
|TableClass|object|false|none|none|
|DeletionProtectionEnabled|object|false|none|none|

<h2 id="tocS_UpdateTableReplicaAutoScalingOutput">UpdateTableReplicaAutoScalingOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetablereplicaautoscalingoutput"></a>
<a id="schema_UpdateTableReplicaAutoScalingOutput"></a>
<a id="tocSupdatetablereplicaautoscalingoutput"></a>
<a id="tocsupdatetablereplicaautoscalingoutput"></a>

```json
{
  "TableAutoScalingDescription": {
    "TableName": {},
    "TableStatus": {},
    "Replicas": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableAutoScalingDescription|object|false|none|none|

<h2 id="tocS_UpdateTableReplicaAutoScalingInput">UpdateTableReplicaAutoScalingInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetablereplicaautoscalinginput"></a>
<a id="schema_UpdateTableReplicaAutoScalingInput"></a>
<a id="tocSupdatetablereplicaautoscalinginput"></a>
<a id="tocsupdatetablereplicaautoscalinginput"></a>

```json
{
  "GlobalSecondaryIndexUpdates": {},
  "TableName": {},
  "ProvisionedWriteCapacityAutoScalingUpdate": {
    "MinimumUnits": {},
    "MaximumUnits": {},
    "AutoScalingDisabled": {},
    "AutoScalingRoleArn": {},
    "ScalingPolicyUpdate": {
      "PolicyName": {},
      "TargetTrackingScalingPolicyConfiguration": {
        "DisableScaleIn": {},
        "ScaleInCooldown": {},
        "ScaleOutCooldown": {},
        "TargetValue": {}
      }
    }
  },
  "ReplicaUpdates": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalSecondaryIndexUpdates|object|false|none|none|
|TableName|object|true|none|none|
|ProvisionedWriteCapacityAutoScalingUpdate|[AutoScalingSettingsUpdate](#schemaautoscalingsettingsupdate)|false|none|Represents the auto scaling settings to be modified for a global table or global secondary index.|
|ReplicaUpdates|object|false|none|none|

<h2 id="tocS_UpdateTimeToLiveOutput">UpdateTimeToLiveOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetimetoliveoutput"></a>
<a id="schema_UpdateTimeToLiveOutput"></a>
<a id="tocSupdatetimetoliveoutput"></a>
<a id="tocsupdatetimetoliveoutput"></a>

```json
{
  "TimeToLiveSpecification": {
    "Enabled": {},
    "AttributeName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TimeToLiveSpecification|object|false|none|none|

<h2 id="tocS_UpdateTimeToLiveInput">UpdateTimeToLiveInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetimetoliveinput"></a>
<a id="schema_UpdateTimeToLiveInput"></a>
<a id="tocSupdatetimetoliveinput"></a>
<a id="tocsupdatetimetoliveinput"></a>

```json
{
  "TableName": {},
  "TimeToLiveSpecification": {
    "Enabled": {},
    "AttributeName": {}
  }
}
```

Represents the input of an <code>UpdateTimeToLive</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableName|object|true|none|none|
|TimeToLiveSpecification|object|true|none|none|

<h2 id="tocS_ArchivalReason">ArchivalReason</h2>
<!-- backwards compatibility -->
<a id="schemaarchivalreason"></a>
<a id="schema_ArchivalReason"></a>
<a id="tocSarchivalreason"></a>
<a id="tocsarchivalreason"></a>

```json
"string"
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

<h2 id="tocS_BackupArn">BackupArn</h2>
<!-- backwards compatibility -->
<a id="schemabackuparn"></a>
<a id="schema_BackupArn"></a>
<a id="tocSbackuparn"></a>
<a id="tocsbackuparn"></a>

```json
"stringstringstringstringstringstrings"
```

<h2 id="tocS_ArchivalSummary">ArchivalSummary</h2>
<!-- backwards compatibility -->
<a id="schemaarchivalsummary"></a>
<a id="schema_ArchivalSummary"></a>
<a id="tocSarchivalsummary"></a>
<a id="tocsarchivalsummary"></a>

```json
{
  "ArchivalDateTime": {},
  "ArchivalReason": {},
  "ArchivalBackupArn": {}
}
```

Contains details of a table archival operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ArchivalDateTime|object|false|none|none|
|ArchivalReason|object|false|none|none|
|ArchivalBackupArn|object|false|none|none|

<h2 id="tocS_AttributeAction">AttributeAction</h2>
<!-- backwards compatibility -->
<a id="schemaattributeaction"></a>
<a id="schema_AttributeAction"></a>
<a id="tocSattributeaction"></a>
<a id="tocsattributeaction"></a>

```json
"ADD"
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

<h2 id="tocS_ScalarAttributeType">ScalarAttributeType</h2>
<!-- backwards compatibility -->
<a id="schemascalarattributetype"></a>
<a id="schema_ScalarAttributeType"></a>
<a id="tocSscalarattributetype"></a>
<a id="tocsscalarattributetype"></a>

```json
"S"
```

<h2 id="tocS_AttributeDefinition">AttributeDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaattributedefinition"></a>
<a id="schema_AttributeDefinition"></a>
<a id="tocSattributedefinition"></a>
<a id="tocsattributedefinition"></a>

```json
{
  "AttributeName": {},
  "AttributeType": {}
}
```

Represents an attribute for describing the key schema for the table and indexes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttributeName|object|true|none|none|
|AttributeType|object|true|none|none|

<h2 id="tocS_AttributeDefinitions">AttributeDefinitions</h2>
<!-- backwards compatibility -->
<a id="schemaattributedefinitions"></a>
<a id="schema_AttributeDefinitions"></a>
<a id="tocSattributedefinitions"></a>
<a id="tocsattributedefinitions"></a>

```json
[
  {
    "AttributeName": {},
    "AttributeType": {}
  }
]
```

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

<h2 id="tocS_AttributeNameList">AttributeNameList</h2>
<!-- backwards compatibility -->
<a id="schemaattributenamelist"></a>
<a id="schema_AttributeNameList"></a>
<a id="tocSattributenamelist"></a>
<a id="tocsattributenamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AttributeValueUpdate">AttributeValueUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaattributevalueupdate"></a>
<a id="schema_AttributeValueUpdate"></a>
<a id="tocSattributevalueupdate"></a>
<a id="tocsattributevalueupdate"></a>

```json
{
  "Value": {
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
  "Action": {}
}
```

<p>For the <code>UpdateItem</code> operation, represents the attributes to be modified, the action to perform on each, and the new value for each.</p> <note> <p>You cannot use <code>UpdateItem</code> to update any primary key attributes. Instead, you will need to delete the item, and then use <code>PutItem</code> to create a new item with new attributes.</p> </note> <p>Attribute values cannot be null; string and binary type attributes must have lengths greater than zero; and set type attributes must not be empty. Requests with empty values will be rejected with a <code>ValidationException</code> exception.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Value|object|false|none|none|
|Action|object|false|none|none|

<h2 id="tocS_AttributeUpdates">AttributeUpdates</h2>
<!-- backwards compatibility -->
<a id="schemaattributeupdates"></a>
<a id="schema_AttributeUpdates"></a>
<a id="tocSattributeupdates"></a>
<a id="tocsattributeupdates"></a>

```json
{
  "property1": {
    "Value": {
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
    "Action": {}
  },
  "property2": {
    "Value": {
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
    "Action": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[AttributeValueUpdate](#schemaattributevalueupdate)|false|none|<p>For the <code>UpdateItem</code> operation, represents the attributes to be modified, the action to perform on each, and the new value for each.</p> <note> <p>You cannot use <code>UpdateItem</code> to update any primary key attributes. Instead, you will need to delete the item, and then use <code>PutItem</code> to create a new item with new attributes.</p> </note> <p>Attribute values cannot be null; string and binary type attributes must have lengths greater than zero; and set type attributes must not be empty. Requests with empty values will be rejected with a <code>ValidationException</code> exception.</p>|

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

<h2 id="tocS_AttributeValueList">AttributeValueList</h2>
<!-- backwards compatibility -->
<a id="schemaattributevaluelist"></a>
<a id="schema_AttributeValueList"></a>
<a id="tocSattributevaluelist"></a>
<a id="tocsattributevaluelist"></a>

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

<h2 id="tocS_AutoScalingPolicyName">AutoScalingPolicyName</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalingpolicyname"></a>
<a id="schema_AutoScalingPolicyName"></a>
<a id="tocSautoscalingpolicyname"></a>
<a id="tocsautoscalingpolicyname"></a>

```json
"string"
```

<h2 id="tocS_AutoScalingTargetTrackingScalingPolicyConfigurationDescription">AutoScalingTargetTrackingScalingPolicyConfigurationDescription</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalingtargettrackingscalingpolicyconfigurationdescription"></a>
<a id="schema_AutoScalingTargetTrackingScalingPolicyConfigurationDescription"></a>
<a id="tocSautoscalingtargettrackingscalingpolicyconfigurationdescription"></a>
<a id="tocsautoscalingtargettrackingscalingpolicyconfigurationdescription"></a>

```json
{
  "DisableScaleIn": {},
  "ScaleInCooldown": {},
  "ScaleOutCooldown": {},
  "TargetValue": {}
}
```

Represents the properties of a target tracking scaling policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DisableScaleIn|object|false|none|none|
|ScaleInCooldown|object|false|none|none|
|ScaleOutCooldown|object|false|none|none|
|TargetValue|object|true|none|none|

<h2 id="tocS_AutoScalingPolicyDescription">AutoScalingPolicyDescription</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalingpolicydescription"></a>
<a id="schema_AutoScalingPolicyDescription"></a>
<a id="tocSautoscalingpolicydescription"></a>
<a id="tocsautoscalingpolicydescription"></a>

```json
{
  "PolicyName": {},
  "TargetTrackingScalingPolicyConfiguration": {
    "DisableScaleIn": {},
    "ScaleInCooldown": {},
    "ScaleOutCooldown": {},
    "TargetValue": {}
  }
}
```

Represents the properties of the scaling policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyName|object|false|none|none|
|TargetTrackingScalingPolicyConfiguration|object|false|none|none|

<h2 id="tocS_AutoScalingPolicyDescriptionList">AutoScalingPolicyDescriptionList</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalingpolicydescriptionlist"></a>
<a id="schema_AutoScalingPolicyDescriptionList"></a>
<a id="tocSautoscalingpolicydescriptionlist"></a>
<a id="tocsautoscalingpolicydescriptionlist"></a>

```json
[
  {
    "PolicyName": {},
    "TargetTrackingScalingPolicyConfiguration": {
      "DisableScaleIn": {},
      "ScaleInCooldown": {},
      "ScaleOutCooldown": {},
      "TargetValue": {}
    }
  }
]
```

<h2 id="tocS_AutoScalingTargetTrackingScalingPolicyConfigurationUpdate">AutoScalingTargetTrackingScalingPolicyConfigurationUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalingtargettrackingscalingpolicyconfigurationupdate"></a>
<a id="schema_AutoScalingTargetTrackingScalingPolicyConfigurationUpdate"></a>
<a id="tocSautoscalingtargettrackingscalingpolicyconfigurationupdate"></a>
<a id="tocsautoscalingtargettrackingscalingpolicyconfigurationupdate"></a>

```json
{
  "DisableScaleIn": {},
  "ScaleInCooldown": {},
  "ScaleOutCooldown": {},
  "TargetValue": {}
}
```

Represents the settings of a target tracking scaling policy that will be modified.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DisableScaleIn|object|false|none|none|
|ScaleInCooldown|object|false|none|none|
|ScaleOutCooldown|object|false|none|none|
|TargetValue|object|true|none|none|

<h2 id="tocS_AutoScalingPolicyUpdate">AutoScalingPolicyUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalingpolicyupdate"></a>
<a id="schema_AutoScalingPolicyUpdate"></a>
<a id="tocSautoscalingpolicyupdate"></a>
<a id="tocsautoscalingpolicyupdate"></a>

```json
{
  "PolicyName": {},
  "TargetTrackingScalingPolicyConfiguration": {
    "DisableScaleIn": {},
    "ScaleInCooldown": {},
    "ScaleOutCooldown": {},
    "TargetValue": {}
  }
}
```

Represents the auto scaling policy to be modified.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyName|object|false|none|none|
|TargetTrackingScalingPolicyConfiguration|object|true|none|none|

<h2 id="tocS_AutoScalingRoleArn">AutoScalingRoleArn</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalingrolearn"></a>
<a id="schema_AutoScalingRoleArn"></a>
<a id="tocSautoscalingrolearn"></a>
<a id="tocsautoscalingrolearn"></a>

```json
"string"
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

<h2 id="tocS_BooleanObject">BooleanObject</h2>
<!-- backwards compatibility -->
<a id="schemabooleanobject"></a>
<a id="schema_BooleanObject"></a>
<a id="tocSbooleanobject"></a>
<a id="tocsbooleanobject"></a>

```json
true
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

<h2 id="tocS_AutoScalingSettingsDescription">AutoScalingSettingsDescription</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalingsettingsdescription"></a>
<a id="schema_AutoScalingSettingsDescription"></a>
<a id="tocSautoscalingsettingsdescription"></a>
<a id="tocsautoscalingsettingsdescription"></a>

```json
{
  "MinimumUnits": {},
  "MaximumUnits": {},
  "AutoScalingDisabled": {},
  "AutoScalingRoleArn": {},
  "ScalingPolicies": {}
}
```

Represents the auto scaling settings for a global table or global secondary index.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MinimumUnits|object|false|none|none|
|MaximumUnits|object|false|none|none|
|AutoScalingDisabled|object|false|none|none|
|AutoScalingRoleArn|object|false|none|none|
|ScalingPolicies|object|false|none|none|

<h2 id="tocS_AutoScalingSettingsUpdate">AutoScalingSettingsUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalingsettingsupdate"></a>
<a id="schema_AutoScalingSettingsUpdate"></a>
<a id="tocSautoscalingsettingsupdate"></a>
<a id="tocsautoscalingsettingsupdate"></a>

```json
{
  "MinimumUnits": {},
  "MaximumUnits": {},
  "AutoScalingDisabled": {},
  "AutoScalingRoleArn": {},
  "ScalingPolicyUpdate": {
    "PolicyName": {},
    "TargetTrackingScalingPolicyConfiguration": {
      "DisableScaleIn": {},
      "ScaleInCooldown": {},
      "ScaleOutCooldown": {},
      "TargetValue": {}
    }
  }
}
```

Represents the auto scaling settings to be modified for a global table or global secondary index.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MinimumUnits|object|false|none|none|
|MaximumUnits|object|false|none|none|
|AutoScalingDisabled|object|false|none|none|
|AutoScalingRoleArn|object|false|none|none|
|ScalingPolicyUpdate|object|false|none|none|

<h2 id="tocS_IntegerObject">IntegerObject</h2>
<!-- backwards compatibility -->
<a id="schemaintegerobject"></a>
<a id="schema_IntegerObject"></a>
<a id="tocSintegerobject"></a>
<a id="tocsintegerobject"></a>

```json
0
```

<h2 id="tocS_DoubleObject">DoubleObject</h2>
<!-- backwards compatibility -->
<a id="schemadoubleobject"></a>
<a id="schema_DoubleObject"></a>
<a id="tocSdoubleobject"></a>
<a id="tocsdoubleobject"></a>

```json
0
```

<h2 id="tocS_Backfilling">Backfilling</h2>
<!-- backwards compatibility -->
<a id="schemabackfilling"></a>
<a id="schema_Backfilling"></a>
<a id="tocSbackfilling"></a>
<a id="tocsbackfilling"></a>

```json
true
```

<h2 id="tocS_BackupCreationDateTime">BackupCreationDateTime</h2>
<!-- backwards compatibility -->
<a id="schemabackupcreationdatetime"></a>
<a id="schema_BackupCreationDateTime"></a>
<a id="tocSbackupcreationdatetime"></a>
<a id="tocsbackupcreationdatetime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_BackupDetails">BackupDetails</h2>
<!-- backwards compatibility -->
<a id="schemabackupdetails"></a>
<a id="schema_BackupDetails"></a>
<a id="tocSbackupdetails"></a>
<a id="tocsbackupdetails"></a>

```json
{
  "BackupArn": {},
  "BackupName": {},
  "BackupSizeBytes": {},
  "BackupStatus": {},
  "BackupType": {},
  "BackupCreationDateTime": {},
  "BackupExpiryDateTime": {}
}
```

Contains the details of the backup created for the table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupArn|object|true|none|none|
|BackupName|object|true|none|none|
|BackupSizeBytes|object|false|none|none|
|BackupStatus|object|true|none|none|
|BackupType|object|true|none|none|
|BackupCreationDateTime|object|true|none|none|
|BackupExpiryDateTime|object|false|none|none|

<h2 id="tocS_SourceTableDetails">SourceTableDetails</h2>
<!-- backwards compatibility -->
<a id="schemasourcetabledetails"></a>
<a id="schema_SourceTableDetails"></a>
<a id="tocSsourcetabledetails"></a>
<a id="tocssourcetabledetails"></a>

```json
{
  "TableName": {},
  "TableId": {},
  "TableArn": {},
  "TableSizeBytes": {},
  "KeySchema": {},
  "TableCreationDateTime": {},
  "ProvisionedThroughput": {
    "ReadCapacityUnits": {},
    "WriteCapacityUnits": {}
  },
  "ItemCount": {},
  "BillingMode": {}
}
```

Contains the details of the table when the backup was created.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableName|object|true|none|none|
|TableId|object|true|none|none|
|TableArn|object|false|none|none|
|TableSizeBytes|object|false|none|none|
|KeySchema|object|true|none|none|
|TableCreationDateTime|object|true|none|none|
|ProvisionedThroughput|object|true|none|none|
|ItemCount|object|false|none|none|
|BillingMode|object|false|none|none|

<h2 id="tocS_SourceTableFeatureDetails">SourceTableFeatureDetails</h2>
<!-- backwards compatibility -->
<a id="schemasourcetablefeaturedetails"></a>
<a id="schema_SourceTableFeatureDetails"></a>
<a id="tocSsourcetablefeaturedetails"></a>
<a id="tocssourcetablefeaturedetails"></a>

```json
{
  "LocalSecondaryIndexes": {},
  "GlobalSecondaryIndexes": {},
  "StreamDescription": {
    "StreamEnabled": {},
    "StreamViewType": {}
  },
  "TimeToLiveDescription": {
    "TimeToLiveStatus": {},
    "AttributeName": {}
  },
  "SSEDescription": {
    "Status": {},
    "SSEType": {},
    "KMSMasterKeyArn": {},
    "InaccessibleEncryptionDateTime": {}
  }
}
```

Contains the details of the features enabled on the table when the backup was created. For example, LSIs, GSIs, streams, TTL.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LocalSecondaryIndexes|object|false|none|none|
|GlobalSecondaryIndexes|object|false|none|none|
|StreamDescription|object|false|none|none|
|TimeToLiveDescription|object|false|none|none|
|SSEDescription|object|false|none|none|

<h2 id="tocS_BackupDescription">BackupDescription</h2>
<!-- backwards compatibility -->
<a id="schemabackupdescription"></a>
<a id="schema_BackupDescription"></a>
<a id="tocSbackupdescription"></a>
<a id="tocsbackupdescription"></a>

```json
{
  "BackupDetails": {
    "BackupArn": {},
    "BackupName": {},
    "BackupSizeBytes": {},
    "BackupStatus": {},
    "BackupType": {},
    "BackupCreationDateTime": {},
    "BackupExpiryDateTime": {}
  },
  "SourceTableDetails": {
    "TableName": {},
    "TableId": {},
    "TableArn": {},
    "TableSizeBytes": {},
    "KeySchema": {},
    "TableCreationDateTime": {},
    "ProvisionedThroughput": {
      "ReadCapacityUnits": {},
      "WriteCapacityUnits": {}
    },
    "ItemCount": {},
    "BillingMode": {}
  },
  "SourceTableFeatureDetails": {
    "LocalSecondaryIndexes": {},
    "GlobalSecondaryIndexes": {},
    "StreamDescription": {
      "StreamEnabled": {},
      "StreamViewType": {}
    },
    "TimeToLiveDescription": {
      "TimeToLiveStatus": {},
      "AttributeName": {}
    },
    "SSEDescription": {
      "Status": {},
      "SSEType": {},
      "KMSMasterKeyArn": {},
      "InaccessibleEncryptionDateTime": {}
    }
  }
}
```

Contains the description of the backup created for the table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackupDetails|object|false|none|none|
|SourceTableDetails|object|false|none|none|
|SourceTableFeatureDetails|object|false|none|none|

<h2 id="tocS_BackupName">BackupName</h2>
<!-- backwards compatibility -->
<a id="schemabackupname"></a>
<a id="schema_BackupName"></a>
<a id="tocSbackupname"></a>
<a id="tocsbackupname"></a>

```json
"string"
```

<h2 id="tocS_BackupSizeBytes">BackupSizeBytes</h2>
<!-- backwards compatibility -->
<a id="schemabackupsizebytes"></a>
<a id="schema_BackupSizeBytes"></a>
<a id="tocSbackupsizebytes"></a>
<a id="tocsbackupsizebytes"></a>

```json
0
```

<h2 id="tocS_BackupStatus">BackupStatus</h2>
<!-- backwards compatibility -->
<a id="schemabackupstatus"></a>
<a id="schema_BackupStatus"></a>
<a id="tocSbackupstatus"></a>
<a id="tocsbackupstatus"></a>

```json
"CREATING"
```

<h2 id="tocS_BackupType">BackupType</h2>
<!-- backwards compatibility -->
<a id="schemabackuptype"></a>
<a id="schema_BackupType"></a>
<a id="tocSbackuptype"></a>
<a id="tocsbackuptype"></a>

```json
"USER"
```

<h2 id="tocS_BackupSummary">BackupSummary</h2>
<!-- backwards compatibility -->
<a id="schemabackupsummary"></a>
<a id="schema_BackupSummary"></a>
<a id="tocSbackupsummary"></a>
<a id="tocsbackupsummary"></a>

```json
{
  "TableName": {},
  "TableId": {},
  "TableArn": {},
  "BackupArn": {},
  "BackupName": {},
  "BackupCreationDateTime": {},
  "BackupExpiryDateTime": {},
  "BackupStatus": {},
  "BackupType": {},
  "BackupSizeBytes": {}
}
```

Contains details for the backup.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableName|object|false|none|none|
|TableId|object|false|none|none|
|TableArn|object|false|none|none|
|BackupArn|object|false|none|none|
|BackupName|object|false|none|none|
|BackupCreationDateTime|object|false|none|none|
|BackupExpiryDateTime|object|false|none|none|
|BackupStatus|object|false|none|none|
|BackupType|object|false|none|none|
|BackupSizeBytes|object|false|none|none|

<h2 id="tocS_BackupSummaries">BackupSummaries</h2>
<!-- backwards compatibility -->
<a id="schemabackupsummaries"></a>
<a id="schema_BackupSummaries"></a>
<a id="tocSbackupsummaries"></a>
<a id="tocsbackupsummaries"></a>

```json
[
  {
    "TableName": {},
    "TableId": {},
    "TableArn": {},
    "BackupArn": {},
    "BackupName": {},
    "BackupCreationDateTime": {},
    "BackupExpiryDateTime": {},
    "BackupStatus": {},
    "BackupType": {},
    "BackupSizeBytes": {}
  }
]
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

<h2 id="tocS_TableId">TableId</h2>
<!-- backwards compatibility -->
<a id="schematableid"></a>
<a id="schema_TableId"></a>
<a id="tocStableid"></a>
<a id="tocstableid"></a>

```json
"string"
```

<h2 id="tocS_TableArn">TableArn</h2>
<!-- backwards compatibility -->
<a id="schematablearn"></a>
<a id="schema_TableArn"></a>
<a id="tocStablearn"></a>
<a id="tocstablearn"></a>

```json
"string"
```

<h2 id="tocS_BackupTypeFilter">BackupTypeFilter</h2>
<!-- backwards compatibility -->
<a id="schemabackuptypefilter"></a>
<a id="schema_BackupTypeFilter"></a>
<a id="tocSbackuptypefilter"></a>
<a id="tocsbackuptypefilter"></a>

```json
"USER"
```

<h2 id="tocS_BackupsInputLimit">BackupsInputLimit</h2>
<!-- backwards compatibility -->
<a id="schemabackupsinputlimit"></a>
<a id="schema_BackupsInputLimit"></a>
<a id="tocSbackupsinputlimit"></a>
<a id="tocsbackupsinputlimit"></a>

```json
1
```

<h2 id="tocS_PartiQLBatchRequest">PartiQLBatchRequest</h2>
<!-- backwards compatibility -->
<a id="schemapartiqlbatchrequest"></a>
<a id="schema_PartiQLBatchRequest"></a>
<a id="tocSpartiqlbatchrequest"></a>
<a id="tocspartiqlbatchrequest"></a>

```json
[
  {
    "Statement": {},
    "Parameters": {},
    "ConsistentRead": {},
    "ReturnValuesOnConditionCheckFailure": {}
  }
]
```

<h2 id="tocS_ReturnConsumedCapacity">ReturnConsumedCapacity</h2>
<!-- backwards compatibility -->
<a id="schemareturnconsumedcapacity"></a>
<a id="schema_ReturnConsumedCapacity"></a>
<a id="tocSreturnconsumedcapacity"></a>
<a id="tocsreturnconsumedcapacity"></a>

```json
"INDEXES"
```

<p>Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul>

<h2 id="tocS_PartiQLBatchResponse">PartiQLBatchResponse</h2>
<!-- backwards compatibility -->
<a id="schemapartiqlbatchresponse"></a>
<a id="schema_PartiQLBatchResponse"></a>
<a id="tocSpartiqlbatchresponse"></a>
<a id="tocspartiqlbatchresponse"></a>

```json
[
  {
    "Error": {
      "Code": {},
      "Message": {},
      "Item": {
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
    },
    "TableName": {},
    "Item": {
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
  }
]
```

<h2 id="tocS_ConsumedCapacityMultiple">ConsumedCapacityMultiple</h2>
<!-- backwards compatibility -->
<a id="schemaconsumedcapacitymultiple"></a>
<a id="schema_ConsumedCapacityMultiple"></a>
<a id="tocSconsumedcapacitymultiple"></a>
<a id="tocsconsumedcapacitymultiple"></a>

```json
[
  {
    "TableName": {},
    "CapacityUnits": {},
    "ReadCapacityUnits": {},
    "WriteCapacityUnits": {},
    "Table": {
      "ReadCapacityUnits": {},
      "WriteCapacityUnits": {},
      "CapacityUnits": {}
    },
    "LocalSecondaryIndexes": {
      "property1": {
        "ReadCapacityUnits": {},
        "WriteCapacityUnits": {},
        "CapacityUnits": {}
      },
      "property2": {
        "ReadCapacityUnits": {},
        "WriteCapacityUnits": {},
        "CapacityUnits": {}
      }
    },
    "GlobalSecondaryIndexes": {
      "property1": {
        "ReadCapacityUnits": {},
        "WriteCapacityUnits": {},
        "CapacityUnits": {}
      },
      "property2": {
        "ReadCapacityUnits": {},
        "WriteCapacityUnits": {},
        "CapacityUnits": {}
      }
    }
  }
]
```

<h2 id="tocS_BatchGetRequestMap">BatchGetRequestMap</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetrequestmap"></a>
<a id="schema_BatchGetRequestMap"></a>
<a id="tocSbatchgetrequestmap"></a>
<a id="tocsbatchgetrequestmap"></a>

```json
{
  "property1": {
    "Keys": {},
    "AttributesToGet": {},
    "ConsistentRead": {},
    "ProjectionExpression": {},
    "ExpressionAttributeNames": {
      "property1": "string",
      "property2": "string"
    }
  },
  "property2": {
    "Keys": {},
    "AttributesToGet": {},
    "ConsistentRead": {},
    "ProjectionExpression": {},
    "ExpressionAttributeNames": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[KeysAndAttributes](#schemakeysandattributes)|false|none|<p>Represents a set of primary keys and, for each key, the attributes to retrieve from the table.</p> <p>For each primary key, you must provide <i>all</i> of the key attributes. For example, with a simple primary key, you only need to provide the partition key. For a composite primary key, you must provide <i>both</i> the partition key and the sort key.</p>|

<h2 id="tocS_BatchGetResponseMap">BatchGetResponseMap</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetresponsemap"></a>
<a id="schema_BatchGetResponseMap"></a>
<a id="tocSbatchgetresponsemap"></a>
<a id="tocsbatchgetresponsemap"></a>

```json
{
  "property1": [
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
  ],
  "property2": [
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
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ItemList](#schemaitemlist)|false|none|none|

<h2 id="tocS_KeysAndAttributes">KeysAndAttributes</h2>
<!-- backwards compatibility -->
<a id="schemakeysandattributes"></a>
<a id="schema_KeysAndAttributes"></a>
<a id="tocSkeysandattributes"></a>
<a id="tocskeysandattributes"></a>

```json
{
  "Keys": {},
  "AttributesToGet": {},
  "ConsistentRead": {},
  "ProjectionExpression": {},
  "ExpressionAttributeNames": {
    "property1": "string",
    "property2": "string"
  }
}
```

<p>Represents a set of primary keys and, for each key, the attributes to retrieve from the table.</p> <p>For each primary key, you must provide <i>all</i> of the key attributes. For example, with a simple primary key, you only need to provide the partition key. For a composite primary key, you must provide <i>both</i> the partition key and the sort key.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Keys|object|true|none|none|
|AttributesToGet|object|false|none|none|
|ConsistentRead|object|false|none|none|
|ProjectionExpression|object|false|none|none|
|ExpressionAttributeNames|object|false|none|none|

<h2 id="tocS_ItemList">ItemList</h2>
<!-- backwards compatibility -->
<a id="schemaitemlist"></a>
<a id="schema_ItemList"></a>
<a id="tocSitemlist"></a>
<a id="tocsitemlist"></a>

```json
[
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
]
```

<h2 id="tocS_BatchStatementErrorCodeEnum">BatchStatementErrorCodeEnum</h2>
<!-- backwards compatibility -->
<a id="schemabatchstatementerrorcodeenum"></a>
<a id="schema_BatchStatementErrorCodeEnum"></a>
<a id="tocSbatchstatementerrorcodeenum"></a>
<a id="tocsbatchstatementerrorcodeenum"></a>

```json
"ConditionalCheckFailed"
```

<h2 id="tocS_BatchStatementError">BatchStatementError</h2>
<!-- backwards compatibility -->
<a id="schemabatchstatementerror"></a>
<a id="schema_BatchStatementError"></a>
<a id="tocSbatchstatementerror"></a>
<a id="tocsbatchstatementerror"></a>

```json
{
  "Code": {},
  "Message": {},
  "Item": {
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
}
```

 An error associated with a statement in a PartiQL batch that was run.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|object|false|none|none|
|Message|object|false|none|none|
|Item|object|false|none|none|

<h2 id="tocS_PartiQLStatement">PartiQLStatement</h2>
<!-- backwards compatibility -->
<a id="schemapartiqlstatement"></a>
<a id="schema_PartiQLStatement"></a>
<a id="tocSpartiqlstatement"></a>
<a id="tocspartiqlstatement"></a>

```json
"string"
```

<h2 id="tocS_PreparedStatementParameters">PreparedStatementParameters</h2>
<!-- backwards compatibility -->
<a id="schemapreparedstatementparameters"></a>
<a id="schema_PreparedStatementParameters"></a>
<a id="tocSpreparedstatementparameters"></a>
<a id="tocspreparedstatementparameters"></a>

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

<h2 id="tocS_ConsistentRead">ConsistentRead</h2>
<!-- backwards compatibility -->
<a id="schemaconsistentread"></a>
<a id="schema_ConsistentRead"></a>
<a id="tocSconsistentread"></a>
<a id="tocsconsistentread"></a>

```json
true
```

<h2 id="tocS_ReturnValuesOnConditionCheckFailure">ReturnValuesOnConditionCheckFailure</h2>
<!-- backwards compatibility -->
<a id="schemareturnvaluesonconditioncheckfailure"></a>
<a id="schema_ReturnValuesOnConditionCheckFailure"></a>
<a id="tocSreturnvaluesonconditioncheckfailure"></a>
<a id="tocsreturnvaluesonconditioncheckfailure"></a>

```json
"ALL_OLD"
```

<h2 id="tocS_BatchStatementRequest">BatchStatementRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchstatementrequest"></a>
<a id="schema_BatchStatementRequest"></a>
<a id="tocSbatchstatementrequest"></a>
<a id="tocsbatchstatementrequest"></a>

```json
{
  "Statement": {},
  "Parameters": {},
  "ConsistentRead": {},
  "ReturnValuesOnConditionCheckFailure": {}
}
```

 A PartiQL batch statement request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Statement|object|true|none|none|
|Parameters|object|false|none|none|
|ConsistentRead|object|false|none|none|
|ReturnValuesOnConditionCheckFailure|object|false|none|none|

<h2 id="tocS_BatchStatementResponse">BatchStatementResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchstatementresponse"></a>
<a id="schema_BatchStatementResponse"></a>
<a id="tocSbatchstatementresponse"></a>
<a id="tocsbatchstatementresponse"></a>

```json
{
  "Error": {
    "Code": {},
    "Message": {},
    "Item": {
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
  },
  "TableName": {},
  "Item": {
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
}
```

 A PartiQL batch statement response..

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Error|object|false|none|none|
|TableName|object|false|none|none|
|Item|object|false|none|none|

<h2 id="tocS_BatchWriteItemRequestMap">BatchWriteItemRequestMap</h2>
<!-- backwards compatibility -->
<a id="schemabatchwriteitemrequestmap"></a>
<a id="schema_BatchWriteItemRequestMap"></a>
<a id="tocSbatchwriteitemrequestmap"></a>
<a id="tocsbatchwriteitemrequestmap"></a>

```json
{
  "property1": [
    {
      "PutRequest": {
        "Item": {
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
      },
      "DeleteRequest": {
        "Key": {
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
      }
    }
  ],
  "property2": [
    {
      "PutRequest": {
        "Item": {
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
      },
      "DeleteRequest": {
        "Key": {
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
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[WriteRequests](#schemawriterequests)|false|none|none|

<h2 id="tocS_ReturnItemCollectionMetrics">ReturnItemCollectionMetrics</h2>
<!-- backwards compatibility -->
<a id="schemareturnitemcollectionmetrics"></a>
<a id="schema_ReturnItemCollectionMetrics"></a>
<a id="tocSreturnitemcollectionmetrics"></a>
<a id="tocsreturnitemcollectionmetrics"></a>

```json
"SIZE"
```

<h2 id="tocS_ItemCollectionMetricsPerTable">ItemCollectionMetricsPerTable</h2>
<!-- backwards compatibility -->
<a id="schemaitemcollectionmetricspertable"></a>
<a id="schema_ItemCollectionMetricsPerTable"></a>
<a id="tocSitemcollectionmetricspertable"></a>
<a id="tocsitemcollectionmetricspertable"></a>

```json
{
  "property1": [
    {
      "ItemCollectionKey": {
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
      "SizeEstimateRangeGB": {}
    }
  ],
  "property2": [
    {
      "ItemCollectionKey": {
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
      "SizeEstimateRangeGB": {}
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ItemCollectionMetricsMultiple](#schemaitemcollectionmetricsmultiple)|false|none|none|

<h2 id="tocS_WriteRequests">WriteRequests</h2>
<!-- backwards compatibility -->
<a id="schemawriterequests"></a>
<a id="schema_WriteRequests"></a>
<a id="tocSwriterequests"></a>
<a id="tocswriterequests"></a>

```json
[
  {
    "PutRequest": {
      "Item": {
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
    },
    "DeleteRequest": {
      "Key": {
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
    }
  }
]
```

<h2 id="tocS_BilledSizeBytes">BilledSizeBytes</h2>
<!-- backwards compatibility -->
<a id="schemabilledsizebytes"></a>
<a id="schema_BilledSizeBytes"></a>
<a id="tocSbilledsizebytes"></a>
<a id="tocsbilledsizebytes"></a>

```json
0
```

<h2 id="tocS_BillingMode">BillingMode</h2>
<!-- backwards compatibility -->
<a id="schemabillingmode"></a>
<a id="schema_BillingMode"></a>
<a id="tocSbillingmode"></a>
<a id="tocsbillingmode"></a>

```json
"PROVISIONED"
```

<h2 id="tocS_BillingModeSummary">BillingModeSummary</h2>
<!-- backwards compatibility -->
<a id="schemabillingmodesummary"></a>
<a id="schema_BillingModeSummary"></a>
<a id="tocSbillingmodesummary"></a>
<a id="tocsbillingmodesummary"></a>

```json
{
  "BillingMode": {},
  "LastUpdateToPayPerRequestDateTime": {}
}
```

<p>Contains the details for the read/write capacity mode. This page talks about <code>PROVISIONED</code> and <code>PAY_PER_REQUEST</code> billing modes. For more information about these modes, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html">Read/write capacity mode</a>.</p> <note> <p>You may need to switch to on-demand mode at least once in order to return a <code>BillingModeSummary</code> response.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BillingMode|object|false|none|none|
|LastUpdateToPayPerRequestDateTime|object|false|none|none|

<h2 id="tocS_ConsumedCapacityUnits">ConsumedCapacityUnits</h2>
<!-- backwards compatibility -->
<a id="schemaconsumedcapacityunits"></a>
<a id="schema_ConsumedCapacityUnits"></a>
<a id="tocSconsumedcapacityunits"></a>
<a id="tocsconsumedcapacityunits"></a>

```json
0
```

<h2 id="tocS_Capacity">Capacity</h2>
<!-- backwards compatibility -->
<a id="schemacapacity"></a>
<a id="schema_Capacity"></a>
<a id="tocScapacity"></a>
<a id="tocscapacity"></a>

```json
{
  "ReadCapacityUnits": {},
  "WriteCapacityUnits": {},
  "CapacityUnits": {}
}
```

Represents the amount of provisioned throughput capacity consumed on a table or an index.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReadCapacityUnits|object|false|none|none|
|WriteCapacityUnits|object|false|none|none|
|CapacityUnits|object|false|none|none|

<h2 id="tocS_ClientRequestToken">ClientRequestToken</h2>
<!-- backwards compatibility -->
<a id="schemaclientrequesttoken"></a>
<a id="schema_ClientRequestToken"></a>
<a id="tocSclientrequesttoken"></a>
<a id="tocsclientrequesttoken"></a>

```json
"string"
```

<h2 id="tocS_ClientToken">ClientToken</h2>
<!-- backwards compatibility -->
<a id="schemaclienttoken"></a>
<a id="schema_ClientToken"></a>
<a id="tocSclienttoken"></a>
<a id="tocsclienttoken"></a>

```json
"string"
```

<h2 id="tocS_CloudWatchLogGroupArn">CloudWatchLogGroupArn</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchloggrouparn"></a>
<a id="schema_CloudWatchLogGroupArn"></a>
<a id="tocScloudwatchloggrouparn"></a>
<a id="tocscloudwatchloggrouparn"></a>

```json
"string"
```

<h2 id="tocS_ComparisonOperator">ComparisonOperator</h2>
<!-- backwards compatibility -->
<a id="schemacomparisonoperator"></a>
<a id="schema_ComparisonOperator"></a>
<a id="tocScomparisonoperator"></a>
<a id="tocscomparisonoperator"></a>

```json
"EQ"
```

<h2 id="tocS_Condition">Condition</h2>
<!-- backwards compatibility -->
<a id="schemacondition"></a>
<a id="schema_Condition"></a>
<a id="tocScondition"></a>
<a id="tocscondition"></a>

```json
{
  "AttributeValueList": {},
  "ComparisonOperator": {}
}
```

<p>Represents the selection criteria for a <code>Query</code> or <code>Scan</code> operation:</p> <ul> <li> <p>For a <code>Query</code> operation, <code>Condition</code> is used for specifying the <code>KeyConditions</code> to use when querying a table or an index. For <code>KeyConditions</code>, only the following comparison operators are supported:</p> <p> <code>EQ | LE | LT | GE | GT | BEGINS_WITH | BETWEEN</code> </p> <p> <code>Condition</code> is also used in a <code>QueryFilter</code>, which evaluates the query results and returns only the desired values.</p> </li> <li> <p>For a <code>Scan</code> operation, <code>Condition</code> is used in a <code>ScanFilter</code>, which evaluates the scan results and returns only the desired values.</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttributeValueList|object|false|none|none|
|ComparisonOperator|object|true|none|none|

<h2 id="tocS_Key">Key</h2>
<!-- backwards compatibility -->
<a id="schemakey"></a>
<a id="schema_Key"></a>
<a id="tocSkey"></a>
<a id="tocskey"></a>

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

<h2 id="tocS_ConditionExpression">ConditionExpression</h2>
<!-- backwards compatibility -->
<a id="schemaconditionexpression"></a>
<a id="schema_ConditionExpression"></a>
<a id="tocSconditionexpression"></a>
<a id="tocsconditionexpression"></a>

```json
"string"
```

<h2 id="tocS_ExpressionAttributeNameMap">ExpressionAttributeNameMap</h2>
<!-- backwards compatibility -->
<a id="schemaexpressionattributenamemap"></a>
<a id="schema_ExpressionAttributeNameMap"></a>
<a id="tocSexpressionattributenamemap"></a>
<a id="tocsexpressionattributenamemap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[AttributeName](#schemaattributename)|false|none|none|

<h2 id="tocS_ExpressionAttributeValueMap">ExpressionAttributeValueMap</h2>
<!-- backwards compatibility -->
<a id="schemaexpressionattributevaluemap"></a>
<a id="schema_ExpressionAttributeValueMap"></a>
<a id="tocSexpressionattributevaluemap"></a>
<a id="tocsexpressionattributevaluemap"></a>

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

<h2 id="tocS_ConditionCheck">ConditionCheck</h2>
<!-- backwards compatibility -->
<a id="schemaconditioncheck"></a>
<a id="schema_ConditionCheck"></a>
<a id="tocSconditioncheck"></a>
<a id="tocsconditioncheck"></a>

```json
{
  "Key": {
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
  "TableName": {},
  "ConditionExpression": {},
  "ExpressionAttributeNames": {
    "property1": "string",
    "property2": "string"
  },
  "ExpressionAttributeValues": {
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
  "ReturnValuesOnConditionCheckFailure": {}
}
```

Represents a request to perform a check that an item exists or to check the condition of specific attributes of the item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|TableName|object|true|none|none|
|ConditionExpression|object|true|none|none|
|ExpressionAttributeNames|object|false|none|none|
|ExpressionAttributeValues|object|false|none|none|
|ReturnValuesOnConditionCheckFailure|object|false|none|none|

<h2 id="tocS_ConditionalOperator">ConditionalOperator</h2>
<!-- backwards compatibility -->
<a id="schemaconditionaloperator"></a>
<a id="schema_ConditionalOperator"></a>
<a id="tocSconditionaloperator"></a>
<a id="tocsconditionaloperator"></a>

```json
"AND"
```

<h2 id="tocS_SecondaryIndexesCapacityMap">SecondaryIndexesCapacityMap</h2>
<!-- backwards compatibility -->
<a id="schemasecondaryindexescapacitymap"></a>
<a id="schema_SecondaryIndexesCapacityMap"></a>
<a id="tocSsecondaryindexescapacitymap"></a>
<a id="tocssecondaryindexescapacitymap"></a>

```json
{
  "property1": {
    "ReadCapacityUnits": {},
    "WriteCapacityUnits": {},
    "CapacityUnits": {}
  },
  "property2": {
    "ReadCapacityUnits": {},
    "WriteCapacityUnits": {},
    "CapacityUnits": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[Capacity](#schemacapacity)|false|none|Represents the amount of provisioned throughput capacity consumed on a table or an index.|

<h2 id="tocS_ConsumedCapacity">ConsumedCapacity</h2>
<!-- backwards compatibility -->
<a id="schemaconsumedcapacity"></a>
<a id="schema_ConsumedCapacity"></a>
<a id="tocSconsumedcapacity"></a>
<a id="tocsconsumedcapacity"></a>

```json
{
  "TableName": {},
  "CapacityUnits": {},
  "ReadCapacityUnits": {},
  "WriteCapacityUnits": {},
  "Table": {
    "ReadCapacityUnits": {},
    "WriteCapacityUnits": {},
    "CapacityUnits": {}
  },
  "LocalSecondaryIndexes": {
    "property1": {
      "ReadCapacityUnits": {},
      "WriteCapacityUnits": {},
      "CapacityUnits": {}
    },
    "property2": {
      "ReadCapacityUnits": {},
      "WriteCapacityUnits": {},
      "CapacityUnits": {}
    }
  },
  "GlobalSecondaryIndexes": {
    "property1": {
      "ReadCapacityUnits": {},
      "WriteCapacityUnits": {},
      "CapacityUnits": {}
    },
    "property2": {
      "ReadCapacityUnits": {},
      "WriteCapacityUnits": {},
      "CapacityUnits": {}
    }
  }
}
```

The capacity units consumed by an operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. <code>ConsumedCapacity</code> is only returned if the request asked for it. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughputIntro.html">Provisioned Throughput</a> in the <i>Amazon DynamoDB Developer Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableName|object|false|none|none|
|CapacityUnits|object|false|none|none|
|ReadCapacityUnits|object|false|none|none|
|WriteCapacityUnits|object|false|none|none|
|Table|object|false|none|none|
|LocalSecondaryIndexes|object|false|none|none|
|GlobalSecondaryIndexes|object|false|none|none|

<h2 id="tocS_ContinuousBackupsStatus">ContinuousBackupsStatus</h2>
<!-- backwards compatibility -->
<a id="schemacontinuousbackupsstatus"></a>
<a id="schema_ContinuousBackupsStatus"></a>
<a id="tocScontinuousbackupsstatus"></a>
<a id="tocscontinuousbackupsstatus"></a>

```json
"ENABLED"
```

<h2 id="tocS_PointInTimeRecoveryDescription">PointInTimeRecoveryDescription</h2>
<!-- backwards compatibility -->
<a id="schemapointintimerecoverydescription"></a>
<a id="schema_PointInTimeRecoveryDescription"></a>
<a id="tocSpointintimerecoverydescription"></a>
<a id="tocspointintimerecoverydescription"></a>

```json
{
  "PointInTimeRecoveryStatus": {},
  "EarliestRestorableDateTime": {},
  "LatestRestorableDateTime": {}
}
```

The description of the point in time settings applied to the table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PointInTimeRecoveryStatus|object|false|none|none|
|EarliestRestorableDateTime|object|false|none|none|
|LatestRestorableDateTime|object|false|none|none|

<h2 id="tocS_ContinuousBackupsDescription">ContinuousBackupsDescription</h2>
<!-- backwards compatibility -->
<a id="schemacontinuousbackupsdescription"></a>
<a id="schema_ContinuousBackupsDescription"></a>
<a id="tocScontinuousbackupsdescription"></a>
<a id="tocscontinuousbackupsdescription"></a>

```json
{
  "ContinuousBackupsStatus": {},
  "PointInTimeRecoveryDescription": {
    "PointInTimeRecoveryStatus": {},
    "EarliestRestorableDateTime": {},
    "LatestRestorableDateTime": {}
  }
}
```

Represents the continuous backups and point in time recovery settings on the table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContinuousBackupsStatus|object|true|none|none|
|PointInTimeRecoveryDescription|object|false|none|none|

<h2 id="tocS_ContributorInsightsAction">ContributorInsightsAction</h2>
<!-- backwards compatibility -->
<a id="schemacontributorinsightsaction"></a>
<a id="schema_ContributorInsightsAction"></a>
<a id="tocScontributorinsightsaction"></a>
<a id="tocscontributorinsightsaction"></a>

```json
"ENABLE"
```

<h2 id="tocS_ContributorInsightsRule">ContributorInsightsRule</h2>
<!-- backwards compatibility -->
<a id="schemacontributorinsightsrule"></a>
<a id="schema_ContributorInsightsRule"></a>
<a id="tocScontributorinsightsrule"></a>
<a id="tocscontributorinsightsrule"></a>

```json
"string"
```

<h2 id="tocS_ContributorInsightsRuleList">ContributorInsightsRuleList</h2>
<!-- backwards compatibility -->
<a id="schemacontributorinsightsrulelist"></a>
<a id="schema_ContributorInsightsRuleList"></a>
<a id="tocScontributorinsightsrulelist"></a>
<a id="tocscontributorinsightsrulelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ContributorInsightsStatus">ContributorInsightsStatus</h2>
<!-- backwards compatibility -->
<a id="schemacontributorinsightsstatus"></a>
<a id="schema_ContributorInsightsStatus"></a>
<a id="tocScontributorinsightsstatus"></a>
<a id="tocscontributorinsightsstatus"></a>

```json
"ENABLING"
```

<h2 id="tocS_ContributorInsightsSummary">ContributorInsightsSummary</h2>
<!-- backwards compatibility -->
<a id="schemacontributorinsightssummary"></a>
<a id="schema_ContributorInsightsSummary"></a>
<a id="tocScontributorinsightssummary"></a>
<a id="tocscontributorinsightssummary"></a>

```json
{
  "TableName": {},
  "IndexName": {},
  "ContributorInsightsStatus": {}
}
```

Represents a Contributor Insights summary entry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableName|object|false|none|none|
|IndexName|object|false|none|none|
|ContributorInsightsStatus|object|false|none|none|

<h2 id="tocS_ContributorInsightsSummaries">ContributorInsightsSummaries</h2>
<!-- backwards compatibility -->
<a id="schemacontributorinsightssummaries"></a>
<a id="schema_ContributorInsightsSummaries"></a>
<a id="tocScontributorinsightssummaries"></a>
<a id="tocscontributorinsightssummaries"></a>

```json
[
  {
    "TableName": {},
    "IndexName": {},
    "ContributorInsightsStatus": {}
  }
]
```

<h2 id="tocS_IndexName">IndexName</h2>
<!-- backwards compatibility -->
<a id="schemaindexname"></a>
<a id="schema_IndexName"></a>
<a id="tocSindexname"></a>
<a id="tocsindexname"></a>

```json
"string"
```

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

<h2 id="tocS_Projection">Projection</h2>
<!-- backwards compatibility -->
<a id="schemaprojection"></a>
<a id="schema_Projection"></a>
<a id="tocSprojection"></a>
<a id="tocsprojection"></a>

```json
{
  "ProjectionType": {},
  "NonKeyAttributes": {}
}
```

Represents attributes that are copied (projected) from the table into an index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProjectionType|object|false|none|none|
|NonKeyAttributes|object|false|none|none|

<h2 id="tocS_ProvisionedThroughput">ProvisionedThroughput</h2>
<!-- backwards compatibility -->
<a id="schemaprovisionedthroughput"></a>
<a id="schema_ProvisionedThroughput"></a>
<a id="tocSprovisionedthroughput"></a>
<a id="tocsprovisionedthroughput"></a>

```json
{
  "ReadCapacityUnits": {},
  "WriteCapacityUnits": {}
}
```

<p>Represents the provisioned throughput settings for a specified table or index. The settings can be modified using the <code>UpdateTable</code> operation.</p> <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Service, Account, and Table Quotas</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReadCapacityUnits|object|true|none|none|
|WriteCapacityUnits|object|true|none|none|

<h2 id="tocS_CreateGlobalSecondaryIndexAction">CreateGlobalSecondaryIndexAction</h2>
<!-- backwards compatibility -->
<a id="schemacreateglobalsecondaryindexaction"></a>
<a id="schema_CreateGlobalSecondaryIndexAction"></a>
<a id="tocScreateglobalsecondaryindexaction"></a>
<a id="tocscreateglobalsecondaryindexaction"></a>

```json
{
  "IndexName": {},
  "KeySchema": {},
  "Projection": {
    "ProjectionType": {},
    "NonKeyAttributes": {}
  },
  "ProvisionedThroughput": {
    "ReadCapacityUnits": {},
    "WriteCapacityUnits": {}
  }
}
```

Represents a new global secondary index to be added to an existing table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexName|object|true|none|none|
|KeySchema|object|true|none|none|
|Projection|object|true|none|none|
|ProvisionedThroughput|object|false|none|none|

<h2 id="tocS_ReplicaList">ReplicaList</h2>
<!-- backwards compatibility -->
<a id="schemareplicalist"></a>
<a id="schema_ReplicaList"></a>
<a id="tocSreplicalist"></a>
<a id="tocsreplicalist"></a>

```json
[
  {
    "RegionName": {}
  }
]
```

<h2 id="tocS_GlobalTableDescription">GlobalTableDescription</h2>
<!-- backwards compatibility -->
<a id="schemaglobaltabledescription"></a>
<a id="schema_GlobalTableDescription"></a>
<a id="tocSglobaltabledescription"></a>
<a id="tocsglobaltabledescription"></a>

```json
{
  "ReplicationGroup": {},
  "GlobalTableArn": {},
  "CreationDateTime": {},
  "GlobalTableStatus": {},
  "GlobalTableName": {}
}
```

Contains details about the global table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationGroup|object|false|none|none|
|GlobalTableArn|object|false|none|none|
|CreationDateTime|object|false|none|none|
|GlobalTableStatus|object|false|none|none|
|GlobalTableName|object|false|none|none|

<h2 id="tocS_RegionName">RegionName</h2>
<!-- backwards compatibility -->
<a id="schemaregionname"></a>
<a id="schema_RegionName"></a>
<a id="tocSregionname"></a>
<a id="tocsregionname"></a>

```json
"string"
```

<h2 id="tocS_CreateReplicaAction">CreateReplicaAction</h2>
<!-- backwards compatibility -->
<a id="schemacreatereplicaaction"></a>
<a id="schema_CreateReplicaAction"></a>
<a id="tocScreatereplicaaction"></a>
<a id="tocscreatereplicaaction"></a>

```json
{
  "RegionName": {}
}
```

Represents a replica to be added.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RegionName|object|true|none|none|

<h2 id="tocS_KMSMasterKeyId">KMSMasterKeyId</h2>
<!-- backwards compatibility -->
<a id="schemakmsmasterkeyid"></a>
<a id="schema_KMSMasterKeyId"></a>
<a id="tocSkmsmasterkeyid"></a>
<a id="tocskmsmasterkeyid"></a>

```json
"string"
```

<h2 id="tocS_ProvisionedThroughputOverride">ProvisionedThroughputOverride</h2>
<!-- backwards compatibility -->
<a id="schemaprovisionedthroughputoverride"></a>
<a id="schema_ProvisionedThroughputOverride"></a>
<a id="tocSprovisionedthroughputoverride"></a>
<a id="tocsprovisionedthroughputoverride"></a>

```json
{
  "ReadCapacityUnits": {}
}
```

Replica-specific provisioned throughput settings. If not specified, uses the source table's provisioned throughput settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReadCapacityUnits|object|false|none|none|

<h2 id="tocS_ReplicaGlobalSecondaryIndexList">ReplicaGlobalSecondaryIndexList</h2>
<!-- backwards compatibility -->
<a id="schemareplicaglobalsecondaryindexlist"></a>
<a id="schema_ReplicaGlobalSecondaryIndexList"></a>
<a id="tocSreplicaglobalsecondaryindexlist"></a>
<a id="tocsreplicaglobalsecondaryindexlist"></a>

```json
[
  {
    "IndexName": {},
    "ProvisionedThroughputOverride": {
      "ReadCapacityUnits": {}
    }
  }
]
```

<h2 id="tocS_TableClass">TableClass</h2>
<!-- backwards compatibility -->
<a id="schematableclass"></a>
<a id="schema_TableClass"></a>
<a id="tocStableclass"></a>
<a id="tocstableclass"></a>

```json
"STANDARD"
```

<h2 id="tocS_CreateReplicationGroupMemberAction">CreateReplicationGroupMemberAction</h2>
<!-- backwards compatibility -->
<a id="schemacreatereplicationgroupmemberaction"></a>
<a id="schema_CreateReplicationGroupMemberAction"></a>
<a id="tocScreatereplicationgroupmemberaction"></a>
<a id="tocscreatereplicationgroupmemberaction"></a>

```json
{
  "RegionName": {},
  "KMSMasterKeyId": {},
  "ProvisionedThroughputOverride": {
    "ReadCapacityUnits": {}
  },
  "GlobalSecondaryIndexes": {},
  "TableClassOverride": {}
}
```

Represents a replica to be created.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RegionName|object|true|none|none|
|KMSMasterKeyId|object|false|none|none|
|ProvisionedThroughputOverride|object|false|none|none|
|GlobalSecondaryIndexes|object|false|none|none|
|TableClassOverride|object|false|none|none|

<h2 id="tocS_LocalSecondaryIndexList">LocalSecondaryIndexList</h2>
<!-- backwards compatibility -->
<a id="schemalocalsecondaryindexlist"></a>
<a id="schema_LocalSecondaryIndexList"></a>
<a id="tocSlocalsecondaryindexlist"></a>
<a id="tocslocalsecondaryindexlist"></a>

```json
[
  {
    "IndexName": {},
    "KeySchema": {},
    "Projection": {
      "ProjectionType": {},
      "NonKeyAttributes": {}
    }
  }
]
```

<h2 id="tocS_GlobalSecondaryIndexList">GlobalSecondaryIndexList</h2>
<!-- backwards compatibility -->
<a id="schemaglobalsecondaryindexlist"></a>
<a id="schema_GlobalSecondaryIndexList"></a>
<a id="tocSglobalsecondaryindexlist"></a>
<a id="tocsglobalsecondaryindexlist"></a>

```json
[
  {
    "IndexName": {},
    "KeySchema": {},
    "Projection": {
      "ProjectionType": {},
      "NonKeyAttributes": {}
    },
    "ProvisionedThroughput": {
      "ReadCapacityUnits": {},
      "WriteCapacityUnits": {}
    }
  }
]
```

<h2 id="tocS_StreamSpecification">StreamSpecification</h2>
<!-- backwards compatibility -->
<a id="schemastreamspecification"></a>
<a id="schema_StreamSpecification"></a>
<a id="tocSstreamspecification"></a>
<a id="tocsstreamspecification"></a>

```json
{
  "StreamEnabled": {},
  "StreamViewType": {}
}
```

Represents the DynamoDB Streams configuration for a table in DynamoDB.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamEnabled|object|true|none|none|
|StreamViewType|object|false|none|none|

<h2 id="tocS_SSESpecification">SSESpecification</h2>
<!-- backwards compatibility -->
<a id="schemassespecification"></a>
<a id="schema_SSESpecification"></a>
<a id="tocSssespecification"></a>
<a id="tocsssespecification"></a>

```json
{
  "Enabled": {},
  "SSEType": {},
  "KMSMasterKeyId": {}
}
```

Represents the settings used to enable server-side encryption.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|false|none|none|
|SSEType|object|false|none|none|
|KMSMasterKeyId|object|false|none|none|

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

<h2 id="tocS_DeletionProtectionEnabled">DeletionProtectionEnabled</h2>
<!-- backwards compatibility -->
<a id="schemadeletionprotectionenabled"></a>
<a id="schema_DeletionProtectionEnabled"></a>
<a id="tocSdeletionprotectionenabled"></a>
<a id="tocsdeletionprotectionenabled"></a>

```json
true
```

<h2 id="tocS_TableDescription">TableDescription</h2>
<!-- backwards compatibility -->
<a id="schematabledescription"></a>
<a id="schema_TableDescription"></a>
<a id="tocStabledescription"></a>
<a id="tocstabledescription"></a>

```json
{
  "AttributeDefinitions": {},
  "TableName": {},
  "KeySchema": {},
  "TableStatus": {},
  "CreationDateTime": {},
  "ProvisionedThroughput": {
    "LastIncreaseDateTime": {},
    "LastDecreaseDateTime": {},
    "NumberOfDecreasesToday": {},
    "ReadCapacityUnits": {},
    "WriteCapacityUnits": {}
  },
  "TableSizeBytes": {},
  "ItemCount": {},
  "TableArn": {},
  "TableId": {},
  "BillingModeSummary": {
    "BillingMode": {},
    "LastUpdateToPayPerRequestDateTime": {}
  },
  "LocalSecondaryIndexes": {},
  "GlobalSecondaryIndexes": {},
  "StreamSpecification": {
    "StreamEnabled": {},
    "StreamViewType": {}
  },
  "LatestStreamLabel": {},
  "LatestStreamArn": {},
  "GlobalTableVersion": {},
  "Replicas": {},
  "RestoreSummary": {
    "SourceBackupArn": {},
    "SourceTableArn": {},
    "RestoreDateTime": {},
    "RestoreInProgress": {}
  },
  "SSEDescription": {
    "Status": {},
    "SSEType": {},
    "KMSMasterKeyArn": {},
    "InaccessibleEncryptionDateTime": {}
  },
  "ArchivalSummary": {
    "ArchivalDateTime": {},
    "ArchivalReason": {},
    "ArchivalBackupArn": {}
  },
  "TableClassSummary": {
    "TableClass": {},
    "LastUpdateDateTime": {}
  },
  "DeletionProtectionEnabled": {}
}
```

Represents the properties of a table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttributeDefinitions|object|false|none|none|
|TableName|object|false|none|none|
|KeySchema|object|false|none|none|
|TableStatus|object|false|none|none|
|CreationDateTime|object|false|none|none|
|ProvisionedThroughput|object|false|none|none|
|TableSizeBytes|object|false|none|none|
|ItemCount|object|false|none|none|
|TableArn|object|false|none|none|
|TableId|object|false|none|none|
|BillingModeSummary|object|false|none|none|
|LocalSecondaryIndexes|object|false|none|none|
|GlobalSecondaryIndexes|object|false|none|none|
|StreamSpecification|object|false|none|none|
|LatestStreamLabel|object|false|none|none|
|LatestStreamArn|object|false|none|none|
|GlobalTableVersion|object|false|none|none|
|Replicas|object|false|none|none|
|RestoreSummary|object|false|none|none|
|SSEDescription|object|false|none|none|
|ArchivalSummary|object|false|none|none|
|TableClassSummary|object|false|none|none|
|DeletionProtectionEnabled|object|false|none|none|

<h2 id="tocS_CsvDelimiter">CsvDelimiter</h2>
<!-- backwards compatibility -->
<a id="schemacsvdelimiter"></a>
<a id="schema_CsvDelimiter"></a>
<a id="tocScsvdelimiter"></a>
<a id="tocscsvdelimiter"></a>

```json
"s"
```

<h2 id="tocS_CsvHeader">CsvHeader</h2>
<!-- backwards compatibility -->
<a id="schemacsvheader"></a>
<a id="schema_CsvHeader"></a>
<a id="tocScsvheader"></a>
<a id="tocscsvheader"></a>

```json
"string"
```

<h2 id="tocS_CsvHeaderList">CsvHeaderList</h2>
<!-- backwards compatibility -->
<a id="schemacsvheaderlist"></a>
<a id="schema_CsvHeaderList"></a>
<a id="tocScsvheaderlist"></a>
<a id="tocscsvheaderlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_CsvOptions">CsvOptions</h2>
<!-- backwards compatibility -->
<a id="schemacsvoptions"></a>
<a id="schema_CsvOptions"></a>
<a id="tocScsvoptions"></a>
<a id="tocscsvoptions"></a>

```json
{
  "Delimiter": {},
  "HeaderList": {}
}
```

 Processing options for the CSV file being imported.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Delimiter|object|false|none|none|
|HeaderList|object|false|none|none|

<h2 id="tocS_Delete">Delete</h2>
<!-- backwards compatibility -->
<a id="schemadelete"></a>
<a id="schema_Delete"></a>
<a id="tocSdelete"></a>
<a id="tocsdelete"></a>

```json
{
  "Key": {
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
  "TableName": {},
  "ConditionExpression": {},
  "ExpressionAttributeNames": {
    "property1": "string",
    "property2": "string"
  },
  "ExpressionAttributeValues": {
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
  "ReturnValuesOnConditionCheckFailure": {}
}
```

Represents a request to perform a <code>DeleteItem</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|TableName|object|true|none|none|
|ConditionExpression|object|false|none|none|
|ExpressionAttributeNames|object|false|none|none|
|ExpressionAttributeValues|object|false|none|none|
|ReturnValuesOnConditionCheckFailure|object|false|none|none|

<h2 id="tocS_DeleteGlobalSecondaryIndexAction">DeleteGlobalSecondaryIndexAction</h2>
<!-- backwards compatibility -->
<a id="schemadeleteglobalsecondaryindexaction"></a>
<a id="schema_DeleteGlobalSecondaryIndexAction"></a>
<a id="tocSdeleteglobalsecondaryindexaction"></a>
<a id="tocsdeleteglobalsecondaryindexaction"></a>

```json
{
  "IndexName": {}
}
```

Represents a global secondary index to be deleted from an existing table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexName|object|true|none|none|

<h2 id="tocS_ExpectedAttributeMap">ExpectedAttributeMap</h2>
<!-- backwards compatibility -->
<a id="schemaexpectedattributemap"></a>
<a id="schema_ExpectedAttributeMap"></a>
<a id="tocSexpectedattributemap"></a>
<a id="tocsexpectedattributemap"></a>

```json
{
  "property1": {
    "Value": {
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
    "Exists": {},
    "ComparisonOperator": {},
    "AttributeValueList": {}
  },
  "property2": {
    "Value": {
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
    "Exists": {},
    "ComparisonOperator": {},
    "AttributeValueList": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ExpectedAttributeValue](#schemaexpectedattributevalue)|false|none|<p>Represents a condition to be compared with an attribute value. This condition can be used with <code>DeleteItem</code>, <code>PutItem</code>, or <code>UpdateItem</code> operations; if the comparison evaluates to true, the operation succeeds; if not, the operation fails. You can use <code>ExpectedAttributeValue</code> in one of two different ways:</p> <ul> <li> <p>Use <code>AttributeValueList</code> to specify one or more values to compare against an attribute. Use <code>ComparisonOperator</code> to specify how you want to perform the comparison. If the comparison evaluates to true, then the conditional operation succeeds.</p> </li> <li> <p>Use <code>Value</code> to specify a value that DynamoDB will compare against an attribute. If the values match, then <code>ExpectedAttributeValue</code> evaluates to true and the conditional operation succeeds. Optionally, you can also set <code>Exists</code> to false, indicating that you <i>do not</i> expect to find the attribute value in the table. In this case, the conditional operation succeeds only if the comparison evaluates to false.</p> </li> </ul> <p> <code>Value</code> and <code>Exists</code> are incompatible with <code>AttributeValueList</code> and <code>ComparisonOperator</code>. Note that if you use both sets of parameters at once, DynamoDB will return a <code>ValidationException</code> exception.</p>|

<h2 id="tocS_ReturnValue">ReturnValue</h2>
<!-- backwards compatibility -->
<a id="schemareturnvalue"></a>
<a id="schema_ReturnValue"></a>
<a id="tocSreturnvalue"></a>
<a id="tocsreturnvalue"></a>

```json
"NONE"
```

<h2 id="tocS_ItemCollectionMetrics">ItemCollectionMetrics</h2>
<!-- backwards compatibility -->
<a id="schemaitemcollectionmetrics"></a>
<a id="schema_ItemCollectionMetrics"></a>
<a id="tocSitemcollectionmetrics"></a>
<a id="tocsitemcollectionmetrics"></a>

```json
{
  "ItemCollectionKey": {
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
  "SizeEstimateRangeGB": {}
}
```

Information about item collections, if any, that were affected by the operation. <code>ItemCollectionMetrics</code> is only returned if the request asked for it. If the table does not have any local secondary indexes, this information is not returned in the response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ItemCollectionKey|object|false|none|none|
|SizeEstimateRangeGB|object|false|none|none|

<h2 id="tocS_DeleteReplicaAction">DeleteReplicaAction</h2>
<!-- backwards compatibility -->
<a id="schemadeletereplicaaction"></a>
<a id="schema_DeleteReplicaAction"></a>
<a id="tocSdeletereplicaaction"></a>
<a id="tocsdeletereplicaaction"></a>

```json
{
  "RegionName": {}
}
```

Represents a replica to be removed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RegionName|object|true|none|none|

<h2 id="tocS_DeleteReplicationGroupMemberAction">DeleteReplicationGroupMemberAction</h2>
<!-- backwards compatibility -->
<a id="schemadeletereplicationgroupmemberaction"></a>
<a id="schema_DeleteReplicationGroupMemberAction"></a>
<a id="tocSdeletereplicationgroupmemberaction"></a>
<a id="tocsdeletereplicationgroupmemberaction"></a>

```json
{
  "RegionName": {}
}
```

Represents a replica to be deleted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RegionName|object|true|none|none|

<h2 id="tocS_DeleteRequest">DeleteRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleterequest"></a>
<a id="schema_DeleteRequest"></a>
<a id="tocSdeleterequest"></a>
<a id="tocsdeleterequest"></a>

```json
{
  "Key": {
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
}
```

Represents a request to perform a <code>DeleteItem</code> operation on an item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|

<h2 id="tocS_LastUpdateDateTime">LastUpdateDateTime</h2>
<!-- backwards compatibility -->
<a id="schemalastupdatedatetime"></a>
<a id="schema_LastUpdateDateTime"></a>
<a id="tocSlastupdatedatetime"></a>
<a id="tocslastupdatedatetime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_FailureException">FailureException</h2>
<!-- backwards compatibility -->
<a id="schemafailureexception"></a>
<a id="schema_FailureException"></a>
<a id="tocSfailureexception"></a>
<a id="tocsfailureexception"></a>

```json
{
  "ExceptionName": {},
  "ExceptionDescription": {}
}
```

Represents a failure a contributor insights operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExceptionName|object|false|none|none|
|ExceptionDescription|object|false|none|none|

<h2 id="tocS_Endpoints">Endpoints</h2>
<!-- backwards compatibility -->
<a id="schemaendpoints"></a>
<a id="schema_Endpoints"></a>
<a id="tocSendpoints"></a>
<a id="tocsendpoints"></a>

```json
[
  {
    "Address": {},
    "CachePeriodInMinutes": {}
  }
]
```

<h2 id="tocS_ExportArn">ExportArn</h2>
<!-- backwards compatibility -->
<a id="schemaexportarn"></a>
<a id="schema_ExportArn"></a>
<a id="tocSexportarn"></a>
<a id="tocsexportarn"></a>

```json
"stringstringstringstringstringstrings"
```

<h2 id="tocS_ExportDescription">ExportDescription</h2>
<!-- backwards compatibility -->
<a id="schemaexportdescription"></a>
<a id="schema_ExportDescription"></a>
<a id="tocSexportdescription"></a>
<a id="tocsexportdescription"></a>

```json
{
  "ExportArn": {},
  "ExportStatus": {},
  "StartTime": {},
  "EndTime": {},
  "ExportManifest": {},
  "TableArn": {},
  "TableId": {},
  "ExportTime": {},
  "ClientToken": {},
  "S3Bucket": {},
  "S3BucketOwner": {},
  "S3Prefix": {},
  "S3SseAlgorithm": {},
  "S3SseKmsKeyId": {},
  "FailureCode": {},
  "FailureMessage": {},
  "ExportFormat": {},
  "BilledSizeBytes": {},
  "ItemCount": {}
}
```

Represents the properties of the exported table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExportArn|object|false|none|none|
|ExportStatus|object|false|none|none|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|
|ExportManifest|object|false|none|none|
|TableArn|object|false|none|none|
|TableId|object|false|none|none|
|ExportTime|object|false|none|none|
|ClientToken|object|false|none|none|
|S3Bucket|object|false|none|none|
|S3BucketOwner|object|false|none|none|
|S3Prefix|object|false|none|none|
|S3SseAlgorithm|object|false|none|none|
|S3SseKmsKeyId|object|false|none|none|
|FailureCode|object|false|none|none|
|FailureMessage|object|false|none|none|
|ExportFormat|object|false|none|none|
|BilledSizeBytes|object|false|none|none|
|ItemCount|object|false|none|none|

<h2 id="tocS_ReplicaSettingsDescriptionList">ReplicaSettingsDescriptionList</h2>
<!-- backwards compatibility -->
<a id="schemareplicasettingsdescriptionlist"></a>
<a id="schema_ReplicaSettingsDescriptionList"></a>
<a id="tocSreplicasettingsdescriptionlist"></a>
<a id="tocsreplicasettingsdescriptionlist"></a>

```json
[
  {
    "RegionName": {},
    "ReplicaStatus": {},
    "ReplicaBillingModeSummary": {
      "BillingMode": {},
      "LastUpdateToPayPerRequestDateTime": {}
    },
    "ReplicaProvisionedReadCapacityUnits": {},
    "ReplicaProvisionedReadCapacityAutoScalingSettings": {
      "MinimumUnits": {},
      "MaximumUnits": {},
      "AutoScalingDisabled": {},
      "AutoScalingRoleArn": {},
      "ScalingPolicies": {}
    },
    "ReplicaProvisionedWriteCapacityUnits": {},
    "ReplicaProvisionedWriteCapacityAutoScalingSettings": {
      "MinimumUnits": {},
      "MaximumUnits": {},
      "AutoScalingDisabled": {},
      "AutoScalingRoleArn": {},
      "ScalingPolicies": {}
    },
    "ReplicaGlobalSecondaryIndexSettings": {},
    "ReplicaTableClassSummary": {
      "TableClass": {},
      "LastUpdateDateTime": {}
    }
  }
]
```

<h2 id="tocS_ImportArn">ImportArn</h2>
<!-- backwards compatibility -->
<a id="schemaimportarn"></a>
<a id="schema_ImportArn"></a>
<a id="tocSimportarn"></a>
<a id="tocsimportarn"></a>

```json
"stringstringstringstringstringstrings"
```

<h2 id="tocS_ImportTableDescription">ImportTableDescription</h2>
<!-- backwards compatibility -->
<a id="schemaimporttabledescription"></a>
<a id="schema_ImportTableDescription"></a>
<a id="tocSimporttabledescription"></a>
<a id="tocsimporttabledescription"></a>

```json
{
  "ImportArn": {},
  "ImportStatus": {},
  "TableArn": {},
  "TableId": {},
  "ClientToken": {},
  "S3BucketSource": {
    "S3BucketOwner": {},
    "S3Bucket": {},
    "S3KeyPrefix": {}
  },
  "ErrorCount": {},
  "CloudWatchLogGroupArn": {},
  "InputFormat": {},
  "InputFormatOptions": {
    "Csv": {
      "Delimiter": {},
      "HeaderList": {}
    }
  },
  "InputCompressionType": {},
  "TableCreationParameters": {
    "TableName": {},
    "AttributeDefinitions": {},
    "KeySchema": {},
    "BillingMode": {},
    "ProvisionedThroughput": {
      "ReadCapacityUnits": {},
      "WriteCapacityUnits": {}
    },
    "SSESpecification": {
      "Enabled": {},
      "SSEType": {},
      "KMSMasterKeyId": {}
    },
    "GlobalSecondaryIndexes": {}
  },
  "StartTime": {},
  "EndTime": {},
  "ProcessedSizeBytes": {},
  "ProcessedItemCount": {},
  "ImportedItemCount": {},
  "FailureCode": {},
  "FailureMessage": {}
}
```

 Represents the properties of the table being imported into.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ImportArn|object|false|none|none|
|ImportStatus|object|false|none|none|
|TableArn|object|false|none|none|
|TableId|object|false|none|none|
|ClientToken|object|false|none|none|
|S3BucketSource|object|false|none|none|
|ErrorCount|object|false|none|none|
|CloudWatchLogGroupArn|object|false|none|none|
|InputFormat|object|false|none|none|
|InputFormatOptions|object|false|none|none|
|InputCompressionType|object|false|none|none|
|TableCreationParameters|object|false|none|none|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|
|ProcessedSizeBytes|object|false|none|none|
|ProcessedItemCount|object|false|none|none|
|ImportedItemCount|object|false|none|none|
|FailureCode|object|false|none|none|
|FailureMessage|object|false|none|none|

<h2 id="tocS_KinesisDataStreamDestinations">KinesisDataStreamDestinations</h2>
<!-- backwards compatibility -->
<a id="schemakinesisdatastreamdestinations"></a>
<a id="schema_KinesisDataStreamDestinations"></a>
<a id="tocSkinesisdatastreamdestinations"></a>
<a id="tocskinesisdatastreamdestinations"></a>

```json
[
  {
    "StreamArn": {},
    "DestinationStatus": {},
    "DestinationStatusDescription": {}
  }
]
```

<h2 id="tocS_TableAutoScalingDescription">TableAutoScalingDescription</h2>
<!-- backwards compatibility -->
<a id="schematableautoscalingdescription"></a>
<a id="schema_TableAutoScalingDescription"></a>
<a id="tocStableautoscalingdescription"></a>
<a id="tocstableautoscalingdescription"></a>

```json
{
  "TableName": {},
  "TableStatus": {},
  "Replicas": {}
}
```

Represents the auto scaling configuration for a global table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableName|object|false|none|none|
|TableStatus|object|false|none|none|
|Replicas|object|false|none|none|

<h2 id="tocS_TimeToLiveDescription">TimeToLiveDescription</h2>
<!-- backwards compatibility -->
<a id="schematimetolivedescription"></a>
<a id="schema_TimeToLiveDescription"></a>
<a id="tocStimetolivedescription"></a>
<a id="tocstimetolivedescription"></a>

```json
{
  "TimeToLiveStatus": {},
  "AttributeName": {}
}
```

The description of the Time to Live (TTL) status on the specified table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TimeToLiveStatus|object|false|none|none|
|AttributeName|object|false|none|none|

<h2 id="tocS_DestinationStatus">DestinationStatus</h2>
<!-- backwards compatibility -->
<a id="schemadestinationstatus"></a>
<a id="schema_DestinationStatus"></a>
<a id="tocSdestinationstatus"></a>
<a id="tocsdestinationstatus"></a>

```json
"ENABLING"
```

<h2 id="tocS_Long">Long</h2>
<!-- backwards compatibility -->
<a id="schemalong"></a>
<a id="schema_Long"></a>
<a id="tocSlong"></a>
<a id="tocslong"></a>

```json
0
```

<h2 id="tocS_Endpoint">Endpoint</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint"></a>
<a id="schema_Endpoint"></a>
<a id="tocSendpoint"></a>
<a id="tocsendpoint"></a>

```json
{
  "Address": {},
  "CachePeriodInMinutes": {}
}
```

An endpoint information details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Address|object|true|none|none|
|CachePeriodInMinutes|object|true|none|none|

<h2 id="tocS_ErrorCount">ErrorCount</h2>
<!-- backwards compatibility -->
<a id="schemaerrorcount"></a>
<a id="schema_ErrorCount"></a>
<a id="tocSerrorcount"></a>
<a id="tocserrorcount"></a>

```json
0
```

<h2 id="tocS_ExceptionDescription">ExceptionDescription</h2>
<!-- backwards compatibility -->
<a id="schemaexceptiondescription"></a>
<a id="schema_ExceptionDescription"></a>
<a id="tocSexceptiondescription"></a>
<a id="tocsexceptiondescription"></a>

```json
"string"
```

<h2 id="tocS_ExceptionName">ExceptionName</h2>
<!-- backwards compatibility -->
<a id="schemaexceptionname"></a>
<a id="schema_ExceptionName"></a>
<a id="tocSexceptionname"></a>
<a id="tocsexceptionname"></a>

```json
"string"
```

<h2 id="tocS_PartiQLNextToken">PartiQLNextToken</h2>
<!-- backwards compatibility -->
<a id="schemapartiqlnexttoken"></a>
<a id="schema_PartiQLNextToken"></a>
<a id="tocSpartiqlnexttoken"></a>
<a id="tocspartiqlnexttoken"></a>

```json
"string"
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

<h2 id="tocS_ParameterizedStatements">ParameterizedStatements</h2>
<!-- backwards compatibility -->
<a id="schemaparameterizedstatements"></a>
<a id="schema_ParameterizedStatements"></a>
<a id="tocSparameterizedstatements"></a>
<a id="tocsparameterizedstatements"></a>

```json
[
  {
    "Statement": {},
    "Parameters": {},
    "ReturnValuesOnConditionCheckFailure": {}
  }
]
```

<h2 id="tocS_ItemResponseList">ItemResponseList</h2>
<!-- backwards compatibility -->
<a id="schemaitemresponselist"></a>
<a id="schema_ItemResponseList"></a>
<a id="tocSitemresponselist"></a>
<a id="tocsitemresponselist"></a>

```json
[
  {
    "Item": {
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
  }
]
```

<h2 id="tocS_ExpectedAttributeValue">ExpectedAttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemaexpectedattributevalue"></a>
<a id="schema_ExpectedAttributeValue"></a>
<a id="tocSexpectedattributevalue"></a>
<a id="tocsexpectedattributevalue"></a>

```json
{
  "Value": {
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
  "Exists": {},
  "ComparisonOperator": {},
  "AttributeValueList": {}
}
```

<p>Represents a condition to be compared with an attribute value. This condition can be used with <code>DeleteItem</code>, <code>PutItem</code>, or <code>UpdateItem</code> operations; if the comparison evaluates to true, the operation succeeds; if not, the operation fails. You can use <code>ExpectedAttributeValue</code> in one of two different ways:</p> <ul> <li> <p>Use <code>AttributeValueList</code> to specify one or more values to compare against an attribute. Use <code>ComparisonOperator</code> to specify how you want to perform the comparison. If the comparison evaluates to true, then the conditional operation succeeds.</p> </li> <li> <p>Use <code>Value</code> to specify a value that DynamoDB will compare against an attribute. If the values match, then <code>ExpectedAttributeValue</code> evaluates to true and the conditional operation succeeds. Optionally, you can also set <code>Exists</code> to false, indicating that you <i>do not</i> expect to find the attribute value in the table. In this case, the conditional operation succeeds only if the comparison evaluates to false.</p> </li> </ul> <p> <code>Value</code> and <code>Exists</code> are incompatible with <code>AttributeValueList</code> and <code>ComparisonOperator</code>. Note that if you use both sets of parameters at once, DynamoDB will return a <code>ValidationException</code> exception.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Value|object|false|none|none|
|Exists|object|false|none|none|
|ComparisonOperator|object|false|none|none|
|AttributeValueList|object|false|none|none|

<h2 id="tocS_ExportStatus">ExportStatus</h2>
<!-- backwards compatibility -->
<a id="schemaexportstatus"></a>
<a id="schema_ExportStatus"></a>
<a id="tocSexportstatus"></a>
<a id="tocsexportstatus"></a>

```json
"IN_PROGRESS"
```

<h2 id="tocS_ExportStartTime">ExportStartTime</h2>
<!-- backwards compatibility -->
<a id="schemaexportstarttime"></a>
<a id="schema_ExportStartTime"></a>
<a id="tocSexportstarttime"></a>
<a id="tocsexportstarttime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_ExportEndTime">ExportEndTime</h2>
<!-- backwards compatibility -->
<a id="schemaexportendtime"></a>
<a id="schema_ExportEndTime"></a>
<a id="tocSexportendtime"></a>
<a id="tocsexportendtime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_ExportManifest">ExportManifest</h2>
<!-- backwards compatibility -->
<a id="schemaexportmanifest"></a>
<a id="schema_ExportManifest"></a>
<a id="tocSexportmanifest"></a>
<a id="tocsexportmanifest"></a>

```json
"string"
```

<h2 id="tocS_ExportTime">ExportTime</h2>
<!-- backwards compatibility -->
<a id="schemaexporttime"></a>
<a id="schema_ExportTime"></a>
<a id="tocSexporttime"></a>
<a id="tocsexporttime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_S3Bucket">S3Bucket</h2>
<!-- backwards compatibility -->
<a id="schemas3bucket"></a>
<a id="schema_S3Bucket"></a>
<a id="tocSs3bucket"></a>
<a id="tocss3bucket"></a>

```json
"string"
```

<h2 id="tocS_S3BucketOwner">S3BucketOwner</h2>
<!-- backwards compatibility -->
<a id="schemas3bucketowner"></a>
<a id="schema_S3BucketOwner"></a>
<a id="tocSs3bucketowner"></a>
<a id="tocss3bucketowner"></a>

```json
"string"
```

<h2 id="tocS_S3Prefix">S3Prefix</h2>
<!-- backwards compatibility -->
<a id="schemas3prefix"></a>
<a id="schema_S3Prefix"></a>
<a id="tocSs3prefix"></a>
<a id="tocss3prefix"></a>

```json
"string"
```

<h2 id="tocS_S3SseAlgorithm">S3SseAlgorithm</h2>
<!-- backwards compatibility -->
<a id="schemas3ssealgorithm"></a>
<a id="schema_S3SseAlgorithm"></a>
<a id="tocSs3ssealgorithm"></a>
<a id="tocss3ssealgorithm"></a>

```json
"AES256"
```

<h2 id="tocS_S3SseKmsKeyId">S3SseKmsKeyId</h2>
<!-- backwards compatibility -->
<a id="schemas3ssekmskeyid"></a>
<a id="schema_S3SseKmsKeyId"></a>
<a id="tocSs3ssekmskeyid"></a>
<a id="tocss3ssekmskeyid"></a>

```json
"string"
```

<h2 id="tocS_FailureCode">FailureCode</h2>
<!-- backwards compatibility -->
<a id="schemafailurecode"></a>
<a id="schema_FailureCode"></a>
<a id="tocSfailurecode"></a>
<a id="tocsfailurecode"></a>

```json
"string"
```

<h2 id="tocS_FailureMessage">FailureMessage</h2>
<!-- backwards compatibility -->
<a id="schemafailuremessage"></a>
<a id="schema_FailureMessage"></a>
<a id="tocSfailuremessage"></a>
<a id="tocsfailuremessage"></a>

```json
"string"
```

<h2 id="tocS_ExportFormat">ExportFormat</h2>
<!-- backwards compatibility -->
<a id="schemaexportformat"></a>
<a id="schema_ExportFormat"></a>
<a id="tocSexportformat"></a>
<a id="tocsexportformat"></a>

```json
"DYNAMODB_JSON"
```

<h2 id="tocS_ItemCount">ItemCount</h2>
<!-- backwards compatibility -->
<a id="schemaitemcount"></a>
<a id="schema_ItemCount"></a>
<a id="tocSitemcount"></a>
<a id="tocsitemcount"></a>

```json
0
```

<h2 id="tocS_ExportNextToken">ExportNextToken</h2>
<!-- backwards compatibility -->
<a id="schemaexportnexttoken"></a>
<a id="schema_ExportNextToken"></a>
<a id="tocSexportnexttoken"></a>
<a id="tocsexportnexttoken"></a>

```json
"string"
```

<h2 id="tocS_ExportSummary">ExportSummary</h2>
<!-- backwards compatibility -->
<a id="schemaexportsummary"></a>
<a id="schema_ExportSummary"></a>
<a id="tocSexportsummary"></a>
<a id="tocsexportsummary"></a>

```json
{
  "ExportArn": {},
  "ExportStatus": {}
}
```

Summary information about an export task.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExportArn|object|false|none|none|
|ExportStatus|object|false|none|none|

<h2 id="tocS_ExportSummaries">ExportSummaries</h2>
<!-- backwards compatibility -->
<a id="schemaexportsummaries"></a>
<a id="schema_ExportSummaries"></a>
<a id="tocSexportsummaries"></a>
<a id="tocsexportsummaries"></a>

```json
[
  {
    "ExportArn": {},
    "ExportStatus": {}
  }
]
```

<h2 id="tocS_ExpressionAttributeNameVariable">ExpressionAttributeNameVariable</h2>
<!-- backwards compatibility -->
<a id="schemaexpressionattributenamevariable"></a>
<a id="schema_ExpressionAttributeNameVariable"></a>
<a id="tocSexpressionattributenamevariable"></a>
<a id="tocsexpressionattributenamevariable"></a>

```json
"string"
```

<h2 id="tocS_ExpressionAttributeValueVariable">ExpressionAttributeValueVariable</h2>
<!-- backwards compatibility -->
<a id="schemaexpressionattributevaluevariable"></a>
<a id="schema_ExpressionAttributeValueVariable"></a>
<a id="tocSexpressionattributevaluevariable"></a>
<a id="tocsexpressionattributevaluevariable"></a>

```json
"string"
```

<h2 id="tocS_FilterConditionMap">FilterConditionMap</h2>
<!-- backwards compatibility -->
<a id="schemafilterconditionmap"></a>
<a id="schema_FilterConditionMap"></a>
<a id="tocSfilterconditionmap"></a>
<a id="tocsfilterconditionmap"></a>

```json
{
  "property1": {
    "AttributeValueList": {},
    "ComparisonOperator": {}
  },
  "property2": {
    "AttributeValueList": {},
    "ComparisonOperator": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[Condition](#schemacondition)|false|none|<p>Represents the selection criteria for a <code>Query</code> or <code>Scan</code> operation:</p> <ul> <li> <p>For a <code>Query</code> operation, <code>Condition</code> is used for specifying the <code>KeyConditions</code> to use when querying a table or an index. For <code>KeyConditions</code>, only the following comparison operators are supported:</p> <p> <code>EQ \| LE \| LT \| GE \| GT \| BEGINS_WITH \| BETWEEN</code> </p> <p> <code>Condition</code> is also used in a <code>QueryFilter</code>, which evaluates the query results and returns only the desired values.</p> </li> <li> <p>For a <code>Scan</code> operation, <code>Condition</code> is used in a <code>ScanFilter</code>, which evaluates the scan results and returns only the desired values.</p> </li> </ul>|

<h2 id="tocS_ProjectionExpression">ProjectionExpression</h2>
<!-- backwards compatibility -->
<a id="schemaprojectionexpression"></a>
<a id="schema_ProjectionExpression"></a>
<a id="tocSprojectionexpression"></a>
<a id="tocsprojectionexpression"></a>

```json
"string"
```

<h2 id="tocS_Get">Get</h2>
<!-- backwards compatibility -->
<a id="schemaget"></a>
<a id="schema_Get"></a>
<a id="tocSget"></a>
<a id="tocsget"></a>

```json
{
  "Key": {
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
  "TableName": {},
  "ProjectionExpression": {},
  "ExpressionAttributeNames": {
    "property1": "string",
    "property2": "string"
  }
}
```

Specifies an item and related attribute values to retrieve in a <code>TransactGetItem</code> object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|TableName|object|true|none|none|
|ProjectionExpression|object|false|none|none|
|ExpressionAttributeNames|object|false|none|none|

<h2 id="tocS_GlobalSecondaryIndex">GlobalSecondaryIndex</h2>
<!-- backwards compatibility -->
<a id="schemaglobalsecondaryindex"></a>
<a id="schema_GlobalSecondaryIndex"></a>
<a id="tocSglobalsecondaryindex"></a>
<a id="tocsglobalsecondaryindex"></a>

```json
{
  "IndexName": {},
  "KeySchema": {},
  "Projection": {
    "ProjectionType": {},
    "NonKeyAttributes": {}
  },
  "ProvisionedThroughput": {
    "ReadCapacityUnits": {},
    "WriteCapacityUnits": {}
  }
}
```

Represents the properties of a global secondary index.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexName|object|true|none|none|
|KeySchema|object|true|none|none|
|Projection|object|true|none|none|
|ProvisionedThroughput|object|false|none|none|

<h2 id="tocS_GlobalSecondaryIndexAutoScalingUpdate">GlobalSecondaryIndexAutoScalingUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaglobalsecondaryindexautoscalingupdate"></a>
<a id="schema_GlobalSecondaryIndexAutoScalingUpdate"></a>
<a id="tocSglobalsecondaryindexautoscalingupdate"></a>
<a id="tocsglobalsecondaryindexautoscalingupdate"></a>

```json
{
  "IndexName": {},
  "ProvisionedWriteCapacityAutoScalingUpdate": {
    "MinimumUnits": {},
    "MaximumUnits": {},
    "AutoScalingDisabled": {},
    "AutoScalingRoleArn": {},
    "ScalingPolicyUpdate": {
      "PolicyName": {},
      "TargetTrackingScalingPolicyConfiguration": {
        "DisableScaleIn": {},
        "ScaleInCooldown": {},
        "ScaleOutCooldown": {},
        "TargetValue": {}
      }
    }
  }
}
```

Represents the auto scaling settings of a global secondary index for a global table that will be modified.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexName|object|false|none|none|
|ProvisionedWriteCapacityAutoScalingUpdate|[AutoScalingSettingsUpdate](#schemaautoscalingsettingsupdate)|false|none|Represents the auto scaling settings to be modified for a global table or global secondary index.|

<h2 id="tocS_GlobalSecondaryIndexAutoScalingUpdateList">GlobalSecondaryIndexAutoScalingUpdateList</h2>
<!-- backwards compatibility -->
<a id="schemaglobalsecondaryindexautoscalingupdatelist"></a>
<a id="schema_GlobalSecondaryIndexAutoScalingUpdateList"></a>
<a id="tocSglobalsecondaryindexautoscalingupdatelist"></a>
<a id="tocsglobalsecondaryindexautoscalingupdatelist"></a>

```json
[
  {
    "IndexName": {},
    "ProvisionedWriteCapacityAutoScalingUpdate": {
      "MinimumUnits": {},
      "MaximumUnits": {},
      "AutoScalingDisabled": {},
      "AutoScalingRoleArn": {},
      "ScalingPolicyUpdate": {
        "PolicyName": {},
        "TargetTrackingScalingPolicyConfiguration": {
          "DisableScaleIn": {},
          "ScaleInCooldown": {},
          "ScaleOutCooldown": {},
          "TargetValue": {}
        }
      }
    }
  }
]
```

<h2 id="tocS_IndexStatus">IndexStatus</h2>
<!-- backwards compatibility -->
<a id="schemaindexstatus"></a>
<a id="schema_IndexStatus"></a>
<a id="tocSindexstatus"></a>
<a id="tocsindexstatus"></a>

```json
"CREATING"
```

<h2 id="tocS_ProvisionedThroughputDescription">ProvisionedThroughputDescription</h2>
<!-- backwards compatibility -->
<a id="schemaprovisionedthroughputdescription"></a>
<a id="schema_ProvisionedThroughputDescription"></a>
<a id="tocSprovisionedthroughputdescription"></a>
<a id="tocsprovisionedthroughputdescription"></a>

```json
{
  "LastIncreaseDateTime": {},
  "LastDecreaseDateTime": {},
  "NumberOfDecreasesToday": {},
  "ReadCapacityUnits": {},
  "WriteCapacityUnits": {}
}
```

Represents the provisioned throughput settings for the table, consisting of read and write capacity units, along with data about increases and decreases.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LastIncreaseDateTime|object|false|none|none|
|LastDecreaseDateTime|object|false|none|none|
|NumberOfDecreasesToday|object|false|none|none|
|ReadCapacityUnits|object|false|none|none|
|WriteCapacityUnits|object|false|none|none|

<h2 id="tocS_LongObject">LongObject</h2>
<!-- backwards compatibility -->
<a id="schemalongobject"></a>
<a id="schema_LongObject"></a>
<a id="tocSlongobject"></a>
<a id="tocslongobject"></a>

```json
0
```

<h2 id="tocS_GlobalSecondaryIndexDescription">GlobalSecondaryIndexDescription</h2>
<!-- backwards compatibility -->
<a id="schemaglobalsecondaryindexdescription"></a>
<a id="schema_GlobalSecondaryIndexDescription"></a>
<a id="tocSglobalsecondaryindexdescription"></a>
<a id="tocsglobalsecondaryindexdescription"></a>

```json
{
  "IndexName": {},
  "KeySchema": {},
  "Projection": {
    "ProjectionType": {},
    "NonKeyAttributes": {}
  },
  "IndexStatus": {},
  "Backfilling": {},
  "ProvisionedThroughput": {
    "LastIncreaseDateTime": {},
    "LastDecreaseDateTime": {},
    "NumberOfDecreasesToday": {},
    "ReadCapacityUnits": {},
    "WriteCapacityUnits": {}
  },
  "IndexSizeBytes": {},
  "ItemCount": {},
  "IndexArn": {}
}
```

Represents the properties of a global secondary index.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexName|object|false|none|none|
|KeySchema|object|false|none|none|
|Projection|object|false|none|none|
|IndexStatus|object|false|none|none|
|Backfilling|object|false|none|none|
|ProvisionedThroughput|object|false|none|none|
|IndexSizeBytes|object|false|none|none|
|ItemCount|object|false|none|none|
|IndexArn|object|false|none|none|

<h2 id="tocS_GlobalSecondaryIndexDescriptionList">GlobalSecondaryIndexDescriptionList</h2>
<!-- backwards compatibility -->
<a id="schemaglobalsecondaryindexdescriptionlist"></a>
<a id="schema_GlobalSecondaryIndexDescriptionList"></a>
<a id="tocSglobalsecondaryindexdescriptionlist"></a>
<a id="tocsglobalsecondaryindexdescriptionlist"></a>

```json
[
  {
    "IndexName": {},
    "KeySchema": {},
    "Projection": {
      "ProjectionType": {},
      "NonKeyAttributes": {}
    },
    "IndexStatus": {},
    "Backfilling": {},
    "ProvisionedThroughput": {
      "LastIncreaseDateTime": {},
      "LastDecreaseDateTime": {},
      "NumberOfDecreasesToday": {},
      "ReadCapacityUnits": {},
      "WriteCapacityUnits": {}
    },
    "IndexSizeBytes": {},
    "ItemCount": {},
    "IndexArn": {}
  }
]
```

<h2 id="tocS_GlobalSecondaryIndexInfo">GlobalSecondaryIndexInfo</h2>
<!-- backwards compatibility -->
<a id="schemaglobalsecondaryindexinfo"></a>
<a id="schema_GlobalSecondaryIndexInfo"></a>
<a id="tocSglobalsecondaryindexinfo"></a>
<a id="tocsglobalsecondaryindexinfo"></a>

```json
{
  "IndexName": {},
  "KeySchema": {},
  "Projection": {
    "ProjectionType": {},
    "NonKeyAttributes": {}
  },
  "ProvisionedThroughput": {
    "ReadCapacityUnits": {},
    "WriteCapacityUnits": {}
  }
}
```

Represents the properties of a global secondary index for the table when the backup was created.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexName|object|false|none|none|
|KeySchema|object|false|none|none|
|Projection|object|false|none|none|
|ProvisionedThroughput|object|false|none|none|

<h2 id="tocS_UpdateGlobalSecondaryIndexAction">UpdateGlobalSecondaryIndexAction</h2>
<!-- backwards compatibility -->
<a id="schemaupdateglobalsecondaryindexaction"></a>
<a id="schema_UpdateGlobalSecondaryIndexAction"></a>
<a id="tocSupdateglobalsecondaryindexaction"></a>
<a id="tocsupdateglobalsecondaryindexaction"></a>

```json
{
  "IndexName": {},
  "ProvisionedThroughput": {
    "ReadCapacityUnits": {},
    "WriteCapacityUnits": {}
  }
}
```

Represents the new provisioned throughput settings to be applied to a global secondary index.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexName|object|true|none|none|
|ProvisionedThroughput|object|true|none|none|

<h2 id="tocS_GlobalSecondaryIndexUpdate">GlobalSecondaryIndexUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaglobalsecondaryindexupdate"></a>
<a id="schema_GlobalSecondaryIndexUpdate"></a>
<a id="tocSglobalsecondaryindexupdate"></a>
<a id="tocsglobalsecondaryindexupdate"></a>

```json
{
  "Update": {
    "IndexName": {},
    "ProvisionedThroughput": {
      "ReadCapacityUnits": {},
      "WriteCapacityUnits": {}
    }
  },
  "Create": {
    "IndexName": {},
    "KeySchema": {},
    "Projection": {
      "ProjectionType": {},
      "NonKeyAttributes": {}
    },
    "ProvisionedThroughput": {
      "ReadCapacityUnits": {},
      "WriteCapacityUnits": {}
    }
  },
  "Delete": {
    "IndexName": {}
  }
}
```

<p>Represents one of the following:</p> <ul> <li> <p>A new global secondary index to be added to an existing table.</p> </li> <li> <p>New provisioned throughput parameters for an existing global secondary index.</p> </li> <li> <p>An existing global secondary index to be removed from an existing table.</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Update|object|false|none|none|
|Create|object|false|none|none|
|Delete|object|false|none|none|

<h2 id="tocS_GlobalSecondaryIndexUpdateList">GlobalSecondaryIndexUpdateList</h2>
<!-- backwards compatibility -->
<a id="schemaglobalsecondaryindexupdatelist"></a>
<a id="schema_GlobalSecondaryIndexUpdateList"></a>
<a id="tocSglobalsecondaryindexupdatelist"></a>
<a id="tocsglobalsecondaryindexupdatelist"></a>

```json
[
  {
    "Update": {
      "IndexName": {},
      "ProvisionedThroughput": {
        "ReadCapacityUnits": {},
        "WriteCapacityUnits": {}
      }
    },
    "Create": {
      "IndexName": {},
      "KeySchema": {},
      "Projection": {
        "ProjectionType": {},
        "NonKeyAttributes": {}
      },
      "ProvisionedThroughput": {
        "ReadCapacityUnits": {},
        "WriteCapacityUnits": {}
      }
    },
    "Delete": {
      "IndexName": {}
    }
  }
]
```

<h2 id="tocS_GlobalSecondaryIndexes">GlobalSecondaryIndexes</h2>
<!-- backwards compatibility -->
<a id="schemaglobalsecondaryindexes"></a>
<a id="schema_GlobalSecondaryIndexes"></a>
<a id="tocSglobalsecondaryindexes"></a>
<a id="tocsglobalsecondaryindexes"></a>

```json
[
  {
    "IndexName": {},
    "KeySchema": {},
    "Projection": {
      "ProjectionType": {},
      "NonKeyAttributes": {}
    },
    "ProvisionedThroughput": {
      "ReadCapacityUnits": {},
      "WriteCapacityUnits": {}
    }
  }
]
```

<h2 id="tocS_GlobalTable">GlobalTable</h2>
<!-- backwards compatibility -->
<a id="schemaglobaltable"></a>
<a id="schema_GlobalTable"></a>
<a id="tocSglobaltable"></a>
<a id="tocsglobaltable"></a>

```json
{
  "GlobalTableName": {},
  "ReplicationGroup": {}
}
```

Represents the properties of a global table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalTableName|object|false|none|none|
|ReplicationGroup|object|false|none|none|

<h2 id="tocS_GlobalTableArnString">GlobalTableArnString</h2>
<!-- backwards compatibility -->
<a id="schemaglobaltablearnstring"></a>
<a id="schema_GlobalTableArnString"></a>
<a id="tocSglobaltablearnstring"></a>
<a id="tocsglobaltablearnstring"></a>

```json
"string"
```

<h2 id="tocS_ReplicaDescriptionList">ReplicaDescriptionList</h2>
<!-- backwards compatibility -->
<a id="schemareplicadescriptionlist"></a>
<a id="schema_ReplicaDescriptionList"></a>
<a id="tocSreplicadescriptionlist"></a>
<a id="tocsreplicadescriptionlist"></a>

```json
[
  {
    "RegionName": {},
    "ReplicaStatus": {},
    "ReplicaStatusDescription": {},
    "ReplicaStatusPercentProgress": {},
    "KMSMasterKeyId": {},
    "ProvisionedThroughputOverride": {
      "ReadCapacityUnits": {}
    },
    "GlobalSecondaryIndexes": {},
    "ReplicaInaccessibleDateTime": {},
    "ReplicaTableClassSummary": {
      "TableClass": {},
      "LastUpdateDateTime": {}
    }
  }
]
```

<h2 id="tocS_GlobalTableStatus">GlobalTableStatus</h2>
<!-- backwards compatibility -->
<a id="schemaglobaltablestatus"></a>
<a id="schema_GlobalTableStatus"></a>
<a id="tocSglobaltablestatus"></a>
<a id="tocsglobaltablestatus"></a>

```json
"CREATING"
```

<h2 id="tocS_GlobalTableGlobalSecondaryIndexSettingsUpdate">GlobalTableGlobalSecondaryIndexSettingsUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaglobaltableglobalsecondaryindexsettingsupdate"></a>
<a id="schema_GlobalTableGlobalSecondaryIndexSettingsUpdate"></a>
<a id="tocSglobaltableglobalsecondaryindexsettingsupdate"></a>
<a id="tocsglobaltableglobalsecondaryindexsettingsupdate"></a>

```json
{
  "IndexName": {},
  "ProvisionedWriteCapacityUnits": {},
  "ProvisionedWriteCapacityAutoScalingSettingsUpdate": {
    "MinimumUnits": {},
    "MaximumUnits": {},
    "AutoScalingDisabled": {},
    "AutoScalingRoleArn": {},
    "ScalingPolicyUpdate": {
      "PolicyName": {},
      "TargetTrackingScalingPolicyConfiguration": {
        "DisableScaleIn": {},
        "ScaleInCooldown": {},
        "ScaleOutCooldown": {},
        "TargetValue": {}
      }
    }
  }
}
```

Represents the settings of a global secondary index for a global table that will be modified.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexName|object|true|none|none|
|ProvisionedWriteCapacityUnits|object|false|none|none|
|ProvisionedWriteCapacityAutoScalingSettingsUpdate|object|false|none|none|

<h2 id="tocS_GlobalTableGlobalSecondaryIndexSettingsUpdateList">GlobalTableGlobalSecondaryIndexSettingsUpdateList</h2>
<!-- backwards compatibility -->
<a id="schemaglobaltableglobalsecondaryindexsettingsupdatelist"></a>
<a id="schema_GlobalTableGlobalSecondaryIndexSettingsUpdateList"></a>
<a id="tocSglobaltableglobalsecondaryindexsettingsupdatelist"></a>
<a id="tocsglobaltableglobalsecondaryindexsettingsupdatelist"></a>

```json
[
  {
    "IndexName": {},
    "ProvisionedWriteCapacityUnits": {},
    "ProvisionedWriteCapacityAutoScalingSettingsUpdate": {
      "MinimumUnits": {},
      "MaximumUnits": {},
      "AutoScalingDisabled": {},
      "AutoScalingRoleArn": {},
      "ScalingPolicyUpdate": {
        "PolicyName": {},
        "TargetTrackingScalingPolicyConfiguration": {
          "DisableScaleIn": {},
          "ScaleInCooldown": {},
          "ScaleOutCooldown": {},
          "TargetValue": {}
        }
      }
    }
  }
]
```

<h2 id="tocS_GlobalTableList">GlobalTableList</h2>
<!-- backwards compatibility -->
<a id="schemaglobaltablelist"></a>
<a id="schema_GlobalTableList"></a>
<a id="tocSglobaltablelist"></a>
<a id="tocsglobaltablelist"></a>

```json
[
  {
    "GlobalTableName": {},
    "ReplicationGroup": {}
  }
]
```

<h2 id="tocS_ImportEndTime">ImportEndTime</h2>
<!-- backwards compatibility -->
<a id="schemaimportendtime"></a>
<a id="schema_ImportEndTime"></a>
<a id="tocSimportendtime"></a>
<a id="tocsimportendtime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_ImportNextToken">ImportNextToken</h2>
<!-- backwards compatibility -->
<a id="schemaimportnexttoken"></a>
<a id="schema_ImportNextToken"></a>
<a id="tocSimportnexttoken"></a>
<a id="tocsimportnexttoken"></a>

```json
"stringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstri"
```

<h2 id="tocS_ImportStartTime">ImportStartTime</h2>
<!-- backwards compatibility -->
<a id="schemaimportstarttime"></a>
<a id="schema_ImportStartTime"></a>
<a id="tocSimportstarttime"></a>
<a id="tocsimportstarttime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_ImportStatus">ImportStatus</h2>
<!-- backwards compatibility -->
<a id="schemaimportstatus"></a>
<a id="schema_ImportStatus"></a>
<a id="tocSimportstatus"></a>
<a id="tocsimportstatus"></a>

```json
"IN_PROGRESS"
```

<h2 id="tocS_S3BucketSource">S3BucketSource</h2>
<!-- backwards compatibility -->
<a id="schemas3bucketsource"></a>
<a id="schema_S3BucketSource"></a>
<a id="tocSs3bucketsource"></a>
<a id="tocss3bucketsource"></a>

```json
{
  "S3BucketOwner": {},
  "S3Bucket": {},
  "S3KeyPrefix": {}
}
```

 The S3 bucket that is being imported from.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3BucketOwner|object|false|none|none|
|S3Bucket|object|true|none|none|
|S3KeyPrefix|object|false|none|none|

<h2 id="tocS_InputFormat">InputFormat</h2>
<!-- backwards compatibility -->
<a id="schemainputformat"></a>
<a id="schema_InputFormat"></a>
<a id="tocSinputformat"></a>
<a id="tocsinputformat"></a>

```json
"DYNAMODB_JSON"
```

<h2 id="tocS_ImportSummary">ImportSummary</h2>
<!-- backwards compatibility -->
<a id="schemaimportsummary"></a>
<a id="schema_ImportSummary"></a>
<a id="tocSimportsummary"></a>
<a id="tocsimportsummary"></a>

```json
{
  "ImportArn": {},
  "ImportStatus": {},
  "TableArn": {},
  "S3BucketSource": {
    "S3BucketOwner": {},
    "S3Bucket": {},
    "S3KeyPrefix": {}
  },
  "CloudWatchLogGroupArn": {},
  "InputFormat": {},
  "StartTime": {},
  "EndTime": {}
}
```

 Summary information about the source file for the import.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ImportArn|object|false|none|none|
|ImportStatus|object|false|none|none|
|TableArn|object|false|none|none|
|S3BucketSource|object|false|none|none|
|CloudWatchLogGroupArn|object|false|none|none|
|InputFormat|object|false|none|none|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|

<h2 id="tocS_ImportSummaryList">ImportSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaimportsummarylist"></a>
<a id="schema_ImportSummaryList"></a>
<a id="tocSimportsummarylist"></a>
<a id="tocsimportsummarylist"></a>

```json
[
  {
    "ImportArn": {},
    "ImportStatus": {},
    "TableArn": {},
    "S3BucketSource": {
      "S3BucketOwner": {},
      "S3Bucket": {},
      "S3KeyPrefix": {}
    },
    "CloudWatchLogGroupArn": {},
    "InputFormat": {},
    "StartTime": {},
    "EndTime": {}
  }
]
```

<h2 id="tocS_InputFormatOptions">InputFormatOptions</h2>
<!-- backwards compatibility -->
<a id="schemainputformatoptions"></a>
<a id="schema_InputFormatOptions"></a>
<a id="tocSinputformatoptions"></a>
<a id="tocsinputformatoptions"></a>

```json
{
  "Csv": {
    "Delimiter": {},
    "HeaderList": {}
  }
}
```

 The format options for the data that was imported into the target table. There is one value, CsvOption.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Csv|object|false|none|none|

<h2 id="tocS_InputCompressionType">InputCompressionType</h2>
<!-- backwards compatibility -->
<a id="schemainputcompressiontype"></a>
<a id="schema_InputCompressionType"></a>
<a id="tocSinputcompressiontype"></a>
<a id="tocsinputcompressiontype"></a>

```json
"GZIP"
```

<h2 id="tocS_TableCreationParameters">TableCreationParameters</h2>
<!-- backwards compatibility -->
<a id="schematablecreationparameters"></a>
<a id="schema_TableCreationParameters"></a>
<a id="tocStablecreationparameters"></a>
<a id="tocstablecreationparameters"></a>

```json
{
  "TableName": {},
  "AttributeDefinitions": {},
  "KeySchema": {},
  "BillingMode": {},
  "ProvisionedThroughput": {
    "ReadCapacityUnits": {},
    "WriteCapacityUnits": {}
  },
  "SSESpecification": {
    "Enabled": {},
    "SSEType": {},
    "KMSMasterKeyId": {}
  },
  "GlobalSecondaryIndexes": {}
}
```

 The parameters for the table created as part of the import operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableName|object|true|none|none|
|AttributeDefinitions|object|true|none|none|
|KeySchema|object|true|none|none|
|BillingMode|object|false|none|none|
|ProvisionedThroughput|[ProvisionedThroughput](#schemaprovisionedthroughput)|false|none|<p>Represents the provisioned throughput settings for a specified table or index. The settings can be modified using the <code>UpdateTable</code> operation.</p> <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Service, Account, and Table Quotas</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>|
|SSESpecification|[SSESpecification](#schemassespecification)|false|none|Represents the settings used to enable server-side encryption.|
|GlobalSecondaryIndexes|object|false|none|none|

<h2 id="tocS_ProcessedItemCount">ProcessedItemCount</h2>
<!-- backwards compatibility -->
<a id="schemaprocesseditemcount"></a>
<a id="schema_ProcessedItemCount"></a>
<a id="tocSprocesseditemcount"></a>
<a id="tocsprocesseditemcount"></a>

```json
0
```

<h2 id="tocS_ImportedItemCount">ImportedItemCount</h2>
<!-- backwards compatibility -->
<a id="schemaimporteditemcount"></a>
<a id="schema_ImportedItemCount"></a>
<a id="tocSimporteditemcount"></a>
<a id="tocsimporteditemcount"></a>

```json
0
```

<h2 id="tocS_Integer">Integer</h2>
<!-- backwards compatibility -->
<a id="schemainteger"></a>
<a id="schema_Integer"></a>
<a id="tocSinteger"></a>
<a id="tocsinteger"></a>

```json
0
```

<h2 id="tocS_ItemCollectionKeyAttributeMap">ItemCollectionKeyAttributeMap</h2>
<!-- backwards compatibility -->
<a id="schemaitemcollectionkeyattributemap"></a>
<a id="schema_ItemCollectionKeyAttributeMap"></a>
<a id="tocSitemcollectionkeyattributemap"></a>
<a id="tocsitemcollectionkeyattributemap"></a>

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

<h2 id="tocS_ItemCollectionSizeEstimateRange">ItemCollectionSizeEstimateRange</h2>
<!-- backwards compatibility -->
<a id="schemaitemcollectionsizeestimaterange"></a>
<a id="schema_ItemCollectionSizeEstimateRange"></a>
<a id="tocSitemcollectionsizeestimaterange"></a>
<a id="tocsitemcollectionsizeestimaterange"></a>

```json
[
  0
]
```

<h2 id="tocS_ItemCollectionMetricsMultiple">ItemCollectionMetricsMultiple</h2>
<!-- backwards compatibility -->
<a id="schemaitemcollectionmetricsmultiple"></a>
<a id="schema_ItemCollectionMetricsMultiple"></a>
<a id="tocSitemcollectionmetricsmultiple"></a>
<a id="tocsitemcollectionmetricsmultiple"></a>

```json
[
  {
    "ItemCollectionKey": {
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
    "SizeEstimateRangeGB": {}
  }
]
```

<h2 id="tocS_ItemCollectionSizeEstimateBound">ItemCollectionSizeEstimateBound</h2>
<!-- backwards compatibility -->
<a id="schemaitemcollectionsizeestimatebound"></a>
<a id="schema_ItemCollectionSizeEstimateBound"></a>
<a id="tocSitemcollectionsizeestimatebound"></a>
<a id="tocsitemcollectionsizeestimatebound"></a>

```json
0
```

<h2 id="tocS_ItemResponse">ItemResponse</h2>
<!-- backwards compatibility -->
<a id="schemaitemresponse"></a>
<a id="schema_ItemResponse"></a>
<a id="tocSitemresponse"></a>
<a id="tocsitemresponse"></a>

```json
{
  "Item": {
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
}
```

Details for the requested item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Item|object|false|none|none|

<h2 id="tocS_KMSMasterKeyArn">KMSMasterKeyArn</h2>
<!-- backwards compatibility -->
<a id="schemakmsmasterkeyarn"></a>
<a id="schema_KMSMasterKeyArn"></a>
<a id="tocSkmsmasterkeyarn"></a>
<a id="tocskmsmasterkeyarn"></a>

```json
"string"
```

<h2 id="tocS_KeyConditions">KeyConditions</h2>
<!-- backwards compatibility -->
<a id="schemakeyconditions"></a>
<a id="schema_KeyConditions"></a>
<a id="tocSkeyconditions"></a>
<a id="tocskeyconditions"></a>

```json
{
  "property1": {
    "AttributeValueList": {},
    "ComparisonOperator": {}
  },
  "property2": {
    "AttributeValueList": {},
    "ComparisonOperator": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[Condition](#schemacondition)|false|none|<p>Represents the selection criteria for a <code>Query</code> or <code>Scan</code> operation:</p> <ul> <li> <p>For a <code>Query</code> operation, <code>Condition</code> is used for specifying the <code>KeyConditions</code> to use when querying a table or an index. For <code>KeyConditions</code>, only the following comparison operators are supported:</p> <p> <code>EQ \| LE \| LT \| GE \| GT \| BEGINS_WITH \| BETWEEN</code> </p> <p> <code>Condition</code> is also used in a <code>QueryFilter</code>, which evaluates the query results and returns only the desired values.</p> </li> <li> <p>For a <code>Scan</code> operation, <code>Condition</code> is used in a <code>ScanFilter</code>, which evaluates the scan results and returns only the desired values.</p> </li> </ul>|

<h2 id="tocS_KeyExpression">KeyExpression</h2>
<!-- backwards compatibility -->
<a id="schemakeyexpression"></a>
<a id="schema_KeyExpression"></a>
<a id="tocSkeyexpression"></a>
<a id="tocskeyexpression"></a>

```json
"string"
```

<h2 id="tocS_KeyList">KeyList</h2>
<!-- backwards compatibility -->
<a id="schemakeylist"></a>
<a id="schema_KeyList"></a>
<a id="tocSkeylist"></a>
<a id="tocskeylist"></a>

```json
[
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
]
```

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

<h2 id="tocS_KeyType">KeyType</h2>
<!-- backwards compatibility -->
<a id="schemakeytype"></a>
<a id="schema_KeyType"></a>
<a id="tocSkeytype"></a>
<a id="tocskeytype"></a>

```json
"HASH"
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

<h2 id="tocS_KinesisDataStreamDestination">KinesisDataStreamDestination</h2>
<!-- backwards compatibility -->
<a id="schemakinesisdatastreamdestination"></a>
<a id="schema_KinesisDataStreamDestination"></a>
<a id="tocSkinesisdatastreamdestination"></a>
<a id="tocskinesisdatastreamdestination"></a>

```json
{
  "StreamArn": {},
  "DestinationStatus": {},
  "DestinationStatusDescription": {}
}
```

Describes a Kinesis data stream destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamArn|object|false|none|none|
|DestinationStatus|object|false|none|none|
|DestinationStatusDescription|object|false|none|none|

<h2 id="tocS_TimeRangeLowerBound">TimeRangeLowerBound</h2>
<!-- backwards compatibility -->
<a id="schematimerangelowerbound"></a>
<a id="schema_TimeRangeLowerBound"></a>
<a id="tocStimerangelowerbound"></a>
<a id="tocstimerangelowerbound"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_TimeRangeUpperBound">TimeRangeUpperBound</h2>
<!-- backwards compatibility -->
<a id="schematimerangeupperbound"></a>
<a id="schema_TimeRangeUpperBound"></a>
<a id="tocStimerangeupperbound"></a>
<a id="tocstimerangeupperbound"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_NextTokenString">NextTokenString</h2>
<!-- backwards compatibility -->
<a id="schemanexttokenstring"></a>
<a id="schema_NextTokenString"></a>
<a id="tocSnexttokenstring"></a>
<a id="tocsnexttokenstring"></a>

```json
"string"
```

<h2 id="tocS_ListContributorInsightsLimit">ListContributorInsightsLimit</h2>
<!-- backwards compatibility -->
<a id="schemalistcontributorinsightslimit"></a>
<a id="schema_ListContributorInsightsLimit"></a>
<a id="tocSlistcontributorinsightslimit"></a>
<a id="tocslistcontributorinsightslimit"></a>

```json
0
```

<h2 id="tocS_ListExportsMaxLimit">ListExportsMaxLimit</h2>
<!-- backwards compatibility -->
<a id="schemalistexportsmaxlimit"></a>
<a id="schema_ListExportsMaxLimit"></a>
<a id="tocSlistexportsmaxlimit"></a>
<a id="tocslistexportsmaxlimit"></a>

```json
1
```

<h2 id="tocS_ListImportsMaxLimit">ListImportsMaxLimit</h2>
<!-- backwards compatibility -->
<a id="schemalistimportsmaxlimit"></a>
<a id="schema_ListImportsMaxLimit"></a>
<a id="tocSlistimportsmaxlimit"></a>
<a id="tocslistimportsmaxlimit"></a>

```json
1
```

<h2 id="tocS_ListTablesInputLimit">ListTablesInputLimit</h2>
<!-- backwards compatibility -->
<a id="schemalisttablesinputlimit"></a>
<a id="schema_ListTablesInputLimit"></a>
<a id="tocSlisttablesinputlimit"></a>
<a id="tocslisttablesinputlimit"></a>

```json
1
```

<h2 id="tocS_TableNameList">TableNameList</h2>
<!-- backwards compatibility -->
<a id="schematablenamelist"></a>
<a id="schema_TableNameList"></a>
<a id="tocStablenamelist"></a>
<a id="tocstablenamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ResourceArnString">ResourceArnString</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearnstring"></a>
<a id="schema_ResourceArnString"></a>
<a id="tocSresourcearnstring"></a>
<a id="tocsresourcearnstring"></a>

```json
"string"
```

<h2 id="tocS_LocalSecondaryIndex">LocalSecondaryIndex</h2>
<!-- backwards compatibility -->
<a id="schemalocalsecondaryindex"></a>
<a id="schema_LocalSecondaryIndex"></a>
<a id="tocSlocalsecondaryindex"></a>
<a id="tocslocalsecondaryindex"></a>

```json
{
  "IndexName": {},
  "KeySchema": {},
  "Projection": {
    "ProjectionType": {},
    "NonKeyAttributes": {}
  }
}
```

Represents the properties of a local secondary index.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexName|object|true|none|none|
|KeySchema|object|true|none|none|
|Projection|object|true|none|none|

<h2 id="tocS_LocalSecondaryIndexDescription">LocalSecondaryIndexDescription</h2>
<!-- backwards compatibility -->
<a id="schemalocalsecondaryindexdescription"></a>
<a id="schema_LocalSecondaryIndexDescription"></a>
<a id="tocSlocalsecondaryindexdescription"></a>
<a id="tocslocalsecondaryindexdescription"></a>

```json
{
  "IndexName": {},
  "KeySchema": {},
  "Projection": {
    "ProjectionType": {},
    "NonKeyAttributes": {}
  },
  "IndexSizeBytes": {},
  "ItemCount": {},
  "IndexArn": {}
}
```

Represents the properties of a local secondary index.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexName|object|false|none|none|
|KeySchema|object|false|none|none|
|Projection|object|false|none|none|
|IndexSizeBytes|object|false|none|none|
|ItemCount|object|false|none|none|
|IndexArn|object|false|none|none|

<h2 id="tocS_LocalSecondaryIndexDescriptionList">LocalSecondaryIndexDescriptionList</h2>
<!-- backwards compatibility -->
<a id="schemalocalsecondaryindexdescriptionlist"></a>
<a id="schema_LocalSecondaryIndexDescriptionList"></a>
<a id="tocSlocalsecondaryindexdescriptionlist"></a>
<a id="tocslocalsecondaryindexdescriptionlist"></a>

```json
[
  {
    "IndexName": {},
    "KeySchema": {},
    "Projection": {
      "ProjectionType": {},
      "NonKeyAttributes": {}
    },
    "IndexSizeBytes": {},
    "ItemCount": {},
    "IndexArn": {}
  }
]
```

<h2 id="tocS_LocalSecondaryIndexInfo">LocalSecondaryIndexInfo</h2>
<!-- backwards compatibility -->
<a id="schemalocalsecondaryindexinfo"></a>
<a id="schema_LocalSecondaryIndexInfo"></a>
<a id="tocSlocalsecondaryindexinfo"></a>
<a id="tocslocalsecondaryindexinfo"></a>

```json
{
  "IndexName": {},
  "KeySchema": {},
  "Projection": {
    "ProjectionType": {},
    "NonKeyAttributes": {}
  }
}
```

Represents the properties of a local secondary index for the table when the backup was created.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexName|object|false|none|none|
|KeySchema|object|false|none|none|
|Projection|object|false|none|none|

<h2 id="tocS_LocalSecondaryIndexes">LocalSecondaryIndexes</h2>
<!-- backwards compatibility -->
<a id="schemalocalsecondaryindexes"></a>
<a id="schema_LocalSecondaryIndexes"></a>
<a id="tocSlocalsecondaryindexes"></a>
<a id="tocslocalsecondaryindexes"></a>

```json
[
  {
    "IndexName": {},
    "KeySchema": {},
    "Projection": {
      "ProjectionType": {},
      "NonKeyAttributes": {}
    }
  }
]
```

<h2 id="tocS_NonKeyAttributeName">NonKeyAttributeName</h2>
<!-- backwards compatibility -->
<a id="schemanonkeyattributename"></a>
<a id="schema_NonKeyAttributeName"></a>
<a id="tocSnonkeyattributename"></a>
<a id="tocsnonkeyattributename"></a>

```json
"string"
```

<h2 id="tocS_NonKeyAttributeNameList">NonKeyAttributeNameList</h2>
<!-- backwards compatibility -->
<a id="schemanonkeyattributenamelist"></a>
<a id="schema_NonKeyAttributeNameList"></a>
<a id="tocSnonkeyattributenamelist"></a>
<a id="tocsnonkeyattributenamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_NonNegativeLongObject">NonNegativeLongObject</h2>
<!-- backwards compatibility -->
<a id="schemanonnegativelongobject"></a>
<a id="schema_NonNegativeLongObject"></a>
<a id="tocSnonnegativelongobject"></a>
<a id="tocsnonnegativelongobject"></a>

```json
0
```

<h2 id="tocS_ParameterizedStatement">ParameterizedStatement</h2>
<!-- backwards compatibility -->
<a id="schemaparameterizedstatement"></a>
<a id="schema_ParameterizedStatement"></a>
<a id="tocSparameterizedstatement"></a>
<a id="tocsparameterizedstatement"></a>

```json
{
  "Statement": {},
  "Parameters": {},
  "ReturnValuesOnConditionCheckFailure": {}
}
```

 Represents a PartiQL statment that uses parameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Statement|object|true|none|none|
|Parameters|object|false|none|none|
|ReturnValuesOnConditionCheckFailure|object|false|none|none|

<h2 id="tocS_PointInTimeRecoveryStatus">PointInTimeRecoveryStatus</h2>
<!-- backwards compatibility -->
<a id="schemapointintimerecoverystatus"></a>
<a id="schema_PointInTimeRecoveryStatus"></a>
<a id="tocSpointintimerecoverystatus"></a>
<a id="tocspointintimerecoverystatus"></a>

```json
"ENABLED"
```

<h2 id="tocS_PointInTimeRecoverySpecification">PointInTimeRecoverySpecification</h2>
<!-- backwards compatibility -->
<a id="schemapointintimerecoveryspecification"></a>
<a id="schema_PointInTimeRecoverySpecification"></a>
<a id="tocSpointintimerecoveryspecification"></a>
<a id="tocspointintimerecoveryspecification"></a>

```json
{
  "PointInTimeRecoveryEnabled": {}
}
```

Represents the settings used to enable point in time recovery.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PointInTimeRecoveryEnabled|object|true|none|none|

<h2 id="tocS_ProjectionType">ProjectionType</h2>
<!-- backwards compatibility -->
<a id="schemaprojectiontype"></a>
<a id="schema_ProjectionType"></a>
<a id="tocSprojectiontype"></a>
<a id="tocsprojectiontype"></a>

```json
"ALL"
```

<h2 id="tocS_PutItemInputAttributeMap">PutItemInputAttributeMap</h2>
<!-- backwards compatibility -->
<a id="schemaputiteminputattributemap"></a>
<a id="schema_PutItemInputAttributeMap"></a>
<a id="tocSputiteminputattributemap"></a>
<a id="tocsputiteminputattributemap"></a>

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

<h2 id="tocS_Put">Put</h2>
<!-- backwards compatibility -->
<a id="schemaput"></a>
<a id="schema_Put"></a>
<a id="tocSput"></a>
<a id="tocsput"></a>

```json
{
  "Item": {
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
  "TableName": {},
  "ConditionExpression": {},
  "ExpressionAttributeNames": {
    "property1": "string",
    "property2": "string"
  },
  "ExpressionAttributeValues": {
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
  "ReturnValuesOnConditionCheckFailure": {}
}
```

Represents a request to perform a <code>PutItem</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Item|object|true|none|none|
|TableName|object|true|none|none|
|ConditionExpression|object|false|none|none|
|ExpressionAttributeNames|object|false|none|none|
|ExpressionAttributeValues|object|false|none|none|
|ReturnValuesOnConditionCheckFailure|object|false|none|none|

<h2 id="tocS_PutRequest">PutRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputrequest"></a>
<a id="schema_PutRequest"></a>
<a id="tocSputrequest"></a>
<a id="tocsputrequest"></a>

```json
{
  "Item": {
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
}
```

Represents a request to perform a <code>PutItem</code> operation on an item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Item|object|true|none|none|

<h2 id="tocS_Select">Select</h2>
<!-- backwards compatibility -->
<a id="schemaselect"></a>
<a id="schema_Select"></a>
<a id="tocSselect"></a>
<a id="tocsselect"></a>

```json
"ALL_ATTRIBUTES"
```

<h2 id="tocS_Replica">Replica</h2>
<!-- backwards compatibility -->
<a id="schemareplica"></a>
<a id="schema_Replica"></a>
<a id="tocSreplica"></a>
<a id="tocsreplica"></a>

```json
{
  "RegionName": {}
}
```

Represents the properties of a replica.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RegionName|object|false|none|none|

<h2 id="tocS_ReplicaGlobalSecondaryIndexAutoScalingDescriptionList">ReplicaGlobalSecondaryIndexAutoScalingDescriptionList</h2>
<!-- backwards compatibility -->
<a id="schemareplicaglobalsecondaryindexautoscalingdescriptionlist"></a>
<a id="schema_ReplicaGlobalSecondaryIndexAutoScalingDescriptionList"></a>
<a id="tocSreplicaglobalsecondaryindexautoscalingdescriptionlist"></a>
<a id="tocsreplicaglobalsecondaryindexautoscalingdescriptionlist"></a>

```json
[
  {
    "IndexName": {},
    "IndexStatus": {},
    "ProvisionedReadCapacityAutoScalingSettings": {
      "MinimumUnits": {},
      "MaximumUnits": {},
      "AutoScalingDisabled": {},
      "AutoScalingRoleArn": {},
      "ScalingPolicies": {}
    },
    "ProvisionedWriteCapacityAutoScalingSettings": {
      "MinimumUnits": {},
      "MaximumUnits": {},
      "AutoScalingDisabled": {},
      "AutoScalingRoleArn": {},
      "ScalingPolicies": {}
    }
  }
]
```

<h2 id="tocS_ReplicaStatus">ReplicaStatus</h2>
<!-- backwards compatibility -->
<a id="schemareplicastatus"></a>
<a id="schema_ReplicaStatus"></a>
<a id="tocSreplicastatus"></a>
<a id="tocsreplicastatus"></a>

```json
"CREATING"
```

<h2 id="tocS_ReplicaAutoScalingDescription">ReplicaAutoScalingDescription</h2>
<!-- backwards compatibility -->
<a id="schemareplicaautoscalingdescription"></a>
<a id="schema_ReplicaAutoScalingDescription"></a>
<a id="tocSreplicaautoscalingdescription"></a>
<a id="tocsreplicaautoscalingdescription"></a>

```json
{
  "RegionName": {},
  "GlobalSecondaryIndexes": {},
  "ReplicaProvisionedReadCapacityAutoScalingSettings": {
    "MinimumUnits": {},
    "MaximumUnits": {},
    "AutoScalingDisabled": {},
    "AutoScalingRoleArn": {},
    "ScalingPolicies": {}
  },
  "ReplicaProvisionedWriteCapacityAutoScalingSettings": {
    "MinimumUnits": {},
    "MaximumUnits": {},
    "AutoScalingDisabled": {},
    "AutoScalingRoleArn": {},
    "ScalingPolicies": {}
  },
  "ReplicaStatus": {}
}
```

Represents the auto scaling settings of the replica.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RegionName|object|false|none|none|
|GlobalSecondaryIndexes|object|false|none|none|
|ReplicaProvisionedReadCapacityAutoScalingSettings|[AutoScalingSettingsDescription](#schemaautoscalingsettingsdescription)|false|none|Represents the auto scaling settings for a global table or global secondary index.|
|ReplicaProvisionedWriteCapacityAutoScalingSettings|[AutoScalingSettingsDescription](#schemaautoscalingsettingsdescription)|false|none|Represents the auto scaling settings for a global table or global secondary index.|
|ReplicaStatus|object|false|none|none|

<h2 id="tocS_ReplicaAutoScalingDescriptionList">ReplicaAutoScalingDescriptionList</h2>
<!-- backwards compatibility -->
<a id="schemareplicaautoscalingdescriptionlist"></a>
<a id="schema_ReplicaAutoScalingDescriptionList"></a>
<a id="tocSreplicaautoscalingdescriptionlist"></a>
<a id="tocsreplicaautoscalingdescriptionlist"></a>

```json
[
  {
    "RegionName": {},
    "GlobalSecondaryIndexes": {},
    "ReplicaProvisionedReadCapacityAutoScalingSettings": {
      "MinimumUnits": {},
      "MaximumUnits": {},
      "AutoScalingDisabled": {},
      "AutoScalingRoleArn": {},
      "ScalingPolicies": {}
    },
    "ReplicaProvisionedWriteCapacityAutoScalingSettings": {
      "MinimumUnits": {},
      "MaximumUnits": {},
      "AutoScalingDisabled": {},
      "AutoScalingRoleArn": {},
      "ScalingPolicies": {}
    },
    "ReplicaStatus": {}
  }
]
```

<h2 id="tocS_ReplicaGlobalSecondaryIndexAutoScalingUpdateList">ReplicaGlobalSecondaryIndexAutoScalingUpdateList</h2>
<!-- backwards compatibility -->
<a id="schemareplicaglobalsecondaryindexautoscalingupdatelist"></a>
<a id="schema_ReplicaGlobalSecondaryIndexAutoScalingUpdateList"></a>
<a id="tocSreplicaglobalsecondaryindexautoscalingupdatelist"></a>
<a id="tocsreplicaglobalsecondaryindexautoscalingupdatelist"></a>

```json
[
  {
    "IndexName": {},
    "ProvisionedReadCapacityAutoScalingUpdate": {
      "MinimumUnits": {},
      "MaximumUnits": {},
      "AutoScalingDisabled": {},
      "AutoScalingRoleArn": {},
      "ScalingPolicyUpdate": {
        "PolicyName": {},
        "TargetTrackingScalingPolicyConfiguration": {
          "DisableScaleIn": {},
          "ScaleInCooldown": {},
          "ScaleOutCooldown": {},
          "TargetValue": {}
        }
      }
    }
  }
]
```

<h2 id="tocS_ReplicaAutoScalingUpdate">ReplicaAutoScalingUpdate</h2>
<!-- backwards compatibility -->
<a id="schemareplicaautoscalingupdate"></a>
<a id="schema_ReplicaAutoScalingUpdate"></a>
<a id="tocSreplicaautoscalingupdate"></a>
<a id="tocsreplicaautoscalingupdate"></a>

```json
{
  "RegionName": {},
  "ReplicaGlobalSecondaryIndexUpdates": {},
  "ReplicaProvisionedReadCapacityAutoScalingUpdate": {
    "MinimumUnits": {},
    "MaximumUnits": {},
    "AutoScalingDisabled": {},
    "AutoScalingRoleArn": {},
    "ScalingPolicyUpdate": {
      "PolicyName": {},
      "TargetTrackingScalingPolicyConfiguration": {
        "DisableScaleIn": {},
        "ScaleInCooldown": {},
        "ScaleOutCooldown": {},
        "TargetValue": {}
      }
    }
  }
}
```

Represents the auto scaling settings of a replica that will be modified.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RegionName|object|true|none|none|
|ReplicaGlobalSecondaryIndexUpdates|object|false|none|none|
|ReplicaProvisionedReadCapacityAutoScalingUpdate|[AutoScalingSettingsUpdate](#schemaautoscalingsettingsupdate)|false|none|Represents the auto scaling settings to be modified for a global table or global secondary index.|

<h2 id="tocS_ReplicaAutoScalingUpdateList">ReplicaAutoScalingUpdateList</h2>
<!-- backwards compatibility -->
<a id="schemareplicaautoscalingupdatelist"></a>
<a id="schema_ReplicaAutoScalingUpdateList"></a>
<a id="tocSreplicaautoscalingupdatelist"></a>
<a id="tocsreplicaautoscalingupdatelist"></a>

```json
[
  {
    "RegionName": {},
    "ReplicaGlobalSecondaryIndexUpdates": {},
    "ReplicaProvisionedReadCapacityAutoScalingUpdate": {
      "MinimumUnits": {},
      "MaximumUnits": {},
      "AutoScalingDisabled": {},
      "AutoScalingRoleArn": {},
      "ScalingPolicyUpdate": {
        "PolicyName": {},
        "TargetTrackingScalingPolicyConfiguration": {
          "DisableScaleIn": {},
          "ScaleInCooldown": {},
          "ScaleOutCooldown": {},
          "TargetValue": {}
        }
      }
    }
  }
]
```

<h2 id="tocS_ReplicaStatusDescription">ReplicaStatusDescription</h2>
<!-- backwards compatibility -->
<a id="schemareplicastatusdescription"></a>
<a id="schema_ReplicaStatusDescription"></a>
<a id="tocSreplicastatusdescription"></a>
<a id="tocsreplicastatusdescription"></a>

```json
"string"
```

<h2 id="tocS_ReplicaStatusPercentProgress">ReplicaStatusPercentProgress</h2>
<!-- backwards compatibility -->
<a id="schemareplicastatuspercentprogress"></a>
<a id="schema_ReplicaStatusPercentProgress"></a>
<a id="tocSreplicastatuspercentprogress"></a>
<a id="tocsreplicastatuspercentprogress"></a>

```json
"string"
```

<h2 id="tocS_ReplicaGlobalSecondaryIndexDescriptionList">ReplicaGlobalSecondaryIndexDescriptionList</h2>
<!-- backwards compatibility -->
<a id="schemareplicaglobalsecondaryindexdescriptionlist"></a>
<a id="schema_ReplicaGlobalSecondaryIndexDescriptionList"></a>
<a id="tocSreplicaglobalsecondaryindexdescriptionlist"></a>
<a id="tocsreplicaglobalsecondaryindexdescriptionlist"></a>

```json
[
  {
    "IndexName": {},
    "ProvisionedThroughputOverride": {
      "ReadCapacityUnits": {}
    }
  }
]
```

<h2 id="tocS_TableClassSummary">TableClassSummary</h2>
<!-- backwards compatibility -->
<a id="schematableclasssummary"></a>
<a id="schema_TableClassSummary"></a>
<a id="tocStableclasssummary"></a>
<a id="tocstableclasssummary"></a>

```json
{
  "TableClass": {},
  "LastUpdateDateTime": {}
}
```

Contains details of the table class.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableClass|object|false|none|none|
|LastUpdateDateTime|object|false|none|none|

<h2 id="tocS_ReplicaDescription">ReplicaDescription</h2>
<!-- backwards compatibility -->
<a id="schemareplicadescription"></a>
<a id="schema_ReplicaDescription"></a>
<a id="tocSreplicadescription"></a>
<a id="tocsreplicadescription"></a>

```json
{
  "RegionName": {},
  "ReplicaStatus": {},
  "ReplicaStatusDescription": {},
  "ReplicaStatusPercentProgress": {},
  "KMSMasterKeyId": {},
  "ProvisionedThroughputOverride": {
    "ReadCapacityUnits": {}
  },
  "GlobalSecondaryIndexes": {},
  "ReplicaInaccessibleDateTime": {},
  "ReplicaTableClassSummary": {
    "TableClass": {},
    "LastUpdateDateTime": {}
  }
}
```

Contains the details of the replica.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RegionName|object|false|none|none|
|ReplicaStatus|object|false|none|none|
|ReplicaStatusDescription|object|false|none|none|
|ReplicaStatusPercentProgress|object|false|none|none|
|KMSMasterKeyId|object|false|none|none|
|ProvisionedThroughputOverride|object|false|none|none|
|GlobalSecondaryIndexes|object|false|none|none|
|ReplicaInaccessibleDateTime|object|false|none|none|
|ReplicaTableClassSummary|[TableClassSummary](#schematableclasssummary)|false|none|Contains details of the table class.|

<h2 id="tocS_ReplicaGlobalSecondaryIndex">ReplicaGlobalSecondaryIndex</h2>
<!-- backwards compatibility -->
<a id="schemareplicaglobalsecondaryindex"></a>
<a id="schema_ReplicaGlobalSecondaryIndex"></a>
<a id="tocSreplicaglobalsecondaryindex"></a>
<a id="tocsreplicaglobalsecondaryindex"></a>

```json
{
  "IndexName": {},
  "ProvisionedThroughputOverride": {
    "ReadCapacityUnits": {}
  }
}
```

Represents the properties of a replica global secondary index.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexName|object|true|none|none|
|ProvisionedThroughputOverride|object|false|none|none|

<h2 id="tocS_ReplicaGlobalSecondaryIndexAutoScalingDescription">ReplicaGlobalSecondaryIndexAutoScalingDescription</h2>
<!-- backwards compatibility -->
<a id="schemareplicaglobalsecondaryindexautoscalingdescription"></a>
<a id="schema_ReplicaGlobalSecondaryIndexAutoScalingDescription"></a>
<a id="tocSreplicaglobalsecondaryindexautoscalingdescription"></a>
<a id="tocsreplicaglobalsecondaryindexautoscalingdescription"></a>

```json
{
  "IndexName": {},
  "IndexStatus": {},
  "ProvisionedReadCapacityAutoScalingSettings": {
    "MinimumUnits": {},
    "MaximumUnits": {},
    "AutoScalingDisabled": {},
    "AutoScalingRoleArn": {},
    "ScalingPolicies": {}
  },
  "ProvisionedWriteCapacityAutoScalingSettings": {
    "MinimumUnits": {},
    "MaximumUnits": {},
    "AutoScalingDisabled": {},
    "AutoScalingRoleArn": {},
    "ScalingPolicies": {}
  }
}
```

Represents the auto scaling configuration for a replica global secondary index.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexName|object|false|none|none|
|IndexStatus|object|false|none|none|
|ProvisionedReadCapacityAutoScalingSettings|[AutoScalingSettingsDescription](#schemaautoscalingsettingsdescription)|false|none|Represents the auto scaling settings for a global table or global secondary index.|
|ProvisionedWriteCapacityAutoScalingSettings|[AutoScalingSettingsDescription](#schemaautoscalingsettingsdescription)|false|none|Represents the auto scaling settings for a global table or global secondary index.|

<h2 id="tocS_ReplicaGlobalSecondaryIndexAutoScalingUpdate">ReplicaGlobalSecondaryIndexAutoScalingUpdate</h2>
<!-- backwards compatibility -->
<a id="schemareplicaglobalsecondaryindexautoscalingupdate"></a>
<a id="schema_ReplicaGlobalSecondaryIndexAutoScalingUpdate"></a>
<a id="tocSreplicaglobalsecondaryindexautoscalingupdate"></a>
<a id="tocsreplicaglobalsecondaryindexautoscalingupdate"></a>

```json
{
  "IndexName": {},
  "ProvisionedReadCapacityAutoScalingUpdate": {
    "MinimumUnits": {},
    "MaximumUnits": {},
    "AutoScalingDisabled": {},
    "AutoScalingRoleArn": {},
    "ScalingPolicyUpdate": {
      "PolicyName": {},
      "TargetTrackingScalingPolicyConfiguration": {
        "DisableScaleIn": {},
        "ScaleInCooldown": {},
        "ScaleOutCooldown": {},
        "TargetValue": {}
      }
    }
  }
}
```

Represents the auto scaling settings of a global secondary index for a replica that will be modified.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexName|object|false|none|none|
|ProvisionedReadCapacityAutoScalingUpdate|[AutoScalingSettingsUpdate](#schemaautoscalingsettingsupdate)|false|none|Represents the auto scaling settings to be modified for a global table or global secondary index.|

<h2 id="tocS_ReplicaGlobalSecondaryIndexDescription">ReplicaGlobalSecondaryIndexDescription</h2>
<!-- backwards compatibility -->
<a id="schemareplicaglobalsecondaryindexdescription"></a>
<a id="schema_ReplicaGlobalSecondaryIndexDescription"></a>
<a id="tocSreplicaglobalsecondaryindexdescription"></a>
<a id="tocsreplicaglobalsecondaryindexdescription"></a>

```json
{
  "IndexName": {},
  "ProvisionedThroughputOverride": {
    "ReadCapacityUnits": {}
  }
}
```

Represents the properties of a replica global secondary index.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexName|object|false|none|none|
|ProvisionedThroughputOverride|object|false|none|none|

<h2 id="tocS_ReplicaGlobalSecondaryIndexSettingsDescription">ReplicaGlobalSecondaryIndexSettingsDescription</h2>
<!-- backwards compatibility -->
<a id="schemareplicaglobalsecondaryindexsettingsdescription"></a>
<a id="schema_ReplicaGlobalSecondaryIndexSettingsDescription"></a>
<a id="tocSreplicaglobalsecondaryindexsettingsdescription"></a>
<a id="tocsreplicaglobalsecondaryindexsettingsdescription"></a>

```json
{
  "IndexName": {},
  "IndexStatus": {},
  "ProvisionedReadCapacityUnits": {},
  "ProvisionedReadCapacityAutoScalingSettings": {
    "MinimumUnits": {},
    "MaximumUnits": {},
    "AutoScalingDisabled": {},
    "AutoScalingRoleArn": {},
    "ScalingPolicies": {}
  },
  "ProvisionedWriteCapacityUnits": {},
  "ProvisionedWriteCapacityAutoScalingSettings": {
    "MinimumUnits": {},
    "MaximumUnits": {},
    "AutoScalingDisabled": {},
    "AutoScalingRoleArn": {},
    "ScalingPolicies": {}
  }
}
```

Represents the properties of a global secondary index.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexName|object|true|none|none|
|IndexStatus|object|false|none|none|
|ProvisionedReadCapacityUnits|object|false|none|none|
|ProvisionedReadCapacityAutoScalingSettings|object|false|none|none|
|ProvisionedWriteCapacityUnits|object|false|none|none|
|ProvisionedWriteCapacityAutoScalingSettings|object|false|none|none|

<h2 id="tocS_ReplicaGlobalSecondaryIndexSettingsDescriptionList">ReplicaGlobalSecondaryIndexSettingsDescriptionList</h2>
<!-- backwards compatibility -->
<a id="schemareplicaglobalsecondaryindexsettingsdescriptionlist"></a>
<a id="schema_ReplicaGlobalSecondaryIndexSettingsDescriptionList"></a>
<a id="tocSreplicaglobalsecondaryindexsettingsdescriptionlist"></a>
<a id="tocsreplicaglobalsecondaryindexsettingsdescriptionlist"></a>

```json
[
  {
    "IndexName": {},
    "IndexStatus": {},
    "ProvisionedReadCapacityUnits": {},
    "ProvisionedReadCapacityAutoScalingSettings": {
      "MinimumUnits": {},
      "MaximumUnits": {},
      "AutoScalingDisabled": {},
      "AutoScalingRoleArn": {},
      "ScalingPolicies": {}
    },
    "ProvisionedWriteCapacityUnits": {},
    "ProvisionedWriteCapacityAutoScalingSettings": {
      "MinimumUnits": {},
      "MaximumUnits": {},
      "AutoScalingDisabled": {},
      "AutoScalingRoleArn": {},
      "ScalingPolicies": {}
    }
  }
]
```

<h2 id="tocS_ReplicaGlobalSecondaryIndexSettingsUpdate">ReplicaGlobalSecondaryIndexSettingsUpdate</h2>
<!-- backwards compatibility -->
<a id="schemareplicaglobalsecondaryindexsettingsupdate"></a>
<a id="schema_ReplicaGlobalSecondaryIndexSettingsUpdate"></a>
<a id="tocSreplicaglobalsecondaryindexsettingsupdate"></a>
<a id="tocsreplicaglobalsecondaryindexsettingsupdate"></a>

```json
{
  "IndexName": {},
  "ProvisionedReadCapacityUnits": {},
  "ProvisionedReadCapacityAutoScalingSettingsUpdate": {
    "MinimumUnits": {},
    "MaximumUnits": {},
    "AutoScalingDisabled": {},
    "AutoScalingRoleArn": {},
    "ScalingPolicyUpdate": {
      "PolicyName": {},
      "TargetTrackingScalingPolicyConfiguration": {
        "DisableScaleIn": {},
        "ScaleInCooldown": {},
        "ScaleOutCooldown": {},
        "TargetValue": {}
      }
    }
  }
}
```

Represents the settings of a global secondary index for a global table that will be modified.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexName|object|true|none|none|
|ProvisionedReadCapacityUnits|object|false|none|none|
|ProvisionedReadCapacityAutoScalingSettingsUpdate|object|false|none|none|

<h2 id="tocS_ReplicaGlobalSecondaryIndexSettingsUpdateList">ReplicaGlobalSecondaryIndexSettingsUpdateList</h2>
<!-- backwards compatibility -->
<a id="schemareplicaglobalsecondaryindexsettingsupdatelist"></a>
<a id="schema_ReplicaGlobalSecondaryIndexSettingsUpdateList"></a>
<a id="tocSreplicaglobalsecondaryindexsettingsupdatelist"></a>
<a id="tocsreplicaglobalsecondaryindexsettingsupdatelist"></a>

```json
[
  {
    "IndexName": {},
    "ProvisionedReadCapacityUnits": {},
    "ProvisionedReadCapacityAutoScalingSettingsUpdate": {
      "MinimumUnits": {},
      "MaximumUnits": {},
      "AutoScalingDisabled": {},
      "AutoScalingRoleArn": {},
      "ScalingPolicyUpdate": {
        "PolicyName": {},
        "TargetTrackingScalingPolicyConfiguration": {
          "DisableScaleIn": {},
          "ScaleInCooldown": {},
          "ScaleOutCooldown": {},
          "TargetValue": {}
        }
      }
    }
  }
]
```

<h2 id="tocS_ReplicaSettingsDescription">ReplicaSettingsDescription</h2>
<!-- backwards compatibility -->
<a id="schemareplicasettingsdescription"></a>
<a id="schema_ReplicaSettingsDescription"></a>
<a id="tocSreplicasettingsdescription"></a>
<a id="tocsreplicasettingsdescription"></a>

```json
{
  "RegionName": {},
  "ReplicaStatus": {},
  "ReplicaBillingModeSummary": {
    "BillingMode": {},
    "LastUpdateToPayPerRequestDateTime": {}
  },
  "ReplicaProvisionedReadCapacityUnits": {},
  "ReplicaProvisionedReadCapacityAutoScalingSettings": {
    "MinimumUnits": {},
    "MaximumUnits": {},
    "AutoScalingDisabled": {},
    "AutoScalingRoleArn": {},
    "ScalingPolicies": {}
  },
  "ReplicaProvisionedWriteCapacityUnits": {},
  "ReplicaProvisionedWriteCapacityAutoScalingSettings": {
    "MinimumUnits": {},
    "MaximumUnits": {},
    "AutoScalingDisabled": {},
    "AutoScalingRoleArn": {},
    "ScalingPolicies": {}
  },
  "ReplicaGlobalSecondaryIndexSettings": {},
  "ReplicaTableClassSummary": {
    "TableClass": {},
    "LastUpdateDateTime": {}
  }
}
```

Represents the properties of a replica.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RegionName|object|true|none|none|
|ReplicaStatus|object|false|none|none|
|ReplicaBillingModeSummary|object|false|none|none|
|ReplicaProvisionedReadCapacityUnits|object|false|none|none|
|ReplicaProvisionedReadCapacityAutoScalingSettings|object|false|none|none|
|ReplicaProvisionedWriteCapacityUnits|object|false|none|none|
|ReplicaProvisionedWriteCapacityAutoScalingSettings|object|false|none|none|
|ReplicaGlobalSecondaryIndexSettings|object|false|none|none|
|ReplicaTableClassSummary|[TableClassSummary](#schematableclasssummary)|false|none|Contains details of the table class.|

<h2 id="tocS_ReplicaSettingsUpdate">ReplicaSettingsUpdate</h2>
<!-- backwards compatibility -->
<a id="schemareplicasettingsupdate"></a>
<a id="schema_ReplicaSettingsUpdate"></a>
<a id="tocSreplicasettingsupdate"></a>
<a id="tocsreplicasettingsupdate"></a>

```json
{
  "RegionName": {},
  "ReplicaProvisionedReadCapacityUnits": {},
  "ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate": {
    "MinimumUnits": {},
    "MaximumUnits": {},
    "AutoScalingDisabled": {},
    "AutoScalingRoleArn": {},
    "ScalingPolicyUpdate": {
      "PolicyName": {},
      "TargetTrackingScalingPolicyConfiguration": {
        "DisableScaleIn": {},
        "ScaleInCooldown": {},
        "ScaleOutCooldown": {},
        "TargetValue": {}
      }
    }
  },
  "ReplicaGlobalSecondaryIndexSettingsUpdate": {},
  "ReplicaTableClass": {}
}
```

Represents the settings for a global table in a Region that will be modified.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RegionName|object|true|none|none|
|ReplicaProvisionedReadCapacityUnits|object|false|none|none|
|ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate|object|false|none|none|
|ReplicaGlobalSecondaryIndexSettingsUpdate|object|false|none|none|
|ReplicaTableClass|object|false|none|none|

<h2 id="tocS_ReplicaSettingsUpdateList">ReplicaSettingsUpdateList</h2>
<!-- backwards compatibility -->
<a id="schemareplicasettingsupdatelist"></a>
<a id="schema_ReplicaSettingsUpdateList"></a>
<a id="tocSreplicasettingsupdatelist"></a>
<a id="tocsreplicasettingsupdatelist"></a>

```json
[
  {
    "RegionName": {},
    "ReplicaProvisionedReadCapacityUnits": {},
    "ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate": {
      "MinimumUnits": {},
      "MaximumUnits": {},
      "AutoScalingDisabled": {},
      "AutoScalingRoleArn": {},
      "ScalingPolicyUpdate": {
        "PolicyName": {},
        "TargetTrackingScalingPolicyConfiguration": {
          "DisableScaleIn": {},
          "ScaleInCooldown": {},
          "ScaleOutCooldown": {},
          "TargetValue": {}
        }
      }
    },
    "ReplicaGlobalSecondaryIndexSettingsUpdate": {},
    "ReplicaTableClass": {}
  }
]
```

<h2 id="tocS_ReplicaUpdate">ReplicaUpdate</h2>
<!-- backwards compatibility -->
<a id="schemareplicaupdate"></a>
<a id="schema_ReplicaUpdate"></a>
<a id="tocSreplicaupdate"></a>
<a id="tocsreplicaupdate"></a>

```json
{
  "Create": {
    "RegionName": {}
  },
  "Delete": {
    "RegionName": {}
  }
}
```

<p>Represents one of the following:</p> <ul> <li> <p>A new replica to be added to an existing global table.</p> </li> <li> <p>New parameters for an existing replica.</p> </li> <li> <p>An existing replica to be removed from an existing global table.</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Create|object|false|none|none|
|Delete|object|false|none|none|

<h2 id="tocS_ReplicaUpdateList">ReplicaUpdateList</h2>
<!-- backwards compatibility -->
<a id="schemareplicaupdatelist"></a>
<a id="schema_ReplicaUpdateList"></a>
<a id="tocSreplicaupdatelist"></a>
<a id="tocsreplicaupdatelist"></a>

```json
[
  {
    "Create": {
      "RegionName": {}
    },
    "Delete": {
      "RegionName": {}
    }
  }
]
```

<h2 id="tocS_UpdateReplicationGroupMemberAction">UpdateReplicationGroupMemberAction</h2>
<!-- backwards compatibility -->
<a id="schemaupdatereplicationgroupmemberaction"></a>
<a id="schema_UpdateReplicationGroupMemberAction"></a>
<a id="tocSupdatereplicationgroupmemberaction"></a>
<a id="tocsupdatereplicationgroupmemberaction"></a>

```json
{
  "RegionName": {},
  "KMSMasterKeyId": {},
  "ProvisionedThroughputOverride": {
    "ReadCapacityUnits": {}
  },
  "GlobalSecondaryIndexes": {},
  "TableClassOverride": {}
}
```

Represents a replica to be modified.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RegionName|object|true|none|none|
|KMSMasterKeyId|object|false|none|none|
|ProvisionedThroughputOverride|object|false|none|none|
|GlobalSecondaryIndexes|object|false|none|none|
|TableClassOverride|object|false|none|none|

<h2 id="tocS_ReplicationGroupUpdate">ReplicationGroupUpdate</h2>
<!-- backwards compatibility -->
<a id="schemareplicationgroupupdate"></a>
<a id="schema_ReplicationGroupUpdate"></a>
<a id="tocSreplicationgroupupdate"></a>
<a id="tocsreplicationgroupupdate"></a>

```json
{
  "Create": {
    "RegionName": {},
    "KMSMasterKeyId": {},
    "ProvisionedThroughputOverride": {
      "ReadCapacityUnits": {}
    },
    "GlobalSecondaryIndexes": {},
    "TableClassOverride": {}
  },
  "Update": {
    "RegionName": {},
    "KMSMasterKeyId": {},
    "ProvisionedThroughputOverride": {
      "ReadCapacityUnits": {}
    },
    "GlobalSecondaryIndexes": {},
    "TableClassOverride": {}
  },
  "Delete": {
    "RegionName": {}
  }
}
```

<p>Represents one of the following:</p> <ul> <li> <p>A new replica to be added to an existing regional table or global table. This request invokes the <code>CreateTableReplica</code> action in the destination Region.</p> </li> <li> <p>New parameters for an existing replica. This request invokes the <code>UpdateTable</code> action in the destination Region.</p> </li> <li> <p>An existing replica to be deleted. The request invokes the <code>DeleteTableReplica</code> action in the destination Region, deleting the replica and all if its items in the destination Region.</p> </li> </ul> <note> <p>When you manually remove a table or global table replica, you do not automatically remove any associated scalable targets, scaling policies, or CloudWatch alarms.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Create|object|false|none|none|
|Update|object|false|none|none|
|Delete|object|false|none|none|

<h2 id="tocS_ReplicationGroupUpdateList">ReplicationGroupUpdateList</h2>
<!-- backwards compatibility -->
<a id="schemareplicationgroupupdatelist"></a>
<a id="schema_ReplicationGroupUpdateList"></a>
<a id="tocSreplicationgroupupdatelist"></a>
<a id="tocsreplicationgroupupdatelist"></a>

```json
[
  {
    "Create": {
      "RegionName": {},
      "KMSMasterKeyId": {},
      "ProvisionedThroughputOverride": {
        "ReadCapacityUnits": {}
      },
      "GlobalSecondaryIndexes": {},
      "TableClassOverride": {}
    },
    "Update": {
      "RegionName": {},
      "KMSMasterKeyId": {},
      "ProvisionedThroughputOverride": {
        "ReadCapacityUnits": {}
      },
      "GlobalSecondaryIndexes": {},
      "TableClassOverride": {}
    },
    "Delete": {
      "RegionName": {}
    }
  }
]
```

<h2 id="tocS_RestoreInProgress">RestoreInProgress</h2>
<!-- backwards compatibility -->
<a id="schemarestoreinprogress"></a>
<a id="schema_RestoreInProgress"></a>
<a id="tocSrestoreinprogress"></a>
<a id="tocsrestoreinprogress"></a>

```json
true
```

<h2 id="tocS_RestoreSummary">RestoreSummary</h2>
<!-- backwards compatibility -->
<a id="schemarestoresummary"></a>
<a id="schema_RestoreSummary"></a>
<a id="tocSrestoresummary"></a>
<a id="tocsrestoresummary"></a>

```json
{
  "SourceBackupArn": {},
  "SourceTableArn": {},
  "RestoreDateTime": {},
  "RestoreInProgress": {}
}
```

Contains details for the restore.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceBackupArn|object|false|none|none|
|SourceTableArn|object|false|none|none|
|RestoreDateTime|object|true|none|none|
|RestoreInProgress|object|true|none|none|

<h2 id="tocS_SSEStatus">SSEStatus</h2>
<!-- backwards compatibility -->
<a id="schemassestatus"></a>
<a id="schema_SSEStatus"></a>
<a id="tocSssestatus"></a>
<a id="tocsssestatus"></a>

```json
"ENABLING"
```

<h2 id="tocS_SSEType">SSEType</h2>
<!-- backwards compatibility -->
<a id="schemassetype"></a>
<a id="schema_SSEType"></a>
<a id="tocSssetype"></a>
<a id="tocsssetype"></a>

```json
"AES256"
```

<h2 id="tocS_SSEDescription">SSEDescription</h2>
<!-- backwards compatibility -->
<a id="schemassedescription"></a>
<a id="schema_SSEDescription"></a>
<a id="tocSssedescription"></a>
<a id="tocsssedescription"></a>

```json
{
  "Status": {},
  "SSEType": {},
  "KMSMasterKeyArn": {},
  "InaccessibleEncryptionDateTime": {}
}
```

The description of the server-side encryption status on the specified table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|
|SSEType|object|false|none|none|
|KMSMasterKeyArn|object|false|none|none|
|InaccessibleEncryptionDateTime|object|false|none|none|

<h2 id="tocS_SSEEnabled">SSEEnabled</h2>
<!-- backwards compatibility -->
<a id="schemasseenabled"></a>
<a id="schema_SSEEnabled"></a>
<a id="tocSsseenabled"></a>
<a id="tocssseenabled"></a>

```json
true
```

<h2 id="tocS_ScanTotalSegments">ScanTotalSegments</h2>
<!-- backwards compatibility -->
<a id="schemascantotalsegments"></a>
<a id="schema_ScanTotalSegments"></a>
<a id="tocSscantotalsegments"></a>
<a id="tocsscantotalsegments"></a>

```json
1
```

<h2 id="tocS_ScanSegment">ScanSegment</h2>
<!-- backwards compatibility -->
<a id="schemascansegment"></a>
<a id="schema_ScanSegment"></a>
<a id="tocSscansegment"></a>
<a id="tocsscansegment"></a>

```json
0
```

<h2 id="tocS_TableCreationDateTime">TableCreationDateTime</h2>
<!-- backwards compatibility -->
<a id="schematablecreationdatetime"></a>
<a id="schema_TableCreationDateTime"></a>
<a id="tocStablecreationdatetime"></a>
<a id="tocstablecreationdatetime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_StreamEnabled">StreamEnabled</h2>
<!-- backwards compatibility -->
<a id="schemastreamenabled"></a>
<a id="schema_StreamEnabled"></a>
<a id="tocSstreamenabled"></a>
<a id="tocsstreamenabled"></a>

```json
true
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

<h2 id="tocS_TableStatus">TableStatus</h2>
<!-- backwards compatibility -->
<a id="schematablestatus"></a>
<a id="schema_TableStatus"></a>
<a id="tocStablestatus"></a>
<a id="tocstablestatus"></a>

```json
"CREATING"
```

<h2 id="tocS_TagKeyString">TagKeyString</h2>
<!-- backwards compatibility -->
<a id="schematagkeystring"></a>
<a id="schema_TagKeyString"></a>
<a id="tocStagkeystring"></a>
<a id="tocstagkeystring"></a>

```json
"string"
```

<h2 id="tocS_TagValueString">TagValueString</h2>
<!-- backwards compatibility -->
<a id="schematagvaluestring"></a>
<a id="schema_TagValueString"></a>
<a id="tocStagvaluestring"></a>
<a id="tocstagvaluestring"></a>

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

<p>Describes a tag. A tag is a key-value pair. You can add up to 50 tags to a single DynamoDB table. </p> <p>Amazon Web Services-assigned tag names and values are automatically assigned the <code>aws:</code> prefix, which the user cannot assign. Amazon Web Services-assigned tag names do not count towards the tag limit of 50. User-assigned tag names have the prefix <code>user:</code> in the Cost Allocation Report. You cannot backdate the application of a tag.</p> <p>For an overview on tagging DynamoDB resources, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html">Tagging for DynamoDB</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

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

<h2 id="tocS_TimeToLiveAttributeName">TimeToLiveAttributeName</h2>
<!-- backwards compatibility -->
<a id="schematimetoliveattributename"></a>
<a id="schema_TimeToLiveAttributeName"></a>
<a id="tocStimetoliveattributename"></a>
<a id="tocstimetoliveattributename"></a>

```json
"string"
```

<h2 id="tocS_TimeToLiveStatus">TimeToLiveStatus</h2>
<!-- backwards compatibility -->
<a id="schematimetolivestatus"></a>
<a id="schema_TimeToLiveStatus"></a>
<a id="tocStimetolivestatus"></a>
<a id="tocstimetolivestatus"></a>

```json
"ENABLING"
```

<h2 id="tocS_TimeToLiveEnabled">TimeToLiveEnabled</h2>
<!-- backwards compatibility -->
<a id="schematimetoliveenabled"></a>
<a id="schema_TimeToLiveEnabled"></a>
<a id="tocStimetoliveenabled"></a>
<a id="tocstimetoliveenabled"></a>

```json
true
```

<h2 id="tocS_TimeToLiveSpecification">TimeToLiveSpecification</h2>
<!-- backwards compatibility -->
<a id="schematimetolivespecification"></a>
<a id="schema_TimeToLiveSpecification"></a>
<a id="tocStimetolivespecification"></a>
<a id="tocstimetolivespecification"></a>

```json
{
  "Enabled": {},
  "AttributeName": {}
}
```

Represents the settings used to enable or disable Time to Live (TTL) for the specified table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|true|none|none|
|AttributeName|object|true|none|none|

<h2 id="tocS_TransactGetItem">TransactGetItem</h2>
<!-- backwards compatibility -->
<a id="schematransactgetitem"></a>
<a id="schema_TransactGetItem"></a>
<a id="tocStransactgetitem"></a>
<a id="tocstransactgetitem"></a>

```json
{
  "Get": {
    "Key": {
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
    "TableName": {},
    "ProjectionExpression": {},
    "ExpressionAttributeNames": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

Specifies an item to be retrieved as part of the transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Get|object|true|none|none|

<h2 id="tocS_TransactGetItemList">TransactGetItemList</h2>
<!-- backwards compatibility -->
<a id="schematransactgetitemlist"></a>
<a id="schema_TransactGetItemList"></a>
<a id="tocStransactgetitemlist"></a>
<a id="tocstransactgetitemlist"></a>

```json
[
  {
    "Get": {
      "Key": {
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
      "TableName": {},
      "ProjectionExpression": {},
      "ExpressionAttributeNames": {
        "property1": "string",
        "property2": "string"
      }
    }
  }
]
```

<h2 id="tocS_Update">Update</h2>
<!-- backwards compatibility -->
<a id="schemaupdate"></a>
<a id="schema_Update"></a>
<a id="tocSupdate"></a>
<a id="tocsupdate"></a>

```json
{
  "Key": {
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
  "UpdateExpression": {},
  "TableName": {},
  "ConditionExpression": {},
  "ExpressionAttributeNames": {
    "property1": "string",
    "property2": "string"
  },
  "ExpressionAttributeValues": {
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
  "ReturnValuesOnConditionCheckFailure": {}
}
```

Represents a request to perform an <code>UpdateItem</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|UpdateExpression|object|true|none|none|
|TableName|object|true|none|none|
|ConditionExpression|object|false|none|none|
|ExpressionAttributeNames|object|false|none|none|
|ExpressionAttributeValues|object|false|none|none|
|ReturnValuesOnConditionCheckFailure|object|false|none|none|

<h2 id="tocS_TransactWriteItem">TransactWriteItem</h2>
<!-- backwards compatibility -->
<a id="schematransactwriteitem"></a>
<a id="schema_TransactWriteItem"></a>
<a id="tocStransactwriteitem"></a>
<a id="tocstransactwriteitem"></a>

```json
{
  "ConditionCheck": {
    "Key": {
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
    "TableName": {},
    "ConditionExpression": {},
    "ExpressionAttributeNames": {
      "property1": "string",
      "property2": "string"
    },
    "ExpressionAttributeValues": {
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
    "ReturnValuesOnConditionCheckFailure": {}
  },
  "Put": {
    "Item": {
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
    "TableName": {},
    "ConditionExpression": {},
    "ExpressionAttributeNames": {
      "property1": "string",
      "property2": "string"
    },
    "ExpressionAttributeValues": {
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
    "ReturnValuesOnConditionCheckFailure": {}
  },
  "Delete": {
    "Key": {
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
    "TableName": {},
    "ConditionExpression": {},
    "ExpressionAttributeNames": {
      "property1": "string",
      "property2": "string"
    },
    "ExpressionAttributeValues": {
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
    "ReturnValuesOnConditionCheckFailure": {}
  },
  "Update": {
    "Key": {
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
    "UpdateExpression": {},
    "TableName": {},
    "ConditionExpression": {},
    "ExpressionAttributeNames": {
      "property1": "string",
      "property2": "string"
    },
    "ExpressionAttributeValues": {
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
    "ReturnValuesOnConditionCheckFailure": {}
  }
}
```

A list of requests that can perform update, put, delete, or check operations on multiple items in one or more tables atomically.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConditionCheck|object|false|none|none|
|Put|object|false|none|none|
|Delete|object|false|none|none|
|Update|object|false|none|none|

<h2 id="tocS_TransactWriteItemList">TransactWriteItemList</h2>
<!-- backwards compatibility -->
<a id="schematransactwriteitemlist"></a>
<a id="schema_TransactWriteItemList"></a>
<a id="tocStransactwriteitemlist"></a>
<a id="tocstransactwriteitemlist"></a>

```json
[
  {
    "ConditionCheck": {
      "Key": {
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
      "TableName": {},
      "ConditionExpression": {},
      "ExpressionAttributeNames": {
        "property1": "string",
        "property2": "string"
      },
      "ExpressionAttributeValues": {
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
      "ReturnValuesOnConditionCheckFailure": {}
    },
    "Put": {
      "Item": {
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
      "TableName": {},
      "ConditionExpression": {},
      "ExpressionAttributeNames": {
        "property1": "string",
        "property2": "string"
      },
      "ExpressionAttributeValues": {
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
      "ReturnValuesOnConditionCheckFailure": {}
    },
    "Delete": {
      "Key": {
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
      "TableName": {},
      "ConditionExpression": {},
      "ExpressionAttributeNames": {
        "property1": "string",
        "property2": "string"
      },
      "ExpressionAttributeValues": {
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
      "ReturnValuesOnConditionCheckFailure": {}
    },
    "Update": {
      "Key": {
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
      "UpdateExpression": {},
      "TableName": {},
      "ConditionExpression": {},
      "ExpressionAttributeNames": {
        "property1": "string",
        "property2": "string"
      },
      "ExpressionAttributeValues": {
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
      "ReturnValuesOnConditionCheckFailure": {}
    }
  }
]
```

<h2 id="tocS_UpdateExpression">UpdateExpression</h2>
<!-- backwards compatibility -->
<a id="schemaupdateexpression"></a>
<a id="schema_UpdateExpression"></a>
<a id="tocSupdateexpression"></a>
<a id="tocsupdateexpression"></a>

```json
"string"
```

<h2 id="tocS_WriteRequest">WriteRequest</h2>
<!-- backwards compatibility -->
<a id="schemawriterequest"></a>
<a id="schema_WriteRequest"></a>
<a id="tocSwriterequest"></a>
<a id="tocswriterequest"></a>

```json
{
  "PutRequest": {
    "Item": {
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
  },
  "DeleteRequest": {
    "Key": {
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
  }
}
```

Represents an operation to perform - either <code>DeleteItem</code> or <code>PutItem</code>. You can only request one of these operations, not both, in a single <code>WriteRequest</code>. If you do need to perform both of these operations, you need to provide two separate <code>WriteRequest</code> objects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PutRequest|object|false|none|none|
|DeleteRequest|object|false|none|none|
