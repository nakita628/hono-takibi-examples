<h1 id="aws-mediaconnect">AWS MediaConnect v2018-11-14</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

API for AWS Elemental MediaConnect

Base URLs:

* <a href="http://mediaconnect.us-east-1.amazonaws.com">http://mediaconnect.us-east-1.amazonaws.com</a> - The AWS MediaConnect multi-region endpoint

* <a href="https://mediaconnect.us-east-1.amazonaws.com">https://mediaconnect.us-east-1.amazonaws.com</a> - The AWS MediaConnect multi-region endpoint

* <a href="http://mediaconnect.cn-north-1.amazonaws.com.cn">http://mediaconnect.cn-north-1.amazonaws.com.cn</a> - The AWS MediaConnect endpoint for China (Beijing) and China (Ningxia)

* <a href="https://mediaconnect.cn-north-1.amazonaws.com.cn">https://mediaconnect.cn-north-1.amazonaws.com.cn</a> - The AWS MediaConnect endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/mediaconnect/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-mediaconnect-default">Default</h1>

## AddBridgeOutputs

<a id="opIdAddBridgeOutputs"></a>

> Code samples

```bash
curl https://mediaconnect.us-east-1.amazonaws.com/v1/bridges/string/outputs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "outputs": [
      {
        "NetworkOutput": {
          "IpAddress": {},
          "Name": {},
          "NetworkName": {},
          "Port": {},
          "Protocol": {},
          "Ttl": {}
        }
      }
    ]
  }'
```

`POST /v1/bridges/{bridgeArn}/outputs`

Adds outputs to an existing bridge.

> Body parameter

```json
{
  "outputs": [
    {
      "NetworkOutput": {
        "IpAddress": {},
        "Name": {},
        "NetworkName": {},
        "Port": {},
        "Protocol": {},
        "Ttl": {}
      }
    }
  ]
}
```

<h3 id="addbridgeoutputs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bridgeArn|path|string|true|The ARN of the bridge that you want to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» outputs|body|[[AddBridgeOutputRequest](#schemaaddbridgeoutputrequest)]|true|The outputs that you want to add to this bridge.|

> Example responses

> 202 Response

```json
{
  "BridgeArn": {},
  "Outputs": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="addbridgeoutputs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[AddBridgeOutputsResponse](#schemaaddbridgeoutputsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AddBridgeSources

<a id="opIdAddBridgeSources"></a>

> Code samples

```bash
curl https://mediaconnect.us-east-1.amazonaws.com/v1/bridges/string/sources \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "sources": [
      {
        "FlowSource": {
          "FlowArn": {},
          "FlowVpcInterfaceAttachment": {
            "VpcInterfaceName": {}
          },
          "Name": {}
        },
        "NetworkSource": {
          "MulticastIp": {},
          "Name": {},
          "NetworkName": {},
          "Port": {},
          "Protocol": {}
        }
      }
    ]
  }'
```

`POST /v1/bridges/{bridgeArn}/sources`

Adds sources to an existing bridge.

> Body parameter

```json
{
  "sources": [
    {
      "FlowSource": {
        "FlowArn": {},
        "FlowVpcInterfaceAttachment": {
          "VpcInterfaceName": {}
        },
        "Name": {}
      },
      "NetworkSource": {
        "MulticastIp": {},
        "Name": {},
        "NetworkName": {},
        "Port": {},
        "Protocol": {}
      }
    }
  ]
}
```

<h3 id="addbridgesources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bridgeArn|path|string|true|The ARN of the bridge that you want to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» sources|body|[[AddBridgeSourceRequest](#schemaaddbridgesourcerequest)]|true|The sources that you want to add to this bridge.|

> Example responses

> 202 Response

```json
{
  "BridgeArn": {},
  "Sources": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="addbridgesources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[AddBridgeSourcesResponse](#schemaaddbridgesourcesresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AddFlowMediaStreams

<a id="opIdAddFlowMediaStreams"></a>

> Code samples

```bash
curl https://mediaconnect.us-east-1.amazonaws.com/v1/flows/string/mediaStreams \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "mediaStreams": [
      {
        "Attributes": {
          "Fmtp": {
            "ChannelOrder": {},
            "Colorimetry": {},
            "ExactFramerate": {},
            "Par": {},
            "Range": {},
            "ScanMode": {},
            "Tcs": {}
          },
          "Lang": {}
        },
        "ClockRate": {},
        "Description": {},
        "MediaStreamId": {},
        "MediaStreamName": {},
        "MediaStreamType": {},
        "VideoFormat": {}
      }
    ]
  }'
```

`POST /v1/flows/{flowArn}/mediaStreams`

Adds media streams to an existing flow. After you add a media stream to a flow, you can associate it with a source and/or an output that uses the ST 2110 JPEG XS or CDI protocol.

> Body parameter

```json
{
  "mediaStreams": [
    {
      "Attributes": {
        "Fmtp": {
          "ChannelOrder": {},
          "Colorimetry": {},
          "ExactFramerate": {},
          "Par": {},
          "Range": {},
          "ScanMode": {},
          "Tcs": {}
        },
        "Lang": {}
      },
      "ClockRate": {},
      "Description": {},
      "MediaStreamId": {},
      "MediaStreamName": {},
      "MediaStreamType": {},
      "VideoFormat": {}
    }
  ]
}
```

<h3 id="addflowmediastreams-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|flowArn|path|string|true|The Amazon Resource Name (ARN) of the flow.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» mediaStreams|body|[[AddMediaStreamRequest](#schemaaddmediastreamrequest)]|true|The media streams that you want to add to the flow.|

> Example responses

> 201 Response

```json
{
  "FlowArn": {},
  "MediaStreams": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="addflowmediastreams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[AddFlowMediaStreamsResponse](#schemaaddflowmediastreamsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AddFlowOutputs

<a id="opIdAddFlowOutputs"></a>

> Code samples

```bash
curl https://mediaconnect.us-east-1.amazonaws.com/v1/flows/string/outputs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "outputs": [
      {
        "CidrAllowList": {},
        "Description": {},
        "Destination": {},
        "Encryption": {
          "Algorithm": {},
          "ConstantInitializationVector": {},
          "DeviceId": {},
          "KeyType": {},
          "Region": {},
          "ResourceId": {},
          "RoleArn": {},
          "SecretArn": {},
          "Url": {}
        },
        "MaxLatency": {},
        "MediaStreamOutputConfigurations": {},
        "MinLatency": {},
        "Name": {},
        "Port": {},
        "Protocol": {},
        "RemoteId": {},
        "SenderControlPort": {},
        "SmoothingLatency": {},
        "StreamId": {},
        "VpcInterfaceAttachment": {
          "VpcInterfaceName": {}
        }
      }
    ]
  }'
```

`POST /v1/flows/{flowArn}/outputs`

Adds outputs to an existing flow. You can create up to 50 outputs per flow.

> Body parameter

```json
{
  "outputs": [
    {
      "CidrAllowList": {},
      "Description": {},
      "Destination": {},
      "Encryption": {
        "Algorithm": {},
        "ConstantInitializationVector": {},
        "DeviceId": {},
        "KeyType": {},
        "Region": {},
        "ResourceId": {},
        "RoleArn": {},
        "SecretArn": {},
        "Url": {}
      },
      "MaxLatency": {},
      "MediaStreamOutputConfigurations": {},
      "MinLatency": {},
      "Name": {},
      "Port": {},
      "Protocol": {},
      "RemoteId": {},
      "SenderControlPort": {},
      "SmoothingLatency": {},
      "StreamId": {},
      "VpcInterfaceAttachment": {
        "VpcInterfaceName": {}
      }
    }
  ]
}
```

<h3 id="addflowoutputs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|flowArn|path|string|true|The flow that you want to add outputs to.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» outputs|body|[[AddOutputRequest](#schemaaddoutputrequest)]|true|A list of outputs that you want to add.|

> Example responses

> 201 Response

```json
{
  "FlowArn": {},
  "Outputs": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="addflowoutputs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[AddFlowOutputsResponse](#schemaaddflowoutputsresponse)|
|480|480|AddFlowOutputs420Exception|[AddFlowOutputs420Exception](#schemaaddflowoutputs420exception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AddFlowSources

<a id="opIdAddFlowSources"></a>

> Code samples

```bash
curl https://mediaconnect.us-east-1.amazonaws.com/v1/flows/string/source \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "sources": [
      {
        "Decryption": {
          "Algorithm": {},
          "ConstantInitializationVector": {},
          "DeviceId": {},
          "KeyType": {},
          "Region": {},
          "ResourceId": {},
          "RoleArn": {},
          "SecretArn": {},
          "Url": {}
        },
        "Description": {},
        "EntitlementArn": {},
        "IngestPort": {},
        "MaxBitrate": {},
        "MaxLatency": {},
        "MaxSyncBuffer": {},
        "MediaStreamSourceConfigurations": {},
        "MinLatency": {},
        "Name": {},
        "Protocol": {},
        "SenderControlPort": {},
        "SenderIpAddress": {},
        "SourceListenerAddress": {},
        "SourceListenerPort": {},
        "StreamId": {},
        "VpcInterfaceName": {},
        "WhitelistCidr": {},
        "GatewayBridgeSource": {
          "BridgeArn": {},
          "VpcInterfaceAttachment": {
            "VpcInterfaceName": {}
          }
        }
      }
    ]
  }'
```

`POST /v1/flows/{flowArn}/source`

Adds Sources to flow

> Body parameter

```json
{
  "sources": [
    {
      "Decryption": {
        "Algorithm": {},
        "ConstantInitializationVector": {},
        "DeviceId": {},
        "KeyType": {},
        "Region": {},
        "ResourceId": {},
        "RoleArn": {},
        "SecretArn": {},
        "Url": {}
      },
      "Description": {},
      "EntitlementArn": {},
      "IngestPort": {},
      "MaxBitrate": {},
      "MaxLatency": {},
      "MaxSyncBuffer": {},
      "MediaStreamSourceConfigurations": {},
      "MinLatency": {},
      "Name": {},
      "Protocol": {},
      "SenderControlPort": {},
      "SenderIpAddress": {},
      "SourceListenerAddress": {},
      "SourceListenerPort": {},
      "StreamId": {},
      "VpcInterfaceName": {},
      "WhitelistCidr": {},
      "GatewayBridgeSource": {
        "BridgeArn": {},
        "VpcInterfaceAttachment": {
          "VpcInterfaceName": {}
        }
      }
    }
  ]
}
```

<h3 id="addflowsources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|flowArn|path|string|true|The flow that you want to mutate.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» sources|body|[[SetSourceRequest](#schemasetsourcerequest)]|true|A list of sources that you want to add.|

> Example responses

> 201 Response

```json
{
  "FlowArn": {},
  "Sources": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="addflowsources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[AddFlowSourcesResponse](#schemaaddflowsourcesresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AddFlowVpcInterfaces

<a id="opIdAddFlowVpcInterfaces"></a>

> Code samples

```bash
curl https://mediaconnect.us-east-1.amazonaws.com/v1/flows/string/vpcInterfaces \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "vpcInterfaces": [
      {
        "Name": {},
        "NetworkInterfaceType": {},
        "RoleArn": {},
        "SecurityGroupIds": {},
        "SubnetId": {}
      }
    ]
  }'
