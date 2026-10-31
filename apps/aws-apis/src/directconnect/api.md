<h1 id="aws-direct-connect">AWS Direct Connect v2012-10-25</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Direct Connect links your internal network to an Direct Connect location over a standard Ethernet fiber-optic cable. One end of the cable is connected to your router, the other to an Direct Connect router. With this connection in place, you can create virtual interfaces directly to the Amazon Web Services Cloud (for example, to Amazon EC2 and Amazon S3) and to Amazon VPC, bypassing Internet service providers in your network path. A connection provides access to all Amazon Web Services Regions except the China (Beijing) and (China) Ningxia Regions. Amazon Web Services resources in the China Regions can only be accessed through locations associated with those Regions.

Base URLs:

* <a href="http://directconnect.us-east-1.amazonaws.com">http://directconnect.us-east-1.amazonaws.com</a> - The AWS Direct Connect multi-region endpoint

* <a href="https://directconnect.us-east-1.amazonaws.com">https://directconnect.us-east-1.amazonaws.com</a> - The AWS Direct Connect multi-region endpoint

* <a href="http://directconnect.cn-north-1.amazonaws.com.cn">http://directconnect.cn-north-1.amazonaws.com.cn</a> - The AWS Direct Connect endpoint for China (Beijing) and China (Ningxia)

* <a href="https://directconnect.cn-north-1.amazonaws.com.cn">https://directconnect.cn-north-1.amazonaws.com.cn</a> - The AWS Direct Connect endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/directconnect/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-direct-connect-default">Default</h1>

## AcceptDirectConnectGatewayAssociationProposal

