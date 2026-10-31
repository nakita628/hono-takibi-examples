<h1 id="aws-network-manager">AWS Network Manager v2019-07-05</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Amazon Web Services enables you to centrally manage your Amazon Web Services Cloud WAN core network and your Transit Gateway network across Amazon Web Services accounts, Regions, and on-premises locations.

Base URLs:

* <a href="http://networkmanager.us-east-1.amazonaws.com">http://networkmanager.us-east-1.amazonaws.com</a> - The NetworkManager multi-region endpoint

* <a href="https://networkmanager.us-east-1.amazonaws.com">https://networkmanager.us-east-1.amazonaws.com</a> - The NetworkManager multi-region endpoint

* <a href="http://networkmanager.cn-north-1.amazonaws.com.cn">http://networkmanager.cn-north-1.amazonaws.com.cn</a> - The NetworkManager endpoint for China (Beijing) and China (Ningxia)

* <a href="https://networkmanager.cn-north-1.amazonaws.com.cn">https://networkmanager.cn-north-1.amazonaws.com.cn</a> - The NetworkManager endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/networkmanager/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-network-manager-default">Default</h1>

## AcceptAttachment

<a id="opIdAcceptAttachment"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/attachments/string/accept \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /attachments/{attachmentId}/accept`

<p>Accepts a core network attachment request. </p> <p>Once the attachment request is accepted by a core network owner, the attachment is created and connected to a core network.</p>

<h3 id="acceptattachment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|attachmentId|path|string|true|The ID of the attachment. |
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
  "Attachment": {
    "CoreNetworkId": {},
    "CoreNetworkArn": {},
    "AttachmentId": {},
    "OwnerAccountId": {},
    "AttachmentType": {},
    "State": {},
    "EdgeLocation": {},
    "ResourceArn": {},
    "AttachmentPolicyRuleNumber": {},
    "SegmentName": {},
    "Tags": {},
    "ProposedSegmentChange": {
      "Tags": {},
      "AttachmentPolicyRuleNumber": {},
      "SegmentName": {}
    },
    "CreatedAt": {},
    "UpdatedAt": {}
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

<h3 id="acceptattachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AcceptAttachmentResponse](#schemaacceptattachmentresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetConnectPeerAssociations

<a id="opIdGetConnectPeerAssociations"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/global-networks/string/connect-peer-associations \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /global-networks/{globalNetworkId}/connect-peer-associations`

Returns information about a core network Connect peer associations.

