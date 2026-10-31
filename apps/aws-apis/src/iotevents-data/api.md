<h1 id="aws-iot-events-data">AWS IoT Events Data v2018-10-23</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>IoT Events monitors your equipment or device fleets for failures or changes in operation, and triggers actions when such events occur. You can use IoT Events Data API commands to send inputs to detectors, list detectors, and view or update a detector's status.</p> <p> For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/what-is-iotevents.html">What is IoT Events?</a> in the <i>IoT Events Developer Guide</i>.</p>

Base URLs:

* <a href="http://data.iotevents.us-east-1.amazonaws.com">http://data.iotevents.us-east-1.amazonaws.com</a> - The AWS IoT Events Data multi-region endpoint

* <a href="https://data.iotevents.us-east-1.amazonaws.com">https://data.iotevents.us-east-1.amazonaws.com</a> - The AWS IoT Events Data multi-region endpoint

* <a href="http://data.iotevents.cn-north-1.amazonaws.com.cn">http://data.iotevents.cn-north-1.amazonaws.com.cn</a> - The AWS IoT Events Data endpoint for China (Beijing) and China (Ningxia)

* <a href="https://data.iotevents.cn-north-1.amazonaws.com.cn">https://data.iotevents.cn-north-1.amazonaws.com.cn</a> - The AWS IoT Events Data endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/iotevents/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-iot-events-data-default">Default</h1>

## BatchAcknowledgeAlarm

<a id="opIdBatchAcknowledgeAlarm"></a>

> Code samples

```bash
curl https://iotevents-data.us-east-1.amazonaws.com/alarms/acknowledge \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "acknowledgeActionRequests": [
      {
        "requestId": {},
        "alarmModelName": {},
        "keyValue": {},
        "note": {}
      }
    ]
  }'
```

`POST /alarms/acknowledge`

Acknowledges one or more alarms. The alarms change to the <code>ACKNOWLEDGED</code> state after you acknowledge them.

> Body parameter

```json
{
  "acknowledgeActionRequests": [
    {
      "requestId": {},
      "alarmModelName": {},
      "keyValue": {},
      "note": {}
    }
  ]
}
```

<h3 id="batchacknowledgealarm-parameters">Parameters</h3>

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
|» acknowledgeActionRequests|body|[[AcknowledgeAlarmActionRequest](#schemaacknowledgealarmactionrequest)]|true|The list of acknowledge action requests. You can specify up to 10 requests per operation.|

> Example responses

> 202 Response

```json
{
  "errorEntries": {}
}
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

<h3 id="batchacknowledgealarm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[BatchAcknowledgeAlarmResponse](#schemabatchacknowledgealarmresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchDeleteDetector

<a id="opIdBatchDeleteDetector"></a>

> Code samples

```bash
curl https://iotevents-data.us-east-1.amazonaws.com/detectors/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "detectors": [
      {
        "messageId": {},
        "detectorModelName": {},
        "keyValue": {}
      }
    ]
  }'
```

`POST /detectors/delete`

Deletes one or more detectors that were created. When a detector is deleted, its state will be cleared and the detector will be removed from the list of detectors. The deleted detector will no longer appear if referenced in the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_ListDetectors.html">ListDetectors</a> API call.

> Body parameter

```json
{
  "detectors": [
    {
      "messageId": {},
      "detectorModelName": {},
      "keyValue": {}
    }
  ]
}
```

<h3 id="batchdeletedetector-parameters">Parameters</h3>

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
|» detectors|body|[[DeleteDetectorRequest](#schemadeletedetectorrequest)]|true|The list of one or more detectors to be deleted.|

> Example responses

> 200 Response

```json
{
  "batchDeleteDetectorErrorEntries": {}
}
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

<h3 id="batchdeletedetector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchDeleteDetectorResponse](#schemabatchdeletedetectorresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchDisableAlarm

<a id="opIdBatchDisableAlarm"></a>

> Code samples

```bash
curl https://iotevents-data.us-east-1.amazonaws.com/alarms/disable \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "disableActionRequests": [
      {
        "requestId": {},
        "alarmModelName": {},
        "keyValue": {},
        "note": {}
      }
    ]
  }'
```

`POST /alarms/disable`

Disables one or more alarms. The alarms change to the <code>DISABLED</code> state after you disable them.

> Body parameter

```json
{
  "disableActionRequests": [
    {
      "requestId": {},
      "alarmModelName": {},
      "keyValue": {},
      "note": {}
    }
  ]
}
```

<h3 id="batchdisablealarm-parameters">Parameters</h3>

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
|» disableActionRequests|body|[[DisableAlarmActionRequest](#schemadisablealarmactionrequest)]|true|The list of disable action requests. You can specify up to 10 requests per operation.|

> Example responses

> 202 Response

```json
{
  "errorEntries": {}
}
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

<h3 id="batchdisablealarm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[BatchDisableAlarmResponse](#schemabatchdisablealarmresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchEnableAlarm

<a id="opIdBatchEnableAlarm"></a>

> Code samples

```bash
curl https://iotevents-data.us-east-1.amazonaws.com/alarms/enable \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "enableActionRequests": [
      {
        "requestId": {},
        "alarmModelName": {},
        "keyValue": {},
        "note": {}
      }
    ]
  }'
```

`POST /alarms/enable`

Enables one or more alarms. The alarms change to the <code>NORMAL</code> state after you enable them.

> Body parameter

```json
{
  "enableActionRequests": [
    {
      "requestId": {},
      "alarmModelName": {},
      "keyValue": {},
      "note": {}
    }
  ]
}
```

<h3 id="batchenablealarm-parameters">Parameters</h3>

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
|» enableActionRequests|body|[[EnableAlarmActionRequest](#schemaenablealarmactionrequest)]|true|The list of enable action requests. You can specify up to 10 requests per operation.|

> Example responses

> 202 Response

```json
{
  "errorEntries": {}
}
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

<h3 id="batchenablealarm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[BatchEnableAlarmResponse](#schemabatchenablealarmresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchPutMessage

<a id="opIdBatchPutMessage"></a>

> Code samples

```bash
curl https://iotevents-data.us-east-1.amazonaws.com/inputs/messages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "messages": [
      {
        "messageId": {},
        "inputName": {},
        "payload": {},
        "timestamp": {
          "timeInMillis": {}
        }
      }
    ]
  }'
```

`POST /inputs/messages`

Sends a set of messages to the IoT Events system. Each message payload is transformed into the input you specify (<code>"inputName"</code>) and ingested into any detectors that monitor that input. If multiple messages are sent, the order in which the messages are processed isn't guaranteed. To guarantee ordering, you must send messages one at a time and wait for a successful response.

> Body parameter

```json
{
  "messages": [
    {
      "messageId": {},
      "inputName": {},
      "payload": {},
      "timestamp": {
        "timeInMillis": {}
      }
    }
  ]
}
```

<h3 id="batchputmessage-parameters">Parameters</h3>

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
|» messages|body|[[Message](#schemamessage)]|true|The list of messages to send. Each message has the following format: <code>'{ "messageId": "string", "inputName": "string", "payload": "string"}'</code> |

> Example responses

> 200 Response

```json
{
  "BatchPutMessageErrorEntries": {}
}
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

<h3 id="batchputmessage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchPutMessageResponse](#schemabatchputmessageresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchResetAlarm

<a id="opIdBatchResetAlarm"></a>

> Code samples

```bash
curl https://iotevents-data.us-east-1.amazonaws.com/alarms/reset \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "resetActionRequests": [
      {
        "requestId": {},
        "alarmModelName": {},
        "keyValue": {},
        "note": {}
      }
    ]
  }'
