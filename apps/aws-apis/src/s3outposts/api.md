<h1 id="amazon-s3-on-outposts">Amazon S3 on Outposts v2017-07-25</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Amazon S3 on Outposts provides access to S3 on Outposts operations.

Base URLs:

* <a href="http://s3-outposts.us-east-1.amazonaws.com">http://s3-outposts.us-east-1.amazonaws.com</a> - The Amazon S3 Outposts multi-region endpoint

* <a href="https://s3-outposts.us-east-1.amazonaws.com">https://s3-outposts.us-east-1.amazonaws.com</a> - The Amazon S3 Outposts multi-region endpoint

* <a href="http://s3-outposts.cn-north-1.amazonaws.com.cn">http://s3-outposts.cn-north-1.amazonaws.com.cn</a> - The Amazon S3 Outposts endpoint for China (Beijing) and China (Ningxia)

* <a href="https://s3-outposts.cn-north-1.amazonaws.com.cn">https://s3-outposts.cn-north-1.amazonaws.com.cn</a> - The Amazon S3 Outposts endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/s3-outposts/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-s3-on-outposts-default">Default</h1>

## CreateEndpoint

<a id="opIdCreateEndpoint"></a>

> Code samples

```bash
curl https://s3outposts.us-east-1.amazonaws.com/S3Outposts/CreateEndpoint \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "OutpostId": "string",
    "SubnetId": "string",
    "SecurityGroupId": "string",
    "AccessType": "Private",
    "CustomerOwnedIpv4Pool": "string"
  }'
```

`POST /S3Outposts/CreateEndpoint`

<p>Creates an endpoint and associates it with the specified Outpost.</p> <note> <p>It can take up to 5 minutes for this action to finish.</p> </note> <p/> <p>Related actions include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_DeleteEndpoint.html">DeleteEndpoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_ListEndpoints.html">ListEndpoints</a> </p> </li> </ul>

> Body parameter

```json
{
  "OutpostId": "string",
  "SubnetId": "string",
  "SecurityGroupId": "string",
  "AccessType": "Private",
  "CustomerOwnedIpv4Pool": "string"
}
```

<h3 id="createendpoint-parameters">Parameters</h3>

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
|» OutpostId|body|string|true|The ID of the Outposts. |
|» SubnetId|body|string|true|The ID of the subnet in the selected VPC. The endpoint subnet must belong to the Outpost that has Amazon S3 on Outposts provisioned.|
|» SecurityGroupId|body|string|true|The ID of the security group to use with the endpoint.|
|» AccessType|body|string|false|<p>The type of access for the network connectivity for the Amazon S3 on Outposts endpoint. To use the Amazon Web Services VPC, choose <code>Private</code>. To use the endpoint with an on-premises network, choose <code>CustomerOwnedIp</code>. If you choose <code>CustomerOwnedIp</code>, you must also provide the customer-owned IP address pool (CoIP pool).</p> <note> <p> <code>Private</code> is the default access type value.</p> </note>|
|» CustomerOwnedIpv4Pool|body|string|false|The ID of the customer-owned IPv4 address pool (CoIP pool) for the endpoint. IP addresses are allocated from this pool for the endpoint.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» AccessType|Private|
|» AccessType|CustomerOwnedIp|

> Example responses

> 200 Response

```json
{
  "EndpointArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="createendpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateEndpointResult](#schemacreateendpointresult)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|OutpostOfflineException|[OutpostOfflineException](#schemaoutpostofflineexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteEndpoint

<a id="opIdDeleteEndpoint"></a>

> Code samples

```bash
curl 'https://s3outposts.us-east-1.amazonaws.com/S3Outposts/DeleteEndpoint#endpointId&outpostId?endpointId=string&outpostId=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /S3Outposts/DeleteEndpoint#endpointId&outpostId`

<p>Deletes an endpoint.</p> <note> <p>It can take up to 5 minutes for this action to finish.</p> </note> <p/> <p>Related actions include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_CreateEndpoint.html">CreateEndpoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_ListEndpoints.html">ListEndpoints</a> </p> </li> </ul>

