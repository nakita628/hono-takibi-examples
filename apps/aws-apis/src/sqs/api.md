<h1 id="amazon-simple-queue-service">Amazon Simple Queue Service v2012-11-05</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>Welcome to the <i>Amazon SQS API Reference</i>.</p> <p>Amazon SQS is a reliable, highly-scalable hosted queue for storing messages as they travel between applications or microservices. Amazon SQS moves data between distributed application components and helps you decouple these components.</p> <p>For information on the permissions you need to use this API, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-authentication-and-access-control.html">Identity and access management</a> in the <i>Amazon SQS Developer Guide.</i> </p> <p>You can use <a href="http://aws.amazon.com/tools/#sdk">Amazon Web Services SDKs</a> to access Amazon SQS using your favorite programming language. The SDKs perform tasks such as the following automatically:</p> <ul> <li> <p>Cryptographically sign your service requests</p> </li> <li> <p>Retry requests</p> </li> <li> <p>Handle error responses</p> </li> </ul> <p> <b>Additional information</b> </p> <ul> <li> <p> <a href="http://aws.amazon.com/sqs/">Amazon SQS Product Page</a> </p> </li> <li> <p> <i>Amazon SQS Developer Guide</i> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-making-api-requests.html">Making API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-message-metadata.html#sqs-message-attributes">Amazon SQS Message Attributes</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html">Amazon SQS Dead-Letter Queues</a> </p> </li> </ul> </li> <li> <p> <a href="http://docs.aws.amazon.com/cli/latest/reference/sqs/index.html">Amazon SQS in the <i>Command Line Interface</i> </a> </p> </li> <li> <p> <i>Amazon Web Services General Reference</i> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#sqs_region">Regions and Endpoints</a> </p> </li> </ul> </li> </ul>

Base URLs:

* <a href="http://sqs.us-east-1.amazonaws.com">http://sqs.us-east-1.amazonaws.com</a> - The Amazon SQS multi-region endpoint

* <a href="https://sqs.us-east-1.amazonaws.com">https://sqs.us-east-1.amazonaws.com</a> - The Amazon SQS multi-region endpoint

* <a href="http://sqs.cn-north-1.amazonaws.com.cn">http://sqs.cn-north-1.amazonaws.com.cn</a> - The Amazon SQS endpoint for China (Beijing) and China (Ningxia)

* <a href="https://sqs.cn-north-1.amazonaws.com.cn">https://sqs.cn-north-1.amazonaws.com.cn</a> - The Amazon SQS endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/sqs/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-simple-queue-service-default">Default</h1>

## GET_AddPermission

<a id="opIdGET_AddPermission"></a>

> Code samples

```bash
curl 'https://sqs.us-east-1.amazonaws.com/0/string/#Action=AddPermission?Label=string&AWSAccountIds=%7B%7D&Actions=%7B%7D&Action=AddPermission&Version=2012-11-05' \
  -H "Authorization: ${API_KEY}"
```

`GET /{AccountNumber}/{QueueName}/#Action=AddPermission`

<p>Adds a permission to a queue for a specific <a href="https://docs.aws.amazon.com/general/latest/gr/glos-chap.html#P">principal</a>. This allows sharing access to the queue.</p> <p>When you create a queue, you have full control access rights for the queue. Only you, the owner of the queue, can grant or deny permissions to the queue. For more information about these permissions, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-writing-an-sqs-policy.html#write-messages-to-shared-queue">Allow Developers to Write Messages to a Shared Queue</a> in the <i>Amazon SQS Developer Guide</i>.</p> <note> <ul> <li> <p> <code>AddPermission</code> generates a policy for you. You can use <code> <a>SetQueueAttributes</a> </code> to upload your policy. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-creating-custom-policies.html">Using Custom Policies with the Amazon SQS Access Policy Language</a> in the <i>Amazon SQS Developer Guide</i>.</p> </li> <li> <p>An Amazon SQS policy can have a maximum of seven actions per statement.</p> </li> <li> <p>To remove the ability to change queue permissions, you must deny permission to the <code>AddPermission</code>, <code>RemovePermission</code>, and <code>SetQueueAttributes</code> actions in your IAM policy.</p> </li> <li> <p>Amazon SQS <code>AddPermission</code> does not support adding a non-account principal.</p> </li> </ul> </note> <note> <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>

<h3 id="getaddpermission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Label|query|string|true|The unique identification of the permission you're setting (for example, <code>AliceSendMessage</code>). Maximum 80 characters. Allowed characters include alphanumeric characters, hyphens (<code>-</code>), and underscores (<code>_</code>).|
|AWSAccountIds|query|[object]|true|The Amazon Web Services account numbers of the <a href="https://docs.aws.amazon.com/general/latest/gr/glos-chap.html#P">principals</a> who are to receive permission. For information about locating the Amazon Web Services account identification, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-making-api-requests.html#sqs-api-request-authentication">Your Amazon Web Services Identifiers</a> in the <i>Amazon SQS Developer Guide</i>.|
|Actions|query|[object]|true|<p>The action the client wants to allow for the specified principal. Valid values: the name of any action or <code>*</code>.</p> <p>For more information about these actions, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-overview-of-managing-access.html">Overview of Managing Access Permissions to Your Amazon Simple Queue Service Resource</a> in the <i>Amazon SQS Developer Guide</i>.</p> <p>Specifying <code>SendMessage</code>, <code>DeleteMessage</code>, or <code>ChangeMessageVisibility</code> for <code>ActionName.n</code> also grants permissions for the corresponding batch versions of those actions: <code>SendMessageBatch</code>, <code>DeleteMessageBatch</code>, and <code>ChangeMessageVisibilityBatch</code>.</p>|
|AccountNumber|path|integer|true|The AWS account number|
|QueueName|path|string|true|The name of the queue|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|AddPermission|
|Version|2012-11-05|

<h3 id="getaddpermission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|OverLimit|[OverLimit](#schemaoverlimit)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_AddPermission

<a id="opIdPOST_AddPermission"></a>

> Code samples

```bash
curl 'https://sqs.us-east-1.amazonaws.com/#Action=AddPermission?Action=AddPermission&Version=2012-11-05' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"QueueUrl":{},"Label":{},"AWSAccountIds":{},"Actions":{}}'
```

`POST /#Action=AddPermission`

<p>Adds a permission to a queue for a specific <a href="https://docs.aws.amazon.com/general/latest/gr/glos-chap.html#P">principal</a>. This allows sharing access to the queue.</p> <p>When you create a queue, you have full control access rights for the queue. Only you, the owner of the queue, can grant or deny permissions to the queue. For more information about these permissions, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-writing-an-sqs-policy.html#write-messages-to-shared-queue">Allow Developers to Write Messages to a Shared Queue</a> in the <i>Amazon SQS Developer Guide</i>.</p> <note> <ul> <li> <p> <code>AddPermission</code> generates a policy for you. You can use <code> <a>SetQueueAttributes</a> </code> to upload your policy. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-creating-custom-policies.html">Using Custom Policies with the Amazon SQS Access Policy Language</a> in the <i>Amazon SQS Developer Guide</i>.</p> </li> <li> <p>An Amazon SQS policy can have a maximum of seven actions per statement.</p> </li> <li> <p>To remove the ability to change queue permissions, you must deny permission to the <code>AddPermission</code>, <code>RemovePermission</code>, and <code>SetQueueAttributes</code> actions in your IAM policy.</p> </li> <li> <p>Amazon SQS <code>AddPermission</code> does not support adding a non-account principal.</p> </li> </ul> </note> <note> <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>

> Body parameter

```json
{
  "QueueUrl": {},
  "Label": {},
  "AWSAccountIds": {},
  "Actions": {}
}
```

<h3 id="postaddpermission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[AddPermissionRequest](#schemaaddpermissionrequest)|false|none|
|» QueueUrl|body|object|true|none|
|» Label|body|object|true|none|
|» AWSAccountIds|body|object|true|none|
|» Actions|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|AddPermission|
|Version|2012-11-05|

<h3 id="postaddpermission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|OverLimit|[OverLimit](#schemaoverlimit)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CancelMessageMoveTask

<a id="opIdGET_CancelMessageMoveTask"></a>

> Code samples

```bash
curl 'https://sqs.us-east-1.amazonaws.com/#Action=CancelMessageMoveTask?TaskHandle=string&Action=CancelMessageMoveTask&Version=2012-11-05' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CancelMessageMoveTask`

<p>Cancels a specified message movement task. A message movement can only be cancelled when the current status is RUNNING. Cancelling a message movement task does not revert the messages that have already been moved. It can only stop the messages that have not been moved yet.</p> <note> <ul> <li> <p>This action is currently limited to supporting message redrive from <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html">dead-letter queues (DLQs)</a> only. In this context, the source queue is the dead-letter queue (DLQ), while the destination queue can be the original source queue (from which the messages were driven to the dead-letter-queue), or a custom destination queue. </p> </li> <li> <p>Currently, only standard queues are supported.</p> </li> <li> <p>Only one active message movement task is supported per queue at any given time.</p> </li> </ul> </note>

<h3 id="getcancelmessagemovetask-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TaskHandle|query|string|true|An identifier associated with a message movement task.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CancelMessageMoveTask|
|Version|2012-11-05|

<h3 id="getcancelmessagemovetask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelMessageMoveTaskResult](#schemacancelmessagemovetaskresult)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|UnsupportedOperation|[UnsupportedOperation](#schemaunsupportedoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CancelMessageMoveTask

<a id="opIdPOST_CancelMessageMoveTask"></a>

> Code samples

```bash
curl 'https://sqs.us-east-1.amazonaws.com/#Action=CancelMessageMoveTask?Action=CancelMessageMoveTask&Version=2012-11-05' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"TaskHandle":{}}'
```

`POST /#Action=CancelMessageMoveTask`

<p>Cancels a specified message movement task. A message movement can only be cancelled when the current status is RUNNING. Cancelling a message movement task does not revert the messages that have already been moved. It can only stop the messages that have not been moved yet.</p> <note> <ul> <li> <p>This action is currently limited to supporting message redrive from <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html">dead-letter queues (DLQs)</a> only. In this context, the source queue is the dead-letter queue (DLQ), while the destination queue can be the original source queue (from which the messages were driven to the dead-letter-queue), or a custom destination queue. </p> </li> <li> <p>Currently, only standard queues are supported.</p> </li> <li> <p>Only one active message movement task is supported per queue at any given time.</p> </li> </ul> </note>

> Body parameter

```json
{
  "TaskHandle": {}
}
```

<h3 id="postcancelmessagemovetask-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CancelMessageMoveTaskRequest](#schemacancelmessagemovetaskrequest)|false|none|
|» TaskHandle|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CancelMessageMoveTask|
|Version|2012-11-05|

<h3 id="postcancelmessagemovetask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelMessageMoveTaskResult](#schemacancelmessagemovetaskresult)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|UnsupportedOperation|[UnsupportedOperation](#schemaunsupportedoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ChangeMessageVisibility

<a id="opIdGET_ChangeMessageVisibility"></a>

> Code samples

```bash
curl 'https://sqs.us-east-1.amazonaws.com/0/string/#Action=ChangeMessageVisibility?ReceiptHandle=string&VisibilityTimeout=0&Action=ChangeMessageVisibility&Version=2012-11-05' \
  -H "Authorization: ${API_KEY}"
```

`GET /{AccountNumber}/{QueueName}/#Action=ChangeMessageVisibility`

<p>Changes the visibility timeout of a specified message in a queue to a new value. The default visibility timeout for a message is 30 seconds. The minimum is 0 seconds. The maximum is 12 hours. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html">Visibility Timeout</a> in the <i>Amazon SQS Developer Guide</i>.</p> <p>For example, if the default timeout for a queue is 60 seconds, 15 seconds have elapsed since you received the message, and you send a ChangeMessageVisibility call with <code>VisibilityTimeout</code> set to 10 seconds, the 10 seconds begin to count from the time that you make the <code>ChangeMessageVisibility</code> call. Thus, any attempt to change the visibility timeout or to delete that message 10 seconds after you initially change the visibility timeout (a total of 25 seconds) might result in an error.</p> <p>An Amazon SQS message has three basic states:</p> <ol> <li> <p>Sent to a queue by a producer.</p> </li> <li> <p>Received from the queue by a consumer.</p> </li> <li> <p>Deleted from the queue.</p> </li> </ol> <p>A message is considered to be <i>stored</i> after it is sent to a queue by a producer, but not yet received from the queue by a consumer (that is, between states 1 and 2). There is no limit to the number of stored messages. A message is considered to be <i>in flight</i> after it is received from a queue by a consumer, but not yet deleted from the queue (that is, between states 2 and 3). There is a limit to the number of in flight messages.</p> <p>Limits that apply to in flight messages are unrelated to the <i>unlimited</i> number of stored messages.</p> <p>For most standard queues (depending on queue traffic and message backlog), there can be a maximum of approximately 120,000 in flight messages (received from a queue by a consumer, but not yet deleted from the queue). If you reach this limit, Amazon SQS returns the <code>OverLimit</code> error message. To avoid reaching the limit, you should delete messages from the queue after they're processed. You can also increase the number of queues you use to process your messages. To request a limit increase, <a href="https://console.aws.amazon.com/support/home#/case/create?issueType=service-limit-increase&amp;limitType=service-code-sqs">file a support request</a>.</p> <p>For FIFO queues, there can be a maximum of 20,000 in flight messages (received from a queue by a consumer, but not yet deleted from the queue). If you reach this limit, Amazon SQS returns no error messages.</p> <important> <p>If you attempt to set the <code>VisibilityTimeout</code> to a value greater than the maximum time left, Amazon SQS returns an error. Amazon SQS doesn't automatically recalculate and increase the timeout to the maximum remaining time.</p> <p>Unlike with a queue, when you change the visibility timeout for a specific message the timeout value is applied immediately but isn't saved in memory for that message. If you don't delete a message after it is received, the visibility timeout for the message reverts to the original timeout value (not to the value you set using the <code>ChangeMessageVisibility</code> action) the next time the message is received.</p> </important>

<h3 id="getchangemessagevisibility-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ReceiptHandle|query|string|true|The receipt handle associated with the message, whose visibility timeout is changed. This parameter is returned by the <code> <a>ReceiveMessage</a> </code> action.|
|VisibilityTimeout|query|integer|true|The new value for the message's visibility timeout (in seconds). Values range: <code>0</code> to <code>43200</code>. Maximum: 12 hours.|
|AccountNumber|path|integer|true|The AWS account number|
|QueueName|path|string|true|The name of the queue|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ChangeMessageVisibility|
|Version|2012-11-05|

