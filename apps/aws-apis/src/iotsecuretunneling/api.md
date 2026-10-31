<h1 id="aws-iot-secure-tunneling">AWS IoT Secure Tunneling v2018-10-05</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>IoT Secure Tunneling</fullname> <p>IoT Secure Tunneling creates remote connections to devices deployed in the field.</p> <p>For more information about how IoT Secure Tunneling works, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/secure-tunneling.html">IoT Secure Tunneling</a>.</p>

Base URLs:

* <a href="http://api.tunneling.iot.us-east-1.amazonaws.com">http://api.tunneling.iot.us-east-1.amazonaws.com</a> - The AWS IoT Secure Tunneling multi-region endpoint

* <a href="https://api.tunneling.iot.us-east-1.amazonaws.com">https://api.tunneling.iot.us-east-1.amazonaws.com</a> - The AWS IoT Secure Tunneling multi-region endpoint

* <a href="http://api.tunneling.iot.cn-north-1.amazonaws.com.cn">http://api.tunneling.iot.cn-north-1.amazonaws.com.cn</a> - The AWS IoT Secure Tunneling endpoint for China (Beijing) and China (Ningxia)

* <a href="https://api.tunneling.iot.cn-north-1.amazonaws.com.cn">https://api.tunneling.iot.cn-north-1.amazonaws.com.cn</a> - The AWS IoT Secure Tunneling endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/iot/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-iot-secure-tunneling-default">Default</h1>

## CloseTunnel

<a id="opIdCloseTunnel"></a>

> Code samples

```bash
curl 'https://iotsecuretunneling.us-east-1.amazonaws.com/#X-Amz-Target=IoTSecuredTunneling.CloseTunnel' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: IoTSecuredTunneling.CloseTunnel' \
  -d '{
    "tunnelId": {},
    "delete": {}
  }'
```

`POST /#X-Amz-Target=IoTSecuredTunneling.CloseTunnel`

<p>Closes a tunnel identified by the unique tunnel id. When a <code>CloseTunnel</code> request is received, we close the WebSocket connections between the client and proxy server so no data can be transmitted.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CloseTunnel</a> action.</p>

> Body parameter

```json
{
  "tunnelId": {},
  "delete": {}
}
```

<h3 id="closetunnel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CloseTunnelRequest](#schemaclosetunnelrequest)|true|none|
|» tunnelId|body|object|true|none|
|» delete|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|IoTSecuredTunneling.CloseTunnel|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="closetunnel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CloseTunnelResponse](#schemaclosetunnelresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeTunnel

<a id="opIdDescribeTunnel"></a>

> Code samples

```bash
curl 'https://iotsecuretunneling.us-east-1.amazonaws.com/#X-Amz-Target=IoTSecuredTunneling.DescribeTunnel' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: IoTSecuredTunneling.DescribeTunnel' \
  -d '{
    "tunnelId": {}
  }'
```

`POST /#X-Amz-Target=IoTSecuredTunneling.DescribeTunnel`

<p>Gets information about a tunnel identified by the unique tunnel id.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeTunnel</a> action.</p>

> Body parameter

```json
{
  "tunnelId": {}
}
```

<h3 id="describetunnel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeTunnelRequest](#schemadescribetunnelrequest)|true|none|
|» tunnelId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|IoTSecuredTunneling.DescribeTunnel|

> Example responses

> 200 Response

```json
{
  "tunnel": {
    "tunnelId": {},
    "tunnelArn": {},
    "status": {},
    "sourceConnectionState": {
      "status": {},
      "lastUpdatedAt": {}
    },
    "destinationConnectionState": {
      "status": {},
      "lastUpdatedAt": {}
    },
    "description": {},
    "destinationConfig": {
      "thingName": {},
      "services": {}
    },
    "timeoutConfig": {
      "maxLifetimeTimeoutMinutes": {}
    },
    "tags": {},
    "createdAt": {},
    "lastUpdatedAt": {}
  }
}
```

> 480 Response

```json
null
```

<h3 id="describetunnel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTunnelResponse](#schemadescribetunnelresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://iotsecuretunneling.us-east-1.amazonaws.com/#X-Amz-Target=IoTSecuredTunneling.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: IoTSecuredTunneling.ListTagsForResource' \
  -d '{
    "resourceArn": {}
  }'
