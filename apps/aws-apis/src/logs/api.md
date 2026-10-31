<h1 id="amazon-cloudwatch-logs">Amazon CloudWatch Logs v2014-03-28</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>You can use Amazon CloudWatch Logs to monitor, store, and access your log files from EC2 instances, CloudTrail, and other sources. You can then retrieve the associated log data from CloudWatch Logs using the CloudWatch console. Alternatively, you can use CloudWatch Logs commands in the Amazon Web Services CLI, CloudWatch Logs API, or CloudWatch Logs SDK.</p> <p>You can use CloudWatch Logs to:</p> <ul> <li> <p> <b>Monitor logs from EC2 instances in real time</b>: You can use CloudWatch Logs to monitor applications and systems using log data. For example, CloudWatch Logs can track the number of errors that occur in your application logs. Then, it can send you a notification whenever the rate of errors exceeds a threshold that you specify. CloudWatch Logs uses your log data for monitoring so no code changes are required. For example, you can monitor application logs for specific literal terms (such as "NullReferenceException"). You can also count the number of occurrences of a literal term at a particular position in log data (such as "404" status codes in an Apache access log). When the term you are searching for is found, CloudWatch Logs reports the data to a CloudWatch metric that you specify.</p> </li> <li> <p> <b>Monitor CloudTrail logged events</b>: You can create alarms in CloudWatch and receive notifications of particular API activity as captured by CloudTrail. You can use the notification to perform troubleshooting.</p> </li> <li> <p> <b>Archive log data</b>: You can use CloudWatch Logs to store your log data in highly durable storage. You can change the log retention setting so that any log events earlier than this setting are automatically deleted. The CloudWatch Logs agent helps to quickly send both rotated and non-rotated log data off of a host and into the log service. You can then access the raw log data when you need it.</p> </li> </ul>

Base URLs:

* <a href="http://logs.us-east-1.amazonaws.com">http://logs.us-east-1.amazonaws.com</a> - The Amazon CloudWatch Logs multi-region endpoint

* <a href="https://logs.us-east-1.amazonaws.com">https://logs.us-east-1.amazonaws.com</a> - The Amazon CloudWatch Logs multi-region endpoint

* <a href="http://logs.cn-north-1.amazonaws.com.cn">http://logs.cn-north-1.amazonaws.com.cn</a> - The Amazon CloudWatch Logs endpoint for China (Beijing) and China (Ningxia)

* <a href="https://logs.cn-north-1.amazonaws.com.cn">https://logs.cn-north-1.amazonaws.com.cn</a> - The Amazon CloudWatch Logs endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/logs/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-cloudwatch-logs-default">Default</h1>

## AssociateKmsKey

<a id="opIdAssociateKmsKey"></a>

> Code samples

```bash
curl 'https://logs.us-east-1.amazonaws.com/#X-Amz-Target=Logs_20140328.AssociateKmsKey' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Logs_20140328.AssociateKmsKey' \
  -d '{
    "logGroupName": {},
    "kmsKeyId": {},
    "resourceIdentifier": {}
  }'
```

`POST /#X-Amz-Target=Logs_20140328.AssociateKmsKey`

<p>Associates the specified KMS key with either one log group in the account, or with all stored CloudWatch Logs query insights results in the account.</p> <p>When you use <code>AssociateKmsKey</code>, you specify either the <code>logGroupName</code> parameter or the <code>resourceIdentifier</code> parameter. You can't specify both of those parameters in the same operation.</p> <ul> <li> <p>Specify the <code>logGroupName</code> parameter to cause all log events stored in the log group to be encrypted with that key. Only the log events ingested after the key is associated are encrypted with that key.</p> <p>Associating a KMS key with a log group overrides any existing associations between the log group and a KMS key. After a KMS key is associated with a log group, all newly ingested data for the log group is encrypted using the KMS key. This association is stored as long as the data encrypted with the KMS key is still within CloudWatch Logs. This enables CloudWatch Logs to decrypt this data whenever it is requested.</p> <p>Associating a key with a log group does not cause the results of queries of that log group to be encrypted with that key. To have query results encrypted with a KMS key, you must use an <code>AssociateKmsKey</code> operation with the <code>resourceIdentifier</code> parameter that specifies a <code>query-result</code> resource. </p> </li> <li> <p>Specify the <code>resourceIdentifier</code> parameter with a <code>query-result</code> resource, to use that key to encrypt the stored results of all future <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartQuery.html">StartQuery</a> operations in the account. The response from a <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetQueryResults.html">GetQueryResults</a> operation will still return the query results in plain text.</p> <p>Even if you have not associated a key with your query results, the query results are encrypted when stored, using the default CloudWatch Logs method.</p> <p>If you run a query from a monitoring account that queries logs in a source account, the query results key from the monitoring account, if any, is used.</p> </li> </ul> <important> <p>If you delete the key that is used to encrypt log events or log group query results, then all the associated stored log events or query results that were encrypted with that key will be unencryptable and unusable.</p> </important> <note> <p>CloudWatch Logs supports only symmetric KMS keys. Do not use an associate an asymmetric KMS key with your log group or query results. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using Symmetric and Asymmetric Keys</a>.</p> </note> <p>It can take up to 5 minutes for this operation to take effect.</p> <p>If you attempt to associate a KMS key with a log group but the KMS key does not exist or the KMS key is disabled, you receive an <code>InvalidParameterException</code> error. </p>

> Body parameter

```json
{
  "logGroupName": {},
  "kmsKeyId": {},
  "resourceIdentifier": {}
}
```