<h3 id="getchangemessagevisibility-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|MessageNotInflight|[MessageNotInflight](#schemamessagenotinflight)|
|481|481|ReceiptHandleIsInvalid|[ReceiptHandleIsInvalid](#schemareceipthandleisinvalid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ChangeMessageVisibility

<a id="opIdPOST_ChangeMessageVisibility"></a>

> Code samples

```bash
curl 'https://sqs.us-east-1.amazonaws.com/#Action=ChangeMessageVisibility?Action=ChangeMessageVisibility&Version=2012-11-05' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"QueueUrl":{},"ReceiptHandle":{},"VisibilityTimeout":{}}'
```

`POST /#Action=ChangeMessageVisibility`

<p>Changes the visibility timeout of a specified message in a queue to a new value. The default visibility timeout for a message is 30 seconds. The minimum is 0 seconds. The maximum is 12 hours. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html">Visibility Timeout</a> in the <i>Amazon SQS Developer Guide</i>.</p> <p>For example, if the default timeout for a queue is 60 seconds, 15 seconds have elapsed since you received the message, and you send a ChangeMessageVisibility call with <code>VisibilityTimeout</code> set to 10 seconds, the 10 seconds begin to count from the time that you make the <code>ChangeMessageVisibility</code> call. Thus, any attempt to change the visibility timeout or to delete that message 10 seconds after you initially change the visibility timeout (a total of 25 seconds) might result in an error.</p> <p>An Amazon SQS message has three basic states:</p> <ol> <li> <p>Sent to a queue by a producer.</p> </li> <li> <p>Received from the queue by a consumer.</p> </li> <li> <p>Deleted from the queue.</p> </li> </ol> <p>A message is considered to be <i>stored</i> after it is sent to a queue by a producer, but not yet received from the queue by a consumer (that is, between states 1 and 2). There is no limit to the number of stored messages. A message is considered to be <i>in flight</i> after it is received from a queue by a consumer, but not yet deleted from the queue (that is, between states 2 and 3). There is a limit to the number of in flight messages.</p> <p>Limits that apply to in flight messages are unrelated to the <i>unlimited</i> number of stored messages.</p> <p>For most standard queues (depending on queue traffic and message backlog), there can be a maximum of approximately 120,000 in flight messages (received from a queue by a consumer, but not yet deleted from the queue). If you reach this limit, Amazon SQS returns the <code>OverLimit</code> error message. To avoid reaching the limit, you should delete messages from the queue after they're processed. You can also increase the number of queues you use to process your messages. To request a limit increase, <a href="https://console.aws.amazon.com/support/home#/case/create?issueType=service-limit-increase&amp;limitType=service-code-sqs">file a support request</a>.</p> <p>For FIFO queues, there can be a maximum of 20,000 in flight messages (received from a queue by a consumer, but not yet deleted from the queue). If you reach this limit, Amazon SQS returns no error messages.</p> <important> <p>If you attempt to set the <code>VisibilityTimeout</code> to a value greater than the maximum time left, Amazon SQS returns an error. Amazon SQS doesn't automatically recalculate and increase the timeout to the maximum remaining time.</p> <p>Unlike with a queue, when you change the visibility timeout for a specific message the timeout value is applied immediately but isn't saved in memory for that message. If you don't delete a message after it is received, the visibility timeout for the message reverts to the original timeout value (not to the value you set using the <code>ChangeMessageVisibility</code> action) the next time the message is received.</p> </important>

> Body parameter

```json
{
  "QueueUrl": {},
  "ReceiptHandle": {},
  "VisibilityTimeout": {}
}
```

<h3 id="postchangemessagevisibility-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ChangeMessageVisibilityRequest](#schemachangemessagevisibilityrequest)|false|none|
|» QueueUrl|body|object|true|none|
|» ReceiptHandle|body|object|true|none|
|» VisibilityTimeout|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ChangeMessageVisibility|
|Version|2012-11-05|

<h3 id="postchangemessagevisibility-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|MessageNotInflight|[MessageNotInflight](#schemamessagenotinflight)|
|481|481|ReceiptHandleIsInvalid|[ReceiptHandleIsInvalid](#schemareceipthandleisinvalid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ChangeMessageVisibilityBatch

<a id="opIdGET_ChangeMessageVisibilityBatch"></a>

> Code samples

```bash
curl 'https://sqs.us-east-1.amazonaws.com/0/string/#Action=ChangeMessageVisibilityBatch?Entries=%7B%22Id%22%3A%7B%7D%2C%22ReceiptHandle%22%3A%7B%7D%2C%22VisibilityTimeout%22%3A%7B%7D%7D&Action=ChangeMessageVisibilityBatch&Version=2012-11-05' \
  -H "Authorization: ${API_KEY}"
```

`GET /{AccountNumber}/{QueueName}/#Action=ChangeMessageVisibilityBatch`

<p>Changes the visibility timeout of multiple messages. This is a batch version of <code> <a>ChangeMessageVisibility</a>.</code> The result of the action on each message is reported individually in the response. You can send up to 10 <code> <a>ChangeMessageVisibility</a> </code> requests with each <code>ChangeMessageVisibilityBatch</code> action.</p> <important> <p>Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of <code>200</code>.</p> </important>

<h3 id="getchangemessagevisibilitybatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Entries|query|[object]|true|Lists the receipt handles of the messages for which the visibility timeout must be changed.|
|AccountNumber|path|integer|true|The AWS account number|
|QueueName|path|string|true|The name of the queue|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ChangeMessageVisibilityBatch|
|Version|2012-11-05|

<h3 id="getchangemessagevisibilitybatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ChangeMessageVisibilityBatchResult](#schemachangemessagevisibilitybatchresult)|
|480|480|TooManyEntriesInBatchRequest|[TooManyEntriesInBatchRequest](#schematoomanyentriesinbatchrequest)|
|481|481|EmptyBatchRequest|[EmptyBatchRequest](#schemaemptybatchrequest)|
|482|482|BatchEntryIdsNotDistinct|[BatchEntryIdsNotDistinct](#schemabatchentryidsnotdistinct)|
|483|483|InvalidBatchEntryId|[InvalidBatchEntryId](#schemainvalidbatchentryid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ChangeMessageVisibilityBatch

<a id="opIdPOST_ChangeMessageVisibilityBatch"></a>

> Code samples

```bash
curl 'https://sqs.us-east-1.amazonaws.com/#Action=ChangeMessageVisibilityBatch?Action=ChangeMessageVisibilityBatch&Version=2012-11-05' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"QueueUrl":{},"Entries":{}}'
```

`POST /#Action=ChangeMessageVisibilityBatch`

<p>Changes the visibility timeout of multiple messages. This is a batch version of <code> <a>ChangeMessageVisibility</a>.</code> The result of the action on each message is reported individually in the response. You can send up to 10 <code> <a>ChangeMessageVisibility</a> </code> requests with each <code>ChangeMessageVisibilityBatch</code> action.</p> <important> <p>Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of <code>200</code>.</p> </important>

> Body parameter

```json
{
  "QueueUrl": {},
  "Entries": {}
}
```

<h3 id="postchangemessagevisibilitybatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ChangeMessageVisibilityBatchRequest](#schemachangemessagevisibilitybatchrequest)|false|none|
|» QueueUrl|body|object|true|none|
|» Entries|body|object|true|none|
|» Id|body|object|true|none|
|» ReceiptHandle|body|object|true|none|
|» VisibilityTimeout|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ChangeMessageVisibilityBatch|
|Version|2012-11-05|

<h3 id="postchangemessagevisibilitybatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ChangeMessageVisibilityBatchResult](#schemachangemessagevisibilitybatchresult)|
|480|480|TooManyEntriesInBatchRequest|[TooManyEntriesInBatchRequest](#schematoomanyentriesinbatchrequest)|
|481|481|EmptyBatchRequest|[EmptyBatchRequest](#schemaemptybatchrequest)|
|482|482|BatchEntryIdsNotDistinct|[BatchEntryIdsNotDistinct](#schemabatchentryidsnotdistinct)|
|483|483|InvalidBatchEntryId|[InvalidBatchEntryId](#schemainvalidbatchentryid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateQueue

<a id="opIdGET_CreateQueue"></a>

> Code samples

```bash
curl 'https://sqs.us-east-1.amazonaws.com/#Action=CreateQueue?QueueName=string&Action=CreateQueue&Version=2012-11-05' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateQueue`

<p>Creates a new standard or FIFO queue. You can pass one or more attributes in the request. Keep the following in mind:</p> <ul> <li> <p>If you don't specify the <code>FifoQueue</code> attribute, Amazon SQS creates a standard queue.</p> <note> <p>You can't change the queue type after you create it and you can't convert an existing standard queue into a FIFO queue. You must either create a new FIFO queue for your application or delete your existing standard queue and recreate it as a FIFO queue. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html#FIFO-queues-moving">Moving From a Standard Queue to a FIFO Queue</a> in the <i>Amazon SQS Developer Guide</i>. </p> </note> </li> <li> <p>If you don't provide a value for an attribute, the queue is created with the default value for the attribute.</p> </li> <li> <p>If you delete a queue, you must wait at least 60 seconds before creating a queue with the same name.</p> </li> </ul> <p>To successfully create a new queue, you must provide a queue name that adheres to the <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/limits-queues.html">limits related to queues</a> and is unique within the scope of your queues.</p> <note> <p>After you create a queue, you must wait at least one second after the queue is created to be able to use the queue.</p> </note> <p>To get the queue URL, use the <code> <a>GetQueueUrl</a> </code> action. <code> <a>GetQueueUrl</a> </code> requires only the <code>QueueName</code> parameter. be aware of existing queue names:</p> <ul> <li> <p>If you provide the name of an existing queue along with the exact names and values of all the queue's attributes, <code>CreateQueue</code> returns the queue URL for the existing queue.</p> </li> <li> <p>If the queue name, attribute names, or attribute values don't match an existing queue, <code>CreateQueue</code> returns an error.</p> </li> </ul> <note> <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>

<h3 id="getcreatequeue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|QueueName|query|string|true|<p>The name of the new queue. The following limits apply to this name:</p> <ul> <li> <p>A queue name can have up to 80 characters.</p> </li> <li> <p>Valid values: alphanumeric characters, hyphens (<code>-</code>), and underscores (<code>_</code>).</p> </li> <li> <p>A FIFO queue name must end with the <code>.fifo</code> suffix.</p> </li> </ul> <p>Queue URLs and names are case-sensitive.</p>|
|Attribute|query|object|false|<p>A map of attributes with their corresponding values.</p> <p>The following lists the names, descriptions, and values of the special request parameters that the <code>CreateQueue</code> action uses:</p> <ul> <li> <p> <code>DelaySeconds</code> – The length of time, in seconds, for which the delivery of all messages in the queue is delayed. Valid values: An integer from 0 to 900 seconds (15 minutes). Default: 0. </p> </li> <li> <p> <code>MaximumMessageSize</code> – The limit of how many bytes a message can contain before Amazon SQS rejects it. Valid values: An integer from 1,024 bytes (1 KiB) to 262,144 bytes (256 KiB). Default: 262,144 (256 KiB). </p> </li> <li> <p> <code>MessageRetentionPeriod</code> – The length of time, in seconds, for which Amazon SQS retains a message. Valid values: An integer from 60 seconds (1 minute) to 1,209,600 seconds (14 days). Default: 345,600 (4 days). When you change a queue's attributes, the change can take up to 60 seconds for most of the attributes to propagate throughout the Amazon SQS system. Changes made to the <code>MessageRetentionPeriod</code> attribute can take up to 15 minutes and will impact existing messages in the queue potentially causing them to be expired and deleted if the <code>MessageRetentionPeriod</code> is reduced below the age of existing messages.</p> </li> <li> <p> <code>Policy</code> – The queue's policy. A valid Amazon Web Services policy. For more information about policy structure, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/PoliciesOverview.html">Overview of Amazon Web Services IAM Policies</a> in the <i>IAM User Guide</i>. </p> </li> <li> <p> <code>ReceiveMessageWaitTimeSeconds</code> – The length of time, in seconds, for which a <code> <a>ReceiveMessage</a> </code> action waits for a message to arrive. Valid values: An integer from 0 to 20 (seconds). Default: 0. </p> </li> <li> <p> <code>VisibilityTimeout</code> – The visibility timeout for the queue, in seconds. Valid values: An integer from 0 to 43,200 (12 hours). Default: 30. For more information about the visibility timeout, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html">Visibility Timeout</a> in the <i>Amazon SQS Developer Guide</i>.</p> </li> </ul> <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html">dead-letter queues:</a> </p> <ul> <li> <p> <code>RedrivePolicy</code> – The string that includes the parameters for the dead-letter queue functionality of the source queue as a JSON object. The parameters are as follows:</p> <ul> <li> <p> <code>deadLetterTargetArn</code> – The Amazon Resource Name (ARN) of the dead-letter queue to which Amazon SQS moves messages after the value of <code>maxReceiveCount</code> is exceeded.</p> </li> <li> <p> <code>maxReceiveCount</code> – The number of times a message is delivered to the source queue before being moved to the dead-letter queue. Default: 10. When the <code>ReceiveCount</code> for a message exceeds the <code>maxReceiveCount</code> for a queue, Amazon SQS moves the message to the dead-letter-queue.</p> </li> </ul> </li> <li> <p> <code>RedriveAllowPolicy</code> – The string that includes the parameters for the permissions for the dead-letter queue redrive permission and which source queues can specify dead-letter queues as a JSON object. The parameters are as follows:</p> <ul> <li> <p> <code>redrivePermission</code> – The permission type that defines which source queues can specify the current queue as the dead-letter queue. Valid values are:</p> <ul> <li> <p> <code>allowAll</code> – (Default) Any source queues in this Amazon Web Services account in the same Region can specify this queue as the dead-letter queue.</p> </li> <li> <p> <code>denyAll</code> – No source queues can specify this queue as the dead-letter queue.</p> </li> <li> <p> <code>byQueue</code> – Only queues specified by the <code>sourceQueueArns</code> parameter can specify this queue as the dead-letter queue.</p> </li> </ul> </li> <li> <p> <code>sourceQueueArns</code> – The Amazon Resource Names (ARN)s of the source queues that can specify this queue as the dead-letter queue and redrive messages. You can specify this parameter only when the <code>redrivePermission</code> parameter is set to <code>byQueue</code>. You can specify up to 10 source queue ARNs. To allow more than 10 source queues to specify dead-letter queues, set the <code>redrivePermission</code> parameter to <code>allowAll</code>.</p> </li> </ul> </li> </ul> <note> <p>The dead-letter queue of a FIFO queue must also be a FIFO queue. Similarly, the dead-letter queue of a standard queue must also be a standard queue.</p> </note> <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html">server-side-encryption</a>:</p> <ul> <li> <p> <code>KmsMasterKeyId</code> – The ID of an Amazon Web Services managed customer master key (CMK) for Amazon SQS or a custom CMK. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html#sqs-sse-key-terms">Key Terms</a>. While the alias of the Amazon Web Services managed CMK for Amazon SQS is always <code>alias/aws/sqs</code>, the alias of a custom CMK can, for example, be <code>alias/<i>MyAlias</i> </code>. For more examples, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters">KeyId</a> in the <i>Key Management Service API Reference</i>. </p> </li> <li> <p> <code>KmsDataKeyReusePeriodSeconds</code> – The length of time, in seconds, for which Amazon SQS can reuse a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#data-keys">data key</a> to encrypt or decrypt messages before calling KMS again. An integer representing seconds, between 60 seconds (1 minute) and 86,400 seconds (24 hours). Default: 300 (5 minutes). A shorter time period provides better security but results in more calls to KMS which might incur charges after Free Tier. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html#sqs-how-does-the-data-key-reuse-period-work">How Does the Data Key Reuse Period Work?</a> </p> </li> <li> <p> <code>SqsManagedSseEnabled</code> – Enables server-side queue encryption using SQS owned encryption keys. Only one server-side encryption option is supported per queue (for example, <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sse-existing-queue.html">SSE-KMS</a> or <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sqs-sse-queue.html">SSE-SQS</a>).</p> </li> </ul> <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html">FIFO (first-in-first-out) queues</a>:</p> <ul> <li> <p> <code>FifoQueue</code> – Designates a queue as FIFO. Valid values are <code>true</code> and <code>false</code>. If you don't specify the <code>FifoQueue</code> attribute, Amazon SQS creates a standard queue. You can provide this attribute only during queue creation. You can't change it for an existing queue. When you set this attribute, you must also provide the <code>MessageGroupId</code> for your messages explicitly.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-understanding-logic.html">FIFO queue logic</a> in the <i>Amazon SQS Developer Guide</i>.</p> </li> <li> <p> <code>ContentBasedDeduplication</code> – Enables content-based deduplication. Valid values are <code>true</code> and <code>false</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-exactly-once-processing.html">Exactly-once processing</a> in the <i>Amazon SQS Developer Guide</i>. Note the following: </p> <ul> <li> <p>Every message must have a unique <code>MessageDeduplicationId</code>.</p> <ul> <li> <p>You may provide a <code>MessageDeduplicationId</code> explicitly.</p> </li> <li> <p>If you aren't able to provide a <code>MessageDeduplicationId</code> and you enable <code>ContentBasedDeduplication</code> for your queue, Amazon SQS uses a SHA-256 hash to generate the <code>MessageDeduplicationId</code> using the body of the message (but not the attributes of the message). </p> </li> <li> <p>If you don't provide a <code>MessageDeduplicationId</code> and the queue doesn't have <code>ContentBasedDeduplication</code> set, the action fails with an error.</p> </li> <li> <p>If the queue has <code>ContentBasedDeduplication</code> set, your <code>MessageDeduplicationId</code> overrides the generated one.</p> </li> </ul> </li> <li> <p>When <code>ContentBasedDeduplication</code> is in effect, messages with identical content sent within the deduplication interval are treated as duplicates and only one copy of the message is delivered.</p> </li> <li> <p>If you send one message with <code>ContentBasedDeduplication</code> enabled and then another message with a <code>MessageDeduplicationId</code> that is the same as the one generated for the first <code>MessageDeduplicationId</code>, the two messages are treated as duplicates and only one copy of the message is delivered. </p> </li> </ul> </li> </ul> <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/high-throughput-fifo.html">high throughput for FIFO queues</a>:</p> <ul> <li> <p> <code>DeduplicationScope</code> – Specifies whether message deduplication occurs at the message group or queue level. Valid values are <code>messageGroup</code> and <code>queue</code>.</p> </li> <li> <p> <code>FifoThroughputLimit</code> – Specifies whether the FIFO queue throughput quota applies to the entire queue or per message group. Valid values are <code>perQueue</code> and <code>perMessageGroupId</code>. The <code>perMessageGroupId</code> value is allowed only when the value for <code>DeduplicationScope</code> is <code>messageGroup</code>.</p> </li> </ul> <p>To enable high throughput for FIFO queues, do the following:</p> <ul> <li> <p>Set <code>DeduplicationScope</code> to <code>messageGroup</code>.</p> </li> <li> <p>Set <code>FifoThroughputLimit</code> to <code>perMessageGroupId</code>.</p> </li> </ul> <p>If you set these attributes to anything other than the values shown for enabling high throughput, normal throughput is in effect and deduplication occurs as specified.</p> <p>For information on throughput quotas, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-messages.html">Quotas related to messages</a> in the <i>Amazon SQS Developer Guide</i>.</p>|
|Tag|query|object|false|<p>Add cost allocation tags to the specified Amazon SQS queue. For an overview, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-tags.html">Tagging Your Amazon SQS Queues</a> in the <i>Amazon SQS Developer Guide</i>.</p> <p>When you use queue tags, keep the following guidelines in mind:</p> <ul> <li> <p>Adding more than 50 tags to a queue isn't recommended.</p> </li> <li> <p>Tags don't have any semantic meaning. Amazon SQS interprets tags as character strings.</p> </li> <li> <p>Tags are case-sensitive.</p> </li> <li> <p>A new tag with a key identical to that of an existing tag overwrites the existing tag.</p> </li> </ul> <p>For a full list of tag restrictions, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-limits.html#limits-queues">Quotas related to queues</a> in the <i>Amazon SQS Developer Guide</i>.</p> <note> <p>To be able to tag a queue on creation, you must have the <code>sqs:CreateQueue</code> and <code>sqs:TagQueue</code> permissions.</p> <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateQueue|
|Version|2012-11-05|

<h3 id="getcreatequeue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateQueueResult](#schemacreatequeueresult)|
|480|480|QueueDeletedRecently|[QueueDeletedRecently](#schemaqueuedeletedrecently)|
|481|481|QueueNameExists|[QueueNameExists](#schemaqueuenameexists)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateQueue

<a id="opIdPOST_CreateQueue"></a>

> Code samples

```bash
curl 'https://sqs.us-east-1.amazonaws.com/#Action=CreateQueue?Action=CreateQueue&Version=2012-11-05' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"QueueName":{},"Attributes":{"property1":"string","property2":"string"},"tags":{"property1":"string","property2":"string"}}'
```

`POST /#Action=CreateQueue`

<p>Creates a new standard or FIFO queue. You can pass one or more attributes in the request. Keep the following in mind:</p> <ul> <li> <p>If you don't specify the <code>FifoQueue</code> attribute, Amazon SQS creates a standard queue.</p> <note> <p>You can't change the queue type after you create it and you can't convert an existing standard queue into a FIFO queue. You must either create a new FIFO queue for your application or delete your existing standard queue and recreate it as a FIFO queue. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html#FIFO-queues-moving">Moving From a Standard Queue to a FIFO Queue</a> in the <i>Amazon SQS Developer Guide</i>. </p> </note> </li> <li> <p>If you don't provide a value for an attribute, the queue is created with the default value for the attribute.</p> </li> <li> <p>If you delete a queue, you must wait at least 60 seconds before creating a queue with the same name.</p> </li> </ul> <p>To successfully create a new queue, you must provide a queue name that adheres to the <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/limits-queues.html">limits related to queues</a> and is unique within the scope of your queues.</p> <note> <p>After you create a queue, you must wait at least one second after the queue is created to be able to use the queue.</p> </note> <p>To get the queue URL, use the <code> <a>GetQueueUrl</a> </code> action. <code> <a>GetQueueUrl</a> </code> requires only the <code>QueueName</code> parameter. be aware of existing queue names:</p> <ul> <li> <p>If you provide the name of an existing queue along with the exact names and values of all the queue's attributes, <code>CreateQueue</code> returns the queue URL for the existing queue.</p> </li> <li> <p>If the queue name, attribute names, or attribute values don't match an existing queue, <code>CreateQueue</code> returns an error.</p> </li> </ul> <note> <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>

> Body parameter

```json
{
  "QueueName": {},
  "Attributes": {
    "property1": "string",
    "property2": "string"
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="postcreatequeue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateQueueRequest](#schemacreatequeuerequest)|false|none|
|» QueueName|body|object|true|none|
|» Attributes|body|object|false|none|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|
|» tags|body|object|false|none|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateQueue|
|Version|2012-11-05|

<h3 id="postcreatequeue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateQueueResult](#schemacreatequeueresult)|
|480|480|QueueDeletedRecently|[QueueDeletedRecently](#schemaqueuedeletedrecently)|
|481|481|QueueNameExists|[QueueNameExists](#schemaqueuenameexists)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteMessage

<a id="opIdGET_DeleteMessage"></a>

> Code samples

```bash
curl 'https://sqs.us-east-1.amazonaws.com/0/string/#Action=DeleteMessage?ReceiptHandle=string&Action=DeleteMessage&Version=2012-11-05' \
  -H "Authorization: ${API_KEY}"
```

`GET /{AccountNumber}/{QueueName}/#Action=DeleteMessage`

<p>Deletes the specified message from the specified queue. To select the message to delete, use the <code>ReceiptHandle</code> of the message (<i>not</i> the <code>MessageId</code> which you receive when you send the message). Amazon SQS can delete a message from a queue even if a visibility timeout setting causes the message to be locked by another consumer. Amazon SQS automatically deletes messages left in a queue longer than the retention period configured for the queue. </p> <note> <p>The <code>ReceiptHandle</code> is associated with a <i>specific instance</i> of receiving a message. If you receive a message more than once, the <code>ReceiptHandle</code> is different each time you receive a message. When you use the <code>DeleteMessage</code> action, you must provide the most recently received <code>ReceiptHandle</code> for the message (otherwise, the request succeeds, but the message will not be deleted).</p> <p>For standard queues, it is possible to receive a message even after you delete it. This might happen on rare occasions if one of the servers which stores a copy of the message is unavailable when you send the request to delete the message. The copy remains on the server and might be returned to you during a subsequent receive request. You should ensure that your application is idempotent, so that receiving a message more than once does not cause issues.</p> </note>

<h3 id="getdeletemessage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ReceiptHandle|query|string|true|The receipt handle associated with the message to delete.|
|AccountNumber|path|integer|true|The AWS account number|
|QueueName|path|string|true|The name of the queue|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteMessage|
|Version|2012-11-05|

<h3 id="getdeletemessage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidIdFormat|[InvalidIdFormat](#schemainvalididformat)|
|481|481|ReceiptHandleIsInvalid|[ReceiptHandleIsInvalid](#schemareceipthandleisinvalid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteMessage

<a id="opIdPOST_DeleteMessage"></a>

> Code samples

```bash
curl 'https://sqs.us-east-1.amazonaws.com/#Action=DeleteMessage?Action=DeleteMessage&Version=2012-11-05' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"QueueUrl":{},"ReceiptHandle":{}}'
```

`POST /#Action=DeleteMessage`

<p>Deletes the specified message from the specified queue. To select the message to delete, use the <code>ReceiptHandle</code> of the message (<i>not</i> the <code>MessageId</code> which you receive when you send the message). Amazon SQS can delete a message from a queue even if a visibility timeout setting causes the message to be locked by another consumer. Amazon SQS automatically deletes messages left in a queue longer than the retention period configured for the queue. </p> <note> <p>The <code>ReceiptHandle</code> is associated with a <i>specific instance</i> of receiving a message. If you receive a message more than once, the <code>ReceiptHandle</code> is different each time you receive a message. When you use the <code>DeleteMessage</code> action, you must provide the most recently received <code>ReceiptHandle</code> for the message (otherwise, the request succeeds, but the message will not be deleted).</p> <p>For standard queues, it is possible to receive a message even after you delete it. This might happen on rare occasions if one of the servers which stores a copy of the message is unavailable when you send the request to delete the message. The copy remains on the server and might be returned to you during a subsequent receive request. You should ensure that your application is idempotent, so that receiving a message more than once does not cause issues.</p> </note>

> Body parameter

```json
{
  "QueueUrl": {},
  "ReceiptHandle": {}
}
```

<h3 id="postdeletemessage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteMessageRequest](#schemadeletemessagerequest)|false|none|
|» QueueUrl|body|object|true|none|
|» ReceiptHandle|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteMessage|
|Version|2012-11-05|

<h3 id="postdeletemessage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidIdFormat|[InvalidIdFormat](#schemainvalididformat)|
|481|481|ReceiptHandleIsInvalid|[ReceiptHandleIsInvalid](#schemareceipthandleisinvalid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteMessageBatch

<a id="opIdGET_DeleteMessageBatch"></a>

> Code samples

```bash
curl 'https://sqs.us-east-1.amazonaws.com/0/string/#Action=DeleteMessageBatch?Entries=%7B%22Id%22%3A%7B%7D%2C%22ReceiptHandle%22%3A%7B%7D%7D&Action=DeleteMessageBatch&Version=2012-11-05' \
  -H "Authorization: ${API_KEY}"
```

`GET /{AccountNumber}/{QueueName}/#Action=DeleteMessageBatch`

<p>Deletes up to ten messages from the specified queue. This is a batch version of <code> <a>DeleteMessage</a>.</code> The result of the action on each message is reported individually in the response.</p> <important> <p>Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of <code>200</code>.</p> </important>

<h3 id="getdeletemessagebatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Entries|query|[object]|true|Lists the receipt handles for the messages to be deleted.|
|AccountNumber|path|integer|true|The AWS account number|
|QueueName|path|string|true|The name of the queue|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteMessageBatch|
|Version|2012-11-05|

<h3 id="getdeletemessagebatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteMessageBatchResult](#schemadeletemessagebatchresult)|
|480|480|TooManyEntriesInBatchRequest|[TooManyEntriesInBatchRequest](#schematoomanyentriesinbatchrequest)|
|481|481|EmptyBatchRequest|[EmptyBatchRequest](#schemaemptybatchrequest)|
|482|482|BatchEntryIdsNotDistinct|[BatchEntryIdsNotDistinct](#schemabatchentryidsnotdistinct)|
|483|483|InvalidBatchEntryId|[InvalidBatchEntryId](#schemainvalidbatchentryid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteMessageBatch

<a id="opIdPOST_DeleteMessageBatch"></a>

> Code samples

```bash
curl 'https://sqs.us-east-1.amazonaws.com/#Action=DeleteMessageBatch?Action=DeleteMessageBatch&Version=2012-11-05' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"QueueUrl":{},"Entries":{}}'
```

`POST /#Action=DeleteMessageBatch`

<p>Deletes up to ten messages from the specified queue. This is a batch version of <code> <a>DeleteMessage</a>.</code> The result of the action on each message is reported individually in the response.</p> <important> <p>Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of <code>200</code>.</p> </important>

> Body parameter

```json
{
  "QueueUrl": {},
  "Entries": {}
}
```

<h3 id="postdeletemessagebatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteMessageBatchRequest](#schemadeletemessagebatchrequest)|false|none|
|» QueueUrl|body|object|true|none|
|» Entries|body|object|true|none|
|» Id|body|object|true|none|
|» ReceiptHandle|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteMessageBatch|
|Version|2012-11-05|

<h3 id="postdeletemessagebatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteMessageBatchResult](#schemadeletemessagebatchresult)|
|480|480|TooManyEntriesInBatchRequest|[TooManyEntriesInBatchRequest](#schematoomanyentriesinbatchrequest)|
|481|481|EmptyBatchRequest|[EmptyBatchRequest](#schemaemptybatchrequest)|
|482|482|BatchEntryIdsNotDistinct|[BatchEntryIdsNotDistinct](#schemabatchentryidsnotdistinct)|
|483|483|InvalidBatchEntryId|[InvalidBatchEntryId](#schemainvalidbatchentryid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteQueue

<a id="opIdGET_DeleteQueue"></a>

> Code samples

```bash
curl 'https://sqs.us-east-1.amazonaws.com/0/string/#Action=DeleteQueue?Action=DeleteQueue&Version=2012-11-05' \
  -H "Authorization: ${API_KEY}"
```

`GET /{AccountNumber}/{QueueName}/#Action=DeleteQueue`

<p>Deletes the queue specified by the <code>QueueUrl</code>, regardless of the queue's contents.</p> <important> <p>Be careful with the <code>DeleteQueue</code> action: When you delete a queue, any messages in the queue are no longer available. </p> </important> <p>When you delete a queue, the deletion process takes up to 60 seconds. Requests you send involving that queue during the 60 seconds might succeed. For example, a <code> <a>SendMessage</a> </code> request might succeed, but after 60 seconds the queue and the message you sent no longer exist.</p> <p>When you delete a queue, you must wait at least 60 seconds before creating a queue with the same name.</p> <note> <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p> <p>The delete operation uses the HTTP <code>GET</code> verb.</p> </note>

<h3 id="getdeletequeue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AccountNumber|path|integer|true|The AWS account number|
|QueueName|path|string|true|The name of the queue|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteQueue|
|Version|2012-11-05|

<h3 id="getdeletequeue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteQueue

<a id="opIdPOST_DeleteQueue"></a>

> Code samples

```bash
curl 'https://sqs.us-east-1.amazonaws.com/#Action=DeleteQueue?Action=DeleteQueue&Version=2012-11-05' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"QueueUrl":{}}'
```

`POST /#Action=DeleteQueue`

<p>Deletes the queue specified by the <code>QueueUrl</code>, regardless of the queue's contents.</p> <important> <p>Be careful with the <code>DeleteQueue</code> action: When you delete a queue, any messages in the queue are no longer available. </p> </important> <p>When you delete a queue, the deletion process takes up to 60 seconds. Requests you send involving that queue during the 60 seconds might succeed. For example, a <code> <a>SendMessage</a> </code> request might succeed, but after 60 seconds the queue and the message you sent no longer exist.</p> <p>When you delete a queue, you must wait at least 60 seconds before creating a queue with the same name.</p> <note> <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p> <p>The delete operation uses the HTTP <code>GET</code> verb.</p> </note>

> Body parameter

```json
{
  "QueueUrl": {}
}
```

<h3 id="postdeletequeue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteQueueRequest](#schemadeletequeuerequest)|false|none|
|» QueueUrl|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteQueue|
|Version|2012-11-05|

<h3 id="postdeletequeue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_GetQueueAttributes

<a id="opIdGET_GetQueueAttributes"></a>

> Code samples

```bash
curl 'https://sqs.us-east-1.amazonaws.com/0/string/#Action=GetQueueAttributes?Action=GetQueueAttributes&Version=2012-11-05' \
  -H "Authorization: ${API_KEY}"
```

`GET /{AccountNumber}/{QueueName}/#Action=GetQueueAttributes`

<p>Gets attributes for the specified queue.</p> <note> <p>To determine whether a queue is <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html">FIFO</a>, you can check whether <code>QueueName</code> ends with the <code>.fifo</code> suffix.</p> </note>

<h3 id="getgetqueueattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AttributeNames|query|[object]|false|<p>A list of attributes for which to retrieve information.</p> <p>The <code>AttributeNames</code> parameter is optional, but if you don't specify values for this parameter, the request returns empty results.</p> <note> <p>In the future, new attributes might be added. If you write code that calls this action, we recommend that you structure your code so that it can handle new attributes gracefully.</p> </note> <p>The following attributes are supported:</p> <important> <p>The <code>ApproximateNumberOfMessagesDelayed</code>, <code>ApproximateNumberOfMessagesNotVisible</code>, and <code>ApproximateNumberOfMessages</code> metrics may not achieve consistency until at least 1 minute after the producers stop sending messages. This period is required for the queue metadata to reach eventual consistency. </p> </important> <ul> <li> <p> <code>All</code> – Returns all values. </p> </li> <li> <p> <code>ApproximateNumberOfMessages</code> – Returns the approximate number of messages available for retrieval from the queue.</p> </li> <li> <p> <code>ApproximateNumberOfMessagesDelayed</code> – Returns the approximate number of messages in the queue that are delayed and not available for reading immediately. This can happen when the queue is configured as a delay queue or when a message has been sent with a delay parameter.</p> </li> <li> <p> <code>ApproximateNumberOfMessagesNotVisible</code> – Returns the approximate number of messages that are in flight. Messages are considered to be <i>in flight</i> if they have been sent to a client but have not yet been deleted or have not yet reached the end of their visibility window. </p> </li> <li> <p> <code>CreatedTimestamp</code> – Returns the time when the queue was created in seconds (<a href="http://en.wikipedia.org/wiki/Unix_time">epoch time</a>).</p> </li> <li> <p> <code>DelaySeconds</code> – Returns the default delay on the queue in seconds.</p> </li> <li> <p> <code>LastModifiedTimestamp</code> – Returns the time when the queue was last changed in seconds (<a href="http://en.wikipedia.org/wiki/Unix_time">epoch time</a>).</p> </li> <li> <p> <code>MaximumMessageSize</code> – Returns the limit of how many bytes a message can contain before Amazon SQS rejects it.</p> </li> <li> <p> <code>MessageRetentionPeriod</code> – Returns the length of time, in seconds, for which Amazon SQS retains a message. When you change a queue's attributes, the change can take up to 60 seconds for most of the attributes to propagate throughout the Amazon SQS system. Changes made to the <code>MessageRetentionPeriod</code> attribute can take up to 15 minutes and will impact existing messages in the queue potentially causing them to be expired and deleted if the <code>MessageRetentionPeriod</code> is reduced below the age of existing messages.</p> </li> <li> <p> <code>Policy</code> – Returns the policy of the queue.</p> </li> <li> <p> <code>QueueArn</code> – Returns the Amazon resource name (ARN) of the queue.</p> </li> <li> <p> <code>ReceiveMessageWaitTimeSeconds</code> – Returns the length of time, in seconds, for which the <code>ReceiveMessage</code> action waits for a message to arrive. </p> </li> <li> <p> <code>VisibilityTimeout</code> – Returns the visibility timeout for the queue. For more information about the visibility timeout, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html">Visibility Timeout</a> in the <i>Amazon SQS Developer Guide</i>. </p> </li> </ul> <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html">dead-letter queues:</a> </p> <ul> <li> <p> <code>RedrivePolicy</code> – The string that includes the parameters for the dead-letter queue functionality of the source queue as a JSON object. The parameters are as follows:</p> <ul> <li> <p> <code>deadLetterTargetArn</code> – The Amazon Resource Name (ARN) of the dead-letter queue to which Amazon SQS moves messages after the value of <code>maxReceiveCount</code> is exceeded.</p> </li> <li> <p> <code>maxReceiveCount</code> – The number of times a message is delivered to the source queue before being moved to the dead-letter queue. Default: 10. When the <code>ReceiveCount</code> for a message exceeds the <code>maxReceiveCount</code> for a queue, Amazon SQS moves the message to the dead-letter-queue.</p> </li> </ul> </li> <li> <p> <code>RedriveAllowPolicy</code> – The string that includes the parameters for the permissions for the dead-letter queue redrive permission and which source queues can specify dead-letter queues as a JSON object. The parameters are as follows:</p> <ul> <li> <p> <code>redrivePermission</code> – The permission type that defines which source queues can specify the current queue as the dead-letter queue. Valid values are:</p> <ul> <li> <p> <code>allowAll</code> – (Default) Any source queues in this Amazon Web Services account in the same Region can specify this queue as the dead-letter queue.</p> </li> <li> <p> <code>denyAll</code> – No source queues can specify this queue as the dead-letter queue.</p> </li> <li> <p> <code>byQueue</code> – Only queues specified by the <code>sourceQueueArns</code> parameter can specify this queue as the dead-letter queue.</p> </li> </ul> </li> <li> <p> <code>sourceQueueArns</code> – The Amazon Resource Names (ARN)s of the source queues that can specify this queue as the dead-letter queue and redrive messages. You can specify this parameter only when the <code>redrivePermission</code> parameter is set to <code>byQueue</code>. You can specify up to 10 source queue ARNs. To allow more than 10 source queues to specify dead-letter queues, set the <code>redrivePermission</code> parameter to <code>allowAll</code>.</p> </li> </ul> </li> </ul> <note> <p>The dead-letter queue of a FIFO queue must also be a FIFO queue. Similarly, the dead-letter queue of a standard queue must also be a standard queue.</p> </note> <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html">server-side-encryption</a>:</p> <ul> <li> <p> <code>KmsMasterKeyId</code> – Returns the ID of an Amazon Web Services managed customer master key (CMK) for Amazon SQS or a custom CMK. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html#sqs-sse-key-terms">Key Terms</a>. </p> </li> <li> <p> <code>KmsDataKeyReusePeriodSeconds</code> – Returns the length of time, in seconds, for which Amazon SQS can reuse a data key to encrypt or decrypt messages before calling KMS again. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html#sqs-how-does-the-data-key-reuse-period-work">How Does the Data Key Reuse Period Work?</a>. </p> </li> <li> <p> <code>SqsManagedSseEnabled</code> – Returns information about whether the queue is using SSE-SQS encryption using SQS owned encryption keys. Only one server-side encryption option is supported per queue (for example, <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sse-existing-queue.html">SSE-KMS</a> or <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sqs-sse-queue.html">SSE-SQS</a>).</p> </li> </ul> <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html">FIFO (first-in-first-out) queues</a>:</p> <ul> <li> <p> <code>FifoQueue</code> – Returns information about whether the queue is FIFO. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-understanding-logic.html">FIFO queue logic</a> in the <i>Amazon SQS Developer Guide</i>.</p> <note> <p>To determine whether a queue is <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html">FIFO</a>, you can check whether <code>QueueName</code> ends with the <code>.fifo</code> suffix.</p> </note> </li> <li> <p> <code>ContentBasedDeduplication</code> – Returns whether content-based deduplication is enabled for the queue. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-exactly-once-processing.html">Exactly-once processing</a> in the <i>Amazon SQS Developer Guide</i>. </p> </li> </ul> <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/high-throughput-fifo.html">high throughput for FIFO queues</a>:</p> <ul> <li> <p> <code>DeduplicationScope</code> – Specifies whether message deduplication occurs at the message group or queue level. Valid values are <code>messageGroup</code> and <code>queue</code>.</p> </li> <li> <p> <code>FifoThroughputLimit</code> – Specifies whether the FIFO queue throughput quota applies to the entire queue or per message group. Valid values are <code>perQueue</code> and <code>perMessageGroupId</code>. The <code>perMessageGroupId</code> value is allowed only when the value for <code>DeduplicationScope</code> is <code>messageGroup</code>.</p> </li> </ul> <p>To enable high throughput for FIFO queues, do the following:</p> <ul> <li> <p>Set <code>DeduplicationScope</code> to <code>messageGroup</code>.</p> </li> <li> <p>Set <code>FifoThroughputLimit</code> to <code>perMessageGroupId</code>.</p> </li> </ul> <p>If you set these attributes to anything other than the values shown for enabling high throughput, normal throughput is in effect and deduplication occurs as specified.</p> <p>For information on throughput quotas, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-messages.html">Quotas related to messages</a> in the <i>Amazon SQS Developer Guide</i>.</p>|
|AccountNumber|path|integer|true|The AWS account number|
|QueueName|path|string|true|The name of the queue|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|GetQueueAttributes|
|Version|2012-11-05|

<h3 id="getgetqueueattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetQueueAttributesResult](#schemagetqueueattributesresult)|
|480|480|InvalidAttributeName|[InvalidAttributeName](#schemainvalidattributename)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_GetQueueAttributes

<a id="opIdPOST_GetQueueAttributes"></a>

> Code samples

```bash
curl 'https://sqs.us-east-1.amazonaws.com/#Action=GetQueueAttributes?Action=GetQueueAttributes&Version=2012-11-05' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"QueueUrl":{},"AttributeNames":{}}'
```

`POST /#Action=GetQueueAttributes`

<p>Gets attributes for the specified queue.</p> <note> <p>To determine whether a queue is <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html">FIFO</a>, you can check whether <code>QueueName</code> ends with the <code>.fifo</code> suffix.</p> </note>

> Body parameter

```json
{
  "QueueUrl": {},
  "AttributeNames": {}
}
```

<h3 id="postgetqueueattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetQueueAttributesRequest](#schemagetqueueattributesrequest)|false|none|
|» QueueUrl|body|object|true|none|
|» AttributeNames|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|GetQueueAttributes|
|Version|2012-11-05|

<h3 id="postgetqueueattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetQueueAttributesResult](#schemagetqueueattributesresult)|
|480|480|InvalidAttributeName|[InvalidAttributeName](#schemainvalidattributename)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_GetQueueUrl

<a id="opIdGET_GetQueueUrl"></a>

> Code samples

```bash
curl 'https://sqs.us-east-1.amazonaws.com/#Action=GetQueueUrl?QueueName=string&Action=GetQueueUrl&Version=2012-11-05' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=GetQueueUrl`

<p>Returns the URL of an existing Amazon SQS queue.</p> <p>To access a queue that belongs to another AWS account, use the <code>QueueOwnerAWSAccountId</code> parameter to specify the account ID of the queue's owner. The queue's owner must grant you permission to access the queue. For more information about shared queue access, see <code> <a>AddPermission</a> </code> or see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-writing-an-sqs-policy.html#write-messages-to-shared-queue">Allow Developers to Write Messages to a Shared Queue</a> in the <i>Amazon SQS Developer Guide</i>. </p>

<h3 id="getgetqueueurl-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|QueueName|query|string|true|<p>The name of the queue whose URL must be fetched. Maximum 80 characters. Valid values: alphanumeric characters, hyphens (<code>-</code>), and underscores (<code>_</code>).</p> <p>Queue URLs and names are case-sensitive.</p>|
|QueueOwnerAWSAccountId|query|string|false|The Amazon Web Services account ID of the account that created the queue.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|GetQueueUrl|
|Version|2012-11-05|

<h3 id="getgetqueueurl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetQueueUrlResult](#schemagetqueueurlresult)|
|480|480|QueueDoesNotExist|[QueueDoesNotExist](#schemaqueuedoesnotexist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_GetQueueUrl

<a id="opIdPOST_GetQueueUrl"></a>

> Code samples

```bash
curl 'https://sqs.us-east-1.amazonaws.com/#Action=GetQueueUrl?Action=GetQueueUrl&Version=2012-11-05' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"QueueName":{},"QueueOwnerAWSAccountId":{}}'
```

`POST /#Action=GetQueueUrl`

<p>Returns the URL of an existing Amazon SQS queue.</p> <p>To access a queue that belongs to another AWS account, use the <code>QueueOwnerAWSAccountId</code> parameter to specify the account ID of the queue's owner. The queue's owner must grant you permission to access the queue. For more information about shared queue access, see <code> <a>AddPermission</a> </code> or see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-writing-an-sqs-policy.html#write-messages-to-shared-queue">Allow Developers to Write Messages to a Shared Queue</a> in the <i>Amazon SQS Developer Guide</i>. </p>

> Body parameter

```json
{
  "QueueName": {},
  "QueueOwnerAWSAccountId": {}
}
```

<h3 id="postgetqueueurl-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetQueueUrlRequest](#schemagetqueueurlrequest)|false|none|
|» QueueName|body|object|true|none|
|» QueueOwnerAWSAccountId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|GetQueueUrl|
|Version|2012-11-05|

<h3 id="postgetqueueurl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetQueueUrlResult](#schemagetqueueurlresult)|
|480|480|QueueDoesNotExist|[QueueDoesNotExist](#schemaqueuedoesnotexist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ListDeadLetterSourceQueues

<a id="opIdGET_ListDeadLetterSourceQueues"></a>

> Code samples

```bash
curl 'https://sqs.us-east-1.amazonaws.com/0/string/#Action=ListDeadLetterSourceQueues?Action=ListDeadLetterSourceQueues&Version=2012-11-05' \
  -H "Authorization: ${API_KEY}"
```

`GET /{AccountNumber}/{QueueName}/#Action=ListDeadLetterSourceQueues`

<p>Returns a list of your queues that have the <code>RedrivePolicy</code> queue attribute configured with a dead-letter queue.</p> <p> The <code>ListDeadLetterSourceQueues</code> methods supports pagination. Set parameter <code>MaxResults</code> in the request to specify the maximum number of results to be returned in the response. If you do not set <code>MaxResults</code>, the response includes a maximum of 1,000 results. If you set <code>MaxResults</code> and there are additional results to display, the response includes a value for <code>NextToken</code>. Use <code>NextToken</code> as a parameter in your next request to <code>ListDeadLetterSourceQueues</code> to receive the next page of results. </p> <p>For more information about using dead-letter queues, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html">Using Amazon SQS Dead-Letter Queues</a> in the <i>Amazon SQS Developer Guide</i>.</p>

<h3 id="getlistdeadlettersourcequeues-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|Pagination token to request the next set of results.|
|MaxResults|query|integer|false|Maximum number of results to include in the response. Value range is 1 to 1000. You must set <code>MaxResults</code> to receive a value for <code>NextToken</code> in the response.|
|AccountNumber|path|integer|true|The AWS account number|
|QueueName|path|string|true|The name of the queue|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListDeadLetterSourceQueues|
|Version|2012-11-05|

<h3 id="getlistdeadlettersourcequeues-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDeadLetterSourceQueuesResult](#schemalistdeadlettersourcequeuesresult)|
|480|480|QueueDoesNotExist|[QueueDoesNotExist](#schemaqueuedoesnotexist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ListDeadLetterSourceQueues

<a id="opIdPOST_ListDeadLetterSourceQueues"></a>

> Code samples

```bash
curl 'https://sqs.us-east-1.amazonaws.com/#Action=ListDeadLetterSourceQueues?Action=ListDeadLetterSourceQueues&Version=2012-11-05' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"QueueUrl":{},"NextToken":{},"MaxResults":{}}'
```

`POST /#Action=ListDeadLetterSourceQueues`

<p>Returns a list of your queues that have the <code>RedrivePolicy</code> queue attribute configured with a dead-letter queue.</p> <p> The <code>ListDeadLetterSourceQueues</code> methods supports pagination. Set parameter <code>MaxResults</code> in the request to specify the maximum number of results to be returned in the response. If you do not set <code>MaxResults</code>, the response includes a maximum of 1,000 results. If you set <code>MaxResults</code> and there are additional results to display, the response includes a value for <code>NextToken</code>. Use <code>NextToken</code> as a parameter in your next request to <code>ListDeadLetterSourceQueues</code> to receive the next page of results. </p> <p>For more information about using dead-letter queues, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html">Using Amazon SQS Dead-Letter Queues</a> in the <i>Amazon SQS Developer Guide</i>.</p>

> Body parameter

```json
{
  "QueueUrl": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="postlistdeadlettersourcequeues-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListDeadLetterSourceQueuesRequest](#schemalistdeadlettersourcequeuesrequest)|false|none|
|» QueueUrl|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListDeadLetterSourceQueues|
|Version|2012-11-05|

<h3 id="postlistdeadlettersourcequeues-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDeadLetterSourceQueuesResult](#schemalistdeadlettersourcequeuesresult)|
|480|480|QueueDoesNotExist|[QueueDoesNotExist](#schemaqueuedoesnotexist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ListMessageMoveTasks

<a id="opIdGET_ListMessageMoveTasks"></a>

> Code samples

```bash
curl 'https://sqs.us-east-1.amazonaws.com/#Action=ListMessageMoveTasks?SourceArn=string&Action=ListMessageMoveTasks&Version=2012-11-05' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ListMessageMoveTasks`

<p>Gets the most recent message movement tasks (up to 10) under a specific source queue.</p> <note> <ul> <li> <p>This action is currently limited to supporting message redrive from <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html">dead-letter queues (DLQs)</a> only. In this context, the source queue is the dead-letter queue (DLQ), while the destination queue can be the original source queue (from which the messages were driven to the dead-letter-queue), or a custom destination queue. </p> </li> <li> <p>Currently, only standard queues are supported.</p> </li> <li> <p>Only one active message movement task is supported per queue at any given time.</p> </li> </ul> </note>

<h3 id="getlistmessagemovetasks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SourceArn|query|string|true|The ARN of the queue whose message movement tasks are to be listed.|
|MaxResults|query|integer|false|The maximum number of results to include in the response. The default is 1, which provides the most recent message movement task. The upper limit is 10.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListMessageMoveTasks|
|Version|2012-11-05|

<h3 id="getlistmessagemovetasks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListMessageMoveTasksResult](#schemalistmessagemovetasksresult)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|UnsupportedOperation|[UnsupportedOperation](#schemaunsupportedoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ListMessageMoveTasks

<a id="opIdPOST_ListMessageMoveTasks"></a>

> Code samples

```bash
curl 'https://sqs.us-east-1.amazonaws.com/#Action=ListMessageMoveTasks?Action=ListMessageMoveTasks&Version=2012-11-05' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"SourceArn":{},"MaxResults":{}}'
```

`POST /#Action=ListMessageMoveTasks`

<p>Gets the most recent message movement tasks (up to 10) under a specific source queue.</p> <note> <ul> <li> <p>This action is currently limited to supporting message redrive from <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html">dead-letter queues (DLQs)</a> only. In this context, the source queue is the dead-letter queue (DLQ), while the destination queue can be the original source queue (from which the messages were driven to the dead-letter-queue), or a custom destination queue. </p> </li> <li> <p>Currently, only standard queues are supported.</p> </li> <li> <p>Only one active message movement task is supported per queue at any given time.</p> </li> </ul> </note>

> Body parameter

```json
{
  "SourceArn": {},
  "MaxResults": {}
}
```

<h3 id="postlistmessagemovetasks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListMessageMoveTasksRequest](#schemalistmessagemovetasksrequest)|false|none|
|» SourceArn|body|object|true|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListMessageMoveTasks|
|Version|2012-11-05|

<h3 id="postlistmessagemovetasks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListMessageMoveTasksResult](#schemalistmessagemovetasksresult)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|UnsupportedOperation|[UnsupportedOperation](#schemaunsupportedoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ListQueueTags

<a id="opIdGET_ListQueueTags"></a>

> Code samples

```bash
curl 'https://sqs.us-east-1.amazonaws.com/0/string/#Action=ListQueueTags?Action=ListQueueTags&Version=2012-11-05' \
  -H "Authorization: ${API_KEY}"
```

`GET /{AccountNumber}/{QueueName}/#Action=ListQueueTags`

<p>List all cost allocation tags added to the specified Amazon SQS queue. For an overview, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-tags.html">Tagging Your Amazon SQS Queues</a> in the <i>Amazon SQS Developer Guide</i>.</p> <note> <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>

<h3 id="getlistqueuetags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AccountNumber|path|integer|true|The AWS account number|
|QueueName|path|string|true|The name of the queue|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListQueueTags|
|Version|2012-11-05|

<h3 id="getlistqueuetags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListQueueTagsResult](#schemalistqueuetagsresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ListQueueTags

<a id="opIdPOST_ListQueueTags"></a>

> Code samples

```bash
curl 'https://sqs.us-east-1.amazonaws.com/#Action=ListQueueTags?Action=ListQueueTags&Version=2012-11-05' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"QueueUrl":{}}'
```

`POST /#Action=ListQueueTags`

<p>List all cost allocation tags added to the specified Amazon SQS queue. For an overview, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-tags.html">Tagging Your Amazon SQS Queues</a> in the <i>Amazon SQS Developer Guide</i>.</p> <note> <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>

> Body parameter

```json
{
  "QueueUrl": {}
}
```

<h3 id="postlistqueuetags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListQueueTagsRequest](#schemalistqueuetagsrequest)|false|none|
|» QueueUrl|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListQueueTags|
|Version|2012-11-05|

<h3 id="postlistqueuetags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListQueueTagsResult](#schemalistqueuetagsresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ListQueues

<a id="opIdGET_ListQueues"></a>

> Code samples

```bash
curl 'https://sqs.us-east-1.amazonaws.com/#Action=ListQueues?Action=ListQueues&Version=2012-11-05' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ListQueues`

<p>Returns a list of your queues in the current region. The response includes a maximum of 1,000 results. If you specify a value for the optional <code>QueueNamePrefix</code> parameter, only queues with a name that begins with the specified value are returned.</p> <p> The <code>listQueues</code> methods supports pagination. Set parameter <code>MaxResults</code> in the request to specify the maximum number of results to be returned in the response. If you do not set <code>MaxResults</code>, the response includes a maximum of 1,000 results. If you set <code>MaxResults</code> and there are additional results to display, the response includes a value for <code>NextToken</code>. Use <code>NextToken</code> as a parameter in your next request to <code>listQueues</code> to receive the next page of results. </p> <note> <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>

<h3 id="getlistqueues-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|QueueNamePrefix|query|string|false|<p>A string to use for filtering the list results. Only those queues whose name begins with the specified string are returned.</p> <p>Queue URLs and names are case-sensitive.</p>|
|NextToken|query|string|false|Pagination token to request the next set of results.|
|MaxResults|query|integer|false|Maximum number of results to include in the response. Value range is 1 to 1000. You must set <code>MaxResults</code> to receive a value for <code>NextToken</code> in the response.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListQueues|
|Version|2012-11-05|

<h3 id="getlistqueues-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListQueuesResult](#schemalistqueuesresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ListQueues

<a id="opIdPOST_ListQueues"></a>

> Code samples

```bash
curl 'https://sqs.us-east-1.amazonaws.com/#Action=ListQueues?Action=ListQueues&Version=2012-11-05' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"QueueNamePrefix":{},"NextToken":{},"MaxResults":{}}'
```

`POST /#Action=ListQueues`

<p>Returns a list of your queues in the current region. The response includes a maximum of 1,000 results. If you specify a value for the optional <code>QueueNamePrefix</code> parameter, only queues with a name that begins with the specified value are returned.</p> <p> The <code>listQueues</code> methods supports pagination. Set parameter <code>MaxResults</code> in the request to specify the maximum number of results to be returned in the response. If you do not set <code>MaxResults</code>, the response includes a maximum of 1,000 results. If you set <code>MaxResults</code> and there are additional results to display, the response includes a value for <code>NextToken</code>. Use <code>NextToken</code> as a parameter in your next request to <code>listQueues</code> to receive the next page of results. </p> <note> <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>

> Body parameter

```json
{
  "QueueNamePrefix": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="postlistqueues-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListQueuesRequest](#schemalistqueuesrequest)|false|none|
|» QueueNamePrefix|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListQueues|
|Version|2012-11-05|

<h3 id="postlistqueues-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListQueuesResult](#schemalistqueuesresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_PurgeQueue

<a id="opIdGET_PurgeQueue"></a>

> Code samples

```bash
curl 'https://sqs.us-east-1.amazonaws.com/0/string/#Action=PurgeQueue?Action=PurgeQueue&Version=2012-11-05' \
  -H "Authorization: ${API_KEY}"
```

`GET /{AccountNumber}/{QueueName}/#Action=PurgeQueue`

<p>Deletes available messages in a queue (including in-flight messages) specified by the <code>QueueURL</code> parameter.</p> <important> <p>When you use the <code>PurgeQueue</code> action, you can't retrieve any messages deleted from a queue.</p> <p>The message deletion process takes up to 60 seconds. We recommend waiting for 60 seconds regardless of your queue's size. </p> </important> <p>Messages sent to the queue <i>before</i> you call <code>PurgeQueue</code> might be received but are deleted within the next minute.</p> <p>Messages sent to the queue <i>after</i> you call <code>PurgeQueue</code> might be deleted while the queue is being purged.</p>

<h3 id="getpurgequeue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AccountNumber|path|integer|true|The AWS account number|
|QueueName|path|string|true|The name of the queue|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|PurgeQueue|
|Version|2012-11-05|

<h3 id="getpurgequeue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|QueueDoesNotExist|[QueueDoesNotExist](#schemaqueuedoesnotexist)|
|481|481|PurgeQueueInProgress|[PurgeQueueInProgress](#schemapurgequeueinprogress)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_PurgeQueue

<a id="opIdPOST_PurgeQueue"></a>

> Code samples

```bash
curl 'https://sqs.us-east-1.amazonaws.com/#Action=PurgeQueue?Action=PurgeQueue&Version=2012-11-05' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"QueueUrl":{}}'
```

`POST /#Action=PurgeQueue`

<p>Deletes available messages in a queue (including in-flight messages) specified by the <code>QueueURL</code> parameter.</p> <important> <p>When you use the <code>PurgeQueue</code> action, you can't retrieve any messages deleted from a queue.</p> <p>The message deletion process takes up to 60 seconds. We recommend waiting for 60 seconds regardless of your queue's size. </p> </important> <p>Messages sent to the queue <i>before</i> you call <code>PurgeQueue</code> might be received but are deleted within the next minute.</p> <p>Messages sent to the queue <i>after</i> you call <code>PurgeQueue</code> might be deleted while the queue is being purged.</p>

> Body parameter

```json
{
  "QueueUrl": {}
}
```

<h3 id="postpurgequeue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[PurgeQueueRequest](#schemapurgequeuerequest)|false|none|
|» QueueUrl|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|PurgeQueue|
|Version|2012-11-05|

<h3 id="postpurgequeue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|QueueDoesNotExist|[QueueDoesNotExist](#schemaqueuedoesnotexist)|
|481|481|PurgeQueueInProgress|[PurgeQueueInProgress](#schemapurgequeueinprogress)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ReceiveMessage

<a id="opIdGET_ReceiveMessage"></a>

> Code samples

```bash
curl 'https://sqs.us-east-1.amazonaws.com/0/string/#Action=ReceiveMessage?Action=ReceiveMessage&Version=2012-11-05' \
  -H "Authorization: ${API_KEY}"
```

`GET /{AccountNumber}/{QueueName}/#Action=ReceiveMessage`

<p>Retrieves one or more messages (up to 10), from the specified queue. Using the <code>WaitTimeSeconds</code> parameter enables long-poll support. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-long-polling.html">Amazon SQS Long Polling</a> in the <i>Amazon SQS Developer Guide</i>. </p> <p>Short poll is the default behavior where a weighted random set of machines is sampled on a <code>ReceiveMessage</code> call. Thus, only the messages on the sampled machines are returned. If the number of messages in the queue is small (fewer than 1,000), you most likely get fewer messages than you requested per <code>ReceiveMessage</code> call. If the number of messages in the queue is extremely small, you might not receive any messages in a particular <code>ReceiveMessage</code> response. If this happens, repeat the request. </p> <p>For each message returned, the response includes the following:</p> <ul> <li> <p>The message body.</p> </li> <li> <p>An MD5 digest of the message body. For information about MD5, see <a href="https://www.ietf.org/rfc/rfc1321.txt">RFC1321</a>.</p> </li> <li> <p>The <code>MessageId</code> you received when you sent the message to the queue.</p> </li> <li> <p>The receipt handle.</p> </li> <li> <p>The message attributes.</p> </li> <li> <p>An MD5 digest of the message attributes.</p> </li> </ul> <p>The receipt handle is the identifier you must provide when deleting the message. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-message-identifiers.html">Queue and Message Identifiers</a> in the <i>Amazon SQS Developer Guide</i>.</p> <p>You can provide the <code>VisibilityTimeout</code> parameter in your request. The parameter is applied to the messages that Amazon SQS returns in the response. If you don't include the parameter, the overall visibility timeout for the queue is used for the returned messages. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html">Visibility Timeout</a> in the <i>Amazon SQS Developer Guide</i>.</p> <p>A message that isn't deleted or a message whose visibility isn't extended before the visibility timeout expires counts as a failed receive. Depending on the configuration of the queue, the message might be sent to the dead-letter queue.</p> <note> <p>In the future, new attributes might be added. If you write code that calls this action, we recommend that you structure your code so that it can handle new attributes gracefully.</p> </note>

<h3 id="getreceivemessage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AttributeNames|query|[object]|false|<p>A list of attributes that need to be returned along with each message. These attributes include:</p> <ul> <li> <p> <code>All</code> – Returns all values.</p> </li> <li> <p> <code>ApproximateFirstReceiveTimestamp</code> – Returns the time the message was first received from the queue (<a href="http://en.wikipedia.org/wiki/Unix_time">epoch time</a> in milliseconds).</p> </li> <li> <p> <code>ApproximateReceiveCount</code> – Returns the number of times a message has been received across all queues but not deleted.</p> </li> <li> <p> <code>AWSTraceHeader</code> – Returns the X-Ray trace header string. </p> </li> <li> <p> <code>SenderId</code> </p> <ul> <li> <p>For a user, returns the user ID, for example <code>ABCDEFGHI1JKLMNOPQ23R</code>.</p> </li> <li> <p>For an IAM role, returns the IAM role ID, for example <code>ABCDE1F2GH3I4JK5LMNOP:i-a123b456</code>.</p> </li> </ul> </li> <li> <p> <code>SentTimestamp</code> – Returns the time the message was sent to the queue (<a href="http://en.wikipedia.org/wiki/Unix_time">epoch time</a> in milliseconds).</p> </li> <li> <p> <code>SqsManagedSseEnabled</code> – Enables server-side queue encryption using SQS owned encryption keys. Only one server-side encryption option is supported per queue (for example, <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sse-existing-queue.html">SSE-KMS</a> or <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sqs-sse-queue.html">SSE-SQS</a>).</p> </li> <li> <p> <code>MessageDeduplicationId</code> – Returns the value provided by the producer that calls the <code> <a>SendMessage</a> </code> action.</p> </li> <li> <p> <code>MessageGroupId</code> – Returns the value provided by the producer that calls the <code> <a>SendMessage</a> </code> action. Messages with the same <code>MessageGroupId</code> are returned in sequence.</p> </li> <li> <p> <code>SequenceNumber</code> – Returns the value provided by Amazon SQS.</p> </li> </ul>|
|MessageAttributeNames|query|[object]|false|<p>The name of the message attribute, where <i>N</i> is the index.</p> <ul> <li> <p>The name can contain alphanumeric characters and the underscore (<code>_</code>), hyphen (<code>-</code>), and period (<code>.</code>).</p> </li> <li> <p>The name is case-sensitive and must be unique among all attribute names for the message.</p> </li> <li> <p>The name must not start with AWS-reserved prefixes such as <code>AWS.</code> or <code>Amazon.</code> (or any casing variants).</p> </li> <li> <p>The name must not start or end with a period (<code>.</code>), and it should not have periods in succession (<code>..</code>).</p> </li> <li> <p>The name can be up to 256 characters long.</p> </li> </ul> <p>When using <code>ReceiveMessage</code>, you can send a list of attribute names to receive, or you can return all of the attributes by specifying <code>All</code> or <code>.*</code> in your request. You can also use all message attributes starting with a prefix, for example <code>bar.*</code>.</p>|
|MaxNumberOfMessages|query|integer|false|The maximum number of messages to return. Amazon SQS never returns more messages than this value (however, fewer messages might be returned). Valid values: 1 to 10. Default: 1.|
|VisibilityTimeout|query|integer|false|The duration (in seconds) that the received messages are hidden from subsequent retrieve requests after being retrieved by a <code>ReceiveMessage</code> request.|
|WaitTimeSeconds|query|integer|false|<p>The duration (in seconds) for which the call waits for a message to arrive in the queue before returning. If a message is available, the call returns sooner than <code>WaitTimeSeconds</code>. If no messages are available and the wait time expires, the call returns successfully with an empty list of messages.</p> <important> <p>To avoid HTTP errors, ensure that the HTTP response timeout for <code>ReceiveMessage</code> requests is longer than the <code>WaitTimeSeconds</code> parameter. For example, with the Java SDK, you can set HTTP transport settings using the <a href="https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/http/nio/netty/NettyNioAsyncHttpClient.html"> NettyNioAsyncHttpClient</a> for asynchronous clients, or the <a href="https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/http/apache/ApacheHttpClient.html"> ApacheHttpClient</a> for synchronous clients. </p> </important>|
|ReceiveRequestAttemptId|query|string|false|<p>This parameter applies only to FIFO (first-in-first-out) queues.</p> <p>The token used for deduplication of <code>ReceiveMessage</code> calls. If a networking issue occurs after a <code>ReceiveMessage</code> action, and instead of a response you receive a generic error, it is possible to retry the same action with an identical <code>ReceiveRequestAttemptId</code> to retrieve the same set of messages, even if their visibility timeout has not yet expired.</p> <ul> <li> <p>You can use <code>ReceiveRequestAttemptId</code> only for 5 minutes after a <code>ReceiveMessage</code> action.</p> </li> <li> <p>When you set <code>FifoQueue</code>, a caller of the <code>ReceiveMessage</code> action can provide a <code>ReceiveRequestAttemptId</code> explicitly.</p> </li> <li> <p>If a caller of the <code>ReceiveMessage</code> action doesn't provide a <code>ReceiveRequestAttemptId</code>, Amazon SQS generates a <code>ReceiveRequestAttemptId</code>.</p> </li> <li> <p>It is possible to retry the <code>ReceiveMessage</code> action with the same <code>ReceiveRequestAttemptId</code> if none of the messages have been modified (deleted or had their visibility changes).</p> </li> <li> <p>During a visibility timeout, subsequent calls with the same <code>ReceiveRequestAttemptId</code> return the same messages and receipt handles. If a retry occurs within the deduplication interval, it resets the visibility timeout. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html">Visibility Timeout</a> in the <i>Amazon SQS Developer Guide</i>.</p> <important> <p>If a caller of the <code>ReceiveMessage</code> action still processes messages when the visibility timeout expires and messages become visible, another worker consuming from the same queue can receive the same messages and therefore process duplicates. Also, if a consumer whose message processing time is longer than the visibility timeout tries to delete the processed messages, the action fails with an error.</p> <p>To mitigate this effect, ensure that your application observes a safe threshold before the visibility timeout expires and extend the visibility timeout as necessary.</p> </important> </li> <li> <p>While messages with a particular <code>MessageGroupId</code> are invisible, no more messages belonging to the same <code>MessageGroupId</code> are returned until the visibility timeout expires. You can still receive messages with another <code>MessageGroupId</code> as long as it is also visible.</p> </li> <li> <p>If a caller of <code>ReceiveMessage</code> can't track the <code>ReceiveRequestAttemptId</code>, no retries work until the original visibility timeout expires. As a result, delays might occur but the messages in the queue remain in a strict order.</p> </li> </ul> <p>The maximum length of <code>ReceiveRequestAttemptId</code> is 128 characters. <code>ReceiveRequestAttemptId</code> can contain alphanumeric characters (<code>a-z</code>, <code>A-Z</code>, <code>0-9</code>) and punctuation (<code>!"#$%&amp;'()*+,-./:;&lt;=&gt;?@[\]^_`{\|}~</code>).</p> <p>For best practices of using <code>ReceiveRequestAttemptId</code>, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/using-receiverequestattemptid-request-parameter.html">Using the ReceiveRequestAttemptId Request Parameter</a> in the <i>Amazon SQS Developer Guide</i>.</p>|
|AccountNumber|path|integer|true|The AWS account number|
|QueueName|path|string|true|The name of the queue|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ReceiveMessage|
|Version|2012-11-05|

<h3 id="getreceivemessage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ReceiveMessageResult](#schemareceivemessageresult)|
|480|480|OverLimit|[OverLimit](#schemaoverlimit)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ReceiveMessage

<a id="opIdPOST_ReceiveMessage"></a>

> Code samples

```bash
curl 'https://sqs.us-east-1.amazonaws.com/#Action=ReceiveMessage?Action=ReceiveMessage&Version=2012-11-05' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"QueueUrl":{},"AttributeNames":{},"MessageAttributeNames":{},"MaxNumberOfMessages":{},"VisibilityTimeout":{},"WaitTimeSeconds":{},"ReceiveRequestAttemptId":{}}'
```

`POST /#Action=ReceiveMessage`

<p>Retrieves one or more messages (up to 10), from the specified queue. Using the <code>WaitTimeSeconds</code> parameter enables long-poll support. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-long-polling.html">Amazon SQS Long Polling</a> in the <i>Amazon SQS Developer Guide</i>. </p> <p>Short poll is the default behavior where a weighted random set of machines is sampled on a <code>ReceiveMessage</code> call. Thus, only the messages on the sampled machines are returned. If the number of messages in the queue is small (fewer than 1,000), you most likely get fewer messages than you requested per <code>ReceiveMessage</code> call. If the number of messages in the queue is extremely small, you might not receive any messages in a particular <code>ReceiveMessage</code> response. If this happens, repeat the request. </p> <p>For each message returned, the response includes the following:</p> <ul> <li> <p>The message body.</p> </li> <li> <p>An MD5 digest of the message body. For information about MD5, see <a href="https://www.ietf.org/rfc/rfc1321.txt">RFC1321</a>.</p> </li> <li> <p>The <code>MessageId</code> you received when you sent the message to the queue.</p> </li> <li> <p>The receipt handle.</p> </li> <li> <p>The message attributes.</p> </li> <li> <p>An MD5 digest of the message attributes.</p> </li> </ul> <p>The receipt handle is the identifier you must provide when deleting the message. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-message-identifiers.html">Queue and Message Identifiers</a> in the <i>Amazon SQS Developer Guide</i>.</p> <p>You can provide the <code>VisibilityTimeout</code> parameter in your request. The parameter is applied to the messages that Amazon SQS returns in the response. If you don't include the parameter, the overall visibility timeout for the queue is used for the returned messages. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html">Visibility Timeout</a> in the <i>Amazon SQS Developer Guide</i>.</p> <p>A message that isn't deleted or a message whose visibility isn't extended before the visibility timeout expires counts as a failed receive. Depending on the configuration of the queue, the message might be sent to the dead-letter queue.</p> <note> <p>In the future, new attributes might be added. If you write code that calls this action, we recommend that you structure your code so that it can handle new attributes gracefully.</p> </note>

> Body parameter

```json
{
  "QueueUrl": {},
  "AttributeNames": {},
  "MessageAttributeNames": {},
  "MaxNumberOfMessages": {},
  "VisibilityTimeout": {},
  "WaitTimeSeconds": {},
  "ReceiveRequestAttemptId": {}
}
```

<h3 id="postreceivemessage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ReceiveMessageRequest](#schemareceivemessagerequest)|false|none|
|» QueueUrl|body|object|true|none|
|» AttributeNames|body|object|false|none|
|» MessageAttributeNames|body|object|false|none|
|» MaxNumberOfMessages|body|object|false|none|
|» VisibilityTimeout|body|object|false|none|
|» WaitTimeSeconds|body|object|false|none|
|» ReceiveRequestAttemptId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ReceiveMessage|
|Version|2012-11-05|

<h3 id="postreceivemessage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ReceiveMessageResult](#schemareceivemessageresult)|
|480|480|OverLimit|[OverLimit](#schemaoverlimit)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_RemovePermission

<a id="opIdGET_RemovePermission"></a>

> Code samples

```bash
curl 'https://sqs.us-east-1.amazonaws.com/0/string/#Action=RemovePermission?Label=string&Action=RemovePermission&Version=2012-11-05' \
  -H "Authorization: ${API_KEY}"
```

`GET /{AccountNumber}/{QueueName}/#Action=RemovePermission`

<p>Revokes any permissions in the queue policy that matches the specified <code>Label</code> parameter.</p> <note> <ul> <li> <p>Only the owner of a queue can remove permissions from it.</p> </li> <li> <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p> </li> <li> <p>To remove the ability to change queue permissions, you must deny permission to the <code>AddPermission</code>, <code>RemovePermission</code>, and <code>SetQueueAttributes</code> actions in your IAM policy.</p> </li> </ul> </note>

<h3 id="getremovepermission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Label|query|string|true|The identification of the permission to remove. This is the label added using the <code> <a>AddPermission</a> </code> action.|
|AccountNumber|path|integer|true|The AWS account number|
|QueueName|path|string|true|The name of the queue|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|RemovePermission|
|Version|2012-11-05|

<h3 id="getremovepermission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_RemovePermission

<a id="opIdPOST_RemovePermission"></a>

> Code samples

```bash
curl 'https://sqs.us-east-1.amazonaws.com/#Action=RemovePermission?Action=RemovePermission&Version=2012-11-05' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"QueueUrl":{},"Label":{}}'
```

`POST /#Action=RemovePermission`

<p>Revokes any permissions in the queue policy that matches the specified <code>Label</code> parameter.</p> <note> <ul> <li> <p>Only the owner of a queue can remove permissions from it.</p> </li> <li> <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p> </li> <li> <p>To remove the ability to change queue permissions, you must deny permission to the <code>AddPermission</code>, <code>RemovePermission</code>, and <code>SetQueueAttributes</code> actions in your IAM policy.</p> </li> </ul> </note>

> Body parameter

```json
{
  "QueueUrl": {},
  "Label": {}
}
```

<h3 id="postremovepermission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[RemovePermissionRequest](#schemaremovepermissionrequest)|false|none|
|» QueueUrl|body|object|true|none|
|» Label|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|RemovePermission|
|Version|2012-11-05|

<h3 id="postremovepermission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_SendMessage

<a id="opIdGET_SendMessage"></a>

> Code samples

```bash
curl 'https://sqs.us-east-1.amazonaws.com/0/string/#Action=SendMessage?MessageBody=string&Action=SendMessage&Version=2012-11-05' \
  -H "Authorization: ${API_KEY}"
```

`GET /{AccountNumber}/{QueueName}/#Action=SendMessage`

<p>Delivers a message to the specified queue.</p> <important> <p>A message can include only XML, JSON, and unformatted text. The following Unicode characters are allowed:</p> <p> <code>#x9</code> | <code>#xA</code> | <code>#xD</code> | <code>#x20</code> to <code>#xD7FF</code> | <code>#xE000</code> to <code>#xFFFD</code> | <code>#x10000</code> to <code>#x10FFFF</code> </p> <p>Any characters not included in this list will be rejected. For more information, see the <a href="http://www.w3.org/TR/REC-xml/#charsets">W3C specification for characters</a>.</p> </important>

<h3 id="getsendmessage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MessageBody|query|string|true|<p>The message to send. The minimum size is one character. The maximum size is 256 KiB.</p> <important> <p>A message can include only XML, JSON, and unformatted text. The following Unicode characters are allowed:</p> <p> <code>#x9</code> \| <code>#xA</code> \| <code>#xD</code> \| <code>#x20</code> to <code>#xD7FF</code> \| <code>#xE000</code> to <code>#xFFFD</code> \| <code>#x10000</code> to <code>#x10FFFF</code> </p> <p>Any characters not included in this list will be rejected. For more information, see the <a href="http://www.w3.org/TR/REC-xml/#charsets">W3C specification for characters</a>.</p> </important>|
|DelaySeconds|query|integer|false|<p> The length of time, in seconds, for which to delay a specific message. Valid values: 0 to 900. Maximum: 15 minutes. Messages with a positive <code>DelaySeconds</code> value become available for processing after the delay period is finished. If you don't specify a value, the default value for the queue applies. </p> <note> <p>When you set <code>FifoQueue</code>, you can't set <code>DelaySeconds</code> per message. You can set this parameter only on a queue level.</p> </note>|
|MessageAttribute|query|object|false|Each message attribute consists of a <code>Name</code>, <code>Type</code>, and <code>Value</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-message-metadata.html#sqs-message-attributes">Amazon SQS message attributes</a> in the <i>Amazon SQS Developer Guide</i>.|
|MessageSystemAttribute|query|object|false|<p>The message system attribute to send. Each message system attribute consists of a <code>Name</code>, <code>Type</code>, and <code>Value</code>.</p> <important> <ul> <li> <p>Currently, the only supported message system attribute is <code>AWSTraceHeader</code>. Its type must be <code>String</code> and its value must be a correctly formatted X-Ray trace header string.</p> </li> <li> <p>The size of a message system attribute doesn't count towards the total size of a message.</p> </li> </ul> </important>|
|MessageDeduplicationId|query|string|false|<p>This parameter applies only to FIFO (first-in-first-out) queues.</p> <p>The token used for deduplication of sent messages. If a message with a particular <code>MessageDeduplicationId</code> is sent successfully, any messages sent with the same <code>MessageDeduplicationId</code> are accepted successfully but aren't delivered during the 5-minute deduplication interval. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-exactly-once-processing.html"> Exactly-once processing</a> in the <i>Amazon SQS Developer Guide</i>.</p> <ul> <li> <p>Every message must have a unique <code>MessageDeduplicationId</code>,</p> <ul> <li> <p>You may provide a <code>MessageDeduplicationId</code> explicitly.</p> </li> <li> <p>If you aren't able to provide a <code>MessageDeduplicationId</code> and you enable <code>ContentBasedDeduplication</code> for your queue, Amazon SQS uses a SHA-256 hash to generate the <code>MessageDeduplicationId</code> using the body of the message (but not the attributes of the message). </p> </li> <li> <p>If you don't provide a <code>MessageDeduplicationId</code> and the queue doesn't have <code>ContentBasedDeduplication</code> set, the action fails with an error.</p> </li> <li> <p>If the queue has <code>ContentBasedDeduplication</code> set, your <code>MessageDeduplicationId</code> overrides the generated one.</p> </li> </ul> </li> <li> <p>When <code>ContentBasedDeduplication</code> is in effect, messages with identical content sent within the deduplication interval are treated as duplicates and only one copy of the message is delivered.</p> </li> <li> <p>If you send one message with <code>ContentBasedDeduplication</code> enabled and then another message with a <code>MessageDeduplicationId</code> that is the same as the one generated for the first <code>MessageDeduplicationId</code>, the two messages are treated as duplicates and only one copy of the message is delivered. </p> </li> </ul> <note> <p>The <code>MessageDeduplicationId</code> is available to the consumer of the message (this can be useful for troubleshooting delivery issues).</p> <p>If a message is sent successfully but the acknowledgement is lost and the message is resent with the same <code>MessageDeduplicationId</code> after the deduplication interval, Amazon SQS can't detect duplicate messages.</p> <p>Amazon SQS continues to keep track of the message deduplication ID even after the message is received and deleted.</p> </note> <p>The maximum length of <code>MessageDeduplicationId</code> is 128 characters. <code>MessageDeduplicationId</code> can contain alphanumeric characters (<code>a-z</code>, <code>A-Z</code>, <code>0-9</code>) and punctuation (<code>!"#$%&amp;'()*+,-./:;&lt;=&gt;?@[\]^_`{\|}~</code>).</p> <p>For best practices of using <code>MessageDeduplicationId</code>, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/using-messagededuplicationid-property.html">Using the MessageDeduplicationId Property</a> in the <i>Amazon SQS Developer Guide</i>.</p>|
|MessageGroupId|query|string|false|<p>This parameter applies only to FIFO (first-in-first-out) queues.</p> <p>The tag that specifies that a message belongs to a specific message group. Messages that belong to the same message group are processed in a FIFO manner (however, messages in different message groups might be processed out of order). To interleave multiple ordered streams within a single queue, use <code>MessageGroupId</code> values (for example, session data for multiple users). In this scenario, multiple consumers can process the queue, but the session data of each user is processed in a FIFO fashion.</p> <ul> <li> <p>You must associate a non-empty <code>MessageGroupId</code> with a message. If you don't provide a <code>MessageGroupId</code>, the action fails.</p> </li> <li> <p> <code>ReceiveMessage</code> might return messages with multiple <code>MessageGroupId</code> values. For each <code>MessageGroupId</code>, the messages are sorted by time sent. The caller can't specify a <code>MessageGroupId</code>.</p> </li> </ul> <p>The length of <code>MessageGroupId</code> is 128 characters. Valid values: alphanumeric characters and punctuation <code>(!"#$%&amp;'()*+,-./:;&lt;=&gt;?@[\]^_`{\|}~)</code>.</p> <p>For best practices of using <code>MessageGroupId</code>, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/using-messagegroupid-property.html">Using the MessageGroupId Property</a> in the <i>Amazon SQS Developer Guide</i>.</p> <important> <p> <code>MessageGroupId</code> is required for FIFO queues. You can't use it for Standard queues.</p> </important>|
|AccountNumber|path|integer|true|The AWS account number|
|QueueName|path|string|true|The name of the queue|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|SendMessage|
|Version|2012-11-05|

<h3 id="getsendmessage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SendMessageResult](#schemasendmessageresult)|
|480|480|InvalidMessageContents|[InvalidMessageContents](#schemainvalidmessagecontents)|
|481|481|UnsupportedOperation|[UnsupportedOperation](#schemaunsupportedoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_SendMessage

<a id="opIdPOST_SendMessage"></a>

> Code samples

```bash
curl 'https://sqs.us-east-1.amazonaws.com/#Action=SendMessage?Action=SendMessage&Version=2012-11-05' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"QueueUrl":{},"MessageBody":{},"DelaySeconds":{},"MessageAttributes":{"property1":{"StringValue":{},"BinaryValue":{},"StringListValues":{},"BinaryListValues":{},"DataType":{}},"property2":{"StringValue":{},"BinaryValue":{},"StringListValues":{},"BinaryListValues":{},"DataType":{}}},"MessageSystemAttributes":{"property1":{"StringValue":{},"BinaryValue":{},"StringListValues":{},"BinaryListValues":{},"DataType":{}},"property2":{"StringValue":{},"BinaryValue":{},"StringListValues":{},"BinaryListValues":{},"DataType":{}}},"MessageDeduplicationId":{},"MessageGroupId":{}}'
```

`POST /#Action=SendMessage`

<p>Delivers a message to the specified queue.</p> <important> <p>A message can include only XML, JSON, and unformatted text. The following Unicode characters are allowed:</p> <p> <code>#x9</code> | <code>#xA</code> | <code>#xD</code> | <code>#x20</code> to <code>#xD7FF</code> | <code>#xE000</code> to <code>#xFFFD</code> | <code>#x10000</code> to <code>#x10FFFF</code> </p> <p>Any characters not included in this list will be rejected. For more information, see the <a href="http://www.w3.org/TR/REC-xml/#charsets">W3C specification for characters</a>.</p> </important>

> Body parameter

```json
{
  "QueueUrl": {},
  "MessageBody": {},
  "DelaySeconds": {},
  "MessageAttributes": {
    "property1": {
      "StringValue": {},
      "BinaryValue": {},
      "StringListValues": {},
      "BinaryListValues": {},
      "DataType": {}
    },
    "property2": {
      "StringValue": {},
      "BinaryValue": {},
      "StringListValues": {},
      "BinaryListValues": {},
      "DataType": {}
    }
  },
  "MessageSystemAttributes": {
    "property1": {
      "StringValue": {},
      "BinaryValue": {},
      "StringListValues": {},
      "BinaryListValues": {},
      "DataType": {}
    },
    "property2": {
      "StringValue": {},
      "BinaryValue": {},
      "StringListValues": {},
      "BinaryListValues": {},
      "DataType": {}
    }
  },
  "MessageDeduplicationId": {},
  "MessageGroupId": {}
}
```

<h3 id="postsendmessage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[SendMessageRequest](#schemasendmessagerequest)|false|none|
|» QueueUrl|body|object|true|none|
|» MessageBody|body|object|true|none|
|» DelaySeconds|body|object|false|none|
|» MessageAttributes|body|object|false|none|
|» » **additionalProperties**|body|[MessageAttributeValue](#schemamessageattributevalue)|false|<p>The user-specified message attribute value. For string data types, the <code>Value</code> attribute has the same restrictions on the content as the message body. For more information, see <code> <a>SendMessage</a>.</code> </p> <p> <code>Name</code>, <code>type</code>, <code>value</code> and the message body must not be empty or null. All parts of the message attribute, including <code>Name</code>, <code>Type</code>, and <code>Value</code>, are part of the message size restriction (256 KiB or 262,144 bytes).</p>|
|» MessageSystemAttributes|body|object|false|none|
|» » **additionalProperties**|body|[MessageSystemAttributeValue](#schemamessagesystemattributevalue)|false|<p>The user-specified message system attribute value. For string data types, the <code>Value</code> attribute has the same restrictions on the content as the message body. For more information, see <code> <a>SendMessage</a>.</code> </p> <p> <code>Name</code>, <code>type</code>, <code>value</code> and the message body must not be empty or null.</p>|
|» MessageDeduplicationId|body|object|false|none|
|» MessageGroupId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|SendMessage|
|Version|2012-11-05|

<h3 id="postsendmessage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SendMessageResult](#schemasendmessageresult)|
|480|480|InvalidMessageContents|[InvalidMessageContents](#schemainvalidmessagecontents)|
|481|481|UnsupportedOperation|[UnsupportedOperation](#schemaunsupportedoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_SendMessageBatch

<a id="opIdGET_SendMessageBatch"></a>

> Code samples

```bash
curl 'https://sqs.us-east-1.amazonaws.com/0/string/#Action=SendMessageBatch?Entries=%7B%22Id%22%3A%7B%7D%2C%22MessageBody%22%3A%7B%7D%2C%22DelaySeconds%22%3A%7B%7D%2C%22MessageAttributes%22%3A%7B%22property1%22%3A%7B%22StringValue%22%3A%7B%7D%2C%22BinaryValue%22%3A%7B%7D%2C%22StringListValues%22%3A%7B%7D%2C%22BinaryListValues%22%3A%7B%7D%2C%22DataType%22%3A%7B%7D%7D%2C%22property2%22%3A%7B%22StringValue%22%3A%7B%7D%2C%22BinaryValue%22%3A%7B%7D%2C%22StringListValues%22%3A%7B%7D%2C%22BinaryListValues%22%3A%7B%7D%2C%22DataType%22%3A%7B%7D%7D%7D%2C%22MessageSystemAttributes%22%3A%7B%22property1%22%3A%7B%22StringValue%22%3A%7B%7D%2C%22BinaryValue%22%3A%7B%7D%2C%22StringListValues%22%3A%7B%7D%2C%22BinaryListValues%22%3A%7B%7D%2C%22DataType%22%3A%7B%7D%7D%2C%22property2%22%3A%7B%22StringValue%22%3A%7B%7D%2C%22BinaryValue%22%3A%7B%7D%2C%22StringListValues%22%3A%7B%7D%2C%22BinaryListValues%22%3A%7B%7D%2C%22DataType%22%3A%7B%7D%7D%7D%2C%22MessageDeduplicationId%22%3A%7B%7D%2C%22MessageGroupId%22%3A%7B%7D%7D&Action=SendMessageBatch&Version=2012-11-05' \
  -H "Authorization: ${API_KEY}"
```

`GET /{AccountNumber}/{QueueName}/#Action=SendMessageBatch`

<p>You can use <code>SendMessageBatch</code> to send up to 10 messages to the specified queue by assigning either identical or different values to each message (or by not assigning values at all). This is a batch version of <code> <a>SendMessage</a>.</code> For a FIFO queue, multiple messages within a single batch are enqueued in the order they are sent.</p> <p>The result of sending each message is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of <code>200</code>.</p> <p>The maximum allowed individual message size and the maximum total payload size (the sum of the individual lengths of all of the batched messages) are both 256 KiB (262,144 bytes).</p> <important> <p>A message can include only XML, JSON, and unformatted text. The following Unicode characters are allowed:</p> <p> <code>#x9</code> | <code>#xA</code> | <code>#xD</code> | <code>#x20</code> to <code>#xD7FF</code> | <code>#xE000</code> to <code>#xFFFD</code> | <code>#x10000</code> to <code>#x10FFFF</code> </p> <p>Any characters not included in this list will be rejected. For more information, see the <a href="http://www.w3.org/TR/REC-xml/#charsets">W3C specification for characters</a>.</p> </important> <p>If you don't specify the <code>DelaySeconds</code> parameter for an entry, Amazon SQS uses the default value for the queue.</p>

<h3 id="getsendmessagebatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Entries|query|[object]|true|A list of <code> <a>SendMessageBatchRequestEntry</a> </code> items.|
|AccountNumber|path|integer|true|The AWS account number|
|QueueName|path|string|true|The name of the queue|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|SendMessageBatch|
|Version|2012-11-05|

<h3 id="getsendmessagebatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SendMessageBatchResult](#schemasendmessagebatchresult)|
|480|480|TooManyEntriesInBatchRequest|[TooManyEntriesInBatchRequest](#schematoomanyentriesinbatchrequest)|
|481|481|EmptyBatchRequest|[EmptyBatchRequest](#schemaemptybatchrequest)|
|482|482|BatchEntryIdsNotDistinct|[BatchEntryIdsNotDistinct](#schemabatchentryidsnotdistinct)|
|483|483|BatchRequestTooLong|[BatchRequestTooLong](#schemabatchrequesttoolong)|
|484|484|InvalidBatchEntryId|[InvalidBatchEntryId](#schemainvalidbatchentryid)|
|485|485|UnsupportedOperation|[UnsupportedOperation](#schemaunsupportedoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_SendMessageBatch

<a id="opIdPOST_SendMessageBatch"></a>

> Code samples

```bash
curl 'https://sqs.us-east-1.amazonaws.com/#Action=SendMessageBatch?Action=SendMessageBatch&Version=2012-11-05' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"QueueUrl":{},"Entries":{}}'
```

`POST /#Action=SendMessageBatch`

<p>You can use <code>SendMessageBatch</code> to send up to 10 messages to the specified queue by assigning either identical or different values to each message (or by not assigning values at all). This is a batch version of <code> <a>SendMessage</a>.</code> For a FIFO queue, multiple messages within a single batch are enqueued in the order they are sent.</p> <p>The result of sending each message is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of <code>200</code>.</p> <p>The maximum allowed individual message size and the maximum total payload size (the sum of the individual lengths of all of the batched messages) are both 256 KiB (262,144 bytes).</p> <important> <p>A message can include only XML, JSON, and unformatted text. The following Unicode characters are allowed:</p> <p> <code>#x9</code> | <code>#xA</code> | <code>#xD</code> | <code>#x20</code> to <code>#xD7FF</code> | <code>#xE000</code> to <code>#xFFFD</code> | <code>#x10000</code> to <code>#x10FFFF</code> </p> <p>Any characters not included in this list will be rejected. For more information, see the <a href="http://www.w3.org/TR/REC-xml/#charsets">W3C specification for characters</a>.</p> </important> <p>If you don't specify the <code>DelaySeconds</code> parameter for an entry, Amazon SQS uses the default value for the queue.</p>

> Body parameter

```json
{
  "QueueUrl": {},
  "Entries": {}
}
```

<h3 id="postsendmessagebatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[SendMessageBatchRequest](#schemasendmessagebatchrequest)|false|none|
|» QueueUrl|body|object|true|none|
|» Entries|body|object|true|none|
|» Id|body|object|true|none|
|» MessageBody|body|object|true|none|
|» DelaySeconds|body|object|false|none|
|» MessageAttributes|body|object|false|none|
|» » **additionalProperties**|body|[MessageAttributeValue](#schemamessageattributevalue)|false|<p>The user-specified message attribute value. For string data types, the <code>Value</code> attribute has the same restrictions on the content as the message body. For more information, see <code> <a>SendMessage</a>.</code> </p> <p> <code>Name</code>, <code>type</code>, <code>value</code> and the message body must not be empty or null. All parts of the message attribute, including <code>Name</code>, <code>Type</code>, and <code>Value</code>, are part of the message size restriction (256 KiB or 262,144 bytes).</p>|
|» MessageSystemAttributes|body|object|false|none|
|» » **additionalProperties**|body|[MessageSystemAttributeValue](#schemamessagesystemattributevalue)|false|<p>The user-specified message system attribute value. For string data types, the <code>Value</code> attribute has the same restrictions on the content as the message body. For more information, see <code> <a>SendMessage</a>.</code> </p> <p> <code>Name</code>, <code>type</code>, <code>value</code> and the message body must not be empty or null.</p>|
|» MessageDeduplicationId|body|object|false|none|
|» MessageGroupId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|SendMessageBatch|
|Version|2012-11-05|

<h3 id="postsendmessagebatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SendMessageBatchResult](#schemasendmessagebatchresult)|
|480|480|TooManyEntriesInBatchRequest|[TooManyEntriesInBatchRequest](#schematoomanyentriesinbatchrequest)|
|481|481|EmptyBatchRequest|[EmptyBatchRequest](#schemaemptybatchrequest)|
|482|482|BatchEntryIdsNotDistinct|[BatchEntryIdsNotDistinct](#schemabatchentryidsnotdistinct)|
|483|483|BatchRequestTooLong|[BatchRequestTooLong](#schemabatchrequesttoolong)|
|484|484|InvalidBatchEntryId|[InvalidBatchEntryId](#schemainvalidbatchentryid)|
|485|485|UnsupportedOperation|[UnsupportedOperation](#schemaunsupportedoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_SetQueueAttributes

<a id="opIdGET_SetQueueAttributes"></a>

> Code samples

```bash
curl 'https://sqs.us-east-1.amazonaws.com/0/string/#Action=SetQueueAttributes?property1=string&property2=string&Action=SetQueueAttributes&Version=2012-11-05' \
  -H "Authorization: ${API_KEY}"
```

`GET /{AccountNumber}/{QueueName}/#Action=SetQueueAttributes`

<p>Sets the value of one or more queue attributes. When you change a queue's attributes, the change can take up to 60 seconds for most of the attributes to propagate throughout the Amazon SQS system. Changes made to the <code>MessageRetentionPeriod</code> attribute can take up to 15 minutes and will impact existing messages in the queue potentially causing them to be expired and deleted if the <code>MessageRetentionPeriod</code> is reduced below the age of existing messages.</p> <note> <ul> <li> <p>In the future, new attributes might be added. If you write code that calls this action, we recommend that you structure your code so that it can handle new attributes gracefully.</p> </li> <li> <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p> </li> <li> <p>To remove the ability to change queue permissions, you must deny permission to the <code>AddPermission</code>, <code>RemovePermission</code>, and <code>SetQueueAttributes</code> actions in your IAM policy.</p> </li> </ul> </note>

<h3 id="getsetqueueattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Attribute|query|object|true|<p>A map of attributes to set.</p> <p>The following lists the names, descriptions, and values of the special request parameters that the <code>SetQueueAttributes</code> action uses:</p> <ul> <li> <p> <code>DelaySeconds</code> – The length of time, in seconds, for which the delivery of all messages in the queue is delayed. Valid values: An integer from 0 to 900 (15 minutes). Default: 0. </p> </li> <li> <p> <code>MaximumMessageSize</code> – The limit of how many bytes a message can contain before Amazon SQS rejects it. Valid values: An integer from 1,024 bytes (1 KiB) up to 262,144 bytes (256 KiB). Default: 262,144 (256 KiB). </p> </li> <li> <p> <code>MessageRetentionPeriod</code> – The length of time, in seconds, for which Amazon SQS retains a message. Valid values: An integer representing seconds, from 60 (1 minute) to 1,209,600 (14 days). Default: 345,600 (4 days). When you change a queue's attributes, the change can take up to 60 seconds for most of the attributes to propagate throughout the Amazon SQS system. Changes made to the <code>MessageRetentionPeriod</code> attribute can take up to 15 minutes and will impact existing messages in the queue potentially causing them to be expired and deleted if the <code>MessageRetentionPeriod</code> is reduced below the age of existing messages.</p> </li> <li> <p> <code>Policy</code> – The queue's policy. A valid Amazon Web Services policy. For more information about policy structure, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/PoliciesOverview.html">Overview of Amazon Web Services IAM Policies</a> in the <i>Identity and Access Management User Guide</i>. </p> </li> <li> <p> <code>ReceiveMessageWaitTimeSeconds</code> – The length of time, in seconds, for which a <code> <a>ReceiveMessage</a> </code> action waits for a message to arrive. Valid values: An integer from 0 to 20 (seconds). Default: 0. </p> </li> <li> <p> <code>VisibilityTimeout</code> – The visibility timeout for the queue, in seconds. Valid values: An integer from 0 to 43,200 (12 hours). Default: 30. For more information about the visibility timeout, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html">Visibility Timeout</a> in the <i>Amazon SQS Developer Guide</i>.</p> </li> </ul> <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html">dead-letter queues:</a> </p> <ul> <li> <p> <code>RedrivePolicy</code> – The string that includes the parameters for the dead-letter queue functionality of the source queue as a JSON object. The parameters are as follows:</p> <ul> <li> <p> <code>deadLetterTargetArn</code> – The Amazon Resource Name (ARN) of the dead-letter queue to which Amazon SQS moves messages after the value of <code>maxReceiveCount</code> is exceeded.</p> </li> <li> <p> <code>maxReceiveCount</code> – The number of times a message is delivered to the source queue before being moved to the dead-letter queue. Default: 10. When the <code>ReceiveCount</code> for a message exceeds the <code>maxReceiveCount</code> for a queue, Amazon SQS moves the message to the dead-letter-queue.</p> </li> </ul> </li> <li> <p> <code>RedriveAllowPolicy</code> – The string that includes the parameters for the permissions for the dead-letter queue redrive permission and which source queues can specify dead-letter queues as a JSON object. The parameters are as follows:</p> <ul> <li> <p> <code>redrivePermission</code> – The permission type that defines which source queues can specify the current queue as the dead-letter queue. Valid values are:</p> <ul> <li> <p> <code>allowAll</code> – (Default) Any source queues in this Amazon Web Services account in the same Region can specify this queue as the dead-letter queue.</p> </li> <li> <p> <code>denyAll</code> – No source queues can specify this queue as the dead-letter queue.</p> </li> <li> <p> <code>byQueue</code> – Only queues specified by the <code>sourceQueueArns</code> parameter can specify this queue as the dead-letter queue.</p> </li> </ul> </li> <li> <p> <code>sourceQueueArns</code> – The Amazon Resource Names (ARN)s of the source queues that can specify this queue as the dead-letter queue and redrive messages. You can specify this parameter only when the <code>redrivePermission</code> parameter is set to <code>byQueue</code>. You can specify up to 10 source queue ARNs. To allow more than 10 source queues to specify dead-letter queues, set the <code>redrivePermission</code> parameter to <code>allowAll</code>.</p> </li> </ul> </li> </ul> <note> <p>The dead-letter queue of a FIFO queue must also be a FIFO queue. Similarly, the dead-letter queue of a standard queue must also be a standard queue.</p> </note> <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html">server-side-encryption</a>:</p> <ul> <li> <p> <code>KmsMasterKeyId</code> – The ID of an Amazon Web Services managed customer master key (CMK) for Amazon SQS or a custom CMK. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html#sqs-sse-key-terms">Key Terms</a>. While the alias of the AWS-managed CMK for Amazon SQS is always <code>alias/aws/sqs</code>, the alias of a custom CMK can, for example, be <code>alias/<i>MyAlias</i> </code>. For more examples, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters">KeyId</a> in the <i>Key Management Service API Reference</i>. </p> </li> <li> <p> <code>KmsDataKeyReusePeriodSeconds</code> – The length of time, in seconds, for which Amazon SQS can reuse a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#data-keys">data key</a> to encrypt or decrypt messages before calling KMS again. An integer representing seconds, between 60 seconds (1 minute) and 86,400 seconds (24 hours). Default: 300 (5 minutes). A shorter time period provides better security but results in more calls to KMS which might incur charges after Free Tier. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html#sqs-how-does-the-data-key-reuse-period-work">How Does the Data Key Reuse Period Work?</a>. </p> </li> <li> <p> <code>SqsManagedSseEnabled</code> – Enables server-side queue encryption using SQS owned encryption keys. Only one server-side encryption option is supported per queue (for example, <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sse-existing-queue.html">SSE-KMS</a> or <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sqs-sse-queue.html">SSE-SQS</a>).</p> </li> </ul> <p>The following attribute applies only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html">FIFO (first-in-first-out) queues</a>:</p> <ul> <li> <p> <code>ContentBasedDeduplication</code> – Enables content-based deduplication. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-exactly-once-processing.html">Exactly-once processing</a> in the <i>Amazon SQS Developer Guide</i>. Note the following: </p> <ul> <li> <p>Every message must have a unique <code>MessageDeduplicationId</code>.</p> <ul> <li> <p>You may provide a <code>MessageDeduplicationId</code> explicitly.</p> </li> <li> <p>If you aren't able to provide a <code>MessageDeduplicationId</code> and you enable <code>ContentBasedDeduplication</code> for your queue, Amazon SQS uses a SHA-256 hash to generate the <code>MessageDeduplicationId</code> using the body of the message (but not the attributes of the message). </p> </li> <li> <p>If you don't provide a <code>MessageDeduplicationId</code> and the queue doesn't have <code>ContentBasedDeduplication</code> set, the action fails with an error.</p> </li> <li> <p>If the queue has <code>ContentBasedDeduplication</code> set, your <code>MessageDeduplicationId</code> overrides the generated one.</p> </li> </ul> </li> <li> <p>When <code>ContentBasedDeduplication</code> is in effect, messages with identical content sent within the deduplication interval are treated as duplicates and only one copy of the message is delivered.</p> </li> <li> <p>If you send one message with <code>ContentBasedDeduplication</code> enabled and then another message with a <code>MessageDeduplicationId</code> that is the same as the one generated for the first <code>MessageDeduplicationId</code>, the two messages are treated as duplicates and only one copy of the message is delivered. </p> </li> </ul> </li> </ul> <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/high-throughput-fifo.html">high throughput for FIFO queues</a>:</p> <ul> <li> <p> <code>DeduplicationScope</code> – Specifies whether message deduplication occurs at the message group or queue level. Valid values are <code>messageGroup</code> and <code>queue</code>.</p> </li> <li> <p> <code>FifoThroughputLimit</code> – Specifies whether the FIFO queue throughput quota applies to the entire queue or per message group. Valid values are <code>perQueue</code> and <code>perMessageGroupId</code>. The <code>perMessageGroupId</code> value is allowed only when the value for <code>DeduplicationScope</code> is <code>messageGroup</code>.</p> </li> </ul> <p>To enable high throughput for FIFO queues, do the following:</p> <ul> <li> <p>Set <code>DeduplicationScope</code> to <code>messageGroup</code>.</p> </li> <li> <p>Set <code>FifoThroughputLimit</code> to <code>perMessageGroupId</code>.</p> </li> </ul> <p>If you set these attributes to anything other than the values shown for enabling high throughput, normal throughput is in effect and deduplication occurs as specified.</p> <p>For information on throughput quotas, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-messages.html">Quotas related to messages</a> in the <i>Amazon SQS Developer Guide</i>.</p>|
|AccountNumber|path|integer|true|The AWS account number|
|QueueName|path|string|true|The name of the queue|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|SetQueueAttributes|
|Version|2012-11-05|

<h3 id="getsetqueueattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidAttributeName|[InvalidAttributeName](#schemainvalidattributename)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_SetQueueAttributes

<a id="opIdPOST_SetQueueAttributes"></a>

> Code samples

```bash
curl 'https://sqs.us-east-1.amazonaws.com/#Action=SetQueueAttributes?Action=SetQueueAttributes&Version=2012-11-05' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"QueueUrl":{},"Attributes":{"property1":"string","property2":"string"}}'
```

`POST /#Action=SetQueueAttributes`

<p>Sets the value of one or more queue attributes. When you change a queue's attributes, the change can take up to 60 seconds for most of the attributes to propagate throughout the Amazon SQS system. Changes made to the <code>MessageRetentionPeriod</code> attribute can take up to 15 minutes and will impact existing messages in the queue potentially causing them to be expired and deleted if the <code>MessageRetentionPeriod</code> is reduced below the age of existing messages.</p> <note> <ul> <li> <p>In the future, new attributes might be added. If you write code that calls this action, we recommend that you structure your code so that it can handle new attributes gracefully.</p> </li> <li> <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p> </li> <li> <p>To remove the ability to change queue permissions, you must deny permission to the <code>AddPermission</code>, <code>RemovePermission</code>, and <code>SetQueueAttributes</code> actions in your IAM policy.</p> </li> </ul> </note>

> Body parameter

```json
{
  "QueueUrl": {},
  "Attributes": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="postsetqueueattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[SetQueueAttributesRequest](#schemasetqueueattributesrequest)|false|none|
|» QueueUrl|body|object|true|none|
|» Attributes|body|object|true|none|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|SetQueueAttributes|
|Version|2012-11-05|

<h3 id="postsetqueueattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidAttributeName|[InvalidAttributeName](#schemainvalidattributename)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_StartMessageMoveTask

<a id="opIdGET_StartMessageMoveTask"></a>

> Code samples

```bash
curl 'https://sqs.us-east-1.amazonaws.com/#Action=StartMessageMoveTask?SourceArn=string&Action=StartMessageMoveTask&Version=2012-11-05' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=StartMessageMoveTask`

<p>Starts an asynchronous task to move messages from a specified source queue to a specified destination queue.</p> <note> <ul> <li> <p>This action is currently limited to supporting message redrive from queues that are configured as <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html">dead-letter queues (DLQs)</a> of other Amazon SQS queues only. Non-SQS queue sources of dead-letter queues, such as Lambda or Amazon SNS topics, are currently not supported.</p> </li> <li> <p>In dead-letter queues redrive context, the <code>StartMessageMoveTask</code> the source queue is the DLQ, while the destination queue can be the original source queue (from which the messages were driven to the dead-letter-queue), or a custom destination queue.</p> </li> <li> <p>Currently, only standard queues support redrive. FIFO queues don't support redrive.</p> </li> <li> <p>Only one active message movement task is supported per queue at any given time.</p> </li> </ul> </note>

<h3 id="getstartmessagemovetask-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SourceArn|query|string|true|The ARN of the queue that contains the messages to be moved to another queue. Currently, only ARNs of dead-letter queues (DLQs) whose sources are other Amazon SQS queues are accepted. DLQs whose sources are non-SQS queues, such as Lambda or Amazon SNS topics, are not currently supported.|
|DestinationArn|query|string|false|The ARN of the queue that receives the moved messages. You can use this field to specify the destination queue where you would like to redrive messages. If this field is left blank, the messages will be redriven back to their respective original source queues.|
|MaxNumberOfMessagesPerSecond|query|integer|false|The number of messages to be moved per second (the message movement rate). You can use this field to define a fixed message movement rate. The maximum value for messages per second is 500. If this field is left blank, the system will optimize the rate based on the queue message backlog size, which may vary throughout the duration of the message movement task.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|StartMessageMoveTask|
|Version|2012-11-05|

<h3 id="getstartmessagemovetask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartMessageMoveTaskResult](#schemastartmessagemovetaskresult)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|UnsupportedOperation|[UnsupportedOperation](#schemaunsupportedoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_StartMessageMoveTask

<a id="opIdPOST_StartMessageMoveTask"></a>

> Code samples

```bash
curl 'https://sqs.us-east-1.amazonaws.com/#Action=StartMessageMoveTask?Action=StartMessageMoveTask&Version=2012-11-05' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"SourceArn":{},"DestinationArn":{},"MaxNumberOfMessagesPerSecond":{}}'
```

`POST /#Action=StartMessageMoveTask`

<p>Starts an asynchronous task to move messages from a specified source queue to a specified destination queue.</p> <note> <ul> <li> <p>This action is currently limited to supporting message redrive from queues that are configured as <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html">dead-letter queues (DLQs)</a> of other Amazon SQS queues only. Non-SQS queue sources of dead-letter queues, such as Lambda or Amazon SNS topics, are currently not supported.</p> </li> <li> <p>In dead-letter queues redrive context, the <code>StartMessageMoveTask</code> the source queue is the DLQ, while the destination queue can be the original source queue (from which the messages were driven to the dead-letter-queue), or a custom destination queue.</p> </li> <li> <p>Currently, only standard queues support redrive. FIFO queues don't support redrive.</p> </li> <li> <p>Only one active message movement task is supported per queue at any given time.</p> </li> </ul> </note>

> Body parameter

```json
{
  "SourceArn": {},
  "DestinationArn": {},
  "MaxNumberOfMessagesPerSecond": {}
}
```

<h3 id="poststartmessagemovetask-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[StartMessageMoveTaskRequest](#schemastartmessagemovetaskrequest)|false|none|
|» SourceArn|body|object|true|none|
|» DestinationArn|body|object|false|none|
|» MaxNumberOfMessagesPerSecond|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|StartMessageMoveTask|
|Version|2012-11-05|

<h3 id="poststartmessagemovetask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartMessageMoveTaskResult](#schemastartmessagemovetaskresult)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|UnsupportedOperation|[UnsupportedOperation](#schemaunsupportedoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_TagQueue

<a id="opIdGET_TagQueue"></a>

> Code samples

```bash
curl 'https://sqs.us-east-1.amazonaws.com/0/string/#Action=TagQueue?property1=string&property2=string&Action=TagQueue&Version=2012-11-05' \
  -H "Authorization: ${API_KEY}"
```

`GET /{AccountNumber}/{QueueName}/#Action=TagQueue`

<p>Add cost allocation tags to the specified Amazon SQS queue. For an overview, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-tags.html">Tagging Your Amazon SQS Queues</a> in the <i>Amazon SQS Developer Guide</i>.</p> <p>When you use queue tags, keep the following guidelines in mind:</p> <ul> <li> <p>Adding more than 50 tags to a queue isn't recommended.</p> </li> <li> <p>Tags don't have any semantic meaning. Amazon SQS interprets tags as character strings.</p> </li> <li> <p>Tags are case-sensitive.</p> </li> <li> <p>A new tag with a key identical to that of an existing tag overwrites the existing tag.</p> </li> </ul> <p>For a full list of tag restrictions, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-limits.html#limits-queues">Quotas related to queues</a> in the <i>Amazon SQS Developer Guide</i>.</p> <note> <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>

<h3 id="gettagqueue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Tags|query|object|true|The list of tags to be added to the specified queue.|
|AccountNumber|path|integer|true|The AWS account number|
|QueueName|path|string|true|The name of the queue|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|TagQueue|
|Version|2012-11-05|

<h3 id="gettagqueue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_TagQueue

<a id="opIdPOST_TagQueue"></a>

> Code samples

```bash
curl 'https://sqs.us-east-1.amazonaws.com/#Action=TagQueue?Action=TagQueue&Version=2012-11-05' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"QueueUrl":{},"Tags":{"property1":"string","property2":"string"}}'
```

`POST /#Action=TagQueue`

<p>Add cost allocation tags to the specified Amazon SQS queue. For an overview, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-tags.html">Tagging Your Amazon SQS Queues</a> in the <i>Amazon SQS Developer Guide</i>.</p> <p>When you use queue tags, keep the following guidelines in mind:</p> <ul> <li> <p>Adding more than 50 tags to a queue isn't recommended.</p> </li> <li> <p>Tags don't have any semantic meaning. Amazon SQS interprets tags as character strings.</p> </li> <li> <p>Tags are case-sensitive.</p> </li> <li> <p>A new tag with a key identical to that of an existing tag overwrites the existing tag.</p> </li> </ul> <p>For a full list of tag restrictions, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-limits.html#limits-queues">Quotas related to queues</a> in the <i>Amazon SQS Developer Guide</i>.</p> <note> <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>

> Body parameter

```json
{
  "QueueUrl": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="posttagqueue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[TagQueueRequest](#schematagqueuerequest)|false|none|
|» QueueUrl|body|object|true|none|
|» Tags|body|object|true|none|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|TagQueue|
|Version|2012-11-05|

<h3 id="posttagqueue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_UntagQueue

<a id="opIdGET_UntagQueue"></a>

> Code samples

```bash
curl 'https://sqs.us-east-1.amazonaws.com/0/string/#Action=UntagQueue?TagKeys=%7B%7D&Action=UntagQueue&Version=2012-11-05' \
  -H "Authorization: ${API_KEY}"
```

`GET /{AccountNumber}/{QueueName}/#Action=UntagQueue`

<p>Remove cost allocation tags from the specified Amazon SQS queue. For an overview, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-tags.html">Tagging Your Amazon SQS Queues</a> in the <i>Amazon SQS Developer Guide</i>.</p> <note> <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>

<h3 id="getuntagqueue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TagKeys|query|[object]|true|The list of tags to be removed from the specified queue.|
|AccountNumber|path|integer|true|The AWS account number|
|QueueName|path|string|true|The name of the queue|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|UntagQueue|
|Version|2012-11-05|

<h3 id="getuntagqueue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_UntagQueue

<a id="opIdPOST_UntagQueue"></a>

> Code samples

```bash
curl 'https://sqs.us-east-1.amazonaws.com/#Action=UntagQueue?Action=UntagQueue&Version=2012-11-05' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"QueueUrl":{},"TagKeys":{}}'
```

`POST /#Action=UntagQueue`

<p>Remove cost allocation tags from the specified Amazon SQS queue. For an overview, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-tags.html">Tagging Your Amazon SQS Queues</a> in the <i>Amazon SQS Developer Guide</i>.</p> <note> <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>

> Body parameter

```json
{
  "QueueUrl": {},
  "TagKeys": {}
}
```

<h3 id="postuntagqueue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UntagQueueRequest](#schemauntagqueuerequest)|false|none|
|» QueueUrl|body|object|true|none|
|» TagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|UntagQueue|
|Version|2012-11-05|

<h3 id="postuntagqueue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_OverLimit">OverLimit</h2>
<!-- backwards compatibility -->
<a id="schemaoverlimit"></a>
<a id="schema_OverLimit"></a>
<a id="tocSoverlimit"></a>
<a id="tocsoverlimit"></a>

```json
null
```

<h2 id="tocS_CancelMessageMoveTaskResult">CancelMessageMoveTaskResult</h2>
<!-- backwards compatibility -->
<a id="schemacancelmessagemovetaskresult"></a>
<a id="schema_CancelMessageMoveTaskResult"></a>
<a id="tocScancelmessagemovetaskresult"></a>
<a id="tocscancelmessagemovetaskresult"></a>

```json
{
  "ApproximateNumberOfMessagesMoved": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApproximateNumberOfMessagesMoved|object|false|none|none|

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_UnsupportedOperation">UnsupportedOperation</h2>
<!-- backwards compatibility -->
<a id="schemaunsupportedoperation"></a>
<a id="schema_UnsupportedOperation"></a>
<a id="tocSunsupportedoperation"></a>
<a id="tocsunsupportedoperation"></a>

```json
null
```

<h2 id="tocS_MessageNotInflight">MessageNotInflight</h2>
<!-- backwards compatibility -->
<a id="schemamessagenotinflight"></a>
<a id="schema_MessageNotInflight"></a>
<a id="tocSmessagenotinflight"></a>
<a id="tocsmessagenotinflight"></a>

```json
null
```

<h2 id="tocS_ReceiptHandleIsInvalid">ReceiptHandleIsInvalid</h2>
<!-- backwards compatibility -->
<a id="schemareceipthandleisinvalid"></a>
<a id="schema_ReceiptHandleIsInvalid"></a>
<a id="tocSreceipthandleisinvalid"></a>
<a id="tocsreceipthandleisinvalid"></a>

```json
null
```

<h2 id="tocS_ChangeMessageVisibilityBatchResult">ChangeMessageVisibilityBatchResult</h2>
<!-- backwards compatibility -->
<a id="schemachangemessagevisibilitybatchresult"></a>
<a id="schema_ChangeMessageVisibilityBatchResult"></a>
<a id="tocSchangemessagevisibilitybatchresult"></a>
<a id="tocschangemessagevisibilitybatchresult"></a>

```json
{
  "Successful": {},
  "Failed": {}
}
```

For each message in the batch, the response contains a <code> <a>ChangeMessageVisibilityBatchResultEntry</a> </code> tag if the message succeeds or a <code> <a>BatchResultErrorEntry</a> </code> tag if the message fails.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Successful|object|true|none|none|
|Failed|object|true|none|none|

<h2 id="tocS_ChangeMessageVisibilityBatchRequestEntry">ChangeMessageVisibilityBatchRequestEntry</h2>
<!-- backwards compatibility -->
<a id="schemachangemessagevisibilitybatchrequestentry"></a>
<a id="schema_ChangeMessageVisibilityBatchRequestEntry"></a>
<a id="tocSchangemessagevisibilitybatchrequestentry"></a>
<a id="tocschangemessagevisibilitybatchrequestentry"></a>

```json
{
  "Id": {},
  "ReceiptHandle": {},
  "VisibilityTimeout": {}
}
```

Encloses a receipt handle and an entry ID for each message in <code> <a>ChangeMessageVisibilityBatch</a>.</code>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|ReceiptHandle|object|true|none|none|
|VisibilityTimeout|object|false|none|none|

<h2 id="tocS_TooManyEntriesInBatchRequest">TooManyEntriesInBatchRequest</h2>
<!-- backwards compatibility -->
<a id="schematoomanyentriesinbatchrequest"></a>
<a id="schema_TooManyEntriesInBatchRequest"></a>
<a id="tocStoomanyentriesinbatchrequest"></a>
<a id="tocstoomanyentriesinbatchrequest"></a>

```json
null
```

<h2 id="tocS_EmptyBatchRequest">EmptyBatchRequest</h2>
<!-- backwards compatibility -->
<a id="schemaemptybatchrequest"></a>
<a id="schema_EmptyBatchRequest"></a>
<a id="tocSemptybatchrequest"></a>
<a id="tocsemptybatchrequest"></a>

```json
null
```

<h2 id="tocS_BatchEntryIdsNotDistinct">BatchEntryIdsNotDistinct</h2>
<!-- backwards compatibility -->
<a id="schemabatchentryidsnotdistinct"></a>
<a id="schema_BatchEntryIdsNotDistinct"></a>
<a id="tocSbatchentryidsnotdistinct"></a>
<a id="tocsbatchentryidsnotdistinct"></a>

```json
null
```

<h2 id="tocS_InvalidBatchEntryId">InvalidBatchEntryId</h2>
<!-- backwards compatibility -->
<a id="schemainvalidbatchentryid"></a>
<a id="schema_InvalidBatchEntryId"></a>
<a id="tocSinvalidbatchentryid"></a>
<a id="tocsinvalidbatchentryid"></a>

```json
null
```

<h2 id="tocS_CreateQueueResult">CreateQueueResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatequeueresult"></a>
<a id="schema_CreateQueueResult"></a>
<a id="tocScreatequeueresult"></a>
<a id="tocscreatequeueresult"></a>

```json
{
  "QueueUrl": {}
}
```

Returns the <code>QueueUrl</code> attribute of the created queue.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueueUrl|object|false|none|none|

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

<h2 id="tocS_QueueDeletedRecently">QueueDeletedRecently</h2>
<!-- backwards compatibility -->
<a id="schemaqueuedeletedrecently"></a>
<a id="schema_QueueDeletedRecently"></a>
<a id="tocSqueuedeletedrecently"></a>
<a id="tocsqueuedeletedrecently"></a>

```json
null
```

<h2 id="tocS_QueueNameExists">QueueNameExists</h2>
<!-- backwards compatibility -->
<a id="schemaqueuenameexists"></a>
<a id="schema_QueueNameExists"></a>
<a id="tocSqueuenameexists"></a>
<a id="tocsqueuenameexists"></a>

```json
null
```

<h2 id="tocS_InvalidIdFormat">InvalidIdFormat</h2>
<!-- backwards compatibility -->
<a id="schemainvalididformat"></a>
<a id="schema_InvalidIdFormat"></a>
<a id="tocSinvalididformat"></a>
<a id="tocsinvalididformat"></a>

```json
null
```

<h2 id="tocS_DeleteMessageBatchResult">DeleteMessageBatchResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletemessagebatchresult"></a>
<a id="schema_DeleteMessageBatchResult"></a>
<a id="tocSdeletemessagebatchresult"></a>
<a id="tocsdeletemessagebatchresult"></a>

```json
{
  "Successful": {},
  "Failed": {}
}
```

For each message in the batch, the response contains a <code> <a>DeleteMessageBatchResultEntry</a> </code> tag if the message is deleted or a <code> <a>BatchResultErrorEntry</a> </code> tag if the message can't be deleted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Successful|object|true|none|none|
|Failed|object|true|none|none|

<h2 id="tocS_DeleteMessageBatchRequestEntry">DeleteMessageBatchRequestEntry</h2>
<!-- backwards compatibility -->
<a id="schemadeletemessagebatchrequestentry"></a>
<a id="schema_DeleteMessageBatchRequestEntry"></a>
<a id="tocSdeletemessagebatchrequestentry"></a>
<a id="tocsdeletemessagebatchrequestentry"></a>

```json
{
  "Id": {},
  "ReceiptHandle": {}
}
```

Encloses a receipt handle and an identifier for it.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|ReceiptHandle|object|true|none|none|

<h2 id="tocS_GetQueueAttributesResult">GetQueueAttributesResult</h2>
<!-- backwards compatibility -->
<a id="schemagetqueueattributesresult"></a>
<a id="schema_GetQueueAttributesResult"></a>
<a id="tocSgetqueueattributesresult"></a>
<a id="tocsgetqueueattributesresult"></a>

```json
{
  "Attributes": {
    "property1": "string",
    "property2": "string"
  }
}
```

A list of returned queue attributes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attributes|object|false|none|none|

<h2 id="tocS_QueueAttributeName">QueueAttributeName</h2>
<!-- backwards compatibility -->
<a id="schemaqueueattributename"></a>
<a id="schema_QueueAttributeName"></a>
<a id="tocSqueueattributename"></a>
<a id="tocsqueueattributename"></a>

```json
"All"
```

<h2 id="tocS_InvalidAttributeName">InvalidAttributeName</h2>
<!-- backwards compatibility -->
<a id="schemainvalidattributename"></a>
<a id="schema_InvalidAttributeName"></a>
<a id="tocSinvalidattributename"></a>
<a id="tocsinvalidattributename"></a>

```json
null
```

<h2 id="tocS_GetQueueUrlResult">GetQueueUrlResult</h2>
<!-- backwards compatibility -->
<a id="schemagetqueueurlresult"></a>
<a id="schema_GetQueueUrlResult"></a>
<a id="tocSgetqueueurlresult"></a>
<a id="tocsgetqueueurlresult"></a>

```json
{
  "QueueUrl": {}
}
```

For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-api-responses.html">Interpreting Responses</a> in the <i>Amazon SQS Developer Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueueUrl|object|false|none|none|

<h2 id="tocS_QueueDoesNotExist">QueueDoesNotExist</h2>
<!-- backwards compatibility -->
<a id="schemaqueuedoesnotexist"></a>
<a id="schema_QueueDoesNotExist"></a>
<a id="tocSqueuedoesnotexist"></a>
<a id="tocsqueuedoesnotexist"></a>

```json
null
```

<h2 id="tocS_ListDeadLetterSourceQueuesResult">ListDeadLetterSourceQueuesResult</h2>
<!-- backwards compatibility -->
<a id="schemalistdeadlettersourcequeuesresult"></a>
<a id="schema_ListDeadLetterSourceQueuesResult"></a>
<a id="tocSlistdeadlettersourcequeuesresult"></a>
<a id="tocslistdeadlettersourcequeuesresult"></a>

```json
{
  "queueUrls": {},
  "NextToken": {}
}
```

A list of your dead letter source queues.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|queueUrls|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListMessageMoveTasksResult">ListMessageMoveTasksResult</h2>
<!-- backwards compatibility -->
<a id="schemalistmessagemovetasksresult"></a>
<a id="schema_ListMessageMoveTasksResult"></a>
<a id="tocSlistmessagemovetasksresult"></a>
<a id="tocslistmessagemovetasksresult"></a>

```json
{
  "Results": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Results|object|false|none|none|

<h2 id="tocS_ListQueueTagsResult">ListQueueTagsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistqueuetagsresult"></a>
<a id="schema_ListQueueTagsResult"></a>
<a id="tocSlistqueuetagsresult"></a>
<a id="tocslistqueuetagsresult"></a>

```json
{
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|

<h2 id="tocS_ListQueuesResult">ListQueuesResult</h2>
<!-- backwards compatibility -->
<a id="schemalistqueuesresult"></a>
<a id="schema_ListQueuesResult"></a>
<a id="tocSlistqueuesresult"></a>
<a id="tocslistqueuesresult"></a>

```json
{
  "QueueUrls": {},
  "NextToken": {}
}
```

A list of your queues.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueueUrls|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_PurgeQueueInProgress">PurgeQueueInProgress</h2>
<!-- backwards compatibility -->
<a id="schemapurgequeueinprogress"></a>
<a id="schema_PurgeQueueInProgress"></a>
<a id="tocSpurgequeueinprogress"></a>
<a id="tocspurgequeueinprogress"></a>

```json
null
```

<h2 id="tocS_ReceiveMessageResult">ReceiveMessageResult</h2>
<!-- backwards compatibility -->
<a id="schemareceivemessageresult"></a>
<a id="schema_ReceiveMessageResult"></a>
<a id="tocSreceivemessageresult"></a>
<a id="tocsreceivemessageresult"></a>

```json
{
  "Messages": {}
}
```

A list of received messages.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Messages|object|false|none|none|

<h2 id="tocS_MessageAttributeName">MessageAttributeName</h2>
<!-- backwards compatibility -->
<a id="schemamessageattributename"></a>
<a id="schema_MessageAttributeName"></a>
<a id="tocSmessageattributename"></a>
<a id="tocsmessageattributename"></a>

```json
"string"
```

<h2 id="tocS_SendMessageResult">SendMessageResult</h2>
<!-- backwards compatibility -->
<a id="schemasendmessageresult"></a>
<a id="schema_SendMessageResult"></a>
<a id="tocSsendmessageresult"></a>
<a id="tocssendmessageresult"></a>

```json
{
  "MD5OfMessageBody": {},
  "MD5OfMessageAttributes": {},
  "MD5OfMessageSystemAttributes": {},
  "MessageId": {},
  "SequenceNumber": {}
}
```

The <code>MD5OfMessageBody</code> and <code>MessageId</code> elements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MD5OfMessageBody|object|false|none|none|
|MD5OfMessageAttributes|object|false|none|none|
|MD5OfMessageSystemAttributes|object|false|none|none|
|MessageId|object|false|none|none|
|SequenceNumber|object|false|none|none|

<h2 id="tocS_MessageAttributeValue">MessageAttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemamessageattributevalue"></a>
<a id="schema_MessageAttributeValue"></a>
<a id="tocSmessageattributevalue"></a>
<a id="tocsmessageattributevalue"></a>

```json
{
  "StringValue": {},
  "BinaryValue": {},
  "StringListValues": {},
  "BinaryListValues": {},
  "DataType": {}
}
```

<p>The user-specified message attribute value. For string data types, the <code>Value</code> attribute has the same restrictions on the content as the message body. For more information, see <code> <a>SendMessage</a>.</code> </p> <p> <code>Name</code>, <code>type</code>, <code>value</code> and the message body must not be empty or null. All parts of the message attribute, including <code>Name</code>, <code>Type</code>, and <code>Value</code>, are part of the message size restriction (256 KiB or 262,144 bytes).</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StringValue|object|false|none|none|
|BinaryValue|object|false|none|none|
|StringListValues|object|false|none|none|
|BinaryListValues|object|false|none|none|
|DataType|object|true|none|none|

<h2 id="tocS_MessageSystemAttributeValue">MessageSystemAttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemamessagesystemattributevalue"></a>
<a id="schema_MessageSystemAttributeValue"></a>
<a id="tocSmessagesystemattributevalue"></a>
<a id="tocsmessagesystemattributevalue"></a>

```json
{
  "StringValue": {},
  "BinaryValue": {},
  "StringListValues": {},
  "BinaryListValues": {},
  "DataType": {}
}
```

<p>The user-specified message system attribute value. For string data types, the <code>Value</code> attribute has the same restrictions on the content as the message body. For more information, see <code> <a>SendMessage</a>.</code> </p> <p> <code>Name</code>, <code>type</code>, <code>value</code> and the message body must not be empty or null.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StringValue|object|false|none|none|
|BinaryValue|object|false|none|none|
|StringListValues|object|false|none|none|
|BinaryListValues|object|false|none|none|
|DataType|object|true|none|none|

<h2 id="tocS_InvalidMessageContents">InvalidMessageContents</h2>
<!-- backwards compatibility -->
<a id="schemainvalidmessagecontents"></a>
<a id="schema_InvalidMessageContents"></a>
<a id="tocSinvalidmessagecontents"></a>
<a id="tocsinvalidmessagecontents"></a>

```json
null
```

<h2 id="tocS_SendMessageBatchResult">SendMessageBatchResult</h2>
<!-- backwards compatibility -->
<a id="schemasendmessagebatchresult"></a>
<a id="schema_SendMessageBatchResult"></a>
<a id="tocSsendmessagebatchresult"></a>
<a id="tocssendmessagebatchresult"></a>

```json
{
  "Successful": {},
  "Failed": {}
}
```

For each message in the batch, the response contains a <code> <a>SendMessageBatchResultEntry</a> </code> tag if the message succeeds or a <code> <a>BatchResultErrorEntry</a> </code> tag if the message fails.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Successful|object|true|none|none|
|Failed|object|true|none|none|

<h2 id="tocS_SendMessageBatchRequestEntry">SendMessageBatchRequestEntry</h2>
<!-- backwards compatibility -->
<a id="schemasendmessagebatchrequestentry"></a>
<a id="schema_SendMessageBatchRequestEntry"></a>
<a id="tocSsendmessagebatchrequestentry"></a>
<a id="tocssendmessagebatchrequestentry"></a>

```json
{
  "Id": {},
  "MessageBody": {},
  "DelaySeconds": {},
  "MessageAttributes": {
    "property1": {
      "StringValue": {},
      "BinaryValue": {},
      "StringListValues": {},
      "BinaryListValues": {},
      "DataType": {}
    },
    "property2": {
      "StringValue": {},
      "BinaryValue": {},
      "StringListValues": {},
      "BinaryListValues": {},
      "DataType": {}
    }
  },
  "MessageSystemAttributes": {
    "property1": {
      "StringValue": {},
      "BinaryValue": {},
      "StringListValues": {},
      "BinaryListValues": {},
      "DataType": {}
    },
    "property2": {
      "StringValue": {},
      "BinaryValue": {},
      "StringListValues": {},
      "BinaryListValues": {},
      "DataType": {}
    }
  },
  "MessageDeduplicationId": {},
  "MessageGroupId": {}
}
```

Contains the details of a single Amazon SQS message along with an <code>Id</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|MessageBody|object|true|none|none|
|DelaySeconds|object|false|none|none|
|MessageAttributes|object|false|none|none|
|MessageSystemAttributes|object|false|none|none|
|MessageDeduplicationId|object|false|none|none|
|MessageGroupId|object|false|none|none|

<h2 id="tocS_BatchRequestTooLong">BatchRequestTooLong</h2>
<!-- backwards compatibility -->
<a id="schemabatchrequesttoolong"></a>
<a id="schema_BatchRequestTooLong"></a>
<a id="tocSbatchrequesttoolong"></a>
<a id="tocsbatchrequesttoolong"></a>

```json
null
```

<h2 id="tocS_StartMessageMoveTaskResult">StartMessageMoveTaskResult</h2>
<!-- backwards compatibility -->
<a id="schemastartmessagemovetaskresult"></a>
<a id="schema_StartMessageMoveTaskResult"></a>
<a id="tocSstartmessagemovetaskresult"></a>
<a id="tocsstartmessagemovetaskresult"></a>

```json
{
  "TaskHandle": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TaskHandle|object|false|none|none|

<h2 id="tocS_TagKey">TagKey</h2>
<!-- backwards compatibility -->
<a id="schematagkey"></a>
<a id="schema_TagKey"></a>
<a id="tocStagkey"></a>
<a id="tocstagkey"></a>

```json
"string"
```

<h2 id="tocS_AWSAccountIdList">AWSAccountIdList</h2>
<!-- backwards compatibility -->
<a id="schemaawsaccountidlist"></a>
<a id="schema_AWSAccountIdList"></a>
<a id="tocSawsaccountidlist"></a>
<a id="tocsawsaccountidlist"></a>

```json
[
  {}
]
```

<h2 id="tocS_ActionNameList">ActionNameList</h2>
<!-- backwards compatibility -->
<a id="schemaactionnamelist"></a>
<a id="schema_ActionNameList"></a>
<a id="tocSactionnamelist"></a>
<a id="tocsactionnamelist"></a>

```json
[
  {}
]
```

<h2 id="tocS_AddPermissionRequest">AddPermissionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddpermissionrequest"></a>
<a id="schema_AddPermissionRequest"></a>
<a id="tocSaddpermissionrequest"></a>
<a id="tocsaddpermissionrequest"></a>

```json
{
  "QueueUrl": {},
  "Label": {},
  "AWSAccountIds": {},
  "Actions": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueueUrl|object|true|none|none|
|Label|object|true|none|none|
|AWSAccountIds|object|true|none|none|
|Actions|object|true|none|none|

<h2 id="tocS_AttributeNameList">AttributeNameList</h2>
<!-- backwards compatibility -->
<a id="schemaattributenamelist"></a>
<a id="schema_AttributeNameList"></a>
<a id="tocSattributenamelist"></a>
<a id="tocsattributenamelist"></a>

```json
[
  {}
]
```

<h2 id="tocS_Boolean">Boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_Boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
```

<h2 id="tocS_BatchResultErrorEntry">BatchResultErrorEntry</h2>
<!-- backwards compatibility -->
<a id="schemabatchresulterrorentry"></a>
<a id="schema_BatchResultErrorEntry"></a>
<a id="tocSbatchresulterrorentry"></a>
<a id="tocsbatchresulterrorentry"></a>

```json
{
  "Id": {},
  "SenderFault": {},
  "Code": {},
  "Message": {}
}
```

Gives a detailed description of the result of an action on each entry in the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|SenderFault|object|true|none|none|
|Code|object|true|none|none|
|Message|object|false|none|none|

<h2 id="tocS_BatchResultErrorEntryList">BatchResultErrorEntryList</h2>
<!-- backwards compatibility -->
<a id="schemabatchresulterrorentrylist"></a>
<a id="schema_BatchResultErrorEntryList"></a>
<a id="tocSbatchresulterrorentrylist"></a>
<a id="tocsbatchresulterrorentrylist"></a>

```json
[
  {
    "Id": {},
    "SenderFault": {},
    "Code": {},
    "Message": {}
  }
]
```

<h2 id="tocS_Binary">Binary</h2>
<!-- backwards compatibility -->
<a id="schemabinary"></a>
<a id="schema_Binary"></a>
<a id="tocSbinary"></a>
<a id="tocsbinary"></a>

```json
"string"
```

<h2 id="tocS_BinaryList">BinaryList</h2>
<!-- backwards compatibility -->
<a id="schemabinarylist"></a>
<a id="schema_BinaryList"></a>
<a id="tocSbinarylist"></a>
<a id="tocsbinarylist"></a>

```json
[
  {}
]
```

<h2 id="tocS_BoxedInteger">BoxedInteger</h2>
<!-- backwards compatibility -->
<a id="schemaboxedinteger"></a>
<a id="schema_BoxedInteger"></a>
<a id="tocSboxedinteger"></a>
<a id="tocsboxedinteger"></a>

```json
0
```

<h2 id="tocS_CancelMessageMoveTaskRequest">CancelMessageMoveTaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemacancelmessagemovetaskrequest"></a>
<a id="schema_CancelMessageMoveTaskRequest"></a>
<a id="tocScancelmessagemovetaskrequest"></a>
<a id="tocscancelmessagemovetaskrequest"></a>

```json
{
  "TaskHandle": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TaskHandle|object|true|none|none|

<h2 id="tocS_Long">Long</h2>
<!-- backwards compatibility -->
<a id="schemalong"></a>
<a id="schema_Long"></a>
<a id="tocSlong"></a>
<a id="tocslong"></a>

```json
0
```

<h2 id="tocS_ChangeMessageVisibilityBatchRequestEntryList">ChangeMessageVisibilityBatchRequestEntryList</h2>
<!-- backwards compatibility -->
<a id="schemachangemessagevisibilitybatchrequestentrylist"></a>
<a id="schema_ChangeMessageVisibilityBatchRequestEntryList"></a>
<a id="tocSchangemessagevisibilitybatchrequestentrylist"></a>
<a id="tocschangemessagevisibilitybatchrequestentrylist"></a>

```json
[
  {
    "Id": {},
    "ReceiptHandle": {},
    "VisibilityTimeout": {}
  }
]
```

<h2 id="tocS_ChangeMessageVisibilityBatchRequest">ChangeMessageVisibilityBatchRequest</h2>
<!-- backwards compatibility -->
<a id="schemachangemessagevisibilitybatchrequest"></a>
<a id="schema_ChangeMessageVisibilityBatchRequest"></a>
<a id="tocSchangemessagevisibilitybatchrequest"></a>
<a id="tocschangemessagevisibilitybatchrequest"></a>

```json
{
  "QueueUrl": {},
  "Entries": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueueUrl|object|true|none|none|
|Entries|object|true|none|none|

<h2 id="tocS_Integer">Integer</h2>
<!-- backwards compatibility -->
<a id="schemainteger"></a>
<a id="schema_Integer"></a>
<a id="tocSinteger"></a>
<a id="tocsinteger"></a>

```json
0
```

<h2 id="tocS_ChangeMessageVisibilityBatchResultEntryList">ChangeMessageVisibilityBatchResultEntryList</h2>
<!-- backwards compatibility -->
<a id="schemachangemessagevisibilitybatchresultentrylist"></a>
<a id="schema_ChangeMessageVisibilityBatchResultEntryList"></a>
<a id="tocSchangemessagevisibilitybatchresultentrylist"></a>
<a id="tocschangemessagevisibilitybatchresultentrylist"></a>

```json
[
  {
    "Id": {}
  }
]
```

<h2 id="tocS_ChangeMessageVisibilityBatchResultEntry">ChangeMessageVisibilityBatchResultEntry</h2>
<!-- backwards compatibility -->
<a id="schemachangemessagevisibilitybatchresultentry"></a>
<a id="schema_ChangeMessageVisibilityBatchResultEntry"></a>
<a id="tocSchangemessagevisibilitybatchresultentry"></a>
<a id="tocschangemessagevisibilitybatchresultentry"></a>

```json
{
  "Id": {}
}
```

Encloses the <code>Id</code> of an entry in <code> <a>ChangeMessageVisibilityBatch</a>.</code>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|

<h2 id="tocS_ChangeMessageVisibilityRequest">ChangeMessageVisibilityRequest</h2>
<!-- backwards compatibility -->
<a id="schemachangemessagevisibilityrequest"></a>
<a id="schema_ChangeMessageVisibilityRequest"></a>
<a id="tocSchangemessagevisibilityrequest"></a>
<a id="tocschangemessagevisibilityrequest"></a>

```json
{
  "QueueUrl": {},
  "ReceiptHandle": {},
  "VisibilityTimeout": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueueUrl|object|true|none|none|
|ReceiptHandle|object|true|none|none|
|VisibilityTimeout|object|true|none|none|

<h2 id="tocS_QueueAttributeMap">QueueAttributeMap</h2>
<!-- backwards compatibility -->
<a id="schemaqueueattributemap"></a>
<a id="schema_QueueAttributeMap"></a>
<a id="tocSqueueattributemap"></a>
<a id="tocsqueueattributemap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[String](#schemastring)|false|none|none|

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

<h2 id="tocS_CreateQueueRequest">CreateQueueRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatequeuerequest"></a>
<a id="schema_CreateQueueRequest"></a>
<a id="tocScreatequeuerequest"></a>
<a id="tocscreatequeuerequest"></a>

```json
{
  "QueueName": {},
  "Attributes": {
    "property1": "string",
    "property2": "string"
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueueName|object|true|none|none|
|Attributes|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_DeleteMessageBatchRequestEntryList">DeleteMessageBatchRequestEntryList</h2>
<!-- backwards compatibility -->
<a id="schemadeletemessagebatchrequestentrylist"></a>
<a id="schema_DeleteMessageBatchRequestEntryList"></a>
<a id="tocSdeletemessagebatchrequestentrylist"></a>
<a id="tocsdeletemessagebatchrequestentrylist"></a>

```json
[
  {
    "Id": {},
    "ReceiptHandle": {}
  }
]
```

<h2 id="tocS_DeleteMessageBatchRequest">DeleteMessageBatchRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletemessagebatchrequest"></a>
<a id="schema_DeleteMessageBatchRequest"></a>
<a id="tocSdeletemessagebatchrequest"></a>
<a id="tocsdeletemessagebatchrequest"></a>

```json
{
  "QueueUrl": {},
  "Entries": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueueUrl|object|true|none|none|
|Entries|object|true|none|none|

<h2 id="tocS_DeleteMessageBatchResultEntryList">DeleteMessageBatchResultEntryList</h2>
<!-- backwards compatibility -->
<a id="schemadeletemessagebatchresultentrylist"></a>
<a id="schema_DeleteMessageBatchResultEntryList"></a>
<a id="tocSdeletemessagebatchresultentrylist"></a>
<a id="tocsdeletemessagebatchresultentrylist"></a>

```json
[
  {
    "Id": {}
  }
]
```

<h2 id="tocS_DeleteMessageBatchResultEntry">DeleteMessageBatchResultEntry</h2>
<!-- backwards compatibility -->
<a id="schemadeletemessagebatchresultentry"></a>
<a id="schema_DeleteMessageBatchResultEntry"></a>
<a id="tocSdeletemessagebatchresultentry"></a>
<a id="tocsdeletemessagebatchresultentry"></a>

```json
{
  "Id": {}
}
```

Encloses the <code>Id</code> of an entry in <code> <a>DeleteMessageBatch</a>.</code>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|

<h2 id="tocS_DeleteMessageRequest">DeleteMessageRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletemessagerequest"></a>
<a id="schema_DeleteMessageRequest"></a>
<a id="tocSdeletemessagerequest"></a>
<a id="tocsdeletemessagerequest"></a>

```json
{
  "QueueUrl": {},
  "ReceiptHandle": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueueUrl|object|true|none|none|
|ReceiptHandle|object|true|none|none|

<h2 id="tocS_DeleteQueueRequest">DeleteQueueRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletequeuerequest"></a>
<a id="schema_DeleteQueueRequest"></a>
<a id="tocSdeletequeuerequest"></a>
<a id="tocsdeletequeuerequest"></a>

```json
{
  "QueueUrl": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueueUrl|object|true|none|none|

<h2 id="tocS_GetQueueAttributesRequest">GetQueueAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetqueueattributesrequest"></a>
<a id="schema_GetQueueAttributesRequest"></a>
<a id="tocSgetqueueattributesrequest"></a>
<a id="tocsgetqueueattributesrequest"></a>

```json
{
  "QueueUrl": {},
  "AttributeNames": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueueUrl|object|true|none|none|
|AttributeNames|object|false|none|none|

<h2 id="tocS_GetQueueUrlRequest">GetQueueUrlRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetqueueurlrequest"></a>
<a id="schema_GetQueueUrlRequest"></a>
<a id="tocSgetqueueurlrequest"></a>
<a id="tocsgetqueueurlrequest"></a>

```json
{
  "QueueName": {},
  "QueueOwnerAWSAccountId": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueueName|object|true|none|none|
|QueueOwnerAWSAccountId|object|false|none|none|

<h2 id="tocS_Token">Token</h2>
<!-- backwards compatibility -->
<a id="schematoken"></a>
<a id="schema_Token"></a>
<a id="tocStoken"></a>
<a id="tocstoken"></a>

```json
"string"
```

<h2 id="tocS_ListDeadLetterSourceQueuesRequest">ListDeadLetterSourceQueuesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdeadlettersourcequeuesrequest"></a>
<a id="schema_ListDeadLetterSourceQueuesRequest"></a>
<a id="tocSlistdeadlettersourcequeuesrequest"></a>
<a id="tocslistdeadlettersourcequeuesrequest"></a>

```json
{
  "QueueUrl": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueueUrl|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_QueueUrlList">QueueUrlList</h2>
<!-- backwards compatibility -->
<a id="schemaqueueurllist"></a>
<a id="schema_QueueUrlList"></a>
<a id="tocSqueueurllist"></a>
<a id="tocsqueueurllist"></a>

```json
[
  {}
]
```

<h2 id="tocS_ListMessageMoveTasksRequest">ListMessageMoveTasksRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistmessagemovetasksrequest"></a>
<a id="schema_ListMessageMoveTasksRequest"></a>
<a id="tocSlistmessagemovetasksrequest"></a>
<a id="tocslistmessagemovetasksrequest"></a>

```json
{
  "SourceArn": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceArn|object|true|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListMessageMoveTasksResultEntryList">ListMessageMoveTasksResultEntryList</h2>
<!-- backwards compatibility -->
<a id="schemalistmessagemovetasksresultentrylist"></a>
<a id="schema_ListMessageMoveTasksResultEntryList"></a>
<a id="tocSlistmessagemovetasksresultentrylist"></a>
<a id="tocslistmessagemovetasksresultentrylist"></a>

```json
[
  {
    "TaskHandle": {},
    "Status": {},
    "SourceArn": {},
    "DestinationArn": {},
    "MaxNumberOfMessagesPerSecond": {},
    "ApproximateNumberOfMessagesMoved": {},
    "ApproximateNumberOfMessagesToMove": {},
    "FailureReason": {},
    "StartedTimestamp": {}
  }
]
```

<h2 id="tocS_ListMessageMoveTasksResultEntry">ListMessageMoveTasksResultEntry</h2>
<!-- backwards compatibility -->
<a id="schemalistmessagemovetasksresultentry"></a>
<a id="schema_ListMessageMoveTasksResultEntry"></a>
<a id="tocSlistmessagemovetasksresultentry"></a>
<a id="tocslistmessagemovetasksresultentry"></a>

```json
{
  "TaskHandle": {},
  "Status": {},
  "SourceArn": {},
  "DestinationArn": {},
  "MaxNumberOfMessagesPerSecond": {},
  "ApproximateNumberOfMessagesMoved": {},
  "ApproximateNumberOfMessagesToMove": {},
  "FailureReason": {},
  "StartedTimestamp": {}
}
```

Contains the details of a message movement task.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TaskHandle|object|false|none|none|
|Status|object|false|none|none|
|SourceArn|object|false|none|none|
|DestinationArn|object|false|none|none|
|MaxNumberOfMessagesPerSecond|object|false|none|none|
|ApproximateNumberOfMessagesMoved|object|false|none|none|
|ApproximateNumberOfMessagesToMove|object|false|none|none|
|FailureReason|object|false|none|none|
|StartedTimestamp|object|false|none|none|

<h2 id="tocS_ListQueueTagsRequest">ListQueueTagsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistqueuetagsrequest"></a>
<a id="schema_ListQueueTagsRequest"></a>
<a id="tocSlistqueuetagsrequest"></a>
<a id="tocslistqueuetagsrequest"></a>

```json
{
  "QueueUrl": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueueUrl|object|true|none|none|

<h2 id="tocS_ListQueuesRequest">ListQueuesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistqueuesrequest"></a>
<a id="schema_ListQueuesRequest"></a>
<a id="tocSlistqueuesrequest"></a>
<a id="tocslistqueuesrequest"></a>

```json
{
  "QueueNamePrefix": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueueNamePrefix|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_MessageSystemAttributeMap">MessageSystemAttributeMap</h2>
<!-- backwards compatibility -->
<a id="schemamessagesystemattributemap"></a>
<a id="schema_MessageSystemAttributeMap"></a>
<a id="tocSmessagesystemattributemap"></a>
<a id="tocsmessagesystemattributemap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[String](#schemastring)|false|none|none|

<h2 id="tocS_MessageBodyAttributeMap">MessageBodyAttributeMap</h2>
<!-- backwards compatibility -->
<a id="schemamessagebodyattributemap"></a>
<a id="schema_MessageBodyAttributeMap"></a>
<a id="tocSmessagebodyattributemap"></a>
<a id="tocsmessagebodyattributemap"></a>

```json
{
  "property1": {
    "StringValue": {},
    "BinaryValue": {},
    "StringListValues": {},
    "BinaryListValues": {},
    "DataType": {}
  },
  "property2": {
    "StringValue": {},
    "BinaryValue": {},
    "StringListValues": {},
    "BinaryListValues": {},
    "DataType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[MessageAttributeValue](#schemamessageattributevalue)|false|none|<p>The user-specified message attribute value. For string data types, the <code>Value</code> attribute has the same restrictions on the content as the message body. For more information, see <code> <a>SendMessage</a>.</code> </p> <p> <code>Name</code>, <code>type</code>, <code>value</code> and the message body must not be empty or null. All parts of the message attribute, including <code>Name</code>, <code>Type</code>, and <code>Value</code>, are part of the message size restriction (256 KiB or 262,144 bytes).</p>|

<h2 id="tocS_Message">Message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
{
  "MessageId": {},
  "ReceiptHandle": {},
  "MD5OfBody": {},
  "Body": {},
  "Attributes": {
    "property1": "string",
    "property2": "string"
  },
  "MD5OfMessageAttributes": {},
  "MessageAttributes": {
    "property1": {
      "StringValue": {},
      "BinaryValue": {},
      "StringListValues": {},
      "BinaryListValues": {},
      "DataType": {}
    },
    "property2": {
      "StringValue": {},
      "BinaryValue": {},
      "StringListValues": {},
      "BinaryListValues": {},
      "DataType": {}
    }
  }
}
```

An Amazon SQS message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MessageId|object|false|none|none|
|ReceiptHandle|object|false|none|none|
|MD5OfBody|object|false|none|none|
|Body|object|false|none|none|
|Attributes|object|false|none|none|
|MD5OfMessageAttributes|object|false|none|none|
|MessageAttributes|object|false|none|none|

<h2 id="tocS_MessageAttributeNameList">MessageAttributeNameList</h2>
<!-- backwards compatibility -->
<a id="schemamessageattributenamelist"></a>
<a id="schema_MessageAttributeNameList"></a>
<a id="tocSmessageattributenamelist"></a>
<a id="tocsmessageattributenamelist"></a>

```json
[
  {}
]
```

<h2 id="tocS_StringList">StringList</h2>
<!-- backwards compatibility -->
<a id="schemastringlist"></a>
<a id="schema_StringList"></a>
<a id="tocSstringlist"></a>
<a id="tocsstringlist"></a>

```json
[
  {}
]
```

<h2 id="tocS_MessageBodySystemAttributeMap">MessageBodySystemAttributeMap</h2>
<!-- backwards compatibility -->
<a id="schemamessagebodysystemattributemap"></a>
<a id="schema_MessageBodySystemAttributeMap"></a>
<a id="tocSmessagebodysystemattributemap"></a>
<a id="tocsmessagebodysystemattributemap"></a>

```json
{
  "property1": {
    "StringValue": {},
    "BinaryValue": {},
    "StringListValues": {},
    "BinaryListValues": {},
    "DataType": {}
  },
  "property2": {
    "StringValue": {},
    "BinaryValue": {},
    "StringListValues": {},
    "BinaryListValues": {},
    "DataType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[MessageSystemAttributeValue](#schemamessagesystemattributevalue)|false|none|<p>The user-specified message system attribute value. For string data types, the <code>Value</code> attribute has the same restrictions on the content as the message body. For more information, see <code> <a>SendMessage</a>.</code> </p> <p> <code>Name</code>, <code>type</code>, <code>value</code> and the message body must not be empty or null.</p>|

<h2 id="tocS_MessageList">MessageList</h2>
<!-- backwards compatibility -->
<a id="schemamessagelist"></a>
<a id="schema_MessageList"></a>
<a id="tocSmessagelist"></a>
<a id="tocsmessagelist"></a>

```json
[
  {
    "MessageId": {},
    "ReceiptHandle": {},
    "MD5OfBody": {},
    "Body": {},
    "Attributes": {
      "property1": "string",
      "property2": "string"
    },
    "MD5OfMessageAttributes": {},
    "MessageAttributes": {
      "property1": {
        "StringValue": {},
        "BinaryValue": {},
        "StringListValues": {},
        "BinaryListValues": {},
        "DataType": {}
      },
      "property2": {
        "StringValue": {},
        "BinaryValue": {},
        "StringListValues": {},
        "BinaryListValues": {},
        "DataType": {}
      }
    }
  }
]
```

<h2 id="tocS_MessageSystemAttributeName">MessageSystemAttributeName</h2>
<!-- backwards compatibility -->
<a id="schemamessagesystemattributename"></a>
<a id="schema_MessageSystemAttributeName"></a>
<a id="tocSmessagesystemattributename"></a>
<a id="tocsmessagesystemattributename"></a>

```json
"SenderId"
```

<h2 id="tocS_MessageSystemAttributeNameForSends">MessageSystemAttributeNameForSends</h2>
<!-- backwards compatibility -->
<a id="schemamessagesystemattributenameforsends"></a>
<a id="schema_MessageSystemAttributeNameForSends"></a>
<a id="tocSmessagesystemattributenameforsends"></a>
<a id="tocsmessagesystemattributenameforsends"></a>

```json
"AWSTraceHeader"
```

<h2 id="tocS_PurgeQueueRequest">PurgeQueueRequest</h2>
<!-- backwards compatibility -->
<a id="schemapurgequeuerequest"></a>
<a id="schema_PurgeQueueRequest"></a>
<a id="tocSpurgequeuerequest"></a>
<a id="tocspurgequeuerequest"></a>

```json
{
  "QueueUrl": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueueUrl|object|true|none|none|

<h2 id="tocS_ReceiveMessageRequest">ReceiveMessageRequest</h2>
<!-- backwards compatibility -->
<a id="schemareceivemessagerequest"></a>
<a id="schema_ReceiveMessageRequest"></a>
<a id="tocSreceivemessagerequest"></a>
<a id="tocsreceivemessagerequest"></a>

```json
{
  "QueueUrl": {},
  "AttributeNames": {},
  "MessageAttributeNames": {},
  "MaxNumberOfMessages": {},
  "VisibilityTimeout": {},
  "WaitTimeSeconds": {},
  "ReceiveRequestAttemptId": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueueUrl|object|true|none|none|
|AttributeNames|object|false|none|none|
|MessageAttributeNames|object|false|none|none|
|MaxNumberOfMessages|object|false|none|none|
|VisibilityTimeout|object|false|none|none|
|WaitTimeSeconds|object|false|none|none|
|ReceiveRequestAttemptId|object|false|none|none|

<h2 id="tocS_RemovePermissionRequest">RemovePermissionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremovepermissionrequest"></a>
<a id="schema_RemovePermissionRequest"></a>
<a id="tocSremovepermissionrequest"></a>
<a id="tocsremovepermissionrequest"></a>

```json
{
  "QueueUrl": {},
  "Label": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueueUrl|object|true|none|none|
|Label|object|true|none|none|

<h2 id="tocS_SendMessageBatchRequestEntryList">SendMessageBatchRequestEntryList</h2>
<!-- backwards compatibility -->
<a id="schemasendmessagebatchrequestentrylist"></a>
<a id="schema_SendMessageBatchRequestEntryList"></a>
<a id="tocSsendmessagebatchrequestentrylist"></a>
<a id="tocssendmessagebatchrequestentrylist"></a>

```json
[
  {
    "Id": {},
    "MessageBody": {},
    "DelaySeconds": {},
    "MessageAttributes": {
      "property1": {
        "StringValue": {},
        "BinaryValue": {},
        "StringListValues": {},
        "BinaryListValues": {},
        "DataType": {}
      },
      "property2": {
        "StringValue": {},
        "BinaryValue": {},
        "StringListValues": {},
        "BinaryListValues": {},
        "DataType": {}
      }
    },
    "MessageSystemAttributes": {
      "property1": {
        "StringValue": {},
        "BinaryValue": {},
        "StringListValues": {},
        "BinaryListValues": {},
        "DataType": {}
      },
      "property2": {
        "StringValue": {},
        "BinaryValue": {},
        "StringListValues": {},
        "BinaryListValues": {},
        "DataType": {}
      }
    },
    "MessageDeduplicationId": {},
    "MessageGroupId": {}
  }
]
```

<h2 id="tocS_SendMessageBatchRequest">SendMessageBatchRequest</h2>
<!-- backwards compatibility -->
<a id="schemasendmessagebatchrequest"></a>
<a id="schema_SendMessageBatchRequest"></a>
<a id="tocSsendmessagebatchrequest"></a>
<a id="tocssendmessagebatchrequest"></a>

```json
{
  "QueueUrl": {},
  "Entries": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueueUrl|object|true|none|none|
|Entries|object|true|none|none|

<h2 id="tocS_SendMessageBatchResultEntryList">SendMessageBatchResultEntryList</h2>
<!-- backwards compatibility -->
<a id="schemasendmessagebatchresultentrylist"></a>
<a id="schema_SendMessageBatchResultEntryList"></a>
<a id="tocSsendmessagebatchresultentrylist"></a>
<a id="tocssendmessagebatchresultentrylist"></a>

```json
[
  {
    "Id": {},
    "MessageId": {},
    "MD5OfMessageBody": {},
    "MD5OfMessageAttributes": {},
    "MD5OfMessageSystemAttributes": {},
    "SequenceNumber": {}
  }
]
```

<h2 id="tocS_SendMessageBatchResultEntry">SendMessageBatchResultEntry</h2>
<!-- backwards compatibility -->
<a id="schemasendmessagebatchresultentry"></a>
<a id="schema_SendMessageBatchResultEntry"></a>
<a id="tocSsendmessagebatchresultentry"></a>
<a id="tocssendmessagebatchresultentry"></a>

```json
{
  "Id": {},
  "MessageId": {},
  "MD5OfMessageBody": {},
  "MD5OfMessageAttributes": {},
  "MD5OfMessageSystemAttributes": {},
  "SequenceNumber": {}
}
```

Encloses a <code>MessageId</code> for a successfully-enqueued message in a <code> <a>SendMessageBatch</a>.</code>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|MessageId|object|true|none|none|
|MD5OfMessageBody|object|true|none|none|
|MD5OfMessageAttributes|object|false|none|none|
|MD5OfMessageSystemAttributes|object|false|none|none|
|SequenceNumber|object|false|none|none|

<h2 id="tocS_SendMessageRequest">SendMessageRequest</h2>
<!-- backwards compatibility -->
<a id="schemasendmessagerequest"></a>
<a id="schema_SendMessageRequest"></a>
<a id="tocSsendmessagerequest"></a>
<a id="tocssendmessagerequest"></a>

```json
{
  "QueueUrl": {},
  "MessageBody": {},
  "DelaySeconds": {},
  "MessageAttributes": {
    "property1": {
      "StringValue": {},
      "BinaryValue": {},
      "StringListValues": {},
      "BinaryListValues": {},
      "DataType": {}
    },
    "property2": {
      "StringValue": {},
      "BinaryValue": {},
      "StringListValues": {},
      "BinaryListValues": {},
      "DataType": {}
    }
  },
  "MessageSystemAttributes": {
    "property1": {
      "StringValue": {},
      "BinaryValue": {},
      "StringListValues": {},
      "BinaryListValues": {},
      "DataType": {}
    },
    "property2": {
      "StringValue": {},
      "BinaryValue": {},
      "StringListValues": {},
      "BinaryListValues": {},
      "DataType": {}
    }
  },
  "MessageDeduplicationId": {},
  "MessageGroupId": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueueUrl|object|true|none|none|
|MessageBody|object|true|none|none|
|DelaySeconds|object|false|none|none|
|MessageAttributes|object|false|none|none|
|MessageSystemAttributes|object|false|none|none|
|MessageDeduplicationId|object|false|none|none|
|MessageGroupId|object|false|none|none|

<h2 id="tocS_SetQueueAttributesRequest">SetQueueAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetqueueattributesrequest"></a>
<a id="schema_SetQueueAttributesRequest"></a>
<a id="tocSsetqueueattributesrequest"></a>
<a id="tocssetqueueattributesrequest"></a>

```json
{
  "QueueUrl": {},
  "Attributes": {
    "property1": "string",
    "property2": "string"
  }
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueueUrl|object|true|none|none|
|Attributes|object|true|none|none|

<h2 id="tocS_StartMessageMoveTaskRequest">StartMessageMoveTaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartmessagemovetaskrequest"></a>
<a id="schema_StartMessageMoveTaskRequest"></a>
<a id="tocSstartmessagemovetaskrequest"></a>
<a id="tocsstartmessagemovetaskrequest"></a>

```json
{
  "SourceArn": {},
  "DestinationArn": {},
  "MaxNumberOfMessagesPerSecond": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceArn|object|true|none|none|
|DestinationArn|object|false|none|none|
|MaxNumberOfMessagesPerSecond|object|false|none|none|

<h2 id="tocS_TagKeyList">TagKeyList</h2>
<!-- backwards compatibility -->
<a id="schematagkeylist"></a>
<a id="schema_TagKeyList"></a>
<a id="tocStagkeylist"></a>
<a id="tocstagkeylist"></a>

```json
[
  {}
]
```

<h2 id="tocS_TagQueueRequest">TagQueueRequest</h2>
<!-- backwards compatibility -->
<a id="schematagqueuerequest"></a>
<a id="schema_TagQueueRequest"></a>
<a id="tocStagqueuerequest"></a>
<a id="tocstagqueuerequest"></a>

```json
{
  "QueueUrl": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueueUrl|object|true|none|none|
|Tags|object|true|none|none|

<h2 id="tocS_UntagQueueRequest">UntagQueueRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagqueuerequest"></a>
<a id="schema_UntagQueueRequest"></a>
<a id="tocSuntagqueuerequest"></a>
<a id="tocsuntagqueuerequest"></a>

```json
{
  "QueueUrl": {},
  "TagKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueueUrl|object|true|none|none|
|TagKeys|object|true|none|none|