<h3 id="deleteendpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|endpointId|query|string|true|The ID of the endpoint.|
|outpostId|query|string|true|The ID of the Outposts. |
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

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="deleteendpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|OutpostOfflineException|[OutpostOfflineException](#schemaoutpostofflineexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListEndpoints

<a id="opIdListEndpoints"></a>

> Code samples

```bash
curl https://s3outposts.us-east-1.amazonaws.com/S3Outposts/ListEndpoints \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /S3Outposts/ListEndpoints`

<p>Lists endpoints associated with the specified Outpost. </p> <p>Related actions include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_CreateEndpoint.html">CreateEndpoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_DeleteEndpoint.html">DeleteEndpoint</a> </p> </li> </ul>

<h3 id="listendpoints-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|If a previous response from this operation included a <code>NextToken</code> value, provide that value here to retrieve the next page of results.|
|maxResults|query|integer|false|The maximum number of endpoints that will be returned in the response.|
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
  "Endpoints": {},
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

<h3 id="listendpoints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListEndpointsResult](#schemalistendpointsresult)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListOutpostsWithS3

<a id="opIdListOutpostsWithS3"></a>

> Code samples

```bash
curl https://s3outposts.us-east-1.amazonaws.com/S3Outposts/ListOutpostsWithS3 \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /S3Outposts/ListOutpostsWithS3`

Lists the Outposts with S3 on Outposts capacity for your Amazon Web Services account. Includes S3 on Outposts that you have access to as the Outposts owner, or as a shared user from Resource Access Manager (RAM). 

<h3 id="listoutpostswiths3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|When you can get additional results from the <code>ListOutpostsWithS3</code> call, a <code>NextToken</code> parameter is returned in the output. You can then pass in a subsequent command to the <code>NextToken</code> parameter to continue listing additional Outposts.|
|maxResults|query|integer|false|The maximum number of Outposts to return. The limit is 100.|
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
  "Outposts": {},
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

<h3 id="listoutpostswiths3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListOutpostsWithS3Result](#schemalistoutpostswiths3result)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSharedEndpoints

<a id="opIdListSharedEndpoints"></a>

> Code samples

```bash
curl 'https://s3outposts.us-east-1.amazonaws.com/S3Outposts/ListSharedEndpoints#outpostId?outpostId=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /S3Outposts/ListSharedEndpoints#outpostId`

<p>Lists all endpoints associated with an Outpost that has been shared by Amazon Web Services Resource Access Manager (RAM).</p> <p>Related actions include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_CreateEndpoint.html">CreateEndpoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_DeleteEndpoint.html">DeleteEndpoint</a> </p> </li> </ul>

<h3 id="listsharedendpoints-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|If a previous response from this operation included a <code>NextToken</code> value, you can provide that value here to retrieve the next page of results.|
|maxResults|query|integer|false|The maximum number of endpoints that will be returned in the response.|
|outpostId|query|string|true|The ID of the Amazon Web Services Outpost.|
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
  "Endpoints": {},
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

<h3 id="listsharedendpoints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSharedEndpointsResult](#schemalistsharedendpointsresult)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateEndpointResult">CreateEndpointResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateendpointresult"></a>
<a id="schema_CreateEndpointResult"></a>
<a id="tocScreateendpointresult"></a>
<a id="tocscreateendpointresult"></a>

