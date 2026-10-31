<h1 id="amazon-pinpoint-sms-and-voice-service">Amazon Pinpoint SMS and Voice Service v2018-09-05</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Pinpoint SMS and Voice Messaging public facing APIs

Base URLs:

* <a href="http://sms-voice.pinpoint.us-east-1.amazonaws.com">http://sms-voice.pinpoint.us-east-1.amazonaws.com</a> - The Pinpoint SMS Voice multi-region endpoint

* <a href="https://sms-voice.pinpoint.us-east-1.amazonaws.com">https://sms-voice.pinpoint.us-east-1.amazonaws.com</a> - The Pinpoint SMS Voice multi-region endpoint

* <a href="http://sms-voice.pinpoint.cn-north-1.amazonaws.com.cn">http://sms-voice.pinpoint.cn-north-1.amazonaws.com.cn</a> - The Pinpoint SMS Voice endpoint for China (Beijing) and China (Ningxia)

* <a href="https://sms-voice.pinpoint.cn-north-1.amazonaws.com.cn">https://sms-voice.pinpoint.cn-north-1.amazonaws.com.cn</a> - The Pinpoint SMS Voice endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/pinpoint/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-pinpoint-sms-and-voice-service-default">Default</h1>

## ListConfigurationSets

<a id="opIdListConfigurationSets"></a>

> Code samples

```bash
curl https://sms-voice.us-east-1.amazonaws.com/v1/sms-voice/configuration-sets \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/sms-voice/configuration-sets`

List all of the configuration sets associated with your Amazon Pinpoint account in the current region.

<h3 id="listconfigurationsets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|A token returned from a previous call to the API that indicates the position in the list of results.|
|PageSize|query|string|false|Used to specify the number of items that should be returned in the response.|
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
  "ConfigurationSets": {},
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

> 482 Response

```json
null
```

<h3 id="listconfigurationsets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListConfigurationSetsResponse](#schemalistconfigurationsetsresponse)|
|480|480|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateConfigurationSet

<a id="opIdCreateConfigurationSet"></a>

> Code samples

```bash
curl https://sms-voice.us-east-1.amazonaws.com/v1/sms-voice/configuration-sets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ConfigurationSetName": "string"
  }'
```

`POST /v1/sms-voice/configuration-sets`

Create a new configuration set. After you create the configuration set, you can add one or more event destinations to it.

> Body parameter

```json
{
  "ConfigurationSetName": "string"
}
```

<h3 id="createconfigurationset-parameters">Parameters</h3>

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
|» ConfigurationSetName|body|string|false|The name that you want to give the configuration set.|

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

<h3 id="createconfigurationset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateConfigurationSetResponse](#schemacreateconfigurationsetresponse)|
|480|480|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|484|484|AlreadyExistsException|[AlreadyExistsException](#schemaalreadyexistsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetConfigurationSetEventDestinations

<a id="opIdGetConfigurationSetEventDestinations"></a>

> Code samples

```bash
curl https://sms-voice.us-east-1.amazonaws.com/v1/sms-voice/configuration-sets/string/event-destinations \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations`

Obtain information about an event destination, including the types of events it reports, the Amazon Resource Name (ARN) of the destination, and the name of the event destination.

<h3 id="getconfigurationseteventdestinations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConfigurationSetName|path|string|true|ConfigurationSetName|
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
  "EventDestinations": [
    {
      "CloudWatchLogsDestination": {
        "IamRoleArn": {},
        "LogGroupArn": {}
      },
      "Enabled": {},
      "KinesisFirehoseDestination": {
        "DeliveryStreamArn": {},
        "IamRoleArn": {}
      },
      "MatchingEventTypes": [
        "INITIATED_CALL"
      ],
      "Name": {},
      "SnsDestination": {
        "TopicArn": {}
      }
    }
  ]
}
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

<h3 id="getconfigurationseteventdestinations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetConfigurationSetEventDestinationsResponse](#schemagetconfigurationseteventdestinationsresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateConfigurationSetEventDestination

<a id="opIdCreateConfigurationSetEventDestination"></a>

> Code samples

```bash
curl https://sms-voice.us-east-1.amazonaws.com/v1/sms-voice/configuration-sets/string/event-destinations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "EventDestination": {
      "CloudWatchLogsDestination": {
        "IamRoleArn": {},
        "LogGroupArn": {}
      },
      "Enabled": {},
      "KinesisFirehoseDestination": {
        "DeliveryStreamArn": {},
        "IamRoleArn": {}
      },
      "MatchingEventTypes": [
        "INITIATED_CALL"
      ],
      "SnsDestination": {
        "TopicArn": {}
      }
    },
    "EventDestinationName": "string"
  }'
```

