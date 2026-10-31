<h1 id="elastic-load-balancing">Elastic Load Balancing v2012-06-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Elastic Load Balancing</fullname> <p>A load balancer can distribute incoming traffic across your EC2 instances. This enables you to increase the availability of your application. The load balancer also monitors the health of its registered instances and ensures that it routes traffic only to healthy instances. You configure your load balancer to accept incoming traffic by specifying one or more listeners, which are configured with a protocol and port number for connections from clients to the load balancer and a protocol and port number for connections from the load balancer to the instances.</p> <p>Elastic Load Balancing supports three types of load balancers: Application Load Balancers, Network Load Balancers, and Classic Load Balancers. You can select a load balancer based on your application needs. For more information, see the <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/">Elastic Load Balancing User Guide</a>.</p> <p>This reference covers the 2012-06-01 API, which supports Classic Load Balancers. The 2015-12-01 API supports Application Load Balancers and Network Load Balancers.</p> <p>To get started, create a load balancer with one or more listeners using <a>CreateLoadBalancer</a>. Register your instances with the load balancer using <a>RegisterInstancesWithLoadBalancer</a>.</p> <p>All Elastic Load Balancing operations are <i>idempotent</i>, which means that they complete at most one time. If you repeat an operation, it succeeds with a 200 OK response code.</p>

Base URLs:

* <a href="http://elasticloadbalancing.us-east-1.amazonaws.com">http://elasticloadbalancing.us-east-1.amazonaws.com</a> - The Elastic Load Balancing multi-region endpoint

* <a href="https://elasticloadbalancing.us-east-1.amazonaws.com">https://elasticloadbalancing.us-east-1.amazonaws.com</a> - The Elastic Load Balancing multi-region endpoint

* <a href="http://elasticloadbalancing.amazonaws.com">http://elasticloadbalancing.amazonaws.com</a> - The general Elastic Load Balancing endpoint for US East (N. Virginia)

* <a href="https://elasticloadbalancing.amazonaws.com">https://elasticloadbalancing.amazonaws.com</a> - The general Elastic Load Balancing endpoint for US East (N. Virginia)

* <a href="http://elasticloadbalancing.cn-north-1.amazonaws.com.cn">http://elasticloadbalancing.cn-north-1.amazonaws.com.cn</a> - The Elastic Load Balancing endpoint for China (Beijing) and China (Ningxia)

* <a href="https://elasticloadbalancing.cn-north-1.amazonaws.com.cn">https://elasticloadbalancing.cn-north-1.amazonaws.com.cn</a> - The Elastic Load Balancing endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/elasticloadbalancing/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="elastic-load-balancing-default">Default</h1>

## GET_AddTags

<a id="opIdGET_AddTags"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=AddTags?LoadBalancerNames=string&Tags=%7B%22Key%22%3A%7B%7D%2C%22Value%22%3A%7B%7D%7D&Action=AddTags&Version=2012-06-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=AddTags`

<p>Adds the specified tags to the specified load balancer. Each load balancer can have a maximum of 10 tags.</p> <p>Each tag consists of a key and an optional value. If a tag with the same key is already associated with the load balancer, <code>AddTags</code> updates its value.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/add-remove-tags.html">Tag Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>

<h3 id="getaddtags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LoadBalancerNames|query|[[AccessPointName](#schemaaccesspointname)]|true|The name of the load balancer. You can specify one load balancer only.|
|Tags|query|[[Tag](#schematag)]|true|The tags.|
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
|Action|AddTags|
|Version|2012-06-01|

<h3 id="getaddtags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AddTagsOutput](#schemaaddtagsoutput)|
|480|480|AccessPointNotFoundException|[AccessPointNotFoundException](#schemaaccesspointnotfoundexception)|
|481|481|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|482|482|DuplicateTagKeysException|[DuplicateTagKeysException](#schemaduplicatetagkeysexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_AddTags

<a id="opIdPOST_AddTags"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=AddTags?Action=AddTags&Version=2012-06-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"LoadBalancerNames":{},"Tags":{}}'
```

`POST /#Action=AddTags`

<p>Adds the specified tags to the specified load balancer. Each load balancer can have a maximum of 10 tags.</p> <p>Each tag consists of a key and an optional value. If a tag with the same key is already associated with the load balancer, <code>AddTags</code> updates its value.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/add-remove-tags.html">Tag Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>

> Body parameter

```json
{
  "LoadBalancerNames": {},
  "Tags": {}
}
```

