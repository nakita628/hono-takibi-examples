<h1 id="aws-network-firewall">AWS Network Firewall v2020-11-12</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>This is the API Reference for Network Firewall. This guide is for developers who need detailed information about the Network Firewall API actions, data types, and errors. </p> <ul> <li> <p>The REST API requires you to handle connection details, such as calculating signatures, handling request retries, and error handling. For general information about using the Amazon Web Services REST APIs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-apis.html">Amazon Web Services APIs</a>. </p> <p>To access Network Firewall using the REST API endpoint: <code>https://network-firewall.&lt;region&gt;.amazonaws.com </code> </p> </li> <li> <p>Alternatively, you can use one of the Amazon Web Services SDKs to access an API that's tailored to the programming language or platform that you're using. For more information, see <a href="http://aws.amazon.com/tools/#SDKs">Amazon Web Services SDKs</a>.</p> </li> <li> <p>For descriptions of Network Firewall features, including and step-by-step instructions on how to use them through the Network Firewall console, see the <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/">Network Firewall Developer Guide</a>.</p> </li> </ul> <p>Network Firewall is a stateful, managed, network firewall and intrusion detection and prevention service for Amazon Virtual Private Cloud (Amazon VPC). With Network Firewall, you can filter traffic at the perimeter of your VPC. This includes filtering traffic going to and coming from an internet gateway, NAT gateway, or over VPN or Direct Connect. Network Firewall uses rules that are compatible with Suricata, a free, open source network analysis and threat detection engine. Network Firewall supports Suricata version 6.0.9. For information about Suricata, see the <a href="https://suricata.io/">Suricata website</a>.</p> <p>You can use Network Firewall to monitor and protect your VPC traffic in a number of ways. The following are just a few examples: </p> <ul> <li> <p>Allow domains or IP addresses for known Amazon Web Services service endpoints, such as Amazon S3, and block all other forms of traffic.</p> </li> <li> <p>Use custom lists of known bad domains to limit the types of domain names that your applications can access.</p> </li> <li> <p>Perform deep packet inspection on traffic entering or leaving your VPC.</p> </li> <li> <p>Use stateful protocol detection to filter protocols like HTTPS, regardless of the port used.</p> </li> </ul> <p>To enable Network Firewall for your VPCs, you perform steps in both Amazon VPC and in Network Firewall. For information about using Amazon VPC, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/">Amazon VPC User Guide</a>.</p> <p>To start using Network Firewall, do the following: </p> <ol> <li> <p>(Optional) If you don't already have a VPC that you want to protect, create it in Amazon VPC. </p> </li> <li> <p>In Amazon VPC, in each Availability Zone where you want to have a firewall endpoint, create a subnet for the sole use of Network Firewall. </p> </li> <li> <p>In Network Firewall, create stateless and stateful rule groups, to define the components of the network traffic filtering behavior that you want your firewall to have. </p> </li> <li> <p>In Network Firewall, create a firewall policy that uses your rule groups and specifies additional default traffic filtering behavior. </p> </li> <li> <p>In Network Firewall, create a firewall and specify your new firewall policy and VPC subnets. Network Firewall creates a firewall endpoint in each subnet that you specify, with the behavior that's defined in the firewall policy.</p> </li> <li> <p>In Amazon VPC, use ingress routing enhancements to route traffic through the new firewall endpoints.</p> </li> </ol>

Base URLs:

* <a href="http://network-firewall.us-east-1.amazonaws.com">http://network-firewall.us-east-1.amazonaws.com</a> - The Network Firewall multi-region endpoint

* <a href="https://network-firewall.us-east-1.amazonaws.com">https://network-firewall.us-east-1.amazonaws.com</a> - The Network Firewall multi-region endpoint

* <a href="http://network-firewall.cn-north-1.amazonaws.com.cn">http://network-firewall.cn-north-1.amazonaws.com.cn</a> - The Network Firewall endpoint for China (Beijing) and China (Ningxia)

* <a href="https://network-firewall.cn-north-1.amazonaws.com.cn">https://network-firewall.cn-north-1.amazonaws.com.cn</a> - The Network Firewall endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/network-firewall/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-network-firewall-default">Default</h1>

## AssociateFirewallPolicy

<a id="opIdAssociateFirewallPolicy"></a>

> Code samples

```bash
curl 'https://network-firewall.us-east-1.amazonaws.com/#X-Amz-Target=NetworkFirewall_20201112.AssociateFirewallPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: NetworkFirewall_20201112.AssociateFirewallPolicy' \
  -d '{
    "UpdateToken": {},
    "FirewallArn": {},
    "FirewallName": {},
    "FirewallPolicyArn": {}
  }'
```

`POST /#X-Amz-Target=NetworkFirewall_20201112.AssociateFirewallPolicy`

<p>Associates a <a>FirewallPolicy</a> to a <a>Firewall</a>. </p> <p>A firewall policy defines how to monitor and manage your VPC network traffic, using a collection of inspection rule groups and other settings. Each firewall requires one firewall policy association, and you can use the same firewall policy for multiple firewalls. </p>

> Body parameter

```json
{
  "UpdateToken": {},
  "FirewallArn": {},
  "FirewallName": {},
  "FirewallPolicyArn": {}
}
```

