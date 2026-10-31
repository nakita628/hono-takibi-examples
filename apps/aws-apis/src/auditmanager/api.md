<h1 id="aws-audit-manager">AWS Audit Manager v2017-07-25</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>Welcome to the Audit Manager API reference. This guide is for developers who need detailed information about the Audit Manager API operations, data types, and errors. </p> <p>Audit Manager is a service that provides automated evidence collection so that you can continually audit your Amazon Web Services usage. You can use it to assess the effectiveness of your controls, manage risk, and simplify compliance.</p> <p>Audit Manager provides prebuilt frameworks that structure and automate assessments for a given compliance standard. Frameworks include a prebuilt collection of controls with descriptions and testing procedures. These controls are grouped according to the requirements of the specified compliance standard or regulation. You can also customize frameworks and controls to support internal audits with specific requirements. </p> <p>Use the following links to get started with the Audit Manager API:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_Operations.html">Actions</a>: An alphabetical list of all Audit Manager API operations.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_Types.html">Data types</a>: An alphabetical list of all Audit Manager data types.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/CommonParameters.html">Common parameters</a>: Parameters that all operations can use.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/CommonErrors.html">Common errors</a>: Client and server errors that all operations can return.</p> </li> </ul> <p>If you're new to Audit Manager, we recommend that you review the <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/what-is.html"> Audit Manager User Guide</a>.</p>

Base URLs:

* <a href="http://auditmanager.us-east-1.amazonaws.com">http://auditmanager.us-east-1.amazonaws.com</a> - The AWS Audit Manager multi-region endpoint

* <a href="https://auditmanager.us-east-1.amazonaws.com">https://auditmanager.us-east-1.amazonaws.com</a> - The AWS Audit Manager multi-region endpoint

* <a href="http://auditmanager.cn-north-1.amazonaws.com.cn">http://auditmanager.cn-north-1.amazonaws.com.cn</a> - The AWS Audit Manager endpoint for China (Beijing) and China (Ningxia)

* <a href="https://auditmanager.cn-north-1.amazonaws.com.cn">https://auditmanager.cn-north-1.amazonaws.com.cn</a> - The AWS Audit Manager endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/auditmanager/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-audit-manager-default">Default</h1>

## AssociateAssessmentReportEvidenceFolder

<a id="opIdAssociateAssessmentReportEvidenceFolder"></a>

> Code samples

```bash
curl https://auditmanager.us-east-1.amazonaws.com/assessments/stringstringstringstringstringstring/associateToAssessmentReport \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "evidenceFolderId": "stringstringstringstringstringstring"
  }'
```

`PUT /assessments/{assessmentId}/associateToAssessmentReport`

 Associates an evidence folder to an assessment report in an Audit Manager assessment. 

> Body parameter

```json
{
  "evidenceFolderId": "stringstringstringstringstringstring"
}
```

<h3 id="associateassessmentreportevidencefolder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assessmentId|path|string|true| The identifier for the assessment. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» evidenceFolderId|body|string|true| The identifier for the folder that the evidence is stored in. |

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

<h3 id="associateassessmentreportevidencefolder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateAssessmentReportEvidenceFolderResponse](#schemaassociateassessmentreportevidencefolderresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchAssociateAssessmentReportEvidence

<a id="opIdBatchAssociateAssessmentReportEvidence"></a>

> Code samples

```bash
curl https://auditmanager.us-east-1.amazonaws.com/assessments/stringstringstringstringstringstring/batchAssociateToAssessmentReport \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "evidenceFolderId": "stringstringstringstringstringstring",
    "evidenceIds": [
      "stringstringstringstringstringstring"
    ]
  }'
```

`PUT /assessments/{assessmentId}/batchAssociateToAssessmentReport`

 Associates a list of evidence to an assessment report in an Audit Manager assessment. 

> Body parameter

```json
{
  "evidenceFolderId": "stringstringstringstringstringstring",
  "evidenceIds": [
    "stringstringstringstringstringstring"
  ]
}
```

<h3 id="batchassociateassessmentreportevidence-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assessmentId|path|string|true| The identifier for the assessment. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» evidenceFolderId|body|string|true| The identifier for the folder that the evidence is stored in. |
|» evidenceIds|body|[[UUID](#schemauuid)]|true| The list of evidence identifiers. |

> Example responses

> 200 Response

```json
{
  "evidenceIds": {},
  "errors": {}
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

<h3 id="batchassociateassessmentreportevidence-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchAssociateAssessmentReportEvidenceResponse](#schemabatchassociateassessmentreportevidenceresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchDeleteDelegationByAssessment

<a id="opIdBatchDeleteDelegationByAssessment"></a>

> Code samples

```bash
curl https://auditmanager.us-east-1.amazonaws.com/assessments/stringstringstringstringstringstring/delegations \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "delegationIds": [
      "stringstringstringstringstringstring"
    ]
  }'
```

`PUT /assessments/{assessmentId}/delegations`

 Deletes a batch of delegations for an assessment in Audit Manager. 

> Body parameter

```json
{
  "delegationIds": [
    "stringstringstringstringstringstring"
  ]
}
```

<h3 id="batchdeletedelegationbyassessment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assessmentId|path|string|true| The identifier for the assessment. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» delegationIds|body|[[UUID](#schemauuid)]|true| The identifiers for the delegations. |

> Example responses

> 200 Response

```json
{
  "errors": {}
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

<h3 id="batchdeletedelegationbyassessment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchDeleteDelegationByAssessmentResponse](#schemabatchdeletedelegationbyassessmentresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchCreateDelegationByAssessment

<a id="opIdBatchCreateDelegationByAssessment"></a>

> Code samples

```bash
curl https://auditmanager.us-east-1.amazonaws.com/assessments/stringstringstringstringstringstring/delegations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "createDelegationRequests": [
      {
        "comment": {},
        "controlSetId": {},
        "roleArn": {},
        "roleType": {}
      }
    ]
  }'
```

`POST /assessments/{assessmentId}/delegations`

 Creates a batch of delegations for an assessment in Audit Manager. 

> Body parameter

```json
{
  "createDelegationRequests": [
    {
      "comment": {},
      "controlSetId": {},
      "roleArn": {},
      "roleType": {}
    }
  ]
}
```

<h3 id="batchcreatedelegationbyassessment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assessmentId|path|string|true| The identifier for the assessment. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» createDelegationRequests|body|[[CreateDelegationRequest](#schemacreatedelegationrequest)]|true| The API request to batch create delegations in Audit Manager. |

> Example responses

> 200 Response

```json
{
  "delegations": {},
  "errors": {}
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

<h3 id="batchcreatedelegationbyassessment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchCreateDelegationByAssessmentResponse](#schemabatchcreatedelegationbyassessmentresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchDisassociateAssessmentReportEvidence

<a id="opIdBatchDisassociateAssessmentReportEvidence"></a>

> Code samples

```bash
curl https://auditmanager.us-east-1.amazonaws.com/assessments/stringstringstringstringstringstring/batchDisassociateFromAssessmentReport \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "evidenceFolderId": "stringstringstringstringstringstring",
    "evidenceIds": [
      "stringstringstringstringstringstring"
    ]
  }'
