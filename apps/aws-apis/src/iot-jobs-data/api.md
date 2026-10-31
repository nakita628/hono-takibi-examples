<h1 id="aws-iot-jobs-data-plane">AWS IoT Jobs Data Plane v2017-09-29</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>AWS IoT Jobs is a service that allows you to define a set of jobs — remote operations that are sent to and executed on one or more devices connected to AWS IoT. For example, you can define a job that instructs a set of devices to download and install application or firmware updates, reboot, rotate certificates, or perform remote troubleshooting operations.</p> <p> To create a job, you make a job document which is a description of the remote operations to be performed, and you specify a list of targets that should perform the operations. The targets can be individual things, thing groups or both.</p> <p> AWS IoT Jobs sends a message to inform the targets that a job is available. The target starts the execution of the job by downloading the job document, performing the operations it specifies, and reporting its progress to AWS IoT. The Jobs service provides commands to track the progress of a job on a specific target and for all the targets of the job</p>

Base URLs:

* <a href="http://data.jobs.iot.us-east-1.amazonaws.com">http://data.jobs.iot.us-east-1.amazonaws.com</a> - The AWS IoT Jobs Data Plane multi-region endpoint

* <a href="https://data.jobs.iot.us-east-1.amazonaws.com">https://data.jobs.iot.us-east-1.amazonaws.com</a> - The AWS IoT Jobs Data Plane multi-region endpoint

* <a href="http://data.jobs.iot.cn-north-1.amazonaws.com.cn">http://data.jobs.iot.cn-north-1.amazonaws.com.cn</a> - The AWS IoT Jobs Data Plane endpoint for China (Beijing) and China (Ningxia)

* <a href="https://data.jobs.iot.cn-north-1.amazonaws.com.cn">https://data.jobs.iot.cn-north-1.amazonaws.com.cn</a> - The AWS IoT Jobs Data Plane endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/iot/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-iot-jobs-data-plane-default">Default</h1>

## DescribeJobExecution

<a id="opIdDescribeJobExecution"></a>

> Code samples

```bash
curl https://iot-jobs-data.us-east-1.amazonaws.com/things/string/jobs/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /things/{thingName}/jobs/{jobId}`

Gets details of a job execution.

