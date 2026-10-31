<h1 id="aws-iot-events">AWS IoT Events v2018-07-27</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

AWS IoT Events monitors your equipment or device fleets for failures or changes in operation, and triggers actions when such events occur. You can use AWS IoT Events API operations to create, read, update, and delete inputs and detector models, and to list their versions.

Base URLs:

* <a href="http://iotevents.us-east-1.amazonaws.com">http://iotevents.us-east-1.amazonaws.com</a> - The AWS IoT Events multi-region endpoint

* <a href="https://iotevents.us-east-1.amazonaws.com">https://iotevents.us-east-1.amazonaws.com</a> - The AWS IoT Events multi-region endpoint

* <a href="http://iotevents.cn-north-1.amazonaws.com.cn">http://iotevents.cn-north-1.amazonaws.com.cn</a> - The AWS IoT Events endpoint for China (Beijing) and China (Ningxia)

* <a href="https://iotevents.cn-north-1.amazonaws.com.cn">https://iotevents.cn-north-1.amazonaws.com.cn</a> - The AWS IoT Events endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/iotevents/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-iot-events-default">Default</h1>

## ListAlarmModels

<a id="opIdListAlarmModels"></a>

> Code samples

```bash
curl https://iotevents.us-east-1.amazonaws.com/alarm-models \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /alarm-models`

Lists the alarm models that you created. The operation returns only the metadata associated with each alarm model.

<h3 id="listalarmmodels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|The token that you can use to return the next set of results.|
|maxResults|query|integer|false|The maximum number of results to be returned per request.|
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
  "alarmModelSummaries": {},
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

<h3 id="listalarmmodels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAlarmModelsResponse](#schemalistalarmmodelsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateAlarmModel

<a id="opIdCreateAlarmModel"></a>

> Code samples

```bash
curl https://iotevents.us-east-1.amazonaws.com/alarm-models \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "alarmModelName": "string",
    "alarmModelDescription": "string",
    "roleArn": "string",
    "tags": [
      {
        "key": {},
        "value": {}
      }
    ],
    "key": "string",
    "severity": 0,
    "alarmRule": {
      "simpleRule": {
        "inputProperty": {},
        "comparisonOperator": {},
        "threshold": {}
      }
    },
    "alarmNotification": {
      "notificationActions": {}
    },
    "alarmEventActions": {
      "alarmActions": {}
    },
    "alarmCapabilities": {
      "initializationConfiguration": {
        "disabledOnInitialization": {}
      },
      "acknowledgeFlow": {
        "enabled": {}
      }
    }
  }'
```

`POST /alarm-models`

Creates an alarm model to monitor an AWS IoT Events input attribute. You can use the alarm to get notified when the value is outside a specified range. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/create-alarms.html">Create an alarm model</a> in the <i>AWS IoT Events Developer Guide</i>.

> Body parameter

```json
{
  "alarmModelName": "string",
  "alarmModelDescription": "string",
  "roleArn": "string",
  "tags": [
    {
      "key": {},
      "value": {}
    }
  ],
  "key": "string",
  "severity": 0,
  "alarmRule": {
    "simpleRule": {
      "inputProperty": {},
      "comparisonOperator": {},
      "threshold": {}
    }
  },
  "alarmNotification": {
    "notificationActions": {}
  },
  "alarmEventActions": {
    "alarmActions": {}
  },
  "alarmCapabilities": {
    "initializationConfiguration": {
      "disabledOnInitialization": {}
    },
    "acknowledgeFlow": {
      "enabled": {}
    }
  }
}
```