<h3 id="associatefirewallpolicy-parameters">Parameters</h3>

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
|body|body|[AssociateFirewallPolicyRequest](#schemaassociatefirewallpolicyrequest)|true|none|
|» UpdateToken|body|object|false|none|
|» FirewallArn|body|object|false|none|
|» FirewallName|body|object|false|none|
|» FirewallPolicyArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|NetworkFirewall_20201112.AssociateFirewallPolicy|

> Example responses

> 200 Response

```json
{
  "FirewallArn": {},
  "FirewallName": {},
  "FirewallPolicyArn": {},
  "UpdateToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="associatefirewallpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateFirewallPolicyResponse](#schemaassociatefirewallpolicyresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InvalidTokenException|[InvalidTokenException](#schemainvalidtokenexception)|
|485|485|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateSubnets

<a id="opIdAssociateSubnets"></a>

> Code samples

```bash
curl 'https://network-firewall.us-east-1.amazonaws.com/#X-Amz-Target=NetworkFirewall_20201112.AssociateSubnets' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: NetworkFirewall_20201112.AssociateSubnets' \
  -d '{
    "UpdateToken": {},
    "FirewallArn": {},
    "FirewallName": {},
    "SubnetMappings": {}
  }'
```

`POST /#X-Amz-Target=NetworkFirewall_20201112.AssociateSubnets`

<p>Associates the specified subnets in the Amazon VPC to the firewall. You can specify one subnet for each of the Availability Zones that the VPC spans. </p> <p>This request creates an Network Firewall firewall endpoint in each of the subnets. To enable the firewall's protections, you must also modify the VPC's route tables for each subnet's Availability Zone, to redirect the traffic that's coming into and going out of the zone through the firewall endpoint. </p>

> Body parameter

```json
{
  "UpdateToken": {},
  "FirewallArn": {},
  "FirewallName": {},
  "SubnetMappings": {}
}
```

<h3 id="associatesubnets-parameters">Parameters</h3>

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
|body|body|[AssociateSubnetsRequest](#schemaassociatesubnetsrequest)|true|none|
|» UpdateToken|body|object|false|none|
|» FirewallArn|body|object|false|none|
|» FirewallName|body|object|false|none|
|» SubnetMappings|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|NetworkFirewall_20201112.AssociateSubnets|

> Example responses

> 200 Response

```json
{
  "FirewallArn": {},
  "FirewallName": {},
  "SubnetMappings": {},
  "UpdateToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="associatesubnets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateSubnetsResponse](#schemaassociatesubnetsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InvalidTokenException|[InvalidTokenException](#schemainvalidtokenexception)|
|485|485|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|486|486|InsufficientCapacityException|[InsufficientCapacityException](#schemainsufficientcapacityexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateFirewall

<a id="opIdCreateFirewall"></a>

> Code samples

```bash
curl 'https://network-firewall.us-east-1.amazonaws.com/#X-Amz-Target=NetworkFirewall_20201112.CreateFirewall' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: NetworkFirewall_20201112.CreateFirewall' \
  -d '{
    "FirewallName": {},
    "FirewallPolicyArn": {},
    "VpcId": {},
    "SubnetMappings": {},
    "DeleteProtection": {},
    "SubnetChangeProtection": {},
    "FirewallPolicyChangeProtection": {},
    "Description": {},
    "Tags": {},
    "EncryptionConfiguration": {
      "KeyId": {},
      "Type": {}
    }
  }'
```

`POST /#X-Amz-Target=NetworkFirewall_20201112.CreateFirewall`

<p>Creates an Network Firewall <a>Firewall</a> and accompanying <a>FirewallStatus</a> for a VPC. </p> <p>The firewall defines the configuration settings for an Network Firewall firewall. The settings that you can define at creation include the firewall policy, the subnets in your VPC to use for the firewall endpoints, and any tags that are attached to the firewall Amazon Web Services resource. </p> <p>After you create a firewall, you can provide additional settings, like the logging configuration. </p> <p>To update the settings for a firewall, you use the operations that apply to the settings themselves, for example <a>UpdateLoggingConfiguration</a>, <a>AssociateSubnets</a>, and <a>UpdateFirewallDeleteProtection</a>. </p> <p>To manage a firewall's tags, use the standard Amazon Web Services resource tagging operations, <a>ListTagsForResource</a>, <a>TagResource</a>, and <a>UntagResource</a>.</p> <p>To retrieve information about firewalls, use <a>ListFirewalls</a> and <a>DescribeFirewall</a>.</p>

> Body parameter

```json
{
  "FirewallName": {},
  "FirewallPolicyArn": {},
  "VpcId": {},
  "SubnetMappings": {},
  "DeleteProtection": {},
  "SubnetChangeProtection": {},
  "FirewallPolicyChangeProtection": {},
  "Description": {},
  "Tags": {},
  "EncryptionConfiguration": {
    "KeyId": {},
    "Type": {}
  }
}
```

<h3 id="createfirewall-parameters">Parameters</h3>

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
|body|body|[CreateFirewallRequest](#schemacreatefirewallrequest)|true|none|
|» FirewallName|body|object|true|none|
|» FirewallPolicyArn|body|object|true|none|
|» VpcId|body|object|true|none|
|» SubnetMappings|body|object|true|none|
|» DeleteProtection|body|object|false|none|
|» SubnetChangeProtection|body|object|false|none|
|» FirewallPolicyChangeProtection|body|object|false|none|
|» Description|body|object|false|none|
|» Tags|body|object|false|none|
|» EncryptionConfiguration|body|object|false|none|
|» » KeyId|body|object|false|none|
|» » Type|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|NetworkFirewall_20201112.CreateFirewall|

> Example responses

> 200 Response

```json
{
  "Firewall": {
    "FirewallName": {},
    "FirewallArn": {},
    "FirewallPolicyArn": {},
    "VpcId": {},
    "SubnetMappings": {},
    "DeleteProtection": {},
    "SubnetChangeProtection": {},
    "FirewallPolicyChangeProtection": {},
    "Description": {},
    "FirewallId": {},
    "Tags": {},
    "EncryptionConfiguration": {
      "KeyId": {},
      "Type": {}
    }
  },
  "FirewallStatus": {
    "Status": {},
    "ConfigurationSyncStateSummary": {},
    "SyncStates": {
      "property1": {
        "Attachment": {
          "SubnetId": {},
          "EndpointId": {},
          "Status": {},
          "StatusMessage": {}
        },
        "Config": {
          "property1": {
            "SyncStatus": {},
            "UpdateToken": {}
          },
          "property2": {
            "SyncStatus": {},
            "UpdateToken": {}
          }
        }
      },
      "property2": {
        "Attachment": {
          "SubnetId": {},
          "EndpointId": {},
          "Status": {},
          "StatusMessage": {}
        },
        "Config": {
          "property1": {
            "SyncStatus": {},
            "UpdateToken": {}
          },
          "property2": {
            "SyncStatus": {},
            "UpdateToken": {}
          }
        }
      }
    },
    "CapacityUsageSummary": {
      "CIDRs": {
        "AvailableCIDRCount": {},
        "UtilizedCIDRCount": {},
        "IPSetReferences": {
          "property1": {
            "ResolvedCIDRCount": {}
          },
          "property2": {
            "ResolvedCIDRCount": {}
          }
        }
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

<h3 id="createfirewall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateFirewallResponse](#schemacreatefirewallresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InsufficientCapacityException|[InsufficientCapacityException](#schemainsufficientcapacityexception)|
|485|485|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateFirewallPolicy

<a id="opIdCreateFirewallPolicy"></a>

> Code samples

```bash
curl 'https://network-firewall.us-east-1.amazonaws.com/#X-Amz-Target=NetworkFirewall_20201112.CreateFirewallPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: NetworkFirewall_20201112.CreateFirewallPolicy' \
  -d '{
    "FirewallPolicyName": {},
    "FirewallPolicy": {
      "StatelessRuleGroupReferences": {},
      "StatelessDefaultActions": {},
      "StatelessFragmentDefaultActions": {},
      "StatelessCustomActions": {},
      "StatefulRuleGroupReferences": {},
      "StatefulDefaultActions": {},
      "StatefulEngineOptions": {
        "RuleOrder": {},
        "StreamExceptionPolicy": {}
      },
      "TLSInspectionConfigurationArn": {}
    },
    "Description": {},
    "Tags": {},
    "DryRun": {},
    "EncryptionConfiguration": {
      "KeyId": {},
      "Type": {}
    }
  }'
```

`POST /#X-Amz-Target=NetworkFirewall_20201112.CreateFirewallPolicy`

<p>Creates the firewall policy for the firewall according to the specifications. </p> <p>An Network Firewall firewall policy defines the behavior of a firewall, in a collection of stateless and stateful rule groups and other settings. You can use one firewall policy for multiple firewalls. </p>

> Body parameter

```json
{
  "FirewallPolicyName": {},
  "FirewallPolicy": {
    "StatelessRuleGroupReferences": {},
    "StatelessDefaultActions": {},
    "StatelessFragmentDefaultActions": {},
    "StatelessCustomActions": {},
    "StatefulRuleGroupReferences": {},
    "StatefulDefaultActions": {},
    "StatefulEngineOptions": {
      "RuleOrder": {},
      "StreamExceptionPolicy": {}
    },
    "TLSInspectionConfigurationArn": {}
  },
  "Description": {},
  "Tags": {},
  "DryRun": {},
  "EncryptionConfiguration": {
    "KeyId": {},
    "Type": {}
  }
}
```

<h3 id="createfirewallpolicy-parameters">Parameters</h3>

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
|body|body|[CreateFirewallPolicyRequest](#schemacreatefirewallpolicyrequest)|true|none|
|» FirewallPolicyName|body|object|true|none|
|» FirewallPolicy|body|object|true|none|
|» » StatelessRuleGroupReferences|body|object|false|none|
|» » StatelessDefaultActions|body|object|true|none|
|» » StatelessFragmentDefaultActions|body|object|true|none|
|» » StatelessCustomActions|body|object|false|none|
|» » StatefulRuleGroupReferences|body|object|false|none|
|» » StatefulDefaultActions|body|object|false|none|
|» » StatefulEngineOptions|body|object|false|none|
|» » » RuleOrder|body|object|false|none|
|» » » StreamExceptionPolicy|body|object|false|none|
|» » TLSInspectionConfigurationArn|body|object|false|none|
|» Description|body|object|false|none|
|» Tags|body|object|false|none|
|» DryRun|body|object|false|none|
|» EncryptionConfiguration|body|object|false|none|
|» » KeyId|body|object|false|none|
|» » Type|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|NetworkFirewall_20201112.CreateFirewallPolicy|

> Example responses

> 200 Response

```json
{
  "UpdateToken": {},
  "FirewallPolicyResponse": {
    "FirewallPolicyName": {},
    "FirewallPolicyArn": {},
    "FirewallPolicyId": {},
    "Description": {},
    "FirewallPolicyStatus": {},
    "Tags": {},
    "ConsumedStatelessRuleCapacity": {},
    "ConsumedStatefulRuleCapacity": {},
    "NumberOfAssociations": {},
    "EncryptionConfiguration": {
      "KeyId": {},
      "Type": {}
    },
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

> 484 Response

```json
null
```

<h3 id="createfirewallpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateFirewallPolicyResponse](#schemacreatefirewallpolicyresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServerError|[InternalServerError](#schemainternalservererror)|
|484|484|InsufficientCapacityException|[InsufficientCapacityException](#schemainsufficientcapacityexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateRuleGroup

<a id="opIdCreateRuleGroup"></a>

> Code samples

```bash
curl 'https://network-firewall.us-east-1.amazonaws.com/#X-Amz-Target=NetworkFirewall_20201112.CreateRuleGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: NetworkFirewall_20201112.CreateRuleGroup' \
  -d '{
    "RuleGroupName": {},
    "RuleGroup": {
      "RuleVariables": {
        "IPSets": {
          "property1": {
            "Definition": {}
          },
          "property2": {
            "Definition": {}
          }
        },
        "PortSets": {
          "property1": {
            "Definition": {}
          },
          "property2": {
            "Definition": {}
          }
        }
      },
      "ReferenceSets": {
        "IPSetReferences": {
          "property1": {
            "ReferenceArn": {}
          },
          "property2": {
            "ReferenceArn": {}
          }
        }
      },
      "RulesSource": {
        "RulesString": {},
        "RulesSourceList": {
          "Targets": {},
          "TargetTypes": {},
          "GeneratedRulesType": {}
        },
        "StatefulRules": {},
        "StatelessRulesAndCustomActions": {
          "StatelessRules": {},
          "CustomActions": {}
        }
      },
      "StatefulRuleOptions": {
        "RuleOrder": {}
      }
    },
    "Rules": {},
    "Type": {},
    "Description": {},
    "Capacity": {},
    "Tags": {},
    "DryRun": {},
    "EncryptionConfiguration": {
      "KeyId": {},
      "Type": {}
    },
    "SourceMetadata": {
      "SourceArn": {},
      "SourceUpdateToken": {}
    }
  }'
```

`POST /#X-Amz-Target=NetworkFirewall_20201112.CreateRuleGroup`

<p>Creates the specified stateless or stateful rule group, which includes the rules for network traffic inspection, a capacity setting, and tags. </p> <p>You provide your rule group specification in your request using either <code>RuleGroup</code> or <code>Rules</code>.</p>

> Body parameter

```json
{
  "RuleGroupName": {},
  "RuleGroup": {
    "RuleVariables": {
      "IPSets": {
        "property1": {
          "Definition": {}
        },
        "property2": {
          "Definition": {}
        }
      },
      "PortSets": {
        "property1": {
          "Definition": {}
        },
        "property2": {
          "Definition": {}
        }
      }
    },
    "ReferenceSets": {
      "IPSetReferences": {
        "property1": {
          "ReferenceArn": {}
        },
        "property2": {
          "ReferenceArn": {}
        }
      }
    },
    "RulesSource": {
      "RulesString": {},
      "RulesSourceList": {
        "Targets": {},
        "TargetTypes": {},
        "GeneratedRulesType": {}
      },
      "StatefulRules": {},
      "StatelessRulesAndCustomActions": {
        "StatelessRules": {},
        "CustomActions": {}
      }
    },
    "StatefulRuleOptions": {
      "RuleOrder": {}
    }
  },
  "Rules": {},
  "Type": {},
  "Description": {},
  "Capacity": {},
  "Tags": {},
  "DryRun": {},
  "EncryptionConfiguration": {
    "KeyId": {},
    "Type": {}
  },
  "SourceMetadata": {
    "SourceArn": {},
    "SourceUpdateToken": {}
  }
}
```

<h3 id="createrulegroup-parameters">Parameters</h3>

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
|body|body|[CreateRuleGroupRequest](#schemacreaterulegrouprequest)|true|none|
|» RuleGroupName|body|object|true|none|
|» RuleGroup|body|object|false|none|
|» » RuleVariables|body|object|false|none|
|» » » IPSets|body|object|false|none|
|» » » » **additionalProperties**|body|[IPSet](#schemaipset)|false|A list of IP addresses and address ranges, in CIDR notation. This is part of a <a>RuleVariables</a>. |
|» » » PortSets|body|object|false|none|
|» » » » **additionalProperties**|body|[PortSet](#schemaportset)|false|A set of port ranges for use in the rules in a rule group. |
|» » ReferenceSets|body|object|false|none|
|» » » IPSetReferences|body|object|false|none|
|» » » » **additionalProperties**|body|[IPSetReference](#schemaipsetreference)|false|<p>Configures one or more IP set references for a Suricata-compatible rule group. This is used in <a>CreateRuleGroup</a> or <a>UpdateRuleGroup</a>. An IP set reference is a rule variable that references resources that you create and manage in another Amazon Web Services service, such as an Amazon VPC prefix list. Network Firewall IP set references enable you to dynamically update the contents of your rules. When you create, update, or delete the resource you are referencing in your rule, Network Firewall automatically updates the rule's content with the changes. For more information about IP set references in Network Firewall, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/rule-groups-ip-set-references">Using IP set references</a> in the <i>Network Firewall Developer Guide</i>.</p> <p> Network Firewall currently supports <a href="https://docs.aws.amazon.com/vpc/latest/userguide/managed-prefix-lists.html">Amazon VPC prefix lists</a> and <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/rule-groups-ip-set-references.html#rule-groups-referencing-resource-groups">resource groups</a> in IP set references. </p>|
|» » RulesSource|body|object|true|none|
|» » » RulesString|body|object|false|none|
|» » » RulesSourceList|body|object|false|none|
|» » » » Targets|body|object|true|none|
|» » » » TargetTypes|body|object|true|none|
|» » » » GeneratedRulesType|body|object|true|none|
|» » » StatefulRules|body|object|false|none|
|» » » StatelessRulesAndCustomActions|body|object|false|none|
|» » » » StatelessRules|body|object|true|none|
|» » » » CustomActions|body|object|false|none|
|» » StatefulRuleOptions|body|object|false|none|
|» » » RuleOrder|body|object|false|none|
|» Rules|body|object|false|none|
|» Type|body|object|true|none|
|» Description|body|object|false|none|
|» Capacity|body|object|true|none|
|» Tags|body|object|false|none|
|» DryRun|body|object|false|none|
|» EncryptionConfiguration|body|object|false|none|
|» » KeyId|body|object|false|none|
|» » Type|body|object|true|none|
|» SourceMetadata|body|object|false|none|
|» » SourceArn|body|object|false|none|
|» » SourceUpdateToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|NetworkFirewall_20201112.CreateRuleGroup|

> Example responses

> 200 Response

```json
{
  "UpdateToken": {},
  "RuleGroupResponse": {
    "RuleGroupArn": {},
    "RuleGroupName": {},
    "RuleGroupId": {},
    "Description": {},
    "Type": {},
    "Capacity": {},
    "RuleGroupStatus": {},
    "Tags": {},
    "ConsumedCapacity": {},
    "NumberOfAssociations": {},
    "EncryptionConfiguration": {
      "KeyId": {},
      "Type": {}
    },
    "SourceMetadata": {
      "SourceArn": {},
      "SourceUpdateToken": {}
    },
    "SnsTopic": {},
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

> 484 Response

```json
null
```

<h3 id="createrulegroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateRuleGroupResponse](#schemacreaterulegroupresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServerError|[InternalServerError](#schemainternalservererror)|
|484|484|InsufficientCapacityException|[InsufficientCapacityException](#schemainsufficientcapacityexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateTLSInspectionConfiguration

<a id="opIdCreateTLSInspectionConfiguration"></a>

> Code samples

```bash
curl 'https://network-firewall.us-east-1.amazonaws.com/#X-Amz-Target=NetworkFirewall_20201112.CreateTLSInspectionConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: NetworkFirewall_20201112.CreateTLSInspectionConfiguration' \
  -d '{
    "TLSInspectionConfigurationName": {},
    "TLSInspectionConfiguration": {
      "ServerCertificateConfigurations": {}
    },
    "Description": {},
    "Tags": {},
    "EncryptionConfiguration": {
      "KeyId": {},
      "Type": {}
    }
  }'
```

`POST /#X-Amz-Target=NetworkFirewall_20201112.CreateTLSInspectionConfiguration`

<p>Creates an Network Firewall TLS inspection configuration. A TLS inspection configuration contains the Certificate Manager certificate references that Network Firewall uses to decrypt and re-encrypt inbound traffic.</p> <p>After you create a TLS inspection configuration, you associate it with a firewall policy.</p> <p>To update the settings for a TLS inspection configuration, use <a>UpdateTLSInspectionConfiguration</a>.</p> <p>To manage a TLS inspection configuration's tags, use the standard Amazon Web Services resource tagging operations, <a>ListTagsForResource</a>, <a>TagResource</a>, and <a>UntagResource</a>.</p> <p>To retrieve information about TLS inspection configurations, use <a>ListTLSInspectionConfigurations</a> and <a>DescribeTLSInspectionConfiguration</a>.</p> <p> For more information about TLS inspection configurations, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/tls-inspection.html">Decrypting SSL/TLS traffic with TLS inspection configurations</a> in the <i>Network Firewall Developer Guide</i>. </p>

> Body parameter

```json
{
  "TLSInspectionConfigurationName": {},
  "TLSInspectionConfiguration": {
    "ServerCertificateConfigurations": {}
  },
  "Description": {},
  "Tags": {},
  "EncryptionConfiguration": {
    "KeyId": {},
    "Type": {}
  }
}
```

<h3 id="createtlsinspectionconfiguration-parameters">Parameters</h3>

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
|body|body|[CreateTLSInspectionConfigurationRequest](#schemacreatetlsinspectionconfigurationrequest)|true|none|
|» TLSInspectionConfigurationName|body|object|true|none|
|» TLSInspectionConfiguration|body|object|true|none|
|» » ServerCertificateConfigurations|body|object|false|none|
|» Description|body|object|false|none|
|» Tags|body|object|false|none|
|» EncryptionConfiguration|body|[EncryptionConfiguration](#schemaencryptionconfiguration)|false|A complex type that contains optional Amazon Web Services Key Management Service (KMS) encryption settings for your Network Firewall resources. Your data is encrypted by default with an Amazon Web Services owned key that Amazon Web Services owns and manages for you. You can use either the Amazon Web Services owned key, or provide your own customer managed key. To learn more about KMS encryption of your Network Firewall resources, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-encryption-at-rest.html">Encryption at rest with Amazon Web Services Key Managment Service</a> in the <i>Network Firewall Developer Guide</i>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|NetworkFirewall_20201112.CreateTLSInspectionConfiguration|

> Example responses

> 200 Response

```json
{
  "UpdateToken": {},
  "TLSInspectionConfigurationResponse": {
    "TLSInspectionConfigurationArn": {},
    "TLSInspectionConfigurationName": {},
    "TLSInspectionConfigurationId": {},
    "TLSInspectionConfigurationStatus": {},
    "Description": {},
    "Tags": {},
    "LastModifiedTime": {},
    "NumberOfAssociations": {},
    "EncryptionConfiguration": {
      "KeyId": {},
      "Type": {}
    },
    "Certificates": {}
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

<h3 id="createtlsinspectionconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateTLSInspectionConfigurationResponse](#schemacreatetlsinspectionconfigurationresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteFirewall

<a id="opIdDeleteFirewall"></a>

> Code samples

```bash
curl 'https://network-firewall.us-east-1.amazonaws.com/#X-Amz-Target=NetworkFirewall_20201112.DeleteFirewall' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: NetworkFirewall_20201112.DeleteFirewall' \
  -d '{
    "FirewallName": {},
    "FirewallArn": {}
  }'
```

`POST /#X-Amz-Target=NetworkFirewall_20201112.DeleteFirewall`

<p>Deletes the specified <a>Firewall</a> and its <a>FirewallStatus</a>. This operation requires the firewall's <code>DeleteProtection</code> flag to be <code>FALSE</code>. You can't revert this operation. </p> <p>You can check whether a firewall is in use by reviewing the route tables for the Availability Zones where you have firewall subnet mappings. Retrieve the subnet mappings by calling <a>DescribeFirewall</a>. You define and update the route tables through Amazon VPC. As needed, update the route tables for the zones to remove the firewall endpoints. When the route tables no longer use the firewall endpoints, you can remove the firewall safely.</p> <p>To delete a firewall, remove the delete protection if you need to using <a>UpdateFirewallDeleteProtection</a>, then delete the firewall by calling <a>DeleteFirewall</a>. </p>

> Body parameter

```json
{
  "FirewallName": {},
  "FirewallArn": {}
}
```

<h3 id="deletefirewall-parameters">Parameters</h3>

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
|body|body|[DeleteFirewallRequest](#schemadeletefirewallrequest)|true|none|
|» FirewallName|body|object|false|none|
|» FirewallArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|NetworkFirewall_20201112.DeleteFirewall|

> Example responses

> 200 Response

```json
{
  "Firewall": {
    "FirewallName": {},
    "FirewallArn": {},
    "FirewallPolicyArn": {},
    "VpcId": {},
    "SubnetMappings": {},
    "DeleteProtection": {},
    "SubnetChangeProtection": {},
    "FirewallPolicyChangeProtection": {},
    "Description": {},
    "FirewallId": {},
    "Tags": {},
    "EncryptionConfiguration": {
      "KeyId": {},
      "Type": {}
    }
  },
  "FirewallStatus": {
    "Status": {},
    "ConfigurationSyncStateSummary": {},
    "SyncStates": {
      "property1": {
        "Attachment": {
          "SubnetId": {},
          "EndpointId": {},
          "Status": {},
          "StatusMessage": {}
        },
        "Config": {
          "property1": {
            "SyncStatus": {},
            "UpdateToken": {}
          },
          "property2": {
            "SyncStatus": {},
            "UpdateToken": {}
          }
        }
      },
      "property2": {
        "Attachment": {
          "SubnetId": {},
          "EndpointId": {},
          "Status": {},
          "StatusMessage": {}
        },
        "Config": {
          "property1": {
            "SyncStatus": {},
            "UpdateToken": {}
          },
          "property2": {
            "SyncStatus": {},
            "UpdateToken": {}
          }
        }
      }
    },
    "CapacityUsageSummary": {
      "CIDRs": {
        "AvailableCIDRCount": {},
        "UtilizedCIDRCount": {},
        "IPSetReferences": {
          "property1": {
            "ResolvedCIDRCount": {}
          },
          "property2": {
            "ResolvedCIDRCount": {}
          }
        }
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

<h3 id="deletefirewall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteFirewallResponse](#schemadeletefirewallresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|485|485|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteFirewallPolicy

<a id="opIdDeleteFirewallPolicy"></a>

> Code samples

```bash
curl 'https://network-firewall.us-east-1.amazonaws.com/#X-Amz-Target=NetworkFirewall_20201112.DeleteFirewallPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: NetworkFirewall_20201112.DeleteFirewallPolicy' \
  -d '{
    "FirewallPolicyName": {},
    "FirewallPolicyArn": {}
  }'
```

`POST /#X-Amz-Target=NetworkFirewall_20201112.DeleteFirewallPolicy`

Deletes the specified <a>FirewallPolicy</a>. 

> Body parameter

```json
{
  "FirewallPolicyName": {},
  "FirewallPolicyArn": {}
}
```

<h3 id="deletefirewallpolicy-parameters">Parameters</h3>

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
|body|body|[DeleteFirewallPolicyRequest](#schemadeletefirewallpolicyrequest)|true|none|
|» FirewallPolicyName|body|object|false|none|
|» FirewallPolicyArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|NetworkFirewall_20201112.DeleteFirewallPolicy|

> Example responses

> 200 Response

```json
{
  "FirewallPolicyResponse": {
    "FirewallPolicyName": {},
    "FirewallPolicyArn": {},
    "FirewallPolicyId": {},
    "Description": {},
    "FirewallPolicyStatus": {},
    "Tags": {},
    "ConsumedStatelessRuleCapacity": {},
    "ConsumedStatefulRuleCapacity": {},
    "NumberOfAssociations": {},
    "EncryptionConfiguration": {
      "KeyId": {},
      "Type": {}
    },
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

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="deletefirewallpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteFirewallPolicyResponse](#schemadeletefirewallpolicyresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServerError|[InternalServerError](#schemainternalservererror)|
|484|484|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|485|485|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteResourcePolicy

<a id="opIdDeleteResourcePolicy"></a>

> Code samples

```bash
curl 'https://network-firewall.us-east-1.amazonaws.com/#X-Amz-Target=NetworkFirewall_20201112.DeleteResourcePolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: NetworkFirewall_20201112.DeleteResourcePolicy' \
  -d '{
    "ResourceArn": {}
  }'
```

`POST /#X-Amz-Target=NetworkFirewall_20201112.DeleteResourcePolicy`

Deletes a resource policy that you created in a <a>PutResourcePolicy</a> request. 

> Body parameter

```json
{
  "ResourceArn": {}
}
```

<h3 id="deleteresourcepolicy-parameters">Parameters</h3>

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
|body|body|[DeleteResourcePolicyRequest](#schemadeleteresourcepolicyrequest)|true|none|
|» ResourceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|NetworkFirewall_20201112.DeleteResourcePolicy|

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
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InvalidResourcePolicyException|[InvalidResourcePolicyException](#schemainvalidresourcepolicyexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRuleGroup

<a id="opIdDeleteRuleGroup"></a>

> Code samples

```bash
curl 'https://network-firewall.us-east-1.amazonaws.com/#X-Amz-Target=NetworkFirewall_20201112.DeleteRuleGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: NetworkFirewall_20201112.DeleteRuleGroup' \
  -d '{
    "RuleGroupName": {},
    "RuleGroupArn": {},
    "Type": {}
  }'
```

`POST /#X-Amz-Target=NetworkFirewall_20201112.DeleteRuleGroup`

Deletes the specified <a>RuleGroup</a>. 

> Body parameter

```json
{
  "RuleGroupName": {},
  "RuleGroupArn": {},
  "Type": {}
}
```

<h3 id="deleterulegroup-parameters">Parameters</h3>

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
|body|body|[DeleteRuleGroupRequest](#schemadeleterulegrouprequest)|true|none|
|» RuleGroupName|body|object|false|none|
|» RuleGroupArn|body|object|false|none|
|» Type|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|NetworkFirewall_20201112.DeleteRuleGroup|

> Example responses

> 200 Response

```json
{
  "RuleGroupResponse": {
    "RuleGroupArn": {},
    "RuleGroupName": {},
    "RuleGroupId": {},
    "Description": {},
    "Type": {},
    "Capacity": {},
    "RuleGroupStatus": {},
    "Tags": {},
    "ConsumedCapacity": {},
    "NumberOfAssociations": {},
    "EncryptionConfiguration": {
      "KeyId": {},
      "Type": {}
    },
    "SourceMetadata": {
      "SourceArn": {},
      "SourceUpdateToken": {}
    },
    "SnsTopic": {},
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

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="deleterulegroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteRuleGroupResponse](#schemadeleterulegroupresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServerError|[InternalServerError](#schemainternalservererror)|
|484|484|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|485|485|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteTLSInspectionConfiguration

<a id="opIdDeleteTLSInspectionConfiguration"></a>

> Code samples

```bash
curl 'https://network-firewall.us-east-1.amazonaws.com/#X-Amz-Target=NetworkFirewall_20201112.DeleteTLSInspectionConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: NetworkFirewall_20201112.DeleteTLSInspectionConfiguration' \
  -d '{
    "TLSInspectionConfigurationArn": {},
    "TLSInspectionConfigurationName": {}
  }'
```

`POST /#X-Amz-Target=NetworkFirewall_20201112.DeleteTLSInspectionConfiguration`

Deletes the specified <a>TLSInspectionConfiguration</a>.

> Body parameter

```json
{
  "TLSInspectionConfigurationArn": {},
  "TLSInspectionConfigurationName": {}
}
```

<h3 id="deletetlsinspectionconfiguration-parameters">Parameters</h3>

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
|body|body|[DeleteTLSInspectionConfigurationRequest](#schemadeletetlsinspectionconfigurationrequest)|true|none|
|» TLSInspectionConfigurationArn|body|object|false|none|
|» TLSInspectionConfigurationName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|NetworkFirewall_20201112.DeleteTLSInspectionConfiguration|

> Example responses

> 200 Response

```json
{
  "TLSInspectionConfigurationResponse": {
    "TLSInspectionConfigurationArn": {},
    "TLSInspectionConfigurationName": {},
    "TLSInspectionConfigurationId": {},
    "TLSInspectionConfigurationStatus": {},
    "Description": {},
    "Tags": {},
    "LastModifiedTime": {},
    "NumberOfAssociations": {},
    "EncryptionConfiguration": {
      "KeyId": {},
      "Type": {}
    },
    "Certificates": {}
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

<h3 id="deletetlsinspectionconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteTLSInspectionConfigurationResponse](#schemadeletetlsinspectionconfigurationresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeFirewall

<a id="opIdDescribeFirewall"></a>

> Code samples

```bash
curl 'https://network-firewall.us-east-1.amazonaws.com/#X-Amz-Target=NetworkFirewall_20201112.DescribeFirewall' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: NetworkFirewall_20201112.DescribeFirewall' \
  -d '{
    "FirewallName": {},
    "FirewallArn": {}
  }'
```

`POST /#X-Amz-Target=NetworkFirewall_20201112.DescribeFirewall`

Returns the data objects for the specified firewall. 

> Body parameter

```json
{
  "FirewallName": {},
  "FirewallArn": {}
}
```

<h3 id="describefirewall-parameters">Parameters</h3>

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
|body|body|[DescribeFirewallRequest](#schemadescribefirewallrequest)|true|none|
|» FirewallName|body|object|false|none|
|» FirewallArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|NetworkFirewall_20201112.DescribeFirewall|

> Example responses

> 200 Response

```json
{
  "UpdateToken": {},
  "Firewall": {
    "FirewallName": {},
    "FirewallArn": {},
    "FirewallPolicyArn": {},
    "VpcId": {},
    "SubnetMappings": {},
    "DeleteProtection": {},
    "SubnetChangeProtection": {},
    "FirewallPolicyChangeProtection": {},
    "Description": {},
    "FirewallId": {},
    "Tags": {},
    "EncryptionConfiguration": {
      "KeyId": {},
      "Type": {}
    }
  },
  "FirewallStatus": {
    "Status": {},
    "ConfigurationSyncStateSummary": {},
    "SyncStates": {
      "property1": {
        "Attachment": {
          "SubnetId": {},
          "EndpointId": {},
          "Status": {},
          "StatusMessage": {}
        },
        "Config": {
          "property1": {
            "SyncStatus": {},
            "UpdateToken": {}
          },
          "property2": {
            "SyncStatus": {},
            "UpdateToken": {}
          }
        }
      },
      "property2": {
        "Attachment": {
          "SubnetId": {},
          "EndpointId": {},
          "Status": {},
          "StatusMessage": {}
        },
        "Config": {
          "property1": {
            "SyncStatus": {},
            "UpdateToken": {}
          },
          "property2": {
            "SyncStatus": {},
            "UpdateToken": {}
          }
        }
      }
    },
    "CapacityUsageSummary": {
      "CIDRs": {
        "AvailableCIDRCount": {},
        "UtilizedCIDRCount": {},
        "IPSetReferences": {
          "property1": {
            "ResolvedCIDRCount": {}
          },
          "property2": {
            "ResolvedCIDRCount": {}
          }
        }
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

<h3 id="describefirewall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeFirewallResponse](#schemadescribefirewallresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeFirewallPolicy

<a id="opIdDescribeFirewallPolicy"></a>

> Code samples

```bash
curl 'https://network-firewall.us-east-1.amazonaws.com/#X-Amz-Target=NetworkFirewall_20201112.DescribeFirewallPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: NetworkFirewall_20201112.DescribeFirewallPolicy' \
  -d '{
    "FirewallPolicyName": {},
    "FirewallPolicyArn": {}
  }'
```

`POST /#X-Amz-Target=NetworkFirewall_20201112.DescribeFirewallPolicy`

Returns the data objects for the specified firewall policy. 

> Body parameter

```json
{
  "FirewallPolicyName": {},
  "FirewallPolicyArn": {}
}
```

<h3 id="describefirewallpolicy-parameters">Parameters</h3>

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
|body|body|[DescribeFirewallPolicyRequest](#schemadescribefirewallpolicyrequest)|true|none|
|» FirewallPolicyName|body|object|false|none|
|» FirewallPolicyArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|NetworkFirewall_20201112.DescribeFirewallPolicy|

> Example responses

> 200 Response

```json
{
  "UpdateToken": {},
  "FirewallPolicyResponse": {
    "FirewallPolicyName": {},
    "FirewallPolicyArn": {},
    "FirewallPolicyId": {},
    "Description": {},
    "FirewallPolicyStatus": {},
    "Tags": {},
    "ConsumedStatelessRuleCapacity": {},
    "ConsumedStatefulRuleCapacity": {},
    "NumberOfAssociations": {},
    "EncryptionConfiguration": {
      "KeyId": {},
      "Type": {}
    },
    "LastModifiedTime": {}
  },
  "FirewallPolicy": {
    "StatelessRuleGroupReferences": {},
    "StatelessDefaultActions": {},
    "StatelessFragmentDefaultActions": {},
    "StatelessCustomActions": {},
    "StatefulRuleGroupReferences": {},
    "StatefulDefaultActions": {},
    "StatefulEngineOptions": {
      "RuleOrder": {},
      "StreamExceptionPolicy": {}
    },
    "TLSInspectionConfigurationArn": {}
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

<h3 id="describefirewallpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeFirewallPolicyResponse](#schemadescribefirewallpolicyresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeLoggingConfiguration

<a id="opIdDescribeLoggingConfiguration"></a>

> Code samples

```bash
curl 'https://network-firewall.us-east-1.amazonaws.com/#X-Amz-Target=NetworkFirewall_20201112.DescribeLoggingConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: NetworkFirewall_20201112.DescribeLoggingConfiguration' \
  -d '{
    "FirewallArn": {},
    "FirewallName": {}
  }'
```

`POST /#X-Amz-Target=NetworkFirewall_20201112.DescribeLoggingConfiguration`

Returns the logging configuration for the specified firewall. 

> Body parameter

```json
{
  "FirewallArn": {},
  "FirewallName": {}
}
```

<h3 id="describeloggingconfiguration-parameters">Parameters</h3>

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
|body|body|[DescribeLoggingConfigurationRequest](#schemadescribeloggingconfigurationrequest)|true|none|
|» FirewallArn|body|object|false|none|
|» FirewallName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|NetworkFirewall_20201112.DescribeLoggingConfiguration|

> Example responses

> 200 Response

```json
{
  "FirewallArn": {},
  "LoggingConfiguration": {
    "LogDestinationConfigs": {}
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

<h3 id="describeloggingconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeLoggingConfigurationResponse](#schemadescribeloggingconfigurationresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeResourcePolicy

<a id="opIdDescribeResourcePolicy"></a>

> Code samples

```bash
curl 'https://network-firewall.us-east-1.amazonaws.com/#X-Amz-Target=NetworkFirewall_20201112.DescribeResourcePolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: NetworkFirewall_20201112.DescribeResourcePolicy' \
  -d '{
    "ResourceArn": {}
  }'
```

`POST /#X-Amz-Target=NetworkFirewall_20201112.DescribeResourcePolicy`

Retrieves a resource policy that you created in a <a>PutResourcePolicy</a> request. 

> Body parameter

```json
{
  "ResourceArn": {}
}
```

<h3 id="describeresourcepolicy-parameters">Parameters</h3>

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
|body|body|[DescribeResourcePolicyRequest](#schemadescriberesourcepolicyrequest)|true|none|
|» ResourceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|NetworkFirewall_20201112.DescribeResourcePolicy|

> Example responses

> 200 Response

```json
{
  "Policy": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="describeresourcepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeResourcePolicyResponse](#schemadescriberesourcepolicyresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeRuleGroup

<a id="opIdDescribeRuleGroup"></a>

> Code samples

```bash
curl 'https://network-firewall.us-east-1.amazonaws.com/#X-Amz-Target=NetworkFirewall_20201112.DescribeRuleGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: NetworkFirewall_20201112.DescribeRuleGroup' \
  -d '{
    "RuleGroupName": {},
    "RuleGroupArn": {},
    "Type": {}
  }'
```

`POST /#X-Amz-Target=NetworkFirewall_20201112.DescribeRuleGroup`

Returns the data objects for the specified rule group. 

> Body parameter

```json
{
  "RuleGroupName": {},
  "RuleGroupArn": {},
  "Type": {}
}
```

<h3 id="describerulegroup-parameters">Parameters</h3>

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
|body|body|[DescribeRuleGroupRequest](#schemadescriberulegrouprequest)|true|none|
|» RuleGroupName|body|object|false|none|
|» RuleGroupArn|body|object|false|none|
|» Type|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|NetworkFirewall_20201112.DescribeRuleGroup|

> Example responses

> 200 Response

```json
{
  "UpdateToken": {},
  "RuleGroup": {
    "RuleVariables": {
      "IPSets": {
        "property1": {
          "Definition": {}
        },
        "property2": {
          "Definition": {}
        }
      },
      "PortSets": {
        "property1": {
          "Definition": {}
        },
        "property2": {
          "Definition": {}
        }
      }
    },
    "ReferenceSets": {
      "IPSetReferences": {
        "property1": {
          "ReferenceArn": {}
        },
        "property2": {
          "ReferenceArn": {}
        }
      }
    },
    "RulesSource": {
      "RulesString": {},
      "RulesSourceList": {
        "Targets": {},
        "TargetTypes": {},
        "GeneratedRulesType": {}
      },
      "StatefulRules": {},
      "StatelessRulesAndCustomActions": {
        "StatelessRules": {},
        "CustomActions": {}
      }
    },
    "StatefulRuleOptions": {
      "RuleOrder": {}
    }
  },
  "RuleGroupResponse": {
    "RuleGroupArn": {},
    "RuleGroupName": {},
    "RuleGroupId": {},
    "Description": {},
    "Type": {},
    "Capacity": {},
    "RuleGroupStatus": {},
    "Tags": {},
    "ConsumedCapacity": {},
    "NumberOfAssociations": {},
    "EncryptionConfiguration": {
      "KeyId": {},
      "Type": {}
    },
    "SourceMetadata": {
      "SourceArn": {},
      "SourceUpdateToken": {}
    },
    "SnsTopic": {},
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

<h3 id="describerulegroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeRuleGroupResponse](#schemadescriberulegroupresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeRuleGroupMetadata

<a id="opIdDescribeRuleGroupMetadata"></a>

> Code samples

```bash
curl 'https://network-firewall.us-east-1.amazonaws.com/#X-Amz-Target=NetworkFirewall_20201112.DescribeRuleGroupMetadata' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: NetworkFirewall_20201112.DescribeRuleGroupMetadata' \
  -d '{
    "RuleGroupName": {},
    "RuleGroupArn": {},
    "Type": {}
  }'
```

`POST /#X-Amz-Target=NetworkFirewall_20201112.DescribeRuleGroupMetadata`

High-level information about a rule group, returned by operations like create and describe. You can use the information provided in the metadata to retrieve and manage a rule group. You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>. 

> Body parameter

```json
{
  "RuleGroupName": {},
  "RuleGroupArn": {},
  "Type": {}
}
```

<h3 id="describerulegroupmetadata-parameters">Parameters</h3>

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
|body|body|[DescribeRuleGroupMetadataRequest](#schemadescriberulegroupmetadatarequest)|true|none|
|» RuleGroupName|body|object|false|none|
|» RuleGroupArn|body|object|false|none|
|» Type|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|NetworkFirewall_20201112.DescribeRuleGroupMetadata|

> Example responses

> 200 Response

```json
{
  "RuleGroupArn": {},
  "RuleGroupName": {},
  "Description": {},
  "Type": {},
  "Capacity": {},
  "StatefulRuleOptions": {
    "RuleOrder": {}
  },
  "LastModifiedTime": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="describerulegroupmetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeRuleGroupMetadataResponse](#schemadescriberulegroupmetadataresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeTLSInspectionConfiguration

<a id="opIdDescribeTLSInspectionConfiguration"></a>

> Code samples

```bash
curl 'https://network-firewall.us-east-1.amazonaws.com/#X-Amz-Target=NetworkFirewall_20201112.DescribeTLSInspectionConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: NetworkFirewall_20201112.DescribeTLSInspectionConfiguration' \
  -d '{
    "TLSInspectionConfigurationArn": {},
    "TLSInspectionConfigurationName": {}
  }'
```

`POST /#X-Amz-Target=NetworkFirewall_20201112.DescribeTLSInspectionConfiguration`

Returns the data objects for the specified TLS inspection configuration.

> Body parameter

```json
{
  "TLSInspectionConfigurationArn": {},
  "TLSInspectionConfigurationName": {}
}
```

<h3 id="describetlsinspectionconfiguration-parameters">Parameters</h3>

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
|body|body|[DescribeTLSInspectionConfigurationRequest](#schemadescribetlsinspectionconfigurationrequest)|true|none|
|» TLSInspectionConfigurationArn|body|object|false|none|
|» TLSInspectionConfigurationName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|NetworkFirewall_20201112.DescribeTLSInspectionConfiguration|

> Example responses

> 200 Response

```json
{
  "UpdateToken": {},
  "TLSInspectionConfiguration": {
    "ServerCertificateConfigurations": {}
  },
  "TLSInspectionConfigurationResponse": {
    "TLSInspectionConfigurationArn": {},
    "TLSInspectionConfigurationName": {},
    "TLSInspectionConfigurationId": {},
    "TLSInspectionConfigurationStatus": {},
    "Description": {},
    "Tags": {},
    "LastModifiedTime": {},
    "NumberOfAssociations": {},
    "EncryptionConfiguration": {
      "KeyId": {},
      "Type": {}
    },
    "Certificates": {}
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

<h3 id="describetlsinspectionconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTLSInspectionConfigurationResponse](#schemadescribetlsinspectionconfigurationresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateSubnets

<a id="opIdDisassociateSubnets"></a>

> Code samples

```bash
curl 'https://network-firewall.us-east-1.amazonaws.com/#X-Amz-Target=NetworkFirewall_20201112.DisassociateSubnets' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: NetworkFirewall_20201112.DisassociateSubnets' \
  -d '{
    "UpdateToken": {},
    "FirewallArn": {},
    "FirewallName": {},
    "SubnetIds": {}
  }'
```

`POST /#X-Amz-Target=NetworkFirewall_20201112.DisassociateSubnets`

Removes the specified subnet associations from the firewall. This removes the firewall endpoints from the subnets and removes any network filtering protections that the endpoints were providing. 

> Body parameter

```json
{
  "UpdateToken": {},
  "FirewallArn": {},
  "FirewallName": {},
  "SubnetIds": {}
}
```

<h3 id="disassociatesubnets-parameters">Parameters</h3>

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
|body|body|[DisassociateSubnetsRequest](#schemadisassociatesubnetsrequest)|true|none|
|» UpdateToken|body|object|false|none|
|» FirewallArn|body|object|false|none|
|» FirewallName|body|object|false|none|
|» SubnetIds|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|NetworkFirewall_20201112.DisassociateSubnets|

> Example responses

> 200 Response

```json
{
  "FirewallArn": {},
  "FirewallName": {},
  "SubnetMappings": {},
  "UpdateToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="disassociatesubnets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateSubnetsResponse](#schemadisassociatesubnetsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InvalidTokenException|[InvalidTokenException](#schemainvalidtokenexception)|
|485|485|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListFirewallPolicies

<a id="opIdListFirewallPolicies"></a>

> Code samples

```bash
curl 'https://network-firewall.us-east-1.amazonaws.com/#X-Amz-Target=NetworkFirewall_20201112.ListFirewallPolicies' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: NetworkFirewall_20201112.ListFirewallPolicies' \
  -d '{
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=NetworkFirewall_20201112.ListFirewallPolicies`

Retrieves the metadata for the firewall policies that you have defined. Depending on your setting for max results and the number of firewall policies, a single call might not return the full list. 

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listfirewallpolicies-parameters">Parameters</h3>

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
|body|body|[ListFirewallPoliciesRequest](#schemalistfirewallpoliciesrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|NetworkFirewall_20201112.ListFirewallPolicies|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "FirewallPolicies": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="listfirewallpolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListFirewallPoliciesResponse](#schemalistfirewallpoliciesresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListFirewalls

<a id="opIdListFirewalls"></a>

> Code samples

```bash
curl 'https://network-firewall.us-east-1.amazonaws.com/#X-Amz-Target=NetworkFirewall_20201112.ListFirewalls' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: NetworkFirewall_20201112.ListFirewalls' \
  -d '{
    "NextToken": {},
    "VpcIds": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=NetworkFirewall_20201112.ListFirewalls`

<p>Retrieves the metadata for the firewalls that you have defined. If you provide VPC identifiers in your request, this returns only the firewalls for those VPCs.</p> <p>Depending on your setting for max results and the number of firewalls, a single call might not return the full list. </p>

> Body parameter

```json
{
  "NextToken": {},
  "VpcIds": {},
  "MaxResults": {}
}
```

<h3 id="listfirewalls-parameters">Parameters</h3>

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
|body|body|[ListFirewallsRequest](#schemalistfirewallsrequest)|true|none|
|» NextToken|body|object|false|none|
|» VpcIds|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|NetworkFirewall_20201112.ListFirewalls|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "Firewalls": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="listfirewalls-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListFirewallsResponse](#schemalistfirewallsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRuleGroups

<a id="opIdListRuleGroups"></a>

> Code samples

```bash
curl 'https://network-firewall.us-east-1.amazonaws.com/#X-Amz-Target=NetworkFirewall_20201112.ListRuleGroups' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: NetworkFirewall_20201112.ListRuleGroups' \
  -d '{
    "NextToken": {},
    "MaxResults": {},
    "Scope": {},
    "ManagedType": {},
    "Type": {}
  }'
```

`POST /#X-Amz-Target=NetworkFirewall_20201112.ListRuleGroups`

Retrieves the metadata for the rule groups that you have defined. Depending on your setting for max results and the number of rule groups, a single call might not return the full list. 

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Scope": {},
  "ManagedType": {},
  "Type": {}
}
```

<h3 id="listrulegroups-parameters">Parameters</h3>

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
|body|body|[ListRuleGroupsRequest](#schemalistrulegroupsrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» Scope|body|object|false|none|
|» ManagedType|body|object|false|none|
|» Type|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|NetworkFirewall_20201112.ListRuleGroups|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "RuleGroups": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="listrulegroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRuleGroupsResponse](#schemalistrulegroupsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTLSInspectionConfigurations

<a id="opIdListTLSInspectionConfigurations"></a>

> Code samples

```bash
curl 'https://network-firewall.us-east-1.amazonaws.com/#X-Amz-Target=NetworkFirewall_20201112.ListTLSInspectionConfigurations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: NetworkFirewall_20201112.ListTLSInspectionConfigurations' \
  -d '{
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=NetworkFirewall_20201112.ListTLSInspectionConfigurations`

Retrieves the metadata for the TLS inspection configurations that you have defined. Depending on your setting for max results and the number of TLS inspection configurations, a single call might not return the full list.

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listtlsinspectionconfigurations-parameters">Parameters</h3>

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
|body|body|[ListTLSInspectionConfigurationsRequest](#schemalisttlsinspectionconfigurationsrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|NetworkFirewall_20201112.ListTLSInspectionConfigurations|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "TLSInspectionConfigurations": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="listtlsinspectionconfigurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTLSInspectionConfigurationsResponse](#schemalisttlsinspectionconfigurationsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://network-firewall.us-east-1.amazonaws.com/#X-Amz-Target=NetworkFirewall_20201112.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: NetworkFirewall_20201112.ListTagsForResource' \
  -d '{
    "NextToken": {},
    "MaxResults": {},
    "ResourceArn": {}
  }'
```

`POST /#X-Amz-Target=NetworkFirewall_20201112.ListTagsForResource`

<p>Retrieves the tags associated with the specified resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.</p> <p>You can tag the Amazon Web Services resources that you manage through Network Firewall: firewalls, firewall policies, and rule groups. </p>

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {},
  "ResourceArn": {}
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
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» ResourceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|NetworkFirewall_20201112.ListTagsForResource|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
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

> 483 Response

```json
null
```

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutResourcePolicy

<a id="opIdPutResourcePolicy"></a>

> Code samples

```bash
curl 'https://network-firewall.us-east-1.amazonaws.com/#X-Amz-Target=NetworkFirewall_20201112.PutResourcePolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: NetworkFirewall_20201112.PutResourcePolicy' \
  -d '{
    "ResourceArn": {},
    "Policy": {}
  }'
```

`POST /#X-Amz-Target=NetworkFirewall_20201112.PutResourcePolicy`

<p>Creates or updates an IAM policy for your rule group or firewall policy. Use this to share rule groups and firewall policies between accounts. This operation works in conjunction with the Amazon Web Services Resource Access Manager (RAM) service to manage resource sharing for Network Firewall. </p> <p>Use this operation to create or update a resource policy for your rule group or firewall policy. In the policy, you specify the accounts that you want to share the resource with and the operations that you want the accounts to be able to perform. </p> <p>When you add an account in the resource policy, you then run the following Resource Access Manager (RAM) operations to access and accept the shared rule group or firewall policy. </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_GetResourceShareInvitations.html">GetResourceShareInvitations</a> - Returns the Amazon Resource Names (ARNs) of the resource share invitations. </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_AcceptResourceShareInvitation.html">AcceptResourceShareInvitation</a> - Accepts the share invitation for a specified resource share. </p> </li> </ul> <p>For additional information about resource sharing using RAM, see <a href="https://docs.aws.amazon.com/ram/latest/userguide/what-is.html">Resource Access Manager User Guide</a>.</p>

> Body parameter

```json
{
  "ResourceArn": {},
  "Policy": {}
}
```

<h3 id="putresourcepolicy-parameters">Parameters</h3>

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
|body|body|[PutResourcePolicyRequest](#schemaputresourcepolicyrequest)|true|none|
|» ResourceArn|body|object|true|none|
|» Policy|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|NetworkFirewall_20201112.PutResourcePolicy|

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

<h3 id="putresourcepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutResourcePolicyResponse](#schemaputresourcepolicyresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InvalidResourcePolicyException|[InvalidResourcePolicyException](#schemainvalidresourcepolicyexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://network-firewall.us-east-1.amazonaws.com/#X-Amz-Target=NetworkFirewall_20201112.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: NetworkFirewall_20201112.TagResource' \
  -d '{
    "ResourceArn": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=NetworkFirewall_20201112.TagResource`

<p>Adds the specified tags to the specified resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.</p> <p>You can tag the Amazon Web Services resources that you manage through Network Firewall: firewalls, firewall policies, and rule groups. </p>

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
|X-Amz-Target|NetworkFirewall_20201112.TagResource|

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
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://network-firewall.us-east-1.amazonaws.com/#X-Amz-Target=NetworkFirewall_20201112.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: NetworkFirewall_20201112.UntagResource' \
  -d '{
    "ResourceArn": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=NetworkFirewall_20201112.UntagResource`

<p>Removes the tags with the specified keys from the specified resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.</p> <p>You can manage tags for the Amazon Web Services resources that you manage through Network Firewall: firewalls, firewall policies, and rule groups. </p>

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
|X-Amz-Target|NetworkFirewall_20201112.UntagResource|

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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateFirewallDeleteProtection

<a id="opIdUpdateFirewallDeleteProtection"></a>

> Code samples

```bash
curl 'https://network-firewall.us-east-1.amazonaws.com/#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallDeleteProtection' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: NetworkFirewall_20201112.UpdateFirewallDeleteProtection' \
  -d '{
    "UpdateToken": {},
    "FirewallArn": {},
    "FirewallName": {},
    "DeleteProtection": {}
  }'
```

`POST /#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallDeleteProtection`

Modifies the flag, <code>DeleteProtection</code>, which indicates whether it is possible to delete the firewall. If the flag is set to <code>TRUE</code>, the firewall is protected against deletion. This setting helps protect against accidentally deleting a firewall that's in use. 

> Body parameter

```json
{
  "UpdateToken": {},
  "FirewallArn": {},
  "FirewallName": {},
  "DeleteProtection": {}
}
```

<h3 id="updatefirewalldeleteprotection-parameters">Parameters</h3>

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
|body|body|[UpdateFirewallDeleteProtectionRequest](#schemaupdatefirewalldeleteprotectionrequest)|true|none|
|» UpdateToken|body|object|false|none|
|» FirewallArn|body|object|false|none|
|» FirewallName|body|object|false|none|
|» DeleteProtection|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|NetworkFirewall_20201112.UpdateFirewallDeleteProtection|

> Example responses

> 200 Response

```json
{
  "FirewallArn": {},
  "FirewallName": {},
  "DeleteProtection": {},
  "UpdateToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="updatefirewalldeleteprotection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateFirewallDeleteProtectionResponse](#schemaupdatefirewalldeleteprotectionresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InvalidTokenException|[InvalidTokenException](#schemainvalidtokenexception)|
|485|485|ResourceOwnerCheckException|[ResourceOwnerCheckException](#schemaresourceownercheckexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateFirewallDescription

<a id="opIdUpdateFirewallDescription"></a>

> Code samples

```bash
curl 'https://network-firewall.us-east-1.amazonaws.com/#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallDescription' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: NetworkFirewall_20201112.UpdateFirewallDescription' \
  -d '{
    "UpdateToken": {},
    "FirewallArn": {},
    "FirewallName": {},
    "Description": {}
  }'
```

`POST /#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallDescription`

Modifies the description for the specified firewall. Use the description to help you identify the firewall when you're working with it. 

> Body parameter

```json
{
  "UpdateToken": {},
  "FirewallArn": {},
  "FirewallName": {},
  "Description": {}
}
```

<h3 id="updatefirewalldescription-parameters">Parameters</h3>

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
|body|body|[UpdateFirewallDescriptionRequest](#schemaupdatefirewalldescriptionrequest)|true|none|
|» UpdateToken|body|object|false|none|
|» FirewallArn|body|object|false|none|
|» FirewallName|body|object|false|none|
|» Description|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|NetworkFirewall_20201112.UpdateFirewallDescription|

> Example responses

> 200 Response

```json
{
  "FirewallArn": {},
  "FirewallName": {},
  "Description": {},
  "UpdateToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="updatefirewalldescription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateFirewallDescriptionResponse](#schemaupdatefirewalldescriptionresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InvalidTokenException|[InvalidTokenException](#schemainvalidtokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateFirewallEncryptionConfiguration

<a id="opIdUpdateFirewallEncryptionConfiguration"></a>

> Code samples

```bash
curl 'https://network-firewall.us-east-1.amazonaws.com/#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallEncryptionConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: NetworkFirewall_20201112.UpdateFirewallEncryptionConfiguration' \
  -d '{
    "UpdateToken": {},
    "FirewallArn": {},
    "FirewallName": {},
    "EncryptionConfiguration": {
      "KeyId": {},
      "Type": {}
    }
  }'
```

`POST /#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallEncryptionConfiguration`

A complex type that contains settings for encryption of your firewall resources.

> Body parameter

```json
{
  "UpdateToken": {},
  "FirewallArn": {},
  "FirewallName": {},
  "EncryptionConfiguration": {
    "KeyId": {},
    "Type": {}
  }
}
```

<h3 id="updatefirewallencryptionconfiguration-parameters">Parameters</h3>

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
|body|body|[UpdateFirewallEncryptionConfigurationRequest](#schemaupdatefirewallencryptionconfigurationrequest)|true|none|
|» UpdateToken|body|object|false|none|
|» FirewallArn|body|object|false|none|
|» FirewallName|body|object|false|none|
|» EncryptionConfiguration|body|[EncryptionConfiguration](#schemaencryptionconfiguration)|false|A complex type that contains optional Amazon Web Services Key Management Service (KMS) encryption settings for your Network Firewall resources. Your data is encrypted by default with an Amazon Web Services owned key that Amazon Web Services owns and manages for you. You can use either the Amazon Web Services owned key, or provide your own customer managed key. To learn more about KMS encryption of your Network Firewall resources, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-encryption-at-rest.html">Encryption at rest with Amazon Web Services Key Managment Service</a> in the <i>Network Firewall Developer Guide</i>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|NetworkFirewall_20201112.UpdateFirewallEncryptionConfiguration|

> Example responses

> 200 Response

```json
{
  "FirewallArn": {},
  "FirewallName": {},
  "UpdateToken": {},
  "EncryptionConfiguration": {
    "KeyId": {},
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

<h3 id="updatefirewallencryptionconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateFirewallEncryptionConfigurationResponse](#schemaupdatefirewallencryptionconfigurationresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InvalidTokenException|[InvalidTokenException](#schemainvalidtokenexception)|
|485|485|ResourceOwnerCheckException|[ResourceOwnerCheckException](#schemaresourceownercheckexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateFirewallPolicy

<a id="opIdUpdateFirewallPolicy"></a>

> Code samples

```bash
curl 'https://network-firewall.us-east-1.amazonaws.com/#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: NetworkFirewall_20201112.UpdateFirewallPolicy' \
  -d '{
    "UpdateToken": {},
    "FirewallPolicyArn": {},
    "FirewallPolicyName": {},
    "FirewallPolicy": {
      "StatelessRuleGroupReferences": {},
      "StatelessDefaultActions": {},
      "StatelessFragmentDefaultActions": {},
      "StatelessCustomActions": {},
      "StatefulRuleGroupReferences": {},
      "StatefulDefaultActions": {},
      "StatefulEngineOptions": {
        "RuleOrder": {},
        "StreamExceptionPolicy": {}
      },
      "TLSInspectionConfigurationArn": {}
    },
    "Description": {},
    "DryRun": {},
    "EncryptionConfiguration": {
      "KeyId": {},
      "Type": {}
    }
  }'
```

`POST /#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallPolicy`

Updates the properties of the specified firewall policy.

> Body parameter

```json
{
  "UpdateToken": {},
  "FirewallPolicyArn": {},
  "FirewallPolicyName": {},
  "FirewallPolicy": {
    "StatelessRuleGroupReferences": {},
    "StatelessDefaultActions": {},
    "StatelessFragmentDefaultActions": {},
    "StatelessCustomActions": {},
    "StatefulRuleGroupReferences": {},
    "StatefulDefaultActions": {},
    "StatefulEngineOptions": {
      "RuleOrder": {},
      "StreamExceptionPolicy": {}
    },
    "TLSInspectionConfigurationArn": {}
  },
  "Description": {},
  "DryRun": {},
  "EncryptionConfiguration": {
    "KeyId": {},
    "Type": {}
  }
}
```

<h3 id="updatefirewallpolicy-parameters">Parameters</h3>

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
|body|body|[UpdateFirewallPolicyRequest](#schemaupdatefirewallpolicyrequest)|true|none|
|» UpdateToken|body|object|true|none|
|» FirewallPolicyArn|body|object|false|none|
|» FirewallPolicyName|body|object|false|none|
|» FirewallPolicy|body|object|true|none|
|» » StatelessRuleGroupReferences|body|object|false|none|
|» » StatelessDefaultActions|body|object|true|none|
|» » StatelessFragmentDefaultActions|body|object|true|none|
|» » StatelessCustomActions|body|object|false|none|
|» » StatefulRuleGroupReferences|body|object|false|none|
|» » StatefulDefaultActions|body|object|false|none|
|» » StatefulEngineOptions|body|object|false|none|
|» » » RuleOrder|body|object|false|none|
|» » » StreamExceptionPolicy|body|object|false|none|
|» » TLSInspectionConfigurationArn|body|object|false|none|
|» Description|body|object|false|none|
|» DryRun|body|object|false|none|
|» EncryptionConfiguration|body|object|false|none|
|» » KeyId|body|object|false|none|
|» » Type|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|NetworkFirewall_20201112.UpdateFirewallPolicy|

> Example responses

> 200 Response

```json
{
  "UpdateToken": {},
  "FirewallPolicyResponse": {
    "FirewallPolicyName": {},
    "FirewallPolicyArn": {},
    "FirewallPolicyId": {},
    "Description": {},
    "FirewallPolicyStatus": {},
    "Tags": {},
    "ConsumedStatelessRuleCapacity": {},
    "ConsumedStatefulRuleCapacity": {},
    "NumberOfAssociations": {},
    "EncryptionConfiguration": {
      "KeyId": {},
      "Type": {}
    },
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

> 484 Response

```json
null
```

<h3 id="updatefirewallpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateFirewallPolicyResponse](#schemaupdatefirewallpolicyresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServerError|[InternalServerError](#schemainternalservererror)|
|484|484|InvalidTokenException|[InvalidTokenException](#schemainvalidtokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateFirewallPolicyChangeProtection

<a id="opIdUpdateFirewallPolicyChangeProtection"></a>

> Code samples

```bash
curl 'https://network-firewall.us-east-1.amazonaws.com/#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallPolicyChangeProtection' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: NetworkFirewall_20201112.UpdateFirewallPolicyChangeProtection' \
  -d '{
    "UpdateToken": {},
    "FirewallArn": {},
    "FirewallName": {},
    "FirewallPolicyChangeProtection": {}
  }'
```

`POST /#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallPolicyChangeProtection`

Modifies the flag, <code>ChangeProtection</code>, which indicates whether it is possible to change the firewall. If the flag is set to <code>TRUE</code>, the firewall is protected from changes. This setting helps protect against accidentally changing a firewall that's in use.

> Body parameter

```json
{
  "UpdateToken": {},
  "FirewallArn": {},
  "FirewallName": {},
  "FirewallPolicyChangeProtection": {}
}
```

<h3 id="updatefirewallpolicychangeprotection-parameters">Parameters</h3>

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
|body|body|[UpdateFirewallPolicyChangeProtectionRequest](#schemaupdatefirewallpolicychangeprotectionrequest)|true|none|
|» UpdateToken|body|object|false|none|
|» FirewallArn|body|object|false|none|
|» FirewallName|body|object|false|none|
|» FirewallPolicyChangeProtection|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|NetworkFirewall_20201112.UpdateFirewallPolicyChangeProtection|

> Example responses

> 200 Response

```json
{
  "UpdateToken": {},
  "FirewallArn": {},
  "FirewallName": {},
  "FirewallPolicyChangeProtection": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="updatefirewallpolicychangeprotection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateFirewallPolicyChangeProtectionResponse](#schemaupdatefirewallpolicychangeprotectionresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InvalidTokenException|[InvalidTokenException](#schemainvalidtokenexception)|
|485|485|ResourceOwnerCheckException|[ResourceOwnerCheckException](#schemaresourceownercheckexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateLoggingConfiguration

<a id="opIdUpdateLoggingConfiguration"></a>

> Code samples

```bash
curl 'https://network-firewall.us-east-1.amazonaws.com/#X-Amz-Target=NetworkFirewall_20201112.UpdateLoggingConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: NetworkFirewall_20201112.UpdateLoggingConfiguration' \
  -d '{
    "FirewallArn": {},
    "FirewallName": {},
    "LoggingConfiguration": {
      "LogDestinationConfigs": {}
    }
  }'
```

`POST /#X-Amz-Target=NetworkFirewall_20201112.UpdateLoggingConfiguration`

<p>Sets the logging configuration for the specified firewall. </p> <p>To change the logging configuration, retrieve the <a>LoggingConfiguration</a> by calling <a>DescribeLoggingConfiguration</a>, then change it and provide the modified object to this update call. You must change the logging configuration one <a>LogDestinationConfig</a> at a time inside the retrieved <a>LoggingConfiguration</a> object. </p> <p>You can perform only one of the following actions in any call to <code>UpdateLoggingConfiguration</code>: </p> <ul> <li> <p>Create a new log destination object by adding a single <code>LogDestinationConfig</code> array element to <code>LogDestinationConfigs</code>.</p> </li> <li> <p>Delete a log destination object by removing a single <code>LogDestinationConfig</code> array element from <code>LogDestinationConfigs</code>.</p> </li> <li> <p>Change the <code>LogDestination</code> setting in a single <code>LogDestinationConfig</code> array element.</p> </li> </ul> <p>You can't change the <code>LogDestinationType</code> or <code>LogType</code> in a <code>LogDestinationConfig</code>. To change these settings, delete the existing <code>LogDestinationConfig</code> object and create a new one, using two separate calls to this update operation.</p>

> Body parameter

```json
{
  "FirewallArn": {},
  "FirewallName": {},
  "LoggingConfiguration": {
    "LogDestinationConfigs": {}
  }
}
```

<h3 id="updateloggingconfiguration-parameters">Parameters</h3>

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
|body|body|[UpdateLoggingConfigurationRequest](#schemaupdateloggingconfigurationrequest)|true|none|
|» FirewallArn|body|object|false|none|
|» FirewallName|body|object|false|none|
|» LoggingConfiguration|body|object|false|none|
|» » LogDestinationConfigs|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|NetworkFirewall_20201112.UpdateLoggingConfiguration|

> Example responses

> 200 Response

```json
{
  "FirewallArn": {},
  "FirewallName": {},
  "LoggingConfiguration": {
    "LogDestinationConfigs": {}
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

<h3 id="updateloggingconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateLoggingConfigurationResponse](#schemaupdateloggingconfigurationresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InvalidTokenException|[InvalidTokenException](#schemainvalidtokenexception)|
|485|485|LogDestinationPermissionException|[LogDestinationPermissionException](#schemalogdestinationpermissionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateRuleGroup

<a id="opIdUpdateRuleGroup"></a>

> Code samples

```bash
curl 'https://network-firewall.us-east-1.amazonaws.com/#X-Amz-Target=NetworkFirewall_20201112.UpdateRuleGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: NetworkFirewall_20201112.UpdateRuleGroup' \
  -d '{
    "UpdateToken": {},
    "RuleGroupArn": {},
    "RuleGroupName": {},
    "RuleGroup": {
      "RuleVariables": {
        "IPSets": {
          "property1": {
            "Definition": {}
          },
          "property2": {
            "Definition": {}
          }
        },
        "PortSets": {
          "property1": {
            "Definition": {}
          },
          "property2": {
            "Definition": {}
          }
        }
      },
      "ReferenceSets": {
        "IPSetReferences": {
          "property1": {
            "ReferenceArn": {}
          },
          "property2": {
            "ReferenceArn": {}
          }
        }
      },
      "RulesSource": {
        "RulesString": {},
        "RulesSourceList": {
          "Targets": {},
          "TargetTypes": {},
          "GeneratedRulesType": {}
        },
        "StatefulRules": {},
        "StatelessRulesAndCustomActions": {
          "StatelessRules": {},
          "CustomActions": {}
        }
      },
      "StatefulRuleOptions": {
        "RuleOrder": {}
      }
    },
    "Rules": {},
    "Type": {},
    "Description": {},
    "DryRun": {},
    "EncryptionConfiguration": {
      "KeyId": {},
      "Type": {}
    },
    "SourceMetadata": {
      "SourceArn": {},
      "SourceUpdateToken": {}
    }
  }'
```

`POST /#X-Amz-Target=NetworkFirewall_20201112.UpdateRuleGroup`

<p>Updates the rule settings for the specified rule group. You use a rule group by reference in one or more firewall policies. When you modify a rule group, you modify all firewall policies that use the rule group. </p> <p>To update a rule group, first call <a>DescribeRuleGroup</a> to retrieve the current <a>RuleGroup</a> object, update the object as needed, and then provide the updated object to this call. </p>

> Body parameter

```json
{
  "UpdateToken": {},
  "RuleGroupArn": {},
  "RuleGroupName": {},
  "RuleGroup": {
    "RuleVariables": {
      "IPSets": {
        "property1": {
          "Definition": {}
        },
        "property2": {
          "Definition": {}
        }
      },
      "PortSets": {
        "property1": {
          "Definition": {}
        },
        "property2": {
          "Definition": {}
        }
      }
    },
    "ReferenceSets": {
      "IPSetReferences": {
        "property1": {
          "ReferenceArn": {}
        },
        "property2": {
          "ReferenceArn": {}
        }
      }
    },
    "RulesSource": {
      "RulesString": {},
      "RulesSourceList": {
        "Targets": {},
        "TargetTypes": {},
        "GeneratedRulesType": {}
      },
      "StatefulRules": {},
      "StatelessRulesAndCustomActions": {
        "StatelessRules": {},
        "CustomActions": {}
      }
    },
    "StatefulRuleOptions": {
      "RuleOrder": {}
    }
  },
  "Rules": {},
  "Type": {},
  "Description": {},
  "DryRun": {},
  "EncryptionConfiguration": {
    "KeyId": {},
    "Type": {}
  },
  "SourceMetadata": {
    "SourceArn": {},
    "SourceUpdateToken": {}
  }
}
```

<h3 id="updaterulegroup-parameters">Parameters</h3>

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
|body|body|[UpdateRuleGroupRequest](#schemaupdaterulegrouprequest)|true|none|
|» UpdateToken|body|object|true|none|
|» RuleGroupArn|body|object|false|none|
|» RuleGroupName|body|object|false|none|
|» RuleGroup|body|object|false|none|
|» » RuleVariables|body|object|false|none|
|» » » IPSets|body|object|false|none|
|» » » » **additionalProperties**|body|[IPSet](#schemaipset)|false|A list of IP addresses and address ranges, in CIDR notation. This is part of a <a>RuleVariables</a>. |
|» » » PortSets|body|object|false|none|
|» » » » **additionalProperties**|body|[PortSet](#schemaportset)|false|A set of port ranges for use in the rules in a rule group. |
|» » ReferenceSets|body|object|false|none|
|» » » IPSetReferences|body|object|false|none|
|» » » » **additionalProperties**|body|[IPSetReference](#schemaipsetreference)|false|<p>Configures one or more IP set references for a Suricata-compatible rule group. This is used in <a>CreateRuleGroup</a> or <a>UpdateRuleGroup</a>. An IP set reference is a rule variable that references resources that you create and manage in another Amazon Web Services service, such as an Amazon VPC prefix list. Network Firewall IP set references enable you to dynamically update the contents of your rules. When you create, update, or delete the resource you are referencing in your rule, Network Firewall automatically updates the rule's content with the changes. For more information about IP set references in Network Firewall, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/rule-groups-ip-set-references">Using IP set references</a> in the <i>Network Firewall Developer Guide</i>.</p> <p> Network Firewall currently supports <a href="https://docs.aws.amazon.com/vpc/latest/userguide/managed-prefix-lists.html">Amazon VPC prefix lists</a> and <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/rule-groups-ip-set-references.html#rule-groups-referencing-resource-groups">resource groups</a> in IP set references. </p>|
|» » RulesSource|body|object|true|none|
|» » » RulesString|body|object|false|none|
|» » » RulesSourceList|body|object|false|none|
|» » » » Targets|body|object|true|none|
|» » » » TargetTypes|body|object|true|none|
|» » » » GeneratedRulesType|body|object|true|none|
|» » » StatefulRules|body|object|false|none|
|» » » StatelessRulesAndCustomActions|body|object|false|none|
|» » » » StatelessRules|body|object|true|none|
|» » » » CustomActions|body|object|false|none|
|» » StatefulRuleOptions|body|object|false|none|
|» » » RuleOrder|body|object|false|none|
|» Rules|body|object|false|none|
|» Type|body|object|false|none|
|» Description|body|object|false|none|
|» DryRun|body|object|false|none|
|» EncryptionConfiguration|body|object|false|none|
|» » KeyId|body|object|false|none|
|» » Type|body|object|true|none|
|» SourceMetadata|body|object|false|none|
|» » SourceArn|body|object|false|none|
|» » SourceUpdateToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|NetworkFirewall_20201112.UpdateRuleGroup|

> Example responses

> 200 Response

```json
{
  "UpdateToken": {},
  "RuleGroupResponse": {
    "RuleGroupArn": {},
    "RuleGroupName": {},
    "RuleGroupId": {},
    "Description": {},
    "Type": {},
    "Capacity": {},
    "RuleGroupStatus": {},
    "Tags": {},
    "ConsumedCapacity": {},
    "NumberOfAssociations": {},
    "EncryptionConfiguration": {
      "KeyId": {},
      "Type": {}
    },
    "SourceMetadata": {
      "SourceArn": {},
      "SourceUpdateToken": {}
    },
    "SnsTopic": {},
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

> 484 Response

```json
null
```

<h3 id="updaterulegroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateRuleGroupResponse](#schemaupdaterulegroupresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServerError|[InternalServerError](#schemainternalservererror)|
|484|484|InvalidTokenException|[InvalidTokenException](#schemainvalidtokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateSubnetChangeProtection

<a id="opIdUpdateSubnetChangeProtection"></a>

> Code samples

```bash
curl 'https://network-firewall.us-east-1.amazonaws.com/#X-Amz-Target=NetworkFirewall_20201112.UpdateSubnetChangeProtection' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: NetworkFirewall_20201112.UpdateSubnetChangeProtection' \
  -d '{
    "UpdateToken": {},
    "FirewallArn": {},
    "FirewallName": {},
    "SubnetChangeProtection": {}
  }'
```

`POST /#X-Amz-Target=NetworkFirewall_20201112.UpdateSubnetChangeProtection`

<p/>

> Body parameter

```json
{
  "UpdateToken": {},
  "FirewallArn": {},
  "FirewallName": {},
  "SubnetChangeProtection": {}
}
```

<h3 id="updatesubnetchangeprotection-parameters">Parameters</h3>

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
|body|body|[UpdateSubnetChangeProtectionRequest](#schemaupdatesubnetchangeprotectionrequest)|true|none|
|» UpdateToken|body|object|false|none|
|» FirewallArn|body|object|false|none|
|» FirewallName|body|object|false|none|
|» SubnetChangeProtection|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|NetworkFirewall_20201112.UpdateSubnetChangeProtection|

> Example responses

> 200 Response

```json
{
  "UpdateToken": {},
  "FirewallArn": {},
  "FirewallName": {},
  "SubnetChangeProtection": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="updatesubnetchangeprotection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateSubnetChangeProtectionResponse](#schemaupdatesubnetchangeprotectionresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InvalidTokenException|[InvalidTokenException](#schemainvalidtokenexception)|
|485|485|ResourceOwnerCheckException|[ResourceOwnerCheckException](#schemaresourceownercheckexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateTLSInspectionConfiguration

<a id="opIdUpdateTLSInspectionConfiguration"></a>

> Code samples

```bash
curl 'https://network-firewall.us-east-1.amazonaws.com/#X-Amz-Target=NetworkFirewall_20201112.UpdateTLSInspectionConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: NetworkFirewall_20201112.UpdateTLSInspectionConfiguration' \
  -d '{
    "TLSInspectionConfigurationArn": {},
    "TLSInspectionConfigurationName": {},
    "TLSInspectionConfiguration": {
      "ServerCertificateConfigurations": {}
    },
    "Description": {},
    "EncryptionConfiguration": {
      "KeyId": {},
      "Type": {}
    },
    "UpdateToken": {}
  }'
```

`POST /#X-Amz-Target=NetworkFirewall_20201112.UpdateTLSInspectionConfiguration`

<p>Updates the TLS inspection configuration settings for the specified TLS inspection configuration. You use a TLS inspection configuration by reference in one or more firewall policies. When you modify a TLS inspection configuration, you modify all firewall policies that use the TLS inspection configuration. </p> <p>To update a TLS inspection configuration, first call <a>DescribeTLSInspectionConfiguration</a> to retrieve the current <a>TLSInspectionConfiguration</a> object, update the object as needed, and then provide the updated object to this call. </p>

> Body parameter

```json
{
  "TLSInspectionConfigurationArn": {},
  "TLSInspectionConfigurationName": {},
  "TLSInspectionConfiguration": {
    "ServerCertificateConfigurations": {}
  },
  "Description": {},
  "EncryptionConfiguration": {
    "KeyId": {},
    "Type": {}
  },
  "UpdateToken": {}
}
```

<h3 id="updatetlsinspectionconfiguration-parameters">Parameters</h3>

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
|body|body|[UpdateTLSInspectionConfigurationRequest](#schemaupdatetlsinspectionconfigurationrequest)|true|none|
|» TLSInspectionConfigurationArn|body|object|false|none|
|» TLSInspectionConfigurationName|body|object|false|none|
|» TLSInspectionConfiguration|body|object|true|none|
|» » ServerCertificateConfigurations|body|object|false|none|
|» Description|body|object|false|none|
|» EncryptionConfiguration|body|object|false|none|
|» » KeyId|body|object|false|none|
|» » Type|body|object|true|none|
|» UpdateToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|NetworkFirewall_20201112.UpdateTLSInspectionConfiguration|

> Example responses

> 200 Response

```json
{
  "UpdateToken": {},
  "TLSInspectionConfigurationResponse": {
    "TLSInspectionConfigurationArn": {},
    "TLSInspectionConfigurationName": {},
    "TLSInspectionConfigurationId": {},
    "TLSInspectionConfigurationStatus": {},
    "Description": {},
    "Tags": {},
    "LastModifiedTime": {},
    "NumberOfAssociations": {},
    "EncryptionConfiguration": {
      "KeyId": {},
      "Type": {}
    },
    "Certificates": {}
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

<h3 id="updatetlsinspectionconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateTLSInspectionConfigurationResponse](#schemaupdatetlsinspectionconfigurationresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServerError|[InternalServerError](#schemainternalservererror)|
|484|484|InvalidTokenException|[InvalidTokenException](#schemainvalidtokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AssociateFirewallPolicyResponse">AssociateFirewallPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociatefirewallpolicyresponse"></a>
<a id="schema_AssociateFirewallPolicyResponse"></a>
<a id="tocSassociatefirewallpolicyresponse"></a>
<a id="tocsassociatefirewallpolicyresponse"></a>

```json
{
  "FirewallArn": {},
  "FirewallName": {},
  "FirewallPolicyArn": {},
  "UpdateToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallArn|object|false|none|none|
|FirewallName|object|false|none|none|
|FirewallPolicyArn|object|false|none|none|
|UpdateToken|object|false|none|none|

<h2 id="tocS_AssociateFirewallPolicyRequest">AssociateFirewallPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatefirewallpolicyrequest"></a>
<a id="schema_AssociateFirewallPolicyRequest"></a>
<a id="tocSassociatefirewallpolicyrequest"></a>
<a id="tocsassociatefirewallpolicyrequest"></a>

```json
{
  "UpdateToken": {},
  "FirewallArn": {},
  "FirewallName": {},
  "FirewallPolicyArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UpdateToken|object|false|none|none|
|FirewallArn|object|false|none|none|
|FirewallName|object|false|none|none|
|FirewallPolicyArn|object|true|none|none|

<h2 id="tocS_InvalidRequestException">InvalidRequestException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrequestexception"></a>
<a id="schema_InvalidRequestException"></a>
<a id="tocSinvalidrequestexception"></a>
<a id="tocsinvalidrequestexception"></a>

```json
null
```

<h2 id="tocS_InternalServerError">InternalServerError</h2>
<!-- backwards compatibility -->
<a id="schemainternalservererror"></a>
<a id="schema_InternalServerError"></a>
<a id="tocSinternalservererror"></a>
<a id="tocsinternalservererror"></a>

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

<h2 id="tocS_ThrottlingException">ThrottlingException</h2>
<!-- backwards compatibility -->
<a id="schemathrottlingexception"></a>
<a id="schema_ThrottlingException"></a>
<a id="tocSthrottlingexception"></a>
<a id="tocsthrottlingexception"></a>

```json
null
```

<h2 id="tocS_InvalidTokenException">InvalidTokenException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidtokenexception"></a>
<a id="schema_InvalidTokenException"></a>
<a id="tocSinvalidtokenexception"></a>
<a id="tocsinvalidtokenexception"></a>

```json
null
```

<h2 id="tocS_InvalidOperationException">InvalidOperationException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidoperationexception"></a>
<a id="schema_InvalidOperationException"></a>
<a id="tocSinvalidoperationexception"></a>
<a id="tocsinvalidoperationexception"></a>

```json
null
```

<h2 id="tocS_AssociateSubnetsResponse">AssociateSubnetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociatesubnetsresponse"></a>
<a id="schema_AssociateSubnetsResponse"></a>
<a id="tocSassociatesubnetsresponse"></a>
<a id="tocsassociatesubnetsresponse"></a>

```json
{
  "FirewallArn": {},
  "FirewallName": {},
  "SubnetMappings": {},
  "UpdateToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallArn|object|false|none|none|
|FirewallName|object|false|none|none|
|SubnetMappings|object|false|none|none|
|UpdateToken|object|false|none|none|

<h2 id="tocS_AssociateSubnetsRequest">AssociateSubnetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatesubnetsrequest"></a>
<a id="schema_AssociateSubnetsRequest"></a>
<a id="tocSassociatesubnetsrequest"></a>
<a id="tocsassociatesubnetsrequest"></a>

```json
{
  "UpdateToken": {},
  "FirewallArn": {},
  "FirewallName": {},
  "SubnetMappings": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UpdateToken|object|false|none|none|
|FirewallArn|object|false|none|none|
|FirewallName|object|false|none|none|
|SubnetMappings|object|true|none|none|

<h2 id="tocS_InsufficientCapacityException">InsufficientCapacityException</h2>
<!-- backwards compatibility -->
<a id="schemainsufficientcapacityexception"></a>
<a id="schema_InsufficientCapacityException"></a>
<a id="tocSinsufficientcapacityexception"></a>
<a id="tocsinsufficientcapacityexception"></a>

```json
null
```

<h2 id="tocS_CreateFirewallResponse">CreateFirewallResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatefirewallresponse"></a>
<a id="schema_CreateFirewallResponse"></a>
<a id="tocScreatefirewallresponse"></a>
<a id="tocscreatefirewallresponse"></a>

```json
{
  "Firewall": {
    "FirewallName": {},
    "FirewallArn": {},
    "FirewallPolicyArn": {},
    "VpcId": {},
    "SubnetMappings": {},
    "DeleteProtection": {},
    "SubnetChangeProtection": {},
    "FirewallPolicyChangeProtection": {},
    "Description": {},
    "FirewallId": {},
    "Tags": {},
    "EncryptionConfiguration": {
      "KeyId": {},
      "Type": {}
    }
  },
  "FirewallStatus": {
    "Status": {},
    "ConfigurationSyncStateSummary": {},
    "SyncStates": {
      "property1": {
        "Attachment": {
          "SubnetId": {},
          "EndpointId": {},
          "Status": {},
          "StatusMessage": {}
        },
        "Config": {
          "property1": {
            "SyncStatus": {},
            "UpdateToken": {}
          },
          "property2": {
            "SyncStatus": {},
            "UpdateToken": {}
          }
        }
      },
      "property2": {
        "Attachment": {
          "SubnetId": {},
          "EndpointId": {},
          "Status": {},
          "StatusMessage": {}
        },
        "Config": {
          "property1": {
            "SyncStatus": {},
            "UpdateToken": {}
          },
          "property2": {
            "SyncStatus": {},
            "UpdateToken": {}
          }
        }
      }
    },
    "CapacityUsageSummary": {
      "CIDRs": {
        "AvailableCIDRCount": {},
        "UtilizedCIDRCount": {},
        "IPSetReferences": {
          "property1": {
            "ResolvedCIDRCount": {}
          },
          "property2": {
            "ResolvedCIDRCount": {}
          }
        }
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Firewall|object|false|none|none|
|FirewallStatus|object|false|none|none|

<h2 id="tocS_CreateFirewallRequest">CreateFirewallRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatefirewallrequest"></a>
<a id="schema_CreateFirewallRequest"></a>
<a id="tocScreatefirewallrequest"></a>
<a id="tocscreatefirewallrequest"></a>

```json
{
  "FirewallName": {},
  "FirewallPolicyArn": {},
  "VpcId": {},
  "SubnetMappings": {},
  "DeleteProtection": {},
  "SubnetChangeProtection": {},
  "FirewallPolicyChangeProtection": {},
  "Description": {},
  "Tags": {},
  "EncryptionConfiguration": {
    "KeyId": {},
    "Type": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallName|object|true|none|none|
|FirewallPolicyArn|object|true|none|none|
|VpcId|object|true|none|none|
|SubnetMappings|object|true|none|none|
|DeleteProtection|object|false|none|none|
|SubnetChangeProtection|object|false|none|none|
|FirewallPolicyChangeProtection|object|false|none|none|
|Description|object|false|none|none|
|Tags|object|false|none|none|
|EncryptionConfiguration|object|false|none|none|

<h2 id="tocS_LimitExceededException">LimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemalimitexceededexception"></a>
<a id="schema_LimitExceededException"></a>
<a id="tocSlimitexceededexception"></a>
<a id="tocslimitexceededexception"></a>

```json
null
```

<h2 id="tocS_CreateFirewallPolicyResponse">CreateFirewallPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatefirewallpolicyresponse"></a>
<a id="schema_CreateFirewallPolicyResponse"></a>
<a id="tocScreatefirewallpolicyresponse"></a>
<a id="tocscreatefirewallpolicyresponse"></a>

```json
{
  "UpdateToken": {},
  "FirewallPolicyResponse": {
    "FirewallPolicyName": {},
    "FirewallPolicyArn": {},
    "FirewallPolicyId": {},
    "Description": {},
    "FirewallPolicyStatus": {},
    "Tags": {},
    "ConsumedStatelessRuleCapacity": {},
    "ConsumedStatefulRuleCapacity": {},
    "NumberOfAssociations": {},
    "EncryptionConfiguration": {
      "KeyId": {},
      "Type": {}
    },
    "LastModifiedTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UpdateToken|object|true|none|none|
|FirewallPolicyResponse|object|true|none|none|

<h2 id="tocS_CreateFirewallPolicyRequest">CreateFirewallPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatefirewallpolicyrequest"></a>
<a id="schema_CreateFirewallPolicyRequest"></a>
<a id="tocScreatefirewallpolicyrequest"></a>
<a id="tocscreatefirewallpolicyrequest"></a>

```json
{
  "FirewallPolicyName": {},
  "FirewallPolicy": {
    "StatelessRuleGroupReferences": {},
    "StatelessDefaultActions": {},
    "StatelessFragmentDefaultActions": {},
    "StatelessCustomActions": {},
    "StatefulRuleGroupReferences": {},
    "StatefulDefaultActions": {},
    "StatefulEngineOptions": {
      "RuleOrder": {},
      "StreamExceptionPolicy": {}
    },
    "TLSInspectionConfigurationArn": {}
  },
  "Description": {},
  "Tags": {},
  "DryRun": {},
  "EncryptionConfiguration": {
    "KeyId": {},
    "Type": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallPolicyName|object|true|none|none|
|FirewallPolicy|object|true|none|none|
|Description|object|false|none|none|
|Tags|object|false|none|none|
|DryRun|object|false|none|none|
|EncryptionConfiguration|object|false|none|none|

<h2 id="tocS_CreateRuleGroupResponse">CreateRuleGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreaterulegroupresponse"></a>
<a id="schema_CreateRuleGroupResponse"></a>
<a id="tocScreaterulegroupresponse"></a>
<a id="tocscreaterulegroupresponse"></a>

```json
{
  "UpdateToken": {},
  "RuleGroupResponse": {
    "RuleGroupArn": {},
    "RuleGroupName": {},
    "RuleGroupId": {},
    "Description": {},
    "Type": {},
    "Capacity": {},
    "RuleGroupStatus": {},
    "Tags": {},
    "ConsumedCapacity": {},
    "NumberOfAssociations": {},
    "EncryptionConfiguration": {
      "KeyId": {},
      "Type": {}
    },
    "SourceMetadata": {
      "SourceArn": {},
      "SourceUpdateToken": {}
    },
    "SnsTopic": {},
    "LastModifiedTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UpdateToken|object|true|none|none|
|RuleGroupResponse|object|true|none|none|

<h2 id="tocS_CreateRuleGroupRequest">CreateRuleGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreaterulegrouprequest"></a>
<a id="schema_CreateRuleGroupRequest"></a>
<a id="tocScreaterulegrouprequest"></a>
<a id="tocscreaterulegrouprequest"></a>

```json
{
  "RuleGroupName": {},
  "RuleGroup": {
    "RuleVariables": {
      "IPSets": {
        "property1": {
          "Definition": {}
        },
        "property2": {
          "Definition": {}
        }
      },
      "PortSets": {
        "property1": {
          "Definition": {}
        },
        "property2": {
          "Definition": {}
        }
      }
    },
    "ReferenceSets": {
      "IPSetReferences": {
        "property1": {
          "ReferenceArn": {}
        },
        "property2": {
          "ReferenceArn": {}
        }
      }
    },
    "RulesSource": {
      "RulesString": {},
      "RulesSourceList": {
        "Targets": {},
        "TargetTypes": {},
        "GeneratedRulesType": {}
      },
      "StatefulRules": {},
      "StatelessRulesAndCustomActions": {
        "StatelessRules": {},
        "CustomActions": {}
      }
    },
    "StatefulRuleOptions": {
      "RuleOrder": {}
    }
  },
  "Rules": {},
  "Type": {},
  "Description": {},
  "Capacity": {},
  "Tags": {},
  "DryRun": {},
  "EncryptionConfiguration": {
    "KeyId": {},
    "Type": {}
  },
  "SourceMetadata": {
    "SourceArn": {},
    "SourceUpdateToken": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleGroupName|object|true|none|none|
|RuleGroup|object|false|none|none|
|Rules|object|false|none|none|
|Type|object|true|none|none|
|Description|object|false|none|none|
|Capacity|object|true|none|none|
|Tags|object|false|none|none|
|DryRun|object|false|none|none|
|EncryptionConfiguration|object|false|none|none|
|SourceMetadata|object|false|none|none|

<h2 id="tocS_CreateTLSInspectionConfigurationResponse">CreateTLSInspectionConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatetlsinspectionconfigurationresponse"></a>
<a id="schema_CreateTLSInspectionConfigurationResponse"></a>
<a id="tocScreatetlsinspectionconfigurationresponse"></a>
<a id="tocscreatetlsinspectionconfigurationresponse"></a>

```json
{
  "UpdateToken": {},
  "TLSInspectionConfigurationResponse": {
    "TLSInspectionConfigurationArn": {},
    "TLSInspectionConfigurationName": {},
    "TLSInspectionConfigurationId": {},
    "TLSInspectionConfigurationStatus": {},
    "Description": {},
    "Tags": {},
    "LastModifiedTime": {},
    "NumberOfAssociations": {},
    "EncryptionConfiguration": {
      "KeyId": {},
      "Type": {}
    },
    "Certificates": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UpdateToken|object|true|none|none|
|TLSInspectionConfigurationResponse|object|true|none|none|

<h2 id="tocS_CreateTLSInspectionConfigurationRequest">CreateTLSInspectionConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatetlsinspectionconfigurationrequest"></a>
<a id="schema_CreateTLSInspectionConfigurationRequest"></a>
<a id="tocScreatetlsinspectionconfigurationrequest"></a>
<a id="tocscreatetlsinspectionconfigurationrequest"></a>

```json
{
  "TLSInspectionConfigurationName": {},
  "TLSInspectionConfiguration": {
    "ServerCertificateConfigurations": {}
  },
  "Description": {},
  "Tags": {},
  "EncryptionConfiguration": {
    "KeyId": {},
    "Type": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TLSInspectionConfigurationName|object|true|none|none|
|TLSInspectionConfiguration|object|true|none|none|
|Description|object|false|none|none|
|Tags|object|false|none|none|
|EncryptionConfiguration|[EncryptionConfiguration](#schemaencryptionconfiguration)|false|none|A complex type that contains optional Amazon Web Services Key Management Service (KMS) encryption settings for your Network Firewall resources. Your data is encrypted by default with an Amazon Web Services owned key that Amazon Web Services owns and manages for you. You can use either the Amazon Web Services owned key, or provide your own customer managed key. To learn more about KMS encryption of your Network Firewall resources, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-encryption-at-rest.html">Encryption at rest with Amazon Web Services Key Managment Service</a> in the <i>Network Firewall Developer Guide</i>.|

<h2 id="tocS_DeleteFirewallResponse">DeleteFirewallResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletefirewallresponse"></a>
<a id="schema_DeleteFirewallResponse"></a>
<a id="tocSdeletefirewallresponse"></a>
<a id="tocsdeletefirewallresponse"></a>

```json
{
  "Firewall": {
    "FirewallName": {},
    "FirewallArn": {},
    "FirewallPolicyArn": {},
    "VpcId": {},
    "SubnetMappings": {},
    "DeleteProtection": {},
    "SubnetChangeProtection": {},
    "FirewallPolicyChangeProtection": {},
    "Description": {},
    "FirewallId": {},
    "Tags": {},
    "EncryptionConfiguration": {
      "KeyId": {},
      "Type": {}
    }
  },
  "FirewallStatus": {
    "Status": {},
    "ConfigurationSyncStateSummary": {},
    "SyncStates": {
      "property1": {
        "Attachment": {
          "SubnetId": {},
          "EndpointId": {},
          "Status": {},
          "StatusMessage": {}
        },
        "Config": {
          "property1": {
            "SyncStatus": {},
            "UpdateToken": {}
          },
          "property2": {
            "SyncStatus": {},
            "UpdateToken": {}
          }
        }
      },
      "property2": {
        "Attachment": {
          "SubnetId": {},
          "EndpointId": {},
          "Status": {},
          "StatusMessage": {}
        },
        "Config": {
          "property1": {
            "SyncStatus": {},
            "UpdateToken": {}
          },
          "property2": {
            "SyncStatus": {},
            "UpdateToken": {}
          }
        }
      }
    },
    "CapacityUsageSummary": {
      "CIDRs": {
        "AvailableCIDRCount": {},
        "UtilizedCIDRCount": {},
        "IPSetReferences": {
          "property1": {
            "ResolvedCIDRCount": {}
          },
          "property2": {
            "ResolvedCIDRCount": {}
          }
        }
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Firewall|[Firewall](#schemafirewall)|false|none|<p>The firewall defines the configuration settings for an Network Firewall firewall. These settings include the firewall policy, the subnets in your VPC to use for the firewall endpoints, and any tags that are attached to the firewall Amazon Web Services resource. </p> <p>The status of the firewall, for example whether it's ready to filter network traffic, is provided in the corresponding <a>FirewallStatus</a>. You can retrieve both objects by calling <a>DescribeFirewall</a>.</p>|
|FirewallStatus|[FirewallStatus](#schemafirewallstatus)|false|none|Detailed information about the current status of a <a>Firewall</a>. You can retrieve this for a firewall by calling <a>DescribeFirewall</a> and providing the firewall name and ARN.|

<h2 id="tocS_DeleteFirewallRequest">DeleteFirewallRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletefirewallrequest"></a>
<a id="schema_DeleteFirewallRequest"></a>
<a id="tocSdeletefirewallrequest"></a>
<a id="tocsdeletefirewallrequest"></a>

```json
{
  "FirewallName": {},
  "FirewallArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallName|object|false|none|none|
|FirewallArn|object|false|none|none|

<h2 id="tocS_UnsupportedOperationException">UnsupportedOperationException</h2>
<!-- backwards compatibility -->
<a id="schemaunsupportedoperationexception"></a>
<a id="schema_UnsupportedOperationException"></a>
<a id="tocSunsupportedoperationexception"></a>
<a id="tocsunsupportedoperationexception"></a>

```json
null
```

<h2 id="tocS_DeleteFirewallPolicyResponse">DeleteFirewallPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletefirewallpolicyresponse"></a>
<a id="schema_DeleteFirewallPolicyResponse"></a>
<a id="tocSdeletefirewallpolicyresponse"></a>
<a id="tocsdeletefirewallpolicyresponse"></a>

```json
{
  "FirewallPolicyResponse": {
    "FirewallPolicyName": {},
    "FirewallPolicyArn": {},
    "FirewallPolicyId": {},
    "Description": {},
    "FirewallPolicyStatus": {},
    "Tags": {},
    "ConsumedStatelessRuleCapacity": {},
    "ConsumedStatefulRuleCapacity": {},
    "NumberOfAssociations": {},
    "EncryptionConfiguration": {
      "KeyId": {},
      "Type": {}
    },
    "LastModifiedTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallPolicyResponse|object|true|none|none|

<h2 id="tocS_DeleteFirewallPolicyRequest">DeleteFirewallPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletefirewallpolicyrequest"></a>
<a id="schema_DeleteFirewallPolicyRequest"></a>
<a id="tocSdeletefirewallpolicyrequest"></a>
<a id="tocsdeletefirewallpolicyrequest"></a>

```json
{
  "FirewallPolicyName": {},
  "FirewallPolicyArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallPolicyName|object|false|none|none|
|FirewallPolicyArn|object|false|none|none|

<h2 id="tocS_DeleteResourcePolicyResponse">DeleteResourcePolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteresourcepolicyresponse"></a>
<a id="schema_DeleteResourcePolicyResponse"></a>
<a id="tocSdeleteresourcepolicyresponse"></a>
<a id="tocsdeleteresourcepolicyresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteResourcePolicyRequest">DeleteResourcePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteresourcepolicyrequest"></a>
<a id="schema_DeleteResourcePolicyRequest"></a>
<a id="tocSdeleteresourcepolicyrequest"></a>
<a id="tocsdeleteresourcepolicyrequest"></a>

```json
{
  "ResourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|

<h2 id="tocS_InvalidResourcePolicyException">InvalidResourcePolicyException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidresourcepolicyexception"></a>
<a id="schema_InvalidResourcePolicyException"></a>
<a id="tocSinvalidresourcepolicyexception"></a>
<a id="tocsinvalidresourcepolicyexception"></a>

```json
null
```

<h2 id="tocS_DeleteRuleGroupResponse">DeleteRuleGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleterulegroupresponse"></a>
<a id="schema_DeleteRuleGroupResponse"></a>
<a id="tocSdeleterulegroupresponse"></a>
<a id="tocsdeleterulegroupresponse"></a>

```json
{
  "RuleGroupResponse": {
    "RuleGroupArn": {},
    "RuleGroupName": {},
    "RuleGroupId": {},
    "Description": {},
    "Type": {},
    "Capacity": {},
    "RuleGroupStatus": {},
    "Tags": {},
    "ConsumedCapacity": {},
    "NumberOfAssociations": {},
    "EncryptionConfiguration": {
      "KeyId": {},
      "Type": {}
    },
    "SourceMetadata": {
      "SourceArn": {},
      "SourceUpdateToken": {}
    },
    "SnsTopic": {},
    "LastModifiedTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleGroupResponse|object|true|none|none|

<h2 id="tocS_DeleteRuleGroupRequest">DeleteRuleGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleterulegrouprequest"></a>
<a id="schema_DeleteRuleGroupRequest"></a>
<a id="tocSdeleterulegrouprequest"></a>
<a id="tocsdeleterulegrouprequest"></a>

```json
{
  "RuleGroupName": {},
  "RuleGroupArn": {},
  "Type": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleGroupName|object|false|none|none|
|RuleGroupArn|object|false|none|none|
|Type|object|false|none|none|

<h2 id="tocS_DeleteTLSInspectionConfigurationResponse">DeleteTLSInspectionConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletetlsinspectionconfigurationresponse"></a>
<a id="schema_DeleteTLSInspectionConfigurationResponse"></a>
<a id="tocSdeletetlsinspectionconfigurationresponse"></a>
<a id="tocsdeletetlsinspectionconfigurationresponse"></a>

```json
{
  "TLSInspectionConfigurationResponse": {
    "TLSInspectionConfigurationArn": {},
    "TLSInspectionConfigurationName": {},
    "TLSInspectionConfigurationId": {},
    "TLSInspectionConfigurationStatus": {},
    "Description": {},
    "Tags": {},
    "LastModifiedTime": {},
    "NumberOfAssociations": {},
    "EncryptionConfiguration": {
      "KeyId": {},
      "Type": {}
    },
    "Certificates": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TLSInspectionConfigurationResponse|object|true|none|none|

<h2 id="tocS_DeleteTLSInspectionConfigurationRequest">DeleteTLSInspectionConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletetlsinspectionconfigurationrequest"></a>
<a id="schema_DeleteTLSInspectionConfigurationRequest"></a>
<a id="tocSdeletetlsinspectionconfigurationrequest"></a>
<a id="tocsdeletetlsinspectionconfigurationrequest"></a>

```json
{
  "TLSInspectionConfigurationArn": {},
  "TLSInspectionConfigurationName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TLSInspectionConfigurationArn|object|false|none|none|
|TLSInspectionConfigurationName|object|false|none|none|

<h2 id="tocS_DescribeFirewallResponse">DescribeFirewallResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribefirewallresponse"></a>
<a id="schema_DescribeFirewallResponse"></a>
<a id="tocSdescribefirewallresponse"></a>
<a id="tocsdescribefirewallresponse"></a>

```json
{
  "UpdateToken": {},
  "Firewall": {
    "FirewallName": {},
    "FirewallArn": {},
    "FirewallPolicyArn": {},
    "VpcId": {},
    "SubnetMappings": {},
    "DeleteProtection": {},
    "SubnetChangeProtection": {},
    "FirewallPolicyChangeProtection": {},
    "Description": {},
    "FirewallId": {},
    "Tags": {},
    "EncryptionConfiguration": {
      "KeyId": {},
      "Type": {}
    }
  },
  "FirewallStatus": {
    "Status": {},
    "ConfigurationSyncStateSummary": {},
    "SyncStates": {
      "property1": {
        "Attachment": {
          "SubnetId": {},
          "EndpointId": {},
          "Status": {},
          "StatusMessage": {}
        },
        "Config": {
          "property1": {
            "SyncStatus": {},
            "UpdateToken": {}
          },
          "property2": {
            "SyncStatus": {},
            "UpdateToken": {}
          }
        }
      },
      "property2": {
        "Attachment": {
          "SubnetId": {},
          "EndpointId": {},
          "Status": {},
          "StatusMessage": {}
        },
        "Config": {
          "property1": {
            "SyncStatus": {},
            "UpdateToken": {}
          },
          "property2": {
            "SyncStatus": {},
            "UpdateToken": {}
          }
        }
      }
    },
    "CapacityUsageSummary": {
      "CIDRs": {
        "AvailableCIDRCount": {},
        "UtilizedCIDRCount": {},
        "IPSetReferences": {
          "property1": {
            "ResolvedCIDRCount": {}
          },
          "property2": {
            "ResolvedCIDRCount": {}
          }
        }
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UpdateToken|object|false|none|none|
|Firewall|object|false|none|none|
|FirewallStatus|object|false|none|none|

<h2 id="tocS_DescribeFirewallRequest">DescribeFirewallRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribefirewallrequest"></a>
<a id="schema_DescribeFirewallRequest"></a>
<a id="tocSdescribefirewallrequest"></a>
<a id="tocsdescribefirewallrequest"></a>

```json
{
  "FirewallName": {},
  "FirewallArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallName|object|false|none|none|
|FirewallArn|object|false|none|none|

<h2 id="tocS_DescribeFirewallPolicyResponse">DescribeFirewallPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribefirewallpolicyresponse"></a>
<a id="schema_DescribeFirewallPolicyResponse"></a>
<a id="tocSdescribefirewallpolicyresponse"></a>
<a id="tocsdescribefirewallpolicyresponse"></a>

```json
{
  "UpdateToken": {},
  "FirewallPolicyResponse": {
    "FirewallPolicyName": {},
    "FirewallPolicyArn": {},
    "FirewallPolicyId": {},
    "Description": {},
    "FirewallPolicyStatus": {},
    "Tags": {},
    "ConsumedStatelessRuleCapacity": {},
    "ConsumedStatefulRuleCapacity": {},
    "NumberOfAssociations": {},
    "EncryptionConfiguration": {
      "KeyId": {},
      "Type": {}
    },
    "LastModifiedTime": {}
  },
  "FirewallPolicy": {
    "StatelessRuleGroupReferences": {},
    "StatelessDefaultActions": {},
    "StatelessFragmentDefaultActions": {},
    "StatelessCustomActions": {},
    "StatefulRuleGroupReferences": {},
    "StatefulDefaultActions": {},
    "StatefulEngineOptions": {
      "RuleOrder": {},
      "StreamExceptionPolicy": {}
    },
    "TLSInspectionConfigurationArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UpdateToken|object|true|none|none|
|FirewallPolicyResponse|object|true|none|none|
|FirewallPolicy|object|false|none|none|

<h2 id="tocS_DescribeFirewallPolicyRequest">DescribeFirewallPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribefirewallpolicyrequest"></a>
<a id="schema_DescribeFirewallPolicyRequest"></a>
<a id="tocSdescribefirewallpolicyrequest"></a>
<a id="tocsdescribefirewallpolicyrequest"></a>

```json
{
  "FirewallPolicyName": {},
  "FirewallPolicyArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallPolicyName|object|false|none|none|
|FirewallPolicyArn|object|false|none|none|

<h2 id="tocS_DescribeLoggingConfigurationResponse">DescribeLoggingConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeloggingconfigurationresponse"></a>
<a id="schema_DescribeLoggingConfigurationResponse"></a>
<a id="tocSdescribeloggingconfigurationresponse"></a>
<a id="tocsdescribeloggingconfigurationresponse"></a>

```json
{
  "FirewallArn": {},
  "LoggingConfiguration": {
    "LogDestinationConfigs": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallArn|object|false|none|none|
|LoggingConfiguration|[LoggingConfiguration](#schemaloggingconfiguration)|false|none|Defines how Network Firewall performs logging for a <a>Firewall</a>. |

<h2 id="tocS_DescribeLoggingConfigurationRequest">DescribeLoggingConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeloggingconfigurationrequest"></a>
<a id="schema_DescribeLoggingConfigurationRequest"></a>
<a id="tocSdescribeloggingconfigurationrequest"></a>
<a id="tocsdescribeloggingconfigurationrequest"></a>

```json
{
  "FirewallArn": {},
  "FirewallName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallArn|object|false|none|none|
|FirewallName|object|false|none|none|

<h2 id="tocS_DescribeResourcePolicyResponse">DescribeResourcePolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescriberesourcepolicyresponse"></a>
<a id="schema_DescribeResourcePolicyResponse"></a>
<a id="tocSdescriberesourcepolicyresponse"></a>
<a id="tocsdescriberesourcepolicyresponse"></a>

```json
{
  "Policy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Policy|object|false|none|none|

<h2 id="tocS_DescribeResourcePolicyRequest">DescribeResourcePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescriberesourcepolicyrequest"></a>
<a id="schema_DescribeResourcePolicyRequest"></a>
<a id="tocSdescriberesourcepolicyrequest"></a>
<a id="tocsdescriberesourcepolicyrequest"></a>

```json
{
  "ResourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|

<h2 id="tocS_DescribeRuleGroupResponse">DescribeRuleGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescriberulegroupresponse"></a>
<a id="schema_DescribeRuleGroupResponse"></a>
<a id="tocSdescriberulegroupresponse"></a>
<a id="tocsdescriberulegroupresponse"></a>

```json
{
  "UpdateToken": {},
  "RuleGroup": {
    "RuleVariables": {
      "IPSets": {
        "property1": {
          "Definition": {}
        },
        "property2": {
          "Definition": {}
        }
      },
      "PortSets": {
        "property1": {
          "Definition": {}
        },
        "property2": {
          "Definition": {}
        }
      }
    },
    "ReferenceSets": {
      "IPSetReferences": {
        "property1": {
          "ReferenceArn": {}
        },
        "property2": {
          "ReferenceArn": {}
        }
      }
    },
    "RulesSource": {
      "RulesString": {},
      "RulesSourceList": {
        "Targets": {},
        "TargetTypes": {},
        "GeneratedRulesType": {}
      },
      "StatefulRules": {},
      "StatelessRulesAndCustomActions": {
        "StatelessRules": {},
        "CustomActions": {}
      }
    },
    "StatefulRuleOptions": {
      "RuleOrder": {}
    }
  },
  "RuleGroupResponse": {
    "RuleGroupArn": {},
    "RuleGroupName": {},
    "RuleGroupId": {},
    "Description": {},
    "Type": {},
    "Capacity": {},
    "RuleGroupStatus": {},
    "Tags": {},
    "ConsumedCapacity": {},
    "NumberOfAssociations": {},
    "EncryptionConfiguration": {
      "KeyId": {},
      "Type": {}
    },
    "SourceMetadata": {
      "SourceArn": {},
      "SourceUpdateToken": {}
    },
    "SnsTopic": {},
    "LastModifiedTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UpdateToken|object|true|none|none|
|RuleGroup|object|false|none|none|
|RuleGroupResponse|object|true|none|none|

<h2 id="tocS_DescribeRuleGroupRequest">DescribeRuleGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescriberulegrouprequest"></a>
<a id="schema_DescribeRuleGroupRequest"></a>
<a id="tocSdescriberulegrouprequest"></a>
<a id="tocsdescriberulegrouprequest"></a>

```json
{
  "RuleGroupName": {},
  "RuleGroupArn": {},
  "Type": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleGroupName|object|false|none|none|
|RuleGroupArn|object|false|none|none|
|Type|object|false|none|none|

<h2 id="tocS_DescribeRuleGroupMetadataResponse">DescribeRuleGroupMetadataResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescriberulegroupmetadataresponse"></a>
<a id="schema_DescribeRuleGroupMetadataResponse"></a>
<a id="tocSdescriberulegroupmetadataresponse"></a>
<a id="tocsdescriberulegroupmetadataresponse"></a>

```json
{
  "RuleGroupArn": {},
  "RuleGroupName": {},
  "Description": {},
  "Type": {},
  "Capacity": {},
  "StatefulRuleOptions": {
    "RuleOrder": {}
  },
  "LastModifiedTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleGroupArn|object|true|none|none|
|RuleGroupName|object|true|none|none|
|Description|object|false|none|none|
|Type|object|false|none|none|
|Capacity|object|false|none|none|
|StatefulRuleOptions|[StatefulRuleOptions](#schemastatefulruleoptions)|false|none|Additional options governing how Network Firewall handles the rule group. You can only use these for stateful rule groups.|
|LastModifiedTime|object|false|none|none|

<h2 id="tocS_DescribeRuleGroupMetadataRequest">DescribeRuleGroupMetadataRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescriberulegroupmetadatarequest"></a>
<a id="schema_DescribeRuleGroupMetadataRequest"></a>
<a id="tocSdescriberulegroupmetadatarequest"></a>
<a id="tocsdescriberulegroupmetadatarequest"></a>

```json
{
  "RuleGroupName": {},
  "RuleGroupArn": {},
  "Type": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleGroupName|object|false|none|none|
|RuleGroupArn|object|false|none|none|
|Type|object|false|none|none|

<h2 id="tocS_DescribeTLSInspectionConfigurationResponse">DescribeTLSInspectionConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribetlsinspectionconfigurationresponse"></a>
<a id="schema_DescribeTLSInspectionConfigurationResponse"></a>
<a id="tocSdescribetlsinspectionconfigurationresponse"></a>
<a id="tocsdescribetlsinspectionconfigurationresponse"></a>

```json
{
  "UpdateToken": {},
  "TLSInspectionConfiguration": {
    "ServerCertificateConfigurations": {}
  },
  "TLSInspectionConfigurationResponse": {
    "TLSInspectionConfigurationArn": {},
    "TLSInspectionConfigurationName": {},
    "TLSInspectionConfigurationId": {},
    "TLSInspectionConfigurationStatus": {},
    "Description": {},
    "Tags": {},
    "LastModifiedTime": {},
    "NumberOfAssociations": {},
    "EncryptionConfiguration": {
      "KeyId": {},
      "Type": {}
    },
    "Certificates": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UpdateToken|object|true|none|none|
|TLSInspectionConfiguration|object|false|none|none|
|TLSInspectionConfigurationResponse|object|true|none|none|

<h2 id="tocS_DescribeTLSInspectionConfigurationRequest">DescribeTLSInspectionConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribetlsinspectionconfigurationrequest"></a>
<a id="schema_DescribeTLSInspectionConfigurationRequest"></a>
<a id="tocSdescribetlsinspectionconfigurationrequest"></a>
<a id="tocsdescribetlsinspectionconfigurationrequest"></a>

```json
{
  "TLSInspectionConfigurationArn": {},
  "TLSInspectionConfigurationName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TLSInspectionConfigurationArn|object|false|none|none|
|TLSInspectionConfigurationName|object|false|none|none|

<h2 id="tocS_DisassociateSubnetsResponse">DisassociateSubnetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatesubnetsresponse"></a>
<a id="schema_DisassociateSubnetsResponse"></a>
<a id="tocSdisassociatesubnetsresponse"></a>
<a id="tocsdisassociatesubnetsresponse"></a>

```json
{
  "FirewallArn": {},
  "FirewallName": {},
  "SubnetMappings": {},
  "UpdateToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallArn|object|false|none|none|
|FirewallName|object|false|none|none|
|SubnetMappings|object|false|none|none|
|UpdateToken|object|false|none|none|

<h2 id="tocS_DisassociateSubnetsRequest">DisassociateSubnetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatesubnetsrequest"></a>
<a id="schema_DisassociateSubnetsRequest"></a>
<a id="tocSdisassociatesubnetsrequest"></a>
<a id="tocsdisassociatesubnetsrequest"></a>

```json
{
  "UpdateToken": {},
  "FirewallArn": {},
  "FirewallName": {},
  "SubnetIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UpdateToken|object|false|none|none|
|FirewallArn|object|false|none|none|
|FirewallName|object|false|none|none|
|SubnetIds|object|true|none|none|

<h2 id="tocS_ListFirewallPoliciesResponse">ListFirewallPoliciesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfirewallpoliciesresponse"></a>
<a id="schema_ListFirewallPoliciesResponse"></a>
<a id="tocSlistfirewallpoliciesresponse"></a>
<a id="tocslistfirewallpoliciesresponse"></a>

```json
{
  "NextToken": {},
  "FirewallPolicies": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|FirewallPolicies|object|false|none|none|

<h2 id="tocS_ListFirewallPoliciesRequest">ListFirewallPoliciesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistfirewallpoliciesrequest"></a>
<a id="schema_ListFirewallPoliciesRequest"></a>
<a id="tocSlistfirewallpoliciesrequest"></a>
<a id="tocslistfirewallpoliciesrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListFirewallsResponse">ListFirewallsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfirewallsresponse"></a>
<a id="schema_ListFirewallsResponse"></a>
<a id="tocSlistfirewallsresponse"></a>
<a id="tocslistfirewallsresponse"></a>

```json
{
  "NextToken": {},
  "Firewalls": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Firewalls|object|false|none|none|

<h2 id="tocS_ListFirewallsRequest">ListFirewallsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistfirewallsrequest"></a>
<a id="schema_ListFirewallsRequest"></a>
<a id="tocSlistfirewallsrequest"></a>
<a id="tocslistfirewallsrequest"></a>

```json
{
  "NextToken": {},
  "VpcIds": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|VpcIds|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListRuleGroupsResponse">ListRuleGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistrulegroupsresponse"></a>
<a id="schema_ListRuleGroupsResponse"></a>
<a id="tocSlistrulegroupsresponse"></a>
<a id="tocslistrulegroupsresponse"></a>

```json
{
  "NextToken": {},
  "RuleGroups": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|RuleGroups|object|false|none|none|

<h2 id="tocS_ListRuleGroupsRequest">ListRuleGroupsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistrulegroupsrequest"></a>
<a id="schema_ListRuleGroupsRequest"></a>
<a id="tocSlistrulegroupsrequest"></a>
<a id="tocslistrulegroupsrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Scope": {},
  "ManagedType": {},
  "Type": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|Scope|object|false|none|none|
|ManagedType|object|false|none|none|
|Type|object|false|none|none|

<h2 id="tocS_ListTLSInspectionConfigurationsResponse">ListTLSInspectionConfigurationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttlsinspectionconfigurationsresponse"></a>
<a id="schema_ListTLSInspectionConfigurationsResponse"></a>
<a id="tocSlisttlsinspectionconfigurationsresponse"></a>
<a id="tocslisttlsinspectionconfigurationsresponse"></a>

```json
{
  "NextToken": {},
  "TLSInspectionConfigurations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|TLSInspectionConfigurations|object|false|none|none|

<h2 id="tocS_ListTLSInspectionConfigurationsRequest">ListTLSInspectionConfigurationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttlsinspectionconfigurationsrequest"></a>
<a id="schema_ListTLSInspectionConfigurationsRequest"></a>
<a id="tocSlisttlsinspectionconfigurationsrequest"></a>
<a id="tocslisttlsinspectionconfigurationsrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "NextToken": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "ResourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|ResourceArn|object|true|none|none|

<h2 id="tocS_PutResourcePolicyResponse">PutResourcePolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputresourcepolicyresponse"></a>
<a id="schema_PutResourcePolicyResponse"></a>
<a id="tocSputresourcepolicyresponse"></a>
<a id="tocsputresourcepolicyresponse"></a>

```json
{}
```

<h2 id="tocS_PutResourcePolicyRequest">PutResourcePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputresourcepolicyrequest"></a>
<a id="schema_PutResourcePolicyRequest"></a>
<a id="tocSputresourcepolicyrequest"></a>
<a id="tocsputresourcepolicyrequest"></a>

```json
{
  "ResourceArn": {},
  "Policy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|Policy|object|true|none|none|

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

<h2 id="tocS_UpdateFirewallDeleteProtectionResponse">UpdateFirewallDeleteProtectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefirewalldeleteprotectionresponse"></a>
<a id="schema_UpdateFirewallDeleteProtectionResponse"></a>
<a id="tocSupdatefirewalldeleteprotectionresponse"></a>
<a id="tocsupdatefirewalldeleteprotectionresponse"></a>

```json
{
  "FirewallArn": {},
  "FirewallName": {},
  "DeleteProtection": {},
  "UpdateToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallArn|object|false|none|none|
|FirewallName|object|false|none|none|
|DeleteProtection|object|false|none|none|
|UpdateToken|object|false|none|none|

<h2 id="tocS_UpdateFirewallDeleteProtectionRequest">UpdateFirewallDeleteProtectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefirewalldeleteprotectionrequest"></a>
<a id="schema_UpdateFirewallDeleteProtectionRequest"></a>
<a id="tocSupdatefirewalldeleteprotectionrequest"></a>
<a id="tocsupdatefirewalldeleteprotectionrequest"></a>

```json
{
  "UpdateToken": {},
  "FirewallArn": {},
  "FirewallName": {},
  "DeleteProtection": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UpdateToken|object|false|none|none|
|FirewallArn|object|false|none|none|
|FirewallName|object|false|none|none|
|DeleteProtection|object|true|none|none|

<h2 id="tocS_ResourceOwnerCheckException">ResourceOwnerCheckException</h2>
<!-- backwards compatibility -->
<a id="schemaresourceownercheckexception"></a>
<a id="schema_ResourceOwnerCheckException"></a>
<a id="tocSresourceownercheckexception"></a>
<a id="tocsresourceownercheckexception"></a>

```json
null
```

<h2 id="tocS_UpdateFirewallDescriptionResponse">UpdateFirewallDescriptionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefirewalldescriptionresponse"></a>
<a id="schema_UpdateFirewallDescriptionResponse"></a>
<a id="tocSupdatefirewalldescriptionresponse"></a>
<a id="tocsupdatefirewalldescriptionresponse"></a>

```json
{
  "FirewallArn": {},
  "FirewallName": {},
  "Description": {},
  "UpdateToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallArn|object|false|none|none|
|FirewallName|object|false|none|none|
|Description|object|false|none|none|
|UpdateToken|object|false|none|none|

<h2 id="tocS_UpdateFirewallDescriptionRequest">UpdateFirewallDescriptionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefirewalldescriptionrequest"></a>
<a id="schema_UpdateFirewallDescriptionRequest"></a>
<a id="tocSupdatefirewalldescriptionrequest"></a>
<a id="tocsupdatefirewalldescriptionrequest"></a>

```json
{
  "UpdateToken": {},
  "FirewallArn": {},
  "FirewallName": {},
  "Description": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UpdateToken|object|false|none|none|
|FirewallArn|object|false|none|none|
|FirewallName|object|false|none|none|
|Description|object|false|none|none|

<h2 id="tocS_UpdateFirewallEncryptionConfigurationResponse">UpdateFirewallEncryptionConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefirewallencryptionconfigurationresponse"></a>
<a id="schema_UpdateFirewallEncryptionConfigurationResponse"></a>
<a id="tocSupdatefirewallencryptionconfigurationresponse"></a>
<a id="tocsupdatefirewallencryptionconfigurationresponse"></a>

```json
{
  "FirewallArn": {},
  "FirewallName": {},
  "UpdateToken": {},
  "EncryptionConfiguration": {
    "KeyId": {},
    "Type": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallArn|object|false|none|none|
|FirewallName|object|false|none|none|
|UpdateToken|object|false|none|none|
|EncryptionConfiguration|[EncryptionConfiguration](#schemaencryptionconfiguration)|false|none|A complex type that contains optional Amazon Web Services Key Management Service (KMS) encryption settings for your Network Firewall resources. Your data is encrypted by default with an Amazon Web Services owned key that Amazon Web Services owns and manages for you. You can use either the Amazon Web Services owned key, or provide your own customer managed key. To learn more about KMS encryption of your Network Firewall resources, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-encryption-at-rest.html">Encryption at rest with Amazon Web Services Key Managment Service</a> in the <i>Network Firewall Developer Guide</i>.|

<h2 id="tocS_UpdateFirewallEncryptionConfigurationRequest">UpdateFirewallEncryptionConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefirewallencryptionconfigurationrequest"></a>
<a id="schema_UpdateFirewallEncryptionConfigurationRequest"></a>
<a id="tocSupdatefirewallencryptionconfigurationrequest"></a>
<a id="tocsupdatefirewallencryptionconfigurationrequest"></a>

```json
{
  "UpdateToken": {},
  "FirewallArn": {},
  "FirewallName": {},
  "EncryptionConfiguration": {
    "KeyId": {},
    "Type": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UpdateToken|object|false|none|none|
|FirewallArn|object|false|none|none|
|FirewallName|object|false|none|none|
|EncryptionConfiguration|[EncryptionConfiguration](#schemaencryptionconfiguration)|false|none|A complex type that contains optional Amazon Web Services Key Management Service (KMS) encryption settings for your Network Firewall resources. Your data is encrypted by default with an Amazon Web Services owned key that Amazon Web Services owns and manages for you. You can use either the Amazon Web Services owned key, or provide your own customer managed key. To learn more about KMS encryption of your Network Firewall resources, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-encryption-at-rest.html">Encryption at rest with Amazon Web Services Key Managment Service</a> in the <i>Network Firewall Developer Guide</i>.|

<h2 id="tocS_UpdateFirewallPolicyResponse">UpdateFirewallPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefirewallpolicyresponse"></a>
<a id="schema_UpdateFirewallPolicyResponse"></a>
<a id="tocSupdatefirewallpolicyresponse"></a>
<a id="tocsupdatefirewallpolicyresponse"></a>

```json
{
  "UpdateToken": {},
  "FirewallPolicyResponse": {
    "FirewallPolicyName": {},
    "FirewallPolicyArn": {},
    "FirewallPolicyId": {},
    "Description": {},
    "FirewallPolicyStatus": {},
    "Tags": {},
    "ConsumedStatelessRuleCapacity": {},
    "ConsumedStatefulRuleCapacity": {},
    "NumberOfAssociations": {},
    "EncryptionConfiguration": {
      "KeyId": {},
      "Type": {}
    },
    "LastModifiedTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UpdateToken|object|true|none|none|
|FirewallPolicyResponse|object|true|none|none|

<h2 id="tocS_UpdateFirewallPolicyRequest">UpdateFirewallPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefirewallpolicyrequest"></a>
<a id="schema_UpdateFirewallPolicyRequest"></a>
<a id="tocSupdatefirewallpolicyrequest"></a>
<a id="tocsupdatefirewallpolicyrequest"></a>

```json
{
  "UpdateToken": {},
  "FirewallPolicyArn": {},
  "FirewallPolicyName": {},
  "FirewallPolicy": {
    "StatelessRuleGroupReferences": {},
    "StatelessDefaultActions": {},
    "StatelessFragmentDefaultActions": {},
    "StatelessCustomActions": {},
    "StatefulRuleGroupReferences": {},
    "StatefulDefaultActions": {},
    "StatefulEngineOptions": {
      "RuleOrder": {},
      "StreamExceptionPolicy": {}
    },
    "TLSInspectionConfigurationArn": {}
  },
  "Description": {},
  "DryRun": {},
  "EncryptionConfiguration": {
    "KeyId": {},
    "Type": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UpdateToken|object|true|none|none|
|FirewallPolicyArn|object|false|none|none|
|FirewallPolicyName|object|false|none|none|
|FirewallPolicy|object|true|none|none|
|Description|object|false|none|none|
|DryRun|object|false|none|none|
|EncryptionConfiguration|object|false|none|none|

<h2 id="tocS_UpdateFirewallPolicyChangeProtectionResponse">UpdateFirewallPolicyChangeProtectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefirewallpolicychangeprotectionresponse"></a>
<a id="schema_UpdateFirewallPolicyChangeProtectionResponse"></a>
<a id="tocSupdatefirewallpolicychangeprotectionresponse"></a>
<a id="tocsupdatefirewallpolicychangeprotectionresponse"></a>

```json
{
  "UpdateToken": {},
  "FirewallArn": {},
  "FirewallName": {},
  "FirewallPolicyChangeProtection": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UpdateToken|object|false|none|none|
|FirewallArn|object|false|none|none|
|FirewallName|object|false|none|none|
|FirewallPolicyChangeProtection|object|false|none|none|

<h2 id="tocS_UpdateFirewallPolicyChangeProtectionRequest">UpdateFirewallPolicyChangeProtectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefirewallpolicychangeprotectionrequest"></a>
<a id="schema_UpdateFirewallPolicyChangeProtectionRequest"></a>
<a id="tocSupdatefirewallpolicychangeprotectionrequest"></a>
<a id="tocsupdatefirewallpolicychangeprotectionrequest"></a>

```json
{
  "UpdateToken": {},
  "FirewallArn": {},
  "FirewallName": {},
  "FirewallPolicyChangeProtection": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UpdateToken|object|false|none|none|
|FirewallArn|object|false|none|none|
|FirewallName|object|false|none|none|
|FirewallPolicyChangeProtection|object|true|none|none|

<h2 id="tocS_UpdateLoggingConfigurationResponse">UpdateLoggingConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateloggingconfigurationresponse"></a>
<a id="schema_UpdateLoggingConfigurationResponse"></a>
<a id="tocSupdateloggingconfigurationresponse"></a>
<a id="tocsupdateloggingconfigurationresponse"></a>

```json
{
  "FirewallArn": {},
  "FirewallName": {},
  "LoggingConfiguration": {
    "LogDestinationConfigs": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallArn|object|false|none|none|
|FirewallName|object|false|none|none|
|LoggingConfiguration|[LoggingConfiguration](#schemaloggingconfiguration)|false|none|Defines how Network Firewall performs logging for a <a>Firewall</a>. |

<h2 id="tocS_UpdateLoggingConfigurationRequest">UpdateLoggingConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateloggingconfigurationrequest"></a>
<a id="schema_UpdateLoggingConfigurationRequest"></a>
<a id="tocSupdateloggingconfigurationrequest"></a>
<a id="tocsupdateloggingconfigurationrequest"></a>

```json
{
  "FirewallArn": {},
  "FirewallName": {},
  "LoggingConfiguration": {
    "LogDestinationConfigs": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallArn|object|false|none|none|
|FirewallName|object|false|none|none|
|LoggingConfiguration|object|false|none|none|

<h2 id="tocS_LogDestinationPermissionException">LogDestinationPermissionException</h2>
<!-- backwards compatibility -->
<a id="schemalogdestinationpermissionexception"></a>
<a id="schema_LogDestinationPermissionException"></a>
<a id="tocSlogdestinationpermissionexception"></a>
<a id="tocslogdestinationpermissionexception"></a>

```json
null
```

<h2 id="tocS_UpdateRuleGroupResponse">UpdateRuleGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterulegroupresponse"></a>
<a id="schema_UpdateRuleGroupResponse"></a>
<a id="tocSupdaterulegroupresponse"></a>
<a id="tocsupdaterulegroupresponse"></a>

```json
{
  "UpdateToken": {},
  "RuleGroupResponse": {
    "RuleGroupArn": {},
    "RuleGroupName": {},
    "RuleGroupId": {},
    "Description": {},
    "Type": {},
    "Capacity": {},
    "RuleGroupStatus": {},
    "Tags": {},
    "ConsumedCapacity": {},
    "NumberOfAssociations": {},
    "EncryptionConfiguration": {
      "KeyId": {},
      "Type": {}
    },
    "SourceMetadata": {
      "SourceArn": {},
      "SourceUpdateToken": {}
    },
    "SnsTopic": {},
    "LastModifiedTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UpdateToken|object|true|none|none|
|RuleGroupResponse|object|true|none|none|

<h2 id="tocS_UpdateRuleGroupRequest">UpdateRuleGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterulegrouprequest"></a>
<a id="schema_UpdateRuleGroupRequest"></a>
<a id="tocSupdaterulegrouprequest"></a>
<a id="tocsupdaterulegrouprequest"></a>

```json
{
  "UpdateToken": {},
  "RuleGroupArn": {},
  "RuleGroupName": {},
  "RuleGroup": {
    "RuleVariables": {
      "IPSets": {
        "property1": {
          "Definition": {}
        },
        "property2": {
          "Definition": {}
        }
      },
      "PortSets": {
        "property1": {
          "Definition": {}
        },
        "property2": {
          "Definition": {}
        }
      }
    },
    "ReferenceSets": {
      "IPSetReferences": {
        "property1": {
          "ReferenceArn": {}
        },
        "property2": {
          "ReferenceArn": {}
        }
      }
    },
    "RulesSource": {
      "RulesString": {},
      "RulesSourceList": {
        "Targets": {},
        "TargetTypes": {},
        "GeneratedRulesType": {}
      },
      "StatefulRules": {},
      "StatelessRulesAndCustomActions": {
        "StatelessRules": {},
        "CustomActions": {}
      }
    },
    "StatefulRuleOptions": {
      "RuleOrder": {}
    }
  },
  "Rules": {},
  "Type": {},
  "Description": {},
  "DryRun": {},
  "EncryptionConfiguration": {
    "KeyId": {},
    "Type": {}
  },
  "SourceMetadata": {
    "SourceArn": {},
    "SourceUpdateToken": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UpdateToken|object|true|none|none|
|RuleGroupArn|object|false|none|none|
|RuleGroupName|object|false|none|none|
|RuleGroup|object|false|none|none|
|Rules|object|false|none|none|
|Type|object|false|none|none|
|Description|object|false|none|none|
|DryRun|object|false|none|none|
|EncryptionConfiguration|object|false|none|none|
|SourceMetadata|object|false|none|none|

<h2 id="tocS_UpdateSubnetChangeProtectionResponse">UpdateSubnetChangeProtectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesubnetchangeprotectionresponse"></a>
<a id="schema_UpdateSubnetChangeProtectionResponse"></a>
<a id="tocSupdatesubnetchangeprotectionresponse"></a>
<a id="tocsupdatesubnetchangeprotectionresponse"></a>

```json
{
  "UpdateToken": {},
  "FirewallArn": {},
  "FirewallName": {},
  "SubnetChangeProtection": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UpdateToken|object|false|none|none|
|FirewallArn|object|false|none|none|
|FirewallName|object|false|none|none|
|SubnetChangeProtection|object|false|none|none|

<h2 id="tocS_UpdateSubnetChangeProtectionRequest">UpdateSubnetChangeProtectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesubnetchangeprotectionrequest"></a>
<a id="schema_UpdateSubnetChangeProtectionRequest"></a>
<a id="tocSupdatesubnetchangeprotectionrequest"></a>
<a id="tocsupdatesubnetchangeprotectionrequest"></a>

```json
{
  "UpdateToken": {},
  "FirewallArn": {},
  "FirewallName": {},
  "SubnetChangeProtection": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UpdateToken|object|false|none|none|
|FirewallArn|object|false|none|none|
|FirewallName|object|false|none|none|
|SubnetChangeProtection|object|true|none|none|

<h2 id="tocS_UpdateTLSInspectionConfigurationResponse">UpdateTLSInspectionConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetlsinspectionconfigurationresponse"></a>
<a id="schema_UpdateTLSInspectionConfigurationResponse"></a>
<a id="tocSupdatetlsinspectionconfigurationresponse"></a>
<a id="tocsupdatetlsinspectionconfigurationresponse"></a>

```json
{
  "UpdateToken": {},
  "TLSInspectionConfigurationResponse": {
    "TLSInspectionConfigurationArn": {},
    "TLSInspectionConfigurationName": {},
    "TLSInspectionConfigurationId": {},
    "TLSInspectionConfigurationStatus": {},
    "Description": {},
    "Tags": {},
    "LastModifiedTime": {},
    "NumberOfAssociations": {},
    "EncryptionConfiguration": {
      "KeyId": {},
      "Type": {}
    },
    "Certificates": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UpdateToken|object|true|none|none|
|TLSInspectionConfigurationResponse|object|true|none|none|

<h2 id="tocS_UpdateTLSInspectionConfigurationRequest">UpdateTLSInspectionConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetlsinspectionconfigurationrequest"></a>
<a id="schema_UpdateTLSInspectionConfigurationRequest"></a>
<a id="tocSupdatetlsinspectionconfigurationrequest"></a>
<a id="tocsupdatetlsinspectionconfigurationrequest"></a>

```json
{
  "TLSInspectionConfigurationArn": {},
  "TLSInspectionConfigurationName": {},
  "TLSInspectionConfiguration": {
    "ServerCertificateConfigurations": {}
  },
  "Description": {},
  "EncryptionConfiguration": {
    "KeyId": {},
    "Type": {}
  },
  "UpdateToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TLSInspectionConfigurationArn|object|false|none|none|
|TLSInspectionConfigurationName|object|false|none|none|
|TLSInspectionConfiguration|object|true|none|none|
|Description|object|false|none|none|
|EncryptionConfiguration|object|false|none|none|
|UpdateToken|object|true|none|none|

<h2 id="tocS_PublishMetricAction">PublishMetricAction</h2>
<!-- backwards compatibility -->
<a id="schemapublishmetricaction"></a>
<a id="schema_PublishMetricAction"></a>
<a id="tocSpublishmetricaction"></a>
<a id="tocspublishmetricaction"></a>

```json
{
  "Dimensions": {}
}
```

Stateless inspection criteria that publishes the specified metrics to Amazon CloudWatch for the matching packet. This setting defines a CloudWatch dimension value to be published.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Dimensions|object|true|none|none|

<h2 id="tocS_ActionDefinition">ActionDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaactiondefinition"></a>
<a id="schema_ActionDefinition"></a>
<a id="tocSactiondefinition"></a>
<a id="tocsactiondefinition"></a>

```json
{
  "PublishMetricAction": {
    "Dimensions": {}
  }
}
```

A custom action to use in stateless rule actions settings. This is used in <a>CustomAction</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PublishMetricAction|object|false|none|none|

<h2 id="tocS_ActionName">ActionName</h2>
<!-- backwards compatibility -->
<a id="schemaactionname"></a>
<a id="schema_ActionName"></a>
<a id="tocSactionname"></a>
<a id="tocsactionname"></a>

```json
"string"
```

<h2 id="tocS_AddressDefinition">AddressDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaaddressdefinition"></a>
<a id="schema_AddressDefinition"></a>
<a id="tocSaddressdefinition"></a>
<a id="tocsaddressdefinition"></a>

```json
"string"
```

<h2 id="tocS_Address">Address</h2>
<!-- backwards compatibility -->
<a id="schemaaddress"></a>
<a id="schema_Address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>

```json
{
  "AddressDefinition": {}
}
```

A single IP address specification. This is used in the <a>MatchAttributes</a> source and destination specifications.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AddressDefinition|object|true|none|none|

<h2 id="tocS_Addresses">Addresses</h2>
<!-- backwards compatibility -->
<a id="schemaaddresses"></a>
<a id="schema_Addresses"></a>
<a id="tocSaddresses"></a>
<a id="tocsaddresses"></a>

```json
[
  {
    "AddressDefinition": {}
  }
]
```

<h2 id="tocS_UpdateToken">UpdateToken</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetoken"></a>
<a id="schema_UpdateToken"></a>
<a id="tocSupdatetoken"></a>
<a id="tocsupdatetoken"></a>

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

<h2 id="tocS_ResourceName">ResourceName</h2>
<!-- backwards compatibility -->
<a id="schemaresourcename"></a>
<a id="schema_ResourceName"></a>
<a id="tocSresourcename"></a>
<a id="tocsresourcename"></a>

```json
"string"
```

<h2 id="tocS_SubnetMappings">SubnetMappings</h2>
<!-- backwards compatibility -->
<a id="schemasubnetmappings"></a>
<a id="schema_SubnetMappings"></a>
<a id="tocSsubnetmappings"></a>
<a id="tocssubnetmappings"></a>

```json
[
  {
    "SubnetId": {},
    "IPAddressType": {}
  }
]
```

<h2 id="tocS_AzSubnet">AzSubnet</h2>
<!-- backwards compatibility -->
<a id="schemaazsubnet"></a>
<a id="schema_AzSubnet"></a>
<a id="tocSazsubnet"></a>
<a id="tocsazsubnet"></a>

```json
"string"
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

<h2 id="tocS_AttachmentStatus">AttachmentStatus</h2>
<!-- backwards compatibility -->
<a id="schemaattachmentstatus"></a>
<a id="schema_AttachmentStatus"></a>
<a id="tocSattachmentstatus"></a>
<a id="tocsattachmentstatus"></a>

```json
"CREATING"
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

<h2 id="tocS_Attachment">Attachment</h2>
<!-- backwards compatibility -->
<a id="schemaattachment"></a>
<a id="schema_Attachment"></a>
<a id="tocSattachment"></a>
<a id="tocsattachment"></a>

```json
{
  "SubnetId": {},
  "EndpointId": {},
  "Status": {},
  "StatusMessage": {}
}
```

The configuration and status for a single subnet that you've specified for use by the Network Firewall firewall. This is part of the <a>FirewallStatus</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubnetId|object|false|none|none|
|EndpointId|object|false|none|none|
|Status|object|false|none|none|
|StatusMessage|object|false|none|none|

<h2 id="tocS_AvailabilityZone">AvailabilityZone</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilityzone"></a>
<a id="schema_AvailabilityZone"></a>
<a id="tocSavailabilityzone"></a>
<a id="tocsavailabilityzone"></a>

```json
"string"
```

<h2 id="tocS_AzSubnets">AzSubnets</h2>
<!-- backwards compatibility -->
<a id="schemaazsubnets"></a>
<a id="schema_AzSubnets"></a>
<a id="tocSazsubnets"></a>
<a id="tocsazsubnets"></a>

```json
[
  "string"
]
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

<h2 id="tocS_CIDRCount">CIDRCount</h2>
<!-- backwards compatibility -->
<a id="schemacidrcount"></a>
<a id="schema_CIDRCount"></a>
<a id="tocScidrcount"></a>
<a id="tocscidrcount"></a>

```json
0
```

<h2 id="tocS_IPSetMetadataMap">IPSetMetadataMap</h2>
<!-- backwards compatibility -->
<a id="schemaipsetmetadatamap"></a>
<a id="schema_IPSetMetadataMap"></a>
<a id="tocSipsetmetadatamap"></a>
<a id="tocsipsetmetadatamap"></a>

```json
{
  "property1": {
    "ResolvedCIDRCount": {}
  },
  "property2": {
    "ResolvedCIDRCount": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[IPSetMetadata](#schemaipsetmetadata)|false|none|General information about the IP set.|

<h2 id="tocS_CIDRSummary">CIDRSummary</h2>
<!-- backwards compatibility -->
<a id="schemacidrsummary"></a>
<a id="schema_CIDRSummary"></a>
<a id="tocScidrsummary"></a>
<a id="tocscidrsummary"></a>

```json
{
  "AvailableCIDRCount": {},
  "UtilizedCIDRCount": {},
  "IPSetReferences": {
    "property1": {
      "ResolvedCIDRCount": {}
    },
    "property2": {
      "ResolvedCIDRCount": {}
    }
  }
}
```

Summarizes the CIDR blocks used by the IP set references in a firewall. Network Firewall calculates the number of CIDRs by taking an aggregated count of all CIDRs used by the IP sets you are referencing.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AvailableCIDRCount|object|false|none|none|
|UtilizedCIDRCount|object|false|none|none|
|IPSetReferences|object|false|none|none|

<h2 id="tocS_CapacityUsageSummary">CapacityUsageSummary</h2>
<!-- backwards compatibility -->
<a id="schemacapacityusagesummary"></a>
<a id="schema_CapacityUsageSummary"></a>
<a id="tocScapacityusagesummary"></a>
<a id="tocscapacityusagesummary"></a>

```json
{
  "CIDRs": {
    "AvailableCIDRCount": {},
    "UtilizedCIDRCount": {},
    "IPSetReferences": {
      "property1": {
        "ResolvedCIDRCount": {}
      },
      "property2": {
        "ResolvedCIDRCount": {}
      }
    }
  }
}
```

The capacity usage summary of the resources used by the <a>ReferenceSets</a> in a firewall.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CIDRs|object|false|none|none|

<h2 id="tocS_TlsCertificateData">TlsCertificateData</h2>
<!-- backwards compatibility -->
<a id="schematlscertificatedata"></a>
<a id="schema_TlsCertificateData"></a>
<a id="tocStlscertificatedata"></a>
<a id="tocstlscertificatedata"></a>

```json
{
  "CertificateArn": {},
  "CertificateSerial": {},
  "Status": {},
  "StatusMessage": {}
}
```

Contains metadata about an Certificate Manager certificate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateArn|object|false|none|none|
|CertificateSerial|object|false|none|none|
|Status|object|false|none|none|
|StatusMessage|object|false|none|none|

<h2 id="tocS_Certificates">Certificates</h2>
<!-- backwards compatibility -->
<a id="schemacertificates"></a>
<a id="schema_Certificates"></a>
<a id="tocScertificates"></a>
<a id="tocscertificates"></a>

```json
[
  {
    "CertificateArn": {},
    "CertificateSerial": {},
    "Status": {},
    "StatusMessage": {}
  }
]
```

<h2 id="tocS_CollectionMember_String">CollectionMember_String</h2>
<!-- backwards compatibility -->
<a id="schemacollectionmember_string"></a>
<a id="schema_CollectionMember_String"></a>
<a id="tocScollectionmember_string"></a>
<a id="tocscollectionmember_string"></a>

```json
"string"
```

<h2 id="tocS_ConfigurationSyncState">ConfigurationSyncState</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationsyncstate"></a>
<a id="schema_ConfigurationSyncState"></a>
<a id="tocSconfigurationsyncstate"></a>
<a id="tocsconfigurationsyncstate"></a>

```json
"PENDING"
```

<h2 id="tocS_FirewallPolicy">FirewallPolicy</h2>
<!-- backwards compatibility -->
<a id="schemafirewallpolicy"></a>
<a id="schema_FirewallPolicy"></a>
<a id="tocSfirewallpolicy"></a>
<a id="tocsfirewallpolicy"></a>

```json
{
  "StatelessRuleGroupReferences": {},
  "StatelessDefaultActions": {},
  "StatelessFragmentDefaultActions": {},
  "StatelessCustomActions": {},
  "StatefulRuleGroupReferences": {},
  "StatefulDefaultActions": {},
  "StatefulEngineOptions": {
    "RuleOrder": {},
    "StreamExceptionPolicy": {}
  },
  "TLSInspectionConfigurationArn": {}
}
```

<p>The firewall policy defines the behavior of a firewall using a collection of stateless and stateful rule groups and other settings. You can use one firewall policy for multiple firewalls. </p> <p>This, along with <a>FirewallPolicyResponse</a>, define the policy. You can retrieve all objects for a firewall policy by calling <a>DescribeFirewallPolicy</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StatelessRuleGroupReferences|object|false|none|none|
|StatelessDefaultActions|object|true|none|none|
|StatelessFragmentDefaultActions|object|true|none|none|
|StatelessCustomActions|object|false|none|none|
|StatefulRuleGroupReferences|object|false|none|none|
|StatefulDefaultActions|object|false|none|none|
|StatefulEngineOptions|object|false|none|none|
|TLSInspectionConfigurationArn|object|false|none|none|

<h2 id="tocS_Description">Description</h2>
<!-- backwards compatibility -->
<a id="schemadescription"></a>
<a id="schema_Description"></a>
<a id="tocSdescription"></a>
<a id="tocsdescription"></a>

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

<h2 id="tocS_EncryptionConfiguration">EncryptionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionconfiguration"></a>
<a id="schema_EncryptionConfiguration"></a>
<a id="tocSencryptionconfiguration"></a>
<a id="tocsencryptionconfiguration"></a>

```json
{
  "KeyId": {},
  "Type": {}
}
```

A complex type that contains optional Amazon Web Services Key Management Service (KMS) encryption settings for your Network Firewall resources. Your data is encrypted by default with an Amazon Web Services owned key that Amazon Web Services owns and manages for you. You can use either the Amazon Web Services owned key, or provide your own customer managed key. To learn more about KMS encryption of your Network Firewall resources, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-encryption-at-rest.html">Encryption at rest with Amazon Web Services Key Managment Service</a> in the <i>Network Firewall Developer Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyId|object|false|none|none|
|Type|object|true|none|none|

<h2 id="tocS_FirewallPolicyResponse">FirewallPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemafirewallpolicyresponse"></a>
<a id="schema_FirewallPolicyResponse"></a>
<a id="tocSfirewallpolicyresponse"></a>
<a id="tocsfirewallpolicyresponse"></a>

```json
{
  "FirewallPolicyName": {},
  "FirewallPolicyArn": {},
  "FirewallPolicyId": {},
  "Description": {},
  "FirewallPolicyStatus": {},
  "Tags": {},
  "ConsumedStatelessRuleCapacity": {},
  "ConsumedStatefulRuleCapacity": {},
  "NumberOfAssociations": {},
  "EncryptionConfiguration": {
    "KeyId": {},
    "Type": {}
  },
  "LastModifiedTime": {}
}
```

The high-level properties of a firewall policy. This, along with the <a>FirewallPolicy</a>, define the policy. You can retrieve all objects for a firewall policy by calling <a>DescribeFirewallPolicy</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallPolicyName|object|true|none|none|
|FirewallPolicyArn|object|true|none|none|
|FirewallPolicyId|object|true|none|none|
|Description|object|false|none|none|
|FirewallPolicyStatus|object|false|none|none|
|Tags|object|false|none|none|
|ConsumedStatelessRuleCapacity|object|false|none|none|
|ConsumedStatefulRuleCapacity|object|false|none|none|
|NumberOfAssociations|object|false|none|none|
|EncryptionConfiguration|object|false|none|none|
|LastModifiedTime|object|false|none|none|

<h2 id="tocS_VpcId">VpcId</h2>
<!-- backwards compatibility -->
<a id="schemavpcid"></a>
<a id="schema_VpcId"></a>
<a id="tocSvpcid"></a>
<a id="tocsvpcid"></a>

```json
"string"
```

<h2 id="tocS_Firewall">Firewall</h2>
<!-- backwards compatibility -->
<a id="schemafirewall"></a>
<a id="schema_Firewall"></a>
<a id="tocSfirewall"></a>
<a id="tocsfirewall"></a>

```json
{
  "FirewallName": {},
  "FirewallArn": {},
  "FirewallPolicyArn": {},
  "VpcId": {},
  "SubnetMappings": {},
  "DeleteProtection": {},
  "SubnetChangeProtection": {},
  "FirewallPolicyChangeProtection": {},
  "Description": {},
  "FirewallId": {},
  "Tags": {},
  "EncryptionConfiguration": {
    "KeyId": {},
    "Type": {}
  }
}
```

<p>The firewall defines the configuration settings for an Network Firewall firewall. These settings include the firewall policy, the subnets in your VPC to use for the firewall endpoints, and any tags that are attached to the firewall Amazon Web Services resource. </p> <p>The status of the firewall, for example whether it's ready to filter network traffic, is provided in the corresponding <a>FirewallStatus</a>. You can retrieve both objects by calling <a>DescribeFirewall</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallName|object|false|none|none|
|FirewallArn|object|false|none|none|
|FirewallPolicyArn|object|true|none|none|
|VpcId|object|true|none|none|
|SubnetMappings|object|true|none|none|
|DeleteProtection|object|false|none|none|
|SubnetChangeProtection|object|false|none|none|
|FirewallPolicyChangeProtection|object|false|none|none|
|Description|object|false|none|none|
|FirewallId|object|true|none|none|
|Tags|object|false|none|none|
|EncryptionConfiguration|object|false|none|none|

<h2 id="tocS_FirewallStatus">FirewallStatus</h2>
<!-- backwards compatibility -->
<a id="schemafirewallstatus"></a>
<a id="schema_FirewallStatus"></a>
<a id="tocSfirewallstatus"></a>
<a id="tocsfirewallstatus"></a>

```json
{
  "Status": {},
  "ConfigurationSyncStateSummary": {},
  "SyncStates": {
    "property1": {
      "Attachment": {
        "SubnetId": {},
        "EndpointId": {},
        "Status": {},
        "StatusMessage": {}
      },
      "Config": {
        "property1": {
          "SyncStatus": {},
          "UpdateToken": {}
        },
        "property2": {
          "SyncStatus": {},
          "UpdateToken": {}
        }
      }
    },
    "property2": {
      "Attachment": {
        "SubnetId": {},
        "EndpointId": {},
        "Status": {},
        "StatusMessage": {}
      },
      "Config": {
        "property1": {
          "SyncStatus": {},
          "UpdateToken": {}
        },
        "property2": {
          "SyncStatus": {},
          "UpdateToken": {}
        }
      }
    }
  },
  "CapacityUsageSummary": {
    "CIDRs": {
      "AvailableCIDRCount": {},
      "UtilizedCIDRCount": {},
      "IPSetReferences": {
        "property1": {
          "ResolvedCIDRCount": {}
        },
        "property2": {
          "ResolvedCIDRCount": {}
        }
      }
    }
  }
}
```

Detailed information about the current status of a <a>Firewall</a>. You can retrieve this for a firewall by calling <a>DescribeFirewall</a> and providing the firewall name and ARN.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|true|none|none|
|ConfigurationSyncStateSummary|object|true|none|none|
|SyncStates|object|false|none|none|
|CapacityUsageSummary|object|false|none|none|

<h2 id="tocS_RuleGroup">RuleGroup</h2>
<!-- backwards compatibility -->
<a id="schemarulegroup"></a>
<a id="schema_RuleGroup"></a>
<a id="tocSrulegroup"></a>
<a id="tocsrulegroup"></a>

```json
{
  "RuleVariables": {
    "IPSets": {
      "property1": {
        "Definition": {}
      },
      "property2": {
        "Definition": {}
      }
    },
    "PortSets": {
      "property1": {
        "Definition": {}
      },
      "property2": {
        "Definition": {}
      }
    }
  },
  "ReferenceSets": {
    "IPSetReferences": {
      "property1": {
        "ReferenceArn": {}
      },
      "property2": {
        "ReferenceArn": {}
      }
    }
  },
  "RulesSource": {
    "RulesString": {},
    "RulesSourceList": {
      "Targets": {},
      "TargetTypes": {},
      "GeneratedRulesType": {}
    },
    "StatefulRules": {},
    "StatelessRulesAndCustomActions": {
      "StatelessRules": {},
      "CustomActions": {}
    }
  },
  "StatefulRuleOptions": {
    "RuleOrder": {}
  }
}
```

<p>The object that defines the rules in a rule group. This, along with <a>RuleGroupResponse</a>, define the rule group. You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>. </p> <p>Network Firewall uses a rule group to inspect and control network traffic. You define stateless rule groups to inspect individual packets and you define stateful rule groups to inspect packets in the context of their traffic flow. </p> <p>To use a rule group, you include it by reference in an Network Firewall firewall policy, then you use the policy in a firewall. You can reference a rule group from more than one firewall policy, and you can use a firewall policy in more than one firewall. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleVariables|object|false|none|none|
|ReferenceSets|object|false|none|none|
|RulesSource|object|true|none|none|
|StatefulRuleOptions|object|false|none|none|

<h2 id="tocS_RulesString">RulesString</h2>
<!-- backwards compatibility -->
<a id="schemarulesstring"></a>
<a id="schema_RulesString"></a>
<a id="tocSrulesstring"></a>
<a id="tocsrulesstring"></a>

```json
"string"
```

<h2 id="tocS_RuleGroupType">RuleGroupType</h2>
<!-- backwards compatibility -->
<a id="schemarulegrouptype"></a>
<a id="schema_RuleGroupType"></a>
<a id="tocSrulegrouptype"></a>
<a id="tocsrulegrouptype"></a>

```json
"STATELESS"
```

<h2 id="tocS_RuleCapacity">RuleCapacity</h2>
<!-- backwards compatibility -->
<a id="schemarulecapacity"></a>
<a id="schema_RuleCapacity"></a>
<a id="tocSrulecapacity"></a>
<a id="tocsrulecapacity"></a>

```json
0
```

<h2 id="tocS_SourceMetadata">SourceMetadata</h2>
<!-- backwards compatibility -->
<a id="schemasourcemetadata"></a>
<a id="schema_SourceMetadata"></a>
<a id="tocSsourcemetadata"></a>
<a id="tocssourcemetadata"></a>

```json
{
  "SourceArn": {},
  "SourceUpdateToken": {}
}
```

High-level information about the managed rule group that your own rule group is copied from. You can use the the metadata to track version updates made to the originating rule group. You can retrieve all objects for a rule group by calling <a href="https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DescribeRuleGroup.html">DescribeRuleGroup</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceArn|object|false|none|none|
|SourceUpdateToken|object|false|none|none|

<h2 id="tocS_RuleGroupResponse">RuleGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemarulegroupresponse"></a>
<a id="schema_RuleGroupResponse"></a>
<a id="tocSrulegroupresponse"></a>
<a id="tocsrulegroupresponse"></a>

```json
{
  "RuleGroupArn": {},
  "RuleGroupName": {},
  "RuleGroupId": {},
  "Description": {},
  "Type": {},
  "Capacity": {},
  "RuleGroupStatus": {},
  "Tags": {},
  "ConsumedCapacity": {},
  "NumberOfAssociations": {},
  "EncryptionConfiguration": {
    "KeyId": {},
    "Type": {}
  },
  "SourceMetadata": {
    "SourceArn": {},
    "SourceUpdateToken": {}
  },
  "SnsTopic": {},
  "LastModifiedTime": {}
}
```

The high-level properties of a rule group. This, along with the <a>RuleGroup</a>, define the rule group. You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleGroupArn|object|true|none|none|
|RuleGroupName|object|true|none|none|
|RuleGroupId|object|true|none|none|
|Description|object|false|none|none|
|Type|object|false|none|none|
|Capacity|object|false|none|none|
|RuleGroupStatus|object|false|none|none|
|Tags|object|false|none|none|
|ConsumedCapacity|object|false|none|none|
|NumberOfAssociations|object|false|none|none|
|EncryptionConfiguration|object|false|none|none|
|SourceMetadata|object|false|none|none|
|SnsTopic|object|false|none|none|
|LastModifiedTime|object|false|none|none|

<h2 id="tocS_TLSInspectionConfiguration">TLSInspectionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schematlsinspectionconfiguration"></a>
<a id="schema_TLSInspectionConfiguration"></a>
<a id="tocStlsinspectionconfiguration"></a>
<a id="tocstlsinspectionconfiguration"></a>

```json
{
  "ServerCertificateConfigurations": {}
}
```

<p>The object that defines a TLS inspection configuration. This, along with <a>TLSInspectionConfigurationResponse</a>, define the TLS inspection configuration. You can retrieve all objects for a TLS inspection configuration by calling <a>DescribeTLSInspectionConfiguration</a>. </p> <p>Network Firewall uses a TLS inspection configuration to decrypt traffic. Network Firewall re-encrypts the traffic before sending it to its destination.</p> <p>To use a TLS inspection configuration, you add it to a Network Firewall firewall policy, then you apply the firewall policy to a firewall. Network Firewall acts as a proxy service to decrypt and inspect inbound traffic. You can reference a TLS inspection configuration from more than one firewall policy, and you can use a firewall policy in more than one firewall. For more information about using TLS inspection configurations, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/tls-inspection.html">Decrypting SSL/TLS traffic with TLS inspection configurations</a> in the <i>Network Firewall Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServerCertificateConfigurations|object|false|none|none|

<h2 id="tocS_TLSInspectionConfigurationResponse">TLSInspectionConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schematlsinspectionconfigurationresponse"></a>
<a id="schema_TLSInspectionConfigurationResponse"></a>
<a id="tocStlsinspectionconfigurationresponse"></a>
<a id="tocstlsinspectionconfigurationresponse"></a>

```json
{
  "TLSInspectionConfigurationArn": {},
  "TLSInspectionConfigurationName": {},
  "TLSInspectionConfigurationId": {},
  "TLSInspectionConfigurationStatus": {},
  "Description": {},
  "Tags": {},
  "LastModifiedTime": {},
  "NumberOfAssociations": {},
  "EncryptionConfiguration": {
    "KeyId": {},
    "Type": {}
  },
  "Certificates": {}
}
```

The high-level properties of a TLS inspection configuration. This, along with the <code>TLSInspectionConfiguration</code>, define the TLS inspection configuration. You can retrieve all objects for a TLS inspection configuration by calling <code>DescribeTLSInspectionConfiguration</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TLSInspectionConfigurationArn|object|true|none|none|
|TLSInspectionConfigurationName|object|true|none|none|
|TLSInspectionConfigurationId|object|true|none|none|
|TLSInspectionConfigurationStatus|object|false|none|none|
|Description|object|false|none|none|
|Tags|object|false|none|none|
|LastModifiedTime|object|false|none|none|
|NumberOfAssociations|object|false|none|none|
|EncryptionConfiguration|object|false|none|none|
|Certificates|object|false|none|none|

<h2 id="tocS_CustomAction">CustomAction</h2>
<!-- backwards compatibility -->
<a id="schemacustomaction"></a>
<a id="schema_CustomAction"></a>
<a id="tocScustomaction"></a>
<a id="tocscustomaction"></a>

```json
{
  "ActionName": {},
  "ActionDefinition": {
    "PublishMetricAction": {
      "Dimensions": {}
    }
  }
}
```

<p>An optional, non-standard action to use for stateless packet handling. You can define this in addition to the standard action that you must specify. </p> <p>You define and name the custom actions that you want to be able to use, and then you reference them by name in your actions settings. </p> <p>You can use custom actions in the following places: </p> <ul> <li> <p>In a rule group's <a>StatelessRulesAndCustomActions</a> specification. The custom actions are available for use by name inside the <code>StatelessRulesAndCustomActions</code> where you define them. You can use them for your stateless rule actions to specify what to do with a packet that matches the rule's match attributes. </p> </li> <li> <p>In a <a>FirewallPolicy</a> specification, in <code>StatelessCustomActions</code>. The custom actions are available for use inside the policy where you define them. You can use them for the policy's default stateless actions settings to specify what to do with packets that don't match any of the policy's stateless rules. </p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActionName|object|true|none|none|
|ActionDefinition|object|true|none|none|

<h2 id="tocS_CustomActions">CustomActions</h2>
<!-- backwards compatibility -->
<a id="schemacustomactions"></a>
<a id="schema_CustomActions"></a>
<a id="tocScustomactions"></a>
<a id="tocscustomactions"></a>

```json
[
  {
    "ActionName": {},
    "ActionDefinition": {
      "PublishMetricAction": {
        "Dimensions": {}
      }
    }
  }
]
```

<h2 id="tocS_LoggingConfiguration">LoggingConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaloggingconfiguration"></a>
<a id="schema_LoggingConfiguration"></a>
<a id="tocSloggingconfiguration"></a>
<a id="tocsloggingconfiguration"></a>

```json
{
  "LogDestinationConfigs": {}
}
```

Defines how Network Firewall performs logging for a <a>Firewall</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LogDestinationConfigs|object|true|none|none|

<h2 id="tocS_PolicyString">PolicyString</h2>
<!-- backwards compatibility -->
<a id="schemapolicystring"></a>
<a id="schema_PolicyString"></a>
<a id="tocSpolicystring"></a>
<a id="tocspolicystring"></a>

```json
"string"
```

<h2 id="tocS_StatefulRuleOptions">StatefulRuleOptions</h2>
<!-- backwards compatibility -->
<a id="schemastatefulruleoptions"></a>
<a id="schema_StatefulRuleOptions"></a>
<a id="tocSstatefulruleoptions"></a>
<a id="tocsstatefulruleoptions"></a>

```json
{
  "RuleOrder": {}
}
```

Additional options governing how Network Firewall handles the rule group. You can only use these for stateful rule groups.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleOrder|object|false|none|none|

<h2 id="tocS_LastUpdateTime">LastUpdateTime</h2>
<!-- backwards compatibility -->
<a id="schemalastupdatetime"></a>
<a id="schema_LastUpdateTime"></a>
<a id="tocSlastupdatetime"></a>
<a id="tocslastupdatetime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_Destination">Destination</h2>
<!-- backwards compatibility -->
<a id="schemadestination"></a>
<a id="schema_Destination"></a>
<a id="tocSdestination"></a>
<a id="tocsdestination"></a>

```json
"string"
```

<h2 id="tocS_DimensionValue">DimensionValue</h2>
<!-- backwards compatibility -->
<a id="schemadimensionvalue"></a>
<a id="schema_DimensionValue"></a>
<a id="tocSdimensionvalue"></a>
<a id="tocsdimensionvalue"></a>

```json
"string"
```

<h2 id="tocS_Dimension">Dimension</h2>
<!-- backwards compatibility -->
<a id="schemadimension"></a>
<a id="schema_Dimension"></a>
<a id="tocSdimension"></a>
<a id="tocsdimension"></a>

```json
{
  "Value": {}
}
```

<p>The value to use in an Amazon CloudWatch custom metric dimension. This is used in the <code>PublishMetrics</code> <a>CustomAction</a>. A CloudWatch custom metric dimension is a name/value pair that's part of the identity of a metric. </p> <p>Network Firewall sets the dimension name to <code>CustomAction</code> and you provide the dimension value. </p> <p>For more information about CloudWatch custom metric dimensions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html#usingDimensions">Publishing Custom Metrics</a> in the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html">Amazon CloudWatch User Guide</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Value|object|true|none|none|

<h2 id="tocS_Dimensions">Dimensions</h2>
<!-- backwards compatibility -->
<a id="schemadimensions"></a>
<a id="schema_Dimensions"></a>
<a id="tocSdimensions"></a>
<a id="tocsdimensions"></a>

```json
[
  {
    "Value": {}
  }
]
```

<h2 id="tocS_KeyId">KeyId</h2>
<!-- backwards compatibility -->
<a id="schemakeyid"></a>
<a id="schema_KeyId"></a>
<a id="tocSkeyid"></a>
<a id="tocskeyid"></a>

```json
"string"
```

<h2 id="tocS_EncryptionType">EncryptionType</h2>
<!-- backwards compatibility -->
<a id="schemaencryptiontype"></a>
<a id="schema_EncryptionType"></a>
<a id="tocSencryptiontype"></a>
<a id="tocsencryptiontype"></a>

```json
"CUSTOMER_KMS"
```

<h2 id="tocS_ResourceId">ResourceId</h2>
<!-- backwards compatibility -->
<a id="schemaresourceid"></a>
<a id="schema_ResourceId"></a>
<a id="tocSresourceid"></a>
<a id="tocsresourceid"></a>

```json
"stringstringstringstringstringstring"
```

<h2 id="tocS_FirewallMetadata">FirewallMetadata</h2>
<!-- backwards compatibility -->
<a id="schemafirewallmetadata"></a>
<a id="schema_FirewallMetadata"></a>
<a id="tocSfirewallmetadata"></a>
<a id="tocsfirewallmetadata"></a>

```json
{
  "FirewallName": {},
  "FirewallArn": {}
}
```

High-level information about a firewall, returned by operations like create and describe. You can use the information provided in the metadata to retrieve and manage a firewall.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallName|object|false|none|none|
|FirewallArn|object|false|none|none|

<h2 id="tocS_FirewallPolicyMetadata">FirewallPolicyMetadata</h2>
<!-- backwards compatibility -->
<a id="schemafirewallpolicymetadata"></a>
<a id="schema_FirewallPolicyMetadata"></a>
<a id="tocSfirewallpolicymetadata"></a>
<a id="tocsfirewallpolicymetadata"></a>

```json
{
  "Name": {},
  "Arn": {}
}
```

High-level information about a firewall policy, returned by operations like create and describe. You can use the information provided in the metadata to retrieve and manage a firewall policy. You can retrieve all objects for a firewall policy by calling <a>DescribeFirewallPolicy</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Arn|object|false|none|none|

<h2 id="tocS_FirewallPolicies">FirewallPolicies</h2>
<!-- backwards compatibility -->
<a id="schemafirewallpolicies"></a>
<a id="schema_FirewallPolicies"></a>
<a id="tocSfirewallpolicies"></a>
<a id="tocsfirewallpolicies"></a>

```json
[
  {
    "Name": {},
    "Arn": {}
  }
]
```

<h2 id="tocS_StatelessRuleGroupReferences">StatelessRuleGroupReferences</h2>
<!-- backwards compatibility -->
<a id="schemastatelessrulegroupreferences"></a>
<a id="schema_StatelessRuleGroupReferences"></a>
<a id="tocSstatelessrulegroupreferences"></a>
<a id="tocsstatelessrulegroupreferences"></a>

```json
[
  {
    "ResourceArn": {},
    "Priority": {}
  }
]
```

<h2 id="tocS_StatelessActions">StatelessActions</h2>
<!-- backwards compatibility -->
<a id="schemastatelessactions"></a>
<a id="schema_StatelessActions"></a>
<a id="tocSstatelessactions"></a>
<a id="tocsstatelessactions"></a>

```json
[
  "string"
]
```

<h2 id="tocS_StatefulRuleGroupReferences">StatefulRuleGroupReferences</h2>
<!-- backwards compatibility -->
<a id="schemastatefulrulegroupreferences"></a>
<a id="schema_StatefulRuleGroupReferences"></a>
<a id="tocSstatefulrulegroupreferences"></a>
<a id="tocsstatefulrulegroupreferences"></a>

```json
[
  {
    "ResourceArn": {},
    "Priority": {},
    "Override": {
      "Action": {}
    }
  }
]
```

<h2 id="tocS_StatefulActions">StatefulActions</h2>
<!-- backwards compatibility -->
<a id="schemastatefulactions"></a>
<a id="schema_StatefulActions"></a>
<a id="tocSstatefulactions"></a>
<a id="tocsstatefulactions"></a>

```json
[
  "string"
]
```

<h2 id="tocS_StatefulEngineOptions">StatefulEngineOptions</h2>
<!-- backwards compatibility -->
<a id="schemastatefulengineoptions"></a>
<a id="schema_StatefulEngineOptions"></a>
<a id="tocSstatefulengineoptions"></a>
<a id="tocsstatefulengineoptions"></a>

```json
{
  "RuleOrder": {},
  "StreamExceptionPolicy": {}
}
```

Configuration settings for the handling of the stateful rule groups in a firewall policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleOrder|object|false|none|none|
|StreamExceptionPolicy|object|false|none|none|

<h2 id="tocS_ResourceStatus">ResourceStatus</h2>
<!-- backwards compatibility -->
<a id="schemaresourcestatus"></a>
<a id="schema_ResourceStatus"></a>
<a id="tocSresourcestatus"></a>
<a id="tocsresourcestatus"></a>

```json
"ACTIVE"
```

<h2 id="tocS_NumberOfAssociations">NumberOfAssociations</h2>
<!-- backwards compatibility -->
<a id="schemanumberofassociations"></a>
<a id="schema_NumberOfAssociations"></a>
<a id="tocSnumberofassociations"></a>
<a id="tocsnumberofassociations"></a>

```json
0
```

<h2 id="tocS_FirewallStatusValue">FirewallStatusValue</h2>
<!-- backwards compatibility -->
<a id="schemafirewallstatusvalue"></a>
<a id="schema_FirewallStatusValue"></a>
<a id="tocSfirewallstatusvalue"></a>
<a id="tocsfirewallstatusvalue"></a>

```json
"PROVISIONING"
```

<h2 id="tocS_SyncStates">SyncStates</h2>
<!-- backwards compatibility -->
<a id="schemasyncstates"></a>
<a id="schema_SyncStates"></a>
<a id="tocSsyncstates"></a>
<a id="tocssyncstates"></a>

```json
{
  "property1": {
    "Attachment": {
      "SubnetId": {},
      "EndpointId": {},
      "Status": {},
      "StatusMessage": {}
    },
    "Config": {
      "property1": {
        "SyncStatus": {},
        "UpdateToken": {}
      },
      "property2": {
        "SyncStatus": {},
        "UpdateToken": {}
      }
    }
  },
  "property2": {
    "Attachment": {
      "SubnetId": {},
      "EndpointId": {},
      "Status": {},
      "StatusMessage": {}
    },
    "Config": {
      "property1": {
        "SyncStatus": {},
        "UpdateToken": {}
      },
      "property2": {
        "SyncStatus": {},
        "UpdateToken": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[SyncState](#schemasyncstate)|false|none|<p>The status of the firewall endpoint and firewall policy configuration for a single VPC subnet. </p> <p>For each VPC subnet that you associate with a firewall, Network Firewall does the following: </p> <ul> <li> <p>Instantiates a firewall endpoint in the subnet, ready to take traffic.</p> </li> <li> <p>Configures the endpoint with the current firewall policy settings, to provide the filtering behavior for the endpoint.</p> </li> </ul> <p>When you update a firewall, for example to add a subnet association or change a rule group in the firewall policy, the affected sync states reflect out-of-sync or not ready status until the changes are complete. </p>|

<h2 id="tocS_Firewalls">Firewalls</h2>
<!-- backwards compatibility -->
<a id="schemafirewalls"></a>
<a id="schema_Firewalls"></a>
<a id="tocSfirewalls"></a>
<a id="tocsfirewalls"></a>

```json
[
  {
    "FirewallName": {},
    "FirewallArn": {}
  }
]
```

<h2 id="tocS_TCPFlag">TCPFlag</h2>
<!-- backwards compatibility -->
<a id="schematcpflag"></a>
<a id="schema_TCPFlag"></a>
<a id="tocStcpflag"></a>
<a id="tocstcpflag"></a>

```json
"FIN"
```

<h2 id="tocS_Flags">Flags</h2>
<!-- backwards compatibility -->
<a id="schemaflags"></a>
<a id="schema_Flags"></a>
<a id="tocSflags"></a>
<a id="tocsflags"></a>

```json
[
  "FIN"
]
```

<h2 id="tocS_GeneratedRulesType">GeneratedRulesType</h2>
<!-- backwards compatibility -->
<a id="schemageneratedrulestype"></a>
<a id="schema_GeneratedRulesType"></a>
<a id="tocSgeneratedrulestype"></a>
<a id="tocsgeneratedrulestype"></a>

```json
"ALLOWLIST"
```

<h2 id="tocS_HashMapKey">HashMapKey</h2>
<!-- backwards compatibility -->
<a id="schemahashmapkey"></a>
<a id="schema_HashMapKey"></a>
<a id="tocShashmapkey"></a>
<a id="tocshashmapkey"></a>

```json
"string"
```

<h2 id="tocS_HashMapValue">HashMapValue</h2>
<!-- backwards compatibility -->
<a id="schemahashmapvalue"></a>
<a id="schema_HashMapValue"></a>
<a id="tocShashmapvalue"></a>
<a id="tocshashmapvalue"></a>

```json
"string"
```

<h2 id="tocS_StatefulRuleProtocol">StatefulRuleProtocol</h2>
<!-- backwards compatibility -->
<a id="schemastatefulruleprotocol"></a>
<a id="schema_StatefulRuleProtocol"></a>
<a id="tocSstatefulruleprotocol"></a>
<a id="tocsstatefulruleprotocol"></a>

```json
"IP"
```

<h2 id="tocS_Source">Source</h2>
<!-- backwards compatibility -->
<a id="schemasource"></a>
<a id="schema_Source"></a>
<a id="tocSsource"></a>
<a id="tocssource"></a>

```json
"string"
```

<h2 id="tocS_Port">Port</h2>
<!-- backwards compatibility -->
<a id="schemaport"></a>
<a id="schema_Port"></a>
<a id="tocSport"></a>
<a id="tocsport"></a>

```json
"string"
```

<h2 id="tocS_StatefulRuleDirection">StatefulRuleDirection</h2>
<!-- backwards compatibility -->
<a id="schemastatefulruledirection"></a>
<a id="schema_StatefulRuleDirection"></a>
<a id="tocSstatefulruledirection"></a>
<a id="tocsstatefulruledirection"></a>

```json
"FORWARD"
```

<h2 id="tocS_Header">Header</h2>
<!-- backwards compatibility -->
<a id="schemaheader"></a>
<a id="schema_Header"></a>
<a id="tocSheader"></a>
<a id="tocsheader"></a>

```json
{
  "Protocol": {},
  "Source": {},
  "SourcePort": {},
  "Direction": {},
  "Destination": {},
  "DestinationPort": {}
}
```

The basic rule criteria for Network Firewall to use to inspect packet headers in stateful traffic flow inspection. Traffic flows that match the criteria are a match for the corresponding <a>StatefulRule</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Protocol|object|true|none|none|
|Source|object|true|none|none|
|SourcePort|object|true|none|none|
|Direction|object|true|none|none|
|Destination|object|true|none|none|
|DestinationPort|object|true|none|none|

<h2 id="tocS_IPAddressType">IPAddressType</h2>
<!-- backwards compatibility -->
<a id="schemaipaddresstype"></a>
<a id="schema_IPAddressType"></a>
<a id="tocSipaddresstype"></a>
<a id="tocsipaddresstype"></a>

```json
"DUALSTACK"
```

<h2 id="tocS_VariableDefinitionList">VariableDefinitionList</h2>
<!-- backwards compatibility -->
<a id="schemavariabledefinitionlist"></a>
<a id="schema_VariableDefinitionList"></a>
<a id="tocSvariabledefinitionlist"></a>
<a id="tocsvariabledefinitionlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_IPSet">IPSet</h2>
<!-- backwards compatibility -->
<a id="schemaipset"></a>
<a id="schema_IPSet"></a>
<a id="tocSipset"></a>
<a id="tocsipset"></a>

```json
{
  "Definition": {}
}
```

A list of IP addresses and address ranges, in CIDR notation. This is part of a <a>RuleVariables</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Definition|object|true|none|none|

<h2 id="tocS_IPSetArn">IPSetArn</h2>
<!-- backwards compatibility -->
<a id="schemaipsetarn"></a>
<a id="schema_IPSetArn"></a>
<a id="tocSipsetarn"></a>
<a id="tocsipsetarn"></a>

```json
"string"
```

<h2 id="tocS_IPSetMetadata">IPSetMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaipsetmetadata"></a>
<a id="schema_IPSetMetadata"></a>
<a id="tocSipsetmetadata"></a>
<a id="tocsipsetmetadata"></a>

```json
{
  "ResolvedCIDRCount": {}
}
```

General information about the IP set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResolvedCIDRCount|object|false|none|none|

<h2 id="tocS_IPSetReference">IPSetReference</h2>
<!-- backwards compatibility -->
<a id="schemaipsetreference"></a>
<a id="schema_IPSetReference"></a>
<a id="tocSipsetreference"></a>
<a id="tocsipsetreference"></a>

```json
{
  "ReferenceArn": {}
}
```

<p>Configures one or more IP set references for a Suricata-compatible rule group. This is used in <a>CreateRuleGroup</a> or <a>UpdateRuleGroup</a>. An IP set reference is a rule variable that references resources that you create and manage in another Amazon Web Services service, such as an Amazon VPC prefix list. Network Firewall IP set references enable you to dynamically update the contents of your rules. When you create, update, or delete the resource you are referencing in your rule, Network Firewall automatically updates the rule's content with the changes. For more information about IP set references in Network Firewall, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/rule-groups-ip-set-references">Using IP set references</a> in the <i>Network Firewall Developer Guide</i>.</p> <p> Network Firewall currently supports <a href="https://docs.aws.amazon.com/vpc/latest/userguide/managed-prefix-lists.html">Amazon VPC prefix lists</a> and <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/rule-groups-ip-set-references.html#rule-groups-referencing-resource-groups">resource groups</a> in IP set references. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReferenceArn|object|false|none|none|

<h2 id="tocS_IPSetReferenceMap">IPSetReferenceMap</h2>
<!-- backwards compatibility -->
<a id="schemaipsetreferencemap"></a>
<a id="schema_IPSetReferenceMap"></a>
<a id="tocSipsetreferencemap"></a>
<a id="tocsipsetreferencemap"></a>

```json
{
  "property1": {
    "ReferenceArn": {}
  },
  "property2": {
    "ReferenceArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[IPSetReference](#schemaipsetreference)|false|none|<p>Configures one or more IP set references for a Suricata-compatible rule group. This is used in <a>CreateRuleGroup</a> or <a>UpdateRuleGroup</a>. An IP set reference is a rule variable that references resources that you create and manage in another Amazon Web Services service, such as an Amazon VPC prefix list. Network Firewall IP set references enable you to dynamically update the contents of your rules. When you create, update, or delete the resource you are referencing in your rule, Network Firewall automatically updates the rule's content with the changes. For more information about IP set references in Network Firewall, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/rule-groups-ip-set-references">Using IP set references</a> in the <i>Network Firewall Developer Guide</i>.</p> <p> Network Firewall currently supports <a href="https://docs.aws.amazon.com/vpc/latest/userguide/managed-prefix-lists.html">Amazon VPC prefix lists</a> and <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/rule-groups-ip-set-references.html#rule-groups-referencing-resource-groups">resource groups</a> in IP set references. </p>|

<h2 id="tocS_IPSetReferenceName">IPSetReferenceName</h2>
<!-- backwards compatibility -->
<a id="schemaipsetreferencename"></a>
<a id="schema_IPSetReferenceName"></a>
<a id="tocSipsetreferencename"></a>
<a id="tocsipsetreferencename"></a>

```json
"string"
```

<h2 id="tocS_IPSets">IPSets</h2>
<!-- backwards compatibility -->
<a id="schemaipsets"></a>
<a id="schema_IPSets"></a>
<a id="tocSipsets"></a>
<a id="tocsipsets"></a>

```json
{
  "property1": {
    "Definition": {}
  },
  "property2": {
    "Definition": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[IPSet](#schemaipset)|false|none|A list of IP addresses and address ranges, in CIDR notation. This is part of a <a>RuleVariables</a>. |

<h2 id="tocS_Keyword">Keyword</h2>
<!-- backwards compatibility -->
<a id="schemakeyword"></a>
<a id="schema_Keyword"></a>
<a id="tocSkeyword"></a>
<a id="tocskeyword"></a>

```json
"string"
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

<h2 id="tocS_PaginationMaxResults">PaginationMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemapaginationmaxresults"></a>
<a id="schema_PaginationMaxResults"></a>
<a id="tocSpaginationmaxresults"></a>
<a id="tocspaginationmaxresults"></a>

```json
1
```

<h2 id="tocS_VpcIds">VpcIds</h2>
<!-- backwards compatibility -->
<a id="schemavpcids"></a>
<a id="schema_VpcIds"></a>
<a id="tocSvpcids"></a>
<a id="tocsvpcids"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ResourceManagedStatus">ResourceManagedStatus</h2>
<!-- backwards compatibility -->
<a id="schemaresourcemanagedstatus"></a>
<a id="schema_ResourceManagedStatus"></a>
<a id="tocSresourcemanagedstatus"></a>
<a id="tocsresourcemanagedstatus"></a>

```json
"MANAGED"
```

<h2 id="tocS_ResourceManagedType">ResourceManagedType</h2>
<!-- backwards compatibility -->
<a id="schemaresourcemanagedtype"></a>
<a id="schema_ResourceManagedType"></a>
<a id="tocSresourcemanagedtype"></a>
<a id="tocsresourcemanagedtype"></a>

```json
"AWS_MANAGED_THREAT_SIGNATURES"
```

<h2 id="tocS_RuleGroups">RuleGroups</h2>
<!-- backwards compatibility -->
<a id="schemarulegroups"></a>
<a id="schema_RuleGroups"></a>
<a id="tocSrulegroups"></a>
<a id="tocsrulegroups"></a>

```json
[
  {
    "Name": {},
    "Arn": {}
  }
]
```

<h2 id="tocS_TLSInspectionConfigurations">TLSInspectionConfigurations</h2>
<!-- backwards compatibility -->
<a id="schematlsinspectionconfigurations"></a>
<a id="schema_TLSInspectionConfigurations"></a>
<a id="tocStlsinspectionconfigurations"></a>
<a id="tocstlsinspectionconfigurations"></a>

```json
[
  {
    "Name": {},
    "Arn": {}
  }
]
```

<h2 id="tocS_TagsPaginationMaxResults">TagsPaginationMaxResults</h2>
<!-- backwards compatibility -->
<a id="schematagspaginationmaxresults"></a>
<a id="schema_TagsPaginationMaxResults"></a>
<a id="tocStagspaginationmaxresults"></a>
<a id="tocstagspaginationmaxresults"></a>

```json
0
```

<h2 id="tocS_LogType">LogType</h2>
<!-- backwards compatibility -->
<a id="schemalogtype"></a>
<a id="schema_LogType"></a>
<a id="tocSlogtype"></a>
<a id="tocslogtype"></a>

```json
"ALERT"
```

<h2 id="tocS_LogDestinationType">LogDestinationType</h2>
<!-- backwards compatibility -->
<a id="schemalogdestinationtype"></a>
<a id="schema_LogDestinationType"></a>
<a id="tocSlogdestinationtype"></a>
<a id="tocslogdestinationtype"></a>

```json
"S3"
```

<h2 id="tocS_LogDestinationMap">LogDestinationMap</h2>
<!-- backwards compatibility -->
<a id="schemalogdestinationmap"></a>
<a id="schema_LogDestinationMap"></a>
<a id="tocSlogdestinationmap"></a>
<a id="tocslogdestinationmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[HashMapValue](#schemahashmapvalue)|false|none|none|

<h2 id="tocS_LogDestinationConfig">LogDestinationConfig</h2>
<!-- backwards compatibility -->
<a id="schemalogdestinationconfig"></a>
<a id="schema_LogDestinationConfig"></a>
<a id="tocSlogdestinationconfig"></a>
<a id="tocslogdestinationconfig"></a>

```json
{
  "LogType": {},
  "LogDestinationType": {},
  "LogDestination": {
    "property1": "string",
    "property2": "string"
  }
}
```

<p>Defines where Network Firewall sends logs for the firewall for one log type. This is used in <a>LoggingConfiguration</a>. You can send each type of log to an Amazon S3 bucket, a CloudWatch log group, or a Kinesis Data Firehose delivery stream.</p> <p>Network Firewall generates logs for stateful rule groups. You can save alert and flow log types. The stateful rules engine records flow logs for all network traffic that it receives. It records alert logs for traffic that matches stateful rules that have the rule action set to <code>DROP</code> or <code>ALERT</code>. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LogType|object|true|none|none|
|LogDestinationType|object|true|none|none|
|LogDestination|object|true|none|none|

<h2 id="tocS_LogDestinationConfigs">LogDestinationConfigs</h2>
<!-- backwards compatibility -->
<a id="schemalogdestinationconfigs"></a>
<a id="schema_LogDestinationConfigs"></a>
<a id="tocSlogdestinationconfigs"></a>
<a id="tocslogdestinationconfigs"></a>

```json
[
  {
    "LogType": {},
    "LogDestinationType": {},
    "LogDestination": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

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

<h2 id="tocS_ProtocolNumbers">ProtocolNumbers</h2>
<!-- backwards compatibility -->
<a id="schemaprotocolnumbers"></a>
<a id="schema_ProtocolNumbers"></a>
<a id="tocSprotocolnumbers"></a>
<a id="tocsprotocolnumbers"></a>

```json
[
  0
]
```

<h2 id="tocS_TCPFlags">TCPFlags</h2>
<!-- backwards compatibility -->
<a id="schematcpflags"></a>
<a id="schema_TCPFlags"></a>
<a id="tocStcpflags"></a>
<a id="tocstcpflags"></a>

```json
[
  {
    "Flags": {},
    "Masks": {}
  }
]
```

<h2 id="tocS_MatchAttributes">MatchAttributes</h2>
<!-- backwards compatibility -->
<a id="schemamatchattributes"></a>
<a id="schema_MatchAttributes"></a>
<a id="tocSmatchattributes"></a>
<a id="tocsmatchattributes"></a>

```json
{
  "Sources": {},
  "Destinations": {},
  "SourcePorts": {},
  "DestinationPorts": {},
  "Protocols": {},
  "TCPFlags": {}
}
```

Criteria for Network Firewall to use to inspect an individual packet in stateless rule inspection. Each match attributes set can include one or more items such as IP address, CIDR range, port number, protocol, and TCP flags.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Sources|object|false|none|none|
|Destinations|object|false|none|none|
|SourcePorts|object|false|none|none|
|DestinationPorts|object|false|none|none|
|Protocols|object|false|none|none|
|TCPFlags|object|false|none|none|

<h2 id="tocS_OverrideAction">OverrideAction</h2>
<!-- backwards compatibility -->
<a id="schemaoverrideaction"></a>
<a id="schema_OverrideAction"></a>
<a id="tocSoverrideaction"></a>
<a id="tocsoverrideaction"></a>

```json
"DROP_TO_ALERT"
```

<h2 id="tocS_PerObjectSyncStatus">PerObjectSyncStatus</h2>
<!-- backwards compatibility -->
<a id="schemaperobjectsyncstatus"></a>
<a id="schema_PerObjectSyncStatus"></a>
<a id="tocSperobjectsyncstatus"></a>
<a id="tocsperobjectsyncstatus"></a>

```json
"PENDING"
```

<h2 id="tocS_PerObjectStatus">PerObjectStatus</h2>
<!-- backwards compatibility -->
<a id="schemaperobjectstatus"></a>
<a id="schema_PerObjectStatus"></a>
<a id="tocSperobjectstatus"></a>
<a id="tocsperobjectstatus"></a>

```json
{
  "SyncStatus": {},
  "UpdateToken": {}
}
```

Provides configuration status for a single policy or rule group that is used for a firewall endpoint. Network Firewall provides each endpoint with the rules that are configured in the firewall policy. Each time you add a subnet or modify the associated firewall policy, Network Firewall synchronizes the rules in the endpoint, so it can properly filter network traffic. This is part of a <a>SyncState</a> for a firewall.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SyncStatus|object|false|none|none|
|UpdateToken|object|false|none|none|

<h2 id="tocS_PortRangeBound">PortRangeBound</h2>
<!-- backwards compatibility -->
<a id="schemaportrangebound"></a>
<a id="schema_PortRangeBound"></a>
<a id="tocSportrangebound"></a>
<a id="tocsportrangebound"></a>

```json
0
```

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

A single port range specification. This is used for source and destination port ranges in the stateless rule <a>MatchAttributes</a>, <code>SourcePorts</code>, and <code>DestinationPorts</code> settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FromPort|object|true|none|none|
|ToPort|object|true|none|none|

<h2 id="tocS_PortSet">PortSet</h2>
<!-- backwards compatibility -->
<a id="schemaportset"></a>
<a id="schema_PortSet"></a>
<a id="tocSportset"></a>
<a id="tocsportset"></a>

```json
{
  "Definition": {}
}
```

A set of port ranges for use in the rules in a rule group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Definition|object|false|none|none|

<h2 id="tocS_PortSets">PortSets</h2>
<!-- backwards compatibility -->
<a id="schemaportsets"></a>
<a id="schema_PortSets"></a>
<a id="tocSportsets"></a>
<a id="tocsportsets"></a>

```json
{
  "property1": {
    "Definition": {}
  },
  "property2": {
    "Definition": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[PortSet](#schemaportset)|false|none|A set of port ranges for use in the rules in a rule group. |

<h2 id="tocS_Priority">Priority</h2>
<!-- backwards compatibility -->
<a id="schemapriority"></a>
<a id="schema_Priority"></a>
<a id="tocSpriority"></a>
<a id="tocspriority"></a>

```json
1
```

<h2 id="tocS_ProtocolNumber">ProtocolNumber</h2>
<!-- backwards compatibility -->
<a id="schemaprotocolnumber"></a>
<a id="schema_ProtocolNumber"></a>
<a id="tocSprotocolnumber"></a>
<a id="tocsprotocolnumber"></a>

```json
0
```

<h2 id="tocS_ReferenceSets">ReferenceSets</h2>
<!-- backwards compatibility -->
<a id="schemareferencesets"></a>
<a id="schema_ReferenceSets"></a>
<a id="tocSreferencesets"></a>
<a id="tocsreferencesets"></a>

```json
{
  "IPSetReferences": {
    "property1": {
      "ReferenceArn": {}
    },
    "property2": {
      "ReferenceArn": {}
    }
  }
}
```

Contains a set of IP set references.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IPSetReferences|object|false|none|none|

<h2 id="tocS_RuleDefinition">RuleDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaruledefinition"></a>
<a id="schema_RuleDefinition"></a>
<a id="tocSruledefinition"></a>
<a id="tocsruledefinition"></a>

```json
{
  "MatchAttributes": {
    "Sources": {},
    "Destinations": {},
    "SourcePorts": {},
    "DestinationPorts": {},
    "Protocols": {},
    "TCPFlags": {}
  },
  "Actions": {}
}
```

The inspection criteria and action for a single stateless rule. Network Firewall inspects each packet for the specified matching criteria. When a packet matches the criteria, Network Firewall performs the rule's actions on the packet.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MatchAttributes|object|true|none|none|
|Actions|object|true|none|none|

<h2 id="tocS_RuleVariables">RuleVariables</h2>
<!-- backwards compatibility -->
<a id="schemarulevariables"></a>
<a id="schema_RuleVariables"></a>
<a id="tocSrulevariables"></a>
<a id="tocsrulevariables"></a>

```json
{
  "IPSets": {
    "property1": {
      "Definition": {}
    },
    "property2": {
      "Definition": {}
    }
  },
  "PortSets": {
    "property1": {
      "Definition": {}
    },
    "property2": {
      "Definition": {}
    }
  }
}
```

Settings that are available for use in the rules in the <a>RuleGroup</a> where this is defined.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IPSets|object|false|none|none|
|PortSets|object|false|none|none|

<h2 id="tocS_RulesSource">RulesSource</h2>
<!-- backwards compatibility -->
<a id="schemarulessource"></a>
<a id="schema_RulesSource"></a>
<a id="tocSrulessource"></a>
<a id="tocsrulessource"></a>

```json
{
  "RulesString": {},
  "RulesSourceList": {
    "Targets": {},
    "TargetTypes": {},
    "GeneratedRulesType": {}
  },
  "StatefulRules": {},
  "StatelessRulesAndCustomActions": {
    "StatelessRules": {},
    "CustomActions": {}
  }
}
```

The stateless or stateful rules definitions for use in a single rule group. Each rule group requires a single <code>RulesSource</code>. You can use an instance of this for either stateless rules or stateful rules.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RulesString|object|false|none|none|
|RulesSourceList|object|false|none|none|
|StatefulRules|object|false|none|none|
|StatelessRulesAndCustomActions|object|false|none|none|

<h2 id="tocS_RuleGroupMetadata">RuleGroupMetadata</h2>
<!-- backwards compatibility -->
<a id="schemarulegroupmetadata"></a>
<a id="schema_RuleGroupMetadata"></a>
<a id="tocSrulegroupmetadata"></a>
<a id="tocsrulegroupmetadata"></a>

```json
{
  "Name": {},
  "Arn": {}
}
```

High-level information about a rule group, returned by <a>ListRuleGroups</a>. You can use the information provided in the metadata to retrieve and manage a rule group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Arn|object|false|none|none|

<h2 id="tocS_Settings">Settings</h2>
<!-- backwards compatibility -->
<a id="schemasettings"></a>
<a id="schema_Settings"></a>
<a id="tocSsettings"></a>
<a id="tocssettings"></a>

```json
[
  "string"
]
```

<h2 id="tocS_RuleOption">RuleOption</h2>
<!-- backwards compatibility -->
<a id="schemaruleoption"></a>
<a id="schema_RuleOption"></a>
<a id="tocSruleoption"></a>
<a id="tocsruleoption"></a>

```json
{
  "Keyword": {},
  "Settings": {}
}
```

Additional settings for a stateful rule. This is part of the <a>StatefulRule</a> configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Keyword|object|true|none|none|
|Settings|object|false|none|none|

<h2 id="tocS_RuleOptions">RuleOptions</h2>
<!-- backwards compatibility -->
<a id="schemaruleoptions"></a>
<a id="schema_RuleOptions"></a>
<a id="tocSruleoptions"></a>
<a id="tocsruleoptions"></a>

```json
[
  {
    "Keyword": {},
    "Settings": {}
  }
]
```

<h2 id="tocS_RuleOrder">RuleOrder</h2>
<!-- backwards compatibility -->
<a id="schemaruleorder"></a>
<a id="schema_RuleOrder"></a>
<a id="tocSruleorder"></a>
<a id="tocsruleorder"></a>

```json
"DEFAULT_ACTION_ORDER"
```

<h2 id="tocS_RuleTargets">RuleTargets</h2>
<!-- backwards compatibility -->
<a id="schemaruletargets"></a>
<a id="schema_RuleTargets"></a>
<a id="tocSruletargets"></a>
<a id="tocsruletargets"></a>

```json
[
  "string"
]
```

<h2 id="tocS_RuleVariableName">RuleVariableName</h2>
<!-- backwards compatibility -->
<a id="schemarulevariablename"></a>
<a id="schema_RuleVariableName"></a>
<a id="tocSrulevariablename"></a>
<a id="tocsrulevariablename"></a>

```json
"string"
```

<h2 id="tocS_RulesSourceList">RulesSourceList</h2>
<!-- backwards compatibility -->
<a id="schemarulessourcelist"></a>
<a id="schema_RulesSourceList"></a>
<a id="tocSrulessourcelist"></a>
<a id="tocsrulessourcelist"></a>

```json
{
  "Targets": {},
  "TargetTypes": {},
  "GeneratedRulesType": {}
}
```

<p>Stateful inspection criteria for a domain list rule group. </p> <p>For HTTPS traffic, domain filtering is SNI-based. It uses the server name indicator extension of the TLS handshake.</p> <p>By default, Network Firewall domain list inspection only includes traffic coming from the VPC where you deploy the firewall. To inspect traffic from IP addresses outside of the deployment VPC, you set the <code>HOME_NET</code> rule variable to include the CIDR range of the deployment VPC plus the other CIDR ranges. For more information, see <a>RuleVariables</a> in this guide and <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/stateful-rule-groups-domain-names.html">Stateful domain list rule groups in Network Firewall</a> in the <i>Network Firewall Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Targets|object|true|none|none|
|TargetTypes|object|true|none|none|
|GeneratedRulesType|object|true|none|none|

<h2 id="tocS_StatefulRules">StatefulRules</h2>
<!-- backwards compatibility -->
<a id="schemastatefulrules"></a>
<a id="schema_StatefulRules"></a>
<a id="tocSstatefulrules"></a>
<a id="tocsstatefulrules"></a>

```json
[
  {
    "Action": {},
    "Header": {
      "Protocol": {},
      "Source": {},
      "SourcePort": {},
      "Direction": {},
      "Destination": {},
      "DestinationPort": {}
    },
    "RuleOptions": {}
  }
]
```

<h2 id="tocS_StatelessRulesAndCustomActions">StatelessRulesAndCustomActions</h2>
<!-- backwards compatibility -->
<a id="schemastatelessrulesandcustomactions"></a>
<a id="schema_StatelessRulesAndCustomActions"></a>
<a id="tocSstatelessrulesandcustomactions"></a>
<a id="tocsstatelessrulesandcustomactions"></a>

```json
{
  "StatelessRules": {},
  "CustomActions": {}
}
```

Stateless inspection criteria. Each stateless rule group uses exactly one of these data types to define its stateless rules.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StatelessRules|object|true|none|none|
|CustomActions|object|false|none|none|

<h2 id="tocS_TargetTypes">TargetTypes</h2>
<!-- backwards compatibility -->
<a id="schematargettypes"></a>
<a id="schema_TargetTypes"></a>
<a id="tocStargettypes"></a>
<a id="tocstargettypes"></a>

```json
[
  "TLS_SNI"
]
```

<h2 id="tocS_ServerCertificate">ServerCertificate</h2>
<!-- backwards compatibility -->
<a id="schemaservercertificate"></a>
<a id="schema_ServerCertificate"></a>
<a id="tocSservercertificate"></a>
<a id="tocsservercertificate"></a>

```json
{
  "ResourceArn": {}
}
```

Any Certificate Manager Secure Sockets Layer/Transport Layer Security (SSL/TLS) server certificate that's associated with a <a>ServerCertificateConfiguration</a> used in a <a>TLSInspectionConfiguration</a>. You must request or import a SSL/TLS certificate into ACM for each domain Network Firewall needs to decrypt and inspect. Network Firewall uses the SSL/TLS certificates to decrypt specified inbound SSL/TLS traffic going to your firewall. For information about working with certificates in Certificate Manager, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-public.html">Request a public certificate </a> or <a href="https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html">Importing certificates</a> in the <i>Certificate Manager User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|false|none|none|

<h2 id="tocS_ServerCertificates">ServerCertificates</h2>
<!-- backwards compatibility -->
<a id="schemaservercertificates"></a>
<a id="schema_ServerCertificates"></a>
<a id="tocSservercertificates"></a>
<a id="tocsservercertificates"></a>

```json
[
  {
    "ResourceArn": {}
  }
]
```

<h2 id="tocS_ServerCertificateScopes">ServerCertificateScopes</h2>
<!-- backwards compatibility -->
<a id="schemaservercertificatescopes"></a>
<a id="schema_ServerCertificateScopes"></a>
<a id="tocSservercertificatescopes"></a>
<a id="tocsservercertificatescopes"></a>

```json
[
  {
    "Sources": {},
    "Destinations": {},
    "SourcePorts": {},
    "DestinationPorts": {},
    "Protocols": {}
  }
]
```

<h2 id="tocS_ServerCertificateConfiguration">ServerCertificateConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaservercertificateconfiguration"></a>
<a id="schema_ServerCertificateConfiguration"></a>
<a id="tocSservercertificateconfiguration"></a>
<a id="tocsservercertificateconfiguration"></a>

```json
{
  "ServerCertificates": {},
  "Scopes": {}
}
```

<p>Configures the associated Certificate Manager Secure Sockets Layer/Transport Layer Security (SSL/TLS) server certificates and scope settings Network Firewall uses to decrypt traffic in a <a>TLSInspectionConfiguration</a>. For information about working with SSL/TLS certificates for TLS inspection, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/tls-inspection-certificate-requirements.html"> Requirements for using SSL/TLS server certficiates with TLS inspection configurations</a> in the <i>Network Firewall Developer Guide</i>.</p> <note> <p>If a server certificate that's associated with your <a>TLSInspectionConfiguration</a> is revoked, deleted, or expired it can result in client-side TLS errors.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServerCertificates|object|false|none|none|
|Scopes|object|false|none|none|

<h2 id="tocS_ServerCertificateConfigurations">ServerCertificateConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemaservercertificateconfigurations"></a>
<a id="schema_ServerCertificateConfigurations"></a>
<a id="tocSservercertificateconfigurations"></a>
<a id="tocsservercertificateconfigurations"></a>

```json
[
  {
    "ServerCertificates": {},
    "Scopes": {}
  }
]
```

<h2 id="tocS_ServerCertificateScope">ServerCertificateScope</h2>
<!-- backwards compatibility -->
<a id="schemaservercertificatescope"></a>
<a id="schema_ServerCertificateScope"></a>
<a id="tocSservercertificatescope"></a>
<a id="tocsservercertificatescope"></a>

```json
{
  "Sources": {},
  "Destinations": {},
  "SourcePorts": {},
  "DestinationPorts": {},
  "Protocols": {}
}
```

Settings that define the Secure Sockets Layer/Transport Layer Security (SSL/TLS) traffic that Network Firewall should decrypt for inspection by the stateful rule engine.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Sources|object|false|none|none|
|Destinations|object|false|none|none|
|SourcePorts|object|false|none|none|
|DestinationPorts|object|false|none|none|
|Protocols|object|false|none|none|

<h2 id="tocS_Setting">Setting</h2>
<!-- backwards compatibility -->
<a id="schemasetting"></a>
<a id="schema_Setting"></a>
<a id="tocSsetting"></a>
<a id="tocssetting"></a>

```json
"string"
```

<h2 id="tocS_StatefulAction">StatefulAction</h2>
<!-- backwards compatibility -->
<a id="schemastatefulaction"></a>
<a id="schema_StatefulAction"></a>
<a id="tocSstatefulaction"></a>
<a id="tocsstatefulaction"></a>

```json
"PASS"
```

<h2 id="tocS_StreamExceptionPolicy">StreamExceptionPolicy</h2>
<!-- backwards compatibility -->
<a id="schemastreamexceptionpolicy"></a>
<a id="schema_StreamExceptionPolicy"></a>
<a id="tocSstreamexceptionpolicy"></a>
<a id="tocsstreamexceptionpolicy"></a>

```json
"DROP"
```

<h2 id="tocS_StatefulRule">StatefulRule</h2>
<!-- backwards compatibility -->
<a id="schemastatefulrule"></a>
<a id="schema_StatefulRule"></a>
<a id="tocSstatefulrule"></a>
<a id="tocsstatefulrule"></a>

```json
{
  "Action": {},
  "Header": {
    "Protocol": {},
    "Source": {},
    "SourcePort": {},
    "Direction": {},
    "Destination": {},
    "DestinationPort": {}
  },
  "RuleOptions": {}
}
```

A single Suricata rules specification, for use in a stateful rule group. Use this option to specify a simple Suricata rule with protocol, source and destination, ports, direction, and rule options. For information about the Suricata <code>Rules</code> format, see <a href="https://suricata.readthedocs.iorules/intro.html#">Rules Format</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Action|object|true|none|none|
|Header|object|true|none|none|
|RuleOptions|object|true|none|none|

<h2 id="tocS_StatefulRuleGroupOverride">StatefulRuleGroupOverride</h2>
<!-- backwards compatibility -->
<a id="schemastatefulrulegroupoverride"></a>
<a id="schema_StatefulRuleGroupOverride"></a>
<a id="tocSstatefulrulegroupoverride"></a>
<a id="tocsstatefulrulegroupoverride"></a>

```json
{
  "Action": {}
}
```

The setting that allows the policy owner to change the behavior of the rule group within a policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Action|object|false|none|none|

<h2 id="tocS_StatefulRuleGroupReference">StatefulRuleGroupReference</h2>
<!-- backwards compatibility -->
<a id="schemastatefulrulegroupreference"></a>
<a id="schema_StatefulRuleGroupReference"></a>
<a id="tocSstatefulrulegroupreference"></a>
<a id="tocsstatefulrulegroupreference"></a>

```json
{
  "ResourceArn": {},
  "Priority": {},
  "Override": {
    "Action": {}
  }
}
```

Identifier for a single stateful rule group, used in a firewall policy to refer to a rule group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|Priority|object|false|none|none|
|Override|object|false|none|none|

<h2 id="tocS_StatelessRule">StatelessRule</h2>
<!-- backwards compatibility -->
<a id="schemastatelessrule"></a>
<a id="schema_StatelessRule"></a>
<a id="tocSstatelessrule"></a>
<a id="tocsstatelessrule"></a>

```json
{
  "RuleDefinition": {
    "MatchAttributes": {
      "Sources": {},
      "Destinations": {},
      "SourcePorts": {},
      "DestinationPorts": {},
      "Protocols": {},
      "TCPFlags": {}
    },
    "Actions": {}
  },
  "Priority": {}
}
```

A single stateless rule. This is used in <a>StatelessRulesAndCustomActions</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleDefinition|object|true|none|none|
|Priority|object|true|none|none|

<h2 id="tocS_StatelessRuleGroupReference">StatelessRuleGroupReference</h2>
<!-- backwards compatibility -->
<a id="schemastatelessrulegroupreference"></a>
<a id="schema_StatelessRuleGroupReference"></a>
<a id="tocSstatelessrulegroupreference"></a>
<a id="tocsstatelessrulegroupreference"></a>

```json
{
  "ResourceArn": {},
  "Priority": {}
}
```

Identifier for a single stateless rule group, used in a firewall policy to refer to the rule group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|Priority|object|true|none|none|

<h2 id="tocS_StatelessRules">StatelessRules</h2>
<!-- backwards compatibility -->
<a id="schemastatelessrules"></a>
<a id="schema_StatelessRules"></a>
<a id="tocSstatelessrules"></a>
<a id="tocsstatelessrules"></a>

```json
[
  {
    "RuleDefinition": {
      "MatchAttributes": {
        "Sources": {},
        "Destinations": {},
        "SourcePorts": {},
        "DestinationPorts": {},
        "Protocols": {},
        "TCPFlags": {}
      },
      "Actions": {}
    },
    "Priority": {}
  }
]
```

<h2 id="tocS_StatusReason">StatusReason</h2>
<!-- backwards compatibility -->
<a id="schemastatusreason"></a>
<a id="schema_StatusReason"></a>
<a id="tocSstatusreason"></a>
<a id="tocsstatusreason"></a>

```json
"string"
```

<h2 id="tocS_SubnetMapping">SubnetMapping</h2>
<!-- backwards compatibility -->
<a id="schemasubnetmapping"></a>
<a id="schema_SubnetMapping"></a>
<a id="tocSsubnetmapping"></a>
<a id="tocssubnetmapping"></a>

```json
{
  "SubnetId": {},
  "IPAddressType": {}
}
```

The ID for a subnet that you want to associate with the firewall. This is used with <a>CreateFirewall</a> and <a>AssociateSubnets</a>. Network Firewall creates an instance of the associated firewall in each subnet that you specify, to filter traffic in the subnet's Availability Zone.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubnetId|object|true|none|none|
|IPAddressType|object|false|none|none|

<h2 id="tocS_SyncStateConfig">SyncStateConfig</h2>
<!-- backwards compatibility -->
<a id="schemasyncstateconfig"></a>
<a id="schema_SyncStateConfig"></a>
<a id="tocSsyncstateconfig"></a>
<a id="tocssyncstateconfig"></a>

```json
{
  "property1": {
    "SyncStatus": {},
    "UpdateToken": {}
  },
  "property2": {
    "SyncStatus": {},
    "UpdateToken": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[PerObjectStatus](#schemaperobjectstatus)|false|none|Provides configuration status for a single policy or rule group that is used for a firewall endpoint. Network Firewall provides each endpoint with the rules that are configured in the firewall policy. Each time you add a subnet or modify the associated firewall policy, Network Firewall synchronizes the rules in the endpoint, so it can properly filter network traffic. This is part of a <a>SyncState</a> for a firewall.|

<h2 id="tocS_SyncState">SyncState</h2>
<!-- backwards compatibility -->
<a id="schemasyncstate"></a>
<a id="schema_SyncState"></a>
<a id="tocSsyncstate"></a>
<a id="tocssyncstate"></a>

```json
{
  "Attachment": {
    "SubnetId": {},
    "EndpointId": {},
    "Status": {},
    "StatusMessage": {}
  },
  "Config": {
    "property1": {
      "SyncStatus": {},
      "UpdateToken": {}
    },
    "property2": {
      "SyncStatus": {},
      "UpdateToken": {}
    }
  }
}
```

<p>The status of the firewall endpoint and firewall policy configuration for a single VPC subnet. </p> <p>For each VPC subnet that you associate with a firewall, Network Firewall does the following: </p> <ul> <li> <p>Instantiates a firewall endpoint in the subnet, ready to take traffic.</p> </li> <li> <p>Configures the endpoint with the current firewall policy settings, to provide the filtering behavior for the endpoint.</p> </li> </ul> <p>When you update a firewall, for example to add a subnet association or change a rule group in the firewall policy, the affected sync states reflect out-of-sync or not ready status until the changes are complete. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attachment|object|false|none|none|
|Config|object|false|none|none|

<h2 id="tocS_TCPFlagField">TCPFlagField</h2>
<!-- backwards compatibility -->
<a id="schematcpflagfield"></a>
<a id="schema_TCPFlagField"></a>
<a id="tocStcpflagfield"></a>
<a id="tocstcpflagfield"></a>

```json
{
  "Flags": {},
  "Masks": {}
}
```

TCP flags and masks to inspect packets for, used in stateless rules <a>MatchAttributes</a> settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Flags|object|true|none|none|
|Masks|object|false|none|none|

<h2 id="tocS_TLSInspectionConfigurationMetadata">TLSInspectionConfigurationMetadata</h2>
<!-- backwards compatibility -->
<a id="schematlsinspectionconfigurationmetadata"></a>
<a id="schema_TLSInspectionConfigurationMetadata"></a>
<a id="tocStlsinspectionconfigurationmetadata"></a>
<a id="tocstlsinspectionconfigurationmetadata"></a>

```json
{
  "Name": {},
  "Arn": {}
}
```

High-level information about a TLS inspection configuration, returned by <code>ListTLSInspectionConfigurations</code>. You can use the information provided in the metadata to retrieve and manage a TLS configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Arn|object|false|none|none|

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

A key:value pair associated with an Amazon Web Services resource. The key:value pair can be anything you define. Typically, the tag key represents a category (such as "environment") and the tag value represents a specific value within that category (such as "test," "development," or "production"). You can add up to 50 tags to each Amazon Web Services resource.

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

<h2 id="tocS_TargetType">TargetType</h2>
<!-- backwards compatibility -->
<a id="schematargettype"></a>
<a id="schema_TargetType"></a>
<a id="tocStargettype"></a>
<a id="tocstargettype"></a>

```json
"TLS_SNI"
```

<h2 id="tocS_VariableDefinition">VariableDefinition</h2>
<!-- backwards compatibility -->
<a id="schemavariabledefinition"></a>
<a id="schema_VariableDefinition"></a>
<a id="tocSvariabledefinition"></a>
<a id="tocsvariabledefinition"></a>

```json
"string"
```