<h3 id="getconnectpeerassociations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|globalNetworkId|path|string|true|The ID of the global network.|
|connectPeerIds|query|[[ConnectPeerId](#schemaconnectpeerid)]|false|The IDs of the Connect peers.|
|maxResults|query|integer|false|The maximum number of results to return.|
|nextToken|query|string|false|The token for the next page of results.|
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
  "ConnectPeerAssociations": {},
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

<h3 id="getconnectpeerassociations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetConnectPeerAssociationsResponse](#schemagetconnectpeerassociationsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateConnectPeer

<a id="opIdAssociateConnectPeer"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/global-networks/string/connect-peer-associations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ConnectPeerId": "string",
    "DeviceId": "string",
    "LinkId": "string"
  }'
```

`POST /global-networks/{globalNetworkId}/connect-peer-associations`

<p>Associates a core network Connect peer with a device and optionally, with a link. </p> <p>If you specify a link, it must be associated with the specified device. You can only associate core network Connect peers that have been created on a core network Connect attachment on a core network. </p>

> Body parameter

```json
{
  "ConnectPeerId": "string",
  "DeviceId": "string",
  "LinkId": "string"
}
```

<h3 id="associateconnectpeer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|globalNetworkId|path|string|true|The ID of your global network.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ConnectPeerId|body|string|true|The ID of the Connect peer.|
|» DeviceId|body|string|true|The ID of the device.|
|» LinkId|body|string|false|The ID of the link.|

> Example responses

> 200 Response

```json
{
  "ConnectPeerAssociation": {
    "ConnectPeerId": {},
    "GlobalNetworkId": {},
    "DeviceId": {},
    "LinkId": {},
    "State": {}
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

<h3 id="associateconnectpeer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateConnectPeerResponse](#schemaassociateconnectpeerresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCustomerGatewayAssociations

<a id="opIdGetCustomerGatewayAssociations"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/global-networks/string/customer-gateway-associations \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /global-networks/{globalNetworkId}/customer-gateway-associations`

Gets the association information for customer gateways that are associated with devices and links in your global network.

<h3 id="getcustomergatewayassociations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|globalNetworkId|path|string|true|The ID of the global network.|
|customerGatewayArns|query|[[CustomerGatewayArn](#schemacustomergatewayarn)]|false|One or more customer gateway Amazon Resource Names (ARNs). The maximum is 10.|
|maxResults|query|integer|false|The maximum number of results to return.|
|nextToken|query|string|false|The token for the next page of results.|
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
  "CustomerGatewayAssociations": {},
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

<h3 id="getcustomergatewayassociations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCustomerGatewayAssociationsResponse](#schemagetcustomergatewayassociationsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateCustomerGateway

<a id="opIdAssociateCustomerGateway"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/global-networks/string/customer-gateway-associations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "CustomerGatewayArn": "string",
    "DeviceId": "string",
    "LinkId": "string"
  }'
```

`POST /global-networks/{globalNetworkId}/customer-gateway-associations`

<p>Associates a customer gateway with a device and optionally, with a link. If you specify a link, it must be associated with the specified device. </p> <p>You can only associate customer gateways that are connected to a VPN attachment on a transit gateway or core network registered in your global network. When you register a transit gateway or core network, customer gateways that are connected to the transit gateway are automatically included in the global network. To list customer gateways that are connected to a transit gateway, use the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpnConnections.html">DescribeVpnConnections</a> EC2 API and filter by <code>transit-gateway-id</code>.</p> <p>You cannot associate a customer gateway with more than one device and link. </p>

> Body parameter

```json
{
  "CustomerGatewayArn": "string",
  "DeviceId": "string",
  "LinkId": "string"
}
```

<h3 id="associatecustomergateway-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|globalNetworkId|path|string|true|The ID of the global network.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» CustomerGatewayArn|body|string|true|The Amazon Resource Name (ARN) of the customer gateway.|
|» DeviceId|body|string|true|The ID of the device.|
|» LinkId|body|string|false|The ID of the link.|

> Example responses

> 200 Response

```json
{
  "CustomerGatewayAssociation": {
    "CustomerGatewayArn": {},
    "GlobalNetworkId": {},
    "DeviceId": {},
    "LinkId": {},
    "State": {}
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

<h3 id="associatecustomergateway-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateCustomerGatewayResponse](#schemaassociatecustomergatewayresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetLinkAssociations

<a id="opIdGetLinkAssociations"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/global-networks/string/link-associations \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /global-networks/{globalNetworkId}/link-associations`

Gets the link associations for a device or a link. Either the device ID or the link ID must be specified.

<h3 id="getlinkassociations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|globalNetworkId|path|string|true|The ID of the global network.|
|deviceId|query|string|false|The ID of the device.|
|linkId|query|string|false|The ID of the link.|
|maxResults|query|integer|false|The maximum number of results to return.|
|nextToken|query|string|false|The token for the next page of results.|
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
  "LinkAssociations": {},
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

<h3 id="getlinkassociations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetLinkAssociationsResponse](#schemagetlinkassociationsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateLink

<a id="opIdAssociateLink"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/global-networks/string/link-associations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "DeviceId": "string",
    "LinkId": "string"
  }'
```

`POST /global-networks/{globalNetworkId}/link-associations`

Associates a link to a device. A device can be associated to multiple links and a link can be associated to multiple devices. The device and link must be in the same global network and the same site.

> Body parameter

```json
{
  "DeviceId": "string",
  "LinkId": "string"
}
```

<h3 id="associatelink-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|globalNetworkId|path|string|true|The ID of the global network.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» DeviceId|body|string|true|The ID of the device.|
|» LinkId|body|string|true|The ID of the link.|

> Example responses

> 200 Response

```json
{
  "LinkAssociation": {
    "GlobalNetworkId": {},
    "DeviceId": {},
    "LinkId": {},
    "LinkAssociationState": {}
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

<h3 id="associatelink-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateLinkResponse](#schemaassociatelinkresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetTransitGatewayConnectPeerAssociations

<a id="opIdGetTransitGatewayConnectPeerAssociations"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/global-networks/string/transit-gateway-connect-peer-associations \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /global-networks/{globalNetworkId}/transit-gateway-connect-peer-associations`

Gets information about one or more of your transit gateway Connect peer associations in a global network.

<h3 id="gettransitgatewayconnectpeerassociations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|globalNetworkId|path|string|true|The ID of the global network.|
|transitGatewayConnectPeerArns|query|[[TransitGatewayConnectPeerArn](#schematransitgatewayconnectpeerarn)]|false|One or more transit gateway Connect peer Amazon Resource Names (ARNs).|
|maxResults|query|integer|false|The maximum number of results to return.|
|nextToken|query|string|false|The token for the next page of results.|
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
  "TransitGatewayConnectPeerAssociations": {},
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

<h3 id="gettransitgatewayconnectpeerassociations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetTransitGatewayConnectPeerAssociationsResponse](#schemagettransitgatewayconnectpeerassociationsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateTransitGatewayConnectPeer

<a id="opIdAssociateTransitGatewayConnectPeer"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/global-networks/string/transit-gateway-connect-peer-associations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "TransitGatewayConnectPeerArn": "string",
    "DeviceId": "string",
    "LinkId": "string"
  }'
```

`POST /global-networks/{globalNetworkId}/transit-gateway-connect-peer-associations`

<p>Associates a transit gateway Connect peer with a device, and optionally, with a link. If you specify a link, it must be associated with the specified device. </p> <p>You can only associate transit gateway Connect peers that have been created on a transit gateway that's registered in your global network.</p> <p>You cannot associate a transit gateway Connect peer with more than one device and link. </p>

> Body parameter

```json
{
  "TransitGatewayConnectPeerArn": "string",
  "DeviceId": "string",
  "LinkId": "string"
}
```

<h3 id="associatetransitgatewayconnectpeer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|globalNetworkId|path|string|true|The ID of the global network.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» TransitGatewayConnectPeerArn|body|string|true|The Amazon Resource Name (ARN) of the Connect peer.|
|» DeviceId|body|string|true|The ID of the device.|
|» LinkId|body|string|false|The ID of the link.|

> Example responses

> 200 Response

```json
{
  "TransitGatewayConnectPeerAssociation": {
    "TransitGatewayConnectPeerArn": {},
    "GlobalNetworkId": {},
    "DeviceId": {},
    "LinkId": {},
    "State": {}
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

<h3 id="associatetransitgatewayconnectpeer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateTransitGatewayConnectPeerResponse](#schemaassociatetransitgatewayconnectpeerresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateConnectAttachment

<a id="opIdCreateConnectAttachment"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/connect-attachments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "CoreNetworkId": "string",
    "EdgeLocation": "string",
    "TransportAttachmentId": "string",
    "Options": {
      "Protocol": {}
    },
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "ClientToken": "string"
  }'
```

`POST /connect-attachments`

<p>Creates a core network Connect attachment from a specified core network attachment. </p> <p>A core network Connect attachment is a GRE-based tunnel attachment that you can use to establish a connection between a core network and an appliance. A core network Connect attachment uses an existing VPC attachment as the underlying transport mechanism.</p>

> Body parameter

```json
{
  "CoreNetworkId": "string",
  "EdgeLocation": "string",
  "TransportAttachmentId": "string",
  "Options": {
    "Protocol": {}
  },
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ],
  "ClientToken": "string"
}
```

<h3 id="createconnectattachment-parameters">Parameters</h3>

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
|» CoreNetworkId|body|string|true|The ID of a core network where you want to create the attachment. |
|» EdgeLocation|body|string|true|The Region where the edge is located.|
|» TransportAttachmentId|body|string|true|The ID of the attachment between the two connections.|
|» Options|body|object|true|Describes a core network Connect attachment options.|
|» » Protocol|body|object|false|none|
|» Tags|body|[[Tag](#schematag)]|false|The list of key-value tags associated with the request.|
|» ClientToken|body|string|false|The client token associated with the request.|

> Example responses

> 200 Response

```json
{
  "ConnectAttachment": {
    "Attachment": {
      "CoreNetworkId": {},
      "CoreNetworkArn": {},
      "AttachmentId": {},
      "OwnerAccountId": {},
      "AttachmentType": {},
      "State": {},
      "EdgeLocation": {},
      "ResourceArn": {},
      "AttachmentPolicyRuleNumber": {},
      "SegmentName": {},
      "Tags": {},
      "ProposedSegmentChange": {
        "Tags": {},
        "AttachmentPolicyRuleNumber": {},
        "SegmentName": {}
      },
      "CreatedAt": {},
      "UpdatedAt": {}
    },
    "TransportAttachmentId": {},
    "Options": {
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

<h3 id="createconnectattachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateConnectAttachmentResponse](#schemacreateconnectattachmentresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListConnectPeers

<a id="opIdListConnectPeers"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/connect-peers \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /connect-peers`

Returns a list of core network Connect peers.

<h3 id="listconnectpeers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|coreNetworkId|query|string|false|The ID of a core network.|
|connectAttachmentId|query|string|false|The ID of the attachment.|
|maxResults|query|integer|false|The maximum number of results to return.|
|nextToken|query|string|false|The token for the next page of results.|
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
  "ConnectPeers": {},
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

<h3 id="listconnectpeers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListConnectPeersResponse](#schemalistconnectpeersresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateConnectPeer

<a id="opIdCreateConnectPeer"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/connect-peers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ConnectAttachmentId": "string",
    "CoreNetworkAddress": "string",
    "PeerAddress": "string",
    "BgpOptions": {
      "PeerAsn": {}
    },
    "InsideCidrBlocks": [
      "string"
    ],
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "ClientToken": "string"
  }'
```

`POST /connect-peers`

Creates a core network Connect peer for a specified core network connect attachment between a core network and an appliance. The peer address and transit gateway address must be the same IP address family (IPv4 or IPv6).

> Body parameter

```json
{
  "ConnectAttachmentId": "string",
  "CoreNetworkAddress": "string",
  "PeerAddress": "string",
  "BgpOptions": {
    "PeerAsn": {}
  },
  "InsideCidrBlocks": [
    "string"
  ],
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ],
  "ClientToken": "string"
}
```

<h3 id="createconnectpeer-parameters">Parameters</h3>

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
|» ConnectAttachmentId|body|string|true|The ID of the connection attachment.|
|» CoreNetworkAddress|body|string|false|A Connect peer core network address.|
|» PeerAddress|body|string|true|The Connect peer address.|
|» BgpOptions|body|object|false|Describes the BGP options.|
|» » PeerAsn|body|object|false|none|
|» InsideCidrBlocks|body|[[ConstrainedString](#schemaconstrainedstring)]|true|The inside IP addresses used for BGP peering.|
|» Tags|body|[[Tag](#schematag)]|false|The tags associated with the peer request.|
|» ClientToken|body|string|false|The client token associated with the request.|

> Example responses

> 200 Response

```json
{
  "ConnectPeer": {
    "CoreNetworkId": {},
    "ConnectAttachmentId": {},
    "ConnectPeerId": {},
    "EdgeLocation": {},
    "State": {},
    "CreatedAt": {},
    "Configuration": {
      "CoreNetworkAddress": {},
      "PeerAddress": {},
      "InsideCidrBlocks": {},
      "Protocol": {},
      "BgpConfigurations": {}
    },
    "Tags": {}
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

<h3 id="createconnectpeer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateConnectPeerResponse](#schemacreateconnectpeerresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetConnections

<a id="opIdGetConnections"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/global-networks/string/connections \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /global-networks/{globalNetworkId}/connections`

Gets information about one or more of your connections in a global network.

<h3 id="getconnections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|globalNetworkId|path|string|true|The ID of the global network.|
|connectionIds|query|[[ConnectionId](#schemaconnectionid)]|false|One or more connection IDs.|
|deviceId|query|string|false|The ID of the device.|
|maxResults|query|integer|false|The maximum number of results to return.|
|nextToken|query|string|false|The token for the next page of results.|
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
  "Connections": {},
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

<h3 id="getconnections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetConnectionsResponse](#schemagetconnectionsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateConnection

<a id="opIdCreateConnection"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/global-networks/string/connections \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "DeviceId": "string",
    "ConnectedDeviceId": "string",
    "LinkId": "string",
    "ConnectedLinkId": "string",
    "Description": "string",
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ]
  }'
```

`POST /global-networks/{globalNetworkId}/connections`

Creates a connection between two devices. The devices can be a physical or virtual appliance that connects to a third-party appliance in a VPC, or a physical appliance that connects to another physical appliance in an on-premises network.

> Body parameter

```json
{
  "DeviceId": "string",
  "ConnectedDeviceId": "string",
  "LinkId": "string",
  "ConnectedLinkId": "string",
  "Description": "string",
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

<h3 id="createconnection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|globalNetworkId|path|string|true|The ID of the global network.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» DeviceId|body|string|true|The ID of the first device in the connection.|
|» ConnectedDeviceId|body|string|true|The ID of the second device in the connection.|
|» LinkId|body|string|false|The ID of the link for the first device.|
|» ConnectedLinkId|body|string|false|The ID of the link for the second device.|
|» Description|body|string|false|<p>A description of the connection.</p> <p>Length Constraints: Maximum length of 256 characters.</p>|
|» Tags|body|[[Tag](#schematag)]|false|The tags to apply to the resource during creation.|

> Example responses

> 200 Response

```json
{
  "Connection": {
    "ConnectionId": {},
    "ConnectionArn": {},
    "GlobalNetworkId": {},
    "DeviceId": {},
    "ConnectedDeviceId": {},
    "LinkId": {},
    "ConnectedLinkId": {},
    "Description": {},
    "CreatedAt": {},
    "State": {},
    "Tags": {}
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

<h3 id="createconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateConnectionResponse](#schemacreateconnectionresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListCoreNetworks

<a id="opIdListCoreNetworks"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/core-networks \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /core-networks`

Returns a list of owned and shared core networks.

<h3 id="listcorenetworks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|The maximum number of results to return.|
|nextToken|query|string|false|The token for the next page of results.|
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
  "CoreNetworks": {},
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

<h3 id="listcorenetworks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListCoreNetworksResponse](#schemalistcorenetworksresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateCoreNetwork

<a id="opIdCreateCoreNetwork"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/core-networks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "GlobalNetworkId": "string",
    "Description": "string",
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "PolicyDocument": "string",
    "ClientToken": "string"
  }'
```

`POST /core-networks`

Creates a core network as part of your global network, and optionally, with a core network policy.

> Body parameter

```json
{
  "GlobalNetworkId": "string",
  "Description": "string",
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ],
  "PolicyDocument": "string",
  "ClientToken": "string"
}
```

<h3 id="createcorenetwork-parameters">Parameters</h3>

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
|» GlobalNetworkId|body|string|true|The ID of the global network that a core network will be a part of. |
|» Description|body|string|false|The description of a core network.|
|» Tags|body|[[Tag](#schematag)]|false|Key-value tags associated with a core network request.|
|» PolicyDocument|body|string|false|The policy document for creating a core network.|
|» ClientToken|body|string|false|The client token associated with a core network request.|

> Example responses

> 200 Response

```json
{
  "CoreNetwork": {
    "GlobalNetworkId": {},
    "CoreNetworkId": {},
    "CoreNetworkArn": {},
    "Description": {},
    "CreatedAt": {},
    "State": {},
    "Segments": {},
    "Edges": {},
    "Tags": {}
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

<h3 id="createcorenetwork-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateCoreNetworkResponse](#schemacreatecorenetworkresponse)|
|480|480|CoreNetworkPolicyException|[CoreNetworkPolicyException](#schemacorenetworkpolicyexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDevices

<a id="opIdGetDevices"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/global-networks/string/devices \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /global-networks/{globalNetworkId}/devices`

Gets information about one or more of your devices in a global network.

<h3 id="getdevices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|globalNetworkId|path|string|true|The ID of the global network.|
|deviceIds|query|[[DeviceId](#schemadeviceid)]|false|One or more device IDs. The maximum is 10.|
|siteId|query|string|false|The ID of the site.|
|maxResults|query|integer|false|The maximum number of results to return.|
|nextToken|query|string|false|The token for the next page of results.|
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
  "Devices": {},
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

<h3 id="getdevices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDevicesResponse](#schemagetdevicesresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDevice

<a id="opIdCreateDevice"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/global-networks/string/devices \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AWSLocation": {
      "Zone": {},
      "SubnetArn": {}
    },
    "Description": "string",
    "Type": "string",
    "Vendor": "string",
    "Model": "string",
    "SerialNumber": "string",
    "Location": {
      "Address": {},
      "Latitude": {},
      "Longitude": {}
    },
    "SiteId": "string",
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ]
  }'
```

`POST /global-networks/{globalNetworkId}/devices`

Creates a new device in a global network. If you specify both a site ID and a location, the location of the site is used for visualization in the Network Manager console.

> Body parameter

```json
{
  "AWSLocation": {
    "Zone": {},
    "SubnetArn": {}
  },
  "Description": "string",
  "Type": "string",
  "Vendor": "string",
  "Model": "string",
  "SerialNumber": "string",
  "Location": {
    "Address": {},
    "Latitude": {},
    "Longitude": {}
  },
  "SiteId": "string",
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

<h3 id="createdevice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|globalNetworkId|path|string|true|The ID of the global network.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» AWSLocation|body|object|false|Specifies a location in Amazon Web Services.|
|» » Zone|body|object|false|none|
|» » SubnetArn|body|object|false|none|
|» Description|body|string|false|<p>A description of the device.</p> <p>Constraints: Maximum length of 256 characters.</p>|
|» Type|body|string|false|The type of the device.|
|» Vendor|body|string|false|<p>The vendor of the device.</p> <p>Constraints: Maximum length of 128 characters.</p>|
|» Model|body|string|false|<p>The model of the device.</p> <p>Constraints: Maximum length of 128 characters.</p>|
|» SerialNumber|body|string|false|<p>The serial number of the device.</p> <p>Constraints: Maximum length of 128 characters.</p>|
|» Location|body|object|false|Describes a location.|
|» » Address|body|object|false|none|
|» » Latitude|body|object|false|none|
|» » Longitude|body|object|false|none|
|» SiteId|body|string|false|The ID of the site.|
|» Tags|body|[[Tag](#schematag)]|false|The tags to apply to the resource during creation.|

> Example responses

> 200 Response

```json
{
  "Device": {
    "DeviceId": {},
    "DeviceArn": {},
    "GlobalNetworkId": {},
    "AWSLocation": {
      "Zone": {},
      "SubnetArn": {}
    },
    "Description": {},
    "Type": {},
    "Vendor": {},
    "Model": {},
    "SerialNumber": {},
    "Location": {
      "Address": {},
      "Latitude": {},
      "Longitude": {}
    },
    "SiteId": {},
    "CreatedAt": {},
    "State": {},
    "Tags": {}
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

<h3 id="createdevice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDeviceResponse](#schemacreatedeviceresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeGlobalNetworks

<a id="opIdDescribeGlobalNetworks"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/global-networks \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /global-networks`

Describes one or more global networks. By default, all global networks are described. To describe the objects in your global network, you must use the appropriate <code>Get*</code> action. For example, to list the transit gateways in your global network, use <a>GetTransitGatewayRegistrations</a>.

<h3 id="describeglobalnetworks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|globalNetworkIds|query|[[GlobalNetworkId](#schemaglobalnetworkid)]|false|The IDs of one or more global networks. The maximum is 10.|
|maxResults|query|integer|false|The maximum number of results to return.|
|nextToken|query|string|false|The token for the next page of results.|
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
  "GlobalNetworks": {},
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

<h3 id="describeglobalnetworks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeGlobalNetworksResponse](#schemadescribeglobalnetworksresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateGlobalNetwork

<a id="opIdCreateGlobalNetwork"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/global-networks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Description": "string",
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ]
  }'
```

`POST /global-networks`

Creates a new, empty global network.

> Body parameter

```json
{
  "Description": "string",
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

<h3 id="createglobalnetwork-parameters">Parameters</h3>

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
|» Description|body|string|false|<p>A description of the global network.</p> <p>Constraints: Maximum length of 256 characters.</p>|
|» Tags|body|[[Tag](#schematag)]|false|The tags to apply to the resource during creation.|

> Example responses

> 200 Response

```json
{
  "GlobalNetwork": {
    "GlobalNetworkId": {},
    "GlobalNetworkArn": {},
    "Description": {},
    "CreatedAt": {},
    "State": {},
    "Tags": {}
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

<h3 id="createglobalnetwork-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateGlobalNetworkResponse](#schemacreateglobalnetworkresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetLinks

<a id="opIdGetLinks"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/global-networks/string/links \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /global-networks/{globalNetworkId}/links`

<p>Gets information about one or more links in a specified global network.</p> <p>If you specify the site ID, you cannot specify the type or provider in the same request. You can specify the type and provider in the same request.</p>

<h3 id="getlinks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|globalNetworkId|path|string|true|The ID of the global network.|
|linkIds|query|[[LinkId](#schemalinkid)]|false|One or more link IDs. The maximum is 10.|
|siteId|query|string|false|The ID of the site.|
|type|query|string|false|The link type.|
|provider|query|string|false|The link provider.|
|maxResults|query|integer|false|The maximum number of results to return.|
|nextToken|query|string|false|The token for the next page of results.|
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
  "Links": {},
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

<h3 id="getlinks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetLinksResponse](#schemagetlinksresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateLink

<a id="opIdCreateLink"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/global-networks/string/links \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Description": "string",
    "Type": "string",
    "Bandwidth": {
      "UploadSpeed": {},
      "DownloadSpeed": {}
    },
    "Provider": "string",
    "SiteId": "string",
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ]
  }'
```

`POST /global-networks/{globalNetworkId}/links`

Creates a new link for a specified site.

> Body parameter

```json
{
  "Description": "string",
  "Type": "string",
  "Bandwidth": {
    "UploadSpeed": {},
    "DownloadSpeed": {}
  },
  "Provider": "string",
  "SiteId": "string",
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

<h3 id="createlink-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|globalNetworkId|path|string|true|The ID of the global network.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Description|body|string|false|<p>A description of the link.</p> <p>Constraints: Maximum length of 256 characters.</p>|
|» Type|body|string|false|<p>The type of the link.</p> <p>Constraints: Maximum length of 128 characters. Cannot include the following characters: \| \ ^</p>|
|» Bandwidth|body|object|true|Describes bandwidth information.|
|» » UploadSpeed|body|object|false|none|
|» » DownloadSpeed|body|object|false|none|
|» Provider|body|string|false|<p>The provider of the link.</p> <p>Constraints: Maximum length of 128 characters. Cannot include the following characters: \| \ ^</p>|
|» SiteId|body|string|true|The ID of the site.|
|» Tags|body|[[Tag](#schematag)]|false|The tags to apply to the resource during creation.|

> Example responses

> 200 Response

```json
{
  "Link": {
    "LinkId": {},
    "LinkArn": {},
    "GlobalNetworkId": {},
    "SiteId": {},
    "Description": {},
    "Type": {},
    "Bandwidth": {
      "UploadSpeed": {},
      "DownloadSpeed": {}
    },
    "Provider": {},
    "CreatedAt": {},
    "State": {},
    "Tags": {}
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

<h3 id="createlink-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateLinkResponse](#schemacreatelinkresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSites

<a id="opIdGetSites"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/global-networks/string/sites \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /global-networks/{globalNetworkId}/sites`

Gets information about one or more of your sites in a global network.

<h3 id="getsites-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|globalNetworkId|path|string|true|The ID of the global network.|
|siteIds|query|[[SiteId](#schemasiteid)]|false|One or more site IDs. The maximum is 10.|
|maxResults|query|integer|false|The maximum number of results to return.|
|nextToken|query|string|false|The token for the next page of results.|
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
  "Sites": {},
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

<h3 id="getsites-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSitesResponse](#schemagetsitesresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateSite

<a id="opIdCreateSite"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/global-networks/string/sites \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Description": "string",
    "Location": {
      "Address": {},
      "Latitude": {},
      "Longitude": {}
    },
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ]
  }'
```

`POST /global-networks/{globalNetworkId}/sites`

Creates a new site in a global network.

> Body parameter

```json
{
  "Description": "string",
  "Location": {
    "Address": {},
    "Latitude": {},
    "Longitude": {}
  },
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

<h3 id="createsite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|globalNetworkId|path|string|true|The ID of the global network.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Description|body|string|false|<p>A description of your site.</p> <p>Constraints: Maximum length of 256 characters.</p>|
|» Location|body|object|false|Describes a location.|
|» » Address|body|object|false|none|
|» » Latitude|body|object|false|none|
|» » Longitude|body|object|false|none|
|» Tags|body|[[Tag](#schematag)]|false|The tags to apply to the resource during creation.|

> Example responses

> 200 Response

```json
{
  "Site": {
    "SiteId": {},
    "SiteArn": {},
    "GlobalNetworkId": {},
    "Description": {},
    "Location": {
      "Address": {},
      "Latitude": {},
      "Longitude": {}
    },
    "CreatedAt": {},
    "State": {},
    "Tags": {}
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

<h3 id="createsite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateSiteResponse](#schemacreatesiteresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateSiteToSiteVpnAttachment

<a id="opIdCreateSiteToSiteVpnAttachment"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/site-to-site-vpn-attachments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "CoreNetworkId": "string",
    "VpnConnectionArn": "string",
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "ClientToken": "string"
  }'
```

`POST /site-to-site-vpn-attachments`

Creates an Amazon Web Services site-to-site VPN attachment on an edge location of a core network.

> Body parameter

```json
{
  "CoreNetworkId": "string",
  "VpnConnectionArn": "string",
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ],
  "ClientToken": "string"
}
```

<h3 id="createsitetositevpnattachment-parameters">Parameters</h3>

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
|» CoreNetworkId|body|string|true|The ID of a core network where you're creating a site-to-site VPN attachment.|
|» VpnConnectionArn|body|string|true|The ARN identifying the VPN attachment.|
|» Tags|body|[[Tag](#schematag)]|false|The tags associated with the request.|
|» ClientToken|body|string|false|The client token associated with the request.|

> Example responses

> 200 Response

```json
{
  "SiteToSiteVpnAttachment": {
    "Attachment": {
      "CoreNetworkId": {},
      "CoreNetworkArn": {},
      "AttachmentId": {},
      "OwnerAccountId": {},
      "AttachmentType": {},
      "State": {},
      "EdgeLocation": {},
      "ResourceArn": {},
      "AttachmentPolicyRuleNumber": {},
      "SegmentName": {},
      "Tags": {},
      "ProposedSegmentChange": {
        "Tags": {},
        "AttachmentPolicyRuleNumber": {},
        "SegmentName": {}
      },
      "CreatedAt": {},
      "UpdatedAt": {}
    },
    "VpnConnectionArn": {}
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

<h3 id="createsitetositevpnattachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateSiteToSiteVpnAttachmentResponse](#schemacreatesitetositevpnattachmentresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateTransitGatewayPeering

<a id="opIdCreateTransitGatewayPeering"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/transit-gateway-peerings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "CoreNetworkId": "string",
    "TransitGatewayArn": "string",
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "ClientToken": "string"
  }'
```

`POST /transit-gateway-peerings`

Creates a transit gateway peering connection.

> Body parameter

```json
{
  "CoreNetworkId": "string",
  "TransitGatewayArn": "string",
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ],
  "ClientToken": "string"
}
```

<h3 id="createtransitgatewaypeering-parameters">Parameters</h3>

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
|» CoreNetworkId|body|string|true|The ID of a core network.|
|» TransitGatewayArn|body|string|true|The ARN of the transit gateway for the peering request.|
|» Tags|body|[[Tag](#schematag)]|false|The list of key-value tags associated with the request.|
|» ClientToken|body|string|false|The client token associated with the request.|

> Example responses

> 200 Response

```json
{
  "TransitGatewayPeering": {
    "Peering": {
      "CoreNetworkId": {},
      "CoreNetworkArn": {},
      "PeeringId": {},
      "OwnerAccountId": {},
      "PeeringType": {},
      "State": {},
      "EdgeLocation": {},
      "ResourceArn": {},
      "Tags": {},
      "CreatedAt": {}
    },
    "TransitGatewayArn": {},
    "TransitGatewayPeeringAttachmentId": {}
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

<h3 id="createtransitgatewaypeering-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateTransitGatewayPeeringResponse](#schemacreatetransitgatewaypeeringresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateTransitGatewayRouteTableAttachment

<a id="opIdCreateTransitGatewayRouteTableAttachment"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/transit-gateway-route-table-attachments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "PeeringId": "string",
    "TransitGatewayRouteTableArn": "string",
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "ClientToken": "string"
  }'
```

`POST /transit-gateway-route-table-attachments`

Creates a transit gateway route table attachment.

> Body parameter

```json
{
  "PeeringId": "string",
  "TransitGatewayRouteTableArn": "string",
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ],
  "ClientToken": "string"
}
```

<h3 id="createtransitgatewayroutetableattachment-parameters">Parameters</h3>

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
|» PeeringId|body|string|true|The ID of the peer for the |
|» TransitGatewayRouteTableArn|body|string|true|The ARN of the transit gateway route table for the attachment request. For example, <code>"TransitGatewayRouteTableArn": "arn:aws:ec2:us-west-2:123456789012:transit-gateway-route-table/tgw-rtb-9876543210123456"</code>.|
|» Tags|body|[[Tag](#schematag)]|false|The list of key-value tags associated with the request.|
|» ClientToken|body|string|false|The client token associated with the request.|

> Example responses

> 200 Response

```json
{
  "TransitGatewayRouteTableAttachment": {
    "Attachment": {
      "CoreNetworkId": {},
      "CoreNetworkArn": {},
      "AttachmentId": {},
      "OwnerAccountId": {},
      "AttachmentType": {},
      "State": {},
      "EdgeLocation": {},
      "ResourceArn": {},
      "AttachmentPolicyRuleNumber": {},
      "SegmentName": {},
      "Tags": {},
      "ProposedSegmentChange": {
        "Tags": {},
        "AttachmentPolicyRuleNumber": {},
        "SegmentName": {}
      },
      "CreatedAt": {},
      "UpdatedAt": {}
    },
    "PeeringId": {},
    "TransitGatewayRouteTableArn": {}
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

<h3 id="createtransitgatewayroutetableattachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateTransitGatewayRouteTableAttachmentResponse](#schemacreatetransitgatewayroutetableattachmentresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateVpcAttachment

<a id="opIdCreateVpcAttachment"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/vpc-attachments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "CoreNetworkId": "string",
    "VpcArn": "string",
    "SubnetArns": [
      "string"
    ],
    "Options": {
      "Ipv6Support": {},
      "ApplianceModeSupport": {}
    },
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "ClientToken": "string"
  }'
```

`POST /vpc-attachments`

Creates a VPC attachment on an edge location of a core network.

> Body parameter

```json
{
  "CoreNetworkId": "string",
  "VpcArn": "string",
  "SubnetArns": [
    "string"
  ],
  "Options": {
    "Ipv6Support": {},
    "ApplianceModeSupport": {}
  },
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ],
  "ClientToken": "string"
}
```

<h3 id="createvpcattachment-parameters">Parameters</h3>

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
|» CoreNetworkId|body|string|true|The ID of a core network for the VPC attachment.|
|» VpcArn|body|string|true|The ARN of the VPC.|
|» SubnetArns|body|[[SubnetArn](#schemasubnetarn)]|true|The subnet ARN of the VPC attachment.|
|» Options|body|object|false|Describes the VPC options.|
|» » Ipv6Support|body|object|false|none|
|» » ApplianceModeSupport|body|object|false|none|
|» Tags|body|[[Tag](#schematag)]|false|The key-value tags associated with the request.|
|» ClientToken|body|string|false|The client token associated with the request.|

> Example responses

> 200 Response

```json
{
  "VpcAttachment": {
    "Attachment": {
      "CoreNetworkId": {},
      "CoreNetworkArn": {},
      "AttachmentId": {},
      "OwnerAccountId": {},
      "AttachmentType": {},
      "State": {},
      "EdgeLocation": {},
      "ResourceArn": {},
      "AttachmentPolicyRuleNumber": {},
      "SegmentName": {},
      "Tags": {},
      "ProposedSegmentChange": {
        "Tags": {},
        "AttachmentPolicyRuleNumber": {},
        "SegmentName": {}
      },
      "CreatedAt": {},
      "UpdatedAt": {}
    },
    "SubnetArns": {},
    "Options": {
      "Ipv6Support": {},
      "ApplianceModeSupport": {}
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

<h3 id="createvpcattachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateVpcAttachmentResponse](#schemacreatevpcattachmentresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAttachment

<a id="opIdDeleteAttachment"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/attachments/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /attachments/{attachmentId}`

Deletes an attachment. Supports all attachment types.

<h3 id="deleteattachment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|attachmentId|path|string|true|The ID of the attachment to delete.|
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
  "Attachment": {
    "CoreNetworkId": {},
    "CoreNetworkArn": {},
    "AttachmentId": {},
    "OwnerAccountId": {},
    "AttachmentType": {},
    "State": {},
    "EdgeLocation": {},
    "ResourceArn": {},
    "AttachmentPolicyRuleNumber": {},
    "SegmentName": {},
    "Tags": {},
    "ProposedSegmentChange": {
      "Tags": {},
      "AttachmentPolicyRuleNumber": {},
      "SegmentName": {}
    },
    "CreatedAt": {},
    "UpdatedAt": {}
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

<h3 id="deleteattachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteAttachmentResponse](#schemadeleteattachmentresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetConnectPeer

<a id="opIdGetConnectPeer"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/connect-peers/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /connect-peers/{connectPeerId}`

Returns information about a core network Connect peer.

<h3 id="getconnectpeer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|connectPeerId|path|string|true|The ID of the Connect peer.|
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
  "ConnectPeer": {
    "CoreNetworkId": {},
    "ConnectAttachmentId": {},
    "ConnectPeerId": {},
    "EdgeLocation": {},
    "State": {},
    "CreatedAt": {},
    "Configuration": {
      "CoreNetworkAddress": {},
      "PeerAddress": {},
      "InsideCidrBlocks": {},
      "Protocol": {},
      "BgpConfigurations": {}
    },
    "Tags": {}
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

<h3 id="getconnectpeer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetConnectPeerResponse](#schemagetconnectpeerresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteConnectPeer

<a id="opIdDeleteConnectPeer"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/connect-peers/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /connect-peers/{connectPeerId}`

Deletes a Connect peer.

<h3 id="deleteconnectpeer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|connectPeerId|path|string|true|The ID of the deleted Connect peer.|
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
  "ConnectPeer": {
    "CoreNetworkId": {},
    "ConnectAttachmentId": {},
    "ConnectPeerId": {},
    "EdgeLocation": {},
    "State": {},
    "CreatedAt": {},
    "Configuration": {
      "CoreNetworkAddress": {},
      "PeerAddress": {},
      "InsideCidrBlocks": {},
      "Protocol": {},
      "BgpConfigurations": {}
    },
    "Tags": {}
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

<h3 id="deleteconnectpeer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteConnectPeerResponse](#schemadeleteconnectpeerresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteConnection

<a id="opIdDeleteConnection"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/global-networks/string/connections/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /global-networks/{globalNetworkId}/connections/{connectionId}`

Deletes the specified connection in your global network.

<h3 id="deleteconnection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|globalNetworkId|path|string|true|The ID of the global network.|
|connectionId|path|string|true|The ID of the connection.|
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
  "Connection": {
    "ConnectionId": {},
    "ConnectionArn": {},
    "GlobalNetworkId": {},
    "DeviceId": {},
    "ConnectedDeviceId": {},
    "LinkId": {},
    "ConnectedLinkId": {},
    "Description": {},
    "CreatedAt": {},
    "State": {},
    "Tags": {}
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

<h3 id="deleteconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteConnectionResponse](#schemadeleteconnectionresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateConnection

<a id="opIdUpdateConnection"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/global-networks/string/connections/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "LinkId": "string",
    "ConnectedLinkId": "string",
    "Description": "string"
  }'
```

`PATCH /global-networks/{globalNetworkId}/connections/{connectionId}`

Updates the information for an existing connection. To remove information for any of the parameters, specify an empty string.

> Body parameter

```json
{
  "LinkId": "string",
  "ConnectedLinkId": "string",
  "Description": "string"
}
```

<h3 id="updateconnection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|globalNetworkId|path|string|true|The ID of the global network.|
|connectionId|path|string|true|The ID of the connection.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» LinkId|body|string|false|The ID of the link for the first device in the connection.|
|» ConnectedLinkId|body|string|false|The ID of the link for the second device in the connection.|
|» Description|body|string|false|<p>A description of the connection.</p> <p>Length Constraints: Maximum length of 256 characters.</p>|

> Example responses

> 200 Response

```json
{
  "Connection": {
    "ConnectionId": {},
    "ConnectionArn": {},
    "GlobalNetworkId": {},
    "DeviceId": {},
    "ConnectedDeviceId": {},
    "LinkId": {},
    "ConnectedLinkId": {},
    "Description": {},
    "CreatedAt": {},
    "State": {},
    "Tags": {}
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

<h3 id="updateconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateConnectionResponse](#schemaupdateconnectionresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCoreNetwork

<a id="opIdGetCoreNetwork"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/core-networks/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /core-networks/{coreNetworkId}`

Returns information about the LIVE policy for a core network.

<h3 id="getcorenetwork-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|coreNetworkId|path|string|true|The ID of a core network.|
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
  "CoreNetwork": {
    "GlobalNetworkId": {},
    "CoreNetworkId": {},
    "CoreNetworkArn": {},
    "Description": {},
    "CreatedAt": {},
    "State": {},
    "Segments": {},
    "Edges": {},
    "Tags": {}
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

<h3 id="getcorenetwork-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCoreNetworkResponse](#schemagetcorenetworkresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteCoreNetwork

<a id="opIdDeleteCoreNetwork"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/core-networks/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /core-networks/{coreNetworkId}`

Deletes a core network along with all core network policies. This can only be done if there are no attachments on a core network.

<h3 id="deletecorenetwork-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|coreNetworkId|path|string|true|The network ID of the deleted core network.|
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
  "CoreNetwork": {
    "GlobalNetworkId": {},
    "CoreNetworkId": {},
    "CoreNetworkArn": {},
    "Description": {},
    "CreatedAt": {},
    "State": {},
    "Segments": {},
    "Edges": {},
    "Tags": {}
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

<h3 id="deletecorenetwork-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteCoreNetworkResponse](#schemadeletecorenetworkresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateCoreNetwork

<a id="opIdUpdateCoreNetwork"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/core-networks/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Description": "string"
  }'
```

`PATCH /core-networks/{coreNetworkId}`

Updates the description of a core network.

> Body parameter

```json
{
  "Description": "string"
}
```

<h3 id="updatecorenetwork-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|coreNetworkId|path|string|true|The ID of a core network.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Description|body|string|false|The description of the update.|

> Example responses

> 200 Response

```json
{
  "CoreNetwork": {
    "GlobalNetworkId": {},
    "CoreNetworkId": {},
    "CoreNetworkArn": {},
    "Description": {},
    "CreatedAt": {},
    "State": {},
    "Segments": {},
    "Edges": {},
    "Tags": {}
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

<h3 id="updatecorenetwork-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateCoreNetworkResponse](#schemaupdatecorenetworkresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteCoreNetworkPolicyVersion

<a id="opIdDeleteCoreNetworkPolicyVersion"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/core-networks/string/core-network-policy-versions/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /core-networks/{coreNetworkId}/core-network-policy-versions/{policyVersionId}`

Deletes a policy version from a core network. You can't delete the current LIVE policy.

<h3 id="deletecorenetworkpolicyversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|coreNetworkId|path|string|true|The ID of a core network for the deleted policy.|
|policyVersionId|path|integer|true|The version ID of the deleted policy.|
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
  "CoreNetworkPolicy": {
    "CoreNetworkId": {},
    "PolicyVersionId": {},
    "Alias": {},
    "Description": {},
    "CreatedAt": {},
    "ChangeSetState": {},
    "PolicyErrors": {},
    "PolicyDocument": {}
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

<h3 id="deletecorenetworkpolicyversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteCoreNetworkPolicyVersionResponse](#schemadeletecorenetworkpolicyversionresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDevice

<a id="opIdDeleteDevice"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/global-networks/string/devices/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /global-networks/{globalNetworkId}/devices/{deviceId}`

Deletes an existing device. You must first disassociate the device from any links and customer gateways.

<h3 id="deletedevice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|globalNetworkId|path|string|true|The ID of the global network.|
|deviceId|path|string|true|The ID of the device.|
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
  "Device": {
    "DeviceId": {},
    "DeviceArn": {},
    "GlobalNetworkId": {},
    "AWSLocation": {
      "Zone": {},
      "SubnetArn": {}
    },
    "Description": {},
    "Type": {},
    "Vendor": {},
    "Model": {},
    "SerialNumber": {},
    "Location": {
      "Address": {},
      "Latitude": {},
      "Longitude": {}
    },
    "SiteId": {},
    "CreatedAt": {},
    "State": {},
    "Tags": {}
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

<h3 id="deletedevice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteDeviceResponse](#schemadeletedeviceresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDevice

<a id="opIdUpdateDevice"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/global-networks/string/devices/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AWSLocation": {
      "Zone": {},
      "SubnetArn": {}
    },
    "Description": "string",
    "Type": "string",
    "Vendor": "string",
    "Model": "string",
    "SerialNumber": "string",
    "Location": {
      "Address": {},
      "Latitude": {},
      "Longitude": {}
    },
    "SiteId": "string"
  }'
```

`PATCH /global-networks/{globalNetworkId}/devices/{deviceId}`

Updates the details for an existing device. To remove information for any of the parameters, specify an empty string.

> Body parameter

```json
{
  "AWSLocation": {
    "Zone": {},
    "SubnetArn": {}
  },
  "Description": "string",
  "Type": "string",
  "Vendor": "string",
  "Model": "string",
  "SerialNumber": "string",
  "Location": {
    "Address": {},
    "Latitude": {},
    "Longitude": {}
  },
  "SiteId": "string"
}
```

<h3 id="updatedevice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|globalNetworkId|path|string|true|The ID of the global network.|
|deviceId|path|string|true|The ID of the device.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» AWSLocation|body|object|false|Specifies a location in Amazon Web Services.|
|» » Zone|body|object|false|none|
|» » SubnetArn|body|object|false|none|
|» Description|body|string|false|<p>A description of the device.</p> <p>Constraints: Maximum length of 256 characters.</p>|
|» Type|body|string|false|The type of the device.|
|» Vendor|body|string|false|<p>The vendor of the device.</p> <p>Constraints: Maximum length of 128 characters.</p>|
|» Model|body|string|false|<p>The model of the device.</p> <p>Constraints: Maximum length of 128 characters.</p>|
|» SerialNumber|body|string|false|<p>The serial number of the device.</p> <p>Constraints: Maximum length of 128 characters.</p>|
|» Location|body|object|false|Describes a location.|
|» » Address|body|object|false|none|
|» » Latitude|body|object|false|none|
|» » Longitude|body|object|false|none|
|» SiteId|body|string|false|The ID of the site.|

> Example responses

> 200 Response

```json
{
  "Device": {
    "DeviceId": {},
    "DeviceArn": {},
    "GlobalNetworkId": {},
    "AWSLocation": {
      "Zone": {},
      "SubnetArn": {}
    },
    "Description": {},
    "Type": {},
    "Vendor": {},
    "Model": {},
    "SerialNumber": {},
    "Location": {
      "Address": {},
      "Latitude": {},
      "Longitude": {}
    },
    "SiteId": {},
    "CreatedAt": {},
    "State": {},
    "Tags": {}
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

<h3 id="updatedevice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDeviceResponse](#schemaupdatedeviceresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteGlobalNetwork

<a id="opIdDeleteGlobalNetwork"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/global-networks/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /global-networks/{globalNetworkId}`

Deletes an existing global network. You must first delete all global network objects (devices, links, and sites), deregister all transit gateways, and delete any core networks.

<h3 id="deleteglobalnetwork-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|globalNetworkId|path|string|true|The ID of the global network.|
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
  "GlobalNetwork": {
    "GlobalNetworkId": {},
    "GlobalNetworkArn": {},
    "Description": {},
    "CreatedAt": {},
    "State": {},
    "Tags": {}
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

<h3 id="deleteglobalnetwork-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteGlobalNetworkResponse](#schemadeleteglobalnetworkresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateGlobalNetwork

<a id="opIdUpdateGlobalNetwork"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/global-networks/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Description": "string"
  }'
```

`PATCH /global-networks/{globalNetworkId}`

Updates an existing global network. To remove information for any of the parameters, specify an empty string.

> Body parameter

```json
{
  "Description": "string"
}
```

<h3 id="updateglobalnetwork-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|globalNetworkId|path|string|true|The ID of your global network.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Description|body|string|false|<p>A description of the global network.</p> <p>Constraints: Maximum length of 256 characters.</p>|

> Example responses

> 200 Response

```json
{
  "GlobalNetwork": {
    "GlobalNetworkId": {},
    "GlobalNetworkArn": {},
    "Description": {},
    "CreatedAt": {},
    "State": {},
    "Tags": {}
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

<h3 id="updateglobalnetwork-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateGlobalNetworkResponse](#schemaupdateglobalnetworkresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteLink

<a id="opIdDeleteLink"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/global-networks/string/links/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /global-networks/{globalNetworkId}/links/{linkId}`

Deletes an existing link. You must first disassociate the link from any devices and customer gateways.

<h3 id="deletelink-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|globalNetworkId|path|string|true|The ID of the global network.|
|linkId|path|string|true|The ID of the link.|
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
  "Link": {
    "LinkId": {},
    "LinkArn": {},
    "GlobalNetworkId": {},
    "SiteId": {},
    "Description": {},
    "Type": {},
    "Bandwidth": {
      "UploadSpeed": {},
      "DownloadSpeed": {}
    },
    "Provider": {},
    "CreatedAt": {},
    "State": {},
    "Tags": {}
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

<h3 id="deletelink-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteLinkResponse](#schemadeletelinkresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateLink

<a id="opIdUpdateLink"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/global-networks/string/links/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Description": "string",
    "Type": "string",
    "Bandwidth": {
      "UploadSpeed": {},
      "DownloadSpeed": {}
    },
    "Provider": "string"
  }'
```

`PATCH /global-networks/{globalNetworkId}/links/{linkId}`

Updates the details for an existing link. To remove information for any of the parameters, specify an empty string.

> Body parameter

```json
{
  "Description": "string",
  "Type": "string",
  "Bandwidth": {
    "UploadSpeed": {},
    "DownloadSpeed": {}
  },
  "Provider": "string"
}
```

<h3 id="updatelink-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|globalNetworkId|path|string|true|The ID of the global network.|
|linkId|path|string|true|The ID of the link.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Description|body|string|false|<p>A description of the link.</p> <p>Constraints: Maximum length of 256 characters.</p>|
|» Type|body|string|false|<p>The type of the link.</p> <p>Constraints: Maximum length of 128 characters.</p>|
|» Bandwidth|body|object|false|Describes bandwidth information.|
|» » UploadSpeed|body|object|false|none|
|» » DownloadSpeed|body|object|false|none|
|» Provider|body|string|false|<p>The provider of the link.</p> <p>Constraints: Maximum length of 128 characters.</p>|

> Example responses

> 200 Response

```json
{
  "Link": {
    "LinkId": {},
    "LinkArn": {},
    "GlobalNetworkId": {},
    "SiteId": {},
    "Description": {},
    "Type": {},
    "Bandwidth": {
      "UploadSpeed": {},
      "DownloadSpeed": {}
    },
    "Provider": {},
    "CreatedAt": {},
    "State": {},
    "Tags": {}
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

<h3 id="updatelink-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateLinkResponse](#schemaupdatelinkresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeletePeering

<a id="opIdDeletePeering"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/peerings/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /peerings/{peeringId}`

Deletes an existing peering connection.

<h3 id="deletepeering-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|peeringId|path|string|true|The ID of the peering connection to delete.|
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
  "Peering": {
    "CoreNetworkId": {},
    "CoreNetworkArn": {},
    "PeeringId": {},
    "OwnerAccountId": {},
    "PeeringType": {},
    "State": {},
    "EdgeLocation": {},
    "ResourceArn": {},
    "Tags": {},
    "CreatedAt": {}
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

<h3 id="deletepeering-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeletePeeringResponse](#schemadeletepeeringresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetResourcePolicy

<a id="opIdGetResourcePolicy"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/resource-policy/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /resource-policy/{resourceArn}`

Returns information about a resource policy.

<h3 id="getresourcepolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The ARN of the resource.|
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
  "PolicyDocument": {}
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

<h3 id="getresourcepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetResourcePolicyResponse](#schemagetresourcepolicyresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutResourcePolicy

<a id="opIdPutResourcePolicy"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/resource-policy/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "PolicyDocument": "string"
  }'
```

`POST /resource-policy/{resourceArn}`

Creates or updates a resource policy.

> Body parameter

```json
{
  "PolicyDocument": "string"
}
```

<h3 id="putresourcepolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The ARN of the resource policy. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» PolicyDocument|body|string|true|The JSON resource policy document.|

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

<h3 id="putresourcepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutResourcePolicyResponse](#schemaputresourcepolicyresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteResourcePolicy

<a id="opIdDeleteResourcePolicy"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/resource-policy/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /resource-policy/{resourceArn}`

Deletes a resource policy for the specified resource. This revokes the access of the principals specified in the resource policy.

<h3 id="deleteresourcepolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The ARN of the policy to delete.|
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

<h3 id="deleteresourcepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteResourcePolicyResponse](#schemadeleteresourcepolicyresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteSite

<a id="opIdDeleteSite"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/global-networks/string/sites/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /global-networks/{globalNetworkId}/sites/{siteId}`

Deletes an existing site. The site cannot be associated with any device or link.

<h3 id="deletesite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|globalNetworkId|path|string|true|The ID of the global network.|
|siteId|path|string|true|The ID of the site.|
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
  "Site": {
    "SiteId": {},
    "SiteArn": {},
    "GlobalNetworkId": {},
    "Description": {},
    "Location": {
      "Address": {},
      "Latitude": {},
      "Longitude": {}
    },
    "CreatedAt": {},
    "State": {},
    "Tags": {}
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

<h3 id="deletesite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteSiteResponse](#schemadeletesiteresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateSite

<a id="opIdUpdateSite"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/global-networks/string/sites/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Description": "string",
    "Location": {
      "Address": {},
      "Latitude": {},
      "Longitude": {}
    }
  }'
```

`PATCH /global-networks/{globalNetworkId}/sites/{siteId}`

Updates the information for an existing site. To remove information for any of the parameters, specify an empty string.

> Body parameter

```json
{
  "Description": "string",
  "Location": {
    "Address": {},
    "Latitude": {},
    "Longitude": {}
  }
}
```

<h3 id="updatesite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|globalNetworkId|path|string|true|The ID of the global network.|
|siteId|path|string|true|The ID of your site.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Description|body|string|false|<p>A description of your site.</p> <p>Constraints: Maximum length of 256 characters.</p>|
|» Location|body|object|false|Describes a location.|
|» » Address|body|object|false|none|
|» » Latitude|body|object|false|none|
|» » Longitude|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "Site": {
    "SiteId": {},
    "SiteArn": {},
    "GlobalNetworkId": {},
    "Description": {},
    "Location": {
      "Address": {},
      "Latitude": {},
      "Longitude": {}
    },
    "CreatedAt": {},
    "State": {},
    "Tags": {}
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

<h3 id="updatesite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateSiteResponse](#schemaupdatesiteresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeregisterTransitGateway

<a id="opIdDeregisterTransitGateway"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/global-networks/string/transit-gateway-registrations/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /global-networks/{globalNetworkId}/transit-gateway-registrations/{transitGatewayArn}`

Deregisters a transit gateway from your global network. This action does not delete your transit gateway, or modify any of its attachments. This action removes any customer gateway associations.

<h3 id="deregistertransitgateway-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|globalNetworkId|path|string|true|The ID of the global network.|
|transitGatewayArn|path|string|true|The Amazon Resource Name (ARN) of the transit gateway.|
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
  "TransitGatewayRegistration": {
    "GlobalNetworkId": {},
    "TransitGatewayArn": {},
    "State": {
      "Code": {},
      "Message": {}
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

<h3 id="deregistertransitgateway-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeregisterTransitGatewayResponse](#schemaderegistertransitgatewayresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateConnectPeer

<a id="opIdDisassociateConnectPeer"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/global-networks/string/connect-peer-associations/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /global-networks/{globalNetworkId}/connect-peer-associations/{connectPeerId}`

Disassociates a core network Connect peer from a device and a link. 

<h3 id="disassociateconnectpeer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|globalNetworkId|path|string|true|The ID of the global network.|
|connectPeerId|path|string|true|The ID of the Connect peer to disassociate from a device.|
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
  "ConnectPeerAssociation": {
    "ConnectPeerId": {},
    "GlobalNetworkId": {},
    "DeviceId": {},
    "LinkId": {},
    "State": {}
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

<h3 id="disassociateconnectpeer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateConnectPeerResponse](#schemadisassociateconnectpeerresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateCustomerGateway

<a id="opIdDisassociateCustomerGateway"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/global-networks/string/customer-gateway-associations/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /global-networks/{globalNetworkId}/customer-gateway-associations/{customerGatewayArn}`

Disassociates a customer gateway from a device and a link.

<h3 id="disassociatecustomergateway-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|globalNetworkId|path|string|true|The ID of the global network.|
|customerGatewayArn|path|string|true|The Amazon Resource Name (ARN) of the customer gateway.|
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
  "CustomerGatewayAssociation": {
    "CustomerGatewayArn": {},
    "GlobalNetworkId": {},
    "DeviceId": {},
    "LinkId": {},
    "State": {}
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

<h3 id="disassociatecustomergateway-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateCustomerGatewayResponse](#schemadisassociatecustomergatewayresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateLink

<a id="opIdDisassociateLink"></a>

> Code samples

```bash
curl 'https://networkmanager.us-east-1.amazonaws.com/global-networks/string/link-associations#deviceId&linkId?deviceId=string&linkId=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /global-networks/{globalNetworkId}/link-associations#deviceId&linkId`

Disassociates an existing device from a link. You must first disassociate any customer gateways that are associated with the link.

<h3 id="disassociatelink-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|globalNetworkId|path|string|true|The ID of the global network.|
|deviceId|query|string|true|The ID of the device.|
|linkId|query|string|true|The ID of the link.|
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
  "LinkAssociation": {
    "GlobalNetworkId": {},
    "DeviceId": {},
    "LinkId": {},
    "LinkAssociationState": {}
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

<h3 id="disassociatelink-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateLinkResponse](#schemadisassociatelinkresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateTransitGatewayConnectPeer

<a id="opIdDisassociateTransitGatewayConnectPeer"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/global-networks/string/transit-gateway-connect-peer-associations/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /global-networks/{globalNetworkId}/transit-gateway-connect-peer-associations/{transitGatewayConnectPeerArn}`

Disassociates a transit gateway Connect peer from a device and link.

<h3 id="disassociatetransitgatewayconnectpeer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|globalNetworkId|path|string|true|The ID of the global network.|
|transitGatewayConnectPeerArn|path|string|true|The Amazon Resource Name (ARN) of the transit gateway Connect peer.|
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
  "TransitGatewayConnectPeerAssociation": {
    "TransitGatewayConnectPeerArn": {},
    "GlobalNetworkId": {},
    "DeviceId": {},
    "LinkId": {},
    "State": {}
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

<h3 id="disassociatetransitgatewayconnectpeer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateTransitGatewayConnectPeerResponse](#schemadisassociatetransitgatewayconnectpeerresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ExecuteCoreNetworkChangeSet

<a id="opIdExecuteCoreNetworkChangeSet"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/core-networks/string/core-network-change-sets/0/execute \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /core-networks/{coreNetworkId}/core-network-change-sets/{policyVersionId}/execute`

Executes a change set on your core network. Deploys changes globally based on the policy submitted..

<h3 id="executecorenetworkchangeset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|coreNetworkId|path|string|true|The ID of a core network.|
|policyVersionId|path|integer|true|The ID of the policy version.|
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

<h3 id="executecorenetworkchangeset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ExecuteCoreNetworkChangeSetResponse](#schemaexecutecorenetworkchangesetresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetConnectAttachment

<a id="opIdGetConnectAttachment"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/connect-attachments/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /connect-attachments/{attachmentId}`

Returns information about a core network Connect attachment.

<h3 id="getconnectattachment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|attachmentId|path|string|true|The ID of the attachment.|
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
  "ConnectAttachment": {
    "Attachment": {
      "CoreNetworkId": {},
      "CoreNetworkArn": {},
      "AttachmentId": {},
      "OwnerAccountId": {},
      "AttachmentType": {},
      "State": {},
      "EdgeLocation": {},
      "ResourceArn": {},
      "AttachmentPolicyRuleNumber": {},
      "SegmentName": {},
      "Tags": {},
      "ProposedSegmentChange": {
        "Tags": {},
        "AttachmentPolicyRuleNumber": {},
        "SegmentName": {}
      },
      "CreatedAt": {},
      "UpdatedAt": {}
    },
    "TransportAttachmentId": {},
    "Options": {
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

<h3 id="getconnectattachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetConnectAttachmentResponse](#schemagetconnectattachmentresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCoreNetworkChangeEvents

<a id="opIdGetCoreNetworkChangeEvents"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/core-networks/string/core-network-change-events/0 \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /core-networks/{coreNetworkId}/core-network-change-events/{policyVersionId}`

Returns information about a core network change event.

<h3 id="getcorenetworkchangeevents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|coreNetworkId|path|string|true|The ID of a core network.|
|policyVersionId|path|integer|true|The ID of the policy version.|
|maxResults|query|integer|false|The maximum number of results to return.|
|nextToken|query|string|false|The token for the next page of results.|
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
  "CoreNetworkChangeEvents": {},
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

<h3 id="getcorenetworkchangeevents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCoreNetworkChangeEventsResponse](#schemagetcorenetworkchangeeventsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCoreNetworkChangeSet

<a id="opIdGetCoreNetworkChangeSet"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/core-networks/string/core-network-change-sets/0 \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /core-networks/{coreNetworkId}/core-network-change-sets/{policyVersionId}`

Returns a change set between the LIVE core network policy and a submitted policy.

<h3 id="getcorenetworkchangeset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|coreNetworkId|path|string|true|The ID of a core network.|
|policyVersionId|path|integer|true|The ID of the policy version.|
|maxResults|query|integer|false|The maximum number of results to return.|
|nextToken|query|string|false|The token for the next page of results.|
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
  "CoreNetworkChanges": {},
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

<h3 id="getcorenetworkchangeset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCoreNetworkChangeSetResponse](#schemagetcorenetworkchangesetresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCoreNetworkPolicy

<a id="opIdGetCoreNetworkPolicy"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/core-networks/string/core-network-policy \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /core-networks/{coreNetworkId}/core-network-policy`

Returns details about a core network policy. You can get details about your current live policy or any previous policy version.

<h3 id="getcorenetworkpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|coreNetworkId|path|string|true|The ID of a core network.|
|policyVersionId|query|integer|false|The ID of a core network policy version.|
|alias|query|string|false|The alias of a core network policy |
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
|alias|LIVE|
|alias|LATEST|

> Example responses

> 200 Response

```json
{
  "CoreNetworkPolicy": {
    "CoreNetworkId": {},
    "PolicyVersionId": {},
    "Alias": {},
    "Description": {},
    "CreatedAt": {},
    "ChangeSetState": {},
    "PolicyErrors": {},
    "PolicyDocument": {}
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

<h3 id="getcorenetworkpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCoreNetworkPolicyResponse](#schemagetcorenetworkpolicyresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutCoreNetworkPolicy

<a id="opIdPutCoreNetworkPolicy"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/core-networks/string/core-network-policy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "PolicyDocument": "string",
    "Description": "string",
    "LatestVersionId": 0,
    "ClientToken": "string"
  }'
```

`POST /core-networks/{coreNetworkId}/core-network-policy`

Creates a new, immutable version of a core network policy. A subsequent change set is created showing the differences between the LIVE policy and the submitted policy.

> Body parameter

```json
{
  "PolicyDocument": "string",
  "Description": "string",
  "LatestVersionId": 0,
  "ClientToken": "string"
}
```

<h3 id="putcorenetworkpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|coreNetworkId|path|string|true|The ID of a core network.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» PolicyDocument|body|string|true|The policy document.|
|» Description|body|string|false|a core network policy description.|
|» LatestVersionId|body|integer|false|The ID of a core network policy. |
|» ClientToken|body|string|false|The client token associated with the request.|

> Example responses

> 200 Response

```json
{
  "CoreNetworkPolicy": {
    "CoreNetworkId": {},
    "PolicyVersionId": {},
    "Alias": {},
    "Description": {},
    "CreatedAt": {},
    "ChangeSetState": {},
    "PolicyErrors": {},
    "PolicyDocument": {}
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

<h3 id="putcorenetworkpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutCoreNetworkPolicyResponse](#schemaputcorenetworkpolicyresponse)|
|480|480|CoreNetworkPolicyException|[CoreNetworkPolicyException](#schemacorenetworkpolicyexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetNetworkResourceCounts

<a id="opIdGetNetworkResourceCounts"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/global-networks/string/network-resource-count \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /global-networks/{globalNetworkId}/network-resource-count`

Gets the count of network resources, by resource type, for the specified global network.

<h3 id="getnetworkresourcecounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|globalNetworkId|path|string|true|The ID of the global network.|
|resourceType|query|string|false|<p>The resource type.</p> <p>The following are the supported resource types for Direct Connect:</p> <ul> <li> <p> <code>dxcon</code> </p> </li> <li> <p> <code>dx-gateway</code> </p> </li> <li> <p> <code>dx-vif</code> </p> </li> </ul> <p>The following are the supported resource types for Network Manager:</p> <ul> <li> <p> <code>connection</code> </p> </li> <li> <p> <code>device</code> </p> </li> <li> <p> <code>link</code> </p> </li> <li> <p> <code>site</code> </p> </li> </ul> <p>The following are the supported resource types for Amazon VPC:</p> <ul> <li> <p> <code>customer-gateway</code> </p> </li> <li> <p> <code>transit-gateway</code> </p> </li> <li> <p> <code>transit-gateway-attachment</code> </p> </li> <li> <p> <code>transit-gateway-connect-peer</code> </p> </li> <li> <p> <code>transit-gateway-route-table</code> </p> </li> <li> <p> <code>vpn-connection</code> </p> </li> </ul>|
|maxResults|query|integer|false|The maximum number of results to return.|
|nextToken|query|string|false|The token for the next page of results.|
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
  "NetworkResourceCounts": {},
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

<h3 id="getnetworkresourcecounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetNetworkResourceCountsResponse](#schemagetnetworkresourcecountsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetNetworkResourceRelationships

<a id="opIdGetNetworkResourceRelationships"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/global-networks/string/network-resource-relationships \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /global-networks/{globalNetworkId}/network-resource-relationships`

Gets the network resource relationships for the specified global network.

<h3 id="getnetworkresourcerelationships-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|globalNetworkId|path|string|true|The ID of the global network.|
|coreNetworkId|query|string|false|The ID of a core network.|
|registeredGatewayArn|query|string|false|The ARN of the registered gateway.|
|awsRegion|query|string|false|The Amazon Web Services Region.|
|accountId|query|string|false|The Amazon Web Services account ID.|
|resourceType|query|string|false|<p>The resource type.</p> <p>The following are the supported resource types for Direct Connect:</p> <ul> <li> <p> <code>dxcon</code> </p> </li> <li> <p> <code>dx-gateway</code> </p> </li> <li> <p> <code>dx-vif</code> </p> </li> </ul> <p>The following are the supported resource types for Network Manager:</p> <ul> <li> <p> <code>connection</code> </p> </li> <li> <p> <code>device</code> </p> </li> <li> <p> <code>link</code> </p> </li> <li> <p> <code>site</code> </p> </li> </ul> <p>The following are the supported resource types for Amazon VPC:</p> <ul> <li> <p> <code>customer-gateway</code> </p> </li> <li> <p> <code>transit-gateway</code> </p> </li> <li> <p> <code>transit-gateway-attachment</code> </p> </li> <li> <p> <code>transit-gateway-connect-peer</code> </p> </li> <li> <p> <code>transit-gateway-route-table</code> </p> </li> <li> <p> <code>vpn-connection</code> </p> </li> </ul>|
|resourceArn|query|string|false|The ARN of the gateway.|
|maxResults|query|integer|false|The maximum number of results to return.|
|nextToken|query|string|false|The token for the next page of results.|
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
  "Relationships": {},
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

<h3 id="getnetworkresourcerelationships-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetNetworkResourceRelationshipsResponse](#schemagetnetworkresourcerelationshipsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetNetworkResources

<a id="opIdGetNetworkResources"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/global-networks/string/network-resources \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /global-networks/{globalNetworkId}/network-resources`

<p>Describes the network resources for the specified global network.</p> <p>The results include information from the corresponding Describe call for the resource, minus any sensitive information such as pre-shared keys.</p>

<h3 id="getnetworkresources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|globalNetworkId|path|string|true|The ID of the global network.|
|coreNetworkId|query|string|false|The ID of a core network.|
|registeredGatewayArn|query|string|false|The ARN of the gateway.|
|awsRegion|query|string|false|The Amazon Web Services Region.|
|accountId|query|string|false|The Amazon Web Services account ID.|
|resourceType|query|string|false|<p>The resource type.</p> <p>The following are the supported resource types for Direct Connect:</p> <ul> <li> <p> <code>dxcon</code> - The definition model is <a href="https://docs.aws.amazon.com/directconnect/latest/APIReference/API_Connection.html">Connection</a>.</p> </li> <li> <p> <code>dx-gateway</code> - The definition model is <a href="https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DirectConnectGateway.html">DirectConnectGateway</a>.</p> </li> <li> <p> <code>dx-vif</code> - The definition model is <a href="https://docs.aws.amazon.com/directconnect/latest/APIReference/API_VirtualInterface.html">VirtualInterface</a>.</p> </li> </ul> <p>The following are the supported resource types for Network Manager:</p> <ul> <li> <p> <code>connection</code> - The definition model is <a href="https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_Connection.html">Connection</a>.</p> </li> <li> <p> <code>device</code> - The definition model is <a href="https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_Device.html">Device</a>.</p> </li> <li> <p> <code>link</code> - The definition model is <a href="https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_Link.html">Link</a>.</p> </li> <li> <p> <code>site</code> - The definition model is <a href="https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_Site.html">Site</a>.</p> </li> </ul> <p>The following are the supported resource types for Amazon VPC:</p> <ul> <li> <p> <code>customer-gateway</code> - The definition model is <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CustomerGateway.html">CustomerGateway</a>.</p> </li> <li> <p> <code>transit-gateway</code> - The definition model is <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TransitGateway.html">TransitGateway</a>.</p> </li> <li> <p> <code>transit-gateway-attachment</code> - The definition model is <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TransitGatewayAttachment.html">TransitGatewayAttachment</a>.</p> </li> <li> <p> <code>transit-gateway-connect-peer</code> - The definition model is <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TransitGatewayConnectPeer.html">TransitGatewayConnectPeer</a>.</p> </li> <li> <p> <code>transit-gateway-route-table</code> - The definition model is <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TransitGatewayRouteTable.html">TransitGatewayRouteTable</a>.</p> </li> <li> <p> <code>vpn-connection</code> - The definition model is <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_VpnConnection.html">VpnConnection</a>.</p> </li> </ul>|
|resourceArn|query|string|false|The ARN of the resource.|
|maxResults|query|integer|false|The maximum number of results to return.|
|nextToken|query|string|false|The token for the next page of results.|
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
  "NetworkResources": {},
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

<h3 id="getnetworkresources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetNetworkResourcesResponse](#schemagetnetworkresourcesresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetNetworkRoutes

<a id="opIdGetNetworkRoutes"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/global-networks/string/network-routes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "RouteTableIdentifier": {
      "TransitGatewayRouteTableArn": {},
      "CoreNetworkSegmentEdge": {
        "CoreNetworkId": {},
        "SegmentName": {},
        "EdgeLocation": {}
      }
    },
    "ExactCidrMatches": [
      "string"
    ],
    "LongestPrefixMatches": [
      "string"
    ],
    "SubnetOfMatches": [
      "string"
    ],
    "SupernetOfMatches": [
      "string"
    ],
    "PrefixListIds": [
      "string"
    ],
    "States": [
      "ACTIVE"
    ],
    "Types": [
      "PROPAGATED"
    ],
    "DestinationFilters": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    }
  }'
```

`POST /global-networks/{globalNetworkId}/network-routes`

Gets the network routes of the specified global network.

> Body parameter

```json
{
  "RouteTableIdentifier": {
    "TransitGatewayRouteTableArn": {},
    "CoreNetworkSegmentEdge": {
      "CoreNetworkId": {},
      "SegmentName": {},
      "EdgeLocation": {}
    }
  },
  "ExactCidrMatches": [
    "string"
  ],
  "LongestPrefixMatches": [
    "string"
  ],
  "SubnetOfMatches": [
    "string"
  ],
  "SupernetOfMatches": [
    "string"
  ],
  "PrefixListIds": [
    "string"
  ],
  "States": [
    "ACTIVE"
  ],
  "Types": [
    "PROPAGATED"
  ],
  "DestinationFilters": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  }
}
```

<h3 id="getnetworkroutes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|globalNetworkId|path|string|true|The ID of the global network.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» RouteTableIdentifier|body|object|true|Describes a route table.|
|» » TransitGatewayRouteTableArn|body|object|false|none|
|» » CoreNetworkSegmentEdge|body|object|false|none|
|» » » CoreNetworkId|body|object|false|none|
|» » » SegmentName|body|object|false|none|
|» » » EdgeLocation|body|object|false|none|
|» ExactCidrMatches|body|[[ConstrainedString](#schemaconstrainedstring)]|false|An exact CIDR block.|
|» LongestPrefixMatches|body|[[ConstrainedString](#schemaconstrainedstring)]|false|The most specific route that matches the traffic (longest prefix match).|
|» SubnetOfMatches|body|[[ConstrainedString](#schemaconstrainedstring)]|false|The routes with a subnet that match the specified CIDR filter.|
|» SupernetOfMatches|body|[[ConstrainedString](#schemaconstrainedstring)]|false|The routes with a CIDR that encompasses the CIDR filter. Example: If you specify 10.0.1.0/30, then the result returns 10.0.1.0/29.|
|» PrefixListIds|body|[[ConstrainedString](#schemaconstrainedstring)]|false|The IDs of the prefix lists.|
|» States|body|[[RouteState](#schemaroutestate)]|false|The route states.|
|» Types|body|[[RouteType](#schemaroutetype)]|false|The route types.|
|» DestinationFilters|body|object|false|Filter by route table destination. Possible Values: TRANSIT_GATEWAY_ATTACHMENT_ID, RESOURCE_ID, or RESOURCE_TYPE.|
|» » **additionalProperties**|body|[FilterValues](#schemafiltervalues)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» States|ACTIVE|
|» States|BLACKHOLE|
|» Types|PROPAGATED|
|» Types|STATIC|

> Example responses

> 200 Response

```json
{
  "RouteTableArn": {},
  "CoreNetworkSegmentEdge": {
    "CoreNetworkId": {},
    "SegmentName": {},
    "EdgeLocation": {}
  },
  "RouteTableType": {},
  "RouteTableTimestamp": {},
  "NetworkRoutes": {}
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

<h3 id="getnetworkroutes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetNetworkRoutesResponse](#schemagetnetworkroutesresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetNetworkTelemetry

<a id="opIdGetNetworkTelemetry"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/global-networks/string/network-telemetry \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /global-networks/{globalNetworkId}/network-telemetry`

Gets the network telemetry of the specified global network.

<h3 id="getnetworktelemetry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|globalNetworkId|path|string|true|The ID of the global network.|
|coreNetworkId|query|string|false|The ID of a core network.|
|registeredGatewayArn|query|string|false|The ARN of the gateway.|
|awsRegion|query|string|false|The Amazon Web Services Region.|
|accountId|query|string|false|The Amazon Web Services account ID.|
|resourceType|query|string|false|<p>The resource type.</p> <p>The following are the supported resource types for Direct Connect:</p> <ul> <li> <p> <code>dxcon</code> </p> </li> <li> <p> <code>dx-gateway</code> </p> </li> <li> <p> <code>dx-vif</code> </p> </li> </ul> <p>The following are the supported resource types for Network Manager:</p> <ul> <li> <p> <code>connection</code> </p> </li> <li> <p> <code>device</code> </p> </li> <li> <p> <code>link</code> </p> </li> <li> <p> <code>site</code> </p> </li> </ul> <p>The following are the supported resource types for Amazon VPC:</p> <ul> <li> <p> <code>customer-gateway</code> </p> </li> <li> <p> <code>transit-gateway</code> </p> </li> <li> <p> <code>transit-gateway-attachment</code> </p> </li> <li> <p> <code>transit-gateway-connect-peer</code> </p> </li> <li> <p> <code>transit-gateway-route-table</code> </p> </li> <li> <p> <code>vpn-connection</code> </p> </li> </ul>|
|resourceArn|query|string|false|The ARN of the resource.|
|maxResults|query|integer|false|The maximum number of results to return.|
|nextToken|query|string|false|The token for the next page of results.|
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
  "NetworkTelemetry": {},
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

<h3 id="getnetworktelemetry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetNetworkTelemetryResponse](#schemagetnetworktelemetryresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRouteAnalysis

<a id="opIdGetRouteAnalysis"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/global-networks/string/route-analyses/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /global-networks/{globalNetworkId}/route-analyses/{routeAnalysisId}`

Gets information about the specified route analysis.

<h3 id="getrouteanalysis-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|globalNetworkId|path|string|true|The ID of the global network.|
|routeAnalysisId|path|string|true|The ID of the route analysis.|
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
  "RouteAnalysis": {
    "GlobalNetworkId": {},
    "OwnerAccountId": {},
    "RouteAnalysisId": {},
    "StartTimestamp": {},
    "Status": {},
    "Source": {
      "TransitGatewayAttachmentArn": {},
      "TransitGatewayArn": {},
      "IpAddress": {}
    },
    "Destination": {
      "TransitGatewayAttachmentArn": {},
      "TransitGatewayArn": {},
      "IpAddress": {}
    },
    "IncludeReturnPath": {},
    "UseMiddleboxes": {},
    "ForwardPath": {
      "CompletionStatus": {
        "ResultCode": {},
        "ReasonCode": {},
        "ReasonContext": {
          "property1": "string",
          "property2": "string"
        }
      },
      "Path": {}
    },
    "ReturnPath": {
      "CompletionStatus": {
        "ResultCode": {},
        "ReasonCode": {},
        "ReasonContext": {
          "property1": "string",
          "property2": "string"
        }
      },
      "Path": {}
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

<h3 id="getrouteanalysis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRouteAnalysisResponse](#schemagetrouteanalysisresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSiteToSiteVpnAttachment

<a id="opIdGetSiteToSiteVpnAttachment"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/site-to-site-vpn-attachments/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /site-to-site-vpn-attachments/{attachmentId}`

Returns information about a site-to-site VPN attachment.

<h3 id="getsitetositevpnattachment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|attachmentId|path|string|true|The ID of the attachment.|
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
  "SiteToSiteVpnAttachment": {
    "Attachment": {
      "CoreNetworkId": {},
      "CoreNetworkArn": {},
      "AttachmentId": {},
      "OwnerAccountId": {},
      "AttachmentType": {},
      "State": {},
      "EdgeLocation": {},
      "ResourceArn": {},
      "AttachmentPolicyRuleNumber": {},
      "SegmentName": {},
      "Tags": {},
      "ProposedSegmentChange": {
        "Tags": {},
        "AttachmentPolicyRuleNumber": {},
        "SegmentName": {}
      },
      "CreatedAt": {},
      "UpdatedAt": {}
    },
    "VpnConnectionArn": {}
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

<h3 id="getsitetositevpnattachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSiteToSiteVpnAttachmentResponse](#schemagetsitetositevpnattachmentresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetTransitGatewayPeering

<a id="opIdGetTransitGatewayPeering"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/transit-gateway-peerings/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /transit-gateway-peerings/{peeringId}`

Returns information about a transit gateway peer.

<h3 id="gettransitgatewaypeering-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|peeringId|path|string|true|The ID of the peering request.|
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
  "TransitGatewayPeering": {
    "Peering": {
      "CoreNetworkId": {},
      "CoreNetworkArn": {},
      "PeeringId": {},
      "OwnerAccountId": {},
      "PeeringType": {},
      "State": {},
      "EdgeLocation": {},
      "ResourceArn": {},
      "Tags": {},
      "CreatedAt": {}
    },
    "TransitGatewayArn": {},
    "TransitGatewayPeeringAttachmentId": {}
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

<h3 id="gettransitgatewaypeering-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetTransitGatewayPeeringResponse](#schemagettransitgatewaypeeringresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetTransitGatewayRegistrations

<a id="opIdGetTransitGatewayRegistrations"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/global-networks/string/transit-gateway-registrations \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /global-networks/{globalNetworkId}/transit-gateway-registrations`

Gets information about the transit gateway registrations in a specified global network.

<h3 id="gettransitgatewayregistrations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|globalNetworkId|path|string|true|The ID of the global network.|
|transitGatewayArns|query|[[TransitGatewayArn](#schematransitgatewayarn)]|false|The Amazon Resource Names (ARNs) of one or more transit gateways. The maximum is 10.|
|maxResults|query|integer|false|The maximum number of results to return.|
|nextToken|query|string|false|The token for the next page of results.|
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
  "TransitGatewayRegistrations": {},
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

<h3 id="gettransitgatewayregistrations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetTransitGatewayRegistrationsResponse](#schemagettransitgatewayregistrationsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RegisterTransitGateway

<a id="opIdRegisterTransitGateway"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/global-networks/string/transit-gateway-registrations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "TransitGatewayArn": "string"
  }'
```

`POST /global-networks/{globalNetworkId}/transit-gateway-registrations`

Registers a transit gateway in your global network. Not all Regions support transit gateways for global networks. For a list of the supported Regions, see <a href="https://docs.aws.amazon.com/network-manager/latest/tgwnm/what-are-global-networks.html#nm-available-regions">Region Availability</a> in the <i>Amazon Web Services Transit Gateways for Global Networks User Guide</i>. The transit gateway can be in any of the supported Amazon Web Services Regions, but it must be owned by the same Amazon Web Services account that owns the global network. You cannot register a transit gateway in more than one global network.

> Body parameter

```json
{
  "TransitGatewayArn": "string"
}
```

<h3 id="registertransitgateway-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|globalNetworkId|path|string|true|The ID of the global network.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» TransitGatewayArn|body|string|true|The Amazon Resource Name (ARN) of the transit gateway.|

> Example responses

> 200 Response

```json
{
  "TransitGatewayRegistration": {
    "GlobalNetworkId": {},
    "TransitGatewayArn": {},
    "State": {
      "Code": {},
      "Message": {}
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

<h3 id="registertransitgateway-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RegisterTransitGatewayResponse](#schemaregistertransitgatewayresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetTransitGatewayRouteTableAttachment

<a id="opIdGetTransitGatewayRouteTableAttachment"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/transit-gateway-route-table-attachments/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /transit-gateway-route-table-attachments/{attachmentId}`

Returns information about a transit gateway route table attachment.

<h3 id="gettransitgatewayroutetableattachment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|attachmentId|path|string|true|The ID of the transit gateway route table attachment.|
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
  "TransitGatewayRouteTableAttachment": {
    "Attachment": {
      "CoreNetworkId": {},
      "CoreNetworkArn": {},
      "AttachmentId": {},
      "OwnerAccountId": {},
      "AttachmentType": {},
      "State": {},
      "EdgeLocation": {},
      "ResourceArn": {},
      "AttachmentPolicyRuleNumber": {},
      "SegmentName": {},
      "Tags": {},
      "ProposedSegmentChange": {
        "Tags": {},
        "AttachmentPolicyRuleNumber": {},
        "SegmentName": {}
      },
      "CreatedAt": {},
      "UpdatedAt": {}
    },
    "PeeringId": {},
    "TransitGatewayRouteTableArn": {}
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

<h3 id="gettransitgatewayroutetableattachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetTransitGatewayRouteTableAttachmentResponse](#schemagettransitgatewayroutetableattachmentresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetVpcAttachment

<a id="opIdGetVpcAttachment"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/vpc-attachments/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /vpc-attachments/{attachmentId}`

Returns information about a VPC attachment.

<h3 id="getvpcattachment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|attachmentId|path|string|true|The ID of the attachment.|
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
  "VpcAttachment": {
    "Attachment": {
      "CoreNetworkId": {},
      "CoreNetworkArn": {},
      "AttachmentId": {},
      "OwnerAccountId": {},
      "AttachmentType": {},
      "State": {},
      "EdgeLocation": {},
      "ResourceArn": {},
      "AttachmentPolicyRuleNumber": {},
      "SegmentName": {},
      "Tags": {},
      "ProposedSegmentChange": {
        "Tags": {},
        "AttachmentPolicyRuleNumber": {},
        "SegmentName": {}
      },
      "CreatedAt": {},
      "UpdatedAt": {}
    },
    "SubnetArns": {},
    "Options": {
      "Ipv6Support": {},
      "ApplianceModeSupport": {}
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

<h3 id="getvpcattachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetVpcAttachmentResponse](#schemagetvpcattachmentresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateVpcAttachment

<a id="opIdUpdateVpcAttachment"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/vpc-attachments/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AddSubnetArns": [
      "string"
    ],
    "RemoveSubnetArns": [
      "string"
    ],
    "Options": {
      "Ipv6Support": {},
      "ApplianceModeSupport": {}
    }
  }'
```

`PATCH /vpc-attachments/{attachmentId}`

Updates a VPC attachment.

> Body parameter

```json
{
  "AddSubnetArns": [
    "string"
  ],
  "RemoveSubnetArns": [
    "string"
  ],
  "Options": {
    "Ipv6Support": {},
    "ApplianceModeSupport": {}
  }
}
```

<h3 id="updatevpcattachment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|attachmentId|path|string|true|The ID of the attachment.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» AddSubnetArns|body|[[SubnetArn](#schemasubnetarn)]|false|Adds a subnet ARN to the VPC attachment.|
|» RemoveSubnetArns|body|[[SubnetArn](#schemasubnetarn)]|false|Removes a subnet ARN from the attachment.|
|» Options|body|object|false|Describes the VPC options.|
|» » Ipv6Support|body|object|false|none|
|» » ApplianceModeSupport|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "VpcAttachment": {
    "Attachment": {
      "CoreNetworkId": {},
      "CoreNetworkArn": {},
      "AttachmentId": {},
      "OwnerAccountId": {},
      "AttachmentType": {},
      "State": {},
      "EdgeLocation": {},
      "ResourceArn": {},
      "AttachmentPolicyRuleNumber": {},
      "SegmentName": {},
      "Tags": {},
      "ProposedSegmentChange": {
        "Tags": {},
        "AttachmentPolicyRuleNumber": {},
        "SegmentName": {}
      },
      "CreatedAt": {},
      "UpdatedAt": {}
    },
    "SubnetArns": {},
    "Options": {
      "Ipv6Support": {},
      "ApplianceModeSupport": {}
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

<h3 id="updatevpcattachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateVpcAttachmentResponse](#schemaupdatevpcattachmentresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAttachments

<a id="opIdListAttachments"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/attachments \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /attachments`

Returns a list of core network attachments.

<h3 id="listattachments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|coreNetworkId|query|string|false|The ID of a core network.|
|attachmentType|query|string|false|The type of attachment.|
|edgeLocation|query|string|false|The Region where the edge is located.|
|state|query|string|false|The state of the attachment.|
|maxResults|query|integer|false|The maximum number of results to return.|
|nextToken|query|string|false|The token for the next page of results.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
|attachmentType|CONNECT|
|attachmentType|SITE_TO_SITE_VPN|
|attachmentType|VPC|
|attachmentType|TRANSIT_GATEWAY_ROUTE_TABLE|
|state|REJECTED|
|state|PENDING_ATTACHMENT_ACCEPTANCE|
|state|CREATING|
|state|FAILED|
|state|AVAILABLE|
|state|UPDATING|
|state|PENDING_NETWORK_UPDATE|
|state|PENDING_TAG_ACCEPTANCE|
|state|DELETING|

> Example responses

> 200 Response

```json
{
  "Attachments": {},
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

<h3 id="listattachments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAttachmentsResponse](#schemalistattachmentsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListCoreNetworkPolicyVersions

<a id="opIdListCoreNetworkPolicyVersions"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/core-networks/string/core-network-policy-versions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /core-networks/{coreNetworkId}/core-network-policy-versions`

Returns a list of core network policy versions.

<h3 id="listcorenetworkpolicyversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|coreNetworkId|path|string|true|The ID of a core network.|
|maxResults|query|integer|false|The maximum number of results to return.|
|nextToken|query|string|false|The token for the next page of results.|
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
  "CoreNetworkPolicyVersions": {},
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

<h3 id="listcorenetworkpolicyversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListCoreNetworkPolicyVersionsResponse](#schemalistcorenetworkpolicyversionsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListOrganizationServiceAccessStatus

<a id="opIdListOrganizationServiceAccessStatus"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/organizations/service-access \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /organizations/service-access`

Gets the status of the Service Linked Role (SLR) deployment for the accounts in a given Amazon Web Services Organization.

<h3 id="listorganizationserviceaccessstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|The maximum number of results to return.|
|nextToken|query|string|false|The token for the next page of results.|
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
  "OrganizationStatus": {
    "OrganizationId": {},
    "OrganizationAwsServiceAccessStatus": {},
    "SLRDeploymentStatus": {},
    "AccountStatusList": {}
  },
  "NextToken": {}
}
```

<h3 id="listorganizationserviceaccessstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListOrganizationServiceAccessStatusResponse](#schemalistorganizationserviceaccessstatusresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartOrganizationServiceAccessUpdate

<a id="opIdStartOrganizationServiceAccessUpdate"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/organizations/service-access \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Action": "string"
  }'
```

`POST /organizations/service-access`

Enables the Network Manager service for an Amazon Web Services Organization. This can only be called by a management account within the organization. 

> Body parameter

```json
{
  "Action": "string"
}
```

<h3 id="startorganizationserviceaccessupdate-parameters">Parameters</h3>

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
|» Action|body|string|true|The action to take for the update request. This can be either <code>ENABLE</code> or <code>DISABLE</code>.|

> Example responses

> 200 Response

```json
{
  "OrganizationStatus": {
    "OrganizationId": {},
    "OrganizationAwsServiceAccessStatus": {},
    "SLRDeploymentStatus": {},
    "AccountStatusList": {}
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

<h3 id="startorganizationserviceaccessupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartOrganizationServiceAccessUpdateResponse](#schemastartorganizationserviceaccessupdateresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPeerings

<a id="opIdListPeerings"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/peerings \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /peerings`

Lists the peerings for a core network.

<h3 id="listpeerings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|coreNetworkId|query|string|false|The ID of a core network.|
|peeringType|query|string|false|Returns a list of a peering requests.|
|edgeLocation|query|string|false|Returns a list edge locations for the |
|state|query|string|false|Returns a list of the peering request states.|
|maxResults|query|integer|false|The maximum number of results to return.|
|nextToken|query|string|false|The token for the next page of results.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
|peeringType|TRANSIT_GATEWAY|
|state|CREATING|
|state|FAILED|
|state|AVAILABLE|
|state|DELETING|

> Example responses

> 200 Response

```json
{
  "Peerings": {},
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

<h3 id="listpeerings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPeeringsResponse](#schemalistpeeringsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{resourceArn}`

Lists the tags for a specified resource.

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The Amazon Resource Name (ARN) of the resource.|
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
  "TagList": {}
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
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/tags/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ]
  }'
```

`POST /tags/{resourceArn}`

Tags a specified resource.

> Body parameter

```json
{
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

<h3 id="tagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The Amazon Resource Name (ARN) of the resource.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Tags|body|[[Tag](#schematag)]|true|The tags to apply to the specified resource.|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RejectAttachment

<a id="opIdRejectAttachment"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/attachments/string/reject \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /attachments/{attachmentId}/reject`

Rejects a core network attachment request.

<h3 id="rejectattachment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|attachmentId|path|string|true|The ID of the attachment.|
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
  "Attachment": {
    "CoreNetworkId": {},
    "CoreNetworkArn": {},
    "AttachmentId": {},
    "OwnerAccountId": {},
    "AttachmentType": {},
    "State": {},
    "EdgeLocation": {},
    "ResourceArn": {},
    "AttachmentPolicyRuleNumber": {},
    "SegmentName": {},
    "Tags": {},
    "ProposedSegmentChange": {
      "Tags": {},
      "AttachmentPolicyRuleNumber": {},
      "SegmentName": {}
    },
    "CreatedAt": {},
    "UpdatedAt": {}
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

<h3 id="rejectattachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RejectAttachmentResponse](#schemarejectattachmentresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RestoreCoreNetworkPolicyVersion

<a id="opIdRestoreCoreNetworkPolicyVersion"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/core-networks/string/core-network-policy-versions/0/restore \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /core-networks/{coreNetworkId}/core-network-policy-versions/{policyVersionId}/restore`

Restores a previous policy version as a new, immutable version of a core network policy. A subsequent change set is created showing the differences between the LIVE policy and restored policy.

<h3 id="restorecorenetworkpolicyversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|coreNetworkId|path|string|true|The ID of a core network.|
|policyVersionId|path|integer|true|The ID of the policy version to restore.|
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
  "CoreNetworkPolicy": {
    "CoreNetworkId": {},
    "PolicyVersionId": {},
    "Alias": {},
    "Description": {},
    "CreatedAt": {},
    "ChangeSetState": {},
    "PolicyErrors": {},
    "PolicyDocument": {}
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

<h3 id="restorecorenetworkpolicyversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RestoreCoreNetworkPolicyVersionResponse](#schemarestorecorenetworkpolicyversionresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartRouteAnalysis

<a id="opIdStartRouteAnalysis"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/global-networks/string/route-analyses \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Source": {
      "TransitGatewayAttachmentArn": {},
      "IpAddress": {}
    },
    "Destination": {
      "TransitGatewayAttachmentArn": {},
      "IpAddress": {}
    },
    "IncludeReturnPath": true,
    "UseMiddleboxes": true
  }'
```

`POST /global-networks/{globalNetworkId}/route-analyses`

Starts analyzing the routing path between the specified source and destination. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/tgw/route-analyzer.html">Route Analyzer</a>.

> Body parameter

```json
{
  "Source": {
    "TransitGatewayAttachmentArn": {},
    "IpAddress": {}
  },
  "Destination": {
    "TransitGatewayAttachmentArn": {},
    "IpAddress": {}
  },
  "IncludeReturnPath": true,
  "UseMiddleboxes": true
}
```

<h3 id="startrouteanalysis-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|globalNetworkId|path|string|true|The ID of the global network.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Source|body|object|true|Describes a source or a destination.|
|» » TransitGatewayAttachmentArn|body|object|false|none|
|» » IpAddress|body|object|false|none|
|» Destination|body|object|true|Describes a source or a destination.|
|» » TransitGatewayAttachmentArn|body|object|false|none|
|» » IpAddress|body|object|false|none|
|» IncludeReturnPath|body|boolean|false|Indicates whether to analyze the return path. The default is <code>false</code>.|
|» UseMiddleboxes|body|boolean|false|Indicates whether to include the location of middlebox appliances in the route analysis. The default is <code>false</code>.|

> Example responses

> 200 Response

```json
{
  "RouteAnalysis": {
    "GlobalNetworkId": {},
    "OwnerAccountId": {},
    "RouteAnalysisId": {},
    "StartTimestamp": {},
    "Status": {},
    "Source": {
      "TransitGatewayAttachmentArn": {},
      "TransitGatewayArn": {},
      "IpAddress": {}
    },
    "Destination": {
      "TransitGatewayAttachmentArn": {},
      "TransitGatewayArn": {},
      "IpAddress": {}
    },
    "IncludeReturnPath": {},
    "UseMiddleboxes": {},
    "ForwardPath": {
      "CompletionStatus": {
        "ResultCode": {},
        "ReasonCode": {},
        "ReasonContext": {
          "property1": "string",
          "property2": "string"
        }
      },
      "Path": {}
    },
    "ReturnPath": {
      "CompletionStatus": {
        "ResultCode": {},
        "ReasonCode": {},
        "ReasonContext": {
          "property1": "string",
          "property2": "string"
        }
      },
      "Path": {}
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

<h3 id="startrouteanalysis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartRouteAnalysisResponse](#schemastartrouteanalysisresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://networkmanager.us-east-1.amazonaws.com/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{resourceArn}#tagKeys`

Removes tags from a specified resource.

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The Amazon Resource Name (ARN) of the resource.|
|tagKeys|query|[[TagKey](#schematagkey)]|true|The tag keys to remove from the specified resource.|
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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateNetworkResourceMetadata

<a id="opIdUpdateNetworkResourceMetadata"></a>

> Code samples

```bash
curl https://networkmanager.us-east-1.amazonaws.com/global-networks/string/network-resources/string/metadata \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Metadata": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`PATCH /global-networks/{globalNetworkId}/network-resources/{resourceArn}/metadata`

Updates the resource metadata for the specified global network.

> Body parameter

```json
{
  "Metadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="updatenetworkresourcemetadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|globalNetworkId|path|string|true|The ID of the global network.|
|resourceArn|path|string|true|The ARN of the resource.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Metadata|body|object|true|The resource metadata.|
|» » **additionalProperties**|body|[ConstrainedString](#schemaconstrainedstring)|false|none|

> Example responses

> 200 Response

```json
{
  "ResourceArn": {},
  "Metadata": {
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

<h3 id="updatenetworkresourcemetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateNetworkResourceMetadataResponse](#schemaupdatenetworkresourcemetadataresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AcceptAttachmentResponse">AcceptAttachmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemaacceptattachmentresponse"></a>
<a id="schema_AcceptAttachmentResponse"></a>
<a id="tocSacceptattachmentresponse"></a>
<a id="tocsacceptattachmentresponse"></a>

```json
{
  "Attachment": {
    "CoreNetworkId": {},
    "CoreNetworkArn": {},
    "AttachmentId": {},
    "OwnerAccountId": {},
    "AttachmentType": {},
    "State": {},
    "EdgeLocation": {},
    "ResourceArn": {},
    "AttachmentPolicyRuleNumber": {},
    "SegmentName": {},
    "Tags": {},
    "ProposedSegmentChange": {
      "Tags": {},
      "AttachmentPolicyRuleNumber": {},
      "SegmentName": {}
    },
    "CreatedAt": {},
    "UpdatedAt": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attachment|object|false|none|none|

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

<h2 id="tocS_InternalServerException">InternalServerException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserverexception"></a>
<a id="schema_InternalServerException"></a>
<a id="tocSinternalserverexception"></a>
<a id="tocsinternalserverexception"></a>

```json
null
```

<h2 id="tocS_AssociateConnectPeerResponse">AssociateConnectPeerResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociateconnectpeerresponse"></a>
<a id="schema_AssociateConnectPeerResponse"></a>
<a id="tocSassociateconnectpeerresponse"></a>
<a id="tocsassociateconnectpeerresponse"></a>

```json
{
  "ConnectPeerAssociation": {
    "ConnectPeerId": {},
    "GlobalNetworkId": {},
    "DeviceId": {},
    "LinkId": {},
    "State": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectPeerAssociation|object|false|none|none|

<h2 id="tocS_ServiceQuotaExceededException">ServiceQuotaExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaservicequotaexceededexception"></a>
<a id="schema_ServiceQuotaExceededException"></a>
<a id="tocSservicequotaexceededexception"></a>
<a id="tocsservicequotaexceededexception"></a>

```json
null
```

<h2 id="tocS_AssociateCustomerGatewayResponse">AssociateCustomerGatewayResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociatecustomergatewayresponse"></a>
<a id="schema_AssociateCustomerGatewayResponse"></a>
<a id="tocSassociatecustomergatewayresponse"></a>
<a id="tocsassociatecustomergatewayresponse"></a>

```json
{
  "CustomerGatewayAssociation": {
    "CustomerGatewayArn": {},
    "GlobalNetworkId": {},
    "DeviceId": {},
    "LinkId": {},
    "State": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CustomerGatewayAssociation|object|false|none|none|

<h2 id="tocS_AssociateLinkResponse">AssociateLinkResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociatelinkresponse"></a>
<a id="schema_AssociateLinkResponse"></a>
<a id="tocSassociatelinkresponse"></a>
<a id="tocsassociatelinkresponse"></a>

```json
{
  "LinkAssociation": {
    "GlobalNetworkId": {},
    "DeviceId": {},
    "LinkId": {},
    "LinkAssociationState": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LinkAssociation|object|false|none|none|

<h2 id="tocS_AssociateTransitGatewayConnectPeerResponse">AssociateTransitGatewayConnectPeerResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociatetransitgatewayconnectpeerresponse"></a>
<a id="schema_AssociateTransitGatewayConnectPeerResponse"></a>
<a id="tocSassociatetransitgatewayconnectpeerresponse"></a>
<a id="tocsassociatetransitgatewayconnectpeerresponse"></a>

```json
{
  "TransitGatewayConnectPeerAssociation": {
    "TransitGatewayConnectPeerArn": {},
    "GlobalNetworkId": {},
    "DeviceId": {},
    "LinkId": {},
    "State": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TransitGatewayConnectPeerAssociation|object|false|none|none|

<h2 id="tocS_CreateConnectAttachmentResponse">CreateConnectAttachmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateconnectattachmentresponse"></a>
<a id="schema_CreateConnectAttachmentResponse"></a>
<a id="tocScreateconnectattachmentresponse"></a>
<a id="tocscreateconnectattachmentresponse"></a>

```json
{
  "ConnectAttachment": {
    "Attachment": {
      "CoreNetworkId": {},
      "CoreNetworkArn": {},
      "AttachmentId": {},
      "OwnerAccountId": {},
      "AttachmentType": {},
      "State": {},
      "EdgeLocation": {},
      "ResourceArn": {},
      "AttachmentPolicyRuleNumber": {},
      "SegmentName": {},
      "Tags": {},
      "ProposedSegmentChange": {
        "Tags": {},
        "AttachmentPolicyRuleNumber": {},
        "SegmentName": {}
      },
      "CreatedAt": {},
      "UpdatedAt": {}
    },
    "TransportAttachmentId": {},
    "Options": {
      "Protocol": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectAttachment|object|false|none|none|

<h2 id="tocS_TunnelProtocol">TunnelProtocol</h2>
<!-- backwards compatibility -->
<a id="schematunnelprotocol"></a>
<a id="schema_TunnelProtocol"></a>
<a id="tocStunnelprotocol"></a>
<a id="tocstunnelprotocol"></a>

```json
"GRE"
```

<h2 id="tocS_Tag">Tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "Key": {},
  "Value": {}
}
```

Describes a tag.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_CreateConnectPeerResponse">CreateConnectPeerResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateconnectpeerresponse"></a>
<a id="schema_CreateConnectPeerResponse"></a>
<a id="tocScreateconnectpeerresponse"></a>
<a id="tocscreateconnectpeerresponse"></a>

```json
{
  "ConnectPeer": {
    "CoreNetworkId": {},
    "ConnectAttachmentId": {},
    "ConnectPeerId": {},
    "EdgeLocation": {},
    "State": {},
    "CreatedAt": {},
    "Configuration": {
      "CoreNetworkAddress": {},
      "PeerAddress": {},
      "InsideCidrBlocks": {},
      "Protocol": {},
      "BgpConfigurations": {}
    },
    "Tags": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectPeer|object|false|none|none|

<h2 id="tocS_Long">Long</h2>
<!-- backwards compatibility -->
<a id="schemalong"></a>
<a id="schema_Long"></a>
<a id="tocSlong"></a>
<a id="tocslong"></a>

```json
0
```

<h2 id="tocS_ConstrainedString">ConstrainedString</h2>
<!-- backwards compatibility -->
<a id="schemaconstrainedstring"></a>
<a id="schema_ConstrainedString"></a>
<a id="tocSconstrainedstring"></a>
<a id="tocsconstrainedstring"></a>

```json
"string"
```

<h2 id="tocS_CreateConnectionResponse">CreateConnectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateconnectionresponse"></a>
<a id="schema_CreateConnectionResponse"></a>
<a id="tocScreateconnectionresponse"></a>
<a id="tocscreateconnectionresponse"></a>

```json
{
  "Connection": {
    "ConnectionId": {},
    "ConnectionArn": {},
    "GlobalNetworkId": {},
    "DeviceId": {},
    "ConnectedDeviceId": {},
    "LinkId": {},
    "ConnectedLinkId": {},
    "Description": {},
    "CreatedAt": {},
    "State": {},
    "Tags": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Connection|object|false|none|none|

<h2 id="tocS_CreateCoreNetworkResponse">CreateCoreNetworkResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatecorenetworkresponse"></a>
<a id="schema_CreateCoreNetworkResponse"></a>
<a id="tocScreatecorenetworkresponse"></a>
<a id="tocscreatecorenetworkresponse"></a>

```json
{
  "CoreNetwork": {
    "GlobalNetworkId": {},
    "CoreNetworkId": {},
    "CoreNetworkArn": {},
    "Description": {},
    "CreatedAt": {},
    "State": {},
    "Segments": {},
    "Edges": {},
    "Tags": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CoreNetwork|object|false|none|none|

<h2 id="tocS_CoreNetworkPolicyException">CoreNetworkPolicyException</h2>
<!-- backwards compatibility -->
<a id="schemacorenetworkpolicyexception"></a>
<a id="schema_CoreNetworkPolicyException"></a>
<a id="tocScorenetworkpolicyexception"></a>
<a id="tocscorenetworkpolicyexception"></a>

```json
null
```

<h2 id="tocS_CreateDeviceResponse">CreateDeviceResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedeviceresponse"></a>
<a id="schema_CreateDeviceResponse"></a>
<a id="tocScreatedeviceresponse"></a>
<a id="tocscreatedeviceresponse"></a>

```json
{
  "Device": {
    "DeviceId": {},
    "DeviceArn": {},
    "GlobalNetworkId": {},
    "AWSLocation": {
      "Zone": {},
      "SubnetArn": {}
    },
    "Description": {},
    "Type": {},
    "Vendor": {},
    "Model": {},
    "SerialNumber": {},
    "Location": {
      "Address": {},
      "Latitude": {},
      "Longitude": {}
    },
    "SiteId": {},
    "CreatedAt": {},
    "State": {},
    "Tags": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Device|object|false|none|none|

<h2 id="tocS_SubnetArn">SubnetArn</h2>
<!-- backwards compatibility -->
<a id="schemasubnetarn"></a>
<a id="schema_SubnetArn"></a>
<a id="tocSsubnetarn"></a>
<a id="tocssubnetarn"></a>

```json
"string"
```

<h2 id="tocS_CreateGlobalNetworkResponse">CreateGlobalNetworkResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateglobalnetworkresponse"></a>
<a id="schema_CreateGlobalNetworkResponse"></a>
<a id="tocScreateglobalnetworkresponse"></a>
<a id="tocscreateglobalnetworkresponse"></a>

```json
{
  "GlobalNetwork": {
    "GlobalNetworkId": {},
    "GlobalNetworkArn": {},
    "Description": {},
    "CreatedAt": {},
    "State": {},
    "Tags": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalNetwork|object|false|none|none|

<h2 id="tocS_CreateLinkResponse">CreateLinkResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatelinkresponse"></a>
<a id="schema_CreateLinkResponse"></a>
<a id="tocScreatelinkresponse"></a>
<a id="tocscreatelinkresponse"></a>

```json
{
  "Link": {
    "LinkId": {},
    "LinkArn": {},
    "GlobalNetworkId": {},
    "SiteId": {},
    "Description": {},
    "Type": {},
    "Bandwidth": {
      "UploadSpeed": {},
      "DownloadSpeed": {}
    },
    "Provider": {},
    "CreatedAt": {},
    "State": {},
    "Tags": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Link|object|false|none|none|

<h2 id="tocS_Integer">Integer</h2>
<!-- backwards compatibility -->
<a id="schemainteger"></a>
<a id="schema_Integer"></a>
<a id="tocSinteger"></a>
<a id="tocsinteger"></a>

```json
0
```

<h2 id="tocS_CreateSiteResponse">CreateSiteResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatesiteresponse"></a>
<a id="schema_CreateSiteResponse"></a>
<a id="tocScreatesiteresponse"></a>
<a id="tocscreatesiteresponse"></a>

```json
{
  "Site": {
    "SiteId": {},
    "SiteArn": {},
    "GlobalNetworkId": {},
    "Description": {},
    "Location": {
      "Address": {},
      "Latitude": {},
      "Longitude": {}
    },
    "CreatedAt": {},
    "State": {},
    "Tags": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Site|object|false|none|none|

<h2 id="tocS_CreateSiteToSiteVpnAttachmentResponse">CreateSiteToSiteVpnAttachmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatesitetositevpnattachmentresponse"></a>
<a id="schema_CreateSiteToSiteVpnAttachmentResponse"></a>
<a id="tocScreatesitetositevpnattachmentresponse"></a>
<a id="tocscreatesitetositevpnattachmentresponse"></a>

```json
{
  "SiteToSiteVpnAttachment": {
    "Attachment": {
      "CoreNetworkId": {},
      "CoreNetworkArn": {},
      "AttachmentId": {},
      "OwnerAccountId": {},
      "AttachmentType": {},
      "State": {},
      "EdgeLocation": {},
      "ResourceArn": {},
      "AttachmentPolicyRuleNumber": {},
      "SegmentName": {},
      "Tags": {},
      "ProposedSegmentChange": {
        "Tags": {},
        "AttachmentPolicyRuleNumber": {},
        "SegmentName": {}
      },
      "CreatedAt": {},
      "UpdatedAt": {}
    },
    "VpnConnectionArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SiteToSiteVpnAttachment|object|false|none|none|

<h2 id="tocS_CreateTransitGatewayPeeringResponse">CreateTransitGatewayPeeringResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatetransitgatewaypeeringresponse"></a>
<a id="schema_CreateTransitGatewayPeeringResponse"></a>
<a id="tocScreatetransitgatewaypeeringresponse"></a>
<a id="tocscreatetransitgatewaypeeringresponse"></a>

```json
{
  "TransitGatewayPeering": {
    "Peering": {
      "CoreNetworkId": {},
      "CoreNetworkArn": {},
      "PeeringId": {},
      "OwnerAccountId": {},
      "PeeringType": {},
      "State": {},
      "EdgeLocation": {},
      "ResourceArn": {},
      "Tags": {},
      "CreatedAt": {}
    },
    "TransitGatewayArn": {},
    "TransitGatewayPeeringAttachmentId": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TransitGatewayPeering|object|false|none|none|

<h2 id="tocS_CreateTransitGatewayRouteTableAttachmentResponse">CreateTransitGatewayRouteTableAttachmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatetransitgatewayroutetableattachmentresponse"></a>
<a id="schema_CreateTransitGatewayRouteTableAttachmentResponse"></a>
<a id="tocScreatetransitgatewayroutetableattachmentresponse"></a>
<a id="tocscreatetransitgatewayroutetableattachmentresponse"></a>

```json
{
  "TransitGatewayRouteTableAttachment": {
    "Attachment": {
      "CoreNetworkId": {},
      "CoreNetworkArn": {},
      "AttachmentId": {},
      "OwnerAccountId": {},
      "AttachmentType": {},
      "State": {},
      "EdgeLocation": {},
      "ResourceArn": {},
      "AttachmentPolicyRuleNumber": {},
      "SegmentName": {},
      "Tags": {},
      "ProposedSegmentChange": {
        "Tags": {},
        "AttachmentPolicyRuleNumber": {},
        "SegmentName": {}
      },
      "CreatedAt": {},
      "UpdatedAt": {}
    },
    "PeeringId": {},
    "TransitGatewayRouteTableArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TransitGatewayRouteTableAttachment|object|false|none|none|

<h2 id="tocS_CreateVpcAttachmentResponse">CreateVpcAttachmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatevpcattachmentresponse"></a>
<a id="schema_CreateVpcAttachmentResponse"></a>
<a id="tocScreatevpcattachmentresponse"></a>
<a id="tocscreatevpcattachmentresponse"></a>

```json
{
  "VpcAttachment": {
    "Attachment": {
      "CoreNetworkId": {},
      "CoreNetworkArn": {},
      "AttachmentId": {},
      "OwnerAccountId": {},
      "AttachmentType": {},
      "State": {},
      "EdgeLocation": {},
      "ResourceArn": {},
      "AttachmentPolicyRuleNumber": {},
      "SegmentName": {},
      "Tags": {},
      "ProposedSegmentChange": {
        "Tags": {},
        "AttachmentPolicyRuleNumber": {},
        "SegmentName": {}
      },
      "CreatedAt": {},
      "UpdatedAt": {}
    },
    "SubnetArns": {},
    "Options": {
      "Ipv6Support": {},
      "ApplianceModeSupport": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcAttachment|object|false|none|none|

<h2 id="tocS_Boolean">Boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_Boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
```

<h2 id="tocS_DeleteAttachmentResponse">DeleteAttachmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteattachmentresponse"></a>
<a id="schema_DeleteAttachmentResponse"></a>
<a id="tocSdeleteattachmentresponse"></a>
<a id="tocsdeleteattachmentresponse"></a>

```json
{
  "Attachment": {
    "CoreNetworkId": {},
    "CoreNetworkArn": {},
    "AttachmentId": {},
    "OwnerAccountId": {},
    "AttachmentType": {},
    "State": {},
    "EdgeLocation": {},
    "ResourceArn": {},
    "AttachmentPolicyRuleNumber": {},
    "SegmentName": {},
    "Tags": {},
    "ProposedSegmentChange": {
      "Tags": {},
      "AttachmentPolicyRuleNumber": {},
      "SegmentName": {}
    },
    "CreatedAt": {},
    "UpdatedAt": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attachment|object|false|none|none|

<h2 id="tocS_DeleteConnectPeerResponse">DeleteConnectPeerResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconnectpeerresponse"></a>
<a id="schema_DeleteConnectPeerResponse"></a>
<a id="tocSdeleteconnectpeerresponse"></a>
<a id="tocsdeleteconnectpeerresponse"></a>

```json
{
  "ConnectPeer": {
    "CoreNetworkId": {},
    "ConnectAttachmentId": {},
    "ConnectPeerId": {},
    "EdgeLocation": {},
    "State": {},
    "CreatedAt": {},
    "Configuration": {
      "CoreNetworkAddress": {},
      "PeerAddress": {},
      "InsideCidrBlocks": {},
      "Protocol": {},
      "BgpConfigurations": {}
    },
    "Tags": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectPeer|object|false|none|none|

<h2 id="tocS_DeleteConnectionResponse">DeleteConnectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconnectionresponse"></a>
<a id="schema_DeleteConnectionResponse"></a>
<a id="tocSdeleteconnectionresponse"></a>
<a id="tocsdeleteconnectionresponse"></a>

```json
{
  "Connection": {
    "ConnectionId": {},
    "ConnectionArn": {},
    "GlobalNetworkId": {},
    "DeviceId": {},
    "ConnectedDeviceId": {},
    "LinkId": {},
    "ConnectedLinkId": {},
    "Description": {},
    "CreatedAt": {},
    "State": {},
    "Tags": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Connection|object|false|none|none|

<h2 id="tocS_DeleteCoreNetworkResponse">DeleteCoreNetworkResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletecorenetworkresponse"></a>
<a id="schema_DeleteCoreNetworkResponse"></a>
<a id="tocSdeletecorenetworkresponse"></a>
<a id="tocsdeletecorenetworkresponse"></a>

```json
{
  "CoreNetwork": {
    "GlobalNetworkId": {},
    "CoreNetworkId": {},
    "CoreNetworkArn": {},
    "Description": {},
    "CreatedAt": {},
    "State": {},
    "Segments": {},
    "Edges": {},
    "Tags": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CoreNetwork|object|false|none|none|

<h2 id="tocS_DeleteCoreNetworkPolicyVersionResponse">DeleteCoreNetworkPolicyVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletecorenetworkpolicyversionresponse"></a>
<a id="schema_DeleteCoreNetworkPolicyVersionResponse"></a>
<a id="tocSdeletecorenetworkpolicyversionresponse"></a>
<a id="tocsdeletecorenetworkpolicyversionresponse"></a>

```json
{
  "CoreNetworkPolicy": {
    "CoreNetworkId": {},
    "PolicyVersionId": {},
    "Alias": {},
    "Description": {},
    "CreatedAt": {},
    "ChangeSetState": {},
    "PolicyErrors": {},
    "PolicyDocument": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CoreNetworkPolicy|object|false|none|none|

<h2 id="tocS_DeleteDeviceResponse">DeleteDeviceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletedeviceresponse"></a>
<a id="schema_DeleteDeviceResponse"></a>
<a id="tocSdeletedeviceresponse"></a>
<a id="tocsdeletedeviceresponse"></a>

```json
{
  "Device": {
    "DeviceId": {},
    "DeviceArn": {},
    "GlobalNetworkId": {},
    "AWSLocation": {
      "Zone": {},
      "SubnetArn": {}
    },
    "Description": {},
    "Type": {},
    "Vendor": {},
    "Model": {},
    "SerialNumber": {},
    "Location": {
      "Address": {},
      "Latitude": {},
      "Longitude": {}
    },
    "SiteId": {},
    "CreatedAt": {},
    "State": {},
    "Tags": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Device|object|false|none|none|

<h2 id="tocS_DeleteGlobalNetworkResponse">DeleteGlobalNetworkResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteglobalnetworkresponse"></a>
<a id="schema_DeleteGlobalNetworkResponse"></a>
<a id="tocSdeleteglobalnetworkresponse"></a>
<a id="tocsdeleteglobalnetworkresponse"></a>

```json
{
  "GlobalNetwork": {
    "GlobalNetworkId": {},
    "GlobalNetworkArn": {},
    "Description": {},
    "CreatedAt": {},
    "State": {},
    "Tags": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalNetwork|object|false|none|none|

<h2 id="tocS_DeleteLinkResponse">DeleteLinkResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletelinkresponse"></a>
<a id="schema_DeleteLinkResponse"></a>
<a id="tocSdeletelinkresponse"></a>
<a id="tocsdeletelinkresponse"></a>

```json
{
  "Link": {
    "LinkId": {},
    "LinkArn": {},
    "GlobalNetworkId": {},
    "SiteId": {},
    "Description": {},
    "Type": {},
    "Bandwidth": {
      "UploadSpeed": {},
      "DownloadSpeed": {}
    },
    "Provider": {},
    "CreatedAt": {},
    "State": {},
    "Tags": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Link|object|false|none|none|

<h2 id="tocS_DeletePeeringResponse">DeletePeeringResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletepeeringresponse"></a>
<a id="schema_DeletePeeringResponse"></a>
<a id="tocSdeletepeeringresponse"></a>
<a id="tocsdeletepeeringresponse"></a>

```json
{
  "Peering": {
    "CoreNetworkId": {},
    "CoreNetworkArn": {},
    "PeeringId": {},
    "OwnerAccountId": {},
    "PeeringType": {},
    "State": {},
    "EdgeLocation": {},
    "ResourceArn": {},
    "Tags": {},
    "CreatedAt": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Peering|object|false|none|none|

<h2 id="tocS_DeleteResourcePolicyResponse">DeleteResourcePolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteresourcepolicyresponse"></a>
<a id="schema_DeleteResourcePolicyResponse"></a>
<a id="tocSdeleteresourcepolicyresponse"></a>
<a id="tocsdeleteresourcepolicyresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteSiteResponse">DeleteSiteResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletesiteresponse"></a>
<a id="schema_DeleteSiteResponse"></a>
<a id="tocSdeletesiteresponse"></a>
<a id="tocsdeletesiteresponse"></a>

```json
{
  "Site": {
    "SiteId": {},
    "SiteArn": {},
    "GlobalNetworkId": {},
    "Description": {},
    "Location": {
      "Address": {},
      "Latitude": {},
      "Longitude": {}
    },
    "CreatedAt": {},
    "State": {},
    "Tags": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Site|object|false|none|none|

<h2 id="tocS_DeregisterTransitGatewayResponse">DeregisterTransitGatewayResponse</h2>
<!-- backwards compatibility -->
<a id="schemaderegistertransitgatewayresponse"></a>
<a id="schema_DeregisterTransitGatewayResponse"></a>
<a id="tocSderegistertransitgatewayresponse"></a>
<a id="tocsderegistertransitgatewayresponse"></a>

```json
{
  "TransitGatewayRegistration": {
    "GlobalNetworkId": {},
    "TransitGatewayArn": {},
    "State": {
      "Code": {},
      "Message": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TransitGatewayRegistration|object|false|none|none|

<h2 id="tocS_DescribeGlobalNetworksResponse">DescribeGlobalNetworksResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeglobalnetworksresponse"></a>
<a id="schema_DescribeGlobalNetworksResponse"></a>
<a id="tocSdescribeglobalnetworksresponse"></a>
<a id="tocsdescribeglobalnetworksresponse"></a>

```json
{
  "GlobalNetworks": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalNetworks|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GlobalNetworkId">GlobalNetworkId</h2>
<!-- backwards compatibility -->
<a id="schemaglobalnetworkid"></a>
<a id="schema_GlobalNetworkId"></a>
<a id="tocSglobalnetworkid"></a>
<a id="tocsglobalnetworkid"></a>

```json
"string"
```

<h2 id="tocS_DisassociateConnectPeerResponse">DisassociateConnectPeerResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateconnectpeerresponse"></a>
<a id="schema_DisassociateConnectPeerResponse"></a>
<a id="tocSdisassociateconnectpeerresponse"></a>
<a id="tocsdisassociateconnectpeerresponse"></a>

```json
{
  "ConnectPeerAssociation": {
    "ConnectPeerId": {},
    "GlobalNetworkId": {},
    "DeviceId": {},
    "LinkId": {},
    "State": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectPeerAssociation|object|false|none|none|

<h2 id="tocS_DisassociateCustomerGatewayResponse">DisassociateCustomerGatewayResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatecustomergatewayresponse"></a>
<a id="schema_DisassociateCustomerGatewayResponse"></a>
<a id="tocSdisassociatecustomergatewayresponse"></a>
<a id="tocsdisassociatecustomergatewayresponse"></a>

```json
{
  "CustomerGatewayAssociation": {
    "CustomerGatewayArn": {},
    "GlobalNetworkId": {},
    "DeviceId": {},
    "LinkId": {},
    "State": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CustomerGatewayAssociation|object|false|none|none|

<h2 id="tocS_DisassociateLinkResponse">DisassociateLinkResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatelinkresponse"></a>
<a id="schema_DisassociateLinkResponse"></a>
<a id="tocSdisassociatelinkresponse"></a>
<a id="tocsdisassociatelinkresponse"></a>

```json
{
  "LinkAssociation": {
    "GlobalNetworkId": {},
    "DeviceId": {},
    "LinkId": {},
    "LinkAssociationState": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LinkAssociation|object|false|none|none|

<h2 id="tocS_DisassociateTransitGatewayConnectPeerResponse">DisassociateTransitGatewayConnectPeerResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatetransitgatewayconnectpeerresponse"></a>
<a id="schema_DisassociateTransitGatewayConnectPeerResponse"></a>
<a id="tocSdisassociatetransitgatewayconnectpeerresponse"></a>
<a id="tocsdisassociatetransitgatewayconnectpeerresponse"></a>

```json
{
  "TransitGatewayConnectPeerAssociation": {
    "TransitGatewayConnectPeerArn": {},
    "GlobalNetworkId": {},
    "DeviceId": {},
    "LinkId": {},
    "State": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TransitGatewayConnectPeerAssociation|object|false|none|none|

<h2 id="tocS_ExecuteCoreNetworkChangeSetResponse">ExecuteCoreNetworkChangeSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexecutecorenetworkchangesetresponse"></a>
<a id="schema_ExecuteCoreNetworkChangeSetResponse"></a>
<a id="tocSexecutecorenetworkchangesetresponse"></a>
<a id="tocsexecutecorenetworkchangesetresponse"></a>

```json
{}
```

<h2 id="tocS_GetConnectAttachmentResponse">GetConnectAttachmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetconnectattachmentresponse"></a>
<a id="schema_GetConnectAttachmentResponse"></a>
<a id="tocSgetconnectattachmentresponse"></a>
<a id="tocsgetconnectattachmentresponse"></a>

```json
{
  "ConnectAttachment": {
    "Attachment": {
      "CoreNetworkId": {},
      "CoreNetworkArn": {},
      "AttachmentId": {},
      "OwnerAccountId": {},
      "AttachmentType": {},
      "State": {},
      "EdgeLocation": {},
      "ResourceArn": {},
      "AttachmentPolicyRuleNumber": {},
      "SegmentName": {},
      "Tags": {},
      "ProposedSegmentChange": {
        "Tags": {},
        "AttachmentPolicyRuleNumber": {},
        "SegmentName": {}
      },
      "CreatedAt": {},
      "UpdatedAt": {}
    },
    "TransportAttachmentId": {},
    "Options": {
      "Protocol": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectAttachment|object|false|none|none|

<h2 id="tocS_GetConnectPeerResponse">GetConnectPeerResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetconnectpeerresponse"></a>
<a id="schema_GetConnectPeerResponse"></a>
<a id="tocSgetconnectpeerresponse"></a>
<a id="tocsgetconnectpeerresponse"></a>

```json
{
  "ConnectPeer": {
    "CoreNetworkId": {},
    "ConnectAttachmentId": {},
    "ConnectPeerId": {},
    "EdgeLocation": {},
    "State": {},
    "CreatedAt": {},
    "Configuration": {
      "CoreNetworkAddress": {},
      "PeerAddress": {},
      "InsideCidrBlocks": {},
      "Protocol": {},
      "BgpConfigurations": {}
    },
    "Tags": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectPeer|object|false|none|none|

<h2 id="tocS_GetConnectPeerAssociationsResponse">GetConnectPeerAssociationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetconnectpeerassociationsresponse"></a>
<a id="schema_GetConnectPeerAssociationsResponse"></a>
<a id="tocSgetconnectpeerassociationsresponse"></a>
<a id="tocsgetconnectpeerassociationsresponse"></a>

```json
{
  "ConnectPeerAssociations": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectPeerAssociations|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ConnectPeerId">ConnectPeerId</h2>
<!-- backwards compatibility -->
<a id="schemaconnectpeerid"></a>
<a id="schema_ConnectPeerId"></a>
<a id="tocSconnectpeerid"></a>
<a id="tocsconnectpeerid"></a>

```json
"string"
```

<h2 id="tocS_GetConnectionsResponse">GetConnectionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetconnectionsresponse"></a>
<a id="schema_GetConnectionsResponse"></a>
<a id="tocSgetconnectionsresponse"></a>
<a id="tocsgetconnectionsresponse"></a>

```json
{
  "Connections": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Connections|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ConnectionId">ConnectionId</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionid"></a>
<a id="schema_ConnectionId"></a>
<a id="tocSconnectionid"></a>
<a id="tocsconnectionid"></a>

```json
"string"
```

<h2 id="tocS_GetCoreNetworkResponse">GetCoreNetworkResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcorenetworkresponse"></a>
<a id="schema_GetCoreNetworkResponse"></a>
<a id="tocSgetcorenetworkresponse"></a>
<a id="tocsgetcorenetworkresponse"></a>

```json
{
  "CoreNetwork": {
    "GlobalNetworkId": {},
    "CoreNetworkId": {},
    "CoreNetworkArn": {},
    "Description": {},
    "CreatedAt": {},
    "State": {},
    "Segments": {},
    "Edges": {},
    "Tags": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CoreNetwork|object|false|none|none|

<h2 id="tocS_GetCoreNetworkChangeEventsResponse">GetCoreNetworkChangeEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcorenetworkchangeeventsresponse"></a>
<a id="schema_GetCoreNetworkChangeEventsResponse"></a>
<a id="tocSgetcorenetworkchangeeventsresponse"></a>
<a id="tocsgetcorenetworkchangeeventsresponse"></a>

```json
{
  "CoreNetworkChangeEvents": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CoreNetworkChangeEvents|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetCoreNetworkChangeSetResponse">GetCoreNetworkChangeSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcorenetworkchangesetresponse"></a>
<a id="schema_GetCoreNetworkChangeSetResponse"></a>
<a id="tocSgetcorenetworkchangesetresponse"></a>
<a id="tocsgetcorenetworkchangesetresponse"></a>

```json
{
  "CoreNetworkChanges": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CoreNetworkChanges|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetCoreNetworkPolicyResponse">GetCoreNetworkPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcorenetworkpolicyresponse"></a>
<a id="schema_GetCoreNetworkPolicyResponse"></a>
<a id="tocSgetcorenetworkpolicyresponse"></a>
<a id="tocsgetcorenetworkpolicyresponse"></a>

```json
{
  "CoreNetworkPolicy": {
    "CoreNetworkId": {},
    "PolicyVersionId": {},
    "Alias": {},
    "Description": {},
    "CreatedAt": {},
    "ChangeSetState": {},
    "PolicyErrors": {},
    "PolicyDocument": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CoreNetworkPolicy|object|false|none|none|

<h2 id="tocS_GetCustomerGatewayAssociationsResponse">GetCustomerGatewayAssociationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcustomergatewayassociationsresponse"></a>
<a id="schema_GetCustomerGatewayAssociationsResponse"></a>
<a id="tocSgetcustomergatewayassociationsresponse"></a>
<a id="tocsgetcustomergatewayassociationsresponse"></a>

```json
{
  "CustomerGatewayAssociations": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CustomerGatewayAssociations|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_CustomerGatewayArn">CustomerGatewayArn</h2>
<!-- backwards compatibility -->
<a id="schemacustomergatewayarn"></a>
<a id="schema_CustomerGatewayArn"></a>
<a id="tocScustomergatewayarn"></a>
<a id="tocscustomergatewayarn"></a>

```json
"string"
```

<h2 id="tocS_GetDevicesResponse">GetDevicesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdevicesresponse"></a>
<a id="schema_GetDevicesResponse"></a>
<a id="tocSgetdevicesresponse"></a>
<a id="tocsgetdevicesresponse"></a>

```json
{
  "Devices": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Devices|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DeviceId">DeviceId</h2>
<!-- backwards compatibility -->
<a id="schemadeviceid"></a>
<a id="schema_DeviceId"></a>
<a id="tocSdeviceid"></a>
<a id="tocsdeviceid"></a>

```json
"string"
```

<h2 id="tocS_GetLinkAssociationsResponse">GetLinkAssociationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetlinkassociationsresponse"></a>
<a id="schema_GetLinkAssociationsResponse"></a>
<a id="tocSgetlinkassociationsresponse"></a>
<a id="tocsgetlinkassociationsresponse"></a>

```json
{
  "LinkAssociations": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LinkAssociations|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetLinksResponse">GetLinksResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetlinksresponse"></a>
<a id="schema_GetLinksResponse"></a>
<a id="tocSgetlinksresponse"></a>
<a id="tocsgetlinksresponse"></a>

```json
{
  "Links": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Links|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_LinkId">LinkId</h2>
<!-- backwards compatibility -->
<a id="schemalinkid"></a>
<a id="schema_LinkId"></a>
<a id="tocSlinkid"></a>
<a id="tocslinkid"></a>

```json
"string"
```

<h2 id="tocS_GetNetworkResourceCountsResponse">GetNetworkResourceCountsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetnetworkresourcecountsresponse"></a>
<a id="schema_GetNetworkResourceCountsResponse"></a>
<a id="tocSgetnetworkresourcecountsresponse"></a>
<a id="tocsgetnetworkresourcecountsresponse"></a>

```json
{
  "NetworkResourceCounts": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NetworkResourceCounts|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetNetworkResourceRelationshipsResponse">GetNetworkResourceRelationshipsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetnetworkresourcerelationshipsresponse"></a>
<a id="schema_GetNetworkResourceRelationshipsResponse"></a>
<a id="tocSgetnetworkresourcerelationshipsresponse"></a>
<a id="tocsgetnetworkresourcerelationshipsresponse"></a>

```json
{
  "Relationships": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Relationships|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetNetworkResourcesResponse">GetNetworkResourcesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetnetworkresourcesresponse"></a>
<a id="schema_GetNetworkResourcesResponse"></a>
<a id="tocSgetnetworkresourcesresponse"></a>
<a id="tocsgetnetworkresourcesresponse"></a>

```json
{
  "NetworkResources": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NetworkResources|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetNetworkRoutesResponse">GetNetworkRoutesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetnetworkroutesresponse"></a>
<a id="schema_GetNetworkRoutesResponse"></a>
<a id="tocSgetnetworkroutesresponse"></a>
<a id="tocsgetnetworkroutesresponse"></a>

```json
{
  "RouteTableArn": {},
  "CoreNetworkSegmentEdge": {
    "CoreNetworkId": {},
    "SegmentName": {},
    "EdgeLocation": {}
  },
  "RouteTableType": {},
  "RouteTableTimestamp": {},
  "NetworkRoutes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RouteTableArn|object|false|none|none|
|CoreNetworkSegmentEdge|object|false|none|none|
|RouteTableType|object|false|none|none|
|RouteTableTimestamp|object|false|none|none|
|NetworkRoutes|object|false|none|none|

<h2 id="tocS_TransitGatewayRouteTableArn">TransitGatewayRouteTableArn</h2>
<!-- backwards compatibility -->
<a id="schematransitgatewayroutetablearn"></a>
<a id="schema_TransitGatewayRouteTableArn"></a>
<a id="tocStransitgatewayroutetablearn"></a>
<a id="tocstransitgatewayroutetablearn"></a>

```json
"string"
```

<h2 id="tocS_CoreNetworkSegmentEdgeIdentifier">CoreNetworkSegmentEdgeIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemacorenetworksegmentedgeidentifier"></a>
<a id="schema_CoreNetworkSegmentEdgeIdentifier"></a>
<a id="tocScorenetworksegmentedgeidentifier"></a>
<a id="tocscorenetworksegmentedgeidentifier"></a>

```json
{
  "CoreNetworkId": {},
  "SegmentName": {},
  "EdgeLocation": {}
}
```

Returns details about a core network edge.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CoreNetworkId|object|false|none|none|
|SegmentName|object|false|none|none|
|EdgeLocation|object|false|none|none|

<h2 id="tocS_RouteState">RouteState</h2>
<!-- backwards compatibility -->
<a id="schemaroutestate"></a>
<a id="schema_RouteState"></a>
<a id="tocSroutestate"></a>
<a id="tocsroutestate"></a>

```json
"ACTIVE"
```

<h2 id="tocS_RouteType">RouteType</h2>
<!-- backwards compatibility -->
<a id="schemaroutetype"></a>
<a id="schema_RouteType"></a>
<a id="tocSroutetype"></a>
<a id="tocsroutetype"></a>

```json
"PROPAGATED"
```

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

<h2 id="tocS_GetNetworkTelemetryResponse">GetNetworkTelemetryResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetnetworktelemetryresponse"></a>
<a id="schema_GetNetworkTelemetryResponse"></a>
<a id="tocSgetnetworktelemetryresponse"></a>
<a id="tocsgetnetworktelemetryresponse"></a>

```json
{
  "NetworkTelemetry": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NetworkTelemetry|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetResourcePolicyResponse">GetResourcePolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetresourcepolicyresponse"></a>
<a id="schema_GetResourcePolicyResponse"></a>
<a id="tocSgetresourcepolicyresponse"></a>
<a id="tocsgetresourcepolicyresponse"></a>

```json
{
  "PolicyDocument": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyDocument|object|false|none|none|

<h2 id="tocS_GetRouteAnalysisResponse">GetRouteAnalysisResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetrouteanalysisresponse"></a>
<a id="schema_GetRouteAnalysisResponse"></a>
<a id="tocSgetrouteanalysisresponse"></a>
<a id="tocsgetrouteanalysisresponse"></a>

```json
{
  "RouteAnalysis": {
    "GlobalNetworkId": {},
    "OwnerAccountId": {},
    "RouteAnalysisId": {},
    "StartTimestamp": {},
    "Status": {},
    "Source": {
      "TransitGatewayAttachmentArn": {},
      "TransitGatewayArn": {},
      "IpAddress": {}
    },
    "Destination": {
      "TransitGatewayAttachmentArn": {},
      "TransitGatewayArn": {},
      "IpAddress": {}
    },
    "IncludeReturnPath": {},
    "UseMiddleboxes": {},
    "ForwardPath": {
      "CompletionStatus": {
        "ResultCode": {},
        "ReasonCode": {},
        "ReasonContext": {
          "property1": "string",
          "property2": "string"
        }
      },
      "Path": {}
    },
    "ReturnPath": {
      "CompletionStatus": {
        "ResultCode": {},
        "ReasonCode": {},
        "ReasonContext": {
          "property1": "string",
          "property2": "string"
        }
      },
      "Path": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RouteAnalysis|object|false|none|none|

<h2 id="tocS_GetSiteToSiteVpnAttachmentResponse">GetSiteToSiteVpnAttachmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsitetositevpnattachmentresponse"></a>
<a id="schema_GetSiteToSiteVpnAttachmentResponse"></a>
<a id="tocSgetsitetositevpnattachmentresponse"></a>
<a id="tocsgetsitetositevpnattachmentresponse"></a>

```json
{
  "SiteToSiteVpnAttachment": {
    "Attachment": {
      "CoreNetworkId": {},
      "CoreNetworkArn": {},
      "AttachmentId": {},
      "OwnerAccountId": {},
      "AttachmentType": {},
      "State": {},
      "EdgeLocation": {},
      "ResourceArn": {},
      "AttachmentPolicyRuleNumber": {},
      "SegmentName": {},
      "Tags": {},
      "ProposedSegmentChange": {
        "Tags": {},
        "AttachmentPolicyRuleNumber": {},
        "SegmentName": {}
      },
      "CreatedAt": {},
      "UpdatedAt": {}
    },
    "VpnConnectionArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SiteToSiteVpnAttachment|object|false|none|none|

<h2 id="tocS_GetSitesResponse">GetSitesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsitesresponse"></a>
<a id="schema_GetSitesResponse"></a>
<a id="tocSgetsitesresponse"></a>
<a id="tocsgetsitesresponse"></a>

```json
{
  "Sites": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Sites|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_SiteId">SiteId</h2>
<!-- backwards compatibility -->
<a id="schemasiteid"></a>
<a id="schema_SiteId"></a>
<a id="tocSsiteid"></a>
<a id="tocssiteid"></a>

```json
"string"
```

<h2 id="tocS_GetTransitGatewayConnectPeerAssociationsResponse">GetTransitGatewayConnectPeerAssociationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagettransitgatewayconnectpeerassociationsresponse"></a>
<a id="schema_GetTransitGatewayConnectPeerAssociationsResponse"></a>
<a id="tocSgettransitgatewayconnectpeerassociationsresponse"></a>
<a id="tocsgettransitgatewayconnectpeerassociationsresponse"></a>

```json
{
  "TransitGatewayConnectPeerAssociations": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TransitGatewayConnectPeerAssociations|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_TransitGatewayConnectPeerArn">TransitGatewayConnectPeerArn</h2>
<!-- backwards compatibility -->
<a id="schematransitgatewayconnectpeerarn"></a>
<a id="schema_TransitGatewayConnectPeerArn"></a>
<a id="tocStransitgatewayconnectpeerarn"></a>
<a id="tocstransitgatewayconnectpeerarn"></a>

```json
"string"
```

<h2 id="tocS_GetTransitGatewayPeeringResponse">GetTransitGatewayPeeringResponse</h2>
<!-- backwards compatibility -->
<a id="schemagettransitgatewaypeeringresponse"></a>
<a id="schema_GetTransitGatewayPeeringResponse"></a>
<a id="tocSgettransitgatewaypeeringresponse"></a>
<a id="tocsgettransitgatewaypeeringresponse"></a>

```json
{
  "TransitGatewayPeering": {
    "Peering": {
      "CoreNetworkId": {},
      "CoreNetworkArn": {},
      "PeeringId": {},
      "OwnerAccountId": {},
      "PeeringType": {},
      "State": {},
      "EdgeLocation": {},
      "ResourceArn": {},
      "Tags": {},
      "CreatedAt": {}
    },
    "TransitGatewayArn": {},
    "TransitGatewayPeeringAttachmentId": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TransitGatewayPeering|object|false|none|none|

<h2 id="tocS_GetTransitGatewayRegistrationsResponse">GetTransitGatewayRegistrationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagettransitgatewayregistrationsresponse"></a>
<a id="schema_GetTransitGatewayRegistrationsResponse"></a>
<a id="tocSgettransitgatewayregistrationsresponse"></a>
<a id="tocsgettransitgatewayregistrationsresponse"></a>

```json
{
  "TransitGatewayRegistrations": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TransitGatewayRegistrations|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_TransitGatewayArn">TransitGatewayArn</h2>
<!-- backwards compatibility -->
<a id="schematransitgatewayarn"></a>
<a id="schema_TransitGatewayArn"></a>
<a id="tocStransitgatewayarn"></a>
<a id="tocstransitgatewayarn"></a>

```json
"string"
```

<h2 id="tocS_GetTransitGatewayRouteTableAttachmentResponse">GetTransitGatewayRouteTableAttachmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemagettransitgatewayroutetableattachmentresponse"></a>
<a id="schema_GetTransitGatewayRouteTableAttachmentResponse"></a>
<a id="tocSgettransitgatewayroutetableattachmentresponse"></a>
<a id="tocsgettransitgatewayroutetableattachmentresponse"></a>

```json
{
  "TransitGatewayRouteTableAttachment": {
    "Attachment": {
      "CoreNetworkId": {},
      "CoreNetworkArn": {},
      "AttachmentId": {},
      "OwnerAccountId": {},
      "AttachmentType": {},
      "State": {},
      "EdgeLocation": {},
      "ResourceArn": {},
      "AttachmentPolicyRuleNumber": {},
      "SegmentName": {},
      "Tags": {},
      "ProposedSegmentChange": {
        "Tags": {},
        "AttachmentPolicyRuleNumber": {},
        "SegmentName": {}
      },
      "CreatedAt": {},
      "UpdatedAt": {}
    },
    "PeeringId": {},
    "TransitGatewayRouteTableArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TransitGatewayRouteTableAttachment|object|false|none|none|

<h2 id="tocS_GetVpcAttachmentResponse">GetVpcAttachmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetvpcattachmentresponse"></a>
<a id="schema_GetVpcAttachmentResponse"></a>
<a id="tocSgetvpcattachmentresponse"></a>
<a id="tocsgetvpcattachmentresponse"></a>

```json
{
  "VpcAttachment": {
    "Attachment": {
      "CoreNetworkId": {},
      "CoreNetworkArn": {},
      "AttachmentId": {},
      "OwnerAccountId": {},
      "AttachmentType": {},
      "State": {},
      "EdgeLocation": {},
      "ResourceArn": {},
      "AttachmentPolicyRuleNumber": {},
      "SegmentName": {},
      "Tags": {},
      "ProposedSegmentChange": {
        "Tags": {},
        "AttachmentPolicyRuleNumber": {},
        "SegmentName": {}
      },
      "CreatedAt": {},
      "UpdatedAt": {}
    },
    "SubnetArns": {},
    "Options": {
      "Ipv6Support": {},
      "ApplianceModeSupport": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcAttachment|object|false|none|none|

<h2 id="tocS_ListAttachmentsResponse">ListAttachmentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistattachmentsresponse"></a>
<a id="schema_ListAttachmentsResponse"></a>
<a id="tocSlistattachmentsresponse"></a>
<a id="tocslistattachmentsresponse"></a>

```json
{
  "Attachments": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attachments|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListConnectPeersResponse">ListConnectPeersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistconnectpeersresponse"></a>
<a id="schema_ListConnectPeersResponse"></a>
<a id="tocSlistconnectpeersresponse"></a>
<a id="tocslistconnectpeersresponse"></a>

```json
{
  "ConnectPeers": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectPeers|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListCoreNetworkPolicyVersionsResponse">ListCoreNetworkPolicyVersionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcorenetworkpolicyversionsresponse"></a>
<a id="schema_ListCoreNetworkPolicyVersionsResponse"></a>
<a id="tocSlistcorenetworkpolicyversionsresponse"></a>
<a id="tocslistcorenetworkpolicyversionsresponse"></a>

```json
{
  "CoreNetworkPolicyVersions": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CoreNetworkPolicyVersions|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListCoreNetworksResponse">ListCoreNetworksResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcorenetworksresponse"></a>
<a id="schema_ListCoreNetworksResponse"></a>
<a id="tocSlistcorenetworksresponse"></a>
<a id="tocslistcorenetworksresponse"></a>

```json
{
  "CoreNetworks": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CoreNetworks|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListOrganizationServiceAccessStatusResponse">ListOrganizationServiceAccessStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistorganizationserviceaccessstatusresponse"></a>
<a id="schema_ListOrganizationServiceAccessStatusResponse"></a>
<a id="tocSlistorganizationserviceaccessstatusresponse"></a>
<a id="tocslistorganizationserviceaccessstatusresponse"></a>

```json
{
  "OrganizationStatus": {
    "OrganizationId": {},
    "OrganizationAwsServiceAccessStatus": {},
    "SLRDeploymentStatus": {},
    "AccountStatusList": {}
  },
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationStatus|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListPeeringsResponse">ListPeeringsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistpeeringsresponse"></a>
<a id="schema_ListPeeringsResponse"></a>
<a id="tocSlistpeeringsresponse"></a>
<a id="tocslistpeeringsresponse"></a>

```json
{
  "Peerings": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Peerings|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "TagList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TagList|object|false|none|none|

<h2 id="tocS_PutCoreNetworkPolicyResponse">PutCoreNetworkPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputcorenetworkpolicyresponse"></a>
<a id="schema_PutCoreNetworkPolicyResponse"></a>
<a id="tocSputcorenetworkpolicyresponse"></a>
<a id="tocsputcorenetworkpolicyresponse"></a>

```json
{
  "CoreNetworkPolicy": {
    "CoreNetworkId": {},
    "PolicyVersionId": {},
    "Alias": {},
    "Description": {},
    "CreatedAt": {},
    "ChangeSetState": {},
    "PolicyErrors": {},
    "PolicyDocument": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CoreNetworkPolicy|object|false|none|none|

<h2 id="tocS_PutResourcePolicyResponse">PutResourcePolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputresourcepolicyresponse"></a>
<a id="schema_PutResourcePolicyResponse"></a>
<a id="tocSputresourcepolicyresponse"></a>
<a id="tocsputresourcepolicyresponse"></a>

```json
{}
```

<h2 id="tocS_RegisterTransitGatewayResponse">RegisterTransitGatewayResponse</h2>
<!-- backwards compatibility -->
<a id="schemaregistertransitgatewayresponse"></a>
<a id="schema_RegisterTransitGatewayResponse"></a>
<a id="tocSregistertransitgatewayresponse"></a>
<a id="tocsregistertransitgatewayresponse"></a>

```json
{
  "TransitGatewayRegistration": {
    "GlobalNetworkId": {},
    "TransitGatewayArn": {},
    "State": {
      "Code": {},
      "Message": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TransitGatewayRegistration|object|false|none|none|

<h2 id="tocS_RejectAttachmentResponse">RejectAttachmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemarejectattachmentresponse"></a>
<a id="schema_RejectAttachmentResponse"></a>
<a id="tocSrejectattachmentresponse"></a>
<a id="tocsrejectattachmentresponse"></a>

```json
{
  "Attachment": {
    "CoreNetworkId": {},
    "CoreNetworkArn": {},
    "AttachmentId": {},
    "OwnerAccountId": {},
    "AttachmentType": {},
    "State": {},
    "EdgeLocation": {},
    "ResourceArn": {},
    "AttachmentPolicyRuleNumber": {},
    "SegmentName": {},
    "Tags": {},
    "ProposedSegmentChange": {
      "Tags": {},
      "AttachmentPolicyRuleNumber": {},
      "SegmentName": {}
    },
    "CreatedAt": {},
    "UpdatedAt": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attachment|object|false|none|none|

<h2 id="tocS_RestoreCoreNetworkPolicyVersionResponse">RestoreCoreNetworkPolicyVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemarestorecorenetworkpolicyversionresponse"></a>
<a id="schema_RestoreCoreNetworkPolicyVersionResponse"></a>
<a id="tocSrestorecorenetworkpolicyversionresponse"></a>
<a id="tocsrestorecorenetworkpolicyversionresponse"></a>

```json
{
  "CoreNetworkPolicy": {
    "CoreNetworkId": {},
    "PolicyVersionId": {},
    "Alias": {},
    "Description": {},
    "CreatedAt": {},
    "ChangeSetState": {},
    "PolicyErrors": {},
    "PolicyDocument": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CoreNetworkPolicy|object|false|none|none|

<h2 id="tocS_StartOrganizationServiceAccessUpdateResponse">StartOrganizationServiceAccessUpdateResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartorganizationserviceaccessupdateresponse"></a>
<a id="schema_StartOrganizationServiceAccessUpdateResponse"></a>
<a id="tocSstartorganizationserviceaccessupdateresponse"></a>
<a id="tocsstartorganizationserviceaccessupdateresponse"></a>

```json
{
  "OrganizationStatus": {
    "OrganizationId": {},
    "OrganizationAwsServiceAccessStatus": {},
    "SLRDeploymentStatus": {},
    "AccountStatusList": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationStatus|object|false|none|none|

<h2 id="tocS_StartRouteAnalysisResponse">StartRouteAnalysisResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartrouteanalysisresponse"></a>
<a id="schema_StartRouteAnalysisResponse"></a>
<a id="tocSstartrouteanalysisresponse"></a>
<a id="tocsstartrouteanalysisresponse"></a>

```json
{
  "RouteAnalysis": {
    "GlobalNetworkId": {},
    "OwnerAccountId": {},
    "RouteAnalysisId": {},
    "StartTimestamp": {},
    "Status": {},
    "Source": {
      "TransitGatewayAttachmentArn": {},
      "TransitGatewayArn": {},
      "IpAddress": {}
    },
    "Destination": {
      "TransitGatewayAttachmentArn": {},
      "TransitGatewayArn": {},
      "IpAddress": {}
    },
    "IncludeReturnPath": {},
    "UseMiddleboxes": {},
    "ForwardPath": {
      "CompletionStatus": {
        "ResultCode": {},
        "ReasonCode": {},
        "ReasonContext": {
          "property1": "string",
          "property2": "string"
        }
      },
      "Path": {}
    },
    "ReturnPath": {
      "CompletionStatus": {
        "ResultCode": {},
        "ReasonCode": {},
        "ReasonContext": {
          "property1": "string",
          "property2": "string"
        }
      },
      "Path": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RouteAnalysis|object|false|none|none|

<h2 id="tocS_TransitGatewayAttachmentArn">TransitGatewayAttachmentArn</h2>
<!-- backwards compatibility -->
<a id="schematransitgatewayattachmentarn"></a>
<a id="schema_TransitGatewayAttachmentArn"></a>
<a id="tocStransitgatewayattachmentarn"></a>
<a id="tocstransitgatewayattachmentarn"></a>

```json
"string"
```

<h2 id="tocS_IPAddress">IPAddress</h2>
<!-- backwards compatibility -->
<a id="schemaipaddress"></a>
<a id="schema_IPAddress"></a>
<a id="tocSipaddress"></a>
<a id="tocsipaddress"></a>

```json
"string"
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

<h2 id="tocS_UpdateConnectionResponse">UpdateConnectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconnectionresponse"></a>
<a id="schema_UpdateConnectionResponse"></a>
<a id="tocSupdateconnectionresponse"></a>
<a id="tocsupdateconnectionresponse"></a>

```json
{
  "Connection": {
    "ConnectionId": {},
    "ConnectionArn": {},
    "GlobalNetworkId": {},
    "DeviceId": {},
    "ConnectedDeviceId": {},
    "LinkId": {},
    "ConnectedLinkId": {},
    "Description": {},
    "CreatedAt": {},
    "State": {},
    "Tags": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Connection|object|false|none|none|

<h2 id="tocS_UpdateCoreNetworkResponse">UpdateCoreNetworkResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecorenetworkresponse"></a>
<a id="schema_UpdateCoreNetworkResponse"></a>
<a id="tocSupdatecorenetworkresponse"></a>
<a id="tocsupdatecorenetworkresponse"></a>

```json
{
  "CoreNetwork": {
    "GlobalNetworkId": {},
    "CoreNetworkId": {},
    "CoreNetworkArn": {},
    "Description": {},
    "CreatedAt": {},
    "State": {},
    "Segments": {},
    "Edges": {},
    "Tags": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CoreNetwork|object|false|none|none|

<h2 id="tocS_UpdateDeviceResponse">UpdateDeviceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedeviceresponse"></a>
<a id="schema_UpdateDeviceResponse"></a>
<a id="tocSupdatedeviceresponse"></a>
<a id="tocsupdatedeviceresponse"></a>

```json
{
  "Device": {
    "DeviceId": {},
    "DeviceArn": {},
    "GlobalNetworkId": {},
    "AWSLocation": {
      "Zone": {},
      "SubnetArn": {}
    },
    "Description": {},
    "Type": {},
    "Vendor": {},
    "Model": {},
    "SerialNumber": {},
    "Location": {
      "Address": {},
      "Latitude": {},
      "Longitude": {}
    },
    "SiteId": {},
    "CreatedAt": {},
    "State": {},
    "Tags": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Device|object|false|none|none|

<h2 id="tocS_UpdateGlobalNetworkResponse">UpdateGlobalNetworkResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateglobalnetworkresponse"></a>
<a id="schema_UpdateGlobalNetworkResponse"></a>
<a id="tocSupdateglobalnetworkresponse"></a>
<a id="tocsupdateglobalnetworkresponse"></a>

```json
{
  "GlobalNetwork": {
    "GlobalNetworkId": {},
    "GlobalNetworkArn": {},
    "Description": {},
    "CreatedAt": {},
    "State": {},
    "Tags": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalNetwork|object|false|none|none|

<h2 id="tocS_UpdateLinkResponse">UpdateLinkResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatelinkresponse"></a>
<a id="schema_UpdateLinkResponse"></a>
<a id="tocSupdatelinkresponse"></a>
<a id="tocsupdatelinkresponse"></a>

```json
{
  "Link": {
    "LinkId": {},
    "LinkArn": {},
    "GlobalNetworkId": {},
    "SiteId": {},
    "Description": {},
    "Type": {},
    "Bandwidth": {
      "UploadSpeed": {},
      "DownloadSpeed": {}
    },
    "Provider": {},
    "CreatedAt": {},
    "State": {},
    "Tags": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Link|object|false|none|none|

<h2 id="tocS_UpdateNetworkResourceMetadataResponse">UpdateNetworkResourceMetadataResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatenetworkresourcemetadataresponse"></a>
<a id="schema_UpdateNetworkResourceMetadataResponse"></a>
<a id="tocSupdatenetworkresourcemetadataresponse"></a>
<a id="tocsupdatenetworkresourcemetadataresponse"></a>

```json
{
  "ResourceArn": {},
  "Metadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|false|none|none|
|Metadata|object|false|none|none|

<h2 id="tocS_UpdateSiteResponse">UpdateSiteResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesiteresponse"></a>
<a id="schema_UpdateSiteResponse"></a>
<a id="tocSupdatesiteresponse"></a>
<a id="tocsupdatesiteresponse"></a>

```json
{
  "Site": {
    "SiteId": {},
    "SiteArn": {},
    "GlobalNetworkId": {},
    "Description": {},
    "Location": {
      "Address": {},
      "Latitude": {},
      "Longitude": {}
    },
    "CreatedAt": {},
    "State": {},
    "Tags": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Site|object|false|none|none|

<h2 id="tocS_UpdateVpcAttachmentResponse">UpdateVpcAttachmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatevpcattachmentresponse"></a>
<a id="schema_UpdateVpcAttachmentResponse"></a>
<a id="tocSupdatevpcattachmentresponse"></a>
<a id="tocsupdatevpcattachmentresponse"></a>

```json
{
  "VpcAttachment": {
    "Attachment": {
      "CoreNetworkId": {},
      "CoreNetworkArn": {},
      "AttachmentId": {},
      "OwnerAccountId": {},
      "AttachmentType": {},
      "State": {},
      "EdgeLocation": {},
      "ResourceArn": {},
      "AttachmentPolicyRuleNumber": {},
      "SegmentName": {},
      "Tags": {},
      "ProposedSegmentChange": {
        "Tags": {},
        "AttachmentPolicyRuleNumber": {},
        "SegmentName": {}
      },
      "CreatedAt": {},
      "UpdatedAt": {}
    },
    "SubnetArns": {},
    "Options": {
      "Ipv6Support": {},
      "ApplianceModeSupport": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcAttachment|object|false|none|none|

<h2 id="tocS_AWSAccountId">AWSAccountId</h2>
<!-- backwards compatibility -->
<a id="schemaawsaccountid"></a>
<a id="schema_AWSAccountId"></a>
<a id="tocSawsaccountid"></a>
<a id="tocsawsaccountid"></a>

```json
"stringstring"
```

<h2 id="tocS_AWSLocation">AWSLocation</h2>
<!-- backwards compatibility -->
<a id="schemaawslocation"></a>
<a id="schema_AWSLocation"></a>
<a id="tocSawslocation"></a>
<a id="tocsawslocation"></a>

```json
{
  "Zone": {},
  "SubnetArn": {}
}
```

Specifies a location in Amazon Web Services.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Zone|object|false|none|none|
|SubnetArn|object|false|none|none|

<h2 id="tocS_AttachmentId">AttachmentId</h2>
<!-- backwards compatibility -->
<a id="schemaattachmentid"></a>
<a id="schema_AttachmentId"></a>
<a id="tocSattachmentid"></a>
<a id="tocsattachmentid"></a>

```json
"string"
```

<h2 id="tocS_AcceptAttachmentRequest">AcceptAttachmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemaacceptattachmentrequest"></a>
<a id="schema_AcceptAttachmentRequest"></a>
<a id="tocSacceptattachmentrequest"></a>
<a id="tocsacceptattachmentrequest"></a>

```json
{}
```

<h2 id="tocS_Attachment">Attachment</h2>
<!-- backwards compatibility -->
<a id="schemaattachment"></a>
<a id="schema_Attachment"></a>
<a id="tocSattachment"></a>
<a id="tocsattachment"></a>

```json
{
  "CoreNetworkId": {},
  "CoreNetworkArn": {},
  "AttachmentId": {},
  "OwnerAccountId": {},
  "AttachmentType": {},
  "State": {},
  "EdgeLocation": {},
  "ResourceArn": {},
  "AttachmentPolicyRuleNumber": {},
  "SegmentName": {},
  "Tags": {},
  "ProposedSegmentChange": {
    "Tags": {},
    "AttachmentPolicyRuleNumber": {},
    "SegmentName": {}
  },
  "CreatedAt": {},
  "UpdatedAt": {}
}
```

Describes a core network attachment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CoreNetworkId|object|false|none|none|
|CoreNetworkArn|object|false|none|none|
|AttachmentId|object|false|none|none|
|OwnerAccountId|object|false|none|none|
|AttachmentType|object|false|none|none|
|State|object|false|none|none|
|EdgeLocation|object|false|none|none|
|ResourceArn|object|false|none|none|
|AttachmentPolicyRuleNumber|object|false|none|none|
|SegmentName|object|false|none|none|
|Tags|object|false|none|none|
|ProposedSegmentChange|object|false|none|none|
|CreatedAt|object|false|none|none|
|UpdatedAt|object|false|none|none|

<h2 id="tocS_AccountId">AccountId</h2>
<!-- backwards compatibility -->
<a id="schemaaccountid"></a>
<a id="schema_AccountId"></a>
<a id="tocSaccountid"></a>
<a id="tocsaccountid"></a>

```json
"string"
```

<h2 id="tocS_SLRDeploymentStatus">SLRDeploymentStatus</h2>
<!-- backwards compatibility -->
<a id="schemaslrdeploymentstatus"></a>
<a id="schema_SLRDeploymentStatus"></a>
<a id="tocSslrdeploymentstatus"></a>
<a id="tocsslrdeploymentstatus"></a>

```json
"string"
```

<h2 id="tocS_AccountStatus">AccountStatus</h2>
<!-- backwards compatibility -->
<a id="schemaaccountstatus"></a>
<a id="schema_AccountStatus"></a>
<a id="tocSaccountstatus"></a>
<a id="tocsaccountstatus"></a>

```json
{
  "AccountId": {},
  "SLRDeploymentStatus": {}
}
```

Describes the current status of an account within an Amazon Web Services Organization, including service-linked roles (SLRs).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|false|none|none|
|SLRDeploymentStatus|object|false|none|none|

<h2 id="tocS_AccountStatusList">AccountStatusList</h2>
<!-- backwards compatibility -->
<a id="schemaaccountstatuslist"></a>
<a id="schema_AccountStatusList"></a>
<a id="tocSaccountstatuslist"></a>
<a id="tocsaccountstatuslist"></a>

```json
[
  {
    "AccountId": {},
    "SLRDeploymentStatus": {}
  }
]
```

<h2 id="tocS_Action">Action</h2>
<!-- backwards compatibility -->
<a id="schemaaction"></a>
<a id="schema_Action"></a>
<a id="tocSaction"></a>
<a id="tocsaction"></a>

```json
"string"
```

<h2 id="tocS_AssociateConnectPeerRequest">AssociateConnectPeerRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociateconnectpeerrequest"></a>
<a id="schema_AssociateConnectPeerRequest"></a>
<a id="tocSassociateconnectpeerrequest"></a>
<a id="tocsassociateconnectpeerrequest"></a>

```json
{
  "ConnectPeerId": {},
  "DeviceId": {},
  "LinkId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectPeerId|object|true|none|none|
|DeviceId|object|true|none|none|
|LinkId|object|false|none|none|

<h2 id="tocS_ConnectPeerAssociation">ConnectPeerAssociation</h2>
<!-- backwards compatibility -->
<a id="schemaconnectpeerassociation"></a>
<a id="schema_ConnectPeerAssociation"></a>
<a id="tocSconnectpeerassociation"></a>
<a id="tocsconnectpeerassociation"></a>

```json
{
  "ConnectPeerId": {},
  "GlobalNetworkId": {},
  "DeviceId": {},
  "LinkId": {},
  "State": {}
}
```

Describes a core network Connect peer association.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectPeerId|object|false|none|none|
|GlobalNetworkId|object|false|none|none|
|DeviceId|object|false|none|none|
|LinkId|object|false|none|none|
|State|object|false|none|none|

<h2 id="tocS_AssociateCustomerGatewayRequest">AssociateCustomerGatewayRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatecustomergatewayrequest"></a>
<a id="schema_AssociateCustomerGatewayRequest"></a>
<a id="tocSassociatecustomergatewayrequest"></a>
<a id="tocsassociatecustomergatewayrequest"></a>

```json
{
  "CustomerGatewayArn": {},
  "DeviceId": {},
  "LinkId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CustomerGatewayArn|object|true|none|none|
|DeviceId|object|true|none|none|
|LinkId|object|false|none|none|

<h2 id="tocS_CustomerGatewayAssociation">CustomerGatewayAssociation</h2>
<!-- backwards compatibility -->
<a id="schemacustomergatewayassociation"></a>
<a id="schema_CustomerGatewayAssociation"></a>
<a id="tocScustomergatewayassociation"></a>
<a id="tocscustomergatewayassociation"></a>

```json
{
  "CustomerGatewayArn": {},
  "GlobalNetworkId": {},
  "DeviceId": {},
  "LinkId": {},
  "State": {}
}
```

Describes the association between a customer gateway, a device, and a link.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CustomerGatewayArn|object|false|none|none|
|GlobalNetworkId|object|false|none|none|
|DeviceId|object|false|none|none|
|LinkId|object|false|none|none|
|State|object|false|none|none|

<h2 id="tocS_AssociateLinkRequest">AssociateLinkRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatelinkrequest"></a>
<a id="schema_AssociateLinkRequest"></a>
<a id="tocSassociatelinkrequest"></a>
<a id="tocsassociatelinkrequest"></a>

```json
{
  "DeviceId": {},
  "LinkId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceId|object|true|none|none|
|LinkId|object|true|none|none|

<h2 id="tocS_LinkAssociation">LinkAssociation</h2>
<!-- backwards compatibility -->
<a id="schemalinkassociation"></a>
<a id="schema_LinkAssociation"></a>
<a id="tocSlinkassociation"></a>
<a id="tocslinkassociation"></a>

```json
{
  "GlobalNetworkId": {},
  "DeviceId": {},
  "LinkId": {},
  "LinkAssociationState": {}
}
```

Describes the association between a device and a link.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalNetworkId|object|false|none|none|
|DeviceId|object|false|none|none|
|LinkId|object|false|none|none|
|LinkAssociationState|object|false|none|none|

<h2 id="tocS_AssociateTransitGatewayConnectPeerRequest">AssociateTransitGatewayConnectPeerRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatetransitgatewayconnectpeerrequest"></a>
<a id="schema_AssociateTransitGatewayConnectPeerRequest"></a>
<a id="tocSassociatetransitgatewayconnectpeerrequest"></a>
<a id="tocsassociatetransitgatewayconnectpeerrequest"></a>

```json
{
  "TransitGatewayConnectPeerArn": {},
  "DeviceId": {},
  "LinkId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TransitGatewayConnectPeerArn|object|true|none|none|
|DeviceId|object|true|none|none|
|LinkId|object|false|none|none|

<h2 id="tocS_TransitGatewayConnectPeerAssociation">TransitGatewayConnectPeerAssociation</h2>
<!-- backwards compatibility -->
<a id="schematransitgatewayconnectpeerassociation"></a>
<a id="schema_TransitGatewayConnectPeerAssociation"></a>
<a id="tocStransitgatewayconnectpeerassociation"></a>
<a id="tocstransitgatewayconnectpeerassociation"></a>

```json
{
  "TransitGatewayConnectPeerArn": {},
  "GlobalNetworkId": {},
  "DeviceId": {},
  "LinkId": {},
  "State": {}
}
```

Describes a transit gateway Connect peer association.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TransitGatewayConnectPeerArn|object|false|none|none|
|GlobalNetworkId|object|false|none|none|
|DeviceId|object|false|none|none|
|LinkId|object|false|none|none|
|State|object|false|none|none|

<h2 id="tocS_CoreNetworkId">CoreNetworkId</h2>
<!-- backwards compatibility -->
<a id="schemacorenetworkid"></a>
<a id="schema_CoreNetworkId"></a>
<a id="tocScorenetworkid"></a>
<a id="tocscorenetworkid"></a>

```json
"string"
```

<h2 id="tocS_CoreNetworkArn">CoreNetworkArn</h2>
<!-- backwards compatibility -->
<a id="schemacorenetworkarn"></a>
<a id="schema_CoreNetworkArn"></a>
<a id="tocScorenetworkarn"></a>
<a id="tocscorenetworkarn"></a>

```json
"string"
```

<h2 id="tocS_AttachmentType">AttachmentType</h2>
<!-- backwards compatibility -->
<a id="schemaattachmenttype"></a>
<a id="schema_AttachmentType"></a>
<a id="tocSattachmenttype"></a>
<a id="tocsattachmenttype"></a>

```json
"CONNECT"
```

<h2 id="tocS_AttachmentState">AttachmentState</h2>
<!-- backwards compatibility -->
<a id="schemaattachmentstate"></a>
<a id="schema_AttachmentState"></a>
<a id="tocSattachmentstate"></a>
<a id="tocsattachmentstate"></a>

```json
"REJECTED"
```

<h2 id="tocS_ExternalRegionCode">ExternalRegionCode</h2>
<!-- backwards compatibility -->
<a id="schemaexternalregioncode"></a>
<a id="schema_ExternalRegionCode"></a>
<a id="tocSexternalregioncode"></a>
<a id="tocsexternalregioncode"></a>

```json
"string"
```

<h2 id="tocS_ResourceArn">ResourceArn</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearn"></a>
<a id="schema_ResourceArn"></a>
<a id="tocSresourcearn"></a>
<a id="tocsresourcearn"></a>

```json
"string"
```

<h2 id="tocS_TagList">TagList</h2>
<!-- backwards compatibility -->
<a id="schemataglist"></a>
<a id="schema_TagList"></a>
<a id="tocStaglist"></a>
<a id="tocstaglist"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_ProposedSegmentChange">ProposedSegmentChange</h2>
<!-- backwards compatibility -->
<a id="schemaproposedsegmentchange"></a>
<a id="schema_ProposedSegmentChange"></a>
<a id="tocSproposedsegmentchange"></a>
<a id="tocsproposedsegmentchange"></a>

```json
{
  "Tags": {},
  "AttachmentPolicyRuleNumber": {},
  "SegmentName": {}
}
```

Describes a proposed segment change. In some cases, the segment change must first be evaluated and accepted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|
|AttachmentPolicyRuleNumber|object|false|none|none|
|SegmentName|object|false|none|none|

<h2 id="tocS_DateTime">DateTime</h2>
<!-- backwards compatibility -->
<a id="schemadatetime"></a>
<a id="schema_DateTime"></a>
<a id="tocSdatetime"></a>
<a id="tocsdatetime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_AttachmentList">AttachmentList</h2>
<!-- backwards compatibility -->
<a id="schemaattachmentlist"></a>
<a id="schema_AttachmentList"></a>
<a id="tocSattachmentlist"></a>
<a id="tocsattachmentlist"></a>

```json
[
  {
    "CoreNetworkId": {},
    "CoreNetworkArn": {},
    "AttachmentId": {},
    "OwnerAccountId": {},
    "AttachmentType": {},
    "State": {},
    "EdgeLocation": {},
    "ResourceArn": {},
    "AttachmentPolicyRuleNumber": {},
    "SegmentName": {},
    "Tags": {},
    "ProposedSegmentChange": {
      "Tags": {},
      "AttachmentPolicyRuleNumber": {},
      "SegmentName": {}
    },
    "CreatedAt": {},
    "UpdatedAt": {}
  }
]
```

<h2 id="tocS_Bandwidth">Bandwidth</h2>
<!-- backwards compatibility -->
<a id="schemabandwidth"></a>
<a id="schema_Bandwidth"></a>
<a id="tocSbandwidth"></a>
<a id="tocsbandwidth"></a>

```json
{
  "UploadSpeed": {},
  "DownloadSpeed": {}
}
```

Describes bandwidth information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UploadSpeed|object|false|none|none|
|DownloadSpeed|object|false|none|none|

<h2 id="tocS_BgpOptions">BgpOptions</h2>
<!-- backwards compatibility -->
<a id="schemabgpoptions"></a>
<a id="schema_BgpOptions"></a>
<a id="tocSbgpoptions"></a>
<a id="tocsbgpoptions"></a>

```json
{
  "PeerAsn": {}
}
```

Describes the BGP options.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PeerAsn|object|false|none|none|

<h2 id="tocS_ChangeAction">ChangeAction</h2>
<!-- backwards compatibility -->
<a id="schemachangeaction"></a>
<a id="schema_ChangeAction"></a>
<a id="tocSchangeaction"></a>
<a id="tocschangeaction"></a>

```json
"ADD"
```

<h2 id="tocS_ChangeSetState">ChangeSetState</h2>
<!-- backwards compatibility -->
<a id="schemachangesetstate"></a>
<a id="schema_ChangeSetState"></a>
<a id="tocSchangesetstate"></a>
<a id="tocschangesetstate"></a>

```json
"PENDING_GENERATION"
```

<h2 id="tocS_ChangeStatus">ChangeStatus</h2>
<!-- backwards compatibility -->
<a id="schemachangestatus"></a>
<a id="schema_ChangeStatus"></a>
<a id="tocSchangestatus"></a>
<a id="tocschangestatus"></a>

```json
"NOT_STARTED"
```

<h2 id="tocS_ChangeType">ChangeType</h2>
<!-- backwards compatibility -->
<a id="schemachangetype"></a>
<a id="schema_ChangeType"></a>
<a id="tocSchangetype"></a>
<a id="tocschangetype"></a>

```json
"CORE_NETWORK_SEGMENT"
```

<h2 id="tocS_ClientToken">ClientToken</h2>
<!-- backwards compatibility -->
<a id="schemaclienttoken"></a>
<a id="schema_ClientToken"></a>
<a id="tocSclienttoken"></a>
<a id="tocsclienttoken"></a>

```json
"string"
```

<h2 id="tocS_ConnectAttachmentOptions">ConnectAttachmentOptions</h2>
<!-- backwards compatibility -->
<a id="schemaconnectattachmentoptions"></a>
<a id="schema_ConnectAttachmentOptions"></a>
<a id="tocSconnectattachmentoptions"></a>
<a id="tocsconnectattachmentoptions"></a>

```json
{
  "Protocol": {}
}
```

Describes a core network Connect attachment options.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Protocol|object|false|none|none|

<h2 id="tocS_ConnectAttachment">ConnectAttachment</h2>
<!-- backwards compatibility -->
<a id="schemaconnectattachment"></a>
<a id="schema_ConnectAttachment"></a>
<a id="tocSconnectattachment"></a>
<a id="tocsconnectattachment"></a>

```json
{
  "Attachment": {
    "CoreNetworkId": {},
    "CoreNetworkArn": {},
    "AttachmentId": {},
    "OwnerAccountId": {},
    "AttachmentType": {},
    "State": {},
    "EdgeLocation": {},
    "ResourceArn": {},
    "AttachmentPolicyRuleNumber": {},
    "SegmentName": {},
    "Tags": {},
    "ProposedSegmentChange": {
      "Tags": {},
      "AttachmentPolicyRuleNumber": {},
      "SegmentName": {}
    },
    "CreatedAt": {},
    "UpdatedAt": {}
  },
  "TransportAttachmentId": {},
  "Options": {
    "Protocol": {}
  }
}
```

Describes a core network Connect attachment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attachment|object|false|none|none|
|TransportAttachmentId|object|false|none|none|
|Options|object|false|none|none|

<h2 id="tocS_ConnectPeerState">ConnectPeerState</h2>
<!-- backwards compatibility -->
<a id="schemaconnectpeerstate"></a>
<a id="schema_ConnectPeerState"></a>
<a id="tocSconnectpeerstate"></a>
<a id="tocsconnectpeerstate"></a>

```json
"CREATING"
```

<h2 id="tocS_ConnectPeerConfiguration">ConnectPeerConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaconnectpeerconfiguration"></a>
<a id="schema_ConnectPeerConfiguration"></a>
<a id="tocSconnectpeerconfiguration"></a>
<a id="tocsconnectpeerconfiguration"></a>

```json
{
  "CoreNetworkAddress": {},
  "PeerAddress": {},
  "InsideCidrBlocks": {},
  "Protocol": {},
  "BgpConfigurations": {}
}
```

Describes a core network Connect peer configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CoreNetworkAddress|object|false|none|none|
|PeerAddress|object|false|none|none|
|InsideCidrBlocks|object|false|none|none|
|Protocol|object|false|none|none|
|BgpConfigurations|object|false|none|none|

<h2 id="tocS_ConnectPeer">ConnectPeer</h2>
<!-- backwards compatibility -->
<a id="schemaconnectpeer"></a>
<a id="schema_ConnectPeer"></a>
<a id="tocSconnectpeer"></a>
<a id="tocsconnectpeer"></a>

```json
{
  "CoreNetworkId": {},
  "ConnectAttachmentId": {},
  "ConnectPeerId": {},
  "EdgeLocation": {},
  "State": {},
  "CreatedAt": {},
  "Configuration": {
    "CoreNetworkAddress": {},
    "PeerAddress": {},
    "InsideCidrBlocks": {},
    "Protocol": {},
    "BgpConfigurations": {}
  },
  "Tags": {}
}
```

Describes a core network Connect peer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CoreNetworkId|object|false|none|none|
|ConnectAttachmentId|object|false|none|none|
|ConnectPeerId|object|false|none|none|
|EdgeLocation|object|false|none|none|
|State|object|false|none|none|
|CreatedAt|object|false|none|none|
|Configuration|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_ConnectPeerAssociationState">ConnectPeerAssociationState</h2>
<!-- backwards compatibility -->
<a id="schemaconnectpeerassociationstate"></a>
<a id="schema_ConnectPeerAssociationState"></a>
<a id="tocSconnectpeerassociationstate"></a>
<a id="tocsconnectpeerassociationstate"></a>

```json
"PENDING"
```

<h2 id="tocS_ConnectPeerAssociationList">ConnectPeerAssociationList</h2>
<!-- backwards compatibility -->
<a id="schemaconnectpeerassociationlist"></a>
<a id="schema_ConnectPeerAssociationList"></a>
<a id="tocSconnectpeerassociationlist"></a>
<a id="tocsconnectpeerassociationlist"></a>

```json
[
  {
    "ConnectPeerId": {},
    "GlobalNetworkId": {},
    "DeviceId": {},
    "LinkId": {},
    "State": {}
  }
]
```

<h2 id="tocS_ConnectPeerBgpConfiguration">ConnectPeerBgpConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaconnectpeerbgpconfiguration"></a>
<a id="schema_ConnectPeerBgpConfiguration"></a>
<a id="tocSconnectpeerbgpconfiguration"></a>
<a id="tocsconnectpeerbgpconfiguration"></a>

```json
{
  "CoreNetworkAsn": {},
  "PeerAsn": {},
  "CoreNetworkAddress": {},
  "PeerAddress": {}
}
```

Describes a core network BGP configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CoreNetworkAsn|object|false|none|none|
|PeerAsn|object|false|none|none|
|CoreNetworkAddress|object|false|none|none|
|PeerAddress|object|false|none|none|

<h2 id="tocS_ConnectPeerBgpConfigurationList">ConnectPeerBgpConfigurationList</h2>
<!-- backwards compatibility -->
<a id="schemaconnectpeerbgpconfigurationlist"></a>
<a id="schema_ConnectPeerBgpConfigurationList"></a>
<a id="tocSconnectpeerbgpconfigurationlist"></a>
<a id="tocsconnectpeerbgpconfigurationlist"></a>

```json
[
  {
    "CoreNetworkAsn": {},
    "PeerAsn": {},
    "CoreNetworkAddress": {},
    "PeerAddress": {}
  }
]
```

<h2 id="tocS_ConstrainedStringList">ConstrainedStringList</h2>
<!-- backwards compatibility -->
<a id="schemaconstrainedstringlist"></a>
<a id="schema_ConstrainedStringList"></a>
<a id="tocSconstrainedstringlist"></a>
<a id="tocsconstrainedstringlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ConnectPeerIdList">ConnectPeerIdList</h2>
<!-- backwards compatibility -->
<a id="schemaconnectpeeridlist"></a>
<a id="schema_ConnectPeerIdList"></a>
<a id="tocSconnectpeeridlist"></a>
<a id="tocsconnectpeeridlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ConnectPeerSummary">ConnectPeerSummary</h2>
<!-- backwards compatibility -->
<a id="schemaconnectpeersummary"></a>
<a id="schema_ConnectPeerSummary"></a>
<a id="tocSconnectpeersummary"></a>
<a id="tocsconnectpeersummary"></a>

```json
{
  "CoreNetworkId": {},
  "ConnectAttachmentId": {},
  "ConnectPeerId": {},
  "EdgeLocation": {},
  "ConnectPeerState": {},
  "CreatedAt": {},
  "Tags": {}
}
```

Summary description of a Connect peer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CoreNetworkId|object|false|none|none|
|ConnectAttachmentId|object|false|none|none|
|ConnectPeerId|object|false|none|none|
|EdgeLocation|object|false|none|none|
|ConnectPeerState|object|false|none|none|
|CreatedAt|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_ConnectPeerSummaryList">ConnectPeerSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaconnectpeersummarylist"></a>
<a id="schema_ConnectPeerSummaryList"></a>
<a id="tocSconnectpeersummarylist"></a>
<a id="tocsconnectpeersummarylist"></a>

```json
[
  {
    "CoreNetworkId": {},
    "ConnectAttachmentId": {},
    "ConnectPeerId": {},
    "EdgeLocation": {},
    "ConnectPeerState": {},
    "CreatedAt": {},
    "Tags": {}
  }
]
```

<h2 id="tocS_ConnectionArn">ConnectionArn</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionarn"></a>
<a id="schema_ConnectionArn"></a>
<a id="tocSconnectionarn"></a>
<a id="tocsconnectionarn"></a>

```json
"string"
```

<h2 id="tocS_ConnectionState">ConnectionState</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionstate"></a>
<a id="schema_ConnectionState"></a>
<a id="tocSconnectionstate"></a>
<a id="tocsconnectionstate"></a>

```json
"PENDING"
```

<h2 id="tocS_Connection">Connection</h2>
<!-- backwards compatibility -->
<a id="schemaconnection"></a>
<a id="schema_Connection"></a>
<a id="tocSconnection"></a>
<a id="tocsconnection"></a>

```json
{
  "ConnectionId": {},
  "ConnectionArn": {},
  "GlobalNetworkId": {},
  "DeviceId": {},
  "ConnectedDeviceId": {},
  "LinkId": {},
  "ConnectedLinkId": {},
  "Description": {},
  "CreatedAt": {},
  "State": {},
  "Tags": {}
}
```

Describes a connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectionId|object|false|none|none|
|ConnectionArn|object|false|none|none|
|GlobalNetworkId|object|false|none|none|
|DeviceId|object|false|none|none|
|ConnectedDeviceId|object|false|none|none|
|LinkId|object|false|none|none|
|ConnectedLinkId|object|false|none|none|
|Description|object|false|none|none|
|CreatedAt|object|false|none|none|
|State|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_ConnectionType">ConnectionType</h2>
<!-- backwards compatibility -->
<a id="schemaconnectiontype"></a>
<a id="schema_ConnectionType"></a>
<a id="tocSconnectiontype"></a>
<a id="tocsconnectiontype"></a>

```json
"BGP"
```

<h2 id="tocS_ConnectionStatus">ConnectionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionstatus"></a>
<a id="schema_ConnectionStatus"></a>
<a id="tocSconnectionstatus"></a>
<a id="tocsconnectionstatus"></a>

```json
"UP"
```

<h2 id="tocS_ConnectionHealth">ConnectionHealth</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionhealth"></a>
<a id="schema_ConnectionHealth"></a>
<a id="tocSconnectionhealth"></a>
<a id="tocsconnectionhealth"></a>

```json
{
  "Type": {},
  "Status": {},
  "Timestamp": {}
}
```

Describes connection health.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|Status|object|false|none|none|
|Timestamp|object|false|none|none|

<h2 id="tocS_ConnectionIdList">ConnectionIdList</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionidlist"></a>
<a id="schema_ConnectionIdList"></a>
<a id="tocSconnectionidlist"></a>
<a id="tocsconnectionidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ConnectionList">ConnectionList</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionlist"></a>
<a id="schema_ConnectionList"></a>
<a id="tocSconnectionlist"></a>
<a id="tocsconnectionlist"></a>

```json
[
  {
    "ConnectionId": {},
    "ConnectionArn": {},
    "GlobalNetworkId": {},
    "DeviceId": {},
    "ConnectedDeviceId": {},
    "LinkId": {},
    "ConnectedLinkId": {},
    "Description": {},
    "CreatedAt": {},
    "State": {},
    "Tags": {}
  }
]
```

<h2 id="tocS_CoreNetworkState">CoreNetworkState</h2>
<!-- backwards compatibility -->
<a id="schemacorenetworkstate"></a>
<a id="schema_CoreNetworkState"></a>
<a id="tocScorenetworkstate"></a>
<a id="tocscorenetworkstate"></a>

```json
"CREATING"
```

<h2 id="tocS_CoreNetworkSegmentList">CoreNetworkSegmentList</h2>
<!-- backwards compatibility -->
<a id="schemacorenetworksegmentlist"></a>
<a id="schema_CoreNetworkSegmentList"></a>
<a id="tocScorenetworksegmentlist"></a>
<a id="tocscorenetworksegmentlist"></a>

```json
[
  {
    "Name": {},
    "EdgeLocations": {},
    "SharedSegments": {}
  }
]
```

<h2 id="tocS_CoreNetworkEdgeList">CoreNetworkEdgeList</h2>
<!-- backwards compatibility -->
<a id="schemacorenetworkedgelist"></a>
<a id="schema_CoreNetworkEdgeList"></a>
<a id="tocScorenetworkedgelist"></a>
<a id="tocscorenetworkedgelist"></a>

```json
[
  {
    "EdgeLocation": {},
    "Asn": {},
    "InsideCidrBlocks": {}
  }
]
```

<h2 id="tocS_CoreNetwork">CoreNetwork</h2>
<!-- backwards compatibility -->
<a id="schemacorenetwork"></a>
<a id="schema_CoreNetwork"></a>
<a id="tocScorenetwork"></a>
<a id="tocscorenetwork"></a>

```json
{
  "GlobalNetworkId": {},
  "CoreNetworkId": {},
  "CoreNetworkArn": {},
  "Description": {},
  "CreatedAt": {},
  "State": {},
  "Segments": {},
  "Edges": {},
  "Tags": {}
}
```

Describes a core network.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalNetworkId|object|false|none|none|
|CoreNetworkId|object|false|none|none|
|CoreNetworkArn|object|false|none|none|
|Description|object|false|none|none|
|CreatedAt|object|false|none|none|
|State|object|false|none|none|
|Segments|object|false|none|none|
|Edges|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CoreNetworkChangeValues">CoreNetworkChangeValues</h2>
<!-- backwards compatibility -->
<a id="schemacorenetworkchangevalues"></a>
<a id="schema_CoreNetworkChangeValues"></a>
<a id="tocScorenetworkchangevalues"></a>
<a id="tocscorenetworkchangevalues"></a>

```json
{
  "SegmentName": {},
  "EdgeLocations": {},
  "Asn": {},
  "Cidr": {},
  "DestinationIdentifier": {},
  "InsideCidrBlocks": {},
  "SharedSegments": {}
}
```

Describes a core network change.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SegmentName|object|false|none|none|
|EdgeLocations|object|false|none|none|
|Asn|object|false|none|none|
|Cidr|object|false|none|none|
|DestinationIdentifier|object|false|none|none|
|InsideCidrBlocks|object|false|none|none|
|SharedSegments|object|false|none|none|

<h2 id="tocS_CoreNetworkChange">CoreNetworkChange</h2>
<!-- backwards compatibility -->
<a id="schemacorenetworkchange"></a>
<a id="schema_CoreNetworkChange"></a>
<a id="tocScorenetworkchange"></a>
<a id="tocscorenetworkchange"></a>

```json
{
  "Type": {},
  "Action": {},
  "Identifier": {},
  "PreviousValues": {
    "SegmentName": {},
    "EdgeLocations": {},
    "Asn": {},
    "Cidr": {},
    "DestinationIdentifier": {},
    "InsideCidrBlocks": {},
    "SharedSegments": {}
  },
  "NewValues": {
    "SegmentName": {},
    "EdgeLocations": {},
    "Asn": {},
    "Cidr": {},
    "DestinationIdentifier": {},
    "InsideCidrBlocks": {},
    "SharedSegments": {}
  },
  "IdentifierPath": {}
}
```

Details describing a core network change.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|Action|object|false|none|none|
|Identifier|object|false|none|none|
|PreviousValues|object|false|none|none|
|NewValues|object|false|none|none|
|IdentifierPath|object|false|none|none|

<h2 id="tocS_CoreNetworkChangeEventValues">CoreNetworkChangeEventValues</h2>
<!-- backwards compatibility -->
<a id="schemacorenetworkchangeeventvalues"></a>
<a id="schema_CoreNetworkChangeEventValues"></a>
<a id="tocScorenetworkchangeeventvalues"></a>
<a id="tocscorenetworkchangeeventvalues"></a>

```json
{
  "EdgeLocation": {},
  "SegmentName": {},
  "AttachmentId": {},
  "Cidr": {}
}
```

Describes a core network change event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EdgeLocation|object|false|none|none|
|SegmentName|object|false|none|none|
|AttachmentId|object|false|none|none|
|Cidr|object|false|none|none|

<h2 id="tocS_CoreNetworkChangeEvent">CoreNetworkChangeEvent</h2>
<!-- backwards compatibility -->
<a id="schemacorenetworkchangeevent"></a>
<a id="schema_CoreNetworkChangeEvent"></a>
<a id="tocScorenetworkchangeevent"></a>
<a id="tocscorenetworkchangeevent"></a>

```json
{
  "Type": {},
  "Action": {},
  "IdentifierPath": {},
  "EventTime": {},
  "Status": {},
  "Values": {
    "EdgeLocation": {},
    "SegmentName": {},
    "AttachmentId": {},
    "Cidr": {}
  }
}
```

Describes a core network change event. This can be a change to a segment, attachment, route, etc.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|Action|object|false|none|none|
|IdentifierPath|object|false|none|none|
|EventTime|object|false|none|none|
|Status|object|false|none|none|
|Values|object|false|none|none|

<h2 id="tocS_CoreNetworkChangeEventList">CoreNetworkChangeEventList</h2>
<!-- backwards compatibility -->
<a id="schemacorenetworkchangeeventlist"></a>
<a id="schema_CoreNetworkChangeEventList"></a>
<a id="tocScorenetworkchangeeventlist"></a>
<a id="tocscorenetworkchangeeventlist"></a>

```json
[
  {
    "Type": {},
    "Action": {},
    "IdentifierPath": {},
    "EventTime": {},
    "Status": {},
    "Values": {
      "EdgeLocation": {},
      "SegmentName": {},
      "AttachmentId": {},
      "Cidr": {}
    }
  }
]
```

<h2 id="tocS_CoreNetworkChangeList">CoreNetworkChangeList</h2>
<!-- backwards compatibility -->
<a id="schemacorenetworkchangelist"></a>
<a id="schema_CoreNetworkChangeList"></a>
<a id="tocScorenetworkchangelist"></a>
<a id="tocscorenetworkchangelist"></a>

```json
[
  {
    "Type": {},
    "Action": {},
    "Identifier": {},
    "PreviousValues": {
      "SegmentName": {},
      "EdgeLocations": {},
      "Asn": {},
      "Cidr": {},
      "DestinationIdentifier": {},
      "InsideCidrBlocks": {},
      "SharedSegments": {}
    },
    "NewValues": {
      "SegmentName": {},
      "EdgeLocations": {},
      "Asn": {},
      "Cidr": {},
      "DestinationIdentifier": {},
      "InsideCidrBlocks": {},
      "SharedSegments": {}
    },
    "IdentifierPath": {}
  }
]
```

<h2 id="tocS_ExternalRegionCodeList">ExternalRegionCodeList</h2>
<!-- backwards compatibility -->
<a id="schemaexternalregioncodelist"></a>
<a id="schema_ExternalRegionCodeList"></a>
<a id="tocSexternalregioncodelist"></a>
<a id="tocsexternalregioncodelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_CoreNetworkEdge">CoreNetworkEdge</h2>
<!-- backwards compatibility -->
<a id="schemacorenetworkedge"></a>
<a id="schema_CoreNetworkEdge"></a>
<a id="tocScorenetworkedge"></a>
<a id="tocscorenetworkedge"></a>

```json
{
  "EdgeLocation": {},
  "Asn": {},
  "InsideCidrBlocks": {}
}
```

Describes a core network edge.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EdgeLocation|object|false|none|none|
|Asn|object|false|none|none|
|InsideCidrBlocks|object|false|none|none|

<h2 id="tocS_CoreNetworkPolicyAlias">CoreNetworkPolicyAlias</h2>
<!-- backwards compatibility -->
<a id="schemacorenetworkpolicyalias"></a>
<a id="schema_CoreNetworkPolicyAlias"></a>
<a id="tocScorenetworkpolicyalias"></a>
<a id="tocscorenetworkpolicyalias"></a>

```json
"LIVE"
```

<h2 id="tocS_CoreNetworkPolicyErrorList">CoreNetworkPolicyErrorList</h2>
<!-- backwards compatibility -->
<a id="schemacorenetworkpolicyerrorlist"></a>
<a id="schema_CoreNetworkPolicyErrorList"></a>
<a id="tocScorenetworkpolicyerrorlist"></a>
<a id="tocscorenetworkpolicyerrorlist"></a>

```json
[
  {
    "ErrorCode": {},
    "Message": {},
    "Path": {}
  }
]
```

<h2 id="tocS_CoreNetworkPolicyDocument">CoreNetworkPolicyDocument</h2>
<!-- backwards compatibility -->
<a id="schemacorenetworkpolicydocument"></a>
<a id="schema_CoreNetworkPolicyDocument"></a>
<a id="tocScorenetworkpolicydocument"></a>
<a id="tocscorenetworkpolicydocument"></a>

```json
"string"
```

<h2 id="tocS_CoreNetworkPolicy">CoreNetworkPolicy</h2>
<!-- backwards compatibility -->
<a id="schemacorenetworkpolicy"></a>
<a id="schema_CoreNetworkPolicy"></a>
<a id="tocScorenetworkpolicy"></a>
<a id="tocscorenetworkpolicy"></a>

```json
{
  "CoreNetworkId": {},
  "PolicyVersionId": {},
  "Alias": {},
  "Description": {},
  "CreatedAt": {},
  "ChangeSetState": {},
  "PolicyErrors": {},
  "PolicyDocument": {}
}
```

Describes a core network policy. You can have only one LIVE Core Policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CoreNetworkId|object|false|none|none|
|PolicyVersionId|object|false|none|none|
|Alias|object|false|none|none|
|Description|object|false|none|none|
|CreatedAt|object|false|none|none|
|ChangeSetState|object|false|none|none|
|PolicyErrors|object|false|none|none|
|PolicyDocument|object|false|none|none|

<h2 id="tocS_ServerSideString">ServerSideString</h2>
<!-- backwards compatibility -->
<a id="schemaserversidestring"></a>
<a id="schema_ServerSideString"></a>
<a id="tocSserversidestring"></a>
<a id="tocsserversidestring"></a>

```json
"string"
```

<h2 id="tocS_CoreNetworkPolicyError">CoreNetworkPolicyError</h2>
<!-- backwards compatibility -->
<a id="schemacorenetworkpolicyerror"></a>
<a id="schema_CoreNetworkPolicyError"></a>
<a id="tocScorenetworkpolicyerror"></a>
<a id="tocscorenetworkpolicyerror"></a>

```json
{
  "ErrorCode": {},
  "Message": {},
  "Path": {}
}
```

Provides details about an error in a core network policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ErrorCode|object|true|none|none|
|Message|object|true|none|none|
|Path|object|false|none|none|

<h2 id="tocS_CoreNetworkPolicyVersion">CoreNetworkPolicyVersion</h2>
<!-- backwards compatibility -->
<a id="schemacorenetworkpolicyversion"></a>
<a id="schema_CoreNetworkPolicyVersion"></a>
<a id="tocScorenetworkpolicyversion"></a>
<a id="tocscorenetworkpolicyversion"></a>

```json
{
  "CoreNetworkId": {},
  "PolicyVersionId": {},
  "Alias": {},
  "Description": {},
  "CreatedAt": {},
  "ChangeSetState": {}
}
```

Describes a core network policy version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CoreNetworkId|object|false|none|none|
|PolicyVersionId|object|false|none|none|
|Alias|object|false|none|none|
|Description|object|false|none|none|
|CreatedAt|object|false|none|none|
|ChangeSetState|object|false|none|none|

<h2 id="tocS_CoreNetworkPolicyVersionList">CoreNetworkPolicyVersionList</h2>
<!-- backwards compatibility -->
<a id="schemacorenetworkpolicyversionlist"></a>
<a id="schema_CoreNetworkPolicyVersionList"></a>
<a id="tocScorenetworkpolicyversionlist"></a>
<a id="tocscorenetworkpolicyversionlist"></a>

```json
[
  {
    "CoreNetworkId": {},
    "PolicyVersionId": {},
    "Alias": {},
    "Description": {},
    "CreatedAt": {},
    "ChangeSetState": {}
  }
]
```

<h2 id="tocS_CoreNetworkSegment">CoreNetworkSegment</h2>
<!-- backwards compatibility -->
<a id="schemacorenetworksegment"></a>
<a id="schema_CoreNetworkSegment"></a>
<a id="tocScorenetworksegment"></a>
<a id="tocscorenetworksegment"></a>

```json
{
  "Name": {},
  "EdgeLocations": {},
  "SharedSegments": {}
}
```

Describes a core network segment, which are dedicated routes. Only attachments within this segment can communicate with each other.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|EdgeLocations|object|false|none|none|
|SharedSegments|object|false|none|none|

<h2 id="tocS_CoreNetworkSummary">CoreNetworkSummary</h2>
<!-- backwards compatibility -->
<a id="schemacorenetworksummary"></a>
<a id="schema_CoreNetworkSummary"></a>
<a id="tocScorenetworksummary"></a>
<a id="tocscorenetworksummary"></a>

```json
{
  "CoreNetworkId": {},
  "CoreNetworkArn": {},
  "GlobalNetworkId": {},
  "OwnerAccountId": {},
  "State": {},
  "Description": {},
  "Tags": {}
}
```

Returns summary information about a core network.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CoreNetworkId|object|false|none|none|
|CoreNetworkArn|object|false|none|none|
|GlobalNetworkId|object|false|none|none|
|OwnerAccountId|object|false|none|none|
|State|object|false|none|none|
|Description|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CoreNetworkSummaryList">CoreNetworkSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemacorenetworksummarylist"></a>
<a id="schema_CoreNetworkSummaryList"></a>
<a id="tocScorenetworksummarylist"></a>
<a id="tocscorenetworksummarylist"></a>

```json
[
  {
    "CoreNetworkId": {},
    "CoreNetworkArn": {},
    "GlobalNetworkId": {},
    "OwnerAccountId": {},
    "State": {},
    "Description": {},
    "Tags": {}
  }
]
```

<h2 id="tocS_CreateConnectAttachmentRequest">CreateConnectAttachmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateconnectattachmentrequest"></a>
<a id="schema_CreateConnectAttachmentRequest"></a>
<a id="tocScreateconnectattachmentrequest"></a>
<a id="tocscreateconnectattachmentrequest"></a>

```json
{
  "CoreNetworkId": {},
  "EdgeLocation": {},
  "TransportAttachmentId": {},
  "Options": {
    "Protocol": {}
  },
  "Tags": {},
  "ClientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CoreNetworkId|object|true|none|none|
|EdgeLocation|object|true|none|none|
|TransportAttachmentId|object|true|none|none|
|Options|object|true|none|none|
|Tags|object|false|none|none|
|ClientToken|object|false|none|none|

<h2 id="tocS_CreateConnectPeerRequest">CreateConnectPeerRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateconnectpeerrequest"></a>
<a id="schema_CreateConnectPeerRequest"></a>
<a id="tocScreateconnectpeerrequest"></a>
<a id="tocscreateconnectpeerrequest"></a>

```json
{
  "ConnectAttachmentId": {},
  "CoreNetworkAddress": {},
  "PeerAddress": {},
  "BgpOptions": {
    "PeerAsn": {}
  },
  "InsideCidrBlocks": {},
  "Tags": {},
  "ClientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectAttachmentId|object|true|none|none|
|CoreNetworkAddress|object|false|none|none|
|PeerAddress|object|true|none|none|
|BgpOptions|object|false|none|none|
|InsideCidrBlocks|object|true|none|none|
|Tags|object|false|none|none|
|ClientToken|object|false|none|none|

<h2 id="tocS_CreateConnectionRequest">CreateConnectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateconnectionrequest"></a>
<a id="schema_CreateConnectionRequest"></a>
<a id="tocScreateconnectionrequest"></a>
<a id="tocscreateconnectionrequest"></a>

```json
{
  "DeviceId": {},
  "ConnectedDeviceId": {},
  "LinkId": {},
  "ConnectedLinkId": {},
  "Description": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceId|object|true|none|none|
|ConnectedDeviceId|object|true|none|none|
|LinkId|object|false|none|none|
|ConnectedLinkId|object|false|none|none|
|Description|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateCoreNetworkRequest">CreateCoreNetworkRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecorenetworkrequest"></a>
<a id="schema_CreateCoreNetworkRequest"></a>
<a id="tocScreatecorenetworkrequest"></a>
<a id="tocscreatecorenetworkrequest"></a>

```json
{
  "GlobalNetworkId": {},
  "Description": {},
  "Tags": {},
  "PolicyDocument": {},
  "ClientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalNetworkId|object|true|none|none|
|Description|object|false|none|none|
|Tags|object|false|none|none|
|PolicyDocument|object|false|none|none|
|ClientToken|object|false|none|none|

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "Address": {},
  "Latitude": {},
  "Longitude": {}
}
```

Describes a location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Address|object|false|none|none|
|Latitude|object|false|none|none|
|Longitude|object|false|none|none|

<h2 id="tocS_CreateDeviceRequest">CreateDeviceRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedevicerequest"></a>
<a id="schema_CreateDeviceRequest"></a>
<a id="tocScreatedevicerequest"></a>
<a id="tocscreatedevicerequest"></a>

```json
{
  "AWSLocation": {
    "Zone": {},
    "SubnetArn": {}
  },
  "Description": {},
  "Type": {},
  "Vendor": {},
  "Model": {},
  "SerialNumber": {},
  "Location": {
    "Address": {},
    "Latitude": {},
    "Longitude": {}
  },
  "SiteId": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AWSLocation|object|false|none|none|
|Description|object|false|none|none|
|Type|object|false|none|none|
|Vendor|object|false|none|none|
|Model|object|false|none|none|
|SerialNumber|object|false|none|none|
|Location|object|false|none|none|
|SiteId|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_Device">Device</h2>
<!-- backwards compatibility -->
<a id="schemadevice"></a>
<a id="schema_Device"></a>
<a id="tocSdevice"></a>
<a id="tocsdevice"></a>

```json
{
  "DeviceId": {},
  "DeviceArn": {},
  "GlobalNetworkId": {},
  "AWSLocation": {
    "Zone": {},
    "SubnetArn": {}
  },
  "Description": {},
  "Type": {},
  "Vendor": {},
  "Model": {},
  "SerialNumber": {},
  "Location": {
    "Address": {},
    "Latitude": {},
    "Longitude": {}
  },
  "SiteId": {},
  "CreatedAt": {},
  "State": {},
  "Tags": {}
}
```

Describes a device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceId|object|false|none|none|
|DeviceArn|object|false|none|none|
|GlobalNetworkId|object|false|none|none|
|AWSLocation|object|false|none|none|
|Description|object|false|none|none|
|Type|object|false|none|none|
|Vendor|object|false|none|none|
|Model|object|false|none|none|
|SerialNumber|object|false|none|none|
|Location|object|false|none|none|
|SiteId|object|false|none|none|
|CreatedAt|object|false|none|none|
|State|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateGlobalNetworkRequest">CreateGlobalNetworkRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateglobalnetworkrequest"></a>
<a id="schema_CreateGlobalNetworkRequest"></a>
<a id="tocScreateglobalnetworkrequest"></a>
<a id="tocscreateglobalnetworkrequest"></a>

```json
{
  "Description": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_GlobalNetwork">GlobalNetwork</h2>
<!-- backwards compatibility -->
<a id="schemaglobalnetwork"></a>
<a id="schema_GlobalNetwork"></a>
<a id="tocSglobalnetwork"></a>
<a id="tocsglobalnetwork"></a>

```json
{
  "GlobalNetworkId": {},
  "GlobalNetworkArn": {},
  "Description": {},
  "CreatedAt": {},
  "State": {},
  "Tags": {}
}
```

Describes a global network. This is a single private network acting as a high-level container for your network objects, including an Amazon Web Services-managed Core Network.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalNetworkId|object|false|none|none|
|GlobalNetworkArn|object|false|none|none|
|Description|object|false|none|none|
|CreatedAt|object|false|none|none|
|State|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateLinkRequest">CreateLinkRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatelinkrequest"></a>
<a id="schema_CreateLinkRequest"></a>
<a id="tocScreatelinkrequest"></a>
<a id="tocscreatelinkrequest"></a>

```json
{
  "Description": {},
  "Type": {},
  "Bandwidth": {
    "UploadSpeed": {},
    "DownloadSpeed": {}
  },
  "Provider": {},
  "SiteId": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|Type|object|false|none|none|
|Bandwidth|object|true|none|none|
|Provider|object|false|none|none|
|SiteId|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_Link">Link</h2>
<!-- backwards compatibility -->
<a id="schemalink"></a>
<a id="schema_Link"></a>
<a id="tocSlink"></a>
<a id="tocslink"></a>

```json
{
  "LinkId": {},
  "LinkArn": {},
  "GlobalNetworkId": {},
  "SiteId": {},
  "Description": {},
  "Type": {},
  "Bandwidth": {
    "UploadSpeed": {},
    "DownloadSpeed": {}
  },
  "Provider": {},
  "CreatedAt": {},
  "State": {},
  "Tags": {}
}
```

Describes a link.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LinkId|object|false|none|none|
|LinkArn|object|false|none|none|
|GlobalNetworkId|object|false|none|none|
|SiteId|object|false|none|none|
|Description|object|false|none|none|
|Type|object|false|none|none|
|Bandwidth|object|false|none|none|
|Provider|object|false|none|none|
|CreatedAt|object|false|none|none|
|State|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateSiteRequest">CreateSiteRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatesiterequest"></a>
<a id="schema_CreateSiteRequest"></a>
<a id="tocScreatesiterequest"></a>
<a id="tocscreatesiterequest"></a>

```json
{
  "Description": {},
  "Location": {
    "Address": {},
    "Latitude": {},
    "Longitude": {}
  },
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|Location|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_Site">Site</h2>
<!-- backwards compatibility -->
<a id="schemasite"></a>
<a id="schema_Site"></a>
<a id="tocSsite"></a>
<a id="tocssite"></a>

```json
{
  "SiteId": {},
  "SiteArn": {},
  "GlobalNetworkId": {},
  "Description": {},
  "Location": {
    "Address": {},
    "Latitude": {},
    "Longitude": {}
  },
  "CreatedAt": {},
  "State": {},
  "Tags": {}
}
```

Describes a site.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SiteId|object|false|none|none|
|SiteArn|object|false|none|none|
|GlobalNetworkId|object|false|none|none|
|Description|object|false|none|none|
|Location|object|false|none|none|
|CreatedAt|object|false|none|none|
|State|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_VpnConnectionArn">VpnConnectionArn</h2>
<!-- backwards compatibility -->
<a id="schemavpnconnectionarn"></a>
<a id="schema_VpnConnectionArn"></a>
<a id="tocSvpnconnectionarn"></a>
<a id="tocsvpnconnectionarn"></a>

```json
"string"
```

<h2 id="tocS_CreateSiteToSiteVpnAttachmentRequest">CreateSiteToSiteVpnAttachmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatesitetositevpnattachmentrequest"></a>
<a id="schema_CreateSiteToSiteVpnAttachmentRequest"></a>
<a id="tocScreatesitetositevpnattachmentrequest"></a>
<a id="tocscreatesitetositevpnattachmentrequest"></a>

```json
{
  "CoreNetworkId": {},
  "VpnConnectionArn": {},
  "Tags": {},
  "ClientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CoreNetworkId|object|true|none|none|
|VpnConnectionArn|object|true|none|none|
|Tags|object|false|none|none|
|ClientToken|object|false|none|none|

<h2 id="tocS_SiteToSiteVpnAttachment">SiteToSiteVpnAttachment</h2>
<!-- backwards compatibility -->
<a id="schemasitetositevpnattachment"></a>
<a id="schema_SiteToSiteVpnAttachment"></a>
<a id="tocSsitetositevpnattachment"></a>
<a id="tocssitetositevpnattachment"></a>

```json
{
  "Attachment": {
    "CoreNetworkId": {},
    "CoreNetworkArn": {},
    "AttachmentId": {},
    "OwnerAccountId": {},
    "AttachmentType": {},
    "State": {},
    "EdgeLocation": {},
    "ResourceArn": {},
    "AttachmentPolicyRuleNumber": {},
    "SegmentName": {},
    "Tags": {},
    "ProposedSegmentChange": {
      "Tags": {},
      "AttachmentPolicyRuleNumber": {},
      "SegmentName": {}
    },
    "CreatedAt": {},
    "UpdatedAt": {}
  },
  "VpnConnectionArn": {}
}
```

Creates a site-to-site VPN attachment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attachment|object|false|none|none|
|VpnConnectionArn|object|false|none|none|

<h2 id="tocS_CreateTransitGatewayPeeringRequest">CreateTransitGatewayPeeringRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatetransitgatewaypeeringrequest"></a>
<a id="schema_CreateTransitGatewayPeeringRequest"></a>
<a id="tocScreatetransitgatewaypeeringrequest"></a>
<a id="tocscreatetransitgatewaypeeringrequest"></a>

```json
{
  "CoreNetworkId": {},
  "TransitGatewayArn": {},
  "Tags": {},
  "ClientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CoreNetworkId|object|true|none|none|
|TransitGatewayArn|object|true|none|none|
|Tags|object|false|none|none|
|ClientToken|object|false|none|none|

<h2 id="tocS_TransitGatewayPeering">TransitGatewayPeering</h2>
<!-- backwards compatibility -->
<a id="schematransitgatewaypeering"></a>
<a id="schema_TransitGatewayPeering"></a>
<a id="tocStransitgatewaypeering"></a>
<a id="tocstransitgatewaypeering"></a>

```json
{
  "Peering": {
    "CoreNetworkId": {},
    "CoreNetworkArn": {},
    "PeeringId": {},
    "OwnerAccountId": {},
    "PeeringType": {},
    "State": {},
    "EdgeLocation": {},
    "ResourceArn": {},
    "Tags": {},
    "CreatedAt": {}
  },
  "TransitGatewayArn": {},
  "TransitGatewayPeeringAttachmentId": {}
}
```

Describes a transit gateway peering attachment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Peering|object|false|none|none|
|TransitGatewayArn|object|false|none|none|
|TransitGatewayPeeringAttachmentId|object|false|none|none|

<h2 id="tocS_PeeringId">PeeringId</h2>
<!-- backwards compatibility -->
<a id="schemapeeringid"></a>
<a id="schema_PeeringId"></a>
<a id="tocSpeeringid"></a>
<a id="tocspeeringid"></a>

```json
"string"
```

<h2 id="tocS_CreateTransitGatewayRouteTableAttachmentRequest">CreateTransitGatewayRouteTableAttachmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatetransitgatewayroutetableattachmentrequest"></a>
<a id="schema_CreateTransitGatewayRouteTableAttachmentRequest"></a>
<a id="tocScreatetransitgatewayroutetableattachmentrequest"></a>
<a id="tocscreatetransitgatewayroutetableattachmentrequest"></a>

```json
{
  "PeeringId": {},
  "TransitGatewayRouteTableArn": {},
  "Tags": {},
  "ClientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PeeringId|object|true|none|none|
|TransitGatewayRouteTableArn|object|true|none|none|
|Tags|object|false|none|none|
|ClientToken|object|false|none|none|

<h2 id="tocS_TransitGatewayRouteTableAttachment">TransitGatewayRouteTableAttachment</h2>
<!-- backwards compatibility -->
<a id="schematransitgatewayroutetableattachment"></a>
<a id="schema_TransitGatewayRouteTableAttachment"></a>
<a id="tocStransitgatewayroutetableattachment"></a>
<a id="tocstransitgatewayroutetableattachment"></a>

```json
{
  "Attachment": {
    "CoreNetworkId": {},
    "CoreNetworkArn": {},
    "AttachmentId": {},
    "OwnerAccountId": {},
    "AttachmentType": {},
    "State": {},
    "EdgeLocation": {},
    "ResourceArn": {},
    "AttachmentPolicyRuleNumber": {},
    "SegmentName": {},
    "Tags": {},
    "ProposedSegmentChange": {
      "Tags": {},
      "AttachmentPolicyRuleNumber": {},
      "SegmentName": {}
    },
    "CreatedAt": {},
    "UpdatedAt": {}
  },
  "PeeringId": {},
  "TransitGatewayRouteTableArn": {}
}
```

Describes a transit gateway route table attachment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attachment|[Attachment](#schemaattachment)|false|none|Describes a core network attachment.|
|PeeringId|object|false|none|none|
|TransitGatewayRouteTableArn|object|false|none|none|

<h2 id="tocS_VpcArn">VpcArn</h2>
<!-- backwards compatibility -->
<a id="schemavpcarn"></a>
<a id="schema_VpcArn"></a>
<a id="tocSvpcarn"></a>
<a id="tocsvpcarn"></a>

```json
"string"
```

<h2 id="tocS_SubnetArnList">SubnetArnList</h2>
<!-- backwards compatibility -->
<a id="schemasubnetarnlist"></a>
<a id="schema_SubnetArnList"></a>
<a id="tocSsubnetarnlist"></a>
<a id="tocssubnetarnlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_VpcOptions">VpcOptions</h2>
<!-- backwards compatibility -->
<a id="schemavpcoptions"></a>
<a id="schema_VpcOptions"></a>
<a id="tocSvpcoptions"></a>
<a id="tocsvpcoptions"></a>

```json
{
  "Ipv6Support": {},
  "ApplianceModeSupport": {}
}
```

Describes the VPC options.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Ipv6Support|object|false|none|none|
|ApplianceModeSupport|object|false|none|none|

<h2 id="tocS_CreateVpcAttachmentRequest">CreateVpcAttachmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatevpcattachmentrequest"></a>
<a id="schema_CreateVpcAttachmentRequest"></a>
<a id="tocScreatevpcattachmentrequest"></a>
<a id="tocscreatevpcattachmentrequest"></a>

```json
{
  "CoreNetworkId": {},
  "VpcArn": {},
  "SubnetArns": {},
  "Options": {
    "Ipv6Support": {},
    "ApplianceModeSupport": {}
  },
  "Tags": {},
  "ClientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CoreNetworkId|object|true|none|none|
|VpcArn|object|true|none|none|
|SubnetArns|object|true|none|none|
|Options|object|false|none|none|
|Tags|object|false|none|none|
|ClientToken|object|false|none|none|

<h2 id="tocS_VpcAttachment">VpcAttachment</h2>
<!-- backwards compatibility -->
<a id="schemavpcattachment"></a>
<a id="schema_VpcAttachment"></a>
<a id="tocSvpcattachment"></a>
<a id="tocsvpcattachment"></a>

```json
{
  "Attachment": {
    "CoreNetworkId": {},
    "CoreNetworkArn": {},
    "AttachmentId": {},
    "OwnerAccountId": {},
    "AttachmentType": {},
    "State": {},
    "EdgeLocation": {},
    "ResourceArn": {},
    "AttachmentPolicyRuleNumber": {},
    "SegmentName": {},
    "Tags": {},
    "ProposedSegmentChange": {
      "Tags": {},
      "AttachmentPolicyRuleNumber": {},
      "SegmentName": {}
    },
    "CreatedAt": {},
    "UpdatedAt": {}
  },
  "SubnetArns": {},
  "Options": {
    "Ipv6Support": {},
    "ApplianceModeSupport": {}
  }
}
```

Describes a VPC attachment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attachment|object|false|none|none|
|SubnetArns|object|false|none|none|
|Options|object|false|none|none|

<h2 id="tocS_CustomerGatewayArnList">CustomerGatewayArnList</h2>
<!-- backwards compatibility -->
<a id="schemacustomergatewayarnlist"></a>
<a id="schema_CustomerGatewayArnList"></a>
<a id="tocScustomergatewayarnlist"></a>
<a id="tocscustomergatewayarnlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_CustomerGatewayAssociationState">CustomerGatewayAssociationState</h2>
<!-- backwards compatibility -->
<a id="schemacustomergatewayassociationstate"></a>
<a id="schema_CustomerGatewayAssociationState"></a>
<a id="tocScustomergatewayassociationstate"></a>
<a id="tocscustomergatewayassociationstate"></a>

```json
"PENDING"
```

<h2 id="tocS_CustomerGatewayAssociationList">CustomerGatewayAssociationList</h2>
<!-- backwards compatibility -->
<a id="schemacustomergatewayassociationlist"></a>
<a id="schema_CustomerGatewayAssociationList"></a>
<a id="tocScustomergatewayassociationlist"></a>
<a id="tocscustomergatewayassociationlist"></a>

```json
[
  {
    "CustomerGatewayArn": {},
    "GlobalNetworkId": {},
    "DeviceId": {},
    "LinkId": {},
    "State": {}
  }
]
```

<h2 id="tocS_DeleteAttachmentRequest">DeleteAttachmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteattachmentrequest"></a>
<a id="schema_DeleteAttachmentRequest"></a>
<a id="tocSdeleteattachmentrequest"></a>
<a id="tocsdeleteattachmentrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteConnectPeerRequest">DeleteConnectPeerRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconnectpeerrequest"></a>
<a id="schema_DeleteConnectPeerRequest"></a>
<a id="tocSdeleteconnectpeerrequest"></a>
<a id="tocsdeleteconnectpeerrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteConnectionRequest">DeleteConnectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconnectionrequest"></a>
<a id="schema_DeleteConnectionRequest"></a>
<a id="tocSdeleteconnectionrequest"></a>
<a id="tocsdeleteconnectionrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteCoreNetworkPolicyVersionRequest">DeleteCoreNetworkPolicyVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletecorenetworkpolicyversionrequest"></a>
<a id="schema_DeleteCoreNetworkPolicyVersionRequest"></a>
<a id="tocSdeletecorenetworkpolicyversionrequest"></a>
<a id="tocsdeletecorenetworkpolicyversionrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteCoreNetworkRequest">DeleteCoreNetworkRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletecorenetworkrequest"></a>
<a id="schema_DeleteCoreNetworkRequest"></a>
<a id="tocSdeletecorenetworkrequest"></a>
<a id="tocsdeletecorenetworkrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteDeviceRequest">DeleteDeviceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedevicerequest"></a>
<a id="schema_DeleteDeviceRequest"></a>
<a id="tocSdeletedevicerequest"></a>
<a id="tocsdeletedevicerequest"></a>

```json
{}
```

<h2 id="tocS_DeleteGlobalNetworkRequest">DeleteGlobalNetworkRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteglobalnetworkrequest"></a>
<a id="schema_DeleteGlobalNetworkRequest"></a>
<a id="tocSdeleteglobalnetworkrequest"></a>
<a id="tocsdeleteglobalnetworkrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteLinkRequest">DeleteLinkRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletelinkrequest"></a>
<a id="schema_DeleteLinkRequest"></a>
<a id="tocSdeletelinkrequest"></a>
<a id="tocsdeletelinkrequest"></a>

```json
{}
```

<h2 id="tocS_DeletePeeringRequest">DeletePeeringRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletepeeringrequest"></a>
<a id="schema_DeletePeeringRequest"></a>
<a id="tocSdeletepeeringrequest"></a>
<a id="tocsdeletepeeringrequest"></a>

```json
{}
```

<h2 id="tocS_Peering">Peering</h2>
<!-- backwards compatibility -->
<a id="schemapeering"></a>
<a id="schema_Peering"></a>
<a id="tocSpeering"></a>
<a id="tocspeering"></a>

```json
{
  "CoreNetworkId": {},
  "CoreNetworkArn": {},
  "PeeringId": {},
  "OwnerAccountId": {},
  "PeeringType": {},
  "State": {},
  "EdgeLocation": {},
  "ResourceArn": {},
  "Tags": {},
  "CreatedAt": {}
}
```

Describes a peering connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CoreNetworkId|object|false|none|none|
|CoreNetworkArn|object|false|none|none|
|PeeringId|object|false|none|none|
|OwnerAccountId|object|false|none|none|
|PeeringType|object|false|none|none|
|State|object|false|none|none|
|EdgeLocation|object|false|none|none|
|ResourceArn|object|false|none|none|
|Tags|object|false|none|none|
|CreatedAt|object|false|none|none|

<h2 id="tocS_DeleteResourcePolicyRequest">DeleteResourcePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteresourcepolicyrequest"></a>
<a id="schema_DeleteResourcePolicyRequest"></a>
<a id="tocSdeleteresourcepolicyrequest"></a>
<a id="tocsdeleteresourcepolicyrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteSiteRequest">DeleteSiteRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletesiterequest"></a>
<a id="schema_DeleteSiteRequest"></a>
<a id="tocSdeletesiterequest"></a>
<a id="tocsdeletesiterequest"></a>

```json
{}
```

<h2 id="tocS_DeregisterTransitGatewayRequest">DeregisterTransitGatewayRequest</h2>
<!-- backwards compatibility -->
<a id="schemaderegistertransitgatewayrequest"></a>
<a id="schema_DeregisterTransitGatewayRequest"></a>
<a id="tocSderegistertransitgatewayrequest"></a>
<a id="tocsderegistertransitgatewayrequest"></a>

```json
{}
```

<h2 id="tocS_TransitGatewayRegistration">TransitGatewayRegistration</h2>
<!-- backwards compatibility -->
<a id="schematransitgatewayregistration"></a>
<a id="schema_TransitGatewayRegistration"></a>
<a id="tocStransitgatewayregistration"></a>
<a id="tocstransitgatewayregistration"></a>

```json
{
  "GlobalNetworkId": {},
  "TransitGatewayArn": {},
  "State": {
    "Code": {},
    "Message": {}
  }
}
```

Describes the registration of a transit gateway to a global network.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalNetworkId|object|false|none|none|
|TransitGatewayArn|object|false|none|none|
|State|object|false|none|none|

<h2 id="tocS_GlobalNetworkIdList">GlobalNetworkIdList</h2>
<!-- backwards compatibility -->
<a id="schemaglobalnetworkidlist"></a>
<a id="schema_GlobalNetworkIdList"></a>
<a id="tocSglobalnetworkidlist"></a>
<a id="tocsglobalnetworkidlist"></a>

```json
[
  "string"
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

<h2 id="tocS_DescribeGlobalNetworksRequest">DescribeGlobalNetworksRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeglobalnetworksrequest"></a>
<a id="schema_DescribeGlobalNetworksRequest"></a>
<a id="tocSdescribeglobalnetworksrequest"></a>
<a id="tocsdescribeglobalnetworksrequest"></a>

```json
{}
```

<h2 id="tocS_GlobalNetworkList">GlobalNetworkList</h2>
<!-- backwards compatibility -->
<a id="schemaglobalnetworklist"></a>
<a id="schema_GlobalNetworkList"></a>
<a id="tocSglobalnetworklist"></a>
<a id="tocsglobalnetworklist"></a>

```json
[
  {
    "GlobalNetworkId": {},
    "GlobalNetworkArn": {},
    "Description": {},
    "CreatedAt": {},
    "State": {},
    "Tags": {}
  }
]
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

<h2 id="tocS_DeviceState">DeviceState</h2>
<!-- backwards compatibility -->
<a id="schemadevicestate"></a>
<a id="schema_DeviceState"></a>
<a id="tocSdevicestate"></a>
<a id="tocsdevicestate"></a>

```json
"PENDING"
```

<h2 id="tocS_DeviceIdList">DeviceIdList</h2>
<!-- backwards compatibility -->
<a id="schemadeviceidlist"></a>
<a id="schema_DeviceIdList"></a>
<a id="tocSdeviceidlist"></a>
<a id="tocsdeviceidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DeviceList">DeviceList</h2>
<!-- backwards compatibility -->
<a id="schemadevicelist"></a>
<a id="schema_DeviceList"></a>
<a id="tocSdevicelist"></a>
<a id="tocsdevicelist"></a>

```json
[
  {
    "DeviceId": {},
    "DeviceArn": {},
    "GlobalNetworkId": {},
    "AWSLocation": {
      "Zone": {},
      "SubnetArn": {}
    },
    "Description": {},
    "Type": {},
    "Vendor": {},
    "Model": {},
    "SerialNumber": {},
    "Location": {
      "Address": {},
      "Latitude": {},
      "Longitude": {}
    },
    "SiteId": {},
    "CreatedAt": {},
    "State": {},
    "Tags": {}
  }
]
```

<h2 id="tocS_DisassociateConnectPeerRequest">DisassociateConnectPeerRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateconnectpeerrequest"></a>
<a id="schema_DisassociateConnectPeerRequest"></a>
<a id="tocSdisassociateconnectpeerrequest"></a>
<a id="tocsdisassociateconnectpeerrequest"></a>

```json
{}
```

<h2 id="tocS_DisassociateCustomerGatewayRequest">DisassociateCustomerGatewayRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatecustomergatewayrequest"></a>
<a id="schema_DisassociateCustomerGatewayRequest"></a>
<a id="tocSdisassociatecustomergatewayrequest"></a>
<a id="tocsdisassociatecustomergatewayrequest"></a>

```json
{}
```

<h2 id="tocS_DisassociateLinkRequest">DisassociateLinkRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatelinkrequest"></a>
<a id="schema_DisassociateLinkRequest"></a>
<a id="tocSdisassociatelinkrequest"></a>
<a id="tocsdisassociatelinkrequest"></a>

```json
{}
```

<h2 id="tocS_DisassociateTransitGatewayConnectPeerRequest">DisassociateTransitGatewayConnectPeerRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatetransitgatewayconnectpeerrequest"></a>
<a id="schema_DisassociateTransitGatewayConnectPeerRequest"></a>
<a id="tocSdisassociatetransitgatewayconnectpeerrequest"></a>
<a id="tocsdisassociatetransitgatewayconnectpeerrequest"></a>

```json
{}
```

<h2 id="tocS_ExecuteCoreNetworkChangeSetRequest">ExecuteCoreNetworkChangeSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexecutecorenetworkchangesetrequest"></a>
<a id="schema_ExecuteCoreNetworkChangeSetRequest"></a>
<a id="tocSexecutecorenetworkchangesetrequest"></a>
<a id="tocsexecutecorenetworkchangesetrequest"></a>

```json
{}
```

<h2 id="tocS_FilterMap">FilterMap</h2>
<!-- backwards compatibility -->
<a id="schemafiltermap"></a>
<a id="schema_FilterMap"></a>
<a id="tocSfiltermap"></a>
<a id="tocsfiltermap"></a>

```json
{
  "property1": [
    "string"
  ],
  "property2": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[FilterValues](#schemafiltervalues)|false|none|none|

<h2 id="tocS_FilterName">FilterName</h2>
<!-- backwards compatibility -->
<a id="schemafiltername"></a>
<a id="schema_FilterName"></a>
<a id="tocSfiltername"></a>
<a id="tocsfiltername"></a>

```json
"string"
```

<h2 id="tocS_FilterValue">FilterValue</h2>
<!-- backwards compatibility -->
<a id="schemafiltervalue"></a>
<a id="schema_FilterValue"></a>
<a id="tocSfiltervalue"></a>
<a id="tocsfiltervalue"></a>

```json
"string"
```

<h2 id="tocS_GetConnectAttachmentRequest">GetConnectAttachmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetconnectattachmentrequest"></a>
<a id="schema_GetConnectAttachmentRequest"></a>
<a id="tocSgetconnectattachmentrequest"></a>
<a id="tocsgetconnectattachmentrequest"></a>

```json
{}
```

<h2 id="tocS_GetConnectPeerAssociationsRequest">GetConnectPeerAssociationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetconnectpeerassociationsrequest"></a>
<a id="schema_GetConnectPeerAssociationsRequest"></a>
<a id="tocSgetconnectpeerassociationsrequest"></a>
<a id="tocsgetconnectpeerassociationsrequest"></a>

```json
{}
```

<h2 id="tocS_GetConnectPeerRequest">GetConnectPeerRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetconnectpeerrequest"></a>
<a id="schema_GetConnectPeerRequest"></a>
<a id="tocSgetconnectpeerrequest"></a>
<a id="tocsgetconnectpeerrequest"></a>

```json
{}
```

<h2 id="tocS_GetConnectionsRequest">GetConnectionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetconnectionsrequest"></a>
<a id="schema_GetConnectionsRequest"></a>
<a id="tocSgetconnectionsrequest"></a>
<a id="tocsgetconnectionsrequest"></a>

```json
{}
```

<h2 id="tocS_GetCoreNetworkChangeEventsRequest">GetCoreNetworkChangeEventsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcorenetworkchangeeventsrequest"></a>
<a id="schema_GetCoreNetworkChangeEventsRequest"></a>
<a id="tocSgetcorenetworkchangeeventsrequest"></a>
<a id="tocsgetcorenetworkchangeeventsrequest"></a>

```json
{}
```

<h2 id="tocS_GetCoreNetworkChangeSetRequest">GetCoreNetworkChangeSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcorenetworkchangesetrequest"></a>
<a id="schema_GetCoreNetworkChangeSetRequest"></a>
<a id="tocSgetcorenetworkchangesetrequest"></a>
<a id="tocsgetcorenetworkchangesetrequest"></a>

```json
{}
```

<h2 id="tocS_GetCoreNetworkPolicyRequest">GetCoreNetworkPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcorenetworkpolicyrequest"></a>
<a id="schema_GetCoreNetworkPolicyRequest"></a>
<a id="tocSgetcorenetworkpolicyrequest"></a>
<a id="tocsgetcorenetworkpolicyrequest"></a>

```json
{}
```

<h2 id="tocS_GetCoreNetworkRequest">GetCoreNetworkRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcorenetworkrequest"></a>
<a id="schema_GetCoreNetworkRequest"></a>
<a id="tocSgetcorenetworkrequest"></a>
<a id="tocsgetcorenetworkrequest"></a>

```json
{}
```

<h2 id="tocS_GetCustomerGatewayAssociationsRequest">GetCustomerGatewayAssociationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcustomergatewayassociationsrequest"></a>
<a id="schema_GetCustomerGatewayAssociationsRequest"></a>
<a id="tocSgetcustomergatewayassociationsrequest"></a>
<a id="tocsgetcustomergatewayassociationsrequest"></a>

```json
{}
```

<h2 id="tocS_GetDevicesRequest">GetDevicesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdevicesrequest"></a>
<a id="schema_GetDevicesRequest"></a>
<a id="tocSgetdevicesrequest"></a>
<a id="tocsgetdevicesrequest"></a>

```json
{}
```

<h2 id="tocS_GetLinkAssociationsRequest">GetLinkAssociationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetlinkassociationsrequest"></a>
<a id="schema_GetLinkAssociationsRequest"></a>
<a id="tocSgetlinkassociationsrequest"></a>
<a id="tocsgetlinkassociationsrequest"></a>

```json
{}
```

<h2 id="tocS_LinkAssociationList">LinkAssociationList</h2>
<!-- backwards compatibility -->
<a id="schemalinkassociationlist"></a>
<a id="schema_LinkAssociationList"></a>
<a id="tocSlinkassociationlist"></a>
<a id="tocslinkassociationlist"></a>

```json
[
  {
    "GlobalNetworkId": {},
    "DeviceId": {},
    "LinkId": {},
    "LinkAssociationState": {}
  }
]
```

<h2 id="tocS_LinkIdList">LinkIdList</h2>
<!-- backwards compatibility -->
<a id="schemalinkidlist"></a>
<a id="schema_LinkIdList"></a>
<a id="tocSlinkidlist"></a>
<a id="tocslinkidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_GetLinksRequest">GetLinksRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetlinksrequest"></a>
<a id="schema_GetLinksRequest"></a>
<a id="tocSgetlinksrequest"></a>
<a id="tocsgetlinksrequest"></a>

```json
{}
```

<h2 id="tocS_LinkList">LinkList</h2>
<!-- backwards compatibility -->
<a id="schemalinklist"></a>
<a id="schema_LinkList"></a>
<a id="tocSlinklist"></a>
<a id="tocslinklist"></a>

```json
[
  {
    "LinkId": {},
    "LinkArn": {},
    "GlobalNetworkId": {},
    "SiteId": {},
    "Description": {},
    "Type": {},
    "Bandwidth": {
      "UploadSpeed": {},
      "DownloadSpeed": {}
    },
    "Provider": {},
    "CreatedAt": {},
    "State": {},
    "Tags": {}
  }
]
```

<h2 id="tocS_GetNetworkResourceCountsRequest">GetNetworkResourceCountsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetnetworkresourcecountsrequest"></a>
<a id="schema_GetNetworkResourceCountsRequest"></a>
<a id="tocSgetnetworkresourcecountsrequest"></a>
<a id="tocsgetnetworkresourcecountsrequest"></a>

```json
{}
```

<h2 id="tocS_NetworkResourceCountList">NetworkResourceCountList</h2>
<!-- backwards compatibility -->
<a id="schemanetworkresourcecountlist"></a>
<a id="schema_NetworkResourceCountList"></a>
<a id="tocSnetworkresourcecountlist"></a>
<a id="tocsnetworkresourcecountlist"></a>

```json
[
  {
    "ResourceType": {},
    "Count": {}
  }
]
```

<h2 id="tocS_GetNetworkResourceRelationshipsRequest">GetNetworkResourceRelationshipsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetnetworkresourcerelationshipsrequest"></a>
<a id="schema_GetNetworkResourceRelationshipsRequest"></a>
<a id="tocSgetnetworkresourcerelationshipsrequest"></a>
<a id="tocsgetnetworkresourcerelationshipsrequest"></a>

```json
{}
```

<h2 id="tocS_RelationshipList">RelationshipList</h2>
<!-- backwards compatibility -->
<a id="schemarelationshiplist"></a>
<a id="schema_RelationshipList"></a>
<a id="tocSrelationshiplist"></a>
<a id="tocsrelationshiplist"></a>

```json
[
  {
    "From": {},
    "To": {}
  }
]
```

<h2 id="tocS_GetNetworkResourcesRequest">GetNetworkResourcesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetnetworkresourcesrequest"></a>
<a id="schema_GetNetworkResourcesRequest"></a>
<a id="tocSgetnetworkresourcesrequest"></a>
<a id="tocsgetnetworkresourcesrequest"></a>

```json
{}
```

<h2 id="tocS_NetworkResourceList">NetworkResourceList</h2>
<!-- backwards compatibility -->
<a id="schemanetworkresourcelist"></a>
<a id="schema_NetworkResourceList"></a>
<a id="tocSnetworkresourcelist"></a>
<a id="tocsnetworkresourcelist"></a>

```json
[
  {
    "RegisteredGatewayArn": {},
    "CoreNetworkId": {},
    "AwsRegion": {},
    "AccountId": {},
    "ResourceType": {},
    "ResourceId": {},
    "ResourceArn": {},
    "Definition": {},
    "DefinitionTimestamp": {},
    "Tags": {},
    "Metadata": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_RouteTableIdentifier">RouteTableIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaroutetableidentifier"></a>
<a id="schema_RouteTableIdentifier"></a>
<a id="tocSroutetableidentifier"></a>
<a id="tocsroutetableidentifier"></a>

```json
{
  "TransitGatewayRouteTableArn": {},
  "CoreNetworkSegmentEdge": {
    "CoreNetworkId": {},
    "SegmentName": {},
    "EdgeLocation": {}
  }
}
```

Describes a route table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TransitGatewayRouteTableArn|object|false|none|none|
|CoreNetworkSegmentEdge|object|false|none|none|

<h2 id="tocS_RouteStateList">RouteStateList</h2>
<!-- backwards compatibility -->
<a id="schemaroutestatelist"></a>
<a id="schema_RouteStateList"></a>
<a id="tocSroutestatelist"></a>
<a id="tocsroutestatelist"></a>

```json
[
  "ACTIVE"
]
```

<h2 id="tocS_RouteTypeList">RouteTypeList</h2>
<!-- backwards compatibility -->
<a id="schemaroutetypelist"></a>
<a id="schema_RouteTypeList"></a>
<a id="tocSroutetypelist"></a>
<a id="tocsroutetypelist"></a>

```json
[
  "PROPAGATED"
]
```

<h2 id="tocS_GetNetworkRoutesRequest">GetNetworkRoutesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetnetworkroutesrequest"></a>
<a id="schema_GetNetworkRoutesRequest"></a>
<a id="tocSgetnetworkroutesrequest"></a>
<a id="tocsgetnetworkroutesrequest"></a>

```json
{
  "RouteTableIdentifier": {
    "TransitGatewayRouteTableArn": {},
    "CoreNetworkSegmentEdge": {
      "CoreNetworkId": {},
      "SegmentName": {},
      "EdgeLocation": {}
    }
  },
  "ExactCidrMatches": {},
  "LongestPrefixMatches": {},
  "SubnetOfMatches": {},
  "SupernetOfMatches": {},
  "PrefixListIds": {},
  "States": {},
  "Types": {},
  "DestinationFilters": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RouteTableIdentifier|object|true|none|none|
|ExactCidrMatches|object|false|none|none|
|LongestPrefixMatches|object|false|none|none|
|SubnetOfMatches|object|false|none|none|
|SupernetOfMatches|object|false|none|none|
|PrefixListIds|object|false|none|none|
|States|object|false|none|none|
|Types|object|false|none|none|
|DestinationFilters|object|false|none|none|

<h2 id="tocS_RouteTableType">RouteTableType</h2>
<!-- backwards compatibility -->
<a id="schemaroutetabletype"></a>
<a id="schema_RouteTableType"></a>
<a id="tocSroutetabletype"></a>
<a id="tocsroutetabletype"></a>

```json
"TRANSIT_GATEWAY_ROUTE_TABLE"
```

<h2 id="tocS_NetworkRouteList">NetworkRouteList</h2>
<!-- backwards compatibility -->
<a id="schemanetworkroutelist"></a>
<a id="schema_NetworkRouteList"></a>
<a id="tocSnetworkroutelist"></a>
<a id="tocsnetworkroutelist"></a>

```json
[
  {
    "DestinationCidrBlock": {},
    "Destinations": {},
    "PrefixListId": {},
    "State": {},
    "Type": {}
  }
]
```

<h2 id="tocS_GetNetworkTelemetryRequest">GetNetworkTelemetryRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetnetworktelemetryrequest"></a>
<a id="schema_GetNetworkTelemetryRequest"></a>
<a id="tocSgetnetworktelemetryrequest"></a>
<a id="tocsgetnetworktelemetryrequest"></a>

```json
{}
```

<h2 id="tocS_NetworkTelemetryList">NetworkTelemetryList</h2>
<!-- backwards compatibility -->
<a id="schemanetworktelemetrylist"></a>
<a id="schema_NetworkTelemetryList"></a>
<a id="tocSnetworktelemetrylist"></a>
<a id="tocsnetworktelemetrylist"></a>

```json
[
  {
    "RegisteredGatewayArn": {},
    "CoreNetworkId": {},
    "AwsRegion": {},
    "AccountId": {},
    "ResourceType": {},
    "ResourceId": {},
    "ResourceArn": {},
    "Address": {},
    "Health": {
      "Type": {},
      "Status": {},
      "Timestamp": {}
    }
  }
]
```

<h2 id="tocS_GetResourcePolicyRequest">GetResourcePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetresourcepolicyrequest"></a>
<a id="schema_GetResourcePolicyRequest"></a>
<a id="tocSgetresourcepolicyrequest"></a>
<a id="tocsgetresourcepolicyrequest"></a>

```json
{}
```

<h2 id="tocS_ResourcePolicyDocument">ResourcePolicyDocument</h2>
<!-- backwards compatibility -->
<a id="schemaresourcepolicydocument"></a>
<a id="schema_ResourcePolicyDocument"></a>
<a id="tocSresourcepolicydocument"></a>
<a id="tocsresourcepolicydocument"></a>

```json
"string"
```

<h2 id="tocS_GetRouteAnalysisRequest">GetRouteAnalysisRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetrouteanalysisrequest"></a>
<a id="schema_GetRouteAnalysisRequest"></a>
<a id="tocSgetrouteanalysisrequest"></a>
<a id="tocsgetrouteanalysisrequest"></a>

```json
{}
```

<h2 id="tocS_RouteAnalysis">RouteAnalysis</h2>
<!-- backwards compatibility -->
<a id="schemarouteanalysis"></a>
<a id="schema_RouteAnalysis"></a>
<a id="tocSrouteanalysis"></a>
<a id="tocsrouteanalysis"></a>

```json
{
  "GlobalNetworkId": {},
  "OwnerAccountId": {},
  "RouteAnalysisId": {},
  "StartTimestamp": {},
  "Status": {},
  "Source": {
    "TransitGatewayAttachmentArn": {},
    "TransitGatewayArn": {},
    "IpAddress": {}
  },
  "Destination": {
    "TransitGatewayAttachmentArn": {},
    "TransitGatewayArn": {},
    "IpAddress": {}
  },
  "IncludeReturnPath": {},
  "UseMiddleboxes": {},
  "ForwardPath": {
    "CompletionStatus": {
      "ResultCode": {},
      "ReasonCode": {},
      "ReasonContext": {
        "property1": "string",
        "property2": "string"
      }
    },
    "Path": {}
  },
  "ReturnPath": {
    "CompletionStatus": {
      "ResultCode": {},
      "ReasonCode": {},
      "ReasonContext": {
        "property1": "string",
        "property2": "string"
      }
    },
    "Path": {}
  }
}
```

Describes a route analysis.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalNetworkId|object|false|none|none|
|OwnerAccountId|object|false|none|none|
|RouteAnalysisId|object|false|none|none|
|StartTimestamp|object|false|none|none|
|Status|object|false|none|none|
|Source|object|false|none|none|
|Destination|object|false|none|none|
|IncludeReturnPath|object|false|none|none|
|UseMiddleboxes|object|false|none|none|
|ForwardPath|object|false|none|none|
|ReturnPath|object|false|none|none|

<h2 id="tocS_GetSiteToSiteVpnAttachmentRequest">GetSiteToSiteVpnAttachmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsitetositevpnattachmentrequest"></a>
<a id="schema_GetSiteToSiteVpnAttachmentRequest"></a>
<a id="tocSgetsitetositevpnattachmentrequest"></a>
<a id="tocsgetsitetositevpnattachmentrequest"></a>

```json
{}
```

<h2 id="tocS_SiteIdList">SiteIdList</h2>
<!-- backwards compatibility -->
<a id="schemasiteidlist"></a>
<a id="schema_SiteIdList"></a>
<a id="tocSsiteidlist"></a>
<a id="tocssiteidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_GetSitesRequest">GetSitesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsitesrequest"></a>
<a id="schema_GetSitesRequest"></a>
<a id="tocSgetsitesrequest"></a>
<a id="tocsgetsitesrequest"></a>

```json
{}
```

<h2 id="tocS_SiteList">SiteList</h2>
<!-- backwards compatibility -->
<a id="schemasitelist"></a>
<a id="schema_SiteList"></a>
<a id="tocSsitelist"></a>
<a id="tocssitelist"></a>

```json
[
  {
    "SiteId": {},
    "SiteArn": {},
    "GlobalNetworkId": {},
    "Description": {},
    "Location": {
      "Address": {},
      "Latitude": {},
      "Longitude": {}
    },
    "CreatedAt": {},
    "State": {},
    "Tags": {}
  }
]
```

<h2 id="tocS_TransitGatewayConnectPeerArnList">TransitGatewayConnectPeerArnList</h2>
<!-- backwards compatibility -->
<a id="schematransitgatewayconnectpeerarnlist"></a>
<a id="schema_TransitGatewayConnectPeerArnList"></a>
<a id="tocStransitgatewayconnectpeerarnlist"></a>
<a id="tocstransitgatewayconnectpeerarnlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_GetTransitGatewayConnectPeerAssociationsRequest">GetTransitGatewayConnectPeerAssociationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagettransitgatewayconnectpeerassociationsrequest"></a>
<a id="schema_GetTransitGatewayConnectPeerAssociationsRequest"></a>
<a id="tocSgettransitgatewayconnectpeerassociationsrequest"></a>
<a id="tocsgettransitgatewayconnectpeerassociationsrequest"></a>

```json
{}
```

<h2 id="tocS_TransitGatewayConnectPeerAssociationList">TransitGatewayConnectPeerAssociationList</h2>
<!-- backwards compatibility -->
<a id="schematransitgatewayconnectpeerassociationlist"></a>
<a id="schema_TransitGatewayConnectPeerAssociationList"></a>
<a id="tocStransitgatewayconnectpeerassociationlist"></a>
<a id="tocstransitgatewayconnectpeerassociationlist"></a>

```json
[
  {
    "TransitGatewayConnectPeerArn": {},
    "GlobalNetworkId": {},
    "DeviceId": {},
    "LinkId": {},
    "State": {}
  }
]
```

<h2 id="tocS_GetTransitGatewayPeeringRequest">GetTransitGatewayPeeringRequest</h2>
<!-- backwards compatibility -->
<a id="schemagettransitgatewaypeeringrequest"></a>
<a id="schema_GetTransitGatewayPeeringRequest"></a>
<a id="tocSgettransitgatewaypeeringrequest"></a>
<a id="tocsgettransitgatewaypeeringrequest"></a>

```json
{}
```

<h2 id="tocS_TransitGatewayArnList">TransitGatewayArnList</h2>
<!-- backwards compatibility -->
<a id="schematransitgatewayarnlist"></a>
<a id="schema_TransitGatewayArnList"></a>
<a id="tocStransitgatewayarnlist"></a>
<a id="tocstransitgatewayarnlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_GetTransitGatewayRegistrationsRequest">GetTransitGatewayRegistrationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagettransitgatewayregistrationsrequest"></a>
<a id="schema_GetTransitGatewayRegistrationsRequest"></a>
<a id="tocSgettransitgatewayregistrationsrequest"></a>
<a id="tocsgettransitgatewayregistrationsrequest"></a>

```json
{}
```

<h2 id="tocS_TransitGatewayRegistrationList">TransitGatewayRegistrationList</h2>
<!-- backwards compatibility -->
<a id="schematransitgatewayregistrationlist"></a>
<a id="schema_TransitGatewayRegistrationList"></a>
<a id="tocStransitgatewayregistrationlist"></a>
<a id="tocstransitgatewayregistrationlist"></a>

```json
[
  {
    "GlobalNetworkId": {},
    "TransitGatewayArn": {},
    "State": {
      "Code": {},
      "Message": {}
    }
  }
]
```

<h2 id="tocS_GetTransitGatewayRouteTableAttachmentRequest">GetTransitGatewayRouteTableAttachmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemagettransitgatewayroutetableattachmentrequest"></a>
<a id="schema_GetTransitGatewayRouteTableAttachmentRequest"></a>
<a id="tocSgettransitgatewayroutetableattachmentrequest"></a>
<a id="tocsgettransitgatewayroutetableattachmentrequest"></a>

```json
{}
```

<h2 id="tocS_GetVpcAttachmentRequest">GetVpcAttachmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetvpcattachmentrequest"></a>
<a id="schema_GetVpcAttachmentRequest"></a>
<a id="tocSgetvpcattachmentrequest"></a>
<a id="tocsgetvpcattachmentrequest"></a>

```json
{}
```

<h2 id="tocS_GlobalNetworkArn">GlobalNetworkArn</h2>
<!-- backwards compatibility -->
<a id="schemaglobalnetworkarn"></a>
<a id="schema_GlobalNetworkArn"></a>
<a id="tocSglobalnetworkarn"></a>
<a id="tocsglobalnetworkarn"></a>

```json
"string"
```

<h2 id="tocS_GlobalNetworkState">GlobalNetworkState</h2>
<!-- backwards compatibility -->
<a id="schemaglobalnetworkstate"></a>
<a id="schema_GlobalNetworkState"></a>
<a id="tocSglobalnetworkstate"></a>
<a id="tocsglobalnetworkstate"></a>

```json
"PENDING"
```

<h2 id="tocS_LinkArn">LinkArn</h2>
<!-- backwards compatibility -->
<a id="schemalinkarn"></a>
<a id="schema_LinkArn"></a>
<a id="tocSlinkarn"></a>
<a id="tocslinkarn"></a>

```json
"string"
```

<h2 id="tocS_LinkState">LinkState</h2>
<!-- backwards compatibility -->
<a id="schemalinkstate"></a>
<a id="schema_LinkState"></a>
<a id="tocSlinkstate"></a>
<a id="tocslinkstate"></a>

```json
"PENDING"
```

<h2 id="tocS_LinkAssociationState">LinkAssociationState</h2>
<!-- backwards compatibility -->
<a id="schemalinkassociationstate"></a>
<a id="schema_LinkAssociationState"></a>
<a id="tocSlinkassociationstate"></a>
<a id="tocslinkassociationstate"></a>

```json
"PENDING"
```

<h2 id="tocS_ListAttachmentsRequest">ListAttachmentsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistattachmentsrequest"></a>
<a id="schema_ListAttachmentsRequest"></a>
<a id="tocSlistattachmentsrequest"></a>
<a id="tocslistattachmentsrequest"></a>

```json
{}
```

<h2 id="tocS_ListConnectPeersRequest">ListConnectPeersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistconnectpeersrequest"></a>
<a id="schema_ListConnectPeersRequest"></a>
<a id="tocSlistconnectpeersrequest"></a>
<a id="tocslistconnectpeersrequest"></a>

```json
{}
```

<h2 id="tocS_ListCoreNetworkPolicyVersionsRequest">ListCoreNetworkPolicyVersionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcorenetworkpolicyversionsrequest"></a>
<a id="schema_ListCoreNetworkPolicyVersionsRequest"></a>
<a id="tocSlistcorenetworkpolicyversionsrequest"></a>
<a id="tocslistcorenetworkpolicyversionsrequest"></a>

```json
{}
```

<h2 id="tocS_ListCoreNetworksRequest">ListCoreNetworksRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcorenetworksrequest"></a>
<a id="schema_ListCoreNetworksRequest"></a>
<a id="tocSlistcorenetworksrequest"></a>
<a id="tocslistcorenetworksrequest"></a>

```json
{}
```

<h2 id="tocS_ListOrganizationServiceAccessStatusRequest">ListOrganizationServiceAccessStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistorganizationserviceaccessstatusrequest"></a>
<a id="schema_ListOrganizationServiceAccessStatusRequest"></a>
<a id="tocSlistorganizationserviceaccessstatusrequest"></a>
<a id="tocslistorganizationserviceaccessstatusrequest"></a>

```json
{}
```

<h2 id="tocS_OrganizationStatus">OrganizationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationstatus"></a>
<a id="schema_OrganizationStatus"></a>
<a id="tocSorganizationstatus"></a>
<a id="tocsorganizationstatus"></a>

```json
{
  "OrganizationId": {},
  "OrganizationAwsServiceAccessStatus": {},
  "SLRDeploymentStatus": {},
  "AccountStatusList": {}
}
```

The status of an Amazon Web Services Organization and the accounts within that organization.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|false|none|none|
|OrganizationAwsServiceAccessStatus|object|false|none|none|
|SLRDeploymentStatus|object|false|none|none|
|AccountStatusList|object|false|none|none|

<h2 id="tocS_PeeringType">PeeringType</h2>
<!-- backwards compatibility -->
<a id="schemapeeringtype"></a>
<a id="schema_PeeringType"></a>
<a id="tocSpeeringtype"></a>
<a id="tocspeeringtype"></a>

```json
"TRANSIT_GATEWAY"
```

<h2 id="tocS_PeeringState">PeeringState</h2>
<!-- backwards compatibility -->
<a id="schemapeeringstate"></a>
<a id="schema_PeeringState"></a>
<a id="tocSpeeringstate"></a>
<a id="tocspeeringstate"></a>

```json
"CREATING"
```

<h2 id="tocS_ListPeeringsRequest">ListPeeringsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistpeeringsrequest"></a>
<a id="schema_ListPeeringsRequest"></a>
<a id="tocSlistpeeringsrequest"></a>
<a id="tocslistpeeringsrequest"></a>

```json
{}
```

<h2 id="tocS_PeeringList">PeeringList</h2>
<!-- backwards compatibility -->
<a id="schemapeeringlist"></a>
<a id="schema_PeeringList"></a>
<a id="tocSpeeringlist"></a>
<a id="tocspeeringlist"></a>

```json
[
  {
    "CoreNetworkId": {},
    "CoreNetworkArn": {},
    "PeeringId": {},
    "OwnerAccountId": {},
    "PeeringType": {},
    "State": {},
    "EdgeLocation": {},
    "ResourceArn": {},
    "Tags": {},
    "CreatedAt": {}
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

<h2 id="tocS_NetworkResourceMetadataMap">NetworkResourceMetadataMap</h2>
<!-- backwards compatibility -->
<a id="schemanetworkresourcemetadatamap"></a>
<a id="schema_NetworkResourceMetadataMap"></a>
<a id="tocSnetworkresourcemetadatamap"></a>
<a id="tocsnetworkresourcemetadatamap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ConstrainedString](#schemaconstrainedstring)|false|none|none|

<h2 id="tocS_NetworkResource">NetworkResource</h2>
<!-- backwards compatibility -->
<a id="schemanetworkresource"></a>
<a id="schema_NetworkResource"></a>
<a id="tocSnetworkresource"></a>
<a id="tocsnetworkresource"></a>

```json
{
  "RegisteredGatewayArn": {},
  "CoreNetworkId": {},
  "AwsRegion": {},
  "AccountId": {},
  "ResourceType": {},
  "ResourceId": {},
  "ResourceArn": {},
  "Definition": {},
  "DefinitionTimestamp": {},
  "Tags": {},
  "Metadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

Describes a network resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RegisteredGatewayArn|object|false|none|none|
|CoreNetworkId|object|false|none|none|
|AwsRegion|object|false|none|none|
|AccountId|object|false|none|none|
|ResourceType|object|false|none|none|
|ResourceId|object|false|none|none|
|ResourceArn|object|false|none|none|
|Definition|object|false|none|none|
|DefinitionTimestamp|object|false|none|none|
|Tags|object|false|none|none|
|Metadata|object|false|none|none|

<h2 id="tocS_NetworkResourceCount">NetworkResourceCount</h2>
<!-- backwards compatibility -->
<a id="schemanetworkresourcecount"></a>
<a id="schema_NetworkResourceCount"></a>
<a id="tocSnetworkresourcecount"></a>
<a id="tocsnetworkresourcecount"></a>

```json
{
  "ResourceType": {},
  "Count": {}
}
```

Describes a resource count.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceType|object|false|none|none|
|Count|object|false|none|none|

<h2 id="tocS_NetworkResourceSummary">NetworkResourceSummary</h2>
<!-- backwards compatibility -->
<a id="schemanetworkresourcesummary"></a>
<a id="schema_NetworkResourceSummary"></a>
<a id="tocSnetworkresourcesummary"></a>
<a id="tocsnetworkresourcesummary"></a>

```json
{
  "RegisteredGatewayArn": {},
  "ResourceArn": {},
  "ResourceType": {},
  "Definition": {},
  "NameTag": {},
  "IsMiddlebox": {}
}
```

Describes a network resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RegisteredGatewayArn|object|false|none|none|
|ResourceArn|object|false|none|none|
|ResourceType|object|false|none|none|
|Definition|object|false|none|none|
|NameTag|object|false|none|none|
|IsMiddlebox|object|false|none|none|

<h2 id="tocS_NetworkRouteDestinationList">NetworkRouteDestinationList</h2>
<!-- backwards compatibility -->
<a id="schemanetworkroutedestinationlist"></a>
<a id="schema_NetworkRouteDestinationList"></a>
<a id="tocSnetworkroutedestinationlist"></a>
<a id="tocsnetworkroutedestinationlist"></a>

```json
[
  {
    "CoreNetworkAttachmentId": {},
    "TransitGatewayAttachmentId": {},
    "SegmentName": {},
    "EdgeLocation": {},
    "ResourceType": {},
    "ResourceId": {}
  }
]
```

<h2 id="tocS_NetworkRoute">NetworkRoute</h2>
<!-- backwards compatibility -->
<a id="schemanetworkroute"></a>
<a id="schema_NetworkRoute"></a>
<a id="tocSnetworkroute"></a>
<a id="tocsnetworkroute"></a>

```json
{
  "DestinationCidrBlock": {},
  "Destinations": {},
  "PrefixListId": {},
  "State": {},
  "Type": {}
}
```

Describes a network route.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DestinationCidrBlock|object|false|none|none|
|Destinations|object|false|none|none|
|PrefixListId|object|false|none|none|
|State|object|false|none|none|
|Type|object|false|none|none|

<h2 id="tocS_TransitGatewayAttachmentId">TransitGatewayAttachmentId</h2>
<!-- backwards compatibility -->
<a id="schematransitgatewayattachmentid"></a>
<a id="schema_TransitGatewayAttachmentId"></a>
<a id="tocStransitgatewayattachmentid"></a>
<a id="tocstransitgatewayattachmentid"></a>

```json
"string"
```

<h2 id="tocS_NetworkRouteDestination">NetworkRouteDestination</h2>
<!-- backwards compatibility -->
<a id="schemanetworkroutedestination"></a>
<a id="schema_NetworkRouteDestination"></a>
<a id="tocSnetworkroutedestination"></a>
<a id="tocsnetworkroutedestination"></a>

```json
{
  "CoreNetworkAttachmentId": {},
  "TransitGatewayAttachmentId": {},
  "SegmentName": {},
  "EdgeLocation": {},
  "ResourceType": {},
  "ResourceId": {}
}
```

Describes the destination of a network route.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CoreNetworkAttachmentId|object|false|none|none|
|TransitGatewayAttachmentId|object|false|none|none|
|SegmentName|object|false|none|none|
|EdgeLocation|object|false|none|none|
|ResourceType|object|false|none|none|
|ResourceId|object|false|none|none|

<h2 id="tocS_NetworkTelemetry">NetworkTelemetry</h2>
<!-- backwards compatibility -->
<a id="schemanetworktelemetry"></a>
<a id="schema_NetworkTelemetry"></a>
<a id="tocSnetworktelemetry"></a>
<a id="tocsnetworktelemetry"></a>

```json
{
  "RegisteredGatewayArn": {},
  "CoreNetworkId": {},
  "AwsRegion": {},
  "AccountId": {},
  "ResourceType": {},
  "ResourceId": {},
  "ResourceArn": {},
  "Address": {},
  "Health": {
    "Type": {},
    "Status": {},
    "Timestamp": {}
  }
}
```

Describes the telemetry information for a resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RegisteredGatewayArn|object|false|none|none|
|CoreNetworkId|object|false|none|none|
|AwsRegion|object|false|none|none|
|AccountId|object|false|none|none|
|ResourceType|object|false|none|none|
|ResourceId|object|false|none|none|
|ResourceArn|object|false|none|none|
|Address|object|false|none|none|
|Health|object|false|none|none|

<h2 id="tocS_OrganizationAwsServiceAccessStatus">OrganizationAwsServiceAccessStatus</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationawsserviceaccessstatus"></a>
<a id="schema_OrganizationAwsServiceAccessStatus"></a>
<a id="tocSorganizationawsserviceaccessstatus"></a>
<a id="tocsorganizationawsserviceaccessstatus"></a>

```json
"string"
```

<h2 id="tocS_OrganizationId">OrganizationId</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationid"></a>
<a id="schema_OrganizationId"></a>
<a id="tocSorganizationid"></a>
<a id="tocsorganizationid"></a>

```json
"string"
```

<h2 id="tocS_PathComponent">PathComponent</h2>
<!-- backwards compatibility -->
<a id="schemapathcomponent"></a>
<a id="schema_PathComponent"></a>
<a id="tocSpathcomponent"></a>
<a id="tocspathcomponent"></a>

```json
{
  "Sequence": {},
  "Resource": {
    "RegisteredGatewayArn": {},
    "ResourceArn": {},
    "ResourceType": {},
    "Definition": {},
    "NameTag": {},
    "IsMiddlebox": {}
  },
  "DestinationCidrBlock": {}
}
```

Describes a path component.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Sequence|object|false|none|none|
|Resource|object|false|none|none|
|DestinationCidrBlock|object|false|none|none|

<h2 id="tocS_PathComponentList">PathComponentList</h2>
<!-- backwards compatibility -->
<a id="schemapathcomponentlist"></a>
<a id="schema_PathComponentList"></a>
<a id="tocSpathcomponentlist"></a>
<a id="tocspathcomponentlist"></a>

```json
[
  {
    "Sequence": {},
    "Resource": {
      "RegisteredGatewayArn": {},
      "ResourceArn": {},
      "ResourceType": {},
      "Definition": {},
      "NameTag": {},
      "IsMiddlebox": {}
    },
    "DestinationCidrBlock": {}
  }
]
```

<h2 id="tocS_PutCoreNetworkPolicyRequest">PutCoreNetworkPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputcorenetworkpolicyrequest"></a>
<a id="schema_PutCoreNetworkPolicyRequest"></a>
<a id="tocSputcorenetworkpolicyrequest"></a>
<a id="tocsputcorenetworkpolicyrequest"></a>

```json
{
  "PolicyDocument": {},
  "Description": {},
  "LatestVersionId": {},
  "ClientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyDocument|object|true|none|none|
|Description|object|false|none|none|
|LatestVersionId|object|false|none|none|
|ClientToken|object|false|none|none|

<h2 id="tocS_PutResourcePolicyRequest">PutResourcePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputresourcepolicyrequest"></a>
<a id="schema_PutResourcePolicyRequest"></a>
<a id="tocSputresourcepolicyrequest"></a>
<a id="tocsputresourcepolicyrequest"></a>

```json
{
  "PolicyDocument": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyDocument|object|true|none|none|

<h2 id="tocS_ReasonContextKey">ReasonContextKey</h2>
<!-- backwards compatibility -->
<a id="schemareasoncontextkey"></a>
<a id="schema_ReasonContextKey"></a>
<a id="tocSreasoncontextkey"></a>
<a id="tocsreasoncontextkey"></a>

```json
"string"
```

<h2 id="tocS_ReasonContextValue">ReasonContextValue</h2>
<!-- backwards compatibility -->
<a id="schemareasoncontextvalue"></a>
<a id="schema_ReasonContextValue"></a>
<a id="tocSreasoncontextvalue"></a>
<a id="tocsreasoncontextvalue"></a>

```json
"string"
```

<h2 id="tocS_ReasonContextMap">ReasonContextMap</h2>
<!-- backwards compatibility -->
<a id="schemareasoncontextmap"></a>
<a id="schema_ReasonContextMap"></a>
<a id="tocSreasoncontextmap"></a>
<a id="tocsreasoncontextmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ReasonContextValue](#schemareasoncontextvalue)|false|none|none|

<h2 id="tocS_RegisterTransitGatewayRequest">RegisterTransitGatewayRequest</h2>
<!-- backwards compatibility -->
<a id="schemaregistertransitgatewayrequest"></a>
<a id="schema_RegisterTransitGatewayRequest"></a>
<a id="tocSregistertransitgatewayrequest"></a>
<a id="tocsregistertransitgatewayrequest"></a>

```json
{
  "TransitGatewayArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TransitGatewayArn|object|true|none|none|

<h2 id="tocS_RejectAttachmentRequest">RejectAttachmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemarejectattachmentrequest"></a>
<a id="schema_RejectAttachmentRequest"></a>
<a id="tocSrejectattachmentrequest"></a>
<a id="tocsrejectattachmentrequest"></a>

```json
{}
```

<h2 id="tocS_Relationship">Relationship</h2>
<!-- backwards compatibility -->
<a id="schemarelationship"></a>
<a id="schema_Relationship"></a>
<a id="tocSrelationship"></a>
<a id="tocsrelationship"></a>

```json
{
  "From": {},
  "To": {}
}
```

Describes a resource relationship.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|From|object|false|none|none|
|To|object|false|none|none|

<h2 id="tocS_RestoreCoreNetworkPolicyVersionRequest">RestoreCoreNetworkPolicyVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemarestorecorenetworkpolicyversionrequest"></a>
<a id="schema_RestoreCoreNetworkPolicyVersionRequest"></a>
<a id="tocSrestorecorenetworkpolicyversionrequest"></a>
<a id="tocsrestorecorenetworkpolicyversionrequest"></a>

```json
{}
```

<h2 id="tocS_RouteAnalysisStatus">RouteAnalysisStatus</h2>
<!-- backwards compatibility -->
<a id="schemarouteanalysisstatus"></a>
<a id="schema_RouteAnalysisStatus"></a>
<a id="tocSrouteanalysisstatus"></a>
<a id="tocsrouteanalysisstatus"></a>

```json
"RUNNING"
```

<h2 id="tocS_RouteAnalysisEndpointOptions">RouteAnalysisEndpointOptions</h2>
<!-- backwards compatibility -->
<a id="schemarouteanalysisendpointoptions"></a>
<a id="schema_RouteAnalysisEndpointOptions"></a>
<a id="tocSrouteanalysisendpointoptions"></a>
<a id="tocsrouteanalysisendpointoptions"></a>

```json
{
  "TransitGatewayAttachmentArn": {},
  "TransitGatewayArn": {},
  "IpAddress": {}
}
```

Describes a source or a destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TransitGatewayAttachmentArn|object|false|none|none|
|TransitGatewayArn|object|false|none|none|
|IpAddress|object|false|none|none|

<h2 id="tocS_RouteAnalysisPath">RouteAnalysisPath</h2>
<!-- backwards compatibility -->
<a id="schemarouteanalysispath"></a>
<a id="schema_RouteAnalysisPath"></a>
<a id="tocSrouteanalysispath"></a>
<a id="tocsrouteanalysispath"></a>

```json
{
  "CompletionStatus": {
    "ResultCode": {},
    "ReasonCode": {},
    "ReasonContext": {
      "property1": "string",
      "property2": "string"
    }
  },
  "Path": {}
}
```

Describes a route analysis path.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CompletionStatus|object|false|none|none|
|Path|object|false|none|none|

<h2 id="tocS_RouteAnalysisCompletionResultCode">RouteAnalysisCompletionResultCode</h2>
<!-- backwards compatibility -->
<a id="schemarouteanalysiscompletionresultcode"></a>
<a id="schema_RouteAnalysisCompletionResultCode"></a>
<a id="tocSrouteanalysiscompletionresultcode"></a>
<a id="tocsrouteanalysiscompletionresultcode"></a>

```json
"CONNECTED"
```

<h2 id="tocS_RouteAnalysisCompletionReasonCode">RouteAnalysisCompletionReasonCode</h2>
<!-- backwards compatibility -->
<a id="schemarouteanalysiscompletionreasoncode"></a>
<a id="schema_RouteAnalysisCompletionReasonCode"></a>
<a id="tocSrouteanalysiscompletionreasoncode"></a>
<a id="tocsrouteanalysiscompletionreasoncode"></a>

```json
"TRANSIT_GATEWAY_ATTACHMENT_NOT_FOUND"
```

<h2 id="tocS_RouteAnalysisCompletion">RouteAnalysisCompletion</h2>
<!-- backwards compatibility -->
<a id="schemarouteanalysiscompletion"></a>
<a id="schema_RouteAnalysisCompletion"></a>
<a id="tocSrouteanalysiscompletion"></a>
<a id="tocsrouteanalysiscompletion"></a>

```json
{
  "ResultCode": {},
  "ReasonCode": {},
  "ReasonContext": {
    "property1": "string",
    "property2": "string"
  }
}
```

Describes the status of an analysis at completion.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResultCode|object|false|none|none|
|ReasonCode|object|false|none|none|
|ReasonContext|object|false|none|none|

<h2 id="tocS_RouteAnalysisEndpointOptionsSpecification">RouteAnalysisEndpointOptionsSpecification</h2>
<!-- backwards compatibility -->
<a id="schemarouteanalysisendpointoptionsspecification"></a>
<a id="schema_RouteAnalysisEndpointOptionsSpecification"></a>
<a id="tocSrouteanalysisendpointoptionsspecification"></a>
<a id="tocsrouteanalysisendpointoptionsspecification"></a>

```json
{
  "TransitGatewayAttachmentArn": {},
  "IpAddress": {}
}
```

Describes a source or a destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TransitGatewayAttachmentArn|object|false|none|none|
|IpAddress|object|false|none|none|

<h2 id="tocS_SiteArn">SiteArn</h2>
<!-- backwards compatibility -->
<a id="schemasitearn"></a>
<a id="schema_SiteArn"></a>
<a id="tocSsitearn"></a>
<a id="tocssitearn"></a>

```json
"string"
```

<h2 id="tocS_SiteState">SiteState</h2>
<!-- backwards compatibility -->
<a id="schemasitestate"></a>
<a id="schema_SiteState"></a>
<a id="tocSsitestate"></a>
<a id="tocssitestate"></a>

```json
"PENDING"
```

<h2 id="tocS_StartOrganizationServiceAccessUpdateRequest">StartOrganizationServiceAccessUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartorganizationserviceaccessupdaterequest"></a>
<a id="schema_StartOrganizationServiceAccessUpdateRequest"></a>
<a id="tocSstartorganizationserviceaccessupdaterequest"></a>
<a id="tocsstartorganizationserviceaccessupdaterequest"></a>

```json
{
  "Action": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Action|object|true|none|none|

<h2 id="tocS_StartRouteAnalysisRequest">StartRouteAnalysisRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartrouteanalysisrequest"></a>
<a id="schema_StartRouteAnalysisRequest"></a>
<a id="tocSstartrouteanalysisrequest"></a>
<a id="tocsstartrouteanalysisrequest"></a>

```json
{
  "Source": {
    "TransitGatewayAttachmentArn": {},
    "IpAddress": {}
  },
  "Destination": {
    "TransitGatewayAttachmentArn": {},
    "IpAddress": {}
  },
  "IncludeReturnPath": {},
  "UseMiddleboxes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Source|object|true|none|none|
|Destination|object|true|none|none|
|IncludeReturnPath|object|false|none|none|
|UseMiddleboxes|object|false|none|none|

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

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
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|true|none|none|

<h2 id="tocS_TransitGatewayConnectPeerAssociationState">TransitGatewayConnectPeerAssociationState</h2>
<!-- backwards compatibility -->
<a id="schematransitgatewayconnectpeerassociationstate"></a>
<a id="schema_TransitGatewayConnectPeerAssociationState"></a>
<a id="tocStransitgatewayconnectpeerassociationstate"></a>
<a id="tocstransitgatewayconnectpeerassociationstate"></a>

```json
"PENDING"
```

<h2 id="tocS_TransitGatewayPeeringAttachmentId">TransitGatewayPeeringAttachmentId</h2>
<!-- backwards compatibility -->
<a id="schematransitgatewaypeeringattachmentid"></a>
<a id="schema_TransitGatewayPeeringAttachmentId"></a>
<a id="tocStransitgatewaypeeringattachmentid"></a>
<a id="tocstransitgatewaypeeringattachmentid"></a>

```json
"string"
```

<h2 id="tocS_TransitGatewayRegistrationStateReason">TransitGatewayRegistrationStateReason</h2>
<!-- backwards compatibility -->
<a id="schematransitgatewayregistrationstatereason"></a>
<a id="schema_TransitGatewayRegistrationStateReason"></a>
<a id="tocStransitgatewayregistrationstatereason"></a>
<a id="tocstransitgatewayregistrationstatereason"></a>

```json
{
  "Code": {},
  "Message": {}
}
```

Describes the status of a transit gateway registration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|object|false|none|none|
|Message|object|false|none|none|

<h2 id="tocS_TransitGatewayRegistrationState">TransitGatewayRegistrationState</h2>
<!-- backwards compatibility -->
<a id="schematransitgatewayregistrationstate"></a>
<a id="schema_TransitGatewayRegistrationState"></a>
<a id="tocStransitgatewayregistrationstate"></a>
<a id="tocstransitgatewayregistrationstate"></a>

```json
"PENDING"
```

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{}
```

<h2 id="tocS_UpdateConnectionRequest">UpdateConnectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconnectionrequest"></a>
<a id="schema_UpdateConnectionRequest"></a>
<a id="tocSupdateconnectionrequest"></a>
<a id="tocsupdateconnectionrequest"></a>

```json
{
  "LinkId": {},
  "ConnectedLinkId": {},
  "Description": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LinkId|object|false|none|none|
|ConnectedLinkId|object|false|none|none|
|Description|object|false|none|none|

<h2 id="tocS_UpdateCoreNetworkRequest">UpdateCoreNetworkRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecorenetworkrequest"></a>
<a id="schema_UpdateCoreNetworkRequest"></a>
<a id="tocSupdatecorenetworkrequest"></a>
<a id="tocsupdatecorenetworkrequest"></a>

```json
{
  "Description": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|

<h2 id="tocS_UpdateDeviceRequest">UpdateDeviceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedevicerequest"></a>
<a id="schema_UpdateDeviceRequest"></a>
<a id="tocSupdatedevicerequest"></a>
<a id="tocsupdatedevicerequest"></a>

```json
{
  "AWSLocation": {
    "Zone": {},
    "SubnetArn": {}
  },
  "Description": {},
  "Type": {},
  "Vendor": {},
  "Model": {},
  "SerialNumber": {},
  "Location": {
    "Address": {},
    "Latitude": {},
    "Longitude": {}
  },
  "SiteId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AWSLocation|object|false|none|none|
|Description|object|false|none|none|
|Type|object|false|none|none|
|Vendor|object|false|none|none|
|Model|object|false|none|none|
|SerialNumber|object|false|none|none|
|Location|[Location](#schemalocation)|false|none|Describes a location.|
|SiteId|object|false|none|none|

<h2 id="tocS_UpdateGlobalNetworkRequest">UpdateGlobalNetworkRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateglobalnetworkrequest"></a>
<a id="schema_UpdateGlobalNetworkRequest"></a>
<a id="tocSupdateglobalnetworkrequest"></a>
<a id="tocsupdateglobalnetworkrequest"></a>

```json
{
  "Description": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|

<h2 id="tocS_UpdateLinkRequest">UpdateLinkRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatelinkrequest"></a>
<a id="schema_UpdateLinkRequest"></a>
<a id="tocSupdatelinkrequest"></a>
<a id="tocsupdatelinkrequest"></a>

```json
{
  "Description": {},
  "Type": {},
  "Bandwidth": {
    "UploadSpeed": {},
    "DownloadSpeed": {}
  },
  "Provider": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|Type|object|false|none|none|
|Bandwidth|object|false|none|none|
|Provider|object|false|none|none|

<h2 id="tocS_UpdateNetworkResourceMetadataRequest">UpdateNetworkResourceMetadataRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatenetworkresourcemetadatarequest"></a>
<a id="schema_UpdateNetworkResourceMetadataRequest"></a>
<a id="tocSupdatenetworkresourcemetadatarequest"></a>
<a id="tocsupdatenetworkresourcemetadatarequest"></a>

```json
{
  "Metadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Metadata|object|true|none|none|

<h2 id="tocS_UpdateSiteRequest">UpdateSiteRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesiterequest"></a>
<a id="schema_UpdateSiteRequest"></a>
<a id="tocSupdatesiterequest"></a>
<a id="tocsupdatesiterequest"></a>

```json
{
  "Description": {},
  "Location": {
    "Address": {},
    "Latitude": {},
    "Longitude": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|Location|object|false|none|none|

<h2 id="tocS_UpdateVpcAttachmentRequest">UpdateVpcAttachmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatevpcattachmentrequest"></a>
<a id="schema_UpdateVpcAttachmentRequest"></a>
<a id="tocSupdatevpcattachmentrequest"></a>
<a id="tocsupdatevpcattachmentrequest"></a>

```json
{
  "AddSubnetArns": {},
  "RemoveSubnetArns": {},
  "Options": {
    "Ipv6Support": {},
    "ApplianceModeSupport": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AddSubnetArns|object|false|none|none|
|RemoveSubnetArns|object|false|none|none|
|Options|object|false|none|none|