```

`PUT /assessments/{assessmentId}/batchDisassociateFromAssessmentReport`

 Disassociates a list of evidence from an assessment report in Audit Manager. 

> Body parameter

```json
{
  "evidenceFolderId": "stringstringstringstringstringstring",
  "evidenceIds": [
    "stringstringstringstringstringstring"
  ]
}
```

<h3 id="batchdisassociateassessmentreportevidence-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assessmentId|path|string|true| The identifier for the assessment. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» evidenceFolderId|body|string|true| The identifier for the folder that the evidence is stored in. |
|» evidenceIds|body|[[UUID](#schemauuid)]|true| The list of evidence identifiers. |

> Example responses

> 200 Response

```json
{
  "evidenceIds": {},
  "errors": {}
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

<h3 id="batchdisassociateassessmentreportevidence-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchDisassociateAssessmentReportEvidenceResponse](#schemabatchdisassociateassessmentreportevidenceresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchImportEvidenceToAssessmentControl

<a id="opIdBatchImportEvidenceToAssessmentControl"></a>

> Code samples

```bash
curl https://auditmanager.us-east-1.amazonaws.com/assessments/stringstringstringstringstringstring/controlSets/string/controls/stringstringstringstringstringstring/evidence \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "manualEvidence": [
      {
        "s3ResourcePath": {}
      }
    ]
  }'
```

`POST /assessments/{assessmentId}/controlSets/{controlSetId}/controls/{controlId}/evidence`

<p>Uploads one or more pieces of evidence to a control in an Audit Manager assessment. You can upload manual evidence from any Amazon Simple Storage Service (Amazon S3) bucket by specifying the S3 URI of the evidence. </p> <p>You must upload manual evidence to your S3 bucket before you can upload it to your assessment. For instructions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">CreateBucket</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html">PutObject</a> in the <i>Amazon Simple Storage Service API Reference.</i> </p> <p>The following restrictions apply to this action:</p> <ul> <li> <p>Maximum size of an individual evidence file: 100 MB</p> </li> <li> <p>Number of daily manual evidence uploads per control: 100</p> </li> <li> <p>Supported file formats: See <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/upload-evidence.html#supported-manual-evidence-files">Supported file types for manual evidence</a> in the <i>Audit Manager User Guide</i> </p> </li> </ul> <p>For more information about Audit Manager service restrictions, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/service-quotas.html">Quotas and restrictions for Audit Manager</a>.</p>

> Body parameter

```json
{
  "manualEvidence": [
    {
      "s3ResourcePath": {}
    }
  ]
}
```

<h3 id="batchimportevidencetoassessmentcontrol-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assessmentId|path|string|true| The identifier for the assessment. |
|controlSetId|path|string|true| The identifier for the control set. |
|controlId|path|string|true| The identifier for the control. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» manualEvidence|body|[[ManualEvidence](#schemamanualevidence)]|true| The list of manual evidence objects. |

> Example responses

> 200 Response

```json
{
  "errors": {}
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

<h3 id="batchimportevidencetoassessmentcontrol-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchImportEvidenceToAssessmentControlResponse](#schemabatchimportevidencetoassessmentcontrolresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAssessments

<a id="opIdListAssessments"></a>

> Code samples

```bash
curl https://auditmanager.us-east-1.amazonaws.com/assessments \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /assessments`

 Returns a list of current and past assessments from Audit Manager. 

<h3 id="listassessments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|status|query|string|false| The current status of the assessment.|
|nextToken|query|string|false| The pagination token that's used to fetch the next set of results. |
|maxResults|query|integer|false| Represents the maximum number of results on a page or for an API request call. |
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
|status|ACTIVE|
|status|INACTIVE|

> Example responses

> 200 Response

```json
{
  "assessmentMetadata": {},
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

<h3 id="listassessments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAssessmentsResponse](#schemalistassessmentsresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateAssessment

<a id="opIdCreateAssessment"></a>

> Code samples

```bash
curl https://auditmanager.us-east-1.amazonaws.com/assessments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "description": "string",
    "assessmentReportsDestination": {
      "destinationType": {},
      "destination": {}
    },
    "scope": {
      "awsAccounts": {},
      "awsServices": {}
    },
    "roles": [
      {
        "roleType": {},
        "roleArn": {}
      }
    ],
    "frameworkId": "stringstringstringstringstringstring",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /assessments`

 Creates an assessment in Audit Manager. 

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "assessmentReportsDestination": {
    "destinationType": {},
    "destination": {}
  },
  "scope": {
    "awsAccounts": {},
    "awsServices": {}
  },
  "roles": [
    {
      "roleType": {},
      "roleArn": {}
    }
  ],
  "frameworkId": "stringstringstringstringstringstring",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createassessment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» name|body|string|true| The name of the assessment to be created. |
|» description|body|string|false| The optional description of the assessment to be created. |
|» assessmentReportsDestination|body|object|true| The location where Audit Manager saves assessment reports for the given assessment. |
|» » destinationType|body|object|false|none|
|» » destination|body|object|false|none|
|» scope|body|object|true| The wrapper that contains the Amazon Web Services accounts and services that are in scope for the assessment. |
|» » awsAccounts|body|object|false|none|
|» » awsServices|body|object|false|none|
|» roles|body|[[Role](#schemarole)]|true| The list of roles for the assessment. |
|» frameworkId|body|string|true| The identifier for the framework that the assessment will be created from. |
|» tags|body|object|false| The tags that are associated with the assessment. |
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 200 Response

```json
{
  "assessment": {
    "arn": {},
    "awsAccount": {
      "id": {},
      "emailAddress": {},
      "name": {}
    },
    "metadata": {
      "name": {},
      "id": {},
      "description": {},
      "complianceType": {},
      "status": {},
      "assessmentReportsDestination": {
        "destinationType": {},
        "destination": {}
      },
      "scope": {
        "awsAccounts": {},
        "awsServices": {}
      },
      "roles": {},
      "delegations": {},
      "creationTime": {},
      "lastUpdated": {}
    },
    "framework": {
      "id": {},
      "arn": {},
      "metadata": {
        "name": {},
        "description": {},
        "logo": {},
        "complianceType": {}
      },
      "controlSets": {}
    },
    "tags": {
      "property1": "string",
      "property2": "string"
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

<h3 id="createassessment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateAssessmentResponse](#schemacreateassessmentresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateAssessmentFramework

<a id="opIdCreateAssessmentFramework"></a>

> Code samples

```bash
curl https://auditmanager.us-east-1.amazonaws.com/assessmentFrameworks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "description": "string",
    "complianceType": "string",
    "controlSets": [
      {
        "name": {},
        "controls": {}
      }
    ],
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /assessmentFrameworks`

 Creates a custom framework in Audit Manager. 

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "complianceType": "string",
  "controlSets": [
    {
      "name": {},
      "controls": {}
    }
  ],
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createassessmentframework-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» name|body|string|true| The name of the new custom framework. |
|» description|body|string|false| An optional description for the new custom framework. |
|» complianceType|body|string|false| The compliance type that the new custom framework supports, such as CIS or HIPAA. |
|» controlSets|body|[[CreateAssessmentFrameworkControlSet](#schemacreateassessmentframeworkcontrolset)]|true| The control sets that are associated with the framework. |
|» tags|body|object|false| The tags that are associated with the framework. |
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 200 Response

```json
{
  "framework": {
    "arn": {},
    "id": {},
    "name": {},
    "type": {},
    "complianceType": {},
    "description": {},
    "logo": {},
    "controlSources": {},
    "controlSets": {},
    "createdAt": {},
    "lastUpdatedAt": {},
    "createdBy": {},
    "lastUpdatedBy": {},
    "tags": {
      "property1": "string",
      "property2": "string"
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

<h3 id="createassessmentframework-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateAssessmentFrameworkResponse](#schemacreateassessmentframeworkresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateAssessmentReport

<a id="opIdCreateAssessmentReport"></a>

> Code samples

```bash
curl https://auditmanager.us-east-1.amazonaws.com/assessments/stringstringstringstringstringstring/reports \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "description": "string",
    "queryStatement": "string"
  }'
```

`POST /assessments/{assessmentId}/reports`

 Creates an assessment report for the specified assessment. 

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "queryStatement": "string"
}
```

<h3 id="createassessmentreport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assessmentId|path|string|true| The identifier for the assessment. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» name|body|string|true| The name of the new assessment report. |
|» description|body|string|false| The description of the assessment report. |
|» queryStatement|body|string|false|<p>A SQL statement that represents an evidence finder query.</p> <p>Provide this parameter when you want to generate an assessment report from the results of an evidence finder search query. When you use this parameter, Audit Manager generates a one-time report using only the evidence from the query output. This report does not include any assessment evidence that was manually <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/generate-assessment-report.html#generate-assessment-report-include-evidence">added to a report using the console</a>, or <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_BatchAssociateAssessmentReportEvidence.html">associated with a report using the API</a>. </p> <p>To use this parameter, the <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_EvidenceFinderEnablement.html#auditmanager-Type-EvidenceFinderEnablement-enablementStatus">enablementStatus</a> of evidence finder must be <code>ENABLED</code>. </p> <p> For examples and help resolving <code>queryStatement</code> validation exceptions, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/evidence-finder-issues.html#querystatement-exceptions">Troubleshooting evidence finder issues</a> in the <i>Audit Manager User Guide.</i> </p>|

> Example responses

> 200 Response

```json
{
  "assessmentReport": {
    "id": {},
    "name": {},
    "description": {},
    "awsAccountId": {},
    "assessmentId": {},
    "assessmentName": {},
    "author": {},
    "status": {},
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

> 483 Response

```json
null
```

<h3 id="createassessmentreport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateAssessmentReportResponse](#schemacreateassessmentreportresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateControl

<a id="opIdCreateControl"></a>

> Code samples

```bash
curl https://auditmanager.us-east-1.amazonaws.com/controls \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "description": "string",
    "testingInformation": "string",
    "actionPlanTitle": "string",
    "actionPlanInstructions": "string",
    "controlMappingSources": [
      {
        "sourceName": {},
        "sourceDescription": {},
        "sourceSetUpOption": {},
        "sourceType": {},
        "sourceKeyword": {
          "keywordInputType": {},
          "keywordValue": {}
        },
        "sourceFrequency": {},
        "troubleshootingText": {}
      }
    ],
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /controls`

 Creates a new custom control in Audit Manager. 

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "testingInformation": "string",
  "actionPlanTitle": "string",
  "actionPlanInstructions": "string",
  "controlMappingSources": [
    {
      "sourceName": {},
      "sourceDescription": {},
      "sourceSetUpOption": {},
      "sourceType": {},
      "sourceKeyword": {
        "keywordInputType": {},
        "keywordValue": {}
      },
      "sourceFrequency": {},
      "troubleshootingText": {}
    }
  ],
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createcontrol-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» name|body|string|true| The name of the control. |
|» description|body|string|false| The description of the control. |
|» testingInformation|body|string|false| The steps to follow to determine if the control is satisfied. |
|» actionPlanTitle|body|string|false| The title of the action plan for remediating the control. |
|» actionPlanInstructions|body|string|false| The recommended actions to carry out if the control isn't fulfilled. |
|» controlMappingSources|body|[[CreateControlMappingSource](#schemacreatecontrolmappingsource)]|true| The data mapping sources for the control. |
|» tags|body|object|false| The tags that are associated with the control. |
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 200 Response

```json
{
  "control": {
    "arn": {},
    "id": {},
    "type": {},
    "name": {},
    "description": {},
    "testingInformation": {},
    "actionPlanTitle": {},
    "actionPlanInstructions": {},
    "controlSources": {},
    "controlMappingSources": {},
    "createdAt": {},
    "lastUpdatedAt": {},
    "createdBy": {},
    "lastUpdatedBy": {},
    "tags": {
      "property1": "string",
      "property2": "string"
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

<h3 id="createcontrol-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateControlResponse](#schemacreatecontrolresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAssessment

<a id="opIdGetAssessment"></a>

> Code samples

```bash
curl https://auditmanager.us-east-1.amazonaws.com/assessments/stringstringstringstringstringstring \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /assessments/{assessmentId}`

Returns an assessment from Audit Manager. 

<h3 id="getassessment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assessmentId|path|string|true|The unique identifier for the assessment. |
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
  "assessment": {
    "arn": {},
    "awsAccount": {
      "id": {},
      "emailAddress": {},
      "name": {}
    },
    "metadata": {
      "name": {},
      "id": {},
      "description": {},
      "complianceType": {},
      "status": {},
      "assessmentReportsDestination": {
        "destinationType": {},
        "destination": {}
      },
      "scope": {
        "awsAccounts": {},
        "awsServices": {}
      },
      "roles": {},
      "delegations": {},
      "creationTime": {},
      "lastUpdated": {}
    },
    "framework": {
      "id": {},
      "arn": {},
      "metadata": {
        "name": {},
        "description": {},
        "logo": {},
        "complianceType": {}
      },
      "controlSets": {}
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  },
  "userRole": {
    "roleType": {},
    "roleArn": {}
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

<h3 id="getassessment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAssessmentResponse](#schemagetassessmentresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateAssessment

<a id="opIdUpdateAssessment"></a>

> Code samples

```bash
curl https://auditmanager.us-east-1.amazonaws.com/assessments/stringstringstringstringstringstring \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "assessmentName": "string",
    "assessmentDescription": "string",
    "scope": {
      "awsAccounts": {},
      "awsServices": {}
    },
    "assessmentReportsDestination": {
      "destinationType": {},
      "destination": {}
    },
    "roles": [
      {
        "roleType": {},
        "roleArn": {}
      }
    ]
  }'
```

`PUT /assessments/{assessmentId}`

 Edits an Audit Manager assessment. 

> Body parameter

```json
{
  "assessmentName": "string",
  "assessmentDescription": "string",
  "scope": {
    "awsAccounts": {},
    "awsServices": {}
  },
  "assessmentReportsDestination": {
    "destinationType": {},
    "destination": {}
  },
  "roles": [
    {
      "roleType": {},
      "roleArn": {}
    }
  ]
}
```

<h3 id="updateassessment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assessmentId|path|string|true| The unique identifier for the assessment. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» assessmentName|body|string|false| The name of the assessment to be updated. |
|» assessmentDescription|body|string|false| The description of the assessment. |
|» scope|body|object|true| The wrapper that contains the Amazon Web Services accounts and services that are in scope for the assessment. |
|» » awsAccounts|body|object|false|none|
|» » awsServices|body|object|false|none|
|» assessmentReportsDestination|body|object|false| The location where Audit Manager saves assessment reports for the given assessment. |
|» » destinationType|body|object|false|none|
|» » destination|body|object|false|none|
|» roles|body|[[Role](#schemarole)]|false| The list of roles for the assessment. |

> Example responses

> 200 Response

```json
{
  "assessment": {
    "arn": {},
    "awsAccount": {
      "id": {},
      "emailAddress": {},
      "name": {}
    },
    "metadata": {
      "name": {},
      "id": {},
      "description": {},
      "complianceType": {},
      "status": {},
      "assessmentReportsDestination": {
        "destinationType": {},
        "destination": {}
      },
      "scope": {
        "awsAccounts": {},
        "awsServices": {}
      },
      "roles": {},
      "delegations": {},
      "creationTime": {},
      "lastUpdated": {}
    },
    "framework": {
      "id": {},
      "arn": {},
      "metadata": {
        "name": {},
        "description": {},
        "logo": {},
        "complianceType": {}
      },
      "controlSets": {}
    },
    "tags": {
      "property1": "string",
      "property2": "string"
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

<h3 id="updateassessment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateAssessmentResponse](#schemaupdateassessmentresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAssessment

<a id="opIdDeleteAssessment"></a>

> Code samples

```bash
curl https://auditmanager.us-east-1.amazonaws.com/assessments/stringstringstringstringstringstring \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /assessments/{assessmentId}`

 Deletes an assessment in Audit Manager. 

<h3 id="deleteassessment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assessmentId|path|string|true| The identifier for the assessment. |
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

<h3 id="deleteassessment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteAssessmentResponse](#schemadeleteassessmentresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAssessmentFramework

<a id="opIdGetAssessmentFramework"></a>

> Code samples

```bash
curl https://auditmanager.us-east-1.amazonaws.com/assessmentFrameworks/stringstringstringstringstringstring \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /assessmentFrameworks/{frameworkId}`

Returns a framework from Audit Manager. 

<h3 id="getassessmentframework-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|frameworkId|path|string|true| The identifier for the framework. |
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
  "framework": {
    "arn": {},
    "id": {},
    "name": {},
    "type": {},
    "complianceType": {},
    "description": {},
    "logo": {},
    "controlSources": {},
    "controlSets": {},
    "createdAt": {},
    "lastUpdatedAt": {},
    "createdBy": {},
    "lastUpdatedBy": {},
    "tags": {
      "property1": "string",
      "property2": "string"
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

<h3 id="getassessmentframework-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAssessmentFrameworkResponse](#schemagetassessmentframeworkresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateAssessmentFramework

<a id="opIdUpdateAssessmentFramework"></a>

> Code samples

```bash
curl https://auditmanager.us-east-1.amazonaws.com/assessmentFrameworks/stringstringstringstringstringstring \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "description": "string",
    "complianceType": "string",
    "controlSets": [
      {
        "id": {},
        "name": {},
        "controls": {}
      }
    ]
  }'
```

`PUT /assessmentFrameworks/{frameworkId}`

 Updates a custom framework in Audit Manager. 

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "complianceType": "string",
  "controlSets": [
    {
      "id": {},
      "name": {},
      "controls": {}
    }
  ]
}
```

<h3 id="updateassessmentframework-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|frameworkId|path|string|true| The unique identifier for the framework. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» name|body|string|true| The name of the framework to be updated. |
|» description|body|string|false| The description of the updated framework. |
|» complianceType|body|string|false| The compliance type that the new custom framework supports, such as CIS or HIPAA. |
|» controlSets|body|[[UpdateAssessmentFrameworkControlSet](#schemaupdateassessmentframeworkcontrolset)]|true| The control sets that are associated with the framework. |

> Example responses

> 200 Response

```json
{
  "framework": {
    "arn": {},
    "id": {},
    "name": {},
    "type": {},
    "complianceType": {},
    "description": {},
    "logo": {},
    "controlSources": {},
    "controlSets": {},
    "createdAt": {},
    "lastUpdatedAt": {},
    "createdBy": {},
    "lastUpdatedBy": {},
    "tags": {
      "property1": "string",
      "property2": "string"
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

<h3 id="updateassessmentframework-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateAssessmentFrameworkResponse](#schemaupdateassessmentframeworkresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAssessmentFramework

<a id="opIdDeleteAssessmentFramework"></a>

> Code samples

```bash
curl https://auditmanager.us-east-1.amazonaws.com/assessmentFrameworks/stringstringstringstringstringstring \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /assessmentFrameworks/{frameworkId}`

 Deletes a custom framework in Audit Manager. 

<h3 id="deleteassessmentframework-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|frameworkId|path|string|true| The identifier for the custom framework. |
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

<h3 id="deleteassessmentframework-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteAssessmentFrameworkResponse](#schemadeleteassessmentframeworkresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAssessmentFrameworkShare

<a id="opIdDeleteAssessmentFrameworkShare"></a>

> Code samples

```bash
curl 'https://auditmanager.us-east-1.amazonaws.com/assessmentFrameworkShareRequests/stringstringstringstringstringstring#requestType?requestType=SENT' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /assessmentFrameworkShareRequests/{requestId}#requestType`

 Deletes a share request for a custom framework in Audit Manager. 

<h3 id="deleteassessmentframeworkshare-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|requestId|path|string|true|The unique identifier for the share request to be deleted.|
|requestType|query|string|true|Specifies whether the share request is a sent request or a received request.|
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
|requestType|SENT|
|requestType|RECEIVED|

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

<h3 id="deleteassessmentframeworkshare-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteAssessmentFrameworkShareResponse](#schemadeleteassessmentframeworkshareresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAssessmentReport

<a id="opIdDeleteAssessmentReport"></a>

> Code samples

```bash
curl https://auditmanager.us-east-1.amazonaws.com/assessments/stringstringstringstringstringstring/reports/stringstringstringstringstringstring \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /assessments/{assessmentId}/reports/{assessmentReportId}`

<p>Deletes an assessment report in Audit Manager. </p> <p>When you run the <code>DeleteAssessmentReport</code> operation, Audit Manager attempts to delete the following data:</p> <ol> <li> <p>The specified assessment report that’s stored in your S3 bucket</p> </li> <li> <p>The associated metadata that’s stored in Audit Manager</p> </li> </ol> <p>If Audit Manager can’t access the assessment report in your S3 bucket, the report isn’t deleted. In this event, the <code>DeleteAssessmentReport</code> operation doesn’t fail. Instead, it proceeds to delete the associated metadata only. You must then delete the assessment report from the S3 bucket yourself. </p> <p>This scenario happens when Audit Manager receives a <code>403 (Forbidden)</code> or <code>404 (Not Found)</code> error from Amazon S3. To avoid this, make sure that your S3 bucket is available, and that you configured the correct permissions for Audit Manager to delete resources in your S3 bucket. For an example permissions policy that you can use, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/security_iam_id-based-policy-examples.html#full-administrator-access-assessment-report-destination">Assessment report destination permissions</a> in the <i>Audit Manager User Guide</i>. For information about the issues that could cause a <code>403 (Forbidden)</code> or <code>404 (Not Found</code>) error from Amazon S3, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ErrorCodeList">List of Error Codes</a> in the <i>Amazon Simple Storage Service API Reference</i>. </p>

<h3 id="deleteassessmentreport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assessmentId|path|string|true| The unique identifier for the assessment. |
|assessmentReportId|path|string|true| The unique identifier for the assessment report. |
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

<h3 id="deleteassessmentreport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteAssessmentReportResponse](#schemadeleteassessmentreportresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetControl

<a id="opIdGetControl"></a>

> Code samples

```bash
curl https://auditmanager.us-east-1.amazonaws.com/controls/stringstringstringstringstringstring \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /controls/{controlId}`

 Returns a control from Audit Manager. 

<h3 id="getcontrol-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|controlId|path|string|true| The identifier for the control. |
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
  "control": {
    "arn": {},
    "id": {},
    "type": {},
    "name": {},
    "description": {},
    "testingInformation": {},
    "actionPlanTitle": {},
    "actionPlanInstructions": {},
    "controlSources": {},
    "controlMappingSources": {},
    "createdAt": {},
    "lastUpdatedAt": {},
    "createdBy": {},
    "lastUpdatedBy": {},
    "tags": {
      "property1": "string",
      "property2": "string"
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

<h3 id="getcontrol-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetControlResponse](#schemagetcontrolresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateControl

<a id="opIdUpdateControl"></a>

> Code samples

```bash
curl https://auditmanager.us-east-1.amazonaws.com/controls/stringstringstringstringstringstring \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "description": "string",
    "testingInformation": "string",
    "actionPlanTitle": "string",
    "actionPlanInstructions": "string",
    "controlMappingSources": [
      {
        "sourceId": {},
        "sourceName": {},
        "sourceDescription": {},
        "sourceSetUpOption": {},
        "sourceType": {},
        "sourceKeyword": {
          "keywordInputType": {},
          "keywordValue": {}
        },
        "sourceFrequency": {},
        "troubleshootingText": {}
      }
    ]
  }'
```

`PUT /controls/{controlId}`

 Updates a custom control in Audit Manager. 

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "testingInformation": "string",
  "actionPlanTitle": "string",
  "actionPlanInstructions": "string",
  "controlMappingSources": [
    {
      "sourceId": {},
      "sourceName": {},
      "sourceDescription": {},
      "sourceSetUpOption": {},
      "sourceType": {},
      "sourceKeyword": {
        "keywordInputType": {},
        "keywordValue": {}
      },
      "sourceFrequency": {},
      "troubleshootingText": {}
    }
  ]
}
```

<h3 id="updatecontrol-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|controlId|path|string|true| The identifier for the control. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» name|body|string|true| The name of the updated control. |
|» description|body|string|false| The optional description of the control. |
|» testingInformation|body|string|false| The steps that you should follow to determine if the control is met. |
|» actionPlanTitle|body|string|false| The title of the action plan for remediating the control. |
|» actionPlanInstructions|body|string|false| The recommended actions to carry out if the control isn't fulfilled. |
|» controlMappingSources|body|[[ControlMappingSource](#schemacontrolmappingsource)]|true| The data mapping sources for the control. |

> Example responses

> 200 Response

```json
{
  "control": {
    "arn": {},
    "id": {},
    "type": {},
    "name": {},
    "description": {},
    "testingInformation": {},
    "actionPlanTitle": {},
    "actionPlanInstructions": {},
    "controlSources": {},
    "controlMappingSources": {},
    "createdAt": {},
    "lastUpdatedAt": {},
    "createdBy": {},
    "lastUpdatedBy": {},
    "tags": {
      "property1": "string",
      "property2": "string"
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

<h3 id="updatecontrol-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateControlResponse](#schemaupdatecontrolresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteControl

<a id="opIdDeleteControl"></a>

> Code samples

```bash
curl https://auditmanager.us-east-1.amazonaws.com/controls/stringstringstringstringstringstring \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /controls/{controlId}`

 Deletes a custom control in Audit Manager. 

<h3 id="deletecontrol-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|controlId|path|string|true| The unique identifier for the control. |
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

<h3 id="deletecontrol-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteControlResponse](#schemadeletecontrolresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeregisterAccount

<a id="opIdDeregisterAccount"></a>

> Code samples

```bash
curl https://auditmanager.us-east-1.amazonaws.com/account/deregisterAccount \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /account/deregisterAccount`

<p> Deregisters an account in Audit Manager. </p> <note> <p>Before you deregister, you can use the <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_UpdateSettings.html">UpdateSettings</a> API operation to set your preferred data retention policy. By default, Audit Manager retains your data. If you want to delete your data, you can use the <code>DeregistrationPolicy</code> attribute to request the deletion of your data. </p> <p>For more information about data retention, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/data-protection.html">Data Protection</a> in the <i>Audit Manager User Guide</i>. </p> </note>

<h3 id="deregisteraccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
  "status": {}
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

<h3 id="deregisteraccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeregisterAccountResponse](#schemaderegisteraccountresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeregisterOrganizationAdminAccount

<a id="opIdDeregisterOrganizationAdminAccount"></a>

> Code samples

```bash
curl https://auditmanager.us-east-1.amazonaws.com/account/deregisterOrganizationAdminAccount \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "adminAccountId": "stringstring"
  }'
```

`POST /account/deregisterOrganizationAdminAccount`

<p>Removes the specified Amazon Web Services account as a delegated administrator for Audit Manager. </p> <p>When you remove a delegated administrator from your Audit Manager settings, you continue to have access to the evidence that you previously collected under that account. This is also the case when you deregister a delegated administrator from Organizations. However, Audit Manager stops collecting and attaching evidence to that delegated administrator account moving forward.</p> <important> <p>Keep in mind the following cleanup task if you use evidence finder:</p> <p>Before you use your management account to remove a delegated administrator, make sure that the current delegated administrator account signs in to Audit Manager and disables evidence finder first. Disabling evidence finder automatically deletes the event data store that was created in their account when they enabled evidence finder. If this task isn’t completed, the event data store remains in their account. In this case, we recommend that the original delegated administrator goes to CloudTrail Lake and manually <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-eds-disable-termination.html">deletes the event data store</a>.</p> <p>This cleanup task is necessary to ensure that you don't end up with multiple event data stores. Audit Manager ignores an unused event data store after you remove or change a delegated administrator account. However, the unused event data store continues to incur storage costs from CloudTrail Lake if you don't delete it.</p> </important> <p>When you deregister a delegated administrator account for Audit Manager, the data for that account isn’t deleted. If you want to delete resource data for a delegated administrator account, you must perform that task separately before you deregister the account. Either, you can do this in the Audit Manager console. Or, you can use one of the delete API operations that are provided by Audit Manager. </p> <p>To delete your Audit Manager resource data, see the following instructions: </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessment.html">DeleteAssessment</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/delete-assessment.html">Deleting an assessment</a> in the <i>Audit Manager User Guide</i>)</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessmentFramework.html">DeleteAssessmentFramework</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/delete-custom-framework.html">Deleting a custom framework</a> in the <i>Audit Manager User Guide</i>)</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessmentFrameworkShare.html">DeleteAssessmentFrameworkShare</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/deleting-shared-framework-requests.html">Deleting a share request</a> in the <i>Audit Manager User Guide</i>)</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessmentReport.html">DeleteAssessmentReport</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/generate-assessment-report.html#delete-assessment-report-steps">Deleting an assessment report</a> in the <i>Audit Manager User Guide</i>)</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteControl.html">DeleteControl</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/delete-controls.html">Deleting a custom control</a> in the <i>Audit Manager User Guide</i>)</p> </li> </ul> <p>At this time, Audit Manager doesn't provide an option to delete evidence for a specific delegated administrator. Instead, when your management account deregisters Audit Manager, we perform a cleanup for the current delegated administrator account at the time of deregistration.</p>

> Body parameter

```json
{
  "adminAccountId": "stringstring"
}
```

<h3 id="deregisterorganizationadminaccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» adminAccountId|body|string|false| The identifier for the administrator account. |

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

<h3 id="deregisterorganizationadminaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeregisterOrganizationAdminAccountResponse](#schemaderegisterorganizationadminaccountresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateAssessmentReportEvidenceFolder

<a id="opIdDisassociateAssessmentReportEvidenceFolder"></a>

> Code samples

```bash
curl https://auditmanager.us-east-1.amazonaws.com/assessments/stringstringstringstringstringstring/disassociateFromAssessmentReport \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "evidenceFolderId": "stringstringstringstringstringstring"
  }'
```

`PUT /assessments/{assessmentId}/disassociateFromAssessmentReport`

 Disassociates an evidence folder from the specified assessment report in Audit Manager. 

> Body parameter

```json
{
  "evidenceFolderId": "stringstringstringstringstringstring"
}
```

<h3 id="disassociateassessmentreportevidencefolder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assessmentId|path|string|true| The unique identifier for the assessment. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» evidenceFolderId|body|string|true| The unique identifier for the folder that the evidence is stored in. |

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

<h3 id="disassociateassessmentreportevidencefolder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateAssessmentReportEvidenceFolderResponse](#schemadisassociateassessmentreportevidencefolderresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAccountStatus

<a id="opIdGetAccountStatus"></a>

> Code samples

```bash
curl https://auditmanager.us-east-1.amazonaws.com/account/status \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /account/status`

 Returns the registration status of an account in Audit Manager. 

<h3 id="getaccountstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
  "status": {}
}
```

> 480 Response

```json
null
```

<h3 id="getaccountstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAccountStatusResponse](#schemagetaccountstatusresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAssessmentReportUrl

<a id="opIdGetAssessmentReportUrl"></a>

> Code samples

```bash
curl https://auditmanager.us-east-1.amazonaws.com/assessments/stringstringstringstringstringstring/reports/stringstringstringstringstringstring/url \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /assessments/{assessmentId}/reports/{assessmentReportId}/url`

 Returns the URL of an assessment report in Audit Manager. 

<h3 id="getassessmentreporturl-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assessmentReportId|path|string|true| The unique identifier for the assessment report. |
|assessmentId|path|string|true| The unique identifier for the assessment. |
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
  "preSignedUrl": {
    "hyperlinkName": {},
    "link": {}
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

<h3 id="getassessmentreporturl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAssessmentReportUrlResponse](#schemagetassessmentreporturlresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetChangeLogs

<a id="opIdGetChangeLogs"></a>

> Code samples

```bash
curl https://auditmanager.us-east-1.amazonaws.com/assessments/stringstringstringstringstringstring/changelogs \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /assessments/{assessmentId}/changelogs`

 Returns a list of changelogs from Audit Manager. 

<h3 id="getchangelogs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assessmentId|path|string|true|The unique identifier for the assessment. |
|controlSetId|query|string|false| The unique identifier for the control set. |
|controlId|query|string|false| The unique identifier for the control. |
|nextToken|query|string|false| The pagination token that's used to fetch the next set of results. |
|maxResults|query|integer|false|Represents the maximum number of results on a page or for an API request call. |
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
  "changeLogs": {},
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

> 483 Response

```json
null
```

<h3 id="getchangelogs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetChangeLogsResponse](#schemagetchangelogsresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDelegations

<a id="opIdGetDelegations"></a>

> Code samples

```bash
curl https://auditmanager.us-east-1.amazonaws.com/delegations \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /delegations`

 Returns a list of delegations from an audit owner to a delegate. 

<h3 id="getdelegations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false| The pagination token that's used to fetch the next set of results. |
|maxResults|query|integer|false| Represents the maximum number of results on a page or for an API request call. |
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
  "delegations": {},
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

<h3 id="getdelegations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDelegationsResponse](#schemagetdelegationsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetEvidence

<a id="opIdGetEvidence"></a>

> Code samples

```bash
curl https://auditmanager.us-east-1.amazonaws.com/assessments/stringstringstringstringstringstring/controlSets/string/evidenceFolders/stringstringstringstringstringstring/evidence/stringstringstringstringstringstring \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /assessments/{assessmentId}/controlSets/{controlSetId}/evidenceFolders/{evidenceFolderId}/evidence/{evidenceId}`

 Returns evidence from Audit Manager. 

<h3 id="getevidence-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assessmentId|path|string|true| The unique identifier for the assessment. |
|controlSetId|path|string|true| The unique identifier for the control set. |
|evidenceFolderId|path|string|true| The unique identifier for the folder that the evidence is stored in. |
|evidenceId|path|string|true| The unique identifier for the evidence. |
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
  "evidence": {
    "dataSource": {},
    "evidenceAwsAccountId": {},
    "time": {},
    "eventSource": {},
    "eventName": {},
    "evidenceByType": {},
    "resourcesIncluded": {},
    "attributes": {
      "property1": "string",
      "property2": "string"
    },
    "iamId": {},
    "complianceCheck": {},
    "awsOrganization": {},
    "awsAccountId": {},
    "evidenceFolderId": {},
    "id": {},
    "assessmentReportSelection": {}
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

<h3 id="getevidence-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetEvidenceResponse](#schemagetevidenceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetEvidenceByEvidenceFolder

<a id="opIdGetEvidenceByEvidenceFolder"></a>

> Code samples

```bash
curl https://auditmanager.us-east-1.amazonaws.com/assessments/stringstringstringstringstringstring/controlSets/string/evidenceFolders/stringstringstringstringstringstring/evidence \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /assessments/{assessmentId}/controlSets/{controlSetId}/evidenceFolders/{evidenceFolderId}/evidence`

 Returns all evidence from a specified evidence folder in Audit Manager. 

<h3 id="getevidencebyevidencefolder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assessmentId|path|string|true| The identifier for the assessment. |
|controlSetId|path|string|true| The identifier for the control set. |
|evidenceFolderId|path|string|true| The unique identifier for the folder that the evidence is stored in. |
|nextToken|query|string|false| The pagination token that's used to fetch the next set of results. |
|maxResults|query|integer|false| Represents the maximum number of results on a page or for an API request call. |
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
  "evidence": {},
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

> 483 Response

```json
null
```

<h3 id="getevidencebyevidencefolder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetEvidenceByEvidenceFolderResponse](#schemagetevidencebyevidencefolderresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetEvidenceFolder

<a id="opIdGetEvidenceFolder"></a>

> Code samples

```bash
curl https://auditmanager.us-east-1.amazonaws.com/assessments/stringstringstringstringstringstring/controlSets/string/evidenceFolders/stringstringstringstringstringstring \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /assessments/{assessmentId}/controlSets/{controlSetId}/evidenceFolders/{evidenceFolderId}`

 Returns an evidence folder from the specified assessment in Audit Manager. 

<h3 id="getevidencefolder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assessmentId|path|string|true| The unique identifier for the assessment. |
|controlSetId|path|string|true| The unique identifier for the control set. |
|evidenceFolderId|path|string|true| The unique identifier for the folder that the evidence is stored in. |
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
  "evidenceFolder": {
    "name": {},
    "date": {},
    "assessmentId": {},
    "controlSetId": {},
    "controlId": {},
    "id": {},
    "dataSource": {},
    "author": {},
    "totalEvidence": {},
    "assessmentReportSelectionCount": {},
    "controlName": {},
    "evidenceResourcesIncludedCount": {},
    "evidenceByTypeConfigurationDataCount": {},
    "evidenceByTypeManualCount": {},
    "evidenceByTypeComplianceCheckCount": {},
    "evidenceByTypeComplianceCheckIssuesCount": {},
    "evidenceByTypeUserActivityCount": {},
    "evidenceAwsServiceSourceCount": {}
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

<h3 id="getevidencefolder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetEvidenceFolderResponse](#schemagetevidencefolderresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetEvidenceFoldersByAssessment

<a id="opIdGetEvidenceFoldersByAssessment"></a>

> Code samples

```bash
curl https://auditmanager.us-east-1.amazonaws.com/assessments/stringstringstringstringstringstring/evidenceFolders \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /assessments/{assessmentId}/evidenceFolders`

 Returns the evidence folders from a specified assessment in Audit Manager. 

<h3 id="getevidencefoldersbyassessment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assessmentId|path|string|true| The unique identifier for the assessment. |
|nextToken|query|string|false| The pagination token that's used to fetch the next set of results. |
|maxResults|query|integer|false| Represents the maximum number of results on a page or for an API request call. |
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
  "evidenceFolders": {},
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

> 483 Response

```json
null
```

<h3 id="getevidencefoldersbyassessment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetEvidenceFoldersByAssessmentResponse](#schemagetevidencefoldersbyassessmentresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetEvidenceFoldersByAssessmentControl

<a id="opIdGetEvidenceFoldersByAssessmentControl"></a>

> Code samples

```bash
curl https://auditmanager.us-east-1.amazonaws.com/assessments/stringstringstringstringstringstring/evidenceFolders-by-assessment-control/string/stringstringstringstringstringstring \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /assessments/{assessmentId}/evidenceFolders-by-assessment-control/{controlSetId}/{controlId}`

 Returns a list of evidence folders that are associated with a specified control in an Audit Manager assessment. 

<h3 id="getevidencefoldersbyassessmentcontrol-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assessmentId|path|string|true| The identifier for the assessment. |
|controlSetId|path|string|true| The identifier for the control set. |
|controlId|path|string|true| The identifier for the control. |
|nextToken|query|string|false| The pagination token that's used to fetch the next set of results. |
|maxResults|query|integer|false| Represents the maximum number of results on a page or for an API request call. |
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
  "evidenceFolders": {},
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

> 483 Response

```json
null
```

<h3 id="getevidencefoldersbyassessmentcontrol-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetEvidenceFoldersByAssessmentControlResponse](#schemagetevidencefoldersbyassessmentcontrolresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetInsights

<a id="opIdGetInsights"></a>

> Code samples

```bash
curl https://auditmanager.us-east-1.amazonaws.com/insights \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /insights`

Gets the latest analytics data for all your current active assessments. 

<h3 id="getinsights-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
  "insights": {
    "activeAssessmentsCount": {},
    "noncompliantEvidenceCount": {},
    "compliantEvidenceCount": {},
    "inconclusiveEvidenceCount": {},
    "assessmentControlsCountByNoncompliantEvidence": {},
    "totalAssessmentControlsCount": {},
    "lastUpdated": {}
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

<h3 id="getinsights-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetInsightsResponse](#schemagetinsightsresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetInsightsByAssessment

<a id="opIdGetInsightsByAssessment"></a>

> Code samples

```bash
curl https://auditmanager.us-east-1.amazonaws.com/insights/assessments/stringstringstringstringstringstring \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /insights/assessments/{assessmentId}`

Gets the latest analytics data for a specific active assessment. 

<h3 id="getinsightsbyassessment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assessmentId|path|string|true|The unique identifier for the assessment. |
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
  "insights": {
    "noncompliantEvidenceCount": {},
    "compliantEvidenceCount": {},
    "inconclusiveEvidenceCount": {},
    "assessmentControlsCountByNoncompliantEvidence": {},
    "totalAssessmentControlsCount": {},
    "lastUpdated": {}
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

<h3 id="getinsightsbyassessment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetInsightsByAssessmentResponse](#schemagetinsightsbyassessmentresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetOrganizationAdminAccount

<a id="opIdGetOrganizationAdminAccount"></a>

> Code samples

```bash
curl https://auditmanager.us-east-1.amazonaws.com/account/organizationAdminAccount \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /account/organizationAdminAccount`

 Returns the name of the delegated Amazon Web Services administrator account for the organization. 

<h3 id="getorganizationadminaccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
  "adminAccountId": {},
  "organizationId": {}
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

<h3 id="getorganizationadminaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetOrganizationAdminAccountResponse](#schemagetorganizationadminaccountresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetServicesInScope

<a id="opIdGetServicesInScope"></a>

> Code samples

```bash
curl https://auditmanager.us-east-1.amazonaws.com/services \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /services`

Returns a list of all of the Amazon Web Services that you can choose to include in your assessment. When you <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_CreateAssessment.html">create an assessment</a>, specify which of these services you want to include to narrow the assessment's <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_Scope.html">scope</a>.

<h3 id="getservicesinscope-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
  "serviceMetadata": {}
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

<h3 id="getservicesinscope-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetServicesInScopeResponse](#schemagetservicesinscoperesponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSettings

<a id="opIdGetSettings"></a>

> Code samples

```bash
curl https://auditmanager.us-east-1.amazonaws.com/settings/ALL \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /settings/{attribute}`

 Returns the settings for the specified Amazon Web Services account. 

<h3 id="getsettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|attribute|path|string|true| The list of setting attribute enum values. |
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
|attribute|ALL|
|attribute|IS_AWS_ORG_ENABLED|
|attribute|SNS_TOPIC|
|attribute|DEFAULT_ASSESSMENT_REPORTS_DESTINATION|
|attribute|DEFAULT_PROCESS_OWNERS|
|attribute|EVIDENCE_FINDER_ENABLEMENT|
|attribute|DEREGISTRATION_POLICY|

> Example responses

> 200 Response

```json
{
  "settings": {
    "isAwsOrgEnabled": {},
    "snsTopic": {},
    "defaultAssessmentReportsDestination": {
      "destinationType": {},
      "destination": {}
    },
    "defaultProcessOwners": {},
    "kmsKey": {},
    "evidenceFinderEnablement": {
      "eventDataStoreArn": {},
      "enablementStatus": {},
      "backfillStatus": {},
      "error": {}
    },
    "deregistrationPolicy": {
      "deleteResources": {}
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

<h3 id="getsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSettingsResponse](#schemagetsettingsresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAssessmentControlInsightsByControlDomain

<a id="opIdListAssessmentControlInsightsByControlDomain"></a>

> Code samples

```bash
curl 'https://auditmanager.us-east-1.amazonaws.com/insights/controls-by-assessment#controlDomainId&assessmentId?controlDomainId=stringstringstringstringstringstring&assessmentId=stringstringstringstringstringstring' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /insights/controls-by-assessment#controlDomainId&assessmentId`

<p>Lists the latest analytics data for controls within a specific control domain and a specific active assessment.</p> <note> <p>Control insights are listed only if the control belongs to the control domain and assessment that was specified. Moreover, the control must have collected evidence on the <code>lastUpdated</code> date of <code>controlInsightsByAssessment</code>. If neither of these conditions are met, no data is listed for that control. </p> </note>

<h3 id="listassessmentcontrolinsightsbycontroldomain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|controlDomainId|query|string|true|The unique identifier for the control domain. |
|assessmentId|query|string|true|The unique identifier for the active assessment. |
|nextToken|query|string|false|The pagination token that's used to fetch the next set of results. |
|maxResults|query|integer|false|Represents the maximum number of results on a page or for an API request call. |
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
  "controlInsightsByAssessment": {},
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

> 483 Response

```json
null
```

<h3 id="listassessmentcontrolinsightsbycontroldomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAssessmentControlInsightsByControlDomainResponse](#schemalistassessmentcontrolinsightsbycontroldomainresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAssessmentFrameworkShareRequests

<a id="opIdListAssessmentFrameworkShareRequests"></a>

> Code samples

```bash
curl 'https://auditmanager.us-east-1.amazonaws.com/assessmentFrameworkShareRequests#requestType?requestType=SENT' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /assessmentFrameworkShareRequests#requestType`

 Returns a list of sent or received share requests for custom frameworks in Audit Manager. 

<h3 id="listassessmentframeworksharerequests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|requestType|query|string|true| Specifies whether the share request is a sent request or a received request.|
|nextToken|query|string|false| The pagination token that's used to fetch the next set of results. |
|maxResults|query|integer|false| Represents the maximum number of results on a page or for an API request call. |
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
|requestType|SENT|
|requestType|RECEIVED|

> Example responses

> 200 Response

```json
{
  "assessmentFrameworkShareRequests": {},
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

<h3 id="listassessmentframeworksharerequests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAssessmentFrameworkShareRequestsResponse](#schemalistassessmentframeworksharerequestsresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAssessmentFrameworks

<a id="opIdListAssessmentFrameworks"></a>

> Code samples

```bash
curl 'https://auditmanager.us-east-1.amazonaws.com/assessmentFrameworks#frameworkType?frameworkType=Standard' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /assessmentFrameworks#frameworkType`

 Returns a list of the frameworks that are available in the Audit Manager framework library. 

<h3 id="listassessmentframeworks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|frameworkType|query|string|true| The type of framework, such as a standard framework or a custom framework. |
|nextToken|query|string|false| The pagination token that's used to fetch the next set of results. |
|maxResults|query|integer|false| Represents the maximum number of results on a page or for an API request call. |
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
|frameworkType|Standard|
|frameworkType|Custom|

> Example responses

> 200 Response

```json
{
  "frameworkMetadataList": {},
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

<h3 id="listassessmentframeworks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAssessmentFrameworksResponse](#schemalistassessmentframeworksresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAssessmentReports

<a id="opIdListAssessmentReports"></a>

> Code samples

```bash
curl https://auditmanager.us-east-1.amazonaws.com/assessmentReports \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /assessmentReports`

 Returns a list of assessment reports created in Audit Manager. 

<h3 id="listassessmentreports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false| The pagination token that's used to fetch the next set of results. |
|maxResults|query|integer|false| Represents the maximum number of results on a page or for an API request call. |
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
  "assessmentReports": {},
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

<h3 id="listassessmentreports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAssessmentReportsResponse](#schemalistassessmentreportsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListControlDomainInsights

<a id="opIdListControlDomainInsights"></a>

> Code samples

```bash
curl https://auditmanager.us-east-1.amazonaws.com/insights/control-domains \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /insights/control-domains`

<p>Lists the latest analytics data for control domains across all of your active assessments. </p> <note> <p>A control domain is listed only if at least one of the controls within that domain collected evidence on the <code>lastUpdated</code> date of <code>controlDomainInsights</code>. If this condition isn’t met, no data is listed for that control domain.</p> </note>

<h3 id="listcontroldomaininsights-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|The pagination token that's used to fetch the next set of results. |
|maxResults|query|integer|false|Represents the maximum number of results on a page or for an API request call. |
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
  "controlDomainInsights": {},
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

> 483 Response

```json
null
```

<h3 id="listcontroldomaininsights-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListControlDomainInsightsResponse](#schemalistcontroldomaininsightsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListControlDomainInsightsByAssessment

<a id="opIdListControlDomainInsightsByAssessment"></a>

> Code samples

```bash
curl 'https://auditmanager.us-east-1.amazonaws.com/insights/control-domains-by-assessment#assessmentId?assessmentId=stringstringstringstringstringstring' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /insights/control-domains-by-assessment#assessmentId`

<p>Lists analytics data for control domains within a specified active assessment.</p> <note> <p>A control domain is listed only if at least one of the controls within that domain collected evidence on the <code>lastUpdated</code> date of <code>controlDomainInsights</code>. If this condition isn’t met, no data is listed for that domain.</p> </note>

<h3 id="listcontroldomaininsightsbyassessment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assessmentId|query|string|true|The unique identifier for the active assessment. |
|nextToken|query|string|false|The pagination token that's used to fetch the next set of results. |
|maxResults|query|integer|false|Represents the maximum number of results on a page or for an API request call. |
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
  "controlDomainInsights": {},
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

> 483 Response

```json
null
```

<h3 id="listcontroldomaininsightsbyassessment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListControlDomainInsightsByAssessmentResponse](#schemalistcontroldomaininsightsbyassessmentresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListControlInsightsByControlDomain

<a id="opIdListControlInsightsByControlDomain"></a>

> Code samples

```bash
curl 'https://auditmanager.us-east-1.amazonaws.com/insights/controls#controlDomainId?controlDomainId=stringstringstringstringstringstring' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /insights/controls#controlDomainId`

<p>Lists the latest analytics data for controls within a specific control domain across all active assessments.</p> <note> <p>Control insights are listed only if the control belongs to the control domain that was specified and the control collected evidence on the <code>lastUpdated</code> date of <code>controlInsightsMetadata</code>. If neither of these conditions are met, no data is listed for that control. </p> </note>

<h3 id="listcontrolinsightsbycontroldomain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|controlDomainId|query|string|true|The unique identifier for the control domain. |
|nextToken|query|string|false|The pagination token that's used to fetch the next set of results. |
|maxResults|query|integer|false|Represents the maximum number of results on a page or for an API request call. |
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
  "controlInsightsMetadata": {},
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

> 483 Response

```json
null
```

<h3 id="listcontrolinsightsbycontroldomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListControlInsightsByControlDomainResponse](#schemalistcontrolinsightsbycontroldomainresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListControls

<a id="opIdListControls"></a>

> Code samples

```bash
curl 'https://auditmanager.us-east-1.amazonaws.com/controls#controlType?controlType=Standard' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /controls#controlType`

 Returns a list of controls from Audit Manager. 

<h3 id="listcontrols-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|controlType|query|string|true| The type of control, such as a standard control or a custom control. |
|nextToken|query|string|false| The pagination token that's used to fetch the next set of results. |
|maxResults|query|integer|false| Represents the maximum number of results on a page or for an API request call. |
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
|controlType|Standard|
|controlType|Custom|

> Example responses

> 200 Response

```json
{
  "controlMetadataList": {},
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

<h3 id="listcontrols-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListControlsResponse](#schemalistcontrolsresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListKeywordsForDataSource

<a id="opIdListKeywordsForDataSource"></a>

> Code samples

```bash
curl 'https://auditmanager.us-east-1.amazonaws.com/dataSourceKeywords#source?source=AWS_Cloudtrail' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dataSourceKeywords#source`

 Returns a list of keywords that are pre-mapped to the specified control data source. 

<h3 id="listkeywordsfordatasource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source|query|string|true| The control mapping data source that the keywords apply to. |
|nextToken|query|string|false| The pagination token that's used to fetch the next set of results. |
|maxResults|query|integer|false| Represents the maximum number of results on a page or for an API request call. |
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
|source|AWS_Cloudtrail|
|source|AWS_Config|
|source|AWS_Security_Hub|
|source|AWS_API_Call|
|source|MANUAL|

> Example responses

> 200 Response

```json
{
  "keywords": {},
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

<h3 id="listkeywordsfordatasource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListKeywordsForDataSourceResponse](#schemalistkeywordsfordatasourceresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListNotifications

<a id="opIdListNotifications"></a>

> Code samples

```bash
curl https://auditmanager.us-east-1.amazonaws.com/notifications \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /notifications`

 Returns a list of all Audit Manager notifications. 

<h3 id="listnotifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false| The pagination token that's used to fetch the next set of results. |
|maxResults|query|integer|false| Represents the maximum number of results on a page or for an API request call. |
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
  "notifications": {},
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

<h3 id="listnotifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListNotificationsResponse](#schemalistnotificationsresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://auditmanager.us-east-1.amazonaws.com/tags/stringstringstringst \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{resourceArn}`

 Returns a list of tags for the specified resource in Audit Manager. 

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true| The Amazon Resource Name (ARN) of the resource. |
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
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://auditmanager.us-east-1.amazonaws.com/tags/stringstringstringst \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /tags/{resourceArn}`

 Tags the specified resource in Audit Manager. 

> Body parameter

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="tagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true| The Amazon Resource Name (ARN) of the resource. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tags|body|object|true| The tags that are associated with the resource. |
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RegisterAccount

<a id="opIdRegisterAccount"></a>

> Code samples

```bash
curl https://auditmanager.us-east-1.amazonaws.com/account/registerAccount \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "kmsKey": "strings",
    "delegatedAdminAccount": "stringstring"
  }'
```

`POST /account/registerAccount`

 Enables Audit Manager for the specified Amazon Web Services account. 

> Body parameter

```json
{
  "kmsKey": "strings",
  "delegatedAdminAccount": "stringstring"
}
```

<h3 id="registeraccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» kmsKey|body|string|false| The KMS key details. |
|» delegatedAdminAccount|body|string|false| The delegated administrator account for Audit Manager. |

> Example responses

> 200 Response

```json
{
  "status": {}
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

<h3 id="registeraccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RegisterAccountResponse](#schemaregisteraccountresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RegisterOrganizationAdminAccount

<a id="opIdRegisterOrganizationAdminAccount"></a>

> Code samples

```bash
curl https://auditmanager.us-east-1.amazonaws.com/account/registerOrganizationAdminAccount \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "adminAccountId": "stringstring"
  }'
```

`POST /account/registerOrganizationAdminAccount`

 Enables an Amazon Web Services account within the organization as the delegated administrator for Audit Manager. 

> Body parameter

```json
{
  "adminAccountId": "stringstring"
}
```

<h3 id="registerorganizationadminaccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» adminAccountId|body|string|true| The identifier for the delegated administrator account. |

> Example responses

> 200 Response

```json
{
  "adminAccountId": {},
  "organizationId": {}
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

<h3 id="registerorganizationadminaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RegisterOrganizationAdminAccountResponse](#schemaregisterorganizationadminaccountresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartAssessmentFrameworkShare

<a id="opIdStartAssessmentFrameworkShare"></a>

> Code samples

```bash
curl https://auditmanager.us-east-1.amazonaws.com/assessmentFrameworks/stringstringstringstringstringstring/shareRequests \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "destinationAccount": "stringstring",
    "destinationRegion": "string",
    "comment": "string"
  }'
```

`POST /assessmentFrameworks/{frameworkId}/shareRequests`

<p> Creates a share request for a custom framework in Audit Manager. </p> <p>The share request specifies a recipient and notifies them that a custom framework is available. Recipients have 120 days to accept or decline the request. If no action is taken, the share request expires.</p> <p>When you create a share request, Audit Manager stores a snapshot of your custom framework in the US East (N. Virginia) Amazon Web Services Region. Audit Manager also stores a backup of the same snapshot in the US West (Oregon) Amazon Web Services Region.</p> <p>Audit Manager deletes the snapshot and the backup snapshot when one of the following events occurs:</p> <ul> <li> <p>The sender revokes the share request.</p> </li> <li> <p>The recipient declines the share request.</p> </li> <li> <p>The recipient encounters an error and doesn't successfully accept the share request.</p> </li> <li> <p>The share request expires before the recipient responds to the request.</p> </li> </ul> <p>When a sender <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/framework-sharing.html#framework-sharing-resend">resends a share request</a>, the snapshot is replaced with an updated version that corresponds with the latest version of the custom framework. </p> <p>When a recipient accepts a share request, the snapshot is replicated into their Amazon Web Services account under the Amazon Web Services Region that was specified in the share request. </p> <important> <p>When you invoke the <code>StartAssessmentFrameworkShare</code> API, you are about to share a custom framework with another Amazon Web Services account. You may not share a custom framework that is derived from a standard framework if the standard framework is designated as not eligible for sharing by Amazon Web Services, unless you have obtained permission to do so from the owner of the standard framework. To learn more about which standard frameworks are eligible for sharing, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/share-custom-framework-concepts-and-terminology.html#eligibility">Framework sharing eligibility</a> in the <i>Audit Manager User Guide</i>.</p> </important>

> Body parameter

```json
{
  "destinationAccount": "stringstring",
  "destinationRegion": "string",
  "comment": "string"
}
```

<h3 id="startassessmentframeworkshare-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|frameworkId|path|string|true| The unique identifier for the custom framework to be shared. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» destinationAccount|body|string|true| The Amazon Web Services account of the recipient. |
|» destinationRegion|body|string|true| The Amazon Web Services Region of the recipient. |
|» comment|body|string|false| An optional comment from the sender about the share request. |

> Example responses

> 200 Response

```json
{
  "assessmentFrameworkShareRequest": {
    "id": {},
    "frameworkId": {},
    "frameworkName": {},
    "frameworkDescription": {},
    "status": {},
    "sourceAccount": {},
    "destinationAccount": {},
    "destinationRegion": {},
    "expirationTime": {},
    "creationTime": {},
    "lastUpdated": {},
    "comment": {},
    "standardControlsCount": {},
    "customControlsCount": {},
    "complianceType": {}
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

<h3 id="startassessmentframeworkshare-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartAssessmentFrameworkShareResponse](#schemastartassessmentframeworkshareresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://auditmanager.us-east-1.amazonaws.com/tags/stringstringstringst#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{resourceArn}#tagKeys`

 Removes a tag from a resource in Audit Manager. 

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true| The Amazon Resource Name (ARN) of the specified resource. |
|tagKeys|query|[[TagKey](#schematagkey)]|true| The name or key of the tag. |
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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateAssessmentControl

<a id="opIdUpdateAssessmentControl"></a>

> Code samples

```bash
curl https://auditmanager.us-east-1.amazonaws.com/assessments/stringstringstringstringstringstring/controlSets/string/controls/stringstringstringstringstringstring \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "controlStatus": "UNDER_REVIEW",
    "commentBody": "string"
  }'
```

`PUT /assessments/{assessmentId}/controlSets/{controlSetId}/controls/{controlId}`

 Updates a control within an assessment in Audit Manager. 

> Body parameter

```json
{
  "controlStatus": "UNDER_REVIEW",
  "commentBody": "string"
}
```

<h3 id="updateassessmentcontrol-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assessmentId|path|string|true| The unique identifier for the assessment. |
|controlSetId|path|string|true| The unique identifier for the control set. |
|controlId|path|string|true| The unique identifier for the control. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» controlStatus|body|string|false| The status of the control. |
|» commentBody|body|string|false| The comment body text for the control. |

#### Enumerated Values

|Parameter|Value|
|---|---|
|» controlStatus|UNDER_REVIEW|
|» controlStatus|REVIEWED|
|» controlStatus|INACTIVE|

> Example responses

> 200 Response

```json
{
  "control": {
    "id": {},
    "name": {},
    "description": {},
    "status": {},
    "response": {},
    "comments": {},
    "evidenceSources": {},
    "evidenceCount": {},
    "assessmentReportEvidenceCount": {}
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

<h3 id="updateassessmentcontrol-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateAssessmentControlResponse](#schemaupdateassessmentcontrolresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateAssessmentControlSetStatus

<a id="opIdUpdateAssessmentControlSetStatus"></a>

> Code samples

```bash
curl https://auditmanager.us-east-1.amazonaws.com/assessments/stringstringstringstringstringstring/controlSets/string/status \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "status": "ACTIVE",
    "comment": "string"
  }'
```

`PUT /assessments/{assessmentId}/controlSets/{controlSetId}/status`

 Updates the status of a control set in an Audit Manager assessment. 

> Body parameter

```json
{
  "status": "ACTIVE",
  "comment": "string"
}
```

<h3 id="updateassessmentcontrolsetstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assessmentId|path|string|true| The unique identifier for the assessment. |
|controlSetId|path|string|true| The unique identifier for the control set. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» status|body|string|true| The status of the control set that's being updated. |
|» comment|body|string|true| The comment that's related to the status update. |

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|ACTIVE|
|» status|UNDER_REVIEW|
|» status|REVIEWED|

> Example responses

> 200 Response

```json
{
  "controlSet": {
    "id": {},
    "description": {},
    "status": {},
    "roles": {},
    "controls": {},
    "delegations": {},
    "systemEvidenceCount": {},
    "manualEvidenceCount": {}
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

<h3 id="updateassessmentcontrolsetstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateAssessmentControlSetStatusResponse](#schemaupdateassessmentcontrolsetstatusresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateAssessmentFrameworkShare

<a id="opIdUpdateAssessmentFrameworkShare"></a>

> Code samples

```bash
curl https://auditmanager.us-east-1.amazonaws.com/assessmentFrameworkShareRequests/stringstringstringstringstringstring \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "requestType": "SENT",
    "action": "ACCEPT"
  }'
```

`PUT /assessmentFrameworkShareRequests/{requestId}`

 Updates a share request for a custom framework in Audit Manager. 

> Body parameter

```json
{
  "requestType": "SENT",
  "action": "ACCEPT"
}
```

<h3 id="updateassessmentframeworkshare-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|requestId|path|string|true| The unique identifier for the share request. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» requestType|body|string|true|Specifies whether the share request is a sent request or a received request.|
|» action|body|string|true|Specifies the update action for the share request.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» requestType|SENT|
|» requestType|RECEIVED|
|» action|ACCEPT|
|» action|DECLINE|
|» action|REVOKE|

> Example responses

> 200 Response

```json
{
  "assessmentFrameworkShareRequest": {
    "id": {},
    "frameworkId": {},
    "frameworkName": {},
    "frameworkDescription": {},
    "status": {},
    "sourceAccount": {},
    "destinationAccount": {},
    "destinationRegion": {},
    "expirationTime": {},
    "creationTime": {},
    "lastUpdated": {},
    "comment": {},
    "standardControlsCount": {},
    "customControlsCount": {},
    "complianceType": {}
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

<h3 id="updateassessmentframeworkshare-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateAssessmentFrameworkShareResponse](#schemaupdateassessmentframeworkshareresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateAssessmentStatus

<a id="opIdUpdateAssessmentStatus"></a>

> Code samples

```bash
curl https://auditmanager.us-east-1.amazonaws.com/assessments/stringstringstringstringstringstring/status \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "status": "ACTIVE"
  }'
```

`PUT /assessments/{assessmentId}/status`

 Updates the status of an assessment in Audit Manager. 

> Body parameter

```json
{
  "status": "ACTIVE"
}
```

<h3 id="updateassessmentstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assessmentId|path|string|true| The unique identifier for the assessment. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» status|body|string|true| The current status of the assessment. |

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|ACTIVE|
|» status|INACTIVE|

> Example responses

> 200 Response

```json
{
  "assessment": {
    "arn": {},
    "awsAccount": {
      "id": {},
      "emailAddress": {},
      "name": {}
    },
    "metadata": {
      "name": {},
      "id": {},
      "description": {},
      "complianceType": {},
      "status": {},
      "assessmentReportsDestination": {
        "destinationType": {},
        "destination": {}
      },
      "scope": {
        "awsAccounts": {},
        "awsServices": {}
      },
      "roles": {},
      "delegations": {},
      "creationTime": {},
      "lastUpdated": {}
    },
    "framework": {
      "id": {},
      "arn": {},
      "metadata": {
        "name": {},
        "description": {},
        "logo": {},
        "complianceType": {}
      },
      "controlSets": {}
    },
    "tags": {
      "property1": "string",
      "property2": "string"
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

<h3 id="updateassessmentstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateAssessmentStatusResponse](#schemaupdateassessmentstatusresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateSettings

<a id="opIdUpdateSettings"></a>

> Code samples

```bash
curl https://auditmanager.us-east-1.amazonaws.com/settings \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "snsTopic": "string",
    "defaultAssessmentReportsDestination": {
      "destinationType": {},
      "destination": {}
    },
    "defaultProcessOwners": [
      {
        "roleType": {},
        "roleArn": {}
      }
    ],
    "kmsKey": "strings",
    "evidenceFinderEnabled": true,
    "deregistrationPolicy": {
      "deleteResources": {}
    }
  }'
```

`PUT /settings`

 Updates Audit Manager settings for the current account. 

> Body parameter

```json
{
  "snsTopic": "string",
  "defaultAssessmentReportsDestination": {
    "destinationType": {},
    "destination": {}
  },
  "defaultProcessOwners": [
    {
      "roleType": {},
      "roleArn": {}
    }
  ],
  "kmsKey": "strings",
  "evidenceFinderEnabled": true,
  "deregistrationPolicy": {
    "deleteResources": {}
  }
}
```

<h3 id="updatesettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» snsTopic|body|string|false| The Amazon Simple Notification Service (Amazon SNS) topic that Audit Manager sends notifications to. |
|» defaultAssessmentReportsDestination|body|object|false| The location where Audit Manager saves assessment reports for the given assessment. |
|» » destinationType|body|object|false|none|
|» » destination|body|object|false|none|
|» defaultProcessOwners|body|[[Role](#schemarole)]|false| A list of the default audit owners. |
|» kmsKey|body|string|false| The KMS key details. |
|» evidenceFinderEnabled|body|boolean|false|<p>Specifies whether the evidence finder feature is enabled. Change this attribute to enable or disable evidence finder.</p> <important> <p>When you use this attribute to disable evidence finder, Audit Manager deletes the event data store that’s used to query your evidence data. As a result, you can’t re-enable evidence finder and use the feature again. Your only alternative is to <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeregisterAccount.html">deregister</a> and then <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_RegisterAccount.html">re-register</a> Audit Manager. </p> </important>|
|» deregistrationPolicy|body|object|false|<p>The deregistration policy for the data that's stored in Audit Manager. You can use this attribute to determine how your data is handled when you <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeregisterAccount.html">deregister Audit Manager</a>.</p> <p>By default, Audit Manager retains evidence data for two years from the time of its creation. Other Audit Manager resources (including assessments, custom controls, and custom frameworks) remain in Audit Manager indefinitely, and are available if you <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_RegisterAccount.html">re-register Audit Manager</a> in the future. For more information about data retention, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/data-protection.html">Data Protection</a> in the <i>Audit Manager User Guide</i>.</p> <important> <p>If you choose to delete all data, this action permanently deletes all evidence data in your account within seven days. It also deletes all of the Audit Manager resources that you created, including assessments, custom controls, and custom frameworks. Your data will not be available if you re-register Audit Manager in the future.</p> </important>|
|» » deleteResources|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "settings": {
    "isAwsOrgEnabled": {},
    "snsTopic": {},
    "defaultAssessmentReportsDestination": {
      "destinationType": {},
      "destination": {}
    },
    "defaultProcessOwners": {},
    "kmsKey": {},
    "evidenceFinderEnablement": {
      "eventDataStoreArn": {},
      "enablementStatus": {},
      "backfillStatus": {},
      "error": {}
    },
    "deregistrationPolicy": {
      "deleteResources": {}
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

<h3 id="updatesettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateSettingsResponse](#schemaupdatesettingsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ValidateAssessmentReportIntegrity

<a id="opIdValidateAssessmentReportIntegrity"></a>

> Code samples

```bash
curl https://auditmanager.us-east-1.amazonaws.com/assessmentReports/integrity \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "s3RelativePath": "string"
  }'
```

`POST /assessmentReports/integrity`

 Validates the integrity of an assessment report in Audit Manager. 

> Body parameter

```json
{
  "s3RelativePath": "string"
}
```

<h3 id="validateassessmentreportintegrity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» s3RelativePath|body|string|true| The relative path of the Amazon S3 bucket that the assessment report is stored in. |

> Example responses

> 200 Response

```json
{
  "signatureValid": {},
  "signatureAlgorithm": {},
  "signatureDateTime": {},
  "signatureKeyId": {},
  "validationErrors": {}
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

<h3 id="validateassessmentreportintegrity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ValidateAssessmentReportIntegrityResponse](#schemavalidateassessmentreportintegrityresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AssociateAssessmentReportEvidenceFolderResponse">AssociateAssessmentReportEvidenceFolderResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociateassessmentreportevidencefolderresponse"></a>
<a id="schema_AssociateAssessmentReportEvidenceFolderResponse"></a>
<a id="tocSassociateassessmentreportevidencefolderresponse"></a>
<a id="tocsassociateassessmentreportevidencefolderresponse"></a>

```json
{}
```

<h2 id="tocS_ValidationException">ValidationException</h2>
<!-- backwards compatibility -->
<a id="schemavalidationexception"></a>
<a id="schema_ValidationException"></a>
<a id="tocSvalidationexception"></a>
<a id="tocsvalidationexception"></a>

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

<h2 id="tocS_InternalServerException">InternalServerException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserverexception"></a>
<a id="schema_InternalServerException"></a>
<a id="tocSinternalserverexception"></a>
<a id="tocsinternalserverexception"></a>

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

<h2 id="tocS_BatchAssociateAssessmentReportEvidenceResponse">BatchAssociateAssessmentReportEvidenceResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchassociateassessmentreportevidenceresponse"></a>
<a id="schema_BatchAssociateAssessmentReportEvidenceResponse"></a>
<a id="tocSbatchassociateassessmentreportevidenceresponse"></a>
<a id="tocsbatchassociateassessmentreportevidenceresponse"></a>

```json
{
  "evidenceIds": {},
  "errors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|evidenceIds|object|false|none|none|
|errors|object|false|none|none|

<h2 id="tocS_UUID">UUID</h2>
<!-- backwards compatibility -->
<a id="schemauuid"></a>
<a id="schema_UUID"></a>
<a id="tocSuuid"></a>
<a id="tocsuuid"></a>

```json
"stringstringstringstringstringstring"
```

<h2 id="tocS_BatchCreateDelegationByAssessmentResponse">BatchCreateDelegationByAssessmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchcreatedelegationbyassessmentresponse"></a>
<a id="schema_BatchCreateDelegationByAssessmentResponse"></a>
<a id="tocSbatchcreatedelegationbyassessmentresponse"></a>
<a id="tocsbatchcreatedelegationbyassessmentresponse"></a>

```json
{
  "delegations": {},
  "errors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delegations|object|false|none|none|
|errors|object|false|none|none|

<h2 id="tocS_CreateDelegationRequest">CreateDelegationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedelegationrequest"></a>
<a id="schema_CreateDelegationRequest"></a>
<a id="tocScreatedelegationrequest"></a>
<a id="tocscreatedelegationrequest"></a>

```json
{
  "comment": {},
  "controlSetId": {},
  "roleArn": {},
  "roleType": {}
}
```

 A collection of attributes that's used to create a delegation for an assessment in Audit Manager.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comment|object|false|none|none|
|controlSetId|object|false|none|none|
|roleArn|object|false|none|none|
|roleType|object|false|none|none|

<h2 id="tocS_BatchDeleteDelegationByAssessmentResponse">BatchDeleteDelegationByAssessmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeletedelegationbyassessmentresponse"></a>
<a id="schema_BatchDeleteDelegationByAssessmentResponse"></a>
<a id="tocSbatchdeletedelegationbyassessmentresponse"></a>
<a id="tocsbatchdeletedelegationbyassessmentresponse"></a>

```json
{
  "errors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|object|false|none|none|

<h2 id="tocS_BatchDisassociateAssessmentReportEvidenceResponse">BatchDisassociateAssessmentReportEvidenceResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchdisassociateassessmentreportevidenceresponse"></a>
<a id="schema_BatchDisassociateAssessmentReportEvidenceResponse"></a>
<a id="tocSbatchdisassociateassessmentreportevidenceresponse"></a>
<a id="tocsbatchdisassociateassessmentreportevidenceresponse"></a>

```json
{
  "evidenceIds": {},
  "errors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|evidenceIds|object|false|none|none|
|errors|object|false|none|none|

<h2 id="tocS_BatchImportEvidenceToAssessmentControlResponse">BatchImportEvidenceToAssessmentControlResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchimportevidencetoassessmentcontrolresponse"></a>
<a id="schema_BatchImportEvidenceToAssessmentControlResponse"></a>
<a id="tocSbatchimportevidencetoassessmentcontrolresponse"></a>
<a id="tocsbatchimportevidencetoassessmentcontrolresponse"></a>

```json
{
  "errors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|object|false|none|none|

<h2 id="tocS_ManualEvidence">ManualEvidence</h2>
<!-- backwards compatibility -->
<a id="schemamanualevidence"></a>
<a id="schema_ManualEvidence"></a>
<a id="tocSmanualevidence"></a>
<a id="tocsmanualevidence"></a>

```json
{
  "s3ResourcePath": {}
}
```

 Evidence that's uploaded to Audit Manager manually.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|s3ResourcePath|object|false|none|none|

<h2 id="tocS_CreateAssessmentResponse">CreateAssessmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateassessmentresponse"></a>
<a id="schema_CreateAssessmentResponse"></a>
<a id="tocScreateassessmentresponse"></a>
<a id="tocscreateassessmentresponse"></a>

```json
{
  "assessment": {
    "arn": {},
    "awsAccount": {
      "id": {},
      "emailAddress": {},
      "name": {}
    },
    "metadata": {
      "name": {},
      "id": {},
      "description": {},
      "complianceType": {},
      "status": {},
      "assessmentReportsDestination": {
        "destinationType": {},
        "destination": {}
      },
      "scope": {
        "awsAccounts": {},
        "awsServices": {}
      },
      "roles": {},
      "delegations": {},
      "creationTime": {},
      "lastUpdated": {}
    },
    "framework": {
      "id": {},
      "arn": {},
      "metadata": {
        "name": {},
        "description": {},
        "logo": {},
        "complianceType": {}
      },
      "controlSets": {}
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assessment|[Assessment](#schemaassessment)|false|none| An entity that defines the scope of audit evidence collected by Audit Manager. An Audit Manager assessment is an implementation of an Audit Manager framework. |

<h2 id="tocS_AssessmentReportDestinationType">AssessmentReportDestinationType</h2>
<!-- backwards compatibility -->
<a id="schemaassessmentreportdestinationtype"></a>
<a id="schema_AssessmentReportDestinationType"></a>
<a id="tocSassessmentreportdestinationtype"></a>
<a id="tocsassessmentreportdestinationtype"></a>

```json
"S3"
```

<h2 id="tocS_S3Url">S3Url</h2>
<!-- backwards compatibility -->
<a id="schemas3url"></a>
<a id="schema_S3Url"></a>
<a id="tocSs3url"></a>
<a id="tocss3url"></a>

```json
"string"
```

<h2 id="tocS_AWSAccounts">AWSAccounts</h2>
<!-- backwards compatibility -->
<a id="schemaawsaccounts"></a>
<a id="schema_AWSAccounts"></a>
<a id="tocSawsaccounts"></a>
<a id="tocsawsaccounts"></a>

```json
[
  {
    "id": {},
    "emailAddress": {},
    "name": {}
  }
]
```

<h2 id="tocS_AWSServices">AWSServices</h2>
<!-- backwards compatibility -->
<a id="schemaawsservices"></a>
<a id="schema_AWSServices"></a>
<a id="tocSawsservices"></a>
<a id="tocsawsservices"></a>

```json
[
  {
    "serviceName": {}
  }
]
```

<h2 id="tocS_Role">Role</h2>
<!-- backwards compatibility -->
<a id="schemarole"></a>
<a id="schema_Role"></a>
<a id="tocSrole"></a>
<a id="tocsrole"></a>

```json
{
  "roleType": {},
  "roleArn": {}
}
```

 The wrapper that contains the Audit Manager role information of the current user. This includes the role type and IAM Amazon Resource Name (ARN).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|roleType|object|true|none|none|
|roleArn|object|true|none|none|

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

<h2 id="tocS_ServiceQuotaExceededException">ServiceQuotaExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaservicequotaexceededexception"></a>
<a id="schema_ServiceQuotaExceededException"></a>
<a id="tocSservicequotaexceededexception"></a>
<a id="tocsservicequotaexceededexception"></a>

```json
null
```

<h2 id="tocS_CreateAssessmentFrameworkResponse">CreateAssessmentFrameworkResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateassessmentframeworkresponse"></a>
<a id="schema_CreateAssessmentFrameworkResponse"></a>
<a id="tocScreateassessmentframeworkresponse"></a>
<a id="tocscreateassessmentframeworkresponse"></a>

```json
{
  "framework": {
    "arn": {},
    "id": {},
    "name": {},
    "type": {},
    "complianceType": {},
    "description": {},
    "logo": {},
    "controlSources": {},
    "controlSets": {},
    "createdAt": {},
    "lastUpdatedAt": {},
    "createdBy": {},
    "lastUpdatedBy": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|framework|object|false|none|none|

<h2 id="tocS_CreateAssessmentFrameworkControlSet">CreateAssessmentFrameworkControlSet</h2>
<!-- backwards compatibility -->
<a id="schemacreateassessmentframeworkcontrolset"></a>
<a id="schema_CreateAssessmentFrameworkControlSet"></a>
<a id="tocScreateassessmentframeworkcontrolset"></a>
<a id="tocscreateassessmentframeworkcontrolset"></a>

```json
{
  "name": {},
  "controls": {}
}
```

 A <code>controlSet</code> entity that represents a collection of controls in Audit Manager. This doesn't contain the control set ID.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|controls|object|false|none|none|

<h2 id="tocS_CreateAssessmentReportResponse">CreateAssessmentReportResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateassessmentreportresponse"></a>
<a id="schema_CreateAssessmentReportResponse"></a>
<a id="tocScreateassessmentreportresponse"></a>
<a id="tocscreateassessmentreportresponse"></a>

```json
{
  "assessmentReport": {
    "id": {},
    "name": {},
    "description": {},
    "awsAccountId": {},
    "assessmentId": {},
    "assessmentName": {},
    "author": {},
    "status": {},
    "creationTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assessmentReport|object|false|none|none|

<h2 id="tocS_CreateControlResponse">CreateControlResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatecontrolresponse"></a>
<a id="schema_CreateControlResponse"></a>
<a id="tocScreatecontrolresponse"></a>
<a id="tocscreatecontrolresponse"></a>

```json
{
  "control": {
    "arn": {},
    "id": {},
    "type": {},
    "name": {},
    "description": {},
    "testingInformation": {},
    "actionPlanTitle": {},
    "actionPlanInstructions": {},
    "controlSources": {},
    "controlMappingSources": {},
    "createdAt": {},
    "lastUpdatedAt": {},
    "createdBy": {},
    "lastUpdatedBy": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|control|object|false|none|none|

<h2 id="tocS_CreateControlMappingSource">CreateControlMappingSource</h2>
<!-- backwards compatibility -->
<a id="schemacreatecontrolmappingsource"></a>
<a id="schema_CreateControlMappingSource"></a>
<a id="tocScreatecontrolmappingsource"></a>
<a id="tocscreatecontrolmappingsource"></a>

```json
{
  "sourceName": {},
  "sourceDescription": {},
  "sourceSetUpOption": {},
  "sourceType": {},
  "sourceKeyword": {
    "keywordInputType": {},
    "keywordValue": {}
  },
  "sourceFrequency": {},
  "troubleshootingText": {}
}
```

 The control mapping fields that represent the source for evidence collection, along with related parameters and metadata. This doesn't contain <code>mappingID</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceName|object|false|none|none|
|sourceDescription|object|false|none|none|
|sourceSetUpOption|object|false|none|none|
|sourceType|object|false|none|none|
|sourceKeyword|[SourceKeyword](#schemasourcekeyword)|false|none|<p> The keyword to search for in CloudTrail logs, Config rules, Security Hub checks, and Amazon Web Services API names. </p> <p> To learn more about the supported keywords that you can use when mapping a control data source, see the following pages in the <i>Audit Manager User Guide</i>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-ash.html">Config rules supported by Audit Manager</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-config.html">Security Hub controls supported by Audit Manager</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-api.html">API calls supported by Audit Manager</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-cloudtrail.html">CloudTrail event names supported by Audit Manager</a> </p> </li> </ul>|
|sourceFrequency|object|false|none|none|
|troubleshootingText|object|false|none|none|

<h2 id="tocS_DeleteAssessmentResponse">DeleteAssessmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteassessmentresponse"></a>
<a id="schema_DeleteAssessmentResponse"></a>
<a id="tocSdeleteassessmentresponse"></a>
<a id="tocsdeleteassessmentresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteAssessmentFrameworkResponse">DeleteAssessmentFrameworkResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteassessmentframeworkresponse"></a>
<a id="schema_DeleteAssessmentFrameworkResponse"></a>
<a id="tocSdeleteassessmentframeworkresponse"></a>
<a id="tocsdeleteassessmentframeworkresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteAssessmentFrameworkShareResponse">DeleteAssessmentFrameworkShareResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteassessmentframeworkshareresponse"></a>
<a id="schema_DeleteAssessmentFrameworkShareResponse"></a>
<a id="tocSdeleteassessmentframeworkshareresponse"></a>
<a id="tocsdeleteassessmentframeworkshareresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteAssessmentReportResponse">DeleteAssessmentReportResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteassessmentreportresponse"></a>
<a id="schema_DeleteAssessmentReportResponse"></a>
<a id="tocSdeleteassessmentreportresponse"></a>
<a id="tocsdeleteassessmentreportresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteControlResponse">DeleteControlResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletecontrolresponse"></a>
<a id="schema_DeleteControlResponse"></a>
<a id="tocSdeletecontrolresponse"></a>
<a id="tocsdeletecontrolresponse"></a>

```json
{}
```

<h2 id="tocS_DeregisterAccountResponse">DeregisterAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemaderegisteraccountresponse"></a>
<a id="schema_DeregisterAccountResponse"></a>
<a id="tocSderegisteraccountresponse"></a>
<a id="tocsderegisteraccountresponse"></a>

```json
{
  "status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|false|none|none|

<h2 id="tocS_DeregisterOrganizationAdminAccountResponse">DeregisterOrganizationAdminAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemaderegisterorganizationadminaccountresponse"></a>
<a id="schema_DeregisterOrganizationAdminAccountResponse"></a>
<a id="tocSderegisterorganizationadminaccountresponse"></a>
<a id="tocsderegisterorganizationadminaccountresponse"></a>

```json
{}
```

<h2 id="tocS_DisassociateAssessmentReportEvidenceFolderResponse">DisassociateAssessmentReportEvidenceFolderResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateassessmentreportevidencefolderresponse"></a>
<a id="schema_DisassociateAssessmentReportEvidenceFolderResponse"></a>
<a id="tocSdisassociateassessmentreportevidencefolderresponse"></a>
<a id="tocsdisassociateassessmentreportevidencefolderresponse"></a>

```json
{}
```

<h2 id="tocS_GetAccountStatusResponse">GetAccountStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetaccountstatusresponse"></a>
<a id="schema_GetAccountStatusResponse"></a>
<a id="tocSgetaccountstatusresponse"></a>
<a id="tocsgetaccountstatusresponse"></a>

```json
{
  "status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|false|none|none|

<h2 id="tocS_GetAssessmentResponse">GetAssessmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetassessmentresponse"></a>
<a id="schema_GetAssessmentResponse"></a>
<a id="tocSgetassessmentresponse"></a>
<a id="tocsgetassessmentresponse"></a>

```json
{
  "assessment": {
    "arn": {},
    "awsAccount": {
      "id": {},
      "emailAddress": {},
      "name": {}
    },
    "metadata": {
      "name": {},
      "id": {},
      "description": {},
      "complianceType": {},
      "status": {},
      "assessmentReportsDestination": {
        "destinationType": {},
        "destination": {}
      },
      "scope": {
        "awsAccounts": {},
        "awsServices": {}
      },
      "roles": {},
      "delegations": {},
      "creationTime": {},
      "lastUpdated": {}
    },
    "framework": {
      "id": {},
      "arn": {},
      "metadata": {
        "name": {},
        "description": {},
        "logo": {},
        "complianceType": {}
      },
      "controlSets": {}
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  },
  "userRole": {
    "roleType": {},
    "roleArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assessment|[Assessment](#schemaassessment)|false|none| An entity that defines the scope of audit evidence collected by Audit Manager. An Audit Manager assessment is an implementation of an Audit Manager framework. |
|userRole|[Role](#schemarole)|false|none| The wrapper that contains the Audit Manager role information of the current user. This includes the role type and IAM Amazon Resource Name (ARN). |

<h2 id="tocS_GetAssessmentFrameworkResponse">GetAssessmentFrameworkResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetassessmentframeworkresponse"></a>
<a id="schema_GetAssessmentFrameworkResponse"></a>
<a id="tocSgetassessmentframeworkresponse"></a>
<a id="tocsgetassessmentframeworkresponse"></a>

```json
{
  "framework": {
    "arn": {},
    "id": {},
    "name": {},
    "type": {},
    "complianceType": {},
    "description": {},
    "logo": {},
    "controlSources": {},
    "controlSets": {},
    "createdAt": {},
    "lastUpdatedAt": {},
    "createdBy": {},
    "lastUpdatedBy": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|framework|object|false|none|none|

<h2 id="tocS_GetAssessmentReportUrlResponse">GetAssessmentReportUrlResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetassessmentreporturlresponse"></a>
<a id="schema_GetAssessmentReportUrlResponse"></a>
<a id="tocSgetassessmentreporturlresponse"></a>
<a id="tocsgetassessmentreporturlresponse"></a>

```json
{
  "preSignedUrl": {
    "hyperlinkName": {},
    "link": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|preSignedUrl|[URL](#schemaurl)|false|none| Short for uniform resource locator. A URL is used as a unique identifier to locate a resource on the internet. |

<h2 id="tocS_GetChangeLogsResponse">GetChangeLogsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetchangelogsresponse"></a>
<a id="schema_GetChangeLogsResponse"></a>
<a id="tocSgetchangelogsresponse"></a>
<a id="tocsgetchangelogsresponse"></a>

```json
{
  "changeLogs": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|changeLogs|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_GetControlResponse">GetControlResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcontrolresponse"></a>
<a id="schema_GetControlResponse"></a>
<a id="tocSgetcontrolresponse"></a>
<a id="tocsgetcontrolresponse"></a>

```json
{
  "control": {
    "arn": {},
    "id": {},
    "type": {},
    "name": {},
    "description": {},
    "testingInformation": {},
    "actionPlanTitle": {},
    "actionPlanInstructions": {},
    "controlSources": {},
    "controlMappingSources": {},
    "createdAt": {},
    "lastUpdatedAt": {},
    "createdBy": {},
    "lastUpdatedBy": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|control|object|false|none|none|

<h2 id="tocS_GetDelegationsResponse">GetDelegationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdelegationsresponse"></a>
<a id="schema_GetDelegationsResponse"></a>
<a id="tocSgetdelegationsresponse"></a>
<a id="tocsgetdelegationsresponse"></a>

```json
{
  "delegations": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delegations|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_GetEvidenceResponse">GetEvidenceResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetevidenceresponse"></a>
<a id="schema_GetEvidenceResponse"></a>
<a id="tocSgetevidenceresponse"></a>
<a id="tocsgetevidenceresponse"></a>

```json
{
  "evidence": {
    "dataSource": {},
    "evidenceAwsAccountId": {},
    "time": {},
    "eventSource": {},
    "eventName": {},
    "evidenceByType": {},
    "resourcesIncluded": {},
    "attributes": {
      "property1": "string",
      "property2": "string"
    },
    "iamId": {},
    "complianceCheck": {},
    "awsOrganization": {},
    "awsAccountId": {},
    "evidenceFolderId": {},
    "id": {},
    "assessmentReportSelection": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|evidence|object|false|none|none|

<h2 id="tocS_GetEvidenceByEvidenceFolderResponse">GetEvidenceByEvidenceFolderResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetevidencebyevidencefolderresponse"></a>
<a id="schema_GetEvidenceByEvidenceFolderResponse"></a>
<a id="tocSgetevidencebyevidencefolderresponse"></a>
<a id="tocsgetevidencebyevidencefolderresponse"></a>

```json
{
  "evidence": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|evidence|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_GetEvidenceFolderResponse">GetEvidenceFolderResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetevidencefolderresponse"></a>
<a id="schema_GetEvidenceFolderResponse"></a>
<a id="tocSgetevidencefolderresponse"></a>
<a id="tocsgetevidencefolderresponse"></a>

```json
{
  "evidenceFolder": {
    "name": {},
    "date": {},
    "assessmentId": {},
    "controlSetId": {},
    "controlId": {},
    "id": {},
    "dataSource": {},
    "author": {},
    "totalEvidence": {},
    "assessmentReportSelectionCount": {},
    "controlName": {},
    "evidenceResourcesIncludedCount": {},
    "evidenceByTypeConfigurationDataCount": {},
    "evidenceByTypeManualCount": {},
    "evidenceByTypeComplianceCheckCount": {},
    "evidenceByTypeComplianceCheckIssuesCount": {},
    "evidenceByTypeUserActivityCount": {},
    "evidenceAwsServiceSourceCount": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|evidenceFolder|object|false|none|none|

<h2 id="tocS_GetEvidenceFoldersByAssessmentResponse">GetEvidenceFoldersByAssessmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetevidencefoldersbyassessmentresponse"></a>
<a id="schema_GetEvidenceFoldersByAssessmentResponse"></a>
<a id="tocSgetevidencefoldersbyassessmentresponse"></a>
<a id="tocsgetevidencefoldersbyassessmentresponse"></a>

```json
{
  "evidenceFolders": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|evidenceFolders|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_GetEvidenceFoldersByAssessmentControlResponse">GetEvidenceFoldersByAssessmentControlResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetevidencefoldersbyassessmentcontrolresponse"></a>
<a id="schema_GetEvidenceFoldersByAssessmentControlResponse"></a>
<a id="tocSgetevidencefoldersbyassessmentcontrolresponse"></a>
<a id="tocsgetevidencefoldersbyassessmentcontrolresponse"></a>

```json
{
  "evidenceFolders": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|evidenceFolders|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_GetInsightsResponse">GetInsightsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetinsightsresponse"></a>
<a id="schema_GetInsightsResponse"></a>
<a id="tocSgetinsightsresponse"></a>
<a id="tocsgetinsightsresponse"></a>

```json
{
  "insights": {
    "activeAssessmentsCount": {},
    "noncompliantEvidenceCount": {},
    "compliantEvidenceCount": {},
    "inconclusiveEvidenceCount": {},
    "assessmentControlsCountByNoncompliantEvidence": {},
    "totalAssessmentControlsCount": {},
    "lastUpdated": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|insights|object|false|none|none|

<h2 id="tocS_GetInsightsByAssessmentResponse">GetInsightsByAssessmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetinsightsbyassessmentresponse"></a>
<a id="schema_GetInsightsByAssessmentResponse"></a>
<a id="tocSgetinsightsbyassessmentresponse"></a>
<a id="tocsgetinsightsbyassessmentresponse"></a>

```json
{
  "insights": {
    "noncompliantEvidenceCount": {},
    "compliantEvidenceCount": {},
    "inconclusiveEvidenceCount": {},
    "assessmentControlsCountByNoncompliantEvidence": {},
    "totalAssessmentControlsCount": {},
    "lastUpdated": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|insights|object|false|none|none|

<h2 id="tocS_GetOrganizationAdminAccountResponse">GetOrganizationAdminAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetorganizationadminaccountresponse"></a>
<a id="schema_GetOrganizationAdminAccountResponse"></a>
<a id="tocSgetorganizationadminaccountresponse"></a>
<a id="tocsgetorganizationadminaccountresponse"></a>

```json
{
  "adminAccountId": {},
  "organizationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adminAccountId|object|false|none|none|
|organizationId|object|false|none|none|

<h2 id="tocS_GetServicesInScopeResponse">GetServicesInScopeResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetservicesinscoperesponse"></a>
<a id="schema_GetServicesInScopeResponse"></a>
<a id="tocSgetservicesinscoperesponse"></a>
<a id="tocsgetservicesinscoperesponse"></a>

```json
{
  "serviceMetadata": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceMetadata|object|false|none|none|

<h2 id="tocS_GetSettingsResponse">GetSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsettingsresponse"></a>
<a id="schema_GetSettingsResponse"></a>
<a id="tocSgetsettingsresponse"></a>
<a id="tocsgetsettingsresponse"></a>

```json
{
  "settings": {
    "isAwsOrgEnabled": {},
    "snsTopic": {},
    "defaultAssessmentReportsDestination": {
      "destinationType": {},
      "destination": {}
    },
    "defaultProcessOwners": {},
    "kmsKey": {},
    "evidenceFinderEnablement": {
      "eventDataStoreArn": {},
      "enablementStatus": {},
      "backfillStatus": {},
      "error": {}
    },
    "deregistrationPolicy": {
      "deleteResources": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|settings|object|false|none|none|

<h2 id="tocS_ListAssessmentControlInsightsByControlDomainResponse">ListAssessmentControlInsightsByControlDomainResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistassessmentcontrolinsightsbycontroldomainresponse"></a>
<a id="schema_ListAssessmentControlInsightsByControlDomainResponse"></a>
<a id="tocSlistassessmentcontrolinsightsbycontroldomainresponse"></a>
<a id="tocslistassessmentcontrolinsightsbycontroldomainresponse"></a>

```json
{
  "controlInsightsByAssessment": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|controlInsightsByAssessment|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListAssessmentFrameworkShareRequestsResponse">ListAssessmentFrameworkShareRequestsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistassessmentframeworksharerequestsresponse"></a>
<a id="schema_ListAssessmentFrameworkShareRequestsResponse"></a>
<a id="tocSlistassessmentframeworksharerequestsresponse"></a>
<a id="tocslistassessmentframeworksharerequestsresponse"></a>

```json
{
  "assessmentFrameworkShareRequests": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assessmentFrameworkShareRequests|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListAssessmentFrameworksResponse">ListAssessmentFrameworksResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistassessmentframeworksresponse"></a>
<a id="schema_ListAssessmentFrameworksResponse"></a>
<a id="tocSlistassessmentframeworksresponse"></a>
<a id="tocslistassessmentframeworksresponse"></a>

```json
{
  "frameworkMetadataList": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|frameworkMetadataList|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListAssessmentReportsResponse">ListAssessmentReportsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistassessmentreportsresponse"></a>
<a id="schema_ListAssessmentReportsResponse"></a>
<a id="tocSlistassessmentreportsresponse"></a>
<a id="tocslistassessmentreportsresponse"></a>

```json
{
  "assessmentReports": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assessmentReports|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListAssessmentsResponse">ListAssessmentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistassessmentsresponse"></a>
<a id="schema_ListAssessmentsResponse"></a>
<a id="tocSlistassessmentsresponse"></a>
<a id="tocslistassessmentsresponse"></a>

```json
{
  "assessmentMetadata": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assessmentMetadata|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListControlDomainInsightsResponse">ListControlDomainInsightsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcontroldomaininsightsresponse"></a>
<a id="schema_ListControlDomainInsightsResponse"></a>
<a id="tocSlistcontroldomaininsightsresponse"></a>
<a id="tocslistcontroldomaininsightsresponse"></a>

```json
{
  "controlDomainInsights": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|controlDomainInsights|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListControlDomainInsightsByAssessmentResponse">ListControlDomainInsightsByAssessmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcontroldomaininsightsbyassessmentresponse"></a>
<a id="schema_ListControlDomainInsightsByAssessmentResponse"></a>
<a id="tocSlistcontroldomaininsightsbyassessmentresponse"></a>
<a id="tocslistcontroldomaininsightsbyassessmentresponse"></a>

```json
{
  "controlDomainInsights": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|controlDomainInsights|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListControlInsightsByControlDomainResponse">ListControlInsightsByControlDomainResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcontrolinsightsbycontroldomainresponse"></a>
<a id="schema_ListControlInsightsByControlDomainResponse"></a>
<a id="tocSlistcontrolinsightsbycontroldomainresponse"></a>
<a id="tocslistcontrolinsightsbycontroldomainresponse"></a>

```json
{
  "controlInsightsMetadata": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|controlInsightsMetadata|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListControlsResponse">ListControlsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcontrolsresponse"></a>
<a id="schema_ListControlsResponse"></a>
<a id="tocSlistcontrolsresponse"></a>
<a id="tocslistcontrolsresponse"></a>

```json
{
  "controlMetadataList": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|controlMetadataList|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListKeywordsForDataSourceResponse">ListKeywordsForDataSourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistkeywordsfordatasourceresponse"></a>
<a id="schema_ListKeywordsForDataSourceResponse"></a>
<a id="tocSlistkeywordsfordatasourceresponse"></a>
<a id="tocslistkeywordsfordatasourceresponse"></a>

```json
{
  "keywords": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keywords|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListNotificationsResponse">ListNotificationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistnotificationsresponse"></a>
<a id="schema_ListNotificationsResponse"></a>
<a id="tocSlistnotificationsresponse"></a>
<a id="tocslistnotificationsresponse"></a>

```json
{
  "notifications": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notifications|object|false|none|none|
|nextToken|object|false|none|none|

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

<h2 id="tocS_RegisterAccountResponse">RegisterAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemaregisteraccountresponse"></a>
<a id="schema_RegisterAccountResponse"></a>
<a id="tocSregisteraccountresponse"></a>
<a id="tocsregisteraccountresponse"></a>

```json
{
  "status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|false|none|none|

<h2 id="tocS_ThrottlingException">ThrottlingException</h2>
<!-- backwards compatibility -->
<a id="schemathrottlingexception"></a>
<a id="schema_ThrottlingException"></a>
<a id="tocSthrottlingexception"></a>
<a id="tocsthrottlingexception"></a>

```json
null
```

<h2 id="tocS_RegisterOrganizationAdminAccountResponse">RegisterOrganizationAdminAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemaregisterorganizationadminaccountresponse"></a>
<a id="schema_RegisterOrganizationAdminAccountResponse"></a>
<a id="tocSregisterorganizationadminaccountresponse"></a>
<a id="tocsregisterorganizationadminaccountresponse"></a>

```json
{
  "adminAccountId": {},
  "organizationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adminAccountId|object|false|none|none|
|organizationId|object|false|none|none|

<h2 id="tocS_StartAssessmentFrameworkShareResponse">StartAssessmentFrameworkShareResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartassessmentframeworkshareresponse"></a>
<a id="schema_StartAssessmentFrameworkShareResponse"></a>
<a id="tocSstartassessmentframeworkshareresponse"></a>
<a id="tocsstartassessmentframeworkshareresponse"></a>

```json
{
  "assessmentFrameworkShareRequest": {
    "id": {},
    "frameworkId": {},
    "frameworkName": {},
    "frameworkDescription": {},
    "status": {},
    "sourceAccount": {},
    "destinationAccount": {},
    "destinationRegion": {},
    "expirationTime": {},
    "creationTime": {},
    "lastUpdated": {},
    "comment": {},
    "standardControlsCount": {},
    "customControlsCount": {},
    "complianceType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assessmentFrameworkShareRequest|object|false|none|none|

<h2 id="tocS_TagResourceResponse">TagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schematagresourceresponse"></a>
<a id="schema_TagResourceResponse"></a>
<a id="tocStagresourceresponse"></a>
<a id="tocstagresourceresponse"></a>

```json
{}
```

<h2 id="tocS_UntagResourceResponse">UntagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceresponse"></a>
<a id="schema_UntagResourceResponse"></a>
<a id="tocSuntagresourceresponse"></a>
<a id="tocsuntagresourceresponse"></a>

```json
{}
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

<h2 id="tocS_UpdateAssessmentResponse">UpdateAssessmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateassessmentresponse"></a>
<a id="schema_UpdateAssessmentResponse"></a>
<a id="tocSupdateassessmentresponse"></a>
<a id="tocsupdateassessmentresponse"></a>

```json
{
  "assessment": {
    "arn": {},
    "awsAccount": {
      "id": {},
      "emailAddress": {},
      "name": {}
    },
    "metadata": {
      "name": {},
      "id": {},
      "description": {},
      "complianceType": {},
      "status": {},
      "assessmentReportsDestination": {
        "destinationType": {},
        "destination": {}
      },
      "scope": {
        "awsAccounts": {},
        "awsServices": {}
      },
      "roles": {},
      "delegations": {},
      "creationTime": {},
      "lastUpdated": {}
    },
    "framework": {
      "id": {},
      "arn": {},
      "metadata": {
        "name": {},
        "description": {},
        "logo": {},
        "complianceType": {}
      },
      "controlSets": {}
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assessment|object|false|none|none|

<h2 id="tocS_UpdateAssessmentControlResponse">UpdateAssessmentControlResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateassessmentcontrolresponse"></a>
<a id="schema_UpdateAssessmentControlResponse"></a>
<a id="tocSupdateassessmentcontrolresponse"></a>
<a id="tocsupdateassessmentcontrolresponse"></a>

```json
{
  "control": {
    "id": {},
    "name": {},
    "description": {},
    "status": {},
    "response": {},
    "comments": {},
    "evidenceSources": {},
    "evidenceCount": {},
    "assessmentReportEvidenceCount": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|control|object|false|none|none|

<h2 id="tocS_UpdateAssessmentControlSetStatusResponse">UpdateAssessmentControlSetStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateassessmentcontrolsetstatusresponse"></a>
<a id="schema_UpdateAssessmentControlSetStatusResponse"></a>
<a id="tocSupdateassessmentcontrolsetstatusresponse"></a>
<a id="tocsupdateassessmentcontrolsetstatusresponse"></a>

```json
{
  "controlSet": {
    "id": {},
    "description": {},
    "status": {},
    "roles": {},
    "controls": {},
    "delegations": {},
    "systemEvidenceCount": {},
    "manualEvidenceCount": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|controlSet|object|false|none|none|

<h2 id="tocS_UpdateAssessmentFrameworkResponse">UpdateAssessmentFrameworkResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateassessmentframeworkresponse"></a>
<a id="schema_UpdateAssessmentFrameworkResponse"></a>
<a id="tocSupdateassessmentframeworkresponse"></a>
<a id="tocsupdateassessmentframeworkresponse"></a>

```json
{
  "framework": {
    "arn": {},
    "id": {},
    "name": {},
    "type": {},
    "complianceType": {},
    "description": {},
    "logo": {},
    "controlSources": {},
    "controlSets": {},
    "createdAt": {},
    "lastUpdatedAt": {},
    "createdBy": {},
    "lastUpdatedBy": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|framework|object|false|none|none|

<h2 id="tocS_UpdateAssessmentFrameworkControlSet">UpdateAssessmentFrameworkControlSet</h2>
<!-- backwards compatibility -->
<a id="schemaupdateassessmentframeworkcontrolset"></a>
<a id="schema_UpdateAssessmentFrameworkControlSet"></a>
<a id="tocSupdateassessmentframeworkcontrolset"></a>
<a id="tocsupdateassessmentframeworkcontrolset"></a>

```json
{
  "id": {},
  "name": {},
  "controls": {}
}
```

 A <code>controlSet</code> entity that represents a collection of controls in Audit Manager. This doesn't contain the control set ID.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|name|object|true|none|none|
|controls|object|true|none|none|

<h2 id="tocS_UpdateAssessmentFrameworkShareResponse">UpdateAssessmentFrameworkShareResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateassessmentframeworkshareresponse"></a>
<a id="schema_UpdateAssessmentFrameworkShareResponse"></a>
<a id="tocSupdateassessmentframeworkshareresponse"></a>
<a id="tocsupdateassessmentframeworkshareresponse"></a>

```json
{
  "assessmentFrameworkShareRequest": {
    "id": {},
    "frameworkId": {},
    "frameworkName": {},
    "frameworkDescription": {},
    "status": {},
    "sourceAccount": {},
    "destinationAccount": {},
    "destinationRegion": {},
    "expirationTime": {},
    "creationTime": {},
    "lastUpdated": {},
    "comment": {},
    "standardControlsCount": {},
    "customControlsCount": {},
    "complianceType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assessmentFrameworkShareRequest|object|false|none|none|

<h2 id="tocS_UpdateAssessmentStatusResponse">UpdateAssessmentStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateassessmentstatusresponse"></a>
<a id="schema_UpdateAssessmentStatusResponse"></a>
<a id="tocSupdateassessmentstatusresponse"></a>
<a id="tocsupdateassessmentstatusresponse"></a>

```json
{
  "assessment": {
    "arn": {},
    "awsAccount": {
      "id": {},
      "emailAddress": {},
      "name": {}
    },
    "metadata": {
      "name": {},
      "id": {},
      "description": {},
      "complianceType": {},
      "status": {},
      "assessmentReportsDestination": {
        "destinationType": {},
        "destination": {}
      },
      "scope": {
        "awsAccounts": {},
        "awsServices": {}
      },
      "roles": {},
      "delegations": {},
      "creationTime": {},
      "lastUpdated": {}
    },
    "framework": {
      "id": {},
      "arn": {},
      "metadata": {
        "name": {},
        "description": {},
        "logo": {},
        "complianceType": {}
      },
      "controlSets": {}
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assessment|object|false|none|none|

<h2 id="tocS_UpdateControlResponse">UpdateControlResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecontrolresponse"></a>
<a id="schema_UpdateControlResponse"></a>
<a id="tocSupdatecontrolresponse"></a>
<a id="tocsupdatecontrolresponse"></a>

```json
{
  "control": {
    "arn": {},
    "id": {},
    "type": {},
    "name": {},
    "description": {},
    "testingInformation": {},
    "actionPlanTitle": {},
    "actionPlanInstructions": {},
    "controlSources": {},
    "controlMappingSources": {},
    "createdAt": {},
    "lastUpdatedAt": {},
    "createdBy": {},
    "lastUpdatedBy": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|control|object|false|none|none|

<h2 id="tocS_ControlMappingSource">ControlMappingSource</h2>
<!-- backwards compatibility -->
<a id="schemacontrolmappingsource"></a>
<a id="schema_ControlMappingSource"></a>
<a id="tocScontrolmappingsource"></a>
<a id="tocscontrolmappingsource"></a>

```json
{
  "sourceId": {},
  "sourceName": {},
  "sourceDescription": {},
  "sourceSetUpOption": {},
  "sourceType": {},
  "sourceKeyword": {
    "keywordInputType": {},
    "keywordValue": {}
  },
  "sourceFrequency": {},
  "troubleshootingText": {}
}
```

 The data source that determines where Audit Manager collects evidence from for the control.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceId|object|false|none|none|
|sourceName|object|false|none|none|
|sourceDescription|object|false|none|none|
|sourceSetUpOption|object|false|none|none|
|sourceType|object|false|none|none|
|sourceKeyword|[SourceKeyword](#schemasourcekeyword)|false|none|<p> The keyword to search for in CloudTrail logs, Config rules, Security Hub checks, and Amazon Web Services API names. </p> <p> To learn more about the supported keywords that you can use when mapping a control data source, see the following pages in the <i>Audit Manager User Guide</i>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-ash.html">Config rules supported by Audit Manager</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-config.html">Security Hub controls supported by Audit Manager</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-api.html">API calls supported by Audit Manager</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-cloudtrail.html">CloudTrail event names supported by Audit Manager</a> </p> </li> </ul>|
|sourceFrequency|object|false|none|none|
|troubleshootingText|object|false|none|none|

<h2 id="tocS_UpdateSettingsResponse">UpdateSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesettingsresponse"></a>
<a id="schema_UpdateSettingsResponse"></a>
<a id="tocSupdatesettingsresponse"></a>
<a id="tocsupdatesettingsresponse"></a>

```json
{
  "settings": {
    "isAwsOrgEnabled": {},
    "snsTopic": {},
    "defaultAssessmentReportsDestination": {
      "destinationType": {},
      "destination": {}
    },
    "defaultProcessOwners": {},
    "kmsKey": {},
    "evidenceFinderEnablement": {
      "eventDataStoreArn": {},
      "enablementStatus": {},
      "backfillStatus": {},
      "error": {}
    },
    "deregistrationPolicy": {
      "deleteResources": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|settings|object|false|none|none|

<h2 id="tocS_DeleteResources">DeleteResources</h2>
<!-- backwards compatibility -->
<a id="schemadeleteresources"></a>
<a id="schema_DeleteResources"></a>
<a id="tocSdeleteresources"></a>
<a id="tocsdeleteresources"></a>

```json
"ALL"
```

<h2 id="tocS_ValidateAssessmentReportIntegrityResponse">ValidateAssessmentReportIntegrityResponse</h2>
<!-- backwards compatibility -->
<a id="schemavalidateassessmentreportintegrityresponse"></a>
<a id="schema_ValidateAssessmentReportIntegrityResponse"></a>
<a id="tocSvalidateassessmentreportintegrityresponse"></a>
<a id="tocsvalidateassessmentreportintegrityresponse"></a>

```json
{
  "signatureValid": {},
  "signatureAlgorithm": {},
  "signatureDateTime": {},
  "signatureKeyId": {},
  "validationErrors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|signatureValid|object|false|none|none|
|signatureAlgorithm|object|false|none|none|
|signatureDateTime|object|false|none|none|
|signatureKeyId|object|false|none|none|
|validationErrors|object|false|none|none|

<h2 id="tocS_AccountId">AccountId</h2>
<!-- backwards compatibility -->
<a id="schemaaccountid"></a>
<a id="schema_AccountId"></a>
<a id="tocSaccountid"></a>
<a id="tocsaccountid"></a>

```json
"stringstring"
```

<h2 id="tocS_EmailAddress">EmailAddress</h2>
<!-- backwards compatibility -->
<a id="schemaemailaddress"></a>
<a id="schema_EmailAddress"></a>
<a id="tocSemailaddress"></a>
<a id="tocsemailaddress"></a>

```json
"string"
```

<h2 id="tocS_AccountName">AccountName</h2>
<!-- backwards compatibility -->
<a id="schemaaccountname"></a>
<a id="schema_AccountName"></a>
<a id="tocSaccountname"></a>
<a id="tocsaccountname"></a>

```json
"string"
```

<h2 id="tocS_AWSAccount">AWSAccount</h2>
<!-- backwards compatibility -->
<a id="schemaawsaccount"></a>
<a id="schema_AWSAccount"></a>
<a id="tocSawsaccount"></a>
<a id="tocsawsaccount"></a>

```json
{
  "id": {},
  "emailAddress": {},
  "name": {}
}
```

 The wrapper of Amazon Web Services account details, such as account ID or email address.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|emailAddress|object|false|none|none|
|name|object|false|none|none|

<h2 id="tocS_AWSServiceName">AWSServiceName</h2>
<!-- backwards compatibility -->
<a id="schemaawsservicename"></a>
<a id="schema_AWSServiceName"></a>
<a id="tocSawsservicename"></a>
<a id="tocsawsservicename"></a>

```json
"string"
```

<h2 id="tocS_AWSService">AWSService</h2>
<!-- backwards compatibility -->
<a id="schemaawsservice"></a>
<a id="schema_AWSService"></a>
<a id="tocSawsservice"></a>
<a id="tocsawsservice"></a>

```json
{
  "serviceName": {}
}
```

<p> An Amazon Web Service such as Amazon S3 or CloudTrail. </p> <p>For an example of how to find an Amazon Web Service name and how to define it in your assessment scope, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetServicesInScope.html#API_GetServicesInScope_Example_2">Finding an Amazon Web Service name to use in your assessment scope</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetServicesInScope.html#API_GetServicesInScope_Example_3">Defining an Amazon Web Service name in your assessment scope</a> </p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceName|object|false|none|none|

<h2 id="tocS_AccountStatus">AccountStatus</h2>
<!-- backwards compatibility -->
<a id="schemaaccountstatus"></a>
<a id="schema_AccountStatus"></a>
<a id="tocSaccountstatus"></a>
<a id="tocsaccountstatus"></a>

```json
"ACTIVE"
```

<h2 id="tocS_ActionEnum">ActionEnum</h2>
<!-- backwards compatibility -->
<a id="schemaactionenum"></a>
<a id="schema_ActionEnum"></a>
<a id="tocSactionenum"></a>
<a id="tocsactionenum"></a>

```json
"CREATE"
```

<h2 id="tocS_ActionPlanInstructions">ActionPlanInstructions</h2>
<!-- backwards compatibility -->
<a id="schemaactionplaninstructions"></a>
<a id="schema_ActionPlanInstructions"></a>
<a id="tocSactionplaninstructions"></a>
<a id="tocsactionplaninstructions"></a>

```json
"string"
```

<h2 id="tocS_ActionPlanTitle">ActionPlanTitle</h2>
<!-- backwards compatibility -->
<a id="schemaactionplantitle"></a>
<a id="schema_ActionPlanTitle"></a>
<a id="tocSactionplantitle"></a>
<a id="tocsactionplantitle"></a>

```json
"string"
```

<h2 id="tocS_AuditManagerArn">AuditManagerArn</h2>
<!-- backwards compatibility -->
<a id="schemaauditmanagerarn"></a>
<a id="schema_AuditManagerArn"></a>
<a id="tocSauditmanagerarn"></a>
<a id="tocsauditmanagerarn"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_AssessmentMetadata">AssessmentMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaassessmentmetadata"></a>
<a id="schema_AssessmentMetadata"></a>
<a id="tocSassessmentmetadata"></a>
<a id="tocsassessmentmetadata"></a>

```json
{
  "name": {},
  "id": {},
  "description": {},
  "complianceType": {},
  "status": {},
  "assessmentReportsDestination": {
    "destinationType": {},
    "destination": {}
  },
  "scope": {
    "awsAccounts": {},
    "awsServices": {}
  },
  "roles": {},
  "delegations": {},
  "creationTime": {},
  "lastUpdated": {}
}
```

 The metadata that's associated with the specified assessment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|id|object|false|none|none|
|description|object|false|none|none|
|complianceType|object|false|none|none|
|status|object|false|none|none|
|assessmentReportsDestination|object|false|none|none|
|scope|object|false|none|none|
|roles|object|false|none|none|
|delegations|object|false|none|none|
|creationTime|object|false|none|none|
|lastUpdated|object|false|none|none|

<h2 id="tocS_AssessmentFramework">AssessmentFramework</h2>
<!-- backwards compatibility -->
<a id="schemaassessmentframework"></a>
<a id="schema_AssessmentFramework"></a>
<a id="tocSassessmentframework"></a>
<a id="tocsassessmentframework"></a>

```json
{
  "id": {},
  "arn": {},
  "metadata": {
    "name": {},
    "description": {},
    "logo": {},
    "complianceType": {}
  },
  "controlSets": {}
}
```

 The file used to structure and automate Audit Manager assessments for a given compliance standard.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|arn|object|false|none|none|
|metadata|[FrameworkMetadata](#schemaframeworkmetadata)|false|none| The metadata of a framework, such as the name, ID, or description. |
|controlSets|object|false|none|none|

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

<h2 id="tocS_Assessment">Assessment</h2>
<!-- backwards compatibility -->
<a id="schemaassessment"></a>
<a id="schema_Assessment"></a>
<a id="tocSassessment"></a>
<a id="tocsassessment"></a>

```json
{
  "arn": {},
  "awsAccount": {
    "id": {},
    "emailAddress": {},
    "name": {}
  },
  "metadata": {
    "name": {},
    "id": {},
    "description": {},
    "complianceType": {},
    "status": {},
    "assessmentReportsDestination": {
      "destinationType": {},
      "destination": {}
    },
    "scope": {
      "awsAccounts": {},
      "awsServices": {}
    },
    "roles": {},
    "delegations": {},
    "creationTime": {},
    "lastUpdated": {}
  },
  "framework": {
    "id": {},
    "arn": {},
    "metadata": {
      "name": {},
      "description": {},
      "logo": {},
      "complianceType": {}
    },
    "controlSets": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

 An entity that defines the scope of audit evidence collected by Audit Manager. An Audit Manager assessment is an implementation of an Audit Manager framework.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|awsAccount|object|false|none|none|
|metadata|object|false|none|none|
|framework|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_ControlName">ControlName</h2>
<!-- backwards compatibility -->
<a id="schemacontrolname"></a>
<a id="schema_ControlName"></a>
<a id="tocScontrolname"></a>
<a id="tocscontrolname"></a>

```json
"string"
```

<h2 id="tocS_ControlDescription">ControlDescription</h2>
<!-- backwards compatibility -->
<a id="schemacontroldescription"></a>
<a id="schema_ControlDescription"></a>
<a id="tocScontroldescription"></a>
<a id="tocscontroldescription"></a>

```json
"string"
```

<h2 id="tocS_ControlStatus">ControlStatus</h2>
<!-- backwards compatibility -->
<a id="schemacontrolstatus"></a>
<a id="schema_ControlStatus"></a>
<a id="tocScontrolstatus"></a>
<a id="tocscontrolstatus"></a>

```json
"UNDER_REVIEW"
```

<h2 id="tocS_ControlResponse">ControlResponse</h2>
<!-- backwards compatibility -->
<a id="schemacontrolresponse"></a>
<a id="schema_ControlResponse"></a>
<a id="tocScontrolresponse"></a>
<a id="tocscontrolresponse"></a>

```json
"MANUAL"
```

<h2 id="tocS_ControlComments">ControlComments</h2>
<!-- backwards compatibility -->
<a id="schemacontrolcomments"></a>
<a id="schema_ControlComments"></a>
<a id="tocScontrolcomments"></a>
<a id="tocscontrolcomments"></a>

```json
[
  {
    "authorName": {},
    "commentBody": {},
    "postedDate": {}
  }
]
```

<h2 id="tocS_EvidenceSources">EvidenceSources</h2>
<!-- backwards compatibility -->
<a id="schemaevidencesources"></a>
<a id="schema_EvidenceSources"></a>
<a id="tocSevidencesources"></a>
<a id="tocsevidencesources"></a>

```json
[
  "string"
]
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

<h2 id="tocS_AssessmentControl">AssessmentControl</h2>
<!-- backwards compatibility -->
<a id="schemaassessmentcontrol"></a>
<a id="schema_AssessmentControl"></a>
<a id="tocSassessmentcontrol"></a>
<a id="tocsassessmentcontrol"></a>

```json
{
  "id": {},
  "name": {},
  "description": {},
  "status": {},
  "response": {},
  "comments": {},
  "evidenceSources": {},
  "evidenceCount": {},
  "assessmentReportEvidenceCount": {}
}
```

 The control entity that represents a standard control or a custom control in an Audit Manager assessment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|name|object|false|none|none|
|description|object|false|none|none|
|status|object|false|none|none|
|response|object|false|none|none|
|comments|object|false|none|none|
|evidenceSources|object|false|none|none|
|evidenceCount|object|false|none|none|
|assessmentReportEvidenceCount|object|false|none|none|

<h2 id="tocS_ControlSetId">ControlSetId</h2>
<!-- backwards compatibility -->
<a id="schemacontrolsetid"></a>
<a id="schema_ControlSetId"></a>
<a id="tocScontrolsetid"></a>
<a id="tocscontrolsetid"></a>

```json
"string"
```

<h2 id="tocS_NonEmptyString">NonEmptyString</h2>
<!-- backwards compatibility -->
<a id="schemanonemptystring"></a>
<a id="schema_NonEmptyString"></a>
<a id="tocSnonemptystring"></a>
<a id="tocsnonemptystring"></a>

```json
"string"
```

<h2 id="tocS_ControlSetStatus">ControlSetStatus</h2>
<!-- backwards compatibility -->
<a id="schemacontrolsetstatus"></a>
<a id="schema_ControlSetStatus"></a>
<a id="tocScontrolsetstatus"></a>
<a id="tocscontrolsetstatus"></a>

```json
"ACTIVE"
```

<h2 id="tocS_Roles">Roles</h2>
<!-- backwards compatibility -->
<a id="schemaroles"></a>
<a id="schema_Roles"></a>
<a id="tocSroles"></a>
<a id="tocsroles"></a>

```json
[
  {
    "roleType": {},
    "roleArn": {}
  }
]
```

<h2 id="tocS_AssessmentControls">AssessmentControls</h2>
<!-- backwards compatibility -->
<a id="schemaassessmentcontrols"></a>
<a id="schema_AssessmentControls"></a>
<a id="tocSassessmentcontrols"></a>
<a id="tocsassessmentcontrols"></a>

```json
[
  {
    "id": {},
    "name": {},
    "description": {},
    "status": {},
    "response": {},
    "comments": {},
    "evidenceSources": {},
    "evidenceCount": {},
    "assessmentReportEvidenceCount": {}
  }
]
```

<h2 id="tocS_Delegations">Delegations</h2>
<!-- backwards compatibility -->
<a id="schemadelegations"></a>
<a id="schema_Delegations"></a>
<a id="tocSdelegations"></a>
<a id="tocsdelegations"></a>

```json
[
  {
    "id": {},
    "assessmentName": {},
    "assessmentId": {},
    "status": {},
    "roleArn": {},
    "roleType": {},
    "creationTime": {},
    "lastUpdated": {},
    "controlSetId": {},
    "comment": {},
    "createdBy": {}
  }
]
```

<h2 id="tocS_AssessmentControlSet">AssessmentControlSet</h2>
<!-- backwards compatibility -->
<a id="schemaassessmentcontrolset"></a>
<a id="schema_AssessmentControlSet"></a>
<a id="tocSassessmentcontrolset"></a>
<a id="tocsassessmentcontrolset"></a>

```json
{
  "id": {},
  "description": {},
  "status": {},
  "roles": {},
  "controls": {},
  "delegations": {},
  "systemEvidenceCount": {},
  "manualEvidenceCount": {}
}
```

 Represents a set of controls in an Audit Manager assessment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|description|object|false|none|none|
|status|object|false|none|none|
|roles|object|false|none|none|
|controls|object|false|none|none|
|delegations|object|false|none|none|
|systemEvidenceCount|object|false|none|none|
|manualEvidenceCount|object|false|none|none|

<h2 id="tocS_AssessmentControlSets">AssessmentControlSets</h2>
<!-- backwards compatibility -->
<a id="schemaassessmentcontrolsets"></a>
<a id="schema_AssessmentControlSets"></a>
<a id="tocSassessmentcontrolsets"></a>
<a id="tocsassessmentcontrolsets"></a>

```json
[
  {
    "id": {},
    "description": {},
    "status": {},
    "roles": {},
    "controls": {},
    "delegations": {},
    "systemEvidenceCount": {},
    "manualEvidenceCount": {}
  }
]
```

<h2 id="tocS_AssessmentDescription">AssessmentDescription</h2>
<!-- backwards compatibility -->
<a id="schemaassessmentdescription"></a>
<a id="schema_AssessmentDescription"></a>
<a id="tocSassessmentdescription"></a>
<a id="tocsassessmentdescription"></a>

```json
"string"
```

<h2 id="tocS_AssessmentEvidenceFolderName">AssessmentEvidenceFolderName</h2>
<!-- backwards compatibility -->
<a id="schemaassessmentevidencefoldername"></a>
<a id="schema_AssessmentEvidenceFolderName"></a>
<a id="tocSassessmentevidencefoldername"></a>
<a id="tocsassessmentevidencefoldername"></a>

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
"1970-01-01T00:00:00Z"
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

<h2 id="tocS_AssessmentEvidenceFolder">AssessmentEvidenceFolder</h2>
<!-- backwards compatibility -->
<a id="schemaassessmentevidencefolder"></a>
<a id="schema_AssessmentEvidenceFolder"></a>
<a id="tocSassessmentevidencefolder"></a>
<a id="tocsassessmentevidencefolder"></a>

```json
{
  "name": {},
  "date": {},
  "assessmentId": {},
  "controlSetId": {},
  "controlId": {},
  "id": {},
  "dataSource": {},
  "author": {},
  "totalEvidence": {},
  "assessmentReportSelectionCount": {},
  "controlName": {},
  "evidenceResourcesIncludedCount": {},
  "evidenceByTypeConfigurationDataCount": {},
  "evidenceByTypeManualCount": {},
  "evidenceByTypeComplianceCheckCount": {},
  "evidenceByTypeComplianceCheckIssuesCount": {},
  "evidenceByTypeUserActivityCount": {},
  "evidenceAwsServiceSourceCount": {}
}
```

 The folder where Audit Manager stores evidence for an assessment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|date|object|false|none|none|
|assessmentId|object|false|none|none|
|controlSetId|object|false|none|none|
|controlId|object|false|none|none|
|id|object|false|none|none|
|dataSource|object|false|none|none|
|author|object|false|none|none|
|totalEvidence|object|false|none|none|
|assessmentReportSelectionCount|object|false|none|none|
|controlName|object|false|none|none|
|evidenceResourcesIncludedCount|object|false|none|none|
|evidenceByTypeConfigurationDataCount|object|false|none|none|
|evidenceByTypeManualCount|object|false|none|none|
|evidenceByTypeComplianceCheckCount|object|false|none|none|
|evidenceByTypeComplianceCheckIssuesCount|object|false|none|none|
|evidenceByTypeUserActivityCount|object|false|none|none|
|evidenceAwsServiceSourceCount|object|false|none|none|

<h2 id="tocS_AssessmentEvidenceFolders">AssessmentEvidenceFolders</h2>
<!-- backwards compatibility -->
<a id="schemaassessmentevidencefolders"></a>
<a id="schema_AssessmentEvidenceFolders"></a>
<a id="tocSassessmentevidencefolders"></a>
<a id="tocsassessmentevidencefolders"></a>

```json
[
  {
    "name": {},
    "date": {},
    "assessmentId": {},
    "controlSetId": {},
    "controlId": {},
    "id": {},
    "dataSource": {},
    "author": {},
    "totalEvidence": {},
    "assessmentReportSelectionCount": {},
    "controlName": {},
    "evidenceResourcesIncludedCount": {},
    "evidenceByTypeConfigurationDataCount": {},
    "evidenceByTypeManualCount": {},
    "evidenceByTypeComplianceCheckCount": {},
    "evidenceByTypeComplianceCheckIssuesCount": {},
    "evidenceByTypeUserActivityCount": {},
    "evidenceAwsServiceSourceCount": {}
  }
]
```

<h2 id="tocS_FrameworkMetadata">FrameworkMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaframeworkmetadata"></a>
<a id="schema_FrameworkMetadata"></a>
<a id="tocSframeworkmetadata"></a>
<a id="tocsframeworkmetadata"></a>

```json
{
  "name": {},
  "description": {},
  "logo": {},
  "complianceType": {}
}
```

 The metadata of a framework, such as the name, ID, or description.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|description|object|false|none|none|
|logo|object|false|none|none|
|complianceType|object|false|none|none|

<h2 id="tocS_AssessmentFrameworkDescription">AssessmentFrameworkDescription</h2>
<!-- backwards compatibility -->
<a id="schemaassessmentframeworkdescription"></a>
<a id="schema_AssessmentFrameworkDescription"></a>
<a id="tocSassessmentframeworkdescription"></a>
<a id="tocsassessmentframeworkdescription"></a>

```json
"string"
```

<h2 id="tocS_FrameworkType">FrameworkType</h2>
<!-- backwards compatibility -->
<a id="schemaframeworktype"></a>
<a id="schema_FrameworkType"></a>
<a id="tocSframeworktype"></a>
<a id="tocsframeworktype"></a>

```json
"Standard"
```

<h2 id="tocS_FrameworkName">FrameworkName</h2>
<!-- backwards compatibility -->
<a id="schemaframeworkname"></a>
<a id="schema_FrameworkName"></a>
<a id="tocSframeworkname"></a>
<a id="tocsframeworkname"></a>

```json
"string"
```

<h2 id="tocS_FrameworkDescription">FrameworkDescription</h2>
<!-- backwards compatibility -->
<a id="schemaframeworkdescription"></a>
<a id="schema_FrameworkDescription"></a>
<a id="tocSframeworkdescription"></a>
<a id="tocsframeworkdescription"></a>

```json
"string"
```

<h2 id="tocS_Filename">Filename</h2>
<!-- backwards compatibility -->
<a id="schemafilename"></a>
<a id="schema_Filename"></a>
<a id="tocSfilename"></a>
<a id="tocsfilename"></a>

```json
"string"
```

<h2 id="tocS_ComplianceType">ComplianceType</h2>
<!-- backwards compatibility -->
<a id="schemacompliancetype"></a>
<a id="schema_ComplianceType"></a>
<a id="tocScompliancetype"></a>
<a id="tocscompliancetype"></a>

```json
"string"
```

<h2 id="tocS_ControlsCount">ControlsCount</h2>
<!-- backwards compatibility -->
<a id="schemacontrolscount"></a>
<a id="schema_ControlsCount"></a>
<a id="tocScontrolscount"></a>
<a id="tocscontrolscount"></a>

```json
0
```

<h2 id="tocS_ControlSetsCount">ControlSetsCount</h2>
<!-- backwards compatibility -->
<a id="schemacontrolsetscount"></a>
<a id="schema_ControlSetsCount"></a>
<a id="tocScontrolsetscount"></a>
<a id="tocscontrolsetscount"></a>

```json
0
```

<h2 id="tocS_AssessmentFrameworkMetadata">AssessmentFrameworkMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaassessmentframeworkmetadata"></a>
<a id="schema_AssessmentFrameworkMetadata"></a>
<a id="tocSassessmentframeworkmetadata"></a>
<a id="tocsassessmentframeworkmetadata"></a>

```json
{
  "arn": {},
  "id": {},
  "type": {},
  "name": {},
  "description": {},
  "logo": {},
  "complianceType": {},
  "controlsCount": {},
  "controlSetsCount": {},
  "createdAt": {},
  "lastUpdatedAt": {}
}
```

 The metadata that's associated with a standard framework or a custom framework.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|id|object|false|none|none|
|type|object|false|none|none|
|name|object|false|none|none|
|description|object|false|none|none|
|logo|object|false|none|none|
|complianceType|object|false|none|none|
|controlsCount|object|false|none|none|
|controlSetsCount|object|false|none|none|
|createdAt|object|false|none|none|
|lastUpdatedAt|object|false|none|none|

<h2 id="tocS_ShareRequestStatus">ShareRequestStatus</h2>
<!-- backwards compatibility -->
<a id="schemasharerequeststatus"></a>
<a id="schema_ShareRequestStatus"></a>
<a id="tocSsharerequeststatus"></a>
<a id="tocssharerequeststatus"></a>

```json
"ACTIVE"
```

<h2 id="tocS_Region">Region</h2>
<!-- backwards compatibility -->
<a id="schemaregion"></a>
<a id="schema_Region"></a>
<a id="tocSregion"></a>
<a id="tocsregion"></a>

```json
"string"
```

<h2 id="tocS_ShareRequestComment">ShareRequestComment</h2>
<!-- backwards compatibility -->
<a id="schemasharerequestcomment"></a>
<a id="schema_ShareRequestComment"></a>
<a id="tocSsharerequestcomment"></a>
<a id="tocssharerequestcomment"></a>

```json
"string"
```

<h2 id="tocS_NullableInteger">NullableInteger</h2>
<!-- backwards compatibility -->
<a id="schemanullableinteger"></a>
<a id="schema_NullableInteger"></a>
<a id="tocSnullableinteger"></a>
<a id="tocsnullableinteger"></a>

```json
0
```

<h2 id="tocS_AssessmentFrameworkShareRequest">AssessmentFrameworkShareRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassessmentframeworksharerequest"></a>
<a id="schema_AssessmentFrameworkShareRequest"></a>
<a id="tocSassessmentframeworksharerequest"></a>
<a id="tocsassessmentframeworksharerequest"></a>

```json
{
  "id": {},
  "frameworkId": {},
  "frameworkName": {},
  "frameworkDescription": {},
  "status": {},
  "sourceAccount": {},
  "destinationAccount": {},
  "destinationRegion": {},
  "expirationTime": {},
  "creationTime": {},
  "lastUpdated": {},
  "comment": {},
  "standardControlsCount": {},
  "customControlsCount": {},
  "complianceType": {}
}
```

 Represents a share request for a custom framework in Audit Manager.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|frameworkId|object|false|none|none|
|frameworkName|object|false|none|none|
|frameworkDescription|object|false|none|none|
|status|object|false|none|none|
|sourceAccount|object|false|none|none|
|destinationAccount|object|false|none|none|
|destinationRegion|object|false|none|none|
|expirationTime|object|false|none|none|
|creationTime|object|false|none|none|
|lastUpdated|object|false|none|none|
|comment|object|false|none|none|
|standardControlsCount|object|false|none|none|
|customControlsCount|object|false|none|none|
|complianceType|object|false|none|none|

<h2 id="tocS_AssessmentFrameworkShareRequestList">AssessmentFrameworkShareRequestList</h2>
<!-- backwards compatibility -->
<a id="schemaassessmentframeworksharerequestlist"></a>
<a id="schema_AssessmentFrameworkShareRequestList"></a>
<a id="tocSassessmentframeworksharerequestlist"></a>
<a id="tocsassessmentframeworksharerequestlist"></a>

```json
[
  {
    "id": {},
    "frameworkId": {},
    "frameworkName": {},
    "frameworkDescription": {},
    "status": {},
    "sourceAccount": {},
    "destinationAccount": {},
    "destinationRegion": {},
    "expirationTime": {},
    "creationTime": {},
    "lastUpdated": {},
    "comment": {},
    "standardControlsCount": {},
    "customControlsCount": {},
    "complianceType": {}
  }
]
```

<h2 id="tocS_AssessmentName">AssessmentName</h2>
<!-- backwards compatibility -->
<a id="schemaassessmentname"></a>
<a id="schema_AssessmentName"></a>
<a id="tocSassessmentname"></a>
<a id="tocsassessmentname"></a>

```json
"string"
```

<h2 id="tocS_AssessmentStatus">AssessmentStatus</h2>
<!-- backwards compatibility -->
<a id="schemaassessmentstatus"></a>
<a id="schema_AssessmentStatus"></a>
<a id="tocSassessmentstatus"></a>
<a id="tocsassessmentstatus"></a>

```json
"ACTIVE"
```

<h2 id="tocS_AssessmentReportsDestination">AssessmentReportsDestination</h2>
<!-- backwards compatibility -->
<a id="schemaassessmentreportsdestination"></a>
<a id="schema_AssessmentReportsDestination"></a>
<a id="tocSassessmentreportsdestination"></a>
<a id="tocsassessmentreportsdestination"></a>

```json
{
  "destinationType": {},
  "destination": {}
}
```

 The location where Audit Manager saves assessment reports for the given assessment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationType|object|false|none|none|
|destination|object|false|none|none|

<h2 id="tocS_Scope">Scope</h2>
<!-- backwards compatibility -->
<a id="schemascope"></a>
<a id="schema_Scope"></a>
<a id="tocSscope"></a>
<a id="tocsscope"></a>

```json
{
  "awsAccounts": {},
  "awsServices": {}
}
```

 The wrapper that contains the Amazon Web Services accounts and services that are in scope for the assessment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|awsAccounts|object|false|none|none|
|awsServices|object|false|none|none|

<h2 id="tocS_AssessmentMetadataItem">AssessmentMetadataItem</h2>
<!-- backwards compatibility -->
<a id="schemaassessmentmetadataitem"></a>
<a id="schema_AssessmentMetadataItem"></a>
<a id="tocSassessmentmetadataitem"></a>
<a id="tocsassessmentmetadataitem"></a>

```json
{
  "name": {},
  "id": {},
  "complianceType": {},
  "status": {},
  "roles": {},
  "delegations": {},
  "creationTime": {},
  "lastUpdated": {}
}
```

 A metadata object that's associated with an assessment in Audit Manager.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|id|object|false|none|none|
|complianceType|object|false|none|none|
|status|object|false|none|none|
|roles|object|false|none|none|
|delegations|object|false|none|none|
|creationTime|object|false|none|none|
|lastUpdated|object|false|none|none|

<h2 id="tocS_AssessmentReportName">AssessmentReportName</h2>
<!-- backwards compatibility -->
<a id="schemaassessmentreportname"></a>
<a id="schema_AssessmentReportName"></a>
<a id="tocSassessmentreportname"></a>
<a id="tocsassessmentreportname"></a>

```json
"string"
```

<h2 id="tocS_AssessmentReportDescription">AssessmentReportDescription</h2>
<!-- backwards compatibility -->
<a id="schemaassessmentreportdescription"></a>
<a id="schema_AssessmentReportDescription"></a>
<a id="tocSassessmentreportdescription"></a>
<a id="tocsassessmentreportdescription"></a>

```json
"string"
```

<h2 id="tocS_Username">Username</h2>
<!-- backwards compatibility -->
<a id="schemausername"></a>
<a id="schema_Username"></a>
<a id="tocSusername"></a>
<a id="tocsusername"></a>

```json
"string"
```

<h2 id="tocS_AssessmentReportStatus">AssessmentReportStatus</h2>
<!-- backwards compatibility -->
<a id="schemaassessmentreportstatus"></a>
<a id="schema_AssessmentReportStatus"></a>
<a id="tocSassessmentreportstatus"></a>
<a id="tocsassessmentreportstatus"></a>

```json
"COMPLETE"
```

<h2 id="tocS_AssessmentReport">AssessmentReport</h2>
<!-- backwards compatibility -->
<a id="schemaassessmentreport"></a>
<a id="schema_AssessmentReport"></a>
<a id="tocSassessmentreport"></a>
<a id="tocsassessmentreport"></a>

```json
{
  "id": {},
  "name": {},
  "description": {},
  "awsAccountId": {},
  "assessmentId": {},
  "assessmentName": {},
  "author": {},
  "status": {},
  "creationTime": {}
}
```

 A finalized document that's generated from an Audit Manager assessment. These reports summarize the relevant evidence that was collected for your audit, and link to the relevant evidence folders. These evidence folders are named and organized according to the controls that are specified in your assessment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|name|object|false|none|none|
|description|object|false|none|none|
|awsAccountId|object|false|none|none|
|assessmentId|object|false|none|none|
|assessmentName|object|false|none|none|
|author|object|false|none|none|
|status|object|false|none|none|
|creationTime|object|false|none|none|

<h2 id="tocS_ErrorCode">ErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemaerrorcode"></a>
<a id="schema_ErrorCode"></a>
<a id="tocSerrorcode"></a>
<a id="tocserrorcode"></a>

```json
"str"
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

<h2 id="tocS_AssessmentReportEvidenceError">AssessmentReportEvidenceError</h2>
<!-- backwards compatibility -->
<a id="schemaassessmentreportevidenceerror"></a>
<a id="schema_AssessmentReportEvidenceError"></a>
<a id="tocSassessmentreportevidenceerror"></a>
<a id="tocsassessmentreportevidenceerror"></a>

```json
{
  "evidenceId": {},
  "errorCode": {},
  "errorMessage": {}
}
```

 An error entity for assessment report evidence errors. This is used to provide more meaningful errors than a simple string message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|evidenceId|object|false|none|none|
|errorCode|object|false|none|none|
|errorMessage|object|false|none|none|

<h2 id="tocS_AssessmentReportEvidenceErrors">AssessmentReportEvidenceErrors</h2>
<!-- backwards compatibility -->
<a id="schemaassessmentreportevidenceerrors"></a>
<a id="schema_AssessmentReportEvidenceErrors"></a>
<a id="tocSassessmentreportevidenceerrors"></a>
<a id="tocsassessmentreportevidenceerrors"></a>

```json
[
  {
    "evidenceId": {},
    "errorCode": {},
    "errorMessage": {}
  }
]
```

<h2 id="tocS_AssessmentReportMetadata">AssessmentReportMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaassessmentreportmetadata"></a>
<a id="schema_AssessmentReportMetadata"></a>
<a id="tocSassessmentreportmetadata"></a>
<a id="tocsassessmentreportmetadata"></a>

```json
{
  "id": {},
  "name": {},
  "description": {},
  "assessmentId": {},
  "assessmentName": {},
  "author": {},
  "status": {},
  "creationTime": {}
}
```

 The metadata objects that are associated with the specified assessment report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|name|object|false|none|none|
|description|object|false|none|none|
|assessmentId|object|false|none|none|
|assessmentName|object|false|none|none|
|author|object|false|none|none|
|status|object|false|none|none|
|creationTime|object|false|none|none|

<h2 id="tocS_AssessmentReportsMetadata">AssessmentReportsMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaassessmentreportsmetadata"></a>
<a id="schema_AssessmentReportsMetadata"></a>
<a id="tocSassessmentreportsmetadata"></a>
<a id="tocsassessmentreportsmetadata"></a>

```json
[
  {
    "id": {},
    "name": {},
    "description": {},
    "assessmentId": {},
    "assessmentName": {},
    "author": {},
    "status": {},
    "creationTime": {}
  }
]
```

<h2 id="tocS_AssociateAssessmentReportEvidenceFolderRequest">AssociateAssessmentReportEvidenceFolderRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociateassessmentreportevidencefolderrequest"></a>
<a id="schema_AssociateAssessmentReportEvidenceFolderRequest"></a>
<a id="tocSassociateassessmentreportevidencefolderrequest"></a>
<a id="tocsassociateassessmentreportevidencefolderrequest"></a>

```json
{
  "evidenceFolderId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|evidenceFolderId|object|true|none|none|

<h2 id="tocS_EvidenceIds">EvidenceIds</h2>
<!-- backwards compatibility -->
<a id="schemaevidenceids"></a>
<a id="schema_EvidenceIds"></a>
<a id="tocSevidenceids"></a>
<a id="tocsevidenceids"></a>

```json
[
  "stringstringstringstringstringstring"
]
```

<h2 id="tocS_BatchAssociateAssessmentReportEvidenceRequest">BatchAssociateAssessmentReportEvidenceRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchassociateassessmentreportevidencerequest"></a>
<a id="schema_BatchAssociateAssessmentReportEvidenceRequest"></a>
<a id="tocSbatchassociateassessmentreportevidencerequest"></a>
<a id="tocsbatchassociateassessmentreportevidencerequest"></a>

```json
{
  "evidenceFolderId": {},
  "evidenceIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|evidenceFolderId|object|true|none|none|
|evidenceIds|object|true|none|none|

<h2 id="tocS_BatchCreateDelegationByAssessmentError">BatchCreateDelegationByAssessmentError</h2>
<!-- backwards compatibility -->
<a id="schemabatchcreatedelegationbyassessmenterror"></a>
<a id="schema_BatchCreateDelegationByAssessmentError"></a>
<a id="tocSbatchcreatedelegationbyassessmenterror"></a>
<a id="tocsbatchcreatedelegationbyassessmenterror"></a>

```json
{
  "createDelegationRequest": {
    "comment": {},
    "controlSetId": {},
    "roleArn": {},
    "roleType": {}
  },
  "errorCode": {},
  "errorMessage": {}
}
```

 An error entity for the <code>BatchCreateDelegationByAssessment</code> API. This is used to provide more meaningful errors than a simple string message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createDelegationRequest|object|false|none|none|
|errorCode|object|false|none|none|
|errorMessage|object|false|none|none|

<h2 id="tocS_BatchCreateDelegationByAssessmentErrors">BatchCreateDelegationByAssessmentErrors</h2>
<!-- backwards compatibility -->
<a id="schemabatchcreatedelegationbyassessmenterrors"></a>
<a id="schema_BatchCreateDelegationByAssessmentErrors"></a>
<a id="tocSbatchcreatedelegationbyassessmenterrors"></a>
<a id="tocsbatchcreatedelegationbyassessmenterrors"></a>

```json
[
  {
    "createDelegationRequest": {
      "comment": {},
      "controlSetId": {},
      "roleArn": {},
      "roleType": {}
    },
    "errorCode": {},
    "errorMessage": {}
  }
]
```

<h2 id="tocS_CreateDelegationRequests">CreateDelegationRequests</h2>
<!-- backwards compatibility -->
<a id="schemacreatedelegationrequests"></a>
<a id="schema_CreateDelegationRequests"></a>
<a id="tocScreatedelegationrequests"></a>
<a id="tocscreatedelegationrequests"></a>

```json
[
  {
    "comment": {},
    "controlSetId": {},
    "roleArn": {},
    "roleType": {}
  }
]
```

<h2 id="tocS_BatchCreateDelegationByAssessmentRequest">BatchCreateDelegationByAssessmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchcreatedelegationbyassessmentrequest"></a>
<a id="schema_BatchCreateDelegationByAssessmentRequest"></a>
<a id="tocSbatchcreatedelegationbyassessmentrequest"></a>
<a id="tocsbatchcreatedelegationbyassessmentrequest"></a>

```json
{
  "createDelegationRequests": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createDelegationRequests|object|true|none|none|

<h2 id="tocS_BatchDeleteDelegationByAssessmentError">BatchDeleteDelegationByAssessmentError</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeletedelegationbyassessmenterror"></a>
<a id="schema_BatchDeleteDelegationByAssessmentError"></a>
<a id="tocSbatchdeletedelegationbyassessmenterror"></a>
<a id="tocsbatchdeletedelegationbyassessmenterror"></a>

```json
{
  "delegationId": {},
  "errorCode": {},
  "errorMessage": {}
}
```

 An error entity for the <code>BatchDeleteDelegationByAssessment</code> API. This is used to provide more meaningful errors than a simple string message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delegationId|object|false|none|none|
|errorCode|object|false|none|none|
|errorMessage|object|false|none|none|

<h2 id="tocS_BatchDeleteDelegationByAssessmentErrors">BatchDeleteDelegationByAssessmentErrors</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeletedelegationbyassessmenterrors"></a>
<a id="schema_BatchDeleteDelegationByAssessmentErrors"></a>
<a id="tocSbatchdeletedelegationbyassessmenterrors"></a>
<a id="tocsbatchdeletedelegationbyassessmenterrors"></a>

```json
[
  {
    "delegationId": {},
    "errorCode": {},
    "errorMessage": {}
  }
]
```

<h2 id="tocS_DelegationIds">DelegationIds</h2>
<!-- backwards compatibility -->
<a id="schemadelegationids"></a>
<a id="schema_DelegationIds"></a>
<a id="tocSdelegationids"></a>
<a id="tocsdelegationids"></a>

```json
[
  "stringstringstringstringstringstring"
]
```

<h2 id="tocS_BatchDeleteDelegationByAssessmentRequest">BatchDeleteDelegationByAssessmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeletedelegationbyassessmentrequest"></a>
<a id="schema_BatchDeleteDelegationByAssessmentRequest"></a>
<a id="tocSbatchdeletedelegationbyassessmentrequest"></a>
<a id="tocsbatchdeletedelegationbyassessmentrequest"></a>

```json
{
  "delegationIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delegationIds|object|true|none|none|

<h2 id="tocS_BatchDisassociateAssessmentReportEvidenceRequest">BatchDisassociateAssessmentReportEvidenceRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchdisassociateassessmentreportevidencerequest"></a>
<a id="schema_BatchDisassociateAssessmentReportEvidenceRequest"></a>
<a id="tocSbatchdisassociateassessmentreportevidencerequest"></a>
<a id="tocsbatchdisassociateassessmentreportevidencerequest"></a>

```json
{
  "evidenceFolderId": {},
  "evidenceIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|evidenceFolderId|object|true|none|none|
|evidenceIds|object|true|none|none|

<h2 id="tocS_BatchImportEvidenceToAssessmentControlError">BatchImportEvidenceToAssessmentControlError</h2>
<!-- backwards compatibility -->
<a id="schemabatchimportevidencetoassessmentcontrolerror"></a>
<a id="schema_BatchImportEvidenceToAssessmentControlError"></a>
<a id="tocSbatchimportevidencetoassessmentcontrolerror"></a>
<a id="tocsbatchimportevidencetoassessmentcontrolerror"></a>

```json
{
  "manualEvidence": {
    "s3ResourcePath": {}
  },
  "errorCode": {},
  "errorMessage": {}
}
```

 An error entity for the <code>BatchImportEvidenceToAssessmentControl</code> API. This is used to provide more meaningful errors than a simple string message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|manualEvidence|object|false|none|none|
|errorCode|object|false|none|none|
|errorMessage|object|false|none|none|

<h2 id="tocS_BatchImportEvidenceToAssessmentControlErrors">BatchImportEvidenceToAssessmentControlErrors</h2>
<!-- backwards compatibility -->
<a id="schemabatchimportevidencetoassessmentcontrolerrors"></a>
<a id="schema_BatchImportEvidenceToAssessmentControlErrors"></a>
<a id="tocSbatchimportevidencetoassessmentcontrolerrors"></a>
<a id="tocsbatchimportevidencetoassessmentcontrolerrors"></a>

```json
[
  {
    "manualEvidence": {
      "s3ResourcePath": {}
    },
    "errorCode": {},
    "errorMessage": {}
  }
]
```

<h2 id="tocS_ManualEvidenceList">ManualEvidenceList</h2>
<!-- backwards compatibility -->
<a id="schemamanualevidencelist"></a>
<a id="schema_ManualEvidenceList"></a>
<a id="tocSmanualevidencelist"></a>
<a id="tocsmanualevidencelist"></a>

```json
[
  {
    "s3ResourcePath": {}
  }
]
```

<h2 id="tocS_BatchImportEvidenceToAssessmentControlRequest">BatchImportEvidenceToAssessmentControlRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchimportevidencetoassessmentcontrolrequest"></a>
<a id="schema_BatchImportEvidenceToAssessmentControlRequest"></a>
<a id="tocSbatchimportevidencetoassessmentcontrolrequest"></a>
<a id="tocsbatchimportevidencetoassessmentcontrolrequest"></a>

```json
{
  "manualEvidence": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|manualEvidence|object|true|none|none|

<h2 id="tocS_Boolean">Boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_Boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
```

<h2 id="tocS_ObjectTypeEnum">ObjectTypeEnum</h2>
<!-- backwards compatibility -->
<a id="schemaobjecttypeenum"></a>
<a id="schema_ObjectTypeEnum"></a>
<a id="tocSobjecttypeenum"></a>
<a id="tocsobjecttypeenum"></a>

```json
"ASSESSMENT"
```

<h2 id="tocS_IamArn">IamArn</h2>
<!-- backwards compatibility -->
<a id="schemaiamarn"></a>
<a id="schema_IamArn"></a>
<a id="tocSiamarn"></a>
<a id="tocsiamarn"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_ChangeLog">ChangeLog</h2>
<!-- backwards compatibility -->
<a id="schemachangelog"></a>
<a id="schema_ChangeLog"></a>
<a id="tocSchangelog"></a>
<a id="tocschangelog"></a>

```json
{
  "objectType": {},
  "objectName": {},
  "action": {},
  "createdAt": {},
  "createdBy": {}
}
```

 The record of a change within Audit Manager. For example, this could be the status change of an assessment or the delegation of a control set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectType|object|false|none|none|
|objectName|object|false|none|none|
|action|object|false|none|none|
|createdAt|object|false|none|none|
|createdBy|object|false|none|none|

<h2 id="tocS_ChangeLogs">ChangeLogs</h2>
<!-- backwards compatibility -->
<a id="schemachangelogs"></a>
<a id="schema_ChangeLogs"></a>
<a id="tocSchangelogs"></a>
<a id="tocschangelogs"></a>

```json
[
  {
    "objectType": {},
    "objectName": {},
    "action": {},
    "createdAt": {},
    "createdBy": {}
  }
]
```

<h2 id="tocS_CloudTrailArn">CloudTrailArn</h2>
<!-- backwards compatibility -->
<a id="schemacloudtrailarn"></a>
<a id="schema_CloudTrailArn"></a>
<a id="tocScloudtrailarn"></a>
<a id="tocscloudtrailarn"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_ControlType">ControlType</h2>
<!-- backwards compatibility -->
<a id="schemacontroltype"></a>
<a id="schema_ControlType"></a>
<a id="tocScontroltype"></a>
<a id="tocscontroltype"></a>

```json
"Standard"
```

<h2 id="tocS_TestingInformation">TestingInformation</h2>
<!-- backwards compatibility -->
<a id="schematestinginformation"></a>
<a id="schema_TestingInformation"></a>
<a id="tocStestinginformation"></a>
<a id="tocstestinginformation"></a>

```json
"string"
```

<h2 id="tocS_ControlSources">ControlSources</h2>
<!-- backwards compatibility -->
<a id="schemacontrolsources"></a>
<a id="schema_ControlSources"></a>
<a id="tocScontrolsources"></a>
<a id="tocscontrolsources"></a>

```json
"string"
```

<h2 id="tocS_ControlMappingSources">ControlMappingSources</h2>
<!-- backwards compatibility -->
<a id="schemacontrolmappingsources"></a>
<a id="schema_ControlMappingSources"></a>
<a id="tocScontrolmappingsources"></a>
<a id="tocscontrolmappingsources"></a>

```json
[
  {
    "sourceId": {},
    "sourceName": {},
    "sourceDescription": {},
    "sourceSetUpOption": {},
    "sourceType": {},
    "sourceKeyword": {
      "keywordInputType": {},
      "keywordValue": {}
    },
    "sourceFrequency": {},
    "troubleshootingText": {}
  }
]
```

<h2 id="tocS_CreatedBy">CreatedBy</h2>
<!-- backwards compatibility -->
<a id="schemacreatedby"></a>
<a id="schema_CreatedBy"></a>
<a id="tocScreatedby"></a>
<a id="tocscreatedby"></a>

```json
"string"
```

<h2 id="tocS_LastUpdatedBy">LastUpdatedBy</h2>
<!-- backwards compatibility -->
<a id="schemalastupdatedby"></a>
<a id="schema_LastUpdatedBy"></a>
<a id="tocSlastupdatedby"></a>
<a id="tocslastupdatedby"></a>

```json
"string"
```

<h2 id="tocS_Control">Control</h2>
<!-- backwards compatibility -->
<a id="schemacontrol"></a>
<a id="schema_Control"></a>
<a id="tocScontrol"></a>
<a id="tocscontrol"></a>

```json
{
  "arn": {},
  "id": {},
  "type": {},
  "name": {},
  "description": {},
  "testingInformation": {},
  "actionPlanTitle": {},
  "actionPlanInstructions": {},
  "controlSources": {},
  "controlMappingSources": {},
  "createdAt": {},
  "lastUpdatedAt": {},
  "createdBy": {},
  "lastUpdatedBy": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

 A control in Audit Manager.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|id|object|false|none|none|
|type|object|false|none|none|
|name|object|false|none|none|
|description|object|false|none|none|
|testingInformation|object|false|none|none|
|actionPlanTitle|object|false|none|none|
|actionPlanInstructions|object|false|none|none|
|controlSources|object|false|none|none|
|controlMappingSources|object|false|none|none|
|createdAt|object|false|none|none|
|lastUpdatedAt|object|false|none|none|
|createdBy|object|false|none|none|
|lastUpdatedBy|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_ControlCommentBody">ControlCommentBody</h2>
<!-- backwards compatibility -->
<a id="schemacontrolcommentbody"></a>
<a id="schema_ControlCommentBody"></a>
<a id="tocScontrolcommentbody"></a>
<a id="tocscontrolcommentbody"></a>

```json
"string"
```

<h2 id="tocS_ControlComment">ControlComment</h2>
<!-- backwards compatibility -->
<a id="schemacontrolcomment"></a>
<a id="schema_ControlComment"></a>
<a id="tocScontrolcomment"></a>
<a id="tocscontrolcomment"></a>

```json
{
  "authorName": {},
  "commentBody": {},
  "postedDate": {}
}
```

 A comment that's posted by a user on a control. This includes the author's name, the comment text, and a timestamp.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorName|object|false|none|none|
|commentBody|object|false|none|none|
|postedDate|object|false|none|none|

<h2 id="tocS_EvidenceInsights">EvidenceInsights</h2>
<!-- backwards compatibility -->
<a id="schemaevidenceinsights"></a>
<a id="schema_EvidenceInsights"></a>
<a id="tocSevidenceinsights"></a>
<a id="tocsevidenceinsights"></a>

```json
{
  "noncompliantEvidenceCount": {},
  "compliantEvidenceCount": {},
  "inconclusiveEvidenceCount": {}
}
```

A breakdown of the latest compliance check status for the evidence in your Audit Manager assessments.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|noncompliantEvidenceCount|object|false|none|none|
|compliantEvidenceCount|object|false|none|none|
|inconclusiveEvidenceCount|object|false|none|none|

<h2 id="tocS_ControlDomainInsights">ControlDomainInsights</h2>
<!-- backwards compatibility -->
<a id="schemacontroldomaininsights"></a>
<a id="schema_ControlDomainInsights"></a>
<a id="tocScontroldomaininsights"></a>
<a id="tocscontroldomaininsights"></a>

```json
{
  "name": {},
  "id": {},
  "controlsCountByNoncompliantEvidence": {},
  "totalControlsCount": {},
  "evidenceInsights": {
    "noncompliantEvidenceCount": {},
    "compliantEvidenceCount": {},
    "inconclusiveEvidenceCount": {}
  },
  "lastUpdated": {}
}
```

<p>A summary of the latest analytics data for a specific control domain.</p> <p>Control domain insights are grouped by control domain, and ranked by the highest total count of non-compliant evidence.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|id|object|false|none|none|
|controlsCountByNoncompliantEvidence|object|false|none|none|
|totalControlsCount|object|false|none|none|
|evidenceInsights|object|false|none|none|
|lastUpdated|object|false|none|none|

<h2 id="tocS_ControlDomainInsightsList">ControlDomainInsightsList</h2>
<!-- backwards compatibility -->
<a id="schemacontroldomaininsightslist"></a>
<a id="schema_ControlDomainInsightsList"></a>
<a id="tocScontroldomaininsightslist"></a>
<a id="tocscontroldomaininsightslist"></a>

```json
[
  {
    "name": {},
    "id": {},
    "controlsCountByNoncompliantEvidence": {},
    "totalControlsCount": {},
    "evidenceInsights": {
      "noncompliantEvidenceCount": {},
      "compliantEvidenceCount": {},
      "inconclusiveEvidenceCount": {}
    },
    "lastUpdated": {}
  }
]
```

<h2 id="tocS_ControlInsightsMetadataItem">ControlInsightsMetadataItem</h2>
<!-- backwards compatibility -->
<a id="schemacontrolinsightsmetadataitem"></a>
<a id="schema_ControlInsightsMetadataItem"></a>
<a id="tocScontrolinsightsmetadataitem"></a>
<a id="tocscontrolinsightsmetadataitem"></a>

```json
{
  "name": {},
  "id": {},
  "evidenceInsights": {
    "noncompliantEvidenceCount": {},
    "compliantEvidenceCount": {},
    "inconclusiveEvidenceCount": {}
  },
  "lastUpdated": {}
}
```

<p>A summary of the latest analytics data for a specific control. </p> <p>This data reflects the total counts for the specified control across all active assessments. Control insights are grouped by control domain, and ranked by the highest total count of non-compliant evidence.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|id|object|false|none|none|
|evidenceInsights|object|false|none|none|
|lastUpdated|object|false|none|none|

<h2 id="tocS_ControlInsightsMetadata">ControlInsightsMetadata</h2>
<!-- backwards compatibility -->
<a id="schemacontrolinsightsmetadata"></a>
<a id="schema_ControlInsightsMetadata"></a>
<a id="tocScontrolinsightsmetadata"></a>
<a id="tocscontrolinsightsmetadata"></a>

```json
[
  {
    "name": {},
    "id": {},
    "evidenceInsights": {
      "noncompliantEvidenceCount": {},
      "compliantEvidenceCount": {},
      "inconclusiveEvidenceCount": {}
    },
    "lastUpdated": {}
  }
]
```

<h2 id="tocS_ControlInsightsMetadataByAssessmentItem">ControlInsightsMetadataByAssessmentItem</h2>
<!-- backwards compatibility -->
<a id="schemacontrolinsightsmetadatabyassessmentitem"></a>
<a id="schema_ControlInsightsMetadataByAssessmentItem"></a>
<a id="tocScontrolinsightsmetadatabyassessmentitem"></a>
<a id="tocscontrolinsightsmetadatabyassessmentitem"></a>

```json
{
  "name": {},
  "id": {},
  "evidenceInsights": {
    "noncompliantEvidenceCount": {},
    "compliantEvidenceCount": {},
    "inconclusiveEvidenceCount": {}
  },
  "controlSetName": {},
  "lastUpdated": {}
}
```

<p>A summary of the latest analytics data for a specific control in a specific active assessment.</p> <p>Control insights are grouped by control domain, and ranked by the highest total count of non-compliant evidence. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|id|object|false|none|none|
|evidenceInsights|object|false|none|none|
|controlSetName|object|false|none|none|
|lastUpdated|object|false|none|none|

<h2 id="tocS_ControlInsightsMetadataByAssessment">ControlInsightsMetadataByAssessment</h2>
<!-- backwards compatibility -->
<a id="schemacontrolinsightsmetadatabyassessment"></a>
<a id="schema_ControlInsightsMetadataByAssessment"></a>
<a id="tocScontrolinsightsmetadatabyassessment"></a>
<a id="tocscontrolinsightsmetadatabyassessment"></a>

```json
[
  {
    "name": {},
    "id": {},
    "evidenceInsights": {
      "noncompliantEvidenceCount": {},
      "compliantEvidenceCount": {},
      "inconclusiveEvidenceCount": {}
    },
    "controlSetName": {},
    "lastUpdated": {}
  }
]
```

<h2 id="tocS_SourceName">SourceName</h2>
<!-- backwards compatibility -->
<a id="schemasourcename"></a>
<a id="schema_SourceName"></a>
<a id="tocSsourcename"></a>
<a id="tocssourcename"></a>

```json
"string"
```

<h2 id="tocS_SourceDescription">SourceDescription</h2>
<!-- backwards compatibility -->
<a id="schemasourcedescription"></a>
<a id="schema_SourceDescription"></a>
<a id="tocSsourcedescription"></a>
<a id="tocssourcedescription"></a>

```json
"string"
```

<h2 id="tocS_SourceSetUpOption">SourceSetUpOption</h2>
<!-- backwards compatibility -->
<a id="schemasourcesetupoption"></a>
<a id="schema_SourceSetUpOption"></a>
<a id="tocSsourcesetupoption"></a>
<a id="tocssourcesetupoption"></a>

```json
"System_Controls_Mapping"
```

<h2 id="tocS_SourceType">SourceType</h2>
<!-- backwards compatibility -->
<a id="schemasourcetype"></a>
<a id="schema_SourceType"></a>
<a id="tocSsourcetype"></a>
<a id="tocssourcetype"></a>

```json
"AWS_Cloudtrail"
```

<h2 id="tocS_SourceKeyword">SourceKeyword</h2>
<!-- backwards compatibility -->
<a id="schemasourcekeyword"></a>
<a id="schema_SourceKeyword"></a>
<a id="tocSsourcekeyword"></a>
<a id="tocssourcekeyword"></a>

```json
{
  "keywordInputType": {},
  "keywordValue": {}
}
```

<p> The keyword to search for in CloudTrail logs, Config rules, Security Hub checks, and Amazon Web Services API names. </p> <p> To learn more about the supported keywords that you can use when mapping a control data source, see the following pages in the <i>Audit Manager User Guide</i>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-ash.html">Config rules supported by Audit Manager</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-config.html">Security Hub controls supported by Audit Manager</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-api.html">API calls supported by Audit Manager</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-cloudtrail.html">CloudTrail event names supported by Audit Manager</a> </p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keywordInputType|object|false|none|none|
|keywordValue|object|false|none|none|

<h2 id="tocS_SourceFrequency">SourceFrequency</h2>
<!-- backwards compatibility -->
<a id="schemasourcefrequency"></a>
<a id="schema_SourceFrequency"></a>
<a id="tocSsourcefrequency"></a>
<a id="tocssourcefrequency"></a>

```json
"DAILY"
```

<h2 id="tocS_TroubleshootingText">TroubleshootingText</h2>
<!-- backwards compatibility -->
<a id="schematroubleshootingtext"></a>
<a id="schema_TroubleshootingText"></a>
<a id="tocStroubleshootingtext"></a>
<a id="tocstroubleshootingtext"></a>

```json
"string"
```

<h2 id="tocS_ControlMetadata">ControlMetadata</h2>
<!-- backwards compatibility -->
<a id="schemacontrolmetadata"></a>
<a id="schema_ControlMetadata"></a>
<a id="tocScontrolmetadata"></a>
<a id="tocscontrolmetadata"></a>

```json
{
  "arn": {},
  "id": {},
  "name": {},
  "controlSources": {},
  "createdAt": {},
  "lastUpdatedAt": {}
}
```

 The metadata that's associated with the standard control or custom control.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|id|object|false|none|none|
|name|object|false|none|none|
|controlSources|object|false|none|none|
|createdAt|object|false|none|none|
|lastUpdatedAt|object|false|none|none|

<h2 id="tocS_ControlMetadataList">ControlMetadataList</h2>
<!-- backwards compatibility -->
<a id="schemacontrolmetadatalist"></a>
<a id="schema_ControlMetadataList"></a>
<a id="tocScontrolmetadatalist"></a>
<a id="tocscontrolmetadatalist"></a>

```json
[
  {
    "arn": {},
    "id": {},
    "name": {},
    "controlSources": {},
    "createdAt": {},
    "lastUpdatedAt": {}
  }
]
```

<h2 id="tocS_ControlSetName">ControlSetName</h2>
<!-- backwards compatibility -->
<a id="schemacontrolsetname"></a>
<a id="schema_ControlSetName"></a>
<a id="tocScontrolsetname"></a>
<a id="tocscontrolsetname"></a>

```json
"string"
```

<h2 id="tocS_Controls">Controls</h2>
<!-- backwards compatibility -->
<a id="schemacontrols"></a>
<a id="schema_Controls"></a>
<a id="tocScontrols"></a>
<a id="tocscontrols"></a>

```json
[
  {
    "arn": {},
    "id": {},
    "type": {},
    "name": {},
    "description": {},
    "testingInformation": {},
    "actionPlanTitle": {},
    "actionPlanInstructions": {},
    "controlSources": {},
    "controlMappingSources": {},
    "createdAt": {},
    "lastUpdatedAt": {},
    "createdBy": {},
    "lastUpdatedBy": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_ControlSet">ControlSet</h2>
<!-- backwards compatibility -->
<a id="schemacontrolset"></a>
<a id="schema_ControlSet"></a>
<a id="tocScontrolset"></a>
<a id="tocscontrolset"></a>

```json
{
  "id": {},
  "name": {},
  "controls": {}
}
```

 A set of controls in Audit Manager.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|name|object|false|none|none|
|controls|object|false|none|none|

<h2 id="tocS_ControlSets">ControlSets</h2>
<!-- backwards compatibility -->
<a id="schemacontrolsets"></a>
<a id="schema_ControlSets"></a>
<a id="tocScontrolsets"></a>
<a id="tocscontrolsets"></a>

```json
[
  {
    "id": {},
    "name": {},
    "controls": {}
  }
]
```

<h2 id="tocS_CreateAssessmentFrameworkControl">CreateAssessmentFrameworkControl</h2>
<!-- backwards compatibility -->
<a id="schemacreateassessmentframeworkcontrol"></a>
<a id="schema_CreateAssessmentFrameworkControl"></a>
<a id="tocScreateassessmentframeworkcontrol"></a>
<a id="tocscreateassessmentframeworkcontrol"></a>

```json
{
  "id": {}
}
```

 The control entity attributes that uniquely identify an existing control to be added to a framework in Audit Manager.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|

<h2 id="tocS_CreateAssessmentFrameworkControls">CreateAssessmentFrameworkControls</h2>
<!-- backwards compatibility -->
<a id="schemacreateassessmentframeworkcontrols"></a>
<a id="schema_CreateAssessmentFrameworkControls"></a>
<a id="tocScreateassessmentframeworkcontrols"></a>
<a id="tocscreateassessmentframeworkcontrols"></a>

```json
[
  {
    "id": {}
  }
]
```

<h2 id="tocS_CreateAssessmentFrameworkControlSets">CreateAssessmentFrameworkControlSets</h2>
<!-- backwards compatibility -->
<a id="schemacreateassessmentframeworkcontrolsets"></a>
<a id="schema_CreateAssessmentFrameworkControlSets"></a>
<a id="tocScreateassessmentframeworkcontrolsets"></a>
<a id="tocscreateassessmentframeworkcontrolsets"></a>

```json
[
  {
    "name": {},
    "controls": {}
  }
]
```

<h2 id="tocS_CreateAssessmentFrameworkRequest">CreateAssessmentFrameworkRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateassessmentframeworkrequest"></a>
<a id="schema_CreateAssessmentFrameworkRequest"></a>
<a id="tocScreateassessmentframeworkrequest"></a>
<a id="tocscreateassessmentframeworkrequest"></a>

```json
{
  "name": {},
  "description": {},
  "complianceType": {},
  "controlSets": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|description|object|false|none|none|
|complianceType|object|false|none|none|
|controlSets|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_Framework">Framework</h2>
<!-- backwards compatibility -->
<a id="schemaframework"></a>
<a id="schema_Framework"></a>
<a id="tocSframework"></a>
<a id="tocsframework"></a>

```json
{
  "arn": {},
  "id": {},
  "name": {},
  "type": {},
  "complianceType": {},
  "description": {},
  "logo": {},
  "controlSources": {},
  "controlSets": {},
  "createdAt": {},
  "lastUpdatedAt": {},
  "createdBy": {},
  "lastUpdatedBy": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

 The file that's used to structure and automate Audit Manager assessments for a given compliance standard.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|id|object|false|none|none|
|name|object|false|none|none|
|type|object|false|none|none|
|complianceType|object|false|none|none|
|description|object|false|none|none|
|logo|object|false|none|none|
|controlSources|object|false|none|none|
|controlSets|object|false|none|none|
|createdAt|object|false|none|none|
|lastUpdatedAt|object|false|none|none|
|createdBy|object|false|none|none|
|lastUpdatedBy|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_QueryStatement">QueryStatement</h2>
<!-- backwards compatibility -->
<a id="schemaquerystatement"></a>
<a id="schema_QueryStatement"></a>
<a id="tocSquerystatement"></a>
<a id="tocsquerystatement"></a>

```json
"string"
```

<h2 id="tocS_CreateAssessmentReportRequest">CreateAssessmentReportRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateassessmentreportrequest"></a>
<a id="schema_CreateAssessmentReportRequest"></a>
<a id="tocScreateassessmentreportrequest"></a>
<a id="tocscreateassessmentreportrequest"></a>

```json
{
  "name": {},
  "description": {},
  "queryStatement": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|description|object|false|none|none|
|queryStatement|object|false|none|none|

<h2 id="tocS_CreateAssessmentRequest">CreateAssessmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateassessmentrequest"></a>
<a id="schema_CreateAssessmentRequest"></a>
<a id="tocScreateassessmentrequest"></a>
<a id="tocscreateassessmentrequest"></a>

```json
{
  "name": {},
  "description": {},
  "assessmentReportsDestination": {
    "destinationType": {},
    "destination": {}
  },
  "scope": {
    "awsAccounts": {},
    "awsServices": {}
  },
  "roles": {},
  "frameworkId": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|description|object|false|none|none|
|assessmentReportsDestination|object|true|none|none|
|scope|[Scope](#schemascope)|true|none| The wrapper that contains the Amazon Web Services accounts and services that are in scope for the assessment. |
|roles|object|true|none|none|
|frameworkId|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreateControlMappingSources">CreateControlMappingSources</h2>
<!-- backwards compatibility -->
<a id="schemacreatecontrolmappingsources"></a>
<a id="schema_CreateControlMappingSources"></a>
<a id="tocScreatecontrolmappingsources"></a>
<a id="tocscreatecontrolmappingsources"></a>

```json
[
  {
    "sourceName": {},
    "sourceDescription": {},
    "sourceSetUpOption": {},
    "sourceType": {},
    "sourceKeyword": {
      "keywordInputType": {},
      "keywordValue": {}
    },
    "sourceFrequency": {},
    "troubleshootingText": {}
  }
]
```

<h2 id="tocS_CreateControlRequest">CreateControlRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecontrolrequest"></a>
<a id="schema_CreateControlRequest"></a>
<a id="tocScreatecontrolrequest"></a>
<a id="tocscreatecontrolrequest"></a>

```json
{
  "name": {},
  "description": {},
  "testingInformation": {},
  "actionPlanTitle": {},
  "actionPlanInstructions": {},
  "controlMappingSources": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|description|object|false|none|none|
|testingInformation|object|false|none|none|
|actionPlanTitle|object|false|none|none|
|actionPlanInstructions|object|false|none|none|
|controlMappingSources|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_DelegationComment">DelegationComment</h2>
<!-- backwards compatibility -->
<a id="schemadelegationcomment"></a>
<a id="schema_DelegationComment"></a>
<a id="tocSdelegationcomment"></a>
<a id="tocsdelegationcomment"></a>

```json
"string"
```

<h2 id="tocS_RoleType">RoleType</h2>
<!-- backwards compatibility -->
<a id="schemaroletype"></a>
<a id="schema_RoleType"></a>
<a id="tocSroletype"></a>
<a id="tocsroletype"></a>

```json
"PROCESS_OWNER"
```

<h2 id="tocS_DelegationStatus">DelegationStatus</h2>
<!-- backwards compatibility -->
<a id="schemadelegationstatus"></a>
<a id="schema_DelegationStatus"></a>
<a id="tocSdelegationstatus"></a>
<a id="tocsdelegationstatus"></a>

```json
"IN_PROGRESS"
```

<h2 id="tocS_Delegation">Delegation</h2>
<!-- backwards compatibility -->
<a id="schemadelegation"></a>
<a id="schema_Delegation"></a>
<a id="tocSdelegation"></a>
<a id="tocsdelegation"></a>

```json
{
  "id": {},
  "assessmentName": {},
  "assessmentId": {},
  "status": {},
  "roleArn": {},
  "roleType": {},
  "creationTime": {},
  "lastUpdated": {},
  "controlSetId": {},
  "comment": {},
  "createdBy": {}
}
```

 The assignment of a control set to a delegate for review.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|assessmentName|object|false|none|none|
|assessmentId|object|false|none|none|
|status|object|false|none|none|
|roleArn|object|false|none|none|
|roleType|object|false|none|none|
|creationTime|object|false|none|none|
|lastUpdated|object|false|none|none|
|controlSetId|object|false|none|none|
|comment|object|false|none|none|
|createdBy|object|false|none|none|

<h2 id="tocS_DelegationMetadata">DelegationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemadelegationmetadata"></a>
<a id="schema_DelegationMetadata"></a>
<a id="tocSdelegationmetadata"></a>
<a id="tocsdelegationmetadata"></a>

```json
{
  "id": {},
  "assessmentName": {},
  "assessmentId": {},
  "status": {},
  "roleArn": {},
  "creationTime": {},
  "controlSetName": {}
}
```

 The metadata that's associated with the delegation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|assessmentName|object|false|none|none|
|assessmentId|object|false|none|none|
|status|object|false|none|none|
|roleArn|object|false|none|none|
|creationTime|object|false|none|none|
|controlSetName|object|false|none|none|

<h2 id="tocS_DelegationMetadataList">DelegationMetadataList</h2>
<!-- backwards compatibility -->
<a id="schemadelegationmetadatalist"></a>
<a id="schema_DelegationMetadataList"></a>
<a id="tocSdelegationmetadatalist"></a>
<a id="tocsdelegationmetadatalist"></a>

```json
[
  {
    "id": {},
    "assessmentName": {},
    "assessmentId": {},
    "status": {},
    "roleArn": {},
    "creationTime": {},
    "controlSetName": {}
  }
]
```

<h2 id="tocS_DeleteAssessmentFrameworkRequest">DeleteAssessmentFrameworkRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteassessmentframeworkrequest"></a>
<a id="schema_DeleteAssessmentFrameworkRequest"></a>
<a id="tocSdeleteassessmentframeworkrequest"></a>
<a id="tocsdeleteassessmentframeworkrequest"></a>

```json
{}
```

<h2 id="tocS_ShareRequestType">ShareRequestType</h2>
<!-- backwards compatibility -->
<a id="schemasharerequesttype"></a>
<a id="schema_ShareRequestType"></a>
<a id="tocSsharerequesttype"></a>
<a id="tocssharerequesttype"></a>

```json
"SENT"
```

<h2 id="tocS_DeleteAssessmentFrameworkShareRequest">DeleteAssessmentFrameworkShareRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteassessmentframeworksharerequest"></a>
<a id="schema_DeleteAssessmentFrameworkShareRequest"></a>
<a id="tocSdeleteassessmentframeworksharerequest"></a>
<a id="tocsdeleteassessmentframeworksharerequest"></a>

```json
{}
```

<h2 id="tocS_DeleteAssessmentReportRequest">DeleteAssessmentReportRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteassessmentreportrequest"></a>
<a id="schema_DeleteAssessmentReportRequest"></a>
<a id="tocSdeleteassessmentreportrequest"></a>
<a id="tocsdeleteassessmentreportrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteAssessmentRequest">DeleteAssessmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteassessmentrequest"></a>
<a id="schema_DeleteAssessmentRequest"></a>
<a id="tocSdeleteassessmentrequest"></a>
<a id="tocsdeleteassessmentrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteControlRequest">DeleteControlRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletecontrolrequest"></a>
<a id="schema_DeleteControlRequest"></a>
<a id="tocSdeletecontrolrequest"></a>
<a id="tocsdeletecontrolrequest"></a>

```json
{}
```

<h2 id="tocS_DeregisterAccountRequest">DeregisterAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemaderegisteraccountrequest"></a>
<a id="schema_DeregisterAccountRequest"></a>
<a id="tocSderegisteraccountrequest"></a>
<a id="tocsderegisteraccountrequest"></a>

```json
{}
```

<h2 id="tocS_DeregisterOrganizationAdminAccountRequest">DeregisterOrganizationAdminAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemaderegisterorganizationadminaccountrequest"></a>
<a id="schema_DeregisterOrganizationAdminAccountRequest"></a>
<a id="tocSderegisterorganizationadminaccountrequest"></a>
<a id="tocsderegisterorganizationadminaccountrequest"></a>

```json
{
  "adminAccountId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adminAccountId|object|false|none|none|

<h2 id="tocS_DeregistrationPolicy">DeregistrationPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaderegistrationpolicy"></a>
<a id="schema_DeregistrationPolicy"></a>
<a id="tocSderegistrationpolicy"></a>
<a id="tocsderegistrationpolicy"></a>

```json
{
  "deleteResources": {}
}
```

<p>The deregistration policy for the data that's stored in Audit Manager. You can use this attribute to determine how your data is handled when you <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeregisterAccount.html">deregister Audit Manager</a>.</p> <p>By default, Audit Manager retains evidence data for two years from the time of its creation. Other Audit Manager resources (including assessments, custom controls, and custom frameworks) remain in Audit Manager indefinitely, and are available if you <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_RegisterAccount.html">re-register Audit Manager</a> in the future. For more information about data retention, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/data-protection.html">Data Protection</a> in the <i>Audit Manager User Guide</i>.</p> <important> <p>If you choose to delete all data, this action permanently deletes all evidence data in your account within seven days. It also deletes all of the Audit Manager resources that you created, including assessments, custom controls, and custom frameworks. Your data will not be available if you re-register Audit Manager in the future.</p> </important>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deleteResources|object|false|none|none|

<h2 id="tocS_DisassociateAssessmentReportEvidenceFolderRequest">DisassociateAssessmentReportEvidenceFolderRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateassessmentreportevidencefolderrequest"></a>
<a id="schema_DisassociateAssessmentReportEvidenceFolderRequest"></a>
<a id="tocSdisassociateassessmentreportevidencefolderrequest"></a>
<a id="tocsdisassociateassessmentreportevidencefolderrequest"></a>

```json
{
  "evidenceFolderId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|evidenceFolderId|object|true|none|none|

<h2 id="tocS_EventName">EventName</h2>
<!-- backwards compatibility -->
<a id="schemaeventname"></a>
<a id="schema_EventName"></a>
<a id="tocSeventname"></a>
<a id="tocseventname"></a>

```json
"string"
```

<h2 id="tocS_Resources">Resources</h2>
<!-- backwards compatibility -->
<a id="schemaresources"></a>
<a id="schema_Resources"></a>
<a id="tocSresources"></a>
<a id="tocsresources"></a>

```json
[
  {
    "arn": {},
    "value": {},
    "complianceCheck": {}
  }
]
```

<h2 id="tocS_EvidenceAttributes">EvidenceAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaevidenceattributes"></a>
<a id="schema_EvidenceAttributes"></a>
<a id="tocSevidenceattributes"></a>
<a id="tocsevidenceattributes"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[EvidenceAttributeValue](#schemaevidenceattributevalue)|false|none|none|

<h2 id="tocS_Evidence">Evidence</h2>
<!-- backwards compatibility -->
<a id="schemaevidence"></a>
<a id="schema_Evidence"></a>
<a id="tocSevidence"></a>
<a id="tocsevidence"></a>

```json
{
  "dataSource": {},
  "evidenceAwsAccountId": {},
  "time": {},
  "eventSource": {},
  "eventName": {},
  "evidenceByType": {},
  "resourcesIncluded": {},
  "attributes": {
    "property1": "string",
    "property2": "string"
  },
  "iamId": {},
  "complianceCheck": {},
  "awsOrganization": {},
  "awsAccountId": {},
  "evidenceFolderId": {},
  "id": {},
  "assessmentReportSelection": {}
}
```

 A record that contains the information needed to demonstrate compliance with the requirements specified by a control. Examples of evidence include change activity invoked by a user, or a system configuration snapshot.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataSource|object|false|none|none|
|evidenceAwsAccountId|object|false|none|none|
|time|object|false|none|none|
|eventSource|object|false|none|none|
|eventName|object|false|none|none|
|evidenceByType|object|false|none|none|
|resourcesIncluded|object|false|none|none|
|attributes|object|false|none|none|
|iamId|object|false|none|none|
|complianceCheck|object|false|none|none|
|awsOrganization|object|false|none|none|
|awsAccountId|object|false|none|none|
|evidenceFolderId|object|false|none|none|
|id|object|false|none|none|
|assessmentReportSelection|object|false|none|none|

<h2 id="tocS_EvidenceAttributeKey">EvidenceAttributeKey</h2>
<!-- backwards compatibility -->
<a id="schemaevidenceattributekey"></a>
<a id="schema_EvidenceAttributeKey"></a>
<a id="tocSevidenceattributekey"></a>
<a id="tocsevidenceattributekey"></a>

```json
"string"
```

<h2 id="tocS_EvidenceAttributeValue">EvidenceAttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemaevidenceattributevalue"></a>
<a id="schema_EvidenceAttributeValue"></a>
<a id="tocSevidenceattributevalue"></a>
<a id="tocsevidenceattributevalue"></a>

```json
"string"
```

<h2 id="tocS_EvidenceFinderBackfillStatus">EvidenceFinderBackfillStatus</h2>
<!-- backwards compatibility -->
<a id="schemaevidencefinderbackfillstatus"></a>
<a id="schema_EvidenceFinderBackfillStatus"></a>
<a id="tocSevidencefinderbackfillstatus"></a>
<a id="tocsevidencefinderbackfillstatus"></a>

```json
"NOT_STARTED"
```

<h2 id="tocS_EvidenceFinderEnablementStatus">EvidenceFinderEnablementStatus</h2>
<!-- backwards compatibility -->
<a id="schemaevidencefinderenablementstatus"></a>
<a id="schema_EvidenceFinderEnablementStatus"></a>
<a id="tocSevidencefinderenablementstatus"></a>
<a id="tocsevidencefinderenablementstatus"></a>

```json
"ENABLED"
```

<h2 id="tocS_EvidenceFinderEnablement">EvidenceFinderEnablement</h2>
<!-- backwards compatibility -->
<a id="schemaevidencefinderenablement"></a>
<a id="schema_EvidenceFinderEnablement"></a>
<a id="tocSevidencefinderenablement"></a>
<a id="tocsevidencefinderenablement"></a>

```json
{
  "eventDataStoreArn": {},
  "enablementStatus": {},
  "backfillStatus": {},
  "error": {}
}
```

The settings object that specifies whether evidence finder is enabled. This object also describes the related event data store, and the backfill status for populating the event data store with evidence data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventDataStoreArn|object|false|none|none|
|enablementStatus|object|false|none|none|
|backfillStatus|object|false|none|none|
|error|object|false|none|none|

<h2 id="tocS_EvidenceList">EvidenceList</h2>
<!-- backwards compatibility -->
<a id="schemaevidencelist"></a>
<a id="schema_EvidenceList"></a>
<a id="tocSevidencelist"></a>
<a id="tocsevidencelist"></a>

```json
[
  {
    "dataSource": {},
    "evidenceAwsAccountId": {},
    "time": {},
    "eventSource": {},
    "eventName": {},
    "evidenceByType": {},
    "resourcesIncluded": {},
    "attributes": {
      "property1": "string",
      "property2": "string"
    },
    "iamId": {},
    "complianceCheck": {},
    "awsOrganization": {},
    "awsAccountId": {},
    "evidenceFolderId": {},
    "id": {},
    "assessmentReportSelection": {}
  }
]
```

<h2 id="tocS_FrameworkMetadataList">FrameworkMetadataList</h2>
<!-- backwards compatibility -->
<a id="schemaframeworkmetadatalist"></a>
<a id="schema_FrameworkMetadataList"></a>
<a id="tocSframeworkmetadatalist"></a>
<a id="tocsframeworkmetadatalist"></a>

```json
[
  {
    "arn": {},
    "id": {},
    "type": {},
    "name": {},
    "description": {},
    "logo": {},
    "complianceType": {},
    "controlsCount": {},
    "controlSetsCount": {},
    "createdAt": {},
    "lastUpdatedAt": {}
  }
]
```

<h2 id="tocS_GenericArn">GenericArn</h2>
<!-- backwards compatibility -->
<a id="schemagenericarn"></a>
<a id="schema_GenericArn"></a>
<a id="tocSgenericarn"></a>
<a id="tocsgenericarn"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_GetAccountStatusRequest">GetAccountStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetaccountstatusrequest"></a>
<a id="schema_GetAccountStatusRequest"></a>
<a id="tocSgetaccountstatusrequest"></a>
<a id="tocsgetaccountstatusrequest"></a>

```json
{}
```

<h2 id="tocS_GetAssessmentFrameworkRequest">GetAssessmentFrameworkRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetassessmentframeworkrequest"></a>
<a id="schema_GetAssessmentFrameworkRequest"></a>
<a id="tocSgetassessmentframeworkrequest"></a>
<a id="tocsgetassessmentframeworkrequest"></a>

```json
{}
```

<h2 id="tocS_GetAssessmentReportUrlRequest">GetAssessmentReportUrlRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetassessmentreporturlrequest"></a>
<a id="schema_GetAssessmentReportUrlRequest"></a>
<a id="tocSgetassessmentreporturlrequest"></a>
<a id="tocsgetassessmentreporturlrequest"></a>

```json
{}
```

<h2 id="tocS_URL">URL</h2>
<!-- backwards compatibility -->
<a id="schemaurl"></a>
<a id="schema_URL"></a>
<a id="tocSurl"></a>
<a id="tocsurl"></a>

```json
{
  "hyperlinkName": {},
  "link": {}
}
```

 Short for uniform resource locator. A URL is used as a unique identifier to locate a resource on the internet.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hyperlinkName|object|false|none|none|
|link|object|false|none|none|

<h2 id="tocS_GetAssessmentRequest">GetAssessmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetassessmentrequest"></a>
<a id="schema_GetAssessmentRequest"></a>
<a id="tocSgetassessmentrequest"></a>
<a id="tocsgetassessmentrequest"></a>

```json
{}
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

<h2 id="tocS_MaxResults">MaxResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxresults"></a>
<a id="schema_MaxResults"></a>
<a id="tocSmaxresults"></a>
<a id="tocsmaxresults"></a>

```json
1
```

Max results in the page.

<h2 id="tocS_GetChangeLogsRequest">GetChangeLogsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetchangelogsrequest"></a>
<a id="schema_GetChangeLogsRequest"></a>
<a id="tocSgetchangelogsrequest"></a>
<a id="tocsgetchangelogsrequest"></a>

```json
{}
```

<h2 id="tocS_GetControlRequest">GetControlRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcontrolrequest"></a>
<a id="schema_GetControlRequest"></a>
<a id="tocSgetcontrolrequest"></a>
<a id="tocsgetcontrolrequest"></a>

```json
{}
```

<h2 id="tocS_GetDelegationsRequest">GetDelegationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdelegationsrequest"></a>
<a id="schema_GetDelegationsRequest"></a>
<a id="tocSgetdelegationsrequest"></a>
<a id="tocsgetdelegationsrequest"></a>

```json
{}
```

<h2 id="tocS_GetEvidenceByEvidenceFolderRequest">GetEvidenceByEvidenceFolderRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetevidencebyevidencefolderrequest"></a>
<a id="schema_GetEvidenceByEvidenceFolderRequest"></a>
<a id="tocSgetevidencebyevidencefolderrequest"></a>
<a id="tocsgetevidencebyevidencefolderrequest"></a>

```json
{}
```

<h2 id="tocS_GetEvidenceFolderRequest">GetEvidenceFolderRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetevidencefolderrequest"></a>
<a id="schema_GetEvidenceFolderRequest"></a>
<a id="tocSgetevidencefolderrequest"></a>
<a id="tocsgetevidencefolderrequest"></a>

```json
{}
```

<h2 id="tocS_GetEvidenceFoldersByAssessmentControlRequest">GetEvidenceFoldersByAssessmentControlRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetevidencefoldersbyassessmentcontrolrequest"></a>
<a id="schema_GetEvidenceFoldersByAssessmentControlRequest"></a>
<a id="tocSgetevidencefoldersbyassessmentcontrolrequest"></a>
<a id="tocsgetevidencefoldersbyassessmentcontrolrequest"></a>

```json
{}
```

<h2 id="tocS_GetEvidenceFoldersByAssessmentRequest">GetEvidenceFoldersByAssessmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetevidencefoldersbyassessmentrequest"></a>
<a id="schema_GetEvidenceFoldersByAssessmentRequest"></a>
<a id="tocSgetevidencefoldersbyassessmentrequest"></a>
<a id="tocsgetevidencefoldersbyassessmentrequest"></a>

```json
{}
```

<h2 id="tocS_GetEvidenceRequest">GetEvidenceRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetevidencerequest"></a>
<a id="schema_GetEvidenceRequest"></a>
<a id="tocSgetevidencerequest"></a>
<a id="tocsgetevidencerequest"></a>

```json
{}
```

<h2 id="tocS_GetInsightsByAssessmentRequest">GetInsightsByAssessmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetinsightsbyassessmentrequest"></a>
<a id="schema_GetInsightsByAssessmentRequest"></a>
<a id="tocSgetinsightsbyassessmentrequest"></a>
<a id="tocsgetinsightsbyassessmentrequest"></a>

```json
{}
```

<h2 id="tocS_InsightsByAssessment">InsightsByAssessment</h2>
<!-- backwards compatibility -->
<a id="schemainsightsbyassessment"></a>
<a id="schema_InsightsByAssessment"></a>
<a id="tocSinsightsbyassessment"></a>
<a id="tocsinsightsbyassessment"></a>

```json
{
  "noncompliantEvidenceCount": {},
  "compliantEvidenceCount": {},
  "inconclusiveEvidenceCount": {},
  "assessmentControlsCountByNoncompliantEvidence": {},
  "totalAssessmentControlsCount": {},
  "lastUpdated": {}
}
```

<p>A summary of the latest analytics data for a specific active assessment.</p> <p>This summary is a snapshot of the data that was collected on the <code>lastUpdated</code> date. It’s important to understand that the totals in <code>InsightsByAssessment</code> are daily counts based on this date — they aren’t a total sum to date. </p> <p>The <code>InsightsByAssessment</code> data is eventually consistent. This means that when you read data from <code>InsightsByAssessment</code>, the response might not instantly reflect the results of a recently completed write or update operation. If you repeat your read request after a few hours, the response returns the latest data.</p> <note> <p>If you delete an assessment or change its status to inactive, <code>InsightsByAssessment</code> includes data for that assessment as follows.</p> <ul> <li> <p> <b>Inactive assessments</b> - If Audit Manager collected evidence for your assessment before you changed it inactive, that evidence is included in the <code>InsightsByAssessment</code> counts for that day.</p> </li> <li> <p> <b>Deleted assessments</b> - If Audit Manager collected evidence for your assessment before you deleted it, that evidence isn't included in the <code>InsightsByAssessment</code> counts for that day.</p> </li> </ul> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|noncompliantEvidenceCount|object|false|none|none|
|compliantEvidenceCount|object|false|none|none|
|inconclusiveEvidenceCount|object|false|none|none|
|assessmentControlsCountByNoncompliantEvidence|object|false|none|none|
|totalAssessmentControlsCount|object|false|none|none|
|lastUpdated|object|false|none|none|

<h2 id="tocS_GetInsightsRequest">GetInsightsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetinsightsrequest"></a>
<a id="schema_GetInsightsRequest"></a>
<a id="tocSgetinsightsrequest"></a>
<a id="tocsgetinsightsrequest"></a>

```json
{}
```

<h2 id="tocS_Insights">Insights</h2>
<!-- backwards compatibility -->
<a id="schemainsights"></a>
<a id="schema_Insights"></a>
<a id="tocSinsights"></a>
<a id="tocsinsights"></a>

```json
{
  "activeAssessmentsCount": {},
  "noncompliantEvidenceCount": {},
  "compliantEvidenceCount": {},
  "inconclusiveEvidenceCount": {},
  "assessmentControlsCountByNoncompliantEvidence": {},
  "totalAssessmentControlsCount": {},
  "lastUpdated": {}
}
```

<p>A summary of the latest analytics data for all your active assessments. </p> <p>This summary is a snapshot of the data that your active assessments collected on the <code>lastUpdated</code> date. It’s important to understand that the following totals are daily counts based on this date — they aren’t a total sum to date. </p> <p>The <code>Insights</code> data is eventually consistent. This means that, when you read data from <code>Insights</code>, the response might not instantly reflect the results of a recently completed write or update operation. If you repeat your read request after a few hours, the response should return the latest data.</p> <note> <p>If you delete an assessment or change its status to inactive, <code>InsightsByAssessment</code> includes data for that assessment as follows.</p> <ul> <li> <p> <b>Inactive assessments</b> - If Audit Manager collected evidence for your assessment before you changed it inactive, that evidence is included in the <code>InsightsByAssessment</code> counts for that day.</p> </li> <li> <p> <b>Deleted assessments</b> - If Audit Manager collected evidence for your assessment before you deleted it, that evidence isn't included in the <code>InsightsByAssessment</code> counts for that day.</p> </li> </ul> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activeAssessmentsCount|object|false|none|none|
|noncompliantEvidenceCount|object|false|none|none|
|compliantEvidenceCount|object|false|none|none|
|inconclusiveEvidenceCount|object|false|none|none|
|assessmentControlsCountByNoncompliantEvidence|object|false|none|none|
|totalAssessmentControlsCount|object|false|none|none|
|lastUpdated|object|false|none|none|

<h2 id="tocS_GetOrganizationAdminAccountRequest">GetOrganizationAdminAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetorganizationadminaccountrequest"></a>
<a id="schema_GetOrganizationAdminAccountRequest"></a>
<a id="tocSgetorganizationadminaccountrequest"></a>
<a id="tocsgetorganizationadminaccountrequest"></a>

```json
{}
```

<h2 id="tocS_organizationId">organizationId</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationid"></a>
<a id="schema_organizationId"></a>
<a id="tocSorganizationid"></a>
<a id="tocsorganizationid"></a>

```json
"stringstring"
```

<h2 id="tocS_GetServicesInScopeRequest">GetServicesInScopeRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetservicesinscoperequest"></a>
<a id="schema_GetServicesInScopeRequest"></a>
<a id="tocSgetservicesinscoperequest"></a>
<a id="tocsgetservicesinscoperequest"></a>

```json
{}
```

<h2 id="tocS_ServiceMetadataList">ServiceMetadataList</h2>
<!-- backwards compatibility -->
<a id="schemaservicemetadatalist"></a>
<a id="schema_ServiceMetadataList"></a>
<a id="tocSservicemetadatalist"></a>
<a id="tocsservicemetadatalist"></a>

```json
[
  {
    "name": {},
    "displayName": {},
    "description": {},
    "category": {}
  }
]
```

<h2 id="tocS_SettingAttribute">SettingAttribute</h2>
<!-- backwards compatibility -->
<a id="schemasettingattribute"></a>
<a id="schema_SettingAttribute"></a>
<a id="tocSsettingattribute"></a>
<a id="tocssettingattribute"></a>

```json
"ALL"
```

<h2 id="tocS_GetSettingsRequest">GetSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsettingsrequest"></a>
<a id="schema_GetSettingsRequest"></a>
<a id="tocSgetsettingsrequest"></a>
<a id="tocsgetsettingsrequest"></a>

```json
{}
```

<h2 id="tocS_Settings">Settings</h2>
<!-- backwards compatibility -->
<a id="schemasettings"></a>
<a id="schema_Settings"></a>
<a id="tocSsettings"></a>
<a id="tocssettings"></a>

```json
{
  "isAwsOrgEnabled": {},
  "snsTopic": {},
  "defaultAssessmentReportsDestination": {
    "destinationType": {},
    "destination": {}
  },
  "defaultProcessOwners": {},
  "kmsKey": {},
  "evidenceFinderEnablement": {
    "eventDataStoreArn": {},
    "enablementStatus": {},
    "backfillStatus": {},
    "error": {}
  },
  "deregistrationPolicy": {
    "deleteResources": {}
  }
}
```

 The settings object that holds all supported Audit Manager settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isAwsOrgEnabled|object|false|none|none|
|snsTopic|object|false|none|none|
|defaultAssessmentReportsDestination|object|false|none|none|
|defaultProcessOwners|object|false|none|none|
|kmsKey|object|false|none|none|
|evidenceFinderEnablement|object|false|none|none|
|deregistrationPolicy|object|false|none|none|

<h2 id="tocS_HyperlinkName">HyperlinkName</h2>
<!-- backwards compatibility -->
<a id="schemahyperlinkname"></a>
<a id="schema_HyperlinkName"></a>
<a id="tocShyperlinkname"></a>
<a id="tocshyperlinkname"></a>

```json
"string"
```

<h2 id="tocS_KeywordInputType">KeywordInputType</h2>
<!-- backwards compatibility -->
<a id="schemakeywordinputtype"></a>
<a id="schema_KeywordInputType"></a>
<a id="tocSkeywordinputtype"></a>
<a id="tocskeywordinputtype"></a>

```json
"SELECT_FROM_LIST"
```

<h2 id="tocS_KeywordValue">KeywordValue</h2>
<!-- backwards compatibility -->
<a id="schemakeywordvalue"></a>
<a id="schema_KeywordValue"></a>
<a id="tocSkeywordvalue"></a>
<a id="tocskeywordvalue"></a>

```json
"string"
```

<h2 id="tocS_Keywords">Keywords</h2>
<!-- backwards compatibility -->
<a id="schemakeywords"></a>
<a id="schema_Keywords"></a>
<a id="tocSkeywords"></a>
<a id="tocskeywords"></a>

```json
[
  "string"
]
```

<h2 id="tocS_KmsKey">KmsKey</h2>
<!-- backwards compatibility -->
<a id="schemakmskey"></a>
<a id="schema_KmsKey"></a>
<a id="tocSkmskey"></a>
<a id="tocskmskey"></a>

```json
"strings"
```

<h2 id="tocS_ListAssessmentControlInsightsByControlDomainRequest">ListAssessmentControlInsightsByControlDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistassessmentcontrolinsightsbycontroldomainrequest"></a>
<a id="schema_ListAssessmentControlInsightsByControlDomainRequest"></a>
<a id="tocSlistassessmentcontrolinsightsbycontroldomainrequest"></a>
<a id="tocslistassessmentcontrolinsightsbycontroldomainrequest"></a>

```json
{}
```

<h2 id="tocS_ListAssessmentFrameworkShareRequestsRequest">ListAssessmentFrameworkShareRequestsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistassessmentframeworksharerequestsrequest"></a>
<a id="schema_ListAssessmentFrameworkShareRequestsRequest"></a>
<a id="tocSlistassessmentframeworksharerequestsrequest"></a>
<a id="tocslistassessmentframeworksharerequestsrequest"></a>

```json
{}
```

<h2 id="tocS_ListAssessmentFrameworksRequest">ListAssessmentFrameworksRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistassessmentframeworksrequest"></a>
<a id="schema_ListAssessmentFrameworksRequest"></a>
<a id="tocSlistassessmentframeworksrequest"></a>
<a id="tocslistassessmentframeworksrequest"></a>

```json
{}
```

<h2 id="tocS_ListAssessmentMetadata">ListAssessmentMetadata</h2>
<!-- backwards compatibility -->
<a id="schemalistassessmentmetadata"></a>
<a id="schema_ListAssessmentMetadata"></a>
<a id="tocSlistassessmentmetadata"></a>
<a id="tocslistassessmentmetadata"></a>

```json
[
  {
    "name": {},
    "id": {},
    "complianceType": {},
    "status": {},
    "roles": {},
    "delegations": {},
    "creationTime": {},
    "lastUpdated": {}
  }
]
```

<h2 id="tocS_ListAssessmentReportsRequest">ListAssessmentReportsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistassessmentreportsrequest"></a>
<a id="schema_ListAssessmentReportsRequest"></a>
<a id="tocSlistassessmentreportsrequest"></a>
<a id="tocslistassessmentreportsrequest"></a>

```json
{}
```

<h2 id="tocS_ListAssessmentsRequest">ListAssessmentsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistassessmentsrequest"></a>
<a id="schema_ListAssessmentsRequest"></a>
<a id="tocSlistassessmentsrequest"></a>
<a id="tocslistassessmentsrequest"></a>

```json
{}
```

<h2 id="tocS_ListControlDomainInsightsByAssessmentRequest">ListControlDomainInsightsByAssessmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcontroldomaininsightsbyassessmentrequest"></a>
<a id="schema_ListControlDomainInsightsByAssessmentRequest"></a>
<a id="tocSlistcontroldomaininsightsbyassessmentrequest"></a>
<a id="tocslistcontroldomaininsightsbyassessmentrequest"></a>

```json
{}
```

<h2 id="tocS_ListControlDomainInsightsRequest">ListControlDomainInsightsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcontroldomaininsightsrequest"></a>
<a id="schema_ListControlDomainInsightsRequest"></a>
<a id="tocSlistcontroldomaininsightsrequest"></a>
<a id="tocslistcontroldomaininsightsrequest"></a>

```json
{}
```

<h2 id="tocS_ListControlInsightsByControlDomainRequest">ListControlInsightsByControlDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcontrolinsightsbycontroldomainrequest"></a>
<a id="schema_ListControlInsightsByControlDomainRequest"></a>
<a id="tocSlistcontrolinsightsbycontroldomainrequest"></a>
<a id="tocslistcontrolinsightsbycontroldomainrequest"></a>

```json
{}
```

<h2 id="tocS_ListControlsRequest">ListControlsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcontrolsrequest"></a>
<a id="schema_ListControlsRequest"></a>
<a id="tocSlistcontrolsrequest"></a>
<a id="tocslistcontrolsrequest"></a>

```json
{}
```

<h2 id="tocS_ListKeywordsForDataSourceRequest">ListKeywordsForDataSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistkeywordsfordatasourcerequest"></a>
<a id="schema_ListKeywordsForDataSourceRequest"></a>
<a id="tocSlistkeywordsfordatasourcerequest"></a>
<a id="tocslistkeywordsfordatasourcerequest"></a>

```json
{}
```

<h2 id="tocS_ListNotificationsRequest">ListNotificationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistnotificationsrequest"></a>
<a id="schema_ListNotificationsRequest"></a>
<a id="tocSlistnotificationsrequest"></a>
<a id="tocslistnotificationsrequest"></a>

```json
{}
```

<h2 id="tocS_Notifications">Notifications</h2>
<!-- backwards compatibility -->
<a id="schemanotifications"></a>
<a id="schema_Notifications"></a>
<a id="tocSnotifications"></a>
<a id="tocsnotifications"></a>

```json
[
  {
    "id": {},
    "assessmentId": {},
    "assessmentName": {},
    "controlSetId": {},
    "controlSetName": {},
    "description": {},
    "eventTime": {},
    "source": {}
  }
]
```

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{}
```

<h2 id="tocS_TimestampUUID">TimestampUUID</h2>
<!-- backwards compatibility -->
<a id="schematimestampuuid"></a>
<a id="schema_TimestampUUID"></a>
<a id="tocStimestampuuid"></a>
<a id="tocstimestampuuid"></a>

```json
"stringstringstringstringstringstringstringstrin"
```

<h2 id="tocS_Notification">Notification</h2>
<!-- backwards compatibility -->
<a id="schemanotification"></a>
<a id="schema_Notification"></a>
<a id="tocSnotification"></a>
<a id="tocsnotification"></a>

```json
{
  "id": {},
  "assessmentId": {},
  "assessmentName": {},
  "controlSetId": {},
  "controlSetName": {},
  "description": {},
  "eventTime": {},
  "source": {}
}
```

 The notification that informs a user of an update in Audit Manager. For example, this includes the notification that's sent when a control set is delegated for review.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|assessmentId|object|false|none|none|
|assessmentName|object|false|none|none|
|controlSetId|object|false|none|none|
|controlSetName|object|false|none|none|
|description|object|false|none|none|
|eventTime|object|false|none|none|
|source|object|false|none|none|

<h2 id="tocS_RegisterAccountRequest">RegisterAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemaregisteraccountrequest"></a>
<a id="schema_RegisterAccountRequest"></a>
<a id="tocSregisteraccountrequest"></a>
<a id="tocsregisteraccountrequest"></a>

```json
{
  "kmsKey": {},
  "delegatedAdminAccount": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kmsKey|object|false|none|none|
|delegatedAdminAccount|object|false|none|none|

<h2 id="tocS_RegisterOrganizationAdminAccountRequest">RegisterOrganizationAdminAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemaregisterorganizationadminaccountrequest"></a>
<a id="schema_RegisterOrganizationAdminAccountRequest"></a>
<a id="tocSregisterorganizationadminaccountrequest"></a>
<a id="tocsregisterorganizationadminaccountrequest"></a>

```json
{
  "adminAccountId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adminAccountId|object|true|none|none|

<h2 id="tocS_Resource">Resource</h2>
<!-- backwards compatibility -->
<a id="schemaresource"></a>
<a id="schema_Resource"></a>
<a id="tocSresource"></a>
<a id="tocsresource"></a>

```json
{
  "arn": {},
  "value": {},
  "complianceCheck": {}
}
```

 A system asset that's evaluated in an Audit Manager assessment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|value|object|false|none|none|
|complianceCheck|object|false|none|none|

<h2 id="tocS_SNSTopic">SNSTopic</h2>
<!-- backwards compatibility -->
<a id="schemasnstopic"></a>
<a id="schema_SNSTopic"></a>
<a id="tocSsnstopic"></a>
<a id="tocssnstopic"></a>

```json
"string"
```

<h2 id="tocS_ServiceMetadata">ServiceMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaservicemetadata"></a>
<a id="schema_ServiceMetadata"></a>
<a id="tocSservicemetadata"></a>
<a id="tocsservicemetadata"></a>

```json
{
  "name": {},
  "displayName": {},
  "description": {},
  "category": {}
}
```

 The metadata that's associated with the Amazon Web Service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|displayName|object|false|none|none|
|description|object|false|none|none|
|category|object|false|none|none|

<h2 id="tocS_ShareRequestAction">ShareRequestAction</h2>
<!-- backwards compatibility -->
<a id="schemasharerequestaction"></a>
<a id="schema_ShareRequestAction"></a>
<a id="tocSsharerequestaction"></a>
<a id="tocssharerequestaction"></a>

```json
"ACCEPT"
```

<h2 id="tocS_SnsArn">SnsArn</h2>
<!-- backwards compatibility -->
<a id="schemasnsarn"></a>
<a id="schema_SnsArn"></a>
<a id="tocSsnsarn"></a>
<a id="tocssnsarn"></a>

```json
"string"
```

<h2 id="tocS_StartAssessmentFrameworkShareRequest">StartAssessmentFrameworkShareRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartassessmentframeworksharerequest"></a>
<a id="schema_StartAssessmentFrameworkShareRequest"></a>
<a id="tocSstartassessmentframeworksharerequest"></a>
<a id="tocsstartassessmentframeworksharerequest"></a>

```json
{
  "destinationAccount": {},
  "destinationRegion": {},
  "comment": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationAccount|object|true|none|none|
|destinationRegion|object|true|none|none|
|comment|object|false|none|none|

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

<h2 id="tocS_TagResourceRequest">TagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schematagresourcerequest"></a>
<a id="schema_TagResourceRequest"></a>
<a id="tocStagresourcerequest"></a>
<a id="tocstagresourcerequest"></a>

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
|tags|object|true|none|none|

<h2 id="tocS_UrlLink">UrlLink</h2>
<!-- backwards compatibility -->
<a id="schemaurllink"></a>
<a id="schema_UrlLink"></a>
<a id="tocSurllink"></a>
<a id="tocsurllink"></a>

```json
"string"
```

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{}
```

<h2 id="tocS_UpdateAssessmentControlRequest">UpdateAssessmentControlRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateassessmentcontrolrequest"></a>
<a id="schema_UpdateAssessmentControlRequest"></a>
<a id="tocSupdateassessmentcontrolrequest"></a>
<a id="tocsupdateassessmentcontrolrequest"></a>

```json
{
  "controlStatus": {},
  "commentBody": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|controlStatus|object|false|none|none|
|commentBody|object|false|none|none|

<h2 id="tocS_UpdateAssessmentControlSetStatusRequest">UpdateAssessmentControlSetStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateassessmentcontrolsetstatusrequest"></a>
<a id="schema_UpdateAssessmentControlSetStatusRequest"></a>
<a id="tocSupdateassessmentcontrolsetstatusrequest"></a>
<a id="tocsupdateassessmentcontrolsetstatusrequest"></a>

```json
{
  "status": {},
  "comment": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|true|none|none|
|comment|object|true|none|none|

<h2 id="tocS_UpdateAssessmentFrameworkControlSets">UpdateAssessmentFrameworkControlSets</h2>
<!-- backwards compatibility -->
<a id="schemaupdateassessmentframeworkcontrolsets"></a>
<a id="schema_UpdateAssessmentFrameworkControlSets"></a>
<a id="tocSupdateassessmentframeworkcontrolsets"></a>
<a id="tocsupdateassessmentframeworkcontrolsets"></a>

```json
[
  {
    "id": {},
    "name": {},
    "controls": {}
  }
]
```

<h2 id="tocS_UpdateAssessmentFrameworkRequest">UpdateAssessmentFrameworkRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateassessmentframeworkrequest"></a>
<a id="schema_UpdateAssessmentFrameworkRequest"></a>
<a id="tocSupdateassessmentframeworkrequest"></a>
<a id="tocsupdateassessmentframeworkrequest"></a>

```json
{
  "name": {},
  "description": {},
  "complianceType": {},
  "controlSets": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|description|object|false|none|none|
|complianceType|object|false|none|none|
|controlSets|object|true|none|none|

<h2 id="tocS_UpdateAssessmentFrameworkShareRequest">UpdateAssessmentFrameworkShareRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateassessmentframeworksharerequest"></a>
<a id="schema_UpdateAssessmentFrameworkShareRequest"></a>
<a id="tocSupdateassessmentframeworksharerequest"></a>
<a id="tocsupdateassessmentframeworksharerequest"></a>

```json
{
  "requestType": {},
  "action": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestType|object|true|none|none|
|action|object|true|none|none|

<h2 id="tocS_UpdateAssessmentRequest">UpdateAssessmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateassessmentrequest"></a>
<a id="schema_UpdateAssessmentRequest"></a>
<a id="tocSupdateassessmentrequest"></a>
<a id="tocsupdateassessmentrequest"></a>

```json
{
  "assessmentName": {},
  "assessmentDescription": {},
  "scope": {
    "awsAccounts": {},
    "awsServices": {}
  },
  "assessmentReportsDestination": {
    "destinationType": {},
    "destination": {}
  },
  "roles": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assessmentName|object|false|none|none|
|assessmentDescription|object|false|none|none|
|scope|object|true|none|none|
|assessmentReportsDestination|object|false|none|none|
|roles|object|false|none|none|

<h2 id="tocS_UpdateAssessmentStatusRequest">UpdateAssessmentStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateassessmentstatusrequest"></a>
<a id="schema_UpdateAssessmentStatusRequest"></a>
<a id="tocSupdateassessmentstatusrequest"></a>
<a id="tocsupdateassessmentstatusrequest"></a>

```json
{
  "status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|true|none|none|

<h2 id="tocS_UpdateControlRequest">UpdateControlRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecontrolrequest"></a>
<a id="schema_UpdateControlRequest"></a>
<a id="tocSupdatecontrolrequest"></a>
<a id="tocsupdatecontrolrequest"></a>

```json
{
  "name": {},
  "description": {},
  "testingInformation": {},
  "actionPlanTitle": {},
  "actionPlanInstructions": {},
  "controlMappingSources": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|description|object|false|none|none|
|testingInformation|object|false|none|none|
|actionPlanTitle|object|false|none|none|
|actionPlanInstructions|object|false|none|none|
|controlMappingSources|object|true|none|none|

<h2 id="tocS_UpdateSettingsRequest">UpdateSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesettingsrequest"></a>
<a id="schema_UpdateSettingsRequest"></a>
<a id="tocSupdatesettingsrequest"></a>
<a id="tocsupdatesettingsrequest"></a>

```json
{
  "snsTopic": {},
  "defaultAssessmentReportsDestination": {
    "destinationType": {},
    "destination": {}
  },
  "defaultProcessOwners": {},
  "kmsKey": {},
  "evidenceFinderEnabled": {},
  "deregistrationPolicy": {
    "deleteResources": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|snsTopic|object|false|none|none|
|defaultAssessmentReportsDestination|object|false|none|none|
|defaultProcessOwners|object|false|none|none|
|kmsKey|object|false|none|none|
|evidenceFinderEnabled|object|false|none|none|
|deregistrationPolicy|object|false|none|none|

<h2 id="tocS_ValidateAssessmentReportIntegrityRequest">ValidateAssessmentReportIntegrityRequest</h2>
<!-- backwards compatibility -->
<a id="schemavalidateassessmentreportintegrityrequest"></a>
<a id="schema_ValidateAssessmentReportIntegrityRequest"></a>
<a id="tocSvalidateassessmentreportintegrityrequest"></a>
<a id="tocsvalidateassessmentreportintegrityrequest"></a>

```json
{
  "s3RelativePath": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|s3RelativePath|object|true|none|none|

<h2 id="tocS_ValidationErrors">ValidationErrors</h2>
<!-- backwards compatibility -->
<a id="schemavalidationerrors"></a>
<a id="schema_ValidationErrors"></a>
<a id="tocSvalidationerrors"></a>
<a id="tocsvalidationerrors"></a>

```json
[
  "string"
]
```