<h3 id="describejobexecution-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|The unique identifier assigned to this job when it was created.|
|thingName|path|string|true|The thing name associated with the device the job execution is running on.|
|includeJobDocument|query|boolean|false|Optional. When set to true, the response contains the job document. The default is false.|
|executionNumber|query|integer|false|Optional. A number that identifies a particular job execution on a particular device. If not specified, the latest job execution is returned.|
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
  "execution": {
    "jobId": {},
    "thingName": {},
    "status": {},
    "statusDetails": {
      "property1": "string",
      "property2": "string"
    },
    "queuedAt": {},
    "startedAt": {},
    "lastUpdatedAt": {},
    "approximateSecondsBeforeTimedOut": {},
    "versionNumber": {},
    "executionNumber": {},
    "jobDocument": {}
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

<h3 id="describejobexecution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeJobExecutionResponse](#schemadescribejobexecutionresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|CertificateValidationException|[CertificateValidationException](#schemacertificatevalidationexception)|
|485|485|TerminalStateException|[TerminalStateException](#schematerminalstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateJobExecution

<a id="opIdUpdateJobExecution"></a>

> Code samples

```bash
curl https://iot-jobs-data.us-east-1.amazonaws.com/things/string/jobs/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "status": "QUEUED",
    "statusDetails": {
      "property1": "string",
      "property2": "string"
    },
    "stepTimeoutInMinutes": 0,
    "expectedVersion": 0,
    "includeJobExecutionState": true,
    "includeJobDocument": true,
    "executionNumber": 0
  }'
```

`POST /things/{thingName}/jobs/{jobId}`

Updates the status of a job execution.

> Body parameter

```json
{
  "status": "QUEUED",
  "statusDetails": {
    "property1": "string",
    "property2": "string"
  },
  "stepTimeoutInMinutes": 0,
  "expectedVersion": 0,
  "includeJobExecutionState": true,
  "includeJobDocument": true,
  "executionNumber": 0
}
```

<h3 id="updatejobexecution-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|The unique identifier assigned to this job when it was created.|
|thingName|path|string|true|The name of the thing associated with the device.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» status|body|string|true|The new status for the job execution (IN_PROGRESS, FAILED, SUCCESS, or REJECTED). This must be specified on every update.|
|» statusDetails|body|object|false| Optional. A collection of name/value pairs that describe the status of the job execution. If not specified, the statusDetails are unchanged.|
|» » **additionalProperties**|body|[DetailsValue](#schemadetailsvalue)|false|none|
|» stepTimeoutInMinutes|body|integer|false|Specifies the amount of time this device has to finish execution of this job. If the job execution status is not set to a terminal state before this timer expires, or before the timer is reset (by again calling <code>UpdateJobExecution</code>, setting the status to <code>IN_PROGRESS</code> and specifying a new timeout value in this field) the job execution status will be automatically set to <code>TIMED_OUT</code>. Note that setting or resetting this timeout has no effect on that job execution timeout which may have been specified when the job was created (<code>CreateJob</code> using field <code>timeoutConfig</code>).|
|» expectedVersion|body|integer|false|Optional. The expected current version of the job execution. Each time you update the job execution, its version is incremented. If the version of the job execution stored in Jobs does not match, the update is rejected with a VersionMismatch error, and an ErrorResponse that contains the current job execution status data is returned. (This makes it unnecessary to perform a separate DescribeJobExecution request in order to obtain the job execution status data.)|
|» includeJobExecutionState|body|boolean|false|Optional. When included and set to true, the response contains the JobExecutionState data. The default is false.|
|» includeJobDocument|body|boolean|false|Optional. When set to true, the response contains the job document. The default is false.|
|» executionNumber|body|integer|false|Optional. A number that identifies a particular job execution on a particular device.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|QUEUED|
|» status|IN_PROGRESS|
|» status|SUCCEEDED|
|» status|FAILED|
|» status|TIMED_OUT|
|» status|REJECTED|
|» status|REMOVED|
|» status|CANCELED|

> Example responses

> 200 Response

```json
{
  "executionState": {
    "status": {},
    "statusDetails": {
      "property1": "string",
      "property2": "string"
    },
    "versionNumber": {}
  },
  "jobDocument": {}
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

<h3 id="updatejobexecution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateJobExecutionResponse](#schemaupdatejobexecutionresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|CertificateValidationException|[CertificateValidationException](#schemacertificatevalidationexception)|
|485|485|InvalidStateTransitionException|[InvalidStateTransitionException](#schemainvalidstatetransitionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetPendingJobExecutions

<a id="opIdGetPendingJobExecutions"></a>

> Code samples

```bash
curl https://iot-jobs-data.us-east-1.amazonaws.com/things/string/jobs \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /things/{thingName}/jobs`

Gets the list of all jobs for a thing that are not in a terminal status.

<h3 id="getpendingjobexecutions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|thingName|path|string|true|The name of the thing that is executing the job.|
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
  "inProgressJobs": {},
  "queuedJobs": {}
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

<h3 id="getpendingjobexecutions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetPendingJobExecutionsResponse](#schemagetpendingjobexecutionsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|CertificateValidationException|[CertificateValidationException](#schemacertificatevalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartNextPendingJobExecution

<a id="opIdStartNextPendingJobExecution"></a>

> Code samples

```bash
curl 'https://iot-jobs-data.us-east-1.amazonaws.com/things/string/jobs/$next' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "statusDetails": {
      "property1": "string",
      "property2": "string"
    },
    "stepTimeoutInMinutes": 0
  }'
```

`PUT /things/{thingName}/jobs/$next`

Gets and starts the next pending (status IN_PROGRESS or QUEUED) job execution for a thing.

> Body parameter

```json
{
  "statusDetails": {
    "property1": "string",
    "property2": "string"
  },
  "stepTimeoutInMinutes": 0
}
```

<h3 id="startnextpendingjobexecution-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|thingName|path|string|true|The name of the thing associated with the device.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» statusDetails|body|object|false|A collection of name/value pairs that describe the status of the job execution. If not specified, the statusDetails are unchanged.|
|» » **additionalProperties**|body|[DetailsValue](#schemadetailsvalue)|false|none|
|» stepTimeoutInMinutes|body|integer|false|Specifies the amount of time this device has to finish execution of this job. If the job execution status is not set to a terminal state before this timer expires, or before the timer is reset (by calling <code>UpdateJobExecution</code>, setting the status to <code>IN_PROGRESS</code> and specifying a new timeout value in field <code>stepTimeoutInMinutes</code>) the job execution status will be automatically set to <code>TIMED_OUT</code>. Note that setting this timeout has no effect on that job execution timeout which may have been specified when the job was created (<code>CreateJob</code> using field <code>timeoutConfig</code>).|

> Example responses

> 200 Response

```json
{
  "execution": {
    "jobId": {},
    "thingName": {},
    "status": {},
    "statusDetails": {
      "property1": "string",
      "property2": "string"
    },
    "queuedAt": {},
    "startedAt": {},
    "lastUpdatedAt": {},
    "approximateSecondsBeforeTimedOut": {},
    "versionNumber": {},
    "executionNumber": {},
    "jobDocument": {}
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

<h3 id="startnextpendingjobexecution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartNextPendingJobExecutionResponse](#schemastartnextpendingjobexecutionresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|CertificateValidationException|[CertificateValidationException](#schemacertificatevalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_DescribeJobExecutionResponse">DescribeJobExecutionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribejobexecutionresponse"></a>
<a id="schema_DescribeJobExecutionResponse"></a>
<a id="tocSdescribejobexecutionresponse"></a>
<a id="tocsdescribejobexecutionresponse"></a>

```json
{
  "execution": {
    "jobId": {},
    "thingName": {},
    "status": {},
    "statusDetails": {
      "property1": "string",
      "property2": "string"
    },
    "queuedAt": {},
    "startedAt": {},
    "lastUpdatedAt": {},
    "approximateSecondsBeforeTimedOut": {},
    "versionNumber": {},
    "executionNumber": {},
    "jobDocument": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|execution|object|false|none|none|

<h2 id="tocS_InvalidRequestException">InvalidRequestException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrequestexception"></a>
<a id="schema_InvalidRequestException"></a>
<a id="tocSinvalidrequestexception"></a>
<a id="tocsinvalidrequestexception"></a>

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

<h2 id="tocS_ThrottlingException">ThrottlingException</h2>
<!-- backwards compatibility -->
<a id="schemathrottlingexception"></a>
<a id="schema_ThrottlingException"></a>
<a id="tocSthrottlingexception"></a>
<a id="tocsthrottlingexception"></a>

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

<h2 id="tocS_CertificateValidationException">CertificateValidationException</h2>
<!-- backwards compatibility -->
<a id="schemacertificatevalidationexception"></a>
<a id="schema_CertificateValidationException"></a>
<a id="tocScertificatevalidationexception"></a>
<a id="tocscertificatevalidationexception"></a>

```json
null
```

<h2 id="tocS_TerminalStateException">TerminalStateException</h2>
<!-- backwards compatibility -->
<a id="schematerminalstateexception"></a>
<a id="schema_TerminalStateException"></a>
<a id="tocSterminalstateexception"></a>
<a id="tocsterminalstateexception"></a>

```json
null
```

<h2 id="tocS_GetPendingJobExecutionsResponse">GetPendingJobExecutionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetpendingjobexecutionsresponse"></a>
<a id="schema_GetPendingJobExecutionsResponse"></a>
<a id="tocSgetpendingjobexecutionsresponse"></a>
<a id="tocsgetpendingjobexecutionsresponse"></a>

```json
{
  "inProgressJobs": {},
  "queuedJobs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inProgressJobs|object|false|none|none|
|queuedJobs|object|false|none|none|

<h2 id="tocS_StartNextPendingJobExecutionResponse">StartNextPendingJobExecutionResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartnextpendingjobexecutionresponse"></a>
<a id="schema_StartNextPendingJobExecutionResponse"></a>
<a id="tocSstartnextpendingjobexecutionresponse"></a>
<a id="tocsstartnextpendingjobexecutionresponse"></a>

```json
{
  "execution": {
    "jobId": {},
    "thingName": {},
    "status": {},
    "statusDetails": {
      "property1": "string",
      "property2": "string"
    },
    "queuedAt": {},
    "startedAt": {},
    "lastUpdatedAt": {},
    "approximateSecondsBeforeTimedOut": {},
    "versionNumber": {},
    "executionNumber": {},
    "jobDocument": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|execution|object|false|none|none|

<h2 id="tocS_DetailsValue">DetailsValue</h2>
<!-- backwards compatibility -->
<a id="schemadetailsvalue"></a>
<a id="schema_DetailsValue"></a>
<a id="tocSdetailsvalue"></a>
<a id="tocsdetailsvalue"></a>

```json
"string"
```

<h2 id="tocS_UpdateJobExecutionResponse">UpdateJobExecutionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatejobexecutionresponse"></a>
<a id="schema_UpdateJobExecutionResponse"></a>
<a id="tocSupdatejobexecutionresponse"></a>
<a id="tocsupdatejobexecutionresponse"></a>

```json
{
  "executionState": {
    "status": {},
    "statusDetails": {
      "property1": "string",
      "property2": "string"
    },
    "versionNumber": {}
  },
  "jobDocument": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|executionState|object|false|none|none|
|jobDocument|object|false|none|none|

<h2 id="tocS_InvalidStateTransitionException">InvalidStateTransitionException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidstatetransitionexception"></a>
<a id="schema_InvalidStateTransitionException"></a>
<a id="tocSinvalidstatetransitionexception"></a>
<a id="tocsinvalidstatetransitionexception"></a>

```json
null
```

<h2 id="tocS_ApproximateSecondsBeforeTimedOut">ApproximateSecondsBeforeTimedOut</h2>
<!-- backwards compatibility -->
<a id="schemaapproximatesecondsbeforetimedout"></a>
<a id="schema_ApproximateSecondsBeforeTimedOut"></a>
<a id="tocSapproximatesecondsbeforetimedout"></a>
<a id="tocsapproximatesecondsbeforetimedout"></a>

```json
0
```

<h2 id="tocS_DescribeJobExecutionJobId">DescribeJobExecutionJobId</h2>
<!-- backwards compatibility -->
<a id="schemadescribejobexecutionjobid"></a>
<a id="schema_DescribeJobExecutionJobId"></a>
<a id="tocSdescribejobexecutionjobid"></a>
<a id="tocsdescribejobexecutionjobid"></a>

```json
"string"
```

<h2 id="tocS_ThingName">ThingName</h2>
<!-- backwards compatibility -->
<a id="schemathingname"></a>
<a id="schema_ThingName"></a>
<a id="tocSthingname"></a>
<a id="tocsthingname"></a>

```json
"string"
```

<h2 id="tocS_IncludeJobDocument">IncludeJobDocument</h2>
<!-- backwards compatibility -->
<a id="schemaincludejobdocument"></a>
<a id="schema_IncludeJobDocument"></a>
<a id="tocSincludejobdocument"></a>
<a id="tocsincludejobdocument"></a>

```json
true
```

<h2 id="tocS_ExecutionNumber">ExecutionNumber</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionnumber"></a>
<a id="schema_ExecutionNumber"></a>
<a id="tocSexecutionnumber"></a>
<a id="tocsexecutionnumber"></a>

```json
0
```

<h2 id="tocS_DescribeJobExecutionRequest">DescribeJobExecutionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribejobexecutionrequest"></a>
<a id="schema_DescribeJobExecutionRequest"></a>
<a id="tocSdescribejobexecutionrequest"></a>
<a id="tocsdescribejobexecutionrequest"></a>

```json
{}
```

<h2 id="tocS_JobExecution">JobExecution</h2>
<!-- backwards compatibility -->
<a id="schemajobexecution"></a>
<a id="schema_JobExecution"></a>
<a id="tocSjobexecution"></a>
<a id="tocsjobexecution"></a>

```json
{
  "jobId": {},
  "thingName": {},
  "status": {},
  "statusDetails": {
    "property1": "string",
    "property2": "string"
  },
  "queuedAt": {},
  "startedAt": {},
  "lastUpdatedAt": {},
  "approximateSecondsBeforeTimedOut": {},
  "versionNumber": {},
  "executionNumber": {},
  "jobDocument": {}
}
```

Contains data about a job execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobId|object|false|none|none|
|thingName|object|false|none|none|
|status|object|false|none|none|
|statusDetails|object|false|none|none|
|queuedAt|object|false|none|none|
|startedAt|object|false|none|none|
|lastUpdatedAt|object|false|none|none|
|approximateSecondsBeforeTimedOut|object|false|none|none|
|versionNumber|object|false|none|none|
|executionNumber|object|false|none|none|
|jobDocument|object|false|none|none|

<h2 id="tocS_DetailsKey">DetailsKey</h2>
<!-- backwards compatibility -->
<a id="schemadetailskey"></a>
<a id="schema_DetailsKey"></a>
<a id="tocSdetailskey"></a>
<a id="tocsdetailskey"></a>

```json
"string"
```

<h2 id="tocS_DetailsMap">DetailsMap</h2>
<!-- backwards compatibility -->
<a id="schemadetailsmap"></a>
<a id="schema_DetailsMap"></a>
<a id="tocSdetailsmap"></a>
<a id="tocsdetailsmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[DetailsValue](#schemadetailsvalue)|false|none|none|

<h2 id="tocS_ExpectedVersion">ExpectedVersion</h2>
<!-- backwards compatibility -->
<a id="schemaexpectedversion"></a>
<a id="schema_ExpectedVersion"></a>
<a id="tocSexpectedversion"></a>
<a id="tocsexpectedversion"></a>

```json
0
```

<h2 id="tocS_GetPendingJobExecutionsRequest">GetPendingJobExecutionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetpendingjobexecutionsrequest"></a>
<a id="schema_GetPendingJobExecutionsRequest"></a>
<a id="tocSgetpendingjobexecutionsrequest"></a>
<a id="tocsgetpendingjobexecutionsrequest"></a>

```json
{}
```

<h2 id="tocS_JobExecutionSummaryList">JobExecutionSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemajobexecutionsummarylist"></a>
<a id="schema_JobExecutionSummaryList"></a>
<a id="tocSjobexecutionsummarylist"></a>
<a id="tocsjobexecutionsummarylist"></a>

```json
[
  {
    "jobId": {},
    "queuedAt": {},
    "startedAt": {},
    "lastUpdatedAt": {},
    "versionNumber": {},
    "executionNumber": {}
  }
]
```

<h2 id="tocS_IncludeExecutionState">IncludeExecutionState</h2>
<!-- backwards compatibility -->
<a id="schemaincludeexecutionstate"></a>
<a id="schema_IncludeExecutionState"></a>
<a id="tocSincludeexecutionstate"></a>
<a id="tocsincludeexecutionstate"></a>

```json
true
```

<h2 id="tocS_JobDocument">JobDocument</h2>
<!-- backwards compatibility -->
<a id="schemajobdocument"></a>
<a id="schema_JobDocument"></a>
<a id="tocSjobdocument"></a>
<a id="tocsjobdocument"></a>

```json
"string"
```

<h2 id="tocS_JobId">JobId</h2>
<!-- backwards compatibility -->
<a id="schemajobid"></a>
<a id="schema_JobId"></a>
<a id="tocSjobid"></a>
<a id="tocsjobid"></a>

```json
"string"
```

<h2 id="tocS_JobExecutionStatus">JobExecutionStatus</h2>
<!-- backwards compatibility -->
<a id="schemajobexecutionstatus"></a>
<a id="schema_JobExecutionStatus"></a>
<a id="tocSjobexecutionstatus"></a>
<a id="tocsjobexecutionstatus"></a>

```json
"QUEUED"
```

<h2 id="tocS_QueuedAt">QueuedAt</h2>
<!-- backwards compatibility -->
<a id="schemaqueuedat"></a>
<a id="schema_QueuedAt"></a>
<a id="tocSqueuedat"></a>
<a id="tocsqueuedat"></a>

```json
0
```

<h2 id="tocS_StartedAt">StartedAt</h2>
<!-- backwards compatibility -->
<a id="schemastartedat"></a>
<a id="schema_StartedAt"></a>
<a id="tocSstartedat"></a>
<a id="tocsstartedat"></a>

```json
0
```

<h2 id="tocS_LastUpdatedAt">LastUpdatedAt</h2>
<!-- backwards compatibility -->
<a id="schemalastupdatedat"></a>
<a id="schema_LastUpdatedAt"></a>
<a id="tocSlastupdatedat"></a>
<a id="tocslastupdatedat"></a>

```json
0
```

<h2 id="tocS_VersionNumber">VersionNumber</h2>
<!-- backwards compatibility -->
<a id="schemaversionnumber"></a>
<a id="schema_VersionNumber"></a>
<a id="tocSversionnumber"></a>
<a id="tocsversionnumber"></a>

```json
0
```

<h2 id="tocS_JobExecutionState">JobExecutionState</h2>
<!-- backwards compatibility -->
<a id="schemajobexecutionstate"></a>
<a id="schema_JobExecutionState"></a>
<a id="tocSjobexecutionstate"></a>
<a id="tocsjobexecutionstate"></a>

```json
{
  "status": {},
  "statusDetails": {
    "property1": "string",
    "property2": "string"
  },
  "versionNumber": {}
}
```

Contains data about the state of a job execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|false|none|none|
|statusDetails|object|false|none|none|
|versionNumber|object|false|none|none|

<h2 id="tocS_JobExecutionSummary">JobExecutionSummary</h2>
<!-- backwards compatibility -->
<a id="schemajobexecutionsummary"></a>
<a id="schema_JobExecutionSummary"></a>
<a id="tocSjobexecutionsummary"></a>
<a id="tocsjobexecutionsummary"></a>

```json
{
  "jobId": {},
  "queuedAt": {},
  "startedAt": {},
  "lastUpdatedAt": {},
  "versionNumber": {},
  "executionNumber": {}
}
```

Contains a subset of information about a job execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobId|object|false|none|none|
|queuedAt|object|false|none|none|
|startedAt|object|false|none|none|
|lastUpdatedAt|object|false|none|none|
|versionNumber|object|false|none|none|
|executionNumber|object|false|none|none|

<h2 id="tocS_StepTimeoutInMinutes">StepTimeoutInMinutes</h2>
<!-- backwards compatibility -->
<a id="schemasteptimeoutinminutes"></a>
<a id="schema_StepTimeoutInMinutes"></a>
<a id="tocSsteptimeoutinminutes"></a>
<a id="tocssteptimeoutinminutes"></a>

```json
0
```

<h2 id="tocS_StartNextPendingJobExecutionRequest">StartNextPendingJobExecutionRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartnextpendingjobexecutionrequest"></a>
<a id="schema_StartNextPendingJobExecutionRequest"></a>
<a id="tocSstartnextpendingjobexecutionrequest"></a>
<a id="tocsstartnextpendingjobexecutionrequest"></a>

```json
{
  "statusDetails": {
    "property1": "string",
    "property2": "string"
  },
  "stepTimeoutInMinutes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusDetails|object|false|none|none|
|stepTimeoutInMinutes|object|false|none|none|

<h2 id="tocS_UpdateJobExecutionRequest">UpdateJobExecutionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatejobexecutionrequest"></a>
<a id="schema_UpdateJobExecutionRequest"></a>
<a id="tocSupdatejobexecutionrequest"></a>
<a id="tocsupdatejobexecutionrequest"></a>

```json
{
  "status": {},
  "statusDetails": {
    "property1": "string",
    "property2": "string"
  },
  "stepTimeoutInMinutes": {},
  "expectedVersion": {},
  "includeJobExecutionState": {},
  "includeJobDocument": {},
  "executionNumber": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|true|none|none|
|statusDetails|object|false|none|none|
|stepTimeoutInMinutes|object|false|none|none|
|expectedVersion|object|false|none|none|
|includeJobExecutionState|object|false|none|none|
|includeJobDocument|object|false|none|none|
|executionNumber|object|false|none|none|
