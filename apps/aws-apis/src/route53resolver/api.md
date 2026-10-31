<h1 id="amazon-route-53-resolver">Amazon Route 53 Resolver v2018-04-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>When you create a VPC using Amazon VPC, you automatically get DNS resolution within the VPC from Route 53 Resolver. By default, Resolver answers DNS queries for VPC domain names such as domain names for EC2 instances or Elastic Load Balancing load balancers. Resolver performs recursive lookups against public name servers for all other domain names.</p> <p>You can also configure DNS resolution between your VPC and your network over a Direct Connect or VPN connection:</p> <p> <b>Forward DNS queries from resolvers on your network to Route 53 Resolver</b> </p> <p>DNS resolvers on your network can forward DNS queries to Resolver in a specified VPC. This allows your DNS resolvers to easily resolve domain names for Amazon Web Services resources such as EC2 instances or records in a Route 53 private hosted zone. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver.html#resolver-overview-forward-network-to-vpc">How DNS Resolvers on Your Network Forward DNS Queries to Route 53 Resolver</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> <p> <b>Conditionally forward queries from a VPC to resolvers on your network</b> </p> <p>You can configure Resolver to forward queries that it receives from EC2 instances in your VPCs to DNS resolvers on your network. To forward selected queries, you create Resolver rules that specify the domain names for the DNS queries that you want to forward (such as example.com), and the IP addresses of the DNS resolvers on your network that you want to forward the queries to. If a query matches multiple rules (example.com, acme.example.com), Resolver chooses the rule with the most specific match (acme.example.com) and forwards the query to the IP addresses that you specified in that rule. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver.html#resolver-overview-forward-vpc-to-network">How Route 53 Resolver Forwards DNS Queries from Your VPCs to Your Network</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> <p>Like Amazon VPC, Resolver is Regional. In each Region where you have VPCs, you can choose whether to forward queries from your VPCs to your network (outbound queries), from your network to your VPCs (inbound queries), or both.</p>

Base URLs:

* <a href="http://route53resolver.us-east-1.amazonaws.com">http://route53resolver.us-east-1.amazonaws.com</a> - The Route53Resolver multi-region endpoint

* <a href="https://route53resolver.us-east-1.amazonaws.com">https://route53resolver.us-east-1.amazonaws.com</a> - The Route53Resolver multi-region endpoint

* <a href="http://route53resolver.cn-north-1.amazonaws.com.cn">http://route53resolver.cn-north-1.amazonaws.com.cn</a> - The Route53Resolver endpoint for China (Beijing) and China (Ningxia)

* <a href="https://route53resolver.cn-north-1.amazonaws.com.cn">https://route53resolver.cn-north-1.amazonaws.com.cn</a> - The Route53Resolver endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/route53resolver/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-route-53-resolver-default">Default</h1>

## AssociateFirewallRuleGroup