```

`POST /#X-Amz-Target=IoTSecuredTunneling.ListTagsForResource`

Lists the tags for the specified resource.

> Body parameter

```json
{
  "resourceArn": {}
}
```

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListTagsForResourceRequest](#schemalisttagsforresourcerequest)|true|none|
|» resourceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|IoTSecuredTunneling.ListTagsForResource|

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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTunnels

<a id="opIdListTunnels"></a>

> Code samples

```bash
curl 'https://iotsecuretunneling.us-east-1.amazonaws.com/#X-Amz-Target=IoTSecuredTunneling.ListTunnels' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: IoTSecuredTunneling.ListTunnels' \
  -d '{
    "thingName": {},
    "maxResults": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=IoTSecuredTunneling.ListTunnels`

<p>List all tunnels for an Amazon Web Services account. Tunnels are listed by creation time in descending order, newer tunnels will be listed before older tunnels.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTunnels</a> action.</p>

> Body parameter

```json
{
  "thingName": {},
  "maxResults": {},
  "nextToken": {}
}
```

<h3 id="listtunnels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListTunnelsRequest](#schemalisttunnelsrequest)|true|none|
|» thingName|body|object|false|none|
|» maxResults|body|object|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|IoTSecuredTunneling.ListTunnels|

> Example responses

> 200 Response

```json
{
  "tunnelSummaries": {},
  "nextToken": {}
}
```

<h3 id="listtunnels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTunnelsResponse](#schemalisttunnelsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## OpenTunnel

<a id="opIdOpenTunnel"></a>

> Code samples

```bash
curl 'https://iotsecuretunneling.us-east-1.amazonaws.com/#X-Amz-Target=IoTSecuredTunneling.OpenTunnel' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: IoTSecuredTunneling.OpenTunnel' \
  -d '{
    "description": {},
    "tags": {},
    "destinationConfig": {
      "thingName": {},
      "services": {}
    },
    "timeoutConfig": {
      "maxLifetimeTimeoutMinutes": {}
    }
  }'
```

`POST /#X-Amz-Target=IoTSecuredTunneling.OpenTunnel`

<p>Creates a new tunnel, and returns two client access tokens for clients to use to connect to the IoT Secure Tunneling proxy server.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">OpenTunnel</a> action.</p>

> Body parameter

```json
{
  "description": {},
  "tags": {},
  "destinationConfig": {
    "thingName": {},
    "services": {}
  },
  "timeoutConfig": {
    "maxLifetimeTimeoutMinutes": {}
  }
}
```

<h3 id="opentunnel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[OpenTunnelRequest](#schemaopentunnelrequest)|true|none|
|» description|body|object|false|none|
|» tags|body|object|false|none|
|» destinationConfig|body|object|false|none|
|» » thingName|body|object|false|none|
|» » services|body|object|true|none|
|» timeoutConfig|body|object|false|none|
|» » maxLifetimeTimeoutMinutes|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|IoTSecuredTunneling.OpenTunnel|

> Example responses

> 200 Response

```json
{
  "tunnelId": {},
  "tunnelArn": {},
  "sourceAccessToken": {},
  "destinationAccessToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="opentunnel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[OpenTunnelResponse](#schemaopentunnelresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RotateTunnelAccessToken

<a id="opIdRotateTunnelAccessToken"></a>

> Code samples

```bash
curl 'https://iotsecuretunneling.us-east-1.amazonaws.com/#X-Amz-Target=IoTSecuredTunneling.RotateTunnelAccessToken' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: IoTSecuredTunneling.RotateTunnelAccessToken' \
  -d '{
    "tunnelId": {},
    "clientMode": {},
    "destinationConfig": {
      "thingName": {},
      "services": {}
    }
  }'
```

`POST /#X-Amz-Target=IoTSecuredTunneling.RotateTunnelAccessToken`

<p>Revokes the current client access token (CAT) and returns new CAT for clients to use when reconnecting to secure tunneling to access the same tunnel.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RotateTunnelAccessToken</a> action.</p> <note> <p>Rotating the CAT doesn't extend the tunnel duration. For example, say the tunnel duration is 12 hours and the tunnel has already been open for 4 hours. When you rotate the access tokens, the new tokens that are generated can only be used for the remaining 8 hours.</p> </note>

> Body parameter

```json
{
  "tunnelId": {},
  "clientMode": {},
  "destinationConfig": {
    "thingName": {},
    "services": {}
  }
}
```

<h3 id="rotatetunnelaccesstoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[RotateTunnelAccessTokenRequest](#schemarotatetunnelaccesstokenrequest)|true|none|
|» tunnelId|body|object|true|none|
|» clientMode|body|object|true|none|
|» destinationConfig|body|[DestinationConfig](#schemadestinationconfig)|false|The destination configuration.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|IoTSecuredTunneling.RotateTunnelAccessToken|

> Example responses

> 200 Response

```json
{
  "tunnelArn": {},
  "sourceAccessToken": {},
  "destinationAccessToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="rotatetunnelaccesstoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RotateTunnelAccessTokenResponse](#schemarotatetunnelaccesstokenresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://iotsecuretunneling.us-east-1.amazonaws.com/#X-Amz-Target=IoTSecuredTunneling.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: IoTSecuredTunneling.TagResource' \
  -d '{
    "resourceArn": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=IoTSecuredTunneling.TagResource`

A resource tag.

> Body parameter

```json
{
  "resourceArn": {},
  "tags": {}
}
```

<h3 id="tagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[TagResourceRequest](#schematagresourcerequest)|true|none|
|» resourceArn|body|object|true|none|
|» tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|IoTSecuredTunneling.TagResource|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://iotsecuretunneling.us-east-1.amazonaws.com/#X-Amz-Target=IoTSecuredTunneling.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: IoTSecuredTunneling.UntagResource' \
  -d '{
    "resourceArn": {},
    "tagKeys": {}
  }'
```

`POST /#X-Amz-Target=IoTSecuredTunneling.UntagResource`

Removes a tag from a resource.

> Body parameter

```json
{
  "resourceArn": {},
  "tagKeys": {}
}
```

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UntagResourceRequest](#schemauntagresourcerequest)|true|none|
|» resourceArn|body|object|true|none|
|» tagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|IoTSecuredTunneling.UntagResource|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CloseTunnelResponse">CloseTunnelResponse</h2>
<!-- backwards compatibility -->
<a id="schemaclosetunnelresponse"></a>
<a id="schema_CloseTunnelResponse"></a>
<a id="tocSclosetunnelresponse"></a>
<a id="tocsclosetunnelresponse"></a>

```json
{}
```

<h2 id="tocS_CloseTunnelRequest">CloseTunnelRequest</h2>
<!-- backwards compatibility -->
<a id="schemaclosetunnelrequest"></a>
<a id="schema_CloseTunnelRequest"></a>
<a id="tocSclosetunnelrequest"></a>
<a id="tocsclosetunnelrequest"></a>

```json
{
  "tunnelId": {},
  "delete": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tunnelId|object|true|none|none|
|delete|object|false|none|none|

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_DescribeTunnelResponse">DescribeTunnelResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribetunnelresponse"></a>
<a id="schema_DescribeTunnelResponse"></a>
<a id="tocSdescribetunnelresponse"></a>
<a id="tocsdescribetunnelresponse"></a>

```json
{
  "tunnel": {
    "tunnelId": {},
    "tunnelArn": {},
    "status": {},
    "sourceConnectionState": {
      "status": {},
      "lastUpdatedAt": {}
    },
    "destinationConnectionState": {
      "status": {},
      "lastUpdatedAt": {}
    },
    "description": {},
    "destinationConfig": {
      "thingName": {},
      "services": {}
    },
    "timeoutConfig": {
      "maxLifetimeTimeoutMinutes": {}
    },
    "tags": {},
    "createdAt": {},
    "lastUpdatedAt": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tunnel|object|false|none|none|

<h2 id="tocS_DescribeTunnelRequest">DescribeTunnelRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribetunnelrequest"></a>
<a id="schema_DescribeTunnelRequest"></a>
<a id="tocSdescribetunnelrequest"></a>
<a id="tocsdescribetunnelrequest"></a>

```json
{
  "tunnelId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tunnelId|object|true|none|none|

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

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{
  "resourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceArn|object|true|none|none|

<h2 id="tocS_ListTunnelsResponse">ListTunnelsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttunnelsresponse"></a>
<a id="schema_ListTunnelsResponse"></a>
<a id="tocSlisttunnelsresponse"></a>
<a id="tocslisttunnelsresponse"></a>

```json
{
  "tunnelSummaries": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tunnelSummaries|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListTunnelsRequest">ListTunnelsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttunnelsrequest"></a>
<a id="schema_ListTunnelsRequest"></a>
<a id="tocSlisttunnelsrequest"></a>
<a id="tocslisttunnelsrequest"></a>

```json
{
  "thingName": {},
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|thingName|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_OpenTunnelResponse">OpenTunnelResponse</h2>
<!-- backwards compatibility -->
<a id="schemaopentunnelresponse"></a>
<a id="schema_OpenTunnelResponse"></a>
<a id="tocSopentunnelresponse"></a>
<a id="tocsopentunnelresponse"></a>

```json
{
  "tunnelId": {},
  "tunnelArn": {},
  "sourceAccessToken": {},
  "destinationAccessToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tunnelId|object|false|none|none|
|tunnelArn|object|false|none|none|
|sourceAccessToken|object|false|none|none|
|destinationAccessToken|object|false|none|none|

<h2 id="tocS_OpenTunnelRequest">OpenTunnelRequest</h2>
<!-- backwards compatibility -->
<a id="schemaopentunnelrequest"></a>
<a id="schema_OpenTunnelRequest"></a>
<a id="tocSopentunnelrequest"></a>
<a id="tocsopentunnelrequest"></a>

```json
{
  "description": {},
  "tags": {},
  "destinationConfig": {
    "thingName": {},
    "services": {}
  },
  "timeoutConfig": {
    "maxLifetimeTimeoutMinutes": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|object|false|none|none|
|tags|object|false|none|none|
|destinationConfig|object|false|none|none|
|timeoutConfig|object|false|none|none|

<h2 id="tocS_LimitExceededException">LimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemalimitexceededexception"></a>
<a id="schema_LimitExceededException"></a>
<a id="tocSlimitexceededexception"></a>
<a id="tocslimitexceededexception"></a>

```json
null
```

<h2 id="tocS_RotateTunnelAccessTokenResponse">RotateTunnelAccessTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemarotatetunnelaccesstokenresponse"></a>
<a id="schema_RotateTunnelAccessTokenResponse"></a>
<a id="tocSrotatetunnelaccesstokenresponse"></a>
<a id="tocsrotatetunnelaccesstokenresponse"></a>

```json
{
  "tunnelArn": {},
  "sourceAccessToken": {},
  "destinationAccessToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tunnelArn|object|false|none|none|
|sourceAccessToken|object|false|none|none|
|destinationAccessToken|object|false|none|none|

<h2 id="tocS_RotateTunnelAccessTokenRequest">RotateTunnelAccessTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemarotatetunnelaccesstokenrequest"></a>
<a id="schema_RotateTunnelAccessTokenRequest"></a>
<a id="tocSrotatetunnelaccesstokenrequest"></a>
<a id="tocsrotatetunnelaccesstokenrequest"></a>

```json
{
  "tunnelId": {},
  "clientMode": {},
  "destinationConfig": {
    "thingName": {},
    "services": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tunnelId|object|true|none|none|
|clientMode|object|true|none|none|
|destinationConfig|[DestinationConfig](#schemadestinationconfig)|false|none|The destination configuration.|

<h2 id="tocS_TagResourceResponse">TagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schematagresourceresponse"></a>
<a id="schema_TagResourceResponse"></a>
<a id="tocStagresourceresponse"></a>
<a id="tocstagresourceresponse"></a>

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
  "resourceArn": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceArn|object|true|none|none|
|tags|object|true|none|none|

<h2 id="tocS_UntagResourceResponse">UntagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceresponse"></a>
<a id="schema_UntagResourceResponse"></a>
<a id="tocSuntagresourceresponse"></a>
<a id="tocsuntagresourceresponse"></a>

```json
{}
```

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{
  "resourceArn": {},
  "tagKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceArn|object|true|none|none|
|tagKeys|object|true|none|none|

<h2 id="tocS_AmazonResourceName">AmazonResourceName</h2>
<!-- backwards compatibility -->
<a id="schemaamazonresourcename"></a>
<a id="schema_AmazonResourceName"></a>
<a id="tocSamazonresourcename"></a>
<a id="tocsamazonresourcename"></a>

```json
"string"
```

<h2 id="tocS_ClientAccessToken">ClientAccessToken</h2>
<!-- backwards compatibility -->
<a id="schemaclientaccesstoken"></a>
<a id="schema_ClientAccessToken"></a>
<a id="tocSclientaccesstoken"></a>
<a id="tocsclientaccesstoken"></a>

```json
"password"
```

<h2 id="tocS_ClientMode">ClientMode</h2>
<!-- backwards compatibility -->
<a id="schemaclientmode"></a>
<a id="schema_ClientMode"></a>
<a id="tocSclientmode"></a>
<a id="tocsclientmode"></a>

```json
"SOURCE"
```

<h2 id="tocS_TunnelId">TunnelId</h2>
<!-- backwards compatibility -->
<a id="schematunnelid"></a>
<a id="schema_TunnelId"></a>
<a id="tocStunnelid"></a>
<a id="tocstunnelid"></a>

```json
"string"
```

<h2 id="tocS_DeleteFlag">DeleteFlag</h2>
<!-- backwards compatibility -->
<a id="schemadeleteflag"></a>
<a id="schema_DeleteFlag"></a>
<a id="tocSdeleteflag"></a>
<a id="tocsdeleteflag"></a>

```json
true
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

<h2 id="tocS_DateType">DateType</h2>
<!-- backwards compatibility -->
<a id="schemadatetype"></a>
<a id="schema_DateType"></a>
<a id="tocSdatetype"></a>
<a id="tocsdatetype"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_ConnectionState">ConnectionState</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionstate"></a>
<a id="schema_ConnectionState"></a>
<a id="tocSconnectionstate"></a>
<a id="tocsconnectionstate"></a>

```json
{
  "status": {},
  "lastUpdatedAt": {}
}
```

The state of a connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|false|none|none|
|lastUpdatedAt|object|false|none|none|

<h2 id="tocS_Tunnel">Tunnel</h2>
<!-- backwards compatibility -->
<a id="schematunnel"></a>
<a id="schema_Tunnel"></a>
<a id="tocStunnel"></a>
<a id="tocstunnel"></a>

```json
{
  "tunnelId": {},
  "tunnelArn": {},
  "status": {},
  "sourceConnectionState": {
    "status": {},
    "lastUpdatedAt": {}
  },
  "destinationConnectionState": {
    "status": {},
    "lastUpdatedAt": {}
  },
  "description": {},
  "destinationConfig": {
    "thingName": {},
    "services": {}
  },
  "timeoutConfig": {
    "maxLifetimeTimeoutMinutes": {}
  },
  "tags": {},
  "createdAt": {},
  "lastUpdatedAt": {}
}
```

A connection between a source computer and a destination device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tunnelId|object|false|none|none|
|tunnelArn|object|false|none|none|
|status|object|false|none|none|
|sourceConnectionState|object|false|none|none|
|destinationConnectionState|object|false|none|none|
|description|object|false|none|none|
|destinationConfig|object|false|none|none|
|timeoutConfig|object|false|none|none|
|tags|object|false|none|none|
|createdAt|object|false|none|none|
|lastUpdatedAt|object|false|none|none|

<h2 id="tocS_Description">Description</h2>
<!-- backwards compatibility -->
<a id="schemadescription"></a>
<a id="schema_Description"></a>
<a id="tocSdescription"></a>
<a id="tocsdescription"></a>

```json
"string"
```

<h2 id="tocS_ThingName">ThingName</h2>
<!-- backwards compatibility -->
<a id="schemathingname"></a>
<a id="schema_ThingName"></a>
<a id="tocSthingname"></a>
<a id="tocsthingname"></a>

```json
"string"
```

<h2 id="tocS_ServiceList">ServiceList</h2>
<!-- backwards compatibility -->
<a id="schemaservicelist"></a>
<a id="schema_ServiceList"></a>
<a id="tocSservicelist"></a>
<a id="tocsservicelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DestinationConfig">DestinationConfig</h2>
<!-- backwards compatibility -->
<a id="schemadestinationconfig"></a>
<a id="schema_DestinationConfig"></a>
<a id="tocSdestinationconfig"></a>
<a id="tocsdestinationconfig"></a>

```json
{
  "thingName": {},
  "services": {}
}
```

The destination configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|thingName|object|false|none|none|
|services|object|true|none|none|

<h2 id="tocS_TagList">TagList</h2>
<!-- backwards compatibility -->
<a id="schemataglist"></a>
<a id="schema_TagList"></a>
<a id="tocStaglist"></a>
<a id="tocstaglist"></a>

```json
[
  {
    "key": {},
    "value": {}
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

<h2 id="tocS_TunnelSummaryList">TunnelSummaryList</h2>
<!-- backwards compatibility -->
<a id="schematunnelsummarylist"></a>
<a id="schema_TunnelSummaryList"></a>
<a id="tocStunnelsummarylist"></a>
<a id="tocstunnelsummarylist"></a>

```json
[
  {
    "tunnelId": {},
    "tunnelArn": {},
    "status": {},
    "description": {},
    "createdAt": {},
    "lastUpdatedAt": {}
  }
]
```

<h2 id="tocS_TimeoutConfig">TimeoutConfig</h2>
<!-- backwards compatibility -->
<a id="schematimeoutconfig"></a>
<a id="schema_TimeoutConfig"></a>
<a id="tocStimeoutconfig"></a>
<a id="tocstimeoutconfig"></a>

```json
{
  "maxLifetimeTimeoutMinutes": {}
}
```

Tunnel timeout configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxLifetimeTimeoutMinutes|object|false|none|none|

<h2 id="tocS_TunnelArn">TunnelArn</h2>
<!-- backwards compatibility -->
<a id="schematunnelarn"></a>
<a id="schema_TunnelArn"></a>
<a id="tocStunnelarn"></a>
<a id="tocstunnelarn"></a>

```json
"string"
```

<h2 id="tocS_Service">Service</h2>
<!-- backwards compatibility -->
<a id="schemaservice"></a>
<a id="schema_Service"></a>
<a id="tocSservice"></a>
<a id="tocsservice"></a>

```json
"string"
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

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

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

An arbitary key/value pair used to add searchable metadata to secure tunnel resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|object|true|none|none|
|value|object|true|none|none|

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

<h2 id="tocS_TimeoutInMin">TimeoutInMin</h2>
<!-- backwards compatibility -->
<a id="schematimeoutinmin"></a>
<a id="schema_TimeoutInMin"></a>
<a id="tocStimeoutinmin"></a>
<a id="tocstimeoutinmin"></a>

```json
1
```

<h2 id="tocS_TunnelStatus">TunnelStatus</h2>
<!-- backwards compatibility -->
<a id="schematunnelstatus"></a>
<a id="schema_TunnelStatus"></a>
<a id="tocStunnelstatus"></a>
<a id="tocstunnelstatus"></a>

```json
"OPEN"
```

<h2 id="tocS_TunnelSummary">TunnelSummary</h2>
<!-- backwards compatibility -->
<a id="schematunnelsummary"></a>
<a id="schema_TunnelSummary"></a>
<a id="tocStunnelsummary"></a>
<a id="tocstunnelsummary"></a>

```json
{
  "tunnelId": {},
  "tunnelArn": {},
  "status": {},
  "description": {},
  "createdAt": {},
  "lastUpdatedAt": {}
}
```

Information about the tunnel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tunnelId|object|false|none|none|
|tunnelArn|object|false|none|none|
|status|object|false|none|none|
|description|object|false|none|none|
|createdAt|object|false|none|none|
|lastUpdatedAt|object|false|none|none|