```json
{
  "EndpointArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointArn|object|false|none|none|

<h2 id="tocS_InternalServerException">InternalServerException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserverexception"></a>
<a id="schema_InternalServerException"></a>
<a id="tocSinternalserverexception"></a>
<a id="tocsinternalserverexception"></a>

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

<h2 id="tocS_OutpostOfflineException">OutpostOfflineException</h2>
<!-- backwards compatibility -->
<a id="schemaoutpostofflineexception"></a>
<a id="schema_OutpostOfflineException"></a>
<a id="tocSoutpostofflineexception"></a>
<a id="tocsoutpostofflineexception"></a>

```json
null
```

<h2 id="tocS_ListEndpointsResult">ListEndpointsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistendpointsresult"></a>
<a id="schema_ListEndpointsResult"></a>
<a id="tocSlistendpointsresult"></a>
<a id="tocslistendpointsresult"></a>

```json
{
  "Endpoints": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Endpoints|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListOutpostsWithS3Result">ListOutpostsWithS3Result</h2>
<!-- backwards compatibility -->
<a id="schemalistoutpostswiths3result"></a>
<a id="schema_ListOutpostsWithS3Result"></a>
<a id="tocSlistoutpostswiths3result"></a>
<a id="tocslistoutpostswiths3result"></a>

```json
{
  "Outposts": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Outposts|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListSharedEndpointsResult">ListSharedEndpointsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistsharedendpointsresult"></a>
<a id="schema_ListSharedEndpointsResult"></a>
<a id="tocSlistsharedendpointsresult"></a>
<a id="tocslistsharedendpointsresult"></a>

```json
{
  "Endpoints": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Endpoints|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_AwsAccountId">AwsAccountId</h2>
<!-- backwards compatibility -->
<a id="schemaawsaccountid"></a>
<a id="schema_AwsAccountId"></a>
<a id="tocSawsaccountid"></a>
<a id="tocsawsaccountid"></a>

```json
"string"
```

<h2 id="tocS_CapacityInBytes">CapacityInBytes</h2>
<!-- backwards compatibility -->
<a id="schemacapacityinbytes"></a>
<a id="schema_CapacityInBytes"></a>
<a id="tocScapacityinbytes"></a>
<a id="tocscapacityinbytes"></a>

```json
0
```

<h2 id="tocS_CidrBlock">CidrBlock</h2>
<!-- backwards compatibility -->
<a id="schemacidrblock"></a>
<a id="schema_CidrBlock"></a>
<a id="tocScidrblock"></a>
<a id="tocscidrblock"></a>

```json
"string"
```

<h2 id="tocS_OutpostId">OutpostId</h2>
<!-- backwards compatibility -->
<a id="schemaoutpostid"></a>
<a id="schema_OutpostId"></a>
<a id="tocSoutpostid"></a>
<a id="tocsoutpostid"></a>

```json
"string"
```

<h2 id="tocS_SubnetId">SubnetId</h2>
<!-- backwards compatibility -->
<a id="schemasubnetid"></a>
<a id="schema_SubnetId"></a>
<a id="tocSsubnetid"></a>
<a id="tocssubnetid"></a>

```json
"string"
```

<h2 id="tocS_SecurityGroupId">SecurityGroupId</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroupid"></a>
<a id="schema_SecurityGroupId"></a>
<a id="tocSsecuritygroupid"></a>
<a id="tocssecuritygroupid"></a>

```json
"string"
```

<h2 id="tocS_EndpointAccessType">EndpointAccessType</h2>
<!-- backwards compatibility -->
<a id="schemaendpointaccesstype"></a>
<a id="schema_EndpointAccessType"></a>
<a id="tocSendpointaccesstype"></a>
<a id="tocsendpointaccesstype"></a>

```json
"Private"
```

<h2 id="tocS_CustomerOwnedIpv4Pool">CustomerOwnedIpv4Pool</h2>
<!-- backwards compatibility -->
<a id="schemacustomerownedipv4pool"></a>
<a id="schema_CustomerOwnedIpv4Pool"></a>
<a id="tocScustomerownedipv4pool"></a>
<a id="tocscustomerownedipv4pool"></a>

```json
"string"
```

<h2 id="tocS_CreateEndpointRequest">CreateEndpointRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateendpointrequest"></a>
<a id="schema_CreateEndpointRequest"></a>
<a id="tocScreateendpointrequest"></a>
<a id="tocscreateendpointrequest"></a>

```json
{
  "OutpostId": {},
  "SubnetId": {},
  "SecurityGroupId": {},
  "AccessType": {},
  "CustomerOwnedIpv4Pool": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OutpostId|object|true|none|none|
|SubnetId|object|true|none|none|
|SecurityGroupId|object|true|none|none|
|AccessType|object|false|none|none|
|CustomerOwnedIpv4Pool|object|false|none|none|

<h2 id="tocS_EndpointArn">EndpointArn</h2>
<!-- backwards compatibility -->
<a id="schemaendpointarn"></a>
<a id="schema_EndpointArn"></a>
<a id="tocSendpointarn"></a>
<a id="tocsendpointarn"></a>

```json
"string"
```

<h2 id="tocS_CreationTime">CreationTime</h2>
<!-- backwards compatibility -->
<a id="schemacreationtime"></a>
<a id="schema_CreationTime"></a>
<a id="tocScreationtime"></a>
<a id="tocscreationtime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_EndpointId">EndpointId</h2>
<!-- backwards compatibility -->
<a id="schemaendpointid"></a>
<a id="schema_EndpointId"></a>
<a id="tocSendpointid"></a>
<a id="tocsendpointid"></a>

```json
"string"
```

<h2 id="tocS_DeleteEndpointRequest">DeleteEndpointRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteendpointrequest"></a>
<a id="schema_DeleteEndpointRequest"></a>
<a id="tocSdeleteendpointrequest"></a>
<a id="tocsdeleteendpointrequest"></a>

```json
{}
```

<h2 id="tocS_EndpointStatus">EndpointStatus</h2>
<!-- backwards compatibility -->
<a id="schemaendpointstatus"></a>
<a id="schema_EndpointStatus"></a>
<a id="tocSendpointstatus"></a>
<a id="tocsendpointstatus"></a>

```json
"Pending"
```

<h2 id="tocS_NetworkInterfaces">NetworkInterfaces</h2>
<!-- backwards compatibility -->
<a id="schemanetworkinterfaces"></a>
<a id="schema_NetworkInterfaces"></a>
<a id="tocSnetworkinterfaces"></a>
<a id="tocsnetworkinterfaces"></a>

```json
[
  {
    "NetworkInterfaceId": {}
  }
]
```

<h2 id="tocS_VpcId">VpcId</h2>
<!-- backwards compatibility -->
<a id="schemavpcid"></a>
<a id="schema_VpcId"></a>
<a id="tocSvpcid"></a>
<a id="tocsvpcid"></a>

```json
"string"
```

<h2 id="tocS_FailedReason">FailedReason</h2>
<!-- backwards compatibility -->
<a id="schemafailedreason"></a>
<a id="schema_FailedReason"></a>
<a id="tocSfailedreason"></a>
<a id="tocsfailedreason"></a>

```json
{
  "ErrorCode": {},
  "Message": {}
}
```

The failure reason, if any, for a create or delete endpoint operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ErrorCode|object|false|none|none|
|Message|object|false|none|none|

<h2 id="tocS_Endpoint">Endpoint</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint"></a>
<a id="schema_Endpoint"></a>
<a id="tocSendpoint"></a>
<a id="tocsendpoint"></a>

```json
{
  "EndpointArn": {},
  "OutpostsId": {},
  "CidrBlock": {},
  "Status": {},
  "CreationTime": {},
  "NetworkInterfaces": {},
  "VpcId": {},
  "SubnetId": {},
  "SecurityGroupId": {},
  "AccessType": {},
  "CustomerOwnedIpv4Pool": {},
  "FailedReason": {
    "ErrorCode": {},
    "Message": {}
  }
}
```

Amazon S3 on Outposts Access Points simplify managing data access at scale for shared datasets in S3 on Outposts. S3 on Outposts uses endpoints to connect to Outposts buckets so that you can perform actions within your virtual private cloud (VPC). For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/WorkingWithS3Outposts.html"> Accessing S3 on Outposts using VPC-only access points</a> in the <i>Amazon Simple Storage Service User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointArn|object|false|none|none|
|OutpostsId|object|false|none|none|
|CidrBlock|object|false|none|none|
|Status|object|false|none|none|
|CreationTime|object|false|none|none|
|NetworkInterfaces|object|false|none|none|
|VpcId|object|false|none|none|
|SubnetId|object|false|none|none|
|SecurityGroupId|object|false|none|none|
|AccessType|object|false|none|none|
|CustomerOwnedIpv4Pool|object|false|none|none|
|FailedReason|object|false|none|none|

<h2 id="tocS_Endpoints">Endpoints</h2>
<!-- backwards compatibility -->
<a id="schemaendpoints"></a>
<a id="schema_Endpoints"></a>
<a id="tocSendpoints"></a>
<a id="tocsendpoints"></a>

```json
[
  {
    "EndpointArn": {},
    "OutpostsId": {},
    "CidrBlock": {},
    "Status": {},
    "CreationTime": {},
    "NetworkInterfaces": {},
    "VpcId": {},
    "SubnetId": {},
    "SecurityGroupId": {},
    "AccessType": {},
    "CustomerOwnedIpv4Pool": {},
    "FailedReason": {
      "ErrorCode": {},
      "Message": {}
    }
  }
]
```

<h2 id="tocS_ErrorCode">ErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemaerrorcode"></a>
<a id="schema_ErrorCode"></a>
<a id="tocSerrorcode"></a>
<a id="tocserrorcode"></a>

```json
"string"
```

<h2 id="tocS_Message">Message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

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
0
```

<h2 id="tocS_ListEndpointsRequest">ListEndpointsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistendpointsrequest"></a>
<a id="schema_ListEndpointsRequest"></a>
<a id="tocSlistendpointsrequest"></a>
<a id="tocslistendpointsrequest"></a>

```json
{}
```

<h2 id="tocS_ListOutpostsWithS3Request">ListOutpostsWithS3Request</h2>
<!-- backwards compatibility -->
<a id="schemalistoutpostswiths3request"></a>
<a id="schema_ListOutpostsWithS3Request"></a>
<a id="tocSlistoutpostswiths3request"></a>
<a id="tocslistoutpostswiths3request"></a>

```json
{}
```

<h2 id="tocS_Outposts">Outposts</h2>
<!-- backwards compatibility -->
<a id="schemaoutposts"></a>
<a id="schema_Outposts"></a>
<a id="tocSoutposts"></a>
<a id="tocsoutposts"></a>

```json
[
  {
    "OutpostArn": {},
    "OutpostId": {},
    "OwnerId": {},
    "CapacityInBytes": {}
  }
]
```

<h2 id="tocS_ListSharedEndpointsRequest">ListSharedEndpointsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistsharedendpointsrequest"></a>
<a id="schema_ListSharedEndpointsRequest"></a>
<a id="tocSlistsharedendpointsrequest"></a>
<a id="tocslistsharedendpointsrequest"></a>

```json
{}
```

<h2 id="tocS_NetworkInterfaceId">NetworkInterfaceId</h2>
<!-- backwards compatibility -->
<a id="schemanetworkinterfaceid"></a>
<a id="schema_NetworkInterfaceId"></a>
<a id="tocSnetworkinterfaceid"></a>
<a id="tocsnetworkinterfaceid"></a>

```json
"string"
```

<h2 id="tocS_NetworkInterface">NetworkInterface</h2>
<!-- backwards compatibility -->
<a id="schemanetworkinterface"></a>
<a id="schema_NetworkInterface"></a>
<a id="tocSnetworkinterface"></a>
<a id="tocsnetworkinterface"></a>

```json
{
  "NetworkInterfaceId": {}
}
```

The container for the network interface.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NetworkInterfaceId|object|false|none|none|

<h2 id="tocS_OutpostArn">OutpostArn</h2>
<!-- backwards compatibility -->
<a id="schemaoutpostarn"></a>
<a id="schema_OutpostArn"></a>
<a id="tocSoutpostarn"></a>
<a id="tocsoutpostarn"></a>

```json
"string"
```

<h2 id="tocS_Outpost">Outpost</h2>
<!-- backwards compatibility -->
<a id="schemaoutpost"></a>
<a id="schema_Outpost"></a>
<a id="tocSoutpost"></a>
<a id="tocsoutpost"></a>

```json
{
  "OutpostArn": {},
  "OutpostId": {},
  "OwnerId": {},
  "CapacityInBytes": {}
}
```

Contains the details for the Outpost object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OutpostArn|object|false|none|none|
|OutpostId|object|false|none|none|
|OwnerId|object|false|none|none|
|CapacityInBytes|object|false|none|none|
