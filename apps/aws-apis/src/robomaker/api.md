<h1 id="aws-robomaker">AWS RoboMaker v2018-06-29</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This section provides documentation for the AWS RoboMaker API operations.

Base URLs:

* <a href="http://robomaker.us-east-1.amazonaws.com">http://robomaker.us-east-1.amazonaws.com</a> - The RoboMaker multi-region endpoint

* <a href="https://robomaker.us-east-1.amazonaws.com">https://robomaker.us-east-1.amazonaws.com</a> - The RoboMaker multi-region endpoint

* <a href="http://robomaker.cn-north-1.amazonaws.com.cn">http://robomaker.cn-north-1.amazonaws.com.cn</a> - The RoboMaker endpoint for China (Beijing) and China (Ningxia)

* <a href="https://robomaker.cn-north-1.amazonaws.com.cn">https://robomaker.cn-north-1.amazonaws.com.cn</a> - The RoboMaker endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/robomaker/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-robomaker-default">Default</h1>

## BatchDeleteWorlds

<a id="opIdBatchDeleteWorlds"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/batchDeleteWorlds \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "worlds": [
      "string"
    ]
  }'
```

`POST /batchDeleteWorlds`

Deletes one or more worlds in a batch operation.

> Body parameter

```json
{
  "worlds": [
    "string"
  ]
}
```

<h3 id="batchdeleteworlds-parameters">Parameters</h3>

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
|» worlds|body|[[Arn](#schemaarn)]|true|A list of Amazon Resource Names (arns) that correspond to worlds to delete.|

> Example responses

> 200 Response

```json
{
  "unprocessedWorlds": {}
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

<h3 id="batchdeleteworlds-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchDeleteWorldsResponse](#schemabatchdeleteworldsresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchDescribeSimulationJob

<a id="opIdBatchDescribeSimulationJob"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/batchDescribeSimulationJob \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "jobs": [
      "string"
    ]
  }'
```

`POST /batchDescribeSimulationJob`

Describes one or more simulation jobs.

> Body parameter

```json
{
  "jobs": [
    "string"
  ]
}
```

<h3 id="batchdescribesimulationjob-parameters">Parameters</h3>

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
|» jobs|body|[[Arn](#schemaarn)]|true|A list of Amazon Resource Names (ARNs) of simulation jobs to describe.|

> Example responses

> 200 Response

```json
{
  "jobs": {},
  "unprocessedJobs": {}
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

<h3 id="batchdescribesimulationjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchDescribeSimulationJobResponse](#schemabatchdescribesimulationjobresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CancelDeploymentJob

<a id="opIdCancelDeploymentJob"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/cancelDeploymentJob \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "job": "string"
  }'
```

`POST /cancelDeploymentJob`

<aside class="warning">
This operation is deprecated
</aside>

<p>Cancels the specified deployment job.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>

> Body parameter

```json
{
  "job": "string"
}
```

<h3 id="canceldeploymentjob-parameters">Parameters</h3>

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
|» job|body|string|true|The deployment job ARN to cancel.|

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

<h3 id="canceldeploymentjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelDeploymentJobResponse](#schemacanceldeploymentjobresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CancelSimulationJob

<a id="opIdCancelSimulationJob"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/cancelSimulationJob \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "job": "string"
  }'
```

`POST /cancelSimulationJob`

Cancels the specified simulation job.

> Body parameter

```json
{
  "job": "string"
}
```

<h3 id="cancelsimulationjob-parameters">Parameters</h3>

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
|» job|body|string|true|The simulation job ARN to cancel.|

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

<h3 id="cancelsimulationjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelSimulationJobResponse](#schemacancelsimulationjobresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CancelSimulationJobBatch

<a id="opIdCancelSimulationJobBatch"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/cancelSimulationJobBatch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "batch": "string"
  }'
```

`POST /cancelSimulationJobBatch`

Cancels a simulation job batch. When you cancel a simulation job batch, you are also cancelling all of the active simulation jobs created as part of the batch. 

> Body parameter

```json
{
  "batch": "string"
}
```

<h3 id="cancelsimulationjobbatch-parameters">Parameters</h3>

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
|» batch|body|string|true|The id of the batch to cancel.|

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

<h3 id="cancelsimulationjobbatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelSimulationJobBatchResponse](#schemacancelsimulationjobbatchresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CancelWorldExportJob

<a id="opIdCancelWorldExportJob"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/cancelWorldExportJob \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "job": "string"
  }'
```

`POST /cancelWorldExportJob`

Cancels the specified export job.

> Body parameter

```json
{
  "job": "string"
}
```

<h3 id="cancelworldexportjob-parameters">Parameters</h3>

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
|» job|body|string|true|The Amazon Resource Name (arn) of the world export job to cancel.|

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

<h3 id="cancelworldexportjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelWorldExportJobResponse](#schemacancelworldexportjobresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CancelWorldGenerationJob

<a id="opIdCancelWorldGenerationJob"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/cancelWorldGenerationJob \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "job": "string"
  }'
```

`POST /cancelWorldGenerationJob`

Cancels the specified world generator job.

> Body parameter

```json
{
  "job": "string"
}
```

<h3 id="cancelworldgenerationjob-parameters">Parameters</h3>

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
|» job|body|string|true|The Amazon Resource Name (arn) of the world generator job to cancel.|

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

<h3 id="cancelworldgenerationjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelWorldGenerationJobResponse](#schemacancelworldgenerationjobresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDeploymentJob

<a id="opIdCreateDeploymentJob"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/createDeploymentJob \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "deploymentConfig": {
      "concurrentDeploymentPercentage": {},
      "failureThresholdPercentage": {},
      "robotDeploymentTimeoutInSeconds": {},
      "downloadConditionFile": {
        "bucket": {},
        "key": {},
        "etag": {}
      }
    },
    "clientRequestToken": "string",
    "fleet": "string",
    "deploymentApplicationConfigs": [
      {
        "application": {},
        "applicationVersion": {},
        "launchConfig": {
          "packageName": {},
          "preLaunchFile": {},
          "launchFile": {},
          "postLaunchFile": {},
          "environmentVariables": {
            "property1": "string",
            "property2": "string"
          }
        }
      }
    ],
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /createDeploymentJob`

<aside class="warning">
This operation is deprecated
</aside>

<p>Deploys a specific version of a robot application to robots in a fleet.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important> <p>The robot application must have a numbered <code>applicationVersion</code> for consistency reasons. To create a new version, use <code>CreateRobotApplicationVersion</code> or see <a href="https://docs.aws.amazon.com/robomaker/latest/dg/create-robot-application-version.html">Creating a Robot Application Version</a>. </p> <note> <p>After 90 days, deployment jobs expire and will be deleted. They will no longer be accessible. </p> </note>

> Body parameter

