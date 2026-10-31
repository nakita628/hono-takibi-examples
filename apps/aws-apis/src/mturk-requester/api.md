<h1 id="amazon-mechanical-turk">Amazon Mechanical Turk v2017-01-17</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Amazon Mechanical Turk API Reference</fullname>

Base URLs:

* <a href="http://mturk-requester.us-east-1.amazonaws.com">http://mturk-requester.us-east-1.amazonaws.com</a> - The Amazon MTurk multi-region endpoint

* <a href="https://mturk-requester.us-east-1.amazonaws.com">https://mturk-requester.us-east-1.amazonaws.com</a> - The Amazon MTurk multi-region endpoint

* <a href="http://mturk-requester.cn-north-1.amazonaws.com.cn">http://mturk-requester.cn-north-1.amazonaws.com.cn</a> - The Amazon MTurk endpoint for China (Beijing) and China (Ningxia)

* <a href="https://mturk-requester.cn-north-1.amazonaws.com.cn">https://mturk-requester.cn-north-1.amazonaws.com.cn</a> - The Amazon MTurk endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/mturk-requester/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-mechanical-turk-default">Default</h1>

## AcceptQualificationRequest

<a id="opIdAcceptQualificationRequest"></a>

> Code samples

```bash
curl 'https://mturk-requester.us-east-1.amazonaws.com/#X-Amz-Target=MTurkRequesterServiceV20170117.AcceptQualificationRequest' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MTurkRequesterServiceV20170117.AcceptQualificationRequest' \
  -d '{
    "QualificationRequestId": {},
    "IntegerValue": {}
  }'
```

`POST /#X-Amz-Target=MTurkRequesterServiceV20170117.AcceptQualificationRequest`

<p> The <code>AcceptQualificationRequest</code> operation approves a Worker's request for a Qualification. </p> <p> Only the owner of the Qualification type can grant a Qualification request for that type. </p> <p> A successful request for the <code>AcceptQualificationRequest</code> operation returns with no errors and an empty body. </p>

> Body parameter

```json
{
  "QualificationRequestId": {},
  "IntegerValue": {}
}
```

