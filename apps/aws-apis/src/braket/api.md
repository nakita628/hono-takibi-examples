<h1 id="braket">Braket v2019-09-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>The Amazon Braket API Reference provides information about the operations and structures supported in Amazon Braket.</p> <p>Additional Resources:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/braket/latest/developerguide/what-is-braket.html">Amazon Braket Developer Guide</a> </p> </li> </ul>

Base URLs:

* <a href="http://braket.us-east-1.amazonaws.com">http://braket.us-east-1.amazonaws.com</a> - The Braket multi-region endpoint

* <a href="https://braket.us-east-1.amazonaws.com">https://braket.us-east-1.amazonaws.com</a> - The Braket multi-region endpoint

* <a href="http://braket.cn-north-1.amazonaws.com.cn">http://braket.cn-north-1.amazonaws.com.cn</a> - The Braket endpoint for China (Beijing) and China (Ningxia)

* <a href="https://braket.cn-north-1.amazonaws.com.cn">https://braket.cn-north-1.amazonaws.com.cn</a> - The Braket endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/braket/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="braket-default">Default</h1>

## CancelJob

<a id="opIdCancelJob"></a>

> Code samples

```bash
curl https://braket.us-east-1.amazonaws.com/job/string/cancel \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`PUT /job/{jobArn}/cancel`

Cancels an Amazon Braket job.

<h3 id="canceljob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobArn|path|string|true|The ARN of the Amazon Braket job to cancel.|
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
  "cancellationStatus": {},
  "jobArn": {}
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

<h3 id="canceljob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelJobResponse](#schemacanceljobresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CancelQuantumTask

<a id="opIdCancelQuantumTask"></a>

> Code samples

```bash
curl https://braket.us-east-1.amazonaws.com/quantum-task/string/cancel \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientToken": "string"
  }'