```json
{
  "deploymentConfig": {
    "concurrentDeploymentPercentage": {},
    "failureThresholdPercentage": {},
    "robotDeploymentTimeoutInSeconds": {},
    "downloadConditionFile": {
      "bucket": {},
      "key": {},
      "etag": {}
    }
  },
  "clientRequestToken": "string",
  "fleet": "string",
  "deploymentApplicationConfigs": [
    {
      "application": {},
      "applicationVersion": {},
      "launchConfig": {
        "packageName": {},
        "preLaunchFile": {},
        "launchFile": {},
        "postLaunchFile": {},
        "environmentVariables": {
          "property1": "string",
          "property2": "string"
        }
      }
    }
  ],
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createdeploymentjob-parameters">Parameters</h3>

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
|» deploymentConfig|body|object|false|Information about a deployment configuration.|
|» » concurrentDeploymentPercentage|body|object|false|none|
|» » failureThresholdPercentage|body|object|false|none|
|» » robotDeploymentTimeoutInSeconds|body|object|false|none|
|» » downloadConditionFile|body|object|false|none|
|» » » bucket|body|object|true|none|
|» » » key|body|object|true|none|
|» » » etag|body|object|false|none|
|» clientRequestToken|body|string|true|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.|
|» fleet|body|string|true|The Amazon Resource Name (ARN) of the fleet to deploy.|
|» deploymentApplicationConfigs|body|[[DeploymentApplicationConfig](#schemadeploymentapplicationconfig)]|true|The deployment application configuration.|
|» tags|body|object|false|A map that contains tag keys and tag values that are attached to the deployment job.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 200 Response

```json
{
  "arn": {},
  "fleet": {},
  "status": {},
  "deploymentApplicationConfigs": {},
  "failureReason": {},
  "failureCode": {},
  "createdAt": {},
  "deploymentConfig": {
    "concurrentDeploymentPercentage": {},
    "failureThresholdPercentage": {},
    "robotDeploymentTimeoutInSeconds": {},
    "downloadConditionFile": {
      "bucket": {},
      "key": {},
      "etag": {}
    }
  },
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

<h3 id="createdeploymentjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDeploymentJobResponse](#schemacreatedeploymentjobresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|ConcurrentDeploymentException|[ConcurrentDeploymentException](#schemaconcurrentdeploymentexception)|
|486|486|IdempotentParameterMismatchException|[IdempotentParameterMismatchException](#schemaidempotentparametermismatchexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateFleet

<a id="opIdCreateFleet"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/createFleet \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /createFleet`

<aside class="warning">
This operation is deprecated
</aside>

<p>Creates a fleet, a logical group of robots running the same robot application.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important>

> Body parameter

```json
{
  "name": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createfleet-parameters">Parameters</h3>

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
|» name|body|string|true|The name of the fleet.|
|» tags|body|object|false|A map that contains tag keys and tag values that are attached to the fleet.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 200 Response

```json
{
  "arn": {},
  "name": {},
  "createdAt": {},
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

<h3 id="createfleet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateFleetResponse](#schemacreatefleetresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateRobot

<a id="opIdCreateRobot"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/createRobot \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "architecture": "X86_64",
    "greengrassGroupId": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /createRobot`

<aside class="warning">
This operation is deprecated
</aside>

<p>Creates a robot.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important>

> Body parameter

```json
{
  "name": "string",
  "architecture": "X86_64",
  "greengrassGroupId": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createrobot-parameters">Parameters</h3>

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
|» name|body|string|true|The name for the robot.|
|» architecture|body|string|true|The target architecture of the robot.|
|» greengrassGroupId|body|string|true|The Greengrass group id.|
|» tags|body|object|false|A map that contains tag keys and tag values that are attached to the robot.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» architecture|X86_64|
|» architecture|ARM64|
|» architecture|ARMHF|

> Example responses

> 200 Response

```json
{
  "arn": {},
  "name": {},
  "createdAt": {},
  "greengrassGroupId": {},
  "architecture": {},
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

<h3 id="createrobot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateRobotResponse](#schemacreaterobotresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateRobotApplication

<a id="opIdCreateRobotApplication"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/createRobotApplication \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "sources": [
      {
        "s3Bucket": {},
        "s3Key": {},
        "architecture": {}
      }
    ],
    "robotSoftwareSuite": {
      "name": {},
      "version": {}
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "environment": {
      "uri": {}
    }
  }'
```

`POST /createRobotApplication`

Creates a robot application. 

> Body parameter

```json
{
  "name": "string",
  "sources": [
    {
      "s3Bucket": {},
      "s3Key": {},
      "architecture": {}
    }
  ],
  "robotSoftwareSuite": {
    "name": {},
    "version": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "environment": {
    "uri": {}
  }
}
```

<h3 id="createrobotapplication-parameters">Parameters</h3>

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
|» name|body|string|true|The name of the robot application.|
|» sources|body|[[SourceConfig](#schemasourceconfig)]|false|The sources of the robot application.|
|» robotSoftwareSuite|body|object|true|Information about a robot software suite (ROS distribution).|
|» » name|body|object|false|none|
|» » version|body|object|false|none|
|» tags|body|object|false|A map that contains tag keys and tag values that are attached to the robot application.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» environment|body|object|false|The object that contains the Docker image URI for either your robot or simulation applications.|
|» » uri|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "arn": {},
  "name": {},
  "version": {},
  "sources": {},
  "robotSoftwareSuite": {
    "name": {},
    "version": {}
  },
  "lastUpdatedAt": {},
  "revisionId": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "environment": {
    "uri": {}
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

<h3 id="createrobotapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateRobotApplicationResponse](#schemacreaterobotapplicationresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|485|485|IdempotentParameterMismatchException|[IdempotentParameterMismatchException](#schemaidempotentparametermismatchexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateRobotApplicationVersion

<a id="opIdCreateRobotApplicationVersion"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/createRobotApplicationVersion \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "application": "string",
    "currentRevisionId": "string",
    "s3Etags": [
      "string"
    ],
    "imageDigest": "string"
  }'
```

`POST /createRobotApplicationVersion`

Creates a version of a robot application.

> Body parameter

```json
{
  "application": "string",
  "currentRevisionId": "string",
  "s3Etags": [
    "string"
  ],
  "imageDigest": "string"
}
```

<h3 id="createrobotapplicationversion-parameters">Parameters</h3>

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
|» application|body|string|true|The application information for the robot application.|
|» currentRevisionId|body|string|false|The current revision id for the robot application. If you provide a value and it matches the latest revision ID, a new version will be created.|
|» s3Etags|body|[[S3Etag](#schemas3etag)]|false|The Amazon S3 identifier for the zip file bundle that you use for your robot application.|
|» imageDigest|body|string|false|A SHA256 identifier for the Docker image that you use for your robot application.|

> Example responses

> 200 Response

```json
{
  "arn": {},
  "name": {},
  "version": {},
  "sources": {},
  "robotSoftwareSuite": {
    "name": {},
    "version": {}
  },
  "lastUpdatedAt": {},
  "revisionId": {},
  "environment": {
    "uri": {}
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

<h3 id="createrobotapplicationversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateRobotApplicationVersionResponse](#schemacreaterobotapplicationversionresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|IdempotentParameterMismatchException|[IdempotentParameterMismatchException](#schemaidempotentparametermismatchexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateSimulationApplication

<a id="opIdCreateSimulationApplication"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/createSimulationApplication \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "sources": [
      {
        "s3Bucket": {},
        "s3Key": {},
        "architecture": {}
      }
    ],
    "simulationSoftwareSuite": {
      "name": {},
      "version": {}
    },
    "robotSoftwareSuite": {
      "name": {},
      "version": {}
    },
    "renderingEngine": {
      "name": {},
      "version": {}
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "environment": {
      "uri": {}
    }
  }'
```

`POST /createSimulationApplication`

Creates a simulation application.

> Body parameter

```json
{
  "name": "string",
  "sources": [
    {
      "s3Bucket": {},
      "s3Key": {},
      "architecture": {}
    }
  ],
  "simulationSoftwareSuite": {
    "name": {},
    "version": {}
  },
  "robotSoftwareSuite": {
    "name": {},
    "version": {}
  },
  "renderingEngine": {
    "name": {},
    "version": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "environment": {
    "uri": {}
  }
}
```

<h3 id="createsimulationapplication-parameters">Parameters</h3>

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
|» name|body|string|true|The name of the simulation application.|
|» sources|body|[[SourceConfig](#schemasourceconfig)]|false|The sources of the simulation application.|
|» simulationSoftwareSuite|body|object|true|Information about a simulation software suite.|
|» » name|body|object|false|none|
|» » version|body|object|false|none|
|» robotSoftwareSuite|body|object|true|Information about a robot software suite (ROS distribution).|
|» » name|body|object|false|none|
|» » version|body|object|false|none|
|» renderingEngine|body|object|false|Information about a rendering engine.|
|» » name|body|object|false|none|
|» » version|body|object|false|none|
|» tags|body|object|false|A map that contains tag keys and tag values that are attached to the simulation application.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» environment|body|object|false|The object that contains the Docker image URI for either your robot or simulation applications.|
|» » uri|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "arn": {},
  "name": {},
  "version": {},
  "sources": {},
  "simulationSoftwareSuite": {
    "name": {},
    "version": {}
  },
  "robotSoftwareSuite": {
    "name": {},
    "version": {}
  },
  "renderingEngine": {
    "name": {},
    "version": {}
  },
  "lastUpdatedAt": {},
  "revisionId": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "environment": {
    "uri": {}
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

<h3 id="createsimulationapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateSimulationApplicationResponse](#schemacreatesimulationapplicationresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|485|485|IdempotentParameterMismatchException|[IdempotentParameterMismatchException](#schemaidempotentparametermismatchexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateSimulationApplicationVersion

<a id="opIdCreateSimulationApplicationVersion"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/createSimulationApplicationVersion \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "application": "string",
    "currentRevisionId": "string",
    "s3Etags": [
      "string"
    ],
    "imageDigest": "string"
  }'
```

`POST /createSimulationApplicationVersion`

Creates a simulation application with a specific revision id.

> Body parameter

```json
{
  "application": "string",
  "currentRevisionId": "string",
  "s3Etags": [
    "string"
  ],
  "imageDigest": "string"
}
```

<h3 id="createsimulationapplicationversion-parameters">Parameters</h3>

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
|» application|body|string|true|The application information for the simulation application.|
|» currentRevisionId|body|string|false|The current revision id for the simulation application. If you provide a value and it matches the latest revision ID, a new version will be created.|
|» s3Etags|body|[[S3Etag](#schemas3etag)]|false|The Amazon S3 eTag identifier for the zip file bundle that you use to create the simulation application.|
|» imageDigest|body|string|false|The SHA256 digest used to identify the Docker image URI used to created the simulation application.|

> Example responses

> 200 Response

```json
{
  "arn": {},
  "name": {},
  "version": {},
  "sources": {},
  "simulationSoftwareSuite": {
    "name": {},
    "version": {}
  },
  "robotSoftwareSuite": {
    "name": {},
    "version": {}
  },
  "renderingEngine": {
    "name": {},
    "version": {}
  },
  "lastUpdatedAt": {},
  "revisionId": {},
  "environment": {
    "uri": {}
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

<h3 id="createsimulationapplicationversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateSimulationApplicationVersionResponse](#schemacreatesimulationapplicationversionresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|IdempotentParameterMismatchException|[IdempotentParameterMismatchException](#schemaidempotentparametermismatchexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateSimulationJob

<a id="opIdCreateSimulationJob"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/createSimulationJob \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientRequestToken": "string",
    "outputLocation": {
      "s3Bucket": {},
      "s3Prefix": {}
    },
    "loggingConfig": {
      "recordAllRosTopics": {}
    },
    "maxJobDurationInSeconds": 0,
    "iamRole": "string",
    "failureBehavior": "Fail",
    "robotApplications": [
      {
        "application": {},
        "applicationVersion": {},
        "launchConfig": {
          "packageName": {},
          "launchFile": {},
          "environmentVariables": {
            "property1": "string",
            "property2": "string"
          },
          "portForwardingConfig": {
            "portMappings": {}
          },
          "streamUI": {},
          "command": {}
        },
        "uploadConfigurations": {},
        "useDefaultUploadConfigurations": {},
        "tools": {},
        "useDefaultTools": {}
      }
    ],
    "simulationApplications": [
      {
        "application": {},
        "applicationVersion": {},
        "launchConfig": {
          "packageName": {},
          "launchFile": {},
          "environmentVariables": {
            "property1": "string",
            "property2": "string"
          },
          "portForwardingConfig": {
            "portMappings": {}
          },
          "streamUI": {},
          "command": {}
        },
        "uploadConfigurations": {},
        "worldConfigs": {},
        "useDefaultUploadConfigurations": {},
        "tools": {},
        "useDefaultTools": {}
      }
    ],
    "dataSources": [
      {
        "name": {},
        "s3Bucket": {},
        "s3Keys": {},
        "type": {},
        "destination": {}
      }
    ],
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "vpcConfig": {
      "subnets": {},
      "securityGroups": {},
      "assignPublicIp": {}
    },
    "compute": {
      "simulationUnitLimit": {},
      "computeType": {},
      "gpuUnitLimit": {}
    }
  }'
```

`POST /createSimulationJob`

<p>Creates a simulation job.</p> <note> <p>After 90 days, simulation jobs expire and will be deleted. They will no longer be accessible. </p> </note>

> Body parameter

```json
{
  "clientRequestToken": "string",
  "outputLocation": {
    "s3Bucket": {},
    "s3Prefix": {}
  },
  "loggingConfig": {
    "recordAllRosTopics": {}
  },
  "maxJobDurationInSeconds": 0,
  "iamRole": "string",
  "failureBehavior": "Fail",
  "robotApplications": [
    {
      "application": {},
      "applicationVersion": {},
      "launchConfig": {
        "packageName": {},
        "launchFile": {},
        "environmentVariables": {
          "property1": "string",
          "property2": "string"
        },
        "portForwardingConfig": {
          "portMappings": {}
        },
        "streamUI": {},
        "command": {}
      },
      "uploadConfigurations": {},
      "useDefaultUploadConfigurations": {},
      "tools": {},
      "useDefaultTools": {}
    }
  ],
  "simulationApplications": [
    {
      "application": {},
      "applicationVersion": {},
      "launchConfig": {
        "packageName": {},
        "launchFile": {},
        "environmentVariables": {
          "property1": "string",
          "property2": "string"
        },
        "portForwardingConfig": {
          "portMappings": {}
        },
        "streamUI": {},
        "command": {}
      },
      "uploadConfigurations": {},
      "worldConfigs": {},
      "useDefaultUploadConfigurations": {},
      "tools": {},
      "useDefaultTools": {}
    }
  ],
  "dataSources": [
    {
      "name": {},
      "s3Bucket": {},
      "s3Keys": {},
      "type": {},
      "destination": {}
    }
  ],
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "vpcConfig": {
    "subnets": {},
    "securityGroups": {},
    "assignPublicIp": {}
  },
  "compute": {
    "simulationUnitLimit": {},
    "computeType": {},
    "gpuUnitLimit": {}
  }
}
```

<h3 id="createsimulationjob-parameters">Parameters</h3>

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
|» clientRequestToken|body|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.|
|» outputLocation|body|object|false|The output location.|
|» » s3Bucket|body|object|false|none|
|» » s3Prefix|body|object|false|none|
|» loggingConfig|body|object|false|The logging configuration.|
|» » recordAllRosTopics|body|object|false|none|
|» maxJobDurationInSeconds|body|integer|true|The maximum simulation job duration in seconds (up to 14 days or 1,209,600 seconds. When <code>maxJobDurationInSeconds</code> is reached, the simulation job will status will transition to <code>Completed</code>.|
|» iamRole|body|string|true|The IAM role name that allows the simulation instance to call the AWS APIs that are specified in its associated policies on your behalf. This is how credentials are passed in to your simulation job. |
|» failureBehavior|body|string|false|<p>The failure behavior the simulation job.</p> <dl> <dt>Continue</dt> <dd> <p>Leaves the instance running for its maximum timeout duration after a <code>4XX</code> error code.</p> </dd> <dt>Fail</dt> <dd> <p>Stop the simulation job and terminate the instance.</p> </dd> </dl>|
|» robotApplications|body|[[RobotApplicationConfig](#schemarobotapplicationconfig)]|false|The robot application to use in the simulation job.|
|» simulationApplications|body|[[SimulationApplicationConfig](#schemasimulationapplicationconfig)]|false|The simulation application to use in the simulation job.|
|» dataSources|body|[[DataSourceConfig](#schemadatasourceconfig)]|false|<p>Specify data sources to mount read-only files from S3 into your simulation. These files are available under <code>/opt/robomaker/datasources/data_source_name</code>. </p> <note> <p>There is a limit of 100 files and a combined size of 25GB for all <code>DataSourceConfig</code> objects. </p> </note>|
|» tags|body|object|false|A map that contains tag keys and tag values that are attached to the simulation job.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» vpcConfig|body|object|false|If your simulation job accesses resources in a VPC, you provide this parameter identifying the list of security group IDs and subnet IDs. These must belong to the same VPC. You must provide at least one security group and two subnet IDs.|
|» » subnets|body|object|false|none|
|» » securityGroups|body|object|false|none|
|» » assignPublicIp|body|object|false|none|
|» compute|body|object|false|Compute information for the simulation job.|
|» » simulationUnitLimit|body|object|false|none|
|» » computeType|body|object|false|none|
|» » gpuUnitLimit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» failureBehavior|Fail|
|» failureBehavior|Continue|

> Example responses

> 200 Response

```json
{
  "arn": {},
  "status": {},
  "lastStartedAt": {},
  "lastUpdatedAt": {},
  "failureBehavior": {},
  "failureCode": {},
  "clientRequestToken": {},
  "outputLocation": {
    "s3Bucket": {},
    "s3Prefix": {}
  },
  "loggingConfig": {
    "recordAllRosTopics": {}
  },
  "maxJobDurationInSeconds": {},
  "simulationTimeMillis": {},
  "iamRole": {},
  "robotApplications": {},
  "simulationApplications": {},
  "dataSources": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "vpcConfig": {
    "subnets": {},
    "securityGroups": {},
    "vpcId": {},
    "assignPublicIp": {}
  },
  "compute": {
    "simulationUnitLimit": {},
    "computeType": {},
    "gpuUnitLimit": {}
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

<h3 id="createsimulationjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateSimulationJobResponse](#schemacreatesimulationjobresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|IdempotentParameterMismatchException|[IdempotentParameterMismatchException](#schemaidempotentparametermismatchexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateWorldExportJob

<a id="opIdCreateWorldExportJob"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/createWorldExportJob \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientRequestToken": "string",
    "worlds": [
      "string"
    ],
    "outputLocation": {
      "s3Bucket": {},
      "s3Prefix": {}
    },
    "iamRole": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /createWorldExportJob`

Creates a world export job.

> Body parameter

```json
{
  "clientRequestToken": "string",
  "worlds": [
    "string"
  ],
  "outputLocation": {
    "s3Bucket": {},
    "s3Prefix": {}
  },
  "iamRole": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createworldexportjob-parameters">Parameters</h3>

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
|» clientRequestToken|body|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.|
|» worlds|body|[[Arn](#schemaarn)]|true|A list of Amazon Resource Names (arns) that correspond to worlds to export.|
|» outputLocation|body|object|true|The output location.|
|» » s3Bucket|body|object|false|none|
|» » s3Prefix|body|object|false|none|
|» iamRole|body|string|true|The IAM role that the world export process uses to access the Amazon S3 bucket and put the export.|
|» tags|body|object|false|A map that contains tag keys and tag values that are attached to the world export job.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 200 Response

```json
{
  "arn": {},
  "status": {},
  "createdAt": {},
  "failureCode": {},
  "clientRequestToken": {},
  "outputLocation": {
    "s3Bucket": {},
    "s3Prefix": {}
  },
  "iamRole": {},
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

<h3 id="createworldexportjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateWorldExportJobResponse](#schemacreateworldexportjobresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|IdempotentParameterMismatchException|[IdempotentParameterMismatchException](#schemaidempotentparametermismatchexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateWorldGenerationJob

<a id="opIdCreateWorldGenerationJob"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/createWorldGenerationJob \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientRequestToken": "string",
    "template": "string",
    "worldCount": {
      "floorplanCount": {},
      "interiorCountPerFloorplan": {}
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "worldTags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /createWorldGenerationJob`

Creates worlds using the specified template.

> Body parameter

```json
{
  "clientRequestToken": "string",
  "template": "string",
  "worldCount": {
    "floorplanCount": {},
    "interiorCountPerFloorplan": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "worldTags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createworldgenerationjob-parameters">Parameters</h3>

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
|» clientRequestToken|body|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.|
|» template|body|string|true|The Amazon Resource Name (arn) of the world template describing the worlds you want to create.|
|» worldCount|body|object|true|<p>The number of worlds that will be created. You can configure the number of unique floorplans and the number of unique interiors for each floor plan. For example, if you want 1 world with 20 unique interiors, you set <code>floorplanCount = 1</code> and <code>interiorCountPerFloorplan = 20</code>. This will result in 20 worlds (<code>floorplanCount</code> * <code>interiorCountPerFloorplan)</code>. </p> <p>If you set <code>floorplanCount = 4</code> and <code>interiorCountPerFloorplan = 5</code>, there will be 20 worlds with 5 unique floor plans. </p>|
|» » floorplanCount|body|object|false|none|
|» » interiorCountPerFloorplan|body|object|false|none|
|» tags|body|object|false|A map that contains tag keys and tag values that are attached to the world generator job.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» worldTags|body|object|false|A map that contains tag keys and tag values that are attached to the generated worlds.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 200 Response

```json
{
  "arn": {},
  "status": {},
  "createdAt": {},
  "failureCode": {},
  "clientRequestToken": {},
  "template": {},
  "worldCount": {
    "floorplanCount": {},
    "interiorCountPerFloorplan": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "worldTags": {
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

<h3 id="createworldgenerationjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateWorldGenerationJobResponse](#schemacreateworldgenerationjobresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|IdempotentParameterMismatchException|[IdempotentParameterMismatchException](#schemaidempotentparametermismatchexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateWorldTemplate

<a id="opIdCreateWorldTemplate"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/createWorldTemplate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientRequestToken": "string",
    "name": "string",
    "templateBody": "string",
    "templateLocation": {
      "s3Bucket": {},
      "s3Key": {}
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /createWorldTemplate`

Creates a world template.

> Body parameter

```json
{
  "clientRequestToken": "string",
  "name": "string",
  "templateBody": "string",
  "templateLocation": {
    "s3Bucket": {},
    "s3Key": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createworldtemplate-parameters">Parameters</h3>

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
|» clientRequestToken|body|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.|
|» name|body|string|false|The name of the world template.|
|» templateBody|body|string|false|The world template body.|
|» templateLocation|body|object|false|Information about a template location.|
|» » s3Bucket|body|object|false|none|
|» » s3Key|body|object|false|none|
|» tags|body|object|false|A map that contains tag keys and tag values that are attached to the world template.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 200 Response

```json
{
  "arn": {},
  "clientRequestToken": {},
  "createdAt": {},
  "name": {},
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

<h3 id="createworldtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateWorldTemplateResponse](#schemacreateworldtemplateresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteFleet

<a id="opIdDeleteFleet"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/deleteFleet \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "fleet": "string"
  }'
```

`POST /deleteFleet`

<aside class="warning">
This operation is deprecated
</aside>

<p>Deletes a fleet.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>

> Body parameter

```json
{
  "fleet": "string"
}
```

<h3 id="deletefleet-parameters">Parameters</h3>

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
|» fleet|body|string|true|The Amazon Resource Name (ARN) of the fleet.|

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

<h3 id="deletefleet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteFleetResponse](#schemadeletefleetresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRobot

<a id="opIdDeleteRobot"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/deleteRobot \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "robot": "string"
  }'
```

`POST /deleteRobot`

<aside class="warning">
This operation is deprecated
</aside>

<p>Deletes a robot.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>

> Body parameter

```json
{
  "robot": "string"
}
```

<h3 id="deleterobot-parameters">Parameters</h3>

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
|» robot|body|string|true|The Amazon Resource Name (ARN) of the robot.|

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

<h3 id="deleterobot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteRobotResponse](#schemadeleterobotresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRobotApplication

<a id="opIdDeleteRobotApplication"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/deleteRobotApplication \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "application": "string",
    "applicationVersion": "string"
  }'
```

`POST /deleteRobotApplication`

Deletes a robot application.

> Body parameter

```json
{
  "application": "string",
  "applicationVersion": "string"
}
```

<h3 id="deleterobotapplication-parameters">Parameters</h3>

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
|» application|body|string|true|The Amazon Resource Name (ARN) of the the robot application.|
|» applicationVersion|body|string|false|The version of the robot application to delete.|

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

<h3 id="deleterobotapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteRobotApplicationResponse](#schemadeleterobotapplicationresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteSimulationApplication

<a id="opIdDeleteSimulationApplication"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/deleteSimulationApplication \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "application": "string",
    "applicationVersion": "string"
  }'
```

`POST /deleteSimulationApplication`

Deletes a simulation application.

> Body parameter

```json
{
  "application": "string",
  "applicationVersion": "string"
}
```

<h3 id="deletesimulationapplication-parameters">Parameters</h3>

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
|» application|body|string|true|The application information for the simulation application to delete.|
|» applicationVersion|body|string|false|The version of the simulation application to delete.|

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

<h3 id="deletesimulationapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteSimulationApplicationResponse](#schemadeletesimulationapplicationresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteWorldTemplate

<a id="opIdDeleteWorldTemplate"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/deleteWorldTemplate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "template": "string"
  }'
```

`POST /deleteWorldTemplate`

Deletes a world template.

> Body parameter

```json
{
  "template": "string"
}
```

<h3 id="deleteworldtemplate-parameters">Parameters</h3>

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
|» template|body|string|true|The Amazon Resource Name (arn) of the world template you want to delete.|

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

<h3 id="deleteworldtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteWorldTemplateResponse](#schemadeleteworldtemplateresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeregisterRobot

<a id="opIdDeregisterRobot"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/deregisterRobot \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "fleet": "string",
    "robot": "string"
  }'
```

`POST /deregisterRobot`

<aside class="warning">
This operation is deprecated
</aside>

<p>Deregisters a robot.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>

> Body parameter

```json
{
  "fleet": "string",
  "robot": "string"
}
```

<h3 id="deregisterrobot-parameters">Parameters</h3>

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
|» fleet|body|string|true|The Amazon Resource Name (ARN) of the fleet.|
|» robot|body|string|true|The Amazon Resource Name (ARN) of the robot.|

> Example responses

> 200 Response

```json
{
  "fleet": {},
  "robot": {}
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

<h3 id="deregisterrobot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeregisterRobotResponse](#schemaderegisterrobotresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDeploymentJob

<a id="opIdDescribeDeploymentJob"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/describeDeploymentJob \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "job": "string"
  }'
```

`POST /describeDeploymentJob`

<aside class="warning">
This operation is deprecated
</aside>

<p>Describes a deployment job.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>

> Body parameter

```json
{
  "job": "string"
}
```

<h3 id="describedeploymentjob-parameters">Parameters</h3>

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
|» job|body|string|true|The Amazon Resource Name (ARN) of the deployment job.|

> Example responses

> 200 Response

```json
{
  "arn": {},
  "fleet": {},
  "status": {},
  "deploymentConfig": {
    "concurrentDeploymentPercentage": {},
    "failureThresholdPercentage": {},
    "robotDeploymentTimeoutInSeconds": {},
    "downloadConditionFile": {
      "bucket": {},
      "key": {},
      "etag": {}
    }
  },
  "deploymentApplicationConfigs": {},
  "failureReason": {},
  "failureCode": {},
  "createdAt": {},
  "robotDeploymentSummary": {},
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

<h3 id="describedeploymentjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDeploymentJobResponse](#schemadescribedeploymentjobresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeFleet

<a id="opIdDescribeFleet"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/describeFleet \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "fleet": "string"
  }'
```

`POST /describeFleet`

<aside class="warning">
This operation is deprecated
</aside>

<p>Describes a fleet.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>

> Body parameter

```json
{
  "fleet": "string"
}
```

<h3 id="describefleet-parameters">Parameters</h3>

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
|» fleet|body|string|true|The Amazon Resource Name (ARN) of the fleet.|

> Example responses

> 200 Response

```json
{
  "name": {},
  "arn": {},
  "robots": {},
  "createdAt": {},
  "lastDeploymentStatus": {},
  "lastDeploymentJob": {},
  "lastDeploymentTime": {},
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

<h3 id="describefleet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeFleetResponse](#schemadescribefleetresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeRobot

<a id="opIdDescribeRobot"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/describeRobot \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "robot": "string"
  }'
```

`POST /describeRobot`

<aside class="warning">
This operation is deprecated
</aside>

<p>Describes a robot.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>

> Body parameter

```json
{
  "robot": "string"
}
```

<h3 id="describerobot-parameters">Parameters</h3>

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
|» robot|body|string|true|The Amazon Resource Name (ARN) of the robot to be described.|

> Example responses

> 200 Response

```json
{
  "arn": {},
  "name": {},
  "fleetArn": {},
  "status": {},
  "greengrassGroupId": {},
  "createdAt": {},
  "architecture": {},
  "lastDeploymentJob": {},
  "lastDeploymentTime": {},
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

<h3 id="describerobot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeRobotResponse](#schemadescriberobotresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeRobotApplication

<a id="opIdDescribeRobotApplication"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/describeRobotApplication \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "application": "string",
    "applicationVersion": "string"
  }'
```

`POST /describeRobotApplication`

Describes a robot application.

> Body parameter

```json
{
  "application": "string",
  "applicationVersion": "string"
}
```

<h3 id="describerobotapplication-parameters">Parameters</h3>

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
|» application|body|string|true|The Amazon Resource Name (ARN) of the robot application.|
|» applicationVersion|body|string|false|The version of the robot application to describe.|

> Example responses

> 200 Response

```json
{
  "arn": {},
  "name": {},
  "version": {},
  "sources": {},
  "robotSoftwareSuite": {
    "name": {},
    "version": {}
  },
  "revisionId": {},
  "lastUpdatedAt": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "environment": {
    "uri": {}
  },
  "imageDigest": {}
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

<h3 id="describerobotapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeRobotApplicationResponse](#schemadescriberobotapplicationresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeSimulationApplication

<a id="opIdDescribeSimulationApplication"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/describeSimulationApplication \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "application": "string",
    "applicationVersion": "string"
  }'
```

`POST /describeSimulationApplication`

Describes a simulation application.

> Body parameter

```json
{
  "application": "string",
  "applicationVersion": "string"
}
```

<h3 id="describesimulationapplication-parameters">Parameters</h3>

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
|» application|body|string|true|The application information for the simulation application.|
|» applicationVersion|body|string|false|The version of the simulation application to describe.|

> Example responses

> 200 Response

```json
{
  "arn": {},
  "name": {},
  "version": {},
  "sources": {},
  "simulationSoftwareSuite": {
    "name": {},
    "version": {}
  },
  "robotSoftwareSuite": {
    "name": {},
    "version": {}
  },
  "renderingEngine": {
    "name": {},
    "version": {}
  },
  "revisionId": {},
  "lastUpdatedAt": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "environment": {
    "uri": {}
  },
  "imageDigest": {}
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

<h3 id="describesimulationapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeSimulationApplicationResponse](#schemadescribesimulationapplicationresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeSimulationJob

<a id="opIdDescribeSimulationJob"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/describeSimulationJob \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "job": "string"
  }'
```

`POST /describeSimulationJob`

Describes a simulation job.

> Body parameter

```json
{
  "job": "string"
}
```

<h3 id="describesimulationjob-parameters">Parameters</h3>

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
|» job|body|string|true|The Amazon Resource Name (ARN) of the simulation job to be described.|

> Example responses

> 200 Response

```json
{
  "arn": {},
  "name": {},
  "status": {},
  "lastStartedAt": {},
  "lastUpdatedAt": {},
  "failureBehavior": {},
  "failureCode": {},
  "failureReason": {},
  "clientRequestToken": {},
  "outputLocation": {
    "s3Bucket": {},
    "s3Prefix": {}
  },
  "loggingConfig": {
    "recordAllRosTopics": {}
  },
  "maxJobDurationInSeconds": {},
  "simulationTimeMillis": {},
  "iamRole": {},
  "robotApplications": {},
  "simulationApplications": {},
  "dataSources": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "vpcConfig": {
    "subnets": {},
    "securityGroups": {},
    "vpcId": {},
    "assignPublicIp": {}
  },
  "networkInterface": {
    "networkInterfaceId": {},
    "privateIpAddress": {},
    "publicIpAddress": {}
  },
  "compute": {
    "simulationUnitLimit": {},
    "computeType": {},
    "gpuUnitLimit": {}
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

<h3 id="describesimulationjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeSimulationJobResponse](#schemadescribesimulationjobresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeSimulationJobBatch

<a id="opIdDescribeSimulationJobBatch"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/describeSimulationJobBatch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "batch": "string"
  }'
```

`POST /describeSimulationJobBatch`

Describes a simulation job batch.

> Body parameter

```json
{
  "batch": "string"
}
```

<h3 id="describesimulationjobbatch-parameters">Parameters</h3>

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
|» batch|body|string|true|The id of the batch to describe.|

> Example responses

> 200 Response

```json
{
  "arn": {},
  "status": {},
  "lastUpdatedAt": {},
  "createdAt": {},
  "clientRequestToken": {},
  "batchPolicy": {
    "timeoutInSeconds": {},
    "maxConcurrency": {}
  },
  "failureCode": {},
  "failureReason": {},
  "failedRequests": {},
  "pendingRequests": {},
  "createdRequests": {},
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

<h3 id="describesimulationjobbatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeSimulationJobBatchResponse](#schemadescribesimulationjobbatchresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeWorld

<a id="opIdDescribeWorld"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/describeWorld \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "world": "string"
  }'
```

`POST /describeWorld`

Describes a world.

> Body parameter

```json
{
  "world": "string"
}
```

<h3 id="describeworld-parameters">Parameters</h3>

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
|» world|body|string|true|The Amazon Resource Name (arn) of the world you want to describe.|

> Example responses

> 200 Response

```json
{
  "arn": {},
  "generationJob": {},
  "template": {},
  "createdAt": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "worldDescriptionBody": {}
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

<h3 id="describeworld-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeWorldResponse](#schemadescribeworldresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeWorldExportJob

<a id="opIdDescribeWorldExportJob"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/describeWorldExportJob \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "job": "string"
  }'
```

`POST /describeWorldExportJob`

Describes a world export job.

> Body parameter

```json
{
  "job": "string"
}
```

<h3 id="describeworldexportjob-parameters">Parameters</h3>

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
|» job|body|string|true|The Amazon Resource Name (arn) of the world export job to describe.|

> Example responses

> 200 Response

```json
{
  "arn": {},
  "status": {},
  "createdAt": {},
  "failureCode": {},
  "failureReason": {},
  "clientRequestToken": {},
  "worlds": {},
  "outputLocation": {
    "s3Bucket": {},
    "s3Prefix": {}
  },
  "iamRole": {},
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

<h3 id="describeworldexportjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeWorldExportJobResponse](#schemadescribeworldexportjobresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeWorldGenerationJob

<a id="opIdDescribeWorldGenerationJob"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/describeWorldGenerationJob \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "job": "string"
  }'
```

`POST /describeWorldGenerationJob`

Describes a world generation job.

> Body parameter

```json
{
  "job": "string"
}
```

<h3 id="describeworldgenerationjob-parameters">Parameters</h3>

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
|» job|body|string|true|The Amazon Resource Name (arn) of the world generation job to describe.|

> Example responses

> 200 Response

```json
{
  "arn": {},
  "status": {},
  "createdAt": {},
  "failureCode": {},
  "failureReason": {},
  "clientRequestToken": {},
  "template": {},
  "worldCount": {
    "floorplanCount": {},
    "interiorCountPerFloorplan": {}
  },
  "finishedWorldsSummary": {
    "finishedCount": {},
    "succeededWorlds": {},
    "failureSummary": {
      "totalFailureCount": {},
      "failures": {}
    }
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "worldTags": {
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

<h3 id="describeworldgenerationjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeWorldGenerationJobResponse](#schemadescribeworldgenerationjobresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeWorldTemplate

<a id="opIdDescribeWorldTemplate"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/describeWorldTemplate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "template": "string"
  }'
```

`POST /describeWorldTemplate`

Describes a world template.

> Body parameter

```json
{
  "template": "string"
}
```

<h3 id="describeworldtemplate-parameters">Parameters</h3>

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
|» template|body|string|true|The Amazon Resource Name (arn) of the world template you want to describe.|

> Example responses

> 200 Response

```json
{
  "arn": {},
  "clientRequestToken": {},
  "name": {},
  "createdAt": {},
  "lastUpdatedAt": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "version": {}
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

<h3 id="describeworldtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeWorldTemplateResponse](#schemadescribeworldtemplateresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetWorldTemplateBody

<a id="opIdGetWorldTemplateBody"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/getWorldTemplateBody \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "template": "string",
    "generationJob": "string"
  }'
```

`POST /getWorldTemplateBody`

Gets the world template body.

> Body parameter

```json
{
  "template": "string",
  "generationJob": "string"
}
```

<h3 id="getworldtemplatebody-parameters">Parameters</h3>

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
|» template|body|string|false|The Amazon Resource Name (arn) of the world template.|
|» generationJob|body|string|false|The Amazon Resource Name (arn) of the world generator job.|

> Example responses

> 200 Response

```json
{
  "templateBody": {}
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

<h3 id="getworldtemplatebody-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetWorldTemplateBodyResponse](#schemagetworldtemplatebodyresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDeploymentJobs

<a id="opIdListDeploymentJobs"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/listDeploymentJobs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "filters": [
      {
        "name": {},
        "values": {}
      }
    ],
    "nextToken": "string",
    "maxResults": 0
  }'
```

`POST /listDeploymentJobs`

<aside class="warning">
This operation is deprecated
</aside>

<p>Returns a list of deployment jobs for a fleet. You can optionally provide filters to retrieve specific deployment jobs.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>

> Body parameter

```json
{
  "filters": [
    {
      "name": {},
      "values": {}
    }
  ],
  "nextToken": "string",
  "maxResults": 0
}
```

<h3 id="listdeploymentjobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» filters|body|[[Filter](#schemafilter)]|false|<p>Optional filters to limit results.</p> <p>The filter names <code>status</code> and <code>fleetName</code> are supported. When filtering, you must use the complete value of the filtered item. You can use up to three filters, but they must be for the same named item. For example, if you are looking for items with the status <code>InProgress</code> or the status <code>Pending</code>.</p>|
|» nextToken|body|string|false|If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListDeploymentJobs</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. |
|» maxResults|body|integer|false|When this parameter is used, <code>ListDeploymentJobs</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListDeploymentJobs</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 200. If this parameter is not used, then <code>ListDeploymentJobs</code> returns up to 200 results and a <code>nextToken</code> value if applicable. |

> Example responses

> 200 Response

```json
{
  "deploymentJobs": {},
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

<h3 id="listdeploymentjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDeploymentJobsResponse](#schemalistdeploymentjobsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListFleets

<a id="opIdListFleets"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/listFleets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "nextToken": "string",
    "maxResults": 0,
    "filters": [
      {
        "name": {},
        "values": {}
      }
    ]
  }'
```

`POST /listFleets`

<aside class="warning">
This operation is deprecated
</aside>

<p>Returns a list of fleets. You can optionally provide filters to retrieve specific fleets.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>

> Body parameter

```json
{
  "nextToken": "string",
  "maxResults": 0,
  "filters": [
    {
      "name": {},
      "values": {}
    }
  ]
}
```

<h3 id="listfleets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» nextToken|body|string|false|<p>If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListFleets</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. </p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>|
|» maxResults|body|integer|false|When this parameter is used, <code>ListFleets</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListFleets</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 200. If this parameter is not used, then <code>ListFleets</code> returns up to 200 results and a <code>nextToken</code> value if applicable. |
|» filters|body|[[Filter](#schemafilter)]|false|<p>Optional filters to limit results.</p> <p>The filter name <code>name</code> is supported. When filtering, you must use the complete value of the filtered item. You can use up to three filters.</p>|

> Example responses

> 200 Response

```json
{
  "fleetDetails": {},
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

<h3 id="listfleets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListFleetsResponse](#schemalistfleetsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRobotApplications

<a id="opIdListRobotApplications"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/listRobotApplications \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "versionQualifier": "string",
    "nextToken": "string",
    "maxResults": 0,
    "filters": [
      {
        "name": {},
        "values": {}
      }
    ]
  }'
```

`POST /listRobotApplications`

Returns a list of robot application. You can optionally provide filters to retrieve specific robot applications.

> Body parameter

```json
{
  "versionQualifier": "string",
  "nextToken": "string",
  "maxResults": 0,
  "filters": [
    {
      "name": {},
      "values": {}
    }
  ]
}
```

<h3 id="listrobotapplications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» versionQualifier|body|string|false|The version qualifier of the robot application.|
|» nextToken|body|string|false|If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListRobotApplications</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. |
|» maxResults|body|integer|false|When this parameter is used, <code>ListRobotApplications</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListRobotApplications</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListRobotApplications</code> returns up to 100 results and a <code>nextToken</code> value if applicable. |
|» filters|body|[[Filter](#schemafilter)]|false|<p>Optional filters to limit results.</p> <p>The filter name <code>name</code> is supported. When filtering, you must use the complete value of the filtered item. You can use up to three filters.</p>|

> Example responses

> 200 Response

```json
{
  "robotApplicationSummaries": {},
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

<h3 id="listrobotapplications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRobotApplicationsResponse](#schemalistrobotapplicationsresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRobots

<a id="opIdListRobots"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/listRobots \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "nextToken": "string",
    "maxResults": 0,
    "filters": [
      {
        "name": {},
        "values": {}
      }
    ]
  }'
```

`POST /listRobots`

<aside class="warning">
This operation is deprecated
</aside>

<p>Returns a list of robots. You can optionally provide filters to retrieve specific robots.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>

> Body parameter

```json
{
  "nextToken": "string",
  "maxResults": 0,
  "filters": [
    {
      "name": {},
      "values": {}
    }
  ]
}
```

<h3 id="listrobots-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» nextToken|body|string|false|If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListRobots</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. |
|» maxResults|body|integer|false|When this parameter is used, <code>ListRobots</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListRobots</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 200. If this parameter is not used, then <code>ListRobots</code> returns up to 200 results and a <code>nextToken</code> value if applicable. |
|» filters|body|[[Filter](#schemafilter)]|false|<p>Optional filters to limit results.</p> <p>The filter names <code>status</code> and <code>fleetName</code> are supported. When filtering, you must use the complete value of the filtered item. You can use up to three filters, but they must be for the same named item. For example, if you are looking for items with the status <code>Registered</code> or the status <code>Available</code>.</p>|

> Example responses

> 200 Response

```json
{
  "robots": {},
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

<h3 id="listrobots-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRobotsResponse](#schemalistrobotsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSimulationApplications

<a id="opIdListSimulationApplications"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/listSimulationApplications \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "versionQualifier": "string",
    "nextToken": "string",
    "maxResults": 0,
    "filters": [
      {
        "name": {},
        "values": {}
      }
    ]
  }'
```

`POST /listSimulationApplications`

Returns a list of simulation applications. You can optionally provide filters to retrieve specific simulation applications. 

> Body parameter

```json
{
  "versionQualifier": "string",
  "nextToken": "string",
  "maxResults": 0,
  "filters": [
    {
      "name": {},
      "values": {}
    }
  ]
}
```

<h3 id="listsimulationapplications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» versionQualifier|body|string|false|The version qualifier of the simulation application.|
|» nextToken|body|string|false|If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListSimulationApplications</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. |
|» maxResults|body|integer|false|When this parameter is used, <code>ListSimulationApplications</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListSimulationApplications</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListSimulationApplications</code> returns up to 100 results and a <code>nextToken</code> value if applicable. |
|» filters|body|[[Filter](#schemafilter)]|false|<p>Optional list of filters to limit results.</p> <p>The filter name <code>name</code> is supported. When filtering, you must use the complete value of the filtered item. You can use up to three filters.</p>|

> Example responses

> 200 Response

```json
{
  "simulationApplicationSummaries": {},
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

<h3 id="listsimulationapplications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSimulationApplicationsResponse](#schemalistsimulationapplicationsresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSimulationJobBatches

<a id="opIdListSimulationJobBatches"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/listSimulationJobBatches \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "nextToken": "string",
    "maxResults": 0,
    "filters": [
      {
        "name": {},
        "values": {}
      }
    ]
  }'
```

`POST /listSimulationJobBatches`

Returns a list simulation job batches. You can optionally provide filters to retrieve specific simulation batch jobs. 

> Body parameter

```json
{
  "nextToken": "string",
  "maxResults": 0,
  "filters": [
    {
      "name": {},
      "values": {}
    }
  ]
}
```

<h3 id="listsimulationjobbatches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» nextToken|body|string|false|If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListSimulationJobBatches</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. |
|» maxResults|body|integer|false|When this parameter is used, <code>ListSimulationJobBatches</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListSimulationJobBatches</code> request with the returned <code>nextToken</code> value. |
|» filters|body|[[Filter](#schemafilter)]|false|Optional filters to limit results.|

> Example responses

> 200 Response

```json
{
  "simulationJobBatchSummaries": {},
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

<h3 id="listsimulationjobbatches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSimulationJobBatchesResponse](#schemalistsimulationjobbatchesresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSimulationJobs

<a id="opIdListSimulationJobs"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/listSimulationJobs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "nextToken": "string",
    "maxResults": 0,
    "filters": [
      {
        "name": {},
        "values": {}
      }
    ]
  }'
```

`POST /listSimulationJobs`

Returns a list of simulation jobs. You can optionally provide filters to retrieve specific simulation jobs. 

> Body parameter

```json
{
  "nextToken": "string",
  "maxResults": 0,
  "filters": [
    {
      "name": {},
      "values": {}
    }
  ]
}
```

<h3 id="listsimulationjobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» nextToken|body|string|false|If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListSimulationJobs</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. |
|» maxResults|body|integer|false|When this parameter is used, <code>ListSimulationJobs</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListSimulationJobs</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 1000. If this parameter is not used, then <code>ListSimulationJobs</code> returns up to 1000 results and a <code>nextToken</code> value if applicable. |
|» filters|body|[[Filter](#schemafilter)]|false|<p>Optional filters to limit results.</p> <p>The filter names <code>status</code> and <code>simulationApplicationName</code> and <code>robotApplicationName</code> are supported. When filtering, you must use the complete value of the filtered item. You can use up to three filters, but they must be for the same named item. For example, if you are looking for items with the status <code>Preparing</code> or the status <code>Running</code>.</p>|

> Example responses

> 200 Response

```json
{
  "simulationJobSummaries": {},
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

<h3 id="listsimulationjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSimulationJobsResponse](#schemalistsimulationjobsresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{resourceArn}`

Lists all tags on a AWS RoboMaker resource.

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The AWS RoboMaker Amazon Resource Name (ARN) with tags to be listed.|
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
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/tags/string \
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

<p>Adds or edits tags for a AWS RoboMaker resource.</p> <p>Each tag consists of a tag key and a tag value. Tag keys and tag values are both required, but tag values can be empty strings. </p> <p>For information about the rules that apply to tag keys and tag values, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">User-Defined Tag Restrictions</a> in the <i>AWS Billing and Cost Management User Guide</i>. </p>

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
|resourceArn|path|string|true|The Amazon Resource Name (ARN) of the AWS RoboMaker resource you are tagging.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tags|body|object|true|A map that contains tag keys and tag values that are attached to the resource.|
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
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListWorldExportJobs

<a id="opIdListWorldExportJobs"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/listWorldExportJobs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "nextToken": "string",
    "maxResults": 0,
    "filters": [
      {
        "name": {},
        "values": {}
      }
    ]
  }'
```

`POST /listWorldExportJobs`

Lists world export jobs.

> Body parameter

```json
{
  "nextToken": "string",
  "maxResults": 0,
  "filters": [
    {
      "name": {},
      "values": {}
    }
  ]
}
```

<h3 id="listworldexportjobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» nextToken|body|string|false|If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListWorldExportJobs</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. |
|» maxResults|body|integer|false|When this parameter is used, <code>ListWorldExportJobs</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListWorldExportJobs</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListWorldExportJobs</code> returns up to 100 results and a <code>nextToken</code> value if applicable. |
|» filters|body|[[Filter](#schemafilter)]|false|Optional filters to limit results. You can use <code>generationJobId</code> and <code>templateId</code>.|

> Example responses

> 200 Response

```json
{
  "worldExportJobSummaries": {},
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

<h3 id="listworldexportjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListWorldExportJobsResponse](#schemalistworldexportjobsresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListWorldGenerationJobs

<a id="opIdListWorldGenerationJobs"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/listWorldGenerationJobs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "nextToken": "string",
    "maxResults": 0,
    "filters": [
      {
        "name": {},
        "values": {}
      }
    ]
  }'
```

`POST /listWorldGenerationJobs`

Lists world generator jobs.

> Body parameter

```json
{
  "nextToken": "string",
  "maxResults": 0,
  "filters": [
    {
      "name": {},
      "values": {}
    }
  ]
}
```

<h3 id="listworldgenerationjobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» nextToken|body|string|false|If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListWorldGenerationJobsRequest</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. |
|» maxResults|body|integer|false|When this parameter is used, <code>ListWorldGeneratorJobs</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListWorldGeneratorJobs</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListWorldGeneratorJobs</code> returns up to 100 results and a <code>nextToken</code> value if applicable. |
|» filters|body|[[Filter](#schemafilter)]|false|Optional filters to limit results. You can use <code>status</code> and <code>templateId</code>.|

> Example responses

> 200 Response

```json
{
  "worldGenerationJobSummaries": {},
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

<h3 id="listworldgenerationjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListWorldGenerationJobsResponse](#schemalistworldgenerationjobsresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListWorldTemplates

<a id="opIdListWorldTemplates"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/listWorldTemplates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "nextToken": "string",
    "maxResults": 0
  }'
```

`POST /listWorldTemplates`

Lists world templates.

> Body parameter

```json
{
  "nextToken": "string",
  "maxResults": 0
}
```

<h3 id="listworldtemplates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» nextToken|body|string|false|If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListWorldTemplates</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. |
|» maxResults|body|integer|false|When this parameter is used, <code>ListWorldTemplates</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListWorldTemplates</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListWorldTemplates</code> returns up to 100 results and a <code>nextToken</code> value if applicable. |

> Example responses

> 200 Response

```json
{
  "templateSummaries": {},
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

<h3 id="listworldtemplates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListWorldTemplatesResponse](#schemalistworldtemplatesresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListWorlds

<a id="opIdListWorlds"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/listWorlds \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "nextToken": "string",
    "maxResults": 0,
    "filters": [
      {
        "name": {},
        "values": {}
      }
    ]
  }'
```

`POST /listWorlds`

Lists worlds.

> Body parameter

```json
{
  "nextToken": "string",
  "maxResults": 0,
  "filters": [
    {
      "name": {},
      "values": {}
    }
  ]
}
```

<h3 id="listworlds-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» nextToken|body|string|false|If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListWorlds</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. |
|» maxResults|body|integer|false|When this parameter is used, <code>ListWorlds</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListWorlds</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListWorlds</code> returns up to 100 results and a <code>nextToken</code> value if applicable. |
|» filters|body|[[Filter](#schemafilter)]|false|Optional filters to limit results. You can use <code>status</code>.|

> Example responses

> 200 Response

```json
{
  "worldSummaries": {},
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

<h3 id="listworlds-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListWorldsResponse](#schemalistworldsresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RegisterRobot

<a id="opIdRegisterRobot"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/registerRobot \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "fleet": "string",
    "robot": "string"
  }'
```

`POST /registerRobot`

<aside class="warning">
This operation is deprecated
</aside>

<p>Registers a robot with a fleet.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important>

> Body parameter

```json
{
  "fleet": "string",
  "robot": "string"
}
```

<h3 id="registerrobot-parameters">Parameters</h3>

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
|» fleet|body|string|true|The Amazon Resource Name (ARN) of the fleet.|
|» robot|body|string|true|The Amazon Resource Name (ARN) of the robot.|

> Example responses

> 200 Response

```json
{
  "fleet": {},
  "robot": {}
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

<h3 id="registerrobot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RegisterRobotResponse](#schemaregisterrobotresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RestartSimulationJob

<a id="opIdRestartSimulationJob"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/restartSimulationJob \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "job": "string"
  }'
```

`POST /restartSimulationJob`

Restarts a running simulation job.

> Body parameter

```json
{
  "job": "string"
}
```

<h3 id="restartsimulationjob-parameters">Parameters</h3>

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
|» job|body|string|true|The Amazon Resource Name (ARN) of the simulation job.|

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

<h3 id="restartsimulationjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RestartSimulationJobResponse](#schemarestartsimulationjobresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartSimulationJobBatch

<a id="opIdStartSimulationJobBatch"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/startSimulationJobBatch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientRequestToken": "string",
    "batchPolicy": {
      "timeoutInSeconds": {},
      "maxConcurrency": {}
    },
    "createSimulationJobRequests": [
      {
        "outputLocation": {
          "s3Bucket": {},
          "s3Prefix": {}
        },
        "loggingConfig": {
          "recordAllRosTopics": {}
        },
        "maxJobDurationInSeconds": {},
        "iamRole": {},
        "failureBehavior": {},
        "useDefaultApplications": {},
        "robotApplications": {},
        "simulationApplications": {},
        "dataSources": {},
        "vpcConfig": {
          "subnets": {},
          "securityGroups": {},
          "assignPublicIp": {}
        },
        "compute": {
          "simulationUnitLimit": {},
          "computeType": {},
          "gpuUnitLimit": {}
        },
        "tags": {
          "property1": "string",
          "property2": "string"
        }
      }
    ],
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /startSimulationJobBatch`

Starts a new simulation job batch. The batch is defined using one or more <code>SimulationJobRequest</code> objects. 

> Body parameter

```json
{
  "clientRequestToken": "string",
  "batchPolicy": {
    "timeoutInSeconds": {},
    "maxConcurrency": {}
  },
  "createSimulationJobRequests": [
    {
      "outputLocation": {
        "s3Bucket": {},
        "s3Prefix": {}
      },
      "loggingConfig": {
        "recordAllRosTopics": {}
      },
      "maxJobDurationInSeconds": {},
      "iamRole": {},
      "failureBehavior": {},
      "useDefaultApplications": {},
      "robotApplications": {},
      "simulationApplications": {},
      "dataSources": {},
      "vpcConfig": {
        "subnets": {},
        "securityGroups": {},
        "assignPublicIp": {}
      },
      "compute": {
        "simulationUnitLimit": {},
        "computeType": {},
        "gpuUnitLimit": {}
      },
      "tags": {
        "property1": "string",
        "property2": "string"
      }
    }
  ],
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="startsimulationjobbatch-parameters">Parameters</h3>

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
|» clientRequestToken|body|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.|
|» batchPolicy|body|object|false|Information about the batch policy.|
|» » timeoutInSeconds|body|object|false|none|
|» » maxConcurrency|body|object|false|none|
|» createSimulationJobRequests|body|[[SimulationJobRequest](#schemasimulationjobrequest)]|true|A list of simulation job requests to create in the batch.|
|» tags|body|object|false|A map that contains tag keys and tag values that are attached to the deployment job batch.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 200 Response

```json
{
  "arn": {},
  "status": {},
  "createdAt": {},
  "clientRequestToken": {},
  "batchPolicy": {
    "timeoutInSeconds": {},
    "maxConcurrency": {}
  },
  "failureCode": {},
  "failureReason": {},
  "failedRequests": {},
  "pendingRequests": {},
  "createdRequests": {},
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

<h3 id="startsimulationjobbatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartSimulationJobBatchResponse](#schemastartsimulationjobbatchresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|IdempotentParameterMismatchException|[IdempotentParameterMismatchException](#schemaidempotentparametermismatchexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SyncDeploymentJob

<a id="opIdSyncDeploymentJob"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/syncDeploymentJob \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientRequestToken": "string",
    "fleet": "string"
  }'
```

`POST /syncDeploymentJob`

<aside class="warning">
This operation is deprecated
</aside>

<p>Syncrhonizes robots in a fleet to the latest deployment. This is helpful if robots were added after a deployment.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>

> Body parameter

```json
{
  "clientRequestToken": "string",
  "fleet": "string"
}
```

<h3 id="syncdeploymentjob-parameters">Parameters</h3>

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
|» clientRequestToken|body|string|true|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.|
|» fleet|body|string|true|The target fleet for the synchronization.|

> Example responses

> 200 Response

```json
{
  "arn": {},
  "fleet": {},
  "status": {},
  "deploymentConfig": {
    "concurrentDeploymentPercentage": {},
    "failureThresholdPercentage": {},
    "robotDeploymentTimeoutInSeconds": {},
    "downloadConditionFile": {
      "bucket": {},
      "key": {},
      "etag": {}
    }
  },
  "deploymentApplicationConfigs": {},
  "failureReason": {},
  "failureCode": {},
  "createdAt": {}
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

<h3 id="syncdeploymentjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SyncDeploymentJobResponse](#schemasyncdeploymentjobresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|ConcurrentDeploymentException|[ConcurrentDeploymentException](#schemaconcurrentdeploymentexception)|
|486|486|IdempotentParameterMismatchException|[IdempotentParameterMismatchException](#schemaidempotentparametermismatchexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://robomaker.us-east-1.amazonaws.com/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{resourceArn}#tagKeys`

<p>Removes the specified tags from the specified AWS RoboMaker resource.</p> <p>To remove a tag, specify the tag key. To change the tag value of an existing tag key, use <a href="https://docs.aws.amazon.com/robomaker/latest/dg/API_TagResource.html"> <code>TagResource</code> </a>. </p>

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The Amazon Resource Name (ARN) of the AWS RoboMaker resource you are removing tags.|
|tagKeys|query|[[TagKey](#schematagkey)]|true|A map that contains tag keys and tag values that will be unattached from the resource.|
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
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateRobotApplication

<a id="opIdUpdateRobotApplication"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/updateRobotApplication \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "application": "string",
    "sources": [
      {
        "s3Bucket": {},
        "s3Key": {},
        "architecture": {}
      }
    ],
    "robotSoftwareSuite": {
      "name": {},
      "version": {}
    },
    "currentRevisionId": "string",
    "environment": {
      "uri": {}
    }
  }'
```

`POST /updateRobotApplication`

Updates a robot application.

> Body parameter

```json
{
  "application": "string",
  "sources": [
    {
      "s3Bucket": {},
      "s3Key": {},
      "architecture": {}
    }
  ],
  "robotSoftwareSuite": {
    "name": {},
    "version": {}
  },
  "currentRevisionId": "string",
  "environment": {
    "uri": {}
  }
}
```

<h3 id="updaterobotapplication-parameters">Parameters</h3>

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
|» application|body|string|true|The application information for the robot application.|
|» sources|body|[[SourceConfig](#schemasourceconfig)]|false|The sources of the robot application.|
|» robotSoftwareSuite|body|object|true|Information about a robot software suite (ROS distribution).|
|» » name|body|object|false|none|
|» » version|body|object|false|none|
|» currentRevisionId|body|string|false|The revision id for the robot application.|
|» environment|body|object|false|The object that contains the Docker image URI for either your robot or simulation applications.|
|» » uri|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "arn": {},
  "name": {},
  "version": {},
  "sources": {},
  "robotSoftwareSuite": {
    "name": {},
    "version": {}
  },
  "lastUpdatedAt": {},
  "revisionId": {},
  "environment": {
    "uri": {}
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

<h3 id="updaterobotapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateRobotApplicationResponse](#schemaupdaterobotapplicationresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateSimulationApplication

<a id="opIdUpdateSimulationApplication"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/updateSimulationApplication \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "application": "string",
    "sources": [
      {
        "s3Bucket": {},
        "s3Key": {},
        "architecture": {}
      }
    ],
    "simulationSoftwareSuite": {
      "name": {},
      "version": {}
    },
    "robotSoftwareSuite": {
      "name": {},
      "version": {}
    },
    "renderingEngine": {
      "name": {},
      "version": {}
    },
    "currentRevisionId": "string",
    "environment": {
      "uri": {}
    }
  }'
```

`POST /updateSimulationApplication`

Updates a simulation application.

> Body parameter

```json
{
  "application": "string",
  "sources": [
    {
      "s3Bucket": {},
      "s3Key": {},
      "architecture": {}
    }
  ],
  "simulationSoftwareSuite": {
    "name": {},
    "version": {}
  },
  "robotSoftwareSuite": {
    "name": {},
    "version": {}
  },
  "renderingEngine": {
    "name": {},
    "version": {}
  },
  "currentRevisionId": "string",
  "environment": {
    "uri": {}
  }
}
```

<h3 id="updatesimulationapplication-parameters">Parameters</h3>

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
|» application|body|string|true|The application information for the simulation application.|
|» sources|body|[[SourceConfig](#schemasourceconfig)]|false|The sources of the simulation application.|
|» simulationSoftwareSuite|body|object|true|Information about a simulation software suite.|
|» » name|body|object|false|none|
|» » version|body|object|false|none|
|» robotSoftwareSuite|body|object|true|Information about a robot software suite (ROS distribution).|
|» » name|body|object|false|none|
|» » version|body|object|false|none|
|» renderingEngine|body|object|false|Information about a rendering engine.|
|» » name|body|object|false|none|
|» » version|body|object|false|none|
|» currentRevisionId|body|string|false|The revision id for the robot application.|
|» environment|body|object|false|The object that contains the Docker image URI for either your robot or simulation applications.|
|» » uri|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "arn": {},
  "name": {},
  "version": {},
  "sources": {},
  "simulationSoftwareSuite": {
    "name": {},
    "version": {}
  },
  "robotSoftwareSuite": {
    "name": {},
    "version": {}
  },
  "renderingEngine": {
    "name": {},
    "version": {}
  },
  "lastUpdatedAt": {},
  "revisionId": {},
  "environment": {
    "uri": {}
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

<h3 id="updatesimulationapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateSimulationApplicationResponse](#schemaupdatesimulationapplicationresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateWorldTemplate

<a id="opIdUpdateWorldTemplate"></a>

> Code samples

```bash
curl https://robomaker.us-east-1.amazonaws.com/updateWorldTemplate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "template": "string",
    "name": "string",
    "templateBody": "string",
    "templateLocation": {
      "s3Bucket": {},
      "s3Key": {}
    }
  }'
```

`POST /updateWorldTemplate`

Updates a world template.

> Body parameter

```json
{
  "template": "string",
  "name": "string",
  "templateBody": "string",
  "templateLocation": {
    "s3Bucket": {},
    "s3Key": {}
  }
}
```

<h3 id="updateworldtemplate-parameters">Parameters</h3>

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
|» template|body|string|true|The Amazon Resource Name (arn) of the world template to update.|
|» name|body|string|false|The name of the template.|
|» templateBody|body|string|false|The world template body.|
|» templateLocation|body|object|false|Information about a template location.|
|» » s3Bucket|body|object|false|none|
|» » s3Key|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "arn": {},
  "name": {},
  "createdAt": {},
  "lastUpdatedAt": {}
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

<h3 id="updateworldtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateWorldTemplateResponse](#schemaupdateworldtemplateresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_BatchDeleteWorldsResponse">BatchDeleteWorldsResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeleteworldsresponse"></a>
<a id="schema_BatchDeleteWorldsResponse"></a>
<a id="tocSbatchdeleteworldsresponse"></a>
<a id="tocsbatchdeleteworldsresponse"></a>

```json
{
  "unprocessedWorlds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|unprocessedWorlds|object|false|none|none|

<h2 id="tocS_Arn">Arn</h2>
<!-- backwards compatibility -->
<a id="schemaarn"></a>
<a id="schema_Arn"></a>
<a id="tocSarn"></a>
<a id="tocsarn"></a>

```json
"string"
```

<h2 id="tocS_InvalidParameterException">InvalidParameterException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidparameterexception"></a>
<a id="schema_InvalidParameterException"></a>
<a id="tocSinvalidparameterexception"></a>
<a id="tocsinvalidparameterexception"></a>

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

<h2 id="tocS_InternalServerException">InternalServerException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserverexception"></a>
<a id="schema_InternalServerException"></a>
<a id="tocSinternalserverexception"></a>
<a id="tocsinternalserverexception"></a>

```json
null
```

<h2 id="tocS_BatchDescribeSimulationJobResponse">BatchDescribeSimulationJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchdescribesimulationjobresponse"></a>
<a id="schema_BatchDescribeSimulationJobResponse"></a>
<a id="tocSbatchdescribesimulationjobresponse"></a>
<a id="tocsbatchdescribesimulationjobresponse"></a>

```json
{
  "jobs": {},
  "unprocessedJobs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobs|object|false|none|none|
|unprocessedJobs|object|false|none|none|

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_CancelDeploymentJobResponse">CancelDeploymentJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemacanceldeploymentjobresponse"></a>
<a id="schema_CancelDeploymentJobResponse"></a>
<a id="tocScanceldeploymentjobresponse"></a>
<a id="tocscanceldeploymentjobresponse"></a>

```json
{}
```

Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.

<h2 id="tocS_CancelSimulationJobResponse">CancelSimulationJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemacancelsimulationjobresponse"></a>
<a id="schema_CancelSimulationJobResponse"></a>
<a id="tocScancelsimulationjobresponse"></a>
<a id="tocscancelsimulationjobresponse"></a>

```json
{}
```

<h2 id="tocS_CancelSimulationJobBatchResponse">CancelSimulationJobBatchResponse</h2>
<!-- backwards compatibility -->
<a id="schemacancelsimulationjobbatchresponse"></a>
<a id="schema_CancelSimulationJobBatchResponse"></a>
<a id="tocScancelsimulationjobbatchresponse"></a>
<a id="tocscancelsimulationjobbatchresponse"></a>

```json
{}
```

<h2 id="tocS_CancelWorldExportJobResponse">CancelWorldExportJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemacancelworldexportjobresponse"></a>
<a id="schema_CancelWorldExportJobResponse"></a>
<a id="tocScancelworldexportjobresponse"></a>
<a id="tocscancelworldexportjobresponse"></a>

```json
{}
```

<h2 id="tocS_CancelWorldGenerationJobResponse">CancelWorldGenerationJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemacancelworldgenerationjobresponse"></a>
<a id="schema_CancelWorldGenerationJobResponse"></a>
<a id="tocScancelworldgenerationjobresponse"></a>
<a id="tocscancelworldgenerationjobresponse"></a>

```json
{}
```

<h2 id="tocS_CreateDeploymentJobResponse">CreateDeploymentJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedeploymentjobresponse"></a>
<a id="schema_CreateDeploymentJobResponse"></a>
<a id="tocScreatedeploymentjobresponse"></a>
<a id="tocscreatedeploymentjobresponse"></a>

```json
{
  "arn": {},
  "fleet": {},
  "status": {},
  "deploymentApplicationConfigs": {},
  "failureReason": {},
  "failureCode": {},
  "createdAt": {},
  "deploymentConfig": {
    "concurrentDeploymentPercentage": {},
    "failureThresholdPercentage": {},
    "robotDeploymentTimeoutInSeconds": {},
    "downloadConditionFile": {
      "bucket": {},
      "key": {},
      "etag": {}
    }
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

AWS RoboMaker is unable to process this request as the support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|fleet|object|false|none|none|
|status|object|false|none|none|
|deploymentApplicationConfigs|object|false|none|none|
|failureReason|object|false|none|none|
|failureCode|object|false|none|none|
|createdAt|object|false|none|none|
|deploymentConfig|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_Percentage">Percentage</h2>
<!-- backwards compatibility -->
<a id="schemapercentage"></a>
<a id="schema_Percentage"></a>
<a id="tocSpercentage"></a>
<a id="tocspercentage"></a>

```json
1
```

<h2 id="tocS_DeploymentTimeout">DeploymentTimeout</h2>
<!-- backwards compatibility -->
<a id="schemadeploymenttimeout"></a>
<a id="schema_DeploymentTimeout"></a>
<a id="tocSdeploymenttimeout"></a>
<a id="tocsdeploymenttimeout"></a>

```json
0
```

<h2 id="tocS_S3Object">S3Object</h2>
<!-- backwards compatibility -->
<a id="schemas3object"></a>
<a id="schema_S3Object"></a>
<a id="tocSs3object"></a>
<a id="tocss3object"></a>

```json
{
  "bucket": {},
  "key": {},
  "etag": {}
}
```

Information about an S3 object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucket|object|true|none|none|
|key|object|true|none|none|
|etag|object|false|none|none|

<h2 id="tocS_DeploymentApplicationConfig">DeploymentApplicationConfig</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentapplicationconfig"></a>
<a id="schema_DeploymentApplicationConfig"></a>
<a id="tocSdeploymentapplicationconfig"></a>
<a id="tocsdeploymentapplicationconfig"></a>

```json
{
  "application": {},
  "applicationVersion": {},
  "launchConfig": {
    "packageName": {},
    "preLaunchFile": {},
    "launchFile": {},
    "postLaunchFile": {},
    "environmentVariables": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

Information about a deployment application configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|application|object|true|none|none|
|applicationVersion|object|true|none|none|
|launchConfig|object|true|none|none|

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

<h2 id="tocS_LimitExceededException">LimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemalimitexceededexception"></a>
<a id="schema_LimitExceededException"></a>
<a id="tocSlimitexceededexception"></a>
<a id="tocslimitexceededexception"></a>

```json
null
```

<h2 id="tocS_ConcurrentDeploymentException">ConcurrentDeploymentException</h2>
<!-- backwards compatibility -->
<a id="schemaconcurrentdeploymentexception"></a>
<a id="schema_ConcurrentDeploymentException"></a>
<a id="tocSconcurrentdeploymentexception"></a>
<a id="tocsconcurrentdeploymentexception"></a>

```json
null
```

<h2 id="tocS_IdempotentParameterMismatchException">IdempotentParameterMismatchException</h2>
<!-- backwards compatibility -->
<a id="schemaidempotentparametermismatchexception"></a>
<a id="schema_IdempotentParameterMismatchException"></a>
<a id="tocSidempotentparametermismatchexception"></a>
<a id="tocsidempotentparametermismatchexception"></a>

```json
null
```

<h2 id="tocS_CreateFleetResponse">CreateFleetResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatefleetresponse"></a>
<a id="schema_CreateFleetResponse"></a>
<a id="tocScreatefleetresponse"></a>
<a id="tocscreatefleetresponse"></a>

```json
{
  "arn": {},
  "name": {},
  "createdAt": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

AWS RoboMaker is unable to process this request as the support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|name|object|false|none|none|
|createdAt|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreateRobotResponse">CreateRobotResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreaterobotresponse"></a>
<a id="schema_CreateRobotResponse"></a>
<a id="tocScreaterobotresponse"></a>
<a id="tocscreaterobotresponse"></a>

```json
{
  "arn": {},
  "name": {},
  "createdAt": {},
  "greengrassGroupId": {},
  "architecture": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

AWS RoboMaker is unable to process this request as the support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|name|object|false|none|none|
|createdAt|object|false|none|none|
|greengrassGroupId|object|false|none|none|
|architecture|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_ResourceAlreadyExistsException">ResourceAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcealreadyexistsexception"></a>
<a id="schema_ResourceAlreadyExistsException"></a>
<a id="tocSresourcealreadyexistsexception"></a>
<a id="tocsresourcealreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_CreateRobotApplicationResponse">CreateRobotApplicationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreaterobotapplicationresponse"></a>
<a id="schema_CreateRobotApplicationResponse"></a>
<a id="tocScreaterobotapplicationresponse"></a>
<a id="tocscreaterobotapplicationresponse"></a>

```json
{
  "arn": {},
  "name": {},
  "version": {},
  "sources": {},
  "robotSoftwareSuite": {
    "name": {},
    "version": {}
  },
  "lastUpdatedAt": {},
  "revisionId": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "environment": {
    "uri": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|name|object|false|none|none|
|version|object|false|none|none|
|sources|object|false|none|none|
|robotSoftwareSuite|object|false|none|none|
|lastUpdatedAt|object|false|none|none|
|revisionId|object|false|none|none|
|tags|object|false|none|none|
|environment|object|false|none|none|

<h2 id="tocS_SourceConfig">SourceConfig</h2>
<!-- backwards compatibility -->
<a id="schemasourceconfig"></a>
<a id="schema_SourceConfig"></a>
<a id="tocSsourceconfig"></a>
<a id="tocssourceconfig"></a>

```json
{
  "s3Bucket": {},
  "s3Key": {},
  "architecture": {}
}
```

Information about a source configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|s3Bucket|object|false|none|none|
|s3Key|object|false|none|none|
|architecture|object|false|none|none|

<h2 id="tocS_RobotSoftwareSuiteType">RobotSoftwareSuiteType</h2>
<!-- backwards compatibility -->
<a id="schemarobotsoftwaresuitetype"></a>
<a id="schema_RobotSoftwareSuiteType"></a>
<a id="tocSrobotsoftwaresuitetype"></a>
<a id="tocsrobotsoftwaresuitetype"></a>

```json
"ROS"
```

<h2 id="tocS_RobotSoftwareSuiteVersionType">RobotSoftwareSuiteVersionType</h2>
<!-- backwards compatibility -->
<a id="schemarobotsoftwaresuiteversiontype"></a>
<a id="schema_RobotSoftwareSuiteVersionType"></a>
<a id="tocSrobotsoftwaresuiteversiontype"></a>
<a id="tocsrobotsoftwaresuiteversiontype"></a>

```json
"Kinetic"
```

<h2 id="tocS_RepositoryUrl">RepositoryUrl</h2>
<!-- backwards compatibility -->
<a id="schemarepositoryurl"></a>
<a id="schema_RepositoryUrl"></a>
<a id="tocSrepositoryurl"></a>
<a id="tocsrepositoryurl"></a>

```json
"string"
```

<h2 id="tocS_CreateRobotApplicationVersionResponse">CreateRobotApplicationVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreaterobotapplicationversionresponse"></a>
<a id="schema_CreateRobotApplicationVersionResponse"></a>
<a id="tocScreaterobotapplicationversionresponse"></a>
<a id="tocscreaterobotapplicationversionresponse"></a>

```json
{
  "arn": {},
  "name": {},
  "version": {},
  "sources": {},
  "robotSoftwareSuite": {
    "name": {},
    "version": {}
  },
  "lastUpdatedAt": {},
  "revisionId": {},
  "environment": {
    "uri": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|name|object|false|none|none|
|version|object|false|none|none|
|sources|object|false|none|none|
|robotSoftwareSuite|object|false|none|none|
|lastUpdatedAt|object|false|none|none|
|revisionId|object|false|none|none|
|environment|object|false|none|none|

<h2 id="tocS_S3Etag">S3Etag</h2>
<!-- backwards compatibility -->
<a id="schemas3etag"></a>
<a id="schema_S3Etag"></a>
<a id="tocSs3etag"></a>
<a id="tocss3etag"></a>

```json
"string"
```

<h2 id="tocS_CreateSimulationApplicationResponse">CreateSimulationApplicationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatesimulationapplicationresponse"></a>
<a id="schema_CreateSimulationApplicationResponse"></a>
<a id="tocScreatesimulationapplicationresponse"></a>
<a id="tocscreatesimulationapplicationresponse"></a>

```json
{
  "arn": {},
  "name": {},
  "version": {},
  "sources": {},
  "simulationSoftwareSuite": {
    "name": {},
    "version": {}
  },
  "robotSoftwareSuite": {
    "name": {},
    "version": {}
  },
  "renderingEngine": {
    "name": {},
    "version": {}
  },
  "lastUpdatedAt": {},
  "revisionId": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "environment": {
    "uri": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|name|object|false|none|none|
|version|object|false|none|none|
|sources|object|false|none|none|
|simulationSoftwareSuite|object|false|none|none|
|robotSoftwareSuite|object|false|none|none|
|renderingEngine|object|false|none|none|
|lastUpdatedAt|object|false|none|none|
|revisionId|object|false|none|none|
|tags|object|false|none|none|
|environment|object|false|none|none|

<h2 id="tocS_SimulationSoftwareSuiteType">SimulationSoftwareSuiteType</h2>
<!-- backwards compatibility -->
<a id="schemasimulationsoftwaresuitetype"></a>
<a id="schema_SimulationSoftwareSuiteType"></a>
<a id="tocSsimulationsoftwaresuitetype"></a>
<a id="tocssimulationsoftwaresuitetype"></a>

```json
"Gazebo"
```

<h2 id="tocS_SimulationSoftwareSuiteVersionType">SimulationSoftwareSuiteVersionType</h2>
<!-- backwards compatibility -->
<a id="schemasimulationsoftwaresuiteversiontype"></a>
<a id="schema_SimulationSoftwareSuiteVersionType"></a>
<a id="tocSsimulationsoftwaresuiteversiontype"></a>
<a id="tocssimulationsoftwaresuiteversiontype"></a>

```json
"string"
```

<h2 id="tocS_RenderingEngineType">RenderingEngineType</h2>
<!-- backwards compatibility -->
<a id="schemarenderingenginetype"></a>
<a id="schema_RenderingEngineType"></a>
<a id="tocSrenderingenginetype"></a>
<a id="tocsrenderingenginetype"></a>

```json
"OGRE"
```

<h2 id="tocS_RenderingEngineVersionType">RenderingEngineVersionType</h2>
<!-- backwards compatibility -->
<a id="schemarenderingengineversiontype"></a>
<a id="schema_RenderingEngineVersionType"></a>
<a id="tocSrenderingengineversiontype"></a>
<a id="tocsrenderingengineversiontype"></a>

```json
"stri"
```

<h2 id="tocS_CreateSimulationApplicationVersionResponse">CreateSimulationApplicationVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatesimulationapplicationversionresponse"></a>
<a id="schema_CreateSimulationApplicationVersionResponse"></a>
<a id="tocScreatesimulationapplicationversionresponse"></a>
<a id="tocscreatesimulationapplicationversionresponse"></a>

```json
{
  "arn": {},
  "name": {},
  "version": {},
  "sources": {},
  "simulationSoftwareSuite": {
    "name": {},
    "version": {}
  },
  "robotSoftwareSuite": {
    "name": {},
    "version": {}
  },
  "renderingEngine": {
    "name": {},
    "version": {}
  },
  "lastUpdatedAt": {},
  "revisionId": {},
  "environment": {
    "uri": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|name|object|false|none|none|
|version|object|false|none|none|
|sources|object|false|none|none|
|simulationSoftwareSuite|object|false|none|none|
|robotSoftwareSuite|object|false|none|none|
|renderingEngine|object|false|none|none|
|lastUpdatedAt|object|false|none|none|
|revisionId|object|false|none|none|
|environment|object|false|none|none|

<h2 id="tocS_CreateSimulationJobResponse">CreateSimulationJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatesimulationjobresponse"></a>
<a id="schema_CreateSimulationJobResponse"></a>
<a id="tocScreatesimulationjobresponse"></a>
<a id="tocscreatesimulationjobresponse"></a>

```json
{
  "arn": {},
  "status": {},
  "lastStartedAt": {},
  "lastUpdatedAt": {},
  "failureBehavior": {},
  "failureCode": {},
  "clientRequestToken": {},
  "outputLocation": {
    "s3Bucket": {},
    "s3Prefix": {}
  },
  "loggingConfig": {
    "recordAllRosTopics": {}
  },
  "maxJobDurationInSeconds": {},
  "simulationTimeMillis": {},
  "iamRole": {},
  "robotApplications": {},
  "simulationApplications": {},
  "dataSources": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "vpcConfig": {
    "subnets": {},
    "securityGroups": {},
    "vpcId": {},
    "assignPublicIp": {}
  },
  "compute": {
    "simulationUnitLimit": {},
    "computeType": {},
    "gpuUnitLimit": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|status|object|false|none|none|
|lastStartedAt|object|false|none|none|
|lastUpdatedAt|object|false|none|none|
|failureBehavior|object|false|none|none|
|failureCode|object|false|none|none|
|clientRequestToken|object|false|none|none|
|outputLocation|object|false|none|none|
|loggingConfig|object|false|none|none|
|maxJobDurationInSeconds|object|false|none|none|
|simulationTimeMillis|object|false|none|none|
|iamRole|object|false|none|none|
|robotApplications|object|false|none|none|
|simulationApplications|object|false|none|none|
|dataSources|object|false|none|none|
|tags|object|false|none|none|
|vpcConfig|object|false|none|none|
|compute|object|false|none|none|

<h2 id="tocS_S3Bucket">S3Bucket</h2>
<!-- backwards compatibility -->
<a id="schemas3bucket"></a>
<a id="schema_S3Bucket"></a>
<a id="tocSs3bucket"></a>
<a id="tocss3bucket"></a>

```json
"string"
```

<h2 id="tocS_S3Key">S3Key</h2>
<!-- backwards compatibility -->
<a id="schemas3key"></a>
<a id="schema_S3Key"></a>
<a id="tocSs3key"></a>
<a id="tocss3key"></a>

```json
"string"
```

<h2 id="tocS_BoxedBoolean">BoxedBoolean</h2>
<!-- backwards compatibility -->
<a id="schemaboxedboolean"></a>
<a id="schema_BoxedBoolean"></a>
<a id="tocSboxedboolean"></a>
<a id="tocsboxedboolean"></a>

```json
true
```

<h2 id="tocS_RobotApplicationConfig">RobotApplicationConfig</h2>
<!-- backwards compatibility -->
<a id="schemarobotapplicationconfig"></a>
<a id="schema_RobotApplicationConfig"></a>
<a id="tocSrobotapplicationconfig"></a>
<a id="tocsrobotapplicationconfig"></a>

```json
{
  "application": {},
  "applicationVersion": {},
  "launchConfig": {
    "packageName": {},
    "launchFile": {},
    "environmentVariables": {
      "property1": "string",
      "property2": "string"
    },
    "portForwardingConfig": {
      "portMappings": {}
    },
    "streamUI": {},
    "command": {}
  },
  "uploadConfigurations": {},
  "useDefaultUploadConfigurations": {},
  "tools": {},
  "useDefaultTools": {}
}
```

Application configuration information for a robot.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|application|object|true|none|none|
|applicationVersion|object|false|none|none|
|launchConfig|object|true|none|none|
|uploadConfigurations|object|false|none|none|
|useDefaultUploadConfigurations|object|false|none|none|
|tools|object|false|none|none|
|useDefaultTools|object|false|none|none|

<h2 id="tocS_SimulationApplicationConfig">SimulationApplicationConfig</h2>
<!-- backwards compatibility -->
<a id="schemasimulationapplicationconfig"></a>
<a id="schema_SimulationApplicationConfig"></a>
<a id="tocSsimulationapplicationconfig"></a>
<a id="tocssimulationapplicationconfig"></a>

```json
{
  "application": {},
  "applicationVersion": {},
  "launchConfig": {
    "packageName": {},
    "launchFile": {},
    "environmentVariables": {
      "property1": "string",
      "property2": "string"
    },
    "portForwardingConfig": {
      "portMappings": {}
    },
    "streamUI": {},
    "command": {}
  },
  "uploadConfigurations": {},
  "worldConfigs": {},
  "useDefaultUploadConfigurations": {},
  "tools": {},
  "useDefaultTools": {}
}
```

Information about a simulation application configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|application|object|true|none|none|
|applicationVersion|object|false|none|none|
|launchConfig|object|true|none|none|
|uploadConfigurations|object|false|none|none|
|worldConfigs|object|false|none|none|
|useDefaultUploadConfigurations|object|false|none|none|
|tools|object|false|none|none|
|useDefaultTools|object|false|none|none|

<h2 id="tocS_DataSourceConfig">DataSourceConfig</h2>
<!-- backwards compatibility -->
<a id="schemadatasourceconfig"></a>
<a id="schema_DataSourceConfig"></a>
<a id="tocSdatasourceconfig"></a>
<a id="tocsdatasourceconfig"></a>

```json
{
  "name": {},
  "s3Bucket": {},
  "s3Keys": {},
  "type": {},
  "destination": {}
}
```

Information about a data source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|s3Bucket|object|true|none|none|
|s3Keys|object|true|none|none|
|type|object|false|none|none|
|destination|object|false|none|none|

<h2 id="tocS_Subnets">Subnets</h2>
<!-- backwards compatibility -->
<a id="schemasubnets"></a>
<a id="schema_Subnets"></a>
<a id="tocSsubnets"></a>
<a id="tocssubnets"></a>

```json
[
  "string"
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
  "string"
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

<h2 id="tocS_SimulationUnit">SimulationUnit</h2>
<!-- backwards compatibility -->
<a id="schemasimulationunit"></a>
<a id="schema_SimulationUnit"></a>
<a id="tocSsimulationunit"></a>
<a id="tocssimulationunit"></a>

```json
1
```

<h2 id="tocS_ComputeType">ComputeType</h2>
<!-- backwards compatibility -->
<a id="schemacomputetype"></a>
<a id="schema_ComputeType"></a>
<a id="tocScomputetype"></a>
<a id="tocscomputetype"></a>

```json
"CPU"
```

<h2 id="tocS_GPUUnit">GPUUnit</h2>
<!-- backwards compatibility -->
<a id="schemagpuunit"></a>
<a id="schema_GPUUnit"></a>
<a id="tocSgpuunit"></a>
<a id="tocsgpuunit"></a>

```json
0
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

<h2 id="tocS_CreateWorldExportJobResponse">CreateWorldExportJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateworldexportjobresponse"></a>
<a id="schema_CreateWorldExportJobResponse"></a>
<a id="tocScreateworldexportjobresponse"></a>
<a id="tocscreateworldexportjobresponse"></a>

```json
{
  "arn": {},
  "status": {},
  "createdAt": {},
  "failureCode": {},
  "clientRequestToken": {},
  "outputLocation": {
    "s3Bucket": {},
    "s3Prefix": {}
  },
  "iamRole": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|status|object|false|none|none|
|createdAt|object|false|none|none|
|failureCode|object|false|none|none|
|clientRequestToken|object|false|none|none|
|outputLocation|[OutputLocation](#schemaoutputlocation)|false|none|The output location.|
|iamRole|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreateWorldGenerationJobResponse">CreateWorldGenerationJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateworldgenerationjobresponse"></a>
<a id="schema_CreateWorldGenerationJobResponse"></a>
<a id="tocScreateworldgenerationjobresponse"></a>
<a id="tocscreateworldgenerationjobresponse"></a>

```json
{
  "arn": {},
  "status": {},
  "createdAt": {},
  "failureCode": {},
  "clientRequestToken": {},
  "template": {},
  "worldCount": {
    "floorplanCount": {},
    "interiorCountPerFloorplan": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "worldTags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|status|object|false|none|none|
|createdAt|object|false|none|none|
|failureCode|object|false|none|none|
|clientRequestToken|object|false|none|none|
|template|object|false|none|none|
|worldCount|object|false|none|none|
|tags|object|false|none|none|
|worldTags|object|false|none|none|

<h2 id="tocS_FloorplanCount">FloorplanCount</h2>
<!-- backwards compatibility -->
<a id="schemafloorplancount"></a>
<a id="schema_FloorplanCount"></a>
<a id="tocSfloorplancount"></a>
<a id="tocsfloorplancount"></a>

```json
0
```

<h2 id="tocS_InteriorCountPerFloorplan">InteriorCountPerFloorplan</h2>
<!-- backwards compatibility -->
<a id="schemainteriorcountperfloorplan"></a>
<a id="schema_InteriorCountPerFloorplan"></a>
<a id="tocSinteriorcountperfloorplan"></a>
<a id="tocsinteriorcountperfloorplan"></a>

```json
0
```

<h2 id="tocS_CreateWorldTemplateResponse">CreateWorldTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateworldtemplateresponse"></a>
<a id="schema_CreateWorldTemplateResponse"></a>
<a id="tocScreateworldtemplateresponse"></a>
<a id="tocscreateworldtemplateresponse"></a>

```json
{
  "arn": {},
  "clientRequestToken": {},
  "createdAt": {},
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
|arn|object|false|none|none|
|clientRequestToken|object|false|none|none|
|createdAt|object|false|none|none|
|name|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_DeleteFleetResponse">DeleteFleetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletefleetresponse"></a>
<a id="schema_DeleteFleetResponse"></a>
<a id="tocSdeletefleetresponse"></a>
<a id="tocsdeletefleetresponse"></a>

```json
{}
```

Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.

<h2 id="tocS_DeleteRobotResponse">DeleteRobotResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleterobotresponse"></a>
<a id="schema_DeleteRobotResponse"></a>
<a id="tocSdeleterobotresponse"></a>
<a id="tocsdeleterobotresponse"></a>

```json
{}
```

Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.

<h2 id="tocS_DeleteRobotApplicationResponse">DeleteRobotApplicationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleterobotapplicationresponse"></a>
<a id="schema_DeleteRobotApplicationResponse"></a>
<a id="tocSdeleterobotapplicationresponse"></a>
<a id="tocsdeleterobotapplicationresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteSimulationApplicationResponse">DeleteSimulationApplicationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletesimulationapplicationresponse"></a>
<a id="schema_DeleteSimulationApplicationResponse"></a>
<a id="tocSdeletesimulationapplicationresponse"></a>
<a id="tocsdeletesimulationapplicationresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteWorldTemplateResponse">DeleteWorldTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteworldtemplateresponse"></a>
<a id="schema_DeleteWorldTemplateResponse"></a>
<a id="tocSdeleteworldtemplateresponse"></a>
<a id="tocsdeleteworldtemplateresponse"></a>

```json
{}
```

<h2 id="tocS_DeregisterRobotResponse">DeregisterRobotResponse</h2>
<!-- backwards compatibility -->
<a id="schemaderegisterrobotresponse"></a>
<a id="schema_DeregisterRobotResponse"></a>
<a id="tocSderegisterrobotresponse"></a>
<a id="tocsderegisterrobotresponse"></a>

```json
{
  "fleet": {},
  "robot": {}
}
```

Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fleet|object|false|none|none|
|robot|object|false|none|none|

<h2 id="tocS_DescribeDeploymentJobResponse">DescribeDeploymentJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribedeploymentjobresponse"></a>
<a id="schema_DescribeDeploymentJobResponse"></a>
<a id="tocSdescribedeploymentjobresponse"></a>
<a id="tocsdescribedeploymentjobresponse"></a>

```json
{
  "arn": {},
  "fleet": {},
  "status": {},
  "deploymentConfig": {
    "concurrentDeploymentPercentage": {},
    "failureThresholdPercentage": {},
    "robotDeploymentTimeoutInSeconds": {},
    "downloadConditionFile": {
      "bucket": {},
      "key": {},
      "etag": {}
    }
  },
  "deploymentApplicationConfigs": {},
  "failureReason": {},
  "failureCode": {},
  "createdAt": {},
  "robotDeploymentSummary": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|fleet|object|false|none|none|
|status|object|false|none|none|
|deploymentConfig|object|false|none|none|
|deploymentApplicationConfigs|object|false|none|none|
|failureReason|object|false|none|none|
|failureCode|object|false|none|none|
|createdAt|object|false|none|none|
|robotDeploymentSummary|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_DescribeFleetResponse">DescribeFleetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribefleetresponse"></a>
<a id="schema_DescribeFleetResponse"></a>
<a id="tocSdescribefleetresponse"></a>
<a id="tocsdescribefleetresponse"></a>

```json
{
  "name": {},
  "arn": {},
  "robots": {},
  "createdAt": {},
  "lastDeploymentStatus": {},
  "lastDeploymentJob": {},
  "lastDeploymentTime": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|arn|object|false|none|none|
|robots|object|false|none|none|
|createdAt|object|false|none|none|
|lastDeploymentStatus|object|false|none|none|
|lastDeploymentJob|object|false|none|none|
|lastDeploymentTime|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_DescribeRobotResponse">DescribeRobotResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescriberobotresponse"></a>
<a id="schema_DescribeRobotResponse"></a>
<a id="tocSdescriberobotresponse"></a>
<a id="tocsdescriberobotresponse"></a>

```json
{
  "arn": {},
  "name": {},
  "fleetArn": {},
  "status": {},
  "greengrassGroupId": {},
  "createdAt": {},
  "architecture": {},
  "lastDeploymentJob": {},
  "lastDeploymentTime": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|name|object|false|none|none|
|fleetArn|object|false|none|none|
|status|object|false|none|none|
|greengrassGroupId|object|false|none|none|
|createdAt|object|false|none|none|
|architecture|object|false|none|none|
|lastDeploymentJob|object|false|none|none|
|lastDeploymentTime|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_DescribeRobotApplicationResponse">DescribeRobotApplicationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescriberobotapplicationresponse"></a>
<a id="schema_DescribeRobotApplicationResponse"></a>
<a id="tocSdescriberobotapplicationresponse"></a>
<a id="tocsdescriberobotapplicationresponse"></a>

```json
{
  "arn": {},
  "name": {},
  "version": {},
  "sources": {},
  "robotSoftwareSuite": {
    "name": {},
    "version": {}
  },
  "revisionId": {},
  "lastUpdatedAt": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "environment": {
    "uri": {}
  },
  "imageDigest": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|name|object|false|none|none|
|version|object|false|none|none|
|sources|object|false|none|none|
|robotSoftwareSuite|object|false|none|none|
|revisionId|object|false|none|none|
|lastUpdatedAt|object|false|none|none|
|tags|object|false|none|none|
|environment|object|false|none|none|
|imageDigest|object|false|none|none|

<h2 id="tocS_DescribeSimulationApplicationResponse">DescribeSimulationApplicationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribesimulationapplicationresponse"></a>
<a id="schema_DescribeSimulationApplicationResponse"></a>
<a id="tocSdescribesimulationapplicationresponse"></a>
<a id="tocsdescribesimulationapplicationresponse"></a>

```json
{
  "arn": {},
  "name": {},
  "version": {},
  "sources": {},
  "simulationSoftwareSuite": {
    "name": {},
    "version": {}
  },
  "robotSoftwareSuite": {
    "name": {},
    "version": {}
  },
  "renderingEngine": {
    "name": {},
    "version": {}
  },
  "revisionId": {},
  "lastUpdatedAt": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "environment": {
    "uri": {}
  },
  "imageDigest": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|name|object|false|none|none|
|version|object|false|none|none|
|sources|object|false|none|none|
|simulationSoftwareSuite|object|false|none|none|
|robotSoftwareSuite|object|false|none|none|
|renderingEngine|object|false|none|none|
|revisionId|object|false|none|none|
|lastUpdatedAt|object|false|none|none|
|tags|object|false|none|none|
|environment|object|false|none|none|
|imageDigest|object|false|none|none|

<h2 id="tocS_DescribeSimulationJobResponse">DescribeSimulationJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribesimulationjobresponse"></a>
<a id="schema_DescribeSimulationJobResponse"></a>
<a id="tocSdescribesimulationjobresponse"></a>
<a id="tocsdescribesimulationjobresponse"></a>

```json
{
  "arn": {},
  "name": {},
  "status": {},
  "lastStartedAt": {},
  "lastUpdatedAt": {},
  "failureBehavior": {},
  "failureCode": {},
  "failureReason": {},
  "clientRequestToken": {},
  "outputLocation": {
    "s3Bucket": {},
    "s3Prefix": {}
  },
  "loggingConfig": {
    "recordAllRosTopics": {}
  },
  "maxJobDurationInSeconds": {},
  "simulationTimeMillis": {},
  "iamRole": {},
  "robotApplications": {},
  "simulationApplications": {},
  "dataSources": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "vpcConfig": {
    "subnets": {},
    "securityGroups": {},
    "vpcId": {},
    "assignPublicIp": {}
  },
  "networkInterface": {
    "networkInterfaceId": {},
    "privateIpAddress": {},
    "publicIpAddress": {}
  },
  "compute": {
    "simulationUnitLimit": {},
    "computeType": {},
    "gpuUnitLimit": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|name|object|false|none|none|
|status|object|false|none|none|
|lastStartedAt|object|false|none|none|
|lastUpdatedAt|object|false|none|none|
|failureBehavior|object|false|none|none|
|failureCode|object|false|none|none|
|failureReason|object|false|none|none|
|clientRequestToken|object|false|none|none|
|outputLocation|object|false|none|none|
|loggingConfig|object|false|none|none|
|maxJobDurationInSeconds|object|false|none|none|
|simulationTimeMillis|object|false|none|none|
|iamRole|object|false|none|none|
|robotApplications|object|false|none|none|
|simulationApplications|object|false|none|none|
|dataSources|object|false|none|none|
|tags|object|false|none|none|
|vpcConfig|object|false|none|none|
|networkInterface|object|false|none|none|
|compute|object|false|none|none|

<h2 id="tocS_DescribeSimulationJobBatchResponse">DescribeSimulationJobBatchResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribesimulationjobbatchresponse"></a>
<a id="schema_DescribeSimulationJobBatchResponse"></a>
<a id="tocSdescribesimulationjobbatchresponse"></a>
<a id="tocsdescribesimulationjobbatchresponse"></a>

```json
{
  "arn": {},
  "status": {},
  "lastUpdatedAt": {},
  "createdAt": {},
  "clientRequestToken": {},
  "batchPolicy": {
    "timeoutInSeconds": {},
    "maxConcurrency": {}
  },
  "failureCode": {},
  "failureReason": {},
  "failedRequests": {},
  "pendingRequests": {},
  "createdRequests": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|status|object|false|none|none|
|lastUpdatedAt|object|false|none|none|
|createdAt|object|false|none|none|
|clientRequestToken|object|false|none|none|
|batchPolicy|object|false|none|none|
|failureCode|object|false|none|none|
|failureReason|object|false|none|none|
|failedRequests|object|false|none|none|
|pendingRequests|object|false|none|none|
|createdRequests|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_DescribeWorldResponse">DescribeWorldResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeworldresponse"></a>
<a id="schema_DescribeWorldResponse"></a>
<a id="tocSdescribeworldresponse"></a>
<a id="tocsdescribeworldresponse"></a>

```json
{
  "arn": {},
  "generationJob": {},
  "template": {},
  "createdAt": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "worldDescriptionBody": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|generationJob|object|false|none|none|
|template|object|false|none|none|
|createdAt|object|false|none|none|
|tags|object|false|none|none|
|worldDescriptionBody|object|false|none|none|

<h2 id="tocS_DescribeWorldExportJobResponse">DescribeWorldExportJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeworldexportjobresponse"></a>
<a id="schema_DescribeWorldExportJobResponse"></a>
<a id="tocSdescribeworldexportjobresponse"></a>
<a id="tocsdescribeworldexportjobresponse"></a>

```json
{
  "arn": {},
  "status": {},
  "createdAt": {},
  "failureCode": {},
  "failureReason": {},
  "clientRequestToken": {},
  "worlds": {},
  "outputLocation": {
    "s3Bucket": {},
    "s3Prefix": {}
  },
  "iamRole": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|status|object|false|none|none|
|createdAt|object|false|none|none|
|failureCode|object|false|none|none|
|failureReason|object|false|none|none|
|clientRequestToken|object|false|none|none|
|worlds|object|false|none|none|
|outputLocation|[OutputLocation](#schemaoutputlocation)|false|none|The output location.|
|iamRole|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_DescribeWorldGenerationJobResponse">DescribeWorldGenerationJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeworldgenerationjobresponse"></a>
<a id="schema_DescribeWorldGenerationJobResponse"></a>
<a id="tocSdescribeworldgenerationjobresponse"></a>
<a id="tocsdescribeworldgenerationjobresponse"></a>

```json
{
  "arn": {},
  "status": {},
  "createdAt": {},
  "failureCode": {},
  "failureReason": {},
  "clientRequestToken": {},
  "template": {},
  "worldCount": {
    "floorplanCount": {},
    "interiorCountPerFloorplan": {}
  },
  "finishedWorldsSummary": {
    "finishedCount": {},
    "succeededWorlds": {},
    "failureSummary": {
      "totalFailureCount": {},
      "failures": {}
    }
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "worldTags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|status|object|false|none|none|
|createdAt|object|false|none|none|
|failureCode|object|false|none|none|
|failureReason|object|false|none|none|
|clientRequestToken|object|false|none|none|
|template|object|false|none|none|
|worldCount|object|false|none|none|
|finishedWorldsSummary|object|false|none|none|
|tags|object|false|none|none|
|worldTags|object|false|none|none|

<h2 id="tocS_DescribeWorldTemplateResponse">DescribeWorldTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeworldtemplateresponse"></a>
<a id="schema_DescribeWorldTemplateResponse"></a>
<a id="tocSdescribeworldtemplateresponse"></a>
<a id="tocsdescribeworldtemplateresponse"></a>

```json
{
  "arn": {},
  "clientRequestToken": {},
  "name": {},
  "createdAt": {},
  "lastUpdatedAt": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "version": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|clientRequestToken|object|false|none|none|
|name|object|false|none|none|
|createdAt|object|false|none|none|
|lastUpdatedAt|object|false|none|none|
|tags|object|false|none|none|
|version|object|false|none|none|

<h2 id="tocS_GetWorldTemplateBodyResponse">GetWorldTemplateBodyResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetworldtemplatebodyresponse"></a>
<a id="schema_GetWorldTemplateBodyResponse"></a>
<a id="tocSgetworldtemplatebodyresponse"></a>
<a id="tocsgetworldtemplatebodyresponse"></a>

```json
{
  "templateBody": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|templateBody|object|false|none|none|

<h2 id="tocS_ListDeploymentJobsResponse">ListDeploymentJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdeploymentjobsresponse"></a>
<a id="schema_ListDeploymentJobsResponse"></a>
<a id="tocSlistdeploymentjobsresponse"></a>
<a id="tocslistdeploymentjobsresponse"></a>

```json
{
  "deploymentJobs": {},
  "nextToken": {}
}
```

Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploymentJobs|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_Filter">Filter</h2>
<!-- backwards compatibility -->
<a id="schemafilter"></a>
<a id="schema_Filter"></a>
<a id="tocSfilter"></a>
<a id="tocsfilter"></a>

```json
{
  "name": {},
  "values": {}
}
```

Information about a filter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|values|object|false|none|none|

<h2 id="tocS_ListFleetsResponse">ListFleetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfleetsresponse"></a>
<a id="schema_ListFleetsResponse"></a>
<a id="tocSlistfleetsresponse"></a>
<a id="tocslistfleetsresponse"></a>

```json
{
  "fleetDetails": {},
  "nextToken": {}
}
```

Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fleetDetails|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListRobotApplicationsResponse">ListRobotApplicationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistrobotapplicationsresponse"></a>
<a id="schema_ListRobotApplicationsResponse"></a>
<a id="tocSlistrobotapplicationsresponse"></a>
<a id="tocslistrobotapplicationsresponse"></a>

```json
{
  "robotApplicationSummaries": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|robotApplicationSummaries|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListRobotsResponse">ListRobotsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistrobotsresponse"></a>
<a id="schema_ListRobotsResponse"></a>
<a id="tocSlistrobotsresponse"></a>
<a id="tocslistrobotsresponse"></a>

```json
{
  "robots": {},
  "nextToken": {}
}
```

Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|robots|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListSimulationApplicationsResponse">ListSimulationApplicationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsimulationapplicationsresponse"></a>
<a id="schema_ListSimulationApplicationsResponse"></a>
<a id="tocSlistsimulationapplicationsresponse"></a>
<a id="tocslistsimulationapplicationsresponse"></a>

```json
{
  "simulationApplicationSummaries": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|simulationApplicationSummaries|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListSimulationJobBatchesResponse">ListSimulationJobBatchesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsimulationjobbatchesresponse"></a>
<a id="schema_ListSimulationJobBatchesResponse"></a>
<a id="tocSlistsimulationjobbatchesresponse"></a>
<a id="tocslistsimulationjobbatchesresponse"></a>

```json
{
  "simulationJobBatchSummaries": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|simulationJobBatchSummaries|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListSimulationJobsResponse">ListSimulationJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsimulationjobsresponse"></a>
<a id="schema_ListSimulationJobsResponse"></a>
<a id="tocSlistsimulationjobsresponse"></a>
<a id="tocslistsimulationjobsresponse"></a>

```json
{
  "simulationJobSummaries": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|simulationJobSummaries|object|true|none|none|
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

<h2 id="tocS_ListWorldExportJobsResponse">ListWorldExportJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistworldexportjobsresponse"></a>
<a id="schema_ListWorldExportJobsResponse"></a>
<a id="tocSlistworldexportjobsresponse"></a>
<a id="tocslistworldexportjobsresponse"></a>

```json
{
  "worldExportJobSummaries": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|worldExportJobSummaries|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListWorldGenerationJobsResponse">ListWorldGenerationJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistworldgenerationjobsresponse"></a>
<a id="schema_ListWorldGenerationJobsResponse"></a>
<a id="tocSlistworldgenerationjobsresponse"></a>
<a id="tocslistworldgenerationjobsresponse"></a>

```json
{
  "worldGenerationJobSummaries": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|worldGenerationJobSummaries|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListWorldTemplatesResponse">ListWorldTemplatesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistworldtemplatesresponse"></a>
<a id="schema_ListWorldTemplatesResponse"></a>
<a id="tocSlistworldtemplatesresponse"></a>
<a id="tocslistworldtemplatesresponse"></a>

```json
{
  "templateSummaries": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|templateSummaries|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListWorldsResponse">ListWorldsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistworldsresponse"></a>
<a id="schema_ListWorldsResponse"></a>
<a id="tocSlistworldsresponse"></a>
<a id="tocslistworldsresponse"></a>

```json
{
  "worldSummaries": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|worldSummaries|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_RegisterRobotResponse">RegisterRobotResponse</h2>
<!-- backwards compatibility -->
<a id="schemaregisterrobotresponse"></a>
<a id="schema_RegisterRobotResponse"></a>
<a id="tocSregisterrobotresponse"></a>
<a id="tocsregisterrobotresponse"></a>

```json
{
  "fleet": {},
  "robot": {}
}
```

AWS RoboMaker is unable to process this request as the support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fleet|object|false|none|none|
|robot|object|false|none|none|

<h2 id="tocS_RestartSimulationJobResponse">RestartSimulationJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemarestartsimulationjobresponse"></a>
<a id="schema_RestartSimulationJobResponse"></a>
<a id="tocSrestartsimulationjobresponse"></a>
<a id="tocsrestartsimulationjobresponse"></a>

```json
{}
```

<h2 id="tocS_StartSimulationJobBatchResponse">StartSimulationJobBatchResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartsimulationjobbatchresponse"></a>
<a id="schema_StartSimulationJobBatchResponse"></a>
<a id="tocSstartsimulationjobbatchresponse"></a>
<a id="tocsstartsimulationjobbatchresponse"></a>

```json
{
  "arn": {},
  "status": {},
  "createdAt": {},
  "clientRequestToken": {},
  "batchPolicy": {
    "timeoutInSeconds": {},
    "maxConcurrency": {}
  },
  "failureCode": {},
  "failureReason": {},
  "failedRequests": {},
  "pendingRequests": {},
  "createdRequests": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|status|object|false|none|none|
|createdAt|object|false|none|none|
|clientRequestToken|object|false|none|none|
|batchPolicy|object|false|none|none|
|failureCode|object|false|none|none|
|failureReason|object|false|none|none|
|failedRequests|object|false|none|none|
|pendingRequests|object|false|none|none|
|createdRequests|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_BatchTimeoutInSeconds">BatchTimeoutInSeconds</h2>
<!-- backwards compatibility -->
<a id="schemabatchtimeoutinseconds"></a>
<a id="schema_BatchTimeoutInSeconds"></a>
<a id="tocSbatchtimeoutinseconds"></a>
<a id="tocsbatchtimeoutinseconds"></a>

```json
0
```

<h2 id="tocS_MaxConcurrency">MaxConcurrency</h2>
<!-- backwards compatibility -->
<a id="schemamaxconcurrency"></a>
<a id="schema_MaxConcurrency"></a>
<a id="tocSmaxconcurrency"></a>
<a id="tocsmaxconcurrency"></a>

```json
0
```

<h2 id="tocS_SimulationJobRequest">SimulationJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemasimulationjobrequest"></a>
<a id="schema_SimulationJobRequest"></a>
<a id="tocSsimulationjobrequest"></a>
<a id="tocssimulationjobrequest"></a>

```json
{
  "outputLocation": {
    "s3Bucket": {},
    "s3Prefix": {}
  },
  "loggingConfig": {
    "recordAllRosTopics": {}
  },
  "maxJobDurationInSeconds": {},
  "iamRole": {},
  "failureBehavior": {},
  "useDefaultApplications": {},
  "robotApplications": {},
  "simulationApplications": {},
  "dataSources": {},
  "vpcConfig": {
    "subnets": {},
    "securityGroups": {},
    "assignPublicIp": {}
  },
  "compute": {
    "simulationUnitLimit": {},
    "computeType": {},
    "gpuUnitLimit": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Information about a simulation job request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outputLocation|[OutputLocation](#schemaoutputlocation)|false|none|The output location.|
|loggingConfig|[LoggingConfig](#schemaloggingconfig)|false|none|The logging configuration.|
|maxJobDurationInSeconds|object|true|none|none|
|iamRole|object|false|none|none|
|failureBehavior|object|false|none|none|
|useDefaultApplications|object|false|none|none|
|robotApplications|object|false|none|none|
|simulationApplications|object|false|none|none|
|dataSources|object|false|none|none|
|vpcConfig|[VPCConfig](#schemavpcconfig)|false|none|If your simulation job accesses resources in a VPC, you provide this parameter identifying the list of security group IDs and subnet IDs. These must belong to the same VPC. You must provide at least one security group and two subnet IDs.|
|compute|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_SyncDeploymentJobResponse">SyncDeploymentJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemasyncdeploymentjobresponse"></a>
<a id="schema_SyncDeploymentJobResponse"></a>
<a id="tocSsyncdeploymentjobresponse"></a>
<a id="tocssyncdeploymentjobresponse"></a>

```json
{
  "arn": {},
  "fleet": {},
  "status": {},
  "deploymentConfig": {
    "concurrentDeploymentPercentage": {},
    "failureThresholdPercentage": {},
    "robotDeploymentTimeoutInSeconds": {},
    "downloadConditionFile": {
      "bucket": {},
      "key": {},
      "etag": {}
    }
  },
  "deploymentApplicationConfigs": {},
  "failureReason": {},
  "failureCode": {},
  "createdAt": {}
}
```

Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|fleet|object|false|none|none|
|status|object|false|none|none|
|deploymentConfig|object|false|none|none|
|deploymentApplicationConfigs|object|false|none|none|
|failureReason|object|false|none|none|
|failureCode|object|false|none|none|
|createdAt|object|false|none|none|

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

<h2 id="tocS_UpdateRobotApplicationResponse">UpdateRobotApplicationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterobotapplicationresponse"></a>
<a id="schema_UpdateRobotApplicationResponse"></a>
<a id="tocSupdaterobotapplicationresponse"></a>
<a id="tocsupdaterobotapplicationresponse"></a>

```json
{
  "arn": {},
  "name": {},
  "version": {},
  "sources": {},
  "robotSoftwareSuite": {
    "name": {},
    "version": {}
  },
  "lastUpdatedAt": {},
  "revisionId": {},
  "environment": {
    "uri": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|name|object|false|none|none|
|version|object|false|none|none|
|sources|object|false|none|none|
|robotSoftwareSuite|object|false|none|none|
|lastUpdatedAt|object|false|none|none|
|revisionId|object|false|none|none|
|environment|object|false|none|none|

<h2 id="tocS_UpdateSimulationApplicationResponse">UpdateSimulationApplicationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesimulationapplicationresponse"></a>
<a id="schema_UpdateSimulationApplicationResponse"></a>
<a id="tocSupdatesimulationapplicationresponse"></a>
<a id="tocsupdatesimulationapplicationresponse"></a>

```json
{
  "arn": {},
  "name": {},
  "version": {},
  "sources": {},
  "simulationSoftwareSuite": {
    "name": {},
    "version": {}
  },
  "robotSoftwareSuite": {
    "name": {},
    "version": {}
  },
  "renderingEngine": {
    "name": {},
    "version": {}
  },
  "lastUpdatedAt": {},
  "revisionId": {},
  "environment": {
    "uri": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|name|object|false|none|none|
|version|object|false|none|none|
|sources|object|false|none|none|
|simulationSoftwareSuite|object|false|none|none|
|robotSoftwareSuite|object|false|none|none|
|renderingEngine|object|false|none|none|
|lastUpdatedAt|object|false|none|none|
|revisionId|object|false|none|none|
|environment|object|false|none|none|

<h2 id="tocS_UpdateWorldTemplateResponse">UpdateWorldTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateworldtemplateresponse"></a>
<a id="schema_UpdateWorldTemplateResponse"></a>
<a id="tocSupdateworldtemplateresponse"></a>
<a id="tocsupdateworldtemplateresponse"></a>

```json
{
  "arn": {},
  "name": {},
  "createdAt": {},
  "lastUpdatedAt": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|name|object|false|none|none|
|createdAt|object|false|none|none|
|lastUpdatedAt|object|false|none|none|

<h2 id="tocS_Architecture">Architecture</h2>
<!-- backwards compatibility -->
<a id="schemaarchitecture"></a>
<a id="schema_Architecture"></a>
<a id="tocSarchitecture"></a>
<a id="tocsarchitecture"></a>

```json
"X86_64"
```

<h2 id="tocS_Arns">Arns</h2>
<!-- backwards compatibility -->
<a id="schemaarns"></a>
<a id="schema_Arns"></a>
<a id="tocSarns"></a>
<a id="tocsarns"></a>

```json
[
  "string"
]
```

<h2 id="tocS_BatchDeleteWorldsRequest">BatchDeleteWorldsRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeleteworldsrequest"></a>
<a id="schema_BatchDeleteWorldsRequest"></a>
<a id="tocSbatchdeleteworldsrequest"></a>
<a id="tocsbatchdeleteworldsrequest"></a>

```json
{
  "worlds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|worlds|object|true|none|none|

<h2 id="tocS_BatchDescribeSimulationJobRequest">BatchDescribeSimulationJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchdescribesimulationjobrequest"></a>
<a id="schema_BatchDescribeSimulationJobRequest"></a>
<a id="tocSbatchdescribesimulationjobrequest"></a>
<a id="tocsbatchdescribesimulationjobrequest"></a>

```json
{
  "jobs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobs|object|true|none|none|

<h2 id="tocS_SimulationJobs">SimulationJobs</h2>
<!-- backwards compatibility -->
<a id="schemasimulationjobs"></a>
<a id="schema_SimulationJobs"></a>
<a id="tocSsimulationjobs"></a>
<a id="tocssimulationjobs"></a>

```json
[
  {
    "arn": {},
    "name": {},
    "status": {},
    "lastStartedAt": {},
    "lastUpdatedAt": {},
    "failureBehavior": {},
    "failureCode": {},
    "failureReason": {},
    "clientRequestToken": {},
    "outputLocation": {
      "s3Bucket": {},
      "s3Prefix": {}
    },
    "loggingConfig": {
      "recordAllRosTopics": {}
    },
    "maxJobDurationInSeconds": {},
    "simulationTimeMillis": {},
    "iamRole": {},
    "robotApplications": {},
    "simulationApplications": {},
    "dataSources": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "vpcConfig": {
      "subnets": {},
      "securityGroups": {},
      "vpcId": {},
      "assignPublicIp": {}
    },
    "networkInterface": {
      "networkInterfaceId": {},
      "privateIpAddress": {},
      "publicIpAddress": {}
    },
    "compute": {
      "simulationUnitLimit": {},
      "computeType": {},
      "gpuUnitLimit": {}
    }
  }
]
```

<h2 id="tocS_BatchPolicy">BatchPolicy</h2>
<!-- backwards compatibility -->
<a id="schemabatchpolicy"></a>
<a id="schema_BatchPolicy"></a>
<a id="tocSbatchpolicy"></a>
<a id="tocsbatchpolicy"></a>

```json
{
  "timeoutInSeconds": {},
  "maxConcurrency": {}
}
```

Information about the batch policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timeoutInSeconds|object|false|none|none|
|maxConcurrency|object|false|none|none|

<h2 id="tocS_CancelDeploymentJobRequest">CancelDeploymentJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacanceldeploymentjobrequest"></a>
<a id="schema_CancelDeploymentJobRequest"></a>
<a id="tocScanceldeploymentjobrequest"></a>
<a id="tocscanceldeploymentjobrequest"></a>

```json
{
  "job": {}
}
```

Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|object|true|none|none|

<h2 id="tocS_CancelSimulationJobBatchRequest">CancelSimulationJobBatchRequest</h2>
<!-- backwards compatibility -->
<a id="schemacancelsimulationjobbatchrequest"></a>
<a id="schema_CancelSimulationJobBatchRequest"></a>
<a id="tocScancelsimulationjobbatchrequest"></a>
<a id="tocscancelsimulationjobbatchrequest"></a>

```json
{
  "batch": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batch|object|true|none|none|

<h2 id="tocS_CancelSimulationJobRequest">CancelSimulationJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacancelsimulationjobrequest"></a>
<a id="schema_CancelSimulationJobRequest"></a>
<a id="tocScancelsimulationjobrequest"></a>
<a id="tocscancelsimulationjobrequest"></a>

```json
{
  "job": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|object|true|none|none|

<h2 id="tocS_CancelWorldExportJobRequest">CancelWorldExportJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacancelworldexportjobrequest"></a>
<a id="schema_CancelWorldExportJobRequest"></a>
<a id="tocScancelworldexportjobrequest"></a>
<a id="tocscancelworldexportjobrequest"></a>

```json
{
  "job": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|object|true|none|none|

<h2 id="tocS_CancelWorldGenerationJobRequest">CancelWorldGenerationJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacancelworldgenerationjobrequest"></a>
<a id="schema_CancelWorldGenerationJobRequest"></a>
<a id="tocScancelworldgenerationjobrequest"></a>
<a id="tocscancelworldgenerationjobrequest"></a>

```json
{
  "job": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|object|true|none|none|

<h2 id="tocS_ClientRequestToken">ClientRequestToken</h2>
<!-- backwards compatibility -->
<a id="schemaclientrequesttoken"></a>
<a id="schema_ClientRequestToken"></a>
<a id="tocSclientrequesttoken"></a>
<a id="tocsclientrequesttoken"></a>

```json
"string"
```

<h2 id="tocS_Command">Command</h2>
<!-- backwards compatibility -->
<a id="schemacommand"></a>
<a id="schema_Command"></a>
<a id="tocScommand"></a>
<a id="tocscommand"></a>

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

<h2 id="tocS_CommandList">CommandList</h2>
<!-- backwards compatibility -->
<a id="schemacommandlist"></a>
<a id="schema_CommandList"></a>
<a id="tocScommandlist"></a>
<a id="tocscommandlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Compute">Compute</h2>
<!-- backwards compatibility -->
<a id="schemacompute"></a>
<a id="schema_Compute"></a>
<a id="tocScompute"></a>
<a id="tocscompute"></a>

```json
{
  "simulationUnitLimit": {},
  "computeType": {},
  "gpuUnitLimit": {}
}
```

Compute information for the simulation job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|simulationUnitLimit|object|false|none|none|
|computeType|object|false|none|none|
|gpuUnitLimit|object|false|none|none|

<h2 id="tocS_ComputeResponse">ComputeResponse</h2>
<!-- backwards compatibility -->
<a id="schemacomputeresponse"></a>
<a id="schema_ComputeResponse"></a>
<a id="tocScomputeresponse"></a>
<a id="tocscomputeresponse"></a>

```json
{
  "simulationUnitLimit": {},
  "computeType": {},
  "gpuUnitLimit": {}
}
```

Compute information for the simulation job

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|simulationUnitLimit|object|false|none|none|
|computeType|object|false|none|none|
|gpuUnitLimit|object|false|none|none|

<h2 id="tocS_DeploymentConfig">DeploymentConfig</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentconfig"></a>
<a id="schema_DeploymentConfig"></a>
<a id="tocSdeploymentconfig"></a>
<a id="tocsdeploymentconfig"></a>

```json
{
  "concurrentDeploymentPercentage": {},
  "failureThresholdPercentage": {},
  "robotDeploymentTimeoutInSeconds": {},
  "downloadConditionFile": {
    "bucket": {},
    "key": {},
    "etag": {}
  }
}
```

Information about a deployment configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|concurrentDeploymentPercentage|object|false|none|none|
|failureThresholdPercentage|object|false|none|none|
|robotDeploymentTimeoutInSeconds|object|false|none|none|
|downloadConditionFile|object|false|none|none|

<h2 id="tocS_DeploymentApplicationConfigs">DeploymentApplicationConfigs</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentapplicationconfigs"></a>
<a id="schema_DeploymentApplicationConfigs"></a>
<a id="tocSdeploymentapplicationconfigs"></a>
<a id="tocsdeploymentapplicationconfigs"></a>

```json
[
  {
    "application": {},
    "applicationVersion": {},
    "launchConfig": {
      "packageName": {},
      "preLaunchFile": {},
      "launchFile": {},
      "postLaunchFile": {},
      "environmentVariables": {
        "property1": "string",
        "property2": "string"
      }
    }
  }
]
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

<h2 id="tocS_CreateDeploymentJobRequest">CreateDeploymentJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedeploymentjobrequest"></a>
<a id="schema_CreateDeploymentJobRequest"></a>
<a id="tocScreatedeploymentjobrequest"></a>
<a id="tocscreatedeploymentjobrequest"></a>

```json
{
  "deploymentConfig": {
    "concurrentDeploymentPercentage": {},
    "failureThresholdPercentage": {},
    "robotDeploymentTimeoutInSeconds": {},
    "downloadConditionFile": {
      "bucket": {},
      "key": {},
      "etag": {}
    }
  },
  "clientRequestToken": {},
  "fleet": {},
  "deploymentApplicationConfigs": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

AWS RoboMaker is unable to process this request as the support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploymentConfig|object|false|none|none|
|clientRequestToken|object|true|none|none|
|fleet|object|true|none|none|
|deploymentApplicationConfigs|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_DeploymentStatus">DeploymentStatus</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentstatus"></a>
<a id="schema_DeploymentStatus"></a>
<a id="tocSdeploymentstatus"></a>
<a id="tocsdeploymentstatus"></a>

```json
"Pending"
```

<h2 id="tocS_GenericString">GenericString</h2>
<!-- backwards compatibility -->
<a id="schemagenericstring"></a>
<a id="schema_GenericString"></a>
<a id="tocSgenericstring"></a>
<a id="tocsgenericstring"></a>

```json
"string"
```

<h2 id="tocS_DeploymentJobErrorCode">DeploymentJobErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentjoberrorcode"></a>
<a id="schema_DeploymentJobErrorCode"></a>
<a id="tocSdeploymentjoberrorcode"></a>
<a id="tocsdeploymentjoberrorcode"></a>

```json
"ResourceNotFound"
```

<h2 id="tocS_CreatedAt">CreatedAt</h2>
<!-- backwards compatibility -->
<a id="schemacreatedat"></a>
<a id="schema_CreatedAt"></a>
<a id="tocScreatedat"></a>
<a id="tocscreatedat"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_Name">Name</h2>
<!-- backwards compatibility -->
<a id="schemaname"></a>
<a id="schema_Name"></a>
<a id="tocSname"></a>
<a id="tocsname"></a>

```json
"string"
```

<h2 id="tocS_CreateFleetRequest">CreateFleetRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatefleetrequest"></a>
<a id="schema_CreateFleetRequest"></a>
<a id="tocScreatefleetrequest"></a>
<a id="tocscreatefleetrequest"></a>

```json
{
  "name": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

AWS RoboMaker is unable to process this request as the support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_SourceConfigs">SourceConfigs</h2>
<!-- backwards compatibility -->
<a id="schemasourceconfigs"></a>
<a id="schema_SourceConfigs"></a>
<a id="tocSsourceconfigs"></a>
<a id="tocssourceconfigs"></a>

```json
[
  {
    "s3Bucket": {},
    "s3Key": {},
    "architecture": {}
  }
]
```

<h2 id="tocS_RobotSoftwareSuite">RobotSoftwareSuite</h2>
<!-- backwards compatibility -->
<a id="schemarobotsoftwaresuite"></a>
<a id="schema_RobotSoftwareSuite"></a>
<a id="tocSrobotsoftwaresuite"></a>
<a id="tocsrobotsoftwaresuite"></a>

```json
{
  "name": {},
  "version": {}
}
```

Information about a robot software suite (ROS distribution).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|version|object|false|none|none|

<h2 id="tocS_Environment">Environment</h2>
<!-- backwards compatibility -->
<a id="schemaenvironment"></a>
<a id="schema_Environment"></a>
<a id="tocSenvironment"></a>
<a id="tocsenvironment"></a>

```json
{
  "uri": {}
}
```

The object that contains the Docker image URI for either your robot or simulation applications.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uri|object|false|none|none|

<h2 id="tocS_CreateRobotApplicationRequest">CreateRobotApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreaterobotapplicationrequest"></a>
<a id="schema_CreateRobotApplicationRequest"></a>
<a id="tocScreaterobotapplicationrequest"></a>
<a id="tocscreaterobotapplicationrequest"></a>

```json
{
  "name": {},
  "sources": {},
  "robotSoftwareSuite": {
    "name": {},
    "version": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "environment": {
    "uri": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|sources|object|false|none|none|
|robotSoftwareSuite|object|true|none|none|
|tags|object|false|none|none|
|environment|object|false|none|none|

<h2 id="tocS_Version">Version</h2>
<!-- backwards compatibility -->
<a id="schemaversion"></a>
<a id="schema_Version"></a>
<a id="tocSversion"></a>
<a id="tocsversion"></a>

```json
"string"
```

<h2 id="tocS_Sources">Sources</h2>
<!-- backwards compatibility -->
<a id="schemasources"></a>
<a id="schema_Sources"></a>
<a id="tocSsources"></a>
<a id="tocssources"></a>

```json
[
  {
    "s3Bucket": {},
    "s3Key": {},
    "etag": {},
    "architecture": {}
  }
]
```

<h2 id="tocS_LastUpdatedAt">LastUpdatedAt</h2>
<!-- backwards compatibility -->
<a id="schemalastupdatedat"></a>
<a id="schema_LastUpdatedAt"></a>
<a id="tocSlastupdatedat"></a>
<a id="tocslastupdatedat"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_RevisionId">RevisionId</h2>
<!-- backwards compatibility -->
<a id="schemarevisionid"></a>
<a id="schema_RevisionId"></a>
<a id="tocSrevisionid"></a>
<a id="tocsrevisionid"></a>

```json
"string"
```

<h2 id="tocS_S3Etags">S3Etags</h2>
<!-- backwards compatibility -->
<a id="schemas3etags"></a>
<a id="schema_S3Etags"></a>
<a id="tocSs3etags"></a>
<a id="tocss3etags"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ImageDigest">ImageDigest</h2>
<!-- backwards compatibility -->
<a id="schemaimagedigest"></a>
<a id="schema_ImageDigest"></a>
<a id="tocSimagedigest"></a>
<a id="tocsimagedigest"></a>

```json
"string"
```

<h2 id="tocS_CreateRobotApplicationVersionRequest">CreateRobotApplicationVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreaterobotapplicationversionrequest"></a>
<a id="schema_CreateRobotApplicationVersionRequest"></a>
<a id="tocScreaterobotapplicationversionrequest"></a>
<a id="tocscreaterobotapplicationversionrequest"></a>

```json
{
  "application": {},
  "currentRevisionId": {},
  "s3Etags": {},
  "imageDigest": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|application|object|true|none|none|
|currentRevisionId|object|false|none|none|
|s3Etags|object|false|none|none|
|imageDigest|object|false|none|none|

<h2 id="tocS_Id">Id</h2>
<!-- backwards compatibility -->
<a id="schemaid"></a>
<a id="schema_Id"></a>
<a id="tocSid"></a>
<a id="tocsid"></a>

```json
"string"
```

<h2 id="tocS_CreateRobotRequest">CreateRobotRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreaterobotrequest"></a>
<a id="schema_CreateRobotRequest"></a>
<a id="tocScreaterobotrequest"></a>
<a id="tocscreaterobotrequest"></a>

```json
{
  "name": {},
  "architecture": {},
  "greengrassGroupId": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

AWS RoboMaker is unable to process this request as the support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|architecture|object|true|none|none|
|greengrassGroupId|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_SimulationSoftwareSuite">SimulationSoftwareSuite</h2>
<!-- backwards compatibility -->
<a id="schemasimulationsoftwaresuite"></a>
<a id="schema_SimulationSoftwareSuite"></a>
<a id="tocSsimulationsoftwaresuite"></a>
<a id="tocssimulationsoftwaresuite"></a>

```json
{
  "name": {},
  "version": {}
}
```

Information about a simulation software suite.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|version|object|false|none|none|

<h2 id="tocS_RenderingEngine">RenderingEngine</h2>
<!-- backwards compatibility -->
<a id="schemarenderingengine"></a>
<a id="schema_RenderingEngine"></a>
<a id="tocSrenderingengine"></a>
<a id="tocsrenderingengine"></a>

```json
{
  "name": {},
  "version": {}
}
```

Information about a rendering engine.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|version|object|false|none|none|

<h2 id="tocS_CreateSimulationApplicationRequest">CreateSimulationApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatesimulationapplicationrequest"></a>
<a id="schema_CreateSimulationApplicationRequest"></a>
<a id="tocScreatesimulationapplicationrequest"></a>
<a id="tocscreatesimulationapplicationrequest"></a>

```json
{
  "name": {},
  "sources": {},
  "simulationSoftwareSuite": {
    "name": {},
    "version": {}
  },
  "robotSoftwareSuite": {
    "name": {},
    "version": {}
  },
  "renderingEngine": {
    "name": {},
    "version": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "environment": {
    "uri": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|sources|object|false|none|none|
|simulationSoftwareSuite|object|true|none|none|
|robotSoftwareSuite|object|true|none|none|
|renderingEngine|object|false|none|none|
|tags|object|false|none|none|
|environment|object|false|none|none|

<h2 id="tocS_CreateSimulationApplicationVersionRequest">CreateSimulationApplicationVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatesimulationapplicationversionrequest"></a>
<a id="schema_CreateSimulationApplicationVersionRequest"></a>
<a id="tocScreatesimulationapplicationversionrequest"></a>
<a id="tocscreatesimulationapplicationversionrequest"></a>

```json
{
  "application": {},
  "currentRevisionId": {},
  "s3Etags": {},
  "imageDigest": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|application|object|true|none|none|
|currentRevisionId|object|false|none|none|
|s3Etags|object|false|none|none|
|imageDigest|object|false|none|none|

<h2 id="tocS_OutputLocation">OutputLocation</h2>
<!-- backwards compatibility -->
<a id="schemaoutputlocation"></a>
<a id="schema_OutputLocation"></a>
<a id="tocSoutputlocation"></a>
<a id="tocsoutputlocation"></a>

```json
{
  "s3Bucket": {},
  "s3Prefix": {}
}
```

The output location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|s3Bucket|object|false|none|none|
|s3Prefix|object|false|none|none|

<h2 id="tocS_LoggingConfig">LoggingConfig</h2>
<!-- backwards compatibility -->
<a id="schemaloggingconfig"></a>
<a id="schema_LoggingConfig"></a>
<a id="tocSloggingconfig"></a>
<a id="tocsloggingconfig"></a>

```json
{
  "recordAllRosTopics": {}
}
```

The logging configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recordAllRosTopics|object|false|none|none|

<h2 id="tocS_JobDuration">JobDuration</h2>
<!-- backwards compatibility -->
<a id="schemajobduration"></a>
<a id="schema_JobDuration"></a>
<a id="tocSjobduration"></a>
<a id="tocsjobduration"></a>

```json
0
```

<h2 id="tocS_IamRole">IamRole</h2>
<!-- backwards compatibility -->
<a id="schemaiamrole"></a>
<a id="schema_IamRole"></a>
<a id="tocSiamrole"></a>
<a id="tocsiamrole"></a>

```json
"string"
```

<h2 id="tocS_FailureBehavior">FailureBehavior</h2>
<!-- backwards compatibility -->
<a id="schemafailurebehavior"></a>
<a id="schema_FailureBehavior"></a>
<a id="tocSfailurebehavior"></a>
<a id="tocsfailurebehavior"></a>

```json
"Fail"
```

<h2 id="tocS_RobotApplicationConfigs">RobotApplicationConfigs</h2>
<!-- backwards compatibility -->
<a id="schemarobotapplicationconfigs"></a>
<a id="schema_RobotApplicationConfigs"></a>
<a id="tocSrobotapplicationconfigs"></a>
<a id="tocsrobotapplicationconfigs"></a>

```json
[
  {
    "application": {},
    "applicationVersion": {},
    "launchConfig": {
      "packageName": {},
      "launchFile": {},
      "environmentVariables": {
        "property1": "string",
        "property2": "string"
      },
      "portForwardingConfig": {
        "portMappings": {}
      },
      "streamUI": {},
      "command": {}
    },
    "uploadConfigurations": {},
    "useDefaultUploadConfigurations": {},
    "tools": {},
    "useDefaultTools": {}
  }
]
```

<h2 id="tocS_SimulationApplicationConfigs">SimulationApplicationConfigs</h2>
<!-- backwards compatibility -->
<a id="schemasimulationapplicationconfigs"></a>
<a id="schema_SimulationApplicationConfigs"></a>
<a id="tocSsimulationapplicationconfigs"></a>
<a id="tocssimulationapplicationconfigs"></a>

```json
[
  {
    "application": {},
    "applicationVersion": {},
    "launchConfig": {
      "packageName": {},
      "launchFile": {},
      "environmentVariables": {
        "property1": "string",
        "property2": "string"
      },
      "portForwardingConfig": {
        "portMappings": {}
      },
      "streamUI": {},
      "command": {}
    },
    "uploadConfigurations": {},
    "worldConfigs": {},
    "useDefaultUploadConfigurations": {},
    "tools": {},
    "useDefaultTools": {}
  }
]
```

<h2 id="tocS_DataSourceConfigs">DataSourceConfigs</h2>
<!-- backwards compatibility -->
<a id="schemadatasourceconfigs"></a>
<a id="schema_DataSourceConfigs"></a>
<a id="tocSdatasourceconfigs"></a>
<a id="tocsdatasourceconfigs"></a>

```json
[
  {
    "name": {},
    "s3Bucket": {},
    "s3Keys": {},
    "type": {},
    "destination": {}
  }
]
```

<h2 id="tocS_VPCConfig">VPCConfig</h2>
<!-- backwards compatibility -->
<a id="schemavpcconfig"></a>
<a id="schema_VPCConfig"></a>
<a id="tocSvpcconfig"></a>
<a id="tocsvpcconfig"></a>

```json
{
  "subnets": {},
  "securityGroups": {},
  "assignPublicIp": {}
}
```

If your simulation job accesses resources in a VPC, you provide this parameter identifying the list of security group IDs and subnet IDs. These must belong to the same VPC. You must provide at least one security group and two subnet IDs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subnets|object|true|none|none|
|securityGroups|object|false|none|none|
|assignPublicIp|object|false|none|none|

<h2 id="tocS_CreateSimulationJobRequest">CreateSimulationJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatesimulationjobrequest"></a>
<a id="schema_CreateSimulationJobRequest"></a>
<a id="tocScreatesimulationjobrequest"></a>
<a id="tocscreatesimulationjobrequest"></a>

```json
{
  "clientRequestToken": {},
  "outputLocation": {
    "s3Bucket": {},
    "s3Prefix": {}
  },
  "loggingConfig": {
    "recordAllRosTopics": {}
  },
  "maxJobDurationInSeconds": {},
  "iamRole": {},
  "failureBehavior": {},
  "robotApplications": {},
  "simulationApplications": {},
  "dataSources": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "vpcConfig": {
    "subnets": {},
    "securityGroups": {},
    "assignPublicIp": {}
  },
  "compute": {
    "simulationUnitLimit": {},
    "computeType": {},
    "gpuUnitLimit": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientRequestToken|object|false|none|none|
|outputLocation|object|false|none|none|
|loggingConfig|object|false|none|none|
|maxJobDurationInSeconds|object|true|none|none|
|iamRole|object|true|none|none|
|failureBehavior|object|false|none|none|
|robotApplications|object|false|none|none|
|simulationApplications|object|false|none|none|
|dataSources|object|false|none|none|
|tags|object|false|none|none|
|vpcConfig|object|false|none|none|
|compute|object|false|none|none|

<h2 id="tocS_CreateSimulationJobRequests">CreateSimulationJobRequests</h2>
<!-- backwards compatibility -->
<a id="schemacreatesimulationjobrequests"></a>
<a id="schema_CreateSimulationJobRequests"></a>
<a id="tocScreatesimulationjobrequests"></a>
<a id="tocscreatesimulationjobrequests"></a>

```json
[
  {
    "outputLocation": {
      "s3Bucket": {},
      "s3Prefix": {}
    },
    "loggingConfig": {
      "recordAllRosTopics": {}
    },
    "maxJobDurationInSeconds": {},
    "iamRole": {},
    "failureBehavior": {},
    "useDefaultApplications": {},
    "robotApplications": {},
    "simulationApplications": {},
    "dataSources": {},
    "vpcConfig": {
      "subnets": {},
      "securityGroups": {},
      "assignPublicIp": {}
    },
    "compute": {
      "simulationUnitLimit": {},
      "computeType": {},
      "gpuUnitLimit": {}
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_SimulationJobStatus">SimulationJobStatus</h2>
<!-- backwards compatibility -->
<a id="schemasimulationjobstatus"></a>
<a id="schema_SimulationJobStatus"></a>
<a id="tocSsimulationjobstatus"></a>
<a id="tocssimulationjobstatus"></a>

```json
"Pending"
```

<h2 id="tocS_LastStartedAt">LastStartedAt</h2>
<!-- backwards compatibility -->
<a id="schemalaststartedat"></a>
<a id="schema_LastStartedAt"></a>
<a id="tocSlaststartedat"></a>
<a id="tocslaststartedat"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_SimulationJobErrorCode">SimulationJobErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemasimulationjoberrorcode"></a>
<a id="schema_SimulationJobErrorCode"></a>
<a id="tocSsimulationjoberrorcode"></a>
<a id="tocssimulationjoberrorcode"></a>

```json
"InternalServiceError"
```

<h2 id="tocS_SimulationTimeMillis">SimulationTimeMillis</h2>
<!-- backwards compatibility -->
<a id="schemasimulationtimemillis"></a>
<a id="schema_SimulationTimeMillis"></a>
<a id="tocSsimulationtimemillis"></a>
<a id="tocssimulationtimemillis"></a>

```json
0
```

<h2 id="tocS_DataSources">DataSources</h2>
<!-- backwards compatibility -->
<a id="schemadatasources"></a>
<a id="schema_DataSources"></a>
<a id="tocSdatasources"></a>
<a id="tocsdatasources"></a>

```json
[
  {
    "name": {},
    "s3Bucket": {},
    "s3Keys": {},
    "type": {},
    "destination": {}
  }
]
```

<h2 id="tocS_VPCConfigResponse">VPCConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemavpcconfigresponse"></a>
<a id="schema_VPCConfigResponse"></a>
<a id="tocSvpcconfigresponse"></a>
<a id="tocsvpcconfigresponse"></a>

```json
{
  "subnets": {},
  "securityGroups": {},
  "vpcId": {},
  "assignPublicIp": {}
}
```

VPC configuration associated with your simulation job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subnets|object|false|none|none|
|securityGroups|object|false|none|none|
|vpcId|object|false|none|none|
|assignPublicIp|object|false|none|none|

<h2 id="tocS_CreateWorldExportJobRequest">CreateWorldExportJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateworldexportjobrequest"></a>
<a id="schema_CreateWorldExportJobRequest"></a>
<a id="tocScreateworldexportjobrequest"></a>
<a id="tocscreateworldexportjobrequest"></a>

```json
{
  "clientRequestToken": {},
  "worlds": {},
  "outputLocation": {
    "s3Bucket": {},
    "s3Prefix": {}
  },
  "iamRole": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientRequestToken|object|false|none|none|
|worlds|object|true|none|none|
|outputLocation|[OutputLocation](#schemaoutputlocation)|true|none|The output location.|
|iamRole|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_WorldExportJobStatus">WorldExportJobStatus</h2>
<!-- backwards compatibility -->
<a id="schemaworldexportjobstatus"></a>
<a id="schema_WorldExportJobStatus"></a>
<a id="tocSworldexportjobstatus"></a>
<a id="tocsworldexportjobstatus"></a>

```json
"Pending"
```

<h2 id="tocS_WorldExportJobErrorCode">WorldExportJobErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemaworldexportjoberrorcode"></a>
<a id="schema_WorldExportJobErrorCode"></a>
<a id="tocSworldexportjoberrorcode"></a>
<a id="tocsworldexportjoberrorcode"></a>

```json
"InternalServiceError"
```

<h2 id="tocS_WorldCount">WorldCount</h2>
<!-- backwards compatibility -->
<a id="schemaworldcount"></a>
<a id="schema_WorldCount"></a>
<a id="tocSworldcount"></a>
<a id="tocsworldcount"></a>

```json
{
  "floorplanCount": {},
  "interiorCountPerFloorplan": {}
}
```

<p>The number of worlds that will be created. You can configure the number of unique floorplans and the number of unique interiors for each floor plan. For example, if you want 1 world with 20 unique interiors, you set <code>floorplanCount = 1</code> and <code>interiorCountPerFloorplan = 20</code>. This will result in 20 worlds (<code>floorplanCount</code> * <code>interiorCountPerFloorplan)</code>. </p> <p>If you set <code>floorplanCount = 4</code> and <code>interiorCountPerFloorplan = 5</code>, there will be 20 worlds with 5 unique floor plans. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|floorplanCount|object|false|none|none|
|interiorCountPerFloorplan|object|false|none|none|

<h2 id="tocS_CreateWorldGenerationJobRequest">CreateWorldGenerationJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateworldgenerationjobrequest"></a>
<a id="schema_CreateWorldGenerationJobRequest"></a>
<a id="tocScreateworldgenerationjobrequest"></a>
<a id="tocscreateworldgenerationjobrequest"></a>

```json
{
  "clientRequestToken": {},
  "template": {},
  "worldCount": {
    "floorplanCount": {},
    "interiorCountPerFloorplan": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "worldTags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientRequestToken|object|false|none|none|
|template|object|true|none|none|
|worldCount|object|true|none|none|
|tags|object|false|none|none|
|worldTags|object|false|none|none|

<h2 id="tocS_WorldGenerationJobStatus">WorldGenerationJobStatus</h2>
<!-- backwards compatibility -->
<a id="schemaworldgenerationjobstatus"></a>
<a id="schema_WorldGenerationJobStatus"></a>
<a id="tocSworldgenerationjobstatus"></a>
<a id="tocsworldgenerationjobstatus"></a>

```json
"Pending"
```

<h2 id="tocS_WorldGenerationJobErrorCode">WorldGenerationJobErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemaworldgenerationjoberrorcode"></a>
<a id="schema_WorldGenerationJobErrorCode"></a>
<a id="tocSworldgenerationjoberrorcode"></a>
<a id="tocsworldgenerationjoberrorcode"></a>

```json
"InternalServiceError"
```

<h2 id="tocS_TemplateName">TemplateName</h2>
<!-- backwards compatibility -->
<a id="schematemplatename"></a>
<a id="schema_TemplateName"></a>
<a id="tocStemplatename"></a>
<a id="tocstemplatename"></a>

```json
"string"
```

<h2 id="tocS_Json">Json</h2>
<!-- backwards compatibility -->
<a id="schemajson"></a>
<a id="schema_Json"></a>
<a id="tocSjson"></a>
<a id="tocsjson"></a>

```json
"string"
```

<h2 id="tocS_TemplateLocation">TemplateLocation</h2>
<!-- backwards compatibility -->
<a id="schematemplatelocation"></a>
<a id="schema_TemplateLocation"></a>
<a id="tocStemplatelocation"></a>
<a id="tocstemplatelocation"></a>

```json
{
  "s3Bucket": {},
  "s3Key": {}
}
```

Information about a template location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|s3Bucket|object|true|none|none|
|s3Key|object|true|none|none|

<h2 id="tocS_CreateWorldTemplateRequest">CreateWorldTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateworldtemplaterequest"></a>
<a id="schema_CreateWorldTemplateRequest"></a>
<a id="tocScreateworldtemplaterequest"></a>
<a id="tocscreateworldtemplaterequest"></a>

```json
{
  "clientRequestToken": {},
  "name": {},
  "templateBody": {},
  "templateLocation": {
    "s3Bucket": {},
    "s3Key": {}
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
|clientRequestToken|object|false|none|none|
|name|object|false|none|none|
|templateBody|object|false|none|none|
|templateLocation|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_S3KeyOutputs">S3KeyOutputs</h2>
<!-- backwards compatibility -->
<a id="schemas3keyoutputs"></a>
<a id="schema_S3KeyOutputs"></a>
<a id="tocSs3keyoutputs"></a>
<a id="tocss3keyoutputs"></a>

```json
[
  {
    "s3Key": {},
    "etag": {}
  }
]
```

<h2 id="tocS_DataSourceType">DataSourceType</h2>
<!-- backwards compatibility -->
<a id="schemadatasourcetype"></a>
<a id="schema_DataSourceType"></a>
<a id="tocSdatasourcetype"></a>
<a id="tocsdatasourcetype"></a>

```json
"Prefix"
```

<h2 id="tocS_Path">Path</h2>
<!-- backwards compatibility -->
<a id="schemapath"></a>
<a id="schema_Path"></a>
<a id="tocSpath"></a>
<a id="tocspath"></a>

```json
"string"
```

<h2 id="tocS_DataSource">DataSource</h2>
<!-- backwards compatibility -->
<a id="schemadatasource"></a>
<a id="schema_DataSource"></a>
<a id="tocSdatasource"></a>
<a id="tocsdatasource"></a>

```json
{
  "name": {},
  "s3Bucket": {},
  "s3Keys": {},
  "type": {},
  "destination": {}
}
```

Information about a data source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|s3Bucket|object|false|none|none|
|s3Keys|object|false|none|none|
|type|object|false|none|none|
|destination|object|false|none|none|

<h2 id="tocS_S3KeysOrPrefixes">S3KeysOrPrefixes</h2>
<!-- backwards compatibility -->
<a id="schemas3keysorprefixes"></a>
<a id="schema_S3KeysOrPrefixes"></a>
<a id="tocSs3keysorprefixes"></a>
<a id="tocss3keysorprefixes"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DataSourceNames">DataSourceNames</h2>
<!-- backwards compatibility -->
<a id="schemadatasourcenames"></a>
<a id="schema_DataSourceNames"></a>
<a id="tocSdatasourcenames"></a>
<a id="tocsdatasourcenames"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DeleteFleetRequest">DeleteFleetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletefleetrequest"></a>
<a id="schema_DeleteFleetRequest"></a>
<a id="tocSdeletefleetrequest"></a>
<a id="tocsdeletefleetrequest"></a>

```json
{
  "fleet": {}
}
```

Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fleet|object|true|none|none|

<h2 id="tocS_DeleteRobotApplicationRequest">DeleteRobotApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleterobotapplicationrequest"></a>
<a id="schema_DeleteRobotApplicationRequest"></a>
<a id="tocSdeleterobotapplicationrequest"></a>
<a id="tocsdeleterobotapplicationrequest"></a>

```json
{
  "application": {},
  "applicationVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|application|object|true|none|none|
|applicationVersion|object|false|none|none|

<h2 id="tocS_DeleteRobotRequest">DeleteRobotRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleterobotrequest"></a>
<a id="schema_DeleteRobotRequest"></a>
<a id="tocSdeleterobotrequest"></a>
<a id="tocsdeleterobotrequest"></a>

```json
{
  "robot": {}
}
```

Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|robot|object|true|none|none|

<h2 id="tocS_DeleteSimulationApplicationRequest">DeleteSimulationApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletesimulationapplicationrequest"></a>
<a id="schema_DeleteSimulationApplicationRequest"></a>
<a id="tocSdeletesimulationapplicationrequest"></a>
<a id="tocsdeletesimulationapplicationrequest"></a>

```json
{
  "application": {},
  "applicationVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|application|object|true|none|none|
|applicationVersion|object|false|none|none|

<h2 id="tocS_DeleteWorldTemplateRequest">DeleteWorldTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteworldtemplaterequest"></a>
<a id="schema_DeleteWorldTemplateRequest"></a>
<a id="tocSdeleteworldtemplaterequest"></a>
<a id="tocsdeleteworldtemplaterequest"></a>

```json
{
  "template": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|template|object|true|none|none|

<h2 id="tocS_DeploymentVersion">DeploymentVersion</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentversion"></a>
<a id="schema_DeploymentVersion"></a>
<a id="tocSdeploymentversion"></a>
<a id="tocsdeploymentversion"></a>

```json
"string"
```

<h2 id="tocS_DeploymentLaunchConfig">DeploymentLaunchConfig</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentlaunchconfig"></a>
<a id="schema_DeploymentLaunchConfig"></a>
<a id="tocSdeploymentlaunchconfig"></a>
<a id="tocsdeploymentlaunchconfig"></a>

```json
{
  "packageName": {},
  "preLaunchFile": {},
  "launchFile": {},
  "postLaunchFile": {},
  "environmentVariables": {
    "property1": "string",
    "property2": "string"
  }
}
```

Configuration information for a deployment launch.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|packageName|object|true|none|none|
|preLaunchFile|object|false|none|none|
|launchFile|object|true|none|none|
|postLaunchFile|object|false|none|none|
|environmentVariables|object|false|none|none|

<h2 id="tocS_DeploymentJob">DeploymentJob</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentjob"></a>
<a id="schema_DeploymentJob"></a>
<a id="tocSdeploymentjob"></a>
<a id="tocsdeploymentjob"></a>

```json
{
  "arn": {},
  "fleet": {},
  "status": {},
  "deploymentApplicationConfigs": {},
  "deploymentConfig": {
    "concurrentDeploymentPercentage": {},
    "failureThresholdPercentage": {},
    "robotDeploymentTimeoutInSeconds": {},
    "downloadConditionFile": {
      "bucket": {},
      "key": {},
      "etag": {}
    }
  },
  "failureReason": {},
  "failureCode": {},
  "createdAt": {}
}
```

Information about a deployment job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|fleet|object|false|none|none|
|status|object|false|none|none|
|deploymentApplicationConfigs|object|false|none|none|
|deploymentConfig|object|false|none|none|
|failureReason|object|false|none|none|
|failureCode|object|false|none|none|
|createdAt|object|false|none|none|

<h2 id="tocS_DeploymentJobs">DeploymentJobs</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentjobs"></a>
<a id="schema_DeploymentJobs"></a>
<a id="tocSdeploymentjobs"></a>
<a id="tocsdeploymentjobs"></a>

```json
[
  {
    "arn": {},
    "fleet": {},
    "status": {},
    "deploymentApplicationConfigs": {},
    "deploymentConfig": {
      "concurrentDeploymentPercentage": {},
      "failureThresholdPercentage": {},
      "robotDeploymentTimeoutInSeconds": {},
      "downloadConditionFile": {
        "bucket": {},
        "key": {},
        "etag": {}
      }
    },
    "failureReason": {},
    "failureCode": {},
    "createdAt": {}
  }
]
```

<h2 id="tocS_EnvironmentVariableMap">EnvironmentVariableMap</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentvariablemap"></a>
<a id="schema_EnvironmentVariableMap"></a>
<a id="tocSenvironmentvariablemap"></a>
<a id="tocsenvironmentvariablemap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[EnvironmentVariableValue](#schemaenvironmentvariablevalue)|false|none|none|

<h2 id="tocS_DeregisterRobotRequest">DeregisterRobotRequest</h2>
<!-- backwards compatibility -->
<a id="schemaderegisterrobotrequest"></a>
<a id="schema_DeregisterRobotRequest"></a>
<a id="tocSderegisterrobotrequest"></a>
<a id="tocsderegisterrobotrequest"></a>

```json
{
  "fleet": {},
  "robot": {}
}
```

Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fleet|object|true|none|none|
|robot|object|true|none|none|

<h2 id="tocS_DescribeDeploymentJobRequest">DescribeDeploymentJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedeploymentjobrequest"></a>
<a id="schema_DescribeDeploymentJobRequest"></a>
<a id="tocSdescribedeploymentjobrequest"></a>
<a id="tocsdescribedeploymentjobrequest"></a>

```json
{
  "job": {}
}
```

Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|object|true|none|none|

<h2 id="tocS_RobotDeploymentSummary">RobotDeploymentSummary</h2>
<!-- backwards compatibility -->
<a id="schemarobotdeploymentsummary"></a>
<a id="schema_RobotDeploymentSummary"></a>
<a id="tocSrobotdeploymentsummary"></a>
<a id="tocsrobotdeploymentsummary"></a>

```json
[
  {
    "arn": {},
    "deploymentStartTime": {},
    "deploymentFinishTime": {},
    "status": {},
    "progressDetail": {
      "currentProgress": {},
      "percentDone": {},
      "estimatedTimeRemainingSeconds": {},
      "targetResource": {}
    },
    "failureReason": {},
    "failureCode": {}
  }
]
```

<h2 id="tocS_DescribeFleetRequest">DescribeFleetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribefleetrequest"></a>
<a id="schema_DescribeFleetRequest"></a>
<a id="tocSdescribefleetrequest"></a>
<a id="tocsdescribefleetrequest"></a>

```json
{
  "fleet": {}
}
```

Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fleet|object|true|none|none|

<h2 id="tocS_Robots">Robots</h2>
<!-- backwards compatibility -->
<a id="schemarobots"></a>
<a id="schema_Robots"></a>
<a id="tocSrobots"></a>
<a id="tocsrobots"></a>

```json
[
  {
    "arn": {},
    "name": {},
    "fleetArn": {},
    "status": {},
    "greenGrassGroupId": {},
    "createdAt": {},
    "architecture": {},
    "lastDeploymentJob": {},
    "lastDeploymentTime": {}
  }
]
```

<h2 id="tocS_DescribeRobotApplicationRequest">DescribeRobotApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescriberobotapplicationrequest"></a>
<a id="schema_DescribeRobotApplicationRequest"></a>
<a id="tocSdescriberobotapplicationrequest"></a>
<a id="tocsdescriberobotapplicationrequest"></a>

```json
{
  "application": {},
  "applicationVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|application|object|true|none|none|
|applicationVersion|object|false|none|none|

<h2 id="tocS_DescribeRobotRequest">DescribeRobotRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescriberobotrequest"></a>
<a id="schema_DescribeRobotRequest"></a>
<a id="tocSdescriberobotrequest"></a>
<a id="tocsdescriberobotrequest"></a>

```json
{
  "robot": {}
}
```

Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|robot|object|true|none|none|

<h2 id="tocS_RobotStatus">RobotStatus</h2>
<!-- backwards compatibility -->
<a id="schemarobotstatus"></a>
<a id="schema_RobotStatus"></a>
<a id="tocSrobotstatus"></a>
<a id="tocsrobotstatus"></a>

```json
"Available"
```

<h2 id="tocS_DescribeSimulationApplicationRequest">DescribeSimulationApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribesimulationapplicationrequest"></a>
<a id="schema_DescribeSimulationApplicationRequest"></a>
<a id="tocSdescribesimulationapplicationrequest"></a>
<a id="tocsdescribesimulationapplicationrequest"></a>

```json
{
  "application": {},
  "applicationVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|application|object|true|none|none|
|applicationVersion|object|false|none|none|

<h2 id="tocS_DescribeSimulationJobBatchRequest">DescribeSimulationJobBatchRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribesimulationjobbatchrequest"></a>
<a id="schema_DescribeSimulationJobBatchRequest"></a>
<a id="tocSdescribesimulationjobbatchrequest"></a>
<a id="tocsdescribesimulationjobbatchrequest"></a>

```json
{
  "batch": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batch|object|true|none|none|

<h2 id="tocS_SimulationJobBatchStatus">SimulationJobBatchStatus</h2>
<!-- backwards compatibility -->
<a id="schemasimulationjobbatchstatus"></a>
<a id="schema_SimulationJobBatchStatus"></a>
<a id="tocSsimulationjobbatchstatus"></a>
<a id="tocssimulationjobbatchstatus"></a>

```json
"Pending"
```

<h2 id="tocS_SimulationJobBatchErrorCode">SimulationJobBatchErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemasimulationjobbatcherrorcode"></a>
<a id="schema_SimulationJobBatchErrorCode"></a>
<a id="tocSsimulationjobbatcherrorcode"></a>
<a id="tocssimulationjobbatcherrorcode"></a>

```json
"InternalServiceError"
```

<h2 id="tocS_FailedCreateSimulationJobRequests">FailedCreateSimulationJobRequests</h2>
<!-- backwards compatibility -->
<a id="schemafailedcreatesimulationjobrequests"></a>
<a id="schema_FailedCreateSimulationJobRequests"></a>
<a id="tocSfailedcreatesimulationjobrequests"></a>
<a id="tocsfailedcreatesimulationjobrequests"></a>

```json
[
  {
    "request": {
      "outputLocation": {
        "s3Bucket": {},
        "s3Prefix": {}
      },
      "loggingConfig": {
        "recordAllRosTopics": {}
      },
      "maxJobDurationInSeconds": {},
      "iamRole": {},
      "failureBehavior": {},
      "useDefaultApplications": {},
      "robotApplications": {},
      "simulationApplications": {},
      "dataSources": {},
      "vpcConfig": {
        "subnets": {},
        "securityGroups": {},
        "assignPublicIp": {}
      },
      "compute": {
        "simulationUnitLimit": {},
        "computeType": {},
        "gpuUnitLimit": {}
      },
      "tags": {
        "property1": "string",
        "property2": "string"
      }
    },
    "failureReason": {},
    "failureCode": {},
    "failedAt": {}
  }
]
```

<h2 id="tocS_SimulationJobSummaries">SimulationJobSummaries</h2>
<!-- backwards compatibility -->
<a id="schemasimulationjobsummaries"></a>
<a id="schema_SimulationJobSummaries"></a>
<a id="tocSsimulationjobsummaries"></a>
<a id="tocssimulationjobsummaries"></a>

```json
[
  {
    "arn": {},
    "lastUpdatedAt": {},
    "name": {},
    "status": {},
    "simulationApplicationNames": {},
    "robotApplicationNames": {},
    "dataSourceNames": {},
    "computeType": {}
  }
]
```

<h2 id="tocS_DescribeSimulationJobRequest">DescribeSimulationJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribesimulationjobrequest"></a>
<a id="schema_DescribeSimulationJobRequest"></a>
<a id="tocSdescribesimulationjobrequest"></a>
<a id="tocsdescribesimulationjobrequest"></a>

```json
{
  "job": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|object|true|none|none|

<h2 id="tocS_NetworkInterface">NetworkInterface</h2>
<!-- backwards compatibility -->
<a id="schemanetworkinterface"></a>
<a id="schema_NetworkInterface"></a>
<a id="tocSnetworkinterface"></a>
<a id="tocsnetworkinterface"></a>

```json
{
  "networkInterfaceId": {},
  "privateIpAddress": {},
  "publicIpAddress": {}
}
```

Describes a network interface.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|networkInterfaceId|object|false|none|none|
|privateIpAddress|object|false|none|none|
|publicIpAddress|object|false|none|none|

<h2 id="tocS_DescribeWorldExportJobRequest">DescribeWorldExportJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeworldexportjobrequest"></a>
<a id="schema_DescribeWorldExportJobRequest"></a>
<a id="tocSdescribeworldexportjobrequest"></a>
<a id="tocsdescribeworldexportjobrequest"></a>

```json
{
  "job": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|object|true|none|none|

<h2 id="tocS_DescribeWorldGenerationJobRequest">DescribeWorldGenerationJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeworldgenerationjobrequest"></a>
<a id="schema_DescribeWorldGenerationJobRequest"></a>
<a id="tocSdescribeworldgenerationjobrequest"></a>
<a id="tocsdescribeworldgenerationjobrequest"></a>

```json
{
  "job": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|object|true|none|none|

<h2 id="tocS_FinishedWorldsSummary">FinishedWorldsSummary</h2>
<!-- backwards compatibility -->
<a id="schemafinishedworldssummary"></a>
<a id="schema_FinishedWorldsSummary"></a>
<a id="tocSfinishedworldssummary"></a>
<a id="tocsfinishedworldssummary"></a>

```json
{
  "finishedCount": {},
  "succeededWorlds": {},
  "failureSummary": {
    "totalFailureCount": {},
    "failures": {}
  }
}
```

Information about worlds that finished.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|finishedCount|object|false|none|none|
|succeededWorlds|object|false|none|none|
|failureSummary|object|false|none|none|

<h2 id="tocS_DescribeWorldRequest">DescribeWorldRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeworldrequest"></a>
<a id="schema_DescribeWorldRequest"></a>
<a id="tocSdescribeworldrequest"></a>
<a id="tocsdescribeworldrequest"></a>

```json
{
  "world": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|world|object|true|none|none|

<h2 id="tocS_DescribeWorldTemplateRequest">DescribeWorldTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeworldtemplaterequest"></a>
<a id="schema_DescribeWorldTemplateRequest"></a>
<a id="tocSdescribeworldtemplaterequest"></a>
<a id="tocsdescribeworldtemplaterequest"></a>

```json
{
  "template": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|template|object|true|none|none|

<h2 id="tocS_EnvironmentVariableKey">EnvironmentVariableKey</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentvariablekey"></a>
<a id="schema_EnvironmentVariableKey"></a>
<a id="tocSenvironmentvariablekey"></a>
<a id="tocsenvironmentvariablekey"></a>

```json
"string"
```

<h2 id="tocS_EnvironmentVariableValue">EnvironmentVariableValue</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentvariablevalue"></a>
<a id="schema_EnvironmentVariableValue"></a>
<a id="tocSenvironmentvariablevalue"></a>
<a id="tocsenvironmentvariablevalue"></a>

```json
"string"
```

<h2 id="tocS_ExitBehavior">ExitBehavior</h2>
<!-- backwards compatibility -->
<a id="schemaexitbehavior"></a>
<a id="schema_ExitBehavior"></a>
<a id="tocSexitbehavior"></a>
<a id="tocsexitbehavior"></a>

```json
"FAIL"
```

<h2 id="tocS_FailedAt">FailedAt</h2>
<!-- backwards compatibility -->
<a id="schemafailedat"></a>
<a id="schema_FailedAt"></a>
<a id="tocSfailedat"></a>
<a id="tocsfailedat"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_FailedCreateSimulationJobRequest">FailedCreateSimulationJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemafailedcreatesimulationjobrequest"></a>
<a id="schema_FailedCreateSimulationJobRequest"></a>
<a id="tocSfailedcreatesimulationjobrequest"></a>
<a id="tocsfailedcreatesimulationjobrequest"></a>

```json
{
  "request": {
    "outputLocation": {
      "s3Bucket": {},
      "s3Prefix": {}
    },
    "loggingConfig": {
      "recordAllRosTopics": {}
    },
    "maxJobDurationInSeconds": {},
    "iamRole": {},
    "failureBehavior": {},
    "useDefaultApplications": {},
    "robotApplications": {},
    "simulationApplications": {},
    "dataSources": {},
    "vpcConfig": {
      "subnets": {},
      "securityGroups": {},
      "assignPublicIp": {}
    },
    "compute": {
      "simulationUnitLimit": {},
      "computeType": {},
      "gpuUnitLimit": {}
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  },
  "failureReason": {},
  "failureCode": {},
  "failedAt": {}
}
```

Information about a failed create simulation job request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|request|object|false|none|none|
|failureReason|object|false|none|none|
|failureCode|object|false|none|none|
|failedAt|object|false|none|none|

<h2 id="tocS_Integer">Integer</h2>
<!-- backwards compatibility -->
<a id="schemainteger"></a>
<a id="schema_Integer"></a>
<a id="tocSinteger"></a>
<a id="tocsinteger"></a>

```json
0
```

<h2 id="tocS_WorldFailures">WorldFailures</h2>
<!-- backwards compatibility -->
<a id="schemaworldfailures"></a>
<a id="schema_WorldFailures"></a>
<a id="tocSworldfailures"></a>
<a id="tocsworldfailures"></a>

```json
[
  {
    "failureCode": {},
    "sampleFailureReason": {},
    "failureCount": {}
  }
]
```

<h2 id="tocS_FailureSummary">FailureSummary</h2>
<!-- backwards compatibility -->
<a id="schemafailuresummary"></a>
<a id="schema_FailureSummary"></a>
<a id="tocSfailuresummary"></a>
<a id="tocsfailuresummary"></a>

```json
{
  "totalFailureCount": {},
  "failures": {}
}
```

Information about worlds that failed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totalFailureCount|object|false|none|none|
|failures|object|false|none|none|

<h2 id="tocS_FilterValues">FilterValues</h2>
<!-- backwards compatibility -->
<a id="schemafiltervalues"></a>
<a id="schema_FilterValues"></a>
<a id="tocSfiltervalues"></a>
<a id="tocsfiltervalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Filters">Filters</h2>
<!-- backwards compatibility -->
<a id="schemafilters"></a>
<a id="schema_Filters"></a>
<a id="tocSfilters"></a>
<a id="tocsfilters"></a>

```json
[
  {
    "name": {},
    "values": {}
  }
]
```

<h2 id="tocS_Fleet">Fleet</h2>
<!-- backwards compatibility -->
<a id="schemafleet"></a>
<a id="schema_Fleet"></a>
<a id="tocSfleet"></a>
<a id="tocsfleet"></a>

```json
{
  "name": {},
  "arn": {},
  "createdAt": {},
  "lastDeploymentStatus": {},
  "lastDeploymentJob": {},
  "lastDeploymentTime": {}
}
```

Information about a fleet.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|arn|object|false|none|none|
|createdAt|object|false|none|none|
|lastDeploymentStatus|object|false|none|none|
|lastDeploymentJob|object|false|none|none|
|lastDeploymentTime|object|false|none|none|

<h2 id="tocS_Fleets">Fleets</h2>
<!-- backwards compatibility -->
<a id="schemafleets"></a>
<a id="schema_Fleets"></a>
<a id="tocSfleets"></a>
<a id="tocsfleets"></a>

```json
[
  {
    "name": {},
    "arn": {},
    "createdAt": {},
    "lastDeploymentStatus": {},
    "lastDeploymentJob": {},
    "lastDeploymentTime": {}
  }
]
```

<h2 id="tocS_GenericInteger">GenericInteger</h2>
<!-- backwards compatibility -->
<a id="schemagenericinteger"></a>
<a id="schema_GenericInteger"></a>
<a id="tocSgenericinteger"></a>
<a id="tocsgenericinteger"></a>

```json
0
```

<h2 id="tocS_GetWorldTemplateBodyRequest">GetWorldTemplateBodyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetworldtemplatebodyrequest"></a>
<a id="schema_GetWorldTemplateBodyRequest"></a>
<a id="tocSgetworldtemplatebodyrequest"></a>
<a id="tocsgetworldtemplatebodyrequest"></a>

```json
{
  "template": {},
  "generationJob": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|template|object|false|none|none|
|generationJob|object|false|none|none|

<h2 id="tocS_PortForwardingConfig">PortForwardingConfig</h2>
<!-- backwards compatibility -->
<a id="schemaportforwardingconfig"></a>
<a id="schema_PortForwardingConfig"></a>
<a id="tocSportforwardingconfig"></a>
<a id="tocsportforwardingconfig"></a>

```json
{
  "portMappings": {}
}
```

Configuration information for port forwarding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|portMappings|object|false|none|none|

<h2 id="tocS_LaunchConfig">LaunchConfig</h2>
<!-- backwards compatibility -->
<a id="schemalaunchconfig"></a>
<a id="schema_LaunchConfig"></a>
<a id="tocSlaunchconfig"></a>
<a id="tocslaunchconfig"></a>

```json
{
  "packageName": {},
  "launchFile": {},
  "environmentVariables": {
    "property1": "string",
    "property2": "string"
  },
  "portForwardingConfig": {
    "portMappings": {}
  },
  "streamUI": {},
  "command": {}
}
```

Information about a launch configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|packageName|object|false|none|none|
|launchFile|object|false|none|none|
|environmentVariables|object|false|none|none|
|portForwardingConfig|object|false|none|none|
|streamUI|object|false|none|none|
|command|object|false|none|none|

<h2 id="tocS_PaginationToken">PaginationToken</h2>
<!-- backwards compatibility -->
<a id="schemapaginationtoken"></a>
<a id="schema_PaginationToken"></a>
<a id="tocSpaginationtoken"></a>
<a id="tocspaginationtoken"></a>

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
0
```

<h2 id="tocS_ListDeploymentJobsRequest">ListDeploymentJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdeploymentjobsrequest"></a>
<a id="schema_ListDeploymentJobsRequest"></a>
<a id="tocSlistdeploymentjobsrequest"></a>
<a id="tocslistdeploymentjobsrequest"></a>

```json
{
  "filters": {},
  "nextToken": {},
  "maxResults": {}
}
```

Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_ListFleetsRequest">ListFleetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistfleetsrequest"></a>
<a id="schema_ListFleetsRequest"></a>
<a id="tocSlistfleetsrequest"></a>
<a id="tocslistfleetsrequest"></a>

```json
{
  "nextToken": {},
  "maxResults": {},
  "filters": {}
}
```

Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|
|filters|object|false|none|none|

<h2 id="tocS_VersionQualifier">VersionQualifier</h2>
<!-- backwards compatibility -->
<a id="schemaversionqualifier"></a>
<a id="schema_VersionQualifier"></a>
<a id="tocSversionqualifier"></a>
<a id="tocsversionqualifier"></a>

```json
"string"
```

<h2 id="tocS_ListRobotApplicationsRequest">ListRobotApplicationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistrobotapplicationsrequest"></a>
<a id="schema_ListRobotApplicationsRequest"></a>
<a id="tocSlistrobotapplicationsrequest"></a>
<a id="tocslistrobotapplicationsrequest"></a>

```json
{
  "versionQualifier": {},
  "nextToken": {},
  "maxResults": {},
  "filters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|versionQualifier|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|
|filters|object|false|none|none|

<h2 id="tocS_RobotApplicationSummaries">RobotApplicationSummaries</h2>
<!-- backwards compatibility -->
<a id="schemarobotapplicationsummaries"></a>
<a id="schema_RobotApplicationSummaries"></a>
<a id="tocSrobotapplicationsummaries"></a>
<a id="tocsrobotapplicationsummaries"></a>

```json
[
  {
    "name": {},
    "arn": {},
    "version": {},
    "lastUpdatedAt": {},
    "robotSoftwareSuite": {
      "name": {},
      "version": {}
    }
  }
]
```

<h2 id="tocS_ListRobotsRequest">ListRobotsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistrobotsrequest"></a>
<a id="schema_ListRobotsRequest"></a>
<a id="tocSlistrobotsrequest"></a>
<a id="tocslistrobotsrequest"></a>

```json
{
  "nextToken": {},
  "maxResults": {},
  "filters": {}
}
```

Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|
|filters|object|false|none|none|

<h2 id="tocS_ListSimulationApplicationsRequest">ListSimulationApplicationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistsimulationapplicationsrequest"></a>
<a id="schema_ListSimulationApplicationsRequest"></a>
<a id="tocSlistsimulationapplicationsrequest"></a>
<a id="tocslistsimulationapplicationsrequest"></a>

```json
{
  "versionQualifier": {},
  "nextToken": {},
  "maxResults": {},
  "filters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|versionQualifier|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|
|filters|object|false|none|none|

<h2 id="tocS_SimulationApplicationSummaries">SimulationApplicationSummaries</h2>
<!-- backwards compatibility -->
<a id="schemasimulationapplicationsummaries"></a>
<a id="schema_SimulationApplicationSummaries"></a>
<a id="tocSsimulationapplicationsummaries"></a>
<a id="tocssimulationapplicationsummaries"></a>

```json
[
  {
    "name": {},
    "arn": {},
    "version": {},
    "lastUpdatedAt": {},
    "robotSoftwareSuite": {
      "name": {},
      "version": {}
    },
    "simulationSoftwareSuite": {
      "name": {},
      "version": {}
    }
  }
]
```

<h2 id="tocS_ListSimulationJobBatchesRequest">ListSimulationJobBatchesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistsimulationjobbatchesrequest"></a>
<a id="schema_ListSimulationJobBatchesRequest"></a>
<a id="tocSlistsimulationjobbatchesrequest"></a>
<a id="tocslistsimulationjobbatchesrequest"></a>

```json
{
  "nextToken": {},
  "maxResults": {},
  "filters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|
|filters|object|false|none|none|

<h2 id="tocS_SimulationJobBatchSummaries">SimulationJobBatchSummaries</h2>
<!-- backwards compatibility -->
<a id="schemasimulationjobbatchsummaries"></a>
<a id="schema_SimulationJobBatchSummaries"></a>
<a id="tocSsimulationjobbatchsummaries"></a>
<a id="tocssimulationjobbatchsummaries"></a>

```json
[
  {
    "arn": {},
    "lastUpdatedAt": {},
    "createdAt": {},
    "status": {},
    "failedRequestCount": {},
    "pendingRequestCount": {},
    "createdRequestCount": {}
  }
]
```

<h2 id="tocS_ListSimulationJobsRequest">ListSimulationJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistsimulationjobsrequest"></a>
<a id="schema_ListSimulationJobsRequest"></a>
<a id="tocSlistsimulationjobsrequest"></a>
<a id="tocslistsimulationjobsrequest"></a>

```json
{
  "nextToken": {},
  "maxResults": {},
  "filters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|
|filters|object|false|none|none|

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{}
```

<h2 id="tocS_ListWorldExportJobsRequest">ListWorldExportJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistworldexportjobsrequest"></a>
<a id="schema_ListWorldExportJobsRequest"></a>
<a id="tocSlistworldexportjobsrequest"></a>
<a id="tocslistworldexportjobsrequest"></a>

```json
{
  "nextToken": {},
  "maxResults": {},
  "filters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|
|filters|object|false|none|none|

<h2 id="tocS_WorldExportJobSummaries">WorldExportJobSummaries</h2>
<!-- backwards compatibility -->
<a id="schemaworldexportjobsummaries"></a>
<a id="schema_WorldExportJobSummaries"></a>
<a id="tocSworldexportjobsummaries"></a>
<a id="tocsworldexportjobsummaries"></a>

```json
[
  {
    "arn": {},
    "status": {},
    "createdAt": {},
    "worlds": {},
    "outputLocation": {
      "s3Bucket": {},
      "s3Prefix": {}
    }
  }
]
```

<h2 id="tocS_ListWorldGenerationJobsRequest">ListWorldGenerationJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistworldgenerationjobsrequest"></a>
<a id="schema_ListWorldGenerationJobsRequest"></a>
<a id="tocSlistworldgenerationjobsrequest"></a>
<a id="tocslistworldgenerationjobsrequest"></a>

```json
{
  "nextToken": {},
  "maxResults": {},
  "filters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|
|filters|object|false|none|none|

<h2 id="tocS_WorldGenerationJobSummaries">WorldGenerationJobSummaries</h2>
<!-- backwards compatibility -->
<a id="schemaworldgenerationjobsummaries"></a>
<a id="schema_WorldGenerationJobSummaries"></a>
<a id="tocSworldgenerationjobsummaries"></a>
<a id="tocsworldgenerationjobsummaries"></a>

```json
[
  {
    "arn": {},
    "template": {},
    "createdAt": {},
    "status": {},
    "worldCount": {
      "floorplanCount": {},
      "interiorCountPerFloorplan": {}
    },
    "succeededWorldCount": {},
    "failedWorldCount": {}
  }
]
```

<h2 id="tocS_ListWorldTemplatesRequest">ListWorldTemplatesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistworldtemplatesrequest"></a>
<a id="schema_ListWorldTemplatesRequest"></a>
<a id="tocSlistworldtemplatesrequest"></a>
<a id="tocslistworldtemplatesrequest"></a>

```json
{
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_TemplateSummaries">TemplateSummaries</h2>
<!-- backwards compatibility -->
<a id="schematemplatesummaries"></a>
<a id="schema_TemplateSummaries"></a>
<a id="tocStemplatesummaries"></a>
<a id="tocstemplatesummaries"></a>

```json
[
  {
    "arn": {},
    "createdAt": {},
    "lastUpdatedAt": {},
    "name": {},
    "version": {}
  }
]
```

<h2 id="tocS_ListWorldsRequest">ListWorldsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistworldsrequest"></a>
<a id="schema_ListWorldsRequest"></a>
<a id="tocSlistworldsrequest"></a>
<a id="tocslistworldsrequest"></a>

```json
{
  "nextToken": {},
  "maxResults": {},
  "filters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|
|filters|object|false|none|none|

<h2 id="tocS_WorldSummaries">WorldSummaries</h2>
<!-- backwards compatibility -->
<a id="schemaworldsummaries"></a>
<a id="schema_WorldSummaries"></a>
<a id="tocSworldsummaries"></a>
<a id="tocsworldsummaries"></a>

```json
[
  {
    "arn": {},
    "createdAt": {},
    "generationJob": {},
    "template": {}
  }
]
```

<h2 id="tocS_NonSystemPort">NonSystemPort</h2>
<!-- backwards compatibility -->
<a id="schemanonsystemport"></a>
<a id="schema_NonSystemPort"></a>
<a id="tocSnonsystemport"></a>
<a id="tocsnonsystemport"></a>

```json
1024
```

<h2 id="tocS_PercentDone">PercentDone</h2>
<!-- backwards compatibility -->
<a id="schemapercentdone"></a>
<a id="schema_PercentDone"></a>
<a id="tocSpercentdone"></a>
<a id="tocspercentdone"></a>

```json
0
```

<h2 id="tocS_Port">Port</h2>
<!-- backwards compatibility -->
<a id="schemaport"></a>
<a id="schema_Port"></a>
<a id="tocSport"></a>
<a id="tocsport"></a>

```json
1
```

<h2 id="tocS_PortMappingList">PortMappingList</h2>
<!-- backwards compatibility -->
<a id="schemaportmappinglist"></a>
<a id="schema_PortMappingList"></a>
<a id="tocSportmappinglist"></a>
<a id="tocsportmappinglist"></a>

```json
[
  {
    "jobPort": {},
    "applicationPort": {},
    "enableOnPublicIp": {}
  }
]
```

<h2 id="tocS_PortMapping">PortMapping</h2>
<!-- backwards compatibility -->
<a id="schemaportmapping"></a>
<a id="schema_PortMapping"></a>
<a id="tocSportmapping"></a>
<a id="tocsportmapping"></a>

```json
{
  "jobPort": {},
  "applicationPort": {},
  "enableOnPublicIp": {}
}
```

An object representing a port mapping.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobPort|object|true|none|none|
|applicationPort|object|true|none|none|
|enableOnPublicIp|object|false|none|none|

<h2 id="tocS_RobotDeploymentStep">RobotDeploymentStep</h2>
<!-- backwards compatibility -->
<a id="schemarobotdeploymentstep"></a>
<a id="schema_RobotDeploymentStep"></a>
<a id="tocSrobotdeploymentstep"></a>
<a id="tocsrobotdeploymentstep"></a>

```json
"Validating"
```

<h2 id="tocS_ProgressDetail">ProgressDetail</h2>
<!-- backwards compatibility -->
<a id="schemaprogressdetail"></a>
<a id="schema_ProgressDetail"></a>
<a id="tocSprogressdetail"></a>
<a id="tocsprogressdetail"></a>

```json
{
  "currentProgress": {},
  "percentDone": {},
  "estimatedTimeRemainingSeconds": {},
  "targetResource": {}
}
```

Information about the progress of a deployment job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentProgress|object|false|none|none|
|percentDone|object|false|none|none|
|estimatedTimeRemainingSeconds|object|false|none|none|
|targetResource|object|false|none|none|

<h2 id="tocS_RegisterRobotRequest">RegisterRobotRequest</h2>
<!-- backwards compatibility -->
<a id="schemaregisterrobotrequest"></a>
<a id="schema_RegisterRobotRequest"></a>
<a id="tocSregisterrobotrequest"></a>
<a id="tocsregisterrobotrequest"></a>

```json
{
  "fleet": {},
  "robot": {}
}
```

AWS RoboMaker is unable to process this request as the support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fleet|object|true|none|none|
|robot|object|true|none|none|

<h2 id="tocS_RestartSimulationJobRequest">RestartSimulationJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemarestartsimulationjobrequest"></a>
<a id="schema_RestartSimulationJobRequest"></a>
<a id="tocSrestartsimulationjobrequest"></a>
<a id="tocsrestartsimulationjobrequest"></a>

```json
{
  "job": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|object|true|none|none|

<h2 id="tocS_Robot">Robot</h2>
<!-- backwards compatibility -->
<a id="schemarobot"></a>
<a id="schema_Robot"></a>
<a id="tocSrobot"></a>
<a id="tocsrobot"></a>

```json
{
  "arn": {},
  "name": {},
  "fleetArn": {},
  "status": {},
  "greenGrassGroupId": {},
  "createdAt": {},
  "architecture": {},
  "lastDeploymentJob": {},
  "lastDeploymentTime": {}
}
```

Information about a robot.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|name|object|false|none|none|
|fleetArn|object|false|none|none|
|status|object|false|none|none|
|greenGrassGroupId|object|false|none|none|
|createdAt|object|false|none|none|
|architecture|object|false|none|none|
|lastDeploymentJob|object|false|none|none|
|lastDeploymentTime|object|false|none|none|

<h2 id="tocS_UploadConfigurations">UploadConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemauploadconfigurations"></a>
<a id="schema_UploadConfigurations"></a>
<a id="tocSuploadconfigurations"></a>
<a id="tocsuploadconfigurations"></a>

```json
[
  {
    "name": {},
    "path": {},
    "uploadBehavior": {}
  }
]
```

<h2 id="tocS_Tools">Tools</h2>
<!-- backwards compatibility -->
<a id="schematools"></a>
<a id="schema_Tools"></a>
<a id="tocStools"></a>
<a id="tocstools"></a>

```json
[
  {
    "streamUI": {},
    "name": {},
    "command": {},
    "streamOutputToCloudWatch": {},
    "exitBehavior": {}
  }
]
```

<h2 id="tocS_RobotApplicationNames">RobotApplicationNames</h2>
<!-- backwards compatibility -->
<a id="schemarobotapplicationnames"></a>
<a id="schema_RobotApplicationNames"></a>
<a id="tocSrobotapplicationnames"></a>
<a id="tocsrobotapplicationnames"></a>

```json
[
  "string"
]
```

<h2 id="tocS_RobotApplicationSummary">RobotApplicationSummary</h2>
<!-- backwards compatibility -->
<a id="schemarobotapplicationsummary"></a>
<a id="schema_RobotApplicationSummary"></a>
<a id="tocSrobotapplicationsummary"></a>
<a id="tocsrobotapplicationsummary"></a>

```json
{
  "name": {},
  "arn": {},
  "version": {},
  "lastUpdatedAt": {},
  "robotSoftwareSuite": {
    "name": {},
    "version": {}
  }
}
```

Summary information for a robot application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|arn|object|false|none|none|
|version|object|false|none|none|
|lastUpdatedAt|object|false|none|none|
|robotSoftwareSuite|object|false|none|none|

<h2 id="tocS_RobotDeployment">RobotDeployment</h2>
<!-- backwards compatibility -->
<a id="schemarobotdeployment"></a>
<a id="schema_RobotDeployment"></a>
<a id="tocSrobotdeployment"></a>
<a id="tocsrobotdeployment"></a>

```json
{
  "arn": {},
  "deploymentStartTime": {},
  "deploymentFinishTime": {},
  "status": {},
  "progressDetail": {
    "currentProgress": {},
    "percentDone": {},
    "estimatedTimeRemainingSeconds": {},
    "targetResource": {}
  },
  "failureReason": {},
  "failureCode": {}
}
```

Information about a robot deployment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|deploymentStartTime|object|false|none|none|
|deploymentFinishTime|object|false|none|none|
|status|object|false|none|none|
|progressDetail|object|false|none|none|
|failureReason|object|false|none|none|
|failureCode|object|false|none|none|

<h2 id="tocS_S3KeyOrPrefix">S3KeyOrPrefix</h2>
<!-- backwards compatibility -->
<a id="schemas3keyorprefix"></a>
<a id="schema_S3KeyOrPrefix"></a>
<a id="tocSs3keyorprefix"></a>
<a id="tocss3keyorprefix"></a>

```json
"string"
```

<h2 id="tocS_S3KeyOutput">S3KeyOutput</h2>
<!-- backwards compatibility -->
<a id="schemas3keyoutput"></a>
<a id="schema_S3KeyOutput"></a>
<a id="tocSs3keyoutput"></a>
<a id="tocss3keyoutput"></a>

```json
{
  "s3Key": {},
  "etag": {}
}
```

Information about S3 keys.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|s3Key|object|false|none|none|
|etag|object|false|none|none|

<h2 id="tocS_WorldConfigs">WorldConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaworldconfigs"></a>
<a id="schema_WorldConfigs"></a>
<a id="tocSworldconfigs"></a>
<a id="tocsworldconfigs"></a>

```json
[
  {
    "world": {}
  }
]
```

<h2 id="tocS_SimulationApplicationNames">SimulationApplicationNames</h2>
<!-- backwards compatibility -->
<a id="schemasimulationapplicationnames"></a>
<a id="schema_SimulationApplicationNames"></a>
<a id="tocSsimulationapplicationnames"></a>
<a id="tocssimulationapplicationnames"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SimulationApplicationSummary">SimulationApplicationSummary</h2>
<!-- backwards compatibility -->
<a id="schemasimulationapplicationsummary"></a>
<a id="schema_SimulationApplicationSummary"></a>
<a id="tocSsimulationapplicationsummary"></a>
<a id="tocssimulationapplicationsummary"></a>

```json
{
  "name": {},
  "arn": {},
  "version": {},
  "lastUpdatedAt": {},
  "robotSoftwareSuite": {
    "name": {},
    "version": {}
  },
  "simulationSoftwareSuite": {
    "name": {},
    "version": {}
  }
}
```

Summary information for a simulation application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|arn|object|false|none|none|
|version|object|false|none|none|
|lastUpdatedAt|object|false|none|none|
|robotSoftwareSuite|object|false|none|none|
|simulationSoftwareSuite|object|false|none|none|

<h2 id="tocS_SimulationJob">SimulationJob</h2>
<!-- backwards compatibility -->
<a id="schemasimulationjob"></a>
<a id="schema_SimulationJob"></a>
<a id="tocSsimulationjob"></a>
<a id="tocssimulationjob"></a>

```json
{
  "arn": {},
  "name": {},
  "status": {},
  "lastStartedAt": {},
  "lastUpdatedAt": {},
  "failureBehavior": {},
  "failureCode": {},
  "failureReason": {},
  "clientRequestToken": {},
  "outputLocation": {
    "s3Bucket": {},
    "s3Prefix": {}
  },
  "loggingConfig": {
    "recordAllRosTopics": {}
  },
  "maxJobDurationInSeconds": {},
  "simulationTimeMillis": {},
  "iamRole": {},
  "robotApplications": {},
  "simulationApplications": {},
  "dataSources": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "vpcConfig": {
    "subnets": {},
    "securityGroups": {},
    "vpcId": {},
    "assignPublicIp": {}
  },
  "networkInterface": {
    "networkInterfaceId": {},
    "privateIpAddress": {},
    "publicIpAddress": {}
  },
  "compute": {
    "simulationUnitLimit": {},
    "computeType": {},
    "gpuUnitLimit": {}
  }
}
```

Information about a simulation job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|name|object|false|none|none|
|status|object|false|none|none|
|lastStartedAt|object|false|none|none|
|lastUpdatedAt|object|false|none|none|
|failureBehavior|object|false|none|none|
|failureCode|object|false|none|none|
|failureReason|object|false|none|none|
|clientRequestToken|object|false|none|none|
|outputLocation|object|false|none|none|
|loggingConfig|object|false|none|none|
|maxJobDurationInSeconds|object|false|none|none|
|simulationTimeMillis|object|false|none|none|
|iamRole|object|false|none|none|
|robotApplications|object|false|none|none|
|simulationApplications|object|false|none|none|
|dataSources|object|false|none|none|
|tags|object|false|none|none|
|vpcConfig|object|false|none|none|
|networkInterface|object|false|none|none|
|compute|object|false|none|none|

<h2 id="tocS_SimulationJobBatchSummary">SimulationJobBatchSummary</h2>
<!-- backwards compatibility -->
<a id="schemasimulationjobbatchsummary"></a>
<a id="schema_SimulationJobBatchSummary"></a>
<a id="tocSsimulationjobbatchsummary"></a>
<a id="tocssimulationjobbatchsummary"></a>

```json
{
  "arn": {},
  "lastUpdatedAt": {},
  "createdAt": {},
  "status": {},
  "failedRequestCount": {},
  "pendingRequestCount": {},
  "createdRequestCount": {}
}
```

Information about a simulation job batch.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|lastUpdatedAt|object|false|none|none|
|createdAt|object|false|none|none|
|status|object|false|none|none|
|failedRequestCount|object|false|none|none|
|pendingRequestCount|object|false|none|none|
|createdRequestCount|object|false|none|none|

<h2 id="tocS_SimulationJobSummary">SimulationJobSummary</h2>
<!-- backwards compatibility -->
<a id="schemasimulationjobsummary"></a>
<a id="schema_SimulationJobSummary"></a>
<a id="tocSsimulationjobsummary"></a>
<a id="tocssimulationjobsummary"></a>

```json
{
  "arn": {},
  "lastUpdatedAt": {},
  "name": {},
  "status": {},
  "simulationApplicationNames": {},
  "robotApplicationNames": {},
  "dataSourceNames": {},
  "computeType": {}
}
```

Summary information for a simulation job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|lastUpdatedAt|object|false|none|none|
|name|object|false|none|none|
|status|object|false|none|none|
|simulationApplicationNames|object|false|none|none|
|robotApplicationNames|object|false|none|none|
|dataSourceNames|object|false|none|none|
|computeType|object|false|none|none|

<h2 id="tocS_Source">Source</h2>
<!-- backwards compatibility -->
<a id="schemasource"></a>
<a id="schema_Source"></a>
<a id="tocSsource"></a>
<a id="tocssource"></a>

```json
{
  "s3Bucket": {},
  "s3Key": {},
  "etag": {},
  "architecture": {}
}
```

Information about a source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|s3Bucket|object|false|none|none|
|s3Key|object|false|none|none|
|etag|object|false|none|none|
|architecture|object|false|none|none|

<h2 id="tocS_StartSimulationJobBatchRequest">StartSimulationJobBatchRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartsimulationjobbatchrequest"></a>
<a id="schema_StartSimulationJobBatchRequest"></a>
<a id="tocSstartsimulationjobbatchrequest"></a>
<a id="tocsstartsimulationjobbatchrequest"></a>

```json
{
  "clientRequestToken": {},
  "batchPolicy": {
    "timeoutInSeconds": {},
    "maxConcurrency": {}
  },
  "createSimulationJobRequests": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientRequestToken|object|false|none|none|
|batchPolicy|object|false|none|none|
|createSimulationJobRequests|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_SyncDeploymentJobRequest">SyncDeploymentJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemasyncdeploymentjobrequest"></a>
<a id="schema_SyncDeploymentJobRequest"></a>
<a id="tocSsyncdeploymentjobrequest"></a>
<a id="tocssyncdeploymentjobrequest"></a>

```json
{
  "clientRequestToken": {},
  "fleet": {}
}
```

Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientRequestToken|object|true|none|none|
|fleet|object|true|none|none|

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

<h2 id="tocS_TemplateSummary">TemplateSummary</h2>
<!-- backwards compatibility -->
<a id="schematemplatesummary"></a>
<a id="schema_TemplateSummary"></a>
<a id="tocStemplatesummary"></a>
<a id="tocstemplatesummary"></a>

```json
{
  "arn": {},
  "createdAt": {},
  "lastUpdatedAt": {},
  "name": {},
  "version": {}
}
```

Summary information for a template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|createdAt|object|false|none|none|
|lastUpdatedAt|object|false|none|none|
|name|object|false|none|none|
|version|object|false|none|none|

<h2 id="tocS_UnrestrictedCommand">UnrestrictedCommand</h2>
<!-- backwards compatibility -->
<a id="schemaunrestrictedcommand"></a>
<a id="schema_UnrestrictedCommand"></a>
<a id="tocSunrestrictedcommand"></a>
<a id="tocsunrestrictedcommand"></a>

```json
"string"
```

<h2 id="tocS_Tool">Tool</h2>
<!-- backwards compatibility -->
<a id="schematool"></a>
<a id="schema_Tool"></a>
<a id="tocStool"></a>
<a id="tocstool"></a>

```json
{
  "streamUI": {},
  "name": {},
  "command": {},
  "streamOutputToCloudWatch": {},
  "exitBehavior": {}
}
```

Information about a tool. Tools are used in a simulation job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|streamUI|object|false|none|none|
|name|object|true|none|none|
|command|object|true|none|none|
|streamOutputToCloudWatch|object|false|none|none|
|exitBehavior|object|false|none|none|

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{}
```

<h2 id="tocS_UpdateRobotApplicationRequest">UpdateRobotApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterobotapplicationrequest"></a>
<a id="schema_UpdateRobotApplicationRequest"></a>
<a id="tocSupdaterobotapplicationrequest"></a>
<a id="tocsupdaterobotapplicationrequest"></a>

```json
{
  "application": {},
  "sources": {},
  "robotSoftwareSuite": {
    "name": {},
    "version": {}
  },
  "currentRevisionId": {},
  "environment": {
    "uri": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|application|object|true|none|none|
|sources|object|false|none|none|
|robotSoftwareSuite|object|true|none|none|
|currentRevisionId|object|false|none|none|
|environment|object|false|none|none|

<h2 id="tocS_UpdateSimulationApplicationRequest">UpdateSimulationApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesimulationapplicationrequest"></a>
<a id="schema_UpdateSimulationApplicationRequest"></a>
<a id="tocSupdatesimulationapplicationrequest"></a>
<a id="tocsupdatesimulationapplicationrequest"></a>

```json
{
  "application": {},
  "sources": {},
  "simulationSoftwareSuite": {
    "name": {},
    "version": {}
  },
  "robotSoftwareSuite": {
    "name": {},
    "version": {}
  },
  "renderingEngine": {
    "name": {},
    "version": {}
  },
  "currentRevisionId": {},
  "environment": {
    "uri": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|application|object|true|none|none|
|sources|object|false|none|none|
|simulationSoftwareSuite|object|true|none|none|
|robotSoftwareSuite|object|true|none|none|
|renderingEngine|object|false|none|none|
|currentRevisionId|object|false|none|none|
|environment|object|false|none|none|

<h2 id="tocS_UpdateWorldTemplateRequest">UpdateWorldTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateworldtemplaterequest"></a>
<a id="schema_UpdateWorldTemplateRequest"></a>
<a id="tocSupdateworldtemplaterequest"></a>
<a id="tocsupdateworldtemplaterequest"></a>

```json
{
  "template": {},
  "name": {},
  "templateBody": {},
  "templateLocation": {
    "s3Bucket": {},
    "s3Key": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|template|object|true|none|none|
|name|object|false|none|none|
|templateBody|object|false|none|none|
|templateLocation|object|false|none|none|

<h2 id="tocS_UploadBehavior">UploadBehavior</h2>
<!-- backwards compatibility -->
<a id="schemauploadbehavior"></a>
<a id="schema_UploadBehavior"></a>
<a id="tocSuploadbehavior"></a>
<a id="tocsuploadbehavior"></a>

```json
"UPLOAD_ON_TERMINATE"
```

<h2 id="tocS_UploadConfiguration">UploadConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemauploadconfiguration"></a>
<a id="schema_UploadConfiguration"></a>
<a id="tocSuploadconfiguration"></a>
<a id="tocsuploadconfiguration"></a>

```json
{
  "name": {},
  "path": {},
  "uploadBehavior": {}
}
```

Provides upload configuration information. Files are uploaded from the simulation job to a location you specify.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|path|object|true|none|none|
|uploadBehavior|object|true|none|none|

<h2 id="tocS_WorldConfig">WorldConfig</h2>
<!-- backwards compatibility -->
<a id="schemaworldconfig"></a>
<a id="schema_WorldConfig"></a>
<a id="tocSworldconfig"></a>
<a id="tocsworldconfig"></a>

```json
{
  "world": {}
}
```

Configuration information for a world.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|world|object|false|none|none|

<h2 id="tocS_WorldExportJobSummary">WorldExportJobSummary</h2>
<!-- backwards compatibility -->
<a id="schemaworldexportjobsummary"></a>
<a id="schema_WorldExportJobSummary"></a>
<a id="tocSworldexportjobsummary"></a>
<a id="tocsworldexportjobsummary"></a>

```json
{
  "arn": {},
  "status": {},
  "createdAt": {},
  "worlds": {},
  "outputLocation": {
    "s3Bucket": {},
    "s3Prefix": {}
  }
}
```

Information about a world export job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|status|object|false|none|none|
|createdAt|object|false|none|none|
|worlds|object|false|none|none|
|outputLocation|[OutputLocation](#schemaoutputlocation)|false|none|The output location.|

<h2 id="tocS_WorldFailure">WorldFailure</h2>
<!-- backwards compatibility -->
<a id="schemaworldfailure"></a>
<a id="schema_WorldFailure"></a>
<a id="tocSworldfailure"></a>
<a id="tocsworldfailure"></a>

```json
{
  "failureCode": {},
  "sampleFailureReason": {},
  "failureCount": {}
}
```

Information about a failed world.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|failureCode|object|false|none|none|
|sampleFailureReason|object|false|none|none|
|failureCount|object|false|none|none|

<h2 id="tocS_WorldGenerationJobSummary">WorldGenerationJobSummary</h2>
<!-- backwards compatibility -->
<a id="schemaworldgenerationjobsummary"></a>
<a id="schema_WorldGenerationJobSummary"></a>
<a id="tocSworldgenerationjobsummary"></a>
<a id="tocsworldgenerationjobsummary"></a>

```json
{
  "arn": {},
  "template": {},
  "createdAt": {},
  "status": {},
  "worldCount": {
    "floorplanCount": {},
    "interiorCountPerFloorplan": {}
  },
  "succeededWorldCount": {},
  "failedWorldCount": {}
}
```

Information about a world generator job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|template|object|false|none|none|
|createdAt|object|false|none|none|
|status|object|false|none|none|
|worldCount|object|false|none|none|
|succeededWorldCount|object|false|none|none|
|failedWorldCount|object|false|none|none|

<h2 id="tocS_WorldSummary">WorldSummary</h2>
<!-- backwards compatibility -->
<a id="schemaworldsummary"></a>
<a id="schema_WorldSummary"></a>
<a id="tocSworldsummary"></a>
<a id="tocsworldsummary"></a>

```json
{
  "arn": {},
  "createdAt": {},
  "generationJob": {},
  "template": {}
}
```

Information about a world.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|createdAt|object|false|none|none|
|generationJob|object|false|none|none|
|template|object|false|none|none|
