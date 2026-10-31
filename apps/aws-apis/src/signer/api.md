<h1 id="aws-signer">AWS Signer v2017-08-25</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>AWS Signer is a fully managed code signing service to help you ensure the trust and integrity of your code. </p> <p>AWS Signer supports the following applications:</p> <p>With <i>code signing for AWS Lambda</i>, you can sign AWS Lambda deployment packages. Integrated support is provided for Amazon S3, Amazon CloudWatch, and AWS CloudTrail. In order to sign code, you create a signing profile and then use Signer to sign Lambda zip files in S3. </p> <p>With <i>code signing for IoT</i>, you can sign code for any IoT device that is supported by AWS. IoT code signing is available for <a href="http://docs.aws.amazon.com/freertos/latest/userguide/">Amazon FreeRTOS</a> and <a href="http://docs.aws.amazon.com/iot/latest/developerguide/">AWS IoT Device Management</a>, and is integrated with <a href="http://docs.aws.amazon.com/acm/latest/userguide/">AWS Certificate Manager (ACM)</a>. In order to sign code, you import a third-party code signing certificate using ACM, and use that to sign updates in Amazon FreeRTOS and AWS IoT Device Management. </p> <p>For more information about AWS Signer, see the <a href="http://docs.aws.amazon.com/signer/latest/developerguide/Welcome.html">AWS Signer Developer Guide</a>.</p> <p/>

Base URLs:

* <a href="http://signer.us-east-1.amazonaws.com">http://signer.us-east-1.amazonaws.com</a> - The signer multi-region endpoint

* <a href="https://signer.us-east-1.amazonaws.com">https://signer.us-east-1.amazonaws.com</a> - The signer multi-region endpoint

* <a href="http://signer.cn-north-1.amazonaws.com.cn">http://signer.cn-north-1.amazonaws.com.cn</a> - The signer endpoint for China (Beijing) and China (Ningxia)

* <a href="https://signer.cn-north-1.amazonaws.com.cn">https://signer.cn-north-1.amazonaws.com.cn</a> - The signer endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/signer/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-signer-default">Default</h1>

## ListProfilePermissions

<a id="opIdListProfilePermissions"></a>

> Code samples

```bash
curl https://signer.us-east-1.amazonaws.com/signing-profiles/string/permissions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /signing-profiles/{profileName}/permissions`

Lists the cross-account permissions associated with a signing profile.

<h3 id="listprofilepermissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|profileName|path|string|true|Name of the signing profile containing the cross-account permissions.|
|nextToken|query|string|false|String for specifying the next set of paginated results.|
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
  "revisionId": {},
  "policySizeBytes": {},
  "permissions": {},
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

> 484 Response

```json
null
```

<h3 id="listprofilepermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListProfilePermissionsResponse](#schemalistprofilepermissionsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AddProfilePermission

<a id="opIdAddProfilePermission"></a>

> Code samples

```bash
curl https://signer.us-east-1.amazonaws.com/signing-profiles/string/permissions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "profileVersion": "stringstri",
    "action": "string",
    "principal": "string",
    "revisionId": "string",
    "statementId": "string"
  }'
```

`POST /signing-profiles/{profileName}/permissions`

Adds cross-account permissions to a signing profile.

> Body parameter

```json
{
  "profileVersion": "stringstri",
  "action": "string",
  "principal": "string",
  "revisionId": "string",
  "statementId": "string"
}
```

<h3 id="addprofilepermission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|profileName|path|string|true|The human-readable name of the signing profile.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» profileVersion|body|string|false|The version of the signing profile.|
|» action|body|string|true|The AWS Signer action permitted as part of cross-account permissions.|
|» principal|body|string|true|The AWS principal receiving cross-account permissions. This may be an IAM role or another AWS account ID.|
|» revisionId|body|string|false|A unique identifier for the current profile revision.|
|» statementId|body|string|true|A unique identifier for the cross-account permission statement.|

> Example responses

> 200 Response

```json
{
  "revisionId": {}
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

<h3 id="addprofilepermission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AddProfilePermissionResponse](#schemaaddprofilepermissionresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ServiceLimitExceededException|[ServiceLimitExceededException](#schemaservicelimitexceededexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|486|486|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSigningProfile

<a id="opIdGetSigningProfile"></a>

> Code samples

```bash
curl https://signer.us-east-1.amazonaws.com/signing-profiles/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /signing-profiles/{profileName}`

Returns information on a specific signing profile.

<h3 id="getsigningprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|profileName|path|string|true|The name of the target signing profile.|
|profileOwner|query|string|false|The AWS account ID of the profile owner.|
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
  "profileName": {},
  "profileVersion": {},
  "profileVersionArn": {},
  "revocationRecord": {
    "revocationEffectiveFrom": {},
    "revokedAt": {},
    "revokedBy": {}
  },
  "signingMaterial": {
    "certificateArn": {}
  },
  "platformId": {},
  "platformDisplayName": {},
  "signatureValidityPeriod": {
    "value": {},
    "type": {}
  },
  "overrides": {
    "signingConfiguration": {
      "encryptionAlgorithm": {},
      "hashAlgorithm": {}
    },
    "signingImageFormat": {}
  },
  "signingParameters": {
    "property1": "string",
    "property2": "string"
  },
  "status": {},
  "statusReason": {},
  "arn": {},
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

> 483 Response

```json
null
```

<h3 id="getsigningprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSigningProfileResponse](#schemagetsigningprofileresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutSigningProfile

<a id="opIdPutSigningProfile"></a>

> Code samples

