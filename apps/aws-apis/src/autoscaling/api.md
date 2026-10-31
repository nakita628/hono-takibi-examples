<h1 id="auto-scaling">Auto Scaling v2011-01-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Amazon EC2 Auto Scaling</fullname> <p>Amazon EC2 Auto Scaling is designed to automatically launch and terminate EC2 instances based on user-defined scaling policies, scheduled actions, and health checks.</p> <p>For more information, see the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/">Amazon EC2 Auto Scaling User Guide</a> and the <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/Welcome.html">Amazon EC2 Auto Scaling API Reference</a>.</p>

Base URLs:

* <a href="http://autoscaling.us-east-1.amazonaws.com">http://autoscaling.us-east-1.amazonaws.com</a> - The Auto Scaling multi-region endpoint

* <a href="https://autoscaling.us-east-1.amazonaws.com">https://autoscaling.us-east-1.amazonaws.com</a> - The Auto Scaling multi-region endpoint

* <a href="http://autoscaling.amazonaws.com">http://autoscaling.amazonaws.com</a> - The general Auto Scaling endpoint for US East (N. Virginia)

* <a href="https://autoscaling.amazonaws.com">https://autoscaling.amazonaws.com</a> - The general Auto Scaling endpoint for US East (N. Virginia)

* <a href="http://autoscaling.cn-north-1.amazonaws.com.cn">http://autoscaling.cn-north-1.amazonaws.com.cn</a> - The Auto Scaling endpoint for China (Beijing) and China (Ningxia)

* <a href="https://autoscaling.cn-north-1.amazonaws.com.cn">https://autoscaling.cn-north-1.amazonaws.com.cn</a> - The Auto Scaling endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/autoscaling/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="auto-scaling-default">Default</h1>

## GET_AttachInstances

<a id="opIdGET_AttachInstances"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=AttachInstances?AutoScalingGroupName=string&Action=AttachInstances&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=AttachInstances`

<p>Attaches one or more EC2 instances to the specified Auto Scaling group.</p> <p>When you attach instances, Amazon EC2 Auto Scaling increases the desired capacity of the group by the number of instances being attached. If the number of instances being attached plus the desired capacity of the group exceeds the maximum size of the group, the operation fails.</p> <p>If there is a Classic Load Balancer attached to your Auto Scaling group, the instances are also registered with the load balancer. If there are target groups attached to your Auto Scaling group, the instances are also registered with the target groups.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/attach-instance-asg.html">Attach EC2 instances to your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

<h3 id="getattachinstances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceIds|query|[[XmlStringMaxLen19](#schemaxmlstringmaxlen19)]|false|The IDs of the instances. You can specify up to 20 instances.|
|AutoScalingGroupName|query|string|true|The name of the Auto Scaling group.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|AttachInstances|
|Version|2011-01-01|

<h3 id="getattachinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|
|481|481|ServiceLinkedRoleFailure|[ServiceLinkedRoleFailure](#schemaservicelinkedrolefailure)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_AttachInstances

<a id="opIdPOST_AttachInstances"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=AttachInstances?Action=AttachInstances&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"InstanceIds":{},"AutoScalingGroupName":{}}'
```

`POST /#Action=AttachInstances`

<p>Attaches one or more EC2 instances to the specified Auto Scaling group.</p> <p>When you attach instances, Amazon EC2 Auto Scaling increases the desired capacity of the group by the number of instances being attached. If the number of instances being attached plus the desired capacity of the group exceeds the maximum size of the group, the operation fails.</p> <p>If there is a Classic Load Balancer attached to your Auto Scaling group, the instances are also registered with the load balancer. If there are target groups attached to your Auto Scaling group, the instances are also registered with the target groups.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/attach-instance-asg.html">Attach EC2 instances to your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

> Body parameter

```json
{
  "InstanceIds": {},
  "AutoScalingGroupName": {}
}
```

<h3 id="postattachinstances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[AttachInstancesQuery](#schemaattachinstancesquery)|false|none|
|» InstanceIds|body|object|false|none|
|» AutoScalingGroupName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|AttachInstances|
|Version|2011-01-01|

<h3 id="postattachinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|
|481|481|ServiceLinkedRoleFailure|[ServiceLinkedRoleFailure](#schemaservicelinkedrolefailure)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_AttachLoadBalancerTargetGroups

<a id="opIdGET_AttachLoadBalancerTargetGroups"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=AttachLoadBalancerTargetGroups?AutoScalingGroupName=string&TargetGroupARNs=string&Action=AttachLoadBalancerTargetGroups&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=AttachLoadBalancerTargetGroups`

<note> <p>This API operation is superseded by <a>AttachTrafficSources</a>, which can attach multiple traffic sources types. We recommend using <code>AttachTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>AttachLoadBalancerTargetGroups</code>. You can use both the original <code>AttachLoadBalancerTargetGroups</code> API operation and <code>AttachTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Attaches one or more target groups to the specified Auto Scaling group.</p> <p>This operation is used with the following load balancer types: </p> <ul> <li> <p>Application Load Balancer - Operates at the application layer (layer 7) and supports HTTP and HTTPS. </p> </li> <li> <p>Network Load Balancer - Operates at the transport layer (layer 4) and supports TCP, TLS, and UDP. </p> </li> <li> <p>Gateway Load Balancer - Operates at the network layer (layer 3).</p> </li> </ul> <p>To describe the target groups for an Auto Scaling group, call the <a>DescribeLoadBalancerTargetGroups</a> API. To detach the target group from the Auto Scaling group, call the <a>DetachLoadBalancerTargetGroups</a> API.</p> <p>This operation is additive and does not detach existing target groups or Classic Load Balancers from the Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>

<h3 id="getattachloadbalancertargetgroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AutoScalingGroupName|query|string|true|The name of the Auto Scaling group.|
|TargetGroupARNs|query|[[XmlStringMaxLen511](#schemaxmlstringmaxlen511)]|true|The Amazon Resource Names (ARNs) of the target groups. You can specify up to 10 target groups. To get the ARN of a target group, use the Elastic Load Balancing <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTargetGroups.html">DescribeTargetGroups</a> API operation.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|AttachLoadBalancerTargetGroups|
|Version|2011-01-01|

<h3 id="getattachloadbalancertargetgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AttachLoadBalancerTargetGroupsResultType](#schemaattachloadbalancertargetgroupsresulttype)|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|
|481|481|ServiceLinkedRoleFailure|[ServiceLinkedRoleFailure](#schemaservicelinkedrolefailure)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_AttachLoadBalancerTargetGroups

<a id="opIdPOST_AttachLoadBalancerTargetGroups"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=AttachLoadBalancerTargetGroups?Action=AttachLoadBalancerTargetGroups&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AutoScalingGroupName":{},"TargetGroupARNs":{}}'
```

`POST /#Action=AttachLoadBalancerTargetGroups`

<note> <p>This API operation is superseded by <a>AttachTrafficSources</a>, which can attach multiple traffic sources types. We recommend using <code>AttachTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>AttachLoadBalancerTargetGroups</code>. You can use both the original <code>AttachLoadBalancerTargetGroups</code> API operation and <code>AttachTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Attaches one or more target groups to the specified Auto Scaling group.</p> <p>This operation is used with the following load balancer types: </p> <ul> <li> <p>Application Load Balancer - Operates at the application layer (layer 7) and supports HTTP and HTTPS. </p> </li> <li> <p>Network Load Balancer - Operates at the transport layer (layer 4) and supports TCP, TLS, and UDP. </p> </li> <li> <p>Gateway Load Balancer - Operates at the network layer (layer 3).</p> </li> </ul> <p>To describe the target groups for an Auto Scaling group, call the <a>DescribeLoadBalancerTargetGroups</a> API. To detach the target group from the Auto Scaling group, call the <a>DetachLoadBalancerTargetGroups</a> API.</p> <p>This operation is additive and does not detach existing target groups or Classic Load Balancers from the Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>

> Body parameter

```json
{
  "AutoScalingGroupName": {},
  "TargetGroupARNs": {}
}
```

<h3 id="postattachloadbalancertargetgroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[AttachLoadBalancerTargetGroupsType](#schemaattachloadbalancertargetgroupstype)|false|none|
|» AutoScalingGroupName|body|object|true|none|
|» TargetGroupARNs|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|AttachLoadBalancerTargetGroups|
|Version|2011-01-01|

<h3 id="postattachloadbalancertargetgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AttachLoadBalancerTargetGroupsResultType](#schemaattachloadbalancertargetgroupsresulttype)|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|
|481|481|ServiceLinkedRoleFailure|[ServiceLinkedRoleFailure](#schemaservicelinkedrolefailure)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_AttachLoadBalancers

<a id="opIdGET_AttachLoadBalancers"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=AttachLoadBalancers?AutoScalingGroupName=string&LoadBalancerNames=string&Action=AttachLoadBalancers&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=AttachLoadBalancers`

<note> <p>This API operation is superseded by <a>AttachTrafficSources</a>, which can attach multiple traffic sources types. We recommend using <code>AttachTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>AttachLoadBalancers</code>. You can use both the original <code>AttachLoadBalancers</code> API operation and <code>AttachTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Attaches one or more Classic Load Balancers to the specified Auto Scaling group. Amazon EC2 Auto Scaling registers the running instances with these Classic Load Balancers.</p> <p>To describe the load balancers for an Auto Scaling group, call the <a>DescribeLoadBalancers</a> API. To detach a load balancer from the Auto Scaling group, call the <a>DetachLoadBalancers</a> API.</p> <p>This operation is additive and does not detach existing Classic Load Balancers or target groups from the Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

<h3 id="getattachloadbalancers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AutoScalingGroupName|query|string|true|The name of the Auto Scaling group.|
|LoadBalancerNames|query|[[XmlStringMaxLen255](#schemaxmlstringmaxlen255)]|true|The names of the load balancers. You can specify up to 10 load balancers.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|AttachLoadBalancers|
|Version|2011-01-01|

<h3 id="getattachloadbalancers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AttachLoadBalancersResultType](#schemaattachloadbalancersresulttype)|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|
|481|481|ServiceLinkedRoleFailure|[ServiceLinkedRoleFailure](#schemaservicelinkedrolefailure)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_AttachLoadBalancers

<a id="opIdPOST_AttachLoadBalancers"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=AttachLoadBalancers?Action=AttachLoadBalancers&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AutoScalingGroupName":{},"LoadBalancerNames":{}}'
```

`POST /#Action=AttachLoadBalancers`

<note> <p>This API operation is superseded by <a>AttachTrafficSources</a>, which can attach multiple traffic sources types. We recommend using <code>AttachTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>AttachLoadBalancers</code>. You can use both the original <code>AttachLoadBalancers</code> API operation and <code>AttachTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Attaches one or more Classic Load Balancers to the specified Auto Scaling group. Amazon EC2 Auto Scaling registers the running instances with these Classic Load Balancers.</p> <p>To describe the load balancers for an Auto Scaling group, call the <a>DescribeLoadBalancers</a> API. To detach a load balancer from the Auto Scaling group, call the <a>DetachLoadBalancers</a> API.</p> <p>This operation is additive and does not detach existing Classic Load Balancers or target groups from the Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

> Body parameter

```json
{
  "AutoScalingGroupName": {},
  "LoadBalancerNames": {}
}
```

<h3 id="postattachloadbalancers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[AttachLoadBalancersType](#schemaattachloadbalancerstype)|false|none|
|» AutoScalingGroupName|body|object|true|none|
|» LoadBalancerNames|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|AttachLoadBalancers|
|Version|2011-01-01|

<h3 id="postattachloadbalancers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AttachLoadBalancersResultType](#schemaattachloadbalancersresulttype)|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|
|481|481|ServiceLinkedRoleFailure|[ServiceLinkedRoleFailure](#schemaservicelinkedrolefailure)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_AttachTrafficSources

<a id="opIdGET_AttachTrafficSources"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=AttachTrafficSources?AutoScalingGroupName=string&TrafficSources=%7B%22Identifier%22%3A%7B%7D%2C%22Type%22%3A%7B%7D%7D&Action=AttachTrafficSources&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=AttachTrafficSources`

<p>Attaches one or more traffic sources to the specified Auto Scaling group.</p> <p>You can use any of the following as traffic sources for an Auto Scaling group:</p> <ul> <li> <p>Application Load Balancer</p> </li> <li> <p>Classic Load Balancer</p> </li> <li> <p>Gateway Load Balancer</p> </li> <li> <p>Network Load Balancer</p> </li> <li> <p>VPC Lattice</p> </li> </ul> <p>This operation is additive and does not detach existing traffic sources from the Auto Scaling group. </p> <p>After the operation completes, use the <a>DescribeTrafficSources</a> API to return details about the state of the attachments between traffic sources and your Auto Scaling group. To detach a traffic source from the Auto Scaling group, call the <a>DetachTrafficSources</a> API.</p>

<h3 id="getattachtrafficsources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AutoScalingGroupName|query|string|true|The name of the Auto Scaling group.|
|TrafficSources|query|[[TrafficSourceIdentifier](#schematrafficsourceidentifier)]|true|The unique identifiers of one or more traffic sources. You can specify up to 10 traffic sources.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|AttachTrafficSources|
|Version|2011-01-01|

<h3 id="getattachtrafficsources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AttachTrafficSourcesResultType](#schemaattachtrafficsourcesresulttype)|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|
|481|481|ServiceLinkedRoleFailure|[ServiceLinkedRoleFailure](#schemaservicelinkedrolefailure)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_AttachTrafficSources

<a id="opIdPOST_AttachTrafficSources"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=AttachTrafficSources?Action=AttachTrafficSources&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AutoScalingGroupName":{},"TrafficSources":{}}'
```

`POST /#Action=AttachTrafficSources`

<p>Attaches one or more traffic sources to the specified Auto Scaling group.</p> <p>You can use any of the following as traffic sources for an Auto Scaling group:</p> <ul> <li> <p>Application Load Balancer</p> </li> <li> <p>Classic Load Balancer</p> </li> <li> <p>Gateway Load Balancer</p> </li> <li> <p>Network Load Balancer</p> </li> <li> <p>VPC Lattice</p> </li> </ul> <p>This operation is additive and does not detach existing traffic sources from the Auto Scaling group. </p> <p>After the operation completes, use the <a>DescribeTrafficSources</a> API to return details about the state of the attachments between traffic sources and your Auto Scaling group. To detach a traffic source from the Auto Scaling group, call the <a>DetachTrafficSources</a> API.</p>

> Body parameter

```json
{
  "AutoScalingGroupName": {},
  "TrafficSources": {}
}
```

<h3 id="postattachtrafficsources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[AttachTrafficSourcesType](#schemaattachtrafficsourcestype)|false|none|
|» AutoScalingGroupName|body|object|true|none|
|» TrafficSources|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|AttachTrafficSources|
|Version|2011-01-01|

<h3 id="postattachtrafficsources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AttachTrafficSourcesResultType](#schemaattachtrafficsourcesresulttype)|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|
|481|481|ServiceLinkedRoleFailure|[ServiceLinkedRoleFailure](#schemaservicelinkedrolefailure)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_BatchDeleteScheduledAction

<a id="opIdGET_BatchDeleteScheduledAction"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=BatchDeleteScheduledAction?AutoScalingGroupName=string&ScheduledActionNames=string&Action=BatchDeleteScheduledAction&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=BatchDeleteScheduledAction`

Deletes one or more scheduled actions for the specified Auto Scaling group.

<h3 id="getbatchdeletescheduledaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AutoScalingGroupName|query|string|true|The name of the Auto Scaling group.|
|ScheduledActionNames|query|[[XmlStringMaxLen255](#schemaxmlstringmaxlen255)]|true|The names of the scheduled actions to delete. The maximum number allowed is 50. |
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|BatchDeleteScheduledAction|
|Version|2011-01-01|

<h3 id="getbatchdeletescheduledaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchDeleteScheduledActionAnswer](#schemabatchdeletescheduledactionanswer)|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_BatchDeleteScheduledAction

<a id="opIdPOST_BatchDeleteScheduledAction"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=BatchDeleteScheduledAction?Action=BatchDeleteScheduledAction&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AutoScalingGroupName":{},"ScheduledActionNames":{}}'
```

`POST /#Action=BatchDeleteScheduledAction`

Deletes one or more scheduled actions for the specified Auto Scaling group.

> Body parameter

```json
{
  "AutoScalingGroupName": {},
  "ScheduledActionNames": {}
}
```

<h3 id="postbatchdeletescheduledaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[BatchDeleteScheduledActionType](#schemabatchdeletescheduledactiontype)|false|none|
|» AutoScalingGroupName|body|object|true|none|
|» ScheduledActionNames|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|BatchDeleteScheduledAction|
|Version|2011-01-01|

<h3 id="postbatchdeletescheduledaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchDeleteScheduledActionAnswer](#schemabatchdeletescheduledactionanswer)|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_BatchPutScheduledUpdateGroupAction

<a id="opIdGET_BatchPutScheduledUpdateGroupAction"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=BatchPutScheduledUpdateGroupAction?AutoScalingGroupName=string&ScheduledUpdateGroupActions=%7B%22ScheduledActionName%22%3A%7B%7D%2C%22StartTime%22%3A%7B%7D%2C%22EndTime%22%3A%7B%7D%2C%22Recurrence%22%3A%7B%7D%2C%22MinSize%22%3A%7B%7D%2C%22MaxSize%22%3A%7B%7D%2C%22DesiredCapacity%22%3A%7B%7D%2C%22TimeZone%22%3A%7B%7D%7D&Action=BatchPutScheduledUpdateGroupAction&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=BatchPutScheduledUpdateGroupAction`

Creates or updates one or more scheduled scaling actions for an Auto Scaling group.

<h3 id="getbatchputscheduledupdategroupaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AutoScalingGroupName|query|string|true|The name of the Auto Scaling group.|
|ScheduledUpdateGroupActions|query|[[ScheduledUpdateGroupActionRequest](#schemascheduledupdategroupactionrequest)]|true|One or more scheduled actions. The maximum number allowed is 50.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|BatchPutScheduledUpdateGroupAction|
|Version|2011-01-01|

<h3 id="getbatchputscheduledupdategroupaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchPutScheduledUpdateGroupActionAnswer](#schemabatchputscheduledupdategroupactionanswer)|
|480|480|AlreadyExistsFault|[AlreadyExistsFault](#schemaalreadyexistsfault)|
|481|481|LimitExceededFault|[LimitExceededFault](#schemalimitexceededfault)|
|482|482|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_BatchPutScheduledUpdateGroupAction

<a id="opIdPOST_BatchPutScheduledUpdateGroupAction"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=BatchPutScheduledUpdateGroupAction?Action=BatchPutScheduledUpdateGroupAction&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AutoScalingGroupName":{},"ScheduledUpdateGroupActions":{}}'
```

`POST /#Action=BatchPutScheduledUpdateGroupAction`

Creates or updates one or more scheduled scaling actions for an Auto Scaling group.

> Body parameter

```json
{
  "AutoScalingGroupName": {},
  "ScheduledUpdateGroupActions": {}
}
```

<h3 id="postbatchputscheduledupdategroupaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[BatchPutScheduledUpdateGroupActionType](#schemabatchputscheduledupdategroupactiontype)|false|none|
|» AutoScalingGroupName|body|object|true|none|
|» ScheduledUpdateGroupActions|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|BatchPutScheduledUpdateGroupAction|
|Version|2011-01-01|

<h3 id="postbatchputscheduledupdategroupaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchPutScheduledUpdateGroupActionAnswer](#schemabatchputscheduledupdategroupactionanswer)|
|480|480|AlreadyExistsFault|[AlreadyExistsFault](#schemaalreadyexistsfault)|
|481|481|LimitExceededFault|[LimitExceededFault](#schemalimitexceededfault)|
|482|482|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CancelInstanceRefresh

<a id="opIdGET_CancelInstanceRefresh"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=CancelInstanceRefresh?AutoScalingGroupName=string&Action=CancelInstanceRefresh&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CancelInstanceRefresh`

<p>Cancels an instance refresh or rollback that is in progress. If an instance refresh or rollback is not in progress, an <code>ActiveInstanceRefreshNotFound</code> error occurs.</p> <p>This operation is part of the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html">instance refresh feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group after you make configuration changes.</p> <p>When you cancel an instance refresh, this does not roll back any changes that it made. Use the <a>RollbackInstanceRefresh</a> API to roll back instead.</p>

<h3 id="getcancelinstancerefresh-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AutoScalingGroupName|query|string|true|The name of the Auto Scaling group.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|CancelInstanceRefresh|
|Version|2011-01-01|

<h3 id="getcancelinstancerefresh-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelInstanceRefreshAnswer](#schemacancelinstancerefreshanswer)|
|480|480|LimitExceededFault|[LimitExceededFault](#schemalimitexceededfault)|
|481|481|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|
|482|482|ActiveInstanceRefreshNotFoundFault|[ActiveInstanceRefreshNotFoundFault](#schemaactiveinstancerefreshnotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CancelInstanceRefresh

<a id="opIdPOST_CancelInstanceRefresh"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=CancelInstanceRefresh?Action=CancelInstanceRefresh&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AutoScalingGroupName":{}}'
```

`POST /#Action=CancelInstanceRefresh`

<p>Cancels an instance refresh or rollback that is in progress. If an instance refresh or rollback is not in progress, an <code>ActiveInstanceRefreshNotFound</code> error occurs.</p> <p>This operation is part of the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html">instance refresh feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group after you make configuration changes.</p> <p>When you cancel an instance refresh, this does not roll back any changes that it made. Use the <a>RollbackInstanceRefresh</a> API to roll back instead.</p>

> Body parameter

```json
{
  "AutoScalingGroupName": {}
}
```

<h3 id="postcancelinstancerefresh-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CancelInstanceRefreshType](#schemacancelinstancerefreshtype)|false|none|
|» AutoScalingGroupName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CancelInstanceRefresh|
|Version|2011-01-01|

<h3 id="postcancelinstancerefresh-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelInstanceRefreshAnswer](#schemacancelinstancerefreshanswer)|
|480|480|LimitExceededFault|[LimitExceededFault](#schemalimitexceededfault)|
|481|481|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|
|482|482|ActiveInstanceRefreshNotFoundFault|[ActiveInstanceRefreshNotFoundFault](#schemaactiveinstancerefreshnotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CompleteLifecycleAction

<a id="opIdGET_CompleteLifecycleAction"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=CompleteLifecycleAction?LifecycleHookName=string&AutoScalingGroupName=string&LifecycleActionResult=string&Action=CompleteLifecycleAction&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CompleteLifecycleAction`

<p>Completes the lifecycle action for the specified token or instance with the specified result.</p> <p>This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:</p> <ol> <li> <p>(Optional) Create a launch template or launch configuration with a user data script that runs while an instance is in a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a Lambda function and a rule that allows Amazon EventBridge to invoke your Lambda function when an instance is put into a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.</p> </li> <li> <p>Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.</p> </li> <li> <p>If you need more time, record the lifecycle action heartbeat to keep the instance in a wait state.</p> </li> <li> <p> <b>If you finish before the timeout period ends, send a callback by using the <a>CompleteLifecycleAction</a> API call.</b> </p> </li> </ol> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/completing-lifecycle-hooks.html">Complete a lifecycle action</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

<h3 id="getcompletelifecycleaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LifecycleHookName|query|string|true|The name of the lifecycle hook.|
|AutoScalingGroupName|query|string|true|The name of the Auto Scaling group.|
|LifecycleActionToken|query|string|false|A universally unique identifier (UUID) that identifies a specific lifecycle action associated with an instance. Amazon EC2 Auto Scaling sends this token to the notification target you specified when you created the lifecycle hook.|
|LifecycleActionResult|query|string|true|The action for the group to take. You can specify either <code>CONTINUE</code> or <code>ABANDON</code>.|
|InstanceId|query|string|false|The ID of the instance.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|CompleteLifecycleAction|
|Version|2011-01-01|

<h3 id="getcompletelifecycleaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CompleteLifecycleActionAnswer](#schemacompletelifecycleactionanswer)|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CompleteLifecycleAction

<a id="opIdPOST_CompleteLifecycleAction"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=CompleteLifecycleAction?Action=CompleteLifecycleAction&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"LifecycleHookName":{},"AutoScalingGroupName":{},"LifecycleActionToken":{},"LifecycleActionResult":{},"InstanceId":{}}'
```

`POST /#Action=CompleteLifecycleAction`

<p>Completes the lifecycle action for the specified token or instance with the specified result.</p> <p>This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:</p> <ol> <li> <p>(Optional) Create a launch template or launch configuration with a user data script that runs while an instance is in a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a Lambda function and a rule that allows Amazon EventBridge to invoke your Lambda function when an instance is put into a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.</p> </li> <li> <p>Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.</p> </li> <li> <p>If you need more time, record the lifecycle action heartbeat to keep the instance in a wait state.</p> </li> <li> <p> <b>If you finish before the timeout period ends, send a callback by using the <a>CompleteLifecycleAction</a> API call.</b> </p> </li> </ol> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/completing-lifecycle-hooks.html">Complete a lifecycle action</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

> Body parameter

```json
{
  "LifecycleHookName": {},
  "AutoScalingGroupName": {},
  "LifecycleActionToken": {},
  "LifecycleActionResult": {},
  "InstanceId": {}
}
```

<h3 id="postcompletelifecycleaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CompleteLifecycleActionType](#schemacompletelifecycleactiontype)|false|none|
|» LifecycleHookName|body|object|true|none|
|» AutoScalingGroupName|body|object|true|none|
|» LifecycleActionToken|body|object|false|none|
|» LifecycleActionResult|body|object|true|none|
|» InstanceId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CompleteLifecycleAction|
|Version|2011-01-01|

<h3 id="postcompletelifecycleaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CompleteLifecycleActionAnswer](#schemacompletelifecycleactionanswer)|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateAutoScalingGroup

<a id="opIdGET_CreateAutoScalingGroup"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=CreateAutoScalingGroup?AutoScalingGroupName=string&MinSize=0&MaxSize=0&Action=CreateAutoScalingGroup&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateAutoScalingGroup`

<p> <b>We strongly recommend using a launch template when calling this operation to ensure full functionality for Amazon EC2 Auto Scaling and Amazon EC2.</b> </p> <p>Creates an Auto Scaling group with the specified name and attributes. </p> <p>If you exceed your maximum limit of Auto Scaling groups, the call fails. To query this limit, call the <a>DescribeAccountLimits</a> API. For information about updating this limit, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-quotas.html">Quotas for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>For introductory exercises for creating an Auto Scaling group, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/GettingStartedTutorial.html">Getting started with Amazon EC2 Auto Scaling</a> and <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-register-lbs-with-asg.html">Tutorial: Set up a scaled and load-balanced application</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/AutoScalingGroup.html">Auto Scaling groups</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>Every Auto Scaling group has three size properties (<code>DesiredCapacity</code>, <code>MaxSize</code>, and <code>MinSize</code>). Usually, you set these sizes based on a specific number of instances. However, if you configure a mixed instances policy that defines weights for the instance types, you must specify these sizes with the same units that you use for weighting instances.</p>

<h3 id="getcreateautoscalinggroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AutoScalingGroupName|query|string|true|<p>The name of the Auto Scaling group. This name must be unique per Region per account.</p> <p>The name can contain any ASCII character 33 to 126 including most punctuation characters, digits, and upper and lowercased letters.</p> <note> <p>You cannot use a colon (:) in the name.</p> </note>|
|LaunchConfigurationName|query|string|false|<p>The name of the launch configuration to use to launch instances. </p> <p>Conditional: You must specify either a launch template (<code>LaunchTemplate</code> or <code>MixedInstancesPolicy</code>) or a launch configuration (<code>LaunchConfigurationName</code> or <code>InstanceId</code>).</p>|
|LaunchTemplate|query|object|false|<p>Information used to specify the launch template and version to use to launch instances. </p> <p>Conditional: You must specify either a launch template (<code>LaunchTemplate</code> or <code>MixedInstancesPolicy</code>) or a launch configuration (<code>LaunchConfigurationName</code> or <code>InstanceId</code>).</p> <note> <p>The launch template that is specified must be configured for use with an Auto Scaling group. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-launch-template.html">Creating a launch template for an Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> </note>|
|MixedInstancesPolicy|query|object|false|The mixed instances policy. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-mixed-instances-groups.html">Auto Scaling groups with multiple instance types and purchase options</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.|
|InstanceId|query|string|false|The ID of the instance used to base the launch configuration on. If specified, Amazon EC2 Auto Scaling uses the configuration values from the specified instance to create a new launch configuration. To get the instance ID, use the Amazon EC2 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstances.html">DescribeInstances</a> API operation. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-asg-from-instance.html">Creating an Auto Scaling group using an EC2 instance</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.|
|MinSize|query|integer|true|The minimum size of the group.|
|MaxSize|query|integer|true|<p>The maximum size of the group.</p> <note> <p>With a mixed instances policy that uses instance weighting, Amazon EC2 Auto Scaling may need to go above <code>MaxSize</code> to meet your capacity requirements. In this event, Amazon EC2 Auto Scaling will never go above <code>MaxSize</code> by more than your largest instance weight (weights that define how many units each instance contributes to the desired capacity of the group).</p> </note>|
|DesiredCapacity|query|integer|false|The desired capacity is the initial capacity of the Auto Scaling group at the time of its creation and the capacity it attempts to maintain. It can scale beyond this capacity if you configure auto scaling. This number must be greater than or equal to the minimum size of the group and less than or equal to the maximum size of the group. If you do not specify a desired capacity, the default is the minimum size of the group.|
|DefaultCooldown|query|integer|false|<p> <i>Only needed if you use simple scaling policies.</i> </p> <p>The amount of time, in seconds, between one scaling activity ending and another one starting due to simple scaling policies. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/Cooldown.html">Scaling cooldowns for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>Default: <code>300</code> seconds</p>|
|AvailabilityZones|query|[[XmlStringMaxLen255](#schemaxmlstringmaxlen255)]|false|A list of Availability Zones where instances in the Auto Scaling group can be created. Used for launching into the default VPC subnet in each Availability Zone when not using the <code>VPCZoneIdentifier</code> property, or for attaching a network interface when an existing network interface ID is specified in a launch template.|
|LoadBalancerNames|query|[[XmlStringMaxLen255](#schemaxmlstringmaxlen255)]|false|A list of Classic Load Balancers associated with this Auto Scaling group. For Application Load Balancers, Network Load Balancers, and Gateway Load Balancers, specify the <code>TargetGroupARNs</code> property instead.|
|TargetGroupARNs|query|[[XmlStringMaxLen511](#schemaxmlstringmaxlen511)]|false|The Amazon Resource Names (ARN) of the Elastic Load Balancing target groups to associate with the Auto Scaling group. Instances are registered as targets with the target groups. The target groups receive incoming traffic and route requests to one or more registered targets. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.|
|HealthCheckType|query|string|false|<p>A comma-separated value string of one or more health check types.</p> <p>The valid values are <code>EC2</code>, <code>ELB</code>, and <code>VPC_LATTICE</code>. <code>EC2</code> is the default health check and cannot be disabled. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/healthcheck.html">Health checks for Auto Scaling instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>Only specify <code>EC2</code> if you must clear a value that was previously set.</p>|
|HealthCheckGracePeriod|query|integer|false|<p>The amount of time, in seconds, that Amazon EC2 Auto Scaling waits before checking the health status of an EC2 instance that has come into service and marking it unhealthy due to a failed health check. This is useful if your instances do not immediately pass their health checks after they enter the <code>InService</code> state. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/health-check-grace-period.html">Set the health check grace period for an Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>Default: <code>0</code> seconds</p>|
|PlacementGroup|query|string|false|<p>The name of the placement group into which to launch your instances. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">Placement groups</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p> <note> <p>A <i>cluster</i> placement group is a logical grouping of instances within a single Availability Zone. You cannot specify multiple Availability Zones and a cluster placement group. </p> </note>|
|VPCZoneIdentifier|query|string|false|A comma-separated list of subnet IDs for a virtual private cloud (VPC) where instances in the Auto Scaling group can be created. If you specify <code>VPCZoneIdentifier</code> with <code>AvailabilityZones</code>, the subnets that you specify must reside in those Availability Zones.|
|TerminationPolicies|query|[[XmlStringMaxLen1600](#schemaxmlstringmaxlen1600)]|false|<p>A policy or a list of policies that are used to select the instance to terminate. These policies are executed in the order that you list them. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-termination-policies.html">Work with Amazon EC2 Auto Scaling termination policies</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>Valid values: <code>Default</code> \| <code>AllocationStrategy</code> \| <code>ClosestToNextInstanceHour</code> \| <code>NewestInstance</code> \| <code>OldestInstance</code> \| <code>OldestLaunchConfiguration</code> \| <code>OldestLaunchTemplate</code> \| <code>arn:aws:lambda:region:account-id:function:my-function:my-alias</code> </p>|
|NewInstancesProtectedFromScaleIn|query|boolean|false|Indicates whether newly launched instances are protected from termination by Amazon EC2 Auto Scaling when scaling in. For more information about preventing instances from terminating on scale in, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-instance-protection.html">Using instance scale-in protection</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.|
|CapacityRebalance|query|boolean|false|Indicates whether Capacity Rebalancing is enabled. Otherwise, Capacity Rebalancing is disabled. When you turn on Capacity Rebalancing, Amazon EC2 Auto Scaling attempts to launch a Spot Instance whenever Amazon EC2 notifies that a Spot Instance is at an elevated risk of interruption. After launching a new instance, it then terminates an old instance. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-capacity-rebalancing.html">Use Capacity Rebalancing to handle Amazon EC2 Spot Interruptions</a> in the in the <i>Amazon EC2 Auto Scaling User Guide</i>.|
|LifecycleHookSpecificationList|query|[[LifecycleHookSpecification](#schemalifecyclehookspecification)]|false|One or more lifecycle hooks to add to the Auto Scaling group before instances are launched.|
|Tags|query|[[Tag](#schematag)]|false|One or more tags. You can tag your Auto Scaling group and propagate the tags to the Amazon EC2 instances it launches. Tags are not propagated to Amazon EBS volumes. To add tags to Amazon EBS volumes, specify the tags in a launch template but use caution. If the launch template specifies an instance tag with a key that is also specified for the Auto Scaling group, Amazon EC2 Auto Scaling overrides the value of that instance tag with the value specified by the Auto Scaling group. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-tagging.html">Tag Auto Scaling groups and instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.|
|ServiceLinkedRoleARN|query|string|false|The Amazon Resource Name (ARN) of the service-linked role that the Auto Scaling group uses to call other Amazon Web Services service on your behalf. By default, Amazon EC2 Auto Scaling uses a service-linked role named <code>AWSServiceRoleForAutoScaling</code>, which it creates if it does not exist. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-service-linked-role.html">Service-linked roles</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.|
|MaxInstanceLifetime|query|integer|false|The maximum amount of time, in seconds, that an instance can be in service. The default is null. If specified, the value must be either 0 or a number equal to or greater than 86,400 seconds (1 day). For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-max-instance-lifetime.html">Replacing Auto Scaling instances based on maximum instance lifetime</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.|
|Context|query|string|false|Reserved.|
|DesiredCapacityType|query|string|false|<p>The unit of measurement for the value specified for desired capacity. Amazon EC2 Auto Scaling supports <code>DesiredCapacityType</code> for attribute-based instance type selection only. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-asg-instance-type-requirements.html">Creating an Auto Scaling group using attribute-based instance type selection</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>By default, Amazon EC2 Auto Scaling specifies <code>units</code>, which translates into number of instances.</p> <p>Valid values: <code>units</code> \| <code>vcpu</code> \| <code>memory-mib</code> </p>|
|DefaultInstanceWarmup|query|integer|false|<p>The amount of time, in seconds, until a new instance is considered to have finished initializing and resource consumption to become stable after it enters the <code>InService</code> state. </p> <p>During an instance refresh, Amazon EC2 Auto Scaling waits for the warm-up period after it replaces an instance before it moves on to replacing the next instance. Amazon EC2 Auto Scaling also waits for the warm-up period before aggregating the metrics for new instances with existing instances in the Amazon CloudWatch metrics that are used for scaling, resulting in more reliable usage data. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-default-instance-warmup.html">Set the default instance warmup for an Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <important> <p>To manage various warm-up settings at the group level, we recommend that you set the default instance warmup, <i>even if it is set to 0 seconds</i>. To remove a value that you previously set, include the property but specify <code>-1</code> for the value. However, we strongly recommend keeping the default instance warmup enabled by specifying a value of <code>0</code> or other nominal value.</p> </important> <p>Default: None </p>|
|TrafficSources|query|[[TrafficSourceIdentifier](#schematrafficsourceidentifier)]|false|The list of traffic sources to attach to this Auto Scaling group. You can use any of the following as traffic sources for an Auto Scaling group: Classic Load Balancer, Application Load Balancer, Gateway Load Balancer, Network Load Balancer, and VPC Lattice.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|CreateAutoScalingGroup|
|Version|2011-01-01|

<h3 id="getcreateautoscalinggroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|AlreadyExistsFault|[AlreadyExistsFault](#schemaalreadyexistsfault)|
|481|481|LimitExceededFault|[LimitExceededFault](#schemalimitexceededfault)|
|482|482|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|
|483|483|ServiceLinkedRoleFailure|[ServiceLinkedRoleFailure](#schemaservicelinkedrolefailure)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateAutoScalingGroup

<a id="opIdPOST_CreateAutoScalingGroup"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=CreateAutoScalingGroup?Action=CreateAutoScalingGroup&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AutoScalingGroupName":{},"LaunchConfigurationName":{},"LaunchTemplate":{"LaunchTemplateId":{},"LaunchTemplateName":{},"Version":{}},"MixedInstancesPolicy":{"LaunchTemplate":{"LaunchTemplateSpecification":{"LaunchTemplateId":{},"LaunchTemplateName":{},"Version":{}},"Overrides":{}},"InstancesDistribution":{"OnDemandAllocationStrategy":{},"OnDemandBaseCapacity":{},"OnDemandPercentageAboveBaseCapacity":{},"SpotAllocationStrategy":{},"SpotInstancePools":{},"SpotMaxPrice":{}}},"InstanceId":{},"MinSize":{},"MaxSize":{},"DesiredCapacity":{},"DefaultCooldown":{},"AvailabilityZones":{},"LoadBalancerNames":{},"TargetGroupARNs":{},"HealthCheckType":{},"HealthCheckGracePeriod":{},"PlacementGroup":{},"VPCZoneIdentifier":{},"TerminationPolicies":{},"NewInstancesProtectedFromScaleIn":{},"CapacityRebalance":{},"LifecycleHookSpecificationList":{},"Tags":{},"ServiceLinkedRoleARN":{},"MaxInstanceLifetime":{},"Context":{},"DesiredCapacityType":{},"DefaultInstanceWarmup":{},"TrafficSources":{}}'
```

`POST /#Action=CreateAutoScalingGroup`

<p> <b>We strongly recommend using a launch template when calling this operation to ensure full functionality for Amazon EC2 Auto Scaling and Amazon EC2.</b> </p> <p>Creates an Auto Scaling group with the specified name and attributes. </p> <p>If you exceed your maximum limit of Auto Scaling groups, the call fails. To query this limit, call the <a>DescribeAccountLimits</a> API. For information about updating this limit, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-quotas.html">Quotas for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>For introductory exercises for creating an Auto Scaling group, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/GettingStartedTutorial.html">Getting started with Amazon EC2 Auto Scaling</a> and <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-register-lbs-with-asg.html">Tutorial: Set up a scaled and load-balanced application</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/AutoScalingGroup.html">Auto Scaling groups</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>Every Auto Scaling group has three size properties (<code>DesiredCapacity</code>, <code>MaxSize</code>, and <code>MinSize</code>). Usually, you set these sizes based on a specific number of instances. However, if you configure a mixed instances policy that defines weights for the instance types, you must specify these sizes with the same units that you use for weighting instances.</p>

> Body parameter

```json
{
  "AutoScalingGroupName": {},
  "LaunchConfigurationName": {},
  "LaunchTemplate": {
    "LaunchTemplateId": {},
    "LaunchTemplateName": {},
    "Version": {}
  },
  "MixedInstancesPolicy": {
    "LaunchTemplate": {
      "LaunchTemplateSpecification": {
        "LaunchTemplateId": {},
        "LaunchTemplateName": {},
        "Version": {}
      },
      "Overrides": {}
    },
    "InstancesDistribution": {
      "OnDemandAllocationStrategy": {},
      "OnDemandBaseCapacity": {},
      "OnDemandPercentageAboveBaseCapacity": {},
      "SpotAllocationStrategy": {},
      "SpotInstancePools": {},
      "SpotMaxPrice": {}
    }
  },
  "InstanceId": {},
  "MinSize": {},
  "MaxSize": {},
  "DesiredCapacity": {},
  "DefaultCooldown": {},
  "AvailabilityZones": {},
  "LoadBalancerNames": {},
  "TargetGroupARNs": {},
  "HealthCheckType": {},
  "HealthCheckGracePeriod": {},
  "PlacementGroup": {},
  "VPCZoneIdentifier": {},
  "TerminationPolicies": {},
  "NewInstancesProtectedFromScaleIn": {},
  "CapacityRebalance": {},
  "LifecycleHookSpecificationList": {},
  "Tags": {},
  "ServiceLinkedRoleARN": {},
  "MaxInstanceLifetime": {},
  "Context": {},
  "DesiredCapacityType": {},
  "DefaultInstanceWarmup": {},
  "TrafficSources": {}
}
```

<h3 id="postcreateautoscalinggroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateAutoScalingGroupType](#schemacreateautoscalinggrouptype)|false|none|
|» AutoScalingGroupName|body|object|true|none|
|» LaunchConfigurationName|body|object|false|none|
|» LaunchTemplate|body|object|false|none|
|» » LaunchTemplateId|body|object|false|none|
|» » LaunchTemplateName|body|object|false|none|
|» » Version|body|object|false|none|
|» MixedInstancesPolicy|body|object|false|none|
|» » LaunchTemplate|body|object|false|none|
|» » » LaunchTemplateSpecification|body|object|false|none|
|» » » » LaunchTemplateId|body|object|false|none|
|» » » » LaunchTemplateName|body|object|false|none|
|» » » » Version|body|object|false|none|
|» » » Overrides|body|object|false|none|
|» » InstancesDistribution|body|object|false|none|
|» » » OnDemandAllocationStrategy|body|object|false|none|
|» » » OnDemandBaseCapacity|body|object|false|none|
|» » » OnDemandPercentageAboveBaseCapacity|body|object|false|none|
|» » » SpotAllocationStrategy|body|object|false|none|
|» » » SpotInstancePools|body|object|false|none|
|» » » SpotMaxPrice|body|object|false|none|
|» InstanceId|body|object|false|none|
|» MinSize|body|object|true|none|
|» MaxSize|body|object|true|none|
|» DesiredCapacity|body|object|false|none|
|» DefaultCooldown|body|object|false|none|
|» AvailabilityZones|body|object|false|none|
|» LoadBalancerNames|body|object|false|none|
|» TargetGroupARNs|body|object|false|none|
|» HealthCheckType|body|object|false|none|
|» HealthCheckGracePeriod|body|object|false|none|
|» PlacementGroup|body|object|false|none|
|» VPCZoneIdentifier|body|object|false|none|
|» TerminationPolicies|body|object|false|none|
|» NewInstancesProtectedFromScaleIn|body|object|false|none|
|» CapacityRebalance|body|object|false|none|
|» LifecycleHookSpecificationList|body|object|false|none|
|» Tags|body|object|false|none|
|» ServiceLinkedRoleARN|body|object|false|none|
|» MaxInstanceLifetime|body|object|false|none|
|» Context|body|object|false|none|
|» DesiredCapacityType|body|object|false|none|
|» DefaultInstanceWarmup|body|object|false|none|
|» TrafficSources|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateAutoScalingGroup|
|Version|2011-01-01|

<h3 id="postcreateautoscalinggroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|AlreadyExistsFault|[AlreadyExistsFault](#schemaalreadyexistsfault)|
|481|481|LimitExceededFault|[LimitExceededFault](#schemalimitexceededfault)|
|482|482|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|
|483|483|ServiceLinkedRoleFailure|[ServiceLinkedRoleFailure](#schemaservicelinkedrolefailure)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateLaunchConfiguration

<a id="opIdGET_CreateLaunchConfiguration"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=CreateLaunchConfiguration?LaunchConfigurationName=string&Action=CreateLaunchConfiguration&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateLaunchConfiguration`

<p>Creates a launch configuration.</p> <p>If you exceed your maximum limit of launch configurations, the call fails. To query this limit, call the <a>DescribeAccountLimits</a> API. For information about updating this limit, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-quotas.html">Quotas for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/LaunchConfiguration.html">Launch configurations</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <note> <p>Amazon EC2 Auto Scaling configures instances launched as part of an Auto Scaling group using either a launch template or a launch configuration. We strongly recommend that you do not use launch configurations. They do not provide full functionality for Amazon EC2 Auto Scaling or Amazon EC2. For information about using launch templates, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/launch-templates.html">Launch templates</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> </note>

<h3 id="getcreatelaunchconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LaunchConfigurationName|query|string|true|The name of the launch configuration. This name must be unique per Region per account.|
|ImageId|query|string|false|<p>The ID of the Amazon Machine Image (AMI) that was assigned during registration. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/finding-an-ami.html">Finding a Linux AMI</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p> <p>If you specify <code>InstanceId</code>, an <code>ImageId</code> is not required.</p>|
|KeyName|query|string|false|The name of the key pair. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html">Amazon EC2 key pairs and Linux instances</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.|
|SecurityGroups|query|[[XmlString](#schemaxmlstring)]|false|A list that contains the security group IDs to assign to the instances in the Auto Scaling group. For more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_SecurityGroups.html">Control traffic to resources using security groups</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.|
|ClassicLinkVPCId|query|string|false|Available for backward compatibility.|
|ClassicLinkVPCSecurityGroups|query|[[XmlStringMaxLen255](#schemaxmlstringmaxlen255)]|false|Available for backward compatibility.|
|UserData|query|string|false|The user data to make available to the launched EC2 instances. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance metadata and user data</a> (Linux) and <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ec2-instance-metadata.html">Instance metadata and user data</a> (Windows). If you are using a command line tool, base64-encoding is performed for you, and you can load the text from a file. Otherwise, you must provide base64-encoded text. User data is limited to 16 KB.|
|InstanceId|query|string|false|<p>The ID of the instance to use to create the launch configuration. The new launch configuration derives attributes from the instance, except for the block device mapping.</p> <p>To create a launch configuration with a block device mapping or override any other instance attributes, specify them as part of the same request.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-lc-with-instanceID.html">Creating a launch configuration using an EC2 instance</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>|
|InstanceType|query|string|false|<p>Specifies the instance type of the EC2 instance. For information about available instance types, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#AvailableInstanceTypes">Available instance types</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p> <p>If you specify <code>InstanceId</code>, an <code>InstanceType</code> is not required.</p>|
|KernelId|query|string|false|<p>The ID of the kernel associated with the AMI.</p> <note> <p>We recommend that you use PV-GRUB instead of kernels and RAM disks. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedKernels.html">User provided kernels</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p> </note>|
|RamdiskId|query|string|false|<p>The ID of the RAM disk to select.</p> <note> <p>We recommend that you use PV-GRUB instead of kernels and RAM disks. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedKernels.html">User provided kernels</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p> </note>|
|BlockDeviceMappings|query|[[BlockDeviceMapping](#schemablockdevicemapping)]|false|The block device mapping entries that define the block devices to attach to the instances at launch. By default, the block devices specified in the block device mapping for the AMI are used. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.html">Block device mappings</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.|
|InstanceMonitoring|query|object|false|<p>Controls whether instances in this group are launched with detailed (<code>true</code>) or basic (<code>false</code>) monitoring.</p> <p>The default value is <code>true</code> (enabled).</p> <important> <p>When detailed monitoring is enabled, Amazon CloudWatch generates metrics every minute and your account is charged a fee. When you disable detailed monitoring, CloudWatch generates metrics every 5 minutes. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/latest/userguide/enable-as-instance-metrics.html">Configure Monitoring for Auto Scaling Instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> </important>|
|SpotPrice|query|string|false|<p>The maximum hourly price to be paid for any Spot Instance launched to fulfill the request. Spot Instances are launched when the price you specify exceeds the current Spot price. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/launch-template-spot-instances.html">Request Spot Instances for fault-tolerant and flexible applications</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>Valid Range: Minimum value of 0.001</p> <note> <p>When you change your maximum price by creating a new launch configuration, running instances will continue to run as long as the maximum price for those running instances is higher than the current Spot price.</p> </note>|
|IamInstanceProfile|query|string|false|The name or the Amazon Resource Name (ARN) of the instance profile associated with the IAM role for the instance. The instance profile contains the IAM role. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/us-iam-role.html">IAM role for applications that run on Amazon EC2 instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.|
|EbsOptimized|query|boolean|false|<p>Specifies whether the launch configuration is optimized for EBS I/O (<code>true</code>) or not (<code>false</code>). The optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal I/O performance. This optimization is not available with all instance types. Additional fees are incurred when you enable EBS optimization for an instance type that is not EBS-optimized by default. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSOptimized.html">Amazon EBS-optimized instances</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p> <p>The default value is <code>false</code>.</p>|
|AssociatePublicIpAddress|query|boolean|false|<p>Specifies whether to assign a public IPv4 address to the group's instances. If the instance is launched into a default subnet, the default is to assign a public IPv4 address, unless you disabled the option to assign a public IPv4 address on the subnet. If the instance is launched into a nondefault subnet, the default is not to assign a public IPv4 address, unless you enabled the option to assign a public IPv4 address on the subnet.</p> <p>If you specify <code>true</code>, each instance in the Auto Scaling group receives a unique public IPv4 address. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-in-vpc.html">Launching Auto Scaling instances in a VPC</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If you specify this property, you must specify at least one subnet for <code>VPCZoneIdentifier</code> when you create your group.</p>|
|PlacementTenancy|query|string|false|<p>The tenancy of the instance, either <code>default</code> or <code>dedicated</code>. An instance with <code>dedicated</code> tenancy runs on isolated, single-tenant hardware and can only be launched into a VPC. To launch dedicated instances into a shared tenancy VPC (a VPC with the instance placement tenancy attribute set to <code>default</code>), you must set the value of this property to <code>dedicated</code>. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-dedicated-instances.html">Configuring instance tenancy with Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If you specify <code>PlacementTenancy</code>, you must specify at least one subnet for <code>VPCZoneIdentifier</code> when you create your group.</p> <p>Valid values: <code>default</code> \| <code>dedicated</code> </p>|
|MetadataOptions|query|object|false|The metadata options for the instances. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-launch-config.html#launch-configurations-imds">Configuring the Instance Metadata Options</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|CreateLaunchConfiguration|
|Version|2011-01-01|

<h3 id="getcreatelaunchconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|AlreadyExistsFault|[AlreadyExistsFault](#schemaalreadyexistsfault)|
|481|481|LimitExceededFault|[LimitExceededFault](#schemalimitexceededfault)|
|482|482|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateLaunchConfiguration

<a id="opIdPOST_CreateLaunchConfiguration"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=CreateLaunchConfiguration?Action=CreateLaunchConfiguration&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"LaunchConfigurationName":{},"ImageId":{},"KeyName":{},"SecurityGroups":{},"ClassicLinkVPCId":{},"ClassicLinkVPCSecurityGroups":{},"UserData":{},"InstanceId":{},"InstanceType":{},"KernelId":{},"RamdiskId":{},"BlockDeviceMappings":{},"InstanceMonitoring":{"Enabled":{}},"SpotPrice":{},"IamInstanceProfile":{},"EbsOptimized":{},"AssociatePublicIpAddress":{},"PlacementTenancy":{},"MetadataOptions":{"HttpTokens":{},"HttpPutResponseHopLimit":{},"HttpEndpoint":{}}}'
```

`POST /#Action=CreateLaunchConfiguration`

<p>Creates a launch configuration.</p> <p>If you exceed your maximum limit of launch configurations, the call fails. To query this limit, call the <a>DescribeAccountLimits</a> API. For information about updating this limit, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-quotas.html">Quotas for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/LaunchConfiguration.html">Launch configurations</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <note> <p>Amazon EC2 Auto Scaling configures instances launched as part of an Auto Scaling group using either a launch template or a launch configuration. We strongly recommend that you do not use launch configurations. They do not provide full functionality for Amazon EC2 Auto Scaling or Amazon EC2. For information about using launch templates, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/launch-templates.html">Launch templates</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> </note>

> Body parameter

```json
{
  "LaunchConfigurationName": {},
  "ImageId": {},
  "KeyName": {},
  "SecurityGroups": {},
  "ClassicLinkVPCId": {},
  "ClassicLinkVPCSecurityGroups": {},
  "UserData": {},
  "InstanceId": {},
  "InstanceType": {},
  "KernelId": {},
  "RamdiskId": {},
  "BlockDeviceMappings": {},
  "InstanceMonitoring": {
    "Enabled": {}
  },
  "SpotPrice": {},
  "IamInstanceProfile": {},
  "EbsOptimized": {},
  "AssociatePublicIpAddress": {},
  "PlacementTenancy": {},
  "MetadataOptions": {
    "HttpTokens": {},
    "HttpPutResponseHopLimit": {},
    "HttpEndpoint": {}
  }
}
```

<h3 id="postcreatelaunchconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateLaunchConfigurationType](#schemacreatelaunchconfigurationtype)|false|none|
|» LaunchConfigurationName|body|object|true|none|
|» ImageId|body|object|false|none|
|» KeyName|body|object|false|none|
|» SecurityGroups|body|object|false|none|
|» ClassicLinkVPCId|body|object|false|none|
|» ClassicLinkVPCSecurityGroups|body|object|false|none|
|» UserData|body|object|false|none|
|» InstanceId|body|object|false|none|
|» InstanceType|body|object|false|none|
|» KernelId|body|object|false|none|
|» RamdiskId|body|object|false|none|
|» BlockDeviceMappings|body|object|false|none|
|» InstanceMonitoring|body|object|false|none|
|» » Enabled|body|object|false|none|
|» SpotPrice|body|object|false|none|
|» IamInstanceProfile|body|object|false|none|
|» EbsOptimized|body|object|false|none|
|» AssociatePublicIpAddress|body|object|false|none|
|» PlacementTenancy|body|object|false|none|
|» MetadataOptions|body|object|false|none|
|» » HttpTokens|body|object|false|none|
|» » HttpPutResponseHopLimit|body|object|false|none|
|» » HttpEndpoint|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateLaunchConfiguration|
|Version|2011-01-01|

<h3 id="postcreatelaunchconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|AlreadyExistsFault|[AlreadyExistsFault](#schemaalreadyexistsfault)|
|481|481|LimitExceededFault|[LimitExceededFault](#schemalimitexceededfault)|
|482|482|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateOrUpdateTags

<a id="opIdGET_CreateOrUpdateTags"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=CreateOrUpdateTags?Tags=%7B%22ResourceId%22%3A%7B%7D%2C%22ResourceType%22%3A%7B%7D%2C%22Key%22%3A%7B%7D%2C%22Value%22%3A%7B%7D%2C%22PropagateAtLaunch%22%3A%7B%7D%7D&Action=CreateOrUpdateTags&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateOrUpdateTags`

<p>Creates or updates tags for the specified Auto Scaling group.</p> <p>When you specify a tag with a key that already exists, the operation overwrites the previous tag definition, and you do not get an error message.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-tagging.html">Tag Auto Scaling groups and instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

<h3 id="getcreateorupdatetags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Tags|query|[[Tag](#schematag)]|true|One or more tags.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|CreateOrUpdateTags|
|Version|2011-01-01|

<h3 id="getcreateorupdatetags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|LimitExceededFault|[LimitExceededFault](#schemalimitexceededfault)|
|481|481|AlreadyExistsFault|[AlreadyExistsFault](#schemaalreadyexistsfault)|
|482|482|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|
|483|483|ResourceInUseFault|[ResourceInUseFault](#schemaresourceinusefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateOrUpdateTags

<a id="opIdPOST_CreateOrUpdateTags"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=CreateOrUpdateTags?Action=CreateOrUpdateTags&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Tags":{}}'
```

`POST /#Action=CreateOrUpdateTags`

<p>Creates or updates tags for the specified Auto Scaling group.</p> <p>When you specify a tag with a key that already exists, the operation overwrites the previous tag definition, and you do not get an error message.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-tagging.html">Tag Auto Scaling groups and instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

> Body parameter

```json
{
  "Tags": {}
}
```

<h3 id="postcreateorupdatetags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateOrUpdateTagsType](#schemacreateorupdatetagstype)|false|none|
|» Tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateOrUpdateTags|
|Version|2011-01-01|

<h3 id="postcreateorupdatetags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|LimitExceededFault|[LimitExceededFault](#schemalimitexceededfault)|
|481|481|AlreadyExistsFault|[AlreadyExistsFault](#schemaalreadyexistsfault)|
|482|482|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|
|483|483|ResourceInUseFault|[ResourceInUseFault](#schemaresourceinusefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteAutoScalingGroup

<a id="opIdGET_DeleteAutoScalingGroup"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DeleteAutoScalingGroup?AutoScalingGroupName=string&Action=DeleteAutoScalingGroup&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteAutoScalingGroup`

<p>Deletes the specified Auto Scaling group.</p> <p>If the group has instances or scaling activities in progress, you must specify the option to force the deletion in order for it to succeed. The force delete operation will also terminate the EC2 instances. If the group has a warm pool, the force delete option also deletes the warm pool.</p> <p>To remove instances from the Auto Scaling group before deleting it, call the <a>DetachInstances</a> API with the list of instances and the option to decrement the desired capacity. This ensures that Amazon EC2 Auto Scaling does not launch replacement instances.</p> <p>To terminate all instances before deleting the Auto Scaling group, call the <a>UpdateAutoScalingGroup</a> API and set the minimum size and desired capacity of the Auto Scaling group to zero.</p> <p>If the group has scaling policies, deleting the group deletes the policies, the underlying alarm actions, and any alarm that no longer has an associated action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-process-shutdown.html">Delete your Auto Scaling infrastructure</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

<h3 id="getdeleteautoscalinggroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AutoScalingGroupName|query|string|true|The name of the Auto Scaling group.|
|ForceDelete|query|boolean|false|Specifies that the group is to be deleted along with all instances associated with the group, without waiting for all instances to be terminated. This action also deletes any outstanding lifecycle actions associated with the group.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DeleteAutoScalingGroup|
|Version|2011-01-01|

<h3 id="getdeleteautoscalinggroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ScalingActivityInProgressFault|[ScalingActivityInProgressFault](#schemascalingactivityinprogressfault)|
|481|481|ResourceInUseFault|[ResourceInUseFault](#schemaresourceinusefault)|
|482|482|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteAutoScalingGroup

<a id="opIdPOST_DeleteAutoScalingGroup"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DeleteAutoScalingGroup?Action=DeleteAutoScalingGroup&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AutoScalingGroupName":{},"ForceDelete":{}}'
```

`POST /#Action=DeleteAutoScalingGroup`

<p>Deletes the specified Auto Scaling group.</p> <p>If the group has instances or scaling activities in progress, you must specify the option to force the deletion in order for it to succeed. The force delete operation will also terminate the EC2 instances. If the group has a warm pool, the force delete option also deletes the warm pool.</p> <p>To remove instances from the Auto Scaling group before deleting it, call the <a>DetachInstances</a> API with the list of instances and the option to decrement the desired capacity. This ensures that Amazon EC2 Auto Scaling does not launch replacement instances.</p> <p>To terminate all instances before deleting the Auto Scaling group, call the <a>UpdateAutoScalingGroup</a> API and set the minimum size and desired capacity of the Auto Scaling group to zero.</p> <p>If the group has scaling policies, deleting the group deletes the policies, the underlying alarm actions, and any alarm that no longer has an associated action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-process-shutdown.html">Delete your Auto Scaling infrastructure</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

> Body parameter

```json
{
  "AutoScalingGroupName": {},
  "ForceDelete": {}
}
```

<h3 id="postdeleteautoscalinggroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteAutoScalingGroupType](#schemadeleteautoscalinggrouptype)|false|none|
|» AutoScalingGroupName|body|object|true|none|
|» ForceDelete|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteAutoScalingGroup|
|Version|2011-01-01|

<h3 id="postdeleteautoscalinggroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ScalingActivityInProgressFault|[ScalingActivityInProgressFault](#schemascalingactivityinprogressfault)|
|481|481|ResourceInUseFault|[ResourceInUseFault](#schemaresourceinusefault)|
|482|482|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteLaunchConfiguration

<a id="opIdGET_DeleteLaunchConfiguration"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DeleteLaunchConfiguration?LaunchConfigurationName=string&Action=DeleteLaunchConfiguration&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteLaunchConfiguration`

<p>Deletes the specified launch configuration.</p> <p>The launch configuration must not be attached to an Auto Scaling group. When this call completes, the launch configuration is no longer available for use.</p>

<h3 id="getdeletelaunchconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LaunchConfigurationName|query|string|true|The name of the launch configuration.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DeleteLaunchConfiguration|
|Version|2011-01-01|

<h3 id="getdeletelaunchconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceInUseFault|[ResourceInUseFault](#schemaresourceinusefault)|
|481|481|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteLaunchConfiguration

<a id="opIdPOST_DeleteLaunchConfiguration"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DeleteLaunchConfiguration?Action=DeleteLaunchConfiguration&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"LaunchConfigurationName":{}}'
```

`POST /#Action=DeleteLaunchConfiguration`

<p>Deletes the specified launch configuration.</p> <p>The launch configuration must not be attached to an Auto Scaling group. When this call completes, the launch configuration is no longer available for use.</p>

> Body parameter

```json
{
  "LaunchConfigurationName": {}
}
```

<h3 id="postdeletelaunchconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[LaunchConfigurationNameType](#schemalaunchconfigurationnametype)|false|none|
|» LaunchConfigurationName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteLaunchConfiguration|
|Version|2011-01-01|

<h3 id="postdeletelaunchconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceInUseFault|[ResourceInUseFault](#schemaresourceinusefault)|
|481|481|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteLifecycleHook

<a id="opIdGET_DeleteLifecycleHook"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DeleteLifecycleHook?LifecycleHookName=string&AutoScalingGroupName=string&Action=DeleteLifecycleHook&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteLifecycleHook`

<p>Deletes the specified lifecycle hook.</p> <p>If there are any outstanding lifecycle actions, they are completed first (<code>ABANDON</code> for launching instances, <code>CONTINUE</code> for terminating instances).</p>

<h3 id="getdeletelifecyclehook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LifecycleHookName|query|string|true|The name of the lifecycle hook.|
|AutoScalingGroupName|query|string|true|The name of the Auto Scaling group.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DeleteLifecycleHook|
|Version|2011-01-01|

<h3 id="getdeletelifecyclehook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteLifecycleHookAnswer](#schemadeletelifecyclehookanswer)|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteLifecycleHook

<a id="opIdPOST_DeleteLifecycleHook"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DeleteLifecycleHook?Action=DeleteLifecycleHook&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"LifecycleHookName":{},"AutoScalingGroupName":{}}'
```

`POST /#Action=DeleteLifecycleHook`

<p>Deletes the specified lifecycle hook.</p> <p>If there are any outstanding lifecycle actions, they are completed first (<code>ABANDON</code> for launching instances, <code>CONTINUE</code> for terminating instances).</p>

> Body parameter

```json
{
  "LifecycleHookName": {},
  "AutoScalingGroupName": {}
}
```

<h3 id="postdeletelifecyclehook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteLifecycleHookType](#schemadeletelifecyclehooktype)|false|none|
|» LifecycleHookName|body|object|true|none|
|» AutoScalingGroupName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteLifecycleHook|
|Version|2011-01-01|

<h3 id="postdeletelifecyclehook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteLifecycleHookAnswer](#schemadeletelifecyclehookanswer)|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteNotificationConfiguration

<a id="opIdGET_DeleteNotificationConfiguration"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DeleteNotificationConfiguration?AutoScalingGroupName=string&TopicARN=string&Action=DeleteNotificationConfiguration&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteNotificationConfiguration`

Deletes the specified notification.

<h3 id="getdeletenotificationconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AutoScalingGroupName|query|string|true|The name of the Auto Scaling group.|
|TopicARN|query|string|true|The Amazon Resource Name (ARN) of the Amazon SNS topic.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DeleteNotificationConfiguration|
|Version|2011-01-01|

<h3 id="getdeletenotificationconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteNotificationConfiguration

<a id="opIdPOST_DeleteNotificationConfiguration"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DeleteNotificationConfiguration?Action=DeleteNotificationConfiguration&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AutoScalingGroupName":{},"TopicARN":{}}'
```

`POST /#Action=DeleteNotificationConfiguration`

Deletes the specified notification.

> Body parameter

```json
{
  "AutoScalingGroupName": {},
  "TopicARN": {}
}
```

<h3 id="postdeletenotificationconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteNotificationConfigurationType](#schemadeletenotificationconfigurationtype)|false|none|
|» AutoScalingGroupName|body|object|true|none|
|» TopicARN|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteNotificationConfiguration|
|Version|2011-01-01|

<h3 id="postdeletenotificationconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeletePolicy

<a id="opIdGET_DeletePolicy"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DeletePolicy?PolicyName=string&Action=DeletePolicy&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeletePolicy`

<p>Deletes the specified scaling policy.</p> <p>Deleting either a step scaling policy or a simple scaling policy deletes the underlying alarm action, but does not delete the alarm, even if it no longer has an associated action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/deleting-scaling-policy.html">Deleting a scaling policy</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

<h3 id="getdeletepolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AutoScalingGroupName|query|string|false|The name of the Auto Scaling group.|
|PolicyName|query|string|true|The name or Amazon Resource Name (ARN) of the policy.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DeletePolicy|
|Version|2011-01-01|

<h3 id="getdeletepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|
|481|481|ServiceLinkedRoleFailure|[ServiceLinkedRoleFailure](#schemaservicelinkedrolefailure)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeletePolicy

<a id="opIdPOST_DeletePolicy"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DeletePolicy?Action=DeletePolicy&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AutoScalingGroupName":{},"PolicyName":{}}'
```

`POST /#Action=DeletePolicy`

<p>Deletes the specified scaling policy.</p> <p>Deleting either a step scaling policy or a simple scaling policy deletes the underlying alarm action, but does not delete the alarm, even if it no longer has an associated action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/deleting-scaling-policy.html">Deleting a scaling policy</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

> Body parameter

```json
{
  "AutoScalingGroupName": {},
  "PolicyName": {}
}
```

<h3 id="postdeletepolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeletePolicyType](#schemadeletepolicytype)|false|none|
|» AutoScalingGroupName|body|object|false|none|
|» PolicyName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeletePolicy|
|Version|2011-01-01|

<h3 id="postdeletepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|
|481|481|ServiceLinkedRoleFailure|[ServiceLinkedRoleFailure](#schemaservicelinkedrolefailure)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteScheduledAction

<a id="opIdGET_DeleteScheduledAction"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DeleteScheduledAction?AutoScalingGroupName=string&ScheduledActionName=string&Action=DeleteScheduledAction&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteScheduledAction`

Deletes the specified scheduled action.

<h3 id="getdeletescheduledaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AutoScalingGroupName|query|string|true|The name of the Auto Scaling group.|
|ScheduledActionName|query|string|true|The name of the action to delete.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DeleteScheduledAction|
|Version|2011-01-01|

<h3 id="getdeletescheduledaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteScheduledAction

<a id="opIdPOST_DeleteScheduledAction"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DeleteScheduledAction?Action=DeleteScheduledAction&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AutoScalingGroupName":{},"ScheduledActionName":{}}'
```

`POST /#Action=DeleteScheduledAction`

Deletes the specified scheduled action.

> Body parameter

```json
{
  "AutoScalingGroupName": {},
  "ScheduledActionName": {}
}
```

<h3 id="postdeletescheduledaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteScheduledActionType](#schemadeletescheduledactiontype)|false|none|
|» AutoScalingGroupName|body|object|true|none|
|» ScheduledActionName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteScheduledAction|
|Version|2011-01-01|

<h3 id="postdeletescheduledaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteTags

<a id="opIdGET_DeleteTags"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DeleteTags?Tags=%7B%22ResourceId%22%3A%7B%7D%2C%22ResourceType%22%3A%7B%7D%2C%22Key%22%3A%7B%7D%2C%22Value%22%3A%7B%7D%2C%22PropagateAtLaunch%22%3A%7B%7D%7D&Action=DeleteTags&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteTags`

Deletes the specified tags.

<h3 id="getdeletetags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Tags|query|[[Tag](#schematag)]|true|One or more tags.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DeleteTags|
|Version|2011-01-01|

<h3 id="getdeletetags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|
|481|481|ResourceInUseFault|[ResourceInUseFault](#schemaresourceinusefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteTags

<a id="opIdPOST_DeleteTags"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DeleteTags?Action=DeleteTags&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Tags":{}}'
```

`POST /#Action=DeleteTags`

Deletes the specified tags.

> Body parameter

```json
{
  "Tags": {}
}
```

<h3 id="postdeletetags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteTagsType](#schemadeletetagstype)|false|none|
|» Tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteTags|
|Version|2011-01-01|

<h3 id="postdeletetags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|
|481|481|ResourceInUseFault|[ResourceInUseFault](#schemaresourceinusefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteWarmPool

<a id="opIdGET_DeleteWarmPool"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DeleteWarmPool?AutoScalingGroupName=string&Action=DeleteWarmPool&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteWarmPool`

<p>Deletes the warm pool for the specified Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html">Warm pools for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

<h3 id="getdeletewarmpool-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AutoScalingGroupName|query|string|true|The name of the Auto Scaling group.|
|ForceDelete|query|boolean|false|Specifies that the warm pool is to be deleted along with all of its associated instances, without waiting for all instances to be terminated. This parameter also deletes any outstanding lifecycle actions associated with the warm pool instances.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DeleteWarmPool|
|Version|2011-01-01|

<h3 id="getdeletewarmpool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteWarmPoolAnswer](#schemadeletewarmpoolanswer)|
|480|480|LimitExceededFault|[LimitExceededFault](#schemalimitexceededfault)|
|481|481|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|
|482|482|ScalingActivityInProgressFault|[ScalingActivityInProgressFault](#schemascalingactivityinprogressfault)|
|483|483|ResourceInUseFault|[ResourceInUseFault](#schemaresourceinusefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteWarmPool

<a id="opIdPOST_DeleteWarmPool"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DeleteWarmPool?Action=DeleteWarmPool&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AutoScalingGroupName":{},"ForceDelete":{}}'
```

`POST /#Action=DeleteWarmPool`

<p>Deletes the warm pool for the specified Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html">Warm pools for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

> Body parameter

```json
{
  "AutoScalingGroupName": {},
  "ForceDelete": {}
}
```

<h3 id="postdeletewarmpool-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteWarmPoolType](#schemadeletewarmpooltype)|false|none|
|» AutoScalingGroupName|body|object|true|none|
|» ForceDelete|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteWarmPool|
|Version|2011-01-01|

<h3 id="postdeletewarmpool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteWarmPoolAnswer](#schemadeletewarmpoolanswer)|
|480|480|LimitExceededFault|[LimitExceededFault](#schemalimitexceededfault)|
|481|481|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|
|482|482|ScalingActivityInProgressFault|[ScalingActivityInProgressFault](#schemascalingactivityinprogressfault)|
|483|483|ResourceInUseFault|[ResourceInUseFault](#schemaresourceinusefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeAccountLimits

<a id="opIdGET_DescribeAccountLimits"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DescribeAccountLimits?Action=DescribeAccountLimits&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeAccountLimits`

<p>Describes the current Amazon EC2 Auto Scaling resource quotas for your account.</p> <p>When you establish an Amazon Web Services account, the account has initial quotas on the maximum number of Auto Scaling groups and launch configurations that you can create in a given Region. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-quotas.html">Quotas for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

<h3 id="getdescribeaccountlimits-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DescribeAccountLimits|
|Version|2011-01-01|

<h3 id="getdescribeaccountlimits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAccountLimitsAnswer](#schemadescribeaccountlimitsanswer)|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeAccountLimits

<a id="opIdPOST_DescribeAccountLimits"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DescribeAccountLimits?Action=DescribeAccountLimits&Version=2011-01-01' \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /#Action=DescribeAccountLimits`

<p>Describes the current Amazon EC2 Auto Scaling resource quotas for your account.</p> <p>When you establish an Amazon Web Services account, the account has initial quotas on the maximum number of Auto Scaling groups and launch configurations that you can create in a given Region. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-quotas.html">Quotas for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

<h3 id="postdescribeaccountlimits-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DescribeAccountLimits|
|Version|2011-01-01|

<h3 id="postdescribeaccountlimits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAccountLimitsAnswer](#schemadescribeaccountlimitsanswer)|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeAdjustmentTypes

<a id="opIdGET_DescribeAdjustmentTypes"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DescribeAdjustmentTypes?Action=DescribeAdjustmentTypes&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeAdjustmentTypes`

<p>Describes the available adjustment types for step scaling and simple scaling policies.</p> <p>The following adjustment types are supported:</p> <ul> <li> <p> <code>ChangeInCapacity</code> </p> </li> <li> <p> <code>ExactCapacity</code> </p> </li> <li> <p> <code>PercentChangeInCapacity</code> </p> </li> </ul>

<h3 id="getdescribeadjustmenttypes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DescribeAdjustmentTypes|
|Version|2011-01-01|

<h3 id="getdescribeadjustmenttypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAdjustmentTypesAnswer](#schemadescribeadjustmenttypesanswer)|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeAdjustmentTypes

<a id="opIdPOST_DescribeAdjustmentTypes"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DescribeAdjustmentTypes?Action=DescribeAdjustmentTypes&Version=2011-01-01' \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /#Action=DescribeAdjustmentTypes`

<p>Describes the available adjustment types for step scaling and simple scaling policies.</p> <p>The following adjustment types are supported:</p> <ul> <li> <p> <code>ChangeInCapacity</code> </p> </li> <li> <p> <code>ExactCapacity</code> </p> </li> <li> <p> <code>PercentChangeInCapacity</code> </p> </li> </ul>

<h3 id="postdescribeadjustmenttypes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DescribeAdjustmentTypes|
|Version|2011-01-01|

<h3 id="postdescribeadjustmenttypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAdjustmentTypesAnswer](#schemadescribeadjustmenttypesanswer)|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeAutoScalingGroups

<a id="opIdGET_DescribeAutoScalingGroups"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DescribeAutoScalingGroups?Action=DescribeAutoScalingGroups&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeAutoScalingGroups`

<p>Gets information about the Auto Scaling groups in the account and Region.</p> <p>If you specify Auto Scaling group names, the output includes information for only the specified Auto Scaling groups. If you specify filters, the output includes information for only those Auto Scaling groups that meet the filter criteria. If you do not specify group names or filters, the output includes information for all Auto Scaling groups. </p> <p>This operation also returns information about instances in Auto Scaling groups. To retrieve information about the instances in a warm pool, you must call the <a>DescribeWarmPool</a> API. </p>

<h3 id="getdescribeautoscalinggroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AutoScalingGroupNames|query|[[XmlStringMaxLen255](#schemaxmlstringmaxlen255)]|false|<p>The names of the Auto Scaling groups. By default, you can only specify up to 50 names. You can optionally increase this limit using the <code>MaxRecords</code> property.</p> <p>If you omit this property, all Auto Scaling groups are described.</p>|
|NextToken|query|string|false|The token for the next set of items to return. (You received this token from a previous call.)|
|MaxRecords|query|integer|false|The maximum number of items to return with this call. The default value is <code>50</code> and the maximum value is <code>100</code>.|
|Filters|query|[[Filter](#schemafilter)]|false|One or more filters to limit the results based on specific tags. |
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DescribeAutoScalingGroups|
|Version|2011-01-01|

<h3 id="getdescribeautoscalinggroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AutoScalingGroupsType](#schemaautoscalinggroupstype)|
|480|480|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|
|481|481|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeAutoScalingGroups

<a id="opIdPOST_DescribeAutoScalingGroups"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DescribeAutoScalingGroups?Action=DescribeAutoScalingGroups&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AutoScalingGroupNames":{},"NextToken":{},"MaxRecords":{},"Filters":{}}'
```

`POST /#Action=DescribeAutoScalingGroups`

<p>Gets information about the Auto Scaling groups in the account and Region.</p> <p>If you specify Auto Scaling group names, the output includes information for only the specified Auto Scaling groups. If you specify filters, the output includes information for only those Auto Scaling groups that meet the filter criteria. If you do not specify group names or filters, the output includes information for all Auto Scaling groups. </p> <p>This operation also returns information about instances in Auto Scaling groups. To retrieve information about the instances in a warm pool, you must call the <a>DescribeWarmPool</a> API. </p>

> Body parameter

```json
{
  "AutoScalingGroupNames": {},
  "NextToken": {},
  "MaxRecords": {},
  "Filters": {}
}
```

<h3 id="postdescribeautoscalinggroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[AutoScalingGroupNamesType](#schemaautoscalinggroupnamestype)|false|none|
|» AutoScalingGroupNames|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxRecords|body|object|false|none|
|» Filters|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeAutoScalingGroups|
|Version|2011-01-01|

<h3 id="postdescribeautoscalinggroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AutoScalingGroupsType](#schemaautoscalinggroupstype)|
|480|480|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|
|481|481|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeAutoScalingInstances

<a id="opIdGET_DescribeAutoScalingInstances"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DescribeAutoScalingInstances?Action=DescribeAutoScalingInstances&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeAutoScalingInstances`

Gets information about the Auto Scaling instances in the account and Region.

<h3 id="getdescribeautoscalinginstances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceIds|query|[[XmlStringMaxLen19](#schemaxmlstringmaxlen19)]|false|<p>The IDs of the instances. If you omit this property, all Auto Scaling instances are described. If you specify an ID that does not exist, it is ignored with no error.</p> <p>Array Members: Maximum number of 50 items.</p>|
|MaxRecords|query|integer|false|The maximum number of items to return with this call. The default value is <code>50</code> and the maximum value is <code>50</code>.|
|NextToken|query|string|false|The token for the next set of items to return. (You received this token from a previous call.)|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DescribeAutoScalingInstances|
|Version|2011-01-01|

<h3 id="getdescribeautoscalinginstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AutoScalingInstancesType](#schemaautoscalinginstancestype)|
|480|480|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|
|481|481|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeAutoScalingInstances

<a id="opIdPOST_DescribeAutoScalingInstances"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DescribeAutoScalingInstances?Action=DescribeAutoScalingInstances&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"InstanceIds":{},"MaxRecords":{},"NextToken":{}}'
```

`POST /#Action=DescribeAutoScalingInstances`

Gets information about the Auto Scaling instances in the account and Region.

> Body parameter

```json
{
  "InstanceIds": {},
  "MaxRecords": {},
  "NextToken": {}
}
```

<h3 id="postdescribeautoscalinginstances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeAutoScalingInstancesType](#schemadescribeautoscalinginstancestype)|false|none|
|» InstanceIds|body|object|false|none|
|» MaxRecords|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeAutoScalingInstances|
|Version|2011-01-01|

<h3 id="postdescribeautoscalinginstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AutoScalingInstancesType](#schemaautoscalinginstancestype)|
|480|480|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|
|481|481|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeAutoScalingNotificationTypes

<a id="opIdGET_DescribeAutoScalingNotificationTypes"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DescribeAutoScalingNotificationTypes?Action=DescribeAutoScalingNotificationTypes&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeAutoScalingNotificationTypes`

Describes the notification types that are supported by Amazon EC2 Auto Scaling.

<h3 id="getdescribeautoscalingnotificationtypes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DescribeAutoScalingNotificationTypes|
|Version|2011-01-01|

<h3 id="getdescribeautoscalingnotificationtypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAutoScalingNotificationTypesAnswer](#schemadescribeautoscalingnotificationtypesanswer)|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeAutoScalingNotificationTypes

<a id="opIdPOST_DescribeAutoScalingNotificationTypes"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DescribeAutoScalingNotificationTypes?Action=DescribeAutoScalingNotificationTypes&Version=2011-01-01' \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /#Action=DescribeAutoScalingNotificationTypes`

Describes the notification types that are supported by Amazon EC2 Auto Scaling.

<h3 id="postdescribeautoscalingnotificationtypes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DescribeAutoScalingNotificationTypes|
|Version|2011-01-01|

<h3 id="postdescribeautoscalingnotificationtypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAutoScalingNotificationTypesAnswer](#schemadescribeautoscalingnotificationtypesanswer)|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeInstanceRefreshes

<a id="opIdGET_DescribeInstanceRefreshes"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DescribeInstanceRefreshes?AutoScalingGroupName=string&Action=DescribeInstanceRefreshes&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeInstanceRefreshes`

<p>Gets information about the instance refreshes for the specified Auto Scaling group.</p> <p>This operation is part of the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html">instance refresh feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group after you make configuration changes.</p> <p>To help you determine the status of an instance refresh, Amazon EC2 Auto Scaling returns information about the instance refreshes you previously initiated, including their status, start time, end time, the percentage of the instance refresh that is complete, and the number of instances remaining to update before the instance refresh is complete. If a rollback is initiated while an instance refresh is in progress, Amazon EC2 Auto Scaling also returns information about the rollback of the instance refresh.</p>

<h3 id="getdescribeinstancerefreshes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AutoScalingGroupName|query|string|true|The name of the Auto Scaling group.|
|InstanceRefreshIds|query|[[XmlStringMaxLen255](#schemaxmlstringmaxlen255)]|false|One or more instance refresh IDs.|
|NextToken|query|string|false|The token for the next set of items to return. (You received this token from a previous call.)|
|MaxRecords|query|integer|false|The maximum number of items to return with this call. The default value is <code>50</code> and the maximum value is <code>100</code>.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DescribeInstanceRefreshes|
|Version|2011-01-01|

<h3 id="getdescribeinstancerefreshes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeInstanceRefreshesAnswer](#schemadescribeinstancerefreshesanswer)|
|480|480|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|
|481|481|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeInstanceRefreshes

<a id="opIdPOST_DescribeInstanceRefreshes"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DescribeInstanceRefreshes?Action=DescribeInstanceRefreshes&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AutoScalingGroupName":{},"InstanceRefreshIds":{},"NextToken":{},"MaxRecords":{}}'
```

`POST /#Action=DescribeInstanceRefreshes`

<p>Gets information about the instance refreshes for the specified Auto Scaling group.</p> <p>This operation is part of the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html">instance refresh feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group after you make configuration changes.</p> <p>To help you determine the status of an instance refresh, Amazon EC2 Auto Scaling returns information about the instance refreshes you previously initiated, including their status, start time, end time, the percentage of the instance refresh that is complete, and the number of instances remaining to update before the instance refresh is complete. If a rollback is initiated while an instance refresh is in progress, Amazon EC2 Auto Scaling also returns information about the rollback of the instance refresh.</p>

> Body parameter

```json
{
  "AutoScalingGroupName": {},
  "InstanceRefreshIds": {},
  "NextToken": {},
  "MaxRecords": {}
}
```

<h3 id="postdescribeinstancerefreshes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeInstanceRefreshesType](#schemadescribeinstancerefreshestype)|false|none|
|» AutoScalingGroupName|body|object|true|none|
|» InstanceRefreshIds|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxRecords|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeInstanceRefreshes|
|Version|2011-01-01|

<h3 id="postdescribeinstancerefreshes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeInstanceRefreshesAnswer](#schemadescribeinstancerefreshesanswer)|
|480|480|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|
|481|481|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeLaunchConfigurations

<a id="opIdGET_DescribeLaunchConfigurations"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DescribeLaunchConfigurations?Action=DescribeLaunchConfigurations&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeLaunchConfigurations`

Gets information about the launch configurations in the account and Region.

<h3 id="getdescribelaunchconfigurations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LaunchConfigurationNames|query|[[XmlStringMaxLen255](#schemaxmlstringmaxlen255)]|false|<p>The launch configuration names. If you omit this property, all launch configurations are described.</p> <p>Array Members: Maximum number of 50 items.</p>|
|NextToken|query|string|false|The token for the next set of items to return. (You received this token from a previous call.)|
|MaxRecords|query|integer|false|The maximum number of items to return with this call. The default value is <code>50</code> and the maximum value is <code>100</code>.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DescribeLaunchConfigurations|
|Version|2011-01-01|

<h3 id="getdescribelaunchconfigurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[LaunchConfigurationsType](#schemalaunchconfigurationstype)|
|480|480|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|
|481|481|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeLaunchConfigurations

<a id="opIdPOST_DescribeLaunchConfigurations"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DescribeLaunchConfigurations?Action=DescribeLaunchConfigurations&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"LaunchConfigurationNames":{},"NextToken":{},"MaxRecords":{}}'
```

`POST /#Action=DescribeLaunchConfigurations`

Gets information about the launch configurations in the account and Region.

> Body parameter

```json
{
  "LaunchConfigurationNames": {},
  "NextToken": {},
  "MaxRecords": {}
}
```

<h3 id="postdescribelaunchconfigurations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[LaunchConfigurationNamesType](#schemalaunchconfigurationnamestype)|false|none|
|» LaunchConfigurationNames|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxRecords|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeLaunchConfigurations|
|Version|2011-01-01|

<h3 id="postdescribelaunchconfigurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[LaunchConfigurationsType](#schemalaunchconfigurationstype)|
|480|480|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|
|481|481|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeLifecycleHookTypes

<a id="opIdGET_DescribeLifecycleHookTypes"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DescribeLifecycleHookTypes?Action=DescribeLifecycleHookTypes&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeLifecycleHookTypes`

<p>Describes the available types of lifecycle hooks.</p> <p>The following hook types are supported:</p> <ul> <li> <p> <code>autoscaling:EC2_INSTANCE_LAUNCHING</code> </p> </li> <li> <p> <code>autoscaling:EC2_INSTANCE_TERMINATING</code> </p> </li> </ul>

<h3 id="getdescribelifecyclehooktypes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DescribeLifecycleHookTypes|
|Version|2011-01-01|

<h3 id="getdescribelifecyclehooktypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeLifecycleHookTypesAnswer](#schemadescribelifecyclehooktypesanswer)|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeLifecycleHookTypes

<a id="opIdPOST_DescribeLifecycleHookTypes"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DescribeLifecycleHookTypes?Action=DescribeLifecycleHookTypes&Version=2011-01-01' \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /#Action=DescribeLifecycleHookTypes`

<p>Describes the available types of lifecycle hooks.</p> <p>The following hook types are supported:</p> <ul> <li> <p> <code>autoscaling:EC2_INSTANCE_LAUNCHING</code> </p> </li> <li> <p> <code>autoscaling:EC2_INSTANCE_TERMINATING</code> </p> </li> </ul>

<h3 id="postdescribelifecyclehooktypes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DescribeLifecycleHookTypes|
|Version|2011-01-01|

<h3 id="postdescribelifecyclehooktypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeLifecycleHookTypesAnswer](#schemadescribelifecyclehooktypesanswer)|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeLifecycleHooks

<a id="opIdGET_DescribeLifecycleHooks"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DescribeLifecycleHooks?AutoScalingGroupName=string&Action=DescribeLifecycleHooks&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeLifecycleHooks`

Gets information about the lifecycle hooks for the specified Auto Scaling group.

<h3 id="getdescribelifecyclehooks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AutoScalingGroupName|query|string|true|The name of the Auto Scaling group.|
|LifecycleHookNames|query|[[AsciiStringMaxLen255](#schemaasciistringmaxlen255)]|false|The names of one or more lifecycle hooks. If you omit this property, all lifecycle hooks are described.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DescribeLifecycleHooks|
|Version|2011-01-01|

<h3 id="getdescribelifecyclehooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeLifecycleHooksAnswer](#schemadescribelifecyclehooksanswer)|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeLifecycleHooks

<a id="opIdPOST_DescribeLifecycleHooks"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DescribeLifecycleHooks?Action=DescribeLifecycleHooks&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AutoScalingGroupName":{},"LifecycleHookNames":{}}'
```

`POST /#Action=DescribeLifecycleHooks`

Gets information about the lifecycle hooks for the specified Auto Scaling group.

> Body parameter

```json
{
  "AutoScalingGroupName": {},
  "LifecycleHookNames": {}
}
```

<h3 id="postdescribelifecyclehooks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeLifecycleHooksType](#schemadescribelifecyclehookstype)|false|none|
|» AutoScalingGroupName|body|object|true|none|
|» LifecycleHookNames|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeLifecycleHooks|
|Version|2011-01-01|

<h3 id="postdescribelifecyclehooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeLifecycleHooksAnswer](#schemadescribelifecyclehooksanswer)|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeLoadBalancerTargetGroups

<a id="opIdGET_DescribeLoadBalancerTargetGroups"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DescribeLoadBalancerTargetGroups?AutoScalingGroupName=string&Action=DescribeLoadBalancerTargetGroups&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeLoadBalancerTargetGroups`

<note> <p>This API operation is superseded by <a>DescribeTrafficSources</a>, which can describe multiple traffic sources types. We recommend using <code>DetachTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>DescribeLoadBalancerTargetGroups</code>. You can use both the original <code>DescribeLoadBalancerTargetGroups</code> API operation and <code>DescribeTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Gets information about the Elastic Load Balancing target groups for the specified Auto Scaling group.</p> <p>To determine the attachment status of the target group, use the <code>State</code> element in the response. When you attach a target group to an Auto Scaling group, the initial <code>State</code> value is <code>Adding</code>. The state transitions to <code>Added</code> after all Auto Scaling instances are registered with the target group. If Elastic Load Balancing health checks are enabled for the Auto Scaling group, the state transitions to <code>InService</code> after at least one Auto Scaling instance passes the health check. When the target group is in the <code>InService</code> state, Amazon EC2 Auto Scaling can terminate and replace any instances that are reported as unhealthy. If no registered instances pass the health checks, the target group doesn't enter the <code>InService</code> state. </p> <p>Target groups also have an <code>InService</code> state if you attach them in the <a>CreateAutoScalingGroup</a> API call. If your target group state is <code>InService</code>, but it is not working properly, check the scaling activities by calling <a>DescribeScalingActivities</a> and take any corrective actions necessary.</p> <p>For help with failed health checks, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ts-as-healthchecks.html">Troubleshooting Amazon EC2 Auto Scaling: Health checks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p> <note> <p>You can use this operation to describe target groups that were attached by using <a>AttachLoadBalancerTargetGroups</a>, but not for target groups that were attached by using <a>AttachTrafficSources</a>.</p> </note>

<h3 id="getdescribeloadbalancertargetgroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AutoScalingGroupName|query|string|true|The name of the Auto Scaling group.|
|NextToken|query|string|false|The token for the next set of items to return. (You received this token from a previous call.)|
|MaxRecords|query|integer|false|The maximum number of items to return with this call. The default value is <code>100</code> and the maximum value is <code>100</code>.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DescribeLoadBalancerTargetGroups|
|Version|2011-01-01|

<h3 id="getdescribeloadbalancertargetgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeLoadBalancerTargetGroupsResponse](#schemadescribeloadbalancertargetgroupsresponse)|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|
|481|481|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeLoadBalancerTargetGroups

<a id="opIdPOST_DescribeLoadBalancerTargetGroups"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DescribeLoadBalancerTargetGroups?Action=DescribeLoadBalancerTargetGroups&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AutoScalingGroupName":{},"NextToken":{},"MaxRecords":{}}'
```

`POST /#Action=DescribeLoadBalancerTargetGroups`

<note> <p>This API operation is superseded by <a>DescribeTrafficSources</a>, which can describe multiple traffic sources types. We recommend using <code>DetachTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>DescribeLoadBalancerTargetGroups</code>. You can use both the original <code>DescribeLoadBalancerTargetGroups</code> API operation and <code>DescribeTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Gets information about the Elastic Load Balancing target groups for the specified Auto Scaling group.</p> <p>To determine the attachment status of the target group, use the <code>State</code> element in the response. When you attach a target group to an Auto Scaling group, the initial <code>State</code> value is <code>Adding</code>. The state transitions to <code>Added</code> after all Auto Scaling instances are registered with the target group. If Elastic Load Balancing health checks are enabled for the Auto Scaling group, the state transitions to <code>InService</code> after at least one Auto Scaling instance passes the health check. When the target group is in the <code>InService</code> state, Amazon EC2 Auto Scaling can terminate and replace any instances that are reported as unhealthy. If no registered instances pass the health checks, the target group doesn't enter the <code>InService</code> state. </p> <p>Target groups also have an <code>InService</code> state if you attach them in the <a>CreateAutoScalingGroup</a> API call. If your target group state is <code>InService</code>, but it is not working properly, check the scaling activities by calling <a>DescribeScalingActivities</a> and take any corrective actions necessary.</p> <p>For help with failed health checks, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ts-as-healthchecks.html">Troubleshooting Amazon EC2 Auto Scaling: Health checks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p> <note> <p>You can use this operation to describe target groups that were attached by using <a>AttachLoadBalancerTargetGroups</a>, but not for target groups that were attached by using <a>AttachTrafficSources</a>.</p> </note>

> Body parameter

```json
{
  "AutoScalingGroupName": {},
  "NextToken": {},
  "MaxRecords": {}
}
```

<h3 id="postdescribeloadbalancertargetgroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeLoadBalancerTargetGroupsRequest](#schemadescribeloadbalancertargetgroupsrequest)|false|none|
|» AutoScalingGroupName|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxRecords|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeLoadBalancerTargetGroups|
|Version|2011-01-01|

<h3 id="postdescribeloadbalancertargetgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeLoadBalancerTargetGroupsResponse](#schemadescribeloadbalancertargetgroupsresponse)|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|
|481|481|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeLoadBalancers

<a id="opIdGET_DescribeLoadBalancers"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DescribeLoadBalancers?AutoScalingGroupName=string&Action=DescribeLoadBalancers&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeLoadBalancers`

<note> <p>This API operation is superseded by <a>DescribeTrafficSources</a>, which can describe multiple traffic sources types. We recommend using <code>DescribeTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>DescribeLoadBalancers</code>. You can use both the original <code>DescribeLoadBalancers</code> API operation and <code>DescribeTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Gets information about the load balancers for the specified Auto Scaling group.</p> <p>This operation describes only Classic Load Balancers. If you have Application Load Balancers, Network Load Balancers, or Gateway Load Balancers, use the <a>DescribeLoadBalancerTargetGroups</a> API instead.</p> <p>To determine the attachment status of the load balancer, use the <code>State</code> element in the response. When you attach a load balancer to an Auto Scaling group, the initial <code>State</code> value is <code>Adding</code>. The state transitions to <code>Added</code> after all Auto Scaling instances are registered with the load balancer. If Elastic Load Balancing health checks are enabled for the Auto Scaling group, the state transitions to <code>InService</code> after at least one Auto Scaling instance passes the health check. When the load balancer is in the <code>InService</code> state, Amazon EC2 Auto Scaling can terminate and replace any instances that are reported as unhealthy. If no registered instances pass the health checks, the load balancer doesn't enter the <code>InService</code> state. </p> <p>Load balancers also have an <code>InService</code> state if you attach them in the <a>CreateAutoScalingGroup</a> API call. If your load balancer state is <code>InService</code>, but it is not working properly, check the scaling activities by calling <a>DescribeScalingActivities</a> and take any corrective actions necessary.</p> <p>For help with failed health checks, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ts-as-healthchecks.html">Troubleshooting Amazon EC2 Auto Scaling: Health checks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>

<h3 id="getdescribeloadbalancers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AutoScalingGroupName|query|string|true|The name of the Auto Scaling group.|
|NextToken|query|string|false|The token for the next set of items to return. (You received this token from a previous call.)|
|MaxRecords|query|integer|false|The maximum number of items to return with this call. The default value is <code>100</code> and the maximum value is <code>100</code>.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DescribeLoadBalancers|
|Version|2011-01-01|

<h3 id="getdescribeloadbalancers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeLoadBalancersResponse](#schemadescribeloadbalancersresponse)|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|
|481|481|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeLoadBalancers

<a id="opIdPOST_DescribeLoadBalancers"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DescribeLoadBalancers?Action=DescribeLoadBalancers&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AutoScalingGroupName":{},"NextToken":{},"MaxRecords":{}}'
```

`POST /#Action=DescribeLoadBalancers`

<note> <p>This API operation is superseded by <a>DescribeTrafficSources</a>, which can describe multiple traffic sources types. We recommend using <code>DescribeTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>DescribeLoadBalancers</code>. You can use both the original <code>DescribeLoadBalancers</code> API operation and <code>DescribeTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Gets information about the load balancers for the specified Auto Scaling group.</p> <p>This operation describes only Classic Load Balancers. If you have Application Load Balancers, Network Load Balancers, or Gateway Load Balancers, use the <a>DescribeLoadBalancerTargetGroups</a> API instead.</p> <p>To determine the attachment status of the load balancer, use the <code>State</code> element in the response. When you attach a load balancer to an Auto Scaling group, the initial <code>State</code> value is <code>Adding</code>. The state transitions to <code>Added</code> after all Auto Scaling instances are registered with the load balancer. If Elastic Load Balancing health checks are enabled for the Auto Scaling group, the state transitions to <code>InService</code> after at least one Auto Scaling instance passes the health check. When the load balancer is in the <code>InService</code> state, Amazon EC2 Auto Scaling can terminate and replace any instances that are reported as unhealthy. If no registered instances pass the health checks, the load balancer doesn't enter the <code>InService</code> state. </p> <p>Load balancers also have an <code>InService</code> state if you attach them in the <a>CreateAutoScalingGroup</a> API call. If your load balancer state is <code>InService</code>, but it is not working properly, check the scaling activities by calling <a>DescribeScalingActivities</a> and take any corrective actions necessary.</p> <p>For help with failed health checks, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ts-as-healthchecks.html">Troubleshooting Amazon EC2 Auto Scaling: Health checks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>

> Body parameter

```json
{
  "AutoScalingGroupName": {},
  "NextToken": {},
  "MaxRecords": {}
}
```

<h3 id="postdescribeloadbalancers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeLoadBalancersRequest](#schemadescribeloadbalancersrequest)|false|none|
|» AutoScalingGroupName|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxRecords|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeLoadBalancers|
|Version|2011-01-01|

<h3 id="postdescribeloadbalancers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeLoadBalancersResponse](#schemadescribeloadbalancersresponse)|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|
|481|481|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeMetricCollectionTypes

<a id="opIdGET_DescribeMetricCollectionTypes"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DescribeMetricCollectionTypes?Action=DescribeMetricCollectionTypes&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeMetricCollectionTypes`

Describes the available CloudWatch metrics for Amazon EC2 Auto Scaling.

<h3 id="getdescribemetriccollectiontypes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DescribeMetricCollectionTypes|
|Version|2011-01-01|

<h3 id="getdescribemetriccollectiontypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeMetricCollectionTypesAnswer](#schemadescribemetriccollectiontypesanswer)|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeMetricCollectionTypes

<a id="opIdPOST_DescribeMetricCollectionTypes"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DescribeMetricCollectionTypes?Action=DescribeMetricCollectionTypes&Version=2011-01-01' \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /#Action=DescribeMetricCollectionTypes`

Describes the available CloudWatch metrics for Amazon EC2 Auto Scaling.

<h3 id="postdescribemetriccollectiontypes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DescribeMetricCollectionTypes|
|Version|2011-01-01|

<h3 id="postdescribemetriccollectiontypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeMetricCollectionTypesAnswer](#schemadescribemetriccollectiontypesanswer)|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeNotificationConfigurations

<a id="opIdGET_DescribeNotificationConfigurations"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DescribeNotificationConfigurations?Action=DescribeNotificationConfigurations&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeNotificationConfigurations`

Gets information about the Amazon SNS notifications that are configured for one or more Auto Scaling groups.

<h3 id="getdescribenotificationconfigurations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AutoScalingGroupNames|query|[[XmlStringMaxLen255](#schemaxmlstringmaxlen255)]|false|The name of the Auto Scaling group.|
|NextToken|query|string|false|The token for the next set of items to return. (You received this token from a previous call.)|
|MaxRecords|query|integer|false|The maximum number of items to return with this call. The default value is <code>50</code> and the maximum value is <code>100</code>.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DescribeNotificationConfigurations|
|Version|2011-01-01|

<h3 id="getdescribenotificationconfigurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeNotificationConfigurationsAnswer](#schemadescribenotificationconfigurationsanswer)|
|480|480|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|
|481|481|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeNotificationConfigurations

<a id="opIdPOST_DescribeNotificationConfigurations"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DescribeNotificationConfigurations?Action=DescribeNotificationConfigurations&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AutoScalingGroupNames":{},"NextToken":{},"MaxRecords":{}}'
```

`POST /#Action=DescribeNotificationConfigurations`

Gets information about the Amazon SNS notifications that are configured for one or more Auto Scaling groups.

> Body parameter

```json
{
  "AutoScalingGroupNames": {},
  "NextToken": {},
  "MaxRecords": {}
}
```

<h3 id="postdescribenotificationconfigurations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeNotificationConfigurationsType](#schemadescribenotificationconfigurationstype)|false|none|
|» AutoScalingGroupNames|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxRecords|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeNotificationConfigurations|
|Version|2011-01-01|

<h3 id="postdescribenotificationconfigurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeNotificationConfigurationsAnswer](#schemadescribenotificationconfigurationsanswer)|
|480|480|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|
|481|481|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribePolicies

<a id="opIdGET_DescribePolicies"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DescribePolicies?Action=DescribePolicies&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribePolicies`

Gets information about the scaling policies in the account and Region.

<h3 id="getdescribepolicies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AutoScalingGroupName|query|string|false|The name of the Auto Scaling group.|
|PolicyNames|query|[[ResourceName](#schemaresourcename)]|false|<p>The names of one or more policies. If you omit this property, all policies are described. If a group name is provided, the results are limited to that group. If you specify an unknown policy name, it is ignored with no error.</p> <p>Array Members: Maximum number of 50 items.</p>|
|PolicyTypes|query|[[XmlStringMaxLen64](#schemaxmlstringmaxlen64)]|false|One or more policy types. The valid values are <code>SimpleScaling</code>, <code>StepScaling</code>, <code>TargetTrackingScaling</code>, and <code>PredictiveScaling</code>.|
|NextToken|query|string|false|The token for the next set of items to return. (You received this token from a previous call.)|
|MaxRecords|query|integer|false|The maximum number of items to be returned with each call. The default value is <code>50</code> and the maximum value is <code>100</code>.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DescribePolicies|
|Version|2011-01-01|

<h3 id="getdescribepolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PoliciesType](#schemapoliciestype)|
|480|480|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|
|481|481|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|
|482|482|ServiceLinkedRoleFailure|[ServiceLinkedRoleFailure](#schemaservicelinkedrolefailure)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribePolicies

<a id="opIdPOST_DescribePolicies"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DescribePolicies?Action=DescribePolicies&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AutoScalingGroupName":{},"PolicyNames":{},"PolicyTypes":{},"NextToken":{},"MaxRecords":{}}'
```

`POST /#Action=DescribePolicies`

Gets information about the scaling policies in the account and Region.

> Body parameter

```json
{
  "AutoScalingGroupName": {},
  "PolicyNames": {},
  "PolicyTypes": {},
  "NextToken": {},
  "MaxRecords": {}
}
```

<h3 id="postdescribepolicies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribePoliciesType](#schemadescribepoliciestype)|false|none|
|» AutoScalingGroupName|body|object|false|none|
|» PolicyNames|body|object|false|none|
|» PolicyTypes|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxRecords|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribePolicies|
|Version|2011-01-01|

<h3 id="postdescribepolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PoliciesType](#schemapoliciestype)|
|480|480|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|
|481|481|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|
|482|482|ServiceLinkedRoleFailure|[ServiceLinkedRoleFailure](#schemaservicelinkedrolefailure)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeScalingActivities

<a id="opIdGET_DescribeScalingActivities"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DescribeScalingActivities?Action=DescribeScalingActivities&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeScalingActivities`

<p>Gets information about the scaling activities in the account and Region.</p> <p>When scaling events occur, you see a record of the scaling activity in the scaling activities. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-verify-scaling-activity.html">Verifying a scaling activity for an Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If the scaling event succeeds, the value of the <code>StatusCode</code> element in the response is <code>Successful</code>. If an attempt to launch instances failed, the <code>StatusCode</code> value is <code>Failed</code> or <code>Cancelled</code> and the <code>StatusMessage</code> element in the response indicates the cause of the failure. For help interpreting the <code>StatusMessage</code>, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/CHAP_Troubleshooting.html">Troubleshooting Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>

<h3 id="getdescribescalingactivities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ActivityIds|query|[[XmlString](#schemaxmlstring)]|false|<p>The activity IDs of the desired scaling activities. If you omit this property, all activities for the past six weeks are described. If unknown activities are requested, they are ignored with no error. If you specify an Auto Scaling group, the results are limited to that group.</p> <p>Array Members: Maximum number of 50 IDs.</p>|
|AutoScalingGroupName|query|string|false|The name of the Auto Scaling group.|
|IncludeDeletedGroups|query|boolean|false|Indicates whether to include scaling activity from deleted Auto Scaling groups.|
|MaxRecords|query|integer|false|The maximum number of items to return with this call. The default value is <code>100</code> and the maximum value is <code>100</code>.|
|NextToken|query|string|false|The token for the next set of items to return. (You received this token from a previous call.)|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DescribeScalingActivities|
|Version|2011-01-01|

<h3 id="getdescribescalingactivities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ActivitiesType](#schemaactivitiestype)|
|480|480|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|
|481|481|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeScalingActivities

<a id="opIdPOST_DescribeScalingActivities"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DescribeScalingActivities?Action=DescribeScalingActivities&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ActivityIds":{},"AutoScalingGroupName":{},"IncludeDeletedGroups":{},"MaxRecords":{},"NextToken":{}}'
```

`POST /#Action=DescribeScalingActivities`

<p>Gets information about the scaling activities in the account and Region.</p> <p>When scaling events occur, you see a record of the scaling activity in the scaling activities. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-verify-scaling-activity.html">Verifying a scaling activity for an Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If the scaling event succeeds, the value of the <code>StatusCode</code> element in the response is <code>Successful</code>. If an attempt to launch instances failed, the <code>StatusCode</code> value is <code>Failed</code> or <code>Cancelled</code> and the <code>StatusMessage</code> element in the response indicates the cause of the failure. For help interpreting the <code>StatusMessage</code>, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/CHAP_Troubleshooting.html">Troubleshooting Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>

> Body parameter

```json
{
  "ActivityIds": {},
  "AutoScalingGroupName": {},
  "IncludeDeletedGroups": {},
  "MaxRecords": {},
  "NextToken": {}
}
```

<h3 id="postdescribescalingactivities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeScalingActivitiesType](#schemadescribescalingactivitiestype)|false|none|
|» ActivityIds|body|object|false|none|
|» AutoScalingGroupName|body|object|false|none|
|» IncludeDeletedGroups|body|object|false|none|
|» MaxRecords|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeScalingActivities|
|Version|2011-01-01|

<h3 id="postdescribescalingactivities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ActivitiesType](#schemaactivitiestype)|
|480|480|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|
|481|481|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeScalingProcessTypes

<a id="opIdGET_DescribeScalingProcessTypes"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DescribeScalingProcessTypes?Action=DescribeScalingProcessTypes&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeScalingProcessTypes`

Describes the scaling process types for use with the <a>ResumeProcesses</a> and <a>SuspendProcesses</a> APIs.

<h3 id="getdescribescalingprocesstypes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DescribeScalingProcessTypes|
|Version|2011-01-01|

<h3 id="getdescribescalingprocesstypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ProcessesType](#schemaprocessestype)|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeScalingProcessTypes

<a id="opIdPOST_DescribeScalingProcessTypes"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DescribeScalingProcessTypes?Action=DescribeScalingProcessTypes&Version=2011-01-01' \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /#Action=DescribeScalingProcessTypes`

Describes the scaling process types for use with the <a>ResumeProcesses</a> and <a>SuspendProcesses</a> APIs.

<h3 id="postdescribescalingprocesstypes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DescribeScalingProcessTypes|
|Version|2011-01-01|

<h3 id="postdescribescalingprocesstypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ProcessesType](#schemaprocessestype)|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeScheduledActions

<a id="opIdGET_DescribeScheduledActions"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DescribeScheduledActions?Action=DescribeScheduledActions&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeScheduledActions`

<p>Gets information about the scheduled actions that haven't run or that have not reached their end time.</p> <p>To describe the scaling activities for scheduled actions that have already run, call the <a>DescribeScalingActivities</a> API.</p>

<h3 id="getdescribescheduledactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AutoScalingGroupName|query|string|false|The name of the Auto Scaling group.|
|ScheduledActionNames|query|[[XmlStringMaxLen255](#schemaxmlstringmaxlen255)]|false|<p>The names of one or more scheduled actions. If you omit this property, all scheduled actions are described. If you specify an unknown scheduled action, it is ignored with no error.</p> <p>Array Members: Maximum number of 50 actions.</p>|
|StartTime|query|string(date-time)|false|The earliest scheduled start time to return. If scheduled action names are provided, this property is ignored.|
|EndTime|query|string(date-time)|false|The latest scheduled start time to return. If scheduled action names are provided, this property is ignored.|
|NextToken|query|string|false|The token for the next set of items to return. (You received this token from a previous call.)|
|MaxRecords|query|integer|false|The maximum number of items to return with this call. The default value is <code>50</code> and the maximum value is <code>100</code>.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DescribeScheduledActions|
|Version|2011-01-01|

<h3 id="getdescribescheduledactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ScheduledActionsType](#schemascheduledactionstype)|
|480|480|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|
|481|481|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeScheduledActions

<a id="opIdPOST_DescribeScheduledActions"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DescribeScheduledActions?Action=DescribeScheduledActions&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AutoScalingGroupName":{},"ScheduledActionNames":{},"StartTime":{},"EndTime":{},"NextToken":{},"MaxRecords":{}}'
```

`POST /#Action=DescribeScheduledActions`

<p>Gets information about the scheduled actions that haven't run or that have not reached their end time.</p> <p>To describe the scaling activities for scheduled actions that have already run, call the <a>DescribeScalingActivities</a> API.</p>

> Body parameter

```json
{
  "AutoScalingGroupName": {},
  "ScheduledActionNames": {},
  "StartTime": {},
  "EndTime": {},
  "NextToken": {},
  "MaxRecords": {}
}
```

<h3 id="postdescribescheduledactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeScheduledActionsType](#schemadescribescheduledactionstype)|false|none|
|» AutoScalingGroupName|body|object|false|none|
|» ScheduledActionNames|body|object|false|none|
|» StartTime|body|object|false|none|
|» EndTime|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxRecords|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeScheduledActions|
|Version|2011-01-01|

<h3 id="postdescribescheduledactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ScheduledActionsType](#schemascheduledactionstype)|
|480|480|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|
|481|481|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeTags

<a id="opIdGET_DescribeTags"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DescribeTags?Action=DescribeTags&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeTags`

<p>Describes the specified tags.</p> <p>You can use filters to limit the results. For example, you can query for the tags for a specific Auto Scaling group. You can specify multiple values for a filter. A tag must match at least one of the specified values for it to be included in the results.</p> <p>You can also specify multiple filters. The result includes information for a particular tag only if it matches all the filters. If there's no match, no special message is returned.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-tagging.html">Tag Auto Scaling groups and instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

<h3 id="getdescribetags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Filters|query|[[Filter](#schemafilter)]|false|One or more filters to scope the tags to return. The maximum number of filters per filter type (for example, <code>auto-scaling-group</code>) is 1000.|
|NextToken|query|string|false|The token for the next set of items to return. (You received this token from a previous call.)|
|MaxRecords|query|integer|false|The maximum number of items to return with this call. The default value is <code>50</code> and the maximum value is <code>100</code>.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DescribeTags|
|Version|2011-01-01|

<h3 id="getdescribetags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagsType](#schematagstype)|
|480|480|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|
|481|481|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeTags

<a id="opIdPOST_DescribeTags"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DescribeTags?Action=DescribeTags&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Filters":{},"NextToken":{},"MaxRecords":{}}'
```

`POST /#Action=DescribeTags`

<p>Describes the specified tags.</p> <p>You can use filters to limit the results. For example, you can query for the tags for a specific Auto Scaling group. You can specify multiple values for a filter. A tag must match at least one of the specified values for it to be included in the results.</p> <p>You can also specify multiple filters. The result includes information for a particular tag only if it matches all the filters. If there's no match, no special message is returned.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-tagging.html">Tag Auto Scaling groups and instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

> Body parameter

```json
{
  "Filters": {},
  "NextToken": {},
  "MaxRecords": {}
}
```

<h3 id="postdescribetags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeTagsType](#schemadescribetagstype)|false|none|
|» Filters|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxRecords|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeTags|
|Version|2011-01-01|

<h3 id="postdescribetags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagsType](#schematagstype)|
|480|480|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|
|481|481|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeTerminationPolicyTypes

<a id="opIdGET_DescribeTerminationPolicyTypes"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DescribeTerminationPolicyTypes?Action=DescribeTerminationPolicyTypes&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeTerminationPolicyTypes`

<p>Describes the termination policies supported by Amazon EC2 Auto Scaling.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-termination-policies.html">Work with Amazon EC2 Auto Scaling termination policies</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

<h3 id="getdescribeterminationpolicytypes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DescribeTerminationPolicyTypes|
|Version|2011-01-01|

<h3 id="getdescribeterminationpolicytypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTerminationPolicyTypesAnswer](#schemadescribeterminationpolicytypesanswer)|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeTerminationPolicyTypes

<a id="opIdPOST_DescribeTerminationPolicyTypes"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DescribeTerminationPolicyTypes?Action=DescribeTerminationPolicyTypes&Version=2011-01-01' \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /#Action=DescribeTerminationPolicyTypes`

<p>Describes the termination policies supported by Amazon EC2 Auto Scaling.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-termination-policies.html">Work with Amazon EC2 Auto Scaling termination policies</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

<h3 id="postdescribeterminationpolicytypes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DescribeTerminationPolicyTypes|
|Version|2011-01-01|

<h3 id="postdescribeterminationpolicytypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTerminationPolicyTypesAnswer](#schemadescribeterminationpolicytypesanswer)|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeTrafficSources

<a id="opIdGET_DescribeTrafficSources"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DescribeTrafficSources?AutoScalingGroupName=string&Action=DescribeTrafficSources&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeTrafficSources`

<p>Gets information about the traffic sources for the specified Auto Scaling group.</p> <p>You can optionally provide a traffic source type. If you provide a traffic source type, then the results only include that traffic source type.</p> <p>If you do not provide a traffic source type, then the results include all the traffic sources for the specified Auto Scaling group. </p>

<h3 id="getdescribetrafficsources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AutoScalingGroupName|query|string|true|The name of the Auto Scaling group.|
|TrafficSourceType|query|string|false|<p>The traffic source type that you want to describe.</p> <p>The following lists the valid values:</p> <ul> <li> <p> <code>elb</code> if the traffic source is a Classic Load Balancer.</p> </li> <li> <p> <code>elbv2</code> if the traffic source is a Application Load Balancer, Gateway Load Balancer, or Network Load Balancer.</p> </li> <li> <p> <code>vpc-lattice</code> if the traffic source is VPC Lattice.</p> </li> </ul>|
|NextToken|query|string|false|The token for the next set of items to return. (You received this token from a previous call.)|
|MaxRecords|query|integer|false|The maximum number of items to return with this call. The maximum value is <code>50</code>.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DescribeTrafficSources|
|Version|2011-01-01|

<h3 id="getdescribetrafficsources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTrafficSourcesResponse](#schemadescribetrafficsourcesresponse)|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|
|481|481|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeTrafficSources

<a id="opIdPOST_DescribeTrafficSources"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DescribeTrafficSources?Action=DescribeTrafficSources&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AutoScalingGroupName":{},"TrafficSourceType":{},"NextToken":{},"MaxRecords":{}}'
```

`POST /#Action=DescribeTrafficSources`

<p>Gets information about the traffic sources for the specified Auto Scaling group.</p> <p>You can optionally provide a traffic source type. If you provide a traffic source type, then the results only include that traffic source type.</p> <p>If you do not provide a traffic source type, then the results include all the traffic sources for the specified Auto Scaling group. </p>

> Body parameter

```json
{
  "AutoScalingGroupName": {},
  "TrafficSourceType": {},
  "NextToken": {},
  "MaxRecords": {}
}
```

<h3 id="postdescribetrafficsources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeTrafficSourcesRequest](#schemadescribetrafficsourcesrequest)|false|none|
|» AutoScalingGroupName|body|object|true|none|
|» TrafficSourceType|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxRecords|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeTrafficSources|
|Version|2011-01-01|

<h3 id="postdescribetrafficsources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTrafficSourcesResponse](#schemadescribetrafficsourcesresponse)|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|
|481|481|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeWarmPool

<a id="opIdGET_DescribeWarmPool"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DescribeWarmPool?AutoScalingGroupName=string&Action=DescribeWarmPool&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeWarmPool`

<p>Gets information about a warm pool and its instances.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html">Warm pools for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

<h3 id="getdescribewarmpool-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AutoScalingGroupName|query|string|true|The name of the Auto Scaling group.|
|MaxRecords|query|integer|false|The maximum number of instances to return with this call. The maximum value is <code>50</code>.|
|NextToken|query|string|false|The token for the next set of instances to return. (You received this token from a previous call.)|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DescribeWarmPool|
|Version|2011-01-01|

<h3 id="getdescribewarmpool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeWarmPoolAnswer](#schemadescribewarmpoolanswer)|
|480|480|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|
|481|481|LimitExceededFault|[LimitExceededFault](#schemalimitexceededfault)|
|482|482|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeWarmPool

<a id="opIdPOST_DescribeWarmPool"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DescribeWarmPool?Action=DescribeWarmPool&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AutoScalingGroupName":{},"MaxRecords":{},"NextToken":{}}'
```

`POST /#Action=DescribeWarmPool`

<p>Gets information about a warm pool and its instances.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html">Warm pools for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

> Body parameter

```json
{
  "AutoScalingGroupName": {},
  "MaxRecords": {},
  "NextToken": {}
}
```

<h3 id="postdescribewarmpool-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeWarmPoolType](#schemadescribewarmpooltype)|false|none|
|» AutoScalingGroupName|body|object|true|none|
|» MaxRecords|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeWarmPool|
|Version|2011-01-01|

<h3 id="postdescribewarmpool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeWarmPoolAnswer](#schemadescribewarmpoolanswer)|
|480|480|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|
|481|481|LimitExceededFault|[LimitExceededFault](#schemalimitexceededfault)|
|482|482|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DetachInstances

<a id="opIdGET_DetachInstances"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DetachInstances?AutoScalingGroupName=string&ShouldDecrementDesiredCapacity=true&Action=DetachInstances&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DetachInstances`

<p>Removes one or more instances from the specified Auto Scaling group.</p> <p>After the instances are detached, you can manage them independent of the Auto Scaling group.</p> <p>If you do not specify the option to decrement the desired capacity, Amazon EC2 Auto Scaling launches instances to replace the ones that are detached.</p> <p>If there is a Classic Load Balancer attached to the Auto Scaling group, the instances are deregistered from the load balancer. If there are target groups attached to the Auto Scaling group, the instances are deregistered from the target groups.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/detach-instance-asg.html">Detach EC2 instances from your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

<h3 id="getdetachinstances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceIds|query|[[XmlStringMaxLen19](#schemaxmlstringmaxlen19)]|false|The IDs of the instances. You can specify up to 20 instances.|
|AutoScalingGroupName|query|string|true|The name of the Auto Scaling group.|
|ShouldDecrementDesiredCapacity|query|boolean|true|Indicates whether the Auto Scaling group decrements the desired capacity value by the number of instances detached.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DetachInstances|
|Version|2011-01-01|

<h3 id="getdetachinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DetachInstancesAnswer](#schemadetachinstancesanswer)|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DetachInstances

<a id="opIdPOST_DetachInstances"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DetachInstances?Action=DetachInstances&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"InstanceIds":{},"AutoScalingGroupName":{},"ShouldDecrementDesiredCapacity":{}}'
```

`POST /#Action=DetachInstances`

<p>Removes one or more instances from the specified Auto Scaling group.</p> <p>After the instances are detached, you can manage them independent of the Auto Scaling group.</p> <p>If you do not specify the option to decrement the desired capacity, Amazon EC2 Auto Scaling launches instances to replace the ones that are detached.</p> <p>If there is a Classic Load Balancer attached to the Auto Scaling group, the instances are deregistered from the load balancer. If there are target groups attached to the Auto Scaling group, the instances are deregistered from the target groups.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/detach-instance-asg.html">Detach EC2 instances from your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

> Body parameter

```json
{
  "InstanceIds": {},
  "AutoScalingGroupName": {},
  "ShouldDecrementDesiredCapacity": {}
}
```

<h3 id="postdetachinstances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DetachInstancesQuery](#schemadetachinstancesquery)|false|none|
|» InstanceIds|body|object|false|none|
|» AutoScalingGroupName|body|object|true|none|
|» ShouldDecrementDesiredCapacity|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DetachInstances|
|Version|2011-01-01|

<h3 id="postdetachinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DetachInstancesAnswer](#schemadetachinstancesanswer)|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DetachLoadBalancerTargetGroups

<a id="opIdGET_DetachLoadBalancerTargetGroups"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DetachLoadBalancerTargetGroups?AutoScalingGroupName=string&TargetGroupARNs=string&Action=DetachLoadBalancerTargetGroups&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DetachLoadBalancerTargetGroups`

<note> <p>This API operation is superseded by <a>DetachTrafficSources</a>, which can detach multiple traffic sources types. We recommend using <code>DetachTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>DetachLoadBalancerTargetGroups</code>. You can use both the original <code>DetachLoadBalancerTargetGroups</code> API operation and <code>DetachTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Detaches one or more target groups from the specified Auto Scaling group.</p> <p>When you detach a target group, it enters the <code>Removing</code> state while deregistering the instances in the group. When all instances are deregistered, then you can no longer describe the target group using the <a>DescribeLoadBalancerTargetGroups</a> API call. The instances remain running.</p> <note> <p>You can use this operation to detach target groups that were attached by using <a>AttachLoadBalancerTargetGroups</a>, but not for target groups that were attached by using <a>AttachTrafficSources</a>.</p> </note>

<h3 id="getdetachloadbalancertargetgroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AutoScalingGroupName|query|string|true|The name of the Auto Scaling group.|
|TargetGroupARNs|query|[[XmlStringMaxLen511](#schemaxmlstringmaxlen511)]|true|The Amazon Resource Names (ARN) of the target groups. You can specify up to 10 target groups.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DetachLoadBalancerTargetGroups|
|Version|2011-01-01|

<h3 id="getdetachloadbalancertargetgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DetachLoadBalancerTargetGroupsResultType](#schemadetachloadbalancertargetgroupsresulttype)|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DetachLoadBalancerTargetGroups

<a id="opIdPOST_DetachLoadBalancerTargetGroups"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DetachLoadBalancerTargetGroups?Action=DetachLoadBalancerTargetGroups&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AutoScalingGroupName":{},"TargetGroupARNs":{}}'
```

`POST /#Action=DetachLoadBalancerTargetGroups`

<note> <p>This API operation is superseded by <a>DetachTrafficSources</a>, which can detach multiple traffic sources types. We recommend using <code>DetachTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>DetachLoadBalancerTargetGroups</code>. You can use both the original <code>DetachLoadBalancerTargetGroups</code> API operation and <code>DetachTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Detaches one or more target groups from the specified Auto Scaling group.</p> <p>When you detach a target group, it enters the <code>Removing</code> state while deregistering the instances in the group. When all instances are deregistered, then you can no longer describe the target group using the <a>DescribeLoadBalancerTargetGroups</a> API call. The instances remain running.</p> <note> <p>You can use this operation to detach target groups that were attached by using <a>AttachLoadBalancerTargetGroups</a>, but not for target groups that were attached by using <a>AttachTrafficSources</a>.</p> </note>

> Body parameter

```json
{
  "AutoScalingGroupName": {},
  "TargetGroupARNs": {}
}
```

<h3 id="postdetachloadbalancertargetgroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DetachLoadBalancerTargetGroupsType](#schemadetachloadbalancertargetgroupstype)|false|none|
|» AutoScalingGroupName|body|object|true|none|
|» TargetGroupARNs|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DetachLoadBalancerTargetGroups|
|Version|2011-01-01|

<h3 id="postdetachloadbalancertargetgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DetachLoadBalancerTargetGroupsResultType](#schemadetachloadbalancertargetgroupsresulttype)|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DetachLoadBalancers

<a id="opIdGET_DetachLoadBalancers"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DetachLoadBalancers?AutoScalingGroupName=string&LoadBalancerNames=string&Action=DetachLoadBalancers&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DetachLoadBalancers`

<note> <p>This API operation is superseded by <a>DetachTrafficSources</a>, which can detach multiple traffic sources types. We recommend using <code>DetachTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>DetachLoadBalancers</code>. You can use both the original <code>DetachLoadBalancers</code> API operation and <code>DetachTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Detaches one or more Classic Load Balancers from the specified Auto Scaling group.</p> <p>This operation detaches only Classic Load Balancers. If you have Application Load Balancers, Network Load Balancers, or Gateway Load Balancers, use the <a>DetachLoadBalancerTargetGroups</a> API instead.</p> <p>When you detach a load balancer, it enters the <code>Removing</code> state while deregistering the instances in the group. When all instances are deregistered, then you can no longer describe the load balancer using the <a>DescribeLoadBalancers</a> API call. The instances remain running.</p>

<h3 id="getdetachloadbalancers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AutoScalingGroupName|query|string|true|The name of the Auto Scaling group.|
|LoadBalancerNames|query|[[XmlStringMaxLen255](#schemaxmlstringmaxlen255)]|true|The names of the load balancers. You can specify up to 10 load balancers.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DetachLoadBalancers|
|Version|2011-01-01|

<h3 id="getdetachloadbalancers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DetachLoadBalancersResultType](#schemadetachloadbalancersresulttype)|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DetachLoadBalancers

<a id="opIdPOST_DetachLoadBalancers"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DetachLoadBalancers?Action=DetachLoadBalancers&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AutoScalingGroupName":{},"LoadBalancerNames":{}}'
```

`POST /#Action=DetachLoadBalancers`

<note> <p>This API operation is superseded by <a>DetachTrafficSources</a>, which can detach multiple traffic sources types. We recommend using <code>DetachTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>DetachLoadBalancers</code>. You can use both the original <code>DetachLoadBalancers</code> API operation and <code>DetachTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Detaches one or more Classic Load Balancers from the specified Auto Scaling group.</p> <p>This operation detaches only Classic Load Balancers. If you have Application Load Balancers, Network Load Balancers, or Gateway Load Balancers, use the <a>DetachLoadBalancerTargetGroups</a> API instead.</p> <p>When you detach a load balancer, it enters the <code>Removing</code> state while deregistering the instances in the group. When all instances are deregistered, then you can no longer describe the load balancer using the <a>DescribeLoadBalancers</a> API call. The instances remain running.</p>

> Body parameter

```json
{
  "AutoScalingGroupName": {},
  "LoadBalancerNames": {}
}
```

<h3 id="postdetachloadbalancers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DetachLoadBalancersType](#schemadetachloadbalancerstype)|false|none|
|» AutoScalingGroupName|body|object|true|none|
|» LoadBalancerNames|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DetachLoadBalancers|
|Version|2011-01-01|

<h3 id="postdetachloadbalancers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DetachLoadBalancersResultType](#schemadetachloadbalancersresulttype)|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DetachTrafficSources

<a id="opIdGET_DetachTrafficSources"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DetachTrafficSources?AutoScalingGroupName=string&TrafficSources=%7B%22Identifier%22%3A%7B%7D%2C%22Type%22%3A%7B%7D%7D&Action=DetachTrafficSources&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DetachTrafficSources`

<p>Detaches one or more traffic sources from the specified Auto Scaling group.</p> <p>When you detach a traffic source, it enters the <code>Removing</code> state while deregistering the instances in the group. When all instances are deregistered, then you can no longer describe the traffic source using the <a>DescribeTrafficSources</a> API call. The instances continue to run.</p>

<h3 id="getdetachtrafficsources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AutoScalingGroupName|query|string|true|The name of the Auto Scaling group.|
|TrafficSources|query|[[TrafficSourceIdentifier](#schematrafficsourceidentifier)]|true|The unique identifiers of one or more traffic sources. You can specify up to 10 traffic sources.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DetachTrafficSources|
|Version|2011-01-01|

<h3 id="getdetachtrafficsources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DetachTrafficSourcesResultType](#schemadetachtrafficsourcesresulttype)|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DetachTrafficSources

<a id="opIdPOST_DetachTrafficSources"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DetachTrafficSources?Action=DetachTrafficSources&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AutoScalingGroupName":{},"TrafficSources":{}}'
```

`POST /#Action=DetachTrafficSources`

<p>Detaches one or more traffic sources from the specified Auto Scaling group.</p> <p>When you detach a traffic source, it enters the <code>Removing</code> state while deregistering the instances in the group. When all instances are deregistered, then you can no longer describe the traffic source using the <a>DescribeTrafficSources</a> API call. The instances continue to run.</p>

> Body parameter

```json
{
  "AutoScalingGroupName": {},
  "TrafficSources": {}
}
```

<h3 id="postdetachtrafficsources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DetachTrafficSourcesType](#schemadetachtrafficsourcestype)|false|none|
|» AutoScalingGroupName|body|object|true|none|
|» TrafficSources|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DetachTrafficSources|
|Version|2011-01-01|

<h3 id="postdetachtrafficsources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DetachTrafficSourcesResultType](#schemadetachtrafficsourcesresulttype)|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DisableMetricsCollection

<a id="opIdGET_DisableMetricsCollection"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DisableMetricsCollection?AutoScalingGroupName=string&Action=DisableMetricsCollection&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DisableMetricsCollection`

Disables group metrics collection for the specified Auto Scaling group.

<h3 id="getdisablemetricscollection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AutoScalingGroupName|query|string|true|The name of the Auto Scaling group.|
|Metrics|query|[[XmlStringMaxLen255](#schemaxmlstringmaxlen255)]|false|<p>Identifies the metrics to disable.</p> <p>You can specify one or more of the following metrics:</p> <ul> <li> <p> <code>GroupMinSize</code> </p> </li> <li> <p> <code>GroupMaxSize</code> </p> </li> <li> <p> <code>GroupDesiredCapacity</code> </p> </li> <li> <p> <code>GroupInServiceInstances</code> </p> </li> <li> <p> <code>GroupPendingInstances</code> </p> </li> <li> <p> <code>GroupStandbyInstances</code> </p> </li> <li> <p> <code>GroupTerminatingInstances</code> </p> </li> <li> <p> <code>GroupTotalInstances</code> </p> </li> <li> <p> <code>GroupInServiceCapacity</code> </p> </li> <li> <p> <code>GroupPendingCapacity</code> </p> </li> <li> <p> <code>GroupStandbyCapacity</code> </p> </li> <li> <p> <code>GroupTerminatingCapacity</code> </p> </li> <li> <p> <code>GroupTotalCapacity</code> </p> </li> <li> <p> <code>WarmPoolDesiredCapacity</code> </p> </li> <li> <p> <code>WarmPoolWarmedCapacity</code> </p> </li> <li> <p> <code>WarmPoolPendingCapacity</code> </p> </li> <li> <p> <code>WarmPoolTerminatingCapacity</code> </p> </li> <li> <p> <code>WarmPoolTotalCapacity</code> </p> </li> <li> <p> <code>GroupAndWarmPoolDesiredCapacity</code> </p> </li> <li> <p> <code>GroupAndWarmPoolTotalCapacity</code> </p> </li> </ul> <p>If you omit this property, all metrics are disabled.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-cloudwatch-monitoring.html#as-group-metrics">Auto Scaling group metrics</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DisableMetricsCollection|
|Version|2011-01-01|

<h3 id="getdisablemetricscollection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DisableMetricsCollection

<a id="opIdPOST_DisableMetricsCollection"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=DisableMetricsCollection?Action=DisableMetricsCollection&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AutoScalingGroupName":{},"Metrics":{}}'
```

`POST /#Action=DisableMetricsCollection`

Disables group metrics collection for the specified Auto Scaling group.

> Body parameter

```json
{
  "AutoScalingGroupName": {},
  "Metrics": {}
}
```

<h3 id="postdisablemetricscollection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DisableMetricsCollectionQuery](#schemadisablemetricscollectionquery)|false|none|
|» AutoScalingGroupName|body|object|true|none|
|» Metrics|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DisableMetricsCollection|
|Version|2011-01-01|

<h3 id="postdisablemetricscollection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_EnableMetricsCollection

<a id="opIdGET_EnableMetricsCollection"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=EnableMetricsCollection?AutoScalingGroupName=string&Granularity=string&Action=EnableMetricsCollection&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=EnableMetricsCollection`

<p>Enables group metrics collection for the specified Auto Scaling group.</p> <p>You can use these metrics to track changes in an Auto Scaling group and to set alarms on threshold values. You can view group metrics using the Amazon EC2 Auto Scaling console or the CloudWatch console. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-cloudwatch-monitoring.html">Monitor CloudWatch metrics for your Auto Scaling groups and instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

<h3 id="getenablemetricscollection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AutoScalingGroupName|query|string|true|The name of the Auto Scaling group.|
|Metrics|query|[[XmlStringMaxLen255](#schemaxmlstringmaxlen255)]|false|<p>Identifies the metrics to enable.</p> <p>You can specify one or more of the following metrics:</p> <ul> <li> <p> <code>GroupMinSize</code> </p> </li> <li> <p> <code>GroupMaxSize</code> </p> </li> <li> <p> <code>GroupDesiredCapacity</code> </p> </li> <li> <p> <code>GroupInServiceInstances</code> </p> </li> <li> <p> <code>GroupPendingInstances</code> </p> </li> <li> <p> <code>GroupStandbyInstances</code> </p> </li> <li> <p> <code>GroupTerminatingInstances</code> </p> </li> <li> <p> <code>GroupTotalInstances</code> </p> </li> <li> <p> <code>GroupInServiceCapacity</code> </p> </li> <li> <p> <code>GroupPendingCapacity</code> </p> </li> <li> <p> <code>GroupStandbyCapacity</code> </p> </li> <li> <p> <code>GroupTerminatingCapacity</code> </p> </li> <li> <p> <code>GroupTotalCapacity</code> </p> </li> <li> <p> <code>WarmPoolDesiredCapacity</code> </p> </li> <li> <p> <code>WarmPoolWarmedCapacity</code> </p> </li> <li> <p> <code>WarmPoolPendingCapacity</code> </p> </li> <li> <p> <code>WarmPoolTerminatingCapacity</code> </p> </li> <li> <p> <code>WarmPoolTotalCapacity</code> </p> </li> <li> <p> <code>GroupAndWarmPoolDesiredCapacity</code> </p> </li> <li> <p> <code>GroupAndWarmPoolTotalCapacity</code> </p> </li> </ul> <p>If you specify <code>Granularity</code> and don't specify any metrics, all metrics are enabled.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-cloudwatch-monitoring.html#as-group-metrics">Auto Scaling group metrics</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>|
|Granularity|query|string|true|The frequency at which Amazon EC2 Auto Scaling sends aggregated data to CloudWatch. The only valid value is <code>1Minute</code>.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|EnableMetricsCollection|
|Version|2011-01-01|

<h3 id="getenablemetricscollection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_EnableMetricsCollection

<a id="opIdPOST_EnableMetricsCollection"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=EnableMetricsCollection?Action=EnableMetricsCollection&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AutoScalingGroupName":{},"Metrics":{},"Granularity":{}}'
```

`POST /#Action=EnableMetricsCollection`

<p>Enables group metrics collection for the specified Auto Scaling group.</p> <p>You can use these metrics to track changes in an Auto Scaling group and to set alarms on threshold values. You can view group metrics using the Amazon EC2 Auto Scaling console or the CloudWatch console. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-cloudwatch-monitoring.html">Monitor CloudWatch metrics for your Auto Scaling groups and instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

> Body parameter

```json
{
  "AutoScalingGroupName": {},
  "Metrics": {},
  "Granularity": {}
}
```

<h3 id="postenablemetricscollection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[EnableMetricsCollectionQuery](#schemaenablemetricscollectionquery)|false|none|
|» AutoScalingGroupName|body|object|true|none|
|» Metrics|body|object|false|none|
|» Granularity|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|EnableMetricsCollection|
|Version|2011-01-01|

<h3 id="postenablemetricscollection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_EnterStandby

<a id="opIdGET_EnterStandby"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=EnterStandby?AutoScalingGroupName=string&ShouldDecrementDesiredCapacity=true&Action=EnterStandby&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=EnterStandby`

<p>Moves the specified instances into the standby state.</p> <p>If you choose to decrement the desired capacity of the Auto Scaling group, the instances can enter standby as long as the desired capacity of the Auto Scaling group after the instances are placed into standby is equal to or greater than the minimum capacity of the group.</p> <p>If you choose not to decrement the desired capacity of the Auto Scaling group, the Auto Scaling group launches new instances to replace the instances on standby.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-enter-exit-standby.html">Temporarily removing instances from your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

<h3 id="getenterstandby-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceIds|query|[[XmlStringMaxLen19](#schemaxmlstringmaxlen19)]|false|The IDs of the instances. You can specify up to 20 instances.|
|AutoScalingGroupName|query|string|true|The name of the Auto Scaling group.|
|ShouldDecrementDesiredCapacity|query|boolean|true|Indicates whether to decrement the desired capacity of the Auto Scaling group by the number of instances moved to <code>Standby</code> mode.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|EnterStandby|
|Version|2011-01-01|

<h3 id="getenterstandby-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EnterStandbyAnswer](#schemaenterstandbyanswer)|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_EnterStandby

<a id="opIdPOST_EnterStandby"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=EnterStandby?Action=EnterStandby&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"InstanceIds":{},"AutoScalingGroupName":{},"ShouldDecrementDesiredCapacity":{}}'
```

`POST /#Action=EnterStandby`

<p>Moves the specified instances into the standby state.</p> <p>If you choose to decrement the desired capacity of the Auto Scaling group, the instances can enter standby as long as the desired capacity of the Auto Scaling group after the instances are placed into standby is equal to or greater than the minimum capacity of the group.</p> <p>If you choose not to decrement the desired capacity of the Auto Scaling group, the Auto Scaling group launches new instances to replace the instances on standby.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-enter-exit-standby.html">Temporarily removing instances from your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

> Body parameter

```json
{
  "InstanceIds": {},
  "AutoScalingGroupName": {},
  "ShouldDecrementDesiredCapacity": {}
}
```

<h3 id="postenterstandby-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[EnterStandbyQuery](#schemaenterstandbyquery)|false|none|
|» InstanceIds|body|object|false|none|
|» AutoScalingGroupName|body|object|true|none|
|» ShouldDecrementDesiredCapacity|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|EnterStandby|
|Version|2011-01-01|

<h3 id="postenterstandby-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EnterStandbyAnswer](#schemaenterstandbyanswer)|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ExecutePolicy

<a id="opIdGET_ExecutePolicy"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=ExecutePolicy?PolicyName=string&Action=ExecutePolicy&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ExecutePolicy`

Executes the specified policy. This can be useful for testing the design of your scaling policy.

<h3 id="getexecutepolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AutoScalingGroupName|query|string|false|The name of the Auto Scaling group.|
|PolicyName|query|string|true|The name or ARN of the policy.|
|HonorCooldown|query|boolean|false|<p>Indicates whether Amazon EC2 Auto Scaling waits for the cooldown period to complete before executing the policy.</p> <p>Valid only if the policy type is <code>SimpleScaling</code>. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/Cooldown.html">Scaling cooldowns for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>|
|MetricValue|query|number(double)|false|<p>The metric value to compare to <code>BreachThreshold</code>. This enables you to execute a policy of type <code>StepScaling</code> and determine which step adjustment to use. For example, if the breach threshold is 50 and you want to use a step adjustment with a lower bound of 0 and an upper bound of 10, you can set the metric value to 59.</p> <p>If you specify a metric value that doesn't correspond to a step adjustment for the policy, the call returns an error.</p> <p>Required if the policy type is <code>StepScaling</code> and not supported otherwise.</p>|
|BreachThreshold|query|number(double)|false|<p>The breach threshold for the alarm.</p> <p>Required if the policy type is <code>StepScaling</code> and not supported otherwise.</p>|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|ExecutePolicy|
|Version|2011-01-01|

<h3 id="getexecutepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ScalingActivityInProgressFault|[ScalingActivityInProgressFault](#schemascalingactivityinprogressfault)|
|481|481|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ExecutePolicy

<a id="opIdPOST_ExecutePolicy"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=ExecutePolicy?Action=ExecutePolicy&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AutoScalingGroupName":{},"PolicyName":{},"HonorCooldown":{},"MetricValue":{},"BreachThreshold":{}}'
```

`POST /#Action=ExecutePolicy`

Executes the specified policy. This can be useful for testing the design of your scaling policy.

> Body parameter

```json
{
  "AutoScalingGroupName": {},
  "PolicyName": {},
  "HonorCooldown": {},
  "MetricValue": {},
  "BreachThreshold": {}
}
```

<h3 id="postexecutepolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ExecutePolicyType](#schemaexecutepolicytype)|false|none|
|» AutoScalingGroupName|body|object|false|none|
|» PolicyName|body|object|true|none|
|» HonorCooldown|body|object|false|none|
|» MetricValue|body|object|false|none|
|» BreachThreshold|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ExecutePolicy|
|Version|2011-01-01|

<h3 id="postexecutepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ScalingActivityInProgressFault|[ScalingActivityInProgressFault](#schemascalingactivityinprogressfault)|
|481|481|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ExitStandby

<a id="opIdGET_ExitStandby"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=ExitStandby?AutoScalingGroupName=string&Action=ExitStandby&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ExitStandby`

<p>Moves the specified instances out of the standby state.</p> <p>After you put the instances back in service, the desired capacity is incremented.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-enter-exit-standby.html">Temporarily removing instances from your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

<h3 id="getexitstandby-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceIds|query|[[XmlStringMaxLen19](#schemaxmlstringmaxlen19)]|false|The IDs of the instances. You can specify up to 20 instances.|
|AutoScalingGroupName|query|string|true|The name of the Auto Scaling group.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|ExitStandby|
|Version|2011-01-01|

<h3 id="getexitstandby-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ExitStandbyAnswer](#schemaexitstandbyanswer)|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ExitStandby

<a id="opIdPOST_ExitStandby"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=ExitStandby?Action=ExitStandby&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"InstanceIds":{},"AutoScalingGroupName":{}}'
```

`POST /#Action=ExitStandby`

<p>Moves the specified instances out of the standby state.</p> <p>After you put the instances back in service, the desired capacity is incremented.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-enter-exit-standby.html">Temporarily removing instances from your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

> Body parameter

```json
{
  "InstanceIds": {},
  "AutoScalingGroupName": {}
}
```

<h3 id="postexitstandby-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ExitStandbyQuery](#schemaexitstandbyquery)|false|none|
|» InstanceIds|body|object|false|none|
|» AutoScalingGroupName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ExitStandby|
|Version|2011-01-01|

<h3 id="postexitstandby-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ExitStandbyAnswer](#schemaexitstandbyanswer)|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_GetPredictiveScalingForecast

<a id="opIdGET_GetPredictiveScalingForecast"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=GetPredictiveScalingForecast?AutoScalingGroupName=string&PolicyName=string&StartTime=1970-01-01T00%3A00%3A00Z&EndTime=1970-01-01T00%3A00%3A00Z&Action=GetPredictiveScalingForecast&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=GetPredictiveScalingForecast`

<p>Retrieves the forecast data for a predictive scaling policy.</p> <p>Load forecasts are predictions of the hourly load values using historical load data from CloudWatch and an analysis of historical trends. Capacity forecasts are represented as predicted values for the minimum capacity that is needed on an hourly basis, based on the hourly load forecast.</p> <p>A minimum of 24 hours of data is required to create the initial forecasts. However, having a full 14 days of historical data results in more accurate forecasts.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-predictive-scaling.html">Predictive scaling for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

<h3 id="getgetpredictivescalingforecast-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AutoScalingGroupName|query|string|true|The name of the Auto Scaling group.|
|PolicyName|query|string|true|The name of the policy.|
|StartTime|query|string(date-time)|true|The inclusive start time of the time range for the forecast data to get. At most, the date and time can be one year before the current date and time.|
|EndTime|query|string(date-time)|true|<p>The exclusive end time of the time range for the forecast data to get. The maximum time duration between the start and end time is 30 days. </p> <p>Although this parameter can accept a date and time that is more than two days in the future, the availability of forecast data has limits. Amazon EC2 Auto Scaling only issues forecasts for periods of two days in advance.</p>|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|GetPredictiveScalingForecast|
|Version|2011-01-01|

<h3 id="getgetpredictivescalingforecast-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetPredictiveScalingForecastAnswer](#schemagetpredictivescalingforecastanswer)|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_GetPredictiveScalingForecast

<a id="opIdPOST_GetPredictiveScalingForecast"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=GetPredictiveScalingForecast?Action=GetPredictiveScalingForecast&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AutoScalingGroupName":{},"PolicyName":{},"StartTime":{},"EndTime":{}}'
```

`POST /#Action=GetPredictiveScalingForecast`

<p>Retrieves the forecast data for a predictive scaling policy.</p> <p>Load forecasts are predictions of the hourly load values using historical load data from CloudWatch and an analysis of historical trends. Capacity forecasts are represented as predicted values for the minimum capacity that is needed on an hourly basis, based on the hourly load forecast.</p> <p>A minimum of 24 hours of data is required to create the initial forecasts. However, having a full 14 days of historical data results in more accurate forecasts.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-predictive-scaling.html">Predictive scaling for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

> Body parameter

```json
{
  "AutoScalingGroupName": {},
  "PolicyName": {},
  "StartTime": {},
  "EndTime": {}
}
```

<h3 id="postgetpredictivescalingforecast-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetPredictiveScalingForecastType](#schemagetpredictivescalingforecasttype)|false|none|
|» AutoScalingGroupName|body|object|true|none|
|» PolicyName|body|object|true|none|
|» StartTime|body|object|true|none|
|» EndTime|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|GetPredictiveScalingForecast|
|Version|2011-01-01|

<h3 id="postgetpredictivescalingforecast-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetPredictiveScalingForecastAnswer](#schemagetpredictivescalingforecastanswer)|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_PutLifecycleHook

<a id="opIdGET_PutLifecycleHook"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=PutLifecycleHook?LifecycleHookName=string&AutoScalingGroupName=string&Action=PutLifecycleHook&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=PutLifecycleHook`

<p>Creates or updates a lifecycle hook for the specified Auto Scaling group.</p> <p>Lifecycle hooks let you create solutions that are aware of events in the Auto Scaling instance lifecycle, and then perform a custom action on instances when the corresponding lifecycle event occurs.</p> <p>This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:</p> <ol> <li> <p>(Optional) Create a launch template or launch configuration with a user data script that runs while an instance is in a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a Lambda function and a rule that allows Amazon EventBridge to invoke your Lambda function when an instance is put into a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.</p> </li> <li> <p> <b>Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.</b> </p> </li> <li> <p>If you need more time, record the lifecycle action heartbeat to keep the instance in a wait state using the <a>RecordLifecycleActionHeartbeat</a> API call.</p> </li> <li> <p>If you finish before the timeout period ends, send a callback by using the <a>CompleteLifecycleAction</a> API call.</p> </li> </ol> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling lifecycle hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If you exceed your maximum limit of lifecycle hooks, which by default is 50 per Auto Scaling group, the call fails.</p> <p>You can view the lifecycle hooks for an Auto Scaling group using the <a>DescribeLifecycleHooks</a> API call. If you are no longer using a lifecycle hook, you can delete it by calling the <a>DeleteLifecycleHook</a> API.</p>

<h3 id="getputlifecyclehook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LifecycleHookName|query|string|true|The name of the lifecycle hook.|
|AutoScalingGroupName|query|string|true|The name of the Auto Scaling group.|
|LifecycleTransition|query|string|false|<p>The lifecycle transition. For Auto Scaling groups, there are two major lifecycle transitions.</p> <ul> <li> <p>To create a lifecycle hook for scale-out events, specify <code>autoscaling:EC2_INSTANCE_LAUNCHING</code>.</p> </li> <li> <p>To create a lifecycle hook for scale-in events, specify <code>autoscaling:EC2_INSTANCE_TERMINATING</code>.</p> </li> </ul> <p>Required for new lifecycle hooks, but optional when updating existing hooks.</p>|
|RoleARN|query|string|false|<p>The ARN of the IAM role that allows the Auto Scaling group to publish to the specified notification target.</p> <p>Valid only if the notification target is an Amazon SNS topic or an Amazon SQS queue. Required for new lifecycle hooks, but optional when updating existing hooks.</p>|
|NotificationTargetARN|query|string|false|<p>The Amazon Resource Name (ARN) of the notification target that Amazon EC2 Auto Scaling uses to notify you when an instance is in a wait state for the lifecycle hook. You can specify either an Amazon SNS topic or an Amazon SQS queue.</p> <p>If you specify an empty string, this overrides the current ARN.</p> <p>This operation uses the JSON format when sending notifications to an Amazon SQS queue, and an email key-value pair format when sending notifications to an Amazon SNS topic.</p> <p>When you specify a notification target, Amazon EC2 Auto Scaling sends it a test message. Test messages contain the following additional key-value pair: <code>"Event": "autoscaling:TEST_NOTIFICATION"</code>.</p>|
|NotificationMetadata|query|string|false|Additional information that you want to include any time Amazon EC2 Auto Scaling sends a message to the notification target.|
|HeartbeatTimeout|query|integer|false|The maximum time, in seconds, that can elapse before the lifecycle hook times out. The range is from <code>30</code> to <code>7200</code> seconds. The default value is <code>3600</code> seconds (1 hour).|
|DefaultResult|query|string|false|<p>The action the Auto Scaling group takes when the lifecycle hook timeout elapses or if an unexpected failure occurs. The default value is <code>ABANDON</code>.</p> <p>Valid values: <code>CONTINUE</code> \| <code>ABANDON</code> </p>|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|PutLifecycleHook|
|Version|2011-01-01|

<h3 id="getputlifecyclehook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutLifecycleHookAnswer](#schemaputlifecyclehookanswer)|
|480|480|LimitExceededFault|[LimitExceededFault](#schemalimitexceededfault)|
|481|481|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_PutLifecycleHook

<a id="opIdPOST_PutLifecycleHook"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=PutLifecycleHook?Action=PutLifecycleHook&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"LifecycleHookName":{},"AutoScalingGroupName":{},"LifecycleTransition":{},"RoleARN":{},"NotificationTargetARN":{},"NotificationMetadata":{},"HeartbeatTimeout":{},"DefaultResult":{}}'
```

`POST /#Action=PutLifecycleHook`

<p>Creates or updates a lifecycle hook for the specified Auto Scaling group.</p> <p>Lifecycle hooks let you create solutions that are aware of events in the Auto Scaling instance lifecycle, and then perform a custom action on instances when the corresponding lifecycle event occurs.</p> <p>This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:</p> <ol> <li> <p>(Optional) Create a launch template or launch configuration with a user data script that runs while an instance is in a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a Lambda function and a rule that allows Amazon EventBridge to invoke your Lambda function when an instance is put into a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.</p> </li> <li> <p> <b>Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.</b> </p> </li> <li> <p>If you need more time, record the lifecycle action heartbeat to keep the instance in a wait state using the <a>RecordLifecycleActionHeartbeat</a> API call.</p> </li> <li> <p>If you finish before the timeout period ends, send a callback by using the <a>CompleteLifecycleAction</a> API call.</p> </li> </ol> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling lifecycle hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If you exceed your maximum limit of lifecycle hooks, which by default is 50 per Auto Scaling group, the call fails.</p> <p>You can view the lifecycle hooks for an Auto Scaling group using the <a>DescribeLifecycleHooks</a> API call. If you are no longer using a lifecycle hook, you can delete it by calling the <a>DeleteLifecycleHook</a> API.</p>

> Body parameter

```json
{
  "LifecycleHookName": {},
  "AutoScalingGroupName": {},
  "LifecycleTransition": {},
  "RoleARN": {},
  "NotificationTargetARN": {},
  "NotificationMetadata": {},
  "HeartbeatTimeout": {},
  "DefaultResult": {}
}
```

<h3 id="postputlifecyclehook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[PutLifecycleHookType](#schemaputlifecyclehooktype)|false|none|
|» LifecycleHookName|body|object|true|none|
|» AutoScalingGroupName|body|object|true|none|
|» LifecycleTransition|body|object|false|none|
|» RoleARN|body|object|false|none|
|» NotificationTargetARN|body|object|false|none|
|» NotificationMetadata|body|object|false|none|
|» HeartbeatTimeout|body|object|false|none|
|» DefaultResult|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|PutLifecycleHook|
|Version|2011-01-01|

<h3 id="postputlifecyclehook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutLifecycleHookAnswer](#schemaputlifecyclehookanswer)|
|480|480|LimitExceededFault|[LimitExceededFault](#schemalimitexceededfault)|
|481|481|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_PutNotificationConfiguration

<a id="opIdGET_PutNotificationConfiguration"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=PutNotificationConfiguration?AutoScalingGroupName=string&TopicARN=string&NotificationTypes=string&Action=PutNotificationConfiguration&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=PutNotificationConfiguration`

<p>Configures an Auto Scaling group to send notifications when specified events take place. Subscribers to the specified topic can have messages delivered to an endpoint such as a web server or an email address.</p> <p>This configuration overwrites any existing configuration.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ASGettingNotifications.html">Getting Amazon SNS notifications when your Auto Scaling group scales</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If you exceed your maximum limit of SNS topics, which is 10 per Auto Scaling group, the call fails.</p>

<h3 id="getputnotificationconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AutoScalingGroupName|query|string|true|The name of the Auto Scaling group.|
|TopicARN|query|string|true|The Amazon Resource Name (ARN) of the Amazon SNS topic.|
|NotificationTypes|query|[[XmlStringMaxLen255](#schemaxmlstringmaxlen255)]|true|The type of event that causes the notification to be sent. To query the notification types supported by Amazon EC2 Auto Scaling, call the <a>DescribeAutoScalingNotificationTypes</a> API.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|PutNotificationConfiguration|
|Version|2011-01-01|

<h3 id="getputnotificationconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|LimitExceededFault|[LimitExceededFault](#schemalimitexceededfault)|
|481|481|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|
|482|482|ServiceLinkedRoleFailure|[ServiceLinkedRoleFailure](#schemaservicelinkedrolefailure)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_PutNotificationConfiguration

<a id="opIdPOST_PutNotificationConfiguration"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=PutNotificationConfiguration?Action=PutNotificationConfiguration&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AutoScalingGroupName":{},"TopicARN":{},"NotificationTypes":{}}'
```

`POST /#Action=PutNotificationConfiguration`

<p>Configures an Auto Scaling group to send notifications when specified events take place. Subscribers to the specified topic can have messages delivered to an endpoint such as a web server or an email address.</p> <p>This configuration overwrites any existing configuration.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ASGettingNotifications.html">Getting Amazon SNS notifications when your Auto Scaling group scales</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If you exceed your maximum limit of SNS topics, which is 10 per Auto Scaling group, the call fails.</p>

> Body parameter

```json
{
  "AutoScalingGroupName": {},
  "TopicARN": {},
  "NotificationTypes": {}
}
```

<h3 id="postputnotificationconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[PutNotificationConfigurationType](#schemaputnotificationconfigurationtype)|false|none|
|» AutoScalingGroupName|body|object|true|none|
|» TopicARN|body|object|true|none|
|» NotificationTypes|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|PutNotificationConfiguration|
|Version|2011-01-01|

<h3 id="postputnotificationconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|LimitExceededFault|[LimitExceededFault](#schemalimitexceededfault)|
|481|481|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|
|482|482|ServiceLinkedRoleFailure|[ServiceLinkedRoleFailure](#schemaservicelinkedrolefailure)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_PutScalingPolicy

<a id="opIdGET_PutScalingPolicy"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=PutScalingPolicy?AutoScalingGroupName=string&PolicyName=string&Action=PutScalingPolicy&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=PutScalingPolicy`

<p>Creates or updates a scaling policy for an Auto Scaling group. Scaling policies are used to scale an Auto Scaling group based on configurable metrics. If no policies are defined, the dynamic scaling and predictive scaling features are not used. </p> <p>For more information about using dynamic scaling, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-target-tracking.html">Target tracking scaling policies</a> and <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-simple-step.html">Step and simple scaling policies</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>For more information about using predictive scaling, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-predictive-scaling.html">Predictive scaling for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>You can view the scaling policies for an Auto Scaling group using the <a>DescribePolicies</a> API call. If you are no longer using a scaling policy, you can delete it by calling the <a>DeletePolicy</a> API.</p>

<h3 id="getputscalingpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AutoScalingGroupName|query|string|true|The name of the Auto Scaling group.|
|PolicyName|query|string|true|The name of the policy.|
|PolicyType|query|string|false|<p>One of the following policy types: </p> <ul> <li> <p> <code>TargetTrackingScaling</code> </p> </li> <li> <p> <code>StepScaling</code> </p> </li> <li> <p> <code>SimpleScaling</code> (default)</p> </li> <li> <p> <code>PredictiveScaling</code> </p> </li> </ul>|
|AdjustmentType|query|string|false|<p>Specifies how the scaling adjustment is interpreted (for example, an absolute number or a percentage). The valid values are <code>ChangeInCapacity</code>, <code>ExactCapacity</code>, and <code>PercentChangeInCapacity</code>.</p> <p>Required if the policy type is <code>StepScaling</code> or <code>SimpleScaling</code>. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-simple-step.html#as-scaling-adjustment">Scaling adjustment types</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>|
|MinAdjustmentStep|query|integer|false|Available for backward compatibility. Use <code>MinAdjustmentMagnitude</code> instead.|
|MinAdjustmentMagnitude|query|integer|false|<p>The minimum value to scale by when the adjustment type is <code>PercentChangeInCapacity</code>. For example, suppose that you create a step scaling policy to scale out an Auto Scaling group by 25 percent and you specify a <code>MinAdjustmentMagnitude</code> of 2. If the group has 4 instances and the scaling policy is performed, 25 percent of 4 is 1. However, because you specified a <code>MinAdjustmentMagnitude</code> of 2, Amazon EC2 Auto Scaling scales out the group by 2 instances.</p> <p>Valid only if the policy type is <code>StepScaling</code> or <code>SimpleScaling</code>. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-simple-step.html#as-scaling-adjustment">Scaling adjustment types</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <note> <p>Some Auto Scaling groups use instance weights. In this case, set the <code>MinAdjustmentMagnitude</code> to a value that is at least as large as your largest instance weight.</p> </note>|
|ScalingAdjustment|query|integer|false|<p>The amount by which to scale, based on the specified adjustment type. A positive value adds to the current capacity while a negative number removes from the current capacity. For exact capacity, you must specify a non-negative value.</p> <p>Required if the policy type is <code>SimpleScaling</code>. (Not used with any other policy type.) </p>|
|Cooldown|query|integer|false|<p>A cooldown period, in seconds, that applies to a specific simple scaling policy. When a cooldown period is specified here, it overrides the default cooldown.</p> <p>Valid only if the policy type is <code>SimpleScaling</code>. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/Cooldown.html">Scaling cooldowns for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>Default: None</p>|
|MetricAggregationType|query|string|false|<p>The aggregation type for the CloudWatch metrics. The valid values are <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code>. If the aggregation type is null, the value is treated as <code>Average</code>.</p> <p>Valid only if the policy type is <code>StepScaling</code>.</p>|
|StepAdjustments|query|[[StepAdjustment](#schemastepadjustment)]|false|<p>A set of adjustments that enable you to scale based on the size of the alarm breach.</p> <p>Required if the policy type is <code>StepScaling</code>. (Not used with any other policy type.) </p>|
|EstimatedInstanceWarmup|query|integer|false|<p> <i>Not needed if the default instance warmup is defined for the group.</i> </p> <p>The estimated time, in seconds, until a newly launched instance can contribute to the CloudWatch metrics. This warm-up period applies to instances launched due to a specific target tracking or step scaling policy. When a warm-up period is specified here, it overrides the default instance warmup.</p> <p>Valid only if the policy type is <code>TargetTrackingScaling</code> or <code>StepScaling</code>.</p> <note> <p>The default is to use the value for the default instance warmup defined for the group. If default instance warmup is null, then <code>EstimatedInstanceWarmup</code> falls back to the value of default cooldown.</p> </note>|
|TargetTrackingConfiguration|query|object|false|<p>A target tracking scaling policy. Provides support for predefined or custom metrics.</p> <p>The following predefined metrics are available:</p> <ul> <li> <p> <code>ASGAverageCPUUtilization</code> </p> </li> <li> <p> <code>ASGAverageNetworkIn</code> </p> </li> <li> <p> <code>ASGAverageNetworkOut</code> </p> </li> <li> <p> <code>ALBRequestCountPerTarget</code> </p> </li> </ul> <p>If you specify <code>ALBRequestCountPerTarget</code> for the metric, you must specify the <code>ResourceLabel</code> property with the <code>PredefinedMetricSpecification</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_TargetTrackingConfiguration.html">TargetTrackingConfiguration</a> in the <i>Amazon EC2 Auto Scaling API Reference</i>.</p> <p>Required if the policy type is <code>TargetTrackingScaling</code>.</p>|
|Enabled|query|boolean|false|Indicates whether the scaling policy is enabled or disabled. The default is enabled. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-enable-disable-scaling-policy.html">Disabling a scaling policy for an Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.|
|PredictiveScalingConfiguration|query|object|false|<p>A predictive scaling policy. Provides support for predefined and custom metrics.</p> <p>Predefined metrics include CPU utilization, network in/out, and the Application Load Balancer request count.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_PredictiveScalingConfiguration.html">PredictiveScalingConfiguration</a> in the <i>Amazon EC2 Auto Scaling API Reference</i>.</p> <p>Required if the policy type is <code>PredictiveScaling</code>.</p>|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|PutScalingPolicy|
|Version|2011-01-01|

<h3 id="getputscalingpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PolicyARNType](#schemapolicyarntype)|
|480|480|LimitExceededFault|[LimitExceededFault](#schemalimitexceededfault)|
|481|481|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|
|482|482|ServiceLinkedRoleFailure|[ServiceLinkedRoleFailure](#schemaservicelinkedrolefailure)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_PutScalingPolicy

<a id="opIdPOST_PutScalingPolicy"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=PutScalingPolicy?Action=PutScalingPolicy&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AutoScalingGroupName":{},"PolicyName":{},"PolicyType":{},"AdjustmentType":{},"MinAdjustmentStep":{},"MinAdjustmentMagnitude":{},"ScalingAdjustment":{},"Cooldown":{},"MetricAggregationType":{},"StepAdjustments":{},"EstimatedInstanceWarmup":{},"TargetTrackingConfiguration":{"PredefinedMetricSpecification":{"PredefinedMetricType":{},"ResourceLabel":{}},"CustomizedMetricSpecification":{"MetricName":{},"Namespace":{},"Dimensions":{},"Statistic":{},"Unit":{},"Metrics":{}},"TargetValue":{},"DisableScaleIn":{}},"Enabled":{},"PredictiveScalingConfiguration":{"MetricSpecifications":{},"Mode":{},"SchedulingBufferTime":{},"MaxCapacityBreachBehavior":{},"MaxCapacityBuffer":{}}}'
```

`POST /#Action=PutScalingPolicy`

<p>Creates or updates a scaling policy for an Auto Scaling group. Scaling policies are used to scale an Auto Scaling group based on configurable metrics. If no policies are defined, the dynamic scaling and predictive scaling features are not used. </p> <p>For more information about using dynamic scaling, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-target-tracking.html">Target tracking scaling policies</a> and <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-simple-step.html">Step and simple scaling policies</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>For more information about using predictive scaling, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-predictive-scaling.html">Predictive scaling for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>You can view the scaling policies for an Auto Scaling group using the <a>DescribePolicies</a> API call. If you are no longer using a scaling policy, you can delete it by calling the <a>DeletePolicy</a> API.</p>

> Body parameter

```json
{
  "AutoScalingGroupName": {},
  "PolicyName": {},
  "PolicyType": {},
  "AdjustmentType": {},
  "MinAdjustmentStep": {},
  "MinAdjustmentMagnitude": {},
  "ScalingAdjustment": {},
  "Cooldown": {},
  "MetricAggregationType": {},
  "StepAdjustments": {},
  "EstimatedInstanceWarmup": {},
  "TargetTrackingConfiguration": {
    "PredefinedMetricSpecification": {
      "PredefinedMetricType": {},
      "ResourceLabel": {}
    },
    "CustomizedMetricSpecification": {
      "MetricName": {},
      "Namespace": {},
      "Dimensions": {},
      "Statistic": {},
      "Unit": {},
      "Metrics": {}
    },
    "TargetValue": {},
    "DisableScaleIn": {}
  },
  "Enabled": {},
  "PredictiveScalingConfiguration": {
    "MetricSpecifications": {},
    "Mode": {},
    "SchedulingBufferTime": {},
    "MaxCapacityBreachBehavior": {},
    "MaxCapacityBuffer": {}
  }
}
```

<h3 id="postputscalingpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[PutScalingPolicyType](#schemaputscalingpolicytype)|false|none|
|» AutoScalingGroupName|body|object|true|none|
|» PolicyName|body|object|true|none|
|» PolicyType|body|object|false|none|
|» AdjustmentType|body|object|false|none|
|» MinAdjustmentStep|body|object|false|none|
|» MinAdjustmentMagnitude|body|object|false|none|
|» ScalingAdjustment|body|object|false|none|
|» Cooldown|body|object|false|none|
|» MetricAggregationType|body|object|false|none|
|» StepAdjustments|body|object|false|none|
|» EstimatedInstanceWarmup|body|object|false|none|
|» TargetTrackingConfiguration|body|object|false|none|
|» » PredefinedMetricSpecification|body|object|false|none|
|» » » PredefinedMetricType|body|object|true|none|
|» » » ResourceLabel|body|object|false|none|
|» » CustomizedMetricSpecification|body|object|false|none|
|» » » MetricName|body|object|false|none|
|» » » Namespace|body|object|false|none|
|» » » Dimensions|body|object|false|none|
|» » » Statistic|body|object|false|none|
|» » » Unit|body|object|false|none|
|» » » Metrics|body|object|false|none|
|» » TargetValue|body|object|true|none|
|» » DisableScaleIn|body|object|false|none|
|» Enabled|body|object|false|none|
|» PredictiveScalingConfiguration|body|object|false|none|
|» » MetricSpecifications|body|object|true|none|
|» » Mode|body|object|false|none|
|» » SchedulingBufferTime|body|object|false|none|
|» » MaxCapacityBreachBehavior|body|object|false|none|
|» » MaxCapacityBuffer|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|PutScalingPolicy|
|Version|2011-01-01|

<h3 id="postputscalingpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PolicyARNType](#schemapolicyarntype)|
|480|480|LimitExceededFault|[LimitExceededFault](#schemalimitexceededfault)|
|481|481|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|
|482|482|ServiceLinkedRoleFailure|[ServiceLinkedRoleFailure](#schemaservicelinkedrolefailure)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_PutScheduledUpdateGroupAction

<a id="opIdGET_PutScheduledUpdateGroupAction"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=PutScheduledUpdateGroupAction?AutoScalingGroupName=string&ScheduledActionName=string&Action=PutScheduledUpdateGroupAction&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=PutScheduledUpdateGroupAction`

<p>Creates or updates a scheduled scaling action for an Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/schedule_time.html">Scheduled scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>You can view the scheduled actions for an Auto Scaling group using the <a>DescribeScheduledActions</a> API call. If you are no longer using a scheduled action, you can delete it by calling the <a>DeleteScheduledAction</a> API.</p> <p>If you try to schedule your action in the past, Amazon EC2 Auto Scaling returns an error message.</p>

<h3 id="getputscheduledupdategroupaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AutoScalingGroupName|query|string|true|The name of the Auto Scaling group.|
|ScheduledActionName|query|string|true|The name of this scaling action.|
|Time|query|string(date-time)|false|This property is no longer used.|
|StartTime|query|string(date-time)|false|<p>The date and time for this action to start, in YYYY-MM-DDThh:mm:ssZ format in UTC/GMT only and in quotes (for example, <code>"2021-06-01T00:00:00Z"</code>).</p> <p>If you specify <code>Recurrence</code> and <code>StartTime</code>, Amazon EC2 Auto Scaling performs the action at this time, and then performs the action based on the specified recurrence.</p>|
|EndTime|query|string(date-time)|false|The date and time for the recurring schedule to end, in UTC. For example, <code>"2021-06-01T00:00:00Z"</code>.|
|Recurrence|query|string|false|<p>The recurring schedule for this action. This format consists of five fields separated by white spaces: [Minute] [Hour] [Day_of_Month] [Month_of_Year] [Day_of_Week]. The value must be in quotes (for example, <code>"30 0 1 1,6,12 *"</code>). For more information about this format, see <a href="http://crontab.org">Crontab</a>.</p> <p>When <code>StartTime</code> and <code>EndTime</code> are specified with <code>Recurrence</code>, they form the boundaries of when the recurring action starts and stops.</p> <p>Cron expressions use Universal Coordinated Time (UTC) by default.</p>|
|MinSize|query|integer|false|The minimum size of the Auto Scaling group.|
|MaxSize|query|integer|false|The maximum size of the Auto Scaling group.|
|DesiredCapacity|query|integer|false|<p>The desired capacity is the initial capacity of the Auto Scaling group after the scheduled action runs and the capacity it attempts to maintain. It can scale beyond this capacity if you add more scaling conditions. </p> <note> <p>You must specify at least one of the following properties: <code>MaxSize</code>, <code>MinSize</code>, or <code>DesiredCapacity</code>. </p> </note>|
|TimeZone|query|string|false|<p>Specifies the time zone for a cron expression. If a time zone is not provided, UTC is used by default. </p> <p>Valid values are the canonical names of the IANA time zones, derived from the IANA Time Zone Database (such as <code>Etc/GMT+9</code> or <code>Pacific/Tahiti</code>). For more information, see <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones">https://en.wikipedia.org/wiki/List_of_tz_database_time_zones</a>.</p>|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|PutScheduledUpdateGroupAction|
|Version|2011-01-01|

<h3 id="getputscheduledupdategroupaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|AlreadyExistsFault|[AlreadyExistsFault](#schemaalreadyexistsfault)|
|481|481|LimitExceededFault|[LimitExceededFault](#schemalimitexceededfault)|
|482|482|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_PutScheduledUpdateGroupAction

<a id="opIdPOST_PutScheduledUpdateGroupAction"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=PutScheduledUpdateGroupAction?Action=PutScheduledUpdateGroupAction&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AutoScalingGroupName":{},"ScheduledActionName":{},"Time":{},"StartTime":{},"EndTime":{},"Recurrence":{},"MinSize":{},"MaxSize":{},"DesiredCapacity":{},"TimeZone":{}}'
```

`POST /#Action=PutScheduledUpdateGroupAction`

<p>Creates or updates a scheduled scaling action for an Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/schedule_time.html">Scheduled scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>You can view the scheduled actions for an Auto Scaling group using the <a>DescribeScheduledActions</a> API call. If you are no longer using a scheduled action, you can delete it by calling the <a>DeleteScheduledAction</a> API.</p> <p>If you try to schedule your action in the past, Amazon EC2 Auto Scaling returns an error message.</p>

> Body parameter

```json
{
  "AutoScalingGroupName": {},
  "ScheduledActionName": {},
  "Time": {},
  "StartTime": {},
  "EndTime": {},
  "Recurrence": {},
  "MinSize": {},
  "MaxSize": {},
  "DesiredCapacity": {},
  "TimeZone": {}
}
```

<h3 id="postputscheduledupdategroupaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[PutScheduledUpdateGroupActionType](#schemaputscheduledupdategroupactiontype)|false|none|
|» AutoScalingGroupName|body|object|true|none|
|» ScheduledActionName|body|object|true|none|
|» Time|body|object|false|none|
|» StartTime|body|object|false|none|
|» EndTime|body|object|false|none|
|» Recurrence|body|object|false|none|
|» MinSize|body|object|false|none|
|» MaxSize|body|object|false|none|
|» DesiredCapacity|body|object|false|none|
|» TimeZone|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|PutScheduledUpdateGroupAction|
|Version|2011-01-01|

<h3 id="postputscheduledupdategroupaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|AlreadyExistsFault|[AlreadyExistsFault](#schemaalreadyexistsfault)|
|481|481|LimitExceededFault|[LimitExceededFault](#schemalimitexceededfault)|
|482|482|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_PutWarmPool

<a id="opIdGET_PutWarmPool"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=PutWarmPool?AutoScalingGroupName=string&Action=PutWarmPool&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=PutWarmPool`

<p>Creates or updates a warm pool for the specified Auto Scaling group. A warm pool is a pool of pre-initialized EC2 instances that sits alongside the Auto Scaling group. Whenever your application needs to scale out, the Auto Scaling group can draw on the warm pool to meet its new desired capacity. For more information and example configurations, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html">Warm pools for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>This operation must be called from the Region in which the Auto Scaling group was created. This operation cannot be called on an Auto Scaling group that has a mixed instances policy or a launch template or launch configuration that requests Spot Instances.</p> <p>You can view the instances in the warm pool using the <a>DescribeWarmPool</a> API call. If you are no longer using a warm pool, you can delete it by calling the <a>DeleteWarmPool</a> API.</p>

<h3 id="getputwarmpool-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AutoScalingGroupName|query|string|true|The name of the Auto Scaling group.|
|MaxGroupPreparedCapacity|query|integer|false|<p>Specifies the maximum number of instances that are allowed to be in the warm pool or in any state except <code>Terminated</code> for the Auto Scaling group. This is an optional property. Specify it only if you do not want the warm pool size to be determined by the difference between the group's maximum capacity and its desired capacity. </p> <important> <p>If a value for <code>MaxGroupPreparedCapacity</code> is not specified, Amazon EC2 Auto Scaling launches and maintains the difference between the group's maximum capacity and its desired capacity. If you specify a value for <code>MaxGroupPreparedCapacity</code>, Amazon EC2 Auto Scaling uses the difference between the <code>MaxGroupPreparedCapacity</code> and the desired capacity instead. </p> <p>The size of the warm pool is dynamic. Only when <code>MaxGroupPreparedCapacity</code> and <code>MinSize</code> are set to the same value does the warm pool have an absolute size.</p> </important> <p>If the desired capacity of the Auto Scaling group is higher than the <code>MaxGroupPreparedCapacity</code>, the capacity of the warm pool is 0, unless you specify a value for <code>MinSize</code>. To remove a value that you previously set, include the property but specify -1 for the value. </p>|
|MinSize|query|integer|false|Specifies the minimum number of instances to maintain in the warm pool. This helps you to ensure that there is always a certain number of warmed instances available to handle traffic spikes. Defaults to 0 if not specified.|
|PoolState|query|string|false|Sets the instance state to transition to after the lifecycle actions are complete. Default is <code>Stopped</code>.|
|InstanceReusePolicy|query|object|false|Indicates whether instances in the Auto Scaling group can be returned to the warm pool on scale in. The default is to terminate instances in the Auto Scaling group when the group scales in.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|PoolState|Stopped|
|PoolState|Running|
|PoolState|Hibernated|
|Action|PutWarmPool|
|Version|2011-01-01|

<h3 id="getputwarmpool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutWarmPoolAnswer](#schemaputwarmpoolanswer)|
|480|480|LimitExceededFault|[LimitExceededFault](#schemalimitexceededfault)|
|481|481|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_PutWarmPool

<a id="opIdPOST_PutWarmPool"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=PutWarmPool?Action=PutWarmPool&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AutoScalingGroupName":{},"MaxGroupPreparedCapacity":{},"MinSize":{},"PoolState":{},"InstanceReusePolicy":{"ReuseOnScaleIn":{}}}'
```

`POST /#Action=PutWarmPool`

<p>Creates or updates a warm pool for the specified Auto Scaling group. A warm pool is a pool of pre-initialized EC2 instances that sits alongside the Auto Scaling group. Whenever your application needs to scale out, the Auto Scaling group can draw on the warm pool to meet its new desired capacity. For more information and example configurations, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html">Warm pools for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>This operation must be called from the Region in which the Auto Scaling group was created. This operation cannot be called on an Auto Scaling group that has a mixed instances policy or a launch template or launch configuration that requests Spot Instances.</p> <p>You can view the instances in the warm pool using the <a>DescribeWarmPool</a> API call. If you are no longer using a warm pool, you can delete it by calling the <a>DeleteWarmPool</a> API.</p>

> Body parameter

```json
{
  "AutoScalingGroupName": {},
  "MaxGroupPreparedCapacity": {},
  "MinSize": {},
  "PoolState": {},
  "InstanceReusePolicy": {
    "ReuseOnScaleIn": {}
  }
}
```

<h3 id="postputwarmpool-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[PutWarmPoolType](#schemaputwarmpooltype)|false|none|
|» AutoScalingGroupName|body|object|true|none|
|» MaxGroupPreparedCapacity|body|object|false|none|
|» MinSize|body|object|false|none|
|» PoolState|body|object|false|none|
|» InstanceReusePolicy|body|object|false|none|
|» » ReuseOnScaleIn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|PutWarmPool|
|Version|2011-01-01|

<h3 id="postputwarmpool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutWarmPoolAnswer](#schemaputwarmpoolanswer)|
|480|480|LimitExceededFault|[LimitExceededFault](#schemalimitexceededfault)|
|481|481|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_RecordLifecycleActionHeartbeat

<a id="opIdGET_RecordLifecycleActionHeartbeat"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=RecordLifecycleActionHeartbeat?LifecycleHookName=string&AutoScalingGroupName=string&Action=RecordLifecycleActionHeartbeat&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=RecordLifecycleActionHeartbeat`

<p>Records a heartbeat for the lifecycle action associated with the specified token or instance. This extends the timeout by the length of time defined using the <a>PutLifecycleHook</a> API call.</p> <p>This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:</p> <ol> <li> <p>(Optional) Create a launch template or launch configuration with a user data script that runs while an instance is in a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a Lambda function and a rule that allows Amazon EventBridge to invoke your Lambda function when an instance is put into a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.</p> </li> <li> <p>Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.</p> </li> <li> <p> <b>If you need more time, record the lifecycle action heartbeat to keep the instance in a wait state.</b> </p> </li> <li> <p>If you finish before the timeout period ends, send a callback by using the <a>CompleteLifecycleAction</a> API call.</p> </li> </ol> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling lifecycle hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

<h3 id="getrecordlifecycleactionheartbeat-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LifecycleHookName|query|string|true|The name of the lifecycle hook.|
|AutoScalingGroupName|query|string|true|The name of the Auto Scaling group.|
|LifecycleActionToken|query|string|false|A token that uniquely identifies a specific lifecycle action associated with an instance. Amazon EC2 Auto Scaling sends this token to the notification target that you specified when you created the lifecycle hook.|
|InstanceId|query|string|false|The ID of the instance.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|RecordLifecycleActionHeartbeat|
|Version|2011-01-01|

<h3 id="getrecordlifecycleactionheartbeat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RecordLifecycleActionHeartbeatAnswer](#schemarecordlifecycleactionheartbeatanswer)|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_RecordLifecycleActionHeartbeat

<a id="opIdPOST_RecordLifecycleActionHeartbeat"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=RecordLifecycleActionHeartbeat?Action=RecordLifecycleActionHeartbeat&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"LifecycleHookName":{},"AutoScalingGroupName":{},"LifecycleActionToken":{},"InstanceId":{}}'
```

`POST /#Action=RecordLifecycleActionHeartbeat`

<p>Records a heartbeat for the lifecycle action associated with the specified token or instance. This extends the timeout by the length of time defined using the <a>PutLifecycleHook</a> API call.</p> <p>This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:</p> <ol> <li> <p>(Optional) Create a launch template or launch configuration with a user data script that runs while an instance is in a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a Lambda function and a rule that allows Amazon EventBridge to invoke your Lambda function when an instance is put into a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.</p> </li> <li> <p>Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.</p> </li> <li> <p> <b>If you need more time, record the lifecycle action heartbeat to keep the instance in a wait state.</b> </p> </li> <li> <p>If you finish before the timeout period ends, send a callback by using the <a>CompleteLifecycleAction</a> API call.</p> </li> </ol> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling lifecycle hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

> Body parameter

```json
{
  "LifecycleHookName": {},
  "AutoScalingGroupName": {},
  "LifecycleActionToken": {},
  "InstanceId": {}
}
```

<h3 id="postrecordlifecycleactionheartbeat-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[RecordLifecycleActionHeartbeatType](#schemarecordlifecycleactionheartbeattype)|false|none|
|» LifecycleHookName|body|object|true|none|
|» AutoScalingGroupName|body|object|true|none|
|» LifecycleActionToken|body|object|false|none|
|» InstanceId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|RecordLifecycleActionHeartbeat|
|Version|2011-01-01|

<h3 id="postrecordlifecycleactionheartbeat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RecordLifecycleActionHeartbeatAnswer](#schemarecordlifecycleactionheartbeatanswer)|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ResumeProcesses

<a id="opIdGET_ResumeProcesses"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=ResumeProcesses?AutoScalingGroupName=string&Action=ResumeProcesses&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ResumeProcesses`

<p>Resumes the specified suspended auto scaling processes, or all suspended process, for the specified Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html">Suspending and resuming scaling processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

<h3 id="getresumeprocesses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AutoScalingGroupName|query|string|true|The name of the Auto Scaling group.|
|ScalingProcesses|query|[[XmlStringMaxLen255](#schemaxmlstringmaxlen255)]|false|<p>One or more of the following processes:</p> <ul> <li> <p> <code>Launch</code> </p> </li> <li> <p> <code>Terminate</code> </p> </li> <li> <p> <code>AddToLoadBalancer</code> </p> </li> <li> <p> <code>AlarmNotification</code> </p> </li> <li> <p> <code>AZRebalance</code> </p> </li> <li> <p> <code>HealthCheck</code> </p> </li> <li> <p> <code>InstanceRefresh</code> </p> </li> <li> <p> <code>ReplaceUnhealthy</code> </p> </li> <li> <p> <code>ScheduledActions</code> </p> </li> </ul> <p>If you omit this property, all processes are specified.</p>|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|ResumeProcesses|
|Version|2011-01-01|

<h3 id="getresumeprocesses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceInUseFault|[ResourceInUseFault](#schemaresourceinusefault)|
|481|481|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ResumeProcesses

<a id="opIdPOST_ResumeProcesses"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=ResumeProcesses?Action=ResumeProcesses&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AutoScalingGroupName":{},"ScalingProcesses":{}}'
```

`POST /#Action=ResumeProcesses`

<p>Resumes the specified suspended auto scaling processes, or all suspended process, for the specified Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html">Suspending and resuming scaling processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

> Body parameter

```json
{
  "AutoScalingGroupName": {},
  "ScalingProcesses": {}
}
```

<h3 id="postresumeprocesses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ScalingProcessQuery](#schemascalingprocessquery)|false|none|
|» AutoScalingGroupName|body|object|true|none|
|» ScalingProcesses|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ResumeProcesses|
|Version|2011-01-01|

<h3 id="postresumeprocesses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceInUseFault|[ResourceInUseFault](#schemaresourceinusefault)|
|481|481|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_RollbackInstanceRefresh

<a id="opIdGET_RollbackInstanceRefresh"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=RollbackInstanceRefresh?AutoScalingGroupName=string&Action=RollbackInstanceRefresh&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=RollbackInstanceRefresh`

<p>Cancels an instance refresh that is in progress and rolls back any changes that it made. Amazon EC2 Auto Scaling replaces any instances that were replaced during the instance refresh. This restores your Auto Scaling group to the configuration that it was using before the start of the instance refresh. </p> <p>This operation is part of the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html">instance refresh feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group after you make configuration changes.</p> <p>A rollback is not supported in the following situations: </p> <ul> <li> <p>There is no desired configuration specified for the instance refresh.</p> </li> <li> <p>The Auto Scaling group has a launch template that uses an Amazon Web Services Systems Manager parameter instead of an AMI ID for the <code>ImageId</code> property.</p> </li> <li> <p>The Auto Scaling group uses the launch template's <code>$Latest</code> or <code>$Default</code> version.</p> </li> </ul> <p>When you receive a successful response from this operation, Amazon EC2 Auto Scaling immediately begins replacing instances. You can check the status of this operation through the <a>DescribeInstanceRefreshes</a> API operation. </p>

<h3 id="getrollbackinstancerefresh-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AutoScalingGroupName|query|string|true|The name of the Auto Scaling group.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|RollbackInstanceRefresh|
|Version|2011-01-01|

<h3 id="getrollbackinstancerefresh-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RollbackInstanceRefreshAnswer](#schemarollbackinstancerefreshanswer)|
|480|480|LimitExceededFault|[LimitExceededFault](#schemalimitexceededfault)|
|481|481|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|
|482|482|ActiveInstanceRefreshNotFoundFault|[ActiveInstanceRefreshNotFoundFault](#schemaactiveinstancerefreshnotfoundfault)|
|483|483|IrreversibleInstanceRefreshFault|[IrreversibleInstanceRefreshFault](#schemairreversibleinstancerefreshfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_RollbackInstanceRefresh

<a id="opIdPOST_RollbackInstanceRefresh"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=RollbackInstanceRefresh?Action=RollbackInstanceRefresh&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AutoScalingGroupName":{}}'
```

`POST /#Action=RollbackInstanceRefresh`

<p>Cancels an instance refresh that is in progress and rolls back any changes that it made. Amazon EC2 Auto Scaling replaces any instances that were replaced during the instance refresh. This restores your Auto Scaling group to the configuration that it was using before the start of the instance refresh. </p> <p>This operation is part of the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html">instance refresh feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group after you make configuration changes.</p> <p>A rollback is not supported in the following situations: </p> <ul> <li> <p>There is no desired configuration specified for the instance refresh.</p> </li> <li> <p>The Auto Scaling group has a launch template that uses an Amazon Web Services Systems Manager parameter instead of an AMI ID for the <code>ImageId</code> property.</p> </li> <li> <p>The Auto Scaling group uses the launch template's <code>$Latest</code> or <code>$Default</code> version.</p> </li> </ul> <p>When you receive a successful response from this operation, Amazon EC2 Auto Scaling immediately begins replacing instances. You can check the status of this operation through the <a>DescribeInstanceRefreshes</a> API operation. </p>

> Body parameter

```json
{
  "AutoScalingGroupName": {}
}
```

<h3 id="postrollbackinstancerefresh-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[RollbackInstanceRefreshType](#schemarollbackinstancerefreshtype)|false|none|
|» AutoScalingGroupName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|RollbackInstanceRefresh|
|Version|2011-01-01|

<h3 id="postrollbackinstancerefresh-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RollbackInstanceRefreshAnswer](#schemarollbackinstancerefreshanswer)|
|480|480|LimitExceededFault|[LimitExceededFault](#schemalimitexceededfault)|
|481|481|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|
|482|482|ActiveInstanceRefreshNotFoundFault|[ActiveInstanceRefreshNotFoundFault](#schemaactiveinstancerefreshnotfoundfault)|
|483|483|IrreversibleInstanceRefreshFault|[IrreversibleInstanceRefreshFault](#schemairreversibleinstancerefreshfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_SetDesiredCapacity

<a id="opIdGET_SetDesiredCapacity"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=SetDesiredCapacity?AutoScalingGroupName=string&DesiredCapacity=0&Action=SetDesiredCapacity&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=SetDesiredCapacity`

<p>Sets the size of the specified Auto Scaling group.</p> <p>If a scale-in activity occurs as a result of a new <code>DesiredCapacity</code> value that is lower than the current size of the group, the Auto Scaling group uses its termination policy to determine which instances to terminate. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-manual-scaling.html">Manual scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

<h3 id="getsetdesiredcapacity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AutoScalingGroupName|query|string|true|The name of the Auto Scaling group.|
|DesiredCapacity|query|integer|true|The desired capacity is the initial capacity of the Auto Scaling group after this operation completes and the capacity it attempts to maintain.|
|HonorCooldown|query|boolean|false|Indicates whether Amazon EC2 Auto Scaling waits for the cooldown period to complete before initiating a scaling activity to set your Auto Scaling group to its new capacity. By default, Amazon EC2 Auto Scaling does not honor the cooldown period during manual scaling activities.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|SetDesiredCapacity|
|Version|2011-01-01|

<h3 id="getsetdesiredcapacity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ScalingActivityInProgressFault|[ScalingActivityInProgressFault](#schemascalingactivityinprogressfault)|
|481|481|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_SetDesiredCapacity

<a id="opIdPOST_SetDesiredCapacity"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=SetDesiredCapacity?Action=SetDesiredCapacity&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AutoScalingGroupName":{},"DesiredCapacity":{},"HonorCooldown":{}}'
```

`POST /#Action=SetDesiredCapacity`

<p>Sets the size of the specified Auto Scaling group.</p> <p>If a scale-in activity occurs as a result of a new <code>DesiredCapacity</code> value that is lower than the current size of the group, the Auto Scaling group uses its termination policy to determine which instances to terminate. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-manual-scaling.html">Manual scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

> Body parameter

```json
{
  "AutoScalingGroupName": {},
  "DesiredCapacity": {},
  "HonorCooldown": {}
}
```

<h3 id="postsetdesiredcapacity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[SetDesiredCapacityType](#schemasetdesiredcapacitytype)|false|none|
|» AutoScalingGroupName|body|object|true|none|
|» DesiredCapacity|body|object|true|none|
|» HonorCooldown|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|SetDesiredCapacity|
|Version|2011-01-01|

<h3 id="postsetdesiredcapacity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ScalingActivityInProgressFault|[ScalingActivityInProgressFault](#schemascalingactivityinprogressfault)|
|481|481|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_SetInstanceHealth

<a id="opIdGET_SetInstanceHealth"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=SetInstanceHealth?InstanceId=string&HealthStatus=string&Action=SetInstanceHealth&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=SetInstanceHealth`

<p>Sets the health status of the specified instance.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/healthcheck.html">Health checks for Auto Scaling instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

<h3 id="getsetinstancehealth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|query|string|true|The ID of the instance.|
|HealthStatus|query|string|true|The health status of the instance. Set to <code>Healthy</code> to have the instance remain in service. Set to <code>Unhealthy</code> to have the instance be out of service. Amazon EC2 Auto Scaling terminates and replaces the unhealthy instance.|
|ShouldRespectGracePeriod|query|boolean|false|<p>If the Auto Scaling group of the specified instance has a <code>HealthCheckGracePeriod</code> specified for the group, by default, this call respects the grace period. Set this to <code>False</code>, to have the call not respect the grace period associated with the group.</p> <p>For more information about the health check grace period, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_CreateAutoScalingGroup.html">CreateAutoScalingGroup</a> in the <i>Amazon EC2 Auto Scaling API Reference</i>.</p>|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|SetInstanceHealth|
|Version|2011-01-01|

<h3 id="getsetinstancehealth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_SetInstanceHealth

<a id="opIdPOST_SetInstanceHealth"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=SetInstanceHealth?Action=SetInstanceHealth&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"InstanceId":{},"HealthStatus":{},"ShouldRespectGracePeriod":{}}'
```

`POST /#Action=SetInstanceHealth`

<p>Sets the health status of the specified instance.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/healthcheck.html">Health checks for Auto Scaling instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

> Body parameter

```json
{
  "InstanceId": {},
  "HealthStatus": {},
  "ShouldRespectGracePeriod": {}
}
```

<h3 id="postsetinstancehealth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[SetInstanceHealthQuery](#schemasetinstancehealthquery)|false|none|
|» InstanceId|body|object|true|none|
|» HealthStatus|body|object|true|none|
|» ShouldRespectGracePeriod|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|SetInstanceHealth|
|Version|2011-01-01|

<h3 id="postsetinstancehealth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_SetInstanceProtection

<a id="opIdGET_SetInstanceProtection"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=SetInstanceProtection?InstanceIds=string&AutoScalingGroupName=string&ProtectedFromScaleIn=true&Action=SetInstanceProtection&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=SetInstanceProtection`

<p>Updates the instance protection settings of the specified instances. This operation cannot be called on instances in a warm pool.</p> <p>For more information about preventing instances that are part of an Auto Scaling group from terminating on scale in, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-instance-protection.html">Using instance scale-in protection</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If you exceed your maximum limit of instance IDs, which is 50 per Auto Scaling group, the call fails.</p>

<h3 id="getsetinstanceprotection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceIds|query|[[XmlStringMaxLen19](#schemaxmlstringmaxlen19)]|true|One or more instance IDs. You can specify up to 50 instances.|
|AutoScalingGroupName|query|string|true|The name of the Auto Scaling group.|
|ProtectedFromScaleIn|query|boolean|true|Indicates whether the instance is protected from termination by Amazon EC2 Auto Scaling when scaling in.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|SetInstanceProtection|
|Version|2011-01-01|

<h3 id="getsetinstanceprotection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SetInstanceProtectionAnswer](#schemasetinstanceprotectionanswer)|
|480|480|LimitExceededFault|[LimitExceededFault](#schemalimitexceededfault)|
|481|481|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_SetInstanceProtection

<a id="opIdPOST_SetInstanceProtection"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=SetInstanceProtection?Action=SetInstanceProtection&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"InstanceIds":{},"AutoScalingGroupName":{},"ProtectedFromScaleIn":{}}'
```

`POST /#Action=SetInstanceProtection`

<p>Updates the instance protection settings of the specified instances. This operation cannot be called on instances in a warm pool.</p> <p>For more information about preventing instances that are part of an Auto Scaling group from terminating on scale in, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-instance-protection.html">Using instance scale-in protection</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If you exceed your maximum limit of instance IDs, which is 50 per Auto Scaling group, the call fails.</p>

> Body parameter

```json
{
  "InstanceIds": {},
  "AutoScalingGroupName": {},
  "ProtectedFromScaleIn": {}
}
```

<h3 id="postsetinstanceprotection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[SetInstanceProtectionQuery](#schemasetinstanceprotectionquery)|false|none|
|» InstanceIds|body|object|true|none|
|» AutoScalingGroupName|body|object|true|none|
|» ProtectedFromScaleIn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|SetInstanceProtection|
|Version|2011-01-01|

<h3 id="postsetinstanceprotection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SetInstanceProtectionAnswer](#schemasetinstanceprotectionanswer)|
|480|480|LimitExceededFault|[LimitExceededFault](#schemalimitexceededfault)|
|481|481|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_StartInstanceRefresh

<a id="opIdGET_StartInstanceRefresh"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=StartInstanceRefresh?AutoScalingGroupName=string&Action=StartInstanceRefresh&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=StartInstanceRefresh`

<p>Starts an instance refresh. During an instance refresh, Amazon EC2 Auto Scaling performs a rolling update of instances in an Auto Scaling group. Instances are terminated first and then replaced, which temporarily reduces the capacity available within your Auto Scaling group.</p> <p>This operation is part of the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html">instance refresh feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group. This feature is helpful, for example, when you have a new AMI or a new user data script. You just need to create a new launch template that specifies the new AMI or user data script. Then start an instance refresh to immediately begin the process of updating instances in the group. </p> <p>If successful, the request's response contains a unique ID that you can use to track the progress of the instance refresh. To query its status, call the <a>DescribeInstanceRefreshes</a> API. To describe the instance refreshes that have already run, call the <a>DescribeInstanceRefreshes</a> API. To cancel an instance refresh that is in progress, use the <a>CancelInstanceRefresh</a> API. </p> <p>An instance refresh might fail for several reasons, such as EC2 launch failures, misconfigured health checks, or not ignoring or allowing the termination of instances that are in <code>Standby</code> state or protected from scale in. You can monitor for failed EC2 launches using the scaling activities. To find the scaling activities, call the <a>DescribeScalingActivities</a> API.</p> <p>If you enable auto rollback, your Auto Scaling group will be rolled back automatically when the instance refresh fails. You can enable this feature before starting an instance refresh by specifying the <code>AutoRollback</code> property in the instance refresh preferences. Otherwise, to roll back an instance refresh before it finishes, use the <a>RollbackInstanceRefresh</a> API. </p>

<h3 id="getstartinstancerefresh-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AutoScalingGroupName|query|string|true|The name of the Auto Scaling group.|
|Strategy|query|string|false|The strategy to use for the instance refresh. The only valid value is <code>Rolling</code>.|
|DesiredConfiguration|query|object|false|<p>The desired configuration. For example, the desired configuration can specify a new launch template or a new version of the current launch template.</p> <p>Once the instance refresh succeeds, Amazon EC2 Auto Scaling updates the settings of the Auto Scaling group to reflect the new desired configuration. </p> <note> <p>When you specify a new launch template or a new version of the current launch template for your desired configuration, consider enabling the <code>SkipMatching</code> property in preferences. If it's enabled, Amazon EC2 Auto Scaling skips replacing instances that already use the specified launch template and instance types. This can help you reduce the number of replacements that are required to apply updates. </p> </note>|
|Preferences|query|object|false|<p>Sets your preferences for the instance refresh so that it performs as expected when you start it. Includes the instance warmup time, the minimum healthy percentage, and the behaviors that you want Amazon EC2 Auto Scaling to use if instances that are in <code>Standby</code> state or protected from scale in are found. You can also choose to enable additional features, such as the following:</p> <ul> <li> <p>Auto rollback</p> </li> <li> <p>Checkpoints</p> </li> <li> <p>CloudWatch alarms</p> </li> <li> <p>Skip matching</p> </li> </ul>|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Strategy|Rolling|
|Action|StartInstanceRefresh|
|Version|2011-01-01|

<h3 id="getstartinstancerefresh-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartInstanceRefreshAnswer](#schemastartinstancerefreshanswer)|
|480|480|LimitExceededFault|[LimitExceededFault](#schemalimitexceededfault)|
|481|481|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|
|482|482|InstanceRefreshInProgressFault|[InstanceRefreshInProgressFault](#schemainstancerefreshinprogressfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_StartInstanceRefresh

<a id="opIdPOST_StartInstanceRefresh"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=StartInstanceRefresh?Action=StartInstanceRefresh&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AutoScalingGroupName":{},"Strategy":{},"DesiredConfiguration":{"LaunchTemplate":{"LaunchTemplateId":{},"LaunchTemplateName":{},"Version":{}},"MixedInstancesPolicy":{"LaunchTemplate":{"LaunchTemplateSpecification":{"LaunchTemplateId":{},"LaunchTemplateName":{},"Version":{}},"Overrides":{}},"InstancesDistribution":{"OnDemandAllocationStrategy":{},"OnDemandBaseCapacity":{},"OnDemandPercentageAboveBaseCapacity":{},"SpotAllocationStrategy":{},"SpotInstancePools":{},"SpotMaxPrice":{}}}},"Preferences":{"MinHealthyPercentage":{},"InstanceWarmup":{},"CheckpointPercentages":{},"CheckpointDelay":{},"SkipMatching":{},"AutoRollback":{},"ScaleInProtectedInstances":{},"StandbyInstances":{},"AlarmSpecification":{"Alarms":{}}}}'
```

`POST /#Action=StartInstanceRefresh`

<p>Starts an instance refresh. During an instance refresh, Amazon EC2 Auto Scaling performs a rolling update of instances in an Auto Scaling group. Instances are terminated first and then replaced, which temporarily reduces the capacity available within your Auto Scaling group.</p> <p>This operation is part of the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html">instance refresh feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group. This feature is helpful, for example, when you have a new AMI or a new user data script. You just need to create a new launch template that specifies the new AMI or user data script. Then start an instance refresh to immediately begin the process of updating instances in the group. </p> <p>If successful, the request's response contains a unique ID that you can use to track the progress of the instance refresh. To query its status, call the <a>DescribeInstanceRefreshes</a> API. To describe the instance refreshes that have already run, call the <a>DescribeInstanceRefreshes</a> API. To cancel an instance refresh that is in progress, use the <a>CancelInstanceRefresh</a> API. </p> <p>An instance refresh might fail for several reasons, such as EC2 launch failures, misconfigured health checks, or not ignoring or allowing the termination of instances that are in <code>Standby</code> state or protected from scale in. You can monitor for failed EC2 launches using the scaling activities. To find the scaling activities, call the <a>DescribeScalingActivities</a> API.</p> <p>If you enable auto rollback, your Auto Scaling group will be rolled back automatically when the instance refresh fails. You can enable this feature before starting an instance refresh by specifying the <code>AutoRollback</code> property in the instance refresh preferences. Otherwise, to roll back an instance refresh before it finishes, use the <a>RollbackInstanceRefresh</a> API. </p>

> Body parameter

```json
{
  "AutoScalingGroupName": {},
  "Strategy": {},
  "DesiredConfiguration": {
    "LaunchTemplate": {
      "LaunchTemplateId": {},
      "LaunchTemplateName": {},
      "Version": {}
    },
    "MixedInstancesPolicy": {
      "LaunchTemplate": {
        "LaunchTemplateSpecification": {
          "LaunchTemplateId": {},
          "LaunchTemplateName": {},
          "Version": {}
        },
        "Overrides": {}
      },
      "InstancesDistribution": {
        "OnDemandAllocationStrategy": {},
        "OnDemandBaseCapacity": {},
        "OnDemandPercentageAboveBaseCapacity": {},
        "SpotAllocationStrategy": {},
        "SpotInstancePools": {},
        "SpotMaxPrice": {}
      }
    }
  },
  "Preferences": {
    "MinHealthyPercentage": {},
    "InstanceWarmup": {},
    "CheckpointPercentages": {},
    "CheckpointDelay": {},
    "SkipMatching": {},
    "AutoRollback": {},
    "ScaleInProtectedInstances": {},
    "StandbyInstances": {},
    "AlarmSpecification": {
      "Alarms": {}
    }
  }
}
```

<h3 id="poststartinstancerefresh-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[StartInstanceRefreshType](#schemastartinstancerefreshtype)|false|none|
|» AutoScalingGroupName|body|object|true|none|
|» Strategy|body|object|false|none|
|» DesiredConfiguration|body|object|false|none|
|» » LaunchTemplate|body|object|false|none|
|» » » LaunchTemplateId|body|object|false|none|
|» » » LaunchTemplateName|body|object|false|none|
|» » » Version|body|object|false|none|
|» » MixedInstancesPolicy|body|object|false|none|
|» » » LaunchTemplate|body|object|false|none|
|» » » » LaunchTemplateSpecification|body|object|false|none|
|» » » » » LaunchTemplateId|body|object|false|none|
|» » » » » LaunchTemplateName|body|object|false|none|
|» » » » » Version|body|object|false|none|
|» » » » Overrides|body|object|false|none|
|» » » InstancesDistribution|body|object|false|none|
|» » » » OnDemandAllocationStrategy|body|object|false|none|
|» » » » OnDemandBaseCapacity|body|object|false|none|
|» » » » OnDemandPercentageAboveBaseCapacity|body|object|false|none|
|» » » » SpotAllocationStrategy|body|object|false|none|
|» » » » SpotInstancePools|body|object|false|none|
|» » » » SpotMaxPrice|body|object|false|none|
|» Preferences|body|object|false|none|
|» » MinHealthyPercentage|body|object|false|none|
|» » InstanceWarmup|body|object|false|none|
|» » CheckpointPercentages|body|object|false|none|
|» » CheckpointDelay|body|object|false|none|
|» » SkipMatching|body|object|false|none|
|» » AutoRollback|body|object|false|none|
|» » ScaleInProtectedInstances|body|object|false|none|
|» » StandbyInstances|body|object|false|none|
|» » AlarmSpecification|body|object|false|none|
|» » » Alarms|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|StartInstanceRefresh|
|Version|2011-01-01|

<h3 id="poststartinstancerefresh-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartInstanceRefreshAnswer](#schemastartinstancerefreshanswer)|
|480|480|LimitExceededFault|[LimitExceededFault](#schemalimitexceededfault)|
|481|481|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|
|482|482|InstanceRefreshInProgressFault|[InstanceRefreshInProgressFault](#schemainstancerefreshinprogressfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_SuspendProcesses

<a id="opIdGET_SuspendProcesses"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=SuspendProcesses?AutoScalingGroupName=string&Action=SuspendProcesses&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=SuspendProcesses`

<p>Suspends the specified auto scaling processes, or all processes, for the specified Auto Scaling group.</p> <p>If you suspend either the <code>Launch</code> or <code>Terminate</code> process types, it can prevent other process types from functioning properly. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html">Suspending and resuming scaling processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>To resume processes that have been suspended, call the <a>ResumeProcesses</a> API.</p>

<h3 id="getsuspendprocesses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AutoScalingGroupName|query|string|true|The name of the Auto Scaling group.|
|ScalingProcesses|query|[[XmlStringMaxLen255](#schemaxmlstringmaxlen255)]|false|<p>One or more of the following processes:</p> <ul> <li> <p> <code>Launch</code> </p> </li> <li> <p> <code>Terminate</code> </p> </li> <li> <p> <code>AddToLoadBalancer</code> </p> </li> <li> <p> <code>AlarmNotification</code> </p> </li> <li> <p> <code>AZRebalance</code> </p> </li> <li> <p> <code>HealthCheck</code> </p> </li> <li> <p> <code>InstanceRefresh</code> </p> </li> <li> <p> <code>ReplaceUnhealthy</code> </p> </li> <li> <p> <code>ScheduledActions</code> </p> </li> </ul> <p>If you omit this property, all processes are specified.</p>|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|SuspendProcesses|
|Version|2011-01-01|

<h3 id="getsuspendprocesses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceInUseFault|[ResourceInUseFault](#schemaresourceinusefault)|
|481|481|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_SuspendProcesses

<a id="opIdPOST_SuspendProcesses"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=SuspendProcesses?Action=SuspendProcesses&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AutoScalingGroupName":{},"ScalingProcesses":{}}'
```

`POST /#Action=SuspendProcesses`

<p>Suspends the specified auto scaling processes, or all processes, for the specified Auto Scaling group.</p> <p>If you suspend either the <code>Launch</code> or <code>Terminate</code> process types, it can prevent other process types from functioning properly. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html">Suspending and resuming scaling processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>To resume processes that have been suspended, call the <a>ResumeProcesses</a> API.</p>

> Body parameter

```json
{
  "AutoScalingGroupName": {},
  "ScalingProcesses": {}
}
```

<h3 id="postsuspendprocesses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ScalingProcessQuery](#schemascalingprocessquery)|false|none|
|» AutoScalingGroupName|body|object|true|none|
|» ScalingProcesses|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|SuspendProcesses|
|Version|2011-01-01|

<h3 id="postsuspendprocesses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceInUseFault|[ResourceInUseFault](#schemaresourceinusefault)|
|481|481|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_TerminateInstanceInAutoScalingGroup

<a id="opIdGET_TerminateInstanceInAutoScalingGroup"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=TerminateInstanceInAutoScalingGroup?InstanceId=string&ShouldDecrementDesiredCapacity=true&Action=TerminateInstanceInAutoScalingGroup&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=TerminateInstanceInAutoScalingGroup`

<p>Terminates the specified instance and optionally adjusts the desired group size. This operation cannot be called on instances in a warm pool.</p> <p>This call simply makes a termination request. The instance is not terminated immediately. When an instance is terminated, the instance status changes to <code>terminated</code>. You can't connect to or start an instance after you've terminated it.</p> <p>If you do not specify the option to decrement the desired capacity, Amazon EC2 Auto Scaling launches instances to replace the ones that are terminated. </p> <p>By default, Amazon EC2 Auto Scaling balances instances across all Availability Zones. If you decrement the desired capacity, your Auto Scaling group can become unbalanced between Availability Zones. Amazon EC2 Auto Scaling tries to rebalance the group, and rebalancing might terminate instances in other zones. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-benefits.html#AutoScalingBehavior.InstanceUsage">Rebalancing activities</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

<h3 id="getterminateinstanceinautoscalinggroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|query|string|true|The ID of the instance.|
|ShouldDecrementDesiredCapacity|query|boolean|true|Indicates whether terminating the instance also decrements the size of the Auto Scaling group.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|TerminateInstanceInAutoScalingGroup|
|Version|2011-01-01|

<h3 id="getterminateinstanceinautoscalinggroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ActivityType](#schemaactivitytype)|
|480|480|ScalingActivityInProgressFault|[ScalingActivityInProgressFault](#schemascalingactivityinprogressfault)|
|481|481|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_TerminateInstanceInAutoScalingGroup

<a id="opIdPOST_TerminateInstanceInAutoScalingGroup"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=TerminateInstanceInAutoScalingGroup?Action=TerminateInstanceInAutoScalingGroup&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"InstanceId":{},"ShouldDecrementDesiredCapacity":{}}'
```

`POST /#Action=TerminateInstanceInAutoScalingGroup`

<p>Terminates the specified instance and optionally adjusts the desired group size. This operation cannot be called on instances in a warm pool.</p> <p>This call simply makes a termination request. The instance is not terminated immediately. When an instance is terminated, the instance status changes to <code>terminated</code>. You can't connect to or start an instance after you've terminated it.</p> <p>If you do not specify the option to decrement the desired capacity, Amazon EC2 Auto Scaling launches instances to replace the ones that are terminated. </p> <p>By default, Amazon EC2 Auto Scaling balances instances across all Availability Zones. If you decrement the desired capacity, your Auto Scaling group can become unbalanced between Availability Zones. Amazon EC2 Auto Scaling tries to rebalance the group, and rebalancing might terminate instances in other zones. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-benefits.html#AutoScalingBehavior.InstanceUsage">Rebalancing activities</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

> Body parameter

```json
{
  "InstanceId": {},
  "ShouldDecrementDesiredCapacity": {}
}
```

<h3 id="postterminateinstanceinautoscalinggroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[TerminateInstanceInAutoScalingGroupType](#schematerminateinstanceinautoscalinggrouptype)|false|none|
|» InstanceId|body|object|true|none|
|» ShouldDecrementDesiredCapacity|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|TerminateInstanceInAutoScalingGroup|
|Version|2011-01-01|

<h3 id="postterminateinstanceinautoscalinggroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ActivityType](#schemaactivitytype)|
|480|480|ScalingActivityInProgressFault|[ScalingActivityInProgressFault](#schemascalingactivityinprogressfault)|
|481|481|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_UpdateAutoScalingGroup

<a id="opIdGET_UpdateAutoScalingGroup"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=UpdateAutoScalingGroup?AutoScalingGroupName=string&Action=UpdateAutoScalingGroup&Version=2011-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=UpdateAutoScalingGroup`

<p> <b>We strongly recommend that all Auto Scaling groups use launch templates to ensure full functionality for Amazon EC2 Auto Scaling and Amazon EC2.</b> </p> <p>Updates the configuration for the specified Auto Scaling group.</p> <p>To update an Auto Scaling group, specify the name of the group and the property that you want to change. Any properties that you don't specify are not changed by this update request. The new settings take effect on any scaling activities after this call returns. </p> <p>If you associate a new launch configuration or template with an Auto Scaling group, all new instances will get the updated configuration. Existing instances continue to run with the configuration that they were originally launched with. When you update a group to specify a mixed instances policy instead of a launch configuration or template, existing instances may be replaced to match the new purchasing options that you specified in the policy. For example, if the group currently has 100% On-Demand capacity and the policy specifies 50% Spot capacity, this means that half of your instances will be gradually terminated and relaunched as Spot Instances. When replacing instances, Amazon EC2 Auto Scaling launches new instances before terminating the old ones, so that updating your group does not compromise the performance or availability of your application.</p> <p>Note the following about changing <code>DesiredCapacity</code>, <code>MaxSize</code>, or <code>MinSize</code>:</p> <ul> <li> <p>If a scale-in activity occurs as a result of a new <code>DesiredCapacity</code> value that is lower than the current size of the group, the Auto Scaling group uses its termination policy to determine which instances to terminate.</p> </li> <li> <p>If you specify a new value for <code>MinSize</code> without specifying a value for <code>DesiredCapacity</code>, and the new <code>MinSize</code> is larger than the current size of the group, this sets the group's <code>DesiredCapacity</code> to the new <code>MinSize</code> value.</p> </li> <li> <p>If you specify a new value for <code>MaxSize</code> without specifying a value for <code>DesiredCapacity</code>, and the new <code>MaxSize</code> is smaller than the current size of the group, this sets the group's <code>DesiredCapacity</code> to the new <code>MaxSize</code> value.</p> </li> </ul> <p>To see which properties have been set, call the <a>DescribeAutoScalingGroups</a> API. To view the scaling policies for an Auto Scaling group, call the <a>DescribePolicies</a> API. If the group has scaling policies, you can update them by calling the <a>PutScalingPolicy</a> API.</p>

<h3 id="getupdateautoscalinggroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AutoScalingGroupName|query|string|true|The name of the Auto Scaling group.|
|LaunchConfigurationName|query|string|false|The name of the launch configuration. If you specify <code>LaunchConfigurationName</code> in your update request, you can't specify <code>LaunchTemplate</code> or <code>MixedInstancesPolicy</code>.|
|LaunchTemplate|query|object|false|The launch template and version to use to specify the updates. If you specify <code>LaunchTemplate</code> in your update request, you can't specify <code>LaunchConfigurationName</code> or <code>MixedInstancesPolicy</code>.|
|MixedInstancesPolicy|query|object|false|The mixed instances policy. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-mixed-instances-groups.html">Auto Scaling groups with multiple instance types and purchase options</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.|
|MinSize|query|integer|false|The minimum size of the Auto Scaling group.|
|MaxSize|query|integer|false|<p>The maximum size of the Auto Scaling group.</p> <note> <p>With a mixed instances policy that uses instance weighting, Amazon EC2 Auto Scaling may need to go above <code>MaxSize</code> to meet your capacity requirements. In this event, Amazon EC2 Auto Scaling will never go above <code>MaxSize</code> by more than your largest instance weight (weights that define how many units each instance contributes to the desired capacity of the group).</p> </note>|
|DesiredCapacity|query|integer|false|The desired capacity is the initial capacity of the Auto Scaling group after this operation completes and the capacity it attempts to maintain. This number must be greater than or equal to the minimum size of the group and less than or equal to the maximum size of the group.|
|DefaultCooldown|query|integer|false|<p> <i>Only needed if you use simple scaling policies.</i> </p> <p>The amount of time, in seconds, between one scaling activity ending and another one starting due to simple scaling policies. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/Cooldown.html">Scaling cooldowns for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>|
|AvailabilityZones|query|[[XmlStringMaxLen255](#schemaxmlstringmaxlen255)]|false|One or more Availability Zones for the group.|
|HealthCheckType|query|string|false|<p>A comma-separated value string of one or more health check types.</p> <p>The valid values are <code>EC2</code>, <code>ELB</code>, and <code>VPC_LATTICE</code>. <code>EC2</code> is the default health check and cannot be disabled. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/healthcheck.html">Health checks for Auto Scaling instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>Only specify <code>EC2</code> if you must clear a value that was previously set.</p>|
|HealthCheckGracePeriod|query|integer|false|The amount of time, in seconds, that Amazon EC2 Auto Scaling waits before checking the health status of an EC2 instance that has come into service and marking it unhealthy due to a failed health check. This is useful if your instances do not immediately pass their health checks after they enter the <code>InService</code> state. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/health-check-grace-period.html">Set the health check grace period for an Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.|
|PlacementGroup|query|string|false|<p>The name of an existing placement group into which to launch your instances. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">Placement groups</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p> <note> <p>A <i>cluster</i> placement group is a logical grouping of instances within a single Availability Zone. You cannot specify multiple Availability Zones and a cluster placement group. </p> </note>|
|VPCZoneIdentifier|query|string|false|A comma-separated list of subnet IDs for a virtual private cloud (VPC). If you specify <code>VPCZoneIdentifier</code> with <code>AvailabilityZones</code>, the subnets that you specify must reside in those Availability Zones.|
|TerminationPolicies|query|[[XmlStringMaxLen1600](#schemaxmlstringmaxlen1600)]|false|<p>A policy or a list of policies that are used to select the instances to terminate. The policies are executed in the order that you list them. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-termination-policies.html">Work with Amazon EC2 Auto Scaling termination policies</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>Valid values: <code>Default</code> \| <code>AllocationStrategy</code> \| <code>ClosestToNextInstanceHour</code> \| <code>NewestInstance</code> \| <code>OldestInstance</code> \| <code>OldestLaunchConfiguration</code> \| <code>OldestLaunchTemplate</code> \| <code>arn:aws:lambda:region:account-id:function:my-function:my-alias</code> </p>|
|NewInstancesProtectedFromScaleIn|query|boolean|false|Indicates whether newly launched instances are protected from termination by Amazon EC2 Auto Scaling when scaling in. For more information about preventing instances from terminating on scale in, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-instance-protection.html">Using instance scale-in protection</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.|
|ServiceLinkedRoleARN|query|string|false|The Amazon Resource Name (ARN) of the service-linked role that the Auto Scaling group uses to call other Amazon Web Services on your behalf. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-service-linked-role.html">Service-linked roles</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.|
|MaxInstanceLifetime|query|integer|false|The maximum amount of time, in seconds, that an instance can be in service. The default is null. If specified, the value must be either 0 or a number equal to or greater than 86,400 seconds (1 day). To clear a previously set value, specify a new value of 0. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-max-instance-lifetime.html">Replacing Auto Scaling instances based on maximum instance lifetime</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.|
|CapacityRebalance|query|boolean|false|Enables or disables Capacity Rebalancing. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-capacity-rebalancing.html">Use Capacity Rebalancing to handle Amazon EC2 Spot Interruptions</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.|
|Context|query|string|false|Reserved.|
|DesiredCapacityType|query|string|false|<p>The unit of measurement for the value specified for desired capacity. Amazon EC2 Auto Scaling supports <code>DesiredCapacityType</code> for attribute-based instance type selection only. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-asg-instance-type-requirements.html">Creating an Auto Scaling group using attribute-based instance type selection</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>By default, Amazon EC2 Auto Scaling specifies <code>units</code>, which translates into number of instances.</p> <p>Valid values: <code>units</code> \| <code>vcpu</code> \| <code>memory-mib</code> </p>|
|DefaultInstanceWarmup|query|integer|false|<p>The amount of time, in seconds, until a new instance is considered to have finished initializing and resource consumption to become stable after it enters the <code>InService</code> state. </p> <p>During an instance refresh, Amazon EC2 Auto Scaling waits for the warm-up period after it replaces an instance before it moves on to replacing the next instance. Amazon EC2 Auto Scaling also waits for the warm-up period before aggregating the metrics for new instances with existing instances in the Amazon CloudWatch metrics that are used for scaling, resulting in more reliable usage data. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-default-instance-warmup.html">Set the default instance warmup for an Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <important> <p>To manage various warm-up settings at the group level, we recommend that you set the default instance warmup, <i>even if it is set to 0 seconds</i>. To remove a value that you previously set, include the property but specify <code>-1</code> for the value. However, we strongly recommend keeping the default instance warmup enabled by specifying a value of <code>0</code> or other nominal value.</p> </important>|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|UpdateAutoScalingGroup|
|Version|2011-01-01|

<h3 id="getupdateautoscalinggroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ScalingActivityInProgressFault|[ScalingActivityInProgressFault](#schemascalingactivityinprogressfault)|
|481|481|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|
|482|482|ServiceLinkedRoleFailure|[ServiceLinkedRoleFailure](#schemaservicelinkedrolefailure)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_UpdateAutoScalingGroup

<a id="opIdPOST_UpdateAutoScalingGroup"></a>

> Code samples

```bash
curl 'https://autoscaling.us-east-1.amazonaws.com/#Action=UpdateAutoScalingGroup?Action=UpdateAutoScalingGroup&Version=2011-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AutoScalingGroupName":{},"LaunchConfigurationName":{},"LaunchTemplate":{"LaunchTemplateId":{},"LaunchTemplateName":{},"Version":{}},"MixedInstancesPolicy":{"LaunchTemplate":{"LaunchTemplateSpecification":{"LaunchTemplateId":{},"LaunchTemplateName":{},"Version":{}},"Overrides":{}},"InstancesDistribution":{"OnDemandAllocationStrategy":{},"OnDemandBaseCapacity":{},"OnDemandPercentageAboveBaseCapacity":{},"SpotAllocationStrategy":{},"SpotInstancePools":{},"SpotMaxPrice":{}}},"MinSize":{},"MaxSize":{},"DesiredCapacity":{},"DefaultCooldown":{},"AvailabilityZones":{},"HealthCheckType":{},"HealthCheckGracePeriod":{},"PlacementGroup":{},"VPCZoneIdentifier":{},"TerminationPolicies":{},"NewInstancesProtectedFromScaleIn":{},"ServiceLinkedRoleARN":{},"MaxInstanceLifetime":{},"CapacityRebalance":{},"Context":{},"DesiredCapacityType":{},"DefaultInstanceWarmup":{}}'
```

`POST /#Action=UpdateAutoScalingGroup`

<p> <b>We strongly recommend that all Auto Scaling groups use launch templates to ensure full functionality for Amazon EC2 Auto Scaling and Amazon EC2.</b> </p> <p>Updates the configuration for the specified Auto Scaling group.</p> <p>To update an Auto Scaling group, specify the name of the group and the property that you want to change. Any properties that you don't specify are not changed by this update request. The new settings take effect on any scaling activities after this call returns. </p> <p>If you associate a new launch configuration or template with an Auto Scaling group, all new instances will get the updated configuration. Existing instances continue to run with the configuration that they were originally launched with. When you update a group to specify a mixed instances policy instead of a launch configuration or template, existing instances may be replaced to match the new purchasing options that you specified in the policy. For example, if the group currently has 100% On-Demand capacity and the policy specifies 50% Spot capacity, this means that half of your instances will be gradually terminated and relaunched as Spot Instances. When replacing instances, Amazon EC2 Auto Scaling launches new instances before terminating the old ones, so that updating your group does not compromise the performance or availability of your application.</p> <p>Note the following about changing <code>DesiredCapacity</code>, <code>MaxSize</code>, or <code>MinSize</code>:</p> <ul> <li> <p>If a scale-in activity occurs as a result of a new <code>DesiredCapacity</code> value that is lower than the current size of the group, the Auto Scaling group uses its termination policy to determine which instances to terminate.</p> </li> <li> <p>If you specify a new value for <code>MinSize</code> without specifying a value for <code>DesiredCapacity</code>, and the new <code>MinSize</code> is larger than the current size of the group, this sets the group's <code>DesiredCapacity</code> to the new <code>MinSize</code> value.</p> </li> <li> <p>If you specify a new value for <code>MaxSize</code> without specifying a value for <code>DesiredCapacity</code>, and the new <code>MaxSize</code> is smaller than the current size of the group, this sets the group's <code>DesiredCapacity</code> to the new <code>MaxSize</code> value.</p> </li> </ul> <p>To see which properties have been set, call the <a>DescribeAutoScalingGroups</a> API. To view the scaling policies for an Auto Scaling group, call the <a>DescribePolicies</a> API. If the group has scaling policies, you can update them by calling the <a>PutScalingPolicy</a> API.</p>

> Body parameter

```json
{
  "AutoScalingGroupName": {},
  "LaunchConfigurationName": {},
  "LaunchTemplate": {
    "LaunchTemplateId": {},
    "LaunchTemplateName": {},
    "Version": {}
  },
  "MixedInstancesPolicy": {
    "LaunchTemplate": {
      "LaunchTemplateSpecification": {
        "LaunchTemplateId": {},
        "LaunchTemplateName": {},
        "Version": {}
      },
      "Overrides": {}
    },
    "InstancesDistribution": {
      "OnDemandAllocationStrategy": {},
      "OnDemandBaseCapacity": {},
      "OnDemandPercentageAboveBaseCapacity": {},
      "SpotAllocationStrategy": {},
      "SpotInstancePools": {},
      "SpotMaxPrice": {}
    }
  },
  "MinSize": {},
  "MaxSize": {},
  "DesiredCapacity": {},
  "DefaultCooldown": {},
  "AvailabilityZones": {},
  "HealthCheckType": {},
  "HealthCheckGracePeriod": {},
  "PlacementGroup": {},
  "VPCZoneIdentifier": {},
  "TerminationPolicies": {},
  "NewInstancesProtectedFromScaleIn": {},
  "ServiceLinkedRoleARN": {},
  "MaxInstanceLifetime": {},
  "CapacityRebalance": {},
  "Context": {},
  "DesiredCapacityType": {},
  "DefaultInstanceWarmup": {}
}
```

<h3 id="postupdateautoscalinggroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateAutoScalingGroupType](#schemaupdateautoscalinggrouptype)|false|none|
|» AutoScalingGroupName|body|object|true|none|
|» LaunchConfigurationName|body|object|false|none|
|» LaunchTemplate|body|object|false|none|
|» » LaunchTemplateId|body|object|false|none|
|» » LaunchTemplateName|body|object|false|none|
|» » Version|body|object|false|none|
|» MixedInstancesPolicy|body|object|false|none|
|» » LaunchTemplate|body|object|false|none|
|» » » LaunchTemplateSpecification|body|object|false|none|
|» » » » LaunchTemplateId|body|object|false|none|
|» » » » LaunchTemplateName|body|object|false|none|
|» » » » Version|body|object|false|none|
|» » » Overrides|body|object|false|none|
|» » InstancesDistribution|body|object|false|none|
|» » » OnDemandAllocationStrategy|body|object|false|none|
|» » » OnDemandBaseCapacity|body|object|false|none|
|» » » OnDemandPercentageAboveBaseCapacity|body|object|false|none|
|» » » SpotAllocationStrategy|body|object|false|none|
|» » » SpotInstancePools|body|object|false|none|
|» » » SpotMaxPrice|body|object|false|none|
|» MinSize|body|object|false|none|
|» MaxSize|body|object|false|none|
|» DesiredCapacity|body|object|false|none|
|» DefaultCooldown|body|object|false|none|
|» AvailabilityZones|body|object|false|none|
|» HealthCheckType|body|object|false|none|
|» HealthCheckGracePeriod|body|object|false|none|
|» PlacementGroup|body|object|false|none|
|» VPCZoneIdentifier|body|object|false|none|
|» TerminationPolicies|body|object|false|none|
|» NewInstancesProtectedFromScaleIn|body|object|false|none|
|» ServiceLinkedRoleARN|body|object|false|none|
|» MaxInstanceLifetime|body|object|false|none|
|» CapacityRebalance|body|object|false|none|
|» Context|body|object|false|none|
|» DesiredCapacityType|body|object|false|none|
|» DefaultInstanceWarmup|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|UpdateAutoScalingGroup|
|Version|2011-01-01|

<h3 id="postupdateautoscalinggroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ScalingActivityInProgressFault|[ScalingActivityInProgressFault](#schemascalingactivityinprogressfault)|
|481|481|ResourceContentionFault|[ResourceContentionFault](#schemaresourcecontentionfault)|
|482|482|ServiceLinkedRoleFailure|[ServiceLinkedRoleFailure](#schemaservicelinkedrolefailure)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_XmlStringMaxLen19">XmlStringMaxLen19</h2>
<!-- backwards compatibility -->
<a id="schemaxmlstringmaxlen19"></a>
<a id="schema_XmlStringMaxLen19"></a>
<a id="tocSxmlstringmaxlen19"></a>
<a id="tocsxmlstringmaxlen19"></a>

```json
"string"
```

<h2 id="tocS_ResourceContentionFault">ResourceContentionFault</h2>
<!-- backwards compatibility -->
<a id="schemaresourcecontentionfault"></a>
<a id="schema_ResourceContentionFault"></a>
<a id="tocSresourcecontentionfault"></a>
<a id="tocsresourcecontentionfault"></a>

```json
null
```

<h2 id="tocS_ServiceLinkedRoleFailure">ServiceLinkedRoleFailure</h2>
<!-- backwards compatibility -->
<a id="schemaservicelinkedrolefailure"></a>
<a id="schema_ServiceLinkedRoleFailure"></a>
<a id="tocSservicelinkedrolefailure"></a>
<a id="tocsservicelinkedrolefailure"></a>

```json
null
```

<h2 id="tocS_AttachLoadBalancerTargetGroupsResultType">AttachLoadBalancerTargetGroupsResultType</h2>
<!-- backwards compatibility -->
<a id="schemaattachloadbalancertargetgroupsresulttype"></a>
<a id="schema_AttachLoadBalancerTargetGroupsResultType"></a>
<a id="tocSattachloadbalancertargetgroupsresulttype"></a>
<a id="tocsattachloadbalancertargetgroupsresulttype"></a>

```json
{}
```

<h2 id="tocS_XmlStringMaxLen511">XmlStringMaxLen511</h2>
<!-- backwards compatibility -->
<a id="schemaxmlstringmaxlen511"></a>
<a id="schema_XmlStringMaxLen511"></a>
<a id="tocSxmlstringmaxlen511"></a>
<a id="tocsxmlstringmaxlen511"></a>

```json
"string"
```

<h2 id="tocS_AttachLoadBalancersResultType">AttachLoadBalancersResultType</h2>
<!-- backwards compatibility -->
<a id="schemaattachloadbalancersresulttype"></a>
<a id="schema_AttachLoadBalancersResultType"></a>
<a id="tocSattachloadbalancersresulttype"></a>
<a id="tocsattachloadbalancersresulttype"></a>

```json
{}
```

<h2 id="tocS_XmlStringMaxLen255">XmlStringMaxLen255</h2>
<!-- backwards compatibility -->
<a id="schemaxmlstringmaxlen255"></a>
<a id="schema_XmlStringMaxLen255"></a>
<a id="tocSxmlstringmaxlen255"></a>
<a id="tocsxmlstringmaxlen255"></a>

```json
"string"
```

<h2 id="tocS_AttachTrafficSourcesResultType">AttachTrafficSourcesResultType</h2>
<!-- backwards compatibility -->
<a id="schemaattachtrafficsourcesresulttype"></a>
<a id="schema_AttachTrafficSourcesResultType"></a>
<a id="tocSattachtrafficsourcesresulttype"></a>
<a id="tocsattachtrafficsourcesresulttype"></a>

```json
{}
```

<h2 id="tocS_TrafficSourceIdentifier">TrafficSourceIdentifier</h2>
<!-- backwards compatibility -->
<a id="schematrafficsourceidentifier"></a>
<a id="schema_TrafficSourceIdentifier"></a>
<a id="tocStrafficsourceidentifier"></a>
<a id="tocstrafficsourceidentifier"></a>

```json
{
  "Identifier": {},
  "Type": {}
}
```

Identifying information for a traffic source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Identifier|object|true|none|none|
|Type|object|false|none|none|

<h2 id="tocS_BatchDeleteScheduledActionAnswer">BatchDeleteScheduledActionAnswer</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeletescheduledactionanswer"></a>
<a id="schema_BatchDeleteScheduledActionAnswer"></a>
<a id="tocSbatchdeletescheduledactionanswer"></a>
<a id="tocsbatchdeletescheduledactionanswer"></a>

```json
{
  "FailedScheduledActions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FailedScheduledActions|object|false|none|none|

<h2 id="tocS_BatchPutScheduledUpdateGroupActionAnswer">BatchPutScheduledUpdateGroupActionAnswer</h2>
<!-- backwards compatibility -->
<a id="schemabatchputscheduledupdategroupactionanswer"></a>
<a id="schema_BatchPutScheduledUpdateGroupActionAnswer"></a>
<a id="tocSbatchputscheduledupdategroupactionanswer"></a>
<a id="tocsbatchputscheduledupdategroupactionanswer"></a>

```json
{
  "FailedScheduledUpdateGroupActions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FailedScheduledUpdateGroupActions|object|false|none|none|

<h2 id="tocS_ScheduledUpdateGroupActionRequest">ScheduledUpdateGroupActionRequest</h2>
<!-- backwards compatibility -->
<a id="schemascheduledupdategroupactionrequest"></a>
<a id="schema_ScheduledUpdateGroupActionRequest"></a>
<a id="tocSscheduledupdategroupactionrequest"></a>
<a id="tocsscheduledupdategroupactionrequest"></a>

```json
{
  "ScheduledActionName": {},
  "StartTime": {},
  "EndTime": {},
  "Recurrence": {},
  "MinSize": {},
  "MaxSize": {},
  "DesiredCapacity": {},
  "TimeZone": {}
}
```

Describes information used for one or more scheduled scaling action updates in a <a>BatchPutScheduledUpdateGroupAction</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScheduledActionName|object|true|none|none|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|
|Recurrence|object|false|none|none|
|MinSize|object|false|none|none|
|MaxSize|object|false|none|none|
|DesiredCapacity|object|false|none|none|
|TimeZone|object|false|none|none|

<h2 id="tocS_AlreadyExistsFault">AlreadyExistsFault</h2>
<!-- backwards compatibility -->
<a id="schemaalreadyexistsfault"></a>
<a id="schema_AlreadyExistsFault"></a>
<a id="tocSalreadyexistsfault"></a>
<a id="tocsalreadyexistsfault"></a>

```json
null
```

<h2 id="tocS_LimitExceededFault">LimitExceededFault</h2>
<!-- backwards compatibility -->
<a id="schemalimitexceededfault"></a>
<a id="schema_LimitExceededFault"></a>
<a id="tocSlimitexceededfault"></a>
<a id="tocslimitexceededfault"></a>

```json
null
```

<h2 id="tocS_CancelInstanceRefreshAnswer">CancelInstanceRefreshAnswer</h2>
<!-- backwards compatibility -->
<a id="schemacancelinstancerefreshanswer"></a>
<a id="schema_CancelInstanceRefreshAnswer"></a>
<a id="tocScancelinstancerefreshanswer"></a>
<a id="tocscancelinstancerefreshanswer"></a>

```json
{
  "InstanceRefreshId": "08b91cf7-8fa6-48af-b6a6-d227f40f1b9b"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceRefreshId|object|false|none|none|

<h2 id="tocS_ActiveInstanceRefreshNotFoundFault">ActiveInstanceRefreshNotFoundFault</h2>
<!-- backwards compatibility -->
<a id="schemaactiveinstancerefreshnotfoundfault"></a>
<a id="schema_ActiveInstanceRefreshNotFoundFault"></a>
<a id="tocSactiveinstancerefreshnotfoundfault"></a>
<a id="tocsactiveinstancerefreshnotfoundfault"></a>

```json
null
```

<h2 id="tocS_CompleteLifecycleActionAnswer">CompleteLifecycleActionAnswer</h2>
<!-- backwards compatibility -->
<a id="schemacompletelifecycleactionanswer"></a>
<a id="schema_CompleteLifecycleActionAnswer"></a>
<a id="tocScompletelifecycleactionanswer"></a>
<a id="tocscompletelifecycleactionanswer"></a>

```json
{}
```

<h2 id="tocS_LaunchTemplateName">LaunchTemplateName</h2>
<!-- backwards compatibility -->
<a id="schemalaunchtemplatename"></a>
<a id="schema_LaunchTemplateName"></a>
<a id="tocSlaunchtemplatename"></a>
<a id="tocslaunchtemplatename"></a>

```json
"string"
```

<h2 id="tocS_LaunchTemplate">LaunchTemplate</h2>
<!-- backwards compatibility -->
<a id="schemalaunchtemplate"></a>
<a id="schema_LaunchTemplate"></a>
<a id="tocSlaunchtemplate"></a>
<a id="tocslaunchtemplate"></a>

```json
{
  "LaunchTemplateSpecification": {
    "LaunchTemplateId": {},
    "LaunchTemplateName": {},
    "Version": {}
  },
  "Overrides": {}
}
```

Use this structure to specify the launch templates and instance types (overrides) for a mixed instances policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LaunchTemplateSpecification|object|false|none|none|
|Overrides|object|false|none|none|

<h2 id="tocS_InstancesDistribution">InstancesDistribution</h2>
<!-- backwards compatibility -->
<a id="schemainstancesdistribution"></a>
<a id="schema_InstancesDistribution"></a>
<a id="tocSinstancesdistribution"></a>
<a id="tocsinstancesdistribution"></a>

```json
{
  "OnDemandAllocationStrategy": {},
  "OnDemandBaseCapacity": {},
  "OnDemandPercentageAboveBaseCapacity": {},
  "SpotAllocationStrategy": {},
  "SpotInstancePools": {},
  "SpotMaxPrice": {}
}
```

Use this structure to specify the distribution of On-Demand Instances and Spot Instances and the allocation strategies used to fulfill On-Demand and Spot capacities for a mixed instances policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OnDemandAllocationStrategy|object|false|none|none|
|OnDemandBaseCapacity|object|false|none|none|
|OnDemandPercentageAboveBaseCapacity|object|false|none|none|
|SpotAllocationStrategy|object|false|none|none|
|SpotInstancePools|object|false|none|none|
|SpotMaxPrice|object|false|none|none|

<h2 id="tocS_XmlStringMaxLen1600">XmlStringMaxLen1600</h2>
<!-- backwards compatibility -->
<a id="schemaxmlstringmaxlen1600"></a>
<a id="schema_XmlStringMaxLen1600"></a>
<a id="tocSxmlstringmaxlen1600"></a>
<a id="tocsxmlstringmaxlen1600"></a>

```json
"string"
```

<h2 id="tocS_LifecycleHookSpecification">LifecycleHookSpecification</h2>
<!-- backwards compatibility -->
<a id="schemalifecyclehookspecification"></a>
<a id="schema_LifecycleHookSpecification"></a>
<a id="tocSlifecyclehookspecification"></a>
<a id="tocslifecyclehookspecification"></a>

```json
{
  "LifecycleHookName": {},
  "LifecycleTransition": {},
  "NotificationMetadata": {},
  "HeartbeatTimeout": {},
  "DefaultResult": {},
  "NotificationTargetARN": {},
  "RoleARN": {}
}
```

<p>Describes information used to specify a lifecycle hook for an Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling lifecycle hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LifecycleHookName|object|true|none|none|
|LifecycleTransition|object|true|none|none|
|NotificationMetadata|object|false|none|none|
|HeartbeatTimeout|object|false|none|none|
|DefaultResult|object|false|none|none|
|NotificationTargetARN|object|false|none|none|
|RoleARN|object|false|none|none|

<h2 id="tocS_Tag">Tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "ResourceId": {},
  "ResourceType": {},
  "Key": {},
  "Value": {},
  "PropagateAtLaunch": {}
}
```

Describes a tag for an Auto Scaling group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|false|none|none|
|ResourceType|object|false|none|none|
|Key|object|true|none|none|
|Value|object|false|none|none|
|PropagateAtLaunch|object|false|none|none|

<h2 id="tocS_XmlString">XmlString</h2>
<!-- backwards compatibility -->
<a id="schemaxmlstring"></a>
<a id="schema_XmlString"></a>
<a id="tocSxmlstring"></a>
<a id="tocsxmlstring"></a>

```json
"string"
```

<h2 id="tocS_BlockDeviceMapping">BlockDeviceMapping</h2>
<!-- backwards compatibility -->
<a id="schemablockdevicemapping"></a>
<a id="schema_BlockDeviceMapping"></a>
<a id="tocSblockdevicemapping"></a>
<a id="tocsblockdevicemapping"></a>

```json
{
  "VirtualName": {},
  "DeviceName": {},
  "Ebs": {
    "SnapshotId": {},
    "VolumeSize": {},
    "VolumeType": {},
    "DeleteOnTermination": {},
    "Iops": {},
    "Encrypted": {},
    "Throughput": {}
  },
  "NoDevice": {}
}
```

Describes a block device mapping.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VirtualName|object|false|none|none|
|DeviceName|object|true|none|none|
|Ebs|object|false|none|none|
|NoDevice|object|false|none|none|

<h2 id="tocS_MonitoringEnabled">MonitoringEnabled</h2>
<!-- backwards compatibility -->
<a id="schemamonitoringenabled"></a>
<a id="schema_MonitoringEnabled"></a>
<a id="tocSmonitoringenabled"></a>
<a id="tocsmonitoringenabled"></a>

```json
true
```

<h2 id="tocS_InstanceMetadataHttpTokensState">InstanceMetadataHttpTokensState</h2>
<!-- backwards compatibility -->
<a id="schemainstancemetadatahttptokensstate"></a>
<a id="schema_InstanceMetadataHttpTokensState"></a>
<a id="tocSinstancemetadatahttptokensstate"></a>
<a id="tocsinstancemetadatahttptokensstate"></a>

```json
"optional"
```

<h2 id="tocS_InstanceMetadataHttpPutResponseHopLimit">InstanceMetadataHttpPutResponseHopLimit</h2>
<!-- backwards compatibility -->
<a id="schemainstancemetadatahttpputresponsehoplimit"></a>
<a id="schema_InstanceMetadataHttpPutResponseHopLimit"></a>
<a id="tocSinstancemetadatahttpputresponsehoplimit"></a>
<a id="tocsinstancemetadatahttpputresponsehoplimit"></a>

```json
1
```

<h2 id="tocS_InstanceMetadataEndpointState">InstanceMetadataEndpointState</h2>
<!-- backwards compatibility -->
<a id="schemainstancemetadataendpointstate"></a>
<a id="schema_InstanceMetadataEndpointState"></a>
<a id="tocSinstancemetadataendpointstate"></a>
<a id="tocsinstancemetadataendpointstate"></a>

```json
"disabled"
```

<h2 id="tocS_ResourceInUseFault">ResourceInUseFault</h2>
<!-- backwards compatibility -->
<a id="schemaresourceinusefault"></a>
<a id="schema_ResourceInUseFault"></a>
<a id="tocSresourceinusefault"></a>
<a id="tocsresourceinusefault"></a>

```json
null
```

<h2 id="tocS_ScalingActivityInProgressFault">ScalingActivityInProgressFault</h2>
<!-- backwards compatibility -->
<a id="schemascalingactivityinprogressfault"></a>
<a id="schema_ScalingActivityInProgressFault"></a>
<a id="tocSscalingactivityinprogressfault"></a>
<a id="tocsscalingactivityinprogressfault"></a>

```json
null
```

<h2 id="tocS_DeleteLifecycleHookAnswer">DeleteLifecycleHookAnswer</h2>
<!-- backwards compatibility -->
<a id="schemadeletelifecyclehookanswer"></a>
<a id="schema_DeleteLifecycleHookAnswer"></a>
<a id="tocSdeletelifecyclehookanswer"></a>
<a id="tocsdeletelifecyclehookanswer"></a>

```json
{}
```

<h2 id="tocS_DeleteWarmPoolAnswer">DeleteWarmPoolAnswer</h2>
<!-- backwards compatibility -->
<a id="schemadeletewarmpoolanswer"></a>
<a id="schema_DeleteWarmPoolAnswer"></a>
<a id="tocSdeletewarmpoolanswer"></a>
<a id="tocsdeletewarmpoolanswer"></a>

```json
{}
```

<h2 id="tocS_DescribeAccountLimitsAnswer">DescribeAccountLimitsAnswer</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaccountlimitsanswer"></a>
<a id="schema_DescribeAccountLimitsAnswer"></a>
<a id="tocSdescribeaccountlimitsanswer"></a>
<a id="tocsdescribeaccountlimitsanswer"></a>

```json
{
  "MaxNumberOfAutoScalingGroups": 20,
  "MaxNumberOfLaunchConfigurations": 100,
  "NumberOfAutoScalingGroups": 3,
  "NumberOfLaunchConfigurations": 5
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxNumberOfAutoScalingGroups|object|false|none|none|
|MaxNumberOfLaunchConfigurations|object|false|none|none|
|NumberOfAutoScalingGroups|object|false|none|none|
|NumberOfLaunchConfigurations|object|false|none|none|

<h2 id="tocS_DescribeAdjustmentTypesAnswer">DescribeAdjustmentTypesAnswer</h2>
<!-- backwards compatibility -->
<a id="schemadescribeadjustmenttypesanswer"></a>
<a id="schema_DescribeAdjustmentTypesAnswer"></a>
<a id="tocSdescribeadjustmenttypesanswer"></a>
<a id="tocsdescribeadjustmenttypesanswer"></a>

```json
{
  "AdjustmentTypes": [
    {
      "AdjustmentType": "ChangeInCapacity"
    },
    {
      "AdjustmentType": "ExactCapcity"
    },
    {
      "AdjustmentType": "PercentChangeInCapacity"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdjustmentTypes|object|false|none|none|

<h2 id="tocS_AutoScalingGroupsType">AutoScalingGroupsType</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalinggroupstype"></a>
<a id="schema_AutoScalingGroupsType"></a>
<a id="tocSautoscalinggroupstype"></a>
<a id="tocsautoscalinggroupstype"></a>

```json
{
  "AutoScalingGroups": [
    {
      "AutoScalingGroupARN": "arn:aws:autoscaling:us-west-1:123456789012:autoScalingGroup:12345678-1234-1234-1234-123456789012:autoScalingGroupName/my-auto-scaling-group",
      "AutoScalingGroupName": "my-auto-scaling-group",
      "AvailabilityZones": [
        "us-west-2a",
        "us-west-2b",
        "us-west-2c"
      ],
      "CreatedTime": "2023-03-09T22:15:11.611Z",
      "DefaultCooldown": 300,
      "DesiredCapacity": 2,
      "EnabledMetrics": [],
      "HealthCheckGracePeriod": 300,
      "HealthCheckType": "EC2",
      "Instances": [
        {
          "AvailabilityZone": "us-west-2c",
          "HealthStatus": "Healthy",
          "InstanceId": "i-05b4f7d5be44822a6",
          "InstanceType": "t3.micro",
          "LaunchConfigurationName": "my-launch-config",
          "LifecycleState": "InService",
          "ProtectedFromScaleIn": false
        },
        {
          "AvailabilityZone": "us-west-2b",
          "HealthStatus": "Healthy",
          "InstanceId": "i-0c20ac468fa3049e8",
          "InstanceType": "t3.micro",
          "LaunchConfigurationName": "my-launch-config",
          "LifecycleState": "InService",
          "ProtectedFromScaleIn": false
        }
      ],
      "LaunchConfigurationName": "my-launch-config",
      "LoadBalancerNames": [],
      "MaxSize": 5,
      "MinSize": 1,
      "NewInstancesProtectedFromScaleIn": false,
      "ServiceLinkedRoleARN": "arn:aws:iam::123456789012:role/aws-service-role/autoscaling.amazonaws.com/AWSServiceRoleForAutoScaling",
      "SuspendedProcesses": [],
      "Tags": [],
      "TargetGroupARNs": [],
      "TerminationPolicies": [
        "Default"
      ],
      "TrafficSources": [],
      "VPCZoneIdentifier": "subnet-5ea0c127,subnet-6194ea3b,subnet-c934b782"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingGroups|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_Filter">Filter</h2>
<!-- backwards compatibility -->
<a id="schemafilter"></a>
<a id="schema_Filter"></a>
<a id="tocSfilter"></a>
<a id="tocsfilter"></a>

```json
{
  "Name": {},
  "Values": {}
}
```

<p>Describes a filter that is used to return a more specific list of results from a describe operation.</p> <p>If you specify multiple filters, the filters are automatically logically joined with an <code>AND</code>, and the request returns only the results that match all of the specified filters. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-tagging.html">Tag Auto Scaling groups and instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Values|object|false|none|none|

<h2 id="tocS_InvalidNextToken">InvalidNextToken</h2>
<!-- backwards compatibility -->
<a id="schemainvalidnexttoken"></a>
<a id="schema_InvalidNextToken"></a>
<a id="tocSinvalidnexttoken"></a>
<a id="tocsinvalidnexttoken"></a>

```json
null
```

<h2 id="tocS_AutoScalingInstancesType">AutoScalingInstancesType</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalinginstancestype"></a>
<a id="schema_AutoScalingInstancesType"></a>
<a id="tocSautoscalinginstancestype"></a>
<a id="tocsautoscalinginstancestype"></a>

```json
{
  "AutoScalingInstances": [
    {
      "AutoScalingGroupName": "my-auto-scaling-group",
      "AvailabilityZone": "us-west-2c",
      "HealthStatus": "HEALTHY",
      "InstanceId": "i-05b4f7d5be44822a6",
      "InstanceType": "t3.micro",
      "LaunchConfigurationName": "my-launch-config",
      "LifecycleState": "InService",
      "ProtectedFromScaleIn": false
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingInstances|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeAutoScalingNotificationTypesAnswer">DescribeAutoScalingNotificationTypesAnswer</h2>
<!-- backwards compatibility -->
<a id="schemadescribeautoscalingnotificationtypesanswer"></a>
<a id="schema_DescribeAutoScalingNotificationTypesAnswer"></a>
<a id="tocSdescribeautoscalingnotificationtypesanswer"></a>
<a id="tocsdescribeautoscalingnotificationtypesanswer"></a>

```json
{
  "AutoScalingNotificationTypes": [
    "autoscaling:EC2_INSTANCE_LAUNCH",
    "autoscaling:EC2_INSTANCE_LAUNCH_ERROR",
    "autoscaling:EC2_INSTANCE_TERMINATE",
    "autoscaling:EC2_INSTANCE_TERMINATE_ERROR",
    "autoscaling:TEST_NOTIFICATION"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingNotificationTypes|object|false|none|none|

<h2 id="tocS_DescribeInstanceRefreshesAnswer">DescribeInstanceRefreshesAnswer</h2>
<!-- backwards compatibility -->
<a id="schemadescribeinstancerefreshesanswer"></a>
<a id="schema_DescribeInstanceRefreshesAnswer"></a>
<a id="tocSdescribeinstancerefreshesanswer"></a>
<a id="tocsdescribeinstancerefreshesanswer"></a>

```json
{
  "InstanceRefreshes": [
    {
      "AutoScalingGroupName": "my-auto-scaling-group",
      "InstanceRefreshId": "08b91cf7-8fa6-48af-b6a6-d227f40f1b9b",
      "InstancesToUpdate": 0,
      "PercentageComplete": 50,
      "Preferences": {
        "AlarmSpecification": {
          "Alarms": [
            "my-alarm"
          ]
        },
        "AutoRollback": true,
        "InstanceWarmup": 200,
        "MinHealthyPercentage": 90,
        "ScaleInProtectedInstances": "Ignore",
        "SkipMatching": false,
        "StandbyInstances": "Ignore"
      },
      "StartTime": "2023-06-13T16:46:52+00:00",
      "Status": "InProgress",
      "StatusReason": "Waiting for instances to warm up before continuing. For example: i-0645704820a8e83ff is warming up."
    },
    {
      "AutoScalingGroupName": "my-auto-scaling-group",
      "EndTime": "2023-06-02T13:59:45+00:00",
      "InstanceRefreshId": "0e151305-1e57-4a32-a256-1fd14157c5ec",
      "InstancesToUpdate": 0,
      "PercentageComplete": 100,
      "Preferences": {
        "AlarmSpecification": {
          "Alarms": [
            "my-alarm"
          ]
        },
        "AutoRollback": true,
        "InstanceWarmup": 200,
        "MinHealthyPercentage": 90,
        "ScaleInProtectedInstances": "Ignore",
        "SkipMatching": false,
        "StandbyInstances": "Ignore"
      },
      "StartTime": "2023-06-02T13:53:37+00:00",
      "Status": "Successful"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceRefreshes|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_LaunchConfigurationsType">LaunchConfigurationsType</h2>
<!-- backwards compatibility -->
<a id="schemalaunchconfigurationstype"></a>
<a id="schema_LaunchConfigurationsType"></a>
<a id="tocSlaunchconfigurationstype"></a>
<a id="tocslaunchconfigurationstype"></a>

```json
{
  "LaunchConfigurations": [
    {
      "AssociatePublicIpAddress": true,
      "BlockDeviceMappings": [],
      "CreatedTime": "2014-05-07T17:39:28.599Z",
      "EbsOptimized": false,
      "ImageId": "ami-043a5034",
      "InstanceMonitoring": {
        "Enabled": true
      },
      "InstanceType": "t1.micro",
      "LaunchConfigurationARN": "arn:aws:autoscaling:us-west-2:123456789012:launchConfiguration:98d3b196-4cf9-4e88-8ca1-8547c24ced8b:launchConfigurationName/my-launch-config",
      "LaunchConfigurationName": "my-launch-config",
      "SecurityGroups": [
        "sg-67ef0308"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LaunchConfigurations|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeLifecycleHookTypesAnswer">DescribeLifecycleHookTypesAnswer</h2>
<!-- backwards compatibility -->
<a id="schemadescribelifecyclehooktypesanswer"></a>
<a id="schema_DescribeLifecycleHookTypesAnswer"></a>
<a id="tocSdescribelifecyclehooktypesanswer"></a>
<a id="tocsdescribelifecyclehooktypesanswer"></a>

```json
{
  "LifecycleHookTypes": [
    "autoscaling:EC2_INSTANCE_LAUNCHING",
    "autoscaling:EC2_INSTANCE_TERMINATING"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LifecycleHookTypes|object|false|none|none|

<h2 id="tocS_DescribeLifecycleHooksAnswer">DescribeLifecycleHooksAnswer</h2>
<!-- backwards compatibility -->
<a id="schemadescribelifecyclehooksanswer"></a>
<a id="schema_DescribeLifecycleHooksAnswer"></a>
<a id="tocSdescribelifecyclehooksanswer"></a>
<a id="tocsdescribelifecyclehooksanswer"></a>

```json
{
  "LifecycleHooks": [
    {
      "AutoScalingGroupName": "my-auto-scaling-group",
      "DefaultResult": "ABANDON",
      "GlobalTimeout": 172800,
      "HeartbeatTimeout": 3600,
      "LifecycleHookName": "my-lifecycle-hook",
      "LifecycleTransition": "autoscaling:EC2_INSTANCE_LAUNCHING",
      "NotificationTargetARN": "arn:aws:sns:us-west-2:123456789012:my-sns-topic",
      "RoleARN": "arn:aws:iam::123456789012:role/my-auto-scaling-role"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LifecycleHooks|object|false|none|none|

<h2 id="tocS_AsciiStringMaxLen255">AsciiStringMaxLen255</h2>
<!-- backwards compatibility -->
<a id="schemaasciistringmaxlen255"></a>
<a id="schema_AsciiStringMaxLen255"></a>
<a id="tocSasciistringmaxlen255"></a>
<a id="tocsasciistringmaxlen255"></a>

```json
"string"
```

<h2 id="tocS_DescribeLoadBalancerTargetGroupsResponse">DescribeLoadBalancerTargetGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeloadbalancertargetgroupsresponse"></a>
<a id="schema_DescribeLoadBalancerTargetGroupsResponse"></a>
<a id="tocSdescribeloadbalancertargetgroupsresponse"></a>
<a id="tocsdescribeloadbalancertargetgroupsresponse"></a>

```json
{
  "LoadBalancerTargetGroups": [
    {
      "LoadBalancerTargetGroupARN": "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067",
      "State": "Added"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadBalancerTargetGroups|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeLoadBalancersResponse">DescribeLoadBalancersResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeloadbalancersresponse"></a>
<a id="schema_DescribeLoadBalancersResponse"></a>
<a id="tocSdescribeloadbalancersresponse"></a>
<a id="tocsdescribeloadbalancersresponse"></a>

```json
{
  "LoadBalancers": [
    {
      "LoadBalancerName": "my-load-balancer",
      "State": "Added"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadBalancers|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeMetricCollectionTypesAnswer">DescribeMetricCollectionTypesAnswer</h2>
<!-- backwards compatibility -->
<a id="schemadescribemetriccollectiontypesanswer"></a>
<a id="schema_DescribeMetricCollectionTypesAnswer"></a>
<a id="tocSdescribemetriccollectiontypesanswer"></a>
<a id="tocsdescribemetriccollectiontypesanswer"></a>

```json
{
  "Granularities": [
    {
      "Granularity": "1Minute"
    }
  ],
  "Metrics": [
    {
      "Metric": "GroupMinSize"
    },
    {
      "Metric": "GroupMaxSize"
    },
    {
      "Metric": "GroupDesiredCapacity"
    },
    {
      "Metric": "GroupInServiceInstances"
    },
    {
      "Metric": "GroupPendingInstances"
    },
    {
      "Metric": "GroupTerminatingInstances"
    },
    {
      "Metric": "GroupStandbyInstances"
    },
    {
      "Metric": "GroupTotalInstances"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Metrics|object|false|none|none|
|Granularities|object|false|none|none|

<h2 id="tocS_DescribeNotificationConfigurationsAnswer">DescribeNotificationConfigurationsAnswer</h2>
<!-- backwards compatibility -->
<a id="schemadescribenotificationconfigurationsanswer"></a>
<a id="schema_DescribeNotificationConfigurationsAnswer"></a>
<a id="tocSdescribenotificationconfigurationsanswer"></a>
<a id="tocsdescribenotificationconfigurationsanswer"></a>

```json
{
  "NotificationConfigurations": [
    {
      "AutoScalingGroupName": "my-auto-scaling-group",
      "NotificationType": "autoscaling:TEST_NOTIFICATION",
      "TopicARN": "arn:aws:sns:us-west-2:123456789012:my-sns-topic-2"
    },
    {
      "AutoScalingGroupName": "my-auto-scaling-group",
      "NotificationType": "autoscaling:TEST_NOTIFICATION",
      "TopicARN": "arn:aws:sns:us-west-2:123456789012:my-sns-topic"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotificationConfigurations|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_PoliciesType">PoliciesType</h2>
<!-- backwards compatibility -->
<a id="schemapoliciestype"></a>
<a id="schema_PoliciesType"></a>
<a id="tocSpoliciestype"></a>
<a id="tocspoliciestype"></a>

```json
{
  "ScalingPolicies": [
    {
      "AdjustmentType": "ChangeInCapacity",
      "Alarms": [],
      "AutoScalingGroupName": "my-auto-scaling-group",
      "PolicyARN": "arn:aws:autoscaling:us-west-2:123456789012:scalingPolicy:2233f3d7-6290-403b-b632-93c553560106:autoScalingGroupName/my-auto-scaling-group:policyName/ScaleIn",
      "PolicyName": "ScaleIn",
      "ScalingAdjustment": -1
    },
    {
      "AdjustmentType": "PercentChangeInCapacity",
      "Alarms": [],
      "AutoScalingGroupName": "my-auto-scaling-group",
      "Cooldown": 60,
      "MinAdjustmentStep": 2,
      "PolicyARN": "arn:aws:autoscaling:us-west-2:123456789012:scalingPolicy:2b435159-cf77-4e89-8c0e-d63b497baad7:autoScalingGroupName/my-auto-scaling-group:policyName/ScalePercentChange",
      "PolicyName": "ScalePercentChange",
      "ScalingAdjustment": 25
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScalingPolicies|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ResourceName">ResourceName</h2>
<!-- backwards compatibility -->
<a id="schemaresourcename"></a>
<a id="schema_ResourceName"></a>
<a id="tocSresourcename"></a>
<a id="tocsresourcename"></a>

```json
"string"
```

<h2 id="tocS_XmlStringMaxLen64">XmlStringMaxLen64</h2>
<!-- backwards compatibility -->
<a id="schemaxmlstringmaxlen64"></a>
<a id="schema_XmlStringMaxLen64"></a>
<a id="tocSxmlstringmaxlen64"></a>
<a id="tocsxmlstringmaxlen64"></a>

```json
"string"
```

<h2 id="tocS_ActivitiesType">ActivitiesType</h2>
<!-- backwards compatibility -->
<a id="schemaactivitiestype"></a>
<a id="schema_ActivitiesType"></a>
<a id="tocSactivitiestype"></a>
<a id="tocsactivitiestype"></a>

```json
{
  "Activities": [
    {
      "ActivityId": "f9f2d65b-f1f2-43e7-b46d-d86756459699",
      "AutoScalingGroupARN": "arn:aws:autoscaling:us-east-1:123456789012:autoScalingGroup:12345678-1234-1234-1234-123456789012:autoScalingGroupName/my-auto-scaling-group",
      "AutoScalingGroupName": "my-auto-scaling-group",
      "Cause": "At 2013-08-19T20:53:25Z a user request created an AutoScalingGroup changing the desired capacity from 0 to 1.  At 2013-08-19T20:53:29Z an instance was started in response to a difference between desired and actual capacity, increasing the capacity from 0 to 1.",
      "Description": "Launching a new EC2 instance: i-4ba0837f",
      "Details": "details",
      "EndTime": "2013-08-19T20:54:02Z",
      "Progress": 100,
      "StartTime": "2013-08-19T20:53:29.930Z",
      "StatusCode": "Successful"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Activities|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ProcessesType">ProcessesType</h2>
<!-- backwards compatibility -->
<a id="schemaprocessestype"></a>
<a id="schema_ProcessesType"></a>
<a id="tocSprocessestype"></a>
<a id="tocsprocessestype"></a>

```json
{
  "Processes": [
    {
      "ProcessName": "AZRebalance"
    },
    {
      "ProcessName": "AddToLoadBalancer"
    },
    {
      "ProcessName": "AlarmNotification"
    },
    {
      "ProcessName": "HealthCheck"
    },
    {
      "ProcessName": "Launch"
    },
    {
      "ProcessName": "ReplaceUnhealthy"
    },
    {
      "ProcessName": "ScheduledActions"
    },
    {
      "ProcessName": "Terminate"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Processes|object|false|none|none|

<h2 id="tocS_ScheduledActionsType">ScheduledActionsType</h2>
<!-- backwards compatibility -->
<a id="schemascheduledactionstype"></a>
<a id="schema_ScheduledActionsType"></a>
<a id="tocSscheduledactionstype"></a>
<a id="tocsscheduledactionstype"></a>

```json
{
  "ScheduledUpdateGroupActions": [
    {
      "AutoScalingGroupName": "my-auto-scaling-group",
      "DesiredCapacity": 4,
      "MaxSize": 6,
      "MinSize": 2,
      "Recurrence": "30 0 1 12 0",
      "ScheduledActionARN": "arn:aws:autoscaling:us-west-2:123456789012:scheduledUpdateGroupAction:8e86b655-b2e6-4410-8f29-b4f094d6871c:autoScalingGroupName/my-auto-scaling-group:scheduledActionName/my-scheduled-action",
      "ScheduledActionName": "my-scheduled-action",
      "StartTime": "2016-12-01T00:30:00Z",
      "Time": "2016-12-01T00:30:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScheduledUpdateGroupActions|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_TagsType">TagsType</h2>
<!-- backwards compatibility -->
<a id="schematagstype"></a>
<a id="schema_TagsType"></a>
<a id="tocStagstype"></a>
<a id="tocstagstype"></a>

```json
{
  "Tags": [
    {
      "Key": "Dept",
      "PropagateAtLaunch": true,
      "ResourceId": "my-auto-scaling-group",
      "ResourceType": "auto-scaling-group",
      "Value": "Research"
    },
    {
      "Key": "Role",
      "PropagateAtLaunch": true,
      "ResourceId": "my-auto-scaling-group",
      "ResourceType": "auto-scaling-group",
      "Value": "WebServer"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeTerminationPolicyTypesAnswer">DescribeTerminationPolicyTypesAnswer</h2>
<!-- backwards compatibility -->
<a id="schemadescribeterminationpolicytypesanswer"></a>
<a id="schema_DescribeTerminationPolicyTypesAnswer"></a>
<a id="tocSdescribeterminationpolicytypesanswer"></a>
<a id="tocsdescribeterminationpolicytypesanswer"></a>

```json
{
  "TerminationPolicyTypes": [
    "ClosestToNextInstanceHour",
    "Default",
    "NewestInstance",
    "OldestInstance",
    "OldestLaunchConfiguration"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TerminationPolicyTypes|object|false|none|none|

<h2 id="tocS_DescribeTrafficSourcesResponse">DescribeTrafficSourcesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribetrafficsourcesresponse"></a>
<a id="schema_DescribeTrafficSourcesResponse"></a>
<a id="tocSdescribetrafficsourcesresponse"></a>
<a id="tocsdescribetrafficsourcesresponse"></a>

```json
{
  "NextToken": "",
  "TrafficSources": [
    {
      "Identifier": "arn:aws:vpc-lattice:us-west-2:123456789012:targetgroup/tg-0e2f2665eEXAMPLE",
      "State": "InService",
      "Type": "vpc-lattice"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TrafficSources|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeWarmPoolAnswer">DescribeWarmPoolAnswer</h2>
<!-- backwards compatibility -->
<a id="schemadescribewarmpoolanswer"></a>
<a id="schema_DescribeWarmPoolAnswer"></a>
<a id="tocSdescribewarmpoolanswer"></a>
<a id="tocsdescribewarmpoolanswer"></a>

```json
{
  "WarmPoolConfiguration": {
    "MaxGroupPreparedCapacity": {},
    "MinSize": {},
    "PoolState": {},
    "Status": {},
    "InstanceReusePolicy": {
      "ReuseOnScaleIn": {}
    }
  },
  "Instances": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WarmPoolConfiguration|object|false|none|none|
|Instances|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DetachInstancesAnswer">DetachInstancesAnswer</h2>
<!-- backwards compatibility -->
<a id="schemadetachinstancesanswer"></a>
<a id="schema_DetachInstancesAnswer"></a>
<a id="tocSdetachinstancesanswer"></a>
<a id="tocsdetachinstancesanswer"></a>

```json
{
  "Activities": [
    {
      "ActivityId": "5091cb52-547a-47ce-a236-c9ccbc2cb2c9",
      "AutoScalingGroupName": "my-auto-scaling-group",
      "Cause": "At 2015-04-12T15:02:16Z instance i-93633f9b was detached in response to a user request, shrinking the capacity from 2 to 1.",
      "Description": "Detaching EC2 instance: i-93633f9b",
      "Details": "details",
      "Progress": 50,
      "StartTime": "2015-04-12T15:02:16.179Z",
      "StatusCode": "InProgress"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Activities|object|false|none|none|

<h2 id="tocS_DetachLoadBalancerTargetGroupsResultType">DetachLoadBalancerTargetGroupsResultType</h2>
<!-- backwards compatibility -->
<a id="schemadetachloadbalancertargetgroupsresulttype"></a>
<a id="schema_DetachLoadBalancerTargetGroupsResultType"></a>
<a id="tocSdetachloadbalancertargetgroupsresulttype"></a>
<a id="tocsdetachloadbalancertargetgroupsresulttype"></a>

```json
{}
```

<h2 id="tocS_DetachLoadBalancersResultType">DetachLoadBalancersResultType</h2>
<!-- backwards compatibility -->
<a id="schemadetachloadbalancersresulttype"></a>
<a id="schema_DetachLoadBalancersResultType"></a>
<a id="tocSdetachloadbalancersresulttype"></a>
<a id="tocsdetachloadbalancersresulttype"></a>

```json
{}
```

<h2 id="tocS_DetachTrafficSourcesResultType">DetachTrafficSourcesResultType</h2>
<!-- backwards compatibility -->
<a id="schemadetachtrafficsourcesresulttype"></a>
<a id="schema_DetachTrafficSourcesResultType"></a>
<a id="tocSdetachtrafficsourcesresulttype"></a>
<a id="tocsdetachtrafficsourcesresulttype"></a>

```json
{}
```

<h2 id="tocS_EnterStandbyAnswer">EnterStandbyAnswer</h2>
<!-- backwards compatibility -->
<a id="schemaenterstandbyanswer"></a>
<a id="schema_EnterStandbyAnswer"></a>
<a id="tocSenterstandbyanswer"></a>
<a id="tocsenterstandbyanswer"></a>

```json
{
  "Activities": [
    {
      "ActivityId": "ffa056b4-6ed3-41ba-ae7c-249dfae6eba1",
      "AutoScalingGroupName": "my-auto-scaling-group",
      "Cause": "At 2015-04-12T15:10:23Z instance i-93633f9b was moved to standby in response to a user request, shrinking the capacity from 2 to 1.",
      "Description": "Moving EC2 instance to Standby: i-93633f9b",
      "Details": "details",
      "Progress": 50,
      "StartTime": "2015-04-12T15:10:23.640Z",
      "StatusCode": "InProgress"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Activities|object|false|none|none|

<h2 id="tocS_ExitStandbyAnswer">ExitStandbyAnswer</h2>
<!-- backwards compatibility -->
<a id="schemaexitstandbyanswer"></a>
<a id="schema_ExitStandbyAnswer"></a>
<a id="tocSexitstandbyanswer"></a>
<a id="tocsexitstandbyanswer"></a>

```json
{
  "Activities": [
    {
      "ActivityId": "142928e1-a2dc-453a-9b24-b85ad6735928",
      "AutoScalingGroupName": "my-auto-scaling-group",
      "Cause": "At 2015-04-12T15:14:29Z instance i-93633f9b was moved out of standby in response to a user request, increasing the capacity from 1 to 2.",
      "Description": "Moving EC2 instance out of Standby: i-93633f9b",
      "Details": "details",
      "Progress": 30,
      "StartTime": "2015-04-12T15:14:29.886Z",
      "StatusCode": "PreInService"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Activities|object|false|none|none|

<h2 id="tocS_GetPredictiveScalingForecastAnswer">GetPredictiveScalingForecastAnswer</h2>
<!-- backwards compatibility -->
<a id="schemagetpredictivescalingforecastanswer"></a>
<a id="schema_GetPredictiveScalingForecastAnswer"></a>
<a id="tocSgetpredictivescalingforecastanswer"></a>
<a id="tocsgetpredictivescalingforecastanswer"></a>

```json
{
  "LoadForecast": {},
  "CapacityForecast": {
    "Timestamps": {},
    "Values": {}
  },
  "UpdateTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadForecast|object|true|none|none|
|CapacityForecast|object|true|none|none|
|UpdateTime|object|true|none|none|

<h2 id="tocS_PutLifecycleHookAnswer">PutLifecycleHookAnswer</h2>
<!-- backwards compatibility -->
<a id="schemaputlifecyclehookanswer"></a>
<a id="schema_PutLifecycleHookAnswer"></a>
<a id="tocSputlifecyclehookanswer"></a>
<a id="tocsputlifecyclehookanswer"></a>

```json
{}
```

<h2 id="tocS_PolicyARNType">PolicyARNType</h2>
<!-- backwards compatibility -->
<a id="schemapolicyarntype"></a>
<a id="schema_PolicyARNType"></a>
<a id="tocSpolicyarntype"></a>
<a id="tocspolicyarntype"></a>

```json
{
  "Alarms": [
    {
      "AlarmARN": "arn:aws:cloudwatch:us-west-2:123456789012:alarm:TargetTracking-my-asg-AlarmHigh-fc0e4183-23ac-497e-9992-691c9980c38e",
      "AlarmName": "TargetTracking-my-asg-AlarmHigh-fc0e4183-23ac-497e-9992-691c9980c38e"
    },
    {
      "AlarmARN": "arn:aws:cloudwatch:us-west-2:123456789012:alarm:TargetTracking-my-asg-AlarmLow-61a39305-ed0c-47af-bd9e-471a352ee1a2",
      "AlarmName": "TargetTracking-my-asg-AlarmLow-61a39305-ed0c-47af-bd9e-471a352ee1a2"
    }
  ],
  "PolicyARN": "arn:aws:autoscaling:us-west-2:123456789012:scalingPolicy:228f02c2-c665-4bfd-aaac-8b04080bea3c:autoScalingGroupName/my-auto-scaling-group:policyName/alb1000-target-tracking-scaling-policy"
}
```

Contains the output of PutScalingPolicy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyARN|object|false|none|none|
|Alarms|object|false|none|none|

<h2 id="tocS_StepAdjustment">StepAdjustment</h2>
<!-- backwards compatibility -->
<a id="schemastepadjustment"></a>
<a id="schema_StepAdjustment"></a>
<a id="tocSstepadjustment"></a>
<a id="tocsstepadjustment"></a>

```json
{
  "MetricIntervalLowerBound": {},
  "MetricIntervalUpperBound": {},
  "ScalingAdjustment": {}
}
```

<p>Describes information used to create a step adjustment for a step scaling policy.</p> <p>For the following examples, suppose that you have an alarm with a breach threshold of 50:</p> <ul> <li> <p>To trigger the adjustment when the metric is greater than or equal to 50 and less than 60, specify a lower bound of 0 and an upper bound of 10.</p> </li> <li> <p>To trigger the adjustment when the metric is greater than 40 and less than or equal to 50, specify a lower bound of -10 and an upper bound of 0.</p> </li> </ul> <p>There are a few rules for the step adjustments for your step policy:</p> <ul> <li> <p>The ranges of your step adjustments can't overlap or have a gap.</p> </li> <li> <p>At most, one step adjustment can have a null lower bound. If one step adjustment has a negative lower bound, then there must be a step adjustment with a null lower bound.</p> </li> <li> <p>At most, one step adjustment can have a null upper bound. If one step adjustment has a positive upper bound, then there must be a step adjustment with a null upper bound.</p> </li> <li> <p>The upper and lower bound can't be null in the same step adjustment.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-simple-step.html#as-scaling-steps">Step adjustments</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MetricIntervalLowerBound|object|false|none|none|
|MetricIntervalUpperBound|object|false|none|none|
|ScalingAdjustment|object|true|none|none|

<h2 id="tocS_PredefinedMetricSpecification">PredefinedMetricSpecification</h2>
<!-- backwards compatibility -->
<a id="schemapredefinedmetricspecification"></a>
<a id="schema_PredefinedMetricSpecification"></a>
<a id="tocSpredefinedmetricspecification"></a>
<a id="tocspredefinedmetricspecification"></a>

```json
{
  "PredefinedMetricType": {},
  "ResourceLabel": {}
}
```

Represents a predefined metric for a target tracking scaling policy to use with Amazon EC2 Auto Scaling.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PredefinedMetricType|object|true|none|none|
|ResourceLabel|object|false|none|none|

<h2 id="tocS_CustomizedMetricSpecification">CustomizedMetricSpecification</h2>
<!-- backwards compatibility -->
<a id="schemacustomizedmetricspecification"></a>
<a id="schema_CustomizedMetricSpecification"></a>
<a id="tocScustomizedmetricspecification"></a>
<a id="tocscustomizedmetricspecification"></a>

```json
{
  "MetricName": {},
  "Namespace": {},
  "Dimensions": {},
  "Statistic": {},
  "Unit": {},
  "Metrics": {}
}
```

<p>Represents a CloudWatch metric of your choosing for a target tracking scaling policy to use with Amazon EC2 Auto Scaling.</p> <p>To create your customized metric specification:</p> <ul> <li> <p>Add values for each required property from CloudWatch. You can use an existing metric, or a new metric that you create. To use your own metric, you must first publish the metric to CloudWatch. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publish custom metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> </li> <li> <p>Choose a metric that changes proportionally with capacity. The value of the metric should increase or decrease in inverse proportion to the number of capacity units. That is, the value of the metric should decrease when capacity increases.</p> </li> </ul> <p>For more information about the CloudWatch terminology below, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch concepts</a>.</p> <note> <p>Each individual service provides information about the metrics, namespace, and dimensions they use. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html">Amazon Web Services services that publish CloudWatch metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MetricName|object|false|none|none|
|Namespace|object|false|none|none|
|Dimensions|object|false|none|none|
|Statistic|object|false|none|none|
|Unit|object|false|none|none|
|Metrics|object|false|none|none|

<h2 id="tocS_MetricScale">MetricScale</h2>
<!-- backwards compatibility -->
<a id="schemametricscale"></a>
<a id="schema_MetricScale"></a>
<a id="tocSmetricscale"></a>
<a id="tocsmetricscale"></a>

```json
0
```

<h2 id="tocS_DisableScaleIn">DisableScaleIn</h2>
<!-- backwards compatibility -->
<a id="schemadisablescalein"></a>
<a id="schema_DisableScaleIn"></a>
<a id="tocSdisablescalein"></a>
<a id="tocsdisablescalein"></a>

```json
true
```

<h2 id="tocS_PredictiveScalingMetricSpecifications">PredictiveScalingMetricSpecifications</h2>
<!-- backwards compatibility -->
<a id="schemapredictivescalingmetricspecifications"></a>
<a id="schema_PredictiveScalingMetricSpecifications"></a>
<a id="tocSpredictivescalingmetricspecifications"></a>
<a id="tocspredictivescalingmetricspecifications"></a>

```json
[
  {
    "TargetValue": {},
    "PredefinedMetricPairSpecification": {
      "PredefinedMetricType": {},
      "ResourceLabel": {}
    },
    "PredefinedScalingMetricSpecification": {
      "PredefinedMetricType": {},
      "ResourceLabel": {}
    },
    "PredefinedLoadMetricSpecification": {
      "PredefinedMetricType": {},
      "ResourceLabel": {}
    },
    "CustomizedScalingMetricSpecification": {
      "MetricDataQueries": {}
    },
    "CustomizedLoadMetricSpecification": {
      "MetricDataQueries": {}
    },
    "CustomizedCapacityMetricSpecification": {
      "MetricDataQueries": {}
    }
  }
]
```

<h2 id="tocS_PredictiveScalingMode">PredictiveScalingMode</h2>
<!-- backwards compatibility -->
<a id="schemapredictivescalingmode"></a>
<a id="schema_PredictiveScalingMode"></a>
<a id="tocSpredictivescalingmode"></a>
<a id="tocspredictivescalingmode"></a>

```json
"ForecastAndScale"
```

<h2 id="tocS_PredictiveScalingSchedulingBufferTime">PredictiveScalingSchedulingBufferTime</h2>
<!-- backwards compatibility -->
<a id="schemapredictivescalingschedulingbuffertime"></a>
<a id="schema_PredictiveScalingSchedulingBufferTime"></a>
<a id="tocSpredictivescalingschedulingbuffertime"></a>
<a id="tocspredictivescalingschedulingbuffertime"></a>

```json
0
```

<h2 id="tocS_PredictiveScalingMaxCapacityBreachBehavior">PredictiveScalingMaxCapacityBreachBehavior</h2>
<!-- backwards compatibility -->
<a id="schemapredictivescalingmaxcapacitybreachbehavior"></a>
<a id="schema_PredictiveScalingMaxCapacityBreachBehavior"></a>
<a id="tocSpredictivescalingmaxcapacitybreachbehavior"></a>
<a id="tocspredictivescalingmaxcapacitybreachbehavior"></a>

```json
"HonorMaxCapacity"
```

<h2 id="tocS_PredictiveScalingMaxCapacityBuffer">PredictiveScalingMaxCapacityBuffer</h2>
<!-- backwards compatibility -->
<a id="schemapredictivescalingmaxcapacitybuffer"></a>
<a id="schema_PredictiveScalingMaxCapacityBuffer"></a>
<a id="tocSpredictivescalingmaxcapacitybuffer"></a>
<a id="tocspredictivescalingmaxcapacitybuffer"></a>

```json
0
```

<h2 id="tocS_PutWarmPoolAnswer">PutWarmPoolAnswer</h2>
<!-- backwards compatibility -->
<a id="schemaputwarmpoolanswer"></a>
<a id="schema_PutWarmPoolAnswer"></a>
<a id="tocSputwarmpoolanswer"></a>
<a id="tocsputwarmpoolanswer"></a>

```json
{}
```

<h2 id="tocS_ReuseOnScaleIn">ReuseOnScaleIn</h2>
<!-- backwards compatibility -->
<a id="schemareuseonscalein"></a>
<a id="schema_ReuseOnScaleIn"></a>
<a id="tocSreuseonscalein"></a>
<a id="tocsreuseonscalein"></a>

```json
true
```

<h2 id="tocS_RecordLifecycleActionHeartbeatAnswer">RecordLifecycleActionHeartbeatAnswer</h2>
<!-- backwards compatibility -->
<a id="schemarecordlifecycleactionheartbeatanswer"></a>
<a id="schema_RecordLifecycleActionHeartbeatAnswer"></a>
<a id="tocSrecordlifecycleactionheartbeatanswer"></a>
<a id="tocsrecordlifecycleactionheartbeatanswer"></a>

```json
{}
```

<h2 id="tocS_RollbackInstanceRefreshAnswer">RollbackInstanceRefreshAnswer</h2>
<!-- backwards compatibility -->
<a id="schemarollbackinstancerefreshanswer"></a>
<a id="schema_RollbackInstanceRefreshAnswer"></a>
<a id="tocSrollbackinstancerefreshanswer"></a>
<a id="tocsrollbackinstancerefreshanswer"></a>

```json
{
  "InstanceRefreshId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceRefreshId|object|false|none|none|

<h2 id="tocS_IrreversibleInstanceRefreshFault">IrreversibleInstanceRefreshFault</h2>
<!-- backwards compatibility -->
<a id="schemairreversibleinstancerefreshfault"></a>
<a id="schema_IrreversibleInstanceRefreshFault"></a>
<a id="tocSirreversibleinstancerefreshfault"></a>
<a id="tocsirreversibleinstancerefreshfault"></a>

```json
null
```

<h2 id="tocS_SetInstanceProtectionAnswer">SetInstanceProtectionAnswer</h2>
<!-- backwards compatibility -->
<a id="schemasetinstanceprotectionanswer"></a>
<a id="schema_SetInstanceProtectionAnswer"></a>
<a id="tocSsetinstanceprotectionanswer"></a>
<a id="tocssetinstanceprotectionanswer"></a>

```json
{}
```

<h2 id="tocS_StartInstanceRefreshAnswer">StartInstanceRefreshAnswer</h2>
<!-- backwards compatibility -->
<a id="schemastartinstancerefreshanswer"></a>
<a id="schema_StartInstanceRefreshAnswer"></a>
<a id="tocSstartinstancerefreshanswer"></a>
<a id="tocsstartinstancerefreshanswer"></a>

```json
{
  "InstanceRefreshId": "08b91cf7-8fa6-48af-b6a6-d227f40f1b9b"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceRefreshId|object|false|none|none|

<h2 id="tocS_LaunchTemplateSpecification">LaunchTemplateSpecification</h2>
<!-- backwards compatibility -->
<a id="schemalaunchtemplatespecification"></a>
<a id="schema_LaunchTemplateSpecification"></a>
<a id="tocSlaunchtemplatespecification"></a>
<a id="tocslaunchtemplatespecification"></a>

```json
{
  "LaunchTemplateId": {},
  "LaunchTemplateName": {},
  "Version": {}
}
```

Describes the launch template and the version of the launch template that Amazon EC2 Auto Scaling uses to launch Amazon EC2 instances. For more information about launch templates, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/LaunchTemplates.html">Launch templates</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LaunchTemplateId|object|false|none|none|
|LaunchTemplateName|object|false|none|none|
|Version|object|false|none|none|

<h2 id="tocS_MixedInstancesPolicy">MixedInstancesPolicy</h2>
<!-- backwards compatibility -->
<a id="schemamixedinstancespolicy"></a>
<a id="schema_MixedInstancesPolicy"></a>
<a id="tocSmixedinstancespolicy"></a>
<a id="tocsmixedinstancespolicy"></a>

```json
{
  "LaunchTemplate": {
    "LaunchTemplateSpecification": {
      "LaunchTemplateId": {},
      "LaunchTemplateName": {},
      "Version": {}
    },
    "Overrides": {}
  },
  "InstancesDistribution": {
    "OnDemandAllocationStrategy": {},
    "OnDemandBaseCapacity": {},
    "OnDemandPercentageAboveBaseCapacity": {},
    "SpotAllocationStrategy": {},
    "SpotInstancePools": {},
    "SpotMaxPrice": {}
  }
}
```

<p>Use this structure to launch multiple instance types and On-Demand Instances and Spot Instances within a single Auto Scaling group.</p> <p>A mixed instances policy contains information that Amazon EC2 Auto Scaling can use to launch instances and help optimize your costs. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-mixed-instances-groups.html">Auto Scaling groups with multiple instance types and purchase options</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LaunchTemplate|object|false|none|none|
|InstancesDistribution|object|false|none|none|

<h2 id="tocS_IntPercent">IntPercent</h2>
<!-- backwards compatibility -->
<a id="schemaintpercent"></a>
<a id="schema_IntPercent"></a>
<a id="tocSintpercent"></a>
<a id="tocsintpercent"></a>

```json
0
```

<h2 id="tocS_RefreshInstanceWarmup">RefreshInstanceWarmup</h2>
<!-- backwards compatibility -->
<a id="schemarefreshinstancewarmup"></a>
<a id="schema_RefreshInstanceWarmup"></a>
<a id="tocSrefreshinstancewarmup"></a>
<a id="tocsrefreshinstancewarmup"></a>

```json
0
```

<h2 id="tocS_CheckpointPercentages">CheckpointPercentages</h2>
<!-- backwards compatibility -->
<a id="schemacheckpointpercentages"></a>
<a id="schema_CheckpointPercentages"></a>
<a id="tocScheckpointpercentages"></a>
<a id="tocscheckpointpercentages"></a>

```json
[
  1
]
```

<h2 id="tocS_CheckpointDelay">CheckpointDelay</h2>
<!-- backwards compatibility -->
<a id="schemacheckpointdelay"></a>
<a id="schema_CheckpointDelay"></a>
<a id="tocScheckpointdelay"></a>
<a id="tocscheckpointdelay"></a>

```json
0
```

<h2 id="tocS_SkipMatching">SkipMatching</h2>
<!-- backwards compatibility -->
<a id="schemaskipmatching"></a>
<a id="schema_SkipMatching"></a>
<a id="tocSskipmatching"></a>
<a id="tocsskipmatching"></a>

```json
true
```

<h2 id="tocS_AutoRollback">AutoRollback</h2>
<!-- backwards compatibility -->
<a id="schemaautorollback"></a>
<a id="schema_AutoRollback"></a>
<a id="tocSautorollback"></a>
<a id="tocsautorollback"></a>

```json
true
```

<h2 id="tocS_ScaleInProtectedInstances">ScaleInProtectedInstances</h2>
<!-- backwards compatibility -->
<a id="schemascaleinprotectedinstances"></a>
<a id="schema_ScaleInProtectedInstances"></a>
<a id="tocSscaleinprotectedinstances"></a>
<a id="tocsscaleinprotectedinstances"></a>

```json
"Refresh"
```

<h2 id="tocS_StandbyInstances">StandbyInstances</h2>
<!-- backwards compatibility -->
<a id="schemastandbyinstances"></a>
<a id="schema_StandbyInstances"></a>
<a id="tocSstandbyinstances"></a>
<a id="tocsstandbyinstances"></a>

```json
"Terminate"
```

<h2 id="tocS_AlarmSpecification">AlarmSpecification</h2>
<!-- backwards compatibility -->
<a id="schemaalarmspecification"></a>
<a id="schema_AlarmSpecification"></a>
<a id="tocSalarmspecification"></a>
<a id="tocsalarmspecification"></a>

```json
{
  "Alarms": {}
}
```

Specifies the CloudWatch alarm specification to use in an instance refresh.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Alarms|object|false|none|none|

<h2 id="tocS_InstanceRefreshInProgressFault">InstanceRefreshInProgressFault</h2>
<!-- backwards compatibility -->
<a id="schemainstancerefreshinprogressfault"></a>
<a id="schema_InstanceRefreshInProgressFault"></a>
<a id="tocSinstancerefreshinprogressfault"></a>
<a id="tocsinstancerefreshinprogressfault"></a>

```json
null
```

<h2 id="tocS_ActivityType">ActivityType</h2>
<!-- backwards compatibility -->
<a id="schemaactivitytype"></a>
<a id="schema_ActivityType"></a>
<a id="tocSactivitytype"></a>
<a id="tocsactivitytype"></a>

```json
{
  "Activity": {
    "ActivityId": {},
    "AutoScalingGroupName": {},
    "Description": {},
    "Cause": {},
    "StartTime": {},
    "EndTime": {},
    "StatusCode": {},
    "StatusMessage": {},
    "Progress": {},
    "Details": {},
    "AutoScalingGroupState": {},
    "AutoScalingGroupARN": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Activity|object|false|none|none|

<h2 id="tocS_NullablePositiveInteger">NullablePositiveInteger</h2>
<!-- backwards compatibility -->
<a id="schemanullablepositiveinteger"></a>
<a id="schema_NullablePositiveInteger"></a>
<a id="tocSnullablepositiveinteger"></a>
<a id="tocsnullablepositiveinteger"></a>

```json
0
```

<h2 id="tocS_AcceleratorCountRequest">AcceleratorCountRequest</h2>
<!-- backwards compatibility -->
<a id="schemaacceleratorcountrequest"></a>
<a id="schema_AcceleratorCountRequest"></a>
<a id="tocSacceleratorcountrequest"></a>
<a id="tocsacceleratorcountrequest"></a>

```json
{
  "Min": {},
  "Max": {}
}
```

Specifies the minimum and maximum for the <code>AcceleratorCount</code> object when you specify <a>InstanceRequirements</a> for an Auto Scaling group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Min|object|false|none|none|
|Max|object|false|none|none|

<h2 id="tocS_AcceleratorManufacturer">AcceleratorManufacturer</h2>
<!-- backwards compatibility -->
<a id="schemaacceleratormanufacturer"></a>
<a id="schema_AcceleratorManufacturer"></a>
<a id="tocSacceleratormanufacturer"></a>
<a id="tocsacceleratormanufacturer"></a>

```json
"nvidia"
```

<h2 id="tocS_AcceleratorManufacturers">AcceleratorManufacturers</h2>
<!-- backwards compatibility -->
<a id="schemaacceleratormanufacturers"></a>
<a id="schema_AcceleratorManufacturers"></a>
<a id="tocSacceleratormanufacturers"></a>
<a id="tocsacceleratormanufacturers"></a>

```json
[
  "nvidia"
]
```

<h2 id="tocS_AcceleratorName">AcceleratorName</h2>
<!-- backwards compatibility -->
<a id="schemaacceleratorname"></a>
<a id="schema_AcceleratorName"></a>
<a id="tocSacceleratorname"></a>
<a id="tocsacceleratorname"></a>

```json
"a100"
```

<h2 id="tocS_AcceleratorNames">AcceleratorNames</h2>
<!-- backwards compatibility -->
<a id="schemaacceleratornames"></a>
<a id="schema_AcceleratorNames"></a>
<a id="tocSacceleratornames"></a>
<a id="tocsacceleratornames"></a>

```json
[
  "a100"
]
```

<h2 id="tocS_AcceleratorTotalMemoryMiBRequest">AcceleratorTotalMemoryMiBRequest</h2>
<!-- backwards compatibility -->
<a id="schemaacceleratortotalmemorymibrequest"></a>
<a id="schema_AcceleratorTotalMemoryMiBRequest"></a>
<a id="tocSacceleratortotalmemorymibrequest"></a>
<a id="tocsacceleratortotalmemorymibrequest"></a>

```json
{
  "Min": {},
  "Max": {}
}
```

Specifies the minimum and maximum for the <code>AcceleratorTotalMemoryMiB</code> object when you specify <a>InstanceRequirements</a> for an Auto Scaling group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Min|object|false|none|none|
|Max|object|false|none|none|

<h2 id="tocS_AcceleratorType">AcceleratorType</h2>
<!-- backwards compatibility -->
<a id="schemaacceleratortype"></a>
<a id="schema_AcceleratorType"></a>
<a id="tocSacceleratortype"></a>
<a id="tocsacceleratortype"></a>

```json
"gpu"
```

<h2 id="tocS_AcceleratorTypes">AcceleratorTypes</h2>
<!-- backwards compatibility -->
<a id="schemaacceleratortypes"></a>
<a id="schema_AcceleratorTypes"></a>
<a id="tocSacceleratortypes"></a>
<a id="tocsacceleratortypes"></a>

```json
[
  "gpu"
]
```

<h2 id="tocS_Activity">Activity</h2>
<!-- backwards compatibility -->
<a id="schemaactivity"></a>
<a id="schema_Activity"></a>
<a id="tocSactivity"></a>
<a id="tocsactivity"></a>

```json
{
  "ActivityId": {},
  "AutoScalingGroupName": {},
  "Description": {},
  "Cause": {},
  "StartTime": {},
  "EndTime": {},
  "StatusCode": {},
  "StatusMessage": {},
  "Progress": {},
  "Details": {},
  "AutoScalingGroupState": {},
  "AutoScalingGroupARN": {}
}
```

Describes scaling activity, which is a long-running process that represents a change to your Auto Scaling group, such as changing its size or replacing an instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActivityId|object|true|none|none|
|AutoScalingGroupName|object|true|none|none|
|Description|object|false|none|none|
|Cause|object|true|none|none|
|StartTime|object|true|none|none|
|EndTime|object|false|none|none|
|StatusCode|object|true|none|none|
|StatusMessage|object|false|none|none|
|Progress|object|false|none|none|
|Details|object|false|none|none|
|AutoScalingGroupState|object|false|none|none|
|AutoScalingGroupARN|object|false|none|none|

<h2 id="tocS_Activities">Activities</h2>
<!-- backwards compatibility -->
<a id="schemaactivities"></a>
<a id="schema_Activities"></a>
<a id="tocSactivities"></a>
<a id="tocsactivities"></a>

```json
[
  {
    "ActivityId": {},
    "AutoScalingGroupName": {},
    "Description": {},
    "Cause": {},
    "StartTime": {},
    "EndTime": {},
    "StatusCode": {},
    "StatusMessage": {},
    "Progress": {},
    "Details": {},
    "AutoScalingGroupState": {},
    "AutoScalingGroupARN": {}
  }
]
```

<h2 id="tocS_XmlStringMaxLen1023">XmlStringMaxLen1023</h2>
<!-- backwards compatibility -->
<a id="schemaxmlstringmaxlen1023"></a>
<a id="schema_XmlStringMaxLen1023"></a>
<a id="tocSxmlstringmaxlen1023"></a>
<a id="tocsxmlstringmaxlen1023"></a>

```json
"string"
```

<h2 id="tocS_TimestampType">TimestampType</h2>
<!-- backwards compatibility -->
<a id="schematimestamptype"></a>
<a id="schema_TimestampType"></a>
<a id="tocStimestamptype"></a>
<a id="tocstimestamptype"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_ScalingActivityStatusCode">ScalingActivityStatusCode</h2>
<!-- backwards compatibility -->
<a id="schemascalingactivitystatuscode"></a>
<a id="schema_ScalingActivityStatusCode"></a>
<a id="tocSscalingactivitystatuscode"></a>
<a id="tocsscalingactivitystatuscode"></a>

```json
"PendingSpotBidPlacement"
```

<h2 id="tocS_Progress">Progress</h2>
<!-- backwards compatibility -->
<a id="schemaprogress"></a>
<a id="schema_Progress"></a>
<a id="tocSprogress"></a>
<a id="tocsprogress"></a>

```json
0
```

<h2 id="tocS_AutoScalingGroupState">AutoScalingGroupState</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalinggroupstate"></a>
<a id="schema_AutoScalingGroupState"></a>
<a id="tocSautoscalinggroupstate"></a>
<a id="tocsautoscalinggroupstate"></a>

```json
"string"
```

<h2 id="tocS_ActivityIds">ActivityIds</h2>
<!-- backwards compatibility -->
<a id="schemaactivityids"></a>
<a id="schema_ActivityIds"></a>
<a id="tocSactivityids"></a>
<a id="tocsactivityids"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AdjustmentType">AdjustmentType</h2>
<!-- backwards compatibility -->
<a id="schemaadjustmenttype"></a>
<a id="schema_AdjustmentType"></a>
<a id="tocSadjustmenttype"></a>
<a id="tocsadjustmenttype"></a>

```json
{
  "AdjustmentType": {}
}
```

Describes a policy adjustment type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdjustmentType|object|false|none|none|

<h2 id="tocS_AdjustmentTypes">AdjustmentTypes</h2>
<!-- backwards compatibility -->
<a id="schemaadjustmenttypes"></a>
<a id="schema_AdjustmentTypes"></a>
<a id="tocSadjustmenttypes"></a>
<a id="tocsadjustmenttypes"></a>

```json
[
  {
    "AdjustmentType": {}
  }
]
```

<h2 id="tocS_Alarm">Alarm</h2>
<!-- backwards compatibility -->
<a id="schemaalarm"></a>
<a id="schema_Alarm"></a>
<a id="tocSalarm"></a>
<a id="tocsalarm"></a>

```json
{
  "AlarmName": {},
  "AlarmARN": {}
}
```

Describes an alarm.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AlarmName|object|false|none|none|
|AlarmARN|object|false|none|none|

<h2 id="tocS_AlarmList">AlarmList</h2>
<!-- backwards compatibility -->
<a id="schemaalarmlist"></a>
<a id="schema_AlarmList"></a>
<a id="tocSalarmlist"></a>
<a id="tocsalarmlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Alarms">Alarms</h2>
<!-- backwards compatibility -->
<a id="schemaalarms"></a>
<a id="schema_Alarms"></a>
<a id="tocSalarms"></a>
<a id="tocsalarms"></a>

```json
[
  {
    "AlarmName": {},
    "AlarmARN": {}
  }
]
```

<h2 id="tocS_AllowedInstanceType">AllowedInstanceType</h2>
<!-- backwards compatibility -->
<a id="schemaallowedinstancetype"></a>
<a id="schema_AllowedInstanceType"></a>
<a id="tocSallowedinstancetype"></a>
<a id="tocsallowedinstancetype"></a>

```json
"string"
```

<h2 id="tocS_AllowedInstanceTypes">AllowedInstanceTypes</h2>
<!-- backwards compatibility -->
<a id="schemaallowedinstancetypes"></a>
<a id="schema_AllowedInstanceTypes"></a>
<a id="tocSallowedinstancetypes"></a>
<a id="tocsallowedinstancetypes"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AssociatePublicIpAddress">AssociatePublicIpAddress</h2>
<!-- backwards compatibility -->
<a id="schemaassociatepublicipaddress"></a>
<a id="schema_AssociatePublicIpAddress"></a>
<a id="tocSassociatepublicipaddress"></a>
<a id="tocsassociatepublicipaddress"></a>

```json
true
```

<h2 id="tocS_InstanceIds">InstanceIds</h2>
<!-- backwards compatibility -->
<a id="schemainstanceids"></a>
<a id="schema_InstanceIds"></a>
<a id="tocSinstanceids"></a>
<a id="tocsinstanceids"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AttachInstancesQuery">AttachInstancesQuery</h2>
<!-- backwards compatibility -->
<a id="schemaattachinstancesquery"></a>
<a id="schema_AttachInstancesQuery"></a>
<a id="tocSattachinstancesquery"></a>
<a id="tocsattachinstancesquery"></a>

```json
{
  "InstanceIds": {},
  "AutoScalingGroupName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceIds|object|false|none|none|
|AutoScalingGroupName|object|true|none|none|

<h2 id="tocS_TargetGroupARNs">TargetGroupARNs</h2>
<!-- backwards compatibility -->
<a id="schematargetgrouparns"></a>
<a id="schema_TargetGroupARNs"></a>
<a id="tocStargetgrouparns"></a>
<a id="tocstargetgrouparns"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AttachLoadBalancerTargetGroupsType">AttachLoadBalancerTargetGroupsType</h2>
<!-- backwards compatibility -->
<a id="schemaattachloadbalancertargetgroupstype"></a>
<a id="schema_AttachLoadBalancerTargetGroupsType"></a>
<a id="tocSattachloadbalancertargetgroupstype"></a>
<a id="tocsattachloadbalancertargetgroupstype"></a>

```json
{
  "AutoScalingGroupName": {},
  "TargetGroupARNs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingGroupName|object|true|none|none|
|TargetGroupARNs|object|true|none|none|

<h2 id="tocS_LoadBalancerNames">LoadBalancerNames</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancernames"></a>
<a id="schema_LoadBalancerNames"></a>
<a id="tocSloadbalancernames"></a>
<a id="tocsloadbalancernames"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AttachLoadBalancersType">AttachLoadBalancersType</h2>
<!-- backwards compatibility -->
<a id="schemaattachloadbalancerstype"></a>
<a id="schema_AttachLoadBalancersType"></a>
<a id="tocSattachloadbalancerstype"></a>
<a id="tocsattachloadbalancerstype"></a>

```json
{
  "AutoScalingGroupName": {},
  "LoadBalancerNames": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingGroupName|object|true|none|none|
|LoadBalancerNames|object|true|none|none|

<h2 id="tocS_TrafficSources">TrafficSources</h2>
<!-- backwards compatibility -->
<a id="schematrafficsources"></a>
<a id="schema_TrafficSources"></a>
<a id="tocStrafficsources"></a>
<a id="tocstrafficsources"></a>

```json
[
  {
    "Identifier": {},
    "Type": {}
  }
]
```

<h2 id="tocS_AttachTrafficSourcesType">AttachTrafficSourcesType</h2>
<!-- backwards compatibility -->
<a id="schemaattachtrafficsourcestype"></a>
<a id="schema_AttachTrafficSourcesType"></a>
<a id="tocSattachtrafficsourcestype"></a>
<a id="tocsattachtrafficsourcestype"></a>

```json
{
  "AutoScalingGroupName": {},
  "TrafficSources": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingGroupName|object|true|none|none|
|TrafficSources|object|true|none|none|

<h2 id="tocS_AutoScalingGroupMinSize">AutoScalingGroupMinSize</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalinggroupminsize"></a>
<a id="schema_AutoScalingGroupMinSize"></a>
<a id="tocSautoscalinggroupminsize"></a>
<a id="tocsautoscalinggroupminsize"></a>

```json
0
```

<h2 id="tocS_AutoScalingGroupMaxSize">AutoScalingGroupMaxSize</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalinggroupmaxsize"></a>
<a id="schema_AutoScalingGroupMaxSize"></a>
<a id="tocSautoscalinggroupmaxsize"></a>
<a id="tocsautoscalinggroupmaxsize"></a>

```json
0
```

<h2 id="tocS_AutoScalingGroupDesiredCapacity">AutoScalingGroupDesiredCapacity</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalinggroupdesiredcapacity"></a>
<a id="schema_AutoScalingGroupDesiredCapacity"></a>
<a id="tocSautoscalinggroupdesiredcapacity"></a>
<a id="tocsautoscalinggroupdesiredcapacity"></a>

```json
0
```

<h2 id="tocS_AutoScalingGroupPredictedCapacity">AutoScalingGroupPredictedCapacity</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalinggrouppredictedcapacity"></a>
<a id="schema_AutoScalingGroupPredictedCapacity"></a>
<a id="tocSautoscalinggrouppredictedcapacity"></a>
<a id="tocsautoscalinggrouppredictedcapacity"></a>

```json
0
```

<h2 id="tocS_Cooldown">Cooldown</h2>
<!-- backwards compatibility -->
<a id="schemacooldown"></a>
<a id="schema_Cooldown"></a>
<a id="tocScooldown"></a>
<a id="tocscooldown"></a>

```json
0
```

<h2 id="tocS_AvailabilityZones">AvailabilityZones</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilityzones"></a>
<a id="schema_AvailabilityZones"></a>
<a id="tocSavailabilityzones"></a>
<a id="tocsavailabilityzones"></a>

```json
[
  "string"
]
```

<h2 id="tocS_XmlStringMaxLen32">XmlStringMaxLen32</h2>
<!-- backwards compatibility -->
<a id="schemaxmlstringmaxlen32"></a>
<a id="schema_XmlStringMaxLen32"></a>
<a id="tocSxmlstringmaxlen32"></a>
<a id="tocsxmlstringmaxlen32"></a>

```json
"string"
```

<h2 id="tocS_HealthCheckGracePeriod">HealthCheckGracePeriod</h2>
<!-- backwards compatibility -->
<a id="schemahealthcheckgraceperiod"></a>
<a id="schema_HealthCheckGracePeriod"></a>
<a id="tocShealthcheckgraceperiod"></a>
<a id="tocshealthcheckgraceperiod"></a>

```json
0
```

<h2 id="tocS_Instances">Instances</h2>
<!-- backwards compatibility -->
<a id="schemainstances"></a>
<a id="schema_Instances"></a>
<a id="tocSinstances"></a>
<a id="tocsinstances"></a>

```json
[
  {
    "InstanceId": {},
    "InstanceType": {},
    "AvailabilityZone": {},
    "LifecycleState": {},
    "HealthStatus": {},
    "LaunchConfigurationName": {},
    "LaunchTemplate": {
      "LaunchTemplateId": {},
      "LaunchTemplateName": {},
      "Version": {}
    },
    "ProtectedFromScaleIn": {},
    "WeightedCapacity": {}
  }
]
```

<h2 id="tocS_SuspendedProcesses">SuspendedProcesses</h2>
<!-- backwards compatibility -->
<a id="schemasuspendedprocesses"></a>
<a id="schema_SuspendedProcesses"></a>
<a id="tocSsuspendedprocesses"></a>
<a id="tocssuspendedprocesses"></a>

```json
[
  {
    "ProcessName": {},
    "SuspensionReason": {}
  }
]
```

<h2 id="tocS_XmlStringMaxLen2047">XmlStringMaxLen2047</h2>
<!-- backwards compatibility -->
<a id="schemaxmlstringmaxlen2047"></a>
<a id="schema_XmlStringMaxLen2047"></a>
<a id="tocSxmlstringmaxlen2047"></a>
<a id="tocsxmlstringmaxlen2047"></a>

```json
"string"
```

<h2 id="tocS_EnabledMetrics">EnabledMetrics</h2>
<!-- backwards compatibility -->
<a id="schemaenabledmetrics"></a>
<a id="schema_EnabledMetrics"></a>
<a id="tocSenabledmetrics"></a>
<a id="tocsenabledmetrics"></a>

```json
[
  {
    "Metric": {},
    "Granularity": {}
  }
]
```

<h2 id="tocS_TagDescriptionList">TagDescriptionList</h2>
<!-- backwards compatibility -->
<a id="schematagdescriptionlist"></a>
<a id="schema_TagDescriptionList"></a>
<a id="tocStagdescriptionlist"></a>
<a id="tocstagdescriptionlist"></a>

```json
[
  {
    "ResourceId": {},
    "ResourceType": {},
    "Key": {},
    "Value": {},
    "PropagateAtLaunch": {}
  }
]
```

<h2 id="tocS_TerminationPolicies">TerminationPolicies</h2>
<!-- backwards compatibility -->
<a id="schematerminationpolicies"></a>
<a id="schema_TerminationPolicies"></a>
<a id="tocSterminationpolicies"></a>
<a id="tocsterminationpolicies"></a>

```json
[
  "string"
]
```

<h2 id="tocS_InstanceProtected">InstanceProtected</h2>
<!-- backwards compatibility -->
<a id="schemainstanceprotected"></a>
<a id="schema_InstanceProtected"></a>
<a id="tocSinstanceprotected"></a>
<a id="tocsinstanceprotected"></a>

```json
true
```

<h2 id="tocS_MaxInstanceLifetime">MaxInstanceLifetime</h2>
<!-- backwards compatibility -->
<a id="schemamaxinstancelifetime"></a>
<a id="schema_MaxInstanceLifetime"></a>
<a id="tocSmaxinstancelifetime"></a>
<a id="tocsmaxinstancelifetime"></a>

```json
0
```

<h2 id="tocS_CapacityRebalanceEnabled">CapacityRebalanceEnabled</h2>
<!-- backwards compatibility -->
<a id="schemacapacityrebalanceenabled"></a>
<a id="schema_CapacityRebalanceEnabled"></a>
<a id="tocScapacityrebalanceenabled"></a>
<a id="tocscapacityrebalanceenabled"></a>

```json
true
```

<h2 id="tocS_WarmPoolConfiguration">WarmPoolConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemawarmpoolconfiguration"></a>
<a id="schema_WarmPoolConfiguration"></a>
<a id="tocSwarmpoolconfiguration"></a>
<a id="tocswarmpoolconfiguration"></a>

```json
{
  "MaxGroupPreparedCapacity": {},
  "MinSize": {},
  "PoolState": {},
  "Status": {},
  "InstanceReusePolicy": {
    "ReuseOnScaleIn": {}
  }
}
```

Describes a warm pool configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxGroupPreparedCapacity|object|false|none|none|
|MinSize|object|false|none|none|
|PoolState|object|false|none|none|
|Status|object|false|none|none|
|InstanceReusePolicy|object|false|none|none|

<h2 id="tocS_WarmPoolSize">WarmPoolSize</h2>
<!-- backwards compatibility -->
<a id="schemawarmpoolsize"></a>
<a id="schema_WarmPoolSize"></a>
<a id="tocSwarmpoolsize"></a>
<a id="tocswarmpoolsize"></a>

```json
0
```

<h2 id="tocS_Context">Context</h2>
<!-- backwards compatibility -->
<a id="schemacontext"></a>
<a id="schema_Context"></a>
<a id="tocScontext"></a>
<a id="tocscontext"></a>

```json
"string"
```

<h2 id="tocS_DefaultInstanceWarmup">DefaultInstanceWarmup</h2>
<!-- backwards compatibility -->
<a id="schemadefaultinstancewarmup"></a>
<a id="schema_DefaultInstanceWarmup"></a>
<a id="tocSdefaultinstancewarmup"></a>
<a id="tocsdefaultinstancewarmup"></a>

```json
0
```

<h2 id="tocS_AutoScalingGroup">AutoScalingGroup</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalinggroup"></a>
<a id="schema_AutoScalingGroup"></a>
<a id="tocSautoscalinggroup"></a>
<a id="tocsautoscalinggroup"></a>

```json
{
  "AutoScalingGroupName": {},
  "AutoScalingGroupARN": {},
  "LaunchConfigurationName": {},
  "LaunchTemplate": {
    "LaunchTemplateId": {},
    "LaunchTemplateName": {},
    "Version": {}
  },
  "MixedInstancesPolicy": {
    "LaunchTemplate": {
      "LaunchTemplateSpecification": {
        "LaunchTemplateId": {},
        "LaunchTemplateName": {},
        "Version": {}
      },
      "Overrides": {}
    },
    "InstancesDistribution": {
      "OnDemandAllocationStrategy": {},
      "OnDemandBaseCapacity": {},
      "OnDemandPercentageAboveBaseCapacity": {},
      "SpotAllocationStrategy": {},
      "SpotInstancePools": {},
      "SpotMaxPrice": {}
    }
  },
  "MinSize": {},
  "MaxSize": {},
  "DesiredCapacity": {},
  "PredictedCapacity": {},
  "DefaultCooldown": {},
  "AvailabilityZones": {},
  "LoadBalancerNames": {},
  "TargetGroupARNs": {},
  "HealthCheckType": {},
  "HealthCheckGracePeriod": {},
  "Instances": {},
  "CreatedTime": {},
  "SuspendedProcesses": {},
  "PlacementGroup": {},
  "VPCZoneIdentifier": {},
  "EnabledMetrics": {},
  "Status": {},
  "Tags": {},
  "TerminationPolicies": {},
  "NewInstancesProtectedFromScaleIn": {},
  "ServiceLinkedRoleARN": {},
  "MaxInstanceLifetime": {},
  "CapacityRebalance": {},
  "WarmPoolConfiguration": {
    "MaxGroupPreparedCapacity": {},
    "MinSize": {},
    "PoolState": {},
    "Status": {},
    "InstanceReusePolicy": {
      "ReuseOnScaleIn": {}
    }
  },
  "WarmPoolSize": {},
  "Context": {},
  "DesiredCapacityType": {},
  "DefaultInstanceWarmup": {},
  "TrafficSources": {}
}
```

Describes an Auto Scaling group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingGroupName|object|true|none|none|
|AutoScalingGroupARN|object|false|none|none|
|LaunchConfigurationName|object|false|none|none|
|LaunchTemplate|object|false|none|none|
|MixedInstancesPolicy|object|false|none|none|
|MinSize|object|true|none|none|
|MaxSize|object|true|none|none|
|DesiredCapacity|object|true|none|none|
|PredictedCapacity|object|false|none|none|
|DefaultCooldown|object|true|none|none|
|AvailabilityZones|object|true|none|none|
|LoadBalancerNames|object|false|none|none|
|TargetGroupARNs|object|false|none|none|
|HealthCheckType|object|true|none|none|
|HealthCheckGracePeriod|object|false|none|none|
|Instances|object|false|none|none|
|CreatedTime|object|true|none|none|
|SuspendedProcesses|object|false|none|none|
|PlacementGroup|object|false|none|none|
|VPCZoneIdentifier|object|false|none|none|
|EnabledMetrics|object|false|none|none|
|Status|object|false|none|none|
|Tags|object|false|none|none|
|TerminationPolicies|object|false|none|none|
|NewInstancesProtectedFromScaleIn|object|false|none|none|
|ServiceLinkedRoleARN|object|false|none|none|
|MaxInstanceLifetime|object|false|none|none|
|CapacityRebalance|object|false|none|none|
|WarmPoolConfiguration|object|false|none|none|
|WarmPoolSize|object|false|none|none|
|Context|object|false|none|none|
|DesiredCapacityType|object|false|none|none|
|DefaultInstanceWarmup|object|false|none|none|
|TrafficSources|object|false|none|none|

<h2 id="tocS_AutoScalingGroupNames">AutoScalingGroupNames</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalinggroupnames"></a>
<a id="schema_AutoScalingGroupNames"></a>
<a id="tocSautoscalinggroupnames"></a>
<a id="tocsautoscalinggroupnames"></a>

```json
[
  "string"
]
```

<h2 id="tocS_MaxRecords">MaxRecords</h2>
<!-- backwards compatibility -->
<a id="schemamaxrecords"></a>
<a id="schema_MaxRecords"></a>
<a id="tocSmaxrecords"></a>
<a id="tocsmaxrecords"></a>

```json
0
```

<h2 id="tocS_Filters">Filters</h2>
<!-- backwards compatibility -->
<a id="schemafilters"></a>
<a id="schema_Filters"></a>
<a id="tocSfilters"></a>
<a id="tocsfilters"></a>

```json
[
  {
    "Name": {},
    "Values": {}
  }
]
```

<h2 id="tocS_AutoScalingGroupNamesType">AutoScalingGroupNamesType</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalinggroupnamestype"></a>
<a id="schema_AutoScalingGroupNamesType"></a>
<a id="tocSautoscalinggroupnamestype"></a>
<a id="tocsautoscalinggroupnamestype"></a>

```json
{
  "AutoScalingGroupNames": {},
  "NextToken": {},
  "MaxRecords": {},
  "Filters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingGroupNames|object|false|none|none|
|NextToken|object|false|none|none|
|MaxRecords|object|false|none|none|
|Filters|object|false|none|none|

<h2 id="tocS_AutoScalingGroups">AutoScalingGroups</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalinggroups"></a>
<a id="schema_AutoScalingGroups"></a>
<a id="tocSautoscalinggroups"></a>
<a id="tocsautoscalinggroups"></a>

```json
[
  {
    "AutoScalingGroupName": {},
    "AutoScalingGroupARN": {},
    "LaunchConfigurationName": {},
    "LaunchTemplate": {
      "LaunchTemplateId": {},
      "LaunchTemplateName": {},
      "Version": {}
    },
    "MixedInstancesPolicy": {
      "LaunchTemplate": {
        "LaunchTemplateSpecification": {
          "LaunchTemplateId": {},
          "LaunchTemplateName": {},
          "Version": {}
        },
        "Overrides": {}
      },
      "InstancesDistribution": {
        "OnDemandAllocationStrategy": {},
        "OnDemandBaseCapacity": {},
        "OnDemandPercentageAboveBaseCapacity": {},
        "SpotAllocationStrategy": {},
        "SpotInstancePools": {},
        "SpotMaxPrice": {}
      }
    },
    "MinSize": {},
    "MaxSize": {},
    "DesiredCapacity": {},
    "PredictedCapacity": {},
    "DefaultCooldown": {},
    "AvailabilityZones": {},
    "LoadBalancerNames": {},
    "TargetGroupARNs": {},
    "HealthCheckType": {},
    "HealthCheckGracePeriod": {},
    "Instances": {},
    "CreatedTime": {},
    "SuspendedProcesses": {},
    "PlacementGroup": {},
    "VPCZoneIdentifier": {},
    "EnabledMetrics": {},
    "Status": {},
    "Tags": {},
    "TerminationPolicies": {},
    "NewInstancesProtectedFromScaleIn": {},
    "ServiceLinkedRoleARN": {},
    "MaxInstanceLifetime": {},
    "CapacityRebalance": {},
    "WarmPoolConfiguration": {
      "MaxGroupPreparedCapacity": {},
      "MinSize": {},
      "PoolState": {},
      "Status": {},
      "InstanceReusePolicy": {
        "ReuseOnScaleIn": {}
      }
    },
    "WarmPoolSize": {},
    "Context": {},
    "DesiredCapacityType": {},
    "DefaultInstanceWarmup": {},
    "TrafficSources": {}
  }
]
```

<h2 id="tocS_AutoScalingInstanceDetails">AutoScalingInstanceDetails</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalinginstancedetails"></a>
<a id="schema_AutoScalingInstanceDetails"></a>
<a id="tocSautoscalinginstancedetails"></a>
<a id="tocsautoscalinginstancedetails"></a>

```json
{
  "InstanceId": {},
  "InstanceType": {},
  "AutoScalingGroupName": {},
  "AvailabilityZone": {},
  "LifecycleState": {},
  "HealthStatus": {},
  "LaunchConfigurationName": {},
  "LaunchTemplate": {
    "LaunchTemplateId": {},
    "LaunchTemplateName": {},
    "Version": {}
  },
  "ProtectedFromScaleIn": {},
  "WeightedCapacity": {}
}
```

Describes an EC2 instance associated with an Auto Scaling group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|true|none|none|
|InstanceType|object|false|none|none|
|AutoScalingGroupName|object|true|none|none|
|AvailabilityZone|object|true|none|none|
|LifecycleState|object|true|none|none|
|HealthStatus|object|true|none|none|
|LaunchConfigurationName|object|false|none|none|
|LaunchTemplate|object|false|none|none|
|ProtectedFromScaleIn|object|true|none|none|
|WeightedCapacity|object|false|none|none|

<h2 id="tocS_AutoScalingInstances">AutoScalingInstances</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalinginstances"></a>
<a id="schema_AutoScalingInstances"></a>
<a id="tocSautoscalinginstances"></a>
<a id="tocsautoscalinginstances"></a>

```json
[
  {
    "InstanceId": {},
    "InstanceType": {},
    "AutoScalingGroupName": {},
    "AvailabilityZone": {},
    "LifecycleState": {},
    "HealthStatus": {},
    "LaunchConfigurationName": {},
    "LaunchTemplate": {
      "LaunchTemplateId": {},
      "LaunchTemplateName": {},
      "Version": {}
    },
    "ProtectedFromScaleIn": {},
    "WeightedCapacity": {}
  }
]
```

<h2 id="tocS_AutoScalingNotificationTypes">AutoScalingNotificationTypes</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalingnotificationtypes"></a>
<a id="schema_AutoScalingNotificationTypes"></a>
<a id="tocSautoscalingnotificationtypes"></a>
<a id="tocsautoscalingnotificationtypes"></a>

```json
[
  "string"
]
```

<h2 id="tocS_BareMetal">BareMetal</h2>
<!-- backwards compatibility -->
<a id="schemabaremetal"></a>
<a id="schema_BareMetal"></a>
<a id="tocSbaremetal"></a>
<a id="tocsbaremetal"></a>

```json
"included"
```

<h2 id="tocS_BaselineEbsBandwidthMbpsRequest">BaselineEbsBandwidthMbpsRequest</h2>
<!-- backwards compatibility -->
<a id="schemabaselineebsbandwidthmbpsrequest"></a>
<a id="schema_BaselineEbsBandwidthMbpsRequest"></a>
<a id="tocSbaselineebsbandwidthmbpsrequest"></a>
<a id="tocsbaselineebsbandwidthmbpsrequest"></a>

```json
{
  "Min": {},
  "Max": {}
}
```

Specifies the minimum and maximum for the <code>BaselineEbsBandwidthMbps</code> object when you specify <a>InstanceRequirements</a> for an Auto Scaling group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Min|object|false|none|none|
|Max|object|false|none|none|

<h2 id="tocS_FailedScheduledUpdateGroupActionRequests">FailedScheduledUpdateGroupActionRequests</h2>
<!-- backwards compatibility -->
<a id="schemafailedscheduledupdategroupactionrequests"></a>
<a id="schema_FailedScheduledUpdateGroupActionRequests"></a>
<a id="tocSfailedscheduledupdategroupactionrequests"></a>
<a id="tocsfailedscheduledupdategroupactionrequests"></a>

```json
[
  {
    "ScheduledActionName": {},
    "ErrorCode": {},
    "ErrorMessage": {}
  }
]
```

<h2 id="tocS_ScheduledActionNames">ScheduledActionNames</h2>
<!-- backwards compatibility -->
<a id="schemascheduledactionnames"></a>
<a id="schema_ScheduledActionNames"></a>
<a id="tocSscheduledactionnames"></a>
<a id="tocsscheduledactionnames"></a>

```json
[
  "string"
]
```

<h2 id="tocS_BatchDeleteScheduledActionType">BatchDeleteScheduledActionType</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeletescheduledactiontype"></a>
<a id="schema_BatchDeleteScheduledActionType"></a>
<a id="tocSbatchdeletescheduledactiontype"></a>
<a id="tocsbatchdeletescheduledactiontype"></a>

```json
{
  "AutoScalingGroupName": {},
  "ScheduledActionNames": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingGroupName|object|true|none|none|
|ScheduledActionNames|object|true|none|none|

<h2 id="tocS_ScheduledUpdateGroupActionRequests">ScheduledUpdateGroupActionRequests</h2>
<!-- backwards compatibility -->
<a id="schemascheduledupdategroupactionrequests"></a>
<a id="schema_ScheduledUpdateGroupActionRequests"></a>
<a id="tocSscheduledupdategroupactionrequests"></a>
<a id="tocsscheduledupdategroupactionrequests"></a>

```json
[
  {
    "ScheduledActionName": {},
    "StartTime": {},
    "EndTime": {},
    "Recurrence": {},
    "MinSize": {},
    "MaxSize": {},
    "DesiredCapacity": {},
    "TimeZone": {}
  }
]
```

<h2 id="tocS_BatchPutScheduledUpdateGroupActionType">BatchPutScheduledUpdateGroupActionType</h2>
<!-- backwards compatibility -->
<a id="schemabatchputscheduledupdategroupactiontype"></a>
<a id="schema_BatchPutScheduledUpdateGroupActionType"></a>
<a id="tocSbatchputscheduledupdategroupactiontype"></a>
<a id="tocsbatchputscheduledupdategroupactiontype"></a>

```json
{
  "AutoScalingGroupName": {},
  "ScheduledUpdateGroupActions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingGroupName|object|true|none|none|
|ScheduledUpdateGroupActions|object|true|none|none|

<h2 id="tocS_BlockDeviceEbsDeleteOnTermination">BlockDeviceEbsDeleteOnTermination</h2>
<!-- backwards compatibility -->
<a id="schemablockdeviceebsdeleteontermination"></a>
<a id="schema_BlockDeviceEbsDeleteOnTermination"></a>
<a id="tocSblockdeviceebsdeleteontermination"></a>
<a id="tocsblockdeviceebsdeleteontermination"></a>

```json
true
```

<h2 id="tocS_BlockDeviceEbsEncrypted">BlockDeviceEbsEncrypted</h2>
<!-- backwards compatibility -->
<a id="schemablockdeviceebsencrypted"></a>
<a id="schema_BlockDeviceEbsEncrypted"></a>
<a id="tocSblockdeviceebsencrypted"></a>
<a id="tocsblockdeviceebsencrypted"></a>

```json
true
```

<h2 id="tocS_BlockDeviceEbsIops">BlockDeviceEbsIops</h2>
<!-- backwards compatibility -->
<a id="schemablockdeviceebsiops"></a>
<a id="schema_BlockDeviceEbsIops"></a>
<a id="tocSblockdeviceebsiops"></a>
<a id="tocsblockdeviceebsiops"></a>

```json
100
```

<h2 id="tocS_BlockDeviceEbsThroughput">BlockDeviceEbsThroughput</h2>
<!-- backwards compatibility -->
<a id="schemablockdeviceebsthroughput"></a>
<a id="schema_BlockDeviceEbsThroughput"></a>
<a id="tocSblockdeviceebsthroughput"></a>
<a id="tocsblockdeviceebsthroughput"></a>

```json
125
```

<h2 id="tocS_BlockDeviceEbsVolumeSize">BlockDeviceEbsVolumeSize</h2>
<!-- backwards compatibility -->
<a id="schemablockdeviceebsvolumesize"></a>
<a id="schema_BlockDeviceEbsVolumeSize"></a>
<a id="tocSblockdeviceebsvolumesize"></a>
<a id="tocsblockdeviceebsvolumesize"></a>

```json
1
```

<h2 id="tocS_BlockDeviceEbsVolumeType">BlockDeviceEbsVolumeType</h2>
<!-- backwards compatibility -->
<a id="schemablockdeviceebsvolumetype"></a>
<a id="schema_BlockDeviceEbsVolumeType"></a>
<a id="tocSblockdeviceebsvolumetype"></a>
<a id="tocsblockdeviceebsvolumetype"></a>

```json
"string"
```

<h2 id="tocS_Ebs">Ebs</h2>
<!-- backwards compatibility -->
<a id="schemaebs"></a>
<a id="schema_Ebs"></a>
<a id="tocSebs"></a>
<a id="tocsebs"></a>

```json
{
  "SnapshotId": {},
  "VolumeSize": {},
  "VolumeType": {},
  "DeleteOnTermination": {},
  "Iops": {},
  "Encrypted": {},
  "Throughput": {}
}
```

Describes information used to set up an Amazon EBS volume specified in a block device mapping.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SnapshotId|object|false|none|none|
|VolumeSize|object|false|none|none|
|VolumeType|object|false|none|none|
|DeleteOnTermination|object|false|none|none|
|Iops|object|false|none|none|
|Encrypted|object|false|none|none|
|Throughput|object|false|none|none|

<h2 id="tocS_NoDevice">NoDevice</h2>
<!-- backwards compatibility -->
<a id="schemanodevice"></a>
<a id="schema_NoDevice"></a>
<a id="tocSnodevice"></a>
<a id="tocsnodevice"></a>

```json
true
```

<h2 id="tocS_BlockDeviceMappings">BlockDeviceMappings</h2>
<!-- backwards compatibility -->
<a id="schemablockdevicemappings"></a>
<a id="schema_BlockDeviceMappings"></a>
<a id="tocSblockdevicemappings"></a>
<a id="tocsblockdevicemappings"></a>

```json
[
  {
    "VirtualName": {},
    "DeviceName": {},
    "Ebs": {
      "SnapshotId": {},
      "VolumeSize": {},
      "VolumeType": {},
      "DeleteOnTermination": {},
      "Iops": {},
      "Encrypted": {},
      "Throughput": {}
    },
    "NoDevice": {}
  }
]
```

<h2 id="tocS_BurstablePerformance">BurstablePerformance</h2>
<!-- backwards compatibility -->
<a id="schemaburstableperformance"></a>
<a id="schema_BurstablePerformance"></a>
<a id="tocSburstableperformance"></a>
<a id="tocsburstableperformance"></a>

```json
"included"
```

<h2 id="tocS_CancelInstanceRefreshType">CancelInstanceRefreshType</h2>
<!-- backwards compatibility -->
<a id="schemacancelinstancerefreshtype"></a>
<a id="schema_CancelInstanceRefreshType"></a>
<a id="tocScancelinstancerefreshtype"></a>
<a id="tocscancelinstancerefreshtype"></a>

```json
{
  "AutoScalingGroupName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingGroupName|object|true|none|none|

<h2 id="tocS_PredictiveScalingForecastTimestamps">PredictiveScalingForecastTimestamps</h2>
<!-- backwards compatibility -->
<a id="schemapredictivescalingforecasttimestamps"></a>
<a id="schema_PredictiveScalingForecastTimestamps"></a>
<a id="tocSpredictivescalingforecasttimestamps"></a>
<a id="tocspredictivescalingforecasttimestamps"></a>

```json
[
  "1970-01-01T00:00:00Z"
]
```

<h2 id="tocS_PredictiveScalingForecastValues">PredictiveScalingForecastValues</h2>
<!-- backwards compatibility -->
<a id="schemapredictivescalingforecastvalues"></a>
<a id="schema_PredictiveScalingForecastValues"></a>
<a id="tocSpredictivescalingforecastvalues"></a>
<a id="tocspredictivescalingforecastvalues"></a>

```json
[
  0
]
```

<h2 id="tocS_CapacityForecast">CapacityForecast</h2>
<!-- backwards compatibility -->
<a id="schemacapacityforecast"></a>
<a id="schema_CapacityForecast"></a>
<a id="tocScapacityforecast"></a>
<a id="tocscapacityforecast"></a>

```json
{
  "Timestamps": {},
  "Values": {}
}
```

A <code>GetPredictiveScalingForecast</code> call returns the capacity forecast for a predictive scaling policy. This structure includes the data points for that capacity forecast, along with the timestamps of those data points.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Timestamps|object|true|none|none|
|Values|object|true|none|none|

<h2 id="tocS_NonZeroIntPercent">NonZeroIntPercent</h2>
<!-- backwards compatibility -->
<a id="schemanonzerointpercent"></a>
<a id="schema_NonZeroIntPercent"></a>
<a id="tocSnonzerointpercent"></a>
<a id="tocsnonzerointpercent"></a>

```json
1
```

<h2 id="tocS_ClassicLinkVPCSecurityGroups">ClassicLinkVPCSecurityGroups</h2>
<!-- backwards compatibility -->
<a id="schemaclassiclinkvpcsecuritygroups"></a>
<a id="schema_ClassicLinkVPCSecurityGroups"></a>
<a id="tocSclassiclinkvpcsecuritygroups"></a>
<a id="tocsclassiclinkvpcsecuritygroups"></a>

```json
[
  "string"
]
```

<h2 id="tocS_LifecycleActionToken">LifecycleActionToken</h2>
<!-- backwards compatibility -->
<a id="schemalifecycleactiontoken"></a>
<a id="schema_LifecycleActionToken"></a>
<a id="tocSlifecycleactiontoken"></a>
<a id="tocslifecycleactiontoken"></a>

```json
"stringstringstringstringstringstring"
```

<h2 id="tocS_LifecycleActionResult">LifecycleActionResult</h2>
<!-- backwards compatibility -->
<a id="schemalifecycleactionresult"></a>
<a id="schema_LifecycleActionResult"></a>
<a id="tocSlifecycleactionresult"></a>
<a id="tocslifecycleactionresult"></a>

```json
"string"
```

<h2 id="tocS_CompleteLifecycleActionType">CompleteLifecycleActionType</h2>
<!-- backwards compatibility -->
<a id="schemacompletelifecycleactiontype"></a>
<a id="schema_CompleteLifecycleActionType"></a>
<a id="tocScompletelifecycleactiontype"></a>
<a id="tocscompletelifecycleactiontype"></a>

```json
{
  "LifecycleHookName": {},
  "AutoScalingGroupName": {},
  "LifecycleActionToken": {},
  "LifecycleActionResult": {},
  "InstanceId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LifecycleHookName|object|true|none|none|
|AutoScalingGroupName|object|true|none|none|
|LifecycleActionToken|object|false|none|none|
|LifecycleActionResult|object|true|none|none|
|InstanceId|object|false|none|none|

<h2 id="tocS_CpuManufacturer">CpuManufacturer</h2>
<!-- backwards compatibility -->
<a id="schemacpumanufacturer"></a>
<a id="schema_CpuManufacturer"></a>
<a id="tocScpumanufacturer"></a>
<a id="tocscpumanufacturer"></a>

```json
"intel"
```

<h2 id="tocS_CpuManufacturers">CpuManufacturers</h2>
<!-- backwards compatibility -->
<a id="schemacpumanufacturers"></a>
<a id="schema_CpuManufacturers"></a>
<a id="tocScpumanufacturers"></a>
<a id="tocscpumanufacturers"></a>

```json
[
  "intel"
]
```

<h2 id="tocS_LifecycleHookSpecifications">LifecycleHookSpecifications</h2>
<!-- backwards compatibility -->
<a id="schemalifecyclehookspecifications"></a>
<a id="schema_LifecycleHookSpecifications"></a>
<a id="tocSlifecyclehookspecifications"></a>
<a id="tocslifecyclehookspecifications"></a>

```json
[
  {
    "LifecycleHookName": {},
    "LifecycleTransition": {},
    "NotificationMetadata": {},
    "HeartbeatTimeout": {},
    "DefaultResult": {},
    "NotificationTargetARN": {},
    "RoleARN": {}
  }
]
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
    "ResourceId": {},
    "ResourceType": {},
    "Key": {},
    "Value": {},
    "PropagateAtLaunch": {}
  }
]
```

<h2 id="tocS_CreateAutoScalingGroupType">CreateAutoScalingGroupType</h2>
<!-- backwards compatibility -->
<a id="schemacreateautoscalinggrouptype"></a>
<a id="schema_CreateAutoScalingGroupType"></a>
<a id="tocScreateautoscalinggrouptype"></a>
<a id="tocscreateautoscalinggrouptype"></a>

```json
{
  "AutoScalingGroupName": {},
  "LaunchConfigurationName": {},
  "LaunchTemplate": {
    "LaunchTemplateId": {},
    "LaunchTemplateName": {},
    "Version": {}
  },
  "MixedInstancesPolicy": {
    "LaunchTemplate": {
      "LaunchTemplateSpecification": {
        "LaunchTemplateId": {},
        "LaunchTemplateName": {},
        "Version": {}
      },
      "Overrides": {}
    },
    "InstancesDistribution": {
      "OnDemandAllocationStrategy": {},
      "OnDemandBaseCapacity": {},
      "OnDemandPercentageAboveBaseCapacity": {},
      "SpotAllocationStrategy": {},
      "SpotInstancePools": {},
      "SpotMaxPrice": {}
    }
  },
  "InstanceId": {},
  "MinSize": {},
  "MaxSize": {},
  "DesiredCapacity": {},
  "DefaultCooldown": {},
  "AvailabilityZones": {},
  "LoadBalancerNames": {},
  "TargetGroupARNs": {},
  "HealthCheckType": {},
  "HealthCheckGracePeriod": {},
  "PlacementGroup": {},
  "VPCZoneIdentifier": {},
  "TerminationPolicies": {},
  "NewInstancesProtectedFromScaleIn": {},
  "CapacityRebalance": {},
  "LifecycleHookSpecificationList": {},
  "Tags": {},
  "ServiceLinkedRoleARN": {},
  "MaxInstanceLifetime": {},
  "Context": {},
  "DesiredCapacityType": {},
  "DefaultInstanceWarmup": {},
  "TrafficSources": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingGroupName|object|true|none|none|
|LaunchConfigurationName|object|false|none|none|
|LaunchTemplate|object|false|none|none|
|MixedInstancesPolicy|object|false|none|none|
|InstanceId|object|false|none|none|
|MinSize|object|true|none|none|
|MaxSize|object|true|none|none|
|DesiredCapacity|object|false|none|none|
|DefaultCooldown|object|false|none|none|
|AvailabilityZones|object|false|none|none|
|LoadBalancerNames|object|false|none|none|
|TargetGroupARNs|object|false|none|none|
|HealthCheckType|object|false|none|none|
|HealthCheckGracePeriod|object|false|none|none|
|PlacementGroup|object|false|none|none|
|VPCZoneIdentifier|object|false|none|none|
|TerminationPolicies|object|false|none|none|
|NewInstancesProtectedFromScaleIn|object|false|none|none|
|CapacityRebalance|object|false|none|none|
|LifecycleHookSpecificationList|object|false|none|none|
|Tags|object|false|none|none|
|ServiceLinkedRoleARN|object|false|none|none|
|MaxInstanceLifetime|object|false|none|none|
|Context|object|false|none|none|
|DesiredCapacityType|object|false|none|none|
|DefaultInstanceWarmup|object|false|none|none|
|TrafficSources|object|false|none|none|

<h2 id="tocS_SecurityGroups">SecurityGroups</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroups"></a>
<a id="schema_SecurityGroups"></a>
<a id="tocSsecuritygroups"></a>
<a id="tocssecuritygroups"></a>

```json
[
  "string"
]
```

<h2 id="tocS_XmlStringUserData">XmlStringUserData</h2>
<!-- backwards compatibility -->
<a id="schemaxmlstringuserdata"></a>
<a id="schema_XmlStringUserData"></a>
<a id="tocSxmlstringuserdata"></a>
<a id="tocsxmlstringuserdata"></a>

```json
"string"
```

<h2 id="tocS_InstanceMonitoring">InstanceMonitoring</h2>
<!-- backwards compatibility -->
<a id="schemainstancemonitoring"></a>
<a id="schema_InstanceMonitoring"></a>
<a id="tocSinstancemonitoring"></a>
<a id="tocsinstancemonitoring"></a>

```json
{
  "Enabled": {}
}
```

Describes whether detailed monitoring is enabled for the Auto Scaling instances.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|false|none|none|

<h2 id="tocS_SpotPrice">SpotPrice</h2>
<!-- backwards compatibility -->
<a id="schemaspotprice"></a>
<a id="schema_SpotPrice"></a>
<a id="tocSspotprice"></a>
<a id="tocsspotprice"></a>

```json
"string"
```

<h2 id="tocS_EbsOptimized">EbsOptimized</h2>
<!-- backwards compatibility -->
<a id="schemaebsoptimized"></a>
<a id="schema_EbsOptimized"></a>
<a id="tocSebsoptimized"></a>
<a id="tocsebsoptimized"></a>

```json
true
```

<h2 id="tocS_InstanceMetadataOptions">InstanceMetadataOptions</h2>
<!-- backwards compatibility -->
<a id="schemainstancemetadataoptions"></a>
<a id="schema_InstanceMetadataOptions"></a>
<a id="tocSinstancemetadataoptions"></a>
<a id="tocsinstancemetadataoptions"></a>

```json
{
  "HttpTokens": {},
  "HttpPutResponseHopLimit": {},
  "HttpEndpoint": {}
}
```

The metadata options for the instances. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-launch-config.html#launch-configurations-imds">Configuring the Instance Metadata Options</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HttpTokens|object|false|none|none|
|HttpPutResponseHopLimit|object|false|none|none|
|HttpEndpoint|object|false|none|none|

<h2 id="tocS_CreateLaunchConfigurationType">CreateLaunchConfigurationType</h2>
<!-- backwards compatibility -->
<a id="schemacreatelaunchconfigurationtype"></a>
<a id="schema_CreateLaunchConfigurationType"></a>
<a id="tocScreatelaunchconfigurationtype"></a>
<a id="tocscreatelaunchconfigurationtype"></a>

```json
{
  "LaunchConfigurationName": {},
  "ImageId": {},
  "KeyName": {},
  "SecurityGroups": {},
  "ClassicLinkVPCId": {},
  "ClassicLinkVPCSecurityGroups": {},
  "UserData": {},
  "InstanceId": {},
  "InstanceType": {},
  "KernelId": {},
  "RamdiskId": {},
  "BlockDeviceMappings": {},
  "InstanceMonitoring": {
    "Enabled": {}
  },
  "SpotPrice": {},
  "IamInstanceProfile": {},
  "EbsOptimized": {},
  "AssociatePublicIpAddress": {},
  "PlacementTenancy": {},
  "MetadataOptions": {
    "HttpTokens": {},
    "HttpPutResponseHopLimit": {},
    "HttpEndpoint": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LaunchConfigurationName|object|true|none|none|
|ImageId|object|false|none|none|
|KeyName|object|false|none|none|
|SecurityGroups|object|false|none|none|
|ClassicLinkVPCId|object|false|none|none|
|ClassicLinkVPCSecurityGroups|object|false|none|none|
|UserData|object|false|none|none|
|InstanceId|object|false|none|none|
|InstanceType|object|false|none|none|
|KernelId|object|false|none|none|
|RamdiskId|object|false|none|none|
|BlockDeviceMappings|object|false|none|none|
|InstanceMonitoring|object|false|none|none|
|SpotPrice|object|false|none|none|
|IamInstanceProfile|object|false|none|none|
|EbsOptimized|object|false|none|none|
|AssociatePublicIpAddress|object|false|none|none|
|PlacementTenancy|object|false|none|none|
|MetadataOptions|object|false|none|none|

<h2 id="tocS_CreateOrUpdateTagsType">CreateOrUpdateTagsType</h2>
<!-- backwards compatibility -->
<a id="schemacreateorupdatetagstype"></a>
<a id="schema_CreateOrUpdateTagsType"></a>
<a id="tocScreateorupdatetagstype"></a>
<a id="tocscreateorupdatetagstype"></a>

```json
{
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|true|none|none|

<h2 id="tocS_MetricName">MetricName</h2>
<!-- backwards compatibility -->
<a id="schemametricname"></a>
<a id="schema_MetricName"></a>
<a id="tocSmetricname"></a>
<a id="tocsmetricname"></a>

```json
"string"
```

<h2 id="tocS_MetricNamespace">MetricNamespace</h2>
<!-- backwards compatibility -->
<a id="schemametricnamespace"></a>
<a id="schema_MetricNamespace"></a>
<a id="tocSmetricnamespace"></a>
<a id="tocsmetricnamespace"></a>

```json
"string"
```

<h2 id="tocS_MetricDimensions">MetricDimensions</h2>
<!-- backwards compatibility -->
<a id="schemametricdimensions"></a>
<a id="schema_MetricDimensions"></a>
<a id="tocSmetricdimensions"></a>
<a id="tocsmetricdimensions"></a>

```json
[
  {
    "Name": {},
    "Value": {}
  }
]
```

<h2 id="tocS_MetricStatistic">MetricStatistic</h2>
<!-- backwards compatibility -->
<a id="schemametricstatistic"></a>
<a id="schema_MetricStatistic"></a>
<a id="tocSmetricstatistic"></a>
<a id="tocsmetricstatistic"></a>

```json
"Average"
```

<h2 id="tocS_MetricUnit">MetricUnit</h2>
<!-- backwards compatibility -->
<a id="schemametricunit"></a>
<a id="schema_MetricUnit"></a>
<a id="tocSmetricunit"></a>
<a id="tocsmetricunit"></a>

```json
"string"
```

<h2 id="tocS_TargetTrackingMetricDataQueries">TargetTrackingMetricDataQueries</h2>
<!-- backwards compatibility -->
<a id="schematargettrackingmetricdataqueries"></a>
<a id="schema_TargetTrackingMetricDataQueries"></a>
<a id="tocStargettrackingmetricdataqueries"></a>
<a id="tocstargettrackingmetricdataqueries"></a>

```json
[
  {
    "Id": {},
    "Expression": {},
    "MetricStat": {
      "Metric": {
        "Namespace": {},
        "MetricName": {},
        "Dimensions": {}
      },
      "Stat": {},
      "Unit": {}
    },
    "Label": {},
    "ReturnData": {}
  }
]
```

<h2 id="tocS_ForceDelete">ForceDelete</h2>
<!-- backwards compatibility -->
<a id="schemaforcedelete"></a>
<a id="schema_ForceDelete"></a>
<a id="tocSforcedelete"></a>
<a id="tocsforcedelete"></a>

```json
true
```

<h2 id="tocS_DeleteAutoScalingGroupType">DeleteAutoScalingGroupType</h2>
<!-- backwards compatibility -->
<a id="schemadeleteautoscalinggrouptype"></a>
<a id="schema_DeleteAutoScalingGroupType"></a>
<a id="tocSdeleteautoscalinggrouptype"></a>
<a id="tocsdeleteautoscalinggrouptype"></a>

```json
{
  "AutoScalingGroupName": {},
  "ForceDelete": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingGroupName|object|true|none|none|
|ForceDelete|object|false|none|none|

<h2 id="tocS_DeleteLifecycleHookType">DeleteLifecycleHookType</h2>
<!-- backwards compatibility -->
<a id="schemadeletelifecyclehooktype"></a>
<a id="schema_DeleteLifecycleHookType"></a>
<a id="tocSdeletelifecyclehooktype"></a>
<a id="tocsdeletelifecyclehooktype"></a>

```json
{
  "LifecycleHookName": {},
  "AutoScalingGroupName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LifecycleHookName|object|true|none|none|
|AutoScalingGroupName|object|true|none|none|

<h2 id="tocS_DeleteNotificationConfigurationType">DeleteNotificationConfigurationType</h2>
<!-- backwards compatibility -->
<a id="schemadeletenotificationconfigurationtype"></a>
<a id="schema_DeleteNotificationConfigurationType"></a>
<a id="tocSdeletenotificationconfigurationtype"></a>
<a id="tocsdeletenotificationconfigurationtype"></a>

```json
{
  "AutoScalingGroupName": {},
  "TopicARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingGroupName|object|true|none|none|
|TopicARN|object|true|none|none|

<h2 id="tocS_DeletePolicyType">DeletePolicyType</h2>
<!-- backwards compatibility -->
<a id="schemadeletepolicytype"></a>
<a id="schema_DeletePolicyType"></a>
<a id="tocSdeletepolicytype"></a>
<a id="tocsdeletepolicytype"></a>

```json
{
  "AutoScalingGroupName": {},
  "PolicyName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingGroupName|object|false|none|none|
|PolicyName|object|true|none|none|

<h2 id="tocS_DeleteScheduledActionType">DeleteScheduledActionType</h2>
<!-- backwards compatibility -->
<a id="schemadeletescheduledactiontype"></a>
<a id="schema_DeleteScheduledActionType"></a>
<a id="tocSdeletescheduledactiontype"></a>
<a id="tocsdeletescheduledactiontype"></a>

```json
{
  "AutoScalingGroupName": {},
  "ScheduledActionName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingGroupName|object|true|none|none|
|ScheduledActionName|object|true|none|none|

<h2 id="tocS_DeleteTagsType">DeleteTagsType</h2>
<!-- backwards compatibility -->
<a id="schemadeletetagstype"></a>
<a id="schema_DeleteTagsType"></a>
<a id="tocSdeletetagstype"></a>
<a id="tocsdeletetagstype"></a>

```json
{
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|true|none|none|

<h2 id="tocS_DeleteWarmPoolType">DeleteWarmPoolType</h2>
<!-- backwards compatibility -->
<a id="schemadeletewarmpooltype"></a>
<a id="schema_DeleteWarmPoolType"></a>
<a id="tocSdeletewarmpooltype"></a>
<a id="tocsdeletewarmpooltype"></a>

```json
{
  "AutoScalingGroupName": {},
  "ForceDelete": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingGroupName|object|true|none|none|
|ForceDelete|object|false|none|none|

<h2 id="tocS_MaxNumberOfAutoScalingGroups">MaxNumberOfAutoScalingGroups</h2>
<!-- backwards compatibility -->
<a id="schemamaxnumberofautoscalinggroups"></a>
<a id="schema_MaxNumberOfAutoScalingGroups"></a>
<a id="tocSmaxnumberofautoscalinggroups"></a>
<a id="tocsmaxnumberofautoscalinggroups"></a>

```json
0
```

<h2 id="tocS_MaxNumberOfLaunchConfigurations">MaxNumberOfLaunchConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemamaxnumberoflaunchconfigurations"></a>
<a id="schema_MaxNumberOfLaunchConfigurations"></a>
<a id="tocSmaxnumberoflaunchconfigurations"></a>
<a id="tocsmaxnumberoflaunchconfigurations"></a>

```json
0
```

<h2 id="tocS_NumberOfAutoScalingGroups">NumberOfAutoScalingGroups</h2>
<!-- backwards compatibility -->
<a id="schemanumberofautoscalinggroups"></a>
<a id="schema_NumberOfAutoScalingGroups"></a>
<a id="tocSnumberofautoscalinggroups"></a>
<a id="tocsnumberofautoscalinggroups"></a>

```json
0
```

<h2 id="tocS_NumberOfLaunchConfigurations">NumberOfLaunchConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemanumberoflaunchconfigurations"></a>
<a id="schema_NumberOfLaunchConfigurations"></a>
<a id="tocSnumberoflaunchconfigurations"></a>
<a id="tocsnumberoflaunchconfigurations"></a>

```json
0
```

<h2 id="tocS_DescribeAutoScalingInstancesType">DescribeAutoScalingInstancesType</h2>
<!-- backwards compatibility -->
<a id="schemadescribeautoscalinginstancestype"></a>
<a id="schema_DescribeAutoScalingInstancesType"></a>
<a id="tocSdescribeautoscalinginstancestype"></a>
<a id="tocsdescribeautoscalinginstancestype"></a>

```json
{
  "InstanceIds": {},
  "MaxRecords": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceIds|object|false|none|none|
|MaxRecords|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_InstanceRefreshes">InstanceRefreshes</h2>
<!-- backwards compatibility -->
<a id="schemainstancerefreshes"></a>
<a id="schema_InstanceRefreshes"></a>
<a id="tocSinstancerefreshes"></a>
<a id="tocsinstancerefreshes"></a>

```json
[
  {
    "InstanceRefreshId": {},
    "AutoScalingGroupName": {},
    "Status": {},
    "StatusReason": {},
    "StartTime": {},
    "EndTime": {},
    "PercentageComplete": {},
    "InstancesToUpdate": {},
    "ProgressDetails": {
      "LivePoolProgress": {
        "PercentageComplete": {},
        "InstancesToUpdate": {}
      },
      "WarmPoolProgress": {
        "PercentageComplete": {},
        "InstancesToUpdate": {}
      }
    },
    "Preferences": {
      "MinHealthyPercentage": {},
      "InstanceWarmup": {},
      "CheckpointPercentages": {},
      "CheckpointDelay": {},
      "SkipMatching": {},
      "AutoRollback": {},
      "ScaleInProtectedInstances": {},
      "StandbyInstances": {},
      "AlarmSpecification": {
        "Alarms": {}
      }
    },
    "DesiredConfiguration": {
      "LaunchTemplate": {
        "LaunchTemplateId": {},
        "LaunchTemplateName": {},
        "Version": {}
      },
      "MixedInstancesPolicy": {
        "LaunchTemplate": {
          "LaunchTemplateSpecification": {
            "LaunchTemplateId": {},
            "LaunchTemplateName": {},
            "Version": {}
          },
          "Overrides": {}
        },
        "InstancesDistribution": {
          "OnDemandAllocationStrategy": {},
          "OnDemandBaseCapacity": {},
          "OnDemandPercentageAboveBaseCapacity": {},
          "SpotAllocationStrategy": {},
          "SpotInstancePools": {},
          "SpotMaxPrice": {}
        }
      }
    },
    "RollbackDetails": {
      "RollbackReason": {},
      "RollbackStartTime": {},
      "PercentageCompleteOnRollback": {},
      "InstancesToUpdateOnRollback": {},
      "ProgressDetailsOnRollback": {
        "LivePoolProgress": {
          "PercentageComplete": {},
          "InstancesToUpdate": {}
        },
        "WarmPoolProgress": {
          "PercentageComplete": {},
          "InstancesToUpdate": {}
        }
      }
    }
  }
]
```

<h2 id="tocS_InstanceRefreshIds">InstanceRefreshIds</h2>
<!-- backwards compatibility -->
<a id="schemainstancerefreshids"></a>
<a id="schema_InstanceRefreshIds"></a>
<a id="tocSinstancerefreshids"></a>
<a id="tocsinstancerefreshids"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DescribeInstanceRefreshesType">DescribeInstanceRefreshesType</h2>
<!-- backwards compatibility -->
<a id="schemadescribeinstancerefreshestype"></a>
<a id="schema_DescribeInstanceRefreshesType"></a>
<a id="tocSdescribeinstancerefreshestype"></a>
<a id="tocsdescribeinstancerefreshestype"></a>

```json
{
  "AutoScalingGroupName": {},
  "InstanceRefreshIds": {},
  "NextToken": {},
  "MaxRecords": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingGroupName|object|true|none|none|
|InstanceRefreshIds|object|false|none|none|
|NextToken|object|false|none|none|
|MaxRecords|object|false|none|none|

<h2 id="tocS_LifecycleHooks">LifecycleHooks</h2>
<!-- backwards compatibility -->
<a id="schemalifecyclehooks"></a>
<a id="schema_LifecycleHooks"></a>
<a id="tocSlifecyclehooks"></a>
<a id="tocslifecyclehooks"></a>

```json
[
  {
    "LifecycleHookName": {},
    "AutoScalingGroupName": {},
    "LifecycleTransition": {},
    "NotificationTargetARN": {},
    "RoleARN": {},
    "NotificationMetadata": {},
    "HeartbeatTimeout": {},
    "GlobalTimeout": {},
    "DefaultResult": {}
  }
]
```

<h2 id="tocS_LifecycleHookNames">LifecycleHookNames</h2>
<!-- backwards compatibility -->
<a id="schemalifecyclehooknames"></a>
<a id="schema_LifecycleHookNames"></a>
<a id="tocSlifecyclehooknames"></a>
<a id="tocslifecyclehooknames"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DescribeLifecycleHooksType">DescribeLifecycleHooksType</h2>
<!-- backwards compatibility -->
<a id="schemadescribelifecyclehookstype"></a>
<a id="schema_DescribeLifecycleHooksType"></a>
<a id="tocSdescribelifecyclehookstype"></a>
<a id="tocsdescribelifecyclehookstype"></a>

```json
{
  "AutoScalingGroupName": {},
  "LifecycleHookNames": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingGroupName|object|true|none|none|
|LifecycleHookNames|object|false|none|none|

<h2 id="tocS_DescribeLoadBalancerTargetGroupsRequest">DescribeLoadBalancerTargetGroupsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeloadbalancertargetgroupsrequest"></a>
<a id="schema_DescribeLoadBalancerTargetGroupsRequest"></a>
<a id="tocSdescribeloadbalancertargetgroupsrequest"></a>
<a id="tocsdescribeloadbalancertargetgroupsrequest"></a>

```json
{
  "AutoScalingGroupName": {},
  "NextToken": {},
  "MaxRecords": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingGroupName|object|true|none|none|
|NextToken|object|false|none|none|
|MaxRecords|object|false|none|none|

<h2 id="tocS_LoadBalancerTargetGroupStates">LoadBalancerTargetGroupStates</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancertargetgroupstates"></a>
<a id="schema_LoadBalancerTargetGroupStates"></a>
<a id="tocSloadbalancertargetgroupstates"></a>
<a id="tocsloadbalancertargetgroupstates"></a>

```json
[
  {
    "LoadBalancerTargetGroupARN": {},
    "State": {}
  }
]
```

<h2 id="tocS_DescribeLoadBalancersRequest">DescribeLoadBalancersRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeloadbalancersrequest"></a>
<a id="schema_DescribeLoadBalancersRequest"></a>
<a id="tocSdescribeloadbalancersrequest"></a>
<a id="tocsdescribeloadbalancersrequest"></a>

```json
{
  "AutoScalingGroupName": {},
  "NextToken": {},
  "MaxRecords": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingGroupName|object|true|none|none|
|NextToken|object|false|none|none|
|MaxRecords|object|false|none|none|

<h2 id="tocS_LoadBalancerStates">LoadBalancerStates</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancerstates"></a>
<a id="schema_LoadBalancerStates"></a>
<a id="tocSloadbalancerstates"></a>
<a id="tocsloadbalancerstates"></a>

```json
[
  {
    "LoadBalancerName": {},
    "State": {}
  }
]
```

<h2 id="tocS_MetricCollectionTypes">MetricCollectionTypes</h2>
<!-- backwards compatibility -->
<a id="schemametriccollectiontypes"></a>
<a id="schema_MetricCollectionTypes"></a>
<a id="tocSmetriccollectiontypes"></a>
<a id="tocsmetriccollectiontypes"></a>

```json
[
  {
    "Metric": {}
  }
]
```

<h2 id="tocS_MetricGranularityTypes">MetricGranularityTypes</h2>
<!-- backwards compatibility -->
<a id="schemametricgranularitytypes"></a>
<a id="schema_MetricGranularityTypes"></a>
<a id="tocSmetricgranularitytypes"></a>
<a id="tocsmetricgranularitytypes"></a>

```json
[
  {
    "Granularity": {}
  }
]
```

<h2 id="tocS_NotificationConfigurations">NotificationConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemanotificationconfigurations"></a>
<a id="schema_NotificationConfigurations"></a>
<a id="tocSnotificationconfigurations"></a>
<a id="tocsnotificationconfigurations"></a>

```json
[
  {
    "AutoScalingGroupName": {},
    "TopicARN": {},
    "NotificationType": {}
  }
]
```

<h2 id="tocS_DescribeNotificationConfigurationsType">DescribeNotificationConfigurationsType</h2>
<!-- backwards compatibility -->
<a id="schemadescribenotificationconfigurationstype"></a>
<a id="schema_DescribeNotificationConfigurationsType"></a>
<a id="tocSdescribenotificationconfigurationstype"></a>
<a id="tocsdescribenotificationconfigurationstype"></a>

```json
{
  "AutoScalingGroupNames": {},
  "NextToken": {},
  "MaxRecords": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingGroupNames|object|false|none|none|
|NextToken|object|false|none|none|
|MaxRecords|object|false|none|none|

<h2 id="tocS_PolicyNames">PolicyNames</h2>
<!-- backwards compatibility -->
<a id="schemapolicynames"></a>
<a id="schema_PolicyNames"></a>
<a id="tocSpolicynames"></a>
<a id="tocspolicynames"></a>

```json
[
  "string"
]
```

<h2 id="tocS_PolicyTypes">PolicyTypes</h2>
<!-- backwards compatibility -->
<a id="schemapolicytypes"></a>
<a id="schema_PolicyTypes"></a>
<a id="tocSpolicytypes"></a>
<a id="tocspolicytypes"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DescribePoliciesType">DescribePoliciesType</h2>
<!-- backwards compatibility -->
<a id="schemadescribepoliciestype"></a>
<a id="schema_DescribePoliciesType"></a>
<a id="tocSdescribepoliciestype"></a>
<a id="tocsdescribepoliciestype"></a>

```json
{
  "AutoScalingGroupName": {},
  "PolicyNames": {},
  "PolicyTypes": {},
  "NextToken": {},
  "MaxRecords": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingGroupName|object|false|none|none|
|PolicyNames|object|false|none|none|
|PolicyTypes|object|false|none|none|
|NextToken|object|false|none|none|
|MaxRecords|object|false|none|none|

<h2 id="tocS_IncludeDeletedGroups">IncludeDeletedGroups</h2>
<!-- backwards compatibility -->
<a id="schemaincludedeletedgroups"></a>
<a id="schema_IncludeDeletedGroups"></a>
<a id="tocSincludedeletedgroups"></a>
<a id="tocsincludedeletedgroups"></a>

```json
true
```

<h2 id="tocS_DescribeScalingActivitiesType">DescribeScalingActivitiesType</h2>
<!-- backwards compatibility -->
<a id="schemadescribescalingactivitiestype"></a>
<a id="schema_DescribeScalingActivitiesType"></a>
<a id="tocSdescribescalingactivitiestype"></a>
<a id="tocsdescribescalingactivitiestype"></a>

```json
{
  "ActivityIds": {},
  "AutoScalingGroupName": {},
  "IncludeDeletedGroups": {},
  "MaxRecords": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActivityIds|object|false|none|none|
|AutoScalingGroupName|object|false|none|none|
|IncludeDeletedGroups|object|false|none|none|
|MaxRecords|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeScheduledActionsType">DescribeScheduledActionsType</h2>
<!-- backwards compatibility -->
<a id="schemadescribescheduledactionstype"></a>
<a id="schema_DescribeScheduledActionsType"></a>
<a id="tocSdescribescheduledactionstype"></a>
<a id="tocsdescribescheduledactionstype"></a>

```json
{
  "AutoScalingGroupName": {},
  "ScheduledActionNames": {},
  "StartTime": {},
  "EndTime": {},
  "NextToken": {},
  "MaxRecords": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingGroupName|object|false|none|none|
|ScheduledActionNames|object|false|none|none|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|
|NextToken|object|false|none|none|
|MaxRecords|object|false|none|none|

<h2 id="tocS_DescribeTagsType">DescribeTagsType</h2>
<!-- backwards compatibility -->
<a id="schemadescribetagstype"></a>
<a id="schema_DescribeTagsType"></a>
<a id="tocSdescribetagstype"></a>
<a id="tocsdescribetagstype"></a>

```json
{
  "Filters": {},
  "NextToken": {},
  "MaxRecords": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|false|none|none|
|NextToken|object|false|none|none|
|MaxRecords|object|false|none|none|

<h2 id="tocS_DescribeTrafficSourcesRequest">DescribeTrafficSourcesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribetrafficsourcesrequest"></a>
<a id="schema_DescribeTrafficSourcesRequest"></a>
<a id="tocSdescribetrafficsourcesrequest"></a>
<a id="tocsdescribetrafficsourcesrequest"></a>

```json
{
  "AutoScalingGroupName": {},
  "TrafficSourceType": {},
  "NextToken": {},
  "MaxRecords": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingGroupName|object|true|none|none|
|TrafficSourceType|object|false|none|none|
|NextToken|object|false|none|none|
|MaxRecords|object|false|none|none|

<h2 id="tocS_TrafficSourceStates">TrafficSourceStates</h2>
<!-- backwards compatibility -->
<a id="schematrafficsourcestates"></a>
<a id="schema_TrafficSourceStates"></a>
<a id="tocStrafficsourcestates"></a>
<a id="tocstrafficsourcestates"></a>

```json
[
  {
    "TrafficSource": {},
    "State": {},
    "Identifier": {},
    "Type": {}
  }
]
```

<h2 id="tocS_DescribeWarmPoolType">DescribeWarmPoolType</h2>
<!-- backwards compatibility -->
<a id="schemadescribewarmpooltype"></a>
<a id="schema_DescribeWarmPoolType"></a>
<a id="tocSdescribewarmpooltype"></a>
<a id="tocsdescribewarmpooltype"></a>

```json
{
  "AutoScalingGroupName": {},
  "MaxRecords": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingGroupName|object|true|none|none|
|MaxRecords|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DesiredConfiguration">DesiredConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemadesiredconfiguration"></a>
<a id="schema_DesiredConfiguration"></a>
<a id="tocSdesiredconfiguration"></a>
<a id="tocsdesiredconfiguration"></a>

```json
{
  "LaunchTemplate": {
    "LaunchTemplateId": {},
    "LaunchTemplateName": {},
    "Version": {}
  },
  "MixedInstancesPolicy": {
    "LaunchTemplate": {
      "LaunchTemplateSpecification": {
        "LaunchTemplateId": {},
        "LaunchTemplateName": {},
        "Version": {}
      },
      "Overrides": {}
    },
    "InstancesDistribution": {
      "OnDemandAllocationStrategy": {},
      "OnDemandBaseCapacity": {},
      "OnDemandPercentageAboveBaseCapacity": {},
      "SpotAllocationStrategy": {},
      "SpotInstancePools": {},
      "SpotMaxPrice": {}
    }
  }
}
```

<p>Describes the desired configuration for an instance refresh. </p> <p>If you specify a desired configuration, you must specify either a <code>LaunchTemplate</code> or a <code>MixedInstancesPolicy</code>. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LaunchTemplate|object|false|none|none|
|MixedInstancesPolicy|object|false|none|none|

<h2 id="tocS_ShouldDecrementDesiredCapacity">ShouldDecrementDesiredCapacity</h2>
<!-- backwards compatibility -->
<a id="schemashoulddecrementdesiredcapacity"></a>
<a id="schema_ShouldDecrementDesiredCapacity"></a>
<a id="tocSshoulddecrementdesiredcapacity"></a>
<a id="tocsshoulddecrementdesiredcapacity"></a>

```json
true
```

<h2 id="tocS_DetachInstancesQuery">DetachInstancesQuery</h2>
<!-- backwards compatibility -->
<a id="schemadetachinstancesquery"></a>
<a id="schema_DetachInstancesQuery"></a>
<a id="tocSdetachinstancesquery"></a>
<a id="tocsdetachinstancesquery"></a>

```json
{
  "InstanceIds": {},
  "AutoScalingGroupName": {},
  "ShouldDecrementDesiredCapacity": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceIds|object|false|none|none|
|AutoScalingGroupName|object|true|none|none|
|ShouldDecrementDesiredCapacity|object|true|none|none|

<h2 id="tocS_DetachLoadBalancerTargetGroupsType">DetachLoadBalancerTargetGroupsType</h2>
<!-- backwards compatibility -->
<a id="schemadetachloadbalancertargetgroupstype"></a>
<a id="schema_DetachLoadBalancerTargetGroupsType"></a>
<a id="tocSdetachloadbalancertargetgroupstype"></a>
<a id="tocsdetachloadbalancertargetgroupstype"></a>

```json
{
  "AutoScalingGroupName": {},
  "TargetGroupARNs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingGroupName|object|true|none|none|
|TargetGroupARNs|object|true|none|none|

<h2 id="tocS_DetachLoadBalancersType">DetachLoadBalancersType</h2>
<!-- backwards compatibility -->
<a id="schemadetachloadbalancerstype"></a>
<a id="schema_DetachLoadBalancersType"></a>
<a id="tocSdetachloadbalancerstype"></a>
<a id="tocsdetachloadbalancerstype"></a>

```json
{
  "AutoScalingGroupName": {},
  "LoadBalancerNames": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingGroupName|object|true|none|none|
|LoadBalancerNames|object|true|none|none|

<h2 id="tocS_DetachTrafficSourcesType">DetachTrafficSourcesType</h2>
<!-- backwards compatibility -->
<a id="schemadetachtrafficsourcestype"></a>
<a id="schema_DetachTrafficSourcesType"></a>
<a id="tocSdetachtrafficsourcestype"></a>
<a id="tocsdetachtrafficsourcestype"></a>

```json
{
  "AutoScalingGroupName": {},
  "TrafficSources": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingGroupName|object|true|none|none|
|TrafficSources|object|true|none|none|

<h2 id="tocS_Metrics">Metrics</h2>
<!-- backwards compatibility -->
<a id="schemametrics"></a>
<a id="schema_Metrics"></a>
<a id="tocSmetrics"></a>
<a id="tocsmetrics"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DisableMetricsCollectionQuery">DisableMetricsCollectionQuery</h2>
<!-- backwards compatibility -->
<a id="schemadisablemetricscollectionquery"></a>
<a id="schema_DisableMetricsCollectionQuery"></a>
<a id="tocSdisablemetricscollectionquery"></a>
<a id="tocsdisablemetricscollectionquery"></a>

```json
{
  "AutoScalingGroupName": {},
  "Metrics": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingGroupName|object|true|none|none|
|Metrics|object|false|none|none|

<h2 id="tocS_EnableMetricsCollectionQuery">EnableMetricsCollectionQuery</h2>
<!-- backwards compatibility -->
<a id="schemaenablemetricscollectionquery"></a>
<a id="schema_EnableMetricsCollectionQuery"></a>
<a id="tocSenablemetricscollectionquery"></a>
<a id="tocsenablemetricscollectionquery"></a>

```json
{
  "AutoScalingGroupName": {},
  "Metrics": {},
  "Granularity": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingGroupName|object|true|none|none|
|Metrics|object|false|none|none|
|Granularity|object|true|none|none|

<h2 id="tocS_EnabledMetric">EnabledMetric</h2>
<!-- backwards compatibility -->
<a id="schemaenabledmetric"></a>
<a id="schema_EnabledMetric"></a>
<a id="tocSenabledmetric"></a>
<a id="tocsenabledmetric"></a>

```json
{
  "Metric": {},
  "Granularity": {}
}
```

Describes an enabled Auto Scaling group metric.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Metric|object|false|none|none|
|Granularity|object|false|none|none|

<h2 id="tocS_EnterStandbyQuery">EnterStandbyQuery</h2>
<!-- backwards compatibility -->
<a id="schemaenterstandbyquery"></a>
<a id="schema_EnterStandbyQuery"></a>
<a id="tocSenterstandbyquery"></a>
<a id="tocsenterstandbyquery"></a>

```json
{
  "InstanceIds": {},
  "AutoScalingGroupName": {},
  "ShouldDecrementDesiredCapacity": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceIds|object|false|none|none|
|AutoScalingGroupName|object|true|none|none|
|ShouldDecrementDesiredCapacity|object|true|none|none|

<h2 id="tocS_EstimatedInstanceWarmup">EstimatedInstanceWarmup</h2>
<!-- backwards compatibility -->
<a id="schemaestimatedinstancewarmup"></a>
<a id="schema_EstimatedInstanceWarmup"></a>
<a id="tocSestimatedinstancewarmup"></a>
<a id="tocsestimatedinstancewarmup"></a>

```json
0
```

<h2 id="tocS_ExcludedInstance">ExcludedInstance</h2>
<!-- backwards compatibility -->
<a id="schemaexcludedinstance"></a>
<a id="schema_ExcludedInstance"></a>
<a id="tocSexcludedinstance"></a>
<a id="tocsexcludedinstance"></a>

```json
"string"
```

<h2 id="tocS_ExcludedInstanceTypes">ExcludedInstanceTypes</h2>
<!-- backwards compatibility -->
<a id="schemaexcludedinstancetypes"></a>
<a id="schema_ExcludedInstanceTypes"></a>
<a id="tocSexcludedinstancetypes"></a>
<a id="tocsexcludedinstancetypes"></a>

```json
[
  "string"
]
```

<h2 id="tocS_HonorCooldown">HonorCooldown</h2>
<!-- backwards compatibility -->
<a id="schemahonorcooldown"></a>
<a id="schema_HonorCooldown"></a>
<a id="tocShonorcooldown"></a>
<a id="tocshonorcooldown"></a>

```json
true
```

<h2 id="tocS_ExecutePolicyType">ExecutePolicyType</h2>
<!-- backwards compatibility -->
<a id="schemaexecutepolicytype"></a>
<a id="schema_ExecutePolicyType"></a>
<a id="tocSexecutepolicytype"></a>
<a id="tocsexecutepolicytype"></a>

```json
{
  "AutoScalingGroupName": {},
  "PolicyName": {},
  "HonorCooldown": {},
  "MetricValue": {},
  "BreachThreshold": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingGroupName|object|false|none|none|
|PolicyName|object|true|none|none|
|HonorCooldown|object|false|none|none|
|MetricValue|object|false|none|none|
|BreachThreshold|object|false|none|none|

<h2 id="tocS_ExitStandbyQuery">ExitStandbyQuery</h2>
<!-- backwards compatibility -->
<a id="schemaexitstandbyquery"></a>
<a id="schema_ExitStandbyQuery"></a>
<a id="tocSexitstandbyquery"></a>
<a id="tocsexitstandbyquery"></a>

```json
{
  "InstanceIds": {},
  "AutoScalingGroupName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceIds|object|false|none|none|
|AutoScalingGroupName|object|true|none|none|

<h2 id="tocS_FailedScheduledUpdateGroupActionRequest">FailedScheduledUpdateGroupActionRequest</h2>
<!-- backwards compatibility -->
<a id="schemafailedscheduledupdategroupactionrequest"></a>
<a id="schema_FailedScheduledUpdateGroupActionRequest"></a>
<a id="tocSfailedscheduledupdategroupactionrequest"></a>
<a id="tocsfailedscheduledupdategroupactionrequest"></a>

```json
{
  "ScheduledActionName": {},
  "ErrorCode": {},
  "ErrorMessage": {}
}
```

Describes a scheduled action that could not be created, updated, or deleted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScheduledActionName|object|true|none|none|
|ErrorCode|object|false|none|none|
|ErrorMessage|object|false|none|none|

<h2 id="tocS_Values">Values</h2>
<!-- backwards compatibility -->
<a id="schemavalues"></a>
<a id="schema_Values"></a>
<a id="tocSvalues"></a>
<a id="tocsvalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_LoadForecasts">LoadForecasts</h2>
<!-- backwards compatibility -->
<a id="schemaloadforecasts"></a>
<a id="schema_LoadForecasts"></a>
<a id="tocSloadforecasts"></a>
<a id="tocsloadforecasts"></a>

```json
[
  {
    "Timestamps": {},
    "Values": {},
    "MetricSpecification": {
      "TargetValue": {},
      "PredefinedMetricPairSpecification": {
        "PredefinedMetricType": {},
        "ResourceLabel": {}
      },
      "PredefinedScalingMetricSpecification": {
        "PredefinedMetricType": {},
        "ResourceLabel": {}
      },
      "PredefinedLoadMetricSpecification": {
        "PredefinedMetricType": {},
        "ResourceLabel": {}
      },
      "CustomizedScalingMetricSpecification": {
        "MetricDataQueries": {}
      },
      "CustomizedLoadMetricSpecification": {
        "MetricDataQueries": {}
      },
      "CustomizedCapacityMetricSpecification": {
        "MetricDataQueries": {}
      }
    }
  }
]
```

<h2 id="tocS_GetPredictiveScalingForecastType">GetPredictiveScalingForecastType</h2>
<!-- backwards compatibility -->
<a id="schemagetpredictivescalingforecasttype"></a>
<a id="schema_GetPredictiveScalingForecastType"></a>
<a id="tocSgetpredictivescalingforecasttype"></a>
<a id="tocsgetpredictivescalingforecasttype"></a>

```json
{
  "AutoScalingGroupName": {},
  "PolicyName": {},
  "StartTime": {},
  "EndTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingGroupName|object|true|none|none|
|PolicyName|object|true|none|none|
|StartTime|object|true|none|none|
|EndTime|object|true|none|none|

<h2 id="tocS_GlobalTimeout">GlobalTimeout</h2>
<!-- backwards compatibility -->
<a id="schemaglobaltimeout"></a>
<a id="schema_GlobalTimeout"></a>
<a id="tocSglobaltimeout"></a>
<a id="tocsglobaltimeout"></a>

```json
0
```

<h2 id="tocS_HeartbeatTimeout">HeartbeatTimeout</h2>
<!-- backwards compatibility -->
<a id="schemaheartbeattimeout"></a>
<a id="schema_HeartbeatTimeout"></a>
<a id="tocSheartbeattimeout"></a>
<a id="tocsheartbeattimeout"></a>

```json
0
```

<h2 id="tocS_LifecycleState">LifecycleState</h2>
<!-- backwards compatibility -->
<a id="schemalifecyclestate"></a>
<a id="schema_LifecycleState"></a>
<a id="tocSlifecyclestate"></a>
<a id="tocslifecyclestate"></a>

```json
"Pending"
```

<h2 id="tocS_Instance">Instance</h2>
<!-- backwards compatibility -->
<a id="schemainstance"></a>
<a id="schema_Instance"></a>
<a id="tocSinstance"></a>
<a id="tocsinstance"></a>

```json
{
  "InstanceId": {},
  "InstanceType": {},
  "AvailabilityZone": {},
  "LifecycleState": {},
  "HealthStatus": {},
  "LaunchConfigurationName": {},
  "LaunchTemplate": {
    "LaunchTemplateId": {},
    "LaunchTemplateName": {},
    "Version": {}
  },
  "ProtectedFromScaleIn": {},
  "WeightedCapacity": {}
}
```

Describes an EC2 instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|true|none|none|
|InstanceType|object|false|none|none|
|AvailabilityZone|object|true|none|none|
|LifecycleState|object|true|none|none|
|HealthStatus|object|true|none|none|
|LaunchConfigurationName|object|false|none|none|
|LaunchTemplate|object|false|none|none|
|ProtectedFromScaleIn|object|true|none|none|
|WeightedCapacity|object|false|none|none|

<h2 id="tocS_InstanceGeneration">InstanceGeneration</h2>
<!-- backwards compatibility -->
<a id="schemainstancegeneration"></a>
<a id="schema_InstanceGeneration"></a>
<a id="tocSinstancegeneration"></a>
<a id="tocsinstancegeneration"></a>

```json
"current"
```

<h2 id="tocS_InstanceGenerations">InstanceGenerations</h2>
<!-- backwards compatibility -->
<a id="schemainstancegenerations"></a>
<a id="schema_InstanceGenerations"></a>
<a id="tocSinstancegenerations"></a>
<a id="tocsinstancegenerations"></a>

```json
[
  "current"
]
```

<h2 id="tocS_InstanceRefreshStatus">InstanceRefreshStatus</h2>
<!-- backwards compatibility -->
<a id="schemainstancerefreshstatus"></a>
<a id="schema_InstanceRefreshStatus"></a>
<a id="tocSinstancerefreshstatus"></a>
<a id="tocsinstancerefreshstatus"></a>

```json
"Pending"
```

<h2 id="tocS_InstancesToUpdate">InstancesToUpdate</h2>
<!-- backwards compatibility -->
<a id="schemainstancestoupdate"></a>
<a id="schema_InstancesToUpdate"></a>
<a id="tocSinstancestoupdate"></a>
<a id="tocsinstancestoupdate"></a>

```json
0
```

<h2 id="tocS_InstanceRefreshProgressDetails">InstanceRefreshProgressDetails</h2>
<!-- backwards compatibility -->
<a id="schemainstancerefreshprogressdetails"></a>
<a id="schema_InstanceRefreshProgressDetails"></a>
<a id="tocSinstancerefreshprogressdetails"></a>
<a id="tocsinstancerefreshprogressdetails"></a>

```json
{
  "LivePoolProgress": {
    "PercentageComplete": {},
    "InstancesToUpdate": {}
  },
  "WarmPoolProgress": {
    "PercentageComplete": {},
    "InstancesToUpdate": {}
  }
}
```

Reports progress on replacing instances in an Auto Scaling group that has a warm pool. This includes separate details for instances in the warm pool and instances in the Auto Scaling group (the live pool).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LivePoolProgress|object|false|none|none|
|WarmPoolProgress|object|false|none|none|

<h2 id="tocS_RefreshPreferences">RefreshPreferences</h2>
<!-- backwards compatibility -->
<a id="schemarefreshpreferences"></a>
<a id="schema_RefreshPreferences"></a>
<a id="tocSrefreshpreferences"></a>
<a id="tocsrefreshpreferences"></a>

```json
{
  "MinHealthyPercentage": {},
  "InstanceWarmup": {},
  "CheckpointPercentages": {},
  "CheckpointDelay": {},
  "SkipMatching": {},
  "AutoRollback": {},
  "ScaleInProtectedInstances": {},
  "StandbyInstances": {},
  "AlarmSpecification": {
    "Alarms": {}
  }
}
```

Describes the preferences for an instance refresh.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MinHealthyPercentage|object|false|none|none|
|InstanceWarmup|object|false|none|none|
|CheckpointPercentages|object|false|none|none|
|CheckpointDelay|object|false|none|none|
|SkipMatching|object|false|none|none|
|AutoRollback|object|false|none|none|
|ScaleInProtectedInstances|object|false|none|none|
|StandbyInstances|object|false|none|none|
|AlarmSpecification|object|false|none|none|

<h2 id="tocS_RollbackDetails">RollbackDetails</h2>
<!-- backwards compatibility -->
<a id="schemarollbackdetails"></a>
<a id="schema_RollbackDetails"></a>
<a id="tocSrollbackdetails"></a>
<a id="tocsrollbackdetails"></a>

```json
{
  "RollbackReason": {},
  "RollbackStartTime": {},
  "PercentageCompleteOnRollback": {},
  "InstancesToUpdateOnRollback": {},
  "ProgressDetailsOnRollback": {
    "LivePoolProgress": {
      "PercentageComplete": {},
      "InstancesToUpdate": {}
    },
    "WarmPoolProgress": {
      "PercentageComplete": {},
      "InstancesToUpdate": {}
    }
  }
}
```

Details about an instance refresh rollback.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RollbackReason|object|false|none|none|
|RollbackStartTime|object|false|none|none|
|PercentageCompleteOnRollback|object|false|none|none|
|InstancesToUpdateOnRollback|object|false|none|none|
|ProgressDetailsOnRollback|object|false|none|none|

<h2 id="tocS_InstanceRefresh">InstanceRefresh</h2>
<!-- backwards compatibility -->
<a id="schemainstancerefresh"></a>
<a id="schema_InstanceRefresh"></a>
<a id="tocSinstancerefresh"></a>
<a id="tocsinstancerefresh"></a>

```json
{
  "InstanceRefreshId": {},
  "AutoScalingGroupName": {},
  "Status": {},
  "StatusReason": {},
  "StartTime": {},
  "EndTime": {},
  "PercentageComplete": {},
  "InstancesToUpdate": {},
  "ProgressDetails": {
    "LivePoolProgress": {
      "PercentageComplete": {},
      "InstancesToUpdate": {}
    },
    "WarmPoolProgress": {
      "PercentageComplete": {},
      "InstancesToUpdate": {}
    }
  },
  "Preferences": {
    "MinHealthyPercentage": {},
    "InstanceWarmup": {},
    "CheckpointPercentages": {},
    "CheckpointDelay": {},
    "SkipMatching": {},
    "AutoRollback": {},
    "ScaleInProtectedInstances": {},
    "StandbyInstances": {},
    "AlarmSpecification": {
      "Alarms": {}
    }
  },
  "DesiredConfiguration": {
    "LaunchTemplate": {
      "LaunchTemplateId": {},
      "LaunchTemplateName": {},
      "Version": {}
    },
    "MixedInstancesPolicy": {
      "LaunchTemplate": {
        "LaunchTemplateSpecification": {
          "LaunchTemplateId": {},
          "LaunchTemplateName": {},
          "Version": {}
        },
        "Overrides": {}
      },
      "InstancesDistribution": {
        "OnDemandAllocationStrategy": {},
        "OnDemandBaseCapacity": {},
        "OnDemandPercentageAboveBaseCapacity": {},
        "SpotAllocationStrategy": {},
        "SpotInstancePools": {},
        "SpotMaxPrice": {}
      }
    }
  },
  "RollbackDetails": {
    "RollbackReason": {},
    "RollbackStartTime": {},
    "PercentageCompleteOnRollback": {},
    "InstancesToUpdateOnRollback": {},
    "ProgressDetailsOnRollback": {
      "LivePoolProgress": {
        "PercentageComplete": {},
        "InstancesToUpdate": {}
      },
      "WarmPoolProgress": {
        "PercentageComplete": {},
        "InstancesToUpdate": {}
      }
    }
  }
}
```

Describes an instance refresh for an Auto Scaling group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceRefreshId|object|false|none|none|
|AutoScalingGroupName|object|false|none|none|
|Status|object|false|none|none|
|StatusReason|object|false|none|none|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|
|PercentageComplete|object|false|none|none|
|InstancesToUpdate|object|false|none|none|
|ProgressDetails|object|false|none|none|
|Preferences|object|false|none|none|
|DesiredConfiguration|object|false|none|none|
|RollbackDetails|object|false|none|none|

<h2 id="tocS_InstanceRefreshLivePoolProgress">InstanceRefreshLivePoolProgress</h2>
<!-- backwards compatibility -->
<a id="schemainstancerefreshlivepoolprogress"></a>
<a id="schema_InstanceRefreshLivePoolProgress"></a>
<a id="tocSinstancerefreshlivepoolprogress"></a>
<a id="tocsinstancerefreshlivepoolprogress"></a>

```json
{
  "PercentageComplete": {},
  "InstancesToUpdate": {}
}
```

Reports progress on replacing instances that are in the Auto Scaling group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PercentageComplete|object|false|none|none|
|InstancesToUpdate|object|false|none|none|

<h2 id="tocS_InstanceRefreshWarmPoolProgress">InstanceRefreshWarmPoolProgress</h2>
<!-- backwards compatibility -->
<a id="schemainstancerefreshwarmpoolprogress"></a>
<a id="schema_InstanceRefreshWarmPoolProgress"></a>
<a id="tocSinstancerefreshwarmpoolprogress"></a>
<a id="tocsinstancerefreshwarmpoolprogress"></a>

```json
{
  "PercentageComplete": {},
  "InstancesToUpdate": {}
}
```

Reports progress on replacing instances that are in the warm pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PercentageComplete|object|false|none|none|
|InstancesToUpdate|object|false|none|none|

<h2 id="tocS_VCpuCountRequest">VCpuCountRequest</h2>
<!-- backwards compatibility -->
<a id="schemavcpucountrequest"></a>
<a id="schema_VCpuCountRequest"></a>
<a id="tocSvcpucountrequest"></a>
<a id="tocsvcpucountrequest"></a>

```json
{
  "Min": {},
  "Max": {}
}
```

Specifies the minimum and maximum for the <code>VCpuCount</code> object when you specify <a>InstanceRequirements</a> for an Auto Scaling group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Min|object|true|none|none|
|Max|object|false|none|none|

<h2 id="tocS_MemoryMiBRequest">MemoryMiBRequest</h2>
<!-- backwards compatibility -->
<a id="schemamemorymibrequest"></a>
<a id="schema_MemoryMiBRequest"></a>
<a id="tocSmemorymibrequest"></a>
<a id="tocsmemorymibrequest"></a>

```json
{
  "Min": {},
  "Max": {}
}
```

Specifies the minimum and maximum for the <code>MemoryMiB</code> object when you specify <a>InstanceRequirements</a> for an Auto Scaling group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Min|object|true|none|none|
|Max|object|false|none|none|

<h2 id="tocS_MemoryGiBPerVCpuRequest">MemoryGiBPerVCpuRequest</h2>
<!-- backwards compatibility -->
<a id="schemamemorygibpervcpurequest"></a>
<a id="schema_MemoryGiBPerVCpuRequest"></a>
<a id="tocSmemorygibpervcpurequest"></a>
<a id="tocsmemorygibpervcpurequest"></a>

```json
{
  "Min": {},
  "Max": {}
}
```

Specifies the minimum and maximum for the <code>MemoryGiBPerVCpu</code> object when you specify <a>InstanceRequirements</a> for an Auto Scaling group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Min|object|false|none|none|
|Max|object|false|none|none|

<h2 id="tocS_NullableBoolean">NullableBoolean</h2>
<!-- backwards compatibility -->
<a id="schemanullableboolean"></a>
<a id="schema_NullableBoolean"></a>
<a id="tocSnullableboolean"></a>
<a id="tocsnullableboolean"></a>

```json
true
```

<h2 id="tocS_NetworkInterfaceCountRequest">NetworkInterfaceCountRequest</h2>
<!-- backwards compatibility -->
<a id="schemanetworkinterfacecountrequest"></a>
<a id="schema_NetworkInterfaceCountRequest"></a>
<a id="tocSnetworkinterfacecountrequest"></a>
<a id="tocsnetworkinterfacecountrequest"></a>

```json
{
  "Min": {},
  "Max": {}
}
```

Specifies the minimum and maximum for the <code>NetworkInterfaceCount</code> object when you specify <a>InstanceRequirements</a> for an Auto Scaling group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Min|object|false|none|none|
|Max|object|false|none|none|

<h2 id="tocS_LocalStorage">LocalStorage</h2>
<!-- backwards compatibility -->
<a id="schemalocalstorage"></a>
<a id="schema_LocalStorage"></a>
<a id="tocSlocalstorage"></a>
<a id="tocslocalstorage"></a>

```json
"included"
```

<h2 id="tocS_LocalStorageTypes">LocalStorageTypes</h2>
<!-- backwards compatibility -->
<a id="schemalocalstoragetypes"></a>
<a id="schema_LocalStorageTypes"></a>
<a id="tocSlocalstoragetypes"></a>
<a id="tocslocalstoragetypes"></a>

```json
[
  "hdd"
]
```

<h2 id="tocS_TotalLocalStorageGBRequest">TotalLocalStorageGBRequest</h2>
<!-- backwards compatibility -->
<a id="schematotallocalstoragegbrequest"></a>
<a id="schema_TotalLocalStorageGBRequest"></a>
<a id="tocStotallocalstoragegbrequest"></a>
<a id="tocstotallocalstoragegbrequest"></a>

```json
{
  "Min": {},
  "Max": {}
}
```

Specifies the minimum and maximum for the <code>TotalLocalStorageGB</code> object when you specify <a>InstanceRequirements</a> for an Auto Scaling group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Min|object|false|none|none|
|Max|object|false|none|none|

<h2 id="tocS_NetworkBandwidthGbpsRequest">NetworkBandwidthGbpsRequest</h2>
<!-- backwards compatibility -->
<a id="schemanetworkbandwidthgbpsrequest"></a>
<a id="schema_NetworkBandwidthGbpsRequest"></a>
<a id="tocSnetworkbandwidthgbpsrequest"></a>
<a id="tocsnetworkbandwidthgbpsrequest"></a>

```json
{
  "Min": {},
  "Max": {}
}
```

<p>Specifies the minimum and maximum for the <code>NetworkBandwidthGbps</code> object when you specify <a>InstanceRequirements</a> for an Auto Scaling group.</p> <note> <p>Setting the minimum bandwidth does not guarantee that your instance will achieve the minimum bandwidth. Amazon EC2 will identify instance types that support the specified minimum bandwidth, but the actual bandwidth of your instance might go below the specified minimum at times. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-network-bandwidth.html#available-instance-bandwidth">Available instance bandwidth</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Min|object|false|none|none|
|Max|object|false|none|none|

<h2 id="tocS_InstanceRequirements">InstanceRequirements</h2>
<!-- backwards compatibility -->
<a id="schemainstancerequirements"></a>
<a id="schema_InstanceRequirements"></a>
<a id="tocSinstancerequirements"></a>
<a id="tocsinstancerequirements"></a>

```json
{
  "VCpuCount": {
    "Min": {},
    "Max": {}
  },
  "MemoryMiB": {
    "Min": {},
    "Max": {}
  },
  "CpuManufacturers": {},
  "MemoryGiBPerVCpu": {
    "Min": {},
    "Max": {}
  },
  "ExcludedInstanceTypes": {},
  "InstanceGenerations": {},
  "SpotMaxPricePercentageOverLowestPrice": {},
  "OnDemandMaxPricePercentageOverLowestPrice": {},
  "BareMetal": {},
  "BurstablePerformance": {},
  "RequireHibernateSupport": {},
  "NetworkInterfaceCount": {
    "Min": {},
    "Max": {}
  },
  "LocalStorage": {},
  "LocalStorageTypes": {},
  "TotalLocalStorageGB": {
    "Min": {},
    "Max": {}
  },
  "BaselineEbsBandwidthMbps": {
    "Min": {},
    "Max": {}
  },
  "AcceleratorTypes": {},
  "AcceleratorCount": {
    "Min": {},
    "Max": {}
  },
  "AcceleratorManufacturers": {},
  "AcceleratorNames": {},
  "AcceleratorTotalMemoryMiB": {
    "Min": {},
    "Max": {}
  },
  "NetworkBandwidthGbps": {
    "Min": {},
    "Max": {}
  },
  "AllowedInstanceTypes": {}
}
```

<p>The attributes for the instance types for a mixed instances policy. Amazon EC2 Auto Scaling uses your specified requirements to identify instance types. Then, it uses your On-Demand and Spot allocation strategies to launch instances from these instance types.</p> <p>When you specify multiple attributes, you get instance types that satisfy all of the specified attributes. If you specify multiple values for an attribute, you get instance types that satisfy any of the specified values.</p> <p>To limit the list of instance types from which Amazon EC2 Auto Scaling can identify matching instance types, you can use one of the following parameters, but not both in the same request:</p> <ul> <li> <p> <code>AllowedInstanceTypes</code> - The instance types to include in the list. All other instance types are ignored, even if they match your specified attributes.</p> </li> <li> <p> <code>ExcludedInstanceTypes</code> - The instance types to exclude from the list, even if they match your specified attributes.</p> </li> </ul> <note> <p>You must specify <code>VCpuCount</code> and <code>MemoryMiB</code>. All other attributes are optional. Any unspecified optional attribute is set to its default.</p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-asg-instance-type-requirements.html">Creating an Auto Scaling group using attribute-based instance type selection</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. For help determining which instance types match your attributes before you apply them to your Auto Scaling group, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-attribute-based-instance-type-selection.html#ec2fleet-get-instance-types-from-instance-requirements">Preview instance types with specified attributes</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VCpuCount|object|true|none|none|
|MemoryMiB|object|true|none|none|
|CpuManufacturers|object|false|none|none|
|MemoryGiBPerVCpu|object|false|none|none|
|ExcludedInstanceTypes|object|false|none|none|
|InstanceGenerations|object|false|none|none|
|SpotMaxPricePercentageOverLowestPrice|object|false|none|none|
|OnDemandMaxPricePercentageOverLowestPrice|object|false|none|none|
|BareMetal|object|false|none|none|
|BurstablePerformance|object|false|none|none|
|RequireHibernateSupport|object|false|none|none|
|NetworkInterfaceCount|object|false|none|none|
|LocalStorage|object|false|none|none|
|LocalStorageTypes|object|false|none|none|
|TotalLocalStorageGB|object|false|none|none|
|BaselineEbsBandwidthMbps|object|false|none|none|
|AcceleratorTypes|object|false|none|none|
|AcceleratorCount|object|false|none|none|
|AcceleratorManufacturers|object|false|none|none|
|AcceleratorNames|object|false|none|none|
|AcceleratorTotalMemoryMiB|object|false|none|none|
|NetworkBandwidthGbps|object|false|none|none|
|AllowedInstanceTypes|object|false|none|none|

<h2 id="tocS_InstanceReusePolicy">InstanceReusePolicy</h2>
<!-- backwards compatibility -->
<a id="schemainstancereusepolicy"></a>
<a id="schema_InstanceReusePolicy"></a>
<a id="tocSinstancereusepolicy"></a>
<a id="tocsinstancereusepolicy"></a>

```json
{
  "ReuseOnScaleIn": {}
}
```

<p>Describes an instance reuse policy for a warm pool. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html">Warm pools for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReuseOnScaleIn|object|false|none|none|

<h2 id="tocS_OnDemandBaseCapacity">OnDemandBaseCapacity</h2>
<!-- backwards compatibility -->
<a id="schemaondemandbasecapacity"></a>
<a id="schema_OnDemandBaseCapacity"></a>
<a id="tocSondemandbasecapacity"></a>
<a id="tocsondemandbasecapacity"></a>

```json
0
```

<h2 id="tocS_OnDemandPercentageAboveBaseCapacity">OnDemandPercentageAboveBaseCapacity</h2>
<!-- backwards compatibility -->
<a id="schemaondemandpercentageabovebasecapacity"></a>
<a id="schema_OnDemandPercentageAboveBaseCapacity"></a>
<a id="tocSondemandpercentageabovebasecapacity"></a>
<a id="tocsondemandpercentageabovebasecapacity"></a>

```json
0
```

<h2 id="tocS_SpotInstancePools">SpotInstancePools</h2>
<!-- backwards compatibility -->
<a id="schemaspotinstancepools"></a>
<a id="schema_SpotInstancePools"></a>
<a id="tocSspotinstancepools"></a>
<a id="tocsspotinstancepools"></a>

```json
0
```

<h2 id="tocS_MixedInstanceSpotPrice">MixedInstanceSpotPrice</h2>
<!-- backwards compatibility -->
<a id="schemamixedinstancespotprice"></a>
<a id="schema_MixedInstanceSpotPrice"></a>
<a id="tocSmixedinstancespotprice"></a>
<a id="tocsmixedinstancespotprice"></a>

```json
"string"
```

<h2 id="tocS_LaunchConfiguration">LaunchConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemalaunchconfiguration"></a>
<a id="schema_LaunchConfiguration"></a>
<a id="tocSlaunchconfiguration"></a>
<a id="tocslaunchconfiguration"></a>

```json
{
  "LaunchConfigurationName": {},
  "LaunchConfigurationARN": {},
  "ImageId": {},
  "KeyName": {},
  "SecurityGroups": {},
  "ClassicLinkVPCId": {},
  "ClassicLinkVPCSecurityGroups": {},
  "UserData": {},
  "InstanceType": {},
  "KernelId": {},
  "RamdiskId": {},
  "BlockDeviceMappings": {},
  "InstanceMonitoring": {
    "Enabled": {}
  },
  "SpotPrice": {},
  "IamInstanceProfile": {},
  "CreatedTime": {},
  "EbsOptimized": {},
  "AssociatePublicIpAddress": {},
  "PlacementTenancy": {},
  "MetadataOptions": {
    "HttpTokens": {},
    "HttpPutResponseHopLimit": {},
    "HttpEndpoint": {}
  }
}
```

Describes a launch configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LaunchConfigurationName|object|true|none|none|
|LaunchConfigurationARN|object|false|none|none|
|ImageId|object|true|none|none|
|KeyName|object|false|none|none|
|SecurityGroups|object|false|none|none|
|ClassicLinkVPCId|object|false|none|none|
|ClassicLinkVPCSecurityGroups|object|false|none|none|
|UserData|object|false|none|none|
|InstanceType|object|true|none|none|
|KernelId|object|false|none|none|
|RamdiskId|object|false|none|none|
|BlockDeviceMappings|object|false|none|none|
|InstanceMonitoring|object|false|none|none|
|SpotPrice|object|false|none|none|
|IamInstanceProfile|object|false|none|none|
|CreatedTime|object|true|none|none|
|EbsOptimized|object|false|none|none|
|AssociatePublicIpAddress|object|false|none|none|
|PlacementTenancy|object|false|none|none|
|MetadataOptions|object|false|none|none|

<h2 id="tocS_LaunchConfigurationNameType">LaunchConfigurationNameType</h2>
<!-- backwards compatibility -->
<a id="schemalaunchconfigurationnametype"></a>
<a id="schema_LaunchConfigurationNameType"></a>
<a id="tocSlaunchconfigurationnametype"></a>
<a id="tocslaunchconfigurationnametype"></a>

```json
{
  "LaunchConfigurationName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LaunchConfigurationName|object|true|none|none|

<h2 id="tocS_LaunchConfigurationNames">LaunchConfigurationNames</h2>
<!-- backwards compatibility -->
<a id="schemalaunchconfigurationnames"></a>
<a id="schema_LaunchConfigurationNames"></a>
<a id="tocSlaunchconfigurationnames"></a>
<a id="tocslaunchconfigurationnames"></a>

```json
[
  "string"
]
```

<h2 id="tocS_LaunchConfigurationNamesType">LaunchConfigurationNamesType</h2>
<!-- backwards compatibility -->
<a id="schemalaunchconfigurationnamestype"></a>
<a id="schema_LaunchConfigurationNamesType"></a>
<a id="tocSlaunchconfigurationnamestype"></a>
<a id="tocslaunchconfigurationnamestype"></a>

```json
{
  "LaunchConfigurationNames": {},
  "NextToken": {},
  "MaxRecords": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LaunchConfigurationNames|object|false|none|none|
|NextToken|object|false|none|none|
|MaxRecords|object|false|none|none|

<h2 id="tocS_LaunchConfigurations">LaunchConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemalaunchconfigurations"></a>
<a id="schema_LaunchConfigurations"></a>
<a id="tocSlaunchconfigurations"></a>
<a id="tocslaunchconfigurations"></a>

```json
[
  {
    "LaunchConfigurationName": {},
    "LaunchConfigurationARN": {},
    "ImageId": {},
    "KeyName": {},
    "SecurityGroups": {},
    "ClassicLinkVPCId": {},
    "ClassicLinkVPCSecurityGroups": {},
    "UserData": {},
    "InstanceType": {},
    "KernelId": {},
    "RamdiskId": {},
    "BlockDeviceMappings": {},
    "InstanceMonitoring": {
      "Enabled": {}
    },
    "SpotPrice": {},
    "IamInstanceProfile": {},
    "CreatedTime": {},
    "EbsOptimized": {},
    "AssociatePublicIpAddress": {},
    "PlacementTenancy": {},
    "MetadataOptions": {
      "HttpTokens": {},
      "HttpPutResponseHopLimit": {},
      "HttpEndpoint": {}
    }
  }
]
```

<h2 id="tocS_Overrides">Overrides</h2>
<!-- backwards compatibility -->
<a id="schemaoverrides"></a>
<a id="schema_Overrides"></a>
<a id="tocSoverrides"></a>
<a id="tocsoverrides"></a>

```json
[
  {
    "InstanceType": {},
    "WeightedCapacity": {},
    "LaunchTemplateSpecification": {
      "LaunchTemplateId": {},
      "LaunchTemplateName": {},
      "Version": {}
    },
    "InstanceRequirements": {
      "VCpuCount": {
        "Min": {},
        "Max": {}
      },
      "MemoryMiB": {
        "Min": {},
        "Max": {}
      },
      "CpuManufacturers": {},
      "MemoryGiBPerVCpu": {
        "Min": {},
        "Max": {}
      },
      "ExcludedInstanceTypes": {},
      "InstanceGenerations": {},
      "SpotMaxPricePercentageOverLowestPrice": {},
      "OnDemandMaxPricePercentageOverLowestPrice": {},
      "BareMetal": {},
      "BurstablePerformance": {},
      "RequireHibernateSupport": {},
      "NetworkInterfaceCount": {
        "Min": {},
        "Max": {}
      },
      "LocalStorage": {},
      "LocalStorageTypes": {},
      "TotalLocalStorageGB": {
        "Min": {},
        "Max": {}
      },
      "BaselineEbsBandwidthMbps": {
        "Min": {},
        "Max": {}
      },
      "AcceleratorTypes": {},
      "AcceleratorCount": {
        "Min": {},
        "Max": {}
      },
      "AcceleratorManufacturers": {},
      "AcceleratorNames": {},
      "AcceleratorTotalMemoryMiB": {
        "Min": {},
        "Max": {}
      },
      "NetworkBandwidthGbps": {
        "Min": {},
        "Max": {}
      },
      "AllowedInstanceTypes": {}
    }
  }
]
```

<h2 id="tocS_LaunchTemplateOverrides">LaunchTemplateOverrides</h2>
<!-- backwards compatibility -->
<a id="schemalaunchtemplateoverrides"></a>
<a id="schema_LaunchTemplateOverrides"></a>
<a id="tocSlaunchtemplateoverrides"></a>
<a id="tocslaunchtemplateoverrides"></a>

```json
{
  "InstanceType": {},
  "WeightedCapacity": {},
  "LaunchTemplateSpecification": {
    "LaunchTemplateId": {},
    "LaunchTemplateName": {},
    "Version": {}
  },
  "InstanceRequirements": {
    "VCpuCount": {
      "Min": {},
      "Max": {}
    },
    "MemoryMiB": {
      "Min": {},
      "Max": {}
    },
    "CpuManufacturers": {},
    "MemoryGiBPerVCpu": {
      "Min": {},
      "Max": {}
    },
    "ExcludedInstanceTypes": {},
    "InstanceGenerations": {},
    "SpotMaxPricePercentageOverLowestPrice": {},
    "OnDemandMaxPricePercentageOverLowestPrice": {},
    "BareMetal": {},
    "BurstablePerformance": {},
    "RequireHibernateSupport": {},
    "NetworkInterfaceCount": {
      "Min": {},
      "Max": {}
    },
    "LocalStorage": {},
    "LocalStorageTypes": {},
    "TotalLocalStorageGB": {
      "Min": {},
      "Max": {}
    },
    "BaselineEbsBandwidthMbps": {
      "Min": {},
      "Max": {}
    },
    "AcceleratorTypes": {},
    "AcceleratorCount": {
      "Min": {},
      "Max": {}
    },
    "AcceleratorManufacturers": {},
    "AcceleratorNames": {},
    "AcceleratorTotalMemoryMiB": {
      "Min": {},
      "Max": {}
    },
    "NetworkBandwidthGbps": {
      "Min": {},
      "Max": {}
    },
    "AllowedInstanceTypes": {}
  }
}
```

<p>Use this structure to let Amazon EC2 Auto Scaling do the following when the Auto Scaling group has a mixed instances policy:</p> <ul> <li> <p>Override the instance type that is specified in the launch template.</p> </li> <li> <p>Use multiple instance types.</p> </li> </ul> <p>Specify the instance types that you want, or define your instance requirements instead and let Amazon EC2 Auto Scaling provision the available instance types that meet your requirements. This can provide Amazon EC2 Auto Scaling with a larger selection of instance types to choose from when fulfilling Spot and On-Demand capacities. You can view which instance types are matched before you apply the instance requirements to your Auto Scaling group.</p> <p>After you define your instance requirements, you don't have to keep updating these settings to get new EC2 instance types automatically. Amazon EC2 Auto Scaling uses the instance requirements of the Auto Scaling group to determine whether a new EC2 instance type can be used.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceType|object|false|none|none|
|WeightedCapacity|object|false|none|none|
|LaunchTemplateSpecification|object|false|none|none|
|InstanceRequirements|object|false|none|none|

<h2 id="tocS_LifecycleTransition">LifecycleTransition</h2>
<!-- backwards compatibility -->
<a id="schemalifecycletransition"></a>
<a id="schema_LifecycleTransition"></a>
<a id="tocSlifecycletransition"></a>
<a id="tocslifecycletransition"></a>

```json
"string"
```

<h2 id="tocS_NotificationTargetResourceName">NotificationTargetResourceName</h2>
<!-- backwards compatibility -->
<a id="schemanotificationtargetresourcename"></a>
<a id="schema_NotificationTargetResourceName"></a>
<a id="tocSnotificationtargetresourcename"></a>
<a id="tocsnotificationtargetresourcename"></a>

```json
"string"
```

<h2 id="tocS_LifecycleHook">LifecycleHook</h2>
<!-- backwards compatibility -->
<a id="schemalifecyclehook"></a>
<a id="schema_LifecycleHook"></a>
<a id="tocSlifecyclehook"></a>
<a id="tocslifecyclehook"></a>

```json
{
  "LifecycleHookName": {},
  "AutoScalingGroupName": {},
  "LifecycleTransition": {},
  "NotificationTargetARN": {},
  "RoleARN": {},
  "NotificationMetadata": {},
  "HeartbeatTimeout": {},
  "GlobalTimeout": {},
  "DefaultResult": {}
}
```

Describes a lifecycle hook. A lifecycle hook lets you create solutions that are aware of events in the Auto Scaling instance lifecycle, and then perform a custom action on instances when the corresponding lifecycle event occurs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LifecycleHookName|object|false|none|none|
|AutoScalingGroupName|object|false|none|none|
|LifecycleTransition|object|false|none|none|
|NotificationTargetARN|object|false|none|none|
|RoleARN|object|false|none|none|
|NotificationMetadata|object|false|none|none|
|HeartbeatTimeout|object|false|none|none|
|GlobalTimeout|object|false|none|none|
|DefaultResult|object|false|none|none|

<h2 id="tocS_LoadBalancerState">LoadBalancerState</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancerstate"></a>
<a id="schema_LoadBalancerState"></a>
<a id="tocSloadbalancerstate"></a>
<a id="tocsloadbalancerstate"></a>

```json
{
  "LoadBalancerName": {},
  "State": {}
}
```

Describes the state of a Classic Load Balancer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadBalancerName|object|false|none|none|
|State|object|false|none|none|

<h2 id="tocS_LoadBalancerTargetGroupState">LoadBalancerTargetGroupState</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancertargetgroupstate"></a>
<a id="schema_LoadBalancerTargetGroupState"></a>
<a id="tocSloadbalancertargetgroupstate"></a>
<a id="tocsloadbalancertargetgroupstate"></a>

```json
{
  "LoadBalancerTargetGroupARN": {},
  "State": {}
}
```

Describes the state of a target group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadBalancerTargetGroupARN|object|false|none|none|
|State|object|false|none|none|

<h2 id="tocS_PredictiveScalingMetricSpecification">PredictiveScalingMetricSpecification</h2>
<!-- backwards compatibility -->
<a id="schemapredictivescalingmetricspecification"></a>
<a id="schema_PredictiveScalingMetricSpecification"></a>
<a id="tocSpredictivescalingmetricspecification"></a>
<a id="tocspredictivescalingmetricspecification"></a>

```json
{
  "TargetValue": {},
  "PredefinedMetricPairSpecification": {
    "PredefinedMetricType": {},
    "ResourceLabel": {}
  },
  "PredefinedScalingMetricSpecification": {
    "PredefinedMetricType": {},
    "ResourceLabel": {}
  },
  "PredefinedLoadMetricSpecification": {
    "PredefinedMetricType": {},
    "ResourceLabel": {}
  },
  "CustomizedScalingMetricSpecification": {
    "MetricDataQueries": {}
  },
  "CustomizedLoadMetricSpecification": {
    "MetricDataQueries": {}
  },
  "CustomizedCapacityMetricSpecification": {
    "MetricDataQueries": {}
  }
}
```

<p>This structure specifies the metrics and target utilization settings for a predictive scaling policy. </p> <p>You must specify either a metric pair, or a load metric and a scaling metric individually. Specifying a metric pair instead of individual metrics provides a simpler way to configure metrics for a scaling policy. You choose the metric pair, and the policy automatically knows the correct sum and average statistics to use for the load metric and the scaling metric.</p> <p>Example</p> <ul> <li> <p>You create a predictive scaling policy and specify <code>ALBRequestCount</code> as the value for the metric pair and <code>1000.0</code> as the target value. For this type of metric, you must provide the metric dimension for the corresponding target group, so you also provide a resource label for the Application Load Balancer target group that is attached to your Auto Scaling group.</p> </li> <li> <p>The number of requests the target group receives per minute provides the load metric, and the request count averaged between the members of the target group provides the scaling metric. In CloudWatch, this refers to the <code>RequestCount</code> and <code>RequestCountPerTarget</code> metrics, respectively.</p> </li> <li> <p>For optimal use of predictive scaling, you adhere to the best practice of using a dynamic scaling policy to automatically scale between the minimum capacity and maximum capacity in response to real-time changes in resource utilization.</p> </li> <li> <p>Amazon EC2 Auto Scaling consumes data points for the load metric over the last 14 days and creates an hourly load forecast for predictive scaling. (A minimum of 24 hours of data is required.)</p> </li> <li> <p>After creating the load forecast, Amazon EC2 Auto Scaling determines when to reduce or increase the capacity of your Auto Scaling group in each hour of the forecast period so that the average number of requests received by each instance is as close to 1000 requests per minute as possible at all times.</p> </li> </ul> <p>For information about using custom metrics with predictive scaling, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/predictive-scaling-customized-metric-specification.html">Advanced predictive scaling policy configurations using custom metrics</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetValue|object|true|none|none|
|PredefinedMetricPairSpecification|object|false|none|none|
|PredefinedScalingMetricSpecification|object|false|none|none|
|PredefinedLoadMetricSpecification|object|false|none|none|
|CustomizedScalingMetricSpecification|object|false|none|none|
|CustomizedLoadMetricSpecification|object|false|none|none|
|CustomizedCapacityMetricSpecification|object|false|none|none|

<h2 id="tocS_LoadForecast">LoadForecast</h2>
<!-- backwards compatibility -->
<a id="schemaloadforecast"></a>
<a id="schema_LoadForecast"></a>
<a id="tocSloadforecast"></a>
<a id="tocsloadforecast"></a>

```json
{
  "Timestamps": {},
  "Values": {},
  "MetricSpecification": {
    "TargetValue": {},
    "PredefinedMetricPairSpecification": {
      "PredefinedMetricType": {},
      "ResourceLabel": {}
    },
    "PredefinedScalingMetricSpecification": {
      "PredefinedMetricType": {},
      "ResourceLabel": {}
    },
    "PredefinedLoadMetricSpecification": {
      "PredefinedMetricType": {},
      "ResourceLabel": {}
    },
    "CustomizedScalingMetricSpecification": {
      "MetricDataQueries": {}
    },
    "CustomizedLoadMetricSpecification": {
      "MetricDataQueries": {}
    },
    "CustomizedCapacityMetricSpecification": {
      "MetricDataQueries": {}
    }
  }
}
```

A <code>GetPredictiveScalingForecast</code> call returns the load forecast for a predictive scaling policy. This structure includes the data points for that load forecast, along with the timestamps of those data points and the metric specification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Timestamps|object|true|none|none|
|Values|object|true|none|none|
|MetricSpecification|object|true|none|none|

<h2 id="tocS_LocalStorageType">LocalStorageType</h2>
<!-- backwards compatibility -->
<a id="schemalocalstoragetype"></a>
<a id="schema_LocalStorageType"></a>
<a id="tocSlocalstoragetype"></a>
<a id="tocslocalstoragetype"></a>

```json
"hdd"
```

<h2 id="tocS_MaxGroupPreparedCapacity">MaxGroupPreparedCapacity</h2>
<!-- backwards compatibility -->
<a id="schemamaxgrouppreparedcapacity"></a>
<a id="schema_MaxGroupPreparedCapacity"></a>
<a id="tocSmaxgrouppreparedcapacity"></a>
<a id="tocsmaxgrouppreparedcapacity"></a>

```json
-1
```

<h2 id="tocS_NullablePositiveDouble">NullablePositiveDouble</h2>
<!-- backwards compatibility -->
<a id="schemanullablepositivedouble"></a>
<a id="schema_NullablePositiveDouble"></a>
<a id="tocSnullablepositivedouble"></a>
<a id="tocsnullablepositivedouble"></a>

```json
0
```

<h2 id="tocS_Metric">Metric</h2>
<!-- backwards compatibility -->
<a id="schemametric"></a>
<a id="schema_Metric"></a>
<a id="tocSmetric"></a>
<a id="tocsmetric"></a>

```json
{
  "Namespace": {},
  "MetricName": {},
  "Dimensions": {}
}
```

Represents a specific metric.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Namespace|object|true|none|none|
|MetricName|object|true|none|none|
|Dimensions|object|false|none|none|

<h2 id="tocS_MetricCollectionType">MetricCollectionType</h2>
<!-- backwards compatibility -->
<a id="schemametriccollectiontype"></a>
<a id="schema_MetricCollectionType"></a>
<a id="tocSmetriccollectiontype"></a>
<a id="tocsmetriccollectiontype"></a>

```json
{
  "Metric": {}
}
```

Describes a metric.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Metric|object|false|none|none|

<h2 id="tocS_MetricDataQuery">MetricDataQuery</h2>
<!-- backwards compatibility -->
<a id="schemametricdataquery"></a>
<a id="schema_MetricDataQuery"></a>
<a id="tocSmetricdataquery"></a>
<a id="tocsmetricdataquery"></a>

```json
{
  "Id": {},
  "Expression": {},
  "MetricStat": {
    "Metric": {
      "Namespace": {},
      "MetricName": {},
      "Dimensions": {}
    },
    "Stat": {},
    "Unit": {}
  },
  "Label": {},
  "ReturnData": {}
}
```

<p>The metric data to return. Also defines whether this call is returning data for one metric only, or whether it is performing a math expression on the values of returned metric statistics to create a new time series. A time series is a series of data points, each of which is associated with a timestamp.</p> <p>For more information and examples, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/predictive-scaling-customized-metric-specification.html">Advanced predictive scaling policy configurations using custom metrics</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|Expression|object|false|none|none|
|MetricStat|object|false|none|none|
|Label|object|false|none|none|
|ReturnData|object|false|none|none|

<h2 id="tocS_MetricDataQueries">MetricDataQueries</h2>
<!-- backwards compatibility -->
<a id="schemametricdataqueries"></a>
<a id="schema_MetricDataQueries"></a>
<a id="tocSmetricdataqueries"></a>
<a id="tocsmetricdataqueries"></a>

```json
[
  {
    "Id": {},
    "Expression": {},
    "MetricStat": {
      "Metric": {
        "Namespace": {},
        "MetricName": {},
        "Dimensions": {}
      },
      "Stat": {},
      "Unit": {}
    },
    "Label": {},
    "ReturnData": {}
  }
]
```

<h2 id="tocS_MetricStat">MetricStat</h2>
<!-- backwards compatibility -->
<a id="schemametricstat"></a>
<a id="schema_MetricStat"></a>
<a id="tocSmetricstat"></a>
<a id="tocsmetricstat"></a>

```json
{
  "Metric": {
    "Namespace": {},
    "MetricName": {},
    "Dimensions": {}
  },
  "Stat": {},
  "Unit": {}
}
```

<p>This structure defines the CloudWatch metric to return, along with the statistic, period, and unit.</p> <p>For more information about the CloudWatch terminology below, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch concepts</a> in the <i>Amazon CloudWatch User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Metric|object|true|none|none|
|Stat|object|true|none|none|
|Unit|object|false|none|none|

<h2 id="tocS_XmlStringMetricLabel">XmlStringMetricLabel</h2>
<!-- backwards compatibility -->
<a id="schemaxmlstringmetriclabel"></a>
<a id="schema_XmlStringMetricLabel"></a>
<a id="tocSxmlstringmetriclabel"></a>
<a id="tocsxmlstringmetriclabel"></a>

```json
"string"
```

<h2 id="tocS_ReturnData">ReturnData</h2>
<!-- backwards compatibility -->
<a id="schemareturndata"></a>
<a id="schema_ReturnData"></a>
<a id="tocSreturndata"></a>
<a id="tocsreturndata"></a>

```json
true
```

<h2 id="tocS_MetricDimensionName">MetricDimensionName</h2>
<!-- backwards compatibility -->
<a id="schemametricdimensionname"></a>
<a id="schema_MetricDimensionName"></a>
<a id="tocSmetricdimensionname"></a>
<a id="tocsmetricdimensionname"></a>

```json
"string"
```

<h2 id="tocS_MetricDimensionValue">MetricDimensionValue</h2>
<!-- backwards compatibility -->
<a id="schemametricdimensionvalue"></a>
<a id="schema_MetricDimensionValue"></a>
<a id="tocSmetricdimensionvalue"></a>
<a id="tocsmetricdimensionvalue"></a>

```json
"string"
```

<h2 id="tocS_MetricDimension">MetricDimension</h2>
<!-- backwards compatibility -->
<a id="schemametricdimension"></a>
<a id="schema_MetricDimension"></a>
<a id="tocSmetricdimension"></a>
<a id="tocsmetricdimension"></a>

```json
{
  "Name": {},
  "Value": {}
}
```

Describes the dimension of a metric.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_MetricGranularityType">MetricGranularityType</h2>
<!-- backwards compatibility -->
<a id="schemametricgranularitytype"></a>
<a id="schema_MetricGranularityType"></a>
<a id="tocSmetricgranularitytype"></a>
<a id="tocsmetricgranularitytype"></a>

```json
{
  "Granularity": {}
}
```

Describes a granularity of a metric.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Granularity|object|false|none|none|

<h2 id="tocS_XmlStringMetricStat">XmlStringMetricStat</h2>
<!-- backwards compatibility -->
<a id="schemaxmlstringmetricstat"></a>
<a id="schema_XmlStringMetricStat"></a>
<a id="tocSxmlstringmetricstat"></a>
<a id="tocsxmlstringmetricstat"></a>

```json
"string"
```

<h2 id="tocS_MetricType">MetricType</h2>
<!-- backwards compatibility -->
<a id="schemametrictype"></a>
<a id="schema_MetricType"></a>
<a id="tocSmetrictype"></a>
<a id="tocsmetrictype"></a>

```json
"ASGAverageCPUUtilization"
```

<h2 id="tocS_MinAdjustmentMagnitude">MinAdjustmentMagnitude</h2>
<!-- backwards compatibility -->
<a id="schemaminadjustmentmagnitude"></a>
<a id="schema_MinAdjustmentMagnitude"></a>
<a id="tocSminadjustmentmagnitude"></a>
<a id="tocsminadjustmentmagnitude"></a>

```json
0
```

<h2 id="tocS_MinAdjustmentStep">MinAdjustmentStep</h2>
<!-- backwards compatibility -->
<a id="schemaminadjustmentstep"></a>
<a id="schema_MinAdjustmentStep"></a>
<a id="tocSminadjustmentstep"></a>
<a id="tocsminadjustmentstep"></a>

```json
0
```

<h2 id="tocS_NotificationConfiguration">NotificationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemanotificationconfiguration"></a>
<a id="schema_NotificationConfiguration"></a>
<a id="tocSnotificationconfiguration"></a>
<a id="tocsnotificationconfiguration"></a>

```json
{
  "AutoScalingGroupName": {},
  "TopicARN": {},
  "NotificationType": {}
}
```

Describes a notification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingGroupName|object|false|none|none|
|TopicARN|object|false|none|none|
|NotificationType|object|false|none|none|

<h2 id="tocS_ScalingPolicies">ScalingPolicies</h2>
<!-- backwards compatibility -->
<a id="schemascalingpolicies"></a>
<a id="schema_ScalingPolicies"></a>
<a id="tocSscalingpolicies"></a>
<a id="tocsscalingpolicies"></a>

```json
[
  {
    "AutoScalingGroupName": {},
    "PolicyName": {},
    "PolicyARN": {},
    "PolicyType": {},
    "AdjustmentType": {},
    "MinAdjustmentStep": {},
    "MinAdjustmentMagnitude": {},
    "ScalingAdjustment": {},
    "Cooldown": {},
    "StepAdjustments": {},
    "MetricAggregationType": {},
    "EstimatedInstanceWarmup": {},
    "Alarms": {},
    "TargetTrackingConfiguration": {
      "PredefinedMetricSpecification": {
        "PredefinedMetricType": {},
        "ResourceLabel": {}
      },
      "CustomizedMetricSpecification": {
        "MetricName": {},
        "Namespace": {},
        "Dimensions": {},
        "Statistic": {},
        "Unit": {},
        "Metrics": {}
      },
      "TargetValue": {},
      "DisableScaleIn": {}
    },
    "Enabled": {},
    "PredictiveScalingConfiguration": {
      "MetricSpecifications": {},
      "Mode": {},
      "SchedulingBufferTime": {},
      "MaxCapacityBreachBehavior": {},
      "MaxCapacityBuffer": {}
    }
  }
]
```

<h2 id="tocS_PolicyIncrement">PolicyIncrement</h2>
<!-- backwards compatibility -->
<a id="schemapolicyincrement"></a>
<a id="schema_PolicyIncrement"></a>
<a id="tocSpolicyincrement"></a>
<a id="tocspolicyincrement"></a>

```json
0
```

<h2 id="tocS_PredefinedLoadMetricType">PredefinedLoadMetricType</h2>
<!-- backwards compatibility -->
<a id="schemapredefinedloadmetrictype"></a>
<a id="schema_PredefinedLoadMetricType"></a>
<a id="tocSpredefinedloadmetrictype"></a>
<a id="tocspredefinedloadmetrictype"></a>

```json
"ASGTotalCPUUtilization"
```

<h2 id="tocS_PredefinedMetricPairType">PredefinedMetricPairType</h2>
<!-- backwards compatibility -->
<a id="schemapredefinedmetricpairtype"></a>
<a id="schema_PredefinedMetricPairType"></a>
<a id="tocSpredefinedmetricpairtype"></a>
<a id="tocspredefinedmetricpairtype"></a>

```json
"ASGCPUUtilization"
```

<h2 id="tocS_PredefinedScalingMetricType">PredefinedScalingMetricType</h2>
<!-- backwards compatibility -->
<a id="schemapredefinedscalingmetrictype"></a>
<a id="schema_PredefinedScalingMetricType"></a>
<a id="tocSpredefinedscalingmetrictype"></a>
<a id="tocspredefinedscalingmetrictype"></a>

```json
"ASGAverageCPUUtilization"
```

<h2 id="tocS_PredictiveScalingConfiguration">PredictiveScalingConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemapredictivescalingconfiguration"></a>
<a id="schema_PredictiveScalingConfiguration"></a>
<a id="tocSpredictivescalingconfiguration"></a>
<a id="tocspredictivescalingconfiguration"></a>

```json
{
  "MetricSpecifications": {},
  "Mode": {},
  "SchedulingBufferTime": {},
  "MaxCapacityBreachBehavior": {},
  "MaxCapacityBuffer": {}
}
```

Represents a predictive scaling policy configuration to use with Amazon EC2 Auto Scaling.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MetricSpecifications|object|true|none|none|
|Mode|object|false|none|none|
|SchedulingBufferTime|object|false|none|none|
|MaxCapacityBreachBehavior|object|false|none|none|
|MaxCapacityBuffer|object|false|none|none|

<h2 id="tocS_PredictiveScalingCustomizedCapacityMetric">PredictiveScalingCustomizedCapacityMetric</h2>
<!-- backwards compatibility -->
<a id="schemapredictivescalingcustomizedcapacitymetric"></a>
<a id="schema_PredictiveScalingCustomizedCapacityMetric"></a>
<a id="tocSpredictivescalingcustomizedcapacitymetric"></a>
<a id="tocspredictivescalingcustomizedcapacitymetric"></a>

```json
{
  "MetricDataQueries": {}
}
```

Describes a customized capacity metric for a predictive scaling policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MetricDataQueries|object|true|none|none|

<h2 id="tocS_PredictiveScalingCustomizedLoadMetric">PredictiveScalingCustomizedLoadMetric</h2>
<!-- backwards compatibility -->
<a id="schemapredictivescalingcustomizedloadmetric"></a>
<a id="schema_PredictiveScalingCustomizedLoadMetric"></a>
<a id="tocSpredictivescalingcustomizedloadmetric"></a>
<a id="tocspredictivescalingcustomizedloadmetric"></a>

```json
{
  "MetricDataQueries": {}
}
```

Describes a custom load metric for a predictive scaling policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MetricDataQueries|object|true|none|none|

<h2 id="tocS_PredictiveScalingCustomizedScalingMetric">PredictiveScalingCustomizedScalingMetric</h2>
<!-- backwards compatibility -->
<a id="schemapredictivescalingcustomizedscalingmetric"></a>
<a id="schema_PredictiveScalingCustomizedScalingMetric"></a>
<a id="tocSpredictivescalingcustomizedscalingmetric"></a>
<a id="tocspredictivescalingcustomizedscalingmetric"></a>

```json
{
  "MetricDataQueries": {}
}
```

Describes a custom scaling metric for a predictive scaling policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MetricDataQueries|object|true|none|none|

<h2 id="tocS_PredictiveScalingPredefinedMetricPair">PredictiveScalingPredefinedMetricPair</h2>
<!-- backwards compatibility -->
<a id="schemapredictivescalingpredefinedmetricpair"></a>
<a id="schema_PredictiveScalingPredefinedMetricPair"></a>
<a id="tocSpredictivescalingpredefinedmetricpair"></a>
<a id="tocspredictivescalingpredefinedmetricpair"></a>

```json
{
  "PredefinedMetricType": {},
  "ResourceLabel": {}
}
```

Represents a metric pair for a predictive scaling policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PredefinedMetricType|object|true|none|none|
|ResourceLabel|object|false|none|none|

<h2 id="tocS_PredictiveScalingPredefinedScalingMetric">PredictiveScalingPredefinedScalingMetric</h2>
<!-- backwards compatibility -->
<a id="schemapredictivescalingpredefinedscalingmetric"></a>
<a id="schema_PredictiveScalingPredefinedScalingMetric"></a>
<a id="tocSpredictivescalingpredefinedscalingmetric"></a>
<a id="tocspredictivescalingpredefinedscalingmetric"></a>

```json
{
  "PredefinedMetricType": {},
  "ResourceLabel": {}
}
```

<p>Describes a scaling metric for a predictive scaling policy.</p> <p>When returned in the output of <code>DescribePolicies</code>, it indicates that a predictive scaling policy uses individually specified load and scaling metrics instead of a metric pair.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PredefinedMetricType|object|true|none|none|
|ResourceLabel|object|false|none|none|

<h2 id="tocS_PredictiveScalingPredefinedLoadMetric">PredictiveScalingPredefinedLoadMetric</h2>
<!-- backwards compatibility -->
<a id="schemapredictivescalingpredefinedloadmetric"></a>
<a id="schema_PredictiveScalingPredefinedLoadMetric"></a>
<a id="tocSpredictivescalingpredefinedloadmetric"></a>
<a id="tocspredictivescalingpredefinedloadmetric"></a>

```json
{
  "PredefinedMetricType": {},
  "ResourceLabel": {}
}
```

<p>Describes a load metric for a predictive scaling policy.</p> <p>When returned in the output of <code>DescribePolicies</code>, it indicates that a predictive scaling policy uses individually specified load and scaling metrics instead of a metric pair.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PredefinedMetricType|object|true|none|none|
|ResourceLabel|object|false|none|none|

<h2 id="tocS_ProcessNames">ProcessNames</h2>
<!-- backwards compatibility -->
<a id="schemaprocessnames"></a>
<a id="schema_ProcessNames"></a>
<a id="tocSprocessnames"></a>
<a id="tocsprocessnames"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ProcessType">ProcessType</h2>
<!-- backwards compatibility -->
<a id="schemaprocesstype"></a>
<a id="schema_ProcessType"></a>
<a id="tocSprocesstype"></a>
<a id="tocsprocesstype"></a>

```json
{
  "ProcessName": {}
}
```

<p>Describes a process type.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html#process-types">Scaling processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProcessName|object|true|none|none|

<h2 id="tocS_Processes">Processes</h2>
<!-- backwards compatibility -->
<a id="schemaprocesses"></a>
<a id="schema_Processes"></a>
<a id="tocSprocesses"></a>
<a id="tocsprocesses"></a>

```json
[
  {
    "ProcessName": {}
  }
]
```

<h2 id="tocS_PropagateAtLaunch">PropagateAtLaunch</h2>
<!-- backwards compatibility -->
<a id="schemapropagateatlaunch"></a>
<a id="schema_PropagateAtLaunch"></a>
<a id="tocSpropagateatlaunch"></a>
<a id="tocspropagateatlaunch"></a>

```json
true
```

<h2 id="tocS_ProtectedFromScaleIn">ProtectedFromScaleIn</h2>
<!-- backwards compatibility -->
<a id="schemaprotectedfromscalein"></a>
<a id="schema_ProtectedFromScaleIn"></a>
<a id="tocSprotectedfromscalein"></a>
<a id="tocsprotectedfromscalein"></a>

```json
true
```

<h2 id="tocS_PutLifecycleHookType">PutLifecycleHookType</h2>
<!-- backwards compatibility -->
<a id="schemaputlifecyclehooktype"></a>
<a id="schema_PutLifecycleHookType"></a>
<a id="tocSputlifecyclehooktype"></a>
<a id="tocsputlifecyclehooktype"></a>

```json
{
  "LifecycleHookName": {},
  "AutoScalingGroupName": {},
  "LifecycleTransition": {},
  "RoleARN": {},
  "NotificationTargetARN": {},
  "NotificationMetadata": {},
  "HeartbeatTimeout": {},
  "DefaultResult": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LifecycleHookName|object|true|none|none|
|AutoScalingGroupName|object|true|none|none|
|LifecycleTransition|object|false|none|none|
|RoleARN|object|false|none|none|
|NotificationTargetARN|object|false|none|none|
|NotificationMetadata|object|false|none|none|
|HeartbeatTimeout|object|false|none|none|
|DefaultResult|object|false|none|none|

<h2 id="tocS_PutNotificationConfigurationType">PutNotificationConfigurationType</h2>
<!-- backwards compatibility -->
<a id="schemaputnotificationconfigurationtype"></a>
<a id="schema_PutNotificationConfigurationType"></a>
<a id="tocSputnotificationconfigurationtype"></a>
<a id="tocsputnotificationconfigurationtype"></a>

```json
{
  "AutoScalingGroupName": {},
  "TopicARN": {},
  "NotificationTypes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingGroupName|object|true|none|none|
|TopicARN|object|true|none|none|
|NotificationTypes|object|true|none|none|

<h2 id="tocS_StepAdjustments">StepAdjustments</h2>
<!-- backwards compatibility -->
<a id="schemastepadjustments"></a>
<a id="schema_StepAdjustments"></a>
<a id="tocSstepadjustments"></a>
<a id="tocsstepadjustments"></a>

```json
[
  {
    "MetricIntervalLowerBound": {},
    "MetricIntervalUpperBound": {},
    "ScalingAdjustment": {}
  }
]
```

<h2 id="tocS_TargetTrackingConfiguration">TargetTrackingConfiguration</h2>
<!-- backwards compatibility -->
<a id="schematargettrackingconfiguration"></a>
<a id="schema_TargetTrackingConfiguration"></a>
<a id="tocStargettrackingconfiguration"></a>
<a id="tocstargettrackingconfiguration"></a>

```json
{
  "PredefinedMetricSpecification": {
    "PredefinedMetricType": {},
    "ResourceLabel": {}
  },
  "CustomizedMetricSpecification": {
    "MetricName": {},
    "Namespace": {},
    "Dimensions": {},
    "Statistic": {},
    "Unit": {},
    "Metrics": {}
  },
  "TargetValue": {},
  "DisableScaleIn": {}
}
```

Represents a target tracking scaling policy configuration to use with Amazon EC2 Auto Scaling.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PredefinedMetricSpecification|object|false|none|none|
|CustomizedMetricSpecification|object|false|none|none|
|TargetValue|object|true|none|none|
|DisableScaleIn|object|false|none|none|

<h2 id="tocS_ScalingPolicyEnabled">ScalingPolicyEnabled</h2>
<!-- backwards compatibility -->
<a id="schemascalingpolicyenabled"></a>
<a id="schema_ScalingPolicyEnabled"></a>
<a id="tocSscalingpolicyenabled"></a>
<a id="tocsscalingpolicyenabled"></a>

```json
true
```

<h2 id="tocS_PutScalingPolicyType">PutScalingPolicyType</h2>
<!-- backwards compatibility -->
<a id="schemaputscalingpolicytype"></a>
<a id="schema_PutScalingPolicyType"></a>
<a id="tocSputscalingpolicytype"></a>
<a id="tocsputscalingpolicytype"></a>

```json
{
  "AutoScalingGroupName": {},
  "PolicyName": {},
  "PolicyType": {},
  "AdjustmentType": {},
  "MinAdjustmentStep": {},
  "MinAdjustmentMagnitude": {},
  "ScalingAdjustment": {},
  "Cooldown": {},
  "MetricAggregationType": {},
  "StepAdjustments": {},
  "EstimatedInstanceWarmup": {},
  "TargetTrackingConfiguration": {
    "PredefinedMetricSpecification": {
      "PredefinedMetricType": {},
      "ResourceLabel": {}
    },
    "CustomizedMetricSpecification": {
      "MetricName": {},
      "Namespace": {},
      "Dimensions": {},
      "Statistic": {},
      "Unit": {},
      "Metrics": {}
    },
    "TargetValue": {},
    "DisableScaleIn": {}
  },
  "Enabled": {},
  "PredictiveScalingConfiguration": {
    "MetricSpecifications": {},
    "Mode": {},
    "SchedulingBufferTime": {},
    "MaxCapacityBreachBehavior": {},
    "MaxCapacityBuffer": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingGroupName|object|true|none|none|
|PolicyName|object|true|none|none|
|PolicyType|object|false|none|none|
|AdjustmentType|object|false|none|none|
|MinAdjustmentStep|object|false|none|none|
|MinAdjustmentMagnitude|object|false|none|none|
|ScalingAdjustment|object|false|none|none|
|Cooldown|object|false|none|none|
|MetricAggregationType|object|false|none|none|
|StepAdjustments|object|false|none|none|
|EstimatedInstanceWarmup|object|false|none|none|
|TargetTrackingConfiguration|object|false|none|none|
|Enabled|object|false|none|none|
|PredictiveScalingConfiguration|object|false|none|none|

<h2 id="tocS_PutScheduledUpdateGroupActionType">PutScheduledUpdateGroupActionType</h2>
<!-- backwards compatibility -->
<a id="schemaputscheduledupdategroupactiontype"></a>
<a id="schema_PutScheduledUpdateGroupActionType"></a>
<a id="tocSputscheduledupdategroupactiontype"></a>
<a id="tocsputscheduledupdategroupactiontype"></a>

```json
{
  "AutoScalingGroupName": {},
  "ScheduledActionName": {},
  "Time": {},
  "StartTime": {},
  "EndTime": {},
  "Recurrence": {},
  "MinSize": {},
  "MaxSize": {},
  "DesiredCapacity": {},
  "TimeZone": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingGroupName|object|true|none|none|
|ScheduledActionName|object|true|none|none|
|Time|object|false|none|none|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|
|Recurrence|object|false|none|none|
|MinSize|object|false|none|none|
|MaxSize|object|false|none|none|
|DesiredCapacity|object|false|none|none|
|TimeZone|object|false|none|none|

<h2 id="tocS_WarmPoolMinSize">WarmPoolMinSize</h2>
<!-- backwards compatibility -->
<a id="schemawarmpoolminsize"></a>
<a id="schema_WarmPoolMinSize"></a>
<a id="tocSwarmpoolminsize"></a>
<a id="tocswarmpoolminsize"></a>

```json
0
```

<h2 id="tocS_WarmPoolState">WarmPoolState</h2>
<!-- backwards compatibility -->
<a id="schemawarmpoolstate"></a>
<a id="schema_WarmPoolState"></a>
<a id="tocSwarmpoolstate"></a>
<a id="tocswarmpoolstate"></a>

```json
"Stopped"
```

<h2 id="tocS_PutWarmPoolType">PutWarmPoolType</h2>
<!-- backwards compatibility -->
<a id="schemaputwarmpooltype"></a>
<a id="schema_PutWarmPoolType"></a>
<a id="tocSputwarmpooltype"></a>
<a id="tocsputwarmpooltype"></a>

```json
{
  "AutoScalingGroupName": {},
  "MaxGroupPreparedCapacity": {},
  "MinSize": {},
  "PoolState": {},
  "InstanceReusePolicy": {
    "ReuseOnScaleIn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingGroupName|object|true|none|none|
|MaxGroupPreparedCapacity|object|false|none|none|
|MinSize|object|false|none|none|
|PoolState|object|false|none|none|
|InstanceReusePolicy|object|false|none|none|

<h2 id="tocS_RecordLifecycleActionHeartbeatType">RecordLifecycleActionHeartbeatType</h2>
<!-- backwards compatibility -->
<a id="schemarecordlifecycleactionheartbeattype"></a>
<a id="schema_RecordLifecycleActionHeartbeatType"></a>
<a id="tocSrecordlifecycleactionheartbeattype"></a>
<a id="tocsrecordlifecycleactionheartbeattype"></a>

```json
{
  "LifecycleHookName": {},
  "AutoScalingGroupName": {},
  "LifecycleActionToken": {},
  "InstanceId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LifecycleHookName|object|true|none|none|
|AutoScalingGroupName|object|true|none|none|
|LifecycleActionToken|object|false|none|none|
|InstanceId|object|false|none|none|

<h2 id="tocS_RefreshStrategy">RefreshStrategy</h2>
<!-- backwards compatibility -->
<a id="schemarefreshstrategy"></a>
<a id="schema_RefreshStrategy"></a>
<a id="tocSrefreshstrategy"></a>
<a id="tocsrefreshstrategy"></a>

```json
"Rolling"
```

<h2 id="tocS_RollbackInstanceRefreshType">RollbackInstanceRefreshType</h2>
<!-- backwards compatibility -->
<a id="schemarollbackinstancerefreshtype"></a>
<a id="schema_RollbackInstanceRefreshType"></a>
<a id="tocSrollbackinstancerefreshtype"></a>
<a id="tocsrollbackinstancerefreshtype"></a>

```json
{
  "AutoScalingGroupName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingGroupName|object|true|none|none|

<h2 id="tocS_ScalingPolicy">ScalingPolicy</h2>
<!-- backwards compatibility -->
<a id="schemascalingpolicy"></a>
<a id="schema_ScalingPolicy"></a>
<a id="tocSscalingpolicy"></a>
<a id="tocsscalingpolicy"></a>

```json
{
  "AutoScalingGroupName": {},
  "PolicyName": {},
  "PolicyARN": {},
  "PolicyType": {},
  "AdjustmentType": {},
  "MinAdjustmentStep": {},
  "MinAdjustmentMagnitude": {},
  "ScalingAdjustment": {},
  "Cooldown": {},
  "StepAdjustments": {},
  "MetricAggregationType": {},
  "EstimatedInstanceWarmup": {},
  "Alarms": {},
  "TargetTrackingConfiguration": {
    "PredefinedMetricSpecification": {
      "PredefinedMetricType": {},
      "ResourceLabel": {}
    },
    "CustomizedMetricSpecification": {
      "MetricName": {},
      "Namespace": {},
      "Dimensions": {},
      "Statistic": {},
      "Unit": {},
      "Metrics": {}
    },
    "TargetValue": {},
    "DisableScaleIn": {}
  },
  "Enabled": {},
  "PredictiveScalingConfiguration": {
    "MetricSpecifications": {},
    "Mode": {},
    "SchedulingBufferTime": {},
    "MaxCapacityBreachBehavior": {},
    "MaxCapacityBuffer": {}
  }
}
```

Describes a scaling policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingGroupName|object|false|none|none|
|PolicyName|object|false|none|none|
|PolicyARN|object|false|none|none|
|PolicyType|object|false|none|none|
|AdjustmentType|object|false|none|none|
|MinAdjustmentStep|object|false|none|none|
|MinAdjustmentMagnitude|object|false|none|none|
|ScalingAdjustment|object|false|none|none|
|Cooldown|object|false|none|none|
|StepAdjustments|object|false|none|none|
|MetricAggregationType|object|false|none|none|
|EstimatedInstanceWarmup|object|false|none|none|
|Alarms|object|false|none|none|
|TargetTrackingConfiguration|object|false|none|none|
|Enabled|object|false|none|none|
|PredictiveScalingConfiguration|object|false|none|none|

<h2 id="tocS_ScalingProcessQuery">ScalingProcessQuery</h2>
<!-- backwards compatibility -->
<a id="schemascalingprocessquery"></a>
<a id="schema_ScalingProcessQuery"></a>
<a id="tocSscalingprocessquery"></a>
<a id="tocsscalingprocessquery"></a>

```json
{
  "AutoScalingGroupName": {},
  "ScalingProcesses": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingGroupName|object|true|none|none|
|ScalingProcesses|object|false|none|none|

<h2 id="tocS_ScheduledUpdateGroupActions">ScheduledUpdateGroupActions</h2>
<!-- backwards compatibility -->
<a id="schemascheduledupdategroupactions"></a>
<a id="schema_ScheduledUpdateGroupActions"></a>
<a id="tocSscheduledupdategroupactions"></a>
<a id="tocsscheduledupdategroupactions"></a>

```json
[
  {
    "AutoScalingGroupName": {},
    "ScheduledActionName": {},
    "ScheduledActionARN": {},
    "Time": {},
    "StartTime": {},
    "EndTime": {},
    "Recurrence": {},
    "MinSize": {},
    "MaxSize": {},
    "DesiredCapacity": {},
    "TimeZone": {}
  }
]
```

<h2 id="tocS_ScheduledUpdateGroupAction">ScheduledUpdateGroupAction</h2>
<!-- backwards compatibility -->
<a id="schemascheduledupdategroupaction"></a>
<a id="schema_ScheduledUpdateGroupAction"></a>
<a id="tocSscheduledupdategroupaction"></a>
<a id="tocsscheduledupdategroupaction"></a>

```json
{
  "AutoScalingGroupName": {},
  "ScheduledActionName": {},
  "ScheduledActionARN": {},
  "Time": {},
  "StartTime": {},
  "EndTime": {},
  "Recurrence": {},
  "MinSize": {},
  "MaxSize": {},
  "DesiredCapacity": {},
  "TimeZone": {}
}
```

Describes a scheduled scaling action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingGroupName|object|false|none|none|
|ScheduledActionName|object|false|none|none|
|ScheduledActionARN|object|false|none|none|
|Time|object|false|none|none|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|
|Recurrence|object|false|none|none|
|MinSize|object|false|none|none|
|MaxSize|object|false|none|none|
|DesiredCapacity|object|false|none|none|
|TimeZone|object|false|none|none|

<h2 id="tocS_SetDesiredCapacityType">SetDesiredCapacityType</h2>
<!-- backwards compatibility -->
<a id="schemasetdesiredcapacitytype"></a>
<a id="schema_SetDesiredCapacityType"></a>
<a id="tocSsetdesiredcapacitytype"></a>
<a id="tocssetdesiredcapacitytype"></a>

```json
{
  "AutoScalingGroupName": {},
  "DesiredCapacity": {},
  "HonorCooldown": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingGroupName|object|true|none|none|
|DesiredCapacity|object|true|none|none|
|HonorCooldown|object|false|none|none|

<h2 id="tocS_ShouldRespectGracePeriod">ShouldRespectGracePeriod</h2>
<!-- backwards compatibility -->
<a id="schemashouldrespectgraceperiod"></a>
<a id="schema_ShouldRespectGracePeriod"></a>
<a id="tocSshouldrespectgraceperiod"></a>
<a id="tocsshouldrespectgraceperiod"></a>

```json
true
```

<h2 id="tocS_SetInstanceHealthQuery">SetInstanceHealthQuery</h2>
<!-- backwards compatibility -->
<a id="schemasetinstancehealthquery"></a>
<a id="schema_SetInstanceHealthQuery"></a>
<a id="tocSsetinstancehealthquery"></a>
<a id="tocssetinstancehealthquery"></a>

```json
{
  "InstanceId": {},
  "HealthStatus": {},
  "ShouldRespectGracePeriod": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|true|none|none|
|HealthStatus|object|true|none|none|
|ShouldRespectGracePeriod|object|false|none|none|

<h2 id="tocS_SetInstanceProtectionQuery">SetInstanceProtectionQuery</h2>
<!-- backwards compatibility -->
<a id="schemasetinstanceprotectionquery"></a>
<a id="schema_SetInstanceProtectionQuery"></a>
<a id="tocSsetinstanceprotectionquery"></a>
<a id="tocssetinstanceprotectionquery"></a>

```json
{
  "InstanceIds": {},
  "AutoScalingGroupName": {},
  "ProtectedFromScaleIn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceIds|object|true|none|none|
|AutoScalingGroupName|object|true|none|none|
|ProtectedFromScaleIn|object|true|none|none|

<h2 id="tocS_StartInstanceRefreshType">StartInstanceRefreshType</h2>
<!-- backwards compatibility -->
<a id="schemastartinstancerefreshtype"></a>
<a id="schema_StartInstanceRefreshType"></a>
<a id="tocSstartinstancerefreshtype"></a>
<a id="tocsstartinstancerefreshtype"></a>

```json
{
  "AutoScalingGroupName": {},
  "Strategy": {},
  "DesiredConfiguration": {
    "LaunchTemplate": {
      "LaunchTemplateId": {},
      "LaunchTemplateName": {},
      "Version": {}
    },
    "MixedInstancesPolicy": {
      "LaunchTemplate": {
        "LaunchTemplateSpecification": {
          "LaunchTemplateId": {},
          "LaunchTemplateName": {},
          "Version": {}
        },
        "Overrides": {}
      },
      "InstancesDistribution": {
        "OnDemandAllocationStrategy": {},
        "OnDemandBaseCapacity": {},
        "OnDemandPercentageAboveBaseCapacity": {},
        "SpotAllocationStrategy": {},
        "SpotInstancePools": {},
        "SpotMaxPrice": {}
      }
    }
  },
  "Preferences": {
    "MinHealthyPercentage": {},
    "InstanceWarmup": {},
    "CheckpointPercentages": {},
    "CheckpointDelay": {},
    "SkipMatching": {},
    "AutoRollback": {},
    "ScaleInProtectedInstances": {},
    "StandbyInstances": {},
    "AlarmSpecification": {
      "Alarms": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingGroupName|object|true|none|none|
|Strategy|object|false|none|none|
|DesiredConfiguration|object|false|none|none|
|Preferences|object|false|none|none|

<h2 id="tocS_SuspendedProcess">SuspendedProcess</h2>
<!-- backwards compatibility -->
<a id="schemasuspendedprocess"></a>
<a id="schema_SuspendedProcess"></a>
<a id="tocSsuspendedprocess"></a>
<a id="tocssuspendedprocess"></a>

```json
{
  "ProcessName": {},
  "SuspensionReason": {}
}
```

<p>Describes an auto scaling process that has been suspended.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html#process-types">Scaling processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProcessName|object|false|none|none|
|SuspensionReason|object|false|none|none|

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

<h2 id="tocS_TagDescription">TagDescription</h2>
<!-- backwards compatibility -->
<a id="schematagdescription"></a>
<a id="schema_TagDescription"></a>
<a id="tocStagdescription"></a>
<a id="tocstagdescription"></a>

```json
{
  "ResourceId": {},
  "ResourceType": {},
  "Key": {},
  "Value": {},
  "PropagateAtLaunch": {}
}
```

Describes a tag for an Auto Scaling group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|false|none|none|
|ResourceType|object|false|none|none|
|Key|object|false|none|none|
|Value|object|false|none|none|
|PropagateAtLaunch|object|false|none|none|

<h2 id="tocS_TargetTrackingMetricDataQuery">TargetTrackingMetricDataQuery</h2>
<!-- backwards compatibility -->
<a id="schematargettrackingmetricdataquery"></a>
<a id="schema_TargetTrackingMetricDataQuery"></a>
<a id="tocStargettrackingmetricdataquery"></a>
<a id="tocstargettrackingmetricdataquery"></a>

```json
{
  "Id": {},
  "Expression": {},
  "MetricStat": {
    "Metric": {
      "Namespace": {},
      "MetricName": {},
      "Dimensions": {}
    },
    "Stat": {},
    "Unit": {}
  },
  "Label": {},
  "ReturnData": {}
}
```

The metric data to return. Also defines whether this call is returning data for one metric only, or whether it is performing a math expression on the values of returned metric statistics to create a new time series. A time series is a series of data points, each of which is associated with a timestamp.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|Expression|object|false|none|none|
|MetricStat|object|false|none|none|
|Label|object|false|none|none|
|ReturnData|object|false|none|none|

<h2 id="tocS_TargetTrackingMetricStat">TargetTrackingMetricStat</h2>
<!-- backwards compatibility -->
<a id="schematargettrackingmetricstat"></a>
<a id="schema_TargetTrackingMetricStat"></a>
<a id="tocStargettrackingmetricstat"></a>
<a id="tocstargettrackingmetricstat"></a>

```json
{
  "Metric": {
    "Namespace": {},
    "MetricName": {},
    "Dimensions": {}
  },
  "Stat": {},
  "Unit": {}
}
```

<p>This structure defines the CloudWatch metric to return, along with the statistic and unit.</p> <p>For more information about the CloudWatch terminology below, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch concepts</a> in the <i>Amazon CloudWatch User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Metric|object|true|none|none|
|Stat|object|true|none|none|
|Unit|object|false|none|none|

<h2 id="tocS_TerminateInstanceInAutoScalingGroupType">TerminateInstanceInAutoScalingGroupType</h2>
<!-- backwards compatibility -->
<a id="schematerminateinstanceinautoscalinggrouptype"></a>
<a id="schema_TerminateInstanceInAutoScalingGroupType"></a>
<a id="tocSterminateinstanceinautoscalinggrouptype"></a>
<a id="tocsterminateinstanceinautoscalinggrouptype"></a>

```json
{
  "InstanceId": {},
  "ShouldDecrementDesiredCapacity": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|true|none|none|
|ShouldDecrementDesiredCapacity|object|true|none|none|

<h2 id="tocS_TrafficSourceState">TrafficSourceState</h2>
<!-- backwards compatibility -->
<a id="schematrafficsourcestate"></a>
<a id="schema_TrafficSourceState"></a>
<a id="tocStrafficsourcestate"></a>
<a id="tocstrafficsourcestate"></a>

```json
{
  "TrafficSource": {},
  "State": {},
  "Identifier": {},
  "Type": {}
}
```

Describes the state of a traffic source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TrafficSource|object|false|none|none|
|State|object|false|none|none|
|Identifier|object|false|none|none|
|Type|object|false|none|none|

<h2 id="tocS_UpdateAutoScalingGroupType">UpdateAutoScalingGroupType</h2>
<!-- backwards compatibility -->
<a id="schemaupdateautoscalinggrouptype"></a>
<a id="schema_UpdateAutoScalingGroupType"></a>
<a id="tocSupdateautoscalinggrouptype"></a>
<a id="tocsupdateautoscalinggrouptype"></a>

```json
{
  "AutoScalingGroupName": {},
  "LaunchConfigurationName": {},
  "LaunchTemplate": {
    "LaunchTemplateId": {},
    "LaunchTemplateName": {},
    "Version": {}
  },
  "MixedInstancesPolicy": {
    "LaunchTemplate": {
      "LaunchTemplateSpecification": {
        "LaunchTemplateId": {},
        "LaunchTemplateName": {},
        "Version": {}
      },
      "Overrides": {}
    },
    "InstancesDistribution": {
      "OnDemandAllocationStrategy": {},
      "OnDemandBaseCapacity": {},
      "OnDemandPercentageAboveBaseCapacity": {},
      "SpotAllocationStrategy": {},
      "SpotInstancePools": {},
      "SpotMaxPrice": {}
    }
  },
  "MinSize": {},
  "MaxSize": {},
  "DesiredCapacity": {},
  "DefaultCooldown": {},
  "AvailabilityZones": {},
  "HealthCheckType": {},
  "HealthCheckGracePeriod": {},
  "PlacementGroup": {},
  "VPCZoneIdentifier": {},
  "TerminationPolicies": {},
  "NewInstancesProtectedFromScaleIn": {},
  "ServiceLinkedRoleARN": {},
  "MaxInstanceLifetime": {},
  "CapacityRebalance": {},
  "Context": {},
  "DesiredCapacityType": {},
  "DefaultInstanceWarmup": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingGroupName|object|true|none|none|
|LaunchConfigurationName|object|false|none|none|
|LaunchTemplate|object|false|none|none|
|MixedInstancesPolicy|object|false|none|none|
|MinSize|object|false|none|none|
|MaxSize|object|false|none|none|
|DesiredCapacity|object|false|none|none|
|DefaultCooldown|object|false|none|none|
|AvailabilityZones|object|false|none|none|
|HealthCheckType|object|false|none|none|
|HealthCheckGracePeriod|object|false|none|none|
|PlacementGroup|object|false|none|none|
|VPCZoneIdentifier|object|false|none|none|
|TerminationPolicies|object|false|none|none|
|NewInstancesProtectedFromScaleIn|object|false|none|none|
|ServiceLinkedRoleARN|object|false|none|none|
|MaxInstanceLifetime|object|false|none|none|
|CapacityRebalance|object|false|none|none|
|Context|object|false|none|none|
|DesiredCapacityType|object|false|none|none|
|DefaultInstanceWarmup|object|false|none|none|

<h2 id="tocS_WarmPoolStatus">WarmPoolStatus</h2>
<!-- backwards compatibility -->
<a id="schemawarmpoolstatus"></a>
<a id="schema_WarmPoolStatus"></a>
<a id="tocSwarmpoolstatus"></a>
<a id="tocswarmpoolstatus"></a>

```json
"PendingDelete"
```
