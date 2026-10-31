<h1 id="aws-global-accelerator">AWS Global Accelerator v2018-08-08</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Global Accelerator</fullname> <p>This is the <i>Global Accelerator API Reference</i>. This guide is for developers who need detailed information about Global Accelerator API actions, data types, and errors. For more information about Global Accelerator features, see the <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html">Global Accelerator Developer Guide</a>.</p> <p>Global Accelerator is a service in which you create <i>accelerators</i> to improve the performance of your applications for local and global users. Depending on the type of accelerator you choose, you can gain additional benefits. </p> <ul> <li> <p>By using a standard accelerator, you can improve availability of your internet applications that are used by a global audience. With a standard accelerator, Global Accelerator directs traffic to optimal endpoints over the Amazon Web Services global network. </p> </li> <li> <p>For other scenarios, you might choose a custom routing accelerator. With a custom routing accelerator, you can use application logic to directly map one or more users to a specific endpoint among many endpoints.</p> </li> </ul> <important> <p>Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the US West (Oregon) Region to create, update, or otherwise work with accelerators. That is, for example, specify <code>--region us-west-2</code> on AWS CLI commands.</p> </important> <p>By default, Global Accelerator provides you with static IP addresses that you associate with your accelerator. The static IP addresses are anycast from the Amazon Web Services edge network. For IPv4, Global Accelerator provides two static IPv4 addresses. For dual-stack, Global Accelerator provides a total of four addresses: two static IPv4 addresses and two static IPv6 addresses. With a standard accelerator for IPv4, instead of using the addresses that Global Accelerator provides, you can configure these entry points to be IPv4 addresses from your own IP address ranges that you bring toGlobal Accelerator (BYOIP). </p> <p>For a standard accelerator, they distribute incoming application traffic across multiple endpoint resources in multiple Amazon Web Services Regions , which increases the availability of your applications. Endpoints for standard accelerators can be Network Load Balancers, Application Load Balancers, Amazon EC2 instances, or Elastic IP addresses that are located in one Amazon Web Services Region or multiple Amazon Web Services Regions. For custom routing accelerators, you map traffic that arrives to the static IP addresses to specific Amazon EC2 servers in endpoints that are virtual private cloud (VPC) subnets.</p> <important> <p>The static IP addresses remain assigned to your accelerator for as long as it exists, even if you disable the accelerator and it no longer accepts or routes traffic. However, when you <i>delete</i> an accelerator, you lose the static IP addresses that are assigned to it, so you can no longer route traffic by using them. You can use IAM policies like tag-based permissions with Global Accelerator to limit the users who have permissions to delete an accelerator. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/access-control-manage-access-tag-policies.html">Tag-based policies</a>.</p> </important> <p>For standard accelerators, Global Accelerator uses the Amazon Web Services global network to route traffic to the optimal regional endpoint based on health, client location, and policies that you configure. The service reacts instantly to changes in health or configuration to ensure that internet traffic from clients is always directed to healthy endpoints.</p> <p>For more information about understanding and using Global Accelerator, see the <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html">Global Accelerator Developer Guide</a>.</p>

Base URLs:

* <a href="http://globalaccelerator.us-east-1.amazonaws.com">http://globalaccelerator.us-east-1.amazonaws.com</a> - The AWS Global Accelerator multi-region endpoint

* <a href="https://globalaccelerator.us-east-1.amazonaws.com">https://globalaccelerator.us-east-1.amazonaws.com</a> - The AWS Global Accelerator multi-region endpoint

* <a href="http://globalaccelerator.cn-north-1.amazonaws.com.cn">http://globalaccelerator.cn-north-1.amazonaws.com.cn</a> - The AWS Global Accelerator endpoint for China (Beijing) and China (Ningxia)

* <a href="https://globalaccelerator.cn-north-1.amazonaws.com.cn">https://globalaccelerator.cn-north-1.amazonaws.com.cn</a> - The AWS Global Accelerator endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/globalaccelerator/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-global-accelerator-default">Default</h1>

## AddCustomRoutingEndpoints

<a id="opIdAddCustomRoutingEndpoints"></a>

> Code samples

```bash
curl 'https://globalaccelerator.us-east-1.amazonaws.com/#X-Amz-Target=GlobalAccelerator_V20180706.AddCustomRoutingEndpoints' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GlobalAccelerator_V20180706.AddCustomRoutingEndpoints' \
  -d '{
    "EndpointConfigurations": {},
    "EndpointGroupArn": {}
  }'
```

`POST /#X-Amz-Target=GlobalAccelerator_V20180706.AddCustomRoutingEndpoints`

<p>Associate a virtual private cloud (VPC) subnet endpoint with your custom routing accelerator.</p> <p>The listener port range must be large enough to support the number of IP addresses that can be specified in your subnet. The number of ports required is: subnet size times the number of ports per destination EC2 instances. For example, a subnet defined as /24 requires a listener port range of at least 255 ports. </p> <p>Note: You must have enough remaining listener ports available to map to the subnet ports, or the call will fail with a LimitExceededException.</p> <p>By default, all destinations in a subnet in a custom routing accelerator cannot receive traffic. To enable all destinations to receive traffic, or to specify individual port mappings that can receive traffic, see the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_AllowCustomRoutingTraffic.html"> AllowCustomRoutingTraffic</a> operation.</p>

> Body parameter

```json
{
  "EndpointConfigurations": {},
  "EndpointGroupArn": {}
}
```