```

`POST /alarms/reset`

Resets one or more alarms. The alarms return to the <code>NORMAL</code> state after you reset them.

> Body parameter

```json
{
  "resetActionRequests": [
    {
      "requestId": {},
      "alarmModelName": {},
      "keyValue": {},
      "note": {}
    }
  ]
}
```

<h3 id="batchresetalarm-parameters">Parameters</h3>

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
|» resetActionRequests|body|[[ResetAlarmActionRequest](#schemaresetalarmactionrequest)]|true|The list of reset action requests. You can specify up to 10 requests per operation.|

> Example responses

> 202 Response

```json
{
  "errorEntries": {}
}
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

<h3 id="batchresetalarm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[BatchResetAlarmResponse](#schemabatchresetalarmresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchSnoozeAlarm

<a id="opIdBatchSnoozeAlarm"></a>

> Code samples

```bash
curl https://iotevents-data.us-east-1.amazonaws.com/alarms/snooze \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "snoozeActionRequests": [
      {
        "requestId": {},
        "alarmModelName": {},
        "keyValue": {},
        "note": {},
        "snoozeDuration": {}
      }
    ]
  }'
```

`POST /alarms/snooze`

Changes one or more alarms to the snooze mode. The alarms change to the <code>SNOOZE_DISABLED</code> state after you set them to the snooze mode.

> Body parameter

```json
{
  "snoozeActionRequests": [
    {
      "requestId": {},
      "alarmModelName": {},
      "keyValue": {},
      "note": {},
      "snoozeDuration": {}
    }
  ]
}
```

<h3 id="batchsnoozealarm-parameters">Parameters</h3>

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
|» snoozeActionRequests|body|[[SnoozeAlarmActionRequest](#schemasnoozealarmactionrequest)]|true|The list of snooze action requests. You can specify up to 10 requests per operation.|

> Example responses

> 202 Response

```json
{
  "errorEntries": {}
}
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

<h3 id="batchsnoozealarm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[BatchSnoozeAlarmResponse](#schemabatchsnoozealarmresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchUpdateDetector

<a id="opIdBatchUpdateDetector"></a>

> Code samples

```bash
curl https://iotevents-data.us-east-1.amazonaws.com/detectors \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "detectors": [
      {
        "messageId": {},
        "detectorModelName": {},
        "keyValue": {},
        "state": {
          "stateName": {},
          "variables": {},
          "timers": {}
        }
      }
    ]
  }'
```

`POST /detectors`

Updates the state, variable values, and timer settings of one or more detectors (instances) of a specified detector model.

> Body parameter

```json
{
  "detectors": [
    {
      "messageId": {},
      "detectorModelName": {},
      "keyValue": {},
      "state": {
        "stateName": {},
        "variables": {},
        "timers": {}
      }
    }
  ]
}
```

<h3 id="batchupdatedetector-parameters">Parameters</h3>

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
|» detectors|body|[[UpdateDetectorRequest](#schemaupdatedetectorrequest)]|true|The list of detectors (instances) to update, along with the values to update.|

> Example responses

> 200 Response

```json
{
  "batchUpdateDetectorErrorEntries": {}
}
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

<h3 id="batchupdatedetector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchUpdateDetectorResponse](#schemabatchupdatedetectorresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAlarm

<a id="opIdDescribeAlarm"></a>

> Code samples

```bash
curl https://iotevents-data.us-east-1.amazonaws.com/alarms/string/keyValues/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /alarms/{alarmModelName}/keyValues/`

Retrieves information about an alarm.