```bash
curl https://signer.us-east-1.amazonaws.com/signing-profiles/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "signingMaterial": {
      "certificateArn": {}
    },
    "signatureValidityPeriod": {
      "value": {},
      "type": {}
    },
    "platformId": "string",
    "overrides": {
      "signingConfiguration": {
        "encryptionAlgorithm": {},
        "hashAlgorithm": {}
      },
      "signingImageFormat": {}
    },
    "signingParameters": {
      "property1": "string",
      "property2": "string"
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`PUT /signing-profiles/{profileName}`

Creates a signing profile. A signing profile is a code signing template that can be used to carry out a pre-defined signing job. For more information, see <a href="http://docs.aws.amazon.com/signer/latest/developerguide/gs-profile.html">http://docs.aws.amazon.com/signer/latest/developerguide/gs-profile.html</a> 

> Body parameter

```json
{
  "signingMaterial": {
    "certificateArn": {}
  },
  "signatureValidityPeriod": {
    "value": {},
    "type": {}
  },
  "platformId": "string",
  "overrides": {
    "signingConfiguration": {
      "encryptionAlgorithm": {},
      "hashAlgorithm": {}
    },
    "signingImageFormat": {}
  },
  "signingParameters": {
    "property1": "string",
    "property2": "string"
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="putsigningprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|profileName|path|string|true|The name of the signing profile to be created.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» signingMaterial|body|object|false|The ACM certificate that is used to sign your code.|
|» » certificateArn|body|object|false|none|
|» signatureValidityPeriod|body|object|false|The validity period for a signing job.|
|» » value|body|object|false|none|
|» » type|body|object|false|none|
|» platformId|body|string|true|The ID of the signing platform to be created.|
|» overrides|body|object|false|Any overrides that are applied to the signing configuration of a code signing platform.|
|» » signingConfiguration|body|object|false|none|
|» » » encryptionAlgorithm|body|object|false|none|
|» » » hashAlgorithm|body|object|false|none|
|» » signingImageFormat|body|object|false|none|
|» signingParameters|body|object|false|Map of key-value pairs for signing. These can include any information that you want to use during signing.|
|» » **additionalProperties**|body|[SigningParameterValue](#schemasigningparametervalue)|false|none|
|» tags|body|object|false|Tags to be associated with the signing profile that is being created.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 200 Response

```json
{
  "arn": {},
  "profileVersion": {},
  "profileVersionArn": {}
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

<h3 id="putsigningprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutSigningProfileResponse](#schemaputsigningprofileresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CancelSigningProfile

<a id="opIdCancelSigningProfile"></a>

> Code samples

```bash
curl https://signer.us-east-1.amazonaws.com/signing-profiles/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /signing-profiles/{profileName}`

Changes the state of an <code>ACTIVE</code> signing profile to <code>CANCELED</code>. A canceled profile is still viewable with the <code>ListSigningProfiles</code> operation, but it cannot perform new signing jobs, and is deleted two years after cancelation.

<h3 id="cancelsigningprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|profileName|path|string|true|The name of the signing profile to be canceled.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

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

<h3 id="cancelsigningprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeSigningJob

<a id="opIdDescribeSigningJob"></a>

> Code samples

```bash
curl https://signer.us-east-1.amazonaws.com/signing-jobs/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /signing-jobs/{jobId}`

Returns information about a specific code signing job. You specify the job by using the <code>jobId</code> value that is returned by the <a>StartSigningJob</a> operation. 

<h3 id="describesigningjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|The ID of the signing job on input.|
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
  "jobId": {},
  "source": {
    "s3": {
      "bucketName": {},
      "key": {},
      "version": {}
    }
  },
  "signingMaterial": {
    "certificateArn": {}
  },
  "platformId": {},
  "platformDisplayName": {},
  "profileName": {},
  "profileVersion": {},
  "overrides": {
    "signingConfiguration": {
      "encryptionAlgorithm": {},
      "hashAlgorithm": {}
    },
    "signingImageFormat": {}
  },
  "signingParameters": {
    "property1": "string",
    "property2": "string"
  },
  "createdAt": {},
  "completedAt": {},
  "signatureExpiresAt": {},
  "requestedBy": {},
  "status": {},
  "statusReason": {},
  "revocationRecord": {
    "reason": {},
    "revokedAt": {},
    "revokedBy": {}
  },
  "signedObject": {
    "s3": {
      "bucketName": {},
      "key": {}
    }
  },
  "jobOwner": {},
  "jobInvoker": {}
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

<h3 id="describesigningjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeSigningJobResponse](#schemadescribesigningjobresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSigningPlatform

<a id="opIdGetSigningPlatform"></a>

> Code samples

```bash
curl https://signer.us-east-1.amazonaws.com/signing-platforms/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /signing-platforms/{platformId}`

Returns information on a specific signing platform.

<h3 id="getsigningplatform-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|platformId|path|string|true|The ID of the target signing platform.|
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
  "platformId": {},
  "displayName": {},
  "partner": {},
  "target": {},
  "category": {},
  "signingConfiguration": {
    "encryptionAlgorithmOptions": {
      "allowedValues": {},
      "defaultValue": {}
    },
    "hashAlgorithmOptions": {
      "allowedValues": {},
      "defaultValue": {}
    }
  },
  "signingImageFormat": {
    "supportedFormats": {},
    "defaultFormat": {}
  },
  "maxSizeInMB": {},
  "revocationSupported": {}
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

<h3 id="getsigningplatform-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSigningPlatformResponse](#schemagetsigningplatformresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSigningJobs

<a id="opIdListSigningJobs"></a>

> Code samples

```bash
curl https://signer.us-east-1.amazonaws.com/signing-jobs \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /signing-jobs`

Lists all your signing jobs. You can use the <code>maxResults</code> parameter to limit the number of signing jobs that are returned in the response. If additional jobs remain to be listed, code signing returns a <code>nextToken</code> value. Use this value in subsequent calls to <code>ListSigningJobs</code> to fetch the remaining values. You can continue calling <code>ListSigningJobs</code> with your <code>maxResults</code> parameter and with new values that code signing returns in the <code>nextToken</code> parameter until all of your signing jobs have been returned. 

<h3 id="listsigningjobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|status|query|string|false|A status value with which to filter your results.|
|platformId|query|string|false|The ID of microcontroller platform that you specified for the distribution of your code image.|
|requestedBy|query|string|false|The IAM principal that requested the signing job.|
|maxResults|query|integer|false|Specifies the maximum number of items to return in the response. Use this parameter when paginating results. If additional items exist beyond the number you specify, the <code>nextToken</code> element is set in the response. Use the <code>nextToken</code> value in a subsequent request to retrieve additional items. |
|nextToken|query|string|false|String for specifying the next set of paginated results to return. After you receive a response with truncated results, use this parameter in a subsequent request. Set it to the value of <code>nextToken</code> from the response that you just received.|
|isRevoked|query|boolean|false|Filters results to return only signing jobs with revoked signatures.|
|signatureExpiresBefore|query|string(date-time)|false|Filters results to return only signing jobs with signatures expiring before a specified timestamp.|
|signatureExpiresAfter|query|string(date-time)|false|Filters results to return only signing jobs with signatures expiring after a specified timestamp.|
|jobInvoker|query|string|false|Filters results to return only signing jobs initiated by a specified IAM entity.|
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
|status|InProgress|
|status|Failed|
|status|Succeeded|

> Example responses

> 200 Response

```json
{
  "jobs": {},
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

<h3 id="listsigningjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSigningJobsResponse](#schemalistsigningjobsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartSigningJob

<a id="opIdStartSigningJob"></a>

> Code samples

```bash
curl https://signer.us-east-1.amazonaws.com/signing-jobs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "source": {
      "s3": {
        "bucketName": {},
        "key": {},
        "version": {}
      }
    },
    "destination": {
      "s3": {
        "bucketName": {},
        "prefix": {}
      }
    },
    "profileName": "string",
    "clientRequestToken": "string",
    "profileOwner": "stringstring"
  }'
```

`POST /signing-jobs`

<p>Initiates a signing job to be performed on the code provided. Signing jobs are viewable by the <code>ListSigningJobs</code> operation for two years after they are performed. Note the following requirements: </p> <ul> <li> <p> You must create an Amazon S3 source bucket. For more information, see <a href="http://docs.aws.amazon.com/AmazonS3/latest/gsg/CreatingABucket.html">Create a Bucket</a> in the <i>Amazon S3 Getting Started Guide</i>. </p> </li> <li> <p>Your S3 source bucket must be version enabled.</p> </li> <li> <p>You must create an S3 destination bucket. Code signing uses your S3 destination bucket to write your signed code.</p> </li> <li> <p>You specify the name of the source and destination buckets when calling the <code>StartSigningJob</code> operation.</p> </li> <li> <p>You must also specify a request token that identifies your request to code signing.</p> </li> </ul> <p>You can call the <a>DescribeSigningJob</a> and the <a>ListSigningJobs</a> actions after you call <code>StartSigningJob</code>.</p> <p>For a Java example that shows how to use this action, see <a href="http://docs.aws.amazon.com/acm/latest/userguide/">http://docs.aws.amazon.com/acm/latest/userguide/</a> </p>

> Body parameter

```json
{
  "source": {
    "s3": {
      "bucketName": {},
      "key": {},
      "version": {}
    }
  },
  "destination": {
    "s3": {
      "bucketName": {},
      "prefix": {}
    }
  },
  "profileName": "string",
  "clientRequestToken": "string",
  "profileOwner": "stringstring"
}
```

<h3 id="startsigningjob-parameters">Parameters</h3>

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
|» source|body|object|true|An <code>S3Source</code> object that contains information about the S3 bucket where you saved your unsigned code.|
|» » s3|body|object|false|none|
|» » » bucketName|body|object|true|none|
|» » » key|body|object|true|none|
|» » » version|body|object|true|none|
|» destination|body|object|true|Points to an <code>S3Destination</code> object that contains information about your S3 bucket.|
|» » s3|body|object|false|none|
|» » » bucketName|body|object|false|none|
|» » » prefix|body|object|false|none|
|» profileName|body|string|true|The name of the signing profile.|
|» clientRequestToken|body|string|true|String that identifies the signing request. All calls after the first that use this token return the same response as the first call.|
|» profileOwner|body|string|false|The AWS account ID of the signing profile owner.|

> Example responses

> 200 Response

```json
{
  "jobId": {},
  "jobOwner": {}
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

<h3 id="startsigningjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartSigningJobResponse](#schemastartsigningjobresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSigningPlatforms

<a id="opIdListSigningPlatforms"></a>

> Code samples

```bash
curl https://signer.us-east-1.amazonaws.com/signing-platforms \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /signing-platforms`

Lists all signing platforms available in code signing that match the request parameters. If additional jobs remain to be listed, code signing returns a <code>nextToken</code> value. Use this value in subsequent calls to <code>ListSigningJobs</code> to fetch the remaining values. You can continue calling <code>ListSigningJobs</code> with your <code>maxResults</code> parameter and with new values that code signing returns in the <code>nextToken</code> parameter until all of your signing jobs have been returned.

<h3 id="listsigningplatforms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|category|query|string|false|The category type of a signing platform.|
|partner|query|string|false|Any partner entities connected to a signing platform.|
|target|query|string|false|The validation template that is used by the target signing platform.|
|maxResults|query|integer|false|The maximum number of results to be returned by this operation.|
|nextToken|query|string|false|Value for specifying the next set of paginated results to return. After you receive a response with truncated results, use this parameter in a subsequent request. Set it to the value of <code>nextToken</code> from the response that you just received.|
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
  "platforms": {},
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

<h3 id="listsigningplatforms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSigningPlatformsResponse](#schemalistsigningplatformsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSigningProfiles

<a id="opIdListSigningProfiles"></a>

> Code samples

```bash
curl https://signer.us-east-1.amazonaws.com/signing-profiles \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /signing-profiles`

Lists all available signing profiles in your AWS account. Returns only profiles with an <code>ACTIVE</code> status unless the <code>includeCanceled</code> request field is set to <code>true</code>. If additional jobs remain to be listed, code signing returns a <code>nextToken</code> value. Use this value in subsequent calls to <code>ListSigningJobs</code> to fetch the remaining values. You can continue calling <code>ListSigningJobs</code> with your <code>maxResults</code> parameter and with new values that code signing returns in the <code>nextToken</code> parameter until all of your signing jobs have been returned.

<h3 id="listsigningprofiles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|includeCanceled|query|boolean|false|Designates whether to include profiles with the status of <code>CANCELED</code>.|
|maxResults|query|integer|false|The maximum number of profiles to be returned.|
|nextToken|query|string|false|Value for specifying the next set of paginated results to return. After you receive a response with truncated results, use this parameter in a subsequent request. Set it to the value of <code>nextToken</code> from the response that you just received.|
|platformId|query|string|false|Filters results to return only signing jobs initiated for a specified signing platform.|
|statuses|query|[[SigningProfileStatus](#schemasigningprofilestatus)]|false|Filters results to return only signing jobs with statuses in the specified list.|
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
|statuses|Active|
|statuses|Canceled|
|statuses|Revoked|

> Example responses

> 200 Response

```json
{
  "profiles": {},
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

<h3 id="listsigningprofiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSigningProfilesResponse](#schemalistsigningprofilesresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://signer.us-east-1.amazonaws.com/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{resourceArn}`

Returns a list of the tags associated with a signing profile resource.

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The Amazon Resource Name (ARN) for the signing profile.|
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

> 483 Response

```json
null
```

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://signer.us-east-1.amazonaws.com/tags/string \
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

Adds one or more tags to a signing profile. Tags are labels that you can use to identify and organize your AWS resources. Each tag consists of a key and an optional value. To specify the signing profile, use its Amazon Resource Name (ARN). To specify the tag, use a key-value pair.

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
|resourceArn|path|string|true|The Amazon Resource Name (ARN) for the signing profile.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tags|body|object|true|One or more tags to be associated with the signing profile.|
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

> 483 Response

```json
null
```

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RemoveProfilePermission

<a id="opIdRemoveProfilePermission"></a>

> Code samples

```bash
curl 'https://signer.us-east-1.amazonaws.com/signing-profiles/string/permissions/string#revisionId?revisionId=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /signing-profiles/{profileName}/permissions/{statementId}#revisionId`

Removes cross-account permissions from a signing profile.

<h3 id="removeprofilepermission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|profileName|path|string|true|A human-readable name for the signing profile with permissions to be removed.|
|revisionId|query|string|true|An identifier for the current revision of the signing profile permissions.|
|statementId|path|string|true|A unique identifier for the cross-account permissions statement.|
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
  "revisionId": {}
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

<h3 id="removeprofilepermission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RemoveProfilePermissionResponse](#schemaremoveprofilepermissionresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RevokeSignature

<a id="opIdRevokeSignature"></a>

> Code samples

```bash
curl https://signer.us-east-1.amazonaws.com/signing-jobs/string/revoke \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "jobOwner": "stringstring",
    "reason": "string"
  }'
```

`PUT /signing-jobs/{jobId}/revoke`

Changes the state of a signing job to REVOKED. This indicates that the signature is no longer valid.

> Body parameter

```json
{
  "jobOwner": "stringstring",
  "reason": "string"
}
```

<h3 id="revokesignature-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|ID of the signing job to be revoked.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» jobOwner|body|string|false|AWS account ID of the job owner.|
|» reason|body|string|true|The reason for revoking the signing job.|

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

<h3 id="revokesignature-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RevokeSigningProfile

<a id="opIdRevokeSigningProfile"></a>

> Code samples

```bash
curl https://signer.us-east-1.amazonaws.com/signing-profiles/string/revoke \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "profileVersion": "stringstri",
    "reason": "string",
    "effectiveTime": "1970-01-01T00:00:00Z"
  }'
```

`PUT /signing-profiles/{profileName}/revoke`

Changes the state of a signing profile to REVOKED. This indicates that signatures generated using the signing profile after an effective start date are no longer valid.

> Body parameter

```json
{
  "profileVersion": "stringstri",
  "reason": "string",
  "effectiveTime": "1970-01-01T00:00:00Z"
}
```

<h3 id="revokesigningprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|profileName|path|string|true|The name of the signing profile to be revoked.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» profileVersion|body|string|true|The version of the signing profile to be revoked.|
|» reason|body|string|true|The reason for revoking a signing profile.|
|» effectiveTime|body|string(date-time)|true|A timestamp for when revocation of a Signing Profile should become effective. Signatures generated using the signing profile after this timestamp are not trusted.|

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

<h3 id="revokesigningprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://signer.us-east-1.amazonaws.com/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{resourceArn}#tagKeys`

Removes one or more tags from a signing profile. To remove the tags, specify a list of tag keys.

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The Amazon Resource Name (ARN) for the signing profile.|
|tagKeys|query|[[TagKey](#schematagkey)]|true|A list of tag keys to be removed from the signing profile.|
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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AddProfilePermissionResponse">AddProfilePermissionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaddprofilepermissionresponse"></a>
<a id="schema_AddProfilePermissionResponse"></a>
<a id="tocSaddprofilepermissionresponse"></a>
<a id="tocsaddprofilepermissionresponse"></a>

```json
{
  "revisionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|revisionId|object|false|none|none|

<h2 id="tocS_ValidationException">ValidationException</h2>
<!-- backwards compatibility -->
<a id="schemavalidationexception"></a>
<a id="schema_ValidationException"></a>
<a id="tocSvalidationexception"></a>
<a id="tocsvalidationexception"></a>

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

<h2 id="tocS_AccessDeniedException">AccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdeniedexception"></a>
<a id="schema_AccessDeniedException"></a>
<a id="tocSaccessdeniedexception"></a>
<a id="tocsaccessdeniedexception"></a>

```json
null
```

<h2 id="tocS_ServiceLimitExceededException">ServiceLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaservicelimitexceededexception"></a>
<a id="schema_ServiceLimitExceededException"></a>
<a id="tocSservicelimitexceededexception"></a>
<a id="tocsservicelimitexceededexception"></a>

```json
null
```

<h2 id="tocS_ConflictException">ConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaconflictexception"></a>
<a id="schema_ConflictException"></a>
<a id="tocSconflictexception"></a>
<a id="tocsconflictexception"></a>

```json
null
```

<h2 id="tocS_TooManyRequestsException">TooManyRequestsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanyrequestsexception"></a>
<a id="schema_TooManyRequestsException"></a>
<a id="tocStoomanyrequestsexception"></a>
<a id="tocstoomanyrequestsexception"></a>

```json
null
```

<h2 id="tocS_InternalServiceErrorException">InternalServiceErrorException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserviceerrorexception"></a>
<a id="schema_InternalServiceErrorException"></a>
<a id="tocSinternalserviceerrorexception"></a>
<a id="tocsinternalserviceerrorexception"></a>

```json
null
```

<h2 id="tocS_DescribeSigningJobResponse">DescribeSigningJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribesigningjobresponse"></a>
<a id="schema_DescribeSigningJobResponse"></a>
<a id="tocSdescribesigningjobresponse"></a>
<a id="tocsdescribesigningjobresponse"></a>

```json
{
  "jobId": {},
  "source": {
    "s3": {
      "bucketName": {},
      "key": {},
      "version": {}
    }
  },
  "signingMaterial": {
    "certificateArn": {}
  },
  "platformId": {},
  "platformDisplayName": {},
  "profileName": {},
  "profileVersion": {},
  "overrides": {
    "signingConfiguration": {
      "encryptionAlgorithm": {},
      "hashAlgorithm": {}
    },
    "signingImageFormat": {}
  },
  "signingParameters": {
    "property1": "string",
    "property2": "string"
  },
  "createdAt": {},
  "completedAt": {},
  "signatureExpiresAt": {},
  "requestedBy": {},
  "status": {},
  "statusReason": {},
  "revocationRecord": {
    "reason": {},
    "revokedAt": {},
    "revokedBy": {}
  },
  "signedObject": {
    "s3": {
      "bucketName": {},
      "key": {}
    }
  },
  "jobOwner": {},
  "jobInvoker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobId|object|false|none|none|
|source|object|false|none|none|
|signingMaterial|object|false|none|none|
|platformId|object|false|none|none|
|platformDisplayName|object|false|none|none|
|profileName|object|false|none|none|
|profileVersion|object|false|none|none|
|overrides|object|false|none|none|
|signingParameters|object|false|none|none|
|createdAt|object|false|none|none|
|completedAt|object|false|none|none|
|signatureExpiresAt|object|false|none|none|
|requestedBy|object|false|none|none|
|status|object|false|none|none|
|statusReason|object|false|none|none|
|revocationRecord|object|false|none|none|
|signedObject|object|false|none|none|
|jobOwner|object|false|none|none|
|jobInvoker|object|false|none|none|

<h2 id="tocS_GetSigningPlatformResponse">GetSigningPlatformResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsigningplatformresponse"></a>
<a id="schema_GetSigningPlatformResponse"></a>
<a id="tocSgetsigningplatformresponse"></a>
<a id="tocsgetsigningplatformresponse"></a>

```json
{
  "platformId": {},
  "displayName": {},
  "partner": {},
  "target": {},
  "category": {},
  "signingConfiguration": {
    "encryptionAlgorithmOptions": {
      "allowedValues": {},
      "defaultValue": {}
    },
    "hashAlgorithmOptions": {
      "allowedValues": {},
      "defaultValue": {}
    }
  },
  "signingImageFormat": {
    "supportedFormats": {},
    "defaultFormat": {}
  },
  "maxSizeInMB": {},
  "revocationSupported": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|platformId|object|false|none|none|
|displayName|object|false|none|none|
|partner|object|false|none|none|
|target|object|false|none|none|
|category|object|false|none|none|
|signingConfiguration|object|false|none|none|
|signingImageFormat|object|false|none|none|
|maxSizeInMB|object|false|none|none|
|revocationSupported|object|false|none|none|

<h2 id="tocS_GetSigningProfileResponse">GetSigningProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsigningprofileresponse"></a>
<a id="schema_GetSigningProfileResponse"></a>
<a id="tocSgetsigningprofileresponse"></a>
<a id="tocsgetsigningprofileresponse"></a>

```json
{
  "profileName": {},
  "profileVersion": {},
  "profileVersionArn": {},
  "revocationRecord": {
    "revocationEffectiveFrom": {},
    "revokedAt": {},
    "revokedBy": {}
  },
  "signingMaterial": {
    "certificateArn": {}
  },
  "platformId": {},
  "platformDisplayName": {},
  "signatureValidityPeriod": {
    "value": {},
    "type": {}
  },
  "overrides": {
    "signingConfiguration": {
      "encryptionAlgorithm": {},
      "hashAlgorithm": {}
    },
    "signingImageFormat": {}
  },
  "signingParameters": {
    "property1": "string",
    "property2": "string"
  },
  "status": {},
  "statusReason": {},
  "arn": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|profileName|object|false|none|none|
|profileVersion|object|false|none|none|
|profileVersionArn|object|false|none|none|
|revocationRecord|[SigningProfileRevocationRecord](#schemasigningprofilerevocationrecord)|false|none|Revocation information for a signing profile.|
|signingMaterial|object|false|none|none|
|platformId|object|false|none|none|
|platformDisplayName|object|false|none|none|
|signatureValidityPeriod|[SignatureValidityPeriod](#schemasignaturevalidityperiod)|false|none|The validity period for a signing job.|
|overrides|object|false|none|none|
|signingParameters|object|false|none|none|
|status|object|false|none|none|
|statusReason|object|false|none|none|
|arn|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_ListProfilePermissionsResponse">ListProfilePermissionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistprofilepermissionsresponse"></a>
<a id="schema_ListProfilePermissionsResponse"></a>
<a id="tocSlistprofilepermissionsresponse"></a>
<a id="tocslistprofilepermissionsresponse"></a>

```json
{
  "revisionId": {},
  "policySizeBytes": {},
  "permissions": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|revisionId|object|false|none|none|
|policySizeBytes|object|false|none|none|
|permissions|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListSigningJobsResponse">ListSigningJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsigningjobsresponse"></a>
<a id="schema_ListSigningJobsResponse"></a>
<a id="tocSlistsigningjobsresponse"></a>
<a id="tocslistsigningjobsresponse"></a>

```json
{
  "jobs": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobs|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListSigningPlatformsResponse">ListSigningPlatformsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsigningplatformsresponse"></a>
<a id="schema_ListSigningPlatformsResponse"></a>
<a id="tocSlistsigningplatformsresponse"></a>
<a id="tocslistsigningplatformsresponse"></a>

```json
{
  "platforms": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|platforms|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListSigningProfilesResponse">ListSigningProfilesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsigningprofilesresponse"></a>
<a id="schema_ListSigningProfilesResponse"></a>
<a id="tocSlistsigningprofilesresponse"></a>
<a id="tocslistsigningprofilesresponse"></a>

```json
{
  "profiles": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|profiles|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_SigningProfileStatus">SigningProfileStatus</h2>
<!-- backwards compatibility -->
<a id="schemasigningprofilestatus"></a>
<a id="schema_SigningProfileStatus"></a>
<a id="tocSsigningprofilestatus"></a>
<a id="tocssigningprofilestatus"></a>

```json
"Active"
```

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

<h2 id="tocS_BadRequestException">BadRequestException</h2>
<!-- backwards compatibility -->
<a id="schemabadrequestexception"></a>
<a id="schema_BadRequestException"></a>
<a id="tocSbadrequestexception"></a>
<a id="tocsbadrequestexception"></a>

```json
null
```

<h2 id="tocS_NotFoundException">NotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemanotfoundexception"></a>
<a id="schema_NotFoundException"></a>
<a id="tocSnotfoundexception"></a>
<a id="tocsnotfoundexception"></a>

```json
null
```

<h2 id="tocS_PutSigningProfileResponse">PutSigningProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputsigningprofileresponse"></a>
<a id="schema_PutSigningProfileResponse"></a>
<a id="tocSputsigningprofileresponse"></a>
<a id="tocsputsigningprofileresponse"></a>

```json
{
  "arn": {},
  "profileVersion": {},
  "profileVersionArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|profileVersion|object|false|none|none|
|profileVersionArn|object|false|none|none|

<h2 id="tocS_CertificateArn">CertificateArn</h2>
<!-- backwards compatibility -->
<a id="schemacertificatearn"></a>
<a id="schema_CertificateArn"></a>
<a id="tocScertificatearn"></a>
<a id="tocscertificatearn"></a>

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

<h2 id="tocS_ValidityType">ValidityType</h2>
<!-- backwards compatibility -->
<a id="schemavaliditytype"></a>
<a id="schema_ValidityType"></a>
<a id="tocSvaliditytype"></a>
<a id="tocsvaliditytype"></a>

```json
"DAYS"
```

<h2 id="tocS_SigningConfigurationOverrides">SigningConfigurationOverrides</h2>
<!-- backwards compatibility -->
<a id="schemasigningconfigurationoverrides"></a>
<a id="schema_SigningConfigurationOverrides"></a>
<a id="tocSsigningconfigurationoverrides"></a>
<a id="tocssigningconfigurationoverrides"></a>

```json
{
  "encryptionAlgorithm": {},
  "hashAlgorithm": {}
}
```

A signing configuration that overrides the default encryption or hash algorithm of a signing job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encryptionAlgorithm|object|false|none|none|
|hashAlgorithm|object|false|none|none|

<h2 id="tocS_ImageFormat">ImageFormat</h2>
<!-- backwards compatibility -->
<a id="schemaimageformat"></a>
<a id="schema_ImageFormat"></a>
<a id="tocSimageformat"></a>
<a id="tocsimageformat"></a>

```json
"JSON"
```

<h2 id="tocS_SigningParameterValue">SigningParameterValue</h2>
<!-- backwards compatibility -->
<a id="schemasigningparametervalue"></a>
<a id="schema_SigningParameterValue"></a>
<a id="tocSsigningparametervalue"></a>
<a id="tocssigningparametervalue"></a>

```json
"string"
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

<h2 id="tocS_RemoveProfilePermissionResponse">RemoveProfilePermissionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaremoveprofilepermissionresponse"></a>
<a id="schema_RemoveProfilePermissionResponse"></a>
<a id="tocSremoveprofilepermissionresponse"></a>
<a id="tocsremoveprofilepermissionresponse"></a>

```json
{
  "revisionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|revisionId|object|false|none|none|

<h2 id="tocS_StartSigningJobResponse">StartSigningJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartsigningjobresponse"></a>
<a id="schema_StartSigningJobResponse"></a>
<a id="tocSstartsigningjobresponse"></a>
<a id="tocsstartsigningjobresponse"></a>

```json
{
  "jobId": {},
  "jobOwner": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobId|object|false|none|none|
|jobOwner|object|false|none|none|

<h2 id="tocS_S3Source">S3Source</h2>
<!-- backwards compatibility -->
<a id="schemas3source"></a>
<a id="schema_S3Source"></a>
<a id="tocSs3source"></a>
<a id="tocss3source"></a>

```json
{
  "bucketName": {},
  "key": {},
  "version": {}
}
```

Information about the S3 bucket where you saved your unsigned code.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucketName|object|true|none|none|
|key|object|true|none|none|
|version|object|true|none|none|

<h2 id="tocS_S3Destination">S3Destination</h2>
<!-- backwards compatibility -->
<a id="schemas3destination"></a>
<a id="schema_S3Destination"></a>
<a id="tocSs3destination"></a>
<a id="tocss3destination"></a>

```json
{
  "bucketName": {},
  "prefix": {}
}
```

The name and prefix of the S3 bucket where code signing saves your signed objects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucketName|object|false|none|none|
|prefix|object|false|none|none|

<h2 id="tocS_ThrottlingException">ThrottlingException</h2>
<!-- backwards compatibility -->
<a id="schemathrottlingexception"></a>
<a id="schema_ThrottlingException"></a>
<a id="tocSthrottlingexception"></a>
<a id="tocsthrottlingexception"></a>

```json
null
```

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

<h2 id="tocS_AccountId">AccountId</h2>
<!-- backwards compatibility -->
<a id="schemaaccountid"></a>
<a id="schema_AccountId"></a>
<a id="tocSaccountid"></a>
<a id="tocsaccountid"></a>

```json
"stringstring"
```

<h2 id="tocS_ProfileName">ProfileName</h2>
<!-- backwards compatibility -->
<a id="schemaprofilename"></a>
<a id="schema_ProfileName"></a>
<a id="tocSprofilename"></a>
<a id="tocsprofilename"></a>

```json
"string"
```

<h2 id="tocS_ProfileVersion">ProfileVersion</h2>
<!-- backwards compatibility -->
<a id="schemaprofileversion"></a>
<a id="schema_ProfileVersion"></a>
<a id="tocSprofileversion"></a>
<a id="tocsprofileversion"></a>

```json
"stringstri"
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

<h2 id="tocS_AddProfilePermissionRequest">AddProfilePermissionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddprofilepermissionrequest"></a>
<a id="schema_AddProfilePermissionRequest"></a>
<a id="tocSaddprofilepermissionrequest"></a>
<a id="tocsaddprofilepermissionrequest"></a>

```json
{
  "profileVersion": {},
  "action": {},
  "principal": {},
  "revisionId": {},
  "statementId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|profileVersion|object|false|none|none|
|action|object|true|none|none|
|principal|object|true|none|none|
|revisionId|object|false|none|none|
|statementId|object|true|none|none|

<h2 id="tocS_Arn">Arn</h2>
<!-- backwards compatibility -->
<a id="schemaarn"></a>
<a id="schema_Arn"></a>
<a id="tocSarn"></a>
<a id="tocsarn"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_BucketName">BucketName</h2>
<!-- backwards compatibility -->
<a id="schemabucketname"></a>
<a id="schema_BucketName"></a>
<a id="tocSbucketname"></a>
<a id="tocsbucketname"></a>

```json
"string"
```

<h2 id="tocS_CancelSigningProfileRequest">CancelSigningProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemacancelsigningprofilerequest"></a>
<a id="schema_CancelSigningProfileRequest"></a>
<a id="tocScancelsigningprofilerequest"></a>
<a id="tocscancelsigningprofilerequest"></a>

```json
{}
```

<h2 id="tocS_Category">Category</h2>
<!-- backwards compatibility -->
<a id="schemacategory"></a>
<a id="schema_Category"></a>
<a id="tocScategory"></a>
<a id="tocscategory"></a>

```json
"AWSIoT"
```

<h2 id="tocS_ClientRequestToken">ClientRequestToken</h2>
<!-- backwards compatibility -->
<a id="schemaclientrequesttoken"></a>
<a id="schema_ClientRequestToken"></a>
<a id="tocSclientrequesttoken"></a>
<a id="tocsclientrequesttoken"></a>

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

<h2 id="tocS_DescribeSigningJobRequest">DescribeSigningJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribesigningjobrequest"></a>
<a id="schema_DescribeSigningJobRequest"></a>
<a id="tocSdescribesigningjobrequest"></a>
<a id="tocsdescribesigningjobrequest"></a>

```json
{}
```

<h2 id="tocS_Source">Source</h2>
<!-- backwards compatibility -->
<a id="schemasource"></a>
<a id="schema_Source"></a>
<a id="tocSsource"></a>
<a id="tocssource"></a>

```json
{
  "s3": {
    "bucketName": {},
    "key": {},
    "version": {}
  }
}
```

An <code>S3Source</code> object that contains information about the S3 bucket where you saved your unsigned code.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|s3|object|false|none|none|

<h2 id="tocS_SigningMaterial">SigningMaterial</h2>
<!-- backwards compatibility -->
<a id="schemasigningmaterial"></a>
<a id="schema_SigningMaterial"></a>
<a id="tocSsigningmaterial"></a>
<a id="tocssigningmaterial"></a>

```json
{
  "certificateArn": {}
}
```

The ACM certificate that is used to sign your code.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificateArn|object|true|none|none|

<h2 id="tocS_PlatformId">PlatformId</h2>
<!-- backwards compatibility -->
<a id="schemaplatformid"></a>
<a id="schema_PlatformId"></a>
<a id="tocSplatformid"></a>
<a id="tocsplatformid"></a>

```json
"string"
```

<h2 id="tocS_DisplayName">DisplayName</h2>
<!-- backwards compatibility -->
<a id="schemadisplayname"></a>
<a id="schema_DisplayName"></a>
<a id="tocSdisplayname"></a>
<a id="tocsdisplayname"></a>

```json
"string"
```

<h2 id="tocS_SigningPlatformOverrides">SigningPlatformOverrides</h2>
<!-- backwards compatibility -->
<a id="schemasigningplatformoverrides"></a>
<a id="schema_SigningPlatformOverrides"></a>
<a id="tocSsigningplatformoverrides"></a>
<a id="tocssigningplatformoverrides"></a>

```json
{
  "signingConfiguration": {
    "encryptionAlgorithm": {},
    "hashAlgorithm": {}
  },
  "signingImageFormat": {}
}
```

Any overrides that are applied to the signing configuration of a code signing platform.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|signingConfiguration|object|false|none|none|
|signingImageFormat|object|false|none|none|

<h2 id="tocS_SigningParameters">SigningParameters</h2>
<!-- backwards compatibility -->
<a id="schemasigningparameters"></a>
<a id="schema_SigningParameters"></a>
<a id="tocSsigningparameters"></a>
<a id="tocssigningparameters"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[SigningParameterValue](#schemasigningparametervalue)|false|none|none|

<h2 id="tocS_Timestamp">Timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_Timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_RequestedBy">RequestedBy</h2>
<!-- backwards compatibility -->
<a id="schemarequestedby"></a>
<a id="schema_RequestedBy"></a>
<a id="tocSrequestedby"></a>
<a id="tocsrequestedby"></a>

```json
"string"
```

<h2 id="tocS_SigningStatus">SigningStatus</h2>
<!-- backwards compatibility -->
<a id="schemasigningstatus"></a>
<a id="schema_SigningStatus"></a>
<a id="tocSsigningstatus"></a>
<a id="tocssigningstatus"></a>

```json
"InProgress"
```

<h2 id="tocS_StatusReason">StatusReason</h2>
<!-- backwards compatibility -->
<a id="schemastatusreason"></a>
<a id="schema_StatusReason"></a>
<a id="tocSstatusreason"></a>
<a id="tocsstatusreason"></a>

```json
"string"
```

<h2 id="tocS_SigningJobRevocationRecord">SigningJobRevocationRecord</h2>
<!-- backwards compatibility -->
<a id="schemasigningjobrevocationrecord"></a>
<a id="schema_SigningJobRevocationRecord"></a>
<a id="tocSsigningjobrevocationrecord"></a>
<a id="tocssigningjobrevocationrecord"></a>

```json
{
  "reason": {},
  "revokedAt": {},
  "revokedBy": {}
}
```

Revocation information for a signing job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|object|false|none|none|
|revokedAt|object|false|none|none|
|revokedBy|object|false|none|none|

<h2 id="tocS_SignedObject">SignedObject</h2>
<!-- backwards compatibility -->
<a id="schemasignedobject"></a>
<a id="schema_SignedObject"></a>
<a id="tocSsignedobject"></a>
<a id="tocssignedobject"></a>

```json
{
  "s3": {
    "bucketName": {},
    "key": {}
  }
}
```

Points to an <code>S3SignedObject</code> object that contains information about your signed code image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|s3|object|false|none|none|

<h2 id="tocS_Destination">Destination</h2>
<!-- backwards compatibility -->
<a id="schemadestination"></a>
<a id="schema_Destination"></a>
<a id="tocSdestination"></a>
<a id="tocsdestination"></a>

```json
{
  "s3": {
    "bucketName": {},
    "prefix": {}
  }
}
```

Points to an <code>S3Destination</code> object that contains information about your S3 bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|s3|object|false|none|none|

<h2 id="tocS_EncryptionAlgorithm">EncryptionAlgorithm</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionalgorithm"></a>
<a id="schema_EncryptionAlgorithm"></a>
<a id="tocSencryptionalgorithm"></a>
<a id="tocsencryptionalgorithm"></a>

```json
"RSA"
```

<h2 id="tocS_EncryptionAlgorithms">EncryptionAlgorithms</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionalgorithms"></a>
<a id="schema_EncryptionAlgorithms"></a>
<a id="tocSencryptionalgorithms"></a>
<a id="tocsencryptionalgorithms"></a>

```json
[
  "RSA"
]
```

<h2 id="tocS_EncryptionAlgorithmOptions">EncryptionAlgorithmOptions</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionalgorithmoptions"></a>
<a id="schema_EncryptionAlgorithmOptions"></a>
<a id="tocSencryptionalgorithmoptions"></a>
<a id="tocsencryptionalgorithmoptions"></a>

```json
{
  "allowedValues": {},
  "defaultValue": {}
}
```

The encryption algorithm options that are available to a code signing job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowedValues|object|true|none|none|
|defaultValue|object|true|none|none|

<h2 id="tocS_GetSigningPlatformRequest">GetSigningPlatformRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsigningplatformrequest"></a>
<a id="schema_GetSigningPlatformRequest"></a>
<a id="tocSgetsigningplatformrequest"></a>
<a id="tocsgetsigningplatformrequest"></a>

```json
{}
```

<h2 id="tocS_SigningConfiguration">SigningConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemasigningconfiguration"></a>
<a id="schema_SigningConfiguration"></a>
<a id="tocSsigningconfiguration"></a>
<a id="tocssigningconfiguration"></a>

```json
{
  "encryptionAlgorithmOptions": {
    "allowedValues": {},
    "defaultValue": {}
  },
  "hashAlgorithmOptions": {
    "allowedValues": {},
    "defaultValue": {}
  }
}
```

The configuration of a code signing operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encryptionAlgorithmOptions|object|true|none|none|
|hashAlgorithmOptions|object|true|none|none|

<h2 id="tocS_SigningImageFormat">SigningImageFormat</h2>
<!-- backwards compatibility -->
<a id="schemasigningimageformat"></a>
<a id="schema_SigningImageFormat"></a>
<a id="tocSsigningimageformat"></a>
<a id="tocssigningimageformat"></a>

```json
{
  "supportedFormats": {},
  "defaultFormat": {}
}
```

The image format of a code signing platform or profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|supportedFormats|object|true|none|none|
|defaultFormat|object|true|none|none|

<h2 id="tocS_MaxSizeInMB">MaxSizeInMB</h2>
<!-- backwards compatibility -->
<a id="schemamaxsizeinmb"></a>
<a id="schema_MaxSizeInMB"></a>
<a id="tocSmaxsizeinmb"></a>
<a id="tocsmaxsizeinmb"></a>

```json
0
```

<h2 id="tocS_bool">bool</h2>
<!-- backwards compatibility -->
<a id="schemabool"></a>
<a id="schema_bool"></a>
<a id="tocSbool"></a>
<a id="tocsbool"></a>

```json
true
```

<h2 id="tocS_GetSigningProfileRequest">GetSigningProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsigningprofilerequest"></a>
<a id="schema_GetSigningProfileRequest"></a>
<a id="tocSgetsigningprofilerequest"></a>
<a id="tocsgetsigningprofilerequest"></a>

```json
{}
```

<h2 id="tocS_SigningProfileRevocationRecord">SigningProfileRevocationRecord</h2>
<!-- backwards compatibility -->
<a id="schemasigningprofilerevocationrecord"></a>
<a id="schema_SigningProfileRevocationRecord"></a>
<a id="tocSsigningprofilerevocationrecord"></a>
<a id="tocssigningprofilerevocationrecord"></a>

```json
{
  "revocationEffectiveFrom": {},
  "revokedAt": {},
  "revokedBy": {}
}
```

Revocation information for a signing profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|revocationEffectiveFrom|object|false|none|none|
|revokedAt|object|false|none|none|
|revokedBy|object|false|none|none|

<h2 id="tocS_SignatureValidityPeriod">SignatureValidityPeriod</h2>
<!-- backwards compatibility -->
<a id="schemasignaturevalidityperiod"></a>
<a id="schema_SignatureValidityPeriod"></a>
<a id="tocSsignaturevalidityperiod"></a>
<a id="tocssignaturevalidityperiod"></a>

```json
{
  "value": {},
  "type": {}
}
```

The validity period for a signing job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|object|false|none|none|
|type|object|false|none|none|

<h2 id="tocS_string">string</h2>
<!-- backwards compatibility -->
<a id="schemastring-1"></a>
<a id="schema_string"></a>
<a id="tocSstring-1"></a>
<a id="tocsstring-1"></a>

```json
"string"
```

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

<h2 id="tocS_HashAlgorithm">HashAlgorithm</h2>
<!-- backwards compatibility -->
<a id="schemahashalgorithm"></a>
<a id="schema_HashAlgorithm"></a>
<a id="tocShashalgorithm"></a>
<a id="tocshashalgorithm"></a>

```json
"SHA1"
```

<h2 id="tocS_HashAlgorithms">HashAlgorithms</h2>
<!-- backwards compatibility -->
<a id="schemahashalgorithms"></a>
<a id="schema_HashAlgorithms"></a>
<a id="tocShashalgorithms"></a>
<a id="tocshashalgorithms"></a>

```json
[
  "SHA1"
]
```

<h2 id="tocS_HashAlgorithmOptions">HashAlgorithmOptions</h2>
<!-- backwards compatibility -->
<a id="schemahashalgorithmoptions"></a>
<a id="schema_HashAlgorithmOptions"></a>
<a id="tocShashalgorithmoptions"></a>
<a id="tocshashalgorithmoptions"></a>

```json
{
  "allowedValues": {},
  "defaultValue": {}
}
```

The hash algorithms that are available to a code signing job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowedValues|object|true|none|none|
|defaultValue|object|true|none|none|

<h2 id="tocS_ImageFormats">ImageFormats</h2>
<!-- backwards compatibility -->
<a id="schemaimageformats"></a>
<a id="schema_ImageFormats"></a>
<a id="tocSimageformats"></a>
<a id="tocsimageformats"></a>

```json
[
  "JSON"
]
```

<h2 id="tocS_Key">Key</h2>
<!-- backwards compatibility -->
<a id="schemakey"></a>
<a id="schema_Key"></a>
<a id="tocSkey"></a>
<a id="tocskey"></a>

```json
"string"
```

<h2 id="tocS_ListProfilePermissionsRequest">ListProfilePermissionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistprofilepermissionsrequest"></a>
<a id="schema_ListProfilePermissionsRequest"></a>
<a id="tocSlistprofilepermissionsrequest"></a>
<a id="tocslistprofilepermissionsrequest"></a>

```json
{}
```

<h2 id="tocS_PolicySizeBytes">PolicySizeBytes</h2>
<!-- backwards compatibility -->
<a id="schemapolicysizebytes"></a>
<a id="schema_PolicySizeBytes"></a>
<a id="tocSpolicysizebytes"></a>
<a id="tocspolicysizebytes"></a>

```json
0
```

<h2 id="tocS_Permissions">Permissions</h2>
<!-- backwards compatibility -->
<a id="schemapermissions"></a>
<a id="schema_Permissions"></a>
<a id="tocSpermissions"></a>
<a id="tocspermissions"></a>

```json
[
  {
    "action": {},
    "principal": {},
    "statementId": {},
    "profileVersion": {}
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

<h2 id="tocS_NextToken">NextToken</h2>
<!-- backwards compatibility -->
<a id="schemanexttoken"></a>
<a id="schema_NextToken"></a>
<a id="tocSnexttoken"></a>
<a id="tocsnexttoken"></a>

```json
"string"
```

<h2 id="tocS_ListSigningJobsRequest">ListSigningJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistsigningjobsrequest"></a>
<a id="schema_ListSigningJobsRequest"></a>
<a id="tocSlistsigningjobsrequest"></a>
<a id="tocslistsigningjobsrequest"></a>

```json
{}
```

<h2 id="tocS_SigningJobs">SigningJobs</h2>
<!-- backwards compatibility -->
<a id="schemasigningjobs"></a>
<a id="schema_SigningJobs"></a>
<a id="tocSsigningjobs"></a>
<a id="tocssigningjobs"></a>

```json
[
  {
    "jobId": {},
    "source": {
      "s3": {
        "bucketName": {},
        "key": {},
        "version": {}
      }
    },
    "signedObject": {
      "s3": {
        "bucketName": {},
        "key": {}
      }
    },
    "signingMaterial": {
      "certificateArn": {}
    },
    "createdAt": {},
    "status": {},
    "isRevoked": {},
    "profileName": {},
    "profileVersion": {},
    "platformId": {},
    "platformDisplayName": {},
    "signatureExpiresAt": {},
    "jobOwner": {},
    "jobInvoker": {}
  }
]
```

<h2 id="tocS_ListSigningPlatformsRequest">ListSigningPlatformsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistsigningplatformsrequest"></a>
<a id="schema_ListSigningPlatformsRequest"></a>
<a id="tocSlistsigningplatformsrequest"></a>
<a id="tocslistsigningplatformsrequest"></a>

```json
{}
```

<h2 id="tocS_SigningPlatforms">SigningPlatforms</h2>
<!-- backwards compatibility -->
<a id="schemasigningplatforms"></a>
<a id="schema_SigningPlatforms"></a>
<a id="tocSsigningplatforms"></a>
<a id="tocssigningplatforms"></a>

```json
[
  {
    "platformId": {},
    "displayName": {},
    "partner": {},
    "target": {},
    "category": {},
    "signingConfiguration": {
      "encryptionAlgorithmOptions": {
        "allowedValues": {},
        "defaultValue": {}
      },
      "hashAlgorithmOptions": {
        "allowedValues": {},
        "defaultValue": {}
      }
    },
    "signingImageFormat": {
      "supportedFormats": {},
      "defaultFormat": {}
    },
    "maxSizeInMB": {},
    "revocationSupported": {}
  }
]
```

<h2 id="tocS_Statuses">Statuses</h2>
<!-- backwards compatibility -->
<a id="schemastatuses"></a>
<a id="schema_Statuses"></a>
<a id="tocSstatuses"></a>
<a id="tocsstatuses"></a>

```json
[
  "Active"
]
```

<h2 id="tocS_ListSigningProfilesRequest">ListSigningProfilesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistsigningprofilesrequest"></a>
<a id="schema_ListSigningProfilesRequest"></a>
<a id="tocSlistsigningprofilesrequest"></a>
<a id="tocslistsigningprofilesrequest"></a>

```json
{}
```

<h2 id="tocS_SigningProfiles">SigningProfiles</h2>
<!-- backwards compatibility -->
<a id="schemasigningprofiles"></a>
<a id="schema_SigningProfiles"></a>
<a id="tocSsigningprofiles"></a>
<a id="tocssigningprofiles"></a>

```json
[
  {
    "profileName": {},
    "profileVersion": {},
    "profileVersionArn": {},
    "signingMaterial": {
      "certificateArn": {}
    },
    "signatureValidityPeriod": {
      "value": {},
      "type": {}
    },
    "platformId": {},
    "platformDisplayName": {},
    "signingParameters": {
      "property1": "string",
      "property2": "string"
    },
    "status": {},
    "arn": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    }
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

<h2 id="tocS_Permission">Permission</h2>
<!-- backwards compatibility -->
<a id="schemapermission"></a>
<a id="schema_Permission"></a>
<a id="tocSpermission"></a>
<a id="tocspermission"></a>

```json
{
  "action": {},
  "principal": {},
  "statementId": {},
  "profileVersion": {}
}
```

A cross-account permission for a signing profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|false|none|none|
|principal|object|false|none|none|
|statementId|object|false|none|none|
|profileVersion|object|false|none|none|

<h2 id="tocS_Prefix">Prefix</h2>
<!-- backwards compatibility -->
<a id="schemaprefix"></a>
<a id="schema_Prefix"></a>
<a id="tocSprefix"></a>
<a id="tocsprefix"></a>

```json
"string"
```

<h2 id="tocS_PutSigningProfileRequest">PutSigningProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputsigningprofilerequest"></a>
<a id="schema_PutSigningProfileRequest"></a>
<a id="tocSputsigningprofilerequest"></a>
<a id="tocsputsigningprofilerequest"></a>

```json
{
  "signingMaterial": {
    "certificateArn": {}
  },
  "signatureValidityPeriod": {
    "value": {},
    "type": {}
  },
  "platformId": {},
  "overrides": {
    "signingConfiguration": {
      "encryptionAlgorithm": {},
      "hashAlgorithm": {}
    },
    "signingImageFormat": {}
  },
  "signingParameters": {
    "property1": "string",
    "property2": "string"
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|signingMaterial|object|false|none|none|
|signatureValidityPeriod|object|false|none|none|
|platformId|object|true|none|none|
|overrides|object|false|none|none|
|signingParameters|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_RemoveProfilePermissionRequest">RemoveProfilePermissionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremoveprofilepermissionrequest"></a>
<a id="schema_RemoveProfilePermissionRequest"></a>
<a id="tocSremoveprofilepermissionrequest"></a>
<a id="tocsremoveprofilepermissionrequest"></a>

```json
{}
```

<h2 id="tocS_RevocationReasonString">RevocationReasonString</h2>
<!-- backwards compatibility -->
<a id="schemarevocationreasonstring"></a>
<a id="schema_RevocationReasonString"></a>
<a id="tocSrevocationreasonstring"></a>
<a id="tocsrevocationreasonstring"></a>

```json
"string"
```

<h2 id="tocS_RevokeSignatureRequest">RevokeSignatureRequest</h2>
<!-- backwards compatibility -->
<a id="schemarevokesignaturerequest"></a>
<a id="schema_RevokeSignatureRequest"></a>
<a id="tocSrevokesignaturerequest"></a>
<a id="tocsrevokesignaturerequest"></a>

```json
{
  "jobOwner": {},
  "reason": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobOwner|object|false|none|none|
|reason|object|true|none|none|

<h2 id="tocS_RevokeSigningProfileRequest">RevokeSigningProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemarevokesigningprofilerequest"></a>
<a id="schema_RevokeSigningProfileRequest"></a>
<a id="tocSrevokesigningprofilerequest"></a>
<a id="tocsrevokesigningprofilerequest"></a>

```json
{
  "profileVersion": {},
  "reason": {},
  "effectiveTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|profileVersion|object|true|none|none|
|reason|object|true|none|none|
|effectiveTime|object|true|none|none|

<h2 id="tocS_S3SignedObject">S3SignedObject</h2>
<!-- backwards compatibility -->
<a id="schemas3signedobject"></a>
<a id="schema_S3SignedObject"></a>
<a id="tocSs3signedobject"></a>
<a id="tocss3signedobject"></a>

```json
{
  "bucketName": {},
  "key": {}
}
```

The S3 bucket name and key where code signing saved your signed code image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucketName|object|false|none|none|
|key|object|false|none|none|

<h2 id="tocS_Version">Version</h2>
<!-- backwards compatibility -->
<a id="schemaversion"></a>
<a id="schema_Version"></a>
<a id="tocSversion"></a>
<a id="tocsversion"></a>

```json
"string"
```

<h2 id="tocS_SigningJob">SigningJob</h2>
<!-- backwards compatibility -->
<a id="schemasigningjob"></a>
<a id="schema_SigningJob"></a>
<a id="tocSsigningjob"></a>
<a id="tocssigningjob"></a>

```json
{
  "jobId": {},
  "source": {
    "s3": {
      "bucketName": {},
      "key": {},
      "version": {}
    }
  },
  "signedObject": {
    "s3": {
      "bucketName": {},
      "key": {}
    }
  },
  "signingMaterial": {
    "certificateArn": {}
  },
  "createdAt": {},
  "status": {},
  "isRevoked": {},
  "profileName": {},
  "profileVersion": {},
  "platformId": {},
  "platformDisplayName": {},
  "signatureExpiresAt": {},
  "jobOwner": {},
  "jobInvoker": {}
}
```

Contains information about a signing job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobId|object|false|none|none|
|source|object|false|none|none|
|signedObject|object|false|none|none|
|signingMaterial|object|false|none|none|
|createdAt|object|false|none|none|
|status|object|false|none|none|
|isRevoked|object|false|none|none|
|profileName|object|false|none|none|
|profileVersion|object|false|none|none|
|platformId|object|false|none|none|
|platformDisplayName|object|false|none|none|
|signatureExpiresAt|object|false|none|none|
|jobOwner|object|false|none|none|
|jobInvoker|object|false|none|none|

<h2 id="tocS_SigningParameterKey">SigningParameterKey</h2>
<!-- backwards compatibility -->
<a id="schemasigningparameterkey"></a>
<a id="schema_SigningParameterKey"></a>
<a id="tocSsigningparameterkey"></a>
<a id="tocssigningparameterkey"></a>

```json
"string"
```

<h2 id="tocS_SigningPlatform">SigningPlatform</h2>
<!-- backwards compatibility -->
<a id="schemasigningplatform"></a>
<a id="schema_SigningPlatform"></a>
<a id="tocSsigningplatform"></a>
<a id="tocssigningplatform"></a>

```json
{
  "platformId": {},
  "displayName": {},
  "partner": {},
  "target": {},
  "category": {},
  "signingConfiguration": {
    "encryptionAlgorithmOptions": {
      "allowedValues": {},
      "defaultValue": {}
    },
    "hashAlgorithmOptions": {
      "allowedValues": {},
      "defaultValue": {}
    }
  },
  "signingImageFormat": {
    "supportedFormats": {},
    "defaultFormat": {}
  },
  "maxSizeInMB": {},
  "revocationSupported": {}
}
```

Contains information about the signing configurations and parameters that are used to perform a code signing job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|platformId|object|false|none|none|
|displayName|object|false|none|none|
|partner|object|false|none|none|
|target|object|false|none|none|
|category|object|false|none|none|
|signingConfiguration|object|false|none|none|
|signingImageFormat|[SigningImageFormat](#schemasigningimageformat)|false|none|The image format of a code signing platform or profile.|
|maxSizeInMB|object|false|none|none|
|revocationSupported|object|false|none|none|

<h2 id="tocS_SigningProfile">SigningProfile</h2>
<!-- backwards compatibility -->
<a id="schemasigningprofile"></a>
<a id="schema_SigningProfile"></a>
<a id="tocSsigningprofile"></a>
<a id="tocssigningprofile"></a>

```json
{
  "profileName": {},
  "profileVersion": {},
  "profileVersionArn": {},
  "signingMaterial": {
    "certificateArn": {}
  },
  "signatureValidityPeriod": {
    "value": {},
    "type": {}
  },
  "platformId": {},
  "platformDisplayName": {},
  "signingParameters": {
    "property1": "string",
    "property2": "string"
  },
  "status": {},
  "arn": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Contains information about the ACM certificates and code signing configuration parameters that can be used by a given code signing user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|profileName|object|false|none|none|
|profileVersion|object|false|none|none|
|profileVersionArn|object|false|none|none|
|signingMaterial|object|false|none|none|
|signatureValidityPeriod|object|false|none|none|
|platformId|object|false|none|none|
|platformDisplayName|object|false|none|none|
|signingParameters|object|false|none|none|
|status|object|false|none|none|
|arn|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_StartSigningJobRequest">StartSigningJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartsigningjobrequest"></a>
<a id="schema_StartSigningJobRequest"></a>
<a id="tocSstartsigningjobrequest"></a>
<a id="tocsstartsigningjobrequest"></a>

```json
{
  "source": {
    "s3": {
      "bucketName": {},
      "key": {},
      "version": {}
    }
  },
  "destination": {
    "s3": {
      "bucketName": {},
      "prefix": {}
    }
  },
  "profileName": {},
  "clientRequestToken": {},
  "profileOwner": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source|object|true|none|none|
|destination|object|true|none|none|
|profileName|object|true|none|none|
|clientRequestToken|object|true|none|none|
|profileOwner|object|false|none|none|

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

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{}
```