<h3 id="acceptqualificationrequest-parameters">Parameters</h3>

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
|body|body|[AcceptQualificationRequestRequest](#schemaacceptqualificationrequestrequest)|true|none|
|» QualificationRequestId|body|object|true|none|
|» IntegerValue|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MTurkRequesterServiceV20170117.AcceptQualificationRequest|

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

<h3 id="acceptqualificationrequest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AcceptQualificationRequestResponse](#schemaacceptqualificationrequestresponse)|
|480|480|ServiceFault|[ServiceFault](#schemaservicefault)|
|481|481|RequestError|[RequestError](#schemarequesterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ApproveAssignment

<a id="opIdApproveAssignment"></a>

> Code samples

```bash
curl 'https://mturk-requester.us-east-1.amazonaws.com/#X-Amz-Target=MTurkRequesterServiceV20170117.ApproveAssignment' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MTurkRequesterServiceV20170117.ApproveAssignment' \
  -d '{
    "AssignmentId": {},
    "RequesterFeedback": {},
    "OverrideRejection": {}
  }'
```

`POST /#X-Amz-Target=MTurkRequesterServiceV20170117.ApproveAssignment`

<p> The <code>ApproveAssignment</code> operation approves the results of a completed assignment. </p> <p> Approving an assignment initiates two payments from the Requester's Amazon.com account </p> <ul> <li> <p> The Worker who submitted the results is paid the reward specified in the HIT. </p> </li> <li> <p> Amazon Mechanical Turk fees are debited. </p> </li> </ul> <p> If the Requester's account does not have adequate funds for these payments, the call to ApproveAssignment returns an exception, and the approval is not processed. You can include an optional feedback message with the approval, which the Worker can see in the Status section of the web site. </p> <p> You can also call this operation for assignments that were previous rejected and approve them by explicitly overriding the previous rejection. This only works on rejected assignments that were submitted within the previous 30 days and only if the assignment's related HIT has not been deleted. </p>

> Body parameter

```json
{
  "AssignmentId": {},
  "RequesterFeedback": {},
  "OverrideRejection": {}
}
```

<h3 id="approveassignment-parameters">Parameters</h3>

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
|body|body|[ApproveAssignmentRequest](#schemaapproveassignmentrequest)|true|none|
|» AssignmentId|body|object|true|none|
|» RequesterFeedback|body|object|false|none|
|» OverrideRejection|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MTurkRequesterServiceV20170117.ApproveAssignment|

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

<h3 id="approveassignment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ApproveAssignmentResponse](#schemaapproveassignmentresponse)|
|480|480|ServiceFault|[ServiceFault](#schemaservicefault)|
|481|481|RequestError|[RequestError](#schemarequesterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateQualificationWithWorker

<a id="opIdAssociateQualificationWithWorker"></a>

> Code samples

```bash
curl 'https://mturk-requester.us-east-1.amazonaws.com/#X-Amz-Target=MTurkRequesterServiceV20170117.AssociateQualificationWithWorker' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MTurkRequesterServiceV20170117.AssociateQualificationWithWorker' \
  -d '{
    "QualificationTypeId": {},
    "WorkerId": {},
    "IntegerValue": {},
    "SendNotification": {}
  }'
```

`POST /#X-Amz-Target=MTurkRequesterServiceV20170117.AssociateQualificationWithWorker`

<p> The <code>AssociateQualificationWithWorker</code> operation gives a Worker a Qualification. <code>AssociateQualificationWithWorker</code> does not require that the Worker submit a Qualification request. It gives the Qualification directly to the Worker. </p> <p> You can only assign a Qualification of a Qualification type that you created (using the <code>CreateQualificationType</code> operation). </p> <note> <p> Note: <code>AssociateQualificationWithWorker</code> does not affect any pending Qualification requests for the Qualification by the Worker. If you assign a Qualification to a Worker, then later grant a Qualification request made by the Worker, the granting of the request may modify the Qualification score. To resolve a pending Qualification request without affecting the Qualification the Worker already has, reject the request with the <code>RejectQualificationRequest</code> operation. </p> </note>

> Body parameter

```json
{
  "QualificationTypeId": {},
  "WorkerId": {},
  "IntegerValue": {},
  "SendNotification": {}
}
```

<h3 id="associatequalificationwithworker-parameters">Parameters</h3>

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
|body|body|[AssociateQualificationWithWorkerRequest](#schemaassociatequalificationwithworkerrequest)|true|none|
|» QualificationTypeId|body|object|true|none|
|» WorkerId|body|object|true|none|
|» IntegerValue|body|object|false|none|
|» SendNotification|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MTurkRequesterServiceV20170117.AssociateQualificationWithWorker|

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

<h3 id="associatequalificationwithworker-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateQualificationWithWorkerResponse](#schemaassociatequalificationwithworkerresponse)|
|480|480|ServiceFault|[ServiceFault](#schemaservicefault)|
|481|481|RequestError|[RequestError](#schemarequesterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateAdditionalAssignmentsForHIT

<a id="opIdCreateAdditionalAssignmentsForHIT"></a>

> Code samples

```bash
curl 'https://mturk-requester.us-east-1.amazonaws.com/#X-Amz-Target=MTurkRequesterServiceV20170117.CreateAdditionalAssignmentsForHIT' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MTurkRequesterServiceV20170117.CreateAdditionalAssignmentsForHIT' \
  -d '{
    "HITId": {},
    "NumberOfAdditionalAssignments": {},
    "UniqueRequestToken": {}
  }'
```

`POST /#X-Amz-Target=MTurkRequesterServiceV20170117.CreateAdditionalAssignmentsForHIT`

<p> The <code>CreateAdditionalAssignmentsForHIT</code> operation increases the maximum number of assignments of an existing HIT. </p> <p> To extend the maximum number of assignments, specify the number of additional assignments.</p> <note> <ul> <li> <p>HITs created with fewer than 10 assignments cannot be extended to have 10 or more assignments. Attempting to add assignments in a way that brings the total number of assignments for a HIT from fewer than 10 assignments to 10 or more assignments will result in an <code>AWS.MechanicalTurk.InvalidMaximumAssignmentsIncrease</code> exception.</p> </li> <li> <p>HITs that were created before July 22, 2015 cannot be extended. Attempting to extend HITs that were created before July 22, 2015 will result in an <code>AWS.MechanicalTurk.HITTooOldForExtension</code> exception. </p> </li> </ul> </note>

> Body parameter

```json
{
  "HITId": {},
  "NumberOfAdditionalAssignments": {},
  "UniqueRequestToken": {}
}
```

<h3 id="createadditionalassignmentsforhit-parameters">Parameters</h3>

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
|body|body|[CreateAdditionalAssignmentsForHITRequest](#schemacreateadditionalassignmentsforhitrequest)|true|none|
|» HITId|body|object|true|none|
|» NumberOfAdditionalAssignments|body|object|true|none|
|» UniqueRequestToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MTurkRequesterServiceV20170117.CreateAdditionalAssignmentsForHIT|

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

<h3 id="createadditionalassignmentsforhit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateAdditionalAssignmentsForHITResponse](#schemacreateadditionalassignmentsforhitresponse)|
|480|480|ServiceFault|[ServiceFault](#schemaservicefault)|
|481|481|RequestError|[RequestError](#schemarequesterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateHIT

<a id="opIdCreateHIT"></a>

> Code samples

```bash
curl 'https://mturk-requester.us-east-1.amazonaws.com/#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHIT' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MTurkRequesterServiceV20170117.CreateHIT' \
  -d '{
    "MaxAssignments": {},
    "AutoApprovalDelayInSeconds": {},
    "LifetimeInSeconds": {},
    "AssignmentDurationInSeconds": {},
    "Reward": {},
    "Title": {},
    "Keywords": {},
    "Description": {},
    "Question": {},
    "RequesterAnnotation": {},
    "QualificationRequirements": {},
    "UniqueRequestToken": {},
    "AssignmentReviewPolicy": {
      "PolicyName": {},
      "Parameters": {}
    },
    "HITReviewPolicy": {
      "PolicyName": {},
      "Parameters": {}
    },
    "HITLayoutId": {},
    "HITLayoutParameters": {}
  }'
```

`POST /#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHIT`

<p>The <code>CreateHIT</code> operation creates a new Human Intelligence Task (HIT). The new HIT is made available for Workers to find and accept on the Amazon Mechanical Turk website. </p> <p> This operation allows you to specify a new HIT by passing in values for the properties of the HIT, such as its title, reward amount and number of assignments. When you pass these values to <code>CreateHIT</code>, a new HIT is created for you, with a new <code>HITTypeID</code>. The HITTypeID can be used to create additional HITs in the future without needing to specify common parameters such as the title, description and reward amount each time.</p> <p> An alternative way to create HITs is to first generate a HITTypeID using the <code>CreateHITType</code> operation and then call the <code>CreateHITWithHITType</code> operation. This is the recommended best practice for Requesters who are creating large numbers of HITs. </p> <p>CreateHIT also supports several ways to provide question data: by providing a value for the <code>Question</code> parameter that fully specifies the contents of the HIT, or by providing a <code>HitLayoutId</code> and associated <code>HitLayoutParameters</code>. </p> <note> <p> If a HIT is created with 10 or more maximum assignments, there is an additional fee. For more information, see <a href="https://requester.mturk.com/pricing">Amazon Mechanical Turk Pricing</a>.</p> </note>

> Body parameter

```json
{
  "MaxAssignments": {},
  "AutoApprovalDelayInSeconds": {},
  "LifetimeInSeconds": {},
  "AssignmentDurationInSeconds": {},
  "Reward": {},
  "Title": {},
  "Keywords": {},
  "Description": {},
  "Question": {},
  "RequesterAnnotation": {},
  "QualificationRequirements": {},
  "UniqueRequestToken": {},
  "AssignmentReviewPolicy": {
    "PolicyName": {},
    "Parameters": {}
  },
  "HITReviewPolicy": {
    "PolicyName": {},
    "Parameters": {}
  },
  "HITLayoutId": {},
  "HITLayoutParameters": {}
}
```

<h3 id="createhit-parameters">Parameters</h3>

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
|body|body|[CreateHITRequest](#schemacreatehitrequest)|true|none|
|» MaxAssignments|body|object|false|none|
|» AutoApprovalDelayInSeconds|body|object|false|none|
|» LifetimeInSeconds|body|object|true|none|
|» AssignmentDurationInSeconds|body|object|true|none|
|» Reward|body|object|true|none|
|» Title|body|object|true|none|
|» Keywords|body|object|false|none|
|» Description|body|object|true|none|
|» Question|body|object|false|none|
|» RequesterAnnotation|body|object|false|none|
|» QualificationRequirements|body|object|false|none|
|» UniqueRequestToken|body|object|false|none|
|» AssignmentReviewPolicy|body|object|false|none|
|» » PolicyName|body|object|true|none|
|» » Parameters|body|object|false|none|
|» HITReviewPolicy|body|object|false|none|
|» » PolicyName|body|object|true|none|
|» » Parameters|body|object|false|none|
|» HITLayoutId|body|object|false|none|
|» HITLayoutParameters|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MTurkRequesterServiceV20170117.CreateHIT|

> Example responses

> 200 Response

```json
{
  "HIT": {
    "HITId": {},
    "HITTypeId": {},
    "HITGroupId": {},
    "HITLayoutId": {},
    "CreationTime": {},
    "Title": {},
    "Description": {},
    "Question": {},
    "Keywords": {},
    "HITStatus": {},
    "MaxAssignments": {},
    "Reward": "string",
    "AutoApprovalDelayInSeconds": {},
    "Expiration": {},
    "AssignmentDurationInSeconds": {},
    "RequesterAnnotation": {},
    "QualificationRequirements": {},
    "HITReviewStatus": {},
    "NumberOfAssignmentsPending": {},
    "NumberOfAssignmentsAvailable": {},
    "NumberOfAssignmentsCompleted": {}
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

<h3 id="createhit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateHITResponse](#schemacreatehitresponse)|
|480|480|ServiceFault|[ServiceFault](#schemaservicefault)|
|481|481|RequestError|[RequestError](#schemarequesterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateHITType

<a id="opIdCreateHITType"></a>

> Code samples

```bash
curl 'https://mturk-requester.us-east-1.amazonaws.com/#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHITType' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MTurkRequesterServiceV20170117.CreateHITType' \
  -d '{
    "AutoApprovalDelayInSeconds": {},
    "AssignmentDurationInSeconds": {},
    "Reward": {},
    "Title": {},
    "Keywords": {},
    "Description": {},
    "QualificationRequirements": {}
  }'
```

`POST /#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHITType`

 The <code>CreateHITType</code> operation creates a new HIT type. This operation allows you to define a standard set of HIT properties to use when creating HITs. If you register a HIT type with values that match an existing HIT type, the HIT type ID of the existing type will be returned. 

> Body parameter

```json
{
  "AutoApprovalDelayInSeconds": {},
  "AssignmentDurationInSeconds": {},
  "Reward": {},
  "Title": {},
  "Keywords": {},
  "Description": {},
  "QualificationRequirements": {}
}
```

<h3 id="createhittype-parameters">Parameters</h3>

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
|body|body|[CreateHITTypeRequest](#schemacreatehittyperequest)|true|none|
|» AutoApprovalDelayInSeconds|body|object|false|none|
|» AssignmentDurationInSeconds|body|object|true|none|
|» Reward|body|object|true|none|
|» Title|body|object|true|none|
|» Keywords|body|object|false|none|
|» Description|body|object|true|none|
|» QualificationRequirements|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MTurkRequesterServiceV20170117.CreateHITType|

> Example responses

> 200 Response

```json
{
  "HITTypeId": {}
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

<h3 id="createhittype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateHITTypeResponse](#schemacreatehittyperesponse)|
|480|480|ServiceFault|[ServiceFault](#schemaservicefault)|
|481|481|RequestError|[RequestError](#schemarequesterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateHITWithHITType

<a id="opIdCreateHITWithHITType"></a>

> Code samples

```bash
curl 'https://mturk-requester.us-east-1.amazonaws.com/#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHITWithHITType' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MTurkRequesterServiceV20170117.CreateHITWithHITType' \
  -d '{
    "HITTypeId": {},
    "MaxAssignments": {},
    "LifetimeInSeconds": {},
    "Question": {},
    "RequesterAnnotation": {},
    "UniqueRequestToken": {},
    "AssignmentReviewPolicy": {
      "PolicyName": {},
      "Parameters": {}
    },
    "HITReviewPolicy": {
      "PolicyName": {},
      "Parameters": {}
    },
    "HITLayoutId": {},
    "HITLayoutParameters": {}
  }'
```

`POST /#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHITWithHITType`

<p> The <code>CreateHITWithHITType</code> operation creates a new Human Intelligence Task (HIT) using an existing HITTypeID generated by the <code>CreateHITType</code> operation. </p> <p> This is an alternative way to create HITs from the <code>CreateHIT</code> operation. This is the recommended best practice for Requesters who are creating large numbers of HITs. </p> <p>CreateHITWithHITType also supports several ways to provide question data: by providing a value for the <code>Question</code> parameter that fully specifies the contents of the HIT, or by providing a <code>HitLayoutId</code> and associated <code>HitLayoutParameters</code>. </p> <note> <p> If a HIT is created with 10 or more maximum assignments, there is an additional fee. For more information, see <a href="https://requester.mturk.com/pricing">Amazon Mechanical Turk Pricing</a>. </p> </note>

> Body parameter

```json
{
  "HITTypeId": {},
  "MaxAssignments": {},
  "LifetimeInSeconds": {},
  "Question": {},
  "RequesterAnnotation": {},
  "UniqueRequestToken": {},
  "AssignmentReviewPolicy": {
    "PolicyName": {},
    "Parameters": {}
  },
  "HITReviewPolicy": {
    "PolicyName": {},
    "Parameters": {}
  },
  "HITLayoutId": {},
  "HITLayoutParameters": {}
}
```

<h3 id="createhitwithhittype-parameters">Parameters</h3>

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
|body|body|[CreateHITWithHITTypeRequest](#schemacreatehitwithhittyperequest)|true|none|
|» HITTypeId|body|object|true|none|
|» MaxAssignments|body|object|false|none|
|» LifetimeInSeconds|body|object|true|none|
|» Question|body|object|false|none|
|» RequesterAnnotation|body|object|false|none|
|» UniqueRequestToken|body|object|false|none|
|» AssignmentReviewPolicy|body|object|false|none|
|» » PolicyName|body|object|true|none|
|» » Parameters|body|object|false|none|
|» HITReviewPolicy|body|object|false|none|
|» » PolicyName|body|object|true|none|
|» » Parameters|body|object|false|none|
|» HITLayoutId|body|object|false|none|
|» HITLayoutParameters|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MTurkRequesterServiceV20170117.CreateHITWithHITType|

> Example responses

> 200 Response

```json
{
  "HIT": {
    "HITId": {},
    "HITTypeId": {},
    "HITGroupId": {},
    "HITLayoutId": {},
    "CreationTime": {},
    "Title": {},
    "Description": {},
    "Question": {},
    "Keywords": {},
    "HITStatus": {},
    "MaxAssignments": {},
    "Reward": "string",
    "AutoApprovalDelayInSeconds": {},
    "Expiration": {},
    "AssignmentDurationInSeconds": {},
    "RequesterAnnotation": {},
    "QualificationRequirements": {},
    "HITReviewStatus": {},
    "NumberOfAssignmentsPending": {},
    "NumberOfAssignmentsAvailable": {},
    "NumberOfAssignmentsCompleted": {}
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

<h3 id="createhitwithhittype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateHITWithHITTypeResponse](#schemacreatehitwithhittyperesponse)|
|480|480|ServiceFault|[ServiceFault](#schemaservicefault)|
|481|481|RequestError|[RequestError](#schemarequesterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateQualificationType

<a id="opIdCreateQualificationType"></a>

> Code samples

```bash
curl 'https://mturk-requester.us-east-1.amazonaws.com/#X-Amz-Target=MTurkRequesterServiceV20170117.CreateQualificationType' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MTurkRequesterServiceV20170117.CreateQualificationType' \
  -d '{
    "Name": {},
    "Keywords": {},
    "Description": {},
    "QualificationTypeStatus": {},
    "RetryDelayInSeconds": {},
    "Test": {},
    "AnswerKey": {},
    "TestDurationInSeconds": {},
    "AutoGranted": {},
    "AutoGrantedValue": {}
  }'
```

`POST /#X-Amz-Target=MTurkRequesterServiceV20170117.CreateQualificationType`

 The <code>CreateQualificationType</code> operation creates a new Qualification type, which is represented by a <code>QualificationType</code> data structure. 

> Body parameter

```json
{
  "Name": {},
  "Keywords": {},
  "Description": {},
  "QualificationTypeStatus": {},
  "RetryDelayInSeconds": {},
  "Test": {},
  "AnswerKey": {},
  "TestDurationInSeconds": {},
  "AutoGranted": {},
  "AutoGrantedValue": {}
}
```

<h3 id="createqualificationtype-parameters">Parameters</h3>

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
|body|body|[CreateQualificationTypeRequest](#schemacreatequalificationtyperequest)|true|none|
|» Name|body|object|true|none|
|» Keywords|body|object|false|none|
|» Description|body|object|true|none|
|» QualificationTypeStatus|body|object|true|none|
|» RetryDelayInSeconds|body|object|false|none|
|» Test|body|object|false|none|
|» AnswerKey|body|object|false|none|
|» TestDurationInSeconds|body|object|false|none|
|» AutoGranted|body|object|false|none|
|» AutoGrantedValue|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MTurkRequesterServiceV20170117.CreateQualificationType|

> Example responses

> 200 Response

```json
{
  "QualificationType": {
    "QualificationTypeId": {},
    "CreationTime": {},
    "Name": {},
    "Description": {},
    "Keywords": {},
    "QualificationTypeStatus": {},
    "Test": {},
    "TestDurationInSeconds": {},
    "AnswerKey": {},
    "RetryDelayInSeconds": {},
    "IsRequestable": {},
    "AutoGranted": {},
    "AutoGrantedValue": {}
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

<h3 id="createqualificationtype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateQualificationTypeResponse](#schemacreatequalificationtyperesponse)|
|480|480|ServiceFault|[ServiceFault](#schemaservicefault)|
|481|481|RequestError|[RequestError](#schemarequesterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateWorkerBlock

<a id="opIdCreateWorkerBlock"></a>

> Code samples

```bash
curl 'https://mturk-requester.us-east-1.amazonaws.com/#X-Amz-Target=MTurkRequesterServiceV20170117.CreateWorkerBlock' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MTurkRequesterServiceV20170117.CreateWorkerBlock' \
  -d '{
    "WorkerId": {},
    "Reason": {}
  }'
```

`POST /#X-Amz-Target=MTurkRequesterServiceV20170117.CreateWorkerBlock`

The <code>CreateWorkerBlock</code> operation allows you to prevent a Worker from working on your HITs. For example, you can block a Worker who is producing poor quality work. You can block up to 100,000 Workers.

> Body parameter

```json
{
  "WorkerId": {},
  "Reason": {}
}
```

<h3 id="createworkerblock-parameters">Parameters</h3>

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
|body|body|[CreateWorkerBlockRequest](#schemacreateworkerblockrequest)|true|none|
|» WorkerId|body|object|true|none|
|» Reason|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MTurkRequesterServiceV20170117.CreateWorkerBlock|

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

<h3 id="createworkerblock-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateWorkerBlockResponse](#schemacreateworkerblockresponse)|
|480|480|ServiceFault|[ServiceFault](#schemaservicefault)|
|481|481|RequestError|[RequestError](#schemarequesterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteHIT

<a id="opIdDeleteHIT"></a>

> Code samples

```bash
curl 'https://mturk-requester.us-east-1.amazonaws.com/#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteHIT' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MTurkRequesterServiceV20170117.DeleteHIT' \
  -d '{
    "HITId": {}
  }'
```

`POST /#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteHIT`

<p> The <code>DeleteHIT</code> operation is used to delete HIT that is no longer needed. Only the Requester who created the HIT can delete it. </p> <p> You can only dispose of HITs that are in the <code>Reviewable</code> state, with all of their submitted assignments already either approved or rejected. If you call the DeleteHIT operation on a HIT that is not in the <code>Reviewable</code> state (for example, that has not expired, or still has active assignments), or on a HIT that is Reviewable but without all of its submitted assignments already approved or rejected, the service will return an error. </p> <note> <ul> <li> <p> HITs are automatically disposed of after 120 days. </p> </li> <li> <p> After you dispose of a HIT, you can no longer approve the HIT's rejected assignments. </p> </li> <li> <p> Disposed HITs are not returned in results for the ListHITs operation. </p> </li> <li> <p> Disposing HITs can improve the performance of operations such as ListReviewableHITs and ListHITs. </p> </li> </ul> </note>

> Body parameter

```json
{
  "HITId": {}
}
```

<h3 id="deletehit-parameters">Parameters</h3>

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
|body|body|[DeleteHITRequest](#schemadeletehitrequest)|true|none|
|» HITId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MTurkRequesterServiceV20170117.DeleteHIT|

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

<h3 id="deletehit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteHITResponse](#schemadeletehitresponse)|
|480|480|ServiceFault|[ServiceFault](#schemaservicefault)|
|481|481|RequestError|[RequestError](#schemarequesterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteQualificationType

<a id="opIdDeleteQualificationType"></a>

> Code samples

```bash
curl 'https://mturk-requester.us-east-1.amazonaws.com/#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteQualificationType' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MTurkRequesterServiceV20170117.DeleteQualificationType' \
  -d '{
    "QualificationTypeId": {}
  }'
```

`POST /#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteQualificationType`

<p> The <code>DeleteQualificationType</code> deletes a Qualification type and deletes any HIT types that are associated with the Qualification type. </p> <p>This operation does not revoke Qualifications already assigned to Workers because the Qualifications might be needed for active HITs. If there are any pending requests for the Qualification type, Amazon Mechanical Turk rejects those requests. After you delete a Qualification type, you can no longer use it to create HITs or HIT types.</p> <note> <p>DeleteQualificationType must wait for all the HITs that use the deleted Qualification type to be deleted before completing. It may take up to 48 hours before DeleteQualificationType completes and the unique name of the Qualification type is available for reuse with CreateQualificationType.</p> </note>

> Body parameter

```json
{
  "QualificationTypeId": {}
}
```

<h3 id="deletequalificationtype-parameters">Parameters</h3>

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
|body|body|[DeleteQualificationTypeRequest](#schemadeletequalificationtyperequest)|true|none|
|» QualificationTypeId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MTurkRequesterServiceV20170117.DeleteQualificationType|

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

<h3 id="deletequalificationtype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteQualificationTypeResponse](#schemadeletequalificationtyperesponse)|
|480|480|ServiceFault|[ServiceFault](#schemaservicefault)|
|481|481|RequestError|[RequestError](#schemarequesterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteWorkerBlock

<a id="opIdDeleteWorkerBlock"></a>

> Code samples

```bash
curl 'https://mturk-requester.us-east-1.amazonaws.com/#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteWorkerBlock' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MTurkRequesterServiceV20170117.DeleteWorkerBlock' \
  -d '{
    "WorkerId": {},
    "Reason": {}
  }'
```

`POST /#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteWorkerBlock`

The <code>DeleteWorkerBlock</code> operation allows you to reinstate a blocked Worker to work on your HITs. This operation reverses the effects of the CreateWorkerBlock operation. You need the Worker ID to use this operation. If the Worker ID is missing or invalid, this operation fails and returns the message “WorkerId is invalid.” If the specified Worker is not blocked, this operation returns successfully.

> Body parameter

```json
{
  "WorkerId": {},
  "Reason": {}
}
```

<h3 id="deleteworkerblock-parameters">Parameters</h3>

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
|body|body|[DeleteWorkerBlockRequest](#schemadeleteworkerblockrequest)|true|none|
|» WorkerId|body|object|true|none|
|» Reason|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MTurkRequesterServiceV20170117.DeleteWorkerBlock|

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

<h3 id="deleteworkerblock-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteWorkerBlockResponse](#schemadeleteworkerblockresponse)|
|480|480|ServiceFault|[ServiceFault](#schemaservicefault)|
|481|481|RequestError|[RequestError](#schemarequesterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateQualificationFromWorker

<a id="opIdDisassociateQualificationFromWorker"></a>

> Code samples

```bash
curl 'https://mturk-requester.us-east-1.amazonaws.com/#X-Amz-Target=MTurkRequesterServiceV20170117.DisassociateQualificationFromWorker' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MTurkRequesterServiceV20170117.DisassociateQualificationFromWorker' \
  -d '{
    "WorkerId": {},
    "QualificationTypeId": {},
    "Reason": {}
  }'
```

`POST /#X-Amz-Target=MTurkRequesterServiceV20170117.DisassociateQualificationFromWorker`

<p> The <code>DisassociateQualificationFromWorker</code> revokes a previously granted Qualification from a user. </p> <p> You can provide a text message explaining why the Qualification was revoked. The user who had the Qualification can see this message. </p>

> Body parameter

```json
{
  "WorkerId": {},
  "QualificationTypeId": {},
  "Reason": {}
}
```

<h3 id="disassociatequalificationfromworker-parameters">Parameters</h3>

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
|body|body|[DisassociateQualificationFromWorkerRequest](#schemadisassociatequalificationfromworkerrequest)|true|none|
|» WorkerId|body|object|true|none|
|» QualificationTypeId|body|object|true|none|
|» Reason|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MTurkRequesterServiceV20170117.DisassociateQualificationFromWorker|

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

<h3 id="disassociatequalificationfromworker-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateQualificationFromWorkerResponse](#schemadisassociatequalificationfromworkerresponse)|
|480|480|ServiceFault|[ServiceFault](#schemaservicefault)|
|481|481|RequestError|[RequestError](#schemarequesterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAccountBalance

<a id="opIdGetAccountBalance"></a>

> Code samples

```bash
curl 'https://mturk-requester.us-east-1.amazonaws.com/#X-Amz-Target=MTurkRequesterServiceV20170117.GetAccountBalance' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MTurkRequesterServiceV20170117.GetAccountBalance' \
  -d '{}'
```

`POST /#X-Amz-Target=MTurkRequesterServiceV20170117.GetAccountBalance`

The <code>GetAccountBalance</code> operation retrieves the Prepaid HITs balance in your Amazon Mechanical Turk account if you are a Prepaid Requester. Alternatively, this operation will retrieve the remaining available AWS Billing usage if you have enabled AWS Billing. Note: If you have enabled AWS Billing and still have a remaining Prepaid HITs balance, this balance can be viewed on the My Account page in the Requester console.

> Body parameter

```json
{}
```

<h3 id="getaccountbalance-parameters">Parameters</h3>

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
|body|body|[GetAccountBalanceRequest](#schemagetaccountbalancerequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MTurkRequesterServiceV20170117.GetAccountBalance|

> Example responses

> 200 Response

```json
{
  "AvailableBalance": "string",
  "OnHoldBalance": "string"
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

<h3 id="getaccountbalance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAccountBalanceResponse](#schemagetaccountbalanceresponse)|
|480|480|ServiceFault|[ServiceFault](#schemaservicefault)|
|481|481|RequestError|[RequestError](#schemarequesterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAssignment

<a id="opIdGetAssignment"></a>

> Code samples

```bash
curl 'https://mturk-requester.us-east-1.amazonaws.com/#X-Amz-Target=MTurkRequesterServiceV20170117.GetAssignment' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MTurkRequesterServiceV20170117.GetAssignment' \
  -d '{
    "AssignmentId": {}
  }'
```

`POST /#X-Amz-Target=MTurkRequesterServiceV20170117.GetAssignment`

 The <code>GetAssignment</code> operation retrieves the details of the specified Assignment. 

> Body parameter

```json
{
  "AssignmentId": {}
}
```

<h3 id="getassignment-parameters">Parameters</h3>

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
|body|body|[GetAssignmentRequest](#schemagetassignmentrequest)|true|none|
|» AssignmentId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MTurkRequesterServiceV20170117.GetAssignment|

> Example responses

> 200 Response

```json
{
  "Assignment": {
    "AssignmentId": {},
    "WorkerId": {},
    "HITId": {},
    "AssignmentStatus": {},
    "AutoApprovalTime": {},
    "AcceptTime": {},
    "SubmitTime": {},
    "ApprovalTime": {},
    "RejectionTime": {},
    "Deadline": {},
    "Answer": {},
    "RequesterFeedback": {}
  },
  "HIT": {
    "HITId": {},
    "HITTypeId": {},
    "HITGroupId": {},
    "HITLayoutId": {},
    "CreationTime": {},
    "Title": {},
    "Description": {},
    "Question": {},
    "Keywords": {},
    "HITStatus": {},
    "MaxAssignments": {},
    "Reward": "string",
    "AutoApprovalDelayInSeconds": {},
    "Expiration": {},
    "AssignmentDurationInSeconds": {},
    "RequesterAnnotation": {},
    "QualificationRequirements": {},
    "HITReviewStatus": {},
    "NumberOfAssignmentsPending": {},
    "NumberOfAssignmentsAvailable": {},
    "NumberOfAssignmentsCompleted": {}
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

<h3 id="getassignment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAssignmentResponse](#schemagetassignmentresponse)|
|480|480|ServiceFault|[ServiceFault](#schemaservicefault)|
|481|481|RequestError|[RequestError](#schemarequesterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetFileUploadURL

<a id="opIdGetFileUploadURL"></a>

> Code samples

```bash
curl 'https://mturk-requester.us-east-1.amazonaws.com/#X-Amz-Target=MTurkRequesterServiceV20170117.GetFileUploadURL' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MTurkRequesterServiceV20170117.GetFileUploadURL' \
  -d '{
    "AssignmentId": {},
    "QuestionIdentifier": {}
  }'
```

`POST /#X-Amz-Target=MTurkRequesterServiceV20170117.GetFileUploadURL`

 The <code>GetFileUploadURL</code> operation generates and returns a temporary URL. You use the temporary URL to retrieve a file uploaded by a Worker as an answer to a FileUploadAnswer question for a HIT. The temporary URL is generated the instant the GetFileUploadURL operation is called, and is valid for 60 seconds. You can get a temporary file upload URL any time until the HIT is disposed. After the HIT is disposed, any uploaded files are deleted, and cannot be retrieved. Pending Deprecation on December 12, 2017. The Answer Specification structure will no longer support the <code>FileUploadAnswer</code> element to be used for the QuestionForm data structure. Instead, we recommend that Requesters who want to create HITs asking Workers to upload files to use Amazon S3. 

> Body parameter

```json
{
  "AssignmentId": {},
  "QuestionIdentifier": {}
}
```

<h3 id="getfileuploadurl-parameters">Parameters</h3>

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
|body|body|[GetFileUploadURLRequest](#schemagetfileuploadurlrequest)|true|none|
|» AssignmentId|body|object|true|none|
|» QuestionIdentifier|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MTurkRequesterServiceV20170117.GetFileUploadURL|

> Example responses

> 200 Response

```json
{
  "FileUploadURL": {}
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

<h3 id="getfileuploadurl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetFileUploadURLResponse](#schemagetfileuploadurlresponse)|
|480|480|ServiceFault|[ServiceFault](#schemaservicefault)|
|481|481|RequestError|[RequestError](#schemarequesterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetHIT

<a id="opIdGetHIT"></a>

> Code samples

```bash
curl 'https://mturk-requester.us-east-1.amazonaws.com/#X-Amz-Target=MTurkRequesterServiceV20170117.GetHIT' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MTurkRequesterServiceV20170117.GetHIT' \
  -d '{
    "HITId": {}
  }'
```

`POST /#X-Amz-Target=MTurkRequesterServiceV20170117.GetHIT`

 The <code>GetHIT</code> operation retrieves the details of the specified HIT. 

> Body parameter

```json
{
  "HITId": {}
}
```

<h3 id="gethit-parameters">Parameters</h3>

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
|body|body|[GetHITRequest](#schemagethitrequest)|true|none|
|» HITId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MTurkRequesterServiceV20170117.GetHIT|

> Example responses

> 200 Response

```json
{
  "HIT": {
    "HITId": {},
    "HITTypeId": {},
    "HITGroupId": {},
    "HITLayoutId": {},
    "CreationTime": {},
    "Title": {},
    "Description": {},
    "Question": {},
    "Keywords": {},
    "HITStatus": {},
    "MaxAssignments": {},
    "Reward": "string",
    "AutoApprovalDelayInSeconds": {},
    "Expiration": {},
    "AssignmentDurationInSeconds": {},
    "RequesterAnnotation": {},
    "QualificationRequirements": {},
    "HITReviewStatus": {},
    "NumberOfAssignmentsPending": {},
    "NumberOfAssignmentsAvailable": {},
    "NumberOfAssignmentsCompleted": {}
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

<h3 id="gethit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetHITResponse](#schemagethitresponse)|
|480|480|ServiceFault|[ServiceFault](#schemaservicefault)|
|481|481|RequestError|[RequestError](#schemarequesterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetQualificationScore

<a id="opIdGetQualificationScore"></a>

> Code samples

```bash
curl 'https://mturk-requester.us-east-1.amazonaws.com/#X-Amz-Target=MTurkRequesterServiceV20170117.GetQualificationScore' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MTurkRequesterServiceV20170117.GetQualificationScore' \
  -d '{
    "QualificationTypeId": {},
    "WorkerId": {}
  }'
```

`POST /#X-Amz-Target=MTurkRequesterServiceV20170117.GetQualificationScore`

<p> The <code>GetQualificationScore</code> operation returns the value of a Worker's Qualification for a given Qualification type. </p> <p> To get a Worker's Qualification, you must know the Worker's ID. The Worker's ID is included in the assignment data returned by the <code>ListAssignmentsForHIT</code> operation. </p> <p>Only the owner of a Qualification type can query the value of a Worker's Qualification of that type.</p>

> Body parameter

```json
{
  "QualificationTypeId": {},
  "WorkerId": {}
}
```

<h3 id="getqualificationscore-parameters">Parameters</h3>

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
|body|body|[GetQualificationScoreRequest](#schemagetqualificationscorerequest)|true|none|
|» QualificationTypeId|body|object|true|none|
|» WorkerId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MTurkRequesterServiceV20170117.GetQualificationScore|

> Example responses

> 200 Response

```json
{
  "Qualification": {
    "QualificationTypeId": {},
    "WorkerId": {},
    "GrantTime": {},
    "IntegerValue": {},
    "LocaleValue": {
      "Country": {},
      "Subdivision": {}
    },
    "Status": {}
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

<h3 id="getqualificationscore-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetQualificationScoreResponse](#schemagetqualificationscoreresponse)|
|480|480|ServiceFault|[ServiceFault](#schemaservicefault)|
|481|481|RequestError|[RequestError](#schemarequesterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetQualificationType

<a id="opIdGetQualificationType"></a>

> Code samples

```bash
curl 'https://mturk-requester.us-east-1.amazonaws.com/#X-Amz-Target=MTurkRequesterServiceV20170117.GetQualificationType' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MTurkRequesterServiceV20170117.GetQualificationType' \
  -d '{
    "QualificationTypeId": {}
  }'
```

`POST /#X-Amz-Target=MTurkRequesterServiceV20170117.GetQualificationType`

 The <code>GetQualificationType</code>operation retrieves information about a Qualification type using its ID. 

> Body parameter

```json
{
  "QualificationTypeId": {}
}
```

<h3 id="getqualificationtype-parameters">Parameters</h3>

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
|body|body|[GetQualificationTypeRequest](#schemagetqualificationtyperequest)|true|none|
|» QualificationTypeId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MTurkRequesterServiceV20170117.GetQualificationType|

> Example responses

> 200 Response

```json
{
  "QualificationType": {
    "QualificationTypeId": {},
    "CreationTime": {},
    "Name": {},
    "Description": {},
    "Keywords": {},
    "QualificationTypeStatus": {},
    "Test": {},
    "TestDurationInSeconds": {},
    "AnswerKey": {},
    "RetryDelayInSeconds": {},
    "IsRequestable": {},
    "AutoGranted": {},
    "AutoGrantedValue": {}
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

<h3 id="getqualificationtype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetQualificationTypeResponse](#schemagetqualificationtyperesponse)|
|480|480|ServiceFault|[ServiceFault](#schemaservicefault)|
|481|481|RequestError|[RequestError](#schemarequesterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAssignmentsForHIT

<a id="opIdListAssignmentsForHIT"></a>

> Code samples

```bash
curl 'https://mturk-requester.us-east-1.amazonaws.com/#X-Amz-Target=MTurkRequesterServiceV20170117.ListAssignmentsForHIT' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MTurkRequesterServiceV20170117.ListAssignmentsForHIT' \
  -d '{
    "HITId": {},
    "NextToken": {},
    "MaxResults": 1,
    "AssignmentStatuses": {}
  }'
```

`POST /#X-Amz-Target=MTurkRequesterServiceV20170117.ListAssignmentsForHIT`

<p> The <code>ListAssignmentsForHIT</code> operation retrieves completed assignments for a HIT. You can use this operation to retrieve the results for a HIT. </p> <p> You can get assignments for a HIT at any time, even if the HIT is not yet Reviewable. If a HIT requested multiple assignments, and has received some results but has not yet become Reviewable, you can still retrieve the partial results with this operation. </p> <p> Use the AssignmentStatus parameter to control which set of assignments for a HIT are returned. The ListAssignmentsForHIT operation can return submitted assignments awaiting approval, or it can return assignments that have already been approved or rejected. You can set AssignmentStatus=Approved,Rejected to get assignments that have already been approved and rejected together in one result set. </p> <p> Only the Requester who created the HIT can retrieve the assignments for that HIT. </p> <p> Results are sorted and divided into numbered pages and the operation returns a single page of results. You can use the parameters of the operation to control sorting and pagination. </p>

> Body parameter

```json
{
  "HITId": {},
  "NextToken": {},
  "MaxResults": 1,
  "AssignmentStatuses": {}
}
```

<h3 id="listassignmentsforhit-parameters">Parameters</h3>

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
|body|body|[ListAssignmentsForHITRequest](#schemalistassignmentsforhitrequest)|true|none|
|» HITId|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|[ResultSize](#schemaresultsize)|false|none|
|» AssignmentStatuses|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MTurkRequesterServiceV20170117.ListAssignmentsForHIT|

> Example responses

> 200 Response

```json
{
  "NextToken": "string",
  "NumResults": {},
  "Assignments": {}
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

<h3 id="listassignmentsforhit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAssignmentsForHITResponse](#schemalistassignmentsforhitresponse)|
|480|480|ServiceFault|[ServiceFault](#schemaservicefault)|
|481|481|RequestError|[RequestError](#schemarequesterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListBonusPayments

<a id="opIdListBonusPayments"></a>

> Code samples

```bash
curl 'https://mturk-requester.us-east-1.amazonaws.com/#X-Amz-Target=MTurkRequesterServiceV20170117.ListBonusPayments' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MTurkRequesterServiceV20170117.ListBonusPayments' \
  -d '{
    "HITId": {},
    "AssignmentId": {},
    "NextToken": {},
    "MaxResults": 1
  }'
```

`POST /#X-Amz-Target=MTurkRequesterServiceV20170117.ListBonusPayments`

 The <code>ListBonusPayments</code> operation retrieves the amounts of bonuses you have paid to Workers for a given HIT or assignment. 

> Body parameter

```json
{
  "HITId": {},
  "AssignmentId": {},
  "NextToken": {},
  "MaxResults": 1
}
```

<h3 id="listbonuspayments-parameters">Parameters</h3>

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
|body|body|[ListBonusPaymentsRequest](#schemalistbonuspaymentsrequest)|true|none|
|» HITId|body|object|false|none|
|» AssignmentId|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|[ResultSize](#schemaresultsize)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MTurkRequesterServiceV20170117.ListBonusPayments|

> Example responses

> 200 Response

```json
{
  "NumResults": {},
  "NextToken": "string",
  "BonusPayments": {}
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

<h3 id="listbonuspayments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListBonusPaymentsResponse](#schemalistbonuspaymentsresponse)|
|480|480|ServiceFault|[ServiceFault](#schemaservicefault)|
|481|481|RequestError|[RequestError](#schemarequesterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListHITs

<a id="opIdListHITs"></a>

> Code samples

```bash
curl 'https://mturk-requester.us-east-1.amazonaws.com/#X-Amz-Target=MTurkRequesterServiceV20170117.ListHITs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MTurkRequesterServiceV20170117.ListHITs' \
  -d '{
    "NextToken": {},
    "MaxResults": 1
  }'
```

`POST /#X-Amz-Target=MTurkRequesterServiceV20170117.ListHITs`

 The <code>ListHITs</code> operation returns all of a Requester's HITs. The operation returns HITs of any status, except for HITs that have been deleted of with the DeleteHIT operation or that have been auto-deleted. 

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": 1
}
```

<h3 id="listhits-parameters">Parameters</h3>

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
|body|body|[ListHITsRequest](#schemalisthitsrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|[ResultSize](#schemaresultsize)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MTurkRequesterServiceV20170117.ListHITs|

> Example responses

> 200 Response

```json
{
  "NextToken": "string",
  "NumResults": {},
  "HITs": {}
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

<h3 id="listhits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListHITsResponse](#schemalisthitsresponse)|
|480|480|ServiceFault|[ServiceFault](#schemaservicefault)|
|481|481|RequestError|[RequestError](#schemarequesterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListHITsForQualificationType

<a id="opIdListHITsForQualificationType"></a>

> Code samples

```bash
curl 'https://mturk-requester.us-east-1.amazonaws.com/#X-Amz-Target=MTurkRequesterServiceV20170117.ListHITsForQualificationType' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MTurkRequesterServiceV20170117.ListHITsForQualificationType' \
  -d '{
    "QualificationTypeId": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=MTurkRequesterServiceV20170117.ListHITsForQualificationType`

 The <code>ListHITsForQualificationType</code> operation returns the HITs that use the given Qualification type for a Qualification requirement. The operation returns HITs of any status, except for HITs that have been deleted with the <code>DeleteHIT</code> operation or that have been auto-deleted. 

> Body parameter

```json
{
  "QualificationTypeId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listhitsforqualificationtype-parameters">Parameters</h3>

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
|body|body|[ListHITsForQualificationTypeRequest](#schemalisthitsforqualificationtyperequest)|true|none|
|» QualificationTypeId|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MTurkRequesterServiceV20170117.ListHITsForQualificationType|

> Example responses

> 200 Response

```json
{
  "NextToken": "string",
  "NumResults": {},
  "HITs": {}
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

<h3 id="listhitsforqualificationtype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListHITsForQualificationTypeResponse](#schemalisthitsforqualificationtyperesponse)|
|480|480|ServiceFault|[ServiceFault](#schemaservicefault)|
|481|481|RequestError|[RequestError](#schemarequesterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListQualificationRequests

<a id="opIdListQualificationRequests"></a>

> Code samples

```bash
curl 'https://mturk-requester.us-east-1.amazonaws.com/#X-Amz-Target=MTurkRequesterServiceV20170117.ListQualificationRequests' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MTurkRequesterServiceV20170117.ListQualificationRequests' \
  -d '{
    "QualificationTypeId": {},
    "NextToken": "string",
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=MTurkRequesterServiceV20170117.ListQualificationRequests`

 The <code>ListQualificationRequests</code> operation retrieves requests for Qualifications of a particular Qualification type. The owner of the Qualification type calls this operation to poll for pending requests, and accepts them using the AcceptQualification operation. 

> Body parameter

```json
{
  "QualificationTypeId": {},
  "NextToken": "string",
  "MaxResults": {}
}
```

<h3 id="listqualificationrequests-parameters">Parameters</h3>

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
|body|body|[ListQualificationRequestsRequest](#schemalistqualificationrequestsrequest)|true|none|
|» QualificationTypeId|body|object|false|none|
|» NextToken|body|[PaginationToken](#schemapaginationtoken)|false|If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results. |
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MTurkRequesterServiceV20170117.ListQualificationRequests|

> Example responses

> 200 Response

```json
{
  "NumResults": {},
  "NextToken": "string",
  "QualificationRequests": {}
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

<h3 id="listqualificationrequests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListQualificationRequestsResponse](#schemalistqualificationrequestsresponse)|
|480|480|ServiceFault|[ServiceFault](#schemaservicefault)|
|481|481|RequestError|[RequestError](#schemarequesterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListQualificationTypes

<a id="opIdListQualificationTypes"></a>

> Code samples

```bash
curl 'https://mturk-requester.us-east-1.amazonaws.com/#X-Amz-Target=MTurkRequesterServiceV20170117.ListQualificationTypes' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MTurkRequesterServiceV20170117.ListQualificationTypes' \
  -d '{
    "Query": {},
    "MustBeRequestable": {},
    "MustBeOwnedByCaller": {},
    "NextToken": "string",
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=MTurkRequesterServiceV20170117.ListQualificationTypes`

 The <code>ListQualificationTypes</code> operation returns a list of Qualification types, filtered by an optional search term. 

> Body parameter

```json
{
  "Query": {},
  "MustBeRequestable": {},
  "MustBeOwnedByCaller": {},
  "NextToken": "string",
  "MaxResults": {}
}
```

<h3 id="listqualificationtypes-parameters">Parameters</h3>

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
|body|body|[ListQualificationTypesRequest](#schemalistqualificationtypesrequest)|true|none|
|» Query|body|object|false|none|
|» MustBeRequestable|body|object|true|none|
|» MustBeOwnedByCaller|body|object|false|none|
|» NextToken|body|[PaginationToken](#schemapaginationtoken)|false|If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results. |
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MTurkRequesterServiceV20170117.ListQualificationTypes|

> Example responses

> 200 Response

```json
{
  "NumResults": {},
  "NextToken": "string",
  "QualificationTypes": {}
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

<h3 id="listqualificationtypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListQualificationTypesResponse](#schemalistqualificationtypesresponse)|
|480|480|ServiceFault|[ServiceFault](#schemaservicefault)|
|481|481|RequestError|[RequestError](#schemarequesterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListReviewPolicyResultsForHIT

<a id="opIdListReviewPolicyResultsForHIT"></a>

> Code samples

```bash
curl 'https://mturk-requester.us-east-1.amazonaws.com/#X-Amz-Target=MTurkRequesterServiceV20170117.ListReviewPolicyResultsForHIT' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MTurkRequesterServiceV20170117.ListReviewPolicyResultsForHIT' \
  -d '{
    "HITId": {},
    "PolicyLevels": {},
    "RetrieveActions": {},
    "RetrieveResults": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=MTurkRequesterServiceV20170117.ListReviewPolicyResultsForHIT`

 The <code>ListReviewPolicyResultsForHIT</code> operation retrieves the computed results and the actions taken in the course of executing your Review Policies for a given HIT. For information about how to specify Review Policies when you call CreateHIT, see Review Policies. The ListReviewPolicyResultsForHIT operation can return results for both Assignment-level and HIT-level review results. 

> Body parameter

```json
{
  "HITId": {},
  "PolicyLevels": {},
  "RetrieveActions": {},
  "RetrieveResults": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listreviewpolicyresultsforhit-parameters">Parameters</h3>

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
|body|body|[ListReviewPolicyResultsForHITRequest](#schemalistreviewpolicyresultsforhitrequest)|true|none|
|» HITId|body|object|true|none|
|» PolicyLevels|body|object|false|none|
|» RetrieveActions|body|object|false|none|
|» RetrieveResults|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MTurkRequesterServiceV20170117.ListReviewPolicyResultsForHIT|

> Example responses

> 200 Response

```json
{
  "HITId": {},
  "AssignmentReviewPolicy": {
    "PolicyName": {},
    "Parameters": {}
  },
  "HITReviewPolicy": {
    "PolicyName": {},
    "Parameters": {}
  },
  "AssignmentReviewReport": {
    "ReviewResults": {},
    "ReviewActions": {}
  },
  "HITReviewReport": {
    "ReviewResults": {},
    "ReviewActions": {}
  },
  "NextToken": "string"
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

<h3 id="listreviewpolicyresultsforhit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListReviewPolicyResultsForHITResponse](#schemalistreviewpolicyresultsforhitresponse)|
|480|480|ServiceFault|[ServiceFault](#schemaservicefault)|
|481|481|RequestError|[RequestError](#schemarequesterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListReviewableHITs

<a id="opIdListReviewableHITs"></a>

> Code samples

```bash
curl 'https://mturk-requester.us-east-1.amazonaws.com/#X-Amz-Target=MTurkRequesterServiceV20170117.ListReviewableHITs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MTurkRequesterServiceV20170117.ListReviewableHITs' \
  -d '{
    "HITTypeId": {},
    "Status": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=MTurkRequesterServiceV20170117.ListReviewableHITs`

 The <code>ListReviewableHITs</code> operation retrieves the HITs with Status equal to Reviewable or Status equal to Reviewing that belong to the Requester calling the operation. 

> Body parameter

```json
{
  "HITTypeId": {},
  "Status": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listreviewablehits-parameters">Parameters</h3>

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
|body|body|[ListReviewableHITsRequest](#schemalistreviewablehitsrequest)|true|none|
|» HITTypeId|body|object|false|none|
|» Status|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MTurkRequesterServiceV20170117.ListReviewableHITs|

> Example responses

> 200 Response

```json
{
  "NextToken": "string",
  "NumResults": {},
  "HITs": {}
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

<h3 id="listreviewablehits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListReviewableHITsResponse](#schemalistreviewablehitsresponse)|
|480|480|ServiceFault|[ServiceFault](#schemaservicefault)|
|481|481|RequestError|[RequestError](#schemarequesterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListWorkerBlocks

<a id="opIdListWorkerBlocks"></a>

> Code samples

```bash
curl 'https://mturk-requester.us-east-1.amazonaws.com/#X-Amz-Target=MTurkRequesterServiceV20170117.ListWorkerBlocks' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MTurkRequesterServiceV20170117.ListWorkerBlocks' \
  -d '{
    "NextToken": {},
    "MaxResults": 1
  }'
```

`POST /#X-Amz-Target=MTurkRequesterServiceV20170117.ListWorkerBlocks`

The <code>ListWorkersBlocks</code> operation retrieves a list of Workers who are blocked from working on your HITs.

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": 1
}
```

<h3 id="listworkerblocks-parameters">Parameters</h3>

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
|body|body|[ListWorkerBlocksRequest](#schemalistworkerblocksrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|[ResultSize](#schemaresultsize)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MTurkRequesterServiceV20170117.ListWorkerBlocks|

> Example responses

> 200 Response

```json
{
  "NextToken": "string",
  "NumResults": {},
  "WorkerBlocks": {}
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

<h3 id="listworkerblocks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListWorkerBlocksResponse](#schemalistworkerblocksresponse)|
|480|480|ServiceFault|[ServiceFault](#schemaservicefault)|
|481|481|RequestError|[RequestError](#schemarequesterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListWorkersWithQualificationType

<a id="opIdListWorkersWithQualificationType"></a>

> Code samples

```bash
curl 'https://mturk-requester.us-east-1.amazonaws.com/#X-Amz-Target=MTurkRequesterServiceV20170117.ListWorkersWithQualificationType' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MTurkRequesterServiceV20170117.ListWorkersWithQualificationType' \
  -d '{
    "QualificationTypeId": {},
    "Status": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=MTurkRequesterServiceV20170117.ListWorkersWithQualificationType`

 The <code>ListWorkersWithQualificationType</code> operation returns all of the Workers that have been associated with a given Qualification type. 

> Body parameter

```json
{
  "QualificationTypeId": {},
  "Status": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listworkerswithqualificationtype-parameters">Parameters</h3>

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
|body|body|[ListWorkersWithQualificationTypeRequest](#schemalistworkerswithqualificationtyperequest)|true|none|
|» QualificationTypeId|body|object|true|none|
|» Status|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MTurkRequesterServiceV20170117.ListWorkersWithQualificationType|

> Example responses

> 200 Response

```json
{
  "NextToken": "string",
  "NumResults": {},
  "Qualifications": {}
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

<h3 id="listworkerswithqualificationtype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListWorkersWithQualificationTypeResponse](#schemalistworkerswithqualificationtyperesponse)|
|480|480|ServiceFault|[ServiceFault](#schemaservicefault)|
|481|481|RequestError|[RequestError](#schemarequesterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## NotifyWorkers

<a id="opIdNotifyWorkers"></a>

> Code samples

```bash
curl 'https://mturk-requester.us-east-1.amazonaws.com/#X-Amz-Target=MTurkRequesterServiceV20170117.NotifyWorkers' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MTurkRequesterServiceV20170117.NotifyWorkers' \
  -d '{
    "Subject": {},
    "MessageText": {},
    "WorkerIds": {}
  }'
```

`POST /#X-Amz-Target=MTurkRequesterServiceV20170117.NotifyWorkers`

 The <code>NotifyWorkers</code> operation sends an email to one or more Workers that you specify with the Worker ID. You can specify up to 100 Worker IDs to send the same message with a single call to the NotifyWorkers operation. The NotifyWorkers operation will send a notification email to a Worker only if you have previously approved or rejected work from the Worker. 

> Body parameter

```json
{
  "Subject": {},
  "MessageText": {},
  "WorkerIds": {}
}
```

<h3 id="notifyworkers-parameters">Parameters</h3>

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
|body|body|[NotifyWorkersRequest](#schemanotifyworkersrequest)|true|none|
|» Subject|body|object|true|none|
|» MessageText|body|object|true|none|
|» WorkerIds|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MTurkRequesterServiceV20170117.NotifyWorkers|

> Example responses

> 200 Response

```json
{
  "NotifyWorkersFailureStatuses": {}
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

<h3 id="notifyworkers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[NotifyWorkersResponse](#schemanotifyworkersresponse)|
|480|480|ServiceFault|[ServiceFault](#schemaservicefault)|
|481|481|RequestError|[RequestError](#schemarequesterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RejectAssignment

<a id="opIdRejectAssignment"></a>

> Code samples

```bash
curl 'https://mturk-requester.us-east-1.amazonaws.com/#X-Amz-Target=MTurkRequesterServiceV20170117.RejectAssignment' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MTurkRequesterServiceV20170117.RejectAssignment' \
  -d '{
    "AssignmentId": {},
    "RequesterFeedback": {}
  }'
```

`POST /#X-Amz-Target=MTurkRequesterServiceV20170117.RejectAssignment`

<p> The <code>RejectAssignment</code> operation rejects the results of a completed assignment. </p> <p> You can include an optional feedback message with the rejection, which the Worker can see in the Status section of the web site. When you include a feedback message with the rejection, it helps the Worker understand why the assignment was rejected, and can improve the quality of the results the Worker submits in the future. </p> <p> Only the Requester who created the HIT can reject an assignment for the HIT. </p>

> Body parameter

```json
{
  "AssignmentId": {},
  "RequesterFeedback": {}
}
```

<h3 id="rejectassignment-parameters">Parameters</h3>

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
|body|body|[RejectAssignmentRequest](#schemarejectassignmentrequest)|true|none|
|» AssignmentId|body|object|true|none|
|» RequesterFeedback|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MTurkRequesterServiceV20170117.RejectAssignment|

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

<h3 id="rejectassignment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RejectAssignmentResponse](#schemarejectassignmentresponse)|
|480|480|ServiceFault|[ServiceFault](#schemaservicefault)|
|481|481|RequestError|[RequestError](#schemarequesterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RejectQualificationRequest

<a id="opIdRejectQualificationRequest"></a>

> Code samples

```bash
curl 'https://mturk-requester.us-east-1.amazonaws.com/#X-Amz-Target=MTurkRequesterServiceV20170117.RejectQualificationRequest' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MTurkRequesterServiceV20170117.RejectQualificationRequest' \
  -d '{
    "QualificationRequestId": {},
    "Reason": {}
  }'
```

`POST /#X-Amz-Target=MTurkRequesterServiceV20170117.RejectQualificationRequest`

<p> The <code>RejectQualificationRequest</code> operation rejects a user's request for a Qualification. </p> <p> You can provide a text message explaining why the request was rejected. The Worker who made the request can see this message.</p>

> Body parameter

```json
{
  "QualificationRequestId": {},
  "Reason": {}
}
```

<h3 id="rejectqualificationrequest-parameters">Parameters</h3>

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
|body|body|[RejectQualificationRequestRequest](#schemarejectqualificationrequestrequest)|true|none|
|» QualificationRequestId|body|object|true|none|
|» Reason|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MTurkRequesterServiceV20170117.RejectQualificationRequest|

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

<h3 id="rejectqualificationrequest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RejectQualificationRequestResponse](#schemarejectqualificationrequestresponse)|
|480|480|ServiceFault|[ServiceFault](#schemaservicefault)|
|481|481|RequestError|[RequestError](#schemarequesterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SendBonus

<a id="opIdSendBonus"></a>

> Code samples

```bash
curl 'https://mturk-requester.us-east-1.amazonaws.com/#X-Amz-Target=MTurkRequesterServiceV20170117.SendBonus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MTurkRequesterServiceV20170117.SendBonus' \
  -d '{
    "WorkerId": {},
    "BonusAmount": {},
    "AssignmentId": {},
    "Reason": {},
    "UniqueRequestToken": {}
  }'
```

`POST /#X-Amz-Target=MTurkRequesterServiceV20170117.SendBonus`

 The <code>SendBonus</code> operation issues a payment of money from your account to a Worker. This payment happens separately from the reward you pay to the Worker when you approve the Worker's assignment. The SendBonus operation requires the Worker's ID and the assignment ID as parameters to initiate payment of the bonus. You must include a message that explains the reason for the bonus payment, as the Worker may not be expecting the payment. Amazon Mechanical Turk collects a fee for bonus payments, similar to the HIT listing fee. This operation fails if your account does not have enough funds to pay for both the bonus and the fees. 

> Body parameter

```json
{
  "WorkerId": {},
  "BonusAmount": {},
  "AssignmentId": {},
  "Reason": {},
  "UniqueRequestToken": {}
}
```

<h3 id="sendbonus-parameters">Parameters</h3>

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
|body|body|[SendBonusRequest](#schemasendbonusrequest)|true|none|
|» WorkerId|body|object|true|none|
|» BonusAmount|body|object|true|none|
|» AssignmentId|body|object|true|none|
|» Reason|body|object|true|none|
|» UniqueRequestToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MTurkRequesterServiceV20170117.SendBonus|

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

<h3 id="sendbonus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SendBonusResponse](#schemasendbonusresponse)|
|480|480|ServiceFault|[ServiceFault](#schemaservicefault)|
|481|481|RequestError|[RequestError](#schemarequesterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SendTestEventNotification

<a id="opIdSendTestEventNotification"></a>

> Code samples

```bash
curl 'https://mturk-requester.us-east-1.amazonaws.com/#X-Amz-Target=MTurkRequesterServiceV20170117.SendTestEventNotification' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MTurkRequesterServiceV20170117.SendTestEventNotification' \
  -d '{
    "Notification": {
      "Destination": {},
      "Transport": {},
      "Version": {},
      "EventTypes": {}
    },
    "TestEventType": {}
  }'
```

`POST /#X-Amz-Target=MTurkRequesterServiceV20170117.SendTestEventNotification`

 The <code>SendTestEventNotification</code> operation causes Amazon Mechanical Turk to send a notification message as if a HIT event occurred, according to the provided notification specification. This allows you to test notifications without setting up notifications for a real HIT type and trying to trigger them using the website. When you call this operation, the service attempts to send the test notification immediately. 

> Body parameter

```json
{
  "Notification": {
    "Destination": {},
    "Transport": {},
    "Version": {},
    "EventTypes": {}
  },
  "TestEventType": {}
}
```

<h3 id="sendtesteventnotification-parameters">Parameters</h3>

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
|body|body|[SendTestEventNotificationRequest](#schemasendtesteventnotificationrequest)|true|none|
|» Notification|body|object|true|none|
|» » Destination|body|object|true|none|
|» » Transport|body|object|true|none|
|» » Version|body|object|true|none|
|» » EventTypes|body|object|true|none|
|» TestEventType|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MTurkRequesterServiceV20170117.SendTestEventNotification|

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

<h3 id="sendtesteventnotification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SendTestEventNotificationResponse](#schemasendtesteventnotificationresponse)|
|480|480|ServiceFault|[ServiceFault](#schemaservicefault)|
|481|481|RequestError|[RequestError](#schemarequesterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateExpirationForHIT

<a id="opIdUpdateExpirationForHIT"></a>

> Code samples

```bash
curl 'https://mturk-requester.us-east-1.amazonaws.com/#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateExpirationForHIT' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MTurkRequesterServiceV20170117.UpdateExpirationForHIT' \
  -d '{
    "HITId": {},
    "ExpireAt": {}
  }'
```

`POST /#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateExpirationForHIT`

 The <code>UpdateExpirationForHIT</code> operation allows you update the expiration time of a HIT. If you update it to a time in the past, the HIT will be immediately expired. 

> Body parameter

```json
{
  "HITId": {},
  "ExpireAt": {}
}
```

<h3 id="updateexpirationforhit-parameters">Parameters</h3>

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
|body|body|[UpdateExpirationForHITRequest](#schemaupdateexpirationforhitrequest)|true|none|
|» HITId|body|object|true|none|
|» ExpireAt|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MTurkRequesterServiceV20170117.UpdateExpirationForHIT|

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

<h3 id="updateexpirationforhit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateExpirationForHITResponse](#schemaupdateexpirationforhitresponse)|
|480|480|ServiceFault|[ServiceFault](#schemaservicefault)|
|481|481|RequestError|[RequestError](#schemarequesterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateHITReviewStatus

<a id="opIdUpdateHITReviewStatus"></a>

> Code samples

```bash
curl 'https://mturk-requester.us-east-1.amazonaws.com/#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateHITReviewStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MTurkRequesterServiceV20170117.UpdateHITReviewStatus' \
  -d '{
    "HITId": {},
    "Revert": {}
  }'
```

`POST /#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateHITReviewStatus`

 The <code>UpdateHITReviewStatus</code> operation updates the status of a HIT. If the status is Reviewable, this operation can update the status to Reviewing, or it can revert a Reviewing HIT back to the Reviewable status. 

> Body parameter

```json
{
  "HITId": {},
  "Revert": {}
}
```

<h3 id="updatehitreviewstatus-parameters">Parameters</h3>

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
|body|body|[UpdateHITReviewStatusRequest](#schemaupdatehitreviewstatusrequest)|true|none|
|» HITId|body|object|true|none|
|» Revert|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MTurkRequesterServiceV20170117.UpdateHITReviewStatus|

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

<h3 id="updatehitreviewstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateHITReviewStatusResponse](#schemaupdatehitreviewstatusresponse)|
|480|480|ServiceFault|[ServiceFault](#schemaservicefault)|
|481|481|RequestError|[RequestError](#schemarequesterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateHITTypeOfHIT

<a id="opIdUpdateHITTypeOfHIT"></a>

> Code samples

```bash
curl 'https://mturk-requester.us-east-1.amazonaws.com/#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateHITTypeOfHIT' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MTurkRequesterServiceV20170117.UpdateHITTypeOfHIT' \
  -d '{
    "HITId": {},
    "HITTypeId": {}
  }'
```

`POST /#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateHITTypeOfHIT`

 The <code>UpdateHITTypeOfHIT</code> operation allows you to change the HITType properties of a HIT. This operation disassociates the HIT from its old HITType properties and associates it with the new HITType properties. The HIT takes on the properties of the new HITType in place of the old ones. 

> Body parameter

```json
{
  "HITId": {},
  "HITTypeId": {}
}
```

<h3 id="updatehittypeofhit-parameters">Parameters</h3>

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
|body|body|[UpdateHITTypeOfHITRequest](#schemaupdatehittypeofhitrequest)|true|none|
|» HITId|body|object|true|none|
|» HITTypeId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MTurkRequesterServiceV20170117.UpdateHITTypeOfHIT|

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

<h3 id="updatehittypeofhit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateHITTypeOfHITResponse](#schemaupdatehittypeofhitresponse)|
|480|480|ServiceFault|[ServiceFault](#schemaservicefault)|
|481|481|RequestError|[RequestError](#schemarequesterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateNotificationSettings

<a id="opIdUpdateNotificationSettings"></a>

> Code samples

```bash
curl 'https://mturk-requester.us-east-1.amazonaws.com/#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateNotificationSettings' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MTurkRequesterServiceV20170117.UpdateNotificationSettings' \
  -d '{
    "HITTypeId": {},
    "Notification": {
      "Destination": {},
      "Transport": {},
      "Version": {},
      "EventTypes": {}
    },
    "Active": {}
  }'
```

`POST /#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateNotificationSettings`

 The <code>UpdateNotificationSettings</code> operation creates, updates, disables or re-enables notifications for a HIT type. If you call the UpdateNotificationSettings operation for a HIT type that already has a notification specification, the operation replaces the old specification with a new one. You can call the UpdateNotificationSettings operation to enable or disable notifications for the HIT type, without having to modify the notification specification itself by providing updates to the Active status without specifying a new notification specification. To change the Active status of a HIT type's notifications, the HIT type must already have a notification specification, or one must be provided in the same call to <code>UpdateNotificationSettings</code>. 

> Body parameter

```json
{
  "HITTypeId": {},
  "Notification": {
    "Destination": {},
    "Transport": {},
    "Version": {},
    "EventTypes": {}
  },
  "Active": {}
}
```

<h3 id="updatenotificationsettings-parameters">Parameters</h3>

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
|body|body|[UpdateNotificationSettingsRequest](#schemaupdatenotificationsettingsrequest)|true|none|
|» HITTypeId|body|object|true|none|
|» Notification|body|object|false|none|
|» » Destination|body|object|true|none|
|» » Transport|body|object|true|none|
|» » Version|body|object|true|none|
|» » EventTypes|body|object|true|none|
|» Active|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MTurkRequesterServiceV20170117.UpdateNotificationSettings|

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

<h3 id="updatenotificationsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateNotificationSettingsResponse](#schemaupdatenotificationsettingsresponse)|
|480|480|ServiceFault|[ServiceFault](#schemaservicefault)|
|481|481|RequestError|[RequestError](#schemarequesterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateQualificationType

<a id="opIdUpdateQualificationType"></a>

> Code samples

```bash
curl 'https://mturk-requester.us-east-1.amazonaws.com/#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateQualificationType' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MTurkRequesterServiceV20170117.UpdateQualificationType' \
  -d '{
    "QualificationTypeId": {},
    "Description": {},
    "QualificationTypeStatus": {},
    "Test": {},
    "AnswerKey": {},
    "TestDurationInSeconds": {},
    "RetryDelayInSeconds": {},
    "AutoGranted": {},
    "AutoGrantedValue": {}
  }'
```

`POST /#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateQualificationType`

<p> The <code>UpdateQualificationType</code> operation modifies the attributes of an existing Qualification type, which is represented by a QualificationType data structure. Only the owner of a Qualification type can modify its attributes. </p> <p> Most attributes of a Qualification type can be changed after the type has been created. However, the Name and Keywords fields cannot be modified. The RetryDelayInSeconds parameter can be modified or added to change the delay or to enable retries, but RetryDelayInSeconds cannot be used to disable retries. </p> <p> You can use this operation to update the test for a Qualification type. The test is updated based on the values specified for the Test, TestDurationInSeconds and AnswerKey parameters. All three parameters specify the updated test. If you are updating the test for a type, you must specify the Test and TestDurationInSeconds parameters. The AnswerKey parameter is optional; omitting it specifies that the updated test does not have an answer key. </p> <p> If you omit the Test parameter, the test for the Qualification type is unchanged. There is no way to remove a test from a Qualification type that has one. If the type already has a test, you cannot update it to be AutoGranted. If the Qualification type does not have a test and one is provided by an update, the type will henceforth have a test. </p> <p> If you want to update the test duration or answer key for an existing test without changing the questions, you must specify a Test parameter with the original questions, along with the updated values. </p> <p> If you provide an updated Test but no AnswerKey, the new test will not have an answer key. Requests for such Qualifications must be granted manually. </p> <p> You can also update the AutoGranted and AutoGrantedValue attributes of the Qualification type.</p>

> Body parameter

```json
{
  "QualificationTypeId": {},
  "Description": {},
  "QualificationTypeStatus": {},
  "Test": {},
  "AnswerKey": {},
  "TestDurationInSeconds": {},
  "RetryDelayInSeconds": {},
  "AutoGranted": {},
  "AutoGrantedValue": {}
}
```

<h3 id="updatequalificationtype-parameters">Parameters</h3>

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
|body|body|[UpdateQualificationTypeRequest](#schemaupdatequalificationtyperequest)|true|none|
|» QualificationTypeId|body|object|true|none|
|» Description|body|object|false|none|
|» QualificationTypeStatus|body|object|false|none|
|» Test|body|object|false|none|
|» AnswerKey|body|object|false|none|
|» TestDurationInSeconds|body|object|false|none|
|» RetryDelayInSeconds|body|object|false|none|
|» AutoGranted|body|object|false|none|
|» AutoGrantedValue|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MTurkRequesterServiceV20170117.UpdateQualificationType|

> Example responses

> 200 Response

```json
{
  "QualificationType": {
    "QualificationTypeId": {},
    "CreationTime": {},
    "Name": {},
    "Description": {},
    "Keywords": {},
    "QualificationTypeStatus": {},
    "Test": {},
    "TestDurationInSeconds": {},
    "AnswerKey": {},
    "RetryDelayInSeconds": {},
    "IsRequestable": {},
    "AutoGranted": {},
    "AutoGrantedValue": {}
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

<h3 id="updatequalificationtype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateQualificationTypeResponse](#schemaupdatequalificationtyperesponse)|
|480|480|ServiceFault|[ServiceFault](#schemaservicefault)|
|481|481|RequestError|[RequestError](#schemarequesterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AcceptQualificationRequestResponse">AcceptQualificationRequestResponse</h2>
<!-- backwards compatibility -->
<a id="schemaacceptqualificationrequestresponse"></a>
<a id="schema_AcceptQualificationRequestResponse"></a>
<a id="tocSacceptqualificationrequestresponse"></a>
<a id="tocsacceptqualificationrequestresponse"></a>

```json
{}
```

<h2 id="tocS_AcceptQualificationRequestRequest">AcceptQualificationRequestRequest</h2>
<!-- backwards compatibility -->
<a id="schemaacceptqualificationrequestrequest"></a>
<a id="schema_AcceptQualificationRequestRequest"></a>
<a id="tocSacceptqualificationrequestrequest"></a>
<a id="tocsacceptqualificationrequestrequest"></a>

```json
{
  "QualificationRequestId": {},
  "IntegerValue": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QualificationRequestId|object|true|none|none|
|IntegerValue|object|false|none|none|

<h2 id="tocS_ServiceFault">ServiceFault</h2>
<!-- backwards compatibility -->
<a id="schemaservicefault"></a>
<a id="schema_ServiceFault"></a>
<a id="tocSservicefault"></a>
<a id="tocsservicefault"></a>

```json
null
```

<h2 id="tocS_RequestError">RequestError</h2>
<!-- backwards compatibility -->
<a id="schemarequesterror"></a>
<a id="schema_RequestError"></a>
<a id="tocSrequesterror"></a>
<a id="tocsrequesterror"></a>

```json
null
```

<h2 id="tocS_ApproveAssignmentResponse">ApproveAssignmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapproveassignmentresponse"></a>
<a id="schema_ApproveAssignmentResponse"></a>
<a id="tocSapproveassignmentresponse"></a>
<a id="tocsapproveassignmentresponse"></a>

```json
{}
```

<h2 id="tocS_ApproveAssignmentRequest">ApproveAssignmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapproveassignmentrequest"></a>
<a id="schema_ApproveAssignmentRequest"></a>
<a id="tocSapproveassignmentrequest"></a>
<a id="tocsapproveassignmentrequest"></a>

```json
{
  "AssignmentId": {},
  "RequesterFeedback": {},
  "OverrideRejection": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssignmentId|object|true|none|none|
|RequesterFeedback|object|false|none|none|
|OverrideRejection|object|false|none|none|

<h2 id="tocS_AssociateQualificationWithWorkerResponse">AssociateQualificationWithWorkerResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociatequalificationwithworkerresponse"></a>
<a id="schema_AssociateQualificationWithWorkerResponse"></a>
<a id="tocSassociatequalificationwithworkerresponse"></a>
<a id="tocsassociatequalificationwithworkerresponse"></a>

```json
{}
```

<h2 id="tocS_AssociateQualificationWithWorkerRequest">AssociateQualificationWithWorkerRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatequalificationwithworkerrequest"></a>
<a id="schema_AssociateQualificationWithWorkerRequest"></a>
<a id="tocSassociatequalificationwithworkerrequest"></a>
<a id="tocsassociatequalificationwithworkerrequest"></a>

```json
{
  "QualificationTypeId": {},
  "WorkerId": {},
  "IntegerValue": {},
  "SendNotification": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QualificationTypeId|object|true|none|none|
|WorkerId|object|true|none|none|
|IntegerValue|object|false|none|none|
|SendNotification|object|false|none|none|

<h2 id="tocS_CreateAdditionalAssignmentsForHITResponse">CreateAdditionalAssignmentsForHITResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateadditionalassignmentsforhitresponse"></a>
<a id="schema_CreateAdditionalAssignmentsForHITResponse"></a>
<a id="tocScreateadditionalassignmentsforhitresponse"></a>
<a id="tocscreateadditionalassignmentsforhitresponse"></a>

```json
{}
```

<h2 id="tocS_CreateAdditionalAssignmentsForHITRequest">CreateAdditionalAssignmentsForHITRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateadditionalassignmentsforhitrequest"></a>
<a id="schema_CreateAdditionalAssignmentsForHITRequest"></a>
<a id="tocScreateadditionalassignmentsforhitrequest"></a>
<a id="tocscreateadditionalassignmentsforhitrequest"></a>

```json
{
  "HITId": {},
  "NumberOfAdditionalAssignments": {},
  "UniqueRequestToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HITId|object|true|none|none|
|NumberOfAdditionalAssignments|object|true|none|none|
|UniqueRequestToken|object|false|none|none|

<h2 id="tocS_CreateHITResponse">CreateHITResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatehitresponse"></a>
<a id="schema_CreateHITResponse"></a>
<a id="tocScreatehitresponse"></a>
<a id="tocscreatehitresponse"></a>

```json
{
  "HIT": {
    "HITId": {},
    "HITTypeId": {},
    "HITGroupId": {},
    "HITLayoutId": {},
    "CreationTime": {},
    "Title": {},
    "Description": {},
    "Question": {},
    "Keywords": {},
    "HITStatus": {},
    "MaxAssignments": {},
    "Reward": "string",
    "AutoApprovalDelayInSeconds": {},
    "Expiration": {},
    "AssignmentDurationInSeconds": {},
    "RequesterAnnotation": {},
    "QualificationRequirements": {},
    "HITReviewStatus": {},
    "NumberOfAssignmentsPending": {},
    "NumberOfAssignmentsAvailable": {},
    "NumberOfAssignmentsCompleted": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HIT|object|false|none|none|

<h2 id="tocS_CreateHITRequest">CreateHITRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatehitrequest"></a>
<a id="schema_CreateHITRequest"></a>
<a id="tocScreatehitrequest"></a>
<a id="tocscreatehitrequest"></a>

```json
{
  "MaxAssignments": {},
  "AutoApprovalDelayInSeconds": {},
  "LifetimeInSeconds": {},
  "AssignmentDurationInSeconds": {},
  "Reward": {},
  "Title": {},
  "Keywords": {},
  "Description": {},
  "Question": {},
  "RequesterAnnotation": {},
  "QualificationRequirements": {},
  "UniqueRequestToken": {},
  "AssignmentReviewPolicy": {
    "PolicyName": {},
    "Parameters": {}
  },
  "HITReviewPolicy": {
    "PolicyName": {},
    "Parameters": {}
  },
  "HITLayoutId": {},
  "HITLayoutParameters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxAssignments|object|false|none|none|
|AutoApprovalDelayInSeconds|object|false|none|none|
|LifetimeInSeconds|object|true|none|none|
|AssignmentDurationInSeconds|object|true|none|none|
|Reward|object|true|none|none|
|Title|object|true|none|none|
|Keywords|object|false|none|none|
|Description|object|true|none|none|
|Question|object|false|none|none|
|RequesterAnnotation|object|false|none|none|
|QualificationRequirements|object|false|none|none|
|UniqueRequestToken|object|false|none|none|
|AssignmentReviewPolicy|object|false|none|none|
|HITReviewPolicy|object|false|none|none|
|HITLayoutId|object|false|none|none|
|HITLayoutParameters|object|false|none|none|

<h2 id="tocS_CreateHITTypeResponse">CreateHITTypeResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatehittyperesponse"></a>
<a id="schema_CreateHITTypeResponse"></a>
<a id="tocScreatehittyperesponse"></a>
<a id="tocscreatehittyperesponse"></a>

```json
{
  "HITTypeId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HITTypeId|object|false|none|none|

<h2 id="tocS_CreateHITTypeRequest">CreateHITTypeRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatehittyperequest"></a>
<a id="schema_CreateHITTypeRequest"></a>
<a id="tocScreatehittyperequest"></a>
<a id="tocscreatehittyperequest"></a>

```json
{
  "AutoApprovalDelayInSeconds": {},
  "AssignmentDurationInSeconds": {},
  "Reward": {},
  "Title": {},
  "Keywords": {},
  "Description": {},
  "QualificationRequirements": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoApprovalDelayInSeconds|object|false|none|none|
|AssignmentDurationInSeconds|object|true|none|none|
|Reward|object|true|none|none|
|Title|object|true|none|none|
|Keywords|object|false|none|none|
|Description|object|true|none|none|
|QualificationRequirements|object|false|none|none|

<h2 id="tocS_CreateHITWithHITTypeResponse">CreateHITWithHITTypeResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatehitwithhittyperesponse"></a>
<a id="schema_CreateHITWithHITTypeResponse"></a>
<a id="tocScreatehitwithhittyperesponse"></a>
<a id="tocscreatehitwithhittyperesponse"></a>

```json
{
  "HIT": {
    "HITId": {},
    "HITTypeId": {},
    "HITGroupId": {},
    "HITLayoutId": {},
    "CreationTime": {},
    "Title": {},
    "Description": {},
    "Question": {},
    "Keywords": {},
    "HITStatus": {},
    "MaxAssignments": {},
    "Reward": "string",
    "AutoApprovalDelayInSeconds": {},
    "Expiration": {},
    "AssignmentDurationInSeconds": {},
    "RequesterAnnotation": {},
    "QualificationRequirements": {},
    "HITReviewStatus": {},
    "NumberOfAssignmentsPending": {},
    "NumberOfAssignmentsAvailable": {},
    "NumberOfAssignmentsCompleted": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HIT|object|false|none|none|

<h2 id="tocS_CreateHITWithHITTypeRequest">CreateHITWithHITTypeRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatehitwithhittyperequest"></a>
<a id="schema_CreateHITWithHITTypeRequest"></a>
<a id="tocScreatehitwithhittyperequest"></a>
<a id="tocscreatehitwithhittyperequest"></a>

```json
{
  "HITTypeId": {},
  "MaxAssignments": {},
  "LifetimeInSeconds": {},
  "Question": {},
  "RequesterAnnotation": {},
  "UniqueRequestToken": {},
  "AssignmentReviewPolicy": {
    "PolicyName": {},
    "Parameters": {}
  },
  "HITReviewPolicy": {
    "PolicyName": {},
    "Parameters": {}
  },
  "HITLayoutId": {},
  "HITLayoutParameters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HITTypeId|object|true|none|none|
|MaxAssignments|object|false|none|none|
|LifetimeInSeconds|object|true|none|none|
|Question|object|false|none|none|
|RequesterAnnotation|object|false|none|none|
|UniqueRequestToken|object|false|none|none|
|AssignmentReviewPolicy|object|false|none|none|
|HITReviewPolicy|object|false|none|none|
|HITLayoutId|object|false|none|none|
|HITLayoutParameters|object|false|none|none|

<h2 id="tocS_CreateQualificationTypeResponse">CreateQualificationTypeResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatequalificationtyperesponse"></a>
<a id="schema_CreateQualificationTypeResponse"></a>
<a id="tocScreatequalificationtyperesponse"></a>
<a id="tocscreatequalificationtyperesponse"></a>

```json
{
  "QualificationType": {
    "QualificationTypeId": {},
    "CreationTime": {},
    "Name": {},
    "Description": {},
    "Keywords": {},
    "QualificationTypeStatus": {},
    "Test": {},
    "TestDurationInSeconds": {},
    "AnswerKey": {},
    "RetryDelayInSeconds": {},
    "IsRequestable": {},
    "AutoGranted": {},
    "AutoGrantedValue": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QualificationType|object|false|none|none|

<h2 id="tocS_CreateQualificationTypeRequest">CreateQualificationTypeRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatequalificationtyperequest"></a>
<a id="schema_CreateQualificationTypeRequest"></a>
<a id="tocScreatequalificationtyperequest"></a>
<a id="tocscreatequalificationtyperequest"></a>

```json
{
  "Name": {},
  "Keywords": {},
  "Description": {},
  "QualificationTypeStatus": {},
  "RetryDelayInSeconds": {},
  "Test": {},
  "AnswerKey": {},
  "TestDurationInSeconds": {},
  "AutoGranted": {},
  "AutoGrantedValue": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Keywords|object|false|none|none|
|Description|object|true|none|none|
|QualificationTypeStatus|object|true|none|none|
|RetryDelayInSeconds|object|false|none|none|
|Test|object|false|none|none|
|AnswerKey|object|false|none|none|
|TestDurationInSeconds|object|false|none|none|
|AutoGranted|object|false|none|none|
|AutoGrantedValue|object|false|none|none|

<h2 id="tocS_CreateWorkerBlockResponse">CreateWorkerBlockResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateworkerblockresponse"></a>
<a id="schema_CreateWorkerBlockResponse"></a>
<a id="tocScreateworkerblockresponse"></a>
<a id="tocscreateworkerblockresponse"></a>

```json
{}
```

<h2 id="tocS_CreateWorkerBlockRequest">CreateWorkerBlockRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateworkerblockrequest"></a>
<a id="schema_CreateWorkerBlockRequest"></a>
<a id="tocScreateworkerblockrequest"></a>
<a id="tocscreateworkerblockrequest"></a>

```json
{
  "WorkerId": {},
  "Reason": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkerId|object|true|none|none|
|Reason|object|true|none|none|

<h2 id="tocS_DeleteHITResponse">DeleteHITResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletehitresponse"></a>
<a id="schema_DeleteHITResponse"></a>
<a id="tocSdeletehitresponse"></a>
<a id="tocsdeletehitresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteHITRequest">DeleteHITRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletehitrequest"></a>
<a id="schema_DeleteHITRequest"></a>
<a id="tocSdeletehitrequest"></a>
<a id="tocsdeletehitrequest"></a>

```json
{
  "HITId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HITId|object|true|none|none|

<h2 id="tocS_DeleteQualificationTypeResponse">DeleteQualificationTypeResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletequalificationtyperesponse"></a>
<a id="schema_DeleteQualificationTypeResponse"></a>
<a id="tocSdeletequalificationtyperesponse"></a>
<a id="tocsdeletequalificationtyperesponse"></a>

```json
{}
```

<h2 id="tocS_DeleteQualificationTypeRequest">DeleteQualificationTypeRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletequalificationtyperequest"></a>
<a id="schema_DeleteQualificationTypeRequest"></a>
<a id="tocSdeletequalificationtyperequest"></a>
<a id="tocsdeletequalificationtyperequest"></a>

```json
{
  "QualificationTypeId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QualificationTypeId|object|true|none|none|

<h2 id="tocS_DeleteWorkerBlockResponse">DeleteWorkerBlockResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteworkerblockresponse"></a>
<a id="schema_DeleteWorkerBlockResponse"></a>
<a id="tocSdeleteworkerblockresponse"></a>
<a id="tocsdeleteworkerblockresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteWorkerBlockRequest">DeleteWorkerBlockRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteworkerblockrequest"></a>
<a id="schema_DeleteWorkerBlockRequest"></a>
<a id="tocSdeleteworkerblockrequest"></a>
<a id="tocsdeleteworkerblockrequest"></a>

```json
{
  "WorkerId": {},
  "Reason": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkerId|object|true|none|none|
|Reason|object|false|none|none|

<h2 id="tocS_DisassociateQualificationFromWorkerResponse">DisassociateQualificationFromWorkerResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatequalificationfromworkerresponse"></a>
<a id="schema_DisassociateQualificationFromWorkerResponse"></a>
<a id="tocSdisassociatequalificationfromworkerresponse"></a>
<a id="tocsdisassociatequalificationfromworkerresponse"></a>

```json
{}
```

<h2 id="tocS_DisassociateQualificationFromWorkerRequest">DisassociateQualificationFromWorkerRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatequalificationfromworkerrequest"></a>
<a id="schema_DisassociateQualificationFromWorkerRequest"></a>
<a id="tocSdisassociatequalificationfromworkerrequest"></a>
<a id="tocsdisassociatequalificationfromworkerrequest"></a>

```json
{
  "WorkerId": {},
  "QualificationTypeId": {},
  "Reason": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkerId|object|true|none|none|
|QualificationTypeId|object|true|none|none|
|Reason|object|false|none|none|

<h2 id="tocS_GetAccountBalanceResponse">GetAccountBalanceResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetaccountbalanceresponse"></a>
<a id="schema_GetAccountBalanceResponse"></a>
<a id="tocSgetaccountbalanceresponse"></a>
<a id="tocsgetaccountbalanceresponse"></a>

```json
{
  "AvailableBalance": "string",
  "OnHoldBalance": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AvailableBalance|[CurrencyAmount](#schemacurrencyamount)|false|none|A string representing a currency amount.|
|OnHoldBalance|[CurrencyAmount](#schemacurrencyamount)|false|none|A string representing a currency amount.|

<h2 id="tocS_GetAccountBalanceRequest">GetAccountBalanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetaccountbalancerequest"></a>
<a id="schema_GetAccountBalanceRequest"></a>
<a id="tocSgetaccountbalancerequest"></a>
<a id="tocsgetaccountbalancerequest"></a>

```json
{}
```

<h2 id="tocS_GetAssignmentResponse">GetAssignmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetassignmentresponse"></a>
<a id="schema_GetAssignmentResponse"></a>
<a id="tocSgetassignmentresponse"></a>
<a id="tocsgetassignmentresponse"></a>

```json
{
  "Assignment": {
    "AssignmentId": {},
    "WorkerId": {},
    "HITId": {},
    "AssignmentStatus": {},
    "AutoApprovalTime": {},
    "AcceptTime": {},
    "SubmitTime": {},
    "ApprovalTime": {},
    "RejectionTime": {},
    "Deadline": {},
    "Answer": {},
    "RequesterFeedback": {}
  },
  "HIT": {
    "HITId": {},
    "HITTypeId": {},
    "HITGroupId": {},
    "HITLayoutId": {},
    "CreationTime": {},
    "Title": {},
    "Description": {},
    "Question": {},
    "Keywords": {},
    "HITStatus": {},
    "MaxAssignments": {},
    "Reward": "string",
    "AutoApprovalDelayInSeconds": {},
    "Expiration": {},
    "AssignmentDurationInSeconds": {},
    "RequesterAnnotation": {},
    "QualificationRequirements": {},
    "HITReviewStatus": {},
    "NumberOfAssignmentsPending": {},
    "NumberOfAssignmentsAvailable": {},
    "NumberOfAssignmentsCompleted": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Assignment|object|false|none|none|
|HIT|object|false|none|none|

<h2 id="tocS_GetAssignmentRequest">GetAssignmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetassignmentrequest"></a>
<a id="schema_GetAssignmentRequest"></a>
<a id="tocSgetassignmentrequest"></a>
<a id="tocsgetassignmentrequest"></a>

```json
{
  "AssignmentId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssignmentId|object|true|none|none|

<h2 id="tocS_GetFileUploadURLResponse">GetFileUploadURLResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetfileuploadurlresponse"></a>
<a id="schema_GetFileUploadURLResponse"></a>
<a id="tocSgetfileuploadurlresponse"></a>
<a id="tocsgetfileuploadurlresponse"></a>

```json
{
  "FileUploadURL": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileUploadURL|object|false|none|none|

<h2 id="tocS_GetFileUploadURLRequest">GetFileUploadURLRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetfileuploadurlrequest"></a>
<a id="schema_GetFileUploadURLRequest"></a>
<a id="tocSgetfileuploadurlrequest"></a>
<a id="tocsgetfileuploadurlrequest"></a>

```json
{
  "AssignmentId": {},
  "QuestionIdentifier": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssignmentId|object|true|none|none|
|QuestionIdentifier|object|true|none|none|

<h2 id="tocS_GetHITResponse">GetHITResponse</h2>
<!-- backwards compatibility -->
<a id="schemagethitresponse"></a>
<a id="schema_GetHITResponse"></a>
<a id="tocSgethitresponse"></a>
<a id="tocsgethitresponse"></a>

```json
{
  "HIT": {
    "HITId": {},
    "HITTypeId": {},
    "HITGroupId": {},
    "HITLayoutId": {},
    "CreationTime": {},
    "Title": {},
    "Description": {},
    "Question": {},
    "Keywords": {},
    "HITStatus": {},
    "MaxAssignments": {},
    "Reward": "string",
    "AutoApprovalDelayInSeconds": {},
    "Expiration": {},
    "AssignmentDurationInSeconds": {},
    "RequesterAnnotation": {},
    "QualificationRequirements": {},
    "HITReviewStatus": {},
    "NumberOfAssignmentsPending": {},
    "NumberOfAssignmentsAvailable": {},
    "NumberOfAssignmentsCompleted": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HIT|object|false|none|none|

<h2 id="tocS_GetHITRequest">GetHITRequest</h2>
<!-- backwards compatibility -->
<a id="schemagethitrequest"></a>
<a id="schema_GetHITRequest"></a>
<a id="tocSgethitrequest"></a>
<a id="tocsgethitrequest"></a>

```json
{
  "HITId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HITId|object|true|none|none|

<h2 id="tocS_GetQualificationScoreResponse">GetQualificationScoreResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetqualificationscoreresponse"></a>
<a id="schema_GetQualificationScoreResponse"></a>
<a id="tocSgetqualificationscoreresponse"></a>
<a id="tocsgetqualificationscoreresponse"></a>

```json
{
  "Qualification": {
    "QualificationTypeId": {},
    "WorkerId": {},
    "GrantTime": {},
    "IntegerValue": {},
    "LocaleValue": {
      "Country": {},
      "Subdivision": {}
    },
    "Status": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Qualification|object|false|none|none|

<h2 id="tocS_GetQualificationScoreRequest">GetQualificationScoreRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetqualificationscorerequest"></a>
<a id="schema_GetQualificationScoreRequest"></a>
<a id="tocSgetqualificationscorerequest"></a>
<a id="tocsgetqualificationscorerequest"></a>

```json
{
  "QualificationTypeId": {},
  "WorkerId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QualificationTypeId|object|true|none|none|
|WorkerId|object|true|none|none|

<h2 id="tocS_GetQualificationTypeResponse">GetQualificationTypeResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetqualificationtyperesponse"></a>
<a id="schema_GetQualificationTypeResponse"></a>
<a id="tocSgetqualificationtyperesponse"></a>
<a id="tocsgetqualificationtyperesponse"></a>

```json
{
  "QualificationType": {
    "QualificationTypeId": {},
    "CreationTime": {},
    "Name": {},
    "Description": {},
    "Keywords": {},
    "QualificationTypeStatus": {},
    "Test": {},
    "TestDurationInSeconds": {},
    "AnswerKey": {},
    "RetryDelayInSeconds": {},
    "IsRequestable": {},
    "AutoGranted": {},
    "AutoGrantedValue": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QualificationType|object|false|none|none|

<h2 id="tocS_GetQualificationTypeRequest">GetQualificationTypeRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetqualificationtyperequest"></a>
<a id="schema_GetQualificationTypeRequest"></a>
<a id="tocSgetqualificationtyperequest"></a>
<a id="tocsgetqualificationtyperequest"></a>

```json
{
  "QualificationTypeId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QualificationTypeId|object|true|none|none|

<h2 id="tocS_ListAssignmentsForHITResponse">ListAssignmentsForHITResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistassignmentsforhitresponse"></a>
<a id="schema_ListAssignmentsForHITResponse"></a>
<a id="tocSlistassignmentsforhitresponse"></a>
<a id="tocslistassignmentsforhitresponse"></a>

```json
{
  "NextToken": "string",
  "NumResults": {},
  "Assignments": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|[PaginationToken](#schemapaginationtoken)|false|none|If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results. |
|NumResults|object|false|none|none|
|Assignments|object|false|none|none|

<h2 id="tocS_ListAssignmentsForHITRequest">ListAssignmentsForHITRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistassignmentsforhitrequest"></a>
<a id="schema_ListAssignmentsForHITRequest"></a>
<a id="tocSlistassignmentsforhitrequest"></a>
<a id="tocslistassignmentsforhitrequest"></a>

```json
{
  "HITId": {},
  "NextToken": {},
  "MaxResults": 1,
  "AssignmentStatuses": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HITId|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|[ResultSize](#schemaresultsize)|false|none|none|
|AssignmentStatuses|object|false|none|none|

<h2 id="tocS_ListBonusPaymentsResponse">ListBonusPaymentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistbonuspaymentsresponse"></a>
<a id="schema_ListBonusPaymentsResponse"></a>
<a id="tocSlistbonuspaymentsresponse"></a>
<a id="tocslistbonuspaymentsresponse"></a>

```json
{
  "NumResults": {},
  "NextToken": "string",
  "BonusPayments": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NumResults|object|false|none|none|
|NextToken|[PaginationToken](#schemapaginationtoken)|false|none|If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results. |
|BonusPayments|object|false|none|none|

<h2 id="tocS_ListBonusPaymentsRequest">ListBonusPaymentsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistbonuspaymentsrequest"></a>
<a id="schema_ListBonusPaymentsRequest"></a>
<a id="tocSlistbonuspaymentsrequest"></a>
<a id="tocslistbonuspaymentsrequest"></a>

```json
{
  "HITId": {},
  "AssignmentId": {},
  "NextToken": {},
  "MaxResults": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HITId|object|false|none|none|
|AssignmentId|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|[ResultSize](#schemaresultsize)|false|none|none|

<h2 id="tocS_ListHITsResponse">ListHITsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisthitsresponse"></a>
<a id="schema_ListHITsResponse"></a>
<a id="tocSlisthitsresponse"></a>
<a id="tocslisthitsresponse"></a>

```json
{
  "NextToken": "string",
  "NumResults": {},
  "HITs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|[PaginationToken](#schemapaginationtoken)|false|none|If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results. |
|NumResults|object|false|none|none|
|HITs|object|false|none|none|

<h2 id="tocS_ListHITsRequest">ListHITsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisthitsrequest"></a>
<a id="schema_ListHITsRequest"></a>
<a id="tocSlisthitsrequest"></a>
<a id="tocslisthitsrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|[ResultSize](#schemaresultsize)|false|none|none|

<h2 id="tocS_ListHITsForQualificationTypeResponse">ListHITsForQualificationTypeResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisthitsforqualificationtyperesponse"></a>
<a id="schema_ListHITsForQualificationTypeResponse"></a>
<a id="tocSlisthitsforqualificationtyperesponse"></a>
<a id="tocslisthitsforqualificationtyperesponse"></a>

```json
{
  "NextToken": "string",
  "NumResults": {},
  "HITs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|[PaginationToken](#schemapaginationtoken)|false|none|If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results. |
|NumResults|object|false|none|none|
|HITs|object|false|none|none|

<h2 id="tocS_ListHITsForQualificationTypeRequest">ListHITsForQualificationTypeRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisthitsforqualificationtyperequest"></a>
<a id="schema_ListHITsForQualificationTypeRequest"></a>
<a id="tocSlisthitsforqualificationtyperequest"></a>
<a id="tocslisthitsforqualificationtyperequest"></a>

```json
{
  "QualificationTypeId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QualificationTypeId|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListQualificationRequestsResponse">ListQualificationRequestsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistqualificationrequestsresponse"></a>
<a id="schema_ListQualificationRequestsResponse"></a>
<a id="tocSlistqualificationrequestsresponse"></a>
<a id="tocslistqualificationrequestsresponse"></a>

```json
{
  "NumResults": {},
  "NextToken": "string",
  "QualificationRequests": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NumResults|object|false|none|none|
|NextToken|[PaginationToken](#schemapaginationtoken)|false|none|If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results. |
|QualificationRequests|object|false|none|none|

<h2 id="tocS_ListQualificationRequestsRequest">ListQualificationRequestsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistqualificationrequestsrequest"></a>
<a id="schema_ListQualificationRequestsRequest"></a>
<a id="tocSlistqualificationrequestsrequest"></a>
<a id="tocslistqualificationrequestsrequest"></a>

```json
{
  "QualificationTypeId": {},
  "NextToken": "string",
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QualificationTypeId|object|false|none|none|
|NextToken|[PaginationToken](#schemapaginationtoken)|false|none|If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results. |
|MaxResults|object|false|none|none|

<h2 id="tocS_ListQualificationTypesResponse">ListQualificationTypesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistqualificationtypesresponse"></a>
<a id="schema_ListQualificationTypesResponse"></a>
<a id="tocSlistqualificationtypesresponse"></a>
<a id="tocslistqualificationtypesresponse"></a>

```json
{
  "NumResults": {},
  "NextToken": "string",
  "QualificationTypes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NumResults|object|false|none|none|
|NextToken|[PaginationToken](#schemapaginationtoken)|false|none|If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results. |
|QualificationTypes|object|false|none|none|

<h2 id="tocS_ListQualificationTypesRequest">ListQualificationTypesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistqualificationtypesrequest"></a>
<a id="schema_ListQualificationTypesRequest"></a>
<a id="tocSlistqualificationtypesrequest"></a>
<a id="tocslistqualificationtypesrequest"></a>

```json
{
  "Query": {},
  "MustBeRequestable": {},
  "MustBeOwnedByCaller": {},
  "NextToken": "string",
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Query|object|false|none|none|
|MustBeRequestable|object|true|none|none|
|MustBeOwnedByCaller|object|false|none|none|
|NextToken|[PaginationToken](#schemapaginationtoken)|false|none|If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results. |
|MaxResults|object|false|none|none|

<h2 id="tocS_ListReviewPolicyResultsForHITResponse">ListReviewPolicyResultsForHITResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistreviewpolicyresultsforhitresponse"></a>
<a id="schema_ListReviewPolicyResultsForHITResponse"></a>
<a id="tocSlistreviewpolicyresultsforhitresponse"></a>
<a id="tocslistreviewpolicyresultsforhitresponse"></a>

```json
{
  "HITId": {},
  "AssignmentReviewPolicy": {
    "PolicyName": {},
    "Parameters": {}
  },
  "HITReviewPolicy": {
    "PolicyName": {},
    "Parameters": {}
  },
  "AssignmentReviewReport": {
    "ReviewResults": {},
    "ReviewActions": {}
  },
  "HITReviewReport": {
    "ReviewResults": {},
    "ReviewActions": {}
  },
  "NextToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HITId|object|false|none|none|
|AssignmentReviewPolicy|object|false|none|none|
|HITReviewPolicy|object|false|none|none|
|AssignmentReviewReport|object|false|none|none|
|HITReviewReport|object|false|none|none|
|NextToken|[PaginationToken](#schemapaginationtoken)|false|none|If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results. |

<h2 id="tocS_ListReviewPolicyResultsForHITRequest">ListReviewPolicyResultsForHITRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistreviewpolicyresultsforhitrequest"></a>
<a id="schema_ListReviewPolicyResultsForHITRequest"></a>
<a id="tocSlistreviewpolicyresultsforhitrequest"></a>
<a id="tocslistreviewpolicyresultsforhitrequest"></a>

```json
{
  "HITId": {},
  "PolicyLevels": {},
  "RetrieveActions": {},
  "RetrieveResults": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HITId|object|true|none|none|
|PolicyLevels|object|false|none|none|
|RetrieveActions|object|false|none|none|
|RetrieveResults|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListReviewableHITsResponse">ListReviewableHITsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistreviewablehitsresponse"></a>
<a id="schema_ListReviewableHITsResponse"></a>
<a id="tocSlistreviewablehitsresponse"></a>
<a id="tocslistreviewablehitsresponse"></a>

```json
{
  "NextToken": "string",
  "NumResults": {},
  "HITs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|[PaginationToken](#schemapaginationtoken)|false|none|If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results. |
|NumResults|object|false|none|none|
|HITs|object|false|none|none|

<h2 id="tocS_ListReviewableHITsRequest">ListReviewableHITsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistreviewablehitsrequest"></a>
<a id="schema_ListReviewableHITsRequest"></a>
<a id="tocSlistreviewablehitsrequest"></a>
<a id="tocslistreviewablehitsrequest"></a>

```json
{
  "HITTypeId": {},
  "Status": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HITTypeId|object|false|none|none|
|Status|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListWorkerBlocksResponse">ListWorkerBlocksResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistworkerblocksresponse"></a>
<a id="schema_ListWorkerBlocksResponse"></a>
<a id="tocSlistworkerblocksresponse"></a>
<a id="tocslistworkerblocksresponse"></a>

```json
{
  "NextToken": "string",
  "NumResults": {},
  "WorkerBlocks": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|[PaginationToken](#schemapaginationtoken)|false|none|If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results. |
|NumResults|object|false|none|none|
|WorkerBlocks|object|false|none|none|

<h2 id="tocS_ListWorkerBlocksRequest">ListWorkerBlocksRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistworkerblocksrequest"></a>
<a id="schema_ListWorkerBlocksRequest"></a>
<a id="tocSlistworkerblocksrequest"></a>
<a id="tocslistworkerblocksrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|[ResultSize](#schemaresultsize)|false|none|none|

<h2 id="tocS_ListWorkersWithQualificationTypeResponse">ListWorkersWithQualificationTypeResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistworkerswithqualificationtyperesponse"></a>
<a id="schema_ListWorkersWithQualificationTypeResponse"></a>
<a id="tocSlistworkerswithqualificationtyperesponse"></a>
<a id="tocslistworkerswithqualificationtyperesponse"></a>

```json
{
  "NextToken": "string",
  "NumResults": {},
  "Qualifications": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|[PaginationToken](#schemapaginationtoken)|false|none|If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results. |
|NumResults|object|false|none|none|
|Qualifications|object|false|none|none|

<h2 id="tocS_ListWorkersWithQualificationTypeRequest">ListWorkersWithQualificationTypeRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistworkerswithqualificationtyperequest"></a>
<a id="schema_ListWorkersWithQualificationTypeRequest"></a>
<a id="tocSlistworkerswithqualificationtyperequest"></a>
<a id="tocslistworkerswithqualificationtyperequest"></a>

```json
{
  "QualificationTypeId": {},
  "Status": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QualificationTypeId|object|true|none|none|
|Status|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_NotifyWorkersResponse">NotifyWorkersResponse</h2>
<!-- backwards compatibility -->
<a id="schemanotifyworkersresponse"></a>
<a id="schema_NotifyWorkersResponse"></a>
<a id="tocSnotifyworkersresponse"></a>
<a id="tocsnotifyworkersresponse"></a>

```json
{
  "NotifyWorkersFailureStatuses": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotifyWorkersFailureStatuses|object|false|none|none|

<h2 id="tocS_NotifyWorkersRequest">NotifyWorkersRequest</h2>
<!-- backwards compatibility -->
<a id="schemanotifyworkersrequest"></a>
<a id="schema_NotifyWorkersRequest"></a>
<a id="tocSnotifyworkersrequest"></a>
<a id="tocsnotifyworkersrequest"></a>

```json
{
  "Subject": {},
  "MessageText": {},
  "WorkerIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Subject|object|true|none|none|
|MessageText|object|true|none|none|
|WorkerIds|object|true|none|none|

<h2 id="tocS_RejectAssignmentResponse">RejectAssignmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemarejectassignmentresponse"></a>
<a id="schema_RejectAssignmentResponse"></a>
<a id="tocSrejectassignmentresponse"></a>
<a id="tocsrejectassignmentresponse"></a>

```json
{}
```

<h2 id="tocS_RejectAssignmentRequest">RejectAssignmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemarejectassignmentrequest"></a>
<a id="schema_RejectAssignmentRequest"></a>
<a id="tocSrejectassignmentrequest"></a>
<a id="tocsrejectassignmentrequest"></a>

```json
{
  "AssignmentId": {},
  "RequesterFeedback": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssignmentId|object|true|none|none|
|RequesterFeedback|object|true|none|none|

<h2 id="tocS_RejectQualificationRequestResponse">RejectQualificationRequestResponse</h2>
<!-- backwards compatibility -->
<a id="schemarejectqualificationrequestresponse"></a>
<a id="schema_RejectQualificationRequestResponse"></a>
<a id="tocSrejectqualificationrequestresponse"></a>
<a id="tocsrejectqualificationrequestresponse"></a>

```json
{}
```

<h2 id="tocS_RejectQualificationRequestRequest">RejectQualificationRequestRequest</h2>
<!-- backwards compatibility -->
<a id="schemarejectqualificationrequestrequest"></a>
<a id="schema_RejectQualificationRequestRequest"></a>
<a id="tocSrejectqualificationrequestrequest"></a>
<a id="tocsrejectqualificationrequestrequest"></a>

```json
{
  "QualificationRequestId": {},
  "Reason": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QualificationRequestId|object|true|none|none|
|Reason|object|false|none|none|

<h2 id="tocS_SendBonusResponse">SendBonusResponse</h2>
<!-- backwards compatibility -->
<a id="schemasendbonusresponse"></a>
<a id="schema_SendBonusResponse"></a>
<a id="tocSsendbonusresponse"></a>
<a id="tocssendbonusresponse"></a>

```json
{}
```

<h2 id="tocS_SendBonusRequest">SendBonusRequest</h2>
<!-- backwards compatibility -->
<a id="schemasendbonusrequest"></a>
<a id="schema_SendBonusRequest"></a>
<a id="tocSsendbonusrequest"></a>
<a id="tocssendbonusrequest"></a>

```json
{
  "WorkerId": {},
  "BonusAmount": {},
  "AssignmentId": {},
  "Reason": {},
  "UniqueRequestToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkerId|object|true|none|none|
|BonusAmount|object|true|none|none|
|AssignmentId|object|true|none|none|
|Reason|object|true|none|none|
|UniqueRequestToken|object|false|none|none|

<h2 id="tocS_SendTestEventNotificationResponse">SendTestEventNotificationResponse</h2>
<!-- backwards compatibility -->
<a id="schemasendtesteventnotificationresponse"></a>
<a id="schema_SendTestEventNotificationResponse"></a>
<a id="tocSsendtesteventnotificationresponse"></a>
<a id="tocssendtesteventnotificationresponse"></a>

```json
{}
```

<h2 id="tocS_SendTestEventNotificationRequest">SendTestEventNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemasendtesteventnotificationrequest"></a>
<a id="schema_SendTestEventNotificationRequest"></a>
<a id="tocSsendtesteventnotificationrequest"></a>
<a id="tocssendtesteventnotificationrequest"></a>

```json
{
  "Notification": {
    "Destination": {},
    "Transport": {},
    "Version": {},
    "EventTypes": {}
  },
  "TestEventType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Notification|object|true|none|none|
|TestEventType|object|true|none|none|

<h2 id="tocS_UpdateExpirationForHITResponse">UpdateExpirationForHITResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateexpirationforhitresponse"></a>
<a id="schema_UpdateExpirationForHITResponse"></a>
<a id="tocSupdateexpirationforhitresponse"></a>
<a id="tocsupdateexpirationforhitresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateExpirationForHITRequest">UpdateExpirationForHITRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateexpirationforhitrequest"></a>
<a id="schema_UpdateExpirationForHITRequest"></a>
<a id="tocSupdateexpirationforhitrequest"></a>
<a id="tocsupdateexpirationforhitrequest"></a>

```json
{
  "HITId": {},
  "ExpireAt": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HITId|object|true|none|none|
|ExpireAt|object|true|none|none|

<h2 id="tocS_UpdateHITReviewStatusResponse">UpdateHITReviewStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatehitreviewstatusresponse"></a>
<a id="schema_UpdateHITReviewStatusResponse"></a>
<a id="tocSupdatehitreviewstatusresponse"></a>
<a id="tocsupdatehitreviewstatusresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateHITReviewStatusRequest">UpdateHITReviewStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatehitreviewstatusrequest"></a>
<a id="schema_UpdateHITReviewStatusRequest"></a>
<a id="tocSupdatehitreviewstatusrequest"></a>
<a id="tocsupdatehitreviewstatusrequest"></a>

```json
{
  "HITId": {},
  "Revert": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HITId|object|true|none|none|
|Revert|object|false|none|none|

<h2 id="tocS_UpdateHITTypeOfHITResponse">UpdateHITTypeOfHITResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatehittypeofhitresponse"></a>
<a id="schema_UpdateHITTypeOfHITResponse"></a>
<a id="tocSupdatehittypeofhitresponse"></a>
<a id="tocsupdatehittypeofhitresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateHITTypeOfHITRequest">UpdateHITTypeOfHITRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatehittypeofhitrequest"></a>
<a id="schema_UpdateHITTypeOfHITRequest"></a>
<a id="tocSupdatehittypeofhitrequest"></a>
<a id="tocsupdatehittypeofhitrequest"></a>

```json
{
  "HITId": {},
  "HITTypeId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HITId|object|true|none|none|
|HITTypeId|object|true|none|none|

<h2 id="tocS_UpdateNotificationSettingsResponse">UpdateNotificationSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatenotificationsettingsresponse"></a>
<a id="schema_UpdateNotificationSettingsResponse"></a>
<a id="tocSupdatenotificationsettingsresponse"></a>
<a id="tocsupdatenotificationsettingsresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateNotificationSettingsRequest">UpdateNotificationSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatenotificationsettingsrequest"></a>
<a id="schema_UpdateNotificationSettingsRequest"></a>
<a id="tocSupdatenotificationsettingsrequest"></a>
<a id="tocsupdatenotificationsettingsrequest"></a>

```json
{
  "HITTypeId": {},
  "Notification": {
    "Destination": {},
    "Transport": {},
    "Version": {},
    "EventTypes": {}
  },
  "Active": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HITTypeId|object|true|none|none|
|Notification|object|false|none|none|
|Active|object|false|none|none|

<h2 id="tocS_UpdateQualificationTypeResponse">UpdateQualificationTypeResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatequalificationtyperesponse"></a>
<a id="schema_UpdateQualificationTypeResponse"></a>
<a id="tocSupdatequalificationtyperesponse"></a>
<a id="tocsupdatequalificationtyperesponse"></a>

```json
{
  "QualificationType": {
    "QualificationTypeId": {},
    "CreationTime": {},
    "Name": {},
    "Description": {},
    "Keywords": {},
    "QualificationTypeStatus": {},
    "Test": {},
    "TestDurationInSeconds": {},
    "AnswerKey": {},
    "RetryDelayInSeconds": {},
    "IsRequestable": {},
    "AutoGranted": {},
    "AutoGrantedValue": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QualificationType|object|false|none|none|

<h2 id="tocS_UpdateQualificationTypeRequest">UpdateQualificationTypeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatequalificationtyperequest"></a>
<a id="schema_UpdateQualificationTypeRequest"></a>
<a id="tocSupdatequalificationtyperequest"></a>
<a id="tocsupdatequalificationtyperequest"></a>

```json
{
  "QualificationTypeId": {},
  "Description": {},
  "QualificationTypeStatus": {},
  "Test": {},
  "AnswerKey": {},
  "TestDurationInSeconds": {},
  "RetryDelayInSeconds": {},
  "AutoGranted": {},
  "AutoGrantedValue": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QualificationTypeId|object|true|none|none|
|Description|object|false|none|none|
|QualificationTypeStatus|object|false|none|none|
|Test|object|false|none|none|
|AnswerKey|object|false|none|none|
|TestDurationInSeconds|object|false|none|none|
|RetryDelayInSeconds|object|false|none|none|
|AutoGranted|object|false|none|none|
|AutoGrantedValue|object|false|none|none|

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
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

<h2 id="tocS_EntityId">EntityId</h2>
<!-- backwards compatibility -->
<a id="schemaentityid"></a>
<a id="schema_EntityId"></a>
<a id="tocSentityid"></a>
<a id="tocsentityid"></a>

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

<h2 id="tocS_CustomerId">CustomerId</h2>
<!-- backwards compatibility -->
<a id="schemacustomerid"></a>
<a id="schema_CustomerId"></a>
<a id="tocScustomerid"></a>
<a id="tocscustomerid"></a>

```json
"string"
```

<h2 id="tocS_AssignmentStatus">AssignmentStatus</h2>
<!-- backwards compatibility -->
<a id="schemaassignmentstatus"></a>
<a id="schema_AssignmentStatus"></a>
<a id="tocSassignmentstatus"></a>
<a id="tocsassignmentstatus"></a>

```json
"Submitted"
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

<h2 id="tocS_Assignment">Assignment</h2>
<!-- backwards compatibility -->
<a id="schemaassignment"></a>
<a id="schema_Assignment"></a>
<a id="tocSassignment"></a>
<a id="tocsassignment"></a>

```json
{
  "AssignmentId": {},
  "WorkerId": {},
  "HITId": {},
  "AssignmentStatus": {},
  "AutoApprovalTime": {},
  "AcceptTime": {},
  "SubmitTime": {},
  "ApprovalTime": {},
  "RejectionTime": {},
  "Deadline": {},
  "Answer": {},
  "RequesterFeedback": {}
}
```

 The Assignment data structure represents a single assignment of a HIT to a Worker. The assignment tracks the Worker's efforts to complete the HIT, and contains the results for later retrieval.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssignmentId|object|false|none|none|
|WorkerId|object|false|none|none|
|HITId|object|false|none|none|
|AssignmentStatus|object|false|none|none|
|AutoApprovalTime|object|false|none|none|
|AcceptTime|object|false|none|none|
|SubmitTime|object|false|none|none|
|ApprovalTime|object|false|none|none|
|RejectionTime|object|false|none|none|
|Deadline|object|false|none|none|
|Answer|object|false|none|none|
|RequesterFeedback|object|false|none|none|

<h2 id="tocS_AssignmentList">AssignmentList</h2>
<!-- backwards compatibility -->
<a id="schemaassignmentlist"></a>
<a id="schema_AssignmentList"></a>
<a id="tocSassignmentlist"></a>
<a id="tocsassignmentlist"></a>

```json
[
  {
    "AssignmentId": {},
    "WorkerId": {},
    "HITId": {},
    "AssignmentStatus": {},
    "AutoApprovalTime": {},
    "AcceptTime": {},
    "SubmitTime": {},
    "ApprovalTime": {},
    "RejectionTime": {},
    "Deadline": {},
    "Answer": {},
    "RequesterFeedback": {}
  }
]
```

<h2 id="tocS_AssignmentStatusList">AssignmentStatusList</h2>
<!-- backwards compatibility -->
<a id="schemaassignmentstatuslist"></a>
<a id="schema_AssignmentStatusList"></a>
<a id="tocSassignmentstatuslist"></a>
<a id="tocsassignmentstatuslist"></a>

```json
[
  "Submitted"
]
```

<h2 id="tocS_CurrencyAmount">CurrencyAmount</h2>
<!-- backwards compatibility -->
<a id="schemacurrencyamount"></a>
<a id="schema_CurrencyAmount"></a>
<a id="tocScurrencyamount"></a>
<a id="tocscurrencyamount"></a>

```json
"string"
```

A string representing a currency amount.

<h2 id="tocS_BonusPayment">BonusPayment</h2>
<!-- backwards compatibility -->
<a id="schemabonuspayment"></a>
<a id="schema_BonusPayment"></a>
<a id="tocSbonuspayment"></a>
<a id="tocsbonuspayment"></a>

```json
{
  "WorkerId": {},
  "BonusAmount": "string",
  "AssignmentId": {},
  "Reason": {},
  "GrantTime": {}
}
```

An object representing a Bonus payment paid to a Worker.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkerId|object|false|none|none|
|BonusAmount|[CurrencyAmount](#schemacurrencyamount)|false|none|A string representing a currency amount.|
|AssignmentId|object|false|none|none|
|Reason|object|false|none|none|
|GrantTime|object|false|none|none|

<h2 id="tocS_BonusPaymentList">BonusPaymentList</h2>
<!-- backwards compatibility -->
<a id="schemabonuspaymentlist"></a>
<a id="schema_BonusPaymentList"></a>
<a id="tocSbonuspaymentlist"></a>
<a id="tocsbonuspaymentlist"></a>

```json
[
  {
    "WorkerId": {},
    "BonusAmount": "string",
    "AssignmentId": {},
    "Reason": {},
    "GrantTime": {}
  }
]
```

<h2 id="tocS_Comparator">Comparator</h2>
<!-- backwards compatibility -->
<a id="schemacomparator"></a>
<a id="schema_Comparator"></a>
<a id="tocScomparator"></a>
<a id="tocscomparator"></a>

```json
"LessThan"
```

<h2 id="tocS_CountryParameters">CountryParameters</h2>
<!-- backwards compatibility -->
<a id="schemacountryparameters"></a>
<a id="schema_CountryParameters"></a>
<a id="tocScountryparameters"></a>
<a id="tocscountryparameters"></a>

```json
"st"
```

<h2 id="tocS_IdempotencyToken">IdempotencyToken</h2>
<!-- backwards compatibility -->
<a id="schemaidempotencytoken"></a>
<a id="schema_IdempotencyToken"></a>
<a id="tocSidempotencytoken"></a>
<a id="tocsidempotencytoken"></a>

```json
"string"
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

<h2 id="tocS_QualificationRequirementList">QualificationRequirementList</h2>
<!-- backwards compatibility -->
<a id="schemaqualificationrequirementlist"></a>
<a id="schema_QualificationRequirementList"></a>
<a id="tocSqualificationrequirementlist"></a>
<a id="tocsqualificationrequirementlist"></a>

```json
[
  {
    "QualificationTypeId": {},
    "Comparator": {},
    "IntegerValues": {},
    "LocaleValues": {},
    "RequiredToPreview": {},
    "ActionsGuarded": {}
  }
]
```

<h2 id="tocS_ReviewPolicy">ReviewPolicy</h2>
<!-- backwards compatibility -->
<a id="schemareviewpolicy"></a>
<a id="schema_ReviewPolicy"></a>
<a id="tocSreviewpolicy"></a>
<a id="tocsreviewpolicy"></a>

```json
{
  "PolicyName": {},
  "Parameters": {}
}
```

 HIT Review Policy data structures represent HIT review policies, which you specify when you create a HIT.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyName|object|true|none|none|
|Parameters|object|false|none|none|

<h2 id="tocS_HITLayoutParameterList">HITLayoutParameterList</h2>
<!-- backwards compatibility -->
<a id="schemahitlayoutparameterlist"></a>
<a id="schema_HITLayoutParameterList"></a>
<a id="tocShitlayoutparameterlist"></a>
<a id="tocshitlayoutparameterlist"></a>

```json
[
  {
    "Name": {},
    "Value": {}
  }
]
```

<h2 id="tocS_HIT">HIT</h2>
<!-- backwards compatibility -->
<a id="schemahit"></a>
<a id="schema_HIT"></a>
<a id="tocShit"></a>
<a id="tocshit"></a>

```json
{
  "HITId": {},
  "HITTypeId": {},
  "HITGroupId": {},
  "HITLayoutId": {},
  "CreationTime": {},
  "Title": {},
  "Description": {},
  "Question": {},
  "Keywords": {},
  "HITStatus": {},
  "MaxAssignments": {},
  "Reward": "string",
  "AutoApprovalDelayInSeconds": {},
  "Expiration": {},
  "AssignmentDurationInSeconds": {},
  "RequesterAnnotation": {},
  "QualificationRequirements": {},
  "HITReviewStatus": {},
  "NumberOfAssignmentsPending": {},
  "NumberOfAssignmentsAvailable": {},
  "NumberOfAssignmentsCompleted": {}
}
```

 The HIT data structure represents a single HIT, including all the information necessary for a Worker to accept and complete the HIT.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HITId|object|false|none|none|
|HITTypeId|object|false|none|none|
|HITGroupId|object|false|none|none|
|HITLayoutId|object|false|none|none|
|CreationTime|object|false|none|none|
|Title|object|false|none|none|
|Description|object|false|none|none|
|Question|object|false|none|none|
|Keywords|object|false|none|none|
|HITStatus|object|false|none|none|
|MaxAssignments|object|false|none|none|
|Reward|[CurrencyAmount](#schemacurrencyamount)|false|none|A string representing a currency amount.|
|AutoApprovalDelayInSeconds|object|false|none|none|
|Expiration|object|false|none|none|
|AssignmentDurationInSeconds|object|false|none|none|
|RequesterAnnotation|object|false|none|none|
|QualificationRequirements|object|false|none|none|
|HITReviewStatus|object|false|none|none|
|NumberOfAssignmentsPending|object|false|none|none|
|NumberOfAssignmentsAvailable|object|false|none|none|
|NumberOfAssignmentsCompleted|object|false|none|none|

<h2 id="tocS_QualificationTypeStatus">QualificationTypeStatus</h2>
<!-- backwards compatibility -->
<a id="schemaqualificationtypestatus"></a>
<a id="schema_QualificationTypeStatus"></a>
<a id="tocSqualificationtypestatus"></a>
<a id="tocsqualificationtypestatus"></a>

```json
"Active"
```

<h2 id="tocS_QualificationType">QualificationType</h2>
<!-- backwards compatibility -->
<a id="schemaqualificationtype"></a>
<a id="schema_QualificationType"></a>
<a id="tocSqualificationtype"></a>
<a id="tocsqualificationtype"></a>

```json
{
  "QualificationTypeId": {},
  "CreationTime": {},
  "Name": {},
  "Description": {},
  "Keywords": {},
  "QualificationTypeStatus": {},
  "Test": {},
  "TestDurationInSeconds": {},
  "AnswerKey": {},
  "RetryDelayInSeconds": {},
  "IsRequestable": {},
  "AutoGranted": {},
  "AutoGrantedValue": {}
}
```

 The QualificationType data structure represents a Qualification type, a description of a property of a Worker that must match the requirements of a HIT for the Worker to be able to accept the HIT. The type also describes how a Worker can obtain a Qualification of that type, such as through a Qualification test.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QualificationTypeId|object|false|none|none|
|CreationTime|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|Keywords|object|false|none|none|
|QualificationTypeStatus|object|false|none|none|
|Test|object|false|none|none|
|TestDurationInSeconds|object|false|none|none|
|AnswerKey|object|false|none|none|
|RetryDelayInSeconds|object|false|none|none|
|IsRequestable|object|false|none|none|
|AutoGranted|object|false|none|none|
|AutoGrantedValue|object|false|none|none|

<h2 id="tocS_CustomerIdList">CustomerIdList</h2>
<!-- backwards compatibility -->
<a id="schemacustomeridlist"></a>
<a id="schema_CustomerIdList"></a>
<a id="tocScustomeridlist"></a>
<a id="tocscustomeridlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_EventType">EventType</h2>
<!-- backwards compatibility -->
<a id="schemaeventtype"></a>
<a id="schema_EventType"></a>
<a id="tocSeventtype"></a>
<a id="tocseventtype"></a>

```json
"AssignmentAccepted"
```

<h2 id="tocS_EventTypeList">EventTypeList</h2>
<!-- backwards compatibility -->
<a id="schemaeventtypelist"></a>
<a id="schema_EventTypeList"></a>
<a id="tocSeventtypelist"></a>
<a id="tocseventtypelist"></a>

```json
[
  "AssignmentAccepted"
]
```

<h2 id="tocS_Qualification">Qualification</h2>
<!-- backwards compatibility -->
<a id="schemaqualification"></a>
<a id="schema_Qualification"></a>
<a id="tocSqualification"></a>
<a id="tocsqualification"></a>

```json
{
  "QualificationTypeId": {},
  "WorkerId": {},
  "GrantTime": {},
  "IntegerValue": {},
  "LocaleValue": {
    "Country": {},
    "Subdivision": {}
  },
  "Status": {}
}
```

The Qualification data structure represents a Qualification assigned to a user, including the Qualification type and the value (score).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QualificationTypeId|object|false|none|none|
|WorkerId|object|false|none|none|
|GrantTime|object|false|none|none|
|IntegerValue|object|false|none|none|
|LocaleValue|[Locale](#schemalocale)|false|none|The Locale data structure represents a geographical region or location.|
|Status|object|false|none|none|

<h2 id="tocS_HITStatus">HITStatus</h2>
<!-- backwards compatibility -->
<a id="schemahitstatus"></a>
<a id="schema_HITStatus"></a>
<a id="tocShitstatus"></a>
<a id="tocshitstatus"></a>

```json
"Assignable"
```

<h2 id="tocS_HITReviewStatus">HITReviewStatus</h2>
<!-- backwards compatibility -->
<a id="schemahitreviewstatus"></a>
<a id="schema_HITReviewStatus"></a>
<a id="tocShitreviewstatus"></a>
<a id="tocshitreviewstatus"></a>

```json
"NotReviewed"
```

<h2 id="tocS_HITAccessActions">HITAccessActions</h2>
<!-- backwards compatibility -->
<a id="schemahitaccessactions"></a>
<a id="schema_HITAccessActions"></a>
<a id="tocShitaccessactions"></a>
<a id="tocshitaccessactions"></a>

```json
"Accept"
```

<h2 id="tocS_HITLayoutParameter">HITLayoutParameter</h2>
<!-- backwards compatibility -->
<a id="schemahitlayoutparameter"></a>
<a id="schema_HITLayoutParameter"></a>
<a id="tocShitlayoutparameter"></a>
<a id="tocshitlayoutparameter"></a>

```json
{
  "Name": {},
  "Value": {}
}
```

 The HITLayoutParameter data structure defines parameter values used with a HITLayout. A HITLayout is a reusable Amazon Mechanical Turk project template used to provide Human Intelligence Task (HIT) question data for CreateHIT.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_HITList">HITList</h2>
<!-- backwards compatibility -->
<a id="schemahitlist"></a>
<a id="schema_HITList"></a>
<a id="tocShitlist"></a>
<a id="tocshitlist"></a>

```json
[
  {
    "HITId": {},
    "HITTypeId": {},
    "HITGroupId": {},
    "HITLayoutId": {},
    "CreationTime": {},
    "Title": {},
    "Description": {},
    "Question": {},
    "Keywords": {},
    "HITStatus": {},
    "MaxAssignments": {},
    "Reward": "string",
    "AutoApprovalDelayInSeconds": {},
    "Expiration": {},
    "AssignmentDurationInSeconds": {},
    "RequesterAnnotation": {},
    "QualificationRequirements": {},
    "HITReviewStatus": {},
    "NumberOfAssignmentsPending": {},
    "NumberOfAssignmentsAvailable": {},
    "NumberOfAssignmentsCompleted": {}
  }
]
```

<h2 id="tocS_IntegerList">IntegerList</h2>
<!-- backwards compatibility -->
<a id="schemaintegerlist"></a>
<a id="schema_IntegerList"></a>
<a id="tocSintegerlist"></a>
<a id="tocsintegerlist"></a>

```json
[
  0
]
```

<h2 id="tocS_PaginationToken">PaginationToken</h2>
<!-- backwards compatibility -->
<a id="schemapaginationtoken"></a>
<a id="schema_PaginationToken"></a>
<a id="tocSpaginationtoken"></a>
<a id="tocspaginationtoken"></a>

```json
"string"
```

If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.

<h2 id="tocS_ResultSize">ResultSize</h2>
<!-- backwards compatibility -->
<a id="schemaresultsize"></a>
<a id="schema_ResultSize"></a>
<a id="tocSresultsize"></a>
<a id="tocsresultsize"></a>

```json
1
```

<h2 id="tocS_QualificationRequestList">QualificationRequestList</h2>
<!-- backwards compatibility -->
<a id="schemaqualificationrequestlist"></a>
<a id="schema_QualificationRequestList"></a>
<a id="tocSqualificationrequestlist"></a>
<a id="tocsqualificationrequestlist"></a>

```json
[
  {
    "QualificationRequestId": {},
    "QualificationTypeId": {},
    "WorkerId": {},
    "Test": {},
    "Answer": {},
    "SubmitTime": {}
  }
]
```

<h2 id="tocS_QualificationTypeList">QualificationTypeList</h2>
<!-- backwards compatibility -->
<a id="schemaqualificationtypelist"></a>
<a id="schema_QualificationTypeList"></a>
<a id="tocSqualificationtypelist"></a>
<a id="tocsqualificationtypelist"></a>

```json
[
  {
    "QualificationTypeId": {},
    "CreationTime": {},
    "Name": {},
    "Description": {},
    "Keywords": {},
    "QualificationTypeStatus": {},
    "Test": {},
    "TestDurationInSeconds": {},
    "AnswerKey": {},
    "RetryDelayInSeconds": {},
    "IsRequestable": {},
    "AutoGranted": {},
    "AutoGrantedValue": {}
  }
]
```

<h2 id="tocS_ReviewPolicyLevelList">ReviewPolicyLevelList</h2>
<!-- backwards compatibility -->
<a id="schemareviewpolicylevellist"></a>
<a id="schema_ReviewPolicyLevelList"></a>
<a id="tocSreviewpolicylevellist"></a>
<a id="tocsreviewpolicylevellist"></a>

```json
[
  "Assignment"
]
```

<h2 id="tocS_ReviewReport">ReviewReport</h2>
<!-- backwards compatibility -->
<a id="schemareviewreport"></a>
<a id="schema_ReviewReport"></a>
<a id="tocSreviewreport"></a>
<a id="tocsreviewreport"></a>

```json
{
  "ReviewResults": {},
  "ReviewActions": {}
}
```

 Contains both ReviewResult and ReviewAction elements for a particular HIT.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReviewResults|object|false|none|none|
|ReviewActions|object|false|none|none|

<h2 id="tocS_ReviewableHITStatus">ReviewableHITStatus</h2>
<!-- backwards compatibility -->
<a id="schemareviewablehitstatus"></a>
<a id="schema_ReviewableHITStatus"></a>
<a id="tocSreviewablehitstatus"></a>
<a id="tocsreviewablehitstatus"></a>

```json
"Reviewable"
```

<h2 id="tocS_WorkerBlockList">WorkerBlockList</h2>
<!-- backwards compatibility -->
<a id="schemaworkerblocklist"></a>
<a id="schema_WorkerBlockList"></a>
<a id="tocSworkerblocklist"></a>
<a id="tocsworkerblocklist"></a>

```json
[
  {
    "WorkerId": {},
    "Reason": {}
  }
]
```

<h2 id="tocS_QualificationStatus">QualificationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaqualificationstatus"></a>
<a id="schema_QualificationStatus"></a>
<a id="tocSqualificationstatus"></a>
<a id="tocsqualificationstatus"></a>

```json
"Granted"
```

<h2 id="tocS_QualificationList">QualificationList</h2>
<!-- backwards compatibility -->
<a id="schemaqualificationlist"></a>
<a id="schema_QualificationList"></a>
<a id="tocSqualificationlist"></a>
<a id="tocsqualificationlist"></a>

```json
[
  {
    "QualificationTypeId": {},
    "WorkerId": {},
    "GrantTime": {},
    "IntegerValue": {},
    "LocaleValue": {
      "Country": {},
      "Subdivision": {}
    },
    "Status": {}
  }
]
```

<h2 id="tocS_Locale">Locale</h2>
<!-- backwards compatibility -->
<a id="schemalocale"></a>
<a id="schema_Locale"></a>
<a id="tocSlocale"></a>
<a id="tocslocale"></a>

```json
{
  "Country": {},
  "Subdivision": {}
}
```

The Locale data structure represents a geographical region or location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Country|object|true|none|none|
|Subdivision|object|false|none|none|

<h2 id="tocS_LocaleList">LocaleList</h2>
<!-- backwards compatibility -->
<a id="schemalocalelist"></a>
<a id="schema_LocaleList"></a>
<a id="tocSlocalelist"></a>
<a id="tocslocalelist"></a>

```json
[
  {
    "Country": {},
    "Subdivision": {}
  }
]
```

<h2 id="tocS_NotificationTransport">NotificationTransport</h2>
<!-- backwards compatibility -->
<a id="schemanotificationtransport"></a>
<a id="schema_NotificationTransport"></a>
<a id="tocSnotificationtransport"></a>
<a id="tocsnotificationtransport"></a>

```json
"Email"
```

<h2 id="tocS_NotificationSpecification">NotificationSpecification</h2>
<!-- backwards compatibility -->
<a id="schemanotificationspecification"></a>
<a id="schema_NotificationSpecification"></a>
<a id="tocSnotificationspecification"></a>
<a id="tocsnotificationspecification"></a>

```json
{
  "Destination": {},
  "Transport": {},
  "Version": {},
  "EventTypes": {}
}
```

The NotificationSpecification data structure describes a HIT event notification for a HIT type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Destination|object|true|none|none|
|Transport|object|true|none|none|
|Version|object|true|none|none|
|EventTypes|object|true|none|none|

<h2 id="tocS_NotifyWorkersFailureCode">NotifyWorkersFailureCode</h2>
<!-- backwards compatibility -->
<a id="schemanotifyworkersfailurecode"></a>
<a id="schema_NotifyWorkersFailureCode"></a>
<a id="tocSnotifyworkersfailurecode"></a>
<a id="tocsnotifyworkersfailurecode"></a>

```json
"SoftFailure"
```

<h2 id="tocS_NotifyWorkersFailureStatus">NotifyWorkersFailureStatus</h2>
<!-- backwards compatibility -->
<a id="schemanotifyworkersfailurestatus"></a>
<a id="schema_NotifyWorkersFailureStatus"></a>
<a id="tocSnotifyworkersfailurestatus"></a>
<a id="tocsnotifyworkersfailurestatus"></a>

```json
{
  "NotifyWorkersFailureCode": {},
  "NotifyWorkersFailureMessage": {},
  "WorkerId": {}
}
```

 When MTurk encounters an issue with notifying the Workers you specified, it returns back this object with failure details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotifyWorkersFailureCode|object|false|none|none|
|NotifyWorkersFailureMessage|object|false|none|none|
|WorkerId|object|false|none|none|

<h2 id="tocS_NotifyWorkersFailureStatusList">NotifyWorkersFailureStatusList</h2>
<!-- backwards compatibility -->
<a id="schemanotifyworkersfailurestatuslist"></a>
<a id="schema_NotifyWorkersFailureStatusList"></a>
<a id="tocSnotifyworkersfailurestatuslist"></a>
<a id="tocsnotifyworkersfailurestatuslist"></a>

```json
[
  {
    "NotifyWorkersFailureCode": {},
    "NotifyWorkersFailureMessage": {},
    "WorkerId": {}
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

<h2 id="tocS_ParameterMapEntry">ParameterMapEntry</h2>
<!-- backwards compatibility -->
<a id="schemaparametermapentry"></a>
<a id="schema_ParameterMapEntry"></a>
<a id="tocSparametermapentry"></a>
<a id="tocsparametermapentry"></a>

```json
{
  "Key": {},
  "Values": {}
}
```

 This data structure is the data type for the AnswerKey parameter of the ScoreMyKnownAnswers/2011-09-01 Review Policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Values|object|false|none|none|

<h2 id="tocS_ParameterMapEntryList">ParameterMapEntryList</h2>
<!-- backwards compatibility -->
<a id="schemaparametermapentrylist"></a>
<a id="schema_ParameterMapEntryList"></a>
<a id="tocSparametermapentrylist"></a>
<a id="tocsparametermapentrylist"></a>

```json
[
  {
    "Key": {},
    "Values": {}
  }
]
```

<h2 id="tocS_PolicyParameter">PolicyParameter</h2>
<!-- backwards compatibility -->
<a id="schemapolicyparameter"></a>
<a id="schema_PolicyParameter"></a>
<a id="tocSpolicyparameter"></a>
<a id="tocspolicyparameter"></a>

```json
{
  "Key": {},
  "Values": {},
  "MapEntries": {}
}
```

 Name of the parameter from the Review policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Values|object|false|none|none|
|MapEntries|object|false|none|none|

<h2 id="tocS_PolicyParameterList">PolicyParameterList</h2>
<!-- backwards compatibility -->
<a id="schemapolicyparameterlist"></a>
<a id="schema_PolicyParameterList"></a>
<a id="tocSpolicyparameterlist"></a>
<a id="tocspolicyparameterlist"></a>

```json
[
  {
    "Key": {},
    "Values": {},
    "MapEntries": {}
  }
]
```

<h2 id="tocS_QualificationRequest">QualificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaqualificationrequest"></a>
<a id="schema_QualificationRequest"></a>
<a id="tocSqualificationrequest"></a>
<a id="tocsqualificationrequest"></a>

```json
{
  "QualificationRequestId": {},
  "QualificationTypeId": {},
  "WorkerId": {},
  "Test": {},
  "Answer": {},
  "SubmitTime": {}
}
```

 The QualificationRequest data structure represents a request a Worker has made for a Qualification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QualificationRequestId|object|false|none|none|
|QualificationTypeId|object|false|none|none|
|WorkerId|object|false|none|none|
|Test|object|false|none|none|
|Answer|object|false|none|none|
|SubmitTime|object|false|none|none|

<h2 id="tocS_QualificationRequirement">QualificationRequirement</h2>
<!-- backwards compatibility -->
<a id="schemaqualificationrequirement"></a>
<a id="schema_QualificationRequirement"></a>
<a id="tocSqualificationrequirement"></a>
<a id="tocsqualificationrequirement"></a>

```json
{
  "QualificationTypeId": {},
  "Comparator": {},
  "IntegerValues": {},
  "LocaleValues": {},
  "RequiredToPreview": {},
  "ActionsGuarded": {}
}
```

 The QualificationRequirement data structure describes a Qualification that a Worker must have before the Worker is allowed to accept a HIT. A requirement may optionally state that a Worker must have the Qualification in order to preview the HIT, or see the HIT in search results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QualificationTypeId|object|true|none|none|
|Comparator|object|true|none|none|
|IntegerValues|object|false|none|none|
|LocaleValues|object|false|none|none|
|RequiredToPreview|object|false|none|none|
|ActionsGuarded|object|false|none|none|

<h2 id="tocS_ReviewActionStatus">ReviewActionStatus</h2>
<!-- backwards compatibility -->
<a id="schemareviewactionstatus"></a>
<a id="schema_ReviewActionStatus"></a>
<a id="tocSreviewactionstatus"></a>
<a id="tocsreviewactionstatus"></a>

```json
"Intended"
```

<h2 id="tocS_ReviewActionDetail">ReviewActionDetail</h2>
<!-- backwards compatibility -->
<a id="schemareviewactiondetail"></a>
<a id="schema_ReviewActionDetail"></a>
<a id="tocSreviewactiondetail"></a>
<a id="tocsreviewactiondetail"></a>

```json
{
  "ActionId": {},
  "ActionName": {},
  "TargetId": {},
  "TargetType": {},
  "Status": {},
  "CompleteTime": {},
  "Result": {},
  "ErrorCode": {}
}
```

 Both the AssignmentReviewReport and the HITReviewReport elements contains the ReviewActionDetail data structure. This structure is returned multiple times for each action specified in the Review Policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActionId|object|false|none|none|
|ActionName|object|false|none|none|
|TargetId|object|false|none|none|
|TargetType|object|false|none|none|
|Status|object|false|none|none|
|CompleteTime|object|false|none|none|
|Result|object|false|none|none|
|ErrorCode|object|false|none|none|

<h2 id="tocS_ReviewActionDetailList">ReviewActionDetailList</h2>
<!-- backwards compatibility -->
<a id="schemareviewactiondetaillist"></a>
<a id="schema_ReviewActionDetailList"></a>
<a id="tocSreviewactiondetaillist"></a>
<a id="tocsreviewactiondetaillist"></a>

```json
[
  {
    "ActionId": {},
    "ActionName": {},
    "TargetId": {},
    "TargetType": {},
    "Status": {},
    "CompleteTime": {},
    "Result": {},
    "ErrorCode": {}
  }
]
```

<h2 id="tocS_ReviewPolicyLevel">ReviewPolicyLevel</h2>
<!-- backwards compatibility -->
<a id="schemareviewpolicylevel"></a>
<a id="schema_ReviewPolicyLevel"></a>
<a id="tocSreviewpolicylevel"></a>
<a id="tocsreviewpolicylevel"></a>

```json
"Assignment"
```

<h2 id="tocS_ReviewResultDetailList">ReviewResultDetailList</h2>
<!-- backwards compatibility -->
<a id="schemareviewresultdetaillist"></a>
<a id="schema_ReviewResultDetailList"></a>
<a id="tocSreviewresultdetaillist"></a>
<a id="tocsreviewresultdetaillist"></a>

```json
[
  {
    "ActionId": {},
    "SubjectId": {},
    "SubjectType": {},
    "QuestionId": {},
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_ReviewResultDetail">ReviewResultDetail</h2>
<!-- backwards compatibility -->
<a id="schemareviewresultdetail"></a>
<a id="schema_ReviewResultDetail"></a>
<a id="tocSreviewresultdetail"></a>
<a id="tocsreviewresultdetail"></a>

```json
{
  "ActionId": {},
  "SubjectId": {},
  "SubjectType": {},
  "QuestionId": {},
  "Key": {},
  "Value": {}
}
```

 This data structure is returned multiple times for each result specified in the Review Policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActionId|object|false|none|none|
|SubjectId|object|false|none|none|
|SubjectType|object|false|none|none|
|QuestionId|object|false|none|none|
|Key|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_WorkerBlock">WorkerBlock</h2>
<!-- backwards compatibility -->
<a id="schemaworkerblock"></a>
<a id="schema_WorkerBlock"></a>
<a id="tocSworkerblock"></a>
<a id="tocsworkerblock"></a>

```json
{
  "WorkerId": {},
  "Reason": {}
}
```

 The WorkerBlock data structure represents a Worker who has been blocked. It has two elements: the WorkerId and the Reason for the block.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkerId|object|false|none|none|
|Reason|object|false|none|none|
