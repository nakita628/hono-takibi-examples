<h1 id="aws-elemental-medialive">AWS Elemental MediaLive v2017-10-14</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

API for AWS Elemental MediaLive

Base URLs:

* <a href="http://medialive.us-east-1.amazonaws.com">http://medialive.us-east-1.amazonaws.com</a> - The MediaLive multi-region endpoint

* <a href="https://medialive.us-east-1.amazonaws.com">https://medialive.us-east-1.amazonaws.com</a> - The MediaLive multi-region endpoint

* <a href="http://medialive.cn-north-1.amazonaws.com.cn">http://medialive.cn-north-1.amazonaws.com.cn</a> - The MediaLive endpoint for China (Beijing) and China (Ningxia)

* <a href="https://medialive.cn-north-1.amazonaws.com.cn">https://medialive.cn-north-1.amazonaws.com.cn</a> - The MediaLive endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/medialive/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-elemental-medialive-default">Default</h1>

## AcceptInputDeviceTransfer

<a id="opIdAcceptInputDeviceTransfer"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/inputDevices/string/accept \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /prod/inputDevices/{inputDeviceId}/accept`

Accept an incoming input device transfer. The ownership of the device will transfer to your AWS account.

<h3 id="acceptinputdevicetransfer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inputDeviceId|path|string|true|The unique ID of the input device to accept. For example, hd-123456789abcdef.|
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

> 487 Response

```json
null
```

> 488 Response

```json
null
```

<h3 id="acceptinputdevicetransfer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AcceptInputDeviceTransferResponse](#schemaacceptinputdevicetransferresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnprocessableEntityException|[UnprocessableEntityException](#schemaunprocessableentityexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|485|485|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|486|486|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|487|487|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|488|488|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchDelete

<a id="opIdBatchDelete"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/batch/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "channelIds": [
      "string"
    ],
    "inputIds": [
      "string"
    ],
    "inputSecurityGroupIds": [
      "string"
    ],
    "multiplexIds": [
      "string"
    ]
  }'
```

`POST /prod/batch/delete`

Starts delete of resources.

> Body parameter

```json
{
  "channelIds": [
    "string"
  ],
  "inputIds": [
    "string"
  ],
  "inputSecurityGroupIds": [
    "string"
  ],
  "multiplexIds": [
    "string"
  ]
}
```

<h3 id="batchdelete-parameters">Parameters</h3>

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
|» channelIds|body|[[__string](#schema__string)]|false|Placeholder documentation for __listOf__string|
|» inputIds|body|[[__string](#schema__string)]|false|Placeholder documentation for __listOf__string|
|» inputSecurityGroupIds|body|[[__string](#schema__string)]|false|Placeholder documentation for __listOf__string|
|» multiplexIds|body|[[__string](#schema__string)]|false|Placeholder documentation for __listOf__string|

> Example responses

> 200 Response

```json
{
  "Failed": {},
  "Successful": {}
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

> 487 Response

```json
null
```

<h3 id="batchdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchDeleteResponse](#schemabatchdeleteresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|487|487|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchStart

<a id="opIdBatchStart"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/batch/start \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "channelIds": [
      "string"
    ],
    "multiplexIds": [
      "string"
    ]
  }'
```

`POST /prod/batch/start`

Starts existing resources

> Body parameter

```json
{
  "channelIds": [
    "string"
  ],
  "multiplexIds": [
    "string"
  ]
}
```

<h3 id="batchstart-parameters">Parameters</h3>

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
|» channelIds|body|[[__string](#schema__string)]|false|Placeholder documentation for __listOf__string|
|» multiplexIds|body|[[__string](#schema__string)]|false|Placeholder documentation for __listOf__string|

> Example responses

> 200 Response

```json
{
  "Failed": {},
  "Successful": {}
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

> 487 Response

```json
null
```

<h3 id="batchstart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchStartResponse](#schemabatchstartresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|487|487|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchStop

<a id="opIdBatchStop"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/batch/stop \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "channelIds": [
      "string"
    ],
    "multiplexIds": [
      "string"
    ]
  }'
```

`POST /prod/batch/stop`

Stops running resources

> Body parameter

```json
{
  "channelIds": [
    "string"
  ],
  "multiplexIds": [
    "string"
  ]
}
```

<h3 id="batchstop-parameters">Parameters</h3>

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
|» channelIds|body|[[__string](#schema__string)]|false|Placeholder documentation for __listOf__string|
|» multiplexIds|body|[[__string](#schema__string)]|false|Placeholder documentation for __listOf__string|

> Example responses

> 200 Response

```json
{
  "Failed": {},
  "Successful": {}
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

> 487 Response

```json
null
```

<h3 id="batchstop-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchStopResponse](#schemabatchstopresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|487|487|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeSchedule

<a id="opIdDescribeSchedule"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/channels/string/schedule \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /prod/channels/{channelId}/schedule`

Get a channel schedule

<h3 id="describeschedule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelId|path|string|true|Id of the channel whose schedule is being updated.|
|maxResults|query|integer|false|none|
|nextToken|query|string|false|none|
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
  "NextToken": {},
  "ScheduleActions": {}
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

<h3 id="describeschedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeScheduleResponse](#schemadescribescheduleresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchUpdateSchedule

<a id="opIdBatchUpdateSchedule"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/channels/string/schedule \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "creates": {
      "ScheduleActions": {}
    },
    "deletes": {
      "ActionNames": {}
    }
  }'
```

`PUT /prod/channels/{channelId}/schedule`

Update a channel schedule

> Body parameter

```json
{
  "creates": {
    "ScheduleActions": {}
  },
  "deletes": {
    "ActionNames": {}
  }
}
```

<h3 id="batchupdateschedule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelId|path|string|true|Id of the channel whose schedule is being updated.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» creates|body|object|false|A list of schedule actions to create (in a request) or that have been created (in a response).|
|» » ScheduleActions|body|object|false|none|
|» deletes|body|object|false|A list of schedule actions to delete.|
|» » ActionNames|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "Creates": {
    "ScheduleActions": {}
  },
  "Deletes": {
    "ScheduleActions": {}
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

> 487 Response

```json
null
```

<h3 id="batchupdateschedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchUpdateScheduleResponse](#schemabatchupdatescheduleresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnprocessableEntityException|[UnprocessableEntityException](#schemaunprocessableentityexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|485|485|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|486|486|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|487|487|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteSchedule

<a id="opIdDeleteSchedule"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/channels/string/schedule \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /prod/channels/{channelId}/schedule`

Delete all schedule actions on a channel.

<h3 id="deleteschedule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelId|path|string|true|Id of the channel whose schedule is being deleted.|
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

<h3 id="deleteschedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteScheduleResponse](#schemadeletescheduleresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CancelInputDeviceTransfer

<a id="opIdCancelInputDeviceTransfer"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/inputDevices/string/cancel \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /prod/inputDevices/{inputDeviceId}/cancel`

Cancel an input device transfer that you have requested.

<h3 id="cancelinputdevicetransfer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inputDeviceId|path|string|true|The unique ID of the input device to cancel. For example, hd-123456789abcdef.|
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

> 487 Response

```json
null
```

> 488 Response

```json
null
```

<h3 id="cancelinputdevicetransfer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelInputDeviceTransferResponse](#schemacancelinputdevicetransferresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnprocessableEntityException|[UnprocessableEntityException](#schemaunprocessableentityexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|485|485|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|486|486|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|487|487|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|488|488|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ClaimDevice

<a id="opIdClaimDevice"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/claimDevice \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "id": "string"
  }'
```

`POST /prod/claimDevice`

Send a request to claim an AWS Elemental device that you have purchased from a third-party vendor. After the request succeeds, you will own the device.

> Body parameter

```json
{
  "id": "string"
}
```

<h3 id="claimdevice-parameters">Parameters</h3>

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
|» id|body|string|false|Placeholder documentation for __string|

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

> 487 Response

```json
null
```

<h3 id="claimdevice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ClaimDeviceResponse](#schemaclaimdeviceresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnprocessableEntityException|[UnprocessableEntityException](#schemaunprocessableentityexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|485|485|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|486|486|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|487|487|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListChannels

<a id="opIdListChannels"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/channels \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /prod/channels`

Produces list of channels that have been created

<h3 id="listchannels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|none|
|nextToken|query|string|false|none|
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
  "Channels": {},
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

<h3 id="listchannels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListChannelsResponse](#schemalistchannelsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|484|484|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateChannel

<a id="opIdCreateChannel"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/channels \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "cdiInputSpecification": {
      "Resolution": {}
    },
    "channelClass": "STANDARD",
    "destinations": [
      {
        "Id": {},
        "MediaPackageSettings": {},
        "MultiplexSettings": {
          "MultiplexId": {},
          "ProgramName": {}
        },
        "Settings": {}
      }
    ],
    "encoderSettings": {
      "AudioDescriptions": {},
      "AvailBlanking": {
        "AvailBlankingImage": {
          "PasswordParam": {},
          "Uri": {},
          "Username": {}
        },
        "State": {}
      },
      "AvailConfiguration": {
        "AvailSettings": {
          "Esam": {
            "AcquisitionPointId": {},
            "AdAvailOffset": {},
            "PasswordParam": {},
            "PoisEndpoint": {},
            "Username": {},
            "ZoneIdentity": {}
          },
          "Scte35SpliceInsert": {
            "AdAvailOffset": {},
            "NoRegionalBlackoutFlag": {},
            "WebDeliveryAllowedFlag": {}
          },
          "Scte35TimeSignalApos": {
            "AdAvailOffset": {},
            "NoRegionalBlackoutFlag": {},
            "WebDeliveryAllowedFlag": {}
          }
        }
      },
      "BlackoutSlate": {
        "BlackoutSlateImage": {
          "PasswordParam": {},
          "Uri": {},
          "Username": {}
        },
        "NetworkEndBlackout": {},
        "NetworkEndBlackoutImage": {
          "PasswordParam": {},
          "Uri": {},
          "Username": {}
        },
        "NetworkId": {},
        "State": {}
      },
      "CaptionDescriptions": {},
      "FeatureActivations": {
        "InputPrepareScheduleActions": {}
      },
      "GlobalConfiguration": {
        "InitialAudioGain": {},
        "InputEndAction": {},
        "InputLossBehavior": {
          "BlackFrameMsec": {},
          "InputLossImageColor": {},
          "InputLossImageSlate": {
            "PasswordParam": {},
            "Uri": {},
            "Username": {}
          },
          "InputLossImageType": {},
          "RepeatFrameMsec": {}
        },
        "OutputLockingMode": {},
        "OutputTimingSource": {},
        "SupportLowFramerateInputs": {}
      },
      "MotionGraphicsConfiguration": {
        "MotionGraphicsInsertion": {},
        "MotionGraphicsSettings": {
          "HtmlMotionGraphicsSettings": {}
        }
      },
      "NielsenConfiguration": {
        "DistributorId": {},
        "NielsenPcmToId3Tagging": {}
      },
      "OutputGroups": {},
      "TimecodeConfig": {
        "Source": {},
        "SyncThreshold": {}
      },
      "VideoDescriptions": {}
    },
    "inputAttachments": [
      {
        "AutomaticInputFailoverSettings": {
          "ErrorClearTimeMsec": {},
          "FailoverConditions": {},
          "InputPreference": {},
          "SecondaryInputId": {}
        },
        "InputAttachmentName": {},
        "InputId": {},
        "InputSettings": {
          "AudioSelectors": {},
          "CaptionSelectors": {},
          "DeblockFilter": {},
          "DenoiseFilter": {},
          "FilterStrength": {},
          "InputFilter": {},
          "NetworkInputSettings": {
            "HlsInputSettings": {
              "Bandwidth": {},
              "BufferSegments": {},
              "Retries": {},
              "RetryInterval": {},
              "Scte35Source": {}
            },
            "ServerValidation": {}
          },
          "Scte35Pid": {},
          "Smpte2038DataPreference": {},
          "SourceEndBehavior": {},
          "VideoSelector": {
            "ColorSpace": {},
            "ColorSpaceSettings": {
              "Hdr10Settings": {
                "MaxCll": {},
                "MaxFall": {}
              }
            },
            "ColorSpaceUsage": {},
            "SelectorSettings": {
              "VideoSelectorPid": {
                "Pid": {}
              },
              "VideoSelectorProgramId": {
                "ProgramId": {}
              }
            }
          }
        }
      }
    ],
    "inputSpecification": {
      "Codec": {},
      "MaximumBitrate": {},
      "Resolution": {}
    },
    "logLevel": "ERROR",
    "maintenance": {
      "MaintenanceDay": {},
      "MaintenanceStartTime": {}
    },
    "name": "string",
    "requestId": "string",
    "reserved": "string",
    "roleArn": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "vpc": {
      "PublicAddressAllocationIds": {},
      "SecurityGroupIds": {},
      "SubnetIds": {}
    }
  }'
```

`POST /prod/channels`

Creates a new channel

> Body parameter

```json
{
  "cdiInputSpecification": {
    "Resolution": {}
  },
  "channelClass": "STANDARD",
  "destinations": [
    {
      "Id": {},
      "MediaPackageSettings": {},
      "MultiplexSettings": {
        "MultiplexId": {},
        "ProgramName": {}
      },
      "Settings": {}
    }
  ],
  "encoderSettings": {
    "AudioDescriptions": {},
    "AvailBlanking": {
      "AvailBlankingImage": {
        "PasswordParam": {},
        "Uri": {},
        "Username": {}
      },
      "State": {}
    },
    "AvailConfiguration": {
      "AvailSettings": {
        "Esam": {
          "AcquisitionPointId": {},
          "AdAvailOffset": {},
          "PasswordParam": {},
          "PoisEndpoint": {},
          "Username": {},
          "ZoneIdentity": {}
        },
        "Scte35SpliceInsert": {
          "AdAvailOffset": {},
          "NoRegionalBlackoutFlag": {},
          "WebDeliveryAllowedFlag": {}
        },
        "Scte35TimeSignalApos": {
          "AdAvailOffset": {},
          "NoRegionalBlackoutFlag": {},
          "WebDeliveryAllowedFlag": {}
        }
      }
    },
    "BlackoutSlate": {
      "BlackoutSlateImage": {
        "PasswordParam": {},
        "Uri": {},
        "Username": {}
      },
      "NetworkEndBlackout": {},
      "NetworkEndBlackoutImage": {
        "PasswordParam": {},
        "Uri": {},
        "Username": {}
      },
      "NetworkId": {},
      "State": {}
    },
    "CaptionDescriptions": {},
    "FeatureActivations": {
      "InputPrepareScheduleActions": {}
    },
    "GlobalConfiguration": {
      "InitialAudioGain": {},
      "InputEndAction": {},
      "InputLossBehavior": {
        "BlackFrameMsec": {},
        "InputLossImageColor": {},
        "InputLossImageSlate": {
          "PasswordParam": {},
          "Uri": {},
          "Username": {}
        },
        "InputLossImageType": {},
        "RepeatFrameMsec": {}
      },
      "OutputLockingMode": {},
      "OutputTimingSource": {},
      "SupportLowFramerateInputs": {}
    },
    "MotionGraphicsConfiguration": {
      "MotionGraphicsInsertion": {},
      "MotionGraphicsSettings": {
        "HtmlMotionGraphicsSettings": {}
      }
    },
    "NielsenConfiguration": {
      "DistributorId": {},
      "NielsenPcmToId3Tagging": {}
    },
    "OutputGroups": {},
    "TimecodeConfig": {
      "Source": {},
      "SyncThreshold": {}
    },
    "VideoDescriptions": {}
  },
  "inputAttachments": [
    {
      "AutomaticInputFailoverSettings": {
        "ErrorClearTimeMsec": {},
        "FailoverConditions": {},
        "InputPreference": {},
        "SecondaryInputId": {}
      },
      "InputAttachmentName": {},
      "InputId": {},
      "InputSettings": {
        "AudioSelectors": {},
        "CaptionSelectors": {},
        "DeblockFilter": {},
        "DenoiseFilter": {},
        "FilterStrength": {},
        "InputFilter": {},
        "NetworkInputSettings": {
          "HlsInputSettings": {
            "Bandwidth": {},
            "BufferSegments": {},
            "Retries": {},
            "RetryInterval": {},
            "Scte35Source": {}
          },
          "ServerValidation": {}
        },
        "Scte35Pid": {},
        "Smpte2038DataPreference": {},
        "SourceEndBehavior": {},
        "VideoSelector": {
          "ColorSpace": {},
          "ColorSpaceSettings": {
            "Hdr10Settings": {
              "MaxCll": {},
              "MaxFall": {}
            }
          },
          "ColorSpaceUsage": {},
          "SelectorSettings": {
            "VideoSelectorPid": {
              "Pid": {}
            },
            "VideoSelectorProgramId": {
              "ProgramId": {}
            }
          }
        }
      }
    }
  ],
  "inputSpecification": {
    "Codec": {},
    "MaximumBitrate": {},
    "Resolution": {}
  },
  "logLevel": "ERROR",
  "maintenance": {
    "MaintenanceDay": {},
    "MaintenanceStartTime": {}
  },
  "name": "string",
  "requestId": "string",
  "reserved": "string",
  "roleArn": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "vpc": {
    "PublicAddressAllocationIds": {},
    "SecurityGroupIds": {},
    "SubnetIds": {}
  }
}
```

<h3 id="createchannel-parameters">Parameters</h3>

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
|» cdiInputSpecification|body|object|false|Placeholder documentation for CdiInputSpecification|
|» » Resolution|body|object|false|none|
|» channelClass|body|string|false|A standard channel has two encoding pipelines and a single pipeline channel only has one.|
|» destinations|body|[[OutputDestination](#schemaoutputdestination)]|false|Placeholder documentation for __listOfOutputDestination|
|» encoderSettings|body|object|false|Encoder Settings|
|» » AudioDescriptions|body|object|false|none|
|» » AvailBlanking|body|object|false|none|
|» » » AvailBlankingImage|body|object|false|none|
|» » » » PasswordParam|body|object|false|none|
|» » » » Uri|body|object|true|none|
|» » » » Username|body|object|false|none|
|» » » State|body|object|false|none|
|» » AvailConfiguration|body|object|false|none|
|» » » AvailSettings|body|object|false|none|
|» » » » Esam|body|object|false|none|
|» » » » » AcquisitionPointId|body|object|true|none|
|» » » » » AdAvailOffset|body|object|false|none|
|» » » » » PasswordParam|body|object|false|none|
|» » » » » PoisEndpoint|body|object|true|none|
|» » » » » Username|body|object|false|none|
|» » » » » ZoneIdentity|body|object|false|none|
|» » » » Scte35SpliceInsert|body|object|false|none|
|» » » » » AdAvailOffset|body|object|false|none|
|» » » » » NoRegionalBlackoutFlag|body|object|false|none|
|» » » » » WebDeliveryAllowedFlag|body|object|false|none|
|» » » » Scte35TimeSignalApos|body|object|false|none|
|» » » » » AdAvailOffset|body|object|false|none|
|» » » » » NoRegionalBlackoutFlag|body|object|false|none|
|» » » » » WebDeliveryAllowedFlag|body|object|false|none|
|» » BlackoutSlate|body|object|false|none|
|» » » BlackoutSlateImage|body|object|false|none|
|» » » » PasswordParam|body|object|false|none|
|» » » » Uri|body|object|true|none|
|» » » » Username|body|object|false|none|
|» » » NetworkEndBlackout|body|object|false|none|
|» » » NetworkEndBlackoutImage|body|object|false|none|
|» » » » PasswordParam|body|object|false|none|
|» » » » Uri|body|object|true|none|
|» » » » Username|body|object|false|none|
|» » » NetworkId|body|object|false|none|
|» » » State|body|object|false|none|
|» » CaptionDescriptions|body|object|false|none|
|» » FeatureActivations|body|object|false|none|
|» » » InputPrepareScheduleActions|body|object|false|none|
|» » GlobalConfiguration|body|object|false|none|
|» » » InitialAudioGain|body|object|false|none|
|» » » InputEndAction|body|object|false|none|
|» » » InputLossBehavior|body|object|false|none|
|» » » » BlackFrameMsec|body|object|false|none|
|» » » » InputLossImageColor|body|object|false|none|
|» » » » InputLossImageSlate|body|object|false|none|
|» » » » » PasswordParam|body|object|false|none|
|» » » » » Uri|body|object|true|none|
|» » » » » Username|body|object|false|none|
|» » » » InputLossImageType|body|object|false|none|
|» » » » RepeatFrameMsec|body|object|false|none|
|» » » OutputLockingMode|body|object|false|none|
|» » » OutputTimingSource|body|object|false|none|
|» » » SupportLowFramerateInputs|body|object|false|none|
|» » MotionGraphicsConfiguration|body|object|false|none|
|» » » MotionGraphicsInsertion|body|object|false|none|
|» » » MotionGraphicsSettings|body|object|true|none|
|» » » » HtmlMotionGraphicsSettings|body|object|false|none|
|» » NielsenConfiguration|body|object|false|none|
|» » » DistributorId|body|object|false|none|
|» » » NielsenPcmToId3Tagging|body|object|false|none|
|» » OutputGroups|body|object|false|none|
|» » TimecodeConfig|body|object|false|none|
|» » » Source|body|object|true|none|
|» » » SyncThreshold|body|object|false|none|
|» » VideoDescriptions|body|object|false|none|
|» inputAttachments|body|[[InputAttachment](#schemainputattachment)]|false|Placeholder documentation for __listOfInputAttachment|
|» inputSpecification|body|object|false|Placeholder documentation for InputSpecification|
|» » Codec|body|object|false|none|
|» » MaximumBitrate|body|object|false|none|
|» » Resolution|body|object|false|none|
|» logLevel|body|string|false|The log level the user wants for their channel.|
|» maintenance|body|object|false|Placeholder documentation for MaintenanceCreateSettings|
|» » MaintenanceDay|body|object|false|none|
|» » MaintenanceStartTime|body|object|false|none|
|» name|body|string|false|Placeholder documentation for __string|
|» requestId|body|string|false|Placeholder documentation for __string|
|» reserved|body|string|false|Placeholder documentation for __string|
|» roleArn|body|string|false|Placeholder documentation for __string|
|» tags|body|object|false|Placeholder documentation for Tags|
|» » **additionalProperties**|body|[__string](#schema__string)|false|Placeholder documentation for __string|
|» vpc|body|object|false|The properties for a private VPC Output<br>When this property is specified, the output egress addresses will be created in a user specified VPC<br>|
|» » PublicAddressAllocationIds|body|object|false|none|
|» » SecurityGroupIds|body|object|false|none|
|» » SubnetIds|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» channelClass|STANDARD|
|» channelClass|SINGLE_PIPELINE|
|» logLevel|ERROR|
|» logLevel|WARNING|
|» logLevel|INFO|
|» logLevel|DEBUG|
|» logLevel|DISABLED|

> Example responses

> 201 Response

```json
{
  "Channel": {
    "Arn": {},
    "CdiInputSpecification": {
      "Resolution": {}
    },
    "ChannelClass": {},
    "Destinations": {},
    "EgressEndpoints": {},
    "EncoderSettings": {
      "AudioDescriptions": {},
      "AvailBlanking": {
        "AvailBlankingImage": {
          "PasswordParam": {},
          "Uri": {},
          "Username": {}
        },
        "State": {}
      },
      "AvailConfiguration": {
        "AvailSettings": {
          "Esam": {
            "AcquisitionPointId": {},
            "AdAvailOffset": {},
            "PasswordParam": {},
            "PoisEndpoint": {},
            "Username": {},
            "ZoneIdentity": {}
          },
          "Scte35SpliceInsert": {
            "AdAvailOffset": {},
            "NoRegionalBlackoutFlag": {},
            "WebDeliveryAllowedFlag": {}
          },
          "Scte35TimeSignalApos": {
            "AdAvailOffset": {},
            "NoRegionalBlackoutFlag": {},
            "WebDeliveryAllowedFlag": {}
          }
        }
      },
      "BlackoutSlate": {
        "BlackoutSlateImage": {
          "PasswordParam": {},
          "Uri": {},
          "Username": {}
        },
        "NetworkEndBlackout": {},
        "NetworkEndBlackoutImage": {
          "PasswordParam": {},
          "Uri": {},
          "Username": {}
        },
        "NetworkId": {},
        "State": {}
      },
      "CaptionDescriptions": {},
      "FeatureActivations": {
        "InputPrepareScheduleActions": {}
      },
      "GlobalConfiguration": {
        "InitialAudioGain": {},
        "InputEndAction": {},
        "InputLossBehavior": {
          "BlackFrameMsec": {},
          "InputLossImageColor": {},
          "InputLossImageSlate": {
            "PasswordParam": {},
            "Uri": {},
            "Username": {}
          },
          "InputLossImageType": {},
          "RepeatFrameMsec": {}
        },
        "OutputLockingMode": {},
        "OutputTimingSource": {},
        "SupportLowFramerateInputs": {}
      },
      "MotionGraphicsConfiguration": {
        "MotionGraphicsInsertion": {},
        "MotionGraphicsSettings": {
          "HtmlMotionGraphicsSettings": {}
        }
      },
      "NielsenConfiguration": {
        "DistributorId": {},
        "NielsenPcmToId3Tagging": {}
      },
      "OutputGroups": {},
      "TimecodeConfig": {
        "Source": {},
        "SyncThreshold": {}
      },
      "VideoDescriptions": {}
    },
    "Id": {},
    "InputAttachments": {},
    "InputSpecification": {
      "Codec": {},
      "MaximumBitrate": {},
      "Resolution": {}
    },
    "LogLevel": {},
    "Maintenance": {
      "MaintenanceDay": {},
      "MaintenanceDeadline": {},
      "MaintenanceScheduledDate": {},
      "MaintenanceStartTime": {}
    },
    "Name": {},
    "PipelineDetails": {},
    "PipelinesRunningCount": {},
    "RoleArn": {},
    "State": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "Vpc": {
      "AvailabilityZones": {},
      "NetworkInterfaceIds": {},
      "SecurityGroupIds": {},
      "SubnetIds": {}
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

> 487 Response

```json
null
```

<h3 id="createchannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateChannelResponse](#schemacreatechannelresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnprocessableEntityException|[UnprocessableEntityException](#schemaunprocessableentityexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|485|485|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|487|487|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListInputs

<a id="opIdListInputs"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/inputs \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /prod/inputs`

Produces list of inputs that have been created

<h3 id="listinputs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|none|
|nextToken|query|string|false|none|
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
  "Inputs": {},
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

<h3 id="listinputs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListInputsResponse](#schemalistinputsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|484|484|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateInput

<a id="opIdCreateInput"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/inputs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "destinations": [
      {
        "StreamName": {}
      }
    ],
    "inputDevices": [
      {
        "Id": {}
      }
    ],
    "inputSecurityGroups": [
      "string"
    ],
    "mediaConnectFlows": [
      {
        "FlowArn": {}
      }
    ],
    "name": "string",
    "requestId": "string",
    "roleArn": "string",
    "sources": [
      {
        "PasswordParam": {},
        "Url": {},
        "Username": {}
      }
    ],
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "type": "UDP_PUSH",
    "vpc": {
      "SecurityGroupIds": {},
      "SubnetIds": {}
    }
  }'
```

`POST /prod/inputs`

Create an input

> Body parameter

```json
{
  "destinations": [
    {
      "StreamName": {}
    }
  ],
  "inputDevices": [
    {
      "Id": {}
    }
  ],
  "inputSecurityGroups": [
    "string"
  ],
  "mediaConnectFlows": [
    {
      "FlowArn": {}
    }
  ],
  "name": "string",
  "requestId": "string",
  "roleArn": "string",
  "sources": [
    {
      "PasswordParam": {},
      "Url": {},
      "Username": {}
    }
  ],
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "type": "UDP_PUSH",
  "vpc": {
    "SecurityGroupIds": {},
    "SubnetIds": {}
  }
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
|» destinations|body|[[InputDestinationRequest](#schemainputdestinationrequest)]|false|Placeholder documentation for __listOfInputDestinationRequest|
|» inputDevices|body|[[InputDeviceSettings](#schemainputdevicesettings)]|false|Placeholder documentation for __listOfInputDeviceSettings|
|» inputSecurityGroups|body|[[__string](#schema__string)]|false|Placeholder documentation for __listOf__string|
|» mediaConnectFlows|body|[[MediaConnectFlowRequest](#schemamediaconnectflowrequest)]|false|Placeholder documentation for __listOfMediaConnectFlowRequest|
|» name|body|string|false|Placeholder documentation for __string|
|» requestId|body|string|false|Placeholder documentation for __string|
|» roleArn|body|string|false|Placeholder documentation for __string|
|» sources|body|[[InputSourceRequest](#schemainputsourcerequest)]|false|Placeholder documentation for __listOfInputSourceRequest|
|» tags|body|object|false|Placeholder documentation for Tags|
|» » **additionalProperties**|body|[__string](#schema__string)|false|Placeholder documentation for __string|
|» type|body|string|false|The different types of inputs that AWS Elemental MediaLive supports.|
|» vpc|body|object|false|Settings for a private VPC Input.<br>When this property is specified, the input destination addresses will be created in a VPC rather than with public Internet addresses.<br>This property requires setting the roleArn property on Input creation.<br>Not compatible with the inputSecurityGroups property.<br>|
|» » SecurityGroupIds|body|object|false|none|
|» » SubnetIds|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|UDP_PUSH|
|» type|RTP_PUSH|
|» type|RTMP_PUSH|
|» type|RTMP_PULL|
|» type|URL_PULL|
|» type|MP4_FILE|
|» type|MEDIACONNECT|
|» type|INPUT_DEVICE|
|» type|AWS_CDI|
|» type|TS_FILE|

> Example responses

> 201 Response

```json
{
  "Input": {
    "Arn": {},
    "AttachedChannels": {},
    "Destinations": {},
    "Id": {},
    "InputClass": {},
    "InputDevices": {},
    "InputPartnerIds": {},
    "InputSourceType": {},
    "MediaConnectFlows": {},
    "Name": {},
    "RoleArn": {},
    "SecurityGroups": {},
    "Sources": {},
    "State": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "Type": {}
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

<h3 id="createinput-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateInputResponse](#schemacreateinputresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|484|484|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListInputSecurityGroups

<a id="opIdListInputSecurityGroups"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/inputSecurityGroups \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /prod/inputSecurityGroups`

Produces a list of Input Security Groups for an account

<h3 id="listinputsecuritygroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|none|
|nextToken|query|string|false|none|
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
  "InputSecurityGroups": {},
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

<h3 id="listinputsecuritygroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListInputSecurityGroupsResponse](#schemalistinputsecuritygroupsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|484|484|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateInputSecurityGroup

<a id="opIdCreateInputSecurityGroup"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/inputSecurityGroups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "whitelistRules": [
      {
        "Cidr": {}
      }
    ]
  }'
```

`POST /prod/inputSecurityGroups`

Creates a Input Security Group

> Body parameter

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "whitelistRules": [
    {
      "Cidr": {}
    }
  ]
}
```

<h3 id="createinputsecuritygroup-parameters">Parameters</h3>

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
|» tags|body|object|false|Placeholder documentation for Tags|
|» » **additionalProperties**|body|[__string](#schema__string)|false|Placeholder documentation for __string|
|» whitelistRules|body|[[InputWhitelistRuleCidr](#schemainputwhitelistrulecidr)]|false|Placeholder documentation for __listOfInputWhitelistRuleCidr|

> Example responses

> 200 Response

```json
{
  "SecurityGroup": {
    "Arn": {},
    "Id": {},
    "Inputs": {},
    "State": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "WhitelistRules": {}
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

<h3 id="createinputsecuritygroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateInputSecurityGroupResponse](#schemacreateinputsecuritygroupresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|484|484|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListMultiplexes

<a id="opIdListMultiplexes"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/multiplexes \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /prod/multiplexes`

Retrieve a list of the existing multiplexes.

<h3 id="listmultiplexes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|The maximum number of items to return.|
|nextToken|query|string|false|The token to retrieve the next page of results.|
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
  "Multiplexes": {},
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

<h3 id="listmultiplexes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListMultiplexesResponse](#schemalistmultiplexesresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|484|484|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateMultiplex

<a id="opIdCreateMultiplex"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/multiplexes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "availabilityZones": [
      "string"
    ],
    "multiplexSettings": {
      "MaximumVideoBufferDelayMilliseconds": {},
      "TransportStreamBitrate": {},
      "TransportStreamId": {},
      "TransportStreamReservedBitrate": {}
    },
    "name": "string",
    "requestId": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /prod/multiplexes`

Create a new multiplex.

> Body parameter

```json
{
  "availabilityZones": [
    "string"
  ],
  "multiplexSettings": {
    "MaximumVideoBufferDelayMilliseconds": {},
    "TransportStreamBitrate": {},
    "TransportStreamId": {},
    "TransportStreamReservedBitrate": {}
  },
  "name": "string",
  "requestId": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createmultiplex-parameters">Parameters</h3>

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
|» availabilityZones|body|[[__string](#schema__string)]|true|Placeholder documentation for __listOf__string|
|» multiplexSettings|body|object|true|Contains configuration for a Multiplex event|
|» » MaximumVideoBufferDelayMilliseconds|body|object|false|none|
|» » TransportStreamBitrate|body|object|false|none|
|» » TransportStreamId|body|object|false|none|
|» » TransportStreamReservedBitrate|body|object|false|none|
|» name|body|string|true|Placeholder documentation for __string|
|» requestId|body|string|true|Placeholder documentation for __string|
|» tags|body|object|false|Placeholder documentation for Tags|
|» » **additionalProperties**|body|[__string](#schema__string)|false|Placeholder documentation for __string|

> Example responses

> 201 Response

```json
{
  "Multiplex": {
    "Arn": {},
    "AvailabilityZones": {},
    "Destinations": {},
    "Id": {},
    "MultiplexSettings": {
      "MaximumVideoBufferDelayMilliseconds": {},
      "TransportStreamBitrate": {},
      "TransportStreamId": {},
      "TransportStreamReservedBitrate": {}
    },
    "Name": {},
    "PipelinesRunningCount": {},
    "ProgramCount": {},
    "State": {},
    "Tags": {
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

> 487 Response

```json
null
```

<h3 id="createmultiplex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateMultiplexResponse](#schemacreatemultiplexresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnprocessableEntityException|[UnprocessableEntityException](#schemaunprocessableentityexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|485|485|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|487|487|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListMultiplexPrograms

<a id="opIdListMultiplexPrograms"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/multiplexes/string/programs \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /prod/multiplexes/{multiplexId}/programs`

List the programs that currently exist for a specific multiplex.

<h3 id="listmultiplexprograms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|The maximum number of items to return.|
|multiplexId|path|string|true|The ID of the multiplex that the programs belong to.|
|nextToken|query|string|false|The token to retrieve the next page of results.|
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
  "MultiplexPrograms": {},
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

<h3 id="listmultiplexprograms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListMultiplexProgramsResponse](#schemalistmultiplexprogramsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateMultiplexProgram

<a id="opIdCreateMultiplexProgram"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/multiplexes/string/programs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "multiplexProgramSettings": {
      "PreferredChannelPipeline": {},
      "ProgramNumber": {},
      "ServiceDescriptor": {
        "ProviderName": {},
        "ServiceName": {}
      },
      "VideoSettings": {
        "ConstantBitrate": {},
        "StatmuxSettings": {
          "MaximumBitrate": {},
          "MinimumBitrate": {},
          "Priority": {}
        }
      }
    },
    "programName": "string",
    "requestId": "string"
  }'
```

`POST /prod/multiplexes/{multiplexId}/programs`

Create a new program in the multiplex.

> Body parameter

```json
{
  "multiplexProgramSettings": {
    "PreferredChannelPipeline": {},
    "ProgramNumber": {},
    "ServiceDescriptor": {
      "ProviderName": {},
      "ServiceName": {}
    },
    "VideoSettings": {
      "ConstantBitrate": {},
      "StatmuxSettings": {
        "MaximumBitrate": {},
        "MinimumBitrate": {},
        "Priority": {}
      }
    }
  },
  "programName": "string",
  "requestId": "string"
}
```

<h3 id="createmultiplexprogram-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|multiplexId|path|string|true|ID of the multiplex where the program is to be created.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» multiplexProgramSettings|body|object|true|Multiplex Program settings configuration.|
|» » PreferredChannelPipeline|body|object|false|none|
|» » ProgramNumber|body|object|false|none|
|» » ServiceDescriptor|body|object|false|none|
|» » » ProviderName|body|object|true|none|
|» » » ServiceName|body|object|true|none|
|» » VideoSettings|body|object|false|none|
|» » » ConstantBitrate|body|object|false|none|
|» » » StatmuxSettings|body|object|false|none|
|» » » » MaximumBitrate|body|object|false|none|
|» » » » MinimumBitrate|body|object|false|none|
|» » » » Priority|body|object|false|none|
|» programName|body|string|true|Placeholder documentation for __string|
|» requestId|body|string|true|Placeholder documentation for __string|

> Example responses

> 201 Response

```json
{
  "MultiplexProgram": {
    "ChannelId": {},
    "MultiplexProgramSettings": {
      "PreferredChannelPipeline": {},
      "ProgramNumber": {},
      "ServiceDescriptor": {
        "ProviderName": {},
        "ServiceName": {}
      },
      "VideoSettings": {
        "ConstantBitrate": {},
        "StatmuxSettings": {
          "MaximumBitrate": {},
          "MinimumBitrate": {},
          "Priority": {}
        }
      }
    },
    "PacketIdentifiersMap": {
      "AudioPids": {},
      "DvbSubPids": {},
      "DvbTeletextPid": {},
      "EtvPlatformPid": {},
      "EtvSignalPid": {},
      "KlvDataPids": {},
      "PcrPid": {},
      "PmtPid": {},
      "PrivateMetadataPid": {},
      "Scte27Pids": {},
      "Scte35Pid": {},
      "TimedMetadataPid": {},
      "VideoPid": {}
    },
    "PipelineDetails": {},
    "ProgramName": {}
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

> 487 Response

```json
null
```

<h3 id="createmultiplexprogram-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateMultiplexProgramResponse](#schemacreatemultiplexprogramresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnprocessableEntityException|[UnprocessableEntityException](#schemaunprocessableentityexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|485|485|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|487|487|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreatePartnerInput

<a id="opIdCreatePartnerInput"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/inputs/string/partners \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "requestId": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /prod/inputs/{inputId}/partners`

Create a partner input

> Body parameter

```json
{
  "requestId": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createpartnerinput-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inputId|path|string|true|Unique ID of the input.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» requestId|body|string|false|Placeholder documentation for __string|
|» tags|body|object|false|Placeholder documentation for Tags|
|» » **additionalProperties**|body|[__string](#schema__string)|false|Placeholder documentation for __string|

> Example responses

> 201 Response

```json
{
  "Input": {
    "Arn": {},
    "AttachedChannels": {},
    "Destinations": {},
    "Id": {},
    "InputClass": {},
    "InputDevices": {},
    "InputPartnerIds": {},
    "InputSourceType": {},
    "MediaConnectFlows": {},
    "Name": {},
    "RoleArn": {},
    "SecurityGroups": {},
    "Sources": {},
    "State": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "Type": {}
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

<h3 id="createpartnerinput-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreatePartnerInputResponse](#schemacreatepartnerinputresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|484|484|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /prod/tags/{resource-arn}`

Produces list of tags that have been created for a resource

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource-arn|path|string|true|none|
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
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateTags

<a id="opIdCreateTags"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/tags/string \
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

`POST /prod/tags/{resource-arn}`

Create tags for a resource

> Body parameter

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createtags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource-arn|path|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tags|body|object|false|Placeholder documentation for Tags|
|» » **additionalProperties**|body|[__string](#schema__string)|false|Placeholder documentation for __string|

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

<h3 id="createtags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeChannel

<a id="opIdDescribeChannel"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/channels/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /prod/channels/{channelId}`

Gets details about a channel

<h3 id="describechannel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelId|path|string|true|channel ID|
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
  "Arn": {},
  "CdiInputSpecification": {
    "Resolution": {}
  },
  "ChannelClass": {},
  "Destinations": {},
  "EgressEndpoints": {},
  "EncoderSettings": {
    "AudioDescriptions": {},
    "AvailBlanking": {
      "AvailBlankingImage": {
        "PasswordParam": {},
        "Uri": {},
        "Username": {}
      },
      "State": {}
    },
    "AvailConfiguration": {
      "AvailSettings": {
        "Esam": {
          "AcquisitionPointId": {},
          "AdAvailOffset": {},
          "PasswordParam": {},
          "PoisEndpoint": {},
          "Username": {},
          "ZoneIdentity": {}
        },
        "Scte35SpliceInsert": {
          "AdAvailOffset": {},
          "NoRegionalBlackoutFlag": {},
          "WebDeliveryAllowedFlag": {}
        },
        "Scte35TimeSignalApos": {
          "AdAvailOffset": {},
          "NoRegionalBlackoutFlag": {},
          "WebDeliveryAllowedFlag": {}
        }
      }
    },
    "BlackoutSlate": {
      "BlackoutSlateImage": {
        "PasswordParam": {},
        "Uri": {},
        "Username": {}
      },
      "NetworkEndBlackout": {},
      "NetworkEndBlackoutImage": {
        "PasswordParam": {},
        "Uri": {},
        "Username": {}
      },
      "NetworkId": {},
      "State": {}
    },
    "CaptionDescriptions": {},
    "FeatureActivations": {
      "InputPrepareScheduleActions": {}
    },
    "GlobalConfiguration": {
      "InitialAudioGain": {},
      "InputEndAction": {},
      "InputLossBehavior": {
        "BlackFrameMsec": {},
        "InputLossImageColor": {},
        "InputLossImageSlate": {
          "PasswordParam": {},
          "Uri": {},
          "Username": {}
        },
        "InputLossImageType": {},
        "RepeatFrameMsec": {}
      },
      "OutputLockingMode": {},
      "OutputTimingSource": {},
      "SupportLowFramerateInputs": {}
    },
    "MotionGraphicsConfiguration": {
      "MotionGraphicsInsertion": {},
      "MotionGraphicsSettings": {
        "HtmlMotionGraphicsSettings": {}
      }
    },
    "NielsenConfiguration": {
      "DistributorId": {},
      "NielsenPcmToId3Tagging": {}
    },
    "OutputGroups": {},
    "TimecodeConfig": {
      "Source": {},
      "SyncThreshold": {}
    },
    "VideoDescriptions": {}
  },
  "Id": {},
  "InputAttachments": {},
  "InputSpecification": {
    "Codec": {},
    "MaximumBitrate": {},
    "Resolution": {}
  },
  "LogLevel": {},
  "Maintenance": {
    "MaintenanceDay": {},
    "MaintenanceDeadline": {},
    "MaintenanceScheduledDate": {},
    "MaintenanceStartTime": {}
  },
  "Name": {},
  "PipelineDetails": {},
  "PipelinesRunningCount": {},
  "RoleArn": {},
  "State": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Vpc": {
    "AvailabilityZones": {},
    "NetworkInterfaceIds": {},
    "SecurityGroupIds": {},
    "SubnetIds": {}
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

<h3 id="describechannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeChannelResponse](#schemadescribechannelresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateChannel

<a id="opIdUpdateChannel"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/channels/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "cdiInputSpecification": {
      "Resolution": {}
    },
    "destinations": [
      {
        "Id": {},
        "MediaPackageSettings": {},
        "MultiplexSettings": {
          "MultiplexId": {},
          "ProgramName": {}
        },
        "Settings": {}
      }
    ],
    "encoderSettings": {
      "AudioDescriptions": {},
      "AvailBlanking": {
        "AvailBlankingImage": {
          "PasswordParam": {},
          "Uri": {},
          "Username": {}
        },
        "State": {}
      },
      "AvailConfiguration": {
        "AvailSettings": {
          "Esam": {
            "AcquisitionPointId": {},
            "AdAvailOffset": {},
            "PasswordParam": {},
            "PoisEndpoint": {},
            "Username": {},
            "ZoneIdentity": {}
          },
          "Scte35SpliceInsert": {
            "AdAvailOffset": {},
            "NoRegionalBlackoutFlag": {},
            "WebDeliveryAllowedFlag": {}
          },
          "Scte35TimeSignalApos": {
            "AdAvailOffset": {},
            "NoRegionalBlackoutFlag": {},
            "WebDeliveryAllowedFlag": {}
          }
        }
      },
      "BlackoutSlate": {
        "BlackoutSlateImage": {
          "PasswordParam": {},
          "Uri": {},
          "Username": {}
        },
        "NetworkEndBlackout": {},
        "NetworkEndBlackoutImage": {
          "PasswordParam": {},
          "Uri": {},
          "Username": {}
        },
        "NetworkId": {},
        "State": {}
      },
      "CaptionDescriptions": {},
      "FeatureActivations": {
        "InputPrepareScheduleActions": {}
      },
      "GlobalConfiguration": {
        "InitialAudioGain": {},
        "InputEndAction": {},
        "InputLossBehavior": {
          "BlackFrameMsec": {},
          "InputLossImageColor": {},
          "InputLossImageSlate": {
            "PasswordParam": {},
            "Uri": {},
            "Username": {}
          },
          "InputLossImageType": {},
          "RepeatFrameMsec": {}
        },
        "OutputLockingMode": {},
        "OutputTimingSource": {},
        "SupportLowFramerateInputs": {}
      },
      "MotionGraphicsConfiguration": {
        "MotionGraphicsInsertion": {},
        "MotionGraphicsSettings": {
          "HtmlMotionGraphicsSettings": {}
        }
      },
      "NielsenConfiguration": {
        "DistributorId": {},
        "NielsenPcmToId3Tagging": {}
      },
      "OutputGroups": {},
      "TimecodeConfig": {
        "Source": {},
        "SyncThreshold": {}
      },
      "VideoDescriptions": {}
    },
    "inputAttachments": [
      {
        "AutomaticInputFailoverSettings": {
          "ErrorClearTimeMsec": {},
          "FailoverConditions": {},
          "InputPreference": {},
          "SecondaryInputId": {}
        },
        "InputAttachmentName": {},
        "InputId": {},
        "InputSettings": {
          "AudioSelectors": {},
          "CaptionSelectors": {},
          "DeblockFilter": {},
          "DenoiseFilter": {},
          "FilterStrength": {},
          "InputFilter": {},
          "NetworkInputSettings": {
            "HlsInputSettings": {
              "Bandwidth": {},
              "BufferSegments": {},
              "Retries": {},
              "RetryInterval": {},
              "Scte35Source": {}
            },
            "ServerValidation": {}
          },
          "Scte35Pid": {},
          "Smpte2038DataPreference": {},
          "SourceEndBehavior": {},
          "VideoSelector": {
            "ColorSpace": {},
            "ColorSpaceSettings": {
              "Hdr10Settings": {
                "MaxCll": {},
                "MaxFall": {}
              }
            },
            "ColorSpaceUsage": {},
            "SelectorSettings": {
              "VideoSelectorPid": {
                "Pid": {}
              },
              "VideoSelectorProgramId": {
                "ProgramId": {}
              }
            }
          }
        }
      }
    ],
    "inputSpecification": {
      "Codec": {},
      "MaximumBitrate": {},
      "Resolution": {}
    },
    "logLevel": "ERROR",
    "maintenance": {
      "MaintenanceDay": {},
      "MaintenanceScheduledDate": {},
      "MaintenanceStartTime": {}
    },
    "name": "string",
    "roleArn": "string"
  }'
```

`PUT /prod/channels/{channelId}`

Updates a channel.

> Body parameter

```json
{
  "cdiInputSpecification": {
    "Resolution": {}
  },
  "destinations": [
    {
      "Id": {},
      "MediaPackageSettings": {},
      "MultiplexSettings": {
        "MultiplexId": {},
        "ProgramName": {}
      },
      "Settings": {}
    }
  ],
  "encoderSettings": {
    "AudioDescriptions": {},
    "AvailBlanking": {
      "AvailBlankingImage": {
        "PasswordParam": {},
        "Uri": {},
        "Username": {}
      },
      "State": {}
    },
    "AvailConfiguration": {
      "AvailSettings": {
        "Esam": {
          "AcquisitionPointId": {},
          "AdAvailOffset": {},
          "PasswordParam": {},
          "PoisEndpoint": {},
          "Username": {},
          "ZoneIdentity": {}
        },
        "Scte35SpliceInsert": {
          "AdAvailOffset": {},
          "NoRegionalBlackoutFlag": {},
          "WebDeliveryAllowedFlag": {}
        },
        "Scte35TimeSignalApos": {
          "AdAvailOffset": {},
          "NoRegionalBlackoutFlag": {},
          "WebDeliveryAllowedFlag": {}
        }
      }
    },
    "BlackoutSlate": {
      "BlackoutSlateImage": {
        "PasswordParam": {},
        "Uri": {},
        "Username": {}
      },
      "NetworkEndBlackout": {},
      "NetworkEndBlackoutImage": {
        "PasswordParam": {},
        "Uri": {},
        "Username": {}
      },
      "NetworkId": {},
      "State": {}
    },
    "CaptionDescriptions": {},
    "FeatureActivations": {
      "InputPrepareScheduleActions": {}
    },
    "GlobalConfiguration": {
      "InitialAudioGain": {},
      "InputEndAction": {},
      "InputLossBehavior": {
        "BlackFrameMsec": {},
        "InputLossImageColor": {},
        "InputLossImageSlate": {
          "PasswordParam": {},
          "Uri": {},
          "Username": {}
        },
        "InputLossImageType": {},
        "RepeatFrameMsec": {}
      },
      "OutputLockingMode": {},
      "OutputTimingSource": {},
      "SupportLowFramerateInputs": {}
    },
    "MotionGraphicsConfiguration": {
      "MotionGraphicsInsertion": {},
      "MotionGraphicsSettings": {
        "HtmlMotionGraphicsSettings": {}
      }
    },
    "NielsenConfiguration": {
      "DistributorId": {},
      "NielsenPcmToId3Tagging": {}
    },
    "OutputGroups": {},
    "TimecodeConfig": {
      "Source": {},
      "SyncThreshold": {}
    },
    "VideoDescriptions": {}
  },
  "inputAttachments": [
    {
      "AutomaticInputFailoverSettings": {
        "ErrorClearTimeMsec": {},
        "FailoverConditions": {},
        "InputPreference": {},
        "SecondaryInputId": {}
      },
      "InputAttachmentName": {},
      "InputId": {},
      "InputSettings": {
        "AudioSelectors": {},
        "CaptionSelectors": {},
        "DeblockFilter": {},
        "DenoiseFilter": {},
        "FilterStrength": {},
        "InputFilter": {},
        "NetworkInputSettings": {
          "HlsInputSettings": {
            "Bandwidth": {},
            "BufferSegments": {},
            "Retries": {},
            "RetryInterval": {},
            "Scte35Source": {}
          },
          "ServerValidation": {}
        },
        "Scte35Pid": {},
        "Smpte2038DataPreference": {},
        "SourceEndBehavior": {},
        "VideoSelector": {
          "ColorSpace": {},
          "ColorSpaceSettings": {
            "Hdr10Settings": {
              "MaxCll": {},
              "MaxFall": {}
            }
          },
          "ColorSpaceUsage": {},
          "SelectorSettings": {
            "VideoSelectorPid": {
              "Pid": {}
            },
            "VideoSelectorProgramId": {
              "ProgramId": {}
            }
          }
        }
      }
    }
  ],
  "inputSpecification": {
    "Codec": {},
    "MaximumBitrate": {},
    "Resolution": {}
  },
  "logLevel": "ERROR",
  "maintenance": {
    "MaintenanceDay": {},
    "MaintenanceScheduledDate": {},
    "MaintenanceStartTime": {}
  },
  "name": "string",
  "roleArn": "string"
}
```

<h3 id="updatechannel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelId|path|string|true|channel ID|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» cdiInputSpecification|body|object|false|Placeholder documentation for CdiInputSpecification|
|» » Resolution|body|object|false|none|
|» destinations|body|[[OutputDestination](#schemaoutputdestination)]|false|Placeholder documentation for __listOfOutputDestination|
|» encoderSettings|body|object|false|Encoder Settings|
|» » AudioDescriptions|body|object|false|none|
|» » AvailBlanking|body|object|false|none|
|» » » AvailBlankingImage|body|object|false|none|
|» » » » PasswordParam|body|object|false|none|
|» » » » Uri|body|object|true|none|
|» » » » Username|body|object|false|none|
|» » » State|body|object|false|none|
|» » AvailConfiguration|body|object|false|none|
|» » » AvailSettings|body|object|false|none|
|» » » » Esam|body|object|false|none|
|» » » » » AcquisitionPointId|body|object|true|none|
|» » » » » AdAvailOffset|body|object|false|none|
|» » » » » PasswordParam|body|object|false|none|
|» » » » » PoisEndpoint|body|object|true|none|
|» » » » » Username|body|object|false|none|
|» » » » » ZoneIdentity|body|object|false|none|
|» » » » Scte35SpliceInsert|body|object|false|none|
|» » » » » AdAvailOffset|body|object|false|none|
|» » » » » NoRegionalBlackoutFlag|body|object|false|none|
|» » » » » WebDeliveryAllowedFlag|body|object|false|none|
|» » » » Scte35TimeSignalApos|body|object|false|none|
|» » » » » AdAvailOffset|body|object|false|none|
|» » » » » NoRegionalBlackoutFlag|body|object|false|none|
|» » » » » WebDeliveryAllowedFlag|body|object|false|none|
|» » BlackoutSlate|body|object|false|none|
|» » » BlackoutSlateImage|body|object|false|none|
|» » » » PasswordParam|body|object|false|none|
|» » » » Uri|body|object|true|none|
|» » » » Username|body|object|false|none|
|» » » NetworkEndBlackout|body|object|false|none|
|» » » NetworkEndBlackoutImage|body|object|false|none|
|» » » » PasswordParam|body|object|false|none|
|» » » » Uri|body|object|true|none|
|» » » » Username|body|object|false|none|
|» » » NetworkId|body|object|false|none|
|» » » State|body|object|false|none|
|» » CaptionDescriptions|body|object|false|none|
|» » FeatureActivations|body|object|false|none|
|» » » InputPrepareScheduleActions|body|object|false|none|
|» » GlobalConfiguration|body|object|false|none|
|» » » InitialAudioGain|body|object|false|none|
|» » » InputEndAction|body|object|false|none|
|» » » InputLossBehavior|body|object|false|none|
|» » » » BlackFrameMsec|body|object|false|none|
|» » » » InputLossImageColor|body|object|false|none|
|» » » » InputLossImageSlate|body|object|false|none|
|» » » » » PasswordParam|body|object|false|none|
|» » » » » Uri|body|object|true|none|
|» » » » » Username|body|object|false|none|
|» » » » InputLossImageType|body|object|false|none|
|» » » » RepeatFrameMsec|body|object|false|none|
|» » » OutputLockingMode|body|object|false|none|
|» » » OutputTimingSource|body|object|false|none|
|» » » SupportLowFramerateInputs|body|object|false|none|
|» » MotionGraphicsConfiguration|body|object|false|none|
|» » » MotionGraphicsInsertion|body|object|false|none|
|» » » MotionGraphicsSettings|body|object|true|none|
|» » » » HtmlMotionGraphicsSettings|body|object|false|none|
|» » NielsenConfiguration|body|object|false|none|
|» » » DistributorId|body|object|false|none|
|» » » NielsenPcmToId3Tagging|body|object|false|none|
|» » OutputGroups|body|object|false|none|
|» » TimecodeConfig|body|object|false|none|
|» » » Source|body|object|true|none|
|» » » SyncThreshold|body|object|false|none|
|» » VideoDescriptions|body|object|false|none|
|» inputAttachments|body|[[InputAttachment](#schemainputattachment)]|false|Placeholder documentation for __listOfInputAttachment|
|» inputSpecification|body|object|false|Placeholder documentation for InputSpecification|
|» » Codec|body|object|false|none|
|» » MaximumBitrate|body|object|false|none|
|» » Resolution|body|object|false|none|
|» logLevel|body|string|false|The log level the user wants for their channel.|
|» maintenance|body|object|false|Placeholder documentation for MaintenanceUpdateSettings|
|» » MaintenanceDay|body|object|false|none|
|» » MaintenanceScheduledDate|body|object|false|none|
|» » MaintenanceStartTime|body|object|false|none|
|» name|body|string|false|Placeholder documentation for __string|
|» roleArn|body|string|false|Placeholder documentation for __string|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» logLevel|ERROR|
|» logLevel|WARNING|
|» logLevel|INFO|
|» logLevel|DEBUG|
|» logLevel|DISABLED|

> Example responses

> 200 Response

```json
{
  "Channel": {
    "Arn": {},
    "CdiInputSpecification": {
      "Resolution": {}
    },
    "ChannelClass": {},
    "Destinations": {},
    "EgressEndpoints": {},
    "EncoderSettings": {
      "AudioDescriptions": {},
      "AvailBlanking": {
        "AvailBlankingImage": {
          "PasswordParam": {},
          "Uri": {},
          "Username": {}
        },
        "State": {}
      },
      "AvailConfiguration": {
        "AvailSettings": {
          "Esam": {
            "AcquisitionPointId": {},
            "AdAvailOffset": {},
            "PasswordParam": {},
            "PoisEndpoint": {},
            "Username": {},
            "ZoneIdentity": {}
          },
          "Scte35SpliceInsert": {
            "AdAvailOffset": {},
            "NoRegionalBlackoutFlag": {},
            "WebDeliveryAllowedFlag": {}
          },
          "Scte35TimeSignalApos": {
            "AdAvailOffset": {},
            "NoRegionalBlackoutFlag": {},
            "WebDeliveryAllowedFlag": {}
          }
        }
      },
      "BlackoutSlate": {
        "BlackoutSlateImage": {
          "PasswordParam": {},
          "Uri": {},
          "Username": {}
        },
        "NetworkEndBlackout": {},
        "NetworkEndBlackoutImage": {
          "PasswordParam": {},
          "Uri": {},
          "Username": {}
        },
        "NetworkId": {},
        "State": {}
      },
      "CaptionDescriptions": {},
      "FeatureActivations": {
        "InputPrepareScheduleActions": {}
      },
      "GlobalConfiguration": {
        "InitialAudioGain": {},
        "InputEndAction": {},
        "InputLossBehavior": {
          "BlackFrameMsec": {},
          "InputLossImageColor": {},
          "InputLossImageSlate": {
            "PasswordParam": {},
            "Uri": {},
            "Username": {}
          },
          "InputLossImageType": {},
          "RepeatFrameMsec": {}
        },
        "OutputLockingMode": {},
        "OutputTimingSource": {},
        "SupportLowFramerateInputs": {}
      },
      "MotionGraphicsConfiguration": {
        "MotionGraphicsInsertion": {},
        "MotionGraphicsSettings": {
          "HtmlMotionGraphicsSettings": {}
        }
      },
      "NielsenConfiguration": {
        "DistributorId": {},
        "NielsenPcmToId3Tagging": {}
      },
      "OutputGroups": {},
      "TimecodeConfig": {
        "Source": {},
        "SyncThreshold": {}
      },
      "VideoDescriptions": {}
    },
    "Id": {},
    "InputAttachments": {},
    "InputSpecification": {
      "Codec": {},
      "MaximumBitrate": {},
      "Resolution": {}
    },
    "LogLevel": {},
    "Maintenance": {
      "MaintenanceDay": {},
      "MaintenanceDeadline": {},
      "MaintenanceScheduledDate": {},
      "MaintenanceStartTime": {}
    },
    "Name": {},
    "PipelineDetails": {},
    "PipelinesRunningCount": {},
    "RoleArn": {},
    "State": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "Vpc": {
      "AvailabilityZones": {},
      "NetworkInterfaceIds": {},
      "SecurityGroupIds": {},
      "SubnetIds": {}
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

<h3 id="updatechannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateChannelResponse](#schemaupdatechannelresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnprocessableEntityException|[UnprocessableEntityException](#schemaunprocessableentityexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|485|485|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteChannel

<a id="opIdDeleteChannel"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/channels/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /prod/channels/{channelId}`

Starts deletion of channel. The associated outputs are also deleted.

<h3 id="deletechannel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelId|path|string|true|Unique ID of the channel.|
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
  "Arn": {},
  "CdiInputSpecification": {
    "Resolution": {}
  },
  "ChannelClass": {},
  "Destinations": {},
  "EgressEndpoints": {},
  "EncoderSettings": {
    "AudioDescriptions": {},
    "AvailBlanking": {
      "AvailBlankingImage": {
        "PasswordParam": {},
        "Uri": {},
        "Username": {}
      },
      "State": {}
    },
    "AvailConfiguration": {
      "AvailSettings": {
        "Esam": {
          "AcquisitionPointId": {},
          "AdAvailOffset": {},
          "PasswordParam": {},
          "PoisEndpoint": {},
          "Username": {},
          "ZoneIdentity": {}
        },
        "Scte35SpliceInsert": {
          "AdAvailOffset": {},
          "NoRegionalBlackoutFlag": {},
          "WebDeliveryAllowedFlag": {}
        },
        "Scte35TimeSignalApos": {
          "AdAvailOffset": {},
          "NoRegionalBlackoutFlag": {},
          "WebDeliveryAllowedFlag": {}
        }
      }
    },
    "BlackoutSlate": {
      "BlackoutSlateImage": {
        "PasswordParam": {},
        "Uri": {},
        "Username": {}
      },
      "NetworkEndBlackout": {},
      "NetworkEndBlackoutImage": {
        "PasswordParam": {},
        "Uri": {},
        "Username": {}
      },
      "NetworkId": {},
      "State": {}
    },
    "CaptionDescriptions": {},
    "FeatureActivations": {
      "InputPrepareScheduleActions": {}
    },
    "GlobalConfiguration": {
      "InitialAudioGain": {},
      "InputEndAction": {},
      "InputLossBehavior": {
        "BlackFrameMsec": {},
        "InputLossImageColor": {},
        "InputLossImageSlate": {
          "PasswordParam": {},
          "Uri": {},
          "Username": {}
        },
        "InputLossImageType": {},
        "RepeatFrameMsec": {}
      },
      "OutputLockingMode": {},
      "OutputTimingSource": {},
      "SupportLowFramerateInputs": {}
    },
    "MotionGraphicsConfiguration": {
      "MotionGraphicsInsertion": {},
      "MotionGraphicsSettings": {
        "HtmlMotionGraphicsSettings": {}
      }
    },
    "NielsenConfiguration": {
      "DistributorId": {},
      "NielsenPcmToId3Tagging": {}
    },
    "OutputGroups": {},
    "TimecodeConfig": {
      "Source": {},
      "SyncThreshold": {}
    },
    "VideoDescriptions": {}
  },
  "Id": {},
  "InputAttachments": {},
  "InputSpecification": {
    "Codec": {},
    "MaximumBitrate": {},
    "Resolution": {}
  },
  "LogLevel": {},
  "Maintenance": {
    "MaintenanceDay": {},
    "MaintenanceDeadline": {},
    "MaintenanceScheduledDate": {},
    "MaintenanceStartTime": {}
  },
  "Name": {},
  "PipelineDetails": {},
  "PipelinesRunningCount": {},
  "RoleArn": {},
  "State": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Vpc": {
    "AvailabilityZones": {},
    "NetworkInterfaceIds": {},
    "SecurityGroupIds": {},
    "SubnetIds": {}
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

> 487 Response

```json
null
```

<h3 id="deletechannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteChannelResponse](#schemadeletechannelresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|487|487|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeInput

<a id="opIdDescribeInput"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/inputs/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /prod/inputs/{inputId}`

Produces details about an input

<h3 id="describeinput-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inputId|path|string|true|Unique ID of the input|
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
  "Arn": {},
  "AttachedChannels": {},
  "Destinations": {},
  "Id": {},
  "InputClass": {},
  "InputDevices": {},
  "InputPartnerIds": {},
  "InputSourceType": {},
  "MediaConnectFlows": {},
  "Name": {},
  "RoleArn": {},
  "SecurityGroups": {},
  "Sources": {},
  "State": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Type": {}
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

<h3 id="describeinput-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeInputResponse](#schemadescribeinputresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateInput

<a id="opIdUpdateInput"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/inputs/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "destinations": [
      {
        "StreamName": {}
      }
    ],
    "inputDevices": [
      {
        "Id": {}
      }
    ],
    "inputSecurityGroups": [
      "string"
    ],
    "mediaConnectFlows": [
      {
        "FlowArn": {}
      }
    ],
    "name": "string",
    "roleArn": "string",
    "sources": [
      {
        "PasswordParam": {},
        "Url": {},
        "Username": {}
      }
    ]
  }'
```

`PUT /prod/inputs/{inputId}`

Updates an input.

> Body parameter

```json
{
  "destinations": [
    {
      "StreamName": {}
    }
  ],
  "inputDevices": [
    {
      "Id": {}
    }
  ],
  "inputSecurityGroups": [
    "string"
  ],
  "mediaConnectFlows": [
    {
      "FlowArn": {}
    }
  ],
  "name": "string",
  "roleArn": "string",
  "sources": [
    {
      "PasswordParam": {},
      "Url": {},
      "Username": {}
    }
  ]
}
```

<h3 id="updateinput-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inputId|path|string|true|Unique ID of the input.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» destinations|body|[[InputDestinationRequest](#schemainputdestinationrequest)]|false|Placeholder documentation for __listOfInputDestinationRequest|
|» inputDevices|body|[[InputDeviceRequest](#schemainputdevicerequest)]|false|Placeholder documentation for __listOfInputDeviceRequest|
|» inputSecurityGroups|body|[[__string](#schema__string)]|false|Placeholder documentation for __listOf__string|
|» mediaConnectFlows|body|[[MediaConnectFlowRequest](#schemamediaconnectflowrequest)]|false|Placeholder documentation for __listOfMediaConnectFlowRequest|
|» name|body|string|false|Placeholder documentation for __string|
|» roleArn|body|string|false|Placeholder documentation for __string|
|» sources|body|[[InputSourceRequest](#schemainputsourcerequest)]|false|Placeholder documentation for __listOfInputSourceRequest|

> Example responses

> 200 Response

```json
{
  "Input": {
    "Arn": {},
    "AttachedChannels": {},
    "Destinations": {},
    "Id": {},
    "InputClass": {},
    "InputDevices": {},
    "InputPartnerIds": {},
    "InputSourceType": {},
    "MediaConnectFlows": {},
    "Name": {},
    "RoleArn": {},
    "SecurityGroups": {},
    "Sources": {},
    "State": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "Type": {}
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

<h3 id="updateinput-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateInputResponse](#schemaupdateinputresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteInput

<a id="opIdDeleteInput"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/inputs/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /prod/inputs/{inputId}`

Deletes the input end point

<h3 id="deleteinput-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inputId|path|string|true|Unique ID of the input|
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

> 487 Response

```json
null
```

<h3 id="deleteinput-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteInputResponse](#schemadeleteinputresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|487|487|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeInputSecurityGroup

<a id="opIdDescribeInputSecurityGroup"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/inputSecurityGroups/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /prod/inputSecurityGroups/{inputSecurityGroupId}`

Produces a summary of an Input Security Group

<h3 id="describeinputsecuritygroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inputSecurityGroupId|path|string|true|The id of the Input Security Group to describe|
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
  "Arn": {},
  "Id": {},
  "Inputs": {},
  "State": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "WhitelistRules": {}
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

<h3 id="describeinputsecuritygroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeInputSecurityGroupResponse](#schemadescribeinputsecuritygroupresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateInputSecurityGroup

<a id="opIdUpdateInputSecurityGroup"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/inputSecurityGroups/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "whitelistRules": [
      {
        "Cidr": {}
      }
    ]
  }'
```

`PUT /prod/inputSecurityGroups/{inputSecurityGroupId}`

Update an Input Security Group's Whilelists.

> Body parameter

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "whitelistRules": [
    {
      "Cidr": {}
    }
  ]
}
```

<h3 id="updateinputsecuritygroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inputSecurityGroupId|path|string|true|The id of the Input Security Group to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tags|body|object|false|Placeholder documentation for Tags|
|» » **additionalProperties**|body|[__string](#schema__string)|false|Placeholder documentation for __string|
|» whitelistRules|body|[[InputWhitelistRuleCidr](#schemainputwhitelistrulecidr)]|false|Placeholder documentation for __listOfInputWhitelistRuleCidr|

> Example responses

> 200 Response

```json
{
  "SecurityGroup": {
    "Arn": {},
    "Id": {},
    "Inputs": {},
    "State": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "WhitelistRules": {}
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

<h3 id="updateinputsecuritygroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateInputSecurityGroupResponse](#schemaupdateinputsecuritygroupresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteInputSecurityGroup

<a id="opIdDeleteInputSecurityGroup"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/inputSecurityGroups/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /prod/inputSecurityGroups/{inputSecurityGroupId}`

Deletes an Input Security Group

<h3 id="deleteinputsecuritygroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inputSecurityGroupId|path|string|true|The Input Security Group to delete|
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

<h3 id="deleteinputsecuritygroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteInputSecurityGroupResponse](#schemadeleteinputsecuritygroupresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeMultiplex

<a id="opIdDescribeMultiplex"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/multiplexes/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /prod/multiplexes/{multiplexId}`

Gets details about a multiplex.

<h3 id="describemultiplex-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|multiplexId|path|string|true|The ID of the multiplex.|
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
  "Arn": {},
  "AvailabilityZones": {},
  "Destinations": {},
  "Id": {},
  "MultiplexSettings": {
    "MaximumVideoBufferDelayMilliseconds": {},
    "TransportStreamBitrate": {},
    "TransportStreamId": {},
    "TransportStreamReservedBitrate": {}
  },
  "Name": {},
  "PipelinesRunningCount": {},
  "ProgramCount": {},
  "State": {},
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

<h3 id="describemultiplex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeMultiplexResponse](#schemadescribemultiplexresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateMultiplex

<a id="opIdUpdateMultiplex"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/multiplexes/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "multiplexSettings": {
      "MaximumVideoBufferDelayMilliseconds": {},
      "TransportStreamBitrate": {},
      "TransportStreamId": {},
      "TransportStreamReservedBitrate": {}
    },
    "name": "string"
  }'
```

`PUT /prod/multiplexes/{multiplexId}`

Updates a multiplex.

> Body parameter

```json
{
  "multiplexSettings": {
    "MaximumVideoBufferDelayMilliseconds": {},
    "TransportStreamBitrate": {},
    "TransportStreamId": {},
    "TransportStreamReservedBitrate": {}
  },
  "name": "string"
}
```

<h3 id="updatemultiplex-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|multiplexId|path|string|true|ID of the multiplex to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» multiplexSettings|body|object|false|Contains configuration for a Multiplex event|
|» » MaximumVideoBufferDelayMilliseconds|body|object|false|none|
|» » TransportStreamBitrate|body|object|false|none|
|» » TransportStreamId|body|object|false|none|
|» » TransportStreamReservedBitrate|body|object|false|none|
|» name|body|string|false|Placeholder documentation for __string|

> Example responses

> 200 Response

```json
{
  "Multiplex": {
    "Arn": {},
    "AvailabilityZones": {},
    "Destinations": {},
    "Id": {},
    "MultiplexSettings": {
      "MaximumVideoBufferDelayMilliseconds": {},
      "TransportStreamBitrate": {},
      "TransportStreamId": {},
      "TransportStreamReservedBitrate": {}
    },
    "Name": {},
    "PipelinesRunningCount": {},
    "ProgramCount": {},
    "State": {},
    "Tags": {
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

> 487 Response

```json
null
```

<h3 id="updatemultiplex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateMultiplexResponse](#schemaupdatemultiplexresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnprocessableEntityException|[UnprocessableEntityException](#schemaunprocessableentityexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|485|485|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|486|486|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|487|487|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteMultiplex

<a id="opIdDeleteMultiplex"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/multiplexes/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /prod/multiplexes/{multiplexId}`

Delete a multiplex. The multiplex must be idle.

<h3 id="deletemultiplex-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|multiplexId|path|string|true|The ID of the multiplex.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 202 Response

```json
{
  "Arn": {},
  "AvailabilityZones": {},
  "Destinations": {},
  "Id": {},
  "MultiplexSettings": {
    "MaximumVideoBufferDelayMilliseconds": {},
    "TransportStreamBitrate": {},
    "TransportStreamId": {},
    "TransportStreamReservedBitrate": {}
  },
  "Name": {},
  "PipelinesRunningCount": {},
  "ProgramCount": {},
  "State": {},
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

> 487 Response

```json
null
```

<h3 id="deletemultiplex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[DeleteMultiplexResponse](#schemadeletemultiplexresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|487|487|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeMultiplexProgram

<a id="opIdDescribeMultiplexProgram"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/multiplexes/string/programs/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /prod/multiplexes/{multiplexId}/programs/{programName}`

Get the details for a program in a multiplex.

<h3 id="describemultiplexprogram-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|multiplexId|path|string|true|The ID of the multiplex that the program belongs to.|
|programName|path|string|true|The name of the program.|
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
  "ChannelId": {},
  "MultiplexProgramSettings": {
    "PreferredChannelPipeline": {},
    "ProgramNumber": {},
    "ServiceDescriptor": {
      "ProviderName": {},
      "ServiceName": {}
    },
    "VideoSettings": {
      "ConstantBitrate": {},
      "StatmuxSettings": {
        "MaximumBitrate": {},
        "MinimumBitrate": {},
        "Priority": {}
      }
    }
  },
  "PacketIdentifiersMap": {
    "AudioPids": {},
    "DvbSubPids": {},
    "DvbTeletextPid": {},
    "EtvPlatformPid": {},
    "EtvSignalPid": {},
    "KlvDataPids": {},
    "PcrPid": {},
    "PmtPid": {},
    "PrivateMetadataPid": {},
    "Scte27Pids": {},
    "Scte35Pid": {},
    "TimedMetadataPid": {},
    "VideoPid": {}
  },
  "PipelineDetails": {},
  "ProgramName": {}
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

<h3 id="describemultiplexprogram-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeMultiplexProgramResponse](#schemadescribemultiplexprogramresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateMultiplexProgram

<a id="opIdUpdateMultiplexProgram"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/multiplexes/string/programs/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "multiplexProgramSettings": {
      "PreferredChannelPipeline": {},
      "ProgramNumber": {},
      "ServiceDescriptor": {
        "ProviderName": {},
        "ServiceName": {}
      },
      "VideoSettings": {
        "ConstantBitrate": {},
        "StatmuxSettings": {
          "MaximumBitrate": {},
          "MinimumBitrate": {},
          "Priority": {}
        }
      }
    }
  }'
```

`PUT /prod/multiplexes/{multiplexId}/programs/{programName}`

Update a program in a multiplex.

> Body parameter

```json
{
  "multiplexProgramSettings": {
    "PreferredChannelPipeline": {},
    "ProgramNumber": {},
    "ServiceDescriptor": {
      "ProviderName": {},
      "ServiceName": {}
    },
    "VideoSettings": {
      "ConstantBitrate": {},
      "StatmuxSettings": {
        "MaximumBitrate": {},
        "MinimumBitrate": {},
        "Priority": {}
      }
    }
  }
}
```

<h3 id="updatemultiplexprogram-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|multiplexId|path|string|true|The ID of the multiplex of the program to update.|
|programName|path|string|true|The name of the program to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» multiplexProgramSettings|body|object|false|Multiplex Program settings configuration.|
|» » PreferredChannelPipeline|body|object|false|none|
|» » ProgramNumber|body|object|false|none|
|» » ServiceDescriptor|body|object|false|none|
|» » » ProviderName|body|object|true|none|
|» » » ServiceName|body|object|true|none|
|» » VideoSettings|body|object|false|none|
|» » » ConstantBitrate|body|object|false|none|
|» » » StatmuxSettings|body|object|false|none|
|» » » » MaximumBitrate|body|object|false|none|
|» » » » MinimumBitrate|body|object|false|none|
|» » » » Priority|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "MultiplexProgram": {
    "ChannelId": {},
    "MultiplexProgramSettings": {
      "PreferredChannelPipeline": {},
      "ProgramNumber": {},
      "ServiceDescriptor": {
        "ProviderName": {},
        "ServiceName": {}
      },
      "VideoSettings": {
        "ConstantBitrate": {},
        "StatmuxSettings": {
          "MaximumBitrate": {},
          "MinimumBitrate": {},
          "Priority": {}
        }
      }
    },
    "PacketIdentifiersMap": {
      "AudioPids": {},
      "DvbSubPids": {},
      "DvbTeletextPid": {},
      "EtvPlatformPid": {},
      "EtvSignalPid": {},
      "KlvDataPids": {},
      "PcrPid": {},
      "PmtPid": {},
      "PrivateMetadataPid": {},
      "Scte27Pids": {},
      "Scte35Pid": {},
      "TimedMetadataPid": {},
      "VideoPid": {}
    },
    "PipelineDetails": {},
    "ProgramName": {}
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

> 487 Response

```json
null
```

<h3 id="updatemultiplexprogram-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateMultiplexProgramResponse](#schemaupdatemultiplexprogramresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnprocessableEntityException|[UnprocessableEntityException](#schemaunprocessableentityexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|485|485|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|486|486|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|487|487|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteMultiplexProgram

<a id="opIdDeleteMultiplexProgram"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/multiplexes/string/programs/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /prod/multiplexes/{multiplexId}/programs/{programName}`

Delete a program from a multiplex.

<h3 id="deletemultiplexprogram-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|multiplexId|path|string|true|The ID of the multiplex that the program belongs to.|
|programName|path|string|true|The multiplex program name.|
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
  "ChannelId": {},
  "MultiplexProgramSettings": {
    "PreferredChannelPipeline": {},
    "ProgramNumber": {},
    "ServiceDescriptor": {
      "ProviderName": {},
      "ServiceName": {}
    },
    "VideoSettings": {
      "ConstantBitrate": {},
      "StatmuxSettings": {
        "MaximumBitrate": {},
        "MinimumBitrate": {},
        "Priority": {}
      }
    }
  },
  "PacketIdentifiersMap": {
    "AudioPids": {},
    "DvbSubPids": {},
    "DvbTeletextPid": {},
    "EtvPlatformPid": {},
    "EtvSignalPid": {},
    "KlvDataPids": {},
    "PcrPid": {},
    "PmtPid": {},
    "PrivateMetadataPid": {},
    "Scte27Pids": {},
    "Scte35Pid": {},
    "TimedMetadataPid": {},
    "VideoPid": {}
  },
  "PipelineDetails": {},
  "ProgramName": {}
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

> 487 Response

```json
null
```

<h3 id="deletemultiplexprogram-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteMultiplexProgramResponse](#schemadeletemultiplexprogramresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|487|487|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeReservation

<a id="opIdDescribeReservation"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/reservations/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /prod/reservations/{reservationId}`

Get details for a reservation.

<h3 id="describereservation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reservationId|path|string|true|Unique reservation ID, e.g. '1234567'|
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
  "Arn": {},
  "Count": {},
  "CurrencyCode": {},
  "Duration": {},
  "DurationUnits": {},
  "End": {},
  "FixedPrice": {},
  "Name": {},
  "OfferingDescription": {},
  "OfferingId": {},
  "OfferingType": {},
  "Region": {},
  "RenewalSettings": {
    "AutomaticRenewal": {},
    "RenewalCount": {}
  },
  "ReservationId": {},
  "ResourceSpecification": {
    "ChannelClass": {},
    "Codec": {},
    "MaximumBitrate": {},
    "MaximumFramerate": {},
    "Resolution": {},
    "ResourceType": {},
    "SpecialFeature": {},
    "VideoQuality": {}
  },
  "Start": {},
  "State": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "UsagePrice": {}
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

<h3 id="describereservation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeReservationResponse](#schemadescribereservationresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateReservation

<a id="opIdUpdateReservation"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/reservations/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "renewalSettings": {
      "AutomaticRenewal": {},
      "RenewalCount": {}
    }
  }'
```

`PUT /prod/reservations/{reservationId}`

Update reservation.

> Body parameter

```json
{
  "name": "string",
  "renewalSettings": {
    "AutomaticRenewal": {},
    "RenewalCount": {}
  }
}
```

<h3 id="updatereservation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reservationId|path|string|true|Unique reservation ID, e.g. '1234567'|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» name|body|string|false|Placeholder documentation for __string|
|» renewalSettings|body|object|false|The Renewal settings for Reservations|
|» » AutomaticRenewal|body|object|false|none|
|» » RenewalCount|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "Reservation": {
    "Arn": {},
    "Count": {},
    "CurrencyCode": {},
    "Duration": {},
    "DurationUnits": {},
    "End": {},
    "FixedPrice": {},
    "Name": {},
    "OfferingDescription": {},
    "OfferingId": {},
    "OfferingType": {},
    "Region": {},
    "RenewalSettings": {
      "AutomaticRenewal": {},
      "RenewalCount": {}
    },
    "ReservationId": {},
    "ResourceSpecification": {
      "ChannelClass": {},
      "Codec": {},
      "MaximumBitrate": {},
      "MaximumFramerate": {},
      "Resolution": {},
      "ResourceType": {},
      "SpecialFeature": {},
      "VideoQuality": {}
    },
    "Start": {},
    "State": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "UsagePrice": {}
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

> 487 Response

```json
null
```

<h3 id="updatereservation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateReservationResponse](#schemaupdatereservationresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|487|487|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteReservation

<a id="opIdDeleteReservation"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/reservations/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /prod/reservations/{reservationId}`

Delete an expired reservation.

<h3 id="deletereservation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reservationId|path|string|true|Unique reservation ID, e.g. '1234567'|
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
  "Arn": {},
  "Count": {},
  "CurrencyCode": {},
  "Duration": {},
  "DurationUnits": {},
  "End": {},
  "FixedPrice": {},
  "Name": {},
  "OfferingDescription": {},
  "OfferingId": {},
  "OfferingType": {},
  "Region": {},
  "RenewalSettings": {
    "AutomaticRenewal": {},
    "RenewalCount": {}
  },
  "ReservationId": {},
  "ResourceSpecification": {
    "ChannelClass": {},
    "Codec": {},
    "MaximumBitrate": {},
    "MaximumFramerate": {},
    "Resolution": {},
    "ResourceType": {},
    "SpecialFeature": {},
    "VideoQuality": {}
  },
  "Start": {},
  "State": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "UsagePrice": {}
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

> 487 Response

```json
null
```

<h3 id="deletereservation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteReservationResponse](#schemadeletereservationresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|487|487|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteTags

<a id="opIdDeleteTags"></a>

> Code samples

```bash
curl 'https://medialive.us-east-1.amazonaws.com/prod/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /prod/tags/{resource-arn}#tagKeys`

Removes tags for a resource

<h3 id="deletetags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource-arn|path|string|true|none|
|tagKeys|query|[[__string](#schema__string)]|true|An array of tag keys to delete|
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

<h3 id="deletetags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeInputDevice

<a id="opIdDescribeInputDevice"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/inputDevices/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /prod/inputDevices/{inputDeviceId}`

Gets the details for the input device

<h3 id="describeinputdevice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inputDeviceId|path|string|true|The unique ID of this input device. For example, hd-123456789abcdef.|
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
  "Arn": {},
  "ConnectionState": {},
  "DeviceSettingsSyncState": {},
  "DeviceUpdateStatus": {},
  "HdDeviceSettings": {
    "ActiveInput": {},
    "ConfiguredInput": {},
    "DeviceState": {},
    "Framerate": {},
    "Height": {},
    "MaxBitrate": {},
    "ScanType": {},
    "Width": {},
    "LatencyMs": {}
  },
  "Id": {},
  "MacAddress": {},
  "Name": {},
  "NetworkSettings": {
    "DnsAddresses": {},
    "Gateway": {},
    "IpAddress": {},
    "IpScheme": {},
    "SubnetMask": {}
  },
  "SerialNumber": {},
  "Type": {},
  "UhdDeviceSettings": {
    "ActiveInput": {},
    "ConfiguredInput": {},
    "DeviceState": {},
    "Framerate": {},
    "Height": {},
    "MaxBitrate": {},
    "ScanType": {},
    "Width": {},
    "LatencyMs": {}
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

<h3 id="describeinputdevice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeInputDeviceResponse](#schemadescribeinputdeviceresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateInputDevice

<a id="opIdUpdateInputDevice"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/inputDevices/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "hdDeviceSettings": {
      "ConfiguredInput": {},
      "MaxBitrate": {},
      "LatencyMs": {}
    },
    "name": "string",
    "uhdDeviceSettings": {
      "ConfiguredInput": {},
      "MaxBitrate": {},
      "LatencyMs": {}
    }
  }'
```

`PUT /prod/inputDevices/{inputDeviceId}`

Updates the parameters for the input device.

> Body parameter

```json
{
  "hdDeviceSettings": {
    "ConfiguredInput": {},
    "MaxBitrate": {},
    "LatencyMs": {}
  },
  "name": "string",
  "uhdDeviceSettings": {
    "ConfiguredInput": {},
    "MaxBitrate": {},
    "LatencyMs": {}
  }
}
```

<h3 id="updateinputdevice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inputDeviceId|path|string|true|The unique ID of the input device. For example, hd-123456789abcdef.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» hdDeviceSettings|body|object|false|Configurable settings for the input device.|
|» » ConfiguredInput|body|object|false|none|
|» » MaxBitrate|body|object|false|none|
|» » LatencyMs|body|object|false|none|
|» name|body|string|false|Placeholder documentation for __string|
|» uhdDeviceSettings|body|object|false|Configurable settings for the input device.|
|» » ConfiguredInput|body|object|false|none|
|» » MaxBitrate|body|object|false|none|
|» » LatencyMs|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "ConnectionState": {},
  "DeviceSettingsSyncState": {},
  "DeviceUpdateStatus": {},
  "HdDeviceSettings": {
    "ActiveInput": {},
    "ConfiguredInput": {},
    "DeviceState": {},
    "Framerate": {},
    "Height": {},
    "MaxBitrate": {},
    "ScanType": {},
    "Width": {},
    "LatencyMs": {}
  },
  "Id": {},
  "MacAddress": {},
  "Name": {},
  "NetworkSettings": {
    "DnsAddresses": {},
    "Gateway": {},
    "IpAddress": {},
    "IpScheme": {},
    "SubnetMask": {}
  },
  "SerialNumber": {},
  "Type": {},
  "UhdDeviceSettings": {
    "ActiveInput": {},
    "ConfiguredInput": {},
    "DeviceState": {},
    "Framerate": {},
    "Height": {},
    "MaxBitrate": {},
    "ScanType": {},
    "Width": {},
    "LatencyMs": {}
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

> 487 Response

```json
null
```

<h3 id="updateinputdevice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateInputDeviceResponse](#schemaupdateinputdeviceresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnprocessableEntityException|[UnprocessableEntityException](#schemaunprocessableentityexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|485|485|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|486|486|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|487|487|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeInputDeviceThumbnail

<a id="opIdDescribeInputDeviceThumbnail"></a>

> Code samples

```bash
curl 'https://medialive.us-east-1.amazonaws.com/prod/inputDevices/string/thumbnailData#accept' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /prod/inputDevices/{inputDeviceId}/thumbnailData#accept`

Get the latest thumbnail data for the input device.

<h3 id="describeinputdevicethumbnail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inputDeviceId|path|string|true|The unique ID of this input device. For example, hd-123456789abcdef.|
|accept|header|string|true|The HTTP Accept header. Indicates the requested type for the thumbnail.|
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
|accept|image/jpeg|

> Example responses

> 200 Response

```json
{
  "Body": {}
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

<h3 id="describeinputdevicethumbnail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeInputDeviceThumbnailResponse](#schemadescribeinputdevicethumbnailresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeOffering

<a id="opIdDescribeOffering"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/offerings/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /prod/offerings/{offeringId}`

Get details for an offering.

<h3 id="describeoffering-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|Unique offering ID, e.g. '87654321'|
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
  "Arn": {},
  "CurrencyCode": {},
  "Duration": {},
  "DurationUnits": {},
  "FixedPrice": {},
  "OfferingDescription": {},
  "OfferingId": {},
  "OfferingType": {},
  "Region": {},
  "ResourceSpecification": {
    "ChannelClass": {},
    "Codec": {},
    "MaximumBitrate": {},
    "MaximumFramerate": {},
    "Resolution": {},
    "ResourceType": {},
    "SpecialFeature": {},
    "VideoQuality": {}
  },
  "UsagePrice": {}
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

<h3 id="describeoffering-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeOfferingResponse](#schemadescribeofferingresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListInputDeviceTransfers

<a id="opIdListInputDeviceTransfers"></a>

> Code samples

```bash
curl 'https://medialive.us-east-1.amazonaws.com/prod/inputDeviceTransfers#transferType?transferType=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /prod/inputDeviceTransfers#transferType`

List input devices that are currently being transferred. List input devices that you are transferring from your AWS account or input devices that another AWS account is transferring to you.

<h3 id="listinputdevicetransfers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|none|
|nextToken|query|string|false|none|
|transferType|query|string|true|none|
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
  "InputDeviceTransfers": {},
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

<h3 id="listinputdevicetransfers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListInputDeviceTransfersResponse](#schemalistinputdevicetransfersresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnprocessableEntityException|[UnprocessableEntityException](#schemaunprocessableentityexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|485|485|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListInputDevices

<a id="opIdListInputDevices"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/inputDevices \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /prod/inputDevices`

List input devices

<h3 id="listinputdevices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|none|
|nextToken|query|string|false|none|
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
  "InputDevices": {},
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

<h3 id="listinputdevices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListInputDevicesResponse](#schemalistinputdevicesresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|484|484|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListOfferings

<a id="opIdListOfferings"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/offerings \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /prod/offerings`

List offerings available for purchase.

<h3 id="listofferings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelClass|query|string|false|Filter by channel class, 'STANDARD' or 'SINGLE_PIPELINE'<br>|
|channelConfiguration|query|string|false|Filter to offerings that match the configuration of an existing channel, e.g. '2345678' (a channel ID)<br>|
|codec|query|string|false|Filter by codec, 'AVC', 'HEVC', 'MPEG2', 'AUDIO', or 'LINK'|
|duration|query|string|false|Filter by offering duration, e.g. '12'|
|maxResults|query|integer|false|none|
|maximumBitrate|query|string|false|Filter by bitrate, 'MAX_10_MBPS', 'MAX_20_MBPS', or 'MAX_50_MBPS'<br>|
|maximumFramerate|query|string|false|Filter by framerate, 'MAX_30_FPS' or 'MAX_60_FPS'|
|nextToken|query|string|false|none|
|resolution|query|string|false|Filter by resolution, 'SD', 'HD', 'FHD', or 'UHD'|
|resourceType|query|string|false|Filter by resource type, 'INPUT', 'OUTPUT', 'MULTIPLEX', or 'CHANNEL'|
|specialFeature|query|string|false|Filter by special feature, 'ADVANCED_AUDIO' or 'AUDIO_NORMALIZATION'<br>|
|videoQuality|query|string|false|Filter by video quality, 'STANDARD', 'ENHANCED', or 'PREMIUM'<br>|
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
  "NextToken": {},
  "Offerings": {}
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

<h3 id="listofferings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListOfferingsResponse](#schemalistofferingsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|484|484|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListReservations

<a id="opIdListReservations"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/reservations \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /prod/reservations`

List purchased reservations.

<h3 id="listreservations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelClass|query|string|false|Filter by channel class, 'STANDARD' or 'SINGLE_PIPELINE'<br>|
|codec|query|string|false|Filter by codec, 'AVC', 'HEVC', 'MPEG2', 'AUDIO', or 'LINK'|
|maxResults|query|integer|false|none|
|maximumBitrate|query|string|false|Filter by bitrate, 'MAX_10_MBPS', 'MAX_20_MBPS', or 'MAX_50_MBPS'<br>|
|maximumFramerate|query|string|false|Filter by framerate, 'MAX_30_FPS' or 'MAX_60_FPS'|
|nextToken|query|string|false|none|
|resolution|query|string|false|Filter by resolution, 'SD', 'HD', 'FHD', or 'UHD'|
|resourceType|query|string|false|Filter by resource type, 'INPUT', 'OUTPUT', 'MULTIPLEX', or 'CHANNEL'|
|specialFeature|query|string|false|Filter by special feature, 'ADVANCED_AUDIO' or 'AUDIO_NORMALIZATION'<br>|
|videoQuality|query|string|false|Filter by video quality, 'STANDARD', 'ENHANCED', or 'PREMIUM'<br>|
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
  "NextToken": {},
  "Reservations": {}
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

<h3 id="listreservations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListReservationsResponse](#schemalistreservationsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|484|484|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PurchaseOffering

<a id="opIdPurchaseOffering"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/offerings/string/purchase \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "count": 1,
    "name": "string",
    "renewalSettings": {
      "AutomaticRenewal": {},
      "RenewalCount": {}
    },
    "requestId": "string",
    "start": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /prod/offerings/{offeringId}/purchase`

Purchase an offering and create a reservation.

> Body parameter

```json
{
  "count": 1,
  "name": "string",
  "renewalSettings": {
    "AutomaticRenewal": {},
    "RenewalCount": {}
  },
  "requestId": "string",
  "start": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="purchaseoffering-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|Offering to purchase, e.g. '87654321'|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» count|body|integer|true|Placeholder documentation for __integerMin1|
|» name|body|string|false|Placeholder documentation for __string|
|» renewalSettings|body|object|false|The Renewal settings for Reservations|
|» » AutomaticRenewal|body|object|false|none|
|» » RenewalCount|body|object|false|none|
|» requestId|body|string|false|Placeholder documentation for __string|
|» start|body|string|false|Placeholder documentation for __string|
|» tags|body|object|false|Placeholder documentation for Tags|
|» » **additionalProperties**|body|[__string](#schema__string)|false|Placeholder documentation for __string|

> Example responses

> 201 Response

```json
{
  "Reservation": {
    "Arn": {},
    "Count": {},
    "CurrencyCode": {},
    "Duration": {},
    "DurationUnits": {},
    "End": {},
    "FixedPrice": {},
    "Name": {},
    "OfferingDescription": {},
    "OfferingId": {},
    "OfferingType": {},
    "Region": {},
    "RenewalSettings": {
      "AutomaticRenewal": {},
      "RenewalCount": {}
    },
    "ReservationId": {},
    "ResourceSpecification": {
      "ChannelClass": {},
      "Codec": {},
      "MaximumBitrate": {},
      "MaximumFramerate": {},
      "Resolution": {},
      "ResourceType": {},
      "SpecialFeature": {},
      "VideoQuality": {}
    },
    "Start": {},
    "State": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "UsagePrice": {}
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

> 487 Response

```json
null
```

<h3 id="purchaseoffering-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[PurchaseOfferingResponse](#schemapurchaseofferingresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|487|487|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RebootInputDevice

<a id="opIdRebootInputDevice"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/inputDevices/string/reboot \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "force": "NO"
  }'
```

`POST /prod/inputDevices/{inputDeviceId}/reboot`

Send a reboot command to the specified input device. The device will begin rebooting within a few seconds of sending the command. When the reboot is complete, the device’s connection status will change to connected.

> Body parameter

```json
{
  "force": "NO"
}
```

<h3 id="rebootinputdevice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inputDeviceId|path|string|true|The unique ID of the input device to reboot. For example, hd-123456789abcdef.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» force|body|string|false|Whether or not to force reboot the input device.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» force|NO|
|» force|YES|

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

> 487 Response

```json
null
```

<h3 id="rebootinputdevice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RebootInputDeviceResponse](#schemarebootinputdeviceresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnprocessableEntityException|[UnprocessableEntityException](#schemaunprocessableentityexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|485|485|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|486|486|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|487|487|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RejectInputDeviceTransfer

<a id="opIdRejectInputDeviceTransfer"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/inputDevices/string/reject \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /prod/inputDevices/{inputDeviceId}/reject`

Reject the transfer of the specified input device to your AWS account.

<h3 id="rejectinputdevicetransfer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inputDeviceId|path|string|true|The unique ID of the input device to reject. For example, hd-123456789abcdef.|
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

> 487 Response

```json
null
```

> 488 Response

```json
null
```

<h3 id="rejectinputdevicetransfer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RejectInputDeviceTransferResponse](#schemarejectinputdevicetransferresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnprocessableEntityException|[UnprocessableEntityException](#schemaunprocessableentityexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|485|485|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|486|486|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|487|487|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|488|488|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartChannel

<a id="opIdStartChannel"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/channels/string/start \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /prod/channels/{channelId}/start`

Starts an existing channel

<h3 id="startchannel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelId|path|string|true|A request to start a channel|
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
  "Arn": {},
  "CdiInputSpecification": {
    "Resolution": {}
  },
  "ChannelClass": {},
  "Destinations": {},
  "EgressEndpoints": {},
  "EncoderSettings": {
    "AudioDescriptions": {},
    "AvailBlanking": {
      "AvailBlankingImage": {
        "PasswordParam": {},
        "Uri": {},
        "Username": {}
      },
      "State": {}
    },
    "AvailConfiguration": {
      "AvailSettings": {
        "Esam": {
          "AcquisitionPointId": {},
          "AdAvailOffset": {},
          "PasswordParam": {},
          "PoisEndpoint": {},
          "Username": {},
          "ZoneIdentity": {}
        },
        "Scte35SpliceInsert": {
          "AdAvailOffset": {},
          "NoRegionalBlackoutFlag": {},
          "WebDeliveryAllowedFlag": {}
        },
        "Scte35TimeSignalApos": {
          "AdAvailOffset": {},
          "NoRegionalBlackoutFlag": {},
          "WebDeliveryAllowedFlag": {}
        }
      }
    },
    "BlackoutSlate": {
      "BlackoutSlateImage": {
        "PasswordParam": {},
        "Uri": {},
        "Username": {}
      },
      "NetworkEndBlackout": {},
      "NetworkEndBlackoutImage": {
        "PasswordParam": {},
        "Uri": {},
        "Username": {}
      },
      "NetworkId": {},
      "State": {}
    },
    "CaptionDescriptions": {},
    "FeatureActivations": {
      "InputPrepareScheduleActions": {}
    },
    "GlobalConfiguration": {
      "InitialAudioGain": {},
      "InputEndAction": {},
      "InputLossBehavior": {
        "BlackFrameMsec": {},
        "InputLossImageColor": {},
        "InputLossImageSlate": {
          "PasswordParam": {},
          "Uri": {},
          "Username": {}
        },
        "InputLossImageType": {},
        "RepeatFrameMsec": {}
      },
      "OutputLockingMode": {},
      "OutputTimingSource": {},
      "SupportLowFramerateInputs": {}
    },
    "MotionGraphicsConfiguration": {
      "MotionGraphicsInsertion": {},
      "MotionGraphicsSettings": {
        "HtmlMotionGraphicsSettings": {}
      }
    },
    "NielsenConfiguration": {
      "DistributorId": {},
      "NielsenPcmToId3Tagging": {}
    },
    "OutputGroups": {},
    "TimecodeConfig": {
      "Source": {},
      "SyncThreshold": {}
    },
    "VideoDescriptions": {}
  },
  "Id": {},
  "InputAttachments": {},
  "InputSpecification": {
    "Codec": {},
    "MaximumBitrate": {},
    "Resolution": {}
  },
  "LogLevel": {},
  "Maintenance": {
    "MaintenanceDay": {},
    "MaintenanceDeadline": {},
    "MaintenanceScheduledDate": {},
    "MaintenanceStartTime": {}
  },
  "Name": {},
  "PipelineDetails": {},
  "PipelinesRunningCount": {},
  "RoleArn": {},
  "State": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Vpc": {
    "AvailabilityZones": {},
    "NetworkInterfaceIds": {},
    "SecurityGroupIds": {},
    "SubnetIds": {}
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

> 487 Response

```json
null
```

<h3 id="startchannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartChannelResponse](#schemastartchannelresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|487|487|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartInputDeviceMaintenanceWindow

<a id="opIdStartInputDeviceMaintenanceWindow"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/inputDevices/string/startInputDeviceMaintenanceWindow \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /prod/inputDevices/{inputDeviceId}/startInputDeviceMaintenanceWindow`

Start a maintenance window for the specified input device. Starting a maintenance window will give the device up to two hours to install software. If the device was streaming prior to the maintenance, it will resume streaming when the software is fully installed. Devices automatically install updates while they are powered on and their MediaLive channels are stopped. A maintenance window allows you to update a device without having to stop MediaLive channels that use the device. The device must remain powered on and connected to the internet for the duration of the maintenance.

<h3 id="startinputdevicemaintenancewindow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inputDeviceId|path|string|true|The unique ID of the input device to start a maintenance window for. For example, hd-123456789abcdef.|
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

> 487 Response

```json
null
```

<h3 id="startinputdevicemaintenancewindow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartInputDeviceMaintenanceWindowResponse](#schemastartinputdevicemaintenancewindowresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnprocessableEntityException|[UnprocessableEntityException](#schemaunprocessableentityexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|485|485|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|486|486|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|487|487|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartMultiplex

<a id="opIdStartMultiplex"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/multiplexes/string/start \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /prod/multiplexes/{multiplexId}/start`

Start (run) the multiplex. Starting the multiplex does not start the channels. You must explicitly start each channel.

<h3 id="startmultiplex-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|multiplexId|path|string|true|The ID of the multiplex.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 202 Response

```json
{
  "Arn": {},
  "AvailabilityZones": {},
  "Destinations": {},
  "Id": {},
  "MultiplexSettings": {
    "MaximumVideoBufferDelayMilliseconds": {},
    "TransportStreamBitrate": {},
    "TransportStreamId": {},
    "TransportStreamReservedBitrate": {}
  },
  "Name": {},
  "PipelinesRunningCount": {},
  "ProgramCount": {},
  "State": {},
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

> 487 Response

```json
null
```

<h3 id="startmultiplex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[StartMultiplexResponse](#schemastartmultiplexresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|487|487|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopChannel

<a id="opIdStopChannel"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/channels/string/stop \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /prod/channels/{channelId}/stop`

Stops a running channel

<h3 id="stopchannel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelId|path|string|true|A request to stop a running channel|
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
  "Arn": {},
  "CdiInputSpecification": {
    "Resolution": {}
  },
  "ChannelClass": {},
  "Destinations": {},
  "EgressEndpoints": {},
  "EncoderSettings": {
    "AudioDescriptions": {},
    "AvailBlanking": {
      "AvailBlankingImage": {
        "PasswordParam": {},
        "Uri": {},
        "Username": {}
      },
      "State": {}
    },
    "AvailConfiguration": {
      "AvailSettings": {
        "Esam": {
          "AcquisitionPointId": {},
          "AdAvailOffset": {},
          "PasswordParam": {},
          "PoisEndpoint": {},
          "Username": {},
          "ZoneIdentity": {}
        },
        "Scte35SpliceInsert": {
          "AdAvailOffset": {},
          "NoRegionalBlackoutFlag": {},
          "WebDeliveryAllowedFlag": {}
        },
        "Scte35TimeSignalApos": {
          "AdAvailOffset": {},
          "NoRegionalBlackoutFlag": {},
          "WebDeliveryAllowedFlag": {}
        }
      }
    },
    "BlackoutSlate": {
      "BlackoutSlateImage": {
        "PasswordParam": {},
        "Uri": {},
        "Username": {}
      },
      "NetworkEndBlackout": {},
      "NetworkEndBlackoutImage": {
        "PasswordParam": {},
        "Uri": {},
        "Username": {}
      },
      "NetworkId": {},
      "State": {}
    },
    "CaptionDescriptions": {},
    "FeatureActivations": {
      "InputPrepareScheduleActions": {}
    },
    "GlobalConfiguration": {
      "InitialAudioGain": {},
      "InputEndAction": {},
      "InputLossBehavior": {
        "BlackFrameMsec": {},
        "InputLossImageColor": {},
        "InputLossImageSlate": {
          "PasswordParam": {},
          "Uri": {},
          "Username": {}
        },
        "InputLossImageType": {},
        "RepeatFrameMsec": {}
      },
      "OutputLockingMode": {},
      "OutputTimingSource": {},
      "SupportLowFramerateInputs": {}
    },
    "MotionGraphicsConfiguration": {
      "MotionGraphicsInsertion": {},
      "MotionGraphicsSettings": {
        "HtmlMotionGraphicsSettings": {}
      }
    },
    "NielsenConfiguration": {
      "DistributorId": {},
      "NielsenPcmToId3Tagging": {}
    },
    "OutputGroups": {},
    "TimecodeConfig": {
      "Source": {},
      "SyncThreshold": {}
    },
    "VideoDescriptions": {}
  },
  "Id": {},
  "InputAttachments": {},
  "InputSpecification": {
    "Codec": {},
    "MaximumBitrate": {},
    "Resolution": {}
  },
  "LogLevel": {},
  "Maintenance": {
    "MaintenanceDay": {},
    "MaintenanceDeadline": {},
    "MaintenanceScheduledDate": {},
    "MaintenanceStartTime": {}
  },
  "Name": {},
  "PipelineDetails": {},
  "PipelinesRunningCount": {},
  "RoleArn": {},
  "State": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Vpc": {
    "AvailabilityZones": {},
    "NetworkInterfaceIds": {},
    "SecurityGroupIds": {},
    "SubnetIds": {}
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

> 487 Response

```json
null
```

<h3 id="stopchannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopChannelResponse](#schemastopchannelresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|487|487|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopMultiplex

<a id="opIdStopMultiplex"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/multiplexes/string/stop \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /prod/multiplexes/{multiplexId}/stop`

Stops a running multiplex. If the multiplex isn't running, this action has no effect.

<h3 id="stopmultiplex-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|multiplexId|path|string|true|The ID of the multiplex.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 202 Response

```json
{
  "Arn": {},
  "AvailabilityZones": {},
  "Destinations": {},
  "Id": {},
  "MultiplexSettings": {
    "MaximumVideoBufferDelayMilliseconds": {},
    "TransportStreamBitrate": {},
    "TransportStreamId": {},
    "TransportStreamReservedBitrate": {}
  },
  "Name": {},
  "PipelinesRunningCount": {},
  "ProgramCount": {},
  "State": {},
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

> 487 Response

```json
null
```

<h3 id="stopmultiplex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[StopMultiplexResponse](#schemastopmultiplexresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|487|487|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TransferInputDevice

<a id="opIdTransferInputDevice"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/inputDevices/string/transfer \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "targetCustomerId": "string",
    "targetRegion": "string",
    "transferMessage": "string"
  }'
```

`POST /prod/inputDevices/{inputDeviceId}/transfer`

Start an input device transfer to another AWS account. After you make the request, the other account must accept or reject the transfer.

> Body parameter

```json
{
  "targetCustomerId": "string",
  "targetRegion": "string",
  "transferMessage": "string"
}
```

<h3 id="transferinputdevice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inputDeviceId|path|string|true|The unique ID of this input device. For example, hd-123456789abcdef.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» targetCustomerId|body|string|false|Placeholder documentation for __string|
|» targetRegion|body|string|false|Placeholder documentation for __string|
|» transferMessage|body|string|false|Placeholder documentation for __string|

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

> 487 Response

```json
null
```

> 488 Response

```json
null
```

<h3 id="transferinputdevice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TransferInputDeviceResponse](#schematransferinputdeviceresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnprocessableEntityException|[UnprocessableEntityException](#schemaunprocessableentityexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|485|485|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|486|486|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|487|487|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|488|488|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateChannelClass

<a id="opIdUpdateChannelClass"></a>

> Code samples

```bash
curl https://medialive.us-east-1.amazonaws.com/prod/channels/string/channelClass \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "channelClass": "STANDARD",
    "destinations": [
      {
        "Id": {},
        "MediaPackageSettings": {},
        "MultiplexSettings": {
          "MultiplexId": {},
          "ProgramName": {}
        },
        "Settings": {}
      }
    ]
  }'
```

`PUT /prod/channels/{channelId}/channelClass`

Changes the class of the channel.

> Body parameter

```json
{
  "channelClass": "STANDARD",
  "destinations": [
    {
      "Id": {},
      "MediaPackageSettings": {},
      "MultiplexSettings": {
        "MultiplexId": {},
        "ProgramName": {}
      },
      "Settings": {}
    }
  ]
}
```

<h3 id="updatechannelclass-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelId|path|string|true|Channel Id of the channel whose class should be updated.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» channelClass|body|string|true|A standard channel has two encoding pipelines and a single pipeline channel only has one.|
|» destinations|body|[[OutputDestination](#schemaoutputdestination)]|false|Placeholder documentation for __listOfOutputDestination|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» channelClass|STANDARD|
|» channelClass|SINGLE_PIPELINE|

> Example responses

> 200 Response

```json
{
  "Channel": {
    "Arn": {},
    "CdiInputSpecification": {
      "Resolution": {}
    },
    "ChannelClass": {},
    "Destinations": {},
    "EgressEndpoints": {},
    "EncoderSettings": {
      "AudioDescriptions": {},
      "AvailBlanking": {
        "AvailBlankingImage": {
          "PasswordParam": {},
          "Uri": {},
          "Username": {}
        },
        "State": {}
      },
      "AvailConfiguration": {
        "AvailSettings": {
          "Esam": {
            "AcquisitionPointId": {},
            "AdAvailOffset": {},
            "PasswordParam": {},
            "PoisEndpoint": {},
            "Username": {},
            "ZoneIdentity": {}
          },
          "Scte35SpliceInsert": {
            "AdAvailOffset": {},
            "NoRegionalBlackoutFlag": {},
            "WebDeliveryAllowedFlag": {}
          },
          "Scte35TimeSignalApos": {
            "AdAvailOffset": {},
            "NoRegionalBlackoutFlag": {},
            "WebDeliveryAllowedFlag": {}
          }
        }
      },
      "BlackoutSlate": {
        "BlackoutSlateImage": {
          "PasswordParam": {},
          "Uri": {},
          "Username": {}
        },
        "NetworkEndBlackout": {},
        "NetworkEndBlackoutImage": {
          "PasswordParam": {},
          "Uri": {},
          "Username": {}
        },
        "NetworkId": {},
        "State": {}
      },
      "CaptionDescriptions": {},
      "FeatureActivations": {
        "InputPrepareScheduleActions": {}
      },
      "GlobalConfiguration": {
        "InitialAudioGain": {},
        "InputEndAction": {},
        "InputLossBehavior": {
          "BlackFrameMsec": {},
          "InputLossImageColor": {},
          "InputLossImageSlate": {
            "PasswordParam": {},
            "Uri": {},
            "Username": {}
          },
          "InputLossImageType": {},
          "RepeatFrameMsec": {}
        },
        "OutputLockingMode": {},
        "OutputTimingSource": {},
        "SupportLowFramerateInputs": {}
      },
      "MotionGraphicsConfiguration": {
        "MotionGraphicsInsertion": {},
        "MotionGraphicsSettings": {
          "HtmlMotionGraphicsSettings": {}
        }
      },
      "NielsenConfiguration": {
        "DistributorId": {},
        "NielsenPcmToId3Tagging": {}
      },
      "OutputGroups": {},
      "TimecodeConfig": {
        "Source": {},
        "SyncThreshold": {}
      },
      "VideoDescriptions": {}
    },
    "Id": {},
    "InputAttachments": {},
    "InputSpecification": {
      "Codec": {},
      "MaximumBitrate": {},
      "Resolution": {}
    },
    "LogLevel": {},
    "Maintenance": {
      "MaintenanceDay": {},
      "MaintenanceDeadline": {},
      "MaintenanceScheduledDate": {},
      "MaintenanceStartTime": {}
    },
    "Name": {},
    "PipelineDetails": {},
    "PipelinesRunningCount": {},
    "RoleArn": {},
    "State": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "Vpc": {
      "AvailabilityZones": {},
      "NetworkInterfaceIds": {},
      "SecurityGroupIds": {},
      "SubnetIds": {}
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

> 487 Response

```json
null
```

> 488 Response

```json
null
```

<h3 id="updatechannelclass-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateChannelClassResponse](#schemaupdatechannelclassresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnprocessableEntityException|[UnprocessableEntityException](#schemaunprocessableentityexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|BadGatewayException|[BadGatewayException](#schemabadgatewayexception)|
|485|485|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|486|486|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|487|487|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|488|488|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AcceptInputDeviceTransferResponse">AcceptInputDeviceTransferResponse</h2>
<!-- backwards compatibility -->
<a id="schemaacceptinputdevicetransferresponse"></a>
<a id="schema_AcceptInputDeviceTransferResponse"></a>
<a id="tocSacceptinputdevicetransferresponse"></a>
<a id="tocsacceptinputdevicetransferresponse"></a>

```json
{}
```

Placeholder documentation for AcceptInputDeviceTransferResponse

<h2 id="tocS_BadRequestException">BadRequestException</h2>
<!-- backwards compatibility -->
<a id="schemabadrequestexception"></a>
<a id="schema_BadRequestException"></a>
<a id="tocSbadrequestexception"></a>
<a id="tocsbadrequestexception"></a>

```json
null
```

<h2 id="tocS_UnprocessableEntityException">UnprocessableEntityException</h2>
<!-- backwards compatibility -->
<a id="schemaunprocessableentityexception"></a>
<a id="schema_UnprocessableEntityException"></a>
<a id="tocSunprocessableentityexception"></a>
<a id="tocsunprocessableentityexception"></a>

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

<h2 id="tocS_ForbiddenException">ForbiddenException</h2>
<!-- backwards compatibility -->
<a id="schemaforbiddenexception"></a>
<a id="schema_ForbiddenException"></a>
<a id="tocSforbiddenexception"></a>
<a id="tocsforbiddenexception"></a>

```json
null
```

<h2 id="tocS_BadGatewayException">BadGatewayException</h2>
<!-- backwards compatibility -->
<a id="schemabadgatewayexception"></a>
<a id="schema_BadGatewayException"></a>
<a id="tocSbadgatewayexception"></a>
<a id="tocsbadgatewayexception"></a>

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

<h2 id="tocS_GatewayTimeoutException">GatewayTimeoutException</h2>
<!-- backwards compatibility -->
<a id="schemagatewaytimeoutexception"></a>
<a id="schema_GatewayTimeoutException"></a>
<a id="tocSgatewaytimeoutexception"></a>
<a id="tocsgatewaytimeoutexception"></a>

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

<h2 id="tocS_ConflictException">ConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaconflictexception"></a>
<a id="schema_ConflictException"></a>
<a id="tocSconflictexception"></a>
<a id="tocsconflictexception"></a>

```json
null
```

<h2 id="tocS_BatchDeleteResponse">BatchDeleteResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeleteresponse"></a>
<a id="schema_BatchDeleteResponse"></a>
<a id="tocSbatchdeleteresponse"></a>
<a id="tocsbatchdeleteresponse"></a>

```json
{
  "Failed": {},
  "Successful": {}
}
```

Placeholder documentation for BatchDeleteResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Failed|object|false|none|none|
|Successful|object|false|none|none|

<h2 id="tocS___string">__string</h2>
<!-- backwards compatibility -->
<a id="schema__string"></a>
<a id="schema___string"></a>
<a id="tocS__string"></a>
<a id="tocs__string"></a>

```json
"string"
```

Placeholder documentation for __string

<h2 id="tocS_BatchStartResponse">BatchStartResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchstartresponse"></a>
<a id="schema_BatchStartResponse"></a>
<a id="tocSbatchstartresponse"></a>
<a id="tocsbatchstartresponse"></a>

```json
{
  "Failed": {},
  "Successful": {}
}
```

Placeholder documentation for BatchStartResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Failed|object|false|none|none|
|Successful|object|false|none|none|

<h2 id="tocS_BatchStopResponse">BatchStopResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchstopresponse"></a>
<a id="schema_BatchStopResponse"></a>
<a id="tocSbatchstopresponse"></a>
<a id="tocsbatchstopresponse"></a>

```json
{
  "Failed": {},
  "Successful": {}
}
```

Placeholder documentation for BatchStopResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Failed|object|false|none|none|
|Successful|object|false|none|none|

<h2 id="tocS_BatchUpdateScheduleResponse">BatchUpdateScheduleResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchupdatescheduleresponse"></a>
<a id="schema_BatchUpdateScheduleResponse"></a>
<a id="tocSbatchupdatescheduleresponse"></a>
<a id="tocsbatchupdatescheduleresponse"></a>

```json
{
  "Creates": {
    "ScheduleActions": {}
  },
  "Deletes": {
    "ScheduleActions": {}
  }
}
```

Placeholder documentation for BatchUpdateScheduleResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Creates|object|false|none|none|
|Deletes|object|false|none|none|

<h2 id="tocS___listOfScheduleAction">__listOfScheduleAction</h2>
<!-- backwards compatibility -->
<a id="schema__listofscheduleaction"></a>
<a id="schema___listOfScheduleAction"></a>
<a id="tocS__listofscheduleaction"></a>
<a id="tocs__listofscheduleaction"></a>

```json
[
  {
    "ActionName": {},
    "ScheduleActionSettings": {
      "HlsId3SegmentTaggingSettings": {
        "Tag": {},
        "Id3": {}
      },
      "HlsTimedMetadataSettings": {
        "Id3": {}
      },
      "InputPrepareSettings": {
        "InputAttachmentNameReference": {},
        "InputClippingSettings": {
          "InputTimecodeSource": {},
          "StartTimecode": {
            "Timecode": {}
          },
          "StopTimecode": {
            "LastFrameClippingBehavior": {},
            "Timecode": {}
          }
        },
        "UrlPath": {}
      },
      "InputSwitchSettings": {
        "InputAttachmentNameReference": {},
        "InputClippingSettings": {
          "InputTimecodeSource": {},
          "StartTimecode": {
            "Timecode": {}
          },
          "StopTimecode": {
            "LastFrameClippingBehavior": {},
            "Timecode": {}
          }
        },
        "UrlPath": {}
      },
      "MotionGraphicsImageActivateSettings": {
        "Duration": {},
        "PasswordParam": {},
        "Url": {},
        "Username": {}
      },
      "MotionGraphicsImageDeactivateSettings": {},
      "PauseStateSettings": {
        "Pipelines": {}
      },
      "Scte35InputSettings": {
        "InputAttachmentNameReference": {},
        "Mode": {}
      },
      "Scte35ReturnToNetworkSettings": {
        "SpliceEventId": {}
      },
      "Scte35SpliceInsertSettings": {
        "Duration": {},
        "SpliceEventId": {}
      },
      "Scte35TimeSignalSettings": {
        "Scte35Descriptors": {}
      },
      "StaticImageActivateSettings": {
        "Duration": {},
        "FadeIn": {},
        "FadeOut": {},
        "Height": {},
        "Image": {
          "PasswordParam": {},
          "Uri": {},
          "Username": {}
        },
        "ImageX": {},
        "ImageY": {},
        "Layer": {},
        "Opacity": {},
        "Width": {}
      },
      "StaticImageDeactivateSettings": {
        "FadeOut": {},
        "Layer": {}
      }
    },
    "ScheduleActionStartSettings": {
      "FixedModeScheduleActionStartSettings": {
        "Time": {}
      },
      "FollowModeScheduleActionStartSettings": {
        "FollowPoint": {},
        "ReferenceActionName": {}
      },
      "ImmediateModeScheduleActionStartSettings": {}
    }
  }
]
```

Placeholder documentation for __listOfScheduleAction

<h2 id="tocS___listOf__string">__listOf__string</h2>
<!-- backwards compatibility -->
<a id="schema__listof__string"></a>
<a id="schema___listOf__string"></a>
<a id="tocS__listof__string"></a>
<a id="tocs__listof__string"></a>

```json
[
  "string"
]
```

Placeholder documentation for __listOf__string

<h2 id="tocS_CancelInputDeviceTransferResponse">CancelInputDeviceTransferResponse</h2>
<!-- backwards compatibility -->
<a id="schemacancelinputdevicetransferresponse"></a>
<a id="schema_CancelInputDeviceTransferResponse"></a>
<a id="tocScancelinputdevicetransferresponse"></a>
<a id="tocscancelinputdevicetransferresponse"></a>

```json
{}
```

Placeholder documentation for CancelInputDeviceTransferResponse

<h2 id="tocS_ClaimDeviceResponse">ClaimDeviceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaclaimdeviceresponse"></a>
<a id="schema_ClaimDeviceResponse"></a>
<a id="tocSclaimdeviceresponse"></a>
<a id="tocsclaimdeviceresponse"></a>

```json
{}
```

Placeholder documentation for ClaimDeviceResponse

<h2 id="tocS_CreateChannelResponse">CreateChannelResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatechannelresponse"></a>
<a id="schema_CreateChannelResponse"></a>
<a id="tocScreatechannelresponse"></a>
<a id="tocscreatechannelresponse"></a>

```json
{
  "Channel": {
    "Arn": {},
    "CdiInputSpecification": {
      "Resolution": {}
    },
    "ChannelClass": {},
    "Destinations": {},
    "EgressEndpoints": {},
    "EncoderSettings": {
      "AudioDescriptions": {},
      "AvailBlanking": {
        "AvailBlankingImage": {
          "PasswordParam": {},
          "Uri": {},
          "Username": {}
        },
        "State": {}
      },
      "AvailConfiguration": {
        "AvailSettings": {
          "Esam": {
            "AcquisitionPointId": {},
            "AdAvailOffset": {},
            "PasswordParam": {},
            "PoisEndpoint": {},
            "Username": {},
            "ZoneIdentity": {}
          },
          "Scte35SpliceInsert": {
            "AdAvailOffset": {},
            "NoRegionalBlackoutFlag": {},
            "WebDeliveryAllowedFlag": {}
          },
          "Scte35TimeSignalApos": {
            "AdAvailOffset": {},
            "NoRegionalBlackoutFlag": {},
            "WebDeliveryAllowedFlag": {}
          }
        }
      },
      "BlackoutSlate": {
        "BlackoutSlateImage": {
          "PasswordParam": {},
          "Uri": {},
          "Username": {}
        },
        "NetworkEndBlackout": {},
        "NetworkEndBlackoutImage": {
          "PasswordParam": {},
          "Uri": {},
          "Username": {}
        },
        "NetworkId": {},
        "State": {}
      },
      "CaptionDescriptions": {},
      "FeatureActivations": {
        "InputPrepareScheduleActions": {}
      },
      "GlobalConfiguration": {
        "InitialAudioGain": {},
        "InputEndAction": {},
        "InputLossBehavior": {
          "BlackFrameMsec": {},
          "InputLossImageColor": {},
          "InputLossImageSlate": {
            "PasswordParam": {},
            "Uri": {},
            "Username": {}
          },
          "InputLossImageType": {},
          "RepeatFrameMsec": {}
        },
        "OutputLockingMode": {},
        "OutputTimingSource": {},
        "SupportLowFramerateInputs": {}
      },
      "MotionGraphicsConfiguration": {
        "MotionGraphicsInsertion": {},
        "MotionGraphicsSettings": {
          "HtmlMotionGraphicsSettings": {}
        }
      },
      "NielsenConfiguration": {
        "DistributorId": {},
        "NielsenPcmToId3Tagging": {}
      },
      "OutputGroups": {},
      "TimecodeConfig": {
        "Source": {},
        "SyncThreshold": {}
      },
      "VideoDescriptions": {}
    },
    "Id": {},
    "InputAttachments": {},
    "InputSpecification": {
      "Codec": {},
      "MaximumBitrate": {},
      "Resolution": {}
    },
    "LogLevel": {},
    "Maintenance": {
      "MaintenanceDay": {},
      "MaintenanceDeadline": {},
      "MaintenanceScheduledDate": {},
      "MaintenanceStartTime": {}
    },
    "Name": {},
    "PipelineDetails": {},
    "PipelinesRunningCount": {},
    "RoleArn": {},
    "State": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "Vpc": {
      "AvailabilityZones": {},
      "NetworkInterfaceIds": {},
      "SecurityGroupIds": {},
      "SubnetIds": {}
    }
  }
}
```

Placeholder documentation for CreateChannelResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Channel|object|false|none|none|

<h2 id="tocS_CdiInputResolution">CdiInputResolution</h2>
<!-- backwards compatibility -->
<a id="schemacdiinputresolution"></a>
<a id="schema_CdiInputResolution"></a>
<a id="tocScdiinputresolution"></a>
<a id="tocscdiinputresolution"></a>

```json
"SD"
```

Maximum CDI input resolution; SD is 480i and 576i up to 30 frames-per-second (fps), HD is 720p up to 60 fps / 1080i up to 30 fps, FHD is 1080p up to 60 fps, UHD is 2160p up to 60 fps

<h2 id="tocS_OutputDestination">OutputDestination</h2>
<!-- backwards compatibility -->
<a id="schemaoutputdestination"></a>
<a id="schema_OutputDestination"></a>
<a id="tocSoutputdestination"></a>
<a id="tocsoutputdestination"></a>

```json
{
  "Id": {},
  "MediaPackageSettings": {},
  "MultiplexSettings": {
    "MultiplexId": {},
    "ProgramName": {}
  },
  "Settings": {}
}
```

Placeholder documentation for OutputDestination

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|MediaPackageSettings|object|false|none|none|
|MultiplexSettings|object|false|none|none|
|Settings|object|false|none|none|

<h2 id="tocS___listOfAudioDescription">__listOfAudioDescription</h2>
<!-- backwards compatibility -->
<a id="schema__listofaudiodescription"></a>
<a id="schema___listOfAudioDescription"></a>
<a id="tocS__listofaudiodescription"></a>
<a id="tocs__listofaudiodescription"></a>

```json
[
  {
    "AudioNormalizationSettings": {
      "Algorithm": {},
      "AlgorithmControl": {},
      "TargetLkfs": {}
    },
    "AudioSelectorName": {},
    "AudioType": {},
    "AudioTypeControl": {},
    "AudioWatermarkingSettings": {
      "NielsenWatermarksSettings": {
        "NielsenCbetSettings": {
          "CbetCheckDigitString": {},
          "CbetStepaside": {},
          "Csid": {}
        },
        "NielsenDistributionType": {},
        "NielsenNaesIiNwSettings": {
          "CheckDigitString": {},
          "Sid": {},
          "Timezone": {}
        }
      }
    },
    "CodecSettings": {
      "AacSettings": {
        "Bitrate": {},
        "CodingMode": {},
        "InputType": {},
        "Profile": {},
        "RateControlMode": {},
        "RawFormat": {},
        "SampleRate": {},
        "Spec": {},
        "VbrQuality": {}
      },
      "Ac3Settings": {
        "Bitrate": {},
        "BitstreamMode": {},
        "CodingMode": {},
        "Dialnorm": {},
        "DrcProfile": {},
        "LfeFilter": {},
        "MetadataControl": {}
      },
      "Eac3AtmosSettings": {
        "Bitrate": {},
        "CodingMode": {},
        "Dialnorm": {},
        "DrcLine": {},
        "DrcRf": {},
        "HeightTrim": {},
        "SurroundTrim": {}
      },
      "Eac3Settings": {
        "AttenuationControl": {},
        "Bitrate": {},
        "BitstreamMode": {},
        "CodingMode": {},
        "DcFilter": {},
        "Dialnorm": {},
        "DrcLine": {},
        "DrcRf": {},
        "LfeControl": {},
        "LfeFilter": {},
        "LoRoCenterMixLevel": {},
        "LoRoSurroundMixLevel": {},
        "LtRtCenterMixLevel": {},
        "LtRtSurroundMixLevel": {},
        "MetadataControl": {},
        "PassthroughControl": {},
        "PhaseControl": {},
        "StereoDownmix": {},
        "SurroundExMode": {},
        "SurroundMode": {}
      },
      "Mp2Settings": {
        "Bitrate": {},
        "CodingMode": {},
        "SampleRate": {}
      },
      "PassThroughSettings": {},
      "WavSettings": {
        "BitDepth": {},
        "CodingMode": {},
        "SampleRate": {}
      }
    },
    "LanguageCode": {},
    "LanguageCodeControl": {},
    "Name": {},
    "RemixSettings": {
      "ChannelMappings": {},
      "ChannelsIn": {},
      "ChannelsOut": {}
    },
    "StreamName": {}
  }
]
```

Placeholder documentation for __listOfAudioDescription

<h2 id="tocS_AvailBlanking">AvailBlanking</h2>
<!-- backwards compatibility -->
<a id="schemaavailblanking"></a>
<a id="schema_AvailBlanking"></a>
<a id="tocSavailblanking"></a>
<a id="tocsavailblanking"></a>

```json
{
  "AvailBlankingImage": {
    "PasswordParam": {},
    "Uri": {},
    "Username": {}
  },
  "State": {}
}
```

Avail Blanking

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AvailBlankingImage|object|false|none|none|
|State|object|false|none|none|

<h2 id="tocS_AvailConfiguration">AvailConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaavailconfiguration"></a>
<a id="schema_AvailConfiguration"></a>
<a id="tocSavailconfiguration"></a>
<a id="tocsavailconfiguration"></a>

```json
{
  "AvailSettings": {
    "Esam": {
      "AcquisitionPointId": {},
      "AdAvailOffset": {},
      "PasswordParam": {},
      "PoisEndpoint": {},
      "Username": {},
      "ZoneIdentity": {}
    },
    "Scte35SpliceInsert": {
      "AdAvailOffset": {},
      "NoRegionalBlackoutFlag": {},
      "WebDeliveryAllowedFlag": {}
    },
    "Scte35TimeSignalApos": {
      "AdAvailOffset": {},
      "NoRegionalBlackoutFlag": {},
      "WebDeliveryAllowedFlag": {}
    }
  }
}
```

Avail Configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AvailSettings|object|false|none|none|

<h2 id="tocS_BlackoutSlate">BlackoutSlate</h2>
<!-- backwards compatibility -->
<a id="schemablackoutslate"></a>
<a id="schema_BlackoutSlate"></a>
<a id="tocSblackoutslate"></a>
<a id="tocsblackoutslate"></a>

```json
{
  "BlackoutSlateImage": {
    "PasswordParam": {},
    "Uri": {},
    "Username": {}
  },
  "NetworkEndBlackout": {},
  "NetworkEndBlackoutImage": {
    "PasswordParam": {},
    "Uri": {},
    "Username": {}
  },
  "NetworkId": {},
  "State": {}
}
```

Blackout Slate

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BlackoutSlateImage|object|false|none|none|
|NetworkEndBlackout|object|false|none|none|
|NetworkEndBlackoutImage|object|false|none|none|
|NetworkId|object|false|none|none|
|State|object|false|none|none|

<h2 id="tocS___listOfCaptionDescription">__listOfCaptionDescription</h2>
<!-- backwards compatibility -->
<a id="schema__listofcaptiondescription"></a>
<a id="schema___listOfCaptionDescription"></a>
<a id="tocS__listofcaptiondescription"></a>
<a id="tocs__listofcaptiondescription"></a>

```json
[
  {
    "Accessibility": {},
    "CaptionSelectorName": {},
    "DestinationSettings": {
      "AribDestinationSettings": {},
      "BurnInDestinationSettings": {
        "Alignment": {},
        "BackgroundColor": {},
        "BackgroundOpacity": {},
        "Font": {
          "PasswordParam": {},
          "Uri": {},
          "Username": {}
        },
        "FontColor": {},
        "FontOpacity": {},
        "FontResolution": {},
        "FontSize": {},
        "OutlineColor": {},
        "OutlineSize": {},
        "ShadowColor": {},
        "ShadowOpacity": {},
        "ShadowXOffset": {},
        "ShadowYOffset": {},
        "TeletextGridControl": {},
        "XPosition": {},
        "YPosition": {}
      },
      "DvbSubDestinationSettings": {
        "Alignment": {},
        "BackgroundColor": {},
        "BackgroundOpacity": {},
        "Font": {
          "PasswordParam": {},
          "Uri": {},
          "Username": {}
        },
        "FontColor": {},
        "FontOpacity": {},
        "FontResolution": {},
        "FontSize": {},
        "OutlineColor": {},
        "OutlineSize": {},
        "ShadowColor": {},
        "ShadowOpacity": {},
        "ShadowXOffset": {},
        "ShadowYOffset": {},
        "TeletextGridControl": {},
        "XPosition": {},
        "YPosition": {}
      },
      "EbuTtDDestinationSettings": {
        "CopyrightHolder": {},
        "FillLineGap": {},
        "FontFamily": {},
        "StyleControl": {}
      },
      "EmbeddedDestinationSettings": {},
      "EmbeddedPlusScte20DestinationSettings": {},
      "RtmpCaptionInfoDestinationSettings": {},
      "Scte20PlusEmbeddedDestinationSettings": {},
      "Scte27DestinationSettings": {},
      "SmpteTtDestinationSettings": {},
      "TeletextDestinationSettings": {},
      "TtmlDestinationSettings": {
        "StyleControl": {}
      },
      "WebvttDestinationSettings": {
        "StyleControl": {}
      }
    },
    "LanguageCode": {},
    "LanguageDescription": {},
    "Name": {}
  }
]
```

Placeholder documentation for __listOfCaptionDescription

<h2 id="tocS_FeatureActivations">FeatureActivations</h2>
<!-- backwards compatibility -->
<a id="schemafeatureactivations"></a>
<a id="schema_FeatureActivations"></a>
<a id="tocSfeatureactivations"></a>
<a id="tocsfeatureactivations"></a>

```json
{
  "InputPrepareScheduleActions": {}
}
```

Feature Activations

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InputPrepareScheduleActions|object|false|none|none|

<h2 id="tocS_GlobalConfiguration">GlobalConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaglobalconfiguration"></a>
<a id="schema_GlobalConfiguration"></a>
<a id="tocSglobalconfiguration"></a>
<a id="tocsglobalconfiguration"></a>

```json
{
  "InitialAudioGain": {},
  "InputEndAction": {},
  "InputLossBehavior": {
    "BlackFrameMsec": {},
    "InputLossImageColor": {},
    "InputLossImageSlate": {
      "PasswordParam": {},
      "Uri": {},
      "Username": {}
    },
    "InputLossImageType": {},
    "RepeatFrameMsec": {}
  },
  "OutputLockingMode": {},
  "OutputTimingSource": {},
  "SupportLowFramerateInputs": {}
}
```

Global Configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InitialAudioGain|object|false|none|none|
|InputEndAction|object|false|none|none|
|InputLossBehavior|object|false|none|none|
|OutputLockingMode|object|false|none|none|
|OutputTimingSource|object|false|none|none|
|SupportLowFramerateInputs|object|false|none|none|

<h2 id="tocS_MotionGraphicsConfiguration">MotionGraphicsConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemamotiongraphicsconfiguration"></a>
<a id="schema_MotionGraphicsConfiguration"></a>
<a id="tocSmotiongraphicsconfiguration"></a>
<a id="tocsmotiongraphicsconfiguration"></a>

```json
{
  "MotionGraphicsInsertion": {},
  "MotionGraphicsSettings": {
    "HtmlMotionGraphicsSettings": {}
  }
}
```

Motion Graphics Configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MotionGraphicsInsertion|object|false|none|none|
|MotionGraphicsSettings|object|true|none|none|

<h2 id="tocS_NielsenConfiguration">NielsenConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemanielsenconfiguration"></a>
<a id="schema_NielsenConfiguration"></a>
<a id="tocSnielsenconfiguration"></a>
<a id="tocsnielsenconfiguration"></a>

```json
{
  "DistributorId": {},
  "NielsenPcmToId3Tagging": {}
}
```

Nielsen Configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DistributorId|object|false|none|none|
|NielsenPcmToId3Tagging|object|false|none|none|

<h2 id="tocS___listOfOutputGroup">__listOfOutputGroup</h2>
<!-- backwards compatibility -->
<a id="schema__listofoutputgroup"></a>
<a id="schema___listOfOutputGroup"></a>
<a id="tocS__listofoutputgroup"></a>
<a id="tocs__listofoutputgroup"></a>

```json
[
  {
    "Name": {},
    "OutputGroupSettings": {
      "ArchiveGroupSettings": {
        "ArchiveCdnSettings": {
          "ArchiveS3Settings": {
            "CannedAcl": {}
          }
        },
        "Destination": {
          "DestinationRefId": {}
        },
        "RolloverInterval": {}
      },
      "FrameCaptureGroupSettings": {
        "Destination": {
          "DestinationRefId": {}
        },
        "FrameCaptureCdnSettings": {
          "FrameCaptureS3Settings": {
            "CannedAcl": {}
          }
        }
      },
      "HlsGroupSettings": {
        "AdMarkers": {},
        "BaseUrlContent": {},
        "BaseUrlContent1": {},
        "BaseUrlManifest": {},
        "BaseUrlManifest1": {},
        "CaptionLanguageMappings": {},
        "CaptionLanguageSetting": {},
        "ClientCache": {},
        "CodecSpecification": {},
        "ConstantIv": {},
        "Destination": {
          "DestinationRefId": {}
        },
        "DirectoryStructure": {},
        "DiscontinuityTags": {},
        "EncryptionType": {},
        "HlsCdnSettings": {
          "HlsAkamaiSettings": {
            "ConnectionRetryInterval": {},
            "FilecacheDuration": {},
            "HttpTransferMode": {},
            "NumRetries": {},
            "RestartDelay": {},
            "Salt": {},
            "Token": {}
          },
          "HlsBasicPutSettings": {
            "ConnectionRetryInterval": {},
            "FilecacheDuration": {},
            "NumRetries": {},
            "RestartDelay": {}
          },
          "HlsMediaStoreSettings": {
            "ConnectionRetryInterval": {},
            "FilecacheDuration": {},
            "MediaStoreStorageClass": {},
            "NumRetries": {},
            "RestartDelay": {}
          },
          "HlsS3Settings": {
            "CannedAcl": {}
          },
          "HlsWebdavSettings": {
            "ConnectionRetryInterval": {},
            "FilecacheDuration": {},
            "HttpTransferMode": {},
            "NumRetries": {},
            "RestartDelay": {}
          }
        },
        "HlsId3SegmentTagging": {},
        "IFrameOnlyPlaylists": {},
        "IncompleteSegmentBehavior": {},
        "IndexNSegments": {},
        "InputLossAction": {},
        "IvInManifest": {},
        "IvSource": {},
        "KeepSegments": {},
        "KeyFormat": {},
        "KeyFormatVersions": {},
        "KeyProviderSettings": {
          "StaticKeySettings": {
            "KeyProviderServer": {
              "PasswordParam": {},
              "Uri": {},
              "Username": {}
            },
            "StaticKeyValue": {}
          }
        },
        "ManifestCompression": {},
        "ManifestDurationFormat": {},
        "MinSegmentLength": {},
        "Mode": {},
        "OutputSelection": {},
        "ProgramDateTime": {},
        "ProgramDateTimeClock": {},
        "ProgramDateTimePeriod": {},
        "RedundantManifest": {},
        "SegmentLength": {},
        "SegmentationMode": {},
        "SegmentsPerSubdirectory": {},
        "StreamInfResolution": {},
        "TimedMetadataId3Frame": {},
        "TimedMetadataId3Period": {},
        "TimestampDeltaMilliseconds": {},
        "TsFileMode": {}
      },
      "MediaPackageGroupSettings": {
        "Destination": {
          "DestinationRefId": {}
        }
      },
      "MsSmoothGroupSettings": {
        "AcquisitionPointId": {},
        "AudioOnlyTimecodeControl": {},
        "CertificateMode": {},
        "ConnectionRetryInterval": {},
        "Destination": {
          "DestinationRefId": {}
        },
        "EventId": {},
        "EventIdMode": {},
        "EventStopBehavior": {},
        "FilecacheDuration": {},
        "FragmentLength": {},
        "InputLossAction": {},
        "NumRetries": {},
        "RestartDelay": {},
        "SegmentationMode": {},
        "SendDelayMs": {},
        "SparseTrackType": {},
        "StreamManifestBehavior": {},
        "TimestampOffset": {},
        "TimestampOffsetMode": {}
      },
      "MultiplexGroupSettings": {},
      "RtmpGroupSettings": {
        "AdMarkers": {},
        "AuthenticationScheme": {},
        "CacheFullBehavior": {},
        "CacheLength": {},
        "CaptionData": {},
        "InputLossAction": {},
        "RestartDelay": {}
      },
      "UdpGroupSettings": {
        "InputLossAction": {},
        "TimedMetadataId3Frame": {},
        "TimedMetadataId3Period": {}
      }
    },
    "Outputs": {}
  }
]
```

Placeholder documentation for __listOfOutputGroup

<h2 id="tocS_TimecodeConfig">TimecodeConfig</h2>
<!-- backwards compatibility -->
<a id="schematimecodeconfig"></a>
<a id="schema_TimecodeConfig"></a>
<a id="tocStimecodeconfig"></a>
<a id="tocstimecodeconfig"></a>

```json
{
  "Source": {},
  "SyncThreshold": {}
}
```

Timecode Config

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Source|object|true|none|none|
|SyncThreshold|object|false|none|none|

<h2 id="tocS___listOfVideoDescription">__listOfVideoDescription</h2>
<!-- backwards compatibility -->
<a id="schema__listofvideodescription"></a>
<a id="schema___listOfVideoDescription"></a>
<a id="tocS__listofvideodescription"></a>
<a id="tocs__listofvideodescription"></a>

```json
[
  {
    "CodecSettings": {
      "FrameCaptureSettings": {
        "CaptureInterval": {},
        "CaptureIntervalUnits": {},
        "TimecodeBurninSettings": {
          "FontSize": {},
          "Position": {},
          "Prefix": {}
        }
      },
      "H264Settings": {
        "AdaptiveQuantization": {},
        "AfdSignaling": {},
        "Bitrate": {},
        "BufFillPct": {},
        "BufSize": {},
        "ColorMetadata": {},
        "ColorSpaceSettings": {
          "ColorSpacePassthroughSettings": {},
          "Rec601Settings": {},
          "Rec709Settings": {}
        },
        "EntropyEncoding": {},
        "FilterSettings": {
          "TemporalFilterSettings": {
            "PostFilterSharpening": {},
            "Strength": {}
          }
        },
        "FixedAfd": {},
        "FlickerAq": {},
        "ForceFieldPictures": {},
        "FramerateControl": {},
        "FramerateDenominator": {},
        "FramerateNumerator": {},
        "GopBReference": {},
        "GopClosedCadence": {},
        "GopNumBFrames": {},
        "GopSize": {},
        "GopSizeUnits": {},
        "Level": {},
        "LookAheadRateControl": {},
        "MaxBitrate": {},
        "MinIInterval": {},
        "NumRefFrames": {},
        "ParControl": {},
        "ParDenominator": {},
        "ParNumerator": {},
        "Profile": {},
        "QualityLevel": {},
        "QvbrQualityLevel": {},
        "RateControlMode": {},
        "ScanType": {},
        "SceneChangeDetect": {},
        "Slices": {},
        "Softness": {},
        "SpatialAq": {},
        "SubgopLength": {},
        "Syntax": {},
        "TemporalAq": {},
        "TimecodeInsertion": {},
        "TimecodeBurninSettings": {
          "FontSize": {},
          "Position": {},
          "Prefix": {}
        }
      },
      "H265Settings": {
        "AdaptiveQuantization": {},
        "AfdSignaling": {},
        "AlternativeTransferFunction": {},
        "Bitrate": {},
        "BufSize": {},
        "ColorMetadata": {},
        "ColorSpaceSettings": {
          "ColorSpacePassthroughSettings": {},
          "DolbyVision81Settings": {},
          "Hdr10Settings": {
            "MaxCll": {},
            "MaxFall": {}
          },
          "Rec601Settings": {},
          "Rec709Settings": {}
        },
        "FilterSettings": {
          "TemporalFilterSettings": {
            "PostFilterSharpening": {},
            "Strength": {}
          }
        },
        "FixedAfd": {},
        "FlickerAq": {},
        "FramerateDenominator": {},
        "FramerateNumerator": {},
        "GopClosedCadence": {},
        "GopSize": {},
        "GopSizeUnits": {},
        "Level": {},
        "LookAheadRateControl": {},
        "MaxBitrate": {},
        "MinIInterval": {},
        "ParDenominator": {},
        "ParNumerator": {},
        "Profile": {},
        "QvbrQualityLevel": {},
        "RateControlMode": {},
        "ScanType": {},
        "SceneChangeDetect": {},
        "Slices": {},
        "Tier": {},
        "TimecodeInsertion": {},
        "TimecodeBurninSettings": {
          "FontSize": {},
          "Position": {},
          "Prefix": {}
        }
      },
      "Mpeg2Settings": {
        "AdaptiveQuantization": {},
        "AfdSignaling": {},
        "ColorMetadata": {},
        "ColorSpace": {},
        "DisplayAspectRatio": {},
        "FilterSettings": {
          "TemporalFilterSettings": {
            "PostFilterSharpening": {},
            "Strength": {}
          }
        },
        "FixedAfd": {},
        "FramerateDenominator": {},
        "FramerateNumerator": {},
        "GopClosedCadence": {},
        "GopNumBFrames": {},
        "GopSize": {},
        "GopSizeUnits": {},
        "ScanType": {},
        "SubgopLength": {},
        "TimecodeInsertion": {},
        "TimecodeBurninSettings": {
          "FontSize": {},
          "Position": {},
          "Prefix": {}
        }
      }
    },
    "Height": {},
    "Name": {},
    "RespondToAfd": {},
    "ScalingBehavior": {},
    "Sharpness": {},
    "Width": {}
  }
]
```

Placeholder documentation for __listOfVideoDescription

<h2 id="tocS_InputAttachment">InputAttachment</h2>
<!-- backwards compatibility -->
<a id="schemainputattachment"></a>
<a id="schema_InputAttachment"></a>
<a id="tocSinputattachment"></a>
<a id="tocsinputattachment"></a>

```json
{
  "AutomaticInputFailoverSettings": {
    "ErrorClearTimeMsec": {},
    "FailoverConditions": {},
    "InputPreference": {},
    "SecondaryInputId": {}
  },
  "InputAttachmentName": {},
  "InputId": {},
  "InputSettings": {
    "AudioSelectors": {},
    "CaptionSelectors": {},
    "DeblockFilter": {},
    "DenoiseFilter": {},
    "FilterStrength": {},
    "InputFilter": {},
    "NetworkInputSettings": {
      "HlsInputSettings": {
        "Bandwidth": {},
        "BufferSegments": {},
        "Retries": {},
        "RetryInterval": {},
        "Scte35Source": {}
      },
      "ServerValidation": {}
    },
    "Scte35Pid": {},
    "Smpte2038DataPreference": {},
    "SourceEndBehavior": {},
    "VideoSelector": {
      "ColorSpace": {},
      "ColorSpaceSettings": {
        "Hdr10Settings": {
          "MaxCll": {},
          "MaxFall": {}
        }
      },
      "ColorSpaceUsage": {},
      "SelectorSettings": {
        "VideoSelectorPid": {
          "Pid": {}
        },
        "VideoSelectorProgramId": {
          "ProgramId": {}
        }
      }
    }
  }
}
```

Placeholder documentation for InputAttachment

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutomaticInputFailoverSettings|object|false|none|none|
|InputAttachmentName|object|false|none|none|
|InputId|object|false|none|none|
|InputSettings|object|false|none|none|

<h2 id="tocS_InputCodec">InputCodec</h2>
<!-- backwards compatibility -->
<a id="schemainputcodec"></a>
<a id="schema_InputCodec"></a>
<a id="tocSinputcodec"></a>
<a id="tocsinputcodec"></a>

```json
"MPEG2"
```

codec in increasing order of complexity

<h2 id="tocS_InputMaximumBitrate">InputMaximumBitrate</h2>
<!-- backwards compatibility -->
<a id="schemainputmaximumbitrate"></a>
<a id="schema_InputMaximumBitrate"></a>
<a id="tocSinputmaximumbitrate"></a>
<a id="tocsinputmaximumbitrate"></a>

```json
"MAX_10_MBPS"
```

Maximum input bitrate in megabits per second. Bitrates up to 50 Mbps are supported currently.

<h2 id="tocS_InputResolution">InputResolution</h2>
<!-- backwards compatibility -->
<a id="schemainputresolution"></a>
<a id="schema_InputResolution"></a>
<a id="tocSinputresolution"></a>
<a id="tocsinputresolution"></a>

```json
"SD"
```

Input resolution based on lines of vertical resolution in the input; SD is less than 720 lines, HD is 720 to 1080 lines, UHD is greater than 1080 lines

<h2 id="tocS_MaintenanceDay">MaintenanceDay</h2>
<!-- backwards compatibility -->
<a id="schemamaintenanceday"></a>
<a id="schema_MaintenanceDay"></a>
<a id="tocSmaintenanceday"></a>
<a id="tocsmaintenanceday"></a>

```json
"MONDAY"
```

The currently selected maintenance day.

<h2 id="tocS___stringPattern010920300">__stringPattern010920300</h2>
<!-- backwards compatibility -->
<a id="schema__stringpattern010920300"></a>
<a id="schema___stringPattern010920300"></a>
<a id="tocS__stringpattern010920300"></a>
<a id="tocs__stringpattern010920300"></a>

```json
"string"
```

Placeholder documentation for __stringPattern010920300

<h2 id="tocS_CreateInputResponse">CreateInputResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateinputresponse"></a>
<a id="schema_CreateInputResponse"></a>
<a id="tocScreateinputresponse"></a>
<a id="tocscreateinputresponse"></a>

```json
{
  "Input": {
    "Arn": {},
    "AttachedChannels": {},
    "Destinations": {},
    "Id": {},
    "InputClass": {},
    "InputDevices": {},
    "InputPartnerIds": {},
    "InputSourceType": {},
    "MediaConnectFlows": {},
    "Name": {},
    "RoleArn": {},
    "SecurityGroups": {},
    "Sources": {},
    "State": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "Type": {}
  }
}
```

Placeholder documentation for CreateInputResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Input|object|false|none|none|

<h2 id="tocS_InputDestinationRequest">InputDestinationRequest</h2>
<!-- backwards compatibility -->
<a id="schemainputdestinationrequest"></a>
<a id="schema_InputDestinationRequest"></a>
<a id="tocSinputdestinationrequest"></a>
<a id="tocsinputdestinationrequest"></a>

```json
{
  "StreamName": {}
}
```

Endpoint settings for a PUSH type input.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamName|object|false|none|none|

<h2 id="tocS_InputDeviceSettings">InputDeviceSettings</h2>
<!-- backwards compatibility -->
<a id="schemainputdevicesettings"></a>
<a id="schema_InputDeviceSettings"></a>
<a id="tocSinputdevicesettings"></a>
<a id="tocsinputdevicesettings"></a>

```json
{
  "Id": {}
}
```

Settings for an input device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|

<h2 id="tocS_MediaConnectFlowRequest">MediaConnectFlowRequest</h2>
<!-- backwards compatibility -->
<a id="schemamediaconnectflowrequest"></a>
<a id="schema_MediaConnectFlowRequest"></a>
<a id="tocSmediaconnectflowrequest"></a>
<a id="tocsmediaconnectflowrequest"></a>

```json
{
  "FlowArn": {}
}
```

The settings for a MediaConnect Flow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FlowArn|object|false|none|none|

<h2 id="tocS_InputSourceRequest">InputSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemainputsourcerequest"></a>
<a id="schema_InputSourceRequest"></a>
<a id="tocSinputsourcerequest"></a>
<a id="tocsinputsourcerequest"></a>

```json
{
  "PasswordParam": {},
  "Url": {},
  "Username": {}
}
```

Settings for for a PULL type input.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PasswordParam|object|false|none|none|
|Url|object|false|none|none|
|Username|object|false|none|none|

<h2 id="tocS_CreateInputSecurityGroupResponse">CreateInputSecurityGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateinputsecuritygroupresponse"></a>
<a id="schema_CreateInputSecurityGroupResponse"></a>
<a id="tocScreateinputsecuritygroupresponse"></a>
<a id="tocscreateinputsecuritygroupresponse"></a>

```json
{
  "SecurityGroup": {
    "Arn": {},
    "Id": {},
    "Inputs": {},
    "State": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "WhitelistRules": {}
  }
}
```

Placeholder documentation for CreateInputSecurityGroupResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SecurityGroup|object|false|none|none|

<h2 id="tocS_InputWhitelistRuleCidr">InputWhitelistRuleCidr</h2>
<!-- backwards compatibility -->
<a id="schemainputwhitelistrulecidr"></a>
<a id="schema_InputWhitelistRuleCidr"></a>
<a id="tocSinputwhitelistrulecidr"></a>
<a id="tocsinputwhitelistrulecidr"></a>

```json
{
  "Cidr": {}
}
```

An IPv4 CIDR to whitelist.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Cidr|object|false|none|none|

<h2 id="tocS_CreateMultiplexResponse">CreateMultiplexResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatemultiplexresponse"></a>
<a id="schema_CreateMultiplexResponse"></a>
<a id="tocScreatemultiplexresponse"></a>
<a id="tocscreatemultiplexresponse"></a>

```json
{
  "Multiplex": {
    "Arn": {},
    "AvailabilityZones": {},
    "Destinations": {},
    "Id": {},
    "MultiplexSettings": {
      "MaximumVideoBufferDelayMilliseconds": {},
      "TransportStreamBitrate": {},
      "TransportStreamId": {},
      "TransportStreamReservedBitrate": {}
    },
    "Name": {},
    "PipelinesRunningCount": {},
    "ProgramCount": {},
    "State": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

Placeholder documentation for CreateMultiplexResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Multiplex|object|false|none|none|

<h2 id="tocS___integerMin800Max3000">__integerMin800Max3000</h2>
<!-- backwards compatibility -->
<a id="schema__integermin800max3000"></a>
<a id="schema___integerMin800Max3000"></a>
<a id="tocS__integermin800max3000"></a>
<a id="tocs__integermin800max3000"></a>

```json
800
```

Placeholder documentation for __integerMin800Max3000

<h2 id="tocS___integerMin1000000Max100000000">__integerMin1000000Max100000000</h2>
<!-- backwards compatibility -->
<a id="schema__integermin1000000max100000000"></a>
<a id="schema___integerMin1000000Max100000000"></a>
<a id="tocS__integermin1000000max100000000"></a>
<a id="tocs__integermin1000000max100000000"></a>

```json
1000000
```

Placeholder documentation for __integerMin1000000Max100000000

<h2 id="tocS___integerMin0Max65535">__integerMin0Max65535</h2>
<!-- backwards compatibility -->
<a id="schema__integermin0max65535"></a>
<a id="schema___integerMin0Max65535"></a>
<a id="tocS__integermin0max65535"></a>
<a id="tocs__integermin0max65535"></a>

```json
0
```

Placeholder documentation for __integerMin0Max65535

<h2 id="tocS___integerMin0Max100000000">__integerMin0Max100000000</h2>
<!-- backwards compatibility -->
<a id="schema__integermin0max100000000"></a>
<a id="schema___integerMin0Max100000000"></a>
<a id="tocS__integermin0max100000000"></a>
<a id="tocs__integermin0max100000000"></a>

```json
0
```

Placeholder documentation for __integerMin0Max100000000

<h2 id="tocS_CreateMultiplexProgramResponse">CreateMultiplexProgramResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatemultiplexprogramresponse"></a>
<a id="schema_CreateMultiplexProgramResponse"></a>
<a id="tocScreatemultiplexprogramresponse"></a>
<a id="tocscreatemultiplexprogramresponse"></a>

```json
{
  "MultiplexProgram": {
    "ChannelId": {},
    "MultiplexProgramSettings": {
      "PreferredChannelPipeline": {},
      "ProgramNumber": {},
      "ServiceDescriptor": {
        "ProviderName": {},
        "ServiceName": {}
      },
      "VideoSettings": {
        "ConstantBitrate": {},
        "StatmuxSettings": {
          "MaximumBitrate": {},
          "MinimumBitrate": {},
          "Priority": {}
        }
      }
    },
    "PacketIdentifiersMap": {
      "AudioPids": {},
      "DvbSubPids": {},
      "DvbTeletextPid": {},
      "EtvPlatformPid": {},
      "EtvSignalPid": {},
      "KlvDataPids": {},
      "PcrPid": {},
      "PmtPid": {},
      "PrivateMetadataPid": {},
      "Scte27Pids": {},
      "Scte35Pid": {},
      "TimedMetadataPid": {},
      "VideoPid": {}
    },
    "PipelineDetails": {},
    "ProgramName": {}
  }
}
```

Placeholder documentation for CreateMultiplexProgramResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MultiplexProgram|object|false|none|none|

<h2 id="tocS_PreferredChannelPipeline">PreferredChannelPipeline</h2>
<!-- backwards compatibility -->
<a id="schemapreferredchannelpipeline"></a>
<a id="schema_PreferredChannelPipeline"></a>
<a id="tocSpreferredchannelpipeline"></a>
<a id="tocspreferredchannelpipeline"></a>

```json
"CURRENTLY_ACTIVE"
```

Indicates which pipeline is preferred by the multiplex for program ingest.
If set to \"PIPELINE_0\" or \"PIPELINE_1\" and an unhealthy ingest causes the multiplex to switch to the non-preferred pipeline,
it will switch back once that ingest is healthy again. If set to \"CURRENTLY_ACTIVE\",
it will not switch back to the other pipeline based on it recovering to a healthy state,
it will only switch if the active pipeline becomes unhealthy.

<h2 id="tocS_MultiplexProgramServiceDescriptor">MultiplexProgramServiceDescriptor</h2>
<!-- backwards compatibility -->
<a id="schemamultiplexprogramservicedescriptor"></a>
<a id="schema_MultiplexProgramServiceDescriptor"></a>
<a id="tocSmultiplexprogramservicedescriptor"></a>
<a id="tocsmultiplexprogramservicedescriptor"></a>

```json
{
  "ProviderName": {},
  "ServiceName": {}
}
```

Transport stream service descriptor configuration for the Multiplex program.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProviderName|object|true|none|none|
|ServiceName|object|true|none|none|

<h2 id="tocS_MultiplexVideoSettings">MultiplexVideoSettings</h2>
<!-- backwards compatibility -->
<a id="schemamultiplexvideosettings"></a>
<a id="schema_MultiplexVideoSettings"></a>
<a id="tocSmultiplexvideosettings"></a>
<a id="tocsmultiplexvideosettings"></a>

```json
{
  "ConstantBitrate": {},
  "StatmuxSettings": {
    "MaximumBitrate": {},
    "MinimumBitrate": {},
    "Priority": {}
  }
}
```

The video configuration for each program in a multiplex.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConstantBitrate|object|false|none|none|
|StatmuxSettings|object|false|none|none|

<h2 id="tocS_CreatePartnerInputResponse">CreatePartnerInputResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatepartnerinputresponse"></a>
<a id="schema_CreatePartnerInputResponse"></a>
<a id="tocScreatepartnerinputresponse"></a>
<a id="tocscreatepartnerinputresponse"></a>

```json
{
  "Input": {
    "Arn": {},
    "AttachedChannels": {},
    "Destinations": {},
    "Id": {},
    "InputClass": {},
    "InputDevices": {},
    "InputPartnerIds": {},
    "InputSourceType": {},
    "MediaConnectFlows": {},
    "Name": {},
    "RoleArn": {},
    "SecurityGroups": {},
    "Sources": {},
    "State": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "Type": {}
  }
}
```

Placeholder documentation for CreatePartnerInputResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Input|object|false|none|none|

<h2 id="tocS_DeleteChannelResponse">DeleteChannelResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletechannelresponse"></a>
<a id="schema_DeleteChannelResponse"></a>
<a id="tocSdeletechannelresponse"></a>
<a id="tocsdeletechannelresponse"></a>

```json
{
  "Arn": {},
  "CdiInputSpecification": {
    "Resolution": {}
  },
  "ChannelClass": {},
  "Destinations": {},
  "EgressEndpoints": {},
  "EncoderSettings": {
    "AudioDescriptions": {},
    "AvailBlanking": {
      "AvailBlankingImage": {
        "PasswordParam": {},
        "Uri": {},
        "Username": {}
      },
      "State": {}
    },
    "AvailConfiguration": {
      "AvailSettings": {
        "Esam": {
          "AcquisitionPointId": {},
          "AdAvailOffset": {},
          "PasswordParam": {},
          "PoisEndpoint": {},
          "Username": {},
          "ZoneIdentity": {}
        },
        "Scte35SpliceInsert": {
          "AdAvailOffset": {},
          "NoRegionalBlackoutFlag": {},
          "WebDeliveryAllowedFlag": {}
        },
        "Scte35TimeSignalApos": {
          "AdAvailOffset": {},
          "NoRegionalBlackoutFlag": {},
          "WebDeliveryAllowedFlag": {}
        }
      }
    },
    "BlackoutSlate": {
      "BlackoutSlateImage": {
        "PasswordParam": {},
        "Uri": {},
        "Username": {}
      },
      "NetworkEndBlackout": {},
      "NetworkEndBlackoutImage": {
        "PasswordParam": {},
        "Uri": {},
        "Username": {}
      },
      "NetworkId": {},
      "State": {}
    },
    "CaptionDescriptions": {},
    "FeatureActivations": {
      "InputPrepareScheduleActions": {}
    },
    "GlobalConfiguration": {
      "InitialAudioGain": {},
      "InputEndAction": {},
      "InputLossBehavior": {
        "BlackFrameMsec": {},
        "InputLossImageColor": {},
        "InputLossImageSlate": {
          "PasswordParam": {},
          "Uri": {},
          "Username": {}
        },
        "InputLossImageType": {},
        "RepeatFrameMsec": {}
      },
      "OutputLockingMode": {},
      "OutputTimingSource": {},
      "SupportLowFramerateInputs": {}
    },
    "MotionGraphicsConfiguration": {
      "MotionGraphicsInsertion": {},
      "MotionGraphicsSettings": {
        "HtmlMotionGraphicsSettings": {}
      }
    },
    "NielsenConfiguration": {
      "DistributorId": {},
      "NielsenPcmToId3Tagging": {}
    },
    "OutputGroups": {},
    "TimecodeConfig": {
      "Source": {},
      "SyncThreshold": {}
    },
    "VideoDescriptions": {}
  },
  "Id": {},
  "InputAttachments": {},
  "InputSpecification": {
    "Codec": {},
    "MaximumBitrate": {},
    "Resolution": {}
  },
  "LogLevel": {},
  "Maintenance": {
    "MaintenanceDay": {},
    "MaintenanceDeadline": {},
    "MaintenanceScheduledDate": {},
    "MaintenanceStartTime": {}
  },
  "Name": {},
  "PipelineDetails": {},
  "PipelinesRunningCount": {},
  "RoleArn": {},
  "State": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Vpc": {
    "AvailabilityZones": {},
    "NetworkInterfaceIds": {},
    "SecurityGroupIds": {},
    "SubnetIds": {}
  }
}
```

Placeholder documentation for DeleteChannelResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CdiInputSpecification|object|false|none|none|
|ChannelClass|object|false|none|none|
|Destinations|object|false|none|none|
|EgressEndpoints|object|false|none|none|
|EncoderSettings|object|false|none|none|
|Id|object|false|none|none|
|InputAttachments|object|false|none|none|
|InputSpecification|object|false|none|none|
|LogLevel|object|false|none|none|
|Maintenance|object|false|none|none|
|Name|object|false|none|none|
|PipelineDetails|object|false|none|none|
|PipelinesRunningCount|object|false|none|none|
|RoleArn|object|false|none|none|
|State|object|false|none|none|
|Tags|object|false|none|none|
|Vpc|object|false|none|none|

<h2 id="tocS_DeleteInputResponse">DeleteInputResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteinputresponse"></a>
<a id="schema_DeleteInputResponse"></a>
<a id="tocSdeleteinputresponse"></a>
<a id="tocsdeleteinputresponse"></a>

```json
{}
```

Placeholder documentation for DeleteInputResponse

<h2 id="tocS_DeleteInputSecurityGroupResponse">DeleteInputSecurityGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteinputsecuritygroupresponse"></a>
<a id="schema_DeleteInputSecurityGroupResponse"></a>
<a id="tocSdeleteinputsecuritygroupresponse"></a>
<a id="tocsdeleteinputsecuritygroupresponse"></a>

```json
{}
```

Placeholder documentation for DeleteInputSecurityGroupResponse

<h2 id="tocS_DeleteMultiplexResponse">DeleteMultiplexResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletemultiplexresponse"></a>
<a id="schema_DeleteMultiplexResponse"></a>
<a id="tocSdeletemultiplexresponse"></a>
<a id="tocsdeletemultiplexresponse"></a>

```json
{
  "Arn": {},
  "AvailabilityZones": {},
  "Destinations": {},
  "Id": {},
  "MultiplexSettings": {
    "MaximumVideoBufferDelayMilliseconds": {},
    "TransportStreamBitrate": {},
    "TransportStreamId": {},
    "TransportStreamReservedBitrate": {}
  },
  "Name": {},
  "PipelinesRunningCount": {},
  "ProgramCount": {},
  "State": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Placeholder documentation for DeleteMultiplexResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|AvailabilityZones|object|false|none|none|
|Destinations|object|false|none|none|
|Id|object|false|none|none|
|MultiplexSettings|object|false|none|none|
|Name|object|false|none|none|
|PipelinesRunningCount|object|false|none|none|
|ProgramCount|object|false|none|none|
|State|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DeleteMultiplexProgramResponse">DeleteMultiplexProgramResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletemultiplexprogramresponse"></a>
<a id="schema_DeleteMultiplexProgramResponse"></a>
<a id="tocSdeletemultiplexprogramresponse"></a>
<a id="tocsdeletemultiplexprogramresponse"></a>

```json
{
  "ChannelId": {},
  "MultiplexProgramSettings": {
    "PreferredChannelPipeline": {},
    "ProgramNumber": {},
    "ServiceDescriptor": {
      "ProviderName": {},
      "ServiceName": {}
    },
    "VideoSettings": {
      "ConstantBitrate": {},
      "StatmuxSettings": {
        "MaximumBitrate": {},
        "MinimumBitrate": {},
        "Priority": {}
      }
    }
  },
  "PacketIdentifiersMap": {
    "AudioPids": {},
    "DvbSubPids": {},
    "DvbTeletextPid": {},
    "EtvPlatformPid": {},
    "EtvSignalPid": {},
    "KlvDataPids": {},
    "PcrPid": {},
    "PmtPid": {},
    "PrivateMetadataPid": {},
    "Scte27Pids": {},
    "Scte35Pid": {},
    "TimedMetadataPid": {},
    "VideoPid": {}
  },
  "PipelineDetails": {},
  "ProgramName": {}
}
```

Placeholder documentation for DeleteMultiplexProgramResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelId|object|false|none|none|
|MultiplexProgramSettings|object|false|none|none|
|PacketIdentifiersMap|object|false|none|none|
|PipelineDetails|object|false|none|none|
|ProgramName|object|false|none|none|

<h2 id="tocS_DeleteReservationResponse">DeleteReservationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletereservationresponse"></a>
<a id="schema_DeleteReservationResponse"></a>
<a id="tocSdeletereservationresponse"></a>
<a id="tocsdeletereservationresponse"></a>

```json
{
  "Arn": {},
  "Count": {},
  "CurrencyCode": {},
  "Duration": {},
  "DurationUnits": {},
  "End": {},
  "FixedPrice": {},
  "Name": {},
  "OfferingDescription": {},
  "OfferingId": {},
  "OfferingType": {},
  "Region": {},
  "RenewalSettings": {
    "AutomaticRenewal": {},
    "RenewalCount": {}
  },
  "ReservationId": {},
  "ResourceSpecification": {
    "ChannelClass": {},
    "Codec": {},
    "MaximumBitrate": {},
    "MaximumFramerate": {},
    "Resolution": {},
    "ResourceType": {},
    "SpecialFeature": {},
    "VideoQuality": {}
  },
  "Start": {},
  "State": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "UsagePrice": {}
}
```

Placeholder documentation for DeleteReservationResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Count|object|false|none|none|
|CurrencyCode|object|false|none|none|
|Duration|object|false|none|none|
|DurationUnits|object|false|none|none|
|End|object|false|none|none|
|FixedPrice|object|false|none|none|
|Name|object|false|none|none|
|OfferingDescription|object|false|none|none|
|OfferingId|object|false|none|none|
|OfferingType|object|false|none|none|
|Region|object|false|none|none|
|RenewalSettings|object|false|none|none|
|ReservationId|object|false|none|none|
|ResourceSpecification|object|false|none|none|
|Start|object|false|none|none|
|State|object|false|none|none|
|Tags|object|false|none|none|
|UsagePrice|object|false|none|none|

<h2 id="tocS_DeleteScheduleResponse">DeleteScheduleResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletescheduleresponse"></a>
<a id="schema_DeleteScheduleResponse"></a>
<a id="tocSdeletescheduleresponse"></a>
<a id="tocsdeletescheduleresponse"></a>

```json
{}
```

Placeholder documentation for DeleteScheduleResponse

<h2 id="tocS_DescribeChannelResponse">DescribeChannelResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribechannelresponse"></a>
<a id="schema_DescribeChannelResponse"></a>
<a id="tocSdescribechannelresponse"></a>
<a id="tocsdescribechannelresponse"></a>

```json
{
  "Arn": {},
  "CdiInputSpecification": {
    "Resolution": {}
  },
  "ChannelClass": {},
  "Destinations": {},
  "EgressEndpoints": {},
  "EncoderSettings": {
    "AudioDescriptions": {},
    "AvailBlanking": {
      "AvailBlankingImage": {
        "PasswordParam": {},
        "Uri": {},
        "Username": {}
      },
      "State": {}
    },
    "AvailConfiguration": {
      "AvailSettings": {
        "Esam": {
          "AcquisitionPointId": {},
          "AdAvailOffset": {},
          "PasswordParam": {},
          "PoisEndpoint": {},
          "Username": {},
          "ZoneIdentity": {}
        },
        "Scte35SpliceInsert": {
          "AdAvailOffset": {},
          "NoRegionalBlackoutFlag": {},
          "WebDeliveryAllowedFlag": {}
        },
        "Scte35TimeSignalApos": {
          "AdAvailOffset": {},
          "NoRegionalBlackoutFlag": {},
          "WebDeliveryAllowedFlag": {}
        }
      }
    },
    "BlackoutSlate": {
      "BlackoutSlateImage": {
        "PasswordParam": {},
        "Uri": {},
        "Username": {}
      },
      "NetworkEndBlackout": {},
      "NetworkEndBlackoutImage": {
        "PasswordParam": {},
        "Uri": {},
        "Username": {}
      },
      "NetworkId": {},
      "State": {}
    },
    "CaptionDescriptions": {},
    "FeatureActivations": {
      "InputPrepareScheduleActions": {}
    },
    "GlobalConfiguration": {
      "InitialAudioGain": {},
      "InputEndAction": {},
      "InputLossBehavior": {
        "BlackFrameMsec": {},
        "InputLossImageColor": {},
        "InputLossImageSlate": {
          "PasswordParam": {},
          "Uri": {},
          "Username": {}
        },
        "InputLossImageType": {},
        "RepeatFrameMsec": {}
      },
      "OutputLockingMode": {},
      "OutputTimingSource": {},
      "SupportLowFramerateInputs": {}
    },
    "MotionGraphicsConfiguration": {
      "MotionGraphicsInsertion": {},
      "MotionGraphicsSettings": {
        "HtmlMotionGraphicsSettings": {}
      }
    },
    "NielsenConfiguration": {
      "DistributorId": {},
      "NielsenPcmToId3Tagging": {}
    },
    "OutputGroups": {},
    "TimecodeConfig": {
      "Source": {},
      "SyncThreshold": {}
    },
    "VideoDescriptions": {}
  },
  "Id": {},
  "InputAttachments": {},
  "InputSpecification": {
    "Codec": {},
    "MaximumBitrate": {},
    "Resolution": {}
  },
  "LogLevel": {},
  "Maintenance": {
    "MaintenanceDay": {},
    "MaintenanceDeadline": {},
    "MaintenanceScheduledDate": {},
    "MaintenanceStartTime": {}
  },
  "Name": {},
  "PipelineDetails": {},
  "PipelinesRunningCount": {},
  "RoleArn": {},
  "State": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Vpc": {
    "AvailabilityZones": {},
    "NetworkInterfaceIds": {},
    "SecurityGroupIds": {},
    "SubnetIds": {}
  }
}
```

Placeholder documentation for DescribeChannelResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CdiInputSpecification|object|false|none|none|
|ChannelClass|object|false|none|none|
|Destinations|object|false|none|none|
|EgressEndpoints|object|false|none|none|
|EncoderSettings|object|false|none|none|
|Id|object|false|none|none|
|InputAttachments|object|false|none|none|
|InputSpecification|object|false|none|none|
|LogLevel|object|false|none|none|
|Maintenance|object|false|none|none|
|Name|object|false|none|none|
|PipelineDetails|object|false|none|none|
|PipelinesRunningCount|object|false|none|none|
|RoleArn|object|false|none|none|
|State|object|false|none|none|
|Tags|object|false|none|none|
|Vpc|object|false|none|none|

<h2 id="tocS_DescribeInputResponse">DescribeInputResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeinputresponse"></a>
<a id="schema_DescribeInputResponse"></a>
<a id="tocSdescribeinputresponse"></a>
<a id="tocsdescribeinputresponse"></a>

```json
{
  "Arn": {},
  "AttachedChannels": {},
  "Destinations": {},
  "Id": {},
  "InputClass": {},
  "InputDevices": {},
  "InputPartnerIds": {},
  "InputSourceType": {},
  "MediaConnectFlows": {},
  "Name": {},
  "RoleArn": {},
  "SecurityGroups": {},
  "Sources": {},
  "State": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Type": {}
}
```

Placeholder documentation for DescribeInputResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|AttachedChannels|object|false|none|none|
|Destinations|object|false|none|none|
|Id|object|false|none|none|
|InputClass|object|false|none|none|
|InputDevices|object|false|none|none|
|InputPartnerIds|object|false|none|none|
|InputSourceType|object|false|none|none|
|MediaConnectFlows|object|false|none|none|
|Name|object|false|none|none|
|RoleArn|object|false|none|none|
|SecurityGroups|object|false|none|none|
|Sources|object|false|none|none|
|State|object|false|none|none|
|Tags|object|false|none|none|
|Type|object|false|none|none|

<h2 id="tocS_DescribeInputDeviceResponse">DescribeInputDeviceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeinputdeviceresponse"></a>
<a id="schema_DescribeInputDeviceResponse"></a>
<a id="tocSdescribeinputdeviceresponse"></a>
<a id="tocsdescribeinputdeviceresponse"></a>

```json
{
  "Arn": {},
  "ConnectionState": {},
  "DeviceSettingsSyncState": {},
  "DeviceUpdateStatus": {},
  "HdDeviceSettings": {
    "ActiveInput": {},
    "ConfiguredInput": {},
    "DeviceState": {},
    "Framerate": {},
    "Height": {},
    "MaxBitrate": {},
    "ScanType": {},
    "Width": {},
    "LatencyMs": {}
  },
  "Id": {},
  "MacAddress": {},
  "Name": {},
  "NetworkSettings": {
    "DnsAddresses": {},
    "Gateway": {},
    "IpAddress": {},
    "IpScheme": {},
    "SubnetMask": {}
  },
  "SerialNumber": {},
  "Type": {},
  "UhdDeviceSettings": {
    "ActiveInput": {},
    "ConfiguredInput": {},
    "DeviceState": {},
    "Framerate": {},
    "Height": {},
    "MaxBitrate": {},
    "ScanType": {},
    "Width": {},
    "LatencyMs": {}
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Placeholder documentation for DescribeInputDeviceResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|ConnectionState|object|false|none|none|
|DeviceSettingsSyncState|object|false|none|none|
|DeviceUpdateStatus|object|false|none|none|
|HdDeviceSettings|object|false|none|none|
|Id|object|false|none|none|
|MacAddress|object|false|none|none|
|Name|object|false|none|none|
|NetworkSettings|object|false|none|none|
|SerialNumber|object|false|none|none|
|Type|object|false|none|none|
|UhdDeviceSettings|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DescribeInputDeviceThumbnailResponse">DescribeInputDeviceThumbnailResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeinputdevicethumbnailresponse"></a>
<a id="schema_DescribeInputDeviceThumbnailResponse"></a>
<a id="tocSdescribeinputdevicethumbnailresponse"></a>
<a id="tocsdescribeinputdevicethumbnailresponse"></a>

```json
{
  "Body": {}
}
```

Placeholder documentation for DescribeInputDeviceThumbnailResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Body|object|false|none|none|

<h2 id="tocS_DescribeInputSecurityGroupResponse">DescribeInputSecurityGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeinputsecuritygroupresponse"></a>
<a id="schema_DescribeInputSecurityGroupResponse"></a>
<a id="tocSdescribeinputsecuritygroupresponse"></a>
<a id="tocsdescribeinputsecuritygroupresponse"></a>

```json
{
  "Arn": {},
  "Id": {},
  "Inputs": {},
  "State": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "WhitelistRules": {}
}
```

Placeholder documentation for DescribeInputSecurityGroupResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Id|object|false|none|none|
|Inputs|object|false|none|none|
|State|object|false|none|none|
|Tags|object|false|none|none|
|WhitelistRules|object|false|none|none|

<h2 id="tocS_DescribeMultiplexResponse">DescribeMultiplexResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribemultiplexresponse"></a>
<a id="schema_DescribeMultiplexResponse"></a>
<a id="tocSdescribemultiplexresponse"></a>
<a id="tocsdescribemultiplexresponse"></a>

```json
{
  "Arn": {},
  "AvailabilityZones": {},
  "Destinations": {},
  "Id": {},
  "MultiplexSettings": {
    "MaximumVideoBufferDelayMilliseconds": {},
    "TransportStreamBitrate": {},
    "TransportStreamId": {},
    "TransportStreamReservedBitrate": {}
  },
  "Name": {},
  "PipelinesRunningCount": {},
  "ProgramCount": {},
  "State": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Placeholder documentation for DescribeMultiplexResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|AvailabilityZones|object|false|none|none|
|Destinations|object|false|none|none|
|Id|object|false|none|none|
|MultiplexSettings|object|false|none|none|
|Name|object|false|none|none|
|PipelinesRunningCount|object|false|none|none|
|ProgramCount|object|false|none|none|
|State|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DescribeMultiplexProgramResponse">DescribeMultiplexProgramResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribemultiplexprogramresponse"></a>
<a id="schema_DescribeMultiplexProgramResponse"></a>
<a id="tocSdescribemultiplexprogramresponse"></a>
<a id="tocsdescribemultiplexprogramresponse"></a>

```json
{
  "ChannelId": {},
  "MultiplexProgramSettings": {
    "PreferredChannelPipeline": {},
    "ProgramNumber": {},
    "ServiceDescriptor": {
      "ProviderName": {},
      "ServiceName": {}
    },
    "VideoSettings": {
      "ConstantBitrate": {},
      "StatmuxSettings": {
        "MaximumBitrate": {},
        "MinimumBitrate": {},
        "Priority": {}
      }
    }
  },
  "PacketIdentifiersMap": {
    "AudioPids": {},
    "DvbSubPids": {},
    "DvbTeletextPid": {},
    "EtvPlatformPid": {},
    "EtvSignalPid": {},
    "KlvDataPids": {},
    "PcrPid": {},
    "PmtPid": {},
    "PrivateMetadataPid": {},
    "Scte27Pids": {},
    "Scte35Pid": {},
    "TimedMetadataPid": {},
    "VideoPid": {}
  },
  "PipelineDetails": {},
  "ProgramName": {}
}
```

Placeholder documentation for DescribeMultiplexProgramResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelId|object|false|none|none|
|MultiplexProgramSettings|object|false|none|none|
|PacketIdentifiersMap|object|false|none|none|
|PipelineDetails|object|false|none|none|
|ProgramName|object|false|none|none|

<h2 id="tocS_DescribeOfferingResponse">DescribeOfferingResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeofferingresponse"></a>
<a id="schema_DescribeOfferingResponse"></a>
<a id="tocSdescribeofferingresponse"></a>
<a id="tocsdescribeofferingresponse"></a>

```json
{
  "Arn": {},
  "CurrencyCode": {},
  "Duration": {},
  "DurationUnits": {},
  "FixedPrice": {},
  "OfferingDescription": {},
  "OfferingId": {},
  "OfferingType": {},
  "Region": {},
  "ResourceSpecification": {
    "ChannelClass": {},
    "Codec": {},
    "MaximumBitrate": {},
    "MaximumFramerate": {},
    "Resolution": {},
    "ResourceType": {},
    "SpecialFeature": {},
    "VideoQuality": {}
  },
  "UsagePrice": {}
}
```

Placeholder documentation for DescribeOfferingResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CurrencyCode|object|false|none|none|
|Duration|object|false|none|none|
|DurationUnits|object|false|none|none|
|FixedPrice|object|false|none|none|
|OfferingDescription|object|false|none|none|
|OfferingId|object|false|none|none|
|OfferingType|object|false|none|none|
|Region|object|false|none|none|
|ResourceSpecification|object|false|none|none|
|UsagePrice|object|false|none|none|

<h2 id="tocS_DescribeReservationResponse">DescribeReservationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribereservationresponse"></a>
<a id="schema_DescribeReservationResponse"></a>
<a id="tocSdescribereservationresponse"></a>
<a id="tocsdescribereservationresponse"></a>

```json
{
  "Arn": {},
  "Count": {},
  "CurrencyCode": {},
  "Duration": {},
  "DurationUnits": {},
  "End": {},
  "FixedPrice": {},
  "Name": {},
  "OfferingDescription": {},
  "OfferingId": {},
  "OfferingType": {},
  "Region": {},
  "RenewalSettings": {
    "AutomaticRenewal": {},
    "RenewalCount": {}
  },
  "ReservationId": {},
  "ResourceSpecification": {
    "ChannelClass": {},
    "Codec": {},
    "MaximumBitrate": {},
    "MaximumFramerate": {},
    "Resolution": {},
    "ResourceType": {},
    "SpecialFeature": {},
    "VideoQuality": {}
  },
  "Start": {},
  "State": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "UsagePrice": {}
}
```

Placeholder documentation for DescribeReservationResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Count|object|false|none|none|
|CurrencyCode|object|false|none|none|
|Duration|object|false|none|none|
|DurationUnits|object|false|none|none|
|End|object|false|none|none|
|FixedPrice|object|false|none|none|
|Name|object|false|none|none|
|OfferingDescription|object|false|none|none|
|OfferingId|object|false|none|none|
|OfferingType|object|false|none|none|
|Region|object|false|none|none|
|RenewalSettings|object|false|none|none|
|ReservationId|object|false|none|none|
|ResourceSpecification|object|false|none|none|
|Start|object|false|none|none|
|State|object|false|none|none|
|Tags|object|false|none|none|
|UsagePrice|object|false|none|none|

<h2 id="tocS_DescribeScheduleResponse">DescribeScheduleResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribescheduleresponse"></a>
<a id="schema_DescribeScheduleResponse"></a>
<a id="tocSdescribescheduleresponse"></a>
<a id="tocsdescribescheduleresponse"></a>

```json
{
  "NextToken": {},
  "ScheduleActions": {}
}
```

Placeholder documentation for DescribeScheduleResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|ScheduleActions|object|false|none|none|

<h2 id="tocS_ListChannelsResponse">ListChannelsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistchannelsresponse"></a>
<a id="schema_ListChannelsResponse"></a>
<a id="tocSlistchannelsresponse"></a>
<a id="tocslistchannelsresponse"></a>

```json
{
  "Channels": {},
  "NextToken": {}
}
```

Placeholder documentation for ListChannelsResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Channels|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListInputDeviceTransfersResponse">ListInputDeviceTransfersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistinputdevicetransfersresponse"></a>
<a id="schema_ListInputDeviceTransfersResponse"></a>
<a id="tocSlistinputdevicetransfersresponse"></a>
<a id="tocslistinputdevicetransfersresponse"></a>

```json
{
  "InputDeviceTransfers": {},
  "NextToken": {}
}
```

Placeholder documentation for ListInputDeviceTransfersResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InputDeviceTransfers|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListInputDevicesResponse">ListInputDevicesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistinputdevicesresponse"></a>
<a id="schema_ListInputDevicesResponse"></a>
<a id="tocSlistinputdevicesresponse"></a>
<a id="tocslistinputdevicesresponse"></a>

```json
{
  "InputDevices": {},
  "NextToken": {}
}
```

Placeholder documentation for ListInputDevicesResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InputDevices|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListInputSecurityGroupsResponse">ListInputSecurityGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistinputsecuritygroupsresponse"></a>
<a id="schema_ListInputSecurityGroupsResponse"></a>
<a id="tocSlistinputsecuritygroupsresponse"></a>
<a id="tocslistinputsecuritygroupsresponse"></a>

```json
{
  "InputSecurityGroups": {},
  "NextToken": {}
}
```

Placeholder documentation for ListInputSecurityGroupsResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InputSecurityGroups|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListInputsResponse">ListInputsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistinputsresponse"></a>
<a id="schema_ListInputsResponse"></a>
<a id="tocSlistinputsresponse"></a>
<a id="tocslistinputsresponse"></a>

```json
{
  "Inputs": {},
  "NextToken": {}
}
```

Placeholder documentation for ListInputsResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Inputs|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListMultiplexProgramsResponse">ListMultiplexProgramsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmultiplexprogramsresponse"></a>
<a id="schema_ListMultiplexProgramsResponse"></a>
<a id="tocSlistmultiplexprogramsresponse"></a>
<a id="tocslistmultiplexprogramsresponse"></a>

```json
{
  "MultiplexPrograms": {},
  "NextToken": {}
}
```

Placeholder documentation for ListMultiplexProgramsResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MultiplexPrograms|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListMultiplexesResponse">ListMultiplexesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmultiplexesresponse"></a>
<a id="schema_ListMultiplexesResponse"></a>
<a id="tocSlistmultiplexesresponse"></a>
<a id="tocslistmultiplexesresponse"></a>

```json
{
  "Multiplexes": {},
  "NextToken": {}
}
```

Placeholder documentation for ListMultiplexesResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Multiplexes|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListOfferingsResponse">ListOfferingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistofferingsresponse"></a>
<a id="schema_ListOfferingsResponse"></a>
<a id="tocSlistofferingsresponse"></a>
<a id="tocslistofferingsresponse"></a>

```json
{
  "NextToken": {},
  "Offerings": {}
}
```

Placeholder documentation for ListOfferingsResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Offerings|object|false|none|none|

<h2 id="tocS_ListReservationsResponse">ListReservationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistreservationsresponse"></a>
<a id="schema_ListReservationsResponse"></a>
<a id="tocSlistreservationsresponse"></a>
<a id="tocslistreservationsresponse"></a>

```json
{
  "NextToken": {},
  "Reservations": {}
}
```

Placeholder documentation for ListReservationsResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Reservations|object|false|none|none|

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

Placeholder documentation for ListTagsForResourceResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|

<h2 id="tocS_PurchaseOfferingResponse">PurchaseOfferingResponse</h2>
<!-- backwards compatibility -->
<a id="schemapurchaseofferingresponse"></a>
<a id="schema_PurchaseOfferingResponse"></a>
<a id="tocSpurchaseofferingresponse"></a>
<a id="tocspurchaseofferingresponse"></a>

```json
{
  "Reservation": {
    "Arn": {},
    "Count": {},
    "CurrencyCode": {},
    "Duration": {},
    "DurationUnits": {},
    "End": {},
    "FixedPrice": {},
    "Name": {},
    "OfferingDescription": {},
    "OfferingId": {},
    "OfferingType": {},
    "Region": {},
    "RenewalSettings": {
      "AutomaticRenewal": {},
      "RenewalCount": {}
    },
    "ReservationId": {},
    "ResourceSpecification": {
      "ChannelClass": {},
      "Codec": {},
      "MaximumBitrate": {},
      "MaximumFramerate": {},
      "Resolution": {},
      "ResourceType": {},
      "SpecialFeature": {},
      "VideoQuality": {}
    },
    "Start": {},
    "State": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "UsagePrice": {}
  }
}
```

Placeholder documentation for PurchaseOfferingResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Reservation|object|false|none|none|

<h2 id="tocS_ReservationAutomaticRenewal">ReservationAutomaticRenewal</h2>
<!-- backwards compatibility -->
<a id="schemareservationautomaticrenewal"></a>
<a id="schema_ReservationAutomaticRenewal"></a>
<a id="tocSreservationautomaticrenewal"></a>
<a id="tocsreservationautomaticrenewal"></a>

```json
"DISABLED"
```

Automatic Renewal Status for Reservation

<h2 id="tocS___integerMin1">__integerMin1</h2>
<!-- backwards compatibility -->
<a id="schema__integermin1"></a>
<a id="schema___integerMin1"></a>
<a id="tocS__integermin1"></a>
<a id="tocs__integermin1"></a>

```json
1
```

Placeholder documentation for __integerMin1

<h2 id="tocS_RebootInputDeviceResponse">RebootInputDeviceResponse</h2>
<!-- backwards compatibility -->
<a id="schemarebootinputdeviceresponse"></a>
<a id="schema_RebootInputDeviceResponse"></a>
<a id="tocSrebootinputdeviceresponse"></a>
<a id="tocsrebootinputdeviceresponse"></a>

```json
{}
```

Placeholder documentation for RebootInputDeviceResponse

<h2 id="tocS_RejectInputDeviceTransferResponse">RejectInputDeviceTransferResponse</h2>
<!-- backwards compatibility -->
<a id="schemarejectinputdevicetransferresponse"></a>
<a id="schema_RejectInputDeviceTransferResponse"></a>
<a id="tocSrejectinputdevicetransferresponse"></a>
<a id="tocsrejectinputdevicetransferresponse"></a>

```json
{}
```

Placeholder documentation for RejectInputDeviceTransferResponse

<h2 id="tocS_StartChannelResponse">StartChannelResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartchannelresponse"></a>
<a id="schema_StartChannelResponse"></a>
<a id="tocSstartchannelresponse"></a>
<a id="tocsstartchannelresponse"></a>

```json
{
  "Arn": {},
  "CdiInputSpecification": {
    "Resolution": {}
  },
  "ChannelClass": {},
  "Destinations": {},
  "EgressEndpoints": {},
  "EncoderSettings": {
    "AudioDescriptions": {},
    "AvailBlanking": {
      "AvailBlankingImage": {
        "PasswordParam": {},
        "Uri": {},
        "Username": {}
      },
      "State": {}
    },
    "AvailConfiguration": {
      "AvailSettings": {
        "Esam": {
          "AcquisitionPointId": {},
          "AdAvailOffset": {},
          "PasswordParam": {},
          "PoisEndpoint": {},
          "Username": {},
          "ZoneIdentity": {}
        },
        "Scte35SpliceInsert": {
          "AdAvailOffset": {},
          "NoRegionalBlackoutFlag": {},
          "WebDeliveryAllowedFlag": {}
        },
        "Scte35TimeSignalApos": {
          "AdAvailOffset": {},
          "NoRegionalBlackoutFlag": {},
          "WebDeliveryAllowedFlag": {}
        }
      }
    },
    "BlackoutSlate": {
      "BlackoutSlateImage": {
        "PasswordParam": {},
        "Uri": {},
        "Username": {}
      },
      "NetworkEndBlackout": {},
      "NetworkEndBlackoutImage": {
        "PasswordParam": {},
        "Uri": {},
        "Username": {}
      },
      "NetworkId": {},
      "State": {}
    },
    "CaptionDescriptions": {},
    "FeatureActivations": {
      "InputPrepareScheduleActions": {}
    },
    "GlobalConfiguration": {
      "InitialAudioGain": {},
      "InputEndAction": {},
      "InputLossBehavior": {
        "BlackFrameMsec": {},
        "InputLossImageColor": {},
        "InputLossImageSlate": {
          "PasswordParam": {},
          "Uri": {},
          "Username": {}
        },
        "InputLossImageType": {},
        "RepeatFrameMsec": {}
      },
      "OutputLockingMode": {},
      "OutputTimingSource": {},
      "SupportLowFramerateInputs": {}
    },
    "MotionGraphicsConfiguration": {
      "MotionGraphicsInsertion": {},
      "MotionGraphicsSettings": {
        "HtmlMotionGraphicsSettings": {}
      }
    },
    "NielsenConfiguration": {
      "DistributorId": {},
      "NielsenPcmToId3Tagging": {}
    },
    "OutputGroups": {},
    "TimecodeConfig": {
      "Source": {},
      "SyncThreshold": {}
    },
    "VideoDescriptions": {}
  },
  "Id": {},
  "InputAttachments": {},
  "InputSpecification": {
    "Codec": {},
    "MaximumBitrate": {},
    "Resolution": {}
  },
  "LogLevel": {},
  "Maintenance": {
    "MaintenanceDay": {},
    "MaintenanceDeadline": {},
    "MaintenanceScheduledDate": {},
    "MaintenanceStartTime": {}
  },
  "Name": {},
  "PipelineDetails": {},
  "PipelinesRunningCount": {},
  "RoleArn": {},
  "State": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Vpc": {
    "AvailabilityZones": {},
    "NetworkInterfaceIds": {},
    "SecurityGroupIds": {},
    "SubnetIds": {}
  }
}
```

Placeholder documentation for StartChannelResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CdiInputSpecification|object|false|none|none|
|ChannelClass|object|false|none|none|
|Destinations|object|false|none|none|
|EgressEndpoints|object|false|none|none|
|EncoderSettings|object|false|none|none|
|Id|object|false|none|none|
|InputAttachments|object|false|none|none|
|InputSpecification|object|false|none|none|
|LogLevel|object|false|none|none|
|Maintenance|object|false|none|none|
|Name|object|false|none|none|
|PipelineDetails|object|false|none|none|
|PipelinesRunningCount|object|false|none|none|
|RoleArn|object|false|none|none|
|State|object|false|none|none|
|Tags|object|false|none|none|
|Vpc|object|false|none|none|

<h2 id="tocS_StartInputDeviceMaintenanceWindowResponse">StartInputDeviceMaintenanceWindowResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartinputdevicemaintenancewindowresponse"></a>
<a id="schema_StartInputDeviceMaintenanceWindowResponse"></a>
<a id="tocSstartinputdevicemaintenancewindowresponse"></a>
<a id="tocsstartinputdevicemaintenancewindowresponse"></a>

```json
{}
```

Placeholder documentation for StartInputDeviceMaintenanceWindowResponse

<h2 id="tocS_StartMultiplexResponse">StartMultiplexResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartmultiplexresponse"></a>
<a id="schema_StartMultiplexResponse"></a>
<a id="tocSstartmultiplexresponse"></a>
<a id="tocsstartmultiplexresponse"></a>

```json
{
  "Arn": {},
  "AvailabilityZones": {},
  "Destinations": {},
  "Id": {},
  "MultiplexSettings": {
    "MaximumVideoBufferDelayMilliseconds": {},
    "TransportStreamBitrate": {},
    "TransportStreamId": {},
    "TransportStreamReservedBitrate": {}
  },
  "Name": {},
  "PipelinesRunningCount": {},
  "ProgramCount": {},
  "State": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Placeholder documentation for StartMultiplexResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|AvailabilityZones|object|false|none|none|
|Destinations|object|false|none|none|
|Id|object|false|none|none|
|MultiplexSettings|object|false|none|none|
|Name|object|false|none|none|
|PipelinesRunningCount|object|false|none|none|
|ProgramCount|object|false|none|none|
|State|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_StopChannelResponse">StopChannelResponse</h2>
<!-- backwards compatibility -->
<a id="schemastopchannelresponse"></a>
<a id="schema_StopChannelResponse"></a>
<a id="tocSstopchannelresponse"></a>
<a id="tocsstopchannelresponse"></a>

```json
{
  "Arn": {},
  "CdiInputSpecification": {
    "Resolution": {}
  },
  "ChannelClass": {},
  "Destinations": {},
  "EgressEndpoints": {},
  "EncoderSettings": {
    "AudioDescriptions": {},
    "AvailBlanking": {
      "AvailBlankingImage": {
        "PasswordParam": {},
        "Uri": {},
        "Username": {}
      },
      "State": {}
    },
    "AvailConfiguration": {
      "AvailSettings": {
        "Esam": {
          "AcquisitionPointId": {},
          "AdAvailOffset": {},
          "PasswordParam": {},
          "PoisEndpoint": {},
          "Username": {},
          "ZoneIdentity": {}
        },
        "Scte35SpliceInsert": {
          "AdAvailOffset": {},
          "NoRegionalBlackoutFlag": {},
          "WebDeliveryAllowedFlag": {}
        },
        "Scte35TimeSignalApos": {
          "AdAvailOffset": {},
          "NoRegionalBlackoutFlag": {},
          "WebDeliveryAllowedFlag": {}
        }
      }
    },
    "BlackoutSlate": {
      "BlackoutSlateImage": {
        "PasswordParam": {},
        "Uri": {},
        "Username": {}
      },
      "NetworkEndBlackout": {},
      "NetworkEndBlackoutImage": {
        "PasswordParam": {},
        "Uri": {},
        "Username": {}
      },
      "NetworkId": {},
      "State": {}
    },
    "CaptionDescriptions": {},
    "FeatureActivations": {
      "InputPrepareScheduleActions": {}
    },
    "GlobalConfiguration": {
      "InitialAudioGain": {},
      "InputEndAction": {},
      "InputLossBehavior": {
        "BlackFrameMsec": {},
        "InputLossImageColor": {},
        "InputLossImageSlate": {
          "PasswordParam": {},
          "Uri": {},
          "Username": {}
        },
        "InputLossImageType": {},
        "RepeatFrameMsec": {}
      },
      "OutputLockingMode": {},
      "OutputTimingSource": {},
      "SupportLowFramerateInputs": {}
    },
    "MotionGraphicsConfiguration": {
      "MotionGraphicsInsertion": {},
      "MotionGraphicsSettings": {
        "HtmlMotionGraphicsSettings": {}
      }
    },
    "NielsenConfiguration": {
      "DistributorId": {},
      "NielsenPcmToId3Tagging": {}
    },
    "OutputGroups": {},
    "TimecodeConfig": {
      "Source": {},
      "SyncThreshold": {}
    },
    "VideoDescriptions": {}
  },
  "Id": {},
  "InputAttachments": {},
  "InputSpecification": {
    "Codec": {},
    "MaximumBitrate": {},
    "Resolution": {}
  },
  "LogLevel": {},
  "Maintenance": {
    "MaintenanceDay": {},
    "MaintenanceDeadline": {},
    "MaintenanceScheduledDate": {},
    "MaintenanceStartTime": {}
  },
  "Name": {},
  "PipelineDetails": {},
  "PipelinesRunningCount": {},
  "RoleArn": {},
  "State": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Vpc": {
    "AvailabilityZones": {},
    "NetworkInterfaceIds": {},
    "SecurityGroupIds": {},
    "SubnetIds": {}
  }
}
```

Placeholder documentation for StopChannelResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CdiInputSpecification|object|false|none|none|
|ChannelClass|object|false|none|none|
|Destinations|object|false|none|none|
|EgressEndpoints|object|false|none|none|
|EncoderSettings|object|false|none|none|
|Id|object|false|none|none|
|InputAttachments|object|false|none|none|
|InputSpecification|object|false|none|none|
|LogLevel|object|false|none|none|
|Maintenance|object|false|none|none|
|Name|object|false|none|none|
|PipelineDetails|object|false|none|none|
|PipelinesRunningCount|object|false|none|none|
|RoleArn|object|false|none|none|
|State|object|false|none|none|
|Tags|object|false|none|none|
|Vpc|object|false|none|none|

<h2 id="tocS_StopMultiplexResponse">StopMultiplexResponse</h2>
<!-- backwards compatibility -->
<a id="schemastopmultiplexresponse"></a>
<a id="schema_StopMultiplexResponse"></a>
<a id="tocSstopmultiplexresponse"></a>
<a id="tocsstopmultiplexresponse"></a>

```json
{
  "Arn": {},
  "AvailabilityZones": {},
  "Destinations": {},
  "Id": {},
  "MultiplexSettings": {
    "MaximumVideoBufferDelayMilliseconds": {},
    "TransportStreamBitrate": {},
    "TransportStreamId": {},
    "TransportStreamReservedBitrate": {}
  },
  "Name": {},
  "PipelinesRunningCount": {},
  "ProgramCount": {},
  "State": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Placeholder documentation for StopMultiplexResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|AvailabilityZones|object|false|none|none|
|Destinations|object|false|none|none|
|Id|object|false|none|none|
|MultiplexSettings|object|false|none|none|
|Name|object|false|none|none|
|PipelinesRunningCount|object|false|none|none|
|ProgramCount|object|false|none|none|
|State|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_TransferInputDeviceResponse">TransferInputDeviceResponse</h2>
<!-- backwards compatibility -->
<a id="schematransferinputdeviceresponse"></a>
<a id="schema_TransferInputDeviceResponse"></a>
<a id="tocStransferinputdeviceresponse"></a>
<a id="tocstransferinputdeviceresponse"></a>

```json
{}
```

Placeholder documentation for TransferInputDeviceResponse

<h2 id="tocS_UpdateChannelResponse">UpdateChannelResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatechannelresponse"></a>
<a id="schema_UpdateChannelResponse"></a>
<a id="tocSupdatechannelresponse"></a>
<a id="tocsupdatechannelresponse"></a>

```json
{
  "Channel": {
    "Arn": {},
    "CdiInputSpecification": {
      "Resolution": {}
    },
    "ChannelClass": {},
    "Destinations": {},
    "EgressEndpoints": {},
    "EncoderSettings": {
      "AudioDescriptions": {},
      "AvailBlanking": {
        "AvailBlankingImage": {
          "PasswordParam": {},
          "Uri": {},
          "Username": {}
        },
        "State": {}
      },
      "AvailConfiguration": {
        "AvailSettings": {
          "Esam": {
            "AcquisitionPointId": {},
            "AdAvailOffset": {},
            "PasswordParam": {},
            "PoisEndpoint": {},
            "Username": {},
            "ZoneIdentity": {}
          },
          "Scte35SpliceInsert": {
            "AdAvailOffset": {},
            "NoRegionalBlackoutFlag": {},
            "WebDeliveryAllowedFlag": {}
          },
          "Scte35TimeSignalApos": {
            "AdAvailOffset": {},
            "NoRegionalBlackoutFlag": {},
            "WebDeliveryAllowedFlag": {}
          }
        }
      },
      "BlackoutSlate": {
        "BlackoutSlateImage": {
          "PasswordParam": {},
          "Uri": {},
          "Username": {}
        },
        "NetworkEndBlackout": {},
        "NetworkEndBlackoutImage": {
          "PasswordParam": {},
          "Uri": {},
          "Username": {}
        },
        "NetworkId": {},
        "State": {}
      },
      "CaptionDescriptions": {},
      "FeatureActivations": {
        "InputPrepareScheduleActions": {}
      },
      "GlobalConfiguration": {
        "InitialAudioGain": {},
        "InputEndAction": {},
        "InputLossBehavior": {
          "BlackFrameMsec": {},
          "InputLossImageColor": {},
          "InputLossImageSlate": {
            "PasswordParam": {},
            "Uri": {},
            "Username": {}
          },
          "InputLossImageType": {},
          "RepeatFrameMsec": {}
        },
        "OutputLockingMode": {},
        "OutputTimingSource": {},
        "SupportLowFramerateInputs": {}
      },
      "MotionGraphicsConfiguration": {
        "MotionGraphicsInsertion": {},
        "MotionGraphicsSettings": {
          "HtmlMotionGraphicsSettings": {}
        }
      },
      "NielsenConfiguration": {
        "DistributorId": {},
        "NielsenPcmToId3Tagging": {}
      },
      "OutputGroups": {},
      "TimecodeConfig": {
        "Source": {},
        "SyncThreshold": {}
      },
      "VideoDescriptions": {}
    },
    "Id": {},
    "InputAttachments": {},
    "InputSpecification": {
      "Codec": {},
      "MaximumBitrate": {},
      "Resolution": {}
    },
    "LogLevel": {},
    "Maintenance": {
      "MaintenanceDay": {},
      "MaintenanceDeadline": {},
      "MaintenanceScheduledDate": {},
      "MaintenanceStartTime": {}
    },
    "Name": {},
    "PipelineDetails": {},
    "PipelinesRunningCount": {},
    "RoleArn": {},
    "State": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "Vpc": {
      "AvailabilityZones": {},
      "NetworkInterfaceIds": {},
      "SecurityGroupIds": {},
      "SubnetIds": {}
    }
  }
}
```

Placeholder documentation for UpdateChannelResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Channel|object|false|none|none|

<h2 id="tocS_UpdateChannelClassResponse">UpdateChannelClassResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatechannelclassresponse"></a>
<a id="schema_UpdateChannelClassResponse"></a>
<a id="tocSupdatechannelclassresponse"></a>
<a id="tocsupdatechannelclassresponse"></a>

```json
{
  "Channel": {
    "Arn": {},
    "CdiInputSpecification": {
      "Resolution": {}
    },
    "ChannelClass": {},
    "Destinations": {},
    "EgressEndpoints": {},
    "EncoderSettings": {
      "AudioDescriptions": {},
      "AvailBlanking": {
        "AvailBlankingImage": {
          "PasswordParam": {},
          "Uri": {},
          "Username": {}
        },
        "State": {}
      },
      "AvailConfiguration": {
        "AvailSettings": {
          "Esam": {
            "AcquisitionPointId": {},
            "AdAvailOffset": {},
            "PasswordParam": {},
            "PoisEndpoint": {},
            "Username": {},
            "ZoneIdentity": {}
          },
          "Scte35SpliceInsert": {
            "AdAvailOffset": {},
            "NoRegionalBlackoutFlag": {},
            "WebDeliveryAllowedFlag": {}
          },
          "Scte35TimeSignalApos": {
            "AdAvailOffset": {},
            "NoRegionalBlackoutFlag": {},
            "WebDeliveryAllowedFlag": {}
          }
        }
      },
      "BlackoutSlate": {
        "BlackoutSlateImage": {
          "PasswordParam": {},
          "Uri": {},
          "Username": {}
        },
        "NetworkEndBlackout": {},
        "NetworkEndBlackoutImage": {
          "PasswordParam": {},
          "Uri": {},
          "Username": {}
        },
        "NetworkId": {},
        "State": {}
      },
      "CaptionDescriptions": {},
      "FeatureActivations": {
        "InputPrepareScheduleActions": {}
      },
      "GlobalConfiguration": {
        "InitialAudioGain": {},
        "InputEndAction": {},
        "InputLossBehavior": {
          "BlackFrameMsec": {},
          "InputLossImageColor": {},
          "InputLossImageSlate": {
            "PasswordParam": {},
            "Uri": {},
            "Username": {}
          },
          "InputLossImageType": {},
          "RepeatFrameMsec": {}
        },
        "OutputLockingMode": {},
        "OutputTimingSource": {},
        "SupportLowFramerateInputs": {}
      },
      "MotionGraphicsConfiguration": {
        "MotionGraphicsInsertion": {},
        "MotionGraphicsSettings": {
          "HtmlMotionGraphicsSettings": {}
        }
      },
      "NielsenConfiguration": {
        "DistributorId": {},
        "NielsenPcmToId3Tagging": {}
      },
      "OutputGroups": {},
      "TimecodeConfig": {
        "Source": {},
        "SyncThreshold": {}
      },
      "VideoDescriptions": {}
    },
    "Id": {},
    "InputAttachments": {},
    "InputSpecification": {
      "Codec": {},
      "MaximumBitrate": {},
      "Resolution": {}
    },
    "LogLevel": {},
    "Maintenance": {
      "MaintenanceDay": {},
      "MaintenanceDeadline": {},
      "MaintenanceScheduledDate": {},
      "MaintenanceStartTime": {}
    },
    "Name": {},
    "PipelineDetails": {},
    "PipelinesRunningCount": {},
    "RoleArn": {},
    "State": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "Vpc": {
      "AvailabilityZones": {},
      "NetworkInterfaceIds": {},
      "SecurityGroupIds": {},
      "SubnetIds": {}
    }
  }
}
```

Placeholder documentation for UpdateChannelClassResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Channel|object|false|none|none|

<h2 id="tocS_UpdateInputResponse">UpdateInputResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateinputresponse"></a>
<a id="schema_UpdateInputResponse"></a>
<a id="tocSupdateinputresponse"></a>
<a id="tocsupdateinputresponse"></a>

```json
{
  "Input": {
    "Arn": {},
    "AttachedChannels": {},
    "Destinations": {},
    "Id": {},
    "InputClass": {},
    "InputDevices": {},
    "InputPartnerIds": {},
    "InputSourceType": {},
    "MediaConnectFlows": {},
    "Name": {},
    "RoleArn": {},
    "SecurityGroups": {},
    "Sources": {},
    "State": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "Type": {}
  }
}
```

Placeholder documentation for UpdateInputResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Input|object|false|none|none|

<h2 id="tocS_InputDeviceRequest">InputDeviceRequest</h2>
<!-- backwards compatibility -->
<a id="schemainputdevicerequest"></a>
<a id="schema_InputDeviceRequest"></a>
<a id="tocSinputdevicerequest"></a>
<a id="tocsinputdevicerequest"></a>

```json
{
  "Id": {}
}
```

Settings for an input device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|

<h2 id="tocS_UpdateInputDeviceResponse">UpdateInputDeviceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateinputdeviceresponse"></a>
<a id="schema_UpdateInputDeviceResponse"></a>
<a id="tocSupdateinputdeviceresponse"></a>
<a id="tocsupdateinputdeviceresponse"></a>

```json
{
  "Arn": {},
  "ConnectionState": {},
  "DeviceSettingsSyncState": {},
  "DeviceUpdateStatus": {},
  "HdDeviceSettings": {
    "ActiveInput": {},
    "ConfiguredInput": {},
    "DeviceState": {},
    "Framerate": {},
    "Height": {},
    "MaxBitrate": {},
    "ScanType": {},
    "Width": {},
    "LatencyMs": {}
  },
  "Id": {},
  "MacAddress": {},
  "Name": {},
  "NetworkSettings": {
    "DnsAddresses": {},
    "Gateway": {},
    "IpAddress": {},
    "IpScheme": {},
    "SubnetMask": {}
  },
  "SerialNumber": {},
  "Type": {},
  "UhdDeviceSettings": {
    "ActiveInput": {},
    "ConfiguredInput": {},
    "DeviceState": {},
    "Framerate": {},
    "Height": {},
    "MaxBitrate": {},
    "ScanType": {},
    "Width": {},
    "LatencyMs": {}
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Placeholder documentation for UpdateInputDeviceResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|ConnectionState|object|false|none|none|
|DeviceSettingsSyncState|object|false|none|none|
|DeviceUpdateStatus|object|false|none|none|
|HdDeviceSettings|object|false|none|none|
|Id|object|false|none|none|
|MacAddress|object|false|none|none|
|Name|object|false|none|none|
|NetworkSettings|object|false|none|none|
|SerialNumber|object|false|none|none|
|Type|object|false|none|none|
|UhdDeviceSettings|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_InputDeviceConfiguredInput">InputDeviceConfiguredInput</h2>
<!-- backwards compatibility -->
<a id="schemainputdeviceconfiguredinput"></a>
<a id="schema_InputDeviceConfiguredInput"></a>
<a id="tocSinputdeviceconfiguredinput"></a>
<a id="tocsinputdeviceconfiguredinput"></a>

```json
"AUTO"
```

The source to activate (use) from the input device.

<h2 id="tocS___integer">__integer</h2>
<!-- backwards compatibility -->
<a id="schema__integer"></a>
<a id="schema___integer"></a>
<a id="tocS__integer"></a>
<a id="tocs__integer"></a>

```json
0
```

Placeholder documentation for __integer

<h2 id="tocS_UpdateInputSecurityGroupResponse">UpdateInputSecurityGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateinputsecuritygroupresponse"></a>
<a id="schema_UpdateInputSecurityGroupResponse"></a>
<a id="tocSupdateinputsecuritygroupresponse"></a>
<a id="tocsupdateinputsecuritygroupresponse"></a>

```json
{
  "SecurityGroup": {
    "Arn": {},
    "Id": {},
    "Inputs": {},
    "State": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "WhitelistRules": {}
  }
}
```

Placeholder documentation for UpdateInputSecurityGroupResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SecurityGroup|object|false|none|none|

<h2 id="tocS_UpdateMultiplexResponse">UpdateMultiplexResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemultiplexresponse"></a>
<a id="schema_UpdateMultiplexResponse"></a>
<a id="tocSupdatemultiplexresponse"></a>
<a id="tocsupdatemultiplexresponse"></a>

```json
{
  "Multiplex": {
    "Arn": {},
    "AvailabilityZones": {},
    "Destinations": {},
    "Id": {},
    "MultiplexSettings": {
      "MaximumVideoBufferDelayMilliseconds": {},
      "TransportStreamBitrate": {},
      "TransportStreamId": {},
      "TransportStreamReservedBitrate": {}
    },
    "Name": {},
    "PipelinesRunningCount": {},
    "ProgramCount": {},
    "State": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

Placeholder documentation for UpdateMultiplexResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Multiplex|object|false|none|none|

<h2 id="tocS_UpdateMultiplexProgramResponse">UpdateMultiplexProgramResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemultiplexprogramresponse"></a>
<a id="schema_UpdateMultiplexProgramResponse"></a>
<a id="tocSupdatemultiplexprogramresponse"></a>
<a id="tocsupdatemultiplexprogramresponse"></a>

```json
{
  "MultiplexProgram": {
    "ChannelId": {},
    "MultiplexProgramSettings": {
      "PreferredChannelPipeline": {},
      "ProgramNumber": {},
      "ServiceDescriptor": {
        "ProviderName": {},
        "ServiceName": {}
      },
      "VideoSettings": {
        "ConstantBitrate": {},
        "StatmuxSettings": {
          "MaximumBitrate": {},
          "MinimumBitrate": {},
          "Priority": {}
        }
      }
    },
    "PacketIdentifiersMap": {
      "AudioPids": {},
      "DvbSubPids": {},
      "DvbTeletextPid": {},
      "EtvPlatformPid": {},
      "EtvSignalPid": {},
      "KlvDataPids": {},
      "PcrPid": {},
      "PmtPid": {},
      "PrivateMetadataPid": {},
      "Scte27Pids": {},
      "Scte35Pid": {},
      "TimedMetadataPid": {},
      "VideoPid": {}
    },
    "PipelineDetails": {},
    "ProgramName": {}
  }
}
```

Placeholder documentation for UpdateMultiplexProgramResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MultiplexProgram|object|false|none|none|

<h2 id="tocS_UpdateReservationResponse">UpdateReservationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatereservationresponse"></a>
<a id="schema_UpdateReservationResponse"></a>
<a id="tocSupdatereservationresponse"></a>
<a id="tocsupdatereservationresponse"></a>

```json
{
  "Reservation": {
    "Arn": {},
    "Count": {},
    "CurrencyCode": {},
    "Duration": {},
    "DurationUnits": {},
    "End": {},
    "FixedPrice": {},
    "Name": {},
    "OfferingDescription": {},
    "OfferingId": {},
    "OfferingType": {},
    "Region": {},
    "RenewalSettings": {
      "AutomaticRenewal": {},
      "RenewalCount": {}
    },
    "ReservationId": {},
    "ResourceSpecification": {
      "ChannelClass": {},
      "Codec": {},
      "MaximumBitrate": {},
      "MaximumFramerate": {},
      "Resolution": {},
      "ResourceType": {},
      "SpecialFeature": {},
      "VideoQuality": {}
    },
    "Start": {},
    "State": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "UsagePrice": {}
  }
}
```

Placeholder documentation for UpdateReservationResponse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Reservation|object|false|none|none|

<h2 id="tocS_AacCodingMode">AacCodingMode</h2>
<!-- backwards compatibility -->
<a id="schemaaaccodingmode"></a>
<a id="schema_AacCodingMode"></a>
<a id="tocSaaccodingmode"></a>
<a id="tocsaaccodingmode"></a>

```json
"AD_RECEIVER_MIX"
```

Aac Coding Mode

<h2 id="tocS_AacInputType">AacInputType</h2>
<!-- backwards compatibility -->
<a id="schemaaacinputtype"></a>
<a id="schema_AacInputType"></a>
<a id="tocSaacinputtype"></a>
<a id="tocsaacinputtype"></a>

```json
"BROADCASTER_MIXED_AD"
```

Aac Input Type

<h2 id="tocS_AacProfile">AacProfile</h2>
<!-- backwards compatibility -->
<a id="schemaaacprofile"></a>
<a id="schema_AacProfile"></a>
<a id="tocSaacprofile"></a>
<a id="tocsaacprofile"></a>

```json
"HEV1"
```

Aac Profile

<h2 id="tocS_AacRateControlMode">AacRateControlMode</h2>
<!-- backwards compatibility -->
<a id="schemaaacratecontrolmode"></a>
<a id="schema_AacRateControlMode"></a>
<a id="tocSaacratecontrolmode"></a>
<a id="tocsaacratecontrolmode"></a>

```json
"CBR"
```

Aac Rate Control Mode

<h2 id="tocS_AacRawFormat">AacRawFormat</h2>
<!-- backwards compatibility -->
<a id="schemaaacrawformat"></a>
<a id="schema_AacRawFormat"></a>
<a id="tocSaacrawformat"></a>
<a id="tocsaacrawformat"></a>

```json
"LATM_LOAS"
```

Aac Raw Format

<h2 id="tocS___double">__double</h2>
<!-- backwards compatibility -->
<a id="schema__double"></a>
<a id="schema___double"></a>
<a id="tocS__double"></a>
<a id="tocs__double"></a>

```json
0
```

Placeholder documentation for __double

<h2 id="tocS_AacSpec">AacSpec</h2>
<!-- backwards compatibility -->
<a id="schemaaacspec"></a>
<a id="schema_AacSpec"></a>
<a id="tocSaacspec"></a>
<a id="tocsaacspec"></a>

```json
"MPEG2"
```

Aac Spec

<h2 id="tocS_AacVbrQuality">AacVbrQuality</h2>
<!-- backwards compatibility -->
<a id="schemaaacvbrquality"></a>
<a id="schema_AacVbrQuality"></a>
<a id="tocSaacvbrquality"></a>
<a id="tocsaacvbrquality"></a>

```json
"HIGH"
```

Aac Vbr Quality

<h2 id="tocS_AacSettings">AacSettings</h2>
<!-- backwards compatibility -->
<a id="schemaaacsettings"></a>
<a id="schema_AacSettings"></a>
<a id="tocSaacsettings"></a>
<a id="tocsaacsettings"></a>

```json
{
  "Bitrate": {},
  "CodingMode": {},
  "InputType": {},
  "Profile": {},
  "RateControlMode": {},
  "RawFormat": {},
  "SampleRate": {},
  "Spec": {},
  "VbrQuality": {}
}
```

Aac Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bitrate|object|false|none|none|
|CodingMode|object|false|none|none|
|InputType|object|false|none|none|
|Profile|object|false|none|none|
|RateControlMode|object|false|none|none|
|RawFormat|object|false|none|none|
|SampleRate|object|false|none|none|
|Spec|object|false|none|none|
|VbrQuality|object|false|none|none|

<h2 id="tocS_Ac3BitstreamMode">Ac3BitstreamMode</h2>
<!-- backwards compatibility -->
<a id="schemaac3bitstreammode"></a>
<a id="schema_Ac3BitstreamMode"></a>
<a id="tocSac3bitstreammode"></a>
<a id="tocsac3bitstreammode"></a>

```json
"COMMENTARY"
```

Ac3 Bitstream Mode

<h2 id="tocS_Ac3CodingMode">Ac3CodingMode</h2>
<!-- backwards compatibility -->
<a id="schemaac3codingmode"></a>
<a id="schema_Ac3CodingMode"></a>
<a id="tocSac3codingmode"></a>
<a id="tocsac3codingmode"></a>

```json
"CODING_MODE_1_0"
```

Ac3 Coding Mode

<h2 id="tocS_Ac3DrcProfile">Ac3DrcProfile</h2>
<!-- backwards compatibility -->
<a id="schemaac3drcprofile"></a>
<a id="schema_Ac3DrcProfile"></a>
<a id="tocSac3drcprofile"></a>
<a id="tocsac3drcprofile"></a>

```json
"FILM_STANDARD"
```

Ac3 Drc Profile

<h2 id="tocS_Ac3LfeFilter">Ac3LfeFilter</h2>
<!-- backwards compatibility -->
<a id="schemaac3lfefilter"></a>
<a id="schema_Ac3LfeFilter"></a>
<a id="tocSac3lfefilter"></a>
<a id="tocsac3lfefilter"></a>

```json
"DISABLED"
```

Ac3 Lfe Filter

<h2 id="tocS_Ac3MetadataControl">Ac3MetadataControl</h2>
<!-- backwards compatibility -->
<a id="schemaac3metadatacontrol"></a>
<a id="schema_Ac3MetadataControl"></a>
<a id="tocSac3metadatacontrol"></a>
<a id="tocsac3metadatacontrol"></a>

```json
"FOLLOW_INPUT"
```

Ac3 Metadata Control

<h2 id="tocS___integerMin1Max31">__integerMin1Max31</h2>
<!-- backwards compatibility -->
<a id="schema__integermin1max31"></a>
<a id="schema___integerMin1Max31"></a>
<a id="tocS__integermin1max31"></a>
<a id="tocs__integermin1max31"></a>

```json
1
```

Placeholder documentation for __integerMin1Max31

<h2 id="tocS_Ac3Settings">Ac3Settings</h2>
<!-- backwards compatibility -->
<a id="schemaac3settings"></a>
<a id="schema_Ac3Settings"></a>
<a id="tocSac3settings"></a>
<a id="tocsac3settings"></a>

```json
{
  "Bitrate": {},
  "BitstreamMode": {},
  "CodingMode": {},
  "Dialnorm": {},
  "DrcProfile": {},
  "LfeFilter": {},
  "MetadataControl": {}
}
```

Ac3 Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bitrate|object|false|none|none|
|BitstreamMode|object|false|none|none|
|CodingMode|object|false|none|none|
|Dialnorm|object|false|none|none|
|DrcProfile|object|false|none|none|
|LfeFilter|object|false|none|none|
|MetadataControl|object|false|none|none|

<h2 id="tocS_AcceptInputDeviceTransferRequest">AcceptInputDeviceTransferRequest</h2>
<!-- backwards compatibility -->
<a id="schemaacceptinputdevicetransferrequest"></a>
<a id="schema_AcceptInputDeviceTransferRequest"></a>
<a id="tocSacceptinputdevicetransferrequest"></a>
<a id="tocsacceptinputdevicetransferrequest"></a>

```json
{}
```

Placeholder documentation for AcceptInputDeviceTransferRequest

<h2 id="tocS_AccessibilityType">AccessibilityType</h2>
<!-- backwards compatibility -->
<a id="schemaaccessibilitytype"></a>
<a id="schema_AccessibilityType"></a>
<a id="tocSaccessibilitytype"></a>
<a id="tocsaccessibilitytype"></a>

```json
"DOES_NOT_IMPLEMENT_ACCESSIBILITY_FEATURES"
```

Accessibility Type

<h2 id="tocS_AfdSignaling">AfdSignaling</h2>
<!-- backwards compatibility -->
<a id="schemaafdsignaling"></a>
<a id="schema_AfdSignaling"></a>
<a id="tocSafdsignaling"></a>
<a id="tocsafdsignaling"></a>

```json
"AUTO"
```

Afd Signaling

<h2 id="tocS___integerMin1Max4">__integerMin1Max4</h2>
<!-- backwards compatibility -->
<a id="schema__integermin1max4"></a>
<a id="schema___integerMin1Max4"></a>
<a id="tocS__integermin1max4"></a>
<a id="tocs__integermin1max4"></a>

```json
1
```

Placeholder documentation for __integerMin1Max4

<h2 id="tocS_AncillarySourceSettings">AncillarySourceSettings</h2>
<!-- backwards compatibility -->
<a id="schemaancillarysourcesettings"></a>
<a id="schema_AncillarySourceSettings"></a>
<a id="tocSancillarysourcesettings"></a>
<a id="tocsancillarysourcesettings"></a>

```json
{
  "SourceAncillaryChannelNumber": {}
}
```

Ancillary Source Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceAncillaryChannelNumber|object|false|none|none|

<h2 id="tocS_ArchiveS3Settings">ArchiveS3Settings</h2>
<!-- backwards compatibility -->
<a id="schemaarchives3settings"></a>
<a id="schema_ArchiveS3Settings"></a>
<a id="tocSarchives3settings"></a>
<a id="tocsarchives3settings"></a>

```json
{
  "CannedAcl": {}
}
```

Archive S3 Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CannedAcl|object|false|none|none|

<h2 id="tocS_ArchiveCdnSettings">ArchiveCdnSettings</h2>
<!-- backwards compatibility -->
<a id="schemaarchivecdnsettings"></a>
<a id="schema_ArchiveCdnSettings"></a>
<a id="tocSarchivecdnsettings"></a>
<a id="tocsarchivecdnsettings"></a>

```json
{
  "ArchiveS3Settings": {
    "CannedAcl": {}
  }
}
```

Archive Cdn Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ArchiveS3Settings|object|false|none|none|

<h2 id="tocS_M2tsSettings">M2tsSettings</h2>
<!-- backwards compatibility -->
<a id="schemam2tssettings"></a>
<a id="schema_M2tsSettings"></a>
<a id="tocSm2tssettings"></a>
<a id="tocsm2tssettings"></a>

```json
{
  "AbsentInputAudioBehavior": {},
  "Arib": {},
  "AribCaptionsPid": {},
  "AribCaptionsPidControl": {},
  "AudioBufferModel": {},
  "AudioFramesPerPes": {},
  "AudioPids": {},
  "AudioStreamType": {},
  "Bitrate": {},
  "BufferModel": {},
  "CcDescriptor": {},
  "DvbNitSettings": {
    "NetworkId": {},
    "NetworkName": {},
    "RepInterval": {}
  },
  "DvbSdtSettings": {
    "OutputSdt": {},
    "RepInterval": {},
    "ServiceName": {},
    "ServiceProviderName": {}
  },
  "DvbSubPids": {},
  "DvbTdtSettings": {
    "RepInterval": {}
  },
  "DvbTeletextPid": {},
  "Ebif": {},
  "EbpAudioInterval": {},
  "EbpLookaheadMs": {},
  "EbpPlacement": {},
  "EcmPid": {},
  "EsRateInPes": {},
  "EtvPlatformPid": {},
  "EtvSignalPid": {},
  "FragmentTime": {},
  "Klv": {},
  "KlvDataPids": {},
  "NielsenId3Behavior": {},
  "NullPacketBitrate": {},
  "PatInterval": {},
  "PcrControl": {},
  "PcrPeriod": {},
  "PcrPid": {},
  "PmtInterval": {},
  "PmtPid": {},
  "ProgramNum": {},
  "RateMode": {},
  "Scte27Pids": {},
  "Scte35Control": {},
  "Scte35Pid": {},
  "SegmentationMarkers": {},
  "SegmentationStyle": {},
  "SegmentationTime": {},
  "TimedMetadataBehavior": {},
  "TimedMetadataPid": {},
  "TransportStreamId": {},
  "VideoPid": {},
  "Scte35PrerollPullupMilliseconds": {}
}
```

M2ts Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AbsentInputAudioBehavior|object|false|none|none|
|Arib|object|false|none|none|
|AribCaptionsPid|object|false|none|none|
|AribCaptionsPidControl|object|false|none|none|
|AudioBufferModel|object|false|none|none|
|AudioFramesPerPes|object|false|none|none|
|AudioPids|object|false|none|none|
|AudioStreamType|object|false|none|none|
|Bitrate|object|false|none|none|
|BufferModel|object|false|none|none|
|CcDescriptor|object|false|none|none|
|DvbNitSettings|object|false|none|none|
|DvbSdtSettings|object|false|none|none|
|DvbSubPids|object|false|none|none|
|DvbTdtSettings|object|false|none|none|
|DvbTeletextPid|object|false|none|none|
|Ebif|object|false|none|none|
|EbpAudioInterval|object|false|none|none|
|EbpLookaheadMs|object|false|none|none|
|EbpPlacement|object|false|none|none|
|EcmPid|object|false|none|none|
|EsRateInPes|object|false|none|none|
|EtvPlatformPid|object|false|none|none|
|EtvSignalPid|object|false|none|none|
|FragmentTime|object|false|none|none|
|Klv|object|false|none|none|
|KlvDataPids|object|false|none|none|
|NielsenId3Behavior|object|false|none|none|
|NullPacketBitrate|object|false|none|none|
|PatInterval|object|false|none|none|
|PcrControl|object|false|none|none|
|PcrPeriod|object|false|none|none|
|PcrPid|object|false|none|none|
|PmtInterval|object|false|none|none|
|PmtPid|object|false|none|none|
|ProgramNum|object|false|none|none|
|RateMode|object|false|none|none|
|Scte27Pids|object|false|none|none|
|Scte35Control|object|false|none|none|
|Scte35Pid|object|false|none|none|
|SegmentationMarkers|object|false|none|none|
|SegmentationStyle|object|false|none|none|
|SegmentationTime|object|false|none|none|
|TimedMetadataBehavior|object|false|none|none|
|TimedMetadataPid|object|false|none|none|
|TransportStreamId|object|false|none|none|
|VideoPid|object|false|none|none|
|Scte35PrerollPullupMilliseconds|object|false|none|none|

<h2 id="tocS_RawSettings">RawSettings</h2>
<!-- backwards compatibility -->
<a id="schemarawsettings"></a>
<a id="schema_RawSettings"></a>
<a id="tocSrawsettings"></a>
<a id="tocsrawsettings"></a>

```json
{}
```

Raw Settings

<h2 id="tocS_ArchiveContainerSettings">ArchiveContainerSettings</h2>
<!-- backwards compatibility -->
<a id="schemaarchivecontainersettings"></a>
<a id="schema_ArchiveContainerSettings"></a>
<a id="tocSarchivecontainersettings"></a>
<a id="tocsarchivecontainersettings"></a>

```json
{
  "M2tsSettings": {
    "AbsentInputAudioBehavior": {},
    "Arib": {},
    "AribCaptionsPid": {},
    "AribCaptionsPidControl": {},
    "AudioBufferModel": {},
    "AudioFramesPerPes": {},
    "AudioPids": {},
    "AudioStreamType": {},
    "Bitrate": {},
    "BufferModel": {},
    "CcDescriptor": {},
    "DvbNitSettings": {
      "NetworkId": {},
      "NetworkName": {},
      "RepInterval": {}
    },
    "DvbSdtSettings": {
      "OutputSdt": {},
      "RepInterval": {},
      "ServiceName": {},
      "ServiceProviderName": {}
    },
    "DvbSubPids": {},
    "DvbTdtSettings": {
      "RepInterval": {}
    },
    "DvbTeletextPid": {},
    "Ebif": {},
    "EbpAudioInterval": {},
    "EbpLookaheadMs": {},
    "EbpPlacement": {},
    "EcmPid": {},
    "EsRateInPes": {},
    "EtvPlatformPid": {},
    "EtvSignalPid": {},
    "FragmentTime": {},
    "Klv": {},
    "KlvDataPids": {},
    "NielsenId3Behavior": {},
    "NullPacketBitrate": {},
    "PatInterval": {},
    "PcrControl": {},
    "PcrPeriod": {},
    "PcrPid": {},
    "PmtInterval": {},
    "PmtPid": {},
    "ProgramNum": {},
    "RateMode": {},
    "Scte27Pids": {},
    "Scte35Control": {},
    "Scte35Pid": {},
    "SegmentationMarkers": {},
    "SegmentationStyle": {},
    "SegmentationTime": {},
    "TimedMetadataBehavior": {},
    "TimedMetadataPid": {},
    "TransportStreamId": {},
    "VideoPid": {},
    "Scte35PrerollPullupMilliseconds": {}
  },
  "RawSettings": {}
}
```

Archive Container Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|M2tsSettings|object|false|none|none|
|RawSettings|object|false|none|none|

<h2 id="tocS_OutputLocationRef">OutputLocationRef</h2>
<!-- backwards compatibility -->
<a id="schemaoutputlocationref"></a>
<a id="schema_OutputLocationRef"></a>
<a id="tocSoutputlocationref"></a>
<a id="tocsoutputlocationref"></a>

```json
{
  "DestinationRefId": {}
}
```

Reference to an OutputDestination ID defined in the channel

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DestinationRefId|object|false|none|none|

<h2 id="tocS_ArchiveGroupSettings">ArchiveGroupSettings</h2>
<!-- backwards compatibility -->
<a id="schemaarchivegroupsettings"></a>
<a id="schema_ArchiveGroupSettings"></a>
<a id="tocSarchivegroupsettings"></a>
<a id="tocsarchivegroupsettings"></a>

```json
{
  "ArchiveCdnSettings": {
    "ArchiveS3Settings": {
      "CannedAcl": {}
    }
  },
  "Destination": {
    "DestinationRefId": {}
  },
  "RolloverInterval": {}
}
```

Archive Group Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ArchiveCdnSettings|object|false|none|none|
|Destination|object|true|none|none|
|RolloverInterval|object|false|none|none|

<h2 id="tocS_ArchiveOutputSettings">ArchiveOutputSettings</h2>
<!-- backwards compatibility -->
<a id="schemaarchiveoutputsettings"></a>
<a id="schema_ArchiveOutputSettings"></a>
<a id="tocSarchiveoutputsettings"></a>
<a id="tocsarchiveoutputsettings"></a>

```json
{
  "ContainerSettings": {
    "M2tsSettings": {
      "AbsentInputAudioBehavior": {},
      "Arib": {},
      "AribCaptionsPid": {},
      "AribCaptionsPidControl": {},
      "AudioBufferModel": {},
      "AudioFramesPerPes": {},
      "AudioPids": {},
      "AudioStreamType": {},
      "Bitrate": {},
      "BufferModel": {},
      "CcDescriptor": {},
      "DvbNitSettings": {
        "NetworkId": {},
        "NetworkName": {},
        "RepInterval": {}
      },
      "DvbSdtSettings": {
        "OutputSdt": {},
        "RepInterval": {},
        "ServiceName": {},
        "ServiceProviderName": {}
      },
      "DvbSubPids": {},
      "DvbTdtSettings": {
        "RepInterval": {}
      },
      "DvbTeletextPid": {},
      "Ebif": {},
      "EbpAudioInterval": {},
      "EbpLookaheadMs": {},
      "EbpPlacement": {},
      "EcmPid": {},
      "EsRateInPes": {},
      "EtvPlatformPid": {},
      "EtvSignalPid": {},
      "FragmentTime": {},
      "Klv": {},
      "KlvDataPids": {},
      "NielsenId3Behavior": {},
      "NullPacketBitrate": {},
      "PatInterval": {},
      "PcrControl": {},
      "PcrPeriod": {},
      "PcrPid": {},
      "PmtInterval": {},
      "PmtPid": {},
      "ProgramNum": {},
      "RateMode": {},
      "Scte27Pids": {},
      "Scte35Control": {},
      "Scte35Pid": {},
      "SegmentationMarkers": {},
      "SegmentationStyle": {},
      "SegmentationTime": {},
      "TimedMetadataBehavior": {},
      "TimedMetadataPid": {},
      "TransportStreamId": {},
      "VideoPid": {},
      "Scte35PrerollPullupMilliseconds": {}
    },
    "RawSettings": {}
  },
  "Extension": {},
  "NameModifier": {}
}
```

Archive Output Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContainerSettings|object|true|none|none|
|Extension|object|false|none|none|
|NameModifier|object|false|none|none|

<h2 id="tocS_S3CannedAcl">S3CannedAcl</h2>
<!-- backwards compatibility -->
<a id="schemas3cannedacl"></a>
<a id="schema_S3CannedAcl"></a>
<a id="tocSs3cannedacl"></a>
<a id="tocss3cannedacl"></a>

```json
"AUTHENTICATED_READ"
```

S3 Canned Acl

<h2 id="tocS_AribDestinationSettings">AribDestinationSettings</h2>
<!-- backwards compatibility -->
<a id="schemaaribdestinationsettings"></a>
<a id="schema_AribDestinationSettings"></a>
<a id="tocSaribdestinationsettings"></a>
<a id="tocsaribdestinationsettings"></a>

```json
{}
```

Arib Destination Settings

<h2 id="tocS_AribSourceSettings">AribSourceSettings</h2>
<!-- backwards compatibility -->
<a id="schemaaribsourcesettings"></a>
<a id="schema_AribSourceSettings"></a>
<a id="tocSaribsourcesettings"></a>
<a id="tocsaribsourcesettings"></a>

```json
{}
```

Arib Source Settings

<h2 id="tocS___listOfInputChannelLevel">__listOfInputChannelLevel</h2>
<!-- backwards compatibility -->
<a id="schema__listofinputchannellevel"></a>
<a id="schema___listOfInputChannelLevel"></a>
<a id="tocS__listofinputchannellevel"></a>
<a id="tocs__listofinputchannellevel"></a>

```json
[
  {
    "Gain": {},
    "InputChannel": {}
  }
]
```

Placeholder documentation for __listOfInputChannelLevel

<h2 id="tocS___integerMin0Max7">__integerMin0Max7</h2>
<!-- backwards compatibility -->
<a id="schema__integermin0max7"></a>
<a id="schema___integerMin0Max7"></a>
<a id="tocS__integermin0max7"></a>
<a id="tocs__integermin0max7"></a>

```json
0
```

Placeholder documentation for __integerMin0Max7

<h2 id="tocS_AudioChannelMapping">AudioChannelMapping</h2>
<!-- backwards compatibility -->
<a id="schemaaudiochannelmapping"></a>
<a id="schema_AudioChannelMapping"></a>
<a id="tocSaudiochannelmapping"></a>
<a id="tocsaudiochannelmapping"></a>

```json
{
  "InputChannelLevels": {},
  "OutputChannel": {}
}
```

Audio Channel Mapping

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InputChannelLevels|object|true|none|none|
|OutputChannel|object|true|none|none|

<h2 id="tocS_Eac3AtmosSettings">Eac3AtmosSettings</h2>
<!-- backwards compatibility -->
<a id="schemaeac3atmossettings"></a>
<a id="schema_Eac3AtmosSettings"></a>
<a id="tocSeac3atmossettings"></a>
<a id="tocseac3atmossettings"></a>

```json
{
  "Bitrate": {},
  "CodingMode": {},
  "Dialnorm": {},
  "DrcLine": {},
  "DrcRf": {},
  "HeightTrim": {},
  "SurroundTrim": {}
}
```

Eac3 Atmos Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bitrate|object|false|none|none|
|CodingMode|object|false|none|none|
|Dialnorm|object|false|none|none|
|DrcLine|object|false|none|none|
|DrcRf|object|false|none|none|
|HeightTrim|object|false|none|none|
|SurroundTrim|object|false|none|none|

<h2 id="tocS_Eac3Settings">Eac3Settings</h2>
<!-- backwards compatibility -->
<a id="schemaeac3settings"></a>
<a id="schema_Eac3Settings"></a>
<a id="tocSeac3settings"></a>
<a id="tocseac3settings"></a>

```json
{
  "AttenuationControl": {},
  "Bitrate": {},
  "BitstreamMode": {},
  "CodingMode": {},
  "DcFilter": {},
  "Dialnorm": {},
  "DrcLine": {},
  "DrcRf": {},
  "LfeControl": {},
  "LfeFilter": {},
  "LoRoCenterMixLevel": {},
  "LoRoSurroundMixLevel": {},
  "LtRtCenterMixLevel": {},
  "LtRtSurroundMixLevel": {},
  "MetadataControl": {},
  "PassthroughControl": {},
  "PhaseControl": {},
  "StereoDownmix": {},
  "SurroundExMode": {},
  "SurroundMode": {}
}
```

Eac3 Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttenuationControl|object|false|none|none|
|Bitrate|object|false|none|none|
|BitstreamMode|object|false|none|none|
|CodingMode|object|false|none|none|
|DcFilter|object|false|none|none|
|Dialnorm|object|false|none|none|
|DrcLine|object|false|none|none|
|DrcRf|object|false|none|none|
|LfeControl|object|false|none|none|
|LfeFilter|object|false|none|none|
|LoRoCenterMixLevel|object|false|none|none|
|LoRoSurroundMixLevel|object|false|none|none|
|LtRtCenterMixLevel|object|false|none|none|
|LtRtSurroundMixLevel|object|false|none|none|
|MetadataControl|object|false|none|none|
|PassthroughControl|object|false|none|none|
|PhaseControl|object|false|none|none|
|StereoDownmix|object|false|none|none|
|SurroundExMode|object|false|none|none|
|SurroundMode|object|false|none|none|

<h2 id="tocS_Mp2Settings">Mp2Settings</h2>
<!-- backwards compatibility -->
<a id="schemamp2settings"></a>
<a id="schema_Mp2Settings"></a>
<a id="tocSmp2settings"></a>
<a id="tocsmp2settings"></a>

```json
{
  "Bitrate": {},
  "CodingMode": {},
  "SampleRate": {}
}
```

Mp2 Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bitrate|object|false|none|none|
|CodingMode|object|false|none|none|
|SampleRate|object|false|none|none|

<h2 id="tocS_PassThroughSettings">PassThroughSettings</h2>
<!-- backwards compatibility -->
<a id="schemapassthroughsettings"></a>
<a id="schema_PassThroughSettings"></a>
<a id="tocSpassthroughsettings"></a>
<a id="tocspassthroughsettings"></a>

```json
{}
```

Pass Through Settings

<h2 id="tocS_WavSettings">WavSettings</h2>
<!-- backwards compatibility -->
<a id="schemawavsettings"></a>
<a id="schema_WavSettings"></a>
<a id="tocSwavsettings"></a>
<a id="tocswavsettings"></a>

```json
{
  "BitDepth": {},
  "CodingMode": {},
  "SampleRate": {}
}
```

Wav Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BitDepth|object|false|none|none|
|CodingMode|object|false|none|none|
|SampleRate|object|false|none|none|

<h2 id="tocS_AudioCodecSettings">AudioCodecSettings</h2>
<!-- backwards compatibility -->
<a id="schemaaudiocodecsettings"></a>
<a id="schema_AudioCodecSettings"></a>
<a id="tocSaudiocodecsettings"></a>
<a id="tocsaudiocodecsettings"></a>

```json
{
  "AacSettings": {
    "Bitrate": {},
    "CodingMode": {},
    "InputType": {},
    "Profile": {},
    "RateControlMode": {},
    "RawFormat": {},
    "SampleRate": {},
    "Spec": {},
    "VbrQuality": {}
  },
  "Ac3Settings": {
    "Bitrate": {},
    "BitstreamMode": {},
    "CodingMode": {},
    "Dialnorm": {},
    "DrcProfile": {},
    "LfeFilter": {},
    "MetadataControl": {}
  },
  "Eac3AtmosSettings": {
    "Bitrate": {},
    "CodingMode": {},
    "Dialnorm": {},
    "DrcLine": {},
    "DrcRf": {},
    "HeightTrim": {},
    "SurroundTrim": {}
  },
  "Eac3Settings": {
    "AttenuationControl": {},
    "Bitrate": {},
    "BitstreamMode": {},
    "CodingMode": {},
    "DcFilter": {},
    "Dialnorm": {},
    "DrcLine": {},
    "DrcRf": {},
    "LfeControl": {},
    "LfeFilter": {},
    "LoRoCenterMixLevel": {},
    "LoRoSurroundMixLevel": {},
    "LtRtCenterMixLevel": {},
    "LtRtSurroundMixLevel": {},
    "MetadataControl": {},
    "PassthroughControl": {},
    "PhaseControl": {},
    "StereoDownmix": {},
    "SurroundExMode": {},
    "SurroundMode": {}
  },
  "Mp2Settings": {
    "Bitrate": {},
    "CodingMode": {},
    "SampleRate": {}
  },
  "PassThroughSettings": {},
  "WavSettings": {
    "BitDepth": {},
    "CodingMode": {},
    "SampleRate": {}
  }
}
```

Audio Codec Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AacSettings|object|false|none|none|
|Ac3Settings|object|false|none|none|
|Eac3AtmosSettings|object|false|none|none|
|Eac3Settings|object|false|none|none|
|Mp2Settings|object|false|none|none|
|PassThroughSettings|object|false|none|none|
|WavSettings|object|false|none|none|

<h2 id="tocS_AudioNormalizationSettings">AudioNormalizationSettings</h2>
<!-- backwards compatibility -->
<a id="schemaaudionormalizationsettings"></a>
<a id="schema_AudioNormalizationSettings"></a>
<a id="tocSaudionormalizationsettings"></a>
<a id="tocsaudionormalizationsettings"></a>

```json
{
  "Algorithm": {},
  "AlgorithmControl": {},
  "TargetLkfs": {}
}
```

Audio Normalization Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Algorithm|object|false|none|none|
|AlgorithmControl|object|false|none|none|
|TargetLkfs|object|false|none|none|

<h2 id="tocS_AudioType">AudioType</h2>
<!-- backwards compatibility -->
<a id="schemaaudiotype"></a>
<a id="schema_AudioType"></a>
<a id="tocSaudiotype"></a>
<a id="tocsaudiotype"></a>

```json
"CLEAN_EFFECTS"
```

Audio Type

<h2 id="tocS_AudioDescriptionAudioTypeControl">AudioDescriptionAudioTypeControl</h2>
<!-- backwards compatibility -->
<a id="schemaaudiodescriptionaudiotypecontrol"></a>
<a id="schema_AudioDescriptionAudioTypeControl"></a>
<a id="tocSaudiodescriptionaudiotypecontrol"></a>
<a id="tocsaudiodescriptionaudiotypecontrol"></a>

```json
"FOLLOW_INPUT"
```

Audio Description Audio Type Control

<h2 id="tocS_AudioWatermarkSettings">AudioWatermarkSettings</h2>
<!-- backwards compatibility -->
<a id="schemaaudiowatermarksettings"></a>
<a id="schema_AudioWatermarkSettings"></a>
<a id="tocSaudiowatermarksettings"></a>
<a id="tocsaudiowatermarksettings"></a>

```json
{
  "NielsenWatermarksSettings": {
    "NielsenCbetSettings": {
      "CbetCheckDigitString": {},
      "CbetStepaside": {},
      "Csid": {}
    },
    "NielsenDistributionType": {},
    "NielsenNaesIiNwSettings": {
      "CheckDigitString": {},
      "Sid": {},
      "Timezone": {}
    }
  }
}
```

Audio Watermark Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NielsenWatermarksSettings|object|false|none|none|

<h2 id="tocS___stringMin1Max35">__stringMin1Max35</h2>
<!-- backwards compatibility -->
<a id="schema__stringmin1max35"></a>
<a id="schema___stringMin1Max35"></a>
<a id="tocS__stringmin1max35"></a>
<a id="tocs__stringmin1max35"></a>

```json
"string"
```

Placeholder documentation for __stringMin1Max35

<h2 id="tocS_AudioDescriptionLanguageCodeControl">AudioDescriptionLanguageCodeControl</h2>
<!-- backwards compatibility -->
<a id="schemaaudiodescriptionlanguagecodecontrol"></a>
<a id="schema_AudioDescriptionLanguageCodeControl"></a>
<a id="tocSaudiodescriptionlanguagecodecontrol"></a>
<a id="tocsaudiodescriptionlanguagecodecontrol"></a>

```json
"FOLLOW_INPUT"
```

Audio Description Language Code Control

<h2 id="tocS___stringMax255">__stringMax255</h2>
<!-- backwards compatibility -->
<a id="schema__stringmax255"></a>
<a id="schema___stringMax255"></a>
<a id="tocS__stringmax255"></a>
<a id="tocs__stringmax255"></a>

```json
"string"
```

Placeholder documentation for __stringMax255

<h2 id="tocS_RemixSettings">RemixSettings</h2>
<!-- backwards compatibility -->
<a id="schemaremixsettings"></a>
<a id="schema_RemixSettings"></a>
<a id="tocSremixsettings"></a>
<a id="tocsremixsettings"></a>

```json
{
  "ChannelMappings": {},
  "ChannelsIn": {},
  "ChannelsOut": {}
}
```

Remix Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelMappings|object|true|none|none|
|ChannelsIn|object|false|none|none|
|ChannelsOut|object|false|none|none|

<h2 id="tocS_AudioDescription">AudioDescription</h2>
<!-- backwards compatibility -->
<a id="schemaaudiodescription"></a>
<a id="schema_AudioDescription"></a>
<a id="tocSaudiodescription"></a>
<a id="tocsaudiodescription"></a>

```json
{
  "AudioNormalizationSettings": {
    "Algorithm": {},
    "AlgorithmControl": {},
    "TargetLkfs": {}
  },
  "AudioSelectorName": {},
  "AudioType": {},
  "AudioTypeControl": {},
  "AudioWatermarkingSettings": {
    "NielsenWatermarksSettings": {
      "NielsenCbetSettings": {
        "CbetCheckDigitString": {},
        "CbetStepaside": {},
        "Csid": {}
      },
      "NielsenDistributionType": {},
      "NielsenNaesIiNwSettings": {
        "CheckDigitString": {},
        "Sid": {},
        "Timezone": {}
      }
    }
  },
  "CodecSettings": {
    "AacSettings": {
      "Bitrate": {},
      "CodingMode": {},
      "InputType": {},
      "Profile": {},
      "RateControlMode": {},
      "RawFormat": {},
      "SampleRate": {},
      "Spec": {},
      "VbrQuality": {}
    },
    "Ac3Settings": {
      "Bitrate": {},
      "BitstreamMode": {},
      "CodingMode": {},
      "Dialnorm": {},
      "DrcProfile": {},
      "LfeFilter": {},
      "MetadataControl": {}
    },
    "Eac3AtmosSettings": {
      "Bitrate": {},
      "CodingMode": {},
      "Dialnorm": {},
      "DrcLine": {},
      "DrcRf": {},
      "HeightTrim": {},
      "SurroundTrim": {}
    },
    "Eac3Settings": {
      "AttenuationControl": {},
      "Bitrate": {},
      "BitstreamMode": {},
      "CodingMode": {},
      "DcFilter": {},
      "Dialnorm": {},
      "DrcLine": {},
      "DrcRf": {},
      "LfeControl": {},
      "LfeFilter": {},
      "LoRoCenterMixLevel": {},
      "LoRoSurroundMixLevel": {},
      "LtRtCenterMixLevel": {},
      "LtRtSurroundMixLevel": {},
      "MetadataControl": {},
      "PassthroughControl": {},
      "PhaseControl": {},
      "StereoDownmix": {},
      "SurroundExMode": {},
      "SurroundMode": {}
    },
    "Mp2Settings": {
      "Bitrate": {},
      "CodingMode": {},
      "SampleRate": {}
    },
    "PassThroughSettings": {},
    "WavSettings": {
      "BitDepth": {},
      "CodingMode": {},
      "SampleRate": {}
    }
  },
  "LanguageCode": {},
  "LanguageCodeControl": {},
  "Name": {},
  "RemixSettings": {
    "ChannelMappings": {},
    "ChannelsIn": {},
    "ChannelsOut": {}
  },
  "StreamName": {}
}
```

Audio Description

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AudioNormalizationSettings|object|false|none|none|
|AudioSelectorName|object|true|none|none|
|AudioType|object|false|none|none|
|AudioTypeControl|object|false|none|none|
|AudioWatermarkingSettings|object|false|none|none|
|CodecSettings|object|false|none|none|
|LanguageCode|object|false|none|none|
|LanguageCodeControl|object|false|none|none|
|Name|object|true|none|none|
|RemixSettings|object|false|none|none|
|StreamName|object|false|none|none|

<h2 id="tocS_DolbyEProgramSelection">DolbyEProgramSelection</h2>
<!-- backwards compatibility -->
<a id="schemadolbyeprogramselection"></a>
<a id="schema_DolbyEProgramSelection"></a>
<a id="tocSdolbyeprogramselection"></a>
<a id="tocsdolbyeprogramselection"></a>

```json
"ALL_CHANNELS"
```

Dolby EProgram Selection

<h2 id="tocS_AudioDolbyEDecode">AudioDolbyEDecode</h2>
<!-- backwards compatibility -->
<a id="schemaaudiodolbyedecode"></a>
<a id="schema_AudioDolbyEDecode"></a>
<a id="tocSaudiodolbyedecode"></a>
<a id="tocsaudiodolbyedecode"></a>

```json
{
  "ProgramSelection": {}
}
```

Audio Dolby EDecode

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProgramSelection|object|true|none|none|

<h2 id="tocS___stringMin1">__stringMin1</h2>
<!-- backwards compatibility -->
<a id="schema__stringmin1"></a>
<a id="schema___stringMin1"></a>
<a id="tocS__stringmin1"></a>
<a id="tocs__stringmin1"></a>

```json
"string"
```

Placeholder documentation for __stringMin1

<h2 id="tocS_AudioHlsRenditionSelection">AudioHlsRenditionSelection</h2>
<!-- backwards compatibility -->
<a id="schemaaudiohlsrenditionselection"></a>
<a id="schema_AudioHlsRenditionSelection"></a>
<a id="tocSaudiohlsrenditionselection"></a>
<a id="tocsaudiohlsrenditionselection"></a>

```json
{
  "GroupId": {},
  "Name": {}
}
```

Audio Hls Rendition Selection

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupId|object|true|none|none|
|Name|object|true|none|none|

<h2 id="tocS_AudioLanguageSelectionPolicy">AudioLanguageSelectionPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaaudiolanguageselectionpolicy"></a>
<a id="schema_AudioLanguageSelectionPolicy"></a>
<a id="tocSaudiolanguageselectionpolicy"></a>
<a id="tocsaudiolanguageselectionpolicy"></a>

```json
"LOOSE"
```

Audio Language Selection Policy

<h2 id="tocS_AudioLanguageSelection">AudioLanguageSelection</h2>
<!-- backwards compatibility -->
<a id="schemaaudiolanguageselection"></a>
<a id="schema_AudioLanguageSelection"></a>
<a id="tocSaudiolanguageselection"></a>
<a id="tocsaudiolanguageselection"></a>

```json
{
  "LanguageCode": {},
  "LanguageSelectionPolicy": {}
}
```

Audio Language Selection

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LanguageCode|object|true|none|none|
|LanguageSelectionPolicy|object|false|none|none|

<h2 id="tocS_AudioNormalizationAlgorithm">AudioNormalizationAlgorithm</h2>
<!-- backwards compatibility -->
<a id="schemaaudionormalizationalgorithm"></a>
<a id="schema_AudioNormalizationAlgorithm"></a>
<a id="tocSaudionormalizationalgorithm"></a>
<a id="tocsaudionormalizationalgorithm"></a>

```json
"ITU_1770_1"
```

Audio Normalization Algorithm

<h2 id="tocS_AudioNormalizationAlgorithmControl">AudioNormalizationAlgorithmControl</h2>
<!-- backwards compatibility -->
<a id="schemaaudionormalizationalgorithmcontrol"></a>
<a id="schema_AudioNormalizationAlgorithmControl"></a>
<a id="tocSaudionormalizationalgorithmcontrol"></a>
<a id="tocsaudionormalizationalgorithmcontrol"></a>

```json
"CORRECT_AUDIO"
```

Audio Normalization Algorithm Control

<h2 id="tocS___doubleMinNegative59Max0">__doubleMinNegative59Max0</h2>
<!-- backwards compatibility -->
<a id="schema__doubleminnegative59max0"></a>
<a id="schema___doubleMinNegative59Max0"></a>
<a id="tocS__doubleminnegative59max0"></a>
<a id="tocs__doubleminnegative59max0"></a>

```json
0
```

Placeholder documentation for __doubleMinNegative59Max0

<h2 id="tocS_AudioOnlyHlsSegmentType">AudioOnlyHlsSegmentType</h2>
<!-- backwards compatibility -->
<a id="schemaaudioonlyhlssegmenttype"></a>
<a id="schema_AudioOnlyHlsSegmentType"></a>
<a id="tocSaudioonlyhlssegmenttype"></a>
<a id="tocsaudioonlyhlssegmenttype"></a>

```json
"AAC"
```

Audio Only Hls Segment Type

<h2 id="tocS_InputLocation">InputLocation</h2>
<!-- backwards compatibility -->
<a id="schemainputlocation"></a>
<a id="schema_InputLocation"></a>
<a id="tocSinputlocation"></a>
<a id="tocsinputlocation"></a>

```json
{
  "PasswordParam": {},
  "Uri": {},
  "Username": {}
}
```

Input Location

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PasswordParam|object|false|none|none|
|Uri|object|true|none|none|
|Username|object|false|none|none|

<h2 id="tocS_AudioOnlyHlsTrackType">AudioOnlyHlsTrackType</h2>
<!-- backwards compatibility -->
<a id="schemaaudioonlyhlstracktype"></a>
<a id="schema_AudioOnlyHlsTrackType"></a>
<a id="tocSaudioonlyhlstracktype"></a>
<a id="tocsaudioonlyhlstracktype"></a>

```json
"ALTERNATE_AUDIO_AUTO_SELECT"
```

Audio Only Hls Track Type

<h2 id="tocS_AudioOnlyHlsSettings">AudioOnlyHlsSettings</h2>
<!-- backwards compatibility -->
<a id="schemaaudioonlyhlssettings"></a>
<a id="schema_AudioOnlyHlsSettings"></a>
<a id="tocSaudioonlyhlssettings"></a>
<a id="tocsaudioonlyhlssettings"></a>

```json
{
  "AudioGroupId": {},
  "AudioOnlyImage": {
    "PasswordParam": {},
    "Uri": {},
    "Username": {}
  },
  "AudioTrackType": {},
  "SegmentType": {}
}
```

Audio Only Hls Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AudioGroupId|object|false|none|none|
|AudioOnlyImage|object|false|none|none|
|AudioTrackType|object|false|none|none|
|SegmentType|object|false|none|none|

<h2 id="tocS___integerMin0Max8191">__integerMin0Max8191</h2>
<!-- backwards compatibility -->
<a id="schema__integermin0max8191"></a>
<a id="schema___integerMin0Max8191"></a>
<a id="tocS__integermin0max8191"></a>
<a id="tocs__integermin0max8191"></a>

```json
0
```

Placeholder documentation for __integerMin0Max8191

<h2 id="tocS_AudioPidSelection">AudioPidSelection</h2>
<!-- backwards compatibility -->
<a id="schemaaudiopidselection"></a>
<a id="schema_AudioPidSelection"></a>
<a id="tocSaudiopidselection"></a>
<a id="tocsaudiopidselection"></a>

```json
{
  "Pid": {}
}
```

Audio Pid Selection

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Pid|object|true|none|none|

<h2 id="tocS_AudioSelectorSettings">AudioSelectorSettings</h2>
<!-- backwards compatibility -->
<a id="schemaaudioselectorsettings"></a>
<a id="schema_AudioSelectorSettings"></a>
<a id="tocSaudioselectorsettings"></a>
<a id="tocsaudioselectorsettings"></a>

```json
{
  "AudioHlsRenditionSelection": {
    "GroupId": {},
    "Name": {}
  },
  "AudioLanguageSelection": {
    "LanguageCode": {},
    "LanguageSelectionPolicy": {}
  },
  "AudioPidSelection": {
    "Pid": {}
  },
  "AudioTrackSelection": {
    "Tracks": {},
    "DolbyEDecode": {
      "ProgramSelection": {}
    }
  }
}
```

Audio Selector Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AudioHlsRenditionSelection|object|false|none|none|
|AudioLanguageSelection|object|false|none|none|
|AudioPidSelection|object|false|none|none|
|AudioTrackSelection|object|false|none|none|

<h2 id="tocS_AudioSelector">AudioSelector</h2>
<!-- backwards compatibility -->
<a id="schemaaudioselector"></a>
<a id="schema_AudioSelector"></a>
<a id="tocSaudioselector"></a>
<a id="tocsaudioselector"></a>

```json
{
  "Name": {},
  "SelectorSettings": {
    "AudioHlsRenditionSelection": {
      "GroupId": {},
      "Name": {}
    },
    "AudioLanguageSelection": {
      "LanguageCode": {},
      "LanguageSelectionPolicy": {}
    },
    "AudioPidSelection": {
      "Pid": {}
    },
    "AudioTrackSelection": {
      "Tracks": {},
      "DolbyEDecode": {
        "ProgramSelection": {}
      }
    }
  }
}
```

Audio Selector

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|SelectorSettings|object|false|none|none|

<h2 id="tocS_AudioTrackSelection">AudioTrackSelection</h2>
<!-- backwards compatibility -->
<a id="schemaaudiotrackselection"></a>
<a id="schema_AudioTrackSelection"></a>
<a id="tocSaudiotrackselection"></a>
<a id="tocsaudiotrackselection"></a>

```json
{
  "Tracks": {},
  "DolbyEDecode": {
    "ProgramSelection": {}
  }
}
```

Audio Track Selection

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tracks|object|true|none|none|
|DolbyEDecode|object|false|none|none|

<h2 id="tocS___integerMin1000">__integerMin1000</h2>
<!-- backwards compatibility -->
<a id="schema__integermin1000"></a>
<a id="schema___integerMin1000"></a>
<a id="tocS__integermin1000"></a>
<a id="tocs__integermin1000"></a>

```json
1000
```

Placeholder documentation for __integerMin1000

<h2 id="tocS_AudioSilenceFailoverSettings">AudioSilenceFailoverSettings</h2>
<!-- backwards compatibility -->
<a id="schemaaudiosilencefailoversettings"></a>
<a id="schema_AudioSilenceFailoverSettings"></a>
<a id="tocSaudiosilencefailoversettings"></a>
<a id="tocsaudiosilencefailoversettings"></a>

```json
{
  "AudioSelectorName": {},
  "AudioSilenceThresholdMsec": {}
}
```

Placeholder documentation for AudioSilenceFailoverSettings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AudioSelectorName|object|true|none|none|
|AudioSilenceThresholdMsec|object|false|none|none|

<h2 id="tocS_AudioTrack">AudioTrack</h2>
<!-- backwards compatibility -->
<a id="schemaaudiotrack"></a>
<a id="schema_AudioTrack"></a>
<a id="tocSaudiotrack"></a>
<a id="tocsaudiotrack"></a>

```json
{
  "Track": {}
}
```

Audio Track

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Track|object|true|none|none|

<h2 id="tocS___listOfAudioTrack">__listOfAudioTrack</h2>
<!-- backwards compatibility -->
<a id="schema__listofaudiotrack"></a>
<a id="schema___listOfAudioTrack"></a>
<a id="tocS__listofaudiotrack"></a>
<a id="tocs__listofaudiotrack"></a>

```json
[
  {
    "Track": {}
  }
]
```

Placeholder documentation for __listOfAudioTrack

<h2 id="tocS_NielsenWatermarksSettings">NielsenWatermarksSettings</h2>
<!-- backwards compatibility -->
<a id="schemanielsenwatermarkssettings"></a>
<a id="schema_NielsenWatermarksSettings"></a>
<a id="tocSnielsenwatermarkssettings"></a>
<a id="tocsnielsenwatermarkssettings"></a>

```json
{
  "NielsenCbetSettings": {
    "CbetCheckDigitString": {},
    "CbetStepaside": {},
    "Csid": {}
  },
  "NielsenDistributionType": {},
  "NielsenNaesIiNwSettings": {
    "CheckDigitString": {},
    "Sid": {},
    "Timezone": {}
  }
}
```

Nielsen Watermarks Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NielsenCbetSettings|object|false|none|none|
|NielsenDistributionType|object|false|none|none|
|NielsenNaesIiNwSettings|object|false|none|none|

<h2 id="tocS_AuthenticationScheme">AuthenticationScheme</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticationscheme"></a>
<a id="schema_AuthenticationScheme"></a>
<a id="tocSauthenticationscheme"></a>
<a id="tocsauthenticationscheme"></a>

```json
"AKAMAI"
```

Authentication Scheme

<h2 id="tocS___listOfFailoverCondition">__listOfFailoverCondition</h2>
<!-- backwards compatibility -->
<a id="schema__listoffailovercondition"></a>
<a id="schema___listOfFailoverCondition"></a>
<a id="tocS__listoffailovercondition"></a>
<a id="tocs__listoffailovercondition"></a>

```json
[
  {
    "FailoverConditionSettings": {
      "AudioSilenceSettings": {
        "AudioSelectorName": {},
        "AudioSilenceThresholdMsec": {}
      },
      "InputLossSettings": {
        "InputLossThresholdMsec": {}
      },
      "VideoBlackSettings": {
        "BlackDetectThreshold": {},
        "VideoBlackThresholdMsec": {}
      }
    }
  }
]
```

Placeholder documentation for __listOfFailoverCondition

<h2 id="tocS_InputPreference">InputPreference</h2>
<!-- backwards compatibility -->
<a id="schemainputpreference"></a>
<a id="schema_InputPreference"></a>
<a id="tocSinputpreference"></a>
<a id="tocsinputpreference"></a>

```json
"EQUAL_INPUT_PREFERENCE"
```

Input preference when deciding which input to make active when a previously failed input has recovered.
If \"EQUAL_INPUT_PREFERENCE\", then the active input will stay active as long as it is healthy.
If \"PRIMARY_INPUT_PREFERRED\", then always switch back to the primary input when it is healthy.

<h2 id="tocS_AutomaticInputFailoverSettings">AutomaticInputFailoverSettings</h2>
<!-- backwards compatibility -->
<a id="schemaautomaticinputfailoversettings"></a>
<a id="schema_AutomaticInputFailoverSettings"></a>
<a id="tocSautomaticinputfailoversettings"></a>
<a id="tocsautomaticinputfailoversettings"></a>

```json
{
  "ErrorClearTimeMsec": {},
  "FailoverConditions": {},
  "InputPreference": {},
  "SecondaryInputId": {}
}
```

The settings for Automatic Input Failover.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ErrorClearTimeMsec|object|false|none|none|
|FailoverConditions|object|false|none|none|
|InputPreference|object|false|none|none|
|SecondaryInputId|object|true|none|none|

<h2 id="tocS_AvailBlankingState">AvailBlankingState</h2>
<!-- backwards compatibility -->
<a id="schemaavailblankingstate"></a>
<a id="schema_AvailBlankingState"></a>
<a id="tocSavailblankingstate"></a>
<a id="tocsavailblankingstate"></a>

```json
"DISABLED"
```

Avail Blanking State

<h2 id="tocS_AvailSettings">AvailSettings</h2>
<!-- backwards compatibility -->
<a id="schemaavailsettings"></a>
<a id="schema_AvailSettings"></a>
<a id="tocSavailsettings"></a>
<a id="tocsavailsettings"></a>

```json
{
  "Esam": {
    "AcquisitionPointId": {},
    "AdAvailOffset": {},
    "PasswordParam": {},
    "PoisEndpoint": {},
    "Username": {},
    "ZoneIdentity": {}
  },
  "Scte35SpliceInsert": {
    "AdAvailOffset": {},
    "NoRegionalBlackoutFlag": {},
    "WebDeliveryAllowedFlag": {}
  },
  "Scte35TimeSignalApos": {
    "AdAvailOffset": {},
    "NoRegionalBlackoutFlag": {},
    "WebDeliveryAllowedFlag": {}
  }
}
```

Avail Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Esam|object|false|none|none|
|Scte35SpliceInsert|object|false|none|none|
|Scte35TimeSignalApos|object|false|none|none|

<h2 id="tocS_Esam">Esam</h2>
<!-- backwards compatibility -->
<a id="schemaesam"></a>
<a id="schema_Esam"></a>
<a id="tocSesam"></a>
<a id="tocsesam"></a>

```json
{
  "AcquisitionPointId": {},
  "AdAvailOffset": {},
  "PasswordParam": {},
  "PoisEndpoint": {},
  "Username": {},
  "ZoneIdentity": {}
}
```

Esam

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcquisitionPointId|object|true|none|none|
|AdAvailOffset|object|false|none|none|
|PasswordParam|object|false|none|none|
|PoisEndpoint|object|true|none|none|
|Username|object|false|none|none|
|ZoneIdentity|object|false|none|none|

<h2 id="tocS_Scte35SpliceInsert">Scte35SpliceInsert</h2>
<!-- backwards compatibility -->
<a id="schemascte35spliceinsert"></a>
<a id="schema_Scte35SpliceInsert"></a>
<a id="tocSscte35spliceinsert"></a>
<a id="tocsscte35spliceinsert"></a>

```json
{
  "AdAvailOffset": {},
  "NoRegionalBlackoutFlag": {},
  "WebDeliveryAllowedFlag": {}
}
```

Typical configuration that applies breaks on splice inserts in addition to time signal placement opportunities, breaks, and advertisements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdAvailOffset|object|false|none|none|
|NoRegionalBlackoutFlag|object|false|none|none|
|WebDeliveryAllowedFlag|object|false|none|none|

<h2 id="tocS_Scte35TimeSignalApos">Scte35TimeSignalApos</h2>
<!-- backwards compatibility -->
<a id="schemascte35timesignalapos"></a>
<a id="schema_Scte35TimeSignalApos"></a>
<a id="tocSscte35timesignalapos"></a>
<a id="tocsscte35timesignalapos"></a>

```json
{
  "AdAvailOffset": {},
  "NoRegionalBlackoutFlag": {},
  "WebDeliveryAllowedFlag": {}
}
```

Atypical configuration that applies segment breaks only on SCTE-35 time signal placement opportunities and breaks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdAvailOffset|object|false|none|none|
|NoRegionalBlackoutFlag|object|false|none|none|
|WebDeliveryAllowedFlag|object|false|none|none|

<h2 id="tocS_BatchDeleteRequest">BatchDeleteRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeleterequest"></a>
<a id="schema_BatchDeleteRequest"></a>
<a id="tocSbatchdeleterequest"></a>
<a id="tocsbatchdeleterequest"></a>

```json
{
  "ChannelIds": {},
  "InputIds": {},
  "InputSecurityGroupIds": {},
  "MultiplexIds": {}
}
```

A request to delete resources

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelIds|object|false|none|none|
|InputIds|object|false|none|none|
|InputSecurityGroupIds|object|false|none|none|
|MultiplexIds|object|false|none|none|

<h2 id="tocS___listOfBatchFailedResultModel">__listOfBatchFailedResultModel</h2>
<!-- backwards compatibility -->
<a id="schema__listofbatchfailedresultmodel"></a>
<a id="schema___listOfBatchFailedResultModel"></a>
<a id="tocS__listofbatchfailedresultmodel"></a>
<a id="tocs__listofbatchfailedresultmodel"></a>

```json
[
  {
    "Arn": {},
    "Code": {},
    "Id": {},
    "Message": {}
  }
]
```

Placeholder documentation for __listOfBatchFailedResultModel

<h2 id="tocS___listOfBatchSuccessfulResultModel">__listOfBatchSuccessfulResultModel</h2>
<!-- backwards compatibility -->
<a id="schema__listofbatchsuccessfulresultmodel"></a>
<a id="schema___listOfBatchSuccessfulResultModel"></a>
<a id="tocS__listofbatchsuccessfulresultmodel"></a>
<a id="tocs__listofbatchsuccessfulresultmodel"></a>

```json
[
  {
    "Arn": {},
    "Id": {},
    "State": {}
  }
]
```

Placeholder documentation for __listOfBatchSuccessfulResultModel

<h2 id="tocS_BatchFailedResultModel">BatchFailedResultModel</h2>
<!-- backwards compatibility -->
<a id="schemabatchfailedresultmodel"></a>
<a id="schema_BatchFailedResultModel"></a>
<a id="tocSbatchfailedresultmodel"></a>
<a id="tocsbatchfailedresultmodel"></a>

```json
{
  "Arn": {},
  "Code": {},
  "Id": {},
  "Message": {}
}
```

Details from a failed operation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Code|object|false|none|none|
|Id|object|false|none|none|
|Message|object|false|none|none|

<h2 id="tocS_BatchScheduleActionCreateRequest">BatchScheduleActionCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchscheduleactioncreaterequest"></a>
<a id="schema_BatchScheduleActionCreateRequest"></a>
<a id="tocSbatchscheduleactioncreaterequest"></a>
<a id="tocsbatchscheduleactioncreaterequest"></a>

```json
{
  "ScheduleActions": {}
}
```

A list of schedule actions to create (in a request) or that have been created (in a response).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScheduleActions|object|true|none|none|

<h2 id="tocS_BatchScheduleActionCreateResult">BatchScheduleActionCreateResult</h2>
<!-- backwards compatibility -->
<a id="schemabatchscheduleactioncreateresult"></a>
<a id="schema_BatchScheduleActionCreateResult"></a>
<a id="tocSbatchscheduleactioncreateresult"></a>
<a id="tocsbatchscheduleactioncreateresult"></a>

```json
{
  "ScheduleActions": {}
}
```

List of actions that have been created in the schedule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScheduleActions|object|true|none|none|

<h2 id="tocS_BatchScheduleActionDeleteRequest">BatchScheduleActionDeleteRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchscheduleactiondeleterequest"></a>
<a id="schema_BatchScheduleActionDeleteRequest"></a>
<a id="tocSbatchscheduleactiondeleterequest"></a>
<a id="tocsbatchscheduleactiondeleterequest"></a>

```json
{
  "ActionNames": {}
}
```

A list of schedule actions to delete.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActionNames|object|true|none|none|

<h2 id="tocS_BatchScheduleActionDeleteResult">BatchScheduleActionDeleteResult</h2>
<!-- backwards compatibility -->
<a id="schemabatchscheduleactiondeleteresult"></a>
<a id="schema_BatchScheduleActionDeleteResult"></a>
<a id="tocSbatchscheduleactiondeleteresult"></a>
<a id="tocsbatchscheduleactiondeleteresult"></a>

```json
{
  "ScheduleActions": {}
}
```

List of actions that have been deleted from the schedule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScheduleActions|object|true|none|none|

<h2 id="tocS_BatchStartRequest">BatchStartRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchstartrequest"></a>
<a id="schema_BatchStartRequest"></a>
<a id="tocSbatchstartrequest"></a>
<a id="tocsbatchstartrequest"></a>

```json
{
  "ChannelIds": {},
  "MultiplexIds": {}
}
```

A request to start resources

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelIds|object|false|none|none|
|MultiplexIds|object|false|none|none|

<h2 id="tocS_BatchStopRequest">BatchStopRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchstoprequest"></a>
<a id="schema_BatchStopRequest"></a>
<a id="tocSbatchstoprequest"></a>
<a id="tocsbatchstoprequest"></a>

```json
{
  "ChannelIds": {},
  "MultiplexIds": {}
}
```

A request to stop resources

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelIds|object|false|none|none|
|MultiplexIds|object|false|none|none|

<h2 id="tocS_BatchSuccessfulResultModel">BatchSuccessfulResultModel</h2>
<!-- backwards compatibility -->
<a id="schemabatchsuccessfulresultmodel"></a>
<a id="schema_BatchSuccessfulResultModel"></a>
<a id="tocSbatchsuccessfulresultmodel"></a>
<a id="tocsbatchsuccessfulresultmodel"></a>

```json
{
  "Arn": {},
  "Id": {},
  "State": {}
}
```

Details from a successful operation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Id|object|false|none|none|
|State|object|false|none|none|

<h2 id="tocS_BatchUpdateScheduleRequest">BatchUpdateScheduleRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchupdateschedulerequest"></a>
<a id="schema_BatchUpdateScheduleRequest"></a>
<a id="tocSbatchupdateschedulerequest"></a>
<a id="tocsbatchupdateschedulerequest"></a>

```json
{
  "Creates": {
    "ScheduleActions": {}
  },
  "Deletes": {
    "ActionNames": {}
  }
}
```

List of actions to create and list of actions to delete.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Creates|object|false|none|none|
|Deletes|object|false|none|none|

<h2 id="tocS_BlackoutSlateNetworkEndBlackout">BlackoutSlateNetworkEndBlackout</h2>
<!-- backwards compatibility -->
<a id="schemablackoutslatenetworkendblackout"></a>
<a id="schema_BlackoutSlateNetworkEndBlackout"></a>
<a id="tocSblackoutslatenetworkendblackout"></a>
<a id="tocsblackoutslatenetworkendblackout"></a>

```json
"DISABLED"
```

Blackout Slate Network End Blackout

<h2 id="tocS___stringMin34Max34">__stringMin34Max34</h2>
<!-- backwards compatibility -->
<a id="schema__stringmin34max34"></a>
<a id="schema___stringMin34Max34"></a>
<a id="tocS__stringmin34max34"></a>
<a id="tocs__stringmin34max34"></a>

```json
"stringstringstringstringstringstri"
```

Placeholder documentation for __stringMin34Max34

<h2 id="tocS_BlackoutSlateState">BlackoutSlateState</h2>
<!-- backwards compatibility -->
<a id="schemablackoutslatestate"></a>
<a id="schema_BlackoutSlateState"></a>
<a id="tocSblackoutslatestate"></a>
<a id="tocsblackoutslatestate"></a>

```json
"DISABLED"
```

Blackout Slate State

<h2 id="tocS_BurnInAlignment">BurnInAlignment</h2>
<!-- backwards compatibility -->
<a id="schemaburninalignment"></a>
<a id="schema_BurnInAlignment"></a>
<a id="tocSburninalignment"></a>
<a id="tocsburninalignment"></a>

```json
"CENTERED"
```

Burn In Alignment

<h2 id="tocS_BurnInBackgroundColor">BurnInBackgroundColor</h2>
<!-- backwards compatibility -->
<a id="schemaburninbackgroundcolor"></a>
<a id="schema_BurnInBackgroundColor"></a>
<a id="tocSburninbackgroundcolor"></a>
<a id="tocsburninbackgroundcolor"></a>

```json
"BLACK"
```

Burn In Background Color

<h2 id="tocS___integerMin0Max255">__integerMin0Max255</h2>
<!-- backwards compatibility -->
<a id="schema__integermin0max255"></a>
<a id="schema___integerMin0Max255"></a>
<a id="tocS__integermin0max255"></a>
<a id="tocs__integermin0max255"></a>

```json
0
```

Placeholder documentation for __integerMin0Max255

<h2 id="tocS_BurnInFontColor">BurnInFontColor</h2>
<!-- backwards compatibility -->
<a id="schemaburninfontcolor"></a>
<a id="schema_BurnInFontColor"></a>
<a id="tocSburninfontcolor"></a>
<a id="tocsburninfontcolor"></a>

```json
"BLACK"
```

Burn In Font Color

<h2 id="tocS___integerMin96Max600">__integerMin96Max600</h2>
<!-- backwards compatibility -->
<a id="schema__integermin96max600"></a>
<a id="schema___integerMin96Max600"></a>
<a id="tocS__integermin96max600"></a>
<a id="tocs__integermin96max600"></a>

```json
96
```

Placeholder documentation for __integerMin96Max600

<h2 id="tocS_BurnInOutlineColor">BurnInOutlineColor</h2>
<!-- backwards compatibility -->
<a id="schemaburninoutlinecolor"></a>
<a id="schema_BurnInOutlineColor"></a>
<a id="tocSburninoutlinecolor"></a>
<a id="tocsburninoutlinecolor"></a>

```json
"BLACK"
```

Burn In Outline Color

<h2 id="tocS___integerMin0Max10">__integerMin0Max10</h2>
<!-- backwards compatibility -->
<a id="schema__integermin0max10"></a>
<a id="schema___integerMin0Max10"></a>
<a id="tocS__integermin0max10"></a>
<a id="tocs__integermin0max10"></a>

```json
0
```

Placeholder documentation for __integerMin0Max10

<h2 id="tocS_BurnInShadowColor">BurnInShadowColor</h2>
<!-- backwards compatibility -->
<a id="schemaburninshadowcolor"></a>
<a id="schema_BurnInShadowColor"></a>
<a id="tocSburninshadowcolor"></a>
<a id="tocsburninshadowcolor"></a>

```json
"BLACK"
```

Burn In Shadow Color

<h2 id="tocS_BurnInTeletextGridControl">BurnInTeletextGridControl</h2>
<!-- backwards compatibility -->
<a id="schemaburninteletextgridcontrol"></a>
<a id="schema_BurnInTeletextGridControl"></a>
<a id="tocSburninteletextgridcontrol"></a>
<a id="tocsburninteletextgridcontrol"></a>

```json
"FIXED"
```

Burn In Teletext Grid Control

<h2 id="tocS___integerMin0">__integerMin0</h2>
<!-- backwards compatibility -->
<a id="schema__integermin0"></a>
<a id="schema___integerMin0"></a>
<a id="tocS__integermin0"></a>
<a id="tocs__integermin0"></a>

```json
0
```

Placeholder documentation for __integerMin0

<h2 id="tocS_BurnInDestinationSettings">BurnInDestinationSettings</h2>
<!-- backwards compatibility -->
<a id="schemaburnindestinationsettings"></a>
<a id="schema_BurnInDestinationSettings"></a>
<a id="tocSburnindestinationsettings"></a>
<a id="tocsburnindestinationsettings"></a>

```json
{
  "Alignment": {},
  "BackgroundColor": {},
  "BackgroundOpacity": {},
  "Font": {
    "PasswordParam": {},
    "Uri": {},
    "Username": {}
  },
  "FontColor": {},
  "FontOpacity": {},
  "FontResolution": {},
  "FontSize": {},
  "OutlineColor": {},
  "OutlineSize": {},
  "ShadowColor": {},
  "ShadowOpacity": {},
  "ShadowXOffset": {},
  "ShadowYOffset": {},
  "TeletextGridControl": {},
  "XPosition": {},
  "YPosition": {}
}
```

Burn In Destination Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Alignment|object|false|none|none|
|BackgroundColor|object|false|none|none|
|BackgroundOpacity|object|false|none|none|
|Font|object|false|none|none|
|FontColor|object|false|none|none|
|FontOpacity|object|false|none|none|
|FontResolution|object|false|none|none|
|FontSize|object|false|none|none|
|OutlineColor|object|false|none|none|
|OutlineSize|object|false|none|none|
|ShadowColor|object|false|none|none|
|ShadowOpacity|object|false|none|none|
|ShadowXOffset|object|false|none|none|
|ShadowYOffset|object|false|none|none|
|TeletextGridControl|object|false|none|none|
|XPosition|object|false|none|none|
|YPosition|object|false|none|none|

<h2 id="tocS_CancelInputDeviceTransferRequest">CancelInputDeviceTransferRequest</h2>
<!-- backwards compatibility -->
<a id="schemacancelinputdevicetransferrequest"></a>
<a id="schema_CancelInputDeviceTransferRequest"></a>
<a id="tocScancelinputdevicetransferrequest"></a>
<a id="tocscancelinputdevicetransferrequest"></a>

```json
{}
```

Placeholder documentation for CancelInputDeviceTransferRequest

<h2 id="tocS_CaptionDestinationSettings">CaptionDestinationSettings</h2>
<!-- backwards compatibility -->
<a id="schemacaptiondestinationsettings"></a>
<a id="schema_CaptionDestinationSettings"></a>
<a id="tocScaptiondestinationsettings"></a>
<a id="tocscaptiondestinationsettings"></a>

```json
{
  "AribDestinationSettings": {},
  "BurnInDestinationSettings": {
    "Alignment": {},
    "BackgroundColor": {},
    "BackgroundOpacity": {},
    "Font": {
      "PasswordParam": {},
      "Uri": {},
      "Username": {}
    },
    "FontColor": {},
    "FontOpacity": {},
    "FontResolution": {},
    "FontSize": {},
    "OutlineColor": {},
    "OutlineSize": {},
    "ShadowColor": {},
    "ShadowOpacity": {},
    "ShadowXOffset": {},
    "ShadowYOffset": {},
    "TeletextGridControl": {},
    "XPosition": {},
    "YPosition": {}
  },
  "DvbSubDestinationSettings": {
    "Alignment": {},
    "BackgroundColor": {},
    "BackgroundOpacity": {},
    "Font": {
      "PasswordParam": {},
      "Uri": {},
      "Username": {}
    },
    "FontColor": {},
    "FontOpacity": {},
    "FontResolution": {},
    "FontSize": {},
    "OutlineColor": {},
    "OutlineSize": {},
    "ShadowColor": {},
    "ShadowOpacity": {},
    "ShadowXOffset": {},
    "ShadowYOffset": {},
    "TeletextGridControl": {},
    "XPosition": {},
    "YPosition": {}
  },
  "EbuTtDDestinationSettings": {
    "CopyrightHolder": {},
    "FillLineGap": {},
    "FontFamily": {},
    "StyleControl": {}
  },
  "EmbeddedDestinationSettings": {},
  "EmbeddedPlusScte20DestinationSettings": {},
  "RtmpCaptionInfoDestinationSettings": {},
  "Scte20PlusEmbeddedDestinationSettings": {},
  "Scte27DestinationSettings": {},
  "SmpteTtDestinationSettings": {},
  "TeletextDestinationSettings": {},
  "TtmlDestinationSettings": {
    "StyleControl": {}
  },
  "WebvttDestinationSettings": {
    "StyleControl": {}
  }
}
```

Caption Destination Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AribDestinationSettings|object|false|none|none|
|BurnInDestinationSettings|object|false|none|none|
|DvbSubDestinationSettings|object|false|none|none|
|EbuTtDDestinationSettings|object|false|none|none|
|EmbeddedDestinationSettings|object|false|none|none|
|EmbeddedPlusScte20DestinationSettings|object|false|none|none|
|RtmpCaptionInfoDestinationSettings|object|false|none|none|
|Scte20PlusEmbeddedDestinationSettings|object|false|none|none|
|Scte27DestinationSettings|object|false|none|none|
|SmpteTtDestinationSettings|object|false|none|none|
|TeletextDestinationSettings|object|false|none|none|
|TtmlDestinationSettings|object|false|none|none|
|WebvttDestinationSettings|object|false|none|none|

<h2 id="tocS_CaptionDescription">CaptionDescription</h2>
<!-- backwards compatibility -->
<a id="schemacaptiondescription"></a>
<a id="schema_CaptionDescription"></a>
<a id="tocScaptiondescription"></a>
<a id="tocscaptiondescription"></a>

```json
{
  "Accessibility": {},
  "CaptionSelectorName": {},
  "DestinationSettings": {
    "AribDestinationSettings": {},
    "BurnInDestinationSettings": {
      "Alignment": {},
      "BackgroundColor": {},
      "BackgroundOpacity": {},
      "Font": {
        "PasswordParam": {},
        "Uri": {},
        "Username": {}
      },
      "FontColor": {},
      "FontOpacity": {},
      "FontResolution": {},
      "FontSize": {},
      "OutlineColor": {},
      "OutlineSize": {},
      "ShadowColor": {},
      "ShadowOpacity": {},
      "ShadowXOffset": {},
      "ShadowYOffset": {},
      "TeletextGridControl": {},
      "XPosition": {},
      "YPosition": {}
    },
    "DvbSubDestinationSettings": {
      "Alignment": {},
      "BackgroundColor": {},
      "BackgroundOpacity": {},
      "Font": {
        "PasswordParam": {},
        "Uri": {},
        "Username": {}
      },
      "FontColor": {},
      "FontOpacity": {},
      "FontResolution": {},
      "FontSize": {},
      "OutlineColor": {},
      "OutlineSize": {},
      "ShadowColor": {},
      "ShadowOpacity": {},
      "ShadowXOffset": {},
      "ShadowYOffset": {},
      "TeletextGridControl": {},
      "XPosition": {},
      "YPosition": {}
    },
    "EbuTtDDestinationSettings": {
      "CopyrightHolder": {},
      "FillLineGap": {},
      "FontFamily": {},
      "StyleControl": {}
    },
    "EmbeddedDestinationSettings": {},
    "EmbeddedPlusScte20DestinationSettings": {},
    "RtmpCaptionInfoDestinationSettings": {},
    "Scte20PlusEmbeddedDestinationSettings": {},
    "Scte27DestinationSettings": {},
    "SmpteTtDestinationSettings": {},
    "TeletextDestinationSettings": {},
    "TtmlDestinationSettings": {
      "StyleControl": {}
    },
    "WebvttDestinationSettings": {
      "StyleControl": {}
    }
  },
  "LanguageCode": {},
  "LanguageDescription": {},
  "Name": {}
}
```

Caption Description

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Accessibility|object|false|none|none|
|CaptionSelectorName|object|true|none|none|
|DestinationSettings|object|false|none|none|
|LanguageCode|object|false|none|none|
|LanguageDescription|object|false|none|none|
|Name|object|true|none|none|

<h2 id="tocS_DvbSubDestinationSettings">DvbSubDestinationSettings</h2>
<!-- backwards compatibility -->
<a id="schemadvbsubdestinationsettings"></a>
<a id="schema_DvbSubDestinationSettings"></a>
<a id="tocSdvbsubdestinationsettings"></a>
<a id="tocsdvbsubdestinationsettings"></a>

```json
{
  "Alignment": {},
  "BackgroundColor": {},
  "BackgroundOpacity": {},
  "Font": {
    "PasswordParam": {},
    "Uri": {},
    "Username": {}
  },
  "FontColor": {},
  "FontOpacity": {},
  "FontResolution": {},
  "FontSize": {},
  "OutlineColor": {},
  "OutlineSize": {},
  "ShadowColor": {},
  "ShadowOpacity": {},
  "ShadowXOffset": {},
  "ShadowYOffset": {},
  "TeletextGridControl": {},
  "XPosition": {},
  "YPosition": {}
}
```

Dvb Sub Destination Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Alignment|object|false|none|none|
|BackgroundColor|object|false|none|none|
|BackgroundOpacity|object|false|none|none|
|Font|object|false|none|none|
|FontColor|object|false|none|none|
|FontOpacity|object|false|none|none|
|FontResolution|object|false|none|none|
|FontSize|object|false|none|none|
|OutlineColor|object|false|none|none|
|OutlineSize|object|false|none|none|
|ShadowColor|object|false|none|none|
|ShadowOpacity|object|false|none|none|
|ShadowXOffset|object|false|none|none|
|ShadowYOffset|object|false|none|none|
|TeletextGridControl|object|false|none|none|
|XPosition|object|false|none|none|
|YPosition|object|false|none|none|

<h2 id="tocS_EbuTtDDestinationSettings">EbuTtDDestinationSettings</h2>
<!-- backwards compatibility -->
<a id="schemaebuttddestinationsettings"></a>
<a id="schema_EbuTtDDestinationSettings"></a>
<a id="tocSebuttddestinationsettings"></a>
<a id="tocsebuttddestinationsettings"></a>

```json
{
  "CopyrightHolder": {},
  "FillLineGap": {},
  "FontFamily": {},
  "StyleControl": {}
}
```

Ebu Tt DDestination Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CopyrightHolder|object|false|none|none|
|FillLineGap|object|false|none|none|
|FontFamily|object|false|none|none|
|StyleControl|object|false|none|none|

<h2 id="tocS_EmbeddedDestinationSettings">EmbeddedDestinationSettings</h2>
<!-- backwards compatibility -->
<a id="schemaembeddeddestinationsettings"></a>
<a id="schema_EmbeddedDestinationSettings"></a>
<a id="tocSembeddeddestinationsettings"></a>
<a id="tocsembeddeddestinationsettings"></a>

```json
{}
```

Embedded Destination Settings

<h2 id="tocS_EmbeddedPlusScte20DestinationSettings">EmbeddedPlusScte20DestinationSettings</h2>
<!-- backwards compatibility -->
<a id="schemaembeddedplusscte20destinationsettings"></a>
<a id="schema_EmbeddedPlusScte20DestinationSettings"></a>
<a id="tocSembeddedplusscte20destinationsettings"></a>
<a id="tocsembeddedplusscte20destinationsettings"></a>

```json
{}
```

Embedded Plus Scte20 Destination Settings

<h2 id="tocS_RtmpCaptionInfoDestinationSettings">RtmpCaptionInfoDestinationSettings</h2>
<!-- backwards compatibility -->
<a id="schemartmpcaptioninfodestinationsettings"></a>
<a id="schema_RtmpCaptionInfoDestinationSettings"></a>
<a id="tocSrtmpcaptioninfodestinationsettings"></a>
<a id="tocsrtmpcaptioninfodestinationsettings"></a>

```json
{}
```

Rtmp Caption Info Destination Settings

<h2 id="tocS_Scte20PlusEmbeddedDestinationSettings">Scte20PlusEmbeddedDestinationSettings</h2>
<!-- backwards compatibility -->
<a id="schemascte20plusembeddeddestinationsettings"></a>
<a id="schema_Scte20PlusEmbeddedDestinationSettings"></a>
<a id="tocSscte20plusembeddeddestinationsettings"></a>
<a id="tocsscte20plusembeddeddestinationsettings"></a>

```json
{}
```

Scte20 Plus Embedded Destination Settings

<h2 id="tocS_Scte27DestinationSettings">Scte27DestinationSettings</h2>
<!-- backwards compatibility -->
<a id="schemascte27destinationsettings"></a>
<a id="schema_Scte27DestinationSettings"></a>
<a id="tocSscte27destinationsettings"></a>
<a id="tocsscte27destinationsettings"></a>

```json
{}
```

Scte27 Destination Settings

<h2 id="tocS_SmpteTtDestinationSettings">SmpteTtDestinationSettings</h2>
<!-- backwards compatibility -->
<a id="schemasmptettdestinationsettings"></a>
<a id="schema_SmpteTtDestinationSettings"></a>
<a id="tocSsmptettdestinationsettings"></a>
<a id="tocssmptettdestinationsettings"></a>

```json
{}
```

Smpte Tt Destination Settings

<h2 id="tocS_TeletextDestinationSettings">TeletextDestinationSettings</h2>
<!-- backwards compatibility -->
<a id="schemateletextdestinationsettings"></a>
<a id="schema_TeletextDestinationSettings"></a>
<a id="tocSteletextdestinationsettings"></a>
<a id="tocsteletextdestinationsettings"></a>

```json
{}
```

Teletext Destination Settings

<h2 id="tocS_TtmlDestinationSettings">TtmlDestinationSettings</h2>
<!-- backwards compatibility -->
<a id="schemattmldestinationsettings"></a>
<a id="schema_TtmlDestinationSettings"></a>
<a id="tocSttmldestinationsettings"></a>
<a id="tocsttmldestinationsettings"></a>

```json
{
  "StyleControl": {}
}
```

Ttml Destination Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StyleControl|object|false|none|none|

<h2 id="tocS_WebvttDestinationSettings">WebvttDestinationSettings</h2>
<!-- backwards compatibility -->
<a id="schemawebvttdestinationsettings"></a>
<a id="schema_WebvttDestinationSettings"></a>
<a id="tocSwebvttdestinationsettings"></a>
<a id="tocswebvttdestinationsettings"></a>

```json
{
  "StyleControl": {}
}
```

Webvtt Destination Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StyleControl|object|false|none|none|

<h2 id="tocS___stringMin3Max3">__stringMin3Max3</h2>
<!-- backwards compatibility -->
<a id="schema__stringmin3max3"></a>
<a id="schema___stringMin3Max3"></a>
<a id="tocS__stringmin3max3"></a>
<a id="tocs__stringmin3max3"></a>

```json
"str"
```

Placeholder documentation for __stringMin3Max3

<h2 id="tocS_CaptionLanguageMapping">CaptionLanguageMapping</h2>
<!-- backwards compatibility -->
<a id="schemacaptionlanguagemapping"></a>
<a id="schema_CaptionLanguageMapping"></a>
<a id="tocScaptionlanguagemapping"></a>
<a id="tocscaptionlanguagemapping"></a>

```json
{
  "CaptionChannel": {},
  "LanguageCode": {},
  "LanguageDescription": {}
}
```

Maps a caption channel to an ISO 693-2 language code (http://www.loc.gov/standards/iso639-2), with an optional description.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CaptionChannel|object|true|none|none|
|LanguageCode|object|true|none|none|
|LanguageDescription|object|true|none|none|

<h2 id="tocS___doubleMin0Max100">__doubleMin0Max100</h2>
<!-- backwards compatibility -->
<a id="schema__doublemin0max100"></a>
<a id="schema___doubleMin0Max100"></a>
<a id="tocS__doublemin0max100"></a>
<a id="tocs__doublemin0max100"></a>

```json
0
```

Placeholder documentation for __doubleMin0Max100

<h2 id="tocS_CaptionRectangle">CaptionRectangle</h2>
<!-- backwards compatibility -->
<a id="schemacaptionrectangle"></a>
<a id="schema_CaptionRectangle"></a>
<a id="tocScaptionrectangle"></a>
<a id="tocscaptionrectangle"></a>

```json
{
  "Height": {},
  "LeftOffset": {},
  "TopOffset": {},
  "Width": {}
}
```

Caption Rectangle

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Height|object|true|none|none|
|LeftOffset|object|true|none|none|
|TopOffset|object|true|none|none|
|Width|object|true|none|none|

<h2 id="tocS_CaptionSelectorSettings">CaptionSelectorSettings</h2>
<!-- backwards compatibility -->
<a id="schemacaptionselectorsettings"></a>
<a id="schema_CaptionSelectorSettings"></a>
<a id="tocScaptionselectorsettings"></a>
<a id="tocscaptionselectorsettings"></a>

```json
{
  "AncillarySourceSettings": {
    "SourceAncillaryChannelNumber": {}
  },
  "AribSourceSettings": {},
  "DvbSubSourceSettings": {
    "OcrLanguage": {},
    "Pid": {}
  },
  "EmbeddedSourceSettings": {
    "Convert608To708": {},
    "Scte20Detection": {},
    "Source608ChannelNumber": {},
    "Source608TrackNumber": {}
  },
  "Scte20SourceSettings": {
    "Convert608To708": {},
    "Source608ChannelNumber": {}
  },
  "Scte27SourceSettings": {
    "OcrLanguage": {},
    "Pid": {}
  },
  "TeletextSourceSettings": {
    "OutputRectangle": {
      "Height": {},
      "LeftOffset": {},
      "TopOffset": {},
      "Width": {}
    },
    "PageNumber": {}
  }
}
```

Caption Selector Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AncillarySourceSettings|object|false|none|none|
|AribSourceSettings|object|false|none|none|
|DvbSubSourceSettings|object|false|none|none|
|EmbeddedSourceSettings|object|false|none|none|
|Scte20SourceSettings|object|false|none|none|
|Scte27SourceSettings|object|false|none|none|
|TeletextSourceSettings|object|false|none|none|

<h2 id="tocS_CaptionSelector">CaptionSelector</h2>
<!-- backwards compatibility -->
<a id="schemacaptionselector"></a>
<a id="schema_CaptionSelector"></a>
<a id="tocScaptionselector"></a>
<a id="tocscaptionselector"></a>

```json
{
  "LanguageCode": {},
  "Name": {},
  "SelectorSettings": {
    "AncillarySourceSettings": {
      "SourceAncillaryChannelNumber": {}
    },
    "AribSourceSettings": {},
    "DvbSubSourceSettings": {
      "OcrLanguage": {},
      "Pid": {}
    },
    "EmbeddedSourceSettings": {
      "Convert608To708": {},
      "Scte20Detection": {},
      "Source608ChannelNumber": {},
      "Source608TrackNumber": {}
    },
    "Scte20SourceSettings": {
      "Convert608To708": {},
      "Source608ChannelNumber": {}
    },
    "Scte27SourceSettings": {
      "OcrLanguage": {},
      "Pid": {}
    },
    "TeletextSourceSettings": {
      "OutputRectangle": {
        "Height": {},
        "LeftOffset": {},
        "TopOffset": {},
        "Width": {}
      },
      "PageNumber": {}
    }
  }
}
```

Caption Selector

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LanguageCode|object|false|none|none|
|Name|object|true|none|none|
|SelectorSettings|object|false|none|none|

<h2 id="tocS_DvbSubSourceSettings">DvbSubSourceSettings</h2>
<!-- backwards compatibility -->
<a id="schemadvbsubsourcesettings"></a>
<a id="schema_DvbSubSourceSettings"></a>
<a id="tocSdvbsubsourcesettings"></a>
<a id="tocsdvbsubsourcesettings"></a>

```json
{
  "OcrLanguage": {},
  "Pid": {}
}
```

Dvb Sub Source Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OcrLanguage|object|false|none|none|
|Pid|object|false|none|none|

<h2 id="tocS_EmbeddedSourceSettings">EmbeddedSourceSettings</h2>
<!-- backwards compatibility -->
<a id="schemaembeddedsourcesettings"></a>
<a id="schema_EmbeddedSourceSettings"></a>
<a id="tocSembeddedsourcesettings"></a>
<a id="tocsembeddedsourcesettings"></a>

```json
{
  "Convert608To708": {},
  "Scte20Detection": {},
  "Source608ChannelNumber": {},
  "Source608TrackNumber": {}
}
```

Embedded Source Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Convert608To708|object|false|none|none|
|Scte20Detection|object|false|none|none|
|Source608ChannelNumber|object|false|none|none|
|Source608TrackNumber|object|false|none|none|

<h2 id="tocS_Scte20SourceSettings">Scte20SourceSettings</h2>
<!-- backwards compatibility -->
<a id="schemascte20sourcesettings"></a>
<a id="schema_Scte20SourceSettings"></a>
<a id="tocSscte20sourcesettings"></a>
<a id="tocsscte20sourcesettings"></a>

```json
{
  "Convert608To708": {},
  "Source608ChannelNumber": {}
}
```

Scte20 Source Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Convert608To708|object|false|none|none|
|Source608ChannelNumber|object|false|none|none|

<h2 id="tocS_Scte27SourceSettings">Scte27SourceSettings</h2>
<!-- backwards compatibility -->
<a id="schemascte27sourcesettings"></a>
<a id="schema_Scte27SourceSettings"></a>
<a id="tocSscte27sourcesettings"></a>
<a id="tocsscte27sourcesettings"></a>

```json
{
  "OcrLanguage": {},
  "Pid": {}
}
```

Scte27 Source Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OcrLanguage|object|false|none|none|
|Pid|object|false|none|none|

<h2 id="tocS_TeletextSourceSettings">TeletextSourceSettings</h2>
<!-- backwards compatibility -->
<a id="schemateletextsourcesettings"></a>
<a id="schema_TeletextSourceSettings"></a>
<a id="tocSteletextsourcesettings"></a>
<a id="tocsteletextsourcesettings"></a>

```json
{
  "OutputRectangle": {
    "Height": {},
    "LeftOffset": {},
    "TopOffset": {},
    "Width": {}
  },
  "PageNumber": {}
}
```

Teletext Source Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OutputRectangle|object|false|none|none|
|PageNumber|object|false|none|none|

<h2 id="tocS_CdiInputSpecification">CdiInputSpecification</h2>
<!-- backwards compatibility -->
<a id="schemacdiinputspecification"></a>
<a id="schema_CdiInputSpecification"></a>
<a id="tocScdiinputspecification"></a>
<a id="tocscdiinputspecification"></a>

```json
{
  "Resolution": {}
}
```

Placeholder documentation for CdiInputSpecification

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Resolution|object|false|none|none|

<h2 id="tocS_ChannelClass">ChannelClass</h2>
<!-- backwards compatibility -->
<a id="schemachannelclass"></a>
<a id="schema_ChannelClass"></a>
<a id="tocSchannelclass"></a>
<a id="tocschannelclass"></a>

```json
"STANDARD"
```

A standard channel has two encoding pipelines and a single pipeline channel only has one.

<h2 id="tocS___listOfOutputDestination">__listOfOutputDestination</h2>
<!-- backwards compatibility -->
<a id="schema__listofoutputdestination"></a>
<a id="schema___listOfOutputDestination"></a>
<a id="tocS__listofoutputdestination"></a>
<a id="tocs__listofoutputdestination"></a>

```json
[
  {
    "Id": {},
    "MediaPackageSettings": {},
    "MultiplexSettings": {
      "MultiplexId": {},
      "ProgramName": {}
    },
    "Settings": {}
  }
]
```

Placeholder documentation for __listOfOutputDestination

<h2 id="tocS___listOfChannelEgressEndpoint">__listOfChannelEgressEndpoint</h2>
<!-- backwards compatibility -->
<a id="schema__listofchannelegressendpoint"></a>
<a id="schema___listOfChannelEgressEndpoint"></a>
<a id="tocS__listofchannelegressendpoint"></a>
<a id="tocs__listofchannelegressendpoint"></a>

```json
[
  {
    "SourceIp": {}
  }
]
```

Placeholder documentation for __listOfChannelEgressEndpoint

<h2 id="tocS_EncoderSettings">EncoderSettings</h2>
<!-- backwards compatibility -->
<a id="schemaencodersettings"></a>
<a id="schema_EncoderSettings"></a>
<a id="tocSencodersettings"></a>
<a id="tocsencodersettings"></a>

```json
{
  "AudioDescriptions": {},
  "AvailBlanking": {
    "AvailBlankingImage": {
      "PasswordParam": {},
      "Uri": {},
      "Username": {}
    },
    "State": {}
  },
  "AvailConfiguration": {
    "AvailSettings": {
      "Esam": {
        "AcquisitionPointId": {},
        "AdAvailOffset": {},
        "PasswordParam": {},
        "PoisEndpoint": {},
        "Username": {},
        "ZoneIdentity": {}
      },
      "Scte35SpliceInsert": {
        "AdAvailOffset": {},
        "NoRegionalBlackoutFlag": {},
        "WebDeliveryAllowedFlag": {}
      },
      "Scte35TimeSignalApos": {
        "AdAvailOffset": {},
        "NoRegionalBlackoutFlag": {},
        "WebDeliveryAllowedFlag": {}
      }
    }
  },
  "BlackoutSlate": {
    "BlackoutSlateImage": {
      "PasswordParam": {},
      "Uri": {},
      "Username": {}
    },
    "NetworkEndBlackout": {},
    "NetworkEndBlackoutImage": {
      "PasswordParam": {},
      "Uri": {},
      "Username": {}
    },
    "NetworkId": {},
    "State": {}
  },
  "CaptionDescriptions": {},
  "FeatureActivations": {
    "InputPrepareScheduleActions": {}
  },
  "GlobalConfiguration": {
    "InitialAudioGain": {},
    "InputEndAction": {},
    "InputLossBehavior": {
      "BlackFrameMsec": {},
      "InputLossImageColor": {},
      "InputLossImageSlate": {
        "PasswordParam": {},
        "Uri": {},
        "Username": {}
      },
      "InputLossImageType": {},
      "RepeatFrameMsec": {}
    },
    "OutputLockingMode": {},
    "OutputTimingSource": {},
    "SupportLowFramerateInputs": {}
  },
  "MotionGraphicsConfiguration": {
    "MotionGraphicsInsertion": {},
    "MotionGraphicsSettings": {
      "HtmlMotionGraphicsSettings": {}
    }
  },
  "NielsenConfiguration": {
    "DistributorId": {},
    "NielsenPcmToId3Tagging": {}
  },
  "OutputGroups": {},
  "TimecodeConfig": {
    "Source": {},
    "SyncThreshold": {}
  },
  "VideoDescriptions": {}
}
```

Encoder Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AudioDescriptions|object|true|none|none|
|AvailBlanking|object|false|none|none|
|AvailConfiguration|object|false|none|none|
|BlackoutSlate|object|false|none|none|
|CaptionDescriptions|object|false|none|none|
|FeatureActivations|object|false|none|none|
|GlobalConfiguration|object|false|none|none|
|MotionGraphicsConfiguration|object|false|none|none|
|NielsenConfiguration|object|false|none|none|
|OutputGroups|object|true|none|none|
|TimecodeConfig|object|true|none|none|
|VideoDescriptions|object|true|none|none|

<h2 id="tocS___listOfInputAttachment">__listOfInputAttachment</h2>
<!-- backwards compatibility -->
<a id="schema__listofinputattachment"></a>
<a id="schema___listOfInputAttachment"></a>
<a id="tocS__listofinputattachment"></a>
<a id="tocs__listofinputattachment"></a>

```json
[
  {
    "AutomaticInputFailoverSettings": {
      "ErrorClearTimeMsec": {},
      "FailoverConditions": {},
      "InputPreference": {},
      "SecondaryInputId": {}
    },
    "InputAttachmentName": {},
    "InputId": {},
    "InputSettings": {
      "AudioSelectors": {},
      "CaptionSelectors": {},
      "DeblockFilter": {},
      "DenoiseFilter": {},
      "FilterStrength": {},
      "InputFilter": {},
      "NetworkInputSettings": {
        "HlsInputSettings": {
          "Bandwidth": {},
          "BufferSegments": {},
          "Retries": {},
          "RetryInterval": {},
          "Scte35Source": {}
        },
        "ServerValidation": {}
      },
      "Scte35Pid": {},
      "Smpte2038DataPreference": {},
      "SourceEndBehavior": {},
      "VideoSelector": {
        "ColorSpace": {},
        "ColorSpaceSettings": {
          "Hdr10Settings": {
            "MaxCll": {},
            "MaxFall": {}
          }
        },
        "ColorSpaceUsage": {},
        "SelectorSettings": {
          "VideoSelectorPid": {
            "Pid": {}
          },
          "VideoSelectorProgramId": {
            "ProgramId": {}
          }
        }
      }
    }
  }
]
```

Placeholder documentation for __listOfInputAttachment

<h2 id="tocS_InputSpecification">InputSpecification</h2>
<!-- backwards compatibility -->
<a id="schemainputspecification"></a>
<a id="schema_InputSpecification"></a>
<a id="tocSinputspecification"></a>
<a id="tocsinputspecification"></a>

```json
{
  "Codec": {},
  "MaximumBitrate": {},
  "Resolution": {}
}
```

Placeholder documentation for InputSpecification

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Codec|object|false|none|none|
|MaximumBitrate|object|false|none|none|
|Resolution|object|false|none|none|

<h2 id="tocS_LogLevel">LogLevel</h2>
<!-- backwards compatibility -->
<a id="schemaloglevel"></a>
<a id="schema_LogLevel"></a>
<a id="tocSloglevel"></a>
<a id="tocsloglevel"></a>

```json
"ERROR"
```

The log level the user wants for their channel.

<h2 id="tocS_MaintenanceStatus">MaintenanceStatus</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancestatus"></a>
<a id="schema_MaintenanceStatus"></a>
<a id="tocSmaintenancestatus"></a>
<a id="tocsmaintenancestatus"></a>

```json
{
  "MaintenanceDay": {},
  "MaintenanceDeadline": {},
  "MaintenanceScheduledDate": {},
  "MaintenanceStartTime": {}
}
```

Placeholder documentation for MaintenanceStatus

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaintenanceDay|object|false|none|none|
|MaintenanceDeadline|object|false|none|none|
|MaintenanceScheduledDate|object|false|none|none|
|MaintenanceStartTime|object|false|none|none|

<h2 id="tocS___listOfPipelineDetail">__listOfPipelineDetail</h2>
<!-- backwards compatibility -->
<a id="schema__listofpipelinedetail"></a>
<a id="schema___listOfPipelineDetail"></a>
<a id="tocS__listofpipelinedetail"></a>
<a id="tocs__listofpipelinedetail"></a>

```json
[
  {
    "ActiveInputAttachmentName": {},
    "ActiveInputSwitchActionName": {},
    "ActiveMotionGraphicsActionName": {},
    "ActiveMotionGraphicsUri": {},
    "PipelineId": {}
  }
]
```

Placeholder documentation for __listOfPipelineDetail

<h2 id="tocS_ChannelState">ChannelState</h2>
<!-- backwards compatibility -->
<a id="schemachannelstate"></a>
<a id="schema_ChannelState"></a>
<a id="tocSchannelstate"></a>
<a id="tocschannelstate"></a>

```json
"CREATING"
```

Placeholder documentation for ChannelState

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

Placeholder documentation for Tags

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[__string](#schema__string)|false|none|Placeholder documentation for __string|

<h2 id="tocS_VpcOutputSettingsDescription">VpcOutputSettingsDescription</h2>
<!-- backwards compatibility -->
<a id="schemavpcoutputsettingsdescription"></a>
<a id="schema_VpcOutputSettingsDescription"></a>
<a id="tocSvpcoutputsettingsdescription"></a>
<a id="tocsvpcoutputsettingsdescription"></a>

```json
{
  "AvailabilityZones": {},
  "NetworkInterfaceIds": {},
  "SecurityGroupIds": {},
  "SubnetIds": {}
}
```

The properties for a private VPC Output

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AvailabilityZones|object|false|none|none|
|NetworkInterfaceIds|object|false|none|none|
|SecurityGroupIds|object|false|none|none|
|SubnetIds|object|false|none|none|

<h2 id="tocS_Channel">Channel</h2>
<!-- backwards compatibility -->
<a id="schemachannel"></a>
<a id="schema_Channel"></a>
<a id="tocSchannel"></a>
<a id="tocschannel"></a>

```json
{
  "Arn": {},
  "CdiInputSpecification": {
    "Resolution": {}
  },
  "ChannelClass": {},
  "Destinations": {},
  "EgressEndpoints": {},
  "EncoderSettings": {
    "AudioDescriptions": {},
    "AvailBlanking": {
      "AvailBlankingImage": {
        "PasswordParam": {},
        "Uri": {},
        "Username": {}
      },
      "State": {}
    },
    "AvailConfiguration": {
      "AvailSettings": {
        "Esam": {
          "AcquisitionPointId": {},
          "AdAvailOffset": {},
          "PasswordParam": {},
          "PoisEndpoint": {},
          "Username": {},
          "ZoneIdentity": {}
        },
        "Scte35SpliceInsert": {
          "AdAvailOffset": {},
          "NoRegionalBlackoutFlag": {},
          "WebDeliveryAllowedFlag": {}
        },
        "Scte35TimeSignalApos": {
          "AdAvailOffset": {},
          "NoRegionalBlackoutFlag": {},
          "WebDeliveryAllowedFlag": {}
        }
      }
    },
    "BlackoutSlate": {
      "BlackoutSlateImage": {
        "PasswordParam": {},
        "Uri": {},
        "Username": {}
      },
      "NetworkEndBlackout": {},
      "NetworkEndBlackoutImage": {
        "PasswordParam": {},
        "Uri": {},
        "Username": {}
      },
      "NetworkId": {},
      "State": {}
    },
    "CaptionDescriptions": {},
    "FeatureActivations": {
      "InputPrepareScheduleActions": {}
    },
    "GlobalConfiguration": {
      "InitialAudioGain": {},
      "InputEndAction": {},
      "InputLossBehavior": {
        "BlackFrameMsec": {},
        "InputLossImageColor": {},
        "InputLossImageSlate": {
          "PasswordParam": {},
          "Uri": {},
          "Username": {}
        },
        "InputLossImageType": {},
        "RepeatFrameMsec": {}
      },
      "OutputLockingMode": {},
      "OutputTimingSource": {},
      "SupportLowFramerateInputs": {}
    },
    "MotionGraphicsConfiguration": {
      "MotionGraphicsInsertion": {},
      "MotionGraphicsSettings": {
        "HtmlMotionGraphicsSettings": {}
      }
    },
    "NielsenConfiguration": {
      "DistributorId": {},
      "NielsenPcmToId3Tagging": {}
    },
    "OutputGroups": {},
    "TimecodeConfig": {
      "Source": {},
      "SyncThreshold": {}
    },
    "VideoDescriptions": {}
  },
  "Id": {},
  "InputAttachments": {},
  "InputSpecification": {
    "Codec": {},
    "MaximumBitrate": {},
    "Resolution": {}
  },
  "LogLevel": {},
  "Maintenance": {
    "MaintenanceDay": {},
    "MaintenanceDeadline": {},
    "MaintenanceScheduledDate": {},
    "MaintenanceStartTime": {}
  },
  "Name": {},
  "PipelineDetails": {},
  "PipelinesRunningCount": {},
  "RoleArn": {},
  "State": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Vpc": {
    "AvailabilityZones": {},
    "NetworkInterfaceIds": {},
    "SecurityGroupIds": {},
    "SubnetIds": {}
  }
}
```

Placeholder documentation for Channel

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CdiInputSpecification|object|false|none|none|
|ChannelClass|object|false|none|none|
|Destinations|object|false|none|none|
|EgressEndpoints|object|false|none|none|
|EncoderSettings|object|false|none|none|
|Id|object|false|none|none|
|InputAttachments|object|false|none|none|
|InputSpecification|object|false|none|none|
|LogLevel|object|false|none|none|
|Maintenance|object|false|none|none|
|Name|object|false|none|none|
|PipelineDetails|object|false|none|none|
|PipelinesRunningCount|object|false|none|none|
|RoleArn|object|false|none|none|
|State|object|false|none|none|
|Tags|object|false|none|none|
|Vpc|object|false|none|none|

<h2 id="tocS_ChannelEgressEndpoint">ChannelEgressEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemachannelegressendpoint"></a>
<a id="schema_ChannelEgressEndpoint"></a>
<a id="tocSchannelegressendpoint"></a>
<a id="tocschannelegressendpoint"></a>

```json
{
  "SourceIp": {}
}
```

Placeholder documentation for ChannelEgressEndpoint

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceIp|object|false|none|none|

<h2 id="tocS_ChannelSummary">ChannelSummary</h2>
<!-- backwards compatibility -->
<a id="schemachannelsummary"></a>
<a id="schema_ChannelSummary"></a>
<a id="tocSchannelsummary"></a>
<a id="tocschannelsummary"></a>

```json
{
  "Arn": {},
  "CdiInputSpecification": {
    "Resolution": {}
  },
  "ChannelClass": {},
  "Destinations": {},
  "EgressEndpoints": {},
  "Id": {},
  "InputAttachments": {},
  "InputSpecification": {
    "Codec": {},
    "MaximumBitrate": {},
    "Resolution": {}
  },
  "LogLevel": {},
  "Maintenance": {
    "MaintenanceDay": {},
    "MaintenanceDeadline": {},
    "MaintenanceScheduledDate": {},
    "MaintenanceStartTime": {}
  },
  "Name": {},
  "PipelinesRunningCount": {},
  "RoleArn": {},
  "State": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Vpc": {
    "AvailabilityZones": {},
    "NetworkInterfaceIds": {},
    "SecurityGroupIds": {},
    "SubnetIds": {}
  }
}
```

Placeholder documentation for ChannelSummary

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CdiInputSpecification|object|false|none|none|
|ChannelClass|object|false|none|none|
|Destinations|object|false|none|none|
|EgressEndpoints|object|false|none|none|
|Id|object|false|none|none|
|InputAttachments|object|false|none|none|
|InputSpecification|object|false|none|none|
|LogLevel|object|false|none|none|
|Maintenance|object|false|none|none|
|Name|object|false|none|none|
|PipelinesRunningCount|object|false|none|none|
|RoleArn|object|false|none|none|
|State|object|false|none|none|
|Tags|object|false|none|none|
|Vpc|object|false|none|none|

<h2 id="tocS_ClaimDeviceRequest">ClaimDeviceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaclaimdevicerequest"></a>
<a id="schema_ClaimDeviceRequest"></a>
<a id="tocSclaimdevicerequest"></a>
<a id="tocsclaimdevicerequest"></a>

```json
{
  "Id": {}
}
```

A request to claim an AWS Elemental device that you have purchased from a third-party vendor.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|

<h2 id="tocS_ColorSpacePassthroughSettings">ColorSpacePassthroughSettings</h2>
<!-- backwards compatibility -->
<a id="schemacolorspacepassthroughsettings"></a>
<a id="schema_ColorSpacePassthroughSettings"></a>
<a id="tocScolorspacepassthroughsettings"></a>
<a id="tocscolorspacepassthroughsettings"></a>

```json
{}
```

Passthrough applies no color space conversion to the output

<h2 id="tocS_MaintenanceCreateSettings">MaintenanceCreateSettings</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancecreatesettings"></a>
<a id="schema_MaintenanceCreateSettings"></a>
<a id="tocSmaintenancecreatesettings"></a>
<a id="tocsmaintenancecreatesettings"></a>

```json
{
  "MaintenanceDay": {},
  "MaintenanceStartTime": {}
}
```

Placeholder documentation for MaintenanceCreateSettings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaintenanceDay|object|false|none|none|
|MaintenanceStartTime|object|false|none|none|

<h2 id="tocS_VpcOutputSettings">VpcOutputSettings</h2>
<!-- backwards compatibility -->
<a id="schemavpcoutputsettings"></a>
<a id="schema_VpcOutputSettings"></a>
<a id="tocSvpcoutputsettings"></a>
<a id="tocsvpcoutputsettings"></a>

```json
{
  "PublicAddressAllocationIds": {},
  "SecurityGroupIds": {},
  "SubnetIds": {}
}
```

The properties for a private VPC Output
When this property is specified, the output egress addresses will be created in a user specified VPC

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PublicAddressAllocationIds|object|false|none|none|
|SecurityGroupIds|object|false|none|none|
|SubnetIds|object|true|none|none|

<h2 id="tocS_CreateChannelRequest">CreateChannelRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatechannelrequest"></a>
<a id="schema_CreateChannelRequest"></a>
<a id="tocScreatechannelrequest"></a>
<a id="tocscreatechannelrequest"></a>

```json
{
  "CdiInputSpecification": {
    "Resolution": {}
  },
  "ChannelClass": {},
  "Destinations": {},
  "EncoderSettings": {
    "AudioDescriptions": {},
    "AvailBlanking": {
      "AvailBlankingImage": {
        "PasswordParam": {},
        "Uri": {},
        "Username": {}
      },
      "State": {}
    },
    "AvailConfiguration": {
      "AvailSettings": {
        "Esam": {
          "AcquisitionPointId": {},
          "AdAvailOffset": {},
          "PasswordParam": {},
          "PoisEndpoint": {},
          "Username": {},
          "ZoneIdentity": {}
        },
        "Scte35SpliceInsert": {
          "AdAvailOffset": {},
          "NoRegionalBlackoutFlag": {},
          "WebDeliveryAllowedFlag": {}
        },
        "Scte35TimeSignalApos": {
          "AdAvailOffset": {},
          "NoRegionalBlackoutFlag": {},
          "WebDeliveryAllowedFlag": {}
        }
      }
    },
    "BlackoutSlate": {
      "BlackoutSlateImage": {
        "PasswordParam": {},
        "Uri": {},
        "Username": {}
      },
      "NetworkEndBlackout": {},
      "NetworkEndBlackoutImage": {
        "PasswordParam": {},
        "Uri": {},
        "Username": {}
      },
      "NetworkId": {},
      "State": {}
    },
    "CaptionDescriptions": {},
    "FeatureActivations": {
      "InputPrepareScheduleActions": {}
    },
    "GlobalConfiguration": {
      "InitialAudioGain": {},
      "InputEndAction": {},
      "InputLossBehavior": {
        "BlackFrameMsec": {},
        "InputLossImageColor": {},
        "InputLossImageSlate": {
          "PasswordParam": {},
          "Uri": {},
          "Username": {}
        },
        "InputLossImageType": {},
        "RepeatFrameMsec": {}
      },
      "OutputLockingMode": {},
      "OutputTimingSource": {},
      "SupportLowFramerateInputs": {}
    },
    "MotionGraphicsConfiguration": {
      "MotionGraphicsInsertion": {},
      "MotionGraphicsSettings": {
        "HtmlMotionGraphicsSettings": {}
      }
    },
    "NielsenConfiguration": {
      "DistributorId": {},
      "NielsenPcmToId3Tagging": {}
    },
    "OutputGroups": {},
    "TimecodeConfig": {
      "Source": {},
      "SyncThreshold": {}
    },
    "VideoDescriptions": {}
  },
  "InputAttachments": {},
  "InputSpecification": {
    "Codec": {},
    "MaximumBitrate": {},
    "Resolution": {}
  },
  "LogLevel": {},
  "Maintenance": {
    "MaintenanceDay": {},
    "MaintenanceStartTime": {}
  },
  "Name": {},
  "RequestId": {},
  "Reserved": {},
  "RoleArn": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Vpc": {
    "PublicAddressAllocationIds": {},
    "SecurityGroupIds": {},
    "SubnetIds": {}
  }
}
```

A request to create a channel

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CdiInputSpecification|object|false|none|none|
|ChannelClass|object|false|none|none|
|Destinations|object|false|none|none|
|EncoderSettings|object|false|none|none|
|InputAttachments|object|false|none|none|
|InputSpecification|object|false|none|none|
|LogLevel|object|false|none|none|
|Maintenance|object|false|none|none|
|Name|object|false|none|none|
|RequestId|object|false|none|none|
|Reserved|object|false|none|none|
|RoleArn|object|false|none|none|
|Tags|object|false|none|none|
|Vpc|object|false|none|none|

<h2 id="tocS___listOfInputDestinationRequest">__listOfInputDestinationRequest</h2>
<!-- backwards compatibility -->
<a id="schema__listofinputdestinationrequest"></a>
<a id="schema___listOfInputDestinationRequest"></a>
<a id="tocS__listofinputdestinationrequest"></a>
<a id="tocs__listofinputdestinationrequest"></a>

```json
[
  {
    "StreamName": {}
  }
]
```

Placeholder documentation for __listOfInputDestinationRequest

<h2 id="tocS___listOfInputDeviceSettings">__listOfInputDeviceSettings</h2>
<!-- backwards compatibility -->
<a id="schema__listofinputdevicesettings"></a>
<a id="schema___listOfInputDeviceSettings"></a>
<a id="tocS__listofinputdevicesettings"></a>
<a id="tocs__listofinputdevicesettings"></a>

```json
[
  {
    "Id": {}
  }
]
```

Placeholder documentation for __listOfInputDeviceSettings

<h2 id="tocS___listOfMediaConnectFlowRequest">__listOfMediaConnectFlowRequest</h2>
<!-- backwards compatibility -->
<a id="schema__listofmediaconnectflowrequest"></a>
<a id="schema___listOfMediaConnectFlowRequest"></a>
<a id="tocS__listofmediaconnectflowrequest"></a>
<a id="tocs__listofmediaconnectflowrequest"></a>

```json
[
  {
    "FlowArn": {}
  }
]
```

Placeholder documentation for __listOfMediaConnectFlowRequest

<h2 id="tocS___listOfInputSourceRequest">__listOfInputSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schema__listofinputsourcerequest"></a>
<a id="schema___listOfInputSourceRequest"></a>
<a id="tocS__listofinputsourcerequest"></a>
<a id="tocs__listofinputsourcerequest"></a>

```json
[
  {
    "PasswordParam": {},
    "Url": {},
    "Username": {}
  }
]
```

Placeholder documentation for __listOfInputSourceRequest

<h2 id="tocS_InputType">InputType</h2>
<!-- backwards compatibility -->
<a id="schemainputtype"></a>
<a id="schema_InputType"></a>
<a id="tocSinputtype"></a>
<a id="tocsinputtype"></a>

```json
"UDP_PUSH"
```

The different types of inputs that AWS Elemental MediaLive supports.

<h2 id="tocS_InputVpcRequest">InputVpcRequest</h2>
<!-- backwards compatibility -->
<a id="schemainputvpcrequest"></a>
<a id="schema_InputVpcRequest"></a>
<a id="tocSinputvpcrequest"></a>
<a id="tocsinputvpcrequest"></a>

```json
{
  "SecurityGroupIds": {},
  "SubnetIds": {}
}
```

Settings for a private VPC Input.
When this property is specified, the input destination addresses will be created in a VPC rather than with public Internet addresses.
This property requires setting the roleArn property on Input creation.
Not compatible with the inputSecurityGroups property.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SecurityGroupIds|object|false|none|none|
|SubnetIds|object|true|none|none|

<h2 id="tocS_CreateInputRequest">CreateInputRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateinputrequest"></a>
<a id="schema_CreateInputRequest"></a>
<a id="tocScreateinputrequest"></a>
<a id="tocscreateinputrequest"></a>

```json
{
  "Destinations": {},
  "InputDevices": {},
  "InputSecurityGroups": {},
  "MediaConnectFlows": {},
  "Name": {},
  "RequestId": {},
  "RoleArn": {},
  "Sources": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Type": {},
  "Vpc": {
    "SecurityGroupIds": {},
    "SubnetIds": {}
  }
}
```

The name of the input

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Destinations|object|false|none|none|
|InputDevices|object|false|none|none|
|InputSecurityGroups|object|false|none|none|
|MediaConnectFlows|object|false|none|none|
|Name|object|false|none|none|
|RequestId|object|false|none|none|
|RoleArn|object|false|none|none|
|Sources|object|false|none|none|
|Tags|object|false|none|none|
|Type|object|false|none|none|
|Vpc|object|false|none|none|

<h2 id="tocS_Input">Input</h2>
<!-- backwards compatibility -->
<a id="schemainput"></a>
<a id="schema_Input"></a>
<a id="tocSinput"></a>
<a id="tocsinput"></a>

```json
{
  "Arn": {},
  "AttachedChannels": {},
  "Destinations": {},
  "Id": {},
  "InputClass": {},
  "InputDevices": {},
  "InputPartnerIds": {},
  "InputSourceType": {},
  "MediaConnectFlows": {},
  "Name": {},
  "RoleArn": {},
  "SecurityGroups": {},
  "Sources": {},
  "State": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Type": {}
}
```

Placeholder documentation for Input

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|AttachedChannels|object|false|none|none|
|Destinations|object|false|none|none|
|Id|object|false|none|none|
|InputClass|object|false|none|none|
|InputDevices|object|false|none|none|
|InputPartnerIds|object|false|none|none|
|InputSourceType|object|false|none|none|
|MediaConnectFlows|object|false|none|none|
|Name|object|false|none|none|
|RoleArn|object|false|none|none|
|SecurityGroups|object|false|none|none|
|Sources|object|false|none|none|
|State|object|false|none|none|
|Tags|object|false|none|none|
|Type|object|false|none|none|

<h2 id="tocS___listOfInputWhitelistRuleCidr">__listOfInputWhitelistRuleCidr</h2>
<!-- backwards compatibility -->
<a id="schema__listofinputwhitelistrulecidr"></a>
<a id="schema___listOfInputWhitelistRuleCidr"></a>
<a id="tocS__listofinputwhitelistrulecidr"></a>
<a id="tocs__listofinputwhitelistrulecidr"></a>

```json
[
  {
    "Cidr": {}
  }
]
```

Placeholder documentation for __listOfInputWhitelistRuleCidr

<h2 id="tocS_CreateInputSecurityGroupRequest">CreateInputSecurityGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateinputsecuritygrouprequest"></a>
<a id="schema_CreateInputSecurityGroupRequest"></a>
<a id="tocScreateinputsecuritygrouprequest"></a>
<a id="tocscreateinputsecuritygrouprequest"></a>

```json
{
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "WhitelistRules": {}
}
```

The IPv4 CIDRs to whitelist for this Input Security Group

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|
|WhitelistRules|object|false|none|none|

<h2 id="tocS_InputSecurityGroup">InputSecurityGroup</h2>
<!-- backwards compatibility -->
<a id="schemainputsecuritygroup"></a>
<a id="schema_InputSecurityGroup"></a>
<a id="tocSinputsecuritygroup"></a>
<a id="tocsinputsecuritygroup"></a>

```json
{
  "Arn": {},
  "Id": {},
  "Inputs": {},
  "State": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "WhitelistRules": {}
}
```

An Input Security Group

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Id|object|false|none|none|
|Inputs|object|false|none|none|
|State|object|false|none|none|
|Tags|object|false|none|none|
|WhitelistRules|object|false|none|none|

<h2 id="tocS_MultiplexProgramSettings">MultiplexProgramSettings</h2>
<!-- backwards compatibility -->
<a id="schemamultiplexprogramsettings"></a>
<a id="schema_MultiplexProgramSettings"></a>
<a id="tocSmultiplexprogramsettings"></a>
<a id="tocsmultiplexprogramsettings"></a>

```json
{
  "PreferredChannelPipeline": {},
  "ProgramNumber": {},
  "ServiceDescriptor": {
    "ProviderName": {},
    "ServiceName": {}
  },
  "VideoSettings": {
    "ConstantBitrate": {},
    "StatmuxSettings": {
      "MaximumBitrate": {},
      "MinimumBitrate": {},
      "Priority": {}
    }
  }
}
```

Multiplex Program settings configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PreferredChannelPipeline|object|false|none|none|
|ProgramNumber|object|true|none|none|
|ServiceDescriptor|object|false|none|none|
|VideoSettings|object|false|none|none|

<h2 id="tocS_CreateMultiplexProgramRequest">CreateMultiplexProgramRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatemultiplexprogramrequest"></a>
<a id="schema_CreateMultiplexProgramRequest"></a>
<a id="tocScreatemultiplexprogramrequest"></a>
<a id="tocscreatemultiplexprogramrequest"></a>

```json
{
  "MultiplexProgramSettings": {
    "PreferredChannelPipeline": {},
    "ProgramNumber": {},
    "ServiceDescriptor": {
      "ProviderName": {},
      "ServiceName": {}
    },
    "VideoSettings": {
      "ConstantBitrate": {},
      "StatmuxSettings": {
        "MaximumBitrate": {},
        "MinimumBitrate": {},
        "Priority": {}
      }
    }
  },
  "ProgramName": {},
  "RequestId": {}
}
```

A request to create a program in a multiplex.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MultiplexProgramSettings|object|true|none|none|
|ProgramName|object|true|none|none|
|RequestId|object|true|none|none|

<h2 id="tocS_MultiplexProgram">MultiplexProgram</h2>
<!-- backwards compatibility -->
<a id="schemamultiplexprogram"></a>
<a id="schema_MultiplexProgram"></a>
<a id="tocSmultiplexprogram"></a>
<a id="tocsmultiplexprogram"></a>

```json
{
  "ChannelId": {},
  "MultiplexProgramSettings": {
    "PreferredChannelPipeline": {},
    "ProgramNumber": {},
    "ServiceDescriptor": {
      "ProviderName": {},
      "ServiceName": {}
    },
    "VideoSettings": {
      "ConstantBitrate": {},
      "StatmuxSettings": {
        "MaximumBitrate": {},
        "MinimumBitrate": {},
        "Priority": {}
      }
    }
  },
  "PacketIdentifiersMap": {
    "AudioPids": {},
    "DvbSubPids": {},
    "DvbTeletextPid": {},
    "EtvPlatformPid": {},
    "EtvSignalPid": {},
    "KlvDataPids": {},
    "PcrPid": {},
    "PmtPid": {},
    "PrivateMetadataPid": {},
    "Scte27Pids": {},
    "Scte35Pid": {},
    "TimedMetadataPid": {},
    "VideoPid": {}
  },
  "PipelineDetails": {},
  "ProgramName": {}
}
```

The multiplex program object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelId|object|false|none|none|
|MultiplexProgramSettings|object|false|none|none|
|PacketIdentifiersMap|object|false|none|none|
|PipelineDetails|object|false|none|none|
|ProgramName|object|false|none|none|

<h2 id="tocS_MultiplexSettings">MultiplexSettings</h2>
<!-- backwards compatibility -->
<a id="schemamultiplexsettings"></a>
<a id="schema_MultiplexSettings"></a>
<a id="tocSmultiplexsettings"></a>
<a id="tocsmultiplexsettings"></a>

```json
{
  "MaximumVideoBufferDelayMilliseconds": {},
  "TransportStreamBitrate": {},
  "TransportStreamId": {},
  "TransportStreamReservedBitrate": {}
}
```

Contains configuration for a Multiplex event

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaximumVideoBufferDelayMilliseconds|object|false|none|none|
|TransportStreamBitrate|object|true|none|none|
|TransportStreamId|object|true|none|none|
|TransportStreamReservedBitrate|object|false|none|none|

<h2 id="tocS_CreateMultiplexRequest">CreateMultiplexRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatemultiplexrequest"></a>
<a id="schema_CreateMultiplexRequest"></a>
<a id="tocScreatemultiplexrequest"></a>
<a id="tocscreatemultiplexrequest"></a>

```json
{
  "AvailabilityZones": {},
  "MultiplexSettings": {
    "MaximumVideoBufferDelayMilliseconds": {},
    "TransportStreamBitrate": {},
    "TransportStreamId": {},
    "TransportStreamReservedBitrate": {}
  },
  "Name": {},
  "RequestId": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

A request to create a multiplex.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AvailabilityZones|object|true|none|none|
|MultiplexSettings|object|true|none|none|
|Name|object|true|none|none|
|RequestId|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_Multiplex">Multiplex</h2>
<!-- backwards compatibility -->
<a id="schemamultiplex"></a>
<a id="schema_Multiplex"></a>
<a id="tocSmultiplex"></a>
<a id="tocsmultiplex"></a>

```json
{
  "Arn": {},
  "AvailabilityZones": {},
  "Destinations": {},
  "Id": {},
  "MultiplexSettings": {
    "MaximumVideoBufferDelayMilliseconds": {},
    "TransportStreamBitrate": {},
    "TransportStreamId": {},
    "TransportStreamReservedBitrate": {}
  },
  "Name": {},
  "PipelinesRunningCount": {},
  "ProgramCount": {},
  "State": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

The multiplex object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|AvailabilityZones|object|false|none|none|
|Destinations|object|false|none|none|
|Id|object|false|none|none|
|MultiplexSettings|object|false|none|none|
|Name|object|false|none|none|
|PipelinesRunningCount|object|false|none|none|
|ProgramCount|object|false|none|none|
|State|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreatePartnerInputRequest">CreatePartnerInputRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatepartnerinputrequest"></a>
<a id="schema_CreatePartnerInputRequest"></a>
<a id="tocScreatepartnerinputrequest"></a>
<a id="tocscreatepartnerinputrequest"></a>

```json
{
  "RequestId": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

A request to create a partner input

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RequestId|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateTagsRequest">CreateTagsRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatetagsrequest"></a>
<a id="schema_CreateTagsRequest"></a>
<a id="tocScreatetagsrequest"></a>
<a id="tocscreatetagsrequest"></a>

```json
{
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Placeholder documentation for CreateTagsRequest

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|

<h2 id="tocS_DeleteChannelRequest">DeleteChannelRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletechannelrequest"></a>
<a id="schema_DeleteChannelRequest"></a>
<a id="tocSdeletechannelrequest"></a>
<a id="tocsdeletechannelrequest"></a>

```json
{}
```

Placeholder documentation for DeleteChannelRequest

<h2 id="tocS_DeleteInputRequest">DeleteInputRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteinputrequest"></a>
<a id="schema_DeleteInputRequest"></a>
<a id="tocSdeleteinputrequest"></a>
<a id="tocsdeleteinputrequest"></a>

```json
{}
```

Placeholder documentation for DeleteInputRequest

<h2 id="tocS_DeleteInputSecurityGroupRequest">DeleteInputSecurityGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteinputsecuritygrouprequest"></a>
<a id="schema_DeleteInputSecurityGroupRequest"></a>
<a id="tocSdeleteinputsecuritygrouprequest"></a>
<a id="tocsdeleteinputsecuritygrouprequest"></a>

```json
{}
```

Placeholder documentation for DeleteInputSecurityGroupRequest

<h2 id="tocS_DeleteMultiplexProgramRequest">DeleteMultiplexProgramRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletemultiplexprogramrequest"></a>
<a id="schema_DeleteMultiplexProgramRequest"></a>
<a id="tocSdeletemultiplexprogramrequest"></a>
<a id="tocsdeletemultiplexprogramrequest"></a>

```json
{}
```

Placeholder documentation for DeleteMultiplexProgramRequest

<h2 id="tocS_MultiplexProgramPacketIdentifiersMap">MultiplexProgramPacketIdentifiersMap</h2>
<!-- backwards compatibility -->
<a id="schemamultiplexprogrampacketidentifiersmap"></a>
<a id="schema_MultiplexProgramPacketIdentifiersMap"></a>
<a id="tocSmultiplexprogrampacketidentifiersmap"></a>
<a id="tocsmultiplexprogrampacketidentifiersmap"></a>

```json
{
  "AudioPids": {},
  "DvbSubPids": {},
  "DvbTeletextPid": {},
  "EtvPlatformPid": {},
  "EtvSignalPid": {},
  "KlvDataPids": {},
  "PcrPid": {},
  "PmtPid": {},
  "PrivateMetadataPid": {},
  "Scte27Pids": {},
  "Scte35Pid": {},
  "TimedMetadataPid": {},
  "VideoPid": {}
}
```

Packet identifiers map for a given Multiplex program.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AudioPids|object|false|none|none|
|DvbSubPids|object|false|none|none|
|DvbTeletextPid|object|false|none|none|
|EtvPlatformPid|object|false|none|none|
|EtvSignalPid|object|false|none|none|
|KlvDataPids|object|false|none|none|
|PcrPid|object|false|none|none|
|PmtPid|object|false|none|none|
|PrivateMetadataPid|object|false|none|none|
|Scte27Pids|object|false|none|none|
|Scte35Pid|object|false|none|none|
|TimedMetadataPid|object|false|none|none|
|VideoPid|object|false|none|none|

<h2 id="tocS___listOfMultiplexProgramPipelineDetail">__listOfMultiplexProgramPipelineDetail</h2>
<!-- backwards compatibility -->
<a id="schema__listofmultiplexprogrampipelinedetail"></a>
<a id="schema___listOfMultiplexProgramPipelineDetail"></a>
<a id="tocS__listofmultiplexprogrampipelinedetail"></a>
<a id="tocs__listofmultiplexprogrampipelinedetail"></a>

```json
[
  {
    "ActiveChannelPipeline": {},
    "PipelineId": {}
  }
]
```

Placeholder documentation for __listOfMultiplexProgramPipelineDetail

<h2 id="tocS_DeleteMultiplexRequest">DeleteMultiplexRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletemultiplexrequest"></a>
<a id="schema_DeleteMultiplexRequest"></a>
<a id="tocSdeletemultiplexrequest"></a>
<a id="tocsdeletemultiplexrequest"></a>

```json
{}
```

Placeholder documentation for DeleteMultiplexRequest

<h2 id="tocS___listOfMultiplexOutputDestination">__listOfMultiplexOutputDestination</h2>
<!-- backwards compatibility -->
<a id="schema__listofmultiplexoutputdestination"></a>
<a id="schema___listOfMultiplexOutputDestination"></a>
<a id="tocS__listofmultiplexoutputdestination"></a>
<a id="tocs__listofmultiplexoutputdestination"></a>

```json
[
  {
    "MediaConnectSettings": {
      "EntitlementArn": {}
    }
  }
]
```

Placeholder documentation for __listOfMultiplexOutputDestination

<h2 id="tocS_MultiplexState">MultiplexState</h2>
<!-- backwards compatibility -->
<a id="schemamultiplexstate"></a>
<a id="schema_MultiplexState"></a>
<a id="tocSmultiplexstate"></a>
<a id="tocsmultiplexstate"></a>

```json
"CREATING"
```

The current state of the multiplex.

<h2 id="tocS_DeleteReservationRequest">DeleteReservationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletereservationrequest"></a>
<a id="schema_DeleteReservationRequest"></a>
<a id="tocSdeletereservationrequest"></a>
<a id="tocsdeletereservationrequest"></a>

```json
{}
```

Placeholder documentation for DeleteReservationRequest

<h2 id="tocS_OfferingDurationUnits">OfferingDurationUnits</h2>
<!-- backwards compatibility -->
<a id="schemaofferingdurationunits"></a>
<a id="schema_OfferingDurationUnits"></a>
<a id="tocSofferingdurationunits"></a>
<a id="tocsofferingdurationunits"></a>

```json
"MONTHS"
```

Units for duration, e.g. 'MONTHS'

<h2 id="tocS_OfferingType">OfferingType</h2>
<!-- backwards compatibility -->
<a id="schemaofferingtype"></a>
<a id="schema_OfferingType"></a>
<a id="tocSofferingtype"></a>
<a id="tocsofferingtype"></a>

```json
"NO_UPFRONT"
```

Offering type, e.g. 'NO_UPFRONT'

<h2 id="tocS_RenewalSettings">RenewalSettings</h2>
<!-- backwards compatibility -->
<a id="schemarenewalsettings"></a>
<a id="schema_RenewalSettings"></a>
<a id="tocSrenewalsettings"></a>
<a id="tocsrenewalsettings"></a>

```json
{
  "AutomaticRenewal": {},
  "RenewalCount": {}
}
```

The Renewal settings for Reservations

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutomaticRenewal|object|false|none|none|
|RenewalCount|object|false|none|none|

<h2 id="tocS_ReservationResourceSpecification">ReservationResourceSpecification</h2>
<!-- backwards compatibility -->
<a id="schemareservationresourcespecification"></a>
<a id="schema_ReservationResourceSpecification"></a>
<a id="tocSreservationresourcespecification"></a>
<a id="tocsreservationresourcespecification"></a>

```json
{
  "ChannelClass": {},
  "Codec": {},
  "MaximumBitrate": {},
  "MaximumFramerate": {},
  "Resolution": {},
  "ResourceType": {},
  "SpecialFeature": {},
  "VideoQuality": {}
}
```

Resource configuration (codec, resolution, bitrate, ...)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelClass|object|false|none|none|
|Codec|object|false|none|none|
|MaximumBitrate|object|false|none|none|
|MaximumFramerate|object|false|none|none|
|Resolution|object|false|none|none|
|ResourceType|object|false|none|none|
|SpecialFeature|object|false|none|none|
|VideoQuality|object|false|none|none|

<h2 id="tocS_ReservationState">ReservationState</h2>
<!-- backwards compatibility -->
<a id="schemareservationstate"></a>
<a id="schema_ReservationState"></a>
<a id="tocSreservationstate"></a>
<a id="tocsreservationstate"></a>

```json
"ACTIVE"
```

Current reservation state

<h2 id="tocS_DeleteScheduleRequest">DeleteScheduleRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteschedulerequest"></a>
<a id="schema_DeleteScheduleRequest"></a>
<a id="tocSdeleteschedulerequest"></a>
<a id="tocsdeleteschedulerequest"></a>

```json
{}
```

Placeholder documentation for DeleteScheduleRequest

<h2 id="tocS_DeleteTagsRequest">DeleteTagsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletetagsrequest"></a>
<a id="schema_DeleteTagsRequest"></a>
<a id="tocSdeletetagsrequest"></a>
<a id="tocsdeletetagsrequest"></a>

```json
{}
```

Placeholder documentation for DeleteTagsRequest

<h2 id="tocS_DescribeChannelRequest">DescribeChannelRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribechannelrequest"></a>
<a id="schema_DescribeChannelRequest"></a>
<a id="tocSdescribechannelrequest"></a>
<a id="tocsdescribechannelrequest"></a>

```json
{}
```

Placeholder documentation for DescribeChannelRequest

<h2 id="tocS_DescribeInputDeviceRequest">DescribeInputDeviceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeinputdevicerequest"></a>
<a id="schema_DescribeInputDeviceRequest"></a>
<a id="tocSdescribeinputdevicerequest"></a>
<a id="tocsdescribeinputdevicerequest"></a>

```json
{}
```

Placeholder documentation for DescribeInputDeviceRequest

<h2 id="tocS_InputDeviceConnectionState">InputDeviceConnectionState</h2>
<!-- backwards compatibility -->
<a id="schemainputdeviceconnectionstate"></a>
<a id="schema_InputDeviceConnectionState"></a>
<a id="tocSinputdeviceconnectionstate"></a>
<a id="tocsinputdeviceconnectionstate"></a>

```json
"DISCONNECTED"
```

The state of the connection between the input device and AWS.

<h2 id="tocS_DeviceSettingsSyncState">DeviceSettingsSyncState</h2>
<!-- backwards compatibility -->
<a id="schemadevicesettingssyncstate"></a>
<a id="schema_DeviceSettingsSyncState"></a>
<a id="tocSdevicesettingssyncstate"></a>
<a id="tocsdevicesettingssyncstate"></a>

```json
"SYNCED"
```

The status of the action to synchronize the device configuration. If you change the configuration of the input device (for example, the maximum bitrate), MediaLive sends the new data to the device. The device might not update itself immediately. SYNCED means the device has updated its configuration. SYNCING means that it has not updated its configuration.

<h2 id="tocS_DeviceUpdateStatus">DeviceUpdateStatus</h2>
<!-- backwards compatibility -->
<a id="schemadeviceupdatestatus"></a>
<a id="schema_DeviceUpdateStatus"></a>
<a id="tocSdeviceupdatestatus"></a>
<a id="tocsdeviceupdatestatus"></a>

```json
"UP_TO_DATE"
```

The status of software on the input device.

<h2 id="tocS_InputDeviceHdSettings">InputDeviceHdSettings</h2>
<!-- backwards compatibility -->
<a id="schemainputdevicehdsettings"></a>
<a id="schema_InputDeviceHdSettings"></a>
<a id="tocSinputdevicehdsettings"></a>
<a id="tocsinputdevicehdsettings"></a>

```json
{
  "ActiveInput": {},
  "ConfiguredInput": {},
  "DeviceState": {},
  "Framerate": {},
  "Height": {},
  "MaxBitrate": {},
  "ScanType": {},
  "Width": {},
  "LatencyMs": {}
}
```

Settings that describe the active source from the input device, and the video characteristics of that source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActiveInput|object|false|none|none|
|ConfiguredInput|object|false|none|none|
|DeviceState|object|false|none|none|
|Framerate|object|false|none|none|
|Height|object|false|none|none|
|MaxBitrate|object|false|none|none|
|ScanType|object|false|none|none|
|Width|object|false|none|none|
|LatencyMs|object|false|none|none|

<h2 id="tocS_InputDeviceNetworkSettings">InputDeviceNetworkSettings</h2>
<!-- backwards compatibility -->
<a id="schemainputdevicenetworksettings"></a>
<a id="schema_InputDeviceNetworkSettings"></a>
<a id="tocSinputdevicenetworksettings"></a>
<a id="tocsinputdevicenetworksettings"></a>

```json
{
  "DnsAddresses": {},
  "Gateway": {},
  "IpAddress": {},
  "IpScheme": {},
  "SubnetMask": {}
}
```

The network settings for the input device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DnsAddresses|object|false|none|none|
|Gateway|object|false|none|none|
|IpAddress|object|false|none|none|
|IpScheme|object|false|none|none|
|SubnetMask|object|false|none|none|

<h2 id="tocS_InputDeviceType">InputDeviceType</h2>
<!-- backwards compatibility -->
<a id="schemainputdevicetype"></a>
<a id="schema_InputDeviceType"></a>
<a id="tocSinputdevicetype"></a>
<a id="tocsinputdevicetype"></a>

```json
"HD"
```

The type of the input device. For an AWS Elemental Link device that outputs resolutions up to 1080, choose "HD".

<h2 id="tocS_InputDeviceUhdSettings">InputDeviceUhdSettings</h2>
<!-- backwards compatibility -->
<a id="schemainputdeviceuhdsettings"></a>
<a id="schema_InputDeviceUhdSettings"></a>
<a id="tocSinputdeviceuhdsettings"></a>
<a id="tocsinputdeviceuhdsettings"></a>

```json
{
  "ActiveInput": {},
  "ConfiguredInput": {},
  "DeviceState": {},
  "Framerate": {},
  "Height": {},
  "MaxBitrate": {},
  "ScanType": {},
  "Width": {},
  "LatencyMs": {}
}
```

Settings that describe the active source from the input device, and the video characteristics of that source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActiveInput|object|false|none|none|
|ConfiguredInput|object|false|none|none|
|DeviceState|object|false|none|none|
|Framerate|object|false|none|none|
|Height|object|false|none|none|
|MaxBitrate|object|false|none|none|
|ScanType|object|false|none|none|
|Width|object|false|none|none|
|LatencyMs|object|false|none|none|

<h2 id="tocS_AcceptHeader">AcceptHeader</h2>
<!-- backwards compatibility -->
<a id="schemaacceptheader"></a>
<a id="schema_AcceptHeader"></a>
<a id="tocSacceptheader"></a>
<a id="tocsacceptheader"></a>

```json
"image/jpeg"
```

The HTTP Accept header. Indicates the requested type fothe thumbnail.

<h2 id="tocS_DescribeInputDeviceThumbnailRequest">DescribeInputDeviceThumbnailRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeinputdevicethumbnailrequest"></a>
<a id="schema_DescribeInputDeviceThumbnailRequest"></a>
<a id="tocSdescribeinputdevicethumbnailrequest"></a>
<a id="tocsdescribeinputdevicethumbnailrequest"></a>

```json
{}
```

Placeholder documentation for DescribeInputDeviceThumbnailRequest

<h2 id="tocS_InputDeviceThumbnail">InputDeviceThumbnail</h2>
<!-- backwards compatibility -->
<a id="schemainputdevicethumbnail"></a>
<a id="schema_InputDeviceThumbnail"></a>
<a id="tocSinputdevicethumbnail"></a>
<a id="tocsinputdevicethumbnail"></a>

```json
"string"
```

The binary data for the thumbnail that the Link device has most recently sent to MediaLive.

<h2 id="tocS_ContentType">ContentType</h2>
<!-- backwards compatibility -->
<a id="schemacontenttype"></a>
<a id="schema_ContentType"></a>
<a id="tocScontenttype"></a>
<a id="tocscontenttype"></a>

```json
"image/jpeg"
```

Specifies the media type of the thumbnail.

<h2 id="tocS___long">__long</h2>
<!-- backwards compatibility -->
<a id="schema__long"></a>
<a id="schema___long"></a>
<a id="tocS__long"></a>
<a id="tocs__long"></a>

```json
0
```

Placeholder documentation for __long

<h2 id="tocS___timestamp">__timestamp</h2>
<!-- backwards compatibility -->
<a id="schema__timestamp"></a>
<a id="schema___timestamp"></a>
<a id="tocS__timestamp"></a>
<a id="tocs__timestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

Placeholder documentation for __timestamp

<h2 id="tocS_DescribeInputRequest">DescribeInputRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeinputrequest"></a>
<a id="schema_DescribeInputRequest"></a>
<a id="tocSdescribeinputrequest"></a>
<a id="tocsdescribeinputrequest"></a>

```json
{}
```

Placeholder documentation for DescribeInputRequest

<h2 id="tocS___listOfInputDestination">__listOfInputDestination</h2>
<!-- backwards compatibility -->
<a id="schema__listofinputdestination"></a>
<a id="schema___listOfInputDestination"></a>
<a id="tocS__listofinputdestination"></a>
<a id="tocs__listofinputdestination"></a>

```json
[
  {
    "Ip": {},
    "Port": {},
    "Url": {},
    "Vpc": {
      "AvailabilityZone": {},
      "NetworkInterfaceId": {}
    }
  }
]
```

Placeholder documentation for __listOfInputDestination

<h2 id="tocS_InputClass">InputClass</h2>
<!-- backwards compatibility -->
<a id="schemainputclass"></a>
<a id="schema_InputClass"></a>
<a id="tocSinputclass"></a>
<a id="tocsinputclass"></a>

```json
"STANDARD"
```

A standard input has two sources and a single pipeline input only has one.

<h2 id="tocS_InputSourceType">InputSourceType</h2>
<!-- backwards compatibility -->
<a id="schemainputsourcetype"></a>
<a id="schema_InputSourceType"></a>
<a id="tocSinputsourcetype"></a>
<a id="tocsinputsourcetype"></a>

```json
"STATIC"
```

There are two types of input sources, static and dynamic. If an input source is dynamic you can
change the source url of the input dynamically using an input switch action. Currently, two input types
support a dynamic url at this time, MP4_FILE and TS_FILE. By default all input sources are static.

<h2 id="tocS___listOfMediaConnectFlow">__listOfMediaConnectFlow</h2>
<!-- backwards compatibility -->
<a id="schema__listofmediaconnectflow"></a>
<a id="schema___listOfMediaConnectFlow"></a>
<a id="tocS__listofmediaconnectflow"></a>
<a id="tocs__listofmediaconnectflow"></a>

```json
[
  {
    "FlowArn": {}
  }
]
```

Placeholder documentation for __listOfMediaConnectFlow

<h2 id="tocS___listOfInputSource">__listOfInputSource</h2>
<!-- backwards compatibility -->
<a id="schema__listofinputsource"></a>
<a id="schema___listOfInputSource"></a>
<a id="tocS__listofinputsource"></a>
<a id="tocs__listofinputsource"></a>

```json
[
  {
    "PasswordParam": {},
    "Url": {},
    "Username": {}
  }
]
```

Placeholder documentation for __listOfInputSource

<h2 id="tocS_InputState">InputState</h2>
<!-- backwards compatibility -->
<a id="schemainputstate"></a>
<a id="schema_InputState"></a>
<a id="tocSinputstate"></a>
<a id="tocsinputstate"></a>

```json
"CREATING"
```

Placeholder documentation for InputState

<h2 id="tocS_DescribeInputSecurityGroupRequest">DescribeInputSecurityGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeinputsecuritygrouprequest"></a>
<a id="schema_DescribeInputSecurityGroupRequest"></a>
<a id="tocSdescribeinputsecuritygrouprequest"></a>
<a id="tocsdescribeinputsecuritygrouprequest"></a>

```json
{}
```

Placeholder documentation for DescribeInputSecurityGroupRequest

<h2 id="tocS_InputSecurityGroupState">InputSecurityGroupState</h2>
<!-- backwards compatibility -->
<a id="schemainputsecuritygroupstate"></a>
<a id="schema_InputSecurityGroupState"></a>
<a id="tocSinputsecuritygroupstate"></a>
<a id="tocsinputsecuritygroupstate"></a>

```json
"IDLE"
```

Placeholder documentation for InputSecurityGroupState

<h2 id="tocS___listOfInputWhitelistRule">__listOfInputWhitelistRule</h2>
<!-- backwards compatibility -->
<a id="schema__listofinputwhitelistrule"></a>
<a id="schema___listOfInputWhitelistRule"></a>
<a id="tocS__listofinputwhitelistrule"></a>
<a id="tocs__listofinputwhitelistrule"></a>

```json
[
  {
    "Cidr": {}
  }
]
```

Placeholder documentation for __listOfInputWhitelistRule

<h2 id="tocS_DescribeMultiplexProgramRequest">DescribeMultiplexProgramRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribemultiplexprogramrequest"></a>
<a id="schema_DescribeMultiplexProgramRequest"></a>
<a id="tocSdescribemultiplexprogramrequest"></a>
<a id="tocsdescribemultiplexprogramrequest"></a>

```json
{}
```

Placeholder documentation for DescribeMultiplexProgramRequest

<h2 id="tocS_DescribeMultiplexRequest">DescribeMultiplexRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribemultiplexrequest"></a>
<a id="schema_DescribeMultiplexRequest"></a>
<a id="tocSdescribemultiplexrequest"></a>
<a id="tocsdescribemultiplexrequest"></a>

```json
{}
```

Placeholder documentation for DescribeMultiplexRequest

<h2 id="tocS_DescribeOfferingRequest">DescribeOfferingRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeofferingrequest"></a>
<a id="schema_DescribeOfferingRequest"></a>
<a id="tocSdescribeofferingrequest"></a>
<a id="tocsdescribeofferingrequest"></a>

```json
{}
```

Placeholder documentation for DescribeOfferingRequest

<h2 id="tocS_DescribeReservationRequest">DescribeReservationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribereservationrequest"></a>
<a id="schema_DescribeReservationRequest"></a>
<a id="tocSdescribereservationrequest"></a>
<a id="tocsdescribereservationrequest"></a>

```json
{}
```

Placeholder documentation for DescribeReservationRequest

<h2 id="tocS_MaxResults">MaxResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxresults"></a>
<a id="schema_MaxResults"></a>
<a id="tocSmaxresults"></a>
<a id="tocsmaxresults"></a>

```json
1
```

Placeholder documentation for MaxResults

<h2 id="tocS_DescribeScheduleRequest">DescribeScheduleRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeschedulerequest"></a>
<a id="schema_DescribeScheduleRequest"></a>
<a id="tocSdescribeschedulerequest"></a>
<a id="tocsdescribeschedulerequest"></a>

```json
{}
```

Placeholder documentation for DescribeScheduleRequest

<h2 id="tocS_DolbyVision81Settings">DolbyVision81Settings</h2>
<!-- backwards compatibility -->
<a id="schemadolbyvision81settings"></a>
<a id="schema_DolbyVision81Settings"></a>
<a id="tocSdolbyvision81settings"></a>
<a id="tocsdolbyvision81settings"></a>

```json
{}
```

Dolby Vision81 Settings

<h2 id="tocS___integerMin0Max65536">__integerMin0Max65536</h2>
<!-- backwards compatibility -->
<a id="schema__integermin0max65536"></a>
<a id="schema___integerMin0Max65536"></a>
<a id="tocS__integermin0max65536"></a>
<a id="tocs__integermin0max65536"></a>

```json
0
```

Placeholder documentation for __integerMin0Max65536

<h2 id="tocS___stringMin1Max256">__stringMin1Max256</h2>
<!-- backwards compatibility -->
<a id="schema__stringmin1max256"></a>
<a id="schema___stringMin1Max256"></a>
<a id="tocS__stringmin1max256"></a>
<a id="tocs__stringmin1max256"></a>

```json
"string"
```

Placeholder documentation for __stringMin1Max256

<h2 id="tocS___integerMin25Max10000">__integerMin25Max10000</h2>
<!-- backwards compatibility -->
<a id="schema__integermin25max10000"></a>
<a id="schema___integerMin25Max10000"></a>
<a id="tocS__integermin25max10000"></a>
<a id="tocs__integermin25max10000"></a>

```json
25
```

Placeholder documentation for __integerMin25Max10000

<h2 id="tocS_DvbNitSettings">DvbNitSettings</h2>
<!-- backwards compatibility -->
<a id="schemadvbnitsettings"></a>
<a id="schema_DvbNitSettings"></a>
<a id="tocSdvbnitsettings"></a>
<a id="tocsdvbnitsettings"></a>

```json
{
  "NetworkId": {},
  "NetworkName": {},
  "RepInterval": {}
}
```

DVB Network Information Table (NIT)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NetworkId|object|true|none|none|
|NetworkName|object|true|none|none|
|RepInterval|object|false|none|none|

<h2 id="tocS_DvbSdtOutputSdt">DvbSdtOutputSdt</h2>
<!-- backwards compatibility -->
<a id="schemadvbsdtoutputsdt"></a>
<a id="schema_DvbSdtOutputSdt"></a>
<a id="tocSdvbsdtoutputsdt"></a>
<a id="tocsdvbsdtoutputsdt"></a>

```json
"SDT_FOLLOW"
```

Dvb Sdt Output Sdt

<h2 id="tocS___integerMin25Max2000">__integerMin25Max2000</h2>
<!-- backwards compatibility -->
<a id="schema__integermin25max2000"></a>
<a id="schema___integerMin25Max2000"></a>
<a id="tocS__integermin25max2000"></a>
<a id="tocs__integermin25max2000"></a>

```json
25
```

Placeholder documentation for __integerMin25Max2000

<h2 id="tocS_DvbSdtSettings">DvbSdtSettings</h2>
<!-- backwards compatibility -->
<a id="schemadvbsdtsettings"></a>
<a id="schema_DvbSdtSettings"></a>
<a id="tocSdvbsdtsettings"></a>
<a id="tocsdvbsdtsettings"></a>

```json
{
  "OutputSdt": {},
  "RepInterval": {},
  "ServiceName": {},
  "ServiceProviderName": {}
}
```

DVB Service Description Table (SDT)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OutputSdt|object|false|none|none|
|RepInterval|object|false|none|none|
|ServiceName|object|false|none|none|
|ServiceProviderName|object|false|none|none|

<h2 id="tocS_DvbSubDestinationAlignment">DvbSubDestinationAlignment</h2>
<!-- backwards compatibility -->
<a id="schemadvbsubdestinationalignment"></a>
<a id="schema_DvbSubDestinationAlignment"></a>
<a id="tocSdvbsubdestinationalignment"></a>
<a id="tocsdvbsubdestinationalignment"></a>

```json
"CENTERED"
```

Dvb Sub Destination Alignment

<h2 id="tocS_DvbSubDestinationBackgroundColor">DvbSubDestinationBackgroundColor</h2>
<!-- backwards compatibility -->
<a id="schemadvbsubdestinationbackgroundcolor"></a>
<a id="schema_DvbSubDestinationBackgroundColor"></a>
<a id="tocSdvbsubdestinationbackgroundcolor"></a>
<a id="tocsdvbsubdestinationbackgroundcolor"></a>

```json
"BLACK"
```

Dvb Sub Destination Background Color

<h2 id="tocS_DvbSubDestinationFontColor">DvbSubDestinationFontColor</h2>
<!-- backwards compatibility -->
<a id="schemadvbsubdestinationfontcolor"></a>
<a id="schema_DvbSubDestinationFontColor"></a>
<a id="tocSdvbsubdestinationfontcolor"></a>
<a id="tocsdvbsubdestinationfontcolor"></a>

```json
"BLACK"
```

Dvb Sub Destination Font Color

<h2 id="tocS_DvbSubDestinationOutlineColor">DvbSubDestinationOutlineColor</h2>
<!-- backwards compatibility -->
<a id="schemadvbsubdestinationoutlinecolor"></a>
<a id="schema_DvbSubDestinationOutlineColor"></a>
<a id="tocSdvbsubdestinationoutlinecolor"></a>
<a id="tocsdvbsubdestinationoutlinecolor"></a>

```json
"BLACK"
```

Dvb Sub Destination Outline Color

<h2 id="tocS_DvbSubDestinationShadowColor">DvbSubDestinationShadowColor</h2>
<!-- backwards compatibility -->
<a id="schemadvbsubdestinationshadowcolor"></a>
<a id="schema_DvbSubDestinationShadowColor"></a>
<a id="tocSdvbsubdestinationshadowcolor"></a>
<a id="tocsdvbsubdestinationshadowcolor"></a>

```json
"BLACK"
```

Dvb Sub Destination Shadow Color

<h2 id="tocS_DvbSubDestinationTeletextGridControl">DvbSubDestinationTeletextGridControl</h2>
<!-- backwards compatibility -->
<a id="schemadvbsubdestinationteletextgridcontrol"></a>
<a id="schema_DvbSubDestinationTeletextGridControl"></a>
<a id="tocSdvbsubdestinationteletextgridcontrol"></a>
<a id="tocsdvbsubdestinationteletextgridcontrol"></a>

```json
"FIXED"
```

Dvb Sub Destination Teletext Grid Control

<h2 id="tocS_DvbSubOcrLanguage">DvbSubOcrLanguage</h2>
<!-- backwards compatibility -->
<a id="schemadvbsubocrlanguage"></a>
<a id="schema_DvbSubOcrLanguage"></a>
<a id="tocSdvbsubocrlanguage"></a>
<a id="tocsdvbsubocrlanguage"></a>

```json
"DEU"
```

Dvb Sub Ocr Language

<h2 id="tocS___integerMin1000Max30000">__integerMin1000Max30000</h2>
<!-- backwards compatibility -->
<a id="schema__integermin1000max30000"></a>
<a id="schema___integerMin1000Max30000"></a>
<a id="tocS__integermin1000max30000"></a>
<a id="tocs__integermin1000max30000"></a>

```json
1000
```

Placeholder documentation for __integerMin1000Max30000

<h2 id="tocS_DvbTdtSettings">DvbTdtSettings</h2>
<!-- backwards compatibility -->
<a id="schemadvbtdtsettings"></a>
<a id="schema_DvbTdtSettings"></a>
<a id="tocSdvbtdtsettings"></a>
<a id="tocsdvbtdtsettings"></a>

```json
{
  "RepInterval": {}
}
```

DVB Time and Date Table (SDT)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RepInterval|object|false|none|none|

<h2 id="tocS_Eac3AtmosCodingMode">Eac3AtmosCodingMode</h2>
<!-- backwards compatibility -->
<a id="schemaeac3atmoscodingmode"></a>
<a id="schema_Eac3AtmosCodingMode"></a>
<a id="tocSeac3atmoscodingmode"></a>
<a id="tocseac3atmoscodingmode"></a>

```json
"CODING_MODE_5_1_4"
```

Eac3 Atmos Coding Mode

<h2 id="tocS_Eac3AtmosDrcLine">Eac3AtmosDrcLine</h2>
<!-- backwards compatibility -->
<a id="schemaeac3atmosdrcline"></a>
<a id="schema_Eac3AtmosDrcLine"></a>
<a id="tocSeac3atmosdrcline"></a>
<a id="tocseac3atmosdrcline"></a>

```json
"FILM_LIGHT"
```

Eac3 Atmos Drc Line

<h2 id="tocS_Eac3AtmosDrcRf">Eac3AtmosDrcRf</h2>
<!-- backwards compatibility -->
<a id="schemaeac3atmosdrcrf"></a>
<a id="schema_Eac3AtmosDrcRf"></a>
<a id="tocSeac3atmosdrcrf"></a>
<a id="tocseac3atmosdrcrf"></a>

```json
"FILM_LIGHT"
```

Eac3 Atmos Drc Rf

<h2 id="tocS_Eac3AttenuationControl">Eac3AttenuationControl</h2>
<!-- backwards compatibility -->
<a id="schemaeac3attenuationcontrol"></a>
<a id="schema_Eac3AttenuationControl"></a>
<a id="tocSeac3attenuationcontrol"></a>
<a id="tocseac3attenuationcontrol"></a>

```json
"ATTENUATE_3_DB"
```

Eac3 Attenuation Control

<h2 id="tocS_Eac3BitstreamMode">Eac3BitstreamMode</h2>
<!-- backwards compatibility -->
<a id="schemaeac3bitstreammode"></a>
<a id="schema_Eac3BitstreamMode"></a>
<a id="tocSeac3bitstreammode"></a>
<a id="tocseac3bitstreammode"></a>

```json
"COMMENTARY"
```

Eac3 Bitstream Mode

<h2 id="tocS_Eac3CodingMode">Eac3CodingMode</h2>
<!-- backwards compatibility -->
<a id="schemaeac3codingmode"></a>
<a id="schema_Eac3CodingMode"></a>
<a id="tocSeac3codingmode"></a>
<a id="tocseac3codingmode"></a>

```json
"CODING_MODE_1_0"
```

Eac3 Coding Mode

<h2 id="tocS_Eac3DcFilter">Eac3DcFilter</h2>
<!-- backwards compatibility -->
<a id="schemaeac3dcfilter"></a>
<a id="schema_Eac3DcFilter"></a>
<a id="tocSeac3dcfilter"></a>
<a id="tocseac3dcfilter"></a>

```json
"DISABLED"
```

Eac3 Dc Filter

<h2 id="tocS_Eac3DrcLine">Eac3DrcLine</h2>
<!-- backwards compatibility -->
<a id="schemaeac3drcline"></a>
<a id="schema_Eac3DrcLine"></a>
<a id="tocSeac3drcline"></a>
<a id="tocseac3drcline"></a>

```json
"FILM_LIGHT"
```

Eac3 Drc Line

<h2 id="tocS_Eac3DrcRf">Eac3DrcRf</h2>
<!-- backwards compatibility -->
<a id="schemaeac3drcrf"></a>
<a id="schema_Eac3DrcRf"></a>
<a id="tocSeac3drcrf"></a>
<a id="tocseac3drcrf"></a>

```json
"FILM_LIGHT"
```

Eac3 Drc Rf

<h2 id="tocS_Eac3LfeControl">Eac3LfeControl</h2>
<!-- backwards compatibility -->
<a id="schemaeac3lfecontrol"></a>
<a id="schema_Eac3LfeControl"></a>
<a id="tocSeac3lfecontrol"></a>
<a id="tocseac3lfecontrol"></a>

```json
"LFE"
```

Eac3 Lfe Control

<h2 id="tocS_Eac3LfeFilter">Eac3LfeFilter</h2>
<!-- backwards compatibility -->
<a id="schemaeac3lfefilter"></a>
<a id="schema_Eac3LfeFilter"></a>
<a id="tocSeac3lfefilter"></a>
<a id="tocseac3lfefilter"></a>

```json
"DISABLED"
```

Eac3 Lfe Filter

<h2 id="tocS_Eac3MetadataControl">Eac3MetadataControl</h2>
<!-- backwards compatibility -->
<a id="schemaeac3metadatacontrol"></a>
<a id="schema_Eac3MetadataControl"></a>
<a id="tocSeac3metadatacontrol"></a>
<a id="tocseac3metadatacontrol"></a>

```json
"FOLLOW_INPUT"
```

Eac3 Metadata Control

<h2 id="tocS_Eac3PassthroughControl">Eac3PassthroughControl</h2>
<!-- backwards compatibility -->
<a id="schemaeac3passthroughcontrol"></a>
<a id="schema_Eac3PassthroughControl"></a>
<a id="tocSeac3passthroughcontrol"></a>
<a id="tocseac3passthroughcontrol"></a>

```json
"NO_PASSTHROUGH"
```

Eac3 Passthrough Control

<h2 id="tocS_Eac3PhaseControl">Eac3PhaseControl</h2>
<!-- backwards compatibility -->
<a id="schemaeac3phasecontrol"></a>
<a id="schema_Eac3PhaseControl"></a>
<a id="tocSeac3phasecontrol"></a>
<a id="tocseac3phasecontrol"></a>

```json
"NO_SHIFT"
```

Eac3 Phase Control

<h2 id="tocS_Eac3StereoDownmix">Eac3StereoDownmix</h2>
<!-- backwards compatibility -->
<a id="schemaeac3stereodownmix"></a>
<a id="schema_Eac3StereoDownmix"></a>
<a id="tocSeac3stereodownmix"></a>
<a id="tocseac3stereodownmix"></a>

```json
"DPL2"
```

Eac3 Stereo Downmix

<h2 id="tocS_Eac3SurroundExMode">Eac3SurroundExMode</h2>
<!-- backwards compatibility -->
<a id="schemaeac3surroundexmode"></a>
<a id="schema_Eac3SurroundExMode"></a>
<a id="tocSeac3surroundexmode"></a>
<a id="tocseac3surroundexmode"></a>

```json
"DISABLED"
```

Eac3 Surround Ex Mode

<h2 id="tocS_Eac3SurroundMode">Eac3SurroundMode</h2>
<!-- backwards compatibility -->
<a id="schemaeac3surroundmode"></a>
<a id="schema_Eac3SurroundMode"></a>
<a id="tocSeac3surroundmode"></a>
<a id="tocseac3surroundmode"></a>

```json
"DISABLED"
```

Eac3 Surround Mode

<h2 id="tocS___stringMax1000">__stringMax1000</h2>
<!-- backwards compatibility -->
<a id="schema__stringmax1000"></a>
<a id="schema___stringMax1000"></a>
<a id="tocS__stringmax1000"></a>
<a id="tocs__stringmax1000"></a>

```json
"string"
```

Placeholder documentation for __stringMax1000

<h2 id="tocS_EbuTtDFillLineGapControl">EbuTtDFillLineGapControl</h2>
<!-- backwards compatibility -->
<a id="schemaebuttdfilllinegapcontrol"></a>
<a id="schema_EbuTtDFillLineGapControl"></a>
<a id="tocSebuttdfilllinegapcontrol"></a>
<a id="tocsebuttdfilllinegapcontrol"></a>

```json
"DISABLED"
```

Ebu Tt DFill Line Gap Control

<h2 id="tocS_EbuTtDDestinationStyleControl">EbuTtDDestinationStyleControl</h2>
<!-- backwards compatibility -->
<a id="schemaebuttddestinationstylecontrol"></a>
<a id="schema_EbuTtDDestinationStyleControl"></a>
<a id="tocSebuttddestinationstylecontrol"></a>
<a id="tocsebuttddestinationstylecontrol"></a>

```json
"EXCLUDE"
```

Ebu Tt DDestination Style Control

<h2 id="tocS_EmbeddedConvert608To708">EmbeddedConvert608To708</h2>
<!-- backwards compatibility -->
<a id="schemaembeddedconvert608to708"></a>
<a id="schema_EmbeddedConvert608To708"></a>
<a id="tocSembeddedconvert608to708"></a>
<a id="tocsembeddedconvert608to708"></a>

```json
"DISABLED"
```

Embedded Convert608 To708

<h2 id="tocS_EmbeddedScte20Detection">EmbeddedScte20Detection</h2>
<!-- backwards compatibility -->
<a id="schemaembeddedscte20detection"></a>
<a id="schema_EmbeddedScte20Detection"></a>
<a id="tocSembeddedscte20detection"></a>
<a id="tocsembeddedscte20detection"></a>

```json
"AUTO"
```

Embedded Scte20 Detection

<h2 id="tocS___integerMin1Max5">__integerMin1Max5</h2>
<!-- backwards compatibility -->
<a id="schema__integermin1max5"></a>
<a id="schema___integerMin1Max5"></a>
<a id="tocS__integermin1max5"></a>
<a id="tocs__integermin1max5"></a>

```json
1
```

Placeholder documentation for __integerMin1Max5

<h2 id="tocS___stringMax256">__stringMax256</h2>
<!-- backwards compatibility -->
<a id="schema__stringmax256"></a>
<a id="schema___stringMax256"></a>
<a id="tocS__stringmax256"></a>
<a id="tocs__stringmax256"></a>

```json
"string"
```

Placeholder documentation for __stringMax256

<h2 id="tocS___integerMinNegative1000Max1000">__integerMinNegative1000Max1000</h2>
<!-- backwards compatibility -->
<a id="schema__integerminnegative1000max1000"></a>
<a id="schema___integerMinNegative1000Max1000"></a>
<a id="tocS__integerminnegative1000max1000"></a>
<a id="tocs__integerminnegative1000max1000"></a>

```json
-1000
```

Placeholder documentation for __integerMinNegative1000Max1000

<h2 id="tocS___stringMax2048">__stringMax2048</h2>
<!-- backwards compatibility -->
<a id="schema__stringmax2048"></a>
<a id="schema___stringMax2048"></a>
<a id="tocS__stringmax2048"></a>
<a id="tocs__stringmax2048"></a>

```json
"string"
```

Placeholder documentation for __stringMax2048

<h2 id="tocS_FailoverConditionSettings">FailoverConditionSettings</h2>
<!-- backwards compatibility -->
<a id="schemafailoverconditionsettings"></a>
<a id="schema_FailoverConditionSettings"></a>
<a id="tocSfailoverconditionsettings"></a>
<a id="tocsfailoverconditionsettings"></a>

```json
{
  "AudioSilenceSettings": {
    "AudioSelectorName": {},
    "AudioSilenceThresholdMsec": {}
  },
  "InputLossSettings": {
    "InputLossThresholdMsec": {}
  },
  "VideoBlackSettings": {
    "BlackDetectThreshold": {},
    "VideoBlackThresholdMsec": {}
  }
}
```

Settings for one failover condition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AudioSilenceSettings|object|false|none|none|
|InputLossSettings|object|false|none|none|
|VideoBlackSettings|object|false|none|none|

<h2 id="tocS_FailoverCondition">FailoverCondition</h2>
<!-- backwards compatibility -->
<a id="schemafailovercondition"></a>
<a id="schema_FailoverCondition"></a>
<a id="tocSfailovercondition"></a>
<a id="tocsfailovercondition"></a>

```json
{
  "FailoverConditionSettings": {
    "AudioSilenceSettings": {
      "AudioSelectorName": {},
      "AudioSilenceThresholdMsec": {}
    },
    "InputLossSettings": {
      "InputLossThresholdMsec": {}
    },
    "VideoBlackSettings": {
      "BlackDetectThreshold": {},
      "VideoBlackThresholdMsec": {}
    }
  }
}
```

Failover Condition settings. There can be multiple failover conditions inside AutomaticInputFailoverSettings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FailoverConditionSettings|object|false|none|none|

<h2 id="tocS_InputLossFailoverSettings">InputLossFailoverSettings</h2>
<!-- backwards compatibility -->
<a id="schemainputlossfailoversettings"></a>
<a id="schema_InputLossFailoverSettings"></a>
<a id="tocSinputlossfailoversettings"></a>
<a id="tocsinputlossfailoversettings"></a>

```json
{
  "InputLossThresholdMsec": {}
}
```

MediaLive will perform a failover if content is not detected in this input for the specified period.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InputLossThresholdMsec|object|false|none|none|

<h2 id="tocS_VideoBlackFailoverSettings">VideoBlackFailoverSettings</h2>
<!-- backwards compatibility -->
<a id="schemavideoblackfailoversettings"></a>
<a id="schema_VideoBlackFailoverSettings"></a>
<a id="tocSvideoblackfailoversettings"></a>
<a id="tocsvideoblackfailoversettings"></a>

```json
{
  "BlackDetectThreshold": {},
  "VideoBlackThresholdMsec": {}
}
```

Placeholder documentation for VideoBlackFailoverSettings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BlackDetectThreshold|object|false|none|none|
|VideoBlackThresholdMsec|object|false|none|none|

<h2 id="tocS_FeatureActivationsInputPrepareScheduleActions">FeatureActivationsInputPrepareScheduleActions</h2>
<!-- backwards compatibility -->
<a id="schemafeatureactivationsinputpreparescheduleactions"></a>
<a id="schema_FeatureActivationsInputPrepareScheduleActions"></a>
<a id="tocSfeatureactivationsinputpreparescheduleactions"></a>
<a id="tocsfeatureactivationsinputpreparescheduleactions"></a>

```json
"DISABLED"
```

Feature Activations Input Prepare Schedule Actions

<h2 id="tocS_FecOutputIncludeFec">FecOutputIncludeFec</h2>
<!-- backwards compatibility -->
<a id="schemafecoutputincludefec"></a>
<a id="schema_FecOutputIncludeFec"></a>
<a id="tocSfecoutputincludefec"></a>
<a id="tocsfecoutputincludefec"></a>

```json
"COLUMN"
```

Fec Output Include Fec

<h2 id="tocS___integerMin4Max20">__integerMin4Max20</h2>
<!-- backwards compatibility -->
<a id="schema__integermin4max20"></a>
<a id="schema___integerMin4Max20"></a>
<a id="tocS__integermin4max20"></a>
<a id="tocs__integermin4max20"></a>

```json
4
```

Placeholder documentation for __integerMin4Max20

<h2 id="tocS___integerMin1Max20">__integerMin1Max20</h2>
<!-- backwards compatibility -->
<a id="schema__integermin1max20"></a>
<a id="schema___integerMin1Max20"></a>
<a id="tocS__integermin1max20"></a>
<a id="tocs__integermin1max20"></a>

```json
1
```

Placeholder documentation for __integerMin1Max20

<h2 id="tocS_FecOutputSettings">FecOutputSettings</h2>
<!-- backwards compatibility -->
<a id="schemafecoutputsettings"></a>
<a id="schema_FecOutputSettings"></a>
<a id="tocSfecoutputsettings"></a>
<a id="tocsfecoutputsettings"></a>

```json
{
  "ColumnDepth": {},
  "IncludeFec": {},
  "RowLength": {}
}
```

Fec Output Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ColumnDepth|object|false|none|none|
|IncludeFec|object|false|none|none|
|RowLength|object|false|none|none|

<h2 id="tocS_FixedAfd">FixedAfd</h2>
<!-- backwards compatibility -->
<a id="schemafixedafd"></a>
<a id="schema_FixedAfd"></a>
<a id="tocSfixedafd"></a>
<a id="tocsfixedafd"></a>

```json
"AFD_0000"
```

Fixed Afd

<h2 id="tocS_FixedModeScheduleActionStartSettings">FixedModeScheduleActionStartSettings</h2>
<!-- backwards compatibility -->
<a id="schemafixedmodescheduleactionstartsettings"></a>
<a id="schema_FixedModeScheduleActionStartSettings"></a>
<a id="tocSfixedmodescheduleactionstartsettings"></a>
<a id="tocsfixedmodescheduleactionstartsettings"></a>

```json
{
  "Time": {}
}
```

Start time for the action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Time|object|true|none|none|

<h2 id="tocS_Fmp4NielsenId3Behavior">Fmp4NielsenId3Behavior</h2>
<!-- backwards compatibility -->
<a id="schemafmp4nielsenid3behavior"></a>
<a id="schema_Fmp4NielsenId3Behavior"></a>
<a id="tocSfmp4nielsenid3behavior"></a>
<a id="tocsfmp4nielsenid3behavior"></a>

```json
"NO_PASSTHROUGH"
```

Fmp4 Nielsen Id3 Behavior

<h2 id="tocS_Fmp4TimedMetadataBehavior">Fmp4TimedMetadataBehavior</h2>
<!-- backwards compatibility -->
<a id="schemafmp4timedmetadatabehavior"></a>
<a id="schema_Fmp4TimedMetadataBehavior"></a>
<a id="tocSfmp4timedmetadatabehavior"></a>
<a id="tocsfmp4timedmetadatabehavior"></a>

```json
"NO_PASSTHROUGH"
```

Fmp4 Timed Metadata Behavior

<h2 id="tocS_Fmp4HlsSettings">Fmp4HlsSettings</h2>
<!-- backwards compatibility -->
<a id="schemafmp4hlssettings"></a>
<a id="schema_Fmp4HlsSettings"></a>
<a id="tocSfmp4hlssettings"></a>
<a id="tocsfmp4hlssettings"></a>

```json
{
  "AudioRenditionSets": {},
  "NielsenId3Behavior": {},
  "TimedMetadataBehavior": {}
}
```

Fmp4 Hls Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AudioRenditionSets|object|false|none|none|
|NielsenId3Behavior|object|false|none|none|
|TimedMetadataBehavior|object|false|none|none|

<h2 id="tocS_FollowPoint">FollowPoint</h2>
<!-- backwards compatibility -->
<a id="schemafollowpoint"></a>
<a id="schema_FollowPoint"></a>
<a id="tocSfollowpoint"></a>
<a id="tocsfollowpoint"></a>

```json
"END"
```

Follow reference point.

<h2 id="tocS_FollowModeScheduleActionStartSettings">FollowModeScheduleActionStartSettings</h2>
<!-- backwards compatibility -->
<a id="schemafollowmodescheduleactionstartsettings"></a>
<a id="schema_FollowModeScheduleActionStartSettings"></a>
<a id="tocSfollowmodescheduleactionstartsettings"></a>
<a id="tocsfollowmodescheduleactionstartsettings"></a>

```json
{
  "FollowPoint": {},
  "ReferenceActionName": {}
}
```

Settings to specify if an action follows another.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FollowPoint|object|true|none|none|
|ReferenceActionName|object|true|none|none|

<h2 id="tocS_FrameCaptureS3Settings">FrameCaptureS3Settings</h2>
<!-- backwards compatibility -->
<a id="schemaframecaptures3settings"></a>
<a id="schema_FrameCaptureS3Settings"></a>
<a id="tocSframecaptures3settings"></a>
<a id="tocsframecaptures3settings"></a>

```json
{
  "CannedAcl": {}
}
```

Frame Capture S3 Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CannedAcl|object|false|none|none|

<h2 id="tocS_FrameCaptureCdnSettings">FrameCaptureCdnSettings</h2>
<!-- backwards compatibility -->
<a id="schemaframecapturecdnsettings"></a>
<a id="schema_FrameCaptureCdnSettings"></a>
<a id="tocSframecapturecdnsettings"></a>
<a id="tocsframecapturecdnsettings"></a>

```json
{
  "FrameCaptureS3Settings": {
    "CannedAcl": {}
  }
}
```

Frame Capture Cdn Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FrameCaptureS3Settings|object|false|none|none|

<h2 id="tocS_FrameCaptureGroupSettings">FrameCaptureGroupSettings</h2>
<!-- backwards compatibility -->
<a id="schemaframecapturegroupsettings"></a>
<a id="schema_FrameCaptureGroupSettings"></a>
<a id="tocSframecapturegroupsettings"></a>
<a id="tocsframecapturegroupsettings"></a>

```json
{
  "Destination": {
    "DestinationRefId": {}
  },
  "FrameCaptureCdnSettings": {
    "FrameCaptureS3Settings": {
      "CannedAcl": {}
    }
  }
}
```

Frame Capture Group Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Destination|object|true|none|none|
|FrameCaptureCdnSettings|object|false|none|none|

<h2 id="tocS_FrameCaptureHlsSettings">FrameCaptureHlsSettings</h2>
<!-- backwards compatibility -->
<a id="schemaframecapturehlssettings"></a>
<a id="schema_FrameCaptureHlsSettings"></a>
<a id="tocSframecapturehlssettings"></a>
<a id="tocsframecapturehlssettings"></a>

```json
{}
```

Frame Capture Hls Settings

<h2 id="tocS_FrameCaptureIntervalUnit">FrameCaptureIntervalUnit</h2>
<!-- backwards compatibility -->
<a id="schemaframecaptureintervalunit"></a>
<a id="schema_FrameCaptureIntervalUnit"></a>
<a id="tocSframecaptureintervalunit"></a>
<a id="tocsframecaptureintervalunit"></a>

```json
"MILLISECONDS"
```

Frame Capture Interval Unit

<h2 id="tocS_FrameCaptureOutputSettings">FrameCaptureOutputSettings</h2>
<!-- backwards compatibility -->
<a id="schemaframecaptureoutputsettings"></a>
<a id="schema_FrameCaptureOutputSettings"></a>
<a id="tocSframecaptureoutputsettings"></a>
<a id="tocsframecaptureoutputsettings"></a>

```json
{
  "NameModifier": {}
}
```

Frame Capture Output Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NameModifier|object|false|none|none|

<h2 id="tocS___integerMin1Max3600000">__integerMin1Max3600000</h2>
<!-- backwards compatibility -->
<a id="schema__integermin1max3600000"></a>
<a id="schema___integerMin1Max3600000"></a>
<a id="tocS__integermin1max3600000"></a>
<a id="tocs__integermin1max3600000"></a>

```json
1
```

Placeholder documentation for __integerMin1Max3600000

<h2 id="tocS_TimecodeBurninSettings">TimecodeBurninSettings</h2>
<!-- backwards compatibility -->
<a id="schematimecodeburninsettings"></a>
<a id="schema_TimecodeBurninSettings"></a>
<a id="tocStimecodeburninsettings"></a>
<a id="tocstimecodeburninsettings"></a>

```json
{
  "FontSize": {},
  "Position": {},
  "Prefix": {}
}
```

Timecode Burnin Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FontSize|object|true|none|none|
|Position|object|true|none|none|
|Prefix|object|false|none|none|

<h2 id="tocS_FrameCaptureSettings">FrameCaptureSettings</h2>
<!-- backwards compatibility -->
<a id="schemaframecapturesettings"></a>
<a id="schema_FrameCaptureSettings"></a>
<a id="tocSframecapturesettings"></a>
<a id="tocsframecapturesettings"></a>

```json
{
  "CaptureInterval": {},
  "CaptureIntervalUnits": {},
  "TimecodeBurninSettings": {
    "FontSize": {},
    "Position": {},
    "Prefix": {}
  }
}
```

Frame Capture Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CaptureInterval|object|false|none|none|
|CaptureIntervalUnits|object|false|none|none|
|TimecodeBurninSettings|object|false|none|none|

<h2 id="tocS___integerMinNegative60Max60">__integerMinNegative60Max60</h2>
<!-- backwards compatibility -->
<a id="schema__integerminnegative60max60"></a>
<a id="schema___integerMinNegative60Max60"></a>
<a id="tocS__integerminnegative60max60"></a>
<a id="tocs__integerminnegative60max60"></a>

```json
-60
```

Placeholder documentation for __integerMinNegative60Max60

<h2 id="tocS_GlobalConfigurationInputEndAction">GlobalConfigurationInputEndAction</h2>
<!-- backwards compatibility -->
<a id="schemaglobalconfigurationinputendaction"></a>
<a id="schema_GlobalConfigurationInputEndAction"></a>
<a id="tocSglobalconfigurationinputendaction"></a>
<a id="tocsglobalconfigurationinputendaction"></a>

```json
"NONE"
```

Global Configuration Input End Action

<h2 id="tocS_InputLossBehavior">InputLossBehavior</h2>
<!-- backwards compatibility -->
<a id="schemainputlossbehavior"></a>
<a id="schema_InputLossBehavior"></a>
<a id="tocSinputlossbehavior"></a>
<a id="tocsinputlossbehavior"></a>

```json
{
  "BlackFrameMsec": {},
  "InputLossImageColor": {},
  "InputLossImageSlate": {
    "PasswordParam": {},
    "Uri": {},
    "Username": {}
  },
  "InputLossImageType": {},
  "RepeatFrameMsec": {}
}
```

Input Loss Behavior

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BlackFrameMsec|object|false|none|none|
|InputLossImageColor|object|false|none|none|
|InputLossImageSlate|object|false|none|none|
|InputLossImageType|object|false|none|none|
|RepeatFrameMsec|object|false|none|none|

<h2 id="tocS_GlobalConfigurationOutputLockingMode">GlobalConfigurationOutputLockingMode</h2>
<!-- backwards compatibility -->
<a id="schemaglobalconfigurationoutputlockingmode"></a>
<a id="schema_GlobalConfigurationOutputLockingMode"></a>
<a id="tocSglobalconfigurationoutputlockingmode"></a>
<a id="tocsglobalconfigurationoutputlockingmode"></a>

```json
"EPOCH_LOCKING"
```

Global Configuration Output Locking Mode

<h2 id="tocS_GlobalConfigurationOutputTimingSource">GlobalConfigurationOutputTimingSource</h2>
<!-- backwards compatibility -->
<a id="schemaglobalconfigurationoutputtimingsource"></a>
<a id="schema_GlobalConfigurationOutputTimingSource"></a>
<a id="tocSglobalconfigurationoutputtimingsource"></a>
<a id="tocsglobalconfigurationoutputtimingsource"></a>

```json
"INPUT_CLOCK"
```

Global Configuration Output Timing Source

<h2 id="tocS_GlobalConfigurationLowFramerateInputs">GlobalConfigurationLowFramerateInputs</h2>
<!-- backwards compatibility -->
<a id="schemaglobalconfigurationlowframerateinputs"></a>
<a id="schema_GlobalConfigurationLowFramerateInputs"></a>
<a id="tocSglobalconfigurationlowframerateinputs"></a>
<a id="tocsglobalconfigurationlowframerateinputs"></a>

```json
"DISABLED"
```

Global Configuration Low Framerate Inputs

<h2 id="tocS_H264AdaptiveQuantization">H264AdaptiveQuantization</h2>
<!-- backwards compatibility -->
<a id="schemah264adaptivequantization"></a>
<a id="schema_H264AdaptiveQuantization"></a>
<a id="tocSh264adaptivequantization"></a>
<a id="tocsh264adaptivequantization"></a>

```json
"AUTO"
```

H264 Adaptive Quantization

<h2 id="tocS_H264ColorMetadata">H264ColorMetadata</h2>
<!-- backwards compatibility -->
<a id="schemah264colormetadata"></a>
<a id="schema_H264ColorMetadata"></a>
<a id="tocSh264colormetadata"></a>
<a id="tocsh264colormetadata"></a>

```json
"IGNORE"
```

H264 Color Metadata

<h2 id="tocS_Rec601Settings">Rec601Settings</h2>
<!-- backwards compatibility -->
<a id="schemarec601settings"></a>
<a id="schema_Rec601Settings"></a>
<a id="tocSrec601settings"></a>
<a id="tocsrec601settings"></a>

```json
{}
```

Rec601 Settings

<h2 id="tocS_Rec709Settings">Rec709Settings</h2>
<!-- backwards compatibility -->
<a id="schemarec709settings"></a>
<a id="schema_Rec709Settings"></a>
<a id="tocSrec709settings"></a>
<a id="tocsrec709settings"></a>

```json
{}
```

Rec709 Settings

<h2 id="tocS_H264ColorSpaceSettings">H264ColorSpaceSettings</h2>
<!-- backwards compatibility -->
<a id="schemah264colorspacesettings"></a>
<a id="schema_H264ColorSpaceSettings"></a>
<a id="tocSh264colorspacesettings"></a>
<a id="tocsh264colorspacesettings"></a>

```json
{
  "ColorSpacePassthroughSettings": {},
  "Rec601Settings": {},
  "Rec709Settings": {}
}
```

H264 Color Space Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ColorSpacePassthroughSettings|object|false|none|none|
|Rec601Settings|object|false|none|none|
|Rec709Settings|object|false|none|none|

<h2 id="tocS_H264EntropyEncoding">H264EntropyEncoding</h2>
<!-- backwards compatibility -->
<a id="schemah264entropyencoding"></a>
<a id="schema_H264EntropyEncoding"></a>
<a id="tocSh264entropyencoding"></a>
<a id="tocsh264entropyencoding"></a>

```json
"CABAC"
```

H264 Entropy Encoding

<h2 id="tocS_TemporalFilterSettings">TemporalFilterSettings</h2>
<!-- backwards compatibility -->
<a id="schematemporalfiltersettings"></a>
<a id="schema_TemporalFilterSettings"></a>
<a id="tocStemporalfiltersettings"></a>
<a id="tocstemporalfiltersettings"></a>

```json
{
  "PostFilterSharpening": {},
  "Strength": {}
}
```

Temporal Filter Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PostFilterSharpening|object|false|none|none|
|Strength|object|false|none|none|

<h2 id="tocS_H264FilterSettings">H264FilterSettings</h2>
<!-- backwards compatibility -->
<a id="schemah264filtersettings"></a>
<a id="schema_H264FilterSettings"></a>
<a id="tocSh264filtersettings"></a>
<a id="tocsh264filtersettings"></a>

```json
{
  "TemporalFilterSettings": {
    "PostFilterSharpening": {},
    "Strength": {}
  }
}
```

H264 Filter Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TemporalFilterSettings|object|false|none|none|

<h2 id="tocS_H264FlickerAq">H264FlickerAq</h2>
<!-- backwards compatibility -->
<a id="schemah264flickeraq"></a>
<a id="schema_H264FlickerAq"></a>
<a id="tocSh264flickeraq"></a>
<a id="tocsh264flickeraq"></a>

```json
"DISABLED"
```

H264 Flicker Aq

<h2 id="tocS_H264ForceFieldPictures">H264ForceFieldPictures</h2>
<!-- backwards compatibility -->
<a id="schemah264forcefieldpictures"></a>
<a id="schema_H264ForceFieldPictures"></a>
<a id="tocSh264forcefieldpictures"></a>
<a id="tocsh264forcefieldpictures"></a>

```json
"DISABLED"
```

H264 Force Field Pictures

<h2 id="tocS_H264FramerateControl">H264FramerateControl</h2>
<!-- backwards compatibility -->
<a id="schemah264frameratecontrol"></a>
<a id="schema_H264FramerateControl"></a>
<a id="tocSh264frameratecontrol"></a>
<a id="tocsh264frameratecontrol"></a>

```json
"INITIALIZE_FROM_SOURCE"
```

H264 Framerate Control

<h2 id="tocS_H264GopBReference">H264GopBReference</h2>
<!-- backwards compatibility -->
<a id="schemah264gopbreference"></a>
<a id="schema_H264GopBReference"></a>
<a id="tocSh264gopbreference"></a>
<a id="tocsh264gopbreference"></a>

```json
"DISABLED"
```

H264 Gop BReference

<h2 id="tocS_H264GopSizeUnits">H264GopSizeUnits</h2>
<!-- backwards compatibility -->
<a id="schemah264gopsizeunits"></a>
<a id="schema_H264GopSizeUnits"></a>
<a id="tocSh264gopsizeunits"></a>
<a id="tocsh264gopsizeunits"></a>

```json
"FRAMES"
```

H264 Gop Size Units

<h2 id="tocS_H264Level">H264Level</h2>
<!-- backwards compatibility -->
<a id="schemah264level"></a>
<a id="schema_H264Level"></a>
<a id="tocSh264level"></a>
<a id="tocsh264level"></a>

```json
"H264_LEVEL_1"
```

H264 Level

<h2 id="tocS_H264LookAheadRateControl">H264LookAheadRateControl</h2>
<!-- backwards compatibility -->
<a id="schemah264lookaheadratecontrol"></a>
<a id="schema_H264LookAheadRateControl"></a>
<a id="tocSh264lookaheadratecontrol"></a>
<a id="tocsh264lookaheadratecontrol"></a>

```json
"HIGH"
```

H264 Look Ahead Rate Control

<h2 id="tocS_H264ParControl">H264ParControl</h2>
<!-- backwards compatibility -->
<a id="schemah264parcontrol"></a>
<a id="schema_H264ParControl"></a>
<a id="tocSh264parcontrol"></a>
<a id="tocsh264parcontrol"></a>

```json
"INITIALIZE_FROM_SOURCE"
```

H264 Par Control

<h2 id="tocS_H264Profile">H264Profile</h2>
<!-- backwards compatibility -->
<a id="schemah264profile"></a>
<a id="schema_H264Profile"></a>
<a id="tocSh264profile"></a>
<a id="tocsh264profile"></a>

```json
"BASELINE"
```

H264 Profile

<h2 id="tocS_H264QualityLevel">H264QualityLevel</h2>
<!-- backwards compatibility -->
<a id="schemah264qualitylevel"></a>
<a id="schema_H264QualityLevel"></a>
<a id="tocSh264qualitylevel"></a>
<a id="tocsh264qualitylevel"></a>

```json
"ENHANCED_QUALITY"
```

H264 Quality Level

<h2 id="tocS_H264RateControlMode">H264RateControlMode</h2>
<!-- backwards compatibility -->
<a id="schemah264ratecontrolmode"></a>
<a id="schema_H264RateControlMode"></a>
<a id="tocSh264ratecontrolmode"></a>
<a id="tocsh264ratecontrolmode"></a>

```json
"CBR"
```

H264 Rate Control Mode

<h2 id="tocS_H264ScanType">H264ScanType</h2>
<!-- backwards compatibility -->
<a id="schemah264scantype"></a>
<a id="schema_H264ScanType"></a>
<a id="tocSh264scantype"></a>
<a id="tocsh264scantype"></a>

```json
"INTERLACED"
```

H264 Scan Type

<h2 id="tocS_H264SceneChangeDetect">H264SceneChangeDetect</h2>
<!-- backwards compatibility -->
<a id="schemah264scenechangedetect"></a>
<a id="schema_H264SceneChangeDetect"></a>
<a id="tocSh264scenechangedetect"></a>
<a id="tocsh264scenechangedetect"></a>

```json
"DISABLED"
```

H264 Scene Change Detect

<h2 id="tocS___integerMin0Max100">__integerMin0Max100</h2>
<!-- backwards compatibility -->
<a id="schema__integermin0max100"></a>
<a id="schema___integerMin0Max100"></a>
<a id="tocS__integermin0max100"></a>
<a id="tocs__integermin0max100"></a>

```json
0
```

Placeholder documentation for __integerMin0Max100

<h2 id="tocS___integerMin0Max30">__integerMin0Max30</h2>
<!-- backwards compatibility -->
<a id="schema__integermin0max30"></a>
<a id="schema___integerMin0Max30"></a>
<a id="tocS__integermin0max30"></a>
<a id="tocs__integermin0max30"></a>

```json
0
```

Placeholder documentation for __integerMin0Max30

<h2 id="tocS___integerMin1Max6">__integerMin1Max6</h2>
<!-- backwards compatibility -->
<a id="schema__integermin1max6"></a>
<a id="schema___integerMin1Max6"></a>
<a id="tocS__integermin1max6"></a>
<a id="tocs__integermin1max6"></a>

```json
1
```

Placeholder documentation for __integerMin1Max6

<h2 id="tocS___integerMin1Max10">__integerMin1Max10</h2>
<!-- backwards compatibility -->
<a id="schema__integermin1max10"></a>
<a id="schema___integerMin1Max10"></a>
<a id="tocS__integermin1max10"></a>
<a id="tocs__integermin1max10"></a>

```json
1
```

Placeholder documentation for __integerMin1Max10

<h2 id="tocS___integerMin1Max32">__integerMin1Max32</h2>
<!-- backwards compatibility -->
<a id="schema__integermin1max32"></a>
<a id="schema___integerMin1Max32"></a>
<a id="tocS__integermin1max32"></a>
<a id="tocs__integermin1max32"></a>

```json
1
```

Placeholder documentation for __integerMin1Max32

<h2 id="tocS___integerMin0Max128">__integerMin0Max128</h2>
<!-- backwards compatibility -->
<a id="schema__integermin0max128"></a>
<a id="schema___integerMin0Max128"></a>
<a id="tocS__integermin0max128"></a>
<a id="tocs__integermin0max128"></a>

```json
0
```

Placeholder documentation for __integerMin0Max128

<h2 id="tocS_H264SpatialAq">H264SpatialAq</h2>
<!-- backwards compatibility -->
<a id="schemah264spatialaq"></a>
<a id="schema_H264SpatialAq"></a>
<a id="tocSh264spatialaq"></a>
<a id="tocsh264spatialaq"></a>

```json
"DISABLED"
```

H264 Spatial Aq

<h2 id="tocS_H264SubGopLength">H264SubGopLength</h2>
<!-- backwards compatibility -->
<a id="schemah264subgoplength"></a>
<a id="schema_H264SubGopLength"></a>
<a id="tocSh264subgoplength"></a>
<a id="tocsh264subgoplength"></a>

```json
"DYNAMIC"
```

H264 Sub Gop Length

<h2 id="tocS_H264Syntax">H264Syntax</h2>
<!-- backwards compatibility -->
<a id="schemah264syntax"></a>
<a id="schema_H264Syntax"></a>
<a id="tocSh264syntax"></a>
<a id="tocsh264syntax"></a>

```json
"DEFAULT"
```

H264 Syntax

<h2 id="tocS_H264TemporalAq">H264TemporalAq</h2>
<!-- backwards compatibility -->
<a id="schemah264temporalaq"></a>
<a id="schema_H264TemporalAq"></a>
<a id="tocSh264temporalaq"></a>
<a id="tocsh264temporalaq"></a>

```json
"DISABLED"
```

H264 Temporal Aq

<h2 id="tocS_H264TimecodeInsertionBehavior">H264TimecodeInsertionBehavior</h2>
<!-- backwards compatibility -->
<a id="schemah264timecodeinsertionbehavior"></a>
<a id="schema_H264TimecodeInsertionBehavior"></a>
<a id="tocSh264timecodeinsertionbehavior"></a>
<a id="tocsh264timecodeinsertionbehavior"></a>

```json
"DISABLED"
```

H264 Timecode Insertion Behavior

<h2 id="tocS_H264Settings">H264Settings</h2>
<!-- backwards compatibility -->
<a id="schemah264settings"></a>
<a id="schema_H264Settings"></a>
<a id="tocSh264settings"></a>
<a id="tocsh264settings"></a>

```json
{
  "AdaptiveQuantization": {},
  "AfdSignaling": {},
  "Bitrate": {},
  "BufFillPct": {},
  "BufSize": {},
  "ColorMetadata": {},
  "ColorSpaceSettings": {
    "ColorSpacePassthroughSettings": {},
    "Rec601Settings": {},
    "Rec709Settings": {}
  },
  "EntropyEncoding": {},
  "FilterSettings": {
    "TemporalFilterSettings": {
      "PostFilterSharpening": {},
      "Strength": {}
    }
  },
  "FixedAfd": {},
  "FlickerAq": {},
  "ForceFieldPictures": {},
  "FramerateControl": {},
  "FramerateDenominator": {},
  "FramerateNumerator": {},
  "GopBReference": {},
  "GopClosedCadence": {},
  "GopNumBFrames": {},
  "GopSize": {},
  "GopSizeUnits": {},
  "Level": {},
  "LookAheadRateControl": {},
  "MaxBitrate": {},
  "MinIInterval": {},
  "NumRefFrames": {},
  "ParControl": {},
  "ParDenominator": {},
  "ParNumerator": {},
  "Profile": {},
  "QualityLevel": {},
  "QvbrQualityLevel": {},
  "RateControlMode": {},
  "ScanType": {},
  "SceneChangeDetect": {},
  "Slices": {},
  "Softness": {},
  "SpatialAq": {},
  "SubgopLength": {},
  "Syntax": {},
  "TemporalAq": {},
  "TimecodeInsertion": {},
  "TimecodeBurninSettings": {
    "FontSize": {},
    "Position": {},
    "Prefix": {}
  }
}
```

H264 Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdaptiveQuantization|object|false|none|none|
|AfdSignaling|object|false|none|none|
|Bitrate|object|false|none|none|
|BufFillPct|object|false|none|none|
|BufSize|object|false|none|none|
|ColorMetadata|object|false|none|none|
|ColorSpaceSettings|object|false|none|none|
|EntropyEncoding|object|false|none|none|
|FilterSettings|object|false|none|none|
|FixedAfd|object|false|none|none|
|FlickerAq|object|false|none|none|
|ForceFieldPictures|object|false|none|none|
|FramerateControl|object|false|none|none|
|FramerateDenominator|object|false|none|none|
|FramerateNumerator|object|false|none|none|
|GopBReference|object|false|none|none|
|GopClosedCadence|object|false|none|none|
|GopNumBFrames|object|false|none|none|
|GopSize|object|false|none|none|
|GopSizeUnits|object|false|none|none|
|Level|object|false|none|none|
|LookAheadRateControl|object|false|none|none|
|MaxBitrate|object|false|none|none|
|MinIInterval|object|false|none|none|
|NumRefFrames|object|false|none|none|
|ParControl|object|false|none|none|
|ParDenominator|object|false|none|none|
|ParNumerator|object|false|none|none|
|Profile|object|false|none|none|
|QualityLevel|object|false|none|none|
|QvbrQualityLevel|object|false|none|none|
|RateControlMode|object|false|none|none|
|ScanType|object|false|none|none|
|SceneChangeDetect|object|false|none|none|
|Slices|object|false|none|none|
|Softness|object|false|none|none|
|SpatialAq|object|false|none|none|
|SubgopLength|object|false|none|none|
|Syntax|object|false|none|none|
|TemporalAq|object|false|none|none|
|TimecodeInsertion|object|false|none|none|
|TimecodeBurninSettings|object|false|none|none|

<h2 id="tocS_H265AdaptiveQuantization">H265AdaptiveQuantization</h2>
<!-- backwards compatibility -->
<a id="schemah265adaptivequantization"></a>
<a id="schema_H265AdaptiveQuantization"></a>
<a id="tocSh265adaptivequantization"></a>
<a id="tocsh265adaptivequantization"></a>

```json
"AUTO"
```

H265 Adaptive Quantization

<h2 id="tocS_H265AlternativeTransferFunction">H265AlternativeTransferFunction</h2>
<!-- backwards compatibility -->
<a id="schemah265alternativetransferfunction"></a>
<a id="schema_H265AlternativeTransferFunction"></a>
<a id="tocSh265alternativetransferfunction"></a>
<a id="tocsh265alternativetransferfunction"></a>

```json
"INSERT"
```

H265 Alternative Transfer Function

<h2 id="tocS_H265ColorMetadata">H265ColorMetadata</h2>
<!-- backwards compatibility -->
<a id="schemah265colormetadata"></a>
<a id="schema_H265ColorMetadata"></a>
<a id="tocSh265colormetadata"></a>
<a id="tocsh265colormetadata"></a>

```json
"IGNORE"
```

H265 Color Metadata

<h2 id="tocS_Hdr10Settings">Hdr10Settings</h2>
<!-- backwards compatibility -->
<a id="schemahdr10settings"></a>
<a id="schema_Hdr10Settings"></a>
<a id="tocShdr10settings"></a>
<a id="tocshdr10settings"></a>

```json
{
  "MaxCll": {},
  "MaxFall": {}
}
```

Hdr10 Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxCll|object|false|none|none|
|MaxFall|object|false|none|none|

<h2 id="tocS_H265ColorSpaceSettings">H265ColorSpaceSettings</h2>
<!-- backwards compatibility -->
<a id="schemah265colorspacesettings"></a>
<a id="schema_H265ColorSpaceSettings"></a>
<a id="tocSh265colorspacesettings"></a>
<a id="tocsh265colorspacesettings"></a>

```json
{
  "ColorSpacePassthroughSettings": {},
  "DolbyVision81Settings": {},
  "Hdr10Settings": {
    "MaxCll": {},
    "MaxFall": {}
  },
  "Rec601Settings": {},
  "Rec709Settings": {}
}
```

H265 Color Space Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ColorSpacePassthroughSettings|object|false|none|none|
|DolbyVision81Settings|object|false|none|none|
|Hdr10Settings|object|false|none|none|
|Rec601Settings|object|false|none|none|
|Rec709Settings|object|false|none|none|

<h2 id="tocS_H265FilterSettings">H265FilterSettings</h2>
<!-- backwards compatibility -->
<a id="schemah265filtersettings"></a>
<a id="schema_H265FilterSettings"></a>
<a id="tocSh265filtersettings"></a>
<a id="tocsh265filtersettings"></a>

```json
{
  "TemporalFilterSettings": {
    "PostFilterSharpening": {},
    "Strength": {}
  }
}
```

H265 Filter Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TemporalFilterSettings|object|false|none|none|

<h2 id="tocS_H265FlickerAq">H265FlickerAq</h2>
<!-- backwards compatibility -->
<a id="schemah265flickeraq"></a>
<a id="schema_H265FlickerAq"></a>
<a id="tocSh265flickeraq"></a>
<a id="tocsh265flickeraq"></a>

```json
"DISABLED"
```

H265 Flicker Aq

<h2 id="tocS_H265GopSizeUnits">H265GopSizeUnits</h2>
<!-- backwards compatibility -->
<a id="schemah265gopsizeunits"></a>
<a id="schema_H265GopSizeUnits"></a>
<a id="tocSh265gopsizeunits"></a>
<a id="tocsh265gopsizeunits"></a>

```json
"FRAMES"
```

H265 Gop Size Units

<h2 id="tocS_H265Level">H265Level</h2>
<!-- backwards compatibility -->
<a id="schemah265level"></a>
<a id="schema_H265Level"></a>
<a id="tocSh265level"></a>
<a id="tocsh265level"></a>

```json
"H265_LEVEL_1"
```

H265 Level

<h2 id="tocS_H265LookAheadRateControl">H265LookAheadRateControl</h2>
<!-- backwards compatibility -->
<a id="schemah265lookaheadratecontrol"></a>
<a id="schema_H265LookAheadRateControl"></a>
<a id="tocSh265lookaheadratecontrol"></a>
<a id="tocsh265lookaheadratecontrol"></a>

```json
"HIGH"
```

H265 Look Ahead Rate Control

<h2 id="tocS_H265Profile">H265Profile</h2>
<!-- backwards compatibility -->
<a id="schemah265profile"></a>
<a id="schema_H265Profile"></a>
<a id="tocSh265profile"></a>
<a id="tocsh265profile"></a>

```json
"MAIN"
```

H265 Profile

<h2 id="tocS_H265RateControlMode">H265RateControlMode</h2>
<!-- backwards compatibility -->
<a id="schemah265ratecontrolmode"></a>
<a id="schema_H265RateControlMode"></a>
<a id="tocSh265ratecontrolmode"></a>
<a id="tocsh265ratecontrolmode"></a>

```json
"CBR"
```

H265 Rate Control Mode

<h2 id="tocS_H265ScanType">H265ScanType</h2>
<!-- backwards compatibility -->
<a id="schemah265scantype"></a>
<a id="schema_H265ScanType"></a>
<a id="tocSh265scantype"></a>
<a id="tocsh265scantype"></a>

```json
"INTERLACED"
```

H265 Scan Type

<h2 id="tocS_H265SceneChangeDetect">H265SceneChangeDetect</h2>
<!-- backwards compatibility -->
<a id="schemah265scenechangedetect"></a>
<a id="schema_H265SceneChangeDetect"></a>
<a id="tocSh265scenechangedetect"></a>
<a id="tocsh265scenechangedetect"></a>

```json
"DISABLED"
```

H265 Scene Change Detect

<h2 id="tocS___integerMin100000Max40000000">__integerMin100000Max40000000</h2>
<!-- backwards compatibility -->
<a id="schema__integermin100000max40000000"></a>
<a id="schema___integerMin100000Max40000000"></a>
<a id="tocS__integermin100000max40000000"></a>
<a id="tocs__integermin100000max40000000"></a>

```json
100000
```

Placeholder documentation for __integerMin100000Max40000000

<h2 id="tocS___integerMin100000Max80000000">__integerMin100000Max80000000</h2>
<!-- backwards compatibility -->
<a id="schema__integermin100000max80000000"></a>
<a id="schema___integerMin100000Max80000000"></a>
<a id="tocS__integermin100000max80000000"></a>
<a id="tocs__integermin100000max80000000"></a>

```json
100000
```

Placeholder documentation for __integerMin100000Max80000000

<h2 id="tocS___integerMin1Max3003">__integerMin1Max3003</h2>
<!-- backwards compatibility -->
<a id="schema__integermin1max3003"></a>
<a id="schema___integerMin1Max3003"></a>
<a id="tocS__integermin1max3003"></a>
<a id="tocs__integermin1max3003"></a>

```json
1
```

Placeholder documentation for __integerMin1Max3003

<h2 id="tocS___integerMin1Max16">__integerMin1Max16</h2>
<!-- backwards compatibility -->
<a id="schema__integermin1max16"></a>
<a id="schema___integerMin1Max16"></a>
<a id="tocS__integermin1max16"></a>
<a id="tocs__integermin1max16"></a>

```json
1
```

Placeholder documentation for __integerMin1Max16

<h2 id="tocS_H265Tier">H265Tier</h2>
<!-- backwards compatibility -->
<a id="schemah265tier"></a>
<a id="schema_H265Tier"></a>
<a id="tocSh265tier"></a>
<a id="tocsh265tier"></a>

```json
"HIGH"
```

H265 Tier

<h2 id="tocS_H265TimecodeInsertionBehavior">H265TimecodeInsertionBehavior</h2>
<!-- backwards compatibility -->
<a id="schemah265timecodeinsertionbehavior"></a>
<a id="schema_H265TimecodeInsertionBehavior"></a>
<a id="tocSh265timecodeinsertionbehavior"></a>
<a id="tocsh265timecodeinsertionbehavior"></a>

```json
"DISABLED"
```

H265 Timecode Insertion Behavior

<h2 id="tocS_H265Settings">H265Settings</h2>
<!-- backwards compatibility -->
<a id="schemah265settings"></a>
<a id="schema_H265Settings"></a>
<a id="tocSh265settings"></a>
<a id="tocsh265settings"></a>

```json
{
  "AdaptiveQuantization": {},
  "AfdSignaling": {},
  "AlternativeTransferFunction": {},
  "Bitrate": {},
  "BufSize": {},
  "ColorMetadata": {},
  "ColorSpaceSettings": {
    "ColorSpacePassthroughSettings": {},
    "DolbyVision81Settings": {},
    "Hdr10Settings": {
      "MaxCll": {},
      "MaxFall": {}
    },
    "Rec601Settings": {},
    "Rec709Settings": {}
  },
  "FilterSettings": {
    "TemporalFilterSettings": {
      "PostFilterSharpening": {},
      "Strength": {}
    }
  },
  "FixedAfd": {},
  "FlickerAq": {},
  "FramerateDenominator": {},
  "FramerateNumerator": {},
  "GopClosedCadence": {},
  "GopSize": {},
  "GopSizeUnits": {},
  "Level": {},
  "LookAheadRateControl": {},
  "MaxBitrate": {},
  "MinIInterval": {},
  "ParDenominator": {},
  "ParNumerator": {},
  "Profile": {},
  "QvbrQualityLevel": {},
  "RateControlMode": {},
  "ScanType": {},
  "SceneChangeDetect": {},
  "Slices": {},
  "Tier": {},
  "TimecodeInsertion": {},
  "TimecodeBurninSettings": {
    "FontSize": {},
    "Position": {},
    "Prefix": {}
  }
}
```

H265 Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdaptiveQuantization|object|false|none|none|
|AfdSignaling|object|false|none|none|
|AlternativeTransferFunction|object|false|none|none|
|Bitrate|object|false|none|none|
|BufSize|object|false|none|none|
|ColorMetadata|object|false|none|none|
|ColorSpaceSettings|object|false|none|none|
|FilterSettings|object|false|none|none|
|FixedAfd|object|false|none|none|
|FlickerAq|object|false|none|none|
|FramerateDenominator|object|true|none|none|
|FramerateNumerator|object|true|none|none|
|GopClosedCadence|object|false|none|none|
|GopSize|object|false|none|none|
|GopSizeUnits|object|false|none|none|
|Level|object|false|none|none|
|LookAheadRateControl|object|false|none|none|
|MaxBitrate|object|false|none|none|
|MinIInterval|object|false|none|none|
|ParDenominator|object|false|none|none|
|ParNumerator|object|false|none|none|
|Profile|object|false|none|none|
|QvbrQualityLevel|object|false|none|none|
|RateControlMode|object|false|none|none|
|ScanType|object|false|none|none|
|SceneChangeDetect|object|false|none|none|
|Slices|object|false|none|none|
|Tier|object|false|none|none|
|TimecodeInsertion|object|false|none|none|
|TimecodeBurninSettings|object|false|none|none|

<h2 id="tocS___integerMin0Max32768">__integerMin0Max32768</h2>
<!-- backwards compatibility -->
<a id="schema__integermin0max32768"></a>
<a id="schema___integerMin0Max32768"></a>
<a id="tocS__integermin0max32768"></a>
<a id="tocs__integermin0max32768"></a>

```json
0
```

Placeholder documentation for __integerMin0Max32768

<h2 id="tocS_HlsAdMarkers">HlsAdMarkers</h2>
<!-- backwards compatibility -->
<a id="schemahlsadmarkers"></a>
<a id="schema_HlsAdMarkers"></a>
<a id="tocShlsadmarkers"></a>
<a id="tocshlsadmarkers"></a>

```json
"ADOBE"
```

Hls Ad Markers

<h2 id="tocS_HlsAkamaiHttpTransferMode">HlsAkamaiHttpTransferMode</h2>
<!-- backwards compatibility -->
<a id="schemahlsakamaihttptransfermode"></a>
<a id="schema_HlsAkamaiHttpTransferMode"></a>
<a id="tocShlsakamaihttptransfermode"></a>
<a id="tocshlsakamaihttptransfermode"></a>

```json
"CHUNKED"
```

Hls Akamai Http Transfer Mode

<h2 id="tocS___integerMin0Max600">__integerMin0Max600</h2>
<!-- backwards compatibility -->
<a id="schema__integermin0max600"></a>
<a id="schema___integerMin0Max600"></a>
<a id="tocS__integermin0max600"></a>
<a id="tocs__integermin0max600"></a>

```json
0
```

Placeholder documentation for __integerMin0Max600

<h2 id="tocS___integerMin0Max15">__integerMin0Max15</h2>
<!-- backwards compatibility -->
<a id="schema__integermin0max15"></a>
<a id="schema___integerMin0Max15"></a>
<a id="tocS__integermin0max15"></a>
<a id="tocs__integermin0max15"></a>

```json
0
```

Placeholder documentation for __integerMin0Max15

<h2 id="tocS_HlsAkamaiSettings">HlsAkamaiSettings</h2>
<!-- backwards compatibility -->
<a id="schemahlsakamaisettings"></a>
<a id="schema_HlsAkamaiSettings"></a>
<a id="tocShlsakamaisettings"></a>
<a id="tocshlsakamaisettings"></a>

```json
{
  "ConnectionRetryInterval": {},
  "FilecacheDuration": {},
  "HttpTransferMode": {},
  "NumRetries": {},
  "RestartDelay": {},
  "Salt": {},
  "Token": {}
}
```

Hls Akamai Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectionRetryInterval|object|false|none|none|
|FilecacheDuration|object|false|none|none|
|HttpTransferMode|object|false|none|none|
|NumRetries|object|false|none|none|
|RestartDelay|object|false|none|none|
|Salt|object|false|none|none|
|Token|object|false|none|none|

<h2 id="tocS_HlsBasicPutSettings">HlsBasicPutSettings</h2>
<!-- backwards compatibility -->
<a id="schemahlsbasicputsettings"></a>
<a id="schema_HlsBasicPutSettings"></a>
<a id="tocShlsbasicputsettings"></a>
<a id="tocshlsbasicputsettings"></a>

```json
{
  "ConnectionRetryInterval": {},
  "FilecacheDuration": {},
  "NumRetries": {},
  "RestartDelay": {}
}
```

Hls Basic Put Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectionRetryInterval|object|false|none|none|
|FilecacheDuration|object|false|none|none|
|NumRetries|object|false|none|none|
|RestartDelay|object|false|none|none|

<h2 id="tocS_HlsCaptionLanguageSetting">HlsCaptionLanguageSetting</h2>
<!-- backwards compatibility -->
<a id="schemahlscaptionlanguagesetting"></a>
<a id="schema_HlsCaptionLanguageSetting"></a>
<a id="tocShlscaptionlanguagesetting"></a>
<a id="tocshlscaptionlanguagesetting"></a>

```json
"INSERT"
```

Hls Caption Language Setting

<h2 id="tocS_HlsMediaStoreSettings">HlsMediaStoreSettings</h2>
<!-- backwards compatibility -->
<a id="schemahlsmediastoresettings"></a>
<a id="schema_HlsMediaStoreSettings"></a>
<a id="tocShlsmediastoresettings"></a>
<a id="tocshlsmediastoresettings"></a>

```json
{
  "ConnectionRetryInterval": {},
  "FilecacheDuration": {},
  "MediaStoreStorageClass": {},
  "NumRetries": {},
  "RestartDelay": {}
}
```

Hls Media Store Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectionRetryInterval|object|false|none|none|
|FilecacheDuration|object|false|none|none|
|MediaStoreStorageClass|object|false|none|none|
|NumRetries|object|false|none|none|
|RestartDelay|object|false|none|none|

<h2 id="tocS_HlsS3Settings">HlsS3Settings</h2>
<!-- backwards compatibility -->
<a id="schemahlss3settings"></a>
<a id="schema_HlsS3Settings"></a>
<a id="tocShlss3settings"></a>
<a id="tocshlss3settings"></a>

```json
{
  "CannedAcl": {}
}
```

Hls S3 Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CannedAcl|object|false|none|none|

<h2 id="tocS_HlsWebdavSettings">HlsWebdavSettings</h2>
<!-- backwards compatibility -->
<a id="schemahlswebdavsettings"></a>
<a id="schema_HlsWebdavSettings"></a>
<a id="tocShlswebdavsettings"></a>
<a id="tocshlswebdavsettings"></a>

```json
{
  "ConnectionRetryInterval": {},
  "FilecacheDuration": {},
  "HttpTransferMode": {},
  "NumRetries": {},
  "RestartDelay": {}
}
```

Hls Webdav Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectionRetryInterval|object|false|none|none|
|FilecacheDuration|object|false|none|none|
|HttpTransferMode|object|false|none|none|
|NumRetries|object|false|none|none|
|RestartDelay|object|false|none|none|

<h2 id="tocS_HlsCdnSettings">HlsCdnSettings</h2>
<!-- backwards compatibility -->
<a id="schemahlscdnsettings"></a>
<a id="schema_HlsCdnSettings"></a>
<a id="tocShlscdnsettings"></a>
<a id="tocshlscdnsettings"></a>

```json
{
  "HlsAkamaiSettings": {
    "ConnectionRetryInterval": {},
    "FilecacheDuration": {},
    "HttpTransferMode": {},
    "NumRetries": {},
    "RestartDelay": {},
    "Salt": {},
    "Token": {}
  },
  "HlsBasicPutSettings": {
    "ConnectionRetryInterval": {},
    "FilecacheDuration": {},
    "NumRetries": {},
    "RestartDelay": {}
  },
  "HlsMediaStoreSettings": {
    "ConnectionRetryInterval": {},
    "FilecacheDuration": {},
    "MediaStoreStorageClass": {},
    "NumRetries": {},
    "RestartDelay": {}
  },
  "HlsS3Settings": {
    "CannedAcl": {}
  },
  "HlsWebdavSettings": {
    "ConnectionRetryInterval": {},
    "FilecacheDuration": {},
    "HttpTransferMode": {},
    "NumRetries": {},
    "RestartDelay": {}
  }
}
```

Hls Cdn Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HlsAkamaiSettings|object|false|none|none|
|HlsBasicPutSettings|object|false|none|none|
|HlsMediaStoreSettings|object|false|none|none|
|HlsS3Settings|object|false|none|none|
|HlsWebdavSettings|object|false|none|none|

<h2 id="tocS_HlsClientCache">HlsClientCache</h2>
<!-- backwards compatibility -->
<a id="schemahlsclientcache"></a>
<a id="schema_HlsClientCache"></a>
<a id="tocShlsclientcache"></a>
<a id="tocshlsclientcache"></a>

```json
"DISABLED"
```

Hls Client Cache

<h2 id="tocS_HlsCodecSpecification">HlsCodecSpecification</h2>
<!-- backwards compatibility -->
<a id="schemahlscodecspecification"></a>
<a id="schema_HlsCodecSpecification"></a>
<a id="tocShlscodecspecification"></a>
<a id="tocshlscodecspecification"></a>

```json
"RFC_4281"
```

Hls Codec Specification

<h2 id="tocS_HlsDirectoryStructure">HlsDirectoryStructure</h2>
<!-- backwards compatibility -->
<a id="schemahlsdirectorystructure"></a>
<a id="schema_HlsDirectoryStructure"></a>
<a id="tocShlsdirectorystructure"></a>
<a id="tocshlsdirectorystructure"></a>

```json
"SINGLE_DIRECTORY"
```

Hls Directory Structure

<h2 id="tocS_HlsDiscontinuityTags">HlsDiscontinuityTags</h2>
<!-- backwards compatibility -->
<a id="schemahlsdiscontinuitytags"></a>
<a id="schema_HlsDiscontinuityTags"></a>
<a id="tocShlsdiscontinuitytags"></a>
<a id="tocshlsdiscontinuitytags"></a>

```json
"INSERT"
```

Hls Discontinuity Tags

<h2 id="tocS_HlsEncryptionType">HlsEncryptionType</h2>
<!-- backwards compatibility -->
<a id="schemahlsencryptiontype"></a>
<a id="schema_HlsEncryptionType"></a>
<a id="tocShlsencryptiontype"></a>
<a id="tocshlsencryptiontype"></a>

```json
"AES128"
```

Hls Encryption Type

<h2 id="tocS___listOfHlsAdMarkers">__listOfHlsAdMarkers</h2>
<!-- backwards compatibility -->
<a id="schema__listofhlsadmarkers"></a>
<a id="schema___listOfHlsAdMarkers"></a>
<a id="tocS__listofhlsadmarkers"></a>
<a id="tocs__listofhlsadmarkers"></a>

```json
[
  "ADOBE"
]
```

Placeholder documentation for __listOfHlsAdMarkers

<h2 id="tocS___listOfCaptionLanguageMapping">__listOfCaptionLanguageMapping</h2>
<!-- backwards compatibility -->
<a id="schema__listofcaptionlanguagemapping"></a>
<a id="schema___listOfCaptionLanguageMapping"></a>
<a id="tocS__listofcaptionlanguagemapping"></a>
<a id="tocs__listofcaptionlanguagemapping"></a>

```json
[
  {
    "CaptionChannel": {},
    "LanguageCode": {},
    "LanguageDescription": {}
  }
]
```

Placeholder documentation for __listOfCaptionLanguageMapping

<h2 id="tocS___stringMin32Max32">__stringMin32Max32</h2>
<!-- backwards compatibility -->
<a id="schema__stringmin32max32"></a>
<a id="schema___stringMin32Max32"></a>
<a id="tocS__stringmin32max32"></a>
<a id="tocs__stringmin32max32"></a>

```json
"stringstringstringstringstringst"
```

Placeholder documentation for __stringMin32Max32

<h2 id="tocS_HlsId3SegmentTaggingState">HlsId3SegmentTaggingState</h2>
<!-- backwards compatibility -->
<a id="schemahlsid3segmenttaggingstate"></a>
<a id="schema_HlsId3SegmentTaggingState"></a>
<a id="tocShlsid3segmenttaggingstate"></a>
<a id="tocshlsid3segmenttaggingstate"></a>

```json
"DISABLED"
```

State of HLS ID3 Segment Tagging

<h2 id="tocS_IFrameOnlyPlaylistType">IFrameOnlyPlaylistType</h2>
<!-- backwards compatibility -->
<a id="schemaiframeonlyplaylisttype"></a>
<a id="schema_IFrameOnlyPlaylistType"></a>
<a id="tocSiframeonlyplaylisttype"></a>
<a id="tocsiframeonlyplaylisttype"></a>

```json
"DISABLED"
```

When set to "standard", an I-Frame only playlist will be written out for each video output in the output group. This I-Frame only playlist will contain byte range offsets pointing to the I-frame(s) in each segment.

<h2 id="tocS_HlsIncompleteSegmentBehavior">HlsIncompleteSegmentBehavior</h2>
<!-- backwards compatibility -->
<a id="schemahlsincompletesegmentbehavior"></a>
<a id="schema_HlsIncompleteSegmentBehavior"></a>
<a id="tocShlsincompletesegmentbehavior"></a>
<a id="tocshlsincompletesegmentbehavior"></a>

```json
"AUTO"
```

Hls Incomplete Segment Behavior

<h2 id="tocS___integerMin3">__integerMin3</h2>
<!-- backwards compatibility -->
<a id="schema__integermin3"></a>
<a id="schema___integerMin3"></a>
<a id="tocS__integermin3"></a>
<a id="tocs__integermin3"></a>

```json
3
```

Placeholder documentation for __integerMin3

<h2 id="tocS_InputLossActionForHlsOut">InputLossActionForHlsOut</h2>
<!-- backwards compatibility -->
<a id="schemainputlossactionforhlsout"></a>
<a id="schema_InputLossActionForHlsOut"></a>
<a id="tocSinputlossactionforhlsout"></a>
<a id="tocsinputlossactionforhlsout"></a>

```json
"EMIT_OUTPUT"
```

Input Loss Action For Hls Out

<h2 id="tocS_HlsIvInManifest">HlsIvInManifest</h2>
<!-- backwards compatibility -->
<a id="schemahlsivinmanifest"></a>
<a id="schema_HlsIvInManifest"></a>
<a id="tocShlsivinmanifest"></a>
<a id="tocshlsivinmanifest"></a>

```json
"EXCLUDE"
```

Hls Iv In Manifest

<h2 id="tocS_HlsIvSource">HlsIvSource</h2>
<!-- backwards compatibility -->
<a id="schemahlsivsource"></a>
<a id="schema_HlsIvSource"></a>
<a id="tocShlsivsource"></a>
<a id="tocshlsivsource"></a>

```json
"EXPLICIT"
```

Hls Iv Source

<h2 id="tocS_KeyProviderSettings">KeyProviderSettings</h2>
<!-- backwards compatibility -->
<a id="schemakeyprovidersettings"></a>
<a id="schema_KeyProviderSettings"></a>
<a id="tocSkeyprovidersettings"></a>
<a id="tocskeyprovidersettings"></a>

```json
{
  "StaticKeySettings": {
    "KeyProviderServer": {
      "PasswordParam": {},
      "Uri": {},
      "Username": {}
    },
    "StaticKeyValue": {}
  }
}
```

Key Provider Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StaticKeySettings|object|false|none|none|

<h2 id="tocS_HlsManifestCompression">HlsManifestCompression</h2>
<!-- backwards compatibility -->
<a id="schemahlsmanifestcompression"></a>
<a id="schema_HlsManifestCompression"></a>
<a id="tocShlsmanifestcompression"></a>
<a id="tocshlsmanifestcompression"></a>

```json
"GZIP"
```

Hls Manifest Compression

<h2 id="tocS_HlsManifestDurationFormat">HlsManifestDurationFormat</h2>
<!-- backwards compatibility -->
<a id="schemahlsmanifestdurationformat"></a>
<a id="schema_HlsManifestDurationFormat"></a>
<a id="tocShlsmanifestdurationformat"></a>
<a id="tocshlsmanifestdurationformat"></a>

```json
"FLOATING_POINT"
```

Hls Manifest Duration Format

<h2 id="tocS_HlsMode">HlsMode</h2>
<!-- backwards compatibility -->
<a id="schemahlsmode"></a>
<a id="schema_HlsMode"></a>
<a id="tocShlsmode"></a>
<a id="tocshlsmode"></a>

```json
"LIVE"
```

Hls Mode

<h2 id="tocS_HlsOutputSelection">HlsOutputSelection</h2>
<!-- backwards compatibility -->
<a id="schemahlsoutputselection"></a>
<a id="schema_HlsOutputSelection"></a>
<a id="tocShlsoutputselection"></a>
<a id="tocshlsoutputselection"></a>

```json
"MANIFESTS_AND_SEGMENTS"
```

Hls Output Selection

<h2 id="tocS_HlsProgramDateTime">HlsProgramDateTime</h2>
<!-- backwards compatibility -->
<a id="schemahlsprogramdatetime"></a>
<a id="schema_HlsProgramDateTime"></a>
<a id="tocShlsprogramdatetime"></a>
<a id="tocshlsprogramdatetime"></a>

```json
"EXCLUDE"
```

Hls Program Date Time

<h2 id="tocS_HlsProgramDateTimeClock">HlsProgramDateTimeClock</h2>
<!-- backwards compatibility -->
<a id="schemahlsprogramdatetimeclock"></a>
<a id="schema_HlsProgramDateTimeClock"></a>
<a id="tocShlsprogramdatetimeclock"></a>
<a id="tocshlsprogramdatetimeclock"></a>

```json
"INITIALIZE_FROM_OUTPUT_TIMECODE"
```

Hls Program Date Time Clock

<h2 id="tocS___integerMin0Max3600">__integerMin0Max3600</h2>
<!-- backwards compatibility -->
<a id="schema__integermin0max3600"></a>
<a id="schema___integerMin0Max3600"></a>
<a id="tocS__integermin0max3600"></a>
<a id="tocs__integermin0max3600"></a>

```json
0
```

Placeholder documentation for __integerMin0Max3600

<h2 id="tocS_HlsRedundantManifest">HlsRedundantManifest</h2>
<!-- backwards compatibility -->
<a id="schemahlsredundantmanifest"></a>
<a id="schema_HlsRedundantManifest"></a>
<a id="tocShlsredundantmanifest"></a>
<a id="tocshlsredundantmanifest"></a>

```json
"DISABLED"
```

Hls Redundant Manifest

<h2 id="tocS_HlsSegmentationMode">HlsSegmentationMode</h2>
<!-- backwards compatibility -->
<a id="schemahlssegmentationmode"></a>
<a id="schema_HlsSegmentationMode"></a>
<a id="tocShlssegmentationmode"></a>
<a id="tocshlssegmentationmode"></a>

```json
"USE_INPUT_SEGMENTATION"
```

Hls Segmentation Mode

<h2 id="tocS_HlsStreamInfResolution">HlsStreamInfResolution</h2>
<!-- backwards compatibility -->
<a id="schemahlsstreaminfresolution"></a>
<a id="schema_HlsStreamInfResolution"></a>
<a id="tocShlsstreaminfresolution"></a>
<a id="tocshlsstreaminfresolution"></a>

```json
"EXCLUDE"
```

Hls Stream Inf Resolution

<h2 id="tocS_HlsTimedMetadataId3Frame">HlsTimedMetadataId3Frame</h2>
<!-- backwards compatibility -->
<a id="schemahlstimedmetadataid3frame"></a>
<a id="schema_HlsTimedMetadataId3Frame"></a>
<a id="tocShlstimedmetadataid3frame"></a>
<a id="tocshlstimedmetadataid3frame"></a>

```json
"NONE"
```

Hls Timed Metadata Id3 Frame

<h2 id="tocS_HlsTsFileMode">HlsTsFileMode</h2>
<!-- backwards compatibility -->
<a id="schemahlstsfilemode"></a>
<a id="schema_HlsTsFileMode"></a>
<a id="tocShlstsfilemode"></a>
<a id="tocshlstsfilemode"></a>

```json
"SEGMENTED_FILES"
```

Hls Ts File Mode

<h2 id="tocS_HlsGroupSettings">HlsGroupSettings</h2>
<!-- backwards compatibility -->
<a id="schemahlsgroupsettings"></a>
<a id="schema_HlsGroupSettings"></a>
<a id="tocShlsgroupsettings"></a>
<a id="tocshlsgroupsettings"></a>

```json
{
  "AdMarkers": {},
  "BaseUrlContent": {},
  "BaseUrlContent1": {},
  "BaseUrlManifest": {},
  "BaseUrlManifest1": {},
  "CaptionLanguageMappings": {},
  "CaptionLanguageSetting": {},
  "ClientCache": {},
  "CodecSpecification": {},
  "ConstantIv": {},
  "Destination": {
    "DestinationRefId": {}
  },
  "DirectoryStructure": {},
  "DiscontinuityTags": {},
  "EncryptionType": {},
  "HlsCdnSettings": {
    "HlsAkamaiSettings": {
      "ConnectionRetryInterval": {},
      "FilecacheDuration": {},
      "HttpTransferMode": {},
      "NumRetries": {},
      "RestartDelay": {},
      "Salt": {},
      "Token": {}
    },
    "HlsBasicPutSettings": {
      "ConnectionRetryInterval": {},
      "FilecacheDuration": {},
      "NumRetries": {},
      "RestartDelay": {}
    },
    "HlsMediaStoreSettings": {
      "ConnectionRetryInterval": {},
      "FilecacheDuration": {},
      "MediaStoreStorageClass": {},
      "NumRetries": {},
      "RestartDelay": {}
    },
    "HlsS3Settings": {
      "CannedAcl": {}
    },
    "HlsWebdavSettings": {
      "ConnectionRetryInterval": {},
      "FilecacheDuration": {},
      "HttpTransferMode": {},
      "NumRetries": {},
      "RestartDelay": {}
    }
  },
  "HlsId3SegmentTagging": {},
  "IFrameOnlyPlaylists": {},
  "IncompleteSegmentBehavior": {},
  "IndexNSegments": {},
  "InputLossAction": {},
  "IvInManifest": {},
  "IvSource": {},
  "KeepSegments": {},
  "KeyFormat": {},
  "KeyFormatVersions": {},
  "KeyProviderSettings": {
    "StaticKeySettings": {
      "KeyProviderServer": {
        "PasswordParam": {},
        "Uri": {},
        "Username": {}
      },
      "StaticKeyValue": {}
    }
  },
  "ManifestCompression": {},
  "ManifestDurationFormat": {},
  "MinSegmentLength": {},
  "Mode": {},
  "OutputSelection": {},
  "ProgramDateTime": {},
  "ProgramDateTimeClock": {},
  "ProgramDateTimePeriod": {},
  "RedundantManifest": {},
  "SegmentLength": {},
  "SegmentationMode": {},
  "SegmentsPerSubdirectory": {},
  "StreamInfResolution": {},
  "TimedMetadataId3Frame": {},
  "TimedMetadataId3Period": {},
  "TimestampDeltaMilliseconds": {},
  "TsFileMode": {}
}
```

Hls Group Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdMarkers|object|false|none|none|
|BaseUrlContent|object|false|none|none|
|BaseUrlContent1|object|false|none|none|
|BaseUrlManifest|object|false|none|none|
|BaseUrlManifest1|object|false|none|none|
|CaptionLanguageMappings|object|false|none|none|
|CaptionLanguageSetting|object|false|none|none|
|ClientCache|object|false|none|none|
|CodecSpecification|object|false|none|none|
|ConstantIv|object|false|none|none|
|Destination|object|true|none|none|
|DirectoryStructure|object|false|none|none|
|DiscontinuityTags|object|false|none|none|
|EncryptionType|object|false|none|none|
|HlsCdnSettings|object|false|none|none|
|HlsId3SegmentTagging|object|false|none|none|
|IFrameOnlyPlaylists|object|false|none|none|
|IncompleteSegmentBehavior|object|false|none|none|
|IndexNSegments|object|false|none|none|
|InputLossAction|object|false|none|none|
|IvInManifest|object|false|none|none|
|IvSource|object|false|none|none|
|KeepSegments|object|false|none|none|
|KeyFormat|object|false|none|none|
|KeyFormatVersions|object|false|none|none|
|KeyProviderSettings|object|false|none|none|
|ManifestCompression|object|false|none|none|
|ManifestDurationFormat|object|false|none|none|
|MinSegmentLength|object|false|none|none|
|Mode|object|false|none|none|
|OutputSelection|object|false|none|none|
|ProgramDateTime|object|false|none|none|
|ProgramDateTimeClock|object|false|none|none|
|ProgramDateTimePeriod|object|false|none|none|
|RedundantManifest|object|false|none|none|
|SegmentLength|object|false|none|none|
|SegmentationMode|object|false|none|none|
|SegmentsPerSubdirectory|object|false|none|none|
|StreamInfResolution|object|false|none|none|
|TimedMetadataId3Frame|object|false|none|none|
|TimedMetadataId3Period|object|false|none|none|
|TimestampDeltaMilliseconds|object|false|none|none|
|TsFileMode|object|false|none|none|

<h2 id="tocS_HlsH265PackagingType">HlsH265PackagingType</h2>
<!-- backwards compatibility -->
<a id="schemahlsh265packagingtype"></a>
<a id="schema_HlsH265PackagingType"></a>
<a id="tocShlsh265packagingtype"></a>
<a id="tocshlsh265packagingtype"></a>

```json
"HEV1"
```

Hls H265 Packaging Type

<h2 id="tocS_HlsId3SegmentTaggingScheduleActionSettings">HlsId3SegmentTaggingScheduleActionSettings</h2>
<!-- backwards compatibility -->
<a id="schemahlsid3segmenttaggingscheduleactionsettings"></a>
<a id="schema_HlsId3SegmentTaggingScheduleActionSettings"></a>
<a id="tocShlsid3segmenttaggingscheduleactionsettings"></a>
<a id="tocshlsid3segmenttaggingscheduleactionsettings"></a>

```json
{
  "Tag": {},
  "Id3": {}
}
```

Settings for the action to insert a user-defined ID3 tag in each HLS segment

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tag|object|false|none|none|
|Id3|object|false|none|none|

<h2 id="tocS_HlsScte35SourceType">HlsScte35SourceType</h2>
<!-- backwards compatibility -->
<a id="schemahlsscte35sourcetype"></a>
<a id="schema_HlsScte35SourceType"></a>
<a id="tocShlsscte35sourcetype"></a>
<a id="tocshlsscte35sourcetype"></a>

```json
"MANIFEST"
```

Hls Scte35 Source Type

<h2 id="tocS_HlsInputSettings">HlsInputSettings</h2>
<!-- backwards compatibility -->
<a id="schemahlsinputsettings"></a>
<a id="schema_HlsInputSettings"></a>
<a id="tocShlsinputsettings"></a>
<a id="tocshlsinputsettings"></a>

```json
{
  "Bandwidth": {},
  "BufferSegments": {},
  "Retries": {},
  "RetryInterval": {},
  "Scte35Source": {}
}
```

Hls Input Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bandwidth|object|false|none|none|
|BufferSegments|object|false|none|none|
|Retries|object|false|none|none|
|RetryInterval|object|false|none|none|
|Scte35Source|object|false|none|none|

<h2 id="tocS_HlsMediaStoreStorageClass">HlsMediaStoreStorageClass</h2>
<!-- backwards compatibility -->
<a id="schemahlsmediastorestorageclass"></a>
<a id="schema_HlsMediaStoreStorageClass"></a>
<a id="tocShlsmediastorestorageclass"></a>
<a id="tocshlsmediastorestorageclass"></a>

```json
"TEMPORAL"
```

Hls Media Store Storage Class

<h2 id="tocS_HlsSettings">HlsSettings</h2>
<!-- backwards compatibility -->
<a id="schemahlssettings"></a>
<a id="schema_HlsSettings"></a>
<a id="tocShlssettings"></a>
<a id="tocshlssettings"></a>

```json
{
  "AudioOnlyHlsSettings": {
    "AudioGroupId": {},
    "AudioOnlyImage": {
      "PasswordParam": {},
      "Uri": {},
      "Username": {}
    },
    "AudioTrackType": {},
    "SegmentType": {}
  },
  "Fmp4HlsSettings": {
    "AudioRenditionSets": {},
    "NielsenId3Behavior": {},
    "TimedMetadataBehavior": {}
  },
  "FrameCaptureHlsSettings": {},
  "StandardHlsSettings": {
    "AudioRenditionSets": {},
    "M3u8Settings": {
      "AudioFramesPerPes": {},
      "AudioPids": {},
      "EcmPid": {},
      "NielsenId3Behavior": {},
      "PatInterval": {},
      "PcrControl": {},
      "PcrPeriod": {},
      "PcrPid": {},
      "PmtInterval": {},
      "PmtPid": {},
      "ProgramNum": {},
      "Scte35Behavior": {},
      "Scte35Pid": {},
      "TimedMetadataBehavior": {},
      "TimedMetadataPid": {},
      "TransportStreamId": {},
      "VideoPid": {}
    }
  }
}
```

Hls Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AudioOnlyHlsSettings|object|false|none|none|
|Fmp4HlsSettings|object|false|none|none|
|FrameCaptureHlsSettings|object|false|none|none|
|StandardHlsSettings|object|false|none|none|

<h2 id="tocS_HlsOutputSettings">HlsOutputSettings</h2>
<!-- backwards compatibility -->
<a id="schemahlsoutputsettings"></a>
<a id="schema_HlsOutputSettings"></a>
<a id="tocShlsoutputsettings"></a>
<a id="tocshlsoutputsettings"></a>

```json
{
  "H265PackagingType": {},
  "HlsSettings": {
    "AudioOnlyHlsSettings": {
      "AudioGroupId": {},
      "AudioOnlyImage": {
        "PasswordParam": {},
        "Uri": {},
        "Username": {}
      },
      "AudioTrackType": {},
      "SegmentType": {}
    },
    "Fmp4HlsSettings": {
      "AudioRenditionSets": {},
      "NielsenId3Behavior": {},
      "TimedMetadataBehavior": {}
    },
    "FrameCaptureHlsSettings": {},
    "StandardHlsSettings": {
      "AudioRenditionSets": {},
      "M3u8Settings": {
        "AudioFramesPerPes": {},
        "AudioPids": {},
        "EcmPid": {},
        "NielsenId3Behavior": {},
        "PatInterval": {},
        "PcrControl": {},
        "PcrPeriod": {},
        "PcrPid": {},
        "PmtInterval": {},
        "PmtPid": {},
        "ProgramNum": {},
        "Scte35Behavior": {},
        "Scte35Pid": {},
        "TimedMetadataBehavior": {},
        "TimedMetadataPid": {},
        "TransportStreamId": {},
        "VideoPid": {}
      }
    }
  },
  "NameModifier": {},
  "SegmentModifier": {}
}
```

Hls Output Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|H265PackagingType|object|false|none|none|
|HlsSettings|object|true|none|none|
|NameModifier|object|false|none|none|
|SegmentModifier|object|false|none|none|

<h2 id="tocS_StandardHlsSettings">StandardHlsSettings</h2>
<!-- backwards compatibility -->
<a id="schemastandardhlssettings"></a>
<a id="schema_StandardHlsSettings"></a>
<a id="tocSstandardhlssettings"></a>
<a id="tocsstandardhlssettings"></a>

```json
{
  "AudioRenditionSets": {},
  "M3u8Settings": {
    "AudioFramesPerPes": {},
    "AudioPids": {},
    "EcmPid": {},
    "NielsenId3Behavior": {},
    "PatInterval": {},
    "PcrControl": {},
    "PcrPeriod": {},
    "PcrPid": {},
    "PmtInterval": {},
    "PmtPid": {},
    "ProgramNum": {},
    "Scte35Behavior": {},
    "Scte35Pid": {},
    "TimedMetadataBehavior": {},
    "TimedMetadataPid": {},
    "TransportStreamId": {},
    "VideoPid": {}
  }
}
```

Standard Hls Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AudioRenditionSets|object|false|none|none|
|M3u8Settings|object|true|none|none|

<h2 id="tocS_HlsTimedMetadataScheduleActionSettings">HlsTimedMetadataScheduleActionSettings</h2>
<!-- backwards compatibility -->
<a id="schemahlstimedmetadatascheduleactionsettings"></a>
<a id="schema_HlsTimedMetadataScheduleActionSettings"></a>
<a id="tocShlstimedmetadatascheduleactionsettings"></a>
<a id="tocshlstimedmetadatascheduleactionsettings"></a>

```json
{
  "Id3": {}
}
```

Settings for the action to emit HLS metadata

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id3|object|true|none|none|

<h2 id="tocS_HlsWebdavHttpTransferMode">HlsWebdavHttpTransferMode</h2>
<!-- backwards compatibility -->
<a id="schemahlswebdavhttptransfermode"></a>
<a id="schema_HlsWebdavHttpTransferMode"></a>
<a id="tocShlswebdavhttptransfermode"></a>
<a id="tocshlswebdavhttptransfermode"></a>

```json
"CHUNKED"
```

Hls Webdav Http Transfer Mode

<h2 id="tocS_HtmlMotionGraphicsSettings">HtmlMotionGraphicsSettings</h2>
<!-- backwards compatibility -->
<a id="schemahtmlmotiongraphicssettings"></a>
<a id="schema_HtmlMotionGraphicsSettings"></a>
<a id="tocShtmlmotiongraphicssettings"></a>
<a id="tocshtmlmotiongraphicssettings"></a>

```json
{}
```

Html Motion Graphics Settings

<h2 id="tocS_ImmediateModeScheduleActionStartSettings">ImmediateModeScheduleActionStartSettings</h2>
<!-- backwards compatibility -->
<a id="schemaimmediatemodescheduleactionstartsettings"></a>
<a id="schema_ImmediateModeScheduleActionStartSettings"></a>
<a id="tocSimmediatemodescheduleactionstartsettings"></a>
<a id="tocsimmediatemodescheduleactionstartsettings"></a>

```json
{}
```

Settings to configure an action so that it occurs as soon as possible.

<h2 id="tocS_InputSettings">InputSettings</h2>
<!-- backwards compatibility -->
<a id="schemainputsettings"></a>
<a id="schema_InputSettings"></a>
<a id="tocSinputsettings"></a>
<a id="tocsinputsettings"></a>

```json
{
  "AudioSelectors": {},
  "CaptionSelectors": {},
  "DeblockFilter": {},
  "DenoiseFilter": {},
  "FilterStrength": {},
  "InputFilter": {},
  "NetworkInputSettings": {
    "HlsInputSettings": {
      "Bandwidth": {},
      "BufferSegments": {},
      "Retries": {},
      "RetryInterval": {},
      "Scte35Source": {}
    },
    "ServerValidation": {}
  },
  "Scte35Pid": {},
  "Smpte2038DataPreference": {},
  "SourceEndBehavior": {},
  "VideoSelector": {
    "ColorSpace": {},
    "ColorSpaceSettings": {
      "Hdr10Settings": {
        "MaxCll": {},
        "MaxFall": {}
      }
    },
    "ColorSpaceUsage": {},
    "SelectorSettings": {
      "VideoSelectorPid": {
        "Pid": {}
      },
      "VideoSelectorProgramId": {
        "ProgramId": {}
      }
    }
  }
}
```

Live Event input parameters. There can be multiple inputs in a single Live Event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AudioSelectors|object|false|none|none|
|CaptionSelectors|object|false|none|none|
|DeblockFilter|object|false|none|none|
|DenoiseFilter|object|false|none|none|
|FilterStrength|object|false|none|none|
|InputFilter|object|false|none|none|
|NetworkInputSettings|object|false|none|none|
|Scte35Pid|object|false|none|none|
|Smpte2038DataPreference|object|false|none|none|
|SourceEndBehavior|object|false|none|none|
|VideoSelector|object|false|none|none|

<h2 id="tocS___integerMinNegative60Max6">__integerMinNegative60Max6</h2>
<!-- backwards compatibility -->
<a id="schema__integerminnegative60max6"></a>
<a id="schema___integerMinNegative60Max6"></a>
<a id="tocS__integerminnegative60max6"></a>
<a id="tocs__integerminnegative60max6"></a>

```json
-60
```

Placeholder documentation for __integerMinNegative60Max6

<h2 id="tocS_InputChannelLevel">InputChannelLevel</h2>
<!-- backwards compatibility -->
<a id="schemainputchannellevel"></a>
<a id="schema_InputChannelLevel"></a>
<a id="tocSinputchannellevel"></a>
<a id="tocsinputchannellevel"></a>

```json
{
  "Gain": {},
  "InputChannel": {}
}
```

Input Channel Level

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Gain|object|true|none|none|
|InputChannel|object|true|none|none|

<h2 id="tocS_InputTimecodeSource">InputTimecodeSource</h2>
<!-- backwards compatibility -->
<a id="schemainputtimecodesource"></a>
<a id="schema_InputTimecodeSource"></a>
<a id="tocSinputtimecodesource"></a>
<a id="tocsinputtimecodesource"></a>

```json
"ZEROBASED"
```

Documentation update needed

<h2 id="tocS_StartTimecode">StartTimecode</h2>
<!-- backwards compatibility -->
<a id="schemastarttimecode"></a>
<a id="schema_StartTimecode"></a>
<a id="tocSstarttimecode"></a>
<a id="tocsstarttimecode"></a>

```json
{
  "Timecode": {}
}
```

Settings to identify the start of the clip.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Timecode|object|false|none|none|

<h2 id="tocS_StopTimecode">StopTimecode</h2>
<!-- backwards compatibility -->
<a id="schemastoptimecode"></a>
<a id="schema_StopTimecode"></a>
<a id="tocSstoptimecode"></a>
<a id="tocsstoptimecode"></a>

```json
{
  "LastFrameClippingBehavior": {},
  "Timecode": {}
}
```

Settings to identify the end of the clip.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LastFrameClippingBehavior|object|false|none|none|
|Timecode|object|false|none|none|

<h2 id="tocS_InputClippingSettings">InputClippingSettings</h2>
<!-- backwards compatibility -->
<a id="schemainputclippingsettings"></a>
<a id="schema_InputClippingSettings"></a>
<a id="tocSinputclippingsettings"></a>
<a id="tocsinputclippingsettings"></a>

```json
{
  "InputTimecodeSource": {},
  "StartTimecode": {
    "Timecode": {}
  },
  "StopTimecode": {
    "LastFrameClippingBehavior": {},
    "Timecode": {}
  }
}
```

Settings to let you create a clip of the file input, in order to set up the input to ingest only a portion of the file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InputTimecodeSource|object|true|none|none|
|StartTimecode|object|false|none|none|
|StopTimecode|object|false|none|none|

<h2 id="tocS_InputDeblockFilter">InputDeblockFilter</h2>
<!-- backwards compatibility -->
<a id="schemainputdeblockfilter"></a>
<a id="schema_InputDeblockFilter"></a>
<a id="tocSinputdeblockfilter"></a>
<a id="tocsinputdeblockfilter"></a>

```json
"DISABLED"
```

Input Deblock Filter

<h2 id="tocS_InputDenoiseFilter">InputDenoiseFilter</h2>
<!-- backwards compatibility -->
<a id="schemainputdenoisefilter"></a>
<a id="schema_InputDenoiseFilter"></a>
<a id="tocSinputdenoisefilter"></a>
<a id="tocsinputdenoisefilter"></a>

```json
"DISABLED"
```

Input Denoise Filter

<h2 id="tocS_InputDestinationVpc">InputDestinationVpc</h2>
<!-- backwards compatibility -->
<a id="schemainputdestinationvpc"></a>
<a id="schema_InputDestinationVpc"></a>
<a id="tocSinputdestinationvpc"></a>
<a id="tocsinputdestinationvpc"></a>

```json
{
  "AvailabilityZone": {},
  "NetworkInterfaceId": {}
}
```

The properties for a VPC type input destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AvailabilityZone|object|false|none|none|
|NetworkInterfaceId|object|false|none|none|

<h2 id="tocS_InputDestination">InputDestination</h2>
<!-- backwards compatibility -->
<a id="schemainputdestination"></a>
<a id="schema_InputDestination"></a>
<a id="tocSinputdestination"></a>
<a id="tocsinputdestination"></a>

```json
{
  "Ip": {},
  "Port": {},
  "Url": {},
  "Vpc": {
    "AvailabilityZone": {},
    "NetworkInterfaceId": {}
  }
}
```

The settings for a PUSH type input.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Ip|object|false|none|none|
|Port|object|false|none|none|
|Url|object|false|none|none|
|Vpc|object|false|none|none|

<h2 id="tocS_InputDeviceActiveInput">InputDeviceActiveInput</h2>
<!-- backwards compatibility -->
<a id="schemainputdeviceactiveinput"></a>
<a id="schema_InputDeviceActiveInput"></a>
<a id="tocSinputdeviceactiveinput"></a>
<a id="tocsinputdeviceactiveinput"></a>

```json
"HDMI"
```

The source at the input device that is currently active.

<h2 id="tocS_InputDeviceConfigurableSettings">InputDeviceConfigurableSettings</h2>
<!-- backwards compatibility -->
<a id="schemainputdeviceconfigurablesettings"></a>
<a id="schema_InputDeviceConfigurableSettings"></a>
<a id="tocSinputdeviceconfigurablesettings"></a>
<a id="tocsinputdeviceconfigurablesettings"></a>

```json
{
  "ConfiguredInput": {},
  "MaxBitrate": {},
  "LatencyMs": {}
}
```

Configurable settings for the input device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfiguredInput|object|false|none|none|
|MaxBitrate|object|false|none|none|
|LatencyMs|object|false|none|none|

<h2 id="tocS_InputDeviceState">InputDeviceState</h2>
<!-- backwards compatibility -->
<a id="schemainputdevicestate"></a>
<a id="schema_InputDeviceState"></a>
<a id="tocSinputdevicestate"></a>
<a id="tocsinputdevicestate"></a>

```json
"IDLE"
```

The state of the input device.

<h2 id="tocS_InputDeviceScanType">InputDeviceScanType</h2>
<!-- backwards compatibility -->
<a id="schemainputdevicescantype"></a>
<a id="schema_InputDeviceScanType"></a>
<a id="tocSinputdevicescantype"></a>
<a id="tocsinputdevicescantype"></a>

```json
"INTERLACED"
```

The scan type of the video source.

<h2 id="tocS_InputDeviceIpScheme">InputDeviceIpScheme</h2>
<!-- backwards compatibility -->
<a id="schemainputdeviceipscheme"></a>
<a id="schema_InputDeviceIpScheme"></a>
<a id="tocSinputdeviceipscheme"></a>
<a id="tocsinputdeviceipscheme"></a>

```json
"STATIC"
```

Specifies whether the input device has been configured (outside of MediaLive) to use a dynamic IP address assignment (DHCP) or a static IP address.

<h2 id="tocS_InputDeviceSummary">InputDeviceSummary</h2>
<!-- backwards compatibility -->
<a id="schemainputdevicesummary"></a>
<a id="schema_InputDeviceSummary"></a>
<a id="tocSinputdevicesummary"></a>
<a id="tocsinputdevicesummary"></a>

```json
{
  "Arn": {},
  "ConnectionState": {},
  "DeviceSettingsSyncState": {},
  "DeviceUpdateStatus": {},
  "HdDeviceSettings": {
    "ActiveInput": {},
    "ConfiguredInput": {},
    "DeviceState": {},
    "Framerate": {},
    "Height": {},
    "MaxBitrate": {},
    "ScanType": {},
    "Width": {},
    "LatencyMs": {}
  },
  "Id": {},
  "MacAddress": {},
  "Name": {},
  "NetworkSettings": {
    "DnsAddresses": {},
    "Gateway": {},
    "IpAddress": {},
    "IpScheme": {},
    "SubnetMask": {}
  },
  "SerialNumber": {},
  "Type": {},
  "UhdDeviceSettings": {
    "ActiveInput": {},
    "ConfiguredInput": {},
    "DeviceState": {},
    "Framerate": {},
    "Height": {},
    "MaxBitrate": {},
    "ScanType": {},
    "Width": {},
    "LatencyMs": {}
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Details of the input device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|ConnectionState|object|false|none|none|
|DeviceSettingsSyncState|object|false|none|none|
|DeviceUpdateStatus|object|false|none|none|
|HdDeviceSettings|object|false|none|none|
|Id|object|false|none|none|
|MacAddress|object|false|none|none|
|Name|object|false|none|none|
|NetworkSettings|object|false|none|none|
|SerialNumber|object|false|none|none|
|Type|object|false|none|none|
|UhdDeviceSettings|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_InputDeviceTransferType">InputDeviceTransferType</h2>
<!-- backwards compatibility -->
<a id="schemainputdevicetransfertype"></a>
<a id="schema_InputDeviceTransferType"></a>
<a id="tocSinputdevicetransfertype"></a>
<a id="tocsinputdevicetransfertype"></a>

```json
"OUTGOING"
```

The type of device transfer. INCOMING for an input device that is being transferred to you, OUTGOING for an input device that you are transferring to another AWS account.

<h2 id="tocS_InputFilter">InputFilter</h2>
<!-- backwards compatibility -->
<a id="schemainputfilter"></a>
<a id="schema_InputFilter"></a>
<a id="tocSinputfilter"></a>
<a id="tocsinputfilter"></a>

```json
"AUTO"
```

Input Filter

<h2 id="tocS_InputLossActionForMsSmoothOut">InputLossActionForMsSmoothOut</h2>
<!-- backwards compatibility -->
<a id="schemainputlossactionformssmoothout"></a>
<a id="schema_InputLossActionForMsSmoothOut"></a>
<a id="tocSinputlossactionformssmoothout"></a>
<a id="tocsinputlossactionformssmoothout"></a>

```json
"EMIT_OUTPUT"
```

Input Loss Action For Ms Smooth Out

<h2 id="tocS_InputLossActionForRtmpOut">InputLossActionForRtmpOut</h2>
<!-- backwards compatibility -->
<a id="schemainputlossactionforrtmpout"></a>
<a id="schema_InputLossActionForRtmpOut"></a>
<a id="tocSinputlossactionforrtmpout"></a>
<a id="tocsinputlossactionforrtmpout"></a>

```json
"EMIT_OUTPUT"
```

Input Loss Action For Rtmp Out

<h2 id="tocS_InputLossActionForUdpOut">InputLossActionForUdpOut</h2>
<!-- backwards compatibility -->
<a id="schemainputlossactionforudpout"></a>
<a id="schema_InputLossActionForUdpOut"></a>
<a id="tocSinputlossactionforudpout"></a>
<a id="tocsinputlossactionforudpout"></a>

```json
"DROP_PROGRAM"
```

Input Loss Action For Udp Out

<h2 id="tocS___integerMin0Max1000000">__integerMin0Max1000000</h2>
<!-- backwards compatibility -->
<a id="schema__integermin0max1000000"></a>
<a id="schema___integerMin0Max1000000"></a>
<a id="tocS__integermin0max1000000"></a>
<a id="tocs__integermin0max1000000"></a>

```json
0
```

Placeholder documentation for __integerMin0Max1000000

<h2 id="tocS___stringMin6Max6">__stringMin6Max6</h2>
<!-- backwards compatibility -->
<a id="schema__stringmin6max6"></a>
<a id="schema___stringMin6Max6"></a>
<a id="tocS__stringmin6max6"></a>
<a id="tocs__stringmin6max6"></a>

```json
"string"
```

Placeholder documentation for __stringMin6Max6

<h2 id="tocS_InputLossImageType">InputLossImageType</h2>
<!-- backwards compatibility -->
<a id="schemainputlossimagetype"></a>
<a id="schema_InputLossImageType"></a>
<a id="tocSinputlossimagetype"></a>
<a id="tocsinputlossimagetype"></a>

```json
"COLOR"
```

Input Loss Image Type

<h2 id="tocS___integerMin100">__integerMin100</h2>
<!-- backwards compatibility -->
<a id="schema__integermin100"></a>
<a id="schema___integerMin100"></a>
<a id="tocS__integermin100"></a>
<a id="tocs__integermin100"></a>

```json
100
```

Placeholder documentation for __integerMin100

<h2 id="tocS_InputPrepareScheduleActionSettings">InputPrepareScheduleActionSettings</h2>
<!-- backwards compatibility -->
<a id="schemainputpreparescheduleactionsettings"></a>
<a id="schema_InputPrepareScheduleActionSettings"></a>
<a id="tocSinputpreparescheduleactionsettings"></a>
<a id="tocsinputpreparescheduleactionsettings"></a>

```json
{
  "InputAttachmentNameReference": {},
  "InputClippingSettings": {
    "InputTimecodeSource": {},
    "StartTimecode": {
      "Timecode": {}
    },
    "StopTimecode": {
      "LastFrameClippingBehavior": {},
      "Timecode": {}
    }
  },
  "UrlPath": {}
}
```

Action to prepare an input for a future immediate input switch.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InputAttachmentNameReference|object|false|none|none|
|InputClippingSettings|object|false|none|none|
|UrlPath|object|false|none|none|

<h2 id="tocS___listOfAudioSelector">__listOfAudioSelector</h2>
<!-- backwards compatibility -->
<a id="schema__listofaudioselector"></a>
<a id="schema___listOfAudioSelector"></a>
<a id="tocS__listofaudioselector"></a>
<a id="tocs__listofaudioselector"></a>

```json
[
  {
    "Name": {},
    "SelectorSettings": {
      "AudioHlsRenditionSelection": {
        "GroupId": {},
        "Name": {}
      },
      "AudioLanguageSelection": {
        "LanguageCode": {},
        "LanguageSelectionPolicy": {}
      },
      "AudioPidSelection": {
        "Pid": {}
      },
      "AudioTrackSelection": {
        "Tracks": {},
        "DolbyEDecode": {
          "ProgramSelection": {}
        }
      }
    }
  }
]
```

Placeholder documentation for __listOfAudioSelector

<h2 id="tocS___listOfCaptionSelector">__listOfCaptionSelector</h2>
<!-- backwards compatibility -->
<a id="schema__listofcaptionselector"></a>
<a id="schema___listOfCaptionSelector"></a>
<a id="tocS__listofcaptionselector"></a>
<a id="tocs__listofcaptionselector"></a>

```json
[
  {
    "LanguageCode": {},
    "Name": {},
    "SelectorSettings": {
      "AncillarySourceSettings": {
        "SourceAncillaryChannelNumber": {}
      },
      "AribSourceSettings": {},
      "DvbSubSourceSettings": {
        "OcrLanguage": {},
        "Pid": {}
      },
      "EmbeddedSourceSettings": {
        "Convert608To708": {},
        "Scte20Detection": {},
        "Source608ChannelNumber": {},
        "Source608TrackNumber": {}
      },
      "Scte20SourceSettings": {
        "Convert608To708": {},
        "Source608ChannelNumber": {}
      },
      "Scte27SourceSettings": {
        "OcrLanguage": {},
        "Pid": {}
      },
      "TeletextSourceSettings": {
        "OutputRectangle": {
          "Height": {},
          "LeftOffset": {},
          "TopOffset": {},
          "Width": {}
        },
        "PageNumber": {}
      }
    }
  }
]
```

Placeholder documentation for __listOfCaptionSelector

<h2 id="tocS_NetworkInputSettings">NetworkInputSettings</h2>
<!-- backwards compatibility -->
<a id="schemanetworkinputsettings"></a>
<a id="schema_NetworkInputSettings"></a>
<a id="tocSnetworkinputsettings"></a>
<a id="tocsnetworkinputsettings"></a>

```json
{
  "HlsInputSettings": {
    "Bandwidth": {},
    "BufferSegments": {},
    "Retries": {},
    "RetryInterval": {},
    "Scte35Source": {}
  },
  "ServerValidation": {}
}
```

Network source to transcode. Must be accessible to the Elemental Live node that is running the live event through a network connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HlsInputSettings|object|false|none|none|
|ServerValidation|object|false|none|none|

<h2 id="tocS___integerMin32Max8191">__integerMin32Max8191</h2>
<!-- backwards compatibility -->
<a id="schema__integermin32max8191"></a>
<a id="schema___integerMin32Max8191"></a>
<a id="tocS__integermin32max8191"></a>
<a id="tocs__integermin32max8191"></a>

```json
32
```

Placeholder documentation for __integerMin32Max8191

<h2 id="tocS_Smpte2038DataPreference">Smpte2038DataPreference</h2>
<!-- backwards compatibility -->
<a id="schemasmpte2038datapreference"></a>
<a id="schema_Smpte2038DataPreference"></a>
<a id="tocSsmpte2038datapreference"></a>
<a id="tocssmpte2038datapreference"></a>

```json
"IGNORE"
```

Smpte2038 Data Preference

<h2 id="tocS_InputSourceEndBehavior">InputSourceEndBehavior</h2>
<!-- backwards compatibility -->
<a id="schemainputsourceendbehavior"></a>
<a id="schema_InputSourceEndBehavior"></a>
<a id="tocSinputsourceendbehavior"></a>
<a id="tocsinputsourceendbehavior"></a>

```json
"CONTINUE"
```

Input Source End Behavior

<h2 id="tocS_VideoSelector">VideoSelector</h2>
<!-- backwards compatibility -->
<a id="schemavideoselector"></a>
<a id="schema_VideoSelector"></a>
<a id="tocSvideoselector"></a>
<a id="tocsvideoselector"></a>

```json
{
  "ColorSpace": {},
  "ColorSpaceSettings": {
    "Hdr10Settings": {
      "MaxCll": {},
      "MaxFall": {}
    }
  },
  "ColorSpaceUsage": {},
  "SelectorSettings": {
    "VideoSelectorPid": {
      "Pid": {}
    },
    "VideoSelectorProgramId": {
      "ProgramId": {}
    }
  }
}
```

Specifies a particular video stream within an input source. An input may have only a single video selector.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ColorSpace|object|false|none|none|
|ColorSpaceSettings|object|false|none|none|
|ColorSpaceUsage|object|false|none|none|
|SelectorSettings|object|false|none|none|

<h2 id="tocS_InputSource">InputSource</h2>
<!-- backwards compatibility -->
<a id="schemainputsource"></a>
<a id="schema_InputSource"></a>
<a id="tocSinputsource"></a>
<a id="tocsinputsource"></a>

```json
{
  "PasswordParam": {},
  "Url": {},
  "Username": {}
}
```

The settings for a PULL type input.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PasswordParam|object|false|none|none|
|Url|object|false|none|none|
|Username|object|false|none|none|

<h2 id="tocS_InputSwitchScheduleActionSettings">InputSwitchScheduleActionSettings</h2>
<!-- backwards compatibility -->
<a id="schemainputswitchscheduleactionsettings"></a>
<a id="schema_InputSwitchScheduleActionSettings"></a>
<a id="tocSinputswitchscheduleactionsettings"></a>
<a id="tocsinputswitchscheduleactionsettings"></a>

```json
{
  "InputAttachmentNameReference": {},
  "InputClippingSettings": {
    "InputTimecodeSource": {},
    "StartTimecode": {
      "Timecode": {}
    },
    "StopTimecode": {
      "LastFrameClippingBehavior": {},
      "Timecode": {}
    }
  },
  "UrlPath": {}
}
```

Settings for the "switch input" action: to switch from ingesting one input to ingesting another input.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InputAttachmentNameReference|object|true|none|none|
|InputClippingSettings|object|false|none|none|
|UrlPath|object|false|none|none|

<h2 id="tocS_InputWhitelistRule">InputWhitelistRule</h2>
<!-- backwards compatibility -->
<a id="schemainputwhitelistrule"></a>
<a id="schema_InputWhitelistRule"></a>
<a id="tocSinputwhitelistrule"></a>
<a id="tocsinputwhitelistrule"></a>

```json
{
  "Cidr": {}
}
```

Whitelist rule

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Cidr|object|false|none|none|

<h2 id="tocS_StaticKeySettings">StaticKeySettings</h2>
<!-- backwards compatibility -->
<a id="schemastatickeysettings"></a>
<a id="schema_StaticKeySettings"></a>
<a id="tocSstatickeysettings"></a>
<a id="tocsstatickeysettings"></a>

```json
{
  "KeyProviderServer": {
    "PasswordParam": {},
    "Uri": {},
    "Username": {}
  },
  "StaticKeyValue": {}
}
```

Static Key Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyProviderServer|object|false|none|none|
|StaticKeyValue|object|true|none|none|

<h2 id="tocS_LastFrameClippingBehavior">LastFrameClippingBehavior</h2>
<!-- backwards compatibility -->
<a id="schemalastframeclippingbehavior"></a>
<a id="schema_LastFrameClippingBehavior"></a>
<a id="tocSlastframeclippingbehavior"></a>
<a id="tocslastframeclippingbehavior"></a>

```json
"EXCLUDE_LAST_FRAME"
```

If you specify a StopTimecode in an input (in order to clip the file), you can specify if you want the clip to exclude (the default) or include the frame specified by the timecode.

<h2 id="tocS_ListChannelsRequest">ListChannelsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistchannelsrequest"></a>
<a id="schema_ListChannelsRequest"></a>
<a id="tocSlistchannelsrequest"></a>
<a id="tocslistchannelsrequest"></a>

```json
{}
```

Placeholder documentation for ListChannelsRequest

<h2 id="tocS___listOfChannelSummary">__listOfChannelSummary</h2>
<!-- backwards compatibility -->
<a id="schema__listofchannelsummary"></a>
<a id="schema___listOfChannelSummary"></a>
<a id="tocS__listofchannelsummary"></a>
<a id="tocs__listofchannelsummary"></a>

```json
[
  {
    "Arn": {},
    "CdiInputSpecification": {
      "Resolution": {}
    },
    "ChannelClass": {},
    "Destinations": {},
    "EgressEndpoints": {},
    "Id": {},
    "InputAttachments": {},
    "InputSpecification": {
      "Codec": {},
      "MaximumBitrate": {},
      "Resolution": {}
    },
    "LogLevel": {},
    "Maintenance": {
      "MaintenanceDay": {},
      "MaintenanceDeadline": {},
      "MaintenanceScheduledDate": {},
      "MaintenanceStartTime": {}
    },
    "Name": {},
    "PipelinesRunningCount": {},
    "RoleArn": {},
    "State": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "Vpc": {
      "AvailabilityZones": {},
      "NetworkInterfaceIds": {},
      "SecurityGroupIds": {},
      "SubnetIds": {}
    }
  }
]
```

Placeholder documentation for __listOfChannelSummary

<h2 id="tocS_ListInputDeviceTransfersRequest">ListInputDeviceTransfersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistinputdevicetransfersrequest"></a>
<a id="schema_ListInputDeviceTransfersRequest"></a>
<a id="tocSlistinputdevicetransfersrequest"></a>
<a id="tocslistinputdevicetransfersrequest"></a>

```json
{}
```

Placeholder documentation for ListInputDeviceTransfersRequest

<h2 id="tocS___listOfTransferringInputDeviceSummary">__listOfTransferringInputDeviceSummary</h2>
<!-- backwards compatibility -->
<a id="schema__listoftransferringinputdevicesummary"></a>
<a id="schema___listOfTransferringInputDeviceSummary"></a>
<a id="tocS__listoftransferringinputdevicesummary"></a>
<a id="tocs__listoftransferringinputdevicesummary"></a>

```json
[
  {
    "Id": {},
    "Message": {},
    "TargetCustomerId": {},
    "TransferType": {}
  }
]
```

Placeholder documentation for __listOfTransferringInputDeviceSummary

<h2 id="tocS_ListInputDevicesRequest">ListInputDevicesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistinputdevicesrequest"></a>
<a id="schema_ListInputDevicesRequest"></a>
<a id="tocSlistinputdevicesrequest"></a>
<a id="tocslistinputdevicesrequest"></a>

```json
{}
```

Placeholder documentation for ListInputDevicesRequest

<h2 id="tocS___listOfInputDeviceSummary">__listOfInputDeviceSummary</h2>
<!-- backwards compatibility -->
<a id="schema__listofinputdevicesummary"></a>
<a id="schema___listOfInputDeviceSummary"></a>
<a id="tocS__listofinputdevicesummary"></a>
<a id="tocs__listofinputdevicesummary"></a>

```json
[
  {
    "Arn": {},
    "ConnectionState": {},
    "DeviceSettingsSyncState": {},
    "DeviceUpdateStatus": {},
    "HdDeviceSettings": {
      "ActiveInput": {},
      "ConfiguredInput": {},
      "DeviceState": {},
      "Framerate": {},
      "Height": {},
      "MaxBitrate": {},
      "ScanType": {},
      "Width": {},
      "LatencyMs": {}
    },
    "Id": {},
    "MacAddress": {},
    "Name": {},
    "NetworkSettings": {
      "DnsAddresses": {},
      "Gateway": {},
      "IpAddress": {},
      "IpScheme": {},
      "SubnetMask": {}
    },
    "SerialNumber": {},
    "Type": {},
    "UhdDeviceSettings": {
      "ActiveInput": {},
      "ConfiguredInput": {},
      "DeviceState": {},
      "Framerate": {},
      "Height": {},
      "MaxBitrate": {},
      "ScanType": {},
      "Width": {},
      "LatencyMs": {}
    },
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

Placeholder documentation for __listOfInputDeviceSummary

<h2 id="tocS_ListInputSecurityGroupsRequest">ListInputSecurityGroupsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistinputsecuritygroupsrequest"></a>
<a id="schema_ListInputSecurityGroupsRequest"></a>
<a id="tocSlistinputsecuritygroupsrequest"></a>
<a id="tocslistinputsecuritygroupsrequest"></a>

```json
{}
```

Placeholder documentation for ListInputSecurityGroupsRequest

<h2 id="tocS___listOfInputSecurityGroup">__listOfInputSecurityGroup</h2>
<!-- backwards compatibility -->
<a id="schema__listofinputsecuritygroup"></a>
<a id="schema___listOfInputSecurityGroup"></a>
<a id="tocS__listofinputsecuritygroup"></a>
<a id="tocs__listofinputsecuritygroup"></a>

```json
[
  {
    "Arn": {},
    "Id": {},
    "Inputs": {},
    "State": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "WhitelistRules": {}
  }
]
```

Placeholder documentation for __listOfInputSecurityGroup

<h2 id="tocS_ListInputsRequest">ListInputsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistinputsrequest"></a>
<a id="schema_ListInputsRequest"></a>
<a id="tocSlistinputsrequest"></a>
<a id="tocslistinputsrequest"></a>

```json
{}
```

Placeholder documentation for ListInputsRequest

<h2 id="tocS___listOfInput">__listOfInput</h2>
<!-- backwards compatibility -->
<a id="schema__listofinput"></a>
<a id="schema___listOfInput"></a>
<a id="tocS__listofinput"></a>
<a id="tocs__listofinput"></a>

```json
[
  {
    "Arn": {},
    "AttachedChannels": {},
    "Destinations": {},
    "Id": {},
    "InputClass": {},
    "InputDevices": {},
    "InputPartnerIds": {},
    "InputSourceType": {},
    "MediaConnectFlows": {},
    "Name": {},
    "RoleArn": {},
    "SecurityGroups": {},
    "Sources": {},
    "State": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "Type": {}
  }
]
```

Placeholder documentation for __listOfInput

<h2 id="tocS_ListMultiplexProgramsRequest">ListMultiplexProgramsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistmultiplexprogramsrequest"></a>
<a id="schema_ListMultiplexProgramsRequest"></a>
<a id="tocSlistmultiplexprogramsrequest"></a>
<a id="tocslistmultiplexprogramsrequest"></a>

```json
{}
```

Placeholder documentation for ListMultiplexProgramsRequest

<h2 id="tocS___listOfMultiplexProgramSummary">__listOfMultiplexProgramSummary</h2>
<!-- backwards compatibility -->
<a id="schema__listofmultiplexprogramsummary"></a>
<a id="schema___listOfMultiplexProgramSummary"></a>
<a id="tocS__listofmultiplexprogramsummary"></a>
<a id="tocs__listofmultiplexprogramsummary"></a>

```json
[
  {
    "ChannelId": {},
    "ProgramName": {}
  }
]
```

Placeholder documentation for __listOfMultiplexProgramSummary

<h2 id="tocS_ListMultiplexesRequest">ListMultiplexesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistmultiplexesrequest"></a>
<a id="schema_ListMultiplexesRequest"></a>
<a id="tocSlistmultiplexesrequest"></a>
<a id="tocslistmultiplexesrequest"></a>

```json
{}
```

Placeholder documentation for ListMultiplexesRequest

<h2 id="tocS___listOfMultiplexSummary">__listOfMultiplexSummary</h2>
<!-- backwards compatibility -->
<a id="schema__listofmultiplexsummary"></a>
<a id="schema___listOfMultiplexSummary"></a>
<a id="tocS__listofmultiplexsummary"></a>
<a id="tocs__listofmultiplexsummary"></a>

```json
[
  {
    "Arn": {},
    "AvailabilityZones": {},
    "Id": {},
    "MultiplexSettings": {
      "TransportStreamBitrate": {}
    },
    "Name": {},
    "PipelinesRunningCount": {},
    "ProgramCount": {},
    "State": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

Placeholder documentation for __listOfMultiplexSummary

<h2 id="tocS_ListOfferingsRequest">ListOfferingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistofferingsrequest"></a>
<a id="schema_ListOfferingsRequest"></a>
<a id="tocSlistofferingsrequest"></a>
<a id="tocslistofferingsrequest"></a>

```json
{}
```

Placeholder documentation for ListOfferingsRequest

<h2 id="tocS___listOfOffering">__listOfOffering</h2>
<!-- backwards compatibility -->
<a id="schema__listofoffering"></a>
<a id="schema___listOfOffering"></a>
<a id="tocS__listofoffering"></a>
<a id="tocs__listofoffering"></a>

```json
[
  {
    "Arn": {},
    "CurrencyCode": {},
    "Duration": {},
    "DurationUnits": {},
    "FixedPrice": {},
    "OfferingDescription": {},
    "OfferingId": {},
    "OfferingType": {},
    "Region": {},
    "ResourceSpecification": {
      "ChannelClass": {},
      "Codec": {},
      "MaximumBitrate": {},
      "MaximumFramerate": {},
      "Resolution": {},
      "ResourceType": {},
      "SpecialFeature": {},
      "VideoQuality": {}
    },
    "UsagePrice": {}
  }
]
```

Placeholder documentation for __listOfOffering

<h2 id="tocS_ListReservationsRequest">ListReservationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistreservationsrequest"></a>
<a id="schema_ListReservationsRequest"></a>
<a id="tocSlistreservationsrequest"></a>
<a id="tocslistreservationsrequest"></a>

```json
{}
```

Placeholder documentation for ListReservationsRequest

<h2 id="tocS___listOfReservation">__listOfReservation</h2>
<!-- backwards compatibility -->
<a id="schema__listofreservation"></a>
<a id="schema___listOfReservation"></a>
<a id="tocS__listofreservation"></a>
<a id="tocs__listofreservation"></a>

```json
[
  {
    "Arn": {},
    "Count": {},
    "CurrencyCode": {},
    "Duration": {},
    "DurationUnits": {},
    "End": {},
    "FixedPrice": {},
    "Name": {},
    "OfferingDescription": {},
    "OfferingId": {},
    "OfferingType": {},
    "Region": {},
    "RenewalSettings": {
      "AutomaticRenewal": {},
      "RenewalCount": {}
    },
    "ReservationId": {},
    "ResourceSpecification": {
      "ChannelClass": {},
      "Codec": {},
      "MaximumBitrate": {},
      "MaximumFramerate": {},
      "Resolution": {},
      "ResourceType": {},
      "SpecialFeature": {},
      "VideoQuality": {}
    },
    "Start": {},
    "State": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "UsagePrice": {}
  }
]
```

Placeholder documentation for __listOfReservation

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{}
```

Placeholder documentation for ListTagsForResourceRequest

<h2 id="tocS_M2tsAbsentInputAudioBehavior">M2tsAbsentInputAudioBehavior</h2>
<!-- backwards compatibility -->
<a id="schemam2tsabsentinputaudiobehavior"></a>
<a id="schema_M2tsAbsentInputAudioBehavior"></a>
<a id="tocSm2tsabsentinputaudiobehavior"></a>
<a id="tocsm2tsabsentinputaudiobehavior"></a>

```json
"DROP"
```

M2ts Absent Input Audio Behavior

<h2 id="tocS_M2tsArib">M2tsArib</h2>
<!-- backwards compatibility -->
<a id="schemam2tsarib"></a>
<a id="schema_M2tsArib"></a>
<a id="tocSm2tsarib"></a>
<a id="tocsm2tsarib"></a>

```json
"DISABLED"
```

M2ts Arib

<h2 id="tocS_M2tsAribCaptionsPidControl">M2tsAribCaptionsPidControl</h2>
<!-- backwards compatibility -->
<a id="schemam2tsaribcaptionspidcontrol"></a>
<a id="schema_M2tsAribCaptionsPidControl"></a>
<a id="tocSm2tsaribcaptionspidcontrol"></a>
<a id="tocsm2tsaribcaptionspidcontrol"></a>

```json
"AUTO"
```

M2ts Arib Captions Pid Control

<h2 id="tocS_M2tsAudioBufferModel">M2tsAudioBufferModel</h2>
<!-- backwards compatibility -->
<a id="schemam2tsaudiobuffermodel"></a>
<a id="schema_M2tsAudioBufferModel"></a>
<a id="tocSm2tsaudiobuffermodel"></a>
<a id="tocsm2tsaudiobuffermodel"></a>

```json
"ATSC"
```

M2ts Audio Buffer Model

<h2 id="tocS_M2tsAudioInterval">M2tsAudioInterval</h2>
<!-- backwards compatibility -->
<a id="schemam2tsaudiointerval"></a>
<a id="schema_M2tsAudioInterval"></a>
<a id="tocSm2tsaudiointerval"></a>
<a id="tocsm2tsaudiointerval"></a>

```json
"VIDEO_AND_FIXED_INTERVALS"
```

M2ts Audio Interval

<h2 id="tocS_M2tsAudioStreamType">M2tsAudioStreamType</h2>
<!-- backwards compatibility -->
<a id="schemam2tsaudiostreamtype"></a>
<a id="schema_M2tsAudioStreamType"></a>
<a id="tocSm2tsaudiostreamtype"></a>
<a id="tocsm2tsaudiostreamtype"></a>

```json
"ATSC"
```

M2ts Audio Stream Type

<h2 id="tocS_M2tsBufferModel">M2tsBufferModel</h2>
<!-- backwards compatibility -->
<a id="schemam2tsbuffermodel"></a>
<a id="schema_M2tsBufferModel"></a>
<a id="tocSm2tsbuffermodel"></a>
<a id="tocsm2tsbuffermodel"></a>

```json
"MULTIPLEX"
```

M2ts Buffer Model

<h2 id="tocS_M2tsCcDescriptor">M2tsCcDescriptor</h2>
<!-- backwards compatibility -->
<a id="schemam2tsccdescriptor"></a>
<a id="schema_M2tsCcDescriptor"></a>
<a id="tocSm2tsccdescriptor"></a>
<a id="tocsm2tsccdescriptor"></a>

```json
"DISABLED"
```

M2ts Cc Descriptor

<h2 id="tocS_M2tsEbifControl">M2tsEbifControl</h2>
<!-- backwards compatibility -->
<a id="schemam2tsebifcontrol"></a>
<a id="schema_M2tsEbifControl"></a>
<a id="tocSm2tsebifcontrol"></a>
<a id="tocsm2tsebifcontrol"></a>

```json
"NONE"
```

M2ts Ebif Control

<h2 id="tocS_M2tsEbpPlacement">M2tsEbpPlacement</h2>
<!-- backwards compatibility -->
<a id="schemam2tsebpplacement"></a>
<a id="schema_M2tsEbpPlacement"></a>
<a id="tocSm2tsebpplacement"></a>
<a id="tocsm2tsebpplacement"></a>

```json
"VIDEO_AND_AUDIO_PIDS"
```

M2ts Ebp Placement

<h2 id="tocS_M2tsEsRateInPes">M2tsEsRateInPes</h2>
<!-- backwards compatibility -->
<a id="schemam2tsesrateinpes"></a>
<a id="schema_M2tsEsRateInPes"></a>
<a id="tocSm2tsesrateinpes"></a>
<a id="tocsm2tsesrateinpes"></a>

```json
"EXCLUDE"
```

M2ts Es Rate In Pes

<h2 id="tocS_M2tsKlv">M2tsKlv</h2>
<!-- backwards compatibility -->
<a id="schemam2tsklv"></a>
<a id="schema_M2tsKlv"></a>
<a id="tocSm2tsklv"></a>
<a id="tocsm2tsklv"></a>

```json
"NONE"
```

M2ts Klv

<h2 id="tocS_M2tsNielsenId3Behavior">M2tsNielsenId3Behavior</h2>
<!-- backwards compatibility -->
<a id="schemam2tsnielsenid3behavior"></a>
<a id="schema_M2tsNielsenId3Behavior"></a>
<a id="tocSm2tsnielsenid3behavior"></a>
<a id="tocsm2tsnielsenid3behavior"></a>

```json
"NO_PASSTHROUGH"
```

M2ts Nielsen Id3 Behavior

<h2 id="tocS_M2tsPcrControl">M2tsPcrControl</h2>
<!-- backwards compatibility -->
<a id="schemam2tspcrcontrol"></a>
<a id="schema_M2tsPcrControl"></a>
<a id="tocSm2tspcrcontrol"></a>
<a id="tocsm2tspcrcontrol"></a>

```json
"CONFIGURED_PCR_PERIOD"
```

M2ts Pcr Control

<h2 id="tocS_M2tsRateMode">M2tsRateMode</h2>
<!-- backwards compatibility -->
<a id="schemam2tsratemode"></a>
<a id="schema_M2tsRateMode"></a>
<a id="tocSm2tsratemode"></a>
<a id="tocsm2tsratemode"></a>

```json
"CBR"
```

M2ts Rate Mode

<h2 id="tocS_M2tsScte35Control">M2tsScte35Control</h2>
<!-- backwards compatibility -->
<a id="schemam2tsscte35control"></a>
<a id="schema_M2tsScte35Control"></a>
<a id="tocSm2tsscte35control"></a>
<a id="tocsm2tsscte35control"></a>

```json
"NONE"
```

M2ts Scte35 Control

<h2 id="tocS_M2tsSegmentationMarkers">M2tsSegmentationMarkers</h2>
<!-- backwards compatibility -->
<a id="schemam2tssegmentationmarkers"></a>
<a id="schema_M2tsSegmentationMarkers"></a>
<a id="tocSm2tssegmentationmarkers"></a>
<a id="tocsm2tssegmentationmarkers"></a>

```json
"EBP"
```

M2ts Segmentation Markers

<h2 id="tocS_M2tsSegmentationStyle">M2tsSegmentationStyle</h2>
<!-- backwards compatibility -->
<a id="schemam2tssegmentationstyle"></a>
<a id="schema_M2tsSegmentationStyle"></a>
<a id="tocSm2tssegmentationstyle"></a>
<a id="tocsm2tssegmentationstyle"></a>

```json
"MAINTAIN_CADENCE"
```

M2ts Segmentation Style

<h2 id="tocS___integerMin0Max10000">__integerMin0Max10000</h2>
<!-- backwards compatibility -->
<a id="schema__integermin0max10000"></a>
<a id="schema___integerMin0Max10000"></a>
<a id="tocS__integermin0max10000"></a>
<a id="tocs__integermin0max10000"></a>

```json
0
```

Placeholder documentation for __integerMin0Max10000

<h2 id="tocS___doubleMin0">__doubleMin0</h2>
<!-- backwards compatibility -->
<a id="schema__doublemin0"></a>
<a id="schema___doubleMin0"></a>
<a id="tocS__doublemin0"></a>
<a id="tocs__doublemin0"></a>

```json
0
```

Placeholder documentation for __doubleMin0

<h2 id="tocS___integerMin0Max1000">__integerMin0Max1000</h2>
<!-- backwards compatibility -->
<a id="schema__integermin0max1000"></a>
<a id="schema___integerMin0Max1000"></a>
<a id="tocS__integermin0max1000"></a>
<a id="tocs__integermin0max1000"></a>

```json
0
```

Placeholder documentation for __integerMin0Max1000

<h2 id="tocS___integerMin0Max500">__integerMin0Max500</h2>
<!-- backwards compatibility -->
<a id="schema__integermin0max500"></a>
<a id="schema___integerMin0Max500"></a>
<a id="tocS__integermin0max500"></a>
<a id="tocs__integermin0max500"></a>

```json
0
```

Placeholder documentation for __integerMin0Max500

<h2 id="tocS___doubleMin1">__doubleMin1</h2>
<!-- backwards compatibility -->
<a id="schema__doublemin1"></a>
<a id="schema___doubleMin1"></a>
<a id="tocS__doublemin1"></a>
<a id="tocs__doublemin1"></a>

```json
0
```

Placeholder documentation for __doubleMin1

<h2 id="tocS_M2tsTimedMetadataBehavior">M2tsTimedMetadataBehavior</h2>
<!-- backwards compatibility -->
<a id="schemam2tstimedmetadatabehavior"></a>
<a id="schema_M2tsTimedMetadataBehavior"></a>
<a id="tocSm2tstimedmetadatabehavior"></a>
<a id="tocsm2tstimedmetadatabehavior"></a>

```json
"NO_PASSTHROUGH"
```

M2ts Timed Metadata Behavior

<h2 id="tocS___doubleMin0Max5000">__doubleMin0Max5000</h2>
<!-- backwards compatibility -->
<a id="schema__doublemin0max5000"></a>
<a id="schema___doubleMin0Max5000"></a>
<a id="tocS__doublemin0max5000"></a>
<a id="tocs__doublemin0max5000"></a>

```json
0
```

Placeholder documentation for __doubleMin0Max5000

<h2 id="tocS_M3u8NielsenId3Behavior">M3u8NielsenId3Behavior</h2>
<!-- backwards compatibility -->
<a id="schemam3u8nielsenid3behavior"></a>
<a id="schema_M3u8NielsenId3Behavior"></a>
<a id="tocSm3u8nielsenid3behavior"></a>
<a id="tocsm3u8nielsenid3behavior"></a>

```json
"NO_PASSTHROUGH"
```

M3u8 Nielsen Id3 Behavior

<h2 id="tocS_M3u8PcrControl">M3u8PcrControl</h2>
<!-- backwards compatibility -->
<a id="schemam3u8pcrcontrol"></a>
<a id="schema_M3u8PcrControl"></a>
<a id="tocSm3u8pcrcontrol"></a>
<a id="tocsm3u8pcrcontrol"></a>

```json
"CONFIGURED_PCR_PERIOD"
```

M3u8 Pcr Control

<h2 id="tocS_M3u8Scte35Behavior">M3u8Scte35Behavior</h2>
<!-- backwards compatibility -->
<a id="schemam3u8scte35behavior"></a>
<a id="schema_M3u8Scte35Behavior"></a>
<a id="tocSm3u8scte35behavior"></a>
<a id="tocsm3u8scte35behavior"></a>

```json
"NO_PASSTHROUGH"
```

M3u8 Scte35 Behavior

<h2 id="tocS_M3u8TimedMetadataBehavior">M3u8TimedMetadataBehavior</h2>
<!-- backwards compatibility -->
<a id="schemam3u8timedmetadatabehavior"></a>
<a id="schema_M3u8TimedMetadataBehavior"></a>
<a id="tocSm3u8timedmetadatabehavior"></a>
<a id="tocsm3u8timedmetadatabehavior"></a>

```json
"NO_PASSTHROUGH"
```

M3u8 Timed Metadata Behavior

<h2 id="tocS_M3u8Settings">M3u8Settings</h2>
<!-- backwards compatibility -->
<a id="schemam3u8settings"></a>
<a id="schema_M3u8Settings"></a>
<a id="tocSm3u8settings"></a>
<a id="tocsm3u8settings"></a>

```json
{
  "AudioFramesPerPes": {},
  "AudioPids": {},
  "EcmPid": {},
  "NielsenId3Behavior": {},
  "PatInterval": {},
  "PcrControl": {},
  "PcrPeriod": {},
  "PcrPid": {},
  "PmtInterval": {},
  "PmtPid": {},
  "ProgramNum": {},
  "Scte35Behavior": {},
  "Scte35Pid": {},
  "TimedMetadataBehavior": {},
  "TimedMetadataPid": {},
  "TransportStreamId": {},
  "VideoPid": {}
}
```

Settings information for the .m3u8 container

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AudioFramesPerPes|object|false|none|none|
|AudioPids|object|false|none|none|
|EcmPid|object|false|none|none|
|NielsenId3Behavior|object|false|none|none|
|PatInterval|object|false|none|none|
|PcrControl|object|false|none|none|
|PcrPeriod|object|false|none|none|
|PcrPid|object|false|none|none|
|PmtInterval|object|false|none|none|
|PmtPid|object|false|none|none|
|ProgramNum|object|false|none|none|
|Scte35Behavior|object|false|none|none|
|Scte35Pid|object|false|none|none|
|TimedMetadataBehavior|object|false|none|none|
|TimedMetadataPid|object|false|none|none|
|TransportStreamId|object|false|none|none|
|VideoPid|object|false|none|none|

<h2 id="tocS_MaintenanceUpdateSettings">MaintenanceUpdateSettings</h2>
<!-- backwards compatibility -->
<a id="schemamaintenanceupdatesettings"></a>
<a id="schema_MaintenanceUpdateSettings"></a>
<a id="tocSmaintenanceupdatesettings"></a>
<a id="tocsmaintenanceupdatesettings"></a>

```json
{
  "MaintenanceDay": {},
  "MaintenanceScheduledDate": {},
  "MaintenanceStartTime": {}
}
```

Placeholder documentation for MaintenanceUpdateSettings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaintenanceDay|object|false|none|none|
|MaintenanceScheduledDate|object|false|none|none|
|MaintenanceStartTime|object|false|none|none|

<h2 id="tocS_MediaConnectFlow">MediaConnectFlow</h2>
<!-- backwards compatibility -->
<a id="schemamediaconnectflow"></a>
<a id="schema_MediaConnectFlow"></a>
<a id="tocSmediaconnectflow"></a>
<a id="tocsmediaconnectflow"></a>

```json
{
  "FlowArn": {}
}
```

The settings for a MediaConnect Flow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FlowArn|object|false|none|none|

<h2 id="tocS_MediaPackageGroupSettings">MediaPackageGroupSettings</h2>
<!-- backwards compatibility -->
<a id="schemamediapackagegroupsettings"></a>
<a id="schema_MediaPackageGroupSettings"></a>
<a id="tocSmediapackagegroupsettings"></a>
<a id="tocsmediapackagegroupsettings"></a>

```json
{
  "Destination": {
    "DestinationRefId": {}
  }
}
```

Media Package Group Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Destination|object|true|none|none|

<h2 id="tocS_MediaPackageOutputDestinationSettings">MediaPackageOutputDestinationSettings</h2>
<!-- backwards compatibility -->
<a id="schemamediapackageoutputdestinationsettings"></a>
<a id="schema_MediaPackageOutputDestinationSettings"></a>
<a id="tocSmediapackageoutputdestinationsettings"></a>
<a id="tocsmediapackageoutputdestinationsettings"></a>

```json
{
  "ChannelId": {}
}
```

MediaPackage Output Destination Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelId|object|false|none|none|

<h2 id="tocS_MediaPackageOutputSettings">MediaPackageOutputSettings</h2>
<!-- backwards compatibility -->
<a id="schemamediapackageoutputsettings"></a>
<a id="schema_MediaPackageOutputSettings"></a>
<a id="tocSmediapackageoutputsettings"></a>
<a id="tocsmediapackageoutputsettings"></a>

```json
{}
```

Media Package Output Settings

<h2 id="tocS___longMin0Max86400000">__longMin0Max86400000</h2>
<!-- backwards compatibility -->
<a id="schema__longmin0max86400000"></a>
<a id="schema___longMin0Max86400000"></a>
<a id="tocS__longmin0max86400000"></a>
<a id="tocs__longmin0max86400000"></a>

```json
0
```

Placeholder documentation for __longMin0Max86400000

<h2 id="tocS_MotionGraphicsActivateScheduleActionSettings">MotionGraphicsActivateScheduleActionSettings</h2>
<!-- backwards compatibility -->
<a id="schemamotiongraphicsactivatescheduleactionsettings"></a>
<a id="schema_MotionGraphicsActivateScheduleActionSettings"></a>
<a id="tocSmotiongraphicsactivatescheduleactionsettings"></a>
<a id="tocsmotiongraphicsactivatescheduleactionsettings"></a>

```json
{
  "Duration": {},
  "PasswordParam": {},
  "Url": {},
  "Username": {}
}
```

Settings to specify the rendering of motion graphics into the video stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Duration|object|false|none|none|
|PasswordParam|object|false|none|none|
|Url|object|false|none|none|
|Username|object|false|none|none|

<h2 id="tocS_MotionGraphicsInsertion">MotionGraphicsInsertion</h2>
<!-- backwards compatibility -->
<a id="schemamotiongraphicsinsertion"></a>
<a id="schema_MotionGraphicsInsertion"></a>
<a id="tocSmotiongraphicsinsertion"></a>
<a id="tocsmotiongraphicsinsertion"></a>

```json
"DISABLED"
```

Motion Graphics Insertion

<h2 id="tocS_MotionGraphicsSettings">MotionGraphicsSettings</h2>
<!-- backwards compatibility -->
<a id="schemamotiongraphicssettings"></a>
<a id="schema_MotionGraphicsSettings"></a>
<a id="tocSmotiongraphicssettings"></a>
<a id="tocsmotiongraphicssettings"></a>

```json
{
  "HtmlMotionGraphicsSettings": {}
}
```

Motion Graphics Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HtmlMotionGraphicsSettings|object|false|none|none|

<h2 id="tocS_MotionGraphicsDeactivateScheduleActionSettings">MotionGraphicsDeactivateScheduleActionSettings</h2>
<!-- backwards compatibility -->
<a id="schemamotiongraphicsdeactivatescheduleactionsettings"></a>
<a id="schema_MotionGraphicsDeactivateScheduleActionSettings"></a>
<a id="tocSmotiongraphicsdeactivatescheduleactionsettings"></a>
<a id="tocsmotiongraphicsdeactivatescheduleactionsettings"></a>

```json
{}
```

Settings to specify the ending of rendering motion graphics into the video stream.

<h2 id="tocS_Mp2CodingMode">Mp2CodingMode</h2>
<!-- backwards compatibility -->
<a id="schemamp2codingmode"></a>
<a id="schema_Mp2CodingMode"></a>
<a id="tocSmp2codingmode"></a>
<a id="tocsmp2codingmode"></a>

```json
"CODING_MODE_1_0"
```

Mp2 Coding Mode

<h2 id="tocS_Mpeg2AdaptiveQuantization">Mpeg2AdaptiveQuantization</h2>
<!-- backwards compatibility -->
<a id="schemampeg2adaptivequantization"></a>
<a id="schema_Mpeg2AdaptiveQuantization"></a>
<a id="tocSmpeg2adaptivequantization"></a>
<a id="tocsmpeg2adaptivequantization"></a>

```json
"AUTO"
```

Mpeg2 Adaptive Quantization

<h2 id="tocS_Mpeg2ColorMetadata">Mpeg2ColorMetadata</h2>
<!-- backwards compatibility -->
<a id="schemampeg2colormetadata"></a>
<a id="schema_Mpeg2ColorMetadata"></a>
<a id="tocSmpeg2colormetadata"></a>
<a id="tocsmpeg2colormetadata"></a>

```json
"IGNORE"
```

Mpeg2 Color Metadata

<h2 id="tocS_Mpeg2ColorSpace">Mpeg2ColorSpace</h2>
<!-- backwards compatibility -->
<a id="schemampeg2colorspace"></a>
<a id="schema_Mpeg2ColorSpace"></a>
<a id="tocSmpeg2colorspace"></a>
<a id="tocsmpeg2colorspace"></a>

```json
"AUTO"
```

Mpeg2 Color Space

<h2 id="tocS_Mpeg2DisplayRatio">Mpeg2DisplayRatio</h2>
<!-- backwards compatibility -->
<a id="schemampeg2displayratio"></a>
<a id="schema_Mpeg2DisplayRatio"></a>
<a id="tocSmpeg2displayratio"></a>
<a id="tocsmpeg2displayratio"></a>

```json
"DISPLAYRATIO16X9"
```

Mpeg2 Display Ratio

<h2 id="tocS_Mpeg2FilterSettings">Mpeg2FilterSettings</h2>
<!-- backwards compatibility -->
<a id="schemampeg2filtersettings"></a>
<a id="schema_Mpeg2FilterSettings"></a>
<a id="tocSmpeg2filtersettings"></a>
<a id="tocsmpeg2filtersettings"></a>

```json
{
  "TemporalFilterSettings": {
    "PostFilterSharpening": {},
    "Strength": {}
  }
}
```

Mpeg2 Filter Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TemporalFilterSettings|object|false|none|none|

<h2 id="tocS_Mpeg2GopSizeUnits">Mpeg2GopSizeUnits</h2>
<!-- backwards compatibility -->
<a id="schemampeg2gopsizeunits"></a>
<a id="schema_Mpeg2GopSizeUnits"></a>
<a id="tocSmpeg2gopsizeunits"></a>
<a id="tocsmpeg2gopsizeunits"></a>

```json
"FRAMES"
```

Mpeg2 Gop Size Units

<h2 id="tocS_Mpeg2ScanType">Mpeg2ScanType</h2>
<!-- backwards compatibility -->
<a id="schemampeg2scantype"></a>
<a id="schema_Mpeg2ScanType"></a>
<a id="tocSmpeg2scantype"></a>
<a id="tocsmpeg2scantype"></a>

```json
"INTERLACED"
```

Mpeg2 Scan Type

<h2 id="tocS_Mpeg2SubGopLength">Mpeg2SubGopLength</h2>
<!-- backwards compatibility -->
<a id="schemampeg2subgoplength"></a>
<a id="schema_Mpeg2SubGopLength"></a>
<a id="tocSmpeg2subgoplength"></a>
<a id="tocsmpeg2subgoplength"></a>

```json
"DYNAMIC"
```

Mpeg2 Sub Gop Length

<h2 id="tocS_Mpeg2TimecodeInsertionBehavior">Mpeg2TimecodeInsertionBehavior</h2>
<!-- backwards compatibility -->
<a id="schemampeg2timecodeinsertionbehavior"></a>
<a id="schema_Mpeg2TimecodeInsertionBehavior"></a>
<a id="tocSmpeg2timecodeinsertionbehavior"></a>
<a id="tocsmpeg2timecodeinsertionbehavior"></a>

```json
"DISABLED"
```

Mpeg2 Timecode Insertion Behavior

<h2 id="tocS_Mpeg2Settings">Mpeg2Settings</h2>
<!-- backwards compatibility -->
<a id="schemampeg2settings"></a>
<a id="schema_Mpeg2Settings"></a>
<a id="tocSmpeg2settings"></a>
<a id="tocsmpeg2settings"></a>

```json
{
  "AdaptiveQuantization": {},
  "AfdSignaling": {},
  "ColorMetadata": {},
  "ColorSpace": {},
  "DisplayAspectRatio": {},
  "FilterSettings": {
    "TemporalFilterSettings": {
      "PostFilterSharpening": {},
      "Strength": {}
    }
  },
  "FixedAfd": {},
  "FramerateDenominator": {},
  "FramerateNumerator": {},
  "GopClosedCadence": {},
  "GopNumBFrames": {},
  "GopSize": {},
  "GopSizeUnits": {},
  "ScanType": {},
  "SubgopLength": {},
  "TimecodeInsertion": {},
  "TimecodeBurninSettings": {
    "FontSize": {},
    "Position": {},
    "Prefix": {}
  }
}
```

Mpeg2 Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdaptiveQuantization|object|false|none|none|
|AfdSignaling|object|false|none|none|
|ColorMetadata|object|false|none|none|
|ColorSpace|object|false|none|none|
|DisplayAspectRatio|object|false|none|none|
|FilterSettings|object|false|none|none|
|FixedAfd|object|false|none|none|
|FramerateDenominator|object|true|none|none|
|FramerateNumerator|object|true|none|none|
|GopClosedCadence|object|false|none|none|
|GopNumBFrames|object|false|none|none|
|GopSize|object|false|none|none|
|GopSizeUnits|object|false|none|none|
|ScanType|object|false|none|none|
|SubgopLength|object|false|none|none|
|TimecodeInsertion|object|false|none|none|
|TimecodeBurninSettings|object|false|none|none|

<h2 id="tocS_SmoothGroupAudioOnlyTimecodeControl">SmoothGroupAudioOnlyTimecodeControl</h2>
<!-- backwards compatibility -->
<a id="schemasmoothgroupaudioonlytimecodecontrol"></a>
<a id="schema_SmoothGroupAudioOnlyTimecodeControl"></a>
<a id="tocSsmoothgroupaudioonlytimecodecontrol"></a>
<a id="tocssmoothgroupaudioonlytimecodecontrol"></a>

```json
"PASSTHROUGH"
```

Smooth Group Audio Only Timecode Control

<h2 id="tocS_SmoothGroupCertificateMode">SmoothGroupCertificateMode</h2>
<!-- backwards compatibility -->
<a id="schemasmoothgroupcertificatemode"></a>
<a id="schema_SmoothGroupCertificateMode"></a>
<a id="tocSsmoothgroupcertificatemode"></a>
<a id="tocssmoothgroupcertificatemode"></a>

```json
"SELF_SIGNED"
```

Smooth Group Certificate Mode

<h2 id="tocS_SmoothGroupEventIdMode">SmoothGroupEventIdMode</h2>
<!-- backwards compatibility -->
<a id="schemasmoothgroupeventidmode"></a>
<a id="schema_SmoothGroupEventIdMode"></a>
<a id="tocSsmoothgroupeventidmode"></a>
<a id="tocssmoothgroupeventidmode"></a>

```json
"NO_EVENT_ID"
```

Smooth Group Event Id Mode

<h2 id="tocS_SmoothGroupEventStopBehavior">SmoothGroupEventStopBehavior</h2>
<!-- backwards compatibility -->
<a id="schemasmoothgroupeventstopbehavior"></a>
<a id="schema_SmoothGroupEventStopBehavior"></a>
<a id="tocSsmoothgroupeventstopbehavior"></a>
<a id="tocssmoothgroupeventstopbehavior"></a>

```json
"NONE"
```

Smooth Group Event Stop Behavior

<h2 id="tocS_SmoothGroupSegmentationMode">SmoothGroupSegmentationMode</h2>
<!-- backwards compatibility -->
<a id="schemasmoothgroupsegmentationmode"></a>
<a id="schema_SmoothGroupSegmentationMode"></a>
<a id="tocSsmoothgroupsegmentationmode"></a>
<a id="tocssmoothgroupsegmentationmode"></a>

```json
"USE_INPUT_SEGMENTATION"
```

Smooth Group Segmentation Mode

<h2 id="tocS_SmoothGroupSparseTrackType">SmoothGroupSparseTrackType</h2>
<!-- backwards compatibility -->
<a id="schemasmoothgroupsparsetracktype"></a>
<a id="schema_SmoothGroupSparseTrackType"></a>
<a id="tocSsmoothgroupsparsetracktype"></a>
<a id="tocssmoothgroupsparsetracktype"></a>

```json
"NONE"
```

Smooth Group Sparse Track Type

<h2 id="tocS_SmoothGroupStreamManifestBehavior">SmoothGroupStreamManifestBehavior</h2>
<!-- backwards compatibility -->
<a id="schemasmoothgroupstreammanifestbehavior"></a>
<a id="schema_SmoothGroupStreamManifestBehavior"></a>
<a id="tocSsmoothgroupstreammanifestbehavior"></a>
<a id="tocssmoothgroupstreammanifestbehavior"></a>

```json
"DO_NOT_SEND"
```

Smooth Group Stream Manifest Behavior

<h2 id="tocS_SmoothGroupTimestampOffsetMode">SmoothGroupTimestampOffsetMode</h2>
<!-- backwards compatibility -->
<a id="schemasmoothgrouptimestampoffsetmode"></a>
<a id="schema_SmoothGroupTimestampOffsetMode"></a>
<a id="tocSsmoothgrouptimestampoffsetmode"></a>
<a id="tocssmoothgrouptimestampoffsetmode"></a>

```json
"USE_CONFIGURED_OFFSET"
```

Smooth Group Timestamp Offset Mode

<h2 id="tocS_MsSmoothGroupSettings">MsSmoothGroupSettings</h2>
<!-- backwards compatibility -->
<a id="schemamssmoothgroupsettings"></a>
<a id="schema_MsSmoothGroupSettings"></a>
<a id="tocSmssmoothgroupsettings"></a>
<a id="tocsmssmoothgroupsettings"></a>

```json
{
  "AcquisitionPointId": {},
  "AudioOnlyTimecodeControl": {},
  "CertificateMode": {},
  "ConnectionRetryInterval": {},
  "Destination": {
    "DestinationRefId": {}
  },
  "EventId": {},
  "EventIdMode": {},
  "EventStopBehavior": {},
  "FilecacheDuration": {},
  "FragmentLength": {},
  "InputLossAction": {},
  "NumRetries": {},
  "RestartDelay": {},
  "SegmentationMode": {},
  "SendDelayMs": {},
  "SparseTrackType": {},
  "StreamManifestBehavior": {},
  "TimestampOffset": {},
  "TimestampOffsetMode": {}
}
```

Ms Smooth Group Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcquisitionPointId|object|false|none|none|
|AudioOnlyTimecodeControl|object|false|none|none|
|CertificateMode|object|false|none|none|
|ConnectionRetryInterval|object|false|none|none|
|Destination|object|true|none|none|
|EventId|object|false|none|none|
|EventIdMode|object|false|none|none|
|EventStopBehavior|object|false|none|none|
|FilecacheDuration|object|false|none|none|
|FragmentLength|object|false|none|none|
|InputLossAction|object|false|none|none|
|NumRetries|object|false|none|none|
|RestartDelay|object|false|none|none|
|SegmentationMode|object|false|none|none|
|SendDelayMs|object|false|none|none|
|SparseTrackType|object|false|none|none|
|StreamManifestBehavior|object|false|none|none|
|TimestampOffset|object|false|none|none|
|TimestampOffsetMode|object|false|none|none|

<h2 id="tocS_MsSmoothH265PackagingType">MsSmoothH265PackagingType</h2>
<!-- backwards compatibility -->
<a id="schemamssmoothh265packagingtype"></a>
<a id="schema_MsSmoothH265PackagingType"></a>
<a id="tocSmssmoothh265packagingtype"></a>
<a id="tocsmssmoothh265packagingtype"></a>

```json
"HEV1"
```

Ms Smooth H265 Packaging Type

<h2 id="tocS_MsSmoothOutputSettings">MsSmoothOutputSettings</h2>
<!-- backwards compatibility -->
<a id="schemamssmoothoutputsettings"></a>
<a id="schema_MsSmoothOutputSettings"></a>
<a id="tocSmssmoothoutputsettings"></a>
<a id="tocsmssmoothoutputsettings"></a>

```json
{
  "H265PackagingType": {},
  "NameModifier": {}
}
```

Ms Smooth Output Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|H265PackagingType|object|false|none|none|
|NameModifier|object|false|none|none|

<h2 id="tocS_MultiplexGroupSettings">MultiplexGroupSettings</h2>
<!-- backwards compatibility -->
<a id="schemamultiplexgroupsettings"></a>
<a id="schema_MultiplexGroupSettings"></a>
<a id="tocSmultiplexgroupsettings"></a>
<a id="tocsmultiplexgroupsettings"></a>

```json
{}
```

Multiplex Group Settings

<h2 id="tocS_MultiplexMediaConnectOutputDestinationSettings">MultiplexMediaConnectOutputDestinationSettings</h2>
<!-- backwards compatibility -->
<a id="schemamultiplexmediaconnectoutputdestinationsettings"></a>
<a id="schema_MultiplexMediaConnectOutputDestinationSettings"></a>
<a id="tocSmultiplexmediaconnectoutputdestinationsettings"></a>
<a id="tocsmultiplexmediaconnectoutputdestinationsettings"></a>

```json
{
  "EntitlementArn": {}
}
```

Multiplex MediaConnect output destination settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EntitlementArn|object|false|none|none|

<h2 id="tocS_MultiplexOutputDestination">MultiplexOutputDestination</h2>
<!-- backwards compatibility -->
<a id="schemamultiplexoutputdestination"></a>
<a id="schema_MultiplexOutputDestination"></a>
<a id="tocSmultiplexoutputdestination"></a>
<a id="tocsmultiplexoutputdestination"></a>

```json
{
  "MediaConnectSettings": {
    "EntitlementArn": {}
  }
}
```

Multiplex output destination settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MediaConnectSettings|object|false|none|none|

<h2 id="tocS_MultiplexOutputSettings">MultiplexOutputSettings</h2>
<!-- backwards compatibility -->
<a id="schemamultiplexoutputsettings"></a>
<a id="schema_MultiplexOutputSettings"></a>
<a id="tocSmultiplexoutputsettings"></a>
<a id="tocsmultiplexoutputsettings"></a>

```json
{
  "Destination": {
    "DestinationRefId": {}
  }
}
```

Multiplex Output Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Destination|object|true|none|none|

<h2 id="tocS_MultiplexProgramChannelDestinationSettings">MultiplexProgramChannelDestinationSettings</h2>
<!-- backwards compatibility -->
<a id="schemamultiplexprogramchanneldestinationsettings"></a>
<a id="schema_MultiplexProgramChannelDestinationSettings"></a>
<a id="tocSmultiplexprogramchanneldestinationsettings"></a>
<a id="tocsmultiplexprogramchanneldestinationsettings"></a>

```json
{
  "MultiplexId": {},
  "ProgramName": {}
}
```

Multiplex Program Input Destination Settings for outputting a Channel to a Multiplex

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MultiplexId|object|false|none|none|
|ProgramName|object|false|none|none|

<h2 id="tocS___listOf__integer">__listOf__integer</h2>
<!-- backwards compatibility -->
<a id="schema__listof__integer"></a>
<a id="schema___listOf__integer"></a>
<a id="tocS__listof__integer"></a>
<a id="tocs__listof__integer"></a>

```json
[
  0
]
```

Placeholder documentation for __listOf__integer

<h2 id="tocS_MultiplexProgramPipelineDetail">MultiplexProgramPipelineDetail</h2>
<!-- backwards compatibility -->
<a id="schemamultiplexprogrampipelinedetail"></a>
<a id="schema_MultiplexProgramPipelineDetail"></a>
<a id="tocSmultiplexprogrampipelinedetail"></a>
<a id="tocsmultiplexprogrampipelinedetail"></a>

```json
{
  "ActiveChannelPipeline": {},
  "PipelineId": {}
}
```

The current source for one of the pipelines in the multiplex.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActiveChannelPipeline|object|false|none|none|
|PipelineId|object|false|none|none|

<h2 id="tocS_MultiplexProgramSummary">MultiplexProgramSummary</h2>
<!-- backwards compatibility -->
<a id="schemamultiplexprogramsummary"></a>
<a id="schema_MultiplexProgramSummary"></a>
<a id="tocSmultiplexprogramsummary"></a>
<a id="tocsmultiplexprogramsummary"></a>

```json
{
  "ChannelId": {},
  "ProgramName": {}
}
```

Placeholder documentation for MultiplexProgramSummary

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelId|object|false|none|none|
|ProgramName|object|false|none|none|

<h2 id="tocS_MultiplexSettingsSummary">MultiplexSettingsSummary</h2>
<!-- backwards compatibility -->
<a id="schemamultiplexsettingssummary"></a>
<a id="schema_MultiplexSettingsSummary"></a>
<a id="tocSmultiplexsettingssummary"></a>
<a id="tocsmultiplexsettingssummary"></a>

```json
{
  "TransportStreamBitrate": {}
}
```

Contains summary configuration for a Multiplex event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TransportStreamBitrate|object|false|none|none|

<h2 id="tocS___integerMin100000Max100000000">__integerMin100000Max100000000</h2>
<!-- backwards compatibility -->
<a id="schema__integermin100000max100000000"></a>
<a id="schema___integerMin100000Max100000000"></a>
<a id="tocS__integermin100000max100000000"></a>
<a id="tocs__integermin100000max100000000"></a>

```json
100000
```

Placeholder documentation for __integerMin100000Max100000000

<h2 id="tocS___integerMinNegative5Max5">__integerMinNegative5Max5</h2>
<!-- backwards compatibility -->
<a id="schema__integerminnegative5max5"></a>
<a id="schema___integerMinNegative5Max5"></a>
<a id="tocS__integerminnegative5max5"></a>
<a id="tocs__integerminnegative5max5"></a>

```json
-5
```

Placeholder documentation for __integerMinNegative5Max5

<h2 id="tocS_MultiplexStatmuxVideoSettings">MultiplexStatmuxVideoSettings</h2>
<!-- backwards compatibility -->
<a id="schemamultiplexstatmuxvideosettings"></a>
<a id="schema_MultiplexStatmuxVideoSettings"></a>
<a id="tocSmultiplexstatmuxvideosettings"></a>
<a id="tocsmultiplexstatmuxvideosettings"></a>

```json
{
  "MaximumBitrate": {},
  "MinimumBitrate": {},
  "Priority": {}
}
```

Statmux rate control settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaximumBitrate|object|false|none|none|
|MinimumBitrate|object|false|none|none|
|Priority|object|false|none|none|

<h2 id="tocS_MultiplexSummary">MultiplexSummary</h2>
<!-- backwards compatibility -->
<a id="schemamultiplexsummary"></a>
<a id="schema_MultiplexSummary"></a>
<a id="tocSmultiplexsummary"></a>
<a id="tocsmultiplexsummary"></a>

```json
{
  "Arn": {},
  "AvailabilityZones": {},
  "Id": {},
  "MultiplexSettings": {
    "TransportStreamBitrate": {}
  },
  "Name": {},
  "PipelinesRunningCount": {},
  "ProgramCount": {},
  "State": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Placeholder documentation for MultiplexSummary

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|AvailabilityZones|object|false|none|none|
|Id|object|false|none|none|
|MultiplexSettings|object|false|none|none|
|Name|object|false|none|none|
|PipelinesRunningCount|object|false|none|none|
|ProgramCount|object|false|none|none|
|State|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_NetworkInputServerValidation">NetworkInputServerValidation</h2>
<!-- backwards compatibility -->
<a id="schemanetworkinputservervalidation"></a>
<a id="schema_NetworkInputServerValidation"></a>
<a id="tocSnetworkinputservervalidation"></a>
<a id="tocsnetworkinputservervalidation"></a>

```json
"CHECK_CRYPTOGRAPHY_AND_VALIDATE_NAME"
```

Network Input Server Validation

<h2 id="tocS___stringMin2Max2">__stringMin2Max2</h2>
<!-- backwards compatibility -->
<a id="schema__stringmin2max2"></a>
<a id="schema___stringMin2Max2"></a>
<a id="tocS__stringmin2max2"></a>
<a id="tocs__stringmin2max2"></a>

```json
"st"
```

Placeholder documentation for __stringMin2Max2

<h2 id="tocS_NielsenWatermarksCbetStepaside">NielsenWatermarksCbetStepaside</h2>
<!-- backwards compatibility -->
<a id="schemanielsenwatermarkscbetstepaside"></a>
<a id="schema_NielsenWatermarksCbetStepaside"></a>
<a id="tocSnielsenwatermarkscbetstepaside"></a>
<a id="tocsnielsenwatermarkscbetstepaside"></a>

```json
"DISABLED"
```

Nielsen Watermarks Cbet Stepaside

<h2 id="tocS___stringMin1Max7">__stringMin1Max7</h2>
<!-- backwards compatibility -->
<a id="schema__stringmin1max7"></a>
<a id="schema___stringMin1Max7"></a>
<a id="tocS__stringmin1max7"></a>
<a id="tocs__stringmin1max7"></a>

```json
"string"
```

Placeholder documentation for __stringMin1Max7

<h2 id="tocS_NielsenCBET">NielsenCBET</h2>
<!-- backwards compatibility -->
<a id="schemanielsencbet"></a>
<a id="schema_NielsenCBET"></a>
<a id="tocSnielsencbet"></a>
<a id="tocsnielsencbet"></a>

```json
{
  "CbetCheckDigitString": {},
  "CbetStepaside": {},
  "Csid": {}
}
```

Nielsen CBET

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CbetCheckDigitString|object|true|none|none|
|CbetStepaside|object|true|none|none|
|Csid|object|true|none|none|

<h2 id="tocS_NielsenPcmToId3TaggingState">NielsenPcmToId3TaggingState</h2>
<!-- backwards compatibility -->
<a id="schemanielsenpcmtoid3taggingstate"></a>
<a id="schema_NielsenPcmToId3TaggingState"></a>
<a id="tocSnielsenpcmtoid3taggingstate"></a>
<a id="tocsnielsenpcmtoid3taggingstate"></a>

```json
"DISABLED"
```

State of Nielsen PCM to ID3 tagging

<h2 id="tocS___doubleMin1Max65535">__doubleMin1Max65535</h2>
<!-- backwards compatibility -->
<a id="schema__doublemin1max65535"></a>
<a id="schema___doubleMin1Max65535"></a>
<a id="tocS__doublemin1max65535"></a>
<a id="tocs__doublemin1max65535"></a>

```json
0
```

Placeholder documentation for __doubleMin1Max65535

<h2 id="tocS_NielsenWatermarkTimezones">NielsenWatermarkTimezones</h2>
<!-- backwards compatibility -->
<a id="schemanielsenwatermarktimezones"></a>
<a id="schema_NielsenWatermarkTimezones"></a>
<a id="tocSnielsenwatermarktimezones"></a>
<a id="tocsnielsenwatermarktimezones"></a>

```json
"AMERICA_PUERTO_RICO"
```

Nielsen Watermark Timezones

<h2 id="tocS_NielsenNaesIiNw">NielsenNaesIiNw</h2>
<!-- backwards compatibility -->
<a id="schemanielsennaesiinw"></a>
<a id="schema_NielsenNaesIiNw"></a>
<a id="tocSnielsennaesiinw"></a>
<a id="tocsnielsennaesiinw"></a>

```json
{
  "CheckDigitString": {},
  "Sid": {},
  "Timezone": {}
}
```

Nielsen Naes Ii Nw

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CheckDigitString|object|true|none|none|
|Sid|object|true|none|none|
|Timezone|object|false|none|none|

<h2 id="tocS_NielsenWatermarksDistributionTypes">NielsenWatermarksDistributionTypes</h2>
<!-- backwards compatibility -->
<a id="schemanielsenwatermarksdistributiontypes"></a>
<a id="schema_NielsenWatermarksDistributionTypes"></a>
<a id="tocSnielsenwatermarksdistributiontypes"></a>
<a id="tocsnielsenwatermarksdistributiontypes"></a>

```json
"FINAL_DISTRIBUTOR"
```

Nielsen Watermarks Distribution Types

<h2 id="tocS_Offering">Offering</h2>
<!-- backwards compatibility -->
<a id="schemaoffering"></a>
<a id="schema_Offering"></a>
<a id="tocSoffering"></a>
<a id="tocsoffering"></a>

```json
{
  "Arn": {},
  "CurrencyCode": {},
  "Duration": {},
  "DurationUnits": {},
  "FixedPrice": {},
  "OfferingDescription": {},
  "OfferingId": {},
  "OfferingType": {},
  "Region": {},
  "ResourceSpecification": {
    "ChannelClass": {},
    "Codec": {},
    "MaximumBitrate": {},
    "MaximumFramerate": {},
    "Resolution": {},
    "ResourceType": {},
    "SpecialFeature": {},
    "VideoQuality": {}
  },
  "UsagePrice": {}
}
```

Reserved resources available for purchase

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CurrencyCode|object|false|none|none|
|Duration|object|false|none|none|
|DurationUnits|object|false|none|none|
|FixedPrice|object|false|none|none|
|OfferingDescription|object|false|none|none|
|OfferingId|object|false|none|none|
|OfferingType|object|false|none|none|
|Region|object|false|none|none|
|ResourceSpecification|object|false|none|none|
|UsagePrice|object|false|none|none|

<h2 id="tocS___stringMin1Max255">__stringMin1Max255</h2>
<!-- backwards compatibility -->
<a id="schema__stringmin1max255"></a>
<a id="schema___stringMin1Max255"></a>
<a id="tocS__stringmin1max255"></a>
<a id="tocs__stringmin1max255"></a>

```json
"string"
```

Placeholder documentation for __stringMin1Max255

<h2 id="tocS_OutputSettings">OutputSettings</h2>
<!-- backwards compatibility -->
<a id="schemaoutputsettings"></a>
<a id="schema_OutputSettings"></a>
<a id="tocSoutputsettings"></a>
<a id="tocsoutputsettings"></a>

```json
{
  "ArchiveOutputSettings": {
    "ContainerSettings": {
      "M2tsSettings": {
        "AbsentInputAudioBehavior": {},
        "Arib": {},
        "AribCaptionsPid": {},
        "AribCaptionsPidControl": {},
        "AudioBufferModel": {},
        "AudioFramesPerPes": {},
        "AudioPids": {},
        "AudioStreamType": {},
        "Bitrate": {},
        "BufferModel": {},
        "CcDescriptor": {},
        "DvbNitSettings": {
          "NetworkId": {},
          "NetworkName": {},
          "RepInterval": {}
        },
        "DvbSdtSettings": {
          "OutputSdt": {},
          "RepInterval": {},
          "ServiceName": {},
          "ServiceProviderName": {}
        },
        "DvbSubPids": {},
        "DvbTdtSettings": {
          "RepInterval": {}
        },
        "DvbTeletextPid": {},
        "Ebif": {},
        "EbpAudioInterval": {},
        "EbpLookaheadMs": {},
        "EbpPlacement": {},
        "EcmPid": {},
        "EsRateInPes": {},
        "EtvPlatformPid": {},
        "EtvSignalPid": {},
        "FragmentTime": {},
        "Klv": {},
        "KlvDataPids": {},
        "NielsenId3Behavior": {},
        "NullPacketBitrate": {},
        "PatInterval": {},
        "PcrControl": {},
        "PcrPeriod": {},
        "PcrPid": {},
        "PmtInterval": {},
        "PmtPid": {},
        "ProgramNum": {},
        "RateMode": {},
        "Scte27Pids": {},
        "Scte35Control": {},
        "Scte35Pid": {},
        "SegmentationMarkers": {},
        "SegmentationStyle": {},
        "SegmentationTime": {},
        "TimedMetadataBehavior": {},
        "TimedMetadataPid": {},
        "TransportStreamId": {},
        "VideoPid": {},
        "Scte35PrerollPullupMilliseconds": {}
      },
      "RawSettings": {}
    },
    "Extension": {},
    "NameModifier": {}
  },
  "FrameCaptureOutputSettings": {
    "NameModifier": {}
  },
  "HlsOutputSettings": {
    "H265PackagingType": {},
    "HlsSettings": {
      "AudioOnlyHlsSettings": {
        "AudioGroupId": {},
        "AudioOnlyImage": {
          "PasswordParam": {},
          "Uri": {},
          "Username": {}
        },
        "AudioTrackType": {},
        "SegmentType": {}
      },
      "Fmp4HlsSettings": {
        "AudioRenditionSets": {},
        "NielsenId3Behavior": {},
        "TimedMetadataBehavior": {}
      },
      "FrameCaptureHlsSettings": {},
      "StandardHlsSettings": {
        "AudioRenditionSets": {},
        "M3u8Settings": {
          "AudioFramesPerPes": {},
          "AudioPids": {},
          "EcmPid": {},
          "NielsenId3Behavior": {},
          "PatInterval": {},
          "PcrControl": {},
          "PcrPeriod": {},
          "PcrPid": {},
          "PmtInterval": {},
          "PmtPid": {},
          "ProgramNum": {},
          "Scte35Behavior": {},
          "Scte35Pid": {},
          "TimedMetadataBehavior": {},
          "TimedMetadataPid": {},
          "TransportStreamId": {},
          "VideoPid": {}
        }
      }
    },
    "NameModifier": {},
    "SegmentModifier": {}
  },
  "MediaPackageOutputSettings": {},
  "MsSmoothOutputSettings": {
    "H265PackagingType": {},
    "NameModifier": {}
  },
  "MultiplexOutputSettings": {
    "Destination": {
      "DestinationRefId": {}
    }
  },
  "RtmpOutputSettings": {
    "CertificateMode": {},
    "ConnectionRetryInterval": {},
    "Destination": {
      "DestinationRefId": {}
    },
    "NumRetries": {}
  },
  "UdpOutputSettings": {
    "BufferMsec": {},
    "ContainerSettings": {
      "M2tsSettings": {
        "AbsentInputAudioBehavior": {},
        "Arib": {},
        "AribCaptionsPid": {},
        "AribCaptionsPidControl": {},
        "AudioBufferModel": {},
        "AudioFramesPerPes": {},
        "AudioPids": {},
        "AudioStreamType": {},
        "Bitrate": {},
        "BufferModel": {},
        "CcDescriptor": {},
        "DvbNitSettings": {
          "NetworkId": {},
          "NetworkName": {},
          "RepInterval": {}
        },
        "DvbSdtSettings": {
          "OutputSdt": {},
          "RepInterval": {},
          "ServiceName": {},
          "ServiceProviderName": {}
        },
        "DvbSubPids": {},
        "DvbTdtSettings": {
          "RepInterval": {}
        },
        "DvbTeletextPid": {},
        "Ebif": {},
        "EbpAudioInterval": {},
        "EbpLookaheadMs": {},
        "EbpPlacement": {},
        "EcmPid": {},
        "EsRateInPes": {},
        "EtvPlatformPid": {},
        "EtvSignalPid": {},
        "FragmentTime": {},
        "Klv": {},
        "KlvDataPids": {},
        "NielsenId3Behavior": {},
        "NullPacketBitrate": {},
        "PatInterval": {},
        "PcrControl": {},
        "PcrPeriod": {},
        "PcrPid": {},
        "PmtInterval": {},
        "PmtPid": {},
        "ProgramNum": {},
        "RateMode": {},
        "Scte27Pids": {},
        "Scte35Control": {},
        "Scte35Pid": {},
        "SegmentationMarkers": {},
        "SegmentationStyle": {},
        "SegmentationTime": {},
        "TimedMetadataBehavior": {},
        "TimedMetadataPid": {},
        "TransportStreamId": {},
        "VideoPid": {},
        "Scte35PrerollPullupMilliseconds": {}
      }
    },
    "Destination": {
      "DestinationRefId": {}
    },
    "FecOutputSettings": {
      "ColumnDepth": {},
      "IncludeFec": {},
      "RowLength": {}
    }
  }
}
```

Output Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ArchiveOutputSettings|object|false|none|none|
|FrameCaptureOutputSettings|object|false|none|none|
|HlsOutputSettings|object|false|none|none|
|MediaPackageOutputSettings|object|false|none|none|
|MsSmoothOutputSettings|object|false|none|none|
|MultiplexOutputSettings|object|false|none|none|
|RtmpOutputSettings|object|false|none|none|
|UdpOutputSettings|object|false|none|none|

<h2 id="tocS_Output">Output</h2>
<!-- backwards compatibility -->
<a id="schemaoutput"></a>
<a id="schema_Output"></a>
<a id="tocSoutput"></a>
<a id="tocsoutput"></a>

```json
{
  "AudioDescriptionNames": {},
  "CaptionDescriptionNames": {},
  "OutputName": {},
  "OutputSettings": {
    "ArchiveOutputSettings": {
      "ContainerSettings": {
        "M2tsSettings": {
          "AbsentInputAudioBehavior": {},
          "Arib": {},
          "AribCaptionsPid": {},
          "AribCaptionsPidControl": {},
          "AudioBufferModel": {},
          "AudioFramesPerPes": {},
          "AudioPids": {},
          "AudioStreamType": {},
          "Bitrate": {},
          "BufferModel": {},
          "CcDescriptor": {},
          "DvbNitSettings": {
            "NetworkId": {},
            "NetworkName": {},
            "RepInterval": {}
          },
          "DvbSdtSettings": {
            "OutputSdt": {},
            "RepInterval": {},
            "ServiceName": {},
            "ServiceProviderName": {}
          },
          "DvbSubPids": {},
          "DvbTdtSettings": {
            "RepInterval": {}
          },
          "DvbTeletextPid": {},
          "Ebif": {},
          "EbpAudioInterval": {},
          "EbpLookaheadMs": {},
          "EbpPlacement": {},
          "EcmPid": {},
          "EsRateInPes": {},
          "EtvPlatformPid": {},
          "EtvSignalPid": {},
          "FragmentTime": {},
          "Klv": {},
          "KlvDataPids": {},
          "NielsenId3Behavior": {},
          "NullPacketBitrate": {},
          "PatInterval": {},
          "PcrControl": {},
          "PcrPeriod": {},
          "PcrPid": {},
          "PmtInterval": {},
          "PmtPid": {},
          "ProgramNum": {},
          "RateMode": {},
          "Scte27Pids": {},
          "Scte35Control": {},
          "Scte35Pid": {},
          "SegmentationMarkers": {},
          "SegmentationStyle": {},
          "SegmentationTime": {},
          "TimedMetadataBehavior": {},
          "TimedMetadataPid": {},
          "TransportStreamId": {},
          "VideoPid": {},
          "Scte35PrerollPullupMilliseconds": {}
        },
        "RawSettings": {}
      },
      "Extension": {},
      "NameModifier": {}
    },
    "FrameCaptureOutputSettings": {
      "NameModifier": {}
    },
    "HlsOutputSettings": {
      "H265PackagingType": {},
      "HlsSettings": {
        "AudioOnlyHlsSettings": {
          "AudioGroupId": {},
          "AudioOnlyImage": {
            "PasswordParam": {},
            "Uri": {},
            "Username": {}
          },
          "AudioTrackType": {},
          "SegmentType": {}
        },
        "Fmp4HlsSettings": {
          "AudioRenditionSets": {},
          "NielsenId3Behavior": {},
          "TimedMetadataBehavior": {}
        },
        "FrameCaptureHlsSettings": {},
        "StandardHlsSettings": {
          "AudioRenditionSets": {},
          "M3u8Settings": {
            "AudioFramesPerPes": {},
            "AudioPids": {},
            "EcmPid": {},
            "NielsenId3Behavior": {},
            "PatInterval": {},
            "PcrControl": {},
            "PcrPeriod": {},
            "PcrPid": {},
            "PmtInterval": {},
            "PmtPid": {},
            "ProgramNum": {},
            "Scte35Behavior": {},
            "Scte35Pid": {},
            "TimedMetadataBehavior": {},
            "TimedMetadataPid": {},
            "TransportStreamId": {},
            "VideoPid": {}
          }
        }
      },
      "NameModifier": {},
      "SegmentModifier": {}
    },
    "MediaPackageOutputSettings": {},
    "MsSmoothOutputSettings": {
      "H265PackagingType": {},
      "NameModifier": {}
    },
    "MultiplexOutputSettings": {
      "Destination": {
        "DestinationRefId": {}
      }
    },
    "RtmpOutputSettings": {
      "CertificateMode": {},
      "ConnectionRetryInterval": {},
      "Destination": {
        "DestinationRefId": {}
      },
      "NumRetries": {}
    },
    "UdpOutputSettings": {
      "BufferMsec": {},
      "ContainerSettings": {
        "M2tsSettings": {
          "AbsentInputAudioBehavior": {},
          "Arib": {},
          "AribCaptionsPid": {},
          "AribCaptionsPidControl": {},
          "AudioBufferModel": {},
          "AudioFramesPerPes": {},
          "AudioPids": {},
          "AudioStreamType": {},
          "Bitrate": {},
          "BufferModel": {},
          "CcDescriptor": {},
          "DvbNitSettings": {
            "NetworkId": {},
            "NetworkName": {},
            "RepInterval": {}
          },
          "DvbSdtSettings": {
            "OutputSdt": {},
            "RepInterval": {},
            "ServiceName": {},
            "ServiceProviderName": {}
          },
          "DvbSubPids": {},
          "DvbTdtSettings": {
            "RepInterval": {}
          },
          "DvbTeletextPid": {},
          "Ebif": {},
          "EbpAudioInterval": {},
          "EbpLookaheadMs": {},
          "EbpPlacement": {},
          "EcmPid": {},
          "EsRateInPes": {},
          "EtvPlatformPid": {},
          "EtvSignalPid": {},
          "FragmentTime": {},
          "Klv": {},
          "KlvDataPids": {},
          "NielsenId3Behavior": {},
          "NullPacketBitrate": {},
          "PatInterval": {},
          "PcrControl": {},
          "PcrPeriod": {},
          "PcrPid": {},
          "PmtInterval": {},
          "PmtPid": {},
          "ProgramNum": {},
          "RateMode": {},
          "Scte27Pids": {},
          "Scte35Control": {},
          "Scte35Pid": {},
          "SegmentationMarkers": {},
          "SegmentationStyle": {},
          "SegmentationTime": {},
          "TimedMetadataBehavior": {},
          "TimedMetadataPid": {},
          "TransportStreamId": {},
          "VideoPid": {},
          "Scte35PrerollPullupMilliseconds": {}
        }
      },
      "Destination": {
        "DestinationRefId": {}
      },
      "FecOutputSettings": {
        "ColumnDepth": {},
        "IncludeFec": {},
        "RowLength": {}
      }
    }
  },
  "VideoDescriptionName": {}
}
```

Output settings. There can be multiple outputs within a group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AudioDescriptionNames|object|false|none|none|
|CaptionDescriptionNames|object|false|none|none|
|OutputName|object|false|none|none|
|OutputSettings|object|true|none|none|
|VideoDescriptionName|object|false|none|none|

<h2 id="tocS___listOfMediaPackageOutputDestinationSettings">__listOfMediaPackageOutputDestinationSettings</h2>
<!-- backwards compatibility -->
<a id="schema__listofmediapackageoutputdestinationsettings"></a>
<a id="schema___listOfMediaPackageOutputDestinationSettings"></a>
<a id="tocS__listofmediapackageoutputdestinationsettings"></a>
<a id="tocs__listofmediapackageoutputdestinationsettings"></a>

```json
[
  {
    "ChannelId": {}
  }
]
```

Placeholder documentation for __listOfMediaPackageOutputDestinationSettings

<h2 id="tocS___listOfOutputDestinationSettings">__listOfOutputDestinationSettings</h2>
<!-- backwards compatibility -->
<a id="schema__listofoutputdestinationsettings"></a>
<a id="schema___listOfOutputDestinationSettings"></a>
<a id="tocS__listofoutputdestinationsettings"></a>
<a id="tocs__listofoutputdestinationsettings"></a>

```json
[
  {
    "PasswordParam": {},
    "StreamName": {},
    "Url": {},
    "Username": {}
  }
]
```

Placeholder documentation for __listOfOutputDestinationSettings

<h2 id="tocS_OutputDestinationSettings">OutputDestinationSettings</h2>
<!-- backwards compatibility -->
<a id="schemaoutputdestinationsettings"></a>
<a id="schema_OutputDestinationSettings"></a>
<a id="tocSoutputdestinationsettings"></a>
<a id="tocsoutputdestinationsettings"></a>

```json
{
  "PasswordParam": {},
  "StreamName": {},
  "Url": {},
  "Username": {}
}
```

Placeholder documentation for OutputDestinationSettings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PasswordParam|object|false|none|none|
|StreamName|object|false|none|none|
|Url|object|false|none|none|
|Username|object|false|none|none|

<h2 id="tocS___stringMax32">__stringMax32</h2>
<!-- backwards compatibility -->
<a id="schema__stringmax32"></a>
<a id="schema___stringMax32"></a>
<a id="tocS__stringmax32"></a>
<a id="tocs__stringmax32"></a>

```json
"string"
```

Placeholder documentation for __stringMax32

<h2 id="tocS_OutputGroupSettings">OutputGroupSettings</h2>
<!-- backwards compatibility -->
<a id="schemaoutputgroupsettings"></a>
<a id="schema_OutputGroupSettings"></a>
<a id="tocSoutputgroupsettings"></a>
<a id="tocsoutputgroupsettings"></a>

```json
{
  "ArchiveGroupSettings": {
    "ArchiveCdnSettings": {
      "ArchiveS3Settings": {
        "CannedAcl": {}
      }
    },
    "Destination": {
      "DestinationRefId": {}
    },
    "RolloverInterval": {}
  },
  "FrameCaptureGroupSettings": {
    "Destination": {
      "DestinationRefId": {}
    },
    "FrameCaptureCdnSettings": {
      "FrameCaptureS3Settings": {
        "CannedAcl": {}
      }
    }
  },
  "HlsGroupSettings": {
    "AdMarkers": {},
    "BaseUrlContent": {},
    "BaseUrlContent1": {},
    "BaseUrlManifest": {},
    "BaseUrlManifest1": {},
    "CaptionLanguageMappings": {},
    "CaptionLanguageSetting": {},
    "ClientCache": {},
    "CodecSpecification": {},
    "ConstantIv": {},
    "Destination": {
      "DestinationRefId": {}
    },
    "DirectoryStructure": {},
    "DiscontinuityTags": {},
    "EncryptionType": {},
    "HlsCdnSettings": {
      "HlsAkamaiSettings": {
        "ConnectionRetryInterval": {},
        "FilecacheDuration": {},
        "HttpTransferMode": {},
        "NumRetries": {},
        "RestartDelay": {},
        "Salt": {},
        "Token": {}
      },
      "HlsBasicPutSettings": {
        "ConnectionRetryInterval": {},
        "FilecacheDuration": {},
        "NumRetries": {},
        "RestartDelay": {}
      },
      "HlsMediaStoreSettings": {
        "ConnectionRetryInterval": {},
        "FilecacheDuration": {},
        "MediaStoreStorageClass": {},
        "NumRetries": {},
        "RestartDelay": {}
      },
      "HlsS3Settings": {
        "CannedAcl": {}
      },
      "HlsWebdavSettings": {
        "ConnectionRetryInterval": {},
        "FilecacheDuration": {},
        "HttpTransferMode": {},
        "NumRetries": {},
        "RestartDelay": {}
      }
    },
    "HlsId3SegmentTagging": {},
    "IFrameOnlyPlaylists": {},
    "IncompleteSegmentBehavior": {},
    "IndexNSegments": {},
    "InputLossAction": {},
    "IvInManifest": {},
    "IvSource": {},
    "KeepSegments": {},
    "KeyFormat": {},
    "KeyFormatVersions": {},
    "KeyProviderSettings": {
      "StaticKeySettings": {
        "KeyProviderServer": {
          "PasswordParam": {},
          "Uri": {},
          "Username": {}
        },
        "StaticKeyValue": {}
      }
    },
    "ManifestCompression": {},
    "ManifestDurationFormat": {},
    "MinSegmentLength": {},
    "Mode": {},
    "OutputSelection": {},
    "ProgramDateTime": {},
    "ProgramDateTimeClock": {},
    "ProgramDateTimePeriod": {},
    "RedundantManifest": {},
    "SegmentLength": {},
    "SegmentationMode": {},
    "SegmentsPerSubdirectory": {},
    "StreamInfResolution": {},
    "TimedMetadataId3Frame": {},
    "TimedMetadataId3Period": {},
    "TimestampDeltaMilliseconds": {},
    "TsFileMode": {}
  },
  "MediaPackageGroupSettings": {
    "Destination": {
      "DestinationRefId": {}
    }
  },
  "MsSmoothGroupSettings": {
    "AcquisitionPointId": {},
    "AudioOnlyTimecodeControl": {},
    "CertificateMode": {},
    "ConnectionRetryInterval": {},
    "Destination": {
      "DestinationRefId": {}
    },
    "EventId": {},
    "EventIdMode": {},
    "EventStopBehavior": {},
    "FilecacheDuration": {},
    "FragmentLength": {},
    "InputLossAction": {},
    "NumRetries": {},
    "RestartDelay": {},
    "SegmentationMode": {},
    "SendDelayMs": {},
    "SparseTrackType": {},
    "StreamManifestBehavior": {},
    "TimestampOffset": {},
    "TimestampOffsetMode": {}
  },
  "MultiplexGroupSettings": {},
  "RtmpGroupSettings": {
    "AdMarkers": {},
    "AuthenticationScheme": {},
    "CacheFullBehavior": {},
    "CacheLength": {},
    "CaptionData": {},
    "InputLossAction": {},
    "RestartDelay": {}
  },
  "UdpGroupSettings": {
    "InputLossAction": {},
    "TimedMetadataId3Frame": {},
    "TimedMetadataId3Period": {}
  }
}
```

Output Group Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ArchiveGroupSettings|object|false|none|none|
|FrameCaptureGroupSettings|object|false|none|none|
|HlsGroupSettings|object|false|none|none|
|MediaPackageGroupSettings|object|false|none|none|
|MsSmoothGroupSettings|object|false|none|none|
|MultiplexGroupSettings|object|false|none|none|
|RtmpGroupSettings|object|false|none|none|
|UdpGroupSettings|object|false|none|none|

<h2 id="tocS___listOfOutput">__listOfOutput</h2>
<!-- backwards compatibility -->
<a id="schema__listofoutput"></a>
<a id="schema___listOfOutput"></a>
<a id="tocS__listofoutput"></a>
<a id="tocs__listofoutput"></a>

```json
[
  {
    "AudioDescriptionNames": {},
    "CaptionDescriptionNames": {},
    "OutputName": {},
    "OutputSettings": {
      "ArchiveOutputSettings": {
        "ContainerSettings": {
          "M2tsSettings": {
            "AbsentInputAudioBehavior": {},
            "Arib": {},
            "AribCaptionsPid": {},
            "AribCaptionsPidControl": {},
            "AudioBufferModel": {},
            "AudioFramesPerPes": {},
            "AudioPids": {},
            "AudioStreamType": {},
            "Bitrate": {},
            "BufferModel": {},
            "CcDescriptor": {},
            "DvbNitSettings": {
              "NetworkId": {},
              "NetworkName": {},
              "RepInterval": {}
            },
            "DvbSdtSettings": {
              "OutputSdt": {},
              "RepInterval": {},
              "ServiceName": {},
              "ServiceProviderName": {}
            },
            "DvbSubPids": {},
            "DvbTdtSettings": {
              "RepInterval": {}
            },
            "DvbTeletextPid": {},
            "Ebif": {},
            "EbpAudioInterval": {},
            "EbpLookaheadMs": {},
            "EbpPlacement": {},
            "EcmPid": {},
            "EsRateInPes": {},
            "EtvPlatformPid": {},
            "EtvSignalPid": {},
            "FragmentTime": {},
            "Klv": {},
            "KlvDataPids": {},
            "NielsenId3Behavior": {},
            "NullPacketBitrate": {},
            "PatInterval": {},
            "PcrControl": {},
            "PcrPeriod": {},
            "PcrPid": {},
            "PmtInterval": {},
            "PmtPid": {},
            "ProgramNum": {},
            "RateMode": {},
            "Scte27Pids": {},
            "Scte35Control": {},
            "Scte35Pid": {},
            "SegmentationMarkers": {},
            "SegmentationStyle": {},
            "SegmentationTime": {},
            "TimedMetadataBehavior": {},
            "TimedMetadataPid": {},
            "TransportStreamId": {},
            "VideoPid": {},
            "Scte35PrerollPullupMilliseconds": {}
          },
          "RawSettings": {}
        },
        "Extension": {},
        "NameModifier": {}
      },
      "FrameCaptureOutputSettings": {
        "NameModifier": {}
      },
      "HlsOutputSettings": {
        "H265PackagingType": {},
        "HlsSettings": {
          "AudioOnlyHlsSettings": {
            "AudioGroupId": {},
            "AudioOnlyImage": {
              "PasswordParam": {},
              "Uri": {},
              "Username": {}
            },
            "AudioTrackType": {},
            "SegmentType": {}
          },
          "Fmp4HlsSettings": {
            "AudioRenditionSets": {},
            "NielsenId3Behavior": {},
            "TimedMetadataBehavior": {}
          },
          "FrameCaptureHlsSettings": {},
          "StandardHlsSettings": {
            "AudioRenditionSets": {},
            "M3u8Settings": {
              "AudioFramesPerPes": {},
              "AudioPids": {},
              "EcmPid": {},
              "NielsenId3Behavior": {},
              "PatInterval": {},
              "PcrControl": {},
              "PcrPeriod": {},
              "PcrPid": {},
              "PmtInterval": {},
              "PmtPid": {},
              "ProgramNum": {},
              "Scte35Behavior": {},
              "Scte35Pid": {},
              "TimedMetadataBehavior": {},
              "TimedMetadataPid": {},
              "TransportStreamId": {},
              "VideoPid": {}
            }
          }
        },
        "NameModifier": {},
        "SegmentModifier": {}
      },
      "MediaPackageOutputSettings": {},
      "MsSmoothOutputSettings": {
        "H265PackagingType": {},
        "NameModifier": {}
      },
      "MultiplexOutputSettings": {
        "Destination": {
          "DestinationRefId": {}
        }
      },
      "RtmpOutputSettings": {
        "CertificateMode": {},
        "ConnectionRetryInterval": {},
        "Destination": {
          "DestinationRefId": {}
        },
        "NumRetries": {}
      },
      "UdpOutputSettings": {
        "BufferMsec": {},
        "ContainerSettings": {
          "M2tsSettings": {
            "AbsentInputAudioBehavior": {},
            "Arib": {},
            "AribCaptionsPid": {},
            "AribCaptionsPidControl": {},
            "AudioBufferModel": {},
            "AudioFramesPerPes": {},
            "AudioPids": {},
            "AudioStreamType": {},
            "Bitrate": {},
            "BufferModel": {},
            "CcDescriptor": {},
            "DvbNitSettings": {
              "NetworkId": {},
              "NetworkName": {},
              "RepInterval": {}
            },
            "DvbSdtSettings": {
              "OutputSdt": {},
              "RepInterval": {},
              "ServiceName": {},
              "ServiceProviderName": {}
            },
            "DvbSubPids": {},
            "DvbTdtSettings": {
              "RepInterval": {}
            },
            "DvbTeletextPid": {},
            "Ebif": {},
            "EbpAudioInterval": {},
            "EbpLookaheadMs": {},
            "EbpPlacement": {},
            "EcmPid": {},
            "EsRateInPes": {},
            "EtvPlatformPid": {},
            "EtvSignalPid": {},
            "FragmentTime": {},
            "Klv": {},
            "KlvDataPids": {},
            "NielsenId3Behavior": {},
            "NullPacketBitrate": {},
            "PatInterval": {},
            "PcrControl": {},
            "PcrPeriod": {},
            "PcrPid": {},
            "PmtInterval": {},
            "PmtPid": {},
            "ProgramNum": {},
            "RateMode": {},
            "Scte27Pids": {},
            "Scte35Control": {},
            "Scte35Pid": {},
            "SegmentationMarkers": {},
            "SegmentationStyle": {},
            "SegmentationTime": {},
            "TimedMetadataBehavior": {},
            "TimedMetadataPid": {},
            "TransportStreamId": {},
            "VideoPid": {},
            "Scte35PrerollPullupMilliseconds": {}
          }
        },
        "Destination": {
          "DestinationRefId": {}
        },
        "FecOutputSettings": {
          "ColumnDepth": {},
          "IncludeFec": {},
          "RowLength": {}
        }
      }
    },
    "VideoDescriptionName": {}
  }
]
```

Placeholder documentation for __listOfOutput

<h2 id="tocS_OutputGroup">OutputGroup</h2>
<!-- backwards compatibility -->
<a id="schemaoutputgroup"></a>
<a id="schema_OutputGroup"></a>
<a id="tocSoutputgroup"></a>
<a id="tocsoutputgroup"></a>

```json
{
  "Name": {},
  "OutputGroupSettings": {
    "ArchiveGroupSettings": {
      "ArchiveCdnSettings": {
        "ArchiveS3Settings": {
          "CannedAcl": {}
        }
      },
      "Destination": {
        "DestinationRefId": {}
      },
      "RolloverInterval": {}
    },
    "FrameCaptureGroupSettings": {
      "Destination": {
        "DestinationRefId": {}
      },
      "FrameCaptureCdnSettings": {
        "FrameCaptureS3Settings": {
          "CannedAcl": {}
        }
      }
    },
    "HlsGroupSettings": {
      "AdMarkers": {},
      "BaseUrlContent": {},
      "BaseUrlContent1": {},
      "BaseUrlManifest": {},
      "BaseUrlManifest1": {},
      "CaptionLanguageMappings": {},
      "CaptionLanguageSetting": {},
      "ClientCache": {},
      "CodecSpecification": {},
      "ConstantIv": {},
      "Destination": {
        "DestinationRefId": {}
      },
      "DirectoryStructure": {},
      "DiscontinuityTags": {},
      "EncryptionType": {},
      "HlsCdnSettings": {
        "HlsAkamaiSettings": {
          "ConnectionRetryInterval": {},
          "FilecacheDuration": {},
          "HttpTransferMode": {},
          "NumRetries": {},
          "RestartDelay": {},
          "Salt": {},
          "Token": {}
        },
        "HlsBasicPutSettings": {
          "ConnectionRetryInterval": {},
          "FilecacheDuration": {},
          "NumRetries": {},
          "RestartDelay": {}
        },
        "HlsMediaStoreSettings": {
          "ConnectionRetryInterval": {},
          "FilecacheDuration": {},
          "MediaStoreStorageClass": {},
          "NumRetries": {},
          "RestartDelay": {}
        },
        "HlsS3Settings": {
          "CannedAcl": {}
        },
        "HlsWebdavSettings": {
          "ConnectionRetryInterval": {},
          "FilecacheDuration": {},
          "HttpTransferMode": {},
          "NumRetries": {},
          "RestartDelay": {}
        }
      },
      "HlsId3SegmentTagging": {},
      "IFrameOnlyPlaylists": {},
      "IncompleteSegmentBehavior": {},
      "IndexNSegments": {},
      "InputLossAction": {},
      "IvInManifest": {},
      "IvSource": {},
      "KeepSegments": {},
      "KeyFormat": {},
      "KeyFormatVersions": {},
      "KeyProviderSettings": {
        "StaticKeySettings": {
          "KeyProviderServer": {
            "PasswordParam": {},
            "Uri": {},
            "Username": {}
          },
          "StaticKeyValue": {}
        }
      },
      "ManifestCompression": {},
      "ManifestDurationFormat": {},
      "MinSegmentLength": {},
      "Mode": {},
      "OutputSelection": {},
      "ProgramDateTime": {},
      "ProgramDateTimeClock": {},
      "ProgramDateTimePeriod": {},
      "RedundantManifest": {},
      "SegmentLength": {},
      "SegmentationMode": {},
      "SegmentsPerSubdirectory": {},
      "StreamInfResolution": {},
      "TimedMetadataId3Frame": {},
      "TimedMetadataId3Period": {},
      "TimestampDeltaMilliseconds": {},
      "TsFileMode": {}
    },
    "MediaPackageGroupSettings": {
      "Destination": {
        "DestinationRefId": {}
      }
    },
    "MsSmoothGroupSettings": {
      "AcquisitionPointId": {},
      "AudioOnlyTimecodeControl": {},
      "CertificateMode": {},
      "ConnectionRetryInterval": {},
      "Destination": {
        "DestinationRefId": {}
      },
      "EventId": {},
      "EventIdMode": {},
      "EventStopBehavior": {},
      "FilecacheDuration": {},
      "FragmentLength": {},
      "InputLossAction": {},
      "NumRetries": {},
      "RestartDelay": {},
      "SegmentationMode": {},
      "SendDelayMs": {},
      "SparseTrackType": {},
      "StreamManifestBehavior": {},
      "TimestampOffset": {},
      "TimestampOffsetMode": {}
    },
    "MultiplexGroupSettings": {},
    "RtmpGroupSettings": {
      "AdMarkers": {},
      "AuthenticationScheme": {},
      "CacheFullBehavior": {},
      "CacheLength": {},
      "CaptionData": {},
      "InputLossAction": {},
      "RestartDelay": {}
    },
    "UdpGroupSettings": {
      "InputLossAction": {},
      "TimedMetadataId3Frame": {},
      "TimedMetadataId3Period": {}
    }
  },
  "Outputs": {}
}
```

Output groups for this Live Event. Output groups contain information about where streams should be distributed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|OutputGroupSettings|object|true|none|none|
|Outputs|object|true|none|none|

<h2 id="tocS_RtmpGroupSettings">RtmpGroupSettings</h2>
<!-- backwards compatibility -->
<a id="schemartmpgroupsettings"></a>
<a id="schema_RtmpGroupSettings"></a>
<a id="tocSrtmpgroupsettings"></a>
<a id="tocsrtmpgroupsettings"></a>

```json
{
  "AdMarkers": {},
  "AuthenticationScheme": {},
  "CacheFullBehavior": {},
  "CacheLength": {},
  "CaptionData": {},
  "InputLossAction": {},
  "RestartDelay": {}
}
```

Rtmp Group Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdMarkers|object|false|none|none|
|AuthenticationScheme|object|false|none|none|
|CacheFullBehavior|object|false|none|none|
|CacheLength|object|false|none|none|
|CaptionData|object|false|none|none|
|InputLossAction|object|false|none|none|
|RestartDelay|object|false|none|none|

<h2 id="tocS_UdpGroupSettings">UdpGroupSettings</h2>
<!-- backwards compatibility -->
<a id="schemaudpgroupsettings"></a>
<a id="schema_UdpGroupSettings"></a>
<a id="tocSudpgroupsettings"></a>
<a id="tocsudpgroupsettings"></a>

```json
{
  "InputLossAction": {},
  "TimedMetadataId3Frame": {},
  "TimedMetadataId3Period": {}
}
```

Udp Group Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InputLossAction|object|false|none|none|
|TimedMetadataId3Frame|object|false|none|none|
|TimedMetadataId3Period|object|false|none|none|

<h2 id="tocS_RtmpOutputSettings">RtmpOutputSettings</h2>
<!-- backwards compatibility -->
<a id="schemartmpoutputsettings"></a>
<a id="schema_RtmpOutputSettings"></a>
<a id="tocSrtmpoutputsettings"></a>
<a id="tocsrtmpoutputsettings"></a>

```json
{
  "CertificateMode": {},
  "ConnectionRetryInterval": {},
  "Destination": {
    "DestinationRefId": {}
  },
  "NumRetries": {}
}
```

Rtmp Output Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateMode|object|false|none|none|
|ConnectionRetryInterval|object|false|none|none|
|Destination|object|true|none|none|
|NumRetries|object|false|none|none|

<h2 id="tocS_UdpOutputSettings">UdpOutputSettings</h2>
<!-- backwards compatibility -->
<a id="schemaudpoutputsettings"></a>
<a id="schema_UdpOutputSettings"></a>
<a id="tocSudpoutputsettings"></a>
<a id="tocsudpoutputsettings"></a>

```json
{
  "BufferMsec": {},
  "ContainerSettings": {
    "M2tsSettings": {
      "AbsentInputAudioBehavior": {},
      "Arib": {},
      "AribCaptionsPid": {},
      "AribCaptionsPidControl": {},
      "AudioBufferModel": {},
      "AudioFramesPerPes": {},
      "AudioPids": {},
      "AudioStreamType": {},
      "Bitrate": {},
      "BufferModel": {},
      "CcDescriptor": {},
      "DvbNitSettings": {
        "NetworkId": {},
        "NetworkName": {},
        "RepInterval": {}
      },
      "DvbSdtSettings": {
        "OutputSdt": {},
        "RepInterval": {},
        "ServiceName": {},
        "ServiceProviderName": {}
      },
      "DvbSubPids": {},
      "DvbTdtSettings": {
        "RepInterval": {}
      },
      "DvbTeletextPid": {},
      "Ebif": {},
      "EbpAudioInterval": {},
      "EbpLookaheadMs": {},
      "EbpPlacement": {},
      "EcmPid": {},
      "EsRateInPes": {},
      "EtvPlatformPid": {},
      "EtvSignalPid": {},
      "FragmentTime": {},
      "Klv": {},
      "KlvDataPids": {},
      "NielsenId3Behavior": {},
      "NullPacketBitrate": {},
      "PatInterval": {},
      "PcrControl": {},
      "PcrPeriod": {},
      "PcrPid": {},
      "PmtInterval": {},
      "PmtPid": {},
      "ProgramNum": {},
      "RateMode": {},
      "Scte27Pids": {},
      "Scte35Control": {},
      "Scte35Pid": {},
      "SegmentationMarkers": {},
      "SegmentationStyle": {},
      "SegmentationTime": {},
      "TimedMetadataBehavior": {},
      "TimedMetadataPid": {},
      "TransportStreamId": {},
      "VideoPid": {},
      "Scte35PrerollPullupMilliseconds": {}
    }
  },
  "Destination": {
    "DestinationRefId": {}
  },
  "FecOutputSettings": {
    "ColumnDepth": {},
    "IncludeFec": {},
    "RowLength": {}
  }
}
```

Udp Output Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BufferMsec|object|false|none|none|
|ContainerSettings|object|true|none|none|
|Destination|object|true|none|none|
|FecOutputSettings|object|false|none|none|

<h2 id="tocS___listOfPipelinePauseStateSettings">__listOfPipelinePauseStateSettings</h2>
<!-- backwards compatibility -->
<a id="schema__listofpipelinepausestatesettings"></a>
<a id="schema___listOfPipelinePauseStateSettings"></a>
<a id="tocS__listofpipelinepausestatesettings"></a>
<a id="tocs__listofpipelinepausestatesettings"></a>

```json
[
  {
    "PipelineId": {}
  }
]
```

Placeholder documentation for __listOfPipelinePauseStateSettings

<h2 id="tocS_PauseStateScheduleActionSettings">PauseStateScheduleActionSettings</h2>
<!-- backwards compatibility -->
<a id="schemapausestatescheduleactionsettings"></a>
<a id="schema_PauseStateScheduleActionSettings"></a>
<a id="tocSpausestatescheduleactionsettings"></a>
<a id="tocspausestatescheduleactionsettings"></a>

```json
{
  "Pipelines": {}
}
```

Settings for the action to set pause state of a channel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Pipelines|object|false|none|none|

<h2 id="tocS_PipelineDetail">PipelineDetail</h2>
<!-- backwards compatibility -->
<a id="schemapipelinedetail"></a>
<a id="schema_PipelineDetail"></a>
<a id="tocSpipelinedetail"></a>
<a id="tocspipelinedetail"></a>

```json
{
  "ActiveInputAttachmentName": {},
  "ActiveInputSwitchActionName": {},
  "ActiveMotionGraphicsActionName": {},
  "ActiveMotionGraphicsUri": {},
  "PipelineId": {}
}
```

Runtime details of a pipeline when a channel is running.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActiveInputAttachmentName|object|false|none|none|
|ActiveInputSwitchActionName|object|false|none|none|
|ActiveMotionGraphicsActionName|object|false|none|none|
|ActiveMotionGraphicsUri|object|false|none|none|
|PipelineId|object|false|none|none|

<h2 id="tocS_PipelineId">PipelineId</h2>
<!-- backwards compatibility -->
<a id="schemapipelineid"></a>
<a id="schema_PipelineId"></a>
<a id="tocSpipelineid"></a>
<a id="tocspipelineid"></a>

```json
"PIPELINE_0"
```

Pipeline ID

<h2 id="tocS_PipelinePauseStateSettings">PipelinePauseStateSettings</h2>
<!-- backwards compatibility -->
<a id="schemapipelinepausestatesettings"></a>
<a id="schema_PipelinePauseStateSettings"></a>
<a id="tocSpipelinepausestatesettings"></a>
<a id="tocspipelinepausestatesettings"></a>

```json
{
  "PipelineId": {}
}
```

Settings for pausing a pipeline.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PipelineId|object|true|none|none|

<h2 id="tocS_PurchaseOfferingRequest">PurchaseOfferingRequest</h2>
<!-- backwards compatibility -->
<a id="schemapurchaseofferingrequest"></a>
<a id="schema_PurchaseOfferingRequest"></a>
<a id="tocSpurchaseofferingrequest"></a>
<a id="tocspurchaseofferingrequest"></a>

```json
{
  "Count": {},
  "Name": {},
  "RenewalSettings": {
    "AutomaticRenewal": {},
    "RenewalCount": {}
  },
  "RequestId": {},
  "Start": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Placeholder documentation for PurchaseOfferingRequest

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|object|true|none|none|
|Name|object|false|none|none|
|RenewalSettings|object|false|none|none|
|RequestId|object|false|none|none|
|Start|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_Reservation">Reservation</h2>
<!-- backwards compatibility -->
<a id="schemareservation"></a>
<a id="schema_Reservation"></a>
<a id="tocSreservation"></a>
<a id="tocsreservation"></a>

```json
{
  "Arn": {},
  "Count": {},
  "CurrencyCode": {},
  "Duration": {},
  "DurationUnits": {},
  "End": {},
  "FixedPrice": {},
  "Name": {},
  "OfferingDescription": {},
  "OfferingId": {},
  "OfferingType": {},
  "Region": {},
  "RenewalSettings": {
    "AutomaticRenewal": {},
    "RenewalCount": {}
  },
  "ReservationId": {},
  "ResourceSpecification": {
    "ChannelClass": {},
    "Codec": {},
    "MaximumBitrate": {},
    "MaximumFramerate": {},
    "Resolution": {},
    "ResourceType": {},
    "SpecialFeature": {},
    "VideoQuality": {}
  },
  "Start": {},
  "State": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "UsagePrice": {}
}
```

Reserved resources available to use

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Count|object|false|none|none|
|CurrencyCode|object|false|none|none|
|Duration|object|false|none|none|
|DurationUnits|object|false|none|none|
|End|object|false|none|none|
|FixedPrice|object|false|none|none|
|Name|object|false|none|none|
|OfferingDescription|object|false|none|none|
|OfferingId|object|false|none|none|
|OfferingType|object|false|none|none|
|Region|object|false|none|none|
|RenewalSettings|object|false|none|none|
|ReservationId|object|false|none|none|
|ResourceSpecification|object|false|none|none|
|Start|object|false|none|none|
|State|object|false|none|none|
|Tags|object|false|none|none|
|UsagePrice|object|false|none|none|

<h2 id="tocS_RebootInputDeviceForce">RebootInputDeviceForce</h2>
<!-- backwards compatibility -->
<a id="schemarebootinputdeviceforce"></a>
<a id="schema_RebootInputDeviceForce"></a>
<a id="tocSrebootinputdeviceforce"></a>
<a id="tocsrebootinputdeviceforce"></a>

```json
"NO"
```

Whether or not to force reboot the input device.

<h2 id="tocS_RebootInputDeviceRequest">RebootInputDeviceRequest</h2>
<!-- backwards compatibility -->
<a id="schemarebootinputdevicerequest"></a>
<a id="schema_RebootInputDeviceRequest"></a>
<a id="tocSrebootinputdevicerequest"></a>
<a id="tocsrebootinputdevicerequest"></a>

```json
{
  "Force": {}
}
```

A request to reboot an AWS Elemental device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Force|object|false|none|none|

<h2 id="tocS_RejectInputDeviceTransferRequest">RejectInputDeviceTransferRequest</h2>
<!-- backwards compatibility -->
<a id="schemarejectinputdevicetransferrequest"></a>
<a id="schema_RejectInputDeviceTransferRequest"></a>
<a id="tocSrejectinputdevicetransferrequest"></a>
<a id="tocsrejectinputdevicetransferrequest"></a>

```json
{}
```

Placeholder documentation for RejectInputDeviceTransferRequest

<h2 id="tocS___listOfAudioChannelMapping">__listOfAudioChannelMapping</h2>
<!-- backwards compatibility -->
<a id="schema__listofaudiochannelmapping"></a>
<a id="schema___listOfAudioChannelMapping"></a>
<a id="tocS__listofaudiochannelmapping"></a>
<a id="tocs__listofaudiochannelmapping"></a>

```json
[
  {
    "InputChannelLevels": {},
    "OutputChannel": {}
  }
]
```

Placeholder documentation for __listOfAudioChannelMapping

<h2 id="tocS___integerMin1Max8">__integerMin1Max8</h2>
<!-- backwards compatibility -->
<a id="schema__integermin1max8"></a>
<a id="schema___integerMin1Max8"></a>
<a id="tocS__integermin1max8"></a>
<a id="tocs__integermin1max8"></a>

```json
1
```

Placeholder documentation for __integerMin1Max8

<h2 id="tocS_ReservationCodec">ReservationCodec</h2>
<!-- backwards compatibility -->
<a id="schemareservationcodec"></a>
<a id="schema_ReservationCodec"></a>
<a id="tocSreservationcodec"></a>
<a id="tocsreservationcodec"></a>

```json
"MPEG2"
```

Codec, 'MPEG2', 'AVC', 'HEVC', or 'AUDIO'

<h2 id="tocS_ReservationMaximumBitrate">ReservationMaximumBitrate</h2>
<!-- backwards compatibility -->
<a id="schemareservationmaximumbitrate"></a>
<a id="schema_ReservationMaximumBitrate"></a>
<a id="tocSreservationmaximumbitrate"></a>
<a id="tocsreservationmaximumbitrate"></a>

```json
"MAX_10_MBPS"
```

Maximum bitrate in megabits per second

<h2 id="tocS_ReservationMaximumFramerate">ReservationMaximumFramerate</h2>
<!-- backwards compatibility -->
<a id="schemareservationmaximumframerate"></a>
<a id="schema_ReservationMaximumFramerate"></a>
<a id="tocSreservationmaximumframerate"></a>
<a id="tocsreservationmaximumframerate"></a>

```json
"MAX_30_FPS"
```

Maximum framerate in frames per second (Outputs only)

<h2 id="tocS_ReservationResolution">ReservationResolution</h2>
<!-- backwards compatibility -->
<a id="schemareservationresolution"></a>
<a id="schema_ReservationResolution"></a>
<a id="tocSreservationresolution"></a>
<a id="tocsreservationresolution"></a>

```json
"SD"
```

Resolution based on lines of vertical resolution; SD is less than 720 lines, HD is 720 to 1080 lines, FHD is 1080 lines, UHD is greater than 1080 lines

<h2 id="tocS_ReservationResourceType">ReservationResourceType</h2>
<!-- backwards compatibility -->
<a id="schemareservationresourcetype"></a>
<a id="schema_ReservationResourceType"></a>
<a id="tocSreservationresourcetype"></a>
<a id="tocsreservationresourcetype"></a>

```json
"INPUT"
```

Resource type, 'INPUT', 'OUTPUT', 'MULTIPLEX', or 'CHANNEL'

<h2 id="tocS_ReservationSpecialFeature">ReservationSpecialFeature</h2>
<!-- backwards compatibility -->
<a id="schemareservationspecialfeature"></a>
<a id="schema_ReservationSpecialFeature"></a>
<a id="tocSreservationspecialfeature"></a>
<a id="tocsreservationspecialfeature"></a>

```json
"ADVANCED_AUDIO"
```

Special features, 'ADVANCED_AUDIO' 'AUDIO_NORMALIZATION' 'MGHD' or 'MGUHD'

<h2 id="tocS_ReservationVideoQuality">ReservationVideoQuality</h2>
<!-- backwards compatibility -->
<a id="schemareservationvideoquality"></a>
<a id="schema_ReservationVideoQuality"></a>
<a id="tocSreservationvideoquality"></a>
<a id="tocsreservationvideoquality"></a>

```json
"STANDARD"
```

Video quality, e.g. 'STANDARD' (Outputs only)

<h2 id="tocS_RtmpAdMarkers">RtmpAdMarkers</h2>
<!-- backwards compatibility -->
<a id="schemartmpadmarkers"></a>
<a id="schema_RtmpAdMarkers"></a>
<a id="tocSrtmpadmarkers"></a>
<a id="tocsrtmpadmarkers"></a>

```json
"ON_CUE_POINT_SCTE35"
```

Rtmp Ad Markers

<h2 id="tocS_RtmpCacheFullBehavior">RtmpCacheFullBehavior</h2>
<!-- backwards compatibility -->
<a id="schemartmpcachefullbehavior"></a>
<a id="schema_RtmpCacheFullBehavior"></a>
<a id="tocSrtmpcachefullbehavior"></a>
<a id="tocsrtmpcachefullbehavior"></a>

```json
"DISCONNECT_IMMEDIATELY"
```

Rtmp Cache Full Behavior

<h2 id="tocS_RtmpCaptionData">RtmpCaptionData</h2>
<!-- backwards compatibility -->
<a id="schemartmpcaptiondata"></a>
<a id="schema_RtmpCaptionData"></a>
<a id="tocSrtmpcaptiondata"></a>
<a id="tocsrtmpcaptiondata"></a>

```json
"ALL"
```

Rtmp Caption Data

<h2 id="tocS___listOfRtmpAdMarkers">__listOfRtmpAdMarkers</h2>
<!-- backwards compatibility -->
<a id="schema__listofrtmpadmarkers"></a>
<a id="schema___listOfRtmpAdMarkers"></a>
<a id="tocS__listofrtmpadmarkers"></a>
<a id="tocs__listofrtmpadmarkers"></a>

```json
[
  "ON_CUE_POINT_SCTE35"
]
```

Placeholder documentation for __listOfRtmpAdMarkers

<h2 id="tocS___integerMin30">__integerMin30</h2>
<!-- backwards compatibility -->
<a id="schema__integermin30"></a>
<a id="schema___integerMin30"></a>
<a id="tocS__integermin30"></a>
<a id="tocs__integermin30"></a>

```json
30
```

Placeholder documentation for __integerMin30

<h2 id="tocS_RtmpOutputCertificateMode">RtmpOutputCertificateMode</h2>
<!-- backwards compatibility -->
<a id="schemartmpoutputcertificatemode"></a>
<a id="schema_RtmpOutputCertificateMode"></a>
<a id="tocSrtmpoutputcertificatemode"></a>
<a id="tocsrtmpoutputcertificatemode"></a>

```json
"SELF_SIGNED"
```

Rtmp Output Certificate Mode

<h2 id="tocS_ScheduleActionSettings">ScheduleActionSettings</h2>
<!-- backwards compatibility -->
<a id="schemascheduleactionsettings"></a>
<a id="schema_ScheduleActionSettings"></a>
<a id="tocSscheduleactionsettings"></a>
<a id="tocsscheduleactionsettings"></a>

```json
{
  "HlsId3SegmentTaggingSettings": {
    "Tag": {},
    "Id3": {}
  },
  "HlsTimedMetadataSettings": {
    "Id3": {}
  },
  "InputPrepareSettings": {
    "InputAttachmentNameReference": {},
    "InputClippingSettings": {
      "InputTimecodeSource": {},
      "StartTimecode": {
        "Timecode": {}
      },
      "StopTimecode": {
        "LastFrameClippingBehavior": {},
        "Timecode": {}
      }
    },
    "UrlPath": {}
  },
  "InputSwitchSettings": {
    "InputAttachmentNameReference": {},
    "InputClippingSettings": {
      "InputTimecodeSource": {},
      "StartTimecode": {
        "Timecode": {}
      },
      "StopTimecode": {
        "LastFrameClippingBehavior": {},
        "Timecode": {}
      }
    },
    "UrlPath": {}
  },
  "MotionGraphicsImageActivateSettings": {
    "Duration": {},
    "PasswordParam": {},
    "Url": {},
    "Username": {}
  },
  "MotionGraphicsImageDeactivateSettings": {},
  "PauseStateSettings": {
    "Pipelines": {}
  },
  "Scte35InputSettings": {
    "InputAttachmentNameReference": {},
    "Mode": {}
  },
  "Scte35ReturnToNetworkSettings": {
    "SpliceEventId": {}
  },
  "Scte35SpliceInsertSettings": {
    "Duration": {},
    "SpliceEventId": {}
  },
  "Scte35TimeSignalSettings": {
    "Scte35Descriptors": {}
  },
  "StaticImageActivateSettings": {
    "Duration": {},
    "FadeIn": {},
    "FadeOut": {},
    "Height": {},
    "Image": {
      "PasswordParam": {},
      "Uri": {},
      "Username": {}
    },
    "ImageX": {},
    "ImageY": {},
    "Layer": {},
    "Opacity": {},
    "Width": {}
  },
  "StaticImageDeactivateSettings": {
    "FadeOut": {},
    "Layer": {}
  }
}
```

Holds the settings for a single schedule action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HlsId3SegmentTaggingSettings|object|false|none|none|
|HlsTimedMetadataSettings|object|false|none|none|
|InputPrepareSettings|object|false|none|none|
|InputSwitchSettings|object|false|none|none|
|MotionGraphicsImageActivateSettings|object|false|none|none|
|MotionGraphicsImageDeactivateSettings|object|false|none|none|
|PauseStateSettings|object|false|none|none|
|Scte35InputSettings|object|false|none|none|
|Scte35ReturnToNetworkSettings|object|false|none|none|
|Scte35SpliceInsertSettings|object|false|none|none|
|Scte35TimeSignalSettings|object|false|none|none|
|StaticImageActivateSettings|object|false|none|none|
|StaticImageDeactivateSettings|object|false|none|none|

<h2 id="tocS_ScheduleActionStartSettings">ScheduleActionStartSettings</h2>
<!-- backwards compatibility -->
<a id="schemascheduleactionstartsettings"></a>
<a id="schema_ScheduleActionStartSettings"></a>
<a id="tocSscheduleactionstartsettings"></a>
<a id="tocsscheduleactionstartsettings"></a>

```json
{
  "FixedModeScheduleActionStartSettings": {
    "Time": {}
  },
  "FollowModeScheduleActionStartSettings": {
    "FollowPoint": {},
    "ReferenceActionName": {}
  },
  "ImmediateModeScheduleActionStartSettings": {}
}
```

Settings to specify when an action should occur. Only one of the options must be selected.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FixedModeScheduleActionStartSettings|object|false|none|none|
|FollowModeScheduleActionStartSettings|object|false|none|none|
|ImmediateModeScheduleActionStartSettings|object|false|none|none|

<h2 id="tocS_ScheduleAction">ScheduleAction</h2>
<!-- backwards compatibility -->
<a id="schemascheduleaction"></a>
<a id="schema_ScheduleAction"></a>
<a id="tocSscheduleaction"></a>
<a id="tocsscheduleaction"></a>

```json
{
  "ActionName": {},
  "ScheduleActionSettings": {
    "HlsId3SegmentTaggingSettings": {
      "Tag": {},
      "Id3": {}
    },
    "HlsTimedMetadataSettings": {
      "Id3": {}
    },
    "InputPrepareSettings": {
      "InputAttachmentNameReference": {},
      "InputClippingSettings": {
        "InputTimecodeSource": {},
        "StartTimecode": {
          "Timecode": {}
        },
        "StopTimecode": {
          "LastFrameClippingBehavior": {},
          "Timecode": {}
        }
      },
      "UrlPath": {}
    },
    "InputSwitchSettings": {
      "InputAttachmentNameReference": {},
      "InputClippingSettings": {
        "InputTimecodeSource": {},
        "StartTimecode": {
          "Timecode": {}
        },
        "StopTimecode": {
          "LastFrameClippingBehavior": {},
          "Timecode": {}
        }
      },
      "UrlPath": {}
    },
    "MotionGraphicsImageActivateSettings": {
      "Duration": {},
      "PasswordParam": {},
      "Url": {},
      "Username": {}
    },
    "MotionGraphicsImageDeactivateSettings": {},
    "PauseStateSettings": {
      "Pipelines": {}
    },
    "Scte35InputSettings": {
      "InputAttachmentNameReference": {},
      "Mode": {}
    },
    "Scte35ReturnToNetworkSettings": {
      "SpliceEventId": {}
    },
    "Scte35SpliceInsertSettings": {
      "Duration": {},
      "SpliceEventId": {}
    },
    "Scte35TimeSignalSettings": {
      "Scte35Descriptors": {}
    },
    "StaticImageActivateSettings": {
      "Duration": {},
      "FadeIn": {},
      "FadeOut": {},
      "Height": {},
      "Image": {
        "PasswordParam": {},
        "Uri": {},
        "Username": {}
      },
      "ImageX": {},
      "ImageY": {},
      "Layer": {},
      "Opacity": {},
      "Width": {}
    },
    "StaticImageDeactivateSettings": {
      "FadeOut": {},
      "Layer": {}
    }
  },
  "ScheduleActionStartSettings": {
    "FixedModeScheduleActionStartSettings": {
      "Time": {}
    },
    "FollowModeScheduleActionStartSettings": {
      "FollowPoint": {},
      "ReferenceActionName": {}
    },
    "ImmediateModeScheduleActionStartSettings": {}
  }
}
```

Contains information on a single schedule action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActionName|object|true|none|none|
|ScheduleActionSettings|object|true|none|none|
|ScheduleActionStartSettings|object|true|none|none|

<h2 id="tocS_Scte35InputScheduleActionSettings">Scte35InputScheduleActionSettings</h2>
<!-- backwards compatibility -->
<a id="schemascte35inputscheduleactionsettings"></a>
<a id="schema_Scte35InputScheduleActionSettings"></a>
<a id="tocSscte35inputscheduleactionsettings"></a>
<a id="tocsscte35inputscheduleactionsettings"></a>

```json
{
  "InputAttachmentNameReference": {},
  "Mode": {}
}
```

Scte35Input Schedule Action Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InputAttachmentNameReference|object|false|none|none|
|Mode|object|true|none|none|

<h2 id="tocS_Scte35ReturnToNetworkScheduleActionSettings">Scte35ReturnToNetworkScheduleActionSettings</h2>
<!-- backwards compatibility -->
<a id="schemascte35returntonetworkscheduleactionsettings"></a>
<a id="schema_Scte35ReturnToNetworkScheduleActionSettings"></a>
<a id="tocSscte35returntonetworkscheduleactionsettings"></a>
<a id="tocsscte35returntonetworkscheduleactionsettings"></a>

```json
{
  "SpliceEventId": {}
}
```

Settings for a SCTE-35 return_to_network message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SpliceEventId|object|true|none|none|

<h2 id="tocS_Scte35SpliceInsertScheduleActionSettings">Scte35SpliceInsertScheduleActionSettings</h2>
<!-- backwards compatibility -->
<a id="schemascte35spliceinsertscheduleactionsettings"></a>
<a id="schema_Scte35SpliceInsertScheduleActionSettings"></a>
<a id="tocSscte35spliceinsertscheduleactionsettings"></a>
<a id="tocsscte35spliceinsertscheduleactionsettings"></a>

```json
{
  "Duration": {},
  "SpliceEventId": {}
}
```

Settings for a SCTE-35 splice_insert message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Duration|object|false|none|none|
|SpliceEventId|object|true|none|none|

<h2 id="tocS_Scte35TimeSignalScheduleActionSettings">Scte35TimeSignalScheduleActionSettings</h2>
<!-- backwards compatibility -->
<a id="schemascte35timesignalscheduleactionsettings"></a>
<a id="schema_Scte35TimeSignalScheduleActionSettings"></a>
<a id="tocSscte35timesignalscheduleactionsettings"></a>
<a id="tocsscte35timesignalscheduleactionsettings"></a>

```json
{
  "Scte35Descriptors": {}
}
```

Settings for a SCTE-35 time_signal.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Scte35Descriptors|object|true|none|none|

<h2 id="tocS_StaticImageActivateScheduleActionSettings">StaticImageActivateScheduleActionSettings</h2>
<!-- backwards compatibility -->
<a id="schemastaticimageactivatescheduleactionsettings"></a>
<a id="schema_StaticImageActivateScheduleActionSettings"></a>
<a id="tocSstaticimageactivatescheduleactionsettings"></a>
<a id="tocsstaticimageactivatescheduleactionsettings"></a>

```json
{
  "Duration": {},
  "FadeIn": {},
  "FadeOut": {},
  "Height": {},
  "Image": {
    "PasswordParam": {},
    "Uri": {},
    "Username": {}
  },
  "ImageX": {},
  "ImageY": {},
  "Layer": {},
  "Opacity": {},
  "Width": {}
}
```

Settings for the action to activate a static image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Duration|object|false|none|none|
|FadeIn|object|false|none|none|
|FadeOut|object|false|none|none|
|Height|object|false|none|none|
|Image|object|true|none|none|
|ImageX|object|false|none|none|
|ImageY|object|false|none|none|
|Layer|object|false|none|none|
|Opacity|object|false|none|none|
|Width|object|false|none|none|

<h2 id="tocS_StaticImageDeactivateScheduleActionSettings">StaticImageDeactivateScheduleActionSettings</h2>
<!-- backwards compatibility -->
<a id="schemastaticimagedeactivatescheduleactionsettings"></a>
<a id="schema_StaticImageDeactivateScheduleActionSettings"></a>
<a id="tocSstaticimagedeactivatescheduleactionsettings"></a>
<a id="tocsstaticimagedeactivatescheduleactionsettings"></a>

```json
{
  "FadeOut": {},
  "Layer": {}
}
```

Settings for the action to deactivate the image in a specific layer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FadeOut|object|false|none|none|
|Layer|object|false|none|none|

<h2 id="tocS_Scte20Convert608To708">Scte20Convert608To708</h2>
<!-- backwards compatibility -->
<a id="schemascte20convert608to708"></a>
<a id="schema_Scte20Convert608To708"></a>
<a id="tocSscte20convert608to708"></a>
<a id="tocsscte20convert608to708"></a>

```json
"DISABLED"
```

Scte20 Convert608 To708

<h2 id="tocS_Scte27OcrLanguage">Scte27OcrLanguage</h2>
<!-- backwards compatibility -->
<a id="schemascte27ocrlanguage"></a>
<a id="schema_Scte27OcrLanguage"></a>
<a id="tocSscte27ocrlanguage"></a>
<a id="tocsscte27ocrlanguage"></a>

```json
"DEU"
```

Scte27 Ocr Language

<h2 id="tocS_Scte35AposNoRegionalBlackoutBehavior">Scte35AposNoRegionalBlackoutBehavior</h2>
<!-- backwards compatibility -->
<a id="schemascte35aposnoregionalblackoutbehavior"></a>
<a id="schema_Scte35AposNoRegionalBlackoutBehavior"></a>
<a id="tocSscte35aposnoregionalblackoutbehavior"></a>
<a id="tocsscte35aposnoregionalblackoutbehavior"></a>

```json
"FOLLOW"
```

Scte35 Apos No Regional Blackout Behavior

<h2 id="tocS_Scte35AposWebDeliveryAllowedBehavior">Scte35AposWebDeliveryAllowedBehavior</h2>
<!-- backwards compatibility -->
<a id="schemascte35aposwebdeliveryallowedbehavior"></a>
<a id="schema_Scte35AposWebDeliveryAllowedBehavior"></a>
<a id="tocSscte35aposwebdeliveryallowedbehavior"></a>
<a id="tocsscte35aposwebdeliveryallowedbehavior"></a>

```json
"FOLLOW"
```

Scte35 Apos Web Delivery Allowed Behavior

<h2 id="tocS_Scte35ArchiveAllowedFlag">Scte35ArchiveAllowedFlag</h2>
<!-- backwards compatibility -->
<a id="schemascte35archiveallowedflag"></a>
<a id="schema_Scte35ArchiveAllowedFlag"></a>
<a id="tocSscte35archiveallowedflag"></a>
<a id="tocsscte35archiveallowedflag"></a>

```json
"ARCHIVE_NOT_ALLOWED"
```

Corresponds to the archive_allowed parameter. A value of ARCHIVE_NOT_ALLOWED corresponds to 0 (false) in the SCTE-35 specification. If you include one of the "restriction" flags then you must include all four of them.

<h2 id="tocS_Scte35DeviceRestrictions">Scte35DeviceRestrictions</h2>
<!-- backwards compatibility -->
<a id="schemascte35devicerestrictions"></a>
<a id="schema_Scte35DeviceRestrictions"></a>
<a id="tocSscte35devicerestrictions"></a>
<a id="tocsscte35devicerestrictions"></a>

```json
"NONE"
```

Corresponds to the device_restrictions parameter in a segmentation_descriptor. If you include one of the "restriction" flags then you must include all four of them.

<h2 id="tocS_Scte35NoRegionalBlackoutFlag">Scte35NoRegionalBlackoutFlag</h2>
<!-- backwards compatibility -->
<a id="schemascte35noregionalblackoutflag"></a>
<a id="schema_Scte35NoRegionalBlackoutFlag"></a>
<a id="tocSscte35noregionalblackoutflag"></a>
<a id="tocsscte35noregionalblackoutflag"></a>

```json
"REGIONAL_BLACKOUT"
```

Corresponds to the no_regional_blackout_flag parameter. A value of REGIONAL_BLACKOUT corresponds to 0 (false) in the SCTE-35 specification. If you include one of the "restriction" flags then you must include all four of them.

<h2 id="tocS_Scte35WebDeliveryAllowedFlag">Scte35WebDeliveryAllowedFlag</h2>
<!-- backwards compatibility -->
<a id="schemascte35webdeliveryallowedflag"></a>
<a id="schema_Scte35WebDeliveryAllowedFlag"></a>
<a id="tocSscte35webdeliveryallowedflag"></a>
<a id="tocsscte35webdeliveryallowedflag"></a>

```json
"WEB_DELIVERY_NOT_ALLOWED"
```

Corresponds to the web_delivery_allowed_flag parameter. A value of WEB_DELIVERY_NOT_ALLOWED corresponds to 0 (false) in the SCTE-35 specification. If you include one of the "restriction" flags then you must include all four of them.

<h2 id="tocS_Scte35DeliveryRestrictions">Scte35DeliveryRestrictions</h2>
<!-- backwards compatibility -->
<a id="schemascte35deliveryrestrictions"></a>
<a id="schema_Scte35DeliveryRestrictions"></a>
<a id="tocSscte35deliveryrestrictions"></a>
<a id="tocsscte35deliveryrestrictions"></a>

```json
{
  "ArchiveAllowedFlag": {},
  "DeviceRestrictions": {},
  "NoRegionalBlackoutFlag": {},
  "WebDeliveryAllowedFlag": {}
}
```

Corresponds to SCTE-35 delivery_not_restricted_flag parameter. To declare delivery restrictions, include this element and its four "restriction" flags. To declare that there are no restrictions, omit this element.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ArchiveAllowedFlag|object|true|none|none|
|DeviceRestrictions|object|true|none|none|
|NoRegionalBlackoutFlag|object|true|none|none|
|WebDeliveryAllowedFlag|object|true|none|none|

<h2 id="tocS_Scte35DescriptorSettings">Scte35DescriptorSettings</h2>
<!-- backwards compatibility -->
<a id="schemascte35descriptorsettings"></a>
<a id="schema_Scte35DescriptorSettings"></a>
<a id="tocSscte35descriptorsettings"></a>
<a id="tocsscte35descriptorsettings"></a>

```json
{
  "SegmentationDescriptorScte35DescriptorSettings": {
    "DeliveryRestrictions": {
      "ArchiveAllowedFlag": {},
      "DeviceRestrictions": {},
      "NoRegionalBlackoutFlag": {},
      "WebDeliveryAllowedFlag": {}
    },
    "SegmentNum": {},
    "SegmentationCancelIndicator": {},
    "SegmentationDuration": {},
    "SegmentationEventId": {},
    "SegmentationTypeId": {},
    "SegmentationUpid": {},
    "SegmentationUpidType": {},
    "SegmentsExpected": {},
    "SubSegmentNum": {},
    "SubSegmentsExpected": {}
  }
}
```

SCTE-35 Descriptor settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SegmentationDescriptorScte35DescriptorSettings|object|true|none|none|

<h2 id="tocS_Scte35Descriptor">Scte35Descriptor</h2>
<!-- backwards compatibility -->
<a id="schemascte35descriptor"></a>
<a id="schema_Scte35Descriptor"></a>
<a id="tocSscte35descriptor"></a>
<a id="tocsscte35descriptor"></a>

```json
{
  "Scte35DescriptorSettings": {
    "SegmentationDescriptorScte35DescriptorSettings": {
      "DeliveryRestrictions": {
        "ArchiveAllowedFlag": {},
        "DeviceRestrictions": {},
        "NoRegionalBlackoutFlag": {},
        "WebDeliveryAllowedFlag": {}
      },
      "SegmentNum": {},
      "SegmentationCancelIndicator": {},
      "SegmentationDuration": {},
      "SegmentationEventId": {},
      "SegmentationTypeId": {},
      "SegmentationUpid": {},
      "SegmentationUpidType": {},
      "SegmentsExpected": {},
      "SubSegmentNum": {},
      "SubSegmentsExpected": {}
    }
  }
}
```

Holds one set of SCTE-35 Descriptor Settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Scte35DescriptorSettings|object|true|none|none|

<h2 id="tocS_Scte35SegmentationDescriptor">Scte35SegmentationDescriptor</h2>
<!-- backwards compatibility -->
<a id="schemascte35segmentationdescriptor"></a>
<a id="schema_Scte35SegmentationDescriptor"></a>
<a id="tocSscte35segmentationdescriptor"></a>
<a id="tocsscte35segmentationdescriptor"></a>

```json
{
  "DeliveryRestrictions": {
    "ArchiveAllowedFlag": {},
    "DeviceRestrictions": {},
    "NoRegionalBlackoutFlag": {},
    "WebDeliveryAllowedFlag": {}
  },
  "SegmentNum": {},
  "SegmentationCancelIndicator": {},
  "SegmentationDuration": {},
  "SegmentationEventId": {},
  "SegmentationTypeId": {},
  "SegmentationUpid": {},
  "SegmentationUpidType": {},
  "SegmentsExpected": {},
  "SubSegmentNum": {},
  "SubSegmentsExpected": {}
}
```

Corresponds to SCTE-35 segmentation_descriptor.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeliveryRestrictions|object|false|none|none|
|SegmentNum|object|false|none|none|
|SegmentationCancelIndicator|object|true|none|none|
|SegmentationDuration|object|false|none|none|
|SegmentationEventId|object|true|none|none|
|SegmentationTypeId|object|false|none|none|
|SegmentationUpid|object|false|none|none|
|SegmentationUpidType|object|false|none|none|
|SegmentsExpected|object|false|none|none|
|SubSegmentNum|object|false|none|none|
|SubSegmentsExpected|object|false|none|none|

<h2 id="tocS_Scte35InputMode">Scte35InputMode</h2>
<!-- backwards compatibility -->
<a id="schemascte35inputmode"></a>
<a id="schema_Scte35InputMode"></a>
<a id="tocSscte35inputmode"></a>
<a id="tocsscte35inputmode"></a>

```json
"FIXED"
```

Whether the SCTE-35 input should be the active input or a fixed input.

<h2 id="tocS___longMin0Max4294967295">__longMin0Max4294967295</h2>
<!-- backwards compatibility -->
<a id="schema__longmin0max4294967295"></a>
<a id="schema___longMin0Max4294967295"></a>
<a id="tocS__longmin0max4294967295"></a>
<a id="tocs__longmin0max4294967295"></a>

```json
0
```

Placeholder documentation for __longMin0Max4294967295

<h2 id="tocS_Scte35SegmentationCancelIndicator">Scte35SegmentationCancelIndicator</h2>
<!-- backwards compatibility -->
<a id="schemascte35segmentationcancelindicator"></a>
<a id="schema_Scte35SegmentationCancelIndicator"></a>
<a id="tocSscte35segmentationcancelindicator"></a>
<a id="tocsscte35segmentationcancelindicator"></a>

```json
"SEGMENTATION_EVENT_NOT_CANCELED"
```

Corresponds to SCTE-35 segmentation_event_cancel_indicator. SEGMENTATION_EVENT_NOT_CANCELED corresponds to 0 in the SCTE-35 specification and indicates that this is an insertion request. SEGMENTATION_EVENT_CANCELED corresponds to 1 in the SCTE-35 specification and indicates that this is a cancelation request, in which case complete this field and the existing event ID to cancel.

<h2 id="tocS___longMin0Max1099511627775">__longMin0Max1099511627775</h2>
<!-- backwards compatibility -->
<a id="schema__longmin0max1099511627775"></a>
<a id="schema___longMin0Max1099511627775"></a>
<a id="tocS__longmin0max1099511627775"></a>
<a id="tocs__longmin0max1099511627775"></a>

```json
0
```

Placeholder documentation for __longMin0Max1099511627775

<h2 id="tocS_Scte35SpliceInsertNoRegionalBlackoutBehavior">Scte35SpliceInsertNoRegionalBlackoutBehavior</h2>
<!-- backwards compatibility -->
<a id="schemascte35spliceinsertnoregionalblackoutbehavior"></a>
<a id="schema_Scte35SpliceInsertNoRegionalBlackoutBehavior"></a>
<a id="tocSscte35spliceinsertnoregionalblackoutbehavior"></a>
<a id="tocsscte35spliceinsertnoregionalblackoutbehavior"></a>

```json
"FOLLOW"
```

Scte35 Splice Insert No Regional Blackout Behavior

<h2 id="tocS_Scte35SpliceInsertWebDeliveryAllowedBehavior">Scte35SpliceInsertWebDeliveryAllowedBehavior</h2>
<!-- backwards compatibility -->
<a id="schemascte35spliceinsertwebdeliveryallowedbehavior"></a>
<a id="schema_Scte35SpliceInsertWebDeliveryAllowedBehavior"></a>
<a id="tocSscte35spliceinsertwebdeliveryallowedbehavior"></a>
<a id="tocsscte35spliceinsertwebdeliveryallowedbehavior"></a>

```json
"FOLLOW"
```

Scte35 Splice Insert Web Delivery Allowed Behavior

<h2 id="tocS___longMin0Max8589934591">__longMin0Max8589934591</h2>
<!-- backwards compatibility -->
<a id="schema__longmin0max8589934591"></a>
<a id="schema___longMin0Max8589934591"></a>
<a id="tocS__longmin0max8589934591"></a>
<a id="tocs__longmin0max8589934591"></a>

```json
0
```

Placeholder documentation for __longMin0Max8589934591

<h2 id="tocS___listOfScte35Descriptor">__listOfScte35Descriptor</h2>
<!-- backwards compatibility -->
<a id="schema__listofscte35descriptor"></a>
<a id="schema___listOfScte35Descriptor"></a>
<a id="tocS__listofscte35descriptor"></a>
<a id="tocs__listofscte35descriptor"></a>

```json
[
  {
    "Scte35DescriptorSettings": {
      "SegmentationDescriptorScte35DescriptorSettings": {
        "DeliveryRestrictions": {
          "ArchiveAllowedFlag": {},
          "DeviceRestrictions": {},
          "NoRegionalBlackoutFlag": {},
          "WebDeliveryAllowedFlag": {}
        },
        "SegmentNum": {},
        "SegmentationCancelIndicator": {},
        "SegmentationDuration": {},
        "SegmentationEventId": {},
        "SegmentationTypeId": {},
        "SegmentationUpid": {},
        "SegmentationUpidType": {},
        "SegmentsExpected": {},
        "SubSegmentNum": {},
        "SubSegmentsExpected": {}
      }
    }
  }
]
```

Placeholder documentation for __listOfScte35Descriptor

<h2 id="tocS_StartChannelRequest">StartChannelRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartchannelrequest"></a>
<a id="schema_StartChannelRequest"></a>
<a id="tocSstartchannelrequest"></a>
<a id="tocsstartchannelrequest"></a>

```json
{}
```

Placeholder documentation for StartChannelRequest

<h2 id="tocS_StartInputDeviceMaintenanceWindowRequest">StartInputDeviceMaintenanceWindowRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartinputdevicemaintenancewindowrequest"></a>
<a id="schema_StartInputDeviceMaintenanceWindowRequest"></a>
<a id="tocSstartinputdevicemaintenancewindowrequest"></a>
<a id="tocsstartinputdevicemaintenancewindowrequest"></a>

```json
{}
```

Placeholder documentation for StartInputDeviceMaintenanceWindowRequest

<h2 id="tocS_StartMultiplexRequest">StartMultiplexRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartmultiplexrequest"></a>
<a id="schema_StartMultiplexRequest"></a>
<a id="tocSstartmultiplexrequest"></a>
<a id="tocsstartmultiplexrequest"></a>

```json
{}
```

Placeholder documentation for StartMultiplexRequest

<h2 id="tocS_StopChannelRequest">StopChannelRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopchannelrequest"></a>
<a id="schema_StopChannelRequest"></a>
<a id="tocSstopchannelrequest"></a>
<a id="tocsstopchannelrequest"></a>

```json
{}
```

Placeholder documentation for StopChannelRequest

<h2 id="tocS_StopMultiplexRequest">StopMultiplexRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopmultiplexrequest"></a>
<a id="schema_StopMultiplexRequest"></a>
<a id="tocSstopmultiplexrequest"></a>
<a id="tocsstopmultiplexrequest"></a>

```json
{}
```

Placeholder documentation for StopMultiplexRequest

<h2 id="tocS_TemporalFilterPostFilterSharpening">TemporalFilterPostFilterSharpening</h2>
<!-- backwards compatibility -->
<a id="schematemporalfilterpostfiltersharpening"></a>
<a id="schema_TemporalFilterPostFilterSharpening"></a>
<a id="tocStemporalfilterpostfiltersharpening"></a>
<a id="tocstemporalfilterpostfiltersharpening"></a>

```json
"AUTO"
```

Temporal Filter Post Filter Sharpening

<h2 id="tocS_TemporalFilterStrength">TemporalFilterStrength</h2>
<!-- backwards compatibility -->
<a id="schematemporalfilterstrength"></a>
<a id="schema_TemporalFilterStrength"></a>
<a id="tocStemporalfilterstrength"></a>
<a id="tocstemporalfilterstrength"></a>

```json
"AUTO"
```

Temporal Filter Strength

<h2 id="tocS_TimecodeBurninFontSize">TimecodeBurninFontSize</h2>
<!-- backwards compatibility -->
<a id="schematimecodeburninfontsize"></a>
<a id="schema_TimecodeBurninFontSize"></a>
<a id="tocStimecodeburninfontsize"></a>
<a id="tocstimecodeburninfontsize"></a>

```json
"EXTRA_SMALL_10"
```

Timecode Burnin Font Size

<h2 id="tocS_TimecodeBurninPosition">TimecodeBurninPosition</h2>
<!-- backwards compatibility -->
<a id="schematimecodeburninposition"></a>
<a id="schema_TimecodeBurninPosition"></a>
<a id="tocStimecodeburninposition"></a>
<a id="tocstimecodeburninposition"></a>

```json
"BOTTOM_CENTER"
```

Timecode Burnin Position

<h2 id="tocS_TimecodeConfigSource">TimecodeConfigSource</h2>
<!-- backwards compatibility -->
<a id="schematimecodeconfigsource"></a>
<a id="schema_TimecodeConfigSource"></a>
<a id="tocStimecodeconfigsource"></a>
<a id="tocstimecodeconfigsource"></a>

```json
"EMBEDDED"
```

Timecode Config Source

<h2 id="tocS___integerMin1Max1000000">__integerMin1Max1000000</h2>
<!-- backwards compatibility -->
<a id="schema__integermin1max1000000"></a>
<a id="schema___integerMin1Max1000000"></a>
<a id="tocS__integermin1max1000000"></a>
<a id="tocs__integermin1max1000000"></a>

```json
1
```

Placeholder documentation for __integerMin1Max1000000

<h2 id="tocS_TransferInputDeviceRequest">TransferInputDeviceRequest</h2>
<!-- backwards compatibility -->
<a id="schematransferinputdevicerequest"></a>
<a id="schema_TransferInputDeviceRequest"></a>
<a id="tocStransferinputdevicerequest"></a>
<a id="tocstransferinputdevicerequest"></a>

```json
{
  "TargetCustomerId": {},
  "TargetRegion": {},
  "TransferMessage": {}
}
```

A request to transfer an input device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetCustomerId|object|false|none|none|
|TargetRegion|object|false|none|none|
|TransferMessage|object|false|none|none|

<h2 id="tocS_TransferringInputDeviceSummary">TransferringInputDeviceSummary</h2>
<!-- backwards compatibility -->
<a id="schematransferringinputdevicesummary"></a>
<a id="schema_TransferringInputDeviceSummary"></a>
<a id="tocStransferringinputdevicesummary"></a>
<a id="tocstransferringinputdevicesummary"></a>

```json
{
  "Id": {},
  "Message": {},
  "TargetCustomerId": {},
  "TransferType": {}
}
```

Details about the input device that is being transferred.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Message|object|false|none|none|
|TargetCustomerId|object|false|none|none|
|TransferType|object|false|none|none|

<h2 id="tocS_TtmlDestinationStyleControl">TtmlDestinationStyleControl</h2>
<!-- backwards compatibility -->
<a id="schemattmldestinationstylecontrol"></a>
<a id="schema_TtmlDestinationStyleControl"></a>
<a id="tocSttmldestinationstylecontrol"></a>
<a id="tocsttmldestinationstylecontrol"></a>

```json
"PASSTHROUGH"
```

Ttml Destination Style Control

<h2 id="tocS_UdpContainerSettings">UdpContainerSettings</h2>
<!-- backwards compatibility -->
<a id="schemaudpcontainersettings"></a>
<a id="schema_UdpContainerSettings"></a>
<a id="tocSudpcontainersettings"></a>
<a id="tocsudpcontainersettings"></a>

```json
{
  "M2tsSettings": {
    "AbsentInputAudioBehavior": {},
    "Arib": {},
    "AribCaptionsPid": {},
    "AribCaptionsPidControl": {},
    "AudioBufferModel": {},
    "AudioFramesPerPes": {},
    "AudioPids": {},
    "AudioStreamType": {},
    "Bitrate": {},
    "BufferModel": {},
    "CcDescriptor": {},
    "DvbNitSettings": {
      "NetworkId": {},
      "NetworkName": {},
      "RepInterval": {}
    },
    "DvbSdtSettings": {
      "OutputSdt": {},
      "RepInterval": {},
      "ServiceName": {},
      "ServiceProviderName": {}
    },
    "DvbSubPids": {},
    "DvbTdtSettings": {
      "RepInterval": {}
    },
    "DvbTeletextPid": {},
    "Ebif": {},
    "EbpAudioInterval": {},
    "EbpLookaheadMs": {},
    "EbpPlacement": {},
    "EcmPid": {},
    "EsRateInPes": {},
    "EtvPlatformPid": {},
    "EtvSignalPid": {},
    "FragmentTime": {},
    "Klv": {},
    "KlvDataPids": {},
    "NielsenId3Behavior": {},
    "NullPacketBitrate": {},
    "PatInterval": {},
    "PcrControl": {},
    "PcrPeriod": {},
    "PcrPid": {},
    "PmtInterval": {},
    "PmtPid": {},
    "ProgramNum": {},
    "RateMode": {},
    "Scte27Pids": {},
    "Scte35Control": {},
    "Scte35Pid": {},
    "SegmentationMarkers": {},
    "SegmentationStyle": {},
    "SegmentationTime": {},
    "TimedMetadataBehavior": {},
    "TimedMetadataPid": {},
    "TransportStreamId": {},
    "VideoPid": {},
    "Scte35PrerollPullupMilliseconds": {}
  }
}
```

Udp Container Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|M2tsSettings|object|false|none|none|

<h2 id="tocS_UdpTimedMetadataId3Frame">UdpTimedMetadataId3Frame</h2>
<!-- backwards compatibility -->
<a id="schemaudptimedmetadataid3frame"></a>
<a id="schema_UdpTimedMetadataId3Frame"></a>
<a id="tocSudptimedmetadataid3frame"></a>
<a id="tocsudptimedmetadataid3frame"></a>

```json
"NONE"
```

Udp Timed Metadata Id3 Frame

<h2 id="tocS_UpdateChannelClassRequest">UpdateChannelClassRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatechannelclassrequest"></a>
<a id="schema_UpdateChannelClassRequest"></a>
<a id="tocSupdatechannelclassrequest"></a>
<a id="tocsupdatechannelclassrequest"></a>

```json
{
  "ChannelClass": {},
  "Destinations": {}
}
```

Channel class that the channel should be updated to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelClass|object|true|none|none|
|Destinations|object|false|none|none|

<h2 id="tocS_UpdateChannelRequest">UpdateChannelRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatechannelrequest"></a>
<a id="schema_UpdateChannelRequest"></a>
<a id="tocSupdatechannelrequest"></a>
<a id="tocsupdatechannelrequest"></a>

```json
{
  "CdiInputSpecification": {
    "Resolution": {}
  },
  "Destinations": {},
  "EncoderSettings": {
    "AudioDescriptions": {},
    "AvailBlanking": {
      "AvailBlankingImage": {
        "PasswordParam": {},
        "Uri": {},
        "Username": {}
      },
      "State": {}
    },
    "AvailConfiguration": {
      "AvailSettings": {
        "Esam": {
          "AcquisitionPointId": {},
          "AdAvailOffset": {},
          "PasswordParam": {},
          "PoisEndpoint": {},
          "Username": {},
          "ZoneIdentity": {}
        },
        "Scte35SpliceInsert": {
          "AdAvailOffset": {},
          "NoRegionalBlackoutFlag": {},
          "WebDeliveryAllowedFlag": {}
        },
        "Scte35TimeSignalApos": {
          "AdAvailOffset": {},
          "NoRegionalBlackoutFlag": {},
          "WebDeliveryAllowedFlag": {}
        }
      }
    },
    "BlackoutSlate": {
      "BlackoutSlateImage": {
        "PasswordParam": {},
        "Uri": {},
        "Username": {}
      },
      "NetworkEndBlackout": {},
      "NetworkEndBlackoutImage": {
        "PasswordParam": {},
        "Uri": {},
        "Username": {}
      },
      "NetworkId": {},
      "State": {}
    },
    "CaptionDescriptions": {},
    "FeatureActivations": {
      "InputPrepareScheduleActions": {}
    },
    "GlobalConfiguration": {
      "InitialAudioGain": {},
      "InputEndAction": {},
      "InputLossBehavior": {
        "BlackFrameMsec": {},
        "InputLossImageColor": {},
        "InputLossImageSlate": {
          "PasswordParam": {},
          "Uri": {},
          "Username": {}
        },
        "InputLossImageType": {},
        "RepeatFrameMsec": {}
      },
      "OutputLockingMode": {},
      "OutputTimingSource": {},
      "SupportLowFramerateInputs": {}
    },
    "MotionGraphicsConfiguration": {
      "MotionGraphicsInsertion": {},
      "MotionGraphicsSettings": {
        "HtmlMotionGraphicsSettings": {}
      }
    },
    "NielsenConfiguration": {
      "DistributorId": {},
      "NielsenPcmToId3Tagging": {}
    },
    "OutputGroups": {},
    "TimecodeConfig": {
      "Source": {},
      "SyncThreshold": {}
    },
    "VideoDescriptions": {}
  },
  "InputAttachments": {},
  "InputSpecification": {
    "Codec": {},
    "MaximumBitrate": {},
    "Resolution": {}
  },
  "LogLevel": {},
  "Maintenance": {
    "MaintenanceDay": {},
    "MaintenanceScheduledDate": {},
    "MaintenanceStartTime": {}
  },
  "Name": {},
  "RoleArn": {}
}
```

A request to update a channel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CdiInputSpecification|object|false|none|none|
|Destinations|object|false|none|none|
|EncoderSettings|object|false|none|none|
|InputAttachments|object|false|none|none|
|InputSpecification|object|false|none|none|
|LogLevel|object|false|none|none|
|Maintenance|object|false|none|none|
|Name|object|false|none|none|
|RoleArn|object|false|none|none|

<h2 id="tocS_UpdateInputDeviceRequest">UpdateInputDeviceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateinputdevicerequest"></a>
<a id="schema_UpdateInputDeviceRequest"></a>
<a id="tocSupdateinputdevicerequest"></a>
<a id="tocsupdateinputdevicerequest"></a>

```json
{
  "HdDeviceSettings": {
    "ConfiguredInput": {},
    "MaxBitrate": {},
    "LatencyMs": {}
  },
  "Name": {},
  "UhdDeviceSettings": {
    "ConfiguredInput": {},
    "MaxBitrate": {},
    "LatencyMs": {}
  }
}
```

A request to update an input device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HdDeviceSettings|object|false|none|none|
|Name|object|false|none|none|
|UhdDeviceSettings|object|false|none|none|

<h2 id="tocS___listOfInputDeviceRequest">__listOfInputDeviceRequest</h2>
<!-- backwards compatibility -->
<a id="schema__listofinputdevicerequest"></a>
<a id="schema___listOfInputDeviceRequest"></a>
<a id="tocS__listofinputdevicerequest"></a>
<a id="tocs__listofinputdevicerequest"></a>

```json
[
  {
    "Id": {}
  }
]
```

Placeholder documentation for __listOfInputDeviceRequest

<h2 id="tocS_UpdateInputRequest">UpdateInputRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateinputrequest"></a>
<a id="schema_UpdateInputRequest"></a>
<a id="tocSupdateinputrequest"></a>
<a id="tocsupdateinputrequest"></a>

```json
{
  "Destinations": {},
  "InputDevices": {},
  "InputSecurityGroups": {},
  "MediaConnectFlows": {},
  "Name": {},
  "RoleArn": {},
  "Sources": {}
}
```

A request to update an input.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Destinations|object|false|none|none|
|InputDevices|object|false|none|none|
|InputSecurityGroups|object|false|none|none|
|MediaConnectFlows|object|false|none|none|
|Name|object|false|none|none|
|RoleArn|object|false|none|none|
|Sources|object|false|none|none|

<h2 id="tocS_UpdateInputSecurityGroupRequest">UpdateInputSecurityGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateinputsecuritygrouprequest"></a>
<a id="schema_UpdateInputSecurityGroupRequest"></a>
<a id="tocSupdateinputsecuritygrouprequest"></a>
<a id="tocsupdateinputsecuritygrouprequest"></a>

```json
{
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "WhitelistRules": {}
}
```

The request to update some combination of the Input Security Group name and the IPv4 CIDRs the Input Security Group should allow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|
|WhitelistRules|object|false|none|none|

<h2 id="tocS_UpdateMultiplexProgramRequest">UpdateMultiplexProgramRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemultiplexprogramrequest"></a>
<a id="schema_UpdateMultiplexProgramRequest"></a>
<a id="tocSupdatemultiplexprogramrequest"></a>
<a id="tocsupdatemultiplexprogramrequest"></a>

```json
{
  "MultiplexProgramSettings": {
    "PreferredChannelPipeline": {},
    "ProgramNumber": {},
    "ServiceDescriptor": {
      "ProviderName": {},
      "ServiceName": {}
    },
    "VideoSettings": {
      "ConstantBitrate": {},
      "StatmuxSettings": {
        "MaximumBitrate": {},
        "MinimumBitrate": {},
        "Priority": {}
      }
    }
  }
}
```

A request to update a program in a multiplex.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MultiplexProgramSettings|object|false|none|none|

<h2 id="tocS_UpdateMultiplexRequest">UpdateMultiplexRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemultiplexrequest"></a>
<a id="schema_UpdateMultiplexRequest"></a>
<a id="tocSupdatemultiplexrequest"></a>
<a id="tocsupdatemultiplexrequest"></a>

```json
{
  "MultiplexSettings": {
    "MaximumVideoBufferDelayMilliseconds": {},
    "TransportStreamBitrate": {},
    "TransportStreamId": {},
    "TransportStreamReservedBitrate": {}
  },
  "Name": {}
}
```

A request to update a multiplex.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MultiplexSettings|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS_UpdateReservationRequest">UpdateReservationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatereservationrequest"></a>
<a id="schema_UpdateReservationRequest"></a>
<a id="tocSupdatereservationrequest"></a>
<a id="tocsupdatereservationrequest"></a>

```json
{
  "Name": {},
  "RenewalSettings": {
    "AutomaticRenewal": {},
    "RenewalCount": {}
  }
}
```

Request to update a reservation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|RenewalSettings|object|false|none|none|

<h2 id="tocS___doubleMin0Max1">__doubleMin0Max1</h2>
<!-- backwards compatibility -->
<a id="schema__doublemin0max1"></a>
<a id="schema___doubleMin0Max1"></a>
<a id="tocS__doublemin0max1"></a>
<a id="tocs__doublemin0max1"></a>

```json
0
```

Placeholder documentation for __doubleMin0Max1

<h2 id="tocS_VideoCodecSettings">VideoCodecSettings</h2>
<!-- backwards compatibility -->
<a id="schemavideocodecsettings"></a>
<a id="schema_VideoCodecSettings"></a>
<a id="tocSvideocodecsettings"></a>
<a id="tocsvideocodecsettings"></a>

```json
{
  "FrameCaptureSettings": {
    "CaptureInterval": {},
    "CaptureIntervalUnits": {},
    "TimecodeBurninSettings": {
      "FontSize": {},
      "Position": {},
      "Prefix": {}
    }
  },
  "H264Settings": {
    "AdaptiveQuantization": {},
    "AfdSignaling": {},
    "Bitrate": {},
    "BufFillPct": {},
    "BufSize": {},
    "ColorMetadata": {},
    "ColorSpaceSettings": {
      "ColorSpacePassthroughSettings": {},
      "Rec601Settings": {},
      "Rec709Settings": {}
    },
    "EntropyEncoding": {},
    "FilterSettings": {
      "TemporalFilterSettings": {
        "PostFilterSharpening": {},
        "Strength": {}
      }
    },
    "FixedAfd": {},
    "FlickerAq": {},
    "ForceFieldPictures": {},
    "FramerateControl": {},
    "FramerateDenominator": {},
    "FramerateNumerator": {},
    "GopBReference": {},
    "GopClosedCadence": {},
    "GopNumBFrames": {},
    "GopSize": {},
    "GopSizeUnits": {},
    "Level": {},
    "LookAheadRateControl": {},
    "MaxBitrate": {},
    "MinIInterval": {},
    "NumRefFrames": {},
    "ParControl": {},
    "ParDenominator": {},
    "ParNumerator": {},
    "Profile": {},
    "QualityLevel": {},
    "QvbrQualityLevel": {},
    "RateControlMode": {},
    "ScanType": {},
    "SceneChangeDetect": {},
    "Slices": {},
    "Softness": {},
    "SpatialAq": {},
    "SubgopLength": {},
    "Syntax": {},
    "TemporalAq": {},
    "TimecodeInsertion": {},
    "TimecodeBurninSettings": {
      "FontSize": {},
      "Position": {},
      "Prefix": {}
    }
  },
  "H265Settings": {
    "AdaptiveQuantization": {},
    "AfdSignaling": {},
    "AlternativeTransferFunction": {},
    "Bitrate": {},
    "BufSize": {},
    "ColorMetadata": {},
    "ColorSpaceSettings": {
      "ColorSpacePassthroughSettings": {},
      "DolbyVision81Settings": {},
      "Hdr10Settings": {
        "MaxCll": {},
        "MaxFall": {}
      },
      "Rec601Settings": {},
      "Rec709Settings": {}
    },
    "FilterSettings": {
      "TemporalFilterSettings": {
        "PostFilterSharpening": {},
        "Strength": {}
      }
    },
    "FixedAfd": {},
    "FlickerAq": {},
    "FramerateDenominator": {},
    "FramerateNumerator": {},
    "GopClosedCadence": {},
    "GopSize": {},
    "GopSizeUnits": {},
    "Level": {},
    "LookAheadRateControl": {},
    "MaxBitrate": {},
    "MinIInterval": {},
    "ParDenominator": {},
    "ParNumerator": {},
    "Profile": {},
    "QvbrQualityLevel": {},
    "RateControlMode": {},
    "ScanType": {},
    "SceneChangeDetect": {},
    "Slices": {},
    "Tier": {},
    "TimecodeInsertion": {},
    "TimecodeBurninSettings": {
      "FontSize": {},
      "Position": {},
      "Prefix": {}
    }
  },
  "Mpeg2Settings": {
    "AdaptiveQuantization": {},
    "AfdSignaling": {},
    "ColorMetadata": {},
    "ColorSpace": {},
    "DisplayAspectRatio": {},
    "FilterSettings": {
      "TemporalFilterSettings": {
        "PostFilterSharpening": {},
        "Strength": {}
      }
    },
    "FixedAfd": {},
    "FramerateDenominator": {},
    "FramerateNumerator": {},
    "GopClosedCadence": {},
    "GopNumBFrames": {},
    "GopSize": {},
    "GopSizeUnits": {},
    "ScanType": {},
    "SubgopLength": {},
    "TimecodeInsertion": {},
    "TimecodeBurninSettings": {
      "FontSize": {},
      "Position": {},
      "Prefix": {}
    }
  }
}
```

Video Codec Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FrameCaptureSettings|object|false|none|none|
|H264Settings|object|false|none|none|
|H265Settings|object|false|none|none|
|Mpeg2Settings|object|false|none|none|

<h2 id="tocS_VideoDescriptionRespondToAfd">VideoDescriptionRespondToAfd</h2>
<!-- backwards compatibility -->
<a id="schemavideodescriptionrespondtoafd"></a>
<a id="schema_VideoDescriptionRespondToAfd"></a>
<a id="tocSvideodescriptionrespondtoafd"></a>
<a id="tocsvideodescriptionrespondtoafd"></a>

```json
"NONE"
```

Video Description Respond To Afd

<h2 id="tocS_VideoDescriptionScalingBehavior">VideoDescriptionScalingBehavior</h2>
<!-- backwards compatibility -->
<a id="schemavideodescriptionscalingbehavior"></a>
<a id="schema_VideoDescriptionScalingBehavior"></a>
<a id="tocSvideodescriptionscalingbehavior"></a>
<a id="tocsvideodescriptionscalingbehavior"></a>

```json
"DEFAULT"
```

Video Description Scaling Behavior

<h2 id="tocS_VideoDescription">VideoDescription</h2>
<!-- backwards compatibility -->
<a id="schemavideodescription"></a>
<a id="schema_VideoDescription"></a>
<a id="tocSvideodescription"></a>
<a id="tocsvideodescription"></a>

```json
{
  "CodecSettings": {
    "FrameCaptureSettings": {
      "CaptureInterval": {},
      "CaptureIntervalUnits": {},
      "TimecodeBurninSettings": {
        "FontSize": {},
        "Position": {},
        "Prefix": {}
      }
    },
    "H264Settings": {
      "AdaptiveQuantization": {},
      "AfdSignaling": {},
      "Bitrate": {},
      "BufFillPct": {},
      "BufSize": {},
      "ColorMetadata": {},
      "ColorSpaceSettings": {
        "ColorSpacePassthroughSettings": {},
        "Rec601Settings": {},
        "Rec709Settings": {}
      },
      "EntropyEncoding": {},
      "FilterSettings": {
        "TemporalFilterSettings": {
          "PostFilterSharpening": {},
          "Strength": {}
        }
      },
      "FixedAfd": {},
      "FlickerAq": {},
      "ForceFieldPictures": {},
      "FramerateControl": {},
      "FramerateDenominator": {},
      "FramerateNumerator": {},
      "GopBReference": {},
      "GopClosedCadence": {},
      "GopNumBFrames": {},
      "GopSize": {},
      "GopSizeUnits": {},
      "Level": {},
      "LookAheadRateControl": {},
      "MaxBitrate": {},
      "MinIInterval": {},
      "NumRefFrames": {},
      "ParControl": {},
      "ParDenominator": {},
      "ParNumerator": {},
      "Profile": {},
      "QualityLevel": {},
      "QvbrQualityLevel": {},
      "RateControlMode": {},
      "ScanType": {},
      "SceneChangeDetect": {},
      "Slices": {},
      "Softness": {},
      "SpatialAq": {},
      "SubgopLength": {},
      "Syntax": {},
      "TemporalAq": {},
      "TimecodeInsertion": {},
      "TimecodeBurninSettings": {
        "FontSize": {},
        "Position": {},
        "Prefix": {}
      }
    },
    "H265Settings": {
      "AdaptiveQuantization": {},
      "AfdSignaling": {},
      "AlternativeTransferFunction": {},
      "Bitrate": {},
      "BufSize": {},
      "ColorMetadata": {},
      "ColorSpaceSettings": {
        "ColorSpacePassthroughSettings": {},
        "DolbyVision81Settings": {},
        "Hdr10Settings": {
          "MaxCll": {},
          "MaxFall": {}
        },
        "Rec601Settings": {},
        "Rec709Settings": {}
      },
      "FilterSettings": {
        "TemporalFilterSettings": {
          "PostFilterSharpening": {},
          "Strength": {}
        }
      },
      "FixedAfd": {},
      "FlickerAq": {},
      "FramerateDenominator": {},
      "FramerateNumerator": {},
      "GopClosedCadence": {},
      "GopSize": {},
      "GopSizeUnits": {},
      "Level": {},
      "LookAheadRateControl": {},
      "MaxBitrate": {},
      "MinIInterval": {},
      "ParDenominator": {},
      "ParNumerator": {},
      "Profile": {},
      "QvbrQualityLevel": {},
      "RateControlMode": {},
      "ScanType": {},
      "SceneChangeDetect": {},
      "Slices": {},
      "Tier": {},
      "TimecodeInsertion": {},
      "TimecodeBurninSettings": {
        "FontSize": {},
        "Position": {},
        "Prefix": {}
      }
    },
    "Mpeg2Settings": {
      "AdaptiveQuantization": {},
      "AfdSignaling": {},
      "ColorMetadata": {},
      "ColorSpace": {},
      "DisplayAspectRatio": {},
      "FilterSettings": {
        "TemporalFilterSettings": {
          "PostFilterSharpening": {},
          "Strength": {}
        }
      },
      "FixedAfd": {},
      "FramerateDenominator": {},
      "FramerateNumerator": {},
      "GopClosedCadence": {},
      "GopNumBFrames": {},
      "GopSize": {},
      "GopSizeUnits": {},
      "ScanType": {},
      "SubgopLength": {},
      "TimecodeInsertion": {},
      "TimecodeBurninSettings": {
        "FontSize": {},
        "Position": {},
        "Prefix": {}
      }
    }
  },
  "Height": {},
  "Name": {},
  "RespondToAfd": {},
  "ScalingBehavior": {},
  "Sharpness": {},
  "Width": {}
}
```

Video settings for this stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CodecSettings|object|false|none|none|
|Height|object|false|none|none|
|Name|object|true|none|none|
|RespondToAfd|object|false|none|none|
|ScalingBehavior|object|false|none|none|
|Sharpness|object|false|none|none|
|Width|object|false|none|none|

<h2 id="tocS_VideoSelectorColorSpace">VideoSelectorColorSpace</h2>
<!-- backwards compatibility -->
<a id="schemavideoselectorcolorspace"></a>
<a id="schema_VideoSelectorColorSpace"></a>
<a id="tocSvideoselectorcolorspace"></a>
<a id="tocsvideoselectorcolorspace"></a>

```json
"FOLLOW"
```

Video Selector Color Space

<h2 id="tocS_VideoSelectorColorSpaceSettings">VideoSelectorColorSpaceSettings</h2>
<!-- backwards compatibility -->
<a id="schemavideoselectorcolorspacesettings"></a>
<a id="schema_VideoSelectorColorSpaceSettings"></a>
<a id="tocSvideoselectorcolorspacesettings"></a>
<a id="tocsvideoselectorcolorspacesettings"></a>

```json
{
  "Hdr10Settings": {
    "MaxCll": {},
    "MaxFall": {}
  }
}
```

Video Selector Color Space Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Hdr10Settings|object|false|none|none|

<h2 id="tocS_VideoSelectorColorSpaceUsage">VideoSelectorColorSpaceUsage</h2>
<!-- backwards compatibility -->
<a id="schemavideoselectorcolorspaceusage"></a>
<a id="schema_VideoSelectorColorSpaceUsage"></a>
<a id="tocSvideoselectorcolorspaceusage"></a>
<a id="tocsvideoselectorcolorspaceusage"></a>

```json
"FALLBACK"
```

Video Selector Color Space Usage

<h2 id="tocS_VideoSelectorSettings">VideoSelectorSettings</h2>
<!-- backwards compatibility -->
<a id="schemavideoselectorsettings"></a>
<a id="schema_VideoSelectorSettings"></a>
<a id="tocSvideoselectorsettings"></a>
<a id="tocsvideoselectorsettings"></a>

```json
{
  "VideoSelectorPid": {
    "Pid": {}
  },
  "VideoSelectorProgramId": {
    "ProgramId": {}
  }
}
```

Video Selector Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VideoSelectorPid|object|false|none|none|
|VideoSelectorProgramId|object|false|none|none|

<h2 id="tocS_VideoSelectorPid">VideoSelectorPid</h2>
<!-- backwards compatibility -->
<a id="schemavideoselectorpid"></a>
<a id="schema_VideoSelectorPid"></a>
<a id="tocSvideoselectorpid"></a>
<a id="tocsvideoselectorpid"></a>

```json
{
  "Pid": {}
}
```

Video Selector Pid

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Pid|object|false|none|none|

<h2 id="tocS_VideoSelectorProgramId">VideoSelectorProgramId</h2>
<!-- backwards compatibility -->
<a id="schemavideoselectorprogramid"></a>
<a id="schema_VideoSelectorProgramId"></a>
<a id="tocSvideoselectorprogramid"></a>
<a id="tocsvideoselectorprogramid"></a>

```json
{
  "ProgramId": {}
}
```

Video Selector Program Id

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProgramId|object|false|none|none|

<h2 id="tocS_WavCodingMode">WavCodingMode</h2>
<!-- backwards compatibility -->
<a id="schemawavcodingmode"></a>
<a id="schema_WavCodingMode"></a>
<a id="tocSwavcodingmode"></a>
<a id="tocswavcodingmode"></a>

```json
"CODING_MODE_1_0"
```

Wav Coding Mode

<h2 id="tocS_WebvttDestinationStyleControl">WebvttDestinationStyleControl</h2>
<!-- backwards compatibility -->
<a id="schemawebvttdestinationstylecontrol"></a>
<a id="schema_WebvttDestinationStyleControl"></a>
<a id="tocSwebvttdestinationstylecontrol"></a>
<a id="tocswebvttdestinationstylecontrol"></a>

```json
"NO_STYLE_DATA"
```

Webvtt Destination Style Control