<h3 id="associatekmskey-parameters">Parameters</h3>

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
|body|body|[AssociateKmsKeyRequest](#schemaassociatekmskeyrequest)|true|none|
|» logGroupName|body|object|false|none|
|» kmsKeyId|body|object|true|none|
|» resourceIdentifier|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Logs_20140328.AssociateKmsKey|

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

<h3 id="associatekmskey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|OperationAbortedException|[OperationAbortedException](#schemaoperationabortedexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CancelExportTask

<a id="opIdCancelExportTask"></a>

> Code samples

```bash
curl 'https://logs.us-east-1.amazonaws.com/#X-Amz-Target=Logs_20140328.CancelExportTask' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Logs_20140328.CancelExportTask' \
  -d '{
    "taskId": {}
  }'
```

`POST /#X-Amz-Target=Logs_20140328.CancelExportTask`

<p>Cancels the specified export task.</p> <p>The task must be in the <code>PENDING</code> or <code>RUNNING</code> state.</p>

> Body parameter

```json
{
  "taskId": {}
}
```

<h3 id="cancelexporttask-parameters">Parameters</h3>

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
|body|body|[CancelExportTaskRequest](#schemacancelexporttaskrequest)|true|none|
|» taskId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Logs_20140328.CancelExportTask|

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

<h3 id="cancelexporttask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateExportTask

<a id="opIdCreateExportTask"></a>

> Code samples

```bash
curl 'https://logs.us-east-1.amazonaws.com/#X-Amz-Target=Logs_20140328.CreateExportTask' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Logs_20140328.CreateExportTask' \
  -d '{
    "taskName": {},
    "logGroupName": {},
    "logStreamNamePrefix": {},
    "from": {},
    "to": {},
    "destination": {},
    "destinationPrefix": {}
  }'
```

`POST /#X-Amz-Target=Logs_20140328.CreateExportTask`

<p>Creates an export task so that you can efficiently export data from a log group to an Amazon S3 bucket. When you perform a <code>CreateExportTask</code> operation, you must use credentials that have permission to write to the S3 bucket that you specify as the destination.</p> <p>Exporting log data to S3 buckets that are encrypted by KMS is supported. Exporting log data to Amazon S3 buckets that have S3 Object Lock enabled with a retention period is also supported.</p> <p>Exporting to S3 buckets that are encrypted with AES-256 is supported. </p> <p>This is an asynchronous call. If all the required information is provided, this operation initiates an export task and responds with the ID of the task. After the task has started, you can use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeExportTasks.html">DescribeExportTasks</a> to get the status of the export task. Each account can only have one active (<code>RUNNING</code> or <code>PENDING</code>) export task at a time. To cancel an export task, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CancelExportTask.html">CancelExportTask</a>.</p> <p>You can export logs from multiple log groups or multiple time ranges to the same S3 bucket. To separate log data for each export task, specify a prefix to be used as the Amazon S3 key prefix for all exported objects.</p> <note> <p>Time-based sorting on chunks of log data inside an exported file is not guaranteed. You can sort the exported log field data by using Linux utilities.</p> </note>

> Body parameter

```json
{
  "taskName": {},
  "logGroupName": {},
  "logStreamNamePrefix": {},
  "from": {},
  "to": {},
  "destination": {},
  "destinationPrefix": {}
}
```

<h3 id="createexporttask-parameters">Parameters</h3>

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
|body|body|[CreateExportTaskRequest](#schemacreateexporttaskrequest)|true|none|
|» taskName|body|object|false|none|
|» logGroupName|body|object|true|none|
|» logStreamNamePrefix|body|object|false|none|
|» from|body|object|true|none|
|» to|body|object|true|none|
|» destination|body|object|true|none|
|» destinationPrefix|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Logs_20140328.CreateExportTask|

> Example responses

> 200 Response

```json
{
  "taskId": {}
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

<h3 id="createexporttask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateExportTaskResponse](#schemacreateexporttaskresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|OperationAbortedException|[OperationAbortedException](#schemaoperationabortedexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateLogGroup

<a id="opIdCreateLogGroup"></a>

> Code samples

```bash
curl 'https://logs.us-east-1.amazonaws.com/#X-Amz-Target=Logs_20140328.CreateLogGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Logs_20140328.CreateLogGroup' \
  -d '{
    "logGroupName": {},
    "kmsKeyId": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /#X-Amz-Target=Logs_20140328.CreateLogGroup`

<p>Creates a log group with the specified name. You can create up to 20,000 log groups per account.</p> <p>You must use the following guidelines when naming a log group:</p> <ul> <li> <p>Log group names must be unique within a Region for an Amazon Web Services account.</p> </li> <li> <p>Log group names can be between 1 and 512 characters long.</p> </li> <li> <p>Log group names consist of the following characters: a-z, A-Z, 0-9, '_' (underscore), '-' (hyphen), '/' (forward slash), '.' (period), and '#' (number sign)</p> </li> </ul> <p>When you create a log group, by default the log events in the log group do not expire. To set a retention policy so that events expire and are deleted after a specified time, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutRetentionPolicy.html">PutRetentionPolicy</a>.</p> <p>If you associate an KMS key with the log group, ingested data is encrypted using the KMS key. This association is stored as long as the data encrypted with the KMS key is still within CloudWatch Logs. This enables CloudWatch Logs to decrypt this data whenever it is requested.</p> <p>If you attempt to associate a KMS key with the log group but the KMS key does not exist or the KMS key is disabled, you receive an <code>InvalidParameterException</code> error. </p> <important> <p>CloudWatch Logs supports only symmetric KMS keys. Do not associate an asymmetric KMS key with your log group. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using Symmetric and Asymmetric Keys</a>.</p> </important>

> Body parameter

```json
{
  "logGroupName": {},
  "kmsKeyId": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createloggroup-parameters">Parameters</h3>

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
|body|body|[CreateLogGroupRequest](#schemacreateloggrouprequest)|true|none|
|» logGroupName|body|object|true|none|
|» kmsKeyId|body|object|false|none|
|» tags|body|object|false|none|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Logs_20140328.CreateLogGroup|

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

<h3 id="createloggroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|OperationAbortedException|[OperationAbortedException](#schemaoperationabortedexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateLogStream

<a id="opIdCreateLogStream"></a>

> Code samples

```bash
curl 'https://logs.us-east-1.amazonaws.com/#X-Amz-Target=Logs_20140328.CreateLogStream' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Logs_20140328.CreateLogStream' \
  -d '{
    "logGroupName": {},
    "logStreamName": {}
  }'
```

`POST /#X-Amz-Target=Logs_20140328.CreateLogStream`

<p>Creates a log stream for the specified log group. A log stream is a sequence of log events that originate from a single source, such as an application instance or a resource that is being monitored.</p> <p>There is no limit on the number of log streams that you can create for a log group. There is a limit of 50 TPS on <code>CreateLogStream</code> operations, after which transactions are throttled.</p> <p>You must use the following guidelines when naming a log stream:</p> <ul> <li> <p>Log stream names must be unique within the log group.</p> </li> <li> <p>Log stream names can be between 1 and 512 characters long.</p> </li> <li> <p>Don't use ':' (colon) or '*' (asterisk) characters.</p> </li> </ul>

> Body parameter

```json
{
  "logGroupName": {},
  "logStreamName": {}
}
```

<h3 id="createlogstream-parameters">Parameters</h3>

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
|body|body|[CreateLogStreamRequest](#schemacreatelogstreamrequest)|true|none|
|» logGroupName|body|object|true|none|
|» logStreamName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Logs_20140328.CreateLogStream|

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

<h3 id="createlogstream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAccountPolicy

<a id="opIdDeleteAccountPolicy"></a>

> Code samples

```bash
curl 'https://logs.us-east-1.amazonaws.com/#X-Amz-Target=Logs_20140328.DeleteAccountPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Logs_20140328.DeleteAccountPolicy' \
  -d '{
    "policyName": {},
    "policyType": {}
  }'
```

`POST /#X-Amz-Target=Logs_20140328.DeleteAccountPolicy`

<p>Deletes a CloudWatch Logs account policy.</p> <p>To use this operation, you must be signed on with the <code>logs:DeleteDataProtectionPolicy</code> and <code>logs:DeleteAccountPolicy</code> permissions.</p>

> Body parameter

```json
{
  "policyName": {},
  "policyType": {}
}
```

<h3 id="deleteaccountpolicy-parameters">Parameters</h3>

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
|body|body|[DeleteAccountPolicyRequest](#schemadeleteaccountpolicyrequest)|true|none|
|» policyName|body|object|true|none|
|» policyType|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Logs_20140328.DeleteAccountPolicy|

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

<h3 id="deleteaccountpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|OperationAbortedException|[OperationAbortedException](#schemaoperationabortedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDataProtectionPolicy

<a id="opIdDeleteDataProtectionPolicy"></a>

> Code samples

```bash
curl 'https://logs.us-east-1.amazonaws.com/#X-Amz-Target=Logs_20140328.DeleteDataProtectionPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Logs_20140328.DeleteDataProtectionPolicy' \
  -d '{
    "logGroupIdentifier": {}
  }'
```

`POST /#X-Amz-Target=Logs_20140328.DeleteDataProtectionPolicy`

<p>Deletes the data protection policy from the specified log group. </p> <p>For more information about data protection policies, see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDataProtectionPolicy.html">PutDataProtectionPolicy</a>.</p>

> Body parameter

```json
{
  "logGroupIdentifier": {}
}
```

<h3 id="deletedataprotectionpolicy-parameters">Parameters</h3>

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
|body|body|[DeleteDataProtectionPolicyRequest](#schemadeletedataprotectionpolicyrequest)|true|none|
|» logGroupIdentifier|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Logs_20140328.DeleteDataProtectionPolicy|

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

<h3 id="deletedataprotectionpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|OperationAbortedException|[OperationAbortedException](#schemaoperationabortedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDestination

<a id="opIdDeleteDestination"></a>

> Code samples

```bash
curl 'https://logs.us-east-1.amazonaws.com/#X-Amz-Target=Logs_20140328.DeleteDestination' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Logs_20140328.DeleteDestination' \
  -d '{
    "destinationName": {}
  }'
```

`POST /#X-Amz-Target=Logs_20140328.DeleteDestination`

Deletes the specified destination, and eventually disables all the subscription filters that publish to it. This operation does not delete the physical resource encapsulated by the destination.

> Body parameter

```json
{
  "destinationName": {}
}
```

<h3 id="deletedestination-parameters">Parameters</h3>

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
|body|body|[DeleteDestinationRequest](#schemadeletedestinationrequest)|true|none|
|» destinationName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Logs_20140328.DeleteDestination|

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

<h3 id="deletedestination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|OperationAbortedException|[OperationAbortedException](#schemaoperationabortedexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteLogGroup

<a id="opIdDeleteLogGroup"></a>

> Code samples

```bash
curl 'https://logs.us-east-1.amazonaws.com/#X-Amz-Target=Logs_20140328.DeleteLogGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Logs_20140328.DeleteLogGroup' \
  -d '{
    "logGroupName": {}
  }'
```

`POST /#X-Amz-Target=Logs_20140328.DeleteLogGroup`

Deletes the specified log group and permanently deletes all the archived log events associated with the log group.

> Body parameter

```json
{
  "logGroupName": {}
}
```

<h3 id="deleteloggroup-parameters">Parameters</h3>

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
|body|body|[DeleteLogGroupRequest](#schemadeleteloggrouprequest)|true|none|
|» logGroupName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Logs_20140328.DeleteLogGroup|

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

<h3 id="deleteloggroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|OperationAbortedException|[OperationAbortedException](#schemaoperationabortedexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteLogStream

<a id="opIdDeleteLogStream"></a>

> Code samples

```bash
curl 'https://logs.us-east-1.amazonaws.com/#X-Amz-Target=Logs_20140328.DeleteLogStream' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Logs_20140328.DeleteLogStream' \
  -d '{
    "logGroupName": {},
    "logStreamName": {}
  }'
```

`POST /#X-Amz-Target=Logs_20140328.DeleteLogStream`

Deletes the specified log stream and permanently deletes all the archived log events associated with the log stream.

> Body parameter

```json
{
  "logGroupName": {},
  "logStreamName": {}
}
```

<h3 id="deletelogstream-parameters">Parameters</h3>

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
|body|body|[DeleteLogStreamRequest](#schemadeletelogstreamrequest)|true|none|
|» logGroupName|body|object|true|none|
|» logStreamName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Logs_20140328.DeleteLogStream|

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

<h3 id="deletelogstream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|OperationAbortedException|[OperationAbortedException](#schemaoperationabortedexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteMetricFilter

<a id="opIdDeleteMetricFilter"></a>

> Code samples

```bash
curl 'https://logs.us-east-1.amazonaws.com/#X-Amz-Target=Logs_20140328.DeleteMetricFilter' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Logs_20140328.DeleteMetricFilter' \
  -d '{
    "logGroupName": {},
    "filterName": {}
  }'
```

`POST /#X-Amz-Target=Logs_20140328.DeleteMetricFilter`

Deletes the specified metric filter.

> Body parameter

```json
{
  "logGroupName": {},
  "filterName": {}
}
```

<h3 id="deletemetricfilter-parameters">Parameters</h3>

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
|body|body|[DeleteMetricFilterRequest](#schemadeletemetricfilterrequest)|true|none|
|» logGroupName|body|object|true|none|
|» filterName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Logs_20140328.DeleteMetricFilter|

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

<h3 id="deletemetricfilter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|OperationAbortedException|[OperationAbortedException](#schemaoperationabortedexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteQueryDefinition

<a id="opIdDeleteQueryDefinition"></a>

> Code samples

```bash
curl 'https://logs.us-east-1.amazonaws.com/#X-Amz-Target=Logs_20140328.DeleteQueryDefinition' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Logs_20140328.DeleteQueryDefinition' \
  -d '{
    "queryDefinitionId": {}
  }'
```

`POST /#X-Amz-Target=Logs_20140328.DeleteQueryDefinition`

<p>Deletes a saved CloudWatch Logs Insights query definition. A query definition contains details about a saved CloudWatch Logs Insights query.</p> <p>Each <code>DeleteQueryDefinition</code> operation can delete one query definition.</p> <p>You must have the <code>logs:DeleteQueryDefinition</code> permission to be able to perform this operation.</p>

> Body parameter

```json
{
  "queryDefinitionId": {}
}
```

<h3 id="deletequerydefinition-parameters">Parameters</h3>

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
|body|body|[DeleteQueryDefinitionRequest](#schemadeletequerydefinitionrequest)|true|none|
|» queryDefinitionId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Logs_20140328.DeleteQueryDefinition|

> Example responses

> 200 Response

```json
{
  "success": {}
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

<h3 id="deletequerydefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteQueryDefinitionResponse](#schemadeletequerydefinitionresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteResourcePolicy

<a id="opIdDeleteResourcePolicy"></a>

> Code samples

```bash
curl 'https://logs.us-east-1.amazonaws.com/#X-Amz-Target=Logs_20140328.DeleteResourcePolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Logs_20140328.DeleteResourcePolicy' \
  -d '{
    "policyName": {}
  }'
```

`POST /#X-Amz-Target=Logs_20140328.DeleteResourcePolicy`

Deletes a resource policy from this account. This revokes the access of the identities in that policy to put log events to this account.

> Body parameter

```json
{
  "policyName": {}
}
```

<h3 id="deleteresourcepolicy-parameters">Parameters</h3>

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
|body|body|[DeleteResourcePolicyRequest](#schemadeleteresourcepolicyrequest)|true|none|
|» policyName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Logs_20140328.DeleteResourcePolicy|

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

<h3 id="deleteresourcepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRetentionPolicy

<a id="opIdDeleteRetentionPolicy"></a>

> Code samples

```bash
curl 'https://logs.us-east-1.amazonaws.com/#X-Amz-Target=Logs_20140328.DeleteRetentionPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Logs_20140328.DeleteRetentionPolicy' \
  -d '{
    "logGroupName": {}
  }'
```

`POST /#X-Amz-Target=Logs_20140328.DeleteRetentionPolicy`

<p>Deletes the specified retention policy.</p> <p>Log events do not expire if they belong to log groups without a retention policy.</p>

> Body parameter

```json
{
  "logGroupName": {}
}
```

<h3 id="deleteretentionpolicy-parameters">Parameters</h3>

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
|body|body|[DeleteRetentionPolicyRequest](#schemadeleteretentionpolicyrequest)|true|none|
|» logGroupName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Logs_20140328.DeleteRetentionPolicy|

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

<h3 id="deleteretentionpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|OperationAbortedException|[OperationAbortedException](#schemaoperationabortedexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteSubscriptionFilter

<a id="opIdDeleteSubscriptionFilter"></a>

> Code samples

```bash
curl 'https://logs.us-east-1.amazonaws.com/#X-Amz-Target=Logs_20140328.DeleteSubscriptionFilter' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Logs_20140328.DeleteSubscriptionFilter' \
  -d '{
    "logGroupName": {},
    "filterName": {}
  }'
```

`POST /#X-Amz-Target=Logs_20140328.DeleteSubscriptionFilter`

Deletes the specified subscription filter.

> Body parameter

```json
{
  "logGroupName": {},
  "filterName": {}
}
```

<h3 id="deletesubscriptionfilter-parameters">Parameters</h3>

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
|body|body|[DeleteSubscriptionFilterRequest](#schemadeletesubscriptionfilterrequest)|true|none|
|» logGroupName|body|object|true|none|
|» filterName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Logs_20140328.DeleteSubscriptionFilter|

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

<h3 id="deletesubscriptionfilter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|OperationAbortedException|[OperationAbortedException](#schemaoperationabortedexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAccountPolicies

<a id="opIdDescribeAccountPolicies"></a>

> Code samples

```bash
curl 'https://logs.us-east-1.amazonaws.com/#X-Amz-Target=Logs_20140328.DescribeAccountPolicies' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Logs_20140328.DescribeAccountPolicies' \
  -d '{
    "policyType": {},
    "policyName": {},
    "accountIdentifiers": {}
  }'
```

`POST /#X-Amz-Target=Logs_20140328.DescribeAccountPolicies`

Returns a list of all CloudWatch Logs account policies in the account.

> Body parameter

```json
{
  "policyType": {},
  "policyName": {},
  "accountIdentifiers": {}
}
```

<h3 id="describeaccountpolicies-parameters">Parameters</h3>

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
|body|body|[DescribeAccountPoliciesRequest](#schemadescribeaccountpoliciesrequest)|true|none|
|» policyType|body|object|true|none|
|» policyName|body|object|false|none|
|» accountIdentifiers|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Logs_20140328.DescribeAccountPolicies|

> Example responses

> 200 Response

```json
{
  "accountPolicies": {}
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

<h3 id="describeaccountpolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAccountPoliciesResponse](#schemadescribeaccountpoliciesresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|OperationAbortedException|[OperationAbortedException](#schemaoperationabortedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDestinations

<a id="opIdDescribeDestinations"></a>

> Code samples

```bash
curl 'https://logs.us-east-1.amazonaws.com/#X-Amz-Target=Logs_20140328.DescribeDestinations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Logs_20140328.DescribeDestinations' \
  -d '{
    "DestinationNamePrefix": {},
    "nextToken": {},
    "limit": {}
  }'
```

`POST /#X-Amz-Target=Logs_20140328.DescribeDestinations`

Lists all your destinations. The results are ASCII-sorted by destination name.

> Body parameter

```json
{
  "DestinationNamePrefix": {},
  "nextToken": {},
  "limit": {}
}
```

<h3 id="describedestinations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeDestinationsRequest](#schemadescribedestinationsrequest)|true|none|
|» DestinationNamePrefix|body|object|false|none|
|» nextToken|body|object|false|none|
|» limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Logs_20140328.DescribeDestinations|

> Example responses

> 200 Response

```json
{
  "destinations": {},
  "nextToken": "string"
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

<h3 id="describedestinations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDestinationsResponse](#schemadescribedestinationsresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeExportTasks

<a id="opIdDescribeExportTasks"></a>

> Code samples

```bash
curl 'https://logs.us-east-1.amazonaws.com/#X-Amz-Target=Logs_20140328.DescribeExportTasks' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Logs_20140328.DescribeExportTasks' \
  -d '{
    "taskId": {},
    "statusCode": {},
    "nextToken": {},
    "limit": {}
  }'
```

`POST /#X-Amz-Target=Logs_20140328.DescribeExportTasks`

Lists the specified export tasks. You can list all your export tasks or filter the results based on task ID or task status.

> Body parameter

```json
{
  "taskId": {},
  "statusCode": {},
  "nextToken": {},
  "limit": {}
}
```

<h3 id="describeexporttasks-parameters">Parameters</h3>

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
|body|body|[DescribeExportTasksRequest](#schemadescribeexporttasksrequest)|true|none|
|» taskId|body|object|false|none|
|» statusCode|body|object|false|none|
|» nextToken|body|object|false|none|
|» limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Logs_20140328.DescribeExportTasks|

> Example responses

> 200 Response

```json
{
  "exportTasks": {},
  "nextToken": "string"
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

<h3 id="describeexporttasks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeExportTasksResponse](#schemadescribeexporttasksresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeLogGroups

<a id="opIdDescribeLogGroups"></a>

> Code samples

```bash
curl 'https://logs.us-east-1.amazonaws.com/#X-Amz-Target=Logs_20140328.DescribeLogGroups' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Logs_20140328.DescribeLogGroups' \
  -d '{
    "accountIdentifiers": {},
    "logGroupNamePrefix": {},
    "logGroupNamePattern": {},
    "nextToken": {},
    "limit": {},
    "includeLinkedAccounts": {}
  }'
```

`POST /#X-Amz-Target=Logs_20140328.DescribeLogGroups`

<p>Lists the specified log groups. You can list all your log groups or filter the results by prefix. The results are ASCII-sorted by log group name.</p> <p>CloudWatch Logs doesn’t support IAM policies that control access to the <code>DescribeLogGroups</code> action by using the <code>aws:ResourceTag/<i>key-name</i> </code> condition key. Other CloudWatch Logs actions do support the use of the <code>aws:ResourceTag/<i>key-name</i> </code> condition key to control access. For more information about using tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Controlling access to Amazon Web Services resources using tags</a>.</p> <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view data from the linked source accounts. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p>

> Body parameter

```json
{
  "accountIdentifiers": {},
  "logGroupNamePrefix": {},
  "logGroupNamePattern": {},
  "nextToken": {},
  "limit": {},
  "includeLinkedAccounts": {}
}
```

<h3 id="describeloggroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeLogGroupsRequest](#schemadescribeloggroupsrequest)|true|none|
|» accountIdentifiers|body|object|false|none|
|» logGroupNamePrefix|body|object|false|none|
|» logGroupNamePattern|body|object|false|none|
|» nextToken|body|object|false|none|
|» limit|body|object|false|none|
|» includeLinkedAccounts|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Logs_20140328.DescribeLogGroups|

> Example responses

> 200 Response

```json
{
  "logGroups": {},
  "nextToken": "string"
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

<h3 id="describeloggroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeLogGroupsResponse](#schemadescribeloggroupsresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeLogStreams

<a id="opIdDescribeLogStreams"></a>

> Code samples

```bash
curl 'https://logs.us-east-1.amazonaws.com/#X-Amz-Target=Logs_20140328.DescribeLogStreams' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Logs_20140328.DescribeLogStreams' \
  -d '{
    "logGroupName": {},
    "logGroupIdentifier": {},
    "logStreamNamePrefix": {},
    "orderBy": {},
    "descending": {},
    "nextToken": {},
    "limit": {}
  }'
```

`POST /#X-Amz-Target=Logs_20140328.DescribeLogStreams`

<p>Lists the log streams for the specified log group. You can list all the log streams or filter the results by prefix. You can also control how the results are ordered.</p> <p>You can specify the log group to search by using either <code>logGroupIdentifier</code> or <code>logGroupName</code>. You must include one of these two parameters, but you can't include both. </p> <p>This operation has a limit of five transactions per second, after which transactions are throttled.</p> <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view data from the linked source accounts. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p>

> Body parameter

```json
{
  "logGroupName": {},
  "logGroupIdentifier": {},
  "logStreamNamePrefix": {},
  "orderBy": {},
  "descending": {},
  "nextToken": {},
  "limit": {}
}
```

<h3 id="describelogstreams-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeLogStreamsRequest](#schemadescribelogstreamsrequest)|true|none|
|» logGroupName|body|object|false|none|
|» logGroupIdentifier|body|object|false|none|
|» logStreamNamePrefix|body|object|false|none|
|» orderBy|body|object|false|none|
|» descending|body|object|false|none|
|» nextToken|body|object|false|none|
|» limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Logs_20140328.DescribeLogStreams|

> Example responses

> 200 Response

```json
{
  "logStreams": {},
  "nextToken": "string"
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

<h3 id="describelogstreams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeLogStreamsResponse](#schemadescribelogstreamsresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeMetricFilters

<a id="opIdDescribeMetricFilters"></a>

> Code samples

```bash
curl 'https://logs.us-east-1.amazonaws.com/#X-Amz-Target=Logs_20140328.DescribeMetricFilters' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Logs_20140328.DescribeMetricFilters' \
  -d '{
    "logGroupName": {},
    "filterNamePrefix": {},
    "nextToken": {},
    "limit": {},
    "metricName": {},
    "metricNamespace": {}
  }'
```

`POST /#X-Amz-Target=Logs_20140328.DescribeMetricFilters`

Lists the specified metric filters. You can list all of the metric filters or filter the results by log name, prefix, metric name, or metric namespace. The results are ASCII-sorted by filter name.

> Body parameter

```json
{
  "logGroupName": {},
  "filterNamePrefix": {},
  "nextToken": {},
  "limit": {},
  "metricName": {},
  "metricNamespace": {}
}
```

<h3 id="describemetricfilters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeMetricFiltersRequest](#schemadescribemetricfiltersrequest)|true|none|
|» logGroupName|body|object|false|none|
|» filterNamePrefix|body|object|false|none|
|» nextToken|body|object|false|none|
|» limit|body|object|false|none|
|» metricName|body|object|false|none|
|» metricNamespace|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Logs_20140328.DescribeMetricFilters|

> Example responses

> 200 Response

```json
{
  "metricFilters": {},
  "nextToken": "string"
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

<h3 id="describemetricfilters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeMetricFiltersResponse](#schemadescribemetricfiltersresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeQueries

<a id="opIdDescribeQueries"></a>

> Code samples

```bash
curl 'https://logs.us-east-1.amazonaws.com/#X-Amz-Target=Logs_20140328.DescribeQueries' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Logs_20140328.DescribeQueries' \
  -d '{
    "logGroupName": {},
    "status": {},
    "maxResults": {},
    "nextToken": "string"
  }'
```

`POST /#X-Amz-Target=Logs_20140328.DescribeQueries`

Returns a list of CloudWatch Logs Insights queries that are scheduled, running, or have been run recently in this account. You can request all queries or limit it to queries of a specific log group or queries with a certain status.

> Body parameter

```json
{
  "logGroupName": {},
  "status": {},
  "maxResults": {},
  "nextToken": "string"
}
```

<h3 id="describequeries-parameters">Parameters</h3>

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
|body|body|[DescribeQueriesRequest](#schemadescribequeriesrequest)|true|none|
|» logGroupName|body|object|false|none|
|» status|body|object|false|none|
|» maxResults|body|object|false|none|
|» nextToken|body|[NextToken](#schemanexttoken)|false|The token for the next set of items to return. The token expires after 24 hours.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Logs_20140328.DescribeQueries|

> Example responses

> 200 Response

```json
{
  "queries": {},
  "nextToken": "string"
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

<h3 id="describequeries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeQueriesResponse](#schemadescribequeriesresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeQueryDefinitions

<a id="opIdDescribeQueryDefinitions"></a>

> Code samples

```bash
curl 'https://logs.us-east-1.amazonaws.com/#X-Amz-Target=Logs_20140328.DescribeQueryDefinitions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Logs_20140328.DescribeQueryDefinitions' \
  -d '{
    "queryDefinitionNamePrefix": {},
    "maxResults": {},
    "nextToken": "string"
  }'
```

`POST /#X-Amz-Target=Logs_20140328.DescribeQueryDefinitions`

<p>This operation returns a paginated list of your saved CloudWatch Logs Insights query definitions.</p> <p>You can use the <code>queryDefinitionNamePrefix</code> parameter to limit the results to only the query definitions that have names that start with a certain string.</p>

> Body parameter

```json
{
  "queryDefinitionNamePrefix": {},
  "maxResults": {},
  "nextToken": "string"
}
```

<h3 id="describequerydefinitions-parameters">Parameters</h3>

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
|body|body|[DescribeQueryDefinitionsRequest](#schemadescribequerydefinitionsrequest)|true|none|
|» queryDefinitionNamePrefix|body|object|false|none|
|» maxResults|body|object|false|none|
|» nextToken|body|[NextToken](#schemanexttoken)|false|The token for the next set of items to return. The token expires after 24 hours.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Logs_20140328.DescribeQueryDefinitions|

> Example responses

> 200 Response

```json
{
  "queryDefinitions": {},
  "nextToken": "string"
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

<h3 id="describequerydefinitions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeQueryDefinitionsResponse](#schemadescribequerydefinitionsresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeResourcePolicies

<a id="opIdDescribeResourcePolicies"></a>

> Code samples

```bash
curl 'https://logs.us-east-1.amazonaws.com/#X-Amz-Target=Logs_20140328.DescribeResourcePolicies' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Logs_20140328.DescribeResourcePolicies' \
  -d '{
    "nextToken": "string",
    "limit": {}
  }'
```

`POST /#X-Amz-Target=Logs_20140328.DescribeResourcePolicies`

Lists the resource policies in this account.

> Body parameter

```json
{
  "nextToken": "string",
  "limit": {}
}
```

<h3 id="describeresourcepolicies-parameters">Parameters</h3>

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
|body|body|[DescribeResourcePoliciesRequest](#schemadescriberesourcepoliciesrequest)|true|none|
|» nextToken|body|[NextToken](#schemanexttoken)|false|The token for the next set of items to return. The token expires after 24 hours.|
|» limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Logs_20140328.DescribeResourcePolicies|

> Example responses

> 200 Response

```json
{
  "resourcePolicies": {},
  "nextToken": "string"
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

<h3 id="describeresourcepolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeResourcePoliciesResponse](#schemadescriberesourcepoliciesresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeSubscriptionFilters

<a id="opIdDescribeSubscriptionFilters"></a>

> Code samples

```bash
curl 'https://logs.us-east-1.amazonaws.com/#X-Amz-Target=Logs_20140328.DescribeSubscriptionFilters' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Logs_20140328.DescribeSubscriptionFilters' \
  -d '{
    "logGroupName": {},
    "filterNamePrefix": {},
    "nextToken": {},
    "limit": {}
  }'
```

`POST /#X-Amz-Target=Logs_20140328.DescribeSubscriptionFilters`

Lists the subscription filters for the specified log group. You can list all the subscription filters or filter the results by prefix. The results are ASCII-sorted by filter name.

> Body parameter

```json
{
  "logGroupName": {},
  "filterNamePrefix": {},
  "nextToken": {},
  "limit": {}
}
```

<h3 id="describesubscriptionfilters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeSubscriptionFiltersRequest](#schemadescribesubscriptionfiltersrequest)|true|none|
|» logGroupName|body|object|true|none|
|» filterNamePrefix|body|object|false|none|
|» nextToken|body|object|false|none|
|» limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Logs_20140328.DescribeSubscriptionFilters|

> Example responses

> 200 Response

```json
{
  "subscriptionFilters": {},
  "nextToken": "string"
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

<h3 id="describesubscriptionfilters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeSubscriptionFiltersResponse](#schemadescribesubscriptionfiltersresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateKmsKey

<a id="opIdDisassociateKmsKey"></a>

> Code samples

```bash
curl 'https://logs.us-east-1.amazonaws.com/#X-Amz-Target=Logs_20140328.DisassociateKmsKey' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Logs_20140328.DisassociateKmsKey' \
  -d '{
    "logGroupName": {},
    "resourceIdentifier": {}
  }'
```

`POST /#X-Amz-Target=Logs_20140328.DisassociateKmsKey`

<p>Disassociates the specified KMS key from the specified log group or from all CloudWatch Logs Insights query results in the account.</p> <p>When you use <code>DisassociateKmsKey</code>, you specify either the <code>logGroupName</code> parameter or the <code>resourceIdentifier</code> parameter. You can't specify both of those parameters in the same operation.</p> <ul> <li> <p>Specify the <code>logGroupName</code> parameter to stop using the KMS key to encrypt future log events ingested and stored in the log group. Instead, they will be encrypted with the default CloudWatch Logs method. The log events that were ingested while the key was associated with the log group are still encrypted with that key. Therefore, CloudWatch Logs will need permissions for the key whenever that data is accessed.</p> </li> <li> <p>Specify the <code>resourceIdentifier</code> parameter with the <code>query-result</code> resource to stop using the KMS key to encrypt the results of all future <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartQuery.html">StartQuery</a> operations in the account. They will instead be encrypted with the default CloudWatch Logs method. The results from queries that ran while the key was associated with the account are still encrypted with that key. Therefore, CloudWatch Logs will need permissions for the key whenever that data is accessed.</p> </li> </ul> <p>It can take up to 5 minutes for this operation to take effect.</p>

> Body parameter

```json
{
  "logGroupName": {},
  "resourceIdentifier": {}
}
```

<h3 id="disassociatekmskey-parameters">Parameters</h3>

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
|body|body|[DisassociateKmsKeyRequest](#schemadisassociatekmskeyrequest)|true|none|
|» logGroupName|body|object|false|none|
|» resourceIdentifier|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Logs_20140328.DisassociateKmsKey|

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

<h3 id="disassociatekmskey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|OperationAbortedException|[OperationAbortedException](#schemaoperationabortedexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## FilterLogEvents

<a id="opIdFilterLogEvents"></a>

> Code samples

```bash
curl 'https://logs.us-east-1.amazonaws.com/#X-Amz-Target=Logs_20140328.FilterLogEvents' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Logs_20140328.FilterLogEvents' \
  -d '{
    "logGroupName": {},
    "logGroupIdentifier": {},
    "logStreamNames": {},
    "logStreamNamePrefix": {},
    "startTime": {},
    "endTime": {},
    "filterPattern": {},
    "nextToken": {},
    "limit": {},
    "interleaved": {},
    "unmask": {}
  }'
```

`POST /#X-Amz-Target=Logs_20140328.FilterLogEvents`

<p>Lists log events from the specified log group. You can list all the log events or filter the results using a filter pattern, a time range, and the name of the log stream.</p> <p>You must have the <code>logs:FilterLogEvents</code> permission to perform this operation.</p> <p>You can specify the log group to search by using either <code>logGroupIdentifier</code> or <code>logGroupName</code>. You must include one of these two parameters, but you can't include both. </p> <p>By default, this operation returns as many log events as can fit in 1 MB (up to 10,000 log events) or all the events found within the specified time range. If the results include a token, that means there are more log events available. You can get additional results by specifying the token in a subsequent call. This operation can return empty results while there are more log events available through the token.</p> <p>The returned log events are sorted by event timestamp, the timestamp when the event was ingested by CloudWatch Logs, and the ID of the <code>PutLogEvents</code> request.</p> <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view data from the linked source accounts. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p>

> Body parameter

```json
{
  "logGroupName": {},
  "logGroupIdentifier": {},
  "logStreamNames": {},
  "logStreamNamePrefix": {},
  "startTime": {},
  "endTime": {},
  "filterPattern": {},
  "nextToken": {},
  "limit": {},
  "interleaved": {},
  "unmask": {}
}
```

<h3 id="filterlogevents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[FilterLogEventsRequest](#schemafilterlogeventsrequest)|true|none|
|» logGroupName|body|object|false|none|
|» logGroupIdentifier|body|object|false|none|
|» logStreamNames|body|object|false|none|
|» logStreamNamePrefix|body|object|false|none|
|» startTime|body|object|false|none|
|» endTime|body|object|false|none|
|» filterPattern|body|object|false|none|
|» nextToken|body|object|false|none|
|» limit|body|object|false|none|
|» interleaved|body|object|false|none|
|» unmask|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Logs_20140328.FilterLogEvents|

> Example responses

> 200 Response

```json
{
  "events": {},
  "searchedLogStreams": {},
  "nextToken": {}
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

<h3 id="filterlogevents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[FilterLogEventsResponse](#schemafilterlogeventsresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDataProtectionPolicy

<a id="opIdGetDataProtectionPolicy"></a>

> Code samples

```bash
curl 'https://logs.us-east-1.amazonaws.com/#X-Amz-Target=Logs_20140328.GetDataProtectionPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Logs_20140328.GetDataProtectionPolicy' \
  -d '{
    "logGroupIdentifier": {}
  }'
```

`POST /#X-Amz-Target=Logs_20140328.GetDataProtectionPolicy`

Returns information about a log group data protection policy.

> Body parameter

```json
{
  "logGroupIdentifier": {}
}
```

<h3 id="getdataprotectionpolicy-parameters">Parameters</h3>

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
|body|body|[GetDataProtectionPolicyRequest](#schemagetdataprotectionpolicyrequest)|true|none|
|» logGroupIdentifier|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Logs_20140328.GetDataProtectionPolicy|

> Example responses

> 200 Response

```json
{
  "logGroupIdentifier": {},
  "policyDocument": {},
  "lastUpdatedTime": {}
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

<h3 id="getdataprotectionpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDataProtectionPolicyResponse](#schemagetdataprotectionpolicyresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|OperationAbortedException|[OperationAbortedException](#schemaoperationabortedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetLogEvents

<a id="opIdGetLogEvents"></a>

> Code samples

```bash
curl 'https://logs.us-east-1.amazonaws.com/#X-Amz-Target=Logs_20140328.GetLogEvents' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Logs_20140328.GetLogEvents' \
  -d '{
    "logGroupName": {},
    "logGroupIdentifier": {},
    "logStreamName": {},
    "startTime": {},
    "endTime": {},
    "nextToken": {},
    "limit": {},
    "startFromHead": {},
    "unmask": {}
  }'
```

`POST /#X-Amz-Target=Logs_20140328.GetLogEvents`

<p>Lists log events from the specified log stream. You can list all of the log events or filter using a time range.</p> <p>By default, this operation returns as many log events as can fit in a response size of 1MB (up to 10,000 log events). You can get additional log events by specifying one of the tokens in a subsequent call. This operation can return empty results while there are more log events available through the token.</p> <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view data from the linked source accounts. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p> <p>You can specify the log group to search by using either <code>logGroupIdentifier</code> or <code>logGroupName</code>. You must include one of these two parameters, but you can't include both. </p>

> Body parameter

```json
{
  "logGroupName": {},
  "logGroupIdentifier": {},
  "logStreamName": {},
  "startTime": {},
  "endTime": {},
  "nextToken": {},
  "limit": {},
  "startFromHead": {},
  "unmask": {}
}
```

<h3 id="getlogevents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetLogEventsRequest](#schemagetlogeventsrequest)|true|none|
|» logGroupName|body|object|false|none|
|» logGroupIdentifier|body|object|false|none|
|» logStreamName|body|object|true|none|
|» startTime|body|object|false|none|
|» endTime|body|object|false|none|
|» nextToken|body|object|false|none|
|» limit|body|object|false|none|
|» startFromHead|body|object|false|none|
|» unmask|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Logs_20140328.GetLogEvents|

> Example responses

> 200 Response

```json
{
  "events": {},
  "nextForwardToken": {},
  "nextBackwardToken": {}
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

<h3 id="getlogevents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetLogEventsResponse](#schemagetlogeventsresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetLogGroupFields

<a id="opIdGetLogGroupFields"></a>

> Code samples

```bash
curl 'https://logs.us-east-1.amazonaws.com/#X-Amz-Target=Logs_20140328.GetLogGroupFields' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Logs_20140328.GetLogGroupFields' \
  -d '{
    "logGroupName": {},
    "time": {},
    "logGroupIdentifier": {}
  }'
```

`POST /#X-Amz-Target=Logs_20140328.GetLogGroupFields`

<p>Returns a list of the fields that are included in log events in the specified log group. Includes the percentage of log events that contain each field. The search is limited to a time period that you specify.</p> <p>You can specify the log group to search by using either <code>logGroupIdentifier</code> or <code>logGroupName</code>. You must specify one of these parameters, but you can't specify both. </p> <p>In the results, fields that start with <code>@</code> are fields generated by CloudWatch Logs. For example, <code>@timestamp</code> is the timestamp of each log event. For more information about the fields that are generated by CloudWatch logs, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_AnalyzeLogData-discoverable-fields.html">Supported Logs and Discovered Fields</a>.</p> <p>The response results are sorted by the frequency percentage, starting with the highest percentage.</p> <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view data from the linked source accounts. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p>

> Body parameter

```json
{
  "logGroupName": {},
  "time": {},
  "logGroupIdentifier": {}
}
```

<h3 id="getloggroupfields-parameters">Parameters</h3>

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
|body|body|[GetLogGroupFieldsRequest](#schemagetloggroupfieldsrequest)|true|none|
|» logGroupName|body|object|false|none|
|» time|body|object|false|none|
|» logGroupIdentifier|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Logs_20140328.GetLogGroupFields|

> Example responses

> 200 Response

```json
{
  "logGroupFields": {}
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

<h3 id="getloggroupfields-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetLogGroupFieldsResponse](#schemagetloggroupfieldsresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetLogRecord

<a id="opIdGetLogRecord"></a>

> Code samples

```bash
curl 'https://logs.us-east-1.amazonaws.com/#X-Amz-Target=Logs_20140328.GetLogRecord' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Logs_20140328.GetLogRecord' \
  -d '{
    "logRecordPointer": {},
    "unmask": {}
  }'
```

`POST /#X-Amz-Target=Logs_20140328.GetLogRecord`

<p>Retrieves all of the fields and values of a single log event. All fields are retrieved, even if the original query that produced the <code>logRecordPointer</code> retrieved only a subset of fields. Fields are returned as field name/field value pairs.</p> <p>The full unparsed log event is returned within <code>@message</code>.</p>

> Body parameter

```json
{
  "logRecordPointer": {},
  "unmask": {}
}
```

<h3 id="getlogrecord-parameters">Parameters</h3>

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
|body|body|[GetLogRecordRequest](#schemagetlogrecordrequest)|true|none|
|» logRecordPointer|body|object|true|none|
|» unmask|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Logs_20140328.GetLogRecord|

> Example responses

> 200 Response

```json
{
  "logRecord": {
    "property1": "string",
    "property2": "string"
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

<h3 id="getlogrecord-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetLogRecordResponse](#schemagetlogrecordresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetQueryResults

<a id="opIdGetQueryResults"></a>

> Code samples

```bash
curl 'https://logs.us-east-1.amazonaws.com/#X-Amz-Target=Logs_20140328.GetQueryResults' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Logs_20140328.GetQueryResults' \
  -d '{
    "queryId": {}
  }'
```

`POST /#X-Amz-Target=Logs_20140328.GetQueryResults`

<p>Returns the results from the specified query.</p> <p>Only the fields requested in the query are returned, along with a <code>@ptr</code> field, which is the identifier for the log record. You can use the value of <code>@ptr</code> in a <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogRecord.html">GetLogRecord</a> operation to get the full log record.</p> <p> <code>GetQueryResults</code> does not start running a query. To run a query, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartQuery.html">StartQuery</a>.</p> <p>If the value of the <code>Status</code> field in the output is <code>Running</code>, this operation returns only partial results. If you see a value of <code>Scheduled</code> or <code>Running</code> for the status, you can retry the operation later to see the final results. </p> <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account to start queries in linked source accounts. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p>

> Body parameter

```json
{
  "queryId": {}
}
```

<h3 id="getqueryresults-parameters">Parameters</h3>

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
|body|body|[GetQueryResultsRequest](#schemagetqueryresultsrequest)|true|none|
|» queryId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Logs_20140328.GetQueryResults|

> Example responses

> 200 Response

```json
{
  "results": {},
  "statistics": {
    "recordsMatched": {},
    "recordsScanned": {},
    "bytesScanned": {}
  },
  "status": {},
  "encryptionKey": {}
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

<h3 id="getqueryresults-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetQueryResultsResponse](#schemagetqueryresultsresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://logs.us-east-1.amazonaws.com/#X-Amz-Target=Logs_20140328.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Logs_20140328.ListTagsForResource' \
  -d '{
    "resourceArn": {}
  }'
```

`POST /#X-Amz-Target=Logs_20140328.ListTagsForResource`

Displays the tags associated with a CloudWatch Logs resource. Currently, log groups and destinations support tagging.

> Body parameter

```json
{
  "resourceArn": {}
}
```

<h3 id="listtagsforresource-parameters">Parameters</h3>

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
|body|body|[ListTagsForResourceRequest](#schemalisttagsforresourcerequest)|true|none|
|» resourceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Logs_20140328.ListTagsForResource|

> Example responses

> 200 Response

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsLogGroup

<a id="opIdListTagsLogGroup"></a>

> Code samples

```bash
curl 'https://logs.us-east-1.amazonaws.com/#X-Amz-Target=Logs_20140328.ListTagsLogGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Logs_20140328.ListTagsLogGroup' \
  -d '{
    "logGroupName": {}
  }'
```

`POST /#X-Amz-Target=Logs_20140328.ListTagsLogGroup`

<aside class="warning">
This operation is deprecated
</aside>

<important> <p>The ListTagsLogGroup operation is on the path to deprecation. We recommend that you use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListTagsForResource.html">ListTagsForResource</a> instead.</p> </important> <p>Lists the tags for the specified log group.</p>

> Body parameter

```json
{
  "logGroupName": {}
}
```

<h3 id="listtagsloggroup-parameters">Parameters</h3>

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
|body|body|[ListTagsLogGroupRequest](#schemalisttagsloggrouprequest)|true|none|
|» logGroupName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Logs_20140328.ListTagsLogGroup|

> Example responses

> 200 Response

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
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

<h3 id="listtagsloggroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsLogGroupResponse](#schemalisttagsloggroupresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutAccountPolicy

<a id="opIdPutAccountPolicy"></a>

> Code samples

```bash
curl 'https://logs.us-east-1.amazonaws.com/#X-Amz-Target=Logs_20140328.PutAccountPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Logs_20140328.PutAccountPolicy' \
  -d '{
    "policyName": {},
    "policyDocument": {},
    "policyType": {},
    "scope": {}
  }'
```

`POST /#X-Amz-Target=Logs_20140328.PutAccountPolicy`

<p>Creates an account-level data protection policy that applies to all log groups in the account. A data protection policy can help safeguard sensitive data that's ingested by your log groups by auditing and masking the sensitive log data. Each account can have only one account-level policy.</p> <important> <p>Sensitive data is detected and masked when it is ingested into a log group. When you set a data protection policy, log events ingested into the log groups before that time are not masked.</p> </important> <p>If you use <code>PutAccountPolicy</code> to create a data protection policy for your whole account, it applies to both existing log groups and all log groups that are created later in this account. The account policy is applied to existing log groups with eventual consistency. It might take up to 5 minutes before sensitive data in existing log groups begins to be masked.</p> <p>By default, when a user views a log event that includes masked data, the sensitive data is replaced by asterisks. A user who has the <code>logs:Unmask</code> permission can use a <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogEvents.html">GetLogEvents</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_FilterLogEvents.html">FilterLogEvents</a> operation with the <code>unmask</code> parameter set to <code>true</code> to view the unmasked log events. Users with the <code>logs:Unmask</code> can also view unmasked data in the CloudWatch Logs console by running a CloudWatch Logs Insights query with the <code>unmask</code> query command.</p> <p>For more information, including a list of types of data that can be audited and masked, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/mask-sensitive-log-data.html">Protect sensitive log data with masking</a>.</p> <p>To use the <code>PutAccountPolicy</code> operation, you must be signed on with the <code>logs:PutDataProtectionPolicy</code> and <code>logs:PutAccountPolicy</code> permissions.</p> <p>The <code>PutAccountPolicy</code> operation applies to all log groups in the account. You can also use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDataProtectionPolicy.html">PutDataProtectionPolicy</a> to create a data protection policy that applies to just one log group. If a log group has its own data protection policy and the account also has an account-level data protection policy, then the two policies are cumulative. Any sensitive term specified in either policy is masked.</p>

> Body parameter

```json
{
  "policyName": {},
  "policyDocument": {},
  "policyType": {},
  "scope": {}
}
```

<h3 id="putaccountpolicy-parameters">Parameters</h3>

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
|body|body|[PutAccountPolicyRequest](#schemaputaccountpolicyrequest)|true|none|
|» policyName|body|object|true|none|
|» policyDocument|body|object|true|none|
|» policyType|body|object|true|none|
|» scope|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Logs_20140328.PutAccountPolicy|

> Example responses

> 200 Response

```json
{
  "accountPolicy": {
    "policyName": {},
    "policyDocument": {},
    "lastUpdatedTime": {},
    "policyType": {},
    "scope": {},
    "accountId": {}
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

<h3 id="putaccountpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutAccountPolicyResponse](#schemaputaccountpolicyresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|OperationAbortedException|[OperationAbortedException](#schemaoperationabortedexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutDataProtectionPolicy

<a id="opIdPutDataProtectionPolicy"></a>

> Code samples

```bash
curl 'https://logs.us-east-1.amazonaws.com/#X-Amz-Target=Logs_20140328.PutDataProtectionPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Logs_20140328.PutDataProtectionPolicy' \
  -d '{
    "logGroupIdentifier": {},
    "policyDocument": {}
  }'
```

`POST /#X-Amz-Target=Logs_20140328.PutDataProtectionPolicy`

<p>Creates a data protection policy for the specified log group. A data protection policy can help safeguard sensitive data that's ingested by the log group by auditing and masking the sensitive log data.</p> <important> <p>Sensitive data is detected and masked when it is ingested into the log group. When you set a data protection policy, log events ingested into the log group before that time are not masked.</p> </important> <p>By default, when a user views a log event that includes masked data, the sensitive data is replaced by asterisks. A user who has the <code>logs:Unmask</code> permission can use a <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogEvents.html">GetLogEvents</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_FilterLogEvents.html">FilterLogEvents</a> operation with the <code>unmask</code> parameter set to <code>true</code> to view the unmasked log events. Users with the <code>logs:Unmask</code> can also view unmasked data in the CloudWatch Logs console by running a CloudWatch Logs Insights query with the <code>unmask</code> query command.</p> <p>For more information, including a list of types of data that can be audited and masked, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/mask-sensitive-log-data.html">Protect sensitive log data with masking</a>.</p> <p>The <code>PutDataProtectionPolicy</code> operation applies to only the specified log group. You can also use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutAccountPolicy.html">PutAccountPolicy</a> to create an account-level data protection policy that applies to all log groups in the account, including both existing log groups and log groups that are created level. If a log group has its own data protection policy and the account also has an account-level data protection policy, then the two policies are cumulative. Any sensitive term specified in either policy is masked.</p>

> Body parameter

```json
{
  "logGroupIdentifier": {},
  "policyDocument": {}
}
```

<h3 id="putdataprotectionpolicy-parameters">Parameters</h3>

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
|body|body|[PutDataProtectionPolicyRequest](#schemaputdataprotectionpolicyrequest)|true|none|
|» logGroupIdentifier|body|object|true|none|
|» policyDocument|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Logs_20140328.PutDataProtectionPolicy|

> Example responses

> 200 Response

```json
{
  "logGroupIdentifier": {},
  "policyDocument": {},
  "lastUpdatedTime": {}
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

<h3 id="putdataprotectionpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutDataProtectionPolicyResponse](#schemaputdataprotectionpolicyresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|OperationAbortedException|[OperationAbortedException](#schemaoperationabortedexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutDestination

<a id="opIdPutDestination"></a>

> Code samples

```bash
curl 'https://logs.us-east-1.amazonaws.com/#X-Amz-Target=Logs_20140328.PutDestination' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Logs_20140328.PutDestination' \
  -d '{
    "destinationName": {},
    "targetArn": {},
    "roleArn": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /#X-Amz-Target=Logs_20140328.PutDestination`

<p>Creates or updates a destination. This operation is used only to create destinations for cross-account subscriptions.</p> <p>A destination encapsulates a physical resource (such as an Amazon Kinesis stream). With a destination, you can subscribe to a real-time stream of log events for a different account, ingested using <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html">PutLogEvents</a>.</p> <p>Through an access policy, a destination controls what is written to it. By default, <code>PutDestination</code> does not set any access policy with the destination, which means a cross-account user cannot call <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutSubscriptionFilter.html">PutSubscriptionFilter</a> against this destination. To enable this, the destination owner must call <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDestinationPolicy.html">PutDestinationPolicy</a> after <code>PutDestination</code>.</p> <p>To perform a <code>PutDestination</code> operation, you must also have the <code>iam:PassRole</code> permission.</p>

> Body parameter

```json
{
  "destinationName": {},
  "targetArn": {},
  "roleArn": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="putdestination-parameters">Parameters</h3>

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
|body|body|[PutDestinationRequest](#schemaputdestinationrequest)|true|none|
|» destinationName|body|object|true|none|
|» targetArn|body|object|true|none|
|» roleArn|body|object|true|none|
|» tags|body|object|false|none|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Logs_20140328.PutDestination|

> Example responses

> 200 Response

```json
{
  "destination": {
    "destinationName": {},
    "targetArn": {},
    "roleArn": {},
    "accessPolicy": {},
    "arn": {},
    "creationTime": {}
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

<h3 id="putdestination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutDestinationResponse](#schemaputdestinationresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|OperationAbortedException|[OperationAbortedException](#schemaoperationabortedexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutDestinationPolicy

<a id="opIdPutDestinationPolicy"></a>

> Code samples

```bash
curl 'https://logs.us-east-1.amazonaws.com/#X-Amz-Target=Logs_20140328.PutDestinationPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Logs_20140328.PutDestinationPolicy' \
  -d '{
    "destinationName": {},
    "accessPolicy": {},
    "forceUpdate": {}
  }'
```

`POST /#X-Amz-Target=Logs_20140328.PutDestinationPolicy`

Creates or updates an access policy associated with an existing destination. An access policy is an <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies_overview.html">IAM policy document</a> that is used to authorize claims to register a subscription filter against a given destination.

> Body parameter

```json
{
  "destinationName": {},
  "accessPolicy": {},
  "forceUpdate": {}
}
```

<h3 id="putdestinationpolicy-parameters">Parameters</h3>

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
|body|body|[PutDestinationPolicyRequest](#schemaputdestinationpolicyrequest)|true|none|
|» destinationName|body|object|true|none|
|» accessPolicy|body|object|true|none|
|» forceUpdate|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Logs_20140328.PutDestinationPolicy|

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

<h3 id="putdestinationpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|OperationAbortedException|[OperationAbortedException](#schemaoperationabortedexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutLogEvents

<a id="opIdPutLogEvents"></a>

> Code samples

```bash
curl 'https://logs.us-east-1.amazonaws.com/#X-Amz-Target=Logs_20140328.PutLogEvents' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Logs_20140328.PutLogEvents' \
  -d '{
    "logGroupName": {},
    "logStreamName": {},
    "logEvents": {},
    "sequenceToken": {}
  }'
```

`POST /#X-Amz-Target=Logs_20140328.PutLogEvents`

<p>Uploads a batch of log events to the specified log stream.</p> <important> <p>The sequence token is now ignored in <code>PutLogEvents</code> actions. <code>PutLogEvents</code> actions are always accepted and never return <code>InvalidSequenceTokenException</code> or <code>DataAlreadyAcceptedException</code> even if the sequence token is not valid. You can use parallel <code>PutLogEvents</code> actions on the same log stream. </p> </important> <p>The batch of events must satisfy the following constraints:</p> <ul> <li> <p>The maximum batch size is 1,048,576 bytes. This size is calculated as the sum of all event messages in UTF-8, plus 26 bytes for each log event.</p> </li> <li> <p>None of the log events in the batch can be more than 2 hours in the future.</p> </li> <li> <p>None of the log events in the batch can be more than 14 days in the past. Also, none of the log events can be from earlier than the retention period of the log group.</p> </li> <li> <p>The log events in the batch must be in chronological order by their timestamp. The timestamp is the time that the event occurred, expressed as the number of milliseconds after <code>Jan 1, 1970 00:00:00 UTC</code>. (In Amazon Web Services Tools for PowerShell and the Amazon Web Services SDK for .NET, the timestamp is specified in .NET format: <code>yyyy-mm-ddThh:mm:ss</code>. For example, <code>2017-09-15T13:45:30</code>.) </p> </li> <li> <p>A batch of log events in a single request cannot span more than 24 hours. Otherwise, the operation fails.</p> </li> <li> <p>Each log event can be no larger than 256 KB.</p> </li> <li> <p>The maximum number of log events in a batch is 10,000.</p> </li> <li> <important> <p>The quota of five requests per second per log stream has been removed. Instead, <code>PutLogEvents</code> actions are throttled based on a per-second per-account quota. You can request an increase to the per-second throttling quota by using the Service Quotas service.</p> </important> </li> </ul> <p>If a call to <code>PutLogEvents</code> returns "UnrecognizedClientException" the most likely cause is a non-valid Amazon Web Services access key ID or secret key. </p>

> Body parameter

```json
{
  "logGroupName": {},
  "logStreamName": {},
  "logEvents": {},
  "sequenceToken": {}
}
```

<h3 id="putlogevents-parameters">Parameters</h3>

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
|body|body|[PutLogEventsRequest](#schemaputlogeventsrequest)|true|none|
|» logGroupName|body|object|true|none|
|» logStreamName|body|object|true|none|
|» logEvents|body|object|true|none|
|» sequenceToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Logs_20140328.PutLogEvents|

> Example responses

> 200 Response

```json
{
  "nextSequenceToken": {},
  "rejectedLogEventsInfo": {
    "tooNewLogEventStartIndex": {},
    "tooOldLogEventEndIndex": {},
    "expiredLogEventEndIndex": {}
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

<h3 id="putlogevents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutLogEventsResponse](#schemaputlogeventsresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InvalidSequenceTokenException|[InvalidSequenceTokenException](#schemainvalidsequencetokenexception)|
|482|482|DataAlreadyAcceptedException|[DataAlreadyAcceptedException](#schemadataalreadyacceptedexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|UnrecognizedClientException|[UnrecognizedClientException](#schemaunrecognizedclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutMetricFilter

<a id="opIdPutMetricFilter"></a>

> Code samples

```bash
curl 'https://logs.us-east-1.amazonaws.com/#X-Amz-Target=Logs_20140328.PutMetricFilter' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Logs_20140328.PutMetricFilter' \
  -d '{
    "logGroupName": {},
    "filterName": {},
    "filterPattern": {},
    "metricTransformations": {}
  }'
```

`POST /#X-Amz-Target=Logs_20140328.PutMetricFilter`

<p>Creates or updates a metric filter and associates it with the specified log group. With metric filters, you can configure rules to extract metric data from log events ingested through <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html">PutLogEvents</a>.</p> <p>The maximum number of metric filters that can be associated with a log group is 100.</p> <p>When you create a metric filter, you can also optionally assign a unit and dimensions to the metric that is created.</p> <important> <p>Metrics extracted from log events are charged as custom metrics. To prevent unexpected high charges, do not specify high-cardinality fields such as <code>IPAddress</code> or <code>requestID</code> as dimensions. Each different value found for a dimension is treated as a separate metric and accrues charges as a separate custom metric. </p> <p>CloudWatch Logs disables a metric filter if it generates 1,000 different name/value pairs for your specified dimensions within a certain amount of time. This helps to prevent accidental high charges.</p> <p>You can also set up a billing alarm to alert you if your charges are higher than expected. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html"> Creating a Billing Alarm to Monitor Your Estimated Amazon Web Services Charges</a>. </p> </important>

> Body parameter

```json
{
  "logGroupName": {},
  "filterName": {},
  "filterPattern": {},
  "metricTransformations": {}
}
```

<h3 id="putmetricfilter-parameters">Parameters</h3>

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
|body|body|[PutMetricFilterRequest](#schemaputmetricfilterrequest)|true|none|
|» logGroupName|body|object|true|none|
|» filterName|body|object|true|none|
|» filterPattern|body|object|true|none|
|» metricTransformations|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Logs_20140328.PutMetricFilter|

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

<h3 id="putmetricfilter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|OperationAbortedException|[OperationAbortedException](#schemaoperationabortedexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutQueryDefinition

<a id="opIdPutQueryDefinition"></a>

> Code samples

```bash
curl 'https://logs.us-east-1.amazonaws.com/#X-Amz-Target=Logs_20140328.PutQueryDefinition' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Logs_20140328.PutQueryDefinition' \
  -d '{
    "name": {},
    "queryDefinitionId": {},
    "logGroupNames": {},
    "queryString": {}
  }'
```

`POST /#X-Amz-Target=Logs_20140328.PutQueryDefinition`

<p>Creates or updates a query definition for CloudWatch Logs Insights. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html">Analyzing Log Data with CloudWatch Logs Insights</a>.</p> <p>To update a query definition, specify its <code>queryDefinitionId</code> in your request. The values of <code>name</code>, <code>queryString</code>, and <code>logGroupNames</code> are changed to the values that you specify in your update operation. No current values are retained from the current query definition. For example, imagine updating a current query definition that includes log groups. If you don't specify the <code>logGroupNames</code> parameter in your update operation, the query definition changes to contain no log groups.</p> <p>You must have the <code>logs:PutQueryDefinition</code> permission to be able to perform this operation.</p>

> Body parameter

```json
{
  "name": {},
  "queryDefinitionId": {},
  "logGroupNames": {},
  "queryString": {}
}
```

<h3 id="putquerydefinition-parameters">Parameters</h3>

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
|body|body|[PutQueryDefinitionRequest](#schemaputquerydefinitionrequest)|true|none|
|» name|body|object|true|none|
|» queryDefinitionId|body|object|false|none|
|» logGroupNames|body|object|false|none|
|» queryString|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Logs_20140328.PutQueryDefinition|

> Example responses

> 200 Response

```json
{
  "queryDefinitionId": {}
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

<h3 id="putquerydefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutQueryDefinitionResponse](#schemaputquerydefinitionresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutResourcePolicy

<a id="opIdPutResourcePolicy"></a>

> Code samples

```bash
curl 'https://logs.us-east-1.amazonaws.com/#X-Amz-Target=Logs_20140328.PutResourcePolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Logs_20140328.PutResourcePolicy' \
  -d '{
    "policyName": {},
    "policyDocument": {}
  }'
```

`POST /#X-Amz-Target=Logs_20140328.PutResourcePolicy`

Creates or updates a resource policy allowing other Amazon Web Services services to put log events to this account, such as Amazon Route 53. An account can have up to 10 resource policies per Amazon Web Services Region.

> Body parameter

```json
{
  "policyName": {},
  "policyDocument": {}
}
```

<h3 id="putresourcepolicy-parameters">Parameters</h3>

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
|body|body|[PutResourcePolicyRequest](#schemaputresourcepolicyrequest)|true|none|
|» policyName|body|object|false|none|
|» policyDocument|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Logs_20140328.PutResourcePolicy|

> Example responses

> 200 Response

```json
{
  "resourcePolicy": {
    "policyName": {},
    "policyDocument": {},
    "lastUpdatedTime": {}
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

<h3 id="putresourcepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutResourcePolicyResponse](#schemaputresourcepolicyresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutRetentionPolicy

<a id="opIdPutRetentionPolicy"></a>

> Code samples

```bash
curl 'https://logs.us-east-1.amazonaws.com/#X-Amz-Target=Logs_20140328.PutRetentionPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Logs_20140328.PutRetentionPolicy' \
  -d '{
    "logGroupName": {},
    "retentionInDays": 0
  }'
```

`POST /#X-Amz-Target=Logs_20140328.PutRetentionPolicy`

<p>Sets the retention of the specified log group. With a retention policy, you can configure the number of days for which to retain log events in the specified log group.</p> <note> <p>CloudWatch Logs doesn’t immediately delete log events when they reach their retention setting. It typically takes up to 72 hours after that before log events are deleted, but in rare situations might take longer.</p> <p>To illustrate, imagine that you change a log group to have a longer retention setting when it contains log events that are past the expiration date, but haven’t been deleted. Those log events will take up to 72 hours to be deleted after the new retention date is reached. To make sure that log data is deleted permanently, keep a log group at its lower retention setting until 72 hours after the previous retention period ends. Alternatively, wait to change the retention setting until you confirm that the earlier log events are deleted. </p> </note>

> Body parameter

```json
{
  "logGroupName": {},
  "retentionInDays": 0
}
```

<h3 id="putretentionpolicy-parameters">Parameters</h3>

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
|body|body|[PutRetentionPolicyRequest](#schemaputretentionpolicyrequest)|true|none|
|» logGroupName|body|object|true|none|
|» retentionInDays|body|[Days](#schemadays)|true|<p>The number of days to retain the log events in the specified log group. Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1096, 1827, 2192, 2557, 2922, 3288, and 3653.</p> <p>To set a log group so that its log events do not expire, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteRetentionPolicy.html">DeleteRetentionPolicy</a>. </p>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Logs_20140328.PutRetentionPolicy|

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

<h3 id="putretentionpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|OperationAbortedException|[OperationAbortedException](#schemaoperationabortedexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutSubscriptionFilter

<a id="opIdPutSubscriptionFilter"></a>

> Code samples

```bash
curl 'https://logs.us-east-1.amazonaws.com/#X-Amz-Target=Logs_20140328.PutSubscriptionFilter' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Logs_20140328.PutSubscriptionFilter' \
  -d '{
    "logGroupName": {},
    "filterName": {},
    "filterPattern": {},
    "destinationArn": {},
    "roleArn": {},
    "distribution": {}
  }'
```

`POST /#X-Amz-Target=Logs_20140328.PutSubscriptionFilter`

<p>Creates or updates a subscription filter and associates it with the specified log group. With subscription filters, you can subscribe to a real-time stream of log events ingested through <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html">PutLogEvents</a> and have them delivered to a specific destination. When log events are sent to the receiving service, they are Base64 encoded and compressed with the GZIP format.</p> <p>The following destinations are supported for subscription filters:</p> <ul> <li> <p>An Amazon Kinesis data stream belonging to the same account as the subscription filter, for same-account delivery.</p> </li> <li> <p>A logical destination created with <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDestination.html">PutDestination</a> that belongs to a different account, for cross-account delivery. We currently support Kinesis Data Streams and Kinesis Data Firehose as logical destinations.</p> </li> <li> <p>An Amazon Kinesis Data Firehose delivery stream that belongs to the same account as the subscription filter, for same-account delivery.</p> </li> <li> <p>An Lambda function that belongs to the same account as the subscription filter, for same-account delivery.</p> </li> </ul> <p>Each log group can have up to two subscription filters associated with it. If you are updating an existing filter, you must specify the correct name in <code>filterName</code>. </p> <p>To perform a <code>PutSubscriptionFilter</code> operation for any destination except a Lambda function, you must also have the <code>iam:PassRole</code> permission.</p>

> Body parameter

```json
{
  "logGroupName": {},
  "filterName": {},
  "filterPattern": {},
  "destinationArn": {},
  "roleArn": {},
  "distribution": {}
}
```

<h3 id="putsubscriptionfilter-parameters">Parameters</h3>

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
|body|body|[PutSubscriptionFilterRequest](#schemaputsubscriptionfilterrequest)|true|none|
|» logGroupName|body|object|true|none|
|» filterName|body|object|true|none|
|» filterPattern|body|object|true|none|
|» destinationArn|body|object|true|none|
|» roleArn|body|object|false|none|
|» distribution|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Logs_20140328.PutSubscriptionFilter|

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

<h3 id="putsubscriptionfilter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|OperationAbortedException|[OperationAbortedException](#schemaoperationabortedexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartQuery

<a id="opIdStartQuery"></a>

> Code samples

```bash
curl 'https://logs.us-east-1.amazonaws.com/#X-Amz-Target=Logs_20140328.StartQuery' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Logs_20140328.StartQuery' \
  -d '{
    "logGroupName": {},
    "logGroupNames": {},
    "logGroupIdentifiers": {},
    "startTime": {},
    "endTime": {},
    "queryString": {},
    "limit": {}
  }'
```

`POST /#X-Amz-Target=Logs_20140328.StartQuery`

<p>Schedules a query of a log group using CloudWatch Logs Insights. You specify the log group and time range to query and the query string to use.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html">CloudWatch Logs Insights Query Syntax</a>.</p> <p>After you run a query using <code>StartQuery</code>, the query results are stored by CloudWatch Logs. You can use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetQueryResults.html">GetQueryResults</a> to retrieve the results of a query, using the <code>queryId</code> that <code>StartQuery</code> returns. </p> <p>If you have associated a KMS key with the query results in this account, then <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartQuery.html">StartQuery</a> uses that key to encrypt the results when it stores them. If no key is associated with query results, the query results are encrypted with the default CloudWatch Logs encryption method.</p> <p>Queries time out after 60 minutes of runtime. If your queries are timing out, reduce the time range being searched or partition your query into a number of queries.</p> <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account to start a query in a linked source account. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>. For a cross-account <code>StartQuery</code> operation, the query definition must be defined in the monitoring account.</p> <p>You can have up to 30 concurrent CloudWatch Logs insights queries, including queries that have been added to dashboards. </p>

> Body parameter

```json
{
  "logGroupName": {},
  "logGroupNames": {},
  "logGroupIdentifiers": {},
  "startTime": {},
  "endTime": {},
  "queryString": {},
  "limit": {}
}
```

<h3 id="startquery-parameters">Parameters</h3>

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
|body|body|[StartQueryRequest](#schemastartqueryrequest)|true|none|
|» logGroupName|body|object|false|none|
|» logGroupNames|body|object|false|none|
|» logGroupIdentifiers|body|object|false|none|
|» startTime|body|object|true|none|
|» endTime|body|object|true|none|
|» queryString|body|object|true|none|
|» limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Logs_20140328.StartQuery|

> Example responses

> 200 Response

```json
{
  "queryId": {}
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

<h3 id="startquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartQueryResponse](#schemastartqueryresponse)|
|480|480|MalformedQueryException|[MalformedQueryException](#schemamalformedqueryexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopQuery

<a id="opIdStopQuery"></a>

> Code samples

```bash
curl 'https://logs.us-east-1.amazonaws.com/#X-Amz-Target=Logs_20140328.StopQuery' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Logs_20140328.StopQuery' \
  -d '{
    "queryId": {}
  }'
```

`POST /#X-Amz-Target=Logs_20140328.StopQuery`

Stops a CloudWatch Logs Insights query that is in progress. If the query has already ended, the operation returns an error indicating that the specified query is not running.

> Body parameter

```json
{
  "queryId": {}
}
```

<h3 id="stopquery-parameters">Parameters</h3>

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
|body|body|[StopQueryRequest](#schemastopqueryrequest)|true|none|
|» queryId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Logs_20140328.StopQuery|

> Example responses

> 200 Response

```json
{
  "success": {}
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

<h3 id="stopquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopQueryResponse](#schemastopqueryresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagLogGroup

<a id="opIdTagLogGroup"></a>

> Code samples

```bash
curl 'https://logs.us-east-1.amazonaws.com/#X-Amz-Target=Logs_20140328.TagLogGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Logs_20140328.TagLogGroup' \
  -d '{
    "logGroupName": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /#X-Amz-Target=Logs_20140328.TagLogGroup`

<aside class="warning">
This operation is deprecated
</aside>

<important> <p>The TagLogGroup operation is on the path to deprecation. We recommend that you use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_TagResource.html">TagResource</a> instead.</p> </important> <p>Adds or updates the specified tags for the specified log group.</p> <p>To list the tags for a log group, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListTagsForResource.html">ListTagsForResource</a>. To remove tags, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UntagResource.html">UntagResource</a>.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html#log-group-tagging">Tag Log Groups in Amazon CloudWatch Logs</a> in the <i>Amazon CloudWatch Logs User Guide</i>.</p> <p>CloudWatch Logs doesn’t support IAM policies that prevent users from assigning specified tags to log groups using the <code>aws:Resource/<i>key-name</i> </code> or <code>aws:TagKeys</code> condition keys. For more information about using tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Controlling access to Amazon Web Services resources using tags</a>.</p>

> Body parameter

```json
{
  "logGroupName": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="tagloggroup-parameters">Parameters</h3>

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
|body|body|[TagLogGroupRequest](#schematagloggrouprequest)|true|none|
|» logGroupName|body|object|true|none|
|» tags|body|object|true|none|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Logs_20140328.TagLogGroup|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="tagloggroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://logs.us-east-1.amazonaws.com/#X-Amz-Target=Logs_20140328.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Logs_20140328.TagResource' \
  -d '{
    "resourceArn": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /#X-Amz-Target=Logs_20140328.TagResource`

<p>Assigns one or more tags (key-value pairs) to the specified CloudWatch Logs resource. Currently, the only CloudWatch Logs resources that can be tagged are log groups and destinations. </p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a resource that already has tags. If you specify a new tag key for the alarm, this tag is appended to the list of tags associated with the alarm. If you specify a tag key that is already associated with the alarm, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a CloudWatch Logs resource.</p>

> Body parameter

```json
{
  "resourceArn": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
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
|body|body|[TagResourceRequest](#schematagresourcerequest)|true|none|
|» resourceArn|body|object|true|none|
|» tags|body|object|true|none|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Logs_20140328.TagResource|

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
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TestMetricFilter

<a id="opIdTestMetricFilter"></a>

> Code samples

```bash
curl 'https://logs.us-east-1.amazonaws.com/#X-Amz-Target=Logs_20140328.TestMetricFilter' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Logs_20140328.TestMetricFilter' \
  -d '{
    "filterPattern": "string",
    "logEventMessages": {}
  }'
```

`POST /#X-Amz-Target=Logs_20140328.TestMetricFilter`

Tests the filter pattern of a metric filter against a sample of log event messages. You can use this operation to validate the correctness of a metric filter pattern.

> Body parameter

```json
{
  "filterPattern": "string",
  "logEventMessages": {}
}
```

<h3 id="testmetricfilter-parameters">Parameters</h3>

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
|body|body|[TestMetricFilterRequest](#schematestmetricfilterrequest)|true|none|
|» filterPattern|body|[FilterPattern](#schemafilterpattern)|true|A symbolic description of how CloudWatch Logs should interpret the data in each log event. For example, a log event can contain timestamps, IP addresses, strings, and so on. You use the filter pattern to specify what to look for in the log event message.|
|» logEventMessages|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Logs_20140328.TestMetricFilter|

> Example responses

> 200 Response

```json
{
  "matches": {}
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

<h3 id="testmetricfilter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TestMetricFilterResponse](#schematestmetricfilterresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagLogGroup

<a id="opIdUntagLogGroup"></a>

> Code samples

```bash
curl 'https://logs.us-east-1.amazonaws.com/#X-Amz-Target=Logs_20140328.UntagLogGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Logs_20140328.UntagLogGroup' \
  -d '{
    "logGroupName": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=Logs_20140328.UntagLogGroup`

<aside class="warning">
This operation is deprecated
</aside>

<important> <p>The UntagLogGroup operation is on the path to deprecation. We recommend that you use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UntagResource.html">UntagResource</a> instead.</p> </important> <p>Removes the specified tags from the specified log group.</p> <p>To list the tags for a log group, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListTagsForResource.html">ListTagsForResource</a>. To add tags, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_TagResource.html">TagResource</a>.</p> <p>CloudWatch Logs doesn’t support IAM policies that prevent users from assigning specified tags to log groups using the <code>aws:Resource/<i>key-name</i> </code> or <code>aws:TagKeys</code> condition keys. </p>

> Body parameter

```json
{
  "logGroupName": {},
  "tags": {}
}
```

<h3 id="untagloggroup-parameters">Parameters</h3>

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
|body|body|[UntagLogGroupRequest](#schemauntagloggrouprequest)|true|none|
|» logGroupName|body|object|true|none|
|» tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Logs_20140328.UntagLogGroup|

> Example responses

> 480 Response

```json
null
```

<h3 id="untagloggroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://logs.us-east-1.amazonaws.com/#X-Amz-Target=Logs_20140328.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Logs_20140328.UntagResource' \
  -d '{
    "resourceArn": {},
    "tagKeys": {}
  }'
```

`POST /#X-Amz-Target=Logs_20140328.UntagResource`

Removes one or more tags from the specified resource.

> Body parameter

```json
{
  "resourceArn": {},
  "tagKeys": {}
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
|body|body|[UntagResourceRequest](#schemauntagresourcerequest)|true|none|
|» resourceArn|body|object|true|none|
|» tagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Logs_20140328.UntagResource|

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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AssociateKmsKeyRequest">AssociateKmsKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatekmskeyrequest"></a>
<a id="schema_AssociateKmsKeyRequest"></a>
<a id="tocSassociatekmskeyrequest"></a>
<a id="tocsassociatekmskeyrequest"></a>

```json
{
  "logGroupName": {},
  "kmsKeyId": {},
  "resourceIdentifier": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logGroupName|object|false|none|none|
|kmsKeyId|object|true|none|none|
|resourceIdentifier|object|false|none|none|

<h2 id="tocS_InvalidParameterException">InvalidParameterException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidparameterexception"></a>
<a id="schema_InvalidParameterException"></a>
<a id="tocSinvalidparameterexception"></a>
<a id="tocsinvalidparameterexception"></a>

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

<h2 id="tocS_OperationAbortedException">OperationAbortedException</h2>
<!-- backwards compatibility -->
<a id="schemaoperationabortedexception"></a>
<a id="schema_OperationAbortedException"></a>
<a id="tocSoperationabortedexception"></a>
<a id="tocsoperationabortedexception"></a>

```json
null
```

<h2 id="tocS_ServiceUnavailableException">ServiceUnavailableException</h2>
<!-- backwards compatibility -->
<a id="schemaserviceunavailableexception"></a>
<a id="schema_ServiceUnavailableException"></a>
<a id="tocSserviceunavailableexception"></a>
<a id="tocsserviceunavailableexception"></a>

```json
null
```

<h2 id="tocS_CancelExportTaskRequest">CancelExportTaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemacancelexporttaskrequest"></a>
<a id="schema_CancelExportTaskRequest"></a>
<a id="tocScancelexporttaskrequest"></a>
<a id="tocscancelexporttaskrequest"></a>

```json
{
  "taskId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taskId|object|true|none|none|

<h2 id="tocS_InvalidOperationException">InvalidOperationException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidoperationexception"></a>
<a id="schema_InvalidOperationException"></a>
<a id="tocSinvalidoperationexception"></a>
<a id="tocsinvalidoperationexception"></a>

```json
null
```

<h2 id="tocS_CreateExportTaskResponse">CreateExportTaskResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateexporttaskresponse"></a>
<a id="schema_CreateExportTaskResponse"></a>
<a id="tocScreateexporttaskresponse"></a>
<a id="tocscreateexporttaskresponse"></a>

```json
{
  "taskId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taskId|object|false|none|none|

<h2 id="tocS_CreateExportTaskRequest">CreateExportTaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateexporttaskrequest"></a>
<a id="schema_CreateExportTaskRequest"></a>
<a id="tocScreateexporttaskrequest"></a>
<a id="tocscreateexporttaskrequest"></a>

```json
{
  "taskName": {},
  "logGroupName": {},
  "logStreamNamePrefix": {},
  "from": {},
  "to": {},
  "destination": {},
  "destinationPrefix": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taskName|object|false|none|none|
|logGroupName|object|true|none|none|
|logStreamNamePrefix|object|false|none|none|
|from|object|true|none|none|
|to|object|true|none|none|
|destination|object|true|none|none|
|destinationPrefix|object|false|none|none|

<h2 id="tocS_LimitExceededException">LimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemalimitexceededexception"></a>
<a id="schema_LimitExceededException"></a>
<a id="tocSlimitexceededexception"></a>
<a id="tocslimitexceededexception"></a>

```json
null
```

<h2 id="tocS_ResourceAlreadyExistsException">ResourceAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcealreadyexistsexception"></a>
<a id="schema_ResourceAlreadyExistsException"></a>
<a id="tocSresourcealreadyexistsexception"></a>
<a id="tocsresourcealreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_CreateLogGroupRequest">CreateLogGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateloggrouprequest"></a>
<a id="schema_CreateLogGroupRequest"></a>
<a id="tocScreateloggrouprequest"></a>
<a id="tocscreateloggrouprequest"></a>

```json
{
  "logGroupName": {},
  "kmsKeyId": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logGroupName|object|true|none|none|
|kmsKeyId|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreateLogStreamRequest">CreateLogStreamRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatelogstreamrequest"></a>
<a id="schema_CreateLogStreamRequest"></a>
<a id="tocScreatelogstreamrequest"></a>
<a id="tocscreatelogstreamrequest"></a>

```json
{
  "logGroupName": {},
  "logStreamName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logGroupName|object|true|none|none|
|logStreamName|object|true|none|none|

<h2 id="tocS_DeleteAccountPolicyRequest">DeleteAccountPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteaccountpolicyrequest"></a>
<a id="schema_DeleteAccountPolicyRequest"></a>
<a id="tocSdeleteaccountpolicyrequest"></a>
<a id="tocsdeleteaccountpolicyrequest"></a>

```json
{
  "policyName": {},
  "policyType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policyName|object|true|none|none|
|policyType|object|true|none|none|

<h2 id="tocS_DeleteDataProtectionPolicyRequest">DeleteDataProtectionPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedataprotectionpolicyrequest"></a>
<a id="schema_DeleteDataProtectionPolicyRequest"></a>
<a id="tocSdeletedataprotectionpolicyrequest"></a>
<a id="tocsdeletedataprotectionpolicyrequest"></a>

```json
{
  "logGroupIdentifier": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logGroupIdentifier|object|true|none|none|

<h2 id="tocS_DeleteDestinationRequest">DeleteDestinationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedestinationrequest"></a>
<a id="schema_DeleteDestinationRequest"></a>
<a id="tocSdeletedestinationrequest"></a>
<a id="tocsdeletedestinationrequest"></a>

```json
{
  "destinationName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationName|object|true|none|none|

<h2 id="tocS_DeleteLogGroupRequest">DeleteLogGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteloggrouprequest"></a>
<a id="schema_DeleteLogGroupRequest"></a>
<a id="tocSdeleteloggrouprequest"></a>
<a id="tocsdeleteloggrouprequest"></a>

```json
{
  "logGroupName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logGroupName|object|true|none|none|

<h2 id="tocS_DeleteLogStreamRequest">DeleteLogStreamRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletelogstreamrequest"></a>
<a id="schema_DeleteLogStreamRequest"></a>
<a id="tocSdeletelogstreamrequest"></a>
<a id="tocsdeletelogstreamrequest"></a>

```json
{
  "logGroupName": {},
  "logStreamName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logGroupName|object|true|none|none|
|logStreamName|object|true|none|none|

<h2 id="tocS_DeleteMetricFilterRequest">DeleteMetricFilterRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletemetricfilterrequest"></a>
<a id="schema_DeleteMetricFilterRequest"></a>
<a id="tocSdeletemetricfilterrequest"></a>
<a id="tocsdeletemetricfilterrequest"></a>

```json
{
  "logGroupName": {},
  "filterName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logGroupName|object|true|none|none|
|filterName|object|true|none|none|

<h2 id="tocS_DeleteQueryDefinitionResponse">DeleteQueryDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletequerydefinitionresponse"></a>
<a id="schema_DeleteQueryDefinitionResponse"></a>
<a id="tocSdeletequerydefinitionresponse"></a>
<a id="tocsdeletequerydefinitionresponse"></a>

```json
{
  "success": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|object|false|none|none|

<h2 id="tocS_DeleteQueryDefinitionRequest">DeleteQueryDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletequerydefinitionrequest"></a>
<a id="schema_DeleteQueryDefinitionRequest"></a>
<a id="tocSdeletequerydefinitionrequest"></a>
<a id="tocsdeletequerydefinitionrequest"></a>

```json
{
  "queryDefinitionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|queryDefinitionId|object|true|none|none|

<h2 id="tocS_DeleteResourcePolicyRequest">DeleteResourcePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteresourcepolicyrequest"></a>
<a id="schema_DeleteResourcePolicyRequest"></a>
<a id="tocSdeleteresourcepolicyrequest"></a>
<a id="tocsdeleteresourcepolicyrequest"></a>

```json
{
  "policyName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policyName|object|false|none|none|

<h2 id="tocS_DeleteRetentionPolicyRequest">DeleteRetentionPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteretentionpolicyrequest"></a>
<a id="schema_DeleteRetentionPolicyRequest"></a>
<a id="tocSdeleteretentionpolicyrequest"></a>
<a id="tocsdeleteretentionpolicyrequest"></a>

```json
{
  "logGroupName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logGroupName|object|true|none|none|

<h2 id="tocS_DeleteSubscriptionFilterRequest">DeleteSubscriptionFilterRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletesubscriptionfilterrequest"></a>
<a id="schema_DeleteSubscriptionFilterRequest"></a>
<a id="tocSdeletesubscriptionfilterrequest"></a>
<a id="tocsdeletesubscriptionfilterrequest"></a>

```json
{
  "logGroupName": {},
  "filterName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logGroupName|object|true|none|none|
|filterName|object|true|none|none|

<h2 id="tocS_DescribeAccountPoliciesResponse">DescribeAccountPoliciesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaccountpoliciesresponse"></a>
<a id="schema_DescribeAccountPoliciesResponse"></a>
<a id="tocSdescribeaccountpoliciesresponse"></a>
<a id="tocsdescribeaccountpoliciesresponse"></a>

```json
{
  "accountPolicies": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountPolicies|object|false|none|none|

<h2 id="tocS_DescribeAccountPoliciesRequest">DescribeAccountPoliciesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaccountpoliciesrequest"></a>
<a id="schema_DescribeAccountPoliciesRequest"></a>
<a id="tocSdescribeaccountpoliciesrequest"></a>
<a id="tocsdescribeaccountpoliciesrequest"></a>

```json
{
  "policyType": {},
  "policyName": {},
  "accountIdentifiers": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policyType|object|true|none|none|
|policyName|object|false|none|none|
|accountIdentifiers|object|false|none|none|

<h2 id="tocS_DescribeDestinationsResponse">DescribeDestinationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribedestinationsresponse"></a>
<a id="schema_DescribeDestinationsResponse"></a>
<a id="tocSdescribedestinationsresponse"></a>
<a id="tocsdescribedestinationsresponse"></a>

```json
{
  "destinations": {},
  "nextToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinations|object|false|none|none|
|nextToken|[NextToken](#schemanexttoken)|false|none|The token for the next set of items to return. The token expires after 24 hours.|

<h2 id="tocS_DescribeDestinationsRequest">DescribeDestinationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedestinationsrequest"></a>
<a id="schema_DescribeDestinationsRequest"></a>
<a id="tocSdescribedestinationsrequest"></a>
<a id="tocsdescribedestinationsrequest"></a>

```json
{
  "DestinationNamePrefix": {},
  "nextToken": {},
  "limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DestinationNamePrefix|object|false|none|none|
|nextToken|object|false|none|none|
|limit|object|false|none|none|

<h2 id="tocS_DescribeExportTasksResponse">DescribeExportTasksResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeexporttasksresponse"></a>
<a id="schema_DescribeExportTasksResponse"></a>
<a id="tocSdescribeexporttasksresponse"></a>
<a id="tocsdescribeexporttasksresponse"></a>

```json
{
  "exportTasks": {},
  "nextToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exportTasks|object|false|none|none|
|nextToken|[NextToken](#schemanexttoken)|false|none|The token for the next set of items to return. The token expires after 24 hours.|

<h2 id="tocS_DescribeExportTasksRequest">DescribeExportTasksRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeexporttasksrequest"></a>
<a id="schema_DescribeExportTasksRequest"></a>
<a id="tocSdescribeexporttasksrequest"></a>
<a id="tocsdescribeexporttasksrequest"></a>

```json
{
  "taskId": {},
  "statusCode": {},
  "nextToken": {},
  "limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taskId|object|false|none|none|
|statusCode|object|false|none|none|
|nextToken|object|false|none|none|
|limit|object|false|none|none|

<h2 id="tocS_DescribeLogGroupsResponse">DescribeLogGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeloggroupsresponse"></a>
<a id="schema_DescribeLogGroupsResponse"></a>
<a id="tocSdescribeloggroupsresponse"></a>
<a id="tocsdescribeloggroupsresponse"></a>

```json
{
  "logGroups": {},
  "nextToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logGroups|object|false|none|none|
|nextToken|[NextToken](#schemanexttoken)|false|none|The token for the next set of items to return. The token expires after 24 hours.|

<h2 id="tocS_DescribeLogGroupsRequest">DescribeLogGroupsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeloggroupsrequest"></a>
<a id="schema_DescribeLogGroupsRequest"></a>
<a id="tocSdescribeloggroupsrequest"></a>
<a id="tocsdescribeloggroupsrequest"></a>

```json
{
  "accountIdentifiers": {},
  "logGroupNamePrefix": {},
  "logGroupNamePattern": {},
  "nextToken": {},
  "limit": {},
  "includeLinkedAccounts": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountIdentifiers|object|false|none|none|
|logGroupNamePrefix|object|false|none|none|
|logGroupNamePattern|object|false|none|none|
|nextToken|object|false|none|none|
|limit|object|false|none|none|
|includeLinkedAccounts|object|false|none|none|

<h2 id="tocS_DescribeLogStreamsResponse">DescribeLogStreamsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribelogstreamsresponse"></a>
<a id="schema_DescribeLogStreamsResponse"></a>
<a id="tocSdescribelogstreamsresponse"></a>
<a id="tocsdescribelogstreamsresponse"></a>

```json
{
  "logStreams": {},
  "nextToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logStreams|object|false|none|none|
|nextToken|[NextToken](#schemanexttoken)|false|none|The token for the next set of items to return. The token expires after 24 hours.|

<h2 id="tocS_DescribeLogStreamsRequest">DescribeLogStreamsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribelogstreamsrequest"></a>
<a id="schema_DescribeLogStreamsRequest"></a>
<a id="tocSdescribelogstreamsrequest"></a>
<a id="tocsdescribelogstreamsrequest"></a>

```json
{
  "logGroupName": {},
  "logGroupIdentifier": {},
  "logStreamNamePrefix": {},
  "orderBy": {},
  "descending": {},
  "nextToken": {},
  "limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logGroupName|object|false|none|none|
|logGroupIdentifier|object|false|none|none|
|logStreamNamePrefix|object|false|none|none|
|orderBy|object|false|none|none|
|descending|object|false|none|none|
|nextToken|object|false|none|none|
|limit|object|false|none|none|

<h2 id="tocS_DescribeMetricFiltersResponse">DescribeMetricFiltersResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribemetricfiltersresponse"></a>
<a id="schema_DescribeMetricFiltersResponse"></a>
<a id="tocSdescribemetricfiltersresponse"></a>
<a id="tocsdescribemetricfiltersresponse"></a>

```json
{
  "metricFilters": {},
  "nextToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metricFilters|object|false|none|none|
|nextToken|[NextToken](#schemanexttoken)|false|none|The token for the next set of items to return. The token expires after 24 hours.|

<h2 id="tocS_DescribeMetricFiltersRequest">DescribeMetricFiltersRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribemetricfiltersrequest"></a>
<a id="schema_DescribeMetricFiltersRequest"></a>
<a id="tocSdescribemetricfiltersrequest"></a>
<a id="tocsdescribemetricfiltersrequest"></a>

```json
{
  "logGroupName": {},
  "filterNamePrefix": {},
  "nextToken": {},
  "limit": {},
  "metricName": {},
  "metricNamespace": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logGroupName|object|false|none|none|
|filterNamePrefix|object|false|none|none|
|nextToken|object|false|none|none|
|limit|object|false|none|none|
|metricName|object|false|none|none|
|metricNamespace|object|false|none|none|

<h2 id="tocS_DescribeQueriesResponse">DescribeQueriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribequeriesresponse"></a>
<a id="schema_DescribeQueriesResponse"></a>
<a id="tocSdescribequeriesresponse"></a>
<a id="tocsdescribequeriesresponse"></a>

```json
{
  "queries": {},
  "nextToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|queries|object|false|none|none|
|nextToken|[NextToken](#schemanexttoken)|false|none|The token for the next set of items to return. The token expires after 24 hours.|

<h2 id="tocS_DescribeQueriesRequest">DescribeQueriesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribequeriesrequest"></a>
<a id="schema_DescribeQueriesRequest"></a>
<a id="tocSdescribequeriesrequest"></a>
<a id="tocsdescribequeriesrequest"></a>

```json
{
  "logGroupName": {},
  "status": {},
  "maxResults": {},
  "nextToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logGroupName|object|false|none|none|
|status|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|[NextToken](#schemanexttoken)|false|none|The token for the next set of items to return. The token expires after 24 hours.|

<h2 id="tocS_DescribeQueryDefinitionsResponse">DescribeQueryDefinitionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribequerydefinitionsresponse"></a>
<a id="schema_DescribeQueryDefinitionsResponse"></a>
<a id="tocSdescribequerydefinitionsresponse"></a>
<a id="tocsdescribequerydefinitionsresponse"></a>

```json
{
  "queryDefinitions": {},
  "nextToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|queryDefinitions|object|false|none|none|
|nextToken|[NextToken](#schemanexttoken)|false|none|The token for the next set of items to return. The token expires after 24 hours.|

<h2 id="tocS_DescribeQueryDefinitionsRequest">DescribeQueryDefinitionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribequerydefinitionsrequest"></a>
<a id="schema_DescribeQueryDefinitionsRequest"></a>
<a id="tocSdescribequerydefinitionsrequest"></a>
<a id="tocsdescribequerydefinitionsrequest"></a>

```json
{
  "queryDefinitionNamePrefix": {},
  "maxResults": {},
  "nextToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|queryDefinitionNamePrefix|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|[NextToken](#schemanexttoken)|false|none|The token for the next set of items to return. The token expires after 24 hours.|

<h2 id="tocS_DescribeResourcePoliciesResponse">DescribeResourcePoliciesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescriberesourcepoliciesresponse"></a>
<a id="schema_DescribeResourcePoliciesResponse"></a>
<a id="tocSdescriberesourcepoliciesresponse"></a>
<a id="tocsdescriberesourcepoliciesresponse"></a>

```json
{
  "resourcePolicies": {},
  "nextToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourcePolicies|object|false|none|none|
|nextToken|[NextToken](#schemanexttoken)|false|none|The token for the next set of items to return. The token expires after 24 hours.|

<h2 id="tocS_DescribeResourcePoliciesRequest">DescribeResourcePoliciesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescriberesourcepoliciesrequest"></a>
<a id="schema_DescribeResourcePoliciesRequest"></a>
<a id="tocSdescriberesourcepoliciesrequest"></a>
<a id="tocsdescriberesourcepoliciesrequest"></a>

```json
{
  "nextToken": "string",
  "limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|[NextToken](#schemanexttoken)|false|none|The token for the next set of items to return. The token expires after 24 hours.|
|limit|object|false|none|none|

<h2 id="tocS_DescribeSubscriptionFiltersResponse">DescribeSubscriptionFiltersResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribesubscriptionfiltersresponse"></a>
<a id="schema_DescribeSubscriptionFiltersResponse"></a>
<a id="tocSdescribesubscriptionfiltersresponse"></a>
<a id="tocsdescribesubscriptionfiltersresponse"></a>

```json
{
  "subscriptionFilters": {},
  "nextToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subscriptionFilters|object|false|none|none|
|nextToken|[NextToken](#schemanexttoken)|false|none|The token for the next set of items to return. The token expires after 24 hours.|

<h2 id="tocS_DescribeSubscriptionFiltersRequest">DescribeSubscriptionFiltersRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribesubscriptionfiltersrequest"></a>
<a id="schema_DescribeSubscriptionFiltersRequest"></a>
<a id="tocSdescribesubscriptionfiltersrequest"></a>
<a id="tocsdescribesubscriptionfiltersrequest"></a>

```json
{
  "logGroupName": {},
  "filterNamePrefix": {},
  "nextToken": {},
  "limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logGroupName|object|true|none|none|
|filterNamePrefix|object|false|none|none|
|nextToken|object|false|none|none|
|limit|object|false|none|none|

<h2 id="tocS_DisassociateKmsKeyRequest">DisassociateKmsKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatekmskeyrequest"></a>
<a id="schema_DisassociateKmsKeyRequest"></a>
<a id="tocSdisassociatekmskeyrequest"></a>
<a id="tocsdisassociatekmskeyrequest"></a>

```json
{
  "logGroupName": {},
  "resourceIdentifier": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logGroupName|object|false|none|none|
|resourceIdentifier|object|false|none|none|

<h2 id="tocS_FilterLogEventsResponse">FilterLogEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemafilterlogeventsresponse"></a>
<a id="schema_FilterLogEventsResponse"></a>
<a id="tocSfilterlogeventsresponse"></a>
<a id="tocsfilterlogeventsresponse"></a>

```json
{
  "events": {},
  "searchedLogStreams": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|events|object|false|none|none|
|searchedLogStreams|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_FilterLogEventsRequest">FilterLogEventsRequest</h2>
<!-- backwards compatibility -->
<a id="schemafilterlogeventsrequest"></a>
<a id="schema_FilterLogEventsRequest"></a>
<a id="tocSfilterlogeventsrequest"></a>
<a id="tocsfilterlogeventsrequest"></a>

```json
{
  "logGroupName": {},
  "logGroupIdentifier": {},
  "logStreamNames": {},
  "logStreamNamePrefix": {},
  "startTime": {},
  "endTime": {},
  "filterPattern": {},
  "nextToken": {},
  "limit": {},
  "interleaved": {},
  "unmask": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logGroupName|object|false|none|none|
|logGroupIdentifier|object|false|none|none|
|logStreamNames|object|false|none|none|
|logStreamNamePrefix|object|false|none|none|
|startTime|object|false|none|none|
|endTime|object|false|none|none|
|filterPattern|object|false|none|none|
|nextToken|object|false|none|none|
|limit|object|false|none|none|
|interleaved|object|false|none|none|
|unmask|object|false|none|none|

<h2 id="tocS_GetDataProtectionPolicyResponse">GetDataProtectionPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdataprotectionpolicyresponse"></a>
<a id="schema_GetDataProtectionPolicyResponse"></a>
<a id="tocSgetdataprotectionpolicyresponse"></a>
<a id="tocsgetdataprotectionpolicyresponse"></a>

```json
{
  "logGroupIdentifier": {},
  "policyDocument": {},
  "lastUpdatedTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logGroupIdentifier|object|false|none|none|
|policyDocument|object|false|none|none|
|lastUpdatedTime|object|false|none|none|

<h2 id="tocS_GetDataProtectionPolicyRequest">GetDataProtectionPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdataprotectionpolicyrequest"></a>
<a id="schema_GetDataProtectionPolicyRequest"></a>
<a id="tocSgetdataprotectionpolicyrequest"></a>
<a id="tocsgetdataprotectionpolicyrequest"></a>

```json
{
  "logGroupIdentifier": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logGroupIdentifier|object|true|none|none|

<h2 id="tocS_GetLogEventsResponse">GetLogEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetlogeventsresponse"></a>
<a id="schema_GetLogEventsResponse"></a>
<a id="tocSgetlogeventsresponse"></a>
<a id="tocsgetlogeventsresponse"></a>

```json
{
  "events": {},
  "nextForwardToken": {},
  "nextBackwardToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|events|object|false|none|none|
|nextForwardToken|object|false|none|none|
|nextBackwardToken|object|false|none|none|

<h2 id="tocS_GetLogEventsRequest">GetLogEventsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetlogeventsrequest"></a>
<a id="schema_GetLogEventsRequest"></a>
<a id="tocSgetlogeventsrequest"></a>
<a id="tocsgetlogeventsrequest"></a>

```json
{
  "logGroupName": {},
  "logGroupIdentifier": {},
  "logStreamName": {},
  "startTime": {},
  "endTime": {},
  "nextToken": {},
  "limit": {},
  "startFromHead": {},
  "unmask": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logGroupName|object|false|none|none|
|logGroupIdentifier|object|false|none|none|
|logStreamName|object|true|none|none|
|startTime|object|false|none|none|
|endTime|object|false|none|none|
|nextToken|object|false|none|none|
|limit|object|false|none|none|
|startFromHead|object|false|none|none|
|unmask|object|false|none|none|

<h2 id="tocS_GetLogGroupFieldsResponse">GetLogGroupFieldsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetloggroupfieldsresponse"></a>
<a id="schema_GetLogGroupFieldsResponse"></a>
<a id="tocSgetloggroupfieldsresponse"></a>
<a id="tocsgetloggroupfieldsresponse"></a>

```json
{
  "logGroupFields": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logGroupFields|object|false|none|none|

<h2 id="tocS_GetLogGroupFieldsRequest">GetLogGroupFieldsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetloggroupfieldsrequest"></a>
<a id="schema_GetLogGroupFieldsRequest"></a>
<a id="tocSgetloggroupfieldsrequest"></a>
<a id="tocsgetloggroupfieldsrequest"></a>

```json
{
  "logGroupName": {},
  "time": {},
  "logGroupIdentifier": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logGroupName|object|false|none|none|
|time|object|false|none|none|
|logGroupIdentifier|object|false|none|none|

<h2 id="tocS_GetLogRecordResponse">GetLogRecordResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetlogrecordresponse"></a>
<a id="schema_GetLogRecordResponse"></a>
<a id="tocSgetlogrecordresponse"></a>
<a id="tocsgetlogrecordresponse"></a>

```json
{
  "logRecord": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logRecord|object|false|none|none|

<h2 id="tocS_GetLogRecordRequest">GetLogRecordRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetlogrecordrequest"></a>
<a id="schema_GetLogRecordRequest"></a>
<a id="tocSgetlogrecordrequest"></a>
<a id="tocsgetlogrecordrequest"></a>

```json
{
  "logRecordPointer": {},
  "unmask": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logRecordPointer|object|true|none|none|
|unmask|object|false|none|none|

<h2 id="tocS_GetQueryResultsResponse">GetQueryResultsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetqueryresultsresponse"></a>
<a id="schema_GetQueryResultsResponse"></a>
<a id="tocSgetqueryresultsresponse"></a>
<a id="tocsgetqueryresultsresponse"></a>

```json
{
  "results": {},
  "statistics": {
    "recordsMatched": {},
    "recordsScanned": {},
    "bytesScanned": {}
  },
  "status": {},
  "encryptionKey": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|object|false|none|none|
|statistics|object|false|none|none|
|status|object|false|none|none|
|encryptionKey|object|false|none|none|

<h2 id="tocS_GetQueryResultsRequest">GetQueryResultsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetqueryresultsrequest"></a>
<a id="schema_GetQueryResultsRequest"></a>
<a id="tocSgetqueryresultsrequest"></a>
<a id="tocsgetqueryresultsrequest"></a>

```json
{
  "queryId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|queryId|object|true|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|false|none|none|

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{
  "resourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceArn|object|true|none|none|

<h2 id="tocS_ListTagsLogGroupResponse">ListTagsLogGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsloggroupresponse"></a>
<a id="schema_ListTagsLogGroupResponse"></a>
<a id="tocSlisttagsloggroupresponse"></a>
<a id="tocslisttagsloggroupresponse"></a>

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Please use the generic tagging API model ListTagsForResourceRequest and ListTagsForResourceResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|false|none|none|

<h2 id="tocS_ListTagsLogGroupRequest">ListTagsLogGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsloggrouprequest"></a>
<a id="schema_ListTagsLogGroupRequest"></a>
<a id="tocSlisttagsloggrouprequest"></a>
<a id="tocslisttagsloggrouprequest"></a>

```json
{
  "logGroupName": {}
}
```

Please use the generic tagging API model ListTagsForResourceRequest and ListTagsForResourceResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logGroupName|object|true|none|none|

<h2 id="tocS_PutAccountPolicyResponse">PutAccountPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputaccountpolicyresponse"></a>
<a id="schema_PutAccountPolicyResponse"></a>
<a id="tocSputaccountpolicyresponse"></a>
<a id="tocsputaccountpolicyresponse"></a>

```json
{
  "accountPolicy": {
    "policyName": {},
    "policyDocument": {},
    "lastUpdatedTime": {},
    "policyType": {},
    "scope": {},
    "accountId": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountPolicy|object|false|none|none|

<h2 id="tocS_PutAccountPolicyRequest">PutAccountPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputaccountpolicyrequest"></a>
<a id="schema_PutAccountPolicyRequest"></a>
<a id="tocSputaccountpolicyrequest"></a>
<a id="tocsputaccountpolicyrequest"></a>

```json
{
  "policyName": {},
  "policyDocument": {},
  "policyType": {},
  "scope": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policyName|object|true|none|none|
|policyDocument|object|true|none|none|
|policyType|object|true|none|none|
|scope|object|false|none|none|

<h2 id="tocS_PutDataProtectionPolicyResponse">PutDataProtectionPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputdataprotectionpolicyresponse"></a>
<a id="schema_PutDataProtectionPolicyResponse"></a>
<a id="tocSputdataprotectionpolicyresponse"></a>
<a id="tocsputdataprotectionpolicyresponse"></a>

```json
{
  "logGroupIdentifier": {},
  "policyDocument": {},
  "lastUpdatedTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logGroupIdentifier|object|false|none|none|
|policyDocument|object|false|none|none|
|lastUpdatedTime|object|false|none|none|

<h2 id="tocS_PutDataProtectionPolicyRequest">PutDataProtectionPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputdataprotectionpolicyrequest"></a>
<a id="schema_PutDataProtectionPolicyRequest"></a>
<a id="tocSputdataprotectionpolicyrequest"></a>
<a id="tocsputdataprotectionpolicyrequest"></a>

```json
{
  "logGroupIdentifier": {},
  "policyDocument": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logGroupIdentifier|object|true|none|none|
|policyDocument|object|true|none|none|

<h2 id="tocS_PutDestinationResponse">PutDestinationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputdestinationresponse"></a>
<a id="schema_PutDestinationResponse"></a>
<a id="tocSputdestinationresponse"></a>
<a id="tocsputdestinationresponse"></a>

```json
{
  "destination": {
    "destinationName": {},
    "targetArn": {},
    "roleArn": {},
    "accessPolicy": {},
    "arn": {},
    "creationTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destination|object|false|none|none|

<h2 id="tocS_PutDestinationRequest">PutDestinationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputdestinationrequest"></a>
<a id="schema_PutDestinationRequest"></a>
<a id="tocSputdestinationrequest"></a>
<a id="tocsputdestinationrequest"></a>

```json
{
  "destinationName": {},
  "targetArn": {},
  "roleArn": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationName|object|true|none|none|
|targetArn|object|true|none|none|
|roleArn|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_PutDestinationPolicyRequest">PutDestinationPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputdestinationpolicyrequest"></a>
<a id="schema_PutDestinationPolicyRequest"></a>
<a id="tocSputdestinationpolicyrequest"></a>
<a id="tocsputdestinationpolicyrequest"></a>

```json
{
  "destinationName": {},
  "accessPolicy": {},
  "forceUpdate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationName|object|true|none|none|
|accessPolicy|object|true|none|none|
|forceUpdate|object|false|none|none|

<h2 id="tocS_PutLogEventsResponse">PutLogEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputlogeventsresponse"></a>
<a id="schema_PutLogEventsResponse"></a>
<a id="tocSputlogeventsresponse"></a>
<a id="tocsputlogeventsresponse"></a>

```json
{
  "nextSequenceToken": {},
  "rejectedLogEventsInfo": {
    "tooNewLogEventStartIndex": {},
    "tooOldLogEventEndIndex": {},
    "expiredLogEventEndIndex": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextSequenceToken|object|false|none|none|
|rejectedLogEventsInfo|object|false|none|none|

<h2 id="tocS_PutLogEventsRequest">PutLogEventsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputlogeventsrequest"></a>
<a id="schema_PutLogEventsRequest"></a>
<a id="tocSputlogeventsrequest"></a>
<a id="tocsputlogeventsrequest"></a>

```json
{
  "logGroupName": {},
  "logStreamName": {},
  "logEvents": {},
  "sequenceToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logGroupName|object|true|none|none|
|logStreamName|object|true|none|none|
|logEvents|object|true|none|none|
|sequenceToken|object|false|none|none|

<h2 id="tocS_InvalidSequenceTokenException">InvalidSequenceTokenException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidsequencetokenexception"></a>
<a id="schema_InvalidSequenceTokenException"></a>
<a id="tocSinvalidsequencetokenexception"></a>
<a id="tocsinvalidsequencetokenexception"></a>

```json
null
```

<h2 id="tocS_DataAlreadyAcceptedException">DataAlreadyAcceptedException</h2>
<!-- backwards compatibility -->
<a id="schemadataalreadyacceptedexception"></a>
<a id="schema_DataAlreadyAcceptedException"></a>
<a id="tocSdataalreadyacceptedexception"></a>
<a id="tocsdataalreadyacceptedexception"></a>

```json
null
```

<h2 id="tocS_UnrecognizedClientException">UnrecognizedClientException</h2>
<!-- backwards compatibility -->
<a id="schemaunrecognizedclientexception"></a>
<a id="schema_UnrecognizedClientException"></a>
<a id="tocSunrecognizedclientexception"></a>
<a id="tocsunrecognizedclientexception"></a>

```json
null
```

<h2 id="tocS_PutMetricFilterRequest">PutMetricFilterRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputmetricfilterrequest"></a>
<a id="schema_PutMetricFilterRequest"></a>
<a id="tocSputmetricfilterrequest"></a>
<a id="tocsputmetricfilterrequest"></a>

```json
{
  "logGroupName": {},
  "filterName": {},
  "filterPattern": {},
  "metricTransformations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logGroupName|object|true|none|none|
|filterName|object|true|none|none|
|filterPattern|object|true|none|none|
|metricTransformations|object|true|none|none|

<h2 id="tocS_PutQueryDefinitionResponse">PutQueryDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputquerydefinitionresponse"></a>
<a id="schema_PutQueryDefinitionResponse"></a>
<a id="tocSputquerydefinitionresponse"></a>
<a id="tocsputquerydefinitionresponse"></a>

```json
{
  "queryDefinitionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|queryDefinitionId|object|false|none|none|

<h2 id="tocS_PutQueryDefinitionRequest">PutQueryDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputquerydefinitionrequest"></a>
<a id="schema_PutQueryDefinitionRequest"></a>
<a id="tocSputquerydefinitionrequest"></a>
<a id="tocsputquerydefinitionrequest"></a>

```json
{
  "name": {},
  "queryDefinitionId": {},
  "logGroupNames": {},
  "queryString": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|queryDefinitionId|object|false|none|none|
|logGroupNames|object|false|none|none|
|queryString|object|true|none|none|

<h2 id="tocS_PutResourcePolicyResponse">PutResourcePolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputresourcepolicyresponse"></a>
<a id="schema_PutResourcePolicyResponse"></a>
<a id="tocSputresourcepolicyresponse"></a>
<a id="tocsputresourcepolicyresponse"></a>

```json
{
  "resourcePolicy": {
    "policyName": {},
    "policyDocument": {},
    "lastUpdatedTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourcePolicy|object|false|none|none|

<h2 id="tocS_PutResourcePolicyRequest">PutResourcePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputresourcepolicyrequest"></a>
<a id="schema_PutResourcePolicyRequest"></a>
<a id="tocSputresourcepolicyrequest"></a>
<a id="tocsputresourcepolicyrequest"></a>

```json
{
  "policyName": {},
  "policyDocument": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policyName|object|false|none|none|
|policyDocument|object|false|none|none|

<h2 id="tocS_PutRetentionPolicyRequest">PutRetentionPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputretentionpolicyrequest"></a>
<a id="schema_PutRetentionPolicyRequest"></a>
<a id="tocSputretentionpolicyrequest"></a>
<a id="tocsputretentionpolicyrequest"></a>

```json
{
  "logGroupName": {},
  "retentionInDays": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logGroupName|object|true|none|none|
|retentionInDays|[Days](#schemadays)|true|none|<p>The number of days to retain the log events in the specified log group. Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1096, 1827, 2192, 2557, 2922, 3288, and 3653.</p> <p>To set a log group so that its log events do not expire, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteRetentionPolicy.html">DeleteRetentionPolicy</a>. </p>|

<h2 id="tocS_PutSubscriptionFilterRequest">PutSubscriptionFilterRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputsubscriptionfilterrequest"></a>
<a id="schema_PutSubscriptionFilterRequest"></a>
<a id="tocSputsubscriptionfilterrequest"></a>
<a id="tocsputsubscriptionfilterrequest"></a>

```json
{
  "logGroupName": {},
  "filterName": {},
  "filterPattern": {},
  "destinationArn": {},
  "roleArn": {},
  "distribution": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logGroupName|object|true|none|none|
|filterName|object|true|none|none|
|filterPattern|object|true|none|none|
|destinationArn|object|true|none|none|
|roleArn|object|false|none|none|
|distribution|object|false|none|none|

<h2 id="tocS_StartQueryResponse">StartQueryResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartqueryresponse"></a>
<a id="schema_StartQueryResponse"></a>
<a id="tocSstartqueryresponse"></a>
<a id="tocsstartqueryresponse"></a>

```json
{
  "queryId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|queryId|object|false|none|none|

<h2 id="tocS_StartQueryRequest">StartQueryRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartqueryrequest"></a>
<a id="schema_StartQueryRequest"></a>
<a id="tocSstartqueryrequest"></a>
<a id="tocsstartqueryrequest"></a>

```json
{
  "logGroupName": {},
  "logGroupNames": {},
  "logGroupIdentifiers": {},
  "startTime": {},
  "endTime": {},
  "queryString": {},
  "limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logGroupName|object|false|none|none|
|logGroupNames|object|false|none|none|
|logGroupIdentifiers|object|false|none|none|
|startTime|object|true|none|none|
|endTime|object|true|none|none|
|queryString|object|true|none|none|
|limit|object|false|none|none|

<h2 id="tocS_MalformedQueryException">MalformedQueryException</h2>
<!-- backwards compatibility -->
<a id="schemamalformedqueryexception"></a>
<a id="schema_MalformedQueryException"></a>
<a id="tocSmalformedqueryexception"></a>
<a id="tocsmalformedqueryexception"></a>

```json
null
```

<h2 id="tocS_StopQueryResponse">StopQueryResponse</h2>
<!-- backwards compatibility -->
<a id="schemastopqueryresponse"></a>
<a id="schema_StopQueryResponse"></a>
<a id="tocSstopqueryresponse"></a>
<a id="tocsstopqueryresponse"></a>

```json
{
  "success": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|object|false|none|none|

<h2 id="tocS_StopQueryRequest">StopQueryRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopqueryrequest"></a>
<a id="schema_StopQueryRequest"></a>
<a id="tocSstopqueryrequest"></a>
<a id="tocsstopqueryrequest"></a>

```json
{
  "queryId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|queryId|object|true|none|none|

<h2 id="tocS_TagLogGroupRequest">TagLogGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schematagloggrouprequest"></a>
<a id="schema_TagLogGroupRequest"></a>
<a id="tocStagloggrouprequest"></a>
<a id="tocstagloggrouprequest"></a>

```json
{
  "logGroupName": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Please use the generic tagging API model TagResourceRequest

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logGroupName|object|true|none|none|
|tags|object|true|none|none|

<h2 id="tocS_TagResourceRequest">TagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schematagresourcerequest"></a>
<a id="schema_TagResourceRequest"></a>
<a id="tocStagresourcerequest"></a>
<a id="tocstagresourcerequest"></a>

```json
{
  "resourceArn": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceArn|object|true|none|none|
|tags|object|true|none|none|

<h2 id="tocS_TooManyTagsException">TooManyTagsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanytagsexception"></a>
<a id="schema_TooManyTagsException"></a>
<a id="tocStoomanytagsexception"></a>
<a id="tocstoomanytagsexception"></a>

```json
null
```

<h2 id="tocS_TestMetricFilterResponse">TestMetricFilterResponse</h2>
<!-- backwards compatibility -->
<a id="schematestmetricfilterresponse"></a>
<a id="schema_TestMetricFilterResponse"></a>
<a id="tocStestmetricfilterresponse"></a>
<a id="tocstestmetricfilterresponse"></a>

```json
{
  "matches": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|matches|object|false|none|none|

<h2 id="tocS_TestMetricFilterRequest">TestMetricFilterRequest</h2>
<!-- backwards compatibility -->
<a id="schematestmetricfilterrequest"></a>
<a id="schema_TestMetricFilterRequest"></a>
<a id="tocStestmetricfilterrequest"></a>
<a id="tocstestmetricfilterrequest"></a>

```json
{
  "filterPattern": "string",
  "logEventMessages": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filterPattern|[FilterPattern](#schemafilterpattern)|true|none|A symbolic description of how CloudWatch Logs should interpret the data in each log event. For example, a log event can contain timestamps, IP addresses, strings, and so on. You use the filter pattern to specify what to look for in the log event message.|
|logEventMessages|object|true|none|none|

<h2 id="tocS_UntagLogGroupRequest">UntagLogGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagloggrouprequest"></a>
<a id="schema_UntagLogGroupRequest"></a>
<a id="tocSuntagloggrouprequest"></a>
<a id="tocsuntagloggrouprequest"></a>

```json
{
  "logGroupName": {},
  "tags": {}
}
```

Please use the generic tagging API model UntagResourceRequest

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logGroupName|object|true|none|none|
|tags|object|true|none|none|

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{
  "resourceArn": {},
  "tagKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceArn|object|true|none|none|
|tagKeys|object|true|none|none|

<h2 id="tocS_AccessPolicy">AccessPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaaccesspolicy"></a>
<a id="schema_AccessPolicy"></a>
<a id="tocSaccesspolicy"></a>
<a id="tocsaccesspolicy"></a>

```json
"string"
```

<h2 id="tocS_AccountId">AccountId</h2>
<!-- backwards compatibility -->
<a id="schemaaccountid"></a>
<a id="schema_AccountId"></a>
<a id="tocSaccountid"></a>
<a id="tocsaccountid"></a>

```json
"stringstring"
```

<h2 id="tocS_AccountIds">AccountIds</h2>
<!-- backwards compatibility -->
<a id="schemaaccountids"></a>
<a id="schema_AccountIds"></a>
<a id="tocSaccountids"></a>
<a id="tocsaccountids"></a>

```json
[
  "stringstring"
]
```

<h2 id="tocS_AccountPolicy">AccountPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaaccountpolicy"></a>
<a id="schema_AccountPolicy"></a>
<a id="tocSaccountpolicy"></a>
<a id="tocsaccountpolicy"></a>

```json
{
  "policyName": {},
  "policyDocument": {},
  "lastUpdatedTime": {},
  "policyType": {},
  "scope": {},
  "accountId": {}
}
```

A structure that contains information about one CloudWatch Logs account policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policyName|object|false|none|none|
|policyDocument|object|false|none|none|
|lastUpdatedTime|object|false|none|none|
|policyType|object|false|none|none|
|scope|object|false|none|none|
|accountId|object|false|none|none|

<h2 id="tocS_AccountPolicies">AccountPolicies</h2>
<!-- backwards compatibility -->
<a id="schemaaccountpolicies"></a>
<a id="schema_AccountPolicies"></a>
<a id="tocSaccountpolicies"></a>
<a id="tocsaccountpolicies"></a>

```json
[
  {
    "policyName": {},
    "policyDocument": {},
    "lastUpdatedTime": {},
    "policyType": {},
    "scope": {},
    "accountId": {}
  }
]
```

<h2 id="tocS_PolicyName">PolicyName</h2>
<!-- backwards compatibility -->
<a id="schemapolicyname"></a>
<a id="schema_PolicyName"></a>
<a id="tocSpolicyname"></a>
<a id="tocspolicyname"></a>

```json
"string"
```

<h2 id="tocS_AccountPolicyDocument">AccountPolicyDocument</h2>
<!-- backwards compatibility -->
<a id="schemaaccountpolicydocument"></a>
<a id="schema_AccountPolicyDocument"></a>
<a id="tocSaccountpolicydocument"></a>
<a id="tocsaccountpolicydocument"></a>

```json
"string"
```

<h2 id="tocS_Timestamp">Timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_Timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
0
```

<h2 id="tocS_PolicyType">PolicyType</h2>
<!-- backwards compatibility -->
<a id="schemapolicytype"></a>
<a id="schema_PolicyType"></a>
<a id="tocSpolicytype"></a>
<a id="tocspolicytype"></a>

```json
"DATA_PROTECTION_POLICY"
```

<h2 id="tocS_Scope">Scope</h2>
<!-- backwards compatibility -->
<a id="schemascope"></a>
<a id="schema_Scope"></a>
<a id="tocSscope"></a>
<a id="tocsscope"></a>

```json
"ALL"
```

<h2 id="tocS_AmazonResourceName">AmazonResourceName</h2>
<!-- backwards compatibility -->
<a id="schemaamazonresourcename"></a>
<a id="schema_AmazonResourceName"></a>
<a id="tocSamazonresourcename"></a>
<a id="tocsamazonresourcename"></a>

```json
"string"
```

<h2 id="tocS_Arn">Arn</h2>
<!-- backwards compatibility -->
<a id="schemaarn"></a>
<a id="schema_Arn"></a>
<a id="tocSarn"></a>
<a id="tocsarn"></a>

```json
"string"
```

<h2 id="tocS_LogGroupName">LogGroupName</h2>
<!-- backwards compatibility -->
<a id="schemaloggroupname"></a>
<a id="schema_LogGroupName"></a>
<a id="tocSloggroupname"></a>
<a id="tocsloggroupname"></a>

```json
"string"
```

<h2 id="tocS_KmsKeyId">KmsKeyId</h2>
<!-- backwards compatibility -->
<a id="schemakmskeyid"></a>
<a id="schema_KmsKeyId"></a>
<a id="tocSkmskeyid"></a>
<a id="tocskmskeyid"></a>

```json
"string"
```

<h2 id="tocS_ResourceIdentifier">ResourceIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaresourceidentifier"></a>
<a id="schema_ResourceIdentifier"></a>
<a id="tocSresourceidentifier"></a>
<a id="tocsresourceidentifier"></a>

```json
"string"
```

<h2 id="tocS_ExportTaskId">ExportTaskId</h2>
<!-- backwards compatibility -->
<a id="schemaexporttaskid"></a>
<a id="schema_ExportTaskId"></a>
<a id="tocSexporttaskid"></a>
<a id="tocsexporttaskid"></a>

```json
"string"
```

<h2 id="tocS_ExportTaskName">ExportTaskName</h2>
<!-- backwards compatibility -->
<a id="schemaexporttaskname"></a>
<a id="schema_ExportTaskName"></a>
<a id="tocSexporttaskname"></a>
<a id="tocsexporttaskname"></a>

```json
"string"
```

<h2 id="tocS_LogStreamName">LogStreamName</h2>
<!-- backwards compatibility -->
<a id="schemalogstreamname"></a>
<a id="schema_LogStreamName"></a>
<a id="tocSlogstreamname"></a>
<a id="tocslogstreamname"></a>

```json
"string"
```

<h2 id="tocS_ExportDestinationBucket">ExportDestinationBucket</h2>
<!-- backwards compatibility -->
<a id="schemaexportdestinationbucket"></a>
<a id="schema_ExportDestinationBucket"></a>
<a id="tocSexportdestinationbucket"></a>
<a id="tocsexportdestinationbucket"></a>

```json
"string"
```

<h2 id="tocS_ExportDestinationPrefix">ExportDestinationPrefix</h2>
<!-- backwards compatibility -->
<a id="schemaexportdestinationprefix"></a>
<a id="schema_ExportDestinationPrefix"></a>
<a id="tocSexportdestinationprefix"></a>
<a id="tocsexportdestinationprefix"></a>

```json
"string"
```

<h2 id="tocS_Tags">Tags</h2>
<!-- backwards compatibility -->
<a id="schematags"></a>
<a id="schema_Tags"></a>
<a id="tocStags"></a>
<a id="tocstags"></a>

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

<h2 id="tocS_DataProtectionPolicyDocument">DataProtectionPolicyDocument</h2>
<!-- backwards compatibility -->
<a id="schemadataprotectionpolicydocument"></a>
<a id="schema_DataProtectionPolicyDocument"></a>
<a id="tocSdataprotectionpolicydocument"></a>
<a id="tocsdataprotectionpolicydocument"></a>

```json
"string"
```

<h2 id="tocS_DataProtectionStatus">DataProtectionStatus</h2>
<!-- backwards compatibility -->
<a id="schemadataprotectionstatus"></a>
<a id="schema_DataProtectionStatus"></a>
<a id="tocSdataprotectionstatus"></a>
<a id="tocsdataprotectionstatus"></a>

```json
"ACTIVATED"
```

<h2 id="tocS_Days">Days</h2>
<!-- backwards compatibility -->
<a id="schemadays"></a>
<a id="schema_Days"></a>
<a id="tocSdays"></a>
<a id="tocsdays"></a>

```json
0
```

<p>The number of days to retain the log events in the specified log group. Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1096, 1827, 2192, 2557, 2922, 3288, and 3653.</p> <p>To set a log group so that its log events do not expire, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteRetentionPolicy.html">DeleteRetentionPolicy</a>. </p>

<h2 id="tocS_DefaultValue">DefaultValue</h2>
<!-- backwards compatibility -->
<a id="schemadefaultvalue"></a>
<a id="schema_DefaultValue"></a>
<a id="tocSdefaultvalue"></a>
<a id="tocsdefaultvalue"></a>

```json
0
```

<h2 id="tocS_LogGroupIdentifier">LogGroupIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaloggroupidentifier"></a>
<a id="schema_LogGroupIdentifier"></a>
<a id="tocSloggroupidentifier"></a>
<a id="tocsloggroupidentifier"></a>

```json
"string"
```

<h2 id="tocS_DestinationName">DestinationName</h2>
<!-- backwards compatibility -->
<a id="schemadestinationname"></a>
<a id="schema_DestinationName"></a>
<a id="tocSdestinationname"></a>
<a id="tocsdestinationname"></a>

```json
"string"
```

<h2 id="tocS_FilterName">FilterName</h2>
<!-- backwards compatibility -->
<a id="schemafiltername"></a>
<a id="schema_FilterName"></a>
<a id="tocSfiltername"></a>
<a id="tocsfiltername"></a>

```json
"string"
```

<h2 id="tocS_QueryId">QueryId</h2>
<!-- backwards compatibility -->
<a id="schemaqueryid"></a>
<a id="schema_QueryId"></a>
<a id="tocSqueryid"></a>
<a id="tocsqueryid"></a>

```json
"string"
```

<h2 id="tocS_Success">Success</h2>
<!-- backwards compatibility -->
<a id="schemasuccess"></a>
<a id="schema_Success"></a>
<a id="tocSsuccess"></a>
<a id="tocssuccess"></a>

```json
true
```

<h2 id="tocS_Descending">Descending</h2>
<!-- backwards compatibility -->
<a id="schemadescending"></a>
<a id="schema_Descending"></a>
<a id="tocSdescending"></a>
<a id="tocsdescending"></a>

```json
true
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

The token for the next set of items to return. The token expires after 24 hours.

<h2 id="tocS_DescribeLimit">DescribeLimit</h2>
<!-- backwards compatibility -->
<a id="schemadescribelimit"></a>
<a id="schema_DescribeLimit"></a>
<a id="tocSdescribelimit"></a>
<a id="tocsdescribelimit"></a>

```json
1
```

<h2 id="tocS_Destinations">Destinations</h2>
<!-- backwards compatibility -->
<a id="schemadestinations"></a>
<a id="schema_Destinations"></a>
<a id="tocSdestinations"></a>
<a id="tocsdestinations"></a>

```json
[
  {
    "destinationName": {},
    "targetArn": {},
    "roleArn": {},
    "accessPolicy": {},
    "arn": {},
    "creationTime": {}
  }
]
```

<h2 id="tocS_ExportTaskStatusCode">ExportTaskStatusCode</h2>
<!-- backwards compatibility -->
<a id="schemaexporttaskstatuscode"></a>
<a id="schema_ExportTaskStatusCode"></a>
<a id="tocSexporttaskstatuscode"></a>
<a id="tocsexporttaskstatuscode"></a>

```json
"CANCELLED"
```

<h2 id="tocS_ExportTasks">ExportTasks</h2>
<!-- backwards compatibility -->
<a id="schemaexporttasks"></a>
<a id="schema_ExportTasks"></a>
<a id="tocSexporttasks"></a>
<a id="tocsexporttasks"></a>

```json
[
  {
    "taskId": {},
    "taskName": {},
    "logGroupName": {},
    "from": {},
    "to": {},
    "destination": {},
    "destinationPrefix": {},
    "status": {
      "code": {},
      "message": {}
    },
    "executionInfo": {
      "creationTime": {},
      "completionTime": {}
    }
  }
]
```

<h2 id="tocS_LogGroupNamePattern">LogGroupNamePattern</h2>
<!-- backwards compatibility -->
<a id="schemaloggroupnamepattern"></a>
<a id="schema_LogGroupNamePattern"></a>
<a id="tocSloggroupnamepattern"></a>
<a id="tocsloggroupnamepattern"></a>

```json
"string"
```

<h2 id="tocS_IncludeLinkedAccounts">IncludeLinkedAccounts</h2>
<!-- backwards compatibility -->
<a id="schemaincludelinkedaccounts"></a>
<a id="schema_IncludeLinkedAccounts"></a>
<a id="tocSincludelinkedaccounts"></a>
<a id="tocsincludelinkedaccounts"></a>

```json
true
```

<h2 id="tocS_LogGroups">LogGroups</h2>
<!-- backwards compatibility -->
<a id="schemaloggroups"></a>
<a id="schema_LogGroups"></a>
<a id="tocSloggroups"></a>
<a id="tocsloggroups"></a>

```json
[
  {
    "logGroupName": {},
    "creationTime": {},
    "retentionInDays": 0,
    "metricFilterCount": {},
    "arn": {},
    "storedBytes": {},
    "kmsKeyId": {},
    "dataProtectionStatus": {},
    "inheritedProperties": {}
  }
]
```

<h2 id="tocS_OrderBy">OrderBy</h2>
<!-- backwards compatibility -->
<a id="schemaorderby"></a>
<a id="schema_OrderBy"></a>
<a id="tocSorderby"></a>
<a id="tocsorderby"></a>

```json
"LogStreamName"
```

<h2 id="tocS_LogStreams">LogStreams</h2>
<!-- backwards compatibility -->
<a id="schemalogstreams"></a>
<a id="schema_LogStreams"></a>
<a id="tocSlogstreams"></a>
<a id="tocslogstreams"></a>

```json
[
  {
    "logStreamName": {},
    "creationTime": {},
    "firstEventTimestamp": {},
    "lastEventTimestamp": {},
    "lastIngestionTime": {},
    "uploadSequenceToken": {},
    "arn": {},
    "storedBytes": {}
  }
]
```

<h2 id="tocS_MetricName">MetricName</h2>
<!-- backwards compatibility -->
<a id="schemametricname"></a>
<a id="schema_MetricName"></a>
<a id="tocSmetricname"></a>
<a id="tocsmetricname"></a>

```json
"string"
```

The name of the CloudWatch metric to which the monitored log information should be published. For example, you might publish to a metric named ErrorCount.

<h2 id="tocS_MetricNamespace">MetricNamespace</h2>
<!-- backwards compatibility -->
<a id="schemametricnamespace"></a>
<a id="schema_MetricNamespace"></a>
<a id="tocSmetricnamespace"></a>
<a id="tocsmetricnamespace"></a>

```json
"string"
```

<h2 id="tocS_MetricFilters">MetricFilters</h2>
<!-- backwards compatibility -->
<a id="schemametricfilters"></a>
<a id="schema_MetricFilters"></a>
<a id="tocSmetricfilters"></a>
<a id="tocsmetricfilters"></a>

```json
[
  {
    "filterName": {},
    "filterPattern": "string",
    "metricTransformations": {},
    "creationTime": {},
    "logGroupName": {}
  }
]
```

<h2 id="tocS_DescribeQueriesMaxResults">DescribeQueriesMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemadescribequeriesmaxresults"></a>
<a id="schema_DescribeQueriesMaxResults"></a>
<a id="tocSdescribequeriesmaxresults"></a>
<a id="tocsdescribequeriesmaxresults"></a>

```json
1
```

<h2 id="tocS_QueryStatus">QueryStatus</h2>
<!-- backwards compatibility -->
<a id="schemaquerystatus"></a>
<a id="schema_QueryStatus"></a>
<a id="tocSquerystatus"></a>
<a id="tocsquerystatus"></a>

```json
"Scheduled"
```

<h2 id="tocS_QueryInfoList">QueryInfoList</h2>
<!-- backwards compatibility -->
<a id="schemaqueryinfolist"></a>
<a id="schema_QueryInfoList"></a>
<a id="tocSqueryinfolist"></a>
<a id="tocsqueryinfolist"></a>

```json
[
  {
    "queryId": {},
    "queryString": {},
    "status": {},
    "createTime": {},
    "logGroupName": {}
  }
]
```

<h2 id="tocS_QueryDefinitionName">QueryDefinitionName</h2>
<!-- backwards compatibility -->
<a id="schemaquerydefinitionname"></a>
<a id="schema_QueryDefinitionName"></a>
<a id="tocSquerydefinitionname"></a>
<a id="tocsquerydefinitionname"></a>

```json
"string"
```

<h2 id="tocS_QueryListMaxResults">QueryListMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemaquerylistmaxresults"></a>
<a id="schema_QueryListMaxResults"></a>
<a id="tocSquerylistmaxresults"></a>
<a id="tocsquerylistmaxresults"></a>

```json
1
```

<h2 id="tocS_QueryDefinitionList">QueryDefinitionList</h2>
<!-- backwards compatibility -->
<a id="schemaquerydefinitionlist"></a>
<a id="schema_QueryDefinitionList"></a>
<a id="tocSquerydefinitionlist"></a>
<a id="tocsquerydefinitionlist"></a>

```json
[
  {
    "queryDefinitionId": {},
    "name": {},
    "queryString": {},
    "lastModified": {},
    "logGroupNames": {}
  }
]
```

<h2 id="tocS_ResourcePolicies">ResourcePolicies</h2>
<!-- backwards compatibility -->
<a id="schemaresourcepolicies"></a>
<a id="schema_ResourcePolicies"></a>
<a id="tocSresourcepolicies"></a>
<a id="tocsresourcepolicies"></a>

```json
[
  {
    "policyName": {},
    "policyDocument": {},
    "lastUpdatedTime": {}
  }
]
```

<h2 id="tocS_SubscriptionFilters">SubscriptionFilters</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionfilters"></a>
<a id="schema_SubscriptionFilters"></a>
<a id="tocSsubscriptionfilters"></a>
<a id="tocssubscriptionfilters"></a>

```json
[
  {
    "filterName": {},
    "logGroupName": {},
    "filterPattern": "string",
    "destinationArn": {},
    "roleArn": {},
    "distribution": "Random",
    "creationTime": {}
  }
]
```

<h2 id="tocS_TargetArn">TargetArn</h2>
<!-- backwards compatibility -->
<a id="schematargetarn"></a>
<a id="schema_TargetArn"></a>
<a id="tocStargetarn"></a>
<a id="tocstargetarn"></a>

```json
"string"
```

<h2 id="tocS_RoleArn">RoleArn</h2>
<!-- backwards compatibility -->
<a id="schemarolearn"></a>
<a id="schema_RoleArn"></a>
<a id="tocSrolearn"></a>
<a id="tocsrolearn"></a>

```json
"string"
```

<h2 id="tocS_Destination">Destination</h2>
<!-- backwards compatibility -->
<a id="schemadestination"></a>
<a id="schema_Destination"></a>
<a id="tocSdestination"></a>
<a id="tocsdestination"></a>

```json
{
  "destinationName": {},
  "targetArn": {},
  "roleArn": {},
  "accessPolicy": {},
  "arn": {},
  "creationTime": {}
}
```

Represents a cross-account destination that receives subscription log events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationName|object|false|none|none|
|targetArn|object|false|none|none|
|roleArn|object|false|none|none|
|accessPolicy|object|false|none|none|
|arn|object|false|none|none|
|creationTime|object|false|none|none|

<h2 id="tocS_DestinationArn">DestinationArn</h2>
<!-- backwards compatibility -->
<a id="schemadestinationarn"></a>
<a id="schema_DestinationArn"></a>
<a id="tocSdestinationarn"></a>
<a id="tocsdestinationarn"></a>

```json
"string"
```

<h2 id="tocS_DimensionsValue">DimensionsValue</h2>
<!-- backwards compatibility -->
<a id="schemadimensionsvalue"></a>
<a id="schema_DimensionsValue"></a>
<a id="tocSdimensionsvalue"></a>
<a id="tocsdimensionsvalue"></a>

```json
"string"
```

<h2 id="tocS_Dimensions">Dimensions</h2>
<!-- backwards compatibility -->
<a id="schemadimensions"></a>
<a id="schema_Dimensions"></a>
<a id="tocSdimensions"></a>
<a id="tocsdimensions"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[DimensionsValue](#schemadimensionsvalue)|false|none|none|

<h2 id="tocS_DimensionsKey">DimensionsKey</h2>
<!-- backwards compatibility -->
<a id="schemadimensionskey"></a>
<a id="schema_DimensionsKey"></a>
<a id="tocSdimensionskey"></a>
<a id="tocsdimensionskey"></a>

```json
"string"
```

<h2 id="tocS_Distribution">Distribution</h2>
<!-- backwards compatibility -->
<a id="schemadistribution"></a>
<a id="schema_Distribution"></a>
<a id="tocSdistribution"></a>
<a id="tocsdistribution"></a>

```json
"Random"
```

The method used to distribute log data to the destination, which can be either random or grouped by log stream.

<h2 id="tocS_EncryptionKey">EncryptionKey</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionkey"></a>
<a id="schema_EncryptionKey"></a>
<a id="tocSencryptionkey"></a>
<a id="tocsencryptionkey"></a>

```json
"string"
```

<h2 id="tocS_EventId">EventId</h2>
<!-- backwards compatibility -->
<a id="schemaeventid"></a>
<a id="schema_EventId"></a>
<a id="tocSeventid"></a>
<a id="tocseventid"></a>

```json
"string"
```

<h2 id="tocS_EventMessage">EventMessage</h2>
<!-- backwards compatibility -->
<a id="schemaeventmessage"></a>
<a id="schema_EventMessage"></a>
<a id="tocSeventmessage"></a>
<a id="tocseventmessage"></a>

```json
"string"
```

<h2 id="tocS_EventNumber">EventNumber</h2>
<!-- backwards compatibility -->
<a id="schemaeventnumber"></a>
<a id="schema_EventNumber"></a>
<a id="tocSeventnumber"></a>
<a id="tocseventnumber"></a>

```json
0
```

<h2 id="tocS_EventsLimit">EventsLimit</h2>
<!-- backwards compatibility -->
<a id="schemaeventslimit"></a>
<a id="schema_EventsLimit"></a>
<a id="tocSeventslimit"></a>
<a id="tocseventslimit"></a>

```json
1
```

<h2 id="tocS_ExportTaskStatus">ExportTaskStatus</h2>
<!-- backwards compatibility -->
<a id="schemaexporttaskstatus"></a>
<a id="schema_ExportTaskStatus"></a>
<a id="tocSexporttaskstatus"></a>
<a id="tocsexporttaskstatus"></a>

```json
{
  "code": {},
  "message": {}
}
```

Represents the status of an export task.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|object|false|none|none|
|message|object|false|none|none|

<h2 id="tocS_ExportTaskExecutionInfo">ExportTaskExecutionInfo</h2>
<!-- backwards compatibility -->
<a id="schemaexporttaskexecutioninfo"></a>
<a id="schema_ExportTaskExecutionInfo"></a>
<a id="tocSexporttaskexecutioninfo"></a>
<a id="tocsexporttaskexecutioninfo"></a>

```json
{
  "creationTime": {},
  "completionTime": {}
}
```

Represents the status of an export task.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creationTime|object|false|none|none|
|completionTime|object|false|none|none|

<h2 id="tocS_ExportTask">ExportTask</h2>
<!-- backwards compatibility -->
<a id="schemaexporttask"></a>
<a id="schema_ExportTask"></a>
<a id="tocSexporttask"></a>
<a id="tocsexporttask"></a>

```json
{
  "taskId": {},
  "taskName": {},
  "logGroupName": {},
  "from": {},
  "to": {},
  "destination": {},
  "destinationPrefix": {},
  "status": {
    "code": {},
    "message": {}
  },
  "executionInfo": {
    "creationTime": {},
    "completionTime": {}
  }
}
```

Represents an export task.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taskId|object|false|none|none|
|taskName|object|false|none|none|
|logGroupName|object|false|none|none|
|from|object|false|none|none|
|to|object|false|none|none|
|destination|object|false|none|none|
|destinationPrefix|object|false|none|none|
|status|object|false|none|none|
|executionInfo|object|false|none|none|

<h2 id="tocS_ExportTaskStatusMessage">ExportTaskStatusMessage</h2>
<!-- backwards compatibility -->
<a id="schemaexporttaskstatusmessage"></a>
<a id="schema_ExportTaskStatusMessage"></a>
<a id="tocSexporttaskstatusmessage"></a>
<a id="tocsexporttaskstatusmessage"></a>

```json
"string"
```

<h2 id="tocS_Value">Value</h2>
<!-- backwards compatibility -->
<a id="schemavalue"></a>
<a id="schema_Value"></a>
<a id="tocSvalue"></a>
<a id="tocsvalue"></a>

```json
"string"
```

<h2 id="tocS_ExtractedValues">ExtractedValues</h2>
<!-- backwards compatibility -->
<a id="schemaextractedvalues"></a>
<a id="schema_ExtractedValues"></a>
<a id="tocSextractedvalues"></a>
<a id="tocsextractedvalues"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[Value](#schemavalue)|false|none|none|

<h2 id="tocS_Field">Field</h2>
<!-- backwards compatibility -->
<a id="schemafield"></a>
<a id="schema_Field"></a>
<a id="tocSfield"></a>
<a id="tocsfield"></a>

```json
"string"
```

<h2 id="tocS_FilterCount">FilterCount</h2>
<!-- backwards compatibility -->
<a id="schemafiltercount"></a>
<a id="schema_FilterCount"></a>
<a id="tocSfiltercount"></a>
<a id="tocsfiltercount"></a>

```json
0
```

<h2 id="tocS_InputLogStreamNames">InputLogStreamNames</h2>
<!-- backwards compatibility -->
<a id="schemainputlogstreamnames"></a>
<a id="schema_InputLogStreamNames"></a>
<a id="tocSinputlogstreamnames"></a>
<a id="tocsinputlogstreamnames"></a>

```json
[
  "string"
]
```

<h2 id="tocS_FilterPattern">FilterPattern</h2>
<!-- backwards compatibility -->
<a id="schemafilterpattern"></a>
<a id="schema_FilterPattern"></a>
<a id="tocSfilterpattern"></a>
<a id="tocsfilterpattern"></a>

```json
"string"
```

A symbolic description of how CloudWatch Logs should interpret the data in each log event. For example, a log event can contain timestamps, IP addresses, strings, and so on. You use the filter pattern to specify what to look for in the log event message.

<h2 id="tocS_Interleaved">Interleaved</h2>
<!-- backwards compatibility -->
<a id="schemainterleaved"></a>
<a id="schema_Interleaved"></a>
<a id="tocSinterleaved"></a>
<a id="tocsinterleaved"></a>

```json
true
```

<h2 id="tocS_Unmask">Unmask</h2>
<!-- backwards compatibility -->
<a id="schemaunmask"></a>
<a id="schema_Unmask"></a>
<a id="tocSunmask"></a>
<a id="tocsunmask"></a>

```json
true
```

<h2 id="tocS_FilteredLogEvents">FilteredLogEvents</h2>
<!-- backwards compatibility -->
<a id="schemafilteredlogevents"></a>
<a id="schema_FilteredLogEvents"></a>
<a id="tocSfilteredlogevents"></a>
<a id="tocsfilteredlogevents"></a>

```json
[
  {
    "logStreamName": {},
    "timestamp": {},
    "message": {},
    "ingestionTime": {},
    "eventId": {}
  }
]
```

<h2 id="tocS_SearchedLogStreams">SearchedLogStreams</h2>
<!-- backwards compatibility -->
<a id="schemasearchedlogstreams"></a>
<a id="schema_SearchedLogStreams"></a>
<a id="tocSsearchedlogstreams"></a>
<a id="tocssearchedlogstreams"></a>

```json
[
  {
    "logStreamName": {},
    "searchedCompletely": {}
  }
]
```

<h2 id="tocS_FilteredLogEvent">FilteredLogEvent</h2>
<!-- backwards compatibility -->
<a id="schemafilteredlogevent"></a>
<a id="schema_FilteredLogEvent"></a>
<a id="tocSfilteredlogevent"></a>
<a id="tocsfilteredlogevent"></a>

```json
{
  "logStreamName": {},
  "timestamp": {},
  "message": {},
  "ingestionTime": {},
  "eventId": {}
}
```

Represents a matched event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logStreamName|object|false|none|none|
|timestamp|object|false|none|none|
|message|object|false|none|none|
|ingestionTime|object|false|none|none|
|eventId|object|false|none|none|

<h2 id="tocS_ForceUpdate">ForceUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaforceupdate"></a>
<a id="schema_ForceUpdate"></a>
<a id="tocSforceupdate"></a>
<a id="tocsforceupdate"></a>

```json
true
```

<h2 id="tocS_StartFromHead">StartFromHead</h2>
<!-- backwards compatibility -->
<a id="schemastartfromhead"></a>
<a id="schema_StartFromHead"></a>
<a id="tocSstartfromhead"></a>
<a id="tocsstartfromhead"></a>

```json
true
```

<h2 id="tocS_OutputLogEvents">OutputLogEvents</h2>
<!-- backwards compatibility -->
<a id="schemaoutputlogevents"></a>
<a id="schema_OutputLogEvents"></a>
<a id="tocSoutputlogevents"></a>
<a id="tocsoutputlogevents"></a>

```json
[
  {
    "timestamp": {},
    "message": {},
    "ingestionTime": {}
  }
]
```

<h2 id="tocS_LogGroupFieldList">LogGroupFieldList</h2>
<!-- backwards compatibility -->
<a id="schemaloggroupfieldlist"></a>
<a id="schema_LogGroupFieldList"></a>
<a id="tocSloggroupfieldlist"></a>
<a id="tocsloggroupfieldlist"></a>

```json
[
  {
    "name": {},
    "percent": {}
  }
]
```

<h2 id="tocS_LogRecordPointer">LogRecordPointer</h2>
<!-- backwards compatibility -->
<a id="schemalogrecordpointer"></a>
<a id="schema_LogRecordPointer"></a>
<a id="tocSlogrecordpointer"></a>
<a id="tocslogrecordpointer"></a>

```json
"string"
```

<h2 id="tocS_LogRecord">LogRecord</h2>
<!-- backwards compatibility -->
<a id="schemalogrecord"></a>
<a id="schema_LogRecord"></a>
<a id="tocSlogrecord"></a>
<a id="tocslogrecord"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[Value](#schemavalue)|false|none|none|

<h2 id="tocS_QueryResults">QueryResults</h2>
<!-- backwards compatibility -->
<a id="schemaqueryresults"></a>
<a id="schema_QueryResults"></a>
<a id="tocSqueryresults"></a>
<a id="tocsqueryresults"></a>

```json
[
  [
    {
      "field": {},
      "value": {}
    }
  ]
]
```

<h2 id="tocS_QueryStatistics">QueryStatistics</h2>
<!-- backwards compatibility -->
<a id="schemaquerystatistics"></a>
<a id="schema_QueryStatistics"></a>
<a id="tocSquerystatistics"></a>
<a id="tocsquerystatistics"></a>

```json
{
  "recordsMatched": {},
  "recordsScanned": {},
  "bytesScanned": {}
}
```

Contains the number of log events scanned by the query, the number of log events that matched the query criteria, and the total number of bytes in the log events that were scanned.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recordsMatched|object|false|none|none|
|recordsScanned|object|false|none|none|
|bytesScanned|object|false|none|none|

<h2 id="tocS_InheritedProperty">InheritedProperty</h2>
<!-- backwards compatibility -->
<a id="schemainheritedproperty"></a>
<a id="schema_InheritedProperty"></a>
<a id="tocSinheritedproperty"></a>
<a id="tocsinheritedproperty"></a>

```json
"ACCOUNT_DATA_PROTECTION"
```

<h2 id="tocS_InheritedProperties">InheritedProperties</h2>
<!-- backwards compatibility -->
<a id="schemainheritedproperties"></a>
<a id="schema_InheritedProperties"></a>
<a id="tocSinheritedproperties"></a>
<a id="tocsinheritedproperties"></a>

```json
[
  "ACCOUNT_DATA_PROTECTION"
]
```

<h2 id="tocS_InputLogEvent">InputLogEvent</h2>
<!-- backwards compatibility -->
<a id="schemainputlogevent"></a>
<a id="schema_InputLogEvent"></a>
<a id="tocSinputlogevent"></a>
<a id="tocsinputlogevent"></a>

```json
{
  "timestamp": {},
  "message": {}
}
```

Represents a log event, which is a record of activity that was recorded by the application or resource being monitored.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timestamp|object|true|none|none|
|message|object|true|none|none|

<h2 id="tocS_InputLogEvents">InputLogEvents</h2>
<!-- backwards compatibility -->
<a id="schemainputlogevents"></a>
<a id="schema_InputLogEvents"></a>
<a id="tocSinputlogevents"></a>
<a id="tocsinputlogevents"></a>

```json
[
  {
    "timestamp": {},
    "message": {}
  }
]
```

<h2 id="tocS_LogEventIndex">LogEventIndex</h2>
<!-- backwards compatibility -->
<a id="schemalogeventindex"></a>
<a id="schema_LogEventIndex"></a>
<a id="tocSlogeventindex"></a>
<a id="tocslogeventindex"></a>

```json
0
```

<h2 id="tocS_StoredBytes">StoredBytes</h2>
<!-- backwards compatibility -->
<a id="schemastoredbytes"></a>
<a id="schema_StoredBytes"></a>
<a id="tocSstoredbytes"></a>
<a id="tocsstoredbytes"></a>

```json
0
```

<h2 id="tocS_LogGroup">LogGroup</h2>
<!-- backwards compatibility -->
<a id="schemaloggroup"></a>
<a id="schema_LogGroup"></a>
<a id="tocSloggroup"></a>
<a id="tocsloggroup"></a>

```json
{
  "logGroupName": {},
  "creationTime": {},
  "retentionInDays": 0,
  "metricFilterCount": {},
  "arn": {},
  "storedBytes": {},
  "kmsKeyId": {},
  "dataProtectionStatus": {},
  "inheritedProperties": {}
}
```

Represents a log group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logGroupName|object|false|none|none|
|creationTime|object|false|none|none|
|retentionInDays|[Days](#schemadays)|false|none|<p>The number of days to retain the log events in the specified log group. Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1096, 1827, 2192, 2557, 2922, 3288, and 3653.</p> <p>To set a log group so that its log events do not expire, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteRetentionPolicy.html">DeleteRetentionPolicy</a>. </p>|
|metricFilterCount|object|false|none|none|
|arn|object|false|none|none|
|storedBytes|object|false|none|none|
|kmsKeyId|object|false|none|none|
|dataProtectionStatus|object|false|none|none|
|inheritedProperties|object|false|none|none|

<h2 id="tocS_Percentage">Percentage</h2>
<!-- backwards compatibility -->
<a id="schemapercentage"></a>
<a id="schema_Percentage"></a>
<a id="tocSpercentage"></a>
<a id="tocspercentage"></a>

```json
0
```

<h2 id="tocS_LogGroupField">LogGroupField</h2>
<!-- backwards compatibility -->
<a id="schemaloggroupfield"></a>
<a id="schema_LogGroupField"></a>
<a id="tocSloggroupfield"></a>
<a id="tocsloggroupfield"></a>

```json
{
  "name": {},
  "percent": {}
}
```

The fields contained in log events found by a <code>GetLogGroupFields</code> operation, along with the percentage of queried log events in which each field appears.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|percent|object|false|none|none|

<h2 id="tocS_LogGroupIdentifiers">LogGroupIdentifiers</h2>
<!-- backwards compatibility -->
<a id="schemaloggroupidentifiers"></a>
<a id="schema_LogGroupIdentifiers"></a>
<a id="tocSloggroupidentifiers"></a>
<a id="tocsloggroupidentifiers"></a>

```json
[
  "string"
]
```

<h2 id="tocS_LogGroupNames">LogGroupNames</h2>
<!-- backwards compatibility -->
<a id="schemaloggroupnames"></a>
<a id="schema_LogGroupNames"></a>
<a id="tocSloggroupnames"></a>
<a id="tocsloggroupnames"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SequenceToken">SequenceToken</h2>
<!-- backwards compatibility -->
<a id="schemasequencetoken"></a>
<a id="schema_SequenceToken"></a>
<a id="tocSsequencetoken"></a>
<a id="tocssequencetoken"></a>

```json
"string"
```

<h2 id="tocS_LogStream">LogStream</h2>
<!-- backwards compatibility -->
<a id="schemalogstream"></a>
<a id="schema_LogStream"></a>
<a id="tocSlogstream"></a>
<a id="tocslogstream"></a>

```json
{
  "logStreamName": {},
  "creationTime": {},
  "firstEventTimestamp": {},
  "lastEventTimestamp": {},
  "lastIngestionTime": {},
  "uploadSequenceToken": {},
  "arn": {},
  "storedBytes": {}
}
```

Represents a log stream, which is a sequence of log events from a single emitter of logs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logStreamName|object|false|none|none|
|creationTime|object|false|none|none|
|firstEventTimestamp|object|false|none|none|
|lastEventTimestamp|object|false|none|none|
|lastIngestionTime|object|false|none|none|
|uploadSequenceToken|object|false|none|none|
|arn|object|false|none|none|
|storedBytes|object|false|none|none|

<h2 id="tocS_LogStreamSearchedCompletely">LogStreamSearchedCompletely</h2>
<!-- backwards compatibility -->
<a id="schemalogstreamsearchedcompletely"></a>
<a id="schema_LogStreamSearchedCompletely"></a>
<a id="tocSlogstreamsearchedcompletely"></a>
<a id="tocslogstreamsearchedcompletely"></a>

```json
true
```

<h2 id="tocS_MetricTransformations">MetricTransformations</h2>
<!-- backwards compatibility -->
<a id="schemametrictransformations"></a>
<a id="schema_MetricTransformations"></a>
<a id="tocSmetrictransformations"></a>
<a id="tocsmetrictransformations"></a>

```json
[
  {
    "metricName": {},
    "metricNamespace": {},
    "metricValue": {},
    "defaultValue": {},
    "dimensions": {
      "property1": "string",
      "property2": "string"
    },
    "unit": {}
  }
]
```

<h2 id="tocS_MetricFilter">MetricFilter</h2>
<!-- backwards compatibility -->
<a id="schemametricfilter"></a>
<a id="schema_MetricFilter"></a>
<a id="tocSmetricfilter"></a>
<a id="tocsmetricfilter"></a>

```json
{
  "filterName": {},
  "filterPattern": "string",
  "metricTransformations": {},
  "creationTime": {},
  "logGroupName": {}
}
```

Metric filters express how CloudWatch Logs would extract metric observations from ingested log events and transform them into metric data in a CloudWatch metric.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filterName|object|false|none|none|
|filterPattern|[FilterPattern](#schemafilterpattern)|false|none|A symbolic description of how CloudWatch Logs should interpret the data in each log event. For example, a log event can contain timestamps, IP addresses, strings, and so on. You use the filter pattern to specify what to look for in the log event message.|
|metricTransformations|object|false|none|none|
|creationTime|object|false|none|none|
|logGroupName|object|false|none|none|

<h2 id="tocS_MetricFilterMatchRecord">MetricFilterMatchRecord</h2>
<!-- backwards compatibility -->
<a id="schemametricfiltermatchrecord"></a>
<a id="schema_MetricFilterMatchRecord"></a>
<a id="tocSmetricfiltermatchrecord"></a>
<a id="tocsmetricfiltermatchrecord"></a>

```json
{
  "eventNumber": {},
  "eventMessage": {},
  "extractedValues": {
    "property1": "string",
    "property2": "string"
  }
}
```

Represents a matched event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventNumber|object|false|none|none|
|eventMessage|object|false|none|none|
|extractedValues|object|false|none|none|

<h2 id="tocS_MetricFilterMatches">MetricFilterMatches</h2>
<!-- backwards compatibility -->
<a id="schemametricfiltermatches"></a>
<a id="schema_MetricFilterMatches"></a>
<a id="tocSmetricfiltermatches"></a>
<a id="tocsmetricfiltermatches"></a>

```json
[
  {
    "eventNumber": {},
    "eventMessage": {},
    "extractedValues": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_MetricValue">MetricValue</h2>
<!-- backwards compatibility -->
<a id="schemametricvalue"></a>
<a id="schema_MetricValue"></a>
<a id="tocSmetricvalue"></a>
<a id="tocsmetricvalue"></a>

```json
"string"
```

The value to publish to the CloudWatch metric. For example, if you're counting the occurrences of a term like <code>Error</code>, the value is <code>1</code> for each occurrence. If you're counting the bytes transferred, the value is the value in the log event.

<h2 id="tocS_StandardUnit">StandardUnit</h2>
<!-- backwards compatibility -->
<a id="schemastandardunit"></a>
<a id="schema_StandardUnit"></a>
<a id="tocSstandardunit"></a>
<a id="tocsstandardunit"></a>

```json
"Seconds"
```

<h2 id="tocS_MetricTransformation">MetricTransformation</h2>
<!-- backwards compatibility -->
<a id="schemametrictransformation"></a>
<a id="schema_MetricTransformation"></a>
<a id="tocSmetrictransformation"></a>
<a id="tocsmetrictransformation"></a>

```json
{
  "metricName": {},
  "metricNamespace": {},
  "metricValue": {},
  "defaultValue": {},
  "dimensions": {
    "property1": "string",
    "property2": "string"
  },
  "unit": {}
}
```

Indicates how to transform ingested log events to metric data in a CloudWatch metric.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metricName|object|true|none|none|
|metricNamespace|object|true|none|none|
|metricValue|object|true|none|none|
|defaultValue|object|false|none|none|
|dimensions|object|false|none|none|
|unit|object|false|none|none|

<h2 id="tocS_OutputLogEvent">OutputLogEvent</h2>
<!-- backwards compatibility -->
<a id="schemaoutputlogevent"></a>
<a id="schema_OutputLogEvent"></a>
<a id="tocSoutputlogevent"></a>
<a id="tocsoutputlogevent"></a>

```json
{
  "timestamp": {},
  "message": {},
  "ingestionTime": {}
}
```

Represents a log event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timestamp|object|false|none|none|
|message|object|false|none|none|
|ingestionTime|object|false|none|none|

<h2 id="tocS_PolicyDocument">PolicyDocument</h2>
<!-- backwards compatibility -->
<a id="schemapolicydocument"></a>
<a id="schema_PolicyDocument"></a>
<a id="tocSpolicydocument"></a>
<a id="tocspolicydocument"></a>

```json
"string"
```

<h2 id="tocS_RejectedLogEventsInfo">RejectedLogEventsInfo</h2>
<!-- backwards compatibility -->
<a id="schemarejectedlogeventsinfo"></a>
<a id="schema_RejectedLogEventsInfo"></a>
<a id="tocSrejectedlogeventsinfo"></a>
<a id="tocsrejectedlogeventsinfo"></a>

```json
{
  "tooNewLogEventStartIndex": {},
  "tooOldLogEventEndIndex": {},
  "expiredLogEventEndIndex": {}
}
```

Represents the rejected events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tooNewLogEventStartIndex|object|false|none|none|
|tooOldLogEventEndIndex|object|false|none|none|
|expiredLogEventEndIndex|object|false|none|none|

<h2 id="tocS_QueryDefinitionString">QueryDefinitionString</h2>
<!-- backwards compatibility -->
<a id="schemaquerydefinitionstring"></a>
<a id="schema_QueryDefinitionString"></a>
<a id="tocSquerydefinitionstring"></a>
<a id="tocsquerydefinitionstring"></a>

```json
"string"
```

<h2 id="tocS_ResourcePolicy">ResourcePolicy</h2>
<!-- backwards compatibility -->
<a id="schemaresourcepolicy"></a>
<a id="schema_ResourcePolicy"></a>
<a id="tocSresourcepolicy"></a>
<a id="tocsresourcepolicy"></a>

```json
{
  "policyName": {},
  "policyDocument": {},
  "lastUpdatedTime": {}
}
```

A policy enabling one or more entities to put logs to a log group in this account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policyName|object|false|none|none|
|policyDocument|object|false|none|none|
|lastUpdatedTime|object|false|none|none|

<h2 id="tocS_QueryDefinition">QueryDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaquerydefinition"></a>
<a id="schema_QueryDefinition"></a>
<a id="tocSquerydefinition"></a>
<a id="tocsquerydefinition"></a>

```json
{
  "queryDefinitionId": {},
  "name": {},
  "queryString": {},
  "lastModified": {},
  "logGroupNames": {}
}
```

This structure contains details about a saved CloudWatch Logs Insights query definition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|queryDefinitionId|object|false|none|none|
|name|object|false|none|none|
|queryString|object|false|none|none|
|lastModified|object|false|none|none|
|logGroupNames|object|false|none|none|

<h2 id="tocS_QueryString">QueryString</h2>
<!-- backwards compatibility -->
<a id="schemaquerystring"></a>
<a id="schema_QueryString"></a>
<a id="tocSquerystring"></a>
<a id="tocsquerystring"></a>

```json
"string"
```

<h2 id="tocS_QueryInfo">QueryInfo</h2>
<!-- backwards compatibility -->
<a id="schemaqueryinfo"></a>
<a id="schema_QueryInfo"></a>
<a id="tocSqueryinfo"></a>
<a id="tocsqueryinfo"></a>

```json
{
  "queryId": {},
  "queryString": {},
  "status": {},
  "createTime": {},
  "logGroupName": {}
}
```

Information about one CloudWatch Logs Insights query that matches the request in a <code>DescribeQueries</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|queryId|object|false|none|none|
|queryString|object|false|none|none|
|status|object|false|none|none|
|createTime|object|false|none|none|
|logGroupName|object|false|none|none|

<h2 id="tocS_ResultRows">ResultRows</h2>
<!-- backwards compatibility -->
<a id="schemaresultrows"></a>
<a id="schema_ResultRows"></a>
<a id="tocSresultrows"></a>
<a id="tocsresultrows"></a>

```json
[
  {
    "field": {},
    "value": {}
  }
]
```

<h2 id="tocS_StatsValue">StatsValue</h2>
<!-- backwards compatibility -->
<a id="schemastatsvalue"></a>
<a id="schema_StatsValue"></a>
<a id="tocSstatsvalue"></a>
<a id="tocsstatsvalue"></a>

```json
0
```

<h2 id="tocS_ResultField">ResultField</h2>
<!-- backwards compatibility -->
<a id="schemaresultfield"></a>
<a id="schema_ResultField"></a>
<a id="tocSresultfield"></a>
<a id="tocsresultfield"></a>

```json
{
  "field": {},
  "value": {}
}
```

<p>Contains one field from one log event returned by a CloudWatch Logs Insights query, along with the value of that field.</p> <p>For more information about the fields that are generated by CloudWatch logs, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_AnalyzeLogData-discoverable-fields.html">Supported Logs and Discovered Fields</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|object|false|none|none|
|value|object|false|none|none|

<h2 id="tocS_SearchedLogStream">SearchedLogStream</h2>
<!-- backwards compatibility -->
<a id="schemasearchedlogstream"></a>
<a id="schema_SearchedLogStream"></a>
<a id="tocSsearchedlogstream"></a>
<a id="tocssearchedlogstream"></a>

```json
{
  "logStreamName": {},
  "searchedCompletely": {}
}
```

Represents the search status of a log stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logStreamName|object|false|none|none|
|searchedCompletely|object|false|none|none|

<h2 id="tocS_SubscriptionFilter">SubscriptionFilter</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionfilter"></a>
<a id="schema_SubscriptionFilter"></a>
<a id="tocSsubscriptionfilter"></a>
<a id="tocssubscriptionfilter"></a>

```json
{
  "filterName": {},
  "logGroupName": {},
  "filterPattern": "string",
  "destinationArn": {},
  "roleArn": {},
  "distribution": "Random",
  "creationTime": {}
}
```

Represents a subscription filter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filterName|object|false|none|none|
|logGroupName|object|false|none|none|
|filterPattern|[FilterPattern](#schemafilterpattern)|false|none|A symbolic description of how CloudWatch Logs should interpret the data in each log event. For example, a log event can contain timestamps, IP addresses, strings, and so on. You use the filter pattern to specify what to look for in the log event message.|
|destinationArn|object|false|none|none|
|roleArn|object|false|none|none|
|distribution|[Distribution](#schemadistribution)|false|none|The method used to distribute log data to the destination, which can be either random or grouped by log stream.|
|creationTime|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|distribution|Random|
|distribution|ByLogStream|

<h2 id="tocS_TagKey">TagKey</h2>
<!-- backwards compatibility -->
<a id="schematagkey"></a>
<a id="schema_TagKey"></a>
<a id="tocStagkey"></a>
<a id="tocstagkey"></a>

```json
"string"
```

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

<h2 id="tocS_TagList">TagList</h2>
<!-- backwards compatibility -->
<a id="schemataglist"></a>
<a id="schema_TagList"></a>
<a id="tocStaglist"></a>
<a id="tocstaglist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

<h2 id="tocS_TestEventMessages">TestEventMessages</h2>
<!-- backwards compatibility -->
<a id="schematesteventmessages"></a>
<a id="schema_TestEventMessages"></a>
<a id="tocStesteventmessages"></a>
<a id="tocstesteventmessages"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Token">Token</h2>
<!-- backwards compatibility -->
<a id="schematoken"></a>
<a id="schema_Token"></a>
<a id="tocStoken"></a>
<a id="tocstoken"></a>

```json
"string"
```