`POST /v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations`

Create a new event destination in a configuration set.

> Body parameter

```json
{
  "EventDestination": {
    "CloudWatchLogsDestination": {
      "IamRoleArn": {},
      "LogGroupArn": {}
    },
    "Enabled": {},
    "KinesisFirehoseDestination": {
      "DeliveryStreamArn": {},
      "IamRoleArn": {}
    },
    "MatchingEventTypes": [
      "INITIATED_CALL"
    ],
    "SnsDestination": {
      "TopicArn": {}
    }
  },
  "EventDestinationName": "string"
}
```

<h3 id="createconfigurationseteventdestination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConfigurationSetName|path|string|true|ConfigurationSetName|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» EventDestination|body|object|false|An object that defines a single event destination.|
|» » CloudWatchLogsDestination|body|[CloudWatchLogsDestination](#schemacloudwatchlogsdestination)|false|An object that contains information about an event destination that sends data to Amazon CloudWatch Logs.|
|» » Enabled|body|object|false|none|
|» » KinesisFirehoseDestination|body|[KinesisFirehoseDestination](#schemakinesisfirehosedestination)|false|An object that contains information about an event destination that sends data to Amazon Kinesis Data Firehose.|
|» » MatchingEventTypes|body|[EventTypes](#schemaeventtypes)|false|An array of EventDestination objects. Each EventDestination object includes ARNs and other information that define an event destination.|
|» » SnsDestination|body|[SnsDestination](#schemasnsdestination)|false|An object that contains information about an event destination that sends data to Amazon SNS.|
|» EventDestinationName|body|string|false|A name that identifies the event destination.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » MatchingEventTypes|INITIATED_CALL|
|» » MatchingEventTypes|RINGING|
|» » MatchingEventTypes|ANSWERED|
|» » MatchingEventTypes|COMPLETED_CALL|
|» » MatchingEventTypes|BUSY|
|» » MatchingEventTypes|FAILED|
|» » MatchingEventTypes|NO_ANSWER|

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

<h3 id="createconfigurationseteventdestination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateConfigurationSetEventDestinationResponse](#schemacreateconfigurationseteventdestinationresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|AlreadyExistsException|[AlreadyExistsException](#schemaalreadyexistsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteConfigurationSet

<a id="opIdDeleteConfigurationSet"></a>

> Code samples

```bash
curl https://sms-voice.us-east-1.amazonaws.com/v1/sms-voice/configuration-sets/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/sms-voice/configuration-sets/{ConfigurationSetName}`

Deletes an existing configuration set.

<h3 id="deleteconfigurationset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConfigurationSetName|path|string|true|ConfigurationSetName|
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

<h3 id="deleteconfigurationset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteConfigurationSetResponse](#schemadeleteconfigurationsetresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateConfigurationSetEventDestination

<a id="opIdUpdateConfigurationSetEventDestination"></a>

> Code samples

```bash
curl https://sms-voice.us-east-1.amazonaws.com/v1/sms-voice/configuration-sets/string/event-destinations/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "EventDestination": {
      "CloudWatchLogsDestination": {
        "IamRoleArn": {},
        "LogGroupArn": {}
      },
      "Enabled": {},
      "KinesisFirehoseDestination": {
        "DeliveryStreamArn": {},
        "IamRoleArn": {}
      },
      "MatchingEventTypes": [
        "INITIATED_CALL"
      ],
      "SnsDestination": {
        "TopicArn": {}
      }
    }
  }'
```

`PUT /v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}`

Update an event destination in a configuration set. An event destination is a location that you publish information about your voice calls to. For example, you can log an event to an Amazon CloudWatch destination when a call fails.

> Body parameter

```json
{
  "EventDestination": {
    "CloudWatchLogsDestination": {
      "IamRoleArn": {},
      "LogGroupArn": {}
    },
    "Enabled": {},
    "KinesisFirehoseDestination": {
      "DeliveryStreamArn": {},
      "IamRoleArn": {}
    },
    "MatchingEventTypes": [
      "INITIATED_CALL"
    ],
    "SnsDestination": {
      "TopicArn": {}
    }
  }
}
```

<h3 id="updateconfigurationseteventdestination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConfigurationSetName|path|string|true|ConfigurationSetName|
|EventDestinationName|path|string|true|EventDestinationName|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» EventDestination|body|object|false|An object that defines a single event destination.|
|» » CloudWatchLogsDestination|body|[CloudWatchLogsDestination](#schemacloudwatchlogsdestination)|false|An object that contains information about an event destination that sends data to Amazon CloudWatch Logs.|
|» » Enabled|body|object|false|none|
|» » KinesisFirehoseDestination|body|[KinesisFirehoseDestination](#schemakinesisfirehosedestination)|false|An object that contains information about an event destination that sends data to Amazon Kinesis Data Firehose.|
|» » MatchingEventTypes|body|[EventTypes](#schemaeventtypes)|false|An array of EventDestination objects. Each EventDestination object includes ARNs and other information that define an event destination.|
|» » SnsDestination|body|[SnsDestination](#schemasnsdestination)|false|An object that contains information about an event destination that sends data to Amazon SNS.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » MatchingEventTypes|INITIATED_CALL|
|» » MatchingEventTypes|RINGING|
|» » MatchingEventTypes|ANSWERED|
|» » MatchingEventTypes|COMPLETED_CALL|
|» » MatchingEventTypes|BUSY|
|» » MatchingEventTypes|FAILED|
|» » MatchingEventTypes|NO_ANSWER|

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

<h3 id="updateconfigurationseteventdestination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateConfigurationSetEventDestinationResponse](#schemaupdateconfigurationseteventdestinationresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteConfigurationSetEventDestination

<a id="opIdDeleteConfigurationSetEventDestination"></a>

> Code samples

```bash
curl https://sms-voice.us-east-1.amazonaws.com/v1/sms-voice/configuration-sets/string/event-destinations/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}`

Deletes an event destination in a configuration set.

<h3 id="deleteconfigurationseteventdestination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConfigurationSetName|path|string|true|ConfigurationSetName|
|EventDestinationName|path|string|true|EventDestinationName|
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

<h3 id="deleteconfigurationseteventdestination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteConfigurationSetEventDestinationResponse](#schemadeleteconfigurationseteventdestinationresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SendVoiceMessage

<a id="opIdSendVoiceMessage"></a>

> Code samples

```bash
curl https://sms-voice.us-east-1.amazonaws.com/v1/sms-voice/voice/message \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "CallerId": "string",
    "ConfigurationSetName": "string",
    "Content": {
      "CallInstructionsMessage": {
        "Text": {}
      },
      "PlainTextMessage": {
        "LanguageCode": {},
        "Text": {},
        "VoiceId": {}
      },
      "SSMLMessage": {
        "LanguageCode": {},
        "Text": {},
        "VoiceId": {}
      }
    },
    "DestinationPhoneNumber": "string",
    "OriginationPhoneNumber": "string"
  }'
```

`POST /v1/sms-voice/voice/message`

Create a new voice message and send it to a recipient's phone number.

> Body parameter

```json
{
  "CallerId": "string",
  "ConfigurationSetName": "string",
  "Content": {
    "CallInstructionsMessage": {
      "Text": {}
    },
    "PlainTextMessage": {
      "LanguageCode": {},
      "Text": {},
      "VoiceId": {}
    },
    "SSMLMessage": {
      "LanguageCode": {},
      "Text": {},
      "VoiceId": {}
    }
  },
  "DestinationPhoneNumber": "string",
  "OriginationPhoneNumber": "string"
}
```

<h3 id="sendvoicemessage-parameters">Parameters</h3>

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
|» CallerId|body|string|false|The phone number that appears on recipients' devices when they receive the message.|
|» ConfigurationSetName|body|string|false|The name of the configuration set that you want to use to send the message.|
|» Content|body|object|false|An object that contains a voice message and information about the recipient that you want to send it to.|
|» » CallInstructionsMessage|body|[CallInstructionsMessageType](#schemacallinstructionsmessagetype)|false|An object that defines a message that contains text formatted using Amazon Pinpoint Voice Instructions markup.|
|» » PlainTextMessage|body|[PlainTextMessageType](#schemaplaintextmessagetype)|false|An object that defines a message that contains unformatted text.|
|» » SSMLMessage|body|[SSMLMessageType](#schemassmlmessagetype)|false|An object that defines a message that contains SSML-formatted text.|
|» DestinationPhoneNumber|body|string|false|The phone number that you want to send the voice message to.|
|» OriginationPhoneNumber|body|string|false|The phone number that Amazon Pinpoint should use to send the voice message. This isn't necessarily the phone number that appears on recipients' devices when they receive the message, because you can specify a CallerId parameter in the request.|

> Example responses

> 200 Response

```json
{
  "MessageId": {}
}
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

<h3 id="sendvoicemessage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SendVoiceMessageResponse](#schemasendvoicemessageresponse)|
|480|480|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateConfigurationSetResponse">CreateConfigurationSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateconfigurationsetresponse"></a>
<a id="schema_CreateConfigurationSetResponse"></a>
<a id="tocScreateconfigurationsetresponse"></a>
<a id="tocscreateconfigurationsetresponse"></a>

```json
{}
```

An empty object that indicates that the configuration set was successfully created.

<h2 id="tocS_TooManyRequestsException">TooManyRequestsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanyrequestsexception"></a>
<a id="schema_TooManyRequestsException"></a>
<a id="tocStoomanyrequestsexception"></a>
<a id="tocstoomanyrequestsexception"></a>

```json
null
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

<h2 id="tocS_LimitExceededException">LimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemalimitexceededexception"></a>
<a id="schema_LimitExceededException"></a>
<a id="tocSlimitexceededexception"></a>
<a id="tocslimitexceededexception"></a>

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

<h2 id="tocS_AlreadyExistsException">AlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaalreadyexistsexception"></a>
<a id="schema_AlreadyExistsException"></a>
<a id="tocSalreadyexistsexception"></a>
<a id="tocsalreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_CreateConfigurationSetEventDestinationResponse">CreateConfigurationSetEventDestinationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateconfigurationseteventdestinationresponse"></a>
<a id="schema_CreateConfigurationSetEventDestinationResponse"></a>
<a id="tocScreateconfigurationseteventdestinationresponse"></a>
<a id="tocscreateconfigurationseteventdestinationresponse"></a>

```json
{}
```

An empty object that indicates that the event destination was created successfully.

<h2 id="tocS_CloudWatchLogsDestination">CloudWatchLogsDestination</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchlogsdestination"></a>
<a id="schema_CloudWatchLogsDestination"></a>
<a id="tocScloudwatchlogsdestination"></a>
<a id="tocscloudwatchlogsdestination"></a>

```json
{
  "IamRoleArn": {},
  "LogGroupArn": {}
}
```

An object that contains information about an event destination that sends data to Amazon CloudWatch Logs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IamRoleArn|object|false|none|none|
|LogGroupArn|object|false|none|none|

<h2 id="tocS_Boolean">Boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_Boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
```

<h2 id="tocS_KinesisFirehoseDestination">KinesisFirehoseDestination</h2>
<!-- backwards compatibility -->
<a id="schemakinesisfirehosedestination"></a>
<a id="schema_KinesisFirehoseDestination"></a>
<a id="tocSkinesisfirehosedestination"></a>
<a id="tocskinesisfirehosedestination"></a>

```json
{
  "DeliveryStreamArn": {},
  "IamRoleArn": {}
}
```

An object that contains information about an event destination that sends data to Amazon Kinesis Data Firehose.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeliveryStreamArn|object|false|none|none|
|IamRoleArn|object|false|none|none|

<h2 id="tocS_EventTypes">EventTypes</h2>
<!-- backwards compatibility -->
<a id="schemaeventtypes"></a>
<a id="schema_EventTypes"></a>
<a id="tocSeventtypes"></a>
<a id="tocseventtypes"></a>

```json
[
  "INITIATED_CALL"
]
```

An array of EventDestination objects. Each EventDestination object includes ARNs and other information that define an event destination.

<h2 id="tocS_SnsDestination">SnsDestination</h2>
<!-- backwards compatibility -->
<a id="schemasnsdestination"></a>
<a id="schema_SnsDestination"></a>
<a id="tocSsnsdestination"></a>
<a id="tocssnsdestination"></a>

```json
{
  "TopicArn": {}
}
```

An object that contains information about an event destination that sends data to Amazon SNS.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TopicArn|object|false|none|none|

<h2 id="tocS_NotFoundException">NotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemanotfoundexception"></a>
<a id="schema_NotFoundException"></a>
<a id="tocSnotfoundexception"></a>
<a id="tocsnotfoundexception"></a>

```json
null
```

<h2 id="tocS_DeleteConfigurationSetResponse">DeleteConfigurationSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconfigurationsetresponse"></a>
<a id="schema_DeleteConfigurationSetResponse"></a>
<a id="tocSdeleteconfigurationsetresponse"></a>
<a id="tocsdeleteconfigurationsetresponse"></a>

```json
{}
```

An empty object that indicates that the configuration set was deleted successfully.

<h2 id="tocS_DeleteConfigurationSetEventDestinationResponse">DeleteConfigurationSetEventDestinationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconfigurationseteventdestinationresponse"></a>
<a id="schema_DeleteConfigurationSetEventDestinationResponse"></a>
<a id="tocSdeleteconfigurationseteventdestinationresponse"></a>
<a id="tocsdeleteconfigurationseteventdestinationresponse"></a>

```json
{}
```

An empty object that indicates that the event destination was deleted successfully.

<h2 id="tocS_GetConfigurationSetEventDestinationsResponse">GetConfigurationSetEventDestinationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetconfigurationseteventdestinationsresponse"></a>
<a id="schema_GetConfigurationSetEventDestinationsResponse"></a>
<a id="tocSgetconfigurationseteventdestinationsresponse"></a>
<a id="tocsgetconfigurationseteventdestinationsresponse"></a>

```json
{
  "EventDestinations": [
    {
      "CloudWatchLogsDestination": {
        "IamRoleArn": {},
        "LogGroupArn": {}
      },
      "Enabled": {},
      "KinesisFirehoseDestination": {
        "DeliveryStreamArn": {},
        "IamRoleArn": {}
      },
      "MatchingEventTypes": [
        "INITIATED_CALL"
      ],
      "Name": {},
      "SnsDestination": {
        "TopicArn": {}
      }
    }
  ]
}
```

An object that contains information about an event destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventDestinations|[EventDestinations](#schemaeventdestinations)|false|none|An array of EventDestination objects. Each EventDestination object includes ARNs and other information that define an event destination.|

<h2 id="tocS_ListConfigurationSetsResponse">ListConfigurationSetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistconfigurationsetsresponse"></a>
<a id="schema_ListConfigurationSetsResponse"></a>
<a id="tocSlistconfigurationsetsresponse"></a>
<a id="tocslistconfigurationsetsresponse"></a>

```json
{
  "ConfigurationSets": {},
  "NextToken": {}
}
```

An object that contains information about the configuration sets for your account in the current region.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationSets|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_SendVoiceMessageResponse">SendVoiceMessageResponse</h2>
<!-- backwards compatibility -->
<a id="schemasendvoicemessageresponse"></a>
<a id="schema_SendVoiceMessageResponse"></a>
<a id="tocSsendvoicemessageresponse"></a>
<a id="tocssendvoicemessageresponse"></a>

```json
{
  "MessageId": {}
}
```

An object that that contains the Message ID of a Voice message that was sent successfully.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MessageId|object|false|none|none|

<h2 id="tocS_CallInstructionsMessageType">CallInstructionsMessageType</h2>
<!-- backwards compatibility -->
<a id="schemacallinstructionsmessagetype"></a>
<a id="schema_CallInstructionsMessageType"></a>
<a id="tocScallinstructionsmessagetype"></a>
<a id="tocscallinstructionsmessagetype"></a>

```json
{
  "Text": {}
}
```

An object that defines a message that contains text formatted using Amazon Pinpoint Voice Instructions markup.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Text|object|false|none|none|

<h2 id="tocS_PlainTextMessageType">PlainTextMessageType</h2>
<!-- backwards compatibility -->
<a id="schemaplaintextmessagetype"></a>
<a id="schema_PlainTextMessageType"></a>
<a id="tocSplaintextmessagetype"></a>
<a id="tocsplaintextmessagetype"></a>

```json
{
  "LanguageCode": {},
  "Text": {},
  "VoiceId": {}
}
```

An object that defines a message that contains unformatted text.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LanguageCode|object|false|none|none|
|Text|object|false|none|none|
|VoiceId|object|false|none|none|

<h2 id="tocS_SSMLMessageType">SSMLMessageType</h2>
<!-- backwards compatibility -->
<a id="schemassmlmessagetype"></a>
<a id="schema_SSMLMessageType"></a>
<a id="tocSssmlmessagetype"></a>
<a id="tocsssmlmessagetype"></a>

```json
{
  "LanguageCode": {},
  "Text": {},
  "VoiceId": {}
}
```

An object that defines a message that contains SSML-formatted text.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LanguageCode|object|false|none|none|
|Text|object|false|none|none|
|VoiceId|object|false|none|none|

<h2 id="tocS_UpdateConfigurationSetEventDestinationResponse">UpdateConfigurationSetEventDestinationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconfigurationseteventdestinationresponse"></a>
<a id="schema_UpdateConfigurationSetEventDestinationResponse"></a>
<a id="tocSupdateconfigurationseteventdestinationresponse"></a>
<a id="tocsupdateconfigurationseteventdestinationresponse"></a>

```json
{}
```

An empty object that indicates that the event destination was updated successfully.

<h2 id="tocS_NonEmptyString">NonEmptyString</h2>
<!-- backwards compatibility -->
<a id="schemanonemptystring"></a>
<a id="schema_NonEmptyString"></a>
<a id="tocSnonemptystring"></a>
<a id="tocsnonemptystring"></a>

```json
"string"
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

<h2 id="tocS_WordCharactersWithDelimiters">WordCharactersWithDelimiters</h2>
<!-- backwards compatibility -->
<a id="schemawordcharacterswithdelimiters"></a>
<a id="schema_WordCharactersWithDelimiters"></a>
<a id="tocSwordcharacterswithdelimiters"></a>
<a id="tocswordcharacterswithdelimiters"></a>

```json
"string"
```

<h2 id="tocS_ConfigurationSets">ConfigurationSets</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationsets"></a>
<a id="schema_ConfigurationSets"></a>
<a id="tocSconfigurationsets"></a>
<a id="tocsconfigurationsets"></a>

```json
[
  "string"
]
```

An array that contains all of the configuration sets in your Amazon Pinpoint account in the current AWS Region.

<h2 id="tocS___string">__string</h2>
<!-- backwards compatibility -->
<a id="schema__string"></a>
<a id="schema___string"></a>
<a id="tocS__string"></a>
<a id="tocs__string"></a>

```json
"string"
```

<h2 id="tocS_EventDestinationDefinition">EventDestinationDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaeventdestinationdefinition"></a>
<a id="schema_EventDestinationDefinition"></a>
<a id="tocSeventdestinationdefinition"></a>
<a id="tocseventdestinationdefinition"></a>

```json
{
  "CloudWatchLogsDestination": {
    "IamRoleArn": {},
    "LogGroupArn": {}
  },
  "Enabled": {},
  "KinesisFirehoseDestination": {
    "DeliveryStreamArn": {},
    "IamRoleArn": {}
  },
  "MatchingEventTypes": [
    "INITIATED_CALL"
  ],
  "SnsDestination": {
    "TopicArn": {}
  }
}
```

An object that defines a single event destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CloudWatchLogsDestination|[CloudWatchLogsDestination](#schemacloudwatchlogsdestination)|false|none|An object that contains information about an event destination that sends data to Amazon CloudWatch Logs.|
|Enabled|object|false|none|none|
|KinesisFirehoseDestination|[KinesisFirehoseDestination](#schemakinesisfirehosedestination)|false|none|An object that contains information about an event destination that sends data to Amazon Kinesis Data Firehose.|
|MatchingEventTypes|[EventTypes](#schemaeventtypes)|false|none|An array of EventDestination objects. Each EventDestination object includes ARNs and other information that define an event destination.|
|SnsDestination|[SnsDestination](#schemasnsdestination)|false|none|An object that contains information about an event destination that sends data to Amazon SNS.|

#### Enumerated Values

|Property|Value|
|---|---|
|MatchingEventTypes|INITIATED_CALL|
|MatchingEventTypes|RINGING|
|MatchingEventTypes|ANSWERED|
|MatchingEventTypes|COMPLETED_CALL|
|MatchingEventTypes|BUSY|
|MatchingEventTypes|FAILED|
|MatchingEventTypes|NO_ANSWER|

<h2 id="tocS_CreateConfigurationSetEventDestinationRequest">CreateConfigurationSetEventDestinationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateconfigurationseteventdestinationrequest"></a>
<a id="schema_CreateConfigurationSetEventDestinationRequest"></a>
<a id="tocScreateconfigurationseteventdestinationrequest"></a>
<a id="tocscreateconfigurationseteventdestinationrequest"></a>

```json
{
  "EventDestination": {
    "CloudWatchLogsDestination": {
      "IamRoleArn": {},
      "LogGroupArn": {}
    },
    "Enabled": {},
    "KinesisFirehoseDestination": {
      "DeliveryStreamArn": {},
      "IamRoleArn": {}
    },
    "MatchingEventTypes": [
      "INITIATED_CALL"
    ],
    "SnsDestination": {
      "TopicArn": {}
    }
  },
  "EventDestinationName": {}
}
```

Create a new event destination in a configuration set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventDestination|[EventDestinationDefinition](#schemaeventdestinationdefinition)|false|none|An object that defines a single event destination.|
|EventDestinationName|object|false|none|none|

<h2 id="tocS_CreateConfigurationSetRequest">CreateConfigurationSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateconfigurationsetrequest"></a>
<a id="schema_CreateConfigurationSetRequest"></a>
<a id="tocScreateconfigurationsetrequest"></a>
<a id="tocscreateconfigurationsetrequest"></a>

```json
{
  "ConfigurationSetName": {}
}
```

A request to create a new configuration set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationSetName|object|false|none|none|

<h2 id="tocS_DeleteConfigurationSetEventDestinationRequest">DeleteConfigurationSetEventDestinationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconfigurationseteventdestinationrequest"></a>
<a id="schema_DeleteConfigurationSetEventDestinationRequest"></a>
<a id="tocSdeleteconfigurationseteventdestinationrequest"></a>
<a id="tocsdeleteconfigurationseteventdestinationrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteConfigurationSetRequest">DeleteConfigurationSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconfigurationsetrequest"></a>
<a id="schema_DeleteConfigurationSetRequest"></a>
<a id="tocSdeleteconfigurationsetrequest"></a>
<a id="tocsdeleteconfigurationsetrequest"></a>

```json
{}
```

<h2 id="tocS_EventDestination">EventDestination</h2>
<!-- backwards compatibility -->
<a id="schemaeventdestination"></a>
<a id="schema_EventDestination"></a>
<a id="tocSeventdestination"></a>
<a id="tocseventdestination"></a>

```json
{
  "CloudWatchLogsDestination": {
    "IamRoleArn": {},
    "LogGroupArn": {}
  },
  "Enabled": {},
  "KinesisFirehoseDestination": {
    "DeliveryStreamArn": {},
    "IamRoleArn": {}
  },
  "MatchingEventTypes": [
    "INITIATED_CALL"
  ],
  "Name": {},
  "SnsDestination": {
    "TopicArn": {}
  }
}
```

An object that defines an event destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CloudWatchLogsDestination|[CloudWatchLogsDestination](#schemacloudwatchlogsdestination)|false|none|An object that contains information about an event destination that sends data to Amazon CloudWatch Logs.|
|Enabled|object|false|none|none|
|KinesisFirehoseDestination|[KinesisFirehoseDestination](#schemakinesisfirehosedestination)|false|none|An object that contains information about an event destination that sends data to Amazon Kinesis Data Firehose.|
|MatchingEventTypes|[EventTypes](#schemaeventtypes)|false|none|An array of EventDestination objects. Each EventDestination object includes ARNs and other information that define an event destination.|
|Name|object|false|none|none|
|SnsDestination|[SnsDestination](#schemasnsdestination)|false|none|An object that contains information about an event destination that sends data to Amazon SNS.|

#### Enumerated Values

|Property|Value|
|---|---|
|MatchingEventTypes|INITIATED_CALL|
|MatchingEventTypes|RINGING|
|MatchingEventTypes|ANSWERED|
|MatchingEventTypes|COMPLETED_CALL|
|MatchingEventTypes|BUSY|
|MatchingEventTypes|FAILED|
|MatchingEventTypes|NO_ANSWER|

<h2 id="tocS_EventDestinations">EventDestinations</h2>
<!-- backwards compatibility -->
<a id="schemaeventdestinations"></a>
<a id="schema_EventDestinations"></a>
<a id="tocSeventdestinations"></a>
<a id="tocseventdestinations"></a>

```json
[
  {
    "CloudWatchLogsDestination": {
      "IamRoleArn": {},
      "LogGroupArn": {}
    },
    "Enabled": {},
    "KinesisFirehoseDestination": {
      "DeliveryStreamArn": {},
      "IamRoleArn": {}
    },
    "MatchingEventTypes": [
      "INITIATED_CALL"
    ],
    "Name": {},
    "SnsDestination": {
      "TopicArn": {}
    }
  }
]
```

An array of EventDestination objects. Each EventDestination object includes ARNs and other information that define an event destination.

<h2 id="tocS_EventType">EventType</h2>
<!-- backwards compatibility -->
<a id="schemaeventtype"></a>
<a id="schema_EventType"></a>
<a id="tocSeventtype"></a>
<a id="tocseventtype"></a>

```json
"INITIATED_CALL"
```

The types of events that are sent to the event destination.

<h2 id="tocS_GetConfigurationSetEventDestinationsRequest">GetConfigurationSetEventDestinationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetconfigurationseteventdestinationsrequest"></a>
<a id="schema_GetConfigurationSetEventDestinationsRequest"></a>
<a id="tocSgetconfigurationseteventdestinationsrequest"></a>
<a id="tocsgetconfigurationseteventdestinationsrequest"></a>

```json
{}
```

<h2 id="tocS_ListConfigurationSetsRequest">ListConfigurationSetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistconfigurationsetsrequest"></a>
<a id="schema_ListConfigurationSetsRequest"></a>
<a id="tocSlistconfigurationsetsrequest"></a>
<a id="tocslistconfigurationsetsrequest"></a>

```json
{}
```

<h2 id="tocS_NextTokenString">NextTokenString</h2>
<!-- backwards compatibility -->
<a id="schemanexttokenstring"></a>
<a id="schema_NextTokenString"></a>
<a id="tocSnexttokenstring"></a>
<a id="tocsnexttokenstring"></a>

```json
"string"
```

<h2 id="tocS_VoiceMessageContent">VoiceMessageContent</h2>
<!-- backwards compatibility -->
<a id="schemavoicemessagecontent"></a>
<a id="schema_VoiceMessageContent"></a>
<a id="tocSvoicemessagecontent"></a>
<a id="tocsvoicemessagecontent"></a>

```json
{
  "CallInstructionsMessage": {
    "Text": {}
  },
  "PlainTextMessage": {
    "LanguageCode": {},
    "Text": {},
    "VoiceId": {}
  },
  "SSMLMessage": {
    "LanguageCode": {},
    "Text": {},
    "VoiceId": {}
  }
}
```

An object that contains a voice message and information about the recipient that you want to send it to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CallInstructionsMessage|[CallInstructionsMessageType](#schemacallinstructionsmessagetype)|false|none|An object that defines a message that contains text formatted using Amazon Pinpoint Voice Instructions markup.|
|PlainTextMessage|[PlainTextMessageType](#schemaplaintextmessagetype)|false|none|An object that defines a message that contains unformatted text.|
|SSMLMessage|[SSMLMessageType](#schemassmlmessagetype)|false|none|An object that defines a message that contains SSML-formatted text.|

<h2 id="tocS_SendVoiceMessageRequest">SendVoiceMessageRequest</h2>
<!-- backwards compatibility -->
<a id="schemasendvoicemessagerequest"></a>
<a id="schema_SendVoiceMessageRequest"></a>
<a id="tocSsendvoicemessagerequest"></a>
<a id="tocssendvoicemessagerequest"></a>

```json
{
  "CallerId": {},
  "ConfigurationSetName": {},
  "Content": {
    "CallInstructionsMessage": {
      "Text": {}
    },
    "PlainTextMessage": {
      "LanguageCode": {},
      "Text": {},
      "VoiceId": {}
    },
    "SSMLMessage": {
      "LanguageCode": {},
      "Text": {},
      "VoiceId": {}
    }
  },
  "DestinationPhoneNumber": {},
  "OriginationPhoneNumber": {}
}
```

SendVoiceMessageRequest

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CallerId|object|false|none|none|
|ConfigurationSetName|object|false|none|none|
|Content|[VoiceMessageContent](#schemavoicemessagecontent)|false|none|An object that contains a voice message and information about the recipient that you want to send it to.|
|DestinationPhoneNumber|object|false|none|none|
|OriginationPhoneNumber|object|false|none|none|

<h2 id="tocS_UpdateConfigurationSetEventDestinationRequest">UpdateConfigurationSetEventDestinationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconfigurationseteventdestinationrequest"></a>
<a id="schema_UpdateConfigurationSetEventDestinationRequest"></a>
<a id="tocSupdateconfigurationseteventdestinationrequest"></a>
<a id="tocsupdateconfigurationseteventdestinationrequest"></a>

```json
{
  "EventDestination": {
    "CloudWatchLogsDestination": {
      "IamRoleArn": {},
      "LogGroupArn": {}
    },
    "Enabled": {},
    "KinesisFirehoseDestination": {
      "DeliveryStreamArn": {},
      "IamRoleArn": {}
    },
    "MatchingEventTypes": [
      "INITIATED_CALL"
    ],
    "SnsDestination": {
      "TopicArn": {}
    }
  }
}
```

UpdateConfigurationSetEventDestinationRequest

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventDestination|[EventDestinationDefinition](#schemaeventdestinationdefinition)|false|none|An object that defines a single event destination.|