<a id="opIdAcceptDirectConnectGatewayAssociationProposal"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.AcceptDirectConnectGatewayAssociationProposal' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.AcceptDirectConnectGatewayAssociationProposal' \
  -d '{
    "directConnectGatewayId": {},
    "proposalId": {},
    "associatedGatewayOwnerAccount": {},
    "overrideAllowedPrefixesToDirectConnectGateway": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.AcceptDirectConnectGatewayAssociationProposal`

Accepts a proposal request to attach a virtual private gateway or transit gateway to a Direct Connect gateway.

> Body parameter

```json
{
  "directConnectGatewayId": {},
  "proposalId": {},
  "associatedGatewayOwnerAccount": {},
  "overrideAllowedPrefixesToDirectConnectGateway": {}
}
```

<h3 id="acceptdirectconnectgatewayassociationproposal-parameters">Parameters</h3>

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
|body|body|[AcceptDirectConnectGatewayAssociationProposalRequest](#schemaacceptdirectconnectgatewayassociationproposalrequest)|true|none|
|» directConnectGatewayId|body|object|true|none|
|» proposalId|body|object|true|none|
|» associatedGatewayOwnerAccount|body|object|true|none|
|» overrideAllowedPrefixesToDirectConnectGateway|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.AcceptDirectConnectGatewayAssociationProposal|

> Example responses

> 200 Response

```json
{
  "directConnectGatewayAssociation": {
    "directConnectGatewayId": {},
    "directConnectGatewayOwnerAccount": {},
    "associationState": {},
    "stateChangeError": {},
    "associatedGateway": {
      "id": {},
      "type": {},
      "ownerAccount": {},
      "region": {}
    },
    "associationId": {},
    "allowedPrefixesToDirectConnectGateway": {},
    "virtualGatewayId": {},
    "virtualGatewayRegion": {},
    "virtualGatewayOwnerAccount": {}
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

<h3 id="acceptdirectconnectgatewayassociationproposal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AcceptDirectConnectGatewayAssociationProposalResult](#schemaacceptdirectconnectgatewayassociationproposalresult)|
|480|480|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|481|481|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AllocateConnectionOnInterconnect

<a id="opIdAllocateConnectionOnInterconnect"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.AllocateConnectionOnInterconnect' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.AllocateConnectionOnInterconnect' \
  -d '{
    "bandwidth": {},
    "connectionName": {},
    "ownerAccount": {},
    "interconnectId": {},
    "vlan": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.AllocateConnectionOnInterconnect`

<aside class="warning">
This operation is deprecated
</aside>

<p>Deprecated. Use <a>AllocateHostedConnection</a> instead.</p> <p>Creates a hosted connection on an interconnect.</p> <p>Allocates a VLAN number and a specified amount of bandwidth for use by a hosted connection on the specified interconnect.</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note>

> Body parameter

```json
{
  "bandwidth": {},
  "connectionName": {},
  "ownerAccount": {},
  "interconnectId": {},
  "vlan": {}
}
```

<h3 id="allocateconnectiononinterconnect-parameters">Parameters</h3>

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
|body|body|[AllocateConnectionOnInterconnectRequest](#schemaallocateconnectiononinterconnectrequest)|true|none|
|» bandwidth|body|object|true|none|
|» connectionName|body|object|true|none|
|» ownerAccount|body|object|true|none|
|» interconnectId|body|object|true|none|
|» vlan|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.AllocateConnectionOnInterconnect|

> Example responses

> 200 Response

```json
{
  "ownerAccount": {},
  "connectionId": {},
  "connectionName": {},
  "connectionState": {},
  "region": {},
  "location": {},
  "bandwidth": {},
  "vlan": {},
  "partnerName": {},
  "loaIssueTime": {},
  "lagId": {},
  "awsDevice": {},
  "jumboFrameCapable": {},
  "awsDeviceV2": {},
  "awsLogicalDeviceId": {},
  "hasLogicalRedundancy": {},
  "tags": {},
  "providerName": {},
  "macSecCapable": {},
  "portEncryptionStatus": {},
  "encryptionMode": {},
  "macSecKeys": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="allocateconnectiononinterconnect-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Connection](#schemaconnection)|
|480|480|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|481|481|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AllocateHostedConnection

<a id="opIdAllocateHostedConnection"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.AllocateHostedConnection' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.AllocateHostedConnection' \
  -d '{
    "connectionId": {},
    "ownerAccount": {},
    "bandwidth": {},
    "connectionName": {},
    "vlan": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.AllocateHostedConnection`

<p>Creates a hosted connection on the specified interconnect or a link aggregation group (LAG) of interconnects.</p> <p>Allocates a VLAN number and a specified amount of capacity (bandwidth) for use by a hosted connection on the specified interconnect or LAG of interconnects. Amazon Web Services polices the hosted connection for the specified capacity and the Direct Connect Partner must also police the hosted connection for the specified capacity.</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note>

> Body parameter

```json
{
  "connectionId": {},
  "ownerAccount": {},
  "bandwidth": {},
  "connectionName": {},
  "vlan": {},
  "tags": {}
}
```

<h3 id="allocatehostedconnection-parameters">Parameters</h3>

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
|body|body|[AllocateHostedConnectionRequest](#schemaallocatehostedconnectionrequest)|true|none|
|» connectionId|body|object|true|none|
|» ownerAccount|body|object|true|none|
|» bandwidth|body|object|true|none|
|» connectionName|body|object|true|none|
|» vlan|body|object|true|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.AllocateHostedConnection|

> Example responses

> 200 Response

```json
{
  "ownerAccount": {},
  "connectionId": {},
  "connectionName": {},
  "connectionState": {},
  "region": {},
  "location": {},
  "bandwidth": {},
  "vlan": {},
  "partnerName": {},
  "loaIssueTime": {},
  "lagId": {},
  "awsDevice": {},
  "jumboFrameCapable": {},
  "awsDeviceV2": {},
  "awsLogicalDeviceId": {},
  "hasLogicalRedundancy": {},
  "tags": {},
  "providerName": {},
  "macSecCapable": {},
  "portEncryptionStatus": {},
  "encryptionMode": {},
  "macSecKeys": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="allocatehostedconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Connection](#schemaconnection)|
|480|480|DuplicateTagKeysException|[DuplicateTagKeysException](#schemaduplicatetagkeysexception)|
|481|481|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|482|482|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|483|483|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AllocatePrivateVirtualInterface

<a id="opIdAllocatePrivateVirtualInterface"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.AllocatePrivateVirtualInterface' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.AllocatePrivateVirtualInterface' \
  -d '{
    "connectionId": {},
    "ownerAccount": {},
    "newPrivateVirtualInterfaceAllocation": {
      "virtualInterfaceName": {},
      "vlan": {},
      "asn": {},
      "mtu": {},
      "authKey": {},
      "amazonAddress": {},
      "addressFamily": {},
      "customerAddress": {},
      "tags": {}
    }
  }'
```

`POST /#X-Amz-Target=OvertureService.AllocatePrivateVirtualInterface`

<p>Provisions a private virtual interface to be owned by the specified Amazon Web Services account.</p> <p>Virtual interfaces created using this action must be confirmed by the owner using <a>ConfirmPrivateVirtualInterface</a>. Until then, the virtual interface is in the <code>Confirming</code> state and is not available to handle traffic.</p>

> Body parameter

```json
{
  "connectionId": {},
  "ownerAccount": {},
  "newPrivateVirtualInterfaceAllocation": {
    "virtualInterfaceName": {},
    "vlan": {},
    "asn": {},
    "mtu": {},
    "authKey": {},
    "amazonAddress": {},
    "addressFamily": {},
    "customerAddress": {},
    "tags": {}
  }
}
```

<h3 id="allocateprivatevirtualinterface-parameters">Parameters</h3>

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
|body|body|[AllocatePrivateVirtualInterfaceRequest](#schemaallocateprivatevirtualinterfacerequest)|true|none|
|» connectionId|body|object|true|none|
|» ownerAccount|body|object|true|none|
|» newPrivateVirtualInterfaceAllocation|body|object|true|none|
|» » virtualInterfaceName|body|object|true|none|
|» » vlan|body|object|true|none|
|» » asn|body|object|true|none|
|» » mtu|body|object|false|none|
|» » authKey|body|object|false|none|
|» » amazonAddress|body|object|false|none|
|» » addressFamily|body|object|false|none|
|» » customerAddress|body|object|false|none|
|» » tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.AllocatePrivateVirtualInterface|

> Example responses

> 200 Response

```json
{
  "ownerAccount": {},
  "virtualInterfaceId": {},
  "location": {},
  "connectionId": {},
  "virtualInterfaceType": {},
  "virtualInterfaceName": {},
  "vlan": {},
  "asn": {},
  "amazonSideAsn": {},
  "authKey": {},
  "amazonAddress": {},
  "customerAddress": {},
  "addressFamily": {},
  "virtualInterfaceState": {},
  "customerRouterConfig": {},
  "mtu": {},
  "jumboFrameCapable": {},
  "virtualGatewayId": {},
  "directConnectGatewayId": {},
  "routeFilterPrefixes": {},
  "bgpPeers": {},
  "region": {},
  "awsDeviceV2": {},
  "awsLogicalDeviceId": {},
  "tags": {},
  "siteLinkEnabled": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="allocateprivatevirtualinterface-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[VirtualInterface](#schemavirtualinterface)|
|480|480|DuplicateTagKeysException|[DuplicateTagKeysException](#schemaduplicatetagkeysexception)|
|481|481|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|482|482|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|483|483|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AllocatePublicVirtualInterface

<a id="opIdAllocatePublicVirtualInterface"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.AllocatePublicVirtualInterface' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.AllocatePublicVirtualInterface' \
  -d '{
    "connectionId": {},
    "ownerAccount": {},
    "newPublicVirtualInterfaceAllocation": {
      "virtualInterfaceName": {},
      "vlan": {},
      "asn": {},
      "authKey": {},
      "amazonAddress": {},
      "customerAddress": {},
      "addressFamily": {},
      "routeFilterPrefixes": {},
      "tags": {}
    }
  }'
```

`POST /#X-Amz-Target=OvertureService.AllocatePublicVirtualInterface`

<p>Provisions a public virtual interface to be owned by the specified Amazon Web Services account.</p> <p>The owner of a connection calls this function to provision a public virtual interface to be owned by the specified Amazon Web Services account.</p> <p>Virtual interfaces created using this function must be confirmed by the owner using <a>ConfirmPublicVirtualInterface</a>. Until this step has been completed, the virtual interface is in the <code>confirming</code> state and is not available to handle traffic.</p> <p>When creating an IPv6 public virtual interface, omit the Amazon address and customer address. IPv6 addresses are automatically assigned from the Amazon pool of IPv6 addresses; you cannot specify custom IPv6 addresses.</p>

> Body parameter

```json
{
  "connectionId": {},
  "ownerAccount": {},
  "newPublicVirtualInterfaceAllocation": {
    "virtualInterfaceName": {},
    "vlan": {},
    "asn": {},
    "authKey": {},
    "amazonAddress": {},
    "customerAddress": {},
    "addressFamily": {},
    "routeFilterPrefixes": {},
    "tags": {}
  }
}
```

<h3 id="allocatepublicvirtualinterface-parameters">Parameters</h3>

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
|body|body|[AllocatePublicVirtualInterfaceRequest](#schemaallocatepublicvirtualinterfacerequest)|true|none|
|» connectionId|body|object|true|none|
|» ownerAccount|body|object|true|none|
|» newPublicVirtualInterfaceAllocation|body|object|true|none|
|» » virtualInterfaceName|body|object|true|none|
|» » vlan|body|object|true|none|
|» » asn|body|object|true|none|
|» » authKey|body|object|false|none|
|» » amazonAddress|body|object|false|none|
|» » customerAddress|body|object|false|none|
|» » addressFamily|body|object|false|none|
|» » routeFilterPrefixes|body|object|false|none|
|» » tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.AllocatePublicVirtualInterface|

> Example responses

> 200 Response

```json
{
  "ownerAccount": {},
  "virtualInterfaceId": {},
  "location": {},
  "connectionId": {},
  "virtualInterfaceType": {},
  "virtualInterfaceName": {},
  "vlan": {},
  "asn": {},
  "amazonSideAsn": {},
  "authKey": {},
  "amazonAddress": {},
  "customerAddress": {},
  "addressFamily": {},
  "virtualInterfaceState": {},
  "customerRouterConfig": {},
  "mtu": {},
  "jumboFrameCapable": {},
  "virtualGatewayId": {},
  "directConnectGatewayId": {},
  "routeFilterPrefixes": {},
  "bgpPeers": {},
  "region": {},
  "awsDeviceV2": {},
  "awsLogicalDeviceId": {},
  "tags": {},
  "siteLinkEnabled": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="allocatepublicvirtualinterface-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[VirtualInterface](#schemavirtualinterface)|
|480|480|DuplicateTagKeysException|[DuplicateTagKeysException](#schemaduplicatetagkeysexception)|
|481|481|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|482|482|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|483|483|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AllocateTransitVirtualInterface

<a id="opIdAllocateTransitVirtualInterface"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.AllocateTransitVirtualInterface' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.AllocateTransitVirtualInterface' \
  -d '{
    "connectionId": {},
    "ownerAccount": {},
    "newTransitVirtualInterfaceAllocation": {
      "virtualInterfaceName": {},
      "vlan": {},
      "asn": {},
      "mtu": {},
      "authKey": {},
      "amazonAddress": {},
      "customerAddress": {},
      "addressFamily": {},
      "tags": {}
    }
  }'
```

`POST /#X-Amz-Target=OvertureService.AllocateTransitVirtualInterface`

<p>Provisions a transit virtual interface to be owned by the specified Amazon Web Services account. Use this type of interface to connect a transit gateway to your Direct Connect gateway.</p> <p>The owner of a connection provisions a transit virtual interface to be owned by the specified Amazon Web Services account.</p> <p>After you create a transit virtual interface, it must be confirmed by the owner using <a>ConfirmTransitVirtualInterface</a>. Until this step has been completed, the transit virtual interface is in the <code>requested</code> state and is not available to handle traffic.</p>

> Body parameter

```json
{
  "connectionId": {},
  "ownerAccount": {},
  "newTransitVirtualInterfaceAllocation": {
    "virtualInterfaceName": {},
    "vlan": {},
    "asn": {},
    "mtu": {},
    "authKey": {},
    "amazonAddress": {},
    "customerAddress": {},
    "addressFamily": {},
    "tags": {}
  }
}
```

<h3 id="allocatetransitvirtualinterface-parameters">Parameters</h3>

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
|body|body|[AllocateTransitVirtualInterfaceRequest](#schemaallocatetransitvirtualinterfacerequest)|true|none|
|» connectionId|body|object|true|none|
|» ownerAccount|body|object|true|none|
|» newTransitVirtualInterfaceAllocation|body|object|true|none|
|» » virtualInterfaceName|body|object|false|none|
|» » vlan|body|object|false|none|
|» » asn|body|object|false|none|
|» » mtu|body|object|false|none|
|» » authKey|body|object|false|none|
|» » amazonAddress|body|object|false|none|
|» » customerAddress|body|object|false|none|
|» » addressFamily|body|object|false|none|
|» » tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.AllocateTransitVirtualInterface|

> Example responses

> 200 Response

```json
{
  "virtualInterface": {
    "ownerAccount": {},
    "virtualInterfaceId": {},
    "location": {},
    "connectionId": {},
    "virtualInterfaceType": {},
    "virtualInterfaceName": {},
    "vlan": {},
    "asn": {},
    "amazonSideAsn": {},
    "authKey": {},
    "amazonAddress": {},
    "customerAddress": {},
    "addressFamily": {},
    "virtualInterfaceState": {},
    "customerRouterConfig": {},
    "mtu": {},
    "jumboFrameCapable": {},
    "virtualGatewayId": {},
    "directConnectGatewayId": {},
    "routeFilterPrefixes": {},
    "bgpPeers": {},
    "region": {},
    "awsDeviceV2": {},
    "awsLogicalDeviceId": {},
    "tags": {},
    "siteLinkEnabled": {}
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

<h3 id="allocatetransitvirtualinterface-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AllocateTransitVirtualInterfaceResult](#schemaallocatetransitvirtualinterfaceresult)|
|480|480|DuplicateTagKeysException|[DuplicateTagKeysException](#schemaduplicatetagkeysexception)|
|481|481|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|482|482|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|483|483|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateConnectionWithLag

<a id="opIdAssociateConnectionWithLag"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.AssociateConnectionWithLag' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.AssociateConnectionWithLag' \
  -d '{
    "connectionId": {},
    "lagId": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.AssociateConnectionWithLag`

<p>Associates an existing connection with a link aggregation group (LAG). The connection is interrupted and re-established as a member of the LAG (connectivity to Amazon Web Services is interrupted). The connection must be hosted on the same Direct Connect endpoint as the LAG, and its bandwidth must match the bandwidth for the LAG. You can re-associate a connection that's currently associated with a different LAG; however, if removing the connection would cause the original LAG to fall below its setting for minimum number of operational connections, the request fails.</p> <p>Any virtual interfaces that are directly associated with the connection are automatically re-associated with the LAG. If the connection was originally associated with a different LAG, the virtual interfaces remain associated with the original LAG.</p> <p>For interconnects, any hosted connections are automatically re-associated with the LAG. If the interconnect was originally associated with a different LAG, the hosted connections remain associated with the original LAG.</p>

> Body parameter

```json
{
  "connectionId": {},
  "lagId": {}
}
```

<h3 id="associateconnectionwithlag-parameters">Parameters</h3>

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
|body|body|[AssociateConnectionWithLagRequest](#schemaassociateconnectionwithlagrequest)|true|none|
|» connectionId|body|object|true|none|
|» lagId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.AssociateConnectionWithLag|

> Example responses

> 200 Response

```json
{
  "ownerAccount": {},
  "connectionId": {},
  "connectionName": {},
  "connectionState": {},
  "region": {},
  "location": {},
  "bandwidth": {},
  "vlan": {},
  "partnerName": {},
  "loaIssueTime": {},
  "lagId": {},
  "awsDevice": {},
  "jumboFrameCapable": {},
  "awsDeviceV2": {},
  "awsLogicalDeviceId": {},
  "hasLogicalRedundancy": {},
  "tags": {},
  "providerName": {},
  "macSecCapable": {},
  "portEncryptionStatus": {},
  "encryptionMode": {},
  "macSecKeys": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="associateconnectionwithlag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Connection](#schemaconnection)|
|480|480|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|481|481|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateHostedConnection

<a id="opIdAssociateHostedConnection"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.AssociateHostedConnection' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.AssociateHostedConnection' \
  -d '{
    "connectionId": {},
    "parentConnectionId": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.AssociateHostedConnection`

<p>Associates a hosted connection and its virtual interfaces with a link aggregation group (LAG) or interconnect. If the target interconnect or LAG has an existing hosted connection with a conflicting VLAN number or IP address, the operation fails. This action temporarily interrupts the hosted connection's connectivity to Amazon Web Services as it is being migrated.</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note>

> Body parameter

```json
{
  "connectionId": {},
  "parentConnectionId": {}
}
```

<h3 id="associatehostedconnection-parameters">Parameters</h3>

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
|body|body|[AssociateHostedConnectionRequest](#schemaassociatehostedconnectionrequest)|true|none|
|» connectionId|body|object|true|none|
|» parentConnectionId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.AssociateHostedConnection|

> Example responses

> 200 Response

```json
{
  "ownerAccount": {},
  "connectionId": {},
  "connectionName": {},
  "connectionState": {},
  "region": {},
  "location": {},
  "bandwidth": {},
  "vlan": {},
  "partnerName": {},
  "loaIssueTime": {},
  "lagId": {},
  "awsDevice": {},
  "jumboFrameCapable": {},
  "awsDeviceV2": {},
  "awsLogicalDeviceId": {},
  "hasLogicalRedundancy": {},
  "tags": {},
  "providerName": {},
  "macSecCapable": {},
  "portEncryptionStatus": {},
  "encryptionMode": {},
  "macSecKeys": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="associatehostedconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Connection](#schemaconnection)|
|480|480|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|481|481|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateMacSecKey

<a id="opIdAssociateMacSecKey"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.AssociateMacSecKey' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.AssociateMacSecKey' \
  -d '{
    "connectionId": {},
    "secretARN": {},
    "ckn": {},
    "cak": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.AssociateMacSecKey`

<p>Associates a MAC Security (MACsec) Connection Key Name (CKN)/ Connectivity Association Key (CAK) pair with an Direct Connect dedicated connection.</p> <p>You must supply either the <code>secretARN,</code> or the CKN/CAK (<code>ckn</code> and <code>cak</code>) pair in the request.</p> <p>For information about MAC Security (MACsec) key considerations, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-mac-sec-getting-started.html#mac-sec-key-consideration">MACsec pre-shared CKN/CAK key considerations </a> in the <i>Direct Connect User Guide</i>.</p>

> Body parameter

```json
{
  "connectionId": {},
  "secretARN": {},
  "ckn": {},
  "cak": {}
}
```

<h3 id="associatemacseckey-parameters">Parameters</h3>

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
|body|body|[AssociateMacSecKeyRequest](#schemaassociatemacseckeyrequest)|true|none|
|» connectionId|body|object|true|none|
|» secretARN|body|object|false|none|
|» ckn|body|object|false|none|
|» cak|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.AssociateMacSecKey|

> Example responses

> 200 Response

```json
{
  "connectionId": {},
  "macSecKeys": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="associatemacseckey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateMacSecKeyResponse](#schemaassociatemacseckeyresponse)|
|480|480|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|481|481|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateVirtualInterface

<a id="opIdAssociateVirtualInterface"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.AssociateVirtualInterface' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.AssociateVirtualInterface' \
  -d '{
    "virtualInterfaceId": {},
    "connectionId": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.AssociateVirtualInterface`

<p>Associates a virtual interface with a specified link aggregation group (LAG) or connection. Connectivity to Amazon Web Services is temporarily interrupted as the virtual interface is being migrated. If the target connection or LAG has an associated virtual interface with a conflicting VLAN number or a conflicting IP address, the operation fails.</p> <p>Virtual interfaces associated with a hosted connection cannot be associated with a LAG; hosted connections must be migrated along with their virtual interfaces using <a>AssociateHostedConnection</a>.</p> <p>To reassociate a virtual interface to a new connection or LAG, the requester must own either the virtual interface itself or the connection to which the virtual interface is currently associated. Additionally, the requester must own the connection or LAG for the association.</p>

> Body parameter

```json
{
  "virtualInterfaceId": {},
  "connectionId": {}
}
```

<h3 id="associatevirtualinterface-parameters">Parameters</h3>

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
|body|body|[AssociateVirtualInterfaceRequest](#schemaassociatevirtualinterfacerequest)|true|none|
|» virtualInterfaceId|body|object|true|none|
|» connectionId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.AssociateVirtualInterface|

> Example responses

> 200 Response

```json
{
  "ownerAccount": {},
  "virtualInterfaceId": {},
  "location": {},
  "connectionId": {},
  "virtualInterfaceType": {},
  "virtualInterfaceName": {},
  "vlan": {},
  "asn": {},
  "amazonSideAsn": {},
  "authKey": {},
  "amazonAddress": {},
  "customerAddress": {},
  "addressFamily": {},
  "virtualInterfaceState": {},
  "customerRouterConfig": {},
  "mtu": {},
  "jumboFrameCapable": {},
  "virtualGatewayId": {},
  "directConnectGatewayId": {},
  "routeFilterPrefixes": {},
  "bgpPeers": {},
  "region": {},
  "awsDeviceV2": {},
  "awsLogicalDeviceId": {},
  "tags": {},
  "siteLinkEnabled": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="associatevirtualinterface-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[VirtualInterface](#schemavirtualinterface)|
|480|480|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|481|481|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ConfirmConnection

<a id="opIdConfirmConnection"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.ConfirmConnection' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.ConfirmConnection' \
  -d '{
    "connectionId": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.ConfirmConnection`

<p>Confirms the creation of the specified hosted connection on an interconnect.</p> <p>Upon creation, the hosted connection is initially in the <code>Ordering</code> state, and remains in this state until the owner confirms creation of the hosted connection.</p>

> Body parameter

```json
{
  "connectionId": {}
}
```

<h3 id="confirmconnection-parameters">Parameters</h3>

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
|body|body|[ConfirmConnectionRequest](#schemaconfirmconnectionrequest)|true|none|
|» connectionId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.ConfirmConnection|

> Example responses

> 200 Response

```json
{
  "connectionState": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="confirmconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ConfirmConnectionResponse](#schemaconfirmconnectionresponse)|
|480|480|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|481|481|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ConfirmCustomerAgreement

<a id="opIdConfirmCustomerAgreement"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.ConfirmCustomerAgreement' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.ConfirmCustomerAgreement' \
  -d '{
    "agreementName": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.ConfirmCustomerAgreement`

 The confirmation of the terms of agreement when creating the connection/link aggregation group (LAG). 

> Body parameter

```json
{
  "agreementName": {}
}
```

<h3 id="confirmcustomeragreement-parameters">Parameters</h3>

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
|body|body|[ConfirmCustomerAgreementRequest](#schemaconfirmcustomeragreementrequest)|true|none|
|» agreementName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.ConfirmCustomerAgreement|

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

<h3 id="confirmcustomeragreement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ConfirmCustomerAgreementResponse](#schemaconfirmcustomeragreementresponse)|
|480|480|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|481|481|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ConfirmPrivateVirtualInterface

<a id="opIdConfirmPrivateVirtualInterface"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.ConfirmPrivateVirtualInterface' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.ConfirmPrivateVirtualInterface' \
  -d '{
    "virtualInterfaceId": {},
    "virtualGatewayId": {},
    "directConnectGatewayId": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.ConfirmPrivateVirtualInterface`

<p>Accepts ownership of a private virtual interface created by another Amazon Web Services account.</p> <p>After the virtual interface owner makes this call, the virtual interface is created and attached to the specified virtual private gateway or Direct Connect gateway, and is made available to handle traffic.</p>

> Body parameter

```json
{
  "virtualInterfaceId": {},
  "virtualGatewayId": {},
  "directConnectGatewayId": {}
}
```

<h3 id="confirmprivatevirtualinterface-parameters">Parameters</h3>

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
|body|body|[ConfirmPrivateVirtualInterfaceRequest](#schemaconfirmprivatevirtualinterfacerequest)|true|none|
|» virtualInterfaceId|body|object|true|none|
|» virtualGatewayId|body|object|false|none|
|» directConnectGatewayId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.ConfirmPrivateVirtualInterface|

> Example responses

> 200 Response

```json
{
  "virtualInterfaceState": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="confirmprivatevirtualinterface-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ConfirmPrivateVirtualInterfaceResponse](#schemaconfirmprivatevirtualinterfaceresponse)|
|480|480|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|481|481|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ConfirmPublicVirtualInterface

<a id="opIdConfirmPublicVirtualInterface"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.ConfirmPublicVirtualInterface' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.ConfirmPublicVirtualInterface' \
  -d '{
    "virtualInterfaceId": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.ConfirmPublicVirtualInterface`

<p>Accepts ownership of a public virtual interface created by another Amazon Web Services account.</p> <p>After the virtual interface owner makes this call, the specified virtual interface is created and made available to handle traffic.</p>

> Body parameter

```json
{
  "virtualInterfaceId": {}
}
```

<h3 id="confirmpublicvirtualinterface-parameters">Parameters</h3>

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
|body|body|[ConfirmPublicVirtualInterfaceRequest](#schemaconfirmpublicvirtualinterfacerequest)|true|none|
|» virtualInterfaceId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.ConfirmPublicVirtualInterface|

> Example responses

> 200 Response

```json
{
  "virtualInterfaceState": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="confirmpublicvirtualinterface-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ConfirmPublicVirtualInterfaceResponse](#schemaconfirmpublicvirtualinterfaceresponse)|
|480|480|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|481|481|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ConfirmTransitVirtualInterface

<a id="opIdConfirmTransitVirtualInterface"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.ConfirmTransitVirtualInterface' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.ConfirmTransitVirtualInterface' \
  -d '{
    "virtualInterfaceId": {},
    "directConnectGatewayId": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.ConfirmTransitVirtualInterface`

<p>Accepts ownership of a transit virtual interface created by another Amazon Web Services account.</p> <p> After the owner of the transit virtual interface makes this call, the specified transit virtual interface is created and made available to handle traffic.</p>

> Body parameter

```json
{
  "virtualInterfaceId": {},
  "directConnectGatewayId": {}
}
```

<h3 id="confirmtransitvirtualinterface-parameters">Parameters</h3>

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
|body|body|[ConfirmTransitVirtualInterfaceRequest](#schemaconfirmtransitvirtualinterfacerequest)|true|none|
|» virtualInterfaceId|body|object|true|none|
|» directConnectGatewayId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.ConfirmTransitVirtualInterface|

> Example responses

> 200 Response

```json
{
  "virtualInterfaceState": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="confirmtransitvirtualinterface-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ConfirmTransitVirtualInterfaceResponse](#schemaconfirmtransitvirtualinterfaceresponse)|
|480|480|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|481|481|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateBGPPeer

<a id="opIdCreateBGPPeer"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.CreateBGPPeer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.CreateBGPPeer' \
  -d '{
    "virtualInterfaceId": {},
    "newBGPPeer": {
      "asn": {},
      "authKey": {},
      "addressFamily": {},
      "amazonAddress": {},
      "customerAddress": {}
    }
  }'
```

`POST /#X-Amz-Target=OvertureService.CreateBGPPeer`

<p>Creates a BGP peer on the specified virtual interface.</p> <p>You must create a BGP peer for the corresponding address family (IPv4/IPv6) in order to access Amazon Web Services resources that also use that address family.</p> <p>If logical redundancy is not supported by the connection, interconnect, or LAG, the BGP peer cannot be in the same address family as an existing BGP peer on the virtual interface.</p> <p>When creating a IPv6 BGP peer, omit the Amazon address and customer address. IPv6 addresses are automatically assigned from the Amazon pool of IPv6 addresses; you cannot specify custom IPv6 addresses.</p> <important> <p>If you let Amazon Web Services auto-assign IPv4 addresses, a /30 CIDR will be allocated from 169.254.0.0/16. Amazon Web Services does not recommend this option if you intend to use the customer router peer IP address as the source and destination for traffic. Instead you should use RFC 1918 or other addressing, and specify the address yourself. For more information about RFC 1918 see <a href="https://datatracker.ietf.org/doc/html/rfc1918"> Address Allocation for Private Internets</a>.</p> </important> <p>For a public virtual interface, the Autonomous System Number (ASN) must be private or already on the allow list for the virtual interface.</p>

> Body parameter

```json
{
  "virtualInterfaceId": {},
  "newBGPPeer": {
    "asn": {},
    "authKey": {},
    "addressFamily": {},
    "amazonAddress": {},
    "customerAddress": {}
  }
}
```

<h3 id="createbgppeer-parameters">Parameters</h3>

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
|body|body|[CreateBGPPeerRequest](#schemacreatebgppeerrequest)|true|none|
|» virtualInterfaceId|body|object|false|none|
|» newBGPPeer|body|object|false|none|
|» » asn|body|object|false|none|
|» » authKey|body|object|false|none|
|» » addressFamily|body|object|false|none|
|» » amazonAddress|body|object|false|none|
|» » customerAddress|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.CreateBGPPeer|

> Example responses

> 200 Response

```json
{
  "virtualInterface": {
    "ownerAccount": {},
    "virtualInterfaceId": {},
    "location": {},
    "connectionId": {},
    "virtualInterfaceType": {},
    "virtualInterfaceName": {},
    "vlan": {},
    "asn": {},
    "amazonSideAsn": {},
    "authKey": {},
    "amazonAddress": {},
    "customerAddress": {},
    "addressFamily": {},
    "virtualInterfaceState": {},
    "customerRouterConfig": {},
    "mtu": {},
    "jumboFrameCapable": {},
    "virtualGatewayId": {},
    "directConnectGatewayId": {},
    "routeFilterPrefixes": {},
    "bgpPeers": {},
    "region": {},
    "awsDeviceV2": {},
    "awsLogicalDeviceId": {},
    "tags": {},
    "siteLinkEnabled": {}
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

<h3 id="createbgppeer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateBGPPeerResponse](#schemacreatebgppeerresponse)|
|480|480|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|481|481|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateConnection

<a id="opIdCreateConnection"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.CreateConnection' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.CreateConnection' \
  -d '{
    "location": {},
    "bandwidth": {},
    "connectionName": {},
    "lagId": {},
    "tags": {},
    "providerName": {},
    "requestMACSec": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.CreateConnection`

<p>Creates a connection between a customer network and a specific Direct Connect location.</p> <p>A connection links your internal network to an Direct Connect location over a standard Ethernet fiber-optic cable. One end of the cable is connected to your router, the other to an Direct Connect router.</p> <p>To find the locations for your Region, use <a>DescribeLocations</a>.</p> <p>You can automatically add the new connection to a link aggregation group (LAG) by specifying a LAG ID in the request. This ensures that the new connection is allocated on the same Direct Connect endpoint that hosts the specified LAG. If there are no available ports on the endpoint, the request fails and no connection is created.</p>

> Body parameter

```json
{
  "location": {},
  "bandwidth": {},
  "connectionName": {},
  "lagId": {},
  "tags": {},
  "providerName": {},
  "requestMACSec": {}
}
```

<h3 id="createconnection-parameters">Parameters</h3>

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
|body|body|[CreateConnectionRequest](#schemacreateconnectionrequest)|true|none|
|» location|body|object|true|none|
|» bandwidth|body|object|true|none|
|» connectionName|body|object|true|none|
|» lagId|body|object|false|none|
|» tags|body|object|false|none|
|» providerName|body|object|false|none|
|» requestMACSec|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.CreateConnection|

> Example responses

> 200 Response

```json
{
  "ownerAccount": {},
  "connectionId": {},
  "connectionName": {},
  "connectionState": {},
  "region": {},
  "location": {},
  "bandwidth": {},
  "vlan": {},
  "partnerName": {},
  "loaIssueTime": {},
  "lagId": {},
  "awsDevice": {},
  "jumboFrameCapable": {},
  "awsDeviceV2": {},
  "awsLogicalDeviceId": {},
  "hasLogicalRedundancy": {},
  "tags": {},
  "providerName": {},
  "macSecCapable": {},
  "portEncryptionStatus": {},
  "encryptionMode": {},
  "macSecKeys": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="createconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Connection](#schemaconnection)|
|480|480|DuplicateTagKeysException|[DuplicateTagKeysException](#schemaduplicatetagkeysexception)|
|481|481|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|482|482|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|483|483|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDirectConnectGateway

<a id="opIdCreateDirectConnectGateway"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.CreateDirectConnectGateway' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.CreateDirectConnectGateway' \
  -d '{
    "directConnectGatewayName": {},
    "amazonSideAsn": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.CreateDirectConnectGateway`

Creates a Direct Connect gateway, which is an intermediate object that enables you to connect a set of virtual interfaces and virtual private gateways. A Direct Connect gateway is global and visible in any Amazon Web Services Region after it is created. The virtual interfaces and virtual private gateways that are connected through a Direct Connect gateway can be in different Amazon Web Services Regions. This enables you to connect to a VPC in any Region, regardless of the Region in which the virtual interfaces are located, and pass traffic between them.

> Body parameter

```json
{
  "directConnectGatewayName": {},
  "amazonSideAsn": {}
}
```

<h3 id="createdirectconnectgateway-parameters">Parameters</h3>

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
|body|body|[CreateDirectConnectGatewayRequest](#schemacreatedirectconnectgatewayrequest)|true|none|
|» directConnectGatewayName|body|object|true|none|
|» amazonSideAsn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.CreateDirectConnectGateway|

> Example responses

> 200 Response

```json
{
  "directConnectGateway": {
    "directConnectGatewayId": {},
    "directConnectGatewayName": {},
    "amazonSideAsn": {},
    "ownerAccount": {},
    "directConnectGatewayState": {},
    "stateChangeError": {}
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

<h3 id="createdirectconnectgateway-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDirectConnectGatewayResult](#schemacreatedirectconnectgatewayresult)|
|480|480|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|481|481|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDirectConnectGatewayAssociation

<a id="opIdCreateDirectConnectGatewayAssociation"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.CreateDirectConnectGatewayAssociation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.CreateDirectConnectGatewayAssociation' \
  -d '{
    "directConnectGatewayId": {},
    "gatewayId": {},
    "addAllowedPrefixesToDirectConnectGateway": {},
    "virtualGatewayId": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.CreateDirectConnectGatewayAssociation`

Creates an association between a Direct Connect gateway and a virtual private gateway. The virtual private gateway must be attached to a VPC and must not be associated with another Direct Connect gateway.

> Body parameter

```json
{
  "directConnectGatewayId": {},
  "gatewayId": {},
  "addAllowedPrefixesToDirectConnectGateway": {},
  "virtualGatewayId": {}
}
```

<h3 id="createdirectconnectgatewayassociation-parameters">Parameters</h3>

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
|body|body|[CreateDirectConnectGatewayAssociationRequest](#schemacreatedirectconnectgatewayassociationrequest)|true|none|
|» directConnectGatewayId|body|object|true|none|
|» gatewayId|body|object|false|none|
|» addAllowedPrefixesToDirectConnectGateway|body|object|false|none|
|» virtualGatewayId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.CreateDirectConnectGatewayAssociation|

> Example responses

> 200 Response

```json
{
  "directConnectGatewayAssociation": {
    "directConnectGatewayId": {},
    "directConnectGatewayOwnerAccount": {},
    "associationState": {},
    "stateChangeError": {},
    "associatedGateway": {
      "id": {},
      "type": {},
      "ownerAccount": {},
      "region": {}
    },
    "associationId": {},
    "allowedPrefixesToDirectConnectGateway": {},
    "virtualGatewayId": {},
    "virtualGatewayRegion": {},
    "virtualGatewayOwnerAccount": {}
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

<h3 id="createdirectconnectgatewayassociation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDirectConnectGatewayAssociationResult](#schemacreatedirectconnectgatewayassociationresult)|
|480|480|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|481|481|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDirectConnectGatewayAssociationProposal

<a id="opIdCreateDirectConnectGatewayAssociationProposal"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.CreateDirectConnectGatewayAssociationProposal' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.CreateDirectConnectGatewayAssociationProposal' \
  -d '{
    "directConnectGatewayId": {},
    "directConnectGatewayOwnerAccount": {},
    "gatewayId": {},
    "addAllowedPrefixesToDirectConnectGateway": {},
    "removeAllowedPrefixesToDirectConnectGateway": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.CreateDirectConnectGatewayAssociationProposal`

<p>Creates a proposal to associate the specified virtual private gateway or transit gateway with the specified Direct Connect gateway.</p> <p>You can associate a Direct Connect gateway and virtual private gateway or transit gateway that is owned by any Amazon Web Services account. </p>

> Body parameter

```json
{
  "directConnectGatewayId": {},
  "directConnectGatewayOwnerAccount": {},
  "gatewayId": {},
  "addAllowedPrefixesToDirectConnectGateway": {},
  "removeAllowedPrefixesToDirectConnectGateway": {}
}
```

<h3 id="createdirectconnectgatewayassociationproposal-parameters">Parameters</h3>

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
|body|body|[CreateDirectConnectGatewayAssociationProposalRequest](#schemacreatedirectconnectgatewayassociationproposalrequest)|true|none|
|» directConnectGatewayId|body|object|true|none|
|» directConnectGatewayOwnerAccount|body|object|true|none|
|» gatewayId|body|object|true|none|
|» addAllowedPrefixesToDirectConnectGateway|body|object|false|none|
|» removeAllowedPrefixesToDirectConnectGateway|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.CreateDirectConnectGatewayAssociationProposal|

> Example responses

> 200 Response

```json
{
  "directConnectGatewayAssociationProposal": {
    "proposalId": {},
    "directConnectGatewayId": {},
    "directConnectGatewayOwnerAccount": {},
    "proposalState": {},
    "associatedGateway": {
      "id": {},
      "type": {},
      "ownerAccount": {},
      "region": {}
    },
    "existingAllowedPrefixesToDirectConnectGateway": {},
    "requestedAllowedPrefixesToDirectConnectGateway": {}
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

<h3 id="createdirectconnectgatewayassociationproposal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDirectConnectGatewayAssociationProposalResult](#schemacreatedirectconnectgatewayassociationproposalresult)|
|480|480|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|481|481|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateInterconnect

<a id="opIdCreateInterconnect"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.CreateInterconnect' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.CreateInterconnect' \
  -d '{
    "interconnectName": {},
    "bandwidth": {},
    "location": {},
    "lagId": {},
    "tags": {},
    "providerName": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.CreateInterconnect`

<p>Creates an interconnect between an Direct Connect Partner's network and a specific Direct Connect location.</p> <p>An interconnect is a connection that is capable of hosting other connections. The Direct Connect Partner can use an interconnect to provide Direct Connect hosted connections to customers through their own network services. Like a standard connection, an interconnect links the partner's network to an Direct Connect location over a standard Ethernet fiber-optic cable. One end is connected to the partner's router, the other to an Direct Connect router.</p> <p>You can automatically add the new interconnect to a link aggregation group (LAG) by specifying a LAG ID in the request. This ensures that the new interconnect is allocated on the same Direct Connect endpoint that hosts the specified LAG. If there are no available ports on the endpoint, the request fails and no interconnect is created.</p> <p>For each end customer, the Direct Connect Partner provisions a connection on their interconnect by calling <a>AllocateHostedConnection</a>. The end customer can then connect to Amazon Web Services resources by creating a virtual interface on their connection, using the VLAN assigned to them by the Direct Connect Partner.</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note>

> Body parameter

```json
{
  "interconnectName": {},
  "bandwidth": {},
  "location": {},
  "lagId": {},
  "tags": {},
  "providerName": {}
}
```

<h3 id="createinterconnect-parameters">Parameters</h3>

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
|body|body|[CreateInterconnectRequest](#schemacreateinterconnectrequest)|true|none|
|» interconnectName|body|object|true|none|
|» bandwidth|body|object|true|none|
|» location|body|object|true|none|
|» lagId|body|object|false|none|
|» tags|body|object|false|none|
|» providerName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.CreateInterconnect|

> Example responses

> 200 Response

```json
{
  "interconnectId": {},
  "interconnectName": {},
  "interconnectState": {},
  "region": {},
  "location": {},
  "bandwidth": {},
  "loaIssueTime": {},
  "lagId": {},
  "awsDevice": {},
  "jumboFrameCapable": {},
  "awsDeviceV2": {},
  "awsLogicalDeviceId": {},
  "hasLogicalRedundancy": {},
  "tags": {},
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

<h3 id="createinterconnect-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Interconnect](#schemainterconnect)|
|480|480|DuplicateTagKeysException|[DuplicateTagKeysException](#schemaduplicatetagkeysexception)|
|481|481|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|482|482|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|483|483|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateLag

<a id="opIdCreateLag"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.CreateLag' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.CreateLag' \
  -d '{
    "numberOfConnections": {},
    "location": {},
    "connectionsBandwidth": {},
    "lagName": {},
    "connectionId": {},
    "tags": {},
    "childConnectionTags": {},
    "providerName": {},
    "requestMACSec": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.CreateLag`

<p>Creates a link aggregation group (LAG) with the specified number of bundled physical dedicated connections between the customer network and a specific Direct Connect location. A LAG is a logical interface that uses the Link Aggregation Control Protocol (LACP) to aggregate multiple interfaces, enabling you to treat them as a single interface.</p> <p>All connections in a LAG must use the same bandwidth (either 1Gbps or 10Gbps) and must terminate at the same Direct Connect endpoint.</p> <p>You can have up to 10 dedicated connections per LAG. Regardless of this limit, if you request more connections for the LAG than Direct Connect can allocate on a single endpoint, no LAG is created.</p> <p>You can specify an existing physical dedicated connection or interconnect to include in the LAG (which counts towards the total number of connections). Doing so interrupts the current physical dedicated connection, and re-establishes them as a member of the LAG. The LAG will be created on the same Direct Connect endpoint to which the dedicated connection terminates. Any virtual interfaces associated with the dedicated connection are automatically disassociated and re-associated with the LAG. The connection ID does not change.</p> <p>If the Amazon Web Services account used to create a LAG is a registered Direct Connect Partner, the LAG is automatically enabled to host sub-connections. For a LAG owned by a partner, any associated virtual interfaces cannot be directly configured.</p>

> Body parameter

```json
{
  "numberOfConnections": {},
  "location": {},
  "connectionsBandwidth": {},
  "lagName": {},
  "connectionId": {},
  "tags": {},
  "childConnectionTags": {},
  "providerName": {},
  "requestMACSec": {}
}
```

<h3 id="createlag-parameters">Parameters</h3>

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
|body|body|[CreateLagRequest](#schemacreatelagrequest)|true|none|
|» numberOfConnections|body|object|true|none|
|» location|body|object|true|none|
|» connectionsBandwidth|body|object|true|none|
|» lagName|body|object|true|none|
|» connectionId|body|object|false|none|
|» tags|body|object|false|none|
|» childConnectionTags|body|object|false|none|
|» providerName|body|object|false|none|
|» requestMACSec|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.CreateLag|

> Example responses

> 200 Response

```json
{
  "connectionsBandwidth": {},
  "numberOfConnections": {},
  "lagId": {},
  "ownerAccount": {},
  "lagName": {},
  "lagState": {},
  "location": {},
  "region": {},
  "minimumLinks": {},
  "awsDevice": {},
  "awsDeviceV2": {},
  "awsLogicalDeviceId": {},
  "connections": {},
  "allowsHostedConnections": {},
  "jumboFrameCapable": {},
  "hasLogicalRedundancy": {},
  "tags": {},
  "providerName": {},
  "macSecCapable": {},
  "encryptionMode": {},
  "macSecKeys": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="createlag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Lag](#schemalag)|
|480|480|DuplicateTagKeysException|[DuplicateTagKeysException](#schemaduplicatetagkeysexception)|
|481|481|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|482|482|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|483|483|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreatePrivateVirtualInterface

<a id="opIdCreatePrivateVirtualInterface"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.CreatePrivateVirtualInterface' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.CreatePrivateVirtualInterface' \
  -d '{
    "connectionId": {},
    "newPrivateVirtualInterface": {
      "virtualInterfaceName": {},
      "vlan": {},
      "asn": {},
      "mtu": {},
      "authKey": {},
      "amazonAddress": {},
      "customerAddress": {},
      "addressFamily": {},
      "virtualGatewayId": {},
      "directConnectGatewayId": {},
      "tags": {},
      "enableSiteLink": {}
    }
  }'
```

`POST /#X-Amz-Target=OvertureService.CreatePrivateVirtualInterface`

<p>Creates a private virtual interface. A virtual interface is the VLAN that transports Direct Connect traffic. A private virtual interface can be connected to either a Direct Connect gateway or a Virtual Private Gateway (VGW). Connecting the private virtual interface to a Direct Connect gateway enables the possibility for connecting to multiple VPCs, including VPCs in different Amazon Web Services Regions. Connecting the private virtual interface to a VGW only provides access to a single VPC within the same Region.</p> <p>Setting the MTU of a virtual interface to 9001 (jumbo frames) can cause an update to the underlying physical connection if it wasn't updated to support jumbo frames. Updating the connection disrupts network connectivity for all virtual interfaces associated with the connection for up to 30 seconds. To check whether your connection supports jumbo frames, call <a>DescribeConnections</a>. To check whether your virtual interface supports jumbo frames, call <a>DescribeVirtualInterfaces</a>.</p>

> Body parameter

```json
{
  "connectionId": {},
  "newPrivateVirtualInterface": {
    "virtualInterfaceName": {},
    "vlan": {},
    "asn": {},
    "mtu": {},
    "authKey": {},
    "amazonAddress": {},
    "customerAddress": {},
    "addressFamily": {},
    "virtualGatewayId": {},
    "directConnectGatewayId": {},
    "tags": {},
    "enableSiteLink": {}
  }
}
```

<h3 id="createprivatevirtualinterface-parameters">Parameters</h3>

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
|body|body|[CreatePrivateVirtualInterfaceRequest](#schemacreateprivatevirtualinterfacerequest)|true|none|
|» connectionId|body|object|true|none|
|» newPrivateVirtualInterface|body|object|true|none|
|» » virtualInterfaceName|body|object|true|none|
|» » vlan|body|object|true|none|
|» » asn|body|object|true|none|
|» » mtu|body|object|false|none|
|» » authKey|body|object|false|none|
|» » amazonAddress|body|object|false|none|
|» » customerAddress|body|object|false|none|
|» » addressFamily|body|object|false|none|
|» » virtualGatewayId|body|object|false|none|
|» » directConnectGatewayId|body|object|false|none|
|» » tags|body|object|false|none|
|» » enableSiteLink|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.CreatePrivateVirtualInterface|

> Example responses

> 200 Response

```json
{
  "ownerAccount": {},
  "virtualInterfaceId": {},
  "location": {},
  "connectionId": {},
  "virtualInterfaceType": {},
  "virtualInterfaceName": {},
  "vlan": {},
  "asn": {},
  "amazonSideAsn": {},
  "authKey": {},
  "amazonAddress": {},
  "customerAddress": {},
  "addressFamily": {},
  "virtualInterfaceState": {},
  "customerRouterConfig": {},
  "mtu": {},
  "jumboFrameCapable": {},
  "virtualGatewayId": {},
  "directConnectGatewayId": {},
  "routeFilterPrefixes": {},
  "bgpPeers": {},
  "region": {},
  "awsDeviceV2": {},
  "awsLogicalDeviceId": {},
  "tags": {},
  "siteLinkEnabled": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="createprivatevirtualinterface-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[VirtualInterface](#schemavirtualinterface)|
|480|480|DuplicateTagKeysException|[DuplicateTagKeysException](#schemaduplicatetagkeysexception)|
|481|481|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|482|482|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|483|483|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreatePublicVirtualInterface

<a id="opIdCreatePublicVirtualInterface"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.CreatePublicVirtualInterface' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.CreatePublicVirtualInterface' \
  -d '{
    "connectionId": {},
    "newPublicVirtualInterface": {
      "virtualInterfaceName": {},
      "vlan": {},
      "asn": {},
      "authKey": {},
      "amazonAddress": {},
      "customerAddress": {},
      "addressFamily": {},
      "routeFilterPrefixes": {},
      "tags": {}
    }
  }'
```

`POST /#X-Amz-Target=OvertureService.CreatePublicVirtualInterface`

<p>Creates a public virtual interface. A virtual interface is the VLAN that transports Direct Connect traffic. A public virtual interface supports sending traffic to public services of Amazon Web Services such as Amazon S3.</p> <p>When creating an IPv6 public virtual interface (<code>addressFamily</code> is <code>ipv6</code>), leave the <code>customer</code> and <code>amazon</code> address fields blank to use auto-assigned IPv6 space. Custom IPv6 addresses are not supported.</p>

> Body parameter

```json
{
  "connectionId": {},
  "newPublicVirtualInterface": {
    "virtualInterfaceName": {},
    "vlan": {},
    "asn": {},
    "authKey": {},
    "amazonAddress": {},
    "customerAddress": {},
    "addressFamily": {},
    "routeFilterPrefixes": {},
    "tags": {}
  }
}
```

<h3 id="createpublicvirtualinterface-parameters">Parameters</h3>

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
|body|body|[CreatePublicVirtualInterfaceRequest](#schemacreatepublicvirtualinterfacerequest)|true|none|
|» connectionId|body|object|true|none|
|» newPublicVirtualInterface|body|object|true|none|
|» » virtualInterfaceName|body|object|true|none|
|» » vlan|body|object|true|none|
|» » asn|body|object|true|none|
|» » authKey|body|object|false|none|
|» » amazonAddress|body|object|false|none|
|» » customerAddress|body|object|false|none|
|» » addressFamily|body|object|false|none|
|» » routeFilterPrefixes|body|object|false|none|
|» » tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.CreatePublicVirtualInterface|

> Example responses

> 200 Response

```json
{
  "ownerAccount": {},
  "virtualInterfaceId": {},
  "location": {},
  "connectionId": {},
  "virtualInterfaceType": {},
  "virtualInterfaceName": {},
  "vlan": {},
  "asn": {},
  "amazonSideAsn": {},
  "authKey": {},
  "amazonAddress": {},
  "customerAddress": {},
  "addressFamily": {},
  "virtualInterfaceState": {},
  "customerRouterConfig": {},
  "mtu": {},
  "jumboFrameCapable": {},
  "virtualGatewayId": {},
  "directConnectGatewayId": {},
  "routeFilterPrefixes": {},
  "bgpPeers": {},
  "region": {},
  "awsDeviceV2": {},
  "awsLogicalDeviceId": {},
  "tags": {},
  "siteLinkEnabled": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="createpublicvirtualinterface-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[VirtualInterface](#schemavirtualinterface)|
|480|480|DuplicateTagKeysException|[DuplicateTagKeysException](#schemaduplicatetagkeysexception)|
|481|481|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|482|482|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|483|483|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateTransitVirtualInterface

<a id="opIdCreateTransitVirtualInterface"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.CreateTransitVirtualInterface' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.CreateTransitVirtualInterface' \
  -d '{
    "connectionId": {},
    "newTransitVirtualInterface": {
      "virtualInterfaceName": {},
      "vlan": {},
      "asn": {},
      "mtu": {},
      "authKey": {},
      "amazonAddress": {},
      "customerAddress": {},
      "addressFamily": {},
      "directConnectGatewayId": {},
      "tags": {},
      "enableSiteLink": {}
    }
  }'
```

`POST /#X-Amz-Target=OvertureService.CreateTransitVirtualInterface`

<p>Creates a transit virtual interface. A transit virtual interface should be used to access one or more transit gateways associated with Direct Connect gateways. A transit virtual interface enables the connection of multiple VPCs attached to a transit gateway to a Direct Connect gateway.</p> <important> <p>If you associate your transit gateway with one or more Direct Connect gateways, the Autonomous System Number (ASN) used by the transit gateway and the Direct Connect gateway must be different. For example, if you use the default ASN 64512 for both your the transit gateway and Direct Connect gateway, the association request fails.</p> </important> <p>A jumbo MTU value must be either 1500 or 8500. No other values will be accepted. Setting the MTU of a virtual interface to 8500 (jumbo frames) can cause an update to the underlying physical connection if it wasn't updated to support jumbo frames. Updating the connection disrupts network connectivity for all virtual interfaces associated with the connection for up to 30 seconds. To check whether your connection supports jumbo frames, call <a>DescribeConnections</a>. To check whether your virtual interface supports jumbo frames, call <a>DescribeVirtualInterfaces</a>.</p>

> Body parameter

```json
{
  "connectionId": {},
  "newTransitVirtualInterface": {
    "virtualInterfaceName": {},
    "vlan": {},
    "asn": {},
    "mtu": {},
    "authKey": {},
    "amazonAddress": {},
    "customerAddress": {},
    "addressFamily": {},
    "directConnectGatewayId": {},
    "tags": {},
    "enableSiteLink": {}
  }
}
```

<h3 id="createtransitvirtualinterface-parameters">Parameters</h3>

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
|body|body|[CreateTransitVirtualInterfaceRequest](#schemacreatetransitvirtualinterfacerequest)|true|none|
|» connectionId|body|object|true|none|
|» newTransitVirtualInterface|body|object|true|none|
|» » virtualInterfaceName|body|object|false|none|
|» » vlan|body|object|false|none|
|» » asn|body|object|false|none|
|» » mtu|body|object|false|none|
|» » authKey|body|object|false|none|
|» » amazonAddress|body|object|false|none|
|» » customerAddress|body|object|false|none|
|» » addressFamily|body|object|false|none|
|» » directConnectGatewayId|body|object|false|none|
|» » tags|body|object|false|none|
|» » enableSiteLink|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.CreateTransitVirtualInterface|

> Example responses

> 200 Response

```json
{
  "virtualInterface": {
    "ownerAccount": {},
    "virtualInterfaceId": {},
    "location": {},
    "connectionId": {},
    "virtualInterfaceType": {},
    "virtualInterfaceName": {},
    "vlan": {},
    "asn": {},
    "amazonSideAsn": {},
    "authKey": {},
    "amazonAddress": {},
    "customerAddress": {},
    "addressFamily": {},
    "virtualInterfaceState": {},
    "customerRouterConfig": {},
    "mtu": {},
    "jumboFrameCapable": {},
    "virtualGatewayId": {},
    "directConnectGatewayId": {},
    "routeFilterPrefixes": {},
    "bgpPeers": {},
    "region": {},
    "awsDeviceV2": {},
    "awsLogicalDeviceId": {},
    "tags": {},
    "siteLinkEnabled": {}
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

<h3 id="createtransitvirtualinterface-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateTransitVirtualInterfaceResult](#schemacreatetransitvirtualinterfaceresult)|
|480|480|DuplicateTagKeysException|[DuplicateTagKeysException](#schemaduplicatetagkeysexception)|
|481|481|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|482|482|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|483|483|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBGPPeer

<a id="opIdDeleteBGPPeer"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.DeleteBGPPeer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.DeleteBGPPeer' \
  -d '{
    "virtualInterfaceId": {},
    "asn": {},
    "customerAddress": {},
    "bgpPeerId": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.DeleteBGPPeer`

<p>Deletes the specified BGP peer on the specified virtual interface with the specified customer address and ASN.</p> <p>You cannot delete the last BGP peer from a virtual interface.</p>

> Body parameter

```json
{
  "virtualInterfaceId": {},
  "asn": {},
  "customerAddress": {},
  "bgpPeerId": {}
}
```

<h3 id="deletebgppeer-parameters">Parameters</h3>

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
|body|body|[DeleteBGPPeerRequest](#schemadeletebgppeerrequest)|true|none|
|» virtualInterfaceId|body|object|false|none|
|» asn|body|object|false|none|
|» customerAddress|body|object|false|none|
|» bgpPeerId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.DeleteBGPPeer|

> Example responses

> 200 Response

```json
{
  "virtualInterface": {
    "ownerAccount": {},
    "virtualInterfaceId": {},
    "location": {},
    "connectionId": {},
    "virtualInterfaceType": {},
    "virtualInterfaceName": {},
    "vlan": {},
    "asn": {},
    "amazonSideAsn": {},
    "authKey": {},
    "amazonAddress": {},
    "customerAddress": {},
    "addressFamily": {},
    "virtualInterfaceState": {},
    "customerRouterConfig": {},
    "mtu": {},
    "jumboFrameCapable": {},
    "virtualGatewayId": {},
    "directConnectGatewayId": {},
    "routeFilterPrefixes": {},
    "bgpPeers": {},
    "region": {},
    "awsDeviceV2": {},
    "awsLogicalDeviceId": {},
    "tags": {},
    "siteLinkEnabled": {}
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

<h3 id="deletebgppeer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteBGPPeerResponse](#schemadeletebgppeerresponse)|
|480|480|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|481|481|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteConnection

<a id="opIdDeleteConnection"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.DeleteConnection' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.DeleteConnection' \
  -d '{
    "connectionId": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.DeleteConnection`

<p>Deletes the specified connection.</p> <p>Deleting a connection only stops the Direct Connect port hour and data transfer charges. If you are partnering with any third parties to connect with the Direct Connect location, you must cancel your service with them separately.</p>

> Body parameter

```json
{
  "connectionId": {}
}
```

<h3 id="deleteconnection-parameters">Parameters</h3>

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
|body|body|[DeleteConnectionRequest](#schemadeleteconnectionrequest)|true|none|
|» connectionId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.DeleteConnection|

> Example responses

> 200 Response

```json
{
  "ownerAccount": {},
  "connectionId": {},
  "connectionName": {},
  "connectionState": {},
  "region": {},
  "location": {},
  "bandwidth": {},
  "vlan": {},
  "partnerName": {},
  "loaIssueTime": {},
  "lagId": {},
  "awsDevice": {},
  "jumboFrameCapable": {},
  "awsDeviceV2": {},
  "awsLogicalDeviceId": {},
  "hasLogicalRedundancy": {},
  "tags": {},
  "providerName": {},
  "macSecCapable": {},
  "portEncryptionStatus": {},
  "encryptionMode": {},
  "macSecKeys": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="deleteconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Connection](#schemaconnection)|
|480|480|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|481|481|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDirectConnectGateway

<a id="opIdDeleteDirectConnectGateway"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.DeleteDirectConnectGateway' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.DeleteDirectConnectGateway' \
  -d '{
    "directConnectGatewayId": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.DeleteDirectConnectGateway`

Deletes the specified Direct Connect gateway. You must first delete all virtual interfaces that are attached to the Direct Connect gateway and disassociate all virtual private gateways associated with the Direct Connect gateway.

> Body parameter

```json
{
  "directConnectGatewayId": {}
}
```

<h3 id="deletedirectconnectgateway-parameters">Parameters</h3>

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
|body|body|[DeleteDirectConnectGatewayRequest](#schemadeletedirectconnectgatewayrequest)|true|none|
|» directConnectGatewayId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.DeleteDirectConnectGateway|

> Example responses

> 200 Response

```json
{
  "directConnectGateway": {
    "directConnectGatewayId": {},
    "directConnectGatewayName": {},
    "amazonSideAsn": {},
    "ownerAccount": {},
    "directConnectGatewayState": {},
    "stateChangeError": {}
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

<h3 id="deletedirectconnectgateway-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteDirectConnectGatewayResult](#schemadeletedirectconnectgatewayresult)|
|480|480|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|481|481|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDirectConnectGatewayAssociation

<a id="opIdDeleteDirectConnectGatewayAssociation"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.DeleteDirectConnectGatewayAssociation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.DeleteDirectConnectGatewayAssociation' \
  -d '{
    "associationId": {},
    "directConnectGatewayId": {},
    "virtualGatewayId": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.DeleteDirectConnectGatewayAssociation`

<p>Deletes the association between the specified Direct Connect gateway and virtual private gateway.</p> <p>We recommend that you specify the <code>associationID</code> to delete the association. Alternatively, if you own virtual gateway and a Direct Connect gateway association, you can specify the <code>virtualGatewayId</code> and <code>directConnectGatewayId</code> to delete an association.</p>

> Body parameter

```json
{
  "associationId": {},
  "directConnectGatewayId": {},
  "virtualGatewayId": {}
}
```

<h3 id="deletedirectconnectgatewayassociation-parameters">Parameters</h3>

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
|body|body|[DeleteDirectConnectGatewayAssociationRequest](#schemadeletedirectconnectgatewayassociationrequest)|true|none|
|» associationId|body|object|false|none|
|» directConnectGatewayId|body|object|false|none|
|» virtualGatewayId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.DeleteDirectConnectGatewayAssociation|

> Example responses

> 200 Response

```json
{
  "directConnectGatewayAssociation": {
    "directConnectGatewayId": {},
    "directConnectGatewayOwnerAccount": {},
    "associationState": {},
    "stateChangeError": {},
    "associatedGateway": {
      "id": {},
      "type": {},
      "ownerAccount": {},
      "region": {}
    },
    "associationId": {},
    "allowedPrefixesToDirectConnectGateway": {},
    "virtualGatewayId": {},
    "virtualGatewayRegion": {},
    "virtualGatewayOwnerAccount": {}
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

<h3 id="deletedirectconnectgatewayassociation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteDirectConnectGatewayAssociationResult](#schemadeletedirectconnectgatewayassociationresult)|
|480|480|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|481|481|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDirectConnectGatewayAssociationProposal

<a id="opIdDeleteDirectConnectGatewayAssociationProposal"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.DeleteDirectConnectGatewayAssociationProposal' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.DeleteDirectConnectGatewayAssociationProposal' \
  -d '{
    "proposalId": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.DeleteDirectConnectGatewayAssociationProposal`

Deletes the association proposal request between the specified Direct Connect gateway and virtual private gateway or transit gateway.

> Body parameter

```json
{
  "proposalId": {}
}
```

<h3 id="deletedirectconnectgatewayassociationproposal-parameters">Parameters</h3>

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
|body|body|[DeleteDirectConnectGatewayAssociationProposalRequest](#schemadeletedirectconnectgatewayassociationproposalrequest)|true|none|
|» proposalId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.DeleteDirectConnectGatewayAssociationProposal|

> Example responses

> 200 Response

```json
{
  "directConnectGatewayAssociationProposal": {
    "proposalId": {},
    "directConnectGatewayId": {},
    "directConnectGatewayOwnerAccount": {},
    "proposalState": {},
    "associatedGateway": {
      "id": {},
      "type": {},
      "ownerAccount": {},
      "region": {}
    },
    "existingAllowedPrefixesToDirectConnectGateway": {},
    "requestedAllowedPrefixesToDirectConnectGateway": {}
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

<h3 id="deletedirectconnectgatewayassociationproposal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteDirectConnectGatewayAssociationProposalResult](#schemadeletedirectconnectgatewayassociationproposalresult)|
|480|480|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|481|481|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteInterconnect

<a id="opIdDeleteInterconnect"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.DeleteInterconnect' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.DeleteInterconnect' \
  -d '{
    "interconnectId": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.DeleteInterconnect`

<p>Deletes the specified interconnect.</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note>

> Body parameter

```json
{
  "interconnectId": {}
}
```

<h3 id="deleteinterconnect-parameters">Parameters</h3>

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
|body|body|[DeleteInterconnectRequest](#schemadeleteinterconnectrequest)|true|none|
|» interconnectId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.DeleteInterconnect|

> Example responses

> 200 Response

```json
{
  "interconnectState": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="deleteinterconnect-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteInterconnectResponse](#schemadeleteinterconnectresponse)|
|480|480|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|481|481|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteLag

<a id="opIdDeleteLag"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.DeleteLag' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.DeleteLag' \
  -d '{
    "lagId": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.DeleteLag`

Deletes the specified link aggregation group (LAG). You cannot delete a LAG if it has active virtual interfaces or hosted connections.

> Body parameter

```json
{
  "lagId": {}
}
```

<h3 id="deletelag-parameters">Parameters</h3>

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
|body|body|[DeleteLagRequest](#schemadeletelagrequest)|true|none|
|» lagId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.DeleteLag|

> Example responses

> 200 Response

```json
{
  "connectionsBandwidth": {},
  "numberOfConnections": {},
  "lagId": {},
  "ownerAccount": {},
  "lagName": {},
  "lagState": {},
  "location": {},
  "region": {},
  "minimumLinks": {},
  "awsDevice": {},
  "awsDeviceV2": {},
  "awsLogicalDeviceId": {},
  "connections": {},
  "allowsHostedConnections": {},
  "jumboFrameCapable": {},
  "hasLogicalRedundancy": {},
  "tags": {},
  "providerName": {},
  "macSecCapable": {},
  "encryptionMode": {},
  "macSecKeys": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="deletelag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Lag](#schemalag)|
|480|480|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|481|481|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteVirtualInterface

<a id="opIdDeleteVirtualInterface"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.DeleteVirtualInterface' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.DeleteVirtualInterface' \
  -d '{
    "virtualInterfaceId": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.DeleteVirtualInterface`

Deletes a virtual interface.

> Body parameter

```json
{
  "virtualInterfaceId": {}
}
```

<h3 id="deletevirtualinterface-parameters">Parameters</h3>

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
|body|body|[DeleteVirtualInterfaceRequest](#schemadeletevirtualinterfacerequest)|true|none|
|» virtualInterfaceId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.DeleteVirtualInterface|

> Example responses

> 200 Response

```json
{
  "virtualInterfaceState": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="deletevirtualinterface-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteVirtualInterfaceResponse](#schemadeletevirtualinterfaceresponse)|
|480|480|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|481|481|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeConnectionLoa

<a id="opIdDescribeConnectionLoa"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.DescribeConnectionLoa' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.DescribeConnectionLoa' \
  -d '{
    "connectionId": {},
    "providerName": {},
    "loaContentType": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.DescribeConnectionLoa`

<aside class="warning">
This operation is deprecated
</aside>

<p>Deprecated. Use <a>DescribeLoa</a> instead.</p> <p>Gets the LOA-CFA for a connection.</p> <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that your APN partner or service provider uses when establishing your cross connect to Amazon Web Services at the colocation facility. For more information, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html">Requesting Cross Connects at Direct Connect Locations</a> in the <i>Direct Connect User Guide</i>.</p>

> Body parameter

```json
{
  "connectionId": {},
  "providerName": {},
  "loaContentType": {}
}
```

<h3 id="describeconnectionloa-parameters">Parameters</h3>

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
|body|body|[DescribeConnectionLoaRequest](#schemadescribeconnectionloarequest)|true|none|
|» connectionId|body|object|true|none|
|» providerName|body|object|false|none|
|» loaContentType|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.DescribeConnectionLoa|

> Example responses

> 200 Response

```json
{
  "loa": {
    "loaContent": {},
    "loaContentType": {}
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

<h3 id="describeconnectionloa-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeConnectionLoaResponse](#schemadescribeconnectionloaresponse)|
|480|480|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|481|481|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeConnections

<a id="opIdDescribeConnections"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.DescribeConnections' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.DescribeConnections' \
  -d '{
    "connectionId": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.DescribeConnections`

Displays the specified connection or all connections in this Region.

> Body parameter

```json
{
  "connectionId": {}
}
```

<h3 id="describeconnections-parameters">Parameters</h3>

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
|body|body|[DescribeConnectionsRequest](#schemadescribeconnectionsrequest)|true|none|
|» connectionId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.DescribeConnections|

> Example responses

> 200 Response

```json
{
  "connections": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="describeconnections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Connections](#schemaconnections)|
|480|480|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|481|481|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeConnectionsOnInterconnect

<a id="opIdDescribeConnectionsOnInterconnect"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.DescribeConnectionsOnInterconnect' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.DescribeConnectionsOnInterconnect' \
  -d '{
    "interconnectId": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.DescribeConnectionsOnInterconnect`

<aside class="warning">
This operation is deprecated
</aside>

<p>Deprecated. Use <a>DescribeHostedConnections</a> instead.</p> <p>Lists the connections that have been provisioned on the specified interconnect.</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note>

> Body parameter

```json
{
  "interconnectId": {}
}
```

<h3 id="describeconnectionsoninterconnect-parameters">Parameters</h3>

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
|body|body|[DescribeConnectionsOnInterconnectRequest](#schemadescribeconnectionsoninterconnectrequest)|true|none|
|» interconnectId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.DescribeConnectionsOnInterconnect|

> Example responses

> 200 Response

```json
{
  "connections": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="describeconnectionsoninterconnect-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Connections](#schemaconnections)|
|480|480|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|481|481|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeCustomerMetadata

<a id="opIdDescribeCustomerMetadata"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.DescribeCustomerMetadata' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.DescribeCustomerMetadata'
```

`POST /#X-Amz-Target=OvertureService.DescribeCustomerMetadata`

Get and view a list of customer agreements, along with their signed status and whether the customer is an NNIPartner, NNIPartnerV2, or a nonPartner. 

<h3 id="describecustomermetadata-parameters">Parameters</h3>

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

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.DescribeCustomerMetadata|

> Example responses

> 200 Response

```json
{
  "agreements": {},
  "nniPartnerType": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="describecustomermetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeCustomerMetadataResponse](#schemadescribecustomermetadataresponse)|
|480|480|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|481|481|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDirectConnectGatewayAssociationProposals

<a id="opIdDescribeDirectConnectGatewayAssociationProposals"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAssociationProposals' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.DescribeDirectConnectGatewayAssociationProposals' \
  -d '{
    "directConnectGatewayId": {},
    "proposalId": {},
    "associatedGatewayId": {},
    "maxResults": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAssociationProposals`

Describes one or more association proposals for connection between a virtual private gateway or transit gateway and a Direct Connect gateway. 

> Body parameter

```json
{
  "directConnectGatewayId": {},
  "proposalId": {},
  "associatedGatewayId": {},
  "maxResults": {},
  "nextToken": {}
}
```

<h3 id="describedirectconnectgatewayassociationproposals-parameters">Parameters</h3>

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
|body|body|[DescribeDirectConnectGatewayAssociationProposalsRequest](#schemadescribedirectconnectgatewayassociationproposalsrequest)|true|none|
|» directConnectGatewayId|body|object|false|none|
|» proposalId|body|object|false|none|
|» associatedGatewayId|body|object|false|none|
|» maxResults|body|object|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.DescribeDirectConnectGatewayAssociationProposals|

> Example responses

> 200 Response

```json
{
  "directConnectGatewayAssociationProposals": {},
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

<h3 id="describedirectconnectgatewayassociationproposals-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDirectConnectGatewayAssociationProposalsResult](#schemadescribedirectconnectgatewayassociationproposalsresult)|
|480|480|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|481|481|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDirectConnectGatewayAssociations

<a id="opIdDescribeDirectConnectGatewayAssociations"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAssociations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.DescribeDirectConnectGatewayAssociations' \
  -d '{
    "associationId": {},
    "associatedGatewayId": {},
    "directConnectGatewayId": {},
    "maxResults": {},
    "nextToken": {},
    "virtualGatewayId": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAssociations`

<p>Lists the associations between your Direct Connect gateways and virtual private gateways and transit gateways. You must specify one of the following:</p> <ul> <li> <p>A Direct Connect gateway</p> <p>The response contains all virtual private gateways and transit gateways associated with the Direct Connect gateway.</p> </li> <li> <p>A virtual private gateway</p> <p>The response contains the Direct Connect gateway.</p> </li> <li> <p>A transit gateway</p> <p>The response contains the Direct Connect gateway.</p> </li> <li> <p>A Direct Connect gateway and a virtual private gateway</p> <p>The response contains the association between the Direct Connect gateway and virtual private gateway.</p> </li> <li> <p>A Direct Connect gateway and a transit gateway</p> <p>The response contains the association between the Direct Connect gateway and transit gateway.</p> </li> </ul>

> Body parameter

```json
{
  "associationId": {},
  "associatedGatewayId": {},
  "directConnectGatewayId": {},
  "maxResults": {},
  "nextToken": {},
  "virtualGatewayId": {}
}
```

<h3 id="describedirectconnectgatewayassociations-parameters">Parameters</h3>

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
|body|body|[DescribeDirectConnectGatewayAssociationsRequest](#schemadescribedirectconnectgatewayassociationsrequest)|true|none|
|» associationId|body|object|false|none|
|» associatedGatewayId|body|object|false|none|
|» directConnectGatewayId|body|object|false|none|
|» maxResults|body|object|false|none|
|» nextToken|body|object|false|none|
|» virtualGatewayId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.DescribeDirectConnectGatewayAssociations|

> Example responses

> 200 Response

```json
{
  "directConnectGatewayAssociations": {},
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

<h3 id="describedirectconnectgatewayassociations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDirectConnectGatewayAssociationsResult](#schemadescribedirectconnectgatewayassociationsresult)|
|480|480|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|481|481|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDirectConnectGatewayAttachments

<a id="opIdDescribeDirectConnectGatewayAttachments"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAttachments' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.DescribeDirectConnectGatewayAttachments' \
  -d '{
    "directConnectGatewayId": {},
    "virtualInterfaceId": {},
    "maxResults": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAttachments`

Lists the attachments between your Direct Connect gateways and virtual interfaces. You must specify a Direct Connect gateway, a virtual interface, or both. If you specify a Direct Connect gateway, the response contains all virtual interfaces attached to the Direct Connect gateway. If you specify a virtual interface, the response contains all Direct Connect gateways attached to the virtual interface. If you specify both, the response contains the attachment between the Direct Connect gateway and the virtual interface.

> Body parameter

```json
{
  "directConnectGatewayId": {},
  "virtualInterfaceId": {},
  "maxResults": {},
  "nextToken": {}
}
```

<h3 id="describedirectconnectgatewayattachments-parameters">Parameters</h3>

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
|body|body|[DescribeDirectConnectGatewayAttachmentsRequest](#schemadescribedirectconnectgatewayattachmentsrequest)|true|none|
|» directConnectGatewayId|body|object|false|none|
|» virtualInterfaceId|body|object|false|none|
|» maxResults|body|object|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.DescribeDirectConnectGatewayAttachments|

> Example responses

> 200 Response

```json
{
  "directConnectGatewayAttachments": {},
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

<h3 id="describedirectconnectgatewayattachments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDirectConnectGatewayAttachmentsResult](#schemadescribedirectconnectgatewayattachmentsresult)|
|480|480|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|481|481|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDirectConnectGateways

<a id="opIdDescribeDirectConnectGateways"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.DescribeDirectConnectGateways' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.DescribeDirectConnectGateways' \
  -d '{
    "directConnectGatewayId": {},
    "maxResults": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.DescribeDirectConnectGateways`

Lists all your Direct Connect gateways or only the specified Direct Connect gateway. Deleted Direct Connect gateways are not returned.

> Body parameter

```json
{
  "directConnectGatewayId": {},
  "maxResults": {},
  "nextToken": {}
}
```

<h3 id="describedirectconnectgateways-parameters">Parameters</h3>

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
|body|body|[DescribeDirectConnectGatewaysRequest](#schemadescribedirectconnectgatewaysrequest)|true|none|
|» directConnectGatewayId|body|object|false|none|
|» maxResults|body|object|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.DescribeDirectConnectGateways|

> Example responses

> 200 Response

```json
{
  "directConnectGateways": {},
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

<h3 id="describedirectconnectgateways-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDirectConnectGatewaysResult](#schemadescribedirectconnectgatewaysresult)|
|480|480|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|481|481|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeHostedConnections

<a id="opIdDescribeHostedConnections"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.DescribeHostedConnections' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.DescribeHostedConnections' \
  -d '{
    "connectionId": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.DescribeHostedConnections`

<p>Lists the hosted connections that have been provisioned on the specified interconnect or link aggregation group (LAG).</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note>

> Body parameter

```json
{
  "connectionId": {}
}
```

<h3 id="describehostedconnections-parameters">Parameters</h3>

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
|body|body|[DescribeHostedConnectionsRequest](#schemadescribehostedconnectionsrequest)|true|none|
|» connectionId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.DescribeHostedConnections|

> Example responses

> 200 Response

```json
{
  "connections": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="describehostedconnections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Connections](#schemaconnections)|
|480|480|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|481|481|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeInterconnectLoa

<a id="opIdDescribeInterconnectLoa"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.DescribeInterconnectLoa' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.DescribeInterconnectLoa' \
  -d '{
    "interconnectId": {},
    "providerName": {},
    "loaContentType": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.DescribeInterconnectLoa`

<aside class="warning">
This operation is deprecated
</aside>

<p>Deprecated. Use <a>DescribeLoa</a> instead.</p> <p>Gets the LOA-CFA for the specified interconnect.</p> <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing your cross connect to Amazon Web Services at the colocation facility. For more information, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html">Requesting Cross Connects at Direct Connect Locations</a> in the <i>Direct Connect User Guide</i>.</p>

> Body parameter

```json
{
  "interconnectId": {},
  "providerName": {},
  "loaContentType": {}
}
```

<h3 id="describeinterconnectloa-parameters">Parameters</h3>

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
|body|body|[DescribeInterconnectLoaRequest](#schemadescribeinterconnectloarequest)|true|none|
|» interconnectId|body|object|true|none|
|» providerName|body|object|false|none|
|» loaContentType|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.DescribeInterconnectLoa|

> Example responses

> 200 Response

```json
{
  "loa": {
    "loaContent": {},
    "loaContentType": {}
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

<h3 id="describeinterconnectloa-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeInterconnectLoaResponse](#schemadescribeinterconnectloaresponse)|
|480|480|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|481|481|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeInterconnects

<a id="opIdDescribeInterconnects"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.DescribeInterconnects' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.DescribeInterconnects' \
  -d '{
    "interconnectId": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.DescribeInterconnects`

Lists the interconnects owned by the Amazon Web Services account or only the specified interconnect.

> Body parameter

```json
{
  "interconnectId": {}
}
```

<h3 id="describeinterconnects-parameters">Parameters</h3>

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
|body|body|[DescribeInterconnectsRequest](#schemadescribeinterconnectsrequest)|true|none|
|» interconnectId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.DescribeInterconnects|

> Example responses

> 200 Response

```json
{
  "interconnects": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="describeinterconnects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Interconnects](#schemainterconnects)|
|480|480|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|481|481|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeLags

<a id="opIdDescribeLags"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.DescribeLags' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.DescribeLags' \
  -d '{
    "lagId": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.DescribeLags`

Describes all your link aggregation groups (LAG) or the specified LAG.

> Body parameter

```json
{
  "lagId": {}
}
```

<h3 id="describelags-parameters">Parameters</h3>

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
|body|body|[DescribeLagsRequest](#schemadescribelagsrequest)|true|none|
|» lagId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.DescribeLags|

> Example responses

> 200 Response

```json
{
  "lags": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="describelags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Lags](#schemalags)|
|480|480|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|481|481|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeLoa

<a id="opIdDescribeLoa"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.DescribeLoa' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.DescribeLoa' \
  -d '{
    "connectionId": {},
    "providerName": {},
    "loaContentType": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.DescribeLoa`

<p>Gets the LOA-CFA for a connection, interconnect, or link aggregation group (LAG).</p> <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing your cross connect to Amazon Web Services at the colocation facility. For more information, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html">Requesting Cross Connects at Direct Connect Locations</a> in the <i>Direct Connect User Guide</i>.</p>

> Body parameter

```json
{
  "connectionId": {},
  "providerName": {},
  "loaContentType": {}
}
```

<h3 id="describeloa-parameters">Parameters</h3>

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
|body|body|[DescribeLoaRequest](#schemadescribeloarequest)|true|none|
|» connectionId|body|object|true|none|
|» providerName|body|object|false|none|
|» loaContentType|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.DescribeLoa|

> Example responses

> 200 Response

```json
{
  "loaContent": {},
  "loaContentType": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="describeloa-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Loa](#schemaloa)|
|480|480|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|481|481|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeLocations

<a id="opIdDescribeLocations"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.DescribeLocations' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.DescribeLocations'
```

`POST /#X-Amz-Target=OvertureService.DescribeLocations`

Lists the Direct Connect locations in the current Amazon Web Services Region. These are the locations that can be selected when calling <a>CreateConnection</a> or <a>CreateInterconnect</a>.

<h3 id="describelocations-parameters">Parameters</h3>

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

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.DescribeLocations|

> Example responses

> 200 Response

```json
{
  "locations": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="describelocations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Locations](#schemalocations)|
|480|480|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|481|481|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeRouterConfiguration

<a id="opIdDescribeRouterConfiguration"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.DescribeRouterConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.DescribeRouterConfiguration' \
  -d '{
    "virtualInterfaceId": {},
    "routerTypeIdentifier": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.DescribeRouterConfiguration`

 Details about the router. 

> Body parameter

```json
{
  "virtualInterfaceId": {},
  "routerTypeIdentifier": {}
}
```

<h3 id="describerouterconfiguration-parameters">Parameters</h3>

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
|body|body|[DescribeRouterConfigurationRequest](#schemadescriberouterconfigurationrequest)|true|none|
|» virtualInterfaceId|body|object|true|none|
|» routerTypeIdentifier|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.DescribeRouterConfiguration|

> Example responses

> 200 Response

```json
{
  "customerRouterConfig": {},
  "router": {
    "vendor": {},
    "platform": {},
    "software": {},
    "xsltTemplateName": {},
    "xsltTemplateNameForMacSec": {},
    "routerTypeIdentifier": {}
  },
  "virtualInterfaceId": {},
  "virtualInterfaceName": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="describerouterconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeRouterConfigurationResponse](#schemadescriberouterconfigurationresponse)|
|480|480|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|481|481|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeTags

<a id="opIdDescribeTags"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.DescribeTags' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.DescribeTags' \
  -d '{
    "resourceArns": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.DescribeTags`

Describes the tags associated with the specified Direct Connect resources.

> Body parameter

```json
{
  "resourceArns": {}
}
```

<h3 id="describetags-parameters">Parameters</h3>

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
|body|body|[DescribeTagsRequest](#schemadescribetagsrequest)|true|none|
|» resourceArns|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.DescribeTags|

> Example responses

> 200 Response

```json
{
  "resourceTags": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="describetags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTagsResponse](#schemadescribetagsresponse)|
|480|480|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|481|481|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeVirtualGateways

<a id="opIdDescribeVirtualGateways"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.DescribeVirtualGateways' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.DescribeVirtualGateways'
```

`POST /#X-Amz-Target=OvertureService.DescribeVirtualGateways`

<p>Lists the virtual private gateways owned by the Amazon Web Services account.</p> <p>You can create one or more Direct Connect private virtual interfaces linked to a virtual private gateway.</p>

<h3 id="describevirtualgateways-parameters">Parameters</h3>

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

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.DescribeVirtualGateways|

> Example responses

> 200 Response

```json
{
  "virtualGateways": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="describevirtualgateways-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[VirtualGateways](#schemavirtualgateways)|
|480|480|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|481|481|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeVirtualInterfaces

<a id="opIdDescribeVirtualInterfaces"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.DescribeVirtualInterfaces' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.DescribeVirtualInterfaces' \
  -d '{
    "connectionId": {},
    "virtualInterfaceId": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.DescribeVirtualInterfaces`

<p>Displays all virtual interfaces for an Amazon Web Services account. Virtual interfaces deleted fewer than 15 minutes before you make the request are also returned. If you specify a connection ID, only the virtual interfaces associated with the connection are returned. If you specify a virtual interface ID, then only a single virtual interface is returned.</p> <p>A virtual interface (VLAN) transmits the traffic between the Direct Connect location and the customer network.</p>

> Body parameter

```json
{
  "connectionId": {},
  "virtualInterfaceId": {}
}
```

<h3 id="describevirtualinterfaces-parameters">Parameters</h3>

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
|body|body|[DescribeVirtualInterfacesRequest](#schemadescribevirtualinterfacesrequest)|true|none|
|» connectionId|body|object|false|none|
|» virtualInterfaceId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.DescribeVirtualInterfaces|

> Example responses

> 200 Response

```json
{
  "virtualInterfaces": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="describevirtualinterfaces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[VirtualInterfaces](#schemavirtualinterfaces)|
|480|480|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|481|481|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateConnectionFromLag

<a id="opIdDisassociateConnectionFromLag"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.DisassociateConnectionFromLag' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.DisassociateConnectionFromLag' \
  -d '{
    "connectionId": {},
    "lagId": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.DisassociateConnectionFromLag`

<p>Disassociates a connection from a link aggregation group (LAG). The connection is interrupted and re-established as a standalone connection (the connection is not deleted; to delete the connection, use the <a>DeleteConnection</a> request). If the LAG has associated virtual interfaces or hosted connections, they remain associated with the LAG. A disassociated connection owned by an Direct Connect Partner is automatically converted to an interconnect.</p> <p>If disassociating the connection would cause the LAG to fall below its setting for minimum number of operational connections, the request fails, except when it's the last member of the LAG. If all connections are disassociated, the LAG continues to exist as an empty LAG with no physical connections. </p>

> Body parameter

```json
{
  "connectionId": {},
  "lagId": {}
}
```

<h3 id="disassociateconnectionfromlag-parameters">Parameters</h3>

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
|body|body|[DisassociateConnectionFromLagRequest](#schemadisassociateconnectionfromlagrequest)|true|none|
|» connectionId|body|object|true|none|
|» lagId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.DisassociateConnectionFromLag|

> Example responses

> 200 Response

```json
{
  "ownerAccount": {},
  "connectionId": {},
  "connectionName": {},
  "connectionState": {},
  "region": {},
  "location": {},
  "bandwidth": {},
  "vlan": {},
  "partnerName": {},
  "loaIssueTime": {},
  "lagId": {},
  "awsDevice": {},
  "jumboFrameCapable": {},
  "awsDeviceV2": {},
  "awsLogicalDeviceId": {},
  "hasLogicalRedundancy": {},
  "tags": {},
  "providerName": {},
  "macSecCapable": {},
  "portEncryptionStatus": {},
  "encryptionMode": {},
  "macSecKeys": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="disassociateconnectionfromlag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Connection](#schemaconnection)|
|480|480|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|481|481|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateMacSecKey

<a id="opIdDisassociateMacSecKey"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.DisassociateMacSecKey' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.DisassociateMacSecKey' \
  -d '{
    "connectionId": {},
    "secretARN": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.DisassociateMacSecKey`

Removes the association between a MAC Security (MACsec) security key and an Direct Connect dedicated connection.

> Body parameter

```json
{
  "connectionId": {},
  "secretARN": {}
}
```

<h3 id="disassociatemacseckey-parameters">Parameters</h3>

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
|body|body|[DisassociateMacSecKeyRequest](#schemadisassociatemacseckeyrequest)|true|none|
|» connectionId|body|object|true|none|
|» secretARN|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.DisassociateMacSecKey|

> Example responses

> 200 Response

```json
{
  "connectionId": {},
  "macSecKeys": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="disassociatemacseckey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateMacSecKeyResponse](#schemadisassociatemacseckeyresponse)|
|480|480|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|481|481|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListVirtualInterfaceTestHistory

<a id="opIdListVirtualInterfaceTestHistory"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.ListVirtualInterfaceTestHistory' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.ListVirtualInterfaceTestHistory' \
  -d '{
    "testId": {},
    "virtualInterfaceId": {},
    "bgpPeers": {},
    "status": {},
    "maxResults": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.ListVirtualInterfaceTestHistory`

Lists the virtual interface failover test history.

> Body parameter

```json
{
  "testId": {},
  "virtualInterfaceId": {},
  "bgpPeers": {},
  "status": {},
  "maxResults": {},
  "nextToken": {}
}
```

<h3 id="listvirtualinterfacetesthistory-parameters">Parameters</h3>

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
|body|body|[ListVirtualInterfaceTestHistoryRequest](#schemalistvirtualinterfacetesthistoryrequest)|true|none|
|» testId|body|object|false|none|
|» virtualInterfaceId|body|object|false|none|
|» bgpPeers|body|object|false|none|
|» status|body|object|false|none|
|» maxResults|body|object|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.ListVirtualInterfaceTestHistory|

> Example responses

> 200 Response

```json
{
  "virtualInterfaceTestHistory": {},
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

<h3 id="listvirtualinterfacetesthistory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListVirtualInterfaceTestHistoryResponse](#schemalistvirtualinterfacetesthistoryresponse)|
|480|480|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|481|481|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartBgpFailoverTest

<a id="opIdStartBgpFailoverTest"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.StartBgpFailoverTest' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.StartBgpFailoverTest' \
  -d '{
    "virtualInterfaceId": {},
    "bgpPeers": {},
    "testDurationInMinutes": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.StartBgpFailoverTest`

<p>Starts the virtual interface failover test that verifies your configuration meets your resiliency requirements by placing the BGP peering session in the DOWN state. You can then send traffic to verify that there are no outages.</p> <p>You can run the test on public, private, transit, and hosted virtual interfaces.</p> <p>You can use <a href="https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ListVirtualInterfaceTestHistory.html">ListVirtualInterfaceTestHistory</a> to view the virtual interface test history.</p> <p>If you need to stop the test before the test interval completes, use <a href="https://docs.aws.amazon.com/directconnect/latest/APIReference/API_StopBgpFailoverTest.html">StopBgpFailoverTest</a>.</p>

> Body parameter

```json
{
  "virtualInterfaceId": {},
  "bgpPeers": {},
  "testDurationInMinutes": {}
}
```

<h3 id="startbgpfailovertest-parameters">Parameters</h3>

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
|body|body|[StartBgpFailoverTestRequest](#schemastartbgpfailovertestrequest)|true|none|
|» virtualInterfaceId|body|object|true|none|
|» bgpPeers|body|object|false|none|
|» testDurationInMinutes|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.StartBgpFailoverTest|

> Example responses

> 200 Response

```json
{
  "virtualInterfaceTest": {
    "testId": {},
    "virtualInterfaceId": {},
    "bgpPeers": {},
    "status": {},
    "ownerAccount": {},
    "testDurationInMinutes": {},
    "startTime": {},
    "endTime": {}
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

<h3 id="startbgpfailovertest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartBgpFailoverTestResponse](#schemastartbgpfailovertestresponse)|
|480|480|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|481|481|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopBgpFailoverTest

<a id="opIdStopBgpFailoverTest"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.StopBgpFailoverTest' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.StopBgpFailoverTest' \
  -d '{
    "virtualInterfaceId": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.StopBgpFailoverTest`

Stops the virtual interface failover test.

> Body parameter

```json
{
  "virtualInterfaceId": {}
}
```

<h3 id="stopbgpfailovertest-parameters">Parameters</h3>

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
|body|body|[StopBgpFailoverTestRequest](#schemastopbgpfailovertestrequest)|true|none|
|» virtualInterfaceId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.StopBgpFailoverTest|

> Example responses

> 200 Response

```json
{
  "virtualInterfaceTest": {
    "testId": {},
    "virtualInterfaceId": {},
    "bgpPeers": {},
    "status": {},
    "ownerAccount": {},
    "testDurationInMinutes": {},
    "startTime": {},
    "endTime": {}
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

<h3 id="stopbgpfailovertest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopBgpFailoverTestResponse](#schemastopbgpfailovertestresponse)|
|480|480|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|481|481|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.TagResource' \
  -d '{
    "resourceArn": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.TagResource`

<p>Adds the specified tags to the specified Direct Connect resource. Each resource can have a maximum of 50 tags.</p> <p>Each tag consists of a key and an optional value. If a tag with the same key is already associated with the resource, this action updates its value.</p>

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
|X-Amz-Target|OvertureService.TagResource|

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
|480|480|DuplicateTagKeysException|[DuplicateTagKeysException](#schemaduplicatetagkeysexception)|
|481|481|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|482|482|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|483|483|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.UntagResource' \
  -d '{
    "resourceArn": {},
    "tagKeys": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.UntagResource`

Removes one or more tags from the specified Direct Connect resource.

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
|X-Amz-Target|OvertureService.UntagResource|

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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|481|481|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateConnection

<a id="opIdUpdateConnection"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.UpdateConnection' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.UpdateConnection' \
  -d '{
    "connectionId": {},
    "connectionName": {},
    "encryptionMode": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.UpdateConnection`

<p>Updates the Direct Connect dedicated connection configuration.</p> <p>You can update the following parameters for a connection:</p> <ul> <li> <p>The connection name</p> </li> <li> <p>The connection's MAC Security (MACsec) encryption mode.</p> </li> </ul>

> Body parameter

```json
{
  "connectionId": {},
  "connectionName": {},
  "encryptionMode": {}
}
```

<h3 id="updateconnection-parameters">Parameters</h3>

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
|body|body|[UpdateConnectionRequest](#schemaupdateconnectionrequest)|true|none|
|» connectionId|body|object|true|none|
|» connectionName|body|object|false|none|
|» encryptionMode|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.UpdateConnection|

> Example responses

> 200 Response

```json
{
  "ownerAccount": {},
  "connectionId": {},
  "connectionName": {},
  "connectionState": {},
  "region": {},
  "location": {},
  "bandwidth": {},
  "vlan": {},
  "partnerName": {},
  "loaIssueTime": {},
  "lagId": {},
  "awsDevice": {},
  "jumboFrameCapable": {},
  "awsDeviceV2": {},
  "awsLogicalDeviceId": {},
  "hasLogicalRedundancy": {},
  "tags": {},
  "providerName": {},
  "macSecCapable": {},
  "portEncryptionStatus": {},
  "encryptionMode": {},
  "macSecKeys": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="updateconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Connection](#schemaconnection)|
|480|480|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|481|481|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDirectConnectGateway

<a id="opIdUpdateDirectConnectGateway"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.UpdateDirectConnectGateway' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.UpdateDirectConnectGateway' \
  -d '{
    "directConnectGatewayId": {},
    "newDirectConnectGatewayName": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.UpdateDirectConnectGateway`

Updates the name of a current Direct Connect gateway.

> Body parameter

```json
{
  "directConnectGatewayId": {},
  "newDirectConnectGatewayName": {}
}
```

<h3 id="updatedirectconnectgateway-parameters">Parameters</h3>

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
|body|body|[UpdateDirectConnectGatewayRequest](#schemaupdatedirectconnectgatewayrequest)|true|none|
|» directConnectGatewayId|body|object|true|none|
|» newDirectConnectGatewayName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.UpdateDirectConnectGateway|

> Example responses

> 200 Response

```json
{
  "directConnectGateway": {
    "directConnectGatewayId": {},
    "directConnectGatewayName": {},
    "amazonSideAsn": {},
    "ownerAccount": {},
    "directConnectGatewayState": {},
    "stateChangeError": {}
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

<h3 id="updatedirectconnectgateway-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDirectConnectGatewayResponse](#schemaupdatedirectconnectgatewayresponse)|
|480|480|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|481|481|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDirectConnectGatewayAssociation

<a id="opIdUpdateDirectConnectGatewayAssociation"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.UpdateDirectConnectGatewayAssociation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.UpdateDirectConnectGatewayAssociation' \
  -d '{
    "associationId": {},
    "addAllowedPrefixesToDirectConnectGateway": {},
    "removeAllowedPrefixesToDirectConnectGateway": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.UpdateDirectConnectGatewayAssociation`

<p>Updates the specified attributes of the Direct Connect gateway association.</p> <p>Add or remove prefixes from the association.</p>

> Body parameter

```json
{
  "associationId": {},
  "addAllowedPrefixesToDirectConnectGateway": {},
  "removeAllowedPrefixesToDirectConnectGateway": {}
}
```

<h3 id="updatedirectconnectgatewayassociation-parameters">Parameters</h3>

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
|body|body|[UpdateDirectConnectGatewayAssociationRequest](#schemaupdatedirectconnectgatewayassociationrequest)|true|none|
|» associationId|body|object|false|none|
|» addAllowedPrefixesToDirectConnectGateway|body|object|false|none|
|» removeAllowedPrefixesToDirectConnectGateway|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.UpdateDirectConnectGatewayAssociation|

> Example responses

> 200 Response

```json
{
  "directConnectGatewayAssociation": {
    "directConnectGatewayId": {},
    "directConnectGatewayOwnerAccount": {},
    "associationState": {},
    "stateChangeError": {},
    "associatedGateway": {
      "id": {},
      "type": {},
      "ownerAccount": {},
      "region": {}
    },
    "associationId": {},
    "allowedPrefixesToDirectConnectGateway": {},
    "virtualGatewayId": {},
    "virtualGatewayRegion": {},
    "virtualGatewayOwnerAccount": {}
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

<h3 id="updatedirectconnectgatewayassociation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDirectConnectGatewayAssociationResult](#schemaupdatedirectconnectgatewayassociationresult)|
|480|480|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|481|481|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateLag

<a id="opIdUpdateLag"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.UpdateLag' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.UpdateLag' \
  -d '{
    "lagId": {},
    "lagName": {},
    "minimumLinks": {},
    "encryptionMode": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.UpdateLag`

<p>Updates the attributes of the specified link aggregation group (LAG).</p> <p>You can update the following LAG attributes:</p> <ul> <li> <p>The name of the LAG.</p> </li> <li> <p>The value for the minimum number of connections that must be operational for the LAG itself to be operational. </p> </li> <li> <p>The LAG's MACsec encryption mode.</p> <p>Amazon Web Services assigns this value to each connection which is part of the LAG.</p> </li> <li> <p>The tags</p> </li> </ul> <note> <p>If you adjust the threshold value for the minimum number of operational connections, ensure that the new value does not cause the LAG to fall below the threshold and become non-operational.</p> </note>

> Body parameter

```json
{
  "lagId": {},
  "lagName": {},
  "minimumLinks": {},
  "encryptionMode": {}
}
```

<h3 id="updatelag-parameters">Parameters</h3>

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
|body|body|[UpdateLagRequest](#schemaupdatelagrequest)|true|none|
|» lagId|body|object|true|none|
|» lagName|body|object|false|none|
|» minimumLinks|body|object|false|none|
|» encryptionMode|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.UpdateLag|

> Example responses

> 200 Response

```json
{
  "connectionsBandwidth": {},
  "numberOfConnections": {},
  "lagId": {},
  "ownerAccount": {},
  "lagName": {},
  "lagState": {},
  "location": {},
  "region": {},
  "minimumLinks": {},
  "awsDevice": {},
  "awsDeviceV2": {},
  "awsLogicalDeviceId": {},
  "connections": {},
  "allowsHostedConnections": {},
  "jumboFrameCapable": {},
  "hasLogicalRedundancy": {},
  "tags": {},
  "providerName": {},
  "macSecCapable": {},
  "encryptionMode": {},
  "macSecKeys": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="updatelag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Lag](#schemalag)|
|480|480|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|481|481|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateVirtualInterfaceAttributes

<a id="opIdUpdateVirtualInterfaceAttributes"></a>

> Code samples

```bash
curl 'https://directconnect.us-east-1.amazonaws.com/#X-Amz-Target=OvertureService.UpdateVirtualInterfaceAttributes' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: OvertureService.UpdateVirtualInterfaceAttributes' \
  -d '{
    "virtualInterfaceId": {},
    "mtu": {},
    "enableSiteLink": {},
    "virtualInterfaceName": {}
  }'
```

`POST /#X-Amz-Target=OvertureService.UpdateVirtualInterfaceAttributes`

<p>Updates the specified attributes of the specified virtual private interface.</p> <p>Setting the MTU of a virtual interface to 9001 (jumbo frames) can cause an update to the underlying physical connection if it wasn't updated to support jumbo frames. Updating the connection disrupts network connectivity for all virtual interfaces associated with the connection for up to 30 seconds. To check whether your connection supports jumbo frames, call <a>DescribeConnections</a>. To check whether your virtual q interface supports jumbo frames, call <a>DescribeVirtualInterfaces</a>.</p>

> Body parameter

```json
{
  "virtualInterfaceId": {},
  "mtu": {},
  "enableSiteLink": {},
  "virtualInterfaceName": {}
}
```

<h3 id="updatevirtualinterfaceattributes-parameters">Parameters</h3>

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
|body|body|[UpdateVirtualInterfaceAttributesRequest](#schemaupdatevirtualinterfaceattributesrequest)|true|none|
|» virtualInterfaceId|body|object|true|none|
|» mtu|body|object|false|none|
|» enableSiteLink|body|object|false|none|
|» virtualInterfaceName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|OvertureService.UpdateVirtualInterfaceAttributes|

> Example responses

> 200 Response

```json
{
  "ownerAccount": {},
  "virtualInterfaceId": {},
  "location": {},
  "connectionId": {},
  "virtualInterfaceType": {},
  "virtualInterfaceName": {},
  "vlan": {},
  "asn": {},
  "amazonSideAsn": {},
  "authKey": {},
  "amazonAddress": {},
  "customerAddress": {},
  "addressFamily": {},
  "virtualInterfaceState": {},
  "customerRouterConfig": {},
  "mtu": {},
  "jumboFrameCapable": {},
  "virtualGatewayId": {},
  "directConnectGatewayId": {},
  "routeFilterPrefixes": {},
  "bgpPeers": {},
  "region": {},
  "awsDeviceV2": {},
  "awsLogicalDeviceId": {},
  "tags": {},
  "siteLinkEnabled": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="updatevirtualinterfaceattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[VirtualInterface](#schemavirtualinterface)|
|480|480|DirectConnectServerException|[DirectConnectServerException](#schemadirectconnectserverexception)|
|481|481|DirectConnectClientException|[DirectConnectClientException](#schemadirectconnectclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AcceptDirectConnectGatewayAssociationProposalResult">AcceptDirectConnectGatewayAssociationProposalResult</h2>
<!-- backwards compatibility -->
<a id="schemaacceptdirectconnectgatewayassociationproposalresult"></a>
<a id="schema_AcceptDirectConnectGatewayAssociationProposalResult"></a>
<a id="tocSacceptdirectconnectgatewayassociationproposalresult"></a>
<a id="tocsacceptdirectconnectgatewayassociationproposalresult"></a>

```json
{
  "directConnectGatewayAssociation": {
    "directConnectGatewayId": {},
    "directConnectGatewayOwnerAccount": {},
    "associationState": {},
    "stateChangeError": {},
    "associatedGateway": {
      "id": {},
      "type": {},
      "ownerAccount": {},
      "region": {}
    },
    "associationId": {},
    "allowedPrefixesToDirectConnectGateway": {},
    "virtualGatewayId": {},
    "virtualGatewayRegion": {},
    "virtualGatewayOwnerAccount": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|directConnectGatewayAssociation|[DirectConnectGatewayAssociation](#schemadirectconnectgatewayassociation)|false|none|Information about an association between a Direct Connect gateway and a virtual private gateway or transit gateway.|

<h2 id="tocS_AcceptDirectConnectGatewayAssociationProposalRequest">AcceptDirectConnectGatewayAssociationProposalRequest</h2>
<!-- backwards compatibility -->
<a id="schemaacceptdirectconnectgatewayassociationproposalrequest"></a>
<a id="schema_AcceptDirectConnectGatewayAssociationProposalRequest"></a>
<a id="tocSacceptdirectconnectgatewayassociationproposalrequest"></a>
<a id="tocsacceptdirectconnectgatewayassociationproposalrequest"></a>

```json
{
  "directConnectGatewayId": {},
  "proposalId": {},
  "associatedGatewayOwnerAccount": {},
  "overrideAllowedPrefixesToDirectConnectGateway": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|directConnectGatewayId|object|true|none|none|
|proposalId|object|true|none|none|
|associatedGatewayOwnerAccount|object|true|none|none|
|overrideAllowedPrefixesToDirectConnectGateway|object|false|none|none|

<h2 id="tocS_DirectConnectServerException">DirectConnectServerException</h2>
<!-- backwards compatibility -->
<a id="schemadirectconnectserverexception"></a>
<a id="schema_DirectConnectServerException"></a>
<a id="tocSdirectconnectserverexception"></a>
<a id="tocsdirectconnectserverexception"></a>

```json
null
```

<h2 id="tocS_DirectConnectClientException">DirectConnectClientException</h2>
<!-- backwards compatibility -->
<a id="schemadirectconnectclientexception"></a>
<a id="schema_DirectConnectClientException"></a>
<a id="tocSdirectconnectclientexception"></a>
<a id="tocsdirectconnectclientexception"></a>

```json
null
```

<h2 id="tocS_Connection">Connection</h2>
<!-- backwards compatibility -->
<a id="schemaconnection"></a>
<a id="schema_Connection"></a>
<a id="tocSconnection"></a>
<a id="tocsconnection"></a>

```json
{
  "ownerAccount": {},
  "connectionId": {},
  "connectionName": {},
  "connectionState": {},
  "region": {},
  "location": {},
  "bandwidth": {},
  "vlan": {},
  "partnerName": {},
  "loaIssueTime": {},
  "lagId": {},
  "awsDevice": {},
  "jumboFrameCapable": {},
  "awsDeviceV2": {},
  "awsLogicalDeviceId": {},
  "hasLogicalRedundancy": {},
  "tags": {},
  "providerName": {},
  "macSecCapable": {},
  "portEncryptionStatus": {},
  "encryptionMode": {},
  "macSecKeys": {}
}
```

Information about an Direct Connect connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ownerAccount|object|false|none|none|
|connectionId|object|false|none|none|
|connectionName|object|false|none|none|
|connectionState|object|false|none|none|
|region|object|false|none|none|
|location|object|false|none|none|
|bandwidth|object|false|none|none|
|vlan|object|false|none|none|
|partnerName|object|false|none|none|
|loaIssueTime|object|false|none|none|
|lagId|object|false|none|none|
|awsDevice|object|false|none|none|
|jumboFrameCapable|object|false|none|none|
|awsDeviceV2|object|false|none|none|
|awsLogicalDeviceId|object|false|none|none|
|hasLogicalRedundancy|object|false|none|none|
|tags|object|false|none|none|
|providerName|object|false|none|none|
|macSecCapable|object|false|none|none|
|portEncryptionStatus|object|false|none|none|
|encryptionMode|object|false|none|none|
|macSecKeys|object|false|none|none|

<h2 id="tocS_AllocateConnectionOnInterconnectRequest">AllocateConnectionOnInterconnectRequest</h2>
<!-- backwards compatibility -->
<a id="schemaallocateconnectiononinterconnectrequest"></a>
<a id="schema_AllocateConnectionOnInterconnectRequest"></a>
<a id="tocSallocateconnectiononinterconnectrequest"></a>
<a id="tocsallocateconnectiononinterconnectrequest"></a>

```json
{
  "bandwidth": {},
  "connectionName": {},
  "ownerAccount": {},
  "interconnectId": {},
  "vlan": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bandwidth|object|true|none|none|
|connectionName|object|true|none|none|
|ownerAccount|object|true|none|none|
|interconnectId|object|true|none|none|
|vlan|object|true|none|none|

<h2 id="tocS_AllocateHostedConnectionRequest">AllocateHostedConnectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaallocatehostedconnectionrequest"></a>
<a id="schema_AllocateHostedConnectionRequest"></a>
<a id="tocSallocatehostedconnectionrequest"></a>
<a id="tocsallocatehostedconnectionrequest"></a>

```json
{
  "connectionId": {},
  "ownerAccount": {},
  "bandwidth": {},
  "connectionName": {},
  "vlan": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionId|object|true|none|none|
|ownerAccount|object|true|none|none|
|bandwidth|object|true|none|none|
|connectionName|object|true|none|none|
|vlan|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_DuplicateTagKeysException">DuplicateTagKeysException</h2>
<!-- backwards compatibility -->
<a id="schemaduplicatetagkeysexception"></a>
<a id="schema_DuplicateTagKeysException"></a>
<a id="tocSduplicatetagkeysexception"></a>
<a id="tocsduplicatetagkeysexception"></a>

```json
null
```

<h2 id="tocS_TooManyTagsException">TooManyTagsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanytagsexception"></a>
<a id="schema_TooManyTagsException"></a>
<a id="tocStoomanytagsexception"></a>
<a id="tocstoomanytagsexception"></a>

```json
null
```

<h2 id="tocS_VirtualInterface">VirtualInterface</h2>
<!-- backwards compatibility -->
<a id="schemavirtualinterface"></a>
<a id="schema_VirtualInterface"></a>
<a id="tocSvirtualinterface"></a>
<a id="tocsvirtualinterface"></a>

```json
{
  "ownerAccount": {},
  "virtualInterfaceId": {},
  "location": {},
  "connectionId": {},
  "virtualInterfaceType": {},
  "virtualInterfaceName": {},
  "vlan": {},
  "asn": {},
  "amazonSideAsn": {},
  "authKey": {},
  "amazonAddress": {},
  "customerAddress": {},
  "addressFamily": {},
  "virtualInterfaceState": {},
  "customerRouterConfig": {},
  "mtu": {},
  "jumboFrameCapable": {},
  "virtualGatewayId": {},
  "directConnectGatewayId": {},
  "routeFilterPrefixes": {},
  "bgpPeers": {},
  "region": {},
  "awsDeviceV2": {},
  "awsLogicalDeviceId": {},
  "tags": {},
  "siteLinkEnabled": {}
}
```

Information about a virtual interface.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ownerAccount|object|false|none|none|
|virtualInterfaceId|object|false|none|none|
|location|object|false|none|none|
|connectionId|object|false|none|none|
|virtualInterfaceType|object|false|none|none|
|virtualInterfaceName|object|false|none|none|
|vlan|object|false|none|none|
|asn|object|false|none|none|
|amazonSideAsn|object|false|none|none|
|authKey|object|false|none|none|
|amazonAddress|object|false|none|none|
|customerAddress|object|false|none|none|
|addressFamily|object|false|none|none|
|virtualInterfaceState|object|false|none|none|
|customerRouterConfig|object|false|none|none|
|mtu|object|false|none|none|
|jumboFrameCapable|object|false|none|none|
|virtualGatewayId|object|false|none|none|
|directConnectGatewayId|object|false|none|none|
|routeFilterPrefixes|object|false|none|none|
|bgpPeers|object|false|none|none|
|region|object|false|none|none|
|awsDeviceV2|object|false|none|none|
|awsLogicalDeviceId|object|false|none|none|
|tags|object|false|none|none|
|siteLinkEnabled|object|false|none|none|

<h2 id="tocS_AllocatePrivateVirtualInterfaceRequest">AllocatePrivateVirtualInterfaceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaallocateprivatevirtualinterfacerequest"></a>
<a id="schema_AllocatePrivateVirtualInterfaceRequest"></a>
<a id="tocSallocateprivatevirtualinterfacerequest"></a>
<a id="tocsallocateprivatevirtualinterfacerequest"></a>

```json
{
  "connectionId": {},
  "ownerAccount": {},
  "newPrivateVirtualInterfaceAllocation": {
    "virtualInterfaceName": {},
    "vlan": {},
    "asn": {},
    "mtu": {},
    "authKey": {},
    "amazonAddress": {},
    "addressFamily": {},
    "customerAddress": {},
    "tags": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionId|object|true|none|none|
|ownerAccount|object|true|none|none|
|newPrivateVirtualInterfaceAllocation|object|true|none|none|

<h2 id="tocS_AllocatePublicVirtualInterfaceRequest">AllocatePublicVirtualInterfaceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaallocatepublicvirtualinterfacerequest"></a>
<a id="schema_AllocatePublicVirtualInterfaceRequest"></a>
<a id="tocSallocatepublicvirtualinterfacerequest"></a>
<a id="tocsallocatepublicvirtualinterfacerequest"></a>

```json
{
  "connectionId": {},
  "ownerAccount": {},
  "newPublicVirtualInterfaceAllocation": {
    "virtualInterfaceName": {},
    "vlan": {},
    "asn": {},
    "authKey": {},
    "amazonAddress": {},
    "customerAddress": {},
    "addressFamily": {},
    "routeFilterPrefixes": {},
    "tags": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionId|object|true|none|none|
|ownerAccount|object|true|none|none|
|newPublicVirtualInterfaceAllocation|object|true|none|none|

<h2 id="tocS_AllocateTransitVirtualInterfaceResult">AllocateTransitVirtualInterfaceResult</h2>
<!-- backwards compatibility -->
<a id="schemaallocatetransitvirtualinterfaceresult"></a>
<a id="schema_AllocateTransitVirtualInterfaceResult"></a>
<a id="tocSallocatetransitvirtualinterfaceresult"></a>
<a id="tocsallocatetransitvirtualinterfaceresult"></a>

```json
{
  "virtualInterface": {
    "ownerAccount": {},
    "virtualInterfaceId": {},
    "location": {},
    "connectionId": {},
    "virtualInterfaceType": {},
    "virtualInterfaceName": {},
    "vlan": {},
    "asn": {},
    "amazonSideAsn": {},
    "authKey": {},
    "amazonAddress": {},
    "customerAddress": {},
    "addressFamily": {},
    "virtualInterfaceState": {},
    "customerRouterConfig": {},
    "mtu": {},
    "jumboFrameCapable": {},
    "virtualGatewayId": {},
    "directConnectGatewayId": {},
    "routeFilterPrefixes": {},
    "bgpPeers": {},
    "region": {},
    "awsDeviceV2": {},
    "awsLogicalDeviceId": {},
    "tags": {},
    "siteLinkEnabled": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualInterface|[VirtualInterface](#schemavirtualinterface)|false|none|Information about a virtual interface.|

<h2 id="tocS_AllocateTransitVirtualInterfaceRequest">AllocateTransitVirtualInterfaceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaallocatetransitvirtualinterfacerequest"></a>
<a id="schema_AllocateTransitVirtualInterfaceRequest"></a>
<a id="tocSallocatetransitvirtualinterfacerequest"></a>
<a id="tocsallocatetransitvirtualinterfacerequest"></a>

```json
{
  "connectionId": {},
  "ownerAccount": {},
  "newTransitVirtualInterfaceAllocation": {
    "virtualInterfaceName": {},
    "vlan": {},
    "asn": {},
    "mtu": {},
    "authKey": {},
    "amazonAddress": {},
    "customerAddress": {},
    "addressFamily": {},
    "tags": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionId|object|true|none|none|
|ownerAccount|object|true|none|none|
|newTransitVirtualInterfaceAllocation|object|true|none|none|

<h2 id="tocS_AssociateConnectionWithLagRequest">AssociateConnectionWithLagRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociateconnectionwithlagrequest"></a>
<a id="schema_AssociateConnectionWithLagRequest"></a>
<a id="tocSassociateconnectionwithlagrequest"></a>
<a id="tocsassociateconnectionwithlagrequest"></a>

```json
{
  "connectionId": {},
  "lagId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionId|object|true|none|none|
|lagId|object|true|none|none|

<h2 id="tocS_AssociateHostedConnectionRequest">AssociateHostedConnectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatehostedconnectionrequest"></a>
<a id="schema_AssociateHostedConnectionRequest"></a>
<a id="tocSassociatehostedconnectionrequest"></a>
<a id="tocsassociatehostedconnectionrequest"></a>

```json
{
  "connectionId": {},
  "parentConnectionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionId|object|true|none|none|
|parentConnectionId|object|true|none|none|

<h2 id="tocS_AssociateMacSecKeyResponse">AssociateMacSecKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociatemacseckeyresponse"></a>
<a id="schema_AssociateMacSecKeyResponse"></a>
<a id="tocSassociatemacseckeyresponse"></a>
<a id="tocsassociatemacseckeyresponse"></a>

```json
{
  "connectionId": {},
  "macSecKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionId|object|false|none|none|
|macSecKeys|object|false|none|none|

<h2 id="tocS_AssociateMacSecKeyRequest">AssociateMacSecKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatemacseckeyrequest"></a>
<a id="schema_AssociateMacSecKeyRequest"></a>
<a id="tocSassociatemacseckeyrequest"></a>
<a id="tocsassociatemacseckeyrequest"></a>

```json
{
  "connectionId": {},
  "secretARN": {},
  "ckn": {},
  "cak": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionId|object|true|none|none|
|secretARN|object|false|none|none|
|ckn|object|false|none|none|
|cak|object|false|none|none|

<h2 id="tocS_AssociateVirtualInterfaceRequest">AssociateVirtualInterfaceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatevirtualinterfacerequest"></a>
<a id="schema_AssociateVirtualInterfaceRequest"></a>
<a id="tocSassociatevirtualinterfacerequest"></a>
<a id="tocsassociatevirtualinterfacerequest"></a>

```json
{
  "virtualInterfaceId": {},
  "connectionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualInterfaceId|object|true|none|none|
|connectionId|object|true|none|none|

<h2 id="tocS_ConfirmConnectionResponse">ConfirmConnectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaconfirmconnectionresponse"></a>
<a id="schema_ConfirmConnectionResponse"></a>
<a id="tocSconfirmconnectionresponse"></a>
<a id="tocsconfirmconnectionresponse"></a>

```json
{
  "connectionState": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionState|object|false|none|none|

<h2 id="tocS_ConfirmConnectionRequest">ConfirmConnectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaconfirmconnectionrequest"></a>
<a id="schema_ConfirmConnectionRequest"></a>
<a id="tocSconfirmconnectionrequest"></a>
<a id="tocsconfirmconnectionrequest"></a>

```json
{
  "connectionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionId|object|true|none|none|

<h2 id="tocS_ConfirmCustomerAgreementResponse">ConfirmCustomerAgreementResponse</h2>
<!-- backwards compatibility -->
<a id="schemaconfirmcustomeragreementresponse"></a>
<a id="schema_ConfirmCustomerAgreementResponse"></a>
<a id="tocSconfirmcustomeragreementresponse"></a>
<a id="tocsconfirmcustomeragreementresponse"></a>

```json
{
  "status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|false|none|none|

<h2 id="tocS_ConfirmCustomerAgreementRequest">ConfirmCustomerAgreementRequest</h2>
<!-- backwards compatibility -->
<a id="schemaconfirmcustomeragreementrequest"></a>
<a id="schema_ConfirmCustomerAgreementRequest"></a>
<a id="tocSconfirmcustomeragreementrequest"></a>
<a id="tocsconfirmcustomeragreementrequest"></a>

```json
{
  "agreementName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agreementName|object|false|none|none|

<h2 id="tocS_ConfirmPrivateVirtualInterfaceResponse">ConfirmPrivateVirtualInterfaceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaconfirmprivatevirtualinterfaceresponse"></a>
<a id="schema_ConfirmPrivateVirtualInterfaceResponse"></a>
<a id="tocSconfirmprivatevirtualinterfaceresponse"></a>
<a id="tocsconfirmprivatevirtualinterfaceresponse"></a>

```json
{
  "virtualInterfaceState": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualInterfaceState|object|false|none|none|

<h2 id="tocS_ConfirmPrivateVirtualInterfaceRequest">ConfirmPrivateVirtualInterfaceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaconfirmprivatevirtualinterfacerequest"></a>
<a id="schema_ConfirmPrivateVirtualInterfaceRequest"></a>
<a id="tocSconfirmprivatevirtualinterfacerequest"></a>
<a id="tocsconfirmprivatevirtualinterfacerequest"></a>

```json
{
  "virtualInterfaceId": {},
  "virtualGatewayId": {},
  "directConnectGatewayId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualInterfaceId|object|true|none|none|
|virtualGatewayId|object|false|none|none|
|directConnectGatewayId|object|false|none|none|

<h2 id="tocS_ConfirmPublicVirtualInterfaceResponse">ConfirmPublicVirtualInterfaceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaconfirmpublicvirtualinterfaceresponse"></a>
<a id="schema_ConfirmPublicVirtualInterfaceResponse"></a>
<a id="tocSconfirmpublicvirtualinterfaceresponse"></a>
<a id="tocsconfirmpublicvirtualinterfaceresponse"></a>

```json
{
  "virtualInterfaceState": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualInterfaceState|object|false|none|none|

<h2 id="tocS_ConfirmPublicVirtualInterfaceRequest">ConfirmPublicVirtualInterfaceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaconfirmpublicvirtualinterfacerequest"></a>
<a id="schema_ConfirmPublicVirtualInterfaceRequest"></a>
<a id="tocSconfirmpublicvirtualinterfacerequest"></a>
<a id="tocsconfirmpublicvirtualinterfacerequest"></a>

```json
{
  "virtualInterfaceId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualInterfaceId|object|true|none|none|

<h2 id="tocS_ConfirmTransitVirtualInterfaceResponse">ConfirmTransitVirtualInterfaceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaconfirmtransitvirtualinterfaceresponse"></a>
<a id="schema_ConfirmTransitVirtualInterfaceResponse"></a>
<a id="tocSconfirmtransitvirtualinterfaceresponse"></a>
<a id="tocsconfirmtransitvirtualinterfaceresponse"></a>

```json
{
  "virtualInterfaceState": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualInterfaceState|object|false|none|none|

<h2 id="tocS_ConfirmTransitVirtualInterfaceRequest">ConfirmTransitVirtualInterfaceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaconfirmtransitvirtualinterfacerequest"></a>
<a id="schema_ConfirmTransitVirtualInterfaceRequest"></a>
<a id="tocSconfirmtransitvirtualinterfacerequest"></a>
<a id="tocsconfirmtransitvirtualinterfacerequest"></a>

```json
{
  "virtualInterfaceId": {},
  "directConnectGatewayId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualInterfaceId|object|true|none|none|
|directConnectGatewayId|object|true|none|none|

<h2 id="tocS_CreateBGPPeerResponse">CreateBGPPeerResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatebgppeerresponse"></a>
<a id="schema_CreateBGPPeerResponse"></a>
<a id="tocScreatebgppeerresponse"></a>
<a id="tocscreatebgppeerresponse"></a>

```json
{
  "virtualInterface": {
    "ownerAccount": {},
    "virtualInterfaceId": {},
    "location": {},
    "connectionId": {},
    "virtualInterfaceType": {},
    "virtualInterfaceName": {},
    "vlan": {},
    "asn": {},
    "amazonSideAsn": {},
    "authKey": {},
    "amazonAddress": {},
    "customerAddress": {},
    "addressFamily": {},
    "virtualInterfaceState": {},
    "customerRouterConfig": {},
    "mtu": {},
    "jumboFrameCapable": {},
    "virtualGatewayId": {},
    "directConnectGatewayId": {},
    "routeFilterPrefixes": {},
    "bgpPeers": {},
    "region": {},
    "awsDeviceV2": {},
    "awsLogicalDeviceId": {},
    "tags": {},
    "siteLinkEnabled": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualInterface|object|false|none|none|

<h2 id="tocS_CreateBGPPeerRequest">CreateBGPPeerRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatebgppeerrequest"></a>
<a id="schema_CreateBGPPeerRequest"></a>
<a id="tocScreatebgppeerrequest"></a>
<a id="tocscreatebgppeerrequest"></a>

```json
{
  "virtualInterfaceId": {},
  "newBGPPeer": {
    "asn": {},
    "authKey": {},
    "addressFamily": {},
    "amazonAddress": {},
    "customerAddress": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualInterfaceId|object|false|none|none|
|newBGPPeer|object|false|none|none|

<h2 id="tocS_CreateConnectionRequest">CreateConnectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateconnectionrequest"></a>
<a id="schema_CreateConnectionRequest"></a>
<a id="tocScreateconnectionrequest"></a>
<a id="tocscreateconnectionrequest"></a>

```json
{
  "location": {},
  "bandwidth": {},
  "connectionName": {},
  "lagId": {},
  "tags": {},
  "providerName": {},
  "requestMACSec": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location|object|true|none|none|
|bandwidth|object|true|none|none|
|connectionName|object|true|none|none|
|lagId|object|false|none|none|
|tags|object|false|none|none|
|providerName|object|false|none|none|
|requestMACSec|object|false|none|none|

<h2 id="tocS_CreateDirectConnectGatewayResult">CreateDirectConnectGatewayResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatedirectconnectgatewayresult"></a>
<a id="schema_CreateDirectConnectGatewayResult"></a>
<a id="tocScreatedirectconnectgatewayresult"></a>
<a id="tocscreatedirectconnectgatewayresult"></a>

```json
{
  "directConnectGateway": {
    "directConnectGatewayId": {},
    "directConnectGatewayName": {},
    "amazonSideAsn": {},
    "ownerAccount": {},
    "directConnectGatewayState": {},
    "stateChangeError": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|directConnectGateway|object|false|none|none|

<h2 id="tocS_CreateDirectConnectGatewayRequest">CreateDirectConnectGatewayRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedirectconnectgatewayrequest"></a>
<a id="schema_CreateDirectConnectGatewayRequest"></a>
<a id="tocScreatedirectconnectgatewayrequest"></a>
<a id="tocscreatedirectconnectgatewayrequest"></a>

```json
{
  "directConnectGatewayName": {},
  "amazonSideAsn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|directConnectGatewayName|object|true|none|none|
|amazonSideAsn|object|false|none|none|

<h2 id="tocS_CreateDirectConnectGatewayAssociationResult">CreateDirectConnectGatewayAssociationResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatedirectconnectgatewayassociationresult"></a>
<a id="schema_CreateDirectConnectGatewayAssociationResult"></a>
<a id="tocScreatedirectconnectgatewayassociationresult"></a>
<a id="tocscreatedirectconnectgatewayassociationresult"></a>

```json
{
  "directConnectGatewayAssociation": {
    "directConnectGatewayId": {},
    "directConnectGatewayOwnerAccount": {},
    "associationState": {},
    "stateChangeError": {},
    "associatedGateway": {
      "id": {},
      "type": {},
      "ownerAccount": {},
      "region": {}
    },
    "associationId": {},
    "allowedPrefixesToDirectConnectGateway": {},
    "virtualGatewayId": {},
    "virtualGatewayRegion": {},
    "virtualGatewayOwnerAccount": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|directConnectGatewayAssociation|object|false|none|none|

<h2 id="tocS_CreateDirectConnectGatewayAssociationRequest">CreateDirectConnectGatewayAssociationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedirectconnectgatewayassociationrequest"></a>
<a id="schema_CreateDirectConnectGatewayAssociationRequest"></a>
<a id="tocScreatedirectconnectgatewayassociationrequest"></a>
<a id="tocscreatedirectconnectgatewayassociationrequest"></a>

```json
{
  "directConnectGatewayId": {},
  "gatewayId": {},
  "addAllowedPrefixesToDirectConnectGateway": {},
  "virtualGatewayId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|directConnectGatewayId|object|true|none|none|
|gatewayId|object|false|none|none|
|addAllowedPrefixesToDirectConnectGateway|object|false|none|none|
|virtualGatewayId|object|false|none|none|

<h2 id="tocS_CreateDirectConnectGatewayAssociationProposalResult">CreateDirectConnectGatewayAssociationProposalResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatedirectconnectgatewayassociationproposalresult"></a>
<a id="schema_CreateDirectConnectGatewayAssociationProposalResult"></a>
<a id="tocScreatedirectconnectgatewayassociationproposalresult"></a>
<a id="tocscreatedirectconnectgatewayassociationproposalresult"></a>

```json
{
  "directConnectGatewayAssociationProposal": {
    "proposalId": {},
    "directConnectGatewayId": {},
    "directConnectGatewayOwnerAccount": {},
    "proposalState": {},
    "associatedGateway": {
      "id": {},
      "type": {},
      "ownerAccount": {},
      "region": {}
    },
    "existingAllowedPrefixesToDirectConnectGateway": {},
    "requestedAllowedPrefixesToDirectConnectGateway": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|directConnectGatewayAssociationProposal|object|false|none|none|

<h2 id="tocS_CreateDirectConnectGatewayAssociationProposalRequest">CreateDirectConnectGatewayAssociationProposalRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedirectconnectgatewayassociationproposalrequest"></a>
<a id="schema_CreateDirectConnectGatewayAssociationProposalRequest"></a>
<a id="tocScreatedirectconnectgatewayassociationproposalrequest"></a>
<a id="tocscreatedirectconnectgatewayassociationproposalrequest"></a>

```json
{
  "directConnectGatewayId": {},
  "directConnectGatewayOwnerAccount": {},
  "gatewayId": {},
  "addAllowedPrefixesToDirectConnectGateway": {},
  "removeAllowedPrefixesToDirectConnectGateway": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|directConnectGatewayId|object|true|none|none|
|directConnectGatewayOwnerAccount|object|true|none|none|
|gatewayId|object|true|none|none|
|addAllowedPrefixesToDirectConnectGateway|object|false|none|none|
|removeAllowedPrefixesToDirectConnectGateway|object|false|none|none|

<h2 id="tocS_Interconnect">Interconnect</h2>
<!-- backwards compatibility -->
<a id="schemainterconnect"></a>
<a id="schema_Interconnect"></a>
<a id="tocSinterconnect"></a>
<a id="tocsinterconnect"></a>

```json
{
  "interconnectId": {},
  "interconnectName": {},
  "interconnectState": {},
  "region": {},
  "location": {},
  "bandwidth": {},
  "loaIssueTime": {},
  "lagId": {},
  "awsDevice": {},
  "jumboFrameCapable": {},
  "awsDeviceV2": {},
  "awsLogicalDeviceId": {},
  "hasLogicalRedundancy": {},
  "tags": {},
  "providerName": {}
}
```

Information about an interconnect.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|interconnectId|object|false|none|none|
|interconnectName|object|false|none|none|
|interconnectState|object|false|none|none|
|region|object|false|none|none|
|location|object|false|none|none|
|bandwidth|object|false|none|none|
|loaIssueTime|object|false|none|none|
|lagId|object|false|none|none|
|awsDevice|object|false|none|none|
|jumboFrameCapable|object|false|none|none|
|awsDeviceV2|object|false|none|none|
|awsLogicalDeviceId|object|false|none|none|
|hasLogicalRedundancy|object|false|none|none|
|tags|object|false|none|none|
|providerName|object|false|none|none|

<h2 id="tocS_CreateInterconnectRequest">CreateInterconnectRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateinterconnectrequest"></a>
<a id="schema_CreateInterconnectRequest"></a>
<a id="tocScreateinterconnectrequest"></a>
<a id="tocscreateinterconnectrequest"></a>

```json
{
  "interconnectName": {},
  "bandwidth": {},
  "location": {},
  "lagId": {},
  "tags": {},
  "providerName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|interconnectName|object|true|none|none|
|bandwidth|object|true|none|none|
|location|object|true|none|none|
|lagId|object|false|none|none|
|tags|object|false|none|none|
|providerName|object|false|none|none|

<h2 id="tocS_Lag">Lag</h2>
<!-- backwards compatibility -->
<a id="schemalag"></a>
<a id="schema_Lag"></a>
<a id="tocSlag"></a>
<a id="tocslag"></a>

```json
{
  "connectionsBandwidth": {},
  "numberOfConnections": {},
  "lagId": {},
  "ownerAccount": {},
  "lagName": {},
  "lagState": {},
  "location": {},
  "region": {},
  "minimumLinks": {},
  "awsDevice": {},
  "awsDeviceV2": {},
  "awsLogicalDeviceId": {},
  "connections": {},
  "allowsHostedConnections": {},
  "jumboFrameCapable": {},
  "hasLogicalRedundancy": {},
  "tags": {},
  "providerName": {},
  "macSecCapable": {},
  "encryptionMode": {},
  "macSecKeys": {}
}
```

Information about a link aggregation group (LAG).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionsBandwidth|object|false|none|none|
|numberOfConnections|object|false|none|none|
|lagId|object|false|none|none|
|ownerAccount|object|false|none|none|
|lagName|object|false|none|none|
|lagState|object|false|none|none|
|location|object|false|none|none|
|region|object|false|none|none|
|minimumLinks|object|false|none|none|
|awsDevice|object|false|none|none|
|awsDeviceV2|object|false|none|none|
|awsLogicalDeviceId|object|false|none|none|
|connections|object|false|none|none|
|allowsHostedConnections|object|false|none|none|
|jumboFrameCapable|object|false|none|none|
|hasLogicalRedundancy|object|false|none|none|
|tags|object|false|none|none|
|providerName|object|false|none|none|
|macSecCapable|object|false|none|none|
|encryptionMode|object|false|none|none|
|macSecKeys|object|false|none|none|

<h2 id="tocS_CreateLagRequest">CreateLagRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatelagrequest"></a>
<a id="schema_CreateLagRequest"></a>
<a id="tocScreatelagrequest"></a>
<a id="tocscreatelagrequest"></a>

```json
{
  "numberOfConnections": {},
  "location": {},
  "connectionsBandwidth": {},
  "lagName": {},
  "connectionId": {},
  "tags": {},
  "childConnectionTags": {},
  "providerName": {},
  "requestMACSec": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|numberOfConnections|object|true|none|none|
|location|object|true|none|none|
|connectionsBandwidth|object|true|none|none|
|lagName|object|true|none|none|
|connectionId|object|false|none|none|
|tags|object|false|none|none|
|childConnectionTags|object|false|none|none|
|providerName|object|false|none|none|
|requestMACSec|object|false|none|none|

<h2 id="tocS_CreatePrivateVirtualInterfaceRequest">CreatePrivateVirtualInterfaceRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateprivatevirtualinterfacerequest"></a>
<a id="schema_CreatePrivateVirtualInterfaceRequest"></a>
<a id="tocScreateprivatevirtualinterfacerequest"></a>
<a id="tocscreateprivatevirtualinterfacerequest"></a>

```json
{
  "connectionId": {},
  "newPrivateVirtualInterface": {
    "virtualInterfaceName": {},
    "vlan": {},
    "asn": {},
    "mtu": {},
    "authKey": {},
    "amazonAddress": {},
    "customerAddress": {},
    "addressFamily": {},
    "virtualGatewayId": {},
    "directConnectGatewayId": {},
    "tags": {},
    "enableSiteLink": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionId|object|true|none|none|
|newPrivateVirtualInterface|object|true|none|none|

<h2 id="tocS_CreatePublicVirtualInterfaceRequest">CreatePublicVirtualInterfaceRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatepublicvirtualinterfacerequest"></a>
<a id="schema_CreatePublicVirtualInterfaceRequest"></a>
<a id="tocScreatepublicvirtualinterfacerequest"></a>
<a id="tocscreatepublicvirtualinterfacerequest"></a>

```json
{
  "connectionId": {},
  "newPublicVirtualInterface": {
    "virtualInterfaceName": {},
    "vlan": {},
    "asn": {},
    "authKey": {},
    "amazonAddress": {},
    "customerAddress": {},
    "addressFamily": {},
    "routeFilterPrefixes": {},
    "tags": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionId|object|true|none|none|
|newPublicVirtualInterface|object|true|none|none|

<h2 id="tocS_CreateTransitVirtualInterfaceResult">CreateTransitVirtualInterfaceResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatetransitvirtualinterfaceresult"></a>
<a id="schema_CreateTransitVirtualInterfaceResult"></a>
<a id="tocScreatetransitvirtualinterfaceresult"></a>
<a id="tocscreatetransitvirtualinterfaceresult"></a>

```json
{
  "virtualInterface": {
    "ownerAccount": {},
    "virtualInterfaceId": {},
    "location": {},
    "connectionId": {},
    "virtualInterfaceType": {},
    "virtualInterfaceName": {},
    "vlan": {},
    "asn": {},
    "amazonSideAsn": {},
    "authKey": {},
    "amazonAddress": {},
    "customerAddress": {},
    "addressFamily": {},
    "virtualInterfaceState": {},
    "customerRouterConfig": {},
    "mtu": {},
    "jumboFrameCapable": {},
    "virtualGatewayId": {},
    "directConnectGatewayId": {},
    "routeFilterPrefixes": {},
    "bgpPeers": {},
    "region": {},
    "awsDeviceV2": {},
    "awsLogicalDeviceId": {},
    "tags": {},
    "siteLinkEnabled": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualInterface|[VirtualInterface](#schemavirtualinterface)|false|none|Information about a virtual interface.|

<h2 id="tocS_CreateTransitVirtualInterfaceRequest">CreateTransitVirtualInterfaceRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatetransitvirtualinterfacerequest"></a>
<a id="schema_CreateTransitVirtualInterfaceRequest"></a>
<a id="tocScreatetransitvirtualinterfacerequest"></a>
<a id="tocscreatetransitvirtualinterfacerequest"></a>

```json
{
  "connectionId": {},
  "newTransitVirtualInterface": {
    "virtualInterfaceName": {},
    "vlan": {},
    "asn": {},
    "mtu": {},
    "authKey": {},
    "amazonAddress": {},
    "customerAddress": {},
    "addressFamily": {},
    "directConnectGatewayId": {},
    "tags": {},
    "enableSiteLink": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionId|object|true|none|none|
|newTransitVirtualInterface|object|true|none|none|

<h2 id="tocS_DeleteBGPPeerResponse">DeleteBGPPeerResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletebgppeerresponse"></a>
<a id="schema_DeleteBGPPeerResponse"></a>
<a id="tocSdeletebgppeerresponse"></a>
<a id="tocsdeletebgppeerresponse"></a>

```json
{
  "virtualInterface": {
    "ownerAccount": {},
    "virtualInterfaceId": {},
    "location": {},
    "connectionId": {},
    "virtualInterfaceType": {},
    "virtualInterfaceName": {},
    "vlan": {},
    "asn": {},
    "amazonSideAsn": {},
    "authKey": {},
    "amazonAddress": {},
    "customerAddress": {},
    "addressFamily": {},
    "virtualInterfaceState": {},
    "customerRouterConfig": {},
    "mtu": {},
    "jumboFrameCapable": {},
    "virtualGatewayId": {},
    "directConnectGatewayId": {},
    "routeFilterPrefixes": {},
    "bgpPeers": {},
    "region": {},
    "awsDeviceV2": {},
    "awsLogicalDeviceId": {},
    "tags": {},
    "siteLinkEnabled": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualInterface|object|false|none|none|

<h2 id="tocS_DeleteBGPPeerRequest">DeleteBGPPeerRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletebgppeerrequest"></a>
<a id="schema_DeleteBGPPeerRequest"></a>
<a id="tocSdeletebgppeerrequest"></a>
<a id="tocsdeletebgppeerrequest"></a>

```json
{
  "virtualInterfaceId": {},
  "asn": {},
  "customerAddress": {},
  "bgpPeerId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualInterfaceId|object|false|none|none|
|asn|object|false|none|none|
|customerAddress|object|false|none|none|
|bgpPeerId|object|false|none|none|

<h2 id="tocS_DeleteConnectionRequest">DeleteConnectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconnectionrequest"></a>
<a id="schema_DeleteConnectionRequest"></a>
<a id="tocSdeleteconnectionrequest"></a>
<a id="tocsdeleteconnectionrequest"></a>

```json
{
  "connectionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionId|object|true|none|none|

<h2 id="tocS_DeleteDirectConnectGatewayResult">DeleteDirectConnectGatewayResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletedirectconnectgatewayresult"></a>
<a id="schema_DeleteDirectConnectGatewayResult"></a>
<a id="tocSdeletedirectconnectgatewayresult"></a>
<a id="tocsdeletedirectconnectgatewayresult"></a>

```json
{
  "directConnectGateway": {
    "directConnectGatewayId": {},
    "directConnectGatewayName": {},
    "amazonSideAsn": {},
    "ownerAccount": {},
    "directConnectGatewayState": {},
    "stateChangeError": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|directConnectGateway|object|false|none|none|

<h2 id="tocS_DeleteDirectConnectGatewayRequest">DeleteDirectConnectGatewayRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedirectconnectgatewayrequest"></a>
<a id="schema_DeleteDirectConnectGatewayRequest"></a>
<a id="tocSdeletedirectconnectgatewayrequest"></a>
<a id="tocsdeletedirectconnectgatewayrequest"></a>

```json
{
  "directConnectGatewayId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|directConnectGatewayId|object|true|none|none|

<h2 id="tocS_DeleteDirectConnectGatewayAssociationResult">DeleteDirectConnectGatewayAssociationResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletedirectconnectgatewayassociationresult"></a>
<a id="schema_DeleteDirectConnectGatewayAssociationResult"></a>
<a id="tocSdeletedirectconnectgatewayassociationresult"></a>
<a id="tocsdeletedirectconnectgatewayassociationresult"></a>

```json
{
  "directConnectGatewayAssociation": {
    "directConnectGatewayId": {},
    "directConnectGatewayOwnerAccount": {},
    "associationState": {},
    "stateChangeError": {},
    "associatedGateway": {
      "id": {},
      "type": {},
      "ownerAccount": {},
      "region": {}
    },
    "associationId": {},
    "allowedPrefixesToDirectConnectGateway": {},
    "virtualGatewayId": {},
    "virtualGatewayRegion": {},
    "virtualGatewayOwnerAccount": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|directConnectGatewayAssociation|object|false|none|none|

<h2 id="tocS_DeleteDirectConnectGatewayAssociationRequest">DeleteDirectConnectGatewayAssociationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedirectconnectgatewayassociationrequest"></a>
<a id="schema_DeleteDirectConnectGatewayAssociationRequest"></a>
<a id="tocSdeletedirectconnectgatewayassociationrequest"></a>
<a id="tocsdeletedirectconnectgatewayassociationrequest"></a>

```json
{
  "associationId": {},
  "directConnectGatewayId": {},
  "virtualGatewayId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associationId|object|false|none|none|
|directConnectGatewayId|object|false|none|none|
|virtualGatewayId|object|false|none|none|

<h2 id="tocS_DeleteDirectConnectGatewayAssociationProposalResult">DeleteDirectConnectGatewayAssociationProposalResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletedirectconnectgatewayassociationproposalresult"></a>
<a id="schema_DeleteDirectConnectGatewayAssociationProposalResult"></a>
<a id="tocSdeletedirectconnectgatewayassociationproposalresult"></a>
<a id="tocsdeletedirectconnectgatewayassociationproposalresult"></a>

```json
{
  "directConnectGatewayAssociationProposal": {
    "proposalId": {},
    "directConnectGatewayId": {},
    "directConnectGatewayOwnerAccount": {},
    "proposalState": {},
    "associatedGateway": {
      "id": {},
      "type": {},
      "ownerAccount": {},
      "region": {}
    },
    "existingAllowedPrefixesToDirectConnectGateway": {},
    "requestedAllowedPrefixesToDirectConnectGateway": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|directConnectGatewayAssociationProposal|object|false|none|none|

<h2 id="tocS_DeleteDirectConnectGatewayAssociationProposalRequest">DeleteDirectConnectGatewayAssociationProposalRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedirectconnectgatewayassociationproposalrequest"></a>
<a id="schema_DeleteDirectConnectGatewayAssociationProposalRequest"></a>
<a id="tocSdeletedirectconnectgatewayassociationproposalrequest"></a>
<a id="tocsdeletedirectconnectgatewayassociationproposalrequest"></a>

```json
{
  "proposalId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|proposalId|object|true|none|none|

<h2 id="tocS_DeleteInterconnectResponse">DeleteInterconnectResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteinterconnectresponse"></a>
<a id="schema_DeleteInterconnectResponse"></a>
<a id="tocSdeleteinterconnectresponse"></a>
<a id="tocsdeleteinterconnectresponse"></a>

```json
{
  "interconnectState": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|interconnectState|object|false|none|none|

<h2 id="tocS_DeleteInterconnectRequest">DeleteInterconnectRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteinterconnectrequest"></a>
<a id="schema_DeleteInterconnectRequest"></a>
<a id="tocSdeleteinterconnectrequest"></a>
<a id="tocsdeleteinterconnectrequest"></a>

```json
{
  "interconnectId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|interconnectId|object|true|none|none|

<h2 id="tocS_DeleteLagRequest">DeleteLagRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletelagrequest"></a>
<a id="schema_DeleteLagRequest"></a>
<a id="tocSdeletelagrequest"></a>
<a id="tocsdeletelagrequest"></a>

```json
{
  "lagId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lagId|object|true|none|none|

<h2 id="tocS_DeleteVirtualInterfaceResponse">DeleteVirtualInterfaceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletevirtualinterfaceresponse"></a>
<a id="schema_DeleteVirtualInterfaceResponse"></a>
<a id="tocSdeletevirtualinterfaceresponse"></a>
<a id="tocsdeletevirtualinterfaceresponse"></a>

```json
{
  "virtualInterfaceState": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualInterfaceState|object|false|none|none|

<h2 id="tocS_DeleteVirtualInterfaceRequest">DeleteVirtualInterfaceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletevirtualinterfacerequest"></a>
<a id="schema_DeleteVirtualInterfaceRequest"></a>
<a id="tocSdeletevirtualinterfacerequest"></a>
<a id="tocsdeletevirtualinterfacerequest"></a>

```json
{
  "virtualInterfaceId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualInterfaceId|object|true|none|none|

<h2 id="tocS_DescribeConnectionLoaResponse">DescribeConnectionLoaResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconnectionloaresponse"></a>
<a id="schema_DescribeConnectionLoaResponse"></a>
<a id="tocSdescribeconnectionloaresponse"></a>
<a id="tocsdescribeconnectionloaresponse"></a>

```json
{
  "loa": {
    "loaContent": {},
    "loaContentType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loa|object|false|none|none|

<h2 id="tocS_DescribeConnectionLoaRequest">DescribeConnectionLoaRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconnectionloarequest"></a>
<a id="schema_DescribeConnectionLoaRequest"></a>
<a id="tocSdescribeconnectionloarequest"></a>
<a id="tocsdescribeconnectionloarequest"></a>

```json
{
  "connectionId": {},
  "providerName": {},
  "loaContentType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionId|object|true|none|none|
|providerName|object|false|none|none|
|loaContentType|object|false|none|none|

<h2 id="tocS_Connections">Connections</h2>
<!-- backwards compatibility -->
<a id="schemaconnections"></a>
<a id="schema_Connections"></a>
<a id="tocSconnections"></a>
<a id="tocsconnections"></a>

```json
{
  "connections": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connections|object|false|none|none|

<h2 id="tocS_DescribeConnectionsRequest">DescribeConnectionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconnectionsrequest"></a>
<a id="schema_DescribeConnectionsRequest"></a>
<a id="tocSdescribeconnectionsrequest"></a>
<a id="tocsdescribeconnectionsrequest"></a>

```json
{
  "connectionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionId|object|false|none|none|

<h2 id="tocS_DescribeConnectionsOnInterconnectRequest">DescribeConnectionsOnInterconnectRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconnectionsoninterconnectrequest"></a>
<a id="schema_DescribeConnectionsOnInterconnectRequest"></a>
<a id="tocSdescribeconnectionsoninterconnectrequest"></a>
<a id="tocsdescribeconnectionsoninterconnectrequest"></a>

```json
{
  "interconnectId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|interconnectId|object|true|none|none|

<h2 id="tocS_DescribeCustomerMetadataResponse">DescribeCustomerMetadataResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribecustomermetadataresponse"></a>
<a id="schema_DescribeCustomerMetadataResponse"></a>
<a id="tocSdescribecustomermetadataresponse"></a>
<a id="tocsdescribecustomermetadataresponse"></a>

```json
{
  "agreements": {},
  "nniPartnerType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agreements|object|false|none|none|
|nniPartnerType|object|false|none|none|

<h2 id="tocS_DescribeDirectConnectGatewayAssociationProposalsResult">DescribeDirectConnectGatewayAssociationProposalsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribedirectconnectgatewayassociationproposalsresult"></a>
<a id="schema_DescribeDirectConnectGatewayAssociationProposalsResult"></a>
<a id="tocSdescribedirectconnectgatewayassociationproposalsresult"></a>
<a id="tocsdescribedirectconnectgatewayassociationproposalsresult"></a>

```json
{
  "directConnectGatewayAssociationProposals": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|directConnectGatewayAssociationProposals|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_DescribeDirectConnectGatewayAssociationProposalsRequest">DescribeDirectConnectGatewayAssociationProposalsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedirectconnectgatewayassociationproposalsrequest"></a>
<a id="schema_DescribeDirectConnectGatewayAssociationProposalsRequest"></a>
<a id="tocSdescribedirectconnectgatewayassociationproposalsrequest"></a>
<a id="tocsdescribedirectconnectgatewayassociationproposalsrequest"></a>

```json
{
  "directConnectGatewayId": {},
  "proposalId": {},
  "associatedGatewayId": {},
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|directConnectGatewayId|object|false|none|none|
|proposalId|object|false|none|none|
|associatedGatewayId|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_DescribeDirectConnectGatewayAssociationsResult">DescribeDirectConnectGatewayAssociationsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribedirectconnectgatewayassociationsresult"></a>
<a id="schema_DescribeDirectConnectGatewayAssociationsResult"></a>
<a id="tocSdescribedirectconnectgatewayassociationsresult"></a>
<a id="tocsdescribedirectconnectgatewayassociationsresult"></a>

```json
{
  "directConnectGatewayAssociations": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|directConnectGatewayAssociations|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_DescribeDirectConnectGatewayAssociationsRequest">DescribeDirectConnectGatewayAssociationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedirectconnectgatewayassociationsrequest"></a>
<a id="schema_DescribeDirectConnectGatewayAssociationsRequest"></a>
<a id="tocSdescribedirectconnectgatewayassociationsrequest"></a>
<a id="tocsdescribedirectconnectgatewayassociationsrequest"></a>

```json
{
  "associationId": {},
  "associatedGatewayId": {},
  "directConnectGatewayId": {},
  "maxResults": {},
  "nextToken": {},
  "virtualGatewayId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associationId|object|false|none|none|
|associatedGatewayId|object|false|none|none|
|directConnectGatewayId|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|
|virtualGatewayId|object|false|none|none|

<h2 id="tocS_DescribeDirectConnectGatewayAttachmentsResult">DescribeDirectConnectGatewayAttachmentsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribedirectconnectgatewayattachmentsresult"></a>
<a id="schema_DescribeDirectConnectGatewayAttachmentsResult"></a>
<a id="tocSdescribedirectconnectgatewayattachmentsresult"></a>
<a id="tocsdescribedirectconnectgatewayattachmentsresult"></a>

```json
{
  "directConnectGatewayAttachments": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|directConnectGatewayAttachments|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_DescribeDirectConnectGatewayAttachmentsRequest">DescribeDirectConnectGatewayAttachmentsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedirectconnectgatewayattachmentsrequest"></a>
<a id="schema_DescribeDirectConnectGatewayAttachmentsRequest"></a>
<a id="tocSdescribedirectconnectgatewayattachmentsrequest"></a>
<a id="tocsdescribedirectconnectgatewayattachmentsrequest"></a>

```json
{
  "directConnectGatewayId": {},
  "virtualInterfaceId": {},
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|directConnectGatewayId|object|false|none|none|
|virtualInterfaceId|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_DescribeDirectConnectGatewaysResult">DescribeDirectConnectGatewaysResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribedirectconnectgatewaysresult"></a>
<a id="schema_DescribeDirectConnectGatewaysResult"></a>
<a id="tocSdescribedirectconnectgatewaysresult"></a>
<a id="tocsdescribedirectconnectgatewaysresult"></a>

```json
{
  "directConnectGateways": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|directConnectGateways|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_DescribeDirectConnectGatewaysRequest">DescribeDirectConnectGatewaysRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedirectconnectgatewaysrequest"></a>
<a id="schema_DescribeDirectConnectGatewaysRequest"></a>
<a id="tocSdescribedirectconnectgatewaysrequest"></a>
<a id="tocsdescribedirectconnectgatewaysrequest"></a>

```json
{
  "directConnectGatewayId": {},
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|directConnectGatewayId|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_DescribeHostedConnectionsRequest">DescribeHostedConnectionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribehostedconnectionsrequest"></a>
<a id="schema_DescribeHostedConnectionsRequest"></a>
<a id="tocSdescribehostedconnectionsrequest"></a>
<a id="tocsdescribehostedconnectionsrequest"></a>

```json
{
  "connectionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionId|object|true|none|none|

<h2 id="tocS_DescribeInterconnectLoaResponse">DescribeInterconnectLoaResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeinterconnectloaresponse"></a>
<a id="schema_DescribeInterconnectLoaResponse"></a>
<a id="tocSdescribeinterconnectloaresponse"></a>
<a id="tocsdescribeinterconnectloaresponse"></a>

```json
{
  "loa": {
    "loaContent": {},
    "loaContentType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loa|object|false|none|none|

<h2 id="tocS_DescribeInterconnectLoaRequest">DescribeInterconnectLoaRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeinterconnectloarequest"></a>
<a id="schema_DescribeInterconnectLoaRequest"></a>
<a id="tocSdescribeinterconnectloarequest"></a>
<a id="tocsdescribeinterconnectloarequest"></a>

```json
{
  "interconnectId": {},
  "providerName": {},
  "loaContentType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|interconnectId|object|true|none|none|
|providerName|object|false|none|none|
|loaContentType|object|false|none|none|

<h2 id="tocS_Interconnects">Interconnects</h2>
<!-- backwards compatibility -->
<a id="schemainterconnects"></a>
<a id="schema_Interconnects"></a>
<a id="tocSinterconnects"></a>
<a id="tocsinterconnects"></a>

```json
{
  "interconnects": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|interconnects|object|false|none|none|

<h2 id="tocS_DescribeInterconnectsRequest">DescribeInterconnectsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeinterconnectsrequest"></a>
<a id="schema_DescribeInterconnectsRequest"></a>
<a id="tocSdescribeinterconnectsrequest"></a>
<a id="tocsdescribeinterconnectsrequest"></a>

```json
{
  "interconnectId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|interconnectId|object|false|none|none|

<h2 id="tocS_Lags">Lags</h2>
<!-- backwards compatibility -->
<a id="schemalags"></a>
<a id="schema_Lags"></a>
<a id="tocSlags"></a>
<a id="tocslags"></a>

```json
{
  "lags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lags|object|false|none|none|

<h2 id="tocS_DescribeLagsRequest">DescribeLagsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribelagsrequest"></a>
<a id="schema_DescribeLagsRequest"></a>
<a id="tocSdescribelagsrequest"></a>
<a id="tocsdescribelagsrequest"></a>

```json
{
  "lagId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lagId|object|false|none|none|

<h2 id="tocS_Loa">Loa</h2>
<!-- backwards compatibility -->
<a id="schemaloa"></a>
<a id="schema_Loa"></a>
<a id="tocSloa"></a>
<a id="tocsloa"></a>

```json
{
  "loaContent": {},
  "loaContentType": {}
}
```

Information about a Letter of Authorization - Connecting Facility Assignment (LOA-CFA) for a connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loaContent|object|false|none|none|
|loaContentType|object|false|none|none|

<h2 id="tocS_DescribeLoaRequest">DescribeLoaRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeloarequest"></a>
<a id="schema_DescribeLoaRequest"></a>
<a id="tocSdescribeloarequest"></a>
<a id="tocsdescribeloarequest"></a>

```json
{
  "connectionId": {},
  "providerName": {},
  "loaContentType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionId|object|true|none|none|
|providerName|object|false|none|none|
|loaContentType|object|false|none|none|

<h2 id="tocS_Locations">Locations</h2>
<!-- backwards compatibility -->
<a id="schemalocations"></a>
<a id="schema_Locations"></a>
<a id="tocSlocations"></a>
<a id="tocslocations"></a>

```json
{
  "locations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locations|object|false|none|none|

<h2 id="tocS_DescribeRouterConfigurationResponse">DescribeRouterConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescriberouterconfigurationresponse"></a>
<a id="schema_DescribeRouterConfigurationResponse"></a>
<a id="tocSdescriberouterconfigurationresponse"></a>
<a id="tocsdescriberouterconfigurationresponse"></a>

```json
{
  "customerRouterConfig": {},
  "router": {
    "vendor": {},
    "platform": {},
    "software": {},
    "xsltTemplateName": {},
    "xsltTemplateNameForMacSec": {},
    "routerTypeIdentifier": {}
  },
  "virtualInterfaceId": {},
  "virtualInterfaceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customerRouterConfig|object|false|none|none|
|router|object|false|none|none|
|virtualInterfaceId|object|false|none|none|
|virtualInterfaceName|object|false|none|none|

<h2 id="tocS_DescribeRouterConfigurationRequest">DescribeRouterConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescriberouterconfigurationrequest"></a>
<a id="schema_DescribeRouterConfigurationRequest"></a>
<a id="tocSdescriberouterconfigurationrequest"></a>
<a id="tocsdescriberouterconfigurationrequest"></a>

```json
{
  "virtualInterfaceId": {},
  "routerTypeIdentifier": {}
}
```

Provides the details about a virtual interface's router.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualInterfaceId|object|true|none|none|
|routerTypeIdentifier|object|false|none|none|

<h2 id="tocS_DescribeTagsResponse">DescribeTagsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribetagsresponse"></a>
<a id="schema_DescribeTagsResponse"></a>
<a id="tocSdescribetagsresponse"></a>
<a id="tocsdescribetagsresponse"></a>

```json
{
  "resourceTags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceTags|object|false|none|none|

<h2 id="tocS_DescribeTagsRequest">DescribeTagsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribetagsrequest"></a>
<a id="schema_DescribeTagsRequest"></a>
<a id="tocSdescribetagsrequest"></a>
<a id="tocsdescribetagsrequest"></a>

```json
{
  "resourceArns": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceArns|object|true|none|none|

<h2 id="tocS_VirtualGateways">VirtualGateways</h2>
<!-- backwards compatibility -->
<a id="schemavirtualgateways"></a>
<a id="schema_VirtualGateways"></a>
<a id="tocSvirtualgateways"></a>
<a id="tocsvirtualgateways"></a>

```json
{
  "virtualGateways": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualGateways|object|false|none|none|

<h2 id="tocS_VirtualInterfaces">VirtualInterfaces</h2>
<!-- backwards compatibility -->
<a id="schemavirtualinterfaces"></a>
<a id="schema_VirtualInterfaces"></a>
<a id="tocSvirtualinterfaces"></a>
<a id="tocsvirtualinterfaces"></a>

```json
{
  "virtualInterfaces": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualInterfaces|object|false|none|none|

<h2 id="tocS_DescribeVirtualInterfacesRequest">DescribeVirtualInterfacesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribevirtualinterfacesrequest"></a>
<a id="schema_DescribeVirtualInterfacesRequest"></a>
<a id="tocSdescribevirtualinterfacesrequest"></a>
<a id="tocsdescribevirtualinterfacesrequest"></a>

```json
{
  "connectionId": {},
  "virtualInterfaceId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionId|object|false|none|none|
|virtualInterfaceId|object|false|none|none|

<h2 id="tocS_DisassociateConnectionFromLagRequest">DisassociateConnectionFromLagRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateconnectionfromlagrequest"></a>
<a id="schema_DisassociateConnectionFromLagRequest"></a>
<a id="tocSdisassociateconnectionfromlagrequest"></a>
<a id="tocsdisassociateconnectionfromlagrequest"></a>

```json
{
  "connectionId": {},
  "lagId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionId|object|true|none|none|
|lagId|object|true|none|none|

<h2 id="tocS_DisassociateMacSecKeyResponse">DisassociateMacSecKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatemacseckeyresponse"></a>
<a id="schema_DisassociateMacSecKeyResponse"></a>
<a id="tocSdisassociatemacseckeyresponse"></a>
<a id="tocsdisassociatemacseckeyresponse"></a>

```json
{
  "connectionId": {},
  "macSecKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionId|object|false|none|none|
|macSecKeys|object|false|none|none|

<h2 id="tocS_DisassociateMacSecKeyRequest">DisassociateMacSecKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatemacseckeyrequest"></a>
<a id="schema_DisassociateMacSecKeyRequest"></a>
<a id="tocSdisassociatemacseckeyrequest"></a>
<a id="tocsdisassociatemacseckeyrequest"></a>

```json
{
  "connectionId": {},
  "secretARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionId|object|true|none|none|
|secretARN|object|true|none|none|

<h2 id="tocS_ListVirtualInterfaceTestHistoryResponse">ListVirtualInterfaceTestHistoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistvirtualinterfacetesthistoryresponse"></a>
<a id="schema_ListVirtualInterfaceTestHistoryResponse"></a>
<a id="tocSlistvirtualinterfacetesthistoryresponse"></a>
<a id="tocslistvirtualinterfacetesthistoryresponse"></a>

```json
{
  "virtualInterfaceTestHistory": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualInterfaceTestHistory|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListVirtualInterfaceTestHistoryRequest">ListVirtualInterfaceTestHistoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistvirtualinterfacetesthistoryrequest"></a>
<a id="schema_ListVirtualInterfaceTestHistoryRequest"></a>
<a id="tocSlistvirtualinterfacetesthistoryrequest"></a>
<a id="tocslistvirtualinterfacetesthistoryrequest"></a>

```json
{
  "testId": {},
  "virtualInterfaceId": {},
  "bgpPeers": {},
  "status": {},
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|testId|object|false|none|none|
|virtualInterfaceId|object|false|none|none|
|bgpPeers|object|false|none|none|
|status|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_StartBgpFailoverTestResponse">StartBgpFailoverTestResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartbgpfailovertestresponse"></a>
<a id="schema_StartBgpFailoverTestResponse"></a>
<a id="tocSstartbgpfailovertestresponse"></a>
<a id="tocsstartbgpfailovertestresponse"></a>

```json
{
  "virtualInterfaceTest": {
    "testId": {},
    "virtualInterfaceId": {},
    "bgpPeers": {},
    "status": {},
    "ownerAccount": {},
    "testDurationInMinutes": {},
    "startTime": {},
    "endTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualInterfaceTest|object|false|none|none|

<h2 id="tocS_StartBgpFailoverTestRequest">StartBgpFailoverTestRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartbgpfailovertestrequest"></a>
<a id="schema_StartBgpFailoverTestRequest"></a>
<a id="tocSstartbgpfailovertestrequest"></a>
<a id="tocsstartbgpfailovertestrequest"></a>

```json
{
  "virtualInterfaceId": {},
  "bgpPeers": {},
  "testDurationInMinutes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualInterfaceId|object|true|none|none|
|bgpPeers|object|false|none|none|
|testDurationInMinutes|object|false|none|none|

<h2 id="tocS_StopBgpFailoverTestResponse">StopBgpFailoverTestResponse</h2>
<!-- backwards compatibility -->
<a id="schemastopbgpfailovertestresponse"></a>
<a id="schema_StopBgpFailoverTestResponse"></a>
<a id="tocSstopbgpfailovertestresponse"></a>
<a id="tocsstopbgpfailovertestresponse"></a>

```json
{
  "virtualInterfaceTest": {
    "testId": {},
    "virtualInterfaceId": {},
    "bgpPeers": {},
    "status": {},
    "ownerAccount": {},
    "testDurationInMinutes": {},
    "startTime": {},
    "endTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualInterfaceTest|object|false|none|none|

<h2 id="tocS_StopBgpFailoverTestRequest">StopBgpFailoverTestRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopbgpfailovertestrequest"></a>
<a id="schema_StopBgpFailoverTestRequest"></a>
<a id="tocSstopbgpfailovertestrequest"></a>
<a id="tocsstopbgpfailovertestrequest"></a>

```json
{
  "virtualInterfaceId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualInterfaceId|object|true|none|none|

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

<h2 id="tocS_UpdateConnectionRequest">UpdateConnectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconnectionrequest"></a>
<a id="schema_UpdateConnectionRequest"></a>
<a id="tocSupdateconnectionrequest"></a>
<a id="tocsupdateconnectionrequest"></a>

```json
{
  "connectionId": {},
  "connectionName": {},
  "encryptionMode": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionId|object|true|none|none|
|connectionName|object|false|none|none|
|encryptionMode|object|false|none|none|

<h2 id="tocS_UpdateDirectConnectGatewayResponse">UpdateDirectConnectGatewayResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedirectconnectgatewayresponse"></a>
<a id="schema_UpdateDirectConnectGatewayResponse"></a>
<a id="tocSupdatedirectconnectgatewayresponse"></a>
<a id="tocsupdatedirectconnectgatewayresponse"></a>

```json
{
  "directConnectGateway": {
    "directConnectGatewayId": {},
    "directConnectGatewayName": {},
    "amazonSideAsn": {},
    "ownerAccount": {},
    "directConnectGatewayState": {},
    "stateChangeError": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|directConnectGateway|[DirectConnectGateway](#schemadirectconnectgateway)|false|none|Information about a Direct Connect gateway, which enables you to connect virtual interfaces and virtual private gateway or transit gateways.|

<h2 id="tocS_UpdateDirectConnectGatewayRequest">UpdateDirectConnectGatewayRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedirectconnectgatewayrequest"></a>
<a id="schema_UpdateDirectConnectGatewayRequest"></a>
<a id="tocSupdatedirectconnectgatewayrequest"></a>
<a id="tocsupdatedirectconnectgatewayrequest"></a>

```json
{
  "directConnectGatewayId": {},
  "newDirectConnectGatewayName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|directConnectGatewayId|object|true|none|none|
|newDirectConnectGatewayName|object|true|none|none|

<h2 id="tocS_UpdateDirectConnectGatewayAssociationResult">UpdateDirectConnectGatewayAssociationResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedirectconnectgatewayassociationresult"></a>
<a id="schema_UpdateDirectConnectGatewayAssociationResult"></a>
<a id="tocSupdatedirectconnectgatewayassociationresult"></a>
<a id="tocsupdatedirectconnectgatewayassociationresult"></a>

```json
{
  "directConnectGatewayAssociation": {
    "directConnectGatewayId": {},
    "directConnectGatewayOwnerAccount": {},
    "associationState": {},
    "stateChangeError": {},
    "associatedGateway": {
      "id": {},
      "type": {},
      "ownerAccount": {},
      "region": {}
    },
    "associationId": {},
    "allowedPrefixesToDirectConnectGateway": {},
    "virtualGatewayId": {},
    "virtualGatewayRegion": {},
    "virtualGatewayOwnerAccount": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|directConnectGatewayAssociation|[DirectConnectGatewayAssociation](#schemadirectconnectgatewayassociation)|false|none|Information about an association between a Direct Connect gateway and a virtual private gateway or transit gateway.|

<h2 id="tocS_UpdateDirectConnectGatewayAssociationRequest">UpdateDirectConnectGatewayAssociationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedirectconnectgatewayassociationrequest"></a>
<a id="schema_UpdateDirectConnectGatewayAssociationRequest"></a>
<a id="tocSupdatedirectconnectgatewayassociationrequest"></a>
<a id="tocsupdatedirectconnectgatewayassociationrequest"></a>

```json
{
  "associationId": {},
  "addAllowedPrefixesToDirectConnectGateway": {},
  "removeAllowedPrefixesToDirectConnectGateway": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associationId|object|false|none|none|
|addAllowedPrefixesToDirectConnectGateway|object|false|none|none|
|removeAllowedPrefixesToDirectConnectGateway|object|false|none|none|

<h2 id="tocS_UpdateLagRequest">UpdateLagRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatelagrequest"></a>
<a id="schema_UpdateLagRequest"></a>
<a id="tocSupdatelagrequest"></a>
<a id="tocsupdatelagrequest"></a>

```json
{
  "lagId": {},
  "lagName": {},
  "minimumLinks": {},
  "encryptionMode": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lagId|object|true|none|none|
|lagName|object|false|none|none|
|minimumLinks|object|false|none|none|
|encryptionMode|object|false|none|none|

<h2 id="tocS_UpdateVirtualInterfaceAttributesRequest">UpdateVirtualInterfaceAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatevirtualinterfaceattributesrequest"></a>
<a id="schema_UpdateVirtualInterfaceAttributesRequest"></a>
<a id="tocSupdatevirtualinterfaceattributesrequest"></a>
<a id="tocsupdatevirtualinterfaceattributesrequest"></a>

```json
{
  "virtualInterfaceId": {},
  "mtu": {},
  "enableSiteLink": {},
  "virtualInterfaceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualInterfaceId|object|true|none|none|
|mtu|object|false|none|none|
|enableSiteLink|object|false|none|none|
|virtualInterfaceName|object|false|none|none|

<h2 id="tocS_ASN">ASN</h2>
<!-- backwards compatibility -->
<a id="schemaasn"></a>
<a id="schema_ASN"></a>
<a id="tocSasn"></a>
<a id="tocsasn"></a>

```json
0
```

<h2 id="tocS_DirectConnectGatewayId">DirectConnectGatewayId</h2>
<!-- backwards compatibility -->
<a id="schemadirectconnectgatewayid"></a>
<a id="schema_DirectConnectGatewayId"></a>
<a id="tocSdirectconnectgatewayid"></a>
<a id="tocsdirectconnectgatewayid"></a>

```json
"string"
```

<h2 id="tocS_DirectConnectGatewayAssociationProposalId">DirectConnectGatewayAssociationProposalId</h2>
<!-- backwards compatibility -->
<a id="schemadirectconnectgatewayassociationproposalid"></a>
<a id="schema_DirectConnectGatewayAssociationProposalId"></a>
<a id="tocSdirectconnectgatewayassociationproposalid"></a>
<a id="tocsdirectconnectgatewayassociationproposalid"></a>

```json
"string"
```

<h2 id="tocS_OwnerAccount">OwnerAccount</h2>
<!-- backwards compatibility -->
<a id="schemaowneraccount"></a>
<a id="schema_OwnerAccount"></a>
<a id="tocSowneraccount"></a>
<a id="tocsowneraccount"></a>

```json
"string"
```

<h2 id="tocS_RouteFilterPrefixList">RouteFilterPrefixList</h2>
<!-- backwards compatibility -->
<a id="schemaroutefilterprefixlist"></a>
<a id="schema_RouteFilterPrefixList"></a>
<a id="tocSroutefilterprefixlist"></a>
<a id="tocsroutefilterprefixlist"></a>

```json
[
  {
    "cidr": {}
  }
]
```

<h2 id="tocS_DirectConnectGatewayAssociation">DirectConnectGatewayAssociation</h2>
<!-- backwards compatibility -->
<a id="schemadirectconnectgatewayassociation"></a>
<a id="schema_DirectConnectGatewayAssociation"></a>
<a id="tocSdirectconnectgatewayassociation"></a>
<a id="tocsdirectconnectgatewayassociation"></a>

```json
{
  "directConnectGatewayId": {},
  "directConnectGatewayOwnerAccount": {},
  "associationState": {},
  "stateChangeError": {},
  "associatedGateway": {
    "id": {},
    "type": {},
    "ownerAccount": {},
    "region": {}
  },
  "associationId": {},
  "allowedPrefixesToDirectConnectGateway": {},
  "virtualGatewayId": {},
  "virtualGatewayRegion": {},
  "virtualGatewayOwnerAccount": {}
}
```

Information about an association between a Direct Connect gateway and a virtual private gateway or transit gateway.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|directConnectGatewayId|object|false|none|none|
|directConnectGatewayOwnerAccount|object|false|none|none|
|associationState|object|false|none|none|
|stateChangeError|object|false|none|none|
|associatedGateway|object|false|none|none|
|associationId|object|false|none|none|
|allowedPrefixesToDirectConnectGateway|object|false|none|none|
|virtualGatewayId|object|false|none|none|
|virtualGatewayRegion|object|false|none|none|
|virtualGatewayOwnerAccount|object|false|none|none|

<h2 id="tocS_AddressFamily">AddressFamily</h2>
<!-- backwards compatibility -->
<a id="schemaaddressfamily"></a>
<a id="schema_AddressFamily"></a>
<a id="tocSaddressfamily"></a>
<a id="tocsaddressfamily"></a>

```json
"ipv4"
```

<h2 id="tocS_CustomerAgreement">CustomerAgreement</h2>
<!-- backwards compatibility -->
<a id="schemacustomeragreement"></a>
<a id="schema_CustomerAgreement"></a>
<a id="tocScustomeragreement"></a>
<a id="tocscustomeragreement"></a>

```json
{
  "agreementName": {},
  "status": {}
}
```

The name and status of a customer agreement.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agreementName|object|false|none|none|
|status|object|false|none|none|

<h2 id="tocS_AgreementList">AgreementList</h2>
<!-- backwards compatibility -->
<a id="schemaagreementlist"></a>
<a id="schema_AgreementList"></a>
<a id="tocSagreementlist"></a>
<a id="tocsagreementlist"></a>

```json
[
  {
    "agreementName": {},
    "status": {}
  }
]
```

<h2 id="tocS_AgreementName">AgreementName</h2>
<!-- backwards compatibility -->
<a id="schemaagreementname"></a>
<a id="schema_AgreementName"></a>
<a id="tocSagreementname"></a>
<a id="tocsagreementname"></a>

```json
"string"
```

<h2 id="tocS_Bandwidth">Bandwidth</h2>
<!-- backwards compatibility -->
<a id="schemabandwidth"></a>
<a id="schema_Bandwidth"></a>
<a id="tocSbandwidth"></a>
<a id="tocsbandwidth"></a>

```json
"string"
```

<h2 id="tocS_ConnectionName">ConnectionName</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionname"></a>
<a id="schema_ConnectionName"></a>
<a id="tocSconnectionname"></a>
<a id="tocsconnectionname"></a>

```json
"string"
```

<h2 id="tocS_InterconnectId">InterconnectId</h2>
<!-- backwards compatibility -->
<a id="schemainterconnectid"></a>
<a id="schema_InterconnectId"></a>
<a id="tocSinterconnectid"></a>
<a id="tocsinterconnectid"></a>

```json
"string"
```

<h2 id="tocS_VLAN">VLAN</h2>
<!-- backwards compatibility -->
<a id="schemavlan"></a>
<a id="schema_VLAN"></a>
<a id="tocSvlan"></a>
<a id="tocsvlan"></a>

```json
0
```

<h2 id="tocS_ConnectionId">ConnectionId</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionid"></a>
<a id="schema_ConnectionId"></a>
<a id="tocSconnectionid"></a>
<a id="tocsconnectionid"></a>

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
    "key": {},
    "value": {}
  }
]
```

<h2 id="tocS_NewPrivateVirtualInterfaceAllocation">NewPrivateVirtualInterfaceAllocation</h2>
<!-- backwards compatibility -->
<a id="schemanewprivatevirtualinterfaceallocation"></a>
<a id="schema_NewPrivateVirtualInterfaceAllocation"></a>
<a id="tocSnewprivatevirtualinterfaceallocation"></a>
<a id="tocsnewprivatevirtualinterfaceallocation"></a>

```json
{
  "virtualInterfaceName": {},
  "vlan": {},
  "asn": {},
  "mtu": {},
  "authKey": {},
  "amazonAddress": {},
  "addressFamily": {},
  "customerAddress": {},
  "tags": {}
}
```

Information about a private virtual interface to be provisioned on a connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualInterfaceName|object|true|none|none|
|vlan|object|true|none|none|
|asn|object|true|none|none|
|mtu|object|false|none|none|
|authKey|object|false|none|none|
|amazonAddress|object|false|none|none|
|addressFamily|object|false|none|none|
|customerAddress|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_NewPublicVirtualInterfaceAllocation">NewPublicVirtualInterfaceAllocation</h2>
<!-- backwards compatibility -->
<a id="schemanewpublicvirtualinterfaceallocation"></a>
<a id="schema_NewPublicVirtualInterfaceAllocation"></a>
<a id="tocSnewpublicvirtualinterfaceallocation"></a>
<a id="tocsnewpublicvirtualinterfaceallocation"></a>

```json
{
  "virtualInterfaceName": {},
  "vlan": {},
  "asn": {},
  "authKey": {},
  "amazonAddress": {},
  "customerAddress": {},
  "addressFamily": {},
  "routeFilterPrefixes": {},
  "tags": {}
}
```

Information about a public virtual interface to be provisioned on a connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualInterfaceName|object|true|none|none|
|vlan|object|true|none|none|
|asn|object|true|none|none|
|authKey|object|false|none|none|
|amazonAddress|object|false|none|none|
|customerAddress|object|false|none|none|
|addressFamily|object|false|none|none|
|routeFilterPrefixes|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_NewTransitVirtualInterfaceAllocation">NewTransitVirtualInterfaceAllocation</h2>
<!-- backwards compatibility -->
<a id="schemanewtransitvirtualinterfaceallocation"></a>
<a id="schema_NewTransitVirtualInterfaceAllocation"></a>
<a id="tocSnewtransitvirtualinterfaceallocation"></a>
<a id="tocsnewtransitvirtualinterfaceallocation"></a>

```json
{
  "virtualInterfaceName": {},
  "vlan": {},
  "asn": {},
  "mtu": {},
  "authKey": {},
  "amazonAddress": {},
  "customerAddress": {},
  "addressFamily": {},
  "tags": {}
}
```

Information about a transit virtual interface to be provisioned on a connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualInterfaceName|object|false|none|none|
|vlan|object|false|none|none|
|asn|object|false|none|none|
|mtu|object|false|none|none|
|authKey|object|false|none|none|
|amazonAddress|object|false|none|none|
|customerAddress|object|false|none|none|
|addressFamily|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_AmazonAddress">AmazonAddress</h2>
<!-- backwards compatibility -->
<a id="schemaamazonaddress"></a>
<a id="schema_AmazonAddress"></a>
<a id="tocSamazonaddress"></a>
<a id="tocsamazonaddress"></a>

```json
"string"
```

<h2 id="tocS_LagId">LagId</h2>
<!-- backwards compatibility -->
<a id="schemalagid"></a>
<a id="schema_LagId"></a>
<a id="tocSlagid"></a>
<a id="tocslagid"></a>

```json
"string"
```

<h2 id="tocS_SecretARN">SecretARN</h2>
<!-- backwards compatibility -->
<a id="schemasecretarn"></a>
<a id="schema_SecretARN"></a>
<a id="tocSsecretarn"></a>
<a id="tocssecretarn"></a>

```json
"string"
```

<h2 id="tocS_Ckn">Ckn</h2>
<!-- backwards compatibility -->
<a id="schemackn"></a>
<a id="schema_Ckn"></a>
<a id="tocSckn"></a>
<a id="tocsckn"></a>

```json
"string"
```

<h2 id="tocS_Cak">Cak</h2>
<!-- backwards compatibility -->
<a id="schemacak"></a>
<a id="schema_Cak"></a>
<a id="tocScak"></a>
<a id="tocscak"></a>

```json
"string"
```

<h2 id="tocS_MacSecKeyList">MacSecKeyList</h2>
<!-- backwards compatibility -->
<a id="schemamacseckeylist"></a>
<a id="schema_MacSecKeyList"></a>
<a id="tocSmacseckeylist"></a>
<a id="tocsmacseckeylist"></a>

```json
[
  {
    "secretARN": {},
    "ckn": {},
    "state": {},
    "startOn": {}
  }
]
```

<h2 id="tocS_VirtualInterfaceId">VirtualInterfaceId</h2>
<!-- backwards compatibility -->
<a id="schemavirtualinterfaceid"></a>
<a id="schema_VirtualInterfaceId"></a>
<a id="tocSvirtualinterfaceid"></a>
<a id="tocsvirtualinterfaceid"></a>

```json
"string"
```

<h2 id="tocS_GatewayIdentifier">GatewayIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemagatewayidentifier"></a>
<a id="schema_GatewayIdentifier"></a>
<a id="tocSgatewayidentifier"></a>
<a id="tocsgatewayidentifier"></a>

```json
"string"
```

<h2 id="tocS_GatewayType">GatewayType</h2>
<!-- backwards compatibility -->
<a id="schemagatewaytype"></a>
<a id="schema_GatewayType"></a>
<a id="tocSgatewaytype"></a>
<a id="tocsgatewaytype"></a>

```json
"virtualPrivateGateway"
```

<h2 id="tocS_Region">Region</h2>
<!-- backwards compatibility -->
<a id="schemaregion"></a>
<a id="schema_Region"></a>
<a id="tocSregion"></a>
<a id="tocsregion"></a>

```json
"string"
```

<h2 id="tocS_AssociatedGateway">AssociatedGateway</h2>
<!-- backwards compatibility -->
<a id="schemaassociatedgateway"></a>
<a id="schema_AssociatedGateway"></a>
<a id="tocSassociatedgateway"></a>
<a id="tocsassociatedgateway"></a>

```json
{
  "id": {},
  "type": {},
  "ownerAccount": {},
  "region": {}
}
```

Information about the associated gateway.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|type|object|false|none|none|
|ownerAccount|object|false|none|none|
|region|object|false|none|none|

<h2 id="tocS_AssociatedGatewayId">AssociatedGatewayId</h2>
<!-- backwards compatibility -->
<a id="schemaassociatedgatewayid"></a>
<a id="schema_AssociatedGatewayId"></a>
<a id="tocSassociatedgatewayid"></a>
<a id="tocsassociatedgatewayid"></a>

```json
"string"
```

<h2 id="tocS_PortSpeed">PortSpeed</h2>
<!-- backwards compatibility -->
<a id="schemaportspeed"></a>
<a id="schema_PortSpeed"></a>
<a id="tocSportspeed"></a>
<a id="tocsportspeed"></a>

```json
"string"
```

<h2 id="tocS_AvailableMacSecPortSpeeds">AvailableMacSecPortSpeeds</h2>
<!-- backwards compatibility -->
<a id="schemaavailablemacsecportspeeds"></a>
<a id="schema_AvailableMacSecPortSpeeds"></a>
<a id="tocSavailablemacsecportspeeds"></a>
<a id="tocsavailablemacsecportspeeds"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AvailablePortSpeeds">AvailablePortSpeeds</h2>
<!-- backwards compatibility -->
<a id="schemaavailableportspeeds"></a>
<a id="schema_AvailablePortSpeeds"></a>
<a id="tocSavailableportspeeds"></a>
<a id="tocsavailableportspeeds"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AwsDevice">AwsDevice</h2>
<!-- backwards compatibility -->
<a id="schemaawsdevice"></a>
<a id="schema_AwsDevice"></a>
<a id="tocSawsdevice"></a>
<a id="tocsawsdevice"></a>

```json
"string"
```

<h2 id="tocS_AwsDeviceV2">AwsDeviceV2</h2>
<!-- backwards compatibility -->
<a id="schemaawsdevicev2"></a>
<a id="schema_AwsDeviceV2"></a>
<a id="tocSawsdevicev2"></a>
<a id="tocsawsdevicev2"></a>

```json
"string"
```

<h2 id="tocS_AwsLogicalDeviceId">AwsLogicalDeviceId</h2>
<!-- backwards compatibility -->
<a id="schemaawslogicaldeviceid"></a>
<a id="schema_AwsLogicalDeviceId"></a>
<a id="tocSawslogicaldeviceid"></a>
<a id="tocsawslogicaldeviceid"></a>

```json
"string"
```

<h2 id="tocS_BGPAuthKey">BGPAuthKey</h2>
<!-- backwards compatibility -->
<a id="schemabgpauthkey"></a>
<a id="schema_BGPAuthKey"></a>
<a id="tocSbgpauthkey"></a>
<a id="tocsbgpauthkey"></a>

```json
"string"
```

<h2 id="tocS_BGPPeerId">BGPPeerId</h2>
<!-- backwards compatibility -->
<a id="schemabgppeerid"></a>
<a id="schema_BGPPeerId"></a>
<a id="tocSbgppeerid"></a>
<a id="tocsbgppeerid"></a>

```json
"string"
```

<h2 id="tocS_CustomerAddress">CustomerAddress</h2>
<!-- backwards compatibility -->
<a id="schemacustomeraddress"></a>
<a id="schema_CustomerAddress"></a>
<a id="tocScustomeraddress"></a>
<a id="tocscustomeraddress"></a>

```json
"string"
```

<h2 id="tocS_BGPPeerState">BGPPeerState</h2>
<!-- backwards compatibility -->
<a id="schemabgppeerstate"></a>
<a id="schema_BGPPeerState"></a>
<a id="tocSbgppeerstate"></a>
<a id="tocsbgppeerstate"></a>

```json
"verifying"
```

<h2 id="tocS_BGPStatus">BGPStatus</h2>
<!-- backwards compatibility -->
<a id="schemabgpstatus"></a>
<a id="schema_BGPStatus"></a>
<a id="tocSbgpstatus"></a>
<a id="tocsbgpstatus"></a>

```json
"up"
```

<h2 id="tocS_BGPPeer">BGPPeer</h2>
<!-- backwards compatibility -->
<a id="schemabgppeer"></a>
<a id="schema_BGPPeer"></a>
<a id="tocSbgppeer"></a>
<a id="tocsbgppeer"></a>

```json
{
  "bgpPeerId": {},
  "asn": {},
  "authKey": {},
  "addressFamily": {},
  "amazonAddress": {},
  "customerAddress": {},
  "bgpPeerState": {},
  "bgpStatus": {},
  "awsDeviceV2": {},
  "awsLogicalDeviceId": {}
}
```

Information about a BGP peer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bgpPeerId|object|false|none|none|
|asn|object|false|none|none|
|authKey|object|false|none|none|
|addressFamily|object|false|none|none|
|amazonAddress|object|false|none|none|
|customerAddress|object|false|none|none|
|bgpPeerState|object|false|none|none|
|bgpStatus|object|false|none|none|
|awsDeviceV2|object|false|none|none|
|awsLogicalDeviceId|object|false|none|none|

<h2 id="tocS_BGPPeerIdList">BGPPeerIdList</h2>
<!-- backwards compatibility -->
<a id="schemabgppeeridlist"></a>
<a id="schema_BGPPeerIdList"></a>
<a id="tocSbgppeeridlist"></a>
<a id="tocsbgppeeridlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_BGPPeerList">BGPPeerList</h2>
<!-- backwards compatibility -->
<a id="schemabgppeerlist"></a>
<a id="schema_BGPPeerList"></a>
<a id="tocSbgppeerlist"></a>
<a id="tocsbgppeerlist"></a>

```json
[
  {
    "bgpPeerId": {},
    "asn": {},
    "authKey": {},
    "addressFamily": {},
    "amazonAddress": {},
    "customerAddress": {},
    "bgpPeerState": {},
    "bgpStatus": {},
    "awsDeviceV2": {},
    "awsLogicalDeviceId": {}
  }
]
```

<h2 id="tocS_BooleanFlag">BooleanFlag</h2>
<!-- backwards compatibility -->
<a id="schemabooleanflag"></a>
<a id="schema_BooleanFlag"></a>
<a id="tocSbooleanflag"></a>
<a id="tocsbooleanflag"></a>

```json
true
```

<h2 id="tocS_CIDR">CIDR</h2>
<!-- backwards compatibility -->
<a id="schemacidr"></a>
<a id="schema_CIDR"></a>
<a id="tocScidr"></a>
<a id="tocscidr"></a>

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
"ordering"
```

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
"string"
```

<h2 id="tocS_VirtualGatewayId">VirtualGatewayId</h2>
<!-- backwards compatibility -->
<a id="schemavirtualgatewayid"></a>
<a id="schema_VirtualGatewayId"></a>
<a id="tocSvirtualgatewayid"></a>
<a id="tocsvirtualgatewayid"></a>

```json
"string"
```

<h2 id="tocS_VirtualInterfaceState">VirtualInterfaceState</h2>
<!-- backwards compatibility -->
<a id="schemavirtualinterfacestate"></a>
<a id="schema_VirtualInterfaceState"></a>
<a id="tocSvirtualinterfacestate"></a>
<a id="tocsvirtualinterfacestate"></a>

```json
"confirming"
```

<h2 id="tocS_LocationCode">LocationCode</h2>
<!-- backwards compatibility -->
<a id="schemalocationcode"></a>
<a id="schema_LocationCode"></a>
<a id="tocSlocationcode"></a>
<a id="tocslocationcode"></a>

```json
"string"
```

<h2 id="tocS_PartnerName">PartnerName</h2>
<!-- backwards compatibility -->
<a id="schemapartnername"></a>
<a id="schema_PartnerName"></a>
<a id="tocSpartnername"></a>
<a id="tocspartnername"></a>

```json
"string"
```

<h2 id="tocS_LoaIssueTime">LoaIssueTime</h2>
<!-- backwards compatibility -->
<a id="schemaloaissuetime"></a>
<a id="schema_LoaIssueTime"></a>
<a id="tocSloaissuetime"></a>
<a id="tocsloaissuetime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_JumboFrameCapable">JumboFrameCapable</h2>
<!-- backwards compatibility -->
<a id="schemajumboframecapable"></a>
<a id="schema_JumboFrameCapable"></a>
<a id="tocSjumboframecapable"></a>
<a id="tocsjumboframecapable"></a>

```json
true
```

<h2 id="tocS_HasLogicalRedundancy">HasLogicalRedundancy</h2>
<!-- backwards compatibility -->
<a id="schemahaslogicalredundancy"></a>
<a id="schema_HasLogicalRedundancy"></a>
<a id="tocShaslogicalredundancy"></a>
<a id="tocshaslogicalredundancy"></a>

```json
"unknown"
```

<h2 id="tocS_ProviderName">ProviderName</h2>
<!-- backwards compatibility -->
<a id="schemaprovidername"></a>
<a id="schema_ProviderName"></a>
<a id="tocSprovidername"></a>
<a id="tocsprovidername"></a>

```json
"string"
```

<h2 id="tocS_MacSecCapable">MacSecCapable</h2>
<!-- backwards compatibility -->
<a id="schemamacseccapable"></a>
<a id="schema_MacSecCapable"></a>
<a id="tocSmacseccapable"></a>
<a id="tocsmacseccapable"></a>

```json
true
```

<h2 id="tocS_PortEncryptionStatus">PortEncryptionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaportencryptionstatus"></a>
<a id="schema_PortEncryptionStatus"></a>
<a id="tocSportencryptionstatus"></a>
<a id="tocsportencryptionstatus"></a>

```json
"string"
```

<h2 id="tocS_EncryptionMode">EncryptionMode</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionmode"></a>
<a id="schema_EncryptionMode"></a>
<a id="tocSencryptionmode"></a>
<a id="tocsencryptionmode"></a>

```json
"string"
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
    "ownerAccount": {},
    "connectionId": {},
    "connectionName": {},
    "connectionState": {},
    "region": {},
    "location": {},
    "bandwidth": {},
    "vlan": {},
    "partnerName": {},
    "loaIssueTime": {},
    "lagId": {},
    "awsDevice": {},
    "jumboFrameCapable": {},
    "awsDeviceV2": {},
    "awsLogicalDeviceId": {},
    "hasLogicalRedundancy": {},
    "tags": {},
    "providerName": {},
    "macSecCapable": {},
    "portEncryptionStatus": {},
    "encryptionMode": {},
    "macSecKeys": {}
  }
]
```

<h2 id="tocS_Count">Count</h2>
<!-- backwards compatibility -->
<a id="schemacount"></a>
<a id="schema_Count"></a>
<a id="tocScount"></a>
<a id="tocscount"></a>

```json
0
```

<h2 id="tocS_NewBGPPeer">NewBGPPeer</h2>
<!-- backwards compatibility -->
<a id="schemanewbgppeer"></a>
<a id="schema_NewBGPPeer"></a>
<a id="tocSnewbgppeer"></a>
<a id="tocsnewbgppeer"></a>

```json
{
  "asn": {},
  "authKey": {},
  "addressFamily": {},
  "amazonAddress": {},
  "customerAddress": {}
}
```

Information about a new BGP peer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asn|object|false|none|none|
|authKey|object|false|none|none|
|addressFamily|object|false|none|none|
|amazonAddress|object|false|none|none|
|customerAddress|object|false|none|none|

<h2 id="tocS_RequestMACSec">RequestMACSec</h2>
<!-- backwards compatibility -->
<a id="schemarequestmacsec"></a>
<a id="schema_RequestMACSec"></a>
<a id="tocSrequestmacsec"></a>
<a id="tocsrequestmacsec"></a>

```json
true
```

<h2 id="tocS_GatewayIdToAssociate">GatewayIdToAssociate</h2>
<!-- backwards compatibility -->
<a id="schemagatewayidtoassociate"></a>
<a id="schema_GatewayIdToAssociate"></a>
<a id="tocSgatewayidtoassociate"></a>
<a id="tocsgatewayidtoassociate"></a>

```json
"string"
```

<h2 id="tocS_DirectConnectGatewayAssociationProposal">DirectConnectGatewayAssociationProposal</h2>
<!-- backwards compatibility -->
<a id="schemadirectconnectgatewayassociationproposal"></a>
<a id="schema_DirectConnectGatewayAssociationProposal"></a>
<a id="tocSdirectconnectgatewayassociationproposal"></a>
<a id="tocsdirectconnectgatewayassociationproposal"></a>

```json
{
  "proposalId": {},
  "directConnectGatewayId": {},
  "directConnectGatewayOwnerAccount": {},
  "proposalState": {},
  "associatedGateway": {
    "id": {},
    "type": {},
    "ownerAccount": {},
    "region": {}
  },
  "existingAllowedPrefixesToDirectConnectGateway": {},
  "requestedAllowedPrefixesToDirectConnectGateway": {}
}
```

Information about the proposal request to attach a virtual private gateway to a Direct Connect gateway.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|proposalId|object|false|none|none|
|directConnectGatewayId|object|false|none|none|
|directConnectGatewayOwnerAccount|object|false|none|none|
|proposalState|object|false|none|none|
|associatedGateway|object|false|none|none|
|existingAllowedPrefixesToDirectConnectGateway|object|false|none|none|
|requestedAllowedPrefixesToDirectConnectGateway|object|false|none|none|

<h2 id="tocS_DirectConnectGatewayName">DirectConnectGatewayName</h2>
<!-- backwards compatibility -->
<a id="schemadirectconnectgatewayname"></a>
<a id="schema_DirectConnectGatewayName"></a>
<a id="tocSdirectconnectgatewayname"></a>
<a id="tocsdirectconnectgatewayname"></a>

```json
"string"
```

<h2 id="tocS_LongAsn">LongAsn</h2>
<!-- backwards compatibility -->
<a id="schemalongasn"></a>
<a id="schema_LongAsn"></a>
<a id="tocSlongasn"></a>
<a id="tocslongasn"></a>

```json
0
```

<h2 id="tocS_DirectConnectGateway">DirectConnectGateway</h2>
<!-- backwards compatibility -->
<a id="schemadirectconnectgateway"></a>
<a id="schema_DirectConnectGateway"></a>
<a id="tocSdirectconnectgateway"></a>
<a id="tocsdirectconnectgateway"></a>

```json
{
  "directConnectGatewayId": {},
  "directConnectGatewayName": {},
  "amazonSideAsn": {},
  "ownerAccount": {},
  "directConnectGatewayState": {},
  "stateChangeError": {}
}
```

Information about a Direct Connect gateway, which enables you to connect virtual interfaces and virtual private gateway or transit gateways.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|directConnectGatewayId|object|false|none|none|
|directConnectGatewayName|object|false|none|none|
|amazonSideAsn|object|false|none|none|
|ownerAccount|object|false|none|none|
|directConnectGatewayState|object|false|none|none|
|stateChangeError|object|false|none|none|

<h2 id="tocS_InterconnectName">InterconnectName</h2>
<!-- backwards compatibility -->
<a id="schemainterconnectname"></a>
<a id="schema_InterconnectName"></a>
<a id="tocSinterconnectname"></a>
<a id="tocsinterconnectname"></a>

```json
"string"
```

<h2 id="tocS_LagName">LagName</h2>
<!-- backwards compatibility -->
<a id="schemalagname"></a>
<a id="schema_LagName"></a>
<a id="tocSlagname"></a>
<a id="tocslagname"></a>

```json
"string"
```

<h2 id="tocS_NewPrivateVirtualInterface">NewPrivateVirtualInterface</h2>
<!-- backwards compatibility -->
<a id="schemanewprivatevirtualinterface"></a>
<a id="schema_NewPrivateVirtualInterface"></a>
<a id="tocSnewprivatevirtualinterface"></a>
<a id="tocsnewprivatevirtualinterface"></a>

```json
{
  "virtualInterfaceName": {},
  "vlan": {},
  "asn": {},
  "mtu": {},
  "authKey": {},
  "amazonAddress": {},
  "customerAddress": {},
  "addressFamily": {},
  "virtualGatewayId": {},
  "directConnectGatewayId": {},
  "tags": {},
  "enableSiteLink": {}
}
```

Information about a private virtual interface.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualInterfaceName|object|true|none|none|
|vlan|object|true|none|none|
|asn|object|true|none|none|
|mtu|object|false|none|none|
|authKey|object|false|none|none|
|amazonAddress|object|false|none|none|
|customerAddress|object|false|none|none|
|addressFamily|object|false|none|none|
|virtualGatewayId|object|false|none|none|
|directConnectGatewayId|object|false|none|none|
|tags|object|false|none|none|
|enableSiteLink|object|false|none|none|

<h2 id="tocS_NewPublicVirtualInterface">NewPublicVirtualInterface</h2>
<!-- backwards compatibility -->
<a id="schemanewpublicvirtualinterface"></a>
<a id="schema_NewPublicVirtualInterface"></a>
<a id="tocSnewpublicvirtualinterface"></a>
<a id="tocsnewpublicvirtualinterface"></a>

```json
{
  "virtualInterfaceName": {},
  "vlan": {},
  "asn": {},
  "authKey": {},
  "amazonAddress": {},
  "customerAddress": {},
  "addressFamily": {},
  "routeFilterPrefixes": {},
  "tags": {}
}
```

Information about a public virtual interface.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualInterfaceName|object|true|none|none|
|vlan|object|true|none|none|
|asn|object|true|none|none|
|authKey|object|false|none|none|
|amazonAddress|object|false|none|none|
|customerAddress|object|false|none|none|
|addressFamily|object|false|none|none|
|routeFilterPrefixes|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_NewTransitVirtualInterface">NewTransitVirtualInterface</h2>
<!-- backwards compatibility -->
<a id="schemanewtransitvirtualinterface"></a>
<a id="schema_NewTransitVirtualInterface"></a>
<a id="tocSnewtransitvirtualinterface"></a>
<a id="tocsnewtransitvirtualinterface"></a>

```json
{
  "virtualInterfaceName": {},
  "vlan": {},
  "asn": {},
  "mtu": {},
  "authKey": {},
  "amazonAddress": {},
  "customerAddress": {},
  "addressFamily": {},
  "directConnectGatewayId": {},
  "tags": {},
  "enableSiteLink": {}
}
```

Information about a transit virtual interface.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualInterfaceName|object|false|none|none|
|vlan|object|false|none|none|
|asn|object|false|none|none|
|mtu|object|false|none|none|
|authKey|object|false|none|none|
|amazonAddress|object|false|none|none|
|customerAddress|object|false|none|none|
|addressFamily|object|false|none|none|
|directConnectGatewayId|object|false|none|none|
|tags|object|false|none|none|
|enableSiteLink|object|false|none|none|

<h2 id="tocS_DirectConnectGatewayAssociationId">DirectConnectGatewayAssociationId</h2>
<!-- backwards compatibility -->
<a id="schemadirectconnectgatewayassociationid"></a>
<a id="schema_DirectConnectGatewayAssociationId"></a>
<a id="tocSdirectconnectgatewayassociationid"></a>
<a id="tocsdirectconnectgatewayassociationid"></a>

```json
"string"
```

<h2 id="tocS_InterconnectState">InterconnectState</h2>
<!-- backwards compatibility -->
<a id="schemainterconnectstate"></a>
<a id="schema_InterconnectState"></a>
<a id="tocSinterconnectstate"></a>
<a id="tocsinterconnectstate"></a>

```json
"requested"
```

<h2 id="tocS_LoaContentType">LoaContentType</h2>
<!-- backwards compatibility -->
<a id="schemaloacontenttype"></a>
<a id="schema_LoaContentType"></a>
<a id="tocSloacontenttype"></a>
<a id="tocsloacontenttype"></a>

```json
"application/pdf"
```

<h2 id="tocS_NniPartnerType">NniPartnerType</h2>
<!-- backwards compatibility -->
<a id="schemannipartnertype"></a>
<a id="schema_NniPartnerType"></a>
<a id="tocSnnipartnertype"></a>
<a id="tocsnnipartnertype"></a>

```json
"v1"
```

<h2 id="tocS_MaxResultSetSize">MaxResultSetSize</h2>
<!-- backwards compatibility -->
<a id="schemamaxresultsetsize"></a>
<a id="schema_MaxResultSetSize"></a>
<a id="tocSmaxresultsetsize"></a>
<a id="tocsmaxresultsetsize"></a>

```json
0
```

<h2 id="tocS_PaginationToken">PaginationToken</h2>
<!-- backwards compatibility -->
<a id="schemapaginationtoken"></a>
<a id="schema_PaginationToken"></a>
<a id="tocSpaginationtoken"></a>
<a id="tocspaginationtoken"></a>

```json
"string"
```

<h2 id="tocS_DirectConnectGatewayAssociationProposalList">DirectConnectGatewayAssociationProposalList</h2>
<!-- backwards compatibility -->
<a id="schemadirectconnectgatewayassociationproposallist"></a>
<a id="schema_DirectConnectGatewayAssociationProposalList"></a>
<a id="tocSdirectconnectgatewayassociationproposallist"></a>
<a id="tocsdirectconnectgatewayassociationproposallist"></a>

```json
[
  {
    "proposalId": {},
    "directConnectGatewayId": {},
    "directConnectGatewayOwnerAccount": {},
    "proposalState": {},
    "associatedGateway": {
      "id": {},
      "type": {},
      "ownerAccount": {},
      "region": {}
    },
    "existingAllowedPrefixesToDirectConnectGateway": {},
    "requestedAllowedPrefixesToDirectConnectGateway": {}
  }
]
```

<h2 id="tocS_DirectConnectGatewayAssociationList">DirectConnectGatewayAssociationList</h2>
<!-- backwards compatibility -->
<a id="schemadirectconnectgatewayassociationlist"></a>
<a id="schema_DirectConnectGatewayAssociationList"></a>
<a id="tocSdirectconnectgatewayassociationlist"></a>
<a id="tocsdirectconnectgatewayassociationlist"></a>

```json
[
  {
    "directConnectGatewayId": {},
    "directConnectGatewayOwnerAccount": {},
    "associationState": {},
    "stateChangeError": {},
    "associatedGateway": {
      "id": {},
      "type": {},
      "ownerAccount": {},
      "region": {}
    },
    "associationId": {},
    "allowedPrefixesToDirectConnectGateway": {},
    "virtualGatewayId": {},
    "virtualGatewayRegion": {},
    "virtualGatewayOwnerAccount": {}
  }
]
```

<h2 id="tocS_DirectConnectGatewayAttachmentList">DirectConnectGatewayAttachmentList</h2>
<!-- backwards compatibility -->
<a id="schemadirectconnectgatewayattachmentlist"></a>
<a id="schema_DirectConnectGatewayAttachmentList"></a>
<a id="tocSdirectconnectgatewayattachmentlist"></a>
<a id="tocsdirectconnectgatewayattachmentlist"></a>

```json
[
  {
    "directConnectGatewayId": {},
    "virtualInterfaceId": {},
    "virtualInterfaceRegion": {},
    "virtualInterfaceOwnerAccount": {},
    "attachmentState": {},
    "attachmentType": {},
    "stateChangeError": {}
  }
]
```

<h2 id="tocS_DirectConnectGatewayList">DirectConnectGatewayList</h2>
<!-- backwards compatibility -->
<a id="schemadirectconnectgatewaylist"></a>
<a id="schema_DirectConnectGatewayList"></a>
<a id="tocSdirectconnectgatewaylist"></a>
<a id="tocsdirectconnectgatewaylist"></a>

```json
[
  {
    "directConnectGatewayId": {},
    "directConnectGatewayName": {},
    "amazonSideAsn": {},
    "ownerAccount": {},
    "directConnectGatewayState": {},
    "stateChangeError": {}
  }
]
```

<h2 id="tocS_RouterTypeIdentifier">RouterTypeIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaroutertypeidentifier"></a>
<a id="schema_RouterTypeIdentifier"></a>
<a id="tocSroutertypeidentifier"></a>
<a id="tocsroutertypeidentifier"></a>

```json
"string"
```

<h2 id="tocS_RouterConfig">RouterConfig</h2>
<!-- backwards compatibility -->
<a id="schemarouterconfig"></a>
<a id="schema_RouterConfig"></a>
<a id="tocSrouterconfig"></a>
<a id="tocsrouterconfig"></a>

```json
"string"
```

<h2 id="tocS_RouterType">RouterType</h2>
<!-- backwards compatibility -->
<a id="schemaroutertype"></a>
<a id="schema_RouterType"></a>
<a id="tocSroutertype"></a>
<a id="tocsroutertype"></a>

```json
{
  "vendor": {},
  "platform": {},
  "software": {},
  "xsltTemplateName": {},
  "xsltTemplateNameForMacSec": {},
  "routerTypeIdentifier": {}
}
```

Information about the virtual router.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vendor|object|false|none|none|
|platform|object|false|none|none|
|software|object|false|none|none|
|xsltTemplateName|object|false|none|none|
|xsltTemplateNameForMacSec|object|false|none|none|
|routerTypeIdentifier|object|false|none|none|

<h2 id="tocS_VirtualInterfaceName">VirtualInterfaceName</h2>
<!-- backwards compatibility -->
<a id="schemavirtualinterfacename"></a>
<a id="schema_VirtualInterfaceName"></a>
<a id="tocSvirtualinterfacename"></a>
<a id="tocsvirtualinterfacename"></a>

```json
"string"
```

<h2 id="tocS_ResourceArnList">ResourceArnList</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearnlist"></a>
<a id="schema_ResourceArnList"></a>
<a id="tocSresourcearnlist"></a>
<a id="tocsresourcearnlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ResourceTagList">ResourceTagList</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetaglist"></a>
<a id="schema_ResourceTagList"></a>
<a id="tocSresourcetaglist"></a>
<a id="tocsresourcetaglist"></a>

```json
[
  {
    "resourceArn": {},
    "tags": {}
  }
]
```

<h2 id="tocS_DirectConnectGatewayState">DirectConnectGatewayState</h2>
<!-- backwards compatibility -->
<a id="schemadirectconnectgatewaystate"></a>
<a id="schema_DirectConnectGatewayState"></a>
<a id="tocSdirectconnectgatewaystate"></a>
<a id="tocsdirectconnectgatewaystate"></a>

```json
"pending"
```

<h2 id="tocS_StateChangeError">StateChangeError</h2>
<!-- backwards compatibility -->
<a id="schemastatechangeerror"></a>
<a id="schema_StateChangeError"></a>
<a id="tocSstatechangeerror"></a>
<a id="tocsstatechangeerror"></a>

```json
"string"
```

<h2 id="tocS_DirectConnectGatewayAssociationState">DirectConnectGatewayAssociationState</h2>
<!-- backwards compatibility -->
<a id="schemadirectconnectgatewayassociationstate"></a>
<a id="schema_DirectConnectGatewayAssociationState"></a>
<a id="tocSdirectconnectgatewayassociationstate"></a>
<a id="tocsdirectconnectgatewayassociationstate"></a>

```json
"associating"
```

<h2 id="tocS_VirtualGatewayRegion">VirtualGatewayRegion</h2>
<!-- backwards compatibility -->
<a id="schemavirtualgatewayregion"></a>
<a id="schema_VirtualGatewayRegion"></a>
<a id="tocSvirtualgatewayregion"></a>
<a id="tocsvirtualgatewayregion"></a>

```json
"string"
```

<h2 id="tocS_DirectConnectGatewayAssociationProposalState">DirectConnectGatewayAssociationProposalState</h2>
<!-- backwards compatibility -->
<a id="schemadirectconnectgatewayassociationproposalstate"></a>
<a id="schema_DirectConnectGatewayAssociationProposalState"></a>
<a id="tocSdirectconnectgatewayassociationproposalstate"></a>
<a id="tocsdirectconnectgatewayassociationproposalstate"></a>

```json
"requested"
```

<h2 id="tocS_VirtualInterfaceRegion">VirtualInterfaceRegion</h2>
<!-- backwards compatibility -->
<a id="schemavirtualinterfaceregion"></a>
<a id="schema_VirtualInterfaceRegion"></a>
<a id="tocSvirtualinterfaceregion"></a>
<a id="tocsvirtualinterfaceregion"></a>

```json
"string"
```

<h2 id="tocS_DirectConnectGatewayAttachmentState">DirectConnectGatewayAttachmentState</h2>
<!-- backwards compatibility -->
<a id="schemadirectconnectgatewayattachmentstate"></a>
<a id="schema_DirectConnectGatewayAttachmentState"></a>
<a id="tocSdirectconnectgatewayattachmentstate"></a>
<a id="tocsdirectconnectgatewayattachmentstate"></a>

```json
"attaching"
```

<h2 id="tocS_DirectConnectGatewayAttachmentType">DirectConnectGatewayAttachmentType</h2>
<!-- backwards compatibility -->
<a id="schemadirectconnectgatewayattachmenttype"></a>
<a id="schema_DirectConnectGatewayAttachmentType"></a>
<a id="tocSdirectconnectgatewayattachmenttype"></a>
<a id="tocsdirectconnectgatewayattachmenttype"></a>

```json
"TransitVirtualInterface"
```

<h2 id="tocS_DirectConnectGatewayAttachment">DirectConnectGatewayAttachment</h2>
<!-- backwards compatibility -->
<a id="schemadirectconnectgatewayattachment"></a>
<a id="schema_DirectConnectGatewayAttachment"></a>
<a id="tocSdirectconnectgatewayattachment"></a>
<a id="tocsdirectconnectgatewayattachment"></a>

```json
{
  "directConnectGatewayId": {},
  "virtualInterfaceId": {},
  "virtualInterfaceRegion": {},
  "virtualInterfaceOwnerAccount": {},
  "attachmentState": {},
  "attachmentType": {},
  "stateChangeError": {}
}
```

Information about an attachment between a Direct Connect gateway and a virtual interface.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|directConnectGatewayId|object|false|none|none|
|virtualInterfaceId|object|false|none|none|
|virtualInterfaceRegion|object|false|none|none|
|virtualInterfaceOwnerAccount|object|false|none|none|
|attachmentState|object|false|none|none|
|attachmentType|object|false|none|none|
|stateChangeError|object|false|none|none|

<h2 id="tocS_EnableSiteLink">EnableSiteLink</h2>
<!-- backwards compatibility -->
<a id="schemaenablesitelink"></a>
<a id="schema_EnableSiteLink"></a>
<a id="tocSenablesitelink"></a>
<a id="tocsenablesitelink"></a>

```json
true
```

<h2 id="tocS_EndTime">EndTime</h2>
<!-- backwards compatibility -->
<a id="schemaendtime"></a>
<a id="schema_EndTime"></a>
<a id="tocSendtime"></a>
<a id="tocsendtime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_FailureTestHistoryStatus">FailureTestHistoryStatus</h2>
<!-- backwards compatibility -->
<a id="schemafailuretesthistorystatus"></a>
<a id="schema_FailureTestHistoryStatus"></a>
<a id="tocSfailuretesthistorystatus"></a>
<a id="tocsfailuretesthistorystatus"></a>

```json
"string"
```

<h2 id="tocS_InterconnectList">InterconnectList</h2>
<!-- backwards compatibility -->
<a id="schemainterconnectlist"></a>
<a id="schema_InterconnectList"></a>
<a id="tocSinterconnectlist"></a>
<a id="tocsinterconnectlist"></a>

```json
[
  {
    "interconnectId": {},
    "interconnectName": {},
    "interconnectState": {},
    "region": {},
    "location": {},
    "bandwidth": {},
    "loaIssueTime": {},
    "lagId": {},
    "awsDevice": {},
    "jumboFrameCapable": {},
    "awsDeviceV2": {},
    "awsLogicalDeviceId": {},
    "hasLogicalRedundancy": {},
    "tags": {},
    "providerName": {}
  }
]
```

<h2 id="tocS_LagState">LagState</h2>
<!-- backwards compatibility -->
<a id="schemalagstate"></a>
<a id="schema_LagState"></a>
<a id="tocSlagstate"></a>
<a id="tocslagstate"></a>

```json
"requested"
```

<h2 id="tocS_LagList">LagList</h2>
<!-- backwards compatibility -->
<a id="schemalaglist"></a>
<a id="schema_LagList"></a>
<a id="tocSlaglist"></a>
<a id="tocslaglist"></a>

```json
[
  {
    "connectionsBandwidth": {},
    "numberOfConnections": {},
    "lagId": {},
    "ownerAccount": {},
    "lagName": {},
    "lagState": {},
    "location": {},
    "region": {},
    "minimumLinks": {},
    "awsDevice": {},
    "awsDeviceV2": {},
    "awsLogicalDeviceId": {},
    "connections": {},
    "allowsHostedConnections": {},
    "jumboFrameCapable": {},
    "hasLogicalRedundancy": {},
    "tags": {},
    "providerName": {},
    "macSecCapable": {},
    "encryptionMode": {},
    "macSecKeys": {}
  }
]
```

<h2 id="tocS_TestId">TestId</h2>
<!-- backwards compatibility -->
<a id="schematestid"></a>
<a id="schema_TestId"></a>
<a id="tocStestid"></a>
<a id="tocstestid"></a>

```json
"string"
```

<h2 id="tocS_VirtualInterfaceTestHistoryList">VirtualInterfaceTestHistoryList</h2>
<!-- backwards compatibility -->
<a id="schemavirtualinterfacetesthistorylist"></a>
<a id="schema_VirtualInterfaceTestHistoryList"></a>
<a id="tocSvirtualinterfacetesthistorylist"></a>
<a id="tocsvirtualinterfacetesthistorylist"></a>

```json
[
  {
    "testId": {},
    "virtualInterfaceId": {},
    "bgpPeers": {},
    "status": {},
    "ownerAccount": {},
    "testDurationInMinutes": {},
    "startTime": {},
    "endTime": {}
  }
]
```

<h2 id="tocS_LoaContent">LoaContent</h2>
<!-- backwards compatibility -->
<a id="schemaloacontent"></a>
<a id="schema_LoaContent"></a>
<a id="tocSloacontent"></a>
<a id="tocsloacontent"></a>

```json
"string"
```

<h2 id="tocS_LocationName">LocationName</h2>
<!-- backwards compatibility -->
<a id="schemalocationname"></a>
<a id="schema_LocationName"></a>
<a id="tocSlocationname"></a>
<a id="tocslocationname"></a>

```json
"string"
```

<h2 id="tocS_ProviderList">ProviderList</h2>
<!-- backwards compatibility -->
<a id="schemaproviderlist"></a>
<a id="schema_ProviderList"></a>
<a id="tocSproviderlist"></a>
<a id="tocsproviderlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "locationCode": {},
  "locationName": {},
  "region": {},
  "availablePortSpeeds": {},
  "availableProviders": {},
  "availableMacSecPortSpeeds": {}
}
```

Information about an Direct Connect location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locationCode|object|false|none|none|
|locationName|object|false|none|none|
|region|object|false|none|none|
|availablePortSpeeds|object|false|none|none|
|availableProviders|object|false|none|none|
|availableMacSecPortSpeeds|object|false|none|none|

<h2 id="tocS_LocationList">LocationList</h2>
<!-- backwards compatibility -->
<a id="schemalocationlist"></a>
<a id="schema_LocationList"></a>
<a id="tocSlocationlist"></a>
<a id="tocslocationlist"></a>

```json
[
  {
    "locationCode": {},
    "locationName": {},
    "region": {},
    "availablePortSpeeds": {},
    "availableProviders": {},
    "availableMacSecPortSpeeds": {}
  }
]
```

<h2 id="tocS_MTU">MTU</h2>
<!-- backwards compatibility -->
<a id="schemamtu"></a>
<a id="schema_MTU"></a>
<a id="tocSmtu"></a>
<a id="tocsmtu"></a>

```json
0
```

<h2 id="tocS_State">State</h2>
<!-- backwards compatibility -->
<a id="schemastate"></a>
<a id="schema_State"></a>
<a id="tocSstate"></a>
<a id="tocsstate"></a>

```json
"string"
```

<h2 id="tocS_StartOnDate">StartOnDate</h2>
<!-- backwards compatibility -->
<a id="schemastartondate"></a>
<a id="schema_StartOnDate"></a>
<a id="tocSstartondate"></a>
<a id="tocsstartondate"></a>

```json
"string"
```

<h2 id="tocS_MacSecKey">MacSecKey</h2>
<!-- backwards compatibility -->
<a id="schemamacseckey"></a>
<a id="schema_MacSecKey"></a>
<a id="tocSmacseckey"></a>
<a id="tocsmacseckey"></a>

```json
{
  "secretARN": {},
  "ckn": {},
  "state": {},
  "startOn": {}
}
```

Information about the MAC Security (MACsec) secret key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|secretARN|object|false|none|none|
|ckn|object|false|none|none|
|state|object|false|none|none|
|startOn|object|false|none|none|

<h2 id="tocS_Platform">Platform</h2>
<!-- backwards compatibility -->
<a id="schemaplatform"></a>
<a id="schema_Platform"></a>
<a id="tocSplatform"></a>
<a id="tocsplatform"></a>

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

<h2 id="tocS_ResourceTag">ResourceTag</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetag"></a>
<a id="schema_ResourceTag"></a>
<a id="tocSresourcetag"></a>
<a id="tocsresourcetag"></a>

```json
{
  "resourceArn": {},
  "tags": {}
}
```

Information about a tag associated with an Direct Connect resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceArn|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_RouteFilterPrefix">RouteFilterPrefix</h2>
<!-- backwards compatibility -->
<a id="schemaroutefilterprefix"></a>
<a id="schema_RouteFilterPrefix"></a>
<a id="tocSroutefilterprefix"></a>
<a id="tocsroutefilterprefix"></a>

```json
{
  "cidr": {}
}
```

Information about a route filter prefix that a customer can advertise through Border Gateway Protocol (BGP) over a public virtual interface.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cidr|object|false|none|none|

<h2 id="tocS_Vendor">Vendor</h2>
<!-- backwards compatibility -->
<a id="schemavendor"></a>
<a id="schema_Vendor"></a>
<a id="tocSvendor"></a>
<a id="tocsvendor"></a>

```json
"string"
```

<h2 id="tocS_Software">Software</h2>
<!-- backwards compatibility -->
<a id="schemasoftware"></a>
<a id="schema_Software"></a>
<a id="tocSsoftware"></a>
<a id="tocssoftware"></a>

```json
"string"
```

<h2 id="tocS_XsltTemplateName">XsltTemplateName</h2>
<!-- backwards compatibility -->
<a id="schemaxslttemplatename"></a>
<a id="schema_XsltTemplateName"></a>
<a id="tocSxslttemplatename"></a>
<a id="tocsxslttemplatename"></a>

```json
"string"
```

<h2 id="tocS_XsltTemplateNameForMacSec">XsltTemplateNameForMacSec</h2>
<!-- backwards compatibility -->
<a id="schemaxslttemplatenameformacsec"></a>
<a id="schema_XsltTemplateNameForMacSec"></a>
<a id="tocSxslttemplatenameformacsec"></a>
<a id="tocsxslttemplatenameformacsec"></a>

```json
"string"
```

<h2 id="tocS_SiteLinkEnabled">SiteLinkEnabled</h2>
<!-- backwards compatibility -->
<a id="schemasitelinkenabled"></a>
<a id="schema_SiteLinkEnabled"></a>
<a id="tocSsitelinkenabled"></a>
<a id="tocssitelinkenabled"></a>

```json
true
```

<h2 id="tocS_TestDuration">TestDuration</h2>
<!-- backwards compatibility -->
<a id="schematestduration"></a>
<a id="schema_TestDuration"></a>
<a id="tocStestduration"></a>
<a id="tocstestduration"></a>

```json
0
```

<h2 id="tocS_VirtualInterfaceTestHistory">VirtualInterfaceTestHistory</h2>
<!-- backwards compatibility -->
<a id="schemavirtualinterfacetesthistory"></a>
<a id="schema_VirtualInterfaceTestHistory"></a>
<a id="tocSvirtualinterfacetesthistory"></a>
<a id="tocsvirtualinterfacetesthistory"></a>

```json
{
  "testId": {},
  "virtualInterfaceId": {},
  "bgpPeers": {},
  "status": {},
  "ownerAccount": {},
  "testDurationInMinutes": {},
  "startTime": {},
  "endTime": {}
}
```

Information about the virtual interface failover test.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|testId|object|false|none|none|
|virtualInterfaceId|object|false|none|none|
|bgpPeers|object|false|none|none|
|status|object|false|none|none|
|ownerAccount|object|false|none|none|
|testDurationInMinutes|object|false|none|none|
|startTime|object|false|none|none|
|endTime|object|false|none|none|

<h2 id="tocS_StartTime">StartTime</h2>
<!-- backwards compatibility -->
<a id="schemastarttime"></a>
<a id="schema_StartTime"></a>
<a id="tocSstarttime"></a>
<a id="tocsstarttime"></a>

```json
"1970-01-01T00:00:00Z"
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

Information about a tag.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|object|true|none|none|
|value|object|false|none|none|

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

<h2 id="tocS_VirtualGatewayState">VirtualGatewayState</h2>
<!-- backwards compatibility -->
<a id="schemavirtualgatewaystate"></a>
<a id="schema_VirtualGatewayState"></a>
<a id="tocSvirtualgatewaystate"></a>
<a id="tocsvirtualgatewaystate"></a>

```json
"string"
```

<h2 id="tocS_VirtualGateway">VirtualGateway</h2>
<!-- backwards compatibility -->
<a id="schemavirtualgateway"></a>
<a id="schema_VirtualGateway"></a>
<a id="tocSvirtualgateway"></a>
<a id="tocsvirtualgateway"></a>

```json
{
  "virtualGatewayId": {},
  "virtualGatewayState": {}
}
```

Information about a virtual private gateway for a private virtual interface.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualGatewayId|object|false|none|none|
|virtualGatewayState|object|false|none|none|

<h2 id="tocS_VirtualGatewayList">VirtualGatewayList</h2>
<!-- backwards compatibility -->
<a id="schemavirtualgatewaylist"></a>
<a id="schema_VirtualGatewayList"></a>
<a id="tocSvirtualgatewaylist"></a>
<a id="tocsvirtualgatewaylist"></a>

```json
[
  {
    "virtualGatewayId": {},
    "virtualGatewayState": {}
  }
]
```

<h2 id="tocS_VirtualInterfaceType">VirtualInterfaceType</h2>
<!-- backwards compatibility -->
<a id="schemavirtualinterfacetype"></a>
<a id="schema_VirtualInterfaceType"></a>
<a id="tocSvirtualinterfacetype"></a>
<a id="tocsvirtualinterfacetype"></a>

```json
"string"
```

<h2 id="tocS_VirtualInterfaceList">VirtualInterfaceList</h2>
<!-- backwards compatibility -->
<a id="schemavirtualinterfacelist"></a>
<a id="schema_VirtualInterfaceList"></a>
<a id="tocSvirtualinterfacelist"></a>
<a id="tocsvirtualinterfacelist"></a>

```json
[
  {
    "ownerAccount": {},
    "virtualInterfaceId": {},
    "location": {},
    "connectionId": {},
    "virtualInterfaceType": {},
    "virtualInterfaceName": {},
    "vlan": {},
    "asn": {},
    "amazonSideAsn": {},
    "authKey": {},
    "amazonAddress": {},
    "customerAddress": {},
    "addressFamily": {},
    "virtualInterfaceState": {},
    "customerRouterConfig": {},
    "mtu": {},
    "jumboFrameCapable": {},
    "virtualGatewayId": {},
    "directConnectGatewayId": {},
    "routeFilterPrefixes": {},
    "bgpPeers": {},
    "region": {},
    "awsDeviceV2": {},
    "awsLogicalDeviceId": {},
    "tags": {},
    "siteLinkEnabled": {}
  }
]
```
