<h1 id="amazon-workmail-message-flow">Amazon WorkMail Message Flow v2019-05-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The WorkMail Message Flow API provides access to email messages as they are being sent and received by a WorkMail organization.

Base URLs:

* <a href="http://workmailmessageflow.us-east-1.amazonaws.com">http://workmailmessageflow.us-east-1.amazonaws.com</a> - The Amazon WorkMail Message Flow multi-region endpoint

* <a href="https://workmailmessageflow.us-east-1.amazonaws.com">https://workmailmessageflow.us-east-1.amazonaws.com</a> - The Amazon WorkMail Message Flow multi-region endpoint

* <a href="http://workmailmessageflow.cn-north-1.amazonaws.com.cn">http://workmailmessageflow.cn-north-1.amazonaws.com.cn</a> - The Amazon WorkMail Message Flow endpoint for China (Beijing) and China (Ningxia)

* <a href="https://workmailmessageflow.cn-north-1.amazonaws.com.cn">https://workmailmessageflow.cn-north-1.amazonaws.com.cn</a> - The Amazon WorkMail Message Flow endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/workmailmessageflow/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-workmail-message-flow-default">Default</h1>

## GetRawMessageContent

<a id="opIdGetRawMessageContent"></a>

> Code samples

```bash
curl https://workmailmessageflow.us-east-1.amazonaws.com/messages/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /messages/{messageId}`

Retrieves the raw content of an in-transit email message, in MIME format.

<h3 id="getrawmessagecontent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|messageId|path|string|true|The identifier of the email message to retrieve.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "messageContent": {}
}
```

> 480 Response

```json
null
```

<h3 id="getrawmessagecontent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRawMessageContentResponse](#schemagetrawmessagecontentresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutRawMessageContent

<a id="opIdPutRawMessageContent"></a>

> Code samples

```bash
curl https://workmailmessageflow.us-east-1.amazonaws.com/messages/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "content": {
      "s3Reference": {
        "bucket": {},
        "key": {},
        "objectVersion": {}
      }
    }
  }'