<a id="opIdAssociateFirewallRuleGroup"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.AssociateFirewallRuleGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.AssociateFirewallRuleGroup' \
  -d '{
    "CreatorRequestId": {},
    "FirewallRuleGroupId": {},
    "VpcId": {},
    "Priority": {},
    "Name": {},
    "MutationProtection": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.AssociateFirewallRuleGroup`

Associates a <a>FirewallRuleGroup</a> with a VPC, to provide DNS filtering for the VPC. 

> Body parameter

```json
{
  "CreatorRequestId": {},
  "FirewallRuleGroupId": {},
  "VpcId": {},
  "Priority": {},
  "Name": {},
  "MutationProtection": {},
  "Tags": {}
}
```

<h3 id="associatefirewallrulegroup-parameters">Parameters</h3>

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
|body|body|[AssociateFirewallRuleGroupRequest](#schemaassociatefirewallrulegrouprequest)|true|none|
|» CreatorRequestId|body|object|true|none|
|» FirewallRuleGroupId|body|object|true|none|
|» VpcId|body|object|true|none|
|» Priority|body|object|true|none|
|» Name|body|object|true|none|
|» MutationProtection|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.AssociateFirewallRuleGroup|

> Example responses

> 200 Response

```json
{
  "FirewallRuleGroupAssociation": {
    "Id": {},
    "Arn": {},
    "FirewallRuleGroupId": {},
    "VpcId": {},
    "Name": {},
    "Priority": {},
    "MutationProtection": {},
    "ManagedOwnerName": {},
    "Status": {},
    "StatusMessage": {},
    "CreatorRequestId": {},
    "CreationTime": {},
    "ModificationTime": {}
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

<h3 id="associatefirewallrulegroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateFirewallRuleGroupResponse](#schemaassociatefirewallrulegroupresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|486|486|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateResolverEndpointIpAddress

<a id="opIdAssociateResolverEndpointIpAddress"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.AssociateResolverEndpointIpAddress' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.AssociateResolverEndpointIpAddress' \
  -d '{
    "ResolverEndpointId": {},
    "IpAddress": {
      "IpId": {},
      "SubnetId": {},
      "Ip": {},
      "Ipv6": {}
    }
  }'
```

`POST /#X-Amz-Target=Route53Resolver.AssociateResolverEndpointIpAddress`

<p>Adds IP addresses to an inbound or an outbound Resolver endpoint. If you want to add more than one IP address, submit one <code>AssociateResolverEndpointIpAddress</code> request for each IP address.</p> <p>To remove an IP address from an endpoint, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverEndpointIpAddress.html">DisassociateResolverEndpointIpAddress</a>. </p>

> Body parameter

```json
{
  "ResolverEndpointId": {},
  "IpAddress": {
    "IpId": {},
    "SubnetId": {},
    "Ip": {},
    "Ipv6": {}
  }
}
```

<h3 id="associateresolverendpointipaddress-parameters">Parameters</h3>

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
|body|body|[AssociateResolverEndpointIpAddressRequest](#schemaassociateresolverendpointipaddressrequest)|true|none|
|» ResolverEndpointId|body|object|true|none|
|» IpAddress|body|object|true|none|
|» » IpId|body|object|false|none|
|» » SubnetId|body|object|false|none|
|» » Ip|body|object|false|none|
|» » Ipv6|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.AssociateResolverEndpointIpAddress|

> Example responses

> 200 Response

```json
{
  "ResolverEndpoint": {
    "Id": {},
    "CreatorRequestId": {},
    "Arn": {},
    "Name": {},
    "SecurityGroupIds": {},
    "Direction": {},
    "IpAddressCount": {},
    "HostVPCId": {},
    "Status": {},
    "StatusMessage": {},
    "CreationTime": {},
    "ModificationTime": {},
    "ResolverEndpointType": {}
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

<h3 id="associateresolverendpointipaddress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateResolverEndpointIpAddressResponse](#schemaassociateresolverendpointipaddressresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceExistsException|[ResourceExistsException](#schemaresourceexistsexception)|
|484|484|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|486|486|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateResolverQueryLogConfig

<a id="opIdAssociateResolverQueryLogConfig"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.AssociateResolverQueryLogConfig' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.AssociateResolverQueryLogConfig' \
  -d '{
    "ResolverQueryLogConfigId": {},
    "ResourceId": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.AssociateResolverQueryLogConfig`

<p>Associates an Amazon VPC with a specified query logging configuration. Route 53 Resolver logs DNS queries that originate in all of the Amazon VPCs that are associated with a specified query logging configuration. To associate more than one VPC with a configuration, submit one <code>AssociateResolverQueryLogConfig</code> request for each VPC.</p> <note> <p>The VPCs that you associate with a query logging configuration must be in the same Region as the configuration.</p> </note> <p>To remove a VPC from a query logging configuration, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverQueryLogConfig.html">DisassociateResolverQueryLogConfig</a>. </p>

> Body parameter

```json
{
  "ResolverQueryLogConfigId": {},
  "ResourceId": {}
}
```

<h3 id="associateresolverquerylogconfig-parameters">Parameters</h3>

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
|body|body|[AssociateResolverQueryLogConfigRequest](#schemaassociateresolverquerylogconfigrequest)|true|none|
|» ResolverQueryLogConfigId|body|object|true|none|
|» ResourceId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.AssociateResolverQueryLogConfig|

> Example responses

> 200 Response

```json
{
  "ResolverQueryLogConfigAssociation": {
    "Id": {},
    "ResolverQueryLogConfigId": {},
    "ResourceId": {},
    "Status": {},
    "Error": {},
    "ErrorMessage": {},
    "CreationTime": {}
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

<h3 id="associateresolverquerylogconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateResolverQueryLogConfigResponse](#schemaassociateresolverquerylogconfigresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceExistsException|[ResourceExistsException](#schemaresourceexistsexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|486|486|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|487|487|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateResolverRule

<a id="opIdAssociateResolverRule"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.AssociateResolverRule' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.AssociateResolverRule' \
  -d '{
    "ResolverRuleId": {},
    "Name": {},
    "VPCId": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.AssociateResolverRule`

Associates a Resolver rule with a VPC. When you associate a rule with a VPC, Resolver forwards all DNS queries for the domain name that is specified in the rule and that originate in the VPC. The queries are forwarded to the IP addresses for the DNS resolvers that are specified in the rule. For more information about rules, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html">CreateResolverRule</a>. 

> Body parameter

```json
{
  "ResolverRuleId": {},
  "Name": {},
  "VPCId": {}
}
```

<h3 id="associateresolverrule-parameters">Parameters</h3>

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
|body|body|[AssociateResolverRuleRequest](#schemaassociateresolverrulerequest)|true|none|
|» ResolverRuleId|body|object|true|none|
|» Name|body|object|false|none|
|» VPCId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.AssociateResolverRule|

> Example responses

> 200 Response

```json
{
  "ResolverRuleAssociation": {
    "Id": {},
    "ResolverRuleId": {},
    "Name": {},
    "VPCId": {},
    "Status": {},
    "StatusMessage": {}
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

<h3 id="associateresolverrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateResolverRuleResponse](#schemaassociateresolverruleresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|484|484|ResourceUnavailableException|[ResourceUnavailableException](#schemaresourceunavailableexception)|
|485|485|ResourceExistsException|[ResourceExistsException](#schemaresourceexistsexception)|
|486|486|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|487|487|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateFirewallDomainList

<a id="opIdCreateFirewallDomainList"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.CreateFirewallDomainList' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.CreateFirewallDomainList' \
  -d '{
    "CreatorRequestId": {},
    "Name": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.CreateFirewallDomainList`

Creates an empty firewall domain list for use in DNS Firewall rules. You can populate the domains for the new list with a file, using <a>ImportFirewallDomains</a>, or with domain strings, using <a>UpdateFirewallDomains</a>. 

> Body parameter

```json
{
  "CreatorRequestId": {},
  "Name": {},
  "Tags": {}
}
```

<h3 id="createfirewalldomainlist-parameters">Parameters</h3>

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
|body|body|[CreateFirewallDomainListRequest](#schemacreatefirewalldomainlistrequest)|true|none|
|» CreatorRequestId|body|object|true|none|
|» Name|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.CreateFirewallDomainList|

> Example responses

> 200 Response

```json
{
  "FirewallDomainList": {
    "Id": {},
    "Arn": {},
    "Name": {},
    "DomainCount": {},
    "Status": {},
    "StatusMessage": {},
    "ManagedOwnerName": {},
    "CreatorRequestId": {},
    "CreationTime": {},
    "ModificationTime": {}
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

<h3 id="createfirewalldomainlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateFirewallDomainListResponse](#schemacreatefirewalldomainlistresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateFirewallRule

<a id="opIdCreateFirewallRule"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.CreateFirewallRule' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.CreateFirewallRule' \
  -d '{
    "CreatorRequestId": {},
    "FirewallRuleGroupId": {},
    "FirewallDomainListId": {},
    "Priority": {},
    "Action": {},
    "BlockResponse": {},
    "BlockOverrideDomain": {},
    "BlockOverrideDnsType": {},
    "BlockOverrideTtl": {},
    "Name": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.CreateFirewallRule`

Creates a single DNS Firewall rule in the specified rule group, using the specified domain list.

> Body parameter

```json
{
  "CreatorRequestId": {},
  "FirewallRuleGroupId": {},
  "FirewallDomainListId": {},
  "Priority": {},
  "Action": {},
  "BlockResponse": {},
  "BlockOverrideDomain": {},
  "BlockOverrideDnsType": {},
  "BlockOverrideTtl": {},
  "Name": {}
}
```

<h3 id="createfirewallrule-parameters">Parameters</h3>

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
|body|body|[CreateFirewallRuleRequest](#schemacreatefirewallrulerequest)|true|none|
|» CreatorRequestId|body|object|true|none|
|» FirewallRuleGroupId|body|object|true|none|
|» FirewallDomainListId|body|object|true|none|
|» Priority|body|object|true|none|
|» Action|body|object|true|none|
|» BlockResponse|body|object|false|none|
|» BlockOverrideDomain|body|object|false|none|
|» BlockOverrideDnsType|body|object|false|none|
|» BlockOverrideTtl|body|object|false|none|
|» Name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.CreateFirewallRule|

> Example responses

> 200 Response

```json
{
  "FirewallRule": {
    "FirewallRuleGroupId": {},
    "FirewallDomainListId": {},
    "Name": {},
    "Priority": {},
    "Action": {},
    "BlockResponse": {},
    "BlockOverrideDomain": {},
    "BlockOverrideDnsType": {},
    "BlockOverrideTtl": {},
    "CreatorRequestId": {},
    "CreationTime": {},
    "ModificationTime": {}
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

<h3 id="createfirewallrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateFirewallRuleResponse](#schemacreatefirewallruleresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateFirewallRuleGroup

<a id="opIdCreateFirewallRuleGroup"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.CreateFirewallRuleGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.CreateFirewallRuleGroup' \
  -d '{
    "CreatorRequestId": {},
    "Name": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.CreateFirewallRuleGroup`

Creates an empty DNS Firewall rule group for filtering DNS network traffic in a VPC. You can add rules to the new rule group by calling <a>CreateFirewallRule</a>. 

> Body parameter

```json
{
  "CreatorRequestId": {},
  "Name": {},
  "Tags": {}
}
```

<h3 id="createfirewallrulegroup-parameters">Parameters</h3>

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
|body|body|[CreateFirewallRuleGroupRequest](#schemacreatefirewallrulegrouprequest)|true|none|
|» CreatorRequestId|body|object|true|none|
|» Name|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.CreateFirewallRuleGroup|

> Example responses

> 200 Response

```json
{
  "FirewallRuleGroup": {
    "Id": {},
    "Arn": {},
    "Name": {},
    "RuleCount": {},
    "Status": {},
    "StatusMessage": {},
    "OwnerId": {},
    "CreatorRequestId": {},
    "ShareStatus": {},
    "CreationTime": {},
    "ModificationTime": {}
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

<h3 id="createfirewallrulegroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateFirewallRuleGroupResponse](#schemacreatefirewallrulegroupresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateResolverEndpoint

<a id="opIdCreateResolverEndpoint"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.CreateResolverEndpoint' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.CreateResolverEndpoint' \
  -d '{
    "CreatorRequestId": {},
    "Name": {},
    "SecurityGroupIds": {},
    "Direction": {},
    "IpAddresses": {},
    "Tags": {},
    "ResolverEndpointType": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.CreateResolverEndpoint`

<p>Creates a Resolver endpoint. There are two types of Resolver endpoints, inbound and outbound:</p> <ul> <li> <p>An <i>inbound Resolver endpoint</i> forwards DNS queries to the DNS service for a VPC from your network.</p> </li> <li> <p>An <i>outbound Resolver endpoint</i> forwards DNS queries from the DNS service for a VPC to your network.</p> </li> </ul>

> Body parameter

```json
{
  "CreatorRequestId": {},
  "Name": {},
  "SecurityGroupIds": {},
  "Direction": {},
  "IpAddresses": {},
  "Tags": {},
  "ResolverEndpointType": {}
}
```

<h3 id="createresolverendpoint-parameters">Parameters</h3>

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
|body|body|[CreateResolverEndpointRequest](#schemacreateresolverendpointrequest)|true|none|
|» CreatorRequestId|body|object|true|none|
|» Name|body|object|false|none|
|» SecurityGroupIds|body|object|true|none|
|» Direction|body|object|true|none|
|» IpAddresses|body|object|true|none|
|» Tags|body|object|false|none|
|» ResolverEndpointType|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.CreateResolverEndpoint|

> Example responses

> 200 Response

```json
{
  "ResolverEndpoint": {
    "Id": {},
    "CreatorRequestId": {},
    "Arn": {},
    "Name": {},
    "SecurityGroupIds": {},
    "Direction": {},
    "IpAddressCount": {},
    "HostVPCId": {},
    "Status": {},
    "StatusMessage": {},
    "CreationTime": {},
    "ModificationTime": {},
    "ResolverEndpointType": {}
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

<h3 id="createresolverendpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateResolverEndpointResponse](#schemacreateresolverendpointresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceExistsException|[ResourceExistsException](#schemaresourceexistsexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|486|486|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateResolverQueryLogConfig

<a id="opIdCreateResolverQueryLogConfig"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.CreateResolverQueryLogConfig' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.CreateResolverQueryLogConfig' \
  -d '{
    "Name": {},
    "DestinationArn": {},
    "CreatorRequestId": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.CreateResolverQueryLogConfig`

<p>Creates a Resolver query logging configuration, which defines where you want Resolver to save DNS query logs that originate in your VPCs. Resolver can log queries only for VPCs that are in the same Region as the query logging configuration.</p> <p>To specify which VPCs you want to log queries for, you use <code>AssociateResolverQueryLogConfig</code>. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverQueryLogConfig.html">AssociateResolverQueryLogConfig</a>. </p> <p>You can optionally use Resource Access Manager (RAM) to share a query logging configuration with other Amazon Web Services accounts. The other accounts can then associate VPCs with the configuration. The query logs that Resolver creates for a configuration include all DNS queries that originate in all VPCs that are associated with the configuration.</p>

> Body parameter

```json
{
  "Name": {},
  "DestinationArn": {},
  "CreatorRequestId": {},
  "Tags": {}
}
```

<h3 id="createresolverquerylogconfig-parameters">Parameters</h3>

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
|body|body|[CreateResolverQueryLogConfigRequest](#schemacreateresolverquerylogconfigrequest)|true|none|
|» Name|body|object|true|none|
|» DestinationArn|body|object|true|none|
|» CreatorRequestId|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.CreateResolverQueryLogConfig|

> Example responses

> 200 Response

```json
{
  "ResolverQueryLogConfig": {
    "Id": {},
    "OwnerId": {},
    "Status": {},
    "ShareStatus": {},
    "AssociationCount": {},
    "Arn": {},
    "Name": {},
    "DestinationArn": {},
    "CreatorRequestId": {},
    "CreationTime": {}
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

<h3 id="createresolverquerylogconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateResolverQueryLogConfigResponse](#schemacreateresolverquerylogconfigresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceExistsException|[ResourceExistsException](#schemaresourceexistsexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|486|486|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|487|487|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateResolverRule

<a id="opIdCreateResolverRule"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.CreateResolverRule' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.CreateResolverRule' \
  -d '{
    "CreatorRequestId": {},
    "Name": {},
    "RuleType": {},
    "DomainName": {},
    "TargetIps": {},
    "ResolverEndpointId": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.CreateResolverRule`

For DNS queries that originate in your VPCs, specifies which Resolver endpoint the queries pass through, one domain name that you want to forward to your network, and the IP addresses of the DNS resolvers in your network.

> Body parameter

```json
{
  "CreatorRequestId": {},
  "Name": {},
  "RuleType": {},
  "DomainName": {},
  "TargetIps": {},
  "ResolverEndpointId": {},
  "Tags": {}
}
```

<h3 id="createresolverrule-parameters">Parameters</h3>

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
|body|body|[CreateResolverRuleRequest](#schemacreateresolverrulerequest)|true|none|
|» CreatorRequestId|body|object|true|none|
|» Name|body|object|false|none|
|» RuleType|body|object|true|none|
|» DomainName|body|object|true|none|
|» TargetIps|body|object|false|none|
|» ResolverEndpointId|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.CreateResolverRule|

> Example responses

> 200 Response

```json
{
  "ResolverRule": {
    "Id": {},
    "CreatorRequestId": {},
    "Arn": {},
    "DomainName": {},
    "Status": {},
    "StatusMessage": {},
    "RuleType": {},
    "Name": {},
    "TargetIps": {},
    "ResolverEndpointId": {},
    "OwnerId": {},
    "ShareStatus": {},
    "CreationTime": {},
    "ModificationTime": {}
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

<h3 id="createresolverrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateResolverRuleResponse](#schemacreateresolverruleresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ResourceExistsException|[ResourceExistsException](#schemaresourceexistsexception)|
|485|485|ResourceUnavailableException|[ResourceUnavailableException](#schemaresourceunavailableexception)|
|486|486|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|487|487|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteFirewallDomainList

<a id="opIdDeleteFirewallDomainList"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.DeleteFirewallDomainList' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.DeleteFirewallDomainList' \
  -d '{
    "FirewallDomainListId": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.DeleteFirewallDomainList`

Deletes the specified domain list. 

> Body parameter

```json
{
  "FirewallDomainListId": {}
}
```

<h3 id="deletefirewalldomainlist-parameters">Parameters</h3>

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
|body|body|[DeleteFirewallDomainListRequest](#schemadeletefirewalldomainlistrequest)|true|none|
|» FirewallDomainListId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.DeleteFirewallDomainList|

> Example responses

> 200 Response

```json
{
  "FirewallDomainList": {
    "Id": {},
    "Arn": {},
    "Name": {},
    "DomainCount": {},
    "Status": {},
    "StatusMessage": {},
    "ManagedOwnerName": {},
    "CreatorRequestId": {},
    "CreationTime": {},
    "ModificationTime": {}
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

<h3 id="deletefirewalldomainlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteFirewallDomainListResponse](#schemadeletefirewalldomainlistresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteFirewallRule

<a id="opIdDeleteFirewallRule"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.DeleteFirewallRule' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.DeleteFirewallRule' \
  -d '{
    "FirewallRuleGroupId": {},
    "FirewallDomainListId": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.DeleteFirewallRule`

Deletes the specified firewall rule.

> Body parameter

```json
{
  "FirewallRuleGroupId": {},
  "FirewallDomainListId": {}
}
```

<h3 id="deletefirewallrule-parameters">Parameters</h3>

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
|body|body|[DeleteFirewallRuleRequest](#schemadeletefirewallrulerequest)|true|none|
|» FirewallRuleGroupId|body|object|true|none|
|» FirewallDomainListId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.DeleteFirewallRule|

> Example responses

> 200 Response

```json
{
  "FirewallRule": {
    "FirewallRuleGroupId": {},
    "FirewallDomainListId": {},
    "Name": {},
    "Priority": {},
    "Action": {},
    "BlockResponse": {},
    "BlockOverrideDomain": {},
    "BlockOverrideDnsType": {},
    "BlockOverrideTtl": {},
    "CreatorRequestId": {},
    "CreationTime": {},
    "ModificationTime": {}
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

<h3 id="deletefirewallrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteFirewallRuleResponse](#schemadeletefirewallruleresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteFirewallRuleGroup

<a id="opIdDeleteFirewallRuleGroup"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.DeleteFirewallRuleGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.DeleteFirewallRuleGroup' \
  -d '{
    "FirewallRuleGroupId": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.DeleteFirewallRuleGroup`

Deletes the specified firewall rule group. 

> Body parameter

```json
{
  "FirewallRuleGroupId": {}
}
```

<h3 id="deletefirewallrulegroup-parameters">Parameters</h3>

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
|body|body|[DeleteFirewallRuleGroupRequest](#schemadeletefirewallrulegrouprequest)|true|none|
|» FirewallRuleGroupId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.DeleteFirewallRuleGroup|

> Example responses

> 200 Response

```json
{
  "FirewallRuleGroup": {
    "Id": {},
    "Arn": {},
    "Name": {},
    "RuleCount": {},
    "Status": {},
    "StatusMessage": {},
    "OwnerId": {},
    "CreatorRequestId": {},
    "ShareStatus": {},
    "CreationTime": {},
    "ModificationTime": {}
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

<h3 id="deletefirewallrulegroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteFirewallRuleGroupResponse](#schemadeletefirewallrulegroupresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteResolverEndpoint

<a id="opIdDeleteResolverEndpoint"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.DeleteResolverEndpoint' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.DeleteResolverEndpoint' \
  -d '{
    "ResolverEndpointId": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.DeleteResolverEndpoint`

<p>Deletes a Resolver endpoint. The effect of deleting a Resolver endpoint depends on whether it's an inbound or an outbound Resolver endpoint:</p> <ul> <li> <p> <b>Inbound</b>: DNS queries from your network are no longer routed to the DNS service for the specified VPC.</p> </li> <li> <p> <b>Outbound</b>: DNS queries from a VPC are no longer routed to your network.</p> </li> </ul>

> Body parameter

```json
{
  "ResolverEndpointId": {}
}
```

<h3 id="deleteresolverendpoint-parameters">Parameters</h3>

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
|body|body|[DeleteResolverEndpointRequest](#schemadeleteresolverendpointrequest)|true|none|
|» ResolverEndpointId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.DeleteResolverEndpoint|

> Example responses

> 200 Response

```json
{
  "ResolverEndpoint": {
    "Id": {},
    "CreatorRequestId": {},
    "Arn": {},
    "Name": {},
    "SecurityGroupIds": {},
    "Direction": {},
    "IpAddressCount": {},
    "HostVPCId": {},
    "Status": {},
    "StatusMessage": {},
    "CreationTime": {},
    "ModificationTime": {},
    "ResolverEndpointType": {}
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

<h3 id="deleteresolverendpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteResolverEndpointResponse](#schemadeleteresolverendpointresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteResolverQueryLogConfig

<a id="opIdDeleteResolverQueryLogConfig"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.DeleteResolverQueryLogConfig' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.DeleteResolverQueryLogConfig' \
  -d '{
    "ResolverQueryLogConfigId": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.DeleteResolverQueryLogConfig`

<p>Deletes a query logging configuration. When you delete a configuration, Resolver stops logging DNS queries for all of the Amazon VPCs that are associated with the configuration. This also applies if the query logging configuration is shared with other Amazon Web Services accounts, and the other accounts have associated VPCs with the shared configuration.</p> <p>Before you can delete a query logging configuration, you must first disassociate all VPCs from the configuration. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverQueryLogConfig.html">DisassociateResolverQueryLogConfig</a>.</p> <p>If you used Resource Access Manager (RAM) to share a query logging configuration with other accounts, you must stop sharing the configuration before you can delete a configuration. The accounts that you shared the configuration with can first disassociate VPCs that they associated with the configuration, but that's not necessary. If you stop sharing the configuration, those VPCs are automatically disassociated from the configuration.</p>

> Body parameter

```json
{
  "ResolverQueryLogConfigId": {}
}
```

<h3 id="deleteresolverquerylogconfig-parameters">Parameters</h3>

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
|body|body|[DeleteResolverQueryLogConfigRequest](#schemadeleteresolverquerylogconfigrequest)|true|none|
|» ResolverQueryLogConfigId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.DeleteResolverQueryLogConfig|

> Example responses

> 200 Response

```json
{
  "ResolverQueryLogConfig": {
    "Id": {},
    "OwnerId": {},
    "Status": {},
    "ShareStatus": {},
    "AssociationCount": {},
    "Arn": {},
    "Name": {},
    "DestinationArn": {},
    "CreatorRequestId": {},
    "CreationTime": {}
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

<h3 id="deleteresolverquerylogconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteResolverQueryLogConfigResponse](#schemadeleteresolverquerylogconfigresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteResolverRule

<a id="opIdDeleteResolverRule"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.DeleteResolverRule' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.DeleteResolverRule' \
  -d '{
    "ResolverRuleId": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.DeleteResolverRule`

Deletes a Resolver rule. Before you can delete a Resolver rule, you must disassociate it from all the VPCs that you associated the Resolver rule with. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverRule.html">DisassociateResolverRule</a>.

> Body parameter

```json
{
  "ResolverRuleId": {}
}
```

<h3 id="deleteresolverrule-parameters">Parameters</h3>

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
|body|body|[DeleteResolverRuleRequest](#schemadeleteresolverrulerequest)|true|none|
|» ResolverRuleId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.DeleteResolverRule|

> Example responses

> 200 Response

```json
{
  "ResolverRule": {
    "Id": {},
    "CreatorRequestId": {},
    "Arn": {},
    "DomainName": {},
    "Status": {},
    "StatusMessage": {},
    "RuleType": {},
    "Name": {},
    "TargetIps": {},
    "ResolverEndpointId": {},
    "OwnerId": {},
    "ShareStatus": {},
    "CreationTime": {},
    "ModificationTime": {}
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

<h3 id="deleteresolverrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteResolverRuleResponse](#schemadeleteresolverruleresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateFirewallRuleGroup

<a id="opIdDisassociateFirewallRuleGroup"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.DisassociateFirewallRuleGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.DisassociateFirewallRuleGroup' \
  -d '{
    "FirewallRuleGroupAssociationId": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.DisassociateFirewallRuleGroup`

Disassociates a <a>FirewallRuleGroup</a> from a VPC, to remove DNS filtering from the VPC. 

> Body parameter

```json
{
  "FirewallRuleGroupAssociationId": {}
}
```

<h3 id="disassociatefirewallrulegroup-parameters">Parameters</h3>

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
|body|body|[DisassociateFirewallRuleGroupRequest](#schemadisassociatefirewallrulegrouprequest)|true|none|
|» FirewallRuleGroupAssociationId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.DisassociateFirewallRuleGroup|

> Example responses

> 200 Response

```json
{
  "FirewallRuleGroupAssociation": {
    "Id": {},
    "Arn": {},
    "FirewallRuleGroupId": {},
    "VpcId": {},
    "Name": {},
    "Priority": {},
    "MutationProtection": {},
    "ManagedOwnerName": {},
    "Status": {},
    "StatusMessage": {},
    "CreatorRequestId": {},
    "CreationTime": {},
    "ModificationTime": {}
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

<h3 id="disassociatefirewallrulegroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateFirewallRuleGroupResponse](#schemadisassociatefirewallrulegroupresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateResolverEndpointIpAddress

<a id="opIdDisassociateResolverEndpointIpAddress"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.DisassociateResolverEndpointIpAddress' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.DisassociateResolverEndpointIpAddress' \
  -d '{
    "ResolverEndpointId": {},
    "IpAddress": {
      "IpId": {},
      "SubnetId": {},
      "Ip": {},
      "Ipv6": {}
    }
  }'
```

`POST /#X-Amz-Target=Route53Resolver.DisassociateResolverEndpointIpAddress`

<p>Removes IP addresses from an inbound or an outbound Resolver endpoint. If you want to remove more than one IP address, submit one <code>DisassociateResolverEndpointIpAddress</code> request for each IP address.</p> <p>To add an IP address to an endpoint, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverEndpointIpAddress.html">AssociateResolverEndpointIpAddress</a>. </p>

> Body parameter

```json
{
  "ResolverEndpointId": {},
  "IpAddress": {
    "IpId": {},
    "SubnetId": {},
    "Ip": {},
    "Ipv6": {}
  }
}
```

<h3 id="disassociateresolverendpointipaddress-parameters">Parameters</h3>

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
|body|body|[DisassociateResolverEndpointIpAddressRequest](#schemadisassociateresolverendpointipaddressrequest)|true|none|
|» ResolverEndpointId|body|object|true|none|
|» IpAddress|body|object|true|none|
|» » IpId|body|object|false|none|
|» » SubnetId|body|object|false|none|
|» » Ip|body|object|false|none|
|» » Ipv6|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.DisassociateResolverEndpointIpAddress|

> Example responses

> 200 Response

```json
{
  "ResolverEndpoint": {
    "Id": {},
    "CreatorRequestId": {},
    "Arn": {},
    "Name": {},
    "SecurityGroupIds": {},
    "Direction": {},
    "IpAddressCount": {},
    "HostVPCId": {},
    "Status": {},
    "StatusMessage": {},
    "CreationTime": {},
    "ModificationTime": {},
    "ResolverEndpointType": {}
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

<h3 id="disassociateresolverendpointipaddress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateResolverEndpointIpAddressResponse](#schemadisassociateresolverendpointipaddressresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceExistsException|[ResourceExistsException](#schemaresourceexistsexception)|
|484|484|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateResolverQueryLogConfig

<a id="opIdDisassociateResolverQueryLogConfig"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.DisassociateResolverQueryLogConfig' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.DisassociateResolverQueryLogConfig' \
  -d '{
    "ResolverQueryLogConfigId": {},
    "ResourceId": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.DisassociateResolverQueryLogConfig`

<p>Disassociates a VPC from a query logging configuration.</p> <note> <p>Before you can delete a query logging configuration, you must first disassociate all VPCs from the configuration. If you used Resource Access Manager (RAM) to share a query logging configuration with other accounts, VPCs can be disassociated from the configuration in the following ways:</p> <ul> <li> <p>The accounts that you shared the configuration with can disassociate VPCs from the configuration.</p> </li> <li> <p>You can stop sharing the configuration.</p> </li> </ul> </note>

> Body parameter

```json
{
  "ResolverQueryLogConfigId": {},
  "ResourceId": {}
}
```

<h3 id="disassociateresolverquerylogconfig-parameters">Parameters</h3>

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
|body|body|[DisassociateResolverQueryLogConfigRequest](#schemadisassociateresolverquerylogconfigrequest)|true|none|
|» ResolverQueryLogConfigId|body|object|true|none|
|» ResourceId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.DisassociateResolverQueryLogConfig|

> Example responses

> 200 Response

```json
{
  "ResolverQueryLogConfigAssociation": {
    "Id": {},
    "ResolverQueryLogConfigId": {},
    "ResourceId": {},
    "Status": {},
    "Error": {},
    "ErrorMessage": {},
    "CreationTime": {}
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

<h3 id="disassociateresolverquerylogconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateResolverQueryLogConfigResponse](#schemadisassociateresolverquerylogconfigresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateResolverRule

<a id="opIdDisassociateResolverRule"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.DisassociateResolverRule' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.DisassociateResolverRule' \
  -d '{
    "VPCId": {},
    "ResolverRuleId": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.DisassociateResolverRule`

<p>Removes the association between a specified Resolver rule and a specified VPC.</p> <important> <p>If you disassociate a Resolver rule from a VPC, Resolver stops forwarding DNS queries for the domain name that you specified in the Resolver rule. </p> </important>

> Body parameter

```json
{
  "VPCId": {},
  "ResolverRuleId": {}
}
```

<h3 id="disassociateresolverrule-parameters">Parameters</h3>

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
|body|body|[DisassociateResolverRuleRequest](#schemadisassociateresolverrulerequest)|true|none|
|» VPCId|body|object|true|none|
|» ResolverRuleId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.DisassociateResolverRule|

> Example responses

> 200 Response

```json
{
  "ResolverRuleAssociation": {
    "Id": {},
    "ResolverRuleId": {},
    "Name": {},
    "VPCId": {},
    "Status": {},
    "StatusMessage": {}
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

<h3 id="disassociateresolverrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateResolverRuleResponse](#schemadisassociateresolverruleresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetFirewallConfig

<a id="opIdGetFirewallConfig"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.GetFirewallConfig' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.GetFirewallConfig' \
  -d '{
    "ResourceId": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.GetFirewallConfig`

Retrieves the configuration of the firewall behavior provided by DNS Firewall for a single VPC from Amazon Virtual Private Cloud (Amazon VPC). 

> Body parameter

```json
{
  "ResourceId": {}
}
```

<h3 id="getfirewallconfig-parameters">Parameters</h3>

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
|body|body|[GetFirewallConfigRequest](#schemagetfirewallconfigrequest)|true|none|
|» ResourceId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.GetFirewallConfig|

> Example responses

> 200 Response

```json
{
  "FirewallConfig": {
    "Id": {},
    "ResourceId": {},
    "OwnerId": {},
    "FirewallFailOpen": {}
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

<h3 id="getfirewallconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetFirewallConfigResponse](#schemagetfirewallconfigresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetFirewallDomainList

<a id="opIdGetFirewallDomainList"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.GetFirewallDomainList' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.GetFirewallDomainList' \
  -d '{
    "FirewallDomainListId": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.GetFirewallDomainList`

Retrieves the specified firewall domain list.

> Body parameter

```json
{
  "FirewallDomainListId": {}
}
```

<h3 id="getfirewalldomainlist-parameters">Parameters</h3>

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
|body|body|[GetFirewallDomainListRequest](#schemagetfirewalldomainlistrequest)|true|none|
|» FirewallDomainListId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.GetFirewallDomainList|

> Example responses

> 200 Response

```json
{
  "FirewallDomainList": {
    "Id": {},
    "Arn": {},
    "Name": {},
    "DomainCount": {},
    "Status": {},
    "StatusMessage": {},
    "ManagedOwnerName": {},
    "CreatorRequestId": {},
    "CreationTime": {},
    "ModificationTime": {}
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

<h3 id="getfirewalldomainlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetFirewallDomainListResponse](#schemagetfirewalldomainlistresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetFirewallRuleGroup

<a id="opIdGetFirewallRuleGroup"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.GetFirewallRuleGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.GetFirewallRuleGroup' \
  -d '{
    "FirewallRuleGroupId": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.GetFirewallRuleGroup`

Retrieves the specified firewall rule group. 

> Body parameter

```json
{
  "FirewallRuleGroupId": {}
}
```

<h3 id="getfirewallrulegroup-parameters">Parameters</h3>

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
|body|body|[GetFirewallRuleGroupRequest](#schemagetfirewallrulegrouprequest)|true|none|
|» FirewallRuleGroupId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.GetFirewallRuleGroup|

> Example responses

> 200 Response

```json
{
  "FirewallRuleGroup": {
    "Id": {},
    "Arn": {},
    "Name": {},
    "RuleCount": {},
    "Status": {},
    "StatusMessage": {},
    "OwnerId": {},
    "CreatorRequestId": {},
    "ShareStatus": {},
    "CreationTime": {},
    "ModificationTime": {}
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

<h3 id="getfirewallrulegroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetFirewallRuleGroupResponse](#schemagetfirewallrulegroupresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetFirewallRuleGroupAssociation

<a id="opIdGetFirewallRuleGroupAssociation"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.GetFirewallRuleGroupAssociation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.GetFirewallRuleGroupAssociation' \
  -d '{
    "FirewallRuleGroupAssociationId": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.GetFirewallRuleGroupAssociation`

Retrieves a firewall rule group association, which enables DNS filtering for a VPC with one rule group. A VPC can have more than one firewall rule group association, and a rule group can be associated with more than one VPC.

> Body parameter

```json
{
  "FirewallRuleGroupAssociationId": {}
}
```

<h3 id="getfirewallrulegroupassociation-parameters">Parameters</h3>

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
|body|body|[GetFirewallRuleGroupAssociationRequest](#schemagetfirewallrulegroupassociationrequest)|true|none|
|» FirewallRuleGroupAssociationId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.GetFirewallRuleGroupAssociation|

> Example responses

> 200 Response

```json
{
  "FirewallRuleGroupAssociation": {
    "Id": {},
    "Arn": {},
    "FirewallRuleGroupId": {},
    "VpcId": {},
    "Name": {},
    "Priority": {},
    "MutationProtection": {},
    "ManagedOwnerName": {},
    "Status": {},
    "StatusMessage": {},
    "CreatorRequestId": {},
    "CreationTime": {},
    "ModificationTime": {}
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

<h3 id="getfirewallrulegroupassociation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetFirewallRuleGroupAssociationResponse](#schemagetfirewallrulegroupassociationresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetFirewallRuleGroupPolicy

<a id="opIdGetFirewallRuleGroupPolicy"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.GetFirewallRuleGroupPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.GetFirewallRuleGroupPolicy' \
  -d '{
    "Arn": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.GetFirewallRuleGroupPolicy`

Returns the Identity and Access Management (Amazon Web Services IAM) policy for sharing the specified rule group. You can use the policy to share the rule group using Resource Access Manager (RAM). 

> Body parameter

```json
{
  "Arn": {}
}
```

<h3 id="getfirewallrulegrouppolicy-parameters">Parameters</h3>

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
|body|body|[GetFirewallRuleGroupPolicyRequest](#schemagetfirewallrulegrouppolicyrequest)|true|none|
|» Arn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.GetFirewallRuleGroupPolicy|

> Example responses

> 200 Response

```json
{
  "FirewallRuleGroupPolicy": {}
}
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

<h3 id="getfirewallrulegrouppolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetFirewallRuleGroupPolicyResponse](#schemagetfirewallrulegrouppolicyresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetResolverConfig

<a id="opIdGetResolverConfig"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.GetResolverConfig' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.GetResolverConfig' \
  -d '{
    "ResourceId": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.GetResolverConfig`

Retrieves the behavior configuration of Route 53 Resolver behavior for a single VPC from Amazon Virtual Private Cloud.

> Body parameter

```json
{
  "ResourceId": {}
}
```

<h3 id="getresolverconfig-parameters">Parameters</h3>

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
|body|body|[GetResolverConfigRequest](#schemagetresolverconfigrequest)|true|none|
|» ResourceId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.GetResolverConfig|

> Example responses

> 200 Response

```json
{
  "ResolverConfig": {
    "Id": {},
    "ResourceId": {},
    "OwnerId": {},
    "AutodefinedReverse": {}
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

<h3 id="getresolverconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetResolverConfigResponse](#schemagetresolverconfigresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetResolverDnssecConfig

<a id="opIdGetResolverDnssecConfig"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.GetResolverDnssecConfig' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.GetResolverDnssecConfig' \
  -d '{
    "ResourceId": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.GetResolverDnssecConfig`

Gets DNSSEC validation information for a specified resource.

> Body parameter

```json
{
  "ResourceId": {}
}
```

<h3 id="getresolverdnssecconfig-parameters">Parameters</h3>

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
|body|body|[GetResolverDnssecConfigRequest](#schemagetresolverdnssecconfigrequest)|true|none|
|» ResourceId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.GetResolverDnssecConfig|

> Example responses

> 200 Response

```json
{
  "ResolverDNSSECConfig": {
    "Id": {},
    "OwnerId": {},
    "ResourceId": {},
    "ValidationStatus": {}
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

<h3 id="getresolverdnssecconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetResolverDnssecConfigResponse](#schemagetresolverdnssecconfigresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetResolverEndpoint

<a id="opIdGetResolverEndpoint"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.GetResolverEndpoint' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.GetResolverEndpoint' \
  -d '{
    "ResolverEndpointId": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.GetResolverEndpoint`

Gets information about a specified Resolver endpoint, such as whether it's an inbound or an outbound Resolver endpoint, and the current status of the endpoint.

> Body parameter

```json
{
  "ResolverEndpointId": {}
}
```

<h3 id="getresolverendpoint-parameters">Parameters</h3>

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
|body|body|[GetResolverEndpointRequest](#schemagetresolverendpointrequest)|true|none|
|» ResolverEndpointId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.GetResolverEndpoint|

> Example responses

> 200 Response

```json
{
  "ResolverEndpoint": {
    "Id": {},
    "CreatorRequestId": {},
    "Arn": {},
    "Name": {},
    "SecurityGroupIds": {},
    "Direction": {},
    "IpAddressCount": {},
    "HostVPCId": {},
    "Status": {},
    "StatusMessage": {},
    "CreationTime": {},
    "ModificationTime": {},
    "ResolverEndpointType": {}
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

<h3 id="getresolverendpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetResolverEndpointResponse](#schemagetresolverendpointresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetResolverQueryLogConfig

<a id="opIdGetResolverQueryLogConfig"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfig' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.GetResolverQueryLogConfig' \
  -d '{
    "ResolverQueryLogConfigId": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfig`

Gets information about a specified Resolver query logging configuration, such as the number of VPCs that the configuration is logging queries for and the location that logs are sent to. 

> Body parameter

```json
{
  "ResolverQueryLogConfigId": {}
}
```

<h3 id="getresolverquerylogconfig-parameters">Parameters</h3>

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
|body|body|[GetResolverQueryLogConfigRequest](#schemagetresolverquerylogconfigrequest)|true|none|
|» ResolverQueryLogConfigId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.GetResolverQueryLogConfig|

> Example responses

> 200 Response

```json
{
  "ResolverQueryLogConfig": {
    "Id": {},
    "OwnerId": {},
    "Status": {},
    "ShareStatus": {},
    "AssociationCount": {},
    "Arn": {},
    "Name": {},
    "DestinationArn": {},
    "CreatorRequestId": {},
    "CreationTime": {}
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

<h3 id="getresolverquerylogconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetResolverQueryLogConfigResponse](#schemagetresolverquerylogconfigresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetResolverQueryLogConfigAssociation

<a id="opIdGetResolverQueryLogConfigAssociation"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfigAssociation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.GetResolverQueryLogConfigAssociation' \
  -d '{
    "ResolverQueryLogConfigAssociationId": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfigAssociation`

Gets information about a specified association between a Resolver query logging configuration and an Amazon VPC. When you associate a VPC with a query logging configuration, Resolver logs DNS queries that originate in that VPC.

> Body parameter

```json
{
  "ResolverQueryLogConfigAssociationId": {}
}
```

<h3 id="getresolverquerylogconfigassociation-parameters">Parameters</h3>

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
|body|body|[GetResolverQueryLogConfigAssociationRequest](#schemagetresolverquerylogconfigassociationrequest)|true|none|
|» ResolverQueryLogConfigAssociationId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.GetResolverQueryLogConfigAssociation|

> Example responses

> 200 Response

```json
{
  "ResolverQueryLogConfigAssociation": {
    "Id": {},
    "ResolverQueryLogConfigId": {},
    "ResourceId": {},
    "Status": {},
    "Error": {},
    "ErrorMessage": {},
    "CreationTime": {}
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

<h3 id="getresolverquerylogconfigassociation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetResolverQueryLogConfigAssociationResponse](#schemagetresolverquerylogconfigassociationresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetResolverQueryLogConfigPolicy

<a id="opIdGetResolverQueryLogConfigPolicy"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfigPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.GetResolverQueryLogConfigPolicy' \
  -d '{
    "Arn": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfigPolicy`

Gets information about a query logging policy. A query logging policy specifies the Resolver query logging operations and resources that you want to allow another Amazon Web Services account to be able to use.

> Body parameter

```json
{
  "Arn": {}
}
```

<h3 id="getresolverquerylogconfigpolicy-parameters">Parameters</h3>

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
|body|body|[GetResolverQueryLogConfigPolicyRequest](#schemagetresolverquerylogconfigpolicyrequest)|true|none|
|» Arn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.GetResolverQueryLogConfigPolicy|

> Example responses

> 200 Response

```json
{
  "ResolverQueryLogConfigPolicy": {}
}
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

<h3 id="getresolverquerylogconfigpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetResolverQueryLogConfigPolicyResponse](#schemagetresolverquerylogconfigpolicyresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|UnknownResourceException|[UnknownResourceException](#schemaunknownresourceexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetResolverRule

<a id="opIdGetResolverRule"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.GetResolverRule' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.GetResolverRule' \
  -d '{
    "ResolverRuleId": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.GetResolverRule`

Gets information about a specified Resolver rule, such as the domain name that the rule forwards DNS queries for and the ID of the outbound Resolver endpoint that the rule is associated with.

> Body parameter

```json
{
  "ResolverRuleId": {}
}
```

<h3 id="getresolverrule-parameters">Parameters</h3>

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
|body|body|[GetResolverRuleRequest](#schemagetresolverrulerequest)|true|none|
|» ResolverRuleId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.GetResolverRule|

> Example responses

> 200 Response

```json
{
  "ResolverRule": {
    "Id": {},
    "CreatorRequestId": {},
    "Arn": {},
    "DomainName": {},
    "Status": {},
    "StatusMessage": {},
    "RuleType": {},
    "Name": {},
    "TargetIps": {},
    "ResolverEndpointId": {},
    "OwnerId": {},
    "ShareStatus": {},
    "CreationTime": {},
    "ModificationTime": {}
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

<h3 id="getresolverrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetResolverRuleResponse](#schemagetresolverruleresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetResolverRuleAssociation

<a id="opIdGetResolverRuleAssociation"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.GetResolverRuleAssociation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.GetResolverRuleAssociation' \
  -d '{
    "ResolverRuleAssociationId": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.GetResolverRuleAssociation`

Gets information about an association between a specified Resolver rule and a VPC. You associate a Resolver rule and a VPC using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverRule.html">AssociateResolverRule</a>. 

> Body parameter

```json
{
  "ResolverRuleAssociationId": {}
}
```

<h3 id="getresolverruleassociation-parameters">Parameters</h3>

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
|body|body|[GetResolverRuleAssociationRequest](#schemagetresolverruleassociationrequest)|true|none|
|» ResolverRuleAssociationId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.GetResolverRuleAssociation|

> Example responses

> 200 Response

```json
{
  "ResolverRuleAssociation": {
    "Id": {},
    "ResolverRuleId": {},
    "Name": {},
    "VPCId": {},
    "Status": {},
    "StatusMessage": {}
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

<h3 id="getresolverruleassociation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetResolverRuleAssociationResponse](#schemagetresolverruleassociationresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetResolverRulePolicy

<a id="opIdGetResolverRulePolicy"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.GetResolverRulePolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.GetResolverRulePolicy' \
  -d '{
    "Arn": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.GetResolverRulePolicy`

Gets information about the Resolver rule policy for a specified rule. A Resolver rule policy includes the rule that you want to share with another account, the account that you want to share the rule with, and the Resolver operations that you want to allow the account to use. 

> Body parameter

```json
{
  "Arn": {}
}
```

<h3 id="getresolverrulepolicy-parameters">Parameters</h3>

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
|body|body|[GetResolverRulePolicyRequest](#schemagetresolverrulepolicyrequest)|true|none|
|» Arn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.GetResolverRulePolicy|

> Example responses

> 200 Response

```json
{
  "ResolverRulePolicy": {}
}
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

<h3 id="getresolverrulepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetResolverRulePolicyResponse](#schemagetresolverrulepolicyresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|UnknownResourceException|[UnknownResourceException](#schemaunknownresourceexception)|
|482|482|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ImportFirewallDomains

<a id="opIdImportFirewallDomains"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.ImportFirewallDomains' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.ImportFirewallDomains' \
  -d '{
    "FirewallDomainListId": {},
    "Operation": {},
    "DomainFileUrl": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.ImportFirewallDomains`

<p>Imports domain names from a file into a domain list, for use in a DNS firewall rule group. </p> <p>Each domain specification in your domain list must satisfy the following requirements: </p> <ul> <li> <p>It can optionally start with <code>*</code> (asterisk).</p> </li> <li> <p>With the exception of the optional starting asterisk, it must only contain the following characters: <code>A-Z</code>, <code>a-z</code>, <code>0-9</code>, <code>-</code> (hyphen).</p> </li> <li> <p>It must be from 1-255 characters in length. </p> </li> </ul>

> Body parameter

```json
{
  "FirewallDomainListId": {},
  "Operation": {},
  "DomainFileUrl": {}
}
```

<h3 id="importfirewalldomains-parameters">Parameters</h3>

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
|body|body|[ImportFirewallDomainsRequest](#schemaimportfirewalldomainsrequest)|true|none|
|» FirewallDomainListId|body|object|true|none|
|» Operation|body|object|true|none|
|» DomainFileUrl|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.ImportFirewallDomains|

> Example responses

> 200 Response

```json
{
  "Id": {},
  "Name": {},
  "Status": {},
  "StatusMessage": {}
}
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

<h3 id="importfirewalldomains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ImportFirewallDomainsResponse](#schemaimportfirewalldomainsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|486|486|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListFirewallConfigs

<a id="opIdListFirewallConfigs"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.ListFirewallConfigs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.ListFirewallConfigs' \
  -d '{
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.ListFirewallConfigs`

<p>Retrieves the firewall configurations that you have defined. DNS Firewall uses the configurations to manage firewall behavior for your VPCs. </p> <p>A single call might return only a partial list of the configurations. For information, see <code>MaxResults</code>. </p>

> Body parameter

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listfirewallconfigs-parameters">Parameters</h3>

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
|body|body|[ListFirewallConfigsRequest](#schemalistfirewallconfigsrequest)|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.ListFirewallConfigs|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "FirewallConfigs": {}
}
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

<h3 id="listfirewallconfigs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListFirewallConfigsResponse](#schemalistfirewallconfigsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListFirewallDomainLists

<a id="opIdListFirewallDomainLists"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.ListFirewallDomainLists' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.ListFirewallDomainLists' \
  -d '{
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.ListFirewallDomainLists`

<p>Retrieves the firewall domain lists that you have defined. For each firewall domain list, you can retrieve the domains that are defined for a list by calling <a>ListFirewallDomains</a>. </p> <p>A single call to this list operation might return only a partial list of the domain lists. For information, see <code>MaxResults</code>. </p>

> Body parameter

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listfirewalldomainlists-parameters">Parameters</h3>

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
|body|body|[ListFirewallDomainListsRequest](#schemalistfirewalldomainlistsrequest)|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.ListFirewallDomainLists|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "FirewallDomainLists": {}
}
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

<h3 id="listfirewalldomainlists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListFirewallDomainListsResponse](#schemalistfirewalldomainlistsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListFirewallDomains

<a id="opIdListFirewallDomains"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.ListFirewallDomains' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.ListFirewallDomains' \
  -d '{
    "FirewallDomainListId": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.ListFirewallDomains`

<p>Retrieves the domains that you have defined for the specified firewall domain list. </p> <p>A single call might return only a partial list of the domains. For information, see <code>MaxResults</code>. </p>

> Body parameter

```json
{
  "FirewallDomainListId": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listfirewalldomains-parameters">Parameters</h3>

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
|body|body|[ListFirewallDomainsRequest](#schemalistfirewalldomainsrequest)|true|none|
|» FirewallDomainListId|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.ListFirewallDomains|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "Domains": {}
}
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

<h3 id="listfirewalldomains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListFirewallDomainsResponse](#schemalistfirewalldomainsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListFirewallRuleGroupAssociations

<a id="opIdListFirewallRuleGroupAssociations"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.ListFirewallRuleGroupAssociations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.ListFirewallRuleGroupAssociations' \
  -d '{
    "FirewallRuleGroupId": {},
    "VpcId": {},
    "Priority": {},
    "Status": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.ListFirewallRuleGroupAssociations`

<p>Retrieves the firewall rule group associations that you have defined. Each association enables DNS filtering for a VPC with one rule group. </p> <p>A single call might return only a partial list of the associations. For information, see <code>MaxResults</code>. </p>

> Body parameter

```json
{
  "FirewallRuleGroupId": {},
  "VpcId": {},
  "Priority": {},
  "Status": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listfirewallrulegroupassociations-parameters">Parameters</h3>

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
|body|body|[ListFirewallRuleGroupAssociationsRequest](#schemalistfirewallrulegroupassociationsrequest)|true|none|
|» FirewallRuleGroupId|body|object|false|none|
|» VpcId|body|object|false|none|
|» Priority|body|object|false|none|
|» Status|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.ListFirewallRuleGroupAssociations|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "FirewallRuleGroupAssociations": {}
}
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

<h3 id="listfirewallrulegroupassociations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListFirewallRuleGroupAssociationsResponse](#schemalistfirewallrulegroupassociationsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListFirewallRuleGroups

<a id="opIdListFirewallRuleGroups"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.ListFirewallRuleGroups' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.ListFirewallRuleGroups' \
  -d '{
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.ListFirewallRuleGroups`

<p>Retrieves the minimal high-level information for the rule groups that you have defined. </p> <p>A single call might return only a partial list of the rule groups. For information, see <code>MaxResults</code>. </p>

> Body parameter

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listfirewallrulegroups-parameters">Parameters</h3>

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
|body|body|[ListFirewallRuleGroupsRequest](#schemalistfirewallrulegroupsrequest)|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.ListFirewallRuleGroups|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "FirewallRuleGroups": {}
}
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

<h3 id="listfirewallrulegroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListFirewallRuleGroupsResponse](#schemalistfirewallrulegroupsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListFirewallRules

<a id="opIdListFirewallRules"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.ListFirewallRules' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.ListFirewallRules' \
  -d '{
    "FirewallRuleGroupId": {},
    "Priority": {},
    "Action": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.ListFirewallRules`

<p>Retrieves the firewall rules that you have defined for the specified firewall rule group. DNS Firewall uses the rules in a rule group to filter DNS network traffic for a VPC. </p> <p>A single call might return only a partial list of the rules. For information, see <code>MaxResults</code>. </p>

> Body parameter

```json
{
  "FirewallRuleGroupId": {},
  "Priority": {},
  "Action": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listfirewallrules-parameters">Parameters</h3>

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
|body|body|[ListFirewallRulesRequest](#schemalistfirewallrulesrequest)|true|none|
|» FirewallRuleGroupId|body|object|true|none|
|» Priority|body|object|false|none|
|» Action|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.ListFirewallRules|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "FirewallRules": {}
}
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

<h3 id="listfirewallrules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListFirewallRulesResponse](#schemalistfirewallrulesresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListResolverConfigs

<a id="opIdListResolverConfigs"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.ListResolverConfigs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.ListResolverConfigs' \
  -d '{
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.ListResolverConfigs`

Retrieves the Resolver configurations that you have defined. Route 53 Resolver uses the configurations to manage DNS resolution behavior for your VPCs.

> Body parameter

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listresolverconfigs-parameters">Parameters</h3>

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
|body|body|[ListResolverConfigsRequest](#schemalistresolverconfigsrequest)|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.ListResolverConfigs|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "ResolverConfigs": {}
}
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

<h3 id="listresolverconfigs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListResolverConfigsResponse](#schemalistresolverconfigsresponse)|
|480|480|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListResolverDnssecConfigs

<a id="opIdListResolverDnssecConfigs"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.ListResolverDnssecConfigs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.ListResolverDnssecConfigs' \
  -d '{
    "MaxResults": {},
    "NextToken": {},
    "Filters": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.ListResolverDnssecConfigs`

Lists the configurations for DNSSEC validation that are associated with the current Amazon Web Services account.

> Body parameter

```json
{
  "MaxResults": {},
  "NextToken": {},
  "Filters": {}
}
```

<h3 id="listresolverdnssecconfigs-parameters">Parameters</h3>

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
|body|body|[ListResolverDnssecConfigsRequest](#schemalistresolverdnssecconfigsrequest)|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|
|» Filters|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.ListResolverDnssecConfigs|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "ResolverDnssecConfigs": {}
}
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

<h3 id="listresolverdnssecconfigs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListResolverDnssecConfigsResponse](#schemalistresolverdnssecconfigsresponse)|
|480|480|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListResolverEndpointIpAddresses

<a id="opIdListResolverEndpointIpAddresses"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.ListResolverEndpointIpAddresses' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.ListResolverEndpointIpAddresses' \
  -d '{
    "ResolverEndpointId": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.ListResolverEndpointIpAddresses`

Gets the IP addresses for a specified Resolver endpoint.

> Body parameter

```json
{
  "ResolverEndpointId": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listresolverendpointipaddresses-parameters">Parameters</h3>

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
|body|body|[ListResolverEndpointIpAddressesRequest](#schemalistresolverendpointipaddressesrequest)|true|none|
|» ResolverEndpointId|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.ListResolverEndpointIpAddresses|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "MaxResults": {},
  "IpAddresses": {}
}
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

<h3 id="listresolverendpointipaddresses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListResolverEndpointIpAddressesResponse](#schemalistresolverendpointipaddressesresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|483|483|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListResolverEndpoints

<a id="opIdListResolverEndpoints"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.ListResolverEndpoints' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.ListResolverEndpoints' \
  -d '{
    "MaxResults": {},
    "NextToken": {},
    "Filters": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.ListResolverEndpoints`

Lists all the Resolver endpoints that were created using the current Amazon Web Services account.

> Body parameter

```json
{
  "MaxResults": {},
  "NextToken": {},
  "Filters": {}
}
```

<h3 id="listresolverendpoints-parameters">Parameters</h3>

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
|body|body|[ListResolverEndpointsRequest](#schemalistresolverendpointsrequest)|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|
|» Filters|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.ListResolverEndpoints|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "MaxResults": {},
  "ResolverEndpoints": {}
}
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

<h3 id="listresolverendpoints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListResolverEndpointsResponse](#schemalistresolverendpointsresponse)|
|480|480|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListResolverQueryLogConfigAssociations

<a id="opIdListResolverQueryLogConfigAssociations"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.ListResolverQueryLogConfigAssociations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.ListResolverQueryLogConfigAssociations' \
  -d '{
    "MaxResults": {},
    "NextToken": {},
    "Filters": {},
    "SortBy": {},
    "SortOrder": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.ListResolverQueryLogConfigAssociations`

Lists information about associations between Amazon VPCs and query logging configurations.

> Body parameter

```json
{
  "MaxResults": {},
  "NextToken": {},
  "Filters": {},
  "SortBy": {},
  "SortOrder": {}
}
```

<h3 id="listresolverquerylogconfigassociations-parameters">Parameters</h3>

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
|body|body|[ListResolverQueryLogConfigAssociationsRequest](#schemalistresolverquerylogconfigassociationsrequest)|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|
|» Filters|body|object|false|none|
|» SortBy|body|object|false|none|
|» SortOrder|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.ListResolverQueryLogConfigAssociations|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "TotalCount": {},
  "TotalFilteredCount": {},
  "ResolverQueryLogConfigAssociations": {}
}
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

<h3 id="listresolverquerylogconfigassociations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListResolverQueryLogConfigAssociationsResponse](#schemalistresolverquerylogconfigassociationsresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListResolverQueryLogConfigs

<a id="opIdListResolverQueryLogConfigs"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.ListResolverQueryLogConfigs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.ListResolverQueryLogConfigs' \
  -d '{
    "MaxResults": {},
    "NextToken": {},
    "Filters": {},
    "SortBy": {},
    "SortOrder": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.ListResolverQueryLogConfigs`

Lists information about the specified query logging configurations. Each configuration defines where you want Resolver to save DNS query logs and specifies the VPCs that you want to log queries for.

> Body parameter

```json
{
  "MaxResults": {},
  "NextToken": {},
  "Filters": {},
  "SortBy": {},
  "SortOrder": {}
}
```

<h3 id="listresolverquerylogconfigs-parameters">Parameters</h3>

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
|body|body|[ListResolverQueryLogConfigsRequest](#schemalistresolverquerylogconfigsrequest)|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|
|» Filters|body|object|false|none|
|» SortBy|body|object|false|none|
|» SortOrder|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.ListResolverQueryLogConfigs|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "TotalCount": {},
  "TotalFilteredCount": {},
  "ResolverQueryLogConfigs": {}
}
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

<h3 id="listresolverquerylogconfigs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListResolverQueryLogConfigsResponse](#schemalistresolverquerylogconfigsresponse)|
|480|480|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListResolverRuleAssociations

<a id="opIdListResolverRuleAssociations"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.ListResolverRuleAssociations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.ListResolverRuleAssociations' \
  -d '{
    "MaxResults": {},
    "NextToken": {},
    "Filters": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.ListResolverRuleAssociations`

Lists the associations that were created between Resolver rules and VPCs using the current Amazon Web Services account.

> Body parameter

```json
{
  "MaxResults": {},
  "NextToken": {},
  "Filters": {}
}
```

<h3 id="listresolverruleassociations-parameters">Parameters</h3>

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
|body|body|[ListResolverRuleAssociationsRequest](#schemalistresolverruleassociationsrequest)|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|
|» Filters|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.ListResolverRuleAssociations|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "MaxResults": {},
  "ResolverRuleAssociations": {}
}
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

<h3 id="listresolverruleassociations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListResolverRuleAssociationsResponse](#schemalistresolverruleassociationsresponse)|
|480|480|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListResolverRules

<a id="opIdListResolverRules"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.ListResolverRules' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.ListResolverRules' \
  -d '{
    "MaxResults": {},
    "NextToken": {},
    "Filters": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.ListResolverRules`

Lists the Resolver rules that were created using the current Amazon Web Services account.

> Body parameter

```json
{
  "MaxResults": {},
  "NextToken": {},
  "Filters": {}
}
```

<h3 id="listresolverrules-parameters">Parameters</h3>

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
|body|body|[ListResolverRulesRequest](#schemalistresolverrulesrequest)|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|
|» Filters|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.ListResolverRules|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "MaxResults": {},
  "ResolverRules": {}
}
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

<h3 id="listresolverrules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListResolverRulesResponse](#schemalistresolverrulesresponse)|
|480|480|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.ListTagsForResource' \
  -d '{
    "ResourceArn": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.ListTagsForResource`

Lists the tags that you associated with the specified resource.

> Body parameter

```json
{
  "ResourceArn": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listtagsforresource-parameters">Parameters</h3>

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
|body|body|[ListTagsForResourceRequest](#schemalisttagsforresourcerequest)|true|none|
|» ResourceArn|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.ListTagsForResource|

> Example responses

> 200 Response

```json
{
  "Tags": {},
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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutFirewallRuleGroupPolicy

<a id="opIdPutFirewallRuleGroupPolicy"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.PutFirewallRuleGroupPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.PutFirewallRuleGroupPolicy' \
  -d '{
    "Arn": {},
    "FirewallRuleGroupPolicy": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.PutFirewallRuleGroupPolicy`

Attaches an Identity and Access Management (Amazon Web Services IAM) policy for sharing the rule group. You can use the policy to share the rule group using Resource Access Manager (RAM). 

> Body parameter

```json
{
  "Arn": {},
  "FirewallRuleGroupPolicy": {}
}
```

<h3 id="putfirewallrulegrouppolicy-parameters">Parameters</h3>

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
|body|body|[PutFirewallRuleGroupPolicyRequest](#schemaputfirewallrulegrouppolicyrequest)|true|none|
|» Arn|body|object|true|none|
|» FirewallRuleGroupPolicy|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.PutFirewallRuleGroupPolicy|

> Example responses

> 200 Response

```json
{
  "ReturnValue": {}
}
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

<h3 id="putfirewallrulegrouppolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutFirewallRuleGroupPolicyResponse](#schemaputfirewallrulegrouppolicyresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutResolverQueryLogConfigPolicy

<a id="opIdPutResolverQueryLogConfigPolicy"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.PutResolverQueryLogConfigPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.PutResolverQueryLogConfigPolicy' \
  -d '{
    "Arn": {},
    "ResolverQueryLogConfigPolicy": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.PutResolverQueryLogConfigPolicy`

Specifies an Amazon Web Services account that you want to share a query logging configuration with, the query logging configuration that you want to share, and the operations that you want the account to be able to perform on the configuration.

> Body parameter

```json
{
  "Arn": {},
  "ResolverQueryLogConfigPolicy": {}
}
```

<h3 id="putresolverquerylogconfigpolicy-parameters">Parameters</h3>

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
|body|body|[PutResolverQueryLogConfigPolicyRequest](#schemaputresolverquerylogconfigpolicyrequest)|true|none|
|» Arn|body|object|true|none|
|» ResolverQueryLogConfigPolicy|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.PutResolverQueryLogConfigPolicy|

> Example responses

> 200 Response

```json
{
  "ReturnValue": {}
}
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

<h3 id="putresolverquerylogconfigpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutResolverQueryLogConfigPolicyResponse](#schemaputresolverquerylogconfigpolicyresponse)|
|480|480|InvalidPolicyDocument|[InvalidPolicyDocument](#schemainvalidpolicydocument)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|UnknownResourceException|[UnknownResourceException](#schemaunknownresourceexception)|
|484|484|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutResolverRulePolicy

<a id="opIdPutResolverRulePolicy"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.PutResolverRulePolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.PutResolverRulePolicy' \
  -d '{
    "Arn": {},
    "ResolverRulePolicy": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.PutResolverRulePolicy`

Specifies an Amazon Web Services rule that you want to share with another account, the account that you want to share the rule with, and the operations that you want the account to be able to perform on the rule.

> Body parameter

```json
{
  "Arn": {},
  "ResolverRulePolicy": {}
}
```

<h3 id="putresolverrulepolicy-parameters">Parameters</h3>

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
|body|body|[PutResolverRulePolicyRequest](#schemaputresolverrulepolicyrequest)|true|none|
|» Arn|body|object|true|none|
|» ResolverRulePolicy|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.PutResolverRulePolicy|

> Example responses

> 200 Response

```json
{
  "ReturnValue": {}
}
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

<h3 id="putresolverrulepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutResolverRulePolicyResponse](#schemaputresolverrulepolicyresponse)|
|480|480|InvalidPolicyDocument|[InvalidPolicyDocument](#schemainvalidpolicydocument)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|UnknownResourceException|[UnknownResourceException](#schemaunknownresourceexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.TagResource' \
  -d '{
    "ResourceArn": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.TagResource`

Adds one or more tags to a specified resource.

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
|X-Amz-Target|Route53Resolver.TagResource|

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
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|InvalidTagException|[InvalidTagException](#schemainvalidtagexception)|
|485|485|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|486|486|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.UntagResource' \
  -d '{
    "ResourceArn": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.UntagResource`

Removes one or more tags from a specified resource.

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
|X-Amz-Target|Route53Resolver.UntagResource|

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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateFirewallConfig

<a id="opIdUpdateFirewallConfig"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.UpdateFirewallConfig' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.UpdateFirewallConfig' \
  -d '{
    "ResourceId": {},
    "FirewallFailOpen": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.UpdateFirewallConfig`

Updates the configuration of the firewall behavior provided by DNS Firewall for a single VPC from Amazon Virtual Private Cloud (Amazon VPC). 

> Body parameter

```json
{
  "ResourceId": {},
  "FirewallFailOpen": {}
}
```

<h3 id="updatefirewallconfig-parameters">Parameters</h3>

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
|body|body|[UpdateFirewallConfigRequest](#schemaupdatefirewallconfigrequest)|true|none|
|» ResourceId|body|object|true|none|
|» FirewallFailOpen|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.UpdateFirewallConfig|

> Example responses

> 200 Response

```json
{
  "FirewallConfig": {
    "Id": {},
    "ResourceId": {},
    "OwnerId": {},
    "FirewallFailOpen": {}
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

<h3 id="updatefirewallconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateFirewallConfigResponse](#schemaupdatefirewallconfigresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateFirewallDomains

<a id="opIdUpdateFirewallDomains"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.UpdateFirewallDomains' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.UpdateFirewallDomains' \
  -d '{
    "FirewallDomainListId": {},
    "Operation": {},
    "Domains": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.UpdateFirewallDomains`

Updates the firewall domain list from an array of domain specifications. 

> Body parameter

```json
{
  "FirewallDomainListId": {},
  "Operation": {},
  "Domains": {}
}
```

<h3 id="updatefirewalldomains-parameters">Parameters</h3>

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
|body|body|[UpdateFirewallDomainsRequest](#schemaupdatefirewalldomainsrequest)|true|none|
|» FirewallDomainListId|body|object|true|none|
|» Operation|body|object|true|none|
|» Domains|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.UpdateFirewallDomains|

> Example responses

> 200 Response

```json
{
  "Id": {},
  "Name": {},
  "Status": {},
  "StatusMessage": {}
}
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

<h3 id="updatefirewalldomains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateFirewallDomainsResponse](#schemaupdatefirewalldomainsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|486|486|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateFirewallRule

<a id="opIdUpdateFirewallRule"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.UpdateFirewallRule' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.UpdateFirewallRule' \
  -d '{
    "FirewallRuleGroupId": {},
    "FirewallDomainListId": {},
    "Priority": {},
    "Action": {},
    "BlockResponse": {},
    "BlockOverrideDomain": {},
    "BlockOverrideDnsType": {},
    "BlockOverrideTtl": {},
    "Name": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.UpdateFirewallRule`

Updates the specified firewall rule. 

> Body parameter

```json
{
  "FirewallRuleGroupId": {},
  "FirewallDomainListId": {},
  "Priority": {},
  "Action": {},
  "BlockResponse": {},
  "BlockOverrideDomain": {},
  "BlockOverrideDnsType": {},
  "BlockOverrideTtl": {},
  "Name": {}
}
```

<h3 id="updatefirewallrule-parameters">Parameters</h3>

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
|body|body|[UpdateFirewallRuleRequest](#schemaupdatefirewallrulerequest)|true|none|
|» FirewallRuleGroupId|body|object|true|none|
|» FirewallDomainListId|body|object|true|none|
|» Priority|body|object|false|none|
|» Action|body|object|false|none|
|» BlockResponse|body|object|false|none|
|» BlockOverrideDomain|body|object|false|none|
|» BlockOverrideDnsType|body|object|false|none|
|» BlockOverrideTtl|body|object|false|none|
|» Name|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.UpdateFirewallRule|

> Example responses

> 200 Response

```json
{
  "FirewallRule": {
    "FirewallRuleGroupId": {},
    "FirewallDomainListId": {},
    "Name": {},
    "Priority": {},
    "Action": {},
    "BlockResponse": {},
    "BlockOverrideDomain": {},
    "BlockOverrideDnsType": {},
    "BlockOverrideTtl": {},
    "CreatorRequestId": {},
    "CreationTime": {},
    "ModificationTime": {}
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

<h3 id="updatefirewallrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateFirewallRuleResponse](#schemaupdatefirewallruleresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateFirewallRuleGroupAssociation

<a id="opIdUpdateFirewallRuleGroupAssociation"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.UpdateFirewallRuleGroupAssociation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.UpdateFirewallRuleGroupAssociation' \
  -d '{
    "FirewallRuleGroupAssociationId": {},
    "Priority": {},
    "MutationProtection": {},
    "Name": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.UpdateFirewallRuleGroupAssociation`

Changes the association of a <a>FirewallRuleGroup</a> with a VPC. The association enables DNS filtering for the VPC. 

> Body parameter

```json
{
  "FirewallRuleGroupAssociationId": {},
  "Priority": {},
  "MutationProtection": {},
  "Name": {}
}
```

<h3 id="updatefirewallrulegroupassociation-parameters">Parameters</h3>

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
|body|body|[UpdateFirewallRuleGroupAssociationRequest](#schemaupdatefirewallrulegroupassociationrequest)|true|none|
|» FirewallRuleGroupAssociationId|body|object|true|none|
|» Priority|body|object|false|none|
|» MutationProtection|body|object|false|none|
|» Name|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.UpdateFirewallRuleGroupAssociation|

> Example responses

> 200 Response

```json
{
  "FirewallRuleGroupAssociation": {
    "Id": {},
    "Arn": {},
    "FirewallRuleGroupId": {},
    "VpcId": {},
    "Name": {},
    "Priority": {},
    "MutationProtection": {},
    "ManagedOwnerName": {},
    "Status": {},
    "StatusMessage": {},
    "CreatorRequestId": {},
    "CreationTime": {},
    "ModificationTime": {}
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

<h3 id="updatefirewallrulegroupassociation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateFirewallRuleGroupAssociationResponse](#schemaupdatefirewallrulegroupassociationresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateResolverConfig

<a id="opIdUpdateResolverConfig"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.UpdateResolverConfig' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.UpdateResolverConfig' \
  -d '{
    "ResourceId": {},
    "AutodefinedReverseFlag": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.UpdateResolverConfig`

Updates the behavior configuration of Route 53 Resolver behavior for a single VPC from Amazon Virtual Private Cloud.

> Body parameter

```json
{
  "ResourceId": {},
  "AutodefinedReverseFlag": {}
}
```

<h3 id="updateresolverconfig-parameters">Parameters</h3>

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
|body|body|[UpdateResolverConfigRequest](#schemaupdateresolverconfigrequest)|true|none|
|» ResourceId|body|object|true|none|
|» AutodefinedReverseFlag|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.UpdateResolverConfig|

> Example responses

> 200 Response

```json
{
  "ResolverConfig": {
    "Id": {},
    "ResourceId": {},
    "OwnerId": {},
    "AutodefinedReverse": {}
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

<h3 id="updateresolverconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateResolverConfigResponse](#schemaupdateresolverconfigresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ResourceUnavailableException|[ResourceUnavailableException](#schemaresourceunavailableexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|486|486|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|487|487|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|488|488|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateResolverDnssecConfig

<a id="opIdUpdateResolverDnssecConfig"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.UpdateResolverDnssecConfig' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.UpdateResolverDnssecConfig' \
  -d '{
    "ResourceId": {},
    "Validation": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.UpdateResolverDnssecConfig`

Updates an existing DNSSEC validation configuration. If there is no existing DNSSEC validation configuration, one is created.

> Body parameter

```json
{
  "ResourceId": {},
  "Validation": {}
}
```

<h3 id="updateresolverdnssecconfig-parameters">Parameters</h3>

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
|body|body|[UpdateResolverDnssecConfigRequest](#schemaupdateresolverdnssecconfigrequest)|true|none|
|» ResourceId|body|object|true|none|
|» Validation|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.UpdateResolverDnssecConfig|

> Example responses

> 200 Response

```json
{
  "ResolverDNSSECConfig": {
    "Id": {},
    "OwnerId": {},
    "ResourceId": {},
    "ValidationStatus": {}
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

<h3 id="updateresolverdnssecconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateResolverDnssecConfigResponse](#schemaupdateresolverdnssecconfigresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateResolverEndpoint

<a id="opIdUpdateResolverEndpoint"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.UpdateResolverEndpoint' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.UpdateResolverEndpoint' \
  -d '{
    "ResolverEndpointId": {},
    "Name": {},
    "ResolverEndpointType": {},
    "UpdateIpAddresses": {}
  }'
```

`POST /#X-Amz-Target=Route53Resolver.UpdateResolverEndpoint`

Updates the name, or enpoint type for an inbound or an outbound Resolver endpoint. You can only update between IPV4 and DUALSTACK, IPV6 endpoint type can't be updated to other type. 

> Body parameter

```json
{
  "ResolverEndpointId": {},
  "Name": {},
  "ResolverEndpointType": {},
  "UpdateIpAddresses": {}
}
```

<h3 id="updateresolverendpoint-parameters">Parameters</h3>

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
|body|body|[UpdateResolverEndpointRequest](#schemaupdateresolverendpointrequest)|true|none|
|» ResolverEndpointId|body|object|true|none|
|» Name|body|object|false|none|
|» ResolverEndpointType|body|object|false|none|
|» UpdateIpAddresses|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.UpdateResolverEndpoint|

> Example responses

> 200 Response

```json
{
  "ResolverEndpoint": {
    "Id": {},
    "CreatorRequestId": {},
    "Arn": {},
    "Name": {},
    "SecurityGroupIds": {},
    "Direction": {},
    "IpAddressCount": {},
    "HostVPCId": {},
    "Status": {},
    "StatusMessage": {},
    "CreationTime": {},
    "ModificationTime": {},
    "ResolverEndpointType": {}
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

<h3 id="updateresolverendpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateResolverEndpointResponse](#schemaupdateresolverendpointresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateResolverRule

<a id="opIdUpdateResolverRule"></a>

> Code samples

```bash
curl 'https://route53resolver.us-east-1.amazonaws.com/#X-Amz-Target=Route53Resolver.UpdateResolverRule' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Resolver.UpdateResolverRule' \
  -d '{
    "ResolverRuleId": {},
    "Config": {
      "Name": {},
      "TargetIps": {},
      "ResolverEndpointId": {}
    }
  }'
```

`POST /#X-Amz-Target=Route53Resolver.UpdateResolverRule`

Updates settings for a specified Resolver rule. <code>ResolverRuleId</code> is required, and all other parameters are optional. If you don't specify a parameter, it retains its current value.

> Body parameter

```json
{
  "ResolverRuleId": {},
  "Config": {
    "Name": {},
    "TargetIps": {},
    "ResolverEndpointId": {}
  }
}
```

<h3 id="updateresolverrule-parameters">Parameters</h3>

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
|body|body|[UpdateResolverRuleRequest](#schemaupdateresolverrulerequest)|true|none|
|» ResolverRuleId|body|object|true|none|
|» Config|body|object|true|none|
|» » Name|body|object|false|none|
|» » TargetIps|body|object|false|none|
|» » ResolverEndpointId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Resolver.UpdateResolverRule|

> Example responses

> 200 Response

```json
{
  "ResolverRule": {
    "Id": {},
    "CreatorRequestId": {},
    "Arn": {},
    "DomainName": {},
    "Status": {},
    "StatusMessage": {},
    "RuleType": {},
    "Name": {},
    "TargetIps": {},
    "ResolverEndpointId": {},
    "OwnerId": {},
    "ShareStatus": {},
    "CreationTime": {},
    "ModificationTime": {}
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

<h3 id="updateresolverrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateResolverRuleResponse](#schemaupdateresolverruleresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ResourceUnavailableException|[ResourceUnavailableException](#schemaresourceunavailableexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|486|486|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AssociateFirewallRuleGroupResponse">AssociateFirewallRuleGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociatefirewallrulegroupresponse"></a>
<a id="schema_AssociateFirewallRuleGroupResponse"></a>
<a id="tocSassociatefirewallrulegroupresponse"></a>
<a id="tocsassociatefirewallrulegroupresponse"></a>

```json
{
  "FirewallRuleGroupAssociation": {
    "Id": {},
    "Arn": {},
    "FirewallRuleGroupId": {},
    "VpcId": {},
    "Name": {},
    "Priority": {},
    "MutationProtection": {},
    "ManagedOwnerName": {},
    "Status": {},
    "StatusMessage": {},
    "CreatorRequestId": {},
    "CreationTime": {},
    "ModificationTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallRuleGroupAssociation|object|false|none|none|

<h2 id="tocS_AssociateFirewallRuleGroupRequest">AssociateFirewallRuleGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatefirewallrulegrouprequest"></a>
<a id="schema_AssociateFirewallRuleGroupRequest"></a>
<a id="tocSassociatefirewallrulegrouprequest"></a>
<a id="tocsassociatefirewallrulegrouprequest"></a>

```json
{
  "CreatorRequestId": {},
  "FirewallRuleGroupId": {},
  "VpcId": {},
  "Priority": {},
  "Name": {},
  "MutationProtection": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreatorRequestId|object|true|none|none|
|FirewallRuleGroupId|object|true|none|none|
|VpcId|object|true|none|none|
|Priority|object|true|none|none|
|Name|object|true|none|none|
|MutationProtection|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

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

<h2 id="tocS_LimitExceededException">LimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemalimitexceededexception"></a>
<a id="schema_LimitExceededException"></a>
<a id="tocSlimitexceededexception"></a>
<a id="tocslimitexceededexception"></a>

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

<h2 id="tocS_AccessDeniedException">AccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdeniedexception"></a>
<a id="schema_AccessDeniedException"></a>
<a id="tocSaccessdeniedexception"></a>
<a id="tocsaccessdeniedexception"></a>

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

<h2 id="tocS_ThrottlingException">ThrottlingException</h2>
<!-- backwards compatibility -->
<a id="schemathrottlingexception"></a>
<a id="schema_ThrottlingException"></a>
<a id="tocSthrottlingexception"></a>
<a id="tocsthrottlingexception"></a>

```json
null
```

<h2 id="tocS_AssociateResolverEndpointIpAddressResponse">AssociateResolverEndpointIpAddressResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociateresolverendpointipaddressresponse"></a>
<a id="schema_AssociateResolverEndpointIpAddressResponse"></a>
<a id="tocSassociateresolverendpointipaddressresponse"></a>
<a id="tocsassociateresolverendpointipaddressresponse"></a>

```json
{
  "ResolverEndpoint": {
    "Id": {},
    "CreatorRequestId": {},
    "Arn": {},
    "Name": {},
    "SecurityGroupIds": {},
    "Direction": {},
    "IpAddressCount": {},
    "HostVPCId": {},
    "Status": {},
    "StatusMessage": {},
    "CreationTime": {},
    "ModificationTime": {},
    "ResolverEndpointType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResolverEndpoint|object|false|none|none|

<h2 id="tocS_AssociateResolverEndpointIpAddressRequest">AssociateResolverEndpointIpAddressRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociateresolverendpointipaddressrequest"></a>
<a id="schema_AssociateResolverEndpointIpAddressRequest"></a>
<a id="tocSassociateresolverendpointipaddressrequest"></a>
<a id="tocsassociateresolverendpointipaddressrequest"></a>

```json
{
  "ResolverEndpointId": {},
  "IpAddress": {
    "IpId": {},
    "SubnetId": {},
    "Ip": {},
    "Ipv6": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResolverEndpointId|object|true|none|none|
|IpAddress|object|true|none|none|

<h2 id="tocS_InvalidParameterException">InvalidParameterException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidparameterexception"></a>
<a id="schema_InvalidParameterException"></a>
<a id="tocSinvalidparameterexception"></a>
<a id="tocsinvalidparameterexception"></a>

```json
null
```

<h2 id="tocS_InvalidRequestException">InvalidRequestException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrequestexception"></a>
<a id="schema_InvalidRequestException"></a>
<a id="tocSinvalidrequestexception"></a>
<a id="tocsinvalidrequestexception"></a>

```json
null
```

<h2 id="tocS_ResourceExistsException">ResourceExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaresourceexistsexception"></a>
<a id="schema_ResourceExistsException"></a>
<a id="tocSresourceexistsexception"></a>
<a id="tocsresourceexistsexception"></a>

```json
null
```

<h2 id="tocS_AssociateResolverQueryLogConfigResponse">AssociateResolverQueryLogConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociateresolverquerylogconfigresponse"></a>
<a id="schema_AssociateResolverQueryLogConfigResponse"></a>
<a id="tocSassociateresolverquerylogconfigresponse"></a>
<a id="tocsassociateresolverquerylogconfigresponse"></a>

```json
{
  "ResolverQueryLogConfigAssociation": {
    "Id": {},
    "ResolverQueryLogConfigId": {},
    "ResourceId": {},
    "Status": {},
    "Error": {},
    "ErrorMessage": {},
    "CreationTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResolverQueryLogConfigAssociation|object|false|none|none|

<h2 id="tocS_AssociateResolverQueryLogConfigRequest">AssociateResolverQueryLogConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociateresolverquerylogconfigrequest"></a>
<a id="schema_AssociateResolverQueryLogConfigRequest"></a>
<a id="tocSassociateresolverquerylogconfigrequest"></a>
<a id="tocsassociateresolverquerylogconfigrequest"></a>

```json
{
  "ResolverQueryLogConfigId": {},
  "ResourceId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResolverQueryLogConfigId|object|true|none|none|
|ResourceId|object|true|none|none|

<h2 id="tocS_AssociateResolverRuleResponse">AssociateResolverRuleResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociateresolverruleresponse"></a>
<a id="schema_AssociateResolverRuleResponse"></a>
<a id="tocSassociateresolverruleresponse"></a>
<a id="tocsassociateresolverruleresponse"></a>

```json
{
  "ResolverRuleAssociation": {
    "Id": {},
    "ResolverRuleId": {},
    "Name": {},
    "VPCId": {},
    "Status": {},
    "StatusMessage": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResolverRuleAssociation|object|false|none|none|

<h2 id="tocS_AssociateResolverRuleRequest">AssociateResolverRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociateresolverrulerequest"></a>
<a id="schema_AssociateResolverRuleRequest"></a>
<a id="tocSassociateresolverrulerequest"></a>
<a id="tocsassociateresolverrulerequest"></a>

```json
{
  "ResolverRuleId": {},
  "Name": {},
  "VPCId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResolverRuleId|object|true|none|none|
|Name|object|false|none|none|
|VPCId|object|true|none|none|

<h2 id="tocS_ResourceUnavailableException">ResourceUnavailableException</h2>
<!-- backwards compatibility -->
<a id="schemaresourceunavailableexception"></a>
<a id="schema_ResourceUnavailableException"></a>
<a id="tocSresourceunavailableexception"></a>
<a id="tocsresourceunavailableexception"></a>

```json
null
```

<h2 id="tocS_CreateFirewallDomainListResponse">CreateFirewallDomainListResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatefirewalldomainlistresponse"></a>
<a id="schema_CreateFirewallDomainListResponse"></a>
<a id="tocScreatefirewalldomainlistresponse"></a>
<a id="tocscreatefirewalldomainlistresponse"></a>

```json
{
  "FirewallDomainList": {
    "Id": {},
    "Arn": {},
    "Name": {},
    "DomainCount": {},
    "Status": {},
    "StatusMessage": {},
    "ManagedOwnerName": {},
    "CreatorRequestId": {},
    "CreationTime": {},
    "ModificationTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallDomainList|object|false|none|none|

<h2 id="tocS_CreateFirewallDomainListRequest">CreateFirewallDomainListRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatefirewalldomainlistrequest"></a>
<a id="schema_CreateFirewallDomainListRequest"></a>
<a id="tocScreatefirewalldomainlistrequest"></a>
<a id="tocscreatefirewalldomainlistrequest"></a>

```json
{
  "CreatorRequestId": {},
  "Name": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreatorRequestId|object|true|none|none|
|Name|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateFirewallRuleResponse">CreateFirewallRuleResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatefirewallruleresponse"></a>
<a id="schema_CreateFirewallRuleResponse"></a>
<a id="tocScreatefirewallruleresponse"></a>
<a id="tocscreatefirewallruleresponse"></a>

```json
{
  "FirewallRule": {
    "FirewallRuleGroupId": {},
    "FirewallDomainListId": {},
    "Name": {},
    "Priority": {},
    "Action": {},
    "BlockResponse": {},
    "BlockOverrideDomain": {},
    "BlockOverrideDnsType": {},
    "BlockOverrideTtl": {},
    "CreatorRequestId": {},
    "CreationTime": {},
    "ModificationTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallRule|object|false|none|none|

<h2 id="tocS_CreateFirewallRuleRequest">CreateFirewallRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatefirewallrulerequest"></a>
<a id="schema_CreateFirewallRuleRequest"></a>
<a id="tocScreatefirewallrulerequest"></a>
<a id="tocscreatefirewallrulerequest"></a>

```json
{
  "CreatorRequestId": {},
  "FirewallRuleGroupId": {},
  "FirewallDomainListId": {},
  "Priority": {},
  "Action": {},
  "BlockResponse": {},
  "BlockOverrideDomain": {},
  "BlockOverrideDnsType": {},
  "BlockOverrideTtl": {},
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreatorRequestId|object|true|none|none|
|FirewallRuleGroupId|object|true|none|none|
|FirewallDomainListId|object|true|none|none|
|Priority|object|true|none|none|
|Action|object|true|none|none|
|BlockResponse|object|false|none|none|
|BlockOverrideDomain|object|false|none|none|
|BlockOverrideDnsType|object|false|none|none|
|BlockOverrideTtl|object|false|none|none|
|Name|object|true|none|none|

<h2 id="tocS_CreateFirewallRuleGroupResponse">CreateFirewallRuleGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatefirewallrulegroupresponse"></a>
<a id="schema_CreateFirewallRuleGroupResponse"></a>
<a id="tocScreatefirewallrulegroupresponse"></a>
<a id="tocscreatefirewallrulegroupresponse"></a>

```json
{
  "FirewallRuleGroup": {
    "Id": {},
    "Arn": {},
    "Name": {},
    "RuleCount": {},
    "Status": {},
    "StatusMessage": {},
    "OwnerId": {},
    "CreatorRequestId": {},
    "ShareStatus": {},
    "CreationTime": {},
    "ModificationTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallRuleGroup|object|false|none|none|

<h2 id="tocS_CreateFirewallRuleGroupRequest">CreateFirewallRuleGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatefirewallrulegrouprequest"></a>
<a id="schema_CreateFirewallRuleGroupRequest"></a>
<a id="tocScreatefirewallrulegrouprequest"></a>
<a id="tocscreatefirewallrulegrouprequest"></a>

```json
{
  "CreatorRequestId": {},
  "Name": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreatorRequestId|object|true|none|none|
|Name|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateResolverEndpointResponse">CreateResolverEndpointResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateresolverendpointresponse"></a>
<a id="schema_CreateResolverEndpointResponse"></a>
<a id="tocScreateresolverendpointresponse"></a>
<a id="tocscreateresolverendpointresponse"></a>

```json
{
  "ResolverEndpoint": {
    "Id": {},
    "CreatorRequestId": {},
    "Arn": {},
    "Name": {},
    "SecurityGroupIds": {},
    "Direction": {},
    "IpAddressCount": {},
    "HostVPCId": {},
    "Status": {},
    "StatusMessage": {},
    "CreationTime": {},
    "ModificationTime": {},
    "ResolverEndpointType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResolverEndpoint|object|false|none|none|

<h2 id="tocS_CreateResolverEndpointRequest">CreateResolverEndpointRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateresolverendpointrequest"></a>
<a id="schema_CreateResolverEndpointRequest"></a>
<a id="tocScreateresolverendpointrequest"></a>
<a id="tocscreateresolverendpointrequest"></a>

```json
{
  "CreatorRequestId": {},
  "Name": {},
  "SecurityGroupIds": {},
  "Direction": {},
  "IpAddresses": {},
  "Tags": {},
  "ResolverEndpointType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreatorRequestId|object|true|none|none|
|Name|object|false|none|none|
|SecurityGroupIds|object|true|none|none|
|Direction|object|true|none|none|
|IpAddresses|object|true|none|none|
|Tags|object|false|none|none|
|ResolverEndpointType|object|false|none|none|

<h2 id="tocS_CreateResolverQueryLogConfigResponse">CreateResolverQueryLogConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateresolverquerylogconfigresponse"></a>
<a id="schema_CreateResolverQueryLogConfigResponse"></a>
<a id="tocScreateresolverquerylogconfigresponse"></a>
<a id="tocscreateresolverquerylogconfigresponse"></a>

```json
{
  "ResolverQueryLogConfig": {
    "Id": {},
    "OwnerId": {},
    "Status": {},
    "ShareStatus": {},
    "AssociationCount": {},
    "Arn": {},
    "Name": {},
    "DestinationArn": {},
    "CreatorRequestId": {},
    "CreationTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResolverQueryLogConfig|object|false|none|none|

<h2 id="tocS_CreateResolverQueryLogConfigRequest">CreateResolverQueryLogConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateresolverquerylogconfigrequest"></a>
<a id="schema_CreateResolverQueryLogConfigRequest"></a>
<a id="tocScreateresolverquerylogconfigrequest"></a>
<a id="tocscreateresolverquerylogconfigrequest"></a>

```json
{
  "Name": {},
  "DestinationArn": {},
  "CreatorRequestId": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|DestinationArn|object|true|none|none|
|CreatorRequestId|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateResolverRuleResponse">CreateResolverRuleResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateresolverruleresponse"></a>
<a id="schema_CreateResolverRuleResponse"></a>
<a id="tocScreateresolverruleresponse"></a>
<a id="tocscreateresolverruleresponse"></a>

```json
{
  "ResolverRule": {
    "Id": {},
    "CreatorRequestId": {},
    "Arn": {},
    "DomainName": {},
    "Status": {},
    "StatusMessage": {},
    "RuleType": {},
    "Name": {},
    "TargetIps": {},
    "ResolverEndpointId": {},
    "OwnerId": {},
    "ShareStatus": {},
    "CreationTime": {},
    "ModificationTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResolverRule|object|false|none|none|

<h2 id="tocS_CreateResolverRuleRequest">CreateResolverRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateresolverrulerequest"></a>
<a id="schema_CreateResolverRuleRequest"></a>
<a id="tocScreateresolverrulerequest"></a>
<a id="tocscreateresolverrulerequest"></a>

```json
{
  "CreatorRequestId": {},
  "Name": {},
  "RuleType": {},
  "DomainName": {},
  "TargetIps": {},
  "ResolverEndpointId": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreatorRequestId|object|true|none|none|
|Name|object|false|none|none|
|RuleType|object|true|none|none|
|DomainName|object|true|none|none|
|TargetIps|object|false|none|none|
|ResolverEndpointId|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DeleteFirewallDomainListResponse">DeleteFirewallDomainListResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletefirewalldomainlistresponse"></a>
<a id="schema_DeleteFirewallDomainListResponse"></a>
<a id="tocSdeletefirewalldomainlistresponse"></a>
<a id="tocsdeletefirewalldomainlistresponse"></a>

```json
{
  "FirewallDomainList": {
    "Id": {},
    "Arn": {},
    "Name": {},
    "DomainCount": {},
    "Status": {},
    "StatusMessage": {},
    "ManagedOwnerName": {},
    "CreatorRequestId": {},
    "CreationTime": {},
    "ModificationTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallDomainList|object|false|none|none|

<h2 id="tocS_DeleteFirewallDomainListRequest">DeleteFirewallDomainListRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletefirewalldomainlistrequest"></a>
<a id="schema_DeleteFirewallDomainListRequest"></a>
<a id="tocSdeletefirewalldomainlistrequest"></a>
<a id="tocsdeletefirewalldomainlistrequest"></a>

```json
{
  "FirewallDomainListId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallDomainListId|object|true|none|none|

<h2 id="tocS_DeleteFirewallRuleResponse">DeleteFirewallRuleResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletefirewallruleresponse"></a>
<a id="schema_DeleteFirewallRuleResponse"></a>
<a id="tocSdeletefirewallruleresponse"></a>
<a id="tocsdeletefirewallruleresponse"></a>

```json
{
  "FirewallRule": {
    "FirewallRuleGroupId": {},
    "FirewallDomainListId": {},
    "Name": {},
    "Priority": {},
    "Action": {},
    "BlockResponse": {},
    "BlockOverrideDomain": {},
    "BlockOverrideDnsType": {},
    "BlockOverrideTtl": {},
    "CreatorRequestId": {},
    "CreationTime": {},
    "ModificationTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallRule|object|false|none|none|

<h2 id="tocS_DeleteFirewallRuleRequest">DeleteFirewallRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletefirewallrulerequest"></a>
<a id="schema_DeleteFirewallRuleRequest"></a>
<a id="tocSdeletefirewallrulerequest"></a>
<a id="tocsdeletefirewallrulerequest"></a>

```json
{
  "FirewallRuleGroupId": {},
  "FirewallDomainListId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallRuleGroupId|object|true|none|none|
|FirewallDomainListId|object|true|none|none|

<h2 id="tocS_DeleteFirewallRuleGroupResponse">DeleteFirewallRuleGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletefirewallrulegroupresponse"></a>
<a id="schema_DeleteFirewallRuleGroupResponse"></a>
<a id="tocSdeletefirewallrulegroupresponse"></a>
<a id="tocsdeletefirewallrulegroupresponse"></a>

```json
{
  "FirewallRuleGroup": {
    "Id": {},
    "Arn": {},
    "Name": {},
    "RuleCount": {},
    "Status": {},
    "StatusMessage": {},
    "OwnerId": {},
    "CreatorRequestId": {},
    "ShareStatus": {},
    "CreationTime": {},
    "ModificationTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallRuleGroup|object|false|none|none|

<h2 id="tocS_DeleteFirewallRuleGroupRequest">DeleteFirewallRuleGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletefirewallrulegrouprequest"></a>
<a id="schema_DeleteFirewallRuleGroupRequest"></a>
<a id="tocSdeletefirewallrulegrouprequest"></a>
<a id="tocsdeletefirewallrulegrouprequest"></a>

```json
{
  "FirewallRuleGroupId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallRuleGroupId|object|true|none|none|

<h2 id="tocS_DeleteResolverEndpointResponse">DeleteResolverEndpointResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteresolverendpointresponse"></a>
<a id="schema_DeleteResolverEndpointResponse"></a>
<a id="tocSdeleteresolverendpointresponse"></a>
<a id="tocsdeleteresolverendpointresponse"></a>

```json
{
  "ResolverEndpoint": {
    "Id": {},
    "CreatorRequestId": {},
    "Arn": {},
    "Name": {},
    "SecurityGroupIds": {},
    "Direction": {},
    "IpAddressCount": {},
    "HostVPCId": {},
    "Status": {},
    "StatusMessage": {},
    "CreationTime": {},
    "ModificationTime": {},
    "ResolverEndpointType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResolverEndpoint|object|false|none|none|

<h2 id="tocS_DeleteResolverEndpointRequest">DeleteResolverEndpointRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteresolverendpointrequest"></a>
<a id="schema_DeleteResolverEndpointRequest"></a>
<a id="tocSdeleteresolverendpointrequest"></a>
<a id="tocsdeleteresolverendpointrequest"></a>

```json
{
  "ResolverEndpointId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResolverEndpointId|object|true|none|none|

<h2 id="tocS_DeleteResolverQueryLogConfigResponse">DeleteResolverQueryLogConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteresolverquerylogconfigresponse"></a>
<a id="schema_DeleteResolverQueryLogConfigResponse"></a>
<a id="tocSdeleteresolverquerylogconfigresponse"></a>
<a id="tocsdeleteresolverquerylogconfigresponse"></a>

```json
{
  "ResolverQueryLogConfig": {
    "Id": {},
    "OwnerId": {},
    "Status": {},
    "ShareStatus": {},
    "AssociationCount": {},
    "Arn": {},
    "Name": {},
    "DestinationArn": {},
    "CreatorRequestId": {},
    "CreationTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResolverQueryLogConfig|object|false|none|none|

<h2 id="tocS_DeleteResolverQueryLogConfigRequest">DeleteResolverQueryLogConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteresolverquerylogconfigrequest"></a>
<a id="schema_DeleteResolverQueryLogConfigRequest"></a>
<a id="tocSdeleteresolverquerylogconfigrequest"></a>
<a id="tocsdeleteresolverquerylogconfigrequest"></a>

```json
{
  "ResolverQueryLogConfigId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResolverQueryLogConfigId|object|true|none|none|

<h2 id="tocS_DeleteResolverRuleResponse">DeleteResolverRuleResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteresolverruleresponse"></a>
<a id="schema_DeleteResolverRuleResponse"></a>
<a id="tocSdeleteresolverruleresponse"></a>
<a id="tocsdeleteresolverruleresponse"></a>

```json
{
  "ResolverRule": {
    "Id": {},
    "CreatorRequestId": {},
    "Arn": {},
    "DomainName": {},
    "Status": {},
    "StatusMessage": {},
    "RuleType": {},
    "Name": {},
    "TargetIps": {},
    "ResolverEndpointId": {},
    "OwnerId": {},
    "ShareStatus": {},
    "CreationTime": {},
    "ModificationTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResolverRule|object|false|none|none|

<h2 id="tocS_DeleteResolverRuleRequest">DeleteResolverRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteresolverrulerequest"></a>
<a id="schema_DeleteResolverRuleRequest"></a>
<a id="tocSdeleteresolverrulerequest"></a>
<a id="tocsdeleteresolverrulerequest"></a>

```json
{
  "ResolverRuleId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResolverRuleId|object|true|none|none|

<h2 id="tocS_ResourceInUseException">ResourceInUseException</h2>
<!-- backwards compatibility -->
<a id="schemaresourceinuseexception"></a>
<a id="schema_ResourceInUseException"></a>
<a id="tocSresourceinuseexception"></a>
<a id="tocsresourceinuseexception"></a>

```json
null
```

<h2 id="tocS_DisassociateFirewallRuleGroupResponse">DisassociateFirewallRuleGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatefirewallrulegroupresponse"></a>
<a id="schema_DisassociateFirewallRuleGroupResponse"></a>
<a id="tocSdisassociatefirewallrulegroupresponse"></a>
<a id="tocsdisassociatefirewallrulegroupresponse"></a>

```json
{
  "FirewallRuleGroupAssociation": {
    "Id": {},
    "Arn": {},
    "FirewallRuleGroupId": {},
    "VpcId": {},
    "Name": {},
    "Priority": {},
    "MutationProtection": {},
    "ManagedOwnerName": {},
    "Status": {},
    "StatusMessage": {},
    "CreatorRequestId": {},
    "CreationTime": {},
    "ModificationTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallRuleGroupAssociation|object|false|none|none|

<h2 id="tocS_DisassociateFirewallRuleGroupRequest">DisassociateFirewallRuleGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatefirewallrulegrouprequest"></a>
<a id="schema_DisassociateFirewallRuleGroupRequest"></a>
<a id="tocSdisassociatefirewallrulegrouprequest"></a>
<a id="tocsdisassociatefirewallrulegrouprequest"></a>

```json
{
  "FirewallRuleGroupAssociationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallRuleGroupAssociationId|object|true|none|none|

<h2 id="tocS_DisassociateResolverEndpointIpAddressResponse">DisassociateResolverEndpointIpAddressResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateresolverendpointipaddressresponse"></a>
<a id="schema_DisassociateResolverEndpointIpAddressResponse"></a>
<a id="tocSdisassociateresolverendpointipaddressresponse"></a>
<a id="tocsdisassociateresolverendpointipaddressresponse"></a>

```json
{
  "ResolverEndpoint": {
    "Id": {},
    "CreatorRequestId": {},
    "Arn": {},
    "Name": {},
    "SecurityGroupIds": {},
    "Direction": {},
    "IpAddressCount": {},
    "HostVPCId": {},
    "Status": {},
    "StatusMessage": {},
    "CreationTime": {},
    "ModificationTime": {},
    "ResolverEndpointType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResolverEndpoint|object|false|none|none|

<h2 id="tocS_DisassociateResolverEndpointIpAddressRequest">DisassociateResolverEndpointIpAddressRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateresolverendpointipaddressrequest"></a>
<a id="schema_DisassociateResolverEndpointIpAddressRequest"></a>
<a id="tocSdisassociateresolverendpointipaddressrequest"></a>
<a id="tocsdisassociateresolverendpointipaddressrequest"></a>

```json
{
  "ResolverEndpointId": {},
  "IpAddress": {
    "IpId": {},
    "SubnetId": {},
    "Ip": {},
    "Ipv6": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResolverEndpointId|object|true|none|none|
|IpAddress|object|true|none|none|

<h2 id="tocS_DisassociateResolverQueryLogConfigResponse">DisassociateResolverQueryLogConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateresolverquerylogconfigresponse"></a>
<a id="schema_DisassociateResolverQueryLogConfigResponse"></a>
<a id="tocSdisassociateresolverquerylogconfigresponse"></a>
<a id="tocsdisassociateresolverquerylogconfigresponse"></a>

```json
{
  "ResolverQueryLogConfigAssociation": {
    "Id": {},
    "ResolverQueryLogConfigId": {},
    "ResourceId": {},
    "Status": {},
    "Error": {},
    "ErrorMessage": {},
    "CreationTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResolverQueryLogConfigAssociation|object|false|none|none|

<h2 id="tocS_DisassociateResolverQueryLogConfigRequest">DisassociateResolverQueryLogConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateresolverquerylogconfigrequest"></a>
<a id="schema_DisassociateResolverQueryLogConfigRequest"></a>
<a id="tocSdisassociateresolverquerylogconfigrequest"></a>
<a id="tocsdisassociateresolverquerylogconfigrequest"></a>

```json
{
  "ResolverQueryLogConfigId": {},
  "ResourceId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResolverQueryLogConfigId|object|true|none|none|
|ResourceId|object|true|none|none|

<h2 id="tocS_DisassociateResolverRuleResponse">DisassociateResolverRuleResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateresolverruleresponse"></a>
<a id="schema_DisassociateResolverRuleResponse"></a>
<a id="tocSdisassociateresolverruleresponse"></a>
<a id="tocsdisassociateresolverruleresponse"></a>

```json
{
  "ResolverRuleAssociation": {
    "Id": {},
    "ResolverRuleId": {},
    "Name": {},
    "VPCId": {},
    "Status": {},
    "StatusMessage": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResolverRuleAssociation|object|false|none|none|

<h2 id="tocS_DisassociateResolverRuleRequest">DisassociateResolverRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateresolverrulerequest"></a>
<a id="schema_DisassociateResolverRuleRequest"></a>
<a id="tocSdisassociateresolverrulerequest"></a>
<a id="tocsdisassociateresolverrulerequest"></a>

```json
{
  "VPCId": {},
  "ResolverRuleId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VPCId|object|true|none|none|
|ResolverRuleId|object|true|none|none|

<h2 id="tocS_GetFirewallConfigResponse">GetFirewallConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetfirewallconfigresponse"></a>
<a id="schema_GetFirewallConfigResponse"></a>
<a id="tocSgetfirewallconfigresponse"></a>
<a id="tocsgetfirewallconfigresponse"></a>

```json
{
  "FirewallConfig": {
    "Id": {},
    "ResourceId": {},
    "OwnerId": {},
    "FirewallFailOpen": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallConfig|object|false|none|none|

<h2 id="tocS_GetFirewallConfigRequest">GetFirewallConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetfirewallconfigrequest"></a>
<a id="schema_GetFirewallConfigRequest"></a>
<a id="tocSgetfirewallconfigrequest"></a>
<a id="tocsgetfirewallconfigrequest"></a>

```json
{
  "ResourceId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|true|none|none|

<h2 id="tocS_GetFirewallDomainListResponse">GetFirewallDomainListResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetfirewalldomainlistresponse"></a>
<a id="schema_GetFirewallDomainListResponse"></a>
<a id="tocSgetfirewalldomainlistresponse"></a>
<a id="tocsgetfirewalldomainlistresponse"></a>

```json
{
  "FirewallDomainList": {
    "Id": {},
    "Arn": {},
    "Name": {},
    "DomainCount": {},
    "Status": {},
    "StatusMessage": {},
    "ManagedOwnerName": {},
    "CreatorRequestId": {},
    "CreationTime": {},
    "ModificationTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallDomainList|object|false|none|none|

<h2 id="tocS_GetFirewallDomainListRequest">GetFirewallDomainListRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetfirewalldomainlistrequest"></a>
<a id="schema_GetFirewallDomainListRequest"></a>
<a id="tocSgetfirewalldomainlistrequest"></a>
<a id="tocsgetfirewalldomainlistrequest"></a>

```json
{
  "FirewallDomainListId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallDomainListId|object|true|none|none|

<h2 id="tocS_GetFirewallRuleGroupResponse">GetFirewallRuleGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetfirewallrulegroupresponse"></a>
<a id="schema_GetFirewallRuleGroupResponse"></a>
<a id="tocSgetfirewallrulegroupresponse"></a>
<a id="tocsgetfirewallrulegroupresponse"></a>

```json
{
  "FirewallRuleGroup": {
    "Id": {},
    "Arn": {},
    "Name": {},
    "RuleCount": {},
    "Status": {},
    "StatusMessage": {},
    "OwnerId": {},
    "CreatorRequestId": {},
    "ShareStatus": {},
    "CreationTime": {},
    "ModificationTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallRuleGroup|object|false|none|none|

<h2 id="tocS_GetFirewallRuleGroupRequest">GetFirewallRuleGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetfirewallrulegrouprequest"></a>
<a id="schema_GetFirewallRuleGroupRequest"></a>
<a id="tocSgetfirewallrulegrouprequest"></a>
<a id="tocsgetfirewallrulegrouprequest"></a>

```json
{
  "FirewallRuleGroupId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallRuleGroupId|object|true|none|none|

<h2 id="tocS_GetFirewallRuleGroupAssociationResponse">GetFirewallRuleGroupAssociationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetfirewallrulegroupassociationresponse"></a>
<a id="schema_GetFirewallRuleGroupAssociationResponse"></a>
<a id="tocSgetfirewallrulegroupassociationresponse"></a>
<a id="tocsgetfirewallrulegroupassociationresponse"></a>

```json
{
  "FirewallRuleGroupAssociation": {
    "Id": {},
    "Arn": {},
    "FirewallRuleGroupId": {},
    "VpcId": {},
    "Name": {},
    "Priority": {},
    "MutationProtection": {},
    "ManagedOwnerName": {},
    "Status": {},
    "StatusMessage": {},
    "CreatorRequestId": {},
    "CreationTime": {},
    "ModificationTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallRuleGroupAssociation|object|false|none|none|

<h2 id="tocS_GetFirewallRuleGroupAssociationRequest">GetFirewallRuleGroupAssociationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetfirewallrulegroupassociationrequest"></a>
<a id="schema_GetFirewallRuleGroupAssociationRequest"></a>
<a id="tocSgetfirewallrulegroupassociationrequest"></a>
<a id="tocsgetfirewallrulegroupassociationrequest"></a>

```json
{
  "FirewallRuleGroupAssociationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallRuleGroupAssociationId|object|true|none|none|

<h2 id="tocS_GetFirewallRuleGroupPolicyResponse">GetFirewallRuleGroupPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetfirewallrulegrouppolicyresponse"></a>
<a id="schema_GetFirewallRuleGroupPolicyResponse"></a>
<a id="tocSgetfirewallrulegrouppolicyresponse"></a>
<a id="tocsgetfirewallrulegrouppolicyresponse"></a>

```json
{
  "FirewallRuleGroupPolicy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallRuleGroupPolicy|object|false|none|none|

<h2 id="tocS_GetFirewallRuleGroupPolicyRequest">GetFirewallRuleGroupPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetfirewallrulegrouppolicyrequest"></a>
<a id="schema_GetFirewallRuleGroupPolicyRequest"></a>
<a id="tocSgetfirewallrulegrouppolicyrequest"></a>
<a id="tocsgetfirewallrulegrouppolicyrequest"></a>

```json
{
  "Arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|

<h2 id="tocS_GetResolverConfigResponse">GetResolverConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetresolverconfigresponse"></a>
<a id="schema_GetResolverConfigResponse"></a>
<a id="tocSgetresolverconfigresponse"></a>
<a id="tocsgetresolverconfigresponse"></a>

```json
{
  "ResolverConfig": {
    "Id": {},
    "ResourceId": {},
    "OwnerId": {},
    "AutodefinedReverse": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResolverConfig|object|false|none|none|

<h2 id="tocS_GetResolverConfigRequest">GetResolverConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetresolverconfigrequest"></a>
<a id="schema_GetResolverConfigRequest"></a>
<a id="tocSgetresolverconfigrequest"></a>
<a id="tocsgetresolverconfigrequest"></a>

```json
{
  "ResourceId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|true|none|none|

<h2 id="tocS_GetResolverDnssecConfigResponse">GetResolverDnssecConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetresolverdnssecconfigresponse"></a>
<a id="schema_GetResolverDnssecConfigResponse"></a>
<a id="tocSgetresolverdnssecconfigresponse"></a>
<a id="tocsgetresolverdnssecconfigresponse"></a>

```json
{
  "ResolverDNSSECConfig": {
    "Id": {},
    "OwnerId": {},
    "ResourceId": {},
    "ValidationStatus": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResolverDNSSECConfig|object|false|none|none|

<h2 id="tocS_GetResolverDnssecConfigRequest">GetResolverDnssecConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetresolverdnssecconfigrequest"></a>
<a id="schema_GetResolverDnssecConfigRequest"></a>
<a id="tocSgetresolverdnssecconfigrequest"></a>
<a id="tocsgetresolverdnssecconfigrequest"></a>

```json
{
  "ResourceId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|true|none|none|

<h2 id="tocS_GetResolverEndpointResponse">GetResolverEndpointResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetresolverendpointresponse"></a>
<a id="schema_GetResolverEndpointResponse"></a>
<a id="tocSgetresolverendpointresponse"></a>
<a id="tocsgetresolverendpointresponse"></a>

```json
{
  "ResolverEndpoint": {
    "Id": {},
    "CreatorRequestId": {},
    "Arn": {},
    "Name": {},
    "SecurityGroupIds": {},
    "Direction": {},
    "IpAddressCount": {},
    "HostVPCId": {},
    "Status": {},
    "StatusMessage": {},
    "CreationTime": {},
    "ModificationTime": {},
    "ResolverEndpointType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResolverEndpoint|object|false|none|none|

<h2 id="tocS_GetResolverEndpointRequest">GetResolverEndpointRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetresolverendpointrequest"></a>
<a id="schema_GetResolverEndpointRequest"></a>
<a id="tocSgetresolverendpointrequest"></a>
<a id="tocsgetresolverendpointrequest"></a>

```json
{
  "ResolverEndpointId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResolverEndpointId|object|true|none|none|

<h2 id="tocS_GetResolverQueryLogConfigResponse">GetResolverQueryLogConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetresolverquerylogconfigresponse"></a>
<a id="schema_GetResolverQueryLogConfigResponse"></a>
<a id="tocSgetresolverquerylogconfigresponse"></a>
<a id="tocsgetresolverquerylogconfigresponse"></a>

```json
{
  "ResolverQueryLogConfig": {
    "Id": {},
    "OwnerId": {},
    "Status": {},
    "ShareStatus": {},
    "AssociationCount": {},
    "Arn": {},
    "Name": {},
    "DestinationArn": {},
    "CreatorRequestId": {},
    "CreationTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResolverQueryLogConfig|object|false|none|none|

<h2 id="tocS_GetResolverQueryLogConfigRequest">GetResolverQueryLogConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetresolverquerylogconfigrequest"></a>
<a id="schema_GetResolverQueryLogConfigRequest"></a>
<a id="tocSgetresolverquerylogconfigrequest"></a>
<a id="tocsgetresolverquerylogconfigrequest"></a>

```json
{
  "ResolverQueryLogConfigId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResolverQueryLogConfigId|object|true|none|none|

<h2 id="tocS_GetResolverQueryLogConfigAssociationResponse">GetResolverQueryLogConfigAssociationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetresolverquerylogconfigassociationresponse"></a>
<a id="schema_GetResolverQueryLogConfigAssociationResponse"></a>
<a id="tocSgetresolverquerylogconfigassociationresponse"></a>
<a id="tocsgetresolverquerylogconfigassociationresponse"></a>

```json
{
  "ResolverQueryLogConfigAssociation": {
    "Id": {},
    "ResolverQueryLogConfigId": {},
    "ResourceId": {},
    "Status": {},
    "Error": {},
    "ErrorMessage": {},
    "CreationTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResolverQueryLogConfigAssociation|object|false|none|none|

<h2 id="tocS_GetResolverQueryLogConfigAssociationRequest">GetResolverQueryLogConfigAssociationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetresolverquerylogconfigassociationrequest"></a>
<a id="schema_GetResolverQueryLogConfigAssociationRequest"></a>
<a id="tocSgetresolverquerylogconfigassociationrequest"></a>
<a id="tocsgetresolverquerylogconfigassociationrequest"></a>

```json
{
  "ResolverQueryLogConfigAssociationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResolverQueryLogConfigAssociationId|object|true|none|none|

<h2 id="tocS_GetResolverQueryLogConfigPolicyResponse">GetResolverQueryLogConfigPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetresolverquerylogconfigpolicyresponse"></a>
<a id="schema_GetResolverQueryLogConfigPolicyResponse"></a>
<a id="tocSgetresolverquerylogconfigpolicyresponse"></a>
<a id="tocsgetresolverquerylogconfigpolicyresponse"></a>

```json
{
  "ResolverQueryLogConfigPolicy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResolverQueryLogConfigPolicy|object|false|none|none|

<h2 id="tocS_GetResolverQueryLogConfigPolicyRequest">GetResolverQueryLogConfigPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetresolverquerylogconfigpolicyrequest"></a>
<a id="schema_GetResolverQueryLogConfigPolicyRequest"></a>
<a id="tocSgetresolverquerylogconfigpolicyrequest"></a>
<a id="tocsgetresolverquerylogconfigpolicyrequest"></a>

```json
{
  "Arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|

<h2 id="tocS_UnknownResourceException">UnknownResourceException</h2>
<!-- backwards compatibility -->
<a id="schemaunknownresourceexception"></a>
<a id="schema_UnknownResourceException"></a>
<a id="tocSunknownresourceexception"></a>
<a id="tocsunknownresourceexception"></a>

```json
null
```

<h2 id="tocS_GetResolverRuleResponse">GetResolverRuleResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetresolverruleresponse"></a>
<a id="schema_GetResolverRuleResponse"></a>
<a id="tocSgetresolverruleresponse"></a>
<a id="tocsgetresolverruleresponse"></a>

```json
{
  "ResolverRule": {
    "Id": {},
    "CreatorRequestId": {},
    "Arn": {},
    "DomainName": {},
    "Status": {},
    "StatusMessage": {},
    "RuleType": {},
    "Name": {},
    "TargetIps": {},
    "ResolverEndpointId": {},
    "OwnerId": {},
    "ShareStatus": {},
    "CreationTime": {},
    "ModificationTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResolverRule|object|false|none|none|

<h2 id="tocS_GetResolverRuleRequest">GetResolverRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetresolverrulerequest"></a>
<a id="schema_GetResolverRuleRequest"></a>
<a id="tocSgetresolverrulerequest"></a>
<a id="tocsgetresolverrulerequest"></a>

```json
{
  "ResolverRuleId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResolverRuleId|object|true|none|none|

<h2 id="tocS_GetResolverRuleAssociationResponse">GetResolverRuleAssociationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetresolverruleassociationresponse"></a>
<a id="schema_GetResolverRuleAssociationResponse"></a>
<a id="tocSgetresolverruleassociationresponse"></a>
<a id="tocsgetresolverruleassociationresponse"></a>

```json
{
  "ResolverRuleAssociation": {
    "Id": {},
    "ResolverRuleId": {},
    "Name": {},
    "VPCId": {},
    "Status": {},
    "StatusMessage": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResolverRuleAssociation|object|false|none|none|

<h2 id="tocS_GetResolverRuleAssociationRequest">GetResolverRuleAssociationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetresolverruleassociationrequest"></a>
<a id="schema_GetResolverRuleAssociationRequest"></a>
<a id="tocSgetresolverruleassociationrequest"></a>
<a id="tocsgetresolverruleassociationrequest"></a>

```json
{
  "ResolverRuleAssociationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResolverRuleAssociationId|object|true|none|none|

<h2 id="tocS_GetResolverRulePolicyResponse">GetResolverRulePolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetresolverrulepolicyresponse"></a>
<a id="schema_GetResolverRulePolicyResponse"></a>
<a id="tocSgetresolverrulepolicyresponse"></a>
<a id="tocsgetresolverrulepolicyresponse"></a>

```json
{
  "ResolverRulePolicy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResolverRulePolicy|object|false|none|none|

<h2 id="tocS_GetResolverRulePolicyRequest">GetResolverRulePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetresolverrulepolicyrequest"></a>
<a id="schema_GetResolverRulePolicyRequest"></a>
<a id="tocSgetresolverrulepolicyrequest"></a>
<a id="tocsgetresolverrulepolicyrequest"></a>

```json
{
  "Arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|

<h2 id="tocS_ImportFirewallDomainsResponse">ImportFirewallDomainsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaimportfirewalldomainsresponse"></a>
<a id="schema_ImportFirewallDomainsResponse"></a>
<a id="tocSimportfirewalldomainsresponse"></a>
<a id="tocsimportfirewalldomainsresponse"></a>

```json
{
  "Id": {},
  "Name": {},
  "Status": {},
  "StatusMessage": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Name|object|false|none|none|
|Status|object|false|none|none|
|StatusMessage|object|false|none|none|

<h2 id="tocS_ImportFirewallDomainsRequest">ImportFirewallDomainsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaimportfirewalldomainsrequest"></a>
<a id="schema_ImportFirewallDomainsRequest"></a>
<a id="tocSimportfirewalldomainsrequest"></a>
<a id="tocsimportfirewalldomainsrequest"></a>

```json
{
  "FirewallDomainListId": {},
  "Operation": {},
  "DomainFileUrl": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallDomainListId|object|true|none|none|
|Operation|object|true|none|none|
|DomainFileUrl|object|true|none|none|

<h2 id="tocS_ListFirewallConfigsResponse">ListFirewallConfigsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfirewallconfigsresponse"></a>
<a id="schema_ListFirewallConfigsResponse"></a>
<a id="tocSlistfirewallconfigsresponse"></a>
<a id="tocslistfirewallconfigsresponse"></a>

```json
{
  "NextToken": {},
  "FirewallConfigs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|FirewallConfigs|object|false|none|none|

<h2 id="tocS_ListFirewallConfigsRequest">ListFirewallConfigsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistfirewallconfigsrequest"></a>
<a id="schema_ListFirewallConfigsRequest"></a>
<a id="tocSlistfirewallconfigsrequest"></a>
<a id="tocslistfirewallconfigsrequest"></a>

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

<h2 id="tocS_ListFirewallDomainListsResponse">ListFirewallDomainListsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfirewalldomainlistsresponse"></a>
<a id="schema_ListFirewallDomainListsResponse"></a>
<a id="tocSlistfirewalldomainlistsresponse"></a>
<a id="tocslistfirewalldomainlistsresponse"></a>

```json
{
  "NextToken": {},
  "FirewallDomainLists": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|FirewallDomainLists|object|false|none|none|

<h2 id="tocS_ListFirewallDomainListsRequest">ListFirewallDomainListsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistfirewalldomainlistsrequest"></a>
<a id="schema_ListFirewallDomainListsRequest"></a>
<a id="tocSlistfirewalldomainlistsrequest"></a>
<a id="tocslistfirewalldomainlistsrequest"></a>

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

<h2 id="tocS_ListFirewallDomainsResponse">ListFirewallDomainsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfirewalldomainsresponse"></a>
<a id="schema_ListFirewallDomainsResponse"></a>
<a id="tocSlistfirewalldomainsresponse"></a>
<a id="tocslistfirewalldomainsresponse"></a>

```json
{
  "NextToken": {},
  "Domains": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Domains|object|false|none|none|

<h2 id="tocS_ListFirewallDomainsRequest">ListFirewallDomainsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistfirewalldomainsrequest"></a>
<a id="schema_ListFirewallDomainsRequest"></a>
<a id="tocSlistfirewalldomainsrequest"></a>
<a id="tocslistfirewalldomainsrequest"></a>

```json
{
  "FirewallDomainListId": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallDomainListId|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListFirewallRuleGroupAssociationsResponse">ListFirewallRuleGroupAssociationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfirewallrulegroupassociationsresponse"></a>
<a id="schema_ListFirewallRuleGroupAssociationsResponse"></a>
<a id="tocSlistfirewallrulegroupassociationsresponse"></a>
<a id="tocslistfirewallrulegroupassociationsresponse"></a>

```json
{
  "NextToken": {},
  "FirewallRuleGroupAssociations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|FirewallRuleGroupAssociations|object|false|none|none|

<h2 id="tocS_ListFirewallRuleGroupAssociationsRequest">ListFirewallRuleGroupAssociationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistfirewallrulegroupassociationsrequest"></a>
<a id="schema_ListFirewallRuleGroupAssociationsRequest"></a>
<a id="tocSlistfirewallrulegroupassociationsrequest"></a>
<a id="tocslistfirewallrulegroupassociationsrequest"></a>

```json
{
  "FirewallRuleGroupId": {},
  "VpcId": {},
  "Priority": {},
  "Status": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallRuleGroupId|object|false|none|none|
|VpcId|object|false|none|none|
|Priority|object|false|none|none|
|Status|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListFirewallRuleGroupsResponse">ListFirewallRuleGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfirewallrulegroupsresponse"></a>
<a id="schema_ListFirewallRuleGroupsResponse"></a>
<a id="tocSlistfirewallrulegroupsresponse"></a>
<a id="tocslistfirewallrulegroupsresponse"></a>

```json
{
  "NextToken": {},
  "FirewallRuleGroups": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|FirewallRuleGroups|object|false|none|none|

<h2 id="tocS_ListFirewallRuleGroupsRequest">ListFirewallRuleGroupsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistfirewallrulegroupsrequest"></a>
<a id="schema_ListFirewallRuleGroupsRequest"></a>
<a id="tocSlistfirewallrulegroupsrequest"></a>
<a id="tocslistfirewallrulegroupsrequest"></a>

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

<h2 id="tocS_ListFirewallRulesResponse">ListFirewallRulesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfirewallrulesresponse"></a>
<a id="schema_ListFirewallRulesResponse"></a>
<a id="tocSlistfirewallrulesresponse"></a>
<a id="tocslistfirewallrulesresponse"></a>

```json
{
  "NextToken": {},
  "FirewallRules": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|FirewallRules|object|false|none|none|

<h2 id="tocS_ListFirewallRulesRequest">ListFirewallRulesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistfirewallrulesrequest"></a>
<a id="schema_ListFirewallRulesRequest"></a>
<a id="tocSlistfirewallrulesrequest"></a>
<a id="tocslistfirewallrulesrequest"></a>

```json
{
  "FirewallRuleGroupId": {},
  "Priority": {},
  "Action": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallRuleGroupId|object|true|none|none|
|Priority|object|false|none|none|
|Action|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListResolverConfigsResponse">ListResolverConfigsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistresolverconfigsresponse"></a>
<a id="schema_ListResolverConfigsResponse"></a>
<a id="tocSlistresolverconfigsresponse"></a>
<a id="tocslistresolverconfigsresponse"></a>

```json
{
  "NextToken": {},
  "ResolverConfigs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|ResolverConfigs|object|false|none|none|

<h2 id="tocS_ListResolverConfigsRequest">ListResolverConfigsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistresolverconfigsrequest"></a>
<a id="schema_ListResolverConfigsRequest"></a>
<a id="tocSlistresolverconfigsrequest"></a>
<a id="tocslistresolverconfigsrequest"></a>

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

<h2 id="tocS_ListResolverDnssecConfigsResponse">ListResolverDnssecConfigsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistresolverdnssecconfigsresponse"></a>
<a id="schema_ListResolverDnssecConfigsResponse"></a>
<a id="tocSlistresolverdnssecconfigsresponse"></a>
<a id="tocslistresolverdnssecconfigsresponse"></a>

```json
{
  "NextToken": {},
  "ResolverDnssecConfigs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|ResolverDnssecConfigs|object|false|none|none|

<h2 id="tocS_ListResolverDnssecConfigsRequest">ListResolverDnssecConfigsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistresolverdnssecconfigsrequest"></a>
<a id="schema_ListResolverDnssecConfigsRequest"></a>
<a id="tocSlistresolverdnssecconfigsrequest"></a>
<a id="tocslistresolverdnssecconfigsrequest"></a>

```json
{
  "MaxResults": {},
  "NextToken": {},
  "Filters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|
|Filters|object|false|none|none|

<h2 id="tocS_ListResolverEndpointIpAddressesResponse">ListResolverEndpointIpAddressesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistresolverendpointipaddressesresponse"></a>
<a id="schema_ListResolverEndpointIpAddressesResponse"></a>
<a id="tocSlistresolverendpointipaddressesresponse"></a>
<a id="tocslistresolverendpointipaddressesresponse"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "IpAddresses": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|IpAddresses|object|false|none|none|

<h2 id="tocS_ListResolverEndpointIpAddressesRequest">ListResolverEndpointIpAddressesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistresolverendpointipaddressesrequest"></a>
<a id="schema_ListResolverEndpointIpAddressesRequest"></a>
<a id="tocSlistresolverendpointipaddressesrequest"></a>
<a id="tocslistresolverendpointipaddressesrequest"></a>

```json
{
  "ResolverEndpointId": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResolverEndpointId|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListResolverEndpointsResponse">ListResolverEndpointsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistresolverendpointsresponse"></a>
<a id="schema_ListResolverEndpointsResponse"></a>
<a id="tocSlistresolverendpointsresponse"></a>
<a id="tocslistresolverendpointsresponse"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "ResolverEndpoints": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|ResolverEndpoints|object|false|none|none|

<h2 id="tocS_ListResolverEndpointsRequest">ListResolverEndpointsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistresolverendpointsrequest"></a>
<a id="schema_ListResolverEndpointsRequest"></a>
<a id="tocSlistresolverendpointsrequest"></a>
<a id="tocslistresolverendpointsrequest"></a>

```json
{
  "MaxResults": {},
  "NextToken": {},
  "Filters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|
|Filters|object|false|none|none|

<h2 id="tocS_ListResolverQueryLogConfigAssociationsResponse">ListResolverQueryLogConfigAssociationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistresolverquerylogconfigassociationsresponse"></a>
<a id="schema_ListResolverQueryLogConfigAssociationsResponse"></a>
<a id="tocSlistresolverquerylogconfigassociationsresponse"></a>
<a id="tocslistresolverquerylogconfigassociationsresponse"></a>

```json
{
  "NextToken": {},
  "TotalCount": {},
  "TotalFilteredCount": {},
  "ResolverQueryLogConfigAssociations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|TotalCount|object|false|none|none|
|TotalFilteredCount|object|false|none|none|
|ResolverQueryLogConfigAssociations|object|false|none|none|

<h2 id="tocS_ListResolverQueryLogConfigAssociationsRequest">ListResolverQueryLogConfigAssociationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistresolverquerylogconfigassociationsrequest"></a>
<a id="schema_ListResolverQueryLogConfigAssociationsRequest"></a>
<a id="tocSlistresolverquerylogconfigassociationsrequest"></a>
<a id="tocslistresolverquerylogconfigassociationsrequest"></a>

```json
{
  "MaxResults": {},
  "NextToken": {},
  "Filters": {},
  "SortBy": {},
  "SortOrder": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|
|Filters|object|false|none|none|
|SortBy|object|false|none|none|
|SortOrder|object|false|none|none|

<h2 id="tocS_ListResolverQueryLogConfigsResponse">ListResolverQueryLogConfigsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistresolverquerylogconfigsresponse"></a>
<a id="schema_ListResolverQueryLogConfigsResponse"></a>
<a id="tocSlistresolverquerylogconfigsresponse"></a>
<a id="tocslistresolverquerylogconfigsresponse"></a>

```json
{
  "NextToken": {},
  "TotalCount": {},
  "TotalFilteredCount": {},
  "ResolverQueryLogConfigs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|TotalCount|object|false|none|none|
|TotalFilteredCount|object|false|none|none|
|ResolverQueryLogConfigs|object|false|none|none|

<h2 id="tocS_ListResolverQueryLogConfigsRequest">ListResolverQueryLogConfigsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistresolverquerylogconfigsrequest"></a>
<a id="schema_ListResolverQueryLogConfigsRequest"></a>
<a id="tocSlistresolverquerylogconfigsrequest"></a>
<a id="tocslistresolverquerylogconfigsrequest"></a>

```json
{
  "MaxResults": {},
  "NextToken": {},
  "Filters": {},
  "SortBy": {},
  "SortOrder": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|
|Filters|object|false|none|none|
|SortBy|object|false|none|none|
|SortOrder|object|false|none|none|

<h2 id="tocS_ListResolverRuleAssociationsResponse">ListResolverRuleAssociationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistresolverruleassociationsresponse"></a>
<a id="schema_ListResolverRuleAssociationsResponse"></a>
<a id="tocSlistresolverruleassociationsresponse"></a>
<a id="tocslistresolverruleassociationsresponse"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "ResolverRuleAssociations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|ResolverRuleAssociations|object|false|none|none|

<h2 id="tocS_ListResolverRuleAssociationsRequest">ListResolverRuleAssociationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistresolverruleassociationsrequest"></a>
<a id="schema_ListResolverRuleAssociationsRequest"></a>
<a id="tocSlistresolverruleassociationsrequest"></a>
<a id="tocslistresolverruleassociationsrequest"></a>

```json
{
  "MaxResults": {},
  "NextToken": {},
  "Filters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|
|Filters|object|false|none|none|

<h2 id="tocS_ListResolverRulesResponse">ListResolverRulesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistresolverrulesresponse"></a>
<a id="schema_ListResolverRulesResponse"></a>
<a id="tocSlistresolverrulesresponse"></a>
<a id="tocslistresolverrulesresponse"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "ResolverRules": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|ResolverRules|object|false|none|none|

<h2 id="tocS_ListResolverRulesRequest">ListResolverRulesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistresolverrulesrequest"></a>
<a id="schema_ListResolverRulesRequest"></a>
<a id="tocSlistresolverrulesrequest"></a>
<a id="tocslistresolverrulesrequest"></a>

```json
{
  "MaxResults": {},
  "NextToken": {},
  "Filters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|
|Filters|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "Tags": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{
  "ResourceArn": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_PutFirewallRuleGroupPolicyResponse">PutFirewallRuleGroupPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputfirewallrulegrouppolicyresponse"></a>
<a id="schema_PutFirewallRuleGroupPolicyResponse"></a>
<a id="tocSputfirewallrulegrouppolicyresponse"></a>
<a id="tocsputfirewallrulegrouppolicyresponse"></a>

```json
{
  "ReturnValue": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReturnValue|object|false|none|none|

<h2 id="tocS_PutFirewallRuleGroupPolicyRequest">PutFirewallRuleGroupPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputfirewallrulegrouppolicyrequest"></a>
<a id="schema_PutFirewallRuleGroupPolicyRequest"></a>
<a id="tocSputfirewallrulegrouppolicyrequest"></a>
<a id="tocsputfirewallrulegrouppolicyrequest"></a>

```json
{
  "Arn": {},
  "FirewallRuleGroupPolicy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|
|FirewallRuleGroupPolicy|object|true|none|none|

<h2 id="tocS_PutResolverQueryLogConfigPolicyResponse">PutResolverQueryLogConfigPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputresolverquerylogconfigpolicyresponse"></a>
<a id="schema_PutResolverQueryLogConfigPolicyResponse"></a>
<a id="tocSputresolverquerylogconfigpolicyresponse"></a>
<a id="tocsputresolverquerylogconfigpolicyresponse"></a>

```json
{
  "ReturnValue": {}
}
```

The response to a <code>PutResolverQueryLogConfigPolicy</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReturnValue|object|false|none|none|

<h2 id="tocS_PutResolverQueryLogConfigPolicyRequest">PutResolverQueryLogConfigPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputresolverquerylogconfigpolicyrequest"></a>
<a id="schema_PutResolverQueryLogConfigPolicyRequest"></a>
<a id="tocSputresolverquerylogconfigpolicyrequest"></a>
<a id="tocsputresolverquerylogconfigpolicyrequest"></a>

```json
{
  "Arn": {},
  "ResolverQueryLogConfigPolicy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|
|ResolverQueryLogConfigPolicy|object|true|none|none|

<h2 id="tocS_InvalidPolicyDocument">InvalidPolicyDocument</h2>
<!-- backwards compatibility -->
<a id="schemainvalidpolicydocument"></a>
<a id="schema_InvalidPolicyDocument"></a>
<a id="tocSinvalidpolicydocument"></a>
<a id="tocsinvalidpolicydocument"></a>

```json
null
```

<h2 id="tocS_PutResolverRulePolicyResponse">PutResolverRulePolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputresolverrulepolicyresponse"></a>
<a id="schema_PutResolverRulePolicyResponse"></a>
<a id="tocSputresolverrulepolicyresponse"></a>
<a id="tocsputresolverrulepolicyresponse"></a>

```json
{
  "ReturnValue": {}
}
```

The response to a <code>PutResolverRulePolicy</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReturnValue|object|false|none|none|

<h2 id="tocS_PutResolverRulePolicyRequest">PutResolverRulePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputresolverrulepolicyrequest"></a>
<a id="schema_PutResolverRulePolicyRequest"></a>
<a id="tocSputresolverrulepolicyrequest"></a>
<a id="tocsputresolverrulepolicyrequest"></a>

```json
{
  "Arn": {},
  "ResolverRulePolicy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|
|ResolverRulePolicy|object|true|none|none|

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

<h2 id="tocS_InvalidTagException">InvalidTagException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidtagexception"></a>
<a id="schema_InvalidTagException"></a>
<a id="tocSinvalidtagexception"></a>
<a id="tocsinvalidtagexception"></a>

```json
null
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

<h2 id="tocS_UpdateFirewallConfigResponse">UpdateFirewallConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefirewallconfigresponse"></a>
<a id="schema_UpdateFirewallConfigResponse"></a>
<a id="tocSupdatefirewallconfigresponse"></a>
<a id="tocsupdatefirewallconfigresponse"></a>

```json
{
  "FirewallConfig": {
    "Id": {},
    "ResourceId": {},
    "OwnerId": {},
    "FirewallFailOpen": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallConfig|object|false|none|none|

<h2 id="tocS_UpdateFirewallConfigRequest">UpdateFirewallConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefirewallconfigrequest"></a>
<a id="schema_UpdateFirewallConfigRequest"></a>
<a id="tocSupdatefirewallconfigrequest"></a>
<a id="tocsupdatefirewallconfigrequest"></a>

```json
{
  "ResourceId": {},
  "FirewallFailOpen": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|true|none|none|
|FirewallFailOpen|object|true|none|none|

<h2 id="tocS_UpdateFirewallDomainsResponse">UpdateFirewallDomainsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefirewalldomainsresponse"></a>
<a id="schema_UpdateFirewallDomainsResponse"></a>
<a id="tocSupdatefirewalldomainsresponse"></a>
<a id="tocsupdatefirewalldomainsresponse"></a>

```json
{
  "Id": {},
  "Name": {},
  "Status": {},
  "StatusMessage": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Name|object|false|none|none|
|Status|object|false|none|none|
|StatusMessage|object|false|none|none|

<h2 id="tocS_UpdateFirewallDomainsRequest">UpdateFirewallDomainsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefirewalldomainsrequest"></a>
<a id="schema_UpdateFirewallDomainsRequest"></a>
<a id="tocSupdatefirewalldomainsrequest"></a>
<a id="tocsupdatefirewalldomainsrequest"></a>

```json
{
  "FirewallDomainListId": {},
  "Operation": {},
  "Domains": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallDomainListId|object|true|none|none|
|Operation|object|true|none|none|
|Domains|object|true|none|none|

<h2 id="tocS_UpdateFirewallRuleResponse">UpdateFirewallRuleResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefirewallruleresponse"></a>
<a id="schema_UpdateFirewallRuleResponse"></a>
<a id="tocSupdatefirewallruleresponse"></a>
<a id="tocsupdatefirewallruleresponse"></a>

```json
{
  "FirewallRule": {
    "FirewallRuleGroupId": {},
    "FirewallDomainListId": {},
    "Name": {},
    "Priority": {},
    "Action": {},
    "BlockResponse": {},
    "BlockOverrideDomain": {},
    "BlockOverrideDnsType": {},
    "BlockOverrideTtl": {},
    "CreatorRequestId": {},
    "CreationTime": {},
    "ModificationTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallRule|object|false|none|none|

<h2 id="tocS_UpdateFirewallRuleRequest">UpdateFirewallRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefirewallrulerequest"></a>
<a id="schema_UpdateFirewallRuleRequest"></a>
<a id="tocSupdatefirewallrulerequest"></a>
<a id="tocsupdatefirewallrulerequest"></a>

```json
{
  "FirewallRuleGroupId": {},
  "FirewallDomainListId": {},
  "Priority": {},
  "Action": {},
  "BlockResponse": {},
  "BlockOverrideDomain": {},
  "BlockOverrideDnsType": {},
  "BlockOverrideTtl": {},
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallRuleGroupId|object|true|none|none|
|FirewallDomainListId|object|true|none|none|
|Priority|object|false|none|none|
|Action|object|false|none|none|
|BlockResponse|object|false|none|none|
|BlockOverrideDomain|object|false|none|none|
|BlockOverrideDnsType|object|false|none|none|
|BlockOverrideTtl|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS_UpdateFirewallRuleGroupAssociationResponse">UpdateFirewallRuleGroupAssociationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefirewallrulegroupassociationresponse"></a>
<a id="schema_UpdateFirewallRuleGroupAssociationResponse"></a>
<a id="tocSupdatefirewallrulegroupassociationresponse"></a>
<a id="tocsupdatefirewallrulegroupassociationresponse"></a>

```json
{
  "FirewallRuleGroupAssociation": {
    "Id": {},
    "Arn": {},
    "FirewallRuleGroupId": {},
    "VpcId": {},
    "Name": {},
    "Priority": {},
    "MutationProtection": {},
    "ManagedOwnerName": {},
    "Status": {},
    "StatusMessage": {},
    "CreatorRequestId": {},
    "CreationTime": {},
    "ModificationTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallRuleGroupAssociation|object|false|none|none|

<h2 id="tocS_UpdateFirewallRuleGroupAssociationRequest">UpdateFirewallRuleGroupAssociationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefirewallrulegroupassociationrequest"></a>
<a id="schema_UpdateFirewallRuleGroupAssociationRequest"></a>
<a id="tocSupdatefirewallrulegroupassociationrequest"></a>
<a id="tocsupdatefirewallrulegroupassociationrequest"></a>

```json
{
  "FirewallRuleGroupAssociationId": {},
  "Priority": {},
  "MutationProtection": {},
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallRuleGroupAssociationId|object|true|none|none|
|Priority|object|false|none|none|
|MutationProtection|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS_UpdateResolverConfigResponse">UpdateResolverConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateresolverconfigresponse"></a>
<a id="schema_UpdateResolverConfigResponse"></a>
<a id="tocSupdateresolverconfigresponse"></a>
<a id="tocsupdateresolverconfigresponse"></a>

```json
{
  "ResolverConfig": {
    "Id": {},
    "ResourceId": {},
    "OwnerId": {},
    "AutodefinedReverse": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResolverConfig|object|false|none|none|

<h2 id="tocS_UpdateResolverConfigRequest">UpdateResolverConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateresolverconfigrequest"></a>
<a id="schema_UpdateResolverConfigRequest"></a>
<a id="tocSupdateresolverconfigrequest"></a>
<a id="tocsupdateresolverconfigrequest"></a>

```json
{
  "ResourceId": {},
  "AutodefinedReverseFlag": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|true|none|none|
|AutodefinedReverseFlag|object|true|none|none|

<h2 id="tocS_UpdateResolverDnssecConfigResponse">UpdateResolverDnssecConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateresolverdnssecconfigresponse"></a>
<a id="schema_UpdateResolverDnssecConfigResponse"></a>
<a id="tocSupdateresolverdnssecconfigresponse"></a>
<a id="tocsupdateresolverdnssecconfigresponse"></a>

```json
{
  "ResolverDNSSECConfig": {
    "Id": {},
    "OwnerId": {},
    "ResourceId": {},
    "ValidationStatus": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResolverDNSSECConfig|object|false|none|none|

<h2 id="tocS_UpdateResolverDnssecConfigRequest">UpdateResolverDnssecConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateresolverdnssecconfigrequest"></a>
<a id="schema_UpdateResolverDnssecConfigRequest"></a>
<a id="tocSupdateresolverdnssecconfigrequest"></a>
<a id="tocsupdateresolverdnssecconfigrequest"></a>

```json
{
  "ResourceId": {},
  "Validation": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|true|none|none|
|Validation|object|true|none|none|

<h2 id="tocS_UpdateResolverEndpointResponse">UpdateResolverEndpointResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateresolverendpointresponse"></a>
<a id="schema_UpdateResolverEndpointResponse"></a>
<a id="tocSupdateresolverendpointresponse"></a>
<a id="tocsupdateresolverendpointresponse"></a>

```json
{
  "ResolverEndpoint": {
    "Id": {},
    "CreatorRequestId": {},
    "Arn": {},
    "Name": {},
    "SecurityGroupIds": {},
    "Direction": {},
    "IpAddressCount": {},
    "HostVPCId": {},
    "Status": {},
    "StatusMessage": {},
    "CreationTime": {},
    "ModificationTime": {},
    "ResolverEndpointType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResolverEndpoint|object|false|none|none|

<h2 id="tocS_UpdateResolverEndpointRequest">UpdateResolverEndpointRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateresolverendpointrequest"></a>
<a id="schema_UpdateResolverEndpointRequest"></a>
<a id="tocSupdateresolverendpointrequest"></a>
<a id="tocsupdateresolverendpointrequest"></a>

```json
{
  "ResolverEndpointId": {},
  "Name": {},
  "ResolverEndpointType": {},
  "UpdateIpAddresses": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResolverEndpointId|object|true|none|none|
|Name|object|false|none|none|
|ResolverEndpointType|object|false|none|none|
|UpdateIpAddresses|object|false|none|none|

<h2 id="tocS_UpdateResolverRuleResponse">UpdateResolverRuleResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateresolverruleresponse"></a>
<a id="schema_UpdateResolverRuleResponse"></a>
<a id="tocSupdateresolverruleresponse"></a>
<a id="tocsupdateresolverruleresponse"></a>

```json
{
  "ResolverRule": {
    "Id": {},
    "CreatorRequestId": {},
    "Arn": {},
    "DomainName": {},
    "Status": {},
    "StatusMessage": {},
    "RuleType": {},
    "Name": {},
    "TargetIps": {},
    "ResolverEndpointId": {},
    "OwnerId": {},
    "ShareStatus": {},
    "CreationTime": {},
    "ModificationTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResolverRule|object|false|none|none|

<h2 id="tocS_UpdateResolverRuleRequest">UpdateResolverRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateresolverrulerequest"></a>
<a id="schema_UpdateResolverRuleRequest"></a>
<a id="tocSupdateresolverrulerequest"></a>
<a id="tocsupdateresolverrulerequest"></a>

```json
{
  "ResolverRuleId": {},
  "Config": {
    "Name": {},
    "TargetIps": {},
    "ResolverEndpointId": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResolverRuleId|object|true|none|none|
|Config|object|true|none|none|

<h2 id="tocS_AccountId">AccountId</h2>
<!-- backwards compatibility -->
<a id="schemaaccountid"></a>
<a id="schema_AccountId"></a>
<a id="tocSaccountid"></a>
<a id="tocsaccountid"></a>

```json
"stringstring"
```

<h2 id="tocS_Action">Action</h2>
<!-- backwards compatibility -->
<a id="schemaaction"></a>
<a id="schema_Action"></a>
<a id="tocSaction"></a>
<a id="tocsaction"></a>

```json
"ALLOW"
```

<h2 id="tocS_Arn">Arn</h2>
<!-- backwards compatibility -->
<a id="schemaarn"></a>
<a id="schema_Arn"></a>
<a id="tocSarn"></a>
<a id="tocsarn"></a>

```json
"string"
```

<h2 id="tocS_CreatorRequestId">CreatorRequestId</h2>
<!-- backwards compatibility -->
<a id="schemacreatorrequestid"></a>
<a id="schema_CreatorRequestId"></a>
<a id="tocScreatorrequestid"></a>
<a id="tocscreatorrequestid"></a>

```json
"string"
```

<h2 id="tocS_ResourceId">ResourceId</h2>
<!-- backwards compatibility -->
<a id="schemaresourceid"></a>
<a id="schema_ResourceId"></a>
<a id="tocSresourceid"></a>
<a id="tocsresourceid"></a>

```json
"string"
```

<h2 id="tocS_Priority">Priority</h2>
<!-- backwards compatibility -->
<a id="schemapriority"></a>
<a id="schema_Priority"></a>
<a id="tocSpriority"></a>
<a id="tocspriority"></a>

```json
0
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

<h2 id="tocS_MutationProtectionStatus">MutationProtectionStatus</h2>
<!-- backwards compatibility -->
<a id="schemamutationprotectionstatus"></a>
<a id="schema_MutationProtectionStatus"></a>
<a id="tocSmutationprotectionstatus"></a>
<a id="tocsmutationprotectionstatus"></a>

```json
"ENABLED"
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

<h2 id="tocS_FirewallRuleGroupAssociation">FirewallRuleGroupAssociation</h2>
<!-- backwards compatibility -->
<a id="schemafirewallrulegroupassociation"></a>
<a id="schema_FirewallRuleGroupAssociation"></a>
<a id="tocSfirewallrulegroupassociation"></a>
<a id="tocsfirewallrulegroupassociation"></a>

```json
{
  "Id": {},
  "Arn": {},
  "FirewallRuleGroupId": {},
  "VpcId": {},
  "Name": {},
  "Priority": {},
  "MutationProtection": {},
  "ManagedOwnerName": {},
  "Status": {},
  "StatusMessage": {},
  "CreatorRequestId": {},
  "CreationTime": {},
  "ModificationTime": {}
}
```

An association between a firewall rule group and a VPC, which enables DNS filtering for the VPC.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|
|FirewallRuleGroupId|object|false|none|none|
|VpcId|object|false|none|none|
|Name|object|false|none|none|
|Priority|object|false|none|none|
|MutationProtection|object|false|none|none|
|ManagedOwnerName|object|false|none|none|
|Status|object|false|none|none|
|StatusMessage|object|false|none|none|
|CreatorRequestId|object|false|none|none|
|CreationTime|object|false|none|none|
|ModificationTime|object|false|none|none|

<h2 id="tocS_IpAddressUpdate">IpAddressUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaipaddressupdate"></a>
<a id="schema_IpAddressUpdate"></a>
<a id="tocSipaddressupdate"></a>
<a id="tocsipaddressupdate"></a>

```json
{
  "IpId": {},
  "SubnetId": {},
  "Ip": {},
  "Ipv6": {}
}
```

In an <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverEndpoint.html">UpdateResolverEndpoint</a> request, information about an IP address to update.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IpId|object|false|none|none|
|SubnetId|object|false|none|none|
|Ip|object|false|none|none|
|Ipv6|object|false|none|none|

<h2 id="tocS_ResolverEndpoint">ResolverEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemaresolverendpoint"></a>
<a id="schema_ResolverEndpoint"></a>
<a id="tocSresolverendpoint"></a>
<a id="tocsresolverendpoint"></a>

```json
{
  "Id": {},
  "CreatorRequestId": {},
  "Arn": {},
  "Name": {},
  "SecurityGroupIds": {},
  "Direction": {},
  "IpAddressCount": {},
  "HostVPCId": {},
  "Status": {},
  "StatusMessage": {},
  "CreationTime": {},
  "ModificationTime": {},
  "ResolverEndpointType": {}
}
```

In the response to a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverEndpoint.html">CreateResolverEndpoint</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverEndpoint.html">DeleteResolverEndpoint</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html">GetResolverEndpoint</a>, Updates the name, or ResolverEndpointType for an endpoint, or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverEndpoint.html">UpdateResolverEndpoint</a> request, a complex type that contains settings for an existing inbound or outbound Resolver endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|CreatorRequestId|object|false|none|none|
|Arn|object|false|none|none|
|Name|object|false|none|none|
|SecurityGroupIds|object|false|none|none|
|Direction|object|false|none|none|
|IpAddressCount|object|false|none|none|
|HostVPCId|object|false|none|none|
|Status|object|false|none|none|
|StatusMessage|object|false|none|none|
|CreationTime|object|false|none|none|
|ModificationTime|object|false|none|none|
|ResolverEndpointType|object|false|none|none|

<h2 id="tocS_ResolverQueryLogConfigAssociation">ResolverQueryLogConfigAssociation</h2>
<!-- backwards compatibility -->
<a id="schemaresolverquerylogconfigassociation"></a>
<a id="schema_ResolverQueryLogConfigAssociation"></a>
<a id="tocSresolverquerylogconfigassociation"></a>
<a id="tocsresolverquerylogconfigassociation"></a>

```json
{
  "Id": {},
  "ResolverQueryLogConfigId": {},
  "ResourceId": {},
  "Status": {},
  "Error": {},
  "ErrorMessage": {},
  "CreationTime": {}
}
```

In the response to an <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverQueryLogConfig.html">AssociateResolverQueryLogConfig</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverQueryLogConfig.html">DisassociateResolverQueryLogConfig</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverQueryLogConfigAssociation.html">GetResolverQueryLogConfigAssociation</a>, or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigAssociations.html">ListResolverQueryLogConfigAssociations</a>, request, a complex type that contains settings for a specified association between an Amazon VPC and a query logging configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|ResolverQueryLogConfigId|object|false|none|none|
|ResourceId|object|false|none|none|
|Status|object|false|none|none|
|Error|object|false|none|none|
|ErrorMessage|object|false|none|none|
|CreationTime|object|false|none|none|

<h2 id="tocS_ResolverRuleAssociation">ResolverRuleAssociation</h2>
<!-- backwards compatibility -->
<a id="schemaresolverruleassociation"></a>
<a id="schema_ResolverRuleAssociation"></a>
<a id="tocSresolverruleassociation"></a>
<a id="tocsresolverruleassociation"></a>

```json
{
  "Id": {},
  "ResolverRuleId": {},
  "Name": {},
  "VPCId": {},
  "Status": {},
  "StatusMessage": {}
}
```

In the response to an <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverRule.html">AssociateResolverRule</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverRule.html">DisassociateResolverRule</a>, or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRuleAssociations.html">ListResolverRuleAssociations</a> request, provides information about an association between a Resolver rule and a VPC. The association determines which DNS queries that originate in the VPC are forwarded to your network.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|ResolverRuleId|object|false|none|none|
|Name|object|false|none|none|
|VPCId|object|false|none|none|
|Status|object|false|none|none|
|StatusMessage|object|false|none|none|

<h2 id="tocS_AutodefinedReverseFlag">AutodefinedReverseFlag</h2>
<!-- backwards compatibility -->
<a id="schemaautodefinedreverseflag"></a>
<a id="schema_AutodefinedReverseFlag"></a>
<a id="tocSautodefinedreverseflag"></a>
<a id="tocsautodefinedreverseflag"></a>

```json
"ENABLE"
```

<h2 id="tocS_BlockOverrideDnsType">BlockOverrideDnsType</h2>
<!-- backwards compatibility -->
<a id="schemablockoverridednstype"></a>
<a id="schema_BlockOverrideDnsType"></a>
<a id="tocSblockoverridednstype"></a>
<a id="tocsblockoverridednstype"></a>

```json
"CNAME"
```

<h2 id="tocS_BlockOverrideDomain">BlockOverrideDomain</h2>
<!-- backwards compatibility -->
<a id="schemablockoverridedomain"></a>
<a id="schema_BlockOverrideDomain"></a>
<a id="tocSblockoverridedomain"></a>
<a id="tocsblockoverridedomain"></a>

```json
"string"
```

<h2 id="tocS_BlockOverrideTtl">BlockOverrideTtl</h2>
<!-- backwards compatibility -->
<a id="schemablockoverridettl"></a>
<a id="schema_BlockOverrideTtl"></a>
<a id="tocSblockoverridettl"></a>
<a id="tocsblockoverridettl"></a>

```json
0
```

<h2 id="tocS_BlockResponse">BlockResponse</h2>
<!-- backwards compatibility -->
<a id="schemablockresponse"></a>
<a id="schema_BlockResponse"></a>
<a id="tocSblockresponse"></a>
<a id="tocsblockresponse"></a>

```json
"NODATA"
```

<h2 id="tocS_Boolean">Boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_Boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
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

<h2 id="tocS_FirewallDomainList">FirewallDomainList</h2>
<!-- backwards compatibility -->
<a id="schemafirewalldomainlist"></a>
<a id="schema_FirewallDomainList"></a>
<a id="tocSfirewalldomainlist"></a>
<a id="tocsfirewalldomainlist"></a>

```json
{
  "Id": {},
  "Arn": {},
  "Name": {},
  "DomainCount": {},
  "Status": {},
  "StatusMessage": {},
  "ManagedOwnerName": {},
  "CreatorRequestId": {},
  "CreationTime": {},
  "ModificationTime": {}
}
```

<p>High-level information about a list of firewall domains for use in a <a>FirewallRule</a>. This is returned by <a>GetFirewallDomainList</a>.</p> <p>To retrieve the domains that are defined for this domain list, call <a>ListFirewallDomains</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|
|Name|object|false|none|none|
|DomainCount|object|false|none|none|
|Status|object|false|none|none|
|StatusMessage|object|false|none|none|
|ManagedOwnerName|object|false|none|none|
|CreatorRequestId|object|false|none|none|
|CreationTime|object|false|none|none|
|ModificationTime|object|false|none|none|

<h2 id="tocS_FirewallRuleGroup">FirewallRuleGroup</h2>
<!-- backwards compatibility -->
<a id="schemafirewallrulegroup"></a>
<a id="schema_FirewallRuleGroup"></a>
<a id="tocSfirewallrulegroup"></a>
<a id="tocsfirewallrulegroup"></a>

```json
{
  "Id": {},
  "Arn": {},
  "Name": {},
  "RuleCount": {},
  "Status": {},
  "StatusMessage": {},
  "OwnerId": {},
  "CreatorRequestId": {},
  "ShareStatus": {},
  "CreationTime": {},
  "ModificationTime": {}
}
```

High-level information for a firewall rule group. A firewall rule group is a collection of rules that DNS Firewall uses to filter DNS network traffic for a VPC. To retrieve the rules for the rule group, call <a>ListFirewallRules</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|
|Name|object|false|none|none|
|RuleCount|object|false|none|none|
|Status|object|false|none|none|
|StatusMessage|object|false|none|none|
|OwnerId|object|false|none|none|
|CreatorRequestId|object|false|none|none|
|ShareStatus|object|false|none|none|
|CreationTime|object|false|none|none|
|ModificationTime|object|false|none|none|

<h2 id="tocS_FirewallRule">FirewallRule</h2>
<!-- backwards compatibility -->
<a id="schemafirewallrule"></a>
<a id="schema_FirewallRule"></a>
<a id="tocSfirewallrule"></a>
<a id="tocsfirewallrule"></a>

```json
{
  "FirewallRuleGroupId": {},
  "FirewallDomainListId": {},
  "Name": {},
  "Priority": {},
  "Action": {},
  "BlockResponse": {},
  "BlockOverrideDomain": {},
  "BlockOverrideDnsType": {},
  "BlockOverrideTtl": {},
  "CreatorRequestId": {},
  "CreationTime": {},
  "ModificationTime": {}
}
```

A single firewall rule in a rule group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallRuleGroupId|object|false|none|none|
|FirewallDomainListId|object|false|none|none|
|Name|object|false|none|none|
|Priority|object|false|none|none|
|Action|object|false|none|none|
|BlockResponse|object|false|none|none|
|BlockOverrideDomain|object|false|none|none|
|BlockOverrideDnsType|object|false|none|none|
|BlockOverrideTtl|object|false|none|none|
|CreatorRequestId|object|false|none|none|
|CreationTime|object|false|none|none|
|ModificationTime|object|false|none|none|

<h2 id="tocS_SecurityGroupIds">SecurityGroupIds</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroupids"></a>
<a id="schema_SecurityGroupIds"></a>
<a id="tocSsecuritygroupids"></a>
<a id="tocssecuritygroupids"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ResolverEndpointDirection">ResolverEndpointDirection</h2>
<!-- backwards compatibility -->
<a id="schemaresolverendpointdirection"></a>
<a id="schema_ResolverEndpointDirection"></a>
<a id="tocSresolverendpointdirection"></a>
<a id="tocsresolverendpointdirection"></a>

```json
"INBOUND"
```

<h2 id="tocS_IpAddressesRequest">IpAddressesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaipaddressesrequest"></a>
<a id="schema_IpAddressesRequest"></a>
<a id="tocSipaddressesrequest"></a>
<a id="tocsipaddressesrequest"></a>

```json
[
  {
    "SubnetId": {},
    "Ip": {},
    "Ipv6": {}
  }
]
```

<h2 id="tocS_ResolverEndpointType">ResolverEndpointType</h2>
<!-- backwards compatibility -->
<a id="schemaresolverendpointtype"></a>
<a id="schema_ResolverEndpointType"></a>
<a id="tocSresolverendpointtype"></a>
<a id="tocsresolverendpointtype"></a>

```json
"IPV6"
```

<h2 id="tocS_ResolverQueryLogConfigName">ResolverQueryLogConfigName</h2>
<!-- backwards compatibility -->
<a id="schemaresolverquerylogconfigname"></a>
<a id="schema_ResolverQueryLogConfigName"></a>
<a id="tocSresolverquerylogconfigname"></a>
<a id="tocsresolverquerylogconfigname"></a>

```json
"string"
```

<h2 id="tocS_DestinationArn">DestinationArn</h2>
<!-- backwards compatibility -->
<a id="schemadestinationarn"></a>
<a id="schema_DestinationArn"></a>
<a id="tocSdestinationarn"></a>
<a id="tocsdestinationarn"></a>

```json
"string"
```

<h2 id="tocS_ResolverQueryLogConfig">ResolverQueryLogConfig</h2>
<!-- backwards compatibility -->
<a id="schemaresolverquerylogconfig"></a>
<a id="schema_ResolverQueryLogConfig"></a>
<a id="tocSresolverquerylogconfig"></a>
<a id="tocsresolverquerylogconfig"></a>

```json
{
  "Id": {},
  "OwnerId": {},
  "Status": {},
  "ShareStatus": {},
  "AssociationCount": {},
  "Arn": {},
  "Name": {},
  "DestinationArn": {},
  "CreatorRequestId": {},
  "CreationTime": {}
}
```

In the response to a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverQueryLogConfig.html">CreateResolverQueryLogConfig</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverQueryLogConfig.html">DeleteResolverQueryLogConfig</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverQueryLogConfig.html">GetResolverQueryLogConfig</a>, or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigs.html">ListResolverQueryLogConfigs</a> request, a complex type that contains settings for one query logging configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|OwnerId|object|false|none|none|
|Status|object|false|none|none|
|ShareStatus|object|false|none|none|
|AssociationCount|object|false|none|none|
|Arn|object|false|none|none|
|Name|object|false|none|none|
|DestinationArn|object|false|none|none|
|CreatorRequestId|object|false|none|none|
|CreationTime|object|false|none|none|

<h2 id="tocS_RuleTypeOption">RuleTypeOption</h2>
<!-- backwards compatibility -->
<a id="schemaruletypeoption"></a>
<a id="schema_RuleTypeOption"></a>
<a id="tocSruletypeoption"></a>
<a id="tocsruletypeoption"></a>

```json
"FORWARD"
```

<h2 id="tocS_DomainName">DomainName</h2>
<!-- backwards compatibility -->
<a id="schemadomainname"></a>
<a id="schema_DomainName"></a>
<a id="tocSdomainname"></a>
<a id="tocsdomainname"></a>

```json
"string"
```

<h2 id="tocS_TargetList">TargetList</h2>
<!-- backwards compatibility -->
<a id="schematargetlist"></a>
<a id="schema_TargetList"></a>
<a id="tocStargetlist"></a>
<a id="tocstargetlist"></a>

```json
[
  {
    "Ip": {},
    "Port": {},
    "Ipv6": {}
  }
]
```

<h2 id="tocS_ResolverRule">ResolverRule</h2>
<!-- backwards compatibility -->
<a id="schemaresolverrule"></a>
<a id="schema_ResolverRule"></a>
<a id="tocSresolverrule"></a>
<a id="tocsresolverrule"></a>

```json
{
  "Id": {},
  "CreatorRequestId": {},
  "Arn": {},
  "DomainName": {},
  "Status": {},
  "StatusMessage": {},
  "RuleType": {},
  "Name": {},
  "TargetIps": {},
  "ResolverEndpointId": {},
  "OwnerId": {},
  "ShareStatus": {},
  "CreationTime": {},
  "ModificationTime": {}
}
```

For queries that originate in your VPC, detailed information about a Resolver rule, which specifies how to route DNS queries out of the VPC. The <code>ResolverRule</code> parameter appears in the response to a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html">CreateResolverRule</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverRule.html">DeleteResolverRule</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRule.html">GetResolverRule</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html">ListResolverRules</a>, or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverRule.html">UpdateResolverRule</a> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|CreatorRequestId|object|false|none|none|
|Arn|object|false|none|none|
|DomainName|object|false|none|none|
|Status|object|false|none|none|
|StatusMessage|object|false|none|none|
|RuleType|object|false|none|none|
|Name|object|false|none|none|
|TargetIps|object|false|none|none|
|ResolverEndpointId|object|false|none|none|
|OwnerId|object|false|none|none|
|ShareStatus|object|false|none|none|
|CreationTime|object|false|none|none|
|ModificationTime|object|false|none|none|

<h2 id="tocS_DomainListFileUrl">DomainListFileUrl</h2>
<!-- backwards compatibility -->
<a id="schemadomainlistfileurl"></a>
<a id="schema_DomainListFileUrl"></a>
<a id="tocSdomainlistfileurl"></a>
<a id="tocsdomainlistfileurl"></a>

```json
"string"
```

<h2 id="tocS_FilterName">FilterName</h2>
<!-- backwards compatibility -->
<a id="schemafiltername"></a>
<a id="schema_FilterName"></a>
<a id="tocSfiltername"></a>
<a id="tocsfiltername"></a>

```json
"string"
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

<p>For Resolver list operations (<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverEndpoints.html">ListResolverEndpoints</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html">ListResolverRules</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRuleAssociations.html">ListResolverRuleAssociations</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigs.html">ListResolverQueryLogConfigs</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigAssociations.html">ListResolverQueryLogConfigAssociations</a>), and <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverDnssecConfigs.html">ListResolverDnssecConfigs</a>), an optional specification to return a subset of objects.</p> <p>To filter objects, such as Resolver endpoints or Resolver rules, you specify <code>Name</code> and <code>Values</code>. For example, to list only inbound Resolver endpoints, specify <code>Direction</code> for <code>Name</code> and specify <code>INBOUND</code> for <code>Values</code>. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Values|object|false|none|none|

<h2 id="tocS_FilterValue">FilterValue</h2>
<!-- backwards compatibility -->
<a id="schemafiltervalue"></a>
<a id="schema_FilterValue"></a>
<a id="tocSfiltervalue"></a>
<a id="tocsfiltervalue"></a>

```json
"string"
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

<h2 id="tocS_FirewallFailOpenStatus">FirewallFailOpenStatus</h2>
<!-- backwards compatibility -->
<a id="schemafirewallfailopenstatus"></a>
<a id="schema_FirewallFailOpenStatus"></a>
<a id="tocSfirewallfailopenstatus"></a>
<a id="tocsfirewallfailopenstatus"></a>

```json
"ENABLED"
```

<h2 id="tocS_FirewallConfig">FirewallConfig</h2>
<!-- backwards compatibility -->
<a id="schemafirewallconfig"></a>
<a id="schema_FirewallConfig"></a>
<a id="tocSfirewallconfig"></a>
<a id="tocsfirewallconfig"></a>

```json
{
  "Id": {},
  "ResourceId": {},
  "OwnerId": {},
  "FirewallFailOpen": {}
}
```

Configuration of the firewall behavior provided by DNS Firewall for a single VPC from Amazon Virtual Private Cloud (Amazon VPC).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|ResourceId|object|false|none|none|
|OwnerId|object|false|none|none|
|FirewallFailOpen|object|false|none|none|

<h2 id="tocS_FirewallConfigList">FirewallConfigList</h2>
<!-- backwards compatibility -->
<a id="schemafirewallconfiglist"></a>
<a id="schema_FirewallConfigList"></a>
<a id="tocSfirewallconfiglist"></a>
<a id="tocsfirewallconfiglist"></a>

```json
[
  {
    "Id": {},
    "ResourceId": {},
    "OwnerId": {},
    "FirewallFailOpen": {}
  }
]
```

<h2 id="tocS_FirewallDomainImportOperation">FirewallDomainImportOperation</h2>
<!-- backwards compatibility -->
<a id="schemafirewalldomainimportoperation"></a>
<a id="schema_FirewallDomainImportOperation"></a>
<a id="tocSfirewalldomainimportoperation"></a>
<a id="tocsfirewalldomainimportoperation"></a>

```json
"REPLACE"
```

<h2 id="tocS_Unsigned">Unsigned</h2>
<!-- backwards compatibility -->
<a id="schemaunsigned"></a>
<a id="schema_Unsigned"></a>
<a id="tocSunsigned"></a>
<a id="tocsunsigned"></a>

```json
0
```

<h2 id="tocS_FirewallDomainListStatus">FirewallDomainListStatus</h2>
<!-- backwards compatibility -->
<a id="schemafirewalldomainliststatus"></a>
<a id="schema_FirewallDomainListStatus"></a>
<a id="tocSfirewalldomainliststatus"></a>
<a id="tocsfirewalldomainliststatus"></a>

```json
"COMPLETE"
```

<h2 id="tocS_StatusMessage">StatusMessage</h2>
<!-- backwards compatibility -->
<a id="schemastatusmessage"></a>
<a id="schema_StatusMessage"></a>
<a id="tocSstatusmessage"></a>
<a id="tocsstatusmessage"></a>

```json
"string"
```

<h2 id="tocS_ServicePrinciple">ServicePrinciple</h2>
<!-- backwards compatibility -->
<a id="schemaserviceprinciple"></a>
<a id="schema_ServicePrinciple"></a>
<a id="tocSserviceprinciple"></a>
<a id="tocsserviceprinciple"></a>

```json
"string"
```

<h2 id="tocS_Rfc3339TimeString">Rfc3339TimeString</h2>
<!-- backwards compatibility -->
<a id="schemarfc3339timestring"></a>
<a id="schema_Rfc3339TimeString"></a>
<a id="tocSrfc3339timestring"></a>
<a id="tocsrfc3339timestring"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_FirewallDomainListMetadata">FirewallDomainListMetadata</h2>
<!-- backwards compatibility -->
<a id="schemafirewalldomainlistmetadata"></a>
<a id="schema_FirewallDomainListMetadata"></a>
<a id="tocSfirewalldomainlistmetadata"></a>
<a id="tocsfirewalldomainlistmetadata"></a>

```json
{
  "Id": {},
  "Arn": {},
  "Name": {},
  "CreatorRequestId": {},
  "ManagedOwnerName": {}
}
```

<p>Minimal high-level information for a firewall domain list. The action <a>ListFirewallDomainLists</a> returns an array of these objects. </p> <p>To retrieve full information for a firewall domain list, call <a>GetFirewallDomainList</a> and <a>ListFirewallDomains</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|
|Name|object|false|none|none|
|CreatorRequestId|object|false|none|none|
|ManagedOwnerName|object|false|none|none|

<h2 id="tocS_FirewallDomainListMetadataList">FirewallDomainListMetadataList</h2>
<!-- backwards compatibility -->
<a id="schemafirewalldomainlistmetadatalist"></a>
<a id="schema_FirewallDomainListMetadataList"></a>
<a id="tocSfirewalldomainlistmetadatalist"></a>
<a id="tocsfirewalldomainlistmetadatalist"></a>

```json
[
  {
    "Id": {},
    "Arn": {},
    "Name": {},
    "CreatorRequestId": {},
    "ManagedOwnerName": {}
  }
]
```

<h2 id="tocS_FirewallDomainName">FirewallDomainName</h2>
<!-- backwards compatibility -->
<a id="schemafirewalldomainname"></a>
<a id="schema_FirewallDomainName"></a>
<a id="tocSfirewalldomainname"></a>
<a id="tocsfirewalldomainname"></a>

```json
"string"
```

<h2 id="tocS_FirewallDomainUpdateOperation">FirewallDomainUpdateOperation</h2>
<!-- backwards compatibility -->
<a id="schemafirewalldomainupdateoperation"></a>
<a id="schema_FirewallDomainUpdateOperation"></a>
<a id="tocSfirewalldomainupdateoperation"></a>
<a id="tocsfirewalldomainupdateoperation"></a>

```json
"ADD"
```

<h2 id="tocS_FirewallDomains">FirewallDomains</h2>
<!-- backwards compatibility -->
<a id="schemafirewalldomains"></a>
<a id="schema_FirewallDomains"></a>
<a id="tocSfirewalldomains"></a>
<a id="tocsfirewalldomains"></a>

```json
[
  "string"
]
```

<h2 id="tocS_FirewallRuleGroupStatus">FirewallRuleGroupStatus</h2>
<!-- backwards compatibility -->
<a id="schemafirewallrulegroupstatus"></a>
<a id="schema_FirewallRuleGroupStatus"></a>
<a id="tocSfirewallrulegroupstatus"></a>
<a id="tocsfirewallrulegroupstatus"></a>

```json
"COMPLETE"
```

<h2 id="tocS_ShareStatus">ShareStatus</h2>
<!-- backwards compatibility -->
<a id="schemasharestatus"></a>
<a id="schema_ShareStatus"></a>
<a id="tocSsharestatus"></a>
<a id="tocssharestatus"></a>

```json
"NOT_SHARED"
```

<h2 id="tocS_FirewallRuleGroupAssociationStatus">FirewallRuleGroupAssociationStatus</h2>
<!-- backwards compatibility -->
<a id="schemafirewallrulegroupassociationstatus"></a>
<a id="schema_FirewallRuleGroupAssociationStatus"></a>
<a id="tocSfirewallrulegroupassociationstatus"></a>
<a id="tocsfirewallrulegroupassociationstatus"></a>

```json
"COMPLETE"
```

<h2 id="tocS_FirewallRuleGroupAssociations">FirewallRuleGroupAssociations</h2>
<!-- backwards compatibility -->
<a id="schemafirewallrulegroupassociations"></a>
<a id="schema_FirewallRuleGroupAssociations"></a>
<a id="tocSfirewallrulegroupassociations"></a>
<a id="tocsfirewallrulegroupassociations"></a>

```json
[
  {
    "Id": {},
    "Arn": {},
    "FirewallRuleGroupId": {},
    "VpcId": {},
    "Name": {},
    "Priority": {},
    "MutationProtection": {},
    "ManagedOwnerName": {},
    "Status": {},
    "StatusMessage": {},
    "CreatorRequestId": {},
    "CreationTime": {},
    "ModificationTime": {}
  }
]
```

<h2 id="tocS_FirewallRuleGroupMetadata">FirewallRuleGroupMetadata</h2>
<!-- backwards compatibility -->
<a id="schemafirewallrulegroupmetadata"></a>
<a id="schema_FirewallRuleGroupMetadata"></a>
<a id="tocSfirewallrulegroupmetadata"></a>
<a id="tocsfirewallrulegroupmetadata"></a>

```json
{
  "Id": {},
  "Arn": {},
  "Name": {},
  "OwnerId": {},
  "CreatorRequestId": {},
  "ShareStatus": {}
}
```

<p>Minimal high-level information for a firewall rule group. The action <a>ListFirewallRuleGroups</a> returns an array of these objects. </p> <p>To retrieve full information for a firewall rule group, call <a>GetFirewallRuleGroup</a> and <a>ListFirewallRules</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|
|Name|object|false|none|none|
|OwnerId|object|false|none|none|
|CreatorRequestId|object|false|none|none|
|ShareStatus|object|false|none|none|

<h2 id="tocS_FirewallRuleGroupMetadataList">FirewallRuleGroupMetadataList</h2>
<!-- backwards compatibility -->
<a id="schemafirewallrulegroupmetadatalist"></a>
<a id="schema_FirewallRuleGroupMetadataList"></a>
<a id="tocSfirewallrulegroupmetadatalist"></a>
<a id="tocsfirewallrulegroupmetadatalist"></a>

```json
[
  {
    "Id": {},
    "Arn": {},
    "Name": {},
    "OwnerId": {},
    "CreatorRequestId": {},
    "ShareStatus": {}
  }
]
```

<h2 id="tocS_FirewallRuleGroupPolicy">FirewallRuleGroupPolicy</h2>
<!-- backwards compatibility -->
<a id="schemafirewallrulegrouppolicy"></a>
<a id="schema_FirewallRuleGroupPolicy"></a>
<a id="tocSfirewallrulegrouppolicy"></a>
<a id="tocsfirewallrulegrouppolicy"></a>

```json
"string"
```

<h2 id="tocS_FirewallRules">FirewallRules</h2>
<!-- backwards compatibility -->
<a id="schemafirewallrules"></a>
<a id="schema_FirewallRules"></a>
<a id="tocSfirewallrules"></a>
<a id="tocsfirewallrules"></a>

```json
[
  {
    "FirewallRuleGroupId": {},
    "FirewallDomainListId": {},
    "Name": {},
    "Priority": {},
    "Action": {},
    "BlockResponse": {},
    "BlockOverrideDomain": {},
    "BlockOverrideDnsType": {},
    "BlockOverrideTtl": {},
    "CreatorRequestId": {},
    "CreationTime": {},
    "ModificationTime": {}
  }
]
```

<h2 id="tocS_ResolverConfig">ResolverConfig</h2>
<!-- backwards compatibility -->
<a id="schemaresolverconfig"></a>
<a id="schema_ResolverConfig"></a>
<a id="tocSresolverconfig"></a>
<a id="tocsresolverconfig"></a>

```json
{
  "Id": {},
  "ResourceId": {},
  "OwnerId": {},
  "AutodefinedReverse": {}
}
```

A complex type that contains information about a Resolver configuration for a VPC.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|ResourceId|object|false|none|none|
|OwnerId|object|false|none|none|
|AutodefinedReverse|object|false|none|none|

<h2 id="tocS_ResolverDnssecConfig">ResolverDnssecConfig</h2>
<!-- backwards compatibility -->
<a id="schemaresolverdnssecconfig"></a>
<a id="schema_ResolverDnssecConfig"></a>
<a id="tocSresolverdnssecconfig"></a>
<a id="tocsresolverdnssecconfig"></a>

```json
{
  "Id": {},
  "OwnerId": {},
  "ResourceId": {},
  "ValidationStatus": {}
}
```

A complex type that contains information about a configuration for DNSSEC validation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|OwnerId|object|false|none|none|
|ResourceId|object|false|none|none|
|ValidationStatus|object|false|none|none|

<h2 id="tocS_ResolverQueryLogConfigPolicy">ResolverQueryLogConfigPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaresolverquerylogconfigpolicy"></a>
<a id="schema_ResolverQueryLogConfigPolicy"></a>
<a id="tocSresolverquerylogconfigpolicy"></a>
<a id="tocsresolverquerylogconfigpolicy"></a>

```json
"string"
```

<h2 id="tocS_ResolverRulePolicy">ResolverRulePolicy</h2>
<!-- backwards compatibility -->
<a id="schemaresolverrulepolicy"></a>
<a id="schema_ResolverRulePolicy"></a>
<a id="tocSresolverrulepolicy"></a>
<a id="tocsresolverrulepolicy"></a>

```json
"string"
```

<h2 id="tocS_Ip">Ip</h2>
<!-- backwards compatibility -->
<a id="schemaip"></a>
<a id="schema_Ip"></a>
<a id="tocSip"></a>
<a id="tocsip"></a>

```json
"strings"
```

<h2 id="tocS_IpAddressCount">IpAddressCount</h2>
<!-- backwards compatibility -->
<a id="schemaipaddresscount"></a>
<a id="schema_IpAddressCount"></a>
<a id="tocSipaddresscount"></a>
<a id="tocsipaddresscount"></a>

```json
0
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

<h2 id="tocS_Ipv6">Ipv6</h2>
<!-- backwards compatibility -->
<a id="schemaipv6"></a>
<a id="schema_Ipv6"></a>
<a id="tocSipv6"></a>
<a id="tocsipv6"></a>

```json
"strings"
```

<h2 id="tocS_IpAddressRequest">IpAddressRequest</h2>
<!-- backwards compatibility -->
<a id="schemaipaddressrequest"></a>
<a id="schema_IpAddressRequest"></a>
<a id="tocSipaddressrequest"></a>
<a id="tocsipaddressrequest"></a>

```json
{
  "SubnetId": {},
  "Ip": {},
  "Ipv6": {}
}
```

In a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverEndpoint.html">CreateResolverEndpoint</a> request, the IP address that DNS queries originate from (for outbound endpoints) or that you forward DNS queries to (for inbound endpoints). <code>IpAddressRequest</code> also includes the ID of the subnet that contains the IP address.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubnetId|object|true|none|none|
|Ip|object|false|none|none|
|Ipv6|object|false|none|none|

<h2 id="tocS_IpAddressStatus">IpAddressStatus</h2>
<!-- backwards compatibility -->
<a id="schemaipaddressstatus"></a>
<a id="schema_IpAddressStatus"></a>
<a id="tocSipaddressstatus"></a>
<a id="tocsipaddressstatus"></a>

```json
"CREATING"
```

<h2 id="tocS_IpAddressResponse">IpAddressResponse</h2>
<!-- backwards compatibility -->
<a id="schemaipaddressresponse"></a>
<a id="schema_IpAddressResponse"></a>
<a id="tocSipaddressresponse"></a>
<a id="tocsipaddressresponse"></a>

```json
{
  "IpId": {},
  "SubnetId": {},
  "Ip": {},
  "Ipv6": {},
  "Status": {},
  "StatusMessage": {},
  "CreationTime": {},
  "ModificationTime": {}
}
```

In the response to a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html">GetResolverEndpoint</a> request, information about the IP addresses that the Resolver endpoint uses for DNS queries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IpId|object|false|none|none|
|SubnetId|object|false|none|none|
|Ip|object|false|none|none|
|Ipv6|object|false|none|none|
|Status|object|false|none|none|
|StatusMessage|object|false|none|none|
|CreationTime|object|false|none|none|
|ModificationTime|object|false|none|none|

<h2 id="tocS_IpAddressesResponse">IpAddressesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaipaddressesresponse"></a>
<a id="schema_IpAddressesResponse"></a>
<a id="tocSipaddressesresponse"></a>
<a id="tocsipaddressesresponse"></a>

```json
[
  {
    "IpId": {},
    "SubnetId": {},
    "Ip": {},
    "Ipv6": {},
    "Status": {},
    "StatusMessage": {},
    "CreationTime": {},
    "ModificationTime": {}
  }
]
```

<h2 id="tocS_ListDomainMaxResults">ListDomainMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemalistdomainmaxresults"></a>
<a id="schema_ListDomainMaxResults"></a>
<a id="tocSlistdomainmaxresults"></a>
<a id="tocslistdomainmaxresults"></a>

```json
1
```

<h2 id="tocS_ListFirewallConfigsMaxResult">ListFirewallConfigsMaxResult</h2>
<!-- backwards compatibility -->
<a id="schemalistfirewallconfigsmaxresult"></a>
<a id="schema_ListFirewallConfigsMaxResult"></a>
<a id="tocSlistfirewallconfigsmaxresult"></a>
<a id="tocslistfirewallconfigsmaxresult"></a>

```json
5
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
1
```

<h2 id="tocS_ListResolverConfigsMaxResult">ListResolverConfigsMaxResult</h2>
<!-- backwards compatibility -->
<a id="schemalistresolverconfigsmaxresult"></a>
<a id="schema_ListResolverConfigsMaxResult"></a>
<a id="tocSlistresolverconfigsmaxresult"></a>
<a id="tocslistresolverconfigsmaxresult"></a>

```json
5
```

<h2 id="tocS_ResolverConfigList">ResolverConfigList</h2>
<!-- backwards compatibility -->
<a id="schemaresolverconfiglist"></a>
<a id="schema_ResolverConfigList"></a>
<a id="tocSresolverconfiglist"></a>
<a id="tocsresolverconfiglist"></a>

```json
[
  {
    "Id": {},
    "ResourceId": {},
    "OwnerId": {},
    "AutodefinedReverse": {}
  }
]
```

<h2 id="tocS_ResolverDnssecConfigList">ResolverDnssecConfigList</h2>
<!-- backwards compatibility -->
<a id="schemaresolverdnssecconfiglist"></a>
<a id="schema_ResolverDnssecConfigList"></a>
<a id="tocSresolverdnssecconfiglist"></a>
<a id="tocsresolverdnssecconfiglist"></a>

```json
[
  {
    "Id": {},
    "OwnerId": {},
    "ResourceId": {},
    "ValidationStatus": {}
  }
]
```

<h2 id="tocS_ResolverEndpoints">ResolverEndpoints</h2>
<!-- backwards compatibility -->
<a id="schemaresolverendpoints"></a>
<a id="schema_ResolverEndpoints"></a>
<a id="tocSresolverendpoints"></a>
<a id="tocsresolverendpoints"></a>

```json
[
  {
    "Id": {},
    "CreatorRequestId": {},
    "Arn": {},
    "Name": {},
    "SecurityGroupIds": {},
    "Direction": {},
    "IpAddressCount": {},
    "HostVPCId": {},
    "Status": {},
    "StatusMessage": {},
    "CreationTime": {},
    "ModificationTime": {},
    "ResolverEndpointType": {}
  }
]
```

<h2 id="tocS_SortByKey">SortByKey</h2>
<!-- backwards compatibility -->
<a id="schemasortbykey"></a>
<a id="schema_SortByKey"></a>
<a id="tocSsortbykey"></a>
<a id="tocssortbykey"></a>

```json
"string"
```

<h2 id="tocS_SortOrder">SortOrder</h2>
<!-- backwards compatibility -->
<a id="schemasortorder"></a>
<a id="schema_SortOrder"></a>
<a id="tocSsortorder"></a>
<a id="tocssortorder"></a>

```json
"ASCENDING"
```

<h2 id="tocS_ResolverQueryLogConfigAssociationList">ResolverQueryLogConfigAssociationList</h2>
<!-- backwards compatibility -->
<a id="schemaresolverquerylogconfigassociationlist"></a>
<a id="schema_ResolverQueryLogConfigAssociationList"></a>
<a id="tocSresolverquerylogconfigassociationlist"></a>
<a id="tocsresolverquerylogconfigassociationlist"></a>

```json
[
  {
    "Id": {},
    "ResolverQueryLogConfigId": {},
    "ResourceId": {},
    "Status": {},
    "Error": {},
    "ErrorMessage": {},
    "CreationTime": {}
  }
]
```

<h2 id="tocS_ResolverQueryLogConfigList">ResolverQueryLogConfigList</h2>
<!-- backwards compatibility -->
<a id="schemaresolverquerylogconfiglist"></a>
<a id="schema_ResolverQueryLogConfigList"></a>
<a id="tocSresolverquerylogconfiglist"></a>
<a id="tocsresolverquerylogconfiglist"></a>

```json
[
  {
    "Id": {},
    "OwnerId": {},
    "Status": {},
    "ShareStatus": {},
    "AssociationCount": {},
    "Arn": {},
    "Name": {},
    "DestinationArn": {},
    "CreatorRequestId": {},
    "CreationTime": {}
  }
]
```

<h2 id="tocS_ResolverRuleAssociations">ResolverRuleAssociations</h2>
<!-- backwards compatibility -->
<a id="schemaresolverruleassociations"></a>
<a id="schema_ResolverRuleAssociations"></a>
<a id="tocSresolverruleassociations"></a>
<a id="tocsresolverruleassociations"></a>

```json
[
  {
    "Id": {},
    "ResolverRuleId": {},
    "Name": {},
    "VPCId": {},
    "Status": {},
    "StatusMessage": {}
  }
]
```

<h2 id="tocS_ResolverRules">ResolverRules</h2>
<!-- backwards compatibility -->
<a id="schemaresolverrules"></a>
<a id="schema_ResolverRules"></a>
<a id="tocSresolverrules"></a>
<a id="tocsresolverrules"></a>

```json
[
  {
    "Id": {},
    "CreatorRequestId": {},
    "Arn": {},
    "DomainName": {},
    "Status": {},
    "StatusMessage": {},
    "RuleType": {},
    "Name": {},
    "TargetIps": {},
    "ResolverEndpointId": {},
    "OwnerId": {},
    "ShareStatus": {},
    "CreationTime": {},
    "ModificationTime": {}
  }
]
```

<h2 id="tocS_Port">Port</h2>
<!-- backwards compatibility -->
<a id="schemaport"></a>
<a id="schema_Port"></a>
<a id="tocSport"></a>
<a id="tocsport"></a>

```json
0
```

<h2 id="tocS_ResolverAutodefinedReverseStatus">ResolverAutodefinedReverseStatus</h2>
<!-- backwards compatibility -->
<a id="schemaresolverautodefinedreversestatus"></a>
<a id="schema_ResolverAutodefinedReverseStatus"></a>
<a id="tocSresolverautodefinedreversestatus"></a>
<a id="tocsresolverautodefinedreversestatus"></a>

```json
"ENABLING"
```

<h2 id="tocS_ResolverDNSSECValidationStatus">ResolverDNSSECValidationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaresolverdnssecvalidationstatus"></a>
<a id="schema_ResolverDNSSECValidationStatus"></a>
<a id="tocSresolverdnssecvalidationstatus"></a>
<a id="tocsresolverdnssecvalidationstatus"></a>

```json
"ENABLING"
```

<h2 id="tocS_ResolverEndpointStatus">ResolverEndpointStatus</h2>
<!-- backwards compatibility -->
<a id="schemaresolverendpointstatus"></a>
<a id="schema_ResolverEndpointStatus"></a>
<a id="tocSresolverendpointstatus"></a>
<a id="tocsresolverendpointstatus"></a>

```json
"CREATING"
```

<h2 id="tocS_ResolverQueryLogConfigStatus">ResolverQueryLogConfigStatus</h2>
<!-- backwards compatibility -->
<a id="schemaresolverquerylogconfigstatus"></a>
<a id="schema_ResolverQueryLogConfigStatus"></a>
<a id="tocSresolverquerylogconfigstatus"></a>
<a id="tocsresolverquerylogconfigstatus"></a>

```json
"CREATING"
```

<h2 id="tocS_ResolverQueryLogConfigAssociationStatus">ResolverQueryLogConfigAssociationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaresolverquerylogconfigassociationstatus"></a>
<a id="schema_ResolverQueryLogConfigAssociationStatus"></a>
<a id="tocSresolverquerylogconfigassociationstatus"></a>
<a id="tocsresolverquerylogconfigassociationstatus"></a>

```json
"CREATING"
```

<h2 id="tocS_ResolverQueryLogConfigAssociationError">ResolverQueryLogConfigAssociationError</h2>
<!-- backwards compatibility -->
<a id="schemaresolverquerylogconfigassociationerror"></a>
<a id="schema_ResolverQueryLogConfigAssociationError"></a>
<a id="tocSresolverquerylogconfigassociationerror"></a>
<a id="tocsresolverquerylogconfigassociationerror"></a>

```json
"NONE"
```

<h2 id="tocS_ResolverQueryLogConfigAssociationErrorMessage">ResolverQueryLogConfigAssociationErrorMessage</h2>
<!-- backwards compatibility -->
<a id="schemaresolverquerylogconfigassociationerrormessage"></a>
<a id="schema_ResolverQueryLogConfigAssociationErrorMessage"></a>
<a id="tocSresolverquerylogconfigassociationerrormessage"></a>
<a id="tocsresolverquerylogconfigassociationerrormessage"></a>

```json
"string"
```

<h2 id="tocS_ResolverRuleStatus">ResolverRuleStatus</h2>
<!-- backwards compatibility -->
<a id="schemaresolverrulestatus"></a>
<a id="schema_ResolverRuleStatus"></a>
<a id="tocSresolverrulestatus"></a>
<a id="tocsresolverrulestatus"></a>

```json
"COMPLETE"
```

<h2 id="tocS_ResolverRuleAssociationStatus">ResolverRuleAssociationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaresolverruleassociationstatus"></a>
<a id="schema_ResolverRuleAssociationStatus"></a>
<a id="tocSresolverruleassociationstatus"></a>
<a id="tocsresolverruleassociationstatus"></a>

```json
"CREATING"
```

<h2 id="tocS_ResolverRuleConfig">ResolverRuleConfig</h2>
<!-- backwards compatibility -->
<a id="schemaresolverruleconfig"></a>
<a id="schema_ResolverRuleConfig"></a>
<a id="tocSresolverruleconfig"></a>
<a id="tocsresolverruleconfig"></a>

```json
{
  "Name": {},
  "TargetIps": {},
  "ResolverEndpointId": {}
}
```

In an <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverRule.html">UpdateResolverRule</a> request, information about the changes that you want to make.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|TargetIps|object|false|none|none|
|ResolverEndpointId|object|false|none|none|

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

One tag that you want to add to the specified resource. A tag consists of a <code>Key</code> (a name for the tag) and a <code>Value</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

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

<h2 id="tocS_TargetAddress">TargetAddress</h2>
<!-- backwards compatibility -->
<a id="schematargetaddress"></a>
<a id="schema_TargetAddress"></a>
<a id="tocStargetaddress"></a>
<a id="tocstargetaddress"></a>

```json
{
  "Ip": {},
  "Port": {},
  "Ipv6": {}
}
```

In a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html">CreateResolverRule</a> request, an array of the IPs that you want to forward DNS queries to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Ip|object|false|none|none|
|Port|object|false|none|none|
|Ipv6|object|false|none|none|

<h2 id="tocS_UpdateIpAddress">UpdateIpAddress</h2>
<!-- backwards compatibility -->
<a id="schemaupdateipaddress"></a>
<a id="schema_UpdateIpAddress"></a>
<a id="tocSupdateipaddress"></a>
<a id="tocsupdateipaddress"></a>

```json
{
  "IpId": {},
  "Ipv6": {}
}
```

 Provides information about the IP address type in response to <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverEndpoint.html">UpdateResolverEndpoint</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IpId|object|true|none|none|
|Ipv6|object|true|none|none|

<h2 id="tocS_UpdateIpAddresses">UpdateIpAddresses</h2>
<!-- backwards compatibility -->
<a id="schemaupdateipaddresses"></a>
<a id="schema_UpdateIpAddresses"></a>
<a id="tocSupdateipaddresses"></a>
<a id="tocsupdateipaddresses"></a>

```json
[
  {
    "IpId": {},
    "Ipv6": {}
  }
]
```

<h2 id="tocS_Validation">Validation</h2>
<!-- backwards compatibility -->
<a id="schemavalidation"></a>
<a id="schema_Validation"></a>
<a id="tocSvalidation"></a>
<a id="tocsvalidation"></a>

```json
"ENABLE"
```