```

`PUT /quantum-task/{quantumTaskArn}/cancel`

Cancels the specified task.

> Body parameter

```json
{
  "clientToken": "string"
}
```

<h3 id="cancelquantumtask-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quantumTaskArn|path|string|true|The ARN of the task to cancel.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» clientToken|body|string|true|The client token associated with the request.|

> Example responses

> 200 Response

```json
{
  "cancellationStatus": {},
  "quantumTaskArn": {}
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

<h3 id="cancelquantumtask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelQuantumTaskResponse](#schemacancelquantumtaskresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateJob

<a id="opIdCreateJob"></a>

> Code samples

```bash
curl https://braket.us-east-1.amazonaws.com/job \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "algorithmSpecification": {
      "containerImage": {
        "uri": {}
      },
      "scriptModeConfig": {
        "compressionType": {},
        "entryPoint": {},
        "s3Uri": {}
      }
    },
    "checkpointConfig": {
      "localPath": {},
      "s3Uri": {}
    },
    "clientToken": "string",
    "deviceConfig": {
      "device": {}
    },
    "hyperParameters": {
      "property1": "string",
      "property2": "string"
    },
    "inputDataConfig": [
      {
        "channelName": {},
        "contentType": {},
        "dataSource": {
          "s3DataSource": {
            "s3Uri": {}
          }
        }
      }
    ],
    "instanceConfig": {
      "instanceCount": {},
      "instanceType": {},
      "volumeSizeInGb": {}
    },
    "jobName": "string",
    "outputDataConfig": {
      "kmsKeyId": {},
      "s3Path": {}
    },
    "roleArn": "string",
    "stoppingCondition": {
      "maxRuntimeInSeconds": {}
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /job`

Creates an Amazon Braket job.

> Body parameter

```json
{
  "algorithmSpecification": {
    "containerImage": {
      "uri": {}
    },
    "scriptModeConfig": {
      "compressionType": {},
      "entryPoint": {},
      "s3Uri": {}
    }
  },
  "checkpointConfig": {
    "localPath": {},
    "s3Uri": {}
  },
  "clientToken": "string",
  "deviceConfig": {
    "device": {}
  },
  "hyperParameters": {
    "property1": "string",
    "property2": "string"
  },
  "inputDataConfig": [
    {
      "channelName": {},
      "contentType": {},
      "dataSource": {
        "s3DataSource": {
          "s3Uri": {}
        }
      }
    }
  ],
  "instanceConfig": {
    "instanceCount": {},
    "instanceType": {},
    "volumeSizeInGb": {}
  },
  "jobName": "string",
  "outputDataConfig": {
    "kmsKeyId": {},
    "s3Path": {}
  },
  "roleArn": "string",
  "stoppingCondition": {
    "maxRuntimeInSeconds": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createjob-parameters">Parameters</h3>

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
|» algorithmSpecification|body|object|true|Defines the Amazon Braket job to be created. Specifies the container image the job uses and the paths to the Python scripts used for entry and training.|
|» » containerImage|body|object|false|none|
|» » » uri|body|object|true|none|
|» » scriptModeConfig|body|object|false|none|
|» » » compressionType|body|object|false|none|
|» » » entryPoint|body|object|true|none|
|» » » s3Uri|body|object|true|none|
|» checkpointConfig|body|object|false|Contains information about the output locations for job checkpoint data.|
|» » localPath|body|object|false|none|
|» » s3Uri|body|object|false|none|
|» clientToken|body|string|true|A unique token that guarantees that the call to this API is idempotent.|
|» deviceConfig|body|object|true|Configures the quantum processing units (QPUs) or simulator used to create and run an Amazon Braket job.|
|» » device|body|object|false|none|
|» hyperParameters|body|object|false|Algorithm-specific parameters used by an Amazon Braket job that influence the quality of the training job. The values are set with a string of JSON key:value pairs, where the key is the name of the hyperparameter and the value is the value of th hyperparameter.|
|» » **additionalProperties**|body|[HyperParametersValueString](#schemahyperparametersvaluestring)|false|none|
|» inputDataConfig|body|[[InputFileConfig](#schemainputfileconfig)]|false|A list of parameters that specify the name and type of input data and where it is located.|
|» instanceConfig|body|object|true|Configures the resource instances to use while running the Amazon Braket hybrid job on Amazon Braket.|
|» » instanceCount|body|object|false|none|
|» » instanceType|body|object|false|none|
|» » volumeSizeInGb|body|object|false|none|
|» jobName|body|string|true|The name of the Amazon Braket job.|
|» outputDataConfig|body|object|true|Specifies the path to the S3 location where you want to store job artifacts and the encryption key used to store them.|
|» » kmsKeyId|body|object|false|none|
|» » s3Path|body|object|false|none|
|» roleArn|body|string|true|The Amazon Resource Name (ARN) of an IAM role that Amazon Braket can assume to perform tasks on behalf of a user. It can access user resources, run an Amazon Braket job container on behalf of user, and output resources to the users' s3 buckets.|
|» stoppingCondition|body|object|false|Specifies limits for how long an Amazon Braket job can run. |
|» » maxRuntimeInSeconds|body|object|false|none|
|» tags|body|object|false|A tag object that consists of a key and an optional value, used to manage metadata for Amazon Braket resources.|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|

> Example responses

> 201 Response

```json
{
  "jobArn": {}
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

<h3 id="createjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateJobResponse](#schemacreatejobresponse)|
|480|480|ConflictException|[ConflictException](#schemaconflictexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|DeviceRetiredException|[DeviceRetiredException](#schemadeviceretiredexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|485|485|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|486|486|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateQuantumTask

<a id="opIdCreateQuantumTask"></a>

> Code samples

```bash
curl https://braket.us-east-1.amazonaws.com/quantum-task \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "action": "string",
    "clientToken": "string",
    "deviceArn": "string",
    "deviceParameters": "string",
    "jobToken": "string",
    "outputS3Bucket": "string",
    "outputS3KeyPrefix": "string",
    "shots": 0,
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /quantum-task`

Creates a quantum task.

> Body parameter

```json
{
  "action": "string",
  "clientToken": "string",
  "deviceArn": "string",
  "deviceParameters": "string",
  "jobToken": "string",
  "outputS3Bucket": "string",
  "outputS3KeyPrefix": "string",
  "shots": 0,
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createquantumtask-parameters">Parameters</h3>

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
|» action|body|string|true|The action associated with the task.|
|» clientToken|body|string|true|The client token associated with the request.|
|» deviceArn|body|string|true|The ARN of the device to run the task on.|
|» deviceParameters|body|string|false|The parameters for the device to run the task on.|
|» jobToken|body|string|false|The token for an Amazon Braket job that associates it with the quantum task.|
|» outputS3Bucket|body|string|true|The S3 bucket to store task result files in.|
|» outputS3KeyPrefix|body|string|true|The key prefix for the location in the S3 bucket to store task results in.|
|» shots|body|integer|true|The number of shots to use for the task.|
|» tags|body|object|false|Tags to be added to the quantum task you're creating.|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|

> Example responses

> 201 Response

```json
{
  "quantumTaskArn": {}
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

<h3 id="createquantumtask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateQuantumTaskResponse](#schemacreatequantumtaskresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|DeviceOfflineException|[DeviceOfflineException](#schemadeviceofflineexception)|
|483|483|DeviceRetiredException|[DeviceRetiredException](#schemadeviceretiredexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|485|485|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|486|486|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDevice

<a id="opIdGetDevice"></a>

> Code samples

```bash
curl https://braket.us-east-1.amazonaws.com/device/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /device/{deviceArn}`

<p>Retrieves the devices available in Amazon Braket.</p> <note> <p>For backwards compatibility with older versions of BraketSchemas, OpenQASM information is omitted from GetDevice API calls. To get this information the user-agent needs to present a recent version of the BraketSchemas (1.8.0 or later). The Braket SDK automatically reports this for you. If you do not see OpenQASM results in the GetDevice response when using a Braket SDK, you may need to set AWS_EXECUTION_ENV environment variable to configure user-agent. See the code examples provided below for how to do this for the AWS CLI, Boto3, and the Go, Java, and JavaScript/TypeScript SDKs.</p> </note>

<h3 id="getdevice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceArn|path|string|true|The ARN of the device to retrieve.|
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
  "deviceArn": {},
  "deviceCapabilities": {},
  "deviceName": {},
  "deviceStatus": {},
  "deviceType": {},
  "providerName": {}
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

<h3 id="getdevice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDeviceResponse](#schemagetdeviceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetJob

<a id="opIdGetJob"></a>

> Code samples

```bash
curl https://braket.us-east-1.amazonaws.com/job/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /job/{jobArn}`

Retrieves the specified Amazon Braket job.

<h3 id="getjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobArn|path|string|true|The ARN of the job to retrieve.|
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
  "algorithmSpecification": {
    "containerImage": {
      "uri": {}
    },
    "scriptModeConfig": {
      "compressionType": {},
      "entryPoint": {},
      "s3Uri": {}
    }
  },
  "billableDuration": {},
  "checkpointConfig": {
    "localPath": {},
    "s3Uri": {}
  },
  "createdAt": {},
  "deviceConfig": {
    "device": {}
  },
  "endedAt": {},
  "events": {},
  "failureReason": {},
  "hyperParameters": {
    "property1": "string",
    "property2": "string"
  },
  "inputDataConfig": {},
  "instanceConfig": {
    "instanceCount": {},
    "instanceType": {},
    "volumeSizeInGb": {}
  },
  "jobArn": {},
  "jobName": {},
  "outputDataConfig": {
    "kmsKeyId": {},
    "s3Path": {}
  },
  "roleArn": {},
  "startedAt": {},
  "status": {},
  "stoppingCondition": {
    "maxRuntimeInSeconds": {}
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

<h3 id="getjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetJobResponse](#schemagetjobresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetQuantumTask

<a id="opIdGetQuantumTask"></a>

> Code samples

```bash
curl https://braket.us-east-1.amazonaws.com/quantum-task/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /quantum-task/{quantumTaskArn}`

Retrieves the specified quantum task.

<h3 id="getquantumtask-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quantumTaskArn|path|string|true|the ARN of the task to retrieve.|
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
  "createdAt": {},
  "deviceArn": {},
  "deviceParameters": {},
  "endedAt": {},
  "failureReason": {},
  "jobArn": {},
  "outputS3Bucket": {},
  "outputS3Directory": {},
  "quantumTaskArn": {},
  "shots": {},
  "status": {},
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

<h3 id="getquantumtask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetQuantumTaskResponse](#schemagetquantumtaskresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://braket.us-east-1.amazonaws.com/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{resourceArn}`

Shows the tags associated with this resource.

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|Specify the <code>resourceArn</code> for the resource whose tags to display.|
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
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://braket.us-east-1.amazonaws.com/tags/string \
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

Add a tag to the specified resource.

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
|resourceArn|path|string|true|Specify the <code>resourceArn</code> of the resource to which a tag will be added.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tags|body|object|true|Specify the tags to add to the resource.|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|

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
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SearchDevices

<a id="opIdSearchDevices"></a>

> Code samples

```bash
curl https://braket.us-east-1.amazonaws.com/devices \
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
    "maxResults": 1,
    "nextToken": "string"
  }'
```

`POST /devices`

Searches for devices using the specified filters.

> Body parameter

```json
{
  "filters": [
    {
      "name": {},
      "values": {}
    }
  ],
  "maxResults": 1,
  "nextToken": "string"
}
```

<h3 id="searchdevices-parameters">Parameters</h3>

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
|» filters|body|[[SearchDevicesFilter](#schemasearchdevicesfilter)]|true|The filter values to use to search for a device.|
|» maxResults|body|integer|false|The maximum number of results to return in the response.|
|» nextToken|body|string|false|A token used for pagination of results returned in the response. Use the token returned from the previous request continue results where the previous request ended.|

> Example responses

> 200 Response

```json
{
  "devices": {},
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

<h3 id="searchdevices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SearchDevicesResponse](#schemasearchdevicesresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SearchJobs

<a id="opIdSearchJobs"></a>

> Code samples

```bash
curl https://braket.us-east-1.amazonaws.com/jobs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "filters": [
      {
        "name": {},
        "operator": {},
        "values": {}
      }
    ],
    "maxResults": 1,
    "nextToken": "string"
  }'
```

`POST /jobs`

Searches for Amazon Braket jobs that match the specified filter values.

> Body parameter

```json
{
  "filters": [
    {
      "name": {},
      "operator": {},
      "values": {}
    }
  ],
  "maxResults": 1,
  "nextToken": "string"
}
```

<h3 id="searchjobs-parameters">Parameters</h3>

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
|» filters|body|[[SearchJobsFilter](#schemasearchjobsfilter)]|true|The filter values to use when searching for a job.|
|» maxResults|body|integer|false|The maximum number of results to return in the response.|
|» nextToken|body|string|false|A token used for pagination of results returned in the response. Use the token returned from the previous request to continue results where the previous request ended.|

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

<h3 id="searchjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SearchJobsResponse](#schemasearchjobsresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SearchQuantumTasks

<a id="opIdSearchQuantumTasks"></a>

> Code samples

```bash
curl https://braket.us-east-1.amazonaws.com/quantum-tasks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "filters": [
      {
        "name": {},
        "operator": {},
        "values": {}
      }
    ],
    "maxResults": 1,
    "nextToken": "string"
  }'
```

`POST /quantum-tasks`

Searches for tasks that match the specified filter values.

> Body parameter

```json
{
  "filters": [
    {
      "name": {},
      "operator": {},
      "values": {}
    }
  ],
  "maxResults": 1,
  "nextToken": "string"
}
```

<h3 id="searchquantumtasks-parameters">Parameters</h3>

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
|» filters|body|[[SearchQuantumTasksFilter](#schemasearchquantumtasksfilter)]|true|Array of <code>SearchQuantumTasksFilter</code> objects.|
|» maxResults|body|integer|false|Maximum number of results to return in the response.|
|» nextToken|body|string|false|A token used for pagination of results returned in the response. Use the token returned from the previous request continue results where the previous request ended.|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "quantumTasks": {}
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

<h3 id="searchquantumtasks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SearchQuantumTasksResponse](#schemasearchquantumtasksresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://braket.us-east-1.amazonaws.com/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{resourceArn}#tagKeys`

Remove tags from a resource.

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|Specify the <code>resourceArn</code> for the resource from which to remove the tags.|
|tagKeys|query|[[String](#schemastring)]|true|Specify the keys for the tags to remove from the resource.|
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
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CancelJobResponse">CancelJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemacanceljobresponse"></a>
<a id="schema_CancelJobResponse"></a>
<a id="tocScanceljobresponse"></a>
<a id="tocscanceljobresponse"></a>

```json
{
  "cancellationStatus": {},
  "jobArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cancellationStatus|object|true|none|none|
|jobArn|object|true|none|none|

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

<h2 id="tocS_InternalServiceException">InternalServiceException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserviceexception"></a>
<a id="schema_InternalServiceException"></a>
<a id="tocSinternalserviceexception"></a>
<a id="tocsinternalserviceexception"></a>

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

<h2 id="tocS_CancelQuantumTaskResponse">CancelQuantumTaskResponse</h2>
<!-- backwards compatibility -->
<a id="schemacancelquantumtaskresponse"></a>
<a id="schema_CancelQuantumTaskResponse"></a>
<a id="tocScancelquantumtaskresponse"></a>
<a id="tocscancelquantumtaskresponse"></a>

```json
{
  "cancellationStatus": {},
  "quantumTaskArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cancellationStatus|object|true|none|none|
|quantumTaskArn|object|true|none|none|

<h2 id="tocS_CreateJobResponse">CreateJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatejobresponse"></a>
<a id="schema_CreateJobResponse"></a>
<a id="tocScreatejobresponse"></a>
<a id="tocscreatejobresponse"></a>

```json
{
  "jobArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobArn|object|true|none|none|

<h2 id="tocS_ContainerImage">ContainerImage</h2>
<!-- backwards compatibility -->
<a id="schemacontainerimage"></a>
<a id="schema_ContainerImage"></a>
<a id="tocScontainerimage"></a>
<a id="tocscontainerimage"></a>

```json
{
  "uri": {}
}
```

The container image used to create an Amazon Braket job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uri|object|true|none|none|

<h2 id="tocS_ScriptModeConfig">ScriptModeConfig</h2>
<!-- backwards compatibility -->
<a id="schemascriptmodeconfig"></a>
<a id="schema_ScriptModeConfig"></a>
<a id="tocSscriptmodeconfig"></a>
<a id="tocsscriptmodeconfig"></a>

```json
{
  "compressionType": {},
  "entryPoint": {},
  "s3Uri": {}
}
```

Contains information about the Python scripts used for entry and by an Amazon Braket job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|compressionType|object|false|none|none|
|entryPoint|object|true|none|none|
|s3Uri|object|true|none|none|

<h2 id="tocS_String4096">String4096</h2>
<!-- backwards compatibility -->
<a id="schemastring4096"></a>
<a id="schema_String4096"></a>
<a id="tocSstring4096"></a>
<a id="tocsstring4096"></a>

```json
"string"
```

<h2 id="tocS_S3Path">S3Path</h2>
<!-- backwards compatibility -->
<a id="schemas3path"></a>
<a id="schema_S3Path"></a>
<a id="tocSs3path"></a>
<a id="tocss3path"></a>

```json
"string"
```

<h2 id="tocS_String256">String256</h2>
<!-- backwards compatibility -->
<a id="schemastring256"></a>
<a id="schema_String256"></a>
<a id="tocSstring256"></a>
<a id="tocsstring256"></a>

```json
"string"
```

<h2 id="tocS_HyperParametersValueString">HyperParametersValueString</h2>
<!-- backwards compatibility -->
<a id="schemahyperparametersvaluestring"></a>
<a id="schema_HyperParametersValueString"></a>
<a id="tocShyperparametersvaluestring"></a>
<a id="tocshyperparametersvaluestring"></a>

```json
"string"
```

<h2 id="tocS_InputFileConfig">InputFileConfig</h2>
<!-- backwards compatibility -->
<a id="schemainputfileconfig"></a>
<a id="schema_InputFileConfig"></a>
<a id="tocSinputfileconfig"></a>
<a id="tocsinputfileconfig"></a>

```json
{
  "channelName": {},
  "contentType": {},
  "dataSource": {
    "s3DataSource": {
      "s3Uri": {}
    }
  }
}
```

A list of parameters that specify the input channels, type of input data, and where it is located.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channelName|object|true|none|none|
|contentType|object|false|none|none|
|dataSource|object|true|none|none|

<h2 id="tocS_InstanceConfigInstanceCountInteger">InstanceConfigInstanceCountInteger</h2>
<!-- backwards compatibility -->
<a id="schemainstanceconfiginstancecountinteger"></a>
<a id="schema_InstanceConfigInstanceCountInteger"></a>
<a id="tocSinstanceconfiginstancecountinteger"></a>
<a id="tocsinstanceconfiginstancecountinteger"></a>

```json
1
```

<h2 id="tocS_InstanceType">InstanceType</h2>
<!-- backwards compatibility -->
<a id="schemainstancetype"></a>
<a id="schema_InstanceType"></a>
<a id="tocSinstancetype"></a>
<a id="tocsinstancetype"></a>

```json
"ml.m4.xlarge"
```

<h2 id="tocS_InstanceConfigVolumeSizeInGbInteger">InstanceConfigVolumeSizeInGbInteger</h2>
<!-- backwards compatibility -->
<a id="schemainstanceconfigvolumesizeingbinteger"></a>
<a id="schema_InstanceConfigVolumeSizeInGbInteger"></a>
<a id="tocSinstanceconfigvolumesizeingbinteger"></a>
<a id="tocsinstanceconfigvolumesizeingbinteger"></a>

```json
1
```

<h2 id="tocS_String2048">String2048</h2>
<!-- backwards compatibility -->
<a id="schemastring2048"></a>
<a id="schema_String2048"></a>
<a id="tocSstring2048"></a>
<a id="tocsstring2048"></a>

```json
"string"
```

<h2 id="tocS_JobStoppingConditionMaxRuntimeInSecondsInteger">JobStoppingConditionMaxRuntimeInSecondsInteger</h2>
<!-- backwards compatibility -->
<a id="schemajobstoppingconditionmaxruntimeinsecondsinteger"></a>
<a id="schema_JobStoppingConditionMaxRuntimeInSecondsInteger"></a>
<a id="tocSjobstoppingconditionmaxruntimeinsecondsinteger"></a>
<a id="tocsjobstoppingconditionmaxruntimeinsecondsinteger"></a>

```json
1
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

<h2 id="tocS_DeviceRetiredException">DeviceRetiredException</h2>
<!-- backwards compatibility -->
<a id="schemadeviceretiredexception"></a>
<a id="schema_DeviceRetiredException"></a>
<a id="tocSdeviceretiredexception"></a>
<a id="tocsdeviceretiredexception"></a>

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

<h2 id="tocS_CreateQuantumTaskResponse">CreateQuantumTaskResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatequantumtaskresponse"></a>
<a id="schema_CreateQuantumTaskResponse"></a>
<a id="tocScreatequantumtaskresponse"></a>
<a id="tocscreatequantumtaskresponse"></a>

```json
{
  "quantumTaskArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|quantumTaskArn|object|true|none|none|

<h2 id="tocS_DeviceOfflineException">DeviceOfflineException</h2>
<!-- backwards compatibility -->
<a id="schemadeviceofflineexception"></a>
<a id="schema_DeviceOfflineException"></a>
<a id="tocSdeviceofflineexception"></a>
<a id="tocsdeviceofflineexception"></a>

```json
null
```

<h2 id="tocS_GetDeviceResponse">GetDeviceResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdeviceresponse"></a>
<a id="schema_GetDeviceResponse"></a>
<a id="tocSgetdeviceresponse"></a>
<a id="tocsgetdeviceresponse"></a>

```json
{
  "deviceArn": {},
  "deviceCapabilities": {},
  "deviceName": {},
  "deviceStatus": {},
  "deviceType": {},
  "providerName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceArn|object|true|none|none|
|deviceCapabilities|object|true|none|none|
|deviceName|object|true|none|none|
|deviceStatus|object|true|none|none|
|deviceType|object|true|none|none|
|providerName|object|true|none|none|

<h2 id="tocS_GetJobResponse">GetJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetjobresponse"></a>
<a id="schema_GetJobResponse"></a>
<a id="tocSgetjobresponse"></a>
<a id="tocsgetjobresponse"></a>

```json
{
  "algorithmSpecification": {
    "containerImage": {
      "uri": {}
    },
    "scriptModeConfig": {
      "compressionType": {},
      "entryPoint": {},
      "s3Uri": {}
    }
  },
  "billableDuration": {},
  "checkpointConfig": {
    "localPath": {},
    "s3Uri": {}
  },
  "createdAt": {},
  "deviceConfig": {
    "device": {}
  },
  "endedAt": {},
  "events": {},
  "failureReason": {},
  "hyperParameters": {
    "property1": "string",
    "property2": "string"
  },
  "inputDataConfig": {},
  "instanceConfig": {
    "instanceCount": {},
    "instanceType": {},
    "volumeSizeInGb": {}
  },
  "jobArn": {},
  "jobName": {},
  "outputDataConfig": {
    "kmsKeyId": {},
    "s3Path": {}
  },
  "roleArn": {},
  "startedAt": {},
  "status": {},
  "stoppingCondition": {
    "maxRuntimeInSeconds": {}
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
|algorithmSpecification|object|true|none|none|
|billableDuration|object|false|none|none|
|checkpointConfig|object|false|none|none|
|createdAt|object|true|none|none|
|deviceConfig|object|false|none|none|
|endedAt|object|false|none|none|
|events|object|false|none|none|
|failureReason|object|false|none|none|
|hyperParameters|object|false|none|none|
|inputDataConfig|object|false|none|none|
|instanceConfig|object|true|none|none|
|jobArn|object|true|none|none|
|jobName|object|true|none|none|
|outputDataConfig|object|true|none|none|
|roleArn|object|true|none|none|
|startedAt|object|false|none|none|
|status|object|true|none|none|
|stoppingCondition|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_GetQuantumTaskResponse">GetQuantumTaskResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetquantumtaskresponse"></a>
<a id="schema_GetQuantumTaskResponse"></a>
<a id="tocSgetquantumtaskresponse"></a>
<a id="tocsgetquantumtaskresponse"></a>

```json
{
  "createdAt": {},
  "deviceArn": {},
  "deviceParameters": {},
  "endedAt": {},
  "failureReason": {},
  "jobArn": {},
  "outputS3Bucket": {},
  "outputS3Directory": {},
  "quantumTaskArn": {},
  "shots": {},
  "status": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|object|true|none|none|
|deviceArn|object|true|none|none|
|deviceParameters|object|true|none|none|
|endedAt|object|false|none|none|
|failureReason|object|false|none|none|
|jobArn|object|false|none|none|
|outputS3Bucket|object|true|none|none|
|outputS3Directory|object|true|none|none|
|quantumTaskArn|object|true|none|none|
|shots|object|true|none|none|
|status|object|true|none|none|
|tags|object|false|none|none|

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

<h2 id="tocS_SearchDevicesResponse">SearchDevicesResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchdevicesresponse"></a>
<a id="schema_SearchDevicesResponse"></a>
<a id="tocSsearchdevicesresponse"></a>
<a id="tocssearchdevicesresponse"></a>

```json
{
  "devices": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|devices|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_SearchDevicesFilter">SearchDevicesFilter</h2>
<!-- backwards compatibility -->
<a id="schemasearchdevicesfilter"></a>
<a id="schema_SearchDevicesFilter"></a>
<a id="tocSsearchdevicesfilter"></a>
<a id="tocssearchdevicesfilter"></a>

```json
{
  "name": {},
  "values": {}
}
```

The filter to use for searching devices.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|values|object|true|none|none|

<h2 id="tocS_SearchJobsResponse">SearchJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchjobsresponse"></a>
<a id="schema_SearchJobsResponse"></a>
<a id="tocSsearchjobsresponse"></a>
<a id="tocssearchjobsresponse"></a>

```json
{
  "jobs": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobs|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_SearchJobsFilter">SearchJobsFilter</h2>
<!-- backwards compatibility -->
<a id="schemasearchjobsfilter"></a>
<a id="schema_SearchJobsFilter"></a>
<a id="tocSsearchjobsfilter"></a>
<a id="tocssearchjobsfilter"></a>

```json
{
  "name": {},
  "operator": {},
  "values": {}
}
```

A filter used to search for Amazon Braket jobs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|operator|object|true|none|none|
|values|object|true|none|none|

<h2 id="tocS_SearchQuantumTasksResponse">SearchQuantumTasksResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchquantumtasksresponse"></a>
<a id="schema_SearchQuantumTasksResponse"></a>
<a id="tocSsearchquantumtasksresponse"></a>
<a id="tocssearchquantumtasksresponse"></a>

```json
{
  "nextToken": {},
  "quantumTasks": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|quantumTasks|object|true|none|none|

<h2 id="tocS_SearchQuantumTasksFilter">SearchQuantumTasksFilter</h2>
<!-- backwards compatibility -->
<a id="schemasearchquantumtasksfilter"></a>
<a id="schema_SearchQuantumTasksFilter"></a>
<a id="tocSsearchquantumtasksfilter"></a>
<a id="tocssearchquantumtasksfilter"></a>

```json
{
  "name": {},
  "operator": {},
  "values": {}
}
```

A filter to use to search for tasks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|operator|object|true|none|none|
|values|object|true|none|none|

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

<h2 id="tocS_AlgorithmSpecification">AlgorithmSpecification</h2>
<!-- backwards compatibility -->
<a id="schemaalgorithmspecification"></a>
<a id="schema_AlgorithmSpecification"></a>
<a id="tocSalgorithmspecification"></a>
<a id="tocsalgorithmspecification"></a>

```json
{
  "containerImage": {
    "uri": {}
  },
  "scriptModeConfig": {
    "compressionType": {},
    "entryPoint": {},
    "s3Uri": {}
  }
}
```

Defines the Amazon Braket job to be created. Specifies the container image the job uses and the paths to the Python scripts used for entry and training.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containerImage|object|false|none|none|
|scriptModeConfig|object|false|none|none|

<h2 id="tocS_JobArn">JobArn</h2>
<!-- backwards compatibility -->
<a id="schemajobarn"></a>
<a id="schema_JobArn"></a>
<a id="tocSjobarn"></a>
<a id="tocsjobarn"></a>

```json
"string"
```

<h2 id="tocS_CancelJobRequest">CancelJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacanceljobrequest"></a>
<a id="schema_CancelJobRequest"></a>
<a id="tocScanceljobrequest"></a>
<a id="tocscanceljobrequest"></a>

```json
{}
```

<h2 id="tocS_CancellationStatus">CancellationStatus</h2>
<!-- backwards compatibility -->
<a id="schemacancellationstatus"></a>
<a id="schema_CancellationStatus"></a>
<a id="tocScancellationstatus"></a>
<a id="tocscancellationstatus"></a>

```json
"CANCELLING"
```

<h2 id="tocS_String64">String64</h2>
<!-- backwards compatibility -->
<a id="schemastring64"></a>
<a id="schema_String64"></a>
<a id="tocSstring64"></a>
<a id="tocsstring64"></a>

```json
"string"
```

<h2 id="tocS_QuantumTaskArn">QuantumTaskArn</h2>
<!-- backwards compatibility -->
<a id="schemaquantumtaskarn"></a>
<a id="schema_QuantumTaskArn"></a>
<a id="tocSquantumtaskarn"></a>
<a id="tocsquantumtaskarn"></a>

```json
"string"
```

<h2 id="tocS_CancelQuantumTaskRequest">CancelQuantumTaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemacancelquantumtaskrequest"></a>
<a id="schema_CancelQuantumTaskRequest"></a>
<a id="tocScancelquantumtaskrequest"></a>
<a id="tocscancelquantumtaskrequest"></a>

```json
{
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|object|true|none|none|

<h2 id="tocS_CompressionType">CompressionType</h2>
<!-- backwards compatibility -->
<a id="schemacompressiontype"></a>
<a id="schema_CompressionType"></a>
<a id="tocScompressiontype"></a>
<a id="tocscompressiontype"></a>

```json
"NONE"
```

<h2 id="tocS_Uri">Uri</h2>
<!-- backwards compatibility -->
<a id="schemauri"></a>
<a id="schema_Uri"></a>
<a id="tocSuri"></a>
<a id="tocsuri"></a>

```json
"string"
```

<h2 id="tocS_JobCheckpointConfig">JobCheckpointConfig</h2>
<!-- backwards compatibility -->
<a id="schemajobcheckpointconfig"></a>
<a id="schema_JobCheckpointConfig"></a>
<a id="tocSjobcheckpointconfig"></a>
<a id="tocsjobcheckpointconfig"></a>

```json
{
  "localPath": {},
  "s3Uri": {}
}
```

Contains information about the output locations for job checkpoint data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|localPath|object|false|none|none|
|s3Uri|object|true|none|none|

<h2 id="tocS_DeviceConfig">DeviceConfig</h2>
<!-- backwards compatibility -->
<a id="schemadeviceconfig"></a>
<a id="schema_DeviceConfig"></a>
<a id="tocSdeviceconfig"></a>
<a id="tocsdeviceconfig"></a>

```json
{
  "device": {}
}
```

Configures the quantum processing units (QPUs) or simulator used to create and run an Amazon Braket job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|device|object|true|none|none|

<h2 id="tocS_HyperParameters">HyperParameters</h2>
<!-- backwards compatibility -->
<a id="schemahyperparameters"></a>
<a id="schema_HyperParameters"></a>
<a id="tocShyperparameters"></a>
<a id="tocshyperparameters"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[HyperParametersValueString](#schemahyperparametersvaluestring)|false|none|none|

<h2 id="tocS_CreateJobRequestInputDataConfigList">CreateJobRequestInputDataConfigList</h2>
<!-- backwards compatibility -->
<a id="schemacreatejobrequestinputdataconfiglist"></a>
<a id="schema_CreateJobRequestInputDataConfigList"></a>
<a id="tocScreatejobrequestinputdataconfiglist"></a>
<a id="tocscreatejobrequestinputdataconfiglist"></a>

```json
[
  {
    "channelName": {},
    "contentType": {},
    "dataSource": {
      "s3DataSource": {
        "s3Uri": {}
      }
    }
  }
]
```

<h2 id="tocS_InstanceConfig">InstanceConfig</h2>
<!-- backwards compatibility -->
<a id="schemainstanceconfig"></a>
<a id="schema_InstanceConfig"></a>
<a id="tocSinstanceconfig"></a>
<a id="tocsinstanceconfig"></a>

```json
{
  "instanceCount": {},
  "instanceType": {},
  "volumeSizeInGb": {}
}
```

Configures the resource instances to use while running the Amazon Braket hybrid job on Amazon Braket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceCount|object|false|none|none|
|instanceType|object|true|none|none|
|volumeSizeInGb|object|true|none|none|

<h2 id="tocS_CreateJobRequestJobNameString">CreateJobRequestJobNameString</h2>
<!-- backwards compatibility -->
<a id="schemacreatejobrequestjobnamestring"></a>
<a id="schema_CreateJobRequestJobNameString"></a>
<a id="tocScreatejobrequestjobnamestring"></a>
<a id="tocscreatejobrequestjobnamestring"></a>

```json
"string"
```

<h2 id="tocS_JobOutputDataConfig">JobOutputDataConfig</h2>
<!-- backwards compatibility -->
<a id="schemajoboutputdataconfig"></a>
<a id="schema_JobOutputDataConfig"></a>
<a id="tocSjoboutputdataconfig"></a>
<a id="tocsjoboutputdataconfig"></a>

```json
{
  "kmsKeyId": {},
  "s3Path": {}
}
```

Specifies the path to the S3 location where you want to store job artifacts and the encryption key used to store them.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kmsKeyId|object|false|none|none|
|s3Path|object|true|none|none|

<h2 id="tocS_RoleArn">RoleArn</h2>
<!-- backwards compatibility -->
<a id="schemarolearn"></a>
<a id="schema_RoleArn"></a>
<a id="tocSrolearn"></a>
<a id="tocsrolearn"></a>

```json
"string"
```

<h2 id="tocS_JobStoppingCondition">JobStoppingCondition</h2>
<!-- backwards compatibility -->
<a id="schemajobstoppingcondition"></a>
<a id="schema_JobStoppingCondition"></a>
<a id="tocSjobstoppingcondition"></a>
<a id="tocsjobstoppingcondition"></a>

```json
{
  "maxRuntimeInSeconds": {}
}
```

Specifies limits for how long an Amazon Braket job can run.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxRuntimeInSeconds|object|false|none|none|

<h2 id="tocS_TagsMap">TagsMap</h2>
<!-- backwards compatibility -->
<a id="schematagsmap"></a>
<a id="schema_TagsMap"></a>
<a id="tocStagsmap"></a>
<a id="tocstagsmap"></a>

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

<h2 id="tocS_CreateJobRequest">CreateJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatejobrequest"></a>
<a id="schema_CreateJobRequest"></a>
<a id="tocScreatejobrequest"></a>
<a id="tocscreatejobrequest"></a>

```json
{
  "algorithmSpecification": {
    "containerImage": {
      "uri": {}
    },
    "scriptModeConfig": {
      "compressionType": {},
      "entryPoint": {},
      "s3Uri": {}
    }
  },
  "checkpointConfig": {
    "localPath": {},
    "s3Uri": {}
  },
  "clientToken": {},
  "deviceConfig": {
    "device": {}
  },
  "hyperParameters": {
    "property1": "string",
    "property2": "string"
  },
  "inputDataConfig": {},
  "instanceConfig": {
    "instanceCount": {},
    "instanceType": {},
    "volumeSizeInGb": {}
  },
  "jobName": {},
  "outputDataConfig": {
    "kmsKeyId": {},
    "s3Path": {}
  },
  "roleArn": {},
  "stoppingCondition": {
    "maxRuntimeInSeconds": {}
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
|algorithmSpecification|object|true|none|none|
|checkpointConfig|object|false|none|none|
|clientToken|object|true|none|none|
|deviceConfig|object|true|none|none|
|hyperParameters|object|false|none|none|
|inputDataConfig|object|false|none|none|
|instanceConfig|object|true|none|none|
|jobName|object|true|none|none|
|outputDataConfig|object|true|none|none|
|roleArn|object|true|none|none|
|stoppingCondition|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_JsonValue">JsonValue</h2>
<!-- backwards compatibility -->
<a id="schemajsonvalue"></a>
<a id="schema_JsonValue"></a>
<a id="tocSjsonvalue"></a>
<a id="tocsjsonvalue"></a>

```json
"string"
```

<h2 id="tocS_DeviceArn">DeviceArn</h2>
<!-- backwards compatibility -->
<a id="schemadevicearn"></a>
<a id="schema_DeviceArn"></a>
<a id="tocSdevicearn"></a>
<a id="tocsdevicearn"></a>

```json
"string"
```

<h2 id="tocS_CreateQuantumTaskRequestDeviceParametersString">CreateQuantumTaskRequestDeviceParametersString</h2>
<!-- backwards compatibility -->
<a id="schemacreatequantumtaskrequestdeviceparametersstring"></a>
<a id="schema_CreateQuantumTaskRequestDeviceParametersString"></a>
<a id="tocScreatequantumtaskrequestdeviceparametersstring"></a>
<a id="tocscreatequantumtaskrequestdeviceparametersstring"></a>

```json
"string"
```

<h2 id="tocS_JobToken">JobToken</h2>
<!-- backwards compatibility -->
<a id="schemajobtoken"></a>
<a id="schema_JobToken"></a>
<a id="tocSjobtoken"></a>
<a id="tocsjobtoken"></a>

```json
"string"
```

<h2 id="tocS_CreateQuantumTaskRequestOutputS3BucketString">CreateQuantumTaskRequestOutputS3BucketString</h2>
<!-- backwards compatibility -->
<a id="schemacreatequantumtaskrequestoutputs3bucketstring"></a>
<a id="schema_CreateQuantumTaskRequestOutputS3BucketString"></a>
<a id="tocScreatequantumtaskrequestoutputs3bucketstring"></a>
<a id="tocscreatequantumtaskrequestoutputs3bucketstring"></a>

```json
"string"
```

<h2 id="tocS_CreateQuantumTaskRequestOutputS3KeyPrefixString">CreateQuantumTaskRequestOutputS3KeyPrefixString</h2>
<!-- backwards compatibility -->
<a id="schemacreatequantumtaskrequestoutputs3keyprefixstring"></a>
<a id="schema_CreateQuantumTaskRequestOutputS3KeyPrefixString"></a>
<a id="tocScreatequantumtaskrequestoutputs3keyprefixstring"></a>
<a id="tocscreatequantumtaskrequestoutputs3keyprefixstring"></a>

```json
"string"
```

<h2 id="tocS_CreateQuantumTaskRequestShotsLong">CreateQuantumTaskRequestShotsLong</h2>
<!-- backwards compatibility -->
<a id="schemacreatequantumtaskrequestshotslong"></a>
<a id="schema_CreateQuantumTaskRequestShotsLong"></a>
<a id="tocScreatequantumtaskrequestshotslong"></a>
<a id="tocscreatequantumtaskrequestshotslong"></a>

```json
0
```

<h2 id="tocS_CreateQuantumTaskRequest">CreateQuantumTaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatequantumtaskrequest"></a>
<a id="schema_CreateQuantumTaskRequest"></a>
<a id="tocScreatequantumtaskrequest"></a>
<a id="tocscreatequantumtaskrequest"></a>

```json
{
  "action": {},
  "clientToken": {},
  "deviceArn": {},
  "deviceParameters": {},
  "jobToken": {},
  "outputS3Bucket": {},
  "outputS3KeyPrefix": {},
  "shots": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|clientToken|object|true|none|none|
|deviceArn|object|true|none|none|
|deviceParameters|object|false|none|none|
|jobToken|object|false|none|none|
|outputS3Bucket|object|true|none|none|
|outputS3KeyPrefix|object|true|none|none|
|shots|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_S3DataSource">S3DataSource</h2>
<!-- backwards compatibility -->
<a id="schemas3datasource"></a>
<a id="schema_S3DataSource"></a>
<a id="tocSs3datasource"></a>
<a id="tocss3datasource"></a>

```json
{
  "s3Uri": {}
}
```

Information about the data stored in Amazon S3 used by the Amazon Braket job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|s3Uri|object|true|none|none|

<h2 id="tocS_DataSource">DataSource</h2>
<!-- backwards compatibility -->
<a id="schemadatasource"></a>
<a id="schema_DataSource"></a>
<a id="tocSdatasource"></a>
<a id="tocsdatasource"></a>

```json
{
  "s3DataSource": {
    "s3Uri": {}
  }
}
```

Information about the source of the data used by the Amazon Braket job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|s3DataSource|object|true|none|none|

<h2 id="tocS_DeviceStatus">DeviceStatus</h2>
<!-- backwards compatibility -->
<a id="schemadevicestatus"></a>
<a id="schema_DeviceStatus"></a>
<a id="tocSdevicestatus"></a>
<a id="tocsdevicestatus"></a>

```json
"ONLINE"
```

<h2 id="tocS_DeviceType">DeviceType</h2>
<!-- backwards compatibility -->
<a id="schemadevicetype"></a>
<a id="schema_DeviceType"></a>
<a id="tocSdevicetype"></a>
<a id="tocsdevicetype"></a>

```json
"QPU"
```

<h2 id="tocS_DeviceSummary">DeviceSummary</h2>
<!-- backwards compatibility -->
<a id="schemadevicesummary"></a>
<a id="schema_DeviceSummary"></a>
<a id="tocSdevicesummary"></a>
<a id="tocsdevicesummary"></a>

```json
{
  "deviceArn": {},
  "deviceName": {},
  "deviceStatus": {},
  "deviceType": {},
  "providerName": {}
}
```

Includes information about the device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceArn|object|true|none|none|
|deviceName|object|true|none|none|
|deviceStatus|object|true|none|none|
|deviceType|object|true|none|none|
|providerName|object|true|none|none|

<h2 id="tocS_DeviceSummaryList">DeviceSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemadevicesummarylist"></a>
<a id="schema_DeviceSummaryList"></a>
<a id="tocSdevicesummarylist"></a>
<a id="tocsdevicesummarylist"></a>

```json
[
  {
    "deviceArn": {},
    "deviceName": {},
    "deviceStatus": {},
    "deviceType": {},
    "providerName": {}
  }
]
```

<h2 id="tocS_GetDeviceRequest">GetDeviceRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdevicerequest"></a>
<a id="schema_GetDeviceRequest"></a>
<a id="tocSgetdevicerequest"></a>
<a id="tocsgetdevicerequest"></a>

```json
{}
```

<h2 id="tocS_GetJobRequest">GetJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetjobrequest"></a>
<a id="schema_GetJobRequest"></a>
<a id="tocSgetjobrequest"></a>
<a id="tocsgetjobrequest"></a>

```json
{}
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

<h2 id="tocS_SyntheticTimestamp_date_time">SyntheticTimestamp_date_time</h2>
<!-- backwards compatibility -->
<a id="schemasynthetictimestamp_date_time"></a>
<a id="schema_SyntheticTimestamp_date_time"></a>
<a id="tocSsynthetictimestamp_date_time"></a>
<a id="tocssynthetictimestamp_date_time"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_JobEvents">JobEvents</h2>
<!-- backwards compatibility -->
<a id="schemajobevents"></a>
<a id="schema_JobEvents"></a>
<a id="tocSjobevents"></a>
<a id="tocsjobevents"></a>

```json
[
  {
    "eventType": {},
    "message": {},
    "timeOfEvent": {}
  }
]
```

<h2 id="tocS_String1024">String1024</h2>
<!-- backwards compatibility -->
<a id="schemastring1024"></a>
<a id="schema_String1024"></a>
<a id="tocSstring1024"></a>
<a id="tocsstring1024"></a>

```json
"string"
```

<h2 id="tocS_InputConfigList">InputConfigList</h2>
<!-- backwards compatibility -->
<a id="schemainputconfiglist"></a>
<a id="schema_InputConfigList"></a>
<a id="tocSinputconfiglist"></a>
<a id="tocsinputconfiglist"></a>

```json
[
  {
    "channelName": {},
    "contentType": {},
    "dataSource": {
      "s3DataSource": {
        "s3Uri": {}
      }
    }
  }
]
```

<h2 id="tocS_GetJobResponseJobNameString">GetJobResponseJobNameString</h2>
<!-- backwards compatibility -->
<a id="schemagetjobresponsejobnamestring"></a>
<a id="schema_GetJobResponseJobNameString"></a>
<a id="tocSgetjobresponsejobnamestring"></a>
<a id="tocsgetjobresponsejobnamestring"></a>

```json
"string"
```

<h2 id="tocS_JobPrimaryStatus">JobPrimaryStatus</h2>
<!-- backwards compatibility -->
<a id="schemajobprimarystatus"></a>
<a id="schema_JobPrimaryStatus"></a>
<a id="tocSjobprimarystatus"></a>
<a id="tocsjobprimarystatus"></a>

```json
"QUEUED"
```

<h2 id="tocS_GetQuantumTaskRequest">GetQuantumTaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetquantumtaskrequest"></a>
<a id="schema_GetQuantumTaskRequest"></a>
<a id="tocSgetquantumtaskrequest"></a>
<a id="tocsgetquantumtaskrequest"></a>

```json
{}
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

<h2 id="tocS_QuantumTaskStatus">QuantumTaskStatus</h2>
<!-- backwards compatibility -->
<a id="schemaquantumtaskstatus"></a>
<a id="schema_QuantumTaskStatus"></a>
<a id="tocSquantumtaskstatus"></a>
<a id="tocsquantumtaskstatus"></a>

```json
"CREATED"
```

<h2 id="tocS_InputFileConfigChannelNameString">InputFileConfigChannelNameString</h2>
<!-- backwards compatibility -->
<a id="schemainputfileconfigchannelnamestring"></a>
<a id="schema_InputFileConfigChannelNameString"></a>
<a id="tocSinputfileconfigchannelnamestring"></a>
<a id="tocsinputfileconfigchannelnamestring"></a>

```json
"string"
```

<h2 id="tocS_JobEventType">JobEventType</h2>
<!-- backwards compatibility -->
<a id="schemajobeventtype"></a>
<a id="schema_JobEventType"></a>
<a id="tocSjobeventtype"></a>
<a id="tocsjobeventtype"></a>

```json
"WAITING_FOR_PRIORITY"
```

<h2 id="tocS_JobEventDetailsMessageString">JobEventDetailsMessageString</h2>
<!-- backwards compatibility -->
<a id="schemajobeventdetailsmessagestring"></a>
<a id="schema_JobEventDetailsMessageString"></a>
<a id="tocSjobeventdetailsmessagestring"></a>
<a id="tocsjobeventdetailsmessagestring"></a>

```json
"string"
```

<h2 id="tocS_JobEventDetails">JobEventDetails</h2>
<!-- backwards compatibility -->
<a id="schemajobeventdetails"></a>
<a id="schema_JobEventDetails"></a>
<a id="tocSjobeventdetails"></a>
<a id="tocsjobeventdetails"></a>

```json
{
  "eventType": {},
  "message": {},
  "timeOfEvent": {}
}
```

Details about the type and time events occurred related to the Amazon Braket job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventType|object|false|none|none|
|message|object|false|none|none|
|timeOfEvent|object|false|none|none|

<h2 id="tocS_JobSummary">JobSummary</h2>
<!-- backwards compatibility -->
<a id="schemajobsummary"></a>
<a id="schema_JobSummary"></a>
<a id="tocSjobsummary"></a>
<a id="tocsjobsummary"></a>

```json
{
  "createdAt": {},
  "device": {},
  "endedAt": {},
  "jobArn": {},
  "jobName": {},
  "startedAt": {},
  "status": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Provides summary information about an Amazon Braket job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|object|true|none|none|
|device|object|true|none|none|
|endedAt|object|false|none|none|
|jobArn|object|true|none|none|
|jobName|object|true|none|none|
|startedAt|object|false|none|none|
|status|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_JobSummaryList">JobSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemajobsummarylist"></a>
<a id="schema_JobSummaryList"></a>
<a id="tocSjobsummarylist"></a>
<a id="tocsjobsummarylist"></a>

```json
[
  {
    "createdAt": {},
    "device": {},
    "endedAt": {},
    "jobArn": {},
    "jobName": {},
    "startedAt": {},
    "status": {},
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

<h2 id="tocS_QuantumTaskSummary">QuantumTaskSummary</h2>
<!-- backwards compatibility -->
<a id="schemaquantumtasksummary"></a>
<a id="schema_QuantumTaskSummary"></a>
<a id="tocSquantumtasksummary"></a>
<a id="tocsquantumtasksummary"></a>

```json
{
  "createdAt": {},
  "deviceArn": {},
  "endedAt": {},
  "outputS3Bucket": {},
  "outputS3Directory": {},
  "quantumTaskArn": {},
  "shots": {},
  "status": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Includes information about a quantum task.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|object|true|none|none|
|deviceArn|object|true|none|none|
|endedAt|object|false|none|none|
|outputS3Bucket|object|true|none|none|
|outputS3Directory|object|true|none|none|
|quantumTaskArn|object|true|none|none|
|shots|object|true|none|none|
|status|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_QuantumTaskSummaryList">QuantumTaskSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaquantumtasksummarylist"></a>
<a id="schema_QuantumTaskSummaryList"></a>
<a id="tocSquantumtasksummarylist"></a>
<a id="tocsquantumtasksummarylist"></a>

```json
[
  {
    "createdAt": {},
    "deviceArn": {},
    "endedAt": {},
    "outputS3Bucket": {},
    "outputS3Directory": {},
    "quantumTaskArn": {},
    "shots": {},
    "status": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_SearchDevicesFilterNameString">SearchDevicesFilterNameString</h2>
<!-- backwards compatibility -->
<a id="schemasearchdevicesfilternamestring"></a>
<a id="schema_SearchDevicesFilterNameString"></a>
<a id="tocSsearchdevicesfilternamestring"></a>
<a id="tocssearchdevicesfilternamestring"></a>

```json
"string"
```

<h2 id="tocS_SearchDevicesFilterValuesList">SearchDevicesFilterValuesList</h2>
<!-- backwards compatibility -->
<a id="schemasearchdevicesfiltervalueslist"></a>
<a id="schema_SearchDevicesFilterValuesList"></a>
<a id="tocSsearchdevicesfiltervalueslist"></a>
<a id="tocssearchdevicesfiltervalueslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SearchDevicesRequestFiltersList">SearchDevicesRequestFiltersList</h2>
<!-- backwards compatibility -->
<a id="schemasearchdevicesrequestfilterslist"></a>
<a id="schema_SearchDevicesRequestFiltersList"></a>
<a id="tocSsearchdevicesrequestfilterslist"></a>
<a id="tocssearchdevicesrequestfilterslist"></a>

```json
[
  {
    "name": {},
    "values": {}
  }
]
```

<h2 id="tocS_SearchDevicesRequestMaxResultsInteger">SearchDevicesRequestMaxResultsInteger</h2>
<!-- backwards compatibility -->
<a id="schemasearchdevicesrequestmaxresultsinteger"></a>
<a id="schema_SearchDevicesRequestMaxResultsInteger"></a>
<a id="tocSsearchdevicesrequestmaxresultsinteger"></a>
<a id="tocssearchdevicesrequestmaxresultsinteger"></a>

```json
1
```

<h2 id="tocS_SearchDevicesRequest">SearchDevicesRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchdevicesrequest"></a>
<a id="schema_SearchDevicesRequest"></a>
<a id="tocSsearchdevicesrequest"></a>
<a id="tocssearchdevicesrequest"></a>

```json
{
  "filters": {},
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|object|true|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_SearchJobsFilterOperator">SearchJobsFilterOperator</h2>
<!-- backwards compatibility -->
<a id="schemasearchjobsfilteroperator"></a>
<a id="schema_SearchJobsFilterOperator"></a>
<a id="tocSsearchjobsfilteroperator"></a>
<a id="tocssearchjobsfilteroperator"></a>

```json
"LT"
```

<h2 id="tocS_SearchJobsFilterValuesList">SearchJobsFilterValuesList</h2>
<!-- backwards compatibility -->
<a id="schemasearchjobsfiltervalueslist"></a>
<a id="schema_SearchJobsFilterValuesList"></a>
<a id="tocSsearchjobsfiltervalueslist"></a>
<a id="tocssearchjobsfiltervalueslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SearchJobsRequestFiltersList">SearchJobsRequestFiltersList</h2>
<!-- backwards compatibility -->
<a id="schemasearchjobsrequestfilterslist"></a>
<a id="schema_SearchJobsRequestFiltersList"></a>
<a id="tocSsearchjobsrequestfilterslist"></a>
<a id="tocssearchjobsrequestfilterslist"></a>

```json
[
  {
    "name": {},
    "operator": {},
    "values": {}
  }
]
```

<h2 id="tocS_SearchJobsRequestMaxResultsInteger">SearchJobsRequestMaxResultsInteger</h2>
<!-- backwards compatibility -->
<a id="schemasearchjobsrequestmaxresultsinteger"></a>
<a id="schema_SearchJobsRequestMaxResultsInteger"></a>
<a id="tocSsearchjobsrequestmaxresultsinteger"></a>
<a id="tocssearchjobsrequestmaxresultsinteger"></a>

```json
1
```

<h2 id="tocS_SearchJobsRequest">SearchJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchjobsrequest"></a>
<a id="schema_SearchJobsRequest"></a>
<a id="tocSsearchjobsrequest"></a>
<a id="tocssearchjobsrequest"></a>

```json
{
  "filters": {},
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|object|true|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_SearchQuantumTasksFilterOperator">SearchQuantumTasksFilterOperator</h2>
<!-- backwards compatibility -->
<a id="schemasearchquantumtasksfilteroperator"></a>
<a id="schema_SearchQuantumTasksFilterOperator"></a>
<a id="tocSsearchquantumtasksfilteroperator"></a>
<a id="tocssearchquantumtasksfilteroperator"></a>

```json
"LT"
```

<h2 id="tocS_SearchQuantumTasksFilterValuesList">SearchQuantumTasksFilterValuesList</h2>
<!-- backwards compatibility -->
<a id="schemasearchquantumtasksfiltervalueslist"></a>
<a id="schema_SearchQuantumTasksFilterValuesList"></a>
<a id="tocSsearchquantumtasksfiltervalueslist"></a>
<a id="tocssearchquantumtasksfiltervalueslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SearchQuantumTasksRequestFiltersList">SearchQuantumTasksRequestFiltersList</h2>
<!-- backwards compatibility -->
<a id="schemasearchquantumtasksrequestfilterslist"></a>
<a id="schema_SearchQuantumTasksRequestFiltersList"></a>
<a id="tocSsearchquantumtasksrequestfilterslist"></a>
<a id="tocssearchquantumtasksrequestfilterslist"></a>

```json
[
  {
    "name": {},
    "operator": {},
    "values": {}
  }
]
```

<h2 id="tocS_SearchQuantumTasksRequestMaxResultsInteger">SearchQuantumTasksRequestMaxResultsInteger</h2>
<!-- backwards compatibility -->
<a id="schemasearchquantumtasksrequestmaxresultsinteger"></a>
<a id="schema_SearchQuantumTasksRequestMaxResultsInteger"></a>
<a id="tocSsearchquantumtasksrequestmaxresultsinteger"></a>
<a id="tocssearchquantumtasksrequestmaxresultsinteger"></a>

```json
1
```

<h2 id="tocS_SearchQuantumTasksRequest">SearchQuantumTasksRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchquantumtasksrequest"></a>
<a id="schema_SearchQuantumTasksRequest"></a>
<a id="tocSsearchquantumtasksrequest"></a>
<a id="tocssearchquantumtasksrequest"></a>

```json
{
  "filters": {},
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|object|true|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_TagKeys">TagKeys</h2>
<!-- backwards compatibility -->
<a id="schematagkeys"></a>
<a id="schema_TagKeys"></a>
<a id="tocStagkeys"></a>
<a id="tocstagkeys"></a>

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