<h3 id="createalarmmodel-parameters">Parameters</h3>

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
|» alarmModelName|body|string|true|A unique name that helps you identify the alarm model. You can't change this name after you create the alarm model.|
|» alarmModelDescription|body|string|false|A description that tells you what the alarm model detects.|
|» roleArn|body|string|true|The ARN of the IAM role that allows the alarm to perform actions and access AWS resources. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i>.|
|» tags|body|[[Tag](#schematag)]|false|<p>A list of key-value pairs that contain metadata for the alarm model. The tags help you manage the alarm model. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/tagging-iotevents.html">Tagging your AWS IoT Events resources</a> in the <i>AWS IoT Events Developer Guide</i>.</p> <p>You can create up to 50 tags for one alarm model.</p>|
|» key|body|string|false|An input attribute used as a key to create an alarm. AWS IoT Events routes <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Input.html">inputs</a> associated with this key to the alarm.|
|» severity|body|integer|false|A non-negative integer that reflects the severity level of the alarm.|
|» alarmRule|body|object|true|Defines when your alarm is invoked.|
|» » simpleRule|body|object|false|none|
|» » » inputProperty|body|object|true|none|
|» » » comparisonOperator|body|object|true|none|
|» » » threshold|body|object|true|none|
|» alarmNotification|body|object|false|Contains information about one or more notification actions.|
|» » notificationActions|body|object|false|none|
|» alarmEventActions|body|object|false|Contains information about one or more alarm actions.|
|» » alarmActions|body|object|false|none|
|» alarmCapabilities|body|object|false|Contains the configuration information of alarm state changes.|
|» » initializationConfiguration|body|object|false|none|
|» » » disabledOnInitialization|body|object|true|none|
|» » acknowledgeFlow|body|object|false|none|
|» » » enabled|body|object|true|none|

> Example responses

> 200 Response

```json
{
  "creationTime": {},
  "alarmModelArn": {},
  "alarmModelVersion": {},
  "lastUpdateTime": {},
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

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="createalarmmodel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateAlarmModelResponse](#schemacreatealarmmodelresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDetectorModels

<a id="opIdListDetectorModels"></a>

> Code samples

```bash
curl https://iotevents.us-east-1.amazonaws.com/detector-models \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /detector-models`

Lists the detector models you have created. Only the metadata associated with each detector model is returned.

<h3 id="listdetectormodels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|The token that you can use to return the next set of results.|
|maxResults|query|integer|false|The maximum number of results to be returned per request.|
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
  "detectorModelSummaries": {},
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

<h3 id="listdetectormodels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDetectorModelsResponse](#schemalistdetectormodelsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDetectorModel

<a id="opIdCreateDetectorModel"></a>

> Code samples

```bash
curl https://iotevents.us-east-1.amazonaws.com/detector-models \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "detectorModelName": "string",
    "detectorModelDefinition": {
      "states": {},
      "initialStateName": {}
    },
    "detectorModelDescription": "string",
    "key": "string",
    "roleArn": "string",
    "tags": [
      {
        "key": {},
        "value": {}
      }
    ],
    "evaluationMethod": "BATCH"
  }'
```

`POST /detector-models`

Creates a detector model.

> Body parameter

```json
{
  "detectorModelName": "string",
  "detectorModelDefinition": {
    "states": {},
    "initialStateName": {}
  },
  "detectorModelDescription": "string",
  "key": "string",
  "roleArn": "string",
  "tags": [
    {
      "key": {},
      "value": {}
    }
  ],
  "evaluationMethod": "BATCH"
}
```

<h3 id="createdetectormodel-parameters">Parameters</h3>

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
|» detectorModelName|body|string|true|The name of the detector model.|
|» detectorModelDefinition|body|object|true|Information that defines how a detector operates.|
|» » states|body|object|false|none|
|» » initialStateName|body|object|false|none|
|» detectorModelDescription|body|string|false|A brief description of the detector model.|
|» key|body|string|false|The input attribute key used to identify a device or system to create a detector (an instance of the detector model) and then to route each input received to the appropriate detector (instance). This parameter uses a JSON-path expression in the message payload of each input to specify the attribute-value pair that is used to identify the device associated with the input.|
|» roleArn|body|string|true|The ARN of the role that grants permission to AWS IoT Events to perform its operations.|
|» tags|body|[[Tag](#schematag)]|false|Metadata that can be used to manage the detector model.|
|» evaluationMethod|body|string|false|Information about the order in which events are evaluated and how actions are executed. |

#### Enumerated Values

|Parameter|Value|
|---|---|
|» evaluationMethod|BATCH|
|» evaluationMethod|SERIAL|

> Example responses

> 200 Response

```json
{
  "detectorModelConfiguration": {
    "detectorModelName": {},
    "detectorModelVersion": {},
    "detectorModelDescription": {},
    "detectorModelArn": {},
    "roleArn": {},
    "creationTime": {},
    "lastUpdateTime": {},
    "status": {},
    "key": {},
    "evaluationMethod": {}
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

<h3 id="createdetectormodel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDetectorModelResponse](#schemacreatedetectormodelresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListInputs

<a id="opIdListInputs"></a>

> Code samples

```bash
curl https://iotevents.us-east-1.amazonaws.com/inputs \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /inputs`

Lists the inputs you have created.

<h3 id="listinputs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|The token that you can use to return the next set of results.|
|maxResults|query|integer|false|The maximum number of results to be returned per request.|
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
  "inputSummaries": {},
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

<h3 id="listinputs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListInputsResponse](#schemalistinputsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateInput

<a id="opIdCreateInput"></a>

> Code samples

```bash
curl https://iotevents.us-east-1.amazonaws.com/inputs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "inputName": "string",
    "inputDescription": "string",
    "inputDefinition": {
      "attributes": {}
    },
    "tags": [
      {
        "key": {},
        "value": {}
      }
    ]
  }'
```

`POST /inputs`

Creates an input.

> Body parameter

```json
{
  "inputName": "string",
  "inputDescription": "string",
  "inputDefinition": {
    "attributes": {}
  },
  "tags": [
    {
      "key": {},
      "value": {}
    }
  ]
}
```

<h3 id="createinput-parameters">Parameters</h3>

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
|» inputName|body|string|true|The name you want to give to the input.|
|» inputDescription|body|string|false|A brief description of the input.|
|» inputDefinition|body|object|true|The definition of the input.|
|» » attributes|body|object|false|none|
|» tags|body|[[Tag](#schematag)]|false|Metadata that can be used to manage the input.|

> Example responses

> 201 Response

```json
{
  "inputConfiguration": {
    "inputName": {},
    "inputDescription": {},
    "inputArn": {},
    "creationTime": {},
    "lastUpdateTime": {},
    "status": {}
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

<h3 id="createinput-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateInputResponse](#schemacreateinputresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAlarmModel

<a id="opIdDescribeAlarmModel"></a>

> Code samples

```bash
curl https://iotevents.us-east-1.amazonaws.com/alarm-models/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /alarm-models/{alarmModelName}`

Retrieves information about an alarm model. If you don't specify a value for the <code>alarmModelVersion</code> parameter, the latest version is returned.

<h3 id="describealarmmodel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alarmModelName|path|string|true|The name of the alarm model.|
|version|query|string|false|The version of the alarm model.|
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
  "creationTime": {},
  "alarmModelArn": {},
  "alarmModelVersion": {},
  "lastUpdateTime": {},
  "status": {},
  "statusMessage": {},
  "alarmModelName": {},
  "alarmModelDescription": {},
  "roleArn": {},
  "key": {},
  "severity": {},
  "alarmRule": {
    "simpleRule": {
      "inputProperty": {},
      "comparisonOperator": {},
      "threshold": {}
    }
  },
  "alarmNotification": {
    "notificationActions": {}
  },
  "alarmEventActions": {
    "alarmActions": {}
  },
  "alarmCapabilities": {
    "initializationConfiguration": {
      "disabledOnInitialization": {}
    },
    "acknowledgeFlow": {
      "enabled": {}
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

<h3 id="describealarmmodel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAlarmModelResponse](#schemadescribealarmmodelresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateAlarmModel

<a id="opIdUpdateAlarmModel"></a>

> Code samples

```bash
curl https://iotevents.us-east-1.amazonaws.com/alarm-models/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "alarmModelDescription": "string",
    "roleArn": "string",
    "severity": 0,
    "alarmRule": {
      "simpleRule": {
        "inputProperty": {},
        "comparisonOperator": {},
        "threshold": {}
      }
    },
    "alarmNotification": {
      "notificationActions": {}
    },
    "alarmEventActions": {
      "alarmActions": {}
    },
    "alarmCapabilities": {
      "initializationConfiguration": {
        "disabledOnInitialization": {}
      },
      "acknowledgeFlow": {
        "enabled": {}
      }
    }
  }'
```

`POST /alarm-models/{alarmModelName}`

Updates an alarm model. Any alarms that were created based on the previous version are deleted and then created again as new data arrives.

> Body parameter

```json
{
  "alarmModelDescription": "string",
  "roleArn": "string",
  "severity": 0,
  "alarmRule": {
    "simpleRule": {
      "inputProperty": {},
      "comparisonOperator": {},
      "threshold": {}
    }
  },
  "alarmNotification": {
    "notificationActions": {}
  },
  "alarmEventActions": {
    "alarmActions": {}
  },
  "alarmCapabilities": {
    "initializationConfiguration": {
      "disabledOnInitialization": {}
    },
    "acknowledgeFlow": {
      "enabled": {}
    }
  }
}
```

<h3 id="updatealarmmodel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alarmModelName|path|string|true|The name of the alarm model.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» alarmModelDescription|body|string|false|The description of the alarm model.|
|» roleArn|body|string|true|The ARN of the IAM role that allows the alarm to perform actions and access AWS resources. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i>.|
|» severity|body|integer|false|A non-negative integer that reflects the severity level of the alarm.|
|» alarmRule|body|object|true|Defines when your alarm is invoked.|
|» » simpleRule|body|object|false|none|
|» » » inputProperty|body|object|true|none|
|» » » comparisonOperator|body|object|true|none|
|» » » threshold|body|object|true|none|
|» alarmNotification|body|object|false|Contains information about one or more notification actions.|
|» » notificationActions|body|object|false|none|
|» alarmEventActions|body|object|false|Contains information about one or more alarm actions.|
|» » alarmActions|body|object|false|none|
|» alarmCapabilities|body|object|false|Contains the configuration information of alarm state changes.|
|» » initializationConfiguration|body|object|false|none|
|» » » disabledOnInitialization|body|object|true|none|
|» » acknowledgeFlow|body|object|false|none|
|» » » enabled|body|object|true|none|

> Example responses

> 200 Response

```json
{
  "creationTime": {},
  "alarmModelArn": {},
  "alarmModelVersion": {},
  "lastUpdateTime": {},
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

> 485 Response

```json
null
```

<h3 id="updatealarmmodel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateAlarmModelResponse](#schemaupdatealarmmodelresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAlarmModel

<a id="opIdDeleteAlarmModel"></a>

> Code samples

```bash
curl https://iotevents.us-east-1.amazonaws.com/alarm-models/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /alarm-models/{alarmModelName}`

Deletes an alarm model. Any alarm instances that were created based on this alarm model are also deleted. This action can't be undone.

<h3 id="deletealarmmodel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alarmModelName|path|string|true|The name of the alarm model.|
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

<h3 id="deletealarmmodel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[DeleteAlarmModelResponse](#schemadeletealarmmodelresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDetectorModel

<a id="opIdDescribeDetectorModel"></a>

> Code samples

```bash
curl https://iotevents.us-east-1.amazonaws.com/detector-models/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /detector-models/{detectorModelName}`

Describes a detector model. If the <code>version</code> parameter is not specified, information about the latest version is returned.

<h3 id="describedetectormodel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorModelName|path|string|true|The name of the detector model.|
|version|query|string|false|The version of the detector model.|
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
  "detectorModel": {
    "detectorModelDefinition": {
      "states": {},
      "initialStateName": {}
    },
    "detectorModelConfiguration": {
      "detectorModelName": {},
      "detectorModelVersion": {},
      "detectorModelDescription": {},
      "detectorModelArn": {},
      "roleArn": {},
      "creationTime": {},
      "lastUpdateTime": {},
      "status": {},
      "key": {},
      "evaluationMethod": {}
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

<h3 id="describedetectormodel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDetectorModelResponse](#schemadescribedetectormodelresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDetectorModel

<a id="opIdUpdateDetectorModel"></a>

> Code samples

```bash
curl https://iotevents.us-east-1.amazonaws.com/detector-models/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "detectorModelDefinition": {
      "states": {},
      "initialStateName": {}
    },
    "detectorModelDescription": "string",
    "roleArn": "string",
    "evaluationMethod": "BATCH"
  }'
```

`POST /detector-models/{detectorModelName}`

Updates a detector model. Detectors (instances) spawned by the previous version are deleted and then re-created as new inputs arrive.

> Body parameter

```json
{
  "detectorModelDefinition": {
    "states": {},
    "initialStateName": {}
  },
  "detectorModelDescription": "string",
  "roleArn": "string",
  "evaluationMethod": "BATCH"
}
```

<h3 id="updatedetectormodel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorModelName|path|string|true|The name of the detector model that is updated.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» detectorModelDefinition|body|object|true|Information that defines how a detector operates.|
|» » states|body|object|false|none|
|» » initialStateName|body|object|false|none|
|» detectorModelDescription|body|string|false|A brief description of the detector model.|
|» roleArn|body|string|true|The ARN of the role that grants permission to AWS IoT Events to perform its operations.|
|» evaluationMethod|body|string|false|Information about the order in which events are evaluated and how actions are executed. |

#### Enumerated Values

|Parameter|Value|
|---|---|
|» evaluationMethod|BATCH|
|» evaluationMethod|SERIAL|

> Example responses

> 200 Response

```json
{
  "detectorModelConfiguration": {
    "detectorModelName": {},
    "detectorModelVersion": {},
    "detectorModelDescription": {},
    "detectorModelArn": {},
    "roleArn": {},
    "creationTime": {},
    "lastUpdateTime": {},
    "status": {},
    "key": {},
    "evaluationMethod": {}
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

<h3 id="updatedetectormodel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDetectorModelResponse](#schemaupdatedetectormodelresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDetectorModel

<a id="opIdDeleteDetectorModel"></a>

> Code samples

```bash
curl https://iotevents.us-east-1.amazonaws.com/detector-models/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /detector-models/{detectorModelName}`

Deletes a detector model. Any active instances of the detector model are also deleted.

<h3 id="deletedetectormodel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorModelName|path|string|true|The name of the detector model to be deleted.|
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

<h3 id="deletedetectormodel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[DeleteDetectorModelResponse](#schemadeletedetectormodelresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeInput

<a id="opIdDescribeInput"></a>

> Code samples

```bash
curl https://iotevents.us-east-1.amazonaws.com/inputs/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /inputs/{inputName}`

Describes an input.

<h3 id="describeinput-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inputName|path|string|true|The name of the input.|
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
  "input": {
    "inputConfiguration": {
      "inputName": {},
      "inputDescription": {},
      "inputArn": {},
      "creationTime": {},
      "lastUpdateTime": {},
      "status": {}
    },
    "inputDefinition": {
      "attributes": {}
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

<h3 id="describeinput-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeInputResponse](#schemadescribeinputresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateInput

<a id="opIdUpdateInput"></a>

> Code samples

```bash
curl https://iotevents.us-east-1.amazonaws.com/inputs/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "inputDescription": "string",
    "inputDefinition": {
      "attributes": {}
    }
  }'
```

`PUT /inputs/{inputName}`

Updates an input.

> Body parameter

```json
{
  "inputDescription": "string",
  "inputDefinition": {
    "attributes": {}
  }
}
```

<h3 id="updateinput-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inputName|path|string|true|The name of the input you want to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» inputDescription|body|string|false|A brief description of the input.|
|» inputDefinition|body|object|true|The definition of the input.|
|» » attributes|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "inputConfiguration": {
    "inputName": {},
    "inputDescription": {},
    "inputArn": {},
    "creationTime": {},
    "lastUpdateTime": {},
    "status": {}
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

<h3 id="updateinput-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateInputResponse](#schemaupdateinputresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteInput

<a id="opIdDeleteInput"></a>

> Code samples

```bash
curl https://iotevents.us-east-1.amazonaws.com/inputs/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /inputs/{inputName}`

Deletes an input.

<h3 id="deleteinput-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inputName|path|string|true|The name of the input to delete.|
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

<h3 id="deleteinput-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteInputResponse](#schemadeleteinputresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDetectorModelAnalysis

<a id="opIdDescribeDetectorModelAnalysis"></a>

> Code samples

```bash
curl https://iotevents.us-east-1.amazonaws.com/analysis/detector-models/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /analysis/detector-models/{analysisId}`

<p>Retrieves runtime information about a detector model analysis.</p> <note> <p>After AWS IoT Events starts analyzing your detector model, you have up to 24 hours to retrieve the analysis results.</p> </note>

<h3 id="describedetectormodelanalysis-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|analysisId|path|string|true|The ID of the analysis result that you want to retrieve.|
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

> 484 Response

```json
null
```

<h3 id="describedetectormodelanalysis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDetectorModelAnalysisResponse](#schemadescribedetectormodelanalysisresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeLoggingOptions

<a id="opIdDescribeLoggingOptions"></a>

> Code samples

```bash
curl https://iotevents.us-east-1.amazonaws.com/logging \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /logging`

Retrieves the current settings of the AWS IoT Events logging options.

<h3 id="describeloggingoptions-parameters">Parameters</h3>

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
  "loggingOptions": {
    "roleArn": {},
    "level": {},
    "enabled": {},
    "detectorDebugOptions": {}
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

<h3 id="describeloggingoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeLoggingOptionsResponse](#schemadescribeloggingoptionsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutLoggingOptions

<a id="opIdPutLoggingOptions"></a>

> Code samples

```bash
curl https://iotevents.us-east-1.amazonaws.com/logging \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "loggingOptions": {
      "roleArn": {},
      "level": {},
      "enabled": {},
      "detectorDebugOptions": {}
    }
  }'
```

`PUT /logging`

<p>Sets or updates the AWS IoT Events logging options.</p> <p>If you update the value of any <code>loggingOptions</code> field, it takes up to one minute for the change to take effect. If you change the policy attached to the role you specified in the <code>roleArn</code> field (for example, to correct an invalid policy), it takes up to five minutes for that change to take effect.</p>

> Body parameter

```json
{
  "loggingOptions": {
    "roleArn": {},
    "level": {},
    "enabled": {},
    "detectorDebugOptions": {}
  }
}
```

<h3 id="putloggingoptions-parameters">Parameters</h3>

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
|» loggingOptions|body|object|true|The values of the AWS IoT Events logging options.|
|» » roleArn|body|object|false|none|
|» » level|body|object|false|none|
|» » enabled|body|object|false|none|
|» » detectorDebugOptions|body|object|false|none|

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

> 485 Response

```json
null
```

<h3 id="putloggingoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|485|485|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDetectorModelAnalysisResults

<a id="opIdGetDetectorModelAnalysisResults"></a>

> Code samples

```bash
curl https://iotevents.us-east-1.amazonaws.com/analysis/detector-models/string/results \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /analysis/detector-models/{analysisId}/results`

<p>Retrieves one or more analysis results of the detector model.</p> <note> <p>After AWS IoT Events starts analyzing your detector model, you have up to 24 hours to retrieve the analysis results.</p> </note>

<h3 id="getdetectormodelanalysisresults-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|analysisId|path|string|true|The ID of the analysis result that you want to retrieve.|
|nextToken|query|string|false|The token that you can use to return the next set of results.|
|maxResults|query|integer|false|The maximum number of results to be returned per request.|
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
  "analysisResults": {},
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

<h3 id="getdetectormodelanalysisresults-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDetectorModelAnalysisResultsResponse](#schemagetdetectormodelanalysisresultsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAlarmModelVersions

<a id="opIdListAlarmModelVersions"></a>

> Code samples

```bash
curl https://iotevents.us-east-1.amazonaws.com/alarm-models/string/versions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /alarm-models/{alarmModelName}/versions`

Lists all the versions of an alarm model. The operation returns only the metadata associated with each alarm model version.

<h3 id="listalarmmodelversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alarmModelName|path|string|true|The name of the alarm model.|
|nextToken|query|string|false|The token that you can use to return the next set of results.|
|maxResults|query|integer|false|The maximum number of results to be returned per request.|
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
  "alarmModelVersionSummaries": {},
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

<h3 id="listalarmmodelversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAlarmModelVersionsResponse](#schemalistalarmmodelversionsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDetectorModelVersions

<a id="opIdListDetectorModelVersions"></a>

> Code samples

```bash
curl https://iotevents.us-east-1.amazonaws.com/detector-models/string/versions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /detector-models/{detectorModelName}/versions`

Lists all the versions of a detector model. Only the metadata associated with each detector model version is returned.

<h3 id="listdetectormodelversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorModelName|path|string|true|The name of the detector model whose versions are returned.|
|nextToken|query|string|false|The token that you can use to return the next set of results.|
|maxResults|query|integer|false|The maximum number of results to be returned per request.|
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
  "detectorModelVersionSummaries": {},
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

<h3 id="listdetectormodelversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDetectorModelVersionsResponse](#schemalistdetectormodelversionsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListInputRoutings

<a id="opIdListInputRoutings"></a>

> Code samples

```bash
curl https://iotevents.us-east-1.amazonaws.com/input-routings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "inputIdentifier": {
      "iotEventsInputIdentifier": {
        "inputName": {}
      },
      "iotSiteWiseInputIdentifier": {
        "iotSiteWiseAssetModelPropertyIdentifier": {
          "assetModelId": {},
          "propertyId": {}
        }
      }
    },
    "maxResults": 1,
    "nextToken": "string"
  }'
```

`POST /input-routings`

 Lists one or more input routings. 

> Body parameter

```json
{
  "inputIdentifier": {
    "iotEventsInputIdentifier": {
      "inputName": {}
    },
    "iotSiteWiseInputIdentifier": {
      "iotSiteWiseAssetModelPropertyIdentifier": {
        "assetModelId": {},
        "propertyId": {}
      }
    }
  },
  "maxResults": 1,
  "nextToken": "string"
}
```

<h3 id="listinputroutings-parameters">Parameters</h3>

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
|» inputIdentifier|body|object|true| The identifer of the input. |
|» » iotEventsInputIdentifier|body|object|false|none|
|» » » inputName|body|object|true|none|
|» » iotSiteWiseInputIdentifier|body|object|false|none|
|» » » iotSiteWiseAssetModelPropertyIdentifier|body|object|false|none|
|» » » » assetModelId|body|object|true|none|
|» » » » propertyId|body|object|true|none|
|» maxResults|body|integer|false| The maximum number of results to be returned per request. |
|» nextToken|body|string|false| The token that you can use to return the next set of results. |

> Example responses

> 200 Response

```json
{
  "routedResources": {},
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

<h3 id="listinputroutings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListInputRoutingsResponse](#schemalistinputroutingsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://iotevents.us-east-1.amazonaws.com/tags#resourceArn?resourceArn=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags#resourceArn`

Lists the tags (metadata) you have assigned to the resource.

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|query|string|true|The ARN of the resource.|
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
  "tags": {}
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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://iotevents.us-east-1.amazonaws.com/tags#resourceArn?resourceArn=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "tags": [
      {
        "key": {},
        "value": {}
      }
    ]
  }'
```

`POST /tags#resourceArn`

Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.

> Body parameter

```json
{
  "tags": [
    {
      "key": {},
      "value": {}
    }
  ]
}
```

<h3 id="tagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|query|string|true|The ARN of the resource.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tags|body|[[Tag](#schematag)]|true|The new or modified tags for the resource.|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartDetectorModelAnalysis

<a id="opIdStartDetectorModelAnalysis"></a>

> Code samples

```bash
curl https://iotevents.us-east-1.amazonaws.com/analysis/detector-models/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "detectorModelDefinition": {
      "states": {},
      "initialStateName": {}
    }
  }'
```

`POST /analysis/detector-models/`

Performs an analysis of your detector model. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-analyze-api.html">Troubleshooting a detector model</a> in the <i>AWS IoT Events Developer Guide</i>.

> Body parameter

```json
{
  "detectorModelDefinition": {
    "states": {},
    "initialStateName": {}
  }
}
```

<h3 id="startdetectormodelanalysis-parameters">Parameters</h3>

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
|» detectorModelDefinition|body|object|true|Information that defines how a detector operates.|
|» » states|body|object|false|none|
|» » initialStateName|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "analysisId": {}
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

<h3 id="startdetectormodelanalysis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartDetectorModelAnalysisResponse](#schemastartdetectormodelanalysisresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://iotevents.us-east-1.amazonaws.com/tags#resourceArn&tagKeys?resourceArn=string&tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags#resourceArn&tagKeys`

Removes the given tags (metadata) from the resource.

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|query|string|true|The ARN of the resource.|
|tagKeys|query|[[TagKey](#schematagkey)]|true|A list of the keys of the tags to be removed from the resource.|
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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateAlarmModelResponse">CreateAlarmModelResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatealarmmodelresponse"></a>
<a id="schema_CreateAlarmModelResponse"></a>
<a id="tocScreatealarmmodelresponse"></a>
<a id="tocscreatealarmmodelresponse"></a>

```json
{
  "creationTime": {},
  "alarmModelArn": {},
  "alarmModelVersion": {},
  "lastUpdateTime": {},
  "status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creationTime|object|false|none|none|
|alarmModelArn|object|false|none|none|
|alarmModelVersion|object|false|none|none|
|lastUpdateTime|object|false|none|none|
|status|object|false|none|none|

<h2 id="tocS_Tag">Tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "key": {},
  "value": {}
}
```

Metadata that can be used to manage the resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|object|true|none|none|
|value|object|true|none|none|

<h2 id="tocS_SimpleRule">SimpleRule</h2>
<!-- backwards compatibility -->
<a id="schemasimplerule"></a>
<a id="schema_SimpleRule"></a>
<a id="tocSsimplerule"></a>
<a id="tocssimplerule"></a>

```json
{
  "inputProperty": {},
  "comparisonOperator": {},
  "threshold": {}
}
```

A rule that compares an input property value to a threshold value with a comparison operator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputProperty|object|true|none|none|
|comparisonOperator|object|true|none|none|
|threshold|object|true|none|none|

<h2 id="tocS_NotificationActions">NotificationActions</h2>
<!-- backwards compatibility -->
<a id="schemanotificationactions"></a>
<a id="schema_NotificationActions"></a>
<a id="tocSnotificationactions"></a>
<a id="tocsnotificationactions"></a>

```json
[
  {
    "action": {
      "lambdaAction": {
        "functionArn": {},
        "payload": {
          "contentExpression": {},
          "type": {}
        }
      }
    },
    "smsConfigurations": {},
    "emailConfigurations": {}
  }
]
```

<h2 id="tocS_AlarmActions">AlarmActions</h2>
<!-- backwards compatibility -->
<a id="schemaalarmactions"></a>
<a id="schema_AlarmActions"></a>
<a id="tocSalarmactions"></a>
<a id="tocsalarmactions"></a>

```json
[
  {
    "sns": {
      "targetArn": {},
      "payload": {
        "contentExpression": {},
        "type": {}
      }
    },
    "iotTopicPublish": {
      "mqttTopic": {},
      "payload": {
        "contentExpression": {},
        "type": {}
      }
    },
    "lambda": {
      "functionArn": {},
      "payload": {
        "contentExpression": {},
        "type": {}
      }
    },
    "iotEvents": {
      "inputName": {},
      "payload": {
        "contentExpression": {},
        "type": {}
      }
    },
    "sqs": {
      "queueUrl": {},
      "useBase64": {},
      "payload": {
        "contentExpression": {},
        "type": {}
      }
    },
    "firehose": {
      "deliveryStreamName": {},
      "separator": {},
      "payload": {
        "contentExpression": {},
        "type": {}
      }
    },
    "dynamoDB": {
      "hashKeyType": {},
      "hashKeyField": {},
      "hashKeyValue": {},
      "rangeKeyType": {},
      "rangeKeyField": {},
      "rangeKeyValue": {},
      "operation": {},
      "payloadField": {},
      "tableName": {},
      "payload": {
        "contentExpression": {},
        "type": {}
      }
    },
    "dynamoDBv2": {
      "tableName": {},
      "payload": {
        "contentExpression": {},
        "type": {}
      }
    },
    "iotSiteWise": {
      "entryId": {},
      "assetId": {},
      "propertyId": {},
      "propertyAlias": {},
      "propertyValue": {
        "value": {
          "stringValue": {},
          "integerValue": {},
          "doubleValue": {},
          "booleanValue": {}
        },
        "timestamp": {
          "timeInSeconds": {},
          "offsetInNanos": {}
        },
        "quality": {}
      }
    }
  }
]
```

<h2 id="tocS_InitializationConfiguration">InitializationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemainitializationconfiguration"></a>
<a id="schema_InitializationConfiguration"></a>
<a id="tocSinitializationconfiguration"></a>
<a id="tocsinitializationconfiguration"></a>

```json
{
  "disabledOnInitialization": {}
}
```

Specifies the default alarm state. The configuration applies to all alarms that were created based on this alarm model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disabledOnInitialization|object|true|none|none|

<h2 id="tocS_AcknowledgeFlow">AcknowledgeFlow</h2>
<!-- backwards compatibility -->
<a id="schemaacknowledgeflow"></a>
<a id="schema_AcknowledgeFlow"></a>
<a id="tocSacknowledgeflow"></a>
<a id="tocsacknowledgeflow"></a>

```json
{
  "enabled": {}
}
```

Specifies whether to get notified for alarm state changes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|object|true|none|none|

<h2 id="tocS_InvalidRequestException">InvalidRequestException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrequestexception"></a>
<a id="schema_InvalidRequestException"></a>
<a id="tocSinvalidrequestexception"></a>
<a id="tocsinvalidrequestexception"></a>

```json
null
```

<h2 id="tocS_ResourceInUseException">ResourceInUseException</h2>
<!-- backwards compatibility -->
<a id="schemaresourceinuseexception"></a>
<a id="schema_ResourceInUseException"></a>
<a id="tocSresourceinuseexception"></a>
<a id="tocsresourceinuseexception"></a>

```json
null
```

<h2 id="tocS_ResourceAlreadyExistsException">ResourceAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcealreadyexistsexception"></a>
<a id="schema_ResourceAlreadyExistsException"></a>
<a id="tocSresourcealreadyexistsexception"></a>
<a id="tocsresourcealreadyexistsexception"></a>

```json
null
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

<h2 id="tocS_ThrottlingException">ThrottlingException</h2>
<!-- backwards compatibility -->
<a id="schemathrottlingexception"></a>
<a id="schema_ThrottlingException"></a>
<a id="tocSthrottlingexception"></a>
<a id="tocsthrottlingexception"></a>

```json
null
```

<h2 id="tocS_InternalFailureException">InternalFailureException</h2>
<!-- backwards compatibility -->
<a id="schemainternalfailureexception"></a>
<a id="schema_InternalFailureException"></a>
<a id="tocSinternalfailureexception"></a>
<a id="tocsinternalfailureexception"></a>

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

<h2 id="tocS_CreateDetectorModelResponse">CreateDetectorModelResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedetectormodelresponse"></a>
<a id="schema_CreateDetectorModelResponse"></a>
<a id="tocScreatedetectormodelresponse"></a>
<a id="tocscreatedetectormodelresponse"></a>

```json
{
  "detectorModelConfiguration": {
    "detectorModelName": {},
    "detectorModelVersion": {},
    "detectorModelDescription": {},
    "detectorModelArn": {},
    "roleArn": {},
    "creationTime": {},
    "lastUpdateTime": {},
    "status": {},
    "key": {},
    "evaluationMethod": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectorModelConfiguration|object|false|none|none|

<h2 id="tocS_States">States</h2>
<!-- backwards compatibility -->
<a id="schemastates"></a>
<a id="schema_States"></a>
<a id="tocSstates"></a>
<a id="tocsstates"></a>

```json
[
  {
    "stateName": {},
    "onInput": {
      "events": {},
      "transitionEvents": {}
    },
    "onEnter": {
      "events": {}
    },
    "onExit": {
      "events": {}
    }
  }
]
```

<h2 id="tocS_StateName">StateName</h2>
<!-- backwards compatibility -->
<a id="schemastatename"></a>
<a id="schema_StateName"></a>
<a id="tocSstatename"></a>
<a id="tocsstatename"></a>

```json
"string"
```

<h2 id="tocS_CreateInputResponse">CreateInputResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateinputresponse"></a>
<a id="schema_CreateInputResponse"></a>
<a id="tocScreateinputresponse"></a>
<a id="tocscreateinputresponse"></a>

```json
{
  "inputConfiguration": {
    "inputName": {},
    "inputDescription": {},
    "inputArn": {},
    "creationTime": {},
    "lastUpdateTime": {},
    "status": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputConfiguration|object|false|none|none|

<h2 id="tocS_Attributes">Attributes</h2>
<!-- backwards compatibility -->
<a id="schemaattributes"></a>
<a id="schema_Attributes"></a>
<a id="tocSattributes"></a>
<a id="tocsattributes"></a>

```json
[
  {
    "jsonPath": {}
  }
]
```

<h2 id="tocS_DeleteAlarmModelResponse">DeleteAlarmModelResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletealarmmodelresponse"></a>
<a id="schema_DeleteAlarmModelResponse"></a>
<a id="tocSdeletealarmmodelresponse"></a>
<a id="tocsdeletealarmmodelresponse"></a>

```json
{}
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

<h2 id="tocS_DeleteDetectorModelResponse">DeleteDetectorModelResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletedetectormodelresponse"></a>
<a id="schema_DeleteDetectorModelResponse"></a>
<a id="tocSdeletedetectormodelresponse"></a>
<a id="tocsdeletedetectormodelresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteInputResponse">DeleteInputResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteinputresponse"></a>
<a id="schema_DeleteInputResponse"></a>
<a id="tocSdeleteinputresponse"></a>
<a id="tocsdeleteinputresponse"></a>

```json
{}
```

<h2 id="tocS_DescribeAlarmModelResponse">DescribeAlarmModelResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribealarmmodelresponse"></a>
<a id="schema_DescribeAlarmModelResponse"></a>
<a id="tocSdescribealarmmodelresponse"></a>
<a id="tocsdescribealarmmodelresponse"></a>

```json
{
  "creationTime": {},
  "alarmModelArn": {},
  "alarmModelVersion": {},
  "lastUpdateTime": {},
  "status": {},
  "statusMessage": {},
  "alarmModelName": {},
  "alarmModelDescription": {},
  "roleArn": {},
  "key": {},
  "severity": {},
  "alarmRule": {
    "simpleRule": {
      "inputProperty": {},
      "comparisonOperator": {},
      "threshold": {}
    }
  },
  "alarmNotification": {
    "notificationActions": {}
  },
  "alarmEventActions": {
    "alarmActions": {}
  },
  "alarmCapabilities": {
    "initializationConfiguration": {
      "disabledOnInitialization": {}
    },
    "acknowledgeFlow": {
      "enabled": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creationTime|object|false|none|none|
|alarmModelArn|object|false|none|none|
|alarmModelVersion|object|false|none|none|
|lastUpdateTime|object|false|none|none|
|status|object|false|none|none|
|statusMessage|object|false|none|none|
|alarmModelName|object|false|none|none|
|alarmModelDescription|object|false|none|none|
|roleArn|object|false|none|none|
|key|object|false|none|none|
|severity|object|false|none|none|
|alarmRule|object|false|none|none|
|alarmNotification|object|false|none|none|
|alarmEventActions|object|false|none|none|
|alarmCapabilities|object|false|none|none|

<h2 id="tocS_DescribeDetectorModelResponse">DescribeDetectorModelResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribedetectormodelresponse"></a>
<a id="schema_DescribeDetectorModelResponse"></a>
<a id="tocSdescribedetectormodelresponse"></a>
<a id="tocsdescribedetectormodelresponse"></a>

```json
{
  "detectorModel": {
    "detectorModelDefinition": {
      "states": {},
      "initialStateName": {}
    },
    "detectorModelConfiguration": {
      "detectorModelName": {},
      "detectorModelVersion": {},
      "detectorModelDescription": {},
      "detectorModelArn": {},
      "roleArn": {},
      "creationTime": {},
      "lastUpdateTime": {},
      "status": {},
      "key": {},
      "evaluationMethod": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectorModel|object|false|none|none|

<h2 id="tocS_DescribeDetectorModelAnalysisResponse">DescribeDetectorModelAnalysisResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribedetectormodelanalysisresponse"></a>
<a id="schema_DescribeDetectorModelAnalysisResponse"></a>
<a id="tocSdescribedetectormodelanalysisresponse"></a>
<a id="tocsdescribedetectormodelanalysisresponse"></a>

```json
{
  "status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|false|none|none|

<h2 id="tocS_DescribeInputResponse">DescribeInputResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeinputresponse"></a>
<a id="schema_DescribeInputResponse"></a>
<a id="tocSdescribeinputresponse"></a>
<a id="tocsdescribeinputresponse"></a>

```json
{
  "input": {
    "inputConfiguration": {
      "inputName": {},
      "inputDescription": {},
      "inputArn": {},
      "creationTime": {},
      "lastUpdateTime": {},
      "status": {}
    },
    "inputDefinition": {
      "attributes": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input|object|false|none|none|

<h2 id="tocS_DescribeLoggingOptionsResponse">DescribeLoggingOptionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeloggingoptionsresponse"></a>
<a id="schema_DescribeLoggingOptionsResponse"></a>
<a id="tocSdescribeloggingoptionsresponse"></a>
<a id="tocsdescribeloggingoptionsresponse"></a>

```json
{
  "loggingOptions": {
    "roleArn": {},
    "level": {},
    "enabled": {},
    "detectorDebugOptions": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loggingOptions|object|false|none|none|

<h2 id="tocS_UnsupportedOperationException">UnsupportedOperationException</h2>
<!-- backwards compatibility -->
<a id="schemaunsupportedoperationexception"></a>
<a id="schema_UnsupportedOperationException"></a>
<a id="tocSunsupportedoperationexception"></a>
<a id="tocsunsupportedoperationexception"></a>

```json
null
```

<h2 id="tocS_GetDetectorModelAnalysisResultsResponse">GetDetectorModelAnalysisResultsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdetectormodelanalysisresultsresponse"></a>
<a id="schema_GetDetectorModelAnalysisResultsResponse"></a>
<a id="tocSgetdetectormodelanalysisresultsresponse"></a>
<a id="tocsgetdetectormodelanalysisresultsresponse"></a>

```json
{
  "analysisResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analysisResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListAlarmModelVersionsResponse">ListAlarmModelVersionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistalarmmodelversionsresponse"></a>
<a id="schema_ListAlarmModelVersionsResponse"></a>
<a id="tocSlistalarmmodelversionsresponse"></a>
<a id="tocslistalarmmodelversionsresponse"></a>

```json
{
  "alarmModelVersionSummaries": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alarmModelVersionSummaries|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListAlarmModelsResponse">ListAlarmModelsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistalarmmodelsresponse"></a>
<a id="schema_ListAlarmModelsResponse"></a>
<a id="tocSlistalarmmodelsresponse"></a>
<a id="tocslistalarmmodelsresponse"></a>

```json
{
  "alarmModelSummaries": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alarmModelSummaries|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListDetectorModelVersionsResponse">ListDetectorModelVersionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdetectormodelversionsresponse"></a>
<a id="schema_ListDetectorModelVersionsResponse"></a>
<a id="tocSlistdetectormodelversionsresponse"></a>
<a id="tocslistdetectormodelversionsresponse"></a>

```json
{
  "detectorModelVersionSummaries": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectorModelVersionSummaries|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListDetectorModelsResponse">ListDetectorModelsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdetectormodelsresponse"></a>
<a id="schema_ListDetectorModelsResponse"></a>
<a id="tocSlistdetectormodelsresponse"></a>
<a id="tocslistdetectormodelsresponse"></a>

```json
{
  "detectorModelSummaries": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectorModelSummaries|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListInputRoutingsResponse">ListInputRoutingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistinputroutingsresponse"></a>
<a id="schema_ListInputRoutingsResponse"></a>
<a id="tocSlistinputroutingsresponse"></a>
<a id="tocslistinputroutingsresponse"></a>

```json
{
  "routedResources": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|routedResources|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_IotEventsInputIdentifier">IotEventsInputIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaioteventsinputidentifier"></a>
<a id="schema_IotEventsInputIdentifier"></a>
<a id="tocSioteventsinputidentifier"></a>
<a id="tocsioteventsinputidentifier"></a>

```json
{
  "inputName": {}
}
```

 The identifier of the input routed to AWS IoT Events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputName|object|true|none|none|

<h2 id="tocS_IotSiteWiseInputIdentifier">IotSiteWiseInputIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaiotsitewiseinputidentifier"></a>
<a id="schema_IotSiteWiseInputIdentifier"></a>
<a id="tocSiotsitewiseinputidentifier"></a>
<a id="tocsiotsitewiseinputidentifier"></a>

```json
{
  "iotSiteWiseAssetModelPropertyIdentifier": {
    "assetModelId": {},
    "propertyId": {}
  }
}
```

 The identifer of the input routed from AWS IoT SiteWise.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|iotSiteWiseAssetModelPropertyIdentifier|object|false|none|none|

<h2 id="tocS_ListInputsResponse">ListInputsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistinputsresponse"></a>
<a id="schema_ListInputsResponse"></a>
<a id="tocSlistinputsresponse"></a>
<a id="tocslistinputsresponse"></a>

```json
{
  "inputSummaries": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputSummaries|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|false|none|none|

<h2 id="tocS_AmazonResourceName">AmazonResourceName</h2>
<!-- backwards compatibility -->
<a id="schemaamazonresourcename"></a>
<a id="schema_AmazonResourceName"></a>
<a id="tocSamazonresourcename"></a>
<a id="tocsamazonresourcename"></a>

```json
"string"
```

<h2 id="tocS_LoggingLevel">LoggingLevel</h2>
<!-- backwards compatibility -->
<a id="schemalogginglevel"></a>
<a id="schema_LoggingLevel"></a>
<a id="tocSlogginglevel"></a>
<a id="tocslogginglevel"></a>

```json
"ERROR"
```

<h2 id="tocS_LoggingEnabled">LoggingEnabled</h2>
<!-- backwards compatibility -->
<a id="schemaloggingenabled"></a>
<a id="schema_LoggingEnabled"></a>
<a id="tocSloggingenabled"></a>
<a id="tocsloggingenabled"></a>

```json
true
```

<h2 id="tocS_DetectorDebugOptions">DetectorDebugOptions</h2>
<!-- backwards compatibility -->
<a id="schemadetectordebugoptions"></a>
<a id="schema_DetectorDebugOptions"></a>
<a id="tocSdetectordebugoptions"></a>
<a id="tocsdetectordebugoptions"></a>

```json
[
  {
    "detectorModelName": {},
    "keyValue": {}
  }
]
```

<h2 id="tocS_StartDetectorModelAnalysisResponse">StartDetectorModelAnalysisResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartdetectormodelanalysisresponse"></a>
<a id="schema_StartDetectorModelAnalysisResponse"></a>
<a id="tocSstartdetectormodelanalysisresponse"></a>
<a id="tocsstartdetectormodelanalysisresponse"></a>

```json
{
  "analysisId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analysisId|object|false|none|none|

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

<h2 id="tocS_UpdateAlarmModelResponse">UpdateAlarmModelResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatealarmmodelresponse"></a>
<a id="schema_UpdateAlarmModelResponse"></a>
<a id="tocSupdatealarmmodelresponse"></a>
<a id="tocsupdatealarmmodelresponse"></a>

```json
{
  "creationTime": {},
  "alarmModelArn": {},
  "alarmModelVersion": {},
  "lastUpdateTime": {},
  "status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creationTime|object|false|none|none|
|alarmModelArn|object|false|none|none|
|alarmModelVersion|object|false|none|none|
|lastUpdateTime|object|false|none|none|
|status|object|false|none|none|

<h2 id="tocS_UpdateDetectorModelResponse">UpdateDetectorModelResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedetectormodelresponse"></a>
<a id="schema_UpdateDetectorModelResponse"></a>
<a id="tocSupdatedetectormodelresponse"></a>
<a id="tocsupdatedetectormodelresponse"></a>

```json
{
  "detectorModelConfiguration": {
    "detectorModelName": {},
    "detectorModelVersion": {},
    "detectorModelDescription": {},
    "detectorModelArn": {},
    "roleArn": {},
    "creationTime": {},
    "lastUpdateTime": {},
    "status": {},
    "key": {},
    "evaluationMethod": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectorModelConfiguration|object|false|none|none|

<h2 id="tocS_UpdateInputResponse">UpdateInputResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateinputresponse"></a>
<a id="schema_UpdateInputResponse"></a>
<a id="tocSupdateinputresponse"></a>
<a id="tocsupdateinputresponse"></a>

```json
{
  "inputConfiguration": {
    "inputName": {},
    "inputDescription": {},
    "inputArn": {},
    "creationTime": {},
    "lastUpdateTime": {},
    "status": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputConfiguration|object|false|none|none|

<h2 id="tocS_AcknowledgeFlowEnabled">AcknowledgeFlowEnabled</h2>
<!-- backwards compatibility -->
<a id="schemaacknowledgeflowenabled"></a>
<a id="schema_AcknowledgeFlowEnabled"></a>
<a id="tocSacknowledgeflowenabled"></a>
<a id="tocsacknowledgeflowenabled"></a>

```json
true
```

<h2 id="tocS_SetVariableAction">SetVariableAction</h2>
<!-- backwards compatibility -->
<a id="schemasetvariableaction"></a>
<a id="schema_SetVariableAction"></a>
<a id="tocSsetvariableaction"></a>
<a id="tocssetvariableaction"></a>

```json
{
  "variableName": {},
  "value": {}
}
```

Information about the variable and its new value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|variableName|object|true|none|none|
|value|object|true|none|none|

<h2 id="tocS_SNSTopicPublishAction">SNSTopicPublishAction</h2>
<!-- backwards compatibility -->
<a id="schemasnstopicpublishaction"></a>
<a id="schema_SNSTopicPublishAction"></a>
<a id="tocSsnstopicpublishaction"></a>
<a id="tocssnstopicpublishaction"></a>

```json
{
  "targetArn": {},
  "payload": {
    "contentExpression": {},
    "type": {}
  }
}
```

Information required to publish the Amazon SNS message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|targetArn|object|true|none|none|
|payload|object|false|none|none|

<h2 id="tocS_IotTopicPublishAction">IotTopicPublishAction</h2>
<!-- backwards compatibility -->
<a id="schemaiottopicpublishaction"></a>
<a id="schema_IotTopicPublishAction"></a>
<a id="tocSiottopicpublishaction"></a>
<a id="tocsiottopicpublishaction"></a>

```json
{
  "mqttTopic": {},
  "payload": {
    "contentExpression": {},
    "type": {}
  }
}
```

Information required to publish the MQTT message through the AWS IoT message broker.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mqttTopic|object|true|none|none|
|payload|object|false|none|none|

<h2 id="tocS_SetTimerAction">SetTimerAction</h2>
<!-- backwards compatibility -->
<a id="schemasettimeraction"></a>
<a id="schema_SetTimerAction"></a>
<a id="tocSsettimeraction"></a>
<a id="tocssettimeraction"></a>

```json
{
  "timerName": {},
  "seconds": {},
  "durationExpression": {}
}
```

Information needed to set the timer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timerName|object|true|none|none|
|seconds|object|false|none|none|
|durationExpression|object|false|none|none|

<h2 id="tocS_ClearTimerAction">ClearTimerAction</h2>
<!-- backwards compatibility -->
<a id="schemacleartimeraction"></a>
<a id="schema_ClearTimerAction"></a>
<a id="tocScleartimeraction"></a>
<a id="tocscleartimeraction"></a>

```json
{
  "timerName": {}
}
```

Information needed to clear the timer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timerName|object|true|none|none|

<h2 id="tocS_ResetTimerAction">ResetTimerAction</h2>
<!-- backwards compatibility -->
<a id="schemaresettimeraction"></a>
<a id="schema_ResetTimerAction"></a>
<a id="tocSresettimeraction"></a>
<a id="tocsresettimeraction"></a>

```json
{
  "timerName": {}
}
```

Information required to reset the timer. The timer is reset to the previously evaluated result of the duration. The duration expression isn't reevaluated when you reset the timer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timerName|object|true|none|none|

<h2 id="tocS_LambdaAction">LambdaAction</h2>
<!-- backwards compatibility -->
<a id="schemalambdaaction"></a>
<a id="schema_LambdaAction"></a>
<a id="tocSlambdaaction"></a>
<a id="tocslambdaaction"></a>

```json
{
  "functionArn": {},
  "payload": {
    "contentExpression": {},
    "type": {}
  }
}
```

Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|functionArn|object|true|none|none|
|payload|object|false|none|none|

<h2 id="tocS_IotEventsAction">IotEventsAction</h2>
<!-- backwards compatibility -->
<a id="schemaioteventsaction"></a>
<a id="schema_IotEventsAction"></a>
<a id="tocSioteventsaction"></a>
<a id="tocsioteventsaction"></a>

```json
{
  "inputName": {},
  "payload": {
    "contentExpression": {},
    "type": {}
  }
}
```

Sends an AWS IoT Events input, passing in information about the detector model instance and the event that triggered the action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputName|object|true|none|none|
|payload|object|false|none|none|

<h2 id="tocS_SqsAction">SqsAction</h2>
<!-- backwards compatibility -->
<a id="schemasqsaction"></a>
<a id="schema_SqsAction"></a>
<a id="tocSsqsaction"></a>
<a id="tocssqsaction"></a>

```json
{
  "queueUrl": {},
  "useBase64": {},
  "payload": {
    "contentExpression": {},
    "type": {}
  }
}
```

Sends information about the detector model instance and the event that triggered the action to an Amazon SQS queue.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|queueUrl|object|true|none|none|
|useBase64|object|false|none|none|
|payload|object|false|none|none|

<h2 id="tocS_FirehoseAction">FirehoseAction</h2>
<!-- backwards compatibility -->
<a id="schemafirehoseaction"></a>
<a id="schema_FirehoseAction"></a>
<a id="tocSfirehoseaction"></a>
<a id="tocsfirehoseaction"></a>

```json
{
  "deliveryStreamName": {},
  "separator": {},
  "payload": {
    "contentExpression": {},
    "type": {}
  }
}
```

Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deliveryStreamName|object|true|none|none|
|separator|object|false|none|none|
|payload|object|false|none|none|

<h2 id="tocS_DynamoDBAction">DynamoDBAction</h2>
<!-- backwards compatibility -->
<a id="schemadynamodbaction"></a>
<a id="schema_DynamoDBAction"></a>
<a id="tocSdynamodbaction"></a>
<a id="tocsdynamodbaction"></a>

```json
{
  "hashKeyType": {},
  "hashKeyField": {},
  "hashKeyValue": {},
  "rangeKeyType": {},
  "rangeKeyField": {},
  "rangeKeyValue": {},
  "operation": {},
  "payloadField": {},
  "tableName": {},
  "payload": {
    "contentExpression": {},
    "type": {}
  }
}
```

<p>Defines an action to write to the Amazon DynamoDB table that you created. The standard action payload contains all the information about the detector model instance and the event that triggered the action. You can customize the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html">payload</a>. One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify.</p> <p>You must use expressions for all parameters in <code>DynamoDBAction</code>. The expressions accept literals, operators, functions, references, and substitution templates.</p> <p class="title"> <b>Examples</b> </p> <ul> <li> <p>For literal values, the expressions must contain single quotes. For example, the value for the <code>hashKeyType</code> parameter can be <code>'STRING'</code>.</p> </li> <li> <p>For references, you must specify either variables or input values. For example, the value for the <code>hashKeyField</code> parameter can be <code>$input.GreenhouseInput.name</code>.</p> </li> <li> <p>For a substitution template, you must use <code>${}</code>, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.</p> <p>In the following example, the value for the <code>hashKeyValue</code> parameter uses a substitution template. </p> <p> <code>'${$input.GreenhouseInput.temperature * 6 / 5 + 32} in Fahrenheit'</code> </p> </li> <li> <p>For a string concatenation, you must use <code>+</code>. A string concatenation can also contain a combination of literals, operators, functions, references, and substitution templates.</p> <p>In the following example, the value for the <code>tableName</code> parameter uses a string concatenation. </p> <p> <code>'GreenhouseTemperatureTable ' + $input.GreenhouseInput.date</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> <p>If the defined payload type is a string, <code>DynamoDBAction</code> writes non-JSON data to the DynamoDB table as binary data. The DynamoDB console displays the data as Base64-encoded text. The value for the <code>payloadField</code> parameter is <code>&lt;payload-field&gt;_raw</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hashKeyType|object|false|none|none|
|hashKeyField|object|true|none|none|
|hashKeyValue|object|true|none|none|
|rangeKeyType|object|false|none|none|
|rangeKeyField|object|false|none|none|
|rangeKeyValue|object|false|none|none|
|operation|object|false|none|none|
|payloadField|object|false|none|none|
|tableName|object|true|none|none|
|payload|[Payload](#schemapayload)|false|none|<p>Information needed to configure the payload.</p> <p>By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use <code>contentExpression</code>.</p>|

<h2 id="tocS_DynamoDBv2Action">DynamoDBv2Action</h2>
<!-- backwards compatibility -->
<a id="schemadynamodbv2action"></a>
<a id="schema_DynamoDBv2Action"></a>
<a id="tocSdynamodbv2action"></a>
<a id="tocsdynamodbv2action"></a>

```json
{
  "tableName": {},
  "payload": {
    "contentExpression": {},
    "type": {}
  }
}
```

<p>Defines an action to write to the Amazon DynamoDB table that you created. The default action payload contains all the information about the detector model instance and the event that triggered the action. You can customize the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html">payload</a>. A separate column of the DynamoDB table receives one attribute-value pair in the payload that you specify.</p> <p>You must use expressions for all parameters in <code>DynamoDBv2Action</code>. The expressions accept literals, operators, functions, references, and substitution templates.</p> <p class="title"> <b>Examples</b> </p> <ul> <li> <p>For literal values, the expressions must contain single quotes. For example, the value for the <code>tableName</code> parameter can be <code>'GreenhouseTemperatureTable'</code>.</p> </li> <li> <p>For references, you must specify either variables or input values. For example, the value for the <code>tableName</code> parameter can be <code>$variable.ddbtableName</code>.</p> </li> <li> <p>For a substitution template, you must use <code>${}</code>, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.</p> <p>In the following example, the value for the <code>contentExpression</code> parameter in <code>Payload</code> uses a substitution template. </p> <p> <code>'{\"sensorID\": \"${$input.GreenhouseInput.sensor_id}\", \"temperature\": \"${$input.GreenhouseInput.temperature * 9 / 5 + 32}\"}'</code> </p> </li> <li> <p>For a string concatenation, you must use <code>+</code>. A string concatenation can also contain a combination of literals, operators, functions, references, and substitution templates.</p> <p>In the following example, the value for the <code>tableName</code> parameter uses a string concatenation. </p> <p> <code>'GreenhouseTemperatureTable ' + $input.GreenhouseInput.date</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> <p>The value for the <code>type</code> parameter in <code>Payload</code> must be <code>JSON</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tableName|object|true|none|none|
|payload|[Payload](#schemapayload)|false|none|<p>Information needed to configure the payload.</p> <p>By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use <code>contentExpression</code>.</p>|

<h2 id="tocS_IotSiteWiseAction">IotSiteWiseAction</h2>
<!-- backwards compatibility -->
<a id="schemaiotsitewiseaction"></a>
<a id="schema_IotSiteWiseAction"></a>
<a id="tocSiotsitewiseaction"></a>
<a id="tocsiotsitewiseaction"></a>

```json
{
  "entryId": {},
  "assetId": {},
  "propertyId": {},
  "propertyAlias": {},
  "propertyValue": {
    "value": {
      "stringValue": {},
      "integerValue": {},
      "doubleValue": {},
      "booleanValue": {}
    },
    "timestamp": {
      "timeInSeconds": {},
      "offsetInNanos": {}
    },
    "quality": {}
  }
}
```

<p>Sends information about the detector model instance and the event that triggered the action to a specified asset property in AWS IoT SiteWise.</p> <p>You must use expressions for all parameters in <code>IotSiteWiseAction</code>. The expressions accept literals, operators, functions, references, and substitutions templates.</p> <p class="title"> <b>Examples</b> </p> <ul> <li> <p>For literal values, the expressions must contain single quotes. For example, the value for the <code>propertyAlias</code> parameter can be <code>'/company/windfarm/3/turbine/7/temperature'</code>.</p> </li> <li> <p>For references, you must specify either variables or input values. For example, the value for the <code>assetId</code> parameter can be <code>$input.TurbineInput.assetId1</code>.</p> </li> <li> <p>For a substitution template, you must use <code>${}</code>, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.</p> <p>In the following example, the value for the <code>propertyAlias</code> parameter uses a substitution template. </p> <p> <code>'company/windfarm/${$input.TemperatureInput.sensorData.windfarmID}/turbine/ ${$input.TemperatureInput.sensorData.turbineID}/temperature'</code> </p> </li> </ul> <p>You must specify either <code>propertyAlias</code> or both <code>assetId</code> and <code>propertyId</code> to identify the target asset property in AWS IoT SiteWise.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entryId|object|false|none|none|
|assetId|object|false|none|none|
|propertyId|object|false|none|none|
|propertyAlias|object|false|none|none|
|propertyValue|object|false|none|none|

<h2 id="tocS_Action">Action</h2>
<!-- backwards compatibility -->
<a id="schemaaction"></a>
<a id="schema_Action"></a>
<a id="tocSaction"></a>
<a id="tocsaction"></a>

```json
{
  "setVariable": {
    "variableName": {},
    "value": {}
  },
  "sns": {
    "targetArn": {},
    "payload": {
      "contentExpression": {},
      "type": {}
    }
  },
  "iotTopicPublish": {
    "mqttTopic": {},
    "payload": {
      "contentExpression": {},
      "type": {}
    }
  },
  "setTimer": {
    "timerName": {},
    "seconds": {},
    "durationExpression": {}
  },
  "clearTimer": {
    "timerName": {}
  },
  "resetTimer": {
    "timerName": {}
  },
  "lambda": {
    "functionArn": {},
    "payload": {
      "contentExpression": {},
      "type": {}
    }
  },
  "iotEvents": {
    "inputName": {},
    "payload": {
      "contentExpression": {},
      "type": {}
    }
  },
  "sqs": {
    "queueUrl": {},
    "useBase64": {},
    "payload": {
      "contentExpression": {},
      "type": {}
    }
  },
  "firehose": {
    "deliveryStreamName": {},
    "separator": {},
    "payload": {
      "contentExpression": {},
      "type": {}
    }
  },
  "dynamoDB": {
    "hashKeyType": {},
    "hashKeyField": {},
    "hashKeyValue": {},
    "rangeKeyType": {},
    "rangeKeyField": {},
    "rangeKeyValue": {},
    "operation": {},
    "payloadField": {},
    "tableName": {},
    "payload": {
      "contentExpression": {},
      "type": {}
    }
  },
  "dynamoDBv2": {
    "tableName": {},
    "payload": {
      "contentExpression": {},
      "type": {}
    }
  },
  "iotSiteWise": {
    "entryId": {},
    "assetId": {},
    "propertyId": {},
    "propertyAlias": {},
    "propertyValue": {
      "value": {
        "stringValue": {},
        "integerValue": {},
        "doubleValue": {},
        "booleanValue": {}
      },
      "timestamp": {
        "timeInSeconds": {},
        "offsetInNanos": {}
      },
      "quality": {}
    }
  }
}
```

An action to be performed when the <code>condition</code> is TRUE.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|setVariable|object|false|none|none|
|sns|object|false|none|none|
|iotTopicPublish|object|false|none|none|
|setTimer|object|false|none|none|
|clearTimer|object|false|none|none|
|resetTimer|object|false|none|none|
|lambda|object|false|none|none|
|iotEvents|object|false|none|none|
|sqs|object|false|none|none|
|firehose|object|false|none|none|
|dynamoDB|object|false|none|none|
|dynamoDBv2|object|false|none|none|
|iotSiteWise|object|false|none|none|

<h2 id="tocS_Actions">Actions</h2>
<!-- backwards compatibility -->
<a id="schemaactions"></a>
<a id="schema_Actions"></a>
<a id="tocSactions"></a>
<a id="tocsactions"></a>

```json
[
  {
    "setVariable": {
      "variableName": {},
      "value": {}
    },
    "sns": {
      "targetArn": {},
      "payload": {
        "contentExpression": {},
        "type": {}
      }
    },
    "iotTopicPublish": {
      "mqttTopic": {},
      "payload": {
        "contentExpression": {},
        "type": {}
      }
    },
    "setTimer": {
      "timerName": {},
      "seconds": {},
      "durationExpression": {}
    },
    "clearTimer": {
      "timerName": {}
    },
    "resetTimer": {
      "timerName": {}
    },
    "lambda": {
      "functionArn": {},
      "payload": {
        "contentExpression": {},
        "type": {}
      }
    },
    "iotEvents": {
      "inputName": {},
      "payload": {
        "contentExpression": {},
        "type": {}
      }
    },
    "sqs": {
      "queueUrl": {},
      "useBase64": {},
      "payload": {
        "contentExpression": {},
        "type": {}
      }
    },
    "firehose": {
      "deliveryStreamName": {},
      "separator": {},
      "payload": {
        "contentExpression": {},
        "type": {}
      }
    },
    "dynamoDB": {
      "hashKeyType": {},
      "hashKeyField": {},
      "hashKeyValue": {},
      "rangeKeyType": {},
      "rangeKeyField": {},
      "rangeKeyValue": {},
      "operation": {},
      "payloadField": {},
      "tableName": {},
      "payload": {
        "contentExpression": {},
        "type": {}
      }
    },
    "dynamoDBv2": {
      "tableName": {},
      "payload": {
        "contentExpression": {},
        "type": {}
      }
    },
    "iotSiteWise": {
      "entryId": {},
      "assetId": {},
      "propertyId": {},
      "propertyAlias": {},
      "propertyValue": {
        "value": {
          "stringValue": {},
          "integerValue": {},
          "doubleValue": {},
          "booleanValue": {}
        },
        "timestamp": {
          "timeInSeconds": {},
          "offsetInNanos": {}
        },
        "quality": {}
      }
    }
  }
]
```

<h2 id="tocS_AlarmAction">AlarmAction</h2>
<!-- backwards compatibility -->
<a id="schemaalarmaction"></a>
<a id="schema_AlarmAction"></a>
<a id="tocSalarmaction"></a>
<a id="tocsalarmaction"></a>

```json
{
  "sns": {
    "targetArn": {},
    "payload": {
      "contentExpression": {},
      "type": {}
    }
  },
  "iotTopicPublish": {
    "mqttTopic": {},
    "payload": {
      "contentExpression": {},
      "type": {}
    }
  },
  "lambda": {
    "functionArn": {},
    "payload": {
      "contentExpression": {},
      "type": {}
    }
  },
  "iotEvents": {
    "inputName": {},
    "payload": {
      "contentExpression": {},
      "type": {}
    }
  },
  "sqs": {
    "queueUrl": {},
    "useBase64": {},
    "payload": {
      "contentExpression": {},
      "type": {}
    }
  },
  "firehose": {
    "deliveryStreamName": {},
    "separator": {},
    "payload": {
      "contentExpression": {},
      "type": {}
    }
  },
  "dynamoDB": {
    "hashKeyType": {},
    "hashKeyField": {},
    "hashKeyValue": {},
    "rangeKeyType": {},
    "rangeKeyField": {},
    "rangeKeyValue": {},
    "operation": {},
    "payloadField": {},
    "tableName": {},
    "payload": {
      "contentExpression": {},
      "type": {}
    }
  },
  "dynamoDBv2": {
    "tableName": {},
    "payload": {
      "contentExpression": {},
      "type": {}
    }
  },
  "iotSiteWise": {
    "entryId": {},
    "assetId": {},
    "propertyId": {},
    "propertyAlias": {},
    "propertyValue": {
      "value": {
        "stringValue": {},
        "integerValue": {},
        "doubleValue": {},
        "booleanValue": {}
      },
      "timestamp": {
        "timeInSeconds": {},
        "offsetInNanos": {}
      },
      "quality": {}
    }
  }
}
```

Specifies one of the following actions to receive notifications when the alarm state changes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sns|[SNSTopicPublishAction](#schemasnstopicpublishaction)|false|none|Information required to publish the Amazon SNS message.|
|iotTopicPublish|[IotTopicPublishAction](#schemaiottopicpublishaction)|false|none|Information required to publish the MQTT message through the AWS IoT message broker.|
|lambda|[LambdaAction](#schemalambdaaction)|false|none|Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action.|
|iotEvents|[IotEventsAction](#schemaioteventsaction)|false|none|Sends an AWS IoT Events input, passing in information about the detector model instance and the event that triggered the action.|
|sqs|[SqsAction](#schemasqsaction)|false|none|Sends information about the detector model instance and the event that triggered the action to an Amazon SQS queue.|
|firehose|[FirehoseAction](#schemafirehoseaction)|false|none|Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream.|
|dynamoDB|[DynamoDBAction](#schemadynamodbaction)|false|none|<p>Defines an action to write to the Amazon DynamoDB table that you created. The standard action payload contains all the information about the detector model instance and the event that triggered the action. You can customize the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html">payload</a>. One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify.</p> <p>You must use expressions for all parameters in <code>DynamoDBAction</code>. The expressions accept literals, operators, functions, references, and substitution templates.</p> <p class="title"> <b>Examples</b> </p> <ul> <li> <p>For literal values, the expressions must contain single quotes. For example, the value for the <code>hashKeyType</code> parameter can be <code>'STRING'</code>.</p> </li> <li> <p>For references, you must specify either variables or input values. For example, the value for the <code>hashKeyField</code> parameter can be <code>$input.GreenhouseInput.name</code>.</p> </li> <li> <p>For a substitution template, you must use <code>${}</code>, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.</p> <p>In the following example, the value for the <code>hashKeyValue</code> parameter uses a substitution template. </p> <p> <code>'${$input.GreenhouseInput.temperature * 6 / 5 + 32} in Fahrenheit'</code> </p> </li> <li> <p>For a string concatenation, you must use <code>+</code>. A string concatenation can also contain a combination of literals, operators, functions, references, and substitution templates.</p> <p>In the following example, the value for the <code>tableName</code> parameter uses a string concatenation. </p> <p> <code>'GreenhouseTemperatureTable ' + $input.GreenhouseInput.date</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> <p>If the defined payload type is a string, <code>DynamoDBAction</code> writes non-JSON data to the DynamoDB table as binary data. The DynamoDB console displays the data as Base64-encoded text. The value for the <code>payloadField</code> parameter is <code>&lt;payload-field&gt;_raw</code>.</p>|
|dynamoDBv2|[DynamoDBv2Action](#schemadynamodbv2action)|false|none|<p>Defines an action to write to the Amazon DynamoDB table that you created. The default action payload contains all the information about the detector model instance and the event that triggered the action. You can customize the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html">payload</a>. A separate column of the DynamoDB table receives one attribute-value pair in the payload that you specify.</p> <p>You must use expressions for all parameters in <code>DynamoDBv2Action</code>. The expressions accept literals, operators, functions, references, and substitution templates.</p> <p class="title"> <b>Examples</b> </p> <ul> <li> <p>For literal values, the expressions must contain single quotes. For example, the value for the <code>tableName</code> parameter can be <code>'GreenhouseTemperatureTable'</code>.</p> </li> <li> <p>For references, you must specify either variables or input values. For example, the value for the <code>tableName</code> parameter can be <code>$variable.ddbtableName</code>.</p> </li> <li> <p>For a substitution template, you must use <code>${}</code>, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.</p> <p>In the following example, the value for the <code>contentExpression</code> parameter in <code>Payload</code> uses a substitution template. </p> <p> <code>'{\"sensorID\": \"${$input.GreenhouseInput.sensor_id}\", \"temperature\": \"${$input.GreenhouseInput.temperature * 9 / 5 + 32}\"}'</code> </p> </li> <li> <p>For a string concatenation, you must use <code>+</code>. A string concatenation can also contain a combination of literals, operators, functions, references, and substitution templates.</p> <p>In the following example, the value for the <code>tableName</code> parameter uses a string concatenation. </p> <p> <code>'GreenhouseTemperatureTable ' + $input.GreenhouseInput.date</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> <p>The value for the <code>type</code> parameter in <code>Payload</code> must be <code>JSON</code>.</p>|
|iotSiteWise|[IotSiteWiseAction](#schemaiotsitewiseaction)|false|none|<p>Sends information about the detector model instance and the event that triggered the action to a specified asset property in AWS IoT SiteWise.</p> <p>You must use expressions for all parameters in <code>IotSiteWiseAction</code>. The expressions accept literals, operators, functions, references, and substitutions templates.</p> <p class="title"> <b>Examples</b> </p> <ul> <li> <p>For literal values, the expressions must contain single quotes. For example, the value for the <code>propertyAlias</code> parameter can be <code>'/company/windfarm/3/turbine/7/temperature'</code>.</p> </li> <li> <p>For references, you must specify either variables or input values. For example, the value for the <code>assetId</code> parameter can be <code>$input.TurbineInput.assetId1</code>.</p> </li> <li> <p>For a substitution template, you must use <code>${}</code>, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.</p> <p>In the following example, the value for the <code>propertyAlias</code> parameter uses a substitution template. </p> <p> <code>'company/windfarm/${$input.TemperatureInput.sensorData.windfarmID}/turbine/ ${$input.TemperatureInput.sensorData.turbineID}/temperature'</code> </p> </li> </ul> <p>You must specify either <code>propertyAlias</code> or both <code>assetId</code> and <code>propertyId</code> to identify the target asset property in AWS IoT SiteWise.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p>|

<h2 id="tocS_AlarmCapabilities">AlarmCapabilities</h2>
<!-- backwards compatibility -->
<a id="schemaalarmcapabilities"></a>
<a id="schema_AlarmCapabilities"></a>
<a id="tocSalarmcapabilities"></a>
<a id="tocsalarmcapabilities"></a>

```json
{
  "initializationConfiguration": {
    "disabledOnInitialization": {}
  },
  "acknowledgeFlow": {
    "enabled": {}
  }
}
```

Contains the configuration information of alarm state changes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|initializationConfiguration|object|false|none|none|
|acknowledgeFlow|object|false|none|none|

<h2 id="tocS_AlarmEventActions">AlarmEventActions</h2>
<!-- backwards compatibility -->
<a id="schemaalarmeventactions"></a>
<a id="schema_AlarmEventActions"></a>
<a id="tocSalarmeventactions"></a>
<a id="tocsalarmeventactions"></a>

```json
{
  "alarmActions": {}
}
```

Contains information about one or more alarm actions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alarmActions|object|false|none|none|

<h2 id="tocS_AlarmModelArn">AlarmModelArn</h2>
<!-- backwards compatibility -->
<a id="schemaalarmmodelarn"></a>
<a id="schema_AlarmModelArn"></a>
<a id="tocSalarmmodelarn"></a>
<a id="tocsalarmmodelarn"></a>

```json
"string"
```

<h2 id="tocS_AlarmModelDescription">AlarmModelDescription</h2>
<!-- backwards compatibility -->
<a id="schemaalarmmodeldescription"></a>
<a id="schema_AlarmModelDescription"></a>
<a id="tocSalarmmodeldescription"></a>
<a id="tocsalarmmodeldescription"></a>

```json
"string"
```

<h2 id="tocS_AlarmModelName">AlarmModelName</h2>
<!-- backwards compatibility -->
<a id="schemaalarmmodelname"></a>
<a id="schema_AlarmModelName"></a>
<a id="tocSalarmmodelname"></a>
<a id="tocsalarmmodelname"></a>

```json
"string"
```

<h2 id="tocS_AlarmModelSummary">AlarmModelSummary</h2>
<!-- backwards compatibility -->
<a id="schemaalarmmodelsummary"></a>
<a id="schema_AlarmModelSummary"></a>
<a id="tocSalarmmodelsummary"></a>
<a id="tocsalarmmodelsummary"></a>

```json
{
  "creationTime": {},
  "alarmModelDescription": {},
  "alarmModelName": {}
}
```

Contains a summary of an alarm model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creationTime|object|false|none|none|
|alarmModelDescription|object|false|none|none|
|alarmModelName|object|false|none|none|

<h2 id="tocS_AlarmModelSummaries">AlarmModelSummaries</h2>
<!-- backwards compatibility -->
<a id="schemaalarmmodelsummaries"></a>
<a id="schema_AlarmModelSummaries"></a>
<a id="tocSalarmmodelsummaries"></a>
<a id="tocsalarmmodelsummaries"></a>

```json
[
  {
    "creationTime": {},
    "alarmModelDescription": {},
    "alarmModelName": {}
  }
]
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

<h2 id="tocS_AlarmModelVersion">AlarmModelVersion</h2>
<!-- backwards compatibility -->
<a id="schemaalarmmodelversion"></a>
<a id="schema_AlarmModelVersion"></a>
<a id="tocSalarmmodelversion"></a>
<a id="tocsalarmmodelversion"></a>

```json
"string"
```

<h2 id="tocS_AlarmModelVersionStatus">AlarmModelVersionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaalarmmodelversionstatus"></a>
<a id="schema_AlarmModelVersionStatus"></a>
<a id="tocSalarmmodelversionstatus"></a>
<a id="tocsalarmmodelversionstatus"></a>

```json
"ACTIVE"
```

<h2 id="tocS_AlarmModelVersionSummary">AlarmModelVersionSummary</h2>
<!-- backwards compatibility -->
<a id="schemaalarmmodelversionsummary"></a>
<a id="schema_AlarmModelVersionSummary"></a>
<a id="tocSalarmmodelversionsummary"></a>
<a id="tocsalarmmodelversionsummary"></a>

```json
{
  "alarmModelName": {},
  "alarmModelArn": {},
  "alarmModelVersion": {},
  "roleArn": {},
  "creationTime": {},
  "lastUpdateTime": {},
  "status": {},
  "statusMessage": {}
}
```

Contains a summary of an alarm model version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alarmModelName|object|false|none|none|
|alarmModelArn|object|false|none|none|
|alarmModelVersion|object|false|none|none|
|roleArn|object|false|none|none|
|creationTime|object|false|none|none|
|lastUpdateTime|object|false|none|none|
|status|object|false|none|none|
|statusMessage|object|false|none|none|

<h2 id="tocS_AlarmModelVersionSummaries">AlarmModelVersionSummaries</h2>
<!-- backwards compatibility -->
<a id="schemaalarmmodelversionsummaries"></a>
<a id="schema_AlarmModelVersionSummaries"></a>
<a id="tocSalarmmodelversionsummaries"></a>
<a id="tocsalarmmodelversionsummaries"></a>

```json
[
  {
    "alarmModelName": {},
    "alarmModelArn": {},
    "alarmModelVersion": {},
    "roleArn": {},
    "creationTime": {},
    "lastUpdateTime": {},
    "status": {},
    "statusMessage": {}
  }
]
```

<h2 id="tocS_StatusMessage">StatusMessage</h2>
<!-- backwards compatibility -->
<a id="schemastatusmessage"></a>
<a id="schema_StatusMessage"></a>
<a id="tocSstatusmessage"></a>
<a id="tocsstatusmessage"></a>

```json
"string"
```

<h2 id="tocS_AlarmNotification">AlarmNotification</h2>
<!-- backwards compatibility -->
<a id="schemaalarmnotification"></a>
<a id="schema_AlarmNotification"></a>
<a id="tocSalarmnotification"></a>
<a id="tocsalarmnotification"></a>

```json
{
  "notificationActions": {}
}
```

Contains information about one or more notification actions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notificationActions|object|false|none|none|

<h2 id="tocS_AlarmRule">AlarmRule</h2>
<!-- backwards compatibility -->
<a id="schemaalarmrule"></a>
<a id="schema_AlarmRule"></a>
<a id="tocSalarmrule"></a>
<a id="tocsalarmrule"></a>

```json
{
  "simpleRule": {
    "inputProperty": {},
    "comparisonOperator": {},
    "threshold": {}
  }
}
```

Defines when your alarm is invoked.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|simpleRule|object|false|none|none|

<h2 id="tocS_AnalysisId">AnalysisId</h2>
<!-- backwards compatibility -->
<a id="schemaanalysisid"></a>
<a id="schema_AnalysisId"></a>
<a id="tocSanalysisid"></a>
<a id="tocsanalysisid"></a>

```json
"string"
```

<h2 id="tocS_AnalysisMessage">AnalysisMessage</h2>
<!-- backwards compatibility -->
<a id="schemaanalysismessage"></a>
<a id="schema_AnalysisMessage"></a>
<a id="tocSanalysismessage"></a>
<a id="tocsanalysismessage"></a>

```json
"string"
```

<h2 id="tocS_AnalysisType">AnalysisType</h2>
<!-- backwards compatibility -->
<a id="schemaanalysistype"></a>
<a id="schema_AnalysisType"></a>
<a id="tocSanalysistype"></a>
<a id="tocsanalysistype"></a>

```json
"string"
```

<h2 id="tocS_AnalysisResultLevel">AnalysisResultLevel</h2>
<!-- backwards compatibility -->
<a id="schemaanalysisresultlevel"></a>
<a id="schema_AnalysisResultLevel"></a>
<a id="tocSanalysisresultlevel"></a>
<a id="tocsanalysisresultlevel"></a>

```json
"INFO"
```

<h2 id="tocS_AnalysisResultLocations">AnalysisResultLocations</h2>
<!-- backwards compatibility -->
<a id="schemaanalysisresultlocations"></a>
<a id="schema_AnalysisResultLocations"></a>
<a id="tocSanalysisresultlocations"></a>
<a id="tocsanalysisresultlocations"></a>

```json
[
  {
    "path": {}
  }
]
```

<h2 id="tocS_AnalysisResult">AnalysisResult</h2>
<!-- backwards compatibility -->
<a id="schemaanalysisresult"></a>
<a id="schema_AnalysisResult"></a>
<a id="tocSanalysisresult"></a>
<a id="tocsanalysisresult"></a>

```json
{
  "type": {},
  "level": {},
  "message": {},
  "locations": {}
}
```

Contains the result of the analysis.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|false|none|none|
|level|object|false|none|none|
|message|object|false|none|none|
|locations|object|false|none|none|

<h2 id="tocS_AnalysisResultLocationPath">AnalysisResultLocationPath</h2>
<!-- backwards compatibility -->
<a id="schemaanalysisresultlocationpath"></a>
<a id="schema_AnalysisResultLocationPath"></a>
<a id="tocSanalysisresultlocationpath"></a>
<a id="tocsanalysisresultlocationpath"></a>

```json
"string"
```

<h2 id="tocS_AnalysisResultLocation">AnalysisResultLocation</h2>
<!-- backwards compatibility -->
<a id="schemaanalysisresultlocation"></a>
<a id="schema_AnalysisResultLocation"></a>
<a id="tocSanalysisresultlocation"></a>
<a id="tocsanalysisresultlocation"></a>

```json
{
  "path": {}
}
```

Contains information that you can use to locate the field in your detector model that the analysis result references.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|object|false|none|none|

<h2 id="tocS_AnalysisResults">AnalysisResults</h2>
<!-- backwards compatibility -->
<a id="schemaanalysisresults"></a>
<a id="schema_AnalysisResults"></a>
<a id="tocSanalysisresults"></a>
<a id="tocsanalysisresults"></a>

```json
[
  {
    "type": {},
    "level": {},
    "message": {},
    "locations": {}
  }
]
```

<h2 id="tocS_AnalysisStatus">AnalysisStatus</h2>
<!-- backwards compatibility -->
<a id="schemaanalysisstatus"></a>
<a id="schema_AnalysisStatus"></a>
<a id="tocSanalysisstatus"></a>
<a id="tocsanalysisstatus"></a>

```json
"RUNNING"
```

<h2 id="tocS_AssetId">AssetId</h2>
<!-- backwards compatibility -->
<a id="schemaassetid"></a>
<a id="schema_AssetId"></a>
<a id="tocSassetid"></a>
<a id="tocsassetid"></a>

```json
"string"
```

<h2 id="tocS_AssetModelId">AssetModelId</h2>
<!-- backwards compatibility -->
<a id="schemaassetmodelid"></a>
<a id="schema_AssetModelId"></a>
<a id="tocSassetmodelid"></a>
<a id="tocsassetmodelid"></a>

```json
"string"
```

<h2 id="tocS_AssetPropertyAlias">AssetPropertyAlias</h2>
<!-- backwards compatibility -->
<a id="schemaassetpropertyalias"></a>
<a id="schema_AssetPropertyAlias"></a>
<a id="tocSassetpropertyalias"></a>
<a id="tocsassetpropertyalias"></a>

```json
"string"
```

<h2 id="tocS_AssetPropertyBooleanValue">AssetPropertyBooleanValue</h2>
<!-- backwards compatibility -->
<a id="schemaassetpropertybooleanvalue"></a>
<a id="schema_AssetPropertyBooleanValue"></a>
<a id="tocSassetpropertybooleanvalue"></a>
<a id="tocsassetpropertybooleanvalue"></a>

```json
"string"
```

<h2 id="tocS_AssetPropertyDoubleValue">AssetPropertyDoubleValue</h2>
<!-- backwards compatibility -->
<a id="schemaassetpropertydoublevalue"></a>
<a id="schema_AssetPropertyDoubleValue"></a>
<a id="tocSassetpropertydoublevalue"></a>
<a id="tocsassetpropertydoublevalue"></a>

```json
"string"
```

<h2 id="tocS_AssetPropertyEntryId">AssetPropertyEntryId</h2>
<!-- backwards compatibility -->
<a id="schemaassetpropertyentryid"></a>
<a id="schema_AssetPropertyEntryId"></a>
<a id="tocSassetpropertyentryid"></a>
<a id="tocsassetpropertyentryid"></a>

```json
"string"
```

<h2 id="tocS_AssetPropertyId">AssetPropertyId</h2>
<!-- backwards compatibility -->
<a id="schemaassetpropertyid"></a>
<a id="schema_AssetPropertyId"></a>
<a id="tocSassetpropertyid"></a>
<a id="tocsassetpropertyid"></a>

```json
"string"
```

<h2 id="tocS_AssetPropertyIntegerValue">AssetPropertyIntegerValue</h2>
<!-- backwards compatibility -->
<a id="schemaassetpropertyintegervalue"></a>
<a id="schema_AssetPropertyIntegerValue"></a>
<a id="tocSassetpropertyintegervalue"></a>
<a id="tocsassetpropertyintegervalue"></a>

```json
"string"
```

<h2 id="tocS_AssetPropertyOffsetInNanos">AssetPropertyOffsetInNanos</h2>
<!-- backwards compatibility -->
<a id="schemaassetpropertyoffsetinnanos"></a>
<a id="schema_AssetPropertyOffsetInNanos"></a>
<a id="tocSassetpropertyoffsetinnanos"></a>
<a id="tocsassetpropertyoffsetinnanos"></a>

```json
"string"
```

<h2 id="tocS_AssetPropertyQuality">AssetPropertyQuality</h2>
<!-- backwards compatibility -->
<a id="schemaassetpropertyquality"></a>
<a id="schema_AssetPropertyQuality"></a>
<a id="tocSassetpropertyquality"></a>
<a id="tocsassetpropertyquality"></a>

```json
"string"
```

<h2 id="tocS_AssetPropertyStringValue">AssetPropertyStringValue</h2>
<!-- backwards compatibility -->
<a id="schemaassetpropertystringvalue"></a>
<a id="schema_AssetPropertyStringValue"></a>
<a id="tocSassetpropertystringvalue"></a>
<a id="tocsassetpropertystringvalue"></a>

```json
"string"
```

<h2 id="tocS_AssetPropertyTimeInSeconds">AssetPropertyTimeInSeconds</h2>
<!-- backwards compatibility -->
<a id="schemaassetpropertytimeinseconds"></a>
<a id="schema_AssetPropertyTimeInSeconds"></a>
<a id="tocSassetpropertytimeinseconds"></a>
<a id="tocsassetpropertytimeinseconds"></a>

```json
"string"
```

<h2 id="tocS_AssetPropertyTimestamp">AssetPropertyTimestamp</h2>
<!-- backwards compatibility -->
<a id="schemaassetpropertytimestamp"></a>
<a id="schema_AssetPropertyTimestamp"></a>
<a id="tocSassetpropertytimestamp"></a>
<a id="tocsassetpropertytimestamp"></a>

```json
{
  "timeInSeconds": {},
  "offsetInNanos": {}
}
```

<p>A structure that contains timestamp information. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_TimeInNanos.html">TimeInNanos</a> in the <i>AWS IoT SiteWise API Reference</i>.</p> <p>You must use expressions for all parameters in <code>AssetPropertyTimestamp</code>. The expressions accept literals, operators, functions, references, and substitution templates.</p> <p class="title"> <b>Examples</b> </p> <ul> <li> <p>For literal values, the expressions must contain single quotes. For example, the value for the <code>timeInSeconds</code> parameter can be <code>'1586400675'</code>.</p> </li> <li> <p>For references, you must specify either variables or input values. For example, the value for the <code>offsetInNanos</code> parameter can be <code>$variable.time</code>.</p> </li> <li> <p>For a substitution template, you must use <code>${}</code>, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.</p> <p>In the following example, the value for the <code>timeInSeconds</code> parameter uses a substitution template.</p> <p> <code>'${$input.TemperatureInput.sensorData.timestamp / 1000}'</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timeInSeconds|object|true|none|none|
|offsetInNanos|object|false|none|none|

<h2 id="tocS_AssetPropertyVariant">AssetPropertyVariant</h2>
<!-- backwards compatibility -->
<a id="schemaassetpropertyvariant"></a>
<a id="schema_AssetPropertyVariant"></a>
<a id="tocSassetpropertyvariant"></a>
<a id="tocsassetpropertyvariant"></a>

```json
{
  "stringValue": {},
  "integerValue": {},
  "doubleValue": {},
  "booleanValue": {}
}
```

<p>A structure that contains an asset property value. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_Variant.html">Variant</a> in the <i>AWS IoT SiteWise API Reference</i>.</p> <p>You must use expressions for all parameters in <code>AssetPropertyVariant</code>. The expressions accept literals, operators, functions, references, and substitution templates.</p> <p class="title"> <b>Examples</b> </p> <ul> <li> <p>For literal values, the expressions must contain single quotes. For example, the value for the <code>integerValue</code> parameter can be <code>'100'</code>.</p> </li> <li> <p>For references, you must specify either variables or parameters. For example, the value for the <code>booleanValue</code> parameter can be <code>$variable.offline</code>.</p> </li> <li> <p>For a substitution template, you must use <code>${}</code>, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates. </p> <p>In the following example, the value for the <code>doubleValue</code> parameter uses a substitution template. </p> <p> <code>'${$input.TemperatureInput.sensorData.temperature * 6 / 5 + 32}'</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> <p>You must specify one of the following value types, depending on the <code>dataType</code> of the specified asset property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssetProperty.html">AssetProperty</a> in the <i>AWS IoT SiteWise API Reference</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stringValue|object|false|none|none|
|integerValue|object|false|none|none|
|doubleValue|object|false|none|none|
|booleanValue|object|false|none|none|

<h2 id="tocS_AssetPropertyValue">AssetPropertyValue</h2>
<!-- backwards compatibility -->
<a id="schemaassetpropertyvalue"></a>
<a id="schema_AssetPropertyValue"></a>
<a id="tocSassetpropertyvalue"></a>
<a id="tocsassetpropertyvalue"></a>

```json
{
  "value": {
    "stringValue": {},
    "integerValue": {},
    "doubleValue": {},
    "booleanValue": {}
  },
  "timestamp": {
    "timeInSeconds": {},
    "offsetInNanos": {}
  },
  "quality": {}
}
```

<p>A structure that contains value information. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssetPropertyValue.html">AssetPropertyValue</a> in the <i>AWS IoT SiteWise API Reference</i>.</p> <p>You must use expressions for all parameters in <code>AssetPropertyValue</code>. The expressions accept literals, operators, functions, references, and substitution templates.</p> <p class="title"> <b>Examples</b> </p> <ul> <li> <p>For literal values, the expressions must contain single quotes. For example, the value for the <code>quality</code> parameter can be <code>'GOOD'</code>.</p> </li> <li> <p>For references, you must specify either variables or input values. For example, the value for the <code>quality</code> parameter can be <code>$input.TemperatureInput.sensorData.quality</code>.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|object|false|none|none|
|timestamp|object|false|none|none|
|quality|object|false|none|none|

<h2 id="tocS_AttributeJsonPath">AttributeJsonPath</h2>
<!-- backwards compatibility -->
<a id="schemaattributejsonpath"></a>
<a id="schema_AttributeJsonPath"></a>
<a id="tocSattributejsonpath"></a>
<a id="tocsattributejsonpath"></a>

```json
"string"
```

<h2 id="tocS_Attribute">Attribute</h2>
<!-- backwards compatibility -->
<a id="schemaattribute"></a>
<a id="schema_Attribute"></a>
<a id="tocSattribute"></a>
<a id="tocsattribute"></a>

```json
{
  "jsonPath": {}
}
```

The attributes from the JSON payload that are made available by the input. Inputs are derived from messages sent to the AWS IoT Events system using <code>BatchPutMessage</code>. Each such message contains a JSON payload. Those attributes (and their paired values) specified here are available for use in the <code>condition</code> expressions used by detectors.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jsonPath|object|true|none|none|

<h2 id="tocS_TimerName">TimerName</h2>
<!-- backwards compatibility -->
<a id="schematimername"></a>
<a id="schema_TimerName"></a>
<a id="tocStimername"></a>
<a id="tocstimername"></a>

```json
"string"
```

<h2 id="tocS_ComparisonOperator">ComparisonOperator</h2>
<!-- backwards compatibility -->
<a id="schemacomparisonoperator"></a>
<a id="schema_ComparisonOperator"></a>
<a id="tocScomparisonoperator"></a>
<a id="tocscomparisonoperator"></a>

```json
"GREATER"
```

<h2 id="tocS_Condition">Condition</h2>
<!-- backwards compatibility -->
<a id="schemacondition"></a>
<a id="schema_Condition"></a>
<a id="tocScondition"></a>
<a id="tocscondition"></a>

```json
"string"
```

<h2 id="tocS_ContentExpression">ContentExpression</h2>
<!-- backwards compatibility -->
<a id="schemacontentexpression"></a>
<a id="schema_ContentExpression"></a>
<a id="tocScontentexpression"></a>
<a id="tocscontentexpression"></a>

```json
"string"
```

<h2 id="tocS_Tags">Tags</h2>
<!-- backwards compatibility -->
<a id="schematags"></a>
<a id="schema_Tags"></a>
<a id="tocStags"></a>
<a id="tocstags"></a>

```json
[
  {
    "key": {},
    "value": {}
  }
]
```

<h2 id="tocS_Severity">Severity</h2>
<!-- backwards compatibility -->
<a id="schemaseverity"></a>
<a id="schema_Severity"></a>
<a id="tocSseverity"></a>
<a id="tocsseverity"></a>

```json
0
```

<h2 id="tocS_CreateAlarmModelRequest">CreateAlarmModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatealarmmodelrequest"></a>
<a id="schema_CreateAlarmModelRequest"></a>
<a id="tocScreatealarmmodelrequest"></a>
<a id="tocscreatealarmmodelrequest"></a>

```json
{
  "alarmModelName": {},
  "alarmModelDescription": {},
  "roleArn": {},
  "tags": {},
  "key": {},
  "severity": {},
  "alarmRule": {
    "simpleRule": {
      "inputProperty": {},
      "comparisonOperator": {},
      "threshold": {}
    }
  },
  "alarmNotification": {
    "notificationActions": {}
  },
  "alarmEventActions": {
    "alarmActions": {}
  },
  "alarmCapabilities": {
    "initializationConfiguration": {
      "disabledOnInitialization": {}
    },
    "acknowledgeFlow": {
      "enabled": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alarmModelName|object|true|none|none|
|alarmModelDescription|object|false|none|none|
|roleArn|object|true|none|none|
|tags|object|false|none|none|
|key|object|false|none|none|
|severity|object|false|none|none|
|alarmRule|object|true|none|none|
|alarmNotification|object|false|none|none|
|alarmEventActions|object|false|none|none|
|alarmCapabilities|object|false|none|none|

<h2 id="tocS_DetectorModelName">DetectorModelName</h2>
<!-- backwards compatibility -->
<a id="schemadetectormodelname"></a>
<a id="schema_DetectorModelName"></a>
<a id="tocSdetectormodelname"></a>
<a id="tocsdetectormodelname"></a>

```json
"string"
```

<h2 id="tocS_DetectorModelDefinition">DetectorModelDefinition</h2>
<!-- backwards compatibility -->
<a id="schemadetectormodeldefinition"></a>
<a id="schema_DetectorModelDefinition"></a>
<a id="tocSdetectormodeldefinition"></a>
<a id="tocsdetectormodeldefinition"></a>

```json
{
  "states": {},
  "initialStateName": {}
}
```

Information that defines how a detector operates.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|states|object|true|none|none|
|initialStateName|object|true|none|none|

<h2 id="tocS_DetectorModelDescription">DetectorModelDescription</h2>
<!-- backwards compatibility -->
<a id="schemadetectormodeldescription"></a>
<a id="schema_DetectorModelDescription"></a>
<a id="tocSdetectormodeldescription"></a>
<a id="tocsdetectormodeldescription"></a>

```json
"string"
```

<h2 id="tocS_EvaluationMethod">EvaluationMethod</h2>
<!-- backwards compatibility -->
<a id="schemaevaluationmethod"></a>
<a id="schema_EvaluationMethod"></a>
<a id="tocSevaluationmethod"></a>
<a id="tocsevaluationmethod"></a>

```json
"BATCH"
```

<h2 id="tocS_CreateDetectorModelRequest">CreateDetectorModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedetectormodelrequest"></a>
<a id="schema_CreateDetectorModelRequest"></a>
<a id="tocScreatedetectormodelrequest"></a>
<a id="tocscreatedetectormodelrequest"></a>

```json
{
  "detectorModelName": {},
  "detectorModelDefinition": {
    "states": {},
    "initialStateName": {}
  },
  "detectorModelDescription": {},
  "key": {},
  "roleArn": {},
  "tags": {},
  "evaluationMethod": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectorModelName|object|true|none|none|
|detectorModelDefinition|object|true|none|none|
|detectorModelDescription|object|false|none|none|
|key|object|false|none|none|
|roleArn|object|true|none|none|
|tags|object|false|none|none|
|evaluationMethod|object|false|none|none|

<h2 id="tocS_DetectorModelConfiguration">DetectorModelConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemadetectormodelconfiguration"></a>
<a id="schema_DetectorModelConfiguration"></a>
<a id="tocSdetectormodelconfiguration"></a>
<a id="tocsdetectormodelconfiguration"></a>

```json
{
  "detectorModelName": {},
  "detectorModelVersion": {},
  "detectorModelDescription": {},
  "detectorModelArn": {},
  "roleArn": {},
  "creationTime": {},
  "lastUpdateTime": {},
  "status": {},
  "key": {},
  "evaluationMethod": {}
}
```

Information about how the detector model is configured.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectorModelName|object|false|none|none|
|detectorModelVersion|object|false|none|none|
|detectorModelDescription|object|false|none|none|
|detectorModelArn|object|false|none|none|
|roleArn|object|false|none|none|
|creationTime|object|false|none|none|
|lastUpdateTime|object|false|none|none|
|status|object|false|none|none|
|key|object|false|none|none|
|evaluationMethod|object|false|none|none|

<h2 id="tocS_InputName">InputName</h2>
<!-- backwards compatibility -->
<a id="schemainputname"></a>
<a id="schema_InputName"></a>
<a id="tocSinputname"></a>
<a id="tocsinputname"></a>

```json
"string"
```

<h2 id="tocS_InputDescription">InputDescription</h2>
<!-- backwards compatibility -->
<a id="schemainputdescription"></a>
<a id="schema_InputDescription"></a>
<a id="tocSinputdescription"></a>
<a id="tocsinputdescription"></a>

```json
"string"
```

<h2 id="tocS_InputDefinition">InputDefinition</h2>
<!-- backwards compatibility -->
<a id="schemainputdefinition"></a>
<a id="schema_InputDefinition"></a>
<a id="tocSinputdefinition"></a>
<a id="tocsinputdefinition"></a>

```json
{
  "attributes": {}
}
```

The definition of the input.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|true|none|none|

<h2 id="tocS_CreateInputRequest">CreateInputRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateinputrequest"></a>
<a id="schema_CreateInputRequest"></a>
<a id="tocScreateinputrequest"></a>
<a id="tocscreateinputrequest"></a>

```json
{
  "inputName": {},
  "inputDescription": {},
  "inputDefinition": {
    "attributes": {}
  },
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputName|object|true|none|none|
|inputDescription|object|false|none|none|
|inputDefinition|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_InputConfiguration">InputConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemainputconfiguration"></a>
<a id="schema_InputConfiguration"></a>
<a id="tocSinputconfiguration"></a>
<a id="tocsinputconfiguration"></a>

```json
{
  "inputName": {},
  "inputDescription": {},
  "inputArn": {},
  "creationTime": {},
  "lastUpdateTime": {},
  "status": {}
}
```

Information about the configuration of an input.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputName|object|true|none|none|
|inputDescription|object|false|none|none|
|inputArn|object|true|none|none|
|creationTime|object|true|none|none|
|lastUpdateTime|object|true|none|none|
|status|object|true|none|none|

<h2 id="tocS_DeleteAlarmModelRequest">DeleteAlarmModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletealarmmodelrequest"></a>
<a id="schema_DeleteAlarmModelRequest"></a>
<a id="tocSdeletealarmmodelrequest"></a>
<a id="tocsdeletealarmmodelrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteDetectorModelRequest">DeleteDetectorModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedetectormodelrequest"></a>
<a id="schema_DeleteDetectorModelRequest"></a>
<a id="tocSdeletedetectormodelrequest"></a>
<a id="tocsdeletedetectormodelrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteInputRequest">DeleteInputRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteinputrequest"></a>
<a id="schema_DeleteInputRequest"></a>
<a id="tocSdeleteinputrequest"></a>
<a id="tocsdeleteinputrequest"></a>

```json
{}
```

<h2 id="tocS_DeliveryStreamName">DeliveryStreamName</h2>
<!-- backwards compatibility -->
<a id="schemadeliverystreamname"></a>
<a id="schema_DeliveryStreamName"></a>
<a id="tocSdeliverystreamname"></a>
<a id="tocsdeliverystreamname"></a>

```json
"string"
```

<h2 id="tocS_DescribeAlarmModelRequest">DescribeAlarmModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribealarmmodelrequest"></a>
<a id="schema_DescribeAlarmModelRequest"></a>
<a id="tocSdescribealarmmodelrequest"></a>
<a id="tocsdescribealarmmodelrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeDetectorModelAnalysisRequest">DescribeDetectorModelAnalysisRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedetectormodelanalysisrequest"></a>
<a id="schema_DescribeDetectorModelAnalysisRequest"></a>
<a id="tocSdescribedetectormodelanalysisrequest"></a>
<a id="tocsdescribedetectormodelanalysisrequest"></a>

```json
{}
```

<h2 id="tocS_DetectorModelVersion">DetectorModelVersion</h2>
<!-- backwards compatibility -->
<a id="schemadetectormodelversion"></a>
<a id="schema_DetectorModelVersion"></a>
<a id="tocSdetectormodelversion"></a>
<a id="tocsdetectormodelversion"></a>

```json
"string"
```

<h2 id="tocS_DescribeDetectorModelRequest">DescribeDetectorModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedetectormodelrequest"></a>
<a id="schema_DescribeDetectorModelRequest"></a>
<a id="tocSdescribedetectormodelrequest"></a>
<a id="tocsdescribedetectormodelrequest"></a>

```json
{}
```

<h2 id="tocS_DetectorModel">DetectorModel</h2>
<!-- backwards compatibility -->
<a id="schemadetectormodel"></a>
<a id="schema_DetectorModel"></a>
<a id="tocSdetectormodel"></a>
<a id="tocsdetectormodel"></a>

```json
{
  "detectorModelDefinition": {
    "states": {},
    "initialStateName": {}
  },
  "detectorModelConfiguration": {
    "detectorModelName": {},
    "detectorModelVersion": {},
    "detectorModelDescription": {},
    "detectorModelArn": {},
    "roleArn": {},
    "creationTime": {},
    "lastUpdateTime": {},
    "status": {},
    "key": {},
    "evaluationMethod": {}
  }
}
```

Information about the detector model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectorModelDefinition|object|false|none|none|
|detectorModelConfiguration|object|false|none|none|

<h2 id="tocS_DescribeInputRequest">DescribeInputRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeinputrequest"></a>
<a id="schema_DescribeInputRequest"></a>
<a id="tocSdescribeinputrequest"></a>
<a id="tocsdescribeinputrequest"></a>

```json
{}
```

<h2 id="tocS_Input">Input</h2>
<!-- backwards compatibility -->
<a id="schemainput"></a>
<a id="schema_Input"></a>
<a id="tocSinput"></a>
<a id="tocsinput"></a>

```json
{
  "inputConfiguration": {
    "inputName": {},
    "inputDescription": {},
    "inputArn": {},
    "creationTime": {},
    "lastUpdateTime": {},
    "status": {}
  },
  "inputDefinition": {
    "attributes": {}
  }
}
```

Information about the input.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputConfiguration|object|false|none|none|
|inputDefinition|object|false|none|none|

<h2 id="tocS_DescribeLoggingOptionsRequest">DescribeLoggingOptionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeloggingoptionsrequest"></a>
<a id="schema_DescribeLoggingOptionsRequest"></a>
<a id="tocSdescribeloggingoptionsrequest"></a>
<a id="tocsdescribeloggingoptionsrequest"></a>

```json
{}
```

<h2 id="tocS_LoggingOptions">LoggingOptions</h2>
<!-- backwards compatibility -->
<a id="schemaloggingoptions"></a>
<a id="schema_LoggingOptions"></a>
<a id="tocSloggingoptions"></a>
<a id="tocsloggingoptions"></a>

```json
{
  "roleArn": {},
  "level": {},
  "enabled": {},
  "detectorDebugOptions": {}
}
```

The values of the AWS IoT Events logging options.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|roleArn|object|true|none|none|
|level|object|true|none|none|
|enabled|object|true|none|none|
|detectorDebugOptions|object|false|none|none|

<h2 id="tocS_KeyValue">KeyValue</h2>
<!-- backwards compatibility -->
<a id="schemakeyvalue"></a>
<a id="schema_KeyValue"></a>
<a id="tocSkeyvalue"></a>
<a id="tocskeyvalue"></a>

```json
"string"
```

<h2 id="tocS_DetectorDebugOption">DetectorDebugOption</h2>
<!-- backwards compatibility -->
<a id="schemadetectordebugoption"></a>
<a id="schema_DetectorDebugOption"></a>
<a id="tocSdetectordebugoption"></a>
<a id="tocsdetectordebugoption"></a>

```json
{
  "detectorModelName": {},
  "keyValue": {}
}
```

The detector model and the specific detectors (instances) for which the logging level is given.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectorModelName|object|true|none|none|
|keyValue|object|false|none|none|

<h2 id="tocS_DetectorModelArn">DetectorModelArn</h2>
<!-- backwards compatibility -->
<a id="schemadetectormodelarn"></a>
<a id="schema_DetectorModelArn"></a>
<a id="tocSdetectormodelarn"></a>
<a id="tocsdetectormodelarn"></a>

```json
"string"
```

<h2 id="tocS_DetectorModelVersionStatus">DetectorModelVersionStatus</h2>
<!-- backwards compatibility -->
<a id="schemadetectormodelversionstatus"></a>
<a id="schema_DetectorModelVersionStatus"></a>
<a id="tocSdetectormodelversionstatus"></a>
<a id="tocsdetectormodelversionstatus"></a>

```json
"ACTIVE"
```

<h2 id="tocS_DetectorModelSummary">DetectorModelSummary</h2>
<!-- backwards compatibility -->
<a id="schemadetectormodelsummary"></a>
<a id="schema_DetectorModelSummary"></a>
<a id="tocSdetectormodelsummary"></a>
<a id="tocsdetectormodelsummary"></a>

```json
{
  "detectorModelName": {},
  "detectorModelDescription": {},
  "creationTime": {}
}
```

Information about the detector model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectorModelName|object|false|none|none|
|detectorModelDescription|object|false|none|none|
|creationTime|object|false|none|none|

<h2 id="tocS_DetectorModelSummaries">DetectorModelSummaries</h2>
<!-- backwards compatibility -->
<a id="schemadetectormodelsummaries"></a>
<a id="schema_DetectorModelSummaries"></a>
<a id="tocSdetectormodelsummaries"></a>
<a id="tocsdetectormodelsummaries"></a>

```json
[
  {
    "detectorModelName": {},
    "detectorModelDescription": {},
    "creationTime": {}
  }
]
```

<h2 id="tocS_DetectorModelVersionSummary">DetectorModelVersionSummary</h2>
<!-- backwards compatibility -->
<a id="schemadetectormodelversionsummary"></a>
<a id="schema_DetectorModelVersionSummary"></a>
<a id="tocSdetectormodelversionsummary"></a>
<a id="tocsdetectormodelversionsummary"></a>

```json
{
  "detectorModelName": {},
  "detectorModelVersion": {},
  "detectorModelArn": {},
  "roleArn": {},
  "creationTime": {},
  "lastUpdateTime": {},
  "status": {},
  "evaluationMethod": {}
}
```

Information about the detector model version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectorModelName|object|false|none|none|
|detectorModelVersion|object|false|none|none|
|detectorModelArn|object|false|none|none|
|roleArn|object|false|none|none|
|creationTime|object|false|none|none|
|lastUpdateTime|object|false|none|none|
|status|object|false|none|none|
|evaluationMethod|object|false|none|none|

<h2 id="tocS_DetectorModelVersionSummaries">DetectorModelVersionSummaries</h2>
<!-- backwards compatibility -->
<a id="schemadetectormodelversionsummaries"></a>
<a id="schema_DetectorModelVersionSummaries"></a>
<a id="tocSdetectormodelversionsummaries"></a>
<a id="tocsdetectormodelversionsummaries"></a>

```json
[
  {
    "detectorModelName": {},
    "detectorModelVersion": {},
    "detectorModelArn": {},
    "roleArn": {},
    "creationTime": {},
    "lastUpdateTime": {},
    "status": {},
    "evaluationMethod": {}
  }
]
```

<h2 id="tocS_DisabledOnInitialization">DisabledOnInitialization</h2>
<!-- backwards compatibility -->
<a id="schemadisabledoninitialization"></a>
<a id="schema_DisabledOnInitialization"></a>
<a id="tocSdisabledoninitialization"></a>
<a id="tocsdisabledoninitialization"></a>

```json
true
```

<h2 id="tocS_DynamoKeyType">DynamoKeyType</h2>
<!-- backwards compatibility -->
<a id="schemadynamokeytype"></a>
<a id="schema_DynamoKeyType"></a>
<a id="tocSdynamokeytype"></a>
<a id="tocsdynamokeytype"></a>

```json
"string"
```

<h2 id="tocS_DynamoKeyField">DynamoKeyField</h2>
<!-- backwards compatibility -->
<a id="schemadynamokeyfield"></a>
<a id="schema_DynamoKeyField"></a>
<a id="tocSdynamokeyfield"></a>
<a id="tocsdynamokeyfield"></a>

```json
"string"
```

<h2 id="tocS_DynamoKeyValue">DynamoKeyValue</h2>
<!-- backwards compatibility -->
<a id="schemadynamokeyvalue"></a>
<a id="schema_DynamoKeyValue"></a>
<a id="tocSdynamokeyvalue"></a>
<a id="tocsdynamokeyvalue"></a>

```json
"string"
```

<h2 id="tocS_DynamoOperation">DynamoOperation</h2>
<!-- backwards compatibility -->
<a id="schemadynamooperation"></a>
<a id="schema_DynamoOperation"></a>
<a id="tocSdynamooperation"></a>
<a id="tocsdynamooperation"></a>

```json
"string"
```

<h2 id="tocS_DynamoTableName">DynamoTableName</h2>
<!-- backwards compatibility -->
<a id="schemadynamotablename"></a>
<a id="schema_DynamoTableName"></a>
<a id="tocSdynamotablename"></a>
<a id="tocsdynamotablename"></a>

```json
"string"
```

<h2 id="tocS_Payload">Payload</h2>
<!-- backwards compatibility -->
<a id="schemapayload"></a>
<a id="schema_Payload"></a>
<a id="tocSpayload"></a>
<a id="tocspayload"></a>

```json
{
  "contentExpression": {},
  "type": {}
}
```

<p>Information needed to configure the payload.</p> <p>By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use <code>contentExpression</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentExpression|object|true|none|none|
|type|object|true|none|none|

<h2 id="tocS_FromEmail">FromEmail</h2>
<!-- backwards compatibility -->
<a id="schemafromemail"></a>
<a id="schema_FromEmail"></a>
<a id="tocSfromemail"></a>
<a id="tocsfromemail"></a>

```json
"string"
```

<h2 id="tocS_EmailContent">EmailContent</h2>
<!-- backwards compatibility -->
<a id="schemaemailcontent"></a>
<a id="schema_EmailContent"></a>
<a id="tocSemailcontent"></a>
<a id="tocsemailcontent"></a>

```json
{
  "subject": {},
  "additionalMessage": {}
}
```

Contains the subject and message of an email.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subject|object|false|none|none|
|additionalMessage|object|false|none|none|

<h2 id="tocS_EmailRecipients">EmailRecipients</h2>
<!-- backwards compatibility -->
<a id="schemaemailrecipients"></a>
<a id="schema_EmailRecipients"></a>
<a id="tocSemailrecipients"></a>
<a id="tocsemailrecipients"></a>

```json
{
  "to": {}
}
```

<p>Contains the information of one or more recipients who receive the emails.</p> <important> <p>You must <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/addusers.html">add the users that receive emails to your AWS SSO store</a>.</p> </important>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|to|object|false|none|none|

<h2 id="tocS_EmailConfiguration">EmailConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaemailconfiguration"></a>
<a id="schema_EmailConfiguration"></a>
<a id="tocSemailconfiguration"></a>
<a id="tocsemailconfiguration"></a>

```json
{
  "from": {},
  "content": {
    "subject": {},
    "additionalMessage": {}
  },
  "recipients": {
    "to": {}
  }
}
```

Contains the configuration information of email notifications.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|from|object|true|none|none|
|content|object|false|none|none|
|recipients|object|true|none|none|

<h2 id="tocS_EmailConfigurations">EmailConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemaemailconfigurations"></a>
<a id="schema_EmailConfigurations"></a>
<a id="tocSemailconfigurations"></a>
<a id="tocsemailconfigurations"></a>

```json
[
  {
    "from": {},
    "content": {
      "subject": {},
      "additionalMessage": {}
    },
    "recipients": {
      "to": {}
    }
  }
]
```

<h2 id="tocS_EmailSubject">EmailSubject</h2>
<!-- backwards compatibility -->
<a id="schemaemailsubject"></a>
<a id="schema_EmailSubject"></a>
<a id="tocSemailsubject"></a>
<a id="tocsemailsubject"></a>

```json
"string"
```

<h2 id="tocS_NotificationAdditionalMessage">NotificationAdditionalMessage</h2>
<!-- backwards compatibility -->
<a id="schemanotificationadditionalmessage"></a>
<a id="schema_NotificationAdditionalMessage"></a>
<a id="tocSnotificationadditionalmessage"></a>
<a id="tocsnotificationadditionalmessage"></a>

```json
"string"
```

<h2 id="tocS_RecipientDetails">RecipientDetails</h2>
<!-- backwards compatibility -->
<a id="schemarecipientdetails"></a>
<a id="schema_RecipientDetails"></a>
<a id="tocSrecipientdetails"></a>
<a id="tocsrecipientdetails"></a>

```json
[
  {
    "ssoIdentity": {
      "identityStoreId": {},
      "userId": {}
    }
  }
]
```

<h2 id="tocS_EventName">EventName</h2>
<!-- backwards compatibility -->
<a id="schemaeventname"></a>
<a id="schema_EventName"></a>
<a id="tocSeventname"></a>
<a id="tocseventname"></a>

```json
"string"
```

<h2 id="tocS_Event">Event</h2>
<!-- backwards compatibility -->
<a id="schemaevent"></a>
<a id="schema_Event"></a>
<a id="tocSevent"></a>
<a id="tocsevent"></a>

```json
{
  "eventName": {},
  "condition": {},
  "actions": {}
}
```

Specifies the <code>actions</code> to be performed when the <code>condition</code> evaluates to TRUE.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventName|object|true|none|none|
|condition|object|false|none|none|
|actions|object|false|none|none|

<h2 id="tocS_Events">Events</h2>
<!-- backwards compatibility -->
<a id="schemaevents"></a>
<a id="schema_Events"></a>
<a id="tocSevents"></a>
<a id="tocsevents"></a>

```json
[
  {
    "eventName": {},
    "condition": {},
    "actions": {}
  }
]
```

<h2 id="tocS_FirehoseSeparator">FirehoseSeparator</h2>
<!-- backwards compatibility -->
<a id="schemafirehoseseparator"></a>
<a id="schema_FirehoseSeparator"></a>
<a id="tocSfirehoseseparator"></a>
<a id="tocsfirehoseseparator"></a>

```json
"string"
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

<h2 id="tocS_MaxAnalysisResults">MaxAnalysisResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxanalysisresults"></a>
<a id="schema_MaxAnalysisResults"></a>
<a id="tocSmaxanalysisresults"></a>
<a id="tocsmaxanalysisresults"></a>

```json
0
```

<h2 id="tocS_GetDetectorModelAnalysisResultsRequest">GetDetectorModelAnalysisResultsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdetectormodelanalysisresultsrequest"></a>
<a id="schema_GetDetectorModelAnalysisResultsRequest"></a>
<a id="tocSgetdetectormodelanalysisresultsrequest"></a>
<a id="tocsgetdetectormodelanalysisresultsrequest"></a>

```json
{}
```

<h2 id="tocS_IdentityStoreId">IdentityStoreId</h2>
<!-- backwards compatibility -->
<a id="schemaidentitystoreid"></a>
<a id="schema_IdentityStoreId"></a>
<a id="tocSidentitystoreid"></a>
<a id="tocsidentitystoreid"></a>

```json
"string"
```

<h2 id="tocS_InputArn">InputArn</h2>
<!-- backwards compatibility -->
<a id="schemainputarn"></a>
<a id="schema_InputArn"></a>
<a id="tocSinputarn"></a>
<a id="tocsinputarn"></a>

```json
"string"
```

<h2 id="tocS_InputStatus">InputStatus</h2>
<!-- backwards compatibility -->
<a id="schemainputstatus"></a>
<a id="schema_InputStatus"></a>
<a id="tocSinputstatus"></a>
<a id="tocsinputstatus"></a>

```json
"CREATING"
```

<h2 id="tocS_InputIdentifier">InputIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemainputidentifier"></a>
<a id="schema_InputIdentifier"></a>
<a id="tocSinputidentifier"></a>
<a id="tocsinputidentifier"></a>

```json
{
  "iotEventsInputIdentifier": {
    "inputName": {}
  },
  "iotSiteWiseInputIdentifier": {
    "iotSiteWiseAssetModelPropertyIdentifier": {
      "assetModelId": {},
      "propertyId": {}
    }
  }
}
```

 The identifer of the input.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|iotEventsInputIdentifier|object|false|none|none|
|iotSiteWiseInputIdentifier|object|false|none|none|

<h2 id="tocS_InputProperty">InputProperty</h2>
<!-- backwards compatibility -->
<a id="schemainputproperty"></a>
<a id="schema_InputProperty"></a>
<a id="tocSinputproperty"></a>
<a id="tocsinputproperty"></a>

```json
"string"
```

<h2 id="tocS_InputSummary">InputSummary</h2>
<!-- backwards compatibility -->
<a id="schemainputsummary"></a>
<a id="schema_InputSummary"></a>
<a id="tocSinputsummary"></a>
<a id="tocsinputsummary"></a>

```json
{
  "inputName": {},
  "inputDescription": {},
  "inputArn": {},
  "creationTime": {},
  "lastUpdateTime": {},
  "status": {}
}
```

Information about the input.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputName|object|false|none|none|
|inputDescription|object|false|none|none|
|inputArn|object|false|none|none|
|creationTime|object|false|none|none|
|lastUpdateTime|object|false|none|none|
|status|object|false|none|none|

<h2 id="tocS_InputSummaries">InputSummaries</h2>
<!-- backwards compatibility -->
<a id="schemainputsummaries"></a>
<a id="schema_InputSummaries"></a>
<a id="tocSinputsummaries"></a>
<a id="tocsinputsummaries"></a>

```json
[
  {
    "inputName": {},
    "inputDescription": {},
    "inputArn": {},
    "creationTime": {},
    "lastUpdateTime": {},
    "status": {}
  }
]
```

<h2 id="tocS_IotSiteWiseAssetModelPropertyIdentifier">IotSiteWiseAssetModelPropertyIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaiotsitewiseassetmodelpropertyidentifier"></a>
<a id="schema_IotSiteWiseAssetModelPropertyIdentifier"></a>
<a id="tocSiotsitewiseassetmodelpropertyidentifier"></a>
<a id="tocsiotsitewiseassetmodelpropertyidentifier"></a>

```json
{
  "assetModelId": {},
  "propertyId": {}
}
```

 The asset model property identifer of the input routed from AWS IoT SiteWise.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetModelId|object|true|none|none|
|propertyId|object|true|none|none|

<h2 id="tocS_MQTTTopic">MQTTTopic</h2>
<!-- backwards compatibility -->
<a id="schemamqtttopic"></a>
<a id="schema_MQTTTopic"></a>
<a id="tocSmqtttopic"></a>
<a id="tocsmqtttopic"></a>

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

<h2 id="tocS_ListAlarmModelVersionsRequest">ListAlarmModelVersionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistalarmmodelversionsrequest"></a>
<a id="schema_ListAlarmModelVersionsRequest"></a>
<a id="tocSlistalarmmodelversionsrequest"></a>
<a id="tocslistalarmmodelversionsrequest"></a>

```json
{}
```

<h2 id="tocS_ListAlarmModelsRequest">ListAlarmModelsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistalarmmodelsrequest"></a>
<a id="schema_ListAlarmModelsRequest"></a>
<a id="tocSlistalarmmodelsrequest"></a>
<a id="tocslistalarmmodelsrequest"></a>

```json
{}
```

<h2 id="tocS_ListDetectorModelVersionsRequest">ListDetectorModelVersionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdetectormodelversionsrequest"></a>
<a id="schema_ListDetectorModelVersionsRequest"></a>
<a id="tocSlistdetectormodelversionsrequest"></a>
<a id="tocslistdetectormodelversionsrequest"></a>

```json
{}
```

<h2 id="tocS_ListDetectorModelsRequest">ListDetectorModelsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdetectormodelsrequest"></a>
<a id="schema_ListDetectorModelsRequest"></a>
<a id="tocSlistdetectormodelsrequest"></a>
<a id="tocslistdetectormodelsrequest"></a>

```json
{}
```

<h2 id="tocS_ListInputRoutingsRequest">ListInputRoutingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistinputroutingsrequest"></a>
<a id="schema_ListInputRoutingsRequest"></a>
<a id="tocSlistinputroutingsrequest"></a>
<a id="tocslistinputroutingsrequest"></a>

```json
{
  "inputIdentifier": {
    "iotEventsInputIdentifier": {
      "inputName": {}
    },
    "iotSiteWiseInputIdentifier": {
      "iotSiteWiseAssetModelPropertyIdentifier": {
        "assetModelId": {},
        "propertyId": {}
      }
    }
  },
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputIdentifier|object|true|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_RoutedResources">RoutedResources</h2>
<!-- backwards compatibility -->
<a id="schemaroutedresources"></a>
<a id="schema_RoutedResources"></a>
<a id="tocSroutedresources"></a>
<a id="tocsroutedresources"></a>

```json
[
  {
    "name": {},
    "arn": {}
  }
]
```

<h2 id="tocS_ListInputsRequest">ListInputsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistinputsrequest"></a>
<a id="schema_ListInputsRequest"></a>
<a id="tocSlistinputsrequest"></a>
<a id="tocslistinputsrequest"></a>

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

<h2 id="tocS_NotificationTargetActions">NotificationTargetActions</h2>
<!-- backwards compatibility -->
<a id="schemanotificationtargetactions"></a>
<a id="schema_NotificationTargetActions"></a>
<a id="tocSnotificationtargetactions"></a>
<a id="tocsnotificationtargetactions"></a>

```json
{
  "lambdaAction": {
    "functionArn": {},
    "payload": {
      "contentExpression": {},
      "type": {}
    }
  }
}
```

Specifies an AWS Lambda function to manage alarm notifications. You can create one or use the <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/lambda-support.html">AWS Lambda function provided by AWS IoT Events</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lambdaAction|[LambdaAction](#schemalambdaaction)|false|none|Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action.|

<h2 id="tocS_SMSConfigurations">SMSConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemasmsconfigurations"></a>
<a id="schema_SMSConfigurations"></a>
<a id="tocSsmsconfigurations"></a>
<a id="tocssmsconfigurations"></a>

```json
[
  {
    "senderId": {},
    "additionalMessage": {},
    "recipients": {}
  }
]
```

<h2 id="tocS_NotificationAction">NotificationAction</h2>
<!-- backwards compatibility -->
<a id="schemanotificationaction"></a>
<a id="schema_NotificationAction"></a>
<a id="tocSnotificationaction"></a>
<a id="tocsnotificationaction"></a>

```json
{
  "action": {
    "lambdaAction": {
      "functionArn": {},
      "payload": {
        "contentExpression": {},
        "type": {}
      }
    }
  },
  "smsConfigurations": {},
  "emailConfigurations": {}
}
```

Contains the notification settings of an alarm model. The settings apply to all alarms that were created based on this alarm model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|smsConfigurations|object|false|none|none|
|emailConfigurations|object|false|none|none|

<h2 id="tocS_OnEnterLifecycle">OnEnterLifecycle</h2>
<!-- backwards compatibility -->
<a id="schemaonenterlifecycle"></a>
<a id="schema_OnEnterLifecycle"></a>
<a id="tocSonenterlifecycle"></a>
<a id="tocsonenterlifecycle"></a>

```json
{
  "events": {}
}
```

When entering this state, perform these <code>actions</code> if the <code>condition</code> is TRUE.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|events|object|false|none|none|

<h2 id="tocS_OnExitLifecycle">OnExitLifecycle</h2>
<!-- backwards compatibility -->
<a id="schemaonexitlifecycle"></a>
<a id="schema_OnExitLifecycle"></a>
<a id="tocSonexitlifecycle"></a>
<a id="tocsonexitlifecycle"></a>

```json
{
  "events": {}
}
```

When exiting this state, perform these <code>actions</code> if the specified <code>condition</code> is <code>TRUE</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|events|object|false|none|none|

<h2 id="tocS_TransitionEvents">TransitionEvents</h2>
<!-- backwards compatibility -->
<a id="schematransitionevents"></a>
<a id="schema_TransitionEvents"></a>
<a id="tocStransitionevents"></a>
<a id="tocstransitionevents"></a>

```json
[
  {
    "eventName": {},
    "condition": {},
    "actions": {},
    "nextState": {}
  }
]
```

<h2 id="tocS_OnInputLifecycle">OnInputLifecycle</h2>
<!-- backwards compatibility -->
<a id="schemaoninputlifecycle"></a>
<a id="schema_OnInputLifecycle"></a>
<a id="tocSoninputlifecycle"></a>
<a id="tocsoninputlifecycle"></a>

```json
{
  "events": {},
  "transitionEvents": {}
}
```

Specifies the actions performed when the <code>condition</code> evaluates to TRUE.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|events|object|false|none|none|
|transitionEvents|object|false|none|none|

<h2 id="tocS_PayloadType">PayloadType</h2>
<!-- backwards compatibility -->
<a id="schemapayloadtype"></a>
<a id="schema_PayloadType"></a>
<a id="tocSpayloadtype"></a>
<a id="tocspayloadtype"></a>

```json
"STRING"
```

<h2 id="tocS_PutLoggingOptionsRequest">PutLoggingOptionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputloggingoptionsrequest"></a>
<a id="schema_PutLoggingOptionsRequest"></a>
<a id="tocSputloggingoptionsrequest"></a>
<a id="tocsputloggingoptionsrequest"></a>

```json
{
  "loggingOptions": {
    "roleArn": {},
    "level": {},
    "enabled": {},
    "detectorDebugOptions": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loggingOptions|object|true|none|none|

<h2 id="tocS_QueueUrl">QueueUrl</h2>
<!-- backwards compatibility -->
<a id="schemaqueueurl"></a>
<a id="schema_QueueUrl"></a>
<a id="tocSqueueurl"></a>
<a id="tocsqueueurl"></a>

```json
"string"
```

<h2 id="tocS_SSOIdentity">SSOIdentity</h2>
<!-- backwards compatibility -->
<a id="schemassoidentity"></a>
<a id="schema_SSOIdentity"></a>
<a id="tocSssoidentity"></a>
<a id="tocsssoidentity"></a>

```json
{
  "identityStoreId": {},
  "userId": {}
}
```

Contains information about your identity source in AWS Single Sign-On. For more information, see the <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html">AWS Single Sign-On User Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identityStoreId|object|true|none|none|
|userId|object|false|none|none|

<h2 id="tocS_RecipientDetail">RecipientDetail</h2>
<!-- backwards compatibility -->
<a id="schemarecipientdetail"></a>
<a id="schema_RecipientDetail"></a>
<a id="tocSrecipientdetail"></a>
<a id="tocsrecipientdetail"></a>

```json
{
  "ssoIdentity": {
    "identityStoreId": {},
    "userId": {}
  }
}
```

The information that identifies the recipient.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ssoIdentity|object|false|none|none|

<h2 id="tocS_ResourceName">ResourceName</h2>
<!-- backwards compatibility -->
<a id="schemaresourcename"></a>
<a id="schema_ResourceName"></a>
<a id="tocSresourcename"></a>
<a id="tocsresourcename"></a>

```json
"string"
```

<h2 id="tocS_RoutedResource">RoutedResource</h2>
<!-- backwards compatibility -->
<a id="schemaroutedresource"></a>
<a id="schema_RoutedResource"></a>
<a id="tocSroutedresource"></a>
<a id="tocsroutedresource"></a>

```json
{
  "name": {},
  "arn": {}
}
```

 Contains information about the routed resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|arn|object|false|none|none|

<h2 id="tocS_SMSSenderId">SMSSenderId</h2>
<!-- backwards compatibility -->
<a id="schemasmssenderid"></a>
<a id="schema_SMSSenderId"></a>
<a id="tocSsmssenderid"></a>
<a id="tocssmssenderid"></a>

```json
"string"
```

<h2 id="tocS_SMSConfiguration">SMSConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemasmsconfiguration"></a>
<a id="schema_SMSConfiguration"></a>
<a id="tocSsmsconfiguration"></a>
<a id="tocssmsconfiguration"></a>

```json
{
  "senderId": {},
  "additionalMessage": {},
  "recipients": {}
}
```

Contains the configuration information of SMS notifications.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|senderId|object|false|none|none|
|additionalMessage|object|false|none|none|
|recipients|object|true|none|none|

<h2 id="tocS_SSOReferenceId">SSOReferenceId</h2>
<!-- backwards compatibility -->
<a id="schemassoreferenceid"></a>
<a id="schema_SSOReferenceId"></a>
<a id="tocSssoreferenceid"></a>
<a id="tocsssoreferenceid"></a>

```json
"string"
```

<h2 id="tocS_Seconds">Seconds</h2>
<!-- backwards compatibility -->
<a id="schemaseconds"></a>
<a id="schema_Seconds"></a>
<a id="tocSseconds"></a>
<a id="tocsseconds"></a>

```json
1
```

<h2 id="tocS_VariableValue">VariableValue</h2>
<!-- backwards compatibility -->
<a id="schemavariablevalue"></a>
<a id="schema_VariableValue"></a>
<a id="tocSvariablevalue"></a>
<a id="tocsvariablevalue"></a>

```json
"string"
```

<h2 id="tocS_VariableName">VariableName</h2>
<!-- backwards compatibility -->
<a id="schemavariablename"></a>
<a id="schema_VariableName"></a>
<a id="tocSvariablename"></a>
<a id="tocsvariablename"></a>

```json
"string"
```

<h2 id="tocS_Threshold">Threshold</h2>
<!-- backwards compatibility -->
<a id="schemathreshold"></a>
<a id="schema_Threshold"></a>
<a id="tocSthreshold"></a>
<a id="tocsthreshold"></a>

```json
"string"
```

<h2 id="tocS_UseBase64">UseBase64</h2>
<!-- backwards compatibility -->
<a id="schemausebase64"></a>
<a id="schema_UseBase64"></a>
<a id="tocSusebase64"></a>
<a id="tocsusebase64"></a>

```json
true
```

<h2 id="tocS_StartDetectorModelAnalysisRequest">StartDetectorModelAnalysisRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartdetectormodelanalysisrequest"></a>
<a id="schema_StartDetectorModelAnalysisRequest"></a>
<a id="tocSstartdetectormodelanalysisrequest"></a>
<a id="tocsstartdetectormodelanalysisrequest"></a>

```json
{
  "detectorModelDefinition": {
    "states": {},
    "initialStateName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectorModelDefinition|[DetectorModelDefinition](#schemadetectormodeldefinition)|true|none|Information that defines how a detector operates.|

<h2 id="tocS_State">State</h2>
<!-- backwards compatibility -->
<a id="schemastate"></a>
<a id="schema_State"></a>
<a id="tocSstate"></a>
<a id="tocsstate"></a>

```json
{
  "stateName": {},
  "onInput": {
    "events": {},
    "transitionEvents": {}
  },
  "onEnter": {
    "events": {}
  },
  "onExit": {
    "events": {}
  }
}
```

Information that defines a state of a detector.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stateName|object|true|none|none|
|onInput|object|false|none|none|
|onEnter|object|false|none|none|
|onExit|object|false|none|none|

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

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
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|true|none|none|

<h2 id="tocS_TransitionEvent">TransitionEvent</h2>
<!-- backwards compatibility -->
<a id="schematransitionevent"></a>
<a id="schema_TransitionEvent"></a>
<a id="tocStransitionevent"></a>
<a id="tocstransitionevent"></a>

```json
{
  "eventName": {},
  "condition": {},
  "actions": {},
  "nextState": {}
}
```

Specifies the actions performed and the next state entered when a <code>condition</code> evaluates to TRUE.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventName|object|true|none|none|
|condition|object|true|none|none|
|actions|object|false|none|none|
|nextState|object|true|none|none|

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{}
```

<h2 id="tocS_UpdateAlarmModelRequest">UpdateAlarmModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatealarmmodelrequest"></a>
<a id="schema_UpdateAlarmModelRequest"></a>
<a id="tocSupdatealarmmodelrequest"></a>
<a id="tocsupdatealarmmodelrequest"></a>

```json
{
  "alarmModelDescription": {},
  "roleArn": {},
  "severity": {},
  "alarmRule": {
    "simpleRule": {
      "inputProperty": {},
      "comparisonOperator": {},
      "threshold": {}
    }
  },
  "alarmNotification": {
    "notificationActions": {}
  },
  "alarmEventActions": {
    "alarmActions": {}
  },
  "alarmCapabilities": {
    "initializationConfiguration": {
      "disabledOnInitialization": {}
    },
    "acknowledgeFlow": {
      "enabled": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alarmModelDescription|object|false|none|none|
|roleArn|object|true|none|none|
|severity|object|false|none|none|
|alarmRule|object|true|none|none|
|alarmNotification|object|false|none|none|
|alarmEventActions|object|false|none|none|
|alarmCapabilities|object|false|none|none|

<h2 id="tocS_UpdateDetectorModelRequest">UpdateDetectorModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedetectormodelrequest"></a>
<a id="schema_UpdateDetectorModelRequest"></a>
<a id="tocSupdatedetectormodelrequest"></a>
<a id="tocsupdatedetectormodelrequest"></a>

```json
{
  "detectorModelDefinition": {
    "states": {},
    "initialStateName": {}
  },
  "detectorModelDescription": {},
  "roleArn": {},
  "evaluationMethod": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectorModelDefinition|object|true|none|none|
|detectorModelDescription|object|false|none|none|
|roleArn|object|true|none|none|
|evaluationMethod|object|false|none|none|

<h2 id="tocS_UpdateInputRequest">UpdateInputRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateinputrequest"></a>
<a id="schema_UpdateInputRequest"></a>
<a id="tocSupdateinputrequest"></a>
<a id="tocsupdateinputrequest"></a>

```json
{
  "inputDescription": {},
  "inputDefinition": {
    "attributes": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputDescription|object|false|none|none|
|inputDefinition|object|true|none|none|
