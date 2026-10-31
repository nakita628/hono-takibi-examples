<h1 id="amazon-guardduty">Amazon GuardDuty v2017-11-28</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>Amazon GuardDuty is a continuous security monitoring service that analyzes and processes the following data sources: VPC flow logs, Amazon Web Services CloudTrail management event logs, CloudTrail S3 data event logs, EKS audit logs, DNS logs, and Amazon EBS volume data. It uses threat intelligence feeds, such as lists of malicious IPs and domains, and machine learning to identify unexpected, potentially unauthorized, and malicious activity within your Amazon Web Services environment. This can include issues like escalations of privileges, uses of exposed credentials, or communication with malicious IPs, domains, or presence of malware on your Amazon EC2 instances and container workloads. For example, GuardDuty can detect compromised EC2 instances and container workloads serving malware, or mining bitcoin. </p> <p>GuardDuty also monitors Amazon Web Services account access behavior for signs of compromise, such as unauthorized infrastructure deployments like EC2 instances deployed in a Region that has never been used, or unusual API calls like a password policy change to reduce password strength. </p> <p>GuardDuty informs you about the status of your Amazon Web Services environment by producing security findings that you can view in the GuardDuty console or through Amazon EventBridge. For more information, see the <i> <a href="https://docs.aws.amazon.com/guardduty/latest/ug/what-is-guardduty.html">Amazon GuardDuty User Guide</a> </i>. </p>

Base URLs:

* <a href="http://guardduty.us-east-1.amazonaws.com">http://guardduty.us-east-1.amazonaws.com</a> - The Amazon GuardDuty multi-region endpoint

* <a href="https://guardduty.us-east-1.amazonaws.com">https://guardduty.us-east-1.amazonaws.com</a> - The Amazon GuardDuty multi-region endpoint

* <a href="http://guardduty.cn-north-1.amazonaws.com.cn">http://guardduty.cn-north-1.amazonaws.com.cn</a> - The Amazon GuardDuty endpoint for China (Beijing) and China (Ningxia)

* <a href="https://guardduty.cn-north-1.amazonaws.com.cn">https://guardduty.cn-north-1.amazonaws.com.cn</a> - The Amazon GuardDuty endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/guardduty/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-guardduty-default">Default</h1>

## GetAdministratorAccount

<a id="opIdGetAdministratorAccount"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string/administrator \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /detector/{detectorId}/administrator`

Provides the details for the GuardDuty administrator account associated with the current GuardDuty member account.

<h3 id="getadministratoraccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The unique ID of the detector of the GuardDuty member account.|
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
  "Administrator": {
    "AccountId": {},
    "InvitationId": {},
    "RelationshipStatus": {},
    "InvitedAt": {}
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

<h3 id="getadministratoraccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAdministratorAccountResponse](#schemagetadministratoraccountresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AcceptAdministratorInvitation

<a id="opIdAcceptAdministratorInvitation"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string/administrator \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "administratorId": "string",
    "invitationId": "string"
  }'
```

`POST /detector/{detectorId}/administrator`

Accepts the invitation to be a member account and get monitored by a GuardDuty administrator account that sent the invitation.

> Body parameter

```json
{
  "administratorId": "string",
  "invitationId": "string"
}
```

<h3 id="acceptadministratorinvitation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The unique ID of the detector of the GuardDuty member account.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» administratorId|body|string|true|The account ID of the GuardDuty administrator account whose invitation you're accepting.|
|» invitationId|body|string|true|The value that is used to validate the administrator account to the member account.|

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

<h3 id="acceptadministratorinvitation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AcceptAdministratorInvitationResponse](#schemaacceptadministratorinvitationresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetMasterAccount

<a id="opIdGetMasterAccount"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string/master \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /detector/{detectorId}/master`

<aside class="warning">
This operation is deprecated
</aside>

Provides the details for the GuardDuty administrator account associated with the current GuardDuty member account.

<h3 id="getmasteraccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The unique ID of the detector of the GuardDuty member account.|
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
  "Master": {
    "AccountId": {},
    "InvitationId": {},
    "RelationshipStatus": {},
    "InvitedAt": {}
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

<h3 id="getmasteraccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMasterAccountResponse](#schemagetmasteraccountresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AcceptInvitation

<a id="opIdAcceptInvitation"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string/master \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "masterId": "string",
    "invitationId": "string"
  }'
```

`POST /detector/{detectorId}/master`

<aside class="warning">
This operation is deprecated
</aside>

Accepts the invitation to be monitored by a GuardDuty administrator account.

> Body parameter

```json
{
  "masterId": "string",
  "invitationId": "string"
}
```

<h3 id="acceptinvitation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The unique ID of the detector of the GuardDuty member account.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» masterId|body|string|true|The account ID of the GuardDuty administrator account whose invitation you're accepting.|
|» invitationId|body|string|true|The value that is used to validate the administrator account to the member account.|

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

<h3 id="acceptinvitation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AcceptInvitationResponse](#schemaacceptinvitationresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ArchiveFindings

<a id="opIdArchiveFindings"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string/findings/archive \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "findingIds": [
      "string"
    ]
  }'
```

`POST /detector/{detectorId}/findings/archive`

<p>Archives GuardDuty findings that are specified by the list of finding IDs.</p> <note> <p>Only the administrator account can archive findings. Member accounts don't have permission to archive findings from their accounts.</p> </note>

> Body parameter

```json
{
  "findingIds": [
    "string"
  ]
}
```

<h3 id="archivefindings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The ID of the detector that specifies the GuardDuty service whose findings you want to archive.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» findingIds|body|[[FindingId](#schemafindingid)]|true|The IDs of the findings that you want to archive.|

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

<h3 id="archivefindings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ArchiveFindingsResponse](#schemaarchivefindingsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDetectors

<a id="opIdListDetectors"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /detector`

Lists detectorIds of all the existing Amazon GuardDuty detector resources.

<h3 id="listdetectors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 50. The maximum value is 50.|
|nextToken|query|string|false|You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
  "DetectorIds": {},
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

<h3 id="listdetectors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDetectorsResponse](#schemalistdetectorsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDetector

<a id="opIdCreateDetector"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "enable": true,
    "clientToken": "string",
    "findingPublishingFrequency": "FIFTEEN_MINUTES",
    "dataSources": {
      "S3Logs": {
        "Enable": {}
      },
      "Kubernetes": {
        "AuditLogs": {
          "Enable": {}
        }
      },
      "MalwareProtection": {
        "ScanEc2InstanceWithFindings": {
          "EbsVolumes": {}
        }
      }
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "features": [
      {
        "Name": {},
        "Status": {},
        "AdditionalConfiguration": {}
      }
    ]
  }'