```

`POST /messages/{messageId}`

<p>Updates the raw content of an in-transit email message, in MIME format.</p> <p>This example describes how to update in-transit email message. For more information and examples for using this API, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/update-with-lambda.html"> Updating message content with AWS Lambda</a>.</p> <note> <p>Updates to an in-transit message only appear when you call <code>PutRawMessageContent</code> from an AWS Lambda function configured with a synchronous <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/lambda.html#synchronous-rules"> Run Lambda</a> rule. If you call <code>PutRawMessageContent</code> on a delivered or sent message, the message remains unchanged, even though <a href="https://docs.aws.amazon.com/workmail/latest/APIReference/API_messageflow_GetRawMessageContent.html">GetRawMessageContent</a> returns an updated message. </p> </note>

> Body parameter

```json
{
  "content": {
    "s3Reference": {
      "bucket": {},
      "key": {},
      "objectVersion": {}
    }
  }
}
```

<h3 id="putrawmessagecontent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|messageId|path|string|true|The identifier of the email message being updated.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» content|body|object|true|<p>Provides the MIME content of the updated email message as an S3 object. All MIME content must meet the following criteria:</p> <ul> <li> <p>Each part of a multipart MIME message must be formatted properly.</p> </li> <li> <p>Attachments must be of a content type that Amazon SES supports. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mime-types-appendix.html">Unsupported Attachment Types</a>.</p> </li> <li> <p>If any of the MIME parts in a message contain content that is outside of the 7-bit ASCII character range, we recommend encoding that content.</p> </li> <li> <p>Per <a href="https://tools.ietf.org/html/rfc5321#section-4.5.3.1.6">RFC 5321</a>, the maximum length of each line of text, including the &lt;CRLF&gt;, must not exceed 1,000 characters.</p> </li> <li> <p>The message must contain all the required header fields. Check the returned error message for more information.</p> </li> <li> <p>The value of immutable headers must remain unchanged. Check the returned error message for more information.</p> </li> <li> <p>Certain unique headers can only appear once. Check the returned error message for more information.</p> </li> </ul>|
|» » s3Reference|body|object|false|none|
|» » » bucket|body|object|true|none|
|» » » key|body|object|true|none|
|» » » objectVersion|body|object|false|none|

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

<h3 id="putrawmessagecontent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutRawMessageContentResponse](#schemaputrawmessagecontentresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidContentLocation|[InvalidContentLocation](#schemainvalidcontentlocation)|
|482|482|MessageRejected|[MessageRejected](#schemamessagerejected)|
|483|483|MessageFrozen|[MessageFrozen](#schemamessagefrozen)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_GetRawMessageContentResponse">GetRawMessageContentResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetrawmessagecontentresponse"></a>
<a id="schema_GetRawMessageContentResponse"></a>
<a id="tocSgetrawmessagecontentresponse"></a>
<a id="tocsgetrawmessagecontentresponse"></a>

```json
{
  "messageContent": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messageContent|object|true|none|none|

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_PutRawMessageContentResponse">PutRawMessageContentResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputrawmessagecontentresponse"></a>
<a id="schema_PutRawMessageContentResponse"></a>
<a id="tocSputrawmessagecontentresponse"></a>
<a id="tocsputrawmessagecontentresponse"></a>

```json
{}
```

<h2 id="tocS_S3Reference">S3Reference</h2>
<!-- backwards compatibility -->
<a id="schemas3reference"></a>
<a id="schema_S3Reference"></a>
<a id="tocSs3reference"></a>
<a id="tocss3reference"></a>

```json
{
  "bucket": {},
  "key": {},
  "objectVersion": {}
}
```

<p>Amazon S3 object representing the updated message content, in MIME format.</p> <note> <p>The region for the S3 bucket containing the S3 object must match the region used for WorkMail operations. Also, for WorkMail to process an S3 object, it must have permission to access that object. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/update-with-lambda.html"> Updating message content with AWS Lambda</a>.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucket|object|true|none|none|
|key|object|true|none|none|
|objectVersion|object|false|none|none|

<h2 id="tocS_InvalidContentLocation">InvalidContentLocation</h2>
<!-- backwards compatibility -->
<a id="schemainvalidcontentlocation"></a>
<a id="schema_InvalidContentLocation"></a>
<a id="tocSinvalidcontentlocation"></a>
<a id="tocsinvalidcontentlocation"></a>

```json
null
```

<h2 id="tocS_MessageRejected">MessageRejected</h2>
<!-- backwards compatibility -->
<a id="schemamessagerejected"></a>
<a id="schema_MessageRejected"></a>
<a id="tocSmessagerejected"></a>
<a id="tocsmessagerejected"></a>

```json
null
```

<h2 id="tocS_MessageFrozen">MessageFrozen</h2>
<!-- backwards compatibility -->
<a id="schemamessagefrozen"></a>
<a id="schema_MessageFrozen"></a>
<a id="tocSmessagefrozen"></a>
<a id="tocsmessagefrozen"></a>

```json
null
```

<h2 id="tocS_messageIdType">messageIdType</h2>
<!-- backwards compatibility -->
<a id="schemamessageidtype"></a>
<a id="schema_messageIdType"></a>
<a id="tocSmessageidtype"></a>
<a id="tocsmessageidtype"></a>

```json
"string"
```

<h2 id="tocS_GetRawMessageContentRequest">GetRawMessageContentRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetrawmessagecontentrequest"></a>
<a id="schema_GetRawMessageContentRequest"></a>
<a id="tocSgetrawmessagecontentrequest"></a>
<a id="tocsgetrawmessagecontentrequest"></a>

```json
{}
```

<h2 id="tocS_messageContentBlob">messageContentBlob</h2>
<!-- backwards compatibility -->
<a id="schemamessagecontentblob"></a>
<a id="schema_messageContentBlob"></a>
<a id="tocSmessagecontentblob"></a>
<a id="tocsmessagecontentblob"></a>

```json
"string"
```

<h2 id="tocS_RawMessageContent">RawMessageContent</h2>
<!-- backwards compatibility -->
<a id="schemarawmessagecontent"></a>
<a id="schema_RawMessageContent"></a>
<a id="tocSrawmessagecontent"></a>
<a id="tocsrawmessagecontent"></a>

```json
{
  "s3Reference": {
    "bucket": {},
    "key": {},
    "objectVersion": {}
  }
}
```

<p>Provides the MIME content of the updated email message as an S3 object. All MIME content must meet the following criteria:</p> <ul> <li> <p>Each part of a multipart MIME message must be formatted properly.</p> </li> <li> <p>Attachments must be of a content type that Amazon SES supports. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mime-types-appendix.html">Unsupported Attachment Types</a>.</p> </li> <li> <p>If any of the MIME parts in a message contain content that is outside of the 7-bit ASCII character range, we recommend encoding that content.</p> </li> <li> <p>Per <a href="https://tools.ietf.org/html/rfc5321#section-4.5.3.1.6">RFC 5321</a>, the maximum length of each line of text, including the &lt;CRLF&gt;, must not exceed 1,000 characters.</p> </li> <li> <p>The message must contain all the required header fields. Check the returned error message for more information.</p> </li> <li> <p>The value of immutable headers must remain unchanged. Check the returned error message for more information.</p> </li> <li> <p>Certain unique headers can only appear once. Check the returned error message for more information.</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|s3Reference|object|true|none|none|

<h2 id="tocS_PutRawMessageContentRequest">PutRawMessageContentRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputrawmessagecontentrequest"></a>
<a id="schema_PutRawMessageContentRequest"></a>
<a id="tocSputrawmessagecontentrequest"></a>
<a id="tocsputrawmessagecontentrequest"></a>

```json
{
  "content": {
    "s3Reference": {
      "bucket": {},
      "key": {},
      "objectVersion": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|object|true|none|none|

<h2 id="tocS_s3BucketIdType">s3BucketIdType</h2>
<!-- backwards compatibility -->
<a id="schemas3bucketidtype"></a>
<a id="schema_s3BucketIdType"></a>
<a id="tocSs3bucketidtype"></a>
<a id="tocss3bucketidtype"></a>

```json
"string"
```

<h2 id="tocS_s3KeyIdType">s3KeyIdType</h2>
<!-- backwards compatibility -->
<a id="schemas3keyidtype"></a>
<a id="schema_s3KeyIdType"></a>
<a id="tocSs3keyidtype"></a>
<a id="tocss3keyidtype"></a>

```json
"string"
```

<h2 id="tocS_s3VersionType">s3VersionType</h2>
<!-- backwards compatibility -->
<a id="schemas3versiontype"></a>
<a id="schema_s3VersionType"></a>
<a id="tocSs3versiontype"></a>
<a id="tocss3versiontype"></a>

```json
"string"
```
