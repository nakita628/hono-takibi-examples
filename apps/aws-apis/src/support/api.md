<h1 id="aws-support">AWS Support v2013-04-15</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Amazon Web Services Support</fullname> <p>The <i>Amazon Web Services Support API Reference</i> is intended for programmers who need detailed information about the Amazon Web Services Support operations and data types. You can use the API to manage your support cases programmatically. The Amazon Web Services Support API uses HTTP methods that return results in JSON format.</p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note> <p>You can also use the Amazon Web Services Support API to access features for <a href="http://aws.amazon.com/premiumsupport/trustedadvisor/">Trusted Advisor</a>. You can return a list of checks and their descriptions, get check results, specify checks to refresh, and get the refresh status of checks.</p> <p>You can manage your support cases with the following Amazon Web Services Support API operations:</p> <ul> <li> <p>The <a>CreateCase</a>, <a>DescribeCases</a>, <a>DescribeAttachment</a>, and <a>ResolveCase</a> operations create Amazon Web Services Support cases, retrieve information about cases, and resolve cases.</p> </li> <li> <p>The <a>DescribeCommunications</a>, <a>AddCommunicationToCase</a>, and <a>AddAttachmentsToSet</a> operations retrieve and add communications and attachments to Amazon Web Services Support cases.</p> </li> <li> <p>The <a>DescribeServices</a> and <a>DescribeSeverityLevels</a> operations return Amazon Web Service names, service codes, service categories, and problem severity levels. You use these values when you call the <a>CreateCase</a> operation.</p> </li> </ul> <p>You can also use the Amazon Web Services Support API to call the Trusted Advisor operations. For more information, see <a href="https://docs.aws.amazon.com/">Trusted Advisor</a> in the <i>Amazon Web Services Support User Guide</i>.</p> <p>For authentication of requests, Amazon Web Services Support uses <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing Process</a>.</p> <p>For more information about this service and the endpoints to use, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/about-support-api.html">About the Amazon Web Services Support API</a> in the <i>Amazon Web Services Support User Guide</i>.</p>

Base URLs:

* <a href="https://support.us-east-1.amazonaws.com">https://support.us-east-1.amazonaws.com</a> - The general AWS Support multi-region endpoint

* <a href="http://support.cn-north-1.amazonaws.com.cn">http://support.cn-north-1.amazonaws.com.cn</a> - The AWS Support endpoint for China (Beijing) and China (Ningxia)

* <a href="https://support.cn-north-1.amazonaws.com.cn">https://support.cn-north-1.amazonaws.com.cn</a> - The AWS Support endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/support/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-support-default">Default</h1>

## AddAttachmentsToSet

<a id="opIdAddAttachmentsToSet"></a>

> Code samples

```bash
curl 'https://support.us-east-1.amazonaws.com/#X-Amz-Target=AWSSupport_20130415.AddAttachmentsToSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSupport_20130415.AddAttachmentsToSet' \
  -d '{
    "attachmentSetId": {},
    "attachments": {}
  }'
```

`POST /#X-Amz-Target=AWSSupport_20130415.AddAttachmentsToSet`

<p>Adds one or more attachments to an attachment set. </p> <p>An attachment set is a temporary container for attachments that you add to a case or case communication. The set is available for 1 hour after it's created. The <code>expiryTime</code> returned in the response is when the set expires. </p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note>

> Body parameter

```json
{
  "attachmentSetId": {},
  "attachments": {}
}
```