<h3 id="addcustomroutingendpoints-parameters">Parameters</h3>

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
|body|body|[AddCustomRoutingEndpointsRequest](#schemaaddcustomroutingendpointsrequest)|true|none|
|» EndpointConfigurations|body|object|true|none|
|» EndpointGroupArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GlobalAccelerator_V20180706.AddCustomRoutingEndpoints|

> Example responses

> 200 Response

```json
{
  "EndpointDescriptions": {},
  "EndpointGroupArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="addcustomroutingendpoints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AddCustomRoutingEndpointsResponse](#schemaaddcustomroutingendpointsresponse)|
|480|480|EndpointAlreadyExistsException|[EndpointAlreadyExistsException](#schemaendpointalreadyexistsexception)|
|481|481|EndpointGroupNotFoundException|[EndpointGroupNotFoundException](#schemaendpointgroupnotfoundexception)|
|482|482|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|483|483|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AddEndpoints

<a id="opIdAddEndpoints"></a>

> Code samples

```bash
curl 'https://globalaccelerator.us-east-1.amazonaws.com/#X-Amz-Target=GlobalAccelerator_V20180706.AddEndpoints' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GlobalAccelerator_V20180706.AddEndpoints' \
  -d '{
    "EndpointConfigurations": {},
    "EndpointGroupArn": {}
  }'
```

`POST /#X-Amz-Target=GlobalAccelerator_V20180706.AddEndpoints`

<p>Add endpoints to an endpoint group. The <code>AddEndpoints</code> API operation is the recommended option for adding endpoints. The alternative options are to add endpoints when you create an endpoint group (with the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_CreateEndpointGroup.html">CreateEndpointGroup</a> API) or when you update an endpoint group (with the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateEndpointGroup.html">UpdateEndpointGroup</a> API). </p> <p>There are two advantages to using <code>AddEndpoints</code> to add endpoints:</p> <ul> <li> <p>It's faster, because Global Accelerator only has to resolve the new endpoints that you're adding.</p> </li> <li> <p>It's more convenient, because you don't need to specify all of the current endpoints that are already in the endpoint group in addition to the new endpoints that you want to add.</p> </li> </ul>

> Body parameter

```json
{
  "EndpointConfigurations": {},
  "EndpointGroupArn": {}
}
```

<h3 id="addendpoints-parameters">Parameters</h3>

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
|body|body|[AddEndpointsRequest](#schemaaddendpointsrequest)|true|none|
|» EndpointConfigurations|body|object|true|none|
|» EndpointGroupArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GlobalAccelerator_V20180706.AddEndpoints|

> Example responses

> 200 Response

```json
{
  "EndpointDescriptions": {},
  "EndpointGroupArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="addendpoints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AddEndpointsResponse](#schemaaddendpointsresponse)|
|480|480|TransactionInProgressException|[TransactionInProgressException](#schematransactioninprogressexception)|
|481|481|EndpointGroupNotFoundException|[EndpointGroupNotFoundException](#schemaendpointgroupnotfoundexception)|
|482|482|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|483|483|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AdvertiseByoipCidr

<a id="opIdAdvertiseByoipCidr"></a>

> Code samples

```bash
curl 'https://globalaccelerator.us-east-1.amazonaws.com/#X-Amz-Target=GlobalAccelerator_V20180706.AdvertiseByoipCidr' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GlobalAccelerator_V20180706.AdvertiseByoipCidr' \
  -d '{
    "Cidr": {}
  }'
```

`POST /#X-Amz-Target=GlobalAccelerator_V20180706.AdvertiseByoipCidr`

<p>Advertises an IPv4 address range that is provisioned for use with your Amazon Web Services resources through bring your own IP addresses (BYOIP). It can take a few minutes before traffic to the specified addresses starts routing to Amazon Web Services because of propagation delays. </p> <p>To stop advertising the BYOIP address range, use <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/WithdrawByoipCidr.html"> WithdrawByoipCidr</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>

> Body parameter

```json
{
  "Cidr": {}
}
```

<h3 id="advertisebyoipcidr-parameters">Parameters</h3>

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
|body|body|[AdvertiseByoipCidrRequest](#schemaadvertisebyoipcidrrequest)|true|none|
|» Cidr|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GlobalAccelerator_V20180706.AdvertiseByoipCidr|

> Example responses

> 200 Response

```json
{
  "ByoipCidr": {
    "Cidr": {},
    "State": {},
    "Events": {}
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

<h3 id="advertisebyoipcidr-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AdvertiseByoipCidrResponse](#schemaadvertisebyoipcidrresponse)|
|480|480|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|481|481|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ByoipCidrNotFoundException|[ByoipCidrNotFoundException](#schemabyoipcidrnotfoundexception)|
|484|484|IncorrectCidrStateException|[IncorrectCidrStateException](#schemaincorrectcidrstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AllowCustomRoutingTraffic

<a id="opIdAllowCustomRoutingTraffic"></a>

> Code samples

```bash
curl 'https://globalaccelerator.us-east-1.amazonaws.com/#X-Amz-Target=GlobalAccelerator_V20180706.AllowCustomRoutingTraffic' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GlobalAccelerator_V20180706.AllowCustomRoutingTraffic' \
  -d '{
    "EndpointGroupArn": {},
    "EndpointId": {},
    "DestinationAddresses": {},
    "DestinationPorts": {},
    "AllowAllTrafficToEndpoint": {}
  }'
```

`POST /#X-Amz-Target=GlobalAccelerator_V20180706.AllowCustomRoutingTraffic`

<p>Specify the Amazon EC2 instance (destination) IP addresses and ports for a VPC subnet endpoint that can receive traffic for a custom routing accelerator. You can allow traffic to all destinations in the subnet endpoint, or allow traffic to a specified list of destination IP addresses and ports in the subnet. Note that you cannot specify IP addresses or ports outside of the range that you configured for the endpoint group.</p> <p>After you make changes, you can verify that the updates are complete by checking the status of your accelerator: the status changes from IN_PROGRESS to DEPLOYED.</p>

> Body parameter

```json
{
  "EndpointGroupArn": {},
  "EndpointId": {},
  "DestinationAddresses": {},
  "DestinationPorts": {},
  "AllowAllTrafficToEndpoint": {}
}
```

<h3 id="allowcustomroutingtraffic-parameters">Parameters</h3>

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
|body|body|[AllowCustomRoutingTrafficRequest](#schemaallowcustomroutingtrafficrequest)|true|none|
|» EndpointGroupArn|body|object|true|none|
|» EndpointId|body|object|true|none|
|» DestinationAddresses|body|object|false|none|
|» DestinationPorts|body|object|false|none|
|» AllowAllTrafficToEndpoint|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GlobalAccelerator_V20180706.AllowCustomRoutingTraffic|

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

<h3 id="allowcustomroutingtraffic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|EndpointGroupNotFoundException|[EndpointGroupNotFoundException](#schemaendpointgroupnotfoundexception)|
|481|481|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|482|482|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateAccelerator

<a id="opIdCreateAccelerator"></a>

> Code samples

```bash
curl 'https://globalaccelerator.us-east-1.amazonaws.com/#X-Amz-Target=GlobalAccelerator_V20180706.CreateAccelerator' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GlobalAccelerator_V20180706.CreateAccelerator' \
  -d '{
    "Name": {},
    "IpAddressType": {},
    "IpAddresses": {},
    "Enabled": {},
    "IdempotencyToken": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=GlobalAccelerator_V20180706.CreateAccelerator`

<p>Create an accelerator. An accelerator includes one or more listeners that process inbound connections and direct traffic to one or more endpoint groups, each of which includes endpoints, such as Network Load Balancers. </p> <important> <p>Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the US West (Oregon) Region to create, update, or otherwise work with accelerators. That is, for example, specify <code>--region us-west-2</code> on AWS CLI commands.</p> </important>

> Body parameter

```json
{
  "Name": {},
  "IpAddressType": {},
  "IpAddresses": {},
  "Enabled": {},
  "IdempotencyToken": {},
  "Tags": {}
}
```

<h3 id="createaccelerator-parameters">Parameters</h3>

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
|body|body|[CreateAcceleratorRequest](#schemacreateacceleratorrequest)|true|none|
|» Name|body|object|true|none|
|» IpAddressType|body|object|false|none|
|» IpAddresses|body|object|false|none|
|» Enabled|body|object|false|none|
|» IdempotencyToken|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GlobalAccelerator_V20180706.CreateAccelerator|

> Example responses

> 200 Response

```json
{
  "Accelerator": {
    "AcceleratorArn": {},
    "Name": {},
    "IpAddressType": {},
    "Enabled": {},
    "IpSets": {},
    "DnsName": {},
    "Status": {},
    "CreatedTime": {},
    "LastModifiedTime": {},
    "DualStackDnsName": {},
    "Events": {}
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

<h3 id="createaccelerator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateAcceleratorResponse](#schemacreateacceleratorresponse)|
|480|480|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|481|481|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateCustomRoutingAccelerator

<a id="opIdCreateCustomRoutingAccelerator"></a>

> Code samples

```bash
curl 'https://globalaccelerator.us-east-1.amazonaws.com/#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingAccelerator' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GlobalAccelerator_V20180706.CreateCustomRoutingAccelerator' \
  -d '{
    "Name": {},
    "IpAddressType": {},
    "IpAddresses": {},
    "Enabled": {},
    "IdempotencyToken": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingAccelerator`

<p>Create a custom routing accelerator. A custom routing accelerator directs traffic to one of possibly thousands of Amazon EC2 instance destinations running in a single or multiple virtual private clouds (VPC) subnet endpoints.</p> <p>Be aware that, by default, all destination EC2 instances in a VPC subnet endpoint cannot receive traffic. To enable all destinations to receive traffic, or to specify individual port mappings that can receive traffic, see the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_AllowCustomRoutingTraffic.html"> AllowCustomRoutingTraffic</a> operation.</p> <important> <p>Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the US West (Oregon) Region to create, update, or otherwise work with accelerators. That is, for example, specify <code>--region us-west-2</code> on AWS CLI commands.</p> </important>

> Body parameter

```json
{
  "Name": {},
  "IpAddressType": {},
  "IpAddresses": {},
  "Enabled": {},
  "IdempotencyToken": {},
  "Tags": {}
}
```

<h3 id="createcustomroutingaccelerator-parameters">Parameters</h3>

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
|body|body|[CreateCustomRoutingAcceleratorRequest](#schemacreatecustomroutingacceleratorrequest)|true|none|
|» Name|body|object|true|none|
|» IpAddressType|body|object|false|none|
|» IpAddresses|body|object|false|none|
|» Enabled|body|object|false|none|
|» IdempotencyToken|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GlobalAccelerator_V20180706.CreateCustomRoutingAccelerator|

> Example responses

> 200 Response

```json
{
  "Accelerator": {
    "AcceleratorArn": {},
    "Name": {},
    "IpAddressType": {},
    "Enabled": {},
    "IpSets": {},
    "DnsName": {},
    "Status": {},
    "CreatedTime": {},
    "LastModifiedTime": {}
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

<h3 id="createcustomroutingaccelerator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateCustomRoutingAcceleratorResponse](#schemacreatecustomroutingacceleratorresponse)|
|480|480|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|481|481|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateCustomRoutingEndpointGroup

<a id="opIdCreateCustomRoutingEndpointGroup"></a>

> Code samples

```bash
curl 'https://globalaccelerator.us-east-1.amazonaws.com/#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingEndpointGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GlobalAccelerator_V20180706.CreateCustomRoutingEndpointGroup' \
  -d '{
    "ListenerArn": {},
    "EndpointGroupRegion": {},
    "DestinationConfigurations": {},
    "IdempotencyToken": {}
  }'
```

`POST /#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingEndpointGroup`

Create an endpoint group for the specified listener for a custom routing accelerator. An endpoint group is a collection of endpoints in one Amazon Web Services Region. 

> Body parameter

```json
{
  "ListenerArn": {},
  "EndpointGroupRegion": {},
  "DestinationConfigurations": {},
  "IdempotencyToken": {}
}
```

<h3 id="createcustomroutingendpointgroup-parameters">Parameters</h3>

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
|body|body|[CreateCustomRoutingEndpointGroupRequest](#schemacreatecustomroutingendpointgrouprequest)|true|none|
|» ListenerArn|body|object|true|none|
|» EndpointGroupRegion|body|object|true|none|
|» DestinationConfigurations|body|object|true|none|
|» IdempotencyToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GlobalAccelerator_V20180706.CreateCustomRoutingEndpointGroup|

> Example responses

> 200 Response

```json
{
  "EndpointGroup": {
    "EndpointGroupArn": {},
    "EndpointGroupRegion": {},
    "DestinationDescriptions": {},
    "EndpointDescriptions": {}
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

<h3 id="createcustomroutingendpointgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateCustomRoutingEndpointGroupResponse](#schemacreatecustomroutingendpointgroupresponse)|
|480|480|AcceleratorNotFoundException|[AcceleratorNotFoundException](#schemaacceleratornotfoundexception)|
|481|481|EndpointGroupAlreadyExistsException|[EndpointGroupAlreadyExistsException](#schemaendpointgroupalreadyexistsexception)|
|482|482|ListenerNotFoundException|[ListenerNotFoundException](#schemalistenernotfoundexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|484|484|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|485|485|InvalidPortRangeException|[InvalidPortRangeException](#schemainvalidportrangeexception)|
|486|486|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|487|487|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateCustomRoutingListener

<a id="opIdCreateCustomRoutingListener"></a>

> Code samples

```bash
curl 'https://globalaccelerator.us-east-1.amazonaws.com/#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingListener' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GlobalAccelerator_V20180706.CreateCustomRoutingListener' \
  -d '{
    "AcceleratorArn": {},
    "PortRanges": {},
    "IdempotencyToken": {}
  }'
```

`POST /#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingListener`

Create a listener to process inbound connections from clients to a custom routing accelerator. Connections arrive to assigned static IP addresses on the port range that you specify. 

> Body parameter

```json
{
  "AcceleratorArn": {},
  "PortRanges": {},
  "IdempotencyToken": {}
}
```

<h3 id="createcustomroutinglistener-parameters">Parameters</h3>

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
|body|body|[CreateCustomRoutingListenerRequest](#schemacreatecustomroutinglistenerrequest)|true|none|
|» AcceleratorArn|body|object|true|none|
|» PortRanges|body|object|true|none|
|» IdempotencyToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GlobalAccelerator_V20180706.CreateCustomRoutingListener|

> Example responses

> 200 Response

```json
{
  "Listener": {
    "ListenerArn": {},
    "PortRanges": {}
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

<h3 id="createcustomroutinglistener-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateCustomRoutingListenerResponse](#schemacreatecustomroutinglistenerresponse)|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|AcceleratorNotFoundException|[AcceleratorNotFoundException](#schemaacceleratornotfoundexception)|
|482|482|InvalidPortRangeException|[InvalidPortRangeException](#schemainvalidportrangeexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateEndpointGroup

<a id="opIdCreateEndpointGroup"></a>

> Code samples

```bash
curl 'https://globalaccelerator.us-east-1.amazonaws.com/#X-Amz-Target=GlobalAccelerator_V20180706.CreateEndpointGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GlobalAccelerator_V20180706.CreateEndpointGroup' \
  -d '{
    "ListenerArn": {},
    "EndpointGroupRegion": {},
    "EndpointConfigurations": {},
    "TrafficDialPercentage": {},
    "HealthCheckPort": {},
    "HealthCheckProtocol": {},
    "HealthCheckPath": {},
    "HealthCheckIntervalSeconds": {},
    "ThresholdCount": {},
    "IdempotencyToken": {},
    "PortOverrides": {}
  }'
```

`POST /#X-Amz-Target=GlobalAccelerator_V20180706.CreateEndpointGroup`

Create an endpoint group for the specified listener. An endpoint group is a collection of endpoints in one Amazon Web Services Region. A resource must be valid and active when you add it as an endpoint.

> Body parameter

```json
{
  "ListenerArn": {},
  "EndpointGroupRegion": {},
  "EndpointConfigurations": {},
  "TrafficDialPercentage": {},
  "HealthCheckPort": {},
  "HealthCheckProtocol": {},
  "HealthCheckPath": {},
  "HealthCheckIntervalSeconds": {},
  "ThresholdCount": {},
  "IdempotencyToken": {},
  "PortOverrides": {}
}
```

<h3 id="createendpointgroup-parameters">Parameters</h3>

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
|body|body|[CreateEndpointGroupRequest](#schemacreateendpointgrouprequest)|true|none|
|» ListenerArn|body|object|true|none|
|» EndpointGroupRegion|body|object|true|none|
|» EndpointConfigurations|body|object|false|none|
|» TrafficDialPercentage|body|object|false|none|
|» HealthCheckPort|body|object|false|none|
|» HealthCheckProtocol|body|object|false|none|
|» HealthCheckPath|body|object|false|none|
|» HealthCheckIntervalSeconds|body|object|false|none|
|» ThresholdCount|body|object|false|none|
|» IdempotencyToken|body|object|true|none|
|» PortOverrides|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GlobalAccelerator_V20180706.CreateEndpointGroup|

> Example responses

> 200 Response

```json
{
  "EndpointGroup": {
    "EndpointGroupArn": {},
    "EndpointGroupRegion": {},
    "EndpointDescriptions": {},
    "TrafficDialPercentage": {},
    "HealthCheckPort": {},
    "HealthCheckProtocol": {},
    "HealthCheckPath": {},
    "HealthCheckIntervalSeconds": {},
    "ThresholdCount": {},
    "PortOverrides": {}
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

<h3 id="createendpointgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateEndpointGroupResponse](#schemacreateendpointgroupresponse)|
|480|480|AcceleratorNotFoundException|[AcceleratorNotFoundException](#schemaacceleratornotfoundexception)|
|481|481|EndpointGroupAlreadyExistsException|[EndpointGroupAlreadyExistsException](#schemaendpointgroupalreadyexistsexception)|
|482|482|ListenerNotFoundException|[ListenerNotFoundException](#schemalistenernotfoundexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|484|484|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|486|486|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateListener

<a id="opIdCreateListener"></a>

> Code samples

```bash
curl 'https://globalaccelerator.us-east-1.amazonaws.com/#X-Amz-Target=GlobalAccelerator_V20180706.CreateListener' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GlobalAccelerator_V20180706.CreateListener' \
  -d '{
    "AcceleratorArn": {},
    "PortRanges": {},
    "Protocol": {},
    "ClientAffinity": {},
    "IdempotencyToken": {}
  }'
```

`POST /#X-Amz-Target=GlobalAccelerator_V20180706.CreateListener`

Create a listener to process inbound connections from clients to an accelerator. Connections arrive to assigned static IP addresses on a port, port range, or list of port ranges that you specify. 

> Body parameter

```json
{
  "AcceleratorArn": {},
  "PortRanges": {},
  "Protocol": {},
  "ClientAffinity": {},
  "IdempotencyToken": {}
}
```

<h3 id="createlistener-parameters">Parameters</h3>

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
|body|body|[CreateListenerRequest](#schemacreatelistenerrequest)|true|none|
|» AcceleratorArn|body|object|true|none|
|» PortRanges|body|object|true|none|
|» Protocol|body|object|true|none|
|» ClientAffinity|body|object|false|none|
|» IdempotencyToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GlobalAccelerator_V20180706.CreateListener|

> Example responses

> 200 Response

```json
{
  "Listener": {
    "ListenerArn": {},
    "PortRanges": {},
    "Protocol": {},
    "ClientAffinity": {}
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

<h3 id="createlistener-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateListenerResponse](#schemacreatelistenerresponse)|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|AcceleratorNotFoundException|[AcceleratorNotFoundException](#schemaacceleratornotfoundexception)|
|482|482|InvalidPortRangeException|[InvalidPortRangeException](#schemainvalidportrangeexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAccelerator

<a id="opIdDeleteAccelerator"></a>

> Code samples

```bash
curl 'https://globalaccelerator.us-east-1.amazonaws.com/#X-Amz-Target=GlobalAccelerator_V20180706.DeleteAccelerator' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GlobalAccelerator_V20180706.DeleteAccelerator' \
  -d '{
    "AcceleratorArn": {}
  }'
```

`POST /#X-Amz-Target=GlobalAccelerator_V20180706.DeleteAccelerator`

<p>Delete an accelerator. Before you can delete an accelerator, you must disable it and remove all dependent resources (listeners and endpoint groups). To disable the accelerator, update the accelerator to set <code>Enabled</code> to false.</p> <important> <p>When you create an accelerator, by default, Global Accelerator provides you with a set of two static IP addresses. Alternatively, you can bring your own IP address ranges to Global Accelerator and assign IP addresses from those ranges. </p> <p>The IP addresses are assigned to your accelerator for as long as it exists, even if you disable the accelerator and it no longer accepts or routes traffic. However, when you <i>delete</i> an accelerator, you lose the static IP addresses that are assigned to the accelerator, so you can no longer route traffic by using them. As a best practice, ensure that you have permissions in place to avoid inadvertently deleting accelerators. You can use IAM policies with Global Accelerator to limit the users who have permissions to delete an accelerator. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/auth-and-access-control.html">Identity and access management</a> in the <i>Global Accelerator Developer Guide</i>.</p> </important>

> Body parameter

```json
{
  "AcceleratorArn": {}
}
```

<h3 id="deleteaccelerator-parameters">Parameters</h3>

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
|body|body|[DeleteAcceleratorRequest](#schemadeleteacceleratorrequest)|true|none|
|» AcceleratorArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GlobalAccelerator_V20180706.DeleteAccelerator|

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

<h3 id="deleteaccelerator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|AcceleratorNotFoundException|[AcceleratorNotFoundException](#schemaacceleratornotfoundexception)|
|481|481|AcceleratorNotDisabledException|[AcceleratorNotDisabledException](#schemaacceleratornotdisabledexception)|
|482|482|AssociatedListenerFoundException|[AssociatedListenerFoundException](#schemaassociatedlistenerfoundexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|484|484|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteCustomRoutingAccelerator

<a id="opIdDeleteCustomRoutingAccelerator"></a>

> Code samples

```bash
curl 'https://globalaccelerator.us-east-1.amazonaws.com/#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingAccelerator' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GlobalAccelerator_V20180706.DeleteCustomRoutingAccelerator' \
  -d '{
    "AcceleratorArn": {}
  }'
```

`POST /#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingAccelerator`

<p>Delete a custom routing accelerator. Before you can delete an accelerator, you must disable it and remove all dependent resources (listeners and endpoint groups). To disable the accelerator, update the accelerator to set <code>Enabled</code> to false.</p> <important> <p>When you create a custom routing accelerator, by default, Global Accelerator provides you with a set of two static IP addresses. </p> <p>The IP addresses are assigned to your accelerator for as long as it exists, even if you disable the accelerator and it no longer accepts or routes traffic. However, when you <i>delete</i> an accelerator, you lose the static IP addresses that are assigned to the accelerator, so you can no longer route traffic by using them. As a best practice, ensure that you have permissions in place to avoid inadvertently deleting accelerators. You can use IAM policies with Global Accelerator to limit the users who have permissions to delete an accelerator. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/auth-and-access-control.html">Identity and access management</a> in the <i>Global Accelerator Developer Guide</i>.</p> </important>

> Body parameter

```json
{
  "AcceleratorArn": {}
}
```

<h3 id="deletecustomroutingaccelerator-parameters">Parameters</h3>

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
|body|body|[DeleteCustomRoutingAcceleratorRequest](#schemadeletecustomroutingacceleratorrequest)|true|none|
|» AcceleratorArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GlobalAccelerator_V20180706.DeleteCustomRoutingAccelerator|

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

<h3 id="deletecustomroutingaccelerator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|AcceleratorNotFoundException|[AcceleratorNotFoundException](#schemaacceleratornotfoundexception)|
|481|481|AcceleratorNotDisabledException|[AcceleratorNotDisabledException](#schemaacceleratornotdisabledexception)|
|482|482|AssociatedListenerFoundException|[AssociatedListenerFoundException](#schemaassociatedlistenerfoundexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|484|484|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteCustomRoutingEndpointGroup

<a id="opIdDeleteCustomRoutingEndpointGroup"></a>

> Code samples

```bash
curl 'https://globalaccelerator.us-east-1.amazonaws.com/#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingEndpointGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GlobalAccelerator_V20180706.DeleteCustomRoutingEndpointGroup' \
  -d '{
    "EndpointGroupArn": {}
  }'
```

`POST /#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingEndpointGroup`

Delete an endpoint group from a listener for a custom routing accelerator.

> Body parameter

```json
{
  "EndpointGroupArn": {}
}
```

<h3 id="deletecustomroutingendpointgroup-parameters">Parameters</h3>

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
|body|body|[DeleteCustomRoutingEndpointGroupRequest](#schemadeletecustomroutingendpointgrouprequest)|true|none|
|» EndpointGroupArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GlobalAccelerator_V20180706.DeleteCustomRoutingEndpointGroup|

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

<h3 id="deletecustomroutingendpointgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|EndpointGroupNotFoundException|[EndpointGroupNotFoundException](#schemaendpointgroupnotfoundexception)|
|482|482|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteCustomRoutingListener

<a id="opIdDeleteCustomRoutingListener"></a>

> Code samples

```bash
curl 'https://globalaccelerator.us-east-1.amazonaws.com/#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingListener' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GlobalAccelerator_V20180706.DeleteCustomRoutingListener' \
  -d '{
    "ListenerArn": {}
  }'
```

`POST /#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingListener`

Delete a listener for a custom routing accelerator.

> Body parameter

```json
{
  "ListenerArn": {}
}
```

<h3 id="deletecustomroutinglistener-parameters">Parameters</h3>

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
|body|body|[DeleteCustomRoutingListenerRequest](#schemadeletecustomroutinglistenerrequest)|true|none|
|» ListenerArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GlobalAccelerator_V20180706.DeleteCustomRoutingListener|

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

<h3 id="deletecustomroutinglistener-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|ListenerNotFoundException|[ListenerNotFoundException](#schemalistenernotfoundexception)|
|482|482|AssociatedEndpointGroupFoundException|[AssociatedEndpointGroupFoundException](#schemaassociatedendpointgroupfoundexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteEndpointGroup

<a id="opIdDeleteEndpointGroup"></a>

> Code samples

```bash
curl 'https://globalaccelerator.us-east-1.amazonaws.com/#X-Amz-Target=GlobalAccelerator_V20180706.DeleteEndpointGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GlobalAccelerator_V20180706.DeleteEndpointGroup' \
  -d '{
    "EndpointGroupArn": {}
  }'
```

`POST /#X-Amz-Target=GlobalAccelerator_V20180706.DeleteEndpointGroup`

Delete an endpoint group from a listener.

> Body parameter

```json
{
  "EndpointGroupArn": {}
}
```

<h3 id="deleteendpointgroup-parameters">Parameters</h3>

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
|body|body|[DeleteEndpointGroupRequest](#schemadeleteendpointgrouprequest)|true|none|
|» EndpointGroupArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GlobalAccelerator_V20180706.DeleteEndpointGroup|

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

<h3 id="deleteendpointgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|EndpointGroupNotFoundException|[EndpointGroupNotFoundException](#schemaendpointgroupnotfoundexception)|
|482|482|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteListener

<a id="opIdDeleteListener"></a>

> Code samples

```bash
curl 'https://globalaccelerator.us-east-1.amazonaws.com/#X-Amz-Target=GlobalAccelerator_V20180706.DeleteListener' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GlobalAccelerator_V20180706.DeleteListener' \
  -d '{
    "ListenerArn": {}
  }'
```

`POST /#X-Amz-Target=GlobalAccelerator_V20180706.DeleteListener`

Delete a listener from an accelerator.

> Body parameter

```json
{
  "ListenerArn": {}
}
```

<h3 id="deletelistener-parameters">Parameters</h3>

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
|body|body|[DeleteListenerRequest](#schemadeletelistenerrequest)|true|none|
|» ListenerArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GlobalAccelerator_V20180706.DeleteListener|

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

<h3 id="deletelistener-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|ListenerNotFoundException|[ListenerNotFoundException](#schemalistenernotfoundexception)|
|482|482|AssociatedEndpointGroupFoundException|[AssociatedEndpointGroupFoundException](#schemaassociatedendpointgroupfoundexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DenyCustomRoutingTraffic

<a id="opIdDenyCustomRoutingTraffic"></a>

> Code samples

```bash
curl 'https://globalaccelerator.us-east-1.amazonaws.com/#X-Amz-Target=GlobalAccelerator_V20180706.DenyCustomRoutingTraffic' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GlobalAccelerator_V20180706.DenyCustomRoutingTraffic' \
  -d '{
    "EndpointGroupArn": {},
    "EndpointId": {},
    "DestinationAddresses": {},
    "DestinationPorts": {},
    "DenyAllTrafficToEndpoint": {}
  }'
```

`POST /#X-Amz-Target=GlobalAccelerator_V20180706.DenyCustomRoutingTraffic`

<p>Specify the Amazon EC2 instance (destination) IP addresses and ports for a VPC subnet endpoint that cannot receive traffic for a custom routing accelerator. You can deny traffic to all destinations in the VPC endpoint, or deny traffic to a specified list of destination IP addresses and ports. Note that you cannot specify IP addresses or ports outside of the range that you configured for the endpoint group.</p> <p>After you make changes, you can verify that the updates are complete by checking the status of your accelerator: the status changes from IN_PROGRESS to DEPLOYED.</p>

> Body parameter

```json
{
  "EndpointGroupArn": {},
  "EndpointId": {},
  "DestinationAddresses": {},
  "DestinationPorts": {},
  "DenyAllTrafficToEndpoint": {}
}
```

<h3 id="denycustomroutingtraffic-parameters">Parameters</h3>

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
|body|body|[DenyCustomRoutingTrafficRequest](#schemadenycustomroutingtrafficrequest)|true|none|
|» EndpointGroupArn|body|object|true|none|
|» EndpointId|body|object|true|none|
|» DestinationAddresses|body|object|false|none|
|» DestinationPorts|body|object|false|none|
|» DenyAllTrafficToEndpoint|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GlobalAccelerator_V20180706.DenyCustomRoutingTraffic|

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

<h3 id="denycustomroutingtraffic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|EndpointGroupNotFoundException|[EndpointGroupNotFoundException](#schemaendpointgroupnotfoundexception)|
|481|481|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|482|482|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeprovisionByoipCidr

<a id="opIdDeprovisionByoipCidr"></a>

> Code samples

```bash
curl 'https://globalaccelerator.us-east-1.amazonaws.com/#X-Amz-Target=GlobalAccelerator_V20180706.DeprovisionByoipCidr' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GlobalAccelerator_V20180706.DeprovisionByoipCidr' \
  -d '{
    "Cidr": {}
  }'
```

`POST /#X-Amz-Target=GlobalAccelerator_V20180706.DeprovisionByoipCidr`

<p>Releases the specified address range that you provisioned to use with your Amazon Web Services resources through bring your own IP addresses (BYOIP) and deletes the corresponding address pool. </p> <p>Before you can release an address range, you must stop advertising it by using <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/WithdrawByoipCidr.html">WithdrawByoipCidr</a> and you must not have any accelerators that are using static IP addresses allocated from its address range. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>

> Body parameter

```json
{
  "Cidr": {}
}
```

<h3 id="deprovisionbyoipcidr-parameters">Parameters</h3>

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
|body|body|[DeprovisionByoipCidrRequest](#schemadeprovisionbyoipcidrrequest)|true|none|
|» Cidr|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GlobalAccelerator_V20180706.DeprovisionByoipCidr|

> Example responses

> 200 Response

```json
{
  "ByoipCidr": {
    "Cidr": {},
    "State": {},
    "Events": {}
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

<h3 id="deprovisionbyoipcidr-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeprovisionByoipCidrResponse](#schemadeprovisionbyoipcidrresponse)|
|480|480|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|481|481|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ByoipCidrNotFoundException|[ByoipCidrNotFoundException](#schemabyoipcidrnotfoundexception)|
|484|484|IncorrectCidrStateException|[IncorrectCidrStateException](#schemaincorrectcidrstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAccelerator

<a id="opIdDescribeAccelerator"></a>

> Code samples

```bash
curl 'https://globalaccelerator.us-east-1.amazonaws.com/#X-Amz-Target=GlobalAccelerator_V20180706.DescribeAccelerator' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GlobalAccelerator_V20180706.DescribeAccelerator' \
  -d '{
    "AcceleratorArn": {}
  }'
```

`POST /#X-Amz-Target=GlobalAccelerator_V20180706.DescribeAccelerator`

Describe an accelerator. 

> Body parameter

```json
{
  "AcceleratorArn": {}
}
```

<h3 id="describeaccelerator-parameters">Parameters</h3>

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
|body|body|[DescribeAcceleratorRequest](#schemadescribeacceleratorrequest)|true|none|
|» AcceleratorArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GlobalAccelerator_V20180706.DescribeAccelerator|

> Example responses

> 200 Response

```json
{
  "Accelerator": {
    "AcceleratorArn": {},
    "Name": {},
    "IpAddressType": {},
    "Enabled": {},
    "IpSets": {},
    "DnsName": {},
    "Status": {},
    "CreatedTime": {},
    "LastModifiedTime": {},
    "DualStackDnsName": {},
    "Events": {}
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

<h3 id="describeaccelerator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAcceleratorResponse](#schemadescribeacceleratorresponse)|
|480|480|AcceleratorNotFoundException|[AcceleratorNotFoundException](#schemaacceleratornotfoundexception)|
|481|481|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAcceleratorAttributes

<a id="opIdDescribeAcceleratorAttributes"></a>

> Code samples

```bash
curl 'https://globalaccelerator.us-east-1.amazonaws.com/#X-Amz-Target=GlobalAccelerator_V20180706.DescribeAcceleratorAttributes' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GlobalAccelerator_V20180706.DescribeAcceleratorAttributes' \
  -d '{
    "AcceleratorArn": {}
  }'
```

`POST /#X-Amz-Target=GlobalAccelerator_V20180706.DescribeAcceleratorAttributes`

Describe the attributes of an accelerator. 

> Body parameter

```json
{
  "AcceleratorArn": {}
}
```

<h3 id="describeacceleratorattributes-parameters">Parameters</h3>

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
|body|body|[DescribeAcceleratorAttributesRequest](#schemadescribeacceleratorattributesrequest)|true|none|
|» AcceleratorArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GlobalAccelerator_V20180706.DescribeAcceleratorAttributes|

> Example responses

> 200 Response

```json
{
  "AcceleratorAttributes": {
    "FlowLogsEnabled": {},
    "FlowLogsS3Bucket": {},
    "FlowLogsS3Prefix": {}
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

<h3 id="describeacceleratorattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAcceleratorAttributesResponse](#schemadescribeacceleratorattributesresponse)|
|480|480|AcceleratorNotFoundException|[AcceleratorNotFoundException](#schemaacceleratornotfoundexception)|
|481|481|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeCustomRoutingAccelerator

<a id="opIdDescribeCustomRoutingAccelerator"></a>

> Code samples

```bash
curl 'https://globalaccelerator.us-east-1.amazonaws.com/#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingAccelerator' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GlobalAccelerator_V20180706.DescribeCustomRoutingAccelerator' \
  -d '{
    "AcceleratorArn": {}
  }'
```

`POST /#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingAccelerator`

Describe a custom routing accelerator. 

> Body parameter

```json
{
  "AcceleratorArn": {}
}
```

<h3 id="describecustomroutingaccelerator-parameters">Parameters</h3>

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
|body|body|[DescribeCustomRoutingAcceleratorRequest](#schemadescribecustomroutingacceleratorrequest)|true|none|
|» AcceleratorArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GlobalAccelerator_V20180706.DescribeCustomRoutingAccelerator|

> Example responses

> 200 Response

```json
{
  "Accelerator": {
    "AcceleratorArn": {},
    "Name": {},
    "IpAddressType": {},
    "Enabled": {},
    "IpSets": {},
    "DnsName": {},
    "Status": {},
    "CreatedTime": {},
    "LastModifiedTime": {}
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

<h3 id="describecustomroutingaccelerator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeCustomRoutingAcceleratorResponse](#schemadescribecustomroutingacceleratorresponse)|
|480|480|AcceleratorNotFoundException|[AcceleratorNotFoundException](#schemaacceleratornotfoundexception)|
|481|481|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeCustomRoutingAcceleratorAttributes

<a id="opIdDescribeCustomRoutingAcceleratorAttributes"></a>

> Code samples

```bash
curl 'https://globalaccelerator.us-east-1.amazonaws.com/#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingAcceleratorAttributes' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GlobalAccelerator_V20180706.DescribeCustomRoutingAcceleratorAttributes' \
  -d '{
    "AcceleratorArn": {}
  }'
```

`POST /#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingAcceleratorAttributes`

Describe the attributes of a custom routing accelerator. 

> Body parameter

```json
{
  "AcceleratorArn": {}
}
```

<h3 id="describecustomroutingacceleratorattributes-parameters">Parameters</h3>

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
|body|body|[DescribeCustomRoutingAcceleratorAttributesRequest](#schemadescribecustomroutingacceleratorattributesrequest)|true|none|
|» AcceleratorArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GlobalAccelerator_V20180706.DescribeCustomRoutingAcceleratorAttributes|

> Example responses

> 200 Response

```json
{
  "AcceleratorAttributes": {
    "FlowLogsEnabled": {},
    "FlowLogsS3Bucket": {},
    "FlowLogsS3Prefix": {}
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

<h3 id="describecustomroutingacceleratorattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeCustomRoutingAcceleratorAttributesResponse](#schemadescribecustomroutingacceleratorattributesresponse)|
|480|480|AcceleratorNotFoundException|[AcceleratorNotFoundException](#schemaacceleratornotfoundexception)|
|481|481|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeCustomRoutingEndpointGroup

<a id="opIdDescribeCustomRoutingEndpointGroup"></a>

> Code samples

```bash
curl 'https://globalaccelerator.us-east-1.amazonaws.com/#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingEndpointGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GlobalAccelerator_V20180706.DescribeCustomRoutingEndpointGroup' \
  -d '{
    "EndpointGroupArn": {}
  }'
```

`POST /#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingEndpointGroup`

Describe an endpoint group for a custom routing accelerator. 

> Body parameter

```json
{
  "EndpointGroupArn": {}
}
```

<h3 id="describecustomroutingendpointgroup-parameters">Parameters</h3>

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
|body|body|[DescribeCustomRoutingEndpointGroupRequest](#schemadescribecustomroutingendpointgrouprequest)|true|none|
|» EndpointGroupArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GlobalAccelerator_V20180706.DescribeCustomRoutingEndpointGroup|

> Example responses

> 200 Response

```json
{
  "EndpointGroup": {
    "EndpointGroupArn": {},
    "EndpointGroupRegion": {},
    "DestinationDescriptions": {},
    "EndpointDescriptions": {}
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

<h3 id="describecustomroutingendpointgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeCustomRoutingEndpointGroupResponse](#schemadescribecustomroutingendpointgroupresponse)|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|EndpointGroupNotFoundException|[EndpointGroupNotFoundException](#schemaendpointgroupnotfoundexception)|
|482|482|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeCustomRoutingListener

<a id="opIdDescribeCustomRoutingListener"></a>

> Code samples

```bash
curl 'https://globalaccelerator.us-east-1.amazonaws.com/#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingListener' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GlobalAccelerator_V20180706.DescribeCustomRoutingListener' \
  -d '{
    "ListenerArn": {}
  }'
```

`POST /#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingListener`

The description of a listener for a custom routing accelerator.

> Body parameter

```json
{
  "ListenerArn": {}
}
```

<h3 id="describecustomroutinglistener-parameters">Parameters</h3>

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
|body|body|[DescribeCustomRoutingListenerRequest](#schemadescribecustomroutinglistenerrequest)|true|none|
|» ListenerArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GlobalAccelerator_V20180706.DescribeCustomRoutingListener|

> Example responses

> 200 Response

```json
{
  "Listener": {
    "ListenerArn": {},
    "PortRanges": {}
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

<h3 id="describecustomroutinglistener-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeCustomRoutingListenerResponse](#schemadescribecustomroutinglistenerresponse)|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|ListenerNotFoundException|[ListenerNotFoundException](#schemalistenernotfoundexception)|
|482|482|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeEndpointGroup

<a id="opIdDescribeEndpointGroup"></a>

> Code samples

```bash
curl 'https://globalaccelerator.us-east-1.amazonaws.com/#X-Amz-Target=GlobalAccelerator_V20180706.DescribeEndpointGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GlobalAccelerator_V20180706.DescribeEndpointGroup' \
  -d '{
    "EndpointGroupArn": {}
  }'
```

`POST /#X-Amz-Target=GlobalAccelerator_V20180706.DescribeEndpointGroup`

Describe an endpoint group. 

> Body parameter

```json
{
  "EndpointGroupArn": {}
}
```

<h3 id="describeendpointgroup-parameters">Parameters</h3>

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
|body|body|[DescribeEndpointGroupRequest](#schemadescribeendpointgrouprequest)|true|none|
|» EndpointGroupArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GlobalAccelerator_V20180706.DescribeEndpointGroup|

> Example responses

> 200 Response

```json
{
  "EndpointGroup": {
    "EndpointGroupArn": {},
    "EndpointGroupRegion": {},
    "EndpointDescriptions": {},
    "TrafficDialPercentage": {},
    "HealthCheckPort": {},
    "HealthCheckProtocol": {},
    "HealthCheckPath": {},
    "HealthCheckIntervalSeconds": {},
    "ThresholdCount": {},
    "PortOverrides": {}
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

<h3 id="describeendpointgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEndpointGroupResponse](#schemadescribeendpointgroupresponse)|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|EndpointGroupNotFoundException|[EndpointGroupNotFoundException](#schemaendpointgroupnotfoundexception)|
|482|482|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeListener

<a id="opIdDescribeListener"></a>

> Code samples

```bash
curl 'https://globalaccelerator.us-east-1.amazonaws.com/#X-Amz-Target=GlobalAccelerator_V20180706.DescribeListener' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GlobalAccelerator_V20180706.DescribeListener' \
  -d '{
    "ListenerArn": {}
  }'
```

`POST /#X-Amz-Target=GlobalAccelerator_V20180706.DescribeListener`

Describe a listener. 

> Body parameter

```json
{
  "ListenerArn": {}
}
```

<h3 id="describelistener-parameters">Parameters</h3>

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
|body|body|[DescribeListenerRequest](#schemadescribelistenerrequest)|true|none|
|» ListenerArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GlobalAccelerator_V20180706.DescribeListener|

> Example responses

> 200 Response

```json
{
  "Listener": {
    "ListenerArn": {},
    "PortRanges": {},
    "Protocol": {},
    "ClientAffinity": {}
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

<h3 id="describelistener-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeListenerResponse](#schemadescribelistenerresponse)|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|ListenerNotFoundException|[ListenerNotFoundException](#schemalistenernotfoundexception)|
|482|482|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAccelerators

<a id="opIdListAccelerators"></a>

> Code samples

```bash
curl 'https://globalaccelerator.us-east-1.amazonaws.com/#X-Amz-Target=GlobalAccelerator_V20180706.ListAccelerators' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GlobalAccelerator_V20180706.ListAccelerators' \
  -d '{
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=GlobalAccelerator_V20180706.ListAccelerators`

List the accelerators for an Amazon Web Services account. 

> Body parameter

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listaccelerators-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListAcceleratorsRequest](#schemalistacceleratorsrequest)|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GlobalAccelerator_V20180706.ListAccelerators|

> Example responses

> 200 Response

```json
{
  "Accelerators": {},
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

<h3 id="listaccelerators-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAcceleratorsResponse](#schemalistacceleratorsresponse)|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|482|482|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListByoipCidrs

<a id="opIdListByoipCidrs"></a>

> Code samples

```bash
curl 'https://globalaccelerator.us-east-1.amazonaws.com/#X-Amz-Target=GlobalAccelerator_V20180706.ListByoipCidrs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GlobalAccelerator_V20180706.ListByoipCidrs' \
  -d '{
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=GlobalAccelerator_V20180706.ListByoipCidrs`

Lists the IP address ranges that were specified in calls to <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/ProvisionByoipCidr.html">ProvisionByoipCidr</a>, including the current state and a history of state changes.

> Body parameter

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listbyoipcidrs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListByoipCidrsRequest](#schemalistbyoipcidrsrequest)|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GlobalAccelerator_V20180706.ListByoipCidrs|

> Example responses

> 200 Response

```json
{
  "ByoipCidrs": {},
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

<h3 id="listbyoipcidrs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListByoipCidrsResponse](#schemalistbyoipcidrsresponse)|
|480|480|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|481|481|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListCustomRoutingAccelerators

<a id="opIdListCustomRoutingAccelerators"></a>

> Code samples

```bash
curl 'https://globalaccelerator.us-east-1.amazonaws.com/#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingAccelerators' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GlobalAccelerator_V20180706.ListCustomRoutingAccelerators' \
  -d '{
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingAccelerators`

List the custom routing accelerators for an Amazon Web Services account. 

> Body parameter

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listcustomroutingaccelerators-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListCustomRoutingAcceleratorsRequest](#schemalistcustomroutingacceleratorsrequest)|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GlobalAccelerator_V20180706.ListCustomRoutingAccelerators|

> Example responses

> 200 Response

```json
{
  "Accelerators": {},
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

<h3 id="listcustomroutingaccelerators-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListCustomRoutingAcceleratorsResponse](#schemalistcustomroutingacceleratorsresponse)|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|482|482|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListCustomRoutingEndpointGroups

<a id="opIdListCustomRoutingEndpointGroups"></a>

> Code samples

```bash
curl 'https://globalaccelerator.us-east-1.amazonaws.com/#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingEndpointGroups' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GlobalAccelerator_V20180706.ListCustomRoutingEndpointGroups' \
  -d '{
    "ListenerArn": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingEndpointGroups`

List the endpoint groups that are associated with a listener for a custom routing accelerator. 

> Body parameter

```json
{
  "ListenerArn": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listcustomroutingendpointgroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListCustomRoutingEndpointGroupsRequest](#schemalistcustomroutingendpointgroupsrequest)|true|none|
|» ListenerArn|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GlobalAccelerator_V20180706.ListCustomRoutingEndpointGroups|

> Example responses

> 200 Response

```json
{
  "EndpointGroups": {},
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

<h3 id="listcustomroutingendpointgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListCustomRoutingEndpointGroupsResponse](#schemalistcustomroutingendpointgroupsresponse)|
|480|480|ListenerNotFoundException|[ListenerNotFoundException](#schemalistenernotfoundexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListCustomRoutingListeners

<a id="opIdListCustomRoutingListeners"></a>

> Code samples

```bash
curl 'https://globalaccelerator.us-east-1.amazonaws.com/#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingListeners' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GlobalAccelerator_V20180706.ListCustomRoutingListeners' \
  -d '{
    "AcceleratorArn": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingListeners`

List the listeners for a custom routing accelerator. 

> Body parameter

```json
{
  "AcceleratorArn": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listcustomroutinglisteners-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListCustomRoutingListenersRequest](#schemalistcustomroutinglistenersrequest)|true|none|
|» AcceleratorArn|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GlobalAccelerator_V20180706.ListCustomRoutingListeners|

> Example responses

> 200 Response

```json
{
  "Listeners": {},
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

<h3 id="listcustomroutinglisteners-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListCustomRoutingListenersResponse](#schemalistcustomroutinglistenersresponse)|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|AcceleratorNotFoundException|[AcceleratorNotFoundException](#schemaacceleratornotfoundexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListCustomRoutingPortMappings

<a id="opIdListCustomRoutingPortMappings"></a>

> Code samples

```bash
curl 'https://globalaccelerator.us-east-1.amazonaws.com/#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingPortMappings' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GlobalAccelerator_V20180706.ListCustomRoutingPortMappings' \
  -d '{
    "AcceleratorArn": {},
    "EndpointGroupArn": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingPortMappings`

<p>Provides a complete mapping from the public accelerator IP address and port to destination EC2 instance IP addresses and ports in the virtual public cloud (VPC) subnet endpoint for a custom routing accelerator. For each subnet endpoint that you add, Global Accelerator creates a new static port mapping for the accelerator. The port mappings don't change after Global Accelerator generates them, so you can retrieve and cache the full mapping on your servers. </p> <p>If you remove a subnet from your accelerator, Global Accelerator removes (reclaims) the port mappings. If you add a subnet to your accelerator, Global Accelerator creates new port mappings (the existing ones don't change). If you add or remove EC2 instances in your subnet, the port mappings don't change, because the mappings are created when you add the subnet to Global Accelerator.</p> <p>The mappings also include a flag for each destination denoting which destination IP addresses and ports are allowed or denied traffic.</p>

> Body parameter

```json
{
  "AcceleratorArn": {},
  "EndpointGroupArn": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listcustomroutingportmappings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListCustomRoutingPortMappingsRequest](#schemalistcustomroutingportmappingsrequest)|true|none|
|» AcceleratorArn|body|object|true|none|
|» EndpointGroupArn|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GlobalAccelerator_V20180706.ListCustomRoutingPortMappings|

> Example responses

> 200 Response

```json
{
  "PortMappings": {},
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

<h3 id="listcustomroutingportmappings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListCustomRoutingPortMappingsResponse](#schemalistcustomroutingportmappingsresponse)|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|482|482|EndpointGroupNotFoundException|[EndpointGroupNotFoundException](#schemaendpointgroupnotfoundexception)|
|483|483|AcceleratorNotFoundException|[AcceleratorNotFoundException](#schemaacceleratornotfoundexception)|
|484|484|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListCustomRoutingPortMappingsByDestination

<a id="opIdListCustomRoutingPortMappingsByDestination"></a>

> Code samples

```bash
curl 'https://globalaccelerator.us-east-1.amazonaws.com/#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingPortMappingsByDestination' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GlobalAccelerator_V20180706.ListCustomRoutingPortMappingsByDestination' \
  -d '{
    "EndpointId": {},
    "DestinationAddress": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingPortMappingsByDestination`

List the port mappings for a specific EC2 instance (destination) in a VPC subnet endpoint. The response is the mappings for one destination IP address. This is useful when your subnet endpoint has mappings that span multiple custom routing accelerators in your account, or for scenarios where you only want to list the port mappings for a specific destination instance.

> Body parameter

```json
{
  "EndpointId": {},
  "DestinationAddress": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listcustomroutingportmappingsbydestination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListCustomRoutingPortMappingsByDestinationRequest](#schemalistcustomroutingportmappingsbydestinationrequest)|true|none|
|» EndpointId|body|object|true|none|
|» DestinationAddress|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GlobalAccelerator_V20180706.ListCustomRoutingPortMappingsByDestination|

> Example responses

> 200 Response

```json
{
  "DestinationPortMappings": {},
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

<h3 id="listcustomroutingportmappingsbydestination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListCustomRoutingPortMappingsByDestinationResponse](#schemalistcustomroutingportmappingsbydestinationresponse)|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|482|482|EndpointNotFoundException|[EndpointNotFoundException](#schemaendpointnotfoundexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListEndpointGroups

<a id="opIdListEndpointGroups"></a>

> Code samples

```bash
curl 'https://globalaccelerator.us-east-1.amazonaws.com/#X-Amz-Target=GlobalAccelerator_V20180706.ListEndpointGroups' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GlobalAccelerator_V20180706.ListEndpointGroups' \
  -d '{
    "ListenerArn": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=GlobalAccelerator_V20180706.ListEndpointGroups`

List the endpoint groups that are associated with a listener. 

> Body parameter

```json
{
  "ListenerArn": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listendpointgroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListEndpointGroupsRequest](#schemalistendpointgroupsrequest)|true|none|
|» ListenerArn|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GlobalAccelerator_V20180706.ListEndpointGroups|

> Example responses

> 200 Response

```json
{
  "EndpointGroups": {},
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

<h3 id="listendpointgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListEndpointGroupsResponse](#schemalistendpointgroupsresponse)|
|480|480|ListenerNotFoundException|[ListenerNotFoundException](#schemalistenernotfoundexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListListeners

<a id="opIdListListeners"></a>

> Code samples

```bash
curl 'https://globalaccelerator.us-east-1.amazonaws.com/#X-Amz-Target=GlobalAccelerator_V20180706.ListListeners' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GlobalAccelerator_V20180706.ListListeners' \
  -d '{
    "AcceleratorArn": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=GlobalAccelerator_V20180706.ListListeners`

List the listeners for an accelerator. 

> Body parameter

```json
{
  "AcceleratorArn": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listlisteners-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListListenersRequest](#schemalistlistenersrequest)|true|none|
|» AcceleratorArn|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GlobalAccelerator_V20180706.ListListeners|

> Example responses

> 200 Response

```json
{
  "Listeners": {},
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

<h3 id="listlisteners-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListListenersResponse](#schemalistlistenersresponse)|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|AcceleratorNotFoundException|[AcceleratorNotFoundException](#schemaacceleratornotfoundexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://globalaccelerator.us-east-1.amazonaws.com/#X-Amz-Target=GlobalAccelerator_V20180706.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GlobalAccelerator_V20180706.ListTagsForResource' \
  -d '{
    "ResourceArn": {}
  }'
```

`POST /#X-Amz-Target=GlobalAccelerator_V20180706.ListTagsForResource`

<p>List all tags for an accelerator. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>. </p>

> Body parameter

```json
{
  "ResourceArn": {}
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
|» ResourceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GlobalAccelerator_V20180706.ListTagsForResource|

> Example responses

> 200 Response

```json
{
  "Tags": {}
}
```

> 480 Response

```json
null
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
|480|480|AcceleratorNotFoundException|[AcceleratorNotFoundException](#schemaacceleratornotfoundexception)|
|481|481|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ProvisionByoipCidr

<a id="opIdProvisionByoipCidr"></a>

> Code samples

```bash
curl 'https://globalaccelerator.us-east-1.amazonaws.com/#X-Amz-Target=GlobalAccelerator_V20180706.ProvisionByoipCidr' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GlobalAccelerator_V20180706.ProvisionByoipCidr' \
  -d '{
    "Cidr": {},
    "CidrAuthorizationContext": {
      "Message": {},
      "Signature": {}
    }
  }'
```

`POST /#X-Amz-Target=GlobalAccelerator_V20180706.ProvisionByoipCidr`

<p>Provisions an IP address range to use with your Amazon Web Services resources through bring your own IP addresses (BYOIP) and creates a corresponding address pool. After the address range is provisioned, it is ready to be advertised using <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/AdvertiseByoipCidr.html"> AdvertiseByoipCidr</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>

> Body parameter

```json
{
  "Cidr": {},
  "CidrAuthorizationContext": {
    "Message": {},
    "Signature": {}
  }
}
```

<h3 id="provisionbyoipcidr-parameters">Parameters</h3>

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
|body|body|[ProvisionByoipCidrRequest](#schemaprovisionbyoipcidrrequest)|true|none|
|» Cidr|body|object|true|none|
|» CidrAuthorizationContext|body|object|true|none|
|» » Message|body|object|true|none|
|» » Signature|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GlobalAccelerator_V20180706.ProvisionByoipCidr|

> Example responses

> 200 Response

```json
{
  "ByoipCidr": {
    "Cidr": {},
    "State": {},
    "Events": {}
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

<h3 id="provisionbyoipcidr-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ProvisionByoipCidrResponse](#schemaprovisionbyoipcidrresponse)|
|480|480|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|481|481|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|IncorrectCidrStateException|[IncorrectCidrStateException](#schemaincorrectcidrstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RemoveCustomRoutingEndpoints

<a id="opIdRemoveCustomRoutingEndpoints"></a>

> Code samples

```bash
curl 'https://globalaccelerator.us-east-1.amazonaws.com/#X-Amz-Target=GlobalAccelerator_V20180706.RemoveCustomRoutingEndpoints' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GlobalAccelerator_V20180706.RemoveCustomRoutingEndpoints' \
  -d '{
    "EndpointIds": {},
    "EndpointGroupArn": {}
  }'
```

`POST /#X-Amz-Target=GlobalAccelerator_V20180706.RemoveCustomRoutingEndpoints`

Remove endpoints from a custom routing accelerator.

> Body parameter

```json
{
  "EndpointIds": {},
  "EndpointGroupArn": {}
}
```

<h3 id="removecustomroutingendpoints-parameters">Parameters</h3>

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
|body|body|[RemoveCustomRoutingEndpointsRequest](#schemaremovecustomroutingendpointsrequest)|true|none|
|» EndpointIds|body|object|true|none|
|» EndpointGroupArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GlobalAccelerator_V20180706.RemoveCustomRoutingEndpoints|

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

<h3 id="removecustomroutingendpoints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|EndpointGroupNotFoundException|[EndpointGroupNotFoundException](#schemaendpointgroupnotfoundexception)|
|481|481|EndpointNotFoundException|[EndpointNotFoundException](#schemaendpointnotfoundexception)|
|482|482|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|483|483|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RemoveEndpoints

<a id="opIdRemoveEndpoints"></a>

> Code samples

```bash
curl 'https://globalaccelerator.us-east-1.amazonaws.com/#X-Amz-Target=GlobalAccelerator_V20180706.RemoveEndpoints' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GlobalAccelerator_V20180706.RemoveEndpoints' \
  -d '{
    "EndpointIdentifiers": {},
    "EndpointGroupArn": {}
  }'
```

`POST /#X-Amz-Target=GlobalAccelerator_V20180706.RemoveEndpoints`

<p>Remove endpoints from an endpoint group. </p> <p>The <code>RemoveEndpoints</code> API operation is the recommended option for removing endpoints. The alternative is to remove endpoints by updating an endpoint group by using the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateEndpointGroup.html">UpdateEndpointGroup</a> API operation. There are two advantages to using <code>AddEndpoints</code> to remove endpoints instead:</p> <ul> <li> <p>It's more convenient, because you only need to specify the endpoints that you want to remove. With the <code>UpdateEndpointGroup</code> API operation, you must specify all of the endpoints in the endpoint group except the ones that you want to remove from the group.</p> </li> <li> <p>It's faster, because Global Accelerator doesn't need to resolve any endpoints. With the <code>UpdateEndpointGroup</code> API operation, Global Accelerator must resolve all of the endpoints that remain in the group.</p> </li> </ul>

> Body parameter

```json
{
  "EndpointIdentifiers": {},
  "EndpointGroupArn": {}
}
```

<h3 id="removeendpoints-parameters">Parameters</h3>

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
|body|body|[RemoveEndpointsRequest](#schemaremoveendpointsrequest)|true|none|
|» EndpointIdentifiers|body|object|true|none|
|» EndpointGroupArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GlobalAccelerator_V20180706.RemoveEndpoints|

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

<h3 id="removeendpoints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|EndpointGroupNotFoundException|[EndpointGroupNotFoundException](#schemaendpointgroupnotfoundexception)|
|481|481|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|TransactionInProgressException|[TransactionInProgressException](#schematransactioninprogressexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://globalaccelerator.us-east-1.amazonaws.com/#X-Amz-Target=GlobalAccelerator_V20180706.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GlobalAccelerator_V20180706.TagResource' \
  -d '{
    "ResourceArn": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=GlobalAccelerator_V20180706.TagResource`

<p>Add tags to an accelerator resource. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>. </p>

> Body parameter

```json
{
  "ResourceArn": {},
  "Tags": {}
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
|» ResourceArn|body|object|true|none|
|» Tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GlobalAccelerator_V20180706.TagResource|

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
|480|480|AcceleratorNotFoundException|[AcceleratorNotFoundException](#schemaacceleratornotfoundexception)|
|481|481|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://globalaccelerator.us-east-1.amazonaws.com/#X-Amz-Target=GlobalAccelerator_V20180706.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GlobalAccelerator_V20180706.UntagResource' \
  -d '{
    "ResourceArn": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=GlobalAccelerator_V20180706.UntagResource`

<p>Remove tags from a Global Accelerator resource. When you specify a tag key, the action removes both that key and its associated value. The operation succeeds even if you attempt to remove tags from an accelerator that was already removed.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>.</p>

> Body parameter

```json
{
  "ResourceArn": {},
  "TagKeys": {}
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
|» ResourceArn|body|object|true|none|
|» TagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GlobalAccelerator_V20180706.UntagResource|

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
|480|480|AcceleratorNotFoundException|[AcceleratorNotFoundException](#schemaacceleratornotfoundexception)|
|481|481|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateAccelerator

<a id="opIdUpdateAccelerator"></a>

> Code samples

```bash
curl 'https://globalaccelerator.us-east-1.amazonaws.com/#X-Amz-Target=GlobalAccelerator_V20180706.UpdateAccelerator' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GlobalAccelerator_V20180706.UpdateAccelerator' \
  -d '{
    "AcceleratorArn": {},
    "Name": {},
    "IpAddressType": {},
    "Enabled": {}
  }'
```

`POST /#X-Amz-Target=GlobalAccelerator_V20180706.UpdateAccelerator`

<p>Update an accelerator. </p> <important> <p>Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the US West (Oregon) Region to create, update, or otherwise work with accelerators. That is, for example, specify <code>--region us-west-2</code> on AWS CLI commands.</p> </important>

> Body parameter

```json
{
  "AcceleratorArn": {},
  "Name": {},
  "IpAddressType": {},
  "Enabled": {}
}
```

<h3 id="updateaccelerator-parameters">Parameters</h3>

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
|body|body|[UpdateAcceleratorRequest](#schemaupdateacceleratorrequest)|true|none|
|» AcceleratorArn|body|object|true|none|
|» Name|body|object|false|none|
|» IpAddressType|body|object|false|none|
|» Enabled|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GlobalAccelerator_V20180706.UpdateAccelerator|

> Example responses

> 200 Response

```json
{
  "Accelerator": {
    "AcceleratorArn": {},
    "Name": {},
    "IpAddressType": {},
    "Enabled": {},
    "IpSets": {},
    "DnsName": {},
    "Status": {},
    "CreatedTime": {},
    "LastModifiedTime": {},
    "DualStackDnsName": {},
    "Events": {}
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

<h3 id="updateaccelerator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateAcceleratorResponse](#schemaupdateacceleratorresponse)|
|480|480|AcceleratorNotFoundException|[AcceleratorNotFoundException](#schemaacceleratornotfoundexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|483|483|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateAcceleratorAttributes

<a id="opIdUpdateAcceleratorAttributes"></a>

> Code samples

```bash
curl 'https://globalaccelerator.us-east-1.amazonaws.com/#X-Amz-Target=GlobalAccelerator_V20180706.UpdateAcceleratorAttributes' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GlobalAccelerator_V20180706.UpdateAcceleratorAttributes' \
  -d '{
    "AcceleratorArn": {},
    "FlowLogsEnabled": {},
    "FlowLogsS3Bucket": {},
    "FlowLogsS3Prefix": {}
  }'
```

`POST /#X-Amz-Target=GlobalAccelerator_V20180706.UpdateAcceleratorAttributes`

Update the attributes for an accelerator. 

> Body parameter

```json
{
  "AcceleratorArn": {},
  "FlowLogsEnabled": {},
  "FlowLogsS3Bucket": {},
  "FlowLogsS3Prefix": {}
}
```

<h3 id="updateacceleratorattributes-parameters">Parameters</h3>

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
|body|body|[UpdateAcceleratorAttributesRequest](#schemaupdateacceleratorattributesrequest)|true|none|
|» AcceleratorArn|body|object|true|none|
|» FlowLogsEnabled|body|object|false|none|
|» FlowLogsS3Bucket|body|object|false|none|
|» FlowLogsS3Prefix|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GlobalAccelerator_V20180706.UpdateAcceleratorAttributes|

> Example responses

> 200 Response

```json
{
  "AcceleratorAttributes": {
    "FlowLogsEnabled": {},
    "FlowLogsS3Bucket": {},
    "FlowLogsS3Prefix": {}
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

<h3 id="updateacceleratorattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateAcceleratorAttributesResponse](#schemaupdateacceleratorattributesresponse)|
|480|480|AcceleratorNotFoundException|[AcceleratorNotFoundException](#schemaacceleratornotfoundexception)|
|481|481|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateCustomRoutingAccelerator

<a id="opIdUpdateCustomRoutingAccelerator"></a>

> Code samples

```bash
curl 'https://globalaccelerator.us-east-1.amazonaws.com/#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingAccelerator' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GlobalAccelerator_V20180706.UpdateCustomRoutingAccelerator' \
  -d '{
    "AcceleratorArn": {},
    "Name": {},
    "IpAddressType": {},
    "Enabled": {}
  }'
```

`POST /#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingAccelerator`

Update a custom routing accelerator. 

> Body parameter

```json
{
  "AcceleratorArn": {},
  "Name": {},
  "IpAddressType": {},
  "Enabled": {}
}
```

<h3 id="updatecustomroutingaccelerator-parameters">Parameters</h3>

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
|body|body|[UpdateCustomRoutingAcceleratorRequest](#schemaupdatecustomroutingacceleratorrequest)|true|none|
|» AcceleratorArn|body|object|true|none|
|» Name|body|object|false|none|
|» IpAddressType|body|object|false|none|
|» Enabled|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GlobalAccelerator_V20180706.UpdateCustomRoutingAccelerator|

> Example responses

> 200 Response

```json
{
  "Accelerator": {
    "AcceleratorArn": {},
    "Name": {},
    "IpAddressType": {},
    "Enabled": {},
    "IpSets": {},
    "DnsName": {},
    "Status": {},
    "CreatedTime": {},
    "LastModifiedTime": {}
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

<h3 id="updatecustomroutingaccelerator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateCustomRoutingAcceleratorResponse](#schemaupdatecustomroutingacceleratorresponse)|
|480|480|AcceleratorNotFoundException|[AcceleratorNotFoundException](#schemaacceleratornotfoundexception)|
|481|481|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateCustomRoutingAcceleratorAttributes

<a id="opIdUpdateCustomRoutingAcceleratorAttributes"></a>

> Code samples

```bash
curl 'https://globalaccelerator.us-east-1.amazonaws.com/#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingAcceleratorAttributes' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GlobalAccelerator_V20180706.UpdateCustomRoutingAcceleratorAttributes' \
  -d '{
    "AcceleratorArn": {},
    "FlowLogsEnabled": {},
    "FlowLogsS3Bucket": {},
    "FlowLogsS3Prefix": {}
  }'
```

`POST /#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingAcceleratorAttributes`

Update the attributes for a custom routing accelerator. 

> Body parameter

```json
{
  "AcceleratorArn": {},
  "FlowLogsEnabled": {},
  "FlowLogsS3Bucket": {},
  "FlowLogsS3Prefix": {}
}
```

<h3 id="updatecustomroutingacceleratorattributes-parameters">Parameters</h3>

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
|body|body|[UpdateCustomRoutingAcceleratorAttributesRequest](#schemaupdatecustomroutingacceleratorattributesrequest)|true|none|
|» AcceleratorArn|body|object|true|none|
|» FlowLogsEnabled|body|object|false|none|
|» FlowLogsS3Bucket|body|object|false|none|
|» FlowLogsS3Prefix|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GlobalAccelerator_V20180706.UpdateCustomRoutingAcceleratorAttributes|

> Example responses

> 200 Response

```json
{
  "AcceleratorAttributes": {
    "FlowLogsEnabled": {},
    "FlowLogsS3Bucket": {},
    "FlowLogsS3Prefix": {}
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

<h3 id="updatecustomroutingacceleratorattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateCustomRoutingAcceleratorAttributesResponse](#schemaupdatecustomroutingacceleratorattributesresponse)|
|480|480|AcceleratorNotFoundException|[AcceleratorNotFoundException](#schemaacceleratornotfoundexception)|
|481|481|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateCustomRoutingListener

<a id="opIdUpdateCustomRoutingListener"></a>

> Code samples

```bash
curl 'https://globalaccelerator.us-east-1.amazonaws.com/#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingListener' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GlobalAccelerator_V20180706.UpdateCustomRoutingListener' \
  -d '{
    "ListenerArn": {},
    "PortRanges": {}
  }'
```

`POST /#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingListener`

Update a listener for a custom routing accelerator. 

> Body parameter

```json
{
  "ListenerArn": {},
  "PortRanges": {}
}
```

<h3 id="updatecustomroutinglistener-parameters">Parameters</h3>

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
|body|body|[UpdateCustomRoutingListenerRequest](#schemaupdatecustomroutinglistenerrequest)|true|none|
|» ListenerArn|body|object|true|none|
|» PortRanges|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GlobalAccelerator_V20180706.UpdateCustomRoutingListener|

> Example responses

> 200 Response

```json
{
  "Listener": {
    "ListenerArn": {},
    "PortRanges": {}
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

<h3 id="updatecustomroutinglistener-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateCustomRoutingListenerResponse](#schemaupdatecustomroutinglistenerresponse)|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|InvalidPortRangeException|[InvalidPortRangeException](#schemainvalidportrangeexception)|
|482|482|ListenerNotFoundException|[ListenerNotFoundException](#schemalistenernotfoundexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateEndpointGroup

<a id="opIdUpdateEndpointGroup"></a>

> Code samples

```bash
curl 'https://globalaccelerator.us-east-1.amazonaws.com/#X-Amz-Target=GlobalAccelerator_V20180706.UpdateEndpointGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GlobalAccelerator_V20180706.UpdateEndpointGroup' \
  -d '{
    "EndpointGroupArn": {},
    "EndpointConfigurations": {},
    "TrafficDialPercentage": {},
    "HealthCheckPort": {},
    "HealthCheckProtocol": {},
    "HealthCheckPath": {},
    "HealthCheckIntervalSeconds": {},
    "ThresholdCount": {},
    "PortOverrides": {}
  }'
```

`POST /#X-Amz-Target=GlobalAccelerator_V20180706.UpdateEndpointGroup`

Update an endpoint group. A resource must be valid and active when you add it as an endpoint.

> Body parameter

```json
{
  "EndpointGroupArn": {},
  "EndpointConfigurations": {},
  "TrafficDialPercentage": {},
  "HealthCheckPort": {},
  "HealthCheckProtocol": {},
  "HealthCheckPath": {},
  "HealthCheckIntervalSeconds": {},
  "ThresholdCount": {},
  "PortOverrides": {}
}
```

<h3 id="updateendpointgroup-parameters">Parameters</h3>

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
|body|body|[UpdateEndpointGroupRequest](#schemaupdateendpointgrouprequest)|true|none|
|» EndpointGroupArn|body|object|true|none|
|» EndpointConfigurations|body|object|false|none|
|» TrafficDialPercentage|body|object|false|none|
|» HealthCheckPort|body|object|false|none|
|» HealthCheckProtocol|body|object|false|none|
|» HealthCheckPath|body|object|false|none|
|» HealthCheckIntervalSeconds|body|object|false|none|
|» ThresholdCount|body|object|false|none|
|» PortOverrides|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GlobalAccelerator_V20180706.UpdateEndpointGroup|

> Example responses

> 200 Response

```json
{
  "EndpointGroup": {
    "EndpointGroupArn": {},
    "EndpointGroupRegion": {},
    "EndpointDescriptions": {},
    "TrafficDialPercentage": {},
    "HealthCheckPort": {},
    "HealthCheckProtocol": {},
    "HealthCheckPath": {},
    "HealthCheckIntervalSeconds": {},
    "ThresholdCount": {},
    "PortOverrides": {}
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

<h3 id="updateendpointgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateEndpointGroupResponse](#schemaupdateendpointgroupresponse)|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|EndpointGroupNotFoundException|[EndpointGroupNotFoundException](#schemaendpointgroupnotfoundexception)|
|482|482|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateListener

<a id="opIdUpdateListener"></a>

> Code samples

```bash
curl 'https://globalaccelerator.us-east-1.amazonaws.com/#X-Amz-Target=GlobalAccelerator_V20180706.UpdateListener' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GlobalAccelerator_V20180706.UpdateListener' \
  -d '{
    "ListenerArn": {},
    "PortRanges": {},
    "Protocol": {},
    "ClientAffinity": {}
  }'
```

`POST /#X-Amz-Target=GlobalAccelerator_V20180706.UpdateListener`

Update a listener. 

> Body parameter

```json
{
  "ListenerArn": {},
  "PortRanges": {},
  "Protocol": {},
  "ClientAffinity": {}
}
```

<h3 id="updatelistener-parameters">Parameters</h3>

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
|body|body|[UpdateListenerRequest](#schemaupdatelistenerrequest)|true|none|
|» ListenerArn|body|object|true|none|
|» PortRanges|body|object|false|none|
|» Protocol|body|object|false|none|
|» ClientAffinity|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GlobalAccelerator_V20180706.UpdateListener|

> Example responses

> 200 Response

```json
{
  "Listener": {
    "ListenerArn": {},
    "PortRanges": {},
    "Protocol": {},
    "ClientAffinity": {}
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

<h3 id="updatelistener-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateListenerResponse](#schemaupdatelistenerresponse)|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|InvalidPortRangeException|[InvalidPortRangeException](#schemainvalidportrangeexception)|
|482|482|ListenerNotFoundException|[ListenerNotFoundException](#schemalistenernotfoundexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## WithdrawByoipCidr

<a id="opIdWithdrawByoipCidr"></a>

> Code samples

```bash
curl 'https://globalaccelerator.us-east-1.amazonaws.com/#X-Amz-Target=GlobalAccelerator_V20180706.WithdrawByoipCidr' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GlobalAccelerator_V20180706.WithdrawByoipCidr' \
  -d '{
    "Cidr": {}
  }'
```

`POST /#X-Amz-Target=GlobalAccelerator_V20180706.WithdrawByoipCidr`

<p>Stops advertising an address range that is provisioned as an address pool. You can perform this operation at most once every 10 seconds, even if you specify different address ranges each time.</p> <p>It can take a few minutes before traffic to the specified addresses stops routing to Amazon Web Services because of propagation delays.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>

> Body parameter

```json
{
  "Cidr": {}
}
```

<h3 id="withdrawbyoipcidr-parameters">Parameters</h3>

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
|body|body|[WithdrawByoipCidrRequest](#schemawithdrawbyoipcidrrequest)|true|none|
|» Cidr|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GlobalAccelerator_V20180706.WithdrawByoipCidr|

> Example responses

> 200 Response

```json
{
  "ByoipCidr": {
    "Cidr": {},
    "State": {},
    "Events": {}
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

<h3 id="withdrawbyoipcidr-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[WithdrawByoipCidrResponse](#schemawithdrawbyoipcidrresponse)|
|480|480|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|481|481|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ByoipCidrNotFoundException|[ByoipCidrNotFoundException](#schemabyoipcidrnotfoundexception)|
|484|484|IncorrectCidrStateException|[IncorrectCidrStateException](#schemaincorrectcidrstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AddCustomRoutingEndpointsResponse">AddCustomRoutingEndpointsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaddcustomroutingendpointsresponse"></a>
<a id="schema_AddCustomRoutingEndpointsResponse"></a>
<a id="tocSaddcustomroutingendpointsresponse"></a>
<a id="tocsaddcustomroutingendpointsresponse"></a>

```json
{
  "EndpointDescriptions": {},
  "EndpointGroupArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointDescriptions|object|false|none|none|
|EndpointGroupArn|object|false|none|none|

<h2 id="tocS_AddCustomRoutingEndpointsRequest">AddCustomRoutingEndpointsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddcustomroutingendpointsrequest"></a>
<a id="schema_AddCustomRoutingEndpointsRequest"></a>
<a id="tocSaddcustomroutingendpointsrequest"></a>
<a id="tocsaddcustomroutingendpointsrequest"></a>

```json
{
  "EndpointConfigurations": {},
  "EndpointGroupArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointConfigurations|object|true|none|none|
|EndpointGroupArn|object|true|none|none|

<h2 id="tocS_EndpointAlreadyExistsException">EndpointAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaendpointalreadyexistsexception"></a>
<a id="schema_EndpointAlreadyExistsException"></a>
<a id="tocSendpointalreadyexistsexception"></a>
<a id="tocsendpointalreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_EndpointGroupNotFoundException">EndpointGroupNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaendpointgroupnotfoundexception"></a>
<a id="schema_EndpointGroupNotFoundException"></a>
<a id="tocSendpointgroupnotfoundexception"></a>
<a id="tocsendpointgroupnotfoundexception"></a>

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

<h2 id="tocS_InvalidArgumentException">InvalidArgumentException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidargumentexception"></a>
<a id="schema_InvalidArgumentException"></a>
<a id="tocSinvalidargumentexception"></a>
<a id="tocsinvalidargumentexception"></a>

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

<h2 id="tocS_AddEndpointsResponse">AddEndpointsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaddendpointsresponse"></a>
<a id="schema_AddEndpointsResponse"></a>
<a id="tocSaddendpointsresponse"></a>
<a id="tocsaddendpointsresponse"></a>

```json
{
  "EndpointDescriptions": {},
  "EndpointGroupArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointDescriptions|object|false|none|none|
|EndpointGroupArn|object|false|none|none|

<h2 id="tocS_AddEndpointsRequest">AddEndpointsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddendpointsrequest"></a>
<a id="schema_AddEndpointsRequest"></a>
<a id="tocSaddendpointsrequest"></a>
<a id="tocsaddendpointsrequest"></a>

```json
{
  "EndpointConfigurations": {},
  "EndpointGroupArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointConfigurations|object|true|none|none|
|EndpointGroupArn|object|true|none|none|

<h2 id="tocS_TransactionInProgressException">TransactionInProgressException</h2>
<!-- backwards compatibility -->
<a id="schematransactioninprogressexception"></a>
<a id="schema_TransactionInProgressException"></a>
<a id="tocStransactioninprogressexception"></a>
<a id="tocstransactioninprogressexception"></a>

```json
null
```

<h2 id="tocS_AdvertiseByoipCidrResponse">AdvertiseByoipCidrResponse</h2>
<!-- backwards compatibility -->
<a id="schemaadvertisebyoipcidrresponse"></a>
<a id="schema_AdvertiseByoipCidrResponse"></a>
<a id="tocSadvertisebyoipcidrresponse"></a>
<a id="tocsadvertisebyoipcidrresponse"></a>

```json
{
  "ByoipCidr": {
    "Cidr": {},
    "State": {},
    "Events": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ByoipCidr|object|false|none|none|

<h2 id="tocS_AdvertiseByoipCidrRequest">AdvertiseByoipCidrRequest</h2>
<!-- backwards compatibility -->
<a id="schemaadvertisebyoipcidrrequest"></a>
<a id="schema_AdvertiseByoipCidrRequest"></a>
<a id="tocSadvertisebyoipcidrrequest"></a>
<a id="tocsadvertisebyoipcidrrequest"></a>

```json
{
  "Cidr": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Cidr|object|true|none|none|

<h2 id="tocS_ByoipCidrNotFoundException">ByoipCidrNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemabyoipcidrnotfoundexception"></a>
<a id="schema_ByoipCidrNotFoundException"></a>
<a id="tocSbyoipcidrnotfoundexception"></a>
<a id="tocsbyoipcidrnotfoundexception"></a>

```json
null
```

<h2 id="tocS_IncorrectCidrStateException">IncorrectCidrStateException</h2>
<!-- backwards compatibility -->
<a id="schemaincorrectcidrstateexception"></a>
<a id="schema_IncorrectCidrStateException"></a>
<a id="tocSincorrectcidrstateexception"></a>
<a id="tocsincorrectcidrstateexception"></a>

```json
null
```

<h2 id="tocS_AllowCustomRoutingTrafficRequest">AllowCustomRoutingTrafficRequest</h2>
<!-- backwards compatibility -->
<a id="schemaallowcustomroutingtrafficrequest"></a>
<a id="schema_AllowCustomRoutingTrafficRequest"></a>
<a id="tocSallowcustomroutingtrafficrequest"></a>
<a id="tocsallowcustomroutingtrafficrequest"></a>

```json
{
  "EndpointGroupArn": {},
  "EndpointId": {},
  "DestinationAddresses": {},
  "DestinationPorts": {},
  "AllowAllTrafficToEndpoint": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointGroupArn|object|true|none|none|
|EndpointId|object|true|none|none|
|DestinationAddresses|object|false|none|none|
|DestinationPorts|object|false|none|none|
|AllowAllTrafficToEndpoint|object|false|none|none|

<h2 id="tocS_CreateAcceleratorResponse">CreateAcceleratorResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateacceleratorresponse"></a>
<a id="schema_CreateAcceleratorResponse"></a>
<a id="tocScreateacceleratorresponse"></a>
<a id="tocscreateacceleratorresponse"></a>

```json
{
  "Accelerator": {
    "AcceleratorArn": {},
    "Name": {},
    "IpAddressType": {},
    "Enabled": {},
    "IpSets": {},
    "DnsName": {},
    "Status": {},
    "CreatedTime": {},
    "LastModifiedTime": {},
    "DualStackDnsName": {},
    "Events": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Accelerator|object|false|none|none|

<h2 id="tocS_CreateAcceleratorRequest">CreateAcceleratorRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateacceleratorrequest"></a>
<a id="schema_CreateAcceleratorRequest"></a>
<a id="tocScreateacceleratorrequest"></a>
<a id="tocscreateacceleratorrequest"></a>

```json
{
  "Name": {},
  "IpAddressType": {},
  "IpAddresses": {},
  "Enabled": {},
  "IdempotencyToken": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|IpAddressType|object|false|none|none|
|IpAddresses|object|false|none|none|
|Enabled|object|false|none|none|
|IdempotencyToken|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateCustomRoutingAcceleratorResponse">CreateCustomRoutingAcceleratorResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatecustomroutingacceleratorresponse"></a>
<a id="schema_CreateCustomRoutingAcceleratorResponse"></a>
<a id="tocScreatecustomroutingacceleratorresponse"></a>
<a id="tocscreatecustomroutingacceleratorresponse"></a>

```json
{
  "Accelerator": {
    "AcceleratorArn": {},
    "Name": {},
    "IpAddressType": {},
    "Enabled": {},
    "IpSets": {},
    "DnsName": {},
    "Status": {},
    "CreatedTime": {},
    "LastModifiedTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Accelerator|object|false|none|none|

<h2 id="tocS_CreateCustomRoutingAcceleratorRequest">CreateCustomRoutingAcceleratorRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecustomroutingacceleratorrequest"></a>
<a id="schema_CreateCustomRoutingAcceleratorRequest"></a>
<a id="tocScreatecustomroutingacceleratorrequest"></a>
<a id="tocscreatecustomroutingacceleratorrequest"></a>

```json
{
  "Name": {},
  "IpAddressType": {},
  "IpAddresses": {},
  "Enabled": {},
  "IdempotencyToken": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|IpAddressType|object|false|none|none|
|IpAddresses|object|false|none|none|
|Enabled|object|false|none|none|
|IdempotencyToken|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateCustomRoutingEndpointGroupResponse">CreateCustomRoutingEndpointGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatecustomroutingendpointgroupresponse"></a>
<a id="schema_CreateCustomRoutingEndpointGroupResponse"></a>
<a id="tocScreatecustomroutingendpointgroupresponse"></a>
<a id="tocscreatecustomroutingendpointgroupresponse"></a>

```json
{
  "EndpointGroup": {
    "EndpointGroupArn": {},
    "EndpointGroupRegion": {},
    "DestinationDescriptions": {},
    "EndpointDescriptions": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointGroup|object|false|none|none|

<h2 id="tocS_CreateCustomRoutingEndpointGroupRequest">CreateCustomRoutingEndpointGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecustomroutingendpointgrouprequest"></a>
<a id="schema_CreateCustomRoutingEndpointGroupRequest"></a>
<a id="tocScreatecustomroutingendpointgrouprequest"></a>
<a id="tocscreatecustomroutingendpointgrouprequest"></a>

```json
{
  "ListenerArn": {},
  "EndpointGroupRegion": {},
  "DestinationConfigurations": {},
  "IdempotencyToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ListenerArn|object|true|none|none|
|EndpointGroupRegion|object|true|none|none|
|DestinationConfigurations|object|true|none|none|
|IdempotencyToken|object|true|none|none|

<h2 id="tocS_AcceleratorNotFoundException">AcceleratorNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaacceleratornotfoundexception"></a>
<a id="schema_AcceleratorNotFoundException"></a>
<a id="tocSacceleratornotfoundexception"></a>
<a id="tocsacceleratornotfoundexception"></a>

```json
null
```

<h2 id="tocS_EndpointGroupAlreadyExistsException">EndpointGroupAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaendpointgroupalreadyexistsexception"></a>
<a id="schema_EndpointGroupAlreadyExistsException"></a>
<a id="tocSendpointgroupalreadyexistsexception"></a>
<a id="tocsendpointgroupalreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_ListenerNotFoundException">ListenerNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemalistenernotfoundexception"></a>
<a id="schema_ListenerNotFoundException"></a>
<a id="tocSlistenernotfoundexception"></a>
<a id="tocslistenernotfoundexception"></a>

```json
null
```

<h2 id="tocS_InvalidPortRangeException">InvalidPortRangeException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidportrangeexception"></a>
<a id="schema_InvalidPortRangeException"></a>
<a id="tocSinvalidportrangeexception"></a>
<a id="tocsinvalidportrangeexception"></a>

```json
null
```

<h2 id="tocS_CreateCustomRoutingListenerResponse">CreateCustomRoutingListenerResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatecustomroutinglistenerresponse"></a>
<a id="schema_CreateCustomRoutingListenerResponse"></a>
<a id="tocScreatecustomroutinglistenerresponse"></a>
<a id="tocscreatecustomroutinglistenerresponse"></a>

```json
{
  "Listener": {
    "ListenerArn": {},
    "PortRanges": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Listener|object|false|none|none|

<h2 id="tocS_CreateCustomRoutingListenerRequest">CreateCustomRoutingListenerRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecustomroutinglistenerrequest"></a>
<a id="schema_CreateCustomRoutingListenerRequest"></a>
<a id="tocScreatecustomroutinglistenerrequest"></a>
<a id="tocscreatecustomroutinglistenerrequest"></a>

```json
{
  "AcceleratorArn": {},
  "PortRanges": {},
  "IdempotencyToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceleratorArn|object|true|none|none|
|PortRanges|object|true|none|none|
|IdempotencyToken|object|true|none|none|

<h2 id="tocS_CreateEndpointGroupResponse">CreateEndpointGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateendpointgroupresponse"></a>
<a id="schema_CreateEndpointGroupResponse"></a>
<a id="tocScreateendpointgroupresponse"></a>
<a id="tocscreateendpointgroupresponse"></a>

```json
{
  "EndpointGroup": {
    "EndpointGroupArn": {},
    "EndpointGroupRegion": {},
    "EndpointDescriptions": {},
    "TrafficDialPercentage": {},
    "HealthCheckPort": {},
    "HealthCheckProtocol": {},
    "HealthCheckPath": {},
    "HealthCheckIntervalSeconds": {},
    "ThresholdCount": {},
    "PortOverrides": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointGroup|object|false|none|none|

<h2 id="tocS_CreateEndpointGroupRequest">CreateEndpointGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateendpointgrouprequest"></a>
<a id="schema_CreateEndpointGroupRequest"></a>
<a id="tocScreateendpointgrouprequest"></a>
<a id="tocscreateendpointgrouprequest"></a>

```json
{
  "ListenerArn": {},
  "EndpointGroupRegion": {},
  "EndpointConfigurations": {},
  "TrafficDialPercentage": {},
  "HealthCheckPort": {},
  "HealthCheckProtocol": {},
  "HealthCheckPath": {},
  "HealthCheckIntervalSeconds": {},
  "ThresholdCount": {},
  "IdempotencyToken": {},
  "PortOverrides": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ListenerArn|object|true|none|none|
|EndpointGroupRegion|object|true|none|none|
|EndpointConfigurations|object|false|none|none|
|TrafficDialPercentage|object|false|none|none|
|HealthCheckPort|object|false|none|none|
|HealthCheckProtocol|object|false|none|none|
|HealthCheckPath|object|false|none|none|
|HealthCheckIntervalSeconds|object|false|none|none|
|ThresholdCount|object|false|none|none|
|IdempotencyToken|object|true|none|none|
|PortOverrides|object|false|none|none|

<h2 id="tocS_CreateListenerResponse">CreateListenerResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatelistenerresponse"></a>
<a id="schema_CreateListenerResponse"></a>
<a id="tocScreatelistenerresponse"></a>
<a id="tocscreatelistenerresponse"></a>

```json
{
  "Listener": {
    "ListenerArn": {},
    "PortRanges": {},
    "Protocol": {},
    "ClientAffinity": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Listener|object|false|none|none|

<h2 id="tocS_CreateListenerRequest">CreateListenerRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatelistenerrequest"></a>
<a id="schema_CreateListenerRequest"></a>
<a id="tocScreatelistenerrequest"></a>
<a id="tocscreatelistenerrequest"></a>

```json
{
  "AcceleratorArn": {},
  "PortRanges": {},
  "Protocol": {},
  "ClientAffinity": {},
  "IdempotencyToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceleratorArn|object|true|none|none|
|PortRanges|object|true|none|none|
|Protocol|object|true|none|none|
|ClientAffinity|object|false|none|none|
|IdempotencyToken|object|true|none|none|

<h2 id="tocS_DeleteAcceleratorRequest">DeleteAcceleratorRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteacceleratorrequest"></a>
<a id="schema_DeleteAcceleratorRequest"></a>
<a id="tocSdeleteacceleratorrequest"></a>
<a id="tocsdeleteacceleratorrequest"></a>

```json
{
  "AcceleratorArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceleratorArn|object|true|none|none|

<h2 id="tocS_AcceleratorNotDisabledException">AcceleratorNotDisabledException</h2>
<!-- backwards compatibility -->
<a id="schemaacceleratornotdisabledexception"></a>
<a id="schema_AcceleratorNotDisabledException"></a>
<a id="tocSacceleratornotdisabledexception"></a>
<a id="tocsacceleratornotdisabledexception"></a>

```json
null
```

<h2 id="tocS_AssociatedListenerFoundException">AssociatedListenerFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaassociatedlistenerfoundexception"></a>
<a id="schema_AssociatedListenerFoundException"></a>
<a id="tocSassociatedlistenerfoundexception"></a>
<a id="tocsassociatedlistenerfoundexception"></a>

```json
null
```

<h2 id="tocS_DeleteCustomRoutingAcceleratorRequest">DeleteCustomRoutingAcceleratorRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletecustomroutingacceleratorrequest"></a>
<a id="schema_DeleteCustomRoutingAcceleratorRequest"></a>
<a id="tocSdeletecustomroutingacceleratorrequest"></a>
<a id="tocsdeletecustomroutingacceleratorrequest"></a>

```json
{
  "AcceleratorArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceleratorArn|object|true|none|none|

<h2 id="tocS_DeleteCustomRoutingEndpointGroupRequest">DeleteCustomRoutingEndpointGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletecustomroutingendpointgrouprequest"></a>
<a id="schema_DeleteCustomRoutingEndpointGroupRequest"></a>
<a id="tocSdeletecustomroutingendpointgrouprequest"></a>
<a id="tocsdeletecustomroutingendpointgrouprequest"></a>

```json
{
  "EndpointGroupArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointGroupArn|object|true|none|none|

<h2 id="tocS_DeleteCustomRoutingListenerRequest">DeleteCustomRoutingListenerRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletecustomroutinglistenerrequest"></a>
<a id="schema_DeleteCustomRoutingListenerRequest"></a>
<a id="tocSdeletecustomroutinglistenerrequest"></a>
<a id="tocsdeletecustomroutinglistenerrequest"></a>

```json
{
  "ListenerArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ListenerArn|object|true|none|none|

<h2 id="tocS_AssociatedEndpointGroupFoundException">AssociatedEndpointGroupFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaassociatedendpointgroupfoundexception"></a>
<a id="schema_AssociatedEndpointGroupFoundException"></a>
<a id="tocSassociatedendpointgroupfoundexception"></a>
<a id="tocsassociatedendpointgroupfoundexception"></a>

```json
null
```

<h2 id="tocS_DeleteEndpointGroupRequest">DeleteEndpointGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteendpointgrouprequest"></a>
<a id="schema_DeleteEndpointGroupRequest"></a>
<a id="tocSdeleteendpointgrouprequest"></a>
<a id="tocsdeleteendpointgrouprequest"></a>

```json
{
  "EndpointGroupArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointGroupArn|object|true|none|none|

<h2 id="tocS_DeleteListenerRequest">DeleteListenerRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletelistenerrequest"></a>
<a id="schema_DeleteListenerRequest"></a>
<a id="tocSdeletelistenerrequest"></a>
<a id="tocsdeletelistenerrequest"></a>

```json
{
  "ListenerArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ListenerArn|object|true|none|none|

<h2 id="tocS_DenyCustomRoutingTrafficRequest">DenyCustomRoutingTrafficRequest</h2>
<!-- backwards compatibility -->
<a id="schemadenycustomroutingtrafficrequest"></a>
<a id="schema_DenyCustomRoutingTrafficRequest"></a>
<a id="tocSdenycustomroutingtrafficrequest"></a>
<a id="tocsdenycustomroutingtrafficrequest"></a>

```json
{
  "EndpointGroupArn": {},
  "EndpointId": {},
  "DestinationAddresses": {},
  "DestinationPorts": {},
  "DenyAllTrafficToEndpoint": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointGroupArn|object|true|none|none|
|EndpointId|object|true|none|none|
|DestinationAddresses|object|false|none|none|
|DestinationPorts|object|false|none|none|
|DenyAllTrafficToEndpoint|object|false|none|none|

<h2 id="tocS_DeprovisionByoipCidrResponse">DeprovisionByoipCidrResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeprovisionbyoipcidrresponse"></a>
<a id="schema_DeprovisionByoipCidrResponse"></a>
<a id="tocSdeprovisionbyoipcidrresponse"></a>
<a id="tocsdeprovisionbyoipcidrresponse"></a>

```json
{
  "ByoipCidr": {
    "Cidr": {},
    "State": {},
    "Events": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ByoipCidr|object|false|none|none|

<h2 id="tocS_DeprovisionByoipCidrRequest">DeprovisionByoipCidrRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeprovisionbyoipcidrrequest"></a>
<a id="schema_DeprovisionByoipCidrRequest"></a>
<a id="tocSdeprovisionbyoipcidrrequest"></a>
<a id="tocsdeprovisionbyoipcidrrequest"></a>

```json
{
  "Cidr": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Cidr|object|true|none|none|

<h2 id="tocS_DescribeAcceleratorResponse">DescribeAcceleratorResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeacceleratorresponse"></a>
<a id="schema_DescribeAcceleratorResponse"></a>
<a id="tocSdescribeacceleratorresponse"></a>
<a id="tocsdescribeacceleratorresponse"></a>

```json
{
  "Accelerator": {
    "AcceleratorArn": {},
    "Name": {},
    "IpAddressType": {},
    "Enabled": {},
    "IpSets": {},
    "DnsName": {},
    "Status": {},
    "CreatedTime": {},
    "LastModifiedTime": {},
    "DualStackDnsName": {},
    "Events": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Accelerator|object|false|none|none|

<h2 id="tocS_DescribeAcceleratorRequest">DescribeAcceleratorRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeacceleratorrequest"></a>
<a id="schema_DescribeAcceleratorRequest"></a>
<a id="tocSdescribeacceleratorrequest"></a>
<a id="tocsdescribeacceleratorrequest"></a>

```json
{
  "AcceleratorArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceleratorArn|object|true|none|none|

<h2 id="tocS_DescribeAcceleratorAttributesResponse">DescribeAcceleratorAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeacceleratorattributesresponse"></a>
<a id="schema_DescribeAcceleratorAttributesResponse"></a>
<a id="tocSdescribeacceleratorattributesresponse"></a>
<a id="tocsdescribeacceleratorattributesresponse"></a>

```json
{
  "AcceleratorAttributes": {
    "FlowLogsEnabled": {},
    "FlowLogsS3Bucket": {},
    "FlowLogsS3Prefix": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceleratorAttributes|object|false|none|none|

<h2 id="tocS_DescribeAcceleratorAttributesRequest">DescribeAcceleratorAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeacceleratorattributesrequest"></a>
<a id="schema_DescribeAcceleratorAttributesRequest"></a>
<a id="tocSdescribeacceleratorattributesrequest"></a>
<a id="tocsdescribeacceleratorattributesrequest"></a>

```json
{
  "AcceleratorArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceleratorArn|object|true|none|none|

<h2 id="tocS_DescribeCustomRoutingAcceleratorResponse">DescribeCustomRoutingAcceleratorResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribecustomroutingacceleratorresponse"></a>
<a id="schema_DescribeCustomRoutingAcceleratorResponse"></a>
<a id="tocSdescribecustomroutingacceleratorresponse"></a>
<a id="tocsdescribecustomroutingacceleratorresponse"></a>

```json
{
  "Accelerator": {
    "AcceleratorArn": {},
    "Name": {},
    "IpAddressType": {},
    "Enabled": {},
    "IpSets": {},
    "DnsName": {},
    "Status": {},
    "CreatedTime": {},
    "LastModifiedTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Accelerator|object|false|none|none|

<h2 id="tocS_DescribeCustomRoutingAcceleratorRequest">DescribeCustomRoutingAcceleratorRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribecustomroutingacceleratorrequest"></a>
<a id="schema_DescribeCustomRoutingAcceleratorRequest"></a>
<a id="tocSdescribecustomroutingacceleratorrequest"></a>
<a id="tocsdescribecustomroutingacceleratorrequest"></a>

```json
{
  "AcceleratorArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceleratorArn|object|true|none|none|

<h2 id="tocS_DescribeCustomRoutingAcceleratorAttributesResponse">DescribeCustomRoutingAcceleratorAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribecustomroutingacceleratorattributesresponse"></a>
<a id="schema_DescribeCustomRoutingAcceleratorAttributesResponse"></a>
<a id="tocSdescribecustomroutingacceleratorattributesresponse"></a>
<a id="tocsdescribecustomroutingacceleratorattributesresponse"></a>

```json
{
  "AcceleratorAttributes": {
    "FlowLogsEnabled": {},
    "FlowLogsS3Bucket": {},
    "FlowLogsS3Prefix": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceleratorAttributes|object|false|none|none|

<h2 id="tocS_DescribeCustomRoutingAcceleratorAttributesRequest">DescribeCustomRoutingAcceleratorAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribecustomroutingacceleratorattributesrequest"></a>
<a id="schema_DescribeCustomRoutingAcceleratorAttributesRequest"></a>
<a id="tocSdescribecustomroutingacceleratorattributesrequest"></a>
<a id="tocsdescribecustomroutingacceleratorattributesrequest"></a>

```json
{
  "AcceleratorArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceleratorArn|object|true|none|none|

<h2 id="tocS_DescribeCustomRoutingEndpointGroupResponse">DescribeCustomRoutingEndpointGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribecustomroutingendpointgroupresponse"></a>
<a id="schema_DescribeCustomRoutingEndpointGroupResponse"></a>
<a id="tocSdescribecustomroutingendpointgroupresponse"></a>
<a id="tocsdescribecustomroutingendpointgroupresponse"></a>

```json
{
  "EndpointGroup": {
    "EndpointGroupArn": {},
    "EndpointGroupRegion": {},
    "DestinationDescriptions": {},
    "EndpointDescriptions": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointGroup|object|false|none|none|

<h2 id="tocS_DescribeCustomRoutingEndpointGroupRequest">DescribeCustomRoutingEndpointGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribecustomroutingendpointgrouprequest"></a>
<a id="schema_DescribeCustomRoutingEndpointGroupRequest"></a>
<a id="tocSdescribecustomroutingendpointgrouprequest"></a>
<a id="tocsdescribecustomroutingendpointgrouprequest"></a>

```json
{
  "EndpointGroupArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointGroupArn|object|true|none|none|

<h2 id="tocS_DescribeCustomRoutingListenerResponse">DescribeCustomRoutingListenerResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribecustomroutinglistenerresponse"></a>
<a id="schema_DescribeCustomRoutingListenerResponse"></a>
<a id="tocSdescribecustomroutinglistenerresponse"></a>
<a id="tocsdescribecustomroutinglistenerresponse"></a>

```json
{
  "Listener": {
    "ListenerArn": {},
    "PortRanges": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Listener|object|false|none|none|

<h2 id="tocS_DescribeCustomRoutingListenerRequest">DescribeCustomRoutingListenerRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribecustomroutinglistenerrequest"></a>
<a id="schema_DescribeCustomRoutingListenerRequest"></a>
<a id="tocSdescribecustomroutinglistenerrequest"></a>
<a id="tocsdescribecustomroutinglistenerrequest"></a>

```json
{
  "ListenerArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ListenerArn|object|true|none|none|

<h2 id="tocS_DescribeEndpointGroupResponse">DescribeEndpointGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeendpointgroupresponse"></a>
<a id="schema_DescribeEndpointGroupResponse"></a>
<a id="tocSdescribeendpointgroupresponse"></a>
<a id="tocsdescribeendpointgroupresponse"></a>

```json
{
  "EndpointGroup": {
    "EndpointGroupArn": {},
    "EndpointGroupRegion": {},
    "EndpointDescriptions": {},
    "TrafficDialPercentage": {},
    "HealthCheckPort": {},
    "HealthCheckProtocol": {},
    "HealthCheckPath": {},
    "HealthCheckIntervalSeconds": {},
    "ThresholdCount": {},
    "PortOverrides": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointGroup|object|false|none|none|

<h2 id="tocS_DescribeEndpointGroupRequest">DescribeEndpointGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeendpointgrouprequest"></a>
<a id="schema_DescribeEndpointGroupRequest"></a>
<a id="tocSdescribeendpointgrouprequest"></a>
<a id="tocsdescribeendpointgrouprequest"></a>

```json
{
  "EndpointGroupArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointGroupArn|object|true|none|none|

<h2 id="tocS_DescribeListenerResponse">DescribeListenerResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribelistenerresponse"></a>
<a id="schema_DescribeListenerResponse"></a>
<a id="tocSdescribelistenerresponse"></a>
<a id="tocsdescribelistenerresponse"></a>

```json
{
  "Listener": {
    "ListenerArn": {},
    "PortRanges": {},
    "Protocol": {},
    "ClientAffinity": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Listener|object|false|none|none|

<h2 id="tocS_DescribeListenerRequest">DescribeListenerRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribelistenerrequest"></a>
<a id="schema_DescribeListenerRequest"></a>
<a id="tocSdescribelistenerrequest"></a>
<a id="tocsdescribelistenerrequest"></a>

```json
{
  "ListenerArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ListenerArn|object|true|none|none|

<h2 id="tocS_ListAcceleratorsResponse">ListAcceleratorsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistacceleratorsresponse"></a>
<a id="schema_ListAcceleratorsResponse"></a>
<a id="tocSlistacceleratorsresponse"></a>
<a id="tocslistacceleratorsresponse"></a>

```json
{
  "Accelerators": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Accelerators|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListAcceleratorsRequest">ListAcceleratorsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistacceleratorsrequest"></a>
<a id="schema_ListAcceleratorsRequest"></a>
<a id="tocSlistacceleratorsrequest"></a>
<a id="tocslistacceleratorsrequest"></a>

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_InvalidNextTokenException">InvalidNextTokenException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidnexttokenexception"></a>
<a id="schema_InvalidNextTokenException"></a>
<a id="tocSinvalidnexttokenexception"></a>
<a id="tocsinvalidnexttokenexception"></a>

```json
null
```

<h2 id="tocS_ListByoipCidrsResponse">ListByoipCidrsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistbyoipcidrsresponse"></a>
<a id="schema_ListByoipCidrsResponse"></a>
<a id="tocSlistbyoipcidrsresponse"></a>
<a id="tocslistbyoipcidrsresponse"></a>

```json
{
  "ByoipCidrs": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ByoipCidrs|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListByoipCidrsRequest">ListByoipCidrsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistbyoipcidrsrequest"></a>
<a id="schema_ListByoipCidrsRequest"></a>
<a id="tocSlistbyoipcidrsrequest"></a>
<a id="tocslistbyoipcidrsrequest"></a>

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListCustomRoutingAcceleratorsResponse">ListCustomRoutingAcceleratorsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcustomroutingacceleratorsresponse"></a>
<a id="schema_ListCustomRoutingAcceleratorsResponse"></a>
<a id="tocSlistcustomroutingacceleratorsresponse"></a>
<a id="tocslistcustomroutingacceleratorsresponse"></a>

```json
{
  "Accelerators": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Accelerators|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListCustomRoutingAcceleratorsRequest">ListCustomRoutingAcceleratorsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcustomroutingacceleratorsrequest"></a>
<a id="schema_ListCustomRoutingAcceleratorsRequest"></a>
<a id="tocSlistcustomroutingacceleratorsrequest"></a>
<a id="tocslistcustomroutingacceleratorsrequest"></a>

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListCustomRoutingEndpointGroupsResponse">ListCustomRoutingEndpointGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcustomroutingendpointgroupsresponse"></a>
<a id="schema_ListCustomRoutingEndpointGroupsResponse"></a>
<a id="tocSlistcustomroutingendpointgroupsresponse"></a>
<a id="tocslistcustomroutingendpointgroupsresponse"></a>

```json
{
  "EndpointGroups": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointGroups|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListCustomRoutingEndpointGroupsRequest">ListCustomRoutingEndpointGroupsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcustomroutingendpointgroupsrequest"></a>
<a id="schema_ListCustomRoutingEndpointGroupsRequest"></a>
<a id="tocSlistcustomroutingendpointgroupsrequest"></a>
<a id="tocslistcustomroutingendpointgroupsrequest"></a>

```json
{
  "ListenerArn": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ListenerArn|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListCustomRoutingListenersResponse">ListCustomRoutingListenersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcustomroutinglistenersresponse"></a>
<a id="schema_ListCustomRoutingListenersResponse"></a>
<a id="tocSlistcustomroutinglistenersresponse"></a>
<a id="tocslistcustomroutinglistenersresponse"></a>

```json
{
  "Listeners": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Listeners|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListCustomRoutingListenersRequest">ListCustomRoutingListenersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcustomroutinglistenersrequest"></a>
<a id="schema_ListCustomRoutingListenersRequest"></a>
<a id="tocSlistcustomroutinglistenersrequest"></a>
<a id="tocslistcustomroutinglistenersrequest"></a>

```json
{
  "AcceleratorArn": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceleratorArn|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListCustomRoutingPortMappingsResponse">ListCustomRoutingPortMappingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcustomroutingportmappingsresponse"></a>
<a id="schema_ListCustomRoutingPortMappingsResponse"></a>
<a id="tocSlistcustomroutingportmappingsresponse"></a>
<a id="tocslistcustomroutingportmappingsresponse"></a>

```json
{
  "PortMappings": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PortMappings|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListCustomRoutingPortMappingsRequest">ListCustomRoutingPortMappingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcustomroutingportmappingsrequest"></a>
<a id="schema_ListCustomRoutingPortMappingsRequest"></a>
<a id="tocSlistcustomroutingportmappingsrequest"></a>
<a id="tocslistcustomroutingportmappingsrequest"></a>

```json
{
  "AcceleratorArn": {},
  "EndpointGroupArn": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceleratorArn|object|true|none|none|
|EndpointGroupArn|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListCustomRoutingPortMappingsByDestinationResponse">ListCustomRoutingPortMappingsByDestinationResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcustomroutingportmappingsbydestinationresponse"></a>
<a id="schema_ListCustomRoutingPortMappingsByDestinationResponse"></a>
<a id="tocSlistcustomroutingportmappingsbydestinationresponse"></a>
<a id="tocslistcustomroutingportmappingsbydestinationresponse"></a>

```json
{
  "DestinationPortMappings": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DestinationPortMappings|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListCustomRoutingPortMappingsByDestinationRequest">ListCustomRoutingPortMappingsByDestinationRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcustomroutingportmappingsbydestinationrequest"></a>
<a id="schema_ListCustomRoutingPortMappingsByDestinationRequest"></a>
<a id="tocSlistcustomroutingportmappingsbydestinationrequest"></a>
<a id="tocslistcustomroutingportmappingsbydestinationrequest"></a>

```json
{
  "EndpointId": {},
  "DestinationAddress": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointId|object|true|none|none|
|DestinationAddress|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_EndpointNotFoundException">EndpointNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaendpointnotfoundexception"></a>
<a id="schema_EndpointNotFoundException"></a>
<a id="tocSendpointnotfoundexception"></a>
<a id="tocsendpointnotfoundexception"></a>

```json
null
```

<h2 id="tocS_ListEndpointGroupsResponse">ListEndpointGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistendpointgroupsresponse"></a>
<a id="schema_ListEndpointGroupsResponse"></a>
<a id="tocSlistendpointgroupsresponse"></a>
<a id="tocslistendpointgroupsresponse"></a>

```json
{
  "EndpointGroups": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointGroups|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListEndpointGroupsRequest">ListEndpointGroupsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistendpointgroupsrequest"></a>
<a id="schema_ListEndpointGroupsRequest"></a>
<a id="tocSlistendpointgroupsrequest"></a>
<a id="tocslistendpointgroupsrequest"></a>

```json
{
  "ListenerArn": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ListenerArn|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListListenersResponse">ListListenersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistlistenersresponse"></a>
<a id="schema_ListListenersResponse"></a>
<a id="tocSlistlistenersresponse"></a>
<a id="tocslistlistenersresponse"></a>

```json
{
  "Listeners": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Listeners|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListListenersRequest">ListListenersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistlistenersrequest"></a>
<a id="schema_ListListenersRequest"></a>
<a id="tocSlistlistenersrequest"></a>
<a id="tocslistlistenersrequest"></a>

```json
{
  "AcceleratorArn": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceleratorArn|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{
  "ResourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|

<h2 id="tocS_ProvisionByoipCidrResponse">ProvisionByoipCidrResponse</h2>
<!-- backwards compatibility -->
<a id="schemaprovisionbyoipcidrresponse"></a>
<a id="schema_ProvisionByoipCidrResponse"></a>
<a id="tocSprovisionbyoipcidrresponse"></a>
<a id="tocsprovisionbyoipcidrresponse"></a>

```json
{
  "ByoipCidr": {
    "Cidr": {},
    "State": {},
    "Events": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ByoipCidr|object|false|none|none|

<h2 id="tocS_ProvisionByoipCidrRequest">ProvisionByoipCidrRequest</h2>
<!-- backwards compatibility -->
<a id="schemaprovisionbyoipcidrrequest"></a>
<a id="schema_ProvisionByoipCidrRequest"></a>
<a id="tocSprovisionbyoipcidrrequest"></a>
<a id="tocsprovisionbyoipcidrrequest"></a>

```json
{
  "Cidr": {},
  "CidrAuthorizationContext": {
    "Message": {},
    "Signature": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Cidr|object|true|none|none|
|CidrAuthorizationContext|object|true|none|none|

<h2 id="tocS_RemoveCustomRoutingEndpointsRequest">RemoveCustomRoutingEndpointsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremovecustomroutingendpointsrequest"></a>
<a id="schema_RemoveCustomRoutingEndpointsRequest"></a>
<a id="tocSremovecustomroutingendpointsrequest"></a>
<a id="tocsremovecustomroutingendpointsrequest"></a>

```json
{
  "EndpointIds": {},
  "EndpointGroupArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointIds|object|true|none|none|
|EndpointGroupArn|object|true|none|none|

<h2 id="tocS_RemoveEndpointsRequest">RemoveEndpointsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremoveendpointsrequest"></a>
<a id="schema_RemoveEndpointsRequest"></a>
<a id="tocSremoveendpointsrequest"></a>
<a id="tocsremoveendpointsrequest"></a>

```json
{
  "EndpointIdentifiers": {},
  "EndpointGroupArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointIdentifiers|object|true|none|none|
|EndpointGroupArn|object|true|none|none|

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
  "ResourceArn": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|Tags|object|true|none|none|

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
  "ResourceArn": {},
  "TagKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|TagKeys|object|true|none|none|

<h2 id="tocS_UpdateAcceleratorResponse">UpdateAcceleratorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateacceleratorresponse"></a>
<a id="schema_UpdateAcceleratorResponse"></a>
<a id="tocSupdateacceleratorresponse"></a>
<a id="tocsupdateacceleratorresponse"></a>

```json
{
  "Accelerator": {
    "AcceleratorArn": {},
    "Name": {},
    "IpAddressType": {},
    "Enabled": {},
    "IpSets": {},
    "DnsName": {},
    "Status": {},
    "CreatedTime": {},
    "LastModifiedTime": {},
    "DualStackDnsName": {},
    "Events": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Accelerator|object|false|none|none|

<h2 id="tocS_UpdateAcceleratorRequest">UpdateAcceleratorRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateacceleratorrequest"></a>
<a id="schema_UpdateAcceleratorRequest"></a>
<a id="tocSupdateacceleratorrequest"></a>
<a id="tocsupdateacceleratorrequest"></a>

```json
{
  "AcceleratorArn": {},
  "Name": {},
  "IpAddressType": {},
  "Enabled": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceleratorArn|object|true|none|none|
|Name|object|false|none|none|
|IpAddressType|object|false|none|none|
|Enabled|object|false|none|none|

<h2 id="tocS_UpdateAcceleratorAttributesResponse">UpdateAcceleratorAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateacceleratorattributesresponse"></a>
<a id="schema_UpdateAcceleratorAttributesResponse"></a>
<a id="tocSupdateacceleratorattributesresponse"></a>
<a id="tocsupdateacceleratorattributesresponse"></a>

```json
{
  "AcceleratorAttributes": {
    "FlowLogsEnabled": {},
    "FlowLogsS3Bucket": {},
    "FlowLogsS3Prefix": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceleratorAttributes|object|false|none|none|

<h2 id="tocS_UpdateAcceleratorAttributesRequest">UpdateAcceleratorAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateacceleratorattributesrequest"></a>
<a id="schema_UpdateAcceleratorAttributesRequest"></a>
<a id="tocSupdateacceleratorattributesrequest"></a>
<a id="tocsupdateacceleratorattributesrequest"></a>

```json
{
  "AcceleratorArn": {},
  "FlowLogsEnabled": {},
  "FlowLogsS3Bucket": {},
  "FlowLogsS3Prefix": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceleratorArn|object|true|none|none|
|FlowLogsEnabled|object|false|none|none|
|FlowLogsS3Bucket|object|false|none|none|
|FlowLogsS3Prefix|object|false|none|none|

<h2 id="tocS_UpdateCustomRoutingAcceleratorResponse">UpdateCustomRoutingAcceleratorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecustomroutingacceleratorresponse"></a>
<a id="schema_UpdateCustomRoutingAcceleratorResponse"></a>
<a id="tocSupdatecustomroutingacceleratorresponse"></a>
<a id="tocsupdatecustomroutingacceleratorresponse"></a>

```json
{
  "Accelerator": {
    "AcceleratorArn": {},
    "Name": {},
    "IpAddressType": {},
    "Enabled": {},
    "IpSets": {},
    "DnsName": {},
    "Status": {},
    "CreatedTime": {},
    "LastModifiedTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Accelerator|object|false|none|none|

<h2 id="tocS_UpdateCustomRoutingAcceleratorRequest">UpdateCustomRoutingAcceleratorRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecustomroutingacceleratorrequest"></a>
<a id="schema_UpdateCustomRoutingAcceleratorRequest"></a>
<a id="tocSupdatecustomroutingacceleratorrequest"></a>
<a id="tocsupdatecustomroutingacceleratorrequest"></a>

```json
{
  "AcceleratorArn": {},
  "Name": {},
  "IpAddressType": {},
  "Enabled": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceleratorArn|object|true|none|none|
|Name|object|false|none|none|
|IpAddressType|object|false|none|none|
|Enabled|object|false|none|none|

<h2 id="tocS_UpdateCustomRoutingAcceleratorAttributesResponse">UpdateCustomRoutingAcceleratorAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecustomroutingacceleratorattributesresponse"></a>
<a id="schema_UpdateCustomRoutingAcceleratorAttributesResponse"></a>
<a id="tocSupdatecustomroutingacceleratorattributesresponse"></a>
<a id="tocsupdatecustomroutingacceleratorattributesresponse"></a>

```json
{
  "AcceleratorAttributes": {
    "FlowLogsEnabled": {},
    "FlowLogsS3Bucket": {},
    "FlowLogsS3Prefix": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceleratorAttributes|object|false|none|none|

<h2 id="tocS_UpdateCustomRoutingAcceleratorAttributesRequest">UpdateCustomRoutingAcceleratorAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecustomroutingacceleratorattributesrequest"></a>
<a id="schema_UpdateCustomRoutingAcceleratorAttributesRequest"></a>
<a id="tocSupdatecustomroutingacceleratorattributesrequest"></a>
<a id="tocsupdatecustomroutingacceleratorattributesrequest"></a>

```json
{
  "AcceleratorArn": {},
  "FlowLogsEnabled": {},
  "FlowLogsS3Bucket": {},
  "FlowLogsS3Prefix": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceleratorArn|object|true|none|none|
|FlowLogsEnabled|object|false|none|none|
|FlowLogsS3Bucket|object|false|none|none|
|FlowLogsS3Prefix|object|false|none|none|

<h2 id="tocS_UpdateCustomRoutingListenerResponse">UpdateCustomRoutingListenerResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecustomroutinglistenerresponse"></a>
<a id="schema_UpdateCustomRoutingListenerResponse"></a>
<a id="tocSupdatecustomroutinglistenerresponse"></a>
<a id="tocsupdatecustomroutinglistenerresponse"></a>

```json
{
  "Listener": {
    "ListenerArn": {},
    "PortRanges": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Listener|object|false|none|none|

<h2 id="tocS_UpdateCustomRoutingListenerRequest">UpdateCustomRoutingListenerRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecustomroutinglistenerrequest"></a>
<a id="schema_UpdateCustomRoutingListenerRequest"></a>
<a id="tocSupdatecustomroutinglistenerrequest"></a>
<a id="tocsupdatecustomroutinglistenerrequest"></a>

```json
{
  "ListenerArn": {},
  "PortRanges": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ListenerArn|object|true|none|none|
|PortRanges|object|true|none|none|

<h2 id="tocS_UpdateEndpointGroupResponse">UpdateEndpointGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateendpointgroupresponse"></a>
<a id="schema_UpdateEndpointGroupResponse"></a>
<a id="tocSupdateendpointgroupresponse"></a>
<a id="tocsupdateendpointgroupresponse"></a>

```json
{
  "EndpointGroup": {
    "EndpointGroupArn": {},
    "EndpointGroupRegion": {},
    "EndpointDescriptions": {},
    "TrafficDialPercentage": {},
    "HealthCheckPort": {},
    "HealthCheckProtocol": {},
    "HealthCheckPath": {},
    "HealthCheckIntervalSeconds": {},
    "ThresholdCount": {},
    "PortOverrides": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointGroup|object|false|none|none|

<h2 id="tocS_UpdateEndpointGroupRequest">UpdateEndpointGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateendpointgrouprequest"></a>
<a id="schema_UpdateEndpointGroupRequest"></a>
<a id="tocSupdateendpointgrouprequest"></a>
<a id="tocsupdateendpointgrouprequest"></a>

```json
{
  "EndpointGroupArn": {},
  "EndpointConfigurations": {},
  "TrafficDialPercentage": {},
  "HealthCheckPort": {},
  "HealthCheckProtocol": {},
  "HealthCheckPath": {},
  "HealthCheckIntervalSeconds": {},
  "ThresholdCount": {},
  "PortOverrides": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointGroupArn|object|true|none|none|
|EndpointConfigurations|object|false|none|none|
|TrafficDialPercentage|object|false|none|none|
|HealthCheckPort|object|false|none|none|
|HealthCheckProtocol|object|false|none|none|
|HealthCheckPath|object|false|none|none|
|HealthCheckIntervalSeconds|object|false|none|none|
|ThresholdCount|object|false|none|none|
|PortOverrides|object|false|none|none|

<h2 id="tocS_UpdateListenerResponse">UpdateListenerResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatelistenerresponse"></a>
<a id="schema_UpdateListenerResponse"></a>
<a id="tocSupdatelistenerresponse"></a>
<a id="tocsupdatelistenerresponse"></a>

```json
{
  "Listener": {
    "ListenerArn": {},
    "PortRanges": {},
    "Protocol": {},
    "ClientAffinity": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Listener|object|false|none|none|

<h2 id="tocS_UpdateListenerRequest">UpdateListenerRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatelistenerrequest"></a>
<a id="schema_UpdateListenerRequest"></a>
<a id="tocSupdatelistenerrequest"></a>
<a id="tocsupdatelistenerrequest"></a>

```json
{
  "ListenerArn": {},
  "PortRanges": {},
  "Protocol": {},
  "ClientAffinity": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ListenerArn|object|true|none|none|
|PortRanges|object|false|none|none|
|Protocol|object|false|none|none|
|ClientAffinity|object|false|none|none|

<h2 id="tocS_WithdrawByoipCidrResponse">WithdrawByoipCidrResponse</h2>
<!-- backwards compatibility -->
<a id="schemawithdrawbyoipcidrresponse"></a>
<a id="schema_WithdrawByoipCidrResponse"></a>
<a id="tocSwithdrawbyoipcidrresponse"></a>
<a id="tocswithdrawbyoipcidrresponse"></a>

```json
{
  "ByoipCidr": {
    "Cidr": {},
    "State": {},
    "Events": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ByoipCidr|object|false|none|none|

<h2 id="tocS_WithdrawByoipCidrRequest">WithdrawByoipCidrRequest</h2>
<!-- backwards compatibility -->
<a id="schemawithdrawbyoipcidrrequest"></a>
<a id="schema_WithdrawByoipCidrRequest"></a>
<a id="tocSwithdrawbyoipcidrrequest"></a>
<a id="tocswithdrawbyoipcidrrequest"></a>

```json
{
  "Cidr": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Cidr|object|true|none|none|

<h2 id="tocS_GenericString">GenericString</h2>
<!-- backwards compatibility -->
<a id="schemagenericstring"></a>
<a id="schema_GenericString"></a>
<a id="tocSgenericstring"></a>
<a id="tocsgenericstring"></a>

```json
"string"
```

<h2 id="tocS_IpAddressType">IpAddressType</h2>
<!-- backwards compatibility -->
<a id="schemaipaddresstype"></a>
<a id="schema_IpAddressType"></a>
<a id="tocSipaddresstype"></a>
<a id="tocsipaddresstype"></a>

```json
"IPV4"
```

<h2 id="tocS_GenericBoolean">GenericBoolean</h2>
<!-- backwards compatibility -->
<a id="schemagenericboolean"></a>
<a id="schema_GenericBoolean"></a>
<a id="tocSgenericboolean"></a>
<a id="tocsgenericboolean"></a>

```json
true
```

<h2 id="tocS_IpSets">IpSets</h2>
<!-- backwards compatibility -->
<a id="schemaipsets"></a>
<a id="schema_IpSets"></a>
<a id="tocSipsets"></a>
<a id="tocsipsets"></a>

```json
[
  {
    "IpFamily": {},
    "IpAddresses": {},
    "IpAddressFamily": {}
  }
]
```

<h2 id="tocS_AcceleratorStatus">AcceleratorStatus</h2>
<!-- backwards compatibility -->
<a id="schemaacceleratorstatus"></a>
<a id="schema_AcceleratorStatus"></a>
<a id="tocSacceleratorstatus"></a>
<a id="tocsacceleratorstatus"></a>

```json
"DEPLOYED"
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

<h2 id="tocS_AcceleratorEvents">AcceleratorEvents</h2>
<!-- backwards compatibility -->
<a id="schemaacceleratorevents"></a>
<a id="schema_AcceleratorEvents"></a>
<a id="tocSacceleratorevents"></a>
<a id="tocsacceleratorevents"></a>

```json
[
  {
    "Message": {},
    "Timestamp": {}
  }
]
```

<h2 id="tocS_Accelerator">Accelerator</h2>
<!-- backwards compatibility -->
<a id="schemaaccelerator"></a>
<a id="schema_Accelerator"></a>
<a id="tocSaccelerator"></a>
<a id="tocsaccelerator"></a>

```json
{
  "AcceleratorArn": {},
  "Name": {},
  "IpAddressType": {},
  "Enabled": {},
  "IpSets": {},
  "DnsName": {},
  "Status": {},
  "CreatedTime": {},
  "LastModifiedTime": {},
  "DualStackDnsName": {},
  "Events": {}
}
```

An accelerator is a complex type that includes one or more listeners that process inbound connections and then direct traffic to one or more endpoint groups, each of which includes endpoints, such as load balancers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceleratorArn|object|false|none|none|
|Name|object|false|none|none|
|IpAddressType|object|false|none|none|
|Enabled|object|false|none|none|
|IpSets|object|false|none|none|
|DnsName|object|false|none|none|
|Status|object|false|none|none|
|CreatedTime|object|false|none|none|
|LastModifiedTime|object|false|none|none|
|DualStackDnsName|object|false|none|none|
|Events|object|false|none|none|

<h2 id="tocS_AcceleratorAttributes">AcceleratorAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaacceleratorattributes"></a>
<a id="schema_AcceleratorAttributes"></a>
<a id="tocSacceleratorattributes"></a>
<a id="tocsacceleratorattributes"></a>

```json
{
  "FlowLogsEnabled": {},
  "FlowLogsS3Bucket": {},
  "FlowLogsS3Prefix": {}
}
```

Attributes of an accelerator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FlowLogsEnabled|object|false|none|none|
|FlowLogsS3Bucket|object|false|none|none|
|FlowLogsS3Prefix|object|false|none|none|

<h2 id="tocS_AcceleratorEvent">AcceleratorEvent</h2>
<!-- backwards compatibility -->
<a id="schemaacceleratorevent"></a>
<a id="schema_AcceleratorEvent"></a>
<a id="tocSacceleratorevent"></a>
<a id="tocsacceleratorevent"></a>

```json
{
  "Message": {},
  "Timestamp": {}
}
```

A complex type that contains a <code>Timestamp</code> value and <code>Message</code> for changes that you make to an accelerator in Global Accelerator. Messages stored here provide progress or error information when you update an accelerator from IPv4 to dual-stack, or from dual-stack to IPv4. Global Accelerator stores a maximum of ten event messages.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|object|false|none|none|
|Timestamp|object|false|none|none|

<h2 id="tocS_Accelerators">Accelerators</h2>
<!-- backwards compatibility -->
<a id="schemaaccelerators"></a>
<a id="schema_Accelerators"></a>
<a id="tocSaccelerators"></a>
<a id="tocsaccelerators"></a>

```json
[
  {
    "AcceleratorArn": {},
    "Name": {},
    "IpAddressType": {},
    "Enabled": {},
    "IpSets": {},
    "DnsName": {},
    "Status": {},
    "CreatedTime": {},
    "LastModifiedTime": {},
    "DualStackDnsName": {},
    "Events": {}
  }
]
```

<h2 id="tocS_CustomRoutingEndpointConfigurations">CustomRoutingEndpointConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemacustomroutingendpointconfigurations"></a>
<a id="schema_CustomRoutingEndpointConfigurations"></a>
<a id="tocScustomroutingendpointconfigurations"></a>
<a id="tocscustomroutingendpointconfigurations"></a>

```json
[
  {
    "EndpointId": {}
  }
]
```

<h2 id="tocS_CustomRoutingEndpointDescriptions">CustomRoutingEndpointDescriptions</h2>
<!-- backwards compatibility -->
<a id="schemacustomroutingendpointdescriptions"></a>
<a id="schema_CustomRoutingEndpointDescriptions"></a>
<a id="tocScustomroutingendpointdescriptions"></a>
<a id="tocscustomroutingendpointdescriptions"></a>

```json
[
  {
    "EndpointId": {}
  }
]
```

<h2 id="tocS_EndpointConfigurations">EndpointConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemaendpointconfigurations"></a>
<a id="schema_EndpointConfigurations"></a>
<a id="tocSendpointconfigurations"></a>
<a id="tocsendpointconfigurations"></a>

```json
[
  {
    "EndpointId": {},
    "Weight": {},
    "ClientIPPreservationEnabled": {}
  }
]
```

<h2 id="tocS_EndpointDescriptions">EndpointDescriptions</h2>
<!-- backwards compatibility -->
<a id="schemaendpointdescriptions"></a>
<a id="schema_EndpointDescriptions"></a>
<a id="tocSendpointdescriptions"></a>
<a id="tocsendpointdescriptions"></a>

```json
[
  {
    "EndpointId": {},
    "Weight": {},
    "HealthState": {},
    "HealthReason": {},
    "ClientIPPreservationEnabled": {}
  }
]
```

<h2 id="tocS_ByoipCidr">ByoipCidr</h2>
<!-- backwards compatibility -->
<a id="schemabyoipcidr"></a>
<a id="schema_ByoipCidr"></a>
<a id="tocSbyoipcidr"></a>
<a id="tocsbyoipcidr"></a>

```json
{
  "Cidr": {},
  "State": {},
  "Events": {}
}
```

<p>Information about an IP address range that is provisioned for use with your Amazon Web Services resources through bring your own IP address (BYOIP).</p> <p>The following describes each BYOIP <code>State</code> that your IP address range can be in.</p> <ul> <li> <p> <b>PENDING_PROVISIONING</b> — You’ve submitted a request to provision an IP address range but it is not yet provisioned with Global Accelerator.</p> </li> <li> <p> <b>READY</b> — The address range is provisioned with Global Accelerator and can be advertised.</p> </li> <li> <p> <b>PENDING_ADVERTISING</b> — You’ve submitted a request for Global Accelerator to advertise an address range but it is not yet being advertised.</p> </li> <li> <p> <b>ADVERTISING</b> — The address range is being advertised by Global Accelerator.</p> </li> <li> <p> <b>PENDING_WITHDRAWING</b> — You’ve submitted a request to withdraw an address range from being advertised but it is still being advertised by Global Accelerator.</p> </li> <li> <p> <b>PENDING_DEPROVISIONING</b> — You’ve submitted a request to deprovision an address range from Global Accelerator but it is still provisioned.</p> </li> <li> <p> <b>DEPROVISIONED</b> — The address range is deprovisioned from Global Accelerator.</p> </li> <li> <p> <b>FAILED_PROVISION </b> — The request to provision the address range from Global Accelerator was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact Amazon Web Services support.</p> </li> <li> <p> <b>FAILED_ADVERTISING</b> — The request for Global Accelerator to advertise the address range was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact Amazon Web Services support.</p> </li> <li> <p> <b>FAILED_WITHDRAW</b> — The request to withdraw the address range from advertising by Global Accelerator was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact Amazon Web Services support.</p> </li> <li> <p> <b>FAILED_DEPROVISION </b> — The request to deprovision the address range from Global Accelerator was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact Amazon Web Services support.</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Cidr|object|false|none|none|
|State|object|false|none|none|
|Events|object|false|none|none|

<h2 id="tocS_DestinationAddresses">DestinationAddresses</h2>
<!-- backwards compatibility -->
<a id="schemadestinationaddresses"></a>
<a id="schema_DestinationAddresses"></a>
<a id="tocSdestinationaddresses"></a>
<a id="tocsdestinationaddresses"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DestinationPorts">DestinationPorts</h2>
<!-- backwards compatibility -->
<a id="schemadestinationports"></a>
<a id="schema_DestinationPorts"></a>
<a id="tocSdestinationports"></a>
<a id="tocsdestinationports"></a>

```json
[
  1
]
```

<h2 id="tocS_ByoipCidrState">ByoipCidrState</h2>
<!-- backwards compatibility -->
<a id="schemabyoipcidrstate"></a>
<a id="schema_ByoipCidrState"></a>
<a id="tocSbyoipcidrstate"></a>
<a id="tocsbyoipcidrstate"></a>

```json
"PENDING_PROVISIONING"
```

<h2 id="tocS_ByoipCidrEvents">ByoipCidrEvents</h2>
<!-- backwards compatibility -->
<a id="schemabyoipcidrevents"></a>
<a id="schema_ByoipCidrEvents"></a>
<a id="tocSbyoipcidrevents"></a>
<a id="tocsbyoipcidrevents"></a>

```json
[
  {
    "Message": {},
    "Timestamp": {}
  }
]
```

<h2 id="tocS_ByoipCidrEvent">ByoipCidrEvent</h2>
<!-- backwards compatibility -->
<a id="schemabyoipcidrevent"></a>
<a id="schema_ByoipCidrEvent"></a>
<a id="tocSbyoipcidrevent"></a>
<a id="tocsbyoipcidrevent"></a>

```json
{
  "Message": {},
  "Timestamp": {}
}
```

A complex type that contains a <code>Message</code> and a <code>Timestamp</code> value for changes that you make in the status of an IP address range that you bring to Global Accelerator through bring your own IP address (BYOIP).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|object|false|none|none|
|Timestamp|object|false|none|none|

<h2 id="tocS_ByoipCidrs">ByoipCidrs</h2>
<!-- backwards compatibility -->
<a id="schemabyoipcidrs"></a>
<a id="schema_ByoipCidrs"></a>
<a id="tocSbyoipcidrs"></a>
<a id="tocsbyoipcidrs"></a>

```json
[
  {
    "Cidr": {},
    "State": {},
    "Events": {}
  }
]
```

<h2 id="tocS_CidrAuthorizationContext">CidrAuthorizationContext</h2>
<!-- backwards compatibility -->
<a id="schemacidrauthorizationcontext"></a>
<a id="schema_CidrAuthorizationContext"></a>
<a id="tocScidrauthorizationcontext"></a>
<a id="tocscidrauthorizationcontext"></a>

```json
{
  "Message": {},
  "Signature": {}
}
```

<p>Provides authorization for Amazon to bring a specific IP address range to a specific Amazon Web Services account using bring your own IP addresses (BYOIP). </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|object|true|none|none|
|Signature|object|true|none|none|

<h2 id="tocS_ClientAffinity">ClientAffinity</h2>
<!-- backwards compatibility -->
<a id="schemaclientaffinity"></a>
<a id="schema_ClientAffinity"></a>
<a id="tocSclientaffinity"></a>
<a id="tocsclientaffinity"></a>

```json
"NONE"
```

<h2 id="tocS_IpAddresses">IpAddresses</h2>
<!-- backwards compatibility -->
<a id="schemaipaddresses"></a>
<a id="schema_IpAddresses"></a>
<a id="tocSipaddresses"></a>
<a id="tocsipaddresses"></a>

```json
[
  "string"
]
```

<h2 id="tocS_IdempotencyToken">IdempotencyToken</h2>
<!-- backwards compatibility -->
<a id="schemaidempotencytoken"></a>
<a id="schema_IdempotencyToken"></a>
<a id="tocSidempotencytoken"></a>
<a id="tocsidempotencytoken"></a>

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
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_CustomRoutingAccelerator">CustomRoutingAccelerator</h2>
<!-- backwards compatibility -->
<a id="schemacustomroutingaccelerator"></a>
<a id="schema_CustomRoutingAccelerator"></a>
<a id="tocScustomroutingaccelerator"></a>
<a id="tocscustomroutingaccelerator"></a>

```json
{
  "AcceleratorArn": {},
  "Name": {},
  "IpAddressType": {},
  "Enabled": {},
  "IpSets": {},
  "DnsName": {},
  "Status": {},
  "CreatedTime": {},
  "LastModifiedTime": {}
}
```

Attributes of a custom routing accelerator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceleratorArn|object|false|none|none|
|Name|object|false|none|none|
|IpAddressType|object|false|none|none|
|Enabled|object|false|none|none|
|IpSets|object|false|none|none|
|DnsName|object|false|none|none|
|Status|object|false|none|none|
|CreatedTime|object|false|none|none|
|LastModifiedTime|object|false|none|none|

<h2 id="tocS_CustomRoutingDestinationConfigurations">CustomRoutingDestinationConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemacustomroutingdestinationconfigurations"></a>
<a id="schema_CustomRoutingDestinationConfigurations"></a>
<a id="tocScustomroutingdestinationconfigurations"></a>
<a id="tocscustomroutingdestinationconfigurations"></a>

```json
[
  {
    "FromPort": {},
    "ToPort": {},
    "Protocols": {}
  }
]
```

<h2 id="tocS_CustomRoutingEndpointGroup">CustomRoutingEndpointGroup</h2>
<!-- backwards compatibility -->
<a id="schemacustomroutingendpointgroup"></a>
<a id="schema_CustomRoutingEndpointGroup"></a>
<a id="tocScustomroutingendpointgroup"></a>
<a id="tocscustomroutingendpointgroup"></a>

```json
{
  "EndpointGroupArn": {},
  "EndpointGroupRegion": {},
  "DestinationDescriptions": {},
  "EndpointDescriptions": {}
}
```

A complex type for the endpoint group for a custom routing accelerator. An Amazon Web Services Region can have only one endpoint group for a specific listener.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointGroupArn|object|false|none|none|
|EndpointGroupRegion|object|false|none|none|
|DestinationDescriptions|object|false|none|none|
|EndpointDescriptions|object|false|none|none|

<h2 id="tocS_PortRanges">PortRanges</h2>
<!-- backwards compatibility -->
<a id="schemaportranges"></a>
<a id="schema_PortRanges"></a>
<a id="tocSportranges"></a>
<a id="tocsportranges"></a>

```json
[
  {
    "FromPort": {},
    "ToPort": {}
  }
]
```

<h2 id="tocS_CustomRoutingListener">CustomRoutingListener</h2>
<!-- backwards compatibility -->
<a id="schemacustomroutinglistener"></a>
<a id="schema_CustomRoutingListener"></a>
<a id="tocScustomroutinglistener"></a>
<a id="tocscustomroutinglistener"></a>

```json
{
  "ListenerArn": {},
  "PortRanges": {}
}
```

A complex type for a listener for a custom routing accelerator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ListenerArn|object|false|none|none|
|PortRanges|object|false|none|none|

<h2 id="tocS_TrafficDialPercentage">TrafficDialPercentage</h2>
<!-- backwards compatibility -->
<a id="schematrafficdialpercentage"></a>
<a id="schema_TrafficDialPercentage"></a>
<a id="tocStrafficdialpercentage"></a>
<a id="tocstrafficdialpercentage"></a>

```json
0
```

<h2 id="tocS_HealthCheckPort">HealthCheckPort</h2>
<!-- backwards compatibility -->
<a id="schemahealthcheckport"></a>
<a id="schema_HealthCheckPort"></a>
<a id="tocShealthcheckport"></a>
<a id="tocshealthcheckport"></a>

```json
1
```

<h2 id="tocS_HealthCheckProtocol">HealthCheckProtocol</h2>
<!-- backwards compatibility -->
<a id="schemahealthcheckprotocol"></a>
<a id="schema_HealthCheckProtocol"></a>
<a id="tocShealthcheckprotocol"></a>
<a id="tocshealthcheckprotocol"></a>

```json
"TCP"
```

<h2 id="tocS_HealthCheckPath">HealthCheckPath</h2>
<!-- backwards compatibility -->
<a id="schemahealthcheckpath"></a>
<a id="schema_HealthCheckPath"></a>
<a id="tocShealthcheckpath"></a>
<a id="tocshealthcheckpath"></a>

```json
"string"
```

<h2 id="tocS_HealthCheckIntervalSeconds">HealthCheckIntervalSeconds</h2>
<!-- backwards compatibility -->
<a id="schemahealthcheckintervalseconds"></a>
<a id="schema_HealthCheckIntervalSeconds"></a>
<a id="tocShealthcheckintervalseconds"></a>
<a id="tocshealthcheckintervalseconds"></a>

```json
10
```

<h2 id="tocS_ThresholdCount">ThresholdCount</h2>
<!-- backwards compatibility -->
<a id="schemathresholdcount"></a>
<a id="schema_ThresholdCount"></a>
<a id="tocSthresholdcount"></a>
<a id="tocsthresholdcount"></a>

```json
1
```

<h2 id="tocS_PortOverrides">PortOverrides</h2>
<!-- backwards compatibility -->
<a id="schemaportoverrides"></a>
<a id="schema_PortOverrides"></a>
<a id="tocSportoverrides"></a>
<a id="tocsportoverrides"></a>

```json
[
  {
    "ListenerPort": {},
    "EndpointPort": {}
  }
]
```

<h2 id="tocS_EndpointGroup">EndpointGroup</h2>
<!-- backwards compatibility -->
<a id="schemaendpointgroup"></a>
<a id="schema_EndpointGroup"></a>
<a id="tocSendpointgroup"></a>
<a id="tocsendpointgroup"></a>

```json
{
  "EndpointGroupArn": {},
  "EndpointGroupRegion": {},
  "EndpointDescriptions": {},
  "TrafficDialPercentage": {},
  "HealthCheckPort": {},
  "HealthCheckProtocol": {},
  "HealthCheckPath": {},
  "HealthCheckIntervalSeconds": {},
  "ThresholdCount": {},
  "PortOverrides": {}
}
```

A complex type for the endpoint group. An Amazon Web Services Region can have only one endpoint group for a specific listener.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointGroupArn|object|false|none|none|
|EndpointGroupRegion|object|false|none|none|
|EndpointDescriptions|object|false|none|none|
|TrafficDialPercentage|object|false|none|none|
|HealthCheckPort|object|false|none|none|
|HealthCheckProtocol|object|false|none|none|
|HealthCheckPath|object|false|none|none|
|HealthCheckIntervalSeconds|object|false|none|none|
|ThresholdCount|object|false|none|none|
|PortOverrides|object|false|none|none|

<h2 id="tocS_Protocol">Protocol</h2>
<!-- backwards compatibility -->
<a id="schemaprotocol"></a>
<a id="schema_Protocol"></a>
<a id="tocSprotocol"></a>
<a id="tocsprotocol"></a>

```json
"TCP"
```

<h2 id="tocS_Listener">Listener</h2>
<!-- backwards compatibility -->
<a id="schemalistener"></a>
<a id="schema_Listener"></a>
<a id="tocSlistener"></a>
<a id="tocslistener"></a>

```json
{
  "ListenerArn": {},
  "PortRanges": {},
  "Protocol": {},
  "ClientAffinity": {}
}
```

A complex type for a listener.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ListenerArn|object|false|none|none|
|PortRanges|object|false|none|none|
|Protocol|object|false|none|none|
|ClientAffinity|object|false|none|none|

<h2 id="tocS_CustomRoutingAcceleratorStatus">CustomRoutingAcceleratorStatus</h2>
<!-- backwards compatibility -->
<a id="schemacustomroutingacceleratorstatus"></a>
<a id="schema_CustomRoutingAcceleratorStatus"></a>
<a id="tocScustomroutingacceleratorstatus"></a>
<a id="tocscustomroutingacceleratorstatus"></a>

```json
"DEPLOYED"
```

<h2 id="tocS_CustomRoutingAcceleratorAttributes">CustomRoutingAcceleratorAttributes</h2>
<!-- backwards compatibility -->
<a id="schemacustomroutingacceleratorattributes"></a>
<a id="schema_CustomRoutingAcceleratorAttributes"></a>
<a id="tocScustomroutingacceleratorattributes"></a>
<a id="tocscustomroutingacceleratorattributes"></a>

```json
{
  "FlowLogsEnabled": {},
  "FlowLogsS3Bucket": {},
  "FlowLogsS3Prefix": {}
}
```

Attributes of a custom routing accelerator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FlowLogsEnabled|object|false|none|none|
|FlowLogsS3Bucket|object|false|none|none|
|FlowLogsS3Prefix|object|false|none|none|

<h2 id="tocS_CustomRoutingAccelerators">CustomRoutingAccelerators</h2>
<!-- backwards compatibility -->
<a id="schemacustomroutingaccelerators"></a>
<a id="schema_CustomRoutingAccelerators"></a>
<a id="tocScustomroutingaccelerators"></a>
<a id="tocscustomroutingaccelerators"></a>

```json
[
  {
    "AcceleratorArn": {},
    "Name": {},
    "IpAddressType": {},
    "Enabled": {},
    "IpSets": {},
    "DnsName": {},
    "Status": {},
    "CreatedTime": {},
    "LastModifiedTime": {}
  }
]
```

<h2 id="tocS_PortNumber">PortNumber</h2>
<!-- backwards compatibility -->
<a id="schemaportnumber"></a>
<a id="schema_PortNumber"></a>
<a id="tocSportnumber"></a>
<a id="tocsportnumber"></a>

```json
1
```

<h2 id="tocS_CustomRoutingProtocols">CustomRoutingProtocols</h2>
<!-- backwards compatibility -->
<a id="schemacustomroutingprotocols"></a>
<a id="schema_CustomRoutingProtocols"></a>
<a id="tocScustomroutingprotocols"></a>
<a id="tocscustomroutingprotocols"></a>

```json
[
  "TCP"
]
```

<h2 id="tocS_CustomRoutingDestinationConfiguration">CustomRoutingDestinationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacustomroutingdestinationconfiguration"></a>
<a id="schema_CustomRoutingDestinationConfiguration"></a>
<a id="tocScustomroutingdestinationconfiguration"></a>
<a id="tocscustomroutingdestinationconfiguration"></a>

```json
{
  "FromPort": {},
  "ToPort": {},
  "Protocols": {}
}
```

For a custom routing accelerator, sets the port range and protocol for all endpoints (virtual private cloud subnets) in an endpoint group to accept client traffic on.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FromPort|object|true|none|none|
|ToPort|object|true|none|none|
|Protocols|object|true|none|none|

<h2 id="tocS_Protocols">Protocols</h2>
<!-- backwards compatibility -->
<a id="schemaprotocols"></a>
<a id="schema_Protocols"></a>
<a id="tocSprotocols"></a>
<a id="tocsprotocols"></a>

```json
[
  "TCP"
]
```

<h2 id="tocS_CustomRoutingDestinationDescription">CustomRoutingDestinationDescription</h2>
<!-- backwards compatibility -->
<a id="schemacustomroutingdestinationdescription"></a>
<a id="schema_CustomRoutingDestinationDescription"></a>
<a id="tocScustomroutingdestinationdescription"></a>
<a id="tocscustomroutingdestinationdescription"></a>

```json
{
  "FromPort": {},
  "ToPort": {},
  "Protocols": {}
}
```

For a custom routing accelerator, describes the port range and protocol for all endpoints (virtual private cloud subnets) in an endpoint group to accept client traffic on.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FromPort|object|false|none|none|
|ToPort|object|false|none|none|
|Protocols|object|false|none|none|

<h2 id="tocS_CustomRoutingDestinationDescriptions">CustomRoutingDestinationDescriptions</h2>
<!-- backwards compatibility -->
<a id="schemacustomroutingdestinationdescriptions"></a>
<a id="schema_CustomRoutingDestinationDescriptions"></a>
<a id="tocScustomroutingdestinationdescriptions"></a>
<a id="tocscustomroutingdestinationdescriptions"></a>

```json
[
  {
    "FromPort": {},
    "ToPort": {},
    "Protocols": {}
  }
]
```

<h2 id="tocS_CustomRoutingDestinationTrafficState">CustomRoutingDestinationTrafficState</h2>
<!-- backwards compatibility -->
<a id="schemacustomroutingdestinationtrafficstate"></a>
<a id="schema_CustomRoutingDestinationTrafficState"></a>
<a id="tocScustomroutingdestinationtrafficstate"></a>
<a id="tocscustomroutingdestinationtrafficstate"></a>

```json
"ALLOW"
```

<h2 id="tocS_CustomRoutingEndpointConfiguration">CustomRoutingEndpointConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacustomroutingendpointconfiguration"></a>
<a id="schema_CustomRoutingEndpointConfiguration"></a>
<a id="tocScustomroutingendpointconfiguration"></a>
<a id="tocscustomroutingendpointconfiguration"></a>

```json
{
  "EndpointId": {}
}
```

The list of endpoint objects. For custom routing, this is a list of virtual private cloud (VPC) subnet IDs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointId|object|false|none|none|

<h2 id="tocS_CustomRoutingEndpointDescription">CustomRoutingEndpointDescription</h2>
<!-- backwards compatibility -->
<a id="schemacustomroutingendpointdescription"></a>
<a id="schema_CustomRoutingEndpointDescription"></a>
<a id="tocScustomroutingendpointdescription"></a>
<a id="tocscustomroutingendpointdescription"></a>

```json
{
  "EndpointId": {}
}
```

A complex type for an endpoint for a custom routing accelerator. Each endpoint group can include one or more endpoints, which are virtual private cloud (VPC) subnets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointId|object|false|none|none|

<h2 id="tocS_CustomRoutingEndpointGroups">CustomRoutingEndpointGroups</h2>
<!-- backwards compatibility -->
<a id="schemacustomroutingendpointgroups"></a>
<a id="schema_CustomRoutingEndpointGroups"></a>
<a id="tocScustomroutingendpointgroups"></a>
<a id="tocscustomroutingendpointgroups"></a>

```json
[
  {
    "EndpointGroupArn": {},
    "EndpointGroupRegion": {},
    "DestinationDescriptions": {},
    "EndpointDescriptions": {}
  }
]
```

<h2 id="tocS_CustomRoutingListeners">CustomRoutingListeners</h2>
<!-- backwards compatibility -->
<a id="schemacustomroutinglisteners"></a>
<a id="schema_CustomRoutingListeners"></a>
<a id="tocScustomroutinglisteners"></a>
<a id="tocscustomroutinglisteners"></a>

```json
[
  {
    "ListenerArn": {},
    "PortRanges": {}
  }
]
```

<h2 id="tocS_CustomRoutingProtocol">CustomRoutingProtocol</h2>
<!-- backwards compatibility -->
<a id="schemacustomroutingprotocol"></a>
<a id="schema_CustomRoutingProtocol"></a>
<a id="tocScustomroutingprotocol"></a>
<a id="tocscustomroutingprotocol"></a>

```json
"TCP"
```

<h2 id="tocS_IpAddress">IpAddress</h2>
<!-- backwards compatibility -->
<a id="schemaipaddress"></a>
<a id="schema_IpAddress"></a>
<a id="tocSipaddress"></a>
<a id="tocsipaddress"></a>

```json
"string"
```

<h2 id="tocS_SocketAddresses">SocketAddresses</h2>
<!-- backwards compatibility -->
<a id="schemasocketaddresses"></a>
<a id="schema_SocketAddresses"></a>
<a id="tocSsocketaddresses"></a>
<a id="tocssocketaddresses"></a>

```json
[
  {
    "IpAddress": {},
    "Port": {}
  }
]
```

<h2 id="tocS_SocketAddress">SocketAddress</h2>
<!-- backwards compatibility -->
<a id="schemasocketaddress"></a>
<a id="schema_SocketAddress"></a>
<a id="tocSsocketaddress"></a>
<a id="tocssocketaddress"></a>

```json
{
  "IpAddress": {},
  "Port": {}
}
```

An IP address/port combination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IpAddress|object|false|none|none|
|Port|object|false|none|none|

<h2 id="tocS_DestinationPortMapping">DestinationPortMapping</h2>
<!-- backwards compatibility -->
<a id="schemadestinationportmapping"></a>
<a id="schema_DestinationPortMapping"></a>
<a id="tocSdestinationportmapping"></a>
<a id="tocsdestinationportmapping"></a>

```json
{
  "AcceleratorArn": {},
  "AcceleratorSocketAddresses": {},
  "EndpointGroupArn": {},
  "EndpointId": {},
  "EndpointGroupRegion": {},
  "DestinationSocketAddress": {
    "IpAddress": {},
    "Port": {}
  },
  "IpAddressType": {},
  "DestinationTrafficState": {}
}
```

The port mappings for a specified endpoint IP address (destination).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceleratorArn|object|false|none|none|
|AcceleratorSocketAddresses|object|false|none|none|
|EndpointGroupArn|object|false|none|none|
|EndpointId|object|false|none|none|
|EndpointGroupRegion|object|false|none|none|
|DestinationSocketAddress|object|false|none|none|
|IpAddressType|object|false|none|none|
|DestinationTrafficState|object|false|none|none|

<h2 id="tocS_DestinationPortMappings">DestinationPortMappings</h2>
<!-- backwards compatibility -->
<a id="schemadestinationportmappings"></a>
<a id="schema_DestinationPortMappings"></a>
<a id="tocSdestinationportmappings"></a>
<a id="tocsdestinationportmappings"></a>

```json
[
  {
    "AcceleratorArn": {},
    "AcceleratorSocketAddresses": {},
    "EndpointGroupArn": {},
    "EndpointId": {},
    "EndpointGroupRegion": {},
    "DestinationSocketAddress": {
      "IpAddress": {},
      "Port": {}
    },
    "IpAddressType": {},
    "DestinationTrafficState": {}
  }
]
```

<h2 id="tocS_EndpointWeight">EndpointWeight</h2>
<!-- backwards compatibility -->
<a id="schemaendpointweight"></a>
<a id="schema_EndpointWeight"></a>
<a id="tocSendpointweight"></a>
<a id="tocsendpointweight"></a>

```json
0
```

<h2 id="tocS_EndpointConfiguration">EndpointConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaendpointconfiguration"></a>
<a id="schema_EndpointConfiguration"></a>
<a id="tocSendpointconfiguration"></a>
<a id="tocsendpointconfiguration"></a>

```json
{
  "EndpointId": {},
  "Weight": {},
  "ClientIPPreservationEnabled": {}
}
```

A complex type for endpoints. A resource must be valid and active when you add it as an endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointId|object|false|none|none|
|Weight|object|false|none|none|
|ClientIPPreservationEnabled|object|false|none|none|

<h2 id="tocS_HealthState">HealthState</h2>
<!-- backwards compatibility -->
<a id="schemahealthstate"></a>
<a id="schema_HealthState"></a>
<a id="tocShealthstate"></a>
<a id="tocshealthstate"></a>

```json
"INITIAL"
```

<h2 id="tocS_EndpointDescription">EndpointDescription</h2>
<!-- backwards compatibility -->
<a id="schemaendpointdescription"></a>
<a id="schema_EndpointDescription"></a>
<a id="tocSendpointdescription"></a>
<a id="tocsendpointdescription"></a>

```json
{
  "EndpointId": {},
  "Weight": {},
  "HealthState": {},
  "HealthReason": {},
  "ClientIPPreservationEnabled": {}
}
```

A complex type for an endpoint. Each endpoint group can include one or more endpoints, such as load balancers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointId|object|false|none|none|
|Weight|object|false|none|none|
|HealthState|object|false|none|none|
|HealthReason|object|false|none|none|
|ClientIPPreservationEnabled|object|false|none|none|

<h2 id="tocS_EndpointGroups">EndpointGroups</h2>
<!-- backwards compatibility -->
<a id="schemaendpointgroups"></a>
<a id="schema_EndpointGroups"></a>
<a id="tocSendpointgroups"></a>
<a id="tocsendpointgroups"></a>

```json
[
  {
    "EndpointGroupArn": {},
    "EndpointGroupRegion": {},
    "EndpointDescriptions": {},
    "TrafficDialPercentage": {},
    "HealthCheckPort": {},
    "HealthCheckProtocol": {},
    "HealthCheckPath": {},
    "HealthCheckIntervalSeconds": {},
    "ThresholdCount": {},
    "PortOverrides": {}
  }
]
```

<h2 id="tocS_EndpointIdentifier">EndpointIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaendpointidentifier"></a>
<a id="schema_EndpointIdentifier"></a>
<a id="tocSendpointidentifier"></a>
<a id="tocsendpointidentifier"></a>

```json
{
  "EndpointId": {},
  "ClientIPPreservationEnabled": {}
}
```

A complex type for an endpoint. Specifies information about the endpoint to remove from the endpoint group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointId|object|true|none|none|
|ClientIPPreservationEnabled|object|false|none|none|

<h2 id="tocS_EndpointIdentifiers">EndpointIdentifiers</h2>
<!-- backwards compatibility -->
<a id="schemaendpointidentifiers"></a>
<a id="schema_EndpointIdentifiers"></a>
<a id="tocSendpointidentifiers"></a>
<a id="tocsendpointidentifiers"></a>

```json
[
  {
    "EndpointId": {},
    "ClientIPPreservationEnabled": {}
  }
]
```

<h2 id="tocS_EndpointIds">EndpointIds</h2>
<!-- backwards compatibility -->
<a id="schemaendpointids"></a>
<a id="schema_EndpointIds"></a>
<a id="tocSendpointids"></a>
<a id="tocsendpointids"></a>

```json
[
  "string"
]
```

<h2 id="tocS_IpAddressFamily">IpAddressFamily</h2>
<!-- backwards compatibility -->
<a id="schemaipaddressfamily"></a>
<a id="schema_IpAddressFamily"></a>
<a id="tocSipaddressfamily"></a>
<a id="tocsipaddressfamily"></a>

```json
"IPv4"
```

<h2 id="tocS_IpSet">IpSet</h2>
<!-- backwards compatibility -->
<a id="schemaipset"></a>
<a id="schema_IpSet"></a>
<a id="tocSipset"></a>
<a id="tocsipset"></a>

```json
{
  "IpFamily": {},
  "IpAddresses": {},
  "IpAddressFamily": {}
}
```

A complex type for the set of IP addresses for an accelerator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IpFamily|object|false|none|none|
|IpAddresses|object|false|none|none|
|IpAddressFamily|object|false|none|none|

<h2 id="tocS_MaxResults">MaxResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxresults"></a>
<a id="schema_MaxResults"></a>
<a id="tocSmaxresults"></a>
<a id="tocsmaxresults"></a>

```json
1
```

<h2 id="tocS_PortMappingsMaxResults">PortMappingsMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemaportmappingsmaxresults"></a>
<a id="schema_PortMappingsMaxResults"></a>
<a id="tocSportmappingsmaxresults"></a>
<a id="tocsportmappingsmaxresults"></a>

```json
1
```

<h2 id="tocS_PortMappings">PortMappings</h2>
<!-- backwards compatibility -->
<a id="schemaportmappings"></a>
<a id="schema_PortMappings"></a>
<a id="tocSportmappings"></a>
<a id="tocsportmappings"></a>

```json
[
  {
    "AcceleratorPort": {},
    "EndpointGroupArn": {},
    "EndpointId": {},
    "DestinationSocketAddress": {
      "IpAddress": {},
      "Port": {}
    },
    "Protocols": {},
    "DestinationTrafficState": {}
  }
]
```

<h2 id="tocS_Listeners">Listeners</h2>
<!-- backwards compatibility -->
<a id="schemalisteners"></a>
<a id="schema_Listeners"></a>
<a id="tocSlisteners"></a>
<a id="tocslisteners"></a>

```json
[
  {
    "ListenerArn": {},
    "PortRanges": {},
    "Protocol": {},
    "ClientAffinity": {}
  }
]
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

<h2 id="tocS_PortMapping">PortMapping</h2>
<!-- backwards compatibility -->
<a id="schemaportmapping"></a>
<a id="schema_PortMapping"></a>
<a id="tocSportmapping"></a>
<a id="tocsportmapping"></a>

```json
{
  "AcceleratorPort": {},
  "EndpointGroupArn": {},
  "EndpointId": {},
  "DestinationSocketAddress": {
    "IpAddress": {},
    "Port": {}
  },
  "Protocols": {},
  "DestinationTrafficState": {}
}
```

Returns the ports and associated IP addresses and ports of Amazon EC2 instances in your virtual private cloud (VPC) subnets. Custom routing is a port mapping protocol in Global Accelerator that statically associates port ranges with VPC subnets, which allows Global Accelerator to route to specific instances and ports within one or more subnets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceleratorPort|object|false|none|none|
|EndpointGroupArn|object|false|none|none|
|EndpointId|object|false|none|none|
|DestinationSocketAddress|object|false|none|none|
|Protocols|object|false|none|none|
|DestinationTrafficState|object|false|none|none|

<h2 id="tocS_PortOverride">PortOverride</h2>
<!-- backwards compatibility -->
<a id="schemaportoverride"></a>
<a id="schema_PortOverride"></a>
<a id="tocSportoverride"></a>
<a id="tocsportoverride"></a>

```json
{
  "ListenerPort": {},
  "EndpointPort": {}
}
```

<p>Override specific listener ports used to route traffic to endpoints that are part of an endpoint group. For example, you can create a port override in which the listener receives user traffic on ports 80 and 443, but your accelerator routes that traffic to ports 1080 and 1443, respectively, on the endpoints.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoint-groups-port-override.html"> Overriding listener ports</a> in the <i>Global Accelerator Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ListenerPort|object|false|none|none|
|EndpointPort|object|false|none|none|

<h2 id="tocS_PortRange">PortRange</h2>
<!-- backwards compatibility -->
<a id="schemaportrange"></a>
<a id="schema_PortRange"></a>
<a id="tocSportrange"></a>
<a id="tocsportrange"></a>

```json
{
  "FromPort": {},
  "ToPort": {}
}
```

A complex type for a range of ports for a listener.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FromPort|object|false|none|none|
|ToPort|object|false|none|none|

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
  "Key": {},
  "Value": {}
}
```

A complex type that contains a <code>Tag</code> key and <code>Tag</code> value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

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
