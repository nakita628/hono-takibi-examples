<h1 id="aws-wafv2">AWS WAFV2 v2019-07-29</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>WAF</fullname> <note> <p>This is the latest version of the <b>WAF</b> API, released in November, 2019. The names of the entities that you use to access this API, like endpoints and namespaces, all have the versioning information added, like "V2" or "v2", to distinguish from the prior version. We recommend migrating your resources to this version, because it has a number of significant improvements.</p> <p>If you used WAF prior to this release, you can't use this WAFV2 API to access any WAF resources that you created before. You can access your old rules, web ACLs, and other WAF resources only through the WAF Classic APIs. The WAF Classic APIs have retained the prior names, endpoints, and namespaces. </p> <p>For information, including how to migrate your WAF resources to this version, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">WAF Developer Guide</a>. </p> </note> <p>WAF is a web application firewall that lets you monitor the HTTP and HTTPS requests that are forwarded to an Amazon CloudFront distribution, Amazon API Gateway REST API, Application Load Balancer, AppSync GraphQL API, Amazon Cognito user pool, or App Runner service. WAF also lets you control access to your content, to protect the Amazon Web Services resource that WAF is monitoring. Based on conditions that you specify, such as the IP addresses that requests originate from or the values of query strings, the protected resource responds to requests with either the requested content, an HTTP 403 status code (Forbidden), or with a custom response. </p> <p>This API guide is for developers who need detailed information about WAF API actions, data types, and errors. For detailed information about WAF features and guidance for configuring and using WAF, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html">WAF Developer Guide</a>.</p> <p>You can make calls using the endpoints listed in <a href="https://docs.aws.amazon.com/general/latest/gr/waf.html">WAF endpoints and quotas</a>. </p> <ul> <li> <p>For regional applications, you can use any of the endpoints in the list. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, or an App Runner service. </p> </li> <li> <p>For Amazon CloudFront applications, you must use the API endpoint listed for US East (N. Virginia): us-east-1.</p> </li> </ul> <p>Alternatively, you can use one of the Amazon Web Services SDKs to access an API that's tailored to the programming language or platform that you're using. For more information, see <a href="http://aws.amazon.com/tools/#SDKs">Amazon Web Services SDKs</a>.</p> <p>We currently provide two versions of the WAF API: this API and the prior versions, the classic WAF APIs. This new API provides the same functionality as the older versions, with the following major improvements:</p> <ul> <li> <p>You use one API for both global and regional applications. Where you need to distinguish the scope, you specify a <code>Scope</code> parameter and set it to <code>CLOUDFRONT</code> or <code>REGIONAL</code>. </p> </li> <li> <p>You can define a web ACL or rule group with a single call, and update it with a single call. You define all rule specifications in JSON format, and pass them to your rule group or web ACL calls.</p> </li> <li> <p>The limits WAF places on the use of rules more closely reflects the cost of running each type of rule. Rule groups include capacity settings, so you know the maximum cost of a rule group when you use it.</p> </li> </ul>

Base URLs:

* <a href="http://wafv2.us-east-1.amazonaws.com">http://wafv2.us-east-1.amazonaws.com</a> - The WAFV2 multi-region endpoint

* <a href="https://wafv2.us-east-1.amazonaws.com">https://wafv2.us-east-1.amazonaws.com</a> - The WAFV2 multi-region endpoint

* <a href="http://wafv2.cn-north-1.amazonaws.com.cn">http://wafv2.cn-north-1.amazonaws.com.cn</a> - The WAFV2 endpoint for China (Beijing) and China (Ningxia)

* <a href="https://wafv2.cn-north-1.amazonaws.com.cn">https://wafv2.cn-north-1.amazonaws.com.cn</a> - The WAFV2 endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/wafv2/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-wafv2-default">Default</h1>

## AssociateWebACL

<a id="opIdAssociateWebACL"></a>

> Code samples

```bash
curl 'https://wafv2.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20190729.AssociateWebACL' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20190729.AssociateWebACL' \
  -d '{
    "WebACLArn": {},
    "ResourceArn": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20190729.AssociateWebACL`

<p>Associates a web ACL with a regional application resource, to protect the resource. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, or an App Runner service. </p> <p>For Amazon CloudFront, don't use this call. Instead, use your CloudFront distribution configuration. To associate a web ACL, in the CloudFront call <code>UpdateDistribution</code>, set the web ACL ID to the Amazon Resource Name (ARN) of the web ACL. For information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistribution.html">UpdateDistribution</a> in the <i>Amazon CloudFront Developer Guide</i>. </p> <p>When you make changes to web ACLs or web ACL components, like rules and rule groups, WAF propagates the changes everywhere that the web ACL and its components are stored and used. Your changes are applied within seconds, but there might be a brief period of inconsistency when the changes have arrived in some places and not in others. So, for example, if you change a rule action setting, the action might be the old action in one area and the new action in another area. Or if you add an IP address to an IP set used in a blocking rule, the new address might briefly be blocked in one area while still allowed in another. This temporary inconsistency can occur when you first associate a web ACL with an Amazon Web Services resource and when you change a web ACL that is already associated with a resource. Generally, any inconsistencies of this type last only a few seconds.</p>

> Body parameter

```json
{
  "WebACLArn": {},
  "ResourceArn": {}
}
```

<h3 id="associatewebacl-parameters">Parameters</h3>

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
|body|body|[AssociateWebACLRequest](#schemaassociatewebaclrequest)|true|none|
|» WebACLArn|body|object|true|none|
|» ResourceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20190729.AssociateWebACL|

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

<h3 id="associatewebacl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateWebACLResponse](#schemaassociatewebaclresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|482|482|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|483|483|WAFUnavailableEntityException|[WAFUnavailableEntityException](#schemawafunavailableentityexception)|
|484|484|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CheckCapacity

<a id="opIdCheckCapacity"></a>

> Code samples

```bash
curl 'https://wafv2.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20190729.CheckCapacity' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20190729.CheckCapacity' \
  -d '{
    "Scope": {},
    "Rules": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20190729.CheckCapacity`

<p>Returns the web ACL capacity unit (WCU) requirements for a specified scope and set of rules. You can use this to check the capacity requirements for the rules you want to use in a <a>RuleGroup</a> or <a>WebACL</a>. </p> <p>WAF uses WCUs to calculate and control the operating resources that are used to run your rules, rule groups, and web ACLs. WAF calculates capacity differently for each rule type, to reflect the relative cost of each rule. Simple rules that cost little to run use fewer WCUs than more complex rules that use more processing power. Rule group capacity is fixed at creation, which helps users plan their web ACL WCU usage when they use a rule group. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/aws-waf-capacity-units.html">WAF web ACL capacity units (WCU)</a> in the <i>WAF Developer Guide</i>. </p>

> Body parameter

```json
{
  "Scope": {},
  "Rules": {}
}
```

<h3 id="checkcapacity-parameters">Parameters</h3>

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
|body|body|[CheckCapacityRequest](#schemacheckcapacityrequest)|true|none|
|» Scope|body|object|true|none|
|» Rules|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20190729.CheckCapacity|

> Example responses

> 200 Response

```json
{
  "Capacity": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="checkcapacity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CheckCapacityResponse](#schemacheckcapacityresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|482|482|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|483|483|WAFLimitsExceededException|[WAFLimitsExceededException](#schemawaflimitsexceededexception)|
|484|484|WAFInvalidResourceException|[WAFInvalidResourceException](#schemawafinvalidresourceexception)|
|485|485|WAFUnavailableEntityException|[WAFUnavailableEntityException](#schemawafunavailableentityexception)|
|486|486|WAFSubscriptionNotFoundException|[WAFSubscriptionNotFoundException](#schemawafsubscriptionnotfoundexception)|
|487|487|WAFExpiredManagedRuleGroupVersionException|[WAFExpiredManagedRuleGroupVersionException](#schemawafexpiredmanagedrulegroupversionexception)|
|488|488|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateAPIKey

<a id="opIdCreateAPIKey"></a>

> Code samples

```bash
curl 'https://wafv2.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20190729.CreateAPIKey' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20190729.CreateAPIKey' \
  -d '{
    "Scope": {},
    "TokenDomains": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20190729.CreateAPIKey`

<p>Creates an API key for use in the integration of the CAPTCHA API in your JavaScript client applications. The integration lets you customize the placement and characteristics of the CAPTCHA puzzle for your end users. For more information about the CAPTCHA JavaScript integration, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-application-integration.html">WAF client application integration</a> in the <i>WAF Developer Guide</i>.</p> <p>The CAPTCHA API requires a key that authorizes CAPTCHA use from the client application domain. You can use a single key for up to 5 domains. After you generate a key, you can copy it for use in your JavaScript integration. </p>

> Body parameter

```json
{
  "Scope": {},
  "TokenDomains": {}
}
```

<h3 id="createapikey-parameters">Parameters</h3>

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
|body|body|[CreateAPIKeyRequest](#schemacreateapikeyrequest)|true|none|
|» Scope|body|object|true|none|
|» TokenDomains|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20190729.CreateAPIKey|

> Example responses

> 200 Response

```json
{
  "APIKey": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="createapikey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateAPIKeyResponse](#schemacreateapikeyresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|482|482|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|
|483|483|WAFLimitsExceededException|[WAFLimitsExceededException](#schemawaflimitsexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateIPSet

<a id="opIdCreateIPSet"></a>

> Code samples

```bash
curl 'https://wafv2.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20190729.CreateIPSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20190729.CreateIPSet' \
  -d '{
    "Name": {},
    "Scope": {},
    "Description": {},
    "IPAddressVersion": {},
    "Addresses": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20190729.CreateIPSet`

Creates an <a>IPSet</a>, which you use to identify web requests that originate from specific IP addresses or ranges of IP addresses. For example, if you're receiving a lot of requests from a ranges of IP addresses, you can configure WAF to block them using an IPSet that lists those IP addresses. 

> Body parameter

```json
{
  "Name": {},
  "Scope": {},
  "Description": {},
  "IPAddressVersion": {},
  "Addresses": {},
  "Tags": {}
}
```

<h3 id="createipset-parameters">Parameters</h3>

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
|body|body|[CreateIPSetRequest](#schemacreateipsetrequest)|true|none|
|» Name|body|object|true|none|
|» Scope|body|object|true|none|
|» Description|body|object|false|none|
|» IPAddressVersion|body|object|true|none|
|» Addresses|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20190729.CreateIPSet|

> Example responses

> 200 Response

```json
{
  "Summary": {
    "Name": {},
    "Id": {},
    "Description": {},
    "LockToken": {},
    "ARN": {}
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

<h3 id="createipset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateIPSetResponse](#schemacreateipsetresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|482|482|WAFDuplicateItemException|[WAFDuplicateItemException](#schemawafduplicateitemexception)|
|483|483|WAFOptimisticLockException|[WAFOptimisticLockException](#schemawafoptimisticlockexception)|
|484|484|WAFLimitsExceededException|[WAFLimitsExceededException](#schemawaflimitsexceededexception)|
|485|485|WAFTagOperationException|[WAFTagOperationException](#schemawaftagoperationexception)|
|486|486|WAFTagOperationInternalErrorException|[WAFTagOperationInternalErrorException](#schemawaftagoperationinternalerrorexception)|
|487|487|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateRegexPatternSet

<a id="opIdCreateRegexPatternSet"></a>

> Code samples

```bash
curl 'https://wafv2.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20190729.CreateRegexPatternSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20190729.CreateRegexPatternSet' \
  -d '{
    "Name": {},
    "Scope": {},
    "Description": {},
    "RegularExpressionList": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20190729.CreateRegexPatternSet`

Creates a <a>RegexPatternSet</a>, which you reference in a <a>RegexPatternSetReferenceStatement</a>, to have WAF inspect a web request component for the specified patterns.

> Body parameter

```json
{
  "Name": {},
  "Scope": {},
  "Description": {},
  "RegularExpressionList": {},
  "Tags": {}
}
```

<h3 id="createregexpatternset-parameters">Parameters</h3>

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
|body|body|[CreateRegexPatternSetRequest](#schemacreateregexpatternsetrequest)|true|none|
|» Name|body|object|true|none|
|» Scope|body|object|true|none|
|» Description|body|object|false|none|
|» RegularExpressionList|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20190729.CreateRegexPatternSet|

> Example responses

> 200 Response

```json
{
  "Summary": {
    "Name": {},
    "Id": {},
    "Description": {},
    "LockToken": {},
    "ARN": {}
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

<h3 id="createregexpatternset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateRegexPatternSetResponse](#schemacreateregexpatternsetresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|482|482|WAFDuplicateItemException|[WAFDuplicateItemException](#schemawafduplicateitemexception)|
|483|483|WAFOptimisticLockException|[WAFOptimisticLockException](#schemawafoptimisticlockexception)|
|484|484|WAFLimitsExceededException|[WAFLimitsExceededException](#schemawaflimitsexceededexception)|
|485|485|WAFTagOperationException|[WAFTagOperationException](#schemawaftagoperationexception)|
|486|486|WAFTagOperationInternalErrorException|[WAFTagOperationInternalErrorException](#schemawaftagoperationinternalerrorexception)|
|487|487|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateRuleGroup

<a id="opIdCreateRuleGroup"></a>

> Code samples

```bash
curl 'https://wafv2.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20190729.CreateRuleGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20190729.CreateRuleGroup' \
  -d '{
    "Name": {},
    "Scope": {},
    "Capacity": {},
    "Description": {},
    "Rules": {},
    "VisibilityConfig": {
      "SampledRequestsEnabled": {},
      "CloudWatchMetricsEnabled": {},
      "MetricName": {}
    },
    "Tags": {},
    "CustomResponseBodies": {
      "property1": {
        "ContentType": {},
        "Content": {}
      },
      "property2": {
        "ContentType": {},
        "Content": {}
      }
    }
  }'
```

`POST /#X-Amz-Target=AWSWAF_20190729.CreateRuleGroup`

<p>Creates a <a>RuleGroup</a> per the specifications provided. </p> <p> A rule group defines a collection of rules to inspect and control web requests that you can use in a <a>WebACL</a>. When you create a rule group, you define an immutable capacity limit. If you update a rule group, you must stay within the capacity. This allows others to reuse the rule group with confidence in its capacity requirements. </p>

> Body parameter

```json
{
  "Name": {},
  "Scope": {},
  "Capacity": {},
  "Description": {},
  "Rules": {},
  "VisibilityConfig": {
    "SampledRequestsEnabled": {},
    "CloudWatchMetricsEnabled": {},
    "MetricName": {}
  },
  "Tags": {},
  "CustomResponseBodies": {
    "property1": {
      "ContentType": {},
      "Content": {}
    },
    "property2": {
      "ContentType": {},
      "Content": {}
    }
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
|» Name|body|object|true|none|
|» Scope|body|object|true|none|
|» Capacity|body|object|true|none|
|» Description|body|object|false|none|
|» Rules|body|object|false|none|
|» VisibilityConfig|body|object|true|none|
|» » SampledRequestsEnabled|body|object|true|none|
|» » CloudWatchMetricsEnabled|body|object|true|none|
|» » MetricName|body|object|true|none|
|» Tags|body|object|false|none|
|» CustomResponseBodies|body|object|false|none|
|» » **additionalProperties**|body|[CustomResponseBody](#schemacustomresponsebody)|false|The response body to use in a custom response to a web request. This is referenced by key from <a>CustomResponse</a> <code>CustomResponseBodyKey</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20190729.CreateRuleGroup|

> Example responses

> 200 Response

```json
{
  "Summary": {
    "Name": {},
    "Id": {},
    "Description": {},
    "LockToken": {},
    "ARN": {}
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

> 489 Response

```json
null
```

> 490 Response

```json
null
```

<h3 id="createrulegroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateRuleGroupResponse](#schemacreaterulegroupresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|482|482|WAFDuplicateItemException|[WAFDuplicateItemException](#schemawafduplicateitemexception)|
|483|483|WAFOptimisticLockException|[WAFOptimisticLockException](#schemawafoptimisticlockexception)|
|484|484|WAFLimitsExceededException|[WAFLimitsExceededException](#schemawaflimitsexceededexception)|
|485|485|WAFUnavailableEntityException|[WAFUnavailableEntityException](#schemawafunavailableentityexception)|
|486|486|WAFTagOperationException|[WAFTagOperationException](#schemawaftagoperationexception)|
|487|487|WAFTagOperationInternalErrorException|[WAFTagOperationInternalErrorException](#schemawaftagoperationinternalerrorexception)|
|488|488|WAFSubscriptionNotFoundException|[WAFSubscriptionNotFoundException](#schemawafsubscriptionnotfoundexception)|
|489|489|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|490|490|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateWebACL

<a id="opIdCreateWebACL"></a>

> Code samples

```bash
curl 'https://wafv2.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20190729.CreateWebACL' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20190729.CreateWebACL' \
  -d '{
    "Name": {},
    "Scope": {},
    "DefaultAction": {
      "Block": {
        "CustomResponse": {
          "ResponseCode": {},
          "CustomResponseBodyKey": {},
          "ResponseHeaders": {}
        }
      },
      "Allow": {
        "CustomRequestHandling": {
          "InsertHeaders": {}
        }
      }
    },
    "Description": {},
    "Rules": {},
    "VisibilityConfig": {
      "SampledRequestsEnabled": {},
      "CloudWatchMetricsEnabled": {},
      "MetricName": {}
    },
    "Tags": {},
    "CustomResponseBodies": {
      "property1": {
        "ContentType": {},
        "Content": {}
      },
      "property2": {
        "ContentType": {},
        "Content": {}
      }
    },
    "CaptchaConfig": {
      "ImmunityTimeProperty": {
        "ImmunityTime": {}
      }
    },
    "ChallengeConfig": {
      "ImmunityTimeProperty": {
        "ImmunityTime": {}
      }
    },
    "TokenDomains": {},
    "AssociationConfig": {
      "RequestBody": {
        "property1": {
          "DefaultSizeInspectionLimit": {}
        },
        "property2": {
          "DefaultSizeInspectionLimit": {}
        }
      }
    }
  }'
```

`POST /#X-Amz-Target=AWSWAF_20190729.CreateWebACL`

<p>Creates a <a>WebACL</a> per the specifications provided.</p> <p> A web ACL defines a collection of rules to use to inspect and control web requests. Each rule has an action defined (allow, block, or count) for requests that match the statement of the rule. In the web ACL, you assign a default action to take (allow, block) for any request that does not match any of the rules. The rules in a web ACL can be a combination of the types <a>Rule</a>, <a>RuleGroup</a>, and managed rule group. You can associate a web ACL with one or more Amazon Web Services resources to protect. The resources can be an Amazon CloudFront distribution, an Amazon API Gateway REST API, an Application Load Balancer, an AppSync GraphQL API, an Amazon Cognito user pool, or an App Runner service. </p>

> Body parameter

```json
{
  "Name": {},
  "Scope": {},
  "DefaultAction": {
    "Block": {
      "CustomResponse": {
        "ResponseCode": {},
        "CustomResponseBodyKey": {},
        "ResponseHeaders": {}
      }
    },
    "Allow": {
      "CustomRequestHandling": {
        "InsertHeaders": {}
      }
    }
  },
  "Description": {},
  "Rules": {},
  "VisibilityConfig": {
    "SampledRequestsEnabled": {},
    "CloudWatchMetricsEnabled": {},
    "MetricName": {}
  },
  "Tags": {},
  "CustomResponseBodies": {
    "property1": {
      "ContentType": {},
      "Content": {}
    },
    "property2": {
      "ContentType": {},
      "Content": {}
    }
  },
  "CaptchaConfig": {
    "ImmunityTimeProperty": {
      "ImmunityTime": {}
    }
  },
  "ChallengeConfig": {
    "ImmunityTimeProperty": {
      "ImmunityTime": {}
    }
  },
  "TokenDomains": {},
  "AssociationConfig": {
    "RequestBody": {
      "property1": {
        "DefaultSizeInspectionLimit": {}
      },
      "property2": {
        "DefaultSizeInspectionLimit": {}
      }
    }
  }
}
```

<h3 id="createwebacl-parameters">Parameters</h3>

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
|body|body|[CreateWebACLRequest](#schemacreatewebaclrequest)|true|none|
|» Name|body|object|true|none|
|» Scope|body|object|true|none|
|» DefaultAction|body|object|true|none|
|» » Block|body|object|false|none|
|» » » CustomResponse|body|object|false|none|
|» » » » ResponseCode|body|object|true|none|
|» » » » CustomResponseBodyKey|body|object|false|none|
|» » » » ResponseHeaders|body|object|false|none|
|» » Allow|body|object|false|none|
|» » » CustomRequestHandling|body|object|false|none|
|» » » » InsertHeaders|body|object|true|none|
|» Description|body|object|false|none|
|» Rules|body|object|false|none|
|» VisibilityConfig|body|object|true|none|
|» » SampledRequestsEnabled|body|object|true|none|
|» » CloudWatchMetricsEnabled|body|object|true|none|
|» » MetricName|body|object|true|none|
|» Tags|body|object|false|none|
|» CustomResponseBodies|body|object|false|none|
|» » **additionalProperties**|body|[CustomResponseBody](#schemacustomresponsebody)|false|The response body to use in a custom response to a web request. This is referenced by key from <a>CustomResponse</a> <code>CustomResponseBodyKey</code>.|
|» CaptchaConfig|body|object|false|none|
|» » ImmunityTimeProperty|body|object|false|none|
|» » » ImmunityTime|body|object|true|none|
|» ChallengeConfig|body|object|false|none|
|» » ImmunityTimeProperty|body|object|false|none|
|» » » ImmunityTime|body|object|true|none|
|» TokenDomains|body|object|false|none|
|» AssociationConfig|body|object|false|none|
|» » RequestBody|body|object|false|none|
|» » » **additionalProperties**|body|[RequestBodyAssociatedResourceTypeConfig](#schemarequestbodyassociatedresourcetypeconfig)|false|<p>Customizes the maximum size of the request body that your protected CloudFront distributions forward to WAF for inspection. The default size is 16 KB (16,384 kilobytes). </p> <note> <p>You are charged additional fees when your protected resources forward body sizes that are larger than the default. For more information, see <a href="http://aws.amazon.com/waf/pricing/">WAF Pricing</a>.</p> </note> <p>This is used in the <code>AssociationConfig</code> of the web ACL. </p>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20190729.CreateWebACL|

> Example responses

> 200 Response

```json
{
  "Summary": {
    "Name": {},
    "Id": {},
    "Description": {},
    "LockToken": {},
    "ARN": {}
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

> 489 Response

```json
null
```

> 490 Response

```json
null
```

> 491 Response

```json
null
```

> 492 Response

```json
null
```

> 493 Response

```json
null
```

<h3 id="createwebacl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateWebACLResponse](#schemacreatewebaclresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|482|482|WAFDuplicateItemException|[WAFDuplicateItemException](#schemawafduplicateitemexception)|
|483|483|WAFOptimisticLockException|[WAFOptimisticLockException](#schemawafoptimisticlockexception)|
|484|484|WAFLimitsExceededException|[WAFLimitsExceededException](#schemawaflimitsexceededexception)|
|485|485|WAFInvalidResourceException|[WAFInvalidResourceException](#schemawafinvalidresourceexception)|
|486|486|WAFUnavailableEntityException|[WAFUnavailableEntityException](#schemawafunavailableentityexception)|
|487|487|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|488|488|WAFTagOperationException|[WAFTagOperationException](#schemawaftagoperationexception)|
|489|489|WAFTagOperationInternalErrorException|[WAFTagOperationInternalErrorException](#schemawaftagoperationinternalerrorexception)|
|490|490|WAFSubscriptionNotFoundException|[WAFSubscriptionNotFoundException](#schemawafsubscriptionnotfoundexception)|
|491|491|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|
|492|492|WAFConfigurationWarningException|[WAFConfigurationWarningException](#schemawafconfigurationwarningexception)|
|493|493|WAFExpiredManagedRuleGroupVersionException|[WAFExpiredManagedRuleGroupVersionException](#schemawafexpiredmanagedrulegroupversionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteFirewallManagerRuleGroups

<a id="opIdDeleteFirewallManagerRuleGroups"></a>

> Code samples

```bash
curl 'https://wafv2.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20190729.DeleteFirewallManagerRuleGroups' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20190729.DeleteFirewallManagerRuleGroups' \
  -d '{
    "WebACLArn": {},
    "WebACLLockToken": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20190729.DeleteFirewallManagerRuleGroups`

<p>Deletes all rule groups that are managed by Firewall Manager for the specified web ACL. </p> <p>You can only use this if <code>ManagedByFirewallManager</code> is false in the specified <a>WebACL</a>. </p>

> Body parameter

```json
{
  "WebACLArn": {},
  "WebACLLockToken": {}
}
```

<h3 id="deletefirewallmanagerrulegroups-parameters">Parameters</h3>

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
|body|body|[DeleteFirewallManagerRuleGroupsRequest](#schemadeletefirewallmanagerrulegroupsrequest)|true|none|
|» WebACLArn|body|object|true|none|
|» WebACLLockToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20190729.DeleteFirewallManagerRuleGroups|

> Example responses

> 200 Response

```json
{
  "NextWebACLLockToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="deletefirewallmanagerrulegroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteFirewallManagerRuleGroupsResponse](#schemadeletefirewallmanagerrulegroupsresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|482|482|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|483|483|WAFOptimisticLockException|[WAFOptimisticLockException](#schemawafoptimisticlockexception)|
|484|484|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteIPSet

<a id="opIdDeleteIPSet"></a>

> Code samples

```bash
curl 'https://wafv2.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20190729.DeleteIPSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20190729.DeleteIPSet' \
  -d '{
    "Name": {},
    "Scope": {},
    "Id": {},
    "LockToken": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20190729.DeleteIPSet`

Deletes the specified <a>IPSet</a>. 

> Body parameter

```json
{
  "Name": {},
  "Scope": {},
  "Id": {},
  "LockToken": {}
}
```

<h3 id="deleteipset-parameters">Parameters</h3>

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
|body|body|[DeleteIPSetRequest](#schemadeleteipsetrequest)|true|none|
|» Name|body|object|true|none|
|» Scope|body|object|true|none|
|» Id|body|object|true|none|
|» LockToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20190729.DeleteIPSet|

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

> 487 Response

```json
null
```

<h3 id="deleteipset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteIPSetResponse](#schemadeleteipsetresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|482|482|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|483|483|WAFOptimisticLockException|[WAFOptimisticLockException](#schemawafoptimisticlockexception)|
|484|484|WAFAssociatedItemException|[WAFAssociatedItemException](#schemawafassociateditemexception)|
|485|485|WAFTagOperationException|[WAFTagOperationException](#schemawaftagoperationexception)|
|486|486|WAFTagOperationInternalErrorException|[WAFTagOperationInternalErrorException](#schemawaftagoperationinternalerrorexception)|
|487|487|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteLoggingConfiguration

<a id="opIdDeleteLoggingConfiguration"></a>

> Code samples

```bash
curl 'https://wafv2.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20190729.DeleteLoggingConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20190729.DeleteLoggingConfiguration' \
  -d '{
    "ResourceArn": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20190729.DeleteLoggingConfiguration`

Deletes the <a>LoggingConfiguration</a> from the specified web ACL.

> Body parameter

```json
{
  "ResourceArn": {}
}
```

<h3 id="deleteloggingconfiguration-parameters">Parameters</h3>

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
|body|body|[DeleteLoggingConfigurationRequest](#schemadeleteloggingconfigurationrequest)|true|none|
|» ResourceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20190729.DeleteLoggingConfiguration|

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

<h3 id="deleteloggingconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteLoggingConfigurationResponse](#schemadeleteloggingconfigurationresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|482|482|WAFOptimisticLockException|[WAFOptimisticLockException](#schemawafoptimisticlockexception)|
|483|483|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|484|484|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeletePermissionPolicy

<a id="opIdDeletePermissionPolicy"></a>

> Code samples

```bash
curl 'https://wafv2.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20190729.DeletePermissionPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20190729.DeletePermissionPolicy' \
  -d '{
    "ResourceArn": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20190729.DeletePermissionPolicy`

<p>Permanently deletes an IAM policy from the specified rule group.</p> <p>You must be the owner of the rule group to perform this operation.</p>

> Body parameter

```json
{
  "ResourceArn": {}
}
```

<h3 id="deletepermissionpolicy-parameters">Parameters</h3>

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
|body|body|[DeletePermissionPolicyRequest](#schemadeletepermissionpolicyrequest)|true|none|
|» ResourceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20190729.DeletePermissionPolicy|

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

<h3 id="deletepermissionpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeletePermissionPolicyResponse](#schemadeletepermissionpolicyresponse)|
|480|480|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|481|481|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|482|482|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRegexPatternSet

<a id="opIdDeleteRegexPatternSet"></a>

> Code samples

```bash
curl 'https://wafv2.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20190729.DeleteRegexPatternSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20190729.DeleteRegexPatternSet' \
  -d '{
    "Name": {},
    "Scope": {},
    "Id": {},
    "LockToken": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20190729.DeleteRegexPatternSet`

Deletes the specified <a>RegexPatternSet</a>.

> Body parameter

```json
{
  "Name": {},
  "Scope": {},
  "Id": {},
  "LockToken": {}
}
```

<h3 id="deleteregexpatternset-parameters">Parameters</h3>

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
|body|body|[DeleteRegexPatternSetRequest](#schemadeleteregexpatternsetrequest)|true|none|
|» Name|body|object|true|none|
|» Scope|body|object|true|none|
|» Id|body|object|true|none|
|» LockToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20190729.DeleteRegexPatternSet|

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

> 487 Response

```json
null
```

<h3 id="deleteregexpatternset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteRegexPatternSetResponse](#schemadeleteregexpatternsetresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|482|482|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|483|483|WAFOptimisticLockException|[WAFOptimisticLockException](#schemawafoptimisticlockexception)|
|484|484|WAFAssociatedItemException|[WAFAssociatedItemException](#schemawafassociateditemexception)|
|485|485|WAFTagOperationException|[WAFTagOperationException](#schemawaftagoperationexception)|
|486|486|WAFTagOperationInternalErrorException|[WAFTagOperationInternalErrorException](#schemawaftagoperationinternalerrorexception)|
|487|487|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRuleGroup

<a id="opIdDeleteRuleGroup"></a>

> Code samples

```bash
curl 'https://wafv2.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20190729.DeleteRuleGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20190729.DeleteRuleGroup' \
  -d '{
    "Name": {},
    "Scope": {},
    "Id": {},
    "LockToken": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20190729.DeleteRuleGroup`

Deletes the specified <a>RuleGroup</a>.

> Body parameter

```json
{
  "Name": {},
  "Scope": {},
  "Id": {},
  "LockToken": {}
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
|» Name|body|object|true|none|
|» Scope|body|object|true|none|
|» Id|body|object|true|none|
|» LockToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20190729.DeleteRuleGroup|

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

> 487 Response

```json
null
```

<h3 id="deleterulegroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteRuleGroupResponse](#schemadeleterulegroupresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|482|482|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|483|483|WAFOptimisticLockException|[WAFOptimisticLockException](#schemawafoptimisticlockexception)|
|484|484|WAFAssociatedItemException|[WAFAssociatedItemException](#schemawafassociateditemexception)|
|485|485|WAFTagOperationException|[WAFTagOperationException](#schemawaftagoperationexception)|
|486|486|WAFTagOperationInternalErrorException|[WAFTagOperationInternalErrorException](#schemawaftagoperationinternalerrorexception)|
|487|487|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteWebACL

<a id="opIdDeleteWebACL"></a>

> Code samples

```bash
curl 'https://wafv2.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20190729.DeleteWebACL' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20190729.DeleteWebACL' \
  -d '{
    "Name": {},
    "Scope": {},
    "Id": {},
    "LockToken": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20190729.DeleteWebACL`

<p>Deletes the specified <a>WebACL</a>. </p> <p>You can only use this if <code>ManagedByFirewallManager</code> is false in the specified <a>WebACL</a>. </p> <note> <p>Before deleting any web ACL, first disassociate it from all resources.</p> <ul> <li> <p>To retrieve a list of the resources that are associated with a web ACL, use the following calls:</p> <ul> <li> <p>For regional resources, call <a>ListResourcesForWebACL</a>.</p> </li> <li> <p>For Amazon CloudFront distributions, use the CloudFront call <code>ListDistributionsByWebACLId</code>. For information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByWebACLId.html">ListDistributionsByWebACLId</a> in the <i>Amazon CloudFront API Reference</i>. </p> </li> </ul> </li> <li> <p>To disassociate a resource from a web ACL, use the following calls:</p> <ul> <li> <p>For regional resources, call <a>DisassociateWebACL</a>.</p> </li> <li> <p>For Amazon CloudFront distributions, provide an empty web ACL ID in the CloudFront call <code>UpdateDistribution</code>. For information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistribution.html">UpdateDistribution</a> in the <i>Amazon CloudFront API Reference</i>. </p> </li> </ul> </li> </ul> </note>

> Body parameter

```json
{
  "Name": {},
  "Scope": {},
  "Id": {},
  "LockToken": {}
}
```

<h3 id="deletewebacl-parameters">Parameters</h3>

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
|body|body|[DeleteWebACLRequest](#schemadeletewebaclrequest)|true|none|
|» Name|body|object|true|none|
|» Scope|body|object|true|none|
|» Id|body|object|true|none|
|» LockToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20190729.DeleteWebACL|

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

> 487 Response

```json
null
```

<h3 id="deletewebacl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteWebACLResponse](#schemadeletewebaclresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|482|482|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|483|483|WAFOptimisticLockException|[WAFOptimisticLockException](#schemawafoptimisticlockexception)|
|484|484|WAFAssociatedItemException|[WAFAssociatedItemException](#schemawafassociateditemexception)|
|485|485|WAFTagOperationException|[WAFTagOperationException](#schemawaftagoperationexception)|
|486|486|WAFTagOperationInternalErrorException|[WAFTagOperationInternalErrorException](#schemawaftagoperationinternalerrorexception)|
|487|487|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeManagedRuleGroup

<a id="opIdDescribeManagedRuleGroup"></a>

> Code samples

```bash
curl 'https://wafv2.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20190729.DescribeManagedRuleGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20190729.DescribeManagedRuleGroup' \
  -d '{
    "VendorName": {},
    "Name": {},
    "Scope": {},
    "VersionName": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20190729.DescribeManagedRuleGroup`

Provides high-level information for a managed rule group, including descriptions of the rules. 

> Body parameter

```json
{
  "VendorName": {},
  "Name": {},
  "Scope": {},
  "VersionName": {}
}
```

<h3 id="describemanagedrulegroup-parameters">Parameters</h3>

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
|body|body|[DescribeManagedRuleGroupRequest](#schemadescribemanagedrulegrouprequest)|true|none|
|» VendorName|body|object|true|none|
|» Name|body|object|true|none|
|» Scope|body|object|true|none|
|» VersionName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20190729.DescribeManagedRuleGroup|

> Example responses

> 200 Response

```json
{
  "VersionName": {},
  "SnsTopicArn": {},
  "Capacity": {},
  "Rules": {},
  "LabelNamespace": {},
  "AvailableLabels": {},
  "ConsumedLabels": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="describemanagedrulegroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeManagedRuleGroupResponse](#schemadescribemanagedrulegroupresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|482|482|WAFInvalidResourceException|[WAFInvalidResourceException](#schemawafinvalidresourceexception)|
|483|483|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|484|484|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|
|485|485|WAFExpiredManagedRuleGroupVersionException|[WAFExpiredManagedRuleGroupVersionException](#schemawafexpiredmanagedrulegroupversionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateWebACL

<a id="opIdDisassociateWebACL"></a>

> Code samples

```bash
curl 'https://wafv2.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20190729.DisassociateWebACL' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20190729.DisassociateWebACL' \
  -d '{
    "ResourceArn": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20190729.DisassociateWebACL`

<p>Disassociates the specified regional application resource from any existing web ACL association. A resource can have at most one web ACL association. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, or an App Runner service. </p> <p>For Amazon CloudFront, don't use this call. Instead, use your CloudFront distribution configuration. To disassociate a web ACL, provide an empty web ACL ID in the CloudFront call <code>UpdateDistribution</code>. For information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistribution.html">UpdateDistribution</a> in the <i>Amazon CloudFront API Reference</i>. </p>

> Body parameter

```json
{
  "ResourceArn": {}
}
```

<h3 id="disassociatewebacl-parameters">Parameters</h3>

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
|body|body|[DisassociateWebACLRequest](#schemadisassociatewebaclrequest)|true|none|
|» ResourceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20190729.DisassociateWebACL|

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

<h3 id="disassociatewebacl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateWebACLResponse](#schemadisassociatewebaclresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|482|482|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|483|483|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GenerateMobileSdkReleaseUrl

<a id="opIdGenerateMobileSdkReleaseUrl"></a>

> Code samples

```bash
curl 'https://wafv2.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20190729.GenerateMobileSdkReleaseUrl' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20190729.GenerateMobileSdkReleaseUrl' \
  -d '{
    "Platform": {},
    "ReleaseVersion": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20190729.GenerateMobileSdkReleaseUrl`

<p>Generates a presigned download URL for the specified release of the mobile SDK.</p> <p>The mobile SDK is not generally available. Customers who have access to the mobile SDK can use it to establish and manage WAF tokens for use in HTTP(S) requests from a mobile device to WAF. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-application-integration.html">WAF client application integration</a> in the <i>WAF Developer Guide</i>.</p>

> Body parameter

```json
{
  "Platform": {},
  "ReleaseVersion": {}
}
```

<h3 id="generatemobilesdkreleaseurl-parameters">Parameters</h3>

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
|body|body|[GenerateMobileSdkReleaseUrlRequest](#schemageneratemobilesdkreleaseurlrequest)|true|none|
|» Platform|body|object|true|none|
|» ReleaseVersion|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20190729.GenerateMobileSdkReleaseUrl|

> Example responses

> 200 Response

```json
{
  "Url": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="generatemobilesdkreleaseurl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GenerateMobileSdkReleaseUrlResponse](#schemageneratemobilesdkreleaseurlresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|482|482|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|483|483|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDecryptedAPIKey

<a id="opIdGetDecryptedAPIKey"></a>

> Code samples

```bash
curl 'https://wafv2.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20190729.GetDecryptedAPIKey' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20190729.GetDecryptedAPIKey' \
  -d '{
    "Scope": {},
    "APIKey": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20190729.GetDecryptedAPIKey`

Returns your API key in decrypted form. Use this to check the token domains that you have defined for the key. 

> Body parameter

```json
{
  "Scope": {},
  "APIKey": {}
}
```

<h3 id="getdecryptedapikey-parameters">Parameters</h3>

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
|body|body|[GetDecryptedAPIKeyRequest](#schemagetdecryptedapikeyrequest)|true|none|
|» Scope|body|object|true|none|
|» APIKey|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20190729.GetDecryptedAPIKey|

> Example responses

> 200 Response

```json
{
  "TokenDomains": {},
  "CreationTimestamp": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getdecryptedapikey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDecryptedAPIKeyResponse](#schemagetdecryptedapikeyresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|482|482|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|
|483|483|WAFInvalidResourceException|[WAFInvalidResourceException](#schemawafinvalidresourceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetIPSet

<a id="opIdGetIPSet"></a>

> Code samples

```bash
curl 'https://wafv2.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20190729.GetIPSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20190729.GetIPSet' \
  -d '{
    "Name": {},
    "Scope": {},
    "Id": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20190729.GetIPSet`

Retrieves the specified <a>IPSet</a>.

> Body parameter

```json
{
  "Name": {},
  "Scope": {},
  "Id": {}
}
```

<h3 id="getipset-parameters">Parameters</h3>

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
|body|body|[GetIPSetRequest](#schemagetipsetrequest)|true|none|
|» Name|body|object|true|none|
|» Scope|body|object|true|none|
|» Id|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20190729.GetIPSet|

> Example responses

> 200 Response

```json
{
  "IPSet": {
    "Name": {},
    "Id": {},
    "ARN": {},
    "Description": {},
    "IPAddressVersion": {},
    "Addresses": {}
  },
  "LockToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getipset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetIPSetResponse](#schemagetipsetresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|482|482|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|483|483|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetLoggingConfiguration

<a id="opIdGetLoggingConfiguration"></a>

> Code samples

```bash
curl 'https://wafv2.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20190729.GetLoggingConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20190729.GetLoggingConfiguration' \
  -d '{
    "ResourceArn": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20190729.GetLoggingConfiguration`

Returns the <a>LoggingConfiguration</a> for the specified web ACL.

> Body parameter

```json
{
  "ResourceArn": {}
}
```

<h3 id="getloggingconfiguration-parameters">Parameters</h3>

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
|body|body|[GetLoggingConfigurationRequest](#schemagetloggingconfigurationrequest)|true|none|
|» ResourceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20190729.GetLoggingConfiguration|

> Example responses

> 200 Response

```json
{
  "LoggingConfiguration": {
    "ResourceArn": {},
    "LogDestinationConfigs": {},
    "RedactedFields": {},
    "ManagedByFirewallManager": {},
    "LoggingFilter": {
      "Filters": {},
      "DefaultBehavior": {}
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

<h3 id="getloggingconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetLoggingConfigurationResponse](#schemagetloggingconfigurationresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|482|482|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|483|483|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetManagedRuleSet

<a id="opIdGetManagedRuleSet"></a>

> Code samples

```bash
curl 'https://wafv2.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20190729.GetManagedRuleSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20190729.GetManagedRuleSet' \
  -d '{
    "Name": {},
    "Scope": {},
    "Id": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20190729.GetManagedRuleSet`

<p>Retrieves the specified managed rule set. </p> <note> <p>This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. </p> <p>Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are <code>ListManagedRuleSets</code>, <code>GetManagedRuleSet</code>, <code>PutManagedRuleSetVersions</code>, and <code>UpdateManagedRuleSetVersionExpiryDate</code>.</p> </note>

> Body parameter

```json
{
  "Name": {},
  "Scope": {},
  "Id": {}
}
```

<h3 id="getmanagedruleset-parameters">Parameters</h3>

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
|body|body|[GetManagedRuleSetRequest](#schemagetmanagedrulesetrequest)|true|none|
|» Name|body|object|true|none|
|» Scope|body|object|true|none|
|» Id|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20190729.GetManagedRuleSet|

> Example responses

> 200 Response

```json
{
  "ManagedRuleSet": {
    "Name": {},
    "Id": {},
    "ARN": {},
    "Description": {},
    "PublishedVersions": {
      "property1": {
        "AssociatedRuleGroupArn": {},
        "Capacity": {},
        "ForecastedLifetime": {},
        "PublishTimestamp": {},
        "LastUpdateTimestamp": {},
        "ExpiryTimestamp": {}
      },
      "property2": {
        "AssociatedRuleGroupArn": {},
        "Capacity": {},
        "ForecastedLifetime": {},
        "PublishTimestamp": {},
        "LastUpdateTimestamp": {},
        "ExpiryTimestamp": {}
      }
    },
    "RecommendedVersion": {},
    "LabelNamespace": {}
  },
  "LockToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getmanagedruleset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetManagedRuleSetResponse](#schemagetmanagedrulesetresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|482|482|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|483|483|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetMobileSdkRelease

<a id="opIdGetMobileSdkRelease"></a>

> Code samples

```bash
curl 'https://wafv2.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20190729.GetMobileSdkRelease' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20190729.GetMobileSdkRelease' \
  -d '{
    "Platform": {},
    "ReleaseVersion": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20190729.GetMobileSdkRelease`

<p>Retrieves information for the specified mobile SDK release, including release notes and tags.</p> <p>The mobile SDK is not generally available. Customers who have access to the mobile SDK can use it to establish and manage WAF tokens for use in HTTP(S) requests from a mobile device to WAF. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-application-integration.html">WAF client application integration</a> in the <i>WAF Developer Guide</i>.</p>

> Body parameter

```json
{
  "Platform": {},
  "ReleaseVersion": {}
}
```

<h3 id="getmobilesdkrelease-parameters">Parameters</h3>

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
|body|body|[GetMobileSdkReleaseRequest](#schemagetmobilesdkreleaserequest)|true|none|
|» Platform|body|object|true|none|
|» ReleaseVersion|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20190729.GetMobileSdkRelease|

> Example responses

> 200 Response

```json
{
  "MobileSdkRelease": {
    "ReleaseVersion": {},
    "Timestamp": {},
    "ReleaseNotes": {},
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

<h3 id="getmobilesdkrelease-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMobileSdkReleaseResponse](#schemagetmobilesdkreleaseresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|482|482|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|483|483|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetPermissionPolicy

<a id="opIdGetPermissionPolicy"></a>

> Code samples

```bash
curl 'https://wafv2.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20190729.GetPermissionPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20190729.GetPermissionPolicy' \
  -d '{
    "ResourceArn": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20190729.GetPermissionPolicy`

<p>Returns the IAM policy that is attached to the specified rule group.</p> <p>You must be the owner of the rule group to perform this operation.</p>

> Body parameter

```json
{
  "ResourceArn": {}
}
```

<h3 id="getpermissionpolicy-parameters">Parameters</h3>

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
|body|body|[GetPermissionPolicyRequest](#schemagetpermissionpolicyrequest)|true|none|
|» ResourceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20190729.GetPermissionPolicy|

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

<h3 id="getpermissionpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetPermissionPolicyResponse](#schemagetpermissionpolicyresponse)|
|480|480|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|481|481|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|482|482|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRateBasedStatementManagedKeys

<a id="opIdGetRateBasedStatementManagedKeys"></a>

> Code samples

```bash
curl 'https://wafv2.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20190729.GetRateBasedStatementManagedKeys' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20190729.GetRateBasedStatementManagedKeys' \
  -d '{
    "Scope": {},
    "WebACLName": {},
    "WebACLId": {},
    "RuleGroupRuleName": {},
    "RuleName": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20190729.GetRateBasedStatementManagedKeys`

<p>Retrieves the keys that are currently blocked by a rate-based rule instance. The maximum number of managed keys that can be blocked for a single rate-based rule instance is 10,000. If more than 10,000 addresses exceed the rate limit, those with the highest rates are blocked.</p> <p>For a rate-based rule that you've defined inside a rule group, provide the name of the rule group reference statement in your request, in addition to the rate-based rule name and the web ACL name. </p> <p>WAF monitors web requests and manages keys independently for each unique combination of web ACL, optional rule group, and rate-based rule. For example, if you define a rate-based rule inside a rule group, and then use the rule group in a web ACL, WAF monitors web requests and manages keys for that web ACL, rule group reference statement, and rate-based rule instance. If you use the same rule group in a second web ACL, WAF monitors web requests and manages keys for this second usage completely independent of your first. </p>

> Body parameter

```json
{
  "Scope": {},
  "WebACLName": {},
  "WebACLId": {},
  "RuleGroupRuleName": {},
  "RuleName": {}
}
```

<h3 id="getratebasedstatementmanagedkeys-parameters">Parameters</h3>

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
|body|body|[GetRateBasedStatementManagedKeysRequest](#schemagetratebasedstatementmanagedkeysrequest)|true|none|
|» Scope|body|object|true|none|
|» WebACLName|body|object|true|none|
|» WebACLId|body|object|true|none|
|» RuleGroupRuleName|body|object|false|none|
|» RuleName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20190729.GetRateBasedStatementManagedKeys|

> Example responses

> 200 Response

```json
{
  "ManagedKeysIPV4": {
    "IPAddressVersion": {},
    "Addresses": {}
  },
  "ManagedKeysIPV6": {
    "IPAddressVersion": {},
    "Addresses": {}
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

<h3 id="getratebasedstatementmanagedkeys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRateBasedStatementManagedKeysResponse](#schemagetratebasedstatementmanagedkeysresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|482|482|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|483|483|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRegexPatternSet

<a id="opIdGetRegexPatternSet"></a>

> Code samples

```bash
curl 'https://wafv2.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20190729.GetRegexPatternSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20190729.GetRegexPatternSet' \
  -d '{
    "Name": {},
    "Scope": {},
    "Id": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20190729.GetRegexPatternSet`

Retrieves the specified <a>RegexPatternSet</a>.

> Body parameter

```json
{
  "Name": {},
  "Scope": {},
  "Id": {}
}
```

<h3 id="getregexpatternset-parameters">Parameters</h3>

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
|body|body|[GetRegexPatternSetRequest](#schemagetregexpatternsetrequest)|true|none|
|» Name|body|object|true|none|
|» Scope|body|object|true|none|
|» Id|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20190729.GetRegexPatternSet|

> Example responses

> 200 Response

```json
{
  "RegexPatternSet": {
    "Name": {},
    "Id": {},
    "ARN": {},
    "Description": {},
    "RegularExpressionList": {}
  },
  "LockToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getregexpatternset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRegexPatternSetResponse](#schemagetregexpatternsetresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|482|482|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|483|483|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRuleGroup

<a id="opIdGetRuleGroup"></a>

> Code samples

```bash
curl 'https://wafv2.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20190729.GetRuleGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20190729.GetRuleGroup' \
  -d '{
    "Name": {},
    "Scope": {},
    "Id": {},
    "ARN": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20190729.GetRuleGroup`

Retrieves the specified <a>RuleGroup</a>.

> Body parameter

```json
{
  "Name": {},
  "Scope": {},
  "Id": {},
  "ARN": {}
}
```

<h3 id="getrulegroup-parameters">Parameters</h3>

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
|body|body|[GetRuleGroupRequest](#schemagetrulegrouprequest)|true|none|
|» Name|body|object|false|none|
|» Scope|body|object|false|none|
|» Id|body|object|false|none|
|» ARN|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20190729.GetRuleGroup|

> Example responses

> 200 Response

```json
{
  "RuleGroup": {
    "Name": {},
    "Id": {},
    "Capacity": {},
    "ARN": {},
    "Description": {},
    "Rules": {},
    "VisibilityConfig": {
      "SampledRequestsEnabled": {},
      "CloudWatchMetricsEnabled": {},
      "MetricName": {}
    },
    "LabelNamespace": {},
    "CustomResponseBodies": {
      "property1": {
        "ContentType": {},
        "Content": {}
      },
      "property2": {
        "ContentType": {},
        "Content": {}
      }
    },
    "AvailableLabels": {},
    "ConsumedLabels": {}
  },
  "LockToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getrulegroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRuleGroupResponse](#schemagetrulegroupresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|482|482|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|483|483|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSampledRequests

<a id="opIdGetSampledRequests"></a>

> Code samples

```bash
curl 'https://wafv2.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20190729.GetSampledRequests' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20190729.GetSampledRequests' \
  -d '{
    "WebAclArn": {},
    "RuleMetricName": {},
    "Scope": {},
    "TimeWindow": {
      "StartTime": {},
      "EndTime": {}
    },
    "MaxItems": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20190729.GetSampledRequests`

<p>Gets detailed information about a specified number of requests--a sample--that WAF randomly selects from among the first 5,000 requests that your Amazon Web Services resource received during a time range that you choose. You can specify a sample size of up to 500 requests, and you can specify any time range in the previous three hours.</p> <p> <code>GetSampledRequests</code> returns a time range, which is usually the time range that you specified. However, if your resource (such as a CloudFront distribution) received 5,000 requests before the specified time range elapsed, <code>GetSampledRequests</code> returns an updated time range. This new time range indicates the actual period during which WAF selected the requests in the sample.</p>

> Body parameter

```json
{
  "WebAclArn": {},
  "RuleMetricName": {},
  "Scope": {},
  "TimeWindow": {
    "StartTime": {},
    "EndTime": {}
  },
  "MaxItems": {}
}
```

<h3 id="getsampledrequests-parameters">Parameters</h3>

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
|body|body|[GetSampledRequestsRequest](#schemagetsampledrequestsrequest)|true|none|
|» WebAclArn|body|object|true|none|
|» RuleMetricName|body|object|true|none|
|» Scope|body|object|true|none|
|» TimeWindow|body|object|true|none|
|» » StartTime|body|object|true|none|
|» » EndTime|body|object|true|none|
|» MaxItems|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20190729.GetSampledRequests|

> Example responses

> 200 Response

```json
{
  "SampledRequests": {},
  "PopulationSize": {},
  "TimeWindow": {
    "StartTime": {},
    "EndTime": {}
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

<h3 id="getsampledrequests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSampledRequestsResponse](#schemagetsampledrequestsresponse)|
|480|480|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|481|481|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|482|482|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetWebACL

<a id="opIdGetWebACL"></a>

> Code samples

```bash
curl 'https://wafv2.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20190729.GetWebACL' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20190729.GetWebACL' \
  -d '{
    "Name": {},
    "Scope": {},
    "Id": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20190729.GetWebACL`

Retrieves the specified <a>WebACL</a>.

> Body parameter

```json
{
  "Name": {},
  "Scope": {},
  "Id": {}
}
```

<h3 id="getwebacl-parameters">Parameters</h3>

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
|body|body|[GetWebACLRequest](#schemagetwebaclrequest)|true|none|
|» Name|body|object|true|none|
|» Scope|body|object|true|none|
|» Id|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20190729.GetWebACL|

> Example responses

> 200 Response

```json
{
  "WebACL": {
    "Name": {},
    "Id": {},
    "ARN": {},
    "DefaultAction": {
      "Block": {
        "CustomResponse": {
          "ResponseCode": {},
          "CustomResponseBodyKey": {},
          "ResponseHeaders": {}
        }
      },
      "Allow": {
        "CustomRequestHandling": {
          "InsertHeaders": {}
        }
      }
    },
    "Description": {},
    "Rules": {},
    "VisibilityConfig": {
      "SampledRequestsEnabled": {},
      "CloudWatchMetricsEnabled": {},
      "MetricName": {}
    },
    "Capacity": {},
    "PreProcessFirewallManagerRuleGroups": {},
    "PostProcessFirewallManagerRuleGroups": {},
    "ManagedByFirewallManager": {},
    "LabelNamespace": {},
    "CustomResponseBodies": {
      "property1": {
        "ContentType": {},
        "Content": {}
      },
      "property2": {
        "ContentType": {},
        "Content": {}
      }
    },
    "CaptchaConfig": {
      "ImmunityTimeProperty": {
        "ImmunityTime": {}
      }
    },
    "ChallengeConfig": {
      "ImmunityTimeProperty": {
        "ImmunityTime": {}
      }
    },
    "TokenDomains": {},
    "AssociationConfig": {
      "RequestBody": {
        "property1": {
          "DefaultSizeInspectionLimit": {}
        },
        "property2": {
          "DefaultSizeInspectionLimit": {}
        }
      }
    }
  },
  "LockToken": {},
  "ApplicationIntegrationURL": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getwebacl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetWebACLResponse](#schemagetwebaclresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|482|482|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|483|483|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetWebACLForResource

<a id="opIdGetWebACLForResource"></a>

> Code samples

```bash
curl 'https://wafv2.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20190729.GetWebACLForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20190729.GetWebACLForResource' \
  -d '{
    "ResourceArn": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20190729.GetWebACLForResource`

Retrieves the <a>WebACL</a> for the specified resource. 

> Body parameter

```json
{
  "ResourceArn": {}
}
```

<h3 id="getwebaclforresource-parameters">Parameters</h3>

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
|body|body|[GetWebACLForResourceRequest](#schemagetwebaclforresourcerequest)|true|none|
|» ResourceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20190729.GetWebACLForResource|

> Example responses

> 200 Response

```json
{
  "WebACL": {
    "Name": {},
    "Id": {},
    "ARN": {},
    "DefaultAction": {
      "Block": {
        "CustomResponse": {
          "ResponseCode": {},
          "CustomResponseBodyKey": {},
          "ResponseHeaders": {}
        }
      },
      "Allow": {
        "CustomRequestHandling": {
          "InsertHeaders": {}
        }
      }
    },
    "Description": {},
    "Rules": {},
    "VisibilityConfig": {
      "SampledRequestsEnabled": {},
      "CloudWatchMetricsEnabled": {},
      "MetricName": {}
    },
    "Capacity": {},
    "PreProcessFirewallManagerRuleGroups": {},
    "PostProcessFirewallManagerRuleGroups": {},
    "ManagedByFirewallManager": {},
    "LabelNamespace": {},
    "CustomResponseBodies": {
      "property1": {
        "ContentType": {},
        "Content": {}
      },
      "property2": {
        "ContentType": {},
        "Content": {}
      }
    },
    "CaptchaConfig": {
      "ImmunityTimeProperty": {
        "ImmunityTime": {}
      }
    },
    "ChallengeConfig": {
      "ImmunityTimeProperty": {
        "ImmunityTime": {}
      }
    },
    "TokenDomains": {},
    "AssociationConfig": {
      "RequestBody": {
        "property1": {
          "DefaultSizeInspectionLimit": {}
        },
        "property2": {
          "DefaultSizeInspectionLimit": {}
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

<h3 id="getwebaclforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetWebACLForResourceResponse](#schemagetwebaclforresourceresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|482|482|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|483|483|WAFUnavailableEntityException|[WAFUnavailableEntityException](#schemawafunavailableentityexception)|
|484|484|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAPIKeys

<a id="opIdListAPIKeys"></a>

> Code samples

```bash
curl 'https://wafv2.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20190729.ListAPIKeys' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20190729.ListAPIKeys' \
  -d '{
    "Scope": {},
    "NextMarker": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20190729.ListAPIKeys`

Retrieves a list of the API keys that you've defined for the specified scope. 

> Body parameter

```json
{
  "Scope": {},
  "NextMarker": {},
  "Limit": {}
}
```

<h3 id="listapikeys-parameters">Parameters</h3>

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
|body|body|[ListAPIKeysRequest](#schemalistapikeysrequest)|true|none|
|» Scope|body|object|true|none|
|» NextMarker|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20190729.ListAPIKeys|

> Example responses

> 200 Response

```json
{
  "NextMarker": {},
  "APIKeySummaries": {},
  "ApplicationIntegrationURL": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="listapikeys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAPIKeysResponse](#schemalistapikeysresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|482|482|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|
|483|483|WAFInvalidResourceException|[WAFInvalidResourceException](#schemawafinvalidresourceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAvailableManagedRuleGroupVersions

<a id="opIdListAvailableManagedRuleGroupVersions"></a>

> Code samples

```bash
curl 'https://wafv2.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20190729.ListAvailableManagedRuleGroupVersions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20190729.ListAvailableManagedRuleGroupVersions' \
  -d '{
    "VendorName": {},
    "Name": {},
    "Scope": {},
    "NextMarker": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20190729.ListAvailableManagedRuleGroupVersions`

Returns a list of the available versions for the specified managed rule group. 

> Body parameter

```json
{
  "VendorName": {},
  "Name": {},
  "Scope": {},
  "NextMarker": {},
  "Limit": {}
}
```

<h3 id="listavailablemanagedrulegroupversions-parameters">Parameters</h3>

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
|body|body|[ListAvailableManagedRuleGroupVersionsRequest](#schemalistavailablemanagedrulegroupversionsrequest)|true|none|
|» VendorName|body|object|true|none|
|» Name|body|object|true|none|
|» Scope|body|object|true|none|
|» NextMarker|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20190729.ListAvailableManagedRuleGroupVersions|

> Example responses

> 200 Response

```json
{
  "NextMarker": {},
  "Versions": {},
  "CurrentDefaultVersion": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="listavailablemanagedrulegroupversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAvailableManagedRuleGroupVersionsResponse](#schemalistavailablemanagedrulegroupversionsresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|482|482|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|483|483|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAvailableManagedRuleGroups

<a id="opIdListAvailableManagedRuleGroups"></a>

> Code samples

```bash
curl 'https://wafv2.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20190729.ListAvailableManagedRuleGroups' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20190729.ListAvailableManagedRuleGroups' \
  -d '{
    "Scope": {},
    "NextMarker": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20190729.ListAvailableManagedRuleGroups`

Retrieves an array of managed rule groups that are available for you to use. This list includes all Amazon Web Services Managed Rules rule groups and all of the Amazon Web Services Marketplace managed rule groups that you're subscribed to.

> Body parameter

```json
{
  "Scope": {},
  "NextMarker": {},
  "Limit": {}
}
```

<h3 id="listavailablemanagedrulegroups-parameters">Parameters</h3>

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
|body|body|[ListAvailableManagedRuleGroupsRequest](#schemalistavailablemanagedrulegroupsrequest)|true|none|
|» Scope|body|object|true|none|
|» NextMarker|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20190729.ListAvailableManagedRuleGroups|

> Example responses

> 200 Response

```json
{
  "NextMarker": {},
  "ManagedRuleGroups": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="listavailablemanagedrulegroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAvailableManagedRuleGroupsResponse](#schemalistavailablemanagedrulegroupsresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|482|482|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListIPSets

<a id="opIdListIPSets"></a>

> Code samples

```bash
curl 'https://wafv2.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20190729.ListIPSets' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20190729.ListIPSets' \
  -d '{
    "Scope": {},
    "NextMarker": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20190729.ListIPSets`

Retrieves an array of <a>IPSetSummary</a> objects for the IP sets that you manage.

> Body parameter

```json
{
  "Scope": {},
  "NextMarker": {},
  "Limit": {}
}
```

<h3 id="listipsets-parameters">Parameters</h3>

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
|body|body|[ListIPSetsRequest](#schemalistipsetsrequest)|true|none|
|» Scope|body|object|true|none|
|» NextMarker|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20190729.ListIPSets|

> Example responses

> 200 Response

```json
{
  "NextMarker": {},
  "IPSets": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="listipsets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListIPSetsResponse](#schemalistipsetsresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|482|482|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListLoggingConfigurations

<a id="opIdListLoggingConfigurations"></a>

> Code samples

```bash
curl 'https://wafv2.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20190729.ListLoggingConfigurations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20190729.ListLoggingConfigurations' \
  -d '{
    "Scope": {},
    "NextMarker": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20190729.ListLoggingConfigurations`

Retrieves an array of your <a>LoggingConfiguration</a> objects.

> Body parameter

```json
{
  "Scope": {},
  "NextMarker": {},
  "Limit": {}
}
```

<h3 id="listloggingconfigurations-parameters">Parameters</h3>

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
|body|body|[ListLoggingConfigurationsRequest](#schemalistloggingconfigurationsrequest)|true|none|
|» Scope|body|object|true|none|
|» NextMarker|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20190729.ListLoggingConfigurations|

> Example responses

> 200 Response

```json
{
  "LoggingConfigurations": {},
  "NextMarker": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="listloggingconfigurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListLoggingConfigurationsResponse](#schemalistloggingconfigurationsresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|482|482|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListManagedRuleSets

<a id="opIdListManagedRuleSets"></a>

> Code samples

```bash
curl 'https://wafv2.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20190729.ListManagedRuleSets' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20190729.ListManagedRuleSets' \
  -d '{
    "Scope": {},
    "NextMarker": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20190729.ListManagedRuleSets`

<p>Retrieves the managed rule sets that you own. </p> <note> <p>This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. </p> <p>Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are <code>ListManagedRuleSets</code>, <code>GetManagedRuleSet</code>, <code>PutManagedRuleSetVersions</code>, and <code>UpdateManagedRuleSetVersionExpiryDate</code>.</p> </note>

> Body parameter

```json
{
  "Scope": {},
  "NextMarker": {},
  "Limit": {}
}
```

<h3 id="listmanagedrulesets-parameters">Parameters</h3>

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
|body|body|[ListManagedRuleSetsRequest](#schemalistmanagedrulesetsrequest)|true|none|
|» Scope|body|object|true|none|
|» NextMarker|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20190729.ListManagedRuleSets|

> Example responses

> 200 Response

```json
{
  "NextMarker": {},
  "ManagedRuleSets": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="listmanagedrulesets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListManagedRuleSetsResponse](#schemalistmanagedrulesetsresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|482|482|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListMobileSdkReleases

<a id="opIdListMobileSdkReleases"></a>

> Code samples

```bash
curl 'https://wafv2.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20190729.ListMobileSdkReleases' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20190729.ListMobileSdkReleases' \
  -d '{
    "Platform": {},
    "NextMarker": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20190729.ListMobileSdkReleases`

<p>Retrieves a list of the available releases for the mobile SDK and the specified device platform. </p> <p>The mobile SDK is not generally available. Customers who have access to the mobile SDK can use it to establish and manage WAF tokens for use in HTTP(S) requests from a mobile device to WAF. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-application-integration.html">WAF client application integration</a> in the <i>WAF Developer Guide</i>.</p>

> Body parameter

```json
{
  "Platform": {},
  "NextMarker": {},
  "Limit": {}
}
```

<h3 id="listmobilesdkreleases-parameters">Parameters</h3>

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
|body|body|[ListMobileSdkReleasesRequest](#schemalistmobilesdkreleasesrequest)|true|none|
|» Platform|body|object|true|none|
|» NextMarker|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20190729.ListMobileSdkReleases|

> Example responses

> 200 Response

```json
{
  "ReleaseSummaries": {},
  "NextMarker": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="listmobilesdkreleases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListMobileSdkReleasesResponse](#schemalistmobilesdkreleasesresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|482|482|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRegexPatternSets

<a id="opIdListRegexPatternSets"></a>

> Code samples

```bash
curl 'https://wafv2.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20190729.ListRegexPatternSets' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20190729.ListRegexPatternSets' \
  -d '{
    "Scope": {},
    "NextMarker": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20190729.ListRegexPatternSets`

Retrieves an array of <a>RegexPatternSetSummary</a> objects for the regex pattern sets that you manage.

> Body parameter

```json
{
  "Scope": {},
  "NextMarker": {},
  "Limit": {}
}
```

<h3 id="listregexpatternsets-parameters">Parameters</h3>

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
|body|body|[ListRegexPatternSetsRequest](#schemalistregexpatternsetsrequest)|true|none|
|» Scope|body|object|true|none|
|» NextMarker|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20190729.ListRegexPatternSets|

> Example responses

> 200 Response

```json
{
  "NextMarker": {},
  "RegexPatternSets": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="listregexpatternsets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRegexPatternSetsResponse](#schemalistregexpatternsetsresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|482|482|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListResourcesForWebACL

<a id="opIdListResourcesForWebACL"></a>

> Code samples

```bash
curl 'https://wafv2.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20190729.ListResourcesForWebACL' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20190729.ListResourcesForWebACL' \
  -d '{
    "WebACLArn": {},
    "ResourceType": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20190729.ListResourcesForWebACL`

Retrieves an array of the Amazon Resource Names (ARNs) for the regional resources that are associated with the specified web ACL. If you want the list of Amazon CloudFront resources, use the CloudFront call <code>ListDistributionsByWebACLId</code>. 

> Body parameter

```json
{
  "WebACLArn": {},
  "ResourceType": {}
}
```

<h3 id="listresourcesforwebacl-parameters">Parameters</h3>

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
|body|body|[ListResourcesForWebACLRequest](#schemalistresourcesforwebaclrequest)|true|none|
|» WebACLArn|body|object|true|none|
|» ResourceType|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20190729.ListResourcesForWebACL|

> Example responses

> 200 Response

```json
{
  "ResourceArns": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="listresourcesforwebacl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListResourcesForWebACLResponse](#schemalistresourcesforwebaclresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|482|482|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|483|483|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRuleGroups

<a id="opIdListRuleGroups"></a>

> Code samples

```bash
curl 'https://wafv2.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20190729.ListRuleGroups' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20190729.ListRuleGroups' \
  -d '{
    "Scope": {},
    "NextMarker": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20190729.ListRuleGroups`

Retrieves an array of <a>RuleGroupSummary</a> objects for the rule groups that you manage. 

> Body parameter

```json
{
  "Scope": {},
  "NextMarker": {},
  "Limit": {}
}
```

<h3 id="listrulegroups-parameters">Parameters</h3>

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
|body|body|[ListRuleGroupsRequest](#schemalistrulegroupsrequest)|true|none|
|» Scope|body|object|true|none|
|» NextMarker|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20190729.ListRuleGroups|

> Example responses

> 200 Response

```json
{
  "NextMarker": {},
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
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|482|482|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://wafv2.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20190729.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20190729.ListTagsForResource' \
  -d '{
    "NextMarker": {},
    "Limit": {},
    "ResourceARN": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20190729.ListTagsForResource`

<p>Retrieves the <a>TagInfoForResource</a> for the specified resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.</p> <p>You can tag the Amazon Web Services resources that you manage through WAF: web ACLs, rule groups, IP sets, and regex pattern sets. You can't manage or view tags through the WAF console. </p>

> Body parameter

```json
{
  "NextMarker": {},
  "Limit": {},
  "ResourceARN": {}
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
|» NextMarker|body|object|false|none|
|» Limit|body|object|false|none|
|» ResourceARN|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20190729.ListTagsForResource|

> Example responses

> 200 Response

```json
{
  "NextMarker": {},
  "TagInfoForResource": {
    "ResourceARN": {},
    "TagList": {}
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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|482|482|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|483|483|WAFTagOperationException|[WAFTagOperationException](#schemawaftagoperationexception)|
|484|484|WAFTagOperationInternalErrorException|[WAFTagOperationInternalErrorException](#schemawaftagoperationinternalerrorexception)|
|485|485|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListWebACLs

<a id="opIdListWebACLs"></a>

> Code samples

```bash
curl 'https://wafv2.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20190729.ListWebACLs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20190729.ListWebACLs' \
  -d '{
    "Scope": {},
    "NextMarker": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20190729.ListWebACLs`

Retrieves an array of <a>WebACLSummary</a> objects for the web ACLs that you manage.

> Body parameter

```json
{
  "Scope": {},
  "NextMarker": {},
  "Limit": {}
}
```

<h3 id="listwebacls-parameters">Parameters</h3>

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
|body|body|[ListWebACLsRequest](#schemalistwebaclsrequest)|true|none|
|» Scope|body|object|true|none|
|» NextMarker|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20190729.ListWebACLs|

> Example responses

> 200 Response

```json
{
  "NextMarker": {},
  "WebACLs": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="listwebacls-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListWebACLsResponse](#schemalistwebaclsresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|482|482|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutLoggingConfiguration

<a id="opIdPutLoggingConfiguration"></a>

> Code samples

```bash
curl 'https://wafv2.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20190729.PutLoggingConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20190729.PutLoggingConfiguration' \
  -d '{
    "LoggingConfiguration": {
      "ResourceArn": {},
      "LogDestinationConfigs": {},
      "RedactedFields": {},
      "ManagedByFirewallManager": {},
      "LoggingFilter": {
        "Filters": {},
        "DefaultBehavior": {}
      }
    }
  }'
```

`POST /#X-Amz-Target=AWSWAF_20190729.PutLoggingConfiguration`

<p>Enables the specified <a>LoggingConfiguration</a>, to start logging from a web ACL, according to the configuration provided. </p> <note> <p>This operation completely replaces any mutable specifications that you already have for a logging configuration with the ones that you provide to this call. </p> <p>To modify an existing logging configuration, do the following: </p> <ol> <li> <p>Retrieve it by calling <a>GetLoggingConfiguration</a> </p> </li> <li> <p>Update its settings as needed</p> </li> <li> <p>Provide the complete logging configuration specification to this call</p> </li> </ol> </note> <note> <p>You can define one logging destination per web ACL.</p> </note> <p>You can access information about the traffic that WAF inspects using the following steps:</p> <ol> <li> <p>Create your logging destination. You can use an Amazon CloudWatch Logs log group, an Amazon Simple Storage Service (Amazon S3) bucket, or an Amazon Kinesis Data Firehose. </p> <p>The name that you give the destination must start with <code>aws-waf-logs-</code>. Depending on the type of destination, you might need to configure additional settings or permissions. </p> <p>For configuration requirements and pricing information for each destination type, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/logging.html">Logging web ACL traffic</a> in the <i>WAF Developer Guide</i>.</p> </li> <li> <p>Associate your logging destination to your web ACL using a <code>PutLoggingConfiguration</code> request.</p> </li> </ol> <p>When you successfully enable logging using a <code>PutLoggingConfiguration</code> request, WAF creates an additional role or policy that is required to write logs to the logging destination. For an Amazon CloudWatch Logs log group, WAF creates a resource policy on the log group. For an Amazon S3 bucket, WAF creates a bucket policy. For an Amazon Kinesis Data Firehose, WAF creates a service-linked role.</p> <p>For additional information about web ACL logging, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/logging.html">Logging web ACL traffic information</a> in the <i>WAF Developer Guide</i>.</p>

> Body parameter

```json
{
  "LoggingConfiguration": {
    "ResourceArn": {},
    "LogDestinationConfigs": {},
    "RedactedFields": {},
    "ManagedByFirewallManager": {},
    "LoggingFilter": {
      "Filters": {},
      "DefaultBehavior": {}
    }
  }
}
```

<h3 id="putloggingconfiguration-parameters">Parameters</h3>

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
|body|body|[PutLoggingConfigurationRequest](#schemaputloggingconfigurationrequest)|true|none|
|» LoggingConfiguration|body|object|true|none|
|» » ResourceArn|body|object|true|none|
|» » LogDestinationConfigs|body|object|true|none|
|» » RedactedFields|body|object|false|none|
|» » ManagedByFirewallManager|body|object|false|none|
|» » LoggingFilter|body|object|false|none|
|» » » Filters|body|object|true|none|
|» » » DefaultBehavior|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20190729.PutLoggingConfiguration|

> Example responses

> 200 Response

```json
{
  "LoggingConfiguration": {
    "ResourceArn": {},
    "LogDestinationConfigs": {},
    "RedactedFields": {},
    "ManagedByFirewallManager": {},
    "LoggingFilter": {
      "Filters": {},
      "DefaultBehavior": {}
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

> 487 Response

```json
null
```

<h3 id="putloggingconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutLoggingConfigurationResponse](#schemaputloggingconfigurationresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|482|482|WAFOptimisticLockException|[WAFOptimisticLockException](#schemawafoptimisticlockexception)|
|483|483|WAFServiceLinkedRoleErrorException|[WAFServiceLinkedRoleErrorException](#schemawafservicelinkedroleerrorexception)|
|484|484|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|485|485|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|
|486|486|WAFLimitsExceededException|[WAFLimitsExceededException](#schemawaflimitsexceededexception)|
|487|487|WAFLogDestinationPermissionIssueException|[WAFLogDestinationPermissionIssueException](#schemawaflogdestinationpermissionissueexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutManagedRuleSetVersions

<a id="opIdPutManagedRuleSetVersions"></a>

> Code samples

```bash
curl 'https://wafv2.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20190729.PutManagedRuleSetVersions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20190729.PutManagedRuleSetVersions' \
  -d '{
    "Name": {},
    "Scope": {},
    "Id": {},
    "LockToken": {},
    "RecommendedVersion": {},
    "VersionsToPublish": {
      "property1": {
        "AssociatedRuleGroupArn": {},
        "ForecastedLifetime": {}
      },
      "property2": {
        "AssociatedRuleGroupArn": {},
        "ForecastedLifetime": {}
      }
    }
  }'
```

`POST /#X-Amz-Target=AWSWAF_20190729.PutManagedRuleSetVersions`

<p>Defines the versions of your managed rule set that you are offering to the customers. Customers see your offerings as managed rule groups with versioning.</p> <note> <p>This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. </p> <p>Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are <code>ListManagedRuleSets</code>, <code>GetManagedRuleSet</code>, <code>PutManagedRuleSetVersions</code>, and <code>UpdateManagedRuleSetVersionExpiryDate</code>.</p> </note> <p>Customers retrieve their managed rule group list by calling <a>ListAvailableManagedRuleGroups</a>. The name that you provide here for your managed rule set is the name the customer sees for the corresponding managed rule group. Customers can retrieve the available versions for a managed rule group by calling <a>ListAvailableManagedRuleGroupVersions</a>. You provide a rule group specification for each version. For each managed rule set, you must specify a version that you recommend using. </p> <p>To initiate the expiration of a managed rule group version, use <a>UpdateManagedRuleSetVersionExpiryDate</a>.</p>

> Body parameter

```json
{
  "Name": {},
  "Scope": {},
  "Id": {},
  "LockToken": {},
  "RecommendedVersion": {},
  "VersionsToPublish": {
    "property1": {
      "AssociatedRuleGroupArn": {},
      "ForecastedLifetime": {}
    },
    "property2": {
      "AssociatedRuleGroupArn": {},
      "ForecastedLifetime": {}
    }
  }
}
```

<h3 id="putmanagedrulesetversions-parameters">Parameters</h3>

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
|body|body|[PutManagedRuleSetVersionsRequest](#schemaputmanagedrulesetversionsrequest)|true|none|
|» Name|body|object|true|none|
|» Scope|body|object|true|none|
|» Id|body|object|true|none|
|» LockToken|body|object|true|none|
|» RecommendedVersion|body|object|false|none|
|» VersionsToPublish|body|object|false|none|
|» » **additionalProperties**|body|[VersionToPublish](#schemaversiontopublish)|false|<p>A version of the named managed rule group, that the rule group's vendor publishes for use by customers. </p> <note> <p>This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. </p> <p>Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are <code>ListManagedRuleSets</code>, <code>GetManagedRuleSet</code>, <code>PutManagedRuleSetVersions</code>, and <code>UpdateManagedRuleSetVersionExpiryDate</code>.</p> </note>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20190729.PutManagedRuleSetVersions|

> Example responses

> 200 Response

```json
{
  "NextLockToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="putmanagedrulesetversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutManagedRuleSetVersionsResponse](#schemaputmanagedrulesetversionsresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|482|482|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|483|483|WAFOptimisticLockException|[WAFOptimisticLockException](#schemawafoptimisticlockexception)|
|484|484|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutPermissionPolicy

<a id="opIdPutPermissionPolicy"></a>

> Code samples

```bash
curl 'https://wafv2.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20190729.PutPermissionPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20190729.PutPermissionPolicy' \
  -d '{
    "ResourceArn": {},
    "Policy": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20190729.PutPermissionPolicy`

<p>Attaches an IAM policy to the specified resource. Use this to share a rule group across accounts.</p> <p>You must be the owner of the rule group to perform this operation.</p> <p>This action is subject to the following restrictions:</p> <ul> <li> <p>You can attach only one policy with each <code>PutPermissionPolicy</code> request.</p> </li> <li> <p>The ARN in the request must be a valid WAF <a>RuleGroup</a> ARN and the rule group must exist in the same Region.</p> </li> <li> <p>The user making the request must be the owner of the rule group.</p> </li> </ul>

> Body parameter

```json
{
  "ResourceArn": {},
  "Policy": {}
}
```

<h3 id="putpermissionpolicy-parameters">Parameters</h3>

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
|body|body|[PutPermissionPolicyRequest](#schemaputpermissionpolicyrequest)|true|none|
|» ResourceArn|body|object|true|none|
|» Policy|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20190729.PutPermissionPolicy|

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

<h3 id="putpermissionpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutPermissionPolicyResponse](#schemaputpermissionpolicyresponse)|
|480|480|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|481|481|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|482|482|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|483|483|WAFInvalidPermissionPolicyException|[WAFInvalidPermissionPolicyException](#schemawafinvalidpermissionpolicyexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://wafv2.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20190729.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20190729.TagResource' \
  -d '{
    "ResourceARN": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20190729.TagResource`

<p>Associates tags with the specified Amazon Web Services resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.</p> <p>You can tag the Amazon Web Services resources that you manage through WAF: web ACLs, rule groups, IP sets, and regex pattern sets. You can't manage or view tags through the WAF console. </p>

> Body parameter

```json
{
  "ResourceARN": {},
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
|» ResourceARN|body|object|true|none|
|» Tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20190729.TagResource|

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
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|482|482|WAFLimitsExceededException|[WAFLimitsExceededException](#schemawaflimitsexceededexception)|
|483|483|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|484|484|WAFTagOperationException|[WAFTagOperationException](#schemawaftagoperationexception)|
|485|485|WAFTagOperationInternalErrorException|[WAFTagOperationInternalErrorException](#schemawaftagoperationinternalerrorexception)|
|486|486|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://wafv2.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20190729.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20190729.UntagResource' \
  -d '{
    "ResourceARN": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20190729.UntagResource`

Disassociates tags from an Amazon Web Services resource. Tags are key:value pairs that you can associate with Amazon Web Services resources. For example, the tag key might be "customer" and the tag value might be "companyA." You can specify one or more tags to add to each container. You can add up to 50 tags to each Amazon Web Services resource.

> Body parameter

```json
{
  "ResourceARN": {},
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
|» ResourceARN|body|object|true|none|
|» TagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20190729.UntagResource|

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
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|482|482|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|483|483|WAFTagOperationException|[WAFTagOperationException](#schemawaftagoperationexception)|
|484|484|WAFTagOperationInternalErrorException|[WAFTagOperationInternalErrorException](#schemawaftagoperationinternalerrorexception)|
|485|485|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateIPSet

<a id="opIdUpdateIPSet"></a>

> Code samples

```bash
curl 'https://wafv2.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20190729.UpdateIPSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20190729.UpdateIPSet' \
  -d '{
    "Name": {},
    "Scope": {},
    "Id": {},
    "Description": {},
    "Addresses": {},
    "LockToken": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20190729.UpdateIPSet`

<p>Updates the specified <a>IPSet</a>. </p> <note> <p>This operation completely replaces the mutable specifications that you already have for the IP set with the ones that you provide to this call. </p> <p>To modify an IP set, do the following: </p> <ol> <li> <p>Retrieve it by calling <a>GetIPSet</a> </p> </li> <li> <p>Update its settings as needed</p> </li> <li> <p>Provide the complete IP set specification to this call</p> </li> </ol> </note> <p>When you make changes to web ACLs or web ACL components, like rules and rule groups, WAF propagates the changes everywhere that the web ACL and its components are stored and used. Your changes are applied within seconds, but there might be a brief period of inconsistency when the changes have arrived in some places and not in others. So, for example, if you change a rule action setting, the action might be the old action in one area and the new action in another area. Or if you add an IP address to an IP set used in a blocking rule, the new address might briefly be blocked in one area while still allowed in another. This temporary inconsistency can occur when you first associate a web ACL with an Amazon Web Services resource and when you change a web ACL that is already associated with a resource. Generally, any inconsistencies of this type last only a few seconds.</p>

> Body parameter

```json
{
  "Name": {},
  "Scope": {},
  "Id": {},
  "Description": {},
  "Addresses": {},
  "LockToken": {}
}
```

<h3 id="updateipset-parameters">Parameters</h3>

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
|body|body|[UpdateIPSetRequest](#schemaupdateipsetrequest)|true|none|
|» Name|body|object|true|none|
|» Scope|body|object|true|none|
|» Id|body|object|true|none|
|» Description|body|object|false|none|
|» Addresses|body|object|true|none|
|» LockToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20190729.UpdateIPSet|

> Example responses

> 200 Response

```json
{
  "NextLockToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="updateipset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateIPSetResponse](#schemaupdateipsetresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|482|482|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|483|483|WAFDuplicateItemException|[WAFDuplicateItemException](#schemawafduplicateitemexception)|
|484|484|WAFOptimisticLockException|[WAFOptimisticLockException](#schemawafoptimisticlockexception)|
|485|485|WAFLimitsExceededException|[WAFLimitsExceededException](#schemawaflimitsexceededexception)|
|486|486|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateManagedRuleSetVersionExpiryDate

<a id="opIdUpdateManagedRuleSetVersionExpiryDate"></a>

> Code samples

```bash
curl 'https://wafv2.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20190729.UpdateManagedRuleSetVersionExpiryDate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20190729.UpdateManagedRuleSetVersionExpiryDate' \
  -d '{
    "Name": {},
    "Scope": {},
    "Id": {},
    "LockToken": {},
    "VersionToExpire": {},
    "ExpiryTimestamp": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20190729.UpdateManagedRuleSetVersionExpiryDate`

<p>Updates the expiration information for your managed rule set. Use this to initiate the expiration of a managed rule group version. After you initiate expiration for a version, WAF excludes it from the response to <a>ListAvailableManagedRuleGroupVersions</a> for the managed rule group. </p> <note> <p>This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. </p> <p>Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are <code>ListManagedRuleSets</code>, <code>GetManagedRuleSet</code>, <code>PutManagedRuleSetVersions</code>, and <code>UpdateManagedRuleSetVersionExpiryDate</code>.</p> </note>

> Body parameter

```json
{
  "Name": {},
  "Scope": {},
  "Id": {},
  "LockToken": {},
  "VersionToExpire": {},
  "ExpiryTimestamp": {}
}
```

<h3 id="updatemanagedrulesetversionexpirydate-parameters">Parameters</h3>

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
|body|body|[UpdateManagedRuleSetVersionExpiryDateRequest](#schemaupdatemanagedrulesetversionexpirydaterequest)|true|none|
|» Name|body|object|true|none|
|» Scope|body|object|true|none|
|» Id|body|object|true|none|
|» LockToken|body|object|true|none|
|» VersionToExpire|body|object|true|none|
|» ExpiryTimestamp|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20190729.UpdateManagedRuleSetVersionExpiryDate|

> Example responses

> 200 Response

```json
{
  "ExpiringVersion": {},
  "ExpiryTimestamp": {},
  "NextLockToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="updatemanagedrulesetversionexpirydate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateManagedRuleSetVersionExpiryDateResponse](#schemaupdatemanagedrulesetversionexpirydateresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|482|482|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|483|483|WAFOptimisticLockException|[WAFOptimisticLockException](#schemawafoptimisticlockexception)|
|484|484|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateRegexPatternSet

<a id="opIdUpdateRegexPatternSet"></a>

> Code samples

```bash
curl 'https://wafv2.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20190729.UpdateRegexPatternSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20190729.UpdateRegexPatternSet' \
  -d '{
    "Name": {},
    "Scope": {},
    "Id": {},
    "Description": {},
    "RegularExpressionList": {},
    "LockToken": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20190729.UpdateRegexPatternSet`

<p>Updates the specified <a>RegexPatternSet</a>.</p> <note> <p>This operation completely replaces the mutable specifications that you already have for the regex pattern set with the ones that you provide to this call. </p> <p>To modify a regex pattern set, do the following: </p> <ol> <li> <p>Retrieve it by calling <a>GetRegexPatternSet</a> </p> </li> <li> <p>Update its settings as needed</p> </li> <li> <p>Provide the complete regex pattern set specification to this call</p> </li> </ol> </note> <p>When you make changes to web ACLs or web ACL components, like rules and rule groups, WAF propagates the changes everywhere that the web ACL and its components are stored and used. Your changes are applied within seconds, but there might be a brief period of inconsistency when the changes have arrived in some places and not in others. So, for example, if you change a rule action setting, the action might be the old action in one area and the new action in another area. Or if you add an IP address to an IP set used in a blocking rule, the new address might briefly be blocked in one area while still allowed in another. This temporary inconsistency can occur when you first associate a web ACL with an Amazon Web Services resource and when you change a web ACL that is already associated with a resource. Generally, any inconsistencies of this type last only a few seconds.</p>

> Body parameter

```json
{
  "Name": {},
  "Scope": {},
  "Id": {},
  "Description": {},
  "RegularExpressionList": {},
  "LockToken": {}
}
```

<h3 id="updateregexpatternset-parameters">Parameters</h3>

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
|body|body|[UpdateRegexPatternSetRequest](#schemaupdateregexpatternsetrequest)|true|none|
|» Name|body|object|true|none|
|» Scope|body|object|true|none|
|» Id|body|object|true|none|
|» Description|body|object|false|none|
|» RegularExpressionList|body|object|true|none|
|» LockToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20190729.UpdateRegexPatternSet|

> Example responses

> 200 Response

```json
{
  "NextLockToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="updateregexpatternset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateRegexPatternSetResponse](#schemaupdateregexpatternsetresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|482|482|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|483|483|WAFDuplicateItemException|[WAFDuplicateItemException](#schemawafduplicateitemexception)|
|484|484|WAFOptimisticLockException|[WAFOptimisticLockException](#schemawafoptimisticlockexception)|
|485|485|WAFLimitsExceededException|[WAFLimitsExceededException](#schemawaflimitsexceededexception)|
|486|486|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateRuleGroup

<a id="opIdUpdateRuleGroup"></a>

> Code samples

```bash
curl 'https://wafv2.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20190729.UpdateRuleGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20190729.UpdateRuleGroup' \
  -d '{
    "Name": {},
    "Scope": {},
    "Id": {},
    "Description": {},
    "Rules": {},
    "VisibilityConfig": {
      "SampledRequestsEnabled": {},
      "CloudWatchMetricsEnabled": {},
      "MetricName": {}
    },
    "LockToken": {},
    "CustomResponseBodies": {
      "property1": {
        "ContentType": {},
        "Content": {}
      },
      "property2": {
        "ContentType": {},
        "Content": {}
      }
    }
  }'
```

`POST /#X-Amz-Target=AWSWAF_20190729.UpdateRuleGroup`

<p>Updates the specified <a>RuleGroup</a>.</p> <note> <p>This operation completely replaces the mutable specifications that you already have for the rule group with the ones that you provide to this call. </p> <p>To modify a rule group, do the following: </p> <ol> <li> <p>Retrieve it by calling <a>GetRuleGroup</a> </p> </li> <li> <p>Update its settings as needed</p> </li> <li> <p>Provide the complete rule group specification to this call</p> </li> </ol> </note> <p>When you make changes to web ACLs or web ACL components, like rules and rule groups, WAF propagates the changes everywhere that the web ACL and its components are stored and used. Your changes are applied within seconds, but there might be a brief period of inconsistency when the changes have arrived in some places and not in others. So, for example, if you change a rule action setting, the action might be the old action in one area and the new action in another area. Or if you add an IP address to an IP set used in a blocking rule, the new address might briefly be blocked in one area while still allowed in another. This temporary inconsistency can occur when you first associate a web ACL with an Amazon Web Services resource and when you change a web ACL that is already associated with a resource. Generally, any inconsistencies of this type last only a few seconds.</p> <p> A rule group defines a collection of rules to inspect and control web requests that you can use in a <a>WebACL</a>. When you create a rule group, you define an immutable capacity limit. If you update a rule group, you must stay within the capacity. This allows others to reuse the rule group with confidence in its capacity requirements. </p>

> Body parameter

```json
{
  "Name": {},
  "Scope": {},
  "Id": {},
  "Description": {},
  "Rules": {},
  "VisibilityConfig": {
    "SampledRequestsEnabled": {},
    "CloudWatchMetricsEnabled": {},
    "MetricName": {}
  },
  "LockToken": {},
  "CustomResponseBodies": {
    "property1": {
      "ContentType": {},
      "Content": {}
    },
    "property2": {
      "ContentType": {},
      "Content": {}
    }
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
|» Name|body|object|true|none|
|» Scope|body|object|true|none|
|» Id|body|object|true|none|
|» Description|body|object|false|none|
|» Rules|body|object|false|none|
|» VisibilityConfig|body|object|true|none|
|» » SampledRequestsEnabled|body|object|true|none|
|» » CloudWatchMetricsEnabled|body|object|true|none|
|» » MetricName|body|object|true|none|
|» LockToken|body|object|true|none|
|» CustomResponseBodies|body|object|false|none|
|» » **additionalProperties**|body|[CustomResponseBody](#schemacustomresponsebody)|false|The response body to use in a custom response to a web request. This is referenced by key from <a>CustomResponse</a> <code>CustomResponseBodyKey</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20190729.UpdateRuleGroup|

> Example responses

> 200 Response

```json
{
  "NextLockToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

> 489 Response

```json
null
```

<h3 id="updaterulegroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateRuleGroupResponse](#schemaupdaterulegroupresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|482|482|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|483|483|WAFDuplicateItemException|[WAFDuplicateItemException](#schemawafduplicateitemexception)|
|484|484|WAFOptimisticLockException|[WAFOptimisticLockException](#schemawafoptimisticlockexception)|
|485|485|WAFLimitsExceededException|[WAFLimitsExceededException](#schemawaflimitsexceededexception)|
|486|486|WAFUnavailableEntityException|[WAFUnavailableEntityException](#schemawafunavailableentityexception)|
|487|487|WAFSubscriptionNotFoundException|[WAFSubscriptionNotFoundException](#schemawafsubscriptionnotfoundexception)|
|488|488|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|
|489|489|WAFConfigurationWarningException|[WAFConfigurationWarningException](#schemawafconfigurationwarningexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateWebACL

<a id="opIdUpdateWebACL"></a>

> Code samples

```bash
curl 'https://wafv2.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20190729.UpdateWebACL' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20190729.UpdateWebACL' \
  -d '{
    "Name": {},
    "Scope": {},
    "Id": {},
    "DefaultAction": {
      "Block": {
        "CustomResponse": {
          "ResponseCode": {},
          "CustomResponseBodyKey": {},
          "ResponseHeaders": {}
        }
      },
      "Allow": {
        "CustomRequestHandling": {
          "InsertHeaders": {}
        }
      }
    },
    "Description": {},
    "Rules": {},
    "VisibilityConfig": {
      "SampledRequestsEnabled": {},
      "CloudWatchMetricsEnabled": {},
      "MetricName": {}
    },
    "LockToken": {},
    "CustomResponseBodies": {
      "property1": {
        "ContentType": {},
        "Content": {}
      },
      "property2": {
        "ContentType": {},
        "Content": {}
      }
    },
    "CaptchaConfig": {
      "ImmunityTimeProperty": {
        "ImmunityTime": {}
      }
    },
    "ChallengeConfig": {
      "ImmunityTimeProperty": {
        "ImmunityTime": {}
      }
    },
    "TokenDomains": {},
    "AssociationConfig": {
      "RequestBody": {
        "property1": {
          "DefaultSizeInspectionLimit": {}
        },
        "property2": {
          "DefaultSizeInspectionLimit": {}
        }
      }
    }
  }'
```

`POST /#X-Amz-Target=AWSWAF_20190729.UpdateWebACL`

<p>Updates the specified <a>WebACL</a>. While updating a web ACL, WAF provides continuous coverage to the resources that you have associated with the web ACL. </p> <note> <p>This operation completely replaces the mutable specifications that you already have for the web ACL with the ones that you provide to this call. </p> <p>To modify a web ACL, do the following: </p> <ol> <li> <p>Retrieve it by calling <a>GetWebACL</a> </p> </li> <li> <p>Update its settings as needed</p> </li> <li> <p>Provide the complete web ACL specification to this call</p> </li> </ol> </note> <p>When you make changes to web ACLs or web ACL components, like rules and rule groups, WAF propagates the changes everywhere that the web ACL and its components are stored and used. Your changes are applied within seconds, but there might be a brief period of inconsistency when the changes have arrived in some places and not in others. So, for example, if you change a rule action setting, the action might be the old action in one area and the new action in another area. Or if you add an IP address to an IP set used in a blocking rule, the new address might briefly be blocked in one area while still allowed in another. This temporary inconsistency can occur when you first associate a web ACL with an Amazon Web Services resource and when you change a web ACL that is already associated with a resource. Generally, any inconsistencies of this type last only a few seconds.</p> <p> A web ACL defines a collection of rules to use to inspect and control web requests. Each rule has an action defined (allow, block, or count) for requests that match the statement of the rule. In the web ACL, you assign a default action to take (allow, block) for any request that does not match any of the rules. The rules in a web ACL can be a combination of the types <a>Rule</a>, <a>RuleGroup</a>, and managed rule group. You can associate a web ACL with one or more Amazon Web Services resources to protect. The resources can be an Amazon CloudFront distribution, an Amazon API Gateway REST API, an Application Load Balancer, an AppSync GraphQL API, an Amazon Cognito user pool, or an App Runner service. </p>

> Body parameter

```json
{
  "Name": {},
  "Scope": {},
  "Id": {},
  "DefaultAction": {
    "Block": {
      "CustomResponse": {
        "ResponseCode": {},
        "CustomResponseBodyKey": {},
        "ResponseHeaders": {}
      }
    },
    "Allow": {
      "CustomRequestHandling": {
        "InsertHeaders": {}
      }
    }
  },
  "Description": {},
  "Rules": {},
  "VisibilityConfig": {
    "SampledRequestsEnabled": {},
    "CloudWatchMetricsEnabled": {},
    "MetricName": {}
  },
  "LockToken": {},
  "CustomResponseBodies": {
    "property1": {
      "ContentType": {},
      "Content": {}
    },
    "property2": {
      "ContentType": {},
      "Content": {}
    }
  },
  "CaptchaConfig": {
    "ImmunityTimeProperty": {
      "ImmunityTime": {}
    }
  },
  "ChallengeConfig": {
    "ImmunityTimeProperty": {
      "ImmunityTime": {}
    }
  },
  "TokenDomains": {},
  "AssociationConfig": {
    "RequestBody": {
      "property1": {
        "DefaultSizeInspectionLimit": {}
      },
      "property2": {
        "DefaultSizeInspectionLimit": {}
      }
    }
  }
}
```

<h3 id="updatewebacl-parameters">Parameters</h3>

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
|body|body|[UpdateWebACLRequest](#schemaupdatewebaclrequest)|true|none|
|» Name|body|object|true|none|
|» Scope|body|object|true|none|
|» Id|body|object|true|none|
|» DefaultAction|body|object|true|none|
|» » Block|body|object|false|none|
|» » » CustomResponse|body|object|false|none|
|» » » » ResponseCode|body|object|true|none|
|» » » » CustomResponseBodyKey|body|object|false|none|
|» » » » ResponseHeaders|body|object|false|none|
|» » Allow|body|object|false|none|
|» » » CustomRequestHandling|body|object|false|none|
|» » » » InsertHeaders|body|object|true|none|
|» Description|body|object|false|none|
|» Rules|body|object|false|none|
|» VisibilityConfig|body|object|true|none|
|» » SampledRequestsEnabled|body|object|true|none|
|» » CloudWatchMetricsEnabled|body|object|true|none|
|» » MetricName|body|object|true|none|
|» LockToken|body|object|true|none|
|» CustomResponseBodies|body|object|false|none|
|» » **additionalProperties**|body|[CustomResponseBody](#schemacustomresponsebody)|false|The response body to use in a custom response to a web request. This is referenced by key from <a>CustomResponse</a> <code>CustomResponseBodyKey</code>.|
|» CaptchaConfig|body|object|false|none|
|» » ImmunityTimeProperty|body|object|false|none|
|» » » ImmunityTime|body|object|true|none|
|» ChallengeConfig|body|object|false|none|
|» » ImmunityTimeProperty|body|object|false|none|
|» » » ImmunityTime|body|object|true|none|
|» TokenDomains|body|object|false|none|
|» AssociationConfig|body|object|false|none|
|» » RequestBody|body|object|false|none|
|» » » **additionalProperties**|body|[RequestBodyAssociatedResourceTypeConfig](#schemarequestbodyassociatedresourcetypeconfig)|false|<p>Customizes the maximum size of the request body that your protected CloudFront distributions forward to WAF for inspection. The default size is 16 KB (16,384 kilobytes). </p> <note> <p>You are charged additional fees when your protected resources forward body sizes that are larger than the default. For more information, see <a href="http://aws.amazon.com/waf/pricing/">WAF Pricing</a>.</p> </note> <p>This is used in the <code>AssociationConfig</code> of the web ACL. </p>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20190729.UpdateWebACL|

> Example responses

> 200 Response

```json
{
  "NextLockToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

> 489 Response

```json
null
```

> 490 Response

```json
null
```

> 491 Response

```json
null
```

<h3 id="updatewebacl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateWebACLResponse](#schemaupdatewebaclresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|482|482|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|483|483|WAFDuplicateItemException|[WAFDuplicateItemException](#schemawafduplicateitemexception)|
|484|484|WAFOptimisticLockException|[WAFOptimisticLockException](#schemawafoptimisticlockexception)|
|485|485|WAFLimitsExceededException|[WAFLimitsExceededException](#schemawaflimitsexceededexception)|
|486|486|WAFInvalidResourceException|[WAFInvalidResourceException](#schemawafinvalidresourceexception)|
|487|487|WAFUnavailableEntityException|[WAFUnavailableEntityException](#schemawafunavailableentityexception)|
|488|488|WAFSubscriptionNotFoundException|[WAFSubscriptionNotFoundException](#schemawafsubscriptionnotfoundexception)|
|489|489|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|
|490|490|WAFExpiredManagedRuleGroupVersionException|[WAFExpiredManagedRuleGroupVersionException](#schemawafexpiredmanagedrulegroupversionexception)|
|491|491|WAFConfigurationWarningException|[WAFConfigurationWarningException](#schemawafconfigurationwarningexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AssociateWebACLResponse">AssociateWebACLResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociatewebaclresponse"></a>
<a id="schema_AssociateWebACLResponse"></a>
<a id="tocSassociatewebaclresponse"></a>
<a id="tocsassociatewebaclresponse"></a>

```json
{}
```

<h2 id="tocS_AssociateWebACLRequest">AssociateWebACLRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatewebaclrequest"></a>
<a id="schema_AssociateWebACLRequest"></a>
<a id="tocSassociatewebaclrequest"></a>
<a id="tocsassociatewebaclrequest"></a>

```json
{
  "WebACLArn": {},
  "ResourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WebACLArn|object|true|none|none|
|ResourceArn|object|true|none|none|

<h2 id="tocS_WAFInternalErrorException">WAFInternalErrorException</h2>
<!-- backwards compatibility -->
<a id="schemawafinternalerrorexception"></a>
<a id="schema_WAFInternalErrorException"></a>
<a id="tocSwafinternalerrorexception"></a>
<a id="tocswafinternalerrorexception"></a>

```json
null
```

<h2 id="tocS_WAFInvalidParameterException">WAFInvalidParameterException</h2>
<!-- backwards compatibility -->
<a id="schemawafinvalidparameterexception"></a>
<a id="schema_WAFInvalidParameterException"></a>
<a id="tocSwafinvalidparameterexception"></a>
<a id="tocswafinvalidparameterexception"></a>

```json
null
```

<h2 id="tocS_WAFNonexistentItemException">WAFNonexistentItemException</h2>
<!-- backwards compatibility -->
<a id="schemawafnonexistentitemexception"></a>
<a id="schema_WAFNonexistentItemException"></a>
<a id="tocSwafnonexistentitemexception"></a>
<a id="tocswafnonexistentitemexception"></a>

```json
null
```

<h2 id="tocS_WAFUnavailableEntityException">WAFUnavailableEntityException</h2>
<!-- backwards compatibility -->
<a id="schemawafunavailableentityexception"></a>
<a id="schema_WAFUnavailableEntityException"></a>
<a id="tocSwafunavailableentityexception"></a>
<a id="tocswafunavailableentityexception"></a>

```json
null
```

<h2 id="tocS_WAFInvalidOperationException">WAFInvalidOperationException</h2>
<!-- backwards compatibility -->
<a id="schemawafinvalidoperationexception"></a>
<a id="schema_WAFInvalidOperationException"></a>
<a id="tocSwafinvalidoperationexception"></a>
<a id="tocswafinvalidoperationexception"></a>

```json
null
```

<h2 id="tocS_CheckCapacityResponse">CheckCapacityResponse</h2>
<!-- backwards compatibility -->
<a id="schemacheckcapacityresponse"></a>
<a id="schema_CheckCapacityResponse"></a>
<a id="tocScheckcapacityresponse"></a>
<a id="tocscheckcapacityresponse"></a>

```json
{
  "Capacity": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Capacity|object|false|none|none|

<h2 id="tocS_CheckCapacityRequest">CheckCapacityRequest</h2>
<!-- backwards compatibility -->
<a id="schemacheckcapacityrequest"></a>
<a id="schema_CheckCapacityRequest"></a>
<a id="tocScheckcapacityrequest"></a>
<a id="tocscheckcapacityrequest"></a>

```json
{
  "Scope": {},
  "Rules": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Scope|object|true|none|none|
|Rules|object|true|none|none|

<h2 id="tocS_WAFLimitsExceededException">WAFLimitsExceededException</h2>
<!-- backwards compatibility -->
<a id="schemawaflimitsexceededexception"></a>
<a id="schema_WAFLimitsExceededException"></a>
<a id="tocSwaflimitsexceededexception"></a>
<a id="tocswaflimitsexceededexception"></a>

```json
null
```

<h2 id="tocS_WAFInvalidResourceException">WAFInvalidResourceException</h2>
<!-- backwards compatibility -->
<a id="schemawafinvalidresourceexception"></a>
<a id="schema_WAFInvalidResourceException"></a>
<a id="tocSwafinvalidresourceexception"></a>
<a id="tocswafinvalidresourceexception"></a>

```json
null
```

<h2 id="tocS_WAFSubscriptionNotFoundException">WAFSubscriptionNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemawafsubscriptionnotfoundexception"></a>
<a id="schema_WAFSubscriptionNotFoundException"></a>
<a id="tocSwafsubscriptionnotfoundexception"></a>
<a id="tocswafsubscriptionnotfoundexception"></a>

```json
null
```

<h2 id="tocS_WAFExpiredManagedRuleGroupVersionException">WAFExpiredManagedRuleGroupVersionException</h2>
<!-- backwards compatibility -->
<a id="schemawafexpiredmanagedrulegroupversionexception"></a>
<a id="schema_WAFExpiredManagedRuleGroupVersionException"></a>
<a id="tocSwafexpiredmanagedrulegroupversionexception"></a>
<a id="tocswafexpiredmanagedrulegroupversionexception"></a>

```json
null
```

<h2 id="tocS_CreateAPIKeyResponse">CreateAPIKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateapikeyresponse"></a>
<a id="schema_CreateAPIKeyResponse"></a>
<a id="tocScreateapikeyresponse"></a>
<a id="tocscreateapikeyresponse"></a>

```json
{
  "APIKey": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|APIKey|object|false|none|none|

<h2 id="tocS_CreateAPIKeyRequest">CreateAPIKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateapikeyrequest"></a>
<a id="schema_CreateAPIKeyRequest"></a>
<a id="tocScreateapikeyrequest"></a>
<a id="tocscreateapikeyrequest"></a>

```json
{
  "Scope": {},
  "TokenDomains": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Scope|object|true|none|none|
|TokenDomains|object|true|none|none|

<h2 id="tocS_CreateIPSetResponse">CreateIPSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateipsetresponse"></a>
<a id="schema_CreateIPSetResponse"></a>
<a id="tocScreateipsetresponse"></a>
<a id="tocscreateipsetresponse"></a>

```json
{
  "Summary": {
    "Name": {},
    "Id": {},
    "Description": {},
    "LockToken": {},
    "ARN": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Summary|object|false|none|none|

<h2 id="tocS_CreateIPSetRequest">CreateIPSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateipsetrequest"></a>
<a id="schema_CreateIPSetRequest"></a>
<a id="tocScreateipsetrequest"></a>
<a id="tocscreateipsetrequest"></a>

```json
{
  "Name": {},
  "Scope": {},
  "Description": {},
  "IPAddressVersion": {},
  "Addresses": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Scope|object|true|none|none|
|Description|object|false|none|none|
|IPAddressVersion|object|true|none|none|
|Addresses|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_WAFDuplicateItemException">WAFDuplicateItemException</h2>
<!-- backwards compatibility -->
<a id="schemawafduplicateitemexception"></a>
<a id="schema_WAFDuplicateItemException"></a>
<a id="tocSwafduplicateitemexception"></a>
<a id="tocswafduplicateitemexception"></a>

```json
null
```

<h2 id="tocS_WAFOptimisticLockException">WAFOptimisticLockException</h2>
<!-- backwards compatibility -->
<a id="schemawafoptimisticlockexception"></a>
<a id="schema_WAFOptimisticLockException"></a>
<a id="tocSwafoptimisticlockexception"></a>
<a id="tocswafoptimisticlockexception"></a>

```json
null
```

<h2 id="tocS_WAFTagOperationException">WAFTagOperationException</h2>
<!-- backwards compatibility -->
<a id="schemawaftagoperationexception"></a>
<a id="schema_WAFTagOperationException"></a>
<a id="tocSwaftagoperationexception"></a>
<a id="tocswaftagoperationexception"></a>

```json
null
```

<h2 id="tocS_WAFTagOperationInternalErrorException">WAFTagOperationInternalErrorException</h2>
<!-- backwards compatibility -->
<a id="schemawaftagoperationinternalerrorexception"></a>
<a id="schema_WAFTagOperationInternalErrorException"></a>
<a id="tocSwaftagoperationinternalerrorexception"></a>
<a id="tocswaftagoperationinternalerrorexception"></a>

```json
null
```

<h2 id="tocS_CreateRegexPatternSetResponse">CreateRegexPatternSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateregexpatternsetresponse"></a>
<a id="schema_CreateRegexPatternSetResponse"></a>
<a id="tocScreateregexpatternsetresponse"></a>
<a id="tocscreateregexpatternsetresponse"></a>

```json
{
  "Summary": {
    "Name": {},
    "Id": {},
    "Description": {},
    "LockToken": {},
    "ARN": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Summary|object|false|none|none|

<h2 id="tocS_CreateRegexPatternSetRequest">CreateRegexPatternSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateregexpatternsetrequest"></a>
<a id="schema_CreateRegexPatternSetRequest"></a>
<a id="tocScreateregexpatternsetrequest"></a>
<a id="tocscreateregexpatternsetrequest"></a>

```json
{
  "Name": {},
  "Scope": {},
  "Description": {},
  "RegularExpressionList": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Scope|object|true|none|none|
|Description|object|false|none|none|
|RegularExpressionList|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateRuleGroupResponse">CreateRuleGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreaterulegroupresponse"></a>
<a id="schema_CreateRuleGroupResponse"></a>
<a id="tocScreaterulegroupresponse"></a>
<a id="tocscreaterulegroupresponse"></a>

```json
{
  "Summary": {
    "Name": {},
    "Id": {},
    "Description": {},
    "LockToken": {},
    "ARN": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Summary|object|false|none|none|

<h2 id="tocS_CreateRuleGroupRequest">CreateRuleGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreaterulegrouprequest"></a>
<a id="schema_CreateRuleGroupRequest"></a>
<a id="tocScreaterulegrouprequest"></a>
<a id="tocscreaterulegrouprequest"></a>

```json
{
  "Name": {},
  "Scope": {},
  "Capacity": {},
  "Description": {},
  "Rules": {},
  "VisibilityConfig": {
    "SampledRequestsEnabled": {},
    "CloudWatchMetricsEnabled": {},
    "MetricName": {}
  },
  "Tags": {},
  "CustomResponseBodies": {
    "property1": {
      "ContentType": {},
      "Content": {}
    },
    "property2": {
      "ContentType": {},
      "Content": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Scope|object|true|none|none|
|Capacity|object|true|none|none|
|Description|object|false|none|none|
|Rules|object|false|none|none|
|VisibilityConfig|object|true|none|none|
|Tags|object|false|none|none|
|CustomResponseBodies|object|false|none|none|

<h2 id="tocS_CreateWebACLResponse">CreateWebACLResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatewebaclresponse"></a>
<a id="schema_CreateWebACLResponse"></a>
<a id="tocScreatewebaclresponse"></a>
<a id="tocscreatewebaclresponse"></a>

```json
{
  "Summary": {
    "Name": {},
    "Id": {},
    "Description": {},
    "LockToken": {},
    "ARN": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Summary|object|false|none|none|

<h2 id="tocS_CreateWebACLRequest">CreateWebACLRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatewebaclrequest"></a>
<a id="schema_CreateWebACLRequest"></a>
<a id="tocScreatewebaclrequest"></a>
<a id="tocscreatewebaclrequest"></a>

```json
{
  "Name": {},
  "Scope": {},
  "DefaultAction": {
    "Block": {
      "CustomResponse": {
        "ResponseCode": {},
        "CustomResponseBodyKey": {},
        "ResponseHeaders": {}
      }
    },
    "Allow": {
      "CustomRequestHandling": {
        "InsertHeaders": {}
      }
    }
  },
  "Description": {},
  "Rules": {},
  "VisibilityConfig": {
    "SampledRequestsEnabled": {},
    "CloudWatchMetricsEnabled": {},
    "MetricName": {}
  },
  "Tags": {},
  "CustomResponseBodies": {
    "property1": {
      "ContentType": {},
      "Content": {}
    },
    "property2": {
      "ContentType": {},
      "Content": {}
    }
  },
  "CaptchaConfig": {
    "ImmunityTimeProperty": {
      "ImmunityTime": {}
    }
  },
  "ChallengeConfig": {
    "ImmunityTimeProperty": {
      "ImmunityTime": {}
    }
  },
  "TokenDomains": {},
  "AssociationConfig": {
    "RequestBody": {
      "property1": {
        "DefaultSizeInspectionLimit": {}
      },
      "property2": {
        "DefaultSizeInspectionLimit": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Scope|object|true|none|none|
|DefaultAction|object|true|none|none|
|Description|object|false|none|none|
|Rules|object|false|none|none|
|VisibilityConfig|object|true|none|none|
|Tags|object|false|none|none|
|CustomResponseBodies|object|false|none|none|
|CaptchaConfig|object|false|none|none|
|ChallengeConfig|object|false|none|none|
|TokenDomains|object|false|none|none|
|AssociationConfig|object|false|none|none|

<h2 id="tocS_WAFConfigurationWarningException">WAFConfigurationWarningException</h2>
<!-- backwards compatibility -->
<a id="schemawafconfigurationwarningexception"></a>
<a id="schema_WAFConfigurationWarningException"></a>
<a id="tocSwafconfigurationwarningexception"></a>
<a id="tocswafconfigurationwarningexception"></a>

```json
null
```

<h2 id="tocS_DeleteFirewallManagerRuleGroupsResponse">DeleteFirewallManagerRuleGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletefirewallmanagerrulegroupsresponse"></a>
<a id="schema_DeleteFirewallManagerRuleGroupsResponse"></a>
<a id="tocSdeletefirewallmanagerrulegroupsresponse"></a>
<a id="tocsdeletefirewallmanagerrulegroupsresponse"></a>

```json
{
  "NextWebACLLockToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextWebACLLockToken|object|false|none|none|

<h2 id="tocS_DeleteFirewallManagerRuleGroupsRequest">DeleteFirewallManagerRuleGroupsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletefirewallmanagerrulegroupsrequest"></a>
<a id="schema_DeleteFirewallManagerRuleGroupsRequest"></a>
<a id="tocSdeletefirewallmanagerrulegroupsrequest"></a>
<a id="tocsdeletefirewallmanagerrulegroupsrequest"></a>

```json
{
  "WebACLArn": {},
  "WebACLLockToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WebACLArn|object|true|none|none|
|WebACLLockToken|object|true|none|none|

<h2 id="tocS_DeleteIPSetResponse">DeleteIPSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteipsetresponse"></a>
<a id="schema_DeleteIPSetResponse"></a>
<a id="tocSdeleteipsetresponse"></a>
<a id="tocsdeleteipsetresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteIPSetRequest">DeleteIPSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteipsetrequest"></a>
<a id="schema_DeleteIPSetRequest"></a>
<a id="tocSdeleteipsetrequest"></a>
<a id="tocsdeleteipsetrequest"></a>

```json
{
  "Name": {},
  "Scope": {},
  "Id": {},
  "LockToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Scope|object|true|none|none|
|Id|object|true|none|none|
|LockToken|object|true|none|none|

<h2 id="tocS_WAFAssociatedItemException">WAFAssociatedItemException</h2>
<!-- backwards compatibility -->
<a id="schemawafassociateditemexception"></a>
<a id="schema_WAFAssociatedItemException"></a>
<a id="tocSwafassociateditemexception"></a>
<a id="tocswafassociateditemexception"></a>

```json
null
```

<h2 id="tocS_DeleteLoggingConfigurationResponse">DeleteLoggingConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteloggingconfigurationresponse"></a>
<a id="schema_DeleteLoggingConfigurationResponse"></a>
<a id="tocSdeleteloggingconfigurationresponse"></a>
<a id="tocsdeleteloggingconfigurationresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteLoggingConfigurationRequest">DeleteLoggingConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteloggingconfigurationrequest"></a>
<a id="schema_DeleteLoggingConfigurationRequest"></a>
<a id="tocSdeleteloggingconfigurationrequest"></a>
<a id="tocsdeleteloggingconfigurationrequest"></a>

```json
{
  "ResourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|

<h2 id="tocS_DeletePermissionPolicyResponse">DeletePermissionPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletepermissionpolicyresponse"></a>
<a id="schema_DeletePermissionPolicyResponse"></a>
<a id="tocSdeletepermissionpolicyresponse"></a>
<a id="tocsdeletepermissionpolicyresponse"></a>

```json
{}
```

<h2 id="tocS_DeletePermissionPolicyRequest">DeletePermissionPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletepermissionpolicyrequest"></a>
<a id="schema_DeletePermissionPolicyRequest"></a>
<a id="tocSdeletepermissionpolicyrequest"></a>
<a id="tocsdeletepermissionpolicyrequest"></a>

```json
{
  "ResourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|

<h2 id="tocS_DeleteRegexPatternSetResponse">DeleteRegexPatternSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteregexpatternsetresponse"></a>
<a id="schema_DeleteRegexPatternSetResponse"></a>
<a id="tocSdeleteregexpatternsetresponse"></a>
<a id="tocsdeleteregexpatternsetresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteRegexPatternSetRequest">DeleteRegexPatternSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteregexpatternsetrequest"></a>
<a id="schema_DeleteRegexPatternSetRequest"></a>
<a id="tocSdeleteregexpatternsetrequest"></a>
<a id="tocsdeleteregexpatternsetrequest"></a>

```json
{
  "Name": {},
  "Scope": {},
  "Id": {},
  "LockToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Scope|object|true|none|none|
|Id|object|true|none|none|
|LockToken|object|true|none|none|

<h2 id="tocS_DeleteRuleGroupResponse">DeleteRuleGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleterulegroupresponse"></a>
<a id="schema_DeleteRuleGroupResponse"></a>
<a id="tocSdeleterulegroupresponse"></a>
<a id="tocsdeleterulegroupresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteRuleGroupRequest">DeleteRuleGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleterulegrouprequest"></a>
<a id="schema_DeleteRuleGroupRequest"></a>
<a id="tocSdeleterulegrouprequest"></a>
<a id="tocsdeleterulegrouprequest"></a>

```json
{
  "Name": {},
  "Scope": {},
  "Id": {},
  "LockToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Scope|object|true|none|none|
|Id|object|true|none|none|
|LockToken|object|true|none|none|

<h2 id="tocS_DeleteWebACLResponse">DeleteWebACLResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletewebaclresponse"></a>
<a id="schema_DeleteWebACLResponse"></a>
<a id="tocSdeletewebaclresponse"></a>
<a id="tocsdeletewebaclresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteWebACLRequest">DeleteWebACLRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletewebaclrequest"></a>
<a id="schema_DeleteWebACLRequest"></a>
<a id="tocSdeletewebaclrequest"></a>
<a id="tocsdeletewebaclrequest"></a>

```json
{
  "Name": {},
  "Scope": {},
  "Id": {},
  "LockToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Scope|object|true|none|none|
|Id|object|true|none|none|
|LockToken|object|true|none|none|

<h2 id="tocS_DescribeManagedRuleGroupResponse">DescribeManagedRuleGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribemanagedrulegroupresponse"></a>
<a id="schema_DescribeManagedRuleGroupResponse"></a>
<a id="tocSdescribemanagedrulegroupresponse"></a>
<a id="tocsdescribemanagedrulegroupresponse"></a>

```json
{
  "VersionName": {},
  "SnsTopicArn": {},
  "Capacity": {},
  "Rules": {},
  "LabelNamespace": {},
  "AvailableLabels": {},
  "ConsumedLabels": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VersionName|object|false|none|none|
|SnsTopicArn|object|false|none|none|
|Capacity|object|false|none|none|
|Rules|object|false|none|none|
|LabelNamespace|object|false|none|none|
|AvailableLabels|object|false|none|none|
|ConsumedLabels|object|false|none|none|

<h2 id="tocS_DescribeManagedRuleGroupRequest">DescribeManagedRuleGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribemanagedrulegrouprequest"></a>
<a id="schema_DescribeManagedRuleGroupRequest"></a>
<a id="tocSdescribemanagedrulegrouprequest"></a>
<a id="tocsdescribemanagedrulegrouprequest"></a>

```json
{
  "VendorName": {},
  "Name": {},
  "Scope": {},
  "VersionName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VendorName|object|true|none|none|
|Name|object|true|none|none|
|Scope|object|true|none|none|
|VersionName|object|false|none|none|

<h2 id="tocS_DisassociateWebACLResponse">DisassociateWebACLResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatewebaclresponse"></a>
<a id="schema_DisassociateWebACLResponse"></a>
<a id="tocSdisassociatewebaclresponse"></a>
<a id="tocsdisassociatewebaclresponse"></a>

```json
{}
```

<h2 id="tocS_DisassociateWebACLRequest">DisassociateWebACLRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatewebaclrequest"></a>
<a id="schema_DisassociateWebACLRequest"></a>
<a id="tocSdisassociatewebaclrequest"></a>
<a id="tocsdisassociatewebaclrequest"></a>

```json
{
  "ResourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|

<h2 id="tocS_GenerateMobileSdkReleaseUrlResponse">GenerateMobileSdkReleaseUrlResponse</h2>
<!-- backwards compatibility -->
<a id="schemageneratemobilesdkreleaseurlresponse"></a>
<a id="schema_GenerateMobileSdkReleaseUrlResponse"></a>
<a id="tocSgeneratemobilesdkreleaseurlresponse"></a>
<a id="tocsgeneratemobilesdkreleaseurlresponse"></a>

```json
{
  "Url": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Url|object|false|none|none|

<h2 id="tocS_GenerateMobileSdkReleaseUrlRequest">GenerateMobileSdkReleaseUrlRequest</h2>
<!-- backwards compatibility -->
<a id="schemageneratemobilesdkreleaseurlrequest"></a>
<a id="schema_GenerateMobileSdkReleaseUrlRequest"></a>
<a id="tocSgeneratemobilesdkreleaseurlrequest"></a>
<a id="tocsgeneratemobilesdkreleaseurlrequest"></a>

```json
{
  "Platform": {},
  "ReleaseVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Platform|object|true|none|none|
|ReleaseVersion|object|true|none|none|

<h2 id="tocS_GetDecryptedAPIKeyResponse">GetDecryptedAPIKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdecryptedapikeyresponse"></a>
<a id="schema_GetDecryptedAPIKeyResponse"></a>
<a id="tocSgetdecryptedapikeyresponse"></a>
<a id="tocsgetdecryptedapikeyresponse"></a>

```json
{
  "TokenDomains": {},
  "CreationTimestamp": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TokenDomains|object|false|none|none|
|CreationTimestamp|object|false|none|none|

<h2 id="tocS_GetDecryptedAPIKeyRequest">GetDecryptedAPIKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdecryptedapikeyrequest"></a>
<a id="schema_GetDecryptedAPIKeyRequest"></a>
<a id="tocSgetdecryptedapikeyrequest"></a>
<a id="tocsgetdecryptedapikeyrequest"></a>

```json
{
  "Scope": {},
  "APIKey": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Scope|object|true|none|none|
|APIKey|object|true|none|none|

<h2 id="tocS_GetIPSetResponse">GetIPSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetipsetresponse"></a>
<a id="schema_GetIPSetResponse"></a>
<a id="tocSgetipsetresponse"></a>
<a id="tocsgetipsetresponse"></a>

```json
{
  "IPSet": {
    "Name": {},
    "Id": {},
    "ARN": {},
    "Description": {},
    "IPAddressVersion": {},
    "Addresses": {}
  },
  "LockToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IPSet|object|false|none|none|
|LockToken|object|false|none|none|

<h2 id="tocS_GetIPSetRequest">GetIPSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetipsetrequest"></a>
<a id="schema_GetIPSetRequest"></a>
<a id="tocSgetipsetrequest"></a>
<a id="tocsgetipsetrequest"></a>

```json
{
  "Name": {},
  "Scope": {},
  "Id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Scope|object|true|none|none|
|Id|object|true|none|none|

<h2 id="tocS_GetLoggingConfigurationResponse">GetLoggingConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetloggingconfigurationresponse"></a>
<a id="schema_GetLoggingConfigurationResponse"></a>
<a id="tocSgetloggingconfigurationresponse"></a>
<a id="tocsgetloggingconfigurationresponse"></a>

```json
{
  "LoggingConfiguration": {
    "ResourceArn": {},
    "LogDestinationConfigs": {},
    "RedactedFields": {},
    "ManagedByFirewallManager": {},
    "LoggingFilter": {
      "Filters": {},
      "DefaultBehavior": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoggingConfiguration|object|false|none|none|

<h2 id="tocS_GetLoggingConfigurationRequest">GetLoggingConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetloggingconfigurationrequest"></a>
<a id="schema_GetLoggingConfigurationRequest"></a>
<a id="tocSgetloggingconfigurationrequest"></a>
<a id="tocsgetloggingconfigurationrequest"></a>

```json
{
  "ResourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|

<h2 id="tocS_GetManagedRuleSetResponse">GetManagedRuleSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetmanagedrulesetresponse"></a>
<a id="schema_GetManagedRuleSetResponse"></a>
<a id="tocSgetmanagedrulesetresponse"></a>
<a id="tocsgetmanagedrulesetresponse"></a>

```json
{
  "ManagedRuleSet": {
    "Name": {},
    "Id": {},
    "ARN": {},
    "Description": {},
    "PublishedVersions": {
      "property1": {
        "AssociatedRuleGroupArn": {},
        "Capacity": {},
        "ForecastedLifetime": {},
        "PublishTimestamp": {},
        "LastUpdateTimestamp": {},
        "ExpiryTimestamp": {}
      },
      "property2": {
        "AssociatedRuleGroupArn": {},
        "Capacity": {},
        "ForecastedLifetime": {},
        "PublishTimestamp": {},
        "LastUpdateTimestamp": {},
        "ExpiryTimestamp": {}
      }
    },
    "RecommendedVersion": {},
    "LabelNamespace": {}
  },
  "LockToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ManagedRuleSet|object|false|none|none|
|LockToken|object|false|none|none|

<h2 id="tocS_GetManagedRuleSetRequest">GetManagedRuleSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetmanagedrulesetrequest"></a>
<a id="schema_GetManagedRuleSetRequest"></a>
<a id="tocSgetmanagedrulesetrequest"></a>
<a id="tocsgetmanagedrulesetrequest"></a>

```json
{
  "Name": {},
  "Scope": {},
  "Id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Scope|object|true|none|none|
|Id|object|true|none|none|

<h2 id="tocS_GetMobileSdkReleaseResponse">GetMobileSdkReleaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetmobilesdkreleaseresponse"></a>
<a id="schema_GetMobileSdkReleaseResponse"></a>
<a id="tocSgetmobilesdkreleaseresponse"></a>
<a id="tocsgetmobilesdkreleaseresponse"></a>

```json
{
  "MobileSdkRelease": {
    "ReleaseVersion": {},
    "Timestamp": {},
    "ReleaseNotes": {},
    "Tags": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MobileSdkRelease|object|false|none|none|

<h2 id="tocS_GetMobileSdkReleaseRequest">GetMobileSdkReleaseRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetmobilesdkreleaserequest"></a>
<a id="schema_GetMobileSdkReleaseRequest"></a>
<a id="tocSgetmobilesdkreleaserequest"></a>
<a id="tocsgetmobilesdkreleaserequest"></a>

```json
{
  "Platform": {},
  "ReleaseVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Platform|object|true|none|none|
|ReleaseVersion|object|true|none|none|

<h2 id="tocS_GetPermissionPolicyResponse">GetPermissionPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetpermissionpolicyresponse"></a>
<a id="schema_GetPermissionPolicyResponse"></a>
<a id="tocSgetpermissionpolicyresponse"></a>
<a id="tocsgetpermissionpolicyresponse"></a>

```json
{
  "Policy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Policy|object|false|none|none|

<h2 id="tocS_GetPermissionPolicyRequest">GetPermissionPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetpermissionpolicyrequest"></a>
<a id="schema_GetPermissionPolicyRequest"></a>
<a id="tocSgetpermissionpolicyrequest"></a>
<a id="tocsgetpermissionpolicyrequest"></a>

```json
{
  "ResourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|

<h2 id="tocS_GetRateBasedStatementManagedKeysResponse">GetRateBasedStatementManagedKeysResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetratebasedstatementmanagedkeysresponse"></a>
<a id="schema_GetRateBasedStatementManagedKeysResponse"></a>
<a id="tocSgetratebasedstatementmanagedkeysresponse"></a>
<a id="tocsgetratebasedstatementmanagedkeysresponse"></a>

```json
{
  "ManagedKeysIPV4": {
    "IPAddressVersion": {},
    "Addresses": {}
  },
  "ManagedKeysIPV6": {
    "IPAddressVersion": {},
    "Addresses": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ManagedKeysIPV4|object|false|none|none|
|ManagedKeysIPV6|object|false|none|none|

<h2 id="tocS_GetRateBasedStatementManagedKeysRequest">GetRateBasedStatementManagedKeysRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetratebasedstatementmanagedkeysrequest"></a>
<a id="schema_GetRateBasedStatementManagedKeysRequest"></a>
<a id="tocSgetratebasedstatementmanagedkeysrequest"></a>
<a id="tocsgetratebasedstatementmanagedkeysrequest"></a>

```json
{
  "Scope": {},
  "WebACLName": {},
  "WebACLId": {},
  "RuleGroupRuleName": {},
  "RuleName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Scope|object|true|none|none|
|WebACLName|object|true|none|none|
|WebACLId|object|true|none|none|
|RuleGroupRuleName|object|false|none|none|
|RuleName|object|true|none|none|

<h2 id="tocS_GetRegexPatternSetResponse">GetRegexPatternSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetregexpatternsetresponse"></a>
<a id="schema_GetRegexPatternSetResponse"></a>
<a id="tocSgetregexpatternsetresponse"></a>
<a id="tocsgetregexpatternsetresponse"></a>

```json
{
  "RegexPatternSet": {
    "Name": {},
    "Id": {},
    "ARN": {},
    "Description": {},
    "RegularExpressionList": {}
  },
  "LockToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RegexPatternSet|object|false|none|none|
|LockToken|object|false|none|none|

<h2 id="tocS_GetRegexPatternSetRequest">GetRegexPatternSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetregexpatternsetrequest"></a>
<a id="schema_GetRegexPatternSetRequest"></a>
<a id="tocSgetregexpatternsetrequest"></a>
<a id="tocsgetregexpatternsetrequest"></a>

```json
{
  "Name": {},
  "Scope": {},
  "Id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Scope|object|true|none|none|
|Id|object|true|none|none|

<h2 id="tocS_GetRuleGroupResponse">GetRuleGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetrulegroupresponse"></a>
<a id="schema_GetRuleGroupResponse"></a>
<a id="tocSgetrulegroupresponse"></a>
<a id="tocsgetrulegroupresponse"></a>

```json
{
  "RuleGroup": {
    "Name": {},
    "Id": {},
    "Capacity": {},
    "ARN": {},
    "Description": {},
    "Rules": {},
    "VisibilityConfig": {
      "SampledRequestsEnabled": {},
      "CloudWatchMetricsEnabled": {},
      "MetricName": {}
    },
    "LabelNamespace": {},
    "CustomResponseBodies": {
      "property1": {
        "ContentType": {},
        "Content": {}
      },
      "property2": {
        "ContentType": {},
        "Content": {}
      }
    },
    "AvailableLabels": {},
    "ConsumedLabels": {}
  },
  "LockToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleGroup|object|false|none|none|
|LockToken|object|false|none|none|

<h2 id="tocS_GetRuleGroupRequest">GetRuleGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetrulegrouprequest"></a>
<a id="schema_GetRuleGroupRequest"></a>
<a id="tocSgetrulegrouprequest"></a>
<a id="tocsgetrulegrouprequest"></a>

```json
{
  "Name": {},
  "Scope": {},
  "Id": {},
  "ARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Scope|object|false|none|none|
|Id|object|false|none|none|
|ARN|object|false|none|none|

<h2 id="tocS_GetSampledRequestsResponse">GetSampledRequestsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsampledrequestsresponse"></a>
<a id="schema_GetSampledRequestsResponse"></a>
<a id="tocSgetsampledrequestsresponse"></a>
<a id="tocsgetsampledrequestsresponse"></a>

```json
{
  "SampledRequests": {},
  "PopulationSize": {},
  "TimeWindow": {
    "StartTime": {},
    "EndTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SampledRequests|object|false|none|none|
|PopulationSize|object|false|none|none|
|TimeWindow|object|false|none|none|

<h2 id="tocS_GetSampledRequestsRequest">GetSampledRequestsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsampledrequestsrequest"></a>
<a id="schema_GetSampledRequestsRequest"></a>
<a id="tocSgetsampledrequestsrequest"></a>
<a id="tocsgetsampledrequestsrequest"></a>

```json
{
  "WebAclArn": {},
  "RuleMetricName": {},
  "Scope": {},
  "TimeWindow": {
    "StartTime": {},
    "EndTime": {}
  },
  "MaxItems": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WebAclArn|object|true|none|none|
|RuleMetricName|object|true|none|none|
|Scope|object|true|none|none|
|TimeWindow|object|true|none|none|
|MaxItems|object|true|none|none|

<h2 id="tocS_GetWebACLResponse">GetWebACLResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetwebaclresponse"></a>
<a id="schema_GetWebACLResponse"></a>
<a id="tocSgetwebaclresponse"></a>
<a id="tocsgetwebaclresponse"></a>

```json
{
  "WebACL": {
    "Name": {},
    "Id": {},
    "ARN": {},
    "DefaultAction": {
      "Block": {
        "CustomResponse": {
          "ResponseCode": {},
          "CustomResponseBodyKey": {},
          "ResponseHeaders": {}
        }
      },
      "Allow": {
        "CustomRequestHandling": {
          "InsertHeaders": {}
        }
      }
    },
    "Description": {},
    "Rules": {},
    "VisibilityConfig": {
      "SampledRequestsEnabled": {},
      "CloudWatchMetricsEnabled": {},
      "MetricName": {}
    },
    "Capacity": {},
    "PreProcessFirewallManagerRuleGroups": {},
    "PostProcessFirewallManagerRuleGroups": {},
    "ManagedByFirewallManager": {},
    "LabelNamespace": {},
    "CustomResponseBodies": {
      "property1": {
        "ContentType": {},
        "Content": {}
      },
      "property2": {
        "ContentType": {},
        "Content": {}
      }
    },
    "CaptchaConfig": {
      "ImmunityTimeProperty": {
        "ImmunityTime": {}
      }
    },
    "ChallengeConfig": {
      "ImmunityTimeProperty": {
        "ImmunityTime": {}
      }
    },
    "TokenDomains": {},
    "AssociationConfig": {
      "RequestBody": {
        "property1": {
          "DefaultSizeInspectionLimit": {}
        },
        "property2": {
          "DefaultSizeInspectionLimit": {}
        }
      }
    }
  },
  "LockToken": {},
  "ApplicationIntegrationURL": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WebACL|object|false|none|none|
|LockToken|object|false|none|none|
|ApplicationIntegrationURL|object|false|none|none|

<h2 id="tocS_GetWebACLRequest">GetWebACLRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetwebaclrequest"></a>
<a id="schema_GetWebACLRequest"></a>
<a id="tocSgetwebaclrequest"></a>
<a id="tocsgetwebaclrequest"></a>

```json
{
  "Name": {},
  "Scope": {},
  "Id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Scope|object|true|none|none|
|Id|object|true|none|none|

<h2 id="tocS_GetWebACLForResourceResponse">GetWebACLForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetwebaclforresourceresponse"></a>
<a id="schema_GetWebACLForResourceResponse"></a>
<a id="tocSgetwebaclforresourceresponse"></a>
<a id="tocsgetwebaclforresourceresponse"></a>

```json
{
  "WebACL": {
    "Name": {},
    "Id": {},
    "ARN": {},
    "DefaultAction": {
      "Block": {
        "CustomResponse": {
          "ResponseCode": {},
          "CustomResponseBodyKey": {},
          "ResponseHeaders": {}
        }
      },
      "Allow": {
        "CustomRequestHandling": {
          "InsertHeaders": {}
        }
      }
    },
    "Description": {},
    "Rules": {},
    "VisibilityConfig": {
      "SampledRequestsEnabled": {},
      "CloudWatchMetricsEnabled": {},
      "MetricName": {}
    },
    "Capacity": {},
    "PreProcessFirewallManagerRuleGroups": {},
    "PostProcessFirewallManagerRuleGroups": {},
    "ManagedByFirewallManager": {},
    "LabelNamespace": {},
    "CustomResponseBodies": {
      "property1": {
        "ContentType": {},
        "Content": {}
      },
      "property2": {
        "ContentType": {},
        "Content": {}
      }
    },
    "CaptchaConfig": {
      "ImmunityTimeProperty": {
        "ImmunityTime": {}
      }
    },
    "ChallengeConfig": {
      "ImmunityTimeProperty": {
        "ImmunityTime": {}
      }
    },
    "TokenDomains": {},
    "AssociationConfig": {
      "RequestBody": {
        "property1": {
          "DefaultSizeInspectionLimit": {}
        },
        "property2": {
          "DefaultSizeInspectionLimit": {}
        }
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WebACL|object|false|none|none|

<h2 id="tocS_GetWebACLForResourceRequest">GetWebACLForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetwebaclforresourcerequest"></a>
<a id="schema_GetWebACLForResourceRequest"></a>
<a id="tocSgetwebaclforresourcerequest"></a>
<a id="tocsgetwebaclforresourcerequest"></a>

```json
{
  "ResourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|

<h2 id="tocS_ListAPIKeysResponse">ListAPIKeysResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistapikeysresponse"></a>
<a id="schema_ListAPIKeysResponse"></a>
<a id="tocSlistapikeysresponse"></a>
<a id="tocslistapikeysresponse"></a>

```json
{
  "NextMarker": {},
  "APIKeySummaries": {},
  "ApplicationIntegrationURL": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|APIKeySummaries|object|false|none|none|
|ApplicationIntegrationURL|object|false|none|none|

<h2 id="tocS_ListAPIKeysRequest">ListAPIKeysRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistapikeysrequest"></a>
<a id="schema_ListAPIKeysRequest"></a>
<a id="tocSlistapikeysrequest"></a>
<a id="tocslistapikeysrequest"></a>

```json
{
  "Scope": {},
  "NextMarker": {},
  "Limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Scope|object|true|none|none|
|NextMarker|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_ListAvailableManagedRuleGroupVersionsResponse">ListAvailableManagedRuleGroupVersionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistavailablemanagedrulegroupversionsresponse"></a>
<a id="schema_ListAvailableManagedRuleGroupVersionsResponse"></a>
<a id="tocSlistavailablemanagedrulegroupversionsresponse"></a>
<a id="tocslistavailablemanagedrulegroupversionsresponse"></a>

```json
{
  "NextMarker": {},
  "Versions": {},
  "CurrentDefaultVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|Versions|object|false|none|none|
|CurrentDefaultVersion|object|false|none|none|

<h2 id="tocS_ListAvailableManagedRuleGroupVersionsRequest">ListAvailableManagedRuleGroupVersionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistavailablemanagedrulegroupversionsrequest"></a>
<a id="schema_ListAvailableManagedRuleGroupVersionsRequest"></a>
<a id="tocSlistavailablemanagedrulegroupversionsrequest"></a>
<a id="tocslistavailablemanagedrulegroupversionsrequest"></a>

```json
{
  "VendorName": {},
  "Name": {},
  "Scope": {},
  "NextMarker": {},
  "Limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VendorName|object|true|none|none|
|Name|object|true|none|none|
|Scope|object|true|none|none|
|NextMarker|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_ListAvailableManagedRuleGroupsResponse">ListAvailableManagedRuleGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistavailablemanagedrulegroupsresponse"></a>
<a id="schema_ListAvailableManagedRuleGroupsResponse"></a>
<a id="tocSlistavailablemanagedrulegroupsresponse"></a>
<a id="tocslistavailablemanagedrulegroupsresponse"></a>

```json
{
  "NextMarker": {},
  "ManagedRuleGroups": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|ManagedRuleGroups|object|false|none|none|

<h2 id="tocS_ListAvailableManagedRuleGroupsRequest">ListAvailableManagedRuleGroupsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistavailablemanagedrulegroupsrequest"></a>
<a id="schema_ListAvailableManagedRuleGroupsRequest"></a>
<a id="tocSlistavailablemanagedrulegroupsrequest"></a>
<a id="tocslistavailablemanagedrulegroupsrequest"></a>

```json
{
  "Scope": {},
  "NextMarker": {},
  "Limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Scope|object|true|none|none|
|NextMarker|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_ListIPSetsResponse">ListIPSetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistipsetsresponse"></a>
<a id="schema_ListIPSetsResponse"></a>
<a id="tocSlistipsetsresponse"></a>
<a id="tocslistipsetsresponse"></a>

```json
{
  "NextMarker": {},
  "IPSets": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|IPSets|object|false|none|none|

<h2 id="tocS_ListIPSetsRequest">ListIPSetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistipsetsrequest"></a>
<a id="schema_ListIPSetsRequest"></a>
<a id="tocSlistipsetsrequest"></a>
<a id="tocslistipsetsrequest"></a>

```json
{
  "Scope": {},
  "NextMarker": {},
  "Limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Scope|object|true|none|none|
|NextMarker|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_ListLoggingConfigurationsResponse">ListLoggingConfigurationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistloggingconfigurationsresponse"></a>
<a id="schema_ListLoggingConfigurationsResponse"></a>
<a id="tocSlistloggingconfigurationsresponse"></a>
<a id="tocslistloggingconfigurationsresponse"></a>

```json
{
  "LoggingConfigurations": {},
  "NextMarker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoggingConfigurations|object|false|none|none|
|NextMarker|object|false|none|none|

<h2 id="tocS_ListLoggingConfigurationsRequest">ListLoggingConfigurationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistloggingconfigurationsrequest"></a>
<a id="schema_ListLoggingConfigurationsRequest"></a>
<a id="tocSlistloggingconfigurationsrequest"></a>
<a id="tocslistloggingconfigurationsrequest"></a>

```json
{
  "Scope": {},
  "NextMarker": {},
  "Limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Scope|object|true|none|none|
|NextMarker|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_ListManagedRuleSetsResponse">ListManagedRuleSetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmanagedrulesetsresponse"></a>
<a id="schema_ListManagedRuleSetsResponse"></a>
<a id="tocSlistmanagedrulesetsresponse"></a>
<a id="tocslistmanagedrulesetsresponse"></a>

```json
{
  "NextMarker": {},
  "ManagedRuleSets": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|ManagedRuleSets|object|false|none|none|

<h2 id="tocS_ListManagedRuleSetsRequest">ListManagedRuleSetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistmanagedrulesetsrequest"></a>
<a id="schema_ListManagedRuleSetsRequest"></a>
<a id="tocSlistmanagedrulesetsrequest"></a>
<a id="tocslistmanagedrulesetsrequest"></a>

```json
{
  "Scope": {},
  "NextMarker": {},
  "Limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Scope|object|true|none|none|
|NextMarker|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_ListMobileSdkReleasesResponse">ListMobileSdkReleasesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmobilesdkreleasesresponse"></a>
<a id="schema_ListMobileSdkReleasesResponse"></a>
<a id="tocSlistmobilesdkreleasesresponse"></a>
<a id="tocslistmobilesdkreleasesresponse"></a>

```json
{
  "ReleaseSummaries": {},
  "NextMarker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReleaseSummaries|object|false|none|none|
|NextMarker|object|false|none|none|

<h2 id="tocS_ListMobileSdkReleasesRequest">ListMobileSdkReleasesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistmobilesdkreleasesrequest"></a>
<a id="schema_ListMobileSdkReleasesRequest"></a>
<a id="tocSlistmobilesdkreleasesrequest"></a>
<a id="tocslistmobilesdkreleasesrequest"></a>

```json
{
  "Platform": {},
  "NextMarker": {},
  "Limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Platform|object|true|none|none|
|NextMarker|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_ListRegexPatternSetsResponse">ListRegexPatternSetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistregexpatternsetsresponse"></a>
<a id="schema_ListRegexPatternSetsResponse"></a>
<a id="tocSlistregexpatternsetsresponse"></a>
<a id="tocslistregexpatternsetsresponse"></a>

```json
{
  "NextMarker": {},
  "RegexPatternSets": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|RegexPatternSets|object|false|none|none|

<h2 id="tocS_ListRegexPatternSetsRequest">ListRegexPatternSetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistregexpatternsetsrequest"></a>
<a id="schema_ListRegexPatternSetsRequest"></a>
<a id="tocSlistregexpatternsetsrequest"></a>
<a id="tocslistregexpatternsetsrequest"></a>

```json
{
  "Scope": {},
  "NextMarker": {},
  "Limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Scope|object|true|none|none|
|NextMarker|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_ListResourcesForWebACLResponse">ListResourcesForWebACLResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistresourcesforwebaclresponse"></a>
<a id="schema_ListResourcesForWebACLResponse"></a>
<a id="tocSlistresourcesforwebaclresponse"></a>
<a id="tocslistresourcesforwebaclresponse"></a>

```json
{
  "ResourceArns": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArns|object|false|none|none|

<h2 id="tocS_ListResourcesForWebACLRequest">ListResourcesForWebACLRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistresourcesforwebaclrequest"></a>
<a id="schema_ListResourcesForWebACLRequest"></a>
<a id="tocSlistresourcesforwebaclrequest"></a>
<a id="tocslistresourcesforwebaclrequest"></a>

```json
{
  "WebACLArn": {},
  "ResourceType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WebACLArn|object|true|none|none|
|ResourceType|object|false|none|none|

<h2 id="tocS_ListRuleGroupsResponse">ListRuleGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistrulegroupsresponse"></a>
<a id="schema_ListRuleGroupsResponse"></a>
<a id="tocSlistrulegroupsresponse"></a>
<a id="tocslistrulegroupsresponse"></a>

```json
{
  "NextMarker": {},
  "RuleGroups": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|RuleGroups|object|false|none|none|

<h2 id="tocS_ListRuleGroupsRequest">ListRuleGroupsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistrulegroupsrequest"></a>
<a id="schema_ListRuleGroupsRequest"></a>
<a id="tocSlistrulegroupsrequest"></a>
<a id="tocslistrulegroupsrequest"></a>

```json
{
  "Scope": {},
  "NextMarker": {},
  "Limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Scope|object|true|none|none|
|NextMarker|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "NextMarker": {},
  "TagInfoForResource": {
    "ResourceARN": {},
    "TagList": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|TagInfoForResource|object|false|none|none|

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{
  "NextMarker": {},
  "Limit": {},
  "ResourceARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|Limit|object|false|none|none|
|ResourceARN|object|true|none|none|

<h2 id="tocS_ListWebACLsResponse">ListWebACLsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistwebaclsresponse"></a>
<a id="schema_ListWebACLsResponse"></a>
<a id="tocSlistwebaclsresponse"></a>
<a id="tocslistwebaclsresponse"></a>

```json
{
  "NextMarker": {},
  "WebACLs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|WebACLs|object|false|none|none|

<h2 id="tocS_ListWebACLsRequest">ListWebACLsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistwebaclsrequest"></a>
<a id="schema_ListWebACLsRequest"></a>
<a id="tocSlistwebaclsrequest"></a>
<a id="tocslistwebaclsrequest"></a>

```json
{
  "Scope": {},
  "NextMarker": {},
  "Limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Scope|object|true|none|none|
|NextMarker|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_PutLoggingConfigurationResponse">PutLoggingConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputloggingconfigurationresponse"></a>
<a id="schema_PutLoggingConfigurationResponse"></a>
<a id="tocSputloggingconfigurationresponse"></a>
<a id="tocsputloggingconfigurationresponse"></a>

```json
{
  "LoggingConfiguration": {
    "ResourceArn": {},
    "LogDestinationConfigs": {},
    "RedactedFields": {},
    "ManagedByFirewallManager": {},
    "LoggingFilter": {
      "Filters": {},
      "DefaultBehavior": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoggingConfiguration|object|false|none|none|

<h2 id="tocS_PutLoggingConfigurationRequest">PutLoggingConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputloggingconfigurationrequest"></a>
<a id="schema_PutLoggingConfigurationRequest"></a>
<a id="tocSputloggingconfigurationrequest"></a>
<a id="tocsputloggingconfigurationrequest"></a>

```json
{
  "LoggingConfiguration": {
    "ResourceArn": {},
    "LogDestinationConfigs": {},
    "RedactedFields": {},
    "ManagedByFirewallManager": {},
    "LoggingFilter": {
      "Filters": {},
      "DefaultBehavior": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoggingConfiguration|object|true|none|none|

<h2 id="tocS_WAFServiceLinkedRoleErrorException">WAFServiceLinkedRoleErrorException</h2>
<!-- backwards compatibility -->
<a id="schemawafservicelinkedroleerrorexception"></a>
<a id="schema_WAFServiceLinkedRoleErrorException"></a>
<a id="tocSwafservicelinkedroleerrorexception"></a>
<a id="tocswafservicelinkedroleerrorexception"></a>

```json
null
```

<h2 id="tocS_WAFLogDestinationPermissionIssueException">WAFLogDestinationPermissionIssueException</h2>
<!-- backwards compatibility -->
<a id="schemawaflogdestinationpermissionissueexception"></a>
<a id="schema_WAFLogDestinationPermissionIssueException"></a>
<a id="tocSwaflogdestinationpermissionissueexception"></a>
<a id="tocswaflogdestinationpermissionissueexception"></a>

```json
null
```

<h2 id="tocS_PutManagedRuleSetVersionsResponse">PutManagedRuleSetVersionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputmanagedrulesetversionsresponse"></a>
<a id="schema_PutManagedRuleSetVersionsResponse"></a>
<a id="tocSputmanagedrulesetversionsresponse"></a>
<a id="tocsputmanagedrulesetversionsresponse"></a>

```json
{
  "NextLockToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextLockToken|object|false|none|none|

<h2 id="tocS_PutManagedRuleSetVersionsRequest">PutManagedRuleSetVersionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputmanagedrulesetversionsrequest"></a>
<a id="schema_PutManagedRuleSetVersionsRequest"></a>
<a id="tocSputmanagedrulesetversionsrequest"></a>
<a id="tocsputmanagedrulesetversionsrequest"></a>

```json
{
  "Name": {},
  "Scope": {},
  "Id": {},
  "LockToken": {},
  "RecommendedVersion": {},
  "VersionsToPublish": {
    "property1": {
      "AssociatedRuleGroupArn": {},
      "ForecastedLifetime": {}
    },
    "property2": {
      "AssociatedRuleGroupArn": {},
      "ForecastedLifetime": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Scope|object|true|none|none|
|Id|object|true|none|none|
|LockToken|object|true|none|none|
|RecommendedVersion|object|false|none|none|
|VersionsToPublish|object|false|none|none|

<h2 id="tocS_PutPermissionPolicyResponse">PutPermissionPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputpermissionpolicyresponse"></a>
<a id="schema_PutPermissionPolicyResponse"></a>
<a id="tocSputpermissionpolicyresponse"></a>
<a id="tocsputpermissionpolicyresponse"></a>

```json
{}
```

<h2 id="tocS_PutPermissionPolicyRequest">PutPermissionPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputpermissionpolicyrequest"></a>
<a id="schema_PutPermissionPolicyRequest"></a>
<a id="tocSputpermissionpolicyrequest"></a>
<a id="tocsputpermissionpolicyrequest"></a>

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

<h2 id="tocS_WAFInvalidPermissionPolicyException">WAFInvalidPermissionPolicyException</h2>
<!-- backwards compatibility -->
<a id="schemawafinvalidpermissionpolicyexception"></a>
<a id="schema_WAFInvalidPermissionPolicyException"></a>
<a id="tocSwafinvalidpermissionpolicyexception"></a>
<a id="tocswafinvalidpermissionpolicyexception"></a>

```json
null
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

<h2 id="tocS_TagResourceRequest">TagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schematagresourcerequest"></a>
<a id="schema_TagResourceRequest"></a>
<a id="tocStagresourcerequest"></a>
<a id="tocstagresourcerequest"></a>

```json
{
  "ResourceARN": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|
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
  "ResourceARN": {},
  "TagKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|
|TagKeys|object|true|none|none|

<h2 id="tocS_UpdateIPSetResponse">UpdateIPSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateipsetresponse"></a>
<a id="schema_UpdateIPSetResponse"></a>
<a id="tocSupdateipsetresponse"></a>
<a id="tocsupdateipsetresponse"></a>

```json
{
  "NextLockToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextLockToken|object|false|none|none|

<h2 id="tocS_UpdateIPSetRequest">UpdateIPSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateipsetrequest"></a>
<a id="schema_UpdateIPSetRequest"></a>
<a id="tocSupdateipsetrequest"></a>
<a id="tocsupdateipsetrequest"></a>

```json
{
  "Name": {},
  "Scope": {},
  "Id": {},
  "Description": {},
  "Addresses": {},
  "LockToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Scope|object|true|none|none|
|Id|object|true|none|none|
|Description|object|false|none|none|
|Addresses|object|true|none|none|
|LockToken|object|true|none|none|

<h2 id="tocS_UpdateManagedRuleSetVersionExpiryDateResponse">UpdateManagedRuleSetVersionExpiryDateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemanagedrulesetversionexpirydateresponse"></a>
<a id="schema_UpdateManagedRuleSetVersionExpiryDateResponse"></a>
<a id="tocSupdatemanagedrulesetversionexpirydateresponse"></a>
<a id="tocsupdatemanagedrulesetversionexpirydateresponse"></a>

```json
{
  "ExpiringVersion": {},
  "ExpiryTimestamp": {},
  "NextLockToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExpiringVersion|object|false|none|none|
|ExpiryTimestamp|object|false|none|none|
|NextLockToken|object|false|none|none|

<h2 id="tocS_UpdateManagedRuleSetVersionExpiryDateRequest">UpdateManagedRuleSetVersionExpiryDateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemanagedrulesetversionexpirydaterequest"></a>
<a id="schema_UpdateManagedRuleSetVersionExpiryDateRequest"></a>
<a id="tocSupdatemanagedrulesetversionexpirydaterequest"></a>
<a id="tocsupdatemanagedrulesetversionexpirydaterequest"></a>

```json
{
  "Name": {},
  "Scope": {},
  "Id": {},
  "LockToken": {},
  "VersionToExpire": {},
  "ExpiryTimestamp": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Scope|object|true|none|none|
|Id|object|true|none|none|
|LockToken|object|true|none|none|
|VersionToExpire|object|true|none|none|
|ExpiryTimestamp|object|true|none|none|

<h2 id="tocS_UpdateRegexPatternSetResponse">UpdateRegexPatternSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateregexpatternsetresponse"></a>
<a id="schema_UpdateRegexPatternSetResponse"></a>
<a id="tocSupdateregexpatternsetresponse"></a>
<a id="tocsupdateregexpatternsetresponse"></a>

```json
{
  "NextLockToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextLockToken|object|false|none|none|

<h2 id="tocS_UpdateRegexPatternSetRequest">UpdateRegexPatternSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateregexpatternsetrequest"></a>
<a id="schema_UpdateRegexPatternSetRequest"></a>
<a id="tocSupdateregexpatternsetrequest"></a>
<a id="tocsupdateregexpatternsetrequest"></a>

```json
{
  "Name": {},
  "Scope": {},
  "Id": {},
  "Description": {},
  "RegularExpressionList": {},
  "LockToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Scope|object|true|none|none|
|Id|object|true|none|none|
|Description|object|false|none|none|
|RegularExpressionList|object|true|none|none|
|LockToken|object|true|none|none|

<h2 id="tocS_UpdateRuleGroupResponse">UpdateRuleGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterulegroupresponse"></a>
<a id="schema_UpdateRuleGroupResponse"></a>
<a id="tocSupdaterulegroupresponse"></a>
<a id="tocsupdaterulegroupresponse"></a>

```json
{
  "NextLockToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextLockToken|object|false|none|none|

<h2 id="tocS_UpdateRuleGroupRequest">UpdateRuleGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterulegrouprequest"></a>
<a id="schema_UpdateRuleGroupRequest"></a>
<a id="tocSupdaterulegrouprequest"></a>
<a id="tocsupdaterulegrouprequest"></a>

```json
{
  "Name": {},
  "Scope": {},
  "Id": {},
  "Description": {},
  "Rules": {},
  "VisibilityConfig": {
    "SampledRequestsEnabled": {},
    "CloudWatchMetricsEnabled": {},
    "MetricName": {}
  },
  "LockToken": {},
  "CustomResponseBodies": {
    "property1": {
      "ContentType": {},
      "Content": {}
    },
    "property2": {
      "ContentType": {},
      "Content": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Scope|object|true|none|none|
|Id|object|true|none|none|
|Description|object|false|none|none|
|Rules|object|false|none|none|
|VisibilityConfig|object|true|none|none|
|LockToken|object|true|none|none|
|CustomResponseBodies|object|false|none|none|

<h2 id="tocS_UpdateWebACLResponse">UpdateWebACLResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatewebaclresponse"></a>
<a id="schema_UpdateWebACLResponse"></a>
<a id="tocSupdatewebaclresponse"></a>
<a id="tocsupdatewebaclresponse"></a>

```json
{
  "NextLockToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextLockToken|object|false|none|none|

<h2 id="tocS_UpdateWebACLRequest">UpdateWebACLRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatewebaclrequest"></a>
<a id="schema_UpdateWebACLRequest"></a>
<a id="tocSupdatewebaclrequest"></a>
<a id="tocsupdatewebaclrequest"></a>

```json
{
  "Name": {},
  "Scope": {},
  "Id": {},
  "DefaultAction": {
    "Block": {
      "CustomResponse": {
        "ResponseCode": {},
        "CustomResponseBodyKey": {},
        "ResponseHeaders": {}
      }
    },
    "Allow": {
      "CustomRequestHandling": {
        "InsertHeaders": {}
      }
    }
  },
  "Description": {},
  "Rules": {},
  "VisibilityConfig": {
    "SampledRequestsEnabled": {},
    "CloudWatchMetricsEnabled": {},
    "MetricName": {}
  },
  "LockToken": {},
  "CustomResponseBodies": {
    "property1": {
      "ContentType": {},
      "Content": {}
    },
    "property2": {
      "ContentType": {},
      "Content": {}
    }
  },
  "CaptchaConfig": {
    "ImmunityTimeProperty": {
      "ImmunityTime": {}
    }
  },
  "ChallengeConfig": {
    "ImmunityTimeProperty": {
      "ImmunityTime": {}
    }
  },
  "TokenDomains": {},
  "AssociationConfig": {
    "RequestBody": {
      "property1": {
        "DefaultSizeInspectionLimit": {}
      },
      "property2": {
        "DefaultSizeInspectionLimit": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Scope|object|true|none|none|
|Id|object|true|none|none|
|DefaultAction|object|true|none|none|
|Description|object|false|none|none|
|Rules|object|false|none|none|
|VisibilityConfig|object|true|none|none|
|LockToken|object|true|none|none|
|CustomResponseBodies|object|false|none|none|
|CaptchaConfig|object|false|none|none|
|ChallengeConfig|object|false|none|none|
|TokenDomains|object|false|none|none|
|AssociationConfig|object|false|none|none|

<h2 id="tocS_APIKey">APIKey</h2>
<!-- backwards compatibility -->
<a id="schemaapikey"></a>
<a id="schema_APIKey"></a>
<a id="tocSapikey"></a>
<a id="tocsapikey"></a>

```json
"string"
```

<h2 id="tocS_APIKeySummary">APIKeySummary</h2>
<!-- backwards compatibility -->
<a id="schemaapikeysummary"></a>
<a id="schema_APIKeySummary"></a>
<a id="tocSapikeysummary"></a>
<a id="tocsapikeysummary"></a>

```json
{
  "TokenDomains": {},
  "APIKey": {},
  "CreationTimestamp": {},
  "Version": {}
}
```

Information for a single API key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TokenDomains|object|false|none|none|
|APIKey|object|false|none|none|
|CreationTimestamp|object|false|none|none|
|Version|object|false|none|none|

<h2 id="tocS_APIKeySummaries">APIKeySummaries</h2>
<!-- backwards compatibility -->
<a id="schemaapikeysummaries"></a>
<a id="schema_APIKeySummaries"></a>
<a id="tocSapikeysummaries"></a>
<a id="tocsapikeysummaries"></a>

```json
[
  {
    "TokenDomains": {},
    "APIKey": {},
    "CreationTimestamp": {},
    "Version": {}
  }
]
```

<h2 id="tocS_TokenDomains">TokenDomains</h2>
<!-- backwards compatibility -->
<a id="schematokendomains"></a>
<a id="schema_TokenDomains"></a>
<a id="tocStokendomains"></a>
<a id="tocstokendomains"></a>

```json
[
  "string"
]
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

<h2 id="tocS_APIKeyVersion">APIKeyVersion</h2>
<!-- backwards compatibility -->
<a id="schemaapikeyversion"></a>
<a id="schema_APIKeyVersion"></a>
<a id="tocSapikeyversion"></a>
<a id="tocsapikeyversion"></a>

```json
0
```

<h2 id="tocS_TokenDomain">TokenDomain</h2>
<!-- backwards compatibility -->
<a id="schematokendomain"></a>
<a id="schema_TokenDomain"></a>
<a id="tocStokendomain"></a>
<a id="tocstokendomain"></a>

```json
"string"
```

<h2 id="tocS_APIKeyTokenDomains">APIKeyTokenDomains</h2>
<!-- backwards compatibility -->
<a id="schemaapikeytokendomains"></a>
<a id="schema_APIKeyTokenDomains"></a>
<a id="tocSapikeytokendomains"></a>
<a id="tocsapikeytokendomains"></a>

```json
[
  "string"
]
```

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_RequestInspection">RequestInspection</h2>
<!-- backwards compatibility -->
<a id="schemarequestinspection"></a>
<a id="schema_RequestInspection"></a>
<a id="tocSrequestinspection"></a>
<a id="tocsrequestinspection"></a>

```json
{
  "PayloadType": {},
  "UsernameField": {
    "Identifier": {}
  },
  "PasswordField": {
    "Identifier": {}
  }
}
```

<p>The criteria for inspecting login requests, used by the ATP rule group to validate credentials usage. </p> <p>This is part of the <code>AWSManagedRulesATPRuleSet</code> configuration in <code>ManagedRuleGroupConfig</code>.</p> <p>In these settings, you specify how your application accepts login attempts by providing the request payload type and the names of the fields within the request body where the username and password are provided. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PayloadType|object|true|none|none|
|UsernameField|object|true|none|none|
|PasswordField|object|true|none|none|

<h2 id="tocS_ResponseInspection">ResponseInspection</h2>
<!-- backwards compatibility -->
<a id="schemaresponseinspection"></a>
<a id="schema_ResponseInspection"></a>
<a id="tocSresponseinspection"></a>
<a id="tocsresponseinspection"></a>

```json
{
  "StatusCode": {
    "SuccessCodes": {},
    "FailureCodes": {}
  },
  "Header": {
    "Name": {},
    "SuccessValues": {},
    "FailureValues": {}
  },
  "BodyContains": {
    "SuccessStrings": {},
    "FailureStrings": {}
  },
  "Json": {
    "Identifier": {},
    "SuccessValues": {},
    "FailureValues": {}
  }
}
```

<p>The criteria for inspecting responses to login requests, used by the ATP rule group to track login failure rates. </p> <p>The ATP rule group evaluates the responses that your protected resources send back to client login attempts, keeping count of successful and failed attempts from each IP address and client session. Using this information, the rule group labels and mitigates requests from client sessions and IP addresses that submit too many failed login attempts in a short amount of time. </p> <note> <p>Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.</p> </note> <p>This is part of the <code>AWSManagedRulesATPRuleSet</code> configuration in <code>ManagedRuleGroupConfig</code>.</p> <p>Enable login response inspection by configuring exactly one component of the response to inspect. You can't configure more than one. If you don't configure any of the response inspection options, response inspection is disabled. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StatusCode|object|false|none|none|
|Header|object|false|none|none|
|BodyContains|object|false|none|none|
|Json|object|false|none|none|

<h2 id="tocS_AWSManagedRulesATPRuleSet">AWSManagedRulesATPRuleSet</h2>
<!-- backwards compatibility -->
<a id="schemaawsmanagedrulesatpruleset"></a>
<a id="schema_AWSManagedRulesATPRuleSet"></a>
<a id="tocSawsmanagedrulesatpruleset"></a>
<a id="tocsawsmanagedrulesatpruleset"></a>

```json
{
  "LoginPath": {},
  "RequestInspection": {
    "PayloadType": {},
    "UsernameField": {
      "Identifier": {}
    },
    "PasswordField": {
      "Identifier": {}
    }
  },
  "ResponseInspection": {
    "StatusCode": {
      "SuccessCodes": {},
      "FailureCodes": {}
    },
    "Header": {
      "Name": {},
      "SuccessValues": {},
      "FailureValues": {}
    },
    "BodyContains": {
      "SuccessStrings": {},
      "FailureStrings": {}
    },
    "Json": {
      "Identifier": {},
      "SuccessValues": {},
      "FailureValues": {}
    }
  }
}
```

Details for your use of the account takeover prevention managed rule group, <code>AWSManagedRulesATPRuleSet</code>. This configuration is used in <code>ManagedRuleGroupConfig</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoginPath|object|true|none|none|
|RequestInspection|object|false|none|none|
|ResponseInspection|object|false|none|none|

<h2 id="tocS_InspectionLevel">InspectionLevel</h2>
<!-- backwards compatibility -->
<a id="schemainspectionlevel"></a>
<a id="schema_InspectionLevel"></a>
<a id="tocSinspectionlevel"></a>
<a id="tocsinspectionlevel"></a>

```json
"COMMON"
```

<h2 id="tocS_AWSManagedRulesBotControlRuleSet">AWSManagedRulesBotControlRuleSet</h2>
<!-- backwards compatibility -->
<a id="schemaawsmanagedrulesbotcontrolruleset"></a>
<a id="schema_AWSManagedRulesBotControlRuleSet"></a>
<a id="tocSawsmanagedrulesbotcontrolruleset"></a>
<a id="tocsawsmanagedrulesbotcontrolruleset"></a>

```json
{
  "InspectionLevel": {}
}
```

Details for your use of the Bot Control managed rule group, <code>AWSManagedRulesBotControlRuleSet</code>. This configuration is used in <code>ManagedRuleGroupConfig</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InspectionLevel|object|true|none|none|

<h2 id="tocS_Action">Action</h2>
<!-- backwards compatibility -->
<a id="schemaaction"></a>
<a id="schema_Action"></a>
<a id="tocSaction"></a>
<a id="tocsaction"></a>

```json
"string"
```

<h2 id="tocS_ActionValue">ActionValue</h2>
<!-- backwards compatibility -->
<a id="schemaactionvalue"></a>
<a id="schema_ActionValue"></a>
<a id="tocSactionvalue"></a>
<a id="tocsactionvalue"></a>

```json
"ALLOW"
```

<h2 id="tocS_ActionCondition">ActionCondition</h2>
<!-- backwards compatibility -->
<a id="schemaactioncondition"></a>
<a id="schema_ActionCondition"></a>
<a id="tocSactioncondition"></a>
<a id="tocsactioncondition"></a>

```json
{
  "Action": {}
}
```

A single action condition for a <a>Condition</a> in a logging filter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Action|object|true|none|none|

<h2 id="tocS_All">All</h2>
<!-- backwards compatibility -->
<a id="schemaall"></a>
<a id="schema_All"></a>
<a id="tocSall"></a>
<a id="tocsall"></a>

```json
{}
```

<p>Inspect all of the elements that WAF has parsed and extracted from the web request component that you've identified in your <a>FieldToMatch</a> specifications. </p> <p>This is used only in the <a>FieldToMatch</a> specification for some web request component types. </p> <p>JSON specification: <code>"All": {}</code> </p>

<h2 id="tocS_AllQueryArguments">AllQueryArguments</h2>
<!-- backwards compatibility -->
<a id="schemaallqueryarguments"></a>
<a id="schema_AllQueryArguments"></a>
<a id="tocSallqueryarguments"></a>
<a id="tocsallqueryarguments"></a>

```json
{}
```

<p>Inspect all query arguments of the web request. </p> <p>This is used only in the <a>FieldToMatch</a> specification for some web request component types. </p> <p>JSON specification: <code>"AllQueryArguments": {}</code> </p>

<h2 id="tocS_CustomRequestHandling">CustomRequestHandling</h2>
<!-- backwards compatibility -->
<a id="schemacustomrequesthandling"></a>
<a id="schema_CustomRequestHandling"></a>
<a id="tocScustomrequesthandling"></a>
<a id="tocscustomrequesthandling"></a>

```json
{
  "InsertHeaders": {}
}
```

<p>Custom request handling behavior that inserts custom headers into a web request. You can add custom request handling for WAF to use when the rule action doesn't block the request. For example, <code>CaptchaAction</code> for requests with valid t okens, and <code>AllowAction</code>. </p> <p>For information about customizing web requests and responses, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a> in the <i>WAF Developer Guide</i>. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InsertHeaders|object|true|none|none|

<h2 id="tocS_AllowAction">AllowAction</h2>
<!-- backwards compatibility -->
<a id="schemaallowaction"></a>
<a id="schema_AllowAction"></a>
<a id="tocSallowaction"></a>
<a id="tocsallowaction"></a>

```json
{
  "CustomRequestHandling": {
    "InsertHeaders": {}
  }
}
```

<p>Specifies that WAF should allow the request and optionally defines additional custom handling for the request.</p> <p>This is used in the context of other settings, for example to specify values for <a>RuleAction</a> and web ACL <a>DefaultAction</a>. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CustomRequestHandling|object|false|none|none|

<h2 id="tocS_Statements">Statements</h2>
<!-- backwards compatibility -->
<a id="schemastatements"></a>
<a id="schema_Statements"></a>
<a id="tocSstatements"></a>
<a id="tocsstatements"></a>

```json
[
  {
    "ByteMatchStatement": {
      "SearchString": {},
      "FieldToMatch": {
        "SingleHeader": {
          "Name": {}
        },
        "SingleQueryArgument": {
          "Name": {}
        },
        "AllQueryArguments": {},
        "UriPath": {},
        "QueryString": {},
        "Body": {
          "OversizeHandling": {}
        },
        "Method": {},
        "JsonBody": {
          "MatchPattern": {
            "All": {},
            "IncludedPaths": {}
          },
          "MatchScope": {},
          "InvalidFallbackBehavior": {},
          "OversizeHandling": {}
        },
        "Headers": {
          "MatchPattern": {
            "All": {},
            "IncludedHeaders": {},
            "ExcludedHeaders": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        },
        "Cookies": {
          "MatchPattern": {
            "All": {},
            "IncludedCookies": {},
            "ExcludedCookies": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        }
      },
      "TextTransformations": {},
      "PositionalConstraint": {}
    },
    "SqliMatchStatement": {
      "FieldToMatch": {
        "SingleHeader": {
          "Name": {}
        },
        "SingleQueryArgument": {
          "Name": {}
        },
        "AllQueryArguments": {},
        "UriPath": {},
        "QueryString": {},
        "Body": {
          "OversizeHandling": {}
        },
        "Method": {},
        "JsonBody": {
          "MatchPattern": {
            "All": {},
            "IncludedPaths": {}
          },
          "MatchScope": {},
          "InvalidFallbackBehavior": {},
          "OversizeHandling": {}
        },
        "Headers": {
          "MatchPattern": {
            "All": {},
            "IncludedHeaders": {},
            "ExcludedHeaders": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        },
        "Cookies": {
          "MatchPattern": {
            "All": {},
            "IncludedCookies": {},
            "ExcludedCookies": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        }
      },
      "TextTransformations": {},
      "SensitivityLevel": {}
    },
    "XssMatchStatement": {
      "FieldToMatch": {
        "SingleHeader": {
          "Name": {}
        },
        "SingleQueryArgument": {
          "Name": {}
        },
        "AllQueryArguments": {},
        "UriPath": {},
        "QueryString": {},
        "Body": {
          "OversizeHandling": {}
        },
        "Method": {},
        "JsonBody": {
          "MatchPattern": {
            "All": {},
            "IncludedPaths": {}
          },
          "MatchScope": {},
          "InvalidFallbackBehavior": {},
          "OversizeHandling": {}
        },
        "Headers": {
          "MatchPattern": {
            "All": {},
            "IncludedHeaders": {},
            "ExcludedHeaders": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        },
        "Cookies": {
          "MatchPattern": {
            "All": {},
            "IncludedCookies": {},
            "ExcludedCookies": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        }
      },
      "TextTransformations": {}
    },
    "SizeConstraintStatement": {
      "FieldToMatch": {
        "SingleHeader": {
          "Name": {}
        },
        "SingleQueryArgument": {
          "Name": {}
        },
        "AllQueryArguments": {},
        "UriPath": {},
        "QueryString": {},
        "Body": {
          "OversizeHandling": {}
        },
        "Method": {},
        "JsonBody": {
          "MatchPattern": {
            "All": {},
            "IncludedPaths": {}
          },
          "MatchScope": {},
          "InvalidFallbackBehavior": {},
          "OversizeHandling": {}
        },
        "Headers": {
          "MatchPattern": {
            "All": {},
            "IncludedHeaders": {},
            "ExcludedHeaders": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        },
        "Cookies": {
          "MatchPattern": {
            "All": {},
            "IncludedCookies": {},
            "ExcludedCookies": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        }
      },
      "ComparisonOperator": {},
      "Size": {},
      "TextTransformations": {}
    },
    "GeoMatchStatement": {
      "CountryCodes": {},
      "ForwardedIPConfig": {
        "HeaderName": {},
        "FallbackBehavior": {}
      }
    },
    "RuleGroupReferenceStatement": {
      "ARN": {},
      "ExcludedRules": {},
      "RuleActionOverrides": {}
    },
    "IPSetReferenceStatement": {
      "ARN": {},
      "IPSetForwardedIPConfig": {
        "HeaderName": {},
        "FallbackBehavior": {},
        "Position": {}
      }
    },
    "RegexPatternSetReferenceStatement": {
      "ARN": {},
      "FieldToMatch": {
        "SingleHeader": {
          "Name": {}
        },
        "SingleQueryArgument": {
          "Name": {}
        },
        "AllQueryArguments": {},
        "UriPath": {},
        "QueryString": {},
        "Body": {
          "OversizeHandling": {}
        },
        "Method": {},
        "JsonBody": {
          "MatchPattern": {
            "All": {},
            "IncludedPaths": {}
          },
          "MatchScope": {},
          "InvalidFallbackBehavior": {},
          "OversizeHandling": {}
        },
        "Headers": {
          "MatchPattern": {
            "All": {},
            "IncludedHeaders": {},
            "ExcludedHeaders": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        },
        "Cookies": {
          "MatchPattern": {
            "All": {},
            "IncludedCookies": {},
            "ExcludedCookies": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        }
      },
      "TextTransformations": {}
    },
    "RateBasedStatement": {},
    "AndStatement": {},
    "OrStatement": {},
    "NotStatement": {},
    "ManagedRuleGroupStatement": {},
    "LabelMatchStatement": {
      "Scope": {},
      "Key": {}
    },
    "RegexMatchStatement": {
      "RegexString": {},
      "FieldToMatch": {
        "SingleHeader": {
          "Name": {}
        },
        "SingleQueryArgument": {
          "Name": {}
        },
        "AllQueryArguments": {},
        "UriPath": {},
        "QueryString": {},
        "Body": {
          "OversizeHandling": {}
        },
        "Method": {},
        "JsonBody": {
          "MatchPattern": {
            "All": {},
            "IncludedPaths": {}
          },
          "MatchScope": {},
          "InvalidFallbackBehavior": {},
          "OversizeHandling": {}
        },
        "Headers": {
          "MatchPattern": {
            "All": {},
            "IncludedHeaders": {},
            "ExcludedHeaders": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        },
        "Cookies": {
          "MatchPattern": {
            "All": {},
            "IncludedCookies": {},
            "ExcludedCookies": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        }
      },
      "TextTransformations": {}
    }
  }
]
```

<h2 id="tocS_AndStatement">AndStatement</h2>
<!-- backwards compatibility -->
<a id="schemaandstatement"></a>
<a id="schema_AndStatement"></a>
<a id="tocSandstatement"></a>
<a id="tocsandstatement"></a>

```json
{
  "Statements": {}
}
```

A logical rule statement used to combine other rule statements with AND logic. You provide more than one <a>Statement</a> within the <code>AndStatement</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Statements|object|true|none|none|

<h2 id="tocS_ResourceArn">ResourceArn</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearn"></a>
<a id="schema_ResourceArn"></a>
<a id="tocSresourcearn"></a>
<a id="tocsresourcearn"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_AssociatedResourceType">AssociatedResourceType</h2>
<!-- backwards compatibility -->
<a id="schemaassociatedresourcetype"></a>
<a id="schema_AssociatedResourceType"></a>
<a id="tocSassociatedresourcetype"></a>
<a id="tocsassociatedresourcetype"></a>

```json
"CLOUDFRONT"
```

<h2 id="tocS_RequestBody">RequestBody</h2>
<!-- backwards compatibility -->
<a id="schemarequestbody"></a>
<a id="schema_RequestBody"></a>
<a id="tocSrequestbody"></a>
<a id="tocsrequestbody"></a>

```json
{
  "property1": {
    "DefaultSizeInspectionLimit": {}
  },
  "property2": {
    "DefaultSizeInspectionLimit": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[RequestBodyAssociatedResourceTypeConfig](#schemarequestbodyassociatedresourcetypeconfig)|false|none|<p>Customizes the maximum size of the request body that your protected CloudFront distributions forward to WAF for inspection. The default size is 16 KB (16,384 kilobytes). </p> <note> <p>You are charged additional fees when your protected resources forward body sizes that are larger than the default. For more information, see <a href="http://aws.amazon.com/waf/pricing/">WAF Pricing</a>.</p> </note> <p>This is used in the <code>AssociationConfig</code> of the web ACL. </p>|

<h2 id="tocS_AssociationConfig">AssociationConfig</h2>
<!-- backwards compatibility -->
<a id="schemaassociationconfig"></a>
<a id="schema_AssociationConfig"></a>
<a id="tocSassociationconfig"></a>
<a id="tocsassociationconfig"></a>

```json
{
  "RequestBody": {
    "property1": {
      "DefaultSizeInspectionLimit": {}
    },
    "property2": {
      "DefaultSizeInspectionLimit": {}
    }
  }
}
```

<p>Specifies custom configurations for the associations between the web ACL and protected resources. </p> <p>Use this to customize the maximum size of the request body that your protected CloudFront distributions forward to WAF for inspection. The default is 16 KB (16,384 kilobytes). </p> <note> <p>You are charged additional fees when your protected resources forward body sizes that are larger than the default. For more information, see <a href="http://aws.amazon.com/waf/pricing/">WAF Pricing</a>.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RequestBody|object|false|none|none|

<h2 id="tocS_CustomResponse">CustomResponse</h2>
<!-- backwards compatibility -->
<a id="schemacustomresponse"></a>
<a id="schema_CustomResponse"></a>
<a id="tocScustomresponse"></a>
<a id="tocscustomresponse"></a>

```json
{
  "ResponseCode": {},
  "CustomResponseBodyKey": {},
  "ResponseHeaders": {}
}
```

<p>A custom response to send to the client. You can define a custom response for rule actions and default web ACL actions that are set to <a>BlockAction</a>. </p> <p>For information about customizing web requests and responses, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a> in the <i>WAF Developer Guide</i>. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResponseCode|object|true|none|none|
|CustomResponseBodyKey|object|false|none|none|
|ResponseHeaders|object|false|none|none|

<h2 id="tocS_BlockAction">BlockAction</h2>
<!-- backwards compatibility -->
<a id="schemablockaction"></a>
<a id="schema_BlockAction"></a>
<a id="tocSblockaction"></a>
<a id="tocsblockaction"></a>

```json
{
  "CustomResponse": {
    "ResponseCode": {},
    "CustomResponseBodyKey": {},
    "ResponseHeaders": {}
  }
}
```

<p>Specifies that WAF should block the request and optionally defines additional custom handling for the response to the web request.</p> <p>This is used in the context of other settings, for example to specify values for <a>RuleAction</a> and web ACL <a>DefaultAction</a>. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CustomResponse|object|false|none|none|

<h2 id="tocS_OversizeHandling">OversizeHandling</h2>
<!-- backwards compatibility -->
<a id="schemaoversizehandling"></a>
<a id="schema_OversizeHandling"></a>
<a id="tocSoversizehandling"></a>
<a id="tocsoversizehandling"></a>

```json
"CONTINUE"
```

<h2 id="tocS_Body">Body</h2>
<!-- backwards compatibility -->
<a id="schemabody"></a>
<a id="schema_Body"></a>
<a id="tocSbody"></a>
<a id="tocsbody"></a>

```json
{
  "OversizeHandling": {}
}
```

<p>Inspect the body of the web request. The body immediately follows the request headers.</p> <p>This is used to indicate the web request component to inspect, in the <a>FieldToMatch</a> specification. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OversizeHandling|object|false|none|none|

<h2 id="tocS_BodyParsingFallbackBehavior">BodyParsingFallbackBehavior</h2>
<!-- backwards compatibility -->
<a id="schemabodyparsingfallbackbehavior"></a>
<a id="schema_BodyParsingFallbackBehavior"></a>
<a id="tocSbodyparsingfallbackbehavior"></a>
<a id="tocsbodyparsingfallbackbehavior"></a>

```json
"MATCH"
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

<h2 id="tocS_SearchString">SearchString</h2>
<!-- backwards compatibility -->
<a id="schemasearchstring"></a>
<a id="schema_SearchString"></a>
<a id="tocSsearchstring"></a>
<a id="tocssearchstring"></a>

```json
"string"
```

<h2 id="tocS_FieldToMatch">FieldToMatch</h2>
<!-- backwards compatibility -->
<a id="schemafieldtomatch"></a>
<a id="schema_FieldToMatch"></a>
<a id="tocSfieldtomatch"></a>
<a id="tocsfieldtomatch"></a>

```json
{
  "SingleHeader": {
    "Name": {}
  },
  "SingleQueryArgument": {
    "Name": {}
  },
  "AllQueryArguments": {},
  "UriPath": {},
  "QueryString": {},
  "Body": {
    "OversizeHandling": {}
  },
  "Method": {},
  "JsonBody": {
    "MatchPattern": {
      "All": {},
      "IncludedPaths": {}
    },
    "MatchScope": {},
    "InvalidFallbackBehavior": {},
    "OversizeHandling": {}
  },
  "Headers": {
    "MatchPattern": {
      "All": {},
      "IncludedHeaders": {},
      "ExcludedHeaders": {}
    },
    "MatchScope": {},
    "OversizeHandling": {}
  },
  "Cookies": {
    "MatchPattern": {
      "All": {},
      "IncludedCookies": {},
      "ExcludedCookies": {}
    },
    "MatchScope": {},
    "OversizeHandling": {}
  }
}
```

<p>The part of the web request that you want WAF to inspect. Include the single <code>FieldToMatch</code> type that you want to inspect, with additional specifications as needed, according to the type. You specify a single request component in <code>FieldToMatch</code> for each rule statement that requires it. To inspect more than one component of the web request, create a separate rule statement for each component.</p> <p>Example JSON for a <code>QueryString</code> field to match: </p> <p> <code> "FieldToMatch": { "QueryString": {} }</code> </p> <p>Example JSON for a <code>Method</code> field to match specification:</p> <p> <code> "FieldToMatch": { "Method": { "Name": "DELETE" } }</code> </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SingleHeader|object|false|none|none|
|SingleQueryArgument|object|false|none|none|
|AllQueryArguments|object|false|none|none|
|UriPath|object|false|none|none|
|QueryString|object|false|none|none|
|Body|object|false|none|none|
|Method|object|false|none|none|
|JsonBody|object|false|none|none|
|Headers|object|false|none|none|
|Cookies|object|false|none|none|

<h2 id="tocS_TextTransformations">TextTransformations</h2>
<!-- backwards compatibility -->
<a id="schematexttransformations"></a>
<a id="schema_TextTransformations"></a>
<a id="tocStexttransformations"></a>
<a id="tocstexttransformations"></a>

```json
[
  {
    "Priority": {},
    "Type": {}
  }
]
```

<h2 id="tocS_PositionalConstraint">PositionalConstraint</h2>
<!-- backwards compatibility -->
<a id="schemapositionalconstraint"></a>
<a id="schema_PositionalConstraint"></a>
<a id="tocSpositionalconstraint"></a>
<a id="tocspositionalconstraint"></a>

```json
"EXACTLY"
```

<h2 id="tocS_ByteMatchStatement">ByteMatchStatement</h2>
<!-- backwards compatibility -->
<a id="schemabytematchstatement"></a>
<a id="schema_ByteMatchStatement"></a>
<a id="tocSbytematchstatement"></a>
<a id="tocsbytematchstatement"></a>

```json
{
  "SearchString": {},
  "FieldToMatch": {
    "SingleHeader": {
      "Name": {}
    },
    "SingleQueryArgument": {
      "Name": {}
    },
    "AllQueryArguments": {},
    "UriPath": {},
    "QueryString": {},
    "Body": {
      "OversizeHandling": {}
    },
    "Method": {},
    "JsonBody": {
      "MatchPattern": {
        "All": {},
        "IncludedPaths": {}
      },
      "MatchScope": {},
      "InvalidFallbackBehavior": {},
      "OversizeHandling": {}
    },
    "Headers": {
      "MatchPattern": {
        "All": {},
        "IncludedHeaders": {},
        "ExcludedHeaders": {}
      },
      "MatchScope": {},
      "OversizeHandling": {}
    },
    "Cookies": {
      "MatchPattern": {
        "All": {},
        "IncludedCookies": {},
        "ExcludedCookies": {}
      },
      "MatchScope": {},
      "OversizeHandling": {}
    }
  },
  "TextTransformations": {},
  "PositionalConstraint": {}
}
```

A rule statement that defines a string match search for WAF to apply to web requests. The byte match statement provides the bytes to search for, the location in requests that you want WAF to search, and other settings. The bytes to search for are typically a string that corresponds with ASCII characters. In the WAF console and the developer guide, this is called a string match statement.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SearchString|object|true|none|none|
|FieldToMatch|object|true|none|none|
|TextTransformations|object|true|none|none|
|PositionalConstraint|object|true|none|none|

<h2 id="tocS_CapacityUnit">CapacityUnit</h2>
<!-- backwards compatibility -->
<a id="schemacapacityunit"></a>
<a id="schema_CapacityUnit"></a>
<a id="tocScapacityunit"></a>
<a id="tocscapacityunit"></a>

```json
1
```

<h2 id="tocS_CaptchaAction">CaptchaAction</h2>
<!-- backwards compatibility -->
<a id="schemacaptchaaction"></a>
<a id="schema_CaptchaAction"></a>
<a id="tocScaptchaaction"></a>
<a id="tocscaptchaaction"></a>

```json
{
  "CustomRequestHandling": {
    "InsertHeaders": {}
  }
}
```

<p>Specifies that WAF should run a <code>CAPTCHA</code> check against the request: </p> <ul> <li> <p>If the request includes a valid, unexpired <code>CAPTCHA</code> token, WAF applies any custom request handling and labels that you've configured and then allows the web request inspection to proceed to the next rule, similar to a <code>CountAction</code>. </p> </li> <li> <p>If the request doesn't include a valid, unexpired token, WAF discontinues the web ACL evaluation of the request and blocks it from going to its intended destination.</p> <p>WAF generates a response that it sends back to the client, which includes the following: </p> <ul> <li> <p>The header <code>x-amzn-waf-action</code> with a value of <code>captcha</code>. </p> </li> <li> <p>The HTTP status code <code>405 Method Not Allowed</code>. </p> </li> <li> <p>If the request contains an <code>Accept</code> header with a value of <code>text/html</code>, the response includes a <code>CAPTCHA</code> JavaScript page interstitial. </p> </li> </ul> </li> </ul> <p>You can configure the expiration time in the <code>CaptchaConfig</code> <code>ImmunityTimeProperty</code> setting at the rule and web ACL level. The rule setting overrides the web ACL setting. </p> <p>This action option is available for rules. It isn't available for web ACL default actions. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CustomRequestHandling|object|false|none|none|

<h2 id="tocS_ImmunityTimeProperty">ImmunityTimeProperty</h2>
<!-- backwards compatibility -->
<a id="schemaimmunitytimeproperty"></a>
<a id="schema_ImmunityTimeProperty"></a>
<a id="tocSimmunitytimeproperty"></a>
<a id="tocsimmunitytimeproperty"></a>

```json
{
  "ImmunityTime": {}
}
```

Used for CAPTCHA and challenge token settings. Determines how long a <code>CAPTCHA</code> or challenge timestamp remains valid after WAF updates it for a successful <code>CAPTCHA</code> or challenge response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ImmunityTime|object|true|none|none|

<h2 id="tocS_CaptchaConfig">CaptchaConfig</h2>
<!-- backwards compatibility -->
<a id="schemacaptchaconfig"></a>
<a id="schema_CaptchaConfig"></a>
<a id="tocScaptchaconfig"></a>
<a id="tocscaptchaconfig"></a>

```json
{
  "ImmunityTimeProperty": {
    "ImmunityTime": {}
  }
}
```

Specifies how WAF should handle <code>CAPTCHA</code> evaluations. This is available at the web ACL level and in each rule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ImmunityTimeProperty|object|false|none|none|

<h2 id="tocS_ResponseCode">ResponseCode</h2>
<!-- backwards compatibility -->
<a id="schemaresponsecode"></a>
<a id="schema_ResponseCode"></a>
<a id="tocSresponsecode"></a>
<a id="tocsresponsecode"></a>

```json
0
```

<h2 id="tocS_SolveTimestamp">SolveTimestamp</h2>
<!-- backwards compatibility -->
<a id="schemasolvetimestamp"></a>
<a id="schema_SolveTimestamp"></a>
<a id="tocSsolvetimestamp"></a>
<a id="tocssolvetimestamp"></a>

```json
0
```

<h2 id="tocS_FailureReason">FailureReason</h2>
<!-- backwards compatibility -->
<a id="schemafailurereason"></a>
<a id="schema_FailureReason"></a>
<a id="tocSfailurereason"></a>
<a id="tocsfailurereason"></a>

```json
"TOKEN_MISSING"
```

<h2 id="tocS_CaptchaResponse">CaptchaResponse</h2>
<!-- backwards compatibility -->
<a id="schemacaptcharesponse"></a>
<a id="schema_CaptchaResponse"></a>
<a id="tocScaptcharesponse"></a>
<a id="tocscaptcharesponse"></a>

```json
{
  "ResponseCode": {},
  "SolveTimestamp": {},
  "FailureReason": {}
}
```

The result from the inspection of the web request for a valid <code>CAPTCHA</code> token.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResponseCode|object|false|none|none|
|SolveTimestamp|object|false|none|none|
|FailureReason|object|false|none|none|

<h2 id="tocS_ChallengeAction">ChallengeAction</h2>
<!-- backwards compatibility -->
<a id="schemachallengeaction"></a>
<a id="schema_ChallengeAction"></a>
<a id="tocSchallengeaction"></a>
<a id="tocschallengeaction"></a>

```json
{
  "CustomRequestHandling": {
    "InsertHeaders": {}
  }
}
```

<p>Specifies that WAF should run a <code>Challenge</code> check against the request to verify that the request is coming from a legitimate client session: </p> <ul> <li> <p>If the request includes a valid, unexpired challenge token, WAF applies any custom request handling and labels that you've configured and then allows the web request inspection to proceed to the next rule, similar to a <code>CountAction</code>. </p> </li> <li> <p>If the request doesn't include a valid, unexpired challenge token, WAF discontinues the web ACL evaluation of the request and blocks it from going to its intended destination.</p> <p>WAF then generates a challenge response that it sends back to the client, which includes the following: </p> <ul> <li> <p>The header <code>x-amzn-waf-action</code> with a value of <code>challenge</code>. </p> </li> <li> <p>The HTTP status code <code>202 Request Accepted</code>. </p> </li> <li> <p>If the request contains an <code>Accept</code> header with a value of <code>text/html</code>, the response includes a JavaScript page interstitial with a challenge script. </p> </li> </ul> <p>Challenges run silent browser interrogations in the background, and don't generally affect the end user experience. </p> <p>A challenge enforces token acquisition using an interstitial JavaScript challenge that inspects the client session for legitimate behavior. The challenge blocks bots or at least increases the cost of operating sophisticated bots. </p> <p>After the client session successfully responds to the challenge, it receives a new token from WAF, which the challenge script uses to resubmit the original request. </p> </li> </ul> <p>You can configure the expiration time in the <code>ChallengeConfig</code> <code>ImmunityTimeProperty</code> setting at the rule and web ACL level. The rule setting overrides the web ACL setting. </p> <p>This action option is available for rules. It isn't available for web ACL default actions. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CustomRequestHandling|object|false|none|none|

<h2 id="tocS_ChallengeConfig">ChallengeConfig</h2>
<!-- backwards compatibility -->
<a id="schemachallengeconfig"></a>
<a id="schema_ChallengeConfig"></a>
<a id="tocSchallengeconfig"></a>
<a id="tocschallengeconfig"></a>

```json
{
  "ImmunityTimeProperty": {
    "ImmunityTime": {}
  }
}
```

Specifies how WAF should handle <code>Challenge</code> evaluations. This is available at the web ACL level and in each rule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ImmunityTimeProperty|object|false|none|none|

<h2 id="tocS_ChallengeResponse">ChallengeResponse</h2>
<!-- backwards compatibility -->
<a id="schemachallengeresponse"></a>
<a id="schema_ChallengeResponse"></a>
<a id="tocSchallengeresponse"></a>
<a id="tocschallengeresponse"></a>

```json
{
  "ResponseCode": {},
  "SolveTimestamp": {},
  "FailureReason": {}
}
```

The result from the inspection of the web request for a valid challenge token.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResponseCode|object|false|none|none|
|SolveTimestamp|object|false|none|none|
|FailureReason|object|false|none|none|

<h2 id="tocS_Scope">Scope</h2>
<!-- backwards compatibility -->
<a id="schemascope"></a>
<a id="schema_Scope"></a>
<a id="tocSscope"></a>
<a id="tocsscope"></a>

```json
"CLOUDFRONT"
```

<h2 id="tocS_Rules">Rules</h2>
<!-- backwards compatibility -->
<a id="schemarules"></a>
<a id="schema_Rules"></a>
<a id="tocSrules"></a>
<a id="tocsrules"></a>

```json
[
  {
    "Name": {},
    "Priority": {},
    "Statement": {
      "ByteMatchStatement": {
        "SearchString": {},
        "FieldToMatch": {
          "SingleHeader": {
            "Name": {}
          },
          "SingleQueryArgument": {
            "Name": {}
          },
          "AllQueryArguments": {},
          "UriPath": {},
          "QueryString": {},
          "Body": {
            "OversizeHandling": {}
          },
          "Method": {},
          "JsonBody": {
            "MatchPattern": {
              "All": {},
              "IncludedPaths": {}
            },
            "MatchScope": {},
            "InvalidFallbackBehavior": {},
            "OversizeHandling": {}
          },
          "Headers": {
            "MatchPattern": {
              "All": {},
              "IncludedHeaders": {},
              "ExcludedHeaders": {}
            },
            "MatchScope": {},
            "OversizeHandling": {}
          },
          "Cookies": {
            "MatchPattern": {
              "All": {},
              "IncludedCookies": {},
              "ExcludedCookies": {}
            },
            "MatchScope": {},
            "OversizeHandling": {}
          }
        },
        "TextTransformations": {},
        "PositionalConstraint": {}
      },
      "SqliMatchStatement": {
        "FieldToMatch": {
          "SingleHeader": {
            "Name": {}
          },
          "SingleQueryArgument": {
            "Name": {}
          },
          "AllQueryArguments": {},
          "UriPath": {},
          "QueryString": {},
          "Body": {
            "OversizeHandling": {}
          },
          "Method": {},
          "JsonBody": {
            "MatchPattern": {
              "All": {},
              "IncludedPaths": {}
            },
            "MatchScope": {},
            "InvalidFallbackBehavior": {},
            "OversizeHandling": {}
          },
          "Headers": {
            "MatchPattern": {
              "All": {},
              "IncludedHeaders": {},
              "ExcludedHeaders": {}
            },
            "MatchScope": {},
            "OversizeHandling": {}
          },
          "Cookies": {
            "MatchPattern": {
              "All": {},
              "IncludedCookies": {},
              "ExcludedCookies": {}
            },
            "MatchScope": {},
            "OversizeHandling": {}
          }
        },
        "TextTransformations": {},
        "SensitivityLevel": {}
      },
      "XssMatchStatement": {
        "FieldToMatch": {
          "SingleHeader": {
            "Name": {}
          },
          "SingleQueryArgument": {
            "Name": {}
          },
          "AllQueryArguments": {},
          "UriPath": {},
          "QueryString": {},
          "Body": {
            "OversizeHandling": {}
          },
          "Method": {},
          "JsonBody": {
            "MatchPattern": {
              "All": {},
              "IncludedPaths": {}
            },
            "MatchScope": {},
            "InvalidFallbackBehavior": {},
            "OversizeHandling": {}
          },
          "Headers": {
            "MatchPattern": {
              "All": {},
              "IncludedHeaders": {},
              "ExcludedHeaders": {}
            },
            "MatchScope": {},
            "OversizeHandling": {}
          },
          "Cookies": {
            "MatchPattern": {
              "All": {},
              "IncludedCookies": {},
              "ExcludedCookies": {}
            },
            "MatchScope": {},
            "OversizeHandling": {}
          }
        },
        "TextTransformations": {}
      },
      "SizeConstraintStatement": {
        "FieldToMatch": {
          "SingleHeader": {
            "Name": {}
          },
          "SingleQueryArgument": {
            "Name": {}
          },
          "AllQueryArguments": {},
          "UriPath": {},
          "QueryString": {},
          "Body": {
            "OversizeHandling": {}
          },
          "Method": {},
          "JsonBody": {
            "MatchPattern": {
              "All": {},
              "IncludedPaths": {}
            },
            "MatchScope": {},
            "InvalidFallbackBehavior": {},
            "OversizeHandling": {}
          },
          "Headers": {
            "MatchPattern": {
              "All": {},
              "IncludedHeaders": {},
              "ExcludedHeaders": {}
            },
            "MatchScope": {},
            "OversizeHandling": {}
          },
          "Cookies": {
            "MatchPattern": {
              "All": {},
              "IncludedCookies": {},
              "ExcludedCookies": {}
            },
            "MatchScope": {},
            "OversizeHandling": {}
          }
        },
        "ComparisonOperator": {},
        "Size": {},
        "TextTransformations": {}
      },
      "GeoMatchStatement": {
        "CountryCodes": {},
        "ForwardedIPConfig": {
          "HeaderName": {},
          "FallbackBehavior": {}
        }
      },
      "RuleGroupReferenceStatement": {
        "ARN": {},
        "ExcludedRules": {},
        "RuleActionOverrides": {}
      },
      "IPSetReferenceStatement": {
        "ARN": {},
        "IPSetForwardedIPConfig": {
          "HeaderName": {},
          "FallbackBehavior": {},
          "Position": {}
        }
      },
      "RegexPatternSetReferenceStatement": {
        "ARN": {},
        "FieldToMatch": {
          "SingleHeader": {
            "Name": {}
          },
          "SingleQueryArgument": {
            "Name": {}
          },
          "AllQueryArguments": {},
          "UriPath": {},
          "QueryString": {},
          "Body": {
            "OversizeHandling": {}
          },
          "Method": {},
          "JsonBody": {
            "MatchPattern": {
              "All": {},
              "IncludedPaths": {}
            },
            "MatchScope": {},
            "InvalidFallbackBehavior": {},
            "OversizeHandling": {}
          },
          "Headers": {
            "MatchPattern": {
              "All": {},
              "IncludedHeaders": {},
              "ExcludedHeaders": {}
            },
            "MatchScope": {},
            "OversizeHandling": {}
          },
          "Cookies": {
            "MatchPattern": {
              "All": {},
              "IncludedCookies": {},
              "ExcludedCookies": {}
            },
            "MatchScope": {},
            "OversizeHandling": {}
          }
        },
        "TextTransformations": {}
      },
      "RateBasedStatement": {},
      "AndStatement": {},
      "OrStatement": {},
      "NotStatement": {},
      "ManagedRuleGroupStatement": {},
      "LabelMatchStatement": {
        "Scope": {},
        "Key": {}
      },
      "RegexMatchStatement": {
        "RegexString": {},
        "FieldToMatch": {
          "SingleHeader": {
            "Name": {}
          },
          "SingleQueryArgument": {
            "Name": {}
          },
          "AllQueryArguments": {},
          "UriPath": {},
          "QueryString": {},
          "Body": {
            "OversizeHandling": {}
          },
          "Method": {},
          "JsonBody": {
            "MatchPattern": {
              "All": {},
              "IncludedPaths": {}
            },
            "MatchScope": {},
            "InvalidFallbackBehavior": {},
            "OversizeHandling": {}
          },
          "Headers": {
            "MatchPattern": {
              "All": {},
              "IncludedHeaders": {},
              "ExcludedHeaders": {}
            },
            "MatchScope": {},
            "OversizeHandling": {}
          },
          "Cookies": {
            "MatchPattern": {
              "All": {},
              "IncludedCookies": {},
              "ExcludedCookies": {}
            },
            "MatchScope": {},
            "OversizeHandling": {}
          }
        },
        "TextTransformations": {}
      }
    },
    "Action": {
      "Block": {
        "CustomResponse": {
          "ResponseCode": {},
          "CustomResponseBodyKey": {},
          "ResponseHeaders": {}
        }
      },
      "Allow": {
        "CustomRequestHandling": {
          "InsertHeaders": {}
        }
      },
      "Count": {
        "CustomRequestHandling": {
          "InsertHeaders": {}
        }
      },
      "Captcha": {
        "CustomRequestHandling": {
          "InsertHeaders": {}
        }
      },
      "Challenge": {
        "CustomRequestHandling": {
          "InsertHeaders": {}
        }
      }
    },
    "OverrideAction": {
      "Count": {
        "CustomRequestHandling": {
          "InsertHeaders": {}
        }
      },
      "None": {}
    },
    "RuleLabels": {},
    "VisibilityConfig": {
      "SampledRequestsEnabled": {},
      "CloudWatchMetricsEnabled": {},
      "MetricName": {}
    },
    "CaptchaConfig": {
      "ImmunityTimeProperty": {
        "ImmunityTime": {}
      }
    },
    "ChallengeConfig": {
      "ImmunityTimeProperty": {
        "ImmunityTime": {}
      }
    }
  }
]
```

<h2 id="tocS_ConsumedCapacity">ConsumedCapacity</h2>
<!-- backwards compatibility -->
<a id="schemaconsumedcapacity"></a>
<a id="schema_ConsumedCapacity"></a>
<a id="tocSconsumedcapacity"></a>
<a id="tocsconsumedcapacity"></a>

```json
0
```

<h2 id="tocS_ComparisonOperator">ComparisonOperator</h2>
<!-- backwards compatibility -->
<a id="schemacomparisonoperator"></a>
<a id="schema_ComparisonOperator"></a>
<a id="tocScomparisonoperator"></a>
<a id="tocscomparisonoperator"></a>

```json
"EQ"
```

<h2 id="tocS_LabelNameCondition">LabelNameCondition</h2>
<!-- backwards compatibility -->
<a id="schemalabelnamecondition"></a>
<a id="schema_LabelNameCondition"></a>
<a id="tocSlabelnamecondition"></a>
<a id="tocslabelnamecondition"></a>

```json
{
  "LabelName": {}
}
```

A single label name condition for a <a>Condition</a> in a logging filter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LabelName|object|true|none|none|

<h2 id="tocS_Condition">Condition</h2>
<!-- backwards compatibility -->
<a id="schemacondition"></a>
<a id="schema_Condition"></a>
<a id="tocScondition"></a>
<a id="tocscondition"></a>

```json
{
  "ActionCondition": {
    "Action": {}
  },
  "LabelNameCondition": {
    "LabelName": {}
  }
}
```

A single match condition for a <a>Filter</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActionCondition|object|false|none|none|
|LabelNameCondition|object|false|none|none|

<h2 id="tocS_Conditions">Conditions</h2>
<!-- backwards compatibility -->
<a id="schemaconditions"></a>
<a id="schema_Conditions"></a>
<a id="tocSconditions"></a>
<a id="tocsconditions"></a>

```json
[
  {
    "ActionCondition": {
      "Action": {}
    },
    "LabelNameCondition": {
      "LabelName": {}
    }
  }
]
```

<h2 id="tocS_CookieNames">CookieNames</h2>
<!-- backwards compatibility -->
<a id="schemacookienames"></a>
<a id="schema_CookieNames"></a>
<a id="tocScookienames"></a>
<a id="tocscookienames"></a>

```json
[
  "string"
]
```

<h2 id="tocS_CookieMatchPattern">CookieMatchPattern</h2>
<!-- backwards compatibility -->
<a id="schemacookiematchpattern"></a>
<a id="schema_CookieMatchPattern"></a>
<a id="tocScookiematchpattern"></a>
<a id="tocscookiematchpattern"></a>

```json
{
  "All": {},
  "IncludedCookies": {},
  "ExcludedCookies": {}
}
```

<p>The filter to use to identify the subset of cookies to inspect in a web request. </p> <p>You must specify exactly one setting: either <code>All</code>, <code>IncludedCookies</code>, or <code>ExcludedCookies</code>.</p> <p>Example JSON: <code>"MatchPattern": { "IncludedCookies": {"KeyToInclude1", "KeyToInclude2", "KeyToInclude3"} }</code> </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|All|object|false|none|none|
|IncludedCookies|object|false|none|none|
|ExcludedCookies|object|false|none|none|

<h2 id="tocS_SingleCookieName">SingleCookieName</h2>
<!-- backwards compatibility -->
<a id="schemasinglecookiename"></a>
<a id="schema_SingleCookieName"></a>
<a id="tocSsinglecookiename"></a>
<a id="tocssinglecookiename"></a>

```json
"string"
```

<h2 id="tocS_MapMatchScope">MapMatchScope</h2>
<!-- backwards compatibility -->
<a id="schemamapmatchscope"></a>
<a id="schema_MapMatchScope"></a>
<a id="tocSmapmatchscope"></a>
<a id="tocsmapmatchscope"></a>

```json
"ALL"
```

<h2 id="tocS_Cookies">Cookies</h2>
<!-- backwards compatibility -->
<a id="schemacookies"></a>
<a id="schema_Cookies"></a>
<a id="tocScookies"></a>
<a id="tocscookies"></a>

```json
{
  "MatchPattern": {
    "All": {},
    "IncludedCookies": {},
    "ExcludedCookies": {}
  },
  "MatchScope": {},
  "OversizeHandling": {}
}
```

<p>Inspect the cookies in the web request. You can specify the parts of the cookies to inspect and you can narrow the set of cookies to inspect by including or excluding specific keys.</p> <p>This is used to indicate the web request component to inspect, in the <a>FieldToMatch</a> specification. </p> <p>Example JSON: <code>"Cookies": { "MatchPattern": { "All": {} }, "MatchScope": "KEY", "OversizeHandling": "MATCH" }</code> </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MatchPattern|object|true|none|none|
|MatchScope|object|true|none|none|
|OversizeHandling|object|true|none|none|

<h2 id="tocS_CountAction">CountAction</h2>
<!-- backwards compatibility -->
<a id="schemacountaction"></a>
<a id="schema_CountAction"></a>
<a id="tocScountaction"></a>
<a id="tocscountaction"></a>

```json
{
  "CustomRequestHandling": {
    "InsertHeaders": {}
  }
}
```

<p>Specifies that WAF should count the request. Optionally defines additional custom handling for the request.</p> <p>This is used in the context of other settings, for example to specify values for <a>RuleAction</a> and web ACL <a>DefaultAction</a>. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CustomRequestHandling|object|false|none|none|

<h2 id="tocS_Country">Country</h2>
<!-- backwards compatibility -->
<a id="schemacountry"></a>
<a id="schema_Country"></a>
<a id="tocScountry"></a>
<a id="tocscountry"></a>

```json
"string"
```

<h2 id="tocS_CountryCode">CountryCode</h2>
<!-- backwards compatibility -->
<a id="schemacountrycode"></a>
<a id="schema_CountryCode"></a>
<a id="tocScountrycode"></a>
<a id="tocscountrycode"></a>

```json
"AF"
```

<h2 id="tocS_CountryCodes">CountryCodes</h2>
<!-- backwards compatibility -->
<a id="schemacountrycodes"></a>
<a id="schema_CountryCodes"></a>
<a id="tocScountrycodes"></a>
<a id="tocscountrycodes"></a>

```json
[
  "AF"
]
```

<h2 id="tocS_EntityName">EntityName</h2>
<!-- backwards compatibility -->
<a id="schemaentityname"></a>
<a id="schema_EntityName"></a>
<a id="tocSentityname"></a>
<a id="tocsentityname"></a>

```json
"string"
```

<h2 id="tocS_EntityDescription">EntityDescription</h2>
<!-- backwards compatibility -->
<a id="schemaentitydescription"></a>
<a id="schema_EntityDescription"></a>
<a id="tocSentitydescription"></a>
<a id="tocsentitydescription"></a>

```json
"string"
```

<h2 id="tocS_IPAddressVersion">IPAddressVersion</h2>
<!-- backwards compatibility -->
<a id="schemaipaddressversion"></a>
<a id="schema_IPAddressVersion"></a>
<a id="tocSipaddressversion"></a>
<a id="tocsipaddressversion"></a>

```json
"IPV4"
```

<h2 id="tocS_IPAddresses">IPAddresses</h2>
<!-- backwards compatibility -->
<a id="schemaipaddresses"></a>
<a id="schema_IPAddresses"></a>
<a id="tocSipaddresses"></a>
<a id="tocsipaddresses"></a>

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

<h2 id="tocS_IPSetSummary">IPSetSummary</h2>
<!-- backwards compatibility -->
<a id="schemaipsetsummary"></a>
<a id="schema_IPSetSummary"></a>
<a id="tocSipsetsummary"></a>
<a id="tocsipsetsummary"></a>

```json
{
  "Name": {},
  "Id": {},
  "Description": {},
  "LockToken": {},
  "ARN": {}
}
```

High-level information about an <a>IPSet</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage an <code>IPSet</code>, and the ARN, that you provide to the <a>IPSetReferenceStatement</a> to use the address set in a <a>Rule</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Id|object|false|none|none|
|Description|object|false|none|none|
|LockToken|object|false|none|none|
|ARN|object|false|none|none|

<h2 id="tocS_RegularExpressionList">RegularExpressionList</h2>
<!-- backwards compatibility -->
<a id="schemaregularexpressionlist"></a>
<a id="schema_RegularExpressionList"></a>
<a id="tocSregularexpressionlist"></a>
<a id="tocsregularexpressionlist"></a>

```json
[
  {
    "RegexString": {}
  }
]
```

<h2 id="tocS_RegexPatternSetSummary">RegexPatternSetSummary</h2>
<!-- backwards compatibility -->
<a id="schemaregexpatternsetsummary"></a>
<a id="schema_RegexPatternSetSummary"></a>
<a id="tocSregexpatternsetsummary"></a>
<a id="tocsregexpatternsetsummary"></a>

```json
{
  "Name": {},
  "Id": {},
  "Description": {},
  "LockToken": {},
  "ARN": {}
}
```

High-level information about a <a>RegexPatternSet</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage a <code>RegexPatternSet</code>, and the ARN, that you provide to the <a>RegexPatternSetReferenceStatement</a> to use the pattern set in a <a>Rule</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Id|object|false|none|none|
|Description|object|false|none|none|
|LockToken|object|false|none|none|
|ARN|object|false|none|none|

<h2 id="tocS_VisibilityConfig">VisibilityConfig</h2>
<!-- backwards compatibility -->
<a id="schemavisibilityconfig"></a>
<a id="schema_VisibilityConfig"></a>
<a id="tocSvisibilityconfig"></a>
<a id="tocsvisibilityconfig"></a>

```json
{
  "SampledRequestsEnabled": {},
  "CloudWatchMetricsEnabled": {},
  "MetricName": {}
}
```

Defines and enables Amazon CloudWatch metrics and web request sample collection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SampledRequestsEnabled|object|true|none|none|
|CloudWatchMetricsEnabled|object|true|none|none|
|MetricName|object|true|none|none|

<h2 id="tocS_CustomResponseBodies">CustomResponseBodies</h2>
<!-- backwards compatibility -->
<a id="schemacustomresponsebodies"></a>
<a id="schema_CustomResponseBodies"></a>
<a id="tocScustomresponsebodies"></a>
<a id="tocscustomresponsebodies"></a>

```json
{
  "property1": {
    "ContentType": {},
    "Content": {}
  },
  "property2": {
    "ContentType": {},
    "Content": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[CustomResponseBody](#schemacustomresponsebody)|false|none|The response body to use in a custom response to a web request. This is referenced by key from <a>CustomResponse</a> <code>CustomResponseBodyKey</code>.|

<h2 id="tocS_RuleGroupSummary">RuleGroupSummary</h2>
<!-- backwards compatibility -->
<a id="schemarulegroupsummary"></a>
<a id="schema_RuleGroupSummary"></a>
<a id="tocSrulegroupsummary"></a>
<a id="tocsrulegroupsummary"></a>

```json
{
  "Name": {},
  "Id": {},
  "Description": {},
  "LockToken": {},
  "ARN": {}
}
```

High-level information about a <a>RuleGroup</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage a <code>RuleGroup</code>, and the ARN, that you provide to the <a>RuleGroupReferenceStatement</a> to use the rule group in a <a>Rule</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Id|object|false|none|none|
|Description|object|false|none|none|
|LockToken|object|false|none|none|
|ARN|object|false|none|none|

<h2 id="tocS_DefaultAction">DefaultAction</h2>
<!-- backwards compatibility -->
<a id="schemadefaultaction"></a>
<a id="schema_DefaultAction"></a>
<a id="tocSdefaultaction"></a>
<a id="tocsdefaultaction"></a>

```json
{
  "Block": {
    "CustomResponse": {
      "ResponseCode": {},
      "CustomResponseBodyKey": {},
      "ResponseHeaders": {}
    }
  },
  "Allow": {
    "CustomRequestHandling": {
      "InsertHeaders": {}
    }
  }
}
```

In a <a>WebACL</a>, this is the action that you want WAF to perform when a web request doesn't match any of the rules in the <code>WebACL</code>. The default action must be a terminating action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Block|object|false|none|none|
|Allow|object|false|none|none|

<h2 id="tocS_WebACLSummary">WebACLSummary</h2>
<!-- backwards compatibility -->
<a id="schemawebaclsummary"></a>
<a id="schema_WebACLSummary"></a>
<a id="tocSwebaclsummary"></a>
<a id="tocswebaclsummary"></a>

```json
{
  "Name": {},
  "Id": {},
  "Description": {},
  "LockToken": {},
  "ARN": {}
}
```

High-level information about a <a>WebACL</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage a <code>WebACL</code>, and the ARN, that you provide to operations like <a>AssociateWebACL</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Id|object|false|none|none|
|Description|object|false|none|none|
|LockToken|object|false|none|none|
|ARN|object|false|none|none|

<h2 id="tocS_CustomHTTPHeaderName">CustomHTTPHeaderName</h2>
<!-- backwards compatibility -->
<a id="schemacustomhttpheadername"></a>
<a id="schema_CustomHTTPHeaderName"></a>
<a id="tocScustomhttpheadername"></a>
<a id="tocscustomhttpheadername"></a>

```json
"string"
```

<h2 id="tocS_CustomHTTPHeaderValue">CustomHTTPHeaderValue</h2>
<!-- backwards compatibility -->
<a id="schemacustomhttpheadervalue"></a>
<a id="schema_CustomHTTPHeaderValue"></a>
<a id="tocScustomhttpheadervalue"></a>
<a id="tocscustomhttpheadervalue"></a>

```json
"string"
```

<h2 id="tocS_CustomHTTPHeader">CustomHTTPHeader</h2>
<!-- backwards compatibility -->
<a id="schemacustomhttpheader"></a>
<a id="schema_CustomHTTPHeader"></a>
<a id="tocScustomhttpheader"></a>
<a id="tocscustomhttpheader"></a>

```json
{
  "Name": {},
  "Value": {}
}
```

A custom header for custom request and response handling. This is used in <a>CustomResponse</a> and <a>CustomRequestHandling</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_CustomHTTPHeaders">CustomHTTPHeaders</h2>
<!-- backwards compatibility -->
<a id="schemacustomhttpheaders"></a>
<a id="schema_CustomHTTPHeaders"></a>
<a id="tocScustomhttpheaders"></a>
<a id="tocscustomhttpheaders"></a>

```json
[
  {
    "Name": {},
    "Value": {}
  }
]
```

<h2 id="tocS_ResponseStatusCode">ResponseStatusCode</h2>
<!-- backwards compatibility -->
<a id="schemaresponsestatuscode"></a>
<a id="schema_ResponseStatusCode"></a>
<a id="tocSresponsestatuscode"></a>
<a id="tocsresponsestatuscode"></a>

```json
200
```

<h2 id="tocS_CustomResponseBody">CustomResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemacustomresponsebody"></a>
<a id="schema_CustomResponseBody"></a>
<a id="tocScustomresponsebody"></a>
<a id="tocscustomresponsebody"></a>

```json
{
  "ContentType": {},
  "Content": {}
}
```

The response body to use in a custom response to a web request. This is referenced by key from <a>CustomResponse</a> <code>CustomResponseBodyKey</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContentType|object|true|none|none|
|Content|object|true|none|none|

<h2 id="tocS_ResponseContentType">ResponseContentType</h2>
<!-- backwards compatibility -->
<a id="schemaresponsecontenttype"></a>
<a id="schema_ResponseContentType"></a>
<a id="tocSresponsecontenttype"></a>
<a id="tocsresponsecontenttype"></a>

```json
"TEXT_PLAIN"
```

<h2 id="tocS_ResponseContent">ResponseContent</h2>
<!-- backwards compatibility -->
<a id="schemaresponsecontent"></a>
<a id="schema_ResponseContent"></a>
<a id="tocSresponsecontent"></a>
<a id="tocsresponsecontent"></a>

```json
"string"
```

<h2 id="tocS_LockToken">LockToken</h2>
<!-- backwards compatibility -->
<a id="schemalocktoken"></a>
<a id="schema_LockToken"></a>
<a id="tocSlocktoken"></a>
<a id="tocslocktoken"></a>

```json
"string"
```

<h2 id="tocS_EntityId">EntityId</h2>
<!-- backwards compatibility -->
<a id="schemaentityid"></a>
<a id="schema_EntityId"></a>
<a id="tocSentityid"></a>
<a id="tocsentityid"></a>

```json
"string"
```

<h2 id="tocS_VendorName">VendorName</h2>
<!-- backwards compatibility -->
<a id="schemavendorname"></a>
<a id="schema_VendorName"></a>
<a id="tocSvendorname"></a>
<a id="tocsvendorname"></a>

```json
"string"
```

<h2 id="tocS_VersionKeyString">VersionKeyString</h2>
<!-- backwards compatibility -->
<a id="schemaversionkeystring"></a>
<a id="schema_VersionKeyString"></a>
<a id="tocSversionkeystring"></a>
<a id="tocsversionkeystring"></a>

```json
"string"
```

<h2 id="tocS_RuleSummaries">RuleSummaries</h2>
<!-- backwards compatibility -->
<a id="schemarulesummaries"></a>
<a id="schema_RuleSummaries"></a>
<a id="tocSrulesummaries"></a>
<a id="tocsrulesummaries"></a>

```json
[
  {
    "Name": {},
    "Action": {
      "Block": {
        "CustomResponse": {
          "ResponseCode": {},
          "CustomResponseBodyKey": {},
          "ResponseHeaders": {}
        }
      },
      "Allow": {
        "CustomRequestHandling": {
          "InsertHeaders": {}
        }
      },
      "Count": {
        "CustomRequestHandling": {
          "InsertHeaders": {}
        }
      },
      "Captcha": {
        "CustomRequestHandling": {
          "InsertHeaders": {}
        }
      },
      "Challenge": {
        "CustomRequestHandling": {
          "InsertHeaders": {}
        }
      }
    }
  }
]
```

<h2 id="tocS_LabelName">LabelName</h2>
<!-- backwards compatibility -->
<a id="schemalabelname"></a>
<a id="schema_LabelName"></a>
<a id="tocSlabelname"></a>
<a id="tocslabelname"></a>

```json
"string"
```

<h2 id="tocS_LabelSummaries">LabelSummaries</h2>
<!-- backwards compatibility -->
<a id="schemalabelsummaries"></a>
<a id="schema_LabelSummaries"></a>
<a id="tocSlabelsummaries"></a>
<a id="tocslabelsummaries"></a>

```json
[
  {
    "Name": {}
  }
]
```

<h2 id="tocS_DownloadUrl">DownloadUrl</h2>
<!-- backwards compatibility -->
<a id="schemadownloadurl"></a>
<a id="schema_DownloadUrl"></a>
<a id="tocSdownloadurl"></a>
<a id="tocsdownloadurl"></a>

```json
"string"
```

<h2 id="tocS_ExcludedRule">ExcludedRule</h2>
<!-- backwards compatibility -->
<a id="schemaexcludedrule"></a>
<a id="schema_ExcludedRule"></a>
<a id="tocSexcludedrule"></a>
<a id="tocsexcludedrule"></a>

```json
{
  "Name": {}
}
```

<p>Specifies a single rule in a rule group whose action you want to override to <code>Count</code>. </p> <note> <p>Instead of this option, use <code>RuleActionOverrides</code>. It accepts any valid action setting, including <code>Count</code>.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_ExcludedRules">ExcludedRules</h2>
<!-- backwards compatibility -->
<a id="schemaexcludedrules"></a>
<a id="schema_ExcludedRules"></a>
<a id="tocSexcludedrules"></a>
<a id="tocsexcludedrules"></a>

```json
[
  {
    "Name": {}
  }
]
```

<h2 id="tocS_FailureCode">FailureCode</h2>
<!-- backwards compatibility -->
<a id="schemafailurecode"></a>
<a id="schema_FailureCode"></a>
<a id="tocSfailurecode"></a>
<a id="tocsfailurecode"></a>

```json
0
```

<h2 id="tocS_FailureValue">FailureValue</h2>
<!-- backwards compatibility -->
<a id="schemafailurevalue"></a>
<a id="schema_FailureValue"></a>
<a id="tocSfailurevalue"></a>
<a id="tocsfailurevalue"></a>

```json
"string"
```

<h2 id="tocS_FallbackBehavior">FallbackBehavior</h2>
<!-- backwards compatibility -->
<a id="schemafallbackbehavior"></a>
<a id="schema_FallbackBehavior"></a>
<a id="tocSfallbackbehavior"></a>
<a id="tocsfallbackbehavior"></a>

```json
"MATCH"
```

<h2 id="tocS_FieldIdentifier">FieldIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemafieldidentifier"></a>
<a id="schema_FieldIdentifier"></a>
<a id="tocSfieldidentifier"></a>
<a id="tocsfieldidentifier"></a>

```json
"string"
```

<h2 id="tocS_SingleHeader">SingleHeader</h2>
<!-- backwards compatibility -->
<a id="schemasingleheader"></a>
<a id="schema_SingleHeader"></a>
<a id="tocSsingleheader"></a>
<a id="tocssingleheader"></a>

```json
{
  "Name": {}
}
```

<p>Inspect one of the headers in the web request, identified by name, for example, <code>User-Agent</code> or <code>Referer</code>. The name isn't case sensitive.</p> <p>You can filter and inspect all headers with the <code>FieldToMatch</code> setting <code>Headers</code>.</p> <p>This is used to indicate the web request component to inspect, in the <a>FieldToMatch</a> specification. </p> <p>Example JSON: <code>"SingleHeader": { "Name": "haystack" }</code> </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_SingleQueryArgument">SingleQueryArgument</h2>
<!-- backwards compatibility -->
<a id="schemasinglequeryargument"></a>
<a id="schema_SingleQueryArgument"></a>
<a id="tocSsinglequeryargument"></a>
<a id="tocssinglequeryargument"></a>

```json
{
  "Name": {}
}
```

<p>Inspect one query argument in the web request, identified by name, for example <i>UserName</i> or <i>SalesRegion</i>. The name isn't case sensitive. </p> <p>This is used to indicate the web request component to inspect, in the <a>FieldToMatch</a> specification. </p> <p>Example JSON: <code>"SingleQueryArgument": { "Name": "myArgument" }</code> </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_UriPath">UriPath</h2>
<!-- backwards compatibility -->
<a id="schemauripath"></a>
<a id="schema_UriPath"></a>
<a id="tocSuripath"></a>
<a id="tocsuripath"></a>

```json
{}
```

<p>Inspect the path component of the URI of the web request. This is the part of the web request that identifies a resource. For example, <code>/images/daily-ad.jpg</code>.</p> <p>This is used only in the <a>FieldToMatch</a> specification for some web request component types. </p> <p>JSON specification: <code>"UriPath": {}</code> </p>

<h2 id="tocS_QueryString">QueryString</h2>
<!-- backwards compatibility -->
<a id="schemaquerystring"></a>
<a id="schema_QueryString"></a>
<a id="tocSquerystring"></a>
<a id="tocsquerystring"></a>

```json
{}
```

<p>Inspect the query string of the web request. This is the part of a URL that appears after a <code>?</code> character, if any.</p> <p>This is used only in the <a>FieldToMatch</a> specification for some web request component types. </p> <p>JSON specification: <code>"QueryString": {}</code> </p>

<h2 id="tocS_Method">Method</h2>
<!-- backwards compatibility -->
<a id="schemamethod"></a>
<a id="schema_Method"></a>
<a id="tocSmethod"></a>
<a id="tocsmethod"></a>

```json
{}
```

<p>Inspect the HTTP method of the web request. The method indicates the type of operation that the request is asking the origin to perform. </p> <p>This is used only in the <a>FieldToMatch</a> specification for some web request component types. </p> <p>JSON specification: <code>"Method": {}</code> </p>

<h2 id="tocS_JsonBody">JsonBody</h2>
<!-- backwards compatibility -->
<a id="schemajsonbody"></a>
<a id="schema_JsonBody"></a>
<a id="tocSjsonbody"></a>
<a id="tocsjsonbody"></a>

```json
{
  "MatchPattern": {
    "All": {},
    "IncludedPaths": {}
  },
  "MatchScope": {},
  "InvalidFallbackBehavior": {},
  "OversizeHandling": {}
}
```

<p>Inspect the body of the web request as JSON. The body immediately follows the request headers. </p> <p>This is used to indicate the web request component to inspect, in the <a>FieldToMatch</a> specification. </p> <p>Use the specifications in this object to indicate which parts of the JSON body to inspect using the rule's inspection criteria. WAF inspects only the parts of the JSON that result from the matches that you indicate. </p> <p>Example JSON: <code>"JsonBody": { "MatchPattern": { "All": {} }, "MatchScope": "ALL" }</code> </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MatchPattern|object|true|none|none|
|MatchScope|object|true|none|none|
|InvalidFallbackBehavior|object|false|none|none|
|OversizeHandling|object|false|none|none|

<h2 id="tocS_Headers">Headers</h2>
<!-- backwards compatibility -->
<a id="schemaheaders"></a>
<a id="schema_Headers"></a>
<a id="tocSheaders"></a>
<a id="tocsheaders"></a>

```json
{
  "MatchPattern": {
    "All": {},
    "IncludedHeaders": {},
    "ExcludedHeaders": {}
  },
  "MatchScope": {},
  "OversizeHandling": {}
}
```

<p>Inspect all headers in the web request. You can specify the parts of the headers to inspect and you can narrow the set of headers to inspect by including or excluding specific keys.</p> <p>This is used to indicate the web request component to inspect, in the <a>FieldToMatch</a> specification. </p> <p>If you want to inspect just the value of a single header, use the <code>SingleHeader</code> <code>FieldToMatch</code> setting instead.</p> <p>Example JSON: <code>"Headers": { "MatchPattern": { "All": {} }, "MatchScope": "KEY", "OversizeHandling": "MATCH" }</code> </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MatchPattern|object|true|none|none|
|MatchScope|object|true|none|none|
|OversizeHandling|object|true|none|none|

<h2 id="tocS_FieldToMatchData">FieldToMatchData</h2>
<!-- backwards compatibility -->
<a id="schemafieldtomatchdata"></a>
<a id="schema_FieldToMatchData"></a>
<a id="tocSfieldtomatchdata"></a>
<a id="tocsfieldtomatchdata"></a>

```json
"string"
```

<h2 id="tocS_FilterBehavior">FilterBehavior</h2>
<!-- backwards compatibility -->
<a id="schemafilterbehavior"></a>
<a id="schema_FilterBehavior"></a>
<a id="tocSfilterbehavior"></a>
<a id="tocsfilterbehavior"></a>

```json
"KEEP"
```

<h2 id="tocS_FilterRequirement">FilterRequirement</h2>
<!-- backwards compatibility -->
<a id="schemafilterrequirement"></a>
<a id="schema_FilterRequirement"></a>
<a id="tocSfilterrequirement"></a>
<a id="tocsfilterrequirement"></a>

```json
"MEETS_ALL"
```

<h2 id="tocS_Filter">Filter</h2>
<!-- backwards compatibility -->
<a id="schemafilter"></a>
<a id="schema_Filter"></a>
<a id="tocSfilter"></a>
<a id="tocsfilter"></a>

```json
{
  "Behavior": {},
  "Requirement": {},
  "Conditions": {}
}
```

A single logging filter, used in <a>LoggingFilter</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Behavior|object|true|none|none|
|Requirement|object|true|none|none|
|Conditions|object|true|none|none|

<h2 id="tocS_Filters">Filters</h2>
<!-- backwards compatibility -->
<a id="schemafilters"></a>
<a id="schema_Filters"></a>
<a id="tocSfilters"></a>
<a id="tocsfilters"></a>

```json
[
  {
    "Behavior": {},
    "Requirement": {},
    "Conditions": {}
  }
]
```

<h2 id="tocS_RulePriority">RulePriority</h2>
<!-- backwards compatibility -->
<a id="schemarulepriority"></a>
<a id="schema_RulePriority"></a>
<a id="tocSrulepriority"></a>
<a id="tocsrulepriority"></a>

```json
0
```

<h2 id="tocS_FirewallManagerStatement">FirewallManagerStatement</h2>
<!-- backwards compatibility -->
<a id="schemafirewallmanagerstatement"></a>
<a id="schema_FirewallManagerStatement"></a>
<a id="tocSfirewallmanagerstatement"></a>
<a id="tocsfirewallmanagerstatement"></a>

```json
{
  "ManagedRuleGroupStatement": {
    "VendorName": {},
    "Name": {},
    "Version": {},
    "ExcludedRules": {},
    "ScopeDownStatement": {},
    "ManagedRuleGroupConfigs": {},
    "RuleActionOverrides": {}
  },
  "RuleGroupReferenceStatement": {
    "ARN": {},
    "ExcludedRules": {},
    "RuleActionOverrides": {}
  }
}
```

The processing guidance for an Firewall Manager rule. This is like a regular rule <a>Statement</a>, but it can only contain a single rule group reference.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ManagedRuleGroupStatement|object|false|none|none|
|RuleGroupReferenceStatement|object|false|none|none|

<h2 id="tocS_OverrideAction">OverrideAction</h2>
<!-- backwards compatibility -->
<a id="schemaoverrideaction"></a>
<a id="schema_OverrideAction"></a>
<a id="tocSoverrideaction"></a>
<a id="tocsoverrideaction"></a>

```json
{
  "Count": {
    "CustomRequestHandling": {
      "InsertHeaders": {}
    }
  },
  "None": {}
}
```

<p>The action to use in the place of the action that results from the rule group evaluation. Set the override action to none to leave the result of the rule group alone. Set it to count to override the result to count only. </p> <p>You can only use this for rule statements that reference a rule group, like <code>RuleGroupReferenceStatement</code> and <code>ManagedRuleGroupStatement</code>. </p> <note> <p>This option is usually set to none. It does not affect how the rules in the rule group are evaluated. If you want the rules in the rule group to only count matches, do not use this and instead use the rule action override option, with <code>Count</code> action, in your rule group reference statement settings. </p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|object|false|none|none|
|None|object|false|none|none|

<h2 id="tocS_FirewallManagerRuleGroup">FirewallManagerRuleGroup</h2>
<!-- backwards compatibility -->
<a id="schemafirewallmanagerrulegroup"></a>
<a id="schema_FirewallManagerRuleGroup"></a>
<a id="tocSfirewallmanagerrulegroup"></a>
<a id="tocsfirewallmanagerrulegroup"></a>

```json
{
  "Name": {},
  "Priority": {},
  "FirewallManagerStatement": {
    "ManagedRuleGroupStatement": {
      "VendorName": {},
      "Name": {},
      "Version": {},
      "ExcludedRules": {},
      "ScopeDownStatement": {},
      "ManagedRuleGroupConfigs": {},
      "RuleActionOverrides": {}
    },
    "RuleGroupReferenceStatement": {
      "ARN": {},
      "ExcludedRules": {},
      "RuleActionOverrides": {}
    }
  },
  "OverrideAction": {
    "Count": {
      "CustomRequestHandling": {
        "InsertHeaders": {}
      }
    },
    "None": {}
  },
  "VisibilityConfig": {
    "SampledRequestsEnabled": {},
    "CloudWatchMetricsEnabled": {},
    "MetricName": {}
  }
}
```

A rule group that's defined for an Firewall Manager WAF policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Priority|object|true|none|none|
|FirewallManagerStatement|object|true|none|none|
|OverrideAction|object|true|none|none|
|VisibilityConfig|object|true|none|none|

<h2 id="tocS_FirewallManagerRuleGroups">FirewallManagerRuleGroups</h2>
<!-- backwards compatibility -->
<a id="schemafirewallmanagerrulegroups"></a>
<a id="schema_FirewallManagerRuleGroups"></a>
<a id="tocSfirewallmanagerrulegroups"></a>
<a id="tocsfirewallmanagerrulegroups"></a>

```json
[
  {
    "Name": {},
    "Priority": {},
    "FirewallManagerStatement": {
      "ManagedRuleGroupStatement": {
        "VendorName": {},
        "Name": {},
        "Version": {},
        "ExcludedRules": {},
        "ScopeDownStatement": {},
        "ManagedRuleGroupConfigs": {},
        "RuleActionOverrides": {}
      },
      "RuleGroupReferenceStatement": {
        "ARN": {},
        "ExcludedRules": {},
        "RuleActionOverrides": {}
      }
    },
    "OverrideAction": {
      "Count": {
        "CustomRequestHandling": {
          "InsertHeaders": {}
        }
      },
      "None": {}
    },
    "VisibilityConfig": {
      "SampledRequestsEnabled": {},
      "CloudWatchMetricsEnabled": {},
      "MetricName": {}
    }
  }
]
```

<h2 id="tocS_ManagedRuleGroupStatement">ManagedRuleGroupStatement</h2>
<!-- backwards compatibility -->
<a id="schemamanagedrulegroupstatement"></a>
<a id="schema_ManagedRuleGroupStatement"></a>
<a id="tocSmanagedrulegroupstatement"></a>
<a id="tocsmanagedrulegroupstatement"></a>

```json
{
  "VendorName": {},
  "Name": {},
  "Version": {},
  "ExcludedRules": {},
  "ScopeDownStatement": {
    "ByteMatchStatement": {
      "SearchString": {},
      "FieldToMatch": {
        "SingleHeader": {
          "Name": {}
        },
        "SingleQueryArgument": {
          "Name": {}
        },
        "AllQueryArguments": {},
        "UriPath": {},
        "QueryString": {},
        "Body": {
          "OversizeHandling": {}
        },
        "Method": {},
        "JsonBody": {
          "MatchPattern": {
            "All": {},
            "IncludedPaths": {}
          },
          "MatchScope": {},
          "InvalidFallbackBehavior": {},
          "OversizeHandling": {}
        },
        "Headers": {
          "MatchPattern": {
            "All": {},
            "IncludedHeaders": {},
            "ExcludedHeaders": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        },
        "Cookies": {
          "MatchPattern": {
            "All": {},
            "IncludedCookies": {},
            "ExcludedCookies": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        }
      },
      "TextTransformations": {},
      "PositionalConstraint": {}
    },
    "SqliMatchStatement": {
      "FieldToMatch": {
        "SingleHeader": {
          "Name": {}
        },
        "SingleQueryArgument": {
          "Name": {}
        },
        "AllQueryArguments": {},
        "UriPath": {},
        "QueryString": {},
        "Body": {
          "OversizeHandling": {}
        },
        "Method": {},
        "JsonBody": {
          "MatchPattern": {
            "All": {},
            "IncludedPaths": {}
          },
          "MatchScope": {},
          "InvalidFallbackBehavior": {},
          "OversizeHandling": {}
        },
        "Headers": {
          "MatchPattern": {
            "All": {},
            "IncludedHeaders": {},
            "ExcludedHeaders": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        },
        "Cookies": {
          "MatchPattern": {
            "All": {},
            "IncludedCookies": {},
            "ExcludedCookies": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        }
      },
      "TextTransformations": {},
      "SensitivityLevel": {}
    },
    "XssMatchStatement": {
      "FieldToMatch": {
        "SingleHeader": {
          "Name": {}
        },
        "SingleQueryArgument": {
          "Name": {}
        },
        "AllQueryArguments": {},
        "UriPath": {},
        "QueryString": {},
        "Body": {
          "OversizeHandling": {}
        },
        "Method": {},
        "JsonBody": {
          "MatchPattern": {
            "All": {},
            "IncludedPaths": {}
          },
          "MatchScope": {},
          "InvalidFallbackBehavior": {},
          "OversizeHandling": {}
        },
        "Headers": {
          "MatchPattern": {
            "All": {},
            "IncludedHeaders": {},
            "ExcludedHeaders": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        },
        "Cookies": {
          "MatchPattern": {
            "All": {},
            "IncludedCookies": {},
            "ExcludedCookies": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        }
      },
      "TextTransformations": {}
    },
    "SizeConstraintStatement": {
      "FieldToMatch": {
        "SingleHeader": {
          "Name": {}
        },
        "SingleQueryArgument": {
          "Name": {}
        },
        "AllQueryArguments": {},
        "UriPath": {},
        "QueryString": {},
        "Body": {
          "OversizeHandling": {}
        },
        "Method": {},
        "JsonBody": {
          "MatchPattern": {
            "All": {},
            "IncludedPaths": {}
          },
          "MatchScope": {},
          "InvalidFallbackBehavior": {},
          "OversizeHandling": {}
        },
        "Headers": {
          "MatchPattern": {
            "All": {},
            "IncludedHeaders": {},
            "ExcludedHeaders": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        },
        "Cookies": {
          "MatchPattern": {
            "All": {},
            "IncludedCookies": {},
            "ExcludedCookies": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        }
      },
      "ComparisonOperator": {},
      "Size": {},
      "TextTransformations": {}
    },
    "GeoMatchStatement": {
      "CountryCodes": {},
      "ForwardedIPConfig": {
        "HeaderName": {},
        "FallbackBehavior": {}
      }
    },
    "RuleGroupReferenceStatement": {
      "ARN": {},
      "ExcludedRules": {},
      "RuleActionOverrides": {}
    },
    "IPSetReferenceStatement": {
      "ARN": {},
      "IPSetForwardedIPConfig": {
        "HeaderName": {},
        "FallbackBehavior": {},
        "Position": {}
      }
    },
    "RegexPatternSetReferenceStatement": {
      "ARN": {},
      "FieldToMatch": {
        "SingleHeader": {
          "Name": {}
        },
        "SingleQueryArgument": {
          "Name": {}
        },
        "AllQueryArguments": {},
        "UriPath": {},
        "QueryString": {},
        "Body": {
          "OversizeHandling": {}
        },
        "Method": {},
        "JsonBody": {
          "MatchPattern": {
            "All": {},
            "IncludedPaths": {}
          },
          "MatchScope": {},
          "InvalidFallbackBehavior": {},
          "OversizeHandling": {}
        },
        "Headers": {
          "MatchPattern": {
            "All": {},
            "IncludedHeaders": {},
            "ExcludedHeaders": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        },
        "Cookies": {
          "MatchPattern": {
            "All": {},
            "IncludedCookies": {},
            "ExcludedCookies": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        }
      },
      "TextTransformations": {}
    },
    "RateBasedStatement": {},
    "AndStatement": {},
    "OrStatement": {},
    "NotStatement": {},
    "ManagedRuleGroupStatement": {},
    "LabelMatchStatement": {
      "Scope": {},
      "Key": {}
    },
    "RegexMatchStatement": {
      "RegexString": {},
      "FieldToMatch": {
        "SingleHeader": {
          "Name": {}
        },
        "SingleQueryArgument": {
          "Name": {}
        },
        "AllQueryArguments": {},
        "UriPath": {},
        "QueryString": {},
        "Body": {
          "OversizeHandling": {}
        },
        "Method": {},
        "JsonBody": {
          "MatchPattern": {
            "All": {},
            "IncludedPaths": {}
          },
          "MatchScope": {},
          "InvalidFallbackBehavior": {},
          "OversizeHandling": {}
        },
        "Headers": {
          "MatchPattern": {
            "All": {},
            "IncludedHeaders": {},
            "ExcludedHeaders": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        },
        "Cookies": {
          "MatchPattern": {
            "All": {},
            "IncludedCookies": {},
            "ExcludedCookies": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        }
      },
      "TextTransformations": {}
    }
  },
  "ManagedRuleGroupConfigs": {},
  "RuleActionOverrides": {}
}
```

<p>A rule statement used to run the rules that are defined in a managed rule group. To use this, provide the vendor name and the name of the rule group in this statement. You can retrieve the required names by calling <a>ListAvailableManagedRuleGroups</a>.</p> <p>You cannot nest a <code>ManagedRuleGroupStatement</code>, for example for use inside a <code>NotStatement</code> or <code>OrStatement</code>. It can only be referenced as a top-level statement within a rule.</p> <note> <p>You are charged additional fees when you use the WAF Bot Control managed rule group <code>AWSManagedRulesBotControlRuleSet</code> or the WAF Fraud Control account takeover prevention (ATP) managed rule group <code>AWSManagedRulesATPRuleSet</code>. For more information, see <a href="http://aws.amazon.com/waf/pricing/">WAF Pricing</a>.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VendorName|object|true|none|none|
|Name|object|true|none|none|
|Version|object|false|none|none|
|ExcludedRules|object|false|none|none|
|ScopeDownStatement|object|false|none|none|
|ManagedRuleGroupConfigs|object|false|none|none|
|RuleActionOverrides|object|false|none|none|

<h2 id="tocS_RuleGroupReferenceStatement">RuleGroupReferenceStatement</h2>
<!-- backwards compatibility -->
<a id="schemarulegroupreferencestatement"></a>
<a id="schema_RuleGroupReferenceStatement"></a>
<a id="tocSrulegroupreferencestatement"></a>
<a id="tocsrulegroupreferencestatement"></a>

```json
{
  "ARN": {},
  "ExcludedRules": {},
  "RuleActionOverrides": {}
}
```

<p>A rule statement used to run the rules that are defined in a <a>RuleGroup</a>. To use this, create a rule group with your rules, then provide the ARN of the rule group in this statement.</p> <p>You cannot nest a <code>RuleGroupReferenceStatement</code>, for example for use inside a <code>NotStatement</code> or <code>OrStatement</code>. You can only use a rule group reference statement at the top level inside a web ACL. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ARN|object|true|none|none|
|ExcludedRules|object|false|none|none|
|RuleActionOverrides|object|false|none|none|

<h2 id="tocS_ForwardedIPHeaderName">ForwardedIPHeaderName</h2>
<!-- backwards compatibility -->
<a id="schemaforwardedipheadername"></a>
<a id="schema_ForwardedIPHeaderName"></a>
<a id="tocSforwardedipheadername"></a>
<a id="tocsforwardedipheadername"></a>

```json
"string"
```

<h2 id="tocS_ForwardedIPConfig">ForwardedIPConfig</h2>
<!-- backwards compatibility -->
<a id="schemaforwardedipconfig"></a>
<a id="schema_ForwardedIPConfig"></a>
<a id="tocSforwardedipconfig"></a>
<a id="tocsforwardedipconfig"></a>

```json
{
  "HeaderName": {},
  "FallbackBehavior": {}
}
```

<p>The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name. </p> <note> <p>If the specified header isn't present in the request, WAF doesn't apply the rule to the web request at all.</p> </note> <p>This configuration is used for <a>GeoMatchStatement</a> and <a>RateBasedStatement</a>. For <a>IPSetReferenceStatement</a>, use <a>IPSetForwardedIPConfig</a> instead. </p> <p>WAF only evaluates the first IP address found in the specified HTTP header. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HeaderName|object|true|none|none|
|FallbackBehavior|object|true|none|none|

<h2 id="tocS_ForwardedIPPosition">ForwardedIPPosition</h2>
<!-- backwards compatibility -->
<a id="schemaforwardedipposition"></a>
<a id="schema_ForwardedIPPosition"></a>
<a id="tocSforwardedipposition"></a>
<a id="tocsforwardedipposition"></a>

```json
"FIRST"
```

<h2 id="tocS_Platform">Platform</h2>
<!-- backwards compatibility -->
<a id="schemaplatform"></a>
<a id="schema_Platform"></a>
<a id="tocSplatform"></a>
<a id="tocsplatform"></a>

```json
"IOS"
```

<h2 id="tocS_GeoMatchStatement">GeoMatchStatement</h2>
<!-- backwards compatibility -->
<a id="schemageomatchstatement"></a>
<a id="schema_GeoMatchStatement"></a>
<a id="tocSgeomatchstatement"></a>
<a id="tocsgeomatchstatement"></a>

```json
{
  "CountryCodes": {},
  "ForwardedIPConfig": {
    "HeaderName": {},
    "FallbackBehavior": {}
  }
}
```

<p>A rule statement that labels web requests by country and region and that matches against web requests based on country code. A geo match rule labels every request that it inspects regardless of whether it finds a match.</p> <ul> <li> <p>To manage requests only by country, you can use this statement by itself and specify the countries that you want to match against in the <code>CountryCodes</code> array. </p> </li> <li> <p>Otherwise, configure your geo match rule with Count action so that it only labels requests. Then, add one or more label match rules to run after the geo match rule and configure them to match against the geographic labels and handle the requests as needed. </p> </li> </ul> <p>WAF labels requests using the alpha-2 country and region codes from the International Organization for Standardization (ISO) 3166 standard. WAF determines the codes using either the IP address in the web request origin or, if you specify it, the address in the geo match <code>ForwardedIPConfig</code>. </p> <p>If you use the web request origin, the label formats are <code>awswaf:clientip:geo:region:&lt;ISO country code&gt;-&lt;ISO region code&gt;</code> and <code>awswaf:clientip:geo:country:&lt;ISO country code&gt;</code>.</p> <p>If you use a forwarded IP address, the label formats are <code>awswaf:forwardedip:geo:region:&lt;ISO country code&gt;-&lt;ISO region code&gt;</code> and <code>awswaf:forwardedip:geo:country:&lt;ISO country code&gt;</code>.</p> <p>For additional details, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-geo-match.html">Geographic match rule statement</a> in the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">WAF Developer Guide</a>. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CountryCodes|object|false|none|none|
|ForwardedIPConfig|object|false|none|none|

<h2 id="tocS_IPSet">IPSet</h2>
<!-- backwards compatibility -->
<a id="schemaipset"></a>
<a id="schema_IPSet"></a>
<a id="tocSipset"></a>
<a id="tocsipset"></a>

```json
{
  "Name": {},
  "Id": {},
  "ARN": {},
  "Description": {},
  "IPAddressVersion": {},
  "Addresses": {}
}
```

<p>Contains zero or more IP addresses or blocks of IP addresses specified in Classless Inter-Domain Routing (CIDR) notation. WAF supports all IPv4 and IPv6 CIDR ranges except for /0. For information about CIDR notation, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>. </p> <p>WAF assigns an ARN to each <code>IPSet</code> that you create. To use an IP set in a rule, you provide the ARN to the <a>Rule</a> statement <a>IPSetReferenceStatement</a>. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Id|object|true|none|none|
|ARN|object|true|none|none|
|Description|object|false|none|none|
|IPAddressVersion|object|true|none|none|
|Addresses|object|true|none|none|

<h2 id="tocS_LoggingConfiguration">LoggingConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaloggingconfiguration"></a>
<a id="schema_LoggingConfiguration"></a>
<a id="tocSloggingconfiguration"></a>
<a id="tocsloggingconfiguration"></a>

```json
{
  "ResourceArn": {},
  "LogDestinationConfigs": {},
  "RedactedFields": {},
  "ManagedByFirewallManager": {},
  "LoggingFilter": {
    "Filters": {},
    "DefaultBehavior": {}
  }
}
```

<p>Defines an association between logging destinations and a web ACL resource, for logging from WAF. As part of the association, you can specify parts of the standard logging fields to keep out of the logs and you can specify filters so that you log only a subset of the logging records. </p> <note> <p>You can define one logging destination per web ACL.</p> </note> <p>You can access information about the traffic that WAF inspects using the following steps:</p> <ol> <li> <p>Create your logging destination. You can use an Amazon CloudWatch Logs log group, an Amazon Simple Storage Service (Amazon S3) bucket, or an Amazon Kinesis Data Firehose. </p> <p>The name that you give the destination must start with <code>aws-waf-logs-</code>. Depending on the type of destination, you might need to configure additional settings or permissions. </p> <p>For configuration requirements and pricing information for each destination type, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/logging.html">Logging web ACL traffic</a> in the <i>WAF Developer Guide</i>.</p> </li> <li> <p>Associate your logging destination to your web ACL using a <code>PutLoggingConfiguration</code> request.</p> </li> </ol> <p>When you successfully enable logging using a <code>PutLoggingConfiguration</code> request, WAF creates an additional role or policy that is required to write logs to the logging destination. For an Amazon CloudWatch Logs log group, WAF creates a resource policy on the log group. For an Amazon S3 bucket, WAF creates a bucket policy. For an Amazon Kinesis Data Firehose, WAF creates a service-linked role.</p> <p>For additional information about web ACL logging, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/logging.html">Logging web ACL traffic information</a> in the <i>WAF Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|LogDestinationConfigs|object|true|none|none|
|RedactedFields|object|false|none|none|
|ManagedByFirewallManager|object|false|none|none|
|LoggingFilter|object|false|none|none|

<h2 id="tocS_ManagedRuleSet">ManagedRuleSet</h2>
<!-- backwards compatibility -->
<a id="schemamanagedruleset"></a>
<a id="schema_ManagedRuleSet"></a>
<a id="tocSmanagedruleset"></a>
<a id="tocsmanagedruleset"></a>

```json
{
  "Name": {},
  "Id": {},
  "ARN": {},
  "Description": {},
  "PublishedVersions": {
    "property1": {
      "AssociatedRuleGroupArn": {},
      "Capacity": {},
      "ForecastedLifetime": {},
      "PublishTimestamp": {},
      "LastUpdateTimestamp": {},
      "ExpiryTimestamp": {}
    },
    "property2": {
      "AssociatedRuleGroupArn": {},
      "Capacity": {},
      "ForecastedLifetime": {},
      "PublishTimestamp": {},
      "LastUpdateTimestamp": {},
      "ExpiryTimestamp": {}
    }
  },
  "RecommendedVersion": {},
  "LabelNamespace": {}
}
```

<p>A set of rules that is managed by Amazon Web Services and Amazon Web Services Marketplace sellers to provide versioned managed rule groups for customers of WAF.</p> <note> <p>This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. </p> <p>Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are <code>ListManagedRuleSets</code>, <code>GetManagedRuleSet</code>, <code>PutManagedRuleSetVersions</code>, and <code>UpdateManagedRuleSetVersionExpiryDate</code>.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Id|object|true|none|none|
|ARN|object|true|none|none|
|Description|object|false|none|none|
|PublishedVersions|object|false|none|none|
|RecommendedVersion|object|false|none|none|
|LabelNamespace|object|false|none|none|

<h2 id="tocS_MobileSdkRelease">MobileSdkRelease</h2>
<!-- backwards compatibility -->
<a id="schemamobilesdkrelease"></a>
<a id="schema_MobileSdkRelease"></a>
<a id="tocSmobilesdkrelease"></a>
<a id="tocsmobilesdkrelease"></a>

```json
{
  "ReleaseVersion": {},
  "Timestamp": {},
  "ReleaseNotes": {},
  "Tags": {}
}
```

<p>Information for a release of the mobile SDK, including release notes and tags.</p> <p>The mobile SDK is not generally available. Customers who have access to the mobile SDK can use it to establish and manage WAF tokens for use in HTTP(S) requests from a mobile device to WAF. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-application-integration.html">WAF client application integration</a> in the <i>WAF Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReleaseVersion|object|false|none|none|
|Timestamp|object|false|none|none|
|ReleaseNotes|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_PolicyString">PolicyString</h2>
<!-- backwards compatibility -->
<a id="schemapolicystring"></a>
<a id="schema_PolicyString"></a>
<a id="tocSpolicystring"></a>
<a id="tocspolicystring"></a>

```json
"string"
```

<h2 id="tocS_RateBasedStatementManagedKeysIPSet">RateBasedStatementManagedKeysIPSet</h2>
<!-- backwards compatibility -->
<a id="schemaratebasedstatementmanagedkeysipset"></a>
<a id="schema_RateBasedStatementManagedKeysIPSet"></a>
<a id="tocSratebasedstatementmanagedkeysipset"></a>
<a id="tocsratebasedstatementmanagedkeysipset"></a>

```json
{
  "IPAddressVersion": {},
  "Addresses": {}
}
```

The set of IP addresses that are currently blocked for a <a>RateBasedStatement</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IPAddressVersion|object|false|none|none|
|Addresses|object|false|none|none|

<h2 id="tocS_RegexPatternSet">RegexPatternSet</h2>
<!-- backwards compatibility -->
<a id="schemaregexpatternset"></a>
<a id="schema_RegexPatternSet"></a>
<a id="tocSregexpatternset"></a>
<a id="tocsregexpatternset"></a>

```json
{
  "Name": {},
  "Id": {},
  "ARN": {},
  "Description": {},
  "RegularExpressionList": {}
}
```

<p>Contains one or more regular expressions. </p> <p>WAF assigns an ARN to each <code>RegexPatternSet</code> that you create. To use a set in a rule, you provide the ARN to the <a>Rule</a> statement <a>RegexPatternSetReferenceStatement</a>. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Id|object|false|none|none|
|ARN|object|false|none|none|
|Description|object|false|none|none|
|RegularExpressionList|object|false|none|none|

<h2 id="tocS_RuleGroup">RuleGroup</h2>
<!-- backwards compatibility -->
<a id="schemarulegroup"></a>
<a id="schema_RuleGroup"></a>
<a id="tocSrulegroup"></a>
<a id="tocsrulegroup"></a>

```json
{
  "Name": {},
  "Id": {},
  "Capacity": {},
  "ARN": {},
  "Description": {},
  "Rules": {},
  "VisibilityConfig": {
    "SampledRequestsEnabled": {},
    "CloudWatchMetricsEnabled": {},
    "MetricName": {}
  },
  "LabelNamespace": {},
  "CustomResponseBodies": {
    "property1": {
      "ContentType": {},
      "Content": {}
    },
    "property2": {
      "ContentType": {},
      "Content": {}
    }
  },
  "AvailableLabels": {},
  "ConsumedLabels": {}
}
```

 A rule group defines a collection of rules to inspect and control web requests that you can use in a <a>WebACL</a>. When you create a rule group, you define an immutable capacity limit. If you update a rule group, you must stay within the capacity. This allows others to reuse the rule group with confidence in its capacity requirements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Id|object|true|none|none|
|Capacity|object|true|none|none|
|ARN|object|true|none|none|
|Description|object|false|none|none|
|Rules|object|false|none|none|
|VisibilityConfig|object|true|none|none|
|LabelNamespace|object|false|none|none|
|CustomResponseBodies|object|false|none|none|
|AvailableLabels|object|false|none|none|
|ConsumedLabels|object|false|none|none|

<h2 id="tocS_MetricName">MetricName</h2>
<!-- backwards compatibility -->
<a id="schemametricname"></a>
<a id="schema_MetricName"></a>
<a id="tocSmetricname"></a>
<a id="tocsmetricname"></a>

```json
"string"
```

<h2 id="tocS_TimeWindow">TimeWindow</h2>
<!-- backwards compatibility -->
<a id="schematimewindow"></a>
<a id="schema_TimeWindow"></a>
<a id="tocStimewindow"></a>
<a id="tocstimewindow"></a>

```json
{
  "StartTime": {},
  "EndTime": {}
}
```

<p>In a <a>GetSampledRequests</a> request, the <code>StartTime</code> and <code>EndTime</code> objects specify the time range for which you want WAF to return a sample of web requests.</p> <p>You must specify the times in Coordinated Universal Time (UTC) format. UTC format includes the special designator, <code>Z</code>. For example, <code>"2016-09-27T14:50Z"</code>. You can specify any time range in the previous three hours.</p> <p>In a <a>GetSampledRequests</a> response, the <code>StartTime</code> and <code>EndTime</code> objects specify the time range for which WAF actually returned a sample of web requests. WAF gets the specified number of requests from among the first 5,000 requests that your Amazon Web Services resource receives during the specified time period. If your resource receives more than 5,000 requests during that period, WAF stops sampling after the 5,000th request. In that case, <code>EndTime</code> is the time that WAF received the 5,000th request.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StartTime|object|true|none|none|
|EndTime|object|true|none|none|

<h2 id="tocS_ListMaxItems">ListMaxItems</h2>
<!-- backwards compatibility -->
<a id="schemalistmaxitems"></a>
<a id="schema_ListMaxItems"></a>
<a id="tocSlistmaxitems"></a>
<a id="tocslistmaxitems"></a>

```json
1
```

<h2 id="tocS_SampledHTTPRequests">SampledHTTPRequests</h2>
<!-- backwards compatibility -->
<a id="schemasampledhttprequests"></a>
<a id="schema_SampledHTTPRequests"></a>
<a id="tocSsampledhttprequests"></a>
<a id="tocssampledhttprequests"></a>

```json
[
  {
    "Request": {
      "ClientIP": {},
      "Country": {},
      "URI": {},
      "Method": {},
      "HTTPVersion": {},
      "Headers": {}
    },
    "Weight": {},
    "Timestamp": {},
    "Action": {},
    "RuleNameWithinRuleGroup": {},
    "RequestHeadersInserted": {},
    "ResponseCodeSent": {},
    "Labels": {},
    "CaptchaResponse": {
      "ResponseCode": {},
      "SolveTimestamp": {},
      "FailureReason": {}
    },
    "ChallengeResponse": {
      "ResponseCode": {},
      "SolveTimestamp": {},
      "FailureReason": {}
    },
    "OverriddenAction": {}
  }
]
```

<h2 id="tocS_PopulationSize">PopulationSize</h2>
<!-- backwards compatibility -->
<a id="schemapopulationsize"></a>
<a id="schema_PopulationSize"></a>
<a id="tocSpopulationsize"></a>
<a id="tocspopulationsize"></a>

```json
0
```

<h2 id="tocS_WebACL">WebACL</h2>
<!-- backwards compatibility -->
<a id="schemawebacl"></a>
<a id="schema_WebACL"></a>
<a id="tocSwebacl"></a>
<a id="tocswebacl"></a>

```json
{
  "Name": {},
  "Id": {},
  "ARN": {},
  "DefaultAction": {
    "Block": {
      "CustomResponse": {
        "ResponseCode": {},
        "CustomResponseBodyKey": {},
        "ResponseHeaders": {}
      }
    },
    "Allow": {
      "CustomRequestHandling": {
        "InsertHeaders": {}
      }
    }
  },
  "Description": {},
  "Rules": {},
  "VisibilityConfig": {
    "SampledRequestsEnabled": {},
    "CloudWatchMetricsEnabled": {},
    "MetricName": {}
  },
  "Capacity": {},
  "PreProcessFirewallManagerRuleGroups": {},
  "PostProcessFirewallManagerRuleGroups": {},
  "ManagedByFirewallManager": {},
  "LabelNamespace": {},
  "CustomResponseBodies": {
    "property1": {
      "ContentType": {},
      "Content": {}
    },
    "property2": {
      "ContentType": {},
      "Content": {}
    }
  },
  "CaptchaConfig": {
    "ImmunityTimeProperty": {
      "ImmunityTime": {}
    }
  },
  "ChallengeConfig": {
    "ImmunityTimeProperty": {
      "ImmunityTime": {}
    }
  },
  "TokenDomains": {},
  "AssociationConfig": {
    "RequestBody": {
      "property1": {
        "DefaultSizeInspectionLimit": {}
      },
      "property2": {
        "DefaultSizeInspectionLimit": {}
      }
    }
  }
}
```

 A web ACL defines a collection of rules to use to inspect and control web requests. Each rule has an action defined (allow, block, or count) for requests that match the statement of the rule. In the web ACL, you assign a default action to take (allow, block) for any request that does not match any of the rules. The rules in a web ACL can be a combination of the types <a>Rule</a>, <a>RuleGroup</a>, and managed rule group. You can associate a web ACL with one or more Amazon Web Services resources to protect. The resources can be an Amazon CloudFront distribution, an Amazon API Gateway REST API, an Application Load Balancer, an AppSync GraphQL API, an Amazon Cognito user pool, or an App Runner service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Id|object|true|none|none|
|ARN|object|true|none|none|
|DefaultAction|object|true|none|none|
|Description|object|false|none|none|
|Rules|object|false|none|none|
|VisibilityConfig|object|true|none|none|
|Capacity|object|false|none|none|
|PreProcessFirewallManagerRuleGroups|object|false|none|none|
|PostProcessFirewallManagerRuleGroups|object|false|none|none|
|ManagedByFirewallManager|object|false|none|none|
|LabelNamespace|object|false|none|none|
|CustomResponseBodies|object|false|none|none|
|CaptchaConfig|object|false|none|none|
|ChallengeConfig|object|false|none|none|
|TokenDomains|object|false|none|none|
|AssociationConfig|object|false|none|none|

<h2 id="tocS_OutputUrl">OutputUrl</h2>
<!-- backwards compatibility -->
<a id="schemaoutputurl"></a>
<a id="schema_OutputUrl"></a>
<a id="tocSoutputurl"></a>
<a id="tocsoutputurl"></a>

```json
"string"
```

<h2 id="tocS_HeaderName">HeaderName</h2>
<!-- backwards compatibility -->
<a id="schemaheadername"></a>
<a id="schema_HeaderName"></a>
<a id="tocSheadername"></a>
<a id="tocsheadername"></a>

```json
"string"
```

<h2 id="tocS_HeaderValue">HeaderValue</h2>
<!-- backwards compatibility -->
<a id="schemaheadervalue"></a>
<a id="schema_HeaderValue"></a>
<a id="tocSheadervalue"></a>
<a id="tocsheadervalue"></a>

```json
"string"
```

<h2 id="tocS_HTTPHeader">HTTPHeader</h2>
<!-- backwards compatibility -->
<a id="schemahttpheader"></a>
<a id="schema_HTTPHeader"></a>
<a id="tocShttpheader"></a>
<a id="tocshttpheader"></a>

```json
{
  "Name": {},
  "Value": {}
}
```

Part of the response from <a>GetSampledRequests</a>. This is a complex type that appears as <code>Headers</code> in the response syntax. <code>HTTPHeader</code> contains the names and values of all of the headers that appear in one of the web requests.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_HTTPHeaders">HTTPHeaders</h2>
<!-- backwards compatibility -->
<a id="schemahttpheaders"></a>
<a id="schema_HTTPHeaders"></a>
<a id="tocShttpheaders"></a>
<a id="tocshttpheaders"></a>

```json
[
  {
    "Name": {},
    "Value": {}
  }
]
```

<h2 id="tocS_HTTPMethod">HTTPMethod</h2>
<!-- backwards compatibility -->
<a id="schemahttpmethod"></a>
<a id="schema_HTTPMethod"></a>
<a id="tocShttpmethod"></a>
<a id="tocshttpmethod"></a>

```json
"string"
```

<h2 id="tocS_IPString">IPString</h2>
<!-- backwards compatibility -->
<a id="schemaipstring"></a>
<a id="schema_IPString"></a>
<a id="tocSipstring"></a>
<a id="tocsipstring"></a>

```json
"string"
```

<h2 id="tocS_URIString">URIString</h2>
<!-- backwards compatibility -->
<a id="schemauristring"></a>
<a id="schema_URIString"></a>
<a id="tocSuristring"></a>
<a id="tocsuristring"></a>

```json
"string"
```

<h2 id="tocS_HTTPVersion">HTTPVersion</h2>
<!-- backwards compatibility -->
<a id="schemahttpversion"></a>
<a id="schema_HTTPVersion"></a>
<a id="tocShttpversion"></a>
<a id="tocshttpversion"></a>

```json
"string"
```

<h2 id="tocS_HTTPRequest">HTTPRequest</h2>
<!-- backwards compatibility -->
<a id="schemahttprequest"></a>
<a id="schema_HTTPRequest"></a>
<a id="tocShttprequest"></a>
<a id="tocshttprequest"></a>

```json
{
  "ClientIP": {},
  "Country": {},
  "URI": {},
  "Method": {},
  "HTTPVersion": {},
  "Headers": {}
}
```

Part of the response from <a>GetSampledRequests</a>. This is a complex type that appears as <code>Request</code> in the response syntax. <code>HTTPRequest</code> contains information about one of the web requests.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientIP|object|false|none|none|
|Country|object|false|none|none|
|URI|object|false|none|none|
|Method|object|false|none|none|
|HTTPVersion|object|false|none|none|
|Headers|object|false|none|none|

<h2 id="tocS_HeaderNames">HeaderNames</h2>
<!-- backwards compatibility -->
<a id="schemaheadernames"></a>
<a id="schema_HeaderNames"></a>
<a id="tocSheadernames"></a>
<a id="tocsheadernames"></a>

```json
[
  "string"
]
```

<h2 id="tocS_HeaderMatchPattern">HeaderMatchPattern</h2>
<!-- backwards compatibility -->
<a id="schemaheadermatchpattern"></a>
<a id="schema_HeaderMatchPattern"></a>
<a id="tocSheadermatchpattern"></a>
<a id="tocsheadermatchpattern"></a>

```json
{
  "All": {},
  "IncludedHeaders": {},
  "ExcludedHeaders": {}
}
```

<p>The filter to use to identify the subset of headers to inspect in a web request. </p> <p>You must specify exactly one setting: either <code>All</code>, <code>IncludedHeaders</code>, or <code>ExcludedHeaders</code>.</p> <p>Example JSON: <code>"MatchPattern": { "ExcludedHeaders": {"KeyToExclude1", "KeyToExclude2"} }</code> </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|All|object|false|none|none|
|IncludedHeaders|object|false|none|none|
|ExcludedHeaders|object|false|none|none|

<h2 id="tocS_IPAddress">IPAddress</h2>
<!-- backwards compatibility -->
<a id="schemaipaddress"></a>
<a id="schema_IPAddress"></a>
<a id="tocSipaddress"></a>
<a id="tocsipaddress"></a>

```json
"string"
```

<h2 id="tocS_IPSetForwardedIPConfig">IPSetForwardedIPConfig</h2>
<!-- backwards compatibility -->
<a id="schemaipsetforwardedipconfig"></a>
<a id="schema_IPSetForwardedIPConfig"></a>
<a id="tocSipsetforwardedipconfig"></a>
<a id="tocsipsetforwardedipconfig"></a>

```json
{
  "HeaderName": {},
  "FallbackBehavior": {},
  "Position": {}
}
```

<p>The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name. </p> <note> <p>If the specified header isn't present in the request, WAF doesn't apply the rule to the web request at all.</p> </note> <p>This configuration is used only for <a>IPSetReferenceStatement</a>. For <a>GeoMatchStatement</a> and <a>RateBasedStatement</a>, use <a>ForwardedIPConfig</a> instead. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HeaderName|object|true|none|none|
|FallbackBehavior|object|true|none|none|
|Position|object|true|none|none|

<h2 id="tocS_IPSetReferenceStatement">IPSetReferenceStatement</h2>
<!-- backwards compatibility -->
<a id="schemaipsetreferencestatement"></a>
<a id="schema_IPSetReferenceStatement"></a>
<a id="tocSipsetreferencestatement"></a>
<a id="tocsipsetreferencestatement"></a>

```json
{
  "ARN": {},
  "IPSetForwardedIPConfig": {
    "HeaderName": {},
    "FallbackBehavior": {},
    "Position": {}
  }
}
```

<p>A rule statement used to detect web requests coming from particular IP addresses or address ranges. To use this, create an <a>IPSet</a> that specifies the addresses you want to detect, then use the ARN of that set in this statement. To create an IP set, see <a>CreateIPSet</a>.</p> <p>Each IP set rule statement references an IP set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, WAF automatically updates all rules that reference it.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ARN|object|true|none|none|
|IPSetForwardedIPConfig|object|false|none|none|

<h2 id="tocS_IPSetSummaries">IPSetSummaries</h2>
<!-- backwards compatibility -->
<a id="schemaipsetsummaries"></a>
<a id="schema_IPSetSummaries"></a>
<a id="tocSipsetsummaries"></a>
<a id="tocsipsetsummaries"></a>

```json
[
  {
    "Name": {},
    "Id": {},
    "Description": {},
    "LockToken": {},
    "ARN": {}
  }
]
```

<h2 id="tocS_TimeWindowSecond">TimeWindowSecond</h2>
<!-- backwards compatibility -->
<a id="schematimewindowsecond"></a>
<a id="schema_TimeWindowSecond"></a>
<a id="tocStimewindowsecond"></a>
<a id="tocstimewindowsecond"></a>

```json
60
```

<h2 id="tocS_JsonMatchPattern">JsonMatchPattern</h2>
<!-- backwards compatibility -->
<a id="schemajsonmatchpattern"></a>
<a id="schema_JsonMatchPattern"></a>
<a id="tocSjsonmatchpattern"></a>
<a id="tocsjsonmatchpattern"></a>

```json
{
  "All": {},
  "IncludedPaths": {}
}
```

The patterns to look for in the JSON body. WAF inspects the results of these pattern matches against the rule inspection criteria. This is used with the <a>FieldToMatch</a> option <code>JsonBody</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|All|object|false|none|none|
|IncludedPaths|object|false|none|none|

<h2 id="tocS_JsonMatchScope">JsonMatchScope</h2>
<!-- backwards compatibility -->
<a id="schemajsonmatchscope"></a>
<a id="schema_JsonMatchScope"></a>
<a id="tocSjsonmatchscope"></a>
<a id="tocsjsonmatchscope"></a>

```json
"ALL"
```

<h2 id="tocS_JsonPointerPaths">JsonPointerPaths</h2>
<!-- backwards compatibility -->
<a id="schemajsonpointerpaths"></a>
<a id="schema_JsonPointerPaths"></a>
<a id="tocSjsonpointerpaths"></a>
<a id="tocsjsonpointerpaths"></a>

```json
[
  "string"
]
```

<h2 id="tocS_JsonPointerPath">JsonPointerPath</h2>
<!-- backwards compatibility -->
<a id="schemajsonpointerpath"></a>
<a id="schema_JsonPointerPath"></a>
<a id="tocSjsonpointerpath"></a>
<a id="tocsjsonpointerpath"></a>

```json
"string"
```

<h2 id="tocS_Label">Label</h2>
<!-- backwards compatibility -->
<a id="schemalabel"></a>
<a id="schema_Label"></a>
<a id="tocSlabel"></a>
<a id="tocslabel"></a>

```json
{
  "Name": {}
}
```

A single label container. This is used as an element of a label array in multiple contexts, for example, in <code>RuleLabels</code> inside a <a>Rule</a> and in <code>Labels</code> inside a <a>SampledHTTPRequest</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_LabelMatchKey">LabelMatchKey</h2>
<!-- backwards compatibility -->
<a id="schemalabelmatchkey"></a>
<a id="schema_LabelMatchKey"></a>
<a id="tocSlabelmatchkey"></a>
<a id="tocslabelmatchkey"></a>

```json
"string"
```

<h2 id="tocS_LabelMatchScope">LabelMatchScope</h2>
<!-- backwards compatibility -->
<a id="schemalabelmatchscope"></a>
<a id="schema_LabelMatchScope"></a>
<a id="tocSlabelmatchscope"></a>
<a id="tocslabelmatchscope"></a>

```json
"LABEL"
```

<h2 id="tocS_LabelMatchStatement">LabelMatchStatement</h2>
<!-- backwards compatibility -->
<a id="schemalabelmatchstatement"></a>
<a id="schema_LabelMatchStatement"></a>
<a id="tocSlabelmatchstatement"></a>
<a id="tocslabelmatchstatement"></a>

```json
{
  "Scope": {},
  "Key": {}
}
```

<p>A rule statement to match against labels that have been added to the web request by rules that have already run in the web ACL. </p> <p>The label match statement provides the label or namespace string to search for. The label string can represent a part or all of the fully qualified label name that had been added to the web request. Fully qualified labels have a prefix, optional namespaces, and label name. The prefix identifies the rule group or web ACL context of the rule that added the label. If you do not provide the fully qualified name in your label match string, WAF performs the search for labels that were added in the same context as the label match statement. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Scope|object|true|none|none|
|Key|object|true|none|none|

<h2 id="tocS_LabelSummary">LabelSummary</h2>
<!-- backwards compatibility -->
<a id="schemalabelsummary"></a>
<a id="schema_LabelSummary"></a>
<a id="tocSlabelsummary"></a>
<a id="tocslabelsummary"></a>

```json
{
  "Name": {}
}
```

<p>List of labels used by one or more of the rules of a <a>RuleGroup</a>. This summary object is used for the following rule group lists: </p> <ul> <li> <p> <code>AvailableLabels</code> - Labels that rules add to matching requests. These labels are defined in the <code>RuleLabels</code> for a <a>Rule</a>. </p> </li> <li> <p> <code>ConsumedLabels</code> - Labels that rules match against. These labels are defined in a <code>LabelMatchStatement</code> specification, in the <a>Statement</a> definition of a rule. </p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|

<h2 id="tocS_Labels">Labels</h2>
<!-- backwards compatibility -->
<a id="schemalabels"></a>
<a id="schema_Labels"></a>
<a id="tocSlabels"></a>
<a id="tocslabels"></a>

```json
[
  {
    "Name": {}
  }
]
```

<h2 id="tocS_NextMarker">NextMarker</h2>
<!-- backwards compatibility -->
<a id="schemanextmarker"></a>
<a id="schema_NextMarker"></a>
<a id="tocSnextmarker"></a>
<a id="tocsnextmarker"></a>

```json
"string"
```

<h2 id="tocS_PaginationLimit">PaginationLimit</h2>
<!-- backwards compatibility -->
<a id="schemapaginationlimit"></a>
<a id="schema_PaginationLimit"></a>
<a id="tocSpaginationlimit"></a>
<a id="tocspaginationlimit"></a>

```json
1
```

<h2 id="tocS_ManagedRuleGroupVersions">ManagedRuleGroupVersions</h2>
<!-- backwards compatibility -->
<a id="schemamanagedrulegroupversions"></a>
<a id="schema_ManagedRuleGroupVersions"></a>
<a id="tocSmanagedrulegroupversions"></a>
<a id="tocsmanagedrulegroupversions"></a>

```json
[
  {
    "Name": {},
    "LastUpdateTimestamp": {}
  }
]
```

<h2 id="tocS_ManagedRuleGroupSummaries">ManagedRuleGroupSummaries</h2>
<!-- backwards compatibility -->
<a id="schemamanagedrulegroupsummaries"></a>
<a id="schema_ManagedRuleGroupSummaries"></a>
<a id="tocSmanagedrulegroupsummaries"></a>
<a id="tocsmanagedrulegroupsummaries"></a>

```json
[
  {
    "VendorName": {},
    "Name": {},
    "VersioningSupported": {},
    "Description": {}
  }
]
```

<h2 id="tocS_LoggingConfigurations">LoggingConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemaloggingconfigurations"></a>
<a id="schema_LoggingConfigurations"></a>
<a id="tocSloggingconfigurations"></a>
<a id="tocsloggingconfigurations"></a>

```json
[
  {
    "ResourceArn": {},
    "LogDestinationConfigs": {},
    "RedactedFields": {},
    "ManagedByFirewallManager": {},
    "LoggingFilter": {
      "Filters": {},
      "DefaultBehavior": {}
    }
  }
]
```

<h2 id="tocS_ManagedRuleSetSummaries">ManagedRuleSetSummaries</h2>
<!-- backwards compatibility -->
<a id="schemamanagedrulesetsummaries"></a>
<a id="schema_ManagedRuleSetSummaries"></a>
<a id="tocSmanagedrulesetsummaries"></a>
<a id="tocsmanagedrulesetsummaries"></a>

```json
[
  {
    "Name": {},
    "Id": {},
    "Description": {},
    "LockToken": {},
    "ARN": {},
    "LabelNamespace": {}
  }
]
```

<h2 id="tocS_ReleaseSummaries">ReleaseSummaries</h2>
<!-- backwards compatibility -->
<a id="schemareleasesummaries"></a>
<a id="schema_ReleaseSummaries"></a>
<a id="tocSreleasesummaries"></a>
<a id="tocsreleasesummaries"></a>

```json
[
  {
    "ReleaseVersion": {},
    "Timestamp": {}
  }
]
```

<h2 id="tocS_RegexPatternSetSummaries">RegexPatternSetSummaries</h2>
<!-- backwards compatibility -->
<a id="schemaregexpatternsetsummaries"></a>
<a id="schema_RegexPatternSetSummaries"></a>
<a id="tocSregexpatternsetsummaries"></a>
<a id="tocsregexpatternsetsummaries"></a>

```json
[
  {
    "Name": {},
    "Id": {},
    "Description": {},
    "LockToken": {},
    "ARN": {}
  }
]
```

<h2 id="tocS_ResourceType">ResourceType</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetype"></a>
<a id="schema_ResourceType"></a>
<a id="tocSresourcetype"></a>
<a id="tocsresourcetype"></a>

```json
"APPLICATION_LOAD_BALANCER"
```

<h2 id="tocS_ResourceArns">ResourceArns</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearns"></a>
<a id="schema_ResourceArns"></a>
<a id="tocSresourcearns"></a>
<a id="tocsresourcearns"></a>

```json
[
  "stringstringstringst"
]
```

<h2 id="tocS_RuleGroupSummaries">RuleGroupSummaries</h2>
<!-- backwards compatibility -->
<a id="schemarulegroupsummaries"></a>
<a id="schema_RuleGroupSummaries"></a>
<a id="tocSrulegroupsummaries"></a>
<a id="tocsrulegroupsummaries"></a>

```json
[
  {
    "Name": {},
    "Id": {},
    "Description": {},
    "LockToken": {},
    "ARN": {}
  }
]
```

<h2 id="tocS_TagInfoForResource">TagInfoForResource</h2>
<!-- backwards compatibility -->
<a id="schemataginfoforresource"></a>
<a id="schema_TagInfoForResource"></a>
<a id="tocStaginfoforresource"></a>
<a id="tocstaginfoforresource"></a>

```json
{
  "ResourceARN": {},
  "TagList": {}
}
```

<p>The collection of tagging definitions for an Amazon Web Services resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing or other management. Typically, the tag key represents a category, such as "environment", and the tag value represents a specific value within that category, such as "test," "development," or "production". Or you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.</p> <p>You can tag the Amazon Web Services resources that you manage through WAF: web ACLs, rule groups, IP sets, and regex pattern sets. You can't manage or view tags through the WAF console. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|false|none|none|
|TagList|object|false|none|none|

<h2 id="tocS_WebACLSummaries">WebACLSummaries</h2>
<!-- backwards compatibility -->
<a id="schemawebaclsummaries"></a>
<a id="schema_WebACLSummaries"></a>
<a id="tocSwebaclsummaries"></a>
<a id="tocswebaclsummaries"></a>

```json
[
  {
    "Name": {},
    "Id": {},
    "Description": {},
    "LockToken": {},
    "ARN": {}
  }
]
```

<h2 id="tocS_LogDestinationConfigs">LogDestinationConfigs</h2>
<!-- backwards compatibility -->
<a id="schemalogdestinationconfigs"></a>
<a id="schema_LogDestinationConfigs"></a>
<a id="tocSlogdestinationconfigs"></a>
<a id="tocslogdestinationconfigs"></a>

```json
[
  "stringstringstringst"
]
```

<h2 id="tocS_RedactedFields">RedactedFields</h2>
<!-- backwards compatibility -->
<a id="schemaredactedfields"></a>
<a id="schema_RedactedFields"></a>
<a id="tocSredactedfields"></a>
<a id="tocsredactedfields"></a>

```json
[
  {
    "SingleHeader": {
      "Name": {}
    },
    "SingleQueryArgument": {
      "Name": {}
    },
    "AllQueryArguments": {},
    "UriPath": {},
    "QueryString": {},
    "Body": {
      "OversizeHandling": {}
    },
    "Method": {},
    "JsonBody": {
      "MatchPattern": {
        "All": {},
        "IncludedPaths": {}
      },
      "MatchScope": {},
      "InvalidFallbackBehavior": {},
      "OversizeHandling": {}
    },
    "Headers": {
      "MatchPattern": {
        "All": {},
        "IncludedHeaders": {},
        "ExcludedHeaders": {}
      },
      "MatchScope": {},
      "OversizeHandling": {}
    },
    "Cookies": {
      "MatchPattern": {
        "All": {},
        "IncludedCookies": {},
        "ExcludedCookies": {}
      },
      "MatchScope": {},
      "OversizeHandling": {}
    }
  }
]
```

<h2 id="tocS_LoggingFilter">LoggingFilter</h2>
<!-- backwards compatibility -->
<a id="schemaloggingfilter"></a>
<a id="schema_LoggingFilter"></a>
<a id="tocSloggingfilter"></a>
<a id="tocsloggingfilter"></a>

```json
{
  "Filters": {},
  "DefaultBehavior": {}
}
```

<p>Filtering that specifies which web requests are kept in the logs and which are dropped, defined for a web ACL's <a>LoggingConfiguration</a>. </p> <p>You can filter on the rule action and on the web request labels that were applied by matching rules during web ACL evaluation. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|true|none|none|
|DefaultBehavior|object|true|none|none|

<h2 id="tocS_LoginPathString">LoginPathString</h2>
<!-- backwards compatibility -->
<a id="schemaloginpathstring"></a>
<a id="schema_LoginPathString"></a>
<a id="tocSloginpathstring"></a>
<a id="tocsloginpathstring"></a>

```json
"string"
```

<h2 id="tocS_PayloadType">PayloadType</h2>
<!-- backwards compatibility -->
<a id="schemapayloadtype"></a>
<a id="schema_PayloadType"></a>
<a id="tocSpayloadtype"></a>
<a id="tocspayloadtype"></a>

```json
"JSON"
```

<h2 id="tocS_UsernameField">UsernameField</h2>
<!-- backwards compatibility -->
<a id="schemausernamefield"></a>
<a id="schema_UsernameField"></a>
<a id="tocSusernamefield"></a>
<a id="tocsusernamefield"></a>

```json
{
  "Identifier": {}
}
```

Details about your login page username field for request inspection, used in the <code>AWSManagedRulesATPRuleSet</code> <code>RequestInspection</code> configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Identifier|object|true|none|none|

<h2 id="tocS_PasswordField">PasswordField</h2>
<!-- backwards compatibility -->
<a id="schemapasswordfield"></a>
<a id="schema_PasswordField"></a>
<a id="tocSpasswordfield"></a>
<a id="tocspasswordfield"></a>

```json
{
  "Identifier": {}
}
```

Details about your login page password field for request inspection, used in the <code>AWSManagedRulesATPRuleSet</code> <code>RequestInspection</code> configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Identifier|object|true|none|none|

<h2 id="tocS_ManagedRuleGroupConfig">ManagedRuleGroupConfig</h2>
<!-- backwards compatibility -->
<a id="schemamanagedrulegroupconfig"></a>
<a id="schema_ManagedRuleGroupConfig"></a>
<a id="tocSmanagedrulegroupconfig"></a>
<a id="tocsmanagedrulegroupconfig"></a>

```json
{
  "LoginPath": {},
  "PayloadType": {},
  "UsernameField": {
    "Identifier": {}
  },
  "PasswordField": {
    "Identifier": {}
  },
  "AWSManagedRulesBotControlRuleSet": {
    "InspectionLevel": {}
  },
  "AWSManagedRulesATPRuleSet": {
    "LoginPath": {},
    "RequestInspection": {
      "PayloadType": {},
      "UsernameField": {
        "Identifier": {}
      },
      "PasswordField": {
        "Identifier": {}
      }
    },
    "ResponseInspection": {
      "StatusCode": {
        "SuccessCodes": {},
        "FailureCodes": {}
      },
      "Header": {
        "Name": {},
        "SuccessValues": {},
        "FailureValues": {}
      },
      "BodyContains": {
        "SuccessStrings": {},
        "FailureStrings": {}
      },
      "Json": {
        "Identifier": {},
        "SuccessValues": {},
        "FailureValues": {}
      }
    }
  }
}
```

<p>Additional information that's used by a managed rule group. Many managed rule groups don't require this.</p> <p>Use the <code>AWSManagedRulesATPRuleSet</code> configuration object for the account takeover prevention managed rule group, to provide information such as the sign-in page of your application and the type of content to accept or reject from the client. </p> <p>Use the <code>AWSManagedRulesBotControlRuleSet</code> configuration object to configure the protection level that you want the Bot Control rule group to use. </p> <p>For example specifications, see the examples section of <a>CreateWebACL</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoginPath|object|false|none|none|
|PayloadType|object|false|none|none|
|UsernameField|object|false|none|none|
|PasswordField|object|false|none|none|
|AWSManagedRulesBotControlRuleSet|object|false|none|none|
|AWSManagedRulesATPRuleSet|object|false|none|none|

<h2 id="tocS_ManagedRuleGroupConfigs">ManagedRuleGroupConfigs</h2>
<!-- backwards compatibility -->
<a id="schemamanagedrulegroupconfigs"></a>
<a id="schema_ManagedRuleGroupConfigs"></a>
<a id="tocSmanagedrulegroupconfigs"></a>
<a id="tocsmanagedrulegroupconfigs"></a>

```json
[
  {
    "LoginPath": {},
    "PayloadType": {},
    "UsernameField": {
      "Identifier": {}
    },
    "PasswordField": {
      "Identifier": {}
    },
    "AWSManagedRulesBotControlRuleSet": {
      "InspectionLevel": {}
    },
    "AWSManagedRulesATPRuleSet": {
      "LoginPath": {},
      "RequestInspection": {
        "PayloadType": {},
        "UsernameField": {
          "Identifier": {}
        },
        "PasswordField": {
          "Identifier": {}
        }
      },
      "ResponseInspection": {
        "StatusCode": {
          "SuccessCodes": {},
          "FailureCodes": {}
        },
        "Header": {
          "Name": {},
          "SuccessValues": {},
          "FailureValues": {}
        },
        "BodyContains": {
          "SuccessStrings": {},
          "FailureStrings": {}
        },
        "Json": {
          "Identifier": {},
          "SuccessValues": {},
          "FailureValues": {}
        }
      }
    }
  }
]
```

<h2 id="tocS_Statement">Statement</h2>
<!-- backwards compatibility -->
<a id="schemastatement"></a>
<a id="schema_Statement"></a>
<a id="tocSstatement"></a>
<a id="tocsstatement"></a>

```json
{
  "ByteMatchStatement": {
    "SearchString": {},
    "FieldToMatch": {
      "SingleHeader": {
        "Name": {}
      },
      "SingleQueryArgument": {
        "Name": {}
      },
      "AllQueryArguments": {},
      "UriPath": {},
      "QueryString": {},
      "Body": {
        "OversizeHandling": {}
      },
      "Method": {},
      "JsonBody": {
        "MatchPattern": {
          "All": {},
          "IncludedPaths": {}
        },
        "MatchScope": {},
        "InvalidFallbackBehavior": {},
        "OversizeHandling": {}
      },
      "Headers": {
        "MatchPattern": {
          "All": {},
          "IncludedHeaders": {},
          "ExcludedHeaders": {}
        },
        "MatchScope": {},
        "OversizeHandling": {}
      },
      "Cookies": {
        "MatchPattern": {
          "All": {},
          "IncludedCookies": {},
          "ExcludedCookies": {}
        },
        "MatchScope": {},
        "OversizeHandling": {}
      }
    },
    "TextTransformations": {},
    "PositionalConstraint": {}
  },
  "SqliMatchStatement": {
    "FieldToMatch": {
      "SingleHeader": {
        "Name": {}
      },
      "SingleQueryArgument": {
        "Name": {}
      },
      "AllQueryArguments": {},
      "UriPath": {},
      "QueryString": {},
      "Body": {
        "OversizeHandling": {}
      },
      "Method": {},
      "JsonBody": {
        "MatchPattern": {
          "All": {},
          "IncludedPaths": {}
        },
        "MatchScope": {},
        "InvalidFallbackBehavior": {},
        "OversizeHandling": {}
      },
      "Headers": {
        "MatchPattern": {
          "All": {},
          "IncludedHeaders": {},
          "ExcludedHeaders": {}
        },
        "MatchScope": {},
        "OversizeHandling": {}
      },
      "Cookies": {
        "MatchPattern": {
          "All": {},
          "IncludedCookies": {},
          "ExcludedCookies": {}
        },
        "MatchScope": {},
        "OversizeHandling": {}
      }
    },
    "TextTransformations": {},
    "SensitivityLevel": {}
  },
  "XssMatchStatement": {
    "FieldToMatch": {
      "SingleHeader": {
        "Name": {}
      },
      "SingleQueryArgument": {
        "Name": {}
      },
      "AllQueryArguments": {},
      "UriPath": {},
      "QueryString": {},
      "Body": {
        "OversizeHandling": {}
      },
      "Method": {},
      "JsonBody": {
        "MatchPattern": {
          "All": {},
          "IncludedPaths": {}
        },
        "MatchScope": {},
        "InvalidFallbackBehavior": {},
        "OversizeHandling": {}
      },
      "Headers": {
        "MatchPattern": {
          "All": {},
          "IncludedHeaders": {},
          "ExcludedHeaders": {}
        },
        "MatchScope": {},
        "OversizeHandling": {}
      },
      "Cookies": {
        "MatchPattern": {
          "All": {},
          "IncludedCookies": {},
          "ExcludedCookies": {}
        },
        "MatchScope": {},
        "OversizeHandling": {}
      }
    },
    "TextTransformations": {}
  },
  "SizeConstraintStatement": {
    "FieldToMatch": {
      "SingleHeader": {
        "Name": {}
      },
      "SingleQueryArgument": {
        "Name": {}
      },
      "AllQueryArguments": {},
      "UriPath": {},
      "QueryString": {},
      "Body": {
        "OversizeHandling": {}
      },
      "Method": {},
      "JsonBody": {
        "MatchPattern": {
          "All": {},
          "IncludedPaths": {}
        },
        "MatchScope": {},
        "InvalidFallbackBehavior": {},
        "OversizeHandling": {}
      },
      "Headers": {
        "MatchPattern": {
          "All": {},
          "IncludedHeaders": {},
          "ExcludedHeaders": {}
        },
        "MatchScope": {},
        "OversizeHandling": {}
      },
      "Cookies": {
        "MatchPattern": {
          "All": {},
          "IncludedCookies": {},
          "ExcludedCookies": {}
        },
        "MatchScope": {},
        "OversizeHandling": {}
      }
    },
    "ComparisonOperator": {},
    "Size": {},
    "TextTransformations": {}
  },
  "GeoMatchStatement": {
    "CountryCodes": {},
    "ForwardedIPConfig": {
      "HeaderName": {},
      "FallbackBehavior": {}
    }
  },
  "RuleGroupReferenceStatement": {
    "ARN": {},
    "ExcludedRules": {},
    "RuleActionOverrides": {}
  },
  "IPSetReferenceStatement": {
    "ARN": {},
    "IPSetForwardedIPConfig": {
      "HeaderName": {},
      "FallbackBehavior": {},
      "Position": {}
    }
  },
  "RegexPatternSetReferenceStatement": {
    "ARN": {},
    "FieldToMatch": {
      "SingleHeader": {
        "Name": {}
      },
      "SingleQueryArgument": {
        "Name": {}
      },
      "AllQueryArguments": {},
      "UriPath": {},
      "QueryString": {},
      "Body": {
        "OversizeHandling": {}
      },
      "Method": {},
      "JsonBody": {
        "MatchPattern": {
          "All": {},
          "IncludedPaths": {}
        },
        "MatchScope": {},
        "InvalidFallbackBehavior": {},
        "OversizeHandling": {}
      },
      "Headers": {
        "MatchPattern": {
          "All": {},
          "IncludedHeaders": {},
          "ExcludedHeaders": {}
        },
        "MatchScope": {},
        "OversizeHandling": {}
      },
      "Cookies": {
        "MatchPattern": {
          "All": {},
          "IncludedCookies": {},
          "ExcludedCookies": {}
        },
        "MatchScope": {},
        "OversizeHandling": {}
      }
    },
    "TextTransformations": {}
  },
  "RateBasedStatement": {
    "Limit": {},
    "AggregateKeyType": {},
    "ScopeDownStatement": {},
    "ForwardedIPConfig": {
      "HeaderName": {},
      "FallbackBehavior": {}
    }
  },
  "AndStatement": {
    "Statements": {}
  },
  "OrStatement": {
    "Statements": {}
  },
  "NotStatement": {
    "Statement": {}
  },
  "ManagedRuleGroupStatement": {
    "VendorName": {},
    "Name": {},
    "Version": {},
    "ExcludedRules": {},
    "ScopeDownStatement": {},
    "ManagedRuleGroupConfigs": {},
    "RuleActionOverrides": {}
  },
  "LabelMatchStatement": {
    "Scope": {},
    "Key": {}
  },
  "RegexMatchStatement": {
    "RegexString": {},
    "FieldToMatch": {
      "SingleHeader": {
        "Name": {}
      },
      "SingleQueryArgument": {
        "Name": {}
      },
      "AllQueryArguments": {},
      "UriPath": {},
      "QueryString": {},
      "Body": {
        "OversizeHandling": {}
      },
      "Method": {},
      "JsonBody": {
        "MatchPattern": {
          "All": {},
          "IncludedPaths": {}
        },
        "MatchScope": {},
        "InvalidFallbackBehavior": {},
        "OversizeHandling": {}
      },
      "Headers": {
        "MatchPattern": {
          "All": {},
          "IncludedHeaders": {},
          "ExcludedHeaders": {}
        },
        "MatchScope": {},
        "OversizeHandling": {}
      },
      "Cookies": {
        "MatchPattern": {
          "All": {},
          "IncludedCookies": {},
          "ExcludedCookies": {}
        },
        "MatchScope": {},
        "OversizeHandling": {}
      }
    },
    "TextTransformations": {}
  }
}
```

<p>The processing guidance for a <a>Rule</a>, used by WAF to determine whether a web request matches the rule. </p> <p>For example specifications, see the examples section of <a>CreateWebACL</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ByteMatchStatement|object|false|none|none|
|SqliMatchStatement|object|false|none|none|
|XssMatchStatement|object|false|none|none|
|SizeConstraintStatement|object|false|none|none|
|GeoMatchStatement|object|false|none|none|
|RuleGroupReferenceStatement|object|false|none|none|
|IPSetReferenceStatement|object|false|none|none|
|RegexPatternSetReferenceStatement|object|false|none|none|
|RateBasedStatement|object|false|none|none|
|AndStatement|object|false|none|none|
|OrStatement|object|false|none|none|
|NotStatement|object|false|none|none|
|ManagedRuleGroupStatement|object|false|none|none|
|LabelMatchStatement|object|false|none|none|
|RegexMatchStatement|object|false|none|none|

<h2 id="tocS_RuleActionOverrides">RuleActionOverrides</h2>
<!-- backwards compatibility -->
<a id="schemaruleactionoverrides"></a>
<a id="schema_RuleActionOverrides"></a>
<a id="tocSruleactionoverrides"></a>
<a id="tocsruleactionoverrides"></a>

```json
[
  {
    "Name": {},
    "ActionToUse": {
      "Block": {
        "CustomResponse": {
          "ResponseCode": {},
          "CustomResponseBodyKey": {},
          "ResponseHeaders": {}
        }
      },
      "Allow": {
        "CustomRequestHandling": {
          "InsertHeaders": {}
        }
      },
      "Count": {
        "CustomRequestHandling": {
          "InsertHeaders": {}
        }
      },
      "Captcha": {
        "CustomRequestHandling": {
          "InsertHeaders": {}
        }
      },
      "Challenge": {
        "CustomRequestHandling": {
          "InsertHeaders": {}
        }
      }
    }
  }
]
```

<h2 id="tocS_ManagedRuleGroupSummary">ManagedRuleGroupSummary</h2>
<!-- backwards compatibility -->
<a id="schemamanagedrulegroupsummary"></a>
<a id="schema_ManagedRuleGroupSummary"></a>
<a id="tocSmanagedrulegroupsummary"></a>
<a id="tocsmanagedrulegroupsummary"></a>

```json
{
  "VendorName": {},
  "Name": {},
  "VersioningSupported": {},
  "Description": {}
}
```

High-level information about a managed rule group, returned by <a>ListAvailableManagedRuleGroups</a>. This provides information like the name and vendor name, that you provide when you add a <a>ManagedRuleGroupStatement</a> to a web ACL. Managed rule groups include Amazon Web Services Managed Rules rule groups, which are free of charge to WAF customers, and Amazon Web Services Marketplace managed rule groups, which you can subscribe to through Amazon Web Services Marketplace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VendorName|object|false|none|none|
|Name|object|false|none|none|
|VersioningSupported|object|false|none|none|
|Description|object|false|none|none|

<h2 id="tocS_ManagedRuleGroupVersion">ManagedRuleGroupVersion</h2>
<!-- backwards compatibility -->
<a id="schemamanagedrulegroupversion"></a>
<a id="schema_ManagedRuleGroupVersion"></a>
<a id="tocSmanagedrulegroupversion"></a>
<a id="tocsmanagedrulegroupversion"></a>

```json
{
  "Name": {},
  "LastUpdateTimestamp": {}
}
```

Describes a single version of a managed rule group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|LastUpdateTimestamp|object|false|none|none|

<h2 id="tocS_PublishedVersions">PublishedVersions</h2>
<!-- backwards compatibility -->
<a id="schemapublishedversions"></a>
<a id="schema_PublishedVersions"></a>
<a id="tocSpublishedversions"></a>
<a id="tocspublishedversions"></a>

```json
{
  "property1": {
    "AssociatedRuleGroupArn": {},
    "Capacity": {},
    "ForecastedLifetime": {},
    "PublishTimestamp": {},
    "LastUpdateTimestamp": {},
    "ExpiryTimestamp": {}
  },
  "property2": {
    "AssociatedRuleGroupArn": {},
    "Capacity": {},
    "ForecastedLifetime": {},
    "PublishTimestamp": {},
    "LastUpdateTimestamp": {},
    "ExpiryTimestamp": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ManagedRuleSetVersion](#schemamanagedrulesetversion)|false|none|<p>Information for a single version of a managed rule set. </p> <note> <p>This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. </p> <p>Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are <code>ListManagedRuleSets</code>, <code>GetManagedRuleSet</code>, <code>PutManagedRuleSetVersions</code>, and <code>UpdateManagedRuleSetVersionExpiryDate</code>.</p> </note>|

<h2 id="tocS_ManagedRuleSetSummary">ManagedRuleSetSummary</h2>
<!-- backwards compatibility -->
<a id="schemamanagedrulesetsummary"></a>
<a id="schema_ManagedRuleSetSummary"></a>
<a id="tocSmanagedrulesetsummary"></a>
<a id="tocsmanagedrulesetsummary"></a>

```json
{
  "Name": {},
  "Id": {},
  "Description": {},
  "LockToken": {},
  "ARN": {},
  "LabelNamespace": {}
}
```

<p>High-level information for a managed rule set. </p> <note> <p>This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. </p> <p>Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are <code>ListManagedRuleSets</code>, <code>GetManagedRuleSet</code>, <code>PutManagedRuleSetVersions</code>, and <code>UpdateManagedRuleSetVersionExpiryDate</code>.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Id|object|false|none|none|
|Description|object|false|none|none|
|LockToken|object|false|none|none|
|ARN|object|false|none|none|
|LabelNamespace|object|false|none|none|

<h2 id="tocS_TimeWindowDay">TimeWindowDay</h2>
<!-- backwards compatibility -->
<a id="schematimewindowday"></a>
<a id="schema_TimeWindowDay"></a>
<a id="tocStimewindowday"></a>
<a id="tocstimewindowday"></a>

```json
1
```

<h2 id="tocS_ManagedRuleSetVersion">ManagedRuleSetVersion</h2>
<!-- backwards compatibility -->
<a id="schemamanagedrulesetversion"></a>
<a id="schema_ManagedRuleSetVersion"></a>
<a id="tocSmanagedrulesetversion"></a>
<a id="tocsmanagedrulesetversion"></a>

```json
{
  "AssociatedRuleGroupArn": {},
  "Capacity": {},
  "ForecastedLifetime": {},
  "PublishTimestamp": {},
  "LastUpdateTimestamp": {},
  "ExpiryTimestamp": {}
}
```

<p>Information for a single version of a managed rule set. </p> <note> <p>This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. </p> <p>Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are <code>ListManagedRuleSets</code>, <code>GetManagedRuleSet</code>, <code>PutManagedRuleSetVersions</code>, and <code>UpdateManagedRuleSetVersionExpiryDate</code>.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssociatedRuleGroupArn|object|false|none|none|
|Capacity|object|false|none|none|
|ForecastedLifetime|object|false|none|none|
|PublishTimestamp|object|false|none|none|
|LastUpdateTimestamp|object|false|none|none|
|ExpiryTimestamp|object|false|none|none|

<h2 id="tocS_ReleaseNotes">ReleaseNotes</h2>
<!-- backwards compatibility -->
<a id="schemareleasenotes"></a>
<a id="schema_ReleaseNotes"></a>
<a id="tocSreleasenotes"></a>
<a id="tocsreleasenotes"></a>

```json
"string"
```

<h2 id="tocS_NoneAction">NoneAction</h2>
<!-- backwards compatibility -->
<a id="schemanoneaction"></a>
<a id="schema_NoneAction"></a>
<a id="tocSnoneaction"></a>
<a id="tocsnoneaction"></a>

```json
{}
```

<p>Specifies that WAF should do nothing. This is used for the <code>OverrideAction</code> setting on a <a>Rule</a> when the rule uses a rule group reference statement. </p> <p>This is used in the context of other settings, for example to specify values for <a>RuleAction</a> and web ACL <a>DefaultAction</a>. </p> <p>JSON specification: <code>"None": {}</code> </p>

<h2 id="tocS_NotStatement">NotStatement</h2>
<!-- backwards compatibility -->
<a id="schemanotstatement"></a>
<a id="schema_NotStatement"></a>
<a id="tocSnotstatement"></a>
<a id="tocsnotstatement"></a>

```json
{
  "Statement": {
    "ByteMatchStatement": {
      "SearchString": {},
      "FieldToMatch": {
        "SingleHeader": {
          "Name": {}
        },
        "SingleQueryArgument": {
          "Name": {}
        },
        "AllQueryArguments": {},
        "UriPath": {},
        "QueryString": {},
        "Body": {
          "OversizeHandling": {}
        },
        "Method": {},
        "JsonBody": {
          "MatchPattern": {
            "All": {},
            "IncludedPaths": {}
          },
          "MatchScope": {},
          "InvalidFallbackBehavior": {},
          "OversizeHandling": {}
        },
        "Headers": {
          "MatchPattern": {
            "All": {},
            "IncludedHeaders": {},
            "ExcludedHeaders": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        },
        "Cookies": {
          "MatchPattern": {
            "All": {},
            "IncludedCookies": {},
            "ExcludedCookies": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        }
      },
      "TextTransformations": {},
      "PositionalConstraint": {}
    },
    "SqliMatchStatement": {
      "FieldToMatch": {
        "SingleHeader": {
          "Name": {}
        },
        "SingleQueryArgument": {
          "Name": {}
        },
        "AllQueryArguments": {},
        "UriPath": {},
        "QueryString": {},
        "Body": {
          "OversizeHandling": {}
        },
        "Method": {},
        "JsonBody": {
          "MatchPattern": {
            "All": {},
            "IncludedPaths": {}
          },
          "MatchScope": {},
          "InvalidFallbackBehavior": {},
          "OversizeHandling": {}
        },
        "Headers": {
          "MatchPattern": {
            "All": {},
            "IncludedHeaders": {},
            "ExcludedHeaders": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        },
        "Cookies": {
          "MatchPattern": {
            "All": {},
            "IncludedCookies": {},
            "ExcludedCookies": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        }
      },
      "TextTransformations": {},
      "SensitivityLevel": {}
    },
    "XssMatchStatement": {
      "FieldToMatch": {
        "SingleHeader": {
          "Name": {}
        },
        "SingleQueryArgument": {
          "Name": {}
        },
        "AllQueryArguments": {},
        "UriPath": {},
        "QueryString": {},
        "Body": {
          "OversizeHandling": {}
        },
        "Method": {},
        "JsonBody": {
          "MatchPattern": {
            "All": {},
            "IncludedPaths": {}
          },
          "MatchScope": {},
          "InvalidFallbackBehavior": {},
          "OversizeHandling": {}
        },
        "Headers": {
          "MatchPattern": {
            "All": {},
            "IncludedHeaders": {},
            "ExcludedHeaders": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        },
        "Cookies": {
          "MatchPattern": {
            "All": {},
            "IncludedCookies": {},
            "ExcludedCookies": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        }
      },
      "TextTransformations": {}
    },
    "SizeConstraintStatement": {
      "FieldToMatch": {
        "SingleHeader": {
          "Name": {}
        },
        "SingleQueryArgument": {
          "Name": {}
        },
        "AllQueryArguments": {},
        "UriPath": {},
        "QueryString": {},
        "Body": {
          "OversizeHandling": {}
        },
        "Method": {},
        "JsonBody": {
          "MatchPattern": {
            "All": {},
            "IncludedPaths": {}
          },
          "MatchScope": {},
          "InvalidFallbackBehavior": {},
          "OversizeHandling": {}
        },
        "Headers": {
          "MatchPattern": {
            "All": {},
            "IncludedHeaders": {},
            "ExcludedHeaders": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        },
        "Cookies": {
          "MatchPattern": {
            "All": {},
            "IncludedCookies": {},
            "ExcludedCookies": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        }
      },
      "ComparisonOperator": {},
      "Size": {},
      "TextTransformations": {}
    },
    "GeoMatchStatement": {
      "CountryCodes": {},
      "ForwardedIPConfig": {
        "HeaderName": {},
        "FallbackBehavior": {}
      }
    },
    "RuleGroupReferenceStatement": {
      "ARN": {},
      "ExcludedRules": {},
      "RuleActionOverrides": {}
    },
    "IPSetReferenceStatement": {
      "ARN": {},
      "IPSetForwardedIPConfig": {
        "HeaderName": {},
        "FallbackBehavior": {},
        "Position": {}
      }
    },
    "RegexPatternSetReferenceStatement": {
      "ARN": {},
      "FieldToMatch": {
        "SingleHeader": {
          "Name": {}
        },
        "SingleQueryArgument": {
          "Name": {}
        },
        "AllQueryArguments": {},
        "UriPath": {},
        "QueryString": {},
        "Body": {
          "OversizeHandling": {}
        },
        "Method": {},
        "JsonBody": {
          "MatchPattern": {
            "All": {},
            "IncludedPaths": {}
          },
          "MatchScope": {},
          "InvalidFallbackBehavior": {},
          "OversizeHandling": {}
        },
        "Headers": {
          "MatchPattern": {
            "All": {},
            "IncludedHeaders": {},
            "ExcludedHeaders": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        },
        "Cookies": {
          "MatchPattern": {
            "All": {},
            "IncludedCookies": {},
            "ExcludedCookies": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        }
      },
      "TextTransformations": {}
    },
    "RateBasedStatement": {},
    "AndStatement": {},
    "OrStatement": {},
    "NotStatement": {},
    "ManagedRuleGroupStatement": {},
    "LabelMatchStatement": {
      "Scope": {},
      "Key": {}
    },
    "RegexMatchStatement": {
      "RegexString": {},
      "FieldToMatch": {
        "SingleHeader": {
          "Name": {}
        },
        "SingleQueryArgument": {
          "Name": {}
        },
        "AllQueryArguments": {},
        "UriPath": {},
        "QueryString": {},
        "Body": {
          "OversizeHandling": {}
        },
        "Method": {},
        "JsonBody": {
          "MatchPattern": {
            "All": {},
            "IncludedPaths": {}
          },
          "MatchScope": {},
          "InvalidFallbackBehavior": {},
          "OversizeHandling": {}
        },
        "Headers": {
          "MatchPattern": {
            "All": {},
            "IncludedHeaders": {},
            "ExcludedHeaders": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        },
        "Cookies": {
          "MatchPattern": {
            "All": {},
            "IncludedCookies": {},
            "ExcludedCookies": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        }
      },
      "TextTransformations": {}
    }
  }
}
```

A logical rule statement used to negate the results of another rule statement. You provide one <a>Statement</a> within the <code>NotStatement</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Statement|object|true|none|none|

<h2 id="tocS_OrStatement">OrStatement</h2>
<!-- backwards compatibility -->
<a id="schemaorstatement"></a>
<a id="schema_OrStatement"></a>
<a id="tocSorstatement"></a>
<a id="tocsorstatement"></a>

```json
{
  "Statements": {}
}
```

A logical rule statement used to combine other rule statements with OR logic. You provide more than one <a>Statement</a> within the <code>OrStatement</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Statements|object|true|none|none|

<h2 id="tocS_VersionsToPublish">VersionsToPublish</h2>
<!-- backwards compatibility -->
<a id="schemaversionstopublish"></a>
<a id="schema_VersionsToPublish"></a>
<a id="tocSversionstopublish"></a>
<a id="tocsversionstopublish"></a>

```json
{
  "property1": {
    "AssociatedRuleGroupArn": {},
    "ForecastedLifetime": {}
  },
  "property2": {
    "AssociatedRuleGroupArn": {},
    "ForecastedLifetime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[VersionToPublish](#schemaversiontopublish)|false|none|<p>A version of the named managed rule group, that the rule group's vendor publishes for use by customers. </p> <note> <p>This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. </p> <p>Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are <code>ListManagedRuleSets</code>, <code>GetManagedRuleSet</code>, <code>PutManagedRuleSetVersions</code>, and <code>UpdateManagedRuleSetVersionExpiryDate</code>.</p> </note>|

<h2 id="tocS_RateLimit">RateLimit</h2>
<!-- backwards compatibility -->
<a id="schemaratelimit"></a>
<a id="schema_RateLimit"></a>
<a id="tocSratelimit"></a>
<a id="tocsratelimit"></a>

```json
100
```

<h2 id="tocS_RateBasedStatementAggregateKeyType">RateBasedStatementAggregateKeyType</h2>
<!-- backwards compatibility -->
<a id="schemaratebasedstatementaggregatekeytype"></a>
<a id="schema_RateBasedStatementAggregateKeyType"></a>
<a id="tocSratebasedstatementaggregatekeytype"></a>
<a id="tocsratebasedstatementaggregatekeytype"></a>

```json
"IP"
```

<h2 id="tocS_RateBasedStatement">RateBasedStatement</h2>
<!-- backwards compatibility -->
<a id="schemaratebasedstatement"></a>
<a id="schema_RateBasedStatement"></a>
<a id="tocSratebasedstatement"></a>
<a id="tocsratebasedstatement"></a>

```json
{
  "Limit": {},
  "AggregateKeyType": {},
  "ScopeDownStatement": {
    "ByteMatchStatement": {
      "SearchString": {},
      "FieldToMatch": {
        "SingleHeader": {
          "Name": {}
        },
        "SingleQueryArgument": {
          "Name": {}
        },
        "AllQueryArguments": {},
        "UriPath": {},
        "QueryString": {},
        "Body": {
          "OversizeHandling": {}
        },
        "Method": {},
        "JsonBody": {
          "MatchPattern": {
            "All": {},
            "IncludedPaths": {}
          },
          "MatchScope": {},
          "InvalidFallbackBehavior": {},
          "OversizeHandling": {}
        },
        "Headers": {
          "MatchPattern": {
            "All": {},
            "IncludedHeaders": {},
            "ExcludedHeaders": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        },
        "Cookies": {
          "MatchPattern": {
            "All": {},
            "IncludedCookies": {},
            "ExcludedCookies": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        }
      },
      "TextTransformations": {},
      "PositionalConstraint": {}
    },
    "SqliMatchStatement": {
      "FieldToMatch": {
        "SingleHeader": {
          "Name": {}
        },
        "SingleQueryArgument": {
          "Name": {}
        },
        "AllQueryArguments": {},
        "UriPath": {},
        "QueryString": {},
        "Body": {
          "OversizeHandling": {}
        },
        "Method": {},
        "JsonBody": {
          "MatchPattern": {
            "All": {},
            "IncludedPaths": {}
          },
          "MatchScope": {},
          "InvalidFallbackBehavior": {},
          "OversizeHandling": {}
        },
        "Headers": {
          "MatchPattern": {
            "All": {},
            "IncludedHeaders": {},
            "ExcludedHeaders": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        },
        "Cookies": {
          "MatchPattern": {
            "All": {},
            "IncludedCookies": {},
            "ExcludedCookies": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        }
      },
      "TextTransformations": {},
      "SensitivityLevel": {}
    },
    "XssMatchStatement": {
      "FieldToMatch": {
        "SingleHeader": {
          "Name": {}
        },
        "SingleQueryArgument": {
          "Name": {}
        },
        "AllQueryArguments": {},
        "UriPath": {},
        "QueryString": {},
        "Body": {
          "OversizeHandling": {}
        },
        "Method": {},
        "JsonBody": {
          "MatchPattern": {
            "All": {},
            "IncludedPaths": {}
          },
          "MatchScope": {},
          "InvalidFallbackBehavior": {},
          "OversizeHandling": {}
        },
        "Headers": {
          "MatchPattern": {
            "All": {},
            "IncludedHeaders": {},
            "ExcludedHeaders": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        },
        "Cookies": {
          "MatchPattern": {
            "All": {},
            "IncludedCookies": {},
            "ExcludedCookies": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        }
      },
      "TextTransformations": {}
    },
    "SizeConstraintStatement": {
      "FieldToMatch": {
        "SingleHeader": {
          "Name": {}
        },
        "SingleQueryArgument": {
          "Name": {}
        },
        "AllQueryArguments": {},
        "UriPath": {},
        "QueryString": {},
        "Body": {
          "OversizeHandling": {}
        },
        "Method": {},
        "JsonBody": {
          "MatchPattern": {
            "All": {},
            "IncludedPaths": {}
          },
          "MatchScope": {},
          "InvalidFallbackBehavior": {},
          "OversizeHandling": {}
        },
        "Headers": {
          "MatchPattern": {
            "All": {},
            "IncludedHeaders": {},
            "ExcludedHeaders": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        },
        "Cookies": {
          "MatchPattern": {
            "All": {},
            "IncludedCookies": {},
            "ExcludedCookies": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        }
      },
      "ComparisonOperator": {},
      "Size": {},
      "TextTransformations": {}
    },
    "GeoMatchStatement": {
      "CountryCodes": {},
      "ForwardedIPConfig": {
        "HeaderName": {},
        "FallbackBehavior": {}
      }
    },
    "RuleGroupReferenceStatement": {
      "ARN": {},
      "ExcludedRules": {},
      "RuleActionOverrides": {}
    },
    "IPSetReferenceStatement": {
      "ARN": {},
      "IPSetForwardedIPConfig": {
        "HeaderName": {},
        "FallbackBehavior": {},
        "Position": {}
      }
    },
    "RegexPatternSetReferenceStatement": {
      "ARN": {},
      "FieldToMatch": {
        "SingleHeader": {
          "Name": {}
        },
        "SingleQueryArgument": {
          "Name": {}
        },
        "AllQueryArguments": {},
        "UriPath": {},
        "QueryString": {},
        "Body": {
          "OversizeHandling": {}
        },
        "Method": {},
        "JsonBody": {
          "MatchPattern": {
            "All": {},
            "IncludedPaths": {}
          },
          "MatchScope": {},
          "InvalidFallbackBehavior": {},
          "OversizeHandling": {}
        },
        "Headers": {
          "MatchPattern": {
            "All": {},
            "IncludedHeaders": {},
            "ExcludedHeaders": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        },
        "Cookies": {
          "MatchPattern": {
            "All": {},
            "IncludedCookies": {},
            "ExcludedCookies": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        }
      },
      "TextTransformations": {}
    },
    "RateBasedStatement": {},
    "AndStatement": {},
    "OrStatement": {},
    "NotStatement": {},
    "ManagedRuleGroupStatement": {},
    "LabelMatchStatement": {
      "Scope": {},
      "Key": {}
    },
    "RegexMatchStatement": {
      "RegexString": {},
      "FieldToMatch": {
        "SingleHeader": {
          "Name": {}
        },
        "SingleQueryArgument": {
          "Name": {}
        },
        "AllQueryArguments": {},
        "UriPath": {},
        "QueryString": {},
        "Body": {
          "OversizeHandling": {}
        },
        "Method": {},
        "JsonBody": {
          "MatchPattern": {
            "All": {},
            "IncludedPaths": {}
          },
          "MatchScope": {},
          "InvalidFallbackBehavior": {},
          "OversizeHandling": {}
        },
        "Headers": {
          "MatchPattern": {
            "All": {},
            "IncludedHeaders": {},
            "ExcludedHeaders": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        },
        "Cookies": {
          "MatchPattern": {
            "All": {},
            "IncludedCookies": {},
            "ExcludedCookies": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        }
      },
      "TextTransformations": {}
    }
  },
  "ForwardedIPConfig": {
    "HeaderName": {},
    "FallbackBehavior": {}
  }
}
```

<p>A rate-based rule tracks the rate of requests for each originating IP address, and triggers the rule action when the rate exceeds a limit that you specify on the number of requests in any 5-minute time span. You can use this to put a temporary block on requests from an IP address that is sending excessive requests. </p> <p>WAF tracks and manages web requests separately for each instance of a rate-based rule that you use. For example, if you provide the same rate-based rule settings in two web ACLs, each of the two rule statements represents a separate instance of the rate-based rule and gets its own tracking and management by WAF. If you define a rate-based rule inside a rule group, and then use that rule group in multiple places, each use creates a separate instance of the rate-based rule that gets its own tracking and management by WAF. </p> <p>When the rule action triggers, WAF blocks additional requests from the IP address until the request rate falls below the limit.</p> <p>You can optionally nest another statement inside the rate-based statement, to narrow the scope of the rule so that it only counts requests that match the nested statement. For example, based on recent requests that you have seen from an attacker, you might create a rate-based rule with a nested AND rule statement that contains the following nested statements:</p> <ul> <li> <p>An IP match statement with an IP set that specifies the address 192.0.2.44.</p> </li> <li> <p>A string match statement that searches in the User-Agent header for the string BadBot.</p> </li> </ul> <p>In this rate-based rule, you also define a rate limit. For this example, the rate limit is 1,000. Requests that meet the criteria of both of the nested statements are counted. If the count exceeds 1,000 requests per five minutes, the rule action triggers. Requests that do not meet the criteria of both of the nested statements are not counted towards the rate limit and are not affected by this rule.</p> <p>You cannot nest a <code>RateBasedStatement</code> inside another statement, for example inside a <code>NotStatement</code> or <code>OrStatement</code>. You can define a <code>RateBasedStatement</code> inside a web ACL and inside a rule group. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Limit|object|true|none|none|
|AggregateKeyType|object|true|none|none|
|ScopeDownStatement|object|false|none|none|
|ForwardedIPConfig|object|false|none|none|

<h2 id="tocS_RegexPatternString">RegexPatternString</h2>
<!-- backwards compatibility -->
<a id="schemaregexpatternstring"></a>
<a id="schema_RegexPatternString"></a>
<a id="tocSregexpatternstring"></a>
<a id="tocsregexpatternstring"></a>

```json
"string"
```

<h2 id="tocS_Regex">Regex</h2>
<!-- backwards compatibility -->
<a id="schemaregex"></a>
<a id="schema_Regex"></a>
<a id="tocSregex"></a>
<a id="tocsregex"></a>

```json
{
  "RegexString": {}
}
```

A single regular expression. This is used in a <a>RegexPatternSet</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RegexString|object|false|none|none|

<h2 id="tocS_RegexMatchStatement">RegexMatchStatement</h2>
<!-- backwards compatibility -->
<a id="schemaregexmatchstatement"></a>
<a id="schema_RegexMatchStatement"></a>
<a id="tocSregexmatchstatement"></a>
<a id="tocsregexmatchstatement"></a>

```json
{
  "RegexString": {},
  "FieldToMatch": {
    "SingleHeader": {
      "Name": {}
    },
    "SingleQueryArgument": {
      "Name": {}
    },
    "AllQueryArguments": {},
    "UriPath": {},
    "QueryString": {},
    "Body": {
      "OversizeHandling": {}
    },
    "Method": {},
    "JsonBody": {
      "MatchPattern": {
        "All": {},
        "IncludedPaths": {}
      },
      "MatchScope": {},
      "InvalidFallbackBehavior": {},
      "OversizeHandling": {}
    },
    "Headers": {
      "MatchPattern": {
        "All": {},
        "IncludedHeaders": {},
        "ExcludedHeaders": {}
      },
      "MatchScope": {},
      "OversizeHandling": {}
    },
    "Cookies": {
      "MatchPattern": {
        "All": {},
        "IncludedCookies": {},
        "ExcludedCookies": {}
      },
      "MatchScope": {},
      "OversizeHandling": {}
    }
  },
  "TextTransformations": {}
}
```

A rule statement used to search web request components for a match against a single regular expression.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RegexString|object|true|none|none|
|FieldToMatch|object|true|none|none|
|TextTransformations|object|true|none|none|

<h2 id="tocS_RegexPatternSetReferenceStatement">RegexPatternSetReferenceStatement</h2>
<!-- backwards compatibility -->
<a id="schemaregexpatternsetreferencestatement"></a>
<a id="schema_RegexPatternSetReferenceStatement"></a>
<a id="tocSregexpatternsetreferencestatement"></a>
<a id="tocsregexpatternsetreferencestatement"></a>

```json
{
  "ARN": {},
  "FieldToMatch": {
    "SingleHeader": {
      "Name": {}
    },
    "SingleQueryArgument": {
      "Name": {}
    },
    "AllQueryArguments": {},
    "UriPath": {},
    "QueryString": {},
    "Body": {
      "OversizeHandling": {}
    },
    "Method": {},
    "JsonBody": {
      "MatchPattern": {
        "All": {},
        "IncludedPaths": {}
      },
      "MatchScope": {},
      "InvalidFallbackBehavior": {},
      "OversizeHandling": {}
    },
    "Headers": {
      "MatchPattern": {
        "All": {},
        "IncludedHeaders": {},
        "ExcludedHeaders": {}
      },
      "MatchScope": {},
      "OversizeHandling": {}
    },
    "Cookies": {
      "MatchPattern": {
        "All": {},
        "IncludedCookies": {},
        "ExcludedCookies": {}
      },
      "MatchScope": {},
      "OversizeHandling": {}
    }
  },
  "TextTransformations": {}
}
```

<p>A rule statement used to search web request components for matches with regular expressions. To use this, create a <a>RegexPatternSet</a> that specifies the expressions that you want to detect, then use the ARN of that set in this statement. A web request matches the pattern set rule statement if the request component matches any of the patterns in the set. To create a regex pattern set, see <a>CreateRegexPatternSet</a>.</p> <p>Each regex pattern set rule statement references a regex pattern set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, WAF automatically updates all rules that reference it.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ARN|object|true|none|none|
|FieldToMatch|object|true|none|none|
|TextTransformations|object|true|none|none|

<h2 id="tocS_ReleaseSummary">ReleaseSummary</h2>
<!-- backwards compatibility -->
<a id="schemareleasesummary"></a>
<a id="schema_ReleaseSummary"></a>
<a id="tocSreleasesummary"></a>
<a id="tocsreleasesummary"></a>

```json
{
  "ReleaseVersion": {},
  "Timestamp": {}
}
```

High level information for an SDK release.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReleaseVersion|object|false|none|none|
|Timestamp|object|false|none|none|

<h2 id="tocS_RequestBodyAssociatedResourceTypeConfig">RequestBodyAssociatedResourceTypeConfig</h2>
<!-- backwards compatibility -->
<a id="schemarequestbodyassociatedresourcetypeconfig"></a>
<a id="schema_RequestBodyAssociatedResourceTypeConfig"></a>
<a id="tocSrequestbodyassociatedresourcetypeconfig"></a>
<a id="tocsrequestbodyassociatedresourcetypeconfig"></a>

```json
{
  "DefaultSizeInspectionLimit": {}
}
```

<p>Customizes the maximum size of the request body that your protected CloudFront distributions forward to WAF for inspection. The default size is 16 KB (16,384 kilobytes). </p> <note> <p>You are charged additional fees when your protected resources forward body sizes that are larger than the default. For more information, see <a href="http://aws.amazon.com/waf/pricing/">WAF Pricing</a>.</p> </note> <p>This is used in the <code>AssociationConfig</code> of the web ACL. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DefaultSizeInspectionLimit|object|true|none|none|

<h2 id="tocS_SizeInspectionLimit">SizeInspectionLimit</h2>
<!-- backwards compatibility -->
<a id="schemasizeinspectionlimit"></a>
<a id="schema_SizeInspectionLimit"></a>
<a id="tocSsizeinspectionlimit"></a>
<a id="tocssizeinspectionlimit"></a>

```json
"KB_16"
```

<h2 id="tocS_ResponseInspectionStatusCode">ResponseInspectionStatusCode</h2>
<!-- backwards compatibility -->
<a id="schemaresponseinspectionstatuscode"></a>
<a id="schema_ResponseInspectionStatusCode"></a>
<a id="tocSresponseinspectionstatuscode"></a>
<a id="tocsresponseinspectionstatuscode"></a>

```json
{
  "SuccessCodes": {},
  "FailureCodes": {}
}
```

<p>Configures inspection of the response status code. This is part of the <code>ResponseInspection</code> configuration for <code>AWSManagedRulesATPRuleSet</code>. </p> <note> <p>Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SuccessCodes|object|true|none|none|
|FailureCodes|object|true|none|none|

<h2 id="tocS_ResponseInspectionHeader">ResponseInspectionHeader</h2>
<!-- backwards compatibility -->
<a id="schemaresponseinspectionheader"></a>
<a id="schema_ResponseInspectionHeader"></a>
<a id="tocSresponseinspectionheader"></a>
<a id="tocsresponseinspectionheader"></a>

```json
{
  "Name": {},
  "SuccessValues": {},
  "FailureValues": {}
}
```

<p>Configures inspection of the response header. This is part of the <code>ResponseInspection</code> configuration for <code>AWSManagedRulesATPRuleSet</code>. </p> <note> <p>Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|SuccessValues|object|true|none|none|
|FailureValues|object|true|none|none|

<h2 id="tocS_ResponseInspectionBodyContains">ResponseInspectionBodyContains</h2>
<!-- backwards compatibility -->
<a id="schemaresponseinspectionbodycontains"></a>
<a id="schema_ResponseInspectionBodyContains"></a>
<a id="tocSresponseinspectionbodycontains"></a>
<a id="tocsresponseinspectionbodycontains"></a>

```json
{
  "SuccessStrings": {},
  "FailureStrings": {}
}
```

<p>Configures inspection of the response body. WAF can inspect the first 65,536 bytes (64 KB) of the response body. This is part of the <code>ResponseInspection</code> configuration for <code>AWSManagedRulesATPRuleSet</code>. </p> <note> <p>Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SuccessStrings|object|true|none|none|
|FailureStrings|object|true|none|none|

<h2 id="tocS_ResponseInspectionJson">ResponseInspectionJson</h2>
<!-- backwards compatibility -->
<a id="schemaresponseinspectionjson"></a>
<a id="schema_ResponseInspectionJson"></a>
<a id="tocSresponseinspectionjson"></a>
<a id="tocsresponseinspectionjson"></a>

```json
{
  "Identifier": {},
  "SuccessValues": {},
  "FailureValues": {}
}
```

<p>Configures inspection of the response JSON. WAF can inspect the first 65,536 bytes (64 KB) of the response JSON. This is part of the <code>ResponseInspection</code> configuration for <code>AWSManagedRulesATPRuleSet</code>. </p> <note> <p>Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Identifier|object|true|none|none|
|SuccessValues|object|true|none|none|
|FailureValues|object|true|none|none|

<h2 id="tocS_ResponseInspectionBodyContainsSuccessStrings">ResponseInspectionBodyContainsSuccessStrings</h2>
<!-- backwards compatibility -->
<a id="schemaresponseinspectionbodycontainssuccessstrings"></a>
<a id="schema_ResponseInspectionBodyContainsSuccessStrings"></a>
<a id="tocSresponseinspectionbodycontainssuccessstrings"></a>
<a id="tocsresponseinspectionbodycontainssuccessstrings"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ResponseInspectionBodyContainsFailureStrings">ResponseInspectionBodyContainsFailureStrings</h2>
<!-- backwards compatibility -->
<a id="schemaresponseinspectionbodycontainsfailurestrings"></a>
<a id="schema_ResponseInspectionBodyContainsFailureStrings"></a>
<a id="tocSresponseinspectionbodycontainsfailurestrings"></a>
<a id="tocsresponseinspectionbodycontainsfailurestrings"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SuccessValue">SuccessValue</h2>
<!-- backwards compatibility -->
<a id="schemasuccessvalue"></a>
<a id="schema_SuccessValue"></a>
<a id="tocSsuccessvalue"></a>
<a id="tocssuccessvalue"></a>

```json
"string"
```

<h2 id="tocS_ResponseInspectionHeaderName">ResponseInspectionHeaderName</h2>
<!-- backwards compatibility -->
<a id="schemaresponseinspectionheadername"></a>
<a id="schema_ResponseInspectionHeaderName"></a>
<a id="tocSresponseinspectionheadername"></a>
<a id="tocsresponseinspectionheadername"></a>

```json
"string"
```

<h2 id="tocS_ResponseInspectionHeaderSuccessValues">ResponseInspectionHeaderSuccessValues</h2>
<!-- backwards compatibility -->
<a id="schemaresponseinspectionheadersuccessvalues"></a>
<a id="schema_ResponseInspectionHeaderSuccessValues"></a>
<a id="tocSresponseinspectionheadersuccessvalues"></a>
<a id="tocsresponseinspectionheadersuccessvalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ResponseInspectionHeaderFailureValues">ResponseInspectionHeaderFailureValues</h2>
<!-- backwards compatibility -->
<a id="schemaresponseinspectionheaderfailurevalues"></a>
<a id="schema_ResponseInspectionHeaderFailureValues"></a>
<a id="tocSresponseinspectionheaderfailurevalues"></a>
<a id="tocsresponseinspectionheaderfailurevalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ResponseInspectionJsonSuccessValues">ResponseInspectionJsonSuccessValues</h2>
<!-- backwards compatibility -->
<a id="schemaresponseinspectionjsonsuccessvalues"></a>
<a id="schema_ResponseInspectionJsonSuccessValues"></a>
<a id="tocSresponseinspectionjsonsuccessvalues"></a>
<a id="tocsresponseinspectionjsonsuccessvalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ResponseInspectionJsonFailureValues">ResponseInspectionJsonFailureValues</h2>
<!-- backwards compatibility -->
<a id="schemaresponseinspectionjsonfailurevalues"></a>
<a id="schema_ResponseInspectionJsonFailureValues"></a>
<a id="tocSresponseinspectionjsonfailurevalues"></a>
<a id="tocsresponseinspectionjsonfailurevalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ResponseInspectionStatusCodeSuccessCodes">ResponseInspectionStatusCodeSuccessCodes</h2>
<!-- backwards compatibility -->
<a id="schemaresponseinspectionstatuscodesuccesscodes"></a>
<a id="schema_ResponseInspectionStatusCodeSuccessCodes"></a>
<a id="tocSresponseinspectionstatuscodesuccesscodes"></a>
<a id="tocsresponseinspectionstatuscodesuccesscodes"></a>

```json
[
  0
]
```

<h2 id="tocS_ResponseInspectionStatusCodeFailureCodes">ResponseInspectionStatusCodeFailureCodes</h2>
<!-- backwards compatibility -->
<a id="schemaresponseinspectionstatuscodefailurecodes"></a>
<a id="schema_ResponseInspectionStatusCodeFailureCodes"></a>
<a id="tocSresponseinspectionstatuscodefailurecodes"></a>
<a id="tocsresponseinspectionstatuscodefailurecodes"></a>

```json
[
  0
]
```

<h2 id="tocS_SuccessCode">SuccessCode</h2>
<!-- backwards compatibility -->
<a id="schemasuccesscode"></a>
<a id="schema_SuccessCode"></a>
<a id="tocSsuccesscode"></a>
<a id="tocssuccesscode"></a>

```json
0
```

<h2 id="tocS_RuleAction">RuleAction</h2>
<!-- backwards compatibility -->
<a id="schemaruleaction"></a>
<a id="schema_RuleAction"></a>
<a id="tocSruleaction"></a>
<a id="tocsruleaction"></a>

```json
{
  "Block": {
    "CustomResponse": {
      "ResponseCode": {},
      "CustomResponseBodyKey": {},
      "ResponseHeaders": {}
    }
  },
  "Allow": {
    "CustomRequestHandling": {
      "InsertHeaders": {}
    }
  },
  "Count": {
    "CustomRequestHandling": {
      "InsertHeaders": {}
    }
  },
  "Captcha": {
    "CustomRequestHandling": {
      "InsertHeaders": {}
    }
  },
  "Challenge": {
    "CustomRequestHandling": {
      "InsertHeaders": {}
    }
  }
}
```

The action that WAF should take on a web request when it matches a rule's statement. Settings at the web ACL level can override the rule action setting.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Block|object|false|none|none|
|Allow|object|false|none|none|
|Count|object|false|none|none|
|Captcha|object|false|none|none|
|Challenge|object|false|none|none|

<h2 id="tocS_Rule">Rule</h2>
<!-- backwards compatibility -->
<a id="schemarule"></a>
<a id="schema_Rule"></a>
<a id="tocSrule"></a>
<a id="tocsrule"></a>

```json
{
  "Name": {},
  "Priority": {},
  "Statement": {
    "ByteMatchStatement": {
      "SearchString": {},
      "FieldToMatch": {
        "SingleHeader": {
          "Name": {}
        },
        "SingleQueryArgument": {
          "Name": {}
        },
        "AllQueryArguments": {},
        "UriPath": {},
        "QueryString": {},
        "Body": {
          "OversizeHandling": {}
        },
        "Method": {},
        "JsonBody": {
          "MatchPattern": {
            "All": {},
            "IncludedPaths": {}
          },
          "MatchScope": {},
          "InvalidFallbackBehavior": {},
          "OversizeHandling": {}
        },
        "Headers": {
          "MatchPattern": {
            "All": {},
            "IncludedHeaders": {},
            "ExcludedHeaders": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        },
        "Cookies": {
          "MatchPattern": {
            "All": {},
            "IncludedCookies": {},
            "ExcludedCookies": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        }
      },
      "TextTransformations": {},
      "PositionalConstraint": {}
    },
    "SqliMatchStatement": {
      "FieldToMatch": {
        "SingleHeader": {
          "Name": {}
        },
        "SingleQueryArgument": {
          "Name": {}
        },
        "AllQueryArguments": {},
        "UriPath": {},
        "QueryString": {},
        "Body": {
          "OversizeHandling": {}
        },
        "Method": {},
        "JsonBody": {
          "MatchPattern": {
            "All": {},
            "IncludedPaths": {}
          },
          "MatchScope": {},
          "InvalidFallbackBehavior": {},
          "OversizeHandling": {}
        },
        "Headers": {
          "MatchPattern": {
            "All": {},
            "IncludedHeaders": {},
            "ExcludedHeaders": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        },
        "Cookies": {
          "MatchPattern": {
            "All": {},
            "IncludedCookies": {},
            "ExcludedCookies": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        }
      },
      "TextTransformations": {},
      "SensitivityLevel": {}
    },
    "XssMatchStatement": {
      "FieldToMatch": {
        "SingleHeader": {
          "Name": {}
        },
        "SingleQueryArgument": {
          "Name": {}
        },
        "AllQueryArguments": {},
        "UriPath": {},
        "QueryString": {},
        "Body": {
          "OversizeHandling": {}
        },
        "Method": {},
        "JsonBody": {
          "MatchPattern": {
            "All": {},
            "IncludedPaths": {}
          },
          "MatchScope": {},
          "InvalidFallbackBehavior": {},
          "OversizeHandling": {}
        },
        "Headers": {
          "MatchPattern": {
            "All": {},
            "IncludedHeaders": {},
            "ExcludedHeaders": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        },
        "Cookies": {
          "MatchPattern": {
            "All": {},
            "IncludedCookies": {},
            "ExcludedCookies": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        }
      },
      "TextTransformations": {}
    },
    "SizeConstraintStatement": {
      "FieldToMatch": {
        "SingleHeader": {
          "Name": {}
        },
        "SingleQueryArgument": {
          "Name": {}
        },
        "AllQueryArguments": {},
        "UriPath": {},
        "QueryString": {},
        "Body": {
          "OversizeHandling": {}
        },
        "Method": {},
        "JsonBody": {
          "MatchPattern": {
            "All": {},
            "IncludedPaths": {}
          },
          "MatchScope": {},
          "InvalidFallbackBehavior": {},
          "OversizeHandling": {}
        },
        "Headers": {
          "MatchPattern": {
            "All": {},
            "IncludedHeaders": {},
            "ExcludedHeaders": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        },
        "Cookies": {
          "MatchPattern": {
            "All": {},
            "IncludedCookies": {},
            "ExcludedCookies": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        }
      },
      "ComparisonOperator": {},
      "Size": {},
      "TextTransformations": {}
    },
    "GeoMatchStatement": {
      "CountryCodes": {},
      "ForwardedIPConfig": {
        "HeaderName": {},
        "FallbackBehavior": {}
      }
    },
    "RuleGroupReferenceStatement": {
      "ARN": {},
      "ExcludedRules": {},
      "RuleActionOverrides": {}
    },
    "IPSetReferenceStatement": {
      "ARN": {},
      "IPSetForwardedIPConfig": {
        "HeaderName": {},
        "FallbackBehavior": {},
        "Position": {}
      }
    },
    "RegexPatternSetReferenceStatement": {
      "ARN": {},
      "FieldToMatch": {
        "SingleHeader": {
          "Name": {}
        },
        "SingleQueryArgument": {
          "Name": {}
        },
        "AllQueryArguments": {},
        "UriPath": {},
        "QueryString": {},
        "Body": {
          "OversizeHandling": {}
        },
        "Method": {},
        "JsonBody": {
          "MatchPattern": {
            "All": {},
            "IncludedPaths": {}
          },
          "MatchScope": {},
          "InvalidFallbackBehavior": {},
          "OversizeHandling": {}
        },
        "Headers": {
          "MatchPattern": {
            "All": {},
            "IncludedHeaders": {},
            "ExcludedHeaders": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        },
        "Cookies": {
          "MatchPattern": {
            "All": {},
            "IncludedCookies": {},
            "ExcludedCookies": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        }
      },
      "TextTransformations": {}
    },
    "RateBasedStatement": {},
    "AndStatement": {},
    "OrStatement": {},
    "NotStatement": {},
    "ManagedRuleGroupStatement": {},
    "LabelMatchStatement": {
      "Scope": {},
      "Key": {}
    },
    "RegexMatchStatement": {
      "RegexString": {},
      "FieldToMatch": {
        "SingleHeader": {
          "Name": {}
        },
        "SingleQueryArgument": {
          "Name": {}
        },
        "AllQueryArguments": {},
        "UriPath": {},
        "QueryString": {},
        "Body": {
          "OversizeHandling": {}
        },
        "Method": {},
        "JsonBody": {
          "MatchPattern": {
            "All": {},
            "IncludedPaths": {}
          },
          "MatchScope": {},
          "InvalidFallbackBehavior": {},
          "OversizeHandling": {}
        },
        "Headers": {
          "MatchPattern": {
            "All": {},
            "IncludedHeaders": {},
            "ExcludedHeaders": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        },
        "Cookies": {
          "MatchPattern": {
            "All": {},
            "IncludedCookies": {},
            "ExcludedCookies": {}
          },
          "MatchScope": {},
          "OversizeHandling": {}
        }
      },
      "TextTransformations": {}
    }
  },
  "Action": {
    "Block": {
      "CustomResponse": {
        "ResponseCode": {},
        "CustomResponseBodyKey": {},
        "ResponseHeaders": {}
      }
    },
    "Allow": {
      "CustomRequestHandling": {
        "InsertHeaders": {}
      }
    },
    "Count": {
      "CustomRequestHandling": {
        "InsertHeaders": {}
      }
    },
    "Captcha": {
      "CustomRequestHandling": {
        "InsertHeaders": {}
      }
    },
    "Challenge": {
      "CustomRequestHandling": {
        "InsertHeaders": {}
      }
    }
  },
  "OverrideAction": {
    "Count": {
      "CustomRequestHandling": {
        "InsertHeaders": {}
      }
    },
    "None": {}
  },
  "RuleLabels": {},
  "VisibilityConfig": {
    "SampledRequestsEnabled": {},
    "CloudWatchMetricsEnabled": {},
    "MetricName": {}
  },
  "CaptchaConfig": {
    "ImmunityTimeProperty": {
      "ImmunityTime": {}
    }
  },
  "ChallengeConfig": {
    "ImmunityTimeProperty": {
      "ImmunityTime": {}
    }
  }
}
```

A single rule, which you can use in a <a>WebACL</a> or <a>RuleGroup</a> to identify web requests that you want to allow, block, or count. Each rule includes one top-level <a>Statement</a> that WAF uses to identify matching web requests, and parameters that govern how WAF handles them.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Priority|object|true|none|none|
|Statement|object|true|none|none|
|Action|object|false|none|none|
|OverrideAction|object|false|none|none|
|RuleLabels|object|false|none|none|
|VisibilityConfig|object|true|none|none|
|CaptchaConfig|object|false|none|none|
|ChallengeConfig|object|false|none|none|

<h2 id="tocS_RuleActionOverride">RuleActionOverride</h2>
<!-- backwards compatibility -->
<a id="schemaruleactionoverride"></a>
<a id="schema_RuleActionOverride"></a>
<a id="tocSruleactionoverride"></a>
<a id="tocsruleactionoverride"></a>

```json
{
  "Name": {},
  "ActionToUse": {
    "Block": {
      "CustomResponse": {
        "ResponseCode": {},
        "CustomResponseBodyKey": {},
        "ResponseHeaders": {}
      }
    },
    "Allow": {
      "CustomRequestHandling": {
        "InsertHeaders": {}
      }
    },
    "Count": {
      "CustomRequestHandling": {
        "InsertHeaders": {}
      }
    },
    "Captcha": {
      "CustomRequestHandling": {
        "InsertHeaders": {}
      }
    },
    "Challenge": {
      "CustomRequestHandling": {
        "InsertHeaders": {}
      }
    }
  }
}
```

<p>Action setting to use in the place of a rule action that is configured inside the rule group. You specify one override for each rule whose action you want to change. </p> <p>You can use overrides for testing, for example you can override all of rule actions to <code>Count</code> and then monitor the resulting count metrics to understand how the rule group would handle your web traffic. You can also permanently override some or all actions, to modify how the rule group manages your web traffic.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|ActionToUse|object|true|none|none|

<h2 id="tocS_RuleSummary">RuleSummary</h2>
<!-- backwards compatibility -->
<a id="schemarulesummary"></a>
<a id="schema_RuleSummary"></a>
<a id="tocSrulesummary"></a>
<a id="tocsrulesummary"></a>

```json
{
  "Name": {},
  "Action": {
    "Block": {
      "CustomResponse": {
        "ResponseCode": {},
        "CustomResponseBodyKey": {},
        "ResponseHeaders": {}
      }
    },
    "Allow": {
      "CustomRequestHandling": {
        "InsertHeaders": {}
      }
    },
    "Count": {
      "CustomRequestHandling": {
        "InsertHeaders": {}
      }
    },
    "Captcha": {
      "CustomRequestHandling": {
        "InsertHeaders": {}
      }
    },
    "Challenge": {
      "CustomRequestHandling": {
        "InsertHeaders": {}
      }
    }
  }
}
```

High-level information about a <a>Rule</a>, returned by operations like <a>DescribeManagedRuleGroup</a>. This provides information like the ID, that you can use to retrieve and manage a <code>RuleGroup</code>, and the ARN, that you provide to the <a>RuleGroupReferenceStatement</a> to use the rule group in a <a>Rule</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Action|object|false|none|none|

<h2 id="tocS_SampleWeight">SampleWeight</h2>
<!-- backwards compatibility -->
<a id="schemasampleweight"></a>
<a id="schema_SampleWeight"></a>
<a id="tocSsampleweight"></a>
<a id="tocssampleweight"></a>

```json
0
```

<h2 id="tocS_SampledHTTPRequest">SampledHTTPRequest</h2>
<!-- backwards compatibility -->
<a id="schemasampledhttprequest"></a>
<a id="schema_SampledHTTPRequest"></a>
<a id="tocSsampledhttprequest"></a>
<a id="tocssampledhttprequest"></a>

```json
{
  "Request": {
    "ClientIP": {},
    "Country": {},
    "URI": {},
    "Method": {},
    "HTTPVersion": {},
    "Headers": {}
  },
  "Weight": {},
  "Timestamp": {},
  "Action": {},
  "RuleNameWithinRuleGroup": {},
  "RequestHeadersInserted": {},
  "ResponseCodeSent": {},
  "Labels": {},
  "CaptchaResponse": {
    "ResponseCode": {},
    "SolveTimestamp": {},
    "FailureReason": {}
  },
  "ChallengeResponse": {
    "ResponseCode": {},
    "SolveTimestamp": {},
    "FailureReason": {}
  },
  "OverriddenAction": {}
}
```

Represents a single sampled web request. The response from <a>GetSampledRequests</a> includes a <code>SampledHTTPRequests</code> complex type that appears as <code>SampledRequests</code> in the response syntax. <code>SampledHTTPRequests</code> contains an array of <code>SampledHTTPRequest</code> objects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Request|object|true|none|none|
|Weight|object|true|none|none|
|Timestamp|object|false|none|none|
|Action|object|false|none|none|
|RuleNameWithinRuleGroup|object|false|none|none|
|RequestHeadersInserted|object|false|none|none|
|ResponseCodeSent|object|false|none|none|
|Labels|object|false|none|none|
|CaptchaResponse|object|false|none|none|
|ChallengeResponse|object|false|none|none|
|OverriddenAction|object|false|none|none|

<h2 id="tocS_SensitivityLevel">SensitivityLevel</h2>
<!-- backwards compatibility -->
<a id="schemasensitivitylevel"></a>
<a id="schema_SensitivityLevel"></a>
<a id="tocSsensitivitylevel"></a>
<a id="tocssensitivitylevel"></a>

```json
"LOW"
```

<h2 id="tocS_Size">Size</h2>
<!-- backwards compatibility -->
<a id="schemasize"></a>
<a id="schema_Size"></a>
<a id="tocSsize"></a>
<a id="tocssize"></a>

```json
0
```

<h2 id="tocS_SizeConstraintStatement">SizeConstraintStatement</h2>
<!-- backwards compatibility -->
<a id="schemasizeconstraintstatement"></a>
<a id="schema_SizeConstraintStatement"></a>
<a id="tocSsizeconstraintstatement"></a>
<a id="tocssizeconstraintstatement"></a>

```json
{
  "FieldToMatch": {
    "SingleHeader": {
      "Name": {}
    },
    "SingleQueryArgument": {
      "Name": {}
    },
    "AllQueryArguments": {},
    "UriPath": {},
    "QueryString": {},
    "Body": {
      "OversizeHandling": {}
    },
    "Method": {},
    "JsonBody": {
      "MatchPattern": {
        "All": {},
        "IncludedPaths": {}
      },
      "MatchScope": {},
      "InvalidFallbackBehavior": {},
      "OversizeHandling": {}
    },
    "Headers": {
      "MatchPattern": {
        "All": {},
        "IncludedHeaders": {},
        "ExcludedHeaders": {}
      },
      "MatchScope": {},
      "OversizeHandling": {}
    },
    "Cookies": {
      "MatchPattern": {
        "All": {},
        "IncludedCookies": {},
        "ExcludedCookies": {}
      },
      "MatchScope": {},
      "OversizeHandling": {}
    }
  },
  "ComparisonOperator": {},
  "Size": {},
  "TextTransformations": {}
}
```

<p>A rule statement that compares a number of bytes against the size of a request component, using a comparison operator, such as greater than (&gt;) or less than (&lt;). For example, you can use a size constraint statement to look for query strings that are longer than 100 bytes. </p> <p>If you configure WAF to inspect the request body, WAF inspects only the number of bytes of the body up to the limit for the web ACL. By default, for regional web ACLs, this limit is 8 KB (8,192 kilobytes) and for CloudFront web ACLs, this limit is 16 KB (16,384 kilobytes). For CloudFront web ACLs, you can increase the limit in the web ACL <code>AssociationConfig</code>, for additional fees. If you know that the request body for your web requests should never exceed the inspection limit, you could use a size constraint statement to block requests that have a larger request body size.</p> <p>If you choose URI for the value of Part of the request to filter on, the slash (/) in the URI counts as one character. For example, the URI <code>/logo.jpg</code> is nine characters long.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FieldToMatch|object|true|none|none|
|ComparisonOperator|object|true|none|none|
|Size|object|true|none|none|
|TextTransformations|object|true|none|none|

<h2 id="tocS_SqliMatchStatement">SqliMatchStatement</h2>
<!-- backwards compatibility -->
<a id="schemasqlimatchstatement"></a>
<a id="schema_SqliMatchStatement"></a>
<a id="tocSsqlimatchstatement"></a>
<a id="tocssqlimatchstatement"></a>

```json
{
  "FieldToMatch": {
    "SingleHeader": {
      "Name": {}
    },
    "SingleQueryArgument": {
      "Name": {}
    },
    "AllQueryArguments": {},
    "UriPath": {},
    "QueryString": {},
    "Body": {
      "OversizeHandling": {}
    },
    "Method": {},
    "JsonBody": {
      "MatchPattern": {
        "All": {},
        "IncludedPaths": {}
      },
      "MatchScope": {},
      "InvalidFallbackBehavior": {},
      "OversizeHandling": {}
    },
    "Headers": {
      "MatchPattern": {
        "All": {},
        "IncludedHeaders": {},
        "ExcludedHeaders": {}
      },
      "MatchScope": {},
      "OversizeHandling": {}
    },
    "Cookies": {
      "MatchPattern": {
        "All": {},
        "IncludedCookies": {},
        "ExcludedCookies": {}
      },
      "MatchScope": {},
      "OversizeHandling": {}
    }
  },
  "TextTransformations": {},
  "SensitivityLevel": {}
}
```

A rule statement that inspects for malicious SQL code. Attackers insert malicious SQL code into web requests to do things like modify your database or extract data from it.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FieldToMatch|object|true|none|none|
|TextTransformations|object|true|none|none|
|SensitivityLevel|object|false|none|none|

<h2 id="tocS_XssMatchStatement">XssMatchStatement</h2>
<!-- backwards compatibility -->
<a id="schemaxssmatchstatement"></a>
<a id="schema_XssMatchStatement"></a>
<a id="tocSxssmatchstatement"></a>
<a id="tocsxssmatchstatement"></a>

```json
{
  "FieldToMatch": {
    "SingleHeader": {
      "Name": {}
    },
    "SingleQueryArgument": {
      "Name": {}
    },
    "AllQueryArguments": {},
    "UriPath": {},
    "QueryString": {},
    "Body": {
      "OversizeHandling": {}
    },
    "Method": {},
    "JsonBody": {
      "MatchPattern": {
        "All": {},
        "IncludedPaths": {}
      },
      "MatchScope": {},
      "InvalidFallbackBehavior": {},
      "OversizeHandling": {}
    },
    "Headers": {
      "MatchPattern": {
        "All": {},
        "IncludedHeaders": {},
        "ExcludedHeaders": {}
      },
      "MatchScope": {},
      "OversizeHandling": {}
    },
    "Cookies": {
      "MatchPattern": {
        "All": {},
        "IncludedCookies": {},
        "ExcludedCookies": {}
      },
      "MatchScope": {},
      "OversizeHandling": {}
    }
  },
  "TextTransformations": {}
}
```

A rule statement that inspects for cross-site scripting (XSS) attacks. In XSS attacks, the attacker uses vulnerabilities in a benign website as a vehicle to inject malicious client-site scripts into other legitimate web browsers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FieldToMatch|object|true|none|none|
|TextTransformations|object|true|none|none|

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

<p>A tag associated with an Amazon Web Services resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing or other management. Typically, the tag key represents a category, such as "environment", and the tag value represents a specific value within that category, such as "test," "development," or "production". Or you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.</p> <p>You can tag the Amazon Web Services resources that you manage through WAF: web ACLs, rule groups, IP sets, and regex pattern sets. You can't manage or view tags through the WAF console. </p>

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

<h2 id="tocS_TextTransformationPriority">TextTransformationPriority</h2>
<!-- backwards compatibility -->
<a id="schematexttransformationpriority"></a>
<a id="schema_TextTransformationPriority"></a>
<a id="tocStexttransformationpriority"></a>
<a id="tocstexttransformationpriority"></a>

```json
0
```

<h2 id="tocS_TextTransformationType">TextTransformationType</h2>
<!-- backwards compatibility -->
<a id="schematexttransformationtype"></a>
<a id="schema_TextTransformationType"></a>
<a id="tocStexttransformationtype"></a>
<a id="tocstexttransformationtype"></a>

```json
"NONE"
```

<h2 id="tocS_TextTransformation">TextTransformation</h2>
<!-- backwards compatibility -->
<a id="schematexttransformation"></a>
<a id="schema_TextTransformation"></a>
<a id="tocStexttransformation"></a>
<a id="tocstexttransformation"></a>

```json
{
  "Priority": {},
  "Type": {}
}
```

Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Priority|object|true|none|none|
|Type|object|true|none|none|

<h2 id="tocS_VersionToPublish">VersionToPublish</h2>
<!-- backwards compatibility -->
<a id="schemaversiontopublish"></a>
<a id="schema_VersionToPublish"></a>
<a id="tocSversiontopublish"></a>
<a id="tocsversiontopublish"></a>

```json
{
  "AssociatedRuleGroupArn": {},
  "ForecastedLifetime": {}
}
```

<p>A version of the named managed rule group, that the rule group's vendor publishes for use by customers. </p> <note> <p>This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. </p> <p>Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are <code>ListManagedRuleSets</code>, <code>GetManagedRuleSet</code>, <code>PutManagedRuleSetVersions</code>, and <code>UpdateManagedRuleSetVersionExpiryDate</code>.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssociatedRuleGroupArn|object|false|none|none|
|ForecastedLifetime|object|false|none|none|