```

`POST /detector`

<p>Creates a single Amazon GuardDuty detector. A detector is a resource that represents the GuardDuty service. To start using GuardDuty, you must create a detector in each Region where you enable the service. You can have only one detector per account per Region. All data sources are enabled in a new detector by default.</p> <p>There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html">Regions and endpoints</a>.</p>

> Body parameter

```json
{
  "enable": true,
  "clientToken": "string",
  "findingPublishingFrequency": "FIFTEEN_MINUTES",
  "dataSources": {
    "S3Logs": {
      "Enable": {}
    },
    "Kubernetes": {
      "AuditLogs": {
        "Enable": {}
      }
    },
    "MalwareProtection": {
      "ScanEc2InstanceWithFindings": {
        "EbsVolumes": {}
      }
    }
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "features": [
    {
      "Name": {},
      "Status": {},
      "AdditionalConfiguration": {}
    }
  ]
}
```

<h3 id="createdetector-parameters">Parameters</h3>

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
|» enable|body|boolean|true|A Boolean value that specifies whether the detector is to be enabled.|
|» clientToken|body|string|false|The idempotency token for the create request.|
|» findingPublishingFrequency|body|string|false|A value that specifies how frequently updated findings are exported.|
|» dataSources|body|object|false|Contains information about which data sources are enabled.|
|» » S3Logs|body|object|false|none|
|» » » Enable|body|object|true|none|
|» » Kubernetes|body|object|false|none|
|» » » AuditLogs|body|object|true|none|
|» » » » Enable|body|object|true|none|
|» » MalwareProtection|body|object|false|none|
|» » » ScanEc2InstanceWithFindings|body|object|false|none|
|» » » » EbsVolumes|body|object|false|none|
|» tags|body|object|false|The tags to be added to a new detector resource.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» features|body|[[DetectorFeatureConfiguration](#schemadetectorfeatureconfiguration)]|false|A list of features that will be configured for the detector.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» findingPublishingFrequency|FIFTEEN_MINUTES|
|» findingPublishingFrequency|ONE_HOUR|
|» findingPublishingFrequency|SIX_HOURS|

> Example responses

> 200 Response

```json
{
  "DetectorId": {},
  "UnprocessedDataSources": {
    "MalwareProtection": {
      "ScanEc2InstanceWithFindings": {
        "EbsVolumes": {
          "Status": {},
          "Reason": {}
        }
      },
      "ServiceRole": {}
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

<h3 id="createdetector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDetectorResponse](#schemacreatedetectorresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListFilters

<a id="opIdListFilters"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string/filter \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /detector/{detectorId}/filter`

Returns a paginated list of the current filters.

<h3 id="listfilters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The unique ID of the detector that the filter is associated with.|
|maxResults|query|integer|false|You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 50. The maximum value is 50.|
|nextToken|query|string|false|You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
  "FilterNames": {},
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

<h3 id="listfilters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListFiltersResponse](#schemalistfiltersresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateFilter

<a id="opIdCreateFilter"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string/filter \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "description": "string",
    "action": "NOOP",
    "rank": 1,
    "findingCriteria": {
      "Criterion": {
        "property1": {
          "Eq": {},
          "Neq": {},
          "Gt": {},
          "Gte": {},
          "Lt": {},
          "Lte": {},
          "Equals": {},
          "NotEquals": {},
          "GreaterThan": {},
          "GreaterThanOrEqual": {},
          "LessThan": {},
          "LessThanOrEqual": {}
        },
        "property2": {
          "Eq": {},
          "Neq": {},
          "Gt": {},
          "Gte": {},
          "Lt": {},
          "Lte": {},
          "Equals": {},
          "NotEquals": {},
          "GreaterThan": {},
          "GreaterThanOrEqual": {},
          "LessThan": {},
          "LessThanOrEqual": {}
        }
      }
    },
    "clientToken": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /detector/{detectorId}/filter`

Creates a filter using the specified finding criteria. The maximum number of saved filters per Amazon Web Services account per Region is 100. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_limits.html">Quotas for GuardDuty</a>.

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "action": "NOOP",
  "rank": 1,
  "findingCriteria": {
    "Criterion": {
      "property1": {
        "Eq": {},
        "Neq": {},
        "Gt": {},
        "Gte": {},
        "Lt": {},
        "Lte": {},
        "Equals": {},
        "NotEquals": {},
        "GreaterThan": {},
        "GreaterThanOrEqual": {},
        "LessThan": {},
        "LessThanOrEqual": {}
      },
      "property2": {
        "Eq": {},
        "Neq": {},
        "Gt": {},
        "Gte": {},
        "Lt": {},
        "Lte": {},
        "Equals": {},
        "NotEquals": {},
        "GreaterThan": {},
        "GreaterThanOrEqual": {},
        "LessThan": {},
        "LessThanOrEqual": {}
      }
    }
  },
  "clientToken": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createfilter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The ID of the detector belonging to the GuardDuty account that you want to create a filter for.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» name|body|string|true|The name of the filter. Valid characters include period (.), underscore (_), dash (-), and alphanumeric characters. A whitespace is considered to be an invalid character.|
|» description|body|string|false|The description of the filter. Valid characters include alphanumeric characters, and special characters such as hyphen, period, colon, underscore, parentheses (<code>{ }</code>, <code>[ ]</code>, and <code>( )</code>), forward slash, horizontal tab, vertical tab, newline, form feed, return, and whitespace.|
|» action|body|string|false|Specifies the action that is to be applied to the findings that match the filter.|
|» rank|body|integer|false|Specifies the position of the filter in the list of current filters. Also specifies the order in which this filter is applied to the findings.|
|» findingCriteria|body|object|true|Contains information about the criteria used for querying findings.|
|» » Criterion|body|object|false|none|
|» » » **additionalProperties**|body|[Condition](#schemacondition)|false|Contains information about the condition.|
|» clientToken|body|string|false|The idempotency token for the create request.|
|» tags|body|object|false|The tags to be added to a new filter resource.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» action|NOOP|
|» action|ARCHIVE|

> Example responses

> 200 Response

```json
{
  "Name": {}
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

<h3 id="createfilter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateFilterResponse](#schemacreatefilterresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListIPSets

<a id="opIdListIPSets"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string/ipset \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /detector/{detectorId}/ipset`

Lists the IPSets of the GuardDuty service specified by the detector ID. If you use this operation from a member account, the IPSets returned are the IPSets from the associated administrator account.

<h3 id="listipsets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The unique ID of the detector that the IPSet is associated with.|
|maxResults|query|integer|false|You can use this parameter to indicate the maximum number of items you want in the response. The default value is 50. The maximum value is 50.|
|nextToken|query|string|false|You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
  "IpSetIds": {},
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

<h3 id="listipsets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListIPSetsResponse](#schemalistipsetsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateIPSet

<a id="opIdCreateIPSet"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string/ipset \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "format": "TXT",
    "location": "string",
    "activate": true,
    "clientToken": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /detector/{detectorId}/ipset`

Creates a new IPSet, which is called a trusted IP list in the console user interface. An IPSet is a list of IP addresses that are trusted for secure communication with Amazon Web Services infrastructure and applications. GuardDuty doesn't generate findings for IP addresses that are included in IPSets. Only users from the administrator account can use this operation.

> Body parameter

```json
{
  "name": "string",
  "format": "TXT",
  "location": "string",
  "activate": true,
  "clientToken": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createipset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The unique ID of the detector of the GuardDuty account that you want to create an IPSet for.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» name|body|string|true|<p>The user-friendly name to identify the IPSet.</p> <p> Allowed characters are alphanumeric, whitespace, dash (-), and underscores (_).</p>|
|» format|body|string|true|The format of the file that contains the IPSet.|
|» location|body|string|true|The URI of the file that contains the IPSet. |
|» activate|body|boolean|true|A Boolean value that indicates whether GuardDuty is to start using the uploaded IPSet.|
|» clientToken|body|string|false|The idempotency token for the create request.|
|» tags|body|object|false|The tags to be added to a new IP set resource.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» format|TXT|
|» format|STIX|
|» format|OTX_CSV|
|» format|ALIEN_VAULT|
|» format|PROOF_POINT|
|» format|FIRE_EYE|

> Example responses

> 200 Response

```json
{
  "IpSetId": {}
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

<h3 id="createipset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateIPSetResponse](#schemacreateipsetresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListMembers

<a id="opIdListMembers"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string/member \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /detector/{detectorId}/member`

Lists details about all member accounts for the current GuardDuty administrator account.

<h3 id="listmembers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The unique ID of the detector the member is associated with.|
|maxResults|query|integer|false|You can use this parameter to indicate the maximum number of items you want in the response. The default value is 50. The maximum value is 50.|
|nextToken|query|string|false|You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.|
|onlyAssociated|query|string|false|Specifies whether to only return associated members or to return all members (including members who haven't been invited yet or have been disassociated). Member accounts must have been previously associated with the GuardDuty administrator account using <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreateMembers.html"> <code>Create Members</code> </a>. |
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
  "Members": {},
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

<h3 id="listmembers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListMembersResponse](#schemalistmembersresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateMembers

<a id="opIdCreateMembers"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string/member \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "accountDetails": [
      {
        "AccountId": {},
        "Email": {}
      }
    ]
  }'
```

`POST /detector/{detectorId}/member`

<p>Creates member accounts of the current Amazon Web Services account by specifying a list of Amazon Web Services account IDs. This step is a prerequisite for managing the associated member accounts either by invitation or through an organization.</p> <p>When using <code>Create Members</code> as an organizations delegated administrator this action will enable GuardDuty in the added member accounts, with the exception of the organization delegated administrator account, which must enable GuardDuty prior to being added as a member.</p> <p>If you are adding accounts by invitation, use this action after GuardDuty has bee enabled in potential member accounts and before using <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_InviteMembers.html">InviteMembers</a>.</p>

> Body parameter

```json
{
  "accountDetails": [
    {
      "AccountId": {},
      "Email": {}
    }
  ]
}
```

<h3 id="createmembers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The unique ID of the detector of the GuardDuty account that you want to associate member accounts with.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» accountDetails|body|[[AccountDetail](#schemaaccountdetail)]|true|A list of account ID and email address pairs of the accounts that you want to associate with the GuardDuty administrator account.|

> Example responses

> 200 Response

```json
{
  "UnprocessedAccounts": {}
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

<h3 id="createmembers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateMembersResponse](#schemacreatemembersresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPublishingDestinations

<a id="opIdListPublishingDestinations"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string/publishingDestination \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /detector/{detectorId}/publishingDestination`

Returns a list of publishing destinations associated with the specified <code>detectorId</code>.

<h3 id="listpublishingdestinations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The ID of the detector to retrieve publishing destinations for.|
|maxResults|query|integer|false|The maximum number of results to return in the response.|
|nextToken|query|string|false|A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the <code>NextToken</code> value returned from the previous request to continue listing results after the first page.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
  "Destinations": {},
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

<h3 id="listpublishingdestinations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPublishingDestinationsResponse](#schemalistpublishingdestinationsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreatePublishingDestination

<a id="opIdCreatePublishingDestination"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string/publishingDestination \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "destinationType": "S3",
    "destinationProperties": {
      "DestinationArn": {},
      "KmsKeyArn": {}
    },
    "clientToken": "string"
  }'
```

`POST /detector/{detectorId}/publishingDestination`

Creates a publishing destination to export findings to. The resource to export findings to must exist before you use this operation.

> Body parameter

```json
{
  "destinationType": "S3",
  "destinationProperties": {
    "DestinationArn": {},
    "KmsKeyArn": {}
  },
  "clientToken": "string"
}
```

<h3 id="createpublishingdestination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The ID of the GuardDuty detector associated with the publishing destination.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» destinationType|body|string|true|The type of resource for the publishing destination. Currently only Amazon S3 buckets are supported.|
|» destinationProperties|body|object|true|Contains the Amazon Resource Name (ARN) of the resource to publish to, such as an S3 bucket, and the ARN of the KMS key to use to encrypt published findings.|
|» » DestinationArn|body|object|false|none|
|» » KmsKeyArn|body|object|false|none|
|» clientToken|body|string|false|The idempotency token for the request.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» destinationType|S3|

> Example responses

> 200 Response

```json
{
  "DestinationId": {}
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

<h3 id="createpublishingdestination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreatePublishingDestinationResponse](#schemacreatepublishingdestinationresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateSampleFindings

<a id="opIdCreateSampleFindings"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string/findings/create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "findingTypes": [
      "string"
    ]
  }'
```

`POST /detector/{detectorId}/findings/create`

Generates sample findings of types specified by the list of finding types. If 'NULL' is specified for <code>findingTypes</code>, the API generates sample findings of all supported finding types.

> Body parameter

```json
{
  "findingTypes": [
    "string"
  ]
}
```

<h3 id="createsamplefindings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The ID of the detector to create sample findings for.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» findingTypes|body|[[FindingType](#schemafindingtype)]|false|The types of sample findings to generate.|

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

<h3 id="createsamplefindings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateSampleFindingsResponse](#schemacreatesamplefindingsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListThreatIntelSets

<a id="opIdListThreatIntelSets"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string/threatintelset \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /detector/{detectorId}/threatintelset`

Lists the ThreatIntelSets of the GuardDuty service specified by the detector ID. If you use this operation from a member account, the ThreatIntelSets associated with the administrator account are returned.

<h3 id="listthreatintelsets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The unique ID of the detector that the threatIntelSet is associated with.|
|maxResults|query|integer|false|You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 50. The maximum value is 50.|
|nextToken|query|string|false|You can use this parameter to paginate results in the response. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
  "ThreatIntelSetIds": {},
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

<h3 id="listthreatintelsets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListThreatIntelSetsResponse](#schemalistthreatintelsetsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateThreatIntelSet

<a id="opIdCreateThreatIntelSet"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string/threatintelset \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "format": "TXT",
    "location": "string",
    "activate": true,
    "clientToken": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /detector/{detectorId}/threatintelset`

Creates a new ThreatIntelSet. ThreatIntelSets consist of known malicious IP addresses. GuardDuty generates findings based on ThreatIntelSets. Only users of the administrator account can use this operation.

> Body parameter

```json
{
  "name": "string",
  "format": "TXT",
  "location": "string",
  "activate": true,
  "clientToken": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createthreatintelset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The unique ID of the detector of the GuardDuty account that you want to create a threatIntelSet for.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» name|body|string|true|A user-friendly ThreatIntelSet name displayed in all findings that are generated by activity that involves IP addresses included in this ThreatIntelSet.|
|» format|body|string|true|The format of the file that contains the ThreatIntelSet.|
|» location|body|string|true|The URI of the file that contains the ThreatIntelSet. |
|» activate|body|boolean|true|A Boolean value that indicates whether GuardDuty is to start using the uploaded ThreatIntelSet.|
|» clientToken|body|string|false|The idempotency token for the create request.|
|» tags|body|object|false|The tags to be added to a new threat list resource.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» format|TXT|
|» format|STIX|
|» format|OTX_CSV|
|» format|ALIEN_VAULT|
|» format|PROOF_POINT|
|» format|FIRE_EYE|

> Example responses

> 200 Response

```json
{
  "ThreatIntelSetId": {}
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

<h3 id="createthreatintelset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateThreatIntelSetResponse](#schemacreatethreatintelsetresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeclineInvitations

<a id="opIdDeclineInvitations"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/invitation/decline \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "accountIds": [
      "stringstring"
    ]
  }'
```

`POST /invitation/decline`

Declines invitations sent to the current member account by Amazon Web Services accounts specified by their account IDs.

> Body parameter

```json
{
  "accountIds": [
    "stringstring"
  ]
}
```

<h3 id="declineinvitations-parameters">Parameters</h3>

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
|» accountIds|body|[[AccountId](#schemaaccountid)]|true|A list of account IDs of the Amazon Web Services accounts that sent invitations to the current member account that you want to decline invitations from.|

> Example responses

> 200 Response

```json
{
  "UnprocessedAccounts": {}
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

<h3 id="declineinvitations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeclineInvitationsResponse](#schemadeclineinvitationsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDetector

<a id="opIdGetDetector"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /detector/{detectorId}`

<p>Retrieves an Amazon GuardDuty detector specified by the detectorId.</p> <p>There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html">Regions and endpoints</a>.</p>

<h3 id="getdetector-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The unique ID of the detector that you want to get.|
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
  "CreatedAt": {},
  "FindingPublishingFrequency": {},
  "ServiceRole": {},
  "Status": {},
  "UpdatedAt": {},
  "DataSources": {
    "CloudTrail": {
      "Status": {}
    },
    "DNSLogs": {
      "Status": {}
    },
    "FlowLogs": {
      "Status": {}
    },
    "S3Logs": {
      "Status": {}
    },
    "Kubernetes": {
      "AuditLogs": {
        "Status": {}
      }
    },
    "MalwareProtection": {
      "ScanEc2InstanceWithFindings": {
        "EbsVolumes": {
          "Status": {},
          "Reason": {}
        }
      },
      "ServiceRole": {}
    }
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Features": {}
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

<h3 id="getdetector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDetectorResponse](#schemagetdetectorresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDetector

<a id="opIdUpdateDetector"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "enable": true,
    "findingPublishingFrequency": "FIFTEEN_MINUTES",
    "dataSources": {
      "S3Logs": {
        "Enable": {}
      },
      "Kubernetes": {
        "AuditLogs": {
          "Enable": {}
        }
      },
      "MalwareProtection": {
        "ScanEc2InstanceWithFindings": {
          "EbsVolumes": {}
        }
      }
    },
    "features": [
      {
        "Name": {},
        "Status": {},
        "AdditionalConfiguration": {}
      }
    ]
  }'
```

`POST /detector/{detectorId}`

<p>Updates the Amazon GuardDuty detector specified by the detectorId.</p> <p>There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html">Regions and endpoints</a>.</p>

> Body parameter

```json
{
  "enable": true,
  "findingPublishingFrequency": "FIFTEEN_MINUTES",
  "dataSources": {
    "S3Logs": {
      "Enable": {}
    },
    "Kubernetes": {
      "AuditLogs": {
        "Enable": {}
      }
    },
    "MalwareProtection": {
      "ScanEc2InstanceWithFindings": {
        "EbsVolumes": {}
      }
    }
  },
  "features": [
    {
      "Name": {},
      "Status": {},
      "AdditionalConfiguration": {}
    }
  ]
}
```

<h3 id="updatedetector-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The unique ID of the detector to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» enable|body|boolean|false|Specifies whether the detector is enabled or not enabled.|
|» findingPublishingFrequency|body|string|false|An enum value that specifies how frequently findings are exported, such as to CloudWatch Events.|
|» dataSources|body|object|false|Contains information about which data sources are enabled.|
|» » S3Logs|body|object|false|none|
|» » » Enable|body|object|true|none|
|» » Kubernetes|body|object|false|none|
|» » » AuditLogs|body|object|true|none|
|» » » » Enable|body|object|true|none|
|» » MalwareProtection|body|object|false|none|
|» » » ScanEc2InstanceWithFindings|body|object|false|none|
|» » » » EbsVolumes|body|object|false|none|
|» features|body|[[DetectorFeatureConfiguration](#schemadetectorfeatureconfiguration)]|false|Provides the features that will be updated for the detector.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» findingPublishingFrequency|FIFTEEN_MINUTES|
|» findingPublishingFrequency|ONE_HOUR|
|» findingPublishingFrequency|SIX_HOURS|

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

<h3 id="updatedetector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDetectorResponse](#schemaupdatedetectorresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDetector

<a id="opIdDeleteDetector"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /detector/{detectorId}`

Deletes an Amazon GuardDuty detector that is specified by the detector ID.

<h3 id="deletedetector-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The unique ID of the detector that you want to delete.|
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

<h3 id="deletedetector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteDetectorResponse](#schemadeletedetectorresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetFilter

<a id="opIdGetFilter"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string/filter/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /detector/{detectorId}/filter/{filterName}`

Returns the details of the filter specified by the filter name.

<h3 id="getfilter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The unique ID of the detector that the filter is associated with.|
|filterName|path|string|true|The name of the filter you want to get.|
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
  "Name": {},
  "Description": {},
  "Action": {},
  "Rank": {},
  "FindingCriteria": {
    "Criterion": {
      "property1": {
        "Eq": {},
        "Neq": {},
        "Gt": {},
        "Gte": {},
        "Lt": {},
        "Lte": {},
        "Equals": {},
        "NotEquals": {},
        "GreaterThan": {},
        "GreaterThanOrEqual": {},
        "LessThan": {},
        "LessThanOrEqual": {}
      },
      "property2": {
        "Eq": {},
        "Neq": {},
        "Gt": {},
        "Gte": {},
        "Lt": {},
        "Lte": {},
        "Equals": {},
        "NotEquals": {},
        "GreaterThan": {},
        "GreaterThanOrEqual": {},
        "LessThan": {},
        "LessThanOrEqual": {}
      }
    }
  },
  "Tags": {
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

<h3 id="getfilter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetFilterResponse](#schemagetfilterresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateFilter

<a id="opIdUpdateFilter"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string/filter/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "action": "NOOP",
    "rank": 1,
    "findingCriteria": {
      "Criterion": {
        "property1": {
          "Eq": {},
          "Neq": {},
          "Gt": {},
          "Gte": {},
          "Lt": {},
          "Lte": {},
          "Equals": {},
          "NotEquals": {},
          "GreaterThan": {},
          "GreaterThanOrEqual": {},
          "LessThan": {},
          "LessThanOrEqual": {}
        },
        "property2": {
          "Eq": {},
          "Neq": {},
          "Gt": {},
          "Gte": {},
          "Lt": {},
          "Lte": {},
          "Equals": {},
          "NotEquals": {},
          "GreaterThan": {},
          "GreaterThanOrEqual": {},
          "LessThan": {},
          "LessThanOrEqual": {}
        }
      }
    }
  }'
```

`POST /detector/{detectorId}/filter/{filterName}`

Updates the filter specified by the filter name.

> Body parameter

```json
{
  "description": "string",
  "action": "NOOP",
  "rank": 1,
  "findingCriteria": {
    "Criterion": {
      "property1": {
        "Eq": {},
        "Neq": {},
        "Gt": {},
        "Gte": {},
        "Lt": {},
        "Lte": {},
        "Equals": {},
        "NotEquals": {},
        "GreaterThan": {},
        "GreaterThanOrEqual": {},
        "LessThan": {},
        "LessThanOrEqual": {}
      },
      "property2": {
        "Eq": {},
        "Neq": {},
        "Gt": {},
        "Gte": {},
        "Lt": {},
        "Lte": {},
        "Equals": {},
        "NotEquals": {},
        "GreaterThan": {},
        "GreaterThanOrEqual": {},
        "LessThan": {},
        "LessThanOrEqual": {}
      }
    }
  }
}
```

<h3 id="updatefilter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The unique ID of the detector that specifies the GuardDuty service where you want to update a filter.|
|filterName|path|string|true|The name of the filter.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» description|body|string|false|The description of the filter. Valid characters include alphanumeric characters, and special characters such as hyphen, period, colon, underscore, parentheses (<code>{ }</code>, <code>[ ]</code>, and <code>( )</code>), forward slash, horizontal tab, vertical tab, newline, form feed, return, and whitespace.|
|» action|body|string|false|Specifies the action that is to be applied to the findings that match the filter.|
|» rank|body|integer|false|Specifies the position of the filter in the list of current filters. Also specifies the order in which this filter is applied to the findings.|
|» findingCriteria|body|object|false|Contains information about the criteria used for querying findings.|
|» » Criterion|body|object|false|none|
|» » » **additionalProperties**|body|[Condition](#schemacondition)|false|Contains information about the condition.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» action|NOOP|
|» action|ARCHIVE|

> Example responses

> 200 Response

```json
{
  "Name": {}
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

<h3 id="updatefilter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateFilterResponse](#schemaupdatefilterresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteFilter

<a id="opIdDeleteFilter"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string/filter/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /detector/{detectorId}/filter/{filterName}`

Deletes the filter specified by the filter name.

<h3 id="deletefilter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The unique ID of the detector that the filter is associated with.|
|filterName|path|string|true|The name of the filter that you want to delete.|
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

<h3 id="deletefilter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteFilterResponse](#schemadeletefilterresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetIPSet

<a id="opIdGetIPSet"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string/ipset/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /detector/{detectorId}/ipset/{ipSetId}`

Retrieves the IPSet specified by the <code>ipSetId</code>.

<h3 id="getipset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The unique ID of the detector that the IPSet is associated with.|
|ipSetId|path|string|true|The unique ID of the IPSet to retrieve.|
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
  "Name": {},
  "Format": {},
  "Location": {},
  "Status": {},
  "Tags": {
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

<h3 id="getipset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetIPSetResponse](#schemagetipsetresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateIPSet

<a id="opIdUpdateIPSet"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string/ipset/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "location": "string",
    "activate": true
  }'
```

`POST /detector/{detectorId}/ipset/{ipSetId}`

Updates the IPSet specified by the IPSet ID.

> Body parameter

```json
{
  "name": "string",
  "location": "string",
  "activate": true
}
```

<h3 id="updateipset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The detectorID that specifies the GuardDuty service whose IPSet you want to update.|
|ipSetId|path|string|true|The unique ID that specifies the IPSet that you want to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» name|body|string|false|The unique ID that specifies the IPSet that you want to update.|
|» location|body|string|false|The updated URI of the file that contains the IPSet. |
|» activate|body|boolean|false|The updated Boolean value that specifies whether the IPSet is active or not.|

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

<h3 id="updateipset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateIPSetResponse](#schemaupdateipsetresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteIPSet

<a id="opIdDeleteIPSet"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string/ipset/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /detector/{detectorId}/ipset/{ipSetId}`

Deletes the IPSet specified by the <code>ipSetId</code>. IPSets are called trusted IP lists in the console user interface.

<h3 id="deleteipset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The unique ID of the detector associated with the IPSet.|
|ipSetId|path|string|true|The unique ID of the IPSet to delete.|
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

<h3 id="deleteipset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteIPSetResponse](#schemadeleteipsetresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteInvitations

<a id="opIdDeleteInvitations"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/invitation/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "accountIds": [
      "stringstring"
    ]
  }'
```

`POST /invitation/delete`

Deletes invitations sent to the current member account by Amazon Web Services accounts specified by their account IDs.

> Body parameter

```json
{
  "accountIds": [
    "stringstring"
  ]
}
```

<h3 id="deleteinvitations-parameters">Parameters</h3>

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
|» accountIds|body|[[AccountId](#schemaaccountid)]|true|A list of account IDs of the Amazon Web Services accounts that sent invitations to the current member account that you want to delete invitations from.|

> Example responses

> 200 Response

```json
{
  "UnprocessedAccounts": {}
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

<h3 id="deleteinvitations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteInvitationsResponse](#schemadeleteinvitationsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteMembers

<a id="opIdDeleteMembers"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string/member/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "accountIds": [
      "stringstring"
    ]
  }'
```

`POST /detector/{detectorId}/member/delete`

<p>Deletes GuardDuty member accounts (to the current GuardDuty administrator account) specified by the account IDs.</p> <p>With <code>autoEnableOrganizationMembers</code> configuration for your organization set to <code>ALL</code>, you'll receive an error if you attempt to disable GuardDuty for a member account in your organization.</p>

> Body parameter

```json
{
  "accountIds": [
    "stringstring"
  ]
}
```

<h3 id="deletemembers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The unique ID of the detector of the GuardDuty account whose members you want to delete.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» accountIds|body|[[AccountId](#schemaaccountid)]|true|A list of account IDs of the GuardDuty member accounts that you want to delete.|

> Example responses

> 200 Response

```json
{
  "UnprocessedAccounts": {}
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

<h3 id="deletemembers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteMembersResponse](#schemadeletemembersresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribePublishingDestination

<a id="opIdDescribePublishingDestination"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string/publishingDestination/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /detector/{detectorId}/publishingDestination/{destinationId}`

Returns information about the publishing destination specified by the provided <code>destinationId</code>.

<h3 id="describepublishingdestination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The unique ID of the detector associated with the publishing destination to retrieve.|
|destinationId|path|string|true|The ID of the publishing destination to retrieve.|
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
  "DestinationId": {},
  "DestinationType": {},
  "Status": {},
  "PublishingFailureStartTimestamp": {},
  "DestinationProperties": {
    "DestinationArn": {},
    "KmsKeyArn": {}
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

<h3 id="describepublishingdestination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribePublishingDestinationResponse](#schemadescribepublishingdestinationresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdatePublishingDestination

<a id="opIdUpdatePublishingDestination"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string/publishingDestination/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "destinationProperties": {
      "DestinationArn": {},
      "KmsKeyArn": {}
    }
  }'
```

`POST /detector/{detectorId}/publishingDestination/{destinationId}`

Updates information about the publishing destination specified by the <code>destinationId</code>.

> Body parameter

```json
{
  "destinationProperties": {
    "DestinationArn": {},
    "KmsKeyArn": {}
  }
}
```

<h3 id="updatepublishingdestination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The ID of the detector associated with the publishing destinations to update.|
|destinationId|path|string|true|The ID of the publishing destination to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» destinationProperties|body|object|false|Contains the Amazon Resource Name (ARN) of the resource to publish to, such as an S3 bucket, and the ARN of the KMS key to use to encrypt published findings.|
|» » DestinationArn|body|object|false|none|
|» » KmsKeyArn|body|object|false|none|

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

<h3 id="updatepublishingdestination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdatePublishingDestinationResponse](#schemaupdatepublishingdestinationresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeletePublishingDestination

<a id="opIdDeletePublishingDestination"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string/publishingDestination/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /detector/{detectorId}/publishingDestination/{destinationId}`

Deletes the publishing definition with the specified <code>destinationId</code>.

<h3 id="deletepublishingdestination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The unique ID of the detector associated with the publishing destination to delete.|
|destinationId|path|string|true|The ID of the publishing destination to delete.|
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

<h3 id="deletepublishingdestination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeletePublishingDestinationResponse](#schemadeletepublishingdestinationresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetThreatIntelSet

<a id="opIdGetThreatIntelSet"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string/threatintelset/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /detector/{detectorId}/threatintelset/{threatIntelSetId}`

Retrieves the ThreatIntelSet that is specified by the ThreatIntelSet ID.

<h3 id="getthreatintelset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The unique ID of the detector that the threatIntelSet is associated with.|
|threatIntelSetId|path|string|true|The unique ID of the threatIntelSet that you want to get.|
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
  "Name": {},
  "Format": {},
  "Location": {},
  "Status": {},
  "Tags": {
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

<h3 id="getthreatintelset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetThreatIntelSetResponse](#schemagetthreatintelsetresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateThreatIntelSet

<a id="opIdUpdateThreatIntelSet"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string/threatintelset/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "location": "string",
    "activate": true
  }'
```

`POST /detector/{detectorId}/threatintelset/{threatIntelSetId}`

Updates the ThreatIntelSet specified by the ThreatIntelSet ID.

> Body parameter

```json
{
  "name": "string",
  "location": "string",
  "activate": true
}
```

<h3 id="updatethreatintelset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The detectorID that specifies the GuardDuty service whose ThreatIntelSet you want to update.|
|threatIntelSetId|path|string|true|The unique ID that specifies the ThreatIntelSet that you want to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» name|body|string|false|The unique ID that specifies the ThreatIntelSet that you want to update.|
|» location|body|string|false|The updated URI of the file that contains the ThreateIntelSet.|
|» activate|body|boolean|false|The updated Boolean value that specifies whether the ThreateIntelSet is active or not.|

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

<h3 id="updatethreatintelset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateThreatIntelSetResponse](#schemaupdatethreatintelsetresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteThreatIntelSet

<a id="opIdDeleteThreatIntelSet"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string/threatintelset/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /detector/{detectorId}/threatintelset/{threatIntelSetId}`

Deletes the ThreatIntelSet specified by the ThreatIntelSet ID.

<h3 id="deletethreatintelset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The unique ID of the detector that the threatIntelSet is associated with.|
|threatIntelSetId|path|string|true|The unique ID of the threatIntelSet that you want to delete.|
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

<h3 id="deletethreatintelset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteThreatIntelSetResponse](#schemadeletethreatintelsetresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeMalwareScans

<a id="opIdDescribeMalwareScans"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string/malware-scans \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "nextToken": "string",
    "maxResults": 1,
    "filterCriteria": {
      "FilterCriterion": {}
    },
    "sortCriteria": {
      "AttributeName": {},
      "OrderBy": {}
    }
  }'
```

`POST /detector/{detectorId}/malware-scans`

<p>Returns a list of malware scans. Each member account can view the malware scans for their own accounts. An administrator can view the malware scans for all the member accounts.</p> <p>There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html">Regions and endpoints</a>.</p>

> Body parameter

```json
{
  "nextToken": "string",
  "maxResults": 1,
  "filterCriteria": {
    "FilterCriterion": {}
  },
  "sortCriteria": {
    "AttributeName": {},
    "OrderBy": {}
  }
}
```

<h3 id="describemalwarescans-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The unique ID of the detector that the request is associated with.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» nextToken|body|string|false|You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.|
|» maxResults|body|integer|false|You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 50. The maximum value is 50.|
|» filterCriteria|body|object|false|Represents the criteria to be used in the filter for describing scan entries.|
|» » FilterCriterion|body|object|false|none|
|» sortCriteria|body|object|false|Contains information about the criteria used for sorting findings.|
|» » AttributeName|body|object|false|none|
|» » OrderBy|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "Scans": {},
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

<h3 id="describemalwarescans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeMalwareScansResponse](#schemadescribemalwarescansresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeOrganizationConfiguration

<a id="opIdDescribeOrganizationConfiguration"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string/admin \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /detector/{detectorId}/admin`

<p>Returns information about the account selected as the delegated administrator for GuardDuty.</p> <p>There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html">Regions and endpoints</a>.</p>

<h3 id="describeorganizationconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The ID of the detector to retrieve information about the delegated administrator from.|
|maxResults|query|integer|false|You can use this parameter to indicate the maximum number of items that you want in the response.|
|nextToken|query|string|false|You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill <code>nextToken</code> in the request with the value of <code>NextToken</code> from the previous response to continue listing data.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
  "AutoEnable": {},
  "MemberAccountLimitReached": {},
  "DataSources": {
    "S3Logs": {
      "AutoEnable": {}
    },
    "Kubernetes": {
      "AuditLogs": {
        "AutoEnable": {}
      }
    },
    "MalwareProtection": {
      "ScanEc2InstanceWithFindings": {
        "EbsVolumes": {
          "AutoEnable": {}
        }
      }
    }
  },
  "Features": {},
  "NextToken": {},
  "AutoEnableOrganizationMembers": {}
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

<h3 id="describeorganizationconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeOrganizationConfigurationResponse](#schemadescribeorganizationconfigurationresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateOrganizationConfiguration

<a id="opIdUpdateOrganizationConfiguration"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string/admin \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "autoEnable": true,
    "dataSources": {
      "S3Logs": {
        "AutoEnable": {}
      },
      "Kubernetes": {
        "AuditLogs": {
          "AutoEnable": {}
        }
      },
      "MalwareProtection": {
        "ScanEc2InstanceWithFindings": {
          "EbsVolumes": {
            "AutoEnable": {}
          }
        }
      }
    },
    "features": [
      {
        "Name": {},
        "AutoEnable": {},
        "AdditionalConfiguration": {}
      }
    ],
    "autoEnableOrganizationMembers": "NEW"
  }'
```

`POST /detector/{detectorId}/admin`

<p>Configures the delegated administrator account with the provided values. You must provide the value for either <code>autoEnableOrganizationMembers</code> or <code>autoEnable</code>. </p> <p>There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html">Regions and endpoints</a>.</p>

> Body parameter

```json
{
  "autoEnable": true,
  "dataSources": {
    "S3Logs": {
      "AutoEnable": {}
    },
    "Kubernetes": {
      "AuditLogs": {
        "AutoEnable": {}
      }
    },
    "MalwareProtection": {
      "ScanEc2InstanceWithFindings": {
        "EbsVolumes": {
          "AutoEnable": {}
        }
      }
    }
  },
  "features": [
    {
      "Name": {},
      "AutoEnable": {},
      "AdditionalConfiguration": {}
    }
  ],
  "autoEnableOrganizationMembers": "NEW"
}
```

<h3 id="updateorganizationconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The ID of the detector that configures the delegated administrator.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» autoEnable|body|boolean|false|<p>Indicates whether to automatically enable member accounts in the organization.</p> <p>Even though this is still supported, we recommend using <code>AutoEnableOrganizationMembers</code> to achieve the similar results.</p>|
|» dataSources|body|object|false|An object that contains information on which data sources will be configured to be automatically enabled for new members within the organization.|
|» » S3Logs|body|object|false|none|
|» » » AutoEnable|body|object|true|none|
|» » Kubernetes|body|object|false|none|
|» » » AuditLogs|body|object|true|none|
|» » » » AutoEnable|body|object|true|none|
|» » MalwareProtection|body|object|false|none|
|» » » ScanEc2InstanceWithFindings|body|object|false|none|
|» » » » EbsVolumes|body|object|false|none|
|» » » » » AutoEnable|body|object|false|none|
|» features|body|[[OrganizationFeatureConfiguration](#schemaorganizationfeatureconfiguration)]|false|A list of features that will be configured for the organization.|
|» autoEnableOrganizationMembers|body|string|false|<p>Indicates the auto-enablement configuration of GuardDuty for the member accounts in the organization. </p> <ul> <li> <p> <code>NEW</code>: Indicates that when a new account joins the organization, they will have GuardDuty enabled automatically. </p> </li> <li> <p> <code>ALL</code>: Indicates that all accounts in the Amazon Web Services Organization have GuardDuty enabled automatically. This includes <code>NEW</code> accounts that join the organization and accounts that may have been suspended or removed from the organization in GuardDuty.</p> </li> <li> <p> <code>NONE</code>: Indicates that GuardDuty will not be automatically enabled for any accounts in the organization. GuardDuty must be managed for each account individually by the administrator.</p> </li> </ul>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» autoEnableOrganizationMembers|NEW|
|» autoEnableOrganizationMembers|ALL|
|» autoEnableOrganizationMembers|NONE|

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

<h3 id="updateorganizationconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateOrganizationConfigurationResponse](#schemaupdateorganizationconfigurationresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisableOrganizationAdminAccount

<a id="opIdDisableOrganizationAdminAccount"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/admin/disable \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "adminAccountId": "string"
  }'
```

`POST /admin/disable`

Disables an Amazon Web Services account within the Organization as the GuardDuty delegated administrator.

> Body parameter

```json
{
  "adminAccountId": "string"
}
```

<h3 id="disableorganizationadminaccount-parameters">Parameters</h3>

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
|» adminAccountId|body|string|true|The Amazon Web Services Account ID for the organizations account to be disabled as a GuardDuty delegated administrator.|

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

<h3 id="disableorganizationadminaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisableOrganizationAdminAccountResponse](#schemadisableorganizationadminaccountresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateFromAdministratorAccount

<a id="opIdDisassociateFromAdministratorAccount"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string/administrator/disassociate \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /detector/{detectorId}/administrator/disassociate`

<p>Disassociates the current GuardDuty member account from its administrator account.</p> <p>With <code>autoEnableOrganizationMembers</code> configuration for your organization set to <code>ALL</code>, you'll receive an error if you attempt to disable GuardDuty in a member account.</p>

<h3 id="disassociatefromadministratoraccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The unique ID of the detector of the GuardDuty member account.|
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

<h3 id="disassociatefromadministratoraccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateFromAdministratorAccountResponse](#schemadisassociatefromadministratoraccountresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateFromMasterAccount

<a id="opIdDisassociateFromMasterAccount"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string/master/disassociate \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /detector/{detectorId}/master/disassociate`

<aside class="warning">
This operation is deprecated
</aside>

Disassociates the current GuardDuty member account from its administrator account.

<h3 id="disassociatefrommasteraccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The unique ID of the detector of the GuardDuty member account.|
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

<h3 id="disassociatefrommasteraccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateFromMasterAccountResponse](#schemadisassociatefrommasteraccountresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateMembers

<a id="opIdDisassociateMembers"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string/member/disassociate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "accountIds": [
      "stringstring"
    ]
  }'
```

`POST /detector/{detectorId}/member/disassociate`

<p>Disassociates GuardDuty member accounts (to the current administrator account) specified by the account IDs.</p> <p>With <code>autoEnableOrganizationMembers</code> configuration for your organization set to <code>ALL</code>, you'll receive an error if you attempt to disassociate a member account before removing them from your Amazon Web Services organization.</p>

> Body parameter

```json
{
  "accountIds": [
    "stringstring"
  ]
}
```

<h3 id="disassociatemembers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The unique ID of the detector of the GuardDuty account whose members you want to disassociate from the administrator account.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» accountIds|body|[[AccountId](#schemaaccountid)]|true|A list of account IDs of the GuardDuty member accounts that you want to disassociate from the administrator account.|

> Example responses

> 200 Response

```json
{
  "UnprocessedAccounts": {}
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

<h3 id="disassociatemembers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateMembersResponse](#schemadisassociatemembersresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## EnableOrganizationAdminAccount

<a id="opIdEnableOrganizationAdminAccount"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/admin/enable \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "adminAccountId": "string"
  }'
```

`POST /admin/enable`

Enables an Amazon Web Services account within the organization as the GuardDuty delegated administrator.

> Body parameter

```json
{
  "adminAccountId": "string"
}
```

<h3 id="enableorganizationadminaccount-parameters">Parameters</h3>

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
|» adminAccountId|body|string|true|The Amazon Web Services Account ID for the organization account to be enabled as a GuardDuty delegated administrator.|

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

<h3 id="enableorganizationadminaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EnableOrganizationAdminAccountResponse](#schemaenableorganizationadminaccountresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCoverageStatistics

<a id="opIdGetCoverageStatistics"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string/coverage/statistics \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "filterCriteria": {
      "FilterCriterion": {}
    },
    "statisticsType": [
      "COUNT_BY_RESOURCE_TYPE"
    ]
  }'
```

`POST /detector/{detectorId}/coverage/statistics`

Retrieves aggregated statistics for your account. If you are a GuardDuty administrator, you can retrieve the statistics for all the resources associated with the active member accounts in your organization who have enabled EKS Runtime Monitoring and have the GuardDuty agent running on their EKS nodes.

> Body parameter

```json
{
  "filterCriteria": {
    "FilterCriterion": {}
  },
  "statisticsType": [
    "COUNT_BY_RESOURCE_TYPE"
  ]
}
```

<h3 id="getcoveragestatistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The unique ID of the GuardDuty detector associated to the coverage statistics.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» filterCriteria|body|object|false|Represents the criteria used in the filter.|
|» » FilterCriterion|body|object|false|none|
|» statisticsType|body|[[CoverageStatisticsType](#schemacoveragestatisticstype)]|true|Represents the statistics type used to aggregate the coverage details.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» statisticsType|COUNT_BY_RESOURCE_TYPE|
|» statisticsType|COUNT_BY_COVERAGE_STATUS|

> Example responses

> 200 Response

```json
{
  "CoverageStatistics": {
    "CountByResourceType": {
      "property1": 0,
      "property2": 0
    },
    "CountByCoverageStatus": {
      "property1": 0,
      "property2": 0
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

<h3 id="getcoveragestatistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCoverageStatisticsResponse](#schemagetcoveragestatisticsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetFindings

<a id="opIdGetFindings"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string/findings/get \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "findingIds": [
      "string"
    ],
    "sortCriteria": {
      "AttributeName": {},
      "OrderBy": {}
    }
  }'
```

`POST /detector/{detectorId}/findings/get`

Describes Amazon GuardDuty findings specified by finding IDs.

> Body parameter

```json
{
  "findingIds": [
    "string"
  ],
  "sortCriteria": {
    "AttributeName": {},
    "OrderBy": {}
  }
}
```

<h3 id="getfindings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The ID of the detector that specifies the GuardDuty service whose findings you want to retrieve.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» findingIds|body|[[FindingId](#schemafindingid)]|true|The IDs of the findings that you want to retrieve.|
|» sortCriteria|body|object|false|Contains information about the criteria used for sorting findings.|
|» » AttributeName|body|object|false|none|
|» » OrderBy|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "Findings": {}
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

<h3 id="getfindings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetFindingsResponse](#schemagetfindingsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetFindingsStatistics

<a id="opIdGetFindingsStatistics"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string/findings/statistics \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "findingStatisticTypes": [
      "COUNT_BY_SEVERITY"
    ],
    "findingCriteria": {
      "Criterion": {
        "property1": {
          "Eq": {},
          "Neq": {},
          "Gt": {},
          "Gte": {},
          "Lt": {},
          "Lte": {},
          "Equals": {},
          "NotEquals": {},
          "GreaterThan": {},
          "GreaterThanOrEqual": {},
          "LessThan": {},
          "LessThanOrEqual": {}
        },
        "property2": {
          "Eq": {},
          "Neq": {},
          "Gt": {},
          "Gte": {},
          "Lt": {},
          "Lte": {},
          "Equals": {},
          "NotEquals": {},
          "GreaterThan": {},
          "GreaterThanOrEqual": {},
          "LessThan": {},
          "LessThanOrEqual": {}
        }
      }
    }
  }'
```

`POST /detector/{detectorId}/findings/statistics`

Lists Amazon GuardDuty findings statistics for the specified detector ID.

> Body parameter

```json
{
  "findingStatisticTypes": [
    "COUNT_BY_SEVERITY"
  ],
  "findingCriteria": {
    "Criterion": {
      "property1": {
        "Eq": {},
        "Neq": {},
        "Gt": {},
        "Gte": {},
        "Lt": {},
        "Lte": {},
        "Equals": {},
        "NotEquals": {},
        "GreaterThan": {},
        "GreaterThanOrEqual": {},
        "LessThan": {},
        "LessThanOrEqual": {}
      },
      "property2": {
        "Eq": {},
        "Neq": {},
        "Gt": {},
        "Gte": {},
        "Lt": {},
        "Lte": {},
        "Equals": {},
        "NotEquals": {},
        "GreaterThan": {},
        "GreaterThanOrEqual": {},
        "LessThan": {},
        "LessThanOrEqual": {}
      }
    }
  }
}
```

<h3 id="getfindingsstatistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The ID of the detector that specifies the GuardDuty service whose findings' statistics you want to retrieve.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» findingStatisticTypes|body|[[FindingStatisticType](#schemafindingstatistictype)]|true|The types of finding statistics to retrieve.|
|» findingCriteria|body|object|false|Contains information about the criteria used for querying findings.|
|» » Criterion|body|object|false|none|
|» » » **additionalProperties**|body|[Condition](#schemacondition)|false|Contains information about the condition.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» findingStatisticTypes|COUNT_BY_SEVERITY|

> Example responses

> 200 Response

```json
{
  "FindingStatistics": {
    "CountBySeverity": {
      "property1": 0,
      "property2": 0
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

<h3 id="getfindingsstatistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetFindingsStatisticsResponse](#schemagetfindingsstatisticsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetInvitationsCount

<a id="opIdGetInvitationsCount"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/invitation/count \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /invitation/count`

Returns the count of all GuardDuty membership invitations that were sent to the current member account except the currently accepted invitation.

<h3 id="getinvitationscount-parameters">Parameters</h3>

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
  "InvitationsCount": {}
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

<h3 id="getinvitationscount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetInvitationsCountResponse](#schemagetinvitationscountresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetMalwareScanSettings

<a id="opIdGetMalwareScanSettings"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string/malware-scan-settings \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /detector/{detectorId}/malware-scan-settings`

<p>Returns the details of the malware scan settings.</p> <p>There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html">Regions and endpoints</a>.</p>

<h3 id="getmalwarescansettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The unique ID of the detector that the scan setting is associated with.|
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
  "ScanResourceCriteria": {
    "Include": {
      "property1": {
        "MapEquals": {}
      },
      "property2": {
        "MapEquals": {}
      }
    },
    "Exclude": {
      "property1": {
        "MapEquals": {}
      },
      "property2": {
        "MapEquals": {}
      }
    }
  },
  "EbsSnapshotPreservation": {}
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

<h3 id="getmalwarescansettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMalwareScanSettingsResponse](#schemagetmalwarescansettingsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateMalwareScanSettings

<a id="opIdUpdateMalwareScanSettings"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string/malware-scan-settings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "scanResourceCriteria": {
      "Include": {
        "property1": {
          "MapEquals": {}
        },
        "property2": {
          "MapEquals": {}
        }
      },
      "Exclude": {
        "property1": {
          "MapEquals": {}
        },
        "property2": {
          "MapEquals": {}
        }
      }
    },
    "ebsSnapshotPreservation": "NO_RETENTION"
  }'
```

`POST /detector/{detectorId}/malware-scan-settings`

<p>Updates the malware scan settings.</p> <p>There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html">Regions and endpoints</a>.</p>

> Body parameter

```json
{
  "scanResourceCriteria": {
    "Include": {
      "property1": {
        "MapEquals": {}
      },
      "property2": {
        "MapEquals": {}
      }
    },
    "Exclude": {
      "property1": {
        "MapEquals": {}
      },
      "property2": {
        "MapEquals": {}
      }
    }
  },
  "ebsSnapshotPreservation": "NO_RETENTION"
}
```

<h3 id="updatemalwarescansettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The unique ID of the detector that specifies the GuardDuty service where you want to update scan settings.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» scanResourceCriteria|body|object|false|Contains information about criteria used to filter resources before triggering malware scan.|
|» » Include|body|object|false|none|
|» » » **additionalProperties**|body|[ScanCondition](#schemascancondition)|false|Contains information about the condition.|
|» » Exclude|body|object|false|none|
|» » » **additionalProperties**|body|[ScanCondition](#schemascancondition)|false|Contains information about the condition.|
|» ebsSnapshotPreservation|body|string|false|An enum value representing possible snapshot preservation settings.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» ebsSnapshotPreservation|NO_RETENTION|
|» ebsSnapshotPreservation|RETENTION_WITH_FINDING|

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

<h3 id="updatemalwarescansettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateMalwareScanSettingsResponse](#schemaupdatemalwarescansettingsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetMemberDetectors

<a id="opIdGetMemberDetectors"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string/member/detector/get \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "accountIds": [
      "stringstring"
    ]
  }'
```

`POST /detector/{detectorId}/member/detector/get`

<p>Describes which data sources are enabled for the member account's detector.</p> <p>There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html">Regions and endpoints</a>.</p>

> Body parameter

```json
{
  "accountIds": [
    "stringstring"
  ]
}
```

<h3 id="getmemberdetectors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The detector ID for the administrator account.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» accountIds|body|[[AccountId](#schemaaccountid)]|true|The account ID of the member account.|

> Example responses

> 200 Response

```json
{
  "MemberDataSourceConfigurations": {},
  "UnprocessedAccounts": {}
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

<h3 id="getmemberdetectors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMemberDetectorsResponse](#schemagetmemberdetectorsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetMembers

<a id="opIdGetMembers"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string/member/get \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "accountIds": [
      "stringstring"
    ]
  }'
```

`POST /detector/{detectorId}/member/get`

Retrieves GuardDuty member accounts (of the current GuardDuty administrator account) specified by the account IDs.

> Body parameter

```json
{
  "accountIds": [
    "stringstring"
  ]
}
```

<h3 id="getmembers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The unique ID of the detector of the GuardDuty account whose members you want to retrieve.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» accountIds|body|[[AccountId](#schemaaccountid)]|true|A list of account IDs of the GuardDuty member accounts that you want to describe.|

> Example responses

> 200 Response

```json
{
  "Members": {},
  "UnprocessedAccounts": {}
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

<h3 id="getmembers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMembersResponse](#schemagetmembersresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRemainingFreeTrialDays

<a id="opIdGetRemainingFreeTrialDays"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string/freeTrial/daysRemaining \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "accountIds": [
      "stringstring"
    ]
  }'
```

`POST /detector/{detectorId}/freeTrial/daysRemaining`

Provides the number of days left for each data source used in the free trial period.

> Body parameter

```json
{
  "accountIds": [
    "stringstring"
  ]
}
```

<h3 id="getremainingfreetrialdays-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The unique ID of the detector of the GuardDuty member account.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» accountIds|body|[[AccountId](#schemaaccountid)]|false|A list of account identifiers of the GuardDuty member account.|

> Example responses

> 200 Response

```json
{
  "Accounts": {},
  "UnprocessedAccounts": {}
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

<h3 id="getremainingfreetrialdays-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRemainingFreeTrialDaysResponse](#schemagetremainingfreetrialdaysresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetUsageStatistics

<a id="opIdGetUsageStatistics"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string/usage/statistics \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "usageStatisticsType": "SUM_BY_ACCOUNT",
    "usageCriteria": {
      "AccountIds": {},
      "DataSources": {},
      "Resources": {},
      "Features": {}
    },
    "unit": "string",
    "maxResults": 1,
    "nextToken": "string"
  }'
```

`POST /detector/{detectorId}/usage/statistics`

Lists Amazon GuardDuty usage statistics over the last 30 days for the specified detector ID. For newly enabled detectors or data sources, the cost returned will include only the usage so far under 30 days. This may differ from the cost metrics in the console, which project usage over 30 days to provide a monthly cost estimate. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/monitoring_costs.html#usage-calculations">Understanding How Usage Costs are Calculated</a>.

> Body parameter

```json
{
  "usageStatisticsType": "SUM_BY_ACCOUNT",
  "usageCriteria": {
    "AccountIds": {},
    "DataSources": {},
    "Resources": {},
    "Features": {}
  },
  "unit": "string",
  "maxResults": 1,
  "nextToken": "string"
}
```

<h3 id="getusagestatistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The ID of the detector that specifies the GuardDuty service whose usage statistics you want to retrieve.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» usageStatisticsType|body|string|true|The type of usage statistics to retrieve.|
|» usageCriteria|body|object|true|Contains information about the criteria used to query usage statistics.|
|» » AccountIds|body|object|false|none|
|» » DataSources|body|object|false|none|
|» » Resources|body|object|false|none|
|» » Features|body|object|false|none|
|» unit|body|string|false|The currency unit you would like to view your usage statistics in. Current valid values are USD.|
|» maxResults|body|integer|false|The maximum number of results to return in the response.|
|» nextToken|body|string|false|A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the NextToken value returned from the previous request to continue listing results after the first page.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» usageStatisticsType|SUM_BY_ACCOUNT|
|» usageStatisticsType|SUM_BY_DATA_SOURCE|
|» usageStatisticsType|SUM_BY_RESOURCE|
|» usageStatisticsType|TOP_RESOURCES|
|» usageStatisticsType|SUM_BY_FEATURES|

> Example responses

> 200 Response

```json
{
  "UsageStatistics": {
    "SumByAccount": {},
    "SumByDataSource": {},
    "SumByResource": {},
    "TopResources": {},
    "SumByFeature": {}
  },
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

<h3 id="getusagestatistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetUsageStatisticsResponse](#schemagetusagestatisticsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## InviteMembers

<a id="opIdInviteMembers"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string/member/invite \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "accountIds": [
      "stringstring"
    ],
    "disableEmailNotification": true,
    "message": "string"
  }'
```

`POST /detector/{detectorId}/member/invite`

Invites other Amazon Web Services accounts (created as members of the current Amazon Web Services account by CreateMembers) to enable GuardDuty, and allow the current Amazon Web Services account to view and manage these accounts' findings on their behalf as the GuardDuty administrator account.

> Body parameter

```json
{
  "accountIds": [
    "stringstring"
  ],
  "disableEmailNotification": true,
  "message": "string"
}
```

<h3 id="invitemembers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The unique ID of the detector of the GuardDuty account that you want to invite members with.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» accountIds|body|[[AccountId](#schemaaccountid)]|true|A list of account IDs of the accounts that you want to invite to GuardDuty as members.|
|» disableEmailNotification|body|boolean|false|A Boolean value that specifies whether you want to disable email notification to the accounts that you are inviting to GuardDuty as members.|
|» message|body|string|false|The invitation message that you want to send to the accounts that you're inviting to GuardDuty as members.|

> Example responses

> 200 Response

```json
{
  "UnprocessedAccounts": {}
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

<h3 id="invitemembers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[InviteMembersResponse](#schemainvitemembersresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListCoverage

<a id="opIdListCoverage"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string/coverage \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "nextToken": "string",
    "maxResults": 1,
    "filterCriteria": {
      "FilterCriterion": {}
    },
    "sortCriteria": {
      "AttributeName": {},
      "OrderBy": {}
    }
  }'
```

`POST /detector/{detectorId}/coverage`

<p>Lists coverage details for your GuardDuty account. If you're a GuardDuty administrator, you can retrieve all resources associated with the active member accounts in your organization.</p> <p>Make sure the accounts have EKS Runtime Monitoring enabled and GuardDuty agent running on their EKS nodes.</p>

> Body parameter

```json
{
  "nextToken": "string",
  "maxResults": 1,
  "filterCriteria": {
    "FilterCriterion": {}
  },
  "sortCriteria": {
    "AttributeName": {},
    "OrderBy": {}
  }
}
```

<h3 id="listcoverage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The unique ID of the detector whose coverage details you want to retrieve.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» nextToken|body|string|false|A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the NextToken value returned from the previous request to continue listing results after the first page.|
|» maxResults|body|integer|false|The maximum number of results to return in the response.|
|» filterCriteria|body|object|false|Represents the criteria used in the filter.|
|» » FilterCriterion|body|object|false|none|
|» sortCriteria|body|object|false|Information about the sorting criteria used in the coverage statistics.|
|» » AttributeName|body|object|false|none|
|» » OrderBy|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "Resources": {},
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

<h3 id="listcoverage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListCoverageResponse](#schemalistcoverageresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListFindings

<a id="opIdListFindings"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string/findings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "findingCriteria": {
      "Criterion": {
        "property1": {
          "Eq": {},
          "Neq": {},
          "Gt": {},
          "Gte": {},
          "Lt": {},
          "Lte": {},
          "Equals": {},
          "NotEquals": {},
          "GreaterThan": {},
          "GreaterThanOrEqual": {},
          "LessThan": {},
          "LessThanOrEqual": {}
        },
        "property2": {
          "Eq": {},
          "Neq": {},
          "Gt": {},
          "Gte": {},
          "Lt": {},
          "Lte": {},
          "Equals": {},
          "NotEquals": {},
          "GreaterThan": {},
          "GreaterThanOrEqual": {},
          "LessThan": {},
          "LessThanOrEqual": {}
        }
      }
    },
    "sortCriteria": {
      "AttributeName": {},
      "OrderBy": {}
    },
    "maxResults": 1,
    "nextToken": "string"
  }'
```

`POST /detector/{detectorId}/findings`

Lists Amazon GuardDuty findings for the specified detector ID.

> Body parameter

```json
{
  "findingCriteria": {
    "Criterion": {
      "property1": {
        "Eq": {},
        "Neq": {},
        "Gt": {},
        "Gte": {},
        "Lt": {},
        "Lte": {},
        "Equals": {},
        "NotEquals": {},
        "GreaterThan": {},
        "GreaterThanOrEqual": {},
        "LessThan": {},
        "LessThanOrEqual": {}
      },
      "property2": {
        "Eq": {},
        "Neq": {},
        "Gt": {},
        "Gte": {},
        "Lt": {},
        "Lte": {},
        "Equals": {},
        "NotEquals": {},
        "GreaterThan": {},
        "GreaterThanOrEqual": {},
        "LessThan": {},
        "LessThanOrEqual": {}
      }
    }
  },
  "sortCriteria": {
    "AttributeName": {},
    "OrderBy": {}
  },
  "maxResults": 1,
  "nextToken": "string"
}
```

<h3 id="listfindings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The ID of the detector that specifies the GuardDuty service whose findings you want to list.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» findingCriteria|body|object|false|Contains information about the criteria used for querying findings.|
|» » Criterion|body|object|false|none|
|» » » **additionalProperties**|body|[Condition](#schemacondition)|false|Contains information about the condition.|
|» sortCriteria|body|object|false|Contains information about the criteria used for sorting findings.|
|» » AttributeName|body|object|false|none|
|» » OrderBy|body|object|false|none|
|» maxResults|body|integer|false|You can use this parameter to indicate the maximum number of items you want in the response. The default value is 50. The maximum value is 50.|
|» nextToken|body|string|false|You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.|

> Example responses

> 200 Response

```json
{
  "FindingIds": {},
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

<h3 id="listfindings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListFindingsResponse](#schemalistfindingsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListInvitations

<a id="opIdListInvitations"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/invitation \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /invitation`

Lists all GuardDuty membership invitations that were sent to the current Amazon Web Services account.

<h3 id="listinvitations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 50. The maximum value is 50.|
|nextToken|query|string|false|You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
  "Invitations": {},
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

<h3 id="listinvitations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListInvitationsResponse](#schemalistinvitationsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListOrganizationAdminAccounts

<a id="opIdListOrganizationAdminAccounts"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/admin \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /admin`

Lists the accounts configured as GuardDuty delegated administrators.

<h3 id="listorganizationadminaccounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|The maximum number of results to return in the response.|
|nextToken|query|string|false|A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the <code>NextToken</code> value returned from the previous request to continue listing results after the first page.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
  "AdminAccounts": {},
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

<h3 id="listorganizationadminaccounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListOrganizationAdminAccountsResponse](#schemalistorganizationadminaccountsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{resourceArn}`

Lists tags for a resource. Tagging is currently supported for detectors, finding filters, IP sets, and threat intel sets, with a limit of 50 tags per resource. When invoked, this operation returns all assigned tags for a given resource.

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The Amazon Resource Name (ARN) for the given GuardDuty resource. |
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
  "Tags": {
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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/tags/string \
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

Adds tags to a resource.

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
|resourceArn|path|string|true|The Amazon Resource Name (ARN) for the GuardDuty resource to apply a tag to.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tags|body|object|true|The tags to be added to a resource.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 204 Response

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartMonitoringMembers

<a id="opIdStartMonitoringMembers"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string/member/start \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "accountIds": [
      "stringstring"
    ]
  }'
```

`POST /detector/{detectorId}/member/start`

Turns on GuardDuty monitoring of the specified member accounts. Use this operation to restart monitoring of accounts that you stopped monitoring with the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_StopMonitoringMembers.html">StopMonitoringMembers</a> operation.

> Body parameter

```json
{
  "accountIds": [
    "stringstring"
  ]
}
```

<h3 id="startmonitoringmembers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The unique ID of the detector of the GuardDuty administrator account associated with the member accounts to monitor.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» accountIds|body|[[AccountId](#schemaaccountid)]|true|A list of account IDs of the GuardDuty member accounts to start monitoring.|

> Example responses

> 200 Response

```json
{
  "UnprocessedAccounts": {}
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

<h3 id="startmonitoringmembers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartMonitoringMembersResponse](#schemastartmonitoringmembersresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopMonitoringMembers

<a id="opIdStopMonitoringMembers"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string/member/stop \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "accountIds": [
      "stringstring"
    ]
  }'
```

`POST /detector/{detectorId}/member/stop`

<p>Stops GuardDuty monitoring for the specified member accounts. Use the <code>StartMonitoringMembers</code> operation to restart monitoring for those accounts.</p> <p>With <code>autoEnableOrganizationMembers</code> configuration for your organization set to <code>ALL</code>, you'll receive an error if you attempt to stop monitoring the member accounts in your organization.</p>

> Body parameter

```json
{
  "accountIds": [
    "stringstring"
  ]
}
```

<h3 id="stopmonitoringmembers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The unique ID of the detector associated with the GuardDuty administrator account that is monitoring member accounts.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» accountIds|body|[[AccountId](#schemaaccountid)]|true|A list of account IDs for the member accounts to stop monitoring.|

> Example responses

> 200 Response

```json
{
  "UnprocessedAccounts": {}
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

<h3 id="stopmonitoringmembers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopMonitoringMembersResponse](#schemastopmonitoringmembersresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UnarchiveFindings

<a id="opIdUnarchiveFindings"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string/findings/unarchive \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "findingIds": [
      "string"
    ]
  }'
```

`POST /detector/{detectorId}/findings/unarchive`

Unarchives GuardDuty findings specified by the <code>findingIds</code>.

> Body parameter

```json
{
  "findingIds": [
    "string"
  ]
}
```

<h3 id="unarchivefindings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The ID of the detector associated with the findings to unarchive.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» findingIds|body|[[FindingId](#schemafindingid)]|true|The IDs of the findings to unarchive.|

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

<h3 id="unarchivefindings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UnarchiveFindingsResponse](#schemaunarchivefindingsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://guardduty.us-east-1.amazonaws.com/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{resourceArn}#tagKeys`

Removes tags from a resource.

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The Amazon Resource Name (ARN) for the resource to remove tags from.|
|tagKeys|query|[[TagKey](#schematagkey)]|true|The tag keys to remove from the resource.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 204 Response

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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateFindingsFeedback

<a id="opIdUpdateFindingsFeedback"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string/findings/feedback \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "findingIds": [
      "string"
    ],
    "feedback": "USEFUL",
    "comments": "string"
  }'
```

`POST /detector/{detectorId}/findings/feedback`

Marks the specified GuardDuty findings as useful or not useful.

> Body parameter

```json
{
  "findingIds": [
    "string"
  ],
  "feedback": "USEFUL",
  "comments": "string"
}
```

<h3 id="updatefindingsfeedback-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The ID of the detector associated with the findings to update feedback for.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» findingIds|body|[[FindingId](#schemafindingid)]|true|The IDs of the findings that you want to mark as useful or not useful.|
|» feedback|body|string|true|The feedback for the finding.|
|» comments|body|string|false|Additional feedback about the GuardDuty findings.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» feedback|USEFUL|
|» feedback|NOT_USEFUL|

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

<h3 id="updatefindingsfeedback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateFindingsFeedbackResponse](#schemaupdatefindingsfeedbackresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateMemberDetectors

<a id="opIdUpdateMemberDetectors"></a>

> Code samples

```bash
curl https://guardduty.us-east-1.amazonaws.com/detector/string/member/detector/update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "accountIds": [
      "stringstring"
    ],
    "dataSources": {
      "S3Logs": {
        "Enable": {}
      },
      "Kubernetes": {
        "AuditLogs": {
          "Enable": {}
        }
      },
      "MalwareProtection": {
        "ScanEc2InstanceWithFindings": {
          "EbsVolumes": {}
        }
      }
    },
    "features": [
      {
        "Name": {},
        "Status": {},
        "AdditionalConfiguration": {}
      }
    ]
  }'
```

`POST /detector/{detectorId}/member/detector/update`

<p>Contains information on member accounts to be updated.</p> <p>There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html">Regions and endpoints</a>.</p>

> Body parameter

```json
{
  "accountIds": [
    "stringstring"
  ],
  "dataSources": {
    "S3Logs": {
      "Enable": {}
    },
    "Kubernetes": {
      "AuditLogs": {
        "Enable": {}
      }
    },
    "MalwareProtection": {
      "ScanEc2InstanceWithFindings": {
        "EbsVolumes": {}
      }
    }
  },
  "features": [
    {
      "Name": {},
      "Status": {},
      "AdditionalConfiguration": {}
    }
  ]
}
```

<h3 id="updatememberdetectors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorId|path|string|true|The detector ID of the administrator account.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» accountIds|body|[[AccountId](#schemaaccountid)]|true|A list of member account IDs to be updated.|
|» dataSources|body|object|false|Contains information about which data sources are enabled.|
|» » S3Logs|body|object|false|none|
|» » » Enable|body|object|true|none|
|» » Kubernetes|body|object|false|none|
|» » » AuditLogs|body|object|true|none|
|» » » » Enable|body|object|true|none|
|» » MalwareProtection|body|object|false|none|
|» » » ScanEc2InstanceWithFindings|body|object|false|none|
|» » » » EbsVolumes|body|object|false|none|
|» features|body|[[MemberFeaturesConfiguration](#schemamemberfeaturesconfiguration)]|false|A list of features that will be updated for the specified member accounts.|

> Example responses

> 200 Response

```json
{
  "UnprocessedAccounts": {}
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

<h3 id="updatememberdetectors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateMemberDetectorsResponse](#schemaupdatememberdetectorsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AcceptAdministratorInvitationResponse">AcceptAdministratorInvitationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaacceptadministratorinvitationresponse"></a>
<a id="schema_AcceptAdministratorInvitationResponse"></a>
<a id="tocSacceptadministratorinvitationresponse"></a>
<a id="tocsacceptadministratorinvitationresponse"></a>

```json
{}
```

<h2 id="tocS_BadRequestException">BadRequestException</h2>
<!-- backwards compatibility -->
<a id="schemabadrequestexception"></a>
<a id="schema_BadRequestException"></a>
<a id="tocSbadrequestexception"></a>
<a id="tocsbadrequestexception"></a>

```json
null
```

<h2 id="tocS_InternalServerErrorException">InternalServerErrorException</h2>
<!-- backwards compatibility -->
<a id="schemainternalservererrorexception"></a>
<a id="schema_InternalServerErrorException"></a>
<a id="tocSinternalservererrorexception"></a>
<a id="tocsinternalservererrorexception"></a>

```json
null
```

<h2 id="tocS_AcceptInvitationResponse">AcceptInvitationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaacceptinvitationresponse"></a>
<a id="schema_AcceptInvitationResponse"></a>
<a id="tocSacceptinvitationresponse"></a>
<a id="tocsacceptinvitationresponse"></a>

```json
{}
```

This output is deprecated, use AcceptAdministratorInvitationResponse instead

<h2 id="tocS_ArchiveFindingsResponse">ArchiveFindingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaarchivefindingsresponse"></a>
<a id="schema_ArchiveFindingsResponse"></a>
<a id="tocSarchivefindingsresponse"></a>
<a id="tocsarchivefindingsresponse"></a>

```json
{}
```

<h2 id="tocS_FindingId">FindingId</h2>
<!-- backwards compatibility -->
<a id="schemafindingid"></a>
<a id="schema_FindingId"></a>
<a id="tocSfindingid"></a>
<a id="tocsfindingid"></a>

```json
"string"
```

<h2 id="tocS_CreateDetectorResponse">CreateDetectorResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedetectorresponse"></a>
<a id="schema_CreateDetectorResponse"></a>
<a id="tocScreatedetectorresponse"></a>
<a id="tocscreatedetectorresponse"></a>

```json
{
  "DetectorId": {},
  "UnprocessedDataSources": {
    "MalwareProtection": {
      "ScanEc2InstanceWithFindings": {
        "EbsVolumes": {
          "Status": {},
          "Reason": {}
        }
      },
      "ServiceRole": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DetectorId|object|false|none|none|
|UnprocessedDataSources|object|false|none|none|

<h2 id="tocS_S3LogsConfiguration">S3LogsConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemas3logsconfiguration"></a>
<a id="schema_S3LogsConfiguration"></a>
<a id="tocSs3logsconfiguration"></a>
<a id="tocss3logsconfiguration"></a>

```json
{
  "Enable": {}
}
```

Describes whether S3 data event logs will be enabled as a data source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enable|object|true|none|none|

<h2 id="tocS_KubernetesConfiguration">KubernetesConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemakubernetesconfiguration"></a>
<a id="schema_KubernetesConfiguration"></a>
<a id="tocSkubernetesconfiguration"></a>
<a id="tocskubernetesconfiguration"></a>

```json
{
  "AuditLogs": {
    "Enable": {}
  }
}
```

Describes whether any Kubernetes data sources are enabled.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AuditLogs|object|true|none|none|

<h2 id="tocS_MalwareProtectionConfiguration">MalwareProtectionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemamalwareprotectionconfiguration"></a>
<a id="schema_MalwareProtectionConfiguration"></a>
<a id="tocSmalwareprotectionconfiguration"></a>
<a id="tocsmalwareprotectionconfiguration"></a>

```json
{
  "ScanEc2InstanceWithFindings": {
    "EbsVolumes": {}
  }
}
```

Describes whether Malware Protection will be enabled as a data source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScanEc2InstanceWithFindings|object|false|none|none|

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

<h2 id="tocS_DetectorFeatureConfiguration">DetectorFeatureConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemadetectorfeatureconfiguration"></a>
<a id="schema_DetectorFeatureConfiguration"></a>
<a id="tocSdetectorfeatureconfiguration"></a>
<a id="tocsdetectorfeatureconfiguration"></a>

```json
{
  "Name": {},
  "Status": {},
  "AdditionalConfiguration": {}
}
```

Contains information about a GuardDuty feature.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Status|object|false|none|none|
|AdditionalConfiguration|object|false|none|none|

<h2 id="tocS_CreateFilterResponse">CreateFilterResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatefilterresponse"></a>
<a id="schema_CreateFilterResponse"></a>
<a id="tocScreatefilterresponse"></a>
<a id="tocscreatefilterresponse"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_Criterion">Criterion</h2>
<!-- backwards compatibility -->
<a id="schemacriterion"></a>
<a id="schema_Criterion"></a>
<a id="tocScriterion"></a>
<a id="tocscriterion"></a>

```json
{
  "property1": {
    "Eq": {},
    "Neq": {},
    "Gt": {},
    "Gte": {},
    "Lt": {},
    "Lte": {},
    "Equals": {},
    "NotEquals": {},
    "GreaterThan": {},
    "GreaterThanOrEqual": {},
    "LessThan": {},
    "LessThanOrEqual": {}
  },
  "property2": {
    "Eq": {},
    "Neq": {},
    "Gt": {},
    "Gte": {},
    "Lt": {},
    "Lte": {},
    "Equals": {},
    "NotEquals": {},
    "GreaterThan": {},
    "GreaterThanOrEqual": {},
    "LessThan": {},
    "LessThanOrEqual": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[Condition](#schemacondition)|false|none|Contains information about the condition.|

<h2 id="tocS_CreateIPSetResponse">CreateIPSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateipsetresponse"></a>
<a id="schema_CreateIPSetResponse"></a>
<a id="tocScreateipsetresponse"></a>
<a id="tocscreateipsetresponse"></a>

```json
{
  "IpSetId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IpSetId|object|true|none|none|

<h2 id="tocS_CreateMembersResponse">CreateMembersResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatemembersresponse"></a>
<a id="schema_CreateMembersResponse"></a>
<a id="tocScreatemembersresponse"></a>
<a id="tocscreatemembersresponse"></a>

```json
{
  "UnprocessedAccounts": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UnprocessedAccounts|object|true|none|none|

<h2 id="tocS_AccountDetail">AccountDetail</h2>
<!-- backwards compatibility -->
<a id="schemaaccountdetail"></a>
<a id="schema_AccountDetail"></a>
<a id="tocSaccountdetail"></a>
<a id="tocsaccountdetail"></a>

```json
{
  "AccountId": {},
  "Email": {}
}
```

Contains information about the account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|true|none|none|
|Email|object|true|none|none|

<h2 id="tocS_CreatePublishingDestinationResponse">CreatePublishingDestinationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatepublishingdestinationresponse"></a>
<a id="schema_CreatePublishingDestinationResponse"></a>
<a id="tocScreatepublishingdestinationresponse"></a>
<a id="tocscreatepublishingdestinationresponse"></a>

```json
{
  "DestinationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DestinationId|object|true|none|none|

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_CreateSampleFindingsResponse">CreateSampleFindingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatesamplefindingsresponse"></a>
<a id="schema_CreateSampleFindingsResponse"></a>
<a id="tocScreatesamplefindingsresponse"></a>
<a id="tocscreatesamplefindingsresponse"></a>

```json
{}
```

<h2 id="tocS_FindingType">FindingType</h2>
<!-- backwards compatibility -->
<a id="schemafindingtype"></a>
<a id="schema_FindingType"></a>
<a id="tocSfindingtype"></a>
<a id="tocsfindingtype"></a>

```json
"string"
```

<h2 id="tocS_CreateThreatIntelSetResponse">CreateThreatIntelSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatethreatintelsetresponse"></a>
<a id="schema_CreateThreatIntelSetResponse"></a>
<a id="tocScreatethreatintelsetresponse"></a>
<a id="tocscreatethreatintelsetresponse"></a>

```json
{
  "ThreatIntelSetId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ThreatIntelSetId|object|true|none|none|

<h2 id="tocS_DeclineInvitationsResponse">DeclineInvitationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeclineinvitationsresponse"></a>
<a id="schema_DeclineInvitationsResponse"></a>
<a id="tocSdeclineinvitationsresponse"></a>
<a id="tocsdeclineinvitationsresponse"></a>

```json
{
  "UnprocessedAccounts": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UnprocessedAccounts|object|true|none|none|

<h2 id="tocS_AccountId">AccountId</h2>
<!-- backwards compatibility -->
<a id="schemaaccountid"></a>
<a id="schema_AccountId"></a>
<a id="tocSaccountid"></a>
<a id="tocsaccountid"></a>

```json
"stringstring"
```

<h2 id="tocS_DeleteDetectorResponse">DeleteDetectorResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletedetectorresponse"></a>
<a id="schema_DeleteDetectorResponse"></a>
<a id="tocSdeletedetectorresponse"></a>
<a id="tocsdeletedetectorresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteFilterResponse">DeleteFilterResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletefilterresponse"></a>
<a id="schema_DeleteFilterResponse"></a>
<a id="tocSdeletefilterresponse"></a>
<a id="tocsdeletefilterresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteIPSetResponse">DeleteIPSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteipsetresponse"></a>
<a id="schema_DeleteIPSetResponse"></a>
<a id="tocSdeleteipsetresponse"></a>
<a id="tocsdeleteipsetresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteInvitationsResponse">DeleteInvitationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteinvitationsresponse"></a>
<a id="schema_DeleteInvitationsResponse"></a>
<a id="tocSdeleteinvitationsresponse"></a>
<a id="tocsdeleteinvitationsresponse"></a>

```json
{
  "UnprocessedAccounts": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UnprocessedAccounts|object|true|none|none|

<h2 id="tocS_DeleteMembersResponse">DeleteMembersResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletemembersresponse"></a>
<a id="schema_DeleteMembersResponse"></a>
<a id="tocSdeletemembersresponse"></a>
<a id="tocsdeletemembersresponse"></a>

```json
{
  "UnprocessedAccounts": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UnprocessedAccounts|object|true|none|none|

<h2 id="tocS_DeletePublishingDestinationResponse">DeletePublishingDestinationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletepublishingdestinationresponse"></a>
<a id="schema_DeletePublishingDestinationResponse"></a>
<a id="tocSdeletepublishingdestinationresponse"></a>
<a id="tocsdeletepublishingdestinationresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteThreatIntelSetResponse">DeleteThreatIntelSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletethreatintelsetresponse"></a>
<a id="schema_DeleteThreatIntelSetResponse"></a>
<a id="tocSdeletethreatintelsetresponse"></a>
<a id="tocsdeletethreatintelsetresponse"></a>

```json
{}
```

<h2 id="tocS_DescribeMalwareScansResponse">DescribeMalwareScansResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribemalwarescansresponse"></a>
<a id="schema_DescribeMalwareScansResponse"></a>
<a id="tocSdescribemalwarescansresponse"></a>
<a id="tocsdescribemalwarescansresponse"></a>

```json
{
  "Scans": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Scans|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_FilterCriterionList">FilterCriterionList</h2>
<!-- backwards compatibility -->
<a id="schemafiltercriterionlist"></a>
<a id="schema_FilterCriterionList"></a>
<a id="tocSfiltercriterionlist"></a>
<a id="tocsfiltercriterionlist"></a>

```json
[
  {
    "CriterionKey": {},
    "FilterCondition": {
      "EqualsValue": {},
      "GreaterThan": {},
      "LessThan": {}
    }
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
"ASC"
```

<h2 id="tocS_DescribeOrganizationConfigurationResponse">DescribeOrganizationConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeorganizationconfigurationresponse"></a>
<a id="schema_DescribeOrganizationConfigurationResponse"></a>
<a id="tocSdescribeorganizationconfigurationresponse"></a>
<a id="tocsdescribeorganizationconfigurationresponse"></a>

```json
{
  "AutoEnable": {},
  "MemberAccountLimitReached": {},
  "DataSources": {
    "S3Logs": {
      "AutoEnable": {}
    },
    "Kubernetes": {
      "AuditLogs": {
        "AutoEnable": {}
      }
    },
    "MalwareProtection": {
      "ScanEc2InstanceWithFindings": {
        "EbsVolumes": {
          "AutoEnable": {}
        }
      }
    }
  },
  "Features": {},
  "NextToken": {},
  "AutoEnableOrganizationMembers": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoEnable|object|false|none|none|
|MemberAccountLimitReached|object|true|none|none|
|DataSources|object|false|none|none|
|Features|object|false|none|none|
|NextToken|object|false|none|none|
|AutoEnableOrganizationMembers|object|false|none|none|

<h2 id="tocS_DescribePublishingDestinationResponse">DescribePublishingDestinationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribepublishingdestinationresponse"></a>
<a id="schema_DescribePublishingDestinationResponse"></a>
<a id="tocSdescribepublishingdestinationresponse"></a>
<a id="tocsdescribepublishingdestinationresponse"></a>

```json
{
  "DestinationId": {},
  "DestinationType": {},
  "Status": {},
  "PublishingFailureStartTimestamp": {},
  "DestinationProperties": {
    "DestinationArn": {},
    "KmsKeyArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DestinationId|object|true|none|none|
|DestinationType|object|true|none|none|
|Status|object|true|none|none|
|PublishingFailureStartTimestamp|object|true|none|none|
|DestinationProperties|object|true|none|none|

<h2 id="tocS_DisableOrganizationAdminAccountResponse">DisableOrganizationAdminAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisableorganizationadminaccountresponse"></a>
<a id="schema_DisableOrganizationAdminAccountResponse"></a>
<a id="tocSdisableorganizationadminaccountresponse"></a>
<a id="tocsdisableorganizationadminaccountresponse"></a>

```json
{}
```

<h2 id="tocS_DisassociateFromAdministratorAccountResponse">DisassociateFromAdministratorAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatefromadministratoraccountresponse"></a>
<a id="schema_DisassociateFromAdministratorAccountResponse"></a>
<a id="tocSdisassociatefromadministratoraccountresponse"></a>
<a id="tocsdisassociatefromadministratoraccountresponse"></a>

```json
{}
```

<h2 id="tocS_DisassociateFromMasterAccountResponse">DisassociateFromMasterAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatefrommasteraccountresponse"></a>
<a id="schema_DisassociateFromMasterAccountResponse"></a>
<a id="tocSdisassociatefrommasteraccountresponse"></a>
<a id="tocsdisassociatefrommasteraccountresponse"></a>

```json
{}
```

This output is deprecated, use DisassociateFromAdministratorAccountResponse instead

<h2 id="tocS_DisassociateMembersResponse">DisassociateMembersResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatemembersresponse"></a>
<a id="schema_DisassociateMembersResponse"></a>
<a id="tocSdisassociatemembersresponse"></a>
<a id="tocsdisassociatemembersresponse"></a>

```json
{
  "UnprocessedAccounts": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UnprocessedAccounts|object|true|none|none|

<h2 id="tocS_EnableOrganizationAdminAccountResponse">EnableOrganizationAdminAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemaenableorganizationadminaccountresponse"></a>
<a id="schema_EnableOrganizationAdminAccountResponse"></a>
<a id="tocSenableorganizationadminaccountresponse"></a>
<a id="tocsenableorganizationadminaccountresponse"></a>

```json
{}
```

<h2 id="tocS_GetAdministratorAccountResponse">GetAdministratorAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetadministratoraccountresponse"></a>
<a id="schema_GetAdministratorAccountResponse"></a>
<a id="tocSgetadministratoraccountresponse"></a>
<a id="tocsgetadministratoraccountresponse"></a>

```json
{
  "Administrator": {
    "AccountId": {},
    "InvitationId": {},
    "RelationshipStatus": {},
    "InvitedAt": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Administrator|object|true|none|none|

<h2 id="tocS_GetCoverageStatisticsResponse">GetCoverageStatisticsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcoveragestatisticsresponse"></a>
<a id="schema_GetCoverageStatisticsResponse"></a>
<a id="tocSgetcoveragestatisticsresponse"></a>
<a id="tocsgetcoveragestatisticsresponse"></a>

```json
{
  "CoverageStatistics": {
    "CountByResourceType": {
      "property1": 0,
      "property2": 0
    },
    "CountByCoverageStatus": {
      "property1": 0,
      "property2": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CoverageStatistics|object|false|none|none|

<h2 id="tocS_CoverageFilterCriterionList">CoverageFilterCriterionList</h2>
<!-- backwards compatibility -->
<a id="schemacoveragefiltercriterionlist"></a>
<a id="schema_CoverageFilterCriterionList"></a>
<a id="tocScoveragefiltercriterionlist"></a>
<a id="tocscoveragefiltercriterionlist"></a>

```json
[
  {
    "CriterionKey": {},
    "FilterCondition": {
      "Equals": {},
      "NotEquals": {}
    }
  }
]
```

<h2 id="tocS_CoverageStatisticsType">CoverageStatisticsType</h2>
<!-- backwards compatibility -->
<a id="schemacoveragestatisticstype"></a>
<a id="schema_CoverageStatisticsType"></a>
<a id="tocScoveragestatisticstype"></a>
<a id="tocscoveragestatisticstype"></a>

```json
"COUNT_BY_RESOURCE_TYPE"
```

<h2 id="tocS_GetDetectorResponse">GetDetectorResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdetectorresponse"></a>
<a id="schema_GetDetectorResponse"></a>
<a id="tocSgetdetectorresponse"></a>
<a id="tocsgetdetectorresponse"></a>

```json
{
  "CreatedAt": {},
  "FindingPublishingFrequency": {},
  "ServiceRole": {},
  "Status": {},
  "UpdatedAt": {},
  "DataSources": {
    "CloudTrail": {
      "Status": {}
    },
    "DNSLogs": {
      "Status": {}
    },
    "FlowLogs": {
      "Status": {}
    },
    "S3Logs": {
      "Status": {}
    },
    "Kubernetes": {
      "AuditLogs": {
        "Status": {}
      }
    },
    "MalwareProtection": {
      "ScanEc2InstanceWithFindings": {
        "EbsVolumes": {
          "Status": {},
          "Reason": {}
        }
      },
      "ServiceRole": {}
    }
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Features": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreatedAt|object|false|none|none|
|FindingPublishingFrequency|object|false|none|none|
|ServiceRole|object|true|none|none|
|Status|object|true|none|none|
|UpdatedAt|object|false|none|none|
|DataSources|object|false|none|none|
|Tags|object|false|none|none|
|Features|object|false|none|none|

<h2 id="tocS_GetFilterResponse">GetFilterResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetfilterresponse"></a>
<a id="schema_GetFilterResponse"></a>
<a id="tocSgetfilterresponse"></a>
<a id="tocsgetfilterresponse"></a>

```json
{
  "Name": {},
  "Description": {},
  "Action": {},
  "Rank": {},
  "FindingCriteria": {
    "Criterion": {
      "property1": {
        "Eq": {},
        "Neq": {},
        "Gt": {},
        "Gte": {},
        "Lt": {},
        "Lte": {},
        "Equals": {},
        "NotEquals": {},
        "GreaterThan": {},
        "GreaterThanOrEqual": {},
        "LessThan": {},
        "LessThanOrEqual": {}
      },
      "property2": {
        "Eq": {},
        "Neq": {},
        "Gt": {},
        "Gte": {},
        "Lt": {},
        "Lte": {},
        "Equals": {},
        "NotEquals": {},
        "GreaterThan": {},
        "GreaterThanOrEqual": {},
        "LessThan": {},
        "LessThanOrEqual": {}
      }
    }
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Description|object|false|none|none|
|Action|object|true|none|none|
|Rank|object|false|none|none|
|FindingCriteria|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_GetFindingsResponse">GetFindingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetfindingsresponse"></a>
<a id="schema_GetFindingsResponse"></a>
<a id="tocSgetfindingsresponse"></a>
<a id="tocsgetfindingsresponse"></a>

```json
{
  "Findings": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Findings|object|true|none|none|

<h2 id="tocS_GetFindingsStatisticsResponse">GetFindingsStatisticsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetfindingsstatisticsresponse"></a>
<a id="schema_GetFindingsStatisticsResponse"></a>
<a id="tocSgetfindingsstatisticsresponse"></a>
<a id="tocsgetfindingsstatisticsresponse"></a>

```json
{
  "FindingStatistics": {
    "CountBySeverity": {
      "property1": 0,
      "property2": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FindingStatistics|object|true|none|none|

<h2 id="tocS_FindingStatisticType">FindingStatisticType</h2>
<!-- backwards compatibility -->
<a id="schemafindingstatistictype"></a>
<a id="schema_FindingStatisticType"></a>
<a id="tocSfindingstatistictype"></a>
<a id="tocsfindingstatistictype"></a>

```json
"COUNT_BY_SEVERITY"
```

<h2 id="tocS_GetIPSetResponse">GetIPSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetipsetresponse"></a>
<a id="schema_GetIPSetResponse"></a>
<a id="tocSgetipsetresponse"></a>
<a id="tocsgetipsetresponse"></a>

```json
{
  "Name": {},
  "Format": {},
  "Location": {},
  "Status": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Format|object|true|none|none|
|Location|object|true|none|none|
|Status|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_GetInvitationsCountResponse">GetInvitationsCountResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetinvitationscountresponse"></a>
<a id="schema_GetInvitationsCountResponse"></a>
<a id="tocSgetinvitationscountresponse"></a>
<a id="tocsgetinvitationscountresponse"></a>

```json
{
  "InvitationsCount": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InvitationsCount|object|false|none|none|

<h2 id="tocS_GetMalwareScanSettingsResponse">GetMalwareScanSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetmalwarescansettingsresponse"></a>
<a id="schema_GetMalwareScanSettingsResponse"></a>
<a id="tocSgetmalwarescansettingsresponse"></a>
<a id="tocsgetmalwarescansettingsresponse"></a>

```json
{
  "ScanResourceCriteria": {
    "Include": {
      "property1": {
        "MapEquals": {}
      },
      "property2": {
        "MapEquals": {}
      }
    },
    "Exclude": {
      "property1": {
        "MapEquals": {}
      },
      "property2": {
        "MapEquals": {}
      }
    }
  },
  "EbsSnapshotPreservation": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScanResourceCriteria|object|false|none|none|
|EbsSnapshotPreservation|object|false|none|none|

<h2 id="tocS_GetMasterAccountResponse">GetMasterAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetmasteraccountresponse"></a>
<a id="schema_GetMasterAccountResponse"></a>
<a id="tocSgetmasteraccountresponse"></a>
<a id="tocsgetmasteraccountresponse"></a>

```json
{
  "Master": {
    "AccountId": {},
    "InvitationId": {},
    "RelationshipStatus": {},
    "InvitedAt": {}
  }
}
```

This output is deprecated, use GetAdministratorAccountResponse instead

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Master|object|true|none|none|

<h2 id="tocS_GetMemberDetectorsResponse">GetMemberDetectorsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetmemberdetectorsresponse"></a>
<a id="schema_GetMemberDetectorsResponse"></a>
<a id="tocSgetmemberdetectorsresponse"></a>
<a id="tocsgetmemberdetectorsresponse"></a>

```json
{
  "MemberDataSourceConfigurations": {},
  "UnprocessedAccounts": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MemberDataSourceConfigurations|object|true|none|none|
|UnprocessedAccounts|object|true|none|none|

<h2 id="tocS_GetMembersResponse">GetMembersResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetmembersresponse"></a>
<a id="schema_GetMembersResponse"></a>
<a id="tocSgetmembersresponse"></a>
<a id="tocsgetmembersresponse"></a>

```json
{
  "Members": {},
  "UnprocessedAccounts": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Members|object|true|none|none|
|UnprocessedAccounts|object|true|none|none|

<h2 id="tocS_GetRemainingFreeTrialDaysResponse">GetRemainingFreeTrialDaysResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetremainingfreetrialdaysresponse"></a>
<a id="schema_GetRemainingFreeTrialDaysResponse"></a>
<a id="tocSgetremainingfreetrialdaysresponse"></a>
<a id="tocsgetremainingfreetrialdaysresponse"></a>

```json
{
  "Accounts": {},
  "UnprocessedAccounts": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Accounts|object|false|none|none|
|UnprocessedAccounts|object|false|none|none|

<h2 id="tocS_GetThreatIntelSetResponse">GetThreatIntelSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetthreatintelsetresponse"></a>
<a id="schema_GetThreatIntelSetResponse"></a>
<a id="tocSgetthreatintelsetresponse"></a>
<a id="tocsgetthreatintelsetresponse"></a>

```json
{
  "Name": {},
  "Format": {},
  "Location": {},
  "Status": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Format|object|true|none|none|
|Location|object|true|none|none|
|Status|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_GetUsageStatisticsResponse">GetUsageStatisticsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetusagestatisticsresponse"></a>
<a id="schema_GetUsageStatisticsResponse"></a>
<a id="tocSgetusagestatisticsresponse"></a>
<a id="tocsgetusagestatisticsresponse"></a>

```json
{
  "UsageStatistics": {
    "SumByAccount": {},
    "SumByDataSource": {},
    "SumByResource": {},
    "TopResources": {},
    "SumByFeature": {}
  },
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UsageStatistics|object|false|none|none|
|NextToken|object|false|none|none|

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

<h2 id="tocS_DataSourceList">DataSourceList</h2>
<!-- backwards compatibility -->
<a id="schemadatasourcelist"></a>
<a id="schema_DataSourceList"></a>
<a id="tocSdatasourcelist"></a>
<a id="tocsdatasourcelist"></a>

```json
[
  "FLOW_LOGS"
]
```

<h2 id="tocS_ResourceList">ResourceList</h2>
<!-- backwards compatibility -->
<a id="schemaresourcelist"></a>
<a id="schema_ResourceList"></a>
<a id="tocSresourcelist"></a>
<a id="tocsresourcelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_UsageFeatureList">UsageFeatureList</h2>
<!-- backwards compatibility -->
<a id="schemausagefeaturelist"></a>
<a id="schema_UsageFeatureList"></a>
<a id="tocSusagefeaturelist"></a>
<a id="tocsusagefeaturelist"></a>

```json
[
  "FLOW_LOGS"
]
```

<h2 id="tocS_InviteMembersResponse">InviteMembersResponse</h2>
<!-- backwards compatibility -->
<a id="schemainvitemembersresponse"></a>
<a id="schema_InviteMembersResponse"></a>
<a id="tocSinvitemembersresponse"></a>
<a id="tocsinvitemembersresponse"></a>

```json
{
  "UnprocessedAccounts": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UnprocessedAccounts|object|true|none|none|

<h2 id="tocS_ListCoverageResponse">ListCoverageResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcoverageresponse"></a>
<a id="schema_ListCoverageResponse"></a>
<a id="tocSlistcoverageresponse"></a>
<a id="tocslistcoverageresponse"></a>

```json
{
  "Resources": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Resources|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_CoverageSortKey">CoverageSortKey</h2>
<!-- backwards compatibility -->
<a id="schemacoveragesortkey"></a>
<a id="schema_CoverageSortKey"></a>
<a id="tocScoveragesortkey"></a>
<a id="tocscoveragesortkey"></a>

```json
"ACCOUNT_ID"
```

<h2 id="tocS_ListDetectorsResponse">ListDetectorsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdetectorsresponse"></a>
<a id="schema_ListDetectorsResponse"></a>
<a id="tocSlistdetectorsresponse"></a>
<a id="tocslistdetectorsresponse"></a>

```json
{
  "DetectorIds": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DetectorIds|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListFiltersResponse">ListFiltersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfiltersresponse"></a>
<a id="schema_ListFiltersResponse"></a>
<a id="tocSlistfiltersresponse"></a>
<a id="tocslistfiltersresponse"></a>

```json
{
  "FilterNames": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FilterNames|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListFindingsResponse">ListFindingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfindingsresponse"></a>
<a id="schema_ListFindingsResponse"></a>
<a id="tocSlistfindingsresponse"></a>
<a id="tocslistfindingsresponse"></a>

```json
{
  "FindingIds": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FindingIds|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListIPSetsResponse">ListIPSetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistipsetsresponse"></a>
<a id="schema_ListIPSetsResponse"></a>
<a id="tocSlistipsetsresponse"></a>
<a id="tocslistipsetsresponse"></a>

```json
{
  "IpSetIds": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IpSetIds|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListInvitationsResponse">ListInvitationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistinvitationsresponse"></a>
<a id="schema_ListInvitationsResponse"></a>
<a id="tocSlistinvitationsresponse"></a>
<a id="tocslistinvitationsresponse"></a>

```json
{
  "Invitations": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Invitations|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListMembersResponse">ListMembersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmembersresponse"></a>
<a id="schema_ListMembersResponse"></a>
<a id="tocSlistmembersresponse"></a>
<a id="tocslistmembersresponse"></a>

```json
{
  "Members": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Members|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListOrganizationAdminAccountsResponse">ListOrganizationAdminAccountsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistorganizationadminaccountsresponse"></a>
<a id="schema_ListOrganizationAdminAccountsResponse"></a>
<a id="tocSlistorganizationadminaccountsresponse"></a>
<a id="tocslistorganizationadminaccountsresponse"></a>

```json
{
  "AdminAccounts": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdminAccounts|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListPublishingDestinationsResponse">ListPublishingDestinationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistpublishingdestinationsresponse"></a>
<a id="schema_ListPublishingDestinationsResponse"></a>
<a id="tocSlistpublishingdestinationsresponse"></a>
<a id="tocslistpublishingdestinationsresponse"></a>

```json
{
  "Destinations": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Destinations|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

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

<h2 id="tocS_ListThreatIntelSetsResponse">ListThreatIntelSetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistthreatintelsetsresponse"></a>
<a id="schema_ListThreatIntelSetsResponse"></a>
<a id="tocSlistthreatintelsetsresponse"></a>
<a id="tocslistthreatintelsetsresponse"></a>

```json
{
  "ThreatIntelSetIds": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ThreatIntelSetIds|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_StartMonitoringMembersResponse">StartMonitoringMembersResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartmonitoringmembersresponse"></a>
<a id="schema_StartMonitoringMembersResponse"></a>
<a id="tocSstartmonitoringmembersresponse"></a>
<a id="tocsstartmonitoringmembersresponse"></a>

```json
{
  "UnprocessedAccounts": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UnprocessedAccounts|object|true|none|none|

<h2 id="tocS_StopMonitoringMembersResponse">StopMonitoringMembersResponse</h2>
<!-- backwards compatibility -->
<a id="schemastopmonitoringmembersresponse"></a>
<a id="schema_StopMonitoringMembersResponse"></a>
<a id="tocSstopmonitoringmembersresponse"></a>
<a id="tocsstopmonitoringmembersresponse"></a>

```json
{
  "UnprocessedAccounts": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UnprocessedAccounts|object|true|none|none|

<h2 id="tocS_TagResourceResponse">TagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schematagresourceresponse"></a>
<a id="schema_TagResourceResponse"></a>
<a id="tocStagresourceresponse"></a>
<a id="tocstagresourceresponse"></a>

```json
{}
```

<h2 id="tocS_UnarchiveFindingsResponse">UnarchiveFindingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaunarchivefindingsresponse"></a>
<a id="schema_UnarchiveFindingsResponse"></a>
<a id="tocSunarchivefindingsresponse"></a>
<a id="tocsunarchivefindingsresponse"></a>

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

<h2 id="tocS_UpdateDetectorResponse">UpdateDetectorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedetectorresponse"></a>
<a id="schema_UpdateDetectorResponse"></a>
<a id="tocSupdatedetectorresponse"></a>
<a id="tocsupdatedetectorresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateFilterResponse">UpdateFilterResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefilterresponse"></a>
<a id="schema_UpdateFilterResponse"></a>
<a id="tocSupdatefilterresponse"></a>
<a id="tocsupdatefilterresponse"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_UpdateFindingsFeedbackResponse">UpdateFindingsFeedbackResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefindingsfeedbackresponse"></a>
<a id="schema_UpdateFindingsFeedbackResponse"></a>
<a id="tocSupdatefindingsfeedbackresponse"></a>
<a id="tocsupdatefindingsfeedbackresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateIPSetResponse">UpdateIPSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateipsetresponse"></a>
<a id="schema_UpdateIPSetResponse"></a>
<a id="tocSupdateipsetresponse"></a>
<a id="tocsupdateipsetresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateMalwareScanSettingsResponse">UpdateMalwareScanSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemalwarescansettingsresponse"></a>
<a id="schema_UpdateMalwareScanSettingsResponse"></a>
<a id="tocSupdatemalwarescansettingsresponse"></a>
<a id="tocsupdatemalwarescansettingsresponse"></a>

```json
{}
```

<h2 id="tocS_ScanCriterion">ScanCriterion</h2>
<!-- backwards compatibility -->
<a id="schemascancriterion"></a>
<a id="schema_ScanCriterion"></a>
<a id="tocSscancriterion"></a>
<a id="tocsscancriterion"></a>

```json
{
  "property1": {
    "MapEquals": {}
  },
  "property2": {
    "MapEquals": {}
  }
}
```

Represents a map of resource properties that match specified conditions and values when triggering malware scans.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ScanCondition](#schemascancondition)|false|none|Contains information about the condition.|

<h2 id="tocS_UpdateMemberDetectorsResponse">UpdateMemberDetectorsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatememberdetectorsresponse"></a>
<a id="schema_UpdateMemberDetectorsResponse"></a>
<a id="tocSupdatememberdetectorsresponse"></a>
<a id="tocsupdatememberdetectorsresponse"></a>

```json
{
  "UnprocessedAccounts": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UnprocessedAccounts|object|true|none|none|

<h2 id="tocS_MemberFeaturesConfiguration">MemberFeaturesConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemamemberfeaturesconfiguration"></a>
<a id="schema_MemberFeaturesConfiguration"></a>
<a id="tocSmemberfeaturesconfiguration"></a>
<a id="tocsmemberfeaturesconfiguration"></a>

```json
{
  "Name": {},
  "Status": {},
  "AdditionalConfiguration": {}
}
```

Contains information about the features for the member account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Status|object|false|none|none|
|AdditionalConfiguration|object|false|none|none|

<h2 id="tocS_UpdateOrganizationConfigurationResponse">UpdateOrganizationConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateorganizationconfigurationresponse"></a>
<a id="schema_UpdateOrganizationConfigurationResponse"></a>
<a id="tocSupdateorganizationconfigurationresponse"></a>
<a id="tocsupdateorganizationconfigurationresponse"></a>

```json
{}
```

<h2 id="tocS_OrganizationS3LogsConfiguration">OrganizationS3LogsConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaorganizations3logsconfiguration"></a>
<a id="schema_OrganizationS3LogsConfiguration"></a>
<a id="tocSorganizations3logsconfiguration"></a>
<a id="tocsorganizations3logsconfiguration"></a>

```json
{
  "AutoEnable": {}
}
```

Describes whether S3 data event logs will be automatically enabled for new members of the organization.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoEnable|object|true|none|none|

<h2 id="tocS_OrganizationKubernetesConfiguration">OrganizationKubernetesConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationkubernetesconfiguration"></a>
<a id="schema_OrganizationKubernetesConfiguration"></a>
<a id="tocSorganizationkubernetesconfiguration"></a>
<a id="tocsorganizationkubernetesconfiguration"></a>

```json
{
  "AuditLogs": {
    "AutoEnable": {}
  }
}
```

Organization-wide Kubernetes data sources configurations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AuditLogs|object|true|none|none|

<h2 id="tocS_OrganizationMalwareProtectionConfiguration">OrganizationMalwareProtectionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationmalwareprotectionconfiguration"></a>
<a id="schema_OrganizationMalwareProtectionConfiguration"></a>
<a id="tocSorganizationmalwareprotectionconfiguration"></a>
<a id="tocsorganizationmalwareprotectionconfiguration"></a>

```json
{
  "ScanEc2InstanceWithFindings": {
    "EbsVolumes": {
      "AutoEnable": {}
    }
  }
}
```

Organization-wide Malware Protection configurations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScanEc2InstanceWithFindings|object|false|none|none|

<h2 id="tocS_OrganizationFeatureConfiguration">OrganizationFeatureConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationfeatureconfiguration"></a>
<a id="schema_OrganizationFeatureConfiguration"></a>
<a id="tocSorganizationfeatureconfiguration"></a>
<a id="tocsorganizationfeatureconfiguration"></a>

```json
{
  "Name": {},
  "AutoEnable": {},
  "AdditionalConfiguration": {}
}
```

A list of features which will be configured for the organization.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|AutoEnable|object|false|none|none|
|AdditionalConfiguration|object|false|none|none|

<h2 id="tocS_UpdatePublishingDestinationResponse">UpdatePublishingDestinationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepublishingdestinationresponse"></a>
<a id="schema_UpdatePublishingDestinationResponse"></a>
<a id="tocSupdatepublishingdestinationresponse"></a>
<a id="tocsupdatepublishingdestinationresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateThreatIntelSetResponse">UpdateThreatIntelSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatethreatintelsetresponse"></a>
<a id="schema_UpdateThreatIntelSetResponse"></a>
<a id="tocSupdatethreatintelsetresponse"></a>
<a id="tocsupdatethreatintelsetresponse"></a>

```json
{}
```

<h2 id="tocS_DetectorId">DetectorId</h2>
<!-- backwards compatibility -->
<a id="schemadetectorid"></a>
<a id="schema_DetectorId"></a>
<a id="tocSdetectorid"></a>
<a id="tocsdetectorid"></a>

```json
"string"
```

<h2 id="tocS_AcceptAdministratorInvitationRequest">AcceptAdministratorInvitationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaacceptadministratorinvitationrequest"></a>
<a id="schema_AcceptAdministratorInvitationRequest"></a>
<a id="tocSacceptadministratorinvitationrequest"></a>
<a id="tocsacceptadministratorinvitationrequest"></a>

```json
{
  "AdministratorId": {},
  "InvitationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdministratorId|object|true|none|none|
|InvitationId|object|true|none|none|

<h2 id="tocS_AcceptInvitationRequest">AcceptInvitationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaacceptinvitationrequest"></a>
<a id="schema_AcceptInvitationRequest"></a>
<a id="tocSacceptinvitationrequest"></a>
<a id="tocsacceptinvitationrequest"></a>

```json
{
  "MasterId": {},
  "InvitationId": {}
}
```

This input is deprecated, use AcceptAdministratorInvitationRequest instead

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MasterId|object|true|none|none|
|InvitationId|object|true|none|none|

<h2 id="tocS_Boolean">Boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_Boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
```

<h2 id="tocS_AccessControlList">AccessControlList</h2>
<!-- backwards compatibility -->
<a id="schemaaccesscontrollist"></a>
<a id="schema_AccessControlList"></a>
<a id="tocSaccesscontrollist"></a>
<a id="tocsaccesscontrollist"></a>

```json
{
  "AllowsPublicReadAccess": {},
  "AllowsPublicWriteAccess": {}
}
```

Contains information on the current access control policies for the bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AllowsPublicReadAccess|object|false|none|none|
|AllowsPublicWriteAccess|object|false|none|none|

<h2 id="tocS_AccessKeyDetails">AccessKeyDetails</h2>
<!-- backwards compatibility -->
<a id="schemaaccesskeydetails"></a>
<a id="schema_AccessKeyDetails"></a>
<a id="tocSaccesskeydetails"></a>
<a id="tocsaccesskeydetails"></a>

```json
{
  "AccessKeyId": {},
  "PrincipalId": {},
  "UserName": {},
  "UserType": {}
}
```

Contains information about the access keys.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessKeyId|object|false|none|none|
|PrincipalId|object|false|none|none|
|UserName|object|false|none|none|
|UserType|object|false|none|none|

<h2 id="tocS_Email">Email</h2>
<!-- backwards compatibility -->
<a id="schemaemail"></a>
<a id="schema_Email"></a>
<a id="tocSemail"></a>
<a id="tocsemail"></a>

```json
"string"
```

<h2 id="tocS_AccountDetails">AccountDetails</h2>
<!-- backwards compatibility -->
<a id="schemaaccountdetails"></a>
<a id="schema_AccountDetails"></a>
<a id="tocSaccountdetails"></a>
<a id="tocsaccountdetails"></a>

```json
[
  {
    "AccountId": {},
    "Email": {}
  }
]
```

<h2 id="tocS_DataSourcesFreeTrial">DataSourcesFreeTrial</h2>
<!-- backwards compatibility -->
<a id="schemadatasourcesfreetrial"></a>
<a id="schema_DataSourcesFreeTrial"></a>
<a id="tocSdatasourcesfreetrial"></a>
<a id="tocsdatasourcesfreetrial"></a>

```json
{
  "CloudTrail": {
    "FreeTrialDaysRemaining": {}
  },
  "DnsLogs": {
    "FreeTrialDaysRemaining": {}
  },
  "FlowLogs": {
    "FreeTrialDaysRemaining": {}
  },
  "S3Logs": {
    "FreeTrialDaysRemaining": {}
  },
  "Kubernetes": {
    "AuditLogs": {
      "FreeTrialDaysRemaining": {}
    }
  },
  "MalwareProtection": {
    "ScanEc2InstanceWithFindings": {
      "FreeTrialDaysRemaining": {}
    }
  }
}
```

Contains information about which data sources are enabled for the GuardDuty member account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CloudTrail|object|false|none|none|
|DnsLogs|object|false|none|none|
|FlowLogs|object|false|none|none|
|S3Logs|object|false|none|none|
|Kubernetes|object|false|none|none|
|MalwareProtection|object|false|none|none|

<h2 id="tocS_FreeTrialFeatureConfigurationsResults">FreeTrialFeatureConfigurationsResults</h2>
<!-- backwards compatibility -->
<a id="schemafreetrialfeatureconfigurationsresults"></a>
<a id="schema_FreeTrialFeatureConfigurationsResults"></a>
<a id="tocSfreetrialfeatureconfigurationsresults"></a>
<a id="tocsfreetrialfeatureconfigurationsresults"></a>

```json
[
  {
    "Name": {},
    "FreeTrialDaysRemaining": {}
  }
]
```

<h2 id="tocS_AccountFreeTrialInfo">AccountFreeTrialInfo</h2>
<!-- backwards compatibility -->
<a id="schemaaccountfreetrialinfo"></a>
<a id="schema_AccountFreeTrialInfo"></a>
<a id="tocSaccountfreetrialinfo"></a>
<a id="tocsaccountfreetrialinfo"></a>

```json
{
  "AccountId": {},
  "DataSources": {
    "CloudTrail": {
      "FreeTrialDaysRemaining": {}
    },
    "DnsLogs": {
      "FreeTrialDaysRemaining": {}
    },
    "FlowLogs": {
      "FreeTrialDaysRemaining": {}
    },
    "S3Logs": {
      "FreeTrialDaysRemaining": {}
    },
    "Kubernetes": {
      "AuditLogs": {
        "FreeTrialDaysRemaining": {}
      }
    },
    "MalwareProtection": {
      "ScanEc2InstanceWithFindings": {
        "FreeTrialDaysRemaining": {}
      }
    }
  },
  "Features": {}
}
```

Provides details of the GuardDuty member account that uses a free trial service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|false|none|none|
|DataSources|object|false|none|none|
|Features|object|false|none|none|

<h2 id="tocS_AccountFreeTrialInfos">AccountFreeTrialInfos</h2>
<!-- backwards compatibility -->
<a id="schemaaccountfreetrialinfos"></a>
<a id="schema_AccountFreeTrialInfos"></a>
<a id="tocSaccountfreetrialinfos"></a>
<a id="tocsaccountfreetrialinfos"></a>

```json
[
  {
    "AccountId": {},
    "DataSources": {
      "CloudTrail": {
        "FreeTrialDaysRemaining": {}
      },
      "DnsLogs": {
        "FreeTrialDaysRemaining": {}
      },
      "FlowLogs": {
        "FreeTrialDaysRemaining": {}
      },
      "S3Logs": {
        "FreeTrialDaysRemaining": {}
      },
      "Kubernetes": {
        "AuditLogs": {
          "FreeTrialDaysRemaining": {}
        }
      },
      "MalwareProtection": {
        "ScanEc2InstanceWithFindings": {
          "FreeTrialDaysRemaining": {}
        }
      }
    },
    "Features": {}
  }
]
```

<h2 id="tocS_BlockPublicAccess">BlockPublicAccess</h2>
<!-- backwards compatibility -->
<a id="schemablockpublicaccess"></a>
<a id="schema_BlockPublicAccess"></a>
<a id="tocSblockpublicaccess"></a>
<a id="tocsblockpublicaccess"></a>

```json
{
  "IgnorePublicAcls": {},
  "RestrictPublicBuckets": {},
  "BlockPublicAcls": {},
  "BlockPublicPolicy": {}
}
```

Contains information on how the bucker owner's S3 Block Public Access settings are being applied to the S3 bucket. See <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html">S3 Block Public Access</a> for more information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IgnorePublicAcls|object|false|none|none|
|RestrictPublicBuckets|object|false|none|none|
|BlockPublicAcls|object|false|none|none|
|BlockPublicPolicy|object|false|none|none|

<h2 id="tocS_AccountLevelPermissions">AccountLevelPermissions</h2>
<!-- backwards compatibility -->
<a id="schemaaccountlevelpermissions"></a>
<a id="schema_AccountLevelPermissions"></a>
<a id="tocSaccountlevelpermissions"></a>
<a id="tocsaccountlevelpermissions"></a>

```json
{
  "BlockPublicAccess": {
    "IgnorePublicAcls": {},
    "RestrictPublicBuckets": {},
    "BlockPublicAcls": {},
    "BlockPublicPolicy": {}
  }
}
```

Contains information about the account level permissions on the S3 bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BlockPublicAccess|object|false|none|none|

<h2 id="tocS_AwsApiCallAction">AwsApiCallAction</h2>
<!-- backwards compatibility -->
<a id="schemaawsapicallaction"></a>
<a id="schema_AwsApiCallAction"></a>
<a id="tocSawsapicallaction"></a>
<a id="tocsawsapicallaction"></a>

```json
{
  "Api": {},
  "CallerType": {},
  "DomainDetails": {
    "Domain": {}
  },
  "ErrorCode": {},
  "UserAgent": {},
  "RemoteIpDetails": {
    "City": {
      "CityName": {}
    },
    "Country": {
      "CountryCode": {},
      "CountryName": {}
    },
    "GeoLocation": {
      "Lat": {},
      "Lon": {}
    },
    "IpAddressV4": {},
    "Organization": {
      "Asn": {},
      "AsnOrg": {},
      "Isp": {},
      "Org": {}
    }
  },
  "ServiceName": {},
  "RemoteAccountDetails": {
    "AccountId": {},
    "Affiliated": {}
  },
  "AffectedResources": {
    "property1": "string",
    "property2": "string"
  }
}
```

Contains information about the API action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Api|object|false|none|none|
|CallerType|object|false|none|none|
|DomainDetails|object|false|none|none|
|ErrorCode|object|false|none|none|
|UserAgent|object|false|none|none|
|RemoteIpDetails|object|false|none|none|
|ServiceName|object|false|none|none|
|RemoteAccountDetails|object|false|none|none|
|AffectedResources|object|false|none|none|

<h2 id="tocS_DnsRequestAction">DnsRequestAction</h2>
<!-- backwards compatibility -->
<a id="schemadnsrequestaction"></a>
<a id="schema_DnsRequestAction"></a>
<a id="tocSdnsrequestaction"></a>
<a id="tocsdnsrequestaction"></a>

```json
{
  "Domain": {},
  "Protocol": {},
  "Blocked": {}
}
```

Contains information about the DNS_REQUEST action described in this finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Domain|object|false|none|none|
|Protocol|object|false|none|none|
|Blocked|object|false|none|none|

<h2 id="tocS_NetworkConnectionAction">NetworkConnectionAction</h2>
<!-- backwards compatibility -->
<a id="schemanetworkconnectionaction"></a>
<a id="schema_NetworkConnectionAction"></a>
<a id="tocSnetworkconnectionaction"></a>
<a id="tocsnetworkconnectionaction"></a>

```json
{
  "Blocked": {},
  "ConnectionDirection": {},
  "LocalPortDetails": {
    "Port": {},
    "PortName": {}
  },
  "Protocol": {},
  "LocalIpDetails": {
    "IpAddressV4": {}
  },
  "RemoteIpDetails": {
    "City": {
      "CityName": {}
    },
    "Country": {
      "CountryCode": {},
      "CountryName": {}
    },
    "GeoLocation": {
      "Lat": {},
      "Lon": {}
    },
    "IpAddressV4": {},
    "Organization": {
      "Asn": {},
      "AsnOrg": {},
      "Isp": {},
      "Org": {}
    }
  },
  "RemotePortDetails": {
    "Port": {},
    "PortName": {}
  }
}
```

Contains information about the NETWORK_CONNECTION action described in the finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Blocked|object|false|none|none|
|ConnectionDirection|object|false|none|none|
|LocalPortDetails|object|false|none|none|
|Protocol|object|false|none|none|
|LocalIpDetails|object|false|none|none|
|RemoteIpDetails|object|false|none|none|
|RemotePortDetails|object|false|none|none|

<h2 id="tocS_PortProbeAction">PortProbeAction</h2>
<!-- backwards compatibility -->
<a id="schemaportprobeaction"></a>
<a id="schema_PortProbeAction"></a>
<a id="tocSportprobeaction"></a>
<a id="tocsportprobeaction"></a>

```json
{
  "Blocked": {},
  "PortProbeDetails": {}
}
```

Contains information about the PORT_PROBE action described in the finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Blocked|object|false|none|none|
|PortProbeDetails|object|false|none|none|

<h2 id="tocS_KubernetesApiCallAction">KubernetesApiCallAction</h2>
<!-- backwards compatibility -->
<a id="schemakubernetesapicallaction"></a>
<a id="schema_KubernetesApiCallAction"></a>
<a id="tocSkubernetesapicallaction"></a>
<a id="tocskubernetesapicallaction"></a>

```json
{
  "RequestUri": {},
  "Verb": {},
  "SourceIps": {},
  "UserAgent": {},
  "RemoteIpDetails": {
    "City": {
      "CityName": {}
    },
    "Country": {
      "CountryCode": {},
      "CountryName": {}
    },
    "GeoLocation": {
      "Lat": {},
      "Lon": {}
    },
    "IpAddressV4": {},
    "Organization": {
      "Asn": {},
      "AsnOrg": {},
      "Isp": {},
      "Org": {}
    }
  },
  "StatusCode": {},
  "Parameters": {}
}
```

Information about the Kubernetes API call action described in this finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RequestUri|object|false|none|none|
|Verb|object|false|none|none|
|SourceIps|object|false|none|none|
|UserAgent|object|false|none|none|
|RemoteIpDetails|object|false|none|none|
|StatusCode|object|false|none|none|
|Parameters|object|false|none|none|

<h2 id="tocS_RdsLoginAttemptAction">RdsLoginAttemptAction</h2>
<!-- backwards compatibility -->
<a id="schemardsloginattemptaction"></a>
<a id="schema_RdsLoginAttemptAction"></a>
<a id="tocSrdsloginattemptaction"></a>
<a id="tocsrdsloginattemptaction"></a>

```json
{
  "RemoteIpDetails": {
    "City": {
      "CityName": {}
    },
    "Country": {
      "CountryCode": {},
      "CountryName": {}
    },
    "GeoLocation": {
      "Lat": {},
      "Lon": {}
    },
    "IpAddressV4": {},
    "Organization": {
      "Asn": {},
      "AsnOrg": {},
      "Isp": {},
      "Org": {}
    }
  },
  "LoginAttributes": {}
}
```

Indicates that a login attempt was made to the potentially compromised database from a remote IP address.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RemoteIpDetails|object|false|none|none|
|LoginAttributes|object|false|none|none|

<h2 id="tocS_Action">Action</h2>
<!-- backwards compatibility -->
<a id="schemaaction"></a>
<a id="schema_Action"></a>
<a id="tocSaction"></a>
<a id="tocsaction"></a>

```json
{
  "ActionType": {},
  "AwsApiCallAction": {
    "Api": {},
    "CallerType": {},
    "DomainDetails": {
      "Domain": {}
    },
    "ErrorCode": {},
    "UserAgent": {},
    "RemoteIpDetails": {
      "City": {
        "CityName": {}
      },
      "Country": {
        "CountryCode": {},
        "CountryName": {}
      },
      "GeoLocation": {
        "Lat": {},
        "Lon": {}
      },
      "IpAddressV4": {},
      "Organization": {
        "Asn": {},
        "AsnOrg": {},
        "Isp": {},
        "Org": {}
      }
    },
    "ServiceName": {},
    "RemoteAccountDetails": {
      "AccountId": {},
      "Affiliated": {}
    },
    "AffectedResources": {
      "property1": "string",
      "property2": "string"
    }
  },
  "DnsRequestAction": {
    "Domain": {},
    "Protocol": {},
    "Blocked": {}
  },
  "NetworkConnectionAction": {
    "Blocked": {},
    "ConnectionDirection": {},
    "LocalPortDetails": {
      "Port": {},
      "PortName": {}
    },
    "Protocol": {},
    "LocalIpDetails": {
      "IpAddressV4": {}
    },
    "RemoteIpDetails": {
      "City": {
        "CityName": {}
      },
      "Country": {
        "CountryCode": {},
        "CountryName": {}
      },
      "GeoLocation": {
        "Lat": {},
        "Lon": {}
      },
      "IpAddressV4": {},
      "Organization": {
        "Asn": {},
        "AsnOrg": {},
        "Isp": {},
        "Org": {}
      }
    },
    "RemotePortDetails": {
      "Port": {},
      "PortName": {}
    }
  },
  "PortProbeAction": {
    "Blocked": {},
    "PortProbeDetails": {}
  },
  "KubernetesApiCallAction": {
    "RequestUri": {},
    "Verb": {},
    "SourceIps": {},
    "UserAgent": {},
    "RemoteIpDetails": {
      "City": {
        "CityName": {}
      },
      "Country": {
        "CountryCode": {},
        "CountryName": {}
      },
      "GeoLocation": {
        "Lat": {},
        "Lon": {}
      },
      "IpAddressV4": {},
      "Organization": {
        "Asn": {},
        "AsnOrg": {},
        "Isp": {},
        "Org": {}
      }
    },
    "StatusCode": {},
    "Parameters": {}
  },
  "RdsLoginAttemptAction": {
    "RemoteIpDetails": {
      "City": {
        "CityName": {}
      },
      "Country": {
        "CountryCode": {},
        "CountryName": {}
      },
      "GeoLocation": {
        "Lat": {},
        "Lon": {}
      },
      "IpAddressV4": {},
      "Organization": {
        "Asn": {},
        "AsnOrg": {},
        "Isp": {},
        "Org": {}
      }
    },
    "LoginAttributes": {}
  }
}
```

Contains information about actions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActionType|object|false|none|none|
|AwsApiCallAction|object|false|none|none|
|DnsRequestAction|object|false|none|none|
|NetworkConnectionAction|object|false|none|none|
|PortProbeAction|object|false|none|none|
|KubernetesApiCallAction|object|false|none|none|
|RdsLoginAttemptAction|object|false|none|none|

<h2 id="tocS_AddonDetails">AddonDetails</h2>
<!-- backwards compatibility -->
<a id="schemaaddondetails"></a>
<a id="schema_AddonDetails"></a>
<a id="tocSaddondetails"></a>
<a id="tocsaddondetails"></a>

```json
{
  "AddonVersion": {},
  "AddonStatus": {}
}
```

Information about the installed EKS add-on (GuardDuty security agent).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AddonVersion|object|false|none|none|
|AddonStatus|object|false|none|none|

<h2 id="tocS_AdminStatus">AdminStatus</h2>
<!-- backwards compatibility -->
<a id="schemaadminstatus"></a>
<a id="schema_AdminStatus"></a>
<a id="tocSadminstatus"></a>
<a id="tocsadminstatus"></a>

```json
"ENABLED"
```

<h2 id="tocS_AdminAccount">AdminAccount</h2>
<!-- backwards compatibility -->
<a id="schemaadminaccount"></a>
<a id="schema_AdminAccount"></a>
<a id="tocSadminaccount"></a>
<a id="tocsadminaccount"></a>

```json
{
  "AdminAccountId": {},
  "AdminStatus": {}
}
```

The account within the organization specified as the GuardDuty delegated administrator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdminAccountId|object|false|none|none|
|AdminStatus|object|false|none|none|

<h2 id="tocS_AdminAccounts">AdminAccounts</h2>
<!-- backwards compatibility -->
<a id="schemaadminaccounts"></a>
<a id="schema_AdminAccounts"></a>
<a id="tocSadminaccounts"></a>
<a id="tocsadminaccounts"></a>

```json
[
  {
    "AdminAccountId": {},
    "AdminStatus": {}
  }
]
```

<h2 id="tocS_Administrator">Administrator</h2>
<!-- backwards compatibility -->
<a id="schemaadministrator"></a>
<a id="schema_Administrator"></a>
<a id="tocSadministrator"></a>
<a id="tocsadministrator"></a>

```json
{
  "AccountId": {},
  "InvitationId": {},
  "RelationshipStatus": {},
  "InvitedAt": {}
}
```

Contains information about the administrator account and invitation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|false|none|none|
|InvitationId|object|false|none|none|
|RelationshipStatus|object|false|none|none|
|InvitedAt|object|false|none|none|

<h2 id="tocS_AffectedResources">AffectedResources</h2>
<!-- backwards compatibility -->
<a id="schemaaffectedresources"></a>
<a id="schema_AffectedResources"></a>
<a id="tocSaffectedresources"></a>
<a id="tocsaffectedresources"></a>

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

<h2 id="tocS_FindingIds">FindingIds</h2>
<!-- backwards compatibility -->
<a id="schemafindingids"></a>
<a id="schema_FindingIds"></a>
<a id="tocSfindingids"></a>
<a id="tocsfindingids"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ArchiveFindingsRequest">ArchiveFindingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaarchivefindingsrequest"></a>
<a id="schema_ArchiveFindingsRequest"></a>
<a id="tocSarchivefindingsrequest"></a>
<a id="tocsarchivefindingsrequest"></a>

```json
{
  "FindingIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FindingIds|object|true|none|none|

<h2 id="tocS_AutoEnableMembers">AutoEnableMembers</h2>
<!-- backwards compatibility -->
<a id="schemaautoenablemembers"></a>
<a id="schema_AutoEnableMembers"></a>
<a id="tocSautoenablemembers"></a>
<a id="tocsautoenablemembers"></a>

```json
"NEW"
```

<h2 id="tocS_DomainDetails">DomainDetails</h2>
<!-- backwards compatibility -->
<a id="schemadomaindetails"></a>
<a id="schema_DomainDetails"></a>
<a id="tocSdomaindetails"></a>
<a id="tocsdomaindetails"></a>

```json
{
  "Domain": {}
}
```

Contains information about the domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Domain|object|false|none|none|

<h2 id="tocS_RemoteIpDetails">RemoteIpDetails</h2>
<!-- backwards compatibility -->
<a id="schemaremoteipdetails"></a>
<a id="schema_RemoteIpDetails"></a>
<a id="tocSremoteipdetails"></a>
<a id="tocsremoteipdetails"></a>

```json
{
  "City": {
    "CityName": {}
  },
  "Country": {
    "CountryCode": {},
    "CountryName": {}
  },
  "GeoLocation": {
    "Lat": {},
    "Lon": {}
  },
  "IpAddressV4": {},
  "Organization": {
    "Asn": {},
    "AsnOrg": {},
    "Isp": {},
    "Org": {}
  }
}
```

Contains information about the remote IP address of the connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|City|object|false|none|none|
|Country|object|false|none|none|
|GeoLocation|object|false|none|none|
|IpAddressV4|object|false|none|none|
|Organization|object|false|none|none|

<h2 id="tocS_RemoteAccountDetails">RemoteAccountDetails</h2>
<!-- backwards compatibility -->
<a id="schemaremoteaccountdetails"></a>
<a id="schema_RemoteAccountDetails"></a>
<a id="tocSremoteaccountdetails"></a>
<a id="tocsremoteaccountdetails"></a>

```json
{
  "AccountId": {},
  "Affiliated": {}
}
```

Contains details about the remote Amazon Web Services account that made the API call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|false|none|none|
|Affiliated|object|false|none|none|

<h2 id="tocS_BucketPolicy">BucketPolicy</h2>
<!-- backwards compatibility -->
<a id="schemabucketpolicy"></a>
<a id="schema_BucketPolicy"></a>
<a id="tocSbucketpolicy"></a>
<a id="tocsbucketpolicy"></a>

```json
{
  "AllowsPublicReadAccess": {},
  "AllowsPublicWriteAccess": {}
}
```

Contains information on the current bucket policies for the S3 bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AllowsPublicReadAccess|object|false|none|none|
|AllowsPublicWriteAccess|object|false|none|none|

<h2 id="tocS_BucketLevelPermissions">BucketLevelPermissions</h2>
<!-- backwards compatibility -->
<a id="schemabucketlevelpermissions"></a>
<a id="schema_BucketLevelPermissions"></a>
<a id="tocSbucketlevelpermissions"></a>
<a id="tocsbucketlevelpermissions"></a>

```json
{
  "AccessControlList": {
    "AllowsPublicReadAccess": {},
    "AllowsPublicWriteAccess": {}
  },
  "BucketPolicy": {
    "AllowsPublicReadAccess": {},
    "AllowsPublicWriteAccess": {}
  },
  "BlockPublicAccess": {
    "IgnorePublicAcls": {},
    "RestrictPublicBuckets": {},
    "BlockPublicAcls": {},
    "BlockPublicPolicy": {}
  }
}
```

Contains information about the bucket level permissions for the S3 bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessControlList|object|false|none|none|
|BucketPolicy|object|false|none|none|
|BlockPublicAccess|object|false|none|none|

<h2 id="tocS_City">City</h2>
<!-- backwards compatibility -->
<a id="schemacity"></a>
<a id="schema_City"></a>
<a id="tocScity"></a>
<a id="tocscity"></a>

```json
{
  "CityName": {}
}
```

Contains information about the city associated with the IP address.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CityName|object|false|none|none|

<h2 id="tocS_ClientToken">ClientToken</h2>
<!-- backwards compatibility -->
<a id="schemaclienttoken"></a>
<a id="schema_ClientToken"></a>
<a id="tocSclienttoken"></a>
<a id="tocsclienttoken"></a>

```json
"string"
```

<h2 id="tocS_DataSourceStatus">DataSourceStatus</h2>
<!-- backwards compatibility -->
<a id="schemadatasourcestatus"></a>
<a id="schema_DataSourceStatus"></a>
<a id="tocSdatasourcestatus"></a>
<a id="tocsdatasourcestatus"></a>

```json
"ENABLED"
```

<h2 id="tocS_CloudTrailConfigurationResult">CloudTrailConfigurationResult</h2>
<!-- backwards compatibility -->
<a id="schemacloudtrailconfigurationresult"></a>
<a id="schema_CloudTrailConfigurationResult"></a>
<a id="tocScloudtrailconfigurationresult"></a>
<a id="tocscloudtrailconfigurationresult"></a>

```json
{
  "Status": {}
}
```

Contains information on the status of CloudTrail as a data source for the detector.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|true|none|none|

<h2 id="tocS_Eq">Eq</h2>
<!-- backwards compatibility -->
<a id="schemaeq"></a>
<a id="schema_Eq"></a>
<a id="tocSeq"></a>
<a id="tocseq"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Neq">Neq</h2>
<!-- backwards compatibility -->
<a id="schemaneq"></a>
<a id="schema_Neq"></a>
<a id="tocSneq"></a>
<a id="tocsneq"></a>

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

<h2 id="tocS_Equals">Equals</h2>
<!-- backwards compatibility -->
<a id="schemaequals"></a>
<a id="schema_Equals"></a>
<a id="tocSequals"></a>
<a id="tocsequals"></a>

```json
[
  "string"
]
```

<h2 id="tocS_NotEquals">NotEquals</h2>
<!-- backwards compatibility -->
<a id="schemanotequals"></a>
<a id="schema_NotEquals"></a>
<a id="tocSnotequals"></a>
<a id="tocsnotequals"></a>

```json
[
  "string"
]
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

<h2 id="tocS_Condition">Condition</h2>
<!-- backwards compatibility -->
<a id="schemacondition"></a>
<a id="schema_Condition"></a>
<a id="tocScondition"></a>
<a id="tocscondition"></a>

```json
{
  "Eq": {},
  "Neq": {},
  "Gt": {},
  "Gte": {},
  "Lt": {},
  "Lte": {},
  "Equals": {},
  "NotEquals": {},
  "GreaterThan": {},
  "GreaterThanOrEqual": {},
  "LessThan": {},
  "LessThanOrEqual": {}
}
```

Contains information about the condition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Eq|object|false|none|none|
|Neq|object|false|none|none|
|Gt|object|false|none|none|
|Gte|object|false|none|none|
|Lt|object|false|none|none|
|Lte|object|false|none|none|
|Equals|object|false|none|none|
|NotEquals|object|false|none|none|
|GreaterThan|object|false|none|none|
|GreaterThanOrEqual|object|false|none|none|
|LessThan|object|false|none|none|
|LessThanOrEqual|object|false|none|none|

<h2 id="tocS_VolumeMounts">VolumeMounts</h2>
<!-- backwards compatibility -->
<a id="schemavolumemounts"></a>
<a id="schema_VolumeMounts"></a>
<a id="tocSvolumemounts"></a>
<a id="tocsvolumemounts"></a>

```json
[
  {
    "Name": {},
    "MountPath": {}
  }
]
```

<h2 id="tocS_SecurityContext">SecurityContext</h2>
<!-- backwards compatibility -->
<a id="schemasecuritycontext"></a>
<a id="schema_SecurityContext"></a>
<a id="tocSsecuritycontext"></a>
<a id="tocssecuritycontext"></a>

```json
{
  "Privileged": {}
}
```

Container security context.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Privileged|object|false|none|none|

<h2 id="tocS_Container">Container</h2>
<!-- backwards compatibility -->
<a id="schemacontainer"></a>
<a id="schema_Container"></a>
<a id="tocScontainer"></a>
<a id="tocscontainer"></a>

```json
{
  "ContainerRuntime": {},
  "Id": {},
  "Name": {},
  "Image": {},
  "ImagePrefix": {},
  "VolumeMounts": {},
  "SecurityContext": {
    "Privileged": {}
  }
}
```

Details of a container.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContainerRuntime|object|false|none|none|
|Id|object|false|none|none|
|Name|object|false|none|none|
|Image|object|false|none|none|
|ImagePrefix|object|false|none|none|
|VolumeMounts|object|false|none|none|
|SecurityContext|object|false|none|none|

<h2 id="tocS_Containers">Containers</h2>
<!-- backwards compatibility -->
<a id="schemacontainers"></a>
<a id="schema_Containers"></a>
<a id="tocScontainers"></a>
<a id="tocscontainers"></a>

```json
[
  {
    "ContainerRuntime": {},
    "Id": {},
    "Name": {},
    "Image": {},
    "ImagePrefix": {},
    "VolumeMounts": {},
    "SecurityContext": {
      "Privileged": {}
    }
  }
]
```

<h2 id="tocS_CountByCoverageStatus">CountByCoverageStatus</h2>
<!-- backwards compatibility -->
<a id="schemacountbycoveragestatus"></a>
<a id="schema_CountByCoverageStatus"></a>
<a id="tocScountbycoveragestatus"></a>
<a id="tocscountbycoveragestatus"></a>

```json
{
  "property1": 0,
  "property2": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[Long](#schemalong)|false|none|none|

<h2 id="tocS_CountByResourceType">CountByResourceType</h2>
<!-- backwards compatibility -->
<a id="schemacountbyresourcetype"></a>
<a id="schema_CountByResourceType"></a>
<a id="tocScountbyresourcetype"></a>
<a id="tocscountbyresourcetype"></a>

```json
{
  "property1": 0,
  "property2": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[Long](#schemalong)|false|none|none|

<h2 id="tocS_CountBySeverity">CountBySeverity</h2>
<!-- backwards compatibility -->
<a id="schemacountbyseverity"></a>
<a id="schema_CountBySeverity"></a>
<a id="tocScountbyseverity"></a>
<a id="tocscountbyseverity"></a>

```json
{
  "property1": 0,
  "property2": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[Integer](#schemainteger)|false|none|none|

<h2 id="tocS_Country">Country</h2>
<!-- backwards compatibility -->
<a id="schemacountry"></a>
<a id="schema_Country"></a>
<a id="tocScountry"></a>
<a id="tocscountry"></a>

```json
{
  "CountryCode": {},
  "CountryName": {}
}
```

Contains information about the country where the remote IP address is located.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CountryCode|object|false|none|none|
|CountryName|object|false|none|none|

<h2 id="tocS_CoverageEksClusterDetails">CoverageEksClusterDetails</h2>
<!-- backwards compatibility -->
<a id="schemacoverageeksclusterdetails"></a>
<a id="schema_CoverageEksClusterDetails"></a>
<a id="tocScoverageeksclusterdetails"></a>
<a id="tocscoverageeksclusterdetails"></a>

```json
{
  "ClusterName": {},
  "CoveredNodes": {},
  "CompatibleNodes": {},
  "AddonDetails": {
    "AddonVersion": {},
    "AddonStatus": {}
  }
}
```

Information about the EKS cluster that has a coverage status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterName|object|false|none|none|
|CoveredNodes|object|false|none|none|
|CompatibleNodes|object|false|none|none|
|AddonDetails|object|false|none|none|

<h2 id="tocS_CoverageFilterCondition">CoverageFilterCondition</h2>
<!-- backwards compatibility -->
<a id="schemacoveragefiltercondition"></a>
<a id="schema_CoverageFilterCondition"></a>
<a id="tocScoveragefiltercondition"></a>
<a id="tocscoveragefiltercondition"></a>

```json
{
  "Equals": {},
  "NotEquals": {}
}
```

Represents a condition that when matched will be added to the response of the operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Equals|object|false|none|none|
|NotEquals|object|false|none|none|

<h2 id="tocS_CoverageFilterCriteria">CoverageFilterCriteria</h2>
<!-- backwards compatibility -->
<a id="schemacoveragefiltercriteria"></a>
<a id="schema_CoverageFilterCriteria"></a>
<a id="tocScoveragefiltercriteria"></a>
<a id="tocscoveragefiltercriteria"></a>

```json
{
  "FilterCriterion": {}
}
```

Represents the criteria used in the filter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FilterCriterion|object|false|none|none|

<h2 id="tocS_CoverageFilterCriterionKey">CoverageFilterCriterionKey</h2>
<!-- backwards compatibility -->
<a id="schemacoveragefiltercriterionkey"></a>
<a id="schema_CoverageFilterCriterionKey"></a>
<a id="tocScoveragefiltercriterionkey"></a>
<a id="tocscoveragefiltercriterionkey"></a>

```json
"ACCOUNT_ID"
```

<h2 id="tocS_CoverageFilterCriterion">CoverageFilterCriterion</h2>
<!-- backwards compatibility -->
<a id="schemacoveragefiltercriterion"></a>
<a id="schema_CoverageFilterCriterion"></a>
<a id="tocScoveragefiltercriterion"></a>
<a id="tocscoveragefiltercriterion"></a>

```json
{
  "CriterionKey": {},
  "FilterCondition": {
    "Equals": {},
    "NotEquals": {}
  }
}
```

Represents a condition that when matched will be added to the response of the operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CriterionKey|object|false|none|none|
|FilterCondition|object|false|none|none|

<h2 id="tocS_CoverageResourceDetails">CoverageResourceDetails</h2>
<!-- backwards compatibility -->
<a id="schemacoverageresourcedetails"></a>
<a id="schema_CoverageResourceDetails"></a>
<a id="tocScoverageresourcedetails"></a>
<a id="tocscoverageresourcedetails"></a>

```json
{
  "EksClusterDetails": {
    "ClusterName": {},
    "CoveredNodes": {},
    "CompatibleNodes": {},
    "AddonDetails": {
      "AddonVersion": {},
      "AddonStatus": {}
    }
  },
  "ResourceType": {}
}
```

Information about the resource for each individual EKS cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EksClusterDetails|object|false|none|none|
|ResourceType|object|false|none|none|

<h2 id="tocS_CoverageStatus">CoverageStatus</h2>
<!-- backwards compatibility -->
<a id="schemacoveragestatus"></a>
<a id="schema_CoverageStatus"></a>
<a id="tocScoveragestatus"></a>
<a id="tocscoveragestatus"></a>

```json
"HEALTHY"
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

<h2 id="tocS_CoverageResource">CoverageResource</h2>
<!-- backwards compatibility -->
<a id="schemacoverageresource"></a>
<a id="schema_CoverageResource"></a>
<a id="tocScoverageresource"></a>
<a id="tocscoverageresource"></a>

```json
{
  "ResourceId": {},
  "DetectorId": {},
  "AccountId": {},
  "ResourceDetails": {
    "EksClusterDetails": {
      "ClusterName": {},
      "CoveredNodes": {},
      "CompatibleNodes": {},
      "AddonDetails": {
        "AddonVersion": {},
        "AddonStatus": {}
      }
    },
    "ResourceType": {}
  },
  "CoverageStatus": {},
  "Issue": {},
  "UpdatedAt": {}
}
```

Information about the resource of the GuardDuty account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|false|none|none|
|DetectorId|object|false|none|none|
|AccountId|object|false|none|none|
|ResourceDetails|object|false|none|none|
|CoverageStatus|object|false|none|none|
|Issue|object|false|none|none|
|UpdatedAt|object|false|none|none|

<h2 id="tocS_ResourceType">ResourceType</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetype"></a>
<a id="schema_ResourceType"></a>
<a id="tocSresourcetype"></a>
<a id="tocsresourcetype"></a>

```json
"EKS"
```

<h2 id="tocS_CoverageResources">CoverageResources</h2>
<!-- backwards compatibility -->
<a id="schemacoverageresources"></a>
<a id="schema_CoverageResources"></a>
<a id="tocScoverageresources"></a>
<a id="tocscoverageresources"></a>

```json
[
  {
    "ResourceId": {},
    "DetectorId": {},
    "AccountId": {},
    "ResourceDetails": {
      "EksClusterDetails": {
        "ClusterName": {},
        "CoveredNodes": {},
        "CompatibleNodes": {},
        "AddonDetails": {
          "AddonVersion": {},
          "AddonStatus": {}
        }
      },
      "ResourceType": {}
    },
    "CoverageStatus": {},
    "Issue": {},
    "UpdatedAt": {}
  }
]
```

<h2 id="tocS_CoverageSortCriteria">CoverageSortCriteria</h2>
<!-- backwards compatibility -->
<a id="schemacoveragesortcriteria"></a>
<a id="schema_CoverageSortCriteria"></a>
<a id="tocScoveragesortcriteria"></a>
<a id="tocscoveragesortcriteria"></a>

```json
{
  "AttributeName": {},
  "OrderBy": {}
}
```

Information about the sorting criteria used in the coverage statistics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttributeName|object|false|none|none|
|OrderBy|object|false|none|none|

<h2 id="tocS_CoverageStatistics">CoverageStatistics</h2>
<!-- backwards compatibility -->
<a id="schemacoveragestatistics"></a>
<a id="schema_CoverageStatistics"></a>
<a id="tocScoveragestatistics"></a>
<a id="tocscoveragestatistics"></a>

```json
{
  "CountByResourceType": {
    "property1": 0,
    "property2": 0
  },
  "CountByCoverageStatus": {
    "property1": 0,
    "property2": 0
  }
}
```

Information about the coverage statistics for a resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CountByResourceType|object|false|none|none|
|CountByCoverageStatus|object|false|none|none|

<h2 id="tocS_CoverageStatisticsTypeList">CoverageStatisticsTypeList</h2>
<!-- backwards compatibility -->
<a id="schemacoveragestatisticstypelist"></a>
<a id="schema_CoverageStatisticsTypeList"></a>
<a id="tocScoveragestatisticstypelist"></a>
<a id="tocscoveragestatisticstypelist"></a>

```json
[
  "COUNT_BY_RESOURCE_TYPE"
]
```

<h2 id="tocS_FindingPublishingFrequency">FindingPublishingFrequency</h2>
<!-- backwards compatibility -->
<a id="schemafindingpublishingfrequency"></a>
<a id="schema_FindingPublishingFrequency"></a>
<a id="tocSfindingpublishingfrequency"></a>
<a id="tocsfindingpublishingfrequency"></a>

```json
"FIFTEEN_MINUTES"
```

<h2 id="tocS_DataSourceConfigurations">DataSourceConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemadatasourceconfigurations"></a>
<a id="schema_DataSourceConfigurations"></a>
<a id="tocSdatasourceconfigurations"></a>
<a id="tocsdatasourceconfigurations"></a>

```json
{
  "S3Logs": {
    "Enable": {}
  },
  "Kubernetes": {
    "AuditLogs": {
      "Enable": {}
    }
  },
  "MalwareProtection": {
    "ScanEc2InstanceWithFindings": {
      "EbsVolumes": {}
    }
  }
}
```

Contains information about which data sources are enabled.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3Logs|object|false|none|none|
|Kubernetes|object|false|none|none|
|MalwareProtection|object|false|none|none|

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

<h2 id="tocS_DetectorFeatureConfigurations">DetectorFeatureConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemadetectorfeatureconfigurations"></a>
<a id="schema_DetectorFeatureConfigurations"></a>
<a id="tocSdetectorfeatureconfigurations"></a>
<a id="tocsdetectorfeatureconfigurations"></a>

```json
[
  {
    "Name": {},
    "Status": {},
    "AdditionalConfiguration": {}
  }
]
```

<h2 id="tocS_CreateDetectorRequest">CreateDetectorRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedetectorrequest"></a>
<a id="schema_CreateDetectorRequest"></a>
<a id="tocScreatedetectorrequest"></a>
<a id="tocscreatedetectorrequest"></a>

```json
{
  "Enable": {},
  "ClientToken": {},
  "FindingPublishingFrequency": {},
  "DataSources": {
    "S3Logs": {
      "Enable": {}
    },
    "Kubernetes": {
      "AuditLogs": {
        "Enable": {}
      }
    },
    "MalwareProtection": {
      "ScanEc2InstanceWithFindings": {
        "EbsVolumes": {}
      }
    }
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Features": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enable|object|true|none|none|
|ClientToken|object|false|none|none|
|FindingPublishingFrequency|object|false|none|none|
|DataSources|object|false|none|none|
|Tags|object|false|none|none|
|Features|object|false|none|none|

<h2 id="tocS_UnprocessedDataSourcesResult">UnprocessedDataSourcesResult</h2>
<!-- backwards compatibility -->
<a id="schemaunprocesseddatasourcesresult"></a>
<a id="schema_UnprocessedDataSourcesResult"></a>
<a id="tocSunprocesseddatasourcesresult"></a>
<a id="tocsunprocesseddatasourcesresult"></a>

```json
{
  "MalwareProtection": {
    "ScanEc2InstanceWithFindings": {
      "EbsVolumes": {
        "Status": {},
        "Reason": {}
      }
    },
    "ServiceRole": {}
  }
}
```

Specifies the names of the data sources that couldn't be enabled.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MalwareProtection|object|false|none|none|

<h2 id="tocS_FilterName">FilterName</h2>
<!-- backwards compatibility -->
<a id="schemafiltername"></a>
<a id="schema_FilterName"></a>
<a id="tocSfiltername"></a>
<a id="tocsfiltername"></a>

```json
"string"
```

<h2 id="tocS_FilterDescription">FilterDescription</h2>
<!-- backwards compatibility -->
<a id="schemafilterdescription"></a>
<a id="schema_FilterDescription"></a>
<a id="tocSfilterdescription"></a>
<a id="tocsfilterdescription"></a>

```json
"string"
```

<h2 id="tocS_FilterAction">FilterAction</h2>
<!-- backwards compatibility -->
<a id="schemafilteraction"></a>
<a id="schema_FilterAction"></a>
<a id="tocSfilteraction"></a>
<a id="tocsfilteraction"></a>

```json
"NOOP"
```

<h2 id="tocS_FilterRank">FilterRank</h2>
<!-- backwards compatibility -->
<a id="schemafilterrank"></a>
<a id="schema_FilterRank"></a>
<a id="tocSfilterrank"></a>
<a id="tocsfilterrank"></a>

```json
1
```

<h2 id="tocS_FindingCriteria">FindingCriteria</h2>
<!-- backwards compatibility -->
<a id="schemafindingcriteria"></a>
<a id="schema_FindingCriteria"></a>
<a id="tocSfindingcriteria"></a>
<a id="tocsfindingcriteria"></a>

```json
{
  "Criterion": {
    "property1": {
      "Eq": {},
      "Neq": {},
      "Gt": {},
      "Gte": {},
      "Lt": {},
      "Lte": {},
      "Equals": {},
      "NotEquals": {},
      "GreaterThan": {},
      "GreaterThanOrEqual": {},
      "LessThan": {},
      "LessThanOrEqual": {}
    },
    "property2": {
      "Eq": {},
      "Neq": {},
      "Gt": {},
      "Gte": {},
      "Lt": {},
      "Lte": {},
      "Equals": {},
      "NotEquals": {},
      "GreaterThan": {},
      "GreaterThanOrEqual": {},
      "LessThan": {},
      "LessThanOrEqual": {}
    }
  }
}
```

Contains information about the criteria used for querying findings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Criterion|object|false|none|none|

<h2 id="tocS_CreateFilterRequest">CreateFilterRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatefilterrequest"></a>
<a id="schema_CreateFilterRequest"></a>
<a id="tocScreatefilterrequest"></a>
<a id="tocscreatefilterrequest"></a>

```json
{
  "Name": {},
  "Description": {},
  "Action": {},
  "Rank": {},
  "FindingCriteria": {
    "Criterion": {
      "property1": {
        "Eq": {},
        "Neq": {},
        "Gt": {},
        "Gte": {},
        "Lt": {},
        "Lte": {},
        "Equals": {},
        "NotEquals": {},
        "GreaterThan": {},
        "GreaterThanOrEqual": {},
        "LessThan": {},
        "LessThanOrEqual": {}
      },
      "property2": {
        "Eq": {},
        "Neq": {},
        "Gt": {},
        "Gte": {},
        "Lt": {},
        "Lte": {},
        "Equals": {},
        "NotEquals": {},
        "GreaterThan": {},
        "GreaterThanOrEqual": {},
        "LessThan": {},
        "LessThanOrEqual": {}
      }
    }
  },
  "ClientToken": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Description|object|false|none|none|
|Action|object|false|none|none|
|Rank|object|false|none|none|
|FindingCriteria|object|true|none|none|
|ClientToken|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_Name">Name</h2>
<!-- backwards compatibility -->
<a id="schemaname"></a>
<a id="schema_Name"></a>
<a id="tocSname"></a>
<a id="tocsname"></a>

```json
"string"
```

<h2 id="tocS_IpSetFormat">IpSetFormat</h2>
<!-- backwards compatibility -->
<a id="schemaipsetformat"></a>
<a id="schema_IpSetFormat"></a>
<a id="tocSipsetformat"></a>
<a id="tocsipsetformat"></a>

```json
"TXT"
```

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
"string"
```

<h2 id="tocS_CreateIPSetRequest">CreateIPSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateipsetrequest"></a>
<a id="schema_CreateIPSetRequest"></a>
<a id="tocScreateipsetrequest"></a>
<a id="tocscreateipsetrequest"></a>

```json
{
  "Name": {},
  "Format": {},
  "Location": {},
  "Activate": {},
  "ClientToken": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Format|object|true|none|none|
|Location|object|true|none|none|
|Activate|object|true|none|none|
|ClientToken|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateMembersRequest">CreateMembersRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatemembersrequest"></a>
<a id="schema_CreateMembersRequest"></a>
<a id="tocScreatemembersrequest"></a>
<a id="tocscreatemembersrequest"></a>

```json
{
  "AccountDetails": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountDetails|object|true|none|none|

<h2 id="tocS_UnprocessedAccounts">UnprocessedAccounts</h2>
<!-- backwards compatibility -->
<a id="schemaunprocessedaccounts"></a>
<a id="schema_UnprocessedAccounts"></a>
<a id="tocSunprocessedaccounts"></a>
<a id="tocsunprocessedaccounts"></a>

```json
[
  {
    "AccountId": {},
    "Result": {}
  }
]
```

<h2 id="tocS_DestinationType">DestinationType</h2>
<!-- backwards compatibility -->
<a id="schemadestinationtype"></a>
<a id="schema_DestinationType"></a>
<a id="tocSdestinationtype"></a>
<a id="tocsdestinationtype"></a>

```json
"S3"
```

<h2 id="tocS_DestinationProperties">DestinationProperties</h2>
<!-- backwards compatibility -->
<a id="schemadestinationproperties"></a>
<a id="schema_DestinationProperties"></a>
<a id="tocSdestinationproperties"></a>
<a id="tocsdestinationproperties"></a>

```json
{
  "DestinationArn": {},
  "KmsKeyArn": {}
}
```

Contains the Amazon Resource Name (ARN) of the resource to publish to, such as an S3 bucket, and the ARN of the KMS key to use to encrypt published findings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DestinationArn|object|false|none|none|
|KmsKeyArn|object|false|none|none|

<h2 id="tocS_CreatePublishingDestinationRequest">CreatePublishingDestinationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatepublishingdestinationrequest"></a>
<a id="schema_CreatePublishingDestinationRequest"></a>
<a id="tocScreatepublishingdestinationrequest"></a>
<a id="tocscreatepublishingdestinationrequest"></a>

```json
{
  "DestinationType": {},
  "DestinationProperties": {
    "DestinationArn": {},
    "KmsKeyArn": {}
  },
  "ClientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DestinationType|object|true|none|none|
|DestinationProperties|object|true|none|none|
|ClientToken|object|false|none|none|

<h2 id="tocS_FindingTypes">FindingTypes</h2>
<!-- backwards compatibility -->
<a id="schemafindingtypes"></a>
<a id="schema_FindingTypes"></a>
<a id="tocSfindingtypes"></a>
<a id="tocsfindingtypes"></a>

```json
[
  "string"
]
```

<h2 id="tocS_CreateSampleFindingsRequest">CreateSampleFindingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatesamplefindingsrequest"></a>
<a id="schema_CreateSampleFindingsRequest"></a>
<a id="tocScreatesamplefindingsrequest"></a>
<a id="tocscreatesamplefindingsrequest"></a>

```json
{
  "FindingTypes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FindingTypes|object|false|none|none|

<h2 id="tocS_ThreatIntelSetFormat">ThreatIntelSetFormat</h2>
<!-- backwards compatibility -->
<a id="schemathreatintelsetformat"></a>
<a id="schema_ThreatIntelSetFormat"></a>
<a id="tocSthreatintelsetformat"></a>
<a id="tocsthreatintelsetformat"></a>

```json
"TXT"
```

<h2 id="tocS_CreateThreatIntelSetRequest">CreateThreatIntelSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatethreatintelsetrequest"></a>
<a id="schema_CreateThreatIntelSetRequest"></a>
<a id="tocScreatethreatintelsetrequest"></a>
<a id="tocscreatethreatintelsetrequest"></a>

```json
{
  "Name": {},
  "Format": {},
  "Location": {},
  "Activate": {},
  "ClientToken": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Format|object|true|none|none|
|Location|object|true|none|none|
|Activate|object|true|none|none|
|ClientToken|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CriterionKey">CriterionKey</h2>
<!-- backwards compatibility -->
<a id="schemacriterionkey"></a>
<a id="schema_CriterionKey"></a>
<a id="tocScriterionkey"></a>
<a id="tocscriterionkey"></a>

```json
"EC2_INSTANCE_ARN"
```

<h2 id="tocS_DNSLogsConfigurationResult">DNSLogsConfigurationResult</h2>
<!-- backwards compatibility -->
<a id="schemadnslogsconfigurationresult"></a>
<a id="schema_DNSLogsConfigurationResult"></a>
<a id="tocSdnslogsconfigurationresult"></a>
<a id="tocsdnslogsconfigurationresult"></a>

```json
{
  "Status": {}
}
```

Contains information on the status of DNS logs as a data source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|true|none|none|

<h2 id="tocS_DataSource">DataSource</h2>
<!-- backwards compatibility -->
<a id="schemadatasource"></a>
<a id="schema_DataSource"></a>
<a id="tocSdatasource"></a>
<a id="tocsdatasource"></a>

```json
"FLOW_LOGS"
```

<h2 id="tocS_FlowLogsConfigurationResult">FlowLogsConfigurationResult</h2>
<!-- backwards compatibility -->
<a id="schemaflowlogsconfigurationresult"></a>
<a id="schema_FlowLogsConfigurationResult"></a>
<a id="tocSflowlogsconfigurationresult"></a>
<a id="tocsflowlogsconfigurationresult"></a>

```json
{
  "Status": {}
}
```

Contains information on the status of VPC flow logs as a data source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|true|none|none|

<h2 id="tocS_S3LogsConfigurationResult">S3LogsConfigurationResult</h2>
<!-- backwards compatibility -->
<a id="schemas3logsconfigurationresult"></a>
<a id="schema_S3LogsConfigurationResult"></a>
<a id="tocSs3logsconfigurationresult"></a>
<a id="tocss3logsconfigurationresult"></a>

```json
{
  "Status": {}
}
```

Describes whether S3 data event logs will be enabled as a data source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|true|none|none|

<h2 id="tocS_KubernetesConfigurationResult">KubernetesConfigurationResult</h2>
<!-- backwards compatibility -->
<a id="schemakubernetesconfigurationresult"></a>
<a id="schema_KubernetesConfigurationResult"></a>
<a id="tocSkubernetesconfigurationresult"></a>
<a id="tocskubernetesconfigurationresult"></a>

```json
{
  "AuditLogs": {
    "Status": {}
  }
}
```

Describes whether any Kubernetes logs will be enabled as a data source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AuditLogs|object|true|none|none|

<h2 id="tocS_MalwareProtectionConfigurationResult">MalwareProtectionConfigurationResult</h2>
<!-- backwards compatibility -->
<a id="schemamalwareprotectionconfigurationresult"></a>
<a id="schema_MalwareProtectionConfigurationResult"></a>
<a id="tocSmalwareprotectionconfigurationresult"></a>
<a id="tocsmalwareprotectionconfigurationresult"></a>

```json
{
  "ScanEc2InstanceWithFindings": {
    "EbsVolumes": {
      "Status": {},
      "Reason": {}
    }
  },
  "ServiceRole": {}
}
```

An object that contains information on the status of all Malware Protection data sources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScanEc2InstanceWithFindings|object|false|none|none|
|ServiceRole|object|false|none|none|

<h2 id="tocS_DataSourceConfigurationsResult">DataSourceConfigurationsResult</h2>
<!-- backwards compatibility -->
<a id="schemadatasourceconfigurationsresult"></a>
<a id="schema_DataSourceConfigurationsResult"></a>
<a id="tocSdatasourceconfigurationsresult"></a>
<a id="tocsdatasourceconfigurationsresult"></a>

```json
{
  "CloudTrail": {
    "Status": {}
  },
  "DNSLogs": {
    "Status": {}
  },
  "FlowLogs": {
    "Status": {}
  },
  "S3Logs": {
    "Status": {}
  },
  "Kubernetes": {
    "AuditLogs": {
      "Status": {}
    }
  },
  "MalwareProtection": {
    "ScanEc2InstanceWithFindings": {
      "EbsVolumes": {
        "Status": {},
        "Reason": {}
      }
    },
    "ServiceRole": {}
  }
}
```

Contains information on the status of data sources for the detector.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CloudTrail|object|true|none|none|
|DNSLogs|object|true|none|none|
|FlowLogs|object|true|none|none|
|S3Logs|object|true|none|none|
|Kubernetes|object|false|none|none|
|MalwareProtection|object|false|none|none|

<h2 id="tocS_DataSourceFreeTrial">DataSourceFreeTrial</h2>
<!-- backwards compatibility -->
<a id="schemadatasourcefreetrial"></a>
<a id="schema_DataSourceFreeTrial"></a>
<a id="tocSdatasourcefreetrial"></a>
<a id="tocsdatasourcefreetrial"></a>

```json
{
  "FreeTrialDaysRemaining": {}
}
```

Contains information about which data sources are enabled for the GuardDuty member account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FreeTrialDaysRemaining|object|false|none|none|

<h2 id="tocS_KubernetesDataSourceFreeTrial">KubernetesDataSourceFreeTrial</h2>
<!-- backwards compatibility -->
<a id="schemakubernetesdatasourcefreetrial"></a>
<a id="schema_KubernetesDataSourceFreeTrial"></a>
<a id="tocSkubernetesdatasourcefreetrial"></a>
<a id="tocskubernetesdatasourcefreetrial"></a>

```json
{
  "AuditLogs": {
    "FreeTrialDaysRemaining": {}
  }
}
```

Provides details about the Kubernetes resources when it is enabled as a data source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AuditLogs|object|false|none|none|

<h2 id="tocS_MalwareProtectionDataSourceFreeTrial">MalwareProtectionDataSourceFreeTrial</h2>
<!-- backwards compatibility -->
<a id="schemamalwareprotectiondatasourcefreetrial"></a>
<a id="schema_MalwareProtectionDataSourceFreeTrial"></a>
<a id="tocSmalwareprotectiondatasourcefreetrial"></a>
<a id="tocsmalwareprotectiondatasourcefreetrial"></a>

```json
{
  "ScanEc2InstanceWithFindings": {
    "FreeTrialDaysRemaining": {}
  }
}
```

Provides details about Malware Protection when it is enabled as a data source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScanEc2InstanceWithFindings|object|false|none|none|

<h2 id="tocS_DeclineInvitationsRequest">DeclineInvitationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeclineinvitationsrequest"></a>
<a id="schema_DeclineInvitationsRequest"></a>
<a id="tocSdeclineinvitationsrequest"></a>
<a id="tocsdeclineinvitationsrequest"></a>

```json
{
  "AccountIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountIds|object|true|none|none|

<h2 id="tocS_DefaultServerSideEncryption">DefaultServerSideEncryption</h2>
<!-- backwards compatibility -->
<a id="schemadefaultserversideencryption"></a>
<a id="schema_DefaultServerSideEncryption"></a>
<a id="tocSdefaultserversideencryption"></a>
<a id="tocsdefaultserversideencryption"></a>

```json
{
  "EncryptionType": {},
  "KmsMasterKeyArn": {}
}
```

Contains information on the server side encryption method used in the S3 bucket. See <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/serv-side-encryption.html">S3 Server-Side Encryption</a> for more information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EncryptionType|object|false|none|none|
|KmsMasterKeyArn|object|false|none|none|

<h2 id="tocS_DeleteDetectorRequest">DeleteDetectorRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedetectorrequest"></a>
<a id="schema_DeleteDetectorRequest"></a>
<a id="tocSdeletedetectorrequest"></a>
<a id="tocsdeletedetectorrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteFilterRequest">DeleteFilterRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletefilterrequest"></a>
<a id="schema_DeleteFilterRequest"></a>
<a id="tocSdeletefilterrequest"></a>
<a id="tocsdeletefilterrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteIPSetRequest">DeleteIPSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteipsetrequest"></a>
<a id="schema_DeleteIPSetRequest"></a>
<a id="tocSdeleteipsetrequest"></a>
<a id="tocsdeleteipsetrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteInvitationsRequest">DeleteInvitationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteinvitationsrequest"></a>
<a id="schema_DeleteInvitationsRequest"></a>
<a id="tocSdeleteinvitationsrequest"></a>
<a id="tocsdeleteinvitationsrequest"></a>

```json
{
  "AccountIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountIds|object|true|none|none|

<h2 id="tocS_DeleteMembersRequest">DeleteMembersRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletemembersrequest"></a>
<a id="schema_DeleteMembersRequest"></a>
<a id="tocSdeletemembersrequest"></a>
<a id="tocsdeletemembersrequest"></a>

```json
{
  "AccountIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountIds|object|true|none|none|

<h2 id="tocS_DeletePublishingDestinationRequest">DeletePublishingDestinationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletepublishingdestinationrequest"></a>
<a id="schema_DeletePublishingDestinationRequest"></a>
<a id="tocSdeletepublishingdestinationrequest"></a>
<a id="tocsdeletepublishingdestinationrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteThreatIntelSetRequest">DeleteThreatIntelSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletethreatintelsetrequest"></a>
<a id="schema_DeleteThreatIntelSetRequest"></a>
<a id="tocSdeletethreatintelsetrequest"></a>
<a id="tocsdeletethreatintelsetrequest"></a>

```json
{}
```

<h2 id="tocS_IntegerValueWithMax">IntegerValueWithMax</h2>
<!-- backwards compatibility -->
<a id="schemaintegervaluewithmax"></a>
<a id="schema_IntegerValueWithMax"></a>
<a id="tocSintegervaluewithmax"></a>
<a id="tocsintegervaluewithmax"></a>

```json
1
```

<h2 id="tocS_FilterCriteria">FilterCriteria</h2>
<!-- backwards compatibility -->
<a id="schemafiltercriteria"></a>
<a id="schema_FilterCriteria"></a>
<a id="tocSfiltercriteria"></a>
<a id="tocsfiltercriteria"></a>

```json
{
  "FilterCriterion": {}
}
```

Represents the criteria to be used in the filter for describing scan entries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FilterCriterion|object|false|none|none|

<h2 id="tocS_SortCriteria">SortCriteria</h2>
<!-- backwards compatibility -->
<a id="schemasortcriteria"></a>
<a id="schema_SortCriteria"></a>
<a id="tocSsortcriteria"></a>
<a id="tocssortcriteria"></a>

```json
{
  "AttributeName": {},
  "OrderBy": {}
}
```

Contains information about the criteria used for sorting findings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttributeName|object|false|none|none|
|OrderBy|object|false|none|none|

<h2 id="tocS_DescribeMalwareScansRequest">DescribeMalwareScansRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribemalwarescansrequest"></a>
<a id="schema_DescribeMalwareScansRequest"></a>
<a id="tocSdescribemalwarescansrequest"></a>
<a id="tocsdescribemalwarescansrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "FilterCriteria": {
    "FilterCriterion": {}
  },
  "SortCriteria": {
    "AttributeName": {},
    "OrderBy": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|FilterCriteria|object|false|none|none|
|SortCriteria|object|false|none|none|

<h2 id="tocS_Scans">Scans</h2>
<!-- backwards compatibility -->
<a id="schemascans"></a>
<a id="schema_Scans"></a>
<a id="tocSscans"></a>
<a id="tocsscans"></a>

```json
[
  {
    "DetectorId": {},
    "AdminDetectorId": {},
    "ScanId": {},
    "ScanStatus": {},
    "FailureReason": {},
    "ScanStartTime": {},
    "ScanEndTime": {},
    "TriggerDetails": {
      "GuardDutyFindingId": {},
      "Description": {}
    },
    "ResourceDetails": {
      "InstanceArn": {}
    },
    "ScanResultDetails": {
      "ScanResult": {}
    },
    "AccountId": {},
    "TotalBytes": {},
    "FileCount": {},
    "AttachedVolumes": {}
  }
]
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

<h2 id="tocS_DescribeOrganizationConfigurationRequest">DescribeOrganizationConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeorganizationconfigurationrequest"></a>
<a id="schema_DescribeOrganizationConfigurationRequest"></a>
<a id="tocSdescribeorganizationconfigurationrequest"></a>
<a id="tocsdescribeorganizationconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_OrganizationDataSourceConfigurationsResult">OrganizationDataSourceConfigurationsResult</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationdatasourceconfigurationsresult"></a>
<a id="schema_OrganizationDataSourceConfigurationsResult"></a>
<a id="tocSorganizationdatasourceconfigurationsresult"></a>
<a id="tocsorganizationdatasourceconfigurationsresult"></a>

```json
{
  "S3Logs": {
    "AutoEnable": {}
  },
  "Kubernetes": {
    "AuditLogs": {
      "AutoEnable": {}
    }
  },
  "MalwareProtection": {
    "ScanEc2InstanceWithFindings": {
      "EbsVolumes": {
        "AutoEnable": {}
      }
    }
  }
}
```

An object that contains information on which data sources are automatically enabled for new members within the organization.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3Logs|object|true|none|none|
|Kubernetes|object|false|none|none|
|MalwareProtection|object|false|none|none|

<h2 id="tocS_OrganizationFeaturesConfigurationsResults">OrganizationFeaturesConfigurationsResults</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationfeaturesconfigurationsresults"></a>
<a id="schema_OrganizationFeaturesConfigurationsResults"></a>
<a id="tocSorganizationfeaturesconfigurationsresults"></a>
<a id="tocsorganizationfeaturesconfigurationsresults"></a>

```json
[
  {
    "Name": {},
    "AutoEnable": {},
    "AdditionalConfiguration": {}
  }
]
```

<h2 id="tocS_DescribePublishingDestinationRequest">DescribePublishingDestinationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribepublishingdestinationrequest"></a>
<a id="schema_DescribePublishingDestinationRequest"></a>
<a id="tocSdescribepublishingdestinationrequest"></a>
<a id="tocsdescribepublishingdestinationrequest"></a>

```json
{}
```

<h2 id="tocS_PublishingStatus">PublishingStatus</h2>
<!-- backwards compatibility -->
<a id="schemapublishingstatus"></a>
<a id="schema_PublishingStatus"></a>
<a id="tocSpublishingstatus"></a>
<a id="tocspublishingstatus"></a>

```json
"PENDING_VERIFICATION"
```

<h2 id="tocS_Destination">Destination</h2>
<!-- backwards compatibility -->
<a id="schemadestination"></a>
<a id="schema_Destination"></a>
<a id="tocSdestination"></a>
<a id="tocsdestination"></a>

```json
{
  "DestinationId": {},
  "DestinationType": {},
  "Status": {}
}
```

Contains information about the publishing destination, including the ID, type, and status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DestinationId|object|true|none|none|
|DestinationType|object|true|none|none|
|Status|object|true|none|none|

<h2 id="tocS_Destinations">Destinations</h2>
<!-- backwards compatibility -->
<a id="schemadestinations"></a>
<a id="schema_Destinations"></a>
<a id="tocSdestinations"></a>
<a id="tocsdestinations"></a>

```json
[
  {
    "DestinationId": {},
    "DestinationType": {},
    "Status": {}
  }
]
```

<h2 id="tocS_FeatureAdditionalConfiguration">FeatureAdditionalConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemafeatureadditionalconfiguration"></a>
<a id="schema_FeatureAdditionalConfiguration"></a>
<a id="tocSfeatureadditionalconfiguration"></a>
<a id="tocsfeatureadditionalconfiguration"></a>

```json
"EKS_ADDON_MANAGEMENT"
```

<h2 id="tocS_FeatureStatus">FeatureStatus</h2>
<!-- backwards compatibility -->
<a id="schemafeaturestatus"></a>
<a id="schema_FeatureStatus"></a>
<a id="tocSfeaturestatus"></a>
<a id="tocsfeaturestatus"></a>

```json
"ENABLED"
```

<h2 id="tocS_DetectorAdditionalConfiguration">DetectorAdditionalConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemadetectoradditionalconfiguration"></a>
<a id="schema_DetectorAdditionalConfiguration"></a>
<a id="tocSdetectoradditionalconfiguration"></a>
<a id="tocsdetectoradditionalconfiguration"></a>

```json
{
  "Name": {},
  "Status": {}
}
```

Information about the additional configuration for a feature in your GuardDuty account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_DetectorAdditionalConfigurationResult">DetectorAdditionalConfigurationResult</h2>
<!-- backwards compatibility -->
<a id="schemadetectoradditionalconfigurationresult"></a>
<a id="schema_DetectorAdditionalConfigurationResult"></a>
<a id="tocSdetectoradditionalconfigurationresult"></a>
<a id="tocsdetectoradditionalconfigurationresult"></a>

```json
{
  "Name": {},
  "Status": {},
  "UpdatedAt": {}
}
```

Information about the additional configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Status|object|false|none|none|
|UpdatedAt|object|false|none|none|

<h2 id="tocS_DetectorAdditionalConfigurationResults">DetectorAdditionalConfigurationResults</h2>
<!-- backwards compatibility -->
<a id="schemadetectoradditionalconfigurationresults"></a>
<a id="schema_DetectorAdditionalConfigurationResults"></a>
<a id="tocSdetectoradditionalconfigurationresults"></a>
<a id="tocsdetectoradditionalconfigurationresults"></a>

```json
[
  {
    "Name": {},
    "Status": {},
    "UpdatedAt": {}
  }
]
```

<h2 id="tocS_DetectorAdditionalConfigurations">DetectorAdditionalConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemadetectoradditionalconfigurations"></a>
<a id="schema_DetectorAdditionalConfigurations"></a>
<a id="tocSdetectoradditionalconfigurations"></a>
<a id="tocsdetectoradditionalconfigurations"></a>

```json
[
  {
    "Name": {},
    "Status": {}
  }
]
```

<h2 id="tocS_DetectorFeature">DetectorFeature</h2>
<!-- backwards compatibility -->
<a id="schemadetectorfeature"></a>
<a id="schema_DetectorFeature"></a>
<a id="tocSdetectorfeature"></a>
<a id="tocsdetectorfeature"></a>

```json
"S3_DATA_EVENTS"
```

<h2 id="tocS_DetectorFeatureResult">DetectorFeatureResult</h2>
<!-- backwards compatibility -->
<a id="schemadetectorfeatureresult"></a>
<a id="schema_DetectorFeatureResult"></a>
<a id="tocSdetectorfeatureresult"></a>
<a id="tocsdetectorfeatureresult"></a>

```json
"FLOW_LOGS"
```

<h2 id="tocS_DetectorFeatureConfigurationResult">DetectorFeatureConfigurationResult</h2>
<!-- backwards compatibility -->
<a id="schemadetectorfeatureconfigurationresult"></a>
<a id="schema_DetectorFeatureConfigurationResult"></a>
<a id="tocSdetectorfeatureconfigurationresult"></a>
<a id="tocsdetectorfeatureconfigurationresult"></a>

```json
{
  "Name": {},
  "Status": {},
  "UpdatedAt": {},
  "AdditionalConfiguration": {}
}
```

Contains information about a GuardDuty feature.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Status|object|false|none|none|
|UpdatedAt|object|false|none|none|
|AdditionalConfiguration|object|false|none|none|

<h2 id="tocS_DetectorFeatureConfigurationsResults">DetectorFeatureConfigurationsResults</h2>
<!-- backwards compatibility -->
<a id="schemadetectorfeatureconfigurationsresults"></a>
<a id="schema_DetectorFeatureConfigurationsResults"></a>
<a id="tocSdetectorfeatureconfigurationsresults"></a>
<a id="tocsdetectorfeatureconfigurationsresults"></a>

```json
[
  {
    "Name": {},
    "Status": {},
    "UpdatedAt": {},
    "AdditionalConfiguration": {}
  }
]
```

<h2 id="tocS_DetectorIds">DetectorIds</h2>
<!-- backwards compatibility -->
<a id="schemadetectorids"></a>
<a id="schema_DetectorIds"></a>
<a id="tocSdetectorids"></a>
<a id="tocsdetectorids"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DetectorStatus">DetectorStatus</h2>
<!-- backwards compatibility -->
<a id="schemadetectorstatus"></a>
<a id="schema_DetectorStatus"></a>
<a id="tocSdetectorstatus"></a>
<a id="tocsdetectorstatus"></a>

```json
"ENABLED"
```

<h2 id="tocS_DisableOrganizationAdminAccountRequest">DisableOrganizationAdminAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisableorganizationadminaccountrequest"></a>
<a id="schema_DisableOrganizationAdminAccountRequest"></a>
<a id="tocSdisableorganizationadminaccountrequest"></a>
<a id="tocsdisableorganizationadminaccountrequest"></a>

```json
{
  "AdminAccountId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdminAccountId|object|true|none|none|

<h2 id="tocS_DisassociateFromAdministratorAccountRequest">DisassociateFromAdministratorAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatefromadministratoraccountrequest"></a>
<a id="schema_DisassociateFromAdministratorAccountRequest"></a>
<a id="tocSdisassociatefromadministratoraccountrequest"></a>
<a id="tocsdisassociatefromadministratoraccountrequest"></a>

```json
{}
```

<h2 id="tocS_DisassociateFromMasterAccountRequest">DisassociateFromMasterAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatefrommasteraccountrequest"></a>
<a id="schema_DisassociateFromMasterAccountRequest"></a>
<a id="tocSdisassociatefrommasteraccountrequest"></a>
<a id="tocsdisassociatefrommasteraccountrequest"></a>

```json
{}
```

This input is deprecated, use DisassociateFromAdministratorAccountRequest instead

<h2 id="tocS_DisassociateMembersRequest">DisassociateMembersRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatemembersrequest"></a>
<a id="schema_DisassociateMembersRequest"></a>
<a id="tocSdisassociatemembersrequest"></a>
<a id="tocsdisassociatemembersrequest"></a>

```json
{
  "AccountIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountIds|object|true|none|none|

<h2 id="tocS_Double">Double</h2>
<!-- backwards compatibility -->
<a id="schemadouble"></a>
<a id="schema_Double"></a>
<a id="tocSdouble"></a>
<a id="tocsdouble"></a>

```json
0
```

<h2 id="tocS_EbsSnapshotPreservation">EbsSnapshotPreservation</h2>
<!-- backwards compatibility -->
<a id="schemaebssnapshotpreservation"></a>
<a id="schema_EbsSnapshotPreservation"></a>
<a id="tocSebssnapshotpreservation"></a>
<a id="tocsebssnapshotpreservation"></a>

```json
"NO_RETENTION"
```

<h2 id="tocS_VolumeDetails">VolumeDetails</h2>
<!-- backwards compatibility -->
<a id="schemavolumedetails"></a>
<a id="schema_VolumeDetails"></a>
<a id="tocSvolumedetails"></a>
<a id="tocsvolumedetails"></a>

```json
[
  {
    "VolumeArn": {},
    "VolumeType": {},
    "DeviceName": {},
    "VolumeSizeInGB": {},
    "EncryptionType": {},
    "SnapshotArn": {},
    "KmsKeyArn": {}
  }
]
```

<h2 id="tocS_EbsVolumeDetails">EbsVolumeDetails</h2>
<!-- backwards compatibility -->
<a id="schemaebsvolumedetails"></a>
<a id="schema_EbsVolumeDetails"></a>
<a id="tocSebsvolumedetails"></a>
<a id="tocsebsvolumedetails"></a>

```json
{
  "ScannedVolumeDetails": {},
  "SkippedVolumeDetails": {}
}
```

Contains list of scanned and skipped EBS volumes with details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScannedVolumeDetails|object|false|none|none|
|SkippedVolumeDetails|object|false|none|none|

<h2 id="tocS_Sources">Sources</h2>
<!-- backwards compatibility -->
<a id="schemasources"></a>
<a id="schema_Sources"></a>
<a id="tocSsources"></a>
<a id="tocssources"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ScanDetections">ScanDetections</h2>
<!-- backwards compatibility -->
<a id="schemascandetections"></a>
<a id="schema_ScanDetections"></a>
<a id="tocSscandetections"></a>
<a id="tocsscandetections"></a>

```json
{
  "ScannedItemCount": {
    "TotalGb": {},
    "Files": {},
    "Volumes": {}
  },
  "ThreatsDetectedItemCount": {
    "Files": {}
  },
  "HighestSeverityThreatDetails": {
    "Severity": {},
    "ThreatName": {},
    "Count": {}
  },
  "ThreatDetectedByName": {
    "ItemCount": {},
    "UniqueThreatNameCount": {},
    "Shortened": {},
    "ThreatNames": {}
  }
}
```

Contains a complete view providing malware scan result details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScannedItemCount|object|false|none|none|
|ThreatsDetectedItemCount|object|false|none|none|
|HighestSeverityThreatDetails|object|false|none|none|
|ThreatDetectedByName|object|false|none|none|

<h2 id="tocS_EbsVolumeScanDetails">EbsVolumeScanDetails</h2>
<!-- backwards compatibility -->
<a id="schemaebsvolumescandetails"></a>
<a id="schema_EbsVolumeScanDetails"></a>
<a id="tocSebsvolumescandetails"></a>
<a id="tocsebsvolumescandetails"></a>

```json
{
  "ScanId": {},
  "ScanStartedAt": {},
  "ScanCompletedAt": {},
  "TriggerFindingId": {},
  "Sources": {},
  "ScanDetections": {
    "ScannedItemCount": {
      "TotalGb": {},
      "Files": {},
      "Volumes": {}
    },
    "ThreatsDetectedItemCount": {
      "Files": {}
    },
    "HighestSeverityThreatDetails": {
      "Severity": {},
      "ThreatName": {},
      "Count": {}
    },
    "ThreatDetectedByName": {
      "ItemCount": {},
      "UniqueThreatNameCount": {},
      "Shortened": {},
      "ThreatNames": {}
    }
  }
}
```

Contains details from the malware scan that created a finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScanId|object|false|none|none|
|ScanStartedAt|object|false|none|none|
|ScanCompletedAt|object|false|none|none|
|TriggerFindingId|object|false|none|none|
|Sources|object|false|none|none|
|ScanDetections|object|false|none|none|

<h2 id="tocS_EbsVolumesResult">EbsVolumesResult</h2>
<!-- backwards compatibility -->
<a id="schemaebsvolumesresult"></a>
<a id="schema_EbsVolumesResult"></a>
<a id="tocSebsvolumesresult"></a>
<a id="tocsebsvolumesresult"></a>

```json
{
  "Status": {},
  "Reason": {}
}
```

Describes the configuration of scanning EBS volumes as a data source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|
|Reason|object|false|none|none|

<h2 id="tocS_Tags">Tags</h2>
<!-- backwards compatibility -->
<a id="schematags"></a>
<a id="schema_Tags"></a>
<a id="tocStags"></a>
<a id="tocstags"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_EcsTaskDetails">EcsTaskDetails</h2>
<!-- backwards compatibility -->
<a id="schemaecstaskdetails"></a>
<a id="schema_EcsTaskDetails"></a>
<a id="tocSecstaskdetails"></a>
<a id="tocsecstaskdetails"></a>

```json
{
  "Arn": {},
  "DefinitionArn": {},
  "Version": {},
  "TaskCreatedAt": {},
  "StartedAt": {},
  "StartedBy": {},
  "Tags": {},
  "Volumes": {},
  "Containers": {},
  "Group": {}
}
```

Contains information about the task in an ECS cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|DefinitionArn|object|false|none|none|
|Version|object|false|none|none|
|TaskCreatedAt|object|false|none|none|
|StartedAt|object|false|none|none|
|StartedBy|object|false|none|none|
|Tags|object|false|none|none|
|Volumes|object|false|none|none|
|Containers|object|false|none|none|
|Group|object|false|none|none|

<h2 id="tocS_EcsClusterDetails">EcsClusterDetails</h2>
<!-- backwards compatibility -->
<a id="schemaecsclusterdetails"></a>
<a id="schema_EcsClusterDetails"></a>
<a id="tocSecsclusterdetails"></a>
<a id="tocsecsclusterdetails"></a>

```json
{
  "Name": {},
  "Arn": {},
  "Status": {},
  "ActiveServicesCount": {},
  "RegisteredContainerInstancesCount": {},
  "RunningTasksCount": {},
  "Tags": {},
  "TaskDetails": {
    "Arn": {},
    "DefinitionArn": {},
    "Version": {},
    "TaskCreatedAt": {},
    "StartedAt": {},
    "StartedBy": {},
    "Tags": {},
    "Volumes": {},
    "Containers": {},
    "Group": {}
  }
}
```

Contains information about the details of the ECS Cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Arn|object|false|none|none|
|Status|object|false|none|none|
|ActiveServicesCount|object|false|none|none|
|RegisteredContainerInstancesCount|object|false|none|none|
|RunningTasksCount|object|false|none|none|
|Tags|object|false|none|none|
|TaskDetails|object|false|none|none|

<h2 id="tocS_Volumes">Volumes</h2>
<!-- backwards compatibility -->
<a id="schemavolumes"></a>
<a id="schema_Volumes"></a>
<a id="tocSvolumes"></a>
<a id="tocsvolumes"></a>

```json
[
  {
    "Name": {},
    "HostPath": {
      "Path": {}
    }
  }
]
```

<h2 id="tocS_EksClusterDetails">EksClusterDetails</h2>
<!-- backwards compatibility -->
<a id="schemaeksclusterdetails"></a>
<a id="schema_EksClusterDetails"></a>
<a id="tocSeksclusterdetails"></a>
<a id="tocseksclusterdetails"></a>

```json
{
  "Name": {},
  "Arn": {},
  "VpcId": {},
  "Status": {},
  "Tags": {},
  "CreatedAt": {}
}
```

Details about the EKS cluster involved in a Kubernetes finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Arn|object|false|none|none|
|VpcId|object|false|none|none|
|Status|object|false|none|none|
|Tags|object|false|none|none|
|CreatedAt|object|false|none|none|

<h2 id="tocS_EnableOrganizationAdminAccountRequest">EnableOrganizationAdminAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemaenableorganizationadminaccountrequest"></a>
<a id="schema_EnableOrganizationAdminAccountRequest"></a>
<a id="tocSenableorganizationadminaccountrequest"></a>
<a id="tocsenableorganizationadminaccountrequest"></a>

```json
{
  "AdminAccountId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdminAccountId|object|true|none|none|

<h2 id="tocS_ThreatIntelligenceDetails">ThreatIntelligenceDetails</h2>
<!-- backwards compatibility -->
<a id="schemathreatintelligencedetails"></a>
<a id="schema_ThreatIntelligenceDetails"></a>
<a id="tocSthreatintelligencedetails"></a>
<a id="tocsthreatintelligencedetails"></a>

```json
[
  {
    "ThreatListName": {},
    "ThreatNames": {}
  }
]
```

<h2 id="tocS_Evidence">Evidence</h2>
<!-- backwards compatibility -->
<a id="schemaevidence"></a>
<a id="schema_Evidence"></a>
<a id="tocSevidence"></a>
<a id="tocsevidence"></a>

```json
{
  "ThreatIntelligenceDetails": {}
}
```

Contains information about the reason that the finding was generated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ThreatIntelligenceDetails|object|false|none|none|

<h2 id="tocS_Feedback">Feedback</h2>
<!-- backwards compatibility -->
<a id="schemafeedback"></a>
<a id="schema_Feedback"></a>
<a id="tocSfeedback"></a>
<a id="tocsfeedback"></a>

```json
"USEFUL"
```

<h2 id="tocS_ScanFilePath">ScanFilePath</h2>
<!-- backwards compatibility -->
<a id="schemascanfilepath"></a>
<a id="schema_ScanFilePath"></a>
<a id="tocSscanfilepath"></a>
<a id="tocsscanfilepath"></a>

```json
{
  "FilePath": {},
  "VolumeArn": {},
  "Hash": {},
  "FileName": {}
}
```

Contains details of infected file including name, file path and hash.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FilePath|object|false|none|none|
|VolumeArn|object|false|none|none|
|Hash|object|false|none|none|
|FileName|object|false|none|none|

<h2 id="tocS_FilePaths">FilePaths</h2>
<!-- backwards compatibility -->
<a id="schemafilepaths"></a>
<a id="schema_FilePaths"></a>
<a id="tocSfilepaths"></a>
<a id="tocsfilepaths"></a>

```json
[
  {
    "FilePath": {},
    "VolumeArn": {},
    "Hash": {},
    "FileName": {}
  }
]
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

<h2 id="tocS_LongValue">LongValue</h2>
<!-- backwards compatibility -->
<a id="schemalongvalue"></a>
<a id="schema_LongValue"></a>
<a id="tocSlongvalue"></a>
<a id="tocslongvalue"></a>

```json
0
```

<h2 id="tocS_FilterCondition">FilterCondition</h2>
<!-- backwards compatibility -->
<a id="schemafiltercondition"></a>
<a id="schema_FilterCondition"></a>
<a id="tocSfiltercondition"></a>
<a id="tocsfiltercondition"></a>

```json
{
  "EqualsValue": {},
  "GreaterThan": {},
  "LessThan": {}
}
```

Contains information about the condition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EqualsValue|object|false|none|none|
|GreaterThan|object|false|none|none|
|LessThan|object|false|none|none|

<h2 id="tocS_FilterCriterion">FilterCriterion</h2>
<!-- backwards compatibility -->
<a id="schemafiltercriterion"></a>
<a id="schema_FilterCriterion"></a>
<a id="tocSfiltercriterion"></a>
<a id="tocsfiltercriterion"></a>

```json
{
  "CriterionKey": {},
  "FilterCondition": {
    "EqualsValue": {},
    "GreaterThan": {},
    "LessThan": {}
  }
}
```

Represents a condition that when matched will be added to the response of the operation. Irrespective of using any filter criteria, an administrator account can view the scan entries for all of its member accounts. However, each member account can view the scan entries only for their own account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CriterionKey|object|false|none|none|
|FilterCondition|object|false|none|none|

<h2 id="tocS_FilterNames">FilterNames</h2>
<!-- backwards compatibility -->
<a id="schemafilternames"></a>
<a id="schema_FilterNames"></a>
<a id="tocSfilternames"></a>
<a id="tocsfilternames"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Resource">Resource</h2>
<!-- backwards compatibility -->
<a id="schemaresource"></a>
<a id="schema_Resource"></a>
<a id="tocSresource"></a>
<a id="tocsresource"></a>

```json
{
  "AccessKeyDetails": {
    "AccessKeyId": {},
    "PrincipalId": {},
    "UserName": {},
    "UserType": {}
  },
  "S3BucketDetails": {},
  "InstanceDetails": {
    "AvailabilityZone": {},
    "IamInstanceProfile": {
      "Arn": {},
      "Id": {}
    },
    "ImageDescription": {},
    "ImageId": {},
    "InstanceId": {},
    "InstanceState": {},
    "InstanceType": {},
    "OutpostArn": {},
    "LaunchTime": {},
    "NetworkInterfaces": {},
    "Platform": {},
    "ProductCodes": {},
    "Tags": {}
  },
  "EksClusterDetails": {
    "Name": {},
    "Arn": {},
    "VpcId": {},
    "Status": {},
    "Tags": {},
    "CreatedAt": {}
  },
  "KubernetesDetails": {
    "KubernetesUserDetails": {
      "Username": {},
      "Uid": {},
      "Groups": {}
    },
    "KubernetesWorkloadDetails": {
      "Name": {},
      "Type": {},
      "Uid": {},
      "Namespace": {},
      "HostNetwork": {},
      "Containers": {},
      "Volumes": {}
    }
  },
  "ResourceType": {},
  "EbsVolumeDetails": {
    "ScannedVolumeDetails": {},
    "SkippedVolumeDetails": {}
  },
  "EcsClusterDetails": {
    "Name": {},
    "Arn": {},
    "Status": {},
    "ActiveServicesCount": {},
    "RegisteredContainerInstancesCount": {},
    "RunningTasksCount": {},
    "Tags": {},
    "TaskDetails": {
      "Arn": {},
      "DefinitionArn": {},
      "Version": {},
      "TaskCreatedAt": {},
      "StartedAt": {},
      "StartedBy": {},
      "Tags": {},
      "Volumes": {},
      "Containers": {},
      "Group": {}
    }
  },
  "ContainerDetails": {
    "ContainerRuntime": {},
    "Id": {},
    "Name": {},
    "Image": {},
    "ImagePrefix": {},
    "VolumeMounts": {},
    "SecurityContext": {
      "Privileged": {}
    }
  },
  "RdsDbInstanceDetails": {
    "DbInstanceIdentifier": {},
    "Engine": {},
    "EngineVersion": {},
    "DbClusterIdentifier": {},
    "DbInstanceArn": {},
    "Tags": {}
  },
  "RdsDbUserDetails": {
    "User": {},
    "Application": {},
    "Database": {},
    "Ssl": {},
    "AuthMethod": {}
  },
  "LambdaDetails": {
    "FunctionArn": {},
    "FunctionName": {},
    "Description": {},
    "LastModifiedAt": {},
    "RevisionId": {},
    "FunctionVersion": {},
    "Role": {},
    "VpcConfig": {
      "SubnetIds": {},
      "VpcId": {},
      "SecurityGroups": {}
    },
    "Tags": {}
  }
}
```

Contains information about the Amazon Web Services resource associated with the activity that prompted GuardDuty to generate a finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessKeyDetails|object|false|none|none|
|S3BucketDetails|object|false|none|none|
|InstanceDetails|object|false|none|none|
|EksClusterDetails|object|false|none|none|
|KubernetesDetails|object|false|none|none|
|ResourceType|object|false|none|none|
|EbsVolumeDetails|object|false|none|none|
|EcsClusterDetails|object|false|none|none|
|ContainerDetails|object|false|none|none|
|RdsDbInstanceDetails|object|false|none|none|
|RdsDbUserDetails|object|false|none|none|
|LambdaDetails|object|false|none|none|

<h2 id="tocS_Service">Service</h2>
<!-- backwards compatibility -->
<a id="schemaservice"></a>
<a id="schema_Service"></a>
<a id="tocSservice"></a>
<a id="tocsservice"></a>

```json
{
  "Action": {
    "ActionType": {},
    "AwsApiCallAction": {
      "Api": {},
      "CallerType": {},
      "DomainDetails": {
        "Domain": {}
      },
      "ErrorCode": {},
      "UserAgent": {},
      "RemoteIpDetails": {
        "City": {
          "CityName": {}
        },
        "Country": {
          "CountryCode": {},
          "CountryName": {}
        },
        "GeoLocation": {
          "Lat": {},
          "Lon": {}
        },
        "IpAddressV4": {},
        "Organization": {
          "Asn": {},
          "AsnOrg": {},
          "Isp": {},
          "Org": {}
        }
      },
      "ServiceName": {},
      "RemoteAccountDetails": {
        "AccountId": {},
        "Affiliated": {}
      },
      "AffectedResources": {
        "property1": "string",
        "property2": "string"
      }
    },
    "DnsRequestAction": {
      "Domain": {},
      "Protocol": {},
      "Blocked": {}
    },
    "NetworkConnectionAction": {
      "Blocked": {},
      "ConnectionDirection": {},
      "LocalPortDetails": {
        "Port": {},
        "PortName": {}
      },
      "Protocol": {},
      "LocalIpDetails": {
        "IpAddressV4": {}
      },
      "RemoteIpDetails": {
        "City": {
          "CityName": {}
        },
        "Country": {
          "CountryCode": {},
          "CountryName": {}
        },
        "GeoLocation": {
          "Lat": {},
          "Lon": {}
        },
        "IpAddressV4": {},
        "Organization": {
          "Asn": {},
          "AsnOrg": {},
          "Isp": {},
          "Org": {}
        }
      },
      "RemotePortDetails": {
        "Port": {},
        "PortName": {}
      }
    },
    "PortProbeAction": {
      "Blocked": {},
      "PortProbeDetails": {}
    },
    "KubernetesApiCallAction": {
      "RequestUri": {},
      "Verb": {},
      "SourceIps": {},
      "UserAgent": {},
      "RemoteIpDetails": {
        "City": {
          "CityName": {}
        },
        "Country": {
          "CountryCode": {},
          "CountryName": {}
        },
        "GeoLocation": {
          "Lat": {},
          "Lon": {}
        },
        "IpAddressV4": {},
        "Organization": {
          "Asn": {},
          "AsnOrg": {},
          "Isp": {},
          "Org": {}
        }
      },
      "StatusCode": {},
      "Parameters": {}
    },
    "RdsLoginAttemptAction": {
      "RemoteIpDetails": {
        "City": {
          "CityName": {}
        },
        "Country": {
          "CountryCode": {},
          "CountryName": {}
        },
        "GeoLocation": {
          "Lat": {},
          "Lon": {}
        },
        "IpAddressV4": {},
        "Organization": {
          "Asn": {},
          "AsnOrg": {},
          "Isp": {},
          "Org": {}
        }
      },
      "LoginAttributes": {}
    }
  },
  "Evidence": {
    "ThreatIntelligenceDetails": {}
  },
  "Archived": {},
  "Count": {},
  "DetectorId": {},
  "EventFirstSeen": {},
  "EventLastSeen": {},
  "ResourceRole": {},
  "ServiceName": {},
  "UserFeedback": {},
  "AdditionalInfo": {
    "Value": {},
    "Type": {}
  },
  "FeatureName": {},
  "EbsVolumeScanDetails": {
    "ScanId": {},
    "ScanStartedAt": {},
    "ScanCompletedAt": {},
    "TriggerFindingId": {},
    "Sources": {},
    "ScanDetections": {
      "ScannedItemCount": {
        "TotalGb": {},
        "Files": {},
        "Volumes": {}
      },
      "ThreatsDetectedItemCount": {
        "Files": {}
      },
      "HighestSeverityThreatDetails": {
        "Severity": {},
        "ThreatName": {},
        "Count": {}
      },
      "ThreatDetectedByName": {
        "ItemCount": {},
        "UniqueThreatNameCount": {},
        "Shortened": {},
        "ThreatNames": {}
      }
    }
  },
  "RuntimeDetails": {
    "Process": {
      "Name": {},
      "ExecutablePath": {},
      "ExecutableSha256": {},
      "NamespacePid": {},
      "Pwd": {},
      "Pid": {},
      "StartTime": {},
      "Uuid": {},
      "ParentUuid": {},
      "User": {},
      "UserId": {},
      "Euid": {},
      "Lineage": {}
    },
    "Context": {
      "ModifyingProcess": {
        "Name": {},
        "ExecutablePath": {},
        "ExecutableSha256": {},
        "NamespacePid": {},
        "Pwd": {},
        "Pid": {},
        "StartTime": {},
        "Uuid": {},
        "ParentUuid": {},
        "User": {},
        "UserId": {},
        "Euid": {},
        "Lineage": {}
      },
      "ModifiedAt": {},
      "ScriptPath": {},
      "LibraryPath": {},
      "LdPreloadValue": {},
      "SocketPath": {},
      "RuncBinaryPath": {},
      "ReleaseAgentPath": {},
      "MountSource": {},
      "MountTarget": {},
      "FileSystemType": {},
      "Flags": {},
      "ModuleName": {},
      "ModuleFilePath": {},
      "ModuleSha256": {},
      "ShellHistoryFilePath": {},
      "TargetProcess": {
        "Name": {},
        "ExecutablePath": {},
        "ExecutableSha256": {},
        "NamespacePid": {},
        "Pwd": {},
        "Pid": {},
        "StartTime": {},
        "Uuid": {},
        "ParentUuid": {},
        "User": {},
        "UserId": {},
        "Euid": {},
        "Lineage": {}
      },
      "AddressFamily": {},
      "IanaProtocolNumber": {},
      "MemoryRegions": {}
    }
  }
}
```

Contains additional information about the generated finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Action|object|false|none|none|
|Evidence|object|false|none|none|
|Archived|object|false|none|none|
|Count|object|false|none|none|
|DetectorId|object|false|none|none|
|EventFirstSeen|object|false|none|none|
|EventLastSeen|object|false|none|none|
|ResourceRole|object|false|none|none|
|ServiceName|object|false|none|none|
|UserFeedback|object|false|none|none|
|AdditionalInfo|object|false|none|none|
|FeatureName|object|false|none|none|
|EbsVolumeScanDetails|object|false|none|none|
|RuntimeDetails|object|false|none|none|

<h2 id="tocS_Finding">Finding</h2>
<!-- backwards compatibility -->
<a id="schemafinding"></a>
<a id="schema_Finding"></a>
<a id="tocSfinding"></a>
<a id="tocsfinding"></a>

```json
{
  "AccountId": {},
  "Arn": {},
  "Confidence": {},
  "CreatedAt": {},
  "Description": {},
  "Id": {},
  "Partition": {},
  "Region": {},
  "Resource": {
    "AccessKeyDetails": {
      "AccessKeyId": {},
      "PrincipalId": {},
      "UserName": {},
      "UserType": {}
    },
    "S3BucketDetails": {},
    "InstanceDetails": {
      "AvailabilityZone": {},
      "IamInstanceProfile": {
        "Arn": {},
        "Id": {}
      },
      "ImageDescription": {},
      "ImageId": {},
      "InstanceId": {},
      "InstanceState": {},
      "InstanceType": {},
      "OutpostArn": {},
      "LaunchTime": {},
      "NetworkInterfaces": {},
      "Platform": {},
      "ProductCodes": {},
      "Tags": {}
    },
    "EksClusterDetails": {
      "Name": {},
      "Arn": {},
      "VpcId": {},
      "Status": {},
      "Tags": {},
      "CreatedAt": {}
    },
    "KubernetesDetails": {
      "KubernetesUserDetails": {
        "Username": {},
        "Uid": {},
        "Groups": {}
      },
      "KubernetesWorkloadDetails": {
        "Name": {},
        "Type": {},
        "Uid": {},
        "Namespace": {},
        "HostNetwork": {},
        "Containers": {},
        "Volumes": {}
      }
    },
    "ResourceType": {},
    "EbsVolumeDetails": {
      "ScannedVolumeDetails": {},
      "SkippedVolumeDetails": {}
    },
    "EcsClusterDetails": {
      "Name": {},
      "Arn": {},
      "Status": {},
      "ActiveServicesCount": {},
      "RegisteredContainerInstancesCount": {},
      "RunningTasksCount": {},
      "Tags": {},
      "TaskDetails": {
        "Arn": {},
        "DefinitionArn": {},
        "Version": {},
        "TaskCreatedAt": {},
        "StartedAt": {},
        "StartedBy": {},
        "Tags": {},
        "Volumes": {},
        "Containers": {},
        "Group": {}
      }
    },
    "ContainerDetails": {
      "ContainerRuntime": {},
      "Id": {},
      "Name": {},
      "Image": {},
      "ImagePrefix": {},
      "VolumeMounts": {},
      "SecurityContext": {
        "Privileged": {}
      }
    },
    "RdsDbInstanceDetails": {
      "DbInstanceIdentifier": {},
      "Engine": {},
      "EngineVersion": {},
      "DbClusterIdentifier": {},
      "DbInstanceArn": {},
      "Tags": {}
    },
    "RdsDbUserDetails": {
      "User": {},
      "Application": {},
      "Database": {},
      "Ssl": {},
      "AuthMethod": {}
    },
    "LambdaDetails": {
      "FunctionArn": {},
      "FunctionName": {},
      "Description": {},
      "LastModifiedAt": {},
      "RevisionId": {},
      "FunctionVersion": {},
      "Role": {},
      "VpcConfig": {
        "SubnetIds": {},
        "VpcId": {},
        "SecurityGroups": {}
      },
      "Tags": {}
    }
  },
  "SchemaVersion": {},
  "Service": {
    "Action": {
      "ActionType": {},
      "AwsApiCallAction": {
        "Api": {},
        "CallerType": {},
        "DomainDetails": {
          "Domain": {}
        },
        "ErrorCode": {},
        "UserAgent": {},
        "RemoteIpDetails": {
          "City": {
            "CityName": {}
          },
          "Country": {
            "CountryCode": {},
            "CountryName": {}
          },
          "GeoLocation": {
            "Lat": {},
            "Lon": {}
          },
          "IpAddressV4": {},
          "Organization": {
            "Asn": {},
            "AsnOrg": {},
            "Isp": {},
            "Org": {}
          }
        },
        "ServiceName": {},
        "RemoteAccountDetails": {
          "AccountId": {},
          "Affiliated": {}
        },
        "AffectedResources": {
          "property1": "string",
          "property2": "string"
        }
      },
      "DnsRequestAction": {
        "Domain": {},
        "Protocol": {},
        "Blocked": {}
      },
      "NetworkConnectionAction": {
        "Blocked": {},
        "ConnectionDirection": {},
        "LocalPortDetails": {
          "Port": {},
          "PortName": {}
        },
        "Protocol": {},
        "LocalIpDetails": {
          "IpAddressV4": {}
        },
        "RemoteIpDetails": {
          "City": {
            "CityName": {}
          },
          "Country": {
            "CountryCode": {},
            "CountryName": {}
          },
          "GeoLocation": {
            "Lat": {},
            "Lon": {}
          },
          "IpAddressV4": {},
          "Organization": {
            "Asn": {},
            "AsnOrg": {},
            "Isp": {},
            "Org": {}
          }
        },
        "RemotePortDetails": {
          "Port": {},
          "PortName": {}
        }
      },
      "PortProbeAction": {
        "Blocked": {},
        "PortProbeDetails": {}
      },
      "KubernetesApiCallAction": {
        "RequestUri": {},
        "Verb": {},
        "SourceIps": {},
        "UserAgent": {},
        "RemoteIpDetails": {
          "City": {
            "CityName": {}
          },
          "Country": {
            "CountryCode": {},
            "CountryName": {}
          },
          "GeoLocation": {
            "Lat": {},
            "Lon": {}
          },
          "IpAddressV4": {},
          "Organization": {
            "Asn": {},
            "AsnOrg": {},
            "Isp": {},
            "Org": {}
          }
        },
        "StatusCode": {},
        "Parameters": {}
      },
      "RdsLoginAttemptAction": {
        "RemoteIpDetails": {
          "City": {
            "CityName": {}
          },
          "Country": {
            "CountryCode": {},
            "CountryName": {}
          },
          "GeoLocation": {
            "Lat": {},
            "Lon": {}
          },
          "IpAddressV4": {},
          "Organization": {
            "Asn": {},
            "AsnOrg": {},
            "Isp": {},
            "Org": {}
          }
        },
        "LoginAttributes": {}
      }
    },
    "Evidence": {
      "ThreatIntelligenceDetails": {}
    },
    "Archived": {},
    "Count": {},
    "DetectorId": {},
    "EventFirstSeen": {},
    "EventLastSeen": {},
    "ResourceRole": {},
    "ServiceName": {},
    "UserFeedback": {},
    "AdditionalInfo": {
      "Value": {},
      "Type": {}
    },
    "FeatureName": {},
    "EbsVolumeScanDetails": {
      "ScanId": {},
      "ScanStartedAt": {},
      "ScanCompletedAt": {},
      "TriggerFindingId": {},
      "Sources": {},
      "ScanDetections": {
        "ScannedItemCount": {
          "TotalGb": {},
          "Files": {},
          "Volumes": {}
        },
        "ThreatsDetectedItemCount": {
          "Files": {}
        },
        "HighestSeverityThreatDetails": {
          "Severity": {},
          "ThreatName": {},
          "Count": {}
        },
        "ThreatDetectedByName": {
          "ItemCount": {},
          "UniqueThreatNameCount": {},
          "Shortened": {},
          "ThreatNames": {}
        }
      }
    },
    "RuntimeDetails": {
      "Process": {
        "Name": {},
        "ExecutablePath": {},
        "ExecutableSha256": {},
        "NamespacePid": {},
        "Pwd": {},
        "Pid": {},
        "StartTime": {},
        "Uuid": {},
        "ParentUuid": {},
        "User": {},
        "UserId": {},
        "Euid": {},
        "Lineage": {}
      },
      "Context": {
        "ModifyingProcess": {
          "Name": {},
          "ExecutablePath": {},
          "ExecutableSha256": {},
          "NamespacePid": {},
          "Pwd": {},
          "Pid": {},
          "StartTime": {},
          "Uuid": {},
          "ParentUuid": {},
          "User": {},
          "UserId": {},
          "Euid": {},
          "Lineage": {}
        },
        "ModifiedAt": {},
        "ScriptPath": {},
        "LibraryPath": {},
        "LdPreloadValue": {},
        "SocketPath": {},
        "RuncBinaryPath": {},
        "ReleaseAgentPath": {},
        "MountSource": {},
        "MountTarget": {},
        "FileSystemType": {},
        "Flags": {},
        "ModuleName": {},
        "ModuleFilePath": {},
        "ModuleSha256": {},
        "ShellHistoryFilePath": {},
        "TargetProcess": {
          "Name": {},
          "ExecutablePath": {},
          "ExecutableSha256": {},
          "NamespacePid": {},
          "Pwd": {},
          "Pid": {},
          "StartTime": {},
          "Uuid": {},
          "ParentUuid": {},
          "User": {},
          "UserId": {},
          "Euid": {},
          "Lineage": {}
        },
        "AddressFamily": {},
        "IanaProtocolNumber": {},
        "MemoryRegions": {}
      }
    }
  },
  "Severity": {},
  "Title": {},
  "Type": {},
  "UpdatedAt": {}
}
```

Contains information about the finding, which is generated when abnormal or suspicious activity is detected.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|true|none|none|
|Arn|object|true|none|none|
|Confidence|object|false|none|none|
|CreatedAt|object|true|none|none|
|Description|object|false|none|none|
|Id|object|true|none|none|
|Partition|object|false|none|none|
|Region|object|true|none|none|
|Resource|object|true|none|none|
|SchemaVersion|object|true|none|none|
|Service|object|false|none|none|
|Severity|object|true|none|none|
|Title|object|false|none|none|
|Type|object|true|none|none|
|UpdatedAt|object|true|none|none|

<h2 id="tocS_FindingStatisticTypes">FindingStatisticTypes</h2>
<!-- backwards compatibility -->
<a id="schemafindingstatistictypes"></a>
<a id="schema_FindingStatisticTypes"></a>
<a id="tocSfindingstatistictypes"></a>
<a id="tocsfindingstatistictypes"></a>

```json
[
  "COUNT_BY_SEVERITY"
]
```

<h2 id="tocS_FindingStatistics">FindingStatistics</h2>
<!-- backwards compatibility -->
<a id="schemafindingstatistics"></a>
<a id="schema_FindingStatistics"></a>
<a id="tocSfindingstatistics"></a>
<a id="tocsfindingstatistics"></a>

```json
{
  "CountBySeverity": {
    "property1": 0,
    "property2": 0
  }
}
```

Contains information about finding statistics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CountBySeverity|object|false|none|none|

<h2 id="tocS_Findings">Findings</h2>
<!-- backwards compatibility -->
<a id="schemafindings"></a>
<a id="schema_Findings"></a>
<a id="tocSfindings"></a>
<a id="tocsfindings"></a>

```json
[
  {
    "AccountId": {},
    "Arn": {},
    "Confidence": {},
    "CreatedAt": {},
    "Description": {},
    "Id": {},
    "Partition": {},
    "Region": {},
    "Resource": {
      "AccessKeyDetails": {
        "AccessKeyId": {},
        "PrincipalId": {},
        "UserName": {},
        "UserType": {}
      },
      "S3BucketDetails": {},
      "InstanceDetails": {
        "AvailabilityZone": {},
        "IamInstanceProfile": {
          "Arn": {},
          "Id": {}
        },
        "ImageDescription": {},
        "ImageId": {},
        "InstanceId": {},
        "InstanceState": {},
        "InstanceType": {},
        "OutpostArn": {},
        "LaunchTime": {},
        "NetworkInterfaces": {},
        "Platform": {},
        "ProductCodes": {},
        "Tags": {}
      },
      "EksClusterDetails": {
        "Name": {},
        "Arn": {},
        "VpcId": {},
        "Status": {},
        "Tags": {},
        "CreatedAt": {}
      },
      "KubernetesDetails": {
        "KubernetesUserDetails": {
          "Username": {},
          "Uid": {},
          "Groups": {}
        },
        "KubernetesWorkloadDetails": {
          "Name": {},
          "Type": {},
          "Uid": {},
          "Namespace": {},
          "HostNetwork": {},
          "Containers": {},
          "Volumes": {}
        }
      },
      "ResourceType": {},
      "EbsVolumeDetails": {
        "ScannedVolumeDetails": {},
        "SkippedVolumeDetails": {}
      },
      "EcsClusterDetails": {
        "Name": {},
        "Arn": {},
        "Status": {},
        "ActiveServicesCount": {},
        "RegisteredContainerInstancesCount": {},
        "RunningTasksCount": {},
        "Tags": {},
        "TaskDetails": {
          "Arn": {},
          "DefinitionArn": {},
          "Version": {},
          "TaskCreatedAt": {},
          "StartedAt": {},
          "StartedBy": {},
          "Tags": {},
          "Volumes": {},
          "Containers": {},
          "Group": {}
        }
      },
      "ContainerDetails": {
        "ContainerRuntime": {},
        "Id": {},
        "Name": {},
        "Image": {},
        "ImagePrefix": {},
        "VolumeMounts": {},
        "SecurityContext": {
          "Privileged": {}
        }
      },
      "RdsDbInstanceDetails": {
        "DbInstanceIdentifier": {},
        "Engine": {},
        "EngineVersion": {},
        "DbClusterIdentifier": {},
        "DbInstanceArn": {},
        "Tags": {}
      },
      "RdsDbUserDetails": {
        "User": {},
        "Application": {},
        "Database": {},
        "Ssl": {},
        "AuthMethod": {}
      },
      "LambdaDetails": {
        "FunctionArn": {},
        "FunctionName": {},
        "Description": {},
        "LastModifiedAt": {},
        "RevisionId": {},
        "FunctionVersion": {},
        "Role": {},
        "VpcConfig": {
          "SubnetIds": {},
          "VpcId": {},
          "SecurityGroups": {}
        },
        "Tags": {}
      }
    },
    "SchemaVersion": {},
    "Service": {
      "Action": {
        "ActionType": {},
        "AwsApiCallAction": {
          "Api": {},
          "CallerType": {},
          "DomainDetails": {
            "Domain": {}
          },
          "ErrorCode": {},
          "UserAgent": {},
          "RemoteIpDetails": {
            "City": {
              "CityName": {}
            },
            "Country": {
              "CountryCode": {},
              "CountryName": {}
            },
            "GeoLocation": {
              "Lat": {},
              "Lon": {}
            },
            "IpAddressV4": {},
            "Organization": {
              "Asn": {},
              "AsnOrg": {},
              "Isp": {},
              "Org": {}
            }
          },
          "ServiceName": {},
          "RemoteAccountDetails": {
            "AccountId": {},
            "Affiliated": {}
          },
          "AffectedResources": {
            "property1": "string",
            "property2": "string"
          }
        },
        "DnsRequestAction": {
          "Domain": {},
          "Protocol": {},
          "Blocked": {}
        },
        "NetworkConnectionAction": {
          "Blocked": {},
          "ConnectionDirection": {},
          "LocalPortDetails": {
            "Port": {},
            "PortName": {}
          },
          "Protocol": {},
          "LocalIpDetails": {
            "IpAddressV4": {}
          },
          "RemoteIpDetails": {
            "City": {
              "CityName": {}
            },
            "Country": {
              "CountryCode": {},
              "CountryName": {}
            },
            "GeoLocation": {
              "Lat": {},
              "Lon": {}
            },
            "IpAddressV4": {},
            "Organization": {
              "Asn": {},
              "AsnOrg": {},
              "Isp": {},
              "Org": {}
            }
          },
          "RemotePortDetails": {
            "Port": {},
            "PortName": {}
          }
        },
        "PortProbeAction": {
          "Blocked": {},
          "PortProbeDetails": {}
        },
        "KubernetesApiCallAction": {
          "RequestUri": {},
          "Verb": {},
          "SourceIps": {},
          "UserAgent": {},
          "RemoteIpDetails": {
            "City": {
              "CityName": {}
            },
            "Country": {
              "CountryCode": {},
              "CountryName": {}
            },
            "GeoLocation": {
              "Lat": {},
              "Lon": {}
            },
            "IpAddressV4": {},
            "Organization": {
              "Asn": {},
              "AsnOrg": {},
              "Isp": {},
              "Org": {}
            }
          },
          "StatusCode": {},
          "Parameters": {}
        },
        "RdsLoginAttemptAction": {
          "RemoteIpDetails": {
            "City": {
              "CityName": {}
            },
            "Country": {
              "CountryCode": {},
              "CountryName": {}
            },
            "GeoLocation": {
              "Lat": {},
              "Lon": {}
            },
            "IpAddressV4": {},
            "Organization": {
              "Asn": {},
              "AsnOrg": {},
              "Isp": {},
              "Org": {}
            }
          },
          "LoginAttributes": {}
        }
      },
      "Evidence": {
        "ThreatIntelligenceDetails": {}
      },
      "Archived": {},
      "Count": {},
      "DetectorId": {},
      "EventFirstSeen": {},
      "EventLastSeen": {},
      "ResourceRole": {},
      "ServiceName": {},
      "UserFeedback": {},
      "AdditionalInfo": {
        "Value": {},
        "Type": {}
      },
      "FeatureName": {},
      "EbsVolumeScanDetails": {
        "ScanId": {},
        "ScanStartedAt": {},
        "ScanCompletedAt": {},
        "TriggerFindingId": {},
        "Sources": {},
        "ScanDetections": {
          "ScannedItemCount": {
            "TotalGb": {},
            "Files": {},
            "Volumes": {}
          },
          "ThreatsDetectedItemCount": {
            "Files": {}
          },
          "HighestSeverityThreatDetails": {
            "Severity": {},
            "ThreatName": {},
            "Count": {}
          },
          "ThreatDetectedByName": {
            "ItemCount": {},
            "UniqueThreatNameCount": {},
            "Shortened": {},
            "ThreatNames": {}
          }
        }
      },
      "RuntimeDetails": {
        "Process": {
          "Name": {},
          "ExecutablePath": {},
          "ExecutableSha256": {},
          "NamespacePid": {},
          "Pwd": {},
          "Pid": {},
          "StartTime": {},
          "Uuid": {},
          "ParentUuid": {},
          "User": {},
          "UserId": {},
          "Euid": {},
          "Lineage": {}
        },
        "Context": {
          "ModifyingProcess": {
            "Name": {},
            "ExecutablePath": {},
            "ExecutableSha256": {},
            "NamespacePid": {},
            "Pwd": {},
            "Pid": {},
            "StartTime": {},
            "Uuid": {},
            "ParentUuid": {},
            "User": {},
            "UserId": {},
            "Euid": {},
            "Lineage": {}
          },
          "ModifiedAt": {},
          "ScriptPath": {},
          "LibraryPath": {},
          "LdPreloadValue": {},
          "SocketPath": {},
          "RuncBinaryPath": {},
          "ReleaseAgentPath": {},
          "MountSource": {},
          "MountTarget": {},
          "FileSystemType": {},
          "Flags": {},
          "ModuleName": {},
          "ModuleFilePath": {},
          "ModuleSha256": {},
          "ShellHistoryFilePath": {},
          "TargetProcess": {
            "Name": {},
            "ExecutablePath": {},
            "ExecutableSha256": {},
            "NamespacePid": {},
            "Pwd": {},
            "Pid": {},
            "StartTime": {},
            "Uuid": {},
            "ParentUuid": {},
            "User": {},
            "UserId": {},
            "Euid": {},
            "Lineage": {}
          },
          "AddressFamily": {},
          "IanaProtocolNumber": {},
          "MemoryRegions": {}
        }
      }
    },
    "Severity": {},
    "Title": {},
    "Type": {},
    "UpdatedAt": {}
  }
]
```

<h2 id="tocS_FlagsList">FlagsList</h2>
<!-- backwards compatibility -->
<a id="schemaflagslist"></a>
<a id="schema_FlagsList"></a>
<a id="tocSflagslist"></a>
<a id="tocsflagslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_FreeTrialFeatureResult">FreeTrialFeatureResult</h2>
<!-- backwards compatibility -->
<a id="schemafreetrialfeatureresult"></a>
<a id="schema_FreeTrialFeatureResult"></a>
<a id="tocSfreetrialfeatureresult"></a>
<a id="tocsfreetrialfeatureresult"></a>

```json
"FLOW_LOGS"
```

<h2 id="tocS_FreeTrialFeatureConfigurationResult">FreeTrialFeatureConfigurationResult</h2>
<!-- backwards compatibility -->
<a id="schemafreetrialfeatureconfigurationresult"></a>
<a id="schema_FreeTrialFeatureConfigurationResult"></a>
<a id="tocSfreetrialfeatureconfigurationresult"></a>
<a id="tocsfreetrialfeatureconfigurationresult"></a>

```json
{
  "Name": {},
  "FreeTrialDaysRemaining": {}
}
```

Contains information about the free trial period for a feature.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|FreeTrialDaysRemaining|object|false|none|none|

<h2 id="tocS_GeoLocation">GeoLocation</h2>
<!-- backwards compatibility -->
<a id="schemageolocation"></a>
<a id="schema_GeoLocation"></a>
<a id="tocSgeolocation"></a>
<a id="tocsgeolocation"></a>

```json
{
  "Lat": {},
  "Lon": {}
}
```

Contains information about the location of the remote IP address.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Lat|object|false|none|none|
|Lon|object|false|none|none|

<h2 id="tocS_GetAdministratorAccountRequest">GetAdministratorAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetadministratoraccountrequest"></a>
<a id="schema_GetAdministratorAccountRequest"></a>
<a id="tocSgetadministratoraccountrequest"></a>
<a id="tocsgetadministratoraccountrequest"></a>

```json
{}
```

<h2 id="tocS_GetCoverageStatisticsRequest">GetCoverageStatisticsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcoveragestatisticsrequest"></a>
<a id="schema_GetCoverageStatisticsRequest"></a>
<a id="tocSgetcoveragestatisticsrequest"></a>
<a id="tocsgetcoveragestatisticsrequest"></a>

```json
{
  "FilterCriteria": {
    "FilterCriterion": {}
  },
  "StatisticsType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FilterCriteria|object|false|none|none|
|StatisticsType|object|true|none|none|

<h2 id="tocS_GetDetectorRequest">GetDetectorRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdetectorrequest"></a>
<a id="schema_GetDetectorRequest"></a>
<a id="tocSgetdetectorrequest"></a>
<a id="tocsgetdetectorrequest"></a>

```json
{}
```

<h2 id="tocS_GetFilterRequest">GetFilterRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetfilterrequest"></a>
<a id="schema_GetFilterRequest"></a>
<a id="tocSgetfilterrequest"></a>
<a id="tocsgetfilterrequest"></a>

```json
{}
```

<h2 id="tocS_GetFindingsRequest">GetFindingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetfindingsrequest"></a>
<a id="schema_GetFindingsRequest"></a>
<a id="tocSgetfindingsrequest"></a>
<a id="tocsgetfindingsrequest"></a>

```json
{
  "FindingIds": {},
  "SortCriteria": {
    "AttributeName": {},
    "OrderBy": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FindingIds|object|true|none|none|
|SortCriteria|object|false|none|none|

<h2 id="tocS_GetFindingsStatisticsRequest">GetFindingsStatisticsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetfindingsstatisticsrequest"></a>
<a id="schema_GetFindingsStatisticsRequest"></a>
<a id="tocSgetfindingsstatisticsrequest"></a>
<a id="tocsgetfindingsstatisticsrequest"></a>

```json
{
  "FindingStatisticTypes": {},
  "FindingCriteria": {
    "Criterion": {
      "property1": {
        "Eq": {},
        "Neq": {},
        "Gt": {},
        "Gte": {},
        "Lt": {},
        "Lte": {},
        "Equals": {},
        "NotEquals": {},
        "GreaterThan": {},
        "GreaterThanOrEqual": {},
        "LessThan": {},
        "LessThanOrEqual": {}
      },
      "property2": {
        "Eq": {},
        "Neq": {},
        "Gt": {},
        "Gte": {},
        "Lt": {},
        "Lte": {},
        "Equals": {},
        "NotEquals": {},
        "GreaterThan": {},
        "GreaterThanOrEqual": {},
        "LessThan": {},
        "LessThanOrEqual": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FindingStatisticTypes|object|true|none|none|
|FindingCriteria|object|false|none|none|

<h2 id="tocS_GetIPSetRequest">GetIPSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetipsetrequest"></a>
<a id="schema_GetIPSetRequest"></a>
<a id="tocSgetipsetrequest"></a>
<a id="tocsgetipsetrequest"></a>

```json
{}
```

<h2 id="tocS_IpSetStatus">IpSetStatus</h2>
<!-- backwards compatibility -->
<a id="schemaipsetstatus"></a>
<a id="schema_IpSetStatus"></a>
<a id="tocSipsetstatus"></a>
<a id="tocsipsetstatus"></a>

```json
"INACTIVE"
```

<h2 id="tocS_GetInvitationsCountRequest">GetInvitationsCountRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetinvitationscountrequest"></a>
<a id="schema_GetInvitationsCountRequest"></a>
<a id="tocSgetinvitationscountrequest"></a>
<a id="tocsgetinvitationscountrequest"></a>

```json
{}
```

<h2 id="tocS_GetMalwareScanSettingsRequest">GetMalwareScanSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetmalwarescansettingsrequest"></a>
<a id="schema_GetMalwareScanSettingsRequest"></a>
<a id="tocSgetmalwarescansettingsrequest"></a>
<a id="tocsgetmalwarescansettingsrequest"></a>

```json
{}
```

<h2 id="tocS_ScanResourceCriteria">ScanResourceCriteria</h2>
<!-- backwards compatibility -->
<a id="schemascanresourcecriteria"></a>
<a id="schema_ScanResourceCriteria"></a>
<a id="tocSscanresourcecriteria"></a>
<a id="tocsscanresourcecriteria"></a>

```json
{
  "Include": {
    "property1": {
      "MapEquals": {}
    },
    "property2": {
      "MapEquals": {}
    }
  },
  "Exclude": {
    "property1": {
      "MapEquals": {}
    },
    "property2": {
      "MapEquals": {}
    }
  }
}
```

Contains information about criteria used to filter resources before triggering malware scan.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Include|object|false|none|none|
|Exclude|object|false|none|none|

<h2 id="tocS_GetMasterAccountRequest">GetMasterAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetmasteraccountrequest"></a>
<a id="schema_GetMasterAccountRequest"></a>
<a id="tocSgetmasteraccountrequest"></a>
<a id="tocsgetmasteraccountrequest"></a>

```json
{}
```

This input is deprecated, use GetAdministratorAccountRequest instead

<h2 id="tocS_Master">Master</h2>
<!-- backwards compatibility -->
<a id="schemamaster"></a>
<a id="schema_Master"></a>
<a id="tocSmaster"></a>
<a id="tocsmaster"></a>

```json
{
  "AccountId": {},
  "InvitationId": {},
  "RelationshipStatus": {},
  "InvitedAt": {}
}
```

Contains information about the administrator account and invitation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|false|none|none|
|InvitationId|object|false|none|none|
|RelationshipStatus|object|false|none|none|
|InvitedAt|object|false|none|none|

<h2 id="tocS_GetMemberDetectorsRequest">GetMemberDetectorsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetmemberdetectorsrequest"></a>
<a id="schema_GetMemberDetectorsRequest"></a>
<a id="tocSgetmemberdetectorsrequest"></a>
<a id="tocsgetmemberdetectorsrequest"></a>

```json
{
  "AccountIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountIds|object|true|none|none|

<h2 id="tocS_MemberDataSourceConfigurations">MemberDataSourceConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemamemberdatasourceconfigurations"></a>
<a id="schema_MemberDataSourceConfigurations"></a>
<a id="tocSmemberdatasourceconfigurations"></a>
<a id="tocsmemberdatasourceconfigurations"></a>

```json
[
  {
    "AccountId": {},
    "DataSources": {
      "CloudTrail": {
        "Status": {}
      },
      "DNSLogs": {
        "Status": {}
      },
      "FlowLogs": {
        "Status": {}
      },
      "S3Logs": {
        "Status": {}
      },
      "Kubernetes": {
        "AuditLogs": {
          "Status": {}
        }
      },
      "MalwareProtection": {
        "ScanEc2InstanceWithFindings": {
          "EbsVolumes": {
            "Status": {},
            "Reason": {}
          }
        },
        "ServiceRole": {}
      }
    },
    "Features": {}
  }
]
```

<h2 id="tocS_GetMembersRequest">GetMembersRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetmembersrequest"></a>
<a id="schema_GetMembersRequest"></a>
<a id="tocSgetmembersrequest"></a>
<a id="tocsgetmembersrequest"></a>

```json
{
  "AccountIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountIds|object|true|none|none|

<h2 id="tocS_Members">Members</h2>
<!-- backwards compatibility -->
<a id="schemamembers"></a>
<a id="schema_Members"></a>
<a id="tocSmembers"></a>
<a id="tocsmembers"></a>

```json
[
  {
    "AccountId": {},
    "DetectorId": {},
    "MasterId": {},
    "Email": {},
    "RelationshipStatus": {},
    "InvitedAt": {},
    "UpdatedAt": {},
    "AdministratorId": {}
  }
]
```

<h2 id="tocS_GetRemainingFreeTrialDaysRequest">GetRemainingFreeTrialDaysRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetremainingfreetrialdaysrequest"></a>
<a id="schema_GetRemainingFreeTrialDaysRequest"></a>
<a id="tocSgetremainingfreetrialdaysrequest"></a>
<a id="tocsgetremainingfreetrialdaysrequest"></a>

```json
{
  "AccountIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountIds|object|false|none|none|

<h2 id="tocS_GetThreatIntelSetRequest">GetThreatIntelSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetthreatintelsetrequest"></a>
<a id="schema_GetThreatIntelSetRequest"></a>
<a id="tocSgetthreatintelsetrequest"></a>
<a id="tocsgetthreatintelsetrequest"></a>

```json
{}
```

<h2 id="tocS_ThreatIntelSetStatus">ThreatIntelSetStatus</h2>
<!-- backwards compatibility -->
<a id="schemathreatintelsetstatus"></a>
<a id="schema_ThreatIntelSetStatus"></a>
<a id="tocSthreatintelsetstatus"></a>
<a id="tocsthreatintelsetstatus"></a>

```json
"INACTIVE"
```

<h2 id="tocS_UsageStatisticType">UsageStatisticType</h2>
<!-- backwards compatibility -->
<a id="schemausagestatistictype"></a>
<a id="schema_UsageStatisticType"></a>
<a id="tocSusagestatistictype"></a>
<a id="tocsusagestatistictype"></a>

```json
"SUM_BY_ACCOUNT"
```

<h2 id="tocS_UsageCriteria">UsageCriteria</h2>
<!-- backwards compatibility -->
<a id="schemausagecriteria"></a>
<a id="schema_UsageCriteria"></a>
<a id="tocSusagecriteria"></a>
<a id="tocsusagecriteria"></a>

```json
{
  "AccountIds": {},
  "DataSources": {},
  "Resources": {},
  "Features": {}
}
```

Contains information about the criteria used to query usage statistics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountIds|object|false|none|none|
|DataSources|object|false|none|none|
|Resources|object|false|none|none|
|Features|object|false|none|none|

<h2 id="tocS_GetUsageStatisticsRequest">GetUsageStatisticsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetusagestatisticsrequest"></a>
<a id="schema_GetUsageStatisticsRequest"></a>
<a id="tocSgetusagestatisticsrequest"></a>
<a id="tocsgetusagestatisticsrequest"></a>

```json
{
  "UsageStatisticType": {},
  "UsageCriteria": {
    "AccountIds": {},
    "DataSources": {},
    "Resources": {},
    "Features": {}
  },
  "Unit": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UsageStatisticType|object|true|none|none|
|UsageCriteria|object|true|none|none|
|Unit|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_UsageStatistics">UsageStatistics</h2>
<!-- backwards compatibility -->
<a id="schemausagestatistics"></a>
<a id="schema_UsageStatistics"></a>
<a id="tocSusagestatistics"></a>
<a id="tocsusagestatistics"></a>

```json
{
  "SumByAccount": {},
  "SumByDataSource": {},
  "SumByResource": {},
  "TopResources": {},
  "SumByFeature": {}
}
```

Contains the result of GuardDuty usage. If a UsageStatisticType is provided the result for other types will be null.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SumByAccount|object|false|none|none|
|SumByDataSource|object|false|none|none|
|SumByResource|object|false|none|none|
|TopResources|object|false|none|none|
|SumByFeature|object|false|none|none|

<h2 id="tocS_Groups">Groups</h2>
<!-- backwards compatibility -->
<a id="schemagroups"></a>
<a id="schema_Groups"></a>
<a id="tocSgroups"></a>
<a id="tocsgroups"></a>

```json
[
  "string"
]
```

<h2 id="tocS_GuardDutyArn">GuardDutyArn</h2>
<!-- backwards compatibility -->
<a id="schemaguarddutyarn"></a>
<a id="schema_GuardDutyArn"></a>
<a id="tocSguarddutyarn"></a>
<a id="tocsguarddutyarn"></a>

```json
"string"
```

<h2 id="tocS_HighestSeverityThreatDetails">HighestSeverityThreatDetails</h2>
<!-- backwards compatibility -->
<a id="schemahighestseveritythreatdetails"></a>
<a id="schema_HighestSeverityThreatDetails"></a>
<a id="tocShighestseveritythreatdetails"></a>
<a id="tocshighestseveritythreatdetails"></a>

```json
{
  "Severity": {},
  "ThreatName": {},
  "Count": {}
}
```

Contains details of the highest severity threat detected during scan and number of infected files.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Severity|object|false|none|none|
|ThreatName|object|false|none|none|
|Count|object|false|none|none|

<h2 id="tocS_HostPath">HostPath</h2>
<!-- backwards compatibility -->
<a id="schemahostpath"></a>
<a id="schema_HostPath"></a>
<a id="tocShostpath"></a>
<a id="tocshostpath"></a>

```json
{
  "Path": {}
}
```

Represents a pre-existing file or directory on the host machine that the volume maps to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Path|object|false|none|none|

<h2 id="tocS_IamInstanceProfile">IamInstanceProfile</h2>
<!-- backwards compatibility -->
<a id="schemaiaminstanceprofile"></a>
<a id="schema_IamInstanceProfile"></a>
<a id="tocSiaminstanceprofile"></a>
<a id="tocsiaminstanceprofile"></a>

```json
{
  "Arn": {},
  "Id": {}
}
```

Contains information about the EC2 instance profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Id|object|false|none|none|

<h2 id="tocS_InstanceArn">InstanceArn</h2>
<!-- backwards compatibility -->
<a id="schemainstancearn"></a>
<a id="schema_InstanceArn"></a>
<a id="tocSinstancearn"></a>
<a id="tocsinstancearn"></a>

```json
"string"
```

<h2 id="tocS_NetworkInterfaces">NetworkInterfaces</h2>
<!-- backwards compatibility -->
<a id="schemanetworkinterfaces"></a>
<a id="schema_NetworkInterfaces"></a>
<a id="tocSnetworkinterfaces"></a>
<a id="tocsnetworkinterfaces"></a>

```json
[
  {
    "Ipv6Addresses": {},
    "NetworkInterfaceId": {},
    "PrivateDnsName": {},
    "PrivateIpAddress": {},
    "PrivateIpAddresses": {},
    "PublicDnsName": {},
    "PublicIp": {},
    "SecurityGroups": {},
    "SubnetId": {},
    "VpcId": {}
  }
]
```

<h2 id="tocS_ProductCodes">ProductCodes</h2>
<!-- backwards compatibility -->
<a id="schemaproductcodes"></a>
<a id="schema_ProductCodes"></a>
<a id="tocSproductcodes"></a>
<a id="tocsproductcodes"></a>

```json
[
  {
    "Code": {},
    "ProductType": {}
  }
]
```

<h2 id="tocS_InstanceDetails">InstanceDetails</h2>
<!-- backwards compatibility -->
<a id="schemainstancedetails"></a>
<a id="schema_InstanceDetails"></a>
<a id="tocSinstancedetails"></a>
<a id="tocsinstancedetails"></a>

```json
{
  "AvailabilityZone": {},
  "IamInstanceProfile": {
    "Arn": {},
    "Id": {}
  },
  "ImageDescription": {},
  "ImageId": {},
  "InstanceId": {},
  "InstanceState": {},
  "InstanceType": {},
  "OutpostArn": {},
  "LaunchTime": {},
  "NetworkInterfaces": {},
  "Platform": {},
  "ProductCodes": {},
  "Tags": {}
}
```

Contains information about the details of an instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AvailabilityZone|object|false|none|none|
|IamInstanceProfile|object|false|none|none|
|ImageDescription|object|false|none|none|
|ImageId|object|false|none|none|
|InstanceId|object|false|none|none|
|InstanceState|object|false|none|none|
|InstanceType|object|false|none|none|
|OutpostArn|object|false|none|none|
|LaunchTime|object|false|none|none|
|NetworkInterfaces|object|false|none|none|
|Platform|object|false|none|none|
|ProductCodes|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_Invitation">Invitation</h2>
<!-- backwards compatibility -->
<a id="schemainvitation"></a>
<a id="schema_Invitation"></a>
<a id="tocSinvitation"></a>
<a id="tocsinvitation"></a>

```json
{
  "AccountId": {},
  "InvitationId": {},
  "RelationshipStatus": {},
  "InvitedAt": {}
}
```

Contains information about the invitation to become a member account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|false|none|none|
|InvitationId|object|false|none|none|
|RelationshipStatus|object|false|none|none|
|InvitedAt|object|false|none|none|

<h2 id="tocS_Invitations">Invitations</h2>
<!-- backwards compatibility -->
<a id="schemainvitations"></a>
<a id="schema_Invitations"></a>
<a id="tocSinvitations"></a>
<a id="tocsinvitations"></a>

```json
[
  {
    "AccountId": {},
    "InvitationId": {},
    "RelationshipStatus": {},
    "InvitedAt": {}
  }
]
```

<h2 id="tocS_InviteMembersRequest">InviteMembersRequest</h2>
<!-- backwards compatibility -->
<a id="schemainvitemembersrequest"></a>
<a id="schema_InviteMembersRequest"></a>
<a id="tocSinvitemembersrequest"></a>
<a id="tocsinvitemembersrequest"></a>

```json
{
  "AccountIds": {},
  "DisableEmailNotification": {},
  "Message": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountIds|object|true|none|none|
|DisableEmailNotification|object|false|none|none|
|Message|object|false|none|none|

<h2 id="tocS_IpSetIds">IpSetIds</h2>
<!-- backwards compatibility -->
<a id="schemaipsetids"></a>
<a id="schema_IpSetIds"></a>
<a id="tocSipsetids"></a>
<a id="tocsipsetids"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Ipv6Addresses">Ipv6Addresses</h2>
<!-- backwards compatibility -->
<a id="schemaipv6addresses"></a>
<a id="schema_Ipv6Addresses"></a>
<a id="tocSipv6addresses"></a>
<a id="tocsipv6addresses"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SourceIps">SourceIps</h2>
<!-- backwards compatibility -->
<a id="schemasourceips"></a>
<a id="schema_SourceIps"></a>
<a id="tocSsourceips"></a>
<a id="tocssourceips"></a>

```json
[
  "string"
]
```

<h2 id="tocS_KubernetesAuditLogsConfiguration">KubernetesAuditLogsConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemakubernetesauditlogsconfiguration"></a>
<a id="schema_KubernetesAuditLogsConfiguration"></a>
<a id="tocSkubernetesauditlogsconfiguration"></a>
<a id="tocskubernetesauditlogsconfiguration"></a>

```json
{
  "Enable": {}
}
```

Describes whether Kubernetes audit logs are enabled as a data source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enable|object|true|none|none|

<h2 id="tocS_KubernetesAuditLogsConfigurationResult">KubernetesAuditLogsConfigurationResult</h2>
<!-- backwards compatibility -->
<a id="schemakubernetesauditlogsconfigurationresult"></a>
<a id="schema_KubernetesAuditLogsConfigurationResult"></a>
<a id="tocSkubernetesauditlogsconfigurationresult"></a>
<a id="tocskubernetesauditlogsconfigurationresult"></a>

```json
{
  "Status": {}
}
```

Describes whether Kubernetes audit logs are enabled as a data source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|true|none|none|

<h2 id="tocS_KubernetesUserDetails">KubernetesUserDetails</h2>
<!-- backwards compatibility -->
<a id="schemakubernetesuserdetails"></a>
<a id="schema_KubernetesUserDetails"></a>
<a id="tocSkubernetesuserdetails"></a>
<a id="tocskubernetesuserdetails"></a>

```json
{
  "Username": {},
  "Uid": {},
  "Groups": {}
}
```

Details about the Kubernetes user involved in a Kubernetes finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Username|object|false|none|none|
|Uid|object|false|none|none|
|Groups|object|false|none|none|

<h2 id="tocS_KubernetesWorkloadDetails">KubernetesWorkloadDetails</h2>
<!-- backwards compatibility -->
<a id="schemakubernetesworkloaddetails"></a>
<a id="schema_KubernetesWorkloadDetails"></a>
<a id="tocSkubernetesworkloaddetails"></a>
<a id="tocskubernetesworkloaddetails"></a>

```json
{
  "Name": {},
  "Type": {},
  "Uid": {},
  "Namespace": {},
  "HostNetwork": {},
  "Containers": {},
  "Volumes": {}
}
```

Details about the Kubernetes workload involved in a Kubernetes finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Type|object|false|none|none|
|Uid|object|false|none|none|
|Namespace|object|false|none|none|
|HostNetwork|object|false|none|none|
|Containers|object|false|none|none|
|Volumes|object|false|none|none|

<h2 id="tocS_KubernetesDetails">KubernetesDetails</h2>
<!-- backwards compatibility -->
<a id="schemakubernetesdetails"></a>
<a id="schema_KubernetesDetails"></a>
<a id="tocSkubernetesdetails"></a>
<a id="tocskubernetesdetails"></a>

```json
{
  "KubernetesUserDetails": {
    "Username": {},
    "Uid": {},
    "Groups": {}
  },
  "KubernetesWorkloadDetails": {
    "Name": {},
    "Type": {},
    "Uid": {},
    "Namespace": {},
    "HostNetwork": {},
    "Containers": {},
    "Volumes": {}
  }
}
```

Details about Kubernetes resources such as a Kubernetes user or workload resource involved in a Kubernetes finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KubernetesUserDetails|object|false|none|none|
|KubernetesWorkloadDetails|object|false|none|none|

<h2 id="tocS_VpcConfig">VpcConfig</h2>
<!-- backwards compatibility -->
<a id="schemavpcconfig"></a>
<a id="schema_VpcConfig"></a>
<a id="tocSvpcconfig"></a>
<a id="tocsvpcconfig"></a>

```json
{
  "SubnetIds": {},
  "VpcId": {},
  "SecurityGroups": {}
}
```

Amazon Virtual Private Cloud configuration details associated with your Lambda function.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubnetIds|object|false|none|none|
|VpcId|object|false|none|none|
|SecurityGroups|object|false|none|none|

<h2 id="tocS_LambdaDetails">LambdaDetails</h2>
<!-- backwards compatibility -->
<a id="schemalambdadetails"></a>
<a id="schema_LambdaDetails"></a>
<a id="tocSlambdadetails"></a>
<a id="tocslambdadetails"></a>

```json
{
  "FunctionArn": {},
  "FunctionName": {},
  "Description": {},
  "LastModifiedAt": {},
  "RevisionId": {},
  "FunctionVersion": {},
  "Role": {},
  "VpcConfig": {
    "SubnetIds": {},
    "VpcId": {},
    "SecurityGroups": {}
  },
  "Tags": {}
}
```

Information about the Lambda function involved in the finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FunctionArn|object|false|none|none|
|FunctionName|object|false|none|none|
|Description|object|false|none|none|
|LastModifiedAt|object|false|none|none|
|RevisionId|object|false|none|none|
|FunctionVersion|object|false|none|none|
|Role|object|false|none|none|
|VpcConfig|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_LineageObject">LineageObject</h2>
<!-- backwards compatibility -->
<a id="schemalineageobject"></a>
<a id="schema_LineageObject"></a>
<a id="tocSlineageobject"></a>
<a id="tocslineageobject"></a>

```json
{
  "StartTime": {},
  "NamespacePid": {},
  "UserId": {},
  "Name": {},
  "Pid": {},
  "Uuid": {},
  "ExecutablePath": {},
  "Euid": {},
  "ParentUuid": {}
}
```

Information about the runtime process details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StartTime|object|false|none|none|
|NamespacePid|object|false|none|none|
|UserId|object|false|none|none|
|Name|object|false|none|none|
|Pid|object|false|none|none|
|Uuid|object|false|none|none|
|ExecutablePath|object|false|none|none|
|Euid|object|false|none|none|
|ParentUuid|object|false|none|none|

<h2 id="tocS_Lineage">Lineage</h2>
<!-- backwards compatibility -->
<a id="schemalineage"></a>
<a id="schema_Lineage"></a>
<a id="tocSlineage"></a>
<a id="tocslineage"></a>

```json
[
  {
    "StartTime": {},
    "NamespacePid": {},
    "UserId": {},
    "Name": {},
    "Pid": {},
    "Uuid": {},
    "ExecutablePath": {},
    "Euid": {},
    "ParentUuid": {}
  }
]
```

<h2 id="tocS_ListCoverageRequest">ListCoverageRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcoveragerequest"></a>
<a id="schema_ListCoverageRequest"></a>
<a id="tocSlistcoveragerequest"></a>
<a id="tocslistcoveragerequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "FilterCriteria": {
    "FilterCriterion": {}
  },
  "SortCriteria": {
    "AttributeName": {},
    "OrderBy": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|FilterCriteria|object|false|none|none|
|SortCriteria|object|false|none|none|

<h2 id="tocS_ListDetectorsRequest">ListDetectorsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdetectorsrequest"></a>
<a id="schema_ListDetectorsRequest"></a>
<a id="tocSlistdetectorsrequest"></a>
<a id="tocslistdetectorsrequest"></a>

```json
{}
```

<h2 id="tocS_ListFiltersRequest">ListFiltersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistfiltersrequest"></a>
<a id="schema_ListFiltersRequest"></a>
<a id="tocSlistfiltersrequest"></a>
<a id="tocslistfiltersrequest"></a>

```json
{}
```

<h2 id="tocS_ListFindingsRequest">ListFindingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistfindingsrequest"></a>
<a id="schema_ListFindingsRequest"></a>
<a id="tocSlistfindingsrequest"></a>
<a id="tocslistfindingsrequest"></a>

```json
{
  "FindingCriteria": {
    "Criterion": {
      "property1": {
        "Eq": {},
        "Neq": {},
        "Gt": {},
        "Gte": {},
        "Lt": {},
        "Lte": {},
        "Equals": {},
        "NotEquals": {},
        "GreaterThan": {},
        "GreaterThanOrEqual": {},
        "LessThan": {},
        "LessThanOrEqual": {}
      },
      "property2": {
        "Eq": {},
        "Neq": {},
        "Gt": {},
        "Gte": {},
        "Lt": {},
        "Lte": {},
        "Equals": {},
        "NotEquals": {},
        "GreaterThan": {},
        "GreaterThanOrEqual": {},
        "LessThan": {},
        "LessThanOrEqual": {}
      }
    }
  },
  "SortCriteria": {
    "AttributeName": {},
    "OrderBy": {}
  },
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FindingCriteria|object|false|none|none|
|SortCriteria|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListIPSetsRequest">ListIPSetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistipsetsrequest"></a>
<a id="schema_ListIPSetsRequest"></a>
<a id="tocSlistipsetsrequest"></a>
<a id="tocslistipsetsrequest"></a>

```json
{}
```

<h2 id="tocS_ListInvitationsRequest">ListInvitationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistinvitationsrequest"></a>
<a id="schema_ListInvitationsRequest"></a>
<a id="tocSlistinvitationsrequest"></a>
<a id="tocslistinvitationsrequest"></a>

```json
{}
```

<h2 id="tocS_ListMembersRequest">ListMembersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistmembersrequest"></a>
<a id="schema_ListMembersRequest"></a>
<a id="tocSlistmembersrequest"></a>
<a id="tocslistmembersrequest"></a>

```json
{}
```

<h2 id="tocS_ListOrganizationAdminAccountsRequest">ListOrganizationAdminAccountsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistorganizationadminaccountsrequest"></a>
<a id="schema_ListOrganizationAdminAccountsRequest"></a>
<a id="tocSlistorganizationadminaccountsrequest"></a>
<a id="tocslistorganizationadminaccountsrequest"></a>

```json
{}
```

<h2 id="tocS_ListPublishingDestinationsRequest">ListPublishingDestinationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistpublishingdestinationsrequest"></a>
<a id="schema_ListPublishingDestinationsRequest"></a>
<a id="tocSlistpublishingdestinationsrequest"></a>
<a id="tocslistpublishingdestinationsrequest"></a>

```json
{}
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

<h2 id="tocS_ListThreatIntelSetsRequest">ListThreatIntelSetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistthreatintelsetsrequest"></a>
<a id="schema_ListThreatIntelSetsRequest"></a>
<a id="tocSlistthreatintelsetsrequest"></a>
<a id="tocslistthreatintelsetsrequest"></a>

```json
{}
```

<h2 id="tocS_ThreatIntelSetIds">ThreatIntelSetIds</h2>
<!-- backwards compatibility -->
<a id="schemathreatintelsetids"></a>
<a id="schema_ThreatIntelSetIds"></a>
<a id="tocSthreatintelsetids"></a>
<a id="tocsthreatintelsetids"></a>

```json
[
  "string"
]
```

<h2 id="tocS_LocalIpDetails">LocalIpDetails</h2>
<!-- backwards compatibility -->
<a id="schemalocalipdetails"></a>
<a id="schema_LocalIpDetails"></a>
<a id="tocSlocalipdetails"></a>
<a id="tocslocalipdetails"></a>

```json
{
  "IpAddressV4": {}
}
```

Contains information about the local IP address of the connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IpAddressV4|object|false|none|none|

<h2 id="tocS_LocalPortDetails">LocalPortDetails</h2>
<!-- backwards compatibility -->
<a id="schemalocalportdetails"></a>
<a id="schema_LocalPortDetails"></a>
<a id="tocSlocalportdetails"></a>
<a id="tocslocalportdetails"></a>

```json
{
  "Port": {},
  "PortName": {}
}
```

Contains information about the port for the local connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Port|object|false|none|none|
|PortName|object|false|none|none|

<h2 id="tocS_LoginAttribute">LoginAttribute</h2>
<!-- backwards compatibility -->
<a id="schemaloginattribute"></a>
<a id="schema_LoginAttribute"></a>
<a id="tocSloginattribute"></a>
<a id="tocsloginattribute"></a>

```json
{
  "User": {},
  "Application": {},
  "FailedLoginAttempts": {},
  "SuccessfulLoginAttempts": {}
}
```

Information about the login attempts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|User|object|false|none|none|
|Application|object|false|none|none|
|FailedLoginAttempts|object|false|none|none|
|SuccessfulLoginAttempts|object|false|none|none|

<h2 id="tocS_LoginAttributes">LoginAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaloginattributes"></a>
<a id="schema_LoginAttributes"></a>
<a id="tocSloginattributes"></a>
<a id="tocsloginattributes"></a>

```json
[
  {
    "User": {},
    "Application": {},
    "FailedLoginAttempts": {},
    "SuccessfulLoginAttempts": {}
  }
]
```

<h2 id="tocS_ScanEc2InstanceWithFindings">ScanEc2InstanceWithFindings</h2>
<!-- backwards compatibility -->
<a id="schemascanec2instancewithfindings"></a>
<a id="schema_ScanEc2InstanceWithFindings"></a>
<a id="tocSscanec2instancewithfindings"></a>
<a id="tocsscanec2instancewithfindings"></a>

```json
{
  "EbsVolumes": {}
}
```

Describes whether Malware Protection for EC2 instances with findings will be enabled as a data source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EbsVolumes|object|false|none|none|

<h2 id="tocS_ScanEc2InstanceWithFindingsResult">ScanEc2InstanceWithFindingsResult</h2>
<!-- backwards compatibility -->
<a id="schemascanec2instancewithfindingsresult"></a>
<a id="schema_ScanEc2InstanceWithFindingsResult"></a>
<a id="tocSscanec2instancewithfindingsresult"></a>
<a id="tocsscanec2instancewithfindingsresult"></a>

```json
{
  "EbsVolumes": {
    "Status": {},
    "Reason": {}
  }
}
```

An object that contains information on the status of whether Malware Protection for EC2 instances with findings will be enabled as a data source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EbsVolumes|object|false|none|none|

<h2 id="tocS_ScanConditionPair">ScanConditionPair</h2>
<!-- backwards compatibility -->
<a id="schemascanconditionpair"></a>
<a id="schema_ScanConditionPair"></a>
<a id="tocSscanconditionpair"></a>
<a id="tocsscanconditionpair"></a>

```json
{
  "Key": {},
  "Value": {}
}
```

Represents key, value pair to be matched against given resource property.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|false|none|none|

<h2 id="tocS_MapEquals">MapEquals</h2>
<!-- backwards compatibility -->
<a id="schemamapequals"></a>
<a id="schema_MapEquals"></a>
<a id="tocSmapequals"></a>
<a id="tocsmapequals"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_Member">Member</h2>
<!-- backwards compatibility -->
<a id="schemamember"></a>
<a id="schema_Member"></a>
<a id="tocSmember"></a>
<a id="tocsmember"></a>

```json
{
  "AccountId": {},
  "DetectorId": {},
  "MasterId": {},
  "Email": {},
  "RelationshipStatus": {},
  "InvitedAt": {},
  "UpdatedAt": {},
  "AdministratorId": {}
}
```

Contains information about the member account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|true|none|none|
|DetectorId|object|false|none|none|
|MasterId|object|true|none|none|
|Email|object|true|none|none|
|RelationshipStatus|object|true|none|none|
|InvitedAt|object|false|none|none|
|UpdatedAt|object|true|none|none|
|AdministratorId|object|false|none|none|

<h2 id="tocS_OrgFeatureAdditionalConfiguration">OrgFeatureAdditionalConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaorgfeatureadditionalconfiguration"></a>
<a id="schema_OrgFeatureAdditionalConfiguration"></a>
<a id="tocSorgfeatureadditionalconfiguration"></a>
<a id="tocsorgfeatureadditionalconfiguration"></a>

```json
"EKS_ADDON_MANAGEMENT"
```

<h2 id="tocS_MemberAdditionalConfiguration">MemberAdditionalConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemamemberadditionalconfiguration"></a>
<a id="schema_MemberAdditionalConfiguration"></a>
<a id="tocSmemberadditionalconfiguration"></a>
<a id="tocsmemberadditionalconfiguration"></a>

```json
{
  "Name": {},
  "Status": {}
}
```

Information about the additional configuration for the member account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_MemberAdditionalConfigurationResult">MemberAdditionalConfigurationResult</h2>
<!-- backwards compatibility -->
<a id="schemamemberadditionalconfigurationresult"></a>
<a id="schema_MemberAdditionalConfigurationResult"></a>
<a id="tocSmemberadditionalconfigurationresult"></a>
<a id="tocsmemberadditionalconfigurationresult"></a>

```json
{
  "Name": {},
  "Status": {},
  "UpdatedAt": {}
}
```

Information about the additional configuration for the member account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Status|object|false|none|none|
|UpdatedAt|object|false|none|none|

<h2 id="tocS_MemberAdditionalConfigurationResults">MemberAdditionalConfigurationResults</h2>
<!-- backwards compatibility -->
<a id="schemamemberadditionalconfigurationresults"></a>
<a id="schema_MemberAdditionalConfigurationResults"></a>
<a id="tocSmemberadditionalconfigurationresults"></a>
<a id="tocsmemberadditionalconfigurationresults"></a>

```json
[
  {
    "Name": {},
    "Status": {},
    "UpdatedAt": {}
  }
]
```

<h2 id="tocS_MemberAdditionalConfigurations">MemberAdditionalConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemamemberadditionalconfigurations"></a>
<a id="schema_MemberAdditionalConfigurations"></a>
<a id="tocSmemberadditionalconfigurations"></a>
<a id="tocsmemberadditionalconfigurations"></a>

```json
[
  {
    "Name": {},
    "Status": {}
  }
]
```

<h2 id="tocS_MemberFeaturesConfigurationsResults">MemberFeaturesConfigurationsResults</h2>
<!-- backwards compatibility -->
<a id="schemamemberfeaturesconfigurationsresults"></a>
<a id="schema_MemberFeaturesConfigurationsResults"></a>
<a id="tocSmemberfeaturesconfigurationsresults"></a>
<a id="tocsmemberfeaturesconfigurationsresults"></a>

```json
[
  {
    "Name": {},
    "Status": {},
    "UpdatedAt": {},
    "AdditionalConfiguration": {}
  }
]
```

<h2 id="tocS_MemberDataSourceConfiguration">MemberDataSourceConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemamemberdatasourceconfiguration"></a>
<a id="schema_MemberDataSourceConfiguration"></a>
<a id="tocSmemberdatasourceconfiguration"></a>
<a id="tocsmemberdatasourceconfiguration"></a>

```json
{
  "AccountId": {},
  "DataSources": {
    "CloudTrail": {
      "Status": {}
    },
    "DNSLogs": {
      "Status": {}
    },
    "FlowLogs": {
      "Status": {}
    },
    "S3Logs": {
      "Status": {}
    },
    "Kubernetes": {
      "AuditLogs": {
        "Status": {}
      }
    },
    "MalwareProtection": {
      "ScanEc2InstanceWithFindings": {
        "EbsVolumes": {
          "Status": {},
          "Reason": {}
        }
      },
      "ServiceRole": {}
    }
  },
  "Features": {}
}
```

Contains information on which data sources are enabled for a member account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|true|none|none|
|DataSources|object|false|none|none|
|Features|object|false|none|none|

<h2 id="tocS_OrgFeature">OrgFeature</h2>
<!-- backwards compatibility -->
<a id="schemaorgfeature"></a>
<a id="schema_OrgFeature"></a>
<a id="tocSorgfeature"></a>
<a id="tocsorgfeature"></a>

```json
"S3_DATA_EVENTS"
```

<h2 id="tocS_MemberFeaturesConfigurationResult">MemberFeaturesConfigurationResult</h2>
<!-- backwards compatibility -->
<a id="schemamemberfeaturesconfigurationresult"></a>
<a id="schema_MemberFeaturesConfigurationResult"></a>
<a id="tocSmemberfeaturesconfigurationresult"></a>
<a id="tocsmemberfeaturesconfigurationresult"></a>

```json
{
  "Name": {},
  "Status": {},
  "UpdatedAt": {},
  "AdditionalConfiguration": {}
}
```

Contains information about the features for the member account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Status|object|false|none|none|
|UpdatedAt|object|false|none|none|
|AdditionalConfiguration|object|false|none|none|

<h2 id="tocS_MemberFeaturesConfigurations">MemberFeaturesConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemamemberfeaturesconfigurations"></a>
<a id="schema_MemberFeaturesConfigurations"></a>
<a id="tocSmemberfeaturesconfigurations"></a>
<a id="tocsmemberfeaturesconfigurations"></a>

```json
[
  {
    "Name": {},
    "Status": {},
    "AdditionalConfiguration": {}
  }
]
```

<h2 id="tocS_MemoryRegionsList">MemoryRegionsList</h2>
<!-- backwards compatibility -->
<a id="schemamemoryregionslist"></a>
<a id="schema_MemoryRegionsList"></a>
<a id="tocSmemoryregionslist"></a>
<a id="tocsmemoryregionslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_RemotePortDetails">RemotePortDetails</h2>
<!-- backwards compatibility -->
<a id="schemaremoteportdetails"></a>
<a id="schema_RemotePortDetails"></a>
<a id="tocSremoteportdetails"></a>
<a id="tocsremoteportdetails"></a>

```json
{
  "Port": {},
  "PortName": {}
}
```

Contains information about the remote port.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Port|object|false|none|none|
|PortName|object|false|none|none|

<h2 id="tocS_PrivateIpAddresses">PrivateIpAddresses</h2>
<!-- backwards compatibility -->
<a id="schemaprivateipaddresses"></a>
<a id="schema_PrivateIpAddresses"></a>
<a id="tocSprivateipaddresses"></a>
<a id="tocsprivateipaddresses"></a>

```json
[
  {
    "PrivateDnsName": {},
    "PrivateIpAddress": {}
  }
]
```

<h2 id="tocS_SecurityGroups">SecurityGroups</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroups"></a>
<a id="schema_SecurityGroups"></a>
<a id="tocSsecuritygroups"></a>
<a id="tocssecuritygroups"></a>

```json
[
  {
    "GroupId": {},
    "GroupName": {}
  }
]
```

<h2 id="tocS_NetworkInterface">NetworkInterface</h2>
<!-- backwards compatibility -->
<a id="schemanetworkinterface"></a>
<a id="schema_NetworkInterface"></a>
<a id="tocSnetworkinterface"></a>
<a id="tocsnetworkinterface"></a>

```json
{
  "Ipv6Addresses": {},
  "NetworkInterfaceId": {},
  "PrivateDnsName": {},
  "PrivateIpAddress": {},
  "PrivateIpAddresses": {},
  "PublicDnsName": {},
  "PublicIp": {},
  "SecurityGroups": {},
  "SubnetId": {},
  "VpcId": {}
}
```

Contains information about the elastic network interface of the EC2 instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Ipv6Addresses|object|false|none|none|
|NetworkInterfaceId|object|false|none|none|
|PrivateDnsName|object|false|none|none|
|PrivateIpAddress|object|false|none|none|
|PrivateIpAddresses|object|false|none|none|
|PublicDnsName|object|false|none|none|
|PublicIp|object|false|none|none|
|SecurityGroups|object|false|none|none|
|SubnetId|object|false|none|none|
|VpcId|object|false|none|none|

<h2 id="tocS_OrgFeatureStatus">OrgFeatureStatus</h2>
<!-- backwards compatibility -->
<a id="schemaorgfeaturestatus"></a>
<a id="schema_OrgFeatureStatus"></a>
<a id="tocSorgfeaturestatus"></a>
<a id="tocsorgfeaturestatus"></a>

```json
"NEW"
```

<h2 id="tocS_Organization">Organization</h2>
<!-- backwards compatibility -->
<a id="schemaorganization"></a>
<a id="schema_Organization"></a>
<a id="tocSorganization"></a>
<a id="tocsorganization"></a>

```json
{
  "Asn": {},
  "AsnOrg": {},
  "Isp": {},
  "Org": {}
}
```

Contains information about the ISP organization of the remote IP address.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Asn|object|false|none|none|
|AsnOrg|object|false|none|none|
|Isp|object|false|none|none|
|Org|object|false|none|none|

<h2 id="tocS_OrganizationAdditionalConfiguration">OrganizationAdditionalConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationadditionalconfiguration"></a>
<a id="schema_OrganizationAdditionalConfiguration"></a>
<a id="tocSorganizationadditionalconfiguration"></a>
<a id="tocsorganizationadditionalconfiguration"></a>

```json
{
  "Name": {},
  "AutoEnable": {}
}
```

A list of additional configurations which will be configured for the organization.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|AutoEnable|object|false|none|none|

<h2 id="tocS_OrganizationAdditionalConfigurationResult">OrganizationAdditionalConfigurationResult</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationadditionalconfigurationresult"></a>
<a id="schema_OrganizationAdditionalConfigurationResult"></a>
<a id="tocSorganizationadditionalconfigurationresult"></a>
<a id="tocsorganizationadditionalconfigurationresult"></a>

```json
{
  "Name": {},
  "AutoEnable": {}
}
```

A list of additional configuration which will be configured for the organization.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|AutoEnable|object|false|none|none|

<h2 id="tocS_OrganizationAdditionalConfigurationResults">OrganizationAdditionalConfigurationResults</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationadditionalconfigurationresults"></a>
<a id="schema_OrganizationAdditionalConfigurationResults"></a>
<a id="tocSorganizationadditionalconfigurationresults"></a>
<a id="tocsorganizationadditionalconfigurationresults"></a>

```json
[
  {
    "Name": {},
    "AutoEnable": {}
  }
]
```

<h2 id="tocS_OrganizationAdditionalConfigurations">OrganizationAdditionalConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationadditionalconfigurations"></a>
<a id="schema_OrganizationAdditionalConfigurations"></a>
<a id="tocSorganizationadditionalconfigurations"></a>
<a id="tocsorganizationadditionalconfigurations"></a>

```json
[
  {
    "Name": {},
    "AutoEnable": {}
  }
]
```

<h2 id="tocS_OrganizationDataSourceConfigurations">OrganizationDataSourceConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationdatasourceconfigurations"></a>
<a id="schema_OrganizationDataSourceConfigurations"></a>
<a id="tocSorganizationdatasourceconfigurations"></a>
<a id="tocsorganizationdatasourceconfigurations"></a>

```json
{
  "S3Logs": {
    "AutoEnable": {}
  },
  "Kubernetes": {
    "AuditLogs": {
      "AutoEnable": {}
    }
  },
  "MalwareProtection": {
    "ScanEc2InstanceWithFindings": {
      "EbsVolumes": {
        "AutoEnable": {}
      }
    }
  }
}
```

An object that contains information on which data sources will be configured to be automatically enabled for new members within the organization.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3Logs|object|false|none|none|
|Kubernetes|object|false|none|none|
|MalwareProtection|object|false|none|none|

<h2 id="tocS_OrganizationS3LogsConfigurationResult">OrganizationS3LogsConfigurationResult</h2>
<!-- backwards compatibility -->
<a id="schemaorganizations3logsconfigurationresult"></a>
<a id="schema_OrganizationS3LogsConfigurationResult"></a>
<a id="tocSorganizations3logsconfigurationresult"></a>
<a id="tocsorganizations3logsconfigurationresult"></a>

```json
{
  "AutoEnable": {}
}
```

The current configuration of S3 data event logs as a data source for the organization.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoEnable|object|true|none|none|

<h2 id="tocS_OrganizationKubernetesConfigurationResult">OrganizationKubernetesConfigurationResult</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationkubernetesconfigurationresult"></a>
<a id="schema_OrganizationKubernetesConfigurationResult"></a>
<a id="tocSorganizationkubernetesconfigurationresult"></a>
<a id="tocsorganizationkubernetesconfigurationresult"></a>

```json
{
  "AuditLogs": {
    "AutoEnable": {}
  }
}
```

The current configuration of all Kubernetes data sources for the organization.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AuditLogs|object|true|none|none|

<h2 id="tocS_OrganizationMalwareProtectionConfigurationResult">OrganizationMalwareProtectionConfigurationResult</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationmalwareprotectionconfigurationresult"></a>
<a id="schema_OrganizationMalwareProtectionConfigurationResult"></a>
<a id="tocSorganizationmalwareprotectionconfigurationresult"></a>
<a id="tocsorganizationmalwareprotectionconfigurationresult"></a>

```json
{
  "ScanEc2InstanceWithFindings": {
    "EbsVolumes": {
      "AutoEnable": {}
    }
  }
}
```

An object that contains information on the status of all Malware Protection data source for an organization.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScanEc2InstanceWithFindings|object|false|none|none|

<h2 id="tocS_OrganizationEbsVolumes">OrganizationEbsVolumes</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationebsvolumes"></a>
<a id="schema_OrganizationEbsVolumes"></a>
<a id="tocSorganizationebsvolumes"></a>
<a id="tocsorganizationebsvolumes"></a>

```json
{
  "AutoEnable": {}
}
```

Organization-wide EBS volumes scan configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoEnable|object|false|none|none|

<h2 id="tocS_OrganizationEbsVolumesResult">OrganizationEbsVolumesResult</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationebsvolumesresult"></a>
<a id="schema_OrganizationEbsVolumesResult"></a>
<a id="tocSorganizationebsvolumesresult"></a>
<a id="tocsorganizationebsvolumesresult"></a>

```json
{
  "AutoEnable": {}
}
```

An object that contains information on the status of whether EBS volumes scanning will be enabled as a data source for an organization.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoEnable|object|false|none|none|

<h2 id="tocS_OrganizationFeatureConfigurationResult">OrganizationFeatureConfigurationResult</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationfeatureconfigurationresult"></a>
<a id="schema_OrganizationFeatureConfigurationResult"></a>
<a id="tocSorganizationfeatureconfigurationresult"></a>
<a id="tocsorganizationfeatureconfigurationresult"></a>

```json
{
  "Name": {},
  "AutoEnable": {},
  "AdditionalConfiguration": {}
}
```

A list of features which will be configured for the organization.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|AutoEnable|object|false|none|none|
|AdditionalConfiguration|object|false|none|none|

<h2 id="tocS_OrganizationFeaturesConfigurations">OrganizationFeaturesConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationfeaturesconfigurations"></a>
<a id="schema_OrganizationFeaturesConfigurations"></a>
<a id="tocSorganizationfeaturesconfigurations"></a>
<a id="tocsorganizationfeaturesconfigurations"></a>

```json
[
  {
    "Name": {},
    "AutoEnable": {},
    "AdditionalConfiguration": {}
  }
]
```

<h2 id="tocS_OrganizationKubernetesAuditLogsConfiguration">OrganizationKubernetesAuditLogsConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationkubernetesauditlogsconfiguration"></a>
<a id="schema_OrganizationKubernetesAuditLogsConfiguration"></a>
<a id="tocSorganizationkubernetesauditlogsconfiguration"></a>
<a id="tocsorganizationkubernetesauditlogsconfiguration"></a>

```json
{
  "AutoEnable": {}
}
```

Organization-wide Kubernetes audit logs configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoEnable|object|true|none|none|

<h2 id="tocS_OrganizationKubernetesAuditLogsConfigurationResult">OrganizationKubernetesAuditLogsConfigurationResult</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationkubernetesauditlogsconfigurationresult"></a>
<a id="schema_OrganizationKubernetesAuditLogsConfigurationResult"></a>
<a id="tocSorganizationkubernetesauditlogsconfigurationresult"></a>
<a id="tocsorganizationkubernetesauditlogsconfigurationresult"></a>

```json
{
  "AutoEnable": {}
}
```

The current configuration of Kubernetes audit logs as a data source for the organization.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoEnable|object|true|none|none|

<h2 id="tocS_OrganizationScanEc2InstanceWithFindings">OrganizationScanEc2InstanceWithFindings</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationscanec2instancewithfindings"></a>
<a id="schema_OrganizationScanEc2InstanceWithFindings"></a>
<a id="tocSorganizationscanec2instancewithfindings"></a>
<a id="tocsorganizationscanec2instancewithfindings"></a>

```json
{
  "EbsVolumes": {
    "AutoEnable": {}
  }
}
```

Organization-wide EC2 instances with findings scan configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EbsVolumes|object|false|none|none|

<h2 id="tocS_OrganizationScanEc2InstanceWithFindingsResult">OrganizationScanEc2InstanceWithFindingsResult</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationscanec2instancewithfindingsresult"></a>
<a id="schema_OrganizationScanEc2InstanceWithFindingsResult"></a>
<a id="tocSorganizationscanec2instancewithfindingsresult"></a>
<a id="tocsorganizationscanec2instancewithfindingsresult"></a>

```json
{
  "EbsVolumes": {
    "AutoEnable": {}
  }
}
```

An object that contains information on the status of scanning EC2 instances with findings for an organization.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EbsVolumes|object|false|none|none|

<h2 id="tocS_Owner">Owner</h2>
<!-- backwards compatibility -->
<a id="schemaowner"></a>
<a id="schema_Owner"></a>
<a id="tocSowner"></a>
<a id="tocsowner"></a>

```json
{
  "Id": {}
}
```

Contains information on the owner of the bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|

<h2 id="tocS_PermissionConfiguration">PermissionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemapermissionconfiguration"></a>
<a id="schema_PermissionConfiguration"></a>
<a id="tocSpermissionconfiguration"></a>
<a id="tocspermissionconfiguration"></a>

```json
{
  "BucketLevelPermissions": {
    "AccessControlList": {
      "AllowsPublicReadAccess": {},
      "AllowsPublicWriteAccess": {}
    },
    "BucketPolicy": {
      "AllowsPublicReadAccess": {},
      "AllowsPublicWriteAccess": {}
    },
    "BlockPublicAccess": {
      "IgnorePublicAcls": {},
      "RestrictPublicBuckets": {},
      "BlockPublicAcls": {},
      "BlockPublicPolicy": {}
    }
  },
  "AccountLevelPermissions": {
    "BlockPublicAccess": {
      "IgnorePublicAcls": {},
      "RestrictPublicBuckets": {},
      "BlockPublicAcls": {},
      "BlockPublicPolicy": {}
    }
  }
}
```

Contains information about how permissions are configured for the S3 bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BucketLevelPermissions|object|false|none|none|
|AccountLevelPermissions|object|false|none|none|

<h2 id="tocS_PortProbeDetails">PortProbeDetails</h2>
<!-- backwards compatibility -->
<a id="schemaportprobedetails"></a>
<a id="schema_PortProbeDetails"></a>
<a id="tocSportprobedetails"></a>
<a id="tocsportprobedetails"></a>

```json
[
  {
    "LocalPortDetails": {
      "Port": {},
      "PortName": {}
    },
    "LocalIpDetails": {
      "IpAddressV4": {}
    },
    "RemoteIpDetails": {
      "City": {
        "CityName": {}
      },
      "Country": {
        "CountryCode": {},
        "CountryName": {}
      },
      "GeoLocation": {
        "Lat": {},
        "Lon": {}
      },
      "IpAddressV4": {},
      "Organization": {
        "Asn": {},
        "AsnOrg": {},
        "Isp": {},
        "Org": {}
      }
    }
  }
]
```

<h2 id="tocS_PortProbeDetail">PortProbeDetail</h2>
<!-- backwards compatibility -->
<a id="schemaportprobedetail"></a>
<a id="schema_PortProbeDetail"></a>
<a id="tocSportprobedetail"></a>
<a id="tocsportprobedetail"></a>

```json
{
  "LocalPortDetails": {
    "Port": {},
    "PortName": {}
  },
  "LocalIpDetails": {
    "IpAddressV4": {}
  },
  "RemoteIpDetails": {
    "City": {
      "CityName": {}
    },
    "Country": {
      "CountryCode": {},
      "CountryName": {}
    },
    "GeoLocation": {
      "Lat": {},
      "Lon": {}
    },
    "IpAddressV4": {},
    "Organization": {
      "Asn": {},
      "AsnOrg": {},
      "Isp": {},
      "Org": {}
    }
  }
}
```

Contains information about the port probe details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LocalPortDetails|object|false|none|none|
|LocalIpDetails|object|false|none|none|
|RemoteIpDetails|object|false|none|none|

<h2 id="tocS_PositiveLong">PositiveLong</h2>
<!-- backwards compatibility -->
<a id="schemapositivelong"></a>
<a id="schema_PositiveLong"></a>
<a id="tocSpositivelong"></a>
<a id="tocspositivelong"></a>

```json
0
```

<h2 id="tocS_PrivateIpAddressDetails">PrivateIpAddressDetails</h2>
<!-- backwards compatibility -->
<a id="schemaprivateipaddressdetails"></a>
<a id="schema_PrivateIpAddressDetails"></a>
<a id="tocSprivateipaddressdetails"></a>
<a id="tocsprivateipaddressdetails"></a>

```json
{
  "PrivateDnsName": {},
  "PrivateIpAddress": {}
}
```

Contains other private IP address information of the EC2 instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PrivateDnsName|object|false|none|none|
|PrivateIpAddress|object|false|none|none|

<h2 id="tocS_ProcessDetails">ProcessDetails</h2>
<!-- backwards compatibility -->
<a id="schemaprocessdetails"></a>
<a id="schema_ProcessDetails"></a>
<a id="tocSprocessdetails"></a>
<a id="tocsprocessdetails"></a>

```json
{
  "Name": {},
  "ExecutablePath": {},
  "ExecutableSha256": {},
  "NamespacePid": {},
  "Pwd": {},
  "Pid": {},
  "StartTime": {},
  "Uuid": {},
  "ParentUuid": {},
  "User": {},
  "UserId": {},
  "Euid": {},
  "Lineage": {}
}
```

Information about the observed process.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|ExecutablePath|object|false|none|none|
|ExecutableSha256|object|false|none|none|
|NamespacePid|object|false|none|none|
|Pwd|object|false|none|none|
|Pid|object|false|none|none|
|StartTime|object|false|none|none|
|Uuid|object|false|none|none|
|ParentUuid|object|false|none|none|
|User|object|false|none|none|
|UserId|object|false|none|none|
|Euid|object|false|none|none|
|Lineage|object|false|none|none|

<h2 id="tocS_ProductCode">ProductCode</h2>
<!-- backwards compatibility -->
<a id="schemaproductcode"></a>
<a id="schema_ProductCode"></a>
<a id="tocSproductcode"></a>
<a id="tocsproductcode"></a>

```json
{
  "Code": {},
  "ProductType": {}
}
```

Contains information about the product code for the EC2 instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|object|false|none|none|
|ProductType|object|false|none|none|

<h2 id="tocS_PublicAccess">PublicAccess</h2>
<!-- backwards compatibility -->
<a id="schemapublicaccess"></a>
<a id="schema_PublicAccess"></a>
<a id="tocSpublicaccess"></a>
<a id="tocspublicaccess"></a>

```json
{
  "PermissionConfiguration": {
    "BucketLevelPermissions": {
      "AccessControlList": {
        "AllowsPublicReadAccess": {},
        "AllowsPublicWriteAccess": {}
      },
      "BucketPolicy": {
        "AllowsPublicReadAccess": {},
        "AllowsPublicWriteAccess": {}
      },
      "BlockPublicAccess": {
        "IgnorePublicAcls": {},
        "RestrictPublicBuckets": {},
        "BlockPublicAcls": {},
        "BlockPublicPolicy": {}
      }
    },
    "AccountLevelPermissions": {
      "BlockPublicAccess": {
        "IgnorePublicAcls": {},
        "RestrictPublicBuckets": {},
        "BlockPublicAcls": {},
        "BlockPublicPolicy": {}
      }
    }
  },
  "EffectivePermission": {}
}
```

Describes the public access policies that apply to the S3 bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PermissionConfiguration|object|false|none|none|
|EffectivePermission|object|false|none|none|

<h2 id="tocS_RdsDbInstanceDetails">RdsDbInstanceDetails</h2>
<!-- backwards compatibility -->
<a id="schemardsdbinstancedetails"></a>
<a id="schema_RdsDbInstanceDetails"></a>
<a id="tocSrdsdbinstancedetails"></a>
<a id="tocsrdsdbinstancedetails"></a>

```json
{
  "DbInstanceIdentifier": {},
  "Engine": {},
  "EngineVersion": {},
  "DbClusterIdentifier": {},
  "DbInstanceArn": {},
  "Tags": {}
}
```

Contains information about the resource type <code>RDSDBInstance</code> involved in a GuardDuty finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DbInstanceIdentifier|object|false|none|none|
|Engine|object|false|none|none|
|EngineVersion|object|false|none|none|
|DbClusterIdentifier|object|false|none|none|
|DbInstanceArn|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_RdsDbUserDetails">RdsDbUserDetails</h2>
<!-- backwards compatibility -->
<a id="schemardsdbuserdetails"></a>
<a id="schema_RdsDbUserDetails"></a>
<a id="tocSrdsdbuserdetails"></a>
<a id="tocsrdsdbuserdetails"></a>

```json
{
  "User": {},
  "Application": {},
  "Database": {},
  "Ssl": {},
  "AuthMethod": {}
}
```

Contains information about the user and authentication details for a database instance involved in the finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|User|object|false|none|none|
|Application|object|false|none|none|
|Database|object|false|none|none|
|Ssl|object|false|none|none|
|AuthMethod|object|false|none|none|

<h2 id="tocS_S3BucketDetails">S3BucketDetails</h2>
<!-- backwards compatibility -->
<a id="schemas3bucketdetails"></a>
<a id="schema_S3BucketDetails"></a>
<a id="tocSs3bucketdetails"></a>
<a id="tocss3bucketdetails"></a>

```json
[
  {
    "Arn": {},
    "Name": {},
    "Type": {},
    "CreatedAt": {},
    "Owner": {
      "Id": {}
    },
    "Tags": {},
    "DefaultServerSideEncryption": {
      "EncryptionType": {},
      "KmsMasterKeyArn": {}
    },
    "PublicAccess": {
      "PermissionConfiguration": {
        "BucketLevelPermissions": {
          "AccessControlList": {
            "AllowsPublicReadAccess": {},
            "AllowsPublicWriteAccess": {}
          },
          "BucketPolicy": {
            "AllowsPublicReadAccess": {},
            "AllowsPublicWriteAccess": {}
          },
          "BlockPublicAccess": {
            "IgnorePublicAcls": {},
            "RestrictPublicBuckets": {},
            "BlockPublicAcls": {},
            "BlockPublicPolicy": {}
          }
        },
        "AccountLevelPermissions": {
          "BlockPublicAccess": {
            "IgnorePublicAcls": {},
            "RestrictPublicBuckets": {},
            "BlockPublicAcls": {},
            "BlockPublicPolicy": {}
          }
        }
      },
      "EffectivePermission": {}
    }
  }
]
```

<h2 id="tocS_ResourceDetails">ResourceDetails</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedetails"></a>
<a id="schema_ResourceDetails"></a>
<a id="tocSresourcedetails"></a>
<a id="tocsresourcedetails"></a>

```json
{
  "InstanceArn": {}
}
```

Represents the resources that were scanned in the scan entry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceArn|object|false|none|none|

<h2 id="tocS_RuntimeContext">RuntimeContext</h2>
<!-- backwards compatibility -->
<a id="schemaruntimecontext"></a>
<a id="schema_RuntimeContext"></a>
<a id="tocSruntimecontext"></a>
<a id="tocsruntimecontext"></a>

```json
{
  "ModifyingProcess": {
    "Name": {},
    "ExecutablePath": {},
    "ExecutableSha256": {},
    "NamespacePid": {},
    "Pwd": {},
    "Pid": {},
    "StartTime": {},
    "Uuid": {},
    "ParentUuid": {},
    "User": {},
    "UserId": {},
    "Euid": {},
    "Lineage": {}
  },
  "ModifiedAt": {},
  "ScriptPath": {},
  "LibraryPath": {},
  "LdPreloadValue": {},
  "SocketPath": {},
  "RuncBinaryPath": {},
  "ReleaseAgentPath": {},
  "MountSource": {},
  "MountTarget": {},
  "FileSystemType": {},
  "Flags": {},
  "ModuleName": {},
  "ModuleFilePath": {},
  "ModuleSha256": {},
  "ShellHistoryFilePath": {},
  "TargetProcess": {
    "Name": {},
    "ExecutablePath": {},
    "ExecutableSha256": {},
    "NamespacePid": {},
    "Pwd": {},
    "Pid": {},
    "StartTime": {},
    "Uuid": {},
    "ParentUuid": {},
    "User": {},
    "UserId": {},
    "Euid": {},
    "Lineage": {}
  },
  "AddressFamily": {},
  "IanaProtocolNumber": {},
  "MemoryRegions": {}
}
```

Additional information about the suspicious activity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ModifyingProcess|object|false|none|none|
|ModifiedAt|object|false|none|none|
|ScriptPath|object|false|none|none|
|LibraryPath|object|false|none|none|
|LdPreloadValue|object|false|none|none|
|SocketPath|object|false|none|none|
|RuncBinaryPath|object|false|none|none|
|ReleaseAgentPath|object|false|none|none|
|MountSource|object|false|none|none|
|MountTarget|object|false|none|none|
|FileSystemType|object|false|none|none|
|Flags|object|false|none|none|
|ModuleName|object|false|none|none|
|ModuleFilePath|object|false|none|none|
|ModuleSha256|object|false|none|none|
|ShellHistoryFilePath|object|false|none|none|
|TargetProcess|object|false|none|none|
|AddressFamily|object|false|none|none|
|IanaProtocolNumber|object|false|none|none|
|MemoryRegions|object|false|none|none|

<h2 id="tocS_RuntimeDetails">RuntimeDetails</h2>
<!-- backwards compatibility -->
<a id="schemaruntimedetails"></a>
<a id="schema_RuntimeDetails"></a>
<a id="tocSruntimedetails"></a>
<a id="tocsruntimedetails"></a>

```json
{
  "Process": {
    "Name": {},
    "ExecutablePath": {},
    "ExecutableSha256": {},
    "NamespacePid": {},
    "Pwd": {},
    "Pid": {},
    "StartTime": {},
    "Uuid": {},
    "ParentUuid": {},
    "User": {},
    "UserId": {},
    "Euid": {},
    "Lineage": {}
  },
  "Context": {
    "ModifyingProcess": {
      "Name": {},
      "ExecutablePath": {},
      "ExecutableSha256": {},
      "NamespacePid": {},
      "Pwd": {},
      "Pid": {},
      "StartTime": {},
      "Uuid": {},
      "ParentUuid": {},
      "User": {},
      "UserId": {},
      "Euid": {},
      "Lineage": {}
    },
    "ModifiedAt": {},
    "ScriptPath": {},
    "LibraryPath": {},
    "LdPreloadValue": {},
    "SocketPath": {},
    "RuncBinaryPath": {},
    "ReleaseAgentPath": {},
    "MountSource": {},
    "MountTarget": {},
    "FileSystemType": {},
    "Flags": {},
    "ModuleName": {},
    "ModuleFilePath": {},
    "ModuleSha256": {},
    "ShellHistoryFilePath": {},
    "TargetProcess": {
      "Name": {},
      "ExecutablePath": {},
      "ExecutableSha256": {},
      "NamespacePid": {},
      "Pwd": {},
      "Pid": {},
      "StartTime": {},
      "Uuid": {},
      "ParentUuid": {},
      "User": {},
      "UserId": {},
      "Euid": {},
      "Lineage": {}
    },
    "AddressFamily": {},
    "IanaProtocolNumber": {},
    "MemoryRegions": {}
  }
}
```

Information about the process and any required context values for a specific finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Process|object|false|none|none|
|Context|object|false|none|none|

<h2 id="tocS_S3BucketDetail">S3BucketDetail</h2>
<!-- backwards compatibility -->
<a id="schemas3bucketdetail"></a>
<a id="schema_S3BucketDetail"></a>
<a id="tocSs3bucketdetail"></a>
<a id="tocss3bucketdetail"></a>

```json
{
  "Arn": {},
  "Name": {},
  "Type": {},
  "CreatedAt": {},
  "Owner": {
    "Id": {}
  },
  "Tags": {},
  "DefaultServerSideEncryption": {
    "EncryptionType": {},
    "KmsMasterKeyArn": {}
  },
  "PublicAccess": {
    "PermissionConfiguration": {
      "BucketLevelPermissions": {
        "AccessControlList": {
          "AllowsPublicReadAccess": {},
          "AllowsPublicWriteAccess": {}
        },
        "BucketPolicy": {
          "AllowsPublicReadAccess": {},
          "AllowsPublicWriteAccess": {}
        },
        "BlockPublicAccess": {
          "IgnorePublicAcls": {},
          "RestrictPublicBuckets": {},
          "BlockPublicAcls": {},
          "BlockPublicPolicy": {}
        }
      },
      "AccountLevelPermissions": {
        "BlockPublicAccess": {
          "IgnorePublicAcls": {},
          "RestrictPublicBuckets": {},
          "BlockPublicAcls": {},
          "BlockPublicPolicy": {}
        }
      }
    },
    "EffectivePermission": {}
  }
}
```

Contains information on the S3 bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Name|object|false|none|none|
|Type|object|false|none|none|
|CreatedAt|object|false|none|none|
|Owner|object|false|none|none|
|Tags|object|false|none|none|
|DefaultServerSideEncryption|object|false|none|none|
|PublicAccess|object|false|none|none|

<h2 id="tocS_ScanStatus">ScanStatus</h2>
<!-- backwards compatibility -->
<a id="schemascanstatus"></a>
<a id="schema_ScanStatus"></a>
<a id="tocSscanstatus"></a>
<a id="tocsscanstatus"></a>

```json
"RUNNING"
```

<h2 id="tocS_TriggerDetails">TriggerDetails</h2>
<!-- backwards compatibility -->
<a id="schematriggerdetails"></a>
<a id="schema_TriggerDetails"></a>
<a id="tocStriggerdetails"></a>
<a id="tocstriggerdetails"></a>

```json
{
  "GuardDutyFindingId": {},
  "Description": {}
}
```

Represents the reason the scan was triggered.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GuardDutyFindingId|object|false|none|none|
|Description|object|false|none|none|

<h2 id="tocS_ScanResultDetails">ScanResultDetails</h2>
<!-- backwards compatibility -->
<a id="schemascanresultdetails"></a>
<a id="schema_ScanResultDetails"></a>
<a id="tocSscanresultdetails"></a>
<a id="tocsscanresultdetails"></a>

```json
{
  "ScanResult": {}
}
```

Represents the result of the scan.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScanResult|object|false|none|none|

<h2 id="tocS_Scan">Scan</h2>
<!-- backwards compatibility -->
<a id="schemascan"></a>
<a id="schema_Scan"></a>
<a id="tocSscan"></a>
<a id="tocsscan"></a>

```json
{
  "DetectorId": {},
  "AdminDetectorId": {},
  "ScanId": {},
  "ScanStatus": {},
  "FailureReason": {},
  "ScanStartTime": {},
  "ScanEndTime": {},
  "TriggerDetails": {
    "GuardDutyFindingId": {},
    "Description": {}
  },
  "ResourceDetails": {
    "InstanceArn": {}
  },
  "ScanResultDetails": {
    "ScanResult": {}
  },
  "AccountId": {},
  "TotalBytes": {},
  "FileCount": {},
  "AttachedVolumes": {}
}
```

Contains information about a malware scan.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DetectorId|object|false|none|none|
|AdminDetectorId|object|false|none|none|
|ScanId|object|false|none|none|
|ScanStatus|object|false|none|none|
|FailureReason|object|false|none|none|
|ScanStartTime|object|false|none|none|
|ScanEndTime|object|false|none|none|
|TriggerDetails|object|false|none|none|
|ResourceDetails|object|false|none|none|
|ScanResultDetails|object|false|none|none|
|AccountId|object|false|none|none|
|TotalBytes|object|false|none|none|
|FileCount|object|false|none|none|
|AttachedVolumes|object|false|none|none|

<h2 id="tocS_ScanCondition">ScanCondition</h2>
<!-- backwards compatibility -->
<a id="schemascancondition"></a>
<a id="schema_ScanCondition"></a>
<a id="tocSscancondition"></a>
<a id="tocsscancondition"></a>

```json
{
  "MapEquals": {}
}
```

Contains information about the condition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MapEquals|object|true|none|none|

<h2 id="tocS_ScanCriterionKey">ScanCriterionKey</h2>
<!-- backwards compatibility -->
<a id="schemascancriterionkey"></a>
<a id="schema_ScanCriterionKey"></a>
<a id="tocSscancriterionkey"></a>
<a id="tocsscancriterionkey"></a>

```json
"EC2_INSTANCE_TAG"
```

An enum value representing possible resource properties to match with given scan condition.

<h2 id="tocS_ScannedItemCount">ScannedItemCount</h2>
<!-- backwards compatibility -->
<a id="schemascanneditemcount"></a>
<a id="schema_ScannedItemCount"></a>
<a id="tocSscanneditemcount"></a>
<a id="tocsscanneditemcount"></a>

```json
{
  "TotalGb": {},
  "Files": {},
  "Volumes": {}
}
```

Total number of scanned files.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TotalGb|object|false|none|none|
|Files|object|false|none|none|
|Volumes|object|false|none|none|

<h2 id="tocS_ThreatsDetectedItemCount">ThreatsDetectedItemCount</h2>
<!-- backwards compatibility -->
<a id="schemathreatsdetecteditemcount"></a>
<a id="schema_ThreatsDetectedItemCount"></a>
<a id="tocSthreatsdetecteditemcount"></a>
<a id="tocsthreatsdetecteditemcount"></a>

```json
{
  "Files": {}
}
```

Contains total number of infected files.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Files|object|false|none|none|

<h2 id="tocS_ThreatDetectedByName">ThreatDetectedByName</h2>
<!-- backwards compatibility -->
<a id="schemathreatdetectedbyname"></a>
<a id="schema_ThreatDetectedByName"></a>
<a id="tocSthreatdetectedbyname"></a>
<a id="tocsthreatdetectedbyname"></a>

```json
{
  "ItemCount": {},
  "UniqueThreatNameCount": {},
  "Shortened": {},
  "ThreatNames": {}
}
```

Contains details about identified threats organized by threat name.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ItemCount|object|false|none|none|
|UniqueThreatNameCount|object|false|none|none|
|Shortened|object|false|none|none|
|ThreatNames|object|false|none|none|

<h2 id="tocS_ScanResult">ScanResult</h2>
<!-- backwards compatibility -->
<a id="schemascanresult"></a>
<a id="schema_ScanResult"></a>
<a id="tocSscanresult"></a>
<a id="tocsscanresult"></a>

```json
"CLEAN"
```

<h2 id="tocS_ScanThreatName">ScanThreatName</h2>
<!-- backwards compatibility -->
<a id="schemascanthreatname"></a>
<a id="schema_ScanThreatName"></a>
<a id="tocSscanthreatname"></a>
<a id="tocsscanthreatname"></a>

```json
{
  "Name": {},
  "Severity": {},
  "ItemCount": {},
  "FilePaths": {}
}
```

Contains files infected with the given threat providing details of malware name and severity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Severity|object|false|none|none|
|ItemCount|object|false|none|none|
|FilePaths|object|false|none|none|

<h2 id="tocS_ScanThreatNames">ScanThreatNames</h2>
<!-- backwards compatibility -->
<a id="schemascanthreatnames"></a>
<a id="schema_ScanThreatNames"></a>
<a id="tocSscanthreatnames"></a>
<a id="tocsscanthreatnames"></a>

```json
[
  {
    "Name": {},
    "Severity": {},
    "ItemCount": {},
    "FilePaths": {}
  }
]
```

<h2 id="tocS_SecurityGroup">SecurityGroup</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroup"></a>
<a id="schema_SecurityGroup"></a>
<a id="tocSsecuritygroup"></a>
<a id="tocssecuritygroup"></a>

```json
{
  "GroupId": {},
  "GroupName": {}
}
```

Contains information about the security groups associated with the EC2 instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupId|object|false|none|none|
|GroupName|object|false|none|none|

<h2 id="tocS_ServiceAdditionalInfo">ServiceAdditionalInfo</h2>
<!-- backwards compatibility -->
<a id="schemaserviceadditionalinfo"></a>
<a id="schema_ServiceAdditionalInfo"></a>
<a id="tocSserviceadditionalinfo"></a>
<a id="tocsserviceadditionalinfo"></a>

```json
{
  "Value": {},
  "Type": {}
}
```

Additional information about the generated finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Value|object|false|none|none|
|Type|object|false|none|none|

<h2 id="tocS_StartMonitoringMembersRequest">StartMonitoringMembersRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartmonitoringmembersrequest"></a>
<a id="schema_StartMonitoringMembersRequest"></a>
<a id="tocSstartmonitoringmembersrequest"></a>
<a id="tocsstartmonitoringmembersrequest"></a>

```json
{
  "AccountIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountIds|object|true|none|none|

<h2 id="tocS_StopMonitoringMembersRequest">StopMonitoringMembersRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopmonitoringmembersrequest"></a>
<a id="schema_StopMonitoringMembersRequest"></a>
<a id="tocSstopmonitoringmembersrequest"></a>
<a id="tocsstopmonitoringmembersrequest"></a>

```json
{
  "AccountIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountIds|object|true|none|none|

<h2 id="tocS_SubnetIds">SubnetIds</h2>
<!-- backwards compatibility -->
<a id="schemasubnetids"></a>
<a id="schema_SubnetIds"></a>
<a id="tocSsubnetids"></a>
<a id="tocssubnetids"></a>

```json
[
  "string"
]
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

Contains information about a tag associated with the EC2 instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Value|object|false|none|none|

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
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|true|none|none|

<h2 id="tocS_ThreatNames">ThreatNames</h2>
<!-- backwards compatibility -->
<a id="schemathreatnames"></a>
<a id="schema_ThreatNames"></a>
<a id="tocSthreatnames"></a>
<a id="tocsthreatnames"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ThreatIntelligenceDetail">ThreatIntelligenceDetail</h2>
<!-- backwards compatibility -->
<a id="schemathreatintelligencedetail"></a>
<a id="schema_ThreatIntelligenceDetail"></a>
<a id="tocSthreatintelligencedetail"></a>
<a id="tocsthreatintelligencedetail"></a>

```json
{
  "ThreatListName": {},
  "ThreatNames": {}
}
```

An instance of a threat intelligence detail that constitutes evidence for the finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ThreatListName|object|false|none|none|
|ThreatNames|object|false|none|none|

<h2 id="tocS_Total">Total</h2>
<!-- backwards compatibility -->
<a id="schematotal"></a>
<a id="schema_Total"></a>
<a id="tocStotal"></a>
<a id="tocstotal"></a>

```json
{
  "Amount": {},
  "Unit": {}
}
```

Contains the total usage with the corresponding currency unit for that value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Amount|object|false|none|none|
|Unit|object|false|none|none|

<h2 id="tocS_UnarchiveFindingsRequest">UnarchiveFindingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaunarchivefindingsrequest"></a>
<a id="schema_UnarchiveFindingsRequest"></a>
<a id="tocSunarchivefindingsrequest"></a>
<a id="tocsunarchivefindingsrequest"></a>

```json
{
  "FindingIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FindingIds|object|true|none|none|

<h2 id="tocS_UnprocessedAccount">UnprocessedAccount</h2>
<!-- backwards compatibility -->
<a id="schemaunprocessedaccount"></a>
<a id="schema_UnprocessedAccount"></a>
<a id="tocSunprocessedaccount"></a>
<a id="tocsunprocessedaccount"></a>

```json
{
  "AccountId": {},
  "Result": {}
}
```

Contains information about the accounts that weren't processed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|true|none|none|
|Result|object|true|none|none|

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{}
```

<h2 id="tocS_UpdateDetectorRequest">UpdateDetectorRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedetectorrequest"></a>
<a id="schema_UpdateDetectorRequest"></a>
<a id="tocSupdatedetectorrequest"></a>
<a id="tocsupdatedetectorrequest"></a>

```json
{
  "Enable": {},
  "FindingPublishingFrequency": {},
  "DataSources": {
    "S3Logs": {
      "Enable": {}
    },
    "Kubernetes": {
      "AuditLogs": {
        "Enable": {}
      }
    },
    "MalwareProtection": {
      "ScanEc2InstanceWithFindings": {
        "EbsVolumes": {}
      }
    }
  },
  "Features": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enable|object|false|none|none|
|FindingPublishingFrequency|object|false|none|none|
|DataSources|object|false|none|none|
|Features|object|false|none|none|

<h2 id="tocS_UpdateFilterRequest">UpdateFilterRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefilterrequest"></a>
<a id="schema_UpdateFilterRequest"></a>
<a id="tocSupdatefilterrequest"></a>
<a id="tocsupdatefilterrequest"></a>

```json
{
  "Description": {},
  "Action": {},
  "Rank": {},
  "FindingCriteria": {
    "Criterion": {
      "property1": {
        "Eq": {},
        "Neq": {},
        "Gt": {},
        "Gte": {},
        "Lt": {},
        "Lte": {},
        "Equals": {},
        "NotEquals": {},
        "GreaterThan": {},
        "GreaterThanOrEqual": {},
        "LessThan": {},
        "LessThanOrEqual": {}
      },
      "property2": {
        "Eq": {},
        "Neq": {},
        "Gt": {},
        "Gte": {},
        "Lt": {},
        "Lte": {},
        "Equals": {},
        "NotEquals": {},
        "GreaterThan": {},
        "GreaterThanOrEqual": {},
        "LessThan": {},
        "LessThanOrEqual": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|Action|object|false|none|none|
|Rank|object|false|none|none|
|FindingCriteria|object|false|none|none|

<h2 id="tocS_UpdateFindingsFeedbackRequest">UpdateFindingsFeedbackRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefindingsfeedbackrequest"></a>
<a id="schema_UpdateFindingsFeedbackRequest"></a>
<a id="tocSupdatefindingsfeedbackrequest"></a>
<a id="tocsupdatefindingsfeedbackrequest"></a>

```json
{
  "FindingIds": {},
  "Feedback": {},
  "Comments": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FindingIds|object|true|none|none|
|Feedback|object|true|none|none|
|Comments|object|false|none|none|

<h2 id="tocS_UpdateIPSetRequest">UpdateIPSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateipsetrequest"></a>
<a id="schema_UpdateIPSetRequest"></a>
<a id="tocSupdateipsetrequest"></a>
<a id="tocsupdateipsetrequest"></a>

```json
{
  "Name": {},
  "Location": {},
  "Activate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Location|object|false|none|none|
|Activate|object|false|none|none|

<h2 id="tocS_UpdateMalwareScanSettingsRequest">UpdateMalwareScanSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemalwarescansettingsrequest"></a>
<a id="schema_UpdateMalwareScanSettingsRequest"></a>
<a id="tocSupdatemalwarescansettingsrequest"></a>
<a id="tocsupdatemalwarescansettingsrequest"></a>

```json
{
  "ScanResourceCriteria": {
    "Include": {
      "property1": {
        "MapEquals": {}
      },
      "property2": {
        "MapEquals": {}
      }
    },
    "Exclude": {
      "property1": {
        "MapEquals": {}
      },
      "property2": {
        "MapEquals": {}
      }
    }
  },
  "EbsSnapshotPreservation": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScanResourceCriteria|object|false|none|none|
|EbsSnapshotPreservation|object|false|none|none|

<h2 id="tocS_UpdateMemberDetectorsRequest">UpdateMemberDetectorsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatememberdetectorsrequest"></a>
<a id="schema_UpdateMemberDetectorsRequest"></a>
<a id="tocSupdatememberdetectorsrequest"></a>
<a id="tocsupdatememberdetectorsrequest"></a>

```json
{
  "AccountIds": {},
  "DataSources": {
    "S3Logs": {
      "Enable": {}
    },
    "Kubernetes": {
      "AuditLogs": {
        "Enable": {}
      }
    },
    "MalwareProtection": {
      "ScanEc2InstanceWithFindings": {
        "EbsVolumes": {}
      }
    }
  },
  "Features": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountIds|object|true|none|none|
|DataSources|object|false|none|none|
|Features|object|false|none|none|

<h2 id="tocS_UpdateOrganizationConfigurationRequest">UpdateOrganizationConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateorganizationconfigurationrequest"></a>
<a id="schema_UpdateOrganizationConfigurationRequest"></a>
<a id="tocSupdateorganizationconfigurationrequest"></a>
<a id="tocsupdateorganizationconfigurationrequest"></a>

```json
{
  "AutoEnable": {},
  "DataSources": {
    "S3Logs": {
      "AutoEnable": {}
    },
    "Kubernetes": {
      "AuditLogs": {
        "AutoEnable": {}
      }
    },
    "MalwareProtection": {
      "ScanEc2InstanceWithFindings": {
        "EbsVolumes": {
          "AutoEnable": {}
        }
      }
    }
  },
  "Features": {},
  "AutoEnableOrganizationMembers": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoEnable|object|false|none|none|
|DataSources|object|false|none|none|
|Features|object|false|none|none|
|AutoEnableOrganizationMembers|object|false|none|none|

<h2 id="tocS_UpdatePublishingDestinationRequest">UpdatePublishingDestinationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepublishingdestinationrequest"></a>
<a id="schema_UpdatePublishingDestinationRequest"></a>
<a id="tocSupdatepublishingdestinationrequest"></a>
<a id="tocsupdatepublishingdestinationrequest"></a>

```json
{
  "DestinationProperties": {
    "DestinationArn": {},
    "KmsKeyArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DestinationProperties|object|false|none|none|

<h2 id="tocS_UpdateThreatIntelSetRequest">UpdateThreatIntelSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatethreatintelsetrequest"></a>
<a id="schema_UpdateThreatIntelSetRequest"></a>
<a id="tocSupdatethreatintelsetrequest"></a>
<a id="tocsupdatethreatintelsetrequest"></a>

```json
{
  "Name": {},
  "Location": {},
  "Activate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Location|object|false|none|none|
|Activate|object|false|none|none|

<h2 id="tocS_UsageAccountResult">UsageAccountResult</h2>
<!-- backwards compatibility -->
<a id="schemausageaccountresult"></a>
<a id="schema_UsageAccountResult"></a>
<a id="tocSusageaccountresult"></a>
<a id="tocsusageaccountresult"></a>

```json
{
  "AccountId": {},
  "Total": {
    "Amount": {},
    "Unit": {}
  }
}
```

Contains information on the total of usage based on account IDs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|false|none|none|
|Total|object|false|none|none|

<h2 id="tocS_UsageAccountResultList">UsageAccountResultList</h2>
<!-- backwards compatibility -->
<a id="schemausageaccountresultlist"></a>
<a id="schema_UsageAccountResultList"></a>
<a id="tocSusageaccountresultlist"></a>
<a id="tocsusageaccountresultlist"></a>

```json
[
  {
    "AccountId": {},
    "Total": {
      "Amount": {},
      "Unit": {}
    }
  }
]
```

<h2 id="tocS_UsageDataSourceResult">UsageDataSourceResult</h2>
<!-- backwards compatibility -->
<a id="schemausagedatasourceresult"></a>
<a id="schema_UsageDataSourceResult"></a>
<a id="tocSusagedatasourceresult"></a>
<a id="tocsusagedatasourceresult"></a>

```json
{
  "DataSource": {},
  "Total": {
    "Amount": {},
    "Unit": {}
  }
}
```

Contains information on the result of usage based on data source type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataSource|object|false|none|none|
|Total|object|false|none|none|

<h2 id="tocS_UsageDataSourceResultList">UsageDataSourceResultList</h2>
<!-- backwards compatibility -->
<a id="schemausagedatasourceresultlist"></a>
<a id="schema_UsageDataSourceResultList"></a>
<a id="tocSusagedatasourceresultlist"></a>
<a id="tocsusagedatasourceresultlist"></a>

```json
[
  {
    "DataSource": {},
    "Total": {
      "Amount": {},
      "Unit": {}
    }
  }
]
```

<h2 id="tocS_UsageFeature">UsageFeature</h2>
<!-- backwards compatibility -->
<a id="schemausagefeature"></a>
<a id="schema_UsageFeature"></a>
<a id="tocSusagefeature"></a>
<a id="tocsusagefeature"></a>

```json
"FLOW_LOGS"
```

<h2 id="tocS_UsageFeatureResult">UsageFeatureResult</h2>
<!-- backwards compatibility -->
<a id="schemausagefeatureresult"></a>
<a id="schema_UsageFeatureResult"></a>
<a id="tocSusagefeatureresult"></a>
<a id="tocsusagefeatureresult"></a>

```json
{
  "Feature": {},
  "Total": {
    "Amount": {},
    "Unit": {}
  }
}
```

Contains information about the result of the total usage based on the feature.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Feature|object|false|none|none|
|Total|object|false|none|none|

<h2 id="tocS_UsageFeatureResultList">UsageFeatureResultList</h2>
<!-- backwards compatibility -->
<a id="schemausagefeatureresultlist"></a>
<a id="schema_UsageFeatureResultList"></a>
<a id="tocSusagefeatureresultlist"></a>
<a id="tocsusagefeatureresultlist"></a>

```json
[
  {
    "Feature": {},
    "Total": {
      "Amount": {},
      "Unit": {}
    }
  }
]
```

<h2 id="tocS_UsageResourceResult">UsageResourceResult</h2>
<!-- backwards compatibility -->
<a id="schemausageresourceresult"></a>
<a id="schema_UsageResourceResult"></a>
<a id="tocSusageresourceresult"></a>
<a id="tocsusageresourceresult"></a>

```json
{
  "Resource": {},
  "Total": {
    "Amount": {},
    "Unit": {}
  }
}
```

Contains information on the sum of usage based on an Amazon Web Services resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Resource|object|false|none|none|
|Total|object|false|none|none|

<h2 id="tocS_UsageResourceResultList">UsageResourceResultList</h2>
<!-- backwards compatibility -->
<a id="schemausageresourceresultlist"></a>
<a id="schema_UsageResourceResultList"></a>
<a id="tocSusageresourceresultlist"></a>
<a id="tocsusageresourceresultlist"></a>

```json
[
  {
    "Resource": {},
    "Total": {
      "Amount": {},
      "Unit": {}
    }
  }
]
```

<h2 id="tocS_Volume">Volume</h2>
<!-- backwards compatibility -->
<a id="schemavolume"></a>
<a id="schema_Volume"></a>
<a id="tocSvolume"></a>
<a id="tocsvolume"></a>

```json
{
  "Name": {},
  "HostPath": {
    "Path": {}
  }
}
```

Volume used by the Kubernetes workload.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|HostPath|object|false|none|none|

<h2 id="tocS_VolumeDetail">VolumeDetail</h2>
<!-- backwards compatibility -->
<a id="schemavolumedetail"></a>
<a id="schema_VolumeDetail"></a>
<a id="tocSvolumedetail"></a>
<a id="tocsvolumedetail"></a>

```json
{
  "VolumeArn": {},
  "VolumeType": {},
  "DeviceName": {},
  "VolumeSizeInGB": {},
  "EncryptionType": {},
  "SnapshotArn": {},
  "KmsKeyArn": {}
}
```

Contains EBS volume details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VolumeArn|object|false|none|none|
|VolumeType|object|false|none|none|
|DeviceName|object|false|none|none|
|VolumeSizeInGB|object|false|none|none|
|EncryptionType|object|false|none|none|
|SnapshotArn|object|false|none|none|
|KmsKeyArn|object|false|none|none|

<h2 id="tocS_VolumeMount">VolumeMount</h2>
<!-- backwards compatibility -->
<a id="schemavolumemount"></a>
<a id="schema_VolumeMount"></a>
<a id="tocSvolumemount"></a>
<a id="tocsvolumemount"></a>

```json
{
  "Name": {},
  "MountPath": {}
}
```

Container volume mount.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|MountPath|object|false|none|none|