<h3 id="postaddtags-parameters">Parameters</h3>

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
|body|body|[AddTagsInput](#schemaaddtagsinput)|false|none|
|» LoadBalancerNames|body|object|true|none|
|» Tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|AddTags|
|Version|2012-06-01|

<h3 id="postaddtags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AddTagsOutput](#schemaaddtagsoutput)|
|480|480|AccessPointNotFoundException|[AccessPointNotFoundException](#schemaaccesspointnotfoundexception)|
|481|481|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|482|482|DuplicateTagKeysException|[DuplicateTagKeysException](#schemaduplicatetagkeysexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ApplySecurityGroupsToLoadBalancer

<a id="opIdGET_ApplySecurityGroupsToLoadBalancer"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=ApplySecurityGroupsToLoadBalancer?LoadBalancerName=string&SecurityGroups=string&Action=ApplySecurityGroupsToLoadBalancer&Version=2012-06-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ApplySecurityGroupsToLoadBalancer`

<p>Associates one or more security groups with your load balancer in a virtual private cloud (VPC). The specified security groups override the previously associated security groups.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-security-groups.html#elb-vpc-security-groups">Security Groups for Load Balancers in a VPC</a> in the <i>Classic Load Balancers Guide</i>.</p>

<h3 id="getapplysecuritygroupstoloadbalancer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LoadBalancerName|query|string|true|The name of the load balancer.|
|SecurityGroups|query|[[SecurityGroupId](#schemasecuritygroupid)]|true|The IDs of the security groups to associate with the load balancer. Note that you cannot specify the name of the security group.|
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
|Action|ApplySecurityGroupsToLoadBalancer|
|Version|2012-06-01|

<h3 id="getapplysecuritygroupstoloadbalancer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ApplySecurityGroupsToLoadBalancerOutput](#schemaapplysecuritygroupstoloadbalanceroutput)|
|480|480|AccessPointNotFoundException|[AccessPointNotFoundException](#schemaaccesspointnotfoundexception)|
|481|481|InvalidConfigurationRequestException|[InvalidConfigurationRequestException](#schemainvalidconfigurationrequestexception)|
|482|482|InvalidSecurityGroupException|[InvalidSecurityGroupException](#schemainvalidsecuritygroupexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ApplySecurityGroupsToLoadBalancer

<a id="opIdPOST_ApplySecurityGroupsToLoadBalancer"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=ApplySecurityGroupsToLoadBalancer?Action=ApplySecurityGroupsToLoadBalancer&Version=2012-06-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"LoadBalancerName":{},"SecurityGroups":{}}'
```

`POST /#Action=ApplySecurityGroupsToLoadBalancer`

<p>Associates one or more security groups with your load balancer in a virtual private cloud (VPC). The specified security groups override the previously associated security groups.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-security-groups.html#elb-vpc-security-groups">Security Groups for Load Balancers in a VPC</a> in the <i>Classic Load Balancers Guide</i>.</p>

> Body parameter

```json
{
  "LoadBalancerName": {},
  "SecurityGroups": {}
}
```

<h3 id="postapplysecuritygroupstoloadbalancer-parameters">Parameters</h3>

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
|body|body|[ApplySecurityGroupsToLoadBalancerInput](#schemaapplysecuritygroupstoloadbalancerinput)|false|none|
|» LoadBalancerName|body|object|true|none|
|» SecurityGroups|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ApplySecurityGroupsToLoadBalancer|
|Version|2012-06-01|

<h3 id="postapplysecuritygroupstoloadbalancer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ApplySecurityGroupsToLoadBalancerOutput](#schemaapplysecuritygroupstoloadbalanceroutput)|
|480|480|AccessPointNotFoundException|[AccessPointNotFoundException](#schemaaccesspointnotfoundexception)|
|481|481|InvalidConfigurationRequestException|[InvalidConfigurationRequestException](#schemainvalidconfigurationrequestexception)|
|482|482|InvalidSecurityGroupException|[InvalidSecurityGroupException](#schemainvalidsecuritygroupexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_AttachLoadBalancerToSubnets

<a id="opIdGET_AttachLoadBalancerToSubnets"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=AttachLoadBalancerToSubnets?LoadBalancerName=string&Subnets=string&Action=AttachLoadBalancerToSubnets&Version=2012-06-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=AttachLoadBalancerToSubnets`

<p>Adds one or more subnets to the set of configured subnets for the specified load balancer.</p> <p>The load balancer evenly distributes requests across all registered subnets. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-manage-subnets.html">Add or Remove Subnets for Your Load Balancer in a VPC</a> in the <i>Classic Load Balancers Guide</i>.</p>

<h3 id="getattachloadbalancertosubnets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LoadBalancerName|query|string|true|The name of the load balancer.|
|Subnets|query|[[SubnetId](#schemasubnetid)]|true|The IDs of the subnets to add. You can add only one subnet per Availability Zone.|
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
|Action|AttachLoadBalancerToSubnets|
|Version|2012-06-01|

<h3 id="getattachloadbalancertosubnets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AttachLoadBalancerToSubnetsOutput](#schemaattachloadbalancertosubnetsoutput)|
|480|480|AccessPointNotFoundException|[AccessPointNotFoundException](#schemaaccesspointnotfoundexception)|
|481|481|InvalidConfigurationRequestException|[InvalidConfigurationRequestException](#schemainvalidconfigurationrequestexception)|
|482|482|SubnetNotFoundException|[SubnetNotFoundException](#schemasubnetnotfoundexception)|
|483|483|InvalidSubnetException|[InvalidSubnetException](#schemainvalidsubnetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_AttachLoadBalancerToSubnets

<a id="opIdPOST_AttachLoadBalancerToSubnets"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=AttachLoadBalancerToSubnets?Action=AttachLoadBalancerToSubnets&Version=2012-06-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"LoadBalancerName":{},"Subnets":{}}'
```

`POST /#Action=AttachLoadBalancerToSubnets`

<p>Adds one or more subnets to the set of configured subnets for the specified load balancer.</p> <p>The load balancer evenly distributes requests across all registered subnets. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-manage-subnets.html">Add or Remove Subnets for Your Load Balancer in a VPC</a> in the <i>Classic Load Balancers Guide</i>.</p>

> Body parameter

```json
{
  "LoadBalancerName": {},
  "Subnets": {}
}
```

<h3 id="postattachloadbalancertosubnets-parameters">Parameters</h3>

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
|body|body|[AttachLoadBalancerToSubnetsInput](#schemaattachloadbalancertosubnetsinput)|false|none|
|» LoadBalancerName|body|object|true|none|
|» Subnets|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|AttachLoadBalancerToSubnets|
|Version|2012-06-01|

<h3 id="postattachloadbalancertosubnets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AttachLoadBalancerToSubnetsOutput](#schemaattachloadbalancertosubnetsoutput)|
|480|480|AccessPointNotFoundException|[AccessPointNotFoundException](#schemaaccesspointnotfoundexception)|
|481|481|InvalidConfigurationRequestException|[InvalidConfigurationRequestException](#schemainvalidconfigurationrequestexception)|
|482|482|SubnetNotFoundException|[SubnetNotFoundException](#schemasubnetnotfoundexception)|
|483|483|InvalidSubnetException|[InvalidSubnetException](#schemainvalidsubnetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ConfigureHealthCheck

<a id="opIdGET_ConfigureHealthCheck"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=ConfigureHealthCheck?LoadBalancerName=string&Target=%7B%7D&Interval=%7B%7D&Timeout=%7B%7D&UnhealthyThreshold=%7B%7D&HealthyThreshold=%7B%7D&Action=ConfigureHealthCheck&Version=2012-06-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ConfigureHealthCheck`

<p>Specifies the health check settings to use when evaluating the health state of your EC2 instances.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-healthchecks.html">Configure Health Checks for Your Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>

<h3 id="getconfigurehealthcheck-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LoadBalancerName|query|string|true|The name of the load balancer.|
|HealthCheck|query|object|true|The configuration information.|
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
|Action|ConfigureHealthCheck|
|Version|2012-06-01|

<h3 id="getconfigurehealthcheck-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ConfigureHealthCheckOutput](#schemaconfigurehealthcheckoutput)|
|480|480|AccessPointNotFoundException|[AccessPointNotFoundException](#schemaaccesspointnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ConfigureHealthCheck

<a id="opIdPOST_ConfigureHealthCheck"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=ConfigureHealthCheck?Action=ConfigureHealthCheck&Version=2012-06-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"LoadBalancerName":{},"HealthCheck":{"Target":{},"Interval":{},"Timeout":{},"UnhealthyThreshold":{},"HealthyThreshold":{}}}'
```

`POST /#Action=ConfigureHealthCheck`

<p>Specifies the health check settings to use when evaluating the health state of your EC2 instances.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-healthchecks.html">Configure Health Checks for Your Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>

> Body parameter

```json
{
  "LoadBalancerName": {},
  "HealthCheck": {
    "Target": {},
    "Interval": {},
    "Timeout": {},
    "UnhealthyThreshold": {},
    "HealthyThreshold": {}
  }
}
```

<h3 id="postconfigurehealthcheck-parameters">Parameters</h3>

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
|body|body|[ConfigureHealthCheckInput](#schemaconfigurehealthcheckinput)|false|none|
|» LoadBalancerName|body|object|true|none|
|» HealthCheck|body|object|true|none|
|» » Target|body|object|true|none|
|» » Interval|body|object|true|none|
|» » Timeout|body|object|true|none|
|» » UnhealthyThreshold|body|object|true|none|
|» » HealthyThreshold|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ConfigureHealthCheck|
|Version|2012-06-01|

<h3 id="postconfigurehealthcheck-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ConfigureHealthCheckOutput](#schemaconfigurehealthcheckoutput)|
|480|480|AccessPointNotFoundException|[AccessPointNotFoundException](#schemaaccesspointnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateAppCookieStickinessPolicy

<a id="opIdGET_CreateAppCookieStickinessPolicy"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=CreateAppCookieStickinessPolicy?LoadBalancerName=string&PolicyName=string&CookieName=string&Action=CreateAppCookieStickinessPolicy&Version=2012-06-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateAppCookieStickinessPolicy`

<p>Generates a stickiness policy with sticky session lifetimes that follow that of an application-generated cookie. This policy can be associated only with HTTP/HTTPS listeners.</p> <p>This policy is similar to the policy created by <a>CreateLBCookieStickinessPolicy</a>, except that the lifetime of the special Elastic Load Balancing cookie, <code>AWSELB</code>, follows the lifetime of the application-generated cookie specified in the policy configuration. The load balancer only inserts a new stickiness cookie when the application response includes a new application cookie.</p> <p>If the application cookie is explicitly removed or expires, the session stops being sticky until a new application cookie is issued.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-application">Application-Controlled Session Stickiness</a> in the <i>Classic Load Balancers Guide</i>.</p>

<h3 id="getcreateappcookiestickinesspolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LoadBalancerName|query|string|true|The name of the load balancer.|
|PolicyName|query|string|true|The name of the policy being created. Policy names must consist of alphanumeric characters and dashes (-). This name must be unique within the set of policies for this load balancer.|
|CookieName|query|string|true|The name of the application cookie used for stickiness.|
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
|Action|CreateAppCookieStickinessPolicy|
|Version|2012-06-01|

<h3 id="getcreateappcookiestickinesspolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateAppCookieStickinessPolicyOutput](#schemacreateappcookiestickinesspolicyoutput)|
|480|480|AccessPointNotFoundException|[AccessPointNotFoundException](#schemaaccesspointnotfoundexception)|
|481|481|DuplicatePolicyNameException|[DuplicatePolicyNameException](#schemaduplicatepolicynameexception)|
|482|482|TooManyPoliciesException|[TooManyPoliciesException](#schematoomanypoliciesexception)|
|483|483|InvalidConfigurationRequestException|[InvalidConfigurationRequestException](#schemainvalidconfigurationrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateAppCookieStickinessPolicy

<a id="opIdPOST_CreateAppCookieStickinessPolicy"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=CreateAppCookieStickinessPolicy?Action=CreateAppCookieStickinessPolicy&Version=2012-06-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"LoadBalancerName":{},"PolicyName":{},"CookieName":{}}'
```

`POST /#Action=CreateAppCookieStickinessPolicy`

<p>Generates a stickiness policy with sticky session lifetimes that follow that of an application-generated cookie. This policy can be associated only with HTTP/HTTPS listeners.</p> <p>This policy is similar to the policy created by <a>CreateLBCookieStickinessPolicy</a>, except that the lifetime of the special Elastic Load Balancing cookie, <code>AWSELB</code>, follows the lifetime of the application-generated cookie specified in the policy configuration. The load balancer only inserts a new stickiness cookie when the application response includes a new application cookie.</p> <p>If the application cookie is explicitly removed or expires, the session stops being sticky until a new application cookie is issued.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-application">Application-Controlled Session Stickiness</a> in the <i>Classic Load Balancers Guide</i>.</p>

> Body parameter

```json
{
  "LoadBalancerName": {},
  "PolicyName": {},
  "CookieName": {}
}
```

<h3 id="postcreateappcookiestickinesspolicy-parameters">Parameters</h3>

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
|body|body|[CreateAppCookieStickinessPolicyInput](#schemacreateappcookiestickinesspolicyinput)|false|none|
|» LoadBalancerName|body|object|true|none|
|» PolicyName|body|object|true|none|
|» CookieName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateAppCookieStickinessPolicy|
|Version|2012-06-01|

<h3 id="postcreateappcookiestickinesspolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateAppCookieStickinessPolicyOutput](#schemacreateappcookiestickinesspolicyoutput)|
|480|480|AccessPointNotFoundException|[AccessPointNotFoundException](#schemaaccesspointnotfoundexception)|
|481|481|DuplicatePolicyNameException|[DuplicatePolicyNameException](#schemaduplicatepolicynameexception)|
|482|482|TooManyPoliciesException|[TooManyPoliciesException](#schematoomanypoliciesexception)|
|483|483|InvalidConfigurationRequestException|[InvalidConfigurationRequestException](#schemainvalidconfigurationrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateLBCookieStickinessPolicy

<a id="opIdGET_CreateLBCookieStickinessPolicy"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=CreateLBCookieStickinessPolicy?LoadBalancerName=string&PolicyName=string&Action=CreateLBCookieStickinessPolicy&Version=2012-06-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateLBCookieStickinessPolicy`

<p>Generates a stickiness policy with sticky session lifetimes controlled by the lifetime of the browser (user-agent) or a specified expiration period. This policy can be associated only with HTTP/HTTPS listeners.</p> <p>When a load balancer implements this policy, the load balancer uses a special cookie to track the instance for each request. When the load balancer receives a request, it first checks to see if this cookie is present in the request. If so, the load balancer sends the request to the application server specified in the cookie. If not, the load balancer sends the request to a server that is chosen based on the existing load-balancing algorithm.</p> <p>A cookie is inserted into the response for binding subsequent requests from the same user to that server. The validity of the cookie is based on the cookie expiration time, which is specified in the policy configuration.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-duration">Duration-Based Session Stickiness</a> in the <i>Classic Load Balancers Guide</i>.</p>

<h3 id="getcreatelbcookiestickinesspolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LoadBalancerName|query|string|true|The name of the load balancer.|
|PolicyName|query|string|true|The name of the policy being created. Policy names must consist of alphanumeric characters and dashes (-). This name must be unique within the set of policies for this load balancer.|
|CookieExpirationPeriod|query|integer|false|The time period, in seconds, after which the cookie should be considered stale. If you do not specify this parameter, the default value is 0, which indicates that the sticky session should last for the duration of the browser session.|
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
|Action|CreateLBCookieStickinessPolicy|
|Version|2012-06-01|

<h3 id="getcreatelbcookiestickinesspolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateLBCookieStickinessPolicyOutput](#schemacreatelbcookiestickinesspolicyoutput)|
|480|480|AccessPointNotFoundException|[AccessPointNotFoundException](#schemaaccesspointnotfoundexception)|
|481|481|DuplicatePolicyNameException|[DuplicatePolicyNameException](#schemaduplicatepolicynameexception)|
|482|482|TooManyPoliciesException|[TooManyPoliciesException](#schematoomanypoliciesexception)|
|483|483|InvalidConfigurationRequestException|[InvalidConfigurationRequestException](#schemainvalidconfigurationrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateLBCookieStickinessPolicy

<a id="opIdPOST_CreateLBCookieStickinessPolicy"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=CreateLBCookieStickinessPolicy?Action=CreateLBCookieStickinessPolicy&Version=2012-06-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"LoadBalancerName":{},"PolicyName":{},"CookieExpirationPeriod":{}}'
```

`POST /#Action=CreateLBCookieStickinessPolicy`

<p>Generates a stickiness policy with sticky session lifetimes controlled by the lifetime of the browser (user-agent) or a specified expiration period. This policy can be associated only with HTTP/HTTPS listeners.</p> <p>When a load balancer implements this policy, the load balancer uses a special cookie to track the instance for each request. When the load balancer receives a request, it first checks to see if this cookie is present in the request. If so, the load balancer sends the request to the application server specified in the cookie. If not, the load balancer sends the request to a server that is chosen based on the existing load-balancing algorithm.</p> <p>A cookie is inserted into the response for binding subsequent requests from the same user to that server. The validity of the cookie is based on the cookie expiration time, which is specified in the policy configuration.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-duration">Duration-Based Session Stickiness</a> in the <i>Classic Load Balancers Guide</i>.</p>

> Body parameter

```json
{
  "LoadBalancerName": {},
  "PolicyName": {},
  "CookieExpirationPeriod": {}
}
```

<h3 id="postcreatelbcookiestickinesspolicy-parameters">Parameters</h3>

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
|body|body|[CreateLBCookieStickinessPolicyInput](#schemacreatelbcookiestickinesspolicyinput)|false|none|
|» LoadBalancerName|body|object|true|none|
|» PolicyName|body|object|true|none|
|» CookieExpirationPeriod|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateLBCookieStickinessPolicy|
|Version|2012-06-01|

<h3 id="postcreatelbcookiestickinesspolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateLBCookieStickinessPolicyOutput](#schemacreatelbcookiestickinesspolicyoutput)|
|480|480|AccessPointNotFoundException|[AccessPointNotFoundException](#schemaaccesspointnotfoundexception)|
|481|481|DuplicatePolicyNameException|[DuplicatePolicyNameException](#schemaduplicatepolicynameexception)|
|482|482|TooManyPoliciesException|[TooManyPoliciesException](#schematoomanypoliciesexception)|
|483|483|InvalidConfigurationRequestException|[InvalidConfigurationRequestException](#schemainvalidconfigurationrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateLoadBalancer

<a id="opIdGET_CreateLoadBalancer"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=CreateLoadBalancer?LoadBalancerName=string&Listeners=%7B%22Protocol%22%3A%7B%7D%2C%22LoadBalancerPort%22%3A%7B%7D%2C%22InstanceProtocol%22%3A%7B%7D%2C%22InstancePort%22%3A%7B%7D%2C%22SSLCertificateId%22%3A%7B%7D%7D&Action=CreateLoadBalancer&Version=2012-06-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateLoadBalancer`

<p>Creates a Classic Load Balancer.</p> <p>You can add listeners, security groups, subnets, and tags when you create your load balancer, or you can add them later using <a>CreateLoadBalancerListeners</a>, <a>ApplySecurityGroupsToLoadBalancer</a>, <a>AttachLoadBalancerToSubnets</a>, and <a>AddTags</a>.</p> <p>To describe your current load balancers, see <a>DescribeLoadBalancers</a>. When you are finished with a load balancer, you can delete it using <a>DeleteLoadBalancer</a>.</p> <p>You can create up to 20 load balancers per region per account. You can request an increase for the number of load balancers for your account. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-limits.html">Limits for Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>

<h3 id="getcreateloadbalancer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LoadBalancerName|query|string|true|<p>The name of the load balancer.</p> <p>This name must be unique within your set of load balancers for the region, must have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, and cannot begin or end with a hyphen.</p>|
|Listeners|query|[[Listener](#schemalistener)]|true|<p>The listeners.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html">Listeners for Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>|
|AvailabilityZones|query|[[AvailabilityZone](#schemaavailabilityzone)]|false|<p>One or more Availability Zones from the same region as the load balancer.</p> <p>You must specify at least one Availability Zone.</p> <p>You can add more Availability Zones after you create the load balancer using <a>EnableAvailabilityZonesForLoadBalancer</a>.</p>|
|Subnets|query|[[SubnetId](#schemasubnetid)]|false|The IDs of the subnets in your VPC to attach to the load balancer. Specify one subnet per Availability Zone specified in <code>AvailabilityZones</code>.|
|SecurityGroups|query|[[SecurityGroupId](#schemasecuritygroupid)]|false|The IDs of the security groups to assign to the load balancer.|
|Scheme|query|string|false|<p>The type of a load balancer. Valid only for load balancers in a VPC.</p> <p>By default, Elastic Load Balancing creates an Internet-facing load balancer with a DNS name that resolves to public IP addresses. For more information about Internet-facing and Internal load balancers, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/how-elastic-load-balancing-works.html#load-balancer-scheme">Load Balancer Scheme</a> in the <i>Elastic Load Balancing User Guide</i>.</p> <p>Specify <code>internal</code> to create a load balancer with a DNS name that resolves to private IP addresses.</p>|
|Tags|query|[[Tag](#schematag)]|false|<p>A list of tags to assign to the load balancer.</p> <p>For more information about tagging your load balancer, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/add-remove-tags.html">Tag Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>|
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
|Action|CreateLoadBalancer|
|Version|2012-06-01|

<h3 id="getcreateloadbalancer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateAccessPointOutput](#schemacreateaccesspointoutput)|
|480|480|DuplicateAccessPointNameException|[DuplicateAccessPointNameException](#schemaduplicateaccesspointnameexception)|
|481|481|TooManyAccessPointsException|[TooManyAccessPointsException](#schematoomanyaccesspointsexception)|
|482|482|CertificateNotFoundException|[CertificateNotFoundException](#schemacertificatenotfoundexception)|
|483|483|InvalidConfigurationRequestException|[InvalidConfigurationRequestException](#schemainvalidconfigurationrequestexception)|
|484|484|SubnetNotFoundException|[SubnetNotFoundException](#schemasubnetnotfoundexception)|
|485|485|InvalidSubnetException|[InvalidSubnetException](#schemainvalidsubnetexception)|
|486|486|InvalidSecurityGroupException|[InvalidSecurityGroupException](#schemainvalidsecuritygroupexception)|
|487|487|InvalidSchemeException|[InvalidSchemeException](#schemainvalidschemeexception)|
|488|488|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|489|489|DuplicateTagKeysException|[DuplicateTagKeysException](#schemaduplicatetagkeysexception)|
|490|490|UnsupportedProtocolException|[UnsupportedProtocolException](#schemaunsupportedprotocolexception)|
|491|491|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateLoadBalancer

<a id="opIdPOST_CreateLoadBalancer"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=CreateLoadBalancer?Action=CreateLoadBalancer&Version=2012-06-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"LoadBalancerName":{},"Listeners":{},"AvailabilityZones":{},"Subnets":{},"SecurityGroups":{},"Scheme":{},"Tags":{}}'
```

`POST /#Action=CreateLoadBalancer`

<p>Creates a Classic Load Balancer.</p> <p>You can add listeners, security groups, subnets, and tags when you create your load balancer, or you can add them later using <a>CreateLoadBalancerListeners</a>, <a>ApplySecurityGroupsToLoadBalancer</a>, <a>AttachLoadBalancerToSubnets</a>, and <a>AddTags</a>.</p> <p>To describe your current load balancers, see <a>DescribeLoadBalancers</a>. When you are finished with a load balancer, you can delete it using <a>DeleteLoadBalancer</a>.</p> <p>You can create up to 20 load balancers per region per account. You can request an increase for the number of load balancers for your account. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-limits.html">Limits for Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>

> Body parameter

```json
{
  "LoadBalancerName": {},
  "Listeners": {},
  "AvailabilityZones": {},
  "Subnets": {},
  "SecurityGroups": {},
  "Scheme": {},
  "Tags": {}
}
```

<h3 id="postcreateloadbalancer-parameters">Parameters</h3>

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
|body|body|[CreateAccessPointInput](#schemacreateaccesspointinput)|false|none|
|» LoadBalancerName|body|object|true|none|
|» Listeners|body|object|true|none|
|» AvailabilityZones|body|object|false|none|
|» Subnets|body|object|false|none|
|» SecurityGroups|body|object|false|none|
|» Scheme|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateLoadBalancer|
|Version|2012-06-01|

<h3 id="postcreateloadbalancer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateAccessPointOutput](#schemacreateaccesspointoutput)|
|480|480|DuplicateAccessPointNameException|[DuplicateAccessPointNameException](#schemaduplicateaccesspointnameexception)|
|481|481|TooManyAccessPointsException|[TooManyAccessPointsException](#schematoomanyaccesspointsexception)|
|482|482|CertificateNotFoundException|[CertificateNotFoundException](#schemacertificatenotfoundexception)|
|483|483|InvalidConfigurationRequestException|[InvalidConfigurationRequestException](#schemainvalidconfigurationrequestexception)|
|484|484|SubnetNotFoundException|[SubnetNotFoundException](#schemasubnetnotfoundexception)|
|485|485|InvalidSubnetException|[InvalidSubnetException](#schemainvalidsubnetexception)|
|486|486|InvalidSecurityGroupException|[InvalidSecurityGroupException](#schemainvalidsecuritygroupexception)|
|487|487|InvalidSchemeException|[InvalidSchemeException](#schemainvalidschemeexception)|
|488|488|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|489|489|DuplicateTagKeysException|[DuplicateTagKeysException](#schemaduplicatetagkeysexception)|
|490|490|UnsupportedProtocolException|[UnsupportedProtocolException](#schemaunsupportedprotocolexception)|
|491|491|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateLoadBalancerListeners

<a id="opIdGET_CreateLoadBalancerListeners"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=CreateLoadBalancerListeners?LoadBalancerName=string&Listeners=%7B%22Protocol%22%3A%7B%7D%2C%22LoadBalancerPort%22%3A%7B%7D%2C%22InstanceProtocol%22%3A%7B%7D%2C%22InstancePort%22%3A%7B%7D%2C%22SSLCertificateId%22%3A%7B%7D%7D&Action=CreateLoadBalancerListeners&Version=2012-06-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateLoadBalancerListeners`

<p>Creates one or more listeners for the specified load balancer. If a listener with the specified port does not already exist, it is created; otherwise, the properties of the new listener must match the properties of the existing listener.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html">Listeners for Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>

<h3 id="getcreateloadbalancerlisteners-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LoadBalancerName|query|string|true|The name of the load balancer.|
|Listeners|query|[[Listener](#schemalistener)]|true|The listeners.|
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
|Action|CreateLoadBalancerListeners|
|Version|2012-06-01|

<h3 id="getcreateloadbalancerlisteners-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateLoadBalancerListenerOutput](#schemacreateloadbalancerlisteneroutput)|
|480|480|AccessPointNotFoundException|[AccessPointNotFoundException](#schemaaccesspointnotfoundexception)|
|481|481|DuplicateListenerException|[DuplicateListenerException](#schemaduplicatelistenerexception)|
|482|482|CertificateNotFoundException|[CertificateNotFoundException](#schemacertificatenotfoundexception)|
|483|483|InvalidConfigurationRequestException|[InvalidConfigurationRequestException](#schemainvalidconfigurationrequestexception)|
|484|484|UnsupportedProtocolException|[UnsupportedProtocolException](#schemaunsupportedprotocolexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateLoadBalancerListeners

<a id="opIdPOST_CreateLoadBalancerListeners"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=CreateLoadBalancerListeners?Action=CreateLoadBalancerListeners&Version=2012-06-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"LoadBalancerName":{},"Listeners":{}}'
```

`POST /#Action=CreateLoadBalancerListeners`

<p>Creates one or more listeners for the specified load balancer. If a listener with the specified port does not already exist, it is created; otherwise, the properties of the new listener must match the properties of the existing listener.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html">Listeners for Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>

> Body parameter

```json
{
  "LoadBalancerName": {},
  "Listeners": {}
}
```

<h3 id="postcreateloadbalancerlisteners-parameters">Parameters</h3>

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
|body|body|[CreateLoadBalancerListenerInput](#schemacreateloadbalancerlistenerinput)|false|none|
|» LoadBalancerName|body|object|true|none|
|» Listeners|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateLoadBalancerListeners|
|Version|2012-06-01|

<h3 id="postcreateloadbalancerlisteners-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateLoadBalancerListenerOutput](#schemacreateloadbalancerlisteneroutput)|
|480|480|AccessPointNotFoundException|[AccessPointNotFoundException](#schemaaccesspointnotfoundexception)|
|481|481|DuplicateListenerException|[DuplicateListenerException](#schemaduplicatelistenerexception)|
|482|482|CertificateNotFoundException|[CertificateNotFoundException](#schemacertificatenotfoundexception)|
|483|483|InvalidConfigurationRequestException|[InvalidConfigurationRequestException](#schemainvalidconfigurationrequestexception)|
|484|484|UnsupportedProtocolException|[UnsupportedProtocolException](#schemaunsupportedprotocolexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateLoadBalancerPolicy

<a id="opIdGET_CreateLoadBalancerPolicy"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=CreateLoadBalancerPolicy?LoadBalancerName=string&PolicyName=string&PolicyTypeName=string&Action=CreateLoadBalancerPolicy&Version=2012-06-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateLoadBalancerPolicy`

<p>Creates a policy with the specified attributes for the specified load balancer.</p> <p>Policies are settings that are saved for your load balancer and that can be applied to the listener or the application server, depending on the policy type.</p>

<h3 id="getcreateloadbalancerpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LoadBalancerName|query|string|true|The name of the load balancer.|
|PolicyName|query|string|true|The name of the load balancer policy to be created. This name must be unique within the set of policies for this load balancer.|
|PolicyTypeName|query|string|true|The name of the base policy type. To get the list of policy types, use <a>DescribeLoadBalancerPolicyTypes</a>.|
|PolicyAttributes|query|[[PolicyAttribute](#schemapolicyattribute)]|false|The policy attributes.|
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
|Action|CreateLoadBalancerPolicy|
|Version|2012-06-01|

<h3 id="getcreateloadbalancerpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateLoadBalancerPolicyOutput](#schemacreateloadbalancerpolicyoutput)|
|480|480|AccessPointNotFoundException|[AccessPointNotFoundException](#schemaaccesspointnotfoundexception)|
|481|481|PolicyTypeNotFoundException|[PolicyTypeNotFoundException](#schemapolicytypenotfoundexception)|
|482|482|DuplicatePolicyNameException|[DuplicatePolicyNameException](#schemaduplicatepolicynameexception)|
|483|483|TooManyPoliciesException|[TooManyPoliciesException](#schematoomanypoliciesexception)|
|484|484|InvalidConfigurationRequestException|[InvalidConfigurationRequestException](#schemainvalidconfigurationrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateLoadBalancerPolicy

<a id="opIdPOST_CreateLoadBalancerPolicy"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=CreateLoadBalancerPolicy?Action=CreateLoadBalancerPolicy&Version=2012-06-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"LoadBalancerName":{},"PolicyName":{},"PolicyTypeName":{},"PolicyAttributes":{}}'
```

`POST /#Action=CreateLoadBalancerPolicy`

<p>Creates a policy with the specified attributes for the specified load balancer.</p> <p>Policies are settings that are saved for your load balancer and that can be applied to the listener or the application server, depending on the policy type.</p>

> Body parameter

```json
{
  "LoadBalancerName": {},
  "PolicyName": {},
  "PolicyTypeName": {},
  "PolicyAttributes": {}
}
```

<h3 id="postcreateloadbalancerpolicy-parameters">Parameters</h3>

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
|body|body|[CreateLoadBalancerPolicyInput](#schemacreateloadbalancerpolicyinput)|false|none|
|» LoadBalancerName|body|object|true|none|
|» PolicyName|body|object|true|none|
|» PolicyTypeName|body|object|true|none|
|» PolicyAttributes|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateLoadBalancerPolicy|
|Version|2012-06-01|

<h3 id="postcreateloadbalancerpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateLoadBalancerPolicyOutput](#schemacreateloadbalancerpolicyoutput)|
|480|480|AccessPointNotFoundException|[AccessPointNotFoundException](#schemaaccesspointnotfoundexception)|
|481|481|PolicyTypeNotFoundException|[PolicyTypeNotFoundException](#schemapolicytypenotfoundexception)|
|482|482|DuplicatePolicyNameException|[DuplicatePolicyNameException](#schemaduplicatepolicynameexception)|
|483|483|TooManyPoliciesException|[TooManyPoliciesException](#schematoomanypoliciesexception)|
|484|484|InvalidConfigurationRequestException|[InvalidConfigurationRequestException](#schemainvalidconfigurationrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteLoadBalancer

<a id="opIdGET_DeleteLoadBalancer"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=DeleteLoadBalancer?LoadBalancerName=string&Action=DeleteLoadBalancer&Version=2012-06-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteLoadBalancer`

<p>Deletes the specified load balancer.</p> <p>If you are attempting to recreate a load balancer, you must reconfigure all settings. The DNS name associated with a deleted load balancer are no longer usable. The name and associated DNS record of the deleted load balancer no longer exist and traffic sent to any of its IP addresses is no longer delivered to your instances.</p> <p>If the load balancer does not exist or has already been deleted, the call to <code>DeleteLoadBalancer</code> still succeeds.</p>

<h3 id="getdeleteloadbalancer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LoadBalancerName|query|string|true|The name of the load balancer.|
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
|Action|DeleteLoadBalancer|
|Version|2012-06-01|

<h3 id="getdeleteloadbalancer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteAccessPointOutput](#schemadeleteaccesspointoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteLoadBalancer

<a id="opIdPOST_DeleteLoadBalancer"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=DeleteLoadBalancer?Action=DeleteLoadBalancer&Version=2012-06-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"LoadBalancerName":{}}'
```

`POST /#Action=DeleteLoadBalancer`

<p>Deletes the specified load balancer.</p> <p>If you are attempting to recreate a load balancer, you must reconfigure all settings. The DNS name associated with a deleted load balancer are no longer usable. The name and associated DNS record of the deleted load balancer no longer exist and traffic sent to any of its IP addresses is no longer delivered to your instances.</p> <p>If the load balancer does not exist or has already been deleted, the call to <code>DeleteLoadBalancer</code> still succeeds.</p>

> Body parameter

```json
{
  "LoadBalancerName": {}
}
```

<h3 id="postdeleteloadbalancer-parameters">Parameters</h3>

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
|body|body|[DeleteAccessPointInput](#schemadeleteaccesspointinput)|false|none|
|» LoadBalancerName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteLoadBalancer|
|Version|2012-06-01|

<h3 id="postdeleteloadbalancer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteAccessPointOutput](#schemadeleteaccesspointoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteLoadBalancerListeners

<a id="opIdGET_DeleteLoadBalancerListeners"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=DeleteLoadBalancerListeners?LoadBalancerName=string&LoadBalancerPorts=0&Action=DeleteLoadBalancerListeners&Version=2012-06-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteLoadBalancerListeners`

Deletes the specified listeners from the specified load balancer.

<h3 id="getdeleteloadbalancerlisteners-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LoadBalancerName|query|string|true|The name of the load balancer.|
|LoadBalancerPorts|query|[[AccessPointPort](#schemaaccesspointport)]|true|The client port numbers of the listeners.|
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
|Action|DeleteLoadBalancerListeners|
|Version|2012-06-01|

<h3 id="getdeleteloadbalancerlisteners-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteLoadBalancerListenerOutput](#schemadeleteloadbalancerlisteneroutput)|
|480|480|AccessPointNotFoundException|[AccessPointNotFoundException](#schemaaccesspointnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteLoadBalancerListeners

<a id="opIdPOST_DeleteLoadBalancerListeners"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=DeleteLoadBalancerListeners?Action=DeleteLoadBalancerListeners&Version=2012-06-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"LoadBalancerName":{},"LoadBalancerPorts":{}}'
```

`POST /#Action=DeleteLoadBalancerListeners`

Deletes the specified listeners from the specified load balancer.

> Body parameter

```json
{
  "LoadBalancerName": {},
  "LoadBalancerPorts": {}
}
```

<h3 id="postdeleteloadbalancerlisteners-parameters">Parameters</h3>

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
|body|body|[DeleteLoadBalancerListenerInput](#schemadeleteloadbalancerlistenerinput)|false|none|
|» LoadBalancerName|body|object|true|none|
|» LoadBalancerPorts|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteLoadBalancerListeners|
|Version|2012-06-01|

<h3 id="postdeleteloadbalancerlisteners-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteLoadBalancerListenerOutput](#schemadeleteloadbalancerlisteneroutput)|
|480|480|AccessPointNotFoundException|[AccessPointNotFoundException](#schemaaccesspointnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteLoadBalancerPolicy

<a id="opIdGET_DeleteLoadBalancerPolicy"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=DeleteLoadBalancerPolicy?LoadBalancerName=string&PolicyName=string&Action=DeleteLoadBalancerPolicy&Version=2012-06-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteLoadBalancerPolicy`

Deletes the specified policy from the specified load balancer. This policy must not be enabled for any listeners.

<h3 id="getdeleteloadbalancerpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LoadBalancerName|query|string|true|The name of the load balancer.|
|PolicyName|query|string|true|The name of the policy.|
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
|Action|DeleteLoadBalancerPolicy|
|Version|2012-06-01|

<h3 id="getdeleteloadbalancerpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteLoadBalancerPolicyOutput](#schemadeleteloadbalancerpolicyoutput)|
|480|480|AccessPointNotFoundException|[AccessPointNotFoundException](#schemaaccesspointnotfoundexception)|
|481|481|InvalidConfigurationRequestException|[InvalidConfigurationRequestException](#schemainvalidconfigurationrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteLoadBalancerPolicy

<a id="opIdPOST_DeleteLoadBalancerPolicy"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=DeleteLoadBalancerPolicy?Action=DeleteLoadBalancerPolicy&Version=2012-06-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"LoadBalancerName":{},"PolicyName":{}}'
```

`POST /#Action=DeleteLoadBalancerPolicy`

Deletes the specified policy from the specified load balancer. This policy must not be enabled for any listeners.

> Body parameter

```json
{
  "LoadBalancerName": {},
  "PolicyName": {}
}
```

<h3 id="postdeleteloadbalancerpolicy-parameters">Parameters</h3>

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
|body|body|[DeleteLoadBalancerPolicyInput](#schemadeleteloadbalancerpolicyinput)|false|none|
|» LoadBalancerName|body|object|true|none|
|» PolicyName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteLoadBalancerPolicy|
|Version|2012-06-01|

<h3 id="postdeleteloadbalancerpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteLoadBalancerPolicyOutput](#schemadeleteloadbalancerpolicyoutput)|
|480|480|AccessPointNotFoundException|[AccessPointNotFoundException](#schemaaccesspointnotfoundexception)|
|481|481|InvalidConfigurationRequestException|[InvalidConfigurationRequestException](#schemainvalidconfigurationrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeregisterInstancesFromLoadBalancer

<a id="opIdGET_DeregisterInstancesFromLoadBalancer"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=DeregisterInstancesFromLoadBalancer?LoadBalancerName=string&Instances=%7B%22InstanceId%22%3A%7B%7D%7D&Action=DeregisterInstancesFromLoadBalancer&Version=2012-06-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeregisterInstancesFromLoadBalancer`

<p>Deregisters the specified instances from the specified load balancer. After the instance is deregistered, it no longer receives traffic from the load balancer.</p> <p>You can use <a>DescribeLoadBalancers</a> to verify that the instance is deregistered from the load balancer.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-deregister-register-instances.html">Register or De-Register EC2 Instances</a> in the <i>Classic Load Balancers Guide</i>.</p>

<h3 id="getderegisterinstancesfromloadbalancer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LoadBalancerName|query|string|true|The name of the load balancer.|
|Instances|query|[[Instance](#schemainstance)]|true|The IDs of the instances.|
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
|Action|DeregisterInstancesFromLoadBalancer|
|Version|2012-06-01|

<h3 id="getderegisterinstancesfromloadbalancer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeregisterEndPointsOutput](#schemaderegisterendpointsoutput)|
|480|480|AccessPointNotFoundException|[AccessPointNotFoundException](#schemaaccesspointnotfoundexception)|
|481|481|InvalidEndPointException|[InvalidEndPointException](#schemainvalidendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeregisterInstancesFromLoadBalancer

<a id="opIdPOST_DeregisterInstancesFromLoadBalancer"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=DeregisterInstancesFromLoadBalancer?Action=DeregisterInstancesFromLoadBalancer&Version=2012-06-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"LoadBalancerName":{},"Instances":{}}'
```

`POST /#Action=DeregisterInstancesFromLoadBalancer`

<p>Deregisters the specified instances from the specified load balancer. After the instance is deregistered, it no longer receives traffic from the load balancer.</p> <p>You can use <a>DescribeLoadBalancers</a> to verify that the instance is deregistered from the load balancer.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-deregister-register-instances.html">Register or De-Register EC2 Instances</a> in the <i>Classic Load Balancers Guide</i>.</p>

> Body parameter

```json
{
  "LoadBalancerName": {},
  "Instances": {}
}
```

<h3 id="postderegisterinstancesfromloadbalancer-parameters">Parameters</h3>

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
|body|body|[DeregisterEndPointsInput](#schemaderegisterendpointsinput)|false|none|
|» LoadBalancerName|body|object|true|none|
|» Instances|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeregisterInstancesFromLoadBalancer|
|Version|2012-06-01|

<h3 id="postderegisterinstancesfromloadbalancer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeregisterEndPointsOutput](#schemaderegisterendpointsoutput)|
|480|480|AccessPointNotFoundException|[AccessPointNotFoundException](#schemaaccesspointnotfoundexception)|
|481|481|InvalidEndPointException|[InvalidEndPointException](#schemainvalidendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeAccountLimits

<a id="opIdGET_DescribeAccountLimits"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=DescribeAccountLimits?Action=DescribeAccountLimits&Version=2012-06-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeAccountLimits`

<p>Describes the current Elastic Load Balancing resource limits for your AWS account.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-limits.html">Limits for Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>

<h3 id="getdescribeaccountlimits-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Marker|query|string|false|The marker for the next set of results. (You received this marker from a previous call.)|
|PageSize|query|integer|false|The maximum number of results to return with this call.|
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
|Version|2012-06-01|

<h3 id="getdescribeaccountlimits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAccountLimitsOutput](#schemadescribeaccountlimitsoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeAccountLimits

<a id="opIdPOST_DescribeAccountLimits"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=DescribeAccountLimits?Action=DescribeAccountLimits&Version=2012-06-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Marker":{},"PageSize":{}}'
```

`POST /#Action=DescribeAccountLimits`

<p>Describes the current Elastic Load Balancing resource limits for your AWS account.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-limits.html">Limits for Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>

> Body parameter

```json
{
  "Marker": {},
  "PageSize": {}
}
```

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
|body|body|[DescribeAccountLimitsInput](#schemadescribeaccountlimitsinput)|false|none|
|» Marker|body|object|false|none|
|» PageSize|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeAccountLimits|
|Version|2012-06-01|

<h3 id="postdescribeaccountlimits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAccountLimitsOutput](#schemadescribeaccountlimitsoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeInstanceHealth

<a id="opIdGET_DescribeInstanceHealth"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=DescribeInstanceHealth?LoadBalancerName=string&Action=DescribeInstanceHealth&Version=2012-06-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeInstanceHealth`

Describes the state of the specified instances with respect to the specified load balancer. If no instances are specified, the call describes the state of all instances that are currently registered with the load balancer. If instances are specified, their state is returned even if they are no longer registered with the load balancer. The state of terminated instances is not returned.

<h3 id="getdescribeinstancehealth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LoadBalancerName|query|string|true|The name of the load balancer.|
|Instances|query|[[Instance](#schemainstance)]|false|The IDs of the instances.|
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
|Action|DescribeInstanceHealth|
|Version|2012-06-01|

<h3 id="getdescribeinstancehealth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEndPointStateOutput](#schemadescribeendpointstateoutput)|
|480|480|AccessPointNotFoundException|[AccessPointNotFoundException](#schemaaccesspointnotfoundexception)|
|481|481|InvalidEndPointException|[InvalidEndPointException](#schemainvalidendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeInstanceHealth

<a id="opIdPOST_DescribeInstanceHealth"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=DescribeInstanceHealth?Action=DescribeInstanceHealth&Version=2012-06-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"LoadBalancerName":{},"Instances":{}}'
```

`POST /#Action=DescribeInstanceHealth`

Describes the state of the specified instances with respect to the specified load balancer. If no instances are specified, the call describes the state of all instances that are currently registered with the load balancer. If instances are specified, their state is returned even if they are no longer registered with the load balancer. The state of terminated instances is not returned.

> Body parameter

```json
{
  "LoadBalancerName": {},
  "Instances": {}
}
```

<h3 id="postdescribeinstancehealth-parameters">Parameters</h3>

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
|body|body|[DescribeEndPointStateInput](#schemadescribeendpointstateinput)|false|none|
|» LoadBalancerName|body|object|true|none|
|» Instances|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeInstanceHealth|
|Version|2012-06-01|

<h3 id="postdescribeinstancehealth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEndPointStateOutput](#schemadescribeendpointstateoutput)|
|480|480|AccessPointNotFoundException|[AccessPointNotFoundException](#schemaaccesspointnotfoundexception)|
|481|481|InvalidEndPointException|[InvalidEndPointException](#schemainvalidendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeLoadBalancerAttributes

<a id="opIdGET_DescribeLoadBalancerAttributes"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=DescribeLoadBalancerAttributes?LoadBalancerName=string&Action=DescribeLoadBalancerAttributes&Version=2012-06-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeLoadBalancerAttributes`

Describes the attributes for the specified load balancer.

<h3 id="getdescribeloadbalancerattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LoadBalancerName|query|string|true|The name of the load balancer.|
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
|Action|DescribeLoadBalancerAttributes|
|Version|2012-06-01|

<h3 id="getdescribeloadbalancerattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeLoadBalancerAttributesOutput](#schemadescribeloadbalancerattributesoutput)|
|480|480|AccessPointNotFoundException|[AccessPointNotFoundException](#schemaaccesspointnotfoundexception)|
|481|481|LoadBalancerAttributeNotFoundException|[LoadBalancerAttributeNotFoundException](#schemaloadbalancerattributenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeLoadBalancerAttributes

<a id="opIdPOST_DescribeLoadBalancerAttributes"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=DescribeLoadBalancerAttributes?Action=DescribeLoadBalancerAttributes&Version=2012-06-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"LoadBalancerName":{}}'
```

`POST /#Action=DescribeLoadBalancerAttributes`

Describes the attributes for the specified load balancer.

> Body parameter

```json
{
  "LoadBalancerName": {}
}
```

<h3 id="postdescribeloadbalancerattributes-parameters">Parameters</h3>

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
|body|body|[DescribeLoadBalancerAttributesInput](#schemadescribeloadbalancerattributesinput)|false|none|
|» LoadBalancerName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeLoadBalancerAttributes|
|Version|2012-06-01|

<h3 id="postdescribeloadbalancerattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeLoadBalancerAttributesOutput](#schemadescribeloadbalancerattributesoutput)|
|480|480|AccessPointNotFoundException|[AccessPointNotFoundException](#schemaaccesspointnotfoundexception)|
|481|481|LoadBalancerAttributeNotFoundException|[LoadBalancerAttributeNotFoundException](#schemaloadbalancerattributenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeLoadBalancerPolicies

<a id="opIdGET_DescribeLoadBalancerPolicies"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=DescribeLoadBalancerPolicies?Action=DescribeLoadBalancerPolicies&Version=2012-06-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeLoadBalancerPolicies`

<p>Describes the specified policies.</p> <p>If you specify a load balancer name, the action returns the descriptions of all policies created for the load balancer. If you specify a policy name associated with your load balancer, the action returns the description of that policy. If you don't specify a load balancer name, the action returns descriptions of the specified sample policies, or descriptions of all sample policies. The names of the sample policies have the <code>ELBSample-</code> prefix.</p>

<h3 id="getdescribeloadbalancerpolicies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LoadBalancerName|query|string|false|The name of the load balancer.|
|PolicyNames|query|[[PolicyName](#schemapolicyname)]|false|The names of the policies.|
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
|Action|DescribeLoadBalancerPolicies|
|Version|2012-06-01|

<h3 id="getdescribeloadbalancerpolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeLoadBalancerPoliciesOutput](#schemadescribeloadbalancerpoliciesoutput)|
|480|480|AccessPointNotFoundException|[AccessPointNotFoundException](#schemaaccesspointnotfoundexception)|
|481|481|PolicyNotFoundException|[PolicyNotFoundException](#schemapolicynotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeLoadBalancerPolicies

<a id="opIdPOST_DescribeLoadBalancerPolicies"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=DescribeLoadBalancerPolicies?Action=DescribeLoadBalancerPolicies&Version=2012-06-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"LoadBalancerName":{},"PolicyNames":{}}'
```

`POST /#Action=DescribeLoadBalancerPolicies`

<p>Describes the specified policies.</p> <p>If you specify a load balancer name, the action returns the descriptions of all policies created for the load balancer. If you specify a policy name associated with your load balancer, the action returns the description of that policy. If you don't specify a load balancer name, the action returns descriptions of the specified sample policies, or descriptions of all sample policies. The names of the sample policies have the <code>ELBSample-</code> prefix.</p>

> Body parameter

```json
{
  "LoadBalancerName": {},
  "PolicyNames": {}
}
```

<h3 id="postdescribeloadbalancerpolicies-parameters">Parameters</h3>

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
|body|body|[DescribeLoadBalancerPoliciesInput](#schemadescribeloadbalancerpoliciesinput)|false|none|
|» LoadBalancerName|body|object|false|none|
|» PolicyNames|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeLoadBalancerPolicies|
|Version|2012-06-01|

<h3 id="postdescribeloadbalancerpolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeLoadBalancerPoliciesOutput](#schemadescribeloadbalancerpoliciesoutput)|
|480|480|AccessPointNotFoundException|[AccessPointNotFoundException](#schemaaccesspointnotfoundexception)|
|481|481|PolicyNotFoundException|[PolicyNotFoundException](#schemapolicynotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeLoadBalancerPolicyTypes

<a id="opIdGET_DescribeLoadBalancerPolicyTypes"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=DescribeLoadBalancerPolicyTypes?Action=DescribeLoadBalancerPolicyTypes&Version=2012-06-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeLoadBalancerPolicyTypes`

<p>Describes the specified load balancer policy types or all load balancer policy types.</p> <p>The description of each type indicates how it can be used. For example, some policies can be used only with layer 7 listeners, some policies can be used only with layer 4 listeners, and some policies can be used only with your EC2 instances.</p> <p>You can use <a>CreateLoadBalancerPolicy</a> to create a policy configuration for any of these policy types. Then, depending on the policy type, use either <a>SetLoadBalancerPoliciesOfListener</a> or <a>SetLoadBalancerPoliciesForBackendServer</a> to set the policy.</p>

<h3 id="getdescribeloadbalancerpolicytypes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PolicyTypeNames|query|[[PolicyTypeName](#schemapolicytypename)]|false|The names of the policy types. If no names are specified, describes all policy types defined by Elastic Load Balancing.|
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
|Action|DescribeLoadBalancerPolicyTypes|
|Version|2012-06-01|

<h3 id="getdescribeloadbalancerpolicytypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeLoadBalancerPolicyTypesOutput](#schemadescribeloadbalancerpolicytypesoutput)|
|480|480|PolicyTypeNotFoundException|[PolicyTypeNotFoundException](#schemapolicytypenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeLoadBalancerPolicyTypes

<a id="opIdPOST_DescribeLoadBalancerPolicyTypes"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=DescribeLoadBalancerPolicyTypes?Action=DescribeLoadBalancerPolicyTypes&Version=2012-06-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"PolicyTypeNames":{}}'
```

`POST /#Action=DescribeLoadBalancerPolicyTypes`

<p>Describes the specified load balancer policy types or all load balancer policy types.</p> <p>The description of each type indicates how it can be used. For example, some policies can be used only with layer 7 listeners, some policies can be used only with layer 4 listeners, and some policies can be used only with your EC2 instances.</p> <p>You can use <a>CreateLoadBalancerPolicy</a> to create a policy configuration for any of these policy types. Then, depending on the policy type, use either <a>SetLoadBalancerPoliciesOfListener</a> or <a>SetLoadBalancerPoliciesForBackendServer</a> to set the policy.</p>

> Body parameter

```json
{
  "PolicyTypeNames": {}
}
```

<h3 id="postdescribeloadbalancerpolicytypes-parameters">Parameters</h3>

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
|body|body|[DescribeLoadBalancerPolicyTypesInput](#schemadescribeloadbalancerpolicytypesinput)|false|none|
|» PolicyTypeNames|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeLoadBalancerPolicyTypes|
|Version|2012-06-01|

<h3 id="postdescribeloadbalancerpolicytypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeLoadBalancerPolicyTypesOutput](#schemadescribeloadbalancerpolicytypesoutput)|
|480|480|PolicyTypeNotFoundException|[PolicyTypeNotFoundException](#schemapolicytypenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeLoadBalancers

<a id="opIdGET_DescribeLoadBalancers"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=DescribeLoadBalancers?Action=DescribeLoadBalancers&Version=2012-06-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeLoadBalancers`

Describes the specified the load balancers. If no load balancers are specified, the call describes all of your load balancers.

<h3 id="getdescribeloadbalancers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LoadBalancerNames|query|[[AccessPointName](#schemaaccesspointname)]|false|The names of the load balancers.|
|Marker|query|string|false|The marker for the next set of results. (You received this marker from a previous call.)|
|PageSize|query|integer|false|The maximum number of results to return with this call (a number from 1 to 400). The default is 400.|
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
|Version|2012-06-01|

<h3 id="getdescribeloadbalancers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAccessPointsOutput](#schemadescribeaccesspointsoutput)|
|480|480|AccessPointNotFoundException|[AccessPointNotFoundException](#schemaaccesspointnotfoundexception)|
|481|481|DependencyThrottleException|[DependencyThrottleException](#schemadependencythrottleexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeLoadBalancers

<a id="opIdPOST_DescribeLoadBalancers"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=DescribeLoadBalancers?Action=DescribeLoadBalancers&Version=2012-06-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"LoadBalancerNames":{},"Marker":{},"PageSize":{}}'
```

`POST /#Action=DescribeLoadBalancers`

Describes the specified the load balancers. If no load balancers are specified, the call describes all of your load balancers.

> Body parameter

```json
{
  "LoadBalancerNames": {},
  "Marker": {},
  "PageSize": {}
}
```

<h3 id="postdescribeloadbalancers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Marker|query|string|false|Pagination token|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeAccessPointsInput](#schemadescribeaccesspointsinput)|false|none|
|» LoadBalancerNames|body|object|false|none|
|» Marker|body|object|false|none|
|» PageSize|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeLoadBalancers|
|Version|2012-06-01|

<h3 id="postdescribeloadbalancers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAccessPointsOutput](#schemadescribeaccesspointsoutput)|
|480|480|AccessPointNotFoundException|[AccessPointNotFoundException](#schemaaccesspointnotfoundexception)|
|481|481|DependencyThrottleException|[DependencyThrottleException](#schemadependencythrottleexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeTags

<a id="opIdGET_DescribeTags"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=DescribeTags?LoadBalancerNames=string&Action=DescribeTags&Version=2012-06-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeTags`

Describes the tags associated with the specified load balancers.

<h3 id="getdescribetags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LoadBalancerNames|query|[[AccessPointName](#schemaaccesspointname)]|true|The names of the load balancers.|
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
|Version|2012-06-01|

<h3 id="getdescribetags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTagsOutput](#schemadescribetagsoutput)|
|480|480|AccessPointNotFoundException|[AccessPointNotFoundException](#schemaaccesspointnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeTags

<a id="opIdPOST_DescribeTags"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=DescribeTags?Action=DescribeTags&Version=2012-06-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"LoadBalancerNames":{}}'
```

`POST /#Action=DescribeTags`

Describes the tags associated with the specified load balancers.

> Body parameter

```json
{
  "LoadBalancerNames": {}
}
```

<h3 id="postdescribetags-parameters">Parameters</h3>

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
|body|body|[DescribeTagsInput](#schemadescribetagsinput)|false|none|
|» LoadBalancerNames|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeTags|
|Version|2012-06-01|

<h3 id="postdescribetags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTagsOutput](#schemadescribetagsoutput)|
|480|480|AccessPointNotFoundException|[AccessPointNotFoundException](#schemaaccesspointnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DetachLoadBalancerFromSubnets

<a id="opIdGET_DetachLoadBalancerFromSubnets"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=DetachLoadBalancerFromSubnets?LoadBalancerName=string&Subnets=string&Action=DetachLoadBalancerFromSubnets&Version=2012-06-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DetachLoadBalancerFromSubnets`

<p>Removes the specified subnets from the set of configured subnets for the load balancer.</p> <p>After a subnet is removed, all EC2 instances registered with the load balancer in the removed subnet go into the <code>OutOfService</code> state. Then, the load balancer balances the traffic among the remaining routable subnets.</p>

<h3 id="getdetachloadbalancerfromsubnets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LoadBalancerName|query|string|true|The name of the load balancer.|
|Subnets|query|[[SubnetId](#schemasubnetid)]|true|The IDs of the subnets.|
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
|Action|DetachLoadBalancerFromSubnets|
|Version|2012-06-01|

<h3 id="getdetachloadbalancerfromsubnets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DetachLoadBalancerFromSubnetsOutput](#schemadetachloadbalancerfromsubnetsoutput)|
|480|480|AccessPointNotFoundException|[AccessPointNotFoundException](#schemaaccesspointnotfoundexception)|
|481|481|InvalidConfigurationRequestException|[InvalidConfigurationRequestException](#schemainvalidconfigurationrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DetachLoadBalancerFromSubnets

<a id="opIdPOST_DetachLoadBalancerFromSubnets"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=DetachLoadBalancerFromSubnets?Action=DetachLoadBalancerFromSubnets&Version=2012-06-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"LoadBalancerName":{},"Subnets":{}}'
```

`POST /#Action=DetachLoadBalancerFromSubnets`

<p>Removes the specified subnets from the set of configured subnets for the load balancer.</p> <p>After a subnet is removed, all EC2 instances registered with the load balancer in the removed subnet go into the <code>OutOfService</code> state. Then, the load balancer balances the traffic among the remaining routable subnets.</p>

> Body parameter

```json
{
  "LoadBalancerName": {},
  "Subnets": {}
}
```

<h3 id="postdetachloadbalancerfromsubnets-parameters">Parameters</h3>

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
|body|body|[DetachLoadBalancerFromSubnetsInput](#schemadetachloadbalancerfromsubnetsinput)|false|none|
|» LoadBalancerName|body|object|true|none|
|» Subnets|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DetachLoadBalancerFromSubnets|
|Version|2012-06-01|

<h3 id="postdetachloadbalancerfromsubnets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DetachLoadBalancerFromSubnetsOutput](#schemadetachloadbalancerfromsubnetsoutput)|
|480|480|AccessPointNotFoundException|[AccessPointNotFoundException](#schemaaccesspointnotfoundexception)|
|481|481|InvalidConfigurationRequestException|[InvalidConfigurationRequestException](#schemainvalidconfigurationrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DisableAvailabilityZonesForLoadBalancer

<a id="opIdGET_DisableAvailabilityZonesForLoadBalancer"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=DisableAvailabilityZonesForLoadBalancer?LoadBalancerName=string&AvailabilityZones=string&Action=DisableAvailabilityZonesForLoadBalancer&Version=2012-06-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DisableAvailabilityZonesForLoadBalancer`

<p>Removes the specified Availability Zones from the set of Availability Zones for the specified load balancer in EC2-Classic or a default VPC.</p> <p>For load balancers in a non-default VPC, use <a>DetachLoadBalancerFromSubnets</a>.</p> <p>There must be at least one Availability Zone registered with a load balancer at all times. After an Availability Zone is removed, all instances registered with the load balancer that are in the removed Availability Zone go into the <code>OutOfService</code> state. Then, the load balancer attempts to equally balance the traffic among its remaining Availability Zones.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-az.html">Add or Remove Availability Zones</a> in the <i>Classic Load Balancers Guide</i>.</p>

<h3 id="getdisableavailabilityzonesforloadbalancer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LoadBalancerName|query|string|true|The name of the load balancer.|
|AvailabilityZones|query|[[AvailabilityZone](#schemaavailabilityzone)]|true|The Availability Zones.|
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
|Action|DisableAvailabilityZonesForLoadBalancer|
|Version|2012-06-01|

<h3 id="getdisableavailabilityzonesforloadbalancer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RemoveAvailabilityZonesOutput](#schemaremoveavailabilityzonesoutput)|
|480|480|AccessPointNotFoundException|[AccessPointNotFoundException](#schemaaccesspointnotfoundexception)|
|481|481|InvalidConfigurationRequestException|[InvalidConfigurationRequestException](#schemainvalidconfigurationrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DisableAvailabilityZonesForLoadBalancer

<a id="opIdPOST_DisableAvailabilityZonesForLoadBalancer"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=DisableAvailabilityZonesForLoadBalancer?Action=DisableAvailabilityZonesForLoadBalancer&Version=2012-06-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"LoadBalancerName":{},"AvailabilityZones":{}}'
```

`POST /#Action=DisableAvailabilityZonesForLoadBalancer`

<p>Removes the specified Availability Zones from the set of Availability Zones for the specified load balancer in EC2-Classic or a default VPC.</p> <p>For load balancers in a non-default VPC, use <a>DetachLoadBalancerFromSubnets</a>.</p> <p>There must be at least one Availability Zone registered with a load balancer at all times. After an Availability Zone is removed, all instances registered with the load balancer that are in the removed Availability Zone go into the <code>OutOfService</code> state. Then, the load balancer attempts to equally balance the traffic among its remaining Availability Zones.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-az.html">Add or Remove Availability Zones</a> in the <i>Classic Load Balancers Guide</i>.</p>

> Body parameter

```json
{
  "LoadBalancerName": {},
  "AvailabilityZones": {}
}
```

<h3 id="postdisableavailabilityzonesforloadbalancer-parameters">Parameters</h3>

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
|body|body|[RemoveAvailabilityZonesInput](#schemaremoveavailabilityzonesinput)|false|none|
|» LoadBalancerName|body|object|true|none|
|» AvailabilityZones|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DisableAvailabilityZonesForLoadBalancer|
|Version|2012-06-01|

<h3 id="postdisableavailabilityzonesforloadbalancer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RemoveAvailabilityZonesOutput](#schemaremoveavailabilityzonesoutput)|
|480|480|AccessPointNotFoundException|[AccessPointNotFoundException](#schemaaccesspointnotfoundexception)|
|481|481|InvalidConfigurationRequestException|[InvalidConfigurationRequestException](#schemainvalidconfigurationrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_EnableAvailabilityZonesForLoadBalancer

<a id="opIdGET_EnableAvailabilityZonesForLoadBalancer"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=EnableAvailabilityZonesForLoadBalancer?LoadBalancerName=string&AvailabilityZones=string&Action=EnableAvailabilityZonesForLoadBalancer&Version=2012-06-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=EnableAvailabilityZonesForLoadBalancer`

<p>Adds the specified Availability Zones to the set of Availability Zones for the specified load balancer in EC2-Classic or a default VPC.</p> <p>For load balancers in a non-default VPC, use <a>AttachLoadBalancerToSubnets</a>.</p> <p>The load balancer evenly distributes requests across all its registered Availability Zones that contain instances. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-az.html">Add or Remove Availability Zones</a> in the <i>Classic Load Balancers Guide</i>.</p>

<h3 id="getenableavailabilityzonesforloadbalancer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LoadBalancerName|query|string|true|The name of the load balancer.|
|AvailabilityZones|query|[[AvailabilityZone](#schemaavailabilityzone)]|true|The Availability Zones. These must be in the same region as the load balancer.|
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
|Action|EnableAvailabilityZonesForLoadBalancer|
|Version|2012-06-01|

<h3 id="getenableavailabilityzonesforloadbalancer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AddAvailabilityZonesOutput](#schemaaddavailabilityzonesoutput)|
|480|480|AccessPointNotFoundException|[AccessPointNotFoundException](#schemaaccesspointnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_EnableAvailabilityZonesForLoadBalancer

<a id="opIdPOST_EnableAvailabilityZonesForLoadBalancer"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=EnableAvailabilityZonesForLoadBalancer?Action=EnableAvailabilityZonesForLoadBalancer&Version=2012-06-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"LoadBalancerName":{},"AvailabilityZones":{}}'
```

`POST /#Action=EnableAvailabilityZonesForLoadBalancer`

<p>Adds the specified Availability Zones to the set of Availability Zones for the specified load balancer in EC2-Classic or a default VPC.</p> <p>For load balancers in a non-default VPC, use <a>AttachLoadBalancerToSubnets</a>.</p> <p>The load balancer evenly distributes requests across all its registered Availability Zones that contain instances. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-az.html">Add or Remove Availability Zones</a> in the <i>Classic Load Balancers Guide</i>.</p>

> Body parameter

```json
{
  "LoadBalancerName": {},
  "AvailabilityZones": {}
}
```

<h3 id="postenableavailabilityzonesforloadbalancer-parameters">Parameters</h3>

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
|body|body|[AddAvailabilityZonesInput](#schemaaddavailabilityzonesinput)|false|none|
|» LoadBalancerName|body|object|true|none|
|» AvailabilityZones|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|EnableAvailabilityZonesForLoadBalancer|
|Version|2012-06-01|

<h3 id="postenableavailabilityzonesforloadbalancer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AddAvailabilityZonesOutput](#schemaaddavailabilityzonesoutput)|
|480|480|AccessPointNotFoundException|[AccessPointNotFoundException](#schemaaccesspointnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ModifyLoadBalancerAttributes

<a id="opIdGET_ModifyLoadBalancerAttributes"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=ModifyLoadBalancerAttributes?LoadBalancerName=string&CrossZoneLoadBalancing=%7B%22Enabled%22%3A%7B%7D%7D&AccessLog=%7B%22Enabled%22%3A%7B%7D%2C%22S3BucketName%22%3A%7B%7D%2C%22EmitInterval%22%3A%7B%7D%2C%22S3BucketPrefix%22%3A%7B%7D%7D&ConnectionDraining=%7B%22Enabled%22%3A%7B%7D%2C%22Timeout%22%3A%7B%7D%7D&ConnectionSettings=%7B%22IdleTimeout%22%3A%7B%7D%7D&AdditionalAttributes=%7B%7D&Action=ModifyLoadBalancerAttributes&Version=2012-06-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ModifyLoadBalancerAttributes`

<p>Modifies the attributes of the specified load balancer.</p> <p>You can modify the load balancer attributes, such as <code>AccessLogs</code>, <code>ConnectionDraining</code>, and <code>CrossZoneLoadBalancing</code> by either enabling or disabling them. Or, you can modify the load balancer attribute <code>ConnectionSettings</code> by specifying an idle connection timeout value for your load balancer.</p> <p>For more information, see the following in the <i>Classic Load Balancers Guide</i>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-crosszone-lb.html">Cross-Zone Load Balancing</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-conn-drain.html">Connection Draining</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/access-log-collection.html">Access Logs</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-idle-timeout.html">Idle Connection Timeout</a> </p> </li> </ul>

<h3 id="getmodifyloadbalancerattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LoadBalancerName|query|string|true|The name of the load balancer.|
|LoadBalancerAttributes|query|object|true|The attributes for the load balancer.|
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
|Action|ModifyLoadBalancerAttributes|
|Version|2012-06-01|

<h3 id="getmodifyloadbalancerattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyLoadBalancerAttributesOutput](#schemamodifyloadbalancerattributesoutput)|
|480|480|AccessPointNotFoundException|[AccessPointNotFoundException](#schemaaccesspointnotfoundexception)|
|481|481|LoadBalancerAttributeNotFoundException|[LoadBalancerAttributeNotFoundException](#schemaloadbalancerattributenotfoundexception)|
|482|482|InvalidConfigurationRequestException|[InvalidConfigurationRequestException](#schemainvalidconfigurationrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ModifyLoadBalancerAttributes

<a id="opIdPOST_ModifyLoadBalancerAttributes"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=ModifyLoadBalancerAttributes?Action=ModifyLoadBalancerAttributes&Version=2012-06-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"LoadBalancerName":{},"LoadBalancerAttributes":{"CrossZoneLoadBalancing":{"Enabled":{}},"AccessLog":{"Enabled":{},"S3BucketName":{},"EmitInterval":{},"S3BucketPrefix":{}},"ConnectionDraining":{"Enabled":{},"Timeout":{}},"ConnectionSettings":{"IdleTimeout":{}},"AdditionalAttributes":{}}}'
```

`POST /#Action=ModifyLoadBalancerAttributes`

<p>Modifies the attributes of the specified load balancer.</p> <p>You can modify the load balancer attributes, such as <code>AccessLogs</code>, <code>ConnectionDraining</code>, and <code>CrossZoneLoadBalancing</code> by either enabling or disabling them. Or, you can modify the load balancer attribute <code>ConnectionSettings</code> by specifying an idle connection timeout value for your load balancer.</p> <p>For more information, see the following in the <i>Classic Load Balancers Guide</i>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-crosszone-lb.html">Cross-Zone Load Balancing</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-conn-drain.html">Connection Draining</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/access-log-collection.html">Access Logs</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-idle-timeout.html">Idle Connection Timeout</a> </p> </li> </ul>

> Body parameter

```json
{
  "LoadBalancerName": {},
  "LoadBalancerAttributes": {
    "CrossZoneLoadBalancing": {
      "Enabled": {}
    },
    "AccessLog": {
      "Enabled": {},
      "S3BucketName": {},
      "EmitInterval": {},
      "S3BucketPrefix": {}
    },
    "ConnectionDraining": {
      "Enabled": {},
      "Timeout": {}
    },
    "ConnectionSettings": {
      "IdleTimeout": {}
    },
    "AdditionalAttributes": {}
  }
}
```

<h3 id="postmodifyloadbalancerattributes-parameters">Parameters</h3>

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
|body|body|[ModifyLoadBalancerAttributesInput](#schemamodifyloadbalancerattributesinput)|false|none|
|» LoadBalancerName|body|object|true|none|
|» LoadBalancerAttributes|body|object|true|none|
|» » CrossZoneLoadBalancing|body|object|false|none|
|» » » Enabled|body|object|true|none|
|» » AccessLog|body|object|false|none|
|» » » Enabled|body|object|true|none|
|» » » S3BucketName|body|object|false|none|
|» » » EmitInterval|body|object|false|none|
|» » » S3BucketPrefix|body|object|false|none|
|» » ConnectionDraining|body|object|false|none|
|» » » Enabled|body|object|true|none|
|» » » Timeout|body|object|false|none|
|» » ConnectionSettings|body|object|false|none|
|» » » IdleTimeout|body|object|true|none|
|» » AdditionalAttributes|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ModifyLoadBalancerAttributes|
|Version|2012-06-01|

<h3 id="postmodifyloadbalancerattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyLoadBalancerAttributesOutput](#schemamodifyloadbalancerattributesoutput)|
|480|480|AccessPointNotFoundException|[AccessPointNotFoundException](#schemaaccesspointnotfoundexception)|
|481|481|LoadBalancerAttributeNotFoundException|[LoadBalancerAttributeNotFoundException](#schemaloadbalancerattributenotfoundexception)|
|482|482|InvalidConfigurationRequestException|[InvalidConfigurationRequestException](#schemainvalidconfigurationrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_RegisterInstancesWithLoadBalancer

<a id="opIdGET_RegisterInstancesWithLoadBalancer"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=RegisterInstancesWithLoadBalancer?LoadBalancerName=string&Instances=%7B%22InstanceId%22%3A%7B%7D%7D&Action=RegisterInstancesWithLoadBalancer&Version=2012-06-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=RegisterInstancesWithLoadBalancer`

<p>Adds the specified instances to the specified load balancer.</p> <p>The instance must be a running instance in the same network as the load balancer (EC2-Classic or the same VPC). If you have EC2-Classic instances and a load balancer in a VPC with ClassicLink enabled, you can link the EC2-Classic instances to that VPC and then register the linked EC2-Classic instances with the load balancer in the VPC.</p> <p>Note that <code>RegisterInstanceWithLoadBalancer</code> completes when the request has been registered. Instance registration takes a little time to complete. To check the state of the registered instances, use <a>DescribeLoadBalancers</a> or <a>DescribeInstanceHealth</a>.</p> <p>After the instance is registered, it starts receiving traffic and requests from the load balancer. Any instance that is not in one of the Availability Zones registered for the load balancer is moved to the <code>OutOfService</code> state. If an Availability Zone is added to the load balancer later, any instances registered with the load balancer move to the <code>InService</code> state.</p> <p>To deregister instances from a load balancer, use <a>DeregisterInstancesFromLoadBalancer</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-deregister-register-instances.html">Register or De-Register EC2 Instances</a> in the <i>Classic Load Balancers Guide</i>.</p>

<h3 id="getregisterinstanceswithloadbalancer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LoadBalancerName|query|string|true|The name of the load balancer.|
|Instances|query|[[Instance](#schemainstance)]|true|The IDs of the instances.|
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
|Action|RegisterInstancesWithLoadBalancer|
|Version|2012-06-01|

<h3 id="getregisterinstanceswithloadbalancer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RegisterEndPointsOutput](#schemaregisterendpointsoutput)|
|480|480|AccessPointNotFoundException|[AccessPointNotFoundException](#schemaaccesspointnotfoundexception)|
|481|481|InvalidEndPointException|[InvalidEndPointException](#schemainvalidendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_RegisterInstancesWithLoadBalancer

<a id="opIdPOST_RegisterInstancesWithLoadBalancer"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=RegisterInstancesWithLoadBalancer?Action=RegisterInstancesWithLoadBalancer&Version=2012-06-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"LoadBalancerName":{},"Instances":{}}'
```

`POST /#Action=RegisterInstancesWithLoadBalancer`

<p>Adds the specified instances to the specified load balancer.</p> <p>The instance must be a running instance in the same network as the load balancer (EC2-Classic or the same VPC). If you have EC2-Classic instances and a load balancer in a VPC with ClassicLink enabled, you can link the EC2-Classic instances to that VPC and then register the linked EC2-Classic instances with the load balancer in the VPC.</p> <p>Note that <code>RegisterInstanceWithLoadBalancer</code> completes when the request has been registered. Instance registration takes a little time to complete. To check the state of the registered instances, use <a>DescribeLoadBalancers</a> or <a>DescribeInstanceHealth</a>.</p> <p>After the instance is registered, it starts receiving traffic and requests from the load balancer. Any instance that is not in one of the Availability Zones registered for the load balancer is moved to the <code>OutOfService</code> state. If an Availability Zone is added to the load balancer later, any instances registered with the load balancer move to the <code>InService</code> state.</p> <p>To deregister instances from a load balancer, use <a>DeregisterInstancesFromLoadBalancer</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-deregister-register-instances.html">Register or De-Register EC2 Instances</a> in the <i>Classic Load Balancers Guide</i>.</p>

> Body parameter

```json
{
  "LoadBalancerName": {},
  "Instances": {}
}
```

<h3 id="postregisterinstanceswithloadbalancer-parameters">Parameters</h3>

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
|body|body|[RegisterEndPointsInput](#schemaregisterendpointsinput)|false|none|
|» LoadBalancerName|body|object|true|none|
|» Instances|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|RegisterInstancesWithLoadBalancer|
|Version|2012-06-01|

<h3 id="postregisterinstanceswithloadbalancer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RegisterEndPointsOutput](#schemaregisterendpointsoutput)|
|480|480|AccessPointNotFoundException|[AccessPointNotFoundException](#schemaaccesspointnotfoundexception)|
|481|481|InvalidEndPointException|[InvalidEndPointException](#schemainvalidendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_RemoveTags

<a id="opIdGET_RemoveTags"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=RemoveTags?LoadBalancerNames=string&Tags=%7B%22Key%22%3A%7B%7D%7D&Action=RemoveTags&Version=2012-06-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=RemoveTags`

Removes one or more tags from the specified load balancer.

<h3 id="getremovetags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LoadBalancerNames|query|[[AccessPointName](#schemaaccesspointname)]|true|The name of the load balancer. You can specify a maximum of one load balancer name.|
|Tags|query|[[TagKeyOnly](#schematagkeyonly)]|true|The list of tag keys to remove.|
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
|Action|RemoveTags|
|Version|2012-06-01|

<h3 id="getremovetags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RemoveTagsOutput](#schemaremovetagsoutput)|
|480|480|AccessPointNotFoundException|[AccessPointNotFoundException](#schemaaccesspointnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_RemoveTags

<a id="opIdPOST_RemoveTags"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=RemoveTags?Action=RemoveTags&Version=2012-06-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"LoadBalancerNames":{},"Tags":{}}'
```

`POST /#Action=RemoveTags`

Removes one or more tags from the specified load balancer.

> Body parameter

```json
{
  "LoadBalancerNames": {},
  "Tags": {}
}
```

<h3 id="postremovetags-parameters">Parameters</h3>

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
|body|body|[RemoveTagsInput](#schemaremovetagsinput)|false|none|
|» LoadBalancerNames|body|object|true|none|
|» Tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|RemoveTags|
|Version|2012-06-01|

<h3 id="postremovetags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RemoveTagsOutput](#schemaremovetagsoutput)|
|480|480|AccessPointNotFoundException|[AccessPointNotFoundException](#schemaaccesspointnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_SetLoadBalancerListenerSSLCertificate

<a id="opIdGET_SetLoadBalancerListenerSSLCertificate"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=SetLoadBalancerListenerSSLCertificate?LoadBalancerName=string&LoadBalancerPort=0&SSLCertificateId=string&Action=SetLoadBalancerListenerSSLCertificate&Version=2012-06-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=SetLoadBalancerListenerSSLCertificate`

<p>Sets the certificate that terminates the specified listener's SSL connections. The specified certificate replaces any prior certificate that was used on the same load balancer and port.</p> <p>For more information about updating your SSL certificate, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-update-ssl-cert.html">Replace the SSL Certificate for Your Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>

<h3 id="getsetloadbalancerlistenersslcertificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LoadBalancerName|query|string|true|The name of the load balancer.|
|LoadBalancerPort|query|integer|true|The port that uses the specified SSL certificate.|
|SSLCertificateId|query|string|true|The Amazon Resource Name (ARN) of the SSL certificate.|
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
|Action|SetLoadBalancerListenerSSLCertificate|
|Version|2012-06-01|

<h3 id="getsetloadbalancerlistenersslcertificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SetLoadBalancerListenerSSLCertificateOutput](#schemasetloadbalancerlistenersslcertificateoutput)|
|480|480|CertificateNotFoundException|[CertificateNotFoundException](#schemacertificatenotfoundexception)|
|481|481|AccessPointNotFoundException|[AccessPointNotFoundException](#schemaaccesspointnotfoundexception)|
|482|482|ListenerNotFoundException|[ListenerNotFoundException](#schemalistenernotfoundexception)|
|483|483|InvalidConfigurationRequestException|[InvalidConfigurationRequestException](#schemainvalidconfigurationrequestexception)|
|484|484|UnsupportedProtocolException|[UnsupportedProtocolException](#schemaunsupportedprotocolexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_SetLoadBalancerListenerSSLCertificate

<a id="opIdPOST_SetLoadBalancerListenerSSLCertificate"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=SetLoadBalancerListenerSSLCertificate?Action=SetLoadBalancerListenerSSLCertificate&Version=2012-06-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"LoadBalancerName":{},"LoadBalancerPort":{},"SSLCertificateId":{}}'
```

`POST /#Action=SetLoadBalancerListenerSSLCertificate`

<p>Sets the certificate that terminates the specified listener's SSL connections. The specified certificate replaces any prior certificate that was used on the same load balancer and port.</p> <p>For more information about updating your SSL certificate, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-update-ssl-cert.html">Replace the SSL Certificate for Your Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>

> Body parameter

```json
{
  "LoadBalancerName": {},
  "LoadBalancerPort": {},
  "SSLCertificateId": {}
}
```

<h3 id="postsetloadbalancerlistenersslcertificate-parameters">Parameters</h3>

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
|body|body|[SetLoadBalancerListenerSSLCertificateInput](#schemasetloadbalancerlistenersslcertificateinput)|false|none|
|» LoadBalancerName|body|object|true|none|
|» LoadBalancerPort|body|object|true|none|
|» SSLCertificateId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|SetLoadBalancerListenerSSLCertificate|
|Version|2012-06-01|

<h3 id="postsetloadbalancerlistenersslcertificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SetLoadBalancerListenerSSLCertificateOutput](#schemasetloadbalancerlistenersslcertificateoutput)|
|480|480|CertificateNotFoundException|[CertificateNotFoundException](#schemacertificatenotfoundexception)|
|481|481|AccessPointNotFoundException|[AccessPointNotFoundException](#schemaaccesspointnotfoundexception)|
|482|482|ListenerNotFoundException|[ListenerNotFoundException](#schemalistenernotfoundexception)|
|483|483|InvalidConfigurationRequestException|[InvalidConfigurationRequestException](#schemainvalidconfigurationrequestexception)|
|484|484|UnsupportedProtocolException|[UnsupportedProtocolException](#schemaunsupportedprotocolexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_SetLoadBalancerPoliciesForBackendServer

<a id="opIdGET_SetLoadBalancerPoliciesForBackendServer"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=SetLoadBalancerPoliciesForBackendServer?LoadBalancerName=string&InstancePort=0&PolicyNames=string&Action=SetLoadBalancerPoliciesForBackendServer&Version=2012-06-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=SetLoadBalancerPoliciesForBackendServer`

<p>Replaces the set of policies associated with the specified port on which the EC2 instance is listening with a new set of policies. At this time, only the back-end server authentication policy type can be applied to the instance ports; this policy type is composed of multiple public key policies.</p> <p>Each time you use <code>SetLoadBalancerPoliciesForBackendServer</code> to enable the policies, use the <code>PolicyNames</code> parameter to list the policies that you want to enable.</p> <p>You can use <a>DescribeLoadBalancers</a> or <a>DescribeLoadBalancerPolicies</a> to verify that the policy is associated with the EC2 instance.</p> <p>For more information about enabling back-end instance authentication, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-create-https-ssl-load-balancer.html#configure_backendauth_clt">Configure Back-end Instance Authentication</a> in the <i>Classic Load Balancers Guide</i>. For more information about Proxy Protocol, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-proxy-protocol.html">Configure Proxy Protocol Support</a> in the <i>Classic Load Balancers Guide</i>.</p>

<h3 id="getsetloadbalancerpoliciesforbackendserver-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LoadBalancerName|query|string|true|The name of the load balancer.|
|InstancePort|query|integer|true|The port number associated with the EC2 instance.|
|PolicyNames|query|[[PolicyName](#schemapolicyname)]|true|The names of the policies. If the list is empty, then all current polices are removed from the EC2 instance.|
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
|Action|SetLoadBalancerPoliciesForBackendServer|
|Version|2012-06-01|

<h3 id="getsetloadbalancerpoliciesforbackendserver-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SetLoadBalancerPoliciesForBackendServerOutput](#schemasetloadbalancerpoliciesforbackendserveroutput)|
|480|480|AccessPointNotFoundException|[AccessPointNotFoundException](#schemaaccesspointnotfoundexception)|
|481|481|PolicyNotFoundException|[PolicyNotFoundException](#schemapolicynotfoundexception)|
|482|482|InvalidConfigurationRequestException|[InvalidConfigurationRequestException](#schemainvalidconfigurationrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_SetLoadBalancerPoliciesForBackendServer

<a id="opIdPOST_SetLoadBalancerPoliciesForBackendServer"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=SetLoadBalancerPoliciesForBackendServer?Action=SetLoadBalancerPoliciesForBackendServer&Version=2012-06-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"LoadBalancerName":{},"InstancePort":{},"PolicyNames":{}}'
```

`POST /#Action=SetLoadBalancerPoliciesForBackendServer`

<p>Replaces the set of policies associated with the specified port on which the EC2 instance is listening with a new set of policies. At this time, only the back-end server authentication policy type can be applied to the instance ports; this policy type is composed of multiple public key policies.</p> <p>Each time you use <code>SetLoadBalancerPoliciesForBackendServer</code> to enable the policies, use the <code>PolicyNames</code> parameter to list the policies that you want to enable.</p> <p>You can use <a>DescribeLoadBalancers</a> or <a>DescribeLoadBalancerPolicies</a> to verify that the policy is associated with the EC2 instance.</p> <p>For more information about enabling back-end instance authentication, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-create-https-ssl-load-balancer.html#configure_backendauth_clt">Configure Back-end Instance Authentication</a> in the <i>Classic Load Balancers Guide</i>. For more information about Proxy Protocol, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-proxy-protocol.html">Configure Proxy Protocol Support</a> in the <i>Classic Load Balancers Guide</i>.</p>

> Body parameter

```json
{
  "LoadBalancerName": {},
  "InstancePort": {},
  "PolicyNames": {}
}
```

<h3 id="postsetloadbalancerpoliciesforbackendserver-parameters">Parameters</h3>

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
|body|body|[SetLoadBalancerPoliciesForBackendServerInput](#schemasetloadbalancerpoliciesforbackendserverinput)|false|none|
|» LoadBalancerName|body|object|true|none|
|» InstancePort|body|object|true|none|
|» PolicyNames|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|SetLoadBalancerPoliciesForBackendServer|
|Version|2012-06-01|

<h3 id="postsetloadbalancerpoliciesforbackendserver-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SetLoadBalancerPoliciesForBackendServerOutput](#schemasetloadbalancerpoliciesforbackendserveroutput)|
|480|480|AccessPointNotFoundException|[AccessPointNotFoundException](#schemaaccesspointnotfoundexception)|
|481|481|PolicyNotFoundException|[PolicyNotFoundException](#schemapolicynotfoundexception)|
|482|482|InvalidConfigurationRequestException|[InvalidConfigurationRequestException](#schemainvalidconfigurationrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_SetLoadBalancerPoliciesOfListener

<a id="opIdGET_SetLoadBalancerPoliciesOfListener"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=SetLoadBalancerPoliciesOfListener?LoadBalancerName=string&LoadBalancerPort=0&PolicyNames=string&Action=SetLoadBalancerPoliciesOfListener&Version=2012-06-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=SetLoadBalancerPoliciesOfListener`

<p>Replaces the current set of policies for the specified load balancer port with the specified set of policies.</p> <p>To enable back-end server authentication, use <a>SetLoadBalancerPoliciesForBackendServer</a>.</p> <p>For more information about setting policies, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/ssl-config-update.html">Update the SSL Negotiation Configuration</a>, <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-duration">Duration-Based Session Stickiness</a>, and <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-application">Application-Controlled Session Stickiness</a> in the <i>Classic Load Balancers Guide</i>.</p>

<h3 id="getsetloadbalancerpoliciesoflistener-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LoadBalancerName|query|string|true|The name of the load balancer.|
|LoadBalancerPort|query|integer|true|The external port of the load balancer.|
|PolicyNames|query|[[PolicyName](#schemapolicyname)]|true|The names of the policies. This list must include all policies to be enabled. If you omit a policy that is currently enabled, it is disabled. If the list is empty, all current policies are disabled.|
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
|Action|SetLoadBalancerPoliciesOfListener|
|Version|2012-06-01|

<h3 id="getsetloadbalancerpoliciesoflistener-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SetLoadBalancerPoliciesOfListenerOutput](#schemasetloadbalancerpoliciesoflisteneroutput)|
|480|480|AccessPointNotFoundException|[AccessPointNotFoundException](#schemaaccesspointnotfoundexception)|
|481|481|PolicyNotFoundException|[PolicyNotFoundException](#schemapolicynotfoundexception)|
|482|482|ListenerNotFoundException|[ListenerNotFoundException](#schemalistenernotfoundexception)|
|483|483|InvalidConfigurationRequestException|[InvalidConfigurationRequestException](#schemainvalidconfigurationrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_SetLoadBalancerPoliciesOfListener

<a id="opIdPOST_SetLoadBalancerPoliciesOfListener"></a>

> Code samples

```bash
curl 'https://elasticloadbalancing.us-east-1.amazonaws.com/#Action=SetLoadBalancerPoliciesOfListener?Action=SetLoadBalancerPoliciesOfListener&Version=2012-06-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"LoadBalancerName":{},"LoadBalancerPort":{},"PolicyNames":{}}'
```

`POST /#Action=SetLoadBalancerPoliciesOfListener`

<p>Replaces the current set of policies for the specified load balancer port with the specified set of policies.</p> <p>To enable back-end server authentication, use <a>SetLoadBalancerPoliciesForBackendServer</a>.</p> <p>For more information about setting policies, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/ssl-config-update.html">Update the SSL Negotiation Configuration</a>, <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-duration">Duration-Based Session Stickiness</a>, and <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-application">Application-Controlled Session Stickiness</a> in the <i>Classic Load Balancers Guide</i>.</p>

> Body parameter

```json
{
  "LoadBalancerName": {},
  "LoadBalancerPort": {},
  "PolicyNames": {}
}
```

<h3 id="postsetloadbalancerpoliciesoflistener-parameters">Parameters</h3>

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
|body|body|[SetLoadBalancerPoliciesOfListenerInput](#schemasetloadbalancerpoliciesoflistenerinput)|false|none|
|» LoadBalancerName|body|object|true|none|
|» LoadBalancerPort|body|object|true|none|
|» PolicyNames|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|SetLoadBalancerPoliciesOfListener|
|Version|2012-06-01|

<h3 id="postsetloadbalancerpoliciesoflistener-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SetLoadBalancerPoliciesOfListenerOutput](#schemasetloadbalancerpoliciesoflisteneroutput)|
|480|480|AccessPointNotFoundException|[AccessPointNotFoundException](#schemaaccesspointnotfoundexception)|
|481|481|PolicyNotFoundException|[PolicyNotFoundException](#schemapolicynotfoundexception)|
|482|482|ListenerNotFoundException|[ListenerNotFoundException](#schemalistenernotfoundexception)|
|483|483|InvalidConfigurationRequestException|[InvalidConfigurationRequestException](#schemainvalidconfigurationrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AddTagsOutput">AddTagsOutput</h2>
<!-- backwards compatibility -->
<a id="schemaaddtagsoutput"></a>
<a id="schema_AddTagsOutput"></a>
<a id="tocSaddtagsoutput"></a>
<a id="tocsaddtagsoutput"></a>

```json
{}
```

Contains the output of AddTags.

<h2 id="tocS_AccessPointName">AccessPointName</h2>
<!-- backwards compatibility -->
<a id="schemaaccesspointname"></a>
<a id="schema_AccessPointName"></a>
<a id="tocSaccesspointname"></a>
<a id="tocsaccesspointname"></a>

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

Information about a tag.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|false|none|none|

<h2 id="tocS_AccessPointNotFoundException">AccessPointNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaaccesspointnotfoundexception"></a>
<a id="schema_AccessPointNotFoundException"></a>
<a id="tocSaccesspointnotfoundexception"></a>
<a id="tocsaccesspointnotfoundexception"></a>

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

<h2 id="tocS_DuplicateTagKeysException">DuplicateTagKeysException</h2>
<!-- backwards compatibility -->
<a id="schemaduplicatetagkeysexception"></a>
<a id="schema_DuplicateTagKeysException"></a>
<a id="tocSduplicatetagkeysexception"></a>
<a id="tocsduplicatetagkeysexception"></a>

```json
null
```

<h2 id="tocS_ApplySecurityGroupsToLoadBalancerOutput">ApplySecurityGroupsToLoadBalancerOutput</h2>
<!-- backwards compatibility -->
<a id="schemaapplysecuritygroupstoloadbalanceroutput"></a>
<a id="schema_ApplySecurityGroupsToLoadBalancerOutput"></a>
<a id="tocSapplysecuritygroupstoloadbalanceroutput"></a>
<a id="tocsapplysecuritygroupstoloadbalanceroutput"></a>

```json
{
  "SecurityGroups": [
    "sg-fc448899"
  ]
}
```

Contains the output of ApplySecurityGroupsToLoadBalancer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SecurityGroups|object|false|none|none|

<h2 id="tocS_SecurityGroupId">SecurityGroupId</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroupid"></a>
<a id="schema_SecurityGroupId"></a>
<a id="tocSsecuritygroupid"></a>
<a id="tocssecuritygroupid"></a>

```json
"string"
```

<h2 id="tocS_InvalidConfigurationRequestException">InvalidConfigurationRequestException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidconfigurationrequestexception"></a>
<a id="schema_InvalidConfigurationRequestException"></a>
<a id="tocSinvalidconfigurationrequestexception"></a>
<a id="tocsinvalidconfigurationrequestexception"></a>

```json
null
```

<h2 id="tocS_InvalidSecurityGroupException">InvalidSecurityGroupException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidsecuritygroupexception"></a>
<a id="schema_InvalidSecurityGroupException"></a>
<a id="tocSinvalidsecuritygroupexception"></a>
<a id="tocsinvalidsecuritygroupexception"></a>

```json
null
```

<h2 id="tocS_AttachLoadBalancerToSubnetsOutput">AttachLoadBalancerToSubnetsOutput</h2>
<!-- backwards compatibility -->
<a id="schemaattachloadbalancertosubnetsoutput"></a>
<a id="schema_AttachLoadBalancerToSubnetsOutput"></a>
<a id="tocSattachloadbalancertosubnetsoutput"></a>
<a id="tocsattachloadbalancertosubnetsoutput"></a>

```json
{
  "Subnets": [
    "subnet-15aaab61",
    "subnet-0ecac448"
  ]
}
```

Contains the output of AttachLoadBalancerToSubnets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Subnets|object|false|none|none|

<h2 id="tocS_SubnetId">SubnetId</h2>
<!-- backwards compatibility -->
<a id="schemasubnetid"></a>
<a id="schema_SubnetId"></a>
<a id="tocSsubnetid"></a>
<a id="tocssubnetid"></a>

```json
"string"
```

<h2 id="tocS_SubnetNotFoundException">SubnetNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemasubnetnotfoundexception"></a>
<a id="schema_SubnetNotFoundException"></a>
<a id="tocSsubnetnotfoundexception"></a>
<a id="tocssubnetnotfoundexception"></a>

```json
null
```

<h2 id="tocS_InvalidSubnetException">InvalidSubnetException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidsubnetexception"></a>
<a id="schema_InvalidSubnetException"></a>
<a id="tocSinvalidsubnetexception"></a>
<a id="tocsinvalidsubnetexception"></a>

```json
null
```

<h2 id="tocS_ConfigureHealthCheckOutput">ConfigureHealthCheckOutput</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurehealthcheckoutput"></a>
<a id="schema_ConfigureHealthCheckOutput"></a>
<a id="tocSconfigurehealthcheckoutput"></a>
<a id="tocsconfigurehealthcheckoutput"></a>

```json
{
  "HealthCheck": {
    "HealthyThreshold": 2,
    "Interval": 30,
    "Target": "HTTP:80/png",
    "Timeout": 3,
    "UnhealthyThreshold": 2
  }
}
```

Contains the output of ConfigureHealthCheck.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HealthCheck|object|false|none|none|

<h2 id="tocS_HealthCheckTarget">HealthCheckTarget</h2>
<!-- backwards compatibility -->
<a id="schemahealthchecktarget"></a>
<a id="schema_HealthCheckTarget"></a>
<a id="tocShealthchecktarget"></a>
<a id="tocshealthchecktarget"></a>

```json
"string"
```

<h2 id="tocS_HealthCheckInterval">HealthCheckInterval</h2>
<!-- backwards compatibility -->
<a id="schemahealthcheckinterval"></a>
<a id="schema_HealthCheckInterval"></a>
<a id="tocShealthcheckinterval"></a>
<a id="tocshealthcheckinterval"></a>

```json
5
```

<h2 id="tocS_HealthCheckTimeout">HealthCheckTimeout</h2>
<!-- backwards compatibility -->
<a id="schemahealthchecktimeout"></a>
<a id="schema_HealthCheckTimeout"></a>
<a id="tocShealthchecktimeout"></a>
<a id="tocshealthchecktimeout"></a>

```json
2
```

<h2 id="tocS_UnhealthyThreshold">UnhealthyThreshold</h2>
<!-- backwards compatibility -->
<a id="schemaunhealthythreshold"></a>
<a id="schema_UnhealthyThreshold"></a>
<a id="tocSunhealthythreshold"></a>
<a id="tocsunhealthythreshold"></a>

```json
2
```

<h2 id="tocS_HealthyThreshold">HealthyThreshold</h2>
<!-- backwards compatibility -->
<a id="schemahealthythreshold"></a>
<a id="schema_HealthyThreshold"></a>
<a id="tocShealthythreshold"></a>
<a id="tocshealthythreshold"></a>

```json
2
```

<h2 id="tocS_CreateAppCookieStickinessPolicyOutput">CreateAppCookieStickinessPolicyOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreateappcookiestickinesspolicyoutput"></a>
<a id="schema_CreateAppCookieStickinessPolicyOutput"></a>
<a id="tocScreateappcookiestickinesspolicyoutput"></a>
<a id="tocscreateappcookiestickinesspolicyoutput"></a>

```json
{}
```

Contains the output for CreateAppCookieStickinessPolicy.

<h2 id="tocS_DuplicatePolicyNameException">DuplicatePolicyNameException</h2>
<!-- backwards compatibility -->
<a id="schemaduplicatepolicynameexception"></a>
<a id="schema_DuplicatePolicyNameException"></a>
<a id="tocSduplicatepolicynameexception"></a>
<a id="tocsduplicatepolicynameexception"></a>

```json
null
```

<h2 id="tocS_TooManyPoliciesException">TooManyPoliciesException</h2>
<!-- backwards compatibility -->
<a id="schematoomanypoliciesexception"></a>
<a id="schema_TooManyPoliciesException"></a>
<a id="tocStoomanypoliciesexception"></a>
<a id="tocstoomanypoliciesexception"></a>

```json
null
```

<h2 id="tocS_CreateLBCookieStickinessPolicyOutput">CreateLBCookieStickinessPolicyOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatelbcookiestickinesspolicyoutput"></a>
<a id="schema_CreateLBCookieStickinessPolicyOutput"></a>
<a id="tocScreatelbcookiestickinesspolicyoutput"></a>
<a id="tocscreatelbcookiestickinesspolicyoutput"></a>

```json
{}
```

Contains the output for CreateLBCookieStickinessPolicy.

<h2 id="tocS_CreateAccessPointOutput">CreateAccessPointOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreateaccesspointoutput"></a>
<a id="schema_CreateAccessPointOutput"></a>
<a id="tocScreateaccesspointoutput"></a>
<a id="tocscreateaccesspointoutput"></a>

```json
{
  "DNSName": "internal-my-load-balancer-123456789.us-west-2.elb.amazonaws.com"
}
```

Contains the output for CreateLoadBalancer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DNSName|object|false|none|none|

<h2 id="tocS_Listener">Listener</h2>
<!-- backwards compatibility -->
<a id="schemalistener"></a>
<a id="schema_Listener"></a>
<a id="tocSlistener"></a>
<a id="tocslistener"></a>

```json
{
  "Protocol": {},
  "LoadBalancerPort": {},
  "InstanceProtocol": {},
  "InstancePort": {},
  "SSLCertificateId": {}
}
```

<p>Information about a listener.</p> <p>For information about the protocols and the ports supported by Elastic Load Balancing, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html">Listeners for Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Protocol|object|true|none|none|
|LoadBalancerPort|object|true|none|none|
|InstanceProtocol|object|false|none|none|
|InstancePort|object|true|none|none|
|SSLCertificateId|object|false|none|none|

<h2 id="tocS_AvailabilityZone">AvailabilityZone</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilityzone"></a>
<a id="schema_AvailabilityZone"></a>
<a id="tocSavailabilityzone"></a>
<a id="tocsavailabilityzone"></a>

```json
"string"
```

<h2 id="tocS_DuplicateAccessPointNameException">DuplicateAccessPointNameException</h2>
<!-- backwards compatibility -->
<a id="schemaduplicateaccesspointnameexception"></a>
<a id="schema_DuplicateAccessPointNameException"></a>
<a id="tocSduplicateaccesspointnameexception"></a>
<a id="tocsduplicateaccesspointnameexception"></a>

```json
null
```

<h2 id="tocS_TooManyAccessPointsException">TooManyAccessPointsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanyaccesspointsexception"></a>
<a id="schema_TooManyAccessPointsException"></a>
<a id="tocStoomanyaccesspointsexception"></a>
<a id="tocstoomanyaccesspointsexception"></a>

```json
null
```

<h2 id="tocS_CertificateNotFoundException">CertificateNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemacertificatenotfoundexception"></a>
<a id="schema_CertificateNotFoundException"></a>
<a id="tocScertificatenotfoundexception"></a>
<a id="tocscertificatenotfoundexception"></a>

```json
null
```

<h2 id="tocS_InvalidSchemeException">InvalidSchemeException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidschemeexception"></a>
<a id="schema_InvalidSchemeException"></a>
<a id="tocSinvalidschemeexception"></a>
<a id="tocsinvalidschemeexception"></a>

```json
null
```

<h2 id="tocS_UnsupportedProtocolException">UnsupportedProtocolException</h2>
<!-- backwards compatibility -->
<a id="schemaunsupportedprotocolexception"></a>
<a id="schema_UnsupportedProtocolException"></a>
<a id="tocSunsupportedprotocolexception"></a>
<a id="tocsunsupportedprotocolexception"></a>

```json
null
```

<h2 id="tocS_OperationNotPermittedException">OperationNotPermittedException</h2>
<!-- backwards compatibility -->
<a id="schemaoperationnotpermittedexception"></a>
<a id="schema_OperationNotPermittedException"></a>
<a id="tocSoperationnotpermittedexception"></a>
<a id="tocsoperationnotpermittedexception"></a>

```json
null
```

<h2 id="tocS_CreateLoadBalancerListenerOutput">CreateLoadBalancerListenerOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreateloadbalancerlisteneroutput"></a>
<a id="schema_CreateLoadBalancerListenerOutput"></a>
<a id="tocScreateloadbalancerlisteneroutput"></a>
<a id="tocscreateloadbalancerlisteneroutput"></a>

```json
{}
```

Contains the parameters for CreateLoadBalancerListener.

<h2 id="tocS_DuplicateListenerException">DuplicateListenerException</h2>
<!-- backwards compatibility -->
<a id="schemaduplicatelistenerexception"></a>
<a id="schema_DuplicateListenerException"></a>
<a id="tocSduplicatelistenerexception"></a>
<a id="tocsduplicatelistenerexception"></a>

```json
null
```

<h2 id="tocS_CreateLoadBalancerPolicyOutput">CreateLoadBalancerPolicyOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreateloadbalancerpolicyoutput"></a>
<a id="schema_CreateLoadBalancerPolicyOutput"></a>
<a id="tocScreateloadbalancerpolicyoutput"></a>
<a id="tocscreateloadbalancerpolicyoutput"></a>

```json
{}
```

Contains the output of CreateLoadBalancerPolicy.

<h2 id="tocS_PolicyAttribute">PolicyAttribute</h2>
<!-- backwards compatibility -->
<a id="schemapolicyattribute"></a>
<a id="schema_PolicyAttribute"></a>
<a id="tocSpolicyattribute"></a>
<a id="tocspolicyattribute"></a>

```json
{
  "AttributeName": {},
  "AttributeValue": {}
}
```

Information about a policy attribute.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttributeName|object|false|none|none|
|AttributeValue|object|false|none|none|

<h2 id="tocS_PolicyTypeNotFoundException">PolicyTypeNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemapolicytypenotfoundexception"></a>
<a id="schema_PolicyTypeNotFoundException"></a>
<a id="tocSpolicytypenotfoundexception"></a>
<a id="tocspolicytypenotfoundexception"></a>

```json
null
```

<h2 id="tocS_DeleteAccessPointOutput">DeleteAccessPointOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteaccesspointoutput"></a>
<a id="schema_DeleteAccessPointOutput"></a>
<a id="tocSdeleteaccesspointoutput"></a>
<a id="tocsdeleteaccesspointoutput"></a>

```json
{}
```

Contains the output of DeleteLoadBalancer.

<h2 id="tocS_DeleteLoadBalancerListenerOutput">DeleteLoadBalancerListenerOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteloadbalancerlisteneroutput"></a>
<a id="schema_DeleteLoadBalancerListenerOutput"></a>
<a id="tocSdeleteloadbalancerlisteneroutput"></a>
<a id="tocsdeleteloadbalancerlisteneroutput"></a>

```json
{}
```

Contains the output of DeleteLoadBalancerListeners.

<h2 id="tocS_AccessPointPort">AccessPointPort</h2>
<!-- backwards compatibility -->
<a id="schemaaccesspointport"></a>
<a id="schema_AccessPointPort"></a>
<a id="tocSaccesspointport"></a>
<a id="tocsaccesspointport"></a>

```json
0
```

<h2 id="tocS_DeleteLoadBalancerPolicyOutput">DeleteLoadBalancerPolicyOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteloadbalancerpolicyoutput"></a>
<a id="schema_DeleteLoadBalancerPolicyOutput"></a>
<a id="tocSdeleteloadbalancerpolicyoutput"></a>
<a id="tocsdeleteloadbalancerpolicyoutput"></a>

```json
{}
```

Contains the output of DeleteLoadBalancerPolicy.

<h2 id="tocS_DeregisterEndPointsOutput">DeregisterEndPointsOutput</h2>
<!-- backwards compatibility -->
<a id="schemaderegisterendpointsoutput"></a>
<a id="schema_DeregisterEndPointsOutput"></a>
<a id="tocSderegisterendpointsoutput"></a>
<a id="tocsderegisterendpointsoutput"></a>

```json
{
  "Instances": [
    {
      "InstanceId": "i-207d9717"
    },
    {
      "InstanceId": "i-afefb49b"
    }
  ]
}
```

Contains the output of DeregisterInstancesFromLoadBalancer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Instances|object|false|none|none|

<h2 id="tocS_Instance">Instance</h2>
<!-- backwards compatibility -->
<a id="schemainstance"></a>
<a id="schema_Instance"></a>
<a id="tocSinstance"></a>
<a id="tocsinstance"></a>

```json
{
  "InstanceId": {}
}
```

The ID of an EC2 instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|false|none|none|

<h2 id="tocS_InvalidEndPointException">InvalidEndPointException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidendpointexception"></a>
<a id="schema_InvalidEndPointException"></a>
<a id="tocSinvalidendpointexception"></a>
<a id="tocsinvalidendpointexception"></a>

```json
null
```

<h2 id="tocS_DescribeAccountLimitsOutput">DescribeAccountLimitsOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaccountlimitsoutput"></a>
<a id="schema_DescribeAccountLimitsOutput"></a>
<a id="tocSdescribeaccountlimitsoutput"></a>
<a id="tocsdescribeaccountlimitsoutput"></a>

```json
{
  "Limits": {},
  "NextMarker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Limits|object|false|none|none|
|NextMarker|object|false|none|none|

<h2 id="tocS_DescribeEndPointStateOutput">DescribeEndPointStateOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeendpointstateoutput"></a>
<a id="schema_DescribeEndPointStateOutput"></a>
<a id="tocSdescribeendpointstateoutput"></a>
<a id="tocsdescribeendpointstateoutput"></a>

```json
{
  "InstanceStates": [
    {
      "Description": "N/A",
      "InstanceId": "i-207d9717",
      "ReasonCode": "N/A",
      "State": "InService"
    },
    {
      "Description": "N/A",
      "InstanceId": "i-afefb49b",
      "ReasonCode": "N/A",
      "State": "InService"
    }
  ]
}
```

Contains the output for DescribeInstanceHealth.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceStates|object|false|none|none|

<h2 id="tocS_DescribeLoadBalancerAttributesOutput">DescribeLoadBalancerAttributesOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeloadbalancerattributesoutput"></a>
<a id="schema_DescribeLoadBalancerAttributesOutput"></a>
<a id="tocSdescribeloadbalancerattributesoutput"></a>
<a id="tocsdescribeloadbalancerattributesoutput"></a>

```json
{
  "LoadBalancerAttributes": {
    "AccessLog": {
      "Enabled": false
    },
    "ConnectionDraining": {
      "Enabled": false,
      "Timeout": 300
    },
    "ConnectionSettings": {
      "IdleTimeout": 60
    },
    "CrossZoneLoadBalancing": {
      "Enabled": false
    }
  }
}
```

Contains the output of DescribeLoadBalancerAttributes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadBalancerAttributes|object|false|none|none|

<h2 id="tocS_LoadBalancerAttributeNotFoundException">LoadBalancerAttributeNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancerattributenotfoundexception"></a>
<a id="schema_LoadBalancerAttributeNotFoundException"></a>
<a id="tocSloadbalancerattributenotfoundexception"></a>
<a id="tocsloadbalancerattributenotfoundexception"></a>

```json
null
```

<h2 id="tocS_DescribeLoadBalancerPoliciesOutput">DescribeLoadBalancerPoliciesOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeloadbalancerpoliciesoutput"></a>
<a id="schema_DescribeLoadBalancerPoliciesOutput"></a>
<a id="tocSdescribeloadbalancerpoliciesoutput"></a>
<a id="tocsdescribeloadbalancerpoliciesoutput"></a>

```json
{
  "PolicyDescriptions": [
    {
      "PolicyAttributeDescriptions": [
        {
          "AttributeName": "PublicKeyPolicyName",
          "AttributeValue": "my-PublicKey-policy"
        }
      ],
      "PolicyName": "my-authentication-policy",
      "PolicyTypeName": "BackendServerAuthenticationPolicyType"
    }
  ]
}
```

Contains the output of DescribeLoadBalancerPolicies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyDescriptions|object|false|none|none|

<h2 id="tocS_PolicyName">PolicyName</h2>
<!-- backwards compatibility -->
<a id="schemapolicyname"></a>
<a id="schema_PolicyName"></a>
<a id="tocSpolicyname"></a>
<a id="tocspolicyname"></a>

```json
"string"
```

<h2 id="tocS_PolicyNotFoundException">PolicyNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemapolicynotfoundexception"></a>
<a id="schema_PolicyNotFoundException"></a>
<a id="tocSpolicynotfoundexception"></a>
<a id="tocspolicynotfoundexception"></a>

```json
null
```

<h2 id="tocS_DescribeLoadBalancerPolicyTypesOutput">DescribeLoadBalancerPolicyTypesOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeloadbalancerpolicytypesoutput"></a>
<a id="schema_DescribeLoadBalancerPolicyTypesOutput"></a>
<a id="tocSdescribeloadbalancerpolicytypesoutput"></a>
<a id="tocsdescribeloadbalancerpolicytypesoutput"></a>

```json
{
  "PolicyTypeDescriptions": [
    {
      "Description": "Policy that controls whether to include the IP address and port of the originating request for TCP messages. This policy operates on TCP listeners only.",
      "PolicyAttributeTypeDescriptions": [
        {
          "AttributeName": "ProxyProtocol",
          "AttributeType": "Boolean",
          "Cardinality": "ONE"
        }
      ],
      "PolicyTypeName": "ProxyProtocolPolicyType"
    }
  ]
}
```

Contains the output of DescribeLoadBalancerPolicyTypes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyTypeDescriptions|object|false|none|none|

<h2 id="tocS_PolicyTypeName">PolicyTypeName</h2>
<!-- backwards compatibility -->
<a id="schemapolicytypename"></a>
<a id="schema_PolicyTypeName"></a>
<a id="tocSpolicytypename"></a>
<a id="tocspolicytypename"></a>

```json
"string"
```

<h2 id="tocS_DescribeAccessPointsOutput">DescribeAccessPointsOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaccesspointsoutput"></a>
<a id="schema_DescribeAccessPointsOutput"></a>
<a id="tocSdescribeaccesspointsoutput"></a>
<a id="tocsdescribeaccesspointsoutput"></a>

```json
{
  "LoadBalancerDescriptions": [
    {
      "AvailabilityZones": [
        "us-west-2a"
      ],
      "BackendServerDescriptions": [
        {
          "InstancePort": 80,
          "PolicyNames": [
            "my-ProxyProtocol-policy"
          ]
        }
      ],
      "CanonicalHostedZoneName": "my-load-balancer-1234567890.us-west-2.elb.amazonaws.com",
      "CanonicalHostedZoneNameID": "Z3DZXE0EXAMPLE",
      "CreatedTime": "2015-03-19T03:24:02.650Z",
      "DNSName": "my-load-balancer-1234567890.us-west-2.elb.amazonaws.com",
      "HealthCheck": {
        "HealthyThreshold": 2,
        "Interval": 30,
        "Target": "HTTP:80/png",
        "Timeout": 3,
        "UnhealthyThreshold": 2
      },
      "Instances": [
        {
          "InstanceId": "i-207d9717"
        },
        {
          "InstanceId": "i-afefb49b"
        }
      ],
      "ListenerDescriptions": [
        {
          "Listener": {
            "InstancePort": 80,
            "InstanceProtocol": "HTTP",
            "LoadBalancerPort": 80,
            "Protocol": "HTTP"
          },
          "PolicyNames": []
        },
        {
          "Listener": {
            "InstancePort": 443,
            "InstanceProtocol": "HTTPS",
            "LoadBalancerPort": 443,
            "Protocol": "HTTPS",
            "SSLCertificateId": "arn:aws:iam::123456789012:server-certificate/my-server-cert"
          },
          "PolicyNames": [
            "ELBSecurityPolicy-2015-03"
          ]
        }
      ],
      "LoadBalancerName": "my-load-balancer",
      "Policies": {
        "AppCookieStickinessPolicies": [],
        "LBCookieStickinessPolicies": [
          {
            "CookieExpirationPeriod": 60,
            "PolicyName": "my-duration-cookie-policy"
          }
        ],
        "OtherPolicies": [
          "my-PublicKey-policy",
          "my-authentication-policy",
          "my-SSLNegotiation-policy",
          "my-ProxyProtocol-policy",
          "ELBSecurityPolicy-2015-03"
        ]
      },
      "Scheme": "internet-facing",
      "SecurityGroups": [
        "sg-a61988c3"
      ],
      "SourceSecurityGroup": {
        "GroupName": "my-elb-sg",
        "OwnerAlias": "123456789012"
      },
      "Subnets": [
        "subnet-15aaab61"
      ],
      "VPCId": "vpc-a01106c2"
    }
  ]
}
```

Contains the parameters for DescribeLoadBalancers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadBalancerDescriptions|object|false|none|none|
|NextMarker|object|false|none|none|

<h2 id="tocS_DependencyThrottleException">DependencyThrottleException</h2>
<!-- backwards compatibility -->
<a id="schemadependencythrottleexception"></a>
<a id="schema_DependencyThrottleException"></a>
<a id="tocSdependencythrottleexception"></a>
<a id="tocsdependencythrottleexception"></a>

```json
null
```

<h2 id="tocS_DescribeTagsOutput">DescribeTagsOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribetagsoutput"></a>
<a id="schema_DescribeTagsOutput"></a>
<a id="tocSdescribetagsoutput"></a>
<a id="tocsdescribetagsoutput"></a>

```json
{
  "TagDescriptions": [
    {
      "LoadBalancerName": "my-load-balancer",
      "Tags": [
        {
          "Key": "project",
          "Value": "lima"
        },
        {
          "Key": "department",
          "Value": "digital-media"
        }
      ]
    }
  ]
}
```

Contains the output for DescribeTags.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TagDescriptions|object|false|none|none|

<h2 id="tocS_DetachLoadBalancerFromSubnetsOutput">DetachLoadBalancerFromSubnetsOutput</h2>
<!-- backwards compatibility -->
<a id="schemadetachloadbalancerfromsubnetsoutput"></a>
<a id="schema_DetachLoadBalancerFromSubnetsOutput"></a>
<a id="tocSdetachloadbalancerfromsubnetsoutput"></a>
<a id="tocsdetachloadbalancerfromsubnetsoutput"></a>

```json
{
  "Subnets": [
    "subnet-15aaab61"
  ]
}
```

Contains the output of DetachLoadBalancerFromSubnets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Subnets|object|false|none|none|

<h2 id="tocS_RemoveAvailabilityZonesOutput">RemoveAvailabilityZonesOutput</h2>
<!-- backwards compatibility -->
<a id="schemaremoveavailabilityzonesoutput"></a>
<a id="schema_RemoveAvailabilityZonesOutput"></a>
<a id="tocSremoveavailabilityzonesoutput"></a>
<a id="tocsremoveavailabilityzonesoutput"></a>

```json
{
  "AvailabilityZones": [
    "us-west-2b"
  ]
}
```

Contains the output for DisableAvailabilityZonesForLoadBalancer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AvailabilityZones|object|false|none|none|

<h2 id="tocS_AddAvailabilityZonesOutput">AddAvailabilityZonesOutput</h2>
<!-- backwards compatibility -->
<a id="schemaaddavailabilityzonesoutput"></a>
<a id="schema_AddAvailabilityZonesOutput"></a>
<a id="tocSaddavailabilityzonesoutput"></a>
<a id="tocsaddavailabilityzonesoutput"></a>

```json
{
  "AvailabilityZones": [
    "us-west-2a",
    "us-west-2b"
  ]
}
```

Contains the output of EnableAvailabilityZonesForLoadBalancer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AvailabilityZones|object|false|none|none|

<h2 id="tocS_ModifyLoadBalancerAttributesOutput">ModifyLoadBalancerAttributesOutput</h2>
<!-- backwards compatibility -->
<a id="schemamodifyloadbalancerattributesoutput"></a>
<a id="schema_ModifyLoadBalancerAttributesOutput"></a>
<a id="tocSmodifyloadbalancerattributesoutput"></a>
<a id="tocsmodifyloadbalancerattributesoutput"></a>

```json
{
  "LoadBalancerAttributes": {
    "ConnectionDraining": {
      "Enabled": true,
      "Timeout": 300
    }
  },
  "LoadBalancerName": "my-load-balancer"
}
```

Contains the output of ModifyLoadBalancerAttributes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadBalancerName|object|false|none|none|
|LoadBalancerAttributes|object|false|none|none|

<h2 id="tocS_CrossZoneLoadBalancing">CrossZoneLoadBalancing</h2>
<!-- backwards compatibility -->
<a id="schemacrosszoneloadbalancing"></a>
<a id="schema_CrossZoneLoadBalancing"></a>
<a id="tocScrosszoneloadbalancing"></a>
<a id="tocscrosszoneloadbalancing"></a>

```json
{
  "Enabled": {}
}
```

Information about the <code>CrossZoneLoadBalancing</code> attribute.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|true|none|none|

<h2 id="tocS_AccessLog">AccessLog</h2>
<!-- backwards compatibility -->
<a id="schemaaccesslog"></a>
<a id="schema_AccessLog"></a>
<a id="tocSaccesslog"></a>
<a id="tocsaccesslog"></a>

```json
{
  "Enabled": {},
  "S3BucketName": {},
  "EmitInterval": {},
  "S3BucketPrefix": {}
}
```

Information about the <code>AccessLog</code> attribute.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|true|none|none|
|S3BucketName|object|false|none|none|
|EmitInterval|object|false|none|none|
|S3BucketPrefix|object|false|none|none|

<h2 id="tocS_ConnectionDraining">ConnectionDraining</h2>
<!-- backwards compatibility -->
<a id="schemaconnectiondraining"></a>
<a id="schema_ConnectionDraining"></a>
<a id="tocSconnectiondraining"></a>
<a id="tocsconnectiondraining"></a>

```json
{
  "Enabled": {},
  "Timeout": {}
}
```

Information about the <code>ConnectionDraining</code> attribute.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|true|none|none|
|Timeout|object|false|none|none|

<h2 id="tocS_ConnectionSettings">ConnectionSettings</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionsettings"></a>
<a id="schema_ConnectionSettings"></a>
<a id="tocSconnectionsettings"></a>
<a id="tocsconnectionsettings"></a>

```json
{
  "IdleTimeout": {}
}
```

Information about the <code>ConnectionSettings</code> attribute.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdleTimeout|object|true|none|none|

<h2 id="tocS_AdditionalAttributes">AdditionalAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaadditionalattributes"></a>
<a id="schema_AdditionalAttributes"></a>
<a id="tocSadditionalattributes"></a>
<a id="tocsadditionalattributes"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_RegisterEndPointsOutput">RegisterEndPointsOutput</h2>
<!-- backwards compatibility -->
<a id="schemaregisterendpointsoutput"></a>
<a id="schema_RegisterEndPointsOutput"></a>
<a id="tocSregisterendpointsoutput"></a>
<a id="tocsregisterendpointsoutput"></a>

```json
{
  "Instances": [
    {
      "InstanceId": "i-d6f6fae3"
    },
    {
      "InstanceId": "i-207d9717"
    },
    {
      "InstanceId": "i-afefb49b"
    }
  ]
}
```

Contains the output of RegisterInstancesWithLoadBalancer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Instances|object|false|none|none|

<h2 id="tocS_RemoveTagsOutput">RemoveTagsOutput</h2>
<!-- backwards compatibility -->
<a id="schemaremovetagsoutput"></a>
<a id="schema_RemoveTagsOutput"></a>
<a id="tocSremovetagsoutput"></a>
<a id="tocsremovetagsoutput"></a>

```json
{}
```

Contains the output of RemoveTags.

<h2 id="tocS_TagKeyOnly">TagKeyOnly</h2>
<!-- backwards compatibility -->
<a id="schematagkeyonly"></a>
<a id="schema_TagKeyOnly"></a>
<a id="tocStagkeyonly"></a>
<a id="tocstagkeyonly"></a>

```json
{
  "Key": {}
}
```

The key of a tag.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|

<h2 id="tocS_SetLoadBalancerListenerSSLCertificateOutput">SetLoadBalancerListenerSSLCertificateOutput</h2>
<!-- backwards compatibility -->
<a id="schemasetloadbalancerlistenersslcertificateoutput"></a>
<a id="schema_SetLoadBalancerListenerSSLCertificateOutput"></a>
<a id="tocSsetloadbalancerlistenersslcertificateoutput"></a>
<a id="tocssetloadbalancerlistenersslcertificateoutput"></a>

```json
{}
```

Contains the output of SetLoadBalancerListenerSSLCertificate.

<h2 id="tocS_ListenerNotFoundException">ListenerNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemalistenernotfoundexception"></a>
<a id="schema_ListenerNotFoundException"></a>
<a id="tocSlistenernotfoundexception"></a>
<a id="tocslistenernotfoundexception"></a>

```json
null
```

<h2 id="tocS_SetLoadBalancerPoliciesForBackendServerOutput">SetLoadBalancerPoliciesForBackendServerOutput</h2>
<!-- backwards compatibility -->
<a id="schemasetloadbalancerpoliciesforbackendserveroutput"></a>
<a id="schema_SetLoadBalancerPoliciesForBackendServerOutput"></a>
<a id="tocSsetloadbalancerpoliciesforbackendserveroutput"></a>
<a id="tocssetloadbalancerpoliciesforbackendserveroutput"></a>

```json
{}
```

Contains the output of SetLoadBalancerPoliciesForBackendServer.

<h2 id="tocS_SetLoadBalancerPoliciesOfListenerOutput">SetLoadBalancerPoliciesOfListenerOutput</h2>
<!-- backwards compatibility -->
<a id="schemasetloadbalancerpoliciesoflisteneroutput"></a>
<a id="schema_SetLoadBalancerPoliciesOfListenerOutput"></a>
<a id="tocSsetloadbalancerpoliciesoflisteneroutput"></a>
<a id="tocssetloadbalancerpoliciesoflisteneroutput"></a>

```json
{}
```

Contains the output of SetLoadBalancePoliciesOfListener.

<h2 id="tocS_AccessLogEnabled">AccessLogEnabled</h2>
<!-- backwards compatibility -->
<a id="schemaaccesslogenabled"></a>
<a id="schema_AccessLogEnabled"></a>
<a id="tocSaccesslogenabled"></a>
<a id="tocsaccesslogenabled"></a>

```json
true
```

<h2 id="tocS_S3BucketName">S3BucketName</h2>
<!-- backwards compatibility -->
<a id="schemas3bucketname"></a>
<a id="schema_S3BucketName"></a>
<a id="tocSs3bucketname"></a>
<a id="tocss3bucketname"></a>

```json
"string"
```

<h2 id="tocS_AccessLogInterval">AccessLogInterval</h2>
<!-- backwards compatibility -->
<a id="schemaaccessloginterval"></a>
<a id="schema_AccessLogInterval"></a>
<a id="tocSaccessloginterval"></a>
<a id="tocsaccessloginterval"></a>

```json
0
```

<h2 id="tocS_AccessLogPrefix">AccessLogPrefix</h2>
<!-- backwards compatibility -->
<a id="schemaaccesslogprefix"></a>
<a id="schema_AccessLogPrefix"></a>
<a id="tocSaccesslogprefix"></a>
<a id="tocsaccesslogprefix"></a>

```json
"string"
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

<h2 id="tocS_AddAvailabilityZonesInput">AddAvailabilityZonesInput</h2>
<!-- backwards compatibility -->
<a id="schemaaddavailabilityzonesinput"></a>
<a id="schema_AddAvailabilityZonesInput"></a>
<a id="tocSaddavailabilityzonesinput"></a>
<a id="tocsaddavailabilityzonesinput"></a>

```json
{
  "LoadBalancerName": {},
  "AvailabilityZones": {}
}
```

Contains the parameters for EnableAvailabilityZonesForLoadBalancer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadBalancerName|object|true|none|none|
|AvailabilityZones|object|true|none|none|

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

<h2 id="tocS_AddTagsInput">AddTagsInput</h2>
<!-- backwards compatibility -->
<a id="schemaaddtagsinput"></a>
<a id="schema_AddTagsInput"></a>
<a id="tocSaddtagsinput"></a>
<a id="tocsaddtagsinput"></a>

```json
{
  "LoadBalancerNames": {},
  "Tags": {}
}
```

Contains the parameters for AddTags.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadBalancerNames|object|true|none|none|
|Tags|object|true|none|none|

<h2 id="tocS_AdditionalAttributeKey">AdditionalAttributeKey</h2>
<!-- backwards compatibility -->
<a id="schemaadditionalattributekey"></a>
<a id="schema_AdditionalAttributeKey"></a>
<a id="tocSadditionalattributekey"></a>
<a id="tocsadditionalattributekey"></a>

```json
"string"
```

<h2 id="tocS_AdditionalAttributeValue">AdditionalAttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemaadditionalattributevalue"></a>
<a id="schema_AdditionalAttributeValue"></a>
<a id="tocSadditionalattributevalue"></a>
<a id="tocsadditionalattributevalue"></a>

```json
"string"
```

<h2 id="tocS_AdditionalAttribute">AdditionalAttribute</h2>
<!-- backwards compatibility -->
<a id="schemaadditionalattribute"></a>
<a id="schema_AdditionalAttribute"></a>
<a id="tocSadditionalattribute"></a>
<a id="tocsadditionalattribute"></a>

```json
{
  "Key": {},
  "Value": {}
}
```

Information about additional load balancer attributes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_AppCookieStickinessPolicy">AppCookieStickinessPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaappcookiestickinesspolicy"></a>
<a id="schema_AppCookieStickinessPolicy"></a>
<a id="tocSappcookiestickinesspolicy"></a>
<a id="tocsappcookiestickinesspolicy"></a>

```json
{
  "PolicyName": {},
  "CookieName": {}
}
```

Information about a policy for application-controlled session stickiness.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyName|object|false|none|none|
|CookieName|object|false|none|none|

<h2 id="tocS_AppCookieStickinessPolicies">AppCookieStickinessPolicies</h2>
<!-- backwards compatibility -->
<a id="schemaappcookiestickinesspolicies"></a>
<a id="schema_AppCookieStickinessPolicies"></a>
<a id="tocSappcookiestickinesspolicies"></a>
<a id="tocsappcookiestickinesspolicies"></a>

```json
[
  {
    "PolicyName": {},
    "CookieName": {}
  }
]
```

<h2 id="tocS_CookieName">CookieName</h2>
<!-- backwards compatibility -->
<a id="schemacookiename"></a>
<a id="schema_CookieName"></a>
<a id="tocScookiename"></a>
<a id="tocscookiename"></a>

```json
"string"
```

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

<h2 id="tocS_ApplySecurityGroupsToLoadBalancerInput">ApplySecurityGroupsToLoadBalancerInput</h2>
<!-- backwards compatibility -->
<a id="schemaapplysecuritygroupstoloadbalancerinput"></a>
<a id="schema_ApplySecurityGroupsToLoadBalancerInput"></a>
<a id="tocSapplysecuritygroupstoloadbalancerinput"></a>
<a id="tocsapplysecuritygroupstoloadbalancerinput"></a>

```json
{
  "LoadBalancerName": {},
  "SecurityGroups": {}
}
```

Contains the parameters for ApplySecurityGroupsToLoadBalancer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadBalancerName|object|true|none|none|
|SecurityGroups|object|true|none|none|

<h2 id="tocS_Subnets">Subnets</h2>
<!-- backwards compatibility -->
<a id="schemasubnets"></a>
<a id="schema_Subnets"></a>
<a id="tocSsubnets"></a>
<a id="tocssubnets"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AttachLoadBalancerToSubnetsInput">AttachLoadBalancerToSubnetsInput</h2>
<!-- backwards compatibility -->
<a id="schemaattachloadbalancertosubnetsinput"></a>
<a id="schema_AttachLoadBalancerToSubnetsInput"></a>
<a id="tocSattachloadbalancertosubnetsinput"></a>
<a id="tocsattachloadbalancertosubnetsinput"></a>

```json
{
  "LoadBalancerName": {},
  "Subnets": {}
}
```

Contains the parameters for AttachLoaBalancerToSubnets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadBalancerName|object|true|none|none|
|Subnets|object|true|none|none|

<h2 id="tocS_AttributeName">AttributeName</h2>
<!-- backwards compatibility -->
<a id="schemaattributename"></a>
<a id="schema_AttributeName"></a>
<a id="tocSattributename"></a>
<a id="tocsattributename"></a>

```json
"string"
```

<h2 id="tocS_AttributeType">AttributeType</h2>
<!-- backwards compatibility -->
<a id="schemaattributetype"></a>
<a id="schema_AttributeType"></a>
<a id="tocSattributetype"></a>
<a id="tocsattributetype"></a>

```json
"string"
```

<h2 id="tocS_AttributeValue">AttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemaattributevalue"></a>
<a id="schema_AttributeValue"></a>
<a id="tocSattributevalue"></a>
<a id="tocsattributevalue"></a>

```json
"string"
```

<h2 id="tocS_InstancePort">InstancePort</h2>
<!-- backwards compatibility -->
<a id="schemainstanceport"></a>
<a id="schema_InstancePort"></a>
<a id="tocSinstanceport"></a>
<a id="tocsinstanceport"></a>

```json
1
```

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

<h2 id="tocS_BackendServerDescription">BackendServerDescription</h2>
<!-- backwards compatibility -->
<a id="schemabackendserverdescription"></a>
<a id="schema_BackendServerDescription"></a>
<a id="tocSbackendserverdescription"></a>
<a id="tocsbackendserverdescription"></a>

```json
{
  "InstancePort": {},
  "PolicyNames": {}
}
```

Information about the configuration of an EC2 instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstancePort|object|false|none|none|
|PolicyNames|object|false|none|none|

<h2 id="tocS_BackendServerDescriptions">BackendServerDescriptions</h2>
<!-- backwards compatibility -->
<a id="schemabackendserverdescriptions"></a>
<a id="schema_BackendServerDescriptions"></a>
<a id="tocSbackendserverdescriptions"></a>
<a id="tocsbackendserverdescriptions"></a>

```json
[
  {
    "InstancePort": {},
    "PolicyNames": {}
  }
]
```

<h2 id="tocS_Cardinality">Cardinality</h2>
<!-- backwards compatibility -->
<a id="schemacardinality"></a>
<a id="schema_Cardinality"></a>
<a id="tocScardinality"></a>
<a id="tocscardinality"></a>

```json
"string"
```

<h2 id="tocS_HealthCheck">HealthCheck</h2>
<!-- backwards compatibility -->
<a id="schemahealthcheck"></a>
<a id="schema_HealthCheck"></a>
<a id="tocShealthcheck"></a>
<a id="tocshealthcheck"></a>

```json
{
  "Target": {},
  "Interval": {},
  "Timeout": {},
  "UnhealthyThreshold": {},
  "HealthyThreshold": {}
}
```

Information about a health check.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Target|object|true|none|none|
|Interval|object|true|none|none|
|Timeout|object|true|none|none|
|UnhealthyThreshold|object|true|none|none|
|HealthyThreshold|object|true|none|none|

<h2 id="tocS_ConfigureHealthCheckInput">ConfigureHealthCheckInput</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurehealthcheckinput"></a>
<a id="schema_ConfigureHealthCheckInput"></a>
<a id="tocSconfigurehealthcheckinput"></a>
<a id="tocsconfigurehealthcheckinput"></a>

```json
{
  "LoadBalancerName": {},
  "HealthCheck": {
    "Target": {},
    "Interval": {},
    "Timeout": {},
    "UnhealthyThreshold": {},
    "HealthyThreshold": {}
  }
}
```

Contains the parameters for ConfigureHealthCheck.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadBalancerName|object|true|none|none|
|HealthCheck|object|true|none|none|

<h2 id="tocS_ConnectionDrainingEnabled">ConnectionDrainingEnabled</h2>
<!-- backwards compatibility -->
<a id="schemaconnectiondrainingenabled"></a>
<a id="schema_ConnectionDrainingEnabled"></a>
<a id="tocSconnectiondrainingenabled"></a>
<a id="tocsconnectiondrainingenabled"></a>

```json
true
```

<h2 id="tocS_ConnectionDrainingTimeout">ConnectionDrainingTimeout</h2>
<!-- backwards compatibility -->
<a id="schemaconnectiondrainingtimeout"></a>
<a id="schema_ConnectionDrainingTimeout"></a>
<a id="tocSconnectiondrainingtimeout"></a>
<a id="tocsconnectiondrainingtimeout"></a>

```json
0
```

<h2 id="tocS_IdleTimeout">IdleTimeout</h2>
<!-- backwards compatibility -->
<a id="schemaidletimeout"></a>
<a id="schema_IdleTimeout"></a>
<a id="tocSidletimeout"></a>
<a id="tocsidletimeout"></a>

```json
1
```

<h2 id="tocS_CookieExpirationPeriod">CookieExpirationPeriod</h2>
<!-- backwards compatibility -->
<a id="schemacookieexpirationperiod"></a>
<a id="schema_CookieExpirationPeriod"></a>
<a id="tocScookieexpirationperiod"></a>
<a id="tocscookieexpirationperiod"></a>

```json
0
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
    "Protocol": {},
    "LoadBalancerPort": {},
    "InstanceProtocol": {},
    "InstancePort": {},
    "SSLCertificateId": {}
  }
]
```

<h2 id="tocS_LoadBalancerScheme">LoadBalancerScheme</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancerscheme"></a>
<a id="schema_LoadBalancerScheme"></a>
<a id="tocSloadbalancerscheme"></a>
<a id="tocsloadbalancerscheme"></a>

```json
"string"
```

<h2 id="tocS_CreateAccessPointInput">CreateAccessPointInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateaccesspointinput"></a>
<a id="schema_CreateAccessPointInput"></a>
<a id="tocScreateaccesspointinput"></a>
<a id="tocscreateaccesspointinput"></a>

```json
{
  "LoadBalancerName": {},
  "Listeners": {},
  "AvailabilityZones": {},
  "Subnets": {},
  "SecurityGroups": {},
  "Scheme": {},
  "Tags": {}
}
```

Contains the parameters for CreateLoadBalancer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadBalancerName|object|true|none|none|
|Listeners|object|true|none|none|
|AvailabilityZones|object|false|none|none|
|Subnets|object|false|none|none|
|SecurityGroups|object|false|none|none|
|Scheme|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DNSName">DNSName</h2>
<!-- backwards compatibility -->
<a id="schemadnsname"></a>
<a id="schema_DNSName"></a>
<a id="tocSdnsname"></a>
<a id="tocsdnsname"></a>

```json
"string"
```

<h2 id="tocS_CreateAppCookieStickinessPolicyInput">CreateAppCookieStickinessPolicyInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateappcookiestickinesspolicyinput"></a>
<a id="schema_CreateAppCookieStickinessPolicyInput"></a>
<a id="tocScreateappcookiestickinesspolicyinput"></a>
<a id="tocscreateappcookiestickinesspolicyinput"></a>

```json
{
  "LoadBalancerName": {},
  "PolicyName": {},
  "CookieName": {}
}
```

Contains the parameters for CreateAppCookieStickinessPolicy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadBalancerName|object|true|none|none|
|PolicyName|object|true|none|none|
|CookieName|object|true|none|none|

<h2 id="tocS_CreateLBCookieStickinessPolicyInput">CreateLBCookieStickinessPolicyInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatelbcookiestickinesspolicyinput"></a>
<a id="schema_CreateLBCookieStickinessPolicyInput"></a>
<a id="tocScreatelbcookiestickinesspolicyinput"></a>
<a id="tocscreatelbcookiestickinesspolicyinput"></a>

```json
{
  "LoadBalancerName": {},
  "PolicyName": {},
  "CookieExpirationPeriod": {}
}
```

Contains the parameters for CreateLBCookieStickinessPolicy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadBalancerName|object|true|none|none|
|PolicyName|object|true|none|none|
|CookieExpirationPeriod|object|false|none|none|

<h2 id="tocS_CreateLoadBalancerListenerInput">CreateLoadBalancerListenerInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateloadbalancerlistenerinput"></a>
<a id="schema_CreateLoadBalancerListenerInput"></a>
<a id="tocScreateloadbalancerlistenerinput"></a>
<a id="tocscreateloadbalancerlistenerinput"></a>

```json
{
  "LoadBalancerName": {},
  "Listeners": {}
}
```

Contains the parameters for CreateLoadBalancerListeners.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadBalancerName|object|true|none|none|
|Listeners|object|true|none|none|

<h2 id="tocS_PolicyAttributes">PolicyAttributes</h2>
<!-- backwards compatibility -->
<a id="schemapolicyattributes"></a>
<a id="schema_PolicyAttributes"></a>
<a id="tocSpolicyattributes"></a>
<a id="tocspolicyattributes"></a>

```json
[
  {
    "AttributeName": {},
    "AttributeValue": {}
  }
]
```

<h2 id="tocS_CreateLoadBalancerPolicyInput">CreateLoadBalancerPolicyInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateloadbalancerpolicyinput"></a>
<a id="schema_CreateLoadBalancerPolicyInput"></a>
<a id="tocScreateloadbalancerpolicyinput"></a>
<a id="tocscreateloadbalancerpolicyinput"></a>

```json
{
  "LoadBalancerName": {},
  "PolicyName": {},
  "PolicyTypeName": {},
  "PolicyAttributes": {}
}
```

Contains the parameters for CreateLoadBalancerPolicy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadBalancerName|object|true|none|none|
|PolicyName|object|true|none|none|
|PolicyTypeName|object|true|none|none|
|PolicyAttributes|object|false|none|none|

<h2 id="tocS_CreatedTime">CreatedTime</h2>
<!-- backwards compatibility -->
<a id="schemacreatedtime"></a>
<a id="schema_CreatedTime"></a>
<a id="tocScreatedtime"></a>
<a id="tocscreatedtime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_CrossZoneLoadBalancingEnabled">CrossZoneLoadBalancingEnabled</h2>
<!-- backwards compatibility -->
<a id="schemacrosszoneloadbalancingenabled"></a>
<a id="schema_CrossZoneLoadBalancingEnabled"></a>
<a id="tocScrosszoneloadbalancingenabled"></a>
<a id="tocscrosszoneloadbalancingenabled"></a>

```json
true
```

<h2 id="tocS_DefaultValue">DefaultValue</h2>
<!-- backwards compatibility -->
<a id="schemadefaultvalue"></a>
<a id="schema_DefaultValue"></a>
<a id="tocSdefaultvalue"></a>
<a id="tocsdefaultvalue"></a>

```json
"string"
```

<h2 id="tocS_DeleteAccessPointInput">DeleteAccessPointInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteaccesspointinput"></a>
<a id="schema_DeleteAccessPointInput"></a>
<a id="tocSdeleteaccesspointinput"></a>
<a id="tocsdeleteaccesspointinput"></a>

```json
{
  "LoadBalancerName": {}
}
```

Contains the parameters for DeleteLoadBalancer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadBalancerName|object|true|none|none|

<h2 id="tocS_Ports">Ports</h2>
<!-- backwards compatibility -->
<a id="schemaports"></a>
<a id="schema_Ports"></a>
<a id="tocSports"></a>
<a id="tocsports"></a>

```json
[
  0
]
```

<h2 id="tocS_DeleteLoadBalancerListenerInput">DeleteLoadBalancerListenerInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteloadbalancerlistenerinput"></a>
<a id="schema_DeleteLoadBalancerListenerInput"></a>
<a id="tocSdeleteloadbalancerlistenerinput"></a>
<a id="tocsdeleteloadbalancerlistenerinput"></a>

```json
{
  "LoadBalancerName": {},
  "LoadBalancerPorts": {}
}
```

Contains the parameters for DeleteLoadBalancerListeners.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadBalancerName|object|true|none|none|
|LoadBalancerPorts|object|true|none|none|

<h2 id="tocS_DeleteLoadBalancerPolicyInput">DeleteLoadBalancerPolicyInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteloadbalancerpolicyinput"></a>
<a id="schema_DeleteLoadBalancerPolicyInput"></a>
<a id="tocSdeleteloadbalancerpolicyinput"></a>
<a id="tocsdeleteloadbalancerpolicyinput"></a>

```json
{
  "LoadBalancerName": {},
  "PolicyName": {}
}
```

Contains the parameters for DeleteLoadBalancerPolicy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadBalancerName|object|true|none|none|
|PolicyName|object|true|none|none|

<h2 id="tocS_Instances">Instances</h2>
<!-- backwards compatibility -->
<a id="schemainstances"></a>
<a id="schema_Instances"></a>
<a id="tocSinstances"></a>
<a id="tocsinstances"></a>

```json
[
  {
    "InstanceId": {}
  }
]
```

<h2 id="tocS_DeregisterEndPointsInput">DeregisterEndPointsInput</h2>
<!-- backwards compatibility -->
<a id="schemaderegisterendpointsinput"></a>
<a id="schema_DeregisterEndPointsInput"></a>
<a id="tocSderegisterendpointsinput"></a>
<a id="tocsderegisterendpointsinput"></a>

```json
{
  "LoadBalancerName": {},
  "Instances": {}
}
```

Contains the parameters for DeregisterInstancesFromLoadBalancer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadBalancerName|object|true|none|none|
|Instances|object|true|none|none|

<h2 id="tocS_Marker">Marker</h2>
<!-- backwards compatibility -->
<a id="schemamarker"></a>
<a id="schema_Marker"></a>
<a id="tocSmarker"></a>
<a id="tocsmarker"></a>

```json
"string"
```

<h2 id="tocS_PageSize">PageSize</h2>
<!-- backwards compatibility -->
<a id="schemapagesize"></a>
<a id="schema_PageSize"></a>
<a id="tocSpagesize"></a>
<a id="tocspagesize"></a>

```json
1
```

<h2 id="tocS_DescribeAccessPointsInput">DescribeAccessPointsInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaccesspointsinput"></a>
<a id="schema_DescribeAccessPointsInput"></a>
<a id="tocSdescribeaccesspointsinput"></a>
<a id="tocsdescribeaccesspointsinput"></a>

```json
{
  "LoadBalancerNames": {},
  "Marker": {},
  "PageSize": {}
}
```

Contains the parameters for DescribeLoadBalancers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadBalancerNames|object|false|none|none|
|Marker|object|false|none|none|
|PageSize|object|false|none|none|

<h2 id="tocS_LoadBalancerDescriptions">LoadBalancerDescriptions</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancerdescriptions"></a>
<a id="schema_LoadBalancerDescriptions"></a>
<a id="tocSloadbalancerdescriptions"></a>
<a id="tocsloadbalancerdescriptions"></a>

```json
[
  {
    "LoadBalancerName": {},
    "DNSName": {},
    "CanonicalHostedZoneName": {},
    "CanonicalHostedZoneNameID": {},
    "ListenerDescriptions": {},
    "Policies": {
      "AppCookieStickinessPolicies": {},
      "LBCookieStickinessPolicies": {},
      "OtherPolicies": {}
    },
    "BackendServerDescriptions": {},
    "AvailabilityZones": {},
    "Subnets": {},
    "VPCId": {},
    "Instances": {},
    "HealthCheck": {
      "Target": {},
      "Interval": {},
      "Timeout": {},
      "UnhealthyThreshold": {},
      "HealthyThreshold": {}
    },
    "SourceSecurityGroup": {
      "OwnerAlias": {},
      "GroupName": {}
    },
    "SecurityGroups": {},
    "CreatedTime": {},
    "Scheme": {}
  }
]
```

<h2 id="tocS_DescribeAccountLimitsInput">DescribeAccountLimitsInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaccountlimitsinput"></a>
<a id="schema_DescribeAccountLimitsInput"></a>
<a id="tocSdescribeaccountlimitsinput"></a>
<a id="tocsdescribeaccountlimitsinput"></a>

```json
{
  "Marker": {},
  "PageSize": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|false|none|none|
|PageSize|object|false|none|none|

<h2 id="tocS_Limits">Limits</h2>
<!-- backwards compatibility -->
<a id="schemalimits"></a>
<a id="schema_Limits"></a>
<a id="tocSlimits"></a>
<a id="tocslimits"></a>

```json
[
  {
    "Name": {},
    "Max": {}
  }
]
```

<h2 id="tocS_DescribeEndPointStateInput">DescribeEndPointStateInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeendpointstateinput"></a>
<a id="schema_DescribeEndPointStateInput"></a>
<a id="tocSdescribeendpointstateinput"></a>
<a id="tocsdescribeendpointstateinput"></a>

```json
{
  "LoadBalancerName": {},
  "Instances": {}
}
```

Contains the parameters for DescribeInstanceHealth.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadBalancerName|object|true|none|none|
|Instances|object|false|none|none|

<h2 id="tocS_InstanceStates">InstanceStates</h2>
<!-- backwards compatibility -->
<a id="schemainstancestates"></a>
<a id="schema_InstanceStates"></a>
<a id="tocSinstancestates"></a>
<a id="tocsinstancestates"></a>

```json
[
  {
    "InstanceId": {},
    "State": {},
    "ReasonCode": {},
    "Description": {}
  }
]
```

<h2 id="tocS_DescribeLoadBalancerAttributesInput">DescribeLoadBalancerAttributesInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeloadbalancerattributesinput"></a>
<a id="schema_DescribeLoadBalancerAttributesInput"></a>
<a id="tocSdescribeloadbalancerattributesinput"></a>
<a id="tocsdescribeloadbalancerattributesinput"></a>

```json
{
  "LoadBalancerName": {}
}
```

Contains the parameters for DescribeLoadBalancerAttributes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadBalancerName|object|true|none|none|

<h2 id="tocS_LoadBalancerAttributes">LoadBalancerAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancerattributes"></a>
<a id="schema_LoadBalancerAttributes"></a>
<a id="tocSloadbalancerattributes"></a>
<a id="tocsloadbalancerattributes"></a>

```json
{
  "CrossZoneLoadBalancing": {
    "Enabled": {}
  },
  "AccessLog": {
    "Enabled": {},
    "S3BucketName": {},
    "EmitInterval": {},
    "S3BucketPrefix": {}
  },
  "ConnectionDraining": {
    "Enabled": {},
    "Timeout": {}
  },
  "ConnectionSettings": {
    "IdleTimeout": {}
  },
  "AdditionalAttributes": {}
}
```

The attributes for a load balancer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CrossZoneLoadBalancing|object|false|none|none|
|AccessLog|object|false|none|none|
|ConnectionDraining|object|false|none|none|
|ConnectionSettings|object|false|none|none|
|AdditionalAttributes|object|false|none|none|

<h2 id="tocS_DescribeLoadBalancerPoliciesInput">DescribeLoadBalancerPoliciesInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeloadbalancerpoliciesinput"></a>
<a id="schema_DescribeLoadBalancerPoliciesInput"></a>
<a id="tocSdescribeloadbalancerpoliciesinput"></a>
<a id="tocsdescribeloadbalancerpoliciesinput"></a>

```json
{
  "LoadBalancerName": {},
  "PolicyNames": {}
}
```

Contains the parameters for DescribeLoadBalancerPolicies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadBalancerName|object|false|none|none|
|PolicyNames|object|false|none|none|

<h2 id="tocS_PolicyDescriptions">PolicyDescriptions</h2>
<!-- backwards compatibility -->
<a id="schemapolicydescriptions"></a>
<a id="schema_PolicyDescriptions"></a>
<a id="tocSpolicydescriptions"></a>
<a id="tocspolicydescriptions"></a>

```json
[
  {
    "PolicyName": {},
    "PolicyTypeName": {},
    "PolicyAttributeDescriptions": {}
  }
]
```

<h2 id="tocS_PolicyTypeNames">PolicyTypeNames</h2>
<!-- backwards compatibility -->
<a id="schemapolicytypenames"></a>
<a id="schema_PolicyTypeNames"></a>
<a id="tocSpolicytypenames"></a>
<a id="tocspolicytypenames"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DescribeLoadBalancerPolicyTypesInput">DescribeLoadBalancerPolicyTypesInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeloadbalancerpolicytypesinput"></a>
<a id="schema_DescribeLoadBalancerPolicyTypesInput"></a>
<a id="tocSdescribeloadbalancerpolicytypesinput"></a>
<a id="tocsdescribeloadbalancerpolicytypesinput"></a>

```json
{
  "PolicyTypeNames": {}
}
```

Contains the parameters for DescribeLoadBalancerPolicyTypes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyTypeNames|object|false|none|none|

<h2 id="tocS_PolicyTypeDescriptions">PolicyTypeDescriptions</h2>
<!-- backwards compatibility -->
<a id="schemapolicytypedescriptions"></a>
<a id="schema_PolicyTypeDescriptions"></a>
<a id="tocSpolicytypedescriptions"></a>
<a id="tocspolicytypedescriptions"></a>

```json
[
  {
    "PolicyTypeName": {},
    "Description": {},
    "PolicyAttributeTypeDescriptions": {}
  }
]
```

<h2 id="tocS_LoadBalancerNamesMax20">LoadBalancerNamesMax20</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancernamesmax20"></a>
<a id="schema_LoadBalancerNamesMax20"></a>
<a id="tocSloadbalancernamesmax20"></a>
<a id="tocsloadbalancernamesmax20"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DescribeTagsInput">DescribeTagsInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribetagsinput"></a>
<a id="schema_DescribeTagsInput"></a>
<a id="tocSdescribetagsinput"></a>
<a id="tocsdescribetagsinput"></a>

```json
{
  "LoadBalancerNames": {}
}
```

Contains the parameters for DescribeTags.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadBalancerNames|object|true|none|none|

<h2 id="tocS_TagDescriptions">TagDescriptions</h2>
<!-- backwards compatibility -->
<a id="schematagdescriptions"></a>
<a id="schema_TagDescriptions"></a>
<a id="tocStagdescriptions"></a>
<a id="tocstagdescriptions"></a>

```json
[
  {
    "LoadBalancerName": {},
    "Tags": {}
  }
]
```

<h2 id="tocS_Description">Description</h2>
<!-- backwards compatibility -->
<a id="schemadescription"></a>
<a id="schema_Description"></a>
<a id="tocSdescription"></a>
<a id="tocsdescription"></a>

```json
"string"
```

<h2 id="tocS_DetachLoadBalancerFromSubnetsInput">DetachLoadBalancerFromSubnetsInput</h2>
<!-- backwards compatibility -->
<a id="schemadetachloadbalancerfromsubnetsinput"></a>
<a id="schema_DetachLoadBalancerFromSubnetsInput"></a>
<a id="tocSdetachloadbalancerfromsubnetsinput"></a>
<a id="tocsdetachloadbalancerfromsubnetsinput"></a>

```json
{
  "LoadBalancerName": {},
  "Subnets": {}
}
```

Contains the parameters for DetachLoadBalancerFromSubnets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadBalancerName|object|true|none|none|
|Subnets|object|true|none|none|

<h2 id="tocS_EndPointPort">EndPointPort</h2>
<!-- backwards compatibility -->
<a id="schemaendpointport"></a>
<a id="schema_EndPointPort"></a>
<a id="tocSendpointport"></a>
<a id="tocsendpointport"></a>

```json
0
```

<h2 id="tocS_InstanceId">InstanceId</h2>
<!-- backwards compatibility -->
<a id="schemainstanceid"></a>
<a id="schema_InstanceId"></a>
<a id="tocSinstanceid"></a>
<a id="tocsinstanceid"></a>

```json
"string"
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

<h2 id="tocS_ReasonCode">ReasonCode</h2>
<!-- backwards compatibility -->
<a id="schemareasoncode"></a>
<a id="schema_ReasonCode"></a>
<a id="tocSreasoncode"></a>
<a id="tocsreasoncode"></a>

```json
"string"
```

<h2 id="tocS_InstanceState">InstanceState</h2>
<!-- backwards compatibility -->
<a id="schemainstancestate"></a>
<a id="schema_InstanceState"></a>
<a id="tocSinstancestate"></a>
<a id="tocsinstancestate"></a>

```json
{
  "InstanceId": {},
  "State": {},
  "ReasonCode": {},
  "Description": {}
}
```

Information about the state of an EC2 instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|false|none|none|
|State|object|false|none|none|
|ReasonCode|object|false|none|none|
|Description|object|false|none|none|

<h2 id="tocS_LBCookieStickinessPolicy">LBCookieStickinessPolicy</h2>
<!-- backwards compatibility -->
<a id="schemalbcookiestickinesspolicy"></a>
<a id="schema_LBCookieStickinessPolicy"></a>
<a id="tocSlbcookiestickinesspolicy"></a>
<a id="tocslbcookiestickinesspolicy"></a>

```json
{
  "PolicyName": {},
  "CookieExpirationPeriod": {}
}
```

Information about a policy for duration-based session stickiness.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyName|object|false|none|none|
|CookieExpirationPeriod|object|false|none|none|

<h2 id="tocS_LBCookieStickinessPolicies">LBCookieStickinessPolicies</h2>
<!-- backwards compatibility -->
<a id="schemalbcookiestickinesspolicies"></a>
<a id="schema_LBCookieStickinessPolicies"></a>
<a id="tocSlbcookiestickinesspolicies"></a>
<a id="tocslbcookiestickinesspolicies"></a>

```json
[
  {
    "PolicyName": {},
    "CookieExpirationPeriod": {}
  }
]
```

<h2 id="tocS_Name">Name</h2>
<!-- backwards compatibility -->
<a id="schemaname"></a>
<a id="schema_Name"></a>
<a id="tocSname"></a>
<a id="tocsname"></a>

```json
"string"
```

<h2 id="tocS_Max">Max</h2>
<!-- backwards compatibility -->
<a id="schemamax"></a>
<a id="schema_Max"></a>
<a id="tocSmax"></a>
<a id="tocsmax"></a>

```json
"string"
```

<h2 id="tocS_Limit">Limit</h2>
<!-- backwards compatibility -->
<a id="schemalimit"></a>
<a id="schema_Limit"></a>
<a id="tocSlimit"></a>
<a id="tocslimit"></a>

```json
{
  "Name": {},
  "Max": {}
}
```

Information about an Elastic Load Balancing resource limit for your AWS account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Max|object|false|none|none|

<h2 id="tocS_Protocol">Protocol</h2>
<!-- backwards compatibility -->
<a id="schemaprotocol"></a>
<a id="schema_Protocol"></a>
<a id="tocSprotocol"></a>
<a id="tocsprotocol"></a>

```json
"string"
```

<h2 id="tocS_SSLCertificateId">SSLCertificateId</h2>
<!-- backwards compatibility -->
<a id="schemasslcertificateid"></a>
<a id="schema_SSLCertificateId"></a>
<a id="tocSsslcertificateid"></a>
<a id="tocssslcertificateid"></a>

```json
"string"
```

<h2 id="tocS_ListenerDescription">ListenerDescription</h2>
<!-- backwards compatibility -->
<a id="schemalistenerdescription"></a>
<a id="schema_ListenerDescription"></a>
<a id="tocSlistenerdescription"></a>
<a id="tocslistenerdescription"></a>

```json
{
  "Listener": {
    "Protocol": {},
    "LoadBalancerPort": {},
    "InstanceProtocol": {},
    "InstancePort": {},
    "SSLCertificateId": {}
  },
  "PolicyNames": {}
}
```

The policies enabled for a listener.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Listener|object|false|none|none|
|PolicyNames|object|false|none|none|

<h2 id="tocS_ListenerDescriptions">ListenerDescriptions</h2>
<!-- backwards compatibility -->
<a id="schemalistenerdescriptions"></a>
<a id="schema_ListenerDescriptions"></a>
<a id="tocSlistenerdescriptions"></a>
<a id="tocslistenerdescriptions"></a>

```json
[
  {
    "Listener": {
      "Protocol": {},
      "LoadBalancerPort": {},
      "InstanceProtocol": {},
      "InstancePort": {},
      "SSLCertificateId": {}
    },
    "PolicyNames": {}
  }
]
```

<h2 id="tocS_Policies">Policies</h2>
<!-- backwards compatibility -->
<a id="schemapolicies"></a>
<a id="schema_Policies"></a>
<a id="tocSpolicies"></a>
<a id="tocspolicies"></a>

```json
{
  "AppCookieStickinessPolicies": {},
  "LBCookieStickinessPolicies": {},
  "OtherPolicies": {}
}
```

The policies for a load balancer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppCookieStickinessPolicies|object|false|none|none|
|LBCookieStickinessPolicies|object|false|none|none|
|OtherPolicies|object|false|none|none|

<h2 id="tocS_VPCId">VPCId</h2>
<!-- backwards compatibility -->
<a id="schemavpcid"></a>
<a id="schema_VPCId"></a>
<a id="tocSvpcid"></a>
<a id="tocsvpcid"></a>

```json
"string"
```

<h2 id="tocS_SourceSecurityGroup">SourceSecurityGroup</h2>
<!-- backwards compatibility -->
<a id="schemasourcesecuritygroup"></a>
<a id="schema_SourceSecurityGroup"></a>
<a id="tocSsourcesecuritygroup"></a>
<a id="tocssourcesecuritygroup"></a>

```json
{
  "OwnerAlias": {},
  "GroupName": {}
}
```

Information about a source security group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OwnerAlias|object|false|none|none|
|GroupName|object|false|none|none|

<h2 id="tocS_LoadBalancerDescription">LoadBalancerDescription</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancerdescription"></a>
<a id="schema_LoadBalancerDescription"></a>
<a id="tocSloadbalancerdescription"></a>
<a id="tocsloadbalancerdescription"></a>

```json
{
  "LoadBalancerName": {},
  "DNSName": {},
  "CanonicalHostedZoneName": {},
  "CanonicalHostedZoneNameID": {},
  "ListenerDescriptions": {},
  "Policies": {
    "AppCookieStickinessPolicies": {},
    "LBCookieStickinessPolicies": {},
    "OtherPolicies": {}
  },
  "BackendServerDescriptions": {},
  "AvailabilityZones": {},
  "Subnets": {},
  "VPCId": {},
  "Instances": {},
  "HealthCheck": {
    "Target": {},
    "Interval": {},
    "Timeout": {},
    "UnhealthyThreshold": {},
    "HealthyThreshold": {}
  },
  "SourceSecurityGroup": {
    "OwnerAlias": {},
    "GroupName": {}
  },
  "SecurityGroups": {},
  "CreatedTime": {},
  "Scheme": {}
}
```

Information about a load balancer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadBalancerName|object|false|none|none|
|DNSName|object|false|none|none|
|CanonicalHostedZoneName|object|false|none|none|
|CanonicalHostedZoneNameID|object|false|none|none|
|ListenerDescriptions|object|false|none|none|
|Policies|object|false|none|none|
|BackendServerDescriptions|object|false|none|none|
|AvailabilityZones|object|false|none|none|
|Subnets|object|false|none|none|
|VPCId|object|false|none|none|
|Instances|object|false|none|none|
|HealthCheck|object|false|none|none|
|SourceSecurityGroup|object|false|none|none|
|SecurityGroups|object|false|none|none|
|CreatedTime|object|false|none|none|
|Scheme|object|false|none|none|

<h2 id="tocS_ModifyLoadBalancerAttributesInput">ModifyLoadBalancerAttributesInput</h2>
<!-- backwards compatibility -->
<a id="schemamodifyloadbalancerattributesinput"></a>
<a id="schema_ModifyLoadBalancerAttributesInput"></a>
<a id="tocSmodifyloadbalancerattributesinput"></a>
<a id="tocsmodifyloadbalancerattributesinput"></a>

```json
{
  "LoadBalancerName": {},
  "LoadBalancerAttributes": {
    "CrossZoneLoadBalancing": {
      "Enabled": {}
    },
    "AccessLog": {
      "Enabled": {},
      "S3BucketName": {},
      "EmitInterval": {},
      "S3BucketPrefix": {}
    },
    "ConnectionDraining": {
      "Enabled": {},
      "Timeout": {}
    },
    "ConnectionSettings": {
      "IdleTimeout": {}
    },
    "AdditionalAttributes": {}
  }
}
```

Contains the parameters for ModifyLoadBalancerAttributes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadBalancerName|object|true|none|none|
|LoadBalancerAttributes|object|true|none|none|

<h2 id="tocS_PolicyAttributeDescription">PolicyAttributeDescription</h2>
<!-- backwards compatibility -->
<a id="schemapolicyattributedescription"></a>
<a id="schema_PolicyAttributeDescription"></a>
<a id="tocSpolicyattributedescription"></a>
<a id="tocspolicyattributedescription"></a>

```json
{
  "AttributeName": {},
  "AttributeValue": {}
}
```

Information about a policy attribute.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttributeName|object|false|none|none|
|AttributeValue|object|false|none|none|

<h2 id="tocS_PolicyAttributeDescriptions">PolicyAttributeDescriptions</h2>
<!-- backwards compatibility -->
<a id="schemapolicyattributedescriptions"></a>
<a id="schema_PolicyAttributeDescriptions"></a>
<a id="tocSpolicyattributedescriptions"></a>
<a id="tocspolicyattributedescriptions"></a>

```json
[
  {
    "AttributeName": {},
    "AttributeValue": {}
  }
]
```

<h2 id="tocS_PolicyAttributeTypeDescription">PolicyAttributeTypeDescription</h2>
<!-- backwards compatibility -->
<a id="schemapolicyattributetypedescription"></a>
<a id="schema_PolicyAttributeTypeDescription"></a>
<a id="tocSpolicyattributetypedescription"></a>
<a id="tocspolicyattributetypedescription"></a>

```json
{
  "AttributeName": {},
  "AttributeType": {},
  "Description": {},
  "DefaultValue": {},
  "Cardinality": {}
}
```

Information about a policy attribute type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttributeName|object|false|none|none|
|AttributeType|object|false|none|none|
|Description|object|false|none|none|
|DefaultValue|object|false|none|none|
|Cardinality|object|false|none|none|

<h2 id="tocS_PolicyAttributeTypeDescriptions">PolicyAttributeTypeDescriptions</h2>
<!-- backwards compatibility -->
<a id="schemapolicyattributetypedescriptions"></a>
<a id="schema_PolicyAttributeTypeDescriptions"></a>
<a id="tocSpolicyattributetypedescriptions"></a>
<a id="tocspolicyattributetypedescriptions"></a>

```json
[
  {
    "AttributeName": {},
    "AttributeType": {},
    "Description": {},
    "DefaultValue": {},
    "Cardinality": {}
  }
]
```

<h2 id="tocS_PolicyDescription">PolicyDescription</h2>
<!-- backwards compatibility -->
<a id="schemapolicydescription"></a>
<a id="schema_PolicyDescription"></a>
<a id="tocSpolicydescription"></a>
<a id="tocspolicydescription"></a>

```json
{
  "PolicyName": {},
  "PolicyTypeName": {},
  "PolicyAttributeDescriptions": {}
}
```

Information about a policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyName|object|false|none|none|
|PolicyTypeName|object|false|none|none|
|PolicyAttributeDescriptions|object|false|none|none|

<h2 id="tocS_PolicyTypeDescription">PolicyTypeDescription</h2>
<!-- backwards compatibility -->
<a id="schemapolicytypedescription"></a>
<a id="schema_PolicyTypeDescription"></a>
<a id="tocSpolicytypedescription"></a>
<a id="tocspolicytypedescription"></a>

```json
{
  "PolicyTypeName": {},
  "Description": {},
  "PolicyAttributeTypeDescriptions": {}
}
```

Information about a policy type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyTypeName|object|false|none|none|
|Description|object|false|none|none|
|PolicyAttributeTypeDescriptions|object|false|none|none|

<h2 id="tocS_RegisterEndPointsInput">RegisterEndPointsInput</h2>
<!-- backwards compatibility -->
<a id="schemaregisterendpointsinput"></a>
<a id="schema_RegisterEndPointsInput"></a>
<a id="tocSregisterendpointsinput"></a>
<a id="tocsregisterendpointsinput"></a>

```json
{
  "LoadBalancerName": {},
  "Instances": {}
}
```

Contains the parameters for RegisterInstancesWithLoadBalancer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadBalancerName|object|true|none|none|
|Instances|object|true|none|none|

<h2 id="tocS_RemoveAvailabilityZonesInput">RemoveAvailabilityZonesInput</h2>
<!-- backwards compatibility -->
<a id="schemaremoveavailabilityzonesinput"></a>
<a id="schema_RemoveAvailabilityZonesInput"></a>
<a id="tocSremoveavailabilityzonesinput"></a>
<a id="tocsremoveavailabilityzonesinput"></a>

```json
{
  "LoadBalancerName": {},
  "AvailabilityZones": {}
}
```

Contains the parameters for DisableAvailabilityZonesForLoadBalancer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadBalancerName|object|true|none|none|
|AvailabilityZones|object|true|none|none|

<h2 id="tocS_TagKeyList">TagKeyList</h2>
<!-- backwards compatibility -->
<a id="schematagkeylist"></a>
<a id="schema_TagKeyList"></a>
<a id="tocStagkeylist"></a>
<a id="tocstagkeylist"></a>

```json
[
  {
    "Key": {}
  }
]
```

<h2 id="tocS_RemoveTagsInput">RemoveTagsInput</h2>
<!-- backwards compatibility -->
<a id="schemaremovetagsinput"></a>
<a id="schema_RemoveTagsInput"></a>
<a id="tocSremovetagsinput"></a>
<a id="tocsremovetagsinput"></a>

```json
{
  "LoadBalancerNames": {},
  "Tags": {}
}
```

Contains the parameters for RemoveTags.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadBalancerNames|object|true|none|none|
|Tags|object|true|none|none|

<h2 id="tocS_SecurityGroupName">SecurityGroupName</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroupname"></a>
<a id="schema_SecurityGroupName"></a>
<a id="tocSsecuritygroupname"></a>
<a id="tocssecuritygroupname"></a>

```json
"string"
```

<h2 id="tocS_SecurityGroupOwnerAlias">SecurityGroupOwnerAlias</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroupowneralias"></a>
<a id="schema_SecurityGroupOwnerAlias"></a>
<a id="tocSsecuritygroupowneralias"></a>
<a id="tocssecuritygroupowneralias"></a>

```json
"string"
```

<h2 id="tocS_SetLoadBalancerListenerSSLCertificateInput">SetLoadBalancerListenerSSLCertificateInput</h2>
<!-- backwards compatibility -->
<a id="schemasetloadbalancerlistenersslcertificateinput"></a>
<a id="schema_SetLoadBalancerListenerSSLCertificateInput"></a>
<a id="tocSsetloadbalancerlistenersslcertificateinput"></a>
<a id="tocssetloadbalancerlistenersslcertificateinput"></a>

```json
{
  "LoadBalancerName": {},
  "LoadBalancerPort": {},
  "SSLCertificateId": {}
}
```

Contains the parameters for SetLoadBalancerListenerSSLCertificate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadBalancerName|object|true|none|none|
|LoadBalancerPort|object|true|none|none|
|SSLCertificateId|object|true|none|none|

<h2 id="tocS_SetLoadBalancerPoliciesForBackendServerInput">SetLoadBalancerPoliciesForBackendServerInput</h2>
<!-- backwards compatibility -->
<a id="schemasetloadbalancerpoliciesforbackendserverinput"></a>
<a id="schema_SetLoadBalancerPoliciesForBackendServerInput"></a>
<a id="tocSsetloadbalancerpoliciesforbackendserverinput"></a>
<a id="tocssetloadbalancerpoliciesforbackendserverinput"></a>

```json
{
  "LoadBalancerName": {},
  "InstancePort": {},
  "PolicyNames": {}
}
```

Contains the parameters for SetLoadBalancerPoliciesForBackendServer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadBalancerName|object|true|none|none|
|InstancePort|object|true|none|none|
|PolicyNames|object|true|none|none|

<h2 id="tocS_SetLoadBalancerPoliciesOfListenerInput">SetLoadBalancerPoliciesOfListenerInput</h2>
<!-- backwards compatibility -->
<a id="schemasetloadbalancerpoliciesoflistenerinput"></a>
<a id="schema_SetLoadBalancerPoliciesOfListenerInput"></a>
<a id="tocSsetloadbalancerpoliciesoflistenerinput"></a>
<a id="tocssetloadbalancerpoliciesoflistenerinput"></a>

```json
{
  "LoadBalancerName": {},
  "LoadBalancerPort": {},
  "PolicyNames": {}
}
```

Contains the parameters for SetLoadBalancePoliciesOfListener.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadBalancerName|object|true|none|none|
|LoadBalancerPort|object|true|none|none|
|PolicyNames|object|true|none|none|

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
  "LoadBalancerName": {},
  "Tags": {}
}
```

The tags associated with a load balancer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoadBalancerName|object|false|none|none|
|Tags|object|false|none|none|