<h3 id="describealarm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alarmModelName|path|string|true|The name of the alarm model.|
|keyValue|query|string|false|The value of the key used as a filter to select only the alarms associated with the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_CreateAlarmModel.html#iotevents-CreateAlarmModel-request-key">key</a>.|
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
  "alarm": {
    "alarmModelName": {},
    "alarmModelVersion": {},
    "keyValue": {},
    "alarmState": {
      "stateName": {},
      "ruleEvaluation": {
        "simpleRuleEvaluation": {
          "inputPropertyValue": {},
          "operator": {},
          "thresholdValue": {}
        }
      },
      "customerAction": {
        "actionName": {},
        "snoozeActionConfiguration": {
          "snoozeDuration": {},
          "note": {}
        },
        "enableActionConfiguration": {
          "note": {}
        },
        "disableActionConfiguration": {
          "note": {}
        },
        "acknowledgeActionConfiguration": {
          "note": {}
        },
        "resetActionConfiguration": {
          "note": {}
        }
      },
      "systemEvent": {
        "eventType": {},
        "stateChangeConfiguration": {
          "triggerType": {}
        }
      }
    },
    "severity": {},
    "creationTime": {},
    "lastUpdateTime": {}
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

<h3 id="describealarm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAlarmResponse](#schemadescribealarmresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDetector

<a id="opIdDescribeDetector"></a>

> Code samples

```bash
curl https://iotevents-data.us-east-1.amazonaws.com/detectors/string/keyValues/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /detectors/{detectorModelName}/keyValues/`

Returns information about the specified detector (instance).

<h3 id="describedetector-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorModelName|path|string|true|The name of the detector model whose detectors (instances) you want information about.|
|keyValue|query|string|false|A filter used to limit results to detectors (instances) created because of the given key ID.|
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
  "detector": {
    "detectorModelName": {},
    "keyValue": {},
    "detectorModelVersion": {},
    "state": {
      "stateName": {},
      "variables": {},
      "timers": {}
    },
    "creationTime": {},
    "lastUpdateTime": {}
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

<h3 id="describedetector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDetectorResponse](#schemadescribedetectorresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAlarms

<a id="opIdListAlarms"></a>

> Code samples

```bash
curl https://iotevents-data.us-east-1.amazonaws.com/alarms/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /alarms/{alarmModelName}`

Lists one or more alarms. The operation returns only the metadata associated with each alarm.

<h3 id="listalarms-parameters">Parameters</h3>

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
  "alarmSummaries": {},
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

<h3 id="listalarms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAlarmsResponse](#schemalistalarmsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDetectors

<a id="opIdListDetectors"></a>

> Code samples

```bash
curl https://iotevents-data.us-east-1.amazonaws.com/detectors/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /detectors/{detectorModelName}`

Lists detectors (the instances of a detector model).

<h3 id="listdetectors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectorModelName|path|string|true|The name of the detector model whose detectors (instances) are listed.|
|stateName|query|string|false|A filter that limits results to those detectors (instances) in the given state.|
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
  "detectorSummaries": {},
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

<h3 id="listdetectors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDetectorsResponse](#schemalistdetectorsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_BatchAcknowledgeAlarmResponse">BatchAcknowledgeAlarmResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchacknowledgealarmresponse"></a>
<a id="schema_BatchAcknowledgeAlarmResponse"></a>
<a id="tocSbatchacknowledgealarmresponse"></a>
<a id="tocsbatchacknowledgealarmresponse"></a>

```json
{
  "errorEntries": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorEntries|object|false|none|none|

<h2 id="tocS_AcknowledgeAlarmActionRequest">AcknowledgeAlarmActionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaacknowledgealarmactionrequest"></a>
<a id="schema_AcknowledgeAlarmActionRequest"></a>
<a id="tocSacknowledgealarmactionrequest"></a>
<a id="tocsacknowledgealarmactionrequest"></a>

```json
{
  "requestId": {},
  "alarmModelName": {},
  "keyValue": {},
  "note": {}
}
```

Information needed to acknowledge the alarm.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|true|none|none|
|alarmModelName|object|true|none|none|
|keyValue|object|false|none|none|
|note|object|false|none|none|

<h2 id="tocS_InvalidRequestException">InvalidRequestException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrequestexception"></a>
<a id="schema_InvalidRequestException"></a>
<a id="tocSinvalidrequestexception"></a>
<a id="tocsinvalidrequestexception"></a>

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

<h2 id="tocS_ThrottlingException">ThrottlingException</h2>
<!-- backwards compatibility -->
<a id="schemathrottlingexception"></a>
<a id="schema_ThrottlingException"></a>
<a id="tocSthrottlingexception"></a>
<a id="tocsthrottlingexception"></a>

```json
null
```

<h2 id="tocS_BatchDeleteDetectorResponse">BatchDeleteDetectorResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeletedetectorresponse"></a>
<a id="schema_BatchDeleteDetectorResponse"></a>
<a id="tocSbatchdeletedetectorresponse"></a>
<a id="tocsbatchdeletedetectorresponse"></a>

```json
{
  "batchDeleteDetectorErrorEntries": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batchDeleteDetectorErrorEntries|object|false|none|none|

<h2 id="tocS_DeleteDetectorRequest">DeleteDetectorRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedetectorrequest"></a>
<a id="schema_DeleteDetectorRequest"></a>
<a id="tocSdeletedetectorrequest"></a>
<a id="tocsdeletedetectorrequest"></a>

```json
{
  "messageId": {},
  "detectorModelName": {},
  "keyValue": {}
}
```

Information used to delete the detector model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messageId|object|true|none|none|
|detectorModelName|object|true|none|none|
|keyValue|object|false|none|none|

<h2 id="tocS_BatchDisableAlarmResponse">BatchDisableAlarmResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchdisablealarmresponse"></a>
<a id="schema_BatchDisableAlarmResponse"></a>
<a id="tocSbatchdisablealarmresponse"></a>
<a id="tocsbatchdisablealarmresponse"></a>

```json
{
  "errorEntries": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorEntries|object|false|none|none|

<h2 id="tocS_DisableAlarmActionRequest">DisableAlarmActionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisablealarmactionrequest"></a>
<a id="schema_DisableAlarmActionRequest"></a>
<a id="tocSdisablealarmactionrequest"></a>
<a id="tocsdisablealarmactionrequest"></a>

```json
{
  "requestId": {},
  "alarmModelName": {},
  "keyValue": {},
  "note": {}
}
```

Information used to disable the alarm.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|true|none|none|
|alarmModelName|object|true|none|none|
|keyValue|object|false|none|none|
|note|object|false|none|none|

<h2 id="tocS_BatchEnableAlarmResponse">BatchEnableAlarmResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchenablealarmresponse"></a>
<a id="schema_BatchEnableAlarmResponse"></a>
<a id="tocSbatchenablealarmresponse"></a>
<a id="tocsbatchenablealarmresponse"></a>

```json
{
  "errorEntries": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorEntries|object|false|none|none|

<h2 id="tocS_EnableAlarmActionRequest">EnableAlarmActionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaenablealarmactionrequest"></a>
<a id="schema_EnableAlarmActionRequest"></a>
<a id="tocSenablealarmactionrequest"></a>
<a id="tocsenablealarmactionrequest"></a>

```json
{
  "requestId": {},
  "alarmModelName": {},
  "keyValue": {},
  "note": {}
}
```

Information needed to enable the alarm.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|true|none|none|
|alarmModelName|object|true|none|none|
|keyValue|object|false|none|none|
|note|object|false|none|none|

<h2 id="tocS_BatchPutMessageResponse">BatchPutMessageResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchputmessageresponse"></a>
<a id="schema_BatchPutMessageResponse"></a>
<a id="tocSbatchputmessageresponse"></a>
<a id="tocsbatchputmessageresponse"></a>

```json
{
  "BatchPutMessageErrorEntries": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BatchPutMessageErrorEntries|object|false|none|none|

<h2 id="tocS_Message">Message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
{
  "messageId": {},
  "inputName": {},
  "payload": {},
  "timestamp": {
    "timeInMillis": {}
  }
}
```

Information about a message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messageId|object|true|none|none|
|inputName|object|true|none|none|
|payload|object|true|none|none|
|timestamp|object|false|none|none|

<h2 id="tocS_BatchResetAlarmResponse">BatchResetAlarmResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchresetalarmresponse"></a>
<a id="schema_BatchResetAlarmResponse"></a>
<a id="tocSbatchresetalarmresponse"></a>
<a id="tocsbatchresetalarmresponse"></a>

```json
{
  "errorEntries": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorEntries|object|false|none|none|

<h2 id="tocS_ResetAlarmActionRequest">ResetAlarmActionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaresetalarmactionrequest"></a>
<a id="schema_ResetAlarmActionRequest"></a>
<a id="tocSresetalarmactionrequest"></a>
<a id="tocsresetalarmactionrequest"></a>

```json
{
  "requestId": {},
  "alarmModelName": {},
  "keyValue": {},
  "note": {}
}
```

Information needed to reset the alarm.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|true|none|none|
|alarmModelName|object|true|none|none|
|keyValue|object|false|none|none|
|note|object|false|none|none|

<h2 id="tocS_BatchSnoozeAlarmResponse">BatchSnoozeAlarmResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchsnoozealarmresponse"></a>
<a id="schema_BatchSnoozeAlarmResponse"></a>
<a id="tocSbatchsnoozealarmresponse"></a>
<a id="tocsbatchsnoozealarmresponse"></a>

```json
{
  "errorEntries": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorEntries|object|false|none|none|

<h2 id="tocS_SnoozeAlarmActionRequest">SnoozeAlarmActionRequest</h2>
<!-- backwards compatibility -->
<a id="schemasnoozealarmactionrequest"></a>
<a id="schema_SnoozeAlarmActionRequest"></a>
<a id="tocSsnoozealarmactionrequest"></a>
<a id="tocssnoozealarmactionrequest"></a>

```json
{
  "requestId": {},
  "alarmModelName": {},
  "keyValue": {},
  "note": {},
  "snoozeDuration": {}
}
```

Information needed to snooze the alarm.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|true|none|none|
|alarmModelName|object|true|none|none|
|keyValue|object|false|none|none|
|note|object|false|none|none|
|snoozeDuration|object|true|none|none|

<h2 id="tocS_BatchUpdateDetectorResponse">BatchUpdateDetectorResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchupdatedetectorresponse"></a>
<a id="schema_BatchUpdateDetectorResponse"></a>
<a id="tocSbatchupdatedetectorresponse"></a>
<a id="tocsbatchupdatedetectorresponse"></a>

```json
{
  "batchUpdateDetectorErrorEntries": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batchUpdateDetectorErrorEntries|object|false|none|none|

<h2 id="tocS_UpdateDetectorRequest">UpdateDetectorRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedetectorrequest"></a>
<a id="schema_UpdateDetectorRequest"></a>
<a id="tocSupdatedetectorrequest"></a>
<a id="tocsupdatedetectorrequest"></a>

```json
{
  "messageId": {},
  "detectorModelName": {},
  "keyValue": {},
  "state": {
    "stateName": {},
    "variables": {},
    "timers": {}
  }
}
```

Information used to update the detector (instance).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messageId|object|true|none|none|
|detectorModelName|object|true|none|none|
|keyValue|object|false|none|none|
|state|object|true|none|none|

<h2 id="tocS_DescribeAlarmResponse">DescribeAlarmResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribealarmresponse"></a>
<a id="schema_DescribeAlarmResponse"></a>
<a id="tocSdescribealarmresponse"></a>
<a id="tocsdescribealarmresponse"></a>

```json
{
  "alarm": {
    "alarmModelName": {},
    "alarmModelVersion": {},
    "keyValue": {},
    "alarmState": {
      "stateName": {},
      "ruleEvaluation": {
        "simpleRuleEvaluation": {
          "inputPropertyValue": {},
          "operator": {},
          "thresholdValue": {}
        }
      },
      "customerAction": {
        "actionName": {},
        "snoozeActionConfiguration": {
          "snoozeDuration": {},
          "note": {}
        },
        "enableActionConfiguration": {
          "note": {}
        },
        "disableActionConfiguration": {
          "note": {}
        },
        "acknowledgeActionConfiguration": {
          "note": {}
        },
        "resetActionConfiguration": {
          "note": {}
        }
      },
      "systemEvent": {
        "eventType": {},
        "stateChangeConfiguration": {
          "triggerType": {}
        }
      }
    },
    "severity": {},
    "creationTime": {},
    "lastUpdateTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alarm|object|false|none|none|

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_DescribeDetectorResponse">DescribeDetectorResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribedetectorresponse"></a>
<a id="schema_DescribeDetectorResponse"></a>
<a id="tocSdescribedetectorresponse"></a>
<a id="tocsdescribedetectorresponse"></a>

```json
{
  "detector": {
    "detectorModelName": {},
    "keyValue": {},
    "detectorModelVersion": {},
    "state": {
      "stateName": {},
      "variables": {},
      "timers": {}
    },
    "creationTime": {},
    "lastUpdateTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detector|object|false|none|none|

<h2 id="tocS_ListAlarmsResponse">ListAlarmsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistalarmsresponse"></a>
<a id="schema_ListAlarmsResponse"></a>
<a id="tocSlistalarmsresponse"></a>
<a id="tocslistalarmsresponse"></a>

```json
{
  "alarmSummaries": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alarmSummaries|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListDetectorsResponse">ListDetectorsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdetectorsresponse"></a>
<a id="schema_ListDetectorsResponse"></a>
<a id="tocSlistdetectorsresponse"></a>
<a id="tocslistdetectorsresponse"></a>

```json
{
  "detectorSummaries": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectorSummaries|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_Note">Note</h2>
<!-- backwards compatibility -->
<a id="schemanote"></a>
<a id="schema_Note"></a>
<a id="tocSnote"></a>
<a id="tocsnote"></a>

```json
"string"
```

<h2 id="tocS_AcknowledgeActionConfiguration">AcknowledgeActionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaacknowledgeactionconfiguration"></a>
<a id="schema_AcknowledgeActionConfiguration"></a>
<a id="tocSacknowledgeactionconfiguration"></a>
<a id="tocsacknowledgeactionconfiguration"></a>

```json
{
  "note": {}
}
```

Contains the configuration information of an acknowledge action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|note|object|false|none|none|

<h2 id="tocS_RequestId">RequestId</h2>
<!-- backwards compatibility -->
<a id="schemarequestid"></a>
<a id="schema_RequestId"></a>
<a id="tocSrequestid"></a>
<a id="tocsrequestid"></a>

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

<h2 id="tocS_KeyValue">KeyValue</h2>
<!-- backwards compatibility -->
<a id="schemakeyvalue"></a>
<a id="schema_KeyValue"></a>
<a id="tocSkeyvalue"></a>
<a id="tocskeyvalue"></a>

```json
"string"
```

<h2 id="tocS_AcknowledgeAlarmActionRequests">AcknowledgeAlarmActionRequests</h2>
<!-- backwards compatibility -->
<a id="schemaacknowledgealarmactionrequests"></a>
<a id="schema_AcknowledgeAlarmActionRequests"></a>
<a id="tocSacknowledgealarmactionrequests"></a>
<a id="tocsacknowledgealarmactionrequests"></a>

```json
[
  {
    "requestId": {},
    "alarmModelName": {},
    "keyValue": {},
    "note": {}
  }
]
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

<h2 id="tocS_AlarmState">AlarmState</h2>
<!-- backwards compatibility -->
<a id="schemaalarmstate"></a>
<a id="schema_AlarmState"></a>
<a id="tocSalarmstate"></a>
<a id="tocsalarmstate"></a>

```json
{
  "stateName": {},
  "ruleEvaluation": {
    "simpleRuleEvaluation": {
      "inputPropertyValue": {},
      "operator": {},
      "thresholdValue": {}
    }
  },
  "customerAction": {
    "actionName": {},
    "snoozeActionConfiguration": {
      "snoozeDuration": {},
      "note": {}
    },
    "enableActionConfiguration": {
      "note": {}
    },
    "disableActionConfiguration": {
      "note": {}
    },
    "acknowledgeActionConfiguration": {
      "note": {}
    },
    "resetActionConfiguration": {
      "note": {}
    }
  },
  "systemEvent": {
    "eventType": {},
    "stateChangeConfiguration": {
      "triggerType": {}
    }
  }
}
```

Contains information about the current state of the alarm.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stateName|object|false|none|none|
|ruleEvaluation|object|false|none|none|
|customerAction|object|false|none|none|
|systemEvent|object|false|none|none|

<h2 id="tocS_Severity">Severity</h2>
<!-- backwards compatibility -->
<a id="schemaseverity"></a>
<a id="schema_Severity"></a>
<a id="tocSseverity"></a>
<a id="tocsseverity"></a>

```json
0
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

<h2 id="tocS_Alarm">Alarm</h2>
<!-- backwards compatibility -->
<a id="schemaalarm"></a>
<a id="schema_Alarm"></a>
<a id="tocSalarm"></a>
<a id="tocsalarm"></a>

```json
{
  "alarmModelName": {},
  "alarmModelVersion": {},
  "keyValue": {},
  "alarmState": {
    "stateName": {},
    "ruleEvaluation": {
      "simpleRuleEvaluation": {
        "inputPropertyValue": {},
        "operator": {},
        "thresholdValue": {}
      }
    },
    "customerAction": {
      "actionName": {},
      "snoozeActionConfiguration": {
        "snoozeDuration": {},
        "note": {}
      },
      "enableActionConfiguration": {
        "note": {}
      },
      "disableActionConfiguration": {
        "note": {}
      },
      "acknowledgeActionConfiguration": {
        "note": {}
      },
      "resetActionConfiguration": {
        "note": {}
      }
    },
    "systemEvent": {
      "eventType": {},
      "stateChangeConfiguration": {
        "triggerType": {}
      }
    }
  },
  "severity": {},
  "creationTime": {},
  "lastUpdateTime": {}
}
```

Contains information about an alarm.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alarmModelName|object|false|none|none|
|alarmModelVersion|object|false|none|none|
|keyValue|object|false|none|none|
|alarmState|object|false|none|none|
|severity|object|false|none|none|
|creationTime|object|false|none|none|
|lastUpdateTime|object|false|none|none|

<h2 id="tocS_AlarmStateName">AlarmStateName</h2>
<!-- backwards compatibility -->
<a id="schemaalarmstatename"></a>
<a id="schema_AlarmStateName"></a>
<a id="tocSalarmstatename"></a>
<a id="tocsalarmstatename"></a>

```json
"DISABLED"
```

<h2 id="tocS_RuleEvaluation">RuleEvaluation</h2>
<!-- backwards compatibility -->
<a id="schemaruleevaluation"></a>
<a id="schema_RuleEvaluation"></a>
<a id="tocSruleevaluation"></a>
<a id="tocsruleevaluation"></a>

```json
{
  "simpleRuleEvaluation": {
    "inputPropertyValue": {},
    "operator": {},
    "thresholdValue": {}
  }
}
```

Information needed to evaluate data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|simpleRuleEvaluation|object|false|none|none|

<h2 id="tocS_CustomerAction">CustomerAction</h2>
<!-- backwards compatibility -->
<a id="schemacustomeraction"></a>
<a id="schema_CustomerAction"></a>
<a id="tocScustomeraction"></a>
<a id="tocscustomeraction"></a>

```json
{
  "actionName": {},
  "snoozeActionConfiguration": {
    "snoozeDuration": {},
    "note": {}
  },
  "enableActionConfiguration": {
    "note": {}
  },
  "disableActionConfiguration": {
    "note": {}
  },
  "acknowledgeActionConfiguration": {
    "note": {}
  },
  "resetActionConfiguration": {
    "note": {}
  }
}
```

Contains information about the action that you can take to respond to the alarm.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionName|object|false|none|none|
|snoozeActionConfiguration|object|false|none|none|
|enableActionConfiguration|object|false|none|none|
|disableActionConfiguration|object|false|none|none|
|acknowledgeActionConfiguration|object|false|none|none|
|resetActionConfiguration|object|false|none|none|

<h2 id="tocS_SystemEvent">SystemEvent</h2>
<!-- backwards compatibility -->
<a id="schemasystemevent"></a>
<a id="schema_SystemEvent"></a>
<a id="tocSsystemevent"></a>
<a id="tocssystemevent"></a>

```json
{
  "eventType": {},
  "stateChangeConfiguration": {
    "triggerType": {}
  }
}
```

Contains information about alarm state changes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventType|object|false|none|none|
|stateChangeConfiguration|object|false|none|none|

<h2 id="tocS_AlarmSummary">AlarmSummary</h2>
<!-- backwards compatibility -->
<a id="schemaalarmsummary"></a>
<a id="schema_AlarmSummary"></a>
<a id="tocSalarmsummary"></a>
<a id="tocsalarmsummary"></a>

```json
{
  "alarmModelName": {},
  "alarmModelVersion": {},
  "keyValue": {},
  "stateName": {},
  "creationTime": {},
  "lastUpdateTime": {}
}
```

Contains a summary of an alarm.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alarmModelName|object|false|none|none|
|alarmModelVersion|object|false|none|none|
|keyValue|object|false|none|none|
|stateName|object|false|none|none|
|creationTime|object|false|none|none|
|lastUpdateTime|object|false|none|none|

<h2 id="tocS_AlarmSummaries">AlarmSummaries</h2>
<!-- backwards compatibility -->
<a id="schemaalarmsummaries"></a>
<a id="schema_AlarmSummaries"></a>
<a id="tocSalarmsummaries"></a>
<a id="tocsalarmsummaries"></a>

```json
[
  {
    "alarmModelName": {},
    "alarmModelVersion": {},
    "keyValue": {},
    "stateName": {},
    "creationTime": {},
    "lastUpdateTime": {}
  }
]
```

<h2 id="tocS_BatchAcknowledgeAlarmRequest">BatchAcknowledgeAlarmRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchacknowledgealarmrequest"></a>
<a id="schema_BatchAcknowledgeAlarmRequest"></a>
<a id="tocSbatchacknowledgealarmrequest"></a>
<a id="tocsbatchacknowledgealarmrequest"></a>

```json
{
  "acknowledgeActionRequests": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acknowledgeActionRequests|object|true|none|none|

<h2 id="tocS_BatchAlarmActionErrorEntries">BatchAlarmActionErrorEntries</h2>
<!-- backwards compatibility -->
<a id="schemabatchalarmactionerrorentries"></a>
<a id="schema_BatchAlarmActionErrorEntries"></a>
<a id="tocSbatchalarmactionerrorentries"></a>
<a id="tocsbatchalarmactionerrorentries"></a>

```json
[
  {
    "requestId": {},
    "errorCode": {},
    "errorMessage": {}
  }
]
```

<h2 id="tocS_BatchAlarmActionErrorEntry">BatchAlarmActionErrorEntry</h2>
<!-- backwards compatibility -->
<a id="schemabatchalarmactionerrorentry"></a>
<a id="schema_BatchAlarmActionErrorEntry"></a>
<a id="tocSbatchalarmactionerrorentry"></a>
<a id="tocsbatchalarmactionerrorentry"></a>

```json
{
  "requestId": {},
  "errorCode": {},
  "errorMessage": {}
}
```

<p>Contains error messages associated with one of the following requests:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchAcknowledgeAlarm.html">BatchAcknowledgeAlarm</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchDisableAlarm.html">BatchDisableAlarm</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchEnableAlarm.html">BatchEnableAlarm</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchResetAlarm.html">BatchResetAlarm</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchSnoozeAlarm.html">BatchSnoozeAlarm</a> </p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|errorCode|object|false|none|none|
|errorMessage|object|false|none|none|

<h2 id="tocS_ErrorCode">ErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemaerrorcode"></a>
<a id="schema_ErrorCode"></a>
<a id="tocSerrorcode"></a>
<a id="tocserrorcode"></a>

```json
"ResourceNotFoundException"
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

<h2 id="tocS_BatchDeleteDetectorErrorEntry">BatchDeleteDetectorErrorEntry</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeletedetectorerrorentry"></a>
<a id="schema_BatchDeleteDetectorErrorEntry"></a>
<a id="tocSbatchdeletedetectorerrorentry"></a>
<a id="tocsbatchdeletedetectorerrorentry"></a>

```json
{
  "messageId": {},
  "errorCode": {},
  "errorMessage": {}
}
```

Contains error messages associated with the deletion request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messageId|object|false|none|none|
|errorCode|object|false|none|none|
|errorMessage|object|false|none|none|

<h2 id="tocS_BatchDeleteDetectorErrorEntries">BatchDeleteDetectorErrorEntries</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeletedetectorerrorentries"></a>
<a id="schema_BatchDeleteDetectorErrorEntries"></a>
<a id="tocSbatchdeletedetectorerrorentries"></a>
<a id="tocsbatchdeletedetectorerrorentries"></a>

```json
[
  {
    "messageId": {},
    "errorCode": {},
    "errorMessage": {}
  }
]
```

<h2 id="tocS_MessageId">MessageId</h2>
<!-- backwards compatibility -->
<a id="schemamessageid"></a>
<a id="schema_MessageId"></a>
<a id="tocSmessageid"></a>
<a id="tocsmessageid"></a>

```json
"string"
```

<h2 id="tocS_DeleteDetectorRequests">DeleteDetectorRequests</h2>
<!-- backwards compatibility -->
<a id="schemadeletedetectorrequests"></a>
<a id="schema_DeleteDetectorRequests"></a>
<a id="tocSdeletedetectorrequests"></a>
<a id="tocsdeletedetectorrequests"></a>

```json
[
  {
    "messageId": {},
    "detectorModelName": {},
    "keyValue": {}
  }
]
```

<h2 id="tocS_BatchDeleteDetectorRequest">BatchDeleteDetectorRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeletedetectorrequest"></a>
<a id="schema_BatchDeleteDetectorRequest"></a>
<a id="tocSbatchdeletedetectorrequest"></a>
<a id="tocsbatchdeletedetectorrequest"></a>

```json
{
  "detectors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectors|object|true|none|none|

<h2 id="tocS_DisableAlarmActionRequests">DisableAlarmActionRequests</h2>
<!-- backwards compatibility -->
<a id="schemadisablealarmactionrequests"></a>
<a id="schema_DisableAlarmActionRequests"></a>
<a id="tocSdisablealarmactionrequests"></a>
<a id="tocsdisablealarmactionrequests"></a>

```json
[
  {
    "requestId": {},
    "alarmModelName": {},
    "keyValue": {},
    "note": {}
  }
]
```

<h2 id="tocS_BatchDisableAlarmRequest">BatchDisableAlarmRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchdisablealarmrequest"></a>
<a id="schema_BatchDisableAlarmRequest"></a>
<a id="tocSbatchdisablealarmrequest"></a>
<a id="tocsbatchdisablealarmrequest"></a>

```json
{
  "disableActionRequests": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disableActionRequests|object|true|none|none|

<h2 id="tocS_EnableAlarmActionRequests">EnableAlarmActionRequests</h2>
<!-- backwards compatibility -->
<a id="schemaenablealarmactionrequests"></a>
<a id="schema_EnableAlarmActionRequests"></a>
<a id="tocSenablealarmactionrequests"></a>
<a id="tocsenablealarmactionrequests"></a>

```json
[
  {
    "requestId": {},
    "alarmModelName": {},
    "keyValue": {},
    "note": {}
  }
]
```

<h2 id="tocS_BatchEnableAlarmRequest">BatchEnableAlarmRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchenablealarmrequest"></a>
<a id="schema_BatchEnableAlarmRequest"></a>
<a id="tocSbatchenablealarmrequest"></a>
<a id="tocsbatchenablealarmrequest"></a>

```json
{
  "enableActionRequests": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enableActionRequests|object|true|none|none|

<h2 id="tocS_BatchPutMessageErrorEntry">BatchPutMessageErrorEntry</h2>
<!-- backwards compatibility -->
<a id="schemabatchputmessageerrorentry"></a>
<a id="schema_BatchPutMessageErrorEntry"></a>
<a id="tocSbatchputmessageerrorentry"></a>
<a id="tocsbatchputmessageerrorentry"></a>

```json
{
  "messageId": {},
  "errorCode": {},
  "errorMessage": {}
}
```

Contains information about the errors encountered.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messageId|object|false|none|none|
|errorCode|object|false|none|none|
|errorMessage|object|false|none|none|

<h2 id="tocS_BatchPutMessageErrorEntries">BatchPutMessageErrorEntries</h2>
<!-- backwards compatibility -->
<a id="schemabatchputmessageerrorentries"></a>
<a id="schema_BatchPutMessageErrorEntries"></a>
<a id="tocSbatchputmessageerrorentries"></a>
<a id="tocsbatchputmessageerrorentries"></a>

```json
[
  {
    "messageId": {},
    "errorCode": {},
    "errorMessage": {}
  }
]
```

<h2 id="tocS_Messages">Messages</h2>
<!-- backwards compatibility -->
<a id="schemamessages"></a>
<a id="schema_Messages"></a>
<a id="tocSmessages"></a>
<a id="tocsmessages"></a>

```json
[
  {
    "messageId": {},
    "inputName": {},
    "payload": {},
    "timestamp": {
      "timeInMillis": {}
    }
  }
]
```

<h2 id="tocS_BatchPutMessageRequest">BatchPutMessageRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchputmessagerequest"></a>
<a id="schema_BatchPutMessageRequest"></a>
<a id="tocSbatchputmessagerequest"></a>
<a id="tocsbatchputmessagerequest"></a>

```json
{
  "messages": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messages|object|true|none|none|

<h2 id="tocS_ResetAlarmActionRequests">ResetAlarmActionRequests</h2>
<!-- backwards compatibility -->
<a id="schemaresetalarmactionrequests"></a>
<a id="schema_ResetAlarmActionRequests"></a>
<a id="tocSresetalarmactionrequests"></a>
<a id="tocsresetalarmactionrequests"></a>

```json
[
  {
    "requestId": {},
    "alarmModelName": {},
    "keyValue": {},
    "note": {}
  }
]
```

<h2 id="tocS_BatchResetAlarmRequest">BatchResetAlarmRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchresetalarmrequest"></a>
<a id="schema_BatchResetAlarmRequest"></a>
<a id="tocSbatchresetalarmrequest"></a>
<a id="tocsbatchresetalarmrequest"></a>

```json
{
  "resetActionRequests": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resetActionRequests|object|true|none|none|

<h2 id="tocS_SnoozeAlarmActionRequests">SnoozeAlarmActionRequests</h2>
<!-- backwards compatibility -->
<a id="schemasnoozealarmactionrequests"></a>
<a id="schema_SnoozeAlarmActionRequests"></a>
<a id="tocSsnoozealarmactionrequests"></a>
<a id="tocssnoozealarmactionrequests"></a>

```json
[
  {
    "requestId": {},
    "alarmModelName": {},
    "keyValue": {},
    "note": {},
    "snoozeDuration": {}
  }
]
```

<h2 id="tocS_BatchSnoozeAlarmRequest">BatchSnoozeAlarmRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchsnoozealarmrequest"></a>
<a id="schema_BatchSnoozeAlarmRequest"></a>
<a id="tocSbatchsnoozealarmrequest"></a>
<a id="tocsbatchsnoozealarmrequest"></a>

```json
{
  "snoozeActionRequests": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|snoozeActionRequests|object|true|none|none|

<h2 id="tocS_BatchUpdateDetectorErrorEntry">BatchUpdateDetectorErrorEntry</h2>
<!-- backwards compatibility -->
<a id="schemabatchupdatedetectorerrorentry"></a>
<a id="schema_BatchUpdateDetectorErrorEntry"></a>
<a id="tocSbatchupdatedetectorerrorentry"></a>
<a id="tocsbatchupdatedetectorerrorentry"></a>

```json
{
  "messageId": {},
  "errorCode": {},
  "errorMessage": {}
}
```

Information about the error that occurred when attempting to update a detector.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messageId|object|false|none|none|
|errorCode|object|false|none|none|
|errorMessage|object|false|none|none|

<h2 id="tocS_BatchUpdateDetectorErrorEntries">BatchUpdateDetectorErrorEntries</h2>
<!-- backwards compatibility -->
<a id="schemabatchupdatedetectorerrorentries"></a>
<a id="schema_BatchUpdateDetectorErrorEntries"></a>
<a id="tocSbatchupdatedetectorerrorentries"></a>
<a id="tocsbatchupdatedetectorerrorentries"></a>

```json
[
  {
    "messageId": {},
    "errorCode": {},
    "errorMessage": {}
  }
]
```

<h2 id="tocS_UpdateDetectorRequests">UpdateDetectorRequests</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedetectorrequests"></a>
<a id="schema_UpdateDetectorRequests"></a>
<a id="tocSupdatedetectorrequests"></a>
<a id="tocsupdatedetectorrequests"></a>

```json
[
  {
    "messageId": {},
    "detectorModelName": {},
    "keyValue": {},
    "state": {
      "stateName": {},
      "variables": {},
      "timers": {}
    }
  }
]
```

<h2 id="tocS_BatchUpdateDetectorRequest">BatchUpdateDetectorRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchupdatedetectorrequest"></a>
<a id="schema_BatchUpdateDetectorRequest"></a>
<a id="tocSbatchupdatedetectorrequest"></a>
<a id="tocsbatchupdatedetectorrequest"></a>

```json
{
  "detectors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectors|object|true|none|none|

<h2 id="tocS_ComparisonOperator">ComparisonOperator</h2>
<!-- backwards compatibility -->
<a id="schemacomparisonoperator"></a>
<a id="schema_ComparisonOperator"></a>
<a id="tocScomparisonoperator"></a>
<a id="tocscomparisonoperator"></a>

```json
"GREATER"
```

<h2 id="tocS_CustomerActionName">CustomerActionName</h2>
<!-- backwards compatibility -->
<a id="schemacustomeractionname"></a>
<a id="schema_CustomerActionName"></a>
<a id="tocScustomeractionname"></a>
<a id="tocscustomeractionname"></a>

```json
"SNOOZE"
```

<h2 id="tocS_SnoozeActionConfiguration">SnoozeActionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemasnoozeactionconfiguration"></a>
<a id="schema_SnoozeActionConfiguration"></a>
<a id="tocSsnoozeactionconfiguration"></a>
<a id="tocssnoozeactionconfiguration"></a>

```json
{
  "snoozeDuration": {},
  "note": {}
}
```

Contains the configuration information of a snooze action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|snoozeDuration|object|false|none|none|
|note|object|false|none|none|

<h2 id="tocS_EnableActionConfiguration">EnableActionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaenableactionconfiguration"></a>
<a id="schema_EnableActionConfiguration"></a>
<a id="tocSenableactionconfiguration"></a>
<a id="tocsenableactionconfiguration"></a>

```json
{
  "note": {}
}
```

Contains the configuration information of an enable action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|note|object|false|none|none|

<h2 id="tocS_DisableActionConfiguration">DisableActionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemadisableactionconfiguration"></a>
<a id="schema_DisableActionConfiguration"></a>
<a id="tocSdisableactionconfiguration"></a>
<a id="tocsdisableactionconfiguration"></a>

```json
{
  "note": {}
}
```

Contains the configuration information of a disable action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|note|object|false|none|none|

<h2 id="tocS_ResetActionConfiguration">ResetActionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaresetactionconfiguration"></a>
<a id="schema_ResetActionConfiguration"></a>
<a id="tocSresetactionconfiguration"></a>
<a id="tocsresetactionconfiguration"></a>

```json
{
  "note": {}
}
```

Contains the configuration information of a reset action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|note|object|false|none|none|

<h2 id="tocS_DetectorModelName">DetectorModelName</h2>
<!-- backwards compatibility -->
<a id="schemadetectormodelname"></a>
<a id="schema_DetectorModelName"></a>
<a id="tocSdetectormodelname"></a>
<a id="tocsdetectormodelname"></a>

```json
"string"
```

<h2 id="tocS_DescribeAlarmRequest">DescribeAlarmRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribealarmrequest"></a>
<a id="schema_DescribeAlarmRequest"></a>
<a id="tocSdescribealarmrequest"></a>
<a id="tocsdescribealarmrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeDetectorRequest">DescribeDetectorRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedetectorrequest"></a>
<a id="schema_DescribeDetectorRequest"></a>
<a id="tocSdescribedetectorrequest"></a>
<a id="tocsdescribedetectorrequest"></a>

```json
{}
```

<h2 id="tocS_Detector">Detector</h2>
<!-- backwards compatibility -->
<a id="schemadetector"></a>
<a id="schema_Detector"></a>
<a id="tocSdetector"></a>
<a id="tocsdetector"></a>

```json
{
  "detectorModelName": {},
  "keyValue": {},
  "detectorModelVersion": {},
  "state": {
    "stateName": {},
    "variables": {},
    "timers": {}
  },
  "creationTime": {},
  "lastUpdateTime": {}
}
```

Information about the detector (instance).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectorModelName|object|false|none|none|
|keyValue|object|false|none|none|
|detectorModelVersion|object|false|none|none|
|state|object|false|none|none|
|creationTime|object|false|none|none|
|lastUpdateTime|object|false|none|none|

<h2 id="tocS_DetectorModelVersion">DetectorModelVersion</h2>
<!-- backwards compatibility -->
<a id="schemadetectormodelversion"></a>
<a id="schema_DetectorModelVersion"></a>
<a id="tocSdetectormodelversion"></a>
<a id="tocsdetectormodelversion"></a>

```json
"string"
```

<h2 id="tocS_DetectorState">DetectorState</h2>
<!-- backwards compatibility -->
<a id="schemadetectorstate"></a>
<a id="schema_DetectorState"></a>
<a id="tocSdetectorstate"></a>
<a id="tocsdetectorstate"></a>

```json
{
  "stateName": {},
  "variables": {},
  "timers": {}
}
```

Information about the current state of the detector instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stateName|object|true|none|none|
|variables|object|true|none|none|
|timers|object|true|none|none|

<h2 id="tocS_StateName">StateName</h2>
<!-- backwards compatibility -->
<a id="schemastatename"></a>
<a id="schema_StateName"></a>
<a id="tocSstatename"></a>
<a id="tocsstatename"></a>

```json
"string"
```

<h2 id="tocS_Variables">Variables</h2>
<!-- backwards compatibility -->
<a id="schemavariables"></a>
<a id="schema_Variables"></a>
<a id="tocSvariables"></a>
<a id="tocsvariables"></a>

```json
[
  {
    "name": {},
    "value": {}
  }
]
```

<h2 id="tocS_Timers">Timers</h2>
<!-- backwards compatibility -->
<a id="schematimers"></a>
<a id="schema_Timers"></a>
<a id="tocStimers"></a>
<a id="tocstimers"></a>

```json
[
  {
    "name": {},
    "timestamp": {}
  }
]
```

<h2 id="tocS_VariableDefinitions">VariableDefinitions</h2>
<!-- backwards compatibility -->
<a id="schemavariabledefinitions"></a>
<a id="schema_VariableDefinitions"></a>
<a id="tocSvariabledefinitions"></a>
<a id="tocsvariabledefinitions"></a>

```json
[
  {
    "name": {},
    "value": {}
  }
]
```

<h2 id="tocS_TimerDefinitions">TimerDefinitions</h2>
<!-- backwards compatibility -->
<a id="schematimerdefinitions"></a>
<a id="schema_TimerDefinitions"></a>
<a id="tocStimerdefinitions"></a>
<a id="tocstimerdefinitions"></a>

```json
[
  {
    "name": {},
    "seconds": {}
  }
]
```

<h2 id="tocS_DetectorStateDefinition">DetectorStateDefinition</h2>
<!-- backwards compatibility -->
<a id="schemadetectorstatedefinition"></a>
<a id="schema_DetectorStateDefinition"></a>
<a id="tocSdetectorstatedefinition"></a>
<a id="tocsdetectorstatedefinition"></a>

```json
{
  "stateName": {},
  "variables": {},
  "timers": {}
}
```

The new state, variable values, and timer settings of the detector (instance).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stateName|object|true|none|none|
|variables|object|true|none|none|
|timers|object|true|none|none|

<h2 id="tocS_DetectorStateSummary">DetectorStateSummary</h2>
<!-- backwards compatibility -->
<a id="schemadetectorstatesummary"></a>
<a id="schema_DetectorStateSummary"></a>
<a id="tocSdetectorstatesummary"></a>
<a id="tocsdetectorstatesummary"></a>

```json
{
  "stateName": {}
}
```

Information about the detector state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stateName|object|false|none|none|

<h2 id="tocS_DetectorSummary">DetectorSummary</h2>
<!-- backwards compatibility -->
<a id="schemadetectorsummary"></a>
<a id="schema_DetectorSummary"></a>
<a id="tocSdetectorsummary"></a>
<a id="tocsdetectorsummary"></a>

```json
{
  "detectorModelName": {},
  "keyValue": {},
  "detectorModelVersion": {},
  "state": {
    "stateName": {}
  },
  "creationTime": {},
  "lastUpdateTime": {}
}
```

Information about the detector (instance).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectorModelName|object|false|none|none|
|keyValue|object|false|none|none|
|detectorModelVersion|object|false|none|none|
|state|object|false|none|none|
|creationTime|object|false|none|none|
|lastUpdateTime|object|false|none|none|

<h2 id="tocS_DetectorSummaries">DetectorSummaries</h2>
<!-- backwards compatibility -->
<a id="schemadetectorsummaries"></a>
<a id="schema_DetectorSummaries"></a>
<a id="tocSdetectorsummaries"></a>
<a id="tocsdetectorsummaries"></a>

```json
[
  {
    "detectorModelName": {},
    "keyValue": {},
    "detectorModelVersion": {},
    "state": {
      "stateName": {}
    },
    "creationTime": {},
    "lastUpdateTime": {}
  }
]
```

<h2 id="tocS_EphemeralInputName">EphemeralInputName</h2>
<!-- backwards compatibility -->
<a id="schemaephemeralinputname"></a>
<a id="schema_EphemeralInputName"></a>
<a id="tocSephemeralinputname"></a>
<a id="tocsephemeralinputname"></a>

```json
"string"
```

<h2 id="tocS_EpochMilliTimestamp">EpochMilliTimestamp</h2>
<!-- backwards compatibility -->
<a id="schemaepochmillitimestamp"></a>
<a id="schema_EpochMilliTimestamp"></a>
<a id="tocSepochmillitimestamp"></a>
<a id="tocsepochmillitimestamp"></a>

```json
1
```

<h2 id="tocS_EventType">EventType</h2>
<!-- backwards compatibility -->
<a id="schemaeventtype"></a>
<a id="schema_EventType"></a>
<a id="tocSeventtype"></a>
<a id="tocseventtype"></a>

```json
"STATE_CHANGE"
```

<h2 id="tocS_InputPropertyValue">InputPropertyValue</h2>
<!-- backwards compatibility -->
<a id="schemainputpropertyvalue"></a>
<a id="schema_InputPropertyValue"></a>
<a id="tocSinputpropertyvalue"></a>
<a id="tocsinputpropertyvalue"></a>

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

<h2 id="tocS_MaxResults">MaxResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxresults"></a>
<a id="schema_MaxResults"></a>
<a id="tocSmaxresults"></a>
<a id="tocsmaxresults"></a>

```json
1
```

<h2 id="tocS_ListAlarmsRequest">ListAlarmsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistalarmsrequest"></a>
<a id="schema_ListAlarmsRequest"></a>
<a id="tocSlistalarmsrequest"></a>
<a id="tocslistalarmsrequest"></a>

```json
{}
```

<h2 id="tocS_ListDetectorsRequest">ListDetectorsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdetectorsrequest"></a>
<a id="schema_ListDetectorsRequest"></a>
<a id="tocSlistdetectorsrequest"></a>
<a id="tocslistdetectorsrequest"></a>

```json
{}
```

<h2 id="tocS_Payload">Payload</h2>
<!-- backwards compatibility -->
<a id="schemapayload"></a>
<a id="schema_Payload"></a>
<a id="tocSpayload"></a>
<a id="tocspayload"></a>

```json
"string"
```

<h2 id="tocS_TimestampValue">TimestampValue</h2>
<!-- backwards compatibility -->
<a id="schematimestampvalue"></a>
<a id="schema_TimestampValue"></a>
<a id="tocStimestampvalue"></a>
<a id="tocstimestampvalue"></a>

```json
{
  "timeInMillis": {}
}
```

Contains information about a timestamp.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timeInMillis|object|false|none|none|

<h2 id="tocS_SimpleRuleEvaluation">SimpleRuleEvaluation</h2>
<!-- backwards compatibility -->
<a id="schemasimpleruleevaluation"></a>
<a id="schema_SimpleRuleEvaluation"></a>
<a id="tocSsimpleruleevaluation"></a>
<a id="tocssimpleruleevaluation"></a>

```json
{
  "inputPropertyValue": {},
  "operator": {},
  "thresholdValue": {}
}
```

Information needed to compare two values with a comparison operator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputPropertyValue|object|false|none|none|
|operator|object|false|none|none|
|thresholdValue|object|false|none|none|

<h2 id="tocS_Seconds">Seconds</h2>
<!-- backwards compatibility -->
<a id="schemaseconds"></a>
<a id="schema_Seconds"></a>
<a id="tocSseconds"></a>
<a id="tocsseconds"></a>

```json
0
```

<h2 id="tocS_ThresholdValue">ThresholdValue</h2>
<!-- backwards compatibility -->
<a id="schemathresholdvalue"></a>
<a id="schema_ThresholdValue"></a>
<a id="tocSthresholdvalue"></a>
<a id="tocsthresholdvalue"></a>

```json
"string"
```

<h2 id="tocS_SnoozeDuration">SnoozeDuration</h2>
<!-- backwards compatibility -->
<a id="schemasnoozeduration"></a>
<a id="schema_SnoozeDuration"></a>
<a id="tocSsnoozeduration"></a>
<a id="tocssnoozeduration"></a>

```json
0
```

<h2 id="tocS_TriggerType">TriggerType</h2>
<!-- backwards compatibility -->
<a id="schematriggertype"></a>
<a id="schema_TriggerType"></a>
<a id="tocStriggertype"></a>
<a id="tocstriggertype"></a>

```json
"SNOOZE_TIMEOUT"
```

<h2 id="tocS_StateChangeConfiguration">StateChangeConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemastatechangeconfiguration"></a>
<a id="schema_StateChangeConfiguration"></a>
<a id="tocSstatechangeconfiguration"></a>
<a id="tocsstatechangeconfiguration"></a>

```json
{
  "triggerType": {}
}
```

Contains the configuration information of alarm state changes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|triggerType|object|false|none|none|

<h2 id="tocS_TimerName">TimerName</h2>
<!-- backwards compatibility -->
<a id="schematimername"></a>
<a id="schema_TimerName"></a>
<a id="tocStimername"></a>
<a id="tocstimername"></a>

```json
"string"
```

<h2 id="tocS_Timer">Timer</h2>
<!-- backwards compatibility -->
<a id="schematimer"></a>
<a id="schema_Timer"></a>
<a id="tocStimer"></a>
<a id="tocstimer"></a>

```json
{
  "name": {},
  "timestamp": {}
}
```

The current state of a timer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|timestamp|object|true|none|none|

<h2 id="tocS_TimerDefinition">TimerDefinition</h2>
<!-- backwards compatibility -->
<a id="schematimerdefinition"></a>
<a id="schema_TimerDefinition"></a>
<a id="tocStimerdefinition"></a>
<a id="tocstimerdefinition"></a>

```json
{
  "name": {},
  "seconds": {}
}
```

The new setting of a timer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|seconds|object|true|none|none|

<h2 id="tocS_VariableName">VariableName</h2>
<!-- backwards compatibility -->
<a id="schemavariablename"></a>
<a id="schema_VariableName"></a>
<a id="tocSvariablename"></a>
<a id="tocsvariablename"></a>

```json
"string"
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

<h2 id="tocS_Variable">Variable</h2>
<!-- backwards compatibility -->
<a id="schemavariable"></a>
<a id="schema_Variable"></a>
<a id="tocSvariable"></a>
<a id="tocsvariable"></a>

```json
{
  "name": {},
  "value": {}
}
```

The current state of the variable.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|value|object|true|none|none|

<h2 id="tocS_VariableDefinition">VariableDefinition</h2>
<!-- backwards compatibility -->
<a id="schemavariabledefinition"></a>
<a id="schema_VariableDefinition"></a>
<a id="tocSvariabledefinition"></a>
<a id="tocsvariabledefinition"></a>

```json
{
  "name": {},
  "value": {}
}
```

The new value of the variable.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|value|object|true|none|none|
