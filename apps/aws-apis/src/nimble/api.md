<h1 id="amazonnimblestudio">AmazonNimbleStudio v2020-08-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>Welcome to the Amazon Nimble Studio API reference. This API reference provides methods, schema, resources, parameters, and more to help you get the most out of Nimble Studio.</p> <p>Nimble Studio is a virtual studio that empowers visual effects, animation, and interactive content teams to create content securely within a scalable, private cloud service.</p>

Base URLs:

* <a href="http://nimble.us-east-1.amazonaws.com">http://nimble.us-east-1.amazonaws.com</a> - The AmazonNimbleStudio multi-region endpoint

* <a href="https://nimble.us-east-1.amazonaws.com">https://nimble.us-east-1.amazonaws.com</a> - The AmazonNimbleStudio multi-region endpoint

* <a href="http://nimble.cn-north-1.amazonaws.com.cn">http://nimble.cn-north-1.amazonaws.com.cn</a> - The AmazonNimbleStudio endpoint for China (Beijing) and China (Ningxia)

* <a href="https://nimble.cn-north-1.amazonaws.com.cn">https://nimble.cn-north-1.amazonaws.com.cn</a> - The AmazonNimbleStudio endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/nimble/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazonnimblestudio-default">Default</h1>

## ListEulaAcceptances

<a id="opIdListEulaAcceptances"></a>

> Code samples

```bash
curl https://nimble.us-east-1.amazonaws.com/2020-08-01/studios/string/eula-acceptances \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-08-01/studios/{studioId}/eula-acceptances`

List EULA acceptances.

<h3 id="listeulaacceptances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|eulaIds|query|[[String](#schemastring)]|false|The list of EULA IDs that have been previously accepted.|
|nextToken|query|string|false|The token for the next set of results, or null if there are no more results.|
|studioId|path|string|true|The studio ID. |
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
  "eulaAcceptances": {},
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

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="listeulaacceptances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListEulaAcceptancesResponse](#schemalisteulaacceptancesresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AcceptEulas

<a id="opIdAcceptEulas"></a>

> Code samples

```bash
curl https://nimble.us-east-1.amazonaws.com/2020-08-01/studios/string/eula-acceptances \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "eulaIds": [
      "string"
    ]
  }'
```

`POST /2020-08-01/studios/{studioId}/eula-acceptances`

Accept EULAs.

> Body parameter

```json
{
  "eulaIds": [
    "string"
  ]
}
```