```

`POST /v1/flows/{flowArn}/vpcInterfaces`

Adds VPC interfaces to flow

> Body parameter

```json
{
  "vpcInterfaces": [
    {
      "Name": {},
      "NetworkInterfaceType": {},
      "RoleArn": {},
      "SecurityGroupIds": {},
      "SubnetId": {}
    }
  ]
}
```

<h3 id="addflowvpcinterfaces-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|flowArn|path|string|true|The flow that you want to mutate.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» vpcInterfaces|body|[[VpcInterfaceRequest](#schemavpcinterfacerequest)]|true|A list of VPC interfaces that you want to add.|

> Example responses

> 201 Response

```json
{
  "FlowArn": {},
  "VpcInterfaces": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="addflowvpcinterfaces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[AddFlowVpcInterfacesResponse](#schemaaddflowvpcinterfacesresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListBridges

<a id="opIdListBridges"></a>

> Code samples

```bash
curl https://mediaconnect.us-east-1.amazonaws.com/v1/bridges \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/bridges`

Displays a list of bridges that are associated with this account and an optionally specified Arn. This request returns a paginated result.

<h3 id="listbridges-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filterArn|query|string|false|Filter the list results to display only the bridges associated with the selected Amazon Resource Name (ARN).|
|maxResults|query|integer|false|The maximum number of results to return per API request. For example, you submit a ListBridges request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 10 results per page.|
|nextToken|query|string|false|The token that identifies which batch of results that you want to see. For example, you submit a ListBridges request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListBridges request a second time and specify the NextToken value.|
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
  "Bridges": {},
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

<h3 id="listbridges-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListBridgesResponse](#schemalistbridgesresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateBridge

<a id="opIdCreateBridge"></a>

> Code samples

```bash
curl https://mediaconnect.us-east-1.amazonaws.com/v1/bridges \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "egressGatewayBridge": {
      "MaxBitrate": {}
    },
    "ingressGatewayBridge": {
      "MaxBitrate": {},
      "MaxOutputs": {}
    },
    "name": "string",
    "outputs": [
      {
        "NetworkOutput": {
          "IpAddress": {},
          "Name": {},
          "NetworkName": {},
          "Port": {},
          "Protocol": {},
          "Ttl": {}
        }
      }
    ],
    "placementArn": "string",
    "sourceFailoverConfig": {
      "FailoverMode": {},
      "RecoveryWindow": {},
      "SourcePriority": {
        "PrimarySource": {}
      },
      "State": {}
    },
    "sources": [
      {
        "FlowSource": {
          "FlowArn": {},
          "FlowVpcInterfaceAttachment": {
            "VpcInterfaceName": {}
          },
          "Name": {}
        },
        "NetworkSource": {
          "MulticastIp": {},
          "Name": {},
          "NetworkName": {},
          "Port": {},
          "Protocol": {}
        }
      }
    ]
  }'
```

`POST /v1/bridges`

Creates a new bridge. The request must include one source.

> Body parameter

```json
{
  "egressGatewayBridge": {
    "MaxBitrate": {}
  },
  "ingressGatewayBridge": {
    "MaxBitrate": {},
    "MaxOutputs": {}
  },
  "name": "string",
  "outputs": [
    {
      "NetworkOutput": {
        "IpAddress": {},
        "Name": {},
        "NetworkName": {},
        "Port": {},
        "Protocol": {},
        "Ttl": {}
      }
    }
  ],
  "placementArn": "string",
  "sourceFailoverConfig": {
    "FailoverMode": {},
    "RecoveryWindow": {},
    "SourcePriority": {
      "PrimarySource": {}
    },
    "State": {}
  },
  "sources": [
    {
      "FlowSource": {
        "FlowArn": {},
        "FlowVpcInterfaceAttachment": {
          "VpcInterfaceName": {}
        },
        "Name": {}
      },
      "NetworkSource": {
        "MulticastIp": {},
        "Name": {},
        "NetworkName": {},
        "Port": {},
        "Protocol": {}
      }
    }
  ]
}
```

<h3 id="createbridge-parameters">Parameters</h3>

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
|» egressGatewayBridge|body|object|false|Create a bridge with the egress bridge type. An egress bridge is a cloud-to-ground bridge. The content comes from an existing MediaConnect flow and is delivered to your premises.|
|» » MaxBitrate|body|object|false|none|
|» ingressGatewayBridge|body|object|false|Create a bridge with the ingress bridge type. An ingress bridge is a ground-to-cloud bridge. The content originates at your premises and is delivered to the cloud.|
|» » MaxBitrate|body|object|false|none|
|» » MaxOutputs|body|object|false|none|
|» name|body|string|true|The name of the bridge. This name can not be modified after the bridge is created.|
|» outputs|body|[[AddBridgeOutputRequest](#schemaaddbridgeoutputrequest)]|false|The outputs that you want to add to this bridge.|
|» placementArn|body|string|true|The bridge placement Amazon Resource Number (ARN).|
|» sourceFailoverConfig|body|object|false|The settings for source failover.|
|» » FailoverMode|body|object|false|none|
|» » RecoveryWindow|body|object|false|none|
|» » SourcePriority|body|object|false|none|
|» » » PrimarySource|body|object|false|none|
|» » State|body|object|false|none|
|» sources|body|[[AddBridgeSourceRequest](#schemaaddbridgesourcerequest)]|true|The sources that you want to add to this bridge.|

> Example responses

> 201 Response

```json
{
  "Bridge": {
    "BridgeArn": {},
    "BridgeMessages": {},
    "BridgeState": {},
    "EgressGatewayBridge": {
      "InstanceId": {},
      "MaxBitrate": {}
    },
    "IngressGatewayBridge": {
      "InstanceId": {},
      "MaxBitrate": {},
      "MaxOutputs": {}
    },
    "Name": {},
    "Outputs": {},
    "PlacementArn": {},
    "SourceFailoverConfig": {
      "FailoverMode": {},
      "RecoveryWindow": {},
      "SourcePriority": {
        "PrimarySource": {}
      },
      "State": {}
    },
    "Sources": {}
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

<h3 id="createbridge-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateBridgeResponse](#schemacreatebridgeresponse)|
|480|480|CreateBridge420Exception|[CreateBridge420Exception](#schemacreatebridge420exception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListFlows

<a id="opIdListFlows"></a>

> Code samples

```bash
curl https://mediaconnect.us-east-1.amazonaws.com/v1/flows \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/flows`

Displays a list of flows that are associated with this account. This request returns a paginated result.

<h3 id="listflows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|The maximum number of results to return per API request. For example, you submit a ListFlows request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 10 results per page.|
|nextToken|query|string|false|The token that identifies which batch of results that you want to see. For example, you submit a ListFlows request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListFlows request a second time and specify the NextToken value.|
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
  "Flows": {},
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

<h3 id="listflows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListFlowsResponse](#schemalistflowsresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateFlow

<a id="opIdCreateFlow"></a>

> Code samples

```bash
curl https://mediaconnect.us-east-1.amazonaws.com/v1/flows \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "availabilityZone": "string",
    "entitlements": [
      {
        "DataTransferSubscriberFeePercent": {},
        "Description": {},
        "Encryption": {
          "Algorithm": {},
          "ConstantInitializationVector": {},
          "DeviceId": {},
          "KeyType": {},
          "Region": {},
          "ResourceId": {},
          "RoleArn": {},
          "SecretArn": {},
          "Url": {}
        },
        "EntitlementStatus": {},
        "Name": {},
        "Subscribers": {}
      }
    ],
    "mediaStreams": [
      {
        "Attributes": {
          "Fmtp": {
            "ChannelOrder": {},
            "Colorimetry": {},
            "ExactFramerate": {},
            "Par": {},
            "Range": {},
            "ScanMode": {},
            "Tcs": {}
          },
          "Lang": {}
        },
        "ClockRate": {},
        "Description": {},
        "MediaStreamId": {},
        "MediaStreamName": {},
        "MediaStreamType": {},
        "VideoFormat": {}
      }
    ],
    "name": "string",
    "outputs": [
      {
        "CidrAllowList": {},
        "Description": {},
        "Destination": {},
        "Encryption": {
          "Algorithm": {},
          "ConstantInitializationVector": {},
          "DeviceId": {},
          "KeyType": {},
          "Region": {},
          "ResourceId": {},
          "RoleArn": {},
          "SecretArn": {},
          "Url": {}
        },
        "MaxLatency": {},
        "MediaStreamOutputConfigurations": {},
        "MinLatency": {},
        "Name": {},
        "Port": {},
        "Protocol": {},
        "RemoteId": {},
        "SenderControlPort": {},
        "SmoothingLatency": {},
        "StreamId": {},
        "VpcInterfaceAttachment": {
          "VpcInterfaceName": {}
        }
      }
    ],
    "source": {
      "Decryption": {
        "Algorithm": {},
        "ConstantInitializationVector": {},
        "DeviceId": {},
        "KeyType": {},
        "Region": {},
        "ResourceId": {},
        "RoleArn": {},
        "SecretArn": {},
        "Url": {}
      },
      "Description": {},
      "EntitlementArn": {},
      "IngestPort": {},
      "MaxBitrate": {},
      "MaxLatency": {},
      "MaxSyncBuffer": {},
      "MediaStreamSourceConfigurations": {},
      "MinLatency": {},
      "Name": {},
      "Protocol": {},
      "SenderControlPort": {},
      "SenderIpAddress": {},
      "SourceListenerAddress": {},
      "SourceListenerPort": {},
      "StreamId": {},
      "VpcInterfaceName": {},
      "WhitelistCidr": {},
      "GatewayBridgeSource": {
        "BridgeArn": {},
        "VpcInterfaceAttachment": {
          "VpcInterfaceName": {}
        }
      }
    },
    "sourceFailoverConfig": {
      "FailoverMode": {},
      "RecoveryWindow": {},
      "SourcePriority": {
        "PrimarySource": {}
      },
      "State": {}
    },
    "sources": [
      {
        "Decryption": {
          "Algorithm": {},
          "ConstantInitializationVector": {},
          "DeviceId": {},
          "KeyType": {},
          "Region": {},
          "ResourceId": {},
          "RoleArn": {},
          "SecretArn": {},
          "Url": {}
        },
        "Description": {},
        "EntitlementArn": {},
        "IngestPort": {},
        "MaxBitrate": {},
        "MaxLatency": {},
        "MaxSyncBuffer": {},
        "MediaStreamSourceConfigurations": {},
        "MinLatency": {},
        "Name": {},
        "Protocol": {},
        "SenderControlPort": {},
        "SenderIpAddress": {},
        "SourceListenerAddress": {},
        "SourceListenerPort": {},
        "StreamId": {},
        "VpcInterfaceName": {},
        "WhitelistCidr": {},
        "GatewayBridgeSource": {
          "BridgeArn": {},
          "VpcInterfaceAttachment": {
            "VpcInterfaceName": {}
          }
        }
      }
    ],
    "vpcInterfaces": [
      {
        "Name": {},
        "NetworkInterfaceType": {},
        "RoleArn": {},
        "SecurityGroupIds": {},
        "SubnetId": {}
      }
    ],
    "maintenance": {
      "MaintenanceDay": {},
      "MaintenanceStartHour": {}
    }
  }'
```

`POST /v1/flows`

Creates a new flow. The request must include one source. The request optionally can include outputs (up to 50) and entitlements (up to 50).

> Body parameter

```json
{
  "availabilityZone": "string",
  "entitlements": [
    {
      "DataTransferSubscriberFeePercent": {},
      "Description": {},
      "Encryption": {
        "Algorithm": {},
        "ConstantInitializationVector": {},
        "DeviceId": {},
        "KeyType": {},
        "Region": {},
        "ResourceId": {},
        "RoleArn": {},
        "SecretArn": {},
        "Url": {}
      },
      "EntitlementStatus": {},
      "Name": {},
      "Subscribers": {}
    }
  ],
  "mediaStreams": [
    {
      "Attributes": {
        "Fmtp": {
          "ChannelOrder": {},
          "Colorimetry": {},
          "ExactFramerate": {},
          "Par": {},
          "Range": {},
          "ScanMode": {},
          "Tcs": {}
        },
        "Lang": {}
      },
      "ClockRate": {},
      "Description": {},
      "MediaStreamId": {},
      "MediaStreamName": {},
      "MediaStreamType": {},
      "VideoFormat": {}
    }
  ],
  "name": "string",
  "outputs": [
    {
      "CidrAllowList": {},
      "Description": {},
      "Destination": {},
      "Encryption": {
        "Algorithm": {},
        "ConstantInitializationVector": {},
        "DeviceId": {},
        "KeyType": {},
        "Region": {},
        "ResourceId": {},
        "RoleArn": {},
        "SecretArn": {},
        "Url": {}
      },
      "MaxLatency": {},
      "MediaStreamOutputConfigurations": {},
      "MinLatency": {},
      "Name": {},
      "Port": {},
      "Protocol": {},
      "RemoteId": {},
      "SenderControlPort": {},
      "SmoothingLatency": {},
      "StreamId": {},
      "VpcInterfaceAttachment": {
        "VpcInterfaceName": {}
      }
    }
  ],
  "source": {
    "Decryption": {
      "Algorithm": {},
      "ConstantInitializationVector": {},
      "DeviceId": {},
      "KeyType": {},
      "Region": {},
      "ResourceId": {},
      "RoleArn": {},
      "SecretArn": {},
      "Url": {}
    },
    "Description": {},
    "EntitlementArn": {},
    "IngestPort": {},
    "MaxBitrate": {},
    "MaxLatency": {},
    "MaxSyncBuffer": {},
    "MediaStreamSourceConfigurations": {},
    "MinLatency": {},
    "Name": {},
    "Protocol": {},
    "SenderControlPort": {},
    "SenderIpAddress": {},
    "SourceListenerAddress": {},
    "SourceListenerPort": {},
    "StreamId": {},
    "VpcInterfaceName": {},
    "WhitelistCidr": {},
    "GatewayBridgeSource": {
      "BridgeArn": {},
      "VpcInterfaceAttachment": {
        "VpcInterfaceName": {}
      }
    }
  },
  "sourceFailoverConfig": {
    "FailoverMode": {},
    "RecoveryWindow": {},
    "SourcePriority": {
      "PrimarySource": {}
    },
    "State": {}
  },
  "sources": [
    {
      "Decryption": {
        "Algorithm": {},
        "ConstantInitializationVector": {},
        "DeviceId": {},
        "KeyType": {},
        "Region": {},
        "ResourceId": {},
        "RoleArn": {},
        "SecretArn": {},
        "Url": {}
      },
      "Description": {},
      "EntitlementArn": {},
      "IngestPort": {},
      "MaxBitrate": {},
      "MaxLatency": {},
      "MaxSyncBuffer": {},
      "MediaStreamSourceConfigurations": {},
      "MinLatency": {},
      "Name": {},
      "Protocol": {},
      "SenderControlPort": {},
      "SenderIpAddress": {},
      "SourceListenerAddress": {},
      "SourceListenerPort": {},
      "StreamId": {},
      "VpcInterfaceName": {},
      "WhitelistCidr": {},
      "GatewayBridgeSource": {
        "BridgeArn": {},
        "VpcInterfaceAttachment": {
          "VpcInterfaceName": {}
        }
      }
    }
  ],
  "vpcInterfaces": [
    {
      "Name": {},
      "NetworkInterfaceType": {},
      "RoleArn": {},
      "SecurityGroupIds": {},
      "SubnetId": {}
    }
  ],
  "maintenance": {
    "MaintenanceDay": {},
    "MaintenanceStartHour": {}
  }
}
```

<h3 id="createflow-parameters">Parameters</h3>

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
|» availabilityZone|body|string|false|The Availability Zone that you want to create the flow in. These options are limited to the Availability Zones within the current AWS Region.|
|» entitlements|body|[[GrantEntitlementRequest](#schemagrantentitlementrequest)]|false|The entitlements that you want to grant on a flow.|
|» mediaStreams|body|[[AddMediaStreamRequest](#schemaaddmediastreamrequest)]|false|The media streams that you want to add to the flow. You can associate these media streams with sources and outputs on the flow.|
|» name|body|string|true|The name of the flow.|
|» outputs|body|[[AddOutputRequest](#schemaaddoutputrequest)]|false|The outputs that you want to add to this flow.|
|» source|body|object|false|The settings for the source of the flow.|
|» » Decryption|body|object|false|none|
|» » » Algorithm|body|object|false|none|
|» » » ConstantInitializationVector|body|object|false|none|
|» » » DeviceId|body|object|false|none|
|» » » KeyType|body|object|false|none|
|» » » Region|body|object|false|none|
|» » » ResourceId|body|object|false|none|
|» » » RoleArn|body|object|true|none|
|» » » SecretArn|body|object|false|none|
|» » » Url|body|object|false|none|
|» » Description|body|object|false|none|
|» » EntitlementArn|body|object|false|none|
|» » IngestPort|body|object|false|none|
|» » MaxBitrate|body|object|false|none|
|» » MaxLatency|body|object|false|none|
|» » MaxSyncBuffer|body|object|false|none|
|» » MediaStreamSourceConfigurations|body|object|false|none|
|» » MinLatency|body|object|false|none|
|» » Name|body|object|false|none|
|» » Protocol|body|object|false|none|
|» » SenderControlPort|body|object|false|none|
|» » SenderIpAddress|body|object|false|none|
|» » SourceListenerAddress|body|object|false|none|
|» » SourceListenerPort|body|object|false|none|
|» » StreamId|body|object|false|none|
|» » VpcInterfaceName|body|object|false|none|
|» » WhitelistCidr|body|object|false|none|
|» » GatewayBridgeSource|body|object|false|none|
|» » » BridgeArn|body|object|true|none|
|» » » VpcInterfaceAttachment|body|object|false|none|
|» » » » VpcInterfaceName|body|object|false|none|
|» sourceFailoverConfig|body|object|false|The settings for source failover.|
|» » FailoverMode|body|object|false|none|
|» » RecoveryWindow|body|object|false|none|
|» » SourcePriority|body|object|false|none|
|» » » PrimarySource|body|object|false|none|
|» » State|body|object|false|none|
|» sources|body|[[SetSourceRequest](#schemasetsourcerequest)]|false|none|
|» vpcInterfaces|body|[[VpcInterfaceRequest](#schemavpcinterfacerequest)]|false|The VPC interfaces you want on the flow.|
|» maintenance|body|object|false|Create maintenance setting for a flow|
|» » MaintenanceDay|body|object|false|none|
|» » MaintenanceStartHour|body|object|false|none|

> Example responses

> 201 Response

```json
{
  "Flow": {
    "AvailabilityZone": {},
    "Description": {},
    "EgressIp": {},
    "Entitlements": {},
    "FlowArn": {},
    "MediaStreams": {},
    "Name": {},
    "Outputs": {},
    "Source": {
      "DataTransferSubscriberFeePercent": {},
      "Decryption": {
        "Algorithm": {},
        "ConstantInitializationVector": {},
        "DeviceId": {},
        "KeyType": {},
        "Region": {},
        "ResourceId": {},
        "RoleArn": {},
        "SecretArn": {},
        "Url": {}
      },
      "Description": {},
      "EntitlementArn": {},
      "IngestIp": {},
      "IngestPort": {},
      "MediaStreamSourceConfigurations": {},
      "Name": {},
      "SenderControlPort": {},
      "SenderIpAddress": {},
      "SourceArn": {},
      "Transport": {
        "CidrAllowList": {},
        "MaxBitrate": {},
        "MaxLatency": {},
        "MaxSyncBuffer": {},
        "MinLatency": {},
        "Protocol": {},
        "RemoteId": {},
        "SenderControlPort": {},
        "SenderIpAddress": {},
        "SmoothingLatency": {},
        "SourceListenerAddress": {},
        "SourceListenerPort": {},
        "StreamId": {}
      },
      "VpcInterfaceName": {},
      "WhitelistCidr": {},
      "GatewayBridgeSource": {
        "BridgeArn": {},
        "VpcInterfaceAttachment": {
          "VpcInterfaceName": {}
        }
      }
    },
    "SourceFailoverConfig": {
      "FailoverMode": {},
      "RecoveryWindow": {},
      "SourcePriority": {
        "PrimarySource": {}
      },
      "State": {}
    },
    "Sources": {},
    "Status": {},
    "VpcInterfaces": {},
    "Maintenance": {
      "MaintenanceDay": {},
      "MaintenanceDeadline": {},
      "MaintenanceScheduledDate": {},
      "MaintenanceStartHour": {}
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

<h3 id="createflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateFlowResponse](#schemacreateflowresponse)|
|480|480|CreateFlow420Exception|[CreateFlow420Exception](#schemacreateflow420exception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListGateways

<a id="opIdListGateways"></a>

> Code samples

```bash
curl https://mediaconnect.us-east-1.amazonaws.com/v1/gateways \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/gateways`

Displays a list of gateways that are associated with this account. This request returns a paginated result.

<h3 id="listgateways-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|The maximum number of results to return per API request. For example, you submit a ListGateways request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 10 results per page.|
|nextToken|query|string|false|The token that identifies which batch of results that you want to see. For example, you submit a ListGateways request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListGateways request a second time and specify the NextToken value.|
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
  "Gateways": {},
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

<h3 id="listgateways-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListGatewaysResponse](#schemalistgatewaysresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateGateway

<a id="opIdCreateGateway"></a>

> Code samples

```bash
curl https://mediaconnect.us-east-1.amazonaws.com/v1/gateways \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "egressCidrBlocks": [
      "string"
    ],
    "name": "string",
    "networks": [
      {
        "CidrBlock": {},
        "Name": {}
      }
    ]
  }'
```

`POST /v1/gateways`

Creates a new gateway. The request must include at least one network (up to 4).

> Body parameter

```json
{
  "egressCidrBlocks": [
    "string"
  ],
  "name": "string",
  "networks": [
    {
      "CidrBlock": {},
      "Name": {}
    }
  ]
}
```

<h3 id="creategateway-parameters">Parameters</h3>

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
|» egressCidrBlocks|body|[[__string](#schema__string)]|true|The range of IP addresses that are allowed to contribute content or initiate output requests for flows communicating with this gateway. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.|
|» name|body|string|true|The name of the gateway. This name can not be modified after the gateway is created.|
|» networks|body|[[GatewayNetwork](#schemagatewaynetwork)]|true|The list of networks that you want to add.|

> Example responses

> 201 Response

```json
{
  "Gateway": {
    "EgressCidrBlocks": {},
    "GatewayArn": {},
    "GatewayMessages": {},
    "GatewayState": {},
    "Name": {},
    "Networks": {}
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

<h3 id="creategateway-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateGatewayResponse](#schemacreategatewayresponse)|
|480|480|CreateGateway420Exception|[CreateGateway420Exception](#schemacreategateway420exception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeBridge

<a id="opIdDescribeBridge"></a>

> Code samples

```bash
curl https://mediaconnect.us-east-1.amazonaws.com/v1/bridges/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/bridges/{bridgeArn}`

Displays the details of a bridge.

<h3 id="describebridge-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bridgeArn|path|string|true|The ARN of the bridge that you want to describe.|
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
  "Bridge": {
    "BridgeArn": {},
    "BridgeMessages": {},
    "BridgeState": {},
    "EgressGatewayBridge": {
      "InstanceId": {},
      "MaxBitrate": {}
    },
    "IngressGatewayBridge": {
      "InstanceId": {},
      "MaxBitrate": {},
      "MaxOutputs": {}
    },
    "Name": {},
    "Outputs": {},
    "PlacementArn": {},
    "SourceFailoverConfig": {
      "FailoverMode": {},
      "RecoveryWindow": {},
      "SourcePriority": {
        "PrimarySource": {}
      },
      "State": {}
    },
    "Sources": {}
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

<h3 id="describebridge-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeBridgeResponse](#schemadescribebridgeresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateBridge

<a id="opIdUpdateBridge"></a>

> Code samples

```bash
curl https://mediaconnect.us-east-1.amazonaws.com/v1/bridges/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "egressGatewayBridge": {
      "MaxBitrate": {}
    },
    "ingressGatewayBridge": {
      "MaxBitrate": {},
      "MaxOutputs": {}
    },
    "sourceFailoverConfig": {
      "FailoverMode": {},
      "RecoveryWindow": {},
      "SourcePriority": {
        "PrimarySource": {}
      },
      "State": {}
    }
  }'
```

`PUT /v1/bridges/{bridgeArn}`

Updates the bridge

> Body parameter

```json
{
  "egressGatewayBridge": {
    "MaxBitrate": {}
  },
  "ingressGatewayBridge": {
    "MaxBitrate": {},
    "MaxOutputs": {}
  },
  "sourceFailoverConfig": {
    "FailoverMode": {},
    "RecoveryWindow": {},
    "SourcePriority": {
      "PrimarySource": {}
    },
    "State": {}
  }
}
```

<h3 id="updatebridge-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bridgeArn|path|string|true|The Amazon Resource Number (ARN) of the bridge that you want to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» egressGatewayBridge|body|object|false|none|
|» » MaxBitrate|body|object|false|none|
|» ingressGatewayBridge|body|object|false|none|
|» » MaxBitrate|body|object|false|none|
|» » MaxOutputs|body|object|false|none|
|» sourceFailoverConfig|body|object|false|The settings for source failover.|
|» » FailoverMode|body|object|false|none|
|» » RecoveryWindow|body|object|false|none|
|» » SourcePriority|body|object|false|none|
|» » » PrimarySource|body|object|false|none|
|» » State|body|object|false|none|

> Example responses

> 202 Response

```json
{
  "Bridge": {
    "BridgeArn": {},
    "BridgeMessages": {},
    "BridgeState": {},
    "EgressGatewayBridge": {
      "InstanceId": {},
      "MaxBitrate": {}
    },
    "IngressGatewayBridge": {
      "InstanceId": {},
      "MaxBitrate": {},
      "MaxOutputs": {}
    },
    "Name": {},
    "Outputs": {},
    "PlacementArn": {},
    "SourceFailoverConfig": {
      "FailoverMode": {},
      "RecoveryWindow": {},
      "SourcePriority": {
        "PrimarySource": {}
      },
      "State": {}
    },
    "Sources": {}
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

<h3 id="updatebridge-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[UpdateBridgeResponse](#schemaupdatebridgeresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBridge

<a id="opIdDeleteBridge"></a>

> Code samples

```bash
curl https://mediaconnect.us-east-1.amazonaws.com/v1/bridges/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/bridges/{bridgeArn}`

Deletes a bridge. Before you can delete a bridge, you must stop the bridge.

<h3 id="deletebridge-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bridgeArn|path|string|true|The ARN of the bridge that you want to delete.|
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
  "BridgeArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="deletebridge-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteBridgeResponse](#schemadeletebridgeresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeFlow

<a id="opIdDescribeFlow"></a>

> Code samples

```bash
curl https://mediaconnect.us-east-1.amazonaws.com/v1/flows/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/flows/{flowArn}`

Displays the details of a flow. The response includes the flow ARN, name, and Availability Zone, as well as details about the source, outputs, and entitlements.

<h3 id="describeflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|flowArn|path|string|true|The ARN of the flow that you want to describe.|
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
  "Flow": {
    "AvailabilityZone": {},
    "Description": {},
    "EgressIp": {},
    "Entitlements": {},
    "FlowArn": {},
    "MediaStreams": {},
    "Name": {},
    "Outputs": {},
    "Source": {
      "DataTransferSubscriberFeePercent": {},
      "Decryption": {
        "Algorithm": {},
        "ConstantInitializationVector": {},
        "DeviceId": {},
        "KeyType": {},
        "Region": {},
        "ResourceId": {},
        "RoleArn": {},
        "SecretArn": {},
        "Url": {}
      },
      "Description": {},
      "EntitlementArn": {},
      "IngestIp": {},
      "IngestPort": {},
      "MediaStreamSourceConfigurations": {},
      "Name": {},
      "SenderControlPort": {},
      "SenderIpAddress": {},
      "SourceArn": {},
      "Transport": {
        "CidrAllowList": {},
        "MaxBitrate": {},
        "MaxLatency": {},
        "MaxSyncBuffer": {},
        "MinLatency": {},
        "Protocol": {},
        "RemoteId": {},
        "SenderControlPort": {},
        "SenderIpAddress": {},
        "SmoothingLatency": {},
        "SourceListenerAddress": {},
        "SourceListenerPort": {},
        "StreamId": {}
      },
      "VpcInterfaceName": {},
      "WhitelistCidr": {},
      "GatewayBridgeSource": {
        "BridgeArn": {},
        "VpcInterfaceAttachment": {
          "VpcInterfaceName": {}
        }
      }
    },
    "SourceFailoverConfig": {
      "FailoverMode": {},
      "RecoveryWindow": {},
      "SourcePriority": {
        "PrimarySource": {}
      },
      "State": {}
    },
    "Sources": {},
    "Status": {},
    "VpcInterfaces": {},
    "Maintenance": {
      "MaintenanceDay": {},
      "MaintenanceDeadline": {},
      "MaintenanceScheduledDate": {},
      "MaintenanceStartHour": {}
    }
  },
  "Messages": {
    "Errors": {}
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

<h3 id="describeflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeFlowResponse](#schemadescribeflowresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateFlow

<a id="opIdUpdateFlow"></a>

> Code samples

```bash
curl https://mediaconnect.us-east-1.amazonaws.com/v1/flows/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "sourceFailoverConfig": {
      "FailoverMode": {},
      "RecoveryWindow": {},
      "SourcePriority": {
        "PrimarySource": {}
      },
      "State": {}
    },
    "maintenance": {
      "MaintenanceDay": {},
      "MaintenanceScheduledDate": {},
      "MaintenanceStartHour": {}
    }
  }'
```

`PUT /v1/flows/{flowArn}`

Updates flow

> Body parameter

```json
{
  "sourceFailoverConfig": {
    "FailoverMode": {},
    "RecoveryWindow": {},
    "SourcePriority": {
      "PrimarySource": {}
    },
    "State": {}
  },
  "maintenance": {
    "MaintenanceDay": {},
    "MaintenanceScheduledDate": {},
    "MaintenanceStartHour": {}
  }
}
```

<h3 id="updateflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|flowArn|path|string|true|The flow that you want to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» sourceFailoverConfig|body|object|false|The settings for source failover.|
|» » FailoverMode|body|object|false|none|
|» » RecoveryWindow|body|object|false|none|
|» » SourcePriority|body|object|false|none|
|» » » PrimarySource|body|object|false|none|
|» » State|body|object|false|none|
|» maintenance|body|object|false|Update maintenance setting for a flow|
|» » MaintenanceDay|body|object|false|none|
|» » MaintenanceScheduledDate|body|object|false|none|
|» » MaintenanceStartHour|body|object|false|none|

> Example responses

> 202 Response

```json
{
  "Flow": {
    "AvailabilityZone": {},
    "Description": {},
    "EgressIp": {},
    "Entitlements": {},
    "FlowArn": {},
    "MediaStreams": {},
    "Name": {},
    "Outputs": {},
    "Source": {
      "DataTransferSubscriberFeePercent": {},
      "Decryption": {
        "Algorithm": {},
        "ConstantInitializationVector": {},
        "DeviceId": {},
        "KeyType": {},
        "Region": {},
        "ResourceId": {},
        "RoleArn": {},
        "SecretArn": {},
        "Url": {}
      },
      "Description": {},
      "EntitlementArn": {},
      "IngestIp": {},
      "IngestPort": {},
      "MediaStreamSourceConfigurations": {},
      "Name": {},
      "SenderControlPort": {},
      "SenderIpAddress": {},
      "SourceArn": {},
      "Transport": {
        "CidrAllowList": {},
        "MaxBitrate": {},
        "MaxLatency": {},
        "MaxSyncBuffer": {},
        "MinLatency": {},
        "Protocol": {},
        "RemoteId": {},
        "SenderControlPort": {},
        "SenderIpAddress": {},
        "SmoothingLatency": {},
        "SourceListenerAddress": {},
        "SourceListenerPort": {},
        "StreamId": {}
      },
      "VpcInterfaceName": {},
      "WhitelistCidr": {},
      "GatewayBridgeSource": {
        "BridgeArn": {},
        "VpcInterfaceAttachment": {
          "VpcInterfaceName": {}
        }
      }
    },
    "SourceFailoverConfig": {
      "FailoverMode": {},
      "RecoveryWindow": {},
      "SourcePriority": {
        "PrimarySource": {}
      },
      "State": {}
    },
    "Sources": {},
    "Status": {},
    "VpcInterfaces": {},
    "Maintenance": {
      "MaintenanceDay": {},
      "MaintenanceDeadline": {},
      "MaintenanceScheduledDate": {},
      "MaintenanceStartHour": {}
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

<h3 id="updateflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[UpdateFlowResponse](#schemaupdateflowresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteFlow

<a id="opIdDeleteFlow"></a>

> Code samples

```bash
curl https://mediaconnect.us-east-1.amazonaws.com/v1/flows/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/flows/{flowArn}`

Deletes a flow. Before you can delete a flow, you must stop the flow.

<h3 id="deleteflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|flowArn|path|string|true|The ARN of the flow that you want to delete.|
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
  "FlowArn": {},
  "Status": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="deleteflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[DeleteFlowResponse](#schemadeleteflowresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeGateway

<a id="opIdDescribeGateway"></a>

> Code samples

```bash
curl https://mediaconnect.us-east-1.amazonaws.com/v1/gateways/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/gateways/{gatewayArn}`

Displays the details of a gateway. The response includes the gateway ARN, name, and CIDR blocks, as well as details about the networks.

<h3 id="describegateway-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|gatewayArn|path|string|true|The Amazon Resource Name (ARN) of the gateway that you want to describe.|
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
  "Gateway": {
    "EgressCidrBlocks": {},
    "GatewayArn": {},
    "GatewayMessages": {},
    "GatewayState": {},
    "Name": {},
    "Networks": {}
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

<h3 id="describegateway-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeGatewayResponse](#schemadescribegatewayresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteGateway

<a id="opIdDeleteGateway"></a>

> Code samples

```bash
curl https://mediaconnect.us-east-1.amazonaws.com/v1/gateways/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/gateways/{gatewayArn}`

Deletes a gateway. Before you can delete a gateway, you must deregister its instances and delete its bridges.

<h3 id="deletegateway-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|gatewayArn|path|string|true|The ARN of the gateway that you want to delete.|
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
  "GatewayArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="deletegateway-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteGatewayResponse](#schemadeletegatewayresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeGatewayInstance

<a id="opIdDescribeGatewayInstance"></a>

> Code samples

```bash
curl https://mediaconnect.us-east-1.amazonaws.com/v1/gateway-instances/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/gateway-instances/{gatewayInstanceArn}`

Displays the details of an instance.

<h3 id="describegatewayinstance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|gatewayInstanceArn|path|string|true|The Amazon Resource Name (ARN) of the gateway instance that you want to describe.|
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
  "GatewayInstance": {
    "BridgePlacement": {},
    "ConnectionStatus": {},
    "GatewayArn": {},
    "GatewayInstanceArn": {},
    "InstanceId": {},
    "InstanceMessages": {},
    "InstanceState": {},
    "RunningBridgeCount": {}
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

<h3 id="describegatewayinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeGatewayInstanceResponse](#schemadescribegatewayinstanceresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateGatewayInstance

<a id="opIdUpdateGatewayInstance"></a>

> Code samples

```bash
curl https://mediaconnect.us-east-1.amazonaws.com/v1/gateway-instances/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "bridgePlacement": "AVAILABLE"
  }'
```

`PUT /v1/gateway-instances/{gatewayInstanceArn}`

Updates the configuration of an existing Gateway Instance.

> Body parameter

```json
{
  "bridgePlacement": "AVAILABLE"
}
```

<h3 id="updategatewayinstance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|gatewayInstanceArn|path|string|true|The Amazon Resource Name (ARN) of the instance that you want to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» bridgePlacement|body|string|false|The availability of the instance to host new bridges. The bridgePlacement property can be LOCKED or AVAILABLE. If it is LOCKED, no new bridges can be deployed to this instance. If it is AVAILABLE, new bridges can be added to this instance.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» bridgePlacement|AVAILABLE|
|» bridgePlacement|LOCKED|

> Example responses

> 200 Response

```json
{
  "BridgePlacement": {},
  "GatewayInstanceArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="updategatewayinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateGatewayInstanceResponse](#schemaupdategatewayinstanceresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeregisterGatewayInstance

<a id="opIdDeregisterGatewayInstance"></a>

> Code samples

```bash
curl https://mediaconnect.us-east-1.amazonaws.com/v1/gateway-instances/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/gateway-instances/{gatewayInstanceArn}`

Deregisters an instance. Before you deregister an instance, all bridges running on the instance must be stopped. If you want to deregister an instance without stopping the bridges, you must use the --force option.

<h3 id="deregistergatewayinstance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|force|query|boolean|false|Force the deregistration of an instance. Force will deregister an instance, even if there are bridges running on it.|
|gatewayInstanceArn|path|string|true|The Amazon Resource Name (ARN) of the gateway that contains the instance that you want to deregister.|
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
  "GatewayInstanceArn": {},
  "InstanceState": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="deregistergatewayinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[DeregisterGatewayInstanceResponse](#schemaderegistergatewayinstanceresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeOffering

<a id="opIdDescribeOffering"></a>

> Code samples

```bash
curl https://mediaconnect.us-east-1.amazonaws.com/v1/offerings/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/offerings/{offeringArn}`

Displays the details of an offering. The response includes the offering description, duration, outbound bandwidth, price, and Amazon Resource Name (ARN).

<h3 id="describeoffering-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringArn|path|string|true|The Amazon Resource Name (ARN) of the offering.|
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
  "Offering": {
    "CurrencyCode": {},
    "Duration": {},
    "DurationUnits": {},
    "OfferingArn": {},
    "OfferingDescription": {},
    "PricePerUnit": {},
    "PriceUnits": {},
    "ResourceSpecification": {
      "ReservedBitrate": {},
      "ResourceType": {}
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

<h3 id="describeoffering-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeOfferingResponse](#schemadescribeofferingresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PurchaseOffering

<a id="opIdPurchaseOffering"></a>

> Code samples

```bash
curl https://mediaconnect.us-east-1.amazonaws.com/v1/offerings/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "reservationName": "string",
    "start": "string"
  }'
```

`POST /v1/offerings/{offeringArn}`

Submits a request to purchase an offering. If you already have an active reservation, you can't purchase another offering.

> Body parameter

```json
{
  "reservationName": "string",
  "start": "string"
}
```

<h3 id="purchaseoffering-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringArn|path|string|true|The Amazon Resource Name (ARN) of the offering.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» reservationName|body|string|true|The name that you want to use for the reservation.|
|» start|body|string|true|The date and time that you want the reservation to begin, in Coordinated Universal Time (UTC). You can specify any date and time between 12:00am on the first day of the current month to the current time on today's date, inclusive. Specify the start in a 24-hour notation. Use the following format: YYYY-MM-DDTHH:mm:SSZ, where T and Z are literal characters. For example, to specify 11:30pm on March 5, 2020, enter 2020-03-05T23:30:00Z.|

> Example responses

> 201 Response

```json
{
  "Reservation": {
    "CurrencyCode": {},
    "Duration": {},
    "DurationUnits": {},
    "End": {},
    "OfferingArn": {},
    "OfferingDescription": {},
    "PricePerUnit": {},
    "PriceUnits": {},
    "ReservationArn": {},
    "ReservationName": {},
    "ReservationState": {},
    "ResourceSpecification": {
      "ReservedBitrate": {},
      "ResourceType": {}
    },
    "Start": {}
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

<h3 id="purchaseoffering-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[PurchaseOfferingResponse](#schemapurchaseofferingresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeReservation

<a id="opIdDescribeReservation"></a>

> Code samples

```bash
curl https://mediaconnect.us-east-1.amazonaws.com/v1/reservations/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/reservations/{reservationArn}`

Displays the details of a reservation. The response includes the reservation name, state, start date and time, and the details of the offering that make up the rest of the reservation (such as price, duration, and outbound bandwidth).

<h3 id="describereservation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reservationArn|path|string|true|The Amazon Resource Name (ARN) of the reservation.|
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
  "Reservation": {
    "CurrencyCode": {},
    "Duration": {},
    "DurationUnits": {},
    "End": {},
    "OfferingArn": {},
    "OfferingDescription": {},
    "PricePerUnit": {},
    "PriceUnits": {},
    "ReservationArn": {},
    "ReservationName": {},
    "ReservationState": {},
    "ResourceSpecification": {
      "ReservedBitrate": {},
      "ResourceType": {}
    },
    "Start": {}
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

<h3 id="describereservation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeReservationResponse](#schemadescribereservationresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GrantFlowEntitlements

<a id="opIdGrantFlowEntitlements"></a>

> Code samples

```bash
curl https://mediaconnect.us-east-1.amazonaws.com/v1/flows/string/entitlements \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "entitlements": [
      {
        "DataTransferSubscriberFeePercent": {},
        "Description": {},
        "Encryption": {
          "Algorithm": {},
          "ConstantInitializationVector": {},
          "DeviceId": {},
          "KeyType": {},
          "Region": {},
          "ResourceId": {},
          "RoleArn": {},
          "SecretArn": {},
          "Url": {}
        },
        "EntitlementStatus": {},
        "Name": {},
        "Subscribers": {}
      }
    ]
  }'
```

`POST /v1/flows/{flowArn}/entitlements`

Grants entitlements to an existing flow.

> Body parameter

```json
{
  "entitlements": [
    {
      "DataTransferSubscriberFeePercent": {},
      "Description": {},
      "Encryption": {
        "Algorithm": {},
        "ConstantInitializationVector": {},
        "DeviceId": {},
        "KeyType": {},
        "Region": {},
        "ResourceId": {},
        "RoleArn": {},
        "SecretArn": {},
        "Url": {}
      },
      "EntitlementStatus": {},
      "Name": {},
      "Subscribers": {}
    }
  ]
}
```

<h3 id="grantflowentitlements-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|flowArn|path|string|true|The flow that you want to grant entitlements on.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» entitlements|body|[[GrantEntitlementRequest](#schemagrantentitlementrequest)]|true|The list of entitlements that you want to grant.|

> Example responses

> 200 Response

```json
{
  "Entitlements": {},
  "FlowArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="grantflowentitlements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GrantFlowEntitlementsResponse](#schemagrantflowentitlementsresponse)|
|480|480|GrantFlowEntitlements420Exception|[GrantFlowEntitlements420Exception](#schemagrantflowentitlements420exception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListEntitlements

<a id="opIdListEntitlements"></a>

> Code samples

```bash
curl https://mediaconnect.us-east-1.amazonaws.com/v1/entitlements \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/entitlements`

Displays a list of all entitlements that have been granted to this account. This request returns 20 results per page.

<h3 id="listentitlements-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|The maximum number of results to return per API request. For example, you submit a ListEntitlements request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 20 results per page.|
|nextToken|query|string|false|The token that identifies which batch of results that you want to see. For example, you submit a ListEntitlements request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListEntitlements request a second time and specify the NextToken value.|
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
  "Entitlements": {},
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

<h3 id="listentitlements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListEntitlementsResponse](#schemalistentitlementsresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListGatewayInstances

<a id="opIdListGatewayInstances"></a>

> Code samples

```bash
curl https://mediaconnect.us-east-1.amazonaws.com/v1/gateway-instances \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/gateway-instances`

Displays a list of instances associated with the AWS account. This request returns a paginated result. You can use the filterArn property to display only the instances associated with the selected Gateway Amazon Resource Name (ARN).

<h3 id="listgatewayinstances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filterArn|query|string|false|Filter the list results to display only the instances associated with the selected Gateway Amazon Resource Name (ARN).|
|maxResults|query|integer|false|The maximum number of results to return per API request. For example, you submit a ListInstances request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 10 results per page.|
|nextToken|query|string|false|The token that identifies which batch of results that you want to see. For example, you submit a ListInstances request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListInstances request a second time and specify the NextToken value.|
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
  "Instances": {},
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

<h3 id="listgatewayinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListGatewayInstancesResponse](#schemalistgatewayinstancesresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListOfferings

<a id="opIdListOfferings"></a>

> Code samples

```bash
curl https://mediaconnect.us-east-1.amazonaws.com/v1/offerings \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/offerings`

Displays a list of all offerings that are available to this account in the current AWS Region. If you have an active reservation (which means you've purchased an offering that has already started and hasn't expired yet), your account isn't eligible for other offerings.

<h3 id="listofferings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|The maximum number of results to return per API request. For example, you submit a ListOfferings request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 10 results per page.|
|nextToken|query|string|false|The token that identifies which batch of results that you want to see. For example, you submit a ListOfferings request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListOfferings request a second time and specify the NextToken value.|
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

<h3 id="listofferings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListOfferingsResponse](#schemalistofferingsresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListReservations

<a id="opIdListReservations"></a>

> Code samples

```bash
curl https://mediaconnect.us-east-1.amazonaws.com/v1/reservations \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/reservations`

Displays a list of all reservations that have been purchased by this account in the current AWS Region. This list includes all reservations in all states (such as active and expired).

<h3 id="listreservations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|The maximum number of results to return per API request. For example, you submit a ListReservations request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 10 results per page.|
|nextToken|query|string|false|The token that identifies which batch of results that you want to see. For example, you submit a ListReservations request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListOfferings request a second time and specify the NextToken value.|
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

<h3 id="listreservations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListReservationsResponse](#schemalistreservationsresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://mediaconnect.us-east-1.amazonaws.com/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{resourceArn}`

List all tags on an AWS Elemental MediaConnect resource

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The Amazon Resource Name (ARN) that identifies the AWS Elemental MediaConnect resource for which to list the tags.|
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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://mediaconnect.us-east-1.amazonaws.com/tags/string \
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

Associates the specified tags to a resource with the specified resourceArn. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are deleted as well.

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
|resourceArn|path|string|true|The Amazon Resource Name (ARN) that identifies the AWS Elemental MediaConnect resource to which to add tags.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tags|body|object|true|A map from tag keys to values. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.|
|» » **additionalProperties**|body|[__string](#schema__string)|false|none|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateBridgeOutput

<a id="opIdUpdateBridgeOutput"></a>

> Code samples

```bash
curl https://mediaconnect.us-east-1.amazonaws.com/v1/bridges/string/outputs/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "networkOutput": {
      "IpAddress": {},
      "NetworkName": {},
      "Port": {},
      "Protocol": {},
      "Ttl": {}
    }
  }'
```

`PUT /v1/bridges/{bridgeArn}/outputs/{outputName}`

Updates an existing bridge output.

> Body parameter

```json
{
  "networkOutput": {
    "IpAddress": {},
    "NetworkName": {},
    "Port": {},
    "Protocol": {},
    "Ttl": {}
  }
}
```

<h3 id="updatebridgeoutput-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bridgeArn|path|string|true|The ARN of the bridge that you want to update.|
|outputName|path|string|true|The name of the bridge output that you want to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» networkOutput|body|object|false|Update an existing network output.|
|» » IpAddress|body|object|false|none|
|» » NetworkName|body|object|false|none|
|» » Port|body|object|false|none|
|» » Protocol|body|object|false|none|
|» » Ttl|body|object|false|none|

> Example responses

> 202 Response

```json
{
  "BridgeArn": {},
  "Output": {
    "FlowOutput": {
      "FlowArn": {},
      "FlowSourceArn": {},
      "Name": {}
    },
    "NetworkOutput": {
      "IpAddress": {},
      "Name": {},
      "NetworkName": {},
      "Port": {},
      "Protocol": {},
      "Ttl": {}
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

<h3 id="updatebridgeoutput-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[UpdateBridgeOutputResponse](#schemaupdatebridgeoutputresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RemoveBridgeOutput

<a id="opIdRemoveBridgeOutput"></a>

> Code samples

```bash
curl https://mediaconnect.us-east-1.amazonaws.com/v1/bridges/string/outputs/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/bridges/{bridgeArn}/outputs/{outputName}`

Removes an output from a bridge.

<h3 id="removebridgeoutput-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bridgeArn|path|string|true|The ARN of the bridge that you want to update.|
|outputName|path|string|true|The name of the bridge output that you want to remove.|
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
  "BridgeArn": {},
  "OutputName": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="removebridgeoutput-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[RemoveBridgeOutputResponse](#schemaremovebridgeoutputresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateBridgeSource

<a id="opIdUpdateBridgeSource"></a>

> Code samples

```bash
curl https://mediaconnect.us-east-1.amazonaws.com/v1/bridges/string/sources/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "flowSource": {
      "FlowArn": {},
      "FlowVpcInterfaceAttachment": {
        "VpcInterfaceName": {}
      }
    },
    "networkSource": {
      "MulticastIp": {},
      "NetworkName": {},
      "Port": {},
      "Protocol": {}
    }
  }'
```

`PUT /v1/bridges/{bridgeArn}/sources/{sourceName}`

Updates an existing bridge source.

> Body parameter

```json
{
  "flowSource": {
    "FlowArn": {},
    "FlowVpcInterfaceAttachment": {
      "VpcInterfaceName": {}
    }
  },
  "networkSource": {
    "MulticastIp": {},
    "NetworkName": {},
    "Port": {},
    "Protocol": {}
  }
}
```

<h3 id="updatebridgesource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bridgeArn|path|string|true|The ARN of the bridge that you want to update.|
|sourceName|path|string|true|The name of the source that you want to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» flowSource|body|object|false|Update the flow source of the bridge.|
|» » FlowArn|body|object|false|none|
|» » FlowVpcInterfaceAttachment|body|object|false|none|
|» » » VpcInterfaceName|body|object|false|none|
|» networkSource|body|object|false|Update the network source of the bridge.|
|» » MulticastIp|body|object|false|none|
|» » NetworkName|body|object|false|none|
|» » Port|body|object|false|none|
|» » Protocol|body|object|false|none|

> Example responses

> 202 Response

```json
{
  "BridgeArn": {},
  "Source": {
    "FlowSource": {
      "FlowArn": {},
      "FlowVpcInterfaceAttachment": {
        "VpcInterfaceName": {}
      },
      "Name": {},
      "OutputArn": {}
    },
    "NetworkSource": {
      "MulticastIp": {},
      "Name": {},
      "NetworkName": {},
      "Port": {},
      "Protocol": {}
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

<h3 id="updatebridgesource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[UpdateBridgeSourceResponse](#schemaupdatebridgesourceresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RemoveBridgeSource

<a id="opIdRemoveBridgeSource"></a>

> Code samples

```bash
curl https://mediaconnect.us-east-1.amazonaws.com/v1/bridges/string/sources/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/bridges/{bridgeArn}/sources/{sourceName}`

Removes a source from a bridge.

<h3 id="removebridgesource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bridgeArn|path|string|true|The ARN of the bridge that you want to update.|
|sourceName|path|string|true|The name of the bridge source that you want to remove.|
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
  "BridgeArn": {},
  "SourceName": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="removebridgesource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[RemoveBridgeSourceResponse](#schemaremovebridgesourceresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateFlowMediaStream

<a id="opIdUpdateFlowMediaStream"></a>

> Code samples

```bash
curl https://mediaconnect.us-east-1.amazonaws.com/v1/flows/string/mediaStreams/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "attributes": {
      "Fmtp": {
        "ChannelOrder": {},
        "Colorimetry": {},
        "ExactFramerate": {},
        "Par": {},
        "Range": {},
        "ScanMode": {},
        "Tcs": {}
      },
      "Lang": {}
    },
    "clockRate": 0,
    "description": "string",
    "mediaStreamType": "video",
    "videoFormat": "string"
  }'
```

`PUT /v1/flows/{flowArn}/mediaStreams/{mediaStreamName}`

Updates an existing media stream.

> Body parameter

```json
{
  "attributes": {
    "Fmtp": {
      "ChannelOrder": {},
      "Colorimetry": {},
      "ExactFramerate": {},
      "Par": {},
      "Range": {},
      "ScanMode": {},
      "Tcs": {}
    },
    "Lang": {}
  },
  "clockRate": 0,
  "description": "string",
  "mediaStreamType": "video",
  "videoFormat": "string"
}
```

<h3 id="updateflowmediastream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|flowArn|path|string|true|The Amazon Resource Name (ARN) of the flow.|
|mediaStreamName|path|string|true|The name of the media stream that you want to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» attributes|body|object|false|Attributes that are related to the media stream.|
|» » Fmtp|body|object|false|none|
|» » » ChannelOrder|body|object|false|none|
|» » » Colorimetry|body|object|false|none|
|» » » ExactFramerate|body|object|false|none|
|» » » Par|body|object|false|none|
|» » » Range|body|object|false|none|
|» » » ScanMode|body|object|false|none|
|» » » Tcs|body|object|false|none|
|» » Lang|body|object|false|none|
|» clockRate|body|integer|false|The sample rate (in Hz) for the stream. If the media stream type is video or ancillary data, set this value to 90000. If the media stream type is audio, set this value to either 48000 or 96000.|
|» description|body|string|false|Description|
|» mediaStreamType|body|string|false|The type of media stream.|
|» videoFormat|body|string|false|The resolution of the video.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» mediaStreamType|video|
|» mediaStreamType|audio|
|» mediaStreamType|ancillary-data|

> Example responses

> 202 Response

```json
{
  "FlowArn": {},
  "MediaStream": {
    "Attributes": {
      "Fmtp": {
        "ChannelOrder": {},
        "Colorimetry": {},
        "ExactFramerate": {},
        "Par": {},
        "Range": {},
        "ScanMode": {},
        "Tcs": {}
      },
      "Lang": {}
    },
    "ClockRate": {},
    "Description": {},
    "Fmt": {},
    "MediaStreamId": {},
    "MediaStreamName": {},
    "MediaStreamType": {},
    "VideoFormat": {}
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

<h3 id="updateflowmediastream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[UpdateFlowMediaStreamResponse](#schemaupdateflowmediastreamresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RemoveFlowMediaStream

<a id="opIdRemoveFlowMediaStream"></a>

> Code samples

```bash
curl https://mediaconnect.us-east-1.amazonaws.com/v1/flows/string/mediaStreams/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/flows/{flowArn}/mediaStreams/{mediaStreamName}`

Removes a media stream from a flow. This action is only available if the media stream is not associated with a source or output.

<h3 id="removeflowmediastream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|flowArn|path|string|true|The Amazon Resource Name (ARN) of the flow.|
|mediaStreamName|path|string|true|The name of the media stream that you want to remove.|
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
  "FlowArn": {},
  "MediaStreamName": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="removeflowmediastream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RemoveFlowMediaStreamResponse](#schemaremoveflowmediastreamresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateFlowOutput

<a id="opIdUpdateFlowOutput"></a>

> Code samples

```bash
curl https://mediaconnect.us-east-1.amazonaws.com/v1/flows/string/outputs/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "cidrAllowList": [
      "string"
    ],
    "description": "string",
    "destination": "string",
    "encryption": {
      "Algorithm": {},
      "ConstantInitializationVector": {},
      "DeviceId": {},
      "KeyType": {},
      "Region": {},
      "ResourceId": {},
      "RoleArn": {},
      "SecretArn": {},
      "Url": {}
    },
    "maxLatency": 0,
    "mediaStreamOutputConfigurations": [
      {
        "DestinationConfigurations": {},
        "EncodingName": {},
        "EncodingParameters": {
          "CompressionFactor": {},
          "EncoderProfile": {}
        },
        "MediaStreamName": {}
      }
    ],
    "minLatency": 0,
    "port": 0,
    "protocol": "zixi-push",
    "remoteId": "string",
    "senderControlPort": 0,
    "senderIpAddress": "string",
    "smoothingLatency": 0,
    "streamId": "string",
    "vpcInterfaceAttachment": {
      "VpcInterfaceName": {}
    }
  }'
```

`PUT /v1/flows/{flowArn}/outputs/{outputArn}`

Updates an existing flow output.

> Body parameter

```json
{
  "cidrAllowList": [
    "string"
  ],
  "description": "string",
  "destination": "string",
  "encryption": {
    "Algorithm": {},
    "ConstantInitializationVector": {},
    "DeviceId": {},
    "KeyType": {},
    "Region": {},
    "ResourceId": {},
    "RoleArn": {},
    "SecretArn": {},
    "Url": {}
  },
  "maxLatency": 0,
  "mediaStreamOutputConfigurations": [
    {
      "DestinationConfigurations": {},
      "EncodingName": {},
      "EncodingParameters": {
        "CompressionFactor": {},
        "EncoderProfile": {}
      },
      "MediaStreamName": {}
    }
  ],
  "minLatency": 0,
  "port": 0,
  "protocol": "zixi-push",
  "remoteId": "string",
  "senderControlPort": 0,
  "senderIpAddress": "string",
  "smoothingLatency": 0,
  "streamId": "string",
  "vpcInterfaceAttachment": {
    "VpcInterfaceName": {}
  }
}
```

<h3 id="updateflowoutput-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|flowArn|path|string|true|The flow that is associated with the output that you want to update.|
|outputArn|path|string|true|The ARN of the output that you want to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» cidrAllowList|body|[[__string](#schema__string)]|false|The range of IP addresses that should be allowed to initiate output requests to this flow. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.|
|» description|body|string|false|A description of the output. This description appears only on the AWS Elemental MediaConnect console and will not be seen by the end user.|
|» destination|body|string|false|The IP address where you want to send the output.|
|» encryption|body|object|false|Information about the encryption of the flow.|
|» » Algorithm|body|object|false|none|
|» » ConstantInitializationVector|body|object|false|none|
|» » DeviceId|body|object|false|none|
|» » KeyType|body|object|false|none|
|» » Region|body|object|false|none|
|» » ResourceId|body|object|false|none|
|» » RoleArn|body|object|false|none|
|» » SecretArn|body|object|false|none|
|» » Url|body|object|false|none|
|» maxLatency|body|integer|false|The maximum latency in milliseconds. This parameter applies only to RIST-based, Zixi-based, and Fujitsu-based streams.|
|» mediaStreamOutputConfigurations|body|[[MediaStreamOutputConfigurationRequest](#schemamediastreamoutputconfigurationrequest)]|false|The media streams that are associated with the output, and the parameters for those associations.|
|» minLatency|body|integer|false|The minimum latency in milliseconds for SRT-based streams. In streams that use the SRT protocol, this value that you set on your MediaConnect source or output represents the minimal potential latency of that connection. The latency of the stream is set to the highest number between the sender’s minimum latency and the receiver’s minimum latency.|
|» port|body|integer|false|The port to use when content is distributed to this output.|
|» protocol|body|string|false|The protocol to use for the output.|
|» remoteId|body|string|false|The remote ID for the Zixi-pull stream.|
|» senderControlPort|body|integer|false|The port that the flow uses to send outbound requests to initiate connection with the sender.|
|» senderIpAddress|body|string|false|The IP address that the flow communicates with to initiate connection with the sender.|
|» smoothingLatency|body|integer|false|The smoothing latency in milliseconds for RIST, RTP, and RTP-FEC streams.|
|» streamId|body|string|false|The stream ID that you want to use for this transport. This parameter applies only to Zixi and SRT caller-based streams.|
|» vpcInterfaceAttachment|body|object|false|The settings for attaching a VPC interface to an resource.|
|» » VpcInterfaceName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocol|zixi-push|
|» protocol|rtp-fec|
|» protocol|rtp|
|» protocol|zixi-pull|
|» protocol|rist|
|» protocol|st2110-jpegxs|
|» protocol|cdi|
|» protocol|srt-listener|
|» protocol|srt-caller|
|» protocol|fujitsu-qos|
|» protocol|udp|

> Example responses

> 202 Response

```json
{
  "FlowArn": {},
  "Output": {
    "DataTransferSubscriberFeePercent": {},
    "Description": {},
    "Destination": {},
    "Encryption": {
      "Algorithm": {},
      "ConstantInitializationVector": {},
      "DeviceId": {},
      "KeyType": {},
      "Region": {},
      "ResourceId": {},
      "RoleArn": {},
      "SecretArn": {},
      "Url": {}
    },
    "EntitlementArn": {},
    "ListenerAddress": {},
    "MediaLiveInputArn": {},
    "MediaStreamOutputConfigurations": {},
    "Name": {},
    "OutputArn": {},
    "Port": {},
    "Transport": {
      "CidrAllowList": {},
      "MaxBitrate": {},
      "MaxLatency": {},
      "MaxSyncBuffer": {},
      "MinLatency": {},
      "Protocol": {},
      "RemoteId": {},
      "SenderControlPort": {},
      "SenderIpAddress": {},
      "SmoothingLatency": {},
      "SourceListenerAddress": {},
      "SourceListenerPort": {},
      "StreamId": {}
    },
    "VpcInterfaceAttachment": {
      "VpcInterfaceName": {}
    },
    "BridgeArn": {},
    "BridgePorts": {}
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

<h3 id="updateflowoutput-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[UpdateFlowOutputResponse](#schemaupdateflowoutputresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RemoveFlowOutput

<a id="opIdRemoveFlowOutput"></a>

> Code samples

```bash
curl https://mediaconnect.us-east-1.amazonaws.com/v1/flows/string/outputs/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/flows/{flowArn}/outputs/{outputArn}`

Removes an output from an existing flow. This request can be made only on an output that does not have an entitlement associated with it. If the output has an entitlement, you must revoke the entitlement instead. When an entitlement is revoked from a flow, the service automatically removes the associated output.

<h3 id="removeflowoutput-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|flowArn|path|string|true|The flow that you want to remove an output from.|
|outputArn|path|string|true|The ARN of the output that you want to remove.|
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
  "FlowArn": {},
  "OutputArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="removeflowoutput-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[RemoveFlowOutputResponse](#schemaremoveflowoutputresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateFlowSource

<a id="opIdUpdateFlowSource"></a>

> Code samples

```bash
curl https://mediaconnect.us-east-1.amazonaws.com/v1/flows/string/source/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "decryption": {
      "Algorithm": {},
      "ConstantInitializationVector": {},
      "DeviceId": {},
      "KeyType": {},
      "Region": {},
      "ResourceId": {},
      "RoleArn": {},
      "SecretArn": {},
      "Url": {}
    },
    "description": "string",
    "entitlementArn": "string",
    "ingestPort": 0,
    "maxBitrate": 0,
    "maxLatency": 0,
    "maxSyncBuffer": 0,
    "mediaStreamSourceConfigurations": [
      {
        "EncodingName": {},
        "InputConfigurations": {},
        "MediaStreamName": {}
      }
    ],
    "minLatency": 0,
    "protocol": "zixi-push",
    "senderControlPort": 0,
    "senderIpAddress": "string",
    "sourceListenerAddress": "string",
    "sourceListenerPort": 0,
    "streamId": "string",
    "vpcInterfaceName": "string",
    "whitelistCidr": "string",
    "gatewayBridgeSource": {
      "BridgeArn": {},
      "VpcInterfaceAttachment": {
        "VpcInterfaceName": {}
      }
    }
  }'
```

`PUT /v1/flows/{flowArn}/source/{sourceArn}`

Updates the source of a flow.

> Body parameter

```json
{
  "decryption": {
    "Algorithm": {},
    "ConstantInitializationVector": {},
    "DeviceId": {},
    "KeyType": {},
    "Region": {},
    "ResourceId": {},
    "RoleArn": {},
    "SecretArn": {},
    "Url": {}
  },
  "description": "string",
  "entitlementArn": "string",
  "ingestPort": 0,
  "maxBitrate": 0,
  "maxLatency": 0,
  "maxSyncBuffer": 0,
  "mediaStreamSourceConfigurations": [
    {
      "EncodingName": {},
      "InputConfigurations": {},
      "MediaStreamName": {}
    }
  ],
  "minLatency": 0,
  "protocol": "zixi-push",
  "senderControlPort": 0,
  "senderIpAddress": "string",
  "sourceListenerAddress": "string",
  "sourceListenerPort": 0,
  "streamId": "string",
  "vpcInterfaceName": "string",
  "whitelistCidr": "string",
  "gatewayBridgeSource": {
    "BridgeArn": {},
    "VpcInterfaceAttachment": {
      "VpcInterfaceName": {}
    }
  }
}
```

<h3 id="updateflowsource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|flowArn|path|string|true|The flow that is associated with the source that you want to update.|
|sourceArn|path|string|true|The ARN of the source that you want to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» decryption|body|object|false|Information about the encryption of the flow.|
|» » Algorithm|body|object|false|none|
|» » ConstantInitializationVector|body|object|false|none|
|» » DeviceId|body|object|false|none|
|» » KeyType|body|object|false|none|
|» » Region|body|object|false|none|
|» » ResourceId|body|object|false|none|
|» » RoleArn|body|object|false|none|
|» » SecretArn|body|object|false|none|
|» » Url|body|object|false|none|
|» description|body|string|false|A description for the source. This value is not used or seen outside of the current AWS Elemental MediaConnect account.|
|» entitlementArn|body|string|false|The ARN of the entitlement that allows you to subscribe to this flow. The entitlement is set by the flow originator, and the ARN is generated as part of the originator's flow.|
|» ingestPort|body|integer|false|The port that the flow will be listening on for incoming content.|
|» maxBitrate|body|integer|false|The smoothing max bitrate (in bps) for RIST, RTP, and RTP-FEC streams.|
|» maxLatency|body|integer|false|The maximum latency in milliseconds. This parameter applies only to RIST-based, Zixi-based, and Fujitsu-based streams.|
|» maxSyncBuffer|body|integer|false|The size of the buffer (in milliseconds) to use to sync incoming source data.|
|» mediaStreamSourceConfigurations|body|[[MediaStreamSourceConfigurationRequest](#schemamediastreamsourceconfigurationrequest)]|false|The media streams that are associated with the source, and the parameters for those associations.|
|» minLatency|body|integer|false|The minimum latency in milliseconds for SRT-based streams. In streams that use the SRT protocol, this value that you set on your MediaConnect source or output represents the minimal potential latency of that connection. The latency of the stream is set to the highest number between the sender’s minimum latency and the receiver’s minimum latency.|
|» protocol|body|string|false|The protocol that is used by the source.|
|» senderControlPort|body|integer|false|The port that the flow uses to send outbound requests to initiate connection with the sender.|
|» senderIpAddress|body|string|false|The IP address that the flow communicates with to initiate connection with the sender.|
|» sourceListenerAddress|body|string|false|Source IP or domain name for SRT-caller protocol.|
|» sourceListenerPort|body|integer|false|Source port for SRT-caller protocol.|
|» streamId|body|string|false|The stream ID that you want to use for this transport. This parameter applies only to Zixi and SRT caller-based streams.|
|» vpcInterfaceName|body|string|false|The name of the VPC interface to use for this source.|
|» whitelistCidr|body|string|false|The range of IP addresses that should be allowed to contribute content to your source. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.|
|» gatewayBridgeSource|body|object|false|The source configuration for cloud flows receiving a stream from a bridge.|
|» » BridgeArn|body|object|false|none|
|» » VpcInterfaceAttachment|body|object|false|none|
|» » » VpcInterfaceName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocol|zixi-push|
|» protocol|rtp-fec|
|» protocol|rtp|
|» protocol|zixi-pull|
|» protocol|rist|
|» protocol|st2110-jpegxs|
|» protocol|cdi|
|» protocol|srt-listener|
|» protocol|srt-caller|
|» protocol|fujitsu-qos|
|» protocol|udp|

> Example responses

> 202 Response

```json
{
  "FlowArn": {},
  "Source": {
    "DataTransferSubscriberFeePercent": {},
    "Decryption": {
      "Algorithm": {},
      "ConstantInitializationVector": {},
      "DeviceId": {},
      "KeyType": {},
      "Region": {},
      "ResourceId": {},
      "RoleArn": {},
      "SecretArn": {},
      "Url": {}
    },
    "Description": {},
    "EntitlementArn": {},
    "IngestIp": {},
    "IngestPort": {},
    "MediaStreamSourceConfigurations": {},
    "Name": {},
    "SenderControlPort": {},
    "SenderIpAddress": {},
    "SourceArn": {},
    "Transport": {
      "CidrAllowList": {},
      "MaxBitrate": {},
      "MaxLatency": {},
      "MaxSyncBuffer": {},
      "MinLatency": {},
      "Protocol": {},
      "RemoteId": {},
      "SenderControlPort": {},
      "SenderIpAddress": {},
      "SmoothingLatency": {},
      "SourceListenerAddress": {},
      "SourceListenerPort": {},
      "StreamId": {}
    },
    "VpcInterfaceName": {},
    "WhitelistCidr": {},
    "GatewayBridgeSource": {
      "BridgeArn": {},
      "VpcInterfaceAttachment": {
        "VpcInterfaceName": {}
      }
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

<h3 id="updateflowsource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[UpdateFlowSourceResponse](#schemaupdateflowsourceresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RemoveFlowSource

<a id="opIdRemoveFlowSource"></a>

> Code samples

```bash
curl https://mediaconnect.us-east-1.amazonaws.com/v1/flows/string/source/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/flows/{flowArn}/source/{sourceArn}`

Removes a source from an existing flow. This request can be made only if there is more than one source on the flow.

<h3 id="removeflowsource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|flowArn|path|string|true|The flow that you want to remove a source from.|
|sourceArn|path|string|true|The ARN of the source that you want to remove.|
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
  "FlowArn": {},
  "SourceArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="removeflowsource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[RemoveFlowSourceResponse](#schemaremoveflowsourceresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RemoveFlowVpcInterface

<a id="opIdRemoveFlowVpcInterface"></a>

> Code samples

```bash
curl https://mediaconnect.us-east-1.amazonaws.com/v1/flows/string/vpcInterfaces/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/flows/{flowArn}/vpcInterfaces/{vpcInterfaceName}`

Removes a VPC Interface from an existing flow. This request can be made only on a VPC interface that does not have a Source or Output associated with it. If the VPC interface is referenced by a Source or Output, you must first delete or update the Source or Output to no longer reference the VPC interface.

<h3 id="removeflowvpcinterface-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|flowArn|path|string|true|The flow that you want to remove a VPC interface from.|
|vpcInterfaceName|path|string|true|The name of the VPC interface that you want to remove.|
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
  "FlowArn": {},
  "NonDeletedNetworkInterfaceIds": {},
  "VpcInterfaceName": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="removeflowvpcinterface-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RemoveFlowVpcInterfaceResponse](#schemaremoveflowvpcinterfaceresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateFlowEntitlement

<a id="opIdUpdateFlowEntitlement"></a>

> Code samples

```bash
curl https://mediaconnect.us-east-1.amazonaws.com/v1/flows/string/entitlements/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "encryption": {
      "Algorithm": {},
      "ConstantInitializationVector": {},
      "DeviceId": {},
      "KeyType": {},
      "Region": {},
      "ResourceId": {},
      "RoleArn": {},
      "SecretArn": {},
      "Url": {}
    },
    "entitlementStatus": "ENABLED",
    "subscribers": [
      "string"
    ]
  }'
```

`PUT /v1/flows/{flowArn}/entitlements/{entitlementArn}`

You can change an entitlement's description, subscribers, and encryption. If you change the subscribers, the service will remove the outputs that are are used by the subscribers that are removed.

> Body parameter

```json
{
  "description": "string",
  "encryption": {
    "Algorithm": {},
    "ConstantInitializationVector": {},
    "DeviceId": {},
    "KeyType": {},
    "Region": {},
    "ResourceId": {},
    "RoleArn": {},
    "SecretArn": {},
    "Url": {}
  },
  "entitlementStatus": "ENABLED",
  "subscribers": [
    "string"
  ]
}
```

<h3 id="updateflowentitlement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|entitlementArn|path|string|true|The ARN of the entitlement that you want to update.|
|flowArn|path|string|true|The flow that is associated with the entitlement that you want to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» description|body|string|false|A description of the entitlement. This description appears only on the AWS Elemental MediaConnect console and will not be seen by the subscriber or end user.|
|» encryption|body|object|false|Information about the encryption of the flow.|
|» » Algorithm|body|object|false|none|
|» » ConstantInitializationVector|body|object|false|none|
|» » DeviceId|body|object|false|none|
|» » KeyType|body|object|false|none|
|» » Region|body|object|false|none|
|» » ResourceId|body|object|false|none|
|» » RoleArn|body|object|false|none|
|» » SecretArn|body|object|false|none|
|» » Url|body|object|false|none|
|» entitlementStatus|body|string|false|An indication of whether you want to enable the entitlement to allow access, or disable it to stop streaming content to the subscriber’s flow temporarily. If you don’t specify the entitlementStatus field in your request, MediaConnect leaves the value unchanged.|
|» subscribers|body|[[__string](#schema__string)]|false|The AWS account IDs that you want to share your content with. The receiving accounts (subscribers) will be allowed to create their own flow using your content as the source.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» entitlementStatus|ENABLED|
|» entitlementStatus|DISABLED|

> Example responses

> 202 Response

```json
{
  "Entitlement": {
    "DataTransferSubscriberFeePercent": {},
    "Description": {},
    "Encryption": {
      "Algorithm": {},
      "ConstantInitializationVector": {},
      "DeviceId": {},
      "KeyType": {},
      "Region": {},
      "ResourceId": {},
      "RoleArn": {},
      "SecretArn": {},
      "Url": {}
    },
    "EntitlementArn": {},
    "EntitlementStatus": {},
    "Name": {},
    "Subscribers": {}
  },
  "FlowArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="updateflowentitlement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[UpdateFlowEntitlementResponse](#schemaupdateflowentitlementresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RevokeFlowEntitlement

<a id="opIdRevokeFlowEntitlement"></a>

> Code samples

```bash
curl https://mediaconnect.us-east-1.amazonaws.com/v1/flows/string/entitlements/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/flows/{flowArn}/entitlements/{entitlementArn}`

Revokes an entitlement from a flow. Once an entitlement is revoked, the content becomes unavailable to the subscriber and the associated output is removed.

<h3 id="revokeflowentitlement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|entitlementArn|path|string|true|The ARN of the entitlement that you want to revoke.|
|flowArn|path|string|true|The flow that you want to revoke an entitlement from.|
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
  "EntitlementArn": {},
  "FlowArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="revokeflowentitlement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[RevokeFlowEntitlementResponse](#schemarevokeflowentitlementresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartFlow

<a id="opIdStartFlow"></a>

> Code samples

```bash
curl https://mediaconnect.us-east-1.amazonaws.com/v1/flows/start/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /v1/flows/start/{flowArn}`

Starts a flow.

<h3 id="startflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|flowArn|path|string|true|The ARN of the flow that you want to start.|
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
  "FlowArn": {},
  "Status": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="startflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[StartFlowResponse](#schemastartflowresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopFlow

<a id="opIdStopFlow"></a>

> Code samples

```bash
curl https://mediaconnect.us-east-1.amazonaws.com/v1/flows/stop/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /v1/flows/stop/{flowArn}`

Stops a flow.

<h3 id="stopflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|flowArn|path|string|true|The ARN of the flow that you want to stop.|
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
  "FlowArn": {},
  "Status": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="stopflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[StopFlowResponse](#schemastopflowresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://mediaconnect.us-east-1.amazonaws.com/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{resourceArn}#tagKeys`

Deletes specified tags from a resource.

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The Amazon Resource Name (ARN) that identifies the AWS Elemental MediaConnect resource from which to delete tags.|
|tagKeys|query|[[__string](#schema__string)]|true|The keys of the tags to be removed.|
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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateBridgeState

<a id="opIdUpdateBridgeState"></a>

> Code samples

```bash
curl https://mediaconnect.us-east-1.amazonaws.com/v1/bridges/string/state \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "desiredState": "ACTIVE"
  }'
```

`PUT /v1/bridges/{bridgeArn}/state`

Updates the bridge state

> Body parameter

```json
{
  "desiredState": "ACTIVE"
}
```

<h3 id="updatebridgestate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bridgeArn|path|string|true|The ARN of the bridge that you want to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» desiredState|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» desiredState|ACTIVE|
|» desiredState|STANDBY|
|» desiredState|DELETED|

> Example responses

> 202 Response

```json
{
  "BridgeArn": {},
  "DesiredState": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="updatebridgestate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[UpdateBridgeStateResponse](#schemaupdatebridgestateresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AddBridgeOutputsResponse">AddBridgeOutputsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaddbridgeoutputsresponse"></a>
<a id="schema_AddBridgeOutputsResponse"></a>
<a id="tocSaddbridgeoutputsresponse"></a>
<a id="tocsaddbridgeoutputsresponse"></a>

```json
{
  "BridgeArn": {},
  "Outputs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BridgeArn|object|false|none|none|
|Outputs|object|false|none|none|

<h2 id="tocS_AddBridgeOutputRequest">AddBridgeOutputRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddbridgeoutputrequest"></a>
<a id="schema_AddBridgeOutputRequest"></a>
<a id="tocSaddbridgeoutputrequest"></a>
<a id="tocsaddbridgeoutputrequest"></a>

```json
{
  "NetworkOutput": {
    "IpAddress": {},
    "Name": {},
    "NetworkName": {},
    "Port": {},
    "Protocol": {},
    "Ttl": {}
  }
}
```

Add an output to a bridge.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NetworkOutput|object|false|none|none|

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

<h2 id="tocS_ForbiddenException">ForbiddenException</h2>
<!-- backwards compatibility -->
<a id="schemaforbiddenexception"></a>
<a id="schema_ForbiddenException"></a>
<a id="tocSforbiddenexception"></a>
<a id="tocsforbiddenexception"></a>

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

<h2 id="tocS_ServiceUnavailableException">ServiceUnavailableException</h2>
<!-- backwards compatibility -->
<a id="schemaserviceunavailableexception"></a>
<a id="schema_ServiceUnavailableException"></a>
<a id="tocSserviceunavailableexception"></a>
<a id="tocsserviceunavailableexception"></a>

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

<h2 id="tocS_AddBridgeSourcesResponse">AddBridgeSourcesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaddbridgesourcesresponse"></a>
<a id="schema_AddBridgeSourcesResponse"></a>
<a id="tocSaddbridgesourcesresponse"></a>
<a id="tocsaddbridgesourcesresponse"></a>

```json
{
  "BridgeArn": {},
  "Sources": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BridgeArn|object|false|none|none|
|Sources|object|false|none|none|

<h2 id="tocS_AddBridgeSourceRequest">AddBridgeSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddbridgesourcerequest"></a>
<a id="schema_AddBridgeSourceRequest"></a>
<a id="tocSaddbridgesourcerequest"></a>
<a id="tocsaddbridgesourcerequest"></a>

```json
{
  "FlowSource": {
    "FlowArn": {},
    "FlowVpcInterfaceAttachment": {
      "VpcInterfaceName": {}
    },
    "Name": {}
  },
  "NetworkSource": {
    "MulticastIp": {},
    "Name": {},
    "NetworkName": {},
    "Port": {},
    "Protocol": {}
  }
}
```

Add a source to an existing bridge.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FlowSource|object|false|none|none|
|NetworkSource|object|false|none|none|

<h2 id="tocS_AddFlowMediaStreamsResponse">AddFlowMediaStreamsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaddflowmediastreamsresponse"></a>
<a id="schema_AddFlowMediaStreamsResponse"></a>
<a id="tocSaddflowmediastreamsresponse"></a>
<a id="tocsaddflowmediastreamsresponse"></a>

```json
{
  "FlowArn": {},
  "MediaStreams": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FlowArn|object|false|none|none|
|MediaStreams|object|false|none|none|

<h2 id="tocS_AddMediaStreamRequest">AddMediaStreamRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddmediastreamrequest"></a>
<a id="schema_AddMediaStreamRequest"></a>
<a id="tocSaddmediastreamrequest"></a>
<a id="tocsaddmediastreamrequest"></a>

```json
{
  "Attributes": {
    "Fmtp": {
      "ChannelOrder": {},
      "Colorimetry": {},
      "ExactFramerate": {},
      "Par": {},
      "Range": {},
      "ScanMode": {},
      "Tcs": {}
    },
    "Lang": {}
  },
  "ClockRate": {},
  "Description": {},
  "MediaStreamId": {},
  "MediaStreamName": {},
  "MediaStreamType": {},
  "VideoFormat": {}
}
```

The media stream that you want to add to the flow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attributes|object|false|none|none|
|ClockRate|object|false|none|none|
|Description|object|false|none|none|
|MediaStreamId|object|true|none|none|
|MediaStreamName|object|true|none|none|
|MediaStreamType|object|true|none|none|
|VideoFormat|object|false|none|none|

<h2 id="tocS_AddFlowOutputsResponse">AddFlowOutputsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaddflowoutputsresponse"></a>
<a id="schema_AddFlowOutputsResponse"></a>
<a id="tocSaddflowoutputsresponse"></a>
<a id="tocsaddflowoutputsresponse"></a>

```json
{
  "FlowArn": {},
  "Outputs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FlowArn|object|false|none|none|
|Outputs|object|false|none|none|

<h2 id="tocS_AddOutputRequest">AddOutputRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddoutputrequest"></a>
<a id="schema_AddOutputRequest"></a>
<a id="tocSaddoutputrequest"></a>
<a id="tocsaddoutputrequest"></a>

```json
{
  "CidrAllowList": {},
  "Description": {},
  "Destination": {},
  "Encryption": {
    "Algorithm": {},
    "ConstantInitializationVector": {},
    "DeviceId": {},
    "KeyType": {},
    "Region": {},
    "ResourceId": {},
    "RoleArn": {},
    "SecretArn": {},
    "Url": {}
  },
  "MaxLatency": {},
  "MediaStreamOutputConfigurations": {},
  "MinLatency": {},
  "Name": {},
  "Port": {},
  "Protocol": {},
  "RemoteId": {},
  "SenderControlPort": {},
  "SmoothingLatency": {},
  "StreamId": {},
  "VpcInterfaceAttachment": {
    "VpcInterfaceName": {}
  }
}
```

The output that you want to add to this flow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CidrAllowList|object|false|none|none|
|Description|object|false|none|none|
|Destination|object|false|none|none|
|Encryption|object|false|none|none|
|MaxLatency|object|false|none|none|
|MediaStreamOutputConfigurations|object|false|none|none|
|MinLatency|object|false|none|none|
|Name|object|false|none|none|
|Port|object|false|none|none|
|Protocol|object|true|none|none|
|RemoteId|object|false|none|none|
|SenderControlPort|object|false|none|none|
|SmoothingLatency|object|false|none|none|
|StreamId|object|false|none|none|
|VpcInterfaceAttachment|object|false|none|none|

<h2 id="tocS_AddFlowOutputs420Exception">AddFlowOutputs420Exception</h2>
<!-- backwards compatibility -->
<a id="schemaaddflowoutputs420exception"></a>
<a id="schema_AddFlowOutputs420Exception"></a>
<a id="tocSaddflowoutputs420exception"></a>
<a id="tocsaddflowoutputs420exception"></a>

```json
null
```

<h2 id="tocS_AddFlowSourcesResponse">AddFlowSourcesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaddflowsourcesresponse"></a>
<a id="schema_AddFlowSourcesResponse"></a>
<a id="tocSaddflowsourcesresponse"></a>
<a id="tocsaddflowsourcesresponse"></a>

```json
{
  "FlowArn": {},
  "Sources": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FlowArn|object|false|none|none|
|Sources|object|false|none|none|

<h2 id="tocS_SetSourceRequest">SetSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetsourcerequest"></a>
<a id="schema_SetSourceRequest"></a>
<a id="tocSsetsourcerequest"></a>
<a id="tocssetsourcerequest"></a>

```json
{
  "Decryption": {
    "Algorithm": {},
    "ConstantInitializationVector": {},
    "DeviceId": {},
    "KeyType": {},
    "Region": {},
    "ResourceId": {},
    "RoleArn": {},
    "SecretArn": {},
    "Url": {}
  },
  "Description": {},
  "EntitlementArn": {},
  "IngestPort": {},
  "MaxBitrate": {},
  "MaxLatency": {},
  "MaxSyncBuffer": {},
  "MediaStreamSourceConfigurations": {},
  "MinLatency": {},
  "Name": {},
  "Protocol": {},
  "SenderControlPort": {},
  "SenderIpAddress": {},
  "SourceListenerAddress": {},
  "SourceListenerPort": {},
  "StreamId": {},
  "VpcInterfaceName": {},
  "WhitelistCidr": {},
  "GatewayBridgeSource": {
    "BridgeArn": {},
    "VpcInterfaceAttachment": {
      "VpcInterfaceName": {}
    }
  }
}
```

The settings for the source of the flow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Decryption|object|false|none|none|
|Description|object|false|none|none|
|EntitlementArn|object|false|none|none|
|IngestPort|object|false|none|none|
|MaxBitrate|object|false|none|none|
|MaxLatency|object|false|none|none|
|MaxSyncBuffer|object|false|none|none|
|MediaStreamSourceConfigurations|object|false|none|none|
|MinLatency|object|false|none|none|
|Name|object|false|none|none|
|Protocol|object|false|none|none|
|SenderControlPort|object|false|none|none|
|SenderIpAddress|object|false|none|none|
|SourceListenerAddress|object|false|none|none|
|SourceListenerPort|object|false|none|none|
|StreamId|object|false|none|none|
|VpcInterfaceName|object|false|none|none|
|WhitelistCidr|object|false|none|none|
|GatewayBridgeSource|object|false|none|none|

<h2 id="tocS_AddFlowVpcInterfacesResponse">AddFlowVpcInterfacesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaddflowvpcinterfacesresponse"></a>
<a id="schema_AddFlowVpcInterfacesResponse"></a>
<a id="tocSaddflowvpcinterfacesresponse"></a>
<a id="tocsaddflowvpcinterfacesresponse"></a>

```json
{
  "FlowArn": {},
  "VpcInterfaces": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FlowArn|object|false|none|none|
|VpcInterfaces|object|false|none|none|

<h2 id="tocS_VpcInterfaceRequest">VpcInterfaceRequest</h2>
<!-- backwards compatibility -->
<a id="schemavpcinterfacerequest"></a>
<a id="schema_VpcInterfaceRequest"></a>
<a id="tocSvpcinterfacerequest"></a>
<a id="tocsvpcinterfacerequest"></a>

```json
{
  "Name": {},
  "NetworkInterfaceType": {},
  "RoleArn": {},
  "SecurityGroupIds": {},
  "SubnetId": {}
}
```

Desired VPC Interface for a Flow

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|NetworkInterfaceType|object|false|none|none|
|RoleArn|object|true|none|none|
|SecurityGroupIds|object|true|none|none|
|SubnetId|object|true|none|none|

<h2 id="tocS_CreateBridgeResponse">CreateBridgeResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatebridgeresponse"></a>
<a id="schema_CreateBridgeResponse"></a>
<a id="tocScreatebridgeresponse"></a>
<a id="tocscreatebridgeresponse"></a>

```json
{
  "Bridge": {
    "BridgeArn": {},
    "BridgeMessages": {},
    "BridgeState": {},
    "EgressGatewayBridge": {
      "InstanceId": {},
      "MaxBitrate": {}
    },
    "IngressGatewayBridge": {
      "InstanceId": {},
      "MaxBitrate": {},
      "MaxOutputs": {}
    },
    "Name": {},
    "Outputs": {},
    "PlacementArn": {},
    "SourceFailoverConfig": {
      "FailoverMode": {},
      "RecoveryWindow": {},
      "SourcePriority": {
        "PrimarySource": {}
      },
      "State": {}
    },
    "Sources": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bridge|object|false|none|none|

<h2 id="tocS___integer">__integer</h2>
<!-- backwards compatibility -->
<a id="schema__integer"></a>
<a id="schema___integer"></a>
<a id="tocS__integer"></a>
<a id="tocs__integer"></a>

```json
0
```

<h2 id="tocS_FailoverMode">FailoverMode</h2>
<!-- backwards compatibility -->
<a id="schemafailovermode"></a>
<a id="schema_FailoverMode"></a>
<a id="tocSfailovermode"></a>
<a id="tocsfailovermode"></a>

```json
"MERGE"
```

<h2 id="tocS_SourcePriority">SourcePriority</h2>
<!-- backwards compatibility -->
<a id="schemasourcepriority"></a>
<a id="schema_SourcePriority"></a>
<a id="tocSsourcepriority"></a>
<a id="tocssourcepriority"></a>

```json
{
  "PrimarySource": {}
}
```

The priority you want to assign to a source. You can have a primary stream and a backup stream or two equally prioritized streams.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PrimarySource|object|false|none|none|

<h2 id="tocS_State">State</h2>
<!-- backwards compatibility -->
<a id="schemastate"></a>
<a id="schema_State"></a>
<a id="tocSstate"></a>
<a id="tocsstate"></a>

```json
"ENABLED"
```

<h2 id="tocS_CreateBridge420Exception">CreateBridge420Exception</h2>
<!-- backwards compatibility -->
<a id="schemacreatebridge420exception"></a>
<a id="schema_CreateBridge420Exception"></a>
<a id="tocScreatebridge420exception"></a>
<a id="tocscreatebridge420exception"></a>

```json
null
```

<h2 id="tocS_CreateFlowResponse">CreateFlowResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateflowresponse"></a>
<a id="schema_CreateFlowResponse"></a>
<a id="tocScreateflowresponse"></a>
<a id="tocscreateflowresponse"></a>

```json
{
  "Flow": {
    "AvailabilityZone": {},
    "Description": {},
    "EgressIp": {},
    "Entitlements": {},
    "FlowArn": {},
    "MediaStreams": {},
    "Name": {},
    "Outputs": {},
    "Source": {
      "DataTransferSubscriberFeePercent": {},
      "Decryption": {
        "Algorithm": {},
        "ConstantInitializationVector": {},
        "DeviceId": {},
        "KeyType": {},
        "Region": {},
        "ResourceId": {},
        "RoleArn": {},
        "SecretArn": {},
        "Url": {}
      },
      "Description": {},
      "EntitlementArn": {},
      "IngestIp": {},
      "IngestPort": {},
      "MediaStreamSourceConfigurations": {},
      "Name": {},
      "SenderControlPort": {},
      "SenderIpAddress": {},
      "SourceArn": {},
      "Transport": {
        "CidrAllowList": {},
        "MaxBitrate": {},
        "MaxLatency": {},
        "MaxSyncBuffer": {},
        "MinLatency": {},
        "Protocol": {},
        "RemoteId": {},
        "SenderControlPort": {},
        "SenderIpAddress": {},
        "SmoothingLatency": {},
        "SourceListenerAddress": {},
        "SourceListenerPort": {},
        "StreamId": {}
      },
      "VpcInterfaceName": {},
      "WhitelistCidr": {},
      "GatewayBridgeSource": {
        "BridgeArn": {},
        "VpcInterfaceAttachment": {
          "VpcInterfaceName": {}
        }
      }
    },
    "SourceFailoverConfig": {
      "FailoverMode": {},
      "RecoveryWindow": {},
      "SourcePriority": {
        "PrimarySource": {}
      },
      "State": {}
    },
    "Sources": {},
    "Status": {},
    "VpcInterfaces": {},
    "Maintenance": {
      "MaintenanceDay": {},
      "MaintenanceDeadline": {},
      "MaintenanceScheduledDate": {},
      "MaintenanceStartHour": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Flow|object|false|none|none|

<h2 id="tocS_GrantEntitlementRequest">GrantEntitlementRequest</h2>
<!-- backwards compatibility -->
<a id="schemagrantentitlementrequest"></a>
<a id="schema_GrantEntitlementRequest"></a>
<a id="tocSgrantentitlementrequest"></a>
<a id="tocsgrantentitlementrequest"></a>

```json
{
  "DataTransferSubscriberFeePercent": {},
  "Description": {},
  "Encryption": {
    "Algorithm": {},
    "ConstantInitializationVector": {},
    "DeviceId": {},
    "KeyType": {},
    "Region": {},
    "ResourceId": {},
    "RoleArn": {},
    "SecretArn": {},
    "Url": {}
  },
  "EntitlementStatus": {},
  "Name": {},
  "Subscribers": {}
}
```

The entitlements that you want to grant on a flow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataTransferSubscriberFeePercent|object|false|none|none|
|Description|object|false|none|none|
|Encryption|object|false|none|none|
|EntitlementStatus|object|false|none|none|
|Name|object|false|none|none|
|Subscribers|object|true|none|none|

<h2 id="tocS_Encryption">Encryption</h2>
<!-- backwards compatibility -->
<a id="schemaencryption"></a>
<a id="schema_Encryption"></a>
<a id="tocSencryption"></a>
<a id="tocsencryption"></a>

```json
{
  "Algorithm": {},
  "ConstantInitializationVector": {},
  "DeviceId": {},
  "KeyType": {},
  "Region": {},
  "ResourceId": {},
  "RoleArn": {},
  "SecretArn": {},
  "Url": {}
}
```

Information about the encryption of the flow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Algorithm|object|false|none|none|
|ConstantInitializationVector|object|false|none|none|
|DeviceId|object|false|none|none|
|KeyType|object|false|none|none|
|Region|object|false|none|none|
|ResourceId|object|false|none|none|
|RoleArn|object|true|none|none|
|SecretArn|object|false|none|none|
|Url|object|false|none|none|

<h2 id="tocS___string">__string</h2>
<!-- backwards compatibility -->
<a id="schema__string"></a>
<a id="schema___string"></a>
<a id="tocS__string"></a>
<a id="tocs__string"></a>

```json
"string"
```

<h2 id="tocS___listOfMediaStreamSourceConfigurationRequest">__listOfMediaStreamSourceConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schema__listofmediastreamsourceconfigurationrequest"></a>
<a id="schema___listOfMediaStreamSourceConfigurationRequest"></a>
<a id="tocS__listofmediastreamsourceconfigurationrequest"></a>
<a id="tocs__listofmediastreamsourceconfigurationrequest"></a>

```json
[
  {
    "EncodingName": {},
    "InputConfigurations": {},
    "MediaStreamName": {}
  }
]
```

<h2 id="tocS_Protocol">Protocol</h2>
<!-- backwards compatibility -->
<a id="schemaprotocol"></a>
<a id="schema_Protocol"></a>
<a id="tocSprotocol"></a>
<a id="tocsprotocol"></a>

```json
"zixi-push"
```

<h2 id="tocS_SetGatewayBridgeSourceRequest">SetGatewayBridgeSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetgatewaybridgesourcerequest"></a>
<a id="schema_SetGatewayBridgeSourceRequest"></a>
<a id="tocSsetgatewaybridgesourcerequest"></a>
<a id="tocssetgatewaybridgesourcerequest"></a>

```json
{
  "BridgeArn": {},
  "VpcInterfaceAttachment": {
    "VpcInterfaceName": {}
  }
}
```

The source configuration for cloud flows receiving a stream from a bridge.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BridgeArn|object|true|none|none|
|VpcInterfaceAttachment|object|false|none|none|

<h2 id="tocS_MaintenanceDay">MaintenanceDay</h2>
<!-- backwards compatibility -->
<a id="schemamaintenanceday"></a>
<a id="schema_MaintenanceDay"></a>
<a id="tocSmaintenanceday"></a>
<a id="tocsmaintenanceday"></a>

```json
"Monday"
```

<h2 id="tocS_CreateFlow420Exception">CreateFlow420Exception</h2>
<!-- backwards compatibility -->
<a id="schemacreateflow420exception"></a>
<a id="schema_CreateFlow420Exception"></a>
<a id="tocScreateflow420exception"></a>
<a id="tocscreateflow420exception"></a>

```json
null
```

<h2 id="tocS_CreateGatewayResponse">CreateGatewayResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreategatewayresponse"></a>
<a id="schema_CreateGatewayResponse"></a>
<a id="tocScreategatewayresponse"></a>
<a id="tocscreategatewayresponse"></a>

```json
{
  "Gateway": {
    "EgressCidrBlocks": {},
    "GatewayArn": {},
    "GatewayMessages": {},
    "GatewayState": {},
    "Name": {},
    "Networks": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Gateway|object|false|none|none|

<h2 id="tocS_GatewayNetwork">GatewayNetwork</h2>
<!-- backwards compatibility -->
<a id="schemagatewaynetwork"></a>
<a id="schema_GatewayNetwork"></a>
<a id="tocSgatewaynetwork"></a>
<a id="tocsgatewaynetwork"></a>

```json
{
  "CidrBlock": {},
  "Name": {}
}
```

The network settings for a gateway.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CidrBlock|object|true|none|none|
|Name|object|true|none|none|

<h2 id="tocS_CreateGateway420Exception">CreateGateway420Exception</h2>
<!-- backwards compatibility -->
<a id="schemacreategateway420exception"></a>
<a id="schema_CreateGateway420Exception"></a>
<a id="tocScreategateway420exception"></a>
<a id="tocscreategateway420exception"></a>

```json
null
```

<h2 id="tocS_DeleteBridgeResponse">DeleteBridgeResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletebridgeresponse"></a>
<a id="schema_DeleteBridgeResponse"></a>
<a id="tocSdeletebridgeresponse"></a>
<a id="tocsdeletebridgeresponse"></a>

```json
{
  "BridgeArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BridgeArn|object|false|none|none|

<h2 id="tocS_DeleteFlowResponse">DeleteFlowResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteflowresponse"></a>
<a id="schema_DeleteFlowResponse"></a>
<a id="tocSdeleteflowresponse"></a>
<a id="tocsdeleteflowresponse"></a>

```json
{
  "FlowArn": {},
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FlowArn|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_DeleteGatewayResponse">DeleteGatewayResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletegatewayresponse"></a>
<a id="schema_DeleteGatewayResponse"></a>
<a id="tocSdeletegatewayresponse"></a>
<a id="tocsdeletegatewayresponse"></a>

```json
{
  "GatewayArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayArn|object|false|none|none|

<h2 id="tocS_DeregisterGatewayInstanceResponse">DeregisterGatewayInstanceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaderegistergatewayinstanceresponse"></a>
<a id="schema_DeregisterGatewayInstanceResponse"></a>
<a id="tocSderegistergatewayinstanceresponse"></a>
<a id="tocsderegistergatewayinstanceresponse"></a>

```json
{
  "GatewayInstanceArn": {},
  "InstanceState": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayInstanceArn|object|false|none|none|
|InstanceState|object|false|none|none|

<h2 id="tocS_DescribeBridgeResponse">DescribeBridgeResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribebridgeresponse"></a>
<a id="schema_DescribeBridgeResponse"></a>
<a id="tocSdescribebridgeresponse"></a>
<a id="tocsdescribebridgeresponse"></a>

```json
{
  "Bridge": {
    "BridgeArn": {},
    "BridgeMessages": {},
    "BridgeState": {},
    "EgressGatewayBridge": {
      "InstanceId": {},
      "MaxBitrate": {}
    },
    "IngressGatewayBridge": {
      "InstanceId": {},
      "MaxBitrate": {},
      "MaxOutputs": {}
    },
    "Name": {},
    "Outputs": {},
    "PlacementArn": {},
    "SourceFailoverConfig": {
      "FailoverMode": {},
      "RecoveryWindow": {},
      "SourcePriority": {
        "PrimarySource": {}
      },
      "State": {}
    },
    "Sources": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bridge|object|false|none|none|

<h2 id="tocS_DescribeFlowResponse">DescribeFlowResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeflowresponse"></a>
<a id="schema_DescribeFlowResponse"></a>
<a id="tocSdescribeflowresponse"></a>
<a id="tocsdescribeflowresponse"></a>

```json
{
  "Flow": {
    "AvailabilityZone": {},
    "Description": {},
    "EgressIp": {},
    "Entitlements": {},
    "FlowArn": {},
    "MediaStreams": {},
    "Name": {},
    "Outputs": {},
    "Source": {
      "DataTransferSubscriberFeePercent": {},
      "Decryption": {
        "Algorithm": {},
        "ConstantInitializationVector": {},
        "DeviceId": {},
        "KeyType": {},
        "Region": {},
        "ResourceId": {},
        "RoleArn": {},
        "SecretArn": {},
        "Url": {}
      },
      "Description": {},
      "EntitlementArn": {},
      "IngestIp": {},
      "IngestPort": {},
      "MediaStreamSourceConfigurations": {},
      "Name": {},
      "SenderControlPort": {},
      "SenderIpAddress": {},
      "SourceArn": {},
      "Transport": {
        "CidrAllowList": {},
        "MaxBitrate": {},
        "MaxLatency": {},
        "MaxSyncBuffer": {},
        "MinLatency": {},
        "Protocol": {},
        "RemoteId": {},
        "SenderControlPort": {},
        "SenderIpAddress": {},
        "SmoothingLatency": {},
        "SourceListenerAddress": {},
        "SourceListenerPort": {},
        "StreamId": {}
      },
      "VpcInterfaceName": {},
      "WhitelistCidr": {},
      "GatewayBridgeSource": {
        "BridgeArn": {},
        "VpcInterfaceAttachment": {
          "VpcInterfaceName": {}
        }
      }
    },
    "SourceFailoverConfig": {
      "FailoverMode": {},
      "RecoveryWindow": {},
      "SourcePriority": {
        "PrimarySource": {}
      },
      "State": {}
    },
    "Sources": {},
    "Status": {},
    "VpcInterfaces": {},
    "Maintenance": {
      "MaintenanceDay": {},
      "MaintenanceDeadline": {},
      "MaintenanceScheduledDate": {},
      "MaintenanceStartHour": {}
    }
  },
  "Messages": {
    "Errors": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Flow|object|false|none|none|
|Messages|object|false|none|none|

<h2 id="tocS_DescribeGatewayResponse">DescribeGatewayResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribegatewayresponse"></a>
<a id="schema_DescribeGatewayResponse"></a>
<a id="tocSdescribegatewayresponse"></a>
<a id="tocsdescribegatewayresponse"></a>

```json
{
  "Gateway": {
    "EgressCidrBlocks": {},
    "GatewayArn": {},
    "GatewayMessages": {},
    "GatewayState": {},
    "Name": {},
    "Networks": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Gateway|object|false|none|none|

<h2 id="tocS_DescribeGatewayInstanceResponse">DescribeGatewayInstanceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribegatewayinstanceresponse"></a>
<a id="schema_DescribeGatewayInstanceResponse"></a>
<a id="tocSdescribegatewayinstanceresponse"></a>
<a id="tocsdescribegatewayinstanceresponse"></a>

```json
{
  "GatewayInstance": {
    "BridgePlacement": {},
    "ConnectionStatus": {},
    "GatewayArn": {},
    "GatewayInstanceArn": {},
    "InstanceId": {},
    "InstanceMessages": {},
    "InstanceState": {},
    "RunningBridgeCount": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayInstance|object|false|none|none|

<h2 id="tocS_DescribeOfferingResponse">DescribeOfferingResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeofferingresponse"></a>
<a id="schema_DescribeOfferingResponse"></a>
<a id="tocSdescribeofferingresponse"></a>
<a id="tocsdescribeofferingresponse"></a>

```json
{
  "Offering": {
    "CurrencyCode": {},
    "Duration": {},
    "DurationUnits": {},
    "OfferingArn": {},
    "OfferingDescription": {},
    "PricePerUnit": {},
    "PriceUnits": {},
    "ResourceSpecification": {
      "ReservedBitrate": {},
      "ResourceType": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Offering|object|false|none|none|

<h2 id="tocS_DescribeReservationResponse">DescribeReservationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribereservationresponse"></a>
<a id="schema_DescribeReservationResponse"></a>
<a id="tocSdescribereservationresponse"></a>
<a id="tocsdescribereservationresponse"></a>

```json
{
  "Reservation": {
    "CurrencyCode": {},
    "Duration": {},
    "DurationUnits": {},
    "End": {},
    "OfferingArn": {},
    "OfferingDescription": {},
    "PricePerUnit": {},
    "PriceUnits": {},
    "ReservationArn": {},
    "ReservationName": {},
    "ReservationState": {},
    "ResourceSpecification": {
      "ReservedBitrate": {},
      "ResourceType": {}
    },
    "Start": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Reservation|object|false|none|none|

<h2 id="tocS_GrantFlowEntitlementsResponse">GrantFlowEntitlementsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagrantflowentitlementsresponse"></a>
<a id="schema_GrantFlowEntitlementsResponse"></a>
<a id="tocSgrantflowentitlementsresponse"></a>
<a id="tocsgrantflowentitlementsresponse"></a>

```json
{
  "Entitlements": {},
  "FlowArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entitlements|object|false|none|none|
|FlowArn|object|false|none|none|

<h2 id="tocS_GrantFlowEntitlements420Exception">GrantFlowEntitlements420Exception</h2>
<!-- backwards compatibility -->
<a id="schemagrantflowentitlements420exception"></a>
<a id="schema_GrantFlowEntitlements420Exception"></a>
<a id="tocSgrantflowentitlements420exception"></a>
<a id="tocsgrantflowentitlements420exception"></a>

```json
null
```

<h2 id="tocS_ListBridgesResponse">ListBridgesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistbridgesresponse"></a>
<a id="schema_ListBridgesResponse"></a>
<a id="tocSlistbridgesresponse"></a>
<a id="tocslistbridgesresponse"></a>

```json
{
  "Bridges": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bridges|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListEntitlementsResponse">ListEntitlementsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistentitlementsresponse"></a>
<a id="schema_ListEntitlementsResponse"></a>
<a id="tocSlistentitlementsresponse"></a>
<a id="tocslistentitlementsresponse"></a>

```json
{
  "Entitlements": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entitlements|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListFlowsResponse">ListFlowsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistflowsresponse"></a>
<a id="schema_ListFlowsResponse"></a>
<a id="tocSlistflowsresponse"></a>
<a id="tocslistflowsresponse"></a>

```json
{
  "Flows": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Flows|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListGatewayInstancesResponse">ListGatewayInstancesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistgatewayinstancesresponse"></a>
<a id="schema_ListGatewayInstancesResponse"></a>
<a id="tocSlistgatewayinstancesresponse"></a>
<a id="tocslistgatewayinstancesresponse"></a>

```json
{
  "Instances": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Instances|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListGatewaysResponse">ListGatewaysResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistgatewaysresponse"></a>
<a id="schema_ListGatewaysResponse"></a>
<a id="tocSlistgatewaysresponse"></a>
<a id="tocslistgatewaysresponse"></a>

```json
{
  "Gateways": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Gateways|object|false|none|none|
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
    "CurrencyCode": {},
    "Duration": {},
    "DurationUnits": {},
    "End": {},
    "OfferingArn": {},
    "OfferingDescription": {},
    "PricePerUnit": {},
    "PriceUnits": {},
    "ReservationArn": {},
    "ReservationName": {},
    "ReservationState": {},
    "ResourceSpecification": {
      "ReservedBitrate": {},
      "ResourceType": {}
    },
    "Start": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Reservation|object|false|none|none|

<h2 id="tocS_RemoveBridgeOutputResponse">RemoveBridgeOutputResponse</h2>
<!-- backwards compatibility -->
<a id="schemaremovebridgeoutputresponse"></a>
<a id="schema_RemoveBridgeOutputResponse"></a>
<a id="tocSremovebridgeoutputresponse"></a>
<a id="tocsremovebridgeoutputresponse"></a>

```json
{
  "BridgeArn": {},
  "OutputName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BridgeArn|object|false|none|none|
|OutputName|object|false|none|none|

<h2 id="tocS_RemoveBridgeSourceResponse">RemoveBridgeSourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaremovebridgesourceresponse"></a>
<a id="schema_RemoveBridgeSourceResponse"></a>
<a id="tocSremovebridgesourceresponse"></a>
<a id="tocsremovebridgesourceresponse"></a>

```json
{
  "BridgeArn": {},
  "SourceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BridgeArn|object|false|none|none|
|SourceName|object|false|none|none|

<h2 id="tocS_RemoveFlowMediaStreamResponse">RemoveFlowMediaStreamResponse</h2>
<!-- backwards compatibility -->
<a id="schemaremoveflowmediastreamresponse"></a>
<a id="schema_RemoveFlowMediaStreamResponse"></a>
<a id="tocSremoveflowmediastreamresponse"></a>
<a id="tocsremoveflowmediastreamresponse"></a>

```json
{
  "FlowArn": {},
  "MediaStreamName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FlowArn|object|false|none|none|
|MediaStreamName|object|false|none|none|

<h2 id="tocS_RemoveFlowOutputResponse">RemoveFlowOutputResponse</h2>
<!-- backwards compatibility -->
<a id="schemaremoveflowoutputresponse"></a>
<a id="schema_RemoveFlowOutputResponse"></a>
<a id="tocSremoveflowoutputresponse"></a>
<a id="tocsremoveflowoutputresponse"></a>

```json
{
  "FlowArn": {},
  "OutputArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FlowArn|object|false|none|none|
|OutputArn|object|false|none|none|

<h2 id="tocS_RemoveFlowSourceResponse">RemoveFlowSourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaremoveflowsourceresponse"></a>
<a id="schema_RemoveFlowSourceResponse"></a>
<a id="tocSremoveflowsourceresponse"></a>
<a id="tocsremoveflowsourceresponse"></a>

```json
{
  "FlowArn": {},
  "SourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FlowArn|object|false|none|none|
|SourceArn|object|false|none|none|

<h2 id="tocS_RemoveFlowVpcInterfaceResponse">RemoveFlowVpcInterfaceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaremoveflowvpcinterfaceresponse"></a>
<a id="schema_RemoveFlowVpcInterfaceResponse"></a>
<a id="tocSremoveflowvpcinterfaceresponse"></a>
<a id="tocsremoveflowvpcinterfaceresponse"></a>

```json
{
  "FlowArn": {},
  "NonDeletedNetworkInterfaceIds": {},
  "VpcInterfaceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FlowArn|object|false|none|none|
|NonDeletedNetworkInterfaceIds|object|false|none|none|
|VpcInterfaceName|object|false|none|none|

<h2 id="tocS_RevokeFlowEntitlementResponse">RevokeFlowEntitlementResponse</h2>
<!-- backwards compatibility -->
<a id="schemarevokeflowentitlementresponse"></a>
<a id="schema_RevokeFlowEntitlementResponse"></a>
<a id="tocSrevokeflowentitlementresponse"></a>
<a id="tocsrevokeflowentitlementresponse"></a>

```json
{
  "EntitlementArn": {},
  "FlowArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EntitlementArn|object|false|none|none|
|FlowArn|object|false|none|none|

<h2 id="tocS_StartFlowResponse">StartFlowResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartflowresponse"></a>
<a id="schema_StartFlowResponse"></a>
<a id="tocSstartflowresponse"></a>
<a id="tocsstartflowresponse"></a>

```json
{
  "FlowArn": {},
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FlowArn|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_StopFlowResponse">StopFlowResponse</h2>
<!-- backwards compatibility -->
<a id="schemastopflowresponse"></a>
<a id="schema_StopFlowResponse"></a>
<a id="tocSstopflowresponse"></a>
<a id="tocsstopflowresponse"></a>

```json
{
  "FlowArn": {},
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FlowArn|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_UpdateBridgeResponse">UpdateBridgeResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebridgeresponse"></a>
<a id="schema_UpdateBridgeResponse"></a>
<a id="tocSupdatebridgeresponse"></a>
<a id="tocsupdatebridgeresponse"></a>

```json
{
  "Bridge": {
    "BridgeArn": {},
    "BridgeMessages": {},
    "BridgeState": {},
    "EgressGatewayBridge": {
      "InstanceId": {},
      "MaxBitrate": {}
    },
    "IngressGatewayBridge": {
      "InstanceId": {},
      "MaxBitrate": {},
      "MaxOutputs": {}
    },
    "Name": {},
    "Outputs": {},
    "PlacementArn": {},
    "SourceFailoverConfig": {
      "FailoverMode": {},
      "RecoveryWindow": {},
      "SourcePriority": {
        "PrimarySource": {}
      },
      "State": {}
    },
    "Sources": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bridge|object|false|none|none|

<h2 id="tocS_UpdateBridgeOutputResponse">UpdateBridgeOutputResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebridgeoutputresponse"></a>
<a id="schema_UpdateBridgeOutputResponse"></a>
<a id="tocSupdatebridgeoutputresponse"></a>
<a id="tocsupdatebridgeoutputresponse"></a>

```json
{
  "BridgeArn": {},
  "Output": {
    "FlowOutput": {
      "FlowArn": {},
      "FlowSourceArn": {},
      "Name": {}
    },
    "NetworkOutput": {
      "IpAddress": {},
      "Name": {},
      "NetworkName": {},
      "Port": {},
      "Protocol": {},
      "Ttl": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BridgeArn|object|false|none|none|
|Output|object|false|none|none|

<h2 id="tocS_UpdateBridgeSourceResponse">UpdateBridgeSourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebridgesourceresponse"></a>
<a id="schema_UpdateBridgeSourceResponse"></a>
<a id="tocSupdatebridgesourceresponse"></a>
<a id="tocsupdatebridgesourceresponse"></a>

```json
{
  "BridgeArn": {},
  "Source": {
    "FlowSource": {
      "FlowArn": {},
      "FlowVpcInterfaceAttachment": {
        "VpcInterfaceName": {}
      },
      "Name": {},
      "OutputArn": {}
    },
    "NetworkSource": {
      "MulticastIp": {},
      "Name": {},
      "NetworkName": {},
      "Port": {},
      "Protocol": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BridgeArn|object|false|none|none|
|Source|object|false|none|none|

<h2 id="tocS_VpcInterfaceAttachment">VpcInterfaceAttachment</h2>
<!-- backwards compatibility -->
<a id="schemavpcinterfaceattachment"></a>
<a id="schema_VpcInterfaceAttachment"></a>
<a id="tocSvpcinterfaceattachment"></a>
<a id="tocsvpcinterfaceattachment"></a>

```json
{
  "VpcInterfaceName": {}
}
```

The settings for attaching a VPC interface to an resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcInterfaceName|object|false|none|none|

<h2 id="tocS_UpdateBridgeStateResponse">UpdateBridgeStateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebridgestateresponse"></a>
<a id="schema_UpdateBridgeStateResponse"></a>
<a id="tocSupdatebridgestateresponse"></a>
<a id="tocsupdatebridgestateresponse"></a>

```json
{
  "BridgeArn": {},
  "DesiredState": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BridgeArn|object|false|none|none|
|DesiredState|object|false|none|none|

<h2 id="tocS_UpdateFlowResponse">UpdateFlowResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateflowresponse"></a>
<a id="schema_UpdateFlowResponse"></a>
<a id="tocSupdateflowresponse"></a>
<a id="tocsupdateflowresponse"></a>

```json
{
  "Flow": {
    "AvailabilityZone": {},
    "Description": {},
    "EgressIp": {},
    "Entitlements": {},
    "FlowArn": {},
    "MediaStreams": {},
    "Name": {},
    "Outputs": {},
    "Source": {
      "DataTransferSubscriberFeePercent": {},
      "Decryption": {
        "Algorithm": {},
        "ConstantInitializationVector": {},
        "DeviceId": {},
        "KeyType": {},
        "Region": {},
        "ResourceId": {},
        "RoleArn": {},
        "SecretArn": {},
        "Url": {}
      },
      "Description": {},
      "EntitlementArn": {},
      "IngestIp": {},
      "IngestPort": {},
      "MediaStreamSourceConfigurations": {},
      "Name": {},
      "SenderControlPort": {},
      "SenderIpAddress": {},
      "SourceArn": {},
      "Transport": {
        "CidrAllowList": {},
        "MaxBitrate": {},
        "MaxLatency": {},
        "MaxSyncBuffer": {},
        "MinLatency": {},
        "Protocol": {},
        "RemoteId": {},
        "SenderControlPort": {},
        "SenderIpAddress": {},
        "SmoothingLatency": {},
        "SourceListenerAddress": {},
        "SourceListenerPort": {},
        "StreamId": {}
      },
      "VpcInterfaceName": {},
      "WhitelistCidr": {},
      "GatewayBridgeSource": {
        "BridgeArn": {},
        "VpcInterfaceAttachment": {
          "VpcInterfaceName": {}
        }
      }
    },
    "SourceFailoverConfig": {
      "FailoverMode": {},
      "RecoveryWindow": {},
      "SourcePriority": {
        "PrimarySource": {}
      },
      "State": {}
    },
    "Sources": {},
    "Status": {},
    "VpcInterfaces": {},
    "Maintenance": {
      "MaintenanceDay": {},
      "MaintenanceDeadline": {},
      "MaintenanceScheduledDate": {},
      "MaintenanceStartHour": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Flow|object|false|none|none|

<h2 id="tocS_UpdateFlowEntitlementResponse">UpdateFlowEntitlementResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateflowentitlementresponse"></a>
<a id="schema_UpdateFlowEntitlementResponse"></a>
<a id="tocSupdateflowentitlementresponse"></a>
<a id="tocsupdateflowentitlementresponse"></a>

```json
{
  "Entitlement": {
    "DataTransferSubscriberFeePercent": {},
    "Description": {},
    "Encryption": {
      "Algorithm": {},
      "ConstantInitializationVector": {},
      "DeviceId": {},
      "KeyType": {},
      "Region": {},
      "ResourceId": {},
      "RoleArn": {},
      "SecretArn": {},
      "Url": {}
    },
    "EntitlementArn": {},
    "EntitlementStatus": {},
    "Name": {},
    "Subscribers": {}
  },
  "FlowArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entitlement|object|false|none|none|
|FlowArn|object|false|none|none|

<h2 id="tocS_Algorithm">Algorithm</h2>
<!-- backwards compatibility -->
<a id="schemaalgorithm"></a>
<a id="schema_Algorithm"></a>
<a id="tocSalgorithm"></a>
<a id="tocsalgorithm"></a>

```json
"aes128"
```

<h2 id="tocS_KeyType">KeyType</h2>
<!-- backwards compatibility -->
<a id="schemakeytype"></a>
<a id="schema_KeyType"></a>
<a id="tocSkeytype"></a>
<a id="tocskeytype"></a>

```json
"speke"
```

<h2 id="tocS_UpdateFlowMediaStreamResponse">UpdateFlowMediaStreamResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateflowmediastreamresponse"></a>
<a id="schema_UpdateFlowMediaStreamResponse"></a>
<a id="tocSupdateflowmediastreamresponse"></a>
<a id="tocsupdateflowmediastreamresponse"></a>

```json
{
  "FlowArn": {},
  "MediaStream": {
    "Attributes": {
      "Fmtp": {
        "ChannelOrder": {},
        "Colorimetry": {},
        "ExactFramerate": {},
        "Par": {},
        "Range": {},
        "ScanMode": {},
        "Tcs": {}
      },
      "Lang": {}
    },
    "ClockRate": {},
    "Description": {},
    "Fmt": {},
    "MediaStreamId": {},
    "MediaStreamName": {},
    "MediaStreamType": {},
    "VideoFormat": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FlowArn|object|false|none|none|
|MediaStream|object|false|none|none|

<h2 id="tocS_FmtpRequest">FmtpRequest</h2>
<!-- backwards compatibility -->
<a id="schemafmtprequest"></a>
<a id="schema_FmtpRequest"></a>
<a id="tocSfmtprequest"></a>
<a id="tocsfmtprequest"></a>

```json
{
  "ChannelOrder": {},
  "Colorimetry": {},
  "ExactFramerate": {},
  "Par": {},
  "Range": {},
  "ScanMode": {},
  "Tcs": {}
}
```

The settings that you want to use to define the media stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelOrder|object|false|none|none|
|Colorimetry|object|false|none|none|
|ExactFramerate|object|false|none|none|
|Par|object|false|none|none|
|Range|object|false|none|none|
|ScanMode|object|false|none|none|
|Tcs|object|false|none|none|

<h2 id="tocS_UpdateFlowOutputResponse">UpdateFlowOutputResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateflowoutputresponse"></a>
<a id="schema_UpdateFlowOutputResponse"></a>
<a id="tocSupdateflowoutputresponse"></a>
<a id="tocsupdateflowoutputresponse"></a>

```json
{
  "FlowArn": {},
  "Output": {
    "DataTransferSubscriberFeePercent": {},
    "Description": {},
    "Destination": {},
    "Encryption": {
      "Algorithm": {},
      "ConstantInitializationVector": {},
      "DeviceId": {},
      "KeyType": {},
      "Region": {},
      "ResourceId": {},
      "RoleArn": {},
      "SecretArn": {},
      "Url": {}
    },
    "EntitlementArn": {},
    "ListenerAddress": {},
    "MediaLiveInputArn": {},
    "MediaStreamOutputConfigurations": {},
    "Name": {},
    "OutputArn": {},
    "Port": {},
    "Transport": {
      "CidrAllowList": {},
      "MaxBitrate": {},
      "MaxLatency": {},
      "MaxSyncBuffer": {},
      "MinLatency": {},
      "Protocol": {},
      "RemoteId": {},
      "SenderControlPort": {},
      "SenderIpAddress": {},
      "SmoothingLatency": {},
      "SourceListenerAddress": {},
      "SourceListenerPort": {},
      "StreamId": {}
    },
    "VpcInterfaceAttachment": {
      "VpcInterfaceName": {}
    },
    "BridgeArn": {},
    "BridgePorts": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FlowArn|object|false|none|none|
|Output|object|false|none|none|

<h2 id="tocS_MediaStreamOutputConfigurationRequest">MediaStreamOutputConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemamediastreamoutputconfigurationrequest"></a>
<a id="schema_MediaStreamOutputConfigurationRequest"></a>
<a id="tocSmediastreamoutputconfigurationrequest"></a>
<a id="tocsmediastreamoutputconfigurationrequest"></a>

```json
{
  "DestinationConfigurations": {},
  "EncodingName": {},
  "EncodingParameters": {
    "CompressionFactor": {},
    "EncoderProfile": {}
  },
  "MediaStreamName": {}
}
```

The media stream that you want to associate with the output, and the parameters for that association.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DestinationConfigurations|object|false|none|none|
|EncodingName|object|true|none|none|
|EncodingParameters|object|false|none|none|
|MediaStreamName|object|true|none|none|

<h2 id="tocS_UpdateFlowSourceResponse">UpdateFlowSourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateflowsourceresponse"></a>
<a id="schema_UpdateFlowSourceResponse"></a>
<a id="tocSupdateflowsourceresponse"></a>
<a id="tocsupdateflowsourceresponse"></a>

```json
{
  "FlowArn": {},
  "Source": {
    "DataTransferSubscriberFeePercent": {},
    "Decryption": {
      "Algorithm": {},
      "ConstantInitializationVector": {},
      "DeviceId": {},
      "KeyType": {},
      "Region": {},
      "ResourceId": {},
      "RoleArn": {},
      "SecretArn": {},
      "Url": {}
    },
    "Description": {},
    "EntitlementArn": {},
    "IngestIp": {},
    "IngestPort": {},
    "MediaStreamSourceConfigurations": {},
    "Name": {},
    "SenderControlPort": {},
    "SenderIpAddress": {},
    "SourceArn": {},
    "Transport": {
      "CidrAllowList": {},
      "MaxBitrate": {},
      "MaxLatency": {},
      "MaxSyncBuffer": {},
      "MinLatency": {},
      "Protocol": {},
      "RemoteId": {},
      "SenderControlPort": {},
      "SenderIpAddress": {},
      "SmoothingLatency": {},
      "SourceListenerAddress": {},
      "SourceListenerPort": {},
      "StreamId": {}
    },
    "VpcInterfaceName": {},
    "WhitelistCidr": {},
    "GatewayBridgeSource": {
      "BridgeArn": {},
      "VpcInterfaceAttachment": {
        "VpcInterfaceName": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FlowArn|object|false|none|none|
|Source|object|false|none|none|

<h2 id="tocS_MediaStreamSourceConfigurationRequest">MediaStreamSourceConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemamediastreamsourceconfigurationrequest"></a>
<a id="schema_MediaStreamSourceConfigurationRequest"></a>
<a id="tocSmediastreamsourceconfigurationrequest"></a>
<a id="tocsmediastreamsourceconfigurationrequest"></a>

```json
{
  "EncodingName": {},
  "InputConfigurations": {},
  "MediaStreamName": {}
}
```

The definition of a media stream that you want to associate with the source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EncodingName|object|true|none|none|
|InputConfigurations|object|false|none|none|
|MediaStreamName|object|true|none|none|

<h2 id="tocS_UpdateGatewayInstanceResponse">UpdateGatewayInstanceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdategatewayinstanceresponse"></a>
<a id="schema_UpdateGatewayInstanceResponse"></a>
<a id="tocSupdategatewayinstanceresponse"></a>
<a id="tocsupdategatewayinstanceresponse"></a>

```json
{
  "BridgePlacement": {},
  "GatewayInstanceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BridgePlacement|object|false|none|none|
|GatewayInstanceArn|object|false|none|none|

<h2 id="tocS_AddBridgeFlowSourceRequest">AddBridgeFlowSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddbridgeflowsourcerequest"></a>
<a id="schema_AddBridgeFlowSourceRequest"></a>
<a id="tocSaddbridgeflowsourcerequest"></a>
<a id="tocsaddbridgeflowsourcerequest"></a>

```json
{
  "FlowArn": {},
  "FlowVpcInterfaceAttachment": {
    "VpcInterfaceName": {}
  },
  "Name": {}
}
```

Add a flow source to an existing bridge.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FlowArn|object|true|none|none|
|FlowVpcInterfaceAttachment|object|false|none|none|
|Name|object|true|none|none|

<h2 id="tocS_AddBridgeNetworkOutputRequest">AddBridgeNetworkOutputRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddbridgenetworkoutputrequest"></a>
<a id="schema_AddBridgeNetworkOutputRequest"></a>
<a id="tocSaddbridgenetworkoutputrequest"></a>
<a id="tocsaddbridgenetworkoutputrequest"></a>

```json
{
  "IpAddress": {},
  "Name": {},
  "NetworkName": {},
  "Port": {},
  "Protocol": {},
  "Ttl": {}
}
```

Add a network output to an existing bridge.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IpAddress|object|true|none|none|
|Name|object|true|none|none|
|NetworkName|object|true|none|none|
|Port|object|true|none|none|
|Protocol|object|true|none|none|
|Ttl|object|true|none|none|

<h2 id="tocS_AddBridgeNetworkSourceRequest">AddBridgeNetworkSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddbridgenetworksourcerequest"></a>
<a id="schema_AddBridgeNetworkSourceRequest"></a>
<a id="tocSaddbridgenetworksourcerequest"></a>
<a id="tocsaddbridgenetworksourcerequest"></a>

```json
{
  "MulticastIp": {},
  "Name": {},
  "NetworkName": {},
  "Port": {},
  "Protocol": {}
}
```

Add a network source to an existing bridge.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MulticastIp|object|true|none|none|
|Name|object|true|none|none|
|NetworkName|object|true|none|none|
|Port|object|true|none|none|
|Protocol|object|true|none|none|

<h2 id="tocS___listOfAddBridgeOutputRequest">__listOfAddBridgeOutputRequest</h2>
<!-- backwards compatibility -->
<a id="schema__listofaddbridgeoutputrequest"></a>
<a id="schema___listOfAddBridgeOutputRequest"></a>
<a id="tocS__listofaddbridgeoutputrequest"></a>
<a id="tocs__listofaddbridgeoutputrequest"></a>

```json
[
  {
    "NetworkOutput": {
      "IpAddress": {},
      "Name": {},
      "NetworkName": {},
      "Port": {},
      "Protocol": {},
      "Ttl": {}
    }
  }
]
```

<h2 id="tocS_AddBridgeOutputsRequest">AddBridgeOutputsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddbridgeoutputsrequest"></a>
<a id="schema_AddBridgeOutputsRequest"></a>
<a id="tocSaddbridgeoutputsrequest"></a>
<a id="tocsaddbridgeoutputsrequest"></a>

```json
{
  "Outputs": {}
}
```

A request to add outputs to the specified bridge.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Outputs|object|true|none|none|

<h2 id="tocS___listOfBridgeOutput">__listOfBridgeOutput</h2>
<!-- backwards compatibility -->
<a id="schema__listofbridgeoutput"></a>
<a id="schema___listOfBridgeOutput"></a>
<a id="tocS__listofbridgeoutput"></a>
<a id="tocs__listofbridgeoutput"></a>

```json
[
  {
    "FlowOutput": {
      "FlowArn": {},
      "FlowSourceArn": {},
      "Name": {}
    },
    "NetworkOutput": {
      "IpAddress": {},
      "Name": {},
      "NetworkName": {},
      "Port": {},
      "Protocol": {},
      "Ttl": {}
    }
  }
]
```

<h2 id="tocS___listOfAddBridgeSourceRequest">__listOfAddBridgeSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schema__listofaddbridgesourcerequest"></a>
<a id="schema___listOfAddBridgeSourceRequest"></a>
<a id="tocS__listofaddbridgesourcerequest"></a>
<a id="tocs__listofaddbridgesourcerequest"></a>

```json
[
  {
    "FlowSource": {
      "FlowArn": {},
      "FlowVpcInterfaceAttachment": {
        "VpcInterfaceName": {}
      },
      "Name": {}
    },
    "NetworkSource": {
      "MulticastIp": {},
      "Name": {},
      "NetworkName": {},
      "Port": {},
      "Protocol": {}
    }
  }
]
```

<h2 id="tocS_AddBridgeSourcesRequest">AddBridgeSourcesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddbridgesourcesrequest"></a>
<a id="schema_AddBridgeSourcesRequest"></a>
<a id="tocSaddbridgesourcesrequest"></a>
<a id="tocsaddbridgesourcesrequest"></a>

```json
{
  "Sources": {}
}
```

A request to add sources to the specified bridge.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Sources|object|true|none|none|

<h2 id="tocS___listOfBridgeSource">__listOfBridgeSource</h2>
<!-- backwards compatibility -->
<a id="schema__listofbridgesource"></a>
<a id="schema___listOfBridgeSource"></a>
<a id="tocS__listofbridgesource"></a>
<a id="tocs__listofbridgesource"></a>

```json
[
  {
    "FlowSource": {
      "FlowArn": {},
      "FlowVpcInterfaceAttachment": {
        "VpcInterfaceName": {}
      },
      "Name": {},
      "OutputArn": {}
    },
    "NetworkSource": {
      "MulticastIp": {},
      "Name": {},
      "NetworkName": {},
      "Port": {},
      "Protocol": {}
    }
  }
]
```

<h2 id="tocS_AddEgressGatewayBridgeRequest">AddEgressGatewayBridgeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddegressgatewaybridgerequest"></a>
<a id="schema_AddEgressGatewayBridgeRequest"></a>
<a id="tocSaddegressgatewaybridgerequest"></a>
<a id="tocsaddegressgatewaybridgerequest"></a>

```json
{
  "MaxBitrate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxBitrate|object|true|none|none|

<h2 id="tocS___listOfAddMediaStreamRequest">__listOfAddMediaStreamRequest</h2>
<!-- backwards compatibility -->
<a id="schema__listofaddmediastreamrequest"></a>
<a id="schema___listOfAddMediaStreamRequest"></a>
<a id="tocS__listofaddmediastreamrequest"></a>
<a id="tocs__listofaddmediastreamrequest"></a>

```json
[
  {
    "Attributes": {
      "Fmtp": {
        "ChannelOrder": {},
        "Colorimetry": {},
        "ExactFramerate": {},
        "Par": {},
        "Range": {},
        "ScanMode": {},
        "Tcs": {}
      },
      "Lang": {}
    },
    "ClockRate": {},
    "Description": {},
    "MediaStreamId": {},
    "MediaStreamName": {},
    "MediaStreamType": {},
    "VideoFormat": {}
  }
]
```

<h2 id="tocS_AddFlowMediaStreamsRequest">AddFlowMediaStreamsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddflowmediastreamsrequest"></a>
<a id="schema_AddFlowMediaStreamsRequest"></a>
<a id="tocSaddflowmediastreamsrequest"></a>
<a id="tocsaddflowmediastreamsrequest"></a>

```json
{
  "MediaStreams": {}
}
```

A request to add media streams to the flow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MediaStreams|object|true|none|none|

<h2 id="tocS___listOfMediaStream">__listOfMediaStream</h2>
<!-- backwards compatibility -->
<a id="schema__listofmediastream"></a>
<a id="schema___listOfMediaStream"></a>
<a id="tocS__listofmediastream"></a>
<a id="tocs__listofmediastream"></a>

```json
[
  {
    "Attributes": {
      "Fmtp": {
        "ChannelOrder": {},
        "Colorimetry": {},
        "ExactFramerate": {},
        "Par": {},
        "Range": {},
        "ScanMode": {},
        "Tcs": {}
      },
      "Lang": {}
    },
    "ClockRate": {},
    "Description": {},
    "Fmt": {},
    "MediaStreamId": {},
    "MediaStreamName": {},
    "MediaStreamType": {},
    "VideoFormat": {}
  }
]
```

<h2 id="tocS___listOfAddOutputRequest">__listOfAddOutputRequest</h2>
<!-- backwards compatibility -->
<a id="schema__listofaddoutputrequest"></a>
<a id="schema___listOfAddOutputRequest"></a>
<a id="tocS__listofaddoutputrequest"></a>
<a id="tocs__listofaddoutputrequest"></a>

```json
[
  {
    "CidrAllowList": {},
    "Description": {},
    "Destination": {},
    "Encryption": {
      "Algorithm": {},
      "ConstantInitializationVector": {},
      "DeviceId": {},
      "KeyType": {},
      "Region": {},
      "ResourceId": {},
      "RoleArn": {},
      "SecretArn": {},
      "Url": {}
    },
    "MaxLatency": {},
    "MediaStreamOutputConfigurations": {},
    "MinLatency": {},
    "Name": {},
    "Port": {},
    "Protocol": {},
    "RemoteId": {},
    "SenderControlPort": {},
    "SmoothingLatency": {},
    "StreamId": {},
    "VpcInterfaceAttachment": {
      "VpcInterfaceName": {}
    }
  }
]
```

<h2 id="tocS_AddFlowOutputsRequest">AddFlowOutputsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddflowoutputsrequest"></a>
<a id="schema_AddFlowOutputsRequest"></a>
<a id="tocSaddflowoutputsrequest"></a>
<a id="tocsaddflowoutputsrequest"></a>

```json
{
  "Outputs": {}
}
```

A request to add outputs to the specified flow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Outputs|object|true|none|none|

<h2 id="tocS___listOfOutput">__listOfOutput</h2>
<!-- backwards compatibility -->
<a id="schema__listofoutput"></a>
<a id="schema___listOfOutput"></a>
<a id="tocS__listofoutput"></a>
<a id="tocs__listofoutput"></a>

```json
[
  {
    "DataTransferSubscriberFeePercent": {},
    "Description": {},
    "Destination": {},
    "Encryption": {
      "Algorithm": {},
      "ConstantInitializationVector": {},
      "DeviceId": {},
      "KeyType": {},
      "Region": {},
      "ResourceId": {},
      "RoleArn": {},
      "SecretArn": {},
      "Url": {}
    },
    "EntitlementArn": {},
    "ListenerAddress": {},
    "MediaLiveInputArn": {},
    "MediaStreamOutputConfigurations": {},
    "Name": {},
    "OutputArn": {},
    "Port": {},
    "Transport": {
      "CidrAllowList": {},
      "MaxBitrate": {},
      "MaxLatency": {},
      "MaxSyncBuffer": {},
      "MinLatency": {},
      "Protocol": {},
      "RemoteId": {},
      "SenderControlPort": {},
      "SenderIpAddress": {},
      "SmoothingLatency": {},
      "SourceListenerAddress": {},
      "SourceListenerPort": {},
      "StreamId": {}
    },
    "VpcInterfaceAttachment": {
      "VpcInterfaceName": {}
    },
    "BridgeArn": {},
    "BridgePorts": {}
  }
]
```

<h2 id="tocS___listOfSetSourceRequest">__listOfSetSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schema__listofsetsourcerequest"></a>
<a id="schema___listOfSetSourceRequest"></a>
<a id="tocS__listofsetsourcerequest"></a>
<a id="tocs__listofsetsourcerequest"></a>

```json
[
  {
    "Decryption": {
      "Algorithm": {},
      "ConstantInitializationVector": {},
      "DeviceId": {},
      "KeyType": {},
      "Region": {},
      "ResourceId": {},
      "RoleArn": {},
      "SecretArn": {},
      "Url": {}
    },
    "Description": {},
    "EntitlementArn": {},
    "IngestPort": {},
    "MaxBitrate": {},
    "MaxLatency": {},
    "MaxSyncBuffer": {},
    "MediaStreamSourceConfigurations": {},
    "MinLatency": {},
    "Name": {},
    "Protocol": {},
    "SenderControlPort": {},
    "SenderIpAddress": {},
    "SourceListenerAddress": {},
    "SourceListenerPort": {},
    "StreamId": {},
    "VpcInterfaceName": {},
    "WhitelistCidr": {},
    "GatewayBridgeSource": {
      "BridgeArn": {},
      "VpcInterfaceAttachment": {
        "VpcInterfaceName": {}
      }
    }
  }
]
```

<h2 id="tocS_AddFlowSourcesRequest">AddFlowSourcesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddflowsourcesrequest"></a>
<a id="schema_AddFlowSourcesRequest"></a>
<a id="tocSaddflowsourcesrequest"></a>
<a id="tocsaddflowsourcesrequest"></a>

```json
{
  "Sources": {}
}
```

A request to add sources to the flow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Sources|object|true|none|none|

<h2 id="tocS___listOfSource">__listOfSource</h2>
<!-- backwards compatibility -->
<a id="schema__listofsource"></a>
<a id="schema___listOfSource"></a>
<a id="tocS__listofsource"></a>
<a id="tocs__listofsource"></a>

```json
[
  {
    "DataTransferSubscriberFeePercent": {},
    "Decryption": {
      "Algorithm": {},
      "ConstantInitializationVector": {},
      "DeviceId": {},
      "KeyType": {},
      "Region": {},
      "ResourceId": {},
      "RoleArn": {},
      "SecretArn": {},
      "Url": {}
    },
    "Description": {},
    "EntitlementArn": {},
    "IngestIp": {},
    "IngestPort": {},
    "MediaStreamSourceConfigurations": {},
    "Name": {},
    "SenderControlPort": {},
    "SenderIpAddress": {},
    "SourceArn": {},
    "Transport": {
      "CidrAllowList": {},
      "MaxBitrate": {},
      "MaxLatency": {},
      "MaxSyncBuffer": {},
      "MinLatency": {},
      "Protocol": {},
      "RemoteId": {},
      "SenderControlPort": {},
      "SenderIpAddress": {},
      "SmoothingLatency": {},
      "SourceListenerAddress": {},
      "SourceListenerPort": {},
      "StreamId": {}
    },
    "VpcInterfaceName": {},
    "WhitelistCidr": {},
    "GatewayBridgeSource": {
      "BridgeArn": {},
      "VpcInterfaceAttachment": {
        "VpcInterfaceName": {}
      }
    }
  }
]
```

<h2 id="tocS___listOfVpcInterfaceRequest">__listOfVpcInterfaceRequest</h2>
<!-- backwards compatibility -->
<a id="schema__listofvpcinterfacerequest"></a>
<a id="schema___listOfVpcInterfaceRequest"></a>
<a id="tocS__listofvpcinterfacerequest"></a>
<a id="tocs__listofvpcinterfacerequest"></a>

```json
[
  {
    "Name": {},
    "NetworkInterfaceType": {},
    "RoleArn": {},
    "SecurityGroupIds": {},
    "SubnetId": {}
  }
]
```

<h2 id="tocS_AddFlowVpcInterfacesRequest">AddFlowVpcInterfacesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddflowvpcinterfacesrequest"></a>
<a id="schema_AddFlowVpcInterfacesRequest"></a>
<a id="tocSaddflowvpcinterfacesrequest"></a>
<a id="tocsaddflowvpcinterfacesrequest"></a>

```json
{
  "VpcInterfaces": {}
}
```

A request to add VPC interfaces to the flow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcInterfaces|object|true|none|none|

<h2 id="tocS___listOfVpcInterface">__listOfVpcInterface</h2>
<!-- backwards compatibility -->
<a id="schema__listofvpcinterface"></a>
<a id="schema___listOfVpcInterface"></a>
<a id="tocS__listofvpcinterface"></a>
<a id="tocs__listofvpcinterface"></a>

```json
[
  {
    "Name": {},
    "NetworkInterfaceIds": {},
    "NetworkInterfaceType": {},
    "RoleArn": {},
    "SecurityGroupIds": {},
    "SubnetId": {}
  }
]
```

<h2 id="tocS_AddIngressGatewayBridgeRequest">AddIngressGatewayBridgeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddingressgatewaybridgerequest"></a>
<a id="schema_AddIngressGatewayBridgeRequest"></a>
<a id="tocSaddingressgatewaybridgerequest"></a>
<a id="tocsaddingressgatewaybridgerequest"></a>

```json
{
  "MaxBitrate": {},
  "MaxOutputs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxBitrate|object|true|none|none|
|MaxOutputs|object|true|none|none|

<h2 id="tocS_AddMaintenance">AddMaintenance</h2>
<!-- backwards compatibility -->
<a id="schemaaddmaintenance"></a>
<a id="schema_AddMaintenance"></a>
<a id="tocSaddmaintenance"></a>
<a id="tocsaddmaintenance"></a>

```json
{
  "MaintenanceDay": {},
  "MaintenanceStartHour": {}
}
```

Create maintenance setting for a flow

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaintenanceDay|object|true|none|none|
|MaintenanceStartHour|object|true|none|none|

<h2 id="tocS_MediaStreamAttributesRequest">MediaStreamAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemamediastreamattributesrequest"></a>
<a id="schema_MediaStreamAttributesRequest"></a>
<a id="tocSmediastreamattributesrequest"></a>
<a id="tocsmediastreamattributesrequest"></a>

```json
{
  "Fmtp": {
    "ChannelOrder": {},
    "Colorimetry": {},
    "ExactFramerate": {},
    "Par": {},
    "Range": {},
    "ScanMode": {},
    "Tcs": {}
  },
  "Lang": {}
}
```

Attributes that are related to the media stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Fmtp|object|false|none|none|
|Lang|object|false|none|none|

<h2 id="tocS_MediaStreamType">MediaStreamType</h2>
<!-- backwards compatibility -->
<a id="schemamediastreamtype"></a>
<a id="schema_MediaStreamType"></a>
<a id="tocSmediastreamtype"></a>
<a id="tocsmediastreamtype"></a>

```json
"video"
```

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

<h2 id="tocS___listOfMediaStreamOutputConfigurationRequest">__listOfMediaStreamOutputConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schema__listofmediastreamoutputconfigurationrequest"></a>
<a id="schema___listOfMediaStreamOutputConfigurationRequest"></a>
<a id="tocS__listofmediastreamoutputconfigurationrequest"></a>
<a id="tocs__listofmediastreamoutputconfigurationrequest"></a>

```json
[
  {
    "DestinationConfigurations": {},
    "EncodingName": {},
    "EncodingParameters": {
      "CompressionFactor": {},
      "EncoderProfile": {}
    },
    "MediaStreamName": {}
  }
]
```

<h2 id="tocS___listOfMessageDetail">__listOfMessageDetail</h2>
<!-- backwards compatibility -->
<a id="schema__listofmessagedetail"></a>
<a id="schema___listOfMessageDetail"></a>
<a id="tocS__listofmessagedetail"></a>
<a id="tocs__listofmessagedetail"></a>

```json
[
  {
    "Code": {},
    "Message": {},
    "ResourceName": {}
  }
]
```

<h2 id="tocS_BridgeState">BridgeState</h2>
<!-- backwards compatibility -->
<a id="schemabridgestate"></a>
<a id="schema_BridgeState"></a>
<a id="tocSbridgestate"></a>
<a id="tocsbridgestate"></a>

```json
"CREATING"
```

<h2 id="tocS_EgressGatewayBridge">EgressGatewayBridge</h2>
<!-- backwards compatibility -->
<a id="schemaegressgatewaybridge"></a>
<a id="schema_EgressGatewayBridge"></a>
<a id="tocSegressgatewaybridge"></a>
<a id="tocsegressgatewaybridge"></a>

```json
{
  "InstanceId": {},
  "MaxBitrate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|false|none|none|
|MaxBitrate|object|true|none|none|

<h2 id="tocS_IngressGatewayBridge">IngressGatewayBridge</h2>
<!-- backwards compatibility -->
<a id="schemaingressgatewaybridge"></a>
<a id="schema_IngressGatewayBridge"></a>
<a id="tocSingressgatewaybridge"></a>
<a id="tocsingressgatewaybridge"></a>

```json
{
  "InstanceId": {},
  "MaxBitrate": {},
  "MaxOutputs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|false|none|none|
|MaxBitrate|object|true|none|none|
|MaxOutputs|object|true|none|none|

<h2 id="tocS_FailoverConfig">FailoverConfig</h2>
<!-- backwards compatibility -->
<a id="schemafailoverconfig"></a>
<a id="schema_FailoverConfig"></a>
<a id="tocSfailoverconfig"></a>
<a id="tocsfailoverconfig"></a>

```json
{
  "FailoverMode": {},
  "RecoveryWindow": {},
  "SourcePriority": {
    "PrimarySource": {}
  },
  "State": {}
}
```

The settings for source failover.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FailoverMode|object|false|none|none|
|RecoveryWindow|object|false|none|none|
|SourcePriority|object|false|none|none|
|State|object|false|none|none|

<h2 id="tocS_Bridge">Bridge</h2>
<!-- backwards compatibility -->
<a id="schemabridge"></a>
<a id="schema_Bridge"></a>
<a id="tocSbridge"></a>
<a id="tocsbridge"></a>

```json
{
  "BridgeArn": {},
  "BridgeMessages": {},
  "BridgeState": {},
  "EgressGatewayBridge": {
    "InstanceId": {},
    "MaxBitrate": {}
  },
  "IngressGatewayBridge": {
    "InstanceId": {},
    "MaxBitrate": {},
    "MaxOutputs": {}
  },
  "Name": {},
  "Outputs": {},
  "PlacementArn": {},
  "SourceFailoverConfig": {
    "FailoverMode": {},
    "RecoveryWindow": {},
    "SourcePriority": {
      "PrimarySource": {}
    },
    "State": {}
  },
  "Sources": {}
}
```

A Bridge is the connection between your datacenter's Instances and the AWS cloud. A bridge can be used to send video from the AWS cloud to your datacenter or from your datacenter to the AWS cloud.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BridgeArn|object|true|none|none|
|BridgeMessages|object|false|none|none|
|BridgeState|object|true|none|none|
|EgressGatewayBridge|object|false|none|none|
|IngressGatewayBridge|object|false|none|none|
|Name|object|true|none|none|
|Outputs|object|false|none|none|
|PlacementArn|object|true|none|none|
|SourceFailoverConfig|object|false|none|none|
|Sources|object|false|none|none|

<h2 id="tocS_BridgeFlowOutput">BridgeFlowOutput</h2>
<!-- backwards compatibility -->
<a id="schemabridgeflowoutput"></a>
<a id="schema_BridgeFlowOutput"></a>
<a id="tocSbridgeflowoutput"></a>
<a id="tocsbridgeflowoutput"></a>

```json
{
  "FlowArn": {},
  "FlowSourceArn": {},
  "Name": {}
}
```

The output of the bridge. A flow output is delivered to the AWS cloud.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FlowArn|object|true|none|none|
|FlowSourceArn|object|true|none|none|
|Name|object|true|none|none|

<h2 id="tocS_BridgeFlowSource">BridgeFlowSource</h2>
<!-- backwards compatibility -->
<a id="schemabridgeflowsource"></a>
<a id="schema_BridgeFlowSource"></a>
<a id="tocSbridgeflowsource"></a>
<a id="tocsbridgeflowsource"></a>

```json
{
  "FlowArn": {},
  "FlowVpcInterfaceAttachment": {
    "VpcInterfaceName": {}
  },
  "Name": {},
  "OutputArn": {}
}
```

The source of the bridge. A flow source originates in MediaConnect as an existing cloud flow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FlowArn|object|true|none|none|
|FlowVpcInterfaceAttachment|object|false|none|none|
|Name|object|true|none|none|
|OutputArn|object|false|none|none|

<h2 id="tocS_BridgeNetworkOutput">BridgeNetworkOutput</h2>
<!-- backwards compatibility -->
<a id="schemabridgenetworkoutput"></a>
<a id="schema_BridgeNetworkOutput"></a>
<a id="tocSbridgenetworkoutput"></a>
<a id="tocsbridgenetworkoutput"></a>

```json
{
  "IpAddress": {},
  "Name": {},
  "NetworkName": {},
  "Port": {},
  "Protocol": {},
  "Ttl": {}
}
```

The output of the bridge. A network output is delivered to your premises.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IpAddress|object|true|none|none|
|Name|object|true|none|none|
|NetworkName|object|true|none|none|
|Port|object|true|none|none|
|Protocol|object|true|none|none|
|Ttl|object|true|none|none|

<h2 id="tocS_BridgeNetworkSource">BridgeNetworkSource</h2>
<!-- backwards compatibility -->
<a id="schemabridgenetworksource"></a>
<a id="schema_BridgeNetworkSource"></a>
<a id="tocSbridgenetworksource"></a>
<a id="tocsbridgenetworksource"></a>

```json
{
  "MulticastIp": {},
  "Name": {},
  "NetworkName": {},
  "Port": {},
  "Protocol": {}
}
```

The source of the bridge. A network source originates at your premises.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MulticastIp|object|true|none|none|
|Name|object|true|none|none|
|NetworkName|object|true|none|none|
|Port|object|true|none|none|
|Protocol|object|true|none|none|

<h2 id="tocS_BridgeOutput">BridgeOutput</h2>
<!-- backwards compatibility -->
<a id="schemabridgeoutput"></a>
<a id="schema_BridgeOutput"></a>
<a id="tocSbridgeoutput"></a>
<a id="tocsbridgeoutput"></a>

```json
{
  "FlowOutput": {
    "FlowArn": {},
    "FlowSourceArn": {},
    "Name": {}
  },
  "NetworkOutput": {
    "IpAddress": {},
    "Name": {},
    "NetworkName": {},
    "Port": {},
    "Protocol": {},
    "Ttl": {}
  }
}
```

The output of the bridge.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FlowOutput|object|false|none|none|
|NetworkOutput|object|false|none|none|

<h2 id="tocS_BridgePlacement">BridgePlacement</h2>
<!-- backwards compatibility -->
<a id="schemabridgeplacement"></a>
<a id="schema_BridgePlacement"></a>
<a id="tocSbridgeplacement"></a>
<a id="tocsbridgeplacement"></a>

```json
"AVAILABLE"
```

<h2 id="tocS_BridgeSource">BridgeSource</h2>
<!-- backwards compatibility -->
<a id="schemabridgesource"></a>
<a id="schema_BridgeSource"></a>
<a id="tocSbridgesource"></a>
<a id="tocsbridgesource"></a>

```json
{
  "FlowSource": {
    "FlowArn": {},
    "FlowVpcInterfaceAttachment": {
      "VpcInterfaceName": {}
    },
    "Name": {},
    "OutputArn": {}
  },
  "NetworkSource": {
    "MulticastIp": {},
    "Name": {},
    "NetworkName": {},
    "Port": {},
    "Protocol": {}
  }
}
```

The bridge's source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FlowSource|object|false|none|none|
|NetworkSource|object|false|none|none|

<h2 id="tocS_Colorimetry">Colorimetry</h2>
<!-- backwards compatibility -->
<a id="schemacolorimetry"></a>
<a id="schema_Colorimetry"></a>
<a id="tocScolorimetry"></a>
<a id="tocscolorimetry"></a>

```json
"BT601"
```

<h2 id="tocS_ConnectionStatus">ConnectionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionstatus"></a>
<a id="schema_ConnectionStatus"></a>
<a id="tocSconnectionstatus"></a>
<a id="tocsconnectionstatus"></a>

```json
"CONNECTED"
```

<h2 id="tocS_CreateBridgeRequest">CreateBridgeRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatebridgerequest"></a>
<a id="schema_CreateBridgeRequest"></a>
<a id="tocScreatebridgerequest"></a>
<a id="tocscreatebridgerequest"></a>

```json
{
  "EgressGatewayBridge": {
    "MaxBitrate": {}
  },
  "IngressGatewayBridge": {
    "MaxBitrate": {},
    "MaxOutputs": {}
  },
  "Name": {},
  "Outputs": {},
  "PlacementArn": {},
  "SourceFailoverConfig": {
    "FailoverMode": {},
    "RecoveryWindow": {},
    "SourcePriority": {
      "PrimarySource": {}
    },
    "State": {}
  },
  "Sources": {}
}
```

Creates a new bridge. The request must include one source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EgressGatewayBridge|object|false|none|none|
|IngressGatewayBridge|object|false|none|none|
|Name|object|true|none|none|
|Outputs|object|false|none|none|
|PlacementArn|object|true|none|none|
|SourceFailoverConfig|object|false|none|none|
|Sources|object|true|none|none|

<h2 id="tocS___listOfGrantEntitlementRequest">__listOfGrantEntitlementRequest</h2>
<!-- backwards compatibility -->
<a id="schema__listofgrantentitlementrequest"></a>
<a id="schema___listOfGrantEntitlementRequest"></a>
<a id="tocS__listofgrantentitlementrequest"></a>
<a id="tocs__listofgrantentitlementrequest"></a>

```json
[
  {
    "DataTransferSubscriberFeePercent": {},
    "Description": {},
    "Encryption": {
      "Algorithm": {},
      "ConstantInitializationVector": {},
      "DeviceId": {},
      "KeyType": {},
      "Region": {},
      "ResourceId": {},
      "RoleArn": {},
      "SecretArn": {},
      "Url": {}
    },
    "EntitlementStatus": {},
    "Name": {},
    "Subscribers": {}
  }
]
```

<h2 id="tocS_CreateFlowRequest">CreateFlowRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateflowrequest"></a>
<a id="schema_CreateFlowRequest"></a>
<a id="tocScreateflowrequest"></a>
<a id="tocscreateflowrequest"></a>

```json
{
  "AvailabilityZone": {},
  "Entitlements": {},
  "MediaStreams": {},
  "Name": {},
  "Outputs": {},
  "Source": {
    "Decryption": {
      "Algorithm": {},
      "ConstantInitializationVector": {},
      "DeviceId": {},
      "KeyType": {},
      "Region": {},
      "ResourceId": {},
      "RoleArn": {},
      "SecretArn": {},
      "Url": {}
    },
    "Description": {},
    "EntitlementArn": {},
    "IngestPort": {},
    "MaxBitrate": {},
    "MaxLatency": {},
    "MaxSyncBuffer": {},
    "MediaStreamSourceConfigurations": {},
    "MinLatency": {},
    "Name": {},
    "Protocol": {},
    "SenderControlPort": {},
    "SenderIpAddress": {},
    "SourceListenerAddress": {},
    "SourceListenerPort": {},
    "StreamId": {},
    "VpcInterfaceName": {},
    "WhitelistCidr": {},
    "GatewayBridgeSource": {
      "BridgeArn": {},
      "VpcInterfaceAttachment": {
        "VpcInterfaceName": {}
      }
    }
  },
  "SourceFailoverConfig": {
    "FailoverMode": {},
    "RecoveryWindow": {},
    "SourcePriority": {
      "PrimarySource": {}
    },
    "State": {}
  },
  "Sources": {},
  "VpcInterfaces": {},
  "Maintenance": {
    "MaintenanceDay": {},
    "MaintenanceStartHour": {}
  }
}
```

Creates a new flow. The request must include one source. The request optionally can include outputs (up to 50) and entitlements (up to 50).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AvailabilityZone|object|false|none|none|
|Entitlements|object|false|none|none|
|MediaStreams|object|false|none|none|
|Name|object|true|none|none|
|Outputs|object|false|none|none|
|Source|object|false|none|none|
|SourceFailoverConfig|object|false|none|none|
|Sources|object|false|none|none|
|VpcInterfaces|object|false|none|none|
|Maintenance|object|false|none|none|

<h2 id="tocS_Flow">Flow</h2>
<!-- backwards compatibility -->
<a id="schemaflow"></a>
<a id="schema_Flow"></a>
<a id="tocSflow"></a>
<a id="tocsflow"></a>

```json
{
  "AvailabilityZone": {},
  "Description": {},
  "EgressIp": {},
  "Entitlements": {},
  "FlowArn": {},
  "MediaStreams": {},
  "Name": {},
  "Outputs": {},
  "Source": {
    "DataTransferSubscriberFeePercent": {},
    "Decryption": {
      "Algorithm": {},
      "ConstantInitializationVector": {},
      "DeviceId": {},
      "KeyType": {},
      "Region": {},
      "ResourceId": {},
      "RoleArn": {},
      "SecretArn": {},
      "Url": {}
    },
    "Description": {},
    "EntitlementArn": {},
    "IngestIp": {},
    "IngestPort": {},
    "MediaStreamSourceConfigurations": {},
    "Name": {},
    "SenderControlPort": {},
    "SenderIpAddress": {},
    "SourceArn": {},
    "Transport": {
      "CidrAllowList": {},
      "MaxBitrate": {},
      "MaxLatency": {},
      "MaxSyncBuffer": {},
      "MinLatency": {},
      "Protocol": {},
      "RemoteId": {},
      "SenderControlPort": {},
      "SenderIpAddress": {},
      "SmoothingLatency": {},
      "SourceListenerAddress": {},
      "SourceListenerPort": {},
      "StreamId": {}
    },
    "VpcInterfaceName": {},
    "WhitelistCidr": {},
    "GatewayBridgeSource": {
      "BridgeArn": {},
      "VpcInterfaceAttachment": {
        "VpcInterfaceName": {}
      }
    }
  },
  "SourceFailoverConfig": {
    "FailoverMode": {},
    "RecoveryWindow": {},
    "SourcePriority": {
      "PrimarySource": {}
    },
    "State": {}
  },
  "Sources": {},
  "Status": {},
  "VpcInterfaces": {},
  "Maintenance": {
    "MaintenanceDay": {},
    "MaintenanceDeadline": {},
    "MaintenanceScheduledDate": {},
    "MaintenanceStartHour": {}
  }
}
```

The settings for a flow, including its source, outputs, and entitlements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AvailabilityZone|object|true|none|none|
|Description|object|false|none|none|
|EgressIp|object|false|none|none|
|Entitlements|object|true|none|none|
|FlowArn|object|true|none|none|
|MediaStreams|object|false|none|none|
|Name|object|true|none|none|
|Outputs|object|true|none|none|
|Source|object|true|none|none|
|SourceFailoverConfig|object|false|none|none|
|Sources|object|false|none|none|
|Status|object|true|none|none|
|VpcInterfaces|object|false|none|none|
|Maintenance|object|false|none|none|

<h2 id="tocS___listOfGatewayNetwork">__listOfGatewayNetwork</h2>
<!-- backwards compatibility -->
<a id="schema__listofgatewaynetwork"></a>
<a id="schema___listOfGatewayNetwork"></a>
<a id="tocS__listofgatewaynetwork"></a>
<a id="tocs__listofgatewaynetwork"></a>

```json
[
  {
    "CidrBlock": {},
    "Name": {}
  }
]
```

<h2 id="tocS_CreateGatewayRequest">CreateGatewayRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreategatewayrequest"></a>
<a id="schema_CreateGatewayRequest"></a>
<a id="tocScreategatewayrequest"></a>
<a id="tocscreategatewayrequest"></a>

```json
{
  "EgressCidrBlocks": {},
  "Name": {},
  "Networks": {}
}
```

Creates a new gateway. The request must include at least one network (up to 4).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EgressCidrBlocks|object|true|none|none|
|Name|object|true|none|none|
|Networks|object|true|none|none|

<h2 id="tocS_Gateway">Gateway</h2>
<!-- backwards compatibility -->
<a id="schemagateway"></a>
<a id="schema_Gateway"></a>
<a id="tocSgateway"></a>
<a id="tocsgateway"></a>

```json
{
  "EgressCidrBlocks": {},
  "GatewayArn": {},
  "GatewayMessages": {},
  "GatewayState": {},
  "Name": {},
  "Networks": {}
}
```

The settings for a gateway, including its networks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EgressCidrBlocks|object|true|none|none|
|GatewayArn|object|true|none|none|
|GatewayMessages|object|false|none|none|
|GatewayState|object|false|none|none|
|Name|object|true|none|none|
|Networks|object|true|none|none|

<h2 id="tocS_DeleteBridgeRequest">DeleteBridgeRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletebridgerequest"></a>
<a id="schema_DeleteBridgeRequest"></a>
<a id="tocSdeletebridgerequest"></a>
<a id="tocsdeletebridgerequest"></a>

```json
{}
```

<h2 id="tocS_DeleteFlowRequest">DeleteFlowRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteflowrequest"></a>
<a id="schema_DeleteFlowRequest"></a>
<a id="tocSdeleteflowrequest"></a>
<a id="tocsdeleteflowrequest"></a>

```json
{}
```

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
"STANDBY"
```

<h2 id="tocS_DeleteGatewayRequest">DeleteGatewayRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletegatewayrequest"></a>
<a id="schema_DeleteGatewayRequest"></a>
<a id="tocSdeletegatewayrequest"></a>
<a id="tocsdeletegatewayrequest"></a>

```json
{}
```

<h2 id="tocS___boolean">__boolean</h2>
<!-- backwards compatibility -->
<a id="schema__boolean"></a>
<a id="schema___boolean"></a>
<a id="tocS__boolean"></a>
<a id="tocs__boolean"></a>

```json
true
```

<h2 id="tocS_DeregisterGatewayInstanceRequest">DeregisterGatewayInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaderegistergatewayinstancerequest"></a>
<a id="schema_DeregisterGatewayInstanceRequest"></a>
<a id="tocSderegistergatewayinstancerequest"></a>
<a id="tocsderegistergatewayinstancerequest"></a>

```json
{}
```

<h2 id="tocS_InstanceState">InstanceState</h2>
<!-- backwards compatibility -->
<a id="schemainstancestate"></a>
<a id="schema_InstanceState"></a>
<a id="tocSinstancestate"></a>
<a id="tocsinstancestate"></a>

```json
"REGISTERING"
```

<h2 id="tocS_DescribeBridgeRequest">DescribeBridgeRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribebridgerequest"></a>
<a id="schema_DescribeBridgeRequest"></a>
<a id="tocSdescribebridgerequest"></a>
<a id="tocsdescribebridgerequest"></a>

```json
{}
```

<h2 id="tocS_DescribeFlowRequest">DescribeFlowRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeflowrequest"></a>
<a id="schema_DescribeFlowRequest"></a>
<a id="tocSdescribeflowrequest"></a>
<a id="tocsdescribeflowrequest"></a>

```json
{}
```

<h2 id="tocS_Messages">Messages</h2>
<!-- backwards compatibility -->
<a id="schemamessages"></a>
<a id="schema_Messages"></a>
<a id="tocSmessages"></a>
<a id="tocsmessages"></a>

```json
{
  "Errors": {}
}
```

Messages that provide the state of the flow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Errors|object|true|none|none|

<h2 id="tocS_DescribeGatewayInstanceRequest">DescribeGatewayInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribegatewayinstancerequest"></a>
<a id="schema_DescribeGatewayInstanceRequest"></a>
<a id="tocSdescribegatewayinstancerequest"></a>
<a id="tocsdescribegatewayinstancerequest"></a>

```json
{}
```

<h2 id="tocS_GatewayInstance">GatewayInstance</h2>
<!-- backwards compatibility -->
<a id="schemagatewayinstance"></a>
<a id="schema_GatewayInstance"></a>
<a id="tocSgatewayinstance"></a>
<a id="tocsgatewayinstance"></a>

```json
{
  "BridgePlacement": {},
  "ConnectionStatus": {},
  "GatewayArn": {},
  "GatewayInstanceArn": {},
  "InstanceId": {},
  "InstanceMessages": {},
  "InstanceState": {},
  "RunningBridgeCount": {}
}
```

The settings for an instance in a gateway.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BridgePlacement|object|true|none|none|
|ConnectionStatus|object|true|none|none|
|GatewayArn|object|true|none|none|
|GatewayInstanceArn|object|true|none|none|
|InstanceId|object|true|none|none|
|InstanceMessages|object|false|none|none|
|InstanceState|object|true|none|none|
|RunningBridgeCount|object|true|none|none|

<h2 id="tocS_DescribeGatewayRequest">DescribeGatewayRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribegatewayrequest"></a>
<a id="schema_DescribeGatewayRequest"></a>
<a id="tocSdescribegatewayrequest"></a>
<a id="tocsdescribegatewayrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeOfferingRequest">DescribeOfferingRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeofferingrequest"></a>
<a id="schema_DescribeOfferingRequest"></a>
<a id="tocSdescribeofferingrequest"></a>
<a id="tocsdescribeofferingrequest"></a>

```json
{}
```

<h2 id="tocS_Offering">Offering</h2>
<!-- backwards compatibility -->
<a id="schemaoffering"></a>
<a id="schema_Offering"></a>
<a id="tocSoffering"></a>
<a id="tocsoffering"></a>

```json
{
  "CurrencyCode": {},
  "Duration": {},
  "DurationUnits": {},
  "OfferingArn": {},
  "OfferingDescription": {},
  "PricePerUnit": {},
  "PriceUnits": {},
  "ResourceSpecification": {
    "ReservedBitrate": {},
    "ResourceType": {}
  }
}
```

A savings plan that reserves a certain amount of outbound bandwidth usage at a discounted rate each month over a period of time.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CurrencyCode|object|true|none|none|
|Duration|object|true|none|none|
|DurationUnits|object|true|none|none|
|OfferingArn|object|true|none|none|
|OfferingDescription|object|true|none|none|
|PricePerUnit|object|true|none|none|
|PriceUnits|object|true|none|none|
|ResourceSpecification|object|true|none|none|

<h2 id="tocS_DescribeReservationRequest">DescribeReservationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribereservationrequest"></a>
<a id="schema_DescribeReservationRequest"></a>
<a id="tocSdescribereservationrequest"></a>
<a id="tocsdescribereservationrequest"></a>

```json
{}
```

<h2 id="tocS_Reservation">Reservation</h2>
<!-- backwards compatibility -->
<a id="schemareservation"></a>
<a id="schema_Reservation"></a>
<a id="tocSreservation"></a>
<a id="tocsreservation"></a>

```json
{
  "CurrencyCode": {},
  "Duration": {},
  "DurationUnits": {},
  "End": {},
  "OfferingArn": {},
  "OfferingDescription": {},
  "PricePerUnit": {},
  "PriceUnits": {},
  "ReservationArn": {},
  "ReservationName": {},
  "ReservationState": {},
  "ResourceSpecification": {
    "ReservedBitrate": {},
    "ResourceType": {}
  },
  "Start": {}
}
```

A pricing agreement for a discounted rate for a specific outbound bandwidth that your MediaConnect account will use each month over a specific time period. The discounted rate in the reservation applies to outbound bandwidth for all flows from your account until your account reaches the amount of bandwidth in your reservation. If you use more outbound bandwidth than the agreed upon amount in a single month, the overage is charged at the on-demand rate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CurrencyCode|object|true|none|none|
|Duration|object|true|none|none|
|DurationUnits|object|true|none|none|
|End|object|true|none|none|
|OfferingArn|object|true|none|none|
|OfferingDescription|object|true|none|none|
|PricePerUnit|object|true|none|none|
|PriceUnits|object|true|none|none|
|ReservationArn|object|true|none|none|
|ReservationName|object|true|none|none|
|ReservationState|object|true|none|none|
|ResourceSpecification|object|true|none|none|
|Start|object|true|none|none|

<h2 id="tocS_DesiredState">DesiredState</h2>
<!-- backwards compatibility -->
<a id="schemadesiredstate"></a>
<a id="schema_DesiredState"></a>
<a id="tocSdesiredstate"></a>
<a id="tocsdesiredstate"></a>

```json
"ACTIVE"
```

<h2 id="tocS_Interface">Interface</h2>
<!-- backwards compatibility -->
<a id="schemainterface"></a>
<a id="schema_Interface"></a>
<a id="tocSinterface"></a>
<a id="tocsinterface"></a>

```json
{
  "Name": {}
}
```

The VPC interface that is used for the media stream associated with the source or output.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_DestinationConfiguration">DestinationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemadestinationconfiguration"></a>
<a id="schema_DestinationConfiguration"></a>
<a id="tocSdestinationconfiguration"></a>
<a id="tocsdestinationconfiguration"></a>

```json
{
  "DestinationIp": {},
  "DestinationPort": {},
  "Interface": {
    "Name": {}
  },
  "OutboundIp": {}
}
```

The transport parameters that are associated with an outbound media stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DestinationIp|object|true|none|none|
|DestinationPort|object|true|none|none|
|Interface|object|true|none|none|
|OutboundIp|object|true|none|none|

<h2 id="tocS_InterfaceRequest">InterfaceRequest</h2>
<!-- backwards compatibility -->
<a id="schemainterfacerequest"></a>
<a id="schema_InterfaceRequest"></a>
<a id="tocSinterfacerequest"></a>
<a id="tocsinterfacerequest"></a>

```json
{
  "Name": {}
}
```

The VPC interface that you want to designate where the media stream is coming from or going to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_DestinationConfigurationRequest">DestinationConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadestinationconfigurationrequest"></a>
<a id="schema_DestinationConfigurationRequest"></a>
<a id="tocSdestinationconfigurationrequest"></a>
<a id="tocsdestinationconfigurationrequest"></a>

```json
{
  "DestinationIp": {},
  "DestinationPort": {},
  "Interface": {
    "Name": {}
  }
}
```

The transport parameters that you want to associate with an outbound media stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DestinationIp|object|true|none|none|
|DestinationPort|object|true|none|none|
|Interface|object|true|none|none|

<h2 id="tocS_DurationUnits">DurationUnits</h2>
<!-- backwards compatibility -->
<a id="schemadurationunits"></a>
<a id="schema_DurationUnits"></a>
<a id="tocSdurationunits"></a>
<a id="tocsdurationunits"></a>

```json
"MONTHS"
```

<h2 id="tocS_EncoderProfile">EncoderProfile</h2>
<!-- backwards compatibility -->
<a id="schemaencoderprofile"></a>
<a id="schema_EncoderProfile"></a>
<a id="tocSencoderprofile"></a>
<a id="tocsencoderprofile"></a>

```json
"main"
```

<h2 id="tocS_EncodingName">EncodingName</h2>
<!-- backwards compatibility -->
<a id="schemaencodingname"></a>
<a id="schema_EncodingName"></a>
<a id="tocSencodingname"></a>
<a id="tocsencodingname"></a>

```json
"jxsv"
```

<h2 id="tocS___double">__double</h2>
<!-- backwards compatibility -->
<a id="schema__double"></a>
<a id="schema___double"></a>
<a id="tocS__double"></a>
<a id="tocs__double"></a>

```json
0
```

<h2 id="tocS_EncodingParameters">EncodingParameters</h2>
<!-- backwards compatibility -->
<a id="schemaencodingparameters"></a>
<a id="schema_EncodingParameters"></a>
<a id="tocSencodingparameters"></a>
<a id="tocsencodingparameters"></a>

```json
{
  "CompressionFactor": {},
  "EncoderProfile": {}
}
```

A collection of parameters that determine how MediaConnect will convert the content. These fields only apply to outputs on flows that have a CDI source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CompressionFactor|object|true|none|none|
|EncoderProfile|object|true|none|none|

<h2 id="tocS_EncodingParametersRequest">EncodingParametersRequest</h2>
<!-- backwards compatibility -->
<a id="schemaencodingparametersrequest"></a>
<a id="schema_EncodingParametersRequest"></a>
<a id="tocSencodingparametersrequest"></a>
<a id="tocsencodingparametersrequest"></a>

```json
{
  "CompressionFactor": {},
  "EncoderProfile": {}
}
```

A collection of parameters that determine how MediaConnect will convert the content. These fields only apply to outputs on flows that have a CDI source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CompressionFactor|object|true|none|none|
|EncoderProfile|object|true|none|none|

<h2 id="tocS_EntitlementStatus">EntitlementStatus</h2>
<!-- backwards compatibility -->
<a id="schemaentitlementstatus"></a>
<a id="schema_EntitlementStatus"></a>
<a id="tocSentitlementstatus"></a>
<a id="tocsentitlementstatus"></a>

```json
"ENABLED"
```

<h2 id="tocS_Entitlement">Entitlement</h2>
<!-- backwards compatibility -->
<a id="schemaentitlement"></a>
<a id="schema_Entitlement"></a>
<a id="tocSentitlement"></a>
<a id="tocsentitlement"></a>

```json
{
  "DataTransferSubscriberFeePercent": {},
  "Description": {},
  "Encryption": {
    "Algorithm": {},
    "ConstantInitializationVector": {},
    "DeviceId": {},
    "KeyType": {},
    "Region": {},
    "ResourceId": {},
    "RoleArn": {},
    "SecretArn": {},
    "Url": {}
  },
  "EntitlementArn": {},
  "EntitlementStatus": {},
  "Name": {},
  "Subscribers": {}
}
```

The settings for a flow entitlement.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataTransferSubscriberFeePercent|object|false|none|none|
|Description|object|false|none|none|
|Encryption|object|false|none|none|
|EntitlementArn|object|true|none|none|
|EntitlementStatus|object|false|none|none|
|Name|object|true|none|none|
|Subscribers|object|true|none|none|

<h2 id="tocS___listOfEntitlement">__listOfEntitlement</h2>
<!-- backwards compatibility -->
<a id="schema__listofentitlement"></a>
<a id="schema___listOfEntitlement"></a>
<a id="tocS__listofentitlement"></a>
<a id="tocs__listofentitlement"></a>

```json
[
  {
    "DataTransferSubscriberFeePercent": {},
    "Description": {},
    "Encryption": {
      "Algorithm": {},
      "ConstantInitializationVector": {},
      "DeviceId": {},
      "KeyType": {},
      "Region": {},
      "ResourceId": {},
      "RoleArn": {},
      "SecretArn": {},
      "Url": {}
    },
    "EntitlementArn": {},
    "EntitlementStatus": {},
    "Name": {},
    "Subscribers": {}
  }
]
```

<h2 id="tocS_Source">Source</h2>
<!-- backwards compatibility -->
<a id="schemasource"></a>
<a id="schema_Source"></a>
<a id="tocSsource"></a>
<a id="tocssource"></a>

```json
{
  "DataTransferSubscriberFeePercent": {},
  "Decryption": {
    "Algorithm": {},
    "ConstantInitializationVector": {},
    "DeviceId": {},
    "KeyType": {},
    "Region": {},
    "ResourceId": {},
    "RoleArn": {},
    "SecretArn": {},
    "Url": {}
  },
  "Description": {},
  "EntitlementArn": {},
  "IngestIp": {},
  "IngestPort": {},
  "MediaStreamSourceConfigurations": {},
  "Name": {},
  "SenderControlPort": {},
  "SenderIpAddress": {},
  "SourceArn": {},
  "Transport": {
    "CidrAllowList": {},
    "MaxBitrate": {},
    "MaxLatency": {},
    "MaxSyncBuffer": {},
    "MinLatency": {},
    "Protocol": {},
    "RemoteId": {},
    "SenderControlPort": {},
    "SenderIpAddress": {},
    "SmoothingLatency": {},
    "SourceListenerAddress": {},
    "SourceListenerPort": {},
    "StreamId": {}
  },
  "VpcInterfaceName": {},
  "WhitelistCidr": {},
  "GatewayBridgeSource": {
    "BridgeArn": {},
    "VpcInterfaceAttachment": {
      "VpcInterfaceName": {}
    }
  }
}
```

The settings for the source of the flow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataTransferSubscriberFeePercent|object|false|none|none|
|Decryption|object|false|none|none|
|Description|object|false|none|none|
|EntitlementArn|object|false|none|none|
|IngestIp|object|false|none|none|
|IngestPort|object|false|none|none|
|MediaStreamSourceConfigurations|object|false|none|none|
|Name|object|true|none|none|
|SenderControlPort|object|false|none|none|
|SenderIpAddress|object|false|none|none|
|SourceArn|object|true|none|none|
|Transport|object|false|none|none|
|VpcInterfaceName|object|false|none|none|
|WhitelistCidr|object|false|none|none|
|GatewayBridgeSource|object|false|none|none|

<h2 id="tocS_Maintenance">Maintenance</h2>
<!-- backwards compatibility -->
<a id="schemamaintenance"></a>
<a id="schema_Maintenance"></a>
<a id="tocSmaintenance"></a>
<a id="tocsmaintenance"></a>

```json
{
  "MaintenanceDay": {},
  "MaintenanceDeadline": {},
  "MaintenanceScheduledDate": {},
  "MaintenanceStartHour": {}
}
```

The maintenance setting of a flow

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaintenanceDay|object|false|none|none|
|MaintenanceDeadline|object|false|none|none|
|MaintenanceScheduledDate|object|false|none|none|
|MaintenanceStartHour|object|false|none|none|

<h2 id="tocS_Range">Range</h2>
<!-- backwards compatibility -->
<a id="schemarange"></a>
<a id="schema_Range"></a>
<a id="tocSrange"></a>
<a id="tocsrange"></a>

```json
"NARROW"
```

<h2 id="tocS_ScanMode">ScanMode</h2>
<!-- backwards compatibility -->
<a id="schemascanmode"></a>
<a id="schema_ScanMode"></a>
<a id="tocSscanmode"></a>
<a id="tocsscanmode"></a>

```json
"progressive"
```

<h2 id="tocS_Tcs">Tcs</h2>
<!-- backwards compatibility -->
<a id="schematcs"></a>
<a id="schema_Tcs"></a>
<a id="tocStcs"></a>
<a id="tocstcs"></a>

```json
"SDR"
```

<h2 id="tocS_Fmtp">Fmtp</h2>
<!-- backwards compatibility -->
<a id="schemafmtp"></a>
<a id="schema_Fmtp"></a>
<a id="tocSfmtp"></a>
<a id="tocsfmtp"></a>

```json
{
  "ChannelOrder": {},
  "Colorimetry": {},
  "ExactFramerate": {},
  "Par": {},
  "Range": {},
  "ScanMode": {},
  "Tcs": {}
}
```

FMTP

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelOrder|object|false|none|none|
|Colorimetry|object|false|none|none|
|ExactFramerate|object|false|none|none|
|Par|object|false|none|none|
|Range|object|false|none|none|
|ScanMode|object|false|none|none|
|Tcs|object|false|none|none|

<h2 id="tocS_GatewayState">GatewayState</h2>
<!-- backwards compatibility -->
<a id="schemagatewaystate"></a>
<a id="schema_GatewayState"></a>
<a id="tocSgatewaystate"></a>
<a id="tocsgatewaystate"></a>

```json
"CREATING"
```

<h2 id="tocS_GatewayBridgeSource">GatewayBridgeSource</h2>
<!-- backwards compatibility -->
<a id="schemagatewaybridgesource"></a>
<a id="schema_GatewayBridgeSource"></a>
<a id="tocSgatewaybridgesource"></a>
<a id="tocsgatewaybridgesource"></a>

```json
{
  "BridgeArn": {},
  "VpcInterfaceAttachment": {
    "VpcInterfaceName": {}
  }
}
```

The source configuration for cloud flows receiving a stream from a bridge.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BridgeArn|object|true|none|none|
|VpcInterfaceAttachment|object|false|none|none|

<h2 id="tocS_GrantFlowEntitlementsRequest">GrantFlowEntitlementsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagrantflowentitlementsrequest"></a>
<a id="schema_GrantFlowEntitlementsRequest"></a>
<a id="tocSgrantflowentitlementsrequest"></a>
<a id="tocsgrantflowentitlementsrequest"></a>

```json
{
  "Entitlements": {}
}
```

A request to grant entitlements on a flow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entitlements|object|true|none|none|

<h2 id="tocS_InputConfiguration">InputConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemainputconfiguration"></a>
<a id="schema_InputConfiguration"></a>
<a id="tocSinputconfiguration"></a>
<a id="tocsinputconfiguration"></a>

```json
{
  "InputIp": {},
  "InputPort": {},
  "Interface": {
    "Name": {}
  }
}
```

The transport parameters that are associated with an incoming media stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InputIp|object|true|none|none|
|InputPort|object|true|none|none|
|Interface|object|true|none|none|

<h2 id="tocS_InputConfigurationRequest">InputConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemainputconfigurationrequest"></a>
<a id="schema_InputConfigurationRequest"></a>
<a id="tocSinputconfigurationrequest"></a>
<a id="tocsinputconfigurationrequest"></a>

```json
{
  "InputPort": {},
  "Interface": {
    "Name": {}
  }
}
```

The transport parameters that you want to associate with an incoming media stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InputPort|object|true|none|none|
|Interface|object|true|none|none|

<h2 id="tocS_MaxResults">MaxResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxresults"></a>
<a id="schema_MaxResults"></a>
<a id="tocSmaxresults"></a>
<a id="tocsmaxresults"></a>

```json
1
```

<h2 id="tocS_ListBridgesRequest">ListBridgesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistbridgesrequest"></a>
<a id="schema_ListBridgesRequest"></a>
<a id="tocSlistbridgesrequest"></a>
<a id="tocslistbridgesrequest"></a>

```json
{}
```

<h2 id="tocS___listOfListedBridge">__listOfListedBridge</h2>
<!-- backwards compatibility -->
<a id="schema__listoflistedbridge"></a>
<a id="schema___listOfListedBridge"></a>
<a id="tocS__listoflistedbridge"></a>
<a id="tocs__listoflistedbridge"></a>

```json
[
  {
    "BridgeArn": {},
    "BridgeState": {},
    "BridgeType": {},
    "Name": {},
    "PlacementArn": {}
  }
]
```

<h2 id="tocS_ListEntitlementsRequest">ListEntitlementsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistentitlementsrequest"></a>
<a id="schema_ListEntitlementsRequest"></a>
<a id="tocSlistentitlementsrequest"></a>
<a id="tocslistentitlementsrequest"></a>

```json
{}
```

<h2 id="tocS___listOfListedEntitlement">__listOfListedEntitlement</h2>
<!-- backwards compatibility -->
<a id="schema__listoflistedentitlement"></a>
<a id="schema___listOfListedEntitlement"></a>
<a id="tocS__listoflistedentitlement"></a>
<a id="tocs__listoflistedentitlement"></a>

```json
[
  {
    "DataTransferSubscriberFeePercent": {},
    "EntitlementArn": {},
    "EntitlementName": {}
  }
]
```

<h2 id="tocS_ListFlowsRequest">ListFlowsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistflowsrequest"></a>
<a id="schema_ListFlowsRequest"></a>
<a id="tocSlistflowsrequest"></a>
<a id="tocslistflowsrequest"></a>

```json
{}
```

<h2 id="tocS___listOfListedFlow">__listOfListedFlow</h2>
<!-- backwards compatibility -->
<a id="schema__listoflistedflow"></a>
<a id="schema___listOfListedFlow"></a>
<a id="tocS__listoflistedflow"></a>
<a id="tocs__listoflistedflow"></a>

```json
[
  {
    "AvailabilityZone": {},
    "Description": {},
    "FlowArn": {},
    "Name": {},
    "SourceType": {},
    "Status": {},
    "Maintenance": {
      "MaintenanceDay": {},
      "MaintenanceDeadline": {},
      "MaintenanceScheduledDate": {},
      "MaintenanceStartHour": {}
    }
  }
]
```

<h2 id="tocS_ListGatewayInstancesRequest">ListGatewayInstancesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistgatewayinstancesrequest"></a>
<a id="schema_ListGatewayInstancesRequest"></a>
<a id="tocSlistgatewayinstancesrequest"></a>
<a id="tocslistgatewayinstancesrequest"></a>

```json
{}
```

<h2 id="tocS___listOfListedGatewayInstance">__listOfListedGatewayInstance</h2>
<!-- backwards compatibility -->
<a id="schema__listoflistedgatewayinstance"></a>
<a id="schema___listOfListedGatewayInstance"></a>
<a id="tocS__listoflistedgatewayinstance"></a>
<a id="tocs__listoflistedgatewayinstance"></a>

```json
[
  {
    "GatewayArn": {},
    "GatewayInstanceArn": {},
    "InstanceId": {},
    "InstanceState": {}
  }
]
```

<h2 id="tocS_ListGatewaysRequest">ListGatewaysRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistgatewaysrequest"></a>
<a id="schema_ListGatewaysRequest"></a>
<a id="tocSlistgatewaysrequest"></a>
<a id="tocslistgatewaysrequest"></a>

```json
{}
```

<h2 id="tocS___listOfListedGateway">__listOfListedGateway</h2>
<!-- backwards compatibility -->
<a id="schema__listoflistedgateway"></a>
<a id="schema___listOfListedGateway"></a>
<a id="tocS__listoflistedgateway"></a>
<a id="tocs__listoflistedgateway"></a>

```json
[
  {
    "GatewayArn": {},
    "GatewayState": {},
    "Name": {}
  }
]
```

<h2 id="tocS_ListOfferingsRequest">ListOfferingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistofferingsrequest"></a>
<a id="schema_ListOfferingsRequest"></a>
<a id="tocSlistofferingsrequest"></a>
<a id="tocslistofferingsrequest"></a>

```json
{}
```

<h2 id="tocS___listOfOffering">__listOfOffering</h2>
<!-- backwards compatibility -->
<a id="schema__listofoffering"></a>
<a id="schema___listOfOffering"></a>
<a id="tocS__listofoffering"></a>
<a id="tocs__listofoffering"></a>

```json
[
  {
    "CurrencyCode": {},
    "Duration": {},
    "DurationUnits": {},
    "OfferingArn": {},
    "OfferingDescription": {},
    "PricePerUnit": {},
    "PriceUnits": {},
    "ResourceSpecification": {
      "ReservedBitrate": {},
      "ResourceType": {}
    }
  }
]
```

<h2 id="tocS_ListReservationsRequest">ListReservationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistreservationsrequest"></a>
<a id="schema_ListReservationsRequest"></a>
<a id="tocSlistreservationsrequest"></a>
<a id="tocslistreservationsrequest"></a>

```json
{}
```

<h2 id="tocS___listOfReservation">__listOfReservation</h2>
<!-- backwards compatibility -->
<a id="schema__listofreservation"></a>
<a id="schema___listOfReservation"></a>
<a id="tocS__listofreservation"></a>
<a id="tocs__listofreservation"></a>

```json
[
  {
    "CurrencyCode": {},
    "Duration": {},
    "DurationUnits": {},
    "End": {},
    "OfferingArn": {},
    "OfferingDescription": {},
    "PricePerUnit": {},
    "PriceUnits": {},
    "ReservationArn": {},
    "ReservationName": {},
    "ReservationState": {},
    "ResourceSpecification": {
      "ReservedBitrate": {},
      "ResourceType": {}
    },
    "Start": {}
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

<h2 id="tocS___mapOf__string">__mapOf__string</h2>
<!-- backwards compatibility -->
<a id="schema__mapof__string"></a>
<a id="schema___mapOf__string"></a>
<a id="tocS__mapof__string"></a>
<a id="tocs__mapof__string"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[__string](#schema__string)|false|none|none|

<h2 id="tocS_ListedBridge">ListedBridge</h2>
<!-- backwards compatibility -->
<a id="schemalistedbridge"></a>
<a id="schema_ListedBridge"></a>
<a id="tocSlistedbridge"></a>
<a id="tocslistedbridge"></a>

```json
{
  "BridgeArn": {},
  "BridgeState": {},
  "BridgeType": {},
  "Name": {},
  "PlacementArn": {}
}
```

Displays details of the selected bridge.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BridgeArn|object|true|none|none|
|BridgeState|object|true|none|none|
|BridgeType|object|true|none|none|
|Name|object|true|none|none|
|PlacementArn|object|true|none|none|

<h2 id="tocS_ListedEntitlement">ListedEntitlement</h2>
<!-- backwards compatibility -->
<a id="schemalistedentitlement"></a>
<a id="schema_ListedEntitlement"></a>
<a id="tocSlistedentitlement"></a>
<a id="tocslistedentitlement"></a>

```json
{
  "DataTransferSubscriberFeePercent": {},
  "EntitlementArn": {},
  "EntitlementName": {}
}
```

An entitlement that has been granted to you from other AWS accounts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataTransferSubscriberFeePercent|object|false|none|none|
|EntitlementArn|object|true|none|none|
|EntitlementName|object|true|none|none|

<h2 id="tocS_SourceType">SourceType</h2>
<!-- backwards compatibility -->
<a id="schemasourcetype"></a>
<a id="schema_SourceType"></a>
<a id="tocSsourcetype"></a>
<a id="tocssourcetype"></a>

```json
"OWNED"
```

<h2 id="tocS_ListedFlow">ListedFlow</h2>
<!-- backwards compatibility -->
<a id="schemalistedflow"></a>
<a id="schema_ListedFlow"></a>
<a id="tocSlistedflow"></a>
<a id="tocslistedflow"></a>

```json
{
  "AvailabilityZone": {},
  "Description": {},
  "FlowArn": {},
  "Name": {},
  "SourceType": {},
  "Status": {},
  "Maintenance": {
    "MaintenanceDay": {},
    "MaintenanceDeadline": {},
    "MaintenanceScheduledDate": {},
    "MaintenanceStartHour": {}
  }
}
```

Provides a summary of a flow, including its ARN, Availability Zone, and source type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AvailabilityZone|object|true|none|none|
|Description|object|true|none|none|
|FlowArn|object|true|none|none|
|Name|object|true|none|none|
|SourceType|object|true|none|none|
|Status|object|true|none|none|
|Maintenance|object|false|none|none|

<h2 id="tocS_ListedGateway">ListedGateway</h2>
<!-- backwards compatibility -->
<a id="schemalistedgateway"></a>
<a id="schema_ListedGateway"></a>
<a id="tocSlistedgateway"></a>
<a id="tocslistedgateway"></a>

```json
{
  "GatewayArn": {},
  "GatewayState": {},
  "Name": {}
}
```

Provides a summary of a gateway, including its name, ARN, and status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayArn|object|true|none|none|
|GatewayState|object|true|none|none|
|Name|object|true|none|none|

<h2 id="tocS_ListedGatewayInstance">ListedGatewayInstance</h2>
<!-- backwards compatibility -->
<a id="schemalistedgatewayinstance"></a>
<a id="schema_ListedGatewayInstance"></a>
<a id="tocSlistedgatewayinstance"></a>
<a id="tocslistedgatewayinstance"></a>

```json
{
  "GatewayArn": {},
  "GatewayInstanceArn": {},
  "InstanceId": {},
  "InstanceState": {}
}
```

Provides a summary of an instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayArn|object|true|none|none|
|GatewayInstanceArn|object|true|none|none|
|InstanceId|object|true|none|none|
|InstanceState|object|false|none|none|

<h2 id="tocS_MediaStreamAttributes">MediaStreamAttributes</h2>
<!-- backwards compatibility -->
<a id="schemamediastreamattributes"></a>
<a id="schema_MediaStreamAttributes"></a>
<a id="tocSmediastreamattributes"></a>
<a id="tocsmediastreamattributes"></a>

```json
{
  "Fmtp": {
    "ChannelOrder": {},
    "Colorimetry": {},
    "ExactFramerate": {},
    "Par": {},
    "Range": {},
    "ScanMode": {},
    "Tcs": {}
  },
  "Lang": {}
}
```

Attributes that are related to the media stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Fmtp|object|true|none|none|
|Lang|object|false|none|none|

<h2 id="tocS_MediaStream">MediaStream</h2>
<!-- backwards compatibility -->
<a id="schemamediastream"></a>
<a id="schema_MediaStream"></a>
<a id="tocSmediastream"></a>
<a id="tocsmediastream"></a>

```json
{
  "Attributes": {
    "Fmtp": {
      "ChannelOrder": {},
      "Colorimetry": {},
      "ExactFramerate": {},
      "Par": {},
      "Range": {},
      "ScanMode": {},
      "Tcs": {}
    },
    "Lang": {}
  },
  "ClockRate": {},
  "Description": {},
  "Fmt": {},
  "MediaStreamId": {},
  "MediaStreamName": {},
  "MediaStreamType": {},
  "VideoFormat": {}
}
```

A single track or stream of media that contains video, audio, or ancillary data. After you add a media stream to a flow, you can associate it with sources and outputs on that flow, as long as they use the CDI protocol or the ST 2110 JPEG XS protocol. Each source or output can consist of one or many media streams.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attributes|object|false|none|none|
|ClockRate|object|false|none|none|
|Description|object|false|none|none|
|Fmt|object|true|none|none|
|MediaStreamId|object|true|none|none|
|MediaStreamName|object|true|none|none|
|MediaStreamType|object|true|none|none|
|VideoFormat|object|false|none|none|

<h2 id="tocS___listOfDestinationConfiguration">__listOfDestinationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schema__listofdestinationconfiguration"></a>
<a id="schema___listOfDestinationConfiguration"></a>
<a id="tocS__listofdestinationconfiguration"></a>
<a id="tocs__listofdestinationconfiguration"></a>

```json
[
  {
    "DestinationIp": {},
    "DestinationPort": {},
    "Interface": {
      "Name": {}
    },
    "OutboundIp": {}
  }
]
```

<h2 id="tocS_MediaStreamOutputConfiguration">MediaStreamOutputConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemamediastreamoutputconfiguration"></a>
<a id="schema_MediaStreamOutputConfiguration"></a>
<a id="tocSmediastreamoutputconfiguration"></a>
<a id="tocsmediastreamoutputconfiguration"></a>

```json
{
  "DestinationConfigurations": {},
  "EncodingName": {},
  "EncodingParameters": {
    "CompressionFactor": {},
    "EncoderProfile": {}
  },
  "MediaStreamName": {}
}
```

The media stream that is associated with the output, and the parameters for that association.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DestinationConfigurations|object|false|none|none|
|EncodingName|object|true|none|none|
|EncodingParameters|object|false|none|none|
|MediaStreamName|object|true|none|none|

<h2 id="tocS___listOfDestinationConfigurationRequest">__listOfDestinationConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schema__listofdestinationconfigurationrequest"></a>
<a id="schema___listOfDestinationConfigurationRequest"></a>
<a id="tocS__listofdestinationconfigurationrequest"></a>
<a id="tocs__listofdestinationconfigurationrequest"></a>

```json
[
  {
    "DestinationIp": {},
    "DestinationPort": {},
    "Interface": {
      "Name": {}
    }
  }
]
```

<h2 id="tocS___listOfInputConfiguration">__listOfInputConfiguration</h2>
<!-- backwards compatibility -->
<a id="schema__listofinputconfiguration"></a>
<a id="schema___listOfInputConfiguration"></a>
<a id="tocS__listofinputconfiguration"></a>
<a id="tocs__listofinputconfiguration"></a>

```json
[
  {
    "InputIp": {},
    "InputPort": {},
    "Interface": {
      "Name": {}
    }
  }
]
```

<h2 id="tocS_MediaStreamSourceConfiguration">MediaStreamSourceConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemamediastreamsourceconfiguration"></a>
<a id="schema_MediaStreamSourceConfiguration"></a>
<a id="tocSmediastreamsourceconfiguration"></a>
<a id="tocsmediastreamsourceconfiguration"></a>

```json
{
  "EncodingName": {},
  "InputConfigurations": {},
  "MediaStreamName": {}
}
```

The media stream that is associated with the source, and the parameters for that association.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EncodingName|object|true|none|none|
|InputConfigurations|object|false|none|none|
|MediaStreamName|object|true|none|none|

<h2 id="tocS___listOfInputConfigurationRequest">__listOfInputConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schema__listofinputconfigurationrequest"></a>
<a id="schema___listOfInputConfigurationRequest"></a>
<a id="tocS__listofinputconfigurationrequest"></a>
<a id="tocs__listofinputconfigurationrequest"></a>

```json
[
  {
    "InputPort": {},
    "Interface": {
      "Name": {}
    }
  }
]
```

<h2 id="tocS_MessageDetail">MessageDetail</h2>
<!-- backwards compatibility -->
<a id="schemamessagedetail"></a>
<a id="schema_MessageDetail"></a>
<a id="tocSmessagedetail"></a>
<a id="tocsmessagedetail"></a>

```json
{
  "Code": {},
  "Message": {},
  "ResourceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|object|true|none|none|
|Message|object|true|none|none|
|ResourceName|object|false|none|none|

<h2 id="tocS_NetworkInterfaceType">NetworkInterfaceType</h2>
<!-- backwards compatibility -->
<a id="schemanetworkinterfacetype"></a>
<a id="schema_NetworkInterfaceType"></a>
<a id="tocSnetworkinterfacetype"></a>
<a id="tocsnetworkinterfacetype"></a>

```json
"ena"
```

<h2 id="tocS_PriceUnits">PriceUnits</h2>
<!-- backwards compatibility -->
<a id="schemapriceunits"></a>
<a id="schema_PriceUnits"></a>
<a id="tocSpriceunits"></a>
<a id="tocspriceunits"></a>

```json
"HOURLY"
```

<h2 id="tocS_ResourceSpecification">ResourceSpecification</h2>
<!-- backwards compatibility -->
<a id="schemaresourcespecification"></a>
<a id="schema_ResourceSpecification"></a>
<a id="tocSresourcespecification"></a>
<a id="tocsresourcespecification"></a>

```json
{
  "ReservedBitrate": {},
  "ResourceType": {}
}
```

A definition of what is being billed for, including the type and amount.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReservedBitrate|object|false|none|none|
|ResourceType|object|true|none|none|

<h2 id="tocS___listOfMediaStreamOutputConfiguration">__listOfMediaStreamOutputConfiguration</h2>
<!-- backwards compatibility -->
<a id="schema__listofmediastreamoutputconfiguration"></a>
<a id="schema___listOfMediaStreamOutputConfiguration"></a>
<a id="tocS__listofmediastreamoutputconfiguration"></a>
<a id="tocs__listofmediastreamoutputconfiguration"></a>

```json
[
  {
    "DestinationConfigurations": {},
    "EncodingName": {},
    "EncodingParameters": {
      "CompressionFactor": {},
      "EncoderProfile": {}
    },
    "MediaStreamName": {}
  }
]
```

<h2 id="tocS_Transport">Transport</h2>
<!-- backwards compatibility -->
<a id="schematransport"></a>
<a id="schema_Transport"></a>
<a id="tocStransport"></a>
<a id="tocstransport"></a>

```json
{
  "CidrAllowList": {},
  "MaxBitrate": {},
  "MaxLatency": {},
  "MaxSyncBuffer": {},
  "MinLatency": {},
  "Protocol": {},
  "RemoteId": {},
  "SenderControlPort": {},
  "SenderIpAddress": {},
  "SmoothingLatency": {},
  "SourceListenerAddress": {},
  "SourceListenerPort": {},
  "StreamId": {}
}
```

Attributes related to the transport stream that are used in a source or output.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CidrAllowList|object|false|none|none|
|MaxBitrate|object|false|none|none|
|MaxLatency|object|false|none|none|
|MaxSyncBuffer|object|false|none|none|
|MinLatency|object|false|none|none|
|Protocol|object|true|none|none|
|RemoteId|object|false|none|none|
|SenderControlPort|object|false|none|none|
|SenderIpAddress|object|false|none|none|
|SmoothingLatency|object|false|none|none|
|SourceListenerAddress|object|false|none|none|
|SourceListenerPort|object|false|none|none|
|StreamId|object|false|none|none|

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

<h2 id="tocS_Output">Output</h2>
<!-- backwards compatibility -->
<a id="schemaoutput"></a>
<a id="schema_Output"></a>
<a id="tocSoutput"></a>
<a id="tocsoutput"></a>

```json
{
  "DataTransferSubscriberFeePercent": {},
  "Description": {},
  "Destination": {},
  "Encryption": {
    "Algorithm": {},
    "ConstantInitializationVector": {},
    "DeviceId": {},
    "KeyType": {},
    "Region": {},
    "ResourceId": {},
    "RoleArn": {},
    "SecretArn": {},
    "Url": {}
  },
  "EntitlementArn": {},
  "ListenerAddress": {},
  "MediaLiveInputArn": {},
  "MediaStreamOutputConfigurations": {},
  "Name": {},
  "OutputArn": {},
  "Port": {},
  "Transport": {
    "CidrAllowList": {},
    "MaxBitrate": {},
    "MaxLatency": {},
    "MaxSyncBuffer": {},
    "MinLatency": {},
    "Protocol": {},
    "RemoteId": {},
    "SenderControlPort": {},
    "SenderIpAddress": {},
    "SmoothingLatency": {},
    "SourceListenerAddress": {},
    "SourceListenerPort": {},
    "StreamId": {}
  },
  "VpcInterfaceAttachment": {
    "VpcInterfaceName": {}
  },
  "BridgeArn": {},
  "BridgePorts": {}
}
```

The settings for an output.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataTransferSubscriberFeePercent|object|false|none|none|
|Description|object|false|none|none|
|Destination|object|false|none|none|
|Encryption|object|false|none|none|
|EntitlementArn|object|false|none|none|
|ListenerAddress|object|false|none|none|
|MediaLiveInputArn|object|false|none|none|
|MediaStreamOutputConfigurations|object|false|none|none|
|Name|object|true|none|none|
|OutputArn|object|true|none|none|
|Port|object|false|none|none|
|Transport|object|false|none|none|
|VpcInterfaceAttachment|object|false|none|none|
|BridgeArn|object|false|none|none|
|BridgePorts|object|false|none|none|

<h2 id="tocS_PurchaseOfferingRequest">PurchaseOfferingRequest</h2>
<!-- backwards compatibility -->
<a id="schemapurchaseofferingrequest"></a>
<a id="schema_PurchaseOfferingRequest"></a>
<a id="tocSpurchaseofferingrequest"></a>
<a id="tocspurchaseofferingrequest"></a>

```json
{
  "ReservationName": {},
  "Start": {}
}
```

A request to purchase a offering.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReservationName|object|true|none|none|
|Start|object|true|none|none|

<h2 id="tocS_RemoveBridgeOutputRequest">RemoveBridgeOutputRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremovebridgeoutputrequest"></a>
<a id="schema_RemoveBridgeOutputRequest"></a>
<a id="tocSremovebridgeoutputrequest"></a>
<a id="tocsremovebridgeoutputrequest"></a>

```json
{}
```

<h2 id="tocS_RemoveBridgeSourceRequest">RemoveBridgeSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremovebridgesourcerequest"></a>
<a id="schema_RemoveBridgeSourceRequest"></a>
<a id="tocSremovebridgesourcerequest"></a>
<a id="tocsremovebridgesourcerequest"></a>

```json
{}
```

<h2 id="tocS_RemoveFlowMediaStreamRequest">RemoveFlowMediaStreamRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremoveflowmediastreamrequest"></a>
<a id="schema_RemoveFlowMediaStreamRequest"></a>
<a id="tocSremoveflowmediastreamrequest"></a>
<a id="tocsremoveflowmediastreamrequest"></a>

```json
{}
```

<h2 id="tocS_RemoveFlowOutputRequest">RemoveFlowOutputRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremoveflowoutputrequest"></a>
<a id="schema_RemoveFlowOutputRequest"></a>
<a id="tocSremoveflowoutputrequest"></a>
<a id="tocsremoveflowoutputrequest"></a>

```json
{}
```

<h2 id="tocS_RemoveFlowSourceRequest">RemoveFlowSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremoveflowsourcerequest"></a>
<a id="schema_RemoveFlowSourceRequest"></a>
<a id="tocSremoveflowsourcerequest"></a>
<a id="tocsremoveflowsourcerequest"></a>

```json
{}
```

<h2 id="tocS_RemoveFlowVpcInterfaceRequest">RemoveFlowVpcInterfaceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremoveflowvpcinterfacerequest"></a>
<a id="schema_RemoveFlowVpcInterfaceRequest"></a>
<a id="tocSremoveflowvpcinterfacerequest"></a>
<a id="tocsremoveflowvpcinterfacerequest"></a>

```json
{}
```

<h2 id="tocS_ReservationState">ReservationState</h2>
<!-- backwards compatibility -->
<a id="schemareservationstate"></a>
<a id="schema_ReservationState"></a>
<a id="tocSreservationstate"></a>
<a id="tocsreservationstate"></a>

```json
"ACTIVE"
```

<h2 id="tocS_ResourceType">ResourceType</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetype"></a>
<a id="schema_ResourceType"></a>
<a id="tocSresourcetype"></a>
<a id="tocsresourcetype"></a>

```json
"Mbps_Outbound_Bandwidth"
```

<h2 id="tocS_RevokeFlowEntitlementRequest">RevokeFlowEntitlementRequest</h2>
<!-- backwards compatibility -->
<a id="schemarevokeflowentitlementrequest"></a>
<a id="schema_RevokeFlowEntitlementRequest"></a>
<a id="tocSrevokeflowentitlementrequest"></a>
<a id="tocsrevokeflowentitlementrequest"></a>

```json
{}
```

<h2 id="tocS___listOfMediaStreamSourceConfiguration">__listOfMediaStreamSourceConfiguration</h2>
<!-- backwards compatibility -->
<a id="schema__listofmediastreamsourceconfiguration"></a>
<a id="schema___listOfMediaStreamSourceConfiguration"></a>
<a id="tocS__listofmediastreamsourceconfiguration"></a>
<a id="tocs__listofmediastreamsourceconfiguration"></a>

```json
[
  {
    "EncodingName": {},
    "InputConfigurations": {},
    "MediaStreamName": {}
  }
]
```

<h2 id="tocS_StartFlowRequest">StartFlowRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartflowrequest"></a>
<a id="schema_StartFlowRequest"></a>
<a id="tocSstartflowrequest"></a>
<a id="tocsstartflowrequest"></a>

```json
{}
```

<h2 id="tocS_StopFlowRequest">StopFlowRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopflowrequest"></a>
<a id="schema_StopFlowRequest"></a>
<a id="tocSstopflowrequest"></a>
<a id="tocsstopflowrequest"></a>

```json
{}
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

The tags to add to the resource. A tag is an array of key-value pairs. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|true|none|none|

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{}
```

<h2 id="tocS_UpdateBridgeFlowSourceRequest">UpdateBridgeFlowSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebridgeflowsourcerequest"></a>
<a id="schema_UpdateBridgeFlowSourceRequest"></a>
<a id="tocSupdatebridgeflowsourcerequest"></a>
<a id="tocsupdatebridgeflowsourcerequest"></a>

```json
{
  "FlowArn": {},
  "FlowVpcInterfaceAttachment": {
    "VpcInterfaceName": {}
  }
}
```

Update the flow source of the bridge.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FlowArn|object|false|none|none|
|FlowVpcInterfaceAttachment|object|false|none|none|

<h2 id="tocS_UpdateBridgeNetworkOutputRequest">UpdateBridgeNetworkOutputRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebridgenetworkoutputrequest"></a>
<a id="schema_UpdateBridgeNetworkOutputRequest"></a>
<a id="tocSupdatebridgenetworkoutputrequest"></a>
<a id="tocsupdatebridgenetworkoutputrequest"></a>

```json
{
  "IpAddress": {},
  "NetworkName": {},
  "Port": {},
  "Protocol": {},
  "Ttl": {}
}
```

Update an existing network output.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IpAddress|object|false|none|none|
|NetworkName|object|false|none|none|
|Port|object|false|none|none|
|Protocol|object|false|none|none|
|Ttl|object|false|none|none|

<h2 id="tocS_UpdateBridgeNetworkSourceRequest">UpdateBridgeNetworkSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebridgenetworksourcerequest"></a>
<a id="schema_UpdateBridgeNetworkSourceRequest"></a>
<a id="tocSupdatebridgenetworksourcerequest"></a>
<a id="tocsupdatebridgenetworksourcerequest"></a>

```json
{
  "MulticastIp": {},
  "NetworkName": {},
  "Port": {},
  "Protocol": {}
}
```

Update the network source of the bridge.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MulticastIp|object|false|none|none|
|NetworkName|object|false|none|none|
|Port|object|false|none|none|
|Protocol|object|false|none|none|

<h2 id="tocS_UpdateBridgeOutputRequest">UpdateBridgeOutputRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebridgeoutputrequest"></a>
<a id="schema_UpdateBridgeOutputRequest"></a>
<a id="tocSupdatebridgeoutputrequest"></a>
<a id="tocsupdatebridgeoutputrequest"></a>

```json
{
  "NetworkOutput": {
    "IpAddress": {},
    "NetworkName": {},
    "Port": {},
    "Protocol": {},
    "Ttl": {}
  }
}
```

The fields that you want to update in the bridge output.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NetworkOutput|object|false|none|none|

<h2 id="tocS_UpdateEgressGatewayBridgeRequest">UpdateEgressGatewayBridgeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateegressgatewaybridgerequest"></a>
<a id="schema_UpdateEgressGatewayBridgeRequest"></a>
<a id="tocSupdateegressgatewaybridgerequest"></a>
<a id="tocsupdateegressgatewaybridgerequest"></a>

```json
{
  "MaxBitrate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxBitrate|object|false|none|none|

<h2 id="tocS_UpdateIngressGatewayBridgeRequest">UpdateIngressGatewayBridgeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateingressgatewaybridgerequest"></a>
<a id="schema_UpdateIngressGatewayBridgeRequest"></a>
<a id="tocSupdateingressgatewaybridgerequest"></a>
<a id="tocsupdateingressgatewaybridgerequest"></a>

```json
{
  "MaxBitrate": {},
  "MaxOutputs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxBitrate|object|false|none|none|
|MaxOutputs|object|false|none|none|

<h2 id="tocS_UpdateFailoverConfig">UpdateFailoverConfig</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefailoverconfig"></a>
<a id="schema_UpdateFailoverConfig"></a>
<a id="tocSupdatefailoverconfig"></a>
<a id="tocsupdatefailoverconfig"></a>

```json
{
  "FailoverMode": {},
  "RecoveryWindow": {},
  "SourcePriority": {
    "PrimarySource": {}
  },
  "State": {}
}
```

The settings for source failover.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FailoverMode|object|false|none|none|
|RecoveryWindow|object|false|none|none|
|SourcePriority|object|false|none|none|
|State|object|false|none|none|

<h2 id="tocS_UpdateBridgeRequest">UpdateBridgeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebridgerequest"></a>
<a id="schema_UpdateBridgeRequest"></a>
<a id="tocSupdatebridgerequest"></a>
<a id="tocsupdatebridgerequest"></a>

```json
{
  "EgressGatewayBridge": {
    "MaxBitrate": {}
  },
  "IngressGatewayBridge": {
    "MaxBitrate": {},
    "MaxOutputs": {}
  },
  "SourceFailoverConfig": {
    "FailoverMode": {},
    "RecoveryWindow": {},
    "SourcePriority": {
      "PrimarySource": {}
    },
    "State": {}
  }
}
```

A request to update the bridge.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EgressGatewayBridge|object|false|none|none|
|IngressGatewayBridge|object|false|none|none|
|SourceFailoverConfig|object|false|none|none|

<h2 id="tocS_UpdateBridgeSourceRequest">UpdateBridgeSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebridgesourcerequest"></a>
<a id="schema_UpdateBridgeSourceRequest"></a>
<a id="tocSupdatebridgesourcerequest"></a>
<a id="tocsupdatebridgesourcerequest"></a>

```json
{
  "FlowSource": {
    "FlowArn": {},
    "FlowVpcInterfaceAttachment": {
      "VpcInterfaceName": {}
    }
  },
  "NetworkSource": {
    "MulticastIp": {},
    "NetworkName": {},
    "Port": {},
    "Protocol": {}
  }
}
```

The fields that you want to update in the bridge source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FlowSource|object|false|none|none|
|NetworkSource|object|false|none|none|

<h2 id="tocS_UpdateBridgeStateRequest">UpdateBridgeStateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebridgestaterequest"></a>
<a id="schema_UpdateBridgeStateRequest"></a>
<a id="tocSupdatebridgestaterequest"></a>
<a id="tocsupdatebridgestaterequest"></a>

```json
{
  "DesiredState": {}
}
```

A request to update the bridge state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DesiredState|object|true|none|none|

<h2 id="tocS_UpdateEncryption">UpdateEncryption</h2>
<!-- backwards compatibility -->
<a id="schemaupdateencryption"></a>
<a id="schema_UpdateEncryption"></a>
<a id="tocSupdateencryption"></a>
<a id="tocsupdateencryption"></a>

```json
{
  "Algorithm": {},
  "ConstantInitializationVector": {},
  "DeviceId": {},
  "KeyType": {},
  "Region": {},
  "ResourceId": {},
  "RoleArn": {},
  "SecretArn": {},
  "Url": {}
}
```

Information about the encryption of the flow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Algorithm|object|false|none|none|
|ConstantInitializationVector|object|false|none|none|
|DeviceId|object|false|none|none|
|KeyType|object|false|none|none|
|Region|object|false|none|none|
|ResourceId|object|false|none|none|
|RoleArn|object|false|none|none|
|SecretArn|object|false|none|none|
|Url|object|false|none|none|

<h2 id="tocS_UpdateFlowEntitlementRequest">UpdateFlowEntitlementRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateflowentitlementrequest"></a>
<a id="schema_UpdateFlowEntitlementRequest"></a>
<a id="tocSupdateflowentitlementrequest"></a>
<a id="tocsupdateflowentitlementrequest"></a>

```json
{
  "Description": {},
  "Encryption": {
    "Algorithm": {},
    "ConstantInitializationVector": {},
    "DeviceId": {},
    "KeyType": {},
    "Region": {},
    "ResourceId": {},
    "RoleArn": {},
    "SecretArn": {},
    "Url": {}
  },
  "EntitlementStatus": {},
  "Subscribers": {}
}
```

The entitlement fields that you want to update.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|Encryption|object|false|none|none|
|EntitlementStatus|object|false|none|none|
|Subscribers|object|false|none|none|

<h2 id="tocS_UpdateFlowMediaStreamRequest">UpdateFlowMediaStreamRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateflowmediastreamrequest"></a>
<a id="schema_UpdateFlowMediaStreamRequest"></a>
<a id="tocSupdateflowmediastreamrequest"></a>
<a id="tocsupdateflowmediastreamrequest"></a>

```json
{
  "Attributes": {
    "Fmtp": {
      "ChannelOrder": {},
      "Colorimetry": {},
      "ExactFramerate": {},
      "Par": {},
      "Range": {},
      "ScanMode": {},
      "Tcs": {}
    },
    "Lang": {}
  },
  "ClockRate": {},
  "Description": {},
  "MediaStreamType": {},
  "VideoFormat": {}
}
```

The fields that you want to update in the media stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attributes|object|false|none|none|
|ClockRate|object|false|none|none|
|Description|object|false|none|none|
|MediaStreamType|object|false|none|none|
|VideoFormat|object|false|none|none|

<h2 id="tocS_UpdateFlowOutputRequest">UpdateFlowOutputRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateflowoutputrequest"></a>
<a id="schema_UpdateFlowOutputRequest"></a>
<a id="tocSupdateflowoutputrequest"></a>
<a id="tocsupdateflowoutputrequest"></a>

```json
{
  "CidrAllowList": {},
  "Description": {},
  "Destination": {},
  "Encryption": {
    "Algorithm": {},
    "ConstantInitializationVector": {},
    "DeviceId": {},
    "KeyType": {},
    "Region": {},
    "ResourceId": {},
    "RoleArn": {},
    "SecretArn": {},
    "Url": {}
  },
  "MaxLatency": {},
  "MediaStreamOutputConfigurations": {},
  "MinLatency": {},
  "Port": {},
  "Protocol": {},
  "RemoteId": {},
  "SenderControlPort": {},
  "SenderIpAddress": {},
  "SmoothingLatency": {},
  "StreamId": {},
  "VpcInterfaceAttachment": {
    "VpcInterfaceName": {}
  }
}
```

The fields that you want to update in the output.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CidrAllowList|object|false|none|none|
|Description|object|false|none|none|
|Destination|object|false|none|none|
|Encryption|object|false|none|none|
|MaxLatency|object|false|none|none|
|MediaStreamOutputConfigurations|object|false|none|none|
|MinLatency|object|false|none|none|
|Port|object|false|none|none|
|Protocol|object|false|none|none|
|RemoteId|object|false|none|none|
|SenderControlPort|object|false|none|none|
|SenderIpAddress|object|false|none|none|
|SmoothingLatency|object|false|none|none|
|StreamId|object|false|none|none|
|VpcInterfaceAttachment|object|false|none|none|

<h2 id="tocS_UpdateMaintenance">UpdateMaintenance</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemaintenance"></a>
<a id="schema_UpdateMaintenance"></a>
<a id="tocSupdatemaintenance"></a>
<a id="tocsupdatemaintenance"></a>

```json
{
  "MaintenanceDay": {},
  "MaintenanceScheduledDate": {},
  "MaintenanceStartHour": {}
}
```

Update maintenance setting for a flow

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaintenanceDay|object|false|none|none|
|MaintenanceScheduledDate|object|false|none|none|
|MaintenanceStartHour|object|false|none|none|

<h2 id="tocS_UpdateFlowRequest">UpdateFlowRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateflowrequest"></a>
<a id="schema_UpdateFlowRequest"></a>
<a id="tocSupdateflowrequest"></a>
<a id="tocsupdateflowrequest"></a>

```json
{
  "SourceFailoverConfig": {
    "FailoverMode": {},
    "RecoveryWindow": {},
    "SourcePriority": {
      "PrimarySource": {}
    },
    "State": {}
  },
  "Maintenance": {
    "MaintenanceDay": {},
    "MaintenanceScheduledDate": {},
    "MaintenanceStartHour": {}
  }
}
```

A request to update flow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceFailoverConfig|object|false|none|none|
|Maintenance|object|false|none|none|

<h2 id="tocS_UpdateGatewayBridgeSourceRequest">UpdateGatewayBridgeSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdategatewaybridgesourcerequest"></a>
<a id="schema_UpdateGatewayBridgeSourceRequest"></a>
<a id="tocSupdategatewaybridgesourcerequest"></a>
<a id="tocsupdategatewaybridgesourcerequest"></a>

```json
{
  "BridgeArn": {},
  "VpcInterfaceAttachment": {
    "VpcInterfaceName": {}
  }
}
```

The source configuration for cloud flows receiving a stream from a bridge.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BridgeArn|object|false|none|none|
|VpcInterfaceAttachment|object|false|none|none|

<h2 id="tocS_UpdateFlowSourceRequest">UpdateFlowSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateflowsourcerequest"></a>
<a id="schema_UpdateFlowSourceRequest"></a>
<a id="tocSupdateflowsourcerequest"></a>
<a id="tocsupdateflowsourcerequest"></a>

```json
{
  "Decryption": {
    "Algorithm": {},
    "ConstantInitializationVector": {},
    "DeviceId": {},
    "KeyType": {},
    "Region": {},
    "ResourceId": {},
    "RoleArn": {},
    "SecretArn": {},
    "Url": {}
  },
  "Description": {},
  "EntitlementArn": {},
  "IngestPort": {},
  "MaxBitrate": {},
  "MaxLatency": {},
  "MaxSyncBuffer": {},
  "MediaStreamSourceConfigurations": {},
  "MinLatency": {},
  "Protocol": {},
  "SenderControlPort": {},
  "SenderIpAddress": {},
  "SourceListenerAddress": {},
  "SourceListenerPort": {},
  "StreamId": {},
  "VpcInterfaceName": {},
  "WhitelistCidr": {},
  "GatewayBridgeSource": {
    "BridgeArn": {},
    "VpcInterfaceAttachment": {
      "VpcInterfaceName": {}
    }
  }
}
```

A request to update the source of a flow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Decryption|object|false|none|none|
|Description|object|false|none|none|
|EntitlementArn|object|false|none|none|
|IngestPort|object|false|none|none|
|MaxBitrate|object|false|none|none|
|MaxLatency|object|false|none|none|
|MaxSyncBuffer|object|false|none|none|
|MediaStreamSourceConfigurations|object|false|none|none|
|MinLatency|object|false|none|none|
|Protocol|object|false|none|none|
|SenderControlPort|object|false|none|none|
|SenderIpAddress|object|false|none|none|
|SourceListenerAddress|object|false|none|none|
|SourceListenerPort|object|false|none|none|
|StreamId|object|false|none|none|
|VpcInterfaceName|object|false|none|none|
|WhitelistCidr|object|false|none|none|
|GatewayBridgeSource|object|false|none|none|

<h2 id="tocS_UpdateGatewayInstanceRequest">UpdateGatewayInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdategatewayinstancerequest"></a>
<a id="schema_UpdateGatewayInstanceRequest"></a>
<a id="tocSupdategatewayinstancerequest"></a>
<a id="tocsupdategatewayinstancerequest"></a>

```json
{
  "BridgePlacement": {}
}
```

A request to update gateway instance state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BridgePlacement|object|false|none|none|

<h2 id="tocS_VpcInterface">VpcInterface</h2>
<!-- backwards compatibility -->
<a id="schemavpcinterface"></a>
<a id="schema_VpcInterface"></a>
<a id="tocSvpcinterface"></a>
<a id="tocsvpcinterface"></a>

```json
{
  "Name": {},
  "NetworkInterfaceIds": {},
  "NetworkInterfaceType": {},
  "RoleArn": {},
  "SecurityGroupIds": {},
  "SubnetId": {}
}
```

The settings for a VPC Source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|NetworkInterfaceIds|object|true|none|none|
|NetworkInterfaceType|object|true|none|none|
|RoleArn|object|true|none|none|
|SecurityGroupIds|object|true|none|none|
|SubnetId|object|true|none|none|