<h3 id="addattachmentstoset-parameters">Parameters</h3>

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
|body|body|[AddAttachmentsToSetRequest](#schemaaddattachmentstosetrequest)|true|none|
|» attachmentSetId|body|object|false|none|
|» attachments|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSupport_20130415.AddAttachmentsToSet|

> Example responses

> 200 Response

```json
{
  "attachmentSetId": {},
  "expiryTime": {}
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

<h3 id="addattachmentstoset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AddAttachmentsToSetResponse](#schemaaddattachmentstosetresponse)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|AttachmentSetIdNotFound|[AttachmentSetIdNotFound](#schemaattachmentsetidnotfound)|
|482|482|AttachmentSetExpired|[AttachmentSetExpired](#schemaattachmentsetexpired)|
|483|483|AttachmentSetSizeLimitExceeded|[AttachmentSetSizeLimitExceeded](#schemaattachmentsetsizelimitexceeded)|
|484|484|AttachmentLimitExceeded|[AttachmentLimitExceeded](#schemaattachmentlimitexceeded)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AddCommunicationToCase

<a id="opIdAddCommunicationToCase"></a>

> Code samples

```bash
curl 'https://support.us-east-1.amazonaws.com/#X-Amz-Target=AWSSupport_20130415.AddCommunicationToCase' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSupport_20130415.AddCommunicationToCase' \
  -d '{
    "caseId": {},
    "communicationBody": {},
    "ccEmailAddresses": {},
    "attachmentSetId": {}
  }'
```

`POST /#X-Amz-Target=AWSSupport_20130415.AddCommunicationToCase`

<p>Adds additional customer communication to an Amazon Web Services Support case. Use the <code>caseId</code> parameter to identify the case to which to add communication. You can list a set of email addresses to copy on the communication by using the <code>ccEmailAddresses</code> parameter. The <code>communicationBody</code> value contains the text of the communication.</p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note>

> Body parameter

```json
{
  "caseId": {},
  "communicationBody": {},
  "ccEmailAddresses": {},
  "attachmentSetId": {}
}
```

<h3 id="addcommunicationtocase-parameters">Parameters</h3>

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
|body|body|[AddCommunicationToCaseRequest](#schemaaddcommunicationtocaserequest)|true|none|
|» caseId|body|object|false|none|
|» communicationBody|body|object|true|none|
|» ccEmailAddresses|body|object|false|none|
|» attachmentSetId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSupport_20130415.AddCommunicationToCase|

> Example responses

> 200 Response

```json
{
  "result": {}
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

<h3 id="addcommunicationtocase-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AddCommunicationToCaseResponse](#schemaaddcommunicationtocaseresponse)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|CaseIdNotFound|[CaseIdNotFound](#schemacaseidnotfound)|
|482|482|AttachmentSetIdNotFound|[AttachmentSetIdNotFound](#schemaattachmentsetidnotfound)|
|483|483|AttachmentSetExpired|[AttachmentSetExpired](#schemaattachmentsetexpired)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateCase

<a id="opIdCreateCase"></a>

> Code samples

```bash
curl 'https://support.us-east-1.amazonaws.com/#X-Amz-Target=AWSSupport_20130415.CreateCase' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSupport_20130415.CreateCase' \
  -d '{
    "subject": {},
    "serviceCode": {},
    "severityCode": {},
    "categoryCode": {},
    "communicationBody": {},
    "ccEmailAddresses": {},
    "language": {},
    "issueType": {},
    "attachmentSetId": {}
  }'
```

`POST /#X-Amz-Target=AWSSupport_20130415.CreateCase`

<p>Creates a case in the Amazon Web Services Support Center. This operation is similar to how you create a case in the Amazon Web Services Support Center <a href="https://console.aws.amazon.com/support/home#/case/create">Create Case</a> page.</p> <p>The Amazon Web Services Support API doesn't support requesting service limit increases. You can submit a service limit increase in the following ways: </p> <ul> <li> <p>Submit a request from the Amazon Web Services Support Center <a href="https://console.aws.amazon.com/support/home#/case/create">Create Case</a> page.</p> </li> <li> <p>Use the Service Quotas <a href="https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_RequestServiceQuotaIncrease.html">RequestServiceQuotaIncrease</a> operation.</p> </li> </ul> <p>A successful <code>CreateCase</code> request returns an Amazon Web Services Support case number. You can use the <a>DescribeCases</a> operation and specify the case number to get existing Amazon Web Services Support cases. After you create a case, use the <a>AddCommunicationToCase</a> operation to add additional communication or attachments to an existing case.</p> <p>The <code>caseId</code> is separate from the <code>displayId</code> that appears in the <a href="https://console.aws.amazon.com/support">Amazon Web Services Support Center</a>. Use the <a>DescribeCases</a> operation to get the <code>displayId</code>.</p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note>

> Body parameter

```json
{
  "subject": {},
  "serviceCode": {},
  "severityCode": {},
  "categoryCode": {},
  "communicationBody": {},
  "ccEmailAddresses": {},
  "language": {},
  "issueType": {},
  "attachmentSetId": {}
}
```

<h3 id="createcase-parameters">Parameters</h3>

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
|body|body|[CreateCaseRequest](#schemacreatecaserequest)|true|none|
|» subject|body|object|true|none|
|» serviceCode|body|object|false|none|
|» severityCode|body|object|false|none|
|» categoryCode|body|object|false|none|
|» communicationBody|body|object|true|none|
|» ccEmailAddresses|body|object|false|none|
|» language|body|object|false|none|
|» issueType|body|object|false|none|
|» attachmentSetId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSupport_20130415.CreateCase|

> Example responses

> 200 Response

```json
{
  "caseId": {}
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

<h3 id="createcase-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateCaseResponse](#schemacreatecaseresponse)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|CaseCreationLimitExceeded|[CaseCreationLimitExceeded](#schemacasecreationlimitexceeded)|
|482|482|AttachmentSetIdNotFound|[AttachmentSetIdNotFound](#schemaattachmentsetidnotfound)|
|483|483|AttachmentSetExpired|[AttachmentSetExpired](#schemaattachmentsetexpired)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAttachment

<a id="opIdDescribeAttachment"></a>

> Code samples

```bash
curl 'https://support.us-east-1.amazonaws.com/#X-Amz-Target=AWSSupport_20130415.DescribeAttachment' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSupport_20130415.DescribeAttachment' \
  -d '{
    "attachmentId": {}
  }'
```

`POST /#X-Amz-Target=AWSSupport_20130415.DescribeAttachment`

<p>Returns the attachment that has the specified ID. Attachments can include screenshots, error logs, or other files that describe your issue. Attachment IDs are generated by the case management system when you add an attachment to a case or case communication. Attachment IDs are returned in the <a>AttachmentDetails</a> objects that are returned by the <a>DescribeCommunications</a> operation.</p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note>

> Body parameter

```json
{
  "attachmentId": {}
}
```

<h3 id="describeattachment-parameters">Parameters</h3>

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
|body|body|[DescribeAttachmentRequest](#schemadescribeattachmentrequest)|true|none|
|» attachmentId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSupport_20130415.DescribeAttachment|

> Example responses

> 200 Response

```json
{
  "attachment": {
    "fileName": {},
    "data": {}
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

<h3 id="describeattachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAttachmentResponse](#schemadescribeattachmentresponse)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|DescribeAttachmentLimitExceeded|[DescribeAttachmentLimitExceeded](#schemadescribeattachmentlimitexceeded)|
|482|482|AttachmentIdNotFound|[AttachmentIdNotFound](#schemaattachmentidnotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeCases

<a id="opIdDescribeCases"></a>

> Code samples

```bash
curl 'https://support.us-east-1.amazonaws.com/#X-Amz-Target=AWSSupport_20130415.DescribeCases' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSupport_20130415.DescribeCases' \
  -d '{
    "caseIdList": {},
    "displayId": {},
    "afterTime": {},
    "beforeTime": {},
    "includeResolvedCases": {},
    "nextToken": {},
    "maxResults": {},
    "language": {},
    "includeCommunications": {}
  }'
```

`POST /#X-Amz-Target=AWSSupport_20130415.DescribeCases`

<p>Returns a list of cases that you specify by passing one or more case IDs. You can use the <code>afterTime</code> and <code>beforeTime</code> parameters to filter the cases by date. You can set values for the <code>includeResolvedCases</code> and <code>includeCommunications</code> parameters to specify how much information to return.</p> <p>The response returns the following in JSON format:</p> <ul> <li> <p>One or more <a href="https://docs.aws.amazon.com/awssupport/latest/APIReference/API_CaseDetails.html">CaseDetails</a> data types.</p> </li> <li> <p>One or more <code>nextToken</code> values, which specify where to paginate the returned records represented by the <code>CaseDetails</code> objects.</p> </li> </ul> <p>Case data is available for 12 months after creation. If a case was created more than 12 months ago, a request might return an error.</p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note>

> Body parameter

```json
{
  "caseIdList": {},
  "displayId": {},
  "afterTime": {},
  "beforeTime": {},
  "includeResolvedCases": {},
  "nextToken": {},
  "maxResults": {},
  "language": {},
  "includeCommunications": {}
}
```

<h3 id="describecases-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeCasesRequest](#schemadescribecasesrequest)|true|none|
|» caseIdList|body|object|false|none|
|» displayId|body|object|false|none|
|» afterTime|body|object|false|none|
|» beforeTime|body|object|false|none|
|» includeResolvedCases|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|
|» language|body|object|false|none|
|» includeCommunications|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSupport_20130415.DescribeCases|

> Example responses

> 200 Response

```json
{
  "cases": {},
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

<h3 id="describecases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeCasesResponse](#schemadescribecasesresponse)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|CaseIdNotFound|[CaseIdNotFound](#schemacaseidnotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeCommunications

<a id="opIdDescribeCommunications"></a>

> Code samples

```bash
curl 'https://support.us-east-1.amazonaws.com/#X-Amz-Target=AWSSupport_20130415.DescribeCommunications' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSupport_20130415.DescribeCommunications' \
  -d '{
    "caseId": {},
    "beforeTime": {},
    "afterTime": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSSupport_20130415.DescribeCommunications`

<p>Returns communications and attachments for one or more support cases. Use the <code>afterTime</code> and <code>beforeTime</code> parameters to filter by date. You can use the <code>caseId</code> parameter to restrict the results to a specific case.</p> <p>Case data is available for 12 months after creation. If a case was created more than 12 months ago, a request for data might cause an error.</p> <p>You can use the <code>maxResults</code> and <code>nextToken</code> parameters to control the pagination of the results. Set <code>maxResults</code> to the number of cases that you want to display on each page, and use <code>nextToken</code> to specify the resumption of pagination.</p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note>

> Body parameter

```json
{
  "caseId": {},
  "beforeTime": {},
  "afterTime": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="describecommunications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeCommunicationsRequest](#schemadescribecommunicationsrequest)|true|none|
|» caseId|body|object|true|none|
|» beforeTime|body|object|false|none|
|» afterTime|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSupport_20130415.DescribeCommunications|

> Example responses

> 200 Response

```json
{
  "communications": {},
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

<h3 id="describecommunications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeCommunicationsResponse](#schemadescribecommunicationsresponse)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|CaseIdNotFound|[CaseIdNotFound](#schemacaseidnotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeServices

<a id="opIdDescribeServices"></a>

> Code samples

```bash
curl 'https://support.us-east-1.amazonaws.com/#X-Amz-Target=AWSSupport_20130415.DescribeServices' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSupport_20130415.DescribeServices' \
  -d '{
    "serviceCodeList": {},
    "language": {}
  }'
```

`POST /#X-Amz-Target=AWSSupport_20130415.DescribeServices`

<p>Returns the current list of Amazon Web Services services and a list of service categories for each service. You then use service names and categories in your <a>CreateCase</a> requests. Each Amazon Web Services service has its own set of categories.</p> <p>The service codes and category codes correspond to the values that appear in the <b>Service</b> and <b>Category</b> lists on the Amazon Web Services Support Center <a href="https://console.aws.amazon.com/support/home#/case/create">Create Case</a> page. The values in those fields don't necessarily match the service codes and categories returned by the <code>DescribeServices</code> operation. Always use the service codes and categories that the <code>DescribeServices</code> operation returns, so that you have the most recent set of service and category codes.</p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note>

> Body parameter

```json
{
  "serviceCodeList": {},
  "language": {}
}
```

<h3 id="describeservices-parameters">Parameters</h3>

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
|body|body|[DescribeServicesRequest](#schemadescribeservicesrequest)|true|none|
|» serviceCodeList|body|object|false|none|
|» language|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSupport_20130415.DescribeServices|

> Example responses

> 200 Response

```json
{
  "services": {}
}
```

> 480 Response

```json
null
```

<h3 id="describeservices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeServicesResponse](#schemadescribeservicesresponse)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeSeverityLevels

<a id="opIdDescribeSeverityLevels"></a>

> Code samples

```bash
curl 'https://support.us-east-1.amazonaws.com/#X-Amz-Target=AWSSupport_20130415.DescribeSeverityLevels' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSupport_20130415.DescribeSeverityLevels' \
  -d '{
    "language": {}
  }'
```

`POST /#X-Amz-Target=AWSSupport_20130415.DescribeSeverityLevels`

<p>Returns the list of severity levels that you can assign to a support case. The severity level for a case is also a field in the <a>CaseDetails</a> data type that you include for a <a>CreateCase</a> request.</p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note>

> Body parameter

```json
{
  "language": {}
}
```

<h3 id="describeseveritylevels-parameters">Parameters</h3>

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
|body|body|[DescribeSeverityLevelsRequest](#schemadescribeseveritylevelsrequest)|true|none|
|» language|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSupport_20130415.DescribeSeverityLevels|

> Example responses

> 200 Response

```json
{
  "severityLevels": {}
}
```

> 480 Response

```json
null
```

<h3 id="describeseveritylevels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeSeverityLevelsResponse](#schemadescribeseveritylevelsresponse)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeTrustedAdvisorCheckRefreshStatuses

<a id="opIdDescribeTrustedAdvisorCheckRefreshStatuses"></a>

> Code samples

```bash
curl 'https://support.us-east-1.amazonaws.com/#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckRefreshStatuses' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSupport_20130415.DescribeTrustedAdvisorCheckRefreshStatuses' \
  -d '{
    "checkIds": {}
  }'
```

`POST /#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckRefreshStatuses`

<p>Returns the refresh status of the Trusted Advisor checks that have the specified check IDs. You can get the check IDs by calling the <a>DescribeTrustedAdvisorChecks</a> operation.</p> <p>Some checks are refreshed automatically, and you can't return their refresh statuses by using the <code>DescribeTrustedAdvisorCheckRefreshStatuses</code> operation. If you call this operation for these checks, you might see an <code>InvalidParameterValue</code> error.</p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note> <p>To call the Trusted Advisor operations in the Amazon Web Services Support API, you must use the US East (N. Virginia) endpoint. Currently, the US West (Oregon) and Europe (Ireland) endpoints don't support the Trusted Advisor operations. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/about-support-api.html#endpoint">About the Amazon Web Services Support API</a> in the <i>Amazon Web Services Support User Guide</i>.</p>

> Body parameter

```json
{
  "checkIds": {}
}
```

<h3 id="describetrustedadvisorcheckrefreshstatuses-parameters">Parameters</h3>

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
|body|body|[DescribeTrustedAdvisorCheckRefreshStatusesRequest](#schemadescribetrustedadvisorcheckrefreshstatusesrequest)|true|none|
|» checkIds|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSupport_20130415.DescribeTrustedAdvisorCheckRefreshStatuses|

> Example responses

> 200 Response

```json
{
  "statuses": {}
}
```

> 480 Response

```json
null
```

<h3 id="describetrustedadvisorcheckrefreshstatuses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTrustedAdvisorCheckRefreshStatusesResponse](#schemadescribetrustedadvisorcheckrefreshstatusesresponse)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeTrustedAdvisorCheckResult

<a id="opIdDescribeTrustedAdvisorCheckResult"></a>

> Code samples

```bash
curl 'https://support.us-east-1.amazonaws.com/#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckResult' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSupport_20130415.DescribeTrustedAdvisorCheckResult' \
  -d '{
    "checkId": {},
    "language": {}
  }'
```

`POST /#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckResult`

<p>Returns the results of the Trusted Advisor check that has the specified check ID. You can get the check IDs by calling the <a>DescribeTrustedAdvisorChecks</a> operation.</p> <p>The response contains a <a>TrustedAdvisorCheckResult</a> object, which contains these three objects:</p> <ul> <li> <p> <a>TrustedAdvisorCategorySpecificSummary</a> </p> </li> <li> <p> <a>TrustedAdvisorResourceDetail</a> </p> </li> <li> <p> <a>TrustedAdvisorResourcesSummary</a> </p> </li> </ul> <p>In addition, the response contains these fields:</p> <ul> <li> <p> <b>status</b> - The alert status of the check can be <code>ok</code> (green), <code>warning</code> (yellow), <code>error</code> (red), or <code>not_available</code>.</p> </li> <li> <p> <b>timestamp</b> - The time of the last refresh of the check.</p> </li> <li> <p> <b>checkId</b> - The unique identifier for the check.</p> </li> </ul> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note> <p>To call the Trusted Advisor operations in the Amazon Web Services Support API, you must use the US East (N. Virginia) endpoint. Currently, the US West (Oregon) and Europe (Ireland) endpoints don't support the Trusted Advisor operations. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/about-support-api.html#endpoint">About the Amazon Web Services Support API</a> in the <i>Amazon Web Services Support User Guide</i>.</p>

> Body parameter

```json
{
  "checkId": {},
  "language": {}
}
```

<h3 id="describetrustedadvisorcheckresult-parameters">Parameters</h3>

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
|body|body|[DescribeTrustedAdvisorCheckResultRequest](#schemadescribetrustedadvisorcheckresultrequest)|true|none|
|» checkId|body|object|true|none|
|» language|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSupport_20130415.DescribeTrustedAdvisorCheckResult|

> Example responses

> 200 Response

```json
{
  "result": {
    "checkId": {},
    "timestamp": {},
    "status": {},
    "resourcesSummary": {
      "resourcesProcessed": {},
      "resourcesFlagged": {},
      "resourcesIgnored": {},
      "resourcesSuppressed": {}
    },
    "categorySpecificSummary": {
      "costOptimizing": {
        "estimatedMonthlySavings": {},
        "estimatedPercentMonthlySavings": {}
      }
    },
    "flaggedResources": {}
  }
}
```

> 480 Response

```json
null
```

<h3 id="describetrustedadvisorcheckresult-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTrustedAdvisorCheckResultResponse](#schemadescribetrustedadvisorcheckresultresponse)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeTrustedAdvisorCheckSummaries

<a id="opIdDescribeTrustedAdvisorCheckSummaries"></a>

> Code samples

```bash
curl 'https://support.us-east-1.amazonaws.com/#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckSummaries' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSupport_20130415.DescribeTrustedAdvisorCheckSummaries' \
  -d '{
    "checkIds": {}
  }'
```

`POST /#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckSummaries`

<p>Returns the results for the Trusted Advisor check summaries for the check IDs that you specified. You can get the check IDs by calling the <a>DescribeTrustedAdvisorChecks</a> operation.</p> <p>The response contains an array of <a>TrustedAdvisorCheckSummary</a> objects.</p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note> <p>To call the Trusted Advisor operations in the Amazon Web Services Support API, you must use the US East (N. Virginia) endpoint. Currently, the US West (Oregon) and Europe (Ireland) endpoints don't support the Trusted Advisor operations. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/about-support-api.html#endpoint">About the Amazon Web Services Support API</a> in the <i>Amazon Web Services Support User Guide</i>.</p>

> Body parameter

```json
{
  "checkIds": {}
}
```

<h3 id="describetrustedadvisorchecksummaries-parameters">Parameters</h3>

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
|body|body|[DescribeTrustedAdvisorCheckSummariesRequest](#schemadescribetrustedadvisorchecksummariesrequest)|true|none|
|» checkIds|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSupport_20130415.DescribeTrustedAdvisorCheckSummaries|

> Example responses

> 200 Response

```json
{
  "summaries": {}
}
```

> 480 Response

```json
null
```

<h3 id="describetrustedadvisorchecksummaries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTrustedAdvisorCheckSummariesResponse](#schemadescribetrustedadvisorchecksummariesresponse)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeTrustedAdvisorChecks

<a id="opIdDescribeTrustedAdvisorChecks"></a>

> Code samples

```bash
curl 'https://support.us-east-1.amazonaws.com/#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorChecks' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSupport_20130415.DescribeTrustedAdvisorChecks' \
  -d '{
    "language": {}
  }'
```

`POST /#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorChecks`

<p>Returns information about all available Trusted Advisor checks, including the name, ID, category, description, and metadata. You must specify a language code.</p> <p>The response contains a <a>TrustedAdvisorCheckDescription</a> object for each check. You must set the Amazon Web Services Region to us-east-1.</p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> <li> <p>The names and descriptions for Trusted Advisor checks are subject to change. We recommend that you specify the check ID in your code to uniquely identify a check.</p> </li> </ul> </note> <p>To call the Trusted Advisor operations in the Amazon Web Services Support API, you must use the US East (N. Virginia) endpoint. Currently, the US West (Oregon) and Europe (Ireland) endpoints don't support the Trusted Advisor operations. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/about-support-api.html#endpoint">About the Amazon Web Services Support API</a> in the <i>Amazon Web Services Support User Guide</i>.</p>

> Body parameter

```json
{
  "language": {}
}
```

<h3 id="describetrustedadvisorchecks-parameters">Parameters</h3>

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
|body|body|[DescribeTrustedAdvisorChecksRequest](#schemadescribetrustedadvisorchecksrequest)|true|none|
|» language|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSupport_20130415.DescribeTrustedAdvisorChecks|

> Example responses

> 200 Response

```json
{
  "checks": {}
}
```

> 480 Response

```json
null
```

<h3 id="describetrustedadvisorchecks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTrustedAdvisorChecksResponse](#schemadescribetrustedadvisorchecksresponse)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RefreshTrustedAdvisorCheck

<a id="opIdRefreshTrustedAdvisorCheck"></a>

> Code samples

```bash
curl 'https://support.us-east-1.amazonaws.com/#X-Amz-Target=AWSSupport_20130415.RefreshTrustedAdvisorCheck' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSupport_20130415.RefreshTrustedAdvisorCheck' \
  -d '{
    "checkId": {}
  }'
```

`POST /#X-Amz-Target=AWSSupport_20130415.RefreshTrustedAdvisorCheck`

<p>Refreshes the Trusted Advisor check that you specify using the check ID. You can get the check IDs by calling the <a>DescribeTrustedAdvisorChecks</a> operation.</p> <p>Some checks are refreshed automatically. If you call the <code>RefreshTrustedAdvisorCheck</code> operation to refresh them, you might see the <code>InvalidParameterValue</code> error.</p> <p>The response contains a <a>TrustedAdvisorCheckRefreshStatus</a> object.</p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note> <p>To call the Trusted Advisor operations in the Amazon Web Services Support API, you must use the US East (N. Virginia) endpoint. Currently, the US West (Oregon) and Europe (Ireland) endpoints don't support the Trusted Advisor operations. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/about-support-api.html#endpoint">About the Amazon Web Services Support API</a> in the <i>Amazon Web Services Support User Guide</i>.</p>

> Body parameter

```json
{
  "checkId": {}
}
```

<h3 id="refreshtrustedadvisorcheck-parameters">Parameters</h3>

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
|body|body|[RefreshTrustedAdvisorCheckRequest](#schemarefreshtrustedadvisorcheckrequest)|true|none|
|» checkId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSupport_20130415.RefreshTrustedAdvisorCheck|

> Example responses

> 200 Response

```json
{
  "status": {
    "checkId": {},
    "status": {},
    "millisUntilNextRefreshable": {}
  }
}
```

> 480 Response

```json
null
```

<h3 id="refreshtrustedadvisorcheck-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RefreshTrustedAdvisorCheckResponse](#schemarefreshtrustedadvisorcheckresponse)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ResolveCase

<a id="opIdResolveCase"></a>

> Code samples

```bash
curl 'https://support.us-east-1.amazonaws.com/#X-Amz-Target=AWSSupport_20130415.ResolveCase' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSSupport_20130415.ResolveCase' \
  -d '{
    "caseId": {}
  }'
```

`POST /#X-Amz-Target=AWSSupport_20130415.ResolveCase`

<p>Resolves a support case. This operation takes a <code>caseId</code> and returns the initial and final state of the case.</p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note>

> Body parameter

```json
{
  "caseId": {}
}
```

<h3 id="resolvecase-parameters">Parameters</h3>

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
|body|body|[ResolveCaseRequest](#schemaresolvecaserequest)|true|none|
|» caseId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSSupport_20130415.ResolveCase|

> Example responses

> 200 Response

```json
{
  "initialCaseStatus": {},
  "finalCaseStatus": {}
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

<h3 id="resolvecase-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResolveCaseResponse](#schemaresolvecaseresponse)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|CaseIdNotFound|[CaseIdNotFound](#schemacaseidnotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AddAttachmentsToSetResponse">AddAttachmentsToSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaddattachmentstosetresponse"></a>
<a id="schema_AddAttachmentsToSetResponse"></a>
<a id="tocSaddattachmentstosetresponse"></a>
<a id="tocsaddattachmentstosetresponse"></a>

```json
{
  "attachmentSetId": {},
  "expiryTime": {}
}
```

The ID and expiry time of the attachment set returned by the <a>AddAttachmentsToSet</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachmentSetId|object|false|none|none|
|expiryTime|object|false|none|none|

<h2 id="tocS_AddAttachmentsToSetRequest">AddAttachmentsToSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddattachmentstosetrequest"></a>
<a id="schema_AddAttachmentsToSetRequest"></a>
<a id="tocSaddattachmentstosetrequest"></a>
<a id="tocsaddattachmentstosetrequest"></a>

```json
{
  "attachmentSetId": {},
  "attachments": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachmentSetId|object|false|none|none|
|attachments|object|true|none|none|

<h2 id="tocS_InternalServerError">InternalServerError</h2>
<!-- backwards compatibility -->
<a id="schemainternalservererror"></a>
<a id="schema_InternalServerError"></a>
<a id="tocSinternalservererror"></a>
<a id="tocsinternalservererror"></a>

```json
null
```

<h2 id="tocS_AttachmentSetIdNotFound">AttachmentSetIdNotFound</h2>
<!-- backwards compatibility -->
<a id="schemaattachmentsetidnotfound"></a>
<a id="schema_AttachmentSetIdNotFound"></a>
<a id="tocSattachmentsetidnotfound"></a>
<a id="tocsattachmentsetidnotfound"></a>

```json
null
```

<h2 id="tocS_AttachmentSetExpired">AttachmentSetExpired</h2>
<!-- backwards compatibility -->
<a id="schemaattachmentsetexpired"></a>
<a id="schema_AttachmentSetExpired"></a>
<a id="tocSattachmentsetexpired"></a>
<a id="tocsattachmentsetexpired"></a>

```json
null
```

<h2 id="tocS_AttachmentSetSizeLimitExceeded">AttachmentSetSizeLimitExceeded</h2>
<!-- backwards compatibility -->
<a id="schemaattachmentsetsizelimitexceeded"></a>
<a id="schema_AttachmentSetSizeLimitExceeded"></a>
<a id="tocSattachmentsetsizelimitexceeded"></a>
<a id="tocsattachmentsetsizelimitexceeded"></a>

```json
null
```

<h2 id="tocS_AttachmentLimitExceeded">AttachmentLimitExceeded</h2>
<!-- backwards compatibility -->
<a id="schemaattachmentlimitexceeded"></a>
<a id="schema_AttachmentLimitExceeded"></a>
<a id="tocSattachmentlimitexceeded"></a>
<a id="tocsattachmentlimitexceeded"></a>

```json
null
```

<h2 id="tocS_AddCommunicationToCaseResponse">AddCommunicationToCaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaddcommunicationtocaseresponse"></a>
<a id="schema_AddCommunicationToCaseResponse"></a>
<a id="tocSaddcommunicationtocaseresponse"></a>
<a id="tocsaddcommunicationtocaseresponse"></a>

```json
{
  "result": {}
}
```

The result of the <a>AddCommunicationToCase</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|

<h2 id="tocS_AddCommunicationToCaseRequest">AddCommunicationToCaseRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddcommunicationtocaserequest"></a>
<a id="schema_AddCommunicationToCaseRequest"></a>
<a id="tocSaddcommunicationtocaserequest"></a>
<a id="tocsaddcommunicationtocaserequest"></a>

```json
{
  "caseId": {},
  "communicationBody": {},
  "ccEmailAddresses": {},
  "attachmentSetId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caseId|object|false|none|none|
|communicationBody|object|true|none|none|
|ccEmailAddresses|object|false|none|none|
|attachmentSetId|object|false|none|none|

<h2 id="tocS_CaseIdNotFound">CaseIdNotFound</h2>
<!-- backwards compatibility -->
<a id="schemacaseidnotfound"></a>
<a id="schema_CaseIdNotFound"></a>
<a id="tocScaseidnotfound"></a>
<a id="tocscaseidnotfound"></a>

```json
null
```

<h2 id="tocS_CreateCaseResponse">CreateCaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatecaseresponse"></a>
<a id="schema_CreateCaseResponse"></a>
<a id="tocScreatecaseresponse"></a>
<a id="tocscreatecaseresponse"></a>

```json
{
  "caseId": {}
}
```

The support case ID returned by a successful completion of the <a>CreateCase</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caseId|object|false|none|none|

<h2 id="tocS_CreateCaseRequest">CreateCaseRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecaserequest"></a>
<a id="schema_CreateCaseRequest"></a>
<a id="tocScreatecaserequest"></a>
<a id="tocscreatecaserequest"></a>

```json
{
  "subject": {},
  "serviceCode": {},
  "severityCode": {},
  "categoryCode": {},
  "communicationBody": {},
  "ccEmailAddresses": {},
  "language": {},
  "issueType": {},
  "attachmentSetId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subject|object|true|none|none|
|serviceCode|object|false|none|none|
|severityCode|object|false|none|none|
|categoryCode|object|false|none|none|
|communicationBody|object|true|none|none|
|ccEmailAddresses|object|false|none|none|
|language|object|false|none|none|
|issueType|object|false|none|none|
|attachmentSetId|object|false|none|none|

<h2 id="tocS_CaseCreationLimitExceeded">CaseCreationLimitExceeded</h2>
<!-- backwards compatibility -->
<a id="schemacasecreationlimitexceeded"></a>
<a id="schema_CaseCreationLimitExceeded"></a>
<a id="tocScasecreationlimitexceeded"></a>
<a id="tocscasecreationlimitexceeded"></a>

```json
null
```

<h2 id="tocS_DescribeAttachmentResponse">DescribeAttachmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeattachmentresponse"></a>
<a id="schema_DescribeAttachmentResponse"></a>
<a id="tocSdescribeattachmentresponse"></a>
<a id="tocsdescribeattachmentresponse"></a>

```json
{
  "attachment": {
    "fileName": {},
    "data": {}
  }
}
```

The content and file name of the attachment returned by the <a>DescribeAttachment</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachment|object|false|none|none|

<h2 id="tocS_DescribeAttachmentRequest">DescribeAttachmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeattachmentrequest"></a>
<a id="schema_DescribeAttachmentRequest"></a>
<a id="tocSdescribeattachmentrequest"></a>
<a id="tocsdescribeattachmentrequest"></a>

```json
{
  "attachmentId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachmentId|object|true|none|none|

<h2 id="tocS_DescribeAttachmentLimitExceeded">DescribeAttachmentLimitExceeded</h2>
<!-- backwards compatibility -->
<a id="schemadescribeattachmentlimitexceeded"></a>
<a id="schema_DescribeAttachmentLimitExceeded"></a>
<a id="tocSdescribeattachmentlimitexceeded"></a>
<a id="tocsdescribeattachmentlimitexceeded"></a>

```json
null
```

<h2 id="tocS_AttachmentIdNotFound">AttachmentIdNotFound</h2>
<!-- backwards compatibility -->
<a id="schemaattachmentidnotfound"></a>
<a id="schema_AttachmentIdNotFound"></a>
<a id="tocSattachmentidnotfound"></a>
<a id="tocsattachmentidnotfound"></a>

```json
null
```

<h2 id="tocS_DescribeCasesResponse">DescribeCasesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribecasesresponse"></a>
<a id="schema_DescribeCasesResponse"></a>
<a id="tocSdescribecasesresponse"></a>
<a id="tocsdescribecasesresponse"></a>

```json
{
  "cases": {},
  "nextToken": {}
}
```

Returns an array of <a href="https://docs.aws.amazon.com/awssupport/latest/APIReference/API_CaseDetails.html">CaseDetails</a> objects and a <code>nextToken</code> that defines a point for pagination in the result set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cases|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_DescribeCasesRequest">DescribeCasesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribecasesrequest"></a>
<a id="schema_DescribeCasesRequest"></a>
<a id="tocSdescribecasesrequest"></a>
<a id="tocsdescribecasesrequest"></a>

```json
{
  "caseIdList": {},
  "displayId": {},
  "afterTime": {},
  "beforeTime": {},
  "includeResolvedCases": {},
  "nextToken": {},
  "maxResults": {},
  "language": {},
  "includeCommunications": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caseIdList|object|false|none|none|
|displayId|object|false|none|none|
|afterTime|object|false|none|none|
|beforeTime|object|false|none|none|
|includeResolvedCases|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|
|language|object|false|none|none|
|includeCommunications|object|false|none|none|

<h2 id="tocS_DescribeCommunicationsResponse">DescribeCommunicationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribecommunicationsresponse"></a>
<a id="schema_DescribeCommunicationsResponse"></a>
<a id="tocSdescribecommunicationsresponse"></a>
<a id="tocsdescribecommunicationsresponse"></a>

```json
{
  "communications": {},
  "nextToken": {}
}
```

The communications returned by the <a>DescribeCommunications</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|communications|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_DescribeCommunicationsRequest">DescribeCommunicationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribecommunicationsrequest"></a>
<a id="schema_DescribeCommunicationsRequest"></a>
<a id="tocSdescribecommunicationsrequest"></a>
<a id="tocsdescribecommunicationsrequest"></a>

```json
{
  "caseId": {},
  "beforeTime": {},
  "afterTime": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caseId|object|true|none|none|
|beforeTime|object|false|none|none|
|afterTime|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_DescribeServicesResponse">DescribeServicesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeservicesresponse"></a>
<a id="schema_DescribeServicesResponse"></a>
<a id="tocSdescribeservicesresponse"></a>
<a id="tocsdescribeservicesresponse"></a>

```json
{
  "services": {}
}
```

The list of Amazon Web Services services returned by the <a>DescribeServices</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|services|object|false|none|none|

<h2 id="tocS_DescribeServicesRequest">DescribeServicesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeservicesrequest"></a>
<a id="schema_DescribeServicesRequest"></a>
<a id="tocSdescribeservicesrequest"></a>
<a id="tocsdescribeservicesrequest"></a>

```json
{
  "serviceCodeList": {},
  "language": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceCodeList|object|false|none|none|
|language|object|false|none|none|

<h2 id="tocS_DescribeSeverityLevelsResponse">DescribeSeverityLevelsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeseveritylevelsresponse"></a>
<a id="schema_DescribeSeverityLevelsResponse"></a>
<a id="tocSdescribeseveritylevelsresponse"></a>
<a id="tocsdescribeseveritylevelsresponse"></a>

```json
{
  "severityLevels": {}
}
```

The list of severity levels returned by the <a>DescribeSeverityLevels</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|severityLevels|object|false|none|none|

<h2 id="tocS_DescribeSeverityLevelsRequest">DescribeSeverityLevelsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeseveritylevelsrequest"></a>
<a id="schema_DescribeSeverityLevelsRequest"></a>
<a id="tocSdescribeseveritylevelsrequest"></a>
<a id="tocsdescribeseveritylevelsrequest"></a>

```json
{
  "language": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|language|object|false|none|none|

<h2 id="tocS_DescribeTrustedAdvisorCheckRefreshStatusesResponse">DescribeTrustedAdvisorCheckRefreshStatusesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribetrustedadvisorcheckrefreshstatusesresponse"></a>
<a id="schema_DescribeTrustedAdvisorCheckRefreshStatusesResponse"></a>
<a id="tocSdescribetrustedadvisorcheckrefreshstatusesresponse"></a>
<a id="tocsdescribetrustedadvisorcheckrefreshstatusesresponse"></a>

```json
{
  "statuses": {}
}
```

The statuses of the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorCheckRefreshStatuses</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statuses|object|true|none|none|

<h2 id="tocS_DescribeTrustedAdvisorCheckRefreshStatusesRequest">DescribeTrustedAdvisorCheckRefreshStatusesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribetrustedadvisorcheckrefreshstatusesrequest"></a>
<a id="schema_DescribeTrustedAdvisorCheckRefreshStatusesRequest"></a>
<a id="tocSdescribetrustedadvisorcheckrefreshstatusesrequest"></a>
<a id="tocsdescribetrustedadvisorcheckrefreshstatusesrequest"></a>

```json
{
  "checkIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkIds|object|true|none|none|

<h2 id="tocS_DescribeTrustedAdvisorCheckResultResponse">DescribeTrustedAdvisorCheckResultResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribetrustedadvisorcheckresultresponse"></a>
<a id="schema_DescribeTrustedAdvisorCheckResultResponse"></a>
<a id="tocSdescribetrustedadvisorcheckresultresponse"></a>
<a id="tocsdescribetrustedadvisorcheckresultresponse"></a>

```json
{
  "result": {
    "checkId": {},
    "timestamp": {},
    "status": {},
    "resourcesSummary": {
      "resourcesProcessed": {},
      "resourcesFlagged": {},
      "resourcesIgnored": {},
      "resourcesSuppressed": {}
    },
    "categorySpecificSummary": {
      "costOptimizing": {
        "estimatedMonthlySavings": {},
        "estimatedPercentMonthlySavings": {}
      }
    },
    "flaggedResources": {}
  }
}
```

The result of the Trusted Advisor check returned by the <a>DescribeTrustedAdvisorCheckResult</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|

<h2 id="tocS_DescribeTrustedAdvisorCheckResultRequest">DescribeTrustedAdvisorCheckResultRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribetrustedadvisorcheckresultrequest"></a>
<a id="schema_DescribeTrustedAdvisorCheckResultRequest"></a>
<a id="tocSdescribetrustedadvisorcheckresultrequest"></a>
<a id="tocsdescribetrustedadvisorcheckresultrequest"></a>

```json
{
  "checkId": {},
  "language": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkId|object|true|none|none|
|language|object|false|none|none|

<h2 id="tocS_DescribeTrustedAdvisorCheckSummariesResponse">DescribeTrustedAdvisorCheckSummariesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribetrustedadvisorchecksummariesresponse"></a>
<a id="schema_DescribeTrustedAdvisorCheckSummariesResponse"></a>
<a id="tocSdescribetrustedadvisorchecksummariesresponse"></a>
<a id="tocsdescribetrustedadvisorchecksummariesresponse"></a>

```json
{
  "summaries": {}
}
```

The summaries of the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorCheckSummaries</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|summaries|object|true|none|none|

<h2 id="tocS_DescribeTrustedAdvisorCheckSummariesRequest">DescribeTrustedAdvisorCheckSummariesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribetrustedadvisorchecksummariesrequest"></a>
<a id="schema_DescribeTrustedAdvisorCheckSummariesRequest"></a>
<a id="tocSdescribetrustedadvisorchecksummariesrequest"></a>
<a id="tocsdescribetrustedadvisorchecksummariesrequest"></a>

```json
{
  "checkIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkIds|object|true|none|none|

<h2 id="tocS_DescribeTrustedAdvisorChecksResponse">DescribeTrustedAdvisorChecksResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribetrustedadvisorchecksresponse"></a>
<a id="schema_DescribeTrustedAdvisorChecksResponse"></a>
<a id="tocSdescribetrustedadvisorchecksresponse"></a>
<a id="tocsdescribetrustedadvisorchecksresponse"></a>

```json
{
  "checks": {}
}
```

Information about the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorChecks</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checks|object|true|none|none|

<h2 id="tocS_DescribeTrustedAdvisorChecksRequest">DescribeTrustedAdvisorChecksRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribetrustedadvisorchecksrequest"></a>
<a id="schema_DescribeTrustedAdvisorChecksRequest"></a>
<a id="tocSdescribetrustedadvisorchecksrequest"></a>
<a id="tocsdescribetrustedadvisorchecksrequest"></a>

```json
{
  "language": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|language|object|true|none|none|

<h2 id="tocS_RefreshTrustedAdvisorCheckResponse">RefreshTrustedAdvisorCheckResponse</h2>
<!-- backwards compatibility -->
<a id="schemarefreshtrustedadvisorcheckresponse"></a>
<a id="schema_RefreshTrustedAdvisorCheckResponse"></a>
<a id="tocSrefreshtrustedadvisorcheckresponse"></a>
<a id="tocsrefreshtrustedadvisorcheckresponse"></a>

```json
{
  "status": {
    "checkId": {},
    "status": {},
    "millisUntilNextRefreshable": {}
  }
}
```

The current refresh status of a Trusted Advisor check.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|true|none|none|

<h2 id="tocS_RefreshTrustedAdvisorCheckRequest">RefreshTrustedAdvisorCheckRequest</h2>
<!-- backwards compatibility -->
<a id="schemarefreshtrustedadvisorcheckrequest"></a>
<a id="schema_RefreshTrustedAdvisorCheckRequest"></a>
<a id="tocSrefreshtrustedadvisorcheckrequest"></a>
<a id="tocsrefreshtrustedadvisorcheckrequest"></a>

```json
{
  "checkId": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkId|object|true|none|none|

<h2 id="tocS_ResolveCaseResponse">ResolveCaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemaresolvecaseresponse"></a>
<a id="schema_ResolveCaseResponse"></a>
<a id="tocSresolvecaseresponse"></a>
<a id="tocsresolvecaseresponse"></a>

```json
{
  "initialCaseStatus": {},
  "finalCaseStatus": {}
}
```

The status of the case returned by the <a>ResolveCase</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|initialCaseStatus|object|false|none|none|
|finalCaseStatus|object|false|none|none|

<h2 id="tocS_ResolveCaseRequest">ResolveCaseRequest</h2>
<!-- backwards compatibility -->
<a id="schemaresolvecaserequest"></a>
<a id="schema_ResolveCaseRequest"></a>
<a id="tocSresolvecaserequest"></a>
<a id="tocsresolvecaserequest"></a>

```json
{
  "caseId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caseId|object|false|none|none|

<h2 id="tocS_AttachmentSetId">AttachmentSetId</h2>
<!-- backwards compatibility -->
<a id="schemaattachmentsetid"></a>
<a id="schema_AttachmentSetId"></a>
<a id="tocSattachmentsetid"></a>
<a id="tocsattachmentsetid"></a>

```json
"string"
```

<h2 id="tocS_Attachments">Attachments</h2>
<!-- backwards compatibility -->
<a id="schemaattachments"></a>
<a id="schema_Attachments"></a>
<a id="tocSattachments"></a>
<a id="tocsattachments"></a>

```json
[
  {
    "fileName": {},
    "data": {}
  }
]
```

<h2 id="tocS_ExpiryTime">ExpiryTime</h2>
<!-- backwards compatibility -->
<a id="schemaexpirytime"></a>
<a id="schema_ExpiryTime"></a>
<a id="tocSexpirytime"></a>
<a id="tocsexpirytime"></a>

```json
"string"
```

<h2 id="tocS_CaseId">CaseId</h2>
<!-- backwards compatibility -->
<a id="schemacaseid"></a>
<a id="schema_CaseId"></a>
<a id="tocScaseid"></a>
<a id="tocscaseid"></a>

```json
"string"
```

<h2 id="tocS_CommunicationBody">CommunicationBody</h2>
<!-- backwards compatibility -->
<a id="schemacommunicationbody"></a>
<a id="schema_CommunicationBody"></a>
<a id="tocScommunicationbody"></a>
<a id="tocscommunicationbody"></a>

```json
"string"
```

<h2 id="tocS_CcEmailAddressList">CcEmailAddressList</h2>
<!-- backwards compatibility -->
<a id="schemaccemailaddresslist"></a>
<a id="schema_CcEmailAddressList"></a>
<a id="tocSccemailaddresslist"></a>
<a id="tocsccemailaddresslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Result">Result</h2>
<!-- backwards compatibility -->
<a id="schemaresult"></a>
<a id="schema_Result"></a>
<a id="tocSresult"></a>
<a id="tocsresult"></a>

```json
true
```

<h2 id="tocS_AfterTime">AfterTime</h2>
<!-- backwards compatibility -->
<a id="schemaaftertime"></a>
<a id="schema_AfterTime"></a>
<a id="tocSaftertime"></a>
<a id="tocsaftertime"></a>

```json
"string"
```

<h2 id="tocS_FileName">FileName</h2>
<!-- backwards compatibility -->
<a id="schemafilename"></a>
<a id="schema_FileName"></a>
<a id="tocSfilename"></a>
<a id="tocsfilename"></a>

```json
"string"
```

<h2 id="tocS_Data">Data</h2>
<!-- backwards compatibility -->
<a id="schemadata"></a>
<a id="schema_Data"></a>
<a id="tocSdata"></a>
<a id="tocsdata"></a>

```json
"string"
```

<h2 id="tocS_Attachment">Attachment</h2>
<!-- backwards compatibility -->
<a id="schemaattachment"></a>
<a id="schema_Attachment"></a>
<a id="tocSattachment"></a>
<a id="tocsattachment"></a>

```json
{
  "fileName": {},
  "data": {}
}
```

An attachment to a case communication. The attachment consists of the file name and the content of the file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileName|object|false|none|none|
|data|object|false|none|none|

<h2 id="tocS_AttachmentId">AttachmentId</h2>
<!-- backwards compatibility -->
<a id="schemaattachmentid"></a>
<a id="schema_AttachmentId"></a>
<a id="tocSattachmentid"></a>
<a id="tocsattachmentid"></a>

```json
"string"
```

<h2 id="tocS_AttachmentDetails">AttachmentDetails</h2>
<!-- backwards compatibility -->
<a id="schemaattachmentdetails"></a>
<a id="schema_AttachmentDetails"></a>
<a id="tocSattachmentdetails"></a>
<a id="tocsattachmentdetails"></a>

```json
{
  "attachmentId": {},
  "fileName": {}
}
```

The file name and ID of an attachment to a case communication. You can use the ID to retrieve the attachment with the <a>DescribeAttachment</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachmentId|object|false|none|none|
|fileName|object|false|none|none|

<h2 id="tocS_AttachmentSet">AttachmentSet</h2>
<!-- backwards compatibility -->
<a id="schemaattachmentset"></a>
<a id="schema_AttachmentSet"></a>
<a id="tocSattachmentset"></a>
<a id="tocsattachmentset"></a>

```json
[
  {
    "attachmentId": {},
    "fileName": {}
  }
]
```

<h2 id="tocS_BeforeTime">BeforeTime</h2>
<!-- backwards compatibility -->
<a id="schemabeforetime"></a>
<a id="schema_BeforeTime"></a>
<a id="tocSbeforetime"></a>
<a id="tocsbeforetime"></a>

```json
"string"
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

<h2 id="tocS_DisplayId">DisplayId</h2>
<!-- backwards compatibility -->
<a id="schemadisplayid"></a>
<a id="schema_DisplayId"></a>
<a id="tocSdisplayid"></a>
<a id="tocsdisplayid"></a>

```json
"string"
```

<h2 id="tocS_Subject">Subject</h2>
<!-- backwards compatibility -->
<a id="schemasubject"></a>
<a id="schema_Subject"></a>
<a id="tocSsubject"></a>
<a id="tocssubject"></a>

```json
"string"
```

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
"string"
```

<h2 id="tocS_ServiceCode">ServiceCode</h2>
<!-- backwards compatibility -->
<a id="schemaservicecode"></a>
<a id="schema_ServiceCode"></a>
<a id="tocSservicecode"></a>
<a id="tocsservicecode"></a>

```json
"string"
```

<h2 id="tocS_CategoryCode">CategoryCode</h2>
<!-- backwards compatibility -->
<a id="schemacategorycode"></a>
<a id="schema_CategoryCode"></a>
<a id="tocScategorycode"></a>
<a id="tocscategorycode"></a>

```json
"string"
```

<h2 id="tocS_SeverityCode">SeverityCode</h2>
<!-- backwards compatibility -->
<a id="schemaseveritycode"></a>
<a id="schema_SeverityCode"></a>
<a id="tocSseveritycode"></a>
<a id="tocsseveritycode"></a>

```json
"string"
```

<h2 id="tocS_SubmittedBy">SubmittedBy</h2>
<!-- backwards compatibility -->
<a id="schemasubmittedby"></a>
<a id="schema_SubmittedBy"></a>
<a id="tocSsubmittedby"></a>
<a id="tocssubmittedby"></a>

```json
"string"
```

<h2 id="tocS_TimeCreated">TimeCreated</h2>
<!-- backwards compatibility -->
<a id="schematimecreated"></a>
<a id="schema_TimeCreated"></a>
<a id="tocStimecreated"></a>
<a id="tocstimecreated"></a>

```json
"string"
```

<h2 id="tocS_RecentCaseCommunications">RecentCaseCommunications</h2>
<!-- backwards compatibility -->
<a id="schemarecentcasecommunications"></a>
<a id="schema_RecentCaseCommunications"></a>
<a id="tocSrecentcasecommunications"></a>
<a id="tocsrecentcasecommunications"></a>

```json
{
  "communications": {},
  "nextToken": {}
}
```

The five most recent communications associated with the case.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|communications|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_Language">Language</h2>
<!-- backwards compatibility -->
<a id="schemalanguage"></a>
<a id="schema_Language"></a>
<a id="tocSlanguage"></a>
<a id="tocslanguage"></a>

```json
"string"
```

<h2 id="tocS_CaseDetails">CaseDetails</h2>
<!-- backwards compatibility -->
<a id="schemacasedetails"></a>
<a id="schema_CaseDetails"></a>
<a id="tocScasedetails"></a>
<a id="tocscasedetails"></a>

```json
{
  "caseId": {},
  "displayId": {},
  "subject": {},
  "status": {},
  "serviceCode": {},
  "categoryCode": {},
  "severityCode": {},
  "submittedBy": {},
  "timeCreated": {},
  "recentCommunications": {
    "communications": {},
    "nextToken": {}
  },
  "ccEmailAddresses": {},
  "language": {}
}
```

<p>A JSON-formatted object that contains the metadata for a support case. It is contained in the response from a <a>DescribeCases</a> request. <b>CaseDetails</b> contains the following fields:</p> <ul> <li> <p> <b>caseId</b> - The support case ID requested or returned in the call. The case ID is an alphanumeric string formatted as shown in this example: case-<i>12345678910-2013-c4c1d2bf33c5cf47</i>.</p> </li> <li> <p> <b>categoryCode</b> - The category of problem for the support case. Corresponds to the <code>CategoryCode</code> values returned by a call to <a>DescribeServices</a>.</p> </li> <li> <p> <b>displayId</b> - The identifier for the case on pages in the Amazon Web Services Support Center.</p> </li> <li> <p> <b>language</b> - The language in which Amazon Web Services Support handles the case. Amazon Web Services Support currently supports English ("en") and Japanese ("ja"). You must specify the ISO 639-1 code for the <code>language</code> parameter if you want support in that language.</p> </li> <li> <p> <b>nextToken</b> - A resumption point for pagination.</p> </li> <li> <p> <b>recentCommunications</b> - One or more <a>Communication</a> objects. Fields of these objects are <code>attachments</code>, <code>body</code>, <code>caseId</code>, <code>submittedBy</code>, and <code>timeCreated</code>.</p> </li> <li> <p> <b>serviceCode</b> - The identifier for the Amazon Web Services service that corresponds to the service code defined in the call to <a>DescribeServices</a>.</p> </li> <li> <p> <b>severityCode</b> - The severity code assigned to the case. Contains one of the values returned by the call to <a>DescribeSeverityLevels</a>. The possible values are: <code>low</code>, <code>normal</code>, <code>high</code>, <code>urgent</code>, and <code>critical</code>.</p> </li> <li> <p> <b>status</b> - The status of the case in the Amazon Web Services Support Center. Valid values:</p> <ul> <li> <p> <code>opened</code> </p> </li> <li> <p> <code>pending-customer-action</code> </p> </li> <li> <p> <code>reopened</code> </p> </li> <li> <p> <code>resolved</code> </p> </li> <li> <p> <code>unassigned</code> </p> </li> <li> <p> <code>work-in-progress</code> </p> </li> </ul> </li> <li> <p> <b>subject</b> - The subject line of the case.</p> </li> <li> <p> <b>submittedBy</b> - The email address of the account that submitted the case.</p> </li> <li> <p> <b>timeCreated</b> - The time the case was created, in ISO-8601 format.</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caseId|object|false|none|none|
|displayId|object|false|none|none|
|subject|object|false|none|none|
|status|object|false|none|none|
|serviceCode|object|false|none|none|
|categoryCode|object|false|none|none|
|severityCode|object|false|none|none|
|submittedBy|object|false|none|none|
|timeCreated|object|false|none|none|
|recentCommunications|object|false|none|none|
|ccEmailAddresses|object|false|none|none|
|language|object|false|none|none|

<h2 id="tocS_CaseIdList">CaseIdList</h2>
<!-- backwards compatibility -->
<a id="schemacaseidlist"></a>
<a id="schema_CaseIdList"></a>
<a id="tocScaseidlist"></a>
<a id="tocscaseidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_CaseList">CaseList</h2>
<!-- backwards compatibility -->
<a id="schemacaselist"></a>
<a id="schema_CaseList"></a>
<a id="tocScaselist"></a>
<a id="tocscaselist"></a>

```json
[
  {
    "caseId": {},
    "displayId": {},
    "subject": {},
    "status": {},
    "serviceCode": {},
    "categoryCode": {},
    "severityCode": {},
    "submittedBy": {},
    "timeCreated": {},
    "recentCommunications": {
      "communications": {},
      "nextToken": {}
    },
    "ccEmailAddresses": {},
    "language": {}
  }
]
```

<h2 id="tocS_CaseStatus">CaseStatus</h2>
<!-- backwards compatibility -->
<a id="schemacasestatus"></a>
<a id="schema_CaseStatus"></a>
<a id="tocScasestatus"></a>
<a id="tocscasestatus"></a>

```json
"string"
```

<h2 id="tocS_CategoryName">CategoryName</h2>
<!-- backwards compatibility -->
<a id="schemacategoryname"></a>
<a id="schema_CategoryName"></a>
<a id="tocScategoryname"></a>
<a id="tocscategoryname"></a>

```json
"string"
```

<h2 id="tocS_Category">Category</h2>
<!-- backwards compatibility -->
<a id="schemacategory"></a>
<a id="schema_Category"></a>
<a id="tocScategory"></a>
<a id="tocscategory"></a>

```json
{
  "code": {},
  "name": {}
}
```

A JSON-formatted name/value pair that represents the category name and category code of the problem, selected from the <a>DescribeServices</a> response for each Amazon Web Services service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|object|false|none|none|
|name|object|false|none|none|

<h2 id="tocS_CategoryList">CategoryList</h2>
<!-- backwards compatibility -->
<a id="schemacategorylist"></a>
<a id="schema_CategoryList"></a>
<a id="tocScategorylist"></a>
<a id="tocscategorylist"></a>

```json
[
  {
    "code": {},
    "name": {}
  }
]
```

<h2 id="tocS_CcEmailAddress">CcEmailAddress</h2>
<!-- backwards compatibility -->
<a id="schemaccemailaddress"></a>
<a id="schema_CcEmailAddress"></a>
<a id="tocSccemailaddress"></a>
<a id="tocsccemailaddress"></a>

```json
"string"
```

<h2 id="tocS_Communication">Communication</h2>
<!-- backwards compatibility -->
<a id="schemacommunication"></a>
<a id="schema_Communication"></a>
<a id="tocScommunication"></a>
<a id="tocscommunication"></a>

```json
{
  "caseId": {},
  "body": {},
  "submittedBy": {},
  "timeCreated": {},
  "attachmentSet": {}
}
```

A communication associated with a support case. The communication consists of the case ID, the message body, attachment information, the submitter of the communication, and the date and time of the communication.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caseId|object|false|none|none|
|body|object|false|none|none|
|submittedBy|object|false|none|none|
|timeCreated|object|false|none|none|
|attachmentSet|object|false|none|none|

<h2 id="tocS_CommunicationList">CommunicationList</h2>
<!-- backwards compatibility -->
<a id="schemacommunicationlist"></a>
<a id="schema_CommunicationList"></a>
<a id="tocScommunicationlist"></a>
<a id="tocscommunicationlist"></a>

```json
[
  {
    "caseId": {},
    "body": {},
    "submittedBy": {},
    "timeCreated": {},
    "attachmentSet": {}
  }
]
```

<h2 id="tocS_IssueType">IssueType</h2>
<!-- backwards compatibility -->
<a id="schemaissuetype"></a>
<a id="schema_IssueType"></a>
<a id="tocSissuetype"></a>
<a id="tocsissuetype"></a>

```json
"string"
```

<h2 id="tocS_IncludeResolvedCases">IncludeResolvedCases</h2>
<!-- backwards compatibility -->
<a id="schemaincluderesolvedcases"></a>
<a id="schema_IncludeResolvedCases"></a>
<a id="tocSincluderesolvedcases"></a>
<a id="tocsincluderesolvedcases"></a>

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

<h2 id="tocS_MaxResults">MaxResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxresults"></a>
<a id="schema_MaxResults"></a>
<a id="tocSmaxresults"></a>
<a id="tocsmaxresults"></a>

```json
10
```

<h2 id="tocS_IncludeCommunications">IncludeCommunications</h2>
<!-- backwards compatibility -->
<a id="schemaincludecommunications"></a>
<a id="schema_IncludeCommunications"></a>
<a id="tocSincludecommunications"></a>
<a id="tocsincludecommunications"></a>

```json
true
```

<h2 id="tocS_ServiceCodeList">ServiceCodeList</h2>
<!-- backwards compatibility -->
<a id="schemaservicecodelist"></a>
<a id="schema_ServiceCodeList"></a>
<a id="tocSservicecodelist"></a>
<a id="tocsservicecodelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ServiceList">ServiceList</h2>
<!-- backwards compatibility -->
<a id="schemaservicelist"></a>
<a id="schema_ServiceList"></a>
<a id="tocSservicelist"></a>
<a id="tocsservicelist"></a>

```json
[
  {
    "code": {},
    "name": {},
    "categories": {}
  }
]
```

<h2 id="tocS_SeverityLevelsList">SeverityLevelsList</h2>
<!-- backwards compatibility -->
<a id="schemaseveritylevelslist"></a>
<a id="schema_SeverityLevelsList"></a>
<a id="tocSseveritylevelslist"></a>
<a id="tocsseveritylevelslist"></a>

```json
[
  {
    "code": {},
    "name": {}
  }
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
  "string"
]
```

<h2 id="tocS_TrustedAdvisorCheckRefreshStatusList">TrustedAdvisorCheckRefreshStatusList</h2>
<!-- backwards compatibility -->
<a id="schematrustedadvisorcheckrefreshstatuslist"></a>
<a id="schema_TrustedAdvisorCheckRefreshStatusList"></a>
<a id="tocStrustedadvisorcheckrefreshstatuslist"></a>
<a id="tocstrustedadvisorcheckrefreshstatuslist"></a>

```json
[
  {
    "checkId": {},
    "status": {},
    "millisUntilNextRefreshable": {}
  }
]
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

<h2 id="tocS_TrustedAdvisorCheckResult">TrustedAdvisorCheckResult</h2>
<!-- backwards compatibility -->
<a id="schematrustedadvisorcheckresult"></a>
<a id="schema_TrustedAdvisorCheckResult"></a>
<a id="tocStrustedadvisorcheckresult"></a>
<a id="tocstrustedadvisorcheckresult"></a>

```json
{
  "checkId": {},
  "timestamp": {},
  "status": {},
  "resourcesSummary": {
    "resourcesProcessed": {},
    "resourcesFlagged": {},
    "resourcesIgnored": {},
    "resourcesSuppressed": {}
  },
  "categorySpecificSummary": {
    "costOptimizing": {
      "estimatedMonthlySavings": {},
      "estimatedPercentMonthlySavings": {}
    }
  },
  "flaggedResources": {}
}
```

The results of a Trusted Advisor check returned by <a>DescribeTrustedAdvisorCheckResult</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkId|object|true|none|none|
|timestamp|object|true|none|none|
|status|object|true|none|none|
|resourcesSummary|[TrustedAdvisorResourcesSummary](#schematrustedadvisorresourcessummary)|true|none|Details about Amazon Web Services resources that were analyzed in a call to Trusted Advisor <a>DescribeTrustedAdvisorCheckSummaries</a>.|
|categorySpecificSummary|object|true|none|none|
|flaggedResources|object|true|none|none|

<h2 id="tocS_TrustedAdvisorCheckSummaryList">TrustedAdvisorCheckSummaryList</h2>
<!-- backwards compatibility -->
<a id="schematrustedadvisorchecksummarylist"></a>
<a id="schema_TrustedAdvisorCheckSummaryList"></a>
<a id="tocStrustedadvisorchecksummarylist"></a>
<a id="tocstrustedadvisorchecksummarylist"></a>

```json
[
  {
    "checkId": {},
    "timestamp": {},
    "status": {},
    "hasFlaggedResources": {},
    "resourcesSummary": {
      "resourcesProcessed": {},
      "resourcesFlagged": {},
      "resourcesIgnored": {},
      "resourcesSuppressed": {}
    },
    "categorySpecificSummary": {
      "costOptimizing": {
        "estimatedMonthlySavings": {},
        "estimatedPercentMonthlySavings": {}
      }
    }
  }
]
```

<h2 id="tocS_TrustedAdvisorCheckList">TrustedAdvisorCheckList</h2>
<!-- backwards compatibility -->
<a id="schematrustedadvisorchecklist"></a>
<a id="schema_TrustedAdvisorCheckList"></a>
<a id="tocStrustedadvisorchecklist"></a>
<a id="tocstrustedadvisorchecklist"></a>

```json
[
  {
    "id": {},
    "name": {},
    "description": {},
    "category": {},
    "metadata": {}
  }
]
```

<h2 id="tocS_Double">Double</h2>
<!-- backwards compatibility -->
<a id="schemadouble"></a>
<a id="schema_Double"></a>
<a id="tocSdouble"></a>
<a id="tocsdouble"></a>

```json
0
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

<h2 id="tocS_TrustedAdvisorCheckRefreshStatus">TrustedAdvisorCheckRefreshStatus</h2>
<!-- backwards compatibility -->
<a id="schematrustedadvisorcheckrefreshstatus"></a>
<a id="schema_TrustedAdvisorCheckRefreshStatus"></a>
<a id="tocStrustedadvisorcheckrefreshstatus"></a>
<a id="tocstrustedadvisorcheckrefreshstatus"></a>

```json
{
  "checkId": {},
  "status": {},
  "millisUntilNextRefreshable": {}
}
```

The refresh status of a Trusted Advisor check.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkId|object|true|none|none|
|status|object|true|none|none|
|millisUntilNextRefreshable|object|true|none|none|

<h2 id="tocS_ServiceName">ServiceName</h2>
<!-- backwards compatibility -->
<a id="schemaservicename"></a>
<a id="schema_ServiceName"></a>
<a id="tocSservicename"></a>
<a id="tocsservicename"></a>

```json
"string"
```

<h2 id="tocS_Service">Service</h2>
<!-- backwards compatibility -->
<a id="schemaservice"></a>
<a id="schema_Service"></a>
<a id="tocSservice"></a>
<a id="tocsservice"></a>

```json
{
  "code": {},
  "name": {},
  "categories": {}
}
```

Information about an Amazon Web Services service returned by the <a>DescribeServices</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|object|false|none|none|
|name|object|false|none|none|
|categories|object|false|none|none|

<h2 id="tocS_SeverityLevelCode">SeverityLevelCode</h2>
<!-- backwards compatibility -->
<a id="schemaseveritylevelcode"></a>
<a id="schema_SeverityLevelCode"></a>
<a id="tocSseveritylevelcode"></a>
<a id="tocsseveritylevelcode"></a>

```json
"string"
```

<h2 id="tocS_SeverityLevelName">SeverityLevelName</h2>
<!-- backwards compatibility -->
<a id="schemaseveritylevelname"></a>
<a id="schema_SeverityLevelName"></a>
<a id="tocSseveritylevelname"></a>
<a id="tocsseveritylevelname"></a>

```json
"string"
```

<h2 id="tocS_SeverityLevel">SeverityLevel</h2>
<!-- backwards compatibility -->
<a id="schemaseveritylevel"></a>
<a id="schema_SeverityLevel"></a>
<a id="tocSseveritylevel"></a>
<a id="tocsseveritylevel"></a>

```json
{
  "code": {},
  "name": {}
}
```

A code and name pair that represents the severity level of a support case. The available values depend on the support plan for the account. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/case-management.html#choosing-severity">Choosing a severity</a> in the <i>Amazon Web Services Support User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|object|false|none|none|
|name|object|false|none|none|

<h2 id="tocS_TrustedAdvisorCostOptimizingSummary">TrustedAdvisorCostOptimizingSummary</h2>
<!-- backwards compatibility -->
<a id="schematrustedadvisorcostoptimizingsummary"></a>
<a id="schema_TrustedAdvisorCostOptimizingSummary"></a>
<a id="tocStrustedadvisorcostoptimizingsummary"></a>
<a id="tocstrustedadvisorcostoptimizingsummary"></a>

```json
{
  "estimatedMonthlySavings": {},
  "estimatedPercentMonthlySavings": {}
}
```

The estimated cost savings that might be realized if the recommended operations are taken.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|estimatedMonthlySavings|object|true|none|none|
|estimatedPercentMonthlySavings|object|true|none|none|

<h2 id="tocS_TrustedAdvisorCategorySpecificSummary">TrustedAdvisorCategorySpecificSummary</h2>
<!-- backwards compatibility -->
<a id="schematrustedadvisorcategoryspecificsummary"></a>
<a id="schema_TrustedAdvisorCategorySpecificSummary"></a>
<a id="tocStrustedadvisorcategoryspecificsummary"></a>
<a id="tocstrustedadvisorcategoryspecificsummary"></a>

```json
{
  "costOptimizing": {
    "estimatedMonthlySavings": {},
    "estimatedPercentMonthlySavings": {}
  }
}
```

The container for summary information that relates to the category of the Trusted Advisor check.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|costOptimizing|object|false|none|none|

<h2 id="tocS_TrustedAdvisorCheckDescription">TrustedAdvisorCheckDescription</h2>
<!-- backwards compatibility -->
<a id="schematrustedadvisorcheckdescription"></a>
<a id="schema_TrustedAdvisorCheckDescription"></a>
<a id="tocStrustedadvisorcheckdescription"></a>
<a id="tocstrustedadvisorcheckdescription"></a>

```json
{
  "id": {},
  "name": {},
  "description": {},
  "category": {},
  "metadata": {}
}
```

The description and metadata for a Trusted Advisor check.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|
|name|object|true|none|none|
|description|object|true|none|none|
|category|object|true|none|none|
|metadata|object|true|none|none|

<h2 id="tocS_TrustedAdvisorResourcesSummary">TrustedAdvisorResourcesSummary</h2>
<!-- backwards compatibility -->
<a id="schematrustedadvisorresourcessummary"></a>
<a id="schema_TrustedAdvisorResourcesSummary"></a>
<a id="tocStrustedadvisorresourcessummary"></a>
<a id="tocstrustedadvisorresourcessummary"></a>

```json
{
  "resourcesProcessed": {},
  "resourcesFlagged": {},
  "resourcesIgnored": {},
  "resourcesSuppressed": {}
}
```

Details about Amazon Web Services resources that were analyzed in a call to Trusted Advisor <a>DescribeTrustedAdvisorCheckSummaries</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourcesProcessed|object|true|none|none|
|resourcesFlagged|object|true|none|none|
|resourcesIgnored|object|true|none|none|
|resourcesSuppressed|object|true|none|none|

<h2 id="tocS_TrustedAdvisorResourceDetailList">TrustedAdvisorResourceDetailList</h2>
<!-- backwards compatibility -->
<a id="schematrustedadvisorresourcedetaillist"></a>
<a id="schema_TrustedAdvisorResourceDetailList"></a>
<a id="tocStrustedadvisorresourcedetaillist"></a>
<a id="tocstrustedadvisorresourcedetaillist"></a>

```json
[
  {
    "status": {},
    "region": {},
    "resourceId": {},
    "isSuppressed": {},
    "metadata": {}
  }
]
```

<h2 id="tocS_TrustedAdvisorCheckSummary">TrustedAdvisorCheckSummary</h2>
<!-- backwards compatibility -->
<a id="schematrustedadvisorchecksummary"></a>
<a id="schema_TrustedAdvisorCheckSummary"></a>
<a id="tocStrustedadvisorchecksummary"></a>
<a id="tocstrustedadvisorchecksummary"></a>

```json
{
  "checkId": {},
  "timestamp": {},
  "status": {},
  "hasFlaggedResources": {},
  "resourcesSummary": {
    "resourcesProcessed": {},
    "resourcesFlagged": {},
    "resourcesIgnored": {},
    "resourcesSuppressed": {}
  },
  "categorySpecificSummary": {
    "costOptimizing": {
      "estimatedMonthlySavings": {},
      "estimatedPercentMonthlySavings": {}
    }
  }
}
```

A summary of a Trusted Advisor check result, including the alert status, last refresh, and number of resources examined.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkId|object|true|none|none|
|timestamp|object|true|none|none|
|status|object|true|none|none|
|hasFlaggedResources|object|false|none|none|
|resourcesSummary|[TrustedAdvisorResourcesSummary](#schematrustedadvisorresourcessummary)|true|none|Details about Amazon Web Services resources that were analyzed in a call to Trusted Advisor <a>DescribeTrustedAdvisorCheckSummaries</a>.|
|categorySpecificSummary|object|true|none|none|

<h2 id="tocS_TrustedAdvisorResourceDetail">TrustedAdvisorResourceDetail</h2>
<!-- backwards compatibility -->
<a id="schematrustedadvisorresourcedetail"></a>
<a id="schema_TrustedAdvisorResourceDetail"></a>
<a id="tocStrustedadvisorresourcedetail"></a>
<a id="tocstrustedadvisorresourcedetail"></a>

```json
{
  "status": {},
  "region": {},
  "resourceId": {},
  "isSuppressed": {},
  "metadata": {}
}
```

Contains information about a resource identified by a Trusted Advisor check.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|true|none|none|
|region|object|false|none|none|
|resourceId|object|true|none|none|
|isSuppressed|object|false|none|none|
|metadata|object|true|none|none|