<h3 id="accepteulas-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Client-Token|header|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.|
|studioId|path|string|true|The studio ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» eulaIds|body|[[String](#schemastring)]|false|The EULA ID.|

> Example responses

> 200 Response

```json
{
  "eulaAcceptances": {}
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

<h3 id="accepteulas-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AcceptEulasResponse](#schemaaccepteulasresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListLaunchProfiles

<a id="opIdListLaunchProfiles"></a>

> Code samples

```bash
curl https://nimble.us-east-1.amazonaws.com/2020-08-01/studios/string/launch-profiles \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-08-01/studios/{studioId}/launch-profiles`

List all the launch profiles a studio.

<h3 id="listlaunchprofiles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|The max number of results to return in the response.|
|nextToken|query|string|false|The token for the next set of results, or null if there are no more results.|
|principalId|query|string|false|The principal ID. This currently supports a IAM Identity Center UserId. |
|states|query|[[LaunchProfileState](#schemalaunchprofilestate)]|false|Filter this request to launch profiles in any of the given states.|
|studioId|path|string|true|The studio ID. |
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
|states|CREATE_IN_PROGRESS|
|states|READY|
|states|UPDATE_IN_PROGRESS|
|states|DELETE_IN_PROGRESS|
|states|DELETED|
|states|DELETE_FAILED|
|states|CREATE_FAILED|
|states|UPDATE_FAILED|

> Example responses

> 200 Response

```json
{
  "launchProfiles": {},
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

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="listlaunchprofiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListLaunchProfilesResponse](#schemalistlaunchprofilesresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateLaunchProfile

<a id="opIdCreateLaunchProfile"></a>

> Code samples

```bash
curl https://nimble.us-east-1.amazonaws.com/2020-08-01/studios/string/launch-profiles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "password",
    "ec2SubnetIds": [
      "string"
    ],
    "launchProfileProtocolVersions": [
      "string"
    ],
    "name": "password",
    "streamConfiguration": {
      "automaticTerminationMode": {},
      "clipboardMode": {},
      "ec2InstanceTypes": {},
      "maxSessionLengthInMinutes": {},
      "maxStoppedSessionLengthInMinutes": {},
      "sessionBackup": {
        "maxBackupsToRetain": {},
        "mode": {}
      },
      "sessionPersistenceMode": {},
      "sessionStorage": {
        "mode": {},
        "root": {
          "linux": {},
          "windows": {}
        }
      },
      "streamingImageIds": {},
      "volumeConfiguration": {
        "iops": {},
        "size": {},
        "throughput": {}
      }
    },
    "studioComponentIds": [
      "string"
    ],
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /2020-08-01/studios/{studioId}/launch-profiles`

Create a launch profile.

> Body parameter

```json
{
  "description": "password",
  "ec2SubnetIds": [
    "string"
  ],
  "launchProfileProtocolVersions": [
    "string"
  ],
  "name": "password",
  "streamConfiguration": {
    "automaticTerminationMode": {},
    "clipboardMode": {},
    "ec2InstanceTypes": {},
    "maxSessionLengthInMinutes": {},
    "maxStoppedSessionLengthInMinutes": {},
    "sessionBackup": {
      "maxBackupsToRetain": {},
      "mode": {}
    },
    "sessionPersistenceMode": {},
    "sessionStorage": {
      "mode": {},
      "root": {
        "linux": {},
        "windows": {}
      }
    },
    "streamingImageIds": {},
    "volumeConfiguration": {
      "iops": {},
      "size": {},
      "throughput": {}
    }
  },
  "studioComponentIds": [
    "string"
  ],
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createlaunchprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Client-Token|header|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.|
|studioId|path|string|true|The studio ID. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» description|body|string(password)|false|A human-readable description of the launch profile.|
|» ec2SubnetIds|body|[[EC2SubnetId](#schemaec2subnetid)]|true|Specifies the IDs of the EC2 subnets where streaming sessions will be accessible from. These subnets must support the specified instance types. |
|» launchProfileProtocolVersions|body|[[LaunchProfileProtocolVersion](#schemalaunchprofileprotocolversion)]|true|The version number of the protocol that is used by the launch profile. The only valid version is "2021-03-31".|
|» name|body|string(password)|true|The name for the launch profile.|
|» streamConfiguration|body|object|true|Configuration for streaming workstations created using this launch profile.|
|» » automaticTerminationMode|body|object|false|none|
|» » clipboardMode|body|object|false|none|
|» » ec2InstanceTypes|body|object|false|none|
|» » maxSessionLengthInMinutes|body|object|false|none|
|» » maxStoppedSessionLengthInMinutes|body|object|false|none|
|» » sessionBackup|body|object|false|none|
|» » » maxBackupsToRetain|body|object|false|none|
|» » » mode|body|object|false|none|
|» » sessionPersistenceMode|body|object|false|none|
|» » sessionStorage|body|object|false|none|
|» » » mode|body|object|true|none|
|» » » root|body|object|false|none|
|» » » » linux|body|object|false|none|
|» » » » windows|body|object|false|none|
|» » streamingImageIds|body|object|false|none|
|» » volumeConfiguration|body|object|false|none|
|» » » iops|body|object|false|none|
|» » » size|body|object|false|none|
|» » » throughput|body|object|false|none|
|» studioComponentIds|body|[[String](#schemastring)]|true|Unique identifiers for a collection of studio components that can be used with this launch profile.|
|» tags|body|object|false|A collection of labels, in the form of key-value pairs, that apply to this resource.|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|

> Example responses

> 200 Response

```json
{
  "launchProfile": {
    "arn": {},
    "createdAt": {},
    "createdBy": {},
    "description": {},
    "ec2SubnetIds": {},
    "launchProfileId": {},
    "launchProfileProtocolVersions": {},
    "name": {},
    "state": {},
    "statusCode": {},
    "statusMessage": {},
    "streamConfiguration": {
      "automaticTerminationMode": {},
      "clipboardMode": {},
      "ec2InstanceTypes": {},
      "maxSessionLengthInMinutes": {},
      "maxStoppedSessionLengthInMinutes": {},
      "sessionBackup": {
        "maxBackupsToRetain": {},
        "mode": {}
      },
      "sessionPersistenceMode": {},
      "sessionStorage": {
        "mode": {},
        "root": {
          "linux": {},
          "windows": {}
        }
      },
      "streamingImageIds": {},
      "volumeConfiguration": {
        "iops": {},
        "size": {},
        "throughput": {}
      }
    },
    "studioComponentIds": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "updatedAt": {},
    "updatedBy": {},
    "validationResults": {}
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

<h3 id="createlaunchprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateLaunchProfileResponse](#schemacreatelaunchprofileresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListStreamingImages

<a id="opIdListStreamingImages"></a>

> Code samples

```bash
curl https://nimble.us-east-1.amazonaws.com/2020-08-01/studios/string/streaming-images \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-08-01/studios/{studioId}/streaming-images`

<p>List the streaming image resources available to this studio.</p> <p>This list will contain both images provided by Amazon Web Services, as well as streaming images that you have created in your studio.</p>

<h3 id="liststreamingimages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|The token for the next set of results, or null if there are no more results.|
|owner|query|string|false|Filter this request to streaming images with the given owner|
|studioId|path|string|true|The studio ID. |
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
  "nextToken": {},
  "streamingImages": {}
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

<h3 id="liststreamingimages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListStreamingImagesResponse](#schemaliststreamingimagesresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateStreamingImage

<a id="opIdCreateStreamingImage"></a>

> Code samples

```bash
curl https://nimble.us-east-1.amazonaws.com/2020-08-01/studios/string/streaming-images \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "password",
    "ec2ImageId": "string",
    "name": "password",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /2020-08-01/studios/{studioId}/streaming-images`

Creates a streaming image resource in a studio.

> Body parameter

```json
{
  "description": "password",
  "ec2ImageId": "string",
  "name": "password",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createstreamingimage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Client-Token|header|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.|
|studioId|path|string|true|The studio ID. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» description|body|string(password)|false|The description.|
|» ec2ImageId|body|string|true|The ID of an EC2 machine image with which to create this streaming image.|
|» name|body|string(password)|true|A friendly name for a streaming image resource.|
|» tags|body|object|false|A collection of labels, in the form of key-value pairs, that apply to this resource.|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|

> Example responses

> 200 Response

```json
{
  "streamingImage": {
    "arn": {},
    "description": {},
    "ec2ImageId": {},
    "encryptionConfiguration": {
      "keyArn": {},
      "keyType": {}
    },
    "eulaIds": {},
    "name": {},
    "owner": {},
    "platform": {},
    "state": {},
    "statusCode": {},
    "statusMessage": {},
    "streamingImageId": {},
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

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="createstreamingimage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateStreamingImageResponse](#schemacreatestreamingimageresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListStreamingSessions

<a id="opIdListStreamingSessions"></a>

> Code samples

```bash
curl https://nimble.us-east-1.amazonaws.com/2020-08-01/studios/string/streaming-sessions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-08-01/studios/{studioId}/streaming-sessions`

Lists the streaming sessions in a studio.

<h3 id="liststreamingsessions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|createdBy|query|string|false|Filters the request to streaming sessions created by the given user.|
|nextToken|query|string|false|The token for the next set of results, or null if there are no more results.|
|ownedBy|query|string|false|Filters the request to streaming session owned by the given user|
|sessionIds|query|string|false|Filters the request to only the provided session IDs.|
|studioId|path|string|true|The studio ID. |
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
  "nextToken": {},
  "sessions": {}
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

<h3 id="liststreamingsessions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListStreamingSessionsResponse](#schemaliststreamingsessionsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateStreamingSession

<a id="opIdCreateStreamingSession"></a>

> Code samples

```bash
curl https://nimble.us-east-1.amazonaws.com/2020-08-01/studios/string/streaming-sessions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ec2InstanceType": "g4dn.xlarge",
    "launchProfileId": "string",
    "ownedBy": "string",
    "streamingImageId": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /2020-08-01/studios/{studioId}/streaming-sessions`

<p>Creates a streaming session in a studio.</p> <p>After invoking this operation, you must poll GetStreamingSession until the streaming session is in the <code>READY</code> state.</p>

> Body parameter

```json
{
  "ec2InstanceType": "g4dn.xlarge",
  "launchProfileId": "string",
  "ownedBy": "string",
  "streamingImageId": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createstreamingsession-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Client-Token|header|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.|
|studioId|path|string|true|The studio ID. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ec2InstanceType|body|string|false|The EC2 Instance type used for the streaming session.|
|» launchProfileId|body|string|true|The ID of the launch profile used to control access from the streaming session.|
|» ownedBy|body|string|false|The user ID of the user that owns the streaming session. The user that owns the session will be logging into the session and interacting with the virtual workstation.|
|» streamingImageId|body|string|false|The ID of the streaming image.|
|» tags|body|object|false|A collection of labels, in the form of key-value pairs, that apply to this resource.|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» ec2InstanceType|g4dn.xlarge|
|» ec2InstanceType|g4dn.2xlarge|
|» ec2InstanceType|g4dn.4xlarge|
|» ec2InstanceType|g4dn.8xlarge|
|» ec2InstanceType|g4dn.12xlarge|
|» ec2InstanceType|g4dn.16xlarge|
|» ec2InstanceType|g3.4xlarge|
|» ec2InstanceType|g3s.xlarge|
|» ec2InstanceType|g5.xlarge|
|» ec2InstanceType|g5.2xlarge|
|» ec2InstanceType|g5.4xlarge|
|» ec2InstanceType|g5.8xlarge|
|» ec2InstanceType|g5.16xlarge|

> Example responses

> 200 Response

```json
{
  "session": {
    "arn": {},
    "automaticTerminationMode": {},
    "backupMode": {},
    "createdAt": {},
    "createdBy": {},
    "ec2InstanceType": {},
    "launchProfileId": {},
    "maxBackupsToRetain": {},
    "ownedBy": {},
    "sessionId": {},
    "sessionPersistenceMode": {},
    "startedAt": {},
    "startedBy": {},
    "startedFromBackupId": {},
    "state": {},
    "statusCode": {},
    "statusMessage": {},
    "stopAt": {},
    "stoppedAt": {},
    "stoppedBy": {},
    "streamingImageId": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "terminateAt": {},
    "updatedAt": {},
    "updatedBy": {},
    "volumeConfiguration": {
      "iops": {},
      "size": {},
      "throughput": {}
    },
    "volumeRetentionMode": {}
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

<h3 id="createstreamingsession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateStreamingSessionResponse](#schemacreatestreamingsessionresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateStreamingSessionStream

<a id="opIdCreateStreamingSessionStream"></a>

> Code samples

```bash
curl https://nimble.us-east-1.amazonaws.com/2020-08-01/studios/string/streaming-sessions/string/streams \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "expirationInSeconds": 60
  }'
```

`POST /2020-08-01/studios/{studioId}/streaming-sessions/{sessionId}/streams`

<p>Creates a streaming session stream for a streaming session.</p> <p>After invoking this API, invoke GetStreamingSessionStream with the returned streamId to poll the resource until it is in the <code>READY</code> state.</p>

> Body parameter

```json
{
  "expirationInSeconds": 60
}
```

<h3 id="createstreamingsessionstream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Client-Token|header|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.|
|sessionId|path|string|true|The streaming session ID.|
|studioId|path|string|true|The studio ID. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» expirationInSeconds|body|integer|false|The expiration time in seconds.|

> Example responses

> 200 Response

```json
{
  "stream": {
    "createdAt": {},
    "createdBy": {},
    "expiresAt": {},
    "ownedBy": {},
    "state": {},
    "statusCode": {},
    "streamId": {},
    "url": {}
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

<h3 id="createstreamingsessionstream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateStreamingSessionStreamResponse](#schemacreatestreamingsessionstreamresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListStudios

<a id="opIdListStudios"></a>

> Code samples

```bash
curl https://nimble.us-east-1.amazonaws.com/2020-08-01/studios \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-08-01/studios`

List studios in your Amazon Web Services accounts in the requested Amazon Web Services Region.

<h3 id="liststudios-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|The token for the next set of results, or null if there are no more results.|
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
  "nextToken": {},
  "studios": {}
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

<h3 id="liststudios-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListStudiosResponse](#schemaliststudiosresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateStudio

<a id="opIdCreateStudio"></a>

> Code samples

```bash
curl https://nimble.us-east-1.amazonaws.com/2020-08-01/studios \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "adminRoleArn": "string",
    "displayName": "password",
    "studioEncryptionConfiguration": {
      "keyArn": {},
      "keyType": {}
    },
    "studioName": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "userRoleArn": "string"
  }'
```

`POST /2020-08-01/studios`

<p>Create a new studio.</p> <p>When creating a studio, two IAM roles must be provided: the admin role and the user role. These roles are assumed by your users when they log in to the Nimble Studio portal.</p> <p>The user role must have the <code>AmazonNimbleStudio-StudioUser</code> managed policy attached for the portal to function properly.</p> <p>The admin role must have the <code>AmazonNimbleStudio-StudioAdmin</code> managed policy attached for the portal to function properly.</p> <p>You may optionally specify a KMS key in the <code>StudioEncryptionConfiguration</code>.</p> <p>In Nimble Studio, resource names, descriptions, initialization scripts, and other data you provide are always encrypted at rest using an KMS key. By default, this key is owned by Amazon Web Services and managed on your behalf. You may provide your own KMS key when calling <code>CreateStudio</code> to encrypt this data using a key you own and manage.</p> <p>When providing an KMS key during studio creation, Nimble Studio creates KMS grants in your account to provide your studio user and admin roles access to these KMS keys.</p> <p>If you delete this grant, the studio will no longer be accessible to your portal users.</p> <p>If you delete the studio KMS key, your studio will no longer be accessible.</p>

> Body parameter

```json
{
  "adminRoleArn": "string",
  "displayName": "password",
  "studioEncryptionConfiguration": {
    "keyArn": {},
    "keyType": {}
  },
  "studioName": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "userRoleArn": "string"
}
```

<h3 id="createstudio-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Client-Token|header|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» adminRoleArn|body|string|true|The IAM role that studio admins will assume when logging in to the Nimble Studio portal.|
|» displayName|body|string(password)|true|A friendly name for the studio.|
|» studioEncryptionConfiguration|body|object|false|Configuration of the encryption method that is used for the studio.|
|» » keyArn|body|object|false|none|
|» » keyType|body|object|false|none|
|» studioName|body|string|true|The studio name that is used in the URL of the Nimble Studio portal when accessed by Nimble Studio users.|
|» tags|body|object|false|A collection of labels, in the form of key-value pairs, that apply to this resource.|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|
|» userRoleArn|body|string|true|The IAM role that studio users will assume when logging in to the Nimble Studio portal.|

> Example responses

> 200 Response

```json
{
  "studio": {
    "adminRoleArn": {},
    "arn": {},
    "createdAt": {},
    "displayName": {},
    "homeRegion": {},
    "ssoClientId": {},
    "state": {},
    "statusCode": {},
    "statusMessage": {},
    "studioEncryptionConfiguration": {
      "keyArn": {},
      "keyType": {}
    },
    "studioId": {},
    "studioName": {},
    "studioUrl": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "updatedAt": {},
    "userRoleArn": {}
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

<h3 id="createstudio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateStudioResponse](#schemacreatestudioresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListStudioComponents

<a id="opIdListStudioComponents"></a>

> Code samples

```bash
curl https://nimble.us-east-1.amazonaws.com/2020-08-01/studios/string/studio-components \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-08-01/studios/{studioId}/studio-components`

Lists the <code>StudioComponents</code> in a studio.

<h3 id="liststudiocomponents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|The max number of results to return in the response.|
|nextToken|query|string|false|The token for the next set of results, or null if there are no more results.|
|states|query|[[StudioComponentState](#schemastudiocomponentstate)]|false|Filters the request to studio components that are in one of the given states. |
|studioId|path|string|true|The studio ID. |
|types|query|[[StudioComponentType](#schemastudiocomponenttype)]|false|Filters the request to studio components that are of one of the given types.|
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
|states|CREATE_IN_PROGRESS|
|states|READY|
|states|UPDATE_IN_PROGRESS|
|states|DELETE_IN_PROGRESS|
|states|DELETED|
|states|DELETE_FAILED|
|states|CREATE_FAILED|
|states|UPDATE_FAILED|
|types|ACTIVE_DIRECTORY|
|types|SHARED_FILE_SYSTEM|
|types|COMPUTE_FARM|
|types|LICENSE_SERVICE|
|types|CUSTOM|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "studioComponents": {}
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

<h3 id="liststudiocomponents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListStudioComponentsResponse](#schemaliststudiocomponentsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateStudioComponent

<a id="opIdCreateStudioComponent"></a>

> Code samples

```bash
curl https://nimble.us-east-1.amazonaws.com/2020-08-01/studios/string/studio-components \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "configuration": {
      "activeDirectoryConfiguration": {
        "computerAttributes": {},
        "directoryId": {},
        "organizationalUnitDistinguishedName": {}
      },
      "computeFarmConfiguration": {
        "activeDirectoryUser": {},
        "endpoint": {}
      },
      "licenseServiceConfiguration": {
        "endpoint": {}
      },
      "sharedFileSystemConfiguration": {
        "endpoint": {},
        "fileSystemId": {},
        "linuxMountPoint": {},
        "shareName": {},
        "windowsMountDrive": {}
      }
    },
    "description": "password",
    "ec2SecurityGroupIds": [
      "string"
    ],
    "initializationScripts": [
      {
        "launchProfileProtocolVersion": {},
        "platform": {},
        "runContext": {},
        "script": {}
      }
    ],
    "name": "password",
    "runtimeRoleArn": "string",
    "scriptParameters": [
      {
        "key": {},
        "value": {}
      }
    ],
    "secureInitializationRoleArn": "string",
    "subtype": "AWS_MANAGED_MICROSOFT_AD",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "type": "ACTIVE_DIRECTORY"
  }'
```

`POST /2020-08-01/studios/{studioId}/studio-components`

Creates a studio component resource.

> Body parameter

```json
{
  "configuration": {
    "activeDirectoryConfiguration": {
      "computerAttributes": {},
      "directoryId": {},
      "organizationalUnitDistinguishedName": {}
    },
    "computeFarmConfiguration": {
      "activeDirectoryUser": {},
      "endpoint": {}
    },
    "licenseServiceConfiguration": {
      "endpoint": {}
    },
    "sharedFileSystemConfiguration": {
      "endpoint": {},
      "fileSystemId": {},
      "linuxMountPoint": {},
      "shareName": {},
      "windowsMountDrive": {}
    }
  },
  "description": "password",
  "ec2SecurityGroupIds": [
    "string"
  ],
  "initializationScripts": [
    {
      "launchProfileProtocolVersion": {},
      "platform": {},
      "runContext": {},
      "script": {}
    }
  ],
  "name": "password",
  "runtimeRoleArn": "string",
  "scriptParameters": [
    {
      "key": {},
      "value": {}
    }
  ],
  "secureInitializationRoleArn": "string",
  "subtype": "AWS_MANAGED_MICROSOFT_AD",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "type": "ACTIVE_DIRECTORY"
}
```

<h3 id="createstudiocomponent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Client-Token|header|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.|
|studioId|path|string|true|The studio ID. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» configuration|body|object|false|The configuration of the studio component, based on component type.|
|» » activeDirectoryConfiguration|body|object|false|none|
|» » » computerAttributes|body|object|false|none|
|» » » directoryId|body|object|false|none|
|» » » organizationalUnitDistinguishedName|body|object|false|none|
|» » computeFarmConfiguration|body|object|false|none|
|» » » activeDirectoryUser|body|object|false|none|
|» » » endpoint|body|object|false|none|
|» » licenseServiceConfiguration|body|object|false|none|
|» » » endpoint|body|object|false|none|
|» » sharedFileSystemConfiguration|body|object|false|none|
|» » » endpoint|body|object|false|none|
|» » » fileSystemId|body|object|false|none|
|» » » linuxMountPoint|body|object|false|none|
|» » » shareName|body|object|false|none|
|» » » windowsMountDrive|body|object|false|none|
|» description|body|string(password)|false|The description.|
|» ec2SecurityGroupIds|body|[[SecurityGroupId](#schemasecuritygroupid)]|false|The EC2 security groups that control access to the studio component.|
|» initializationScripts|body|[[StudioComponentInitializationScript](#schemastudiocomponentinitializationscript)]|false|Initialization scripts for studio components.|
|» name|body|string(password)|true|The name for the studio component.|
|» runtimeRoleArn|body|string|false|An IAM role attached to a Studio Component that gives the studio component access to Amazon Web Services resources at anytime while the instance is running. |
|» scriptParameters|body|[[ScriptParameterKeyValue](#schemascriptparameterkeyvalue)]|false|Parameters for the studio component scripts.|
|» secureInitializationRoleArn|body|string|false|An IAM role attached to Studio Component when the system initialization script runs which give the studio component access to Amazon Web Services resources when the system initialization script runs.|
|» subtype|body|string|false|The specific subtype of a studio component.|
|» tags|body|object|false|A collection of labels, in the form of key-value pairs, that apply to this resource.|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|
|» type|body|string|true|The type of the studio component.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» subtype|AWS_MANAGED_MICROSOFT_AD|
|» subtype|AMAZON_FSX_FOR_WINDOWS|
|» subtype|AMAZON_FSX_FOR_LUSTRE|
|» subtype|CUSTOM|
|» type|ACTIVE_DIRECTORY|
|» type|SHARED_FILE_SYSTEM|
|» type|COMPUTE_FARM|
|» type|LICENSE_SERVICE|
|» type|CUSTOM|

> Example responses

> 200 Response

```json
{
  "studioComponent": {
    "arn": {},
    "configuration": {
      "activeDirectoryConfiguration": {
        "computerAttributes": {},
        "directoryId": {},
        "organizationalUnitDistinguishedName": {}
      },
      "computeFarmConfiguration": {
        "activeDirectoryUser": {},
        "endpoint": {}
      },
      "licenseServiceConfiguration": {
        "endpoint": {}
      },
      "sharedFileSystemConfiguration": {
        "endpoint": {},
        "fileSystemId": {},
        "linuxMountPoint": {},
        "shareName": {},
        "windowsMountDrive": {}
      }
    },
    "createdAt": {},
    "createdBy": {},
    "description": {},
    "ec2SecurityGroupIds": {},
    "initializationScripts": {},
    "name": {},
    "runtimeRoleArn": {},
    "scriptParameters": {},
    "secureInitializationRoleArn": {},
    "state": {},
    "statusCode": {},
    "statusMessage": {},
    "studioComponentId": {},
    "subtype": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "type": {},
    "updatedAt": {},
    "updatedBy": {}
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

<h3 id="createstudiocomponent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateStudioComponentResponse](#schemacreatestudiocomponentresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetLaunchProfile

<a id="opIdGetLaunchProfile"></a>

> Code samples

```bash
curl https://nimble.us-east-1.amazonaws.com/2020-08-01/studios/string/launch-profiles/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}`

Get a launch profile.

<h3 id="getlaunchprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|launchProfileId|path|string|true|The ID of the launch profile used to control access from the streaming session.|
|studioId|path|string|true|The studio ID. |
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
  "launchProfile": {
    "arn": {},
    "createdAt": {},
    "createdBy": {},
    "description": {},
    "ec2SubnetIds": {},
    "launchProfileId": {},
    "launchProfileProtocolVersions": {},
    "name": {},
    "state": {},
    "statusCode": {},
    "statusMessage": {},
    "streamConfiguration": {
      "automaticTerminationMode": {},
      "clipboardMode": {},
      "ec2InstanceTypes": {},
      "maxSessionLengthInMinutes": {},
      "maxStoppedSessionLengthInMinutes": {},
      "sessionBackup": {
        "maxBackupsToRetain": {},
        "mode": {}
      },
      "sessionPersistenceMode": {},
      "sessionStorage": {
        "mode": {},
        "root": {
          "linux": {},
          "windows": {}
        }
      },
      "streamingImageIds": {},
      "volumeConfiguration": {
        "iops": {},
        "size": {},
        "throughput": {}
      }
    },
    "studioComponentIds": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "updatedAt": {},
    "updatedBy": {},
    "validationResults": {}
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

<h3 id="getlaunchprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetLaunchProfileResponse](#schemagetlaunchprofileresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteLaunchProfile

<a id="opIdDeleteLaunchProfile"></a>

> Code samples

```bash
curl https://nimble.us-east-1.amazonaws.com/2020-08-01/studios/string/launch-profiles/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}`

Permanently delete a launch profile.

<h3 id="deletelaunchprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Client-Token|header|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.|
|launchProfileId|path|string|true|The ID of the launch profile used to control access from the streaming session.|
|studioId|path|string|true|The studio ID. |
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
  "launchProfile": {
    "arn": {},
    "createdAt": {},
    "createdBy": {},
    "description": {},
    "ec2SubnetIds": {},
    "launchProfileId": {},
    "launchProfileProtocolVersions": {},
    "name": {},
    "state": {},
    "statusCode": {},
    "statusMessage": {},
    "streamConfiguration": {
      "automaticTerminationMode": {},
      "clipboardMode": {},
      "ec2InstanceTypes": {},
      "maxSessionLengthInMinutes": {},
      "maxStoppedSessionLengthInMinutes": {},
      "sessionBackup": {
        "maxBackupsToRetain": {},
        "mode": {}
      },
      "sessionPersistenceMode": {},
      "sessionStorage": {
        "mode": {},
        "root": {
          "linux": {},
          "windows": {}
        }
      },
      "streamingImageIds": {},
      "volumeConfiguration": {
        "iops": {},
        "size": {},
        "throughput": {}
      }
    },
    "studioComponentIds": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "updatedAt": {},
    "updatedBy": {},
    "validationResults": {}
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

<h3 id="deletelaunchprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteLaunchProfileResponse](#schemadeletelaunchprofileresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateLaunchProfile

<a id="opIdUpdateLaunchProfile"></a>

> Code samples

```bash
curl https://nimble.us-east-1.amazonaws.com/2020-08-01/studios/string/launch-profiles/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "password",
    "launchProfileProtocolVersions": [
      "string"
    ],
    "name": "password",
    "streamConfiguration": {
      "automaticTerminationMode": {},
      "clipboardMode": {},
      "ec2InstanceTypes": {},
      "maxSessionLengthInMinutes": {},
      "maxStoppedSessionLengthInMinutes": {},
      "sessionBackup": {
        "maxBackupsToRetain": {},
        "mode": {}
      },
      "sessionPersistenceMode": {},
      "sessionStorage": {
        "mode": {},
        "root": {
          "linux": {},
          "windows": {}
        }
      },
      "streamingImageIds": {},
      "volumeConfiguration": {
        "iops": {},
        "size": {},
        "throughput": {}
      }
    },
    "studioComponentIds": [
      "string"
    ]
  }'
```

`PATCH /2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}`

Update a launch profile.

> Body parameter

```json
{
  "description": "password",
  "launchProfileProtocolVersions": [
    "string"
  ],
  "name": "password",
  "streamConfiguration": {
    "automaticTerminationMode": {},
    "clipboardMode": {},
    "ec2InstanceTypes": {},
    "maxSessionLengthInMinutes": {},
    "maxStoppedSessionLengthInMinutes": {},
    "sessionBackup": {
      "maxBackupsToRetain": {},
      "mode": {}
    },
    "sessionPersistenceMode": {},
    "sessionStorage": {
      "mode": {},
      "root": {
        "linux": {},
        "windows": {}
      }
    },
    "streamingImageIds": {},
    "volumeConfiguration": {
      "iops": {},
      "size": {},
      "throughput": {}
    }
  },
  "studioComponentIds": [
    "string"
  ]
}
```

<h3 id="updatelaunchprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Client-Token|header|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.|
|launchProfileId|path|string|true|The ID of the launch profile used to control access from the streaming session.|
|studioId|path|string|true|The studio ID. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» description|body|string(password)|false|A human-readable description of the launch profile.|
|» launchProfileProtocolVersions|body|[[LaunchProfileProtocolVersion](#schemalaunchprofileprotocolversion)]|false|The version number of the protocol that is used by the launch profile. The only valid version is "2021-03-31".|
|» name|body|string(password)|false|The name for the launch profile.|
|» streamConfiguration|body|object|false|Configuration for streaming workstations created using this launch profile.|
|» » automaticTerminationMode|body|object|false|none|
|» » clipboardMode|body|object|false|none|
|» » ec2InstanceTypes|body|object|false|none|
|» » maxSessionLengthInMinutes|body|object|false|none|
|» » maxStoppedSessionLengthInMinutes|body|object|false|none|
|» » sessionBackup|body|object|false|none|
|» » » maxBackupsToRetain|body|object|false|none|
|» » » mode|body|object|false|none|
|» » sessionPersistenceMode|body|object|false|none|
|» » sessionStorage|body|object|false|none|
|» » » mode|body|object|true|none|
|» » » root|body|object|false|none|
|» » » » linux|body|object|false|none|
|» » » » windows|body|object|false|none|
|» » streamingImageIds|body|object|false|none|
|» » volumeConfiguration|body|object|false|none|
|» » » iops|body|object|false|none|
|» » » size|body|object|false|none|
|» » » throughput|body|object|false|none|
|» studioComponentIds|body|[[String](#schemastring)]|false|Unique identifiers for a collection of studio components that can be used with this launch profile.|

> Example responses

> 200 Response

```json
{
  "launchProfile": {
    "arn": {},
    "createdAt": {},
    "createdBy": {},
    "description": {},
    "ec2SubnetIds": {},
    "launchProfileId": {},
    "launchProfileProtocolVersions": {},
    "name": {},
    "state": {},
    "statusCode": {},
    "statusMessage": {},
    "streamConfiguration": {
      "automaticTerminationMode": {},
      "clipboardMode": {},
      "ec2InstanceTypes": {},
      "maxSessionLengthInMinutes": {},
      "maxStoppedSessionLengthInMinutes": {},
      "sessionBackup": {
        "maxBackupsToRetain": {},
        "mode": {}
      },
      "sessionPersistenceMode": {},
      "sessionStorage": {
        "mode": {},
        "root": {
          "linux": {},
          "windows": {}
        }
      },
      "streamingImageIds": {},
      "volumeConfiguration": {
        "iops": {},
        "size": {},
        "throughput": {}
      }
    },
    "studioComponentIds": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "updatedAt": {},
    "updatedBy": {},
    "validationResults": {}
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

<h3 id="updatelaunchprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateLaunchProfileResponse](#schemaupdatelaunchprofileresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetLaunchProfileMember

<a id="opIdGetLaunchProfileMember"></a>

> Code samples

```bash
curl https://nimble.us-east-1.amazonaws.com/2020-08-01/studios/string/launch-profiles/string/membership/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/membership/{principalId}`

Get a user persona in launch profile membership.

<h3 id="getlaunchprofilemember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|launchProfileId|path|string|true|The ID of the launch profile used to control access from the streaming session.|
|principalId|path|string|true|The principal ID. This currently supports a IAM Identity Center UserId. |
|studioId|path|string|true|The studio ID. |
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
  "member": {
    "identityStoreId": {},
    "persona": {},
    "principalId": {},
    "sid": {}
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

<h3 id="getlaunchprofilemember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetLaunchProfileMemberResponse](#schemagetlaunchprofilememberresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteLaunchProfileMember

<a id="opIdDeleteLaunchProfileMember"></a>

> Code samples

```bash
curl https://nimble.us-east-1.amazonaws.com/2020-08-01/studios/string/launch-profiles/string/membership/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/membership/{principalId}`

Delete a user from launch profile membership.

<h3 id="deletelaunchprofilemember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Client-Token|header|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.|
|launchProfileId|path|string|true|The ID of the launch profile used to control access from the streaming session.|
|principalId|path|string|true|The principal ID. This currently supports a IAM Identity Center UserId. |
|studioId|path|string|true|The studio ID. |
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

<h3 id="deletelaunchprofilemember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteLaunchProfileMemberResponse](#schemadeletelaunchprofilememberresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateLaunchProfileMember

<a id="opIdUpdateLaunchProfileMember"></a>

> Code samples

```bash
curl https://nimble.us-east-1.amazonaws.com/2020-08-01/studios/string/launch-profiles/string/membership/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "persona": "USER"
  }'
```

`PATCH /2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/membership/{principalId}`

Update a user persona in launch profile membership.

> Body parameter

```json
{
  "persona": "USER"
}
```

<h3 id="updatelaunchprofilemember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Client-Token|header|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.|
|launchProfileId|path|string|true|The ID of the launch profile used to control access from the streaming session.|
|principalId|path|string|true|The principal ID. This currently supports a IAM Identity Center UserId. |
|studioId|path|string|true|The studio ID. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» persona|body|string|true|The persona.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» persona|USER|

> Example responses

> 200 Response

```json
{
  "member": {
    "identityStoreId": {},
    "persona": {},
    "principalId": {},
    "sid": {}
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

<h3 id="updatelaunchprofilemember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateLaunchProfileMemberResponse](#schemaupdatelaunchprofilememberresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetStreamingImage

<a id="opIdGetStreamingImage"></a>

> Code samples

```bash
curl https://nimble.us-east-1.amazonaws.com/2020-08-01/studios/string/streaming-images/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-08-01/studios/{studioId}/streaming-images/{streamingImageId}`

Get streaming image.

<h3 id="getstreamingimage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|streamingImageId|path|string|true|The streaming image ID.|
|studioId|path|string|true|The studio ID. |
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
  "streamingImage": {
    "arn": {},
    "description": {},
    "ec2ImageId": {},
    "encryptionConfiguration": {
      "keyArn": {},
      "keyType": {}
    },
    "eulaIds": {},
    "name": {},
    "owner": {},
    "platform": {},
    "state": {},
    "statusCode": {},
    "statusMessage": {},
    "streamingImageId": {},
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

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="getstreamingimage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetStreamingImageResponse](#schemagetstreamingimageresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteStreamingImage

<a id="opIdDeleteStreamingImage"></a>

> Code samples

```bash
curl https://nimble.us-east-1.amazonaws.com/2020-08-01/studios/string/streaming-images/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2020-08-01/studios/{studioId}/streaming-images/{streamingImageId}`

Delete streaming image.

<h3 id="deletestreamingimage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Client-Token|header|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.|
|streamingImageId|path|string|true|The streaming image ID.|
|studioId|path|string|true|The studio ID. |
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
  "streamingImage": {
    "arn": {},
    "description": {},
    "ec2ImageId": {},
    "encryptionConfiguration": {
      "keyArn": {},
      "keyType": {}
    },
    "eulaIds": {},
    "name": {},
    "owner": {},
    "platform": {},
    "state": {},
    "statusCode": {},
    "statusMessage": {},
    "streamingImageId": {},
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

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="deletestreamingimage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteStreamingImageResponse](#schemadeletestreamingimageresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateStreamingImage

<a id="opIdUpdateStreamingImage"></a>

> Code samples

```bash
curl https://nimble.us-east-1.amazonaws.com/2020-08-01/studios/string/streaming-images/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "password",
    "name": "password"
  }'
```

`PATCH /2020-08-01/studios/{studioId}/streaming-images/{streamingImageId}`

Update streaming image.

> Body parameter

```json
{
  "description": "password",
  "name": "password"
}
```

<h3 id="updatestreamingimage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Client-Token|header|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.|
|streamingImageId|path|string|true|The streaming image ID.|
|studioId|path|string|true|The studio ID. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» description|body|string(password)|false|The description.|
|» name|body|string(password)|false|A friendly name for a streaming image resource.|

> Example responses

> 200 Response

```json
{
  "streamingImage": {
    "arn": {},
    "description": {},
    "ec2ImageId": {},
    "encryptionConfiguration": {
      "keyArn": {},
      "keyType": {}
    },
    "eulaIds": {},
    "name": {},
    "owner": {},
    "platform": {},
    "state": {},
    "statusCode": {},
    "statusMessage": {},
    "streamingImageId": {},
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

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="updatestreamingimage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateStreamingImageResponse](#schemaupdatestreamingimageresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetStreamingSession

<a id="opIdGetStreamingSession"></a>

> Code samples

```bash
curl https://nimble.us-east-1.amazonaws.com/2020-08-01/studios/string/streaming-sessions/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-08-01/studios/{studioId}/streaming-sessions/{sessionId}`

<p>Gets StreamingSession resource.</p> <p>Invoke this operation to poll for a streaming session state while creating or deleting a session.</p>

<h3 id="getstreamingsession-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sessionId|path|string|true|The streaming session ID.|
|studioId|path|string|true|The studio ID. |
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
  "session": {
    "arn": {},
    "automaticTerminationMode": {},
    "backupMode": {},
    "createdAt": {},
    "createdBy": {},
    "ec2InstanceType": {},
    "launchProfileId": {},
    "maxBackupsToRetain": {},
    "ownedBy": {},
    "sessionId": {},
    "sessionPersistenceMode": {},
    "startedAt": {},
    "startedBy": {},
    "startedFromBackupId": {},
    "state": {},
    "statusCode": {},
    "statusMessage": {},
    "stopAt": {},
    "stoppedAt": {},
    "stoppedBy": {},
    "streamingImageId": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "terminateAt": {},
    "updatedAt": {},
    "updatedBy": {},
    "volumeConfiguration": {
      "iops": {},
      "size": {},
      "throughput": {}
    },
    "volumeRetentionMode": {}
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

<h3 id="getstreamingsession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetStreamingSessionResponse](#schemagetstreamingsessionresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteStreamingSession

<a id="opIdDeleteStreamingSession"></a>

> Code samples

```bash
curl https://nimble.us-east-1.amazonaws.com/2020-08-01/studios/string/streaming-sessions/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2020-08-01/studios/{studioId}/streaming-sessions/{sessionId}`

<p>Deletes streaming session resource.</p> <p>After invoking this operation, use GetStreamingSession to poll the resource until it transitions to a <code>DELETED</code> state.</p> <p>A streaming session will count against your streaming session quota until it is marked <code>DELETED</code>.</p>

<h3 id="deletestreamingsession-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Client-Token|header|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.|
|sessionId|path|string|true|The streaming session ID.|
|studioId|path|string|true|The studio ID. |
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
  "session": {
    "arn": {},
    "automaticTerminationMode": {},
    "backupMode": {},
    "createdAt": {},
    "createdBy": {},
    "ec2InstanceType": {},
    "launchProfileId": {},
    "maxBackupsToRetain": {},
    "ownedBy": {},
    "sessionId": {},
    "sessionPersistenceMode": {},
    "startedAt": {},
    "startedBy": {},
    "startedFromBackupId": {},
    "state": {},
    "statusCode": {},
    "statusMessage": {},
    "stopAt": {},
    "stoppedAt": {},
    "stoppedBy": {},
    "streamingImageId": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "terminateAt": {},
    "updatedAt": {},
    "updatedBy": {},
    "volumeConfiguration": {
      "iops": {},
      "size": {},
      "throughput": {}
    },
    "volumeRetentionMode": {}
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

<h3 id="deletestreamingsession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteStreamingSessionResponse](#schemadeletestreamingsessionresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetStudio

<a id="opIdGetStudio"></a>

> Code samples

```bash
curl https://nimble.us-east-1.amazonaws.com/2020-08-01/studios/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-08-01/studios/{studioId}`

Get a studio resource.

<h3 id="getstudio-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|studioId|path|string|true|The studio ID. |
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
  "studio": {
    "adminRoleArn": {},
    "arn": {},
    "createdAt": {},
    "displayName": {},
    "homeRegion": {},
    "ssoClientId": {},
    "state": {},
    "statusCode": {},
    "statusMessage": {},
    "studioEncryptionConfiguration": {
      "keyArn": {},
      "keyType": {}
    },
    "studioId": {},
    "studioName": {},
    "studioUrl": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "updatedAt": {},
    "userRoleArn": {}
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

<h3 id="getstudio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetStudioResponse](#schemagetstudioresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteStudio

<a id="opIdDeleteStudio"></a>

> Code samples

```bash
curl https://nimble.us-east-1.amazonaws.com/2020-08-01/studios/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2020-08-01/studios/{studioId}`

Delete a studio resource.

<h3 id="deletestudio-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Client-Token|header|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.|
|studioId|path|string|true|The studio ID. |
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
  "studio": {
    "adminRoleArn": {},
    "arn": {},
    "createdAt": {},
    "displayName": {},
    "homeRegion": {},
    "ssoClientId": {},
    "state": {},
    "statusCode": {},
    "statusMessage": {},
    "studioEncryptionConfiguration": {
      "keyArn": {},
      "keyType": {}
    },
    "studioId": {},
    "studioName": {},
    "studioUrl": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "updatedAt": {},
    "userRoleArn": {}
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

<h3 id="deletestudio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteStudioResponse](#schemadeletestudioresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateStudio

<a id="opIdUpdateStudio"></a>

> Code samples

```bash
curl https://nimble.us-east-1.amazonaws.com/2020-08-01/studios/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "adminRoleArn": "string",
    "displayName": "password",
    "userRoleArn": "string"
  }'
```

`PATCH /2020-08-01/studios/{studioId}`

<p>Update a Studio resource.</p> <p>Currently, this operation only supports updating the displayName of your studio.</p>

> Body parameter

```json
{
  "adminRoleArn": "string",
  "displayName": "password",
  "userRoleArn": "string"
}
```

<h3 id="updatestudio-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Client-Token|header|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.|
|studioId|path|string|true|The studio ID. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» adminRoleArn|body|string|false|The IAM role that Studio Admins will assume when logging in to the Nimble Studio portal.|
|» displayName|body|string(password)|false|A friendly name for the studio.|
|» userRoleArn|body|string|false|The IAM role that Studio Users will assume when logging in to the Nimble Studio portal.|

> Example responses

> 200 Response

```json
{
  "studio": {
    "adminRoleArn": {},
    "arn": {},
    "createdAt": {},
    "displayName": {},
    "homeRegion": {},
    "ssoClientId": {},
    "state": {},
    "statusCode": {},
    "statusMessage": {},
    "studioEncryptionConfiguration": {
      "keyArn": {},
      "keyType": {}
    },
    "studioId": {},
    "studioName": {},
    "studioUrl": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "updatedAt": {},
    "userRoleArn": {}
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

<h3 id="updatestudio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateStudioResponse](#schemaupdatestudioresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetStudioComponent

<a id="opIdGetStudioComponent"></a>

> Code samples

```bash
curl https://nimble.us-east-1.amazonaws.com/2020-08-01/studios/string/studio-components/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-08-01/studios/{studioId}/studio-components/{studioComponentId}`

Gets a studio component resource.

<h3 id="getstudiocomponent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|studioComponentId|path|string|true|The studio component ID.|
|studioId|path|string|true|The studio ID. |
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
  "studioComponent": {
    "arn": {},
    "configuration": {
      "activeDirectoryConfiguration": {
        "computerAttributes": {},
        "directoryId": {},
        "organizationalUnitDistinguishedName": {}
      },
      "computeFarmConfiguration": {
        "activeDirectoryUser": {},
        "endpoint": {}
      },
      "licenseServiceConfiguration": {
        "endpoint": {}
      },
      "sharedFileSystemConfiguration": {
        "endpoint": {},
        "fileSystemId": {},
        "linuxMountPoint": {},
        "shareName": {},
        "windowsMountDrive": {}
      }
    },
    "createdAt": {},
    "createdBy": {},
    "description": {},
    "ec2SecurityGroupIds": {},
    "initializationScripts": {},
    "name": {},
    "runtimeRoleArn": {},
    "scriptParameters": {},
    "secureInitializationRoleArn": {},
    "state": {},
    "statusCode": {},
    "statusMessage": {},
    "studioComponentId": {},
    "subtype": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "type": {},
    "updatedAt": {},
    "updatedBy": {}
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

<h3 id="getstudiocomponent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetStudioComponentResponse](#schemagetstudiocomponentresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteStudioComponent

<a id="opIdDeleteStudioComponent"></a>

> Code samples

```bash
curl https://nimble.us-east-1.amazonaws.com/2020-08-01/studios/string/studio-components/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2020-08-01/studios/{studioId}/studio-components/{studioComponentId}`

Deletes a studio component resource.

<h3 id="deletestudiocomponent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Client-Token|header|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.|
|studioComponentId|path|string|true|The studio component ID.|
|studioId|path|string|true|The studio ID. |
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
  "studioComponent": {
    "arn": {},
    "configuration": {
      "activeDirectoryConfiguration": {
        "computerAttributes": {},
        "directoryId": {},
        "organizationalUnitDistinguishedName": {}
      },
      "computeFarmConfiguration": {
        "activeDirectoryUser": {},
        "endpoint": {}
      },
      "licenseServiceConfiguration": {
        "endpoint": {}
      },
      "sharedFileSystemConfiguration": {
        "endpoint": {},
        "fileSystemId": {},
        "linuxMountPoint": {},
        "shareName": {},
        "windowsMountDrive": {}
      }
    },
    "createdAt": {},
    "createdBy": {},
    "description": {},
    "ec2SecurityGroupIds": {},
    "initializationScripts": {},
    "name": {},
    "runtimeRoleArn": {},
    "scriptParameters": {},
    "secureInitializationRoleArn": {},
    "state": {},
    "statusCode": {},
    "statusMessage": {},
    "studioComponentId": {},
    "subtype": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "type": {},
    "updatedAt": {},
    "updatedBy": {}
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

<h3 id="deletestudiocomponent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteStudioComponentResponse](#schemadeletestudiocomponentresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateStudioComponent

<a id="opIdUpdateStudioComponent"></a>

> Code samples

```bash
curl https://nimble.us-east-1.amazonaws.com/2020-08-01/studios/string/studio-components/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "configuration": {
      "activeDirectoryConfiguration": {
        "computerAttributes": {},
        "directoryId": {},
        "organizationalUnitDistinguishedName": {}
      },
      "computeFarmConfiguration": {
        "activeDirectoryUser": {},
        "endpoint": {}
      },
      "licenseServiceConfiguration": {
        "endpoint": {}
      },
      "sharedFileSystemConfiguration": {
        "endpoint": {},
        "fileSystemId": {},
        "linuxMountPoint": {},
        "shareName": {},
        "windowsMountDrive": {}
      }
    },
    "description": "password",
    "ec2SecurityGroupIds": [
      "string"
    ],
    "initializationScripts": [
      {
        "launchProfileProtocolVersion": {},
        "platform": {},
        "runContext": {},
        "script": {}
      }
    ],
    "name": "password",
    "runtimeRoleArn": "string",
    "scriptParameters": [
      {
        "key": {},
        "value": {}
      }
    ],
    "secureInitializationRoleArn": "string",
    "subtype": "AWS_MANAGED_MICROSOFT_AD",
    "type": "ACTIVE_DIRECTORY"
  }'
```

`PATCH /2020-08-01/studios/{studioId}/studio-components/{studioComponentId}`

Updates a studio component resource.

> Body parameter

```json
{
  "configuration": {
    "activeDirectoryConfiguration": {
      "computerAttributes": {},
      "directoryId": {},
      "organizationalUnitDistinguishedName": {}
    },
    "computeFarmConfiguration": {
      "activeDirectoryUser": {},
      "endpoint": {}
    },
    "licenseServiceConfiguration": {
      "endpoint": {}
    },
    "sharedFileSystemConfiguration": {
      "endpoint": {},
      "fileSystemId": {},
      "linuxMountPoint": {},
      "shareName": {},
      "windowsMountDrive": {}
    }
  },
  "description": "password",
  "ec2SecurityGroupIds": [
    "string"
  ],
  "initializationScripts": [
    {
      "launchProfileProtocolVersion": {},
      "platform": {},
      "runContext": {},
      "script": {}
    }
  ],
  "name": "password",
  "runtimeRoleArn": "string",
  "scriptParameters": [
    {
      "key": {},
      "value": {}
    }
  ],
  "secureInitializationRoleArn": "string",
  "subtype": "AWS_MANAGED_MICROSOFT_AD",
  "type": "ACTIVE_DIRECTORY"
}
```

<h3 id="updatestudiocomponent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Client-Token|header|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.|
|studioComponentId|path|string|true|The studio component ID.|
|studioId|path|string|true|The studio ID. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» configuration|body|object|false|The configuration of the studio component, based on component type.|
|» » activeDirectoryConfiguration|body|object|false|none|
|» » » computerAttributes|body|object|false|none|
|» » » directoryId|body|object|false|none|
|» » » organizationalUnitDistinguishedName|body|object|false|none|
|» » computeFarmConfiguration|body|object|false|none|
|» » » activeDirectoryUser|body|object|false|none|
|» » » endpoint|body|object|false|none|
|» » licenseServiceConfiguration|body|object|false|none|
|» » » endpoint|body|object|false|none|
|» » sharedFileSystemConfiguration|body|object|false|none|
|» » » endpoint|body|object|false|none|
|» » » fileSystemId|body|object|false|none|
|» » » linuxMountPoint|body|object|false|none|
|» » » shareName|body|object|false|none|
|» » » windowsMountDrive|body|object|false|none|
|» description|body|string(password)|false|The description.|
|» ec2SecurityGroupIds|body|[[SecurityGroupId](#schemasecuritygroupid)]|false|The EC2 security groups that control access to the studio component.|
|» initializationScripts|body|[[StudioComponentInitializationScript](#schemastudiocomponentinitializationscript)]|false|Initialization scripts for studio components.|
|» name|body|string(password)|false|The name for the studio component.|
|» runtimeRoleArn|body|string|false|An IAM role attached to a Studio Component that gives the studio component access to Amazon Web Services resources at anytime while the instance is running. |
|» scriptParameters|body|[[ScriptParameterKeyValue](#schemascriptparameterkeyvalue)]|false|Parameters for the studio component scripts.|
|» secureInitializationRoleArn|body|string|false|An IAM role attached to Studio Component when the system initialization script runs which give the studio component access to Amazon Web Services resources when the system initialization script runs.|
|» subtype|body|string|false|The specific subtype of a studio component.|
|» type|body|string|false|The type of the studio component.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» subtype|AWS_MANAGED_MICROSOFT_AD|
|» subtype|AMAZON_FSX_FOR_WINDOWS|
|» subtype|AMAZON_FSX_FOR_LUSTRE|
|» subtype|CUSTOM|
|» type|ACTIVE_DIRECTORY|
|» type|SHARED_FILE_SYSTEM|
|» type|COMPUTE_FARM|
|» type|LICENSE_SERVICE|
|» type|CUSTOM|

> Example responses

> 200 Response

```json
{
  "studioComponent": {
    "arn": {},
    "configuration": {
      "activeDirectoryConfiguration": {
        "computerAttributes": {},
        "directoryId": {},
        "organizationalUnitDistinguishedName": {}
      },
      "computeFarmConfiguration": {
        "activeDirectoryUser": {},
        "endpoint": {}
      },
      "licenseServiceConfiguration": {
        "endpoint": {}
      },
      "sharedFileSystemConfiguration": {
        "endpoint": {},
        "fileSystemId": {},
        "linuxMountPoint": {},
        "shareName": {},
        "windowsMountDrive": {}
      }
    },
    "createdAt": {},
    "createdBy": {},
    "description": {},
    "ec2SecurityGroupIds": {},
    "initializationScripts": {},
    "name": {},
    "runtimeRoleArn": {},
    "scriptParameters": {},
    "secureInitializationRoleArn": {},
    "state": {},
    "statusCode": {},
    "statusMessage": {},
    "studioComponentId": {},
    "subtype": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "type": {},
    "updatedAt": {},
    "updatedBy": {}
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

<h3 id="updatestudiocomponent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateStudioComponentResponse](#schemaupdatestudiocomponentresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetStudioMember

<a id="opIdGetStudioMember"></a>

> Code samples

```bash
curl https://nimble.us-east-1.amazonaws.com/2020-08-01/studios/string/membership/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-08-01/studios/{studioId}/membership/{principalId}`

Get a user's membership in a studio.

<h3 id="getstudiomember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|principalId|path|string|true|The principal ID. This currently supports a IAM Identity Center UserId. |
|studioId|path|string|true|The studio ID. |
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
  "member": {
    "identityStoreId": {},
    "persona": {},
    "principalId": {},
    "sid": {}
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

<h3 id="getstudiomember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetStudioMemberResponse](#schemagetstudiomemberresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteStudioMember

<a id="opIdDeleteStudioMember"></a>

> Code samples

```bash
curl https://nimble.us-east-1.amazonaws.com/2020-08-01/studios/string/membership/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2020-08-01/studios/{studioId}/membership/{principalId}`

Delete a user from studio membership.

<h3 id="deletestudiomember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Client-Token|header|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.|
|principalId|path|string|true|The principal ID. This currently supports a IAM Identity Center UserId. |
|studioId|path|string|true|The studio ID. |
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

<h3 id="deletestudiomember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteStudioMemberResponse](#schemadeletestudiomemberresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetEula

<a id="opIdGetEula"></a>

> Code samples

```bash
curl https://nimble.us-east-1.amazonaws.com/2020-08-01/eulas/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-08-01/eulas/{eulaId}`

Get EULA.

<h3 id="geteula-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|eulaId|path|string|true|The EULA ID.|
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
  "eula": {
    "content": {},
    "createdAt": {},
    "eulaId": {},
    "name": {},
    "updatedAt": {}
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

<h3 id="geteula-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetEulaResponse](#schemageteularesponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetLaunchProfileDetails

<a id="opIdGetLaunchProfileDetails"></a>

> Code samples

```bash
curl https://nimble.us-east-1.amazonaws.com/2020-08-01/studios/string/launch-profiles/string/details \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/details`

Launch profile details include the launch profile resource and summary information of resources that are used by, or available to, the launch profile. This includes the name and description of all studio components used by the launch profiles, and the name and description of streaming images that can be used with this launch profile.

<h3 id="getlaunchprofiledetails-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|launchProfileId|path|string|true|The ID of the launch profile used to control access from the streaming session.|
|studioId|path|string|true|The studio ID. |
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
  "launchProfile": {
    "arn": {},
    "createdAt": {},
    "createdBy": {},
    "description": {},
    "ec2SubnetIds": {},
    "launchProfileId": {},
    "launchProfileProtocolVersions": {},
    "name": {},
    "state": {},
    "statusCode": {},
    "statusMessage": {},
    "streamConfiguration": {
      "automaticTerminationMode": {},
      "clipboardMode": {},
      "ec2InstanceTypes": {},
      "maxSessionLengthInMinutes": {},
      "maxStoppedSessionLengthInMinutes": {},
      "sessionBackup": {
        "maxBackupsToRetain": {},
        "mode": {}
      },
      "sessionPersistenceMode": {},
      "sessionStorage": {
        "mode": {},
        "root": {
          "linux": {},
          "windows": {}
        }
      },
      "streamingImageIds": {},
      "volumeConfiguration": {
        "iops": {},
        "size": {},
        "throughput": {}
      }
    },
    "studioComponentIds": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "updatedAt": {},
    "updatedBy": {},
    "validationResults": {}
  },
  "streamingImages": {},
  "studioComponentSummaries": {}
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

<h3 id="getlaunchprofiledetails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetLaunchProfileDetailsResponse](#schemagetlaunchprofiledetailsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetLaunchProfileInitialization

<a id="opIdGetLaunchProfileInitialization"></a>

> Code samples

```bash
curl 'https://nimble.us-east-1.amazonaws.com/2020-08-01/studios/string/launch-profiles/string/init#launchProfileProtocolVersions&launchPurpose&platform?launchProfileProtocolVersions=string&launchPurpose=string&platform=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/init#launchProfileProtocolVersions&launchPurpose&platform`

Get a launch profile initialization.

<h3 id="getlaunchprofileinitialization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|launchProfileId|path|string|true|The ID of the launch profile used to control access from the streaming session.|
|launchProfileProtocolVersions|query|[[String](#schemastring)]|true|The launch profile protocol versions supported by the client.|
|launchPurpose|query|string|true|The launch purpose.|
|platform|query|string|true|The platform where this Launch Profile will be used, either Windows or Linux.|
|studioId|path|string|true|The studio ID. |
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
  "launchProfileInitialization": {
    "activeDirectory": {
      "computerAttributes": {},
      "directoryId": {},
      "directoryName": {},
      "dnsIpAddresses": {},
      "organizationalUnitDistinguishedName": {},
      "studioComponentId": {},
      "studioComponentName": {}
    },
    "ec2SecurityGroupIds": {},
    "launchProfileId": {},
    "launchProfileProtocolVersion": {},
    "launchPurpose": {},
    "name": {},
    "platform": {},
    "systemInitializationScripts": {},
    "userInitializationScripts": {}
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

<h3 id="getlaunchprofileinitialization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetLaunchProfileInitializationResponse](#schemagetlaunchprofileinitializationresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetStreamingSessionBackup

<a id="opIdGetStreamingSessionBackup"></a>

> Code samples

```bash
curl https://nimble.us-east-1.amazonaws.com/2020-08-01/studios/string/streaming-session-backups/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-08-01/studios/{studioId}/streaming-session-backups/{backupId}`

<p>Gets <code>StreamingSessionBackup</code> resource.</p> <p>Invoke this operation to poll for a streaming session backup while stopping a streaming session.</p>

<h3 id="getstreamingsessionbackup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|backupId|path|string|true|The ID of the backup.|
|studioId|path|string|true|The studio ID. |
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
  "streamingSessionBackup": {
    "arn": {},
    "backupId": {},
    "createdAt": {},
    "launchProfileId": {},
    "ownedBy": {},
    "sessionId": {},
    "state": "CREATE_IN_PROGRESS",
    "statusCode": {},
    "statusMessage": {},
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

> 485 Response

```json
null
```

<h3 id="getstreamingsessionbackup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetStreamingSessionBackupResponse](#schemagetstreamingsessionbackupresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetStreamingSessionStream

<a id="opIdGetStreamingSessionStream"></a>

> Code samples

```bash
curl https://nimble.us-east-1.amazonaws.com/2020-08-01/studios/string/streaming-sessions/string/streams/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-08-01/studios/{studioId}/streaming-sessions/{sessionId}/streams/{streamId}`

<p>Gets a StreamingSessionStream for a streaming session.</p> <p>Invoke this operation to poll the resource after invoking <code>CreateStreamingSessionStream</code>.</p> <p>After the <code>StreamingSessionStream</code> changes to the <code>READY</code> state, the url property will contain a stream to be used with the DCV streaming client.</p>

<h3 id="getstreamingsessionstream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sessionId|path|string|true|The streaming session ID.|
|streamId|path|string|true|The streaming session stream ID.|
|studioId|path|string|true|The studio ID. |
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
  "stream": {
    "createdAt": {},
    "createdBy": {},
    "expiresAt": {},
    "ownedBy": {},
    "state": {},
    "statusCode": {},
    "streamId": {},
    "url": {}
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

<h3 id="getstreamingsessionstream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetStreamingSessionStreamResponse](#schemagetstreamingsessionstreamresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListEulas

<a id="opIdListEulas"></a>

> Code samples

```bash
curl https://nimble.us-east-1.amazonaws.com/2020-08-01/eulas \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-08-01/eulas`

List EULAs.

<h3 id="listeulas-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|eulaIds|query|[[String](#schemastring)]|false|The list of EULA IDs that should be returned|
|nextToken|query|string|false|The token for the next set of results, or null if there are no more results.|
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
  "eulas": {},
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

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="listeulas-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListEulasResponse](#schemalisteulasresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListLaunchProfileMembers

<a id="opIdListLaunchProfileMembers"></a>

> Code samples

```bash
curl https://nimble.us-east-1.amazonaws.com/2020-08-01/studios/string/launch-profiles/string/membership \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/membership`

Get all users in a given launch profile membership.

<h3 id="listlaunchprofilemembers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|launchProfileId|path|string|true|The ID of the launch profile used to control access from the streaming session.|
|maxResults|query|integer|false|The max number of results to return in the response.|
|nextToken|query|string|false|The token for the next set of results, or null if there are no more results.|
|studioId|path|string|true|The studio ID. |
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
  "members": {},
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

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="listlaunchprofilemembers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListLaunchProfileMembersResponse](#schemalistlaunchprofilemembersresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutLaunchProfileMembers

<a id="opIdPutLaunchProfileMembers"></a>

> Code samples

```bash
curl https://nimble.us-east-1.amazonaws.com/2020-08-01/studios/string/launch-profiles/string/membership \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "identityStoreId": "string",
    "members": [
      {
        "persona": {},
        "principalId": {}
      }
    ]
  }'
```

`POST /2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/membership`

Add/update users with given persona to launch profile membership.

> Body parameter

```json
{
  "identityStoreId": "string",
  "members": [
    {
      "persona": {},
      "principalId": {}
    }
  ]
}
```

<h3 id="putlaunchprofilemembers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Client-Token|header|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.|
|launchProfileId|path|string|true|The ID of the launch profile used to control access from the streaming session.|
|studioId|path|string|true|The studio ID. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» identityStoreId|body|string|true|The ID of the identity store.|
|» members|body|[[NewLaunchProfileMember](#schemanewlaunchprofilemember)]|true|A list of members.|

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

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="putlaunchprofilemembers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutLaunchProfileMembersResponse](#schemaputlaunchprofilemembersresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListStreamingSessionBackups

<a id="opIdListStreamingSessionBackups"></a>

> Code samples

```bash
curl https://nimble.us-east-1.amazonaws.com/2020-08-01/studios/string/streaming-session-backups \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-08-01/studios/{studioId}/streaming-session-backups`

Lists the backups of a streaming session in a studio.

<h3 id="liststreamingsessionbackups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|The token for the next set of results, or null if there are no more results.|
|ownedBy|query|string|false|The user ID of the user that owns the streaming session.|
|studioId|path|string|true|The studio ID. |
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
  "nextToken": {},
  "streamingSessionBackups": {}
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

<h3 id="liststreamingsessionbackups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListStreamingSessionBackupsResponse](#schemaliststreamingsessionbackupsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListStudioMembers

<a id="opIdListStudioMembers"></a>

> Code samples

```bash
curl https://nimble.us-east-1.amazonaws.com/2020-08-01/studios/string/membership \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-08-01/studios/{studioId}/membership`

<p>Get all users in a given studio membership.</p> <note> <p> <code>ListStudioMembers</code> only returns admin members.</p> </note>

<h3 id="liststudiomembers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|The max number of results to return in the response.|
|nextToken|query|string|false|The token for the next set of results, or null if there are no more results.|
|studioId|path|string|true|The studio ID. |
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
  "members": {},
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

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="liststudiomembers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListStudioMembersResponse](#schemaliststudiomembersresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutStudioMembers

<a id="opIdPutStudioMembers"></a>

> Code samples

```bash
curl https://nimble.us-east-1.amazonaws.com/2020-08-01/studios/string/membership \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "identityStoreId": "string",
    "members": [
      {
        "persona": {},
        "principalId": {}
      }
    ]
  }'
```

`POST /2020-08-01/studios/{studioId}/membership`

Add/update users with given persona to studio membership.

> Body parameter

```json
{
  "identityStoreId": "string",
  "members": [
    {
      "persona": {},
      "principalId": {}
    }
  ]
}
```

<h3 id="putstudiomembers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Client-Token|header|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.|
|studioId|path|string|true|The studio ID. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» identityStoreId|body|string|true|The ID of the identity store.|
|» members|body|[[NewStudioMember](#schemanewstudiomember)]|true|A list of members.|

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

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="putstudiomembers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutStudioMembersResponse](#schemaputstudiomembersresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://nimble.us-east-1.amazonaws.com/2020-08-01/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-08-01/tags/{resourceArn}`

<p>Gets the tags for a resource, given its Amazon Resource Names (ARN).</p> <p>This operation supports ARNs for all resource types in Nimble Studio that support tags, including studio, studio component, launch profile, streaming image, and streaming session. All resources that can be tagged will contain an ARN property, so you do not have to create this ARN yourself.</p>

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The Amazon Resource Name (ARN) of the resource for which you want to list tags.|
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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://nimble.us-east-1.amazonaws.com/2020-08-01/tags/string \
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

`POST /2020-08-01/tags/{resourceArn}`

Creates tags for a resource, given its ARN.

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
|resourceArn|path|string|true|The Amazon Resource Name (ARN) of the resource you want to add tags to. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tags|body|object|false|A collection of labels, in the form of key-value pairs, that apply to this resource.|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartStreamingSession

<a id="opIdStartStreamingSession"></a>

> Code samples

```bash
curl https://nimble.us-east-1.amazonaws.com/2020-08-01/studios/string/streaming-sessions/string/start \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "backupId": "string"
  }'
```

`POST /2020-08-01/studios/{studioId}/streaming-sessions/{sessionId}/start`

Transitions sessions from the <code>STOPPED</code> state into the <code>READY</code> state. The <code>START_IN_PROGRESS</code> state is the intermediate state between the <code>STOPPED</code> and <code>READY</code> states.

> Body parameter

```json
{
  "backupId": "string"
}
```

<h3 id="startstreamingsession-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Client-Token|header|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.|
|sessionId|path|string|true|The streaming session ID for the <code>StartStreamingSessionRequest</code>.|
|studioId|path|string|true|The studio ID for the StartStreamingSessionRequest.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» backupId|body|string|false|The ID of the backup.|

> Example responses

> 200 Response

```json
{
  "session": {
    "arn": {},
    "automaticTerminationMode": {},
    "backupMode": {},
    "createdAt": {},
    "createdBy": {},
    "ec2InstanceType": {},
    "launchProfileId": {},
    "maxBackupsToRetain": {},
    "ownedBy": {},
    "sessionId": {},
    "sessionPersistenceMode": {},
    "startedAt": {},
    "startedBy": {},
    "startedFromBackupId": {},
    "state": {},
    "statusCode": {},
    "statusMessage": {},
    "stopAt": {},
    "stoppedAt": {},
    "stoppedBy": {},
    "streamingImageId": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "terminateAt": {},
    "updatedAt": {},
    "updatedBy": {},
    "volumeConfiguration": {
      "iops": {},
      "size": {},
      "throughput": {}
    },
    "volumeRetentionMode": {}
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

<h3 id="startstreamingsession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartStreamingSessionResponse](#schemastartstreamingsessionresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartStudioSSOConfigurationRepair

<a id="opIdStartStudioSSOConfigurationRepair"></a>

> Code samples

```bash
curl https://nimble.us-east-1.amazonaws.com/2020-08-01/studios/string/sso-configuration \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`PUT /2020-08-01/studios/{studioId}/sso-configuration`

<p>Repairs the IAM Identity Center configuration for a given studio.</p> <p>If the studio has a valid IAM Identity Center configuration currently associated with it, this operation will fail with a validation error.</p> <p>If the studio does not have a valid IAM Identity Center configuration currently associated with it, then a new IAM Identity Center application is created for the studio and the studio is changed to the <code>READY</code> state.</p> <p>After the IAM Identity Center application is repaired, you must use the Amazon Nimble Studio console to add administrators and users to your studio.</p>

<h3 id="startstudiossoconfigurationrepair-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Client-Token|header|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.|
|studioId|path|string|true|The studio ID. |
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
  "studio": {
    "adminRoleArn": {},
    "arn": {},
    "createdAt": {},
    "displayName": {},
    "homeRegion": {},
    "ssoClientId": {},
    "state": {},
    "statusCode": {},
    "statusMessage": {},
    "studioEncryptionConfiguration": {
      "keyArn": {},
      "keyType": {}
    },
    "studioId": {},
    "studioName": {},
    "studioUrl": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "updatedAt": {},
    "userRoleArn": {}
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

<h3 id="startstudiossoconfigurationrepair-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartStudioSSOConfigurationRepairResponse](#schemastartstudiossoconfigurationrepairresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopStreamingSession

<a id="opIdStopStreamingSession"></a>

> Code samples

```bash
curl https://nimble.us-east-1.amazonaws.com/2020-08-01/studios/string/streaming-sessions/string/stop \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "volumeRetentionMode": "RETAIN"
  }'
```

`POST /2020-08-01/studios/{studioId}/streaming-sessions/{sessionId}/stop`

Transitions sessions from the <code>READY</code> state into the <code>STOPPED</code> state. The <code>STOP_IN_PROGRESS</code> state is the intermediate state between the <code>READY</code> and <code>STOPPED</code> states.

> Body parameter

```json
{
  "volumeRetentionMode": "RETAIN"
}
```

<h3 id="stopstreamingsession-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Client-Token|header|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.|
|sessionId|path|string|true|The streaming session ID for the <code>StopStreamingSessionRequest</code>.|
|studioId|path|string|true|The studioId for the StopStreamingSessionRequest.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» volumeRetentionMode|body|string|false|Adds additional instructions to a streaming session stop action to either retain the EBS volumes or delete the EBS volumes.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» volumeRetentionMode|RETAIN|
|» volumeRetentionMode|DELETE|

> Example responses

> 200 Response

```json
{
  "session": {
    "arn": {},
    "automaticTerminationMode": {},
    "backupMode": {},
    "createdAt": {},
    "createdBy": {},
    "ec2InstanceType": {},
    "launchProfileId": {},
    "maxBackupsToRetain": {},
    "ownedBy": {},
    "sessionId": {},
    "sessionPersistenceMode": {},
    "startedAt": {},
    "startedBy": {},
    "startedFromBackupId": {},
    "state": {},
    "statusCode": {},
    "statusMessage": {},
    "stopAt": {},
    "stoppedAt": {},
    "stoppedBy": {},
    "streamingImageId": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "terminateAt": {},
    "updatedAt": {},
    "updatedBy": {},
    "volumeConfiguration": {
      "iops": {},
      "size": {},
      "throughput": {}
    },
    "volumeRetentionMode": {}
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

<h3 id="stopstreamingsession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopStreamingSessionResponse](#schemastopstreamingsessionresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://nimble.us-east-1.amazonaws.com/2020-08-01/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2020-08-01/tags/{resourceArn}#tagKeys`

Deletes the tags for a resource.

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|Identifies the Amazon Resource Name(ARN) key from which you are removing tags. |
|tagKeys|query|[[String](#schemastring)]|true|One or more tag keys. Specify only the tag keys, not the tag values.|
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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AcceptEulasResponse">AcceptEulasResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaccepteulasresponse"></a>
<a id="schema_AcceptEulasResponse"></a>
<a id="tocSaccepteulasresponse"></a>
<a id="tocsaccepteulasresponse"></a>

```json
{
  "eulaAcceptances": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eulaAcceptances|object|false|none|none|

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
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

<h2 id="tocS_ConflictException">ConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaconflictexception"></a>
<a id="schema_ConflictException"></a>
<a id="tocSconflictexception"></a>
<a id="tocsconflictexception"></a>

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

<h2 id="tocS_InternalServerErrorException">InternalServerErrorException</h2>
<!-- backwards compatibility -->
<a id="schemainternalservererrorexception"></a>
<a id="schema_InternalServerErrorException"></a>
<a id="tocSinternalservererrorexception"></a>
<a id="tocsinternalservererrorexception"></a>

```json
null
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

<h2 id="tocS_CreateLaunchProfileResponse">CreateLaunchProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatelaunchprofileresponse"></a>
<a id="schema_CreateLaunchProfileResponse"></a>
<a id="tocScreatelaunchprofileresponse"></a>
<a id="tocscreatelaunchprofileresponse"></a>

```json
{
  "launchProfile": {
    "arn": {},
    "createdAt": {},
    "createdBy": {},
    "description": {},
    "ec2SubnetIds": {},
    "launchProfileId": {},
    "launchProfileProtocolVersions": {},
    "name": {},
    "state": {},
    "statusCode": {},
    "statusMessage": {},
    "streamConfiguration": {
      "automaticTerminationMode": {},
      "clipboardMode": {},
      "ec2InstanceTypes": {},
      "maxSessionLengthInMinutes": {},
      "maxStoppedSessionLengthInMinutes": {},
      "sessionBackup": {
        "maxBackupsToRetain": {},
        "mode": {}
      },
      "sessionPersistenceMode": {},
      "sessionStorage": {
        "mode": {},
        "root": {
          "linux": {},
          "windows": {}
        }
      },
      "streamingImageIds": {},
      "volumeConfiguration": {
        "iops": {},
        "size": {},
        "throughput": {}
      }
    },
    "studioComponentIds": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "updatedAt": {},
    "updatedBy": {},
    "validationResults": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|launchProfile|object|false|none|none|

<h2 id="tocS_EC2SubnetId">EC2SubnetId</h2>
<!-- backwards compatibility -->
<a id="schemaec2subnetid"></a>
<a id="schema_EC2SubnetId"></a>
<a id="tocSec2subnetid"></a>
<a id="tocsec2subnetid"></a>

```json
"string"
```

<h2 id="tocS_LaunchProfileProtocolVersion">LaunchProfileProtocolVersion</h2>
<!-- backwards compatibility -->
<a id="schemalaunchprofileprotocolversion"></a>
<a id="schema_LaunchProfileProtocolVersion"></a>
<a id="tocSlaunchprofileprotocolversion"></a>
<a id="tocslaunchprofileprotocolversion"></a>

```json
"string"
```

The version number of the protocol that is used by the launch profile. The only valid version is "2021-03-31".

<h2 id="tocS_AutomaticTerminationMode">AutomaticTerminationMode</h2>
<!-- backwards compatibility -->
<a id="schemaautomaticterminationmode"></a>
<a id="schema_AutomaticTerminationMode"></a>
<a id="tocSautomaticterminationmode"></a>
<a id="tocsautomaticterminationmode"></a>

```json
"DEACTIVATED"
```

<h2 id="tocS_StreamingClipboardMode">StreamingClipboardMode</h2>
<!-- backwards compatibility -->
<a id="schemastreamingclipboardmode"></a>
<a id="schema_StreamingClipboardMode"></a>
<a id="tocSstreamingclipboardmode"></a>
<a id="tocsstreamingclipboardmode"></a>

```json
"ENABLED"
```

<h2 id="tocS_StreamingInstanceTypeList">StreamingInstanceTypeList</h2>
<!-- backwards compatibility -->
<a id="schemastreaminginstancetypelist"></a>
<a id="schema_StreamingInstanceTypeList"></a>
<a id="tocSstreaminginstancetypelist"></a>
<a id="tocsstreaminginstancetypelist"></a>

```json
[
  "g4dn.xlarge"
]
```

The EC2 instance types that users can select from when launching a streaming session with this launch profile.

<h2 id="tocS_StreamConfigurationMaxSessionLengthInMinutes">StreamConfigurationMaxSessionLengthInMinutes</h2>
<!-- backwards compatibility -->
<a id="schemastreamconfigurationmaxsessionlengthinminutes"></a>
<a id="schema_StreamConfigurationMaxSessionLengthInMinutes"></a>
<a id="tocSstreamconfigurationmaxsessionlengthinminutes"></a>
<a id="tocsstreamconfigurationmaxsessionlengthinminutes"></a>

```json
1
```

<h2 id="tocS_StreamConfigurationMaxStoppedSessionLengthInMinutes">StreamConfigurationMaxStoppedSessionLengthInMinutes</h2>
<!-- backwards compatibility -->
<a id="schemastreamconfigurationmaxstoppedsessionlengthinminutes"></a>
<a id="schema_StreamConfigurationMaxStoppedSessionLengthInMinutes"></a>
<a id="tocSstreamconfigurationmaxstoppedsessionlengthinminutes"></a>
<a id="tocsstreamconfigurationmaxstoppedsessionlengthinminutes"></a>

```json
0
```

<h2 id="tocS_StreamConfigurationSessionBackup">StreamConfigurationSessionBackup</h2>
<!-- backwards compatibility -->
<a id="schemastreamconfigurationsessionbackup"></a>
<a id="schema_StreamConfigurationSessionBackup"></a>
<a id="tocSstreamconfigurationsessionbackup"></a>
<a id="tocsstreamconfigurationsessionbackup"></a>

```json
{
  "maxBackupsToRetain": {},
  "mode": {}
}
```

Configures how streaming sessions are backed up when launched from this launch profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxBackupsToRetain|object|false|none|none|
|mode|object|false|none|none|

<h2 id="tocS_SessionPersistenceMode">SessionPersistenceMode</h2>
<!-- backwards compatibility -->
<a id="schemasessionpersistencemode"></a>
<a id="schema_SessionPersistenceMode"></a>
<a id="tocSsessionpersistencemode"></a>
<a id="tocssessionpersistencemode"></a>

```json
"DEACTIVATED"
```

<h2 id="tocS_StreamConfigurationSessionStorage">StreamConfigurationSessionStorage</h2>
<!-- backwards compatibility -->
<a id="schemastreamconfigurationsessionstorage"></a>
<a id="schema_StreamConfigurationSessionStorage"></a>
<a id="tocSstreamconfigurationsessionstorage"></a>
<a id="tocsstreamconfigurationsessionstorage"></a>

```json
{
  "mode": {},
  "root": {
    "linux": {},
    "windows": {}
  }
}
```

The configuration for a streaming session’s upload storage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mode|object|true|none|none|
|root|object|false|none|none|

<h2 id="tocS_StreamingImageIdList">StreamingImageIdList</h2>
<!-- backwards compatibility -->
<a id="schemastreamingimageidlist"></a>
<a id="schema_StreamingImageIdList"></a>
<a id="tocSstreamingimageidlist"></a>
<a id="tocsstreamingimageidlist"></a>

```json
[
  "string"
]
```

A list of streaming image IDs that users can select from when launching a streaming session with this launch profile.

<h2 id="tocS_VolumeConfiguration">VolumeConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemavolumeconfiguration"></a>
<a id="schema_VolumeConfiguration"></a>
<a id="tocSvolumeconfiguration"></a>
<a id="tocsvolumeconfiguration"></a>

```json
{
  "iops": {},
  "size": {},
  "throughput": {}
}
```

<p>Custom volume configuration for the root volumes that are attached to streaming sessions.</p> <p>This parameter is only allowed when <code>sessionPersistenceMode</code> is <code>ACTIVATED</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|iops|object|false|none|none|
|size|object|false|none|none|
|throughput|object|false|none|none|

<h2 id="tocS_CreateStreamingImageResponse">CreateStreamingImageResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatestreamingimageresponse"></a>
<a id="schema_CreateStreamingImageResponse"></a>
<a id="tocScreatestreamingimageresponse"></a>
<a id="tocscreatestreamingimageresponse"></a>

```json
{
  "streamingImage": {
    "arn": {},
    "description": {},
    "ec2ImageId": {},
    "encryptionConfiguration": {
      "keyArn": {},
      "keyType": {}
    },
    "eulaIds": {},
    "name": {},
    "owner": {},
    "platform": {},
    "state": {},
    "statusCode": {},
    "statusMessage": {},
    "streamingImageId": {},
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
|streamingImage|object|false|none|none|

<h2 id="tocS_CreateStreamingSessionResponse">CreateStreamingSessionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatestreamingsessionresponse"></a>
<a id="schema_CreateStreamingSessionResponse"></a>
<a id="tocScreatestreamingsessionresponse"></a>
<a id="tocscreatestreamingsessionresponse"></a>

```json
{
  "session": {
    "arn": {},
    "automaticTerminationMode": {},
    "backupMode": {},
    "createdAt": {},
    "createdBy": {},
    "ec2InstanceType": {},
    "launchProfileId": {},
    "maxBackupsToRetain": {},
    "ownedBy": {},
    "sessionId": {},
    "sessionPersistenceMode": {},
    "startedAt": {},
    "startedBy": {},
    "startedFromBackupId": {},
    "state": {},
    "statusCode": {},
    "statusMessage": {},
    "stopAt": {},
    "stoppedAt": {},
    "stoppedBy": {},
    "streamingImageId": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "terminateAt": {},
    "updatedAt": {},
    "updatedBy": {},
    "volumeConfiguration": {
      "iops": {},
      "size": {},
      "throughput": {}
    },
    "volumeRetentionMode": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|session|object|false|none|none|

<h2 id="tocS_CreateStreamingSessionStreamResponse">CreateStreamingSessionStreamResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatestreamingsessionstreamresponse"></a>
<a id="schema_CreateStreamingSessionStreamResponse"></a>
<a id="tocScreatestreamingsessionstreamresponse"></a>
<a id="tocscreatestreamingsessionstreamresponse"></a>

```json
{
  "stream": {
    "createdAt": {},
    "createdBy": {},
    "expiresAt": {},
    "ownedBy": {},
    "state": {},
    "statusCode": {},
    "streamId": {},
    "url": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stream|object|false|none|none|

<h2 id="tocS_CreateStudioResponse">CreateStudioResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatestudioresponse"></a>
<a id="schema_CreateStudioResponse"></a>
<a id="tocScreatestudioresponse"></a>
<a id="tocscreatestudioresponse"></a>

```json
{
  "studio": {
    "adminRoleArn": {},
    "arn": {},
    "createdAt": {},
    "displayName": {},
    "homeRegion": {},
    "ssoClientId": {},
    "state": {},
    "statusCode": {},
    "statusMessage": {},
    "studioEncryptionConfiguration": {
      "keyArn": {},
      "keyType": {}
    },
    "studioId": {},
    "studioName": {},
    "studioUrl": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "updatedAt": {},
    "userRoleArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|studio|object|false|none|none|

<h2 id="tocS_StudioEncryptionConfigurationKeyArn">StudioEncryptionConfigurationKeyArn</h2>
<!-- backwards compatibility -->
<a id="schemastudioencryptionconfigurationkeyarn"></a>
<a id="schema_StudioEncryptionConfigurationKeyArn"></a>
<a id="tocSstudioencryptionconfigurationkeyarn"></a>
<a id="tocsstudioencryptionconfigurationkeyarn"></a>

```json
"string"
```

The Amazon Resource Name (ARN) for a KMS key that is used to encrypt studio data.

<h2 id="tocS_StudioEncryptionConfigurationKeyType">StudioEncryptionConfigurationKeyType</h2>
<!-- backwards compatibility -->
<a id="schemastudioencryptionconfigurationkeytype"></a>
<a id="schema_StudioEncryptionConfigurationKeyType"></a>
<a id="tocSstudioencryptionconfigurationkeytype"></a>
<a id="tocsstudioencryptionconfigurationkeytype"></a>

```json
"AWS_OWNED_KEY"
```

The type of KMS key that is used to encrypt studio data.

<h2 id="tocS_CreateStudioComponentResponse">CreateStudioComponentResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatestudiocomponentresponse"></a>
<a id="schema_CreateStudioComponentResponse"></a>
<a id="tocScreatestudiocomponentresponse"></a>
<a id="tocscreatestudiocomponentresponse"></a>

```json
{
  "studioComponent": {
    "arn": {},
    "configuration": {
      "activeDirectoryConfiguration": {
        "computerAttributes": {},
        "directoryId": {},
        "organizationalUnitDistinguishedName": {}
      },
      "computeFarmConfiguration": {
        "activeDirectoryUser": {},
        "endpoint": {}
      },
      "licenseServiceConfiguration": {
        "endpoint": {}
      },
      "sharedFileSystemConfiguration": {
        "endpoint": {},
        "fileSystemId": {},
        "linuxMountPoint": {},
        "shareName": {},
        "windowsMountDrive": {}
      }
    },
    "createdAt": {},
    "createdBy": {},
    "description": {},
    "ec2SecurityGroupIds": {},
    "initializationScripts": {},
    "name": {},
    "runtimeRoleArn": {},
    "scriptParameters": {},
    "secureInitializationRoleArn": {},
    "state": {},
    "statusCode": {},
    "statusMessage": {},
    "studioComponentId": {},
    "subtype": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "type": {},
    "updatedAt": {},
    "updatedBy": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|studioComponent|object|false|none|none|

<h2 id="tocS_ActiveDirectoryConfiguration">ActiveDirectoryConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaactivedirectoryconfiguration"></a>
<a id="schema_ActiveDirectoryConfiguration"></a>
<a id="tocSactivedirectoryconfiguration"></a>
<a id="tocsactivedirectoryconfiguration"></a>

```json
{
  "computerAttributes": {},
  "directoryId": {},
  "organizationalUnitDistinguishedName": {}
}
```

The configuration for a Directory Service for Microsoft Active Directory studio resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|computerAttributes|object|false|none|none|
|directoryId|object|false|none|none|
|organizationalUnitDistinguishedName|object|false|none|none|

<h2 id="tocS_ComputeFarmConfiguration">ComputeFarmConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacomputefarmconfiguration"></a>
<a id="schema_ComputeFarmConfiguration"></a>
<a id="tocScomputefarmconfiguration"></a>
<a id="tocscomputefarmconfiguration"></a>

```json
{
  "activeDirectoryUser": {},
  "endpoint": {}
}
```

The configuration for a render farm that is associated with a studio resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activeDirectoryUser|object|false|none|none|
|endpoint|object|false|none|none|

<h2 id="tocS_LicenseServiceConfiguration">LicenseServiceConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemalicenseserviceconfiguration"></a>
<a id="schema_LicenseServiceConfiguration"></a>
<a id="tocSlicenseserviceconfiguration"></a>
<a id="tocslicenseserviceconfiguration"></a>

```json
{
  "endpoint": {}
}
```

The configuration for a license service that is associated with a studio resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpoint|object|false|none|none|

<h2 id="tocS_SharedFileSystemConfiguration">SharedFileSystemConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemasharedfilesystemconfiguration"></a>
<a id="schema_SharedFileSystemConfiguration"></a>
<a id="tocSsharedfilesystemconfiguration"></a>
<a id="tocssharedfilesystemconfiguration"></a>

```json
{
  "endpoint": {},
  "fileSystemId": {},
  "linuxMountPoint": {},
  "shareName": {},
  "windowsMountDrive": {}
}
```

The configuration for a shared file storage system that is associated with a studio resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpoint|object|false|none|none|
|fileSystemId|object|false|none|none|
|linuxMountPoint|object|false|none|none|
|shareName|object|false|none|none|
|windowsMountDrive|object|false|none|none|

<h2 id="tocS_SecurityGroupId">SecurityGroupId</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroupid"></a>
<a id="schema_SecurityGroupId"></a>
<a id="tocSsecuritygroupid"></a>
<a id="tocssecuritygroupid"></a>

```json
"string"
```

<h2 id="tocS_StudioComponentInitializationScript">StudioComponentInitializationScript</h2>
<!-- backwards compatibility -->
<a id="schemastudiocomponentinitializationscript"></a>
<a id="schema_StudioComponentInitializationScript"></a>
<a id="tocSstudiocomponentinitializationscript"></a>
<a id="tocsstudiocomponentinitializationscript"></a>

```json
{
  "launchProfileProtocolVersion": {},
  "platform": {},
  "runContext": {},
  "script": {}
}
```

Initialization scripts for studio components.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|launchProfileProtocolVersion|object|false|none|none|
|platform|object|false|none|none|
|runContext|object|false|none|none|
|script|object|false|none|none|

<h2 id="tocS_ScriptParameterKeyValue">ScriptParameterKeyValue</h2>
<!-- backwards compatibility -->
<a id="schemascriptparameterkeyvalue"></a>
<a id="schema_ScriptParameterKeyValue"></a>
<a id="tocSscriptparameterkeyvalue"></a>
<a id="tocsscriptparameterkeyvalue"></a>

```json
{
  "key": {},
  "value": {}
}
```

A parameter for a studio component script, in the form of a key-value pair.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|object|false|none|none|
|value|object|false|none|none|

<h2 id="tocS_DeleteLaunchProfileResponse">DeleteLaunchProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletelaunchprofileresponse"></a>
<a id="schema_DeleteLaunchProfileResponse"></a>
<a id="tocSdeletelaunchprofileresponse"></a>
<a id="tocsdeletelaunchprofileresponse"></a>

```json
{
  "launchProfile": {
    "arn": {},
    "createdAt": {},
    "createdBy": {},
    "description": {},
    "ec2SubnetIds": {},
    "launchProfileId": {},
    "launchProfileProtocolVersions": {},
    "name": {},
    "state": {},
    "statusCode": {},
    "statusMessage": {},
    "streamConfiguration": {
      "automaticTerminationMode": {},
      "clipboardMode": {},
      "ec2InstanceTypes": {},
      "maxSessionLengthInMinutes": {},
      "maxStoppedSessionLengthInMinutes": {},
      "sessionBackup": {
        "maxBackupsToRetain": {},
        "mode": {}
      },
      "sessionPersistenceMode": {},
      "sessionStorage": {
        "mode": {},
        "root": {
          "linux": {},
          "windows": {}
        }
      },
      "streamingImageIds": {},
      "volumeConfiguration": {
        "iops": {},
        "size": {},
        "throughput": {}
      }
    },
    "studioComponentIds": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "updatedAt": {},
    "updatedBy": {},
    "validationResults": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|launchProfile|object|false|none|none|

<h2 id="tocS_DeleteLaunchProfileMemberResponse">DeleteLaunchProfileMemberResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletelaunchprofilememberresponse"></a>
<a id="schema_DeleteLaunchProfileMemberResponse"></a>
<a id="tocSdeletelaunchprofilememberresponse"></a>
<a id="tocsdeletelaunchprofilememberresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteStreamingImageResponse">DeleteStreamingImageResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletestreamingimageresponse"></a>
<a id="schema_DeleteStreamingImageResponse"></a>
<a id="tocSdeletestreamingimageresponse"></a>
<a id="tocsdeletestreamingimageresponse"></a>

```json
{
  "streamingImage": {
    "arn": {},
    "description": {},
    "ec2ImageId": {},
    "encryptionConfiguration": {
      "keyArn": {},
      "keyType": {}
    },
    "eulaIds": {},
    "name": {},
    "owner": {},
    "platform": {},
    "state": {},
    "statusCode": {},
    "statusMessage": {},
    "streamingImageId": {},
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
|streamingImage|object|false|none|none|

<h2 id="tocS_DeleteStreamingSessionResponse">DeleteStreamingSessionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletestreamingsessionresponse"></a>
<a id="schema_DeleteStreamingSessionResponse"></a>
<a id="tocSdeletestreamingsessionresponse"></a>
<a id="tocsdeletestreamingsessionresponse"></a>

```json
{
  "session": {
    "arn": {},
    "automaticTerminationMode": {},
    "backupMode": {},
    "createdAt": {},
    "createdBy": {},
    "ec2InstanceType": {},
    "launchProfileId": {},
    "maxBackupsToRetain": {},
    "ownedBy": {},
    "sessionId": {},
    "sessionPersistenceMode": {},
    "startedAt": {},
    "startedBy": {},
    "startedFromBackupId": {},
    "state": {},
    "statusCode": {},
    "statusMessage": {},
    "stopAt": {},
    "stoppedAt": {},
    "stoppedBy": {},
    "streamingImageId": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "terminateAt": {},
    "updatedAt": {},
    "updatedBy": {},
    "volumeConfiguration": {
      "iops": {},
      "size": {},
      "throughput": {}
    },
    "volumeRetentionMode": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|session|object|false|none|none|

<h2 id="tocS_DeleteStudioResponse">DeleteStudioResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletestudioresponse"></a>
<a id="schema_DeleteStudioResponse"></a>
<a id="tocSdeletestudioresponse"></a>
<a id="tocsdeletestudioresponse"></a>

```json
{
  "studio": {
    "adminRoleArn": {},
    "arn": {},
    "createdAt": {},
    "displayName": {},
    "homeRegion": {},
    "ssoClientId": {},
    "state": {},
    "statusCode": {},
    "statusMessage": {},
    "studioEncryptionConfiguration": {
      "keyArn": {},
      "keyType": {}
    },
    "studioId": {},
    "studioName": {},
    "studioUrl": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "updatedAt": {},
    "userRoleArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|studio|object|true|none|none|

<h2 id="tocS_DeleteStudioComponentResponse">DeleteStudioComponentResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletestudiocomponentresponse"></a>
<a id="schema_DeleteStudioComponentResponse"></a>
<a id="tocSdeletestudiocomponentresponse"></a>
<a id="tocsdeletestudiocomponentresponse"></a>

```json
{
  "studioComponent": {
    "arn": {},
    "configuration": {
      "activeDirectoryConfiguration": {
        "computerAttributes": {},
        "directoryId": {},
        "organizationalUnitDistinguishedName": {}
      },
      "computeFarmConfiguration": {
        "activeDirectoryUser": {},
        "endpoint": {}
      },
      "licenseServiceConfiguration": {
        "endpoint": {}
      },
      "sharedFileSystemConfiguration": {
        "endpoint": {},
        "fileSystemId": {},
        "linuxMountPoint": {},
        "shareName": {},
        "windowsMountDrive": {}
      }
    },
    "createdAt": {},
    "createdBy": {},
    "description": {},
    "ec2SecurityGroupIds": {},
    "initializationScripts": {},
    "name": {},
    "runtimeRoleArn": {},
    "scriptParameters": {},
    "secureInitializationRoleArn": {},
    "state": {},
    "statusCode": {},
    "statusMessage": {},
    "studioComponentId": {},
    "subtype": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "type": {},
    "updatedAt": {},
    "updatedBy": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|studioComponent|object|false|none|none|

<h2 id="tocS_DeleteStudioMemberResponse">DeleteStudioMemberResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletestudiomemberresponse"></a>
<a id="schema_DeleteStudioMemberResponse"></a>
<a id="tocSdeletestudiomemberresponse"></a>
<a id="tocsdeletestudiomemberresponse"></a>

```json
{}
```

<h2 id="tocS_GetEulaResponse">GetEulaResponse</h2>
<!-- backwards compatibility -->
<a id="schemageteularesponse"></a>
<a id="schema_GetEulaResponse"></a>
<a id="tocSgeteularesponse"></a>
<a id="tocsgeteularesponse"></a>

```json
{
  "eula": {
    "content": {},
    "createdAt": {},
    "eulaId": {},
    "name": {},
    "updatedAt": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eula|object|false|none|none|

<h2 id="tocS_GetLaunchProfileResponse">GetLaunchProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetlaunchprofileresponse"></a>
<a id="schema_GetLaunchProfileResponse"></a>
<a id="tocSgetlaunchprofileresponse"></a>
<a id="tocsgetlaunchprofileresponse"></a>

```json
{
  "launchProfile": {
    "arn": {},
    "createdAt": {},
    "createdBy": {},
    "description": {},
    "ec2SubnetIds": {},
    "launchProfileId": {},
    "launchProfileProtocolVersions": {},
    "name": {},
    "state": {},
    "statusCode": {},
    "statusMessage": {},
    "streamConfiguration": {
      "automaticTerminationMode": {},
      "clipboardMode": {},
      "ec2InstanceTypes": {},
      "maxSessionLengthInMinutes": {},
      "maxStoppedSessionLengthInMinutes": {},
      "sessionBackup": {
        "maxBackupsToRetain": {},
        "mode": {}
      },
      "sessionPersistenceMode": {},
      "sessionStorage": {
        "mode": {},
        "root": {
          "linux": {},
          "windows": {}
        }
      },
      "streamingImageIds": {},
      "volumeConfiguration": {
        "iops": {},
        "size": {},
        "throughput": {}
      }
    },
    "studioComponentIds": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "updatedAt": {},
    "updatedBy": {},
    "validationResults": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|launchProfile|object|false|none|none|

<h2 id="tocS_GetLaunchProfileDetailsResponse">GetLaunchProfileDetailsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetlaunchprofiledetailsresponse"></a>
<a id="schema_GetLaunchProfileDetailsResponse"></a>
<a id="tocSgetlaunchprofiledetailsresponse"></a>
<a id="tocsgetlaunchprofiledetailsresponse"></a>

```json
{
  "launchProfile": {
    "arn": {},
    "createdAt": {},
    "createdBy": {},
    "description": {},
    "ec2SubnetIds": {},
    "launchProfileId": {},
    "launchProfileProtocolVersions": {},
    "name": {},
    "state": {},
    "statusCode": {},
    "statusMessage": {},
    "streamConfiguration": {
      "automaticTerminationMode": {},
      "clipboardMode": {},
      "ec2InstanceTypes": {},
      "maxSessionLengthInMinutes": {},
      "maxStoppedSessionLengthInMinutes": {},
      "sessionBackup": {
        "maxBackupsToRetain": {},
        "mode": {}
      },
      "sessionPersistenceMode": {},
      "sessionStorage": {
        "mode": {},
        "root": {
          "linux": {},
          "windows": {}
        }
      },
      "streamingImageIds": {},
      "volumeConfiguration": {
        "iops": {},
        "size": {},
        "throughput": {}
      }
    },
    "studioComponentIds": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "updatedAt": {},
    "updatedBy": {},
    "validationResults": {}
  },
  "streamingImages": {},
  "studioComponentSummaries": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|launchProfile|object|false|none|none|
|streamingImages|object|false|none|none|
|studioComponentSummaries|object|false|none|none|

<h2 id="tocS_GetLaunchProfileInitializationResponse">GetLaunchProfileInitializationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetlaunchprofileinitializationresponse"></a>
<a id="schema_GetLaunchProfileInitializationResponse"></a>
<a id="tocSgetlaunchprofileinitializationresponse"></a>
<a id="tocsgetlaunchprofileinitializationresponse"></a>

```json
{
  "launchProfileInitialization": {
    "activeDirectory": {
      "computerAttributes": {},
      "directoryId": {},
      "directoryName": {},
      "dnsIpAddresses": {},
      "organizationalUnitDistinguishedName": {},
      "studioComponentId": {},
      "studioComponentName": {}
    },
    "ec2SecurityGroupIds": {},
    "launchProfileId": {},
    "launchProfileProtocolVersion": {},
    "launchPurpose": {},
    "name": {},
    "platform": {},
    "systemInitializationScripts": {},
    "userInitializationScripts": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|launchProfileInitialization|object|false|none|none|

<h2 id="tocS_GetLaunchProfileMemberResponse">GetLaunchProfileMemberResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetlaunchprofilememberresponse"></a>
<a id="schema_GetLaunchProfileMemberResponse"></a>
<a id="tocSgetlaunchprofilememberresponse"></a>
<a id="tocsgetlaunchprofilememberresponse"></a>

```json
{
  "member": {
    "identityStoreId": {},
    "persona": {},
    "principalId": {},
    "sid": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|member|object|false|none|none|

<h2 id="tocS_GetStreamingImageResponse">GetStreamingImageResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetstreamingimageresponse"></a>
<a id="schema_GetStreamingImageResponse"></a>
<a id="tocSgetstreamingimageresponse"></a>
<a id="tocsgetstreamingimageresponse"></a>

```json
{
  "streamingImage": {
    "arn": {},
    "description": {},
    "ec2ImageId": {},
    "encryptionConfiguration": {
      "keyArn": {},
      "keyType": {}
    },
    "eulaIds": {},
    "name": {},
    "owner": {},
    "platform": {},
    "state": {},
    "statusCode": {},
    "statusMessage": {},
    "streamingImageId": {},
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
|streamingImage|object|false|none|none|

<h2 id="tocS_GetStreamingSessionResponse">GetStreamingSessionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetstreamingsessionresponse"></a>
<a id="schema_GetStreamingSessionResponse"></a>
<a id="tocSgetstreamingsessionresponse"></a>
<a id="tocsgetstreamingsessionresponse"></a>

```json
{
  "session": {
    "arn": {},
    "automaticTerminationMode": {},
    "backupMode": {},
    "createdAt": {},
    "createdBy": {},
    "ec2InstanceType": {},
    "launchProfileId": {},
    "maxBackupsToRetain": {},
    "ownedBy": {},
    "sessionId": {},
    "sessionPersistenceMode": {},
    "startedAt": {},
    "startedBy": {},
    "startedFromBackupId": {},
    "state": {},
    "statusCode": {},
    "statusMessage": {},
    "stopAt": {},
    "stoppedAt": {},
    "stoppedBy": {},
    "streamingImageId": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "terminateAt": {},
    "updatedAt": {},
    "updatedBy": {},
    "volumeConfiguration": {
      "iops": {},
      "size": {},
      "throughput": {}
    },
    "volumeRetentionMode": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|session|object|false|none|none|

<h2 id="tocS_GetStreamingSessionBackupResponse">GetStreamingSessionBackupResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetstreamingsessionbackupresponse"></a>
<a id="schema_GetStreamingSessionBackupResponse"></a>
<a id="tocSgetstreamingsessionbackupresponse"></a>
<a id="tocsgetstreamingsessionbackupresponse"></a>

```json
{
  "streamingSessionBackup": {
    "arn": {},
    "backupId": {},
    "createdAt": {},
    "launchProfileId": {},
    "ownedBy": {},
    "sessionId": {},
    "state": "CREATE_IN_PROGRESS",
    "statusCode": {},
    "statusMessage": {},
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
|streamingSessionBackup|object|false|none|none|

<h2 id="tocS_GetStreamingSessionStreamResponse">GetStreamingSessionStreamResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetstreamingsessionstreamresponse"></a>
<a id="schema_GetStreamingSessionStreamResponse"></a>
<a id="tocSgetstreamingsessionstreamresponse"></a>
<a id="tocsgetstreamingsessionstreamresponse"></a>

```json
{
  "stream": {
    "createdAt": {},
    "createdBy": {},
    "expiresAt": {},
    "ownedBy": {},
    "state": {},
    "statusCode": {},
    "streamId": {},
    "url": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stream|object|false|none|none|

<h2 id="tocS_GetStudioResponse">GetStudioResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetstudioresponse"></a>
<a id="schema_GetStudioResponse"></a>
<a id="tocSgetstudioresponse"></a>
<a id="tocsgetstudioresponse"></a>

```json
{
  "studio": {
    "adminRoleArn": {},
    "arn": {},
    "createdAt": {},
    "displayName": {},
    "homeRegion": {},
    "ssoClientId": {},
    "state": {},
    "statusCode": {},
    "statusMessage": {},
    "studioEncryptionConfiguration": {
      "keyArn": {},
      "keyType": {}
    },
    "studioId": {},
    "studioName": {},
    "studioUrl": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "updatedAt": {},
    "userRoleArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|studio|object|true|none|none|

<h2 id="tocS_GetStudioComponentResponse">GetStudioComponentResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetstudiocomponentresponse"></a>
<a id="schema_GetStudioComponentResponse"></a>
<a id="tocSgetstudiocomponentresponse"></a>
<a id="tocsgetstudiocomponentresponse"></a>

```json
{
  "studioComponent": {
    "arn": {},
    "configuration": {
      "activeDirectoryConfiguration": {
        "computerAttributes": {},
        "directoryId": {},
        "organizationalUnitDistinguishedName": {}
      },
      "computeFarmConfiguration": {
        "activeDirectoryUser": {},
        "endpoint": {}
      },
      "licenseServiceConfiguration": {
        "endpoint": {}
      },
      "sharedFileSystemConfiguration": {
        "endpoint": {},
        "fileSystemId": {},
        "linuxMountPoint": {},
        "shareName": {},
        "windowsMountDrive": {}
      }
    },
    "createdAt": {},
    "createdBy": {},
    "description": {},
    "ec2SecurityGroupIds": {},
    "initializationScripts": {},
    "name": {},
    "runtimeRoleArn": {},
    "scriptParameters": {},
    "secureInitializationRoleArn": {},
    "state": {},
    "statusCode": {},
    "statusMessage": {},
    "studioComponentId": {},
    "subtype": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "type": {},
    "updatedAt": {},
    "updatedBy": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|studioComponent|object|false|none|none|

<h2 id="tocS_GetStudioMemberResponse">GetStudioMemberResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetstudiomemberresponse"></a>
<a id="schema_GetStudioMemberResponse"></a>
<a id="tocSgetstudiomemberresponse"></a>
<a id="tocsgetstudiomemberresponse"></a>

```json
{
  "member": {
    "identityStoreId": {},
    "persona": {},
    "principalId": {},
    "sid": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|member|object|false|none|none|

<h2 id="tocS_ListEulaAcceptancesResponse">ListEulaAcceptancesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisteulaacceptancesresponse"></a>
<a id="schema_ListEulaAcceptancesResponse"></a>
<a id="tocSlisteulaacceptancesresponse"></a>
<a id="tocslisteulaacceptancesresponse"></a>

```json
{
  "eulaAcceptances": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eulaAcceptances|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListEulasResponse">ListEulasResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisteulasresponse"></a>
<a id="schema_ListEulasResponse"></a>
<a id="tocSlisteulasresponse"></a>
<a id="tocslisteulasresponse"></a>

```json
{
  "eulas": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eulas|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListLaunchProfileMembersResponse">ListLaunchProfileMembersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistlaunchprofilemembersresponse"></a>
<a id="schema_ListLaunchProfileMembersResponse"></a>
<a id="tocSlistlaunchprofilemembersresponse"></a>
<a id="tocslistlaunchprofilemembersresponse"></a>

```json
{
  "members": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|members|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListLaunchProfilesResponse">ListLaunchProfilesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistlaunchprofilesresponse"></a>
<a id="schema_ListLaunchProfilesResponse"></a>
<a id="tocSlistlaunchprofilesresponse"></a>
<a id="tocslistlaunchprofilesresponse"></a>

```json
{
  "launchProfiles": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|launchProfiles|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_LaunchProfileState">LaunchProfileState</h2>
<!-- backwards compatibility -->
<a id="schemalaunchprofilestate"></a>
<a id="schema_LaunchProfileState"></a>
<a id="tocSlaunchprofilestate"></a>
<a id="tocslaunchprofilestate"></a>

```json
"CREATE_IN_PROGRESS"
```

<h2 id="tocS_ListStreamingImagesResponse">ListStreamingImagesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaliststreamingimagesresponse"></a>
<a id="schema_ListStreamingImagesResponse"></a>
<a id="tocSliststreamingimagesresponse"></a>
<a id="tocsliststreamingimagesresponse"></a>

```json
{
  "nextToken": {},
  "streamingImages": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|streamingImages|object|false|none|none|

<h2 id="tocS_ListStreamingSessionBackupsResponse">ListStreamingSessionBackupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaliststreamingsessionbackupsresponse"></a>
<a id="schema_ListStreamingSessionBackupsResponse"></a>
<a id="tocSliststreamingsessionbackupsresponse"></a>
<a id="tocsliststreamingsessionbackupsresponse"></a>

```json
{
  "nextToken": {},
  "streamingSessionBackups": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|streamingSessionBackups|object|false|none|none|

<h2 id="tocS_ListStreamingSessionsResponse">ListStreamingSessionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaliststreamingsessionsresponse"></a>
<a id="schema_ListStreamingSessionsResponse"></a>
<a id="tocSliststreamingsessionsresponse"></a>
<a id="tocsliststreamingsessionsresponse"></a>

```json
{
  "nextToken": {},
  "sessions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|sessions|object|false|none|none|

<h2 id="tocS_ListStudioComponentsResponse">ListStudioComponentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaliststudiocomponentsresponse"></a>
<a id="schema_ListStudioComponentsResponse"></a>
<a id="tocSliststudiocomponentsresponse"></a>
<a id="tocsliststudiocomponentsresponse"></a>

```json
{
  "nextToken": {},
  "studioComponents": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|studioComponents|object|false|none|none|

<h2 id="tocS_StudioComponentState">StudioComponentState</h2>
<!-- backwards compatibility -->
<a id="schemastudiocomponentstate"></a>
<a id="schema_StudioComponentState"></a>
<a id="tocSstudiocomponentstate"></a>
<a id="tocsstudiocomponentstate"></a>

```json
"CREATE_IN_PROGRESS"
```

<p>The current state of the studio component resource.</p> <p>While a studio component is being created, modified, or deleted, its state will be <code>CREATE_IN_PROGRESS</code>, <code>UPDATE_IN_PROGRESS</code>, or <code>DELETE_IN_PROGRESS</code>.</p> <p>These are called <i>transition states</i>.</p> <p>No modifications may be made to the studio component while it is in a transition state.</p> <p>If creation of the resource fails, the state will change to <code>CREATE_FAILED</code>. The resource <code>StatusCode</code> and <code>StatusMessage</code> will provide more information of why creation failed. The resource in this state will automatically be deleted from your account after a period of time.</p> <p>If updating the resource fails, the state will change to <code>UPDATE_FAILED</code>. The resource <code>StatusCode</code> and <code>StatusMessage</code> will provide more information of why the update failed. The resource will be returned to the state it was in when the update request was invoked.</p> <p>If deleting the resource fails, the state will change to <code>DELETE_FAILED</code>. The resource <code>StatusCode</code> and <code>StatusMessage</code> will provide more information of why the update failed. The resource will be returned to the state it was in when the update request was invoked. After the resource is deleted successfully, it will change to the <code>DELETED</code> state. The resource will no longer count against service quotas and cannot be used or acted upon any futher. It will be removed from your account after a period of time.</p>

<h2 id="tocS_StudioComponentType">StudioComponentType</h2>
<!-- backwards compatibility -->
<a id="schemastudiocomponenttype"></a>
<a id="schema_StudioComponentType"></a>
<a id="tocSstudiocomponenttype"></a>
<a id="tocsstudiocomponenttype"></a>

```json
"ACTIVE_DIRECTORY"
```

<h2 id="tocS_ListStudioMembersResponse">ListStudioMembersResponse</h2>
<!-- backwards compatibility -->
<a id="schemaliststudiomembersresponse"></a>
<a id="schema_ListStudioMembersResponse"></a>
<a id="tocSliststudiomembersresponse"></a>
<a id="tocsliststudiomembersresponse"></a>

```json
{
  "members": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|members|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListStudiosResponse">ListStudiosResponse</h2>
<!-- backwards compatibility -->
<a id="schemaliststudiosresponse"></a>
<a id="schema_ListStudiosResponse"></a>
<a id="tocSliststudiosresponse"></a>
<a id="tocsliststudiosresponse"></a>

```json
{
  "nextToken": {},
  "studios": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|studios|object|true|none|none|

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

<h2 id="tocS_PutLaunchProfileMembersResponse">PutLaunchProfileMembersResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputlaunchprofilemembersresponse"></a>
<a id="schema_PutLaunchProfileMembersResponse"></a>
<a id="tocSputlaunchprofilemembersresponse"></a>
<a id="tocsputlaunchprofilemembersresponse"></a>

```json
{}
```

<h2 id="tocS_NewLaunchProfileMember">NewLaunchProfileMember</h2>
<!-- backwards compatibility -->
<a id="schemanewlaunchprofilemember"></a>
<a id="schema_NewLaunchProfileMember"></a>
<a id="tocSnewlaunchprofilemember"></a>
<a id="tocsnewlaunchprofilemember"></a>

```json
{
  "persona": {},
  "principalId": {}
}
```

A new member that is added to a launch profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|persona|object|true|none|none|
|principalId|object|true|none|none|

<h2 id="tocS_PutStudioMembersResponse">PutStudioMembersResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputstudiomembersresponse"></a>
<a id="schema_PutStudioMembersResponse"></a>
<a id="tocSputstudiomembersresponse"></a>
<a id="tocsputstudiomembersresponse"></a>

```json
{}
```

<h2 id="tocS_NewStudioMember">NewStudioMember</h2>
<!-- backwards compatibility -->
<a id="schemanewstudiomember"></a>
<a id="schema_NewStudioMember"></a>
<a id="tocSnewstudiomember"></a>
<a id="tocsnewstudiomember"></a>

```json
{
  "persona": {},
  "principalId": {}
}
```

A new studio user's membership.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|persona|object|true|none|none|
|principalId|object|true|none|none|

<h2 id="tocS_StartStreamingSessionResponse">StartStreamingSessionResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartstreamingsessionresponse"></a>
<a id="schema_StartStreamingSessionResponse"></a>
<a id="tocSstartstreamingsessionresponse"></a>
<a id="tocsstartstreamingsessionresponse"></a>

```json
{
  "session": {
    "arn": {},
    "automaticTerminationMode": {},
    "backupMode": {},
    "createdAt": {},
    "createdBy": {},
    "ec2InstanceType": {},
    "launchProfileId": {},
    "maxBackupsToRetain": {},
    "ownedBy": {},
    "sessionId": {},
    "sessionPersistenceMode": {},
    "startedAt": {},
    "startedBy": {},
    "startedFromBackupId": {},
    "state": {},
    "statusCode": {},
    "statusMessage": {},
    "stopAt": {},
    "stoppedAt": {},
    "stoppedBy": {},
    "streamingImageId": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "terminateAt": {},
    "updatedAt": {},
    "updatedBy": {},
    "volumeConfiguration": {
      "iops": {},
      "size": {},
      "throughput": {}
    },
    "volumeRetentionMode": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|session|[StreamingSession](#schemastreamingsession)|false|none|A streaming session is a virtual workstation created using a particular launch profile.|

<h2 id="tocS_StartStudioSSOConfigurationRepairResponse">StartStudioSSOConfigurationRepairResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartstudiossoconfigurationrepairresponse"></a>
<a id="schema_StartStudioSSOConfigurationRepairResponse"></a>
<a id="tocSstartstudiossoconfigurationrepairresponse"></a>
<a id="tocsstartstudiossoconfigurationrepairresponse"></a>

```json
{
  "studio": {
    "adminRoleArn": {},
    "arn": {},
    "createdAt": {},
    "displayName": {},
    "homeRegion": {},
    "ssoClientId": {},
    "state": {},
    "statusCode": {},
    "statusMessage": {},
    "studioEncryptionConfiguration": {
      "keyArn": {},
      "keyType": {}
    },
    "studioId": {},
    "studioName": {},
    "studioUrl": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "updatedAt": {},
    "userRoleArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|studio|object|true|none|none|

<h2 id="tocS_StopStreamingSessionResponse">StopStreamingSessionResponse</h2>
<!-- backwards compatibility -->
<a id="schemastopstreamingsessionresponse"></a>
<a id="schema_StopStreamingSessionResponse"></a>
<a id="tocSstopstreamingsessionresponse"></a>
<a id="tocsstopstreamingsessionresponse"></a>

```json
{
  "session": {
    "arn": {},
    "automaticTerminationMode": {},
    "backupMode": {},
    "createdAt": {},
    "createdBy": {},
    "ec2InstanceType": {},
    "launchProfileId": {},
    "maxBackupsToRetain": {},
    "ownedBy": {},
    "sessionId": {},
    "sessionPersistenceMode": {},
    "startedAt": {},
    "startedBy": {},
    "startedFromBackupId": {},
    "state": {},
    "statusCode": {},
    "statusMessage": {},
    "stopAt": {},
    "stoppedAt": {},
    "stoppedBy": {},
    "streamingImageId": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "terminateAt": {},
    "updatedAt": {},
    "updatedBy": {},
    "volumeConfiguration": {
      "iops": {},
      "size": {},
      "throughput": {}
    },
    "volumeRetentionMode": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|session|[StreamingSession](#schemastreamingsession)|false|none|A streaming session is a virtual workstation created using a particular launch profile.|

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

<h2 id="tocS_UpdateLaunchProfileResponse">UpdateLaunchProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatelaunchprofileresponse"></a>
<a id="schema_UpdateLaunchProfileResponse"></a>
<a id="tocSupdatelaunchprofileresponse"></a>
<a id="tocsupdatelaunchprofileresponse"></a>

```json
{
  "launchProfile": {
    "arn": {},
    "createdAt": {},
    "createdBy": {},
    "description": {},
    "ec2SubnetIds": {},
    "launchProfileId": {},
    "launchProfileProtocolVersions": {},
    "name": {},
    "state": {},
    "statusCode": {},
    "statusMessage": {},
    "streamConfiguration": {
      "automaticTerminationMode": {},
      "clipboardMode": {},
      "ec2InstanceTypes": {},
      "maxSessionLengthInMinutes": {},
      "maxStoppedSessionLengthInMinutes": {},
      "sessionBackup": {
        "maxBackupsToRetain": {},
        "mode": {}
      },
      "sessionPersistenceMode": {},
      "sessionStorage": {
        "mode": {},
        "root": {
          "linux": {},
          "windows": {}
        }
      },
      "streamingImageIds": {},
      "volumeConfiguration": {
        "iops": {},
        "size": {},
        "throughput": {}
      }
    },
    "studioComponentIds": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "updatedAt": {},
    "updatedBy": {},
    "validationResults": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|launchProfile|object|false|none|none|

<h2 id="tocS_UpdateLaunchProfileMemberResponse">UpdateLaunchProfileMemberResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatelaunchprofilememberresponse"></a>
<a id="schema_UpdateLaunchProfileMemberResponse"></a>
<a id="tocSupdatelaunchprofilememberresponse"></a>
<a id="tocsupdatelaunchprofilememberresponse"></a>

```json
{
  "member": {
    "identityStoreId": {},
    "persona": {},
    "principalId": {},
    "sid": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|member|object|false|none|none|

<h2 id="tocS_UpdateStreamingImageResponse">UpdateStreamingImageResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatestreamingimageresponse"></a>
<a id="schema_UpdateStreamingImageResponse"></a>
<a id="tocSupdatestreamingimageresponse"></a>
<a id="tocsupdatestreamingimageresponse"></a>

```json
{
  "streamingImage": {
    "arn": {},
    "description": {},
    "ec2ImageId": {},
    "encryptionConfiguration": {
      "keyArn": {},
      "keyType": {}
    },
    "eulaIds": {},
    "name": {},
    "owner": {},
    "platform": {},
    "state": {},
    "statusCode": {},
    "statusMessage": {},
    "streamingImageId": {},
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
|streamingImage|[StreamingImage](#schemastreamingimage)|false|none|<p>Represents a streaming image resource.</p> <p>Streaming images are used by studio users to select which operating system and software they want to use in a Nimble Studio streaming session.</p> <p>Amazon provides a number of streaming images that include popular 3rd-party software.</p> <p>You can create your own streaming images using an Amazon EC2 machine image that you create for this purpose. You can also include software that your users require.</p>|

<h2 id="tocS_UpdateStudioResponse">UpdateStudioResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatestudioresponse"></a>
<a id="schema_UpdateStudioResponse"></a>
<a id="tocSupdatestudioresponse"></a>
<a id="tocsupdatestudioresponse"></a>

```json
{
  "studio": {
    "adminRoleArn": {},
    "arn": {},
    "createdAt": {},
    "displayName": {},
    "homeRegion": {},
    "ssoClientId": {},
    "state": {},
    "statusCode": {},
    "statusMessage": {},
    "studioEncryptionConfiguration": {
      "keyArn": {},
      "keyType": {}
    },
    "studioId": {},
    "studioName": {},
    "studioUrl": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "updatedAt": {},
    "userRoleArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|studio|object|true|none|none|

<h2 id="tocS_UpdateStudioComponentResponse">UpdateStudioComponentResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatestudiocomponentresponse"></a>
<a id="schema_UpdateStudioComponentResponse"></a>
<a id="tocSupdatestudiocomponentresponse"></a>
<a id="tocsupdatestudiocomponentresponse"></a>

```json
{
  "studioComponent": {
    "arn": {},
    "configuration": {
      "activeDirectoryConfiguration": {
        "computerAttributes": {},
        "directoryId": {},
        "organizationalUnitDistinguishedName": {}
      },
      "computeFarmConfiguration": {
        "activeDirectoryUser": {},
        "endpoint": {}
      },
      "licenseServiceConfiguration": {
        "endpoint": {}
      },
      "sharedFileSystemConfiguration": {
        "endpoint": {},
        "fileSystemId": {},
        "linuxMountPoint": {},
        "shareName": {},
        "windowsMountDrive": {}
      }
    },
    "createdAt": {},
    "createdBy": {},
    "description": {},
    "ec2SecurityGroupIds": {},
    "initializationScripts": {},
    "name": {},
    "runtimeRoleArn": {},
    "scriptParameters": {},
    "secureInitializationRoleArn": {},
    "state": {},
    "statusCode": {},
    "statusMessage": {},
    "studioComponentId": {},
    "subtype": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "type": {},
    "updatedAt": {},
    "updatedBy": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|studioComponent|object|false|none|none|

<h2 id="tocS_ClientToken">ClientToken</h2>
<!-- backwards compatibility -->
<a id="schemaclienttoken"></a>
<a id="schema_ClientToken"></a>
<a id="tocSclienttoken"></a>
<a id="tocsclienttoken"></a>

```json
"string"
```

<h2 id="tocS_EulaIdList">EulaIdList</h2>
<!-- backwards compatibility -->
<a id="schemaeulaidlist"></a>
<a id="schema_EulaIdList"></a>
<a id="tocSeulaidlist"></a>
<a id="tocseulaidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AcceptEulasRequest">AcceptEulasRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaccepteulasrequest"></a>
<a id="schema_AcceptEulasRequest"></a>
<a id="tocSaccepteulasrequest"></a>
<a id="tocsaccepteulasrequest"></a>

```json
{
  "eulaIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eulaIds|object|false|none|none|

<h2 id="tocS_EulaAcceptanceList">EulaAcceptanceList</h2>
<!-- backwards compatibility -->
<a id="schemaeulaacceptancelist"></a>
<a id="schema_EulaAcceptanceList"></a>
<a id="tocSeulaacceptancelist"></a>
<a id="tocseulaacceptancelist"></a>

```json
[
  {
    "acceptedAt": {},
    "acceptedBy": {},
    "accepteeId": {},
    "eulaAcceptanceId": {},
    "eulaId": {}
  }
]
```

<h2 id="tocS_ActiveDirectoryComputerAttributeName">ActiveDirectoryComputerAttributeName</h2>
<!-- backwards compatibility -->
<a id="schemaactivedirectorycomputerattributename"></a>
<a id="schema_ActiveDirectoryComputerAttributeName"></a>
<a id="tocSactivedirectorycomputerattributename"></a>
<a id="tocsactivedirectorycomputerattributename"></a>

```json
"string"
```

The name for the LDAP attribute.

<h2 id="tocS_ActiveDirectoryComputerAttributeValue">ActiveDirectoryComputerAttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemaactivedirectorycomputerattributevalue"></a>
<a id="schema_ActiveDirectoryComputerAttributeValue"></a>
<a id="tocSactivedirectorycomputerattributevalue"></a>
<a id="tocsactivedirectorycomputerattributevalue"></a>

```json
"string"
```

The value for the LDAP attribute.

<h2 id="tocS_ActiveDirectoryComputerAttribute">ActiveDirectoryComputerAttribute</h2>
<!-- backwards compatibility -->
<a id="schemaactivedirectorycomputerattribute"></a>
<a id="schema_ActiveDirectoryComputerAttribute"></a>
<a id="tocSactivedirectorycomputerattribute"></a>
<a id="tocsactivedirectorycomputerattribute"></a>

```json
{
  "name": {},
  "value": {}
}
```

An LDAP attribute of an Active Directory computer account, in the form of a name:value pair.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|value|object|false|none|none|

<h2 id="tocS_ActiveDirectoryComputerAttributeList">ActiveDirectoryComputerAttributeList</h2>
<!-- backwards compatibility -->
<a id="schemaactivedirectorycomputerattributelist"></a>
<a id="schema_ActiveDirectoryComputerAttributeList"></a>
<a id="tocSactivedirectorycomputerattributelist"></a>
<a id="tocsactivedirectorycomputerattributelist"></a>

```json
[
  {
    "name": {},
    "value": {}
  }
]
```

A collection of LDAP attributes to apply to Active Directory computer accounts that are created for streaming sessions.

<h2 id="tocS_DirectoryId">DirectoryId</h2>
<!-- backwards compatibility -->
<a id="schemadirectoryid"></a>
<a id="schema_DirectoryId"></a>
<a id="tocSdirectoryid"></a>
<a id="tocsdirectoryid"></a>

```json
"string"
```

<h2 id="tocS_ActiveDirectoryOrganizationalUnitDistinguishedName">ActiveDirectoryOrganizationalUnitDistinguishedName</h2>
<!-- backwards compatibility -->
<a id="schemaactivedirectoryorganizationalunitdistinguishedname"></a>
<a id="schema_ActiveDirectoryOrganizationalUnitDistinguishedName"></a>
<a id="tocSactivedirectoryorganizationalunitdistinguishedname"></a>
<a id="tocsactivedirectoryorganizationalunitdistinguishedname"></a>

```json
"string"
```

The fully-qualified distinguished name of the organizational unit to place the computer account in.

<h2 id="tocS_ActiveDirectoryDnsIpAddress">ActiveDirectoryDnsIpAddress</h2>
<!-- backwards compatibility -->
<a id="schemaactivedirectorydnsipaddress"></a>
<a id="schema_ActiveDirectoryDnsIpAddress"></a>
<a id="tocSactivedirectorydnsipaddress"></a>
<a id="tocsactivedirectorydnsipaddress"></a>

```json
"string"
```

<h2 id="tocS_ActiveDirectoryDnsIpAddressList">ActiveDirectoryDnsIpAddressList</h2>
<!-- backwards compatibility -->
<a id="schemaactivedirectorydnsipaddresslist"></a>
<a id="schema_ActiveDirectoryDnsIpAddressList"></a>
<a id="tocSactivedirectorydnsipaddresslist"></a>
<a id="tocsactivedirectorydnsipaddresslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SensitiveString">SensitiveString</h2>
<!-- backwards compatibility -->
<a id="schemasensitivestring"></a>
<a id="schema_SensitiveString"></a>
<a id="tocSsensitivestring"></a>
<a id="tocssensitivestring"></a>

```json
"password"
```

<h2 id="tocS_LaunchProfileDescription">LaunchProfileDescription</h2>
<!-- backwards compatibility -->
<a id="schemalaunchprofiledescription"></a>
<a id="schema_LaunchProfileDescription"></a>
<a id="tocSlaunchprofiledescription"></a>
<a id="tocslaunchprofiledescription"></a>

```json
"password"
```

A human-readable description of the launch profile.

<h2 id="tocS_EC2SubnetIdList">EC2SubnetIdList</h2>
<!-- backwards compatibility -->
<a id="schemaec2subnetidlist"></a>
<a id="schema_EC2SubnetIdList"></a>
<a id="tocSec2subnetidlist"></a>
<a id="tocsec2subnetidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_LaunchProfileProtocolVersionList">LaunchProfileProtocolVersionList</h2>
<!-- backwards compatibility -->
<a id="schemalaunchprofileprotocolversionlist"></a>
<a id="schema_LaunchProfileProtocolVersionList"></a>
<a id="tocSlaunchprofileprotocolversionlist"></a>
<a id="tocslaunchprofileprotocolversionlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_LaunchProfileName">LaunchProfileName</h2>
<!-- backwards compatibility -->
<a id="schemalaunchprofilename"></a>
<a id="schema_LaunchProfileName"></a>
<a id="tocSlaunchprofilename"></a>
<a id="tocslaunchprofilename"></a>

```json
"password"
```

<h2 id="tocS_StreamConfigurationCreate">StreamConfigurationCreate</h2>
<!-- backwards compatibility -->
<a id="schemastreamconfigurationcreate"></a>
<a id="schema_StreamConfigurationCreate"></a>
<a id="tocSstreamconfigurationcreate"></a>
<a id="tocsstreamconfigurationcreate"></a>

```json
{
  "automaticTerminationMode": {},
  "clipboardMode": {},
  "ec2InstanceTypes": {},
  "maxSessionLengthInMinutes": {},
  "maxStoppedSessionLengthInMinutes": {},
  "sessionBackup": {
    "maxBackupsToRetain": {},
    "mode": {}
  },
  "sessionPersistenceMode": {},
  "sessionStorage": {
    "mode": {},
    "root": {
      "linux": {},
      "windows": {}
    }
  },
  "streamingImageIds": {},
  "volumeConfiguration": {
    "iops": {},
    "size": {},
    "throughput": {}
  }
}
```

Configuration for streaming workstations created using this launch profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|automaticTerminationMode|object|false|none|none|
|clipboardMode|object|true|none|none|
|ec2InstanceTypes|object|true|none|none|
|maxSessionLengthInMinutes|object|false|none|none|
|maxStoppedSessionLengthInMinutes|object|false|none|none|
|sessionBackup|object|false|none|none|
|sessionPersistenceMode|object|false|none|none|
|sessionStorage|object|false|none|none|
|streamingImageIds|object|true|none|none|
|volumeConfiguration|object|false|none|none|

<h2 id="tocS_LaunchProfileStudioComponentIdList">LaunchProfileStudioComponentIdList</h2>
<!-- backwards compatibility -->
<a id="schemalaunchprofilestudiocomponentidlist"></a>
<a id="schema_LaunchProfileStudioComponentIdList"></a>
<a id="tocSlaunchprofilestudiocomponentidlist"></a>
<a id="tocslaunchprofilestudiocomponentidlist"></a>

```json
[
  "string"
]
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
|**additionalProperties**|[String](#schemastring)|false|none|none|

<h2 id="tocS_CreateLaunchProfileRequest">CreateLaunchProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatelaunchprofilerequest"></a>
<a id="schema_CreateLaunchProfileRequest"></a>
<a id="tocScreatelaunchprofilerequest"></a>
<a id="tocscreatelaunchprofilerequest"></a>

```json
{
  "description": {},
  "ec2SubnetIds": {},
  "launchProfileProtocolVersions": {},
  "name": {},
  "streamConfiguration": {
    "automaticTerminationMode": {},
    "clipboardMode": {},
    "ec2InstanceTypes": {},
    "maxSessionLengthInMinutes": {},
    "maxStoppedSessionLengthInMinutes": {},
    "sessionBackup": {
      "maxBackupsToRetain": {},
      "mode": {}
    },
    "sessionPersistenceMode": {},
    "sessionStorage": {
      "mode": {},
      "root": {
        "linux": {},
        "windows": {}
      }
    },
    "streamingImageIds": {},
    "volumeConfiguration": {
      "iops": {},
      "size": {},
      "throughput": {}
    }
  },
  "studioComponentIds": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|object|false|none|none|
|ec2SubnetIds|object|true|none|none|
|launchProfileProtocolVersions|object|true|none|none|
|name|object|true|none|none|
|streamConfiguration|object|true|none|none|
|studioComponentIds|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_LaunchProfile">LaunchProfile</h2>
<!-- backwards compatibility -->
<a id="schemalaunchprofile"></a>
<a id="schema_LaunchProfile"></a>
<a id="tocSlaunchprofile"></a>
<a id="tocslaunchprofile"></a>

```json
{
  "arn": {},
  "createdAt": {},
  "createdBy": {},
  "description": {},
  "ec2SubnetIds": {},
  "launchProfileId": {},
  "launchProfileProtocolVersions": {},
  "name": {},
  "state": {},
  "statusCode": {},
  "statusMessage": {},
  "streamConfiguration": {
    "automaticTerminationMode": {},
    "clipboardMode": {},
    "ec2InstanceTypes": {},
    "maxSessionLengthInMinutes": {},
    "maxStoppedSessionLengthInMinutes": {},
    "sessionBackup": {
      "maxBackupsToRetain": {},
      "mode": {}
    },
    "sessionPersistenceMode": {},
    "sessionStorage": {
      "mode": {},
      "root": {
        "linux": {},
        "windows": {}
      }
    },
    "streamingImageIds": {},
    "volumeConfiguration": {
      "iops": {},
      "size": {},
      "throughput": {}
    }
  },
  "studioComponentIds": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "updatedAt": {},
  "updatedBy": {},
  "validationResults": {}
}
```

<p>A launch profile controls your artist workforce’s access to studio components, like compute farms, shared file systems, managed file systems, and license server configurations, as well as instance types and Amazon Machine Images (AMIs). </p> <p>Studio administrators create launch profiles in the Nimble Studio console. Artists can use their launch profiles to launch an instance from the Nimble Studio portal. Each user’s launch profile defines how they can launch a streaming session. By default, studio admins can use all launch profiles.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|createdAt|object|false|none|none|
|createdBy|object|false|none|none|
|description|object|false|none|none|
|ec2SubnetIds|object|false|none|none|
|launchProfileId|object|false|none|none|
|launchProfileProtocolVersions|object|false|none|none|
|name|object|false|none|none|
|state|object|false|none|none|
|statusCode|object|false|none|none|
|statusMessage|object|false|none|none|
|streamConfiguration|object|false|none|none|
|studioComponentIds|object|false|none|none|
|tags|object|false|none|none|
|updatedAt|object|false|none|none|
|updatedBy|object|false|none|none|
|validationResults|object|false|none|none|

<h2 id="tocS_StreamingImageDescription">StreamingImageDescription</h2>
<!-- backwards compatibility -->
<a id="schemastreamingimagedescription"></a>
<a id="schema_StreamingImageDescription"></a>
<a id="tocSstreamingimagedescription"></a>
<a id="tocsstreamingimagedescription"></a>

```json
"password"
```

The description.

<h2 id="tocS_EC2ImageId">EC2ImageId</h2>
<!-- backwards compatibility -->
<a id="schemaec2imageid"></a>
<a id="schema_EC2ImageId"></a>
<a id="tocSec2imageid"></a>
<a id="tocsec2imageid"></a>

```json
"string"
```

<h2 id="tocS_StreamingImageName">StreamingImageName</h2>
<!-- backwards compatibility -->
<a id="schemastreamingimagename"></a>
<a id="schema_StreamingImageName"></a>
<a id="tocSstreamingimagename"></a>
<a id="tocsstreamingimagename"></a>

```json
"password"
```

A friendly name for a streaming image resource.

<h2 id="tocS_CreateStreamingImageRequest">CreateStreamingImageRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatestreamingimagerequest"></a>
<a id="schema_CreateStreamingImageRequest"></a>
<a id="tocScreatestreamingimagerequest"></a>
<a id="tocscreatestreamingimagerequest"></a>

```json
{
  "description": {},
  "ec2ImageId": {},
  "name": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|object|false|none|none|
|ec2ImageId|object|true|none|none|
|name|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_StreamingImage">StreamingImage</h2>
<!-- backwards compatibility -->
<a id="schemastreamingimage"></a>
<a id="schema_StreamingImage"></a>
<a id="tocSstreamingimage"></a>
<a id="tocsstreamingimage"></a>

```json
{
  "arn": {},
  "description": {},
  "ec2ImageId": {},
  "encryptionConfiguration": {
    "keyArn": {},
    "keyType": {}
  },
  "eulaIds": {},
  "name": {},
  "owner": {},
  "platform": {},
  "state": {},
  "statusCode": {},
  "statusMessage": {},
  "streamingImageId": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<p>Represents a streaming image resource.</p> <p>Streaming images are used by studio users to select which operating system and software they want to use in a Nimble Studio streaming session.</p> <p>Amazon provides a number of streaming images that include popular 3rd-party software.</p> <p>You can create your own streaming images using an Amazon EC2 machine image that you create for this purpose. You can also include software that your users require.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|description|object|false|none|none|
|ec2ImageId|object|false|none|none|
|encryptionConfiguration|object|false|none|none|
|eulaIds|object|false|none|none|
|name|object|false|none|none|
|owner|object|false|none|none|
|platform|object|false|none|none|
|state|object|false|none|none|
|statusCode|object|false|none|none|
|statusMessage|object|false|none|none|
|streamingImageId|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_StreamingInstanceType">StreamingInstanceType</h2>
<!-- backwards compatibility -->
<a id="schemastreaminginstancetype"></a>
<a id="schema_StreamingInstanceType"></a>
<a id="tocSstreaminginstancetype"></a>
<a id="tocsstreaminginstancetype"></a>

```json
"g4dn.xlarge"
```

<h2 id="tocS_StreamingImageId">StreamingImageId</h2>
<!-- backwards compatibility -->
<a id="schemastreamingimageid"></a>
<a id="schema_StreamingImageId"></a>
<a id="tocSstreamingimageid"></a>
<a id="tocsstreamingimageid"></a>

```json
"string"
```

<h2 id="tocS_CreateStreamingSessionRequest">CreateStreamingSessionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatestreamingsessionrequest"></a>
<a id="schema_CreateStreamingSessionRequest"></a>
<a id="tocScreatestreamingsessionrequest"></a>
<a id="tocscreatestreamingsessionrequest"></a>

```json
{
  "ec2InstanceType": {},
  "launchProfileId": {},
  "ownedBy": {},
  "streamingImageId": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ec2InstanceType|object|false|none|none|
|launchProfileId|object|true|none|none|
|ownedBy|object|false|none|none|
|streamingImageId|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_StreamingSession">StreamingSession</h2>
<!-- backwards compatibility -->
<a id="schemastreamingsession"></a>
<a id="schema_StreamingSession"></a>
<a id="tocSstreamingsession"></a>
<a id="tocsstreamingsession"></a>

```json
{
  "arn": {},
  "automaticTerminationMode": {},
  "backupMode": {},
  "createdAt": {},
  "createdBy": {},
  "ec2InstanceType": {},
  "launchProfileId": {},
  "maxBackupsToRetain": {},
  "ownedBy": {},
  "sessionId": {},
  "sessionPersistenceMode": {},
  "startedAt": {},
  "startedBy": {},
  "startedFromBackupId": {},
  "state": {},
  "statusCode": {},
  "statusMessage": {},
  "stopAt": {},
  "stoppedAt": {},
  "stoppedBy": {},
  "streamingImageId": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "terminateAt": {},
  "updatedAt": {},
  "updatedBy": {},
  "volumeConfiguration": {
    "iops": {},
    "size": {},
    "throughput": {}
  },
  "volumeRetentionMode": {}
}
```

A streaming session is a virtual workstation created using a particular launch profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|automaticTerminationMode|object|false|none|none|
|backupMode|object|false|none|none|
|createdAt|object|false|none|none|
|createdBy|object|false|none|none|
|ec2InstanceType|object|false|none|none|
|launchProfileId|object|false|none|none|
|maxBackupsToRetain|object|false|none|none|
|ownedBy|object|false|none|none|
|sessionId|object|false|none|none|
|sessionPersistenceMode|object|false|none|none|
|startedAt|object|false|none|none|
|startedBy|object|false|none|none|
|startedFromBackupId|object|false|none|none|
|state|object|false|none|none|
|statusCode|object|false|none|none|
|statusMessage|object|false|none|none|
|stopAt|object|false|none|none|
|stoppedAt|object|false|none|none|
|stoppedBy|object|false|none|none|
|streamingImageId|object|false|none|none|
|tags|object|false|none|none|
|terminateAt|object|false|none|none|
|updatedAt|object|false|none|none|
|updatedBy|object|false|none|none|
|volumeConfiguration|object|false|none|none|
|volumeRetentionMode|object|false|none|none|

<h2 id="tocS_StreamingSessionStreamExpirationInSeconds">StreamingSessionStreamExpirationInSeconds</h2>
<!-- backwards compatibility -->
<a id="schemastreamingsessionstreamexpirationinseconds"></a>
<a id="schema_StreamingSessionStreamExpirationInSeconds"></a>
<a id="tocSstreamingsessionstreamexpirationinseconds"></a>
<a id="tocsstreamingsessionstreamexpirationinseconds"></a>

```json
60
```

<h2 id="tocS_CreateStreamingSessionStreamRequest">CreateStreamingSessionStreamRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatestreamingsessionstreamrequest"></a>
<a id="schema_CreateStreamingSessionStreamRequest"></a>
<a id="tocScreatestreamingsessionstreamrequest"></a>
<a id="tocscreatestreamingsessionstreamrequest"></a>

```json
{
  "expirationInSeconds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expirationInSeconds|object|false|none|none|

<h2 id="tocS_StreamingSessionStream">StreamingSessionStream</h2>
<!-- backwards compatibility -->
<a id="schemastreamingsessionstream"></a>
<a id="schema_StreamingSessionStream"></a>
<a id="tocSstreamingsessionstream"></a>
<a id="tocsstreamingsessionstream"></a>

```json
{
  "createdAt": {},
  "createdBy": {},
  "expiresAt": {},
  "ownedBy": {},
  "state": {},
  "statusCode": {},
  "streamId": {},
  "url": {}
}
```

A stream is an active connection to a streaming session, enabling a studio user to control the streaming session using a compatible client. Streaming session streams are compatible with the NICE DCV web client, included in the Nimble Studio portal, or the NICE DCV desktop client.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|object|false|none|none|
|createdBy|object|false|none|none|
|expiresAt|object|false|none|none|
|ownedBy|object|false|none|none|
|state|object|false|none|none|
|statusCode|object|false|none|none|
|streamId|object|false|none|none|
|url|object|false|none|none|

<h2 id="tocS_StudioComponentConfiguration">StudioComponentConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemastudiocomponentconfiguration"></a>
<a id="schema_StudioComponentConfiguration"></a>
<a id="tocSstudiocomponentconfiguration"></a>
<a id="tocsstudiocomponentconfiguration"></a>

```json
{
  "activeDirectoryConfiguration": {
    "computerAttributes": {},
    "directoryId": {},
    "organizationalUnitDistinguishedName": {}
  },
  "computeFarmConfiguration": {
    "activeDirectoryUser": {},
    "endpoint": {}
  },
  "licenseServiceConfiguration": {
    "endpoint": {}
  },
  "sharedFileSystemConfiguration": {
    "endpoint": {},
    "fileSystemId": {},
    "linuxMountPoint": {},
    "shareName": {},
    "windowsMountDrive": {}
  }
}
```

The configuration of the studio component, based on component type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activeDirectoryConfiguration|object|false|none|none|
|computeFarmConfiguration|object|false|none|none|
|licenseServiceConfiguration|object|false|none|none|
|sharedFileSystemConfiguration|object|false|none|none|

<h2 id="tocS_StudioComponentDescription">StudioComponentDescription</h2>
<!-- backwards compatibility -->
<a id="schemastudiocomponentdescription"></a>
<a id="schema_StudioComponentDescription"></a>
<a id="tocSstudiocomponentdescription"></a>
<a id="tocsstudiocomponentdescription"></a>

```json
"password"
```

<h2 id="tocS_StudioComponentSecurityGroupIdList">StudioComponentSecurityGroupIdList</h2>
<!-- backwards compatibility -->
<a id="schemastudiocomponentsecuritygroupidlist"></a>
<a id="schema_StudioComponentSecurityGroupIdList"></a>
<a id="tocSstudiocomponentsecuritygroupidlist"></a>
<a id="tocsstudiocomponentsecuritygroupidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_StudioComponentInitializationScriptList">StudioComponentInitializationScriptList</h2>
<!-- backwards compatibility -->
<a id="schemastudiocomponentinitializationscriptlist"></a>
<a id="schema_StudioComponentInitializationScriptList"></a>
<a id="tocSstudiocomponentinitializationscriptlist"></a>
<a id="tocsstudiocomponentinitializationscriptlist"></a>

```json
[
  {
    "launchProfileProtocolVersion": {},
    "platform": {},
    "runContext": {},
    "script": {}
  }
]
```

<h2 id="tocS_StudioComponentName">StudioComponentName</h2>
<!-- backwards compatibility -->
<a id="schemastudiocomponentname"></a>
<a id="schema_StudioComponentName"></a>
<a id="tocSstudiocomponentname"></a>
<a id="tocsstudiocomponentname"></a>

```json
"password"
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

<h2 id="tocS_StudioComponentScriptParameterKeyValueList">StudioComponentScriptParameterKeyValueList</h2>
<!-- backwards compatibility -->
<a id="schemastudiocomponentscriptparameterkeyvaluelist"></a>
<a id="schema_StudioComponentScriptParameterKeyValueList"></a>
<a id="tocSstudiocomponentscriptparameterkeyvaluelist"></a>
<a id="tocsstudiocomponentscriptparameterkeyvaluelist"></a>

```json
[
  {
    "key": {},
    "value": {}
  }
]
```

<h2 id="tocS_StudioComponentSubtype">StudioComponentSubtype</h2>
<!-- backwards compatibility -->
<a id="schemastudiocomponentsubtype"></a>
<a id="schema_StudioComponentSubtype"></a>
<a id="tocSstudiocomponentsubtype"></a>
<a id="tocsstudiocomponentsubtype"></a>

```json
"AWS_MANAGED_MICROSOFT_AD"
```

<h2 id="tocS_CreateStudioComponentRequest">CreateStudioComponentRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatestudiocomponentrequest"></a>
<a id="schema_CreateStudioComponentRequest"></a>
<a id="tocScreatestudiocomponentrequest"></a>
<a id="tocscreatestudiocomponentrequest"></a>

```json
{
  "configuration": {
    "activeDirectoryConfiguration": {
      "computerAttributes": {},
      "directoryId": {},
      "organizationalUnitDistinguishedName": {}
    },
    "computeFarmConfiguration": {
      "activeDirectoryUser": {},
      "endpoint": {}
    },
    "licenseServiceConfiguration": {
      "endpoint": {}
    },
    "sharedFileSystemConfiguration": {
      "endpoint": {},
      "fileSystemId": {},
      "linuxMountPoint": {},
      "shareName": {},
      "windowsMountDrive": {}
    }
  },
  "description": {},
  "ec2SecurityGroupIds": {},
  "initializationScripts": {},
  "name": {},
  "runtimeRoleArn": {},
  "scriptParameters": {},
  "secureInitializationRoleArn": {},
  "subtype": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "type": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configuration|object|false|none|none|
|description|object|false|none|none|
|ec2SecurityGroupIds|object|false|none|none|
|initializationScripts|object|false|none|none|
|name|object|true|none|none|
|runtimeRoleArn|object|false|none|none|
|scriptParameters|object|false|none|none|
|secureInitializationRoleArn|object|false|none|none|
|subtype|object|false|none|none|
|tags|object|false|none|none|
|type|object|true|none|none|

<h2 id="tocS_StudioComponent">StudioComponent</h2>
<!-- backwards compatibility -->
<a id="schemastudiocomponent"></a>
<a id="schema_StudioComponent"></a>
<a id="tocSstudiocomponent"></a>
<a id="tocsstudiocomponent"></a>

```json
{
  "arn": {},
  "configuration": {
    "activeDirectoryConfiguration": {
      "computerAttributes": {},
      "directoryId": {},
      "organizationalUnitDistinguishedName": {}
    },
    "computeFarmConfiguration": {
      "activeDirectoryUser": {},
      "endpoint": {}
    },
    "licenseServiceConfiguration": {
      "endpoint": {}
    },
    "sharedFileSystemConfiguration": {
      "endpoint": {},
      "fileSystemId": {},
      "linuxMountPoint": {},
      "shareName": {},
      "windowsMountDrive": {}
    }
  },
  "createdAt": {},
  "createdBy": {},
  "description": {},
  "ec2SecurityGroupIds": {},
  "initializationScripts": {},
  "name": {},
  "runtimeRoleArn": {},
  "scriptParameters": {},
  "secureInitializationRoleArn": {},
  "state": {},
  "statusCode": {},
  "statusMessage": {},
  "studioComponentId": {},
  "subtype": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "type": {},
  "updatedAt": {},
  "updatedBy": {}
}
```

<p>A studio component represents a network resource to be used by a studio's users and workflows. A typical studio contains studio components for each of the following: render farm, Active Directory, licensing, and file system.</p> <p>Access to a studio component is managed by specifying security groups for the resource, as well as its endpoint.</p> <p>A studio component also has a set of initialization scripts that are returned by <code>GetLaunchProfileInitialization</code>. These initialization scripts run on streaming sessions when they start. They provide users with flexibility in controlling how the studio resources are configured on a streaming session.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|configuration|object|false|none|none|
|createdAt|object|false|none|none|
|createdBy|object|false|none|none|
|description|object|false|none|none|
|ec2SecurityGroupIds|object|false|none|none|
|initializationScripts|object|false|none|none|
|name|object|false|none|none|
|runtimeRoleArn|object|false|none|none|
|scriptParameters|object|false|none|none|
|secureInitializationRoleArn|object|false|none|none|
|state|object|false|none|none|
|statusCode|object|false|none|none|
|statusMessage|object|false|none|none|
|studioComponentId|object|false|none|none|
|subtype|object|false|none|none|
|tags|object|false|none|none|
|type|object|false|none|none|
|updatedAt|object|false|none|none|
|updatedBy|object|false|none|none|

<h2 id="tocS_StudioDisplayName">StudioDisplayName</h2>
<!-- backwards compatibility -->
<a id="schemastudiodisplayname"></a>
<a id="schema_StudioDisplayName"></a>
<a id="tocSstudiodisplayname"></a>
<a id="tocsstudiodisplayname"></a>

```json
"password"
```

<h2 id="tocS_StudioEncryptionConfiguration">StudioEncryptionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemastudioencryptionconfiguration"></a>
<a id="schema_StudioEncryptionConfiguration"></a>
<a id="tocSstudioencryptionconfiguration"></a>
<a id="tocsstudioencryptionconfiguration"></a>

```json
{
  "keyArn": {},
  "keyType": {}
}
```

Configuration of the encryption method that is used for the studio.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keyArn|object|false|none|none|
|keyType|object|true|none|none|

<h2 id="tocS_StudioName">StudioName</h2>
<!-- backwards compatibility -->
<a id="schemastudioname"></a>
<a id="schema_StudioName"></a>
<a id="tocSstudioname"></a>
<a id="tocsstudioname"></a>

```json
"string"
```

<h2 id="tocS_CreateStudioRequest">CreateStudioRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatestudiorequest"></a>
<a id="schema_CreateStudioRequest"></a>
<a id="tocScreatestudiorequest"></a>
<a id="tocscreatestudiorequest"></a>

```json
{
  "adminRoleArn": {},
  "displayName": {},
  "studioEncryptionConfiguration": {
    "keyArn": {},
    "keyType": {}
  },
  "studioName": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "userRoleArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adminRoleArn|object|true|none|none|
|displayName|object|true|none|none|
|studioEncryptionConfiguration|object|false|none|none|
|studioName|object|true|none|none|
|tags|object|false|none|none|
|userRoleArn|object|true|none|none|

<h2 id="tocS_Studio">Studio</h2>
<!-- backwards compatibility -->
<a id="schemastudio"></a>
<a id="schema_Studio"></a>
<a id="tocSstudio"></a>
<a id="tocsstudio"></a>

```json
{
  "adminRoleArn": {},
  "arn": {},
  "createdAt": {},
  "displayName": {},
  "homeRegion": {},
  "ssoClientId": {},
  "state": {},
  "statusCode": {},
  "statusMessage": {},
  "studioEncryptionConfiguration": {
    "keyArn": {},
    "keyType": {}
  },
  "studioId": {},
  "studioName": {},
  "studioUrl": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "updatedAt": {},
  "userRoleArn": {}
}
```

<p>Represents a studio resource.</p> <p>A studio is the core resource used with Nimble Studio. You must create a studio first, before any other resource type can be created. All other resources you create and manage in Nimble Studio are contained within a studio.</p> <p>When creating a studio, you must provides two IAM roles for use with the Nimble Studio portal. These roles are assumed by your users when they log in to the Nimble Studio portal via IAM Identity Center and your identity source.</p> <p>The user role must have the <code>AmazonNimbleStudio-StudioUser</code> managed policy attached for the portal to function properly.</p> <p>The admin role must have the <code>AmazonNimbleStudio-StudioAdmin</code> managed policy attached for the portal to function properly.</p> <p>Your studio roles must trust the <code>identity.nimble.amazonaws.com</code> service principal to function properly.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adminRoleArn|object|false|none|none|
|arn|object|false|none|none|
|createdAt|object|false|none|none|
|displayName|object|false|none|none|
|homeRegion|object|false|none|none|
|ssoClientId|object|false|none|none|
|state|object|false|none|none|
|statusCode|object|false|none|none|
|statusMessage|object|false|none|none|
|studioEncryptionConfiguration|object|false|none|none|
|studioId|object|false|none|none|
|studioName|object|false|none|none|
|studioUrl|object|false|none|none|
|tags|object|false|none|none|
|updatedAt|object|false|none|none|
|userRoleArn|object|false|none|none|

<h2 id="tocS_DeleteLaunchProfileMemberRequest">DeleteLaunchProfileMemberRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletelaunchprofilememberrequest"></a>
<a id="schema_DeleteLaunchProfileMemberRequest"></a>
<a id="tocSdeletelaunchprofilememberrequest"></a>
<a id="tocsdeletelaunchprofilememberrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteLaunchProfileRequest">DeleteLaunchProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletelaunchprofilerequest"></a>
<a id="schema_DeleteLaunchProfileRequest"></a>
<a id="tocSdeletelaunchprofilerequest"></a>
<a id="tocsdeletelaunchprofilerequest"></a>

```json
{}
```

<h2 id="tocS_DeleteStreamingImageRequest">DeleteStreamingImageRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletestreamingimagerequest"></a>
<a id="schema_DeleteStreamingImageRequest"></a>
<a id="tocSdeletestreamingimagerequest"></a>
<a id="tocsdeletestreamingimagerequest"></a>

```json
{}
```

<h2 id="tocS_DeleteStreamingSessionRequest">DeleteStreamingSessionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletestreamingsessionrequest"></a>
<a id="schema_DeleteStreamingSessionRequest"></a>
<a id="tocSdeletestreamingsessionrequest"></a>
<a id="tocsdeletestreamingsessionrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteStudioComponentRequest">DeleteStudioComponentRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletestudiocomponentrequest"></a>
<a id="schema_DeleteStudioComponentRequest"></a>
<a id="tocSdeletestudiocomponentrequest"></a>
<a id="tocsdeletestudiocomponentrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteStudioMemberRequest">DeleteStudioMemberRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletestudiomemberrequest"></a>
<a id="schema_DeleteStudioMemberRequest"></a>
<a id="tocSdeletestudiomemberrequest"></a>
<a id="tocsdeletestudiomemberrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteStudioRequest">DeleteStudioRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletestudiorequest"></a>
<a id="schema_DeleteStudioRequest"></a>
<a id="tocSdeletestudiorequest"></a>
<a id="tocsdeletestudiorequest"></a>

```json
{}
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

<h2 id="tocS_EulaId">EulaId</h2>
<!-- backwards compatibility -->
<a id="schemaeulaid"></a>
<a id="schema_EulaId"></a>
<a id="tocSeulaid"></a>
<a id="tocseulaid"></a>

```json
"string"
```

Represents a EULA resource.

<h2 id="tocS_EulaName">EulaName</h2>
<!-- backwards compatibility -->
<a id="schemaeulaname"></a>
<a id="schema_EulaName"></a>
<a id="tocSeulaname"></a>
<a id="tocseulaname"></a>

```json
"string"
```

<h2 id="tocS_Eula">Eula</h2>
<!-- backwards compatibility -->
<a id="schemaeula"></a>
<a id="schema_Eula"></a>
<a id="tocSeula"></a>
<a id="tocseula"></a>

```json
{
  "content": {},
  "createdAt": {},
  "eulaId": {},
  "name": {},
  "updatedAt": {}
}
```

Represents a EULA resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|object|false|none|none|
|createdAt|object|false|none|none|
|eulaId|object|false|none|none|
|name|object|false|none|none|
|updatedAt|object|false|none|none|

<h2 id="tocS_EulaAcceptanceId">EulaAcceptanceId</h2>
<!-- backwards compatibility -->
<a id="schemaeulaacceptanceid"></a>
<a id="schema_EulaAcceptanceId"></a>
<a id="tocSeulaacceptanceid"></a>
<a id="tocseulaacceptanceid"></a>

```json
"string"
```

The EULA acceptance ID.

<h2 id="tocS_EulaAcceptance">EulaAcceptance</h2>
<!-- backwards compatibility -->
<a id="schemaeulaacceptance"></a>
<a id="schema_EulaAcceptance"></a>
<a id="tocSeulaacceptance"></a>
<a id="tocseulaacceptance"></a>

```json
{
  "acceptedAt": {},
  "acceptedBy": {},
  "accepteeId": {},
  "eulaAcceptanceId": {},
  "eulaId": {}
}
```

The acceptance of a EULA, required to use Amazon-provided streaming images.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acceptedAt|object|false|none|none|
|acceptedBy|object|false|none|none|
|accepteeId|object|false|none|none|
|eulaAcceptanceId|object|false|none|none|
|eulaId|object|false|none|none|

<h2 id="tocS_EulaList">EulaList</h2>
<!-- backwards compatibility -->
<a id="schemaeulalist"></a>
<a id="schema_EulaList"></a>
<a id="tocSeulalist"></a>
<a id="tocseulalist"></a>

```json
[
  {
    "content": {},
    "createdAt": {},
    "eulaId": {},
    "name": {},
    "updatedAt": {}
  }
]
```

<h2 id="tocS_GetEulaRequest">GetEulaRequest</h2>
<!-- backwards compatibility -->
<a id="schemageteularequest"></a>
<a id="schema_GetEulaRequest"></a>
<a id="tocSgeteularequest"></a>
<a id="tocsgeteularequest"></a>

```json
{}
```

<h2 id="tocS_GetLaunchProfileDetailsRequest">GetLaunchProfileDetailsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetlaunchprofiledetailsrequest"></a>
<a id="schema_GetLaunchProfileDetailsRequest"></a>
<a id="tocSgetlaunchprofiledetailsrequest"></a>
<a id="tocsgetlaunchprofiledetailsrequest"></a>

```json
{}
```

<h2 id="tocS_StreamingImageList">StreamingImageList</h2>
<!-- backwards compatibility -->
<a id="schemastreamingimagelist"></a>
<a id="schema_StreamingImageList"></a>
<a id="tocSstreamingimagelist"></a>
<a id="tocsstreamingimagelist"></a>

```json
[
  {
    "arn": {},
    "description": {},
    "ec2ImageId": {},
    "encryptionConfiguration": {
      "keyArn": {},
      "keyType": {}
    },
    "eulaIds": {},
    "name": {},
    "owner": {},
    "platform": {},
    "state": {},
    "statusCode": {},
    "statusMessage": {},
    "streamingImageId": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_StudioComponentSummaryList">StudioComponentSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemastudiocomponentsummarylist"></a>
<a id="schema_StudioComponentSummaryList"></a>
<a id="tocSstudiocomponentsummarylist"></a>
<a id="tocsstudiocomponentsummarylist"></a>

```json
[
  {
    "createdAt": {},
    "createdBy": {},
    "description": {},
    "name": {},
    "studioComponentId": {},
    "subtype": {},
    "type": {},
    "updatedAt": {},
    "updatedBy": {}
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

<h2 id="tocS_GetLaunchProfileInitializationRequest">GetLaunchProfileInitializationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetlaunchprofileinitializationrequest"></a>
<a id="schema_GetLaunchProfileInitializationRequest"></a>
<a id="tocSgetlaunchprofileinitializationrequest"></a>
<a id="tocsgetlaunchprofileinitializationrequest"></a>

```json
{}
```

<h2 id="tocS_LaunchProfileInitialization">LaunchProfileInitialization</h2>
<!-- backwards compatibility -->
<a id="schemalaunchprofileinitialization"></a>
<a id="schema_LaunchProfileInitialization"></a>
<a id="tocSlaunchprofileinitialization"></a>
<a id="tocslaunchprofileinitialization"></a>

```json
{
  "activeDirectory": {
    "computerAttributes": {},
    "directoryId": {},
    "directoryName": {},
    "dnsIpAddresses": {},
    "organizationalUnitDistinguishedName": {},
    "studioComponentId": {},
    "studioComponentName": {}
  },
  "ec2SecurityGroupIds": {},
  "launchProfileId": {},
  "launchProfileProtocolVersion": {},
  "launchPurpose": {},
  "name": {},
  "platform": {},
  "systemInitializationScripts": {},
  "userInitializationScripts": {}
}
```

<p>A launch profile initialization contains information required for a workstation or server to connect to a launch profile.</p> <p>This includes scripts, endpoints, security groups, subnets, and other configuration.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activeDirectory|object|false|none|none|
|ec2SecurityGroupIds|object|false|none|none|
|launchProfileId|object|false|none|none|
|launchProfileProtocolVersion|object|false|none|none|
|launchPurpose|object|false|none|none|
|name|object|false|none|none|
|platform|object|false|none|none|
|systemInitializationScripts|object|false|none|none|
|userInitializationScripts|object|false|none|none|

<h2 id="tocS_GetLaunchProfileMemberRequest">GetLaunchProfileMemberRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetlaunchprofilememberrequest"></a>
<a id="schema_GetLaunchProfileMemberRequest"></a>
<a id="tocSgetlaunchprofilememberrequest"></a>
<a id="tocsgetlaunchprofilememberrequest"></a>

```json
{}
```

<h2 id="tocS_LaunchProfileMembership">LaunchProfileMembership</h2>
<!-- backwards compatibility -->
<a id="schemalaunchprofilemembership"></a>
<a id="schema_LaunchProfileMembership"></a>
<a id="tocSlaunchprofilemembership"></a>
<a id="tocslaunchprofilemembership"></a>

```json
{
  "identityStoreId": {},
  "persona": {},
  "principalId": {},
  "sid": {}
}
```

<p>Studio admins can use launch profile membership to delegate launch profile access to studio users in the Nimble Studio portal without writing or maintaining complex IAM policies. A launch profile member is a user association from your studio identity source who is granted permissions to a launch profile.</p> <p>A launch profile member (type USER) provides the following permissions to that launch profile:</p> <ul> <li> <p>GetLaunchProfile</p> </li> <li> <p>GetLaunchProfileInitialization</p> </li> <li> <p>GetLaunchProfileMembers</p> </li> <li> <p>GetLaunchProfileMember</p> </li> <li> <p>CreateStreamingSession</p> </li> <li> <p>GetLaunchProfileDetails</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identityStoreId|object|false|none|none|
|persona|object|false|none|none|
|principalId|object|false|none|none|
|sid|object|false|none|none|

<h2 id="tocS_GetLaunchProfileRequest">GetLaunchProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetlaunchprofilerequest"></a>
<a id="schema_GetLaunchProfileRequest"></a>
<a id="tocSgetlaunchprofilerequest"></a>
<a id="tocsgetlaunchprofilerequest"></a>

```json
{}
```

<h2 id="tocS_GetStreamingImageRequest">GetStreamingImageRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetstreamingimagerequest"></a>
<a id="schema_GetStreamingImageRequest"></a>
<a id="tocSgetstreamingimagerequest"></a>
<a id="tocsgetstreamingimagerequest"></a>

```json
{}
```

<h2 id="tocS_GetStreamingSessionBackupRequest">GetStreamingSessionBackupRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetstreamingsessionbackuprequest"></a>
<a id="schema_GetStreamingSessionBackupRequest"></a>
<a id="tocSgetstreamingsessionbackuprequest"></a>
<a id="tocsgetstreamingsessionbackuprequest"></a>

```json
{}
```

<h2 id="tocS_StreamingSessionBackup">StreamingSessionBackup</h2>
<!-- backwards compatibility -->
<a id="schemastreamingsessionbackup"></a>
<a id="schema_StreamingSessionBackup"></a>
<a id="tocSstreamingsessionbackup"></a>
<a id="tocsstreamingsessionbackup"></a>

```json
{
  "arn": {},
  "backupId": {},
  "createdAt": {},
  "launchProfileId": {},
  "ownedBy": {},
  "sessionId": {},
  "state": "CREATE_IN_PROGRESS",
  "statusCode": {},
  "statusMessage": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Information about the streaming session backup.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|backupId|object|false|none|none|
|createdAt|object|false|none|none|
|launchProfileId|object|false|none|none|
|ownedBy|object|false|none|none|
|sessionId|object|false|none|none|
|state|[StreamingSessionState](#schemastreamingsessionstate)|false|none|The streaming session state.|
|statusCode|object|false|none|none|
|statusMessage|object|false|none|none|
|tags|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|CREATE_IN_PROGRESS|
|state|DELETE_IN_PROGRESS|
|state|READY|
|state|DELETED|
|state|CREATE_FAILED|
|state|DELETE_FAILED|
|state|STOP_IN_PROGRESS|
|state|START_IN_PROGRESS|
|state|STOPPED|
|state|STOP_FAILED|
|state|START_FAILED|

<h2 id="tocS_GetStreamingSessionRequest">GetStreamingSessionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetstreamingsessionrequest"></a>
<a id="schema_GetStreamingSessionRequest"></a>
<a id="tocSgetstreamingsessionrequest"></a>
<a id="tocsgetstreamingsessionrequest"></a>

```json
{}
```

<h2 id="tocS_GetStreamingSessionStreamRequest">GetStreamingSessionStreamRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetstreamingsessionstreamrequest"></a>
<a id="schema_GetStreamingSessionStreamRequest"></a>
<a id="tocSgetstreamingsessionstreamrequest"></a>
<a id="tocsgetstreamingsessionstreamrequest"></a>

```json
{}
```

<h2 id="tocS_GetStudioComponentRequest">GetStudioComponentRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetstudiocomponentrequest"></a>
<a id="schema_GetStudioComponentRequest"></a>
<a id="tocSgetstudiocomponentrequest"></a>
<a id="tocsgetstudiocomponentrequest"></a>

```json
{}
```

<h2 id="tocS_GetStudioMemberRequest">GetStudioMemberRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetstudiomemberrequest"></a>
<a id="schema_GetStudioMemberRequest"></a>
<a id="tocSgetstudiomemberrequest"></a>
<a id="tocsgetstudiomemberrequest"></a>

```json
{}
```

<h2 id="tocS_StudioMembership">StudioMembership</h2>
<!-- backwards compatibility -->
<a id="schemastudiomembership"></a>
<a id="schema_StudioMembership"></a>
<a id="tocSstudiomembership"></a>
<a id="tocsstudiomembership"></a>

```json
{
  "identityStoreId": {},
  "persona": {},
  "principalId": {},
  "sid": {}
}
```

<p>A studio member is an association of a user from your studio identity source to elevated permissions that they are granted in the studio.</p> <p>When you add a user to your studio using the Nimble Studio console, they are given access to the studio's IAM Identity Center application and are given access to log in to the Nimble Studio portal. These users have the permissions provided by the studio's user IAM role and do not appear in the studio membership collection. Only studio admins appear in studio membership.</p> <p>When you add a user to studio membership with the ADMIN persona, upon logging in to the Nimble Studio portal, they are granted permissions specified by the Studio's Admin IAM role.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identityStoreId|object|false|none|none|
|persona|object|false|none|none|
|principalId|object|false|none|none|
|sid|object|false|none|none|

<h2 id="tocS_GetStudioRequest">GetStudioRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetstudiorequest"></a>
<a id="schema_GetStudioRequest"></a>
<a id="tocSgetstudiorequest"></a>
<a id="tocsgetstudiorequest"></a>

```json
{}
```

<h2 id="tocS_LaunchProfileId">LaunchProfileId</h2>
<!-- backwards compatibility -->
<a id="schemalaunchprofileid"></a>
<a id="schema_LaunchProfileId"></a>
<a id="tocSlaunchprofileid"></a>
<a id="tocslaunchprofileid"></a>

```json
"string"
```

<h2 id="tocS_LaunchProfileStatusCode">LaunchProfileStatusCode</h2>
<!-- backwards compatibility -->
<a id="schemalaunchprofilestatuscode"></a>
<a id="schema_LaunchProfileStatusCode"></a>
<a id="tocSlaunchprofilestatuscode"></a>
<a id="tocslaunchprofilestatuscode"></a>

```json
"LAUNCH_PROFILE_CREATED"
```

<h2 id="tocS_StreamConfiguration">StreamConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemastreamconfiguration"></a>
<a id="schema_StreamConfiguration"></a>
<a id="tocSstreamconfiguration"></a>
<a id="tocsstreamconfiguration"></a>

```json
{
  "automaticTerminationMode": {},
  "clipboardMode": {},
  "ec2InstanceTypes": {},
  "maxSessionLengthInMinutes": {},
  "maxStoppedSessionLengthInMinutes": {},
  "sessionBackup": {
    "maxBackupsToRetain": {},
    "mode": {}
  },
  "sessionPersistenceMode": {},
  "sessionStorage": {
    "mode": {},
    "root": {
      "linux": {},
      "windows": {}
    }
  },
  "streamingImageIds": {},
  "volumeConfiguration": {
    "iops": {},
    "size": {},
    "throughput": {}
  }
}
```

A configuration for a streaming session.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|automaticTerminationMode|object|false|none|none|
|clipboardMode|object|true|none|none|
|ec2InstanceTypes|object|true|none|none|
|maxSessionLengthInMinutes|object|false|none|none|
|maxStoppedSessionLengthInMinutes|object|false|none|none|
|sessionBackup|object|false|none|none|
|sessionPersistenceMode|object|false|none|none|
|sessionStorage|object|false|none|none|
|streamingImageIds|object|true|none|none|
|volumeConfiguration|object|false|none|none|

<h2 id="tocS_ValidationResults">ValidationResults</h2>
<!-- backwards compatibility -->
<a id="schemavalidationresults"></a>
<a id="schema_ValidationResults"></a>
<a id="tocSvalidationresults"></a>
<a id="tocsvalidationresults"></a>

```json
[
  {
    "state": {},
    "statusCode": {},
    "statusMessage": {},
    "type": {}
  }
]
```

<h2 id="tocS_LaunchProfileInitializationActiveDirectory">LaunchProfileInitializationActiveDirectory</h2>
<!-- backwards compatibility -->
<a id="schemalaunchprofileinitializationactivedirectory"></a>
<a id="schema_LaunchProfileInitializationActiveDirectory"></a>
<a id="tocSlaunchprofileinitializationactivedirectory"></a>
<a id="tocslaunchprofileinitializationactivedirectory"></a>

```json
{
  "computerAttributes": {},
  "directoryId": {},
  "directoryName": {},
  "dnsIpAddresses": {},
  "organizationalUnitDistinguishedName": {},
  "studioComponentId": {},
  "studioComponentName": {}
}
```

The launch profile initialization Active Directory contains information required for the launch profile to connect to the Active Directory.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|computerAttributes|object|false|none|none|
|directoryId|object|false|none|none|
|directoryName|object|false|none|none|
|dnsIpAddresses|object|false|none|none|
|organizationalUnitDistinguishedName|object|false|none|none|
|studioComponentId|object|false|none|none|
|studioComponentName|object|false|none|none|

<h2 id="tocS_LaunchProfileSecurityGroupIdList">LaunchProfileSecurityGroupIdList</h2>
<!-- backwards compatibility -->
<a id="schemalaunchprofilesecuritygroupidlist"></a>
<a id="schema_LaunchProfileSecurityGroupIdList"></a>
<a id="tocSlaunchprofilesecuritygroupidlist"></a>
<a id="tocslaunchprofilesecuritygroupidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_LaunchPurpose">LaunchPurpose</h2>
<!-- backwards compatibility -->
<a id="schemalaunchpurpose"></a>
<a id="schema_LaunchPurpose"></a>
<a id="tocSlaunchpurpose"></a>
<a id="tocslaunchpurpose"></a>

```json
"string"
```

The launch purpose.

<h2 id="tocS_LaunchProfilePlatform">LaunchProfilePlatform</h2>
<!-- backwards compatibility -->
<a id="schemalaunchprofileplatform"></a>
<a id="schema_LaunchProfilePlatform"></a>
<a id="tocSlaunchprofileplatform"></a>
<a id="tocslaunchprofileplatform"></a>

```json
"LINUX"
```

<h2 id="tocS_LaunchProfileInitializationScriptList">LaunchProfileInitializationScriptList</h2>
<!-- backwards compatibility -->
<a id="schemalaunchprofileinitializationscriptlist"></a>
<a id="schema_LaunchProfileInitializationScriptList"></a>
<a id="tocSlaunchprofileinitializationscriptlist"></a>
<a id="tocslaunchprofileinitializationscriptlist"></a>

```json
[
  {
    "runtimeRoleArn": {},
    "script": {},
    "secureInitializationRoleArn": {},
    "studioComponentId": {},
    "studioComponentName": {}
  }
]
```

<h2 id="tocS_StudioComponentId">StudioComponentId</h2>
<!-- backwards compatibility -->
<a id="schemastudiocomponentid"></a>
<a id="schema_StudioComponentId"></a>
<a id="tocSstudiocomponentid"></a>
<a id="tocsstudiocomponentid"></a>

```json
"string"
```

<h2 id="tocS_StudioComponentInitializationScriptContent">StudioComponentInitializationScriptContent</h2>
<!-- backwards compatibility -->
<a id="schemastudiocomponentinitializationscriptcontent"></a>
<a id="schema_StudioComponentInitializationScriptContent"></a>
<a id="tocSstudiocomponentinitializationscriptcontent"></a>
<a id="tocsstudiocomponentinitializationscriptcontent"></a>

```json
"password"
```

<h2 id="tocS_LaunchProfileInitializationScript">LaunchProfileInitializationScript</h2>
<!-- backwards compatibility -->
<a id="schemalaunchprofileinitializationscript"></a>
<a id="schema_LaunchProfileInitializationScript"></a>
<a id="tocSlaunchprofileinitializationscript"></a>
<a id="tocslaunchprofileinitializationscript"></a>

```json
{
  "runtimeRoleArn": {},
  "script": {},
  "secureInitializationRoleArn": {},
  "studioComponentId": {},
  "studioComponentName": {}
}
```

The launch profile initialization script is used when start streaming session runs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|runtimeRoleArn|object|false|none|none|
|script|object|false|none|none|
|secureInitializationRoleArn|object|false|none|none|
|studioComponentId|object|false|none|none|
|studioComponentName|object|false|none|none|

<h2 id="tocS_LaunchProfileList">LaunchProfileList</h2>
<!-- backwards compatibility -->
<a id="schemalaunchprofilelist"></a>
<a id="schema_LaunchProfileList"></a>
<a id="tocSlaunchprofilelist"></a>
<a id="tocslaunchprofilelist"></a>

```json
[
  {
    "arn": {},
    "createdAt": {},
    "createdBy": {},
    "description": {},
    "ec2SubnetIds": {},
    "launchProfileId": {},
    "launchProfileProtocolVersions": {},
    "name": {},
    "state": {},
    "statusCode": {},
    "statusMessage": {},
    "streamConfiguration": {
      "automaticTerminationMode": {},
      "clipboardMode": {},
      "ec2InstanceTypes": {},
      "maxSessionLengthInMinutes": {},
      "maxStoppedSessionLengthInMinutes": {},
      "sessionBackup": {
        "maxBackupsToRetain": {},
        "mode": {}
      },
      "sessionPersistenceMode": {},
      "sessionStorage": {
        "mode": {},
        "root": {
          "linux": {},
          "windows": {}
        }
      },
      "streamingImageIds": {},
      "volumeConfiguration": {
        "iops": {},
        "size": {},
        "throughput": {}
      }
    },
    "studioComponentIds": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "updatedAt": {},
    "updatedBy": {},
    "validationResults": {}
  }
]
```

<h2 id="tocS_LaunchProfilePersona">LaunchProfilePersona</h2>
<!-- backwards compatibility -->
<a id="schemalaunchprofilepersona"></a>
<a id="schema_LaunchProfilePersona"></a>
<a id="tocSlaunchprofilepersona"></a>
<a id="tocslaunchprofilepersona"></a>

```json
"USER"
```

<h2 id="tocS_LaunchProfileMembershipList">LaunchProfileMembershipList</h2>
<!-- backwards compatibility -->
<a id="schemalaunchprofilemembershiplist"></a>
<a id="schema_LaunchProfileMembershipList"></a>
<a id="tocSlaunchprofilemembershiplist"></a>
<a id="tocslaunchprofilemembershiplist"></a>

```json
[
  {
    "identityStoreId": {},
    "persona": {},
    "principalId": {},
    "sid": {}
  }
]
```

<h2 id="tocS_LaunchProfileStateList">LaunchProfileStateList</h2>
<!-- backwards compatibility -->
<a id="schemalaunchprofilestatelist"></a>
<a id="schema_LaunchProfileStateList"></a>
<a id="tocSlaunchprofilestatelist"></a>
<a id="tocslaunchprofilestatelist"></a>

```json
[
  "CREATE_IN_PROGRESS"
]
```

<h2 id="tocS_LaunchProfileValidationState">LaunchProfileValidationState</h2>
<!-- backwards compatibility -->
<a id="schemalaunchprofilevalidationstate"></a>
<a id="schema_LaunchProfileValidationState"></a>
<a id="tocSlaunchprofilevalidationstate"></a>
<a id="tocslaunchprofilevalidationstate"></a>

```json
"VALIDATION_NOT_STARTED"
```

<h2 id="tocS_LaunchProfileValidationStatusCode">LaunchProfileValidationStatusCode</h2>
<!-- backwards compatibility -->
<a id="schemalaunchprofilevalidationstatuscode"></a>
<a id="schema_LaunchProfileValidationStatusCode"></a>
<a id="tocSlaunchprofilevalidationstatuscode"></a>
<a id="tocslaunchprofilevalidationstatuscode"></a>

```json
"VALIDATION_NOT_STARTED"
```

<h2 id="tocS_LaunchProfileValidationStatusMessage">LaunchProfileValidationStatusMessage</h2>
<!-- backwards compatibility -->
<a id="schemalaunchprofilevalidationstatusmessage"></a>
<a id="schema_LaunchProfileValidationStatusMessage"></a>
<a id="tocSlaunchprofilevalidationstatusmessage"></a>
<a id="tocslaunchprofilevalidationstatusmessage"></a>

```json
"string"
```

<h2 id="tocS_LaunchProfileValidationType">LaunchProfileValidationType</h2>
<!-- backwards compatibility -->
<a id="schemalaunchprofilevalidationtype"></a>
<a id="schema_LaunchProfileValidationType"></a>
<a id="tocSlaunchprofilevalidationtype"></a>
<a id="tocslaunchprofilevalidationtype"></a>

```json
"VALIDATE_ACTIVE_DIRECTORY_STUDIO_COMPONENT"
```

<h2 id="tocS_LinuxMountPoint">LinuxMountPoint</h2>
<!-- backwards compatibility -->
<a id="schemalinuxmountpoint"></a>
<a id="schema_LinuxMountPoint"></a>
<a id="tocSlinuxmountpoint"></a>
<a id="tocslinuxmountpoint"></a>

```json
"password"
```

<h2 id="tocS_ListEulaAcceptancesRequest">ListEulaAcceptancesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisteulaacceptancesrequest"></a>
<a id="schema_ListEulaAcceptancesRequest"></a>
<a id="tocSlisteulaacceptancesrequest"></a>
<a id="tocslisteulaacceptancesrequest"></a>

```json
{}
```

<h2 id="tocS_ListEulasRequest">ListEulasRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisteulasrequest"></a>
<a id="schema_ListEulasRequest"></a>
<a id="tocSlisteulasrequest"></a>
<a id="tocslisteulasrequest"></a>

```json
{}
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

<h2 id="tocS_ListLaunchProfileMembersRequest">ListLaunchProfileMembersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistlaunchprofilemembersrequest"></a>
<a id="schema_ListLaunchProfileMembersRequest"></a>
<a id="tocSlistlaunchprofilemembersrequest"></a>
<a id="tocslistlaunchprofilemembersrequest"></a>

```json
{}
```

<h2 id="tocS_ListLaunchProfilesRequest">ListLaunchProfilesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistlaunchprofilesrequest"></a>
<a id="schema_ListLaunchProfilesRequest"></a>
<a id="tocSlistlaunchprofilesrequest"></a>
<a id="tocslistlaunchprofilesrequest"></a>

```json
{}
```

<h2 id="tocS_ListStreamingImagesRequest">ListStreamingImagesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaliststreamingimagesrequest"></a>
<a id="schema_ListStreamingImagesRequest"></a>
<a id="tocSliststreamingimagesrequest"></a>
<a id="tocsliststreamingimagesrequest"></a>

```json
{}
```

<h2 id="tocS_ListStreamingSessionBackupsRequest">ListStreamingSessionBackupsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaliststreamingsessionbackupsrequest"></a>
<a id="schema_ListStreamingSessionBackupsRequest"></a>
<a id="tocSliststreamingsessionbackupsrequest"></a>
<a id="tocsliststreamingsessionbackupsrequest"></a>

```json
{}
```

<h2 id="tocS_StreamingSessionBackupList">StreamingSessionBackupList</h2>
<!-- backwards compatibility -->
<a id="schemastreamingsessionbackuplist"></a>
<a id="schema_StreamingSessionBackupList"></a>
<a id="tocSstreamingsessionbackuplist"></a>
<a id="tocsstreamingsessionbackuplist"></a>

```json
[
  {
    "arn": {},
    "backupId": {},
    "createdAt": {},
    "launchProfileId": {},
    "ownedBy": {},
    "sessionId": {},
    "state": "CREATE_IN_PROGRESS",
    "statusCode": {},
    "statusMessage": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_ListStreamingSessionsRequest">ListStreamingSessionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaliststreamingsessionsrequest"></a>
<a id="schema_ListStreamingSessionsRequest"></a>
<a id="tocSliststreamingsessionsrequest"></a>
<a id="tocsliststreamingsessionsrequest"></a>

```json
{}
```

<h2 id="tocS_StreamingSessionList">StreamingSessionList</h2>
<!-- backwards compatibility -->
<a id="schemastreamingsessionlist"></a>
<a id="schema_StreamingSessionList"></a>
<a id="tocSstreamingsessionlist"></a>
<a id="tocsstreamingsessionlist"></a>

```json
[
  {
    "arn": {},
    "automaticTerminationMode": {},
    "backupMode": {},
    "createdAt": {},
    "createdBy": {},
    "ec2InstanceType": {},
    "launchProfileId": {},
    "maxBackupsToRetain": {},
    "ownedBy": {},
    "sessionId": {},
    "sessionPersistenceMode": {},
    "startedAt": {},
    "startedBy": {},
    "startedFromBackupId": {},
    "state": {},
    "statusCode": {},
    "statusMessage": {},
    "stopAt": {},
    "stoppedAt": {},
    "stoppedBy": {},
    "streamingImageId": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "terminateAt": {},
    "updatedAt": {},
    "updatedBy": {},
    "volumeConfiguration": {
      "iops": {},
      "size": {},
      "throughput": {}
    },
    "volumeRetentionMode": {}
  }
]
```

<h2 id="tocS_StudioComponentStateList">StudioComponentStateList</h2>
<!-- backwards compatibility -->
<a id="schemastudiocomponentstatelist"></a>
<a id="schema_StudioComponentStateList"></a>
<a id="tocSstudiocomponentstatelist"></a>
<a id="tocsstudiocomponentstatelist"></a>

```json
[
  "CREATE_IN_PROGRESS"
]
```

<h2 id="tocS_StudioComponentTypeList">StudioComponentTypeList</h2>
<!-- backwards compatibility -->
<a id="schemastudiocomponenttypelist"></a>
<a id="schema_StudioComponentTypeList"></a>
<a id="tocSstudiocomponenttypelist"></a>
<a id="tocsstudiocomponenttypelist"></a>

```json
[
  "ACTIVE_DIRECTORY"
]
```

<h2 id="tocS_ListStudioComponentsRequest">ListStudioComponentsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaliststudiocomponentsrequest"></a>
<a id="schema_ListStudioComponentsRequest"></a>
<a id="tocSliststudiocomponentsrequest"></a>
<a id="tocsliststudiocomponentsrequest"></a>

```json
{}
```

<h2 id="tocS_StudioComponentList">StudioComponentList</h2>
<!-- backwards compatibility -->
<a id="schemastudiocomponentlist"></a>
<a id="schema_StudioComponentList"></a>
<a id="tocSstudiocomponentlist"></a>
<a id="tocsstudiocomponentlist"></a>

```json
[
  {
    "arn": {},
    "configuration": {
      "activeDirectoryConfiguration": {
        "computerAttributes": {},
        "directoryId": {},
        "organizationalUnitDistinguishedName": {}
      },
      "computeFarmConfiguration": {
        "activeDirectoryUser": {},
        "endpoint": {}
      },
      "licenseServiceConfiguration": {
        "endpoint": {}
      },
      "sharedFileSystemConfiguration": {
        "endpoint": {},
        "fileSystemId": {},
        "linuxMountPoint": {},
        "shareName": {},
        "windowsMountDrive": {}
      }
    },
    "createdAt": {},
    "createdBy": {},
    "description": {},
    "ec2SecurityGroupIds": {},
    "initializationScripts": {},
    "name": {},
    "runtimeRoleArn": {},
    "scriptParameters": {},
    "secureInitializationRoleArn": {},
    "state": {},
    "statusCode": {},
    "statusMessage": {},
    "studioComponentId": {},
    "subtype": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "type": {},
    "updatedAt": {},
    "updatedBy": {}
  }
]
```

<h2 id="tocS_ListStudioMembersRequest">ListStudioMembersRequest</h2>
<!-- backwards compatibility -->
<a id="schemaliststudiomembersrequest"></a>
<a id="schema_ListStudioMembersRequest"></a>
<a id="tocSliststudiomembersrequest"></a>
<a id="tocsliststudiomembersrequest"></a>

```json
{}
```

<h2 id="tocS_StudioMembershipList">StudioMembershipList</h2>
<!-- backwards compatibility -->
<a id="schemastudiomembershiplist"></a>
<a id="schema_StudioMembershipList"></a>
<a id="tocSstudiomembershiplist"></a>
<a id="tocsstudiomembershiplist"></a>

```json
[
  {
    "identityStoreId": {},
    "persona": {},
    "principalId": {},
    "sid": {}
  }
]
```

<h2 id="tocS_ListStudiosRequest">ListStudiosRequest</h2>
<!-- backwards compatibility -->
<a id="schemaliststudiosrequest"></a>
<a id="schema_ListStudiosRequest"></a>
<a id="tocSliststudiosrequest"></a>
<a id="tocsliststudiosrequest"></a>

```json
{}
```

<h2 id="tocS_StudioList">StudioList</h2>
<!-- backwards compatibility -->
<a id="schemastudiolist"></a>
<a id="schema_StudioList"></a>
<a id="tocSstudiolist"></a>
<a id="tocsstudiolist"></a>

```json
[
  {
    "adminRoleArn": {},
    "arn": {},
    "createdAt": {},
    "displayName": {},
    "homeRegion": {},
    "ssoClientId": {},
    "state": {},
    "statusCode": {},
    "statusMessage": {},
    "studioEncryptionConfiguration": {
      "keyArn": {},
      "keyType": {}
    },
    "studioId": {},
    "studioName": {},
    "studioUrl": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "updatedAt": {},
    "userRoleArn": {}
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

<h2 id="tocS_NewLaunchProfileMemberList">NewLaunchProfileMemberList</h2>
<!-- backwards compatibility -->
<a id="schemanewlaunchprofilememberlist"></a>
<a id="schema_NewLaunchProfileMemberList"></a>
<a id="tocSnewlaunchprofilememberlist"></a>
<a id="tocsnewlaunchprofilememberlist"></a>

```json
[
  {
    "persona": {},
    "principalId": {}
  }
]
```

<h2 id="tocS_StudioPersona">StudioPersona</h2>
<!-- backwards compatibility -->
<a id="schemastudiopersona"></a>
<a id="schema_StudioPersona"></a>
<a id="tocSstudiopersona"></a>
<a id="tocsstudiopersona"></a>

```json
"ADMINISTRATOR"
```

<h2 id="tocS_NewStudioMemberList">NewStudioMemberList</h2>
<!-- backwards compatibility -->
<a id="schemanewstudiomemberlist"></a>
<a id="schema_NewStudioMemberList"></a>
<a id="tocSnewstudiomemberlist"></a>
<a id="tocsnewstudiomemberlist"></a>

```json
[
  {
    "persona": {},
    "principalId": {}
  }
]
```

<h2 id="tocS_PutLaunchProfileMembersRequest">PutLaunchProfileMembersRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputlaunchprofilemembersrequest"></a>
<a id="schema_PutLaunchProfileMembersRequest"></a>
<a id="tocSputlaunchprofilemembersrequest"></a>
<a id="tocsputlaunchprofilemembersrequest"></a>

```json
{
  "identityStoreId": {},
  "members": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identityStoreId|object|true|none|none|
|members|object|true|none|none|

<h2 id="tocS_PutStudioMembersRequest">PutStudioMembersRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputstudiomembersrequest"></a>
<a id="schema_PutStudioMembersRequest"></a>
<a id="tocSputstudiomembersrequest"></a>
<a id="tocsputstudiomembersrequest"></a>

```json
{
  "identityStoreId": {},
  "members": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identityStoreId|object|true|none|none|
|members|object|true|none|none|

<h2 id="tocS_Region">Region</h2>
<!-- backwards compatibility -->
<a id="schemaregion"></a>
<a id="schema_Region"></a>
<a id="tocSregion"></a>
<a id="tocsregion"></a>

```json
"string"
```

<h2 id="tocS_ScriptParameterKey">ScriptParameterKey</h2>
<!-- backwards compatibility -->
<a id="schemascriptparameterkey"></a>
<a id="schema_ScriptParameterKey"></a>
<a id="tocSscriptparameterkey"></a>
<a id="tocsscriptparameterkey"></a>

```json
"string"
```

A script parameter key.

<h2 id="tocS_ScriptParameterValue">ScriptParameterValue</h2>
<!-- backwards compatibility -->
<a id="schemascriptparametervalue"></a>
<a id="schema_ScriptParameterValue"></a>
<a id="tocSscriptparametervalue"></a>
<a id="tocsscriptparametervalue"></a>

```json
"string"
```

A script parameter value.

<h2 id="tocS_SessionBackupMode">SessionBackupMode</h2>
<!-- backwards compatibility -->
<a id="schemasessionbackupmode"></a>
<a id="schema_SessionBackupMode"></a>
<a id="tocSsessionbackupmode"></a>
<a id="tocssessionbackupmode"></a>

```json
"AUTOMATIC"
```

<h2 id="tocS_WindowsMountDrive">WindowsMountDrive</h2>
<!-- backwards compatibility -->
<a id="schemawindowsmountdrive"></a>
<a id="schema_WindowsMountDrive"></a>
<a id="tocSwindowsmountdrive"></a>
<a id="tocswindowsmountdrive"></a>

```json
"string"
```

<h2 id="tocS_StartStreamingSessionRequest">StartStreamingSessionRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartstreamingsessionrequest"></a>
<a id="schema_StartStreamingSessionRequest"></a>
<a id="tocSstartstreamingsessionrequest"></a>
<a id="tocsstartstreamingsessionrequest"></a>

```json
{
  "backupId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backupId|object|false|none|none|

<h2 id="tocS_StartStudioSSOConfigurationRepairRequest">StartStudioSSOConfigurationRepairRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartstudiossoconfigurationrepairrequest"></a>
<a id="schema_StartStudioSSOConfigurationRepairRequest"></a>
<a id="tocSstartstudiossoconfigurationrepairrequest"></a>
<a id="tocsstartstudiossoconfigurationrepairrequest"></a>

```json
{}
```

<h2 id="tocS_VolumeRetentionMode">VolumeRetentionMode</h2>
<!-- backwards compatibility -->
<a id="schemavolumeretentionmode"></a>
<a id="schema_VolumeRetentionMode"></a>
<a id="tocSvolumeretentionmode"></a>
<a id="tocsvolumeretentionmode"></a>

```json
"RETAIN"
```

<h2 id="tocS_StopStreamingSessionRequest">StopStreamingSessionRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopstreamingsessionrequest"></a>
<a id="schema_StopStreamingSessionRequest"></a>
<a id="tocSstopstreamingsessionrequest"></a>
<a id="tocsstopstreamingsessionrequest"></a>

```json
{
  "volumeRetentionMode": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|volumeRetentionMode|object|false|none|none|

<h2 id="tocS_StreamConfigurationMaxBackupsToRetain">StreamConfigurationMaxBackupsToRetain</h2>
<!-- backwards compatibility -->
<a id="schemastreamconfigurationmaxbackupstoretain"></a>
<a id="schema_StreamConfigurationMaxBackupsToRetain"></a>
<a id="tocSstreamconfigurationmaxbackupstoretain"></a>
<a id="tocsstreamconfigurationmaxbackupstoretain"></a>

```json
0
```

<h2 id="tocS_StreamingSessionStorageModeList">StreamingSessionStorageModeList</h2>
<!-- backwards compatibility -->
<a id="schemastreamingsessionstoragemodelist"></a>
<a id="schema_StreamingSessionStorageModeList"></a>
<a id="tocSstreamingsessionstoragemodelist"></a>
<a id="tocsstreamingsessionstoragemodelist"></a>

```json
[
  "UPLOAD"
]
```

<h2 id="tocS_StreamingSessionStorageRoot">StreamingSessionStorageRoot</h2>
<!-- backwards compatibility -->
<a id="schemastreamingsessionstorageroot"></a>
<a id="schema_StreamingSessionStorageRoot"></a>
<a id="tocSstreamingsessionstorageroot"></a>
<a id="tocsstreamingsessionstorageroot"></a>

```json
{
  "linux": {},
  "windows": {}
}
```

The upload storage root location (folder) on streaming workstations where files are uploaded.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|linux|object|false|none|none|
|windows|object|false|none|none|

<h2 id="tocS_StreamingImageEncryptionConfiguration">StreamingImageEncryptionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemastreamingimageencryptionconfiguration"></a>
<a id="schema_StreamingImageEncryptionConfiguration"></a>
<a id="tocSstreamingimageencryptionconfiguration"></a>
<a id="tocsstreamingimageencryptionconfiguration"></a>

```json
{
  "keyArn": {},
  "keyType": {}
}
```

Specifies how a streaming image is encrypted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keyArn|object|false|none|none|
|keyType|object|true|none|none|

<h2 id="tocS_StreamingImageOwner">StreamingImageOwner</h2>
<!-- backwards compatibility -->
<a id="schemastreamingimageowner"></a>
<a id="schema_StreamingImageOwner"></a>
<a id="tocSstreamingimageowner"></a>
<a id="tocsstreamingimageowner"></a>

```json
"string"
```

<p>StreamingImageOwner is the owner of a particular streaming image.</p> <p>This string is either the studioId that contains the streaming image, or the word <code>AMAZON</code> for images provided by Nimble Studio.</p>

<h2 id="tocS_StreamingImagePlatform">StreamingImagePlatform</h2>
<!-- backwards compatibility -->
<a id="schemastreamingimageplatform"></a>
<a id="schema_StreamingImagePlatform"></a>
<a id="tocSstreamingimageplatform"></a>
<a id="tocsstreamingimageplatform"></a>

```json
"string"
```

The platform of this streaming image, either Windows or Linux.

<h2 id="tocS_StreamingImageState">StreamingImageState</h2>
<!-- backwards compatibility -->
<a id="schemastreamingimagestate"></a>
<a id="schema_StreamingImageState"></a>
<a id="tocSstreamingimagestate"></a>
<a id="tocsstreamingimagestate"></a>

```json
"CREATE_IN_PROGRESS"
```

<h2 id="tocS_StreamingImageStatusCode">StreamingImageStatusCode</h2>
<!-- backwards compatibility -->
<a id="schemastreamingimagestatuscode"></a>
<a id="schema_StreamingImageStatusCode"></a>
<a id="tocSstreamingimagestatuscode"></a>
<a id="tocsstreamingimagestatuscode"></a>

```json
"STREAMING_IMAGE_CREATE_IN_PROGRESS"
```

The status code.

<h2 id="tocS_StreamingImageEncryptionConfigurationKeyArn">StreamingImageEncryptionConfigurationKeyArn</h2>
<!-- backwards compatibility -->
<a id="schemastreamingimageencryptionconfigurationkeyarn"></a>
<a id="schema_StreamingImageEncryptionConfigurationKeyArn"></a>
<a id="tocSstreamingimageencryptionconfigurationkeyarn"></a>
<a id="tocsstreamingimageencryptionconfigurationkeyarn"></a>

```json
"string"
```

<h2 id="tocS_StreamingImageEncryptionConfigurationKeyType">StreamingImageEncryptionConfigurationKeyType</h2>
<!-- backwards compatibility -->
<a id="schemastreamingimageencryptionconfigurationkeytype"></a>
<a id="schema_StreamingImageEncryptionConfigurationKeyType"></a>
<a id="tocSstreamingimageencryptionconfigurationkeytype"></a>
<a id="tocsstreamingimageencryptionconfigurationkeytype"></a>

```json
"CUSTOMER_MANAGED_KEY"
```

<h2 id="tocS_StreamingSessionId">StreamingSessionId</h2>
<!-- backwards compatibility -->
<a id="schemastreamingsessionid"></a>
<a id="schema_StreamingSessionId"></a>
<a id="tocSstreamingsessionid"></a>
<a id="tocsstreamingsessionid"></a>

```json
"string"
```

<h2 id="tocS_StreamingSessionState">StreamingSessionState</h2>
<!-- backwards compatibility -->
<a id="schemastreamingsessionstate"></a>
<a id="schema_StreamingSessionState"></a>
<a id="tocSstreamingsessionstate"></a>
<a id="tocsstreamingsessionstate"></a>

```json
"CREATE_IN_PROGRESS"
```

The streaming session state.

<h2 id="tocS_StreamingSessionStatusCode">StreamingSessionStatusCode</h2>
<!-- backwards compatibility -->
<a id="schemastreamingsessionstatuscode"></a>
<a id="schema_StreamingSessionStatusCode"></a>
<a id="tocSstreamingsessionstatuscode"></a>
<a id="tocsstreamingsessionstatuscode"></a>

```json
"STREAMING_SESSION_READY"
```

<h2 id="tocS_StreamingSessionStorageMode">StreamingSessionStorageMode</h2>
<!-- backwards compatibility -->
<a id="schemastreamingsessionstoragemode"></a>
<a id="schema_StreamingSessionStorageMode"></a>
<a id="tocSstreamingsessionstoragemode"></a>
<a id="tocsstreamingsessionstoragemode"></a>

```json
"UPLOAD"
```

<h2 id="tocS_StreamingSessionStorageRootPathLinux">StreamingSessionStorageRootPathLinux</h2>
<!-- backwards compatibility -->
<a id="schemastreamingsessionstoragerootpathlinux"></a>
<a id="schema_StreamingSessionStorageRootPathLinux"></a>
<a id="tocSstreamingsessionstoragerootpathlinux"></a>
<a id="tocsstreamingsessionstoragerootpathlinux"></a>

```json
"password"
```

<h2 id="tocS_StreamingSessionStorageRootPathWindows">StreamingSessionStorageRootPathWindows</h2>
<!-- backwards compatibility -->
<a id="schemastreamingsessionstoragerootpathwindows"></a>
<a id="schema_StreamingSessionStorageRootPathWindows"></a>
<a id="tocSstreamingsessionstoragerootpathwindows"></a>
<a id="tocsstreamingsessionstoragerootpathwindows"></a>

```json
"password"
```

<h2 id="tocS_StreamingSessionStreamState">StreamingSessionStreamState</h2>
<!-- backwards compatibility -->
<a id="schemastreamingsessionstreamstate"></a>
<a id="schema_StreamingSessionStreamState"></a>
<a id="tocSstreamingsessionstreamstate"></a>
<a id="tocsstreamingsessionstreamstate"></a>

```json
"READY"
```

<h2 id="tocS_StreamingSessionStreamStatusCode">StreamingSessionStreamStatusCode</h2>
<!-- backwards compatibility -->
<a id="schemastreamingsessionstreamstatuscode"></a>
<a id="schema_StreamingSessionStreamStatusCode"></a>
<a id="tocSstreamingsessionstreamstatuscode"></a>
<a id="tocsstreamingsessionstreamstatuscode"></a>

```json
"STREAM_CREATE_IN_PROGRESS"
```

<h2 id="tocS_StudioState">StudioState</h2>
<!-- backwards compatibility -->
<a id="schemastudiostate"></a>
<a id="schema_StudioState"></a>
<a id="tocSstudiostate"></a>
<a id="tocsstudiostate"></a>

```json
"CREATE_IN_PROGRESS"
```

<h2 id="tocS_StudioStatusCode">StudioStatusCode</h2>
<!-- backwards compatibility -->
<a id="schemastudiostatuscode"></a>
<a id="schema_StudioStatusCode"></a>
<a id="tocSstudiostatuscode"></a>
<a id="tocsstudiostatuscode"></a>

```json
"STUDIO_CREATED"
```

The status code.

<h2 id="tocS_StudioComponentStatusCode">StudioComponentStatusCode</h2>
<!-- backwards compatibility -->
<a id="schemastudiocomponentstatuscode"></a>
<a id="schema_StudioComponentStatusCode"></a>
<a id="tocSstudiocomponentstatuscode"></a>
<a id="tocsstudiocomponentstatuscode"></a>

```json
"ACTIVE_DIRECTORY_ALREADY_EXISTS"
```

<p>The current status of the studio component resource.</p> <p>When the resource is in the <code>READY</code> state, the status code signals what the last mutation made to the resource was.</p> <p>When the resource is in a <code>CREATE_FAILED</code>, <code>UPDATE_FAILED</code>, or <code>DELETE_FAILED</code> state, the status code signals what went wrong and why the mutation failed.</p>

<h2 id="tocS_StudioComponentInitializationScriptRunContext">StudioComponentInitializationScriptRunContext</h2>
<!-- backwards compatibility -->
<a id="schemastudiocomponentinitializationscriptruncontext"></a>
<a id="schema_StudioComponentInitializationScriptRunContext"></a>
<a id="tocSstudiocomponentinitializationscriptruncontext"></a>
<a id="tocsstudiocomponentinitializationscriptruncontext"></a>

```json
"SYSTEM_INITIALIZATION"
```

<h2 id="tocS_StudioComponentSummary">StudioComponentSummary</h2>
<!-- backwards compatibility -->
<a id="schemastudiocomponentsummary"></a>
<a id="schema_StudioComponentSummary"></a>
<a id="tocSstudiocomponentsummary"></a>
<a id="tocsstudiocomponentsummary"></a>

```json
{
  "createdAt": {},
  "createdBy": {},
  "description": {},
  "name": {},
  "studioComponentId": {},
  "subtype": {},
  "type": {},
  "updatedAt": {},
  "updatedBy": {}
}
```

The studio component's summary.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|object|false|none|none|
|createdBy|object|false|none|none|
|description|object|false|none|none|
|name|object|false|none|none|
|studioComponentId|object|false|none|none|
|subtype|object|false|none|none|
|type|object|false|none|none|
|updatedAt|object|false|none|none|
|updatedBy|object|false|none|none|

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
|tags|object|false|none|none|

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{}
```

<h2 id="tocS_UpdateLaunchProfileMemberRequest">UpdateLaunchProfileMemberRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatelaunchprofilememberrequest"></a>
<a id="schema_UpdateLaunchProfileMemberRequest"></a>
<a id="tocSupdatelaunchprofilememberrequest"></a>
<a id="tocsupdatelaunchprofilememberrequest"></a>

```json
{
  "persona": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|persona|object|true|none|none|

<h2 id="tocS_UpdateLaunchProfileRequest">UpdateLaunchProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatelaunchprofilerequest"></a>
<a id="schema_UpdateLaunchProfileRequest"></a>
<a id="tocSupdatelaunchprofilerequest"></a>
<a id="tocsupdatelaunchprofilerequest"></a>

```json
{
  "description": {},
  "launchProfileProtocolVersions": {},
  "name": {},
  "streamConfiguration": {
    "automaticTerminationMode": {},
    "clipboardMode": {},
    "ec2InstanceTypes": {},
    "maxSessionLengthInMinutes": {},
    "maxStoppedSessionLengthInMinutes": {},
    "sessionBackup": {
      "maxBackupsToRetain": {},
      "mode": {}
    },
    "sessionPersistenceMode": {},
    "sessionStorage": {
      "mode": {},
      "root": {
        "linux": {},
        "windows": {}
      }
    },
    "streamingImageIds": {},
    "volumeConfiguration": {
      "iops": {},
      "size": {},
      "throughput": {}
    }
  },
  "studioComponentIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|object|false|none|none|
|launchProfileProtocolVersions|object|false|none|none|
|name|object|false|none|none|
|streamConfiguration|object|false|none|none|
|studioComponentIds|object|false|none|none|

<h2 id="tocS_UpdateStreamingImageRequest">UpdateStreamingImageRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatestreamingimagerequest"></a>
<a id="schema_UpdateStreamingImageRequest"></a>
<a id="tocSupdatestreamingimagerequest"></a>
<a id="tocsupdatestreamingimagerequest"></a>

```json
{
  "description": {},
  "name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|object|false|none|none|
|name|object|false|none|none|

<h2 id="tocS_UpdateStudioComponentRequest">UpdateStudioComponentRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatestudiocomponentrequest"></a>
<a id="schema_UpdateStudioComponentRequest"></a>
<a id="tocSupdatestudiocomponentrequest"></a>
<a id="tocsupdatestudiocomponentrequest"></a>

```json
{
  "configuration": {
    "activeDirectoryConfiguration": {
      "computerAttributes": {},
      "directoryId": {},
      "organizationalUnitDistinguishedName": {}
    },
    "computeFarmConfiguration": {
      "activeDirectoryUser": {},
      "endpoint": {}
    },
    "licenseServiceConfiguration": {
      "endpoint": {}
    },
    "sharedFileSystemConfiguration": {
      "endpoint": {},
      "fileSystemId": {},
      "linuxMountPoint": {},
      "shareName": {},
      "windowsMountDrive": {}
    }
  },
  "description": {},
  "ec2SecurityGroupIds": {},
  "initializationScripts": {},
  "name": {},
  "runtimeRoleArn": {},
  "scriptParameters": {},
  "secureInitializationRoleArn": {},
  "subtype": {},
  "type": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configuration|object|false|none|none|
|description|object|false|none|none|
|ec2SecurityGroupIds|object|false|none|none|
|initializationScripts|object|false|none|none|
|name|object|false|none|none|
|runtimeRoleArn|object|false|none|none|
|scriptParameters|object|false|none|none|
|secureInitializationRoleArn|object|false|none|none|
|subtype|object|false|none|none|
|type|object|false|none|none|

<h2 id="tocS_UpdateStudioRequest">UpdateStudioRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatestudiorequest"></a>
<a id="schema_UpdateStudioRequest"></a>
<a id="tocSupdatestudiorequest"></a>
<a id="tocsupdatestudiorequest"></a>

```json
{
  "adminRoleArn": {},
  "displayName": {},
  "userRoleArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adminRoleArn|object|false|none|none|
|displayName|object|false|none|none|
|userRoleArn|object|false|none|none|

<h2 id="tocS_ValidationResult">ValidationResult</h2>
<!-- backwards compatibility -->
<a id="schemavalidationresult"></a>
<a id="schema_ValidationResult"></a>
<a id="tocSvalidationresult"></a>
<a id="tocsvalidationresult"></a>

```json
{
  "state": {},
  "statusCode": {},
  "statusMessage": {},
  "type": {}
}
```

The launch profile validation result.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|state|object|true|none|none|
|statusCode|object|true|none|none|
|statusMessage|object|true|none|none|
|type|object|true|none|none|

<h2 id="tocS_VolumeIops">VolumeIops</h2>
<!-- backwards compatibility -->
<a id="schemavolumeiops"></a>
<a id="schema_VolumeIops"></a>
<a id="tocSvolumeiops"></a>
<a id="tocsvolumeiops"></a>

```json
3000
```

<h2 id="tocS_VolumeSizeInGiB">VolumeSizeInGiB</h2>
<!-- backwards compatibility -->
<a id="schemavolumesizeingib"></a>
<a id="schema_VolumeSizeInGiB"></a>
<a id="tocSvolumesizeingib"></a>
<a id="tocsvolumesizeingib"></a>

```json
100
```

<h2 id="tocS_VolumeThroughputInMiBs">VolumeThroughputInMiBs</h2>
<!-- backwards compatibility -->
<a id="schemavolumethroughputinmibs"></a>
<a id="schema_VolumeThroughputInMiBs"></a>
<a id="tocSvolumethroughputinmibs"></a>
<a id="tocsvolumethroughputinmibs"></a>

```json
125
```
