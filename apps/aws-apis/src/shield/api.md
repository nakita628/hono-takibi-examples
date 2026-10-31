<h1 id="aws-shield">AWS Shield v2016-06-02</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Shield Advanced</fullname> <p>This is the <i>Shield Advanced API Reference</i>. This guide is for developers who need detailed information about the Shield Advanced API actions, data types, and errors. For detailed information about WAF and Shield Advanced features and an overview of how to use the WAF and Shield Advanced APIs, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">WAF and Shield Developer Guide</a>.</p>

Base URLs:

* <a href="http://shield.us-east-1.amazonaws.com">http://shield.us-east-1.amazonaws.com</a> - The AWS Shield multi-region endpoint

* <a href="https://shield.us-east-1.amazonaws.com">https://shield.us-east-1.amazonaws.com</a> - The AWS Shield multi-region endpoint

* <a href="http://shield.cn-north-1.amazonaws.com.cn">http://shield.cn-north-1.amazonaws.com.cn</a> - The AWS Shield endpoint for China (Beijing) and China (Ningxia)

* <a href="https://shield.cn-north-1.amazonaws.com.cn">https://shield.cn-north-1.amazonaws.com.cn</a> - The AWS Shield endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/shield/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-shield-default">Default</h1>

## AssociateDRTLogBucket

<a id="opIdAssociateDRTLogBucket"></a>

> Code samples

```bash
curl 'https://shield.us-east-1.amazonaws.com/#X-Amz-Target=AWSShield_20160616.AssociateDRTLogBucket' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShield_20160616.AssociateDRTLogBucket' \
  -d '{
    "LogBucket": {}
  }'
```

`POST /#X-Amz-Target=AWSShield_20160616.AssociateDRTLogBucket`

<p>Authorizes the Shield Response Team (SRT) to access the specified Amazon S3 bucket containing log data such as Application Load Balancer access logs, CloudFront logs, or logs from third party sources. You can associate up to 10 Amazon S3 buckets with your subscription.</p> <p>To use the services of the SRT and make an <code>AssociateDRTLogBucket</code> request, you must be subscribed to the <a href="http://aws.amazon.com/premiumsupport/business-support/">Business Support plan</a> or the <a href="http://aws.amazon.com/premiumsupport/enterprise-support/">Enterprise Support plan</a>.</p>

> Body parameter

```json
{
  "LogBucket": {}
}
```

<h3 id="associatedrtlogbucket-parameters">Parameters</h3>

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
|body|body|[AssociateDRTLogBucketRequest](#schemaassociatedrtlogbucketrequest)|true|none|
|» LogBucket|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShield_20160616.AssociateDRTLogBucket|

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

<h3 id="associatedrtlogbucket-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateDRTLogBucketResponse](#schemaassociatedrtlogbucketresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|482|482|NoAssociatedRoleException|[NoAssociatedRoleException](#schemanoassociatedroleexception)|
|483|483|LimitsExceededException|[LimitsExceededException](#schemalimitsexceededexception)|
|484|484|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|485|485|AccessDeniedForDependencyException|[AccessDeniedForDependencyException](#schemaaccessdeniedfordependencyexception)|
|486|486|OptimisticLockException|[OptimisticLockException](#schemaoptimisticlockexception)|
|487|487|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateDRTRole

<a id="opIdAssociateDRTRole"></a>

> Code samples

```bash
curl 'https://shield.us-east-1.amazonaws.com/#X-Amz-Target=AWSShield_20160616.AssociateDRTRole' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShield_20160616.AssociateDRTRole' \
  -d '{
    "RoleArn": {}
  }'
```

`POST /#X-Amz-Target=AWSShield_20160616.AssociateDRTRole`

<p>Authorizes the Shield Response Team (SRT) using the specified role, to access your Amazon Web Services account to assist with DDoS attack mitigation during potential attacks. This enables the SRT to inspect your WAF configuration and create or update WAF rules and web ACLs.</p> <p>You can associate only one <code>RoleArn</code> with your subscription. If you submit an <code>AssociateDRTRole</code> request for an account that already has an associated role, the new <code>RoleArn</code> will replace the existing <code>RoleArn</code>. </p> <p>Prior to making the <code>AssociateDRTRole</code> request, you must attach the <code>AWSShieldDRTAccessPolicy</code> managed policy to the role that you'll specify in the request. You can access this policy in the IAM console at <a href="https://console.aws.amazon.com/iam/home?#/policies/arn:aws:iam::aws:policy/service-role/AWSShieldDRTAccessPolicy">AWSShieldDRTAccessPolicy</a>. For more information see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_manage-attach-detach.html">Adding and removing IAM identity permissions</a>. The role must also trust the service principal <code>drt.shield.amazonaws.com</code>. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html">IAM JSON policy elements: Principal</a>.</p> <p>The SRT will have access only to your WAF and Shield resources. By submitting this request, you authorize the SRT to inspect your WAF and Shield configuration and create and update WAF rules and web ACLs on your behalf. The SRT takes these actions only if explicitly authorized by you.</p> <p>You must have the <code>iam:PassRole</code> permission to make an <code>AssociateDRTRole</code> request. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html">Granting a user permissions to pass a role to an Amazon Web Services service</a>. </p> <p>To use the services of the SRT and make an <code>AssociateDRTRole</code> request, you must be subscribed to the <a href="http://aws.amazon.com/premiumsupport/business-support/">Business Support plan</a> or the <a href="http://aws.amazon.com/premiumsupport/enterprise-support/">Enterprise Support plan</a>.</p>

> Body parameter

```json
{
  "RoleArn": {}
}
```

<h3 id="associatedrtrole-parameters">Parameters</h3>

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
|body|body|[AssociateDRTRoleRequest](#schemaassociatedrtrolerequest)|true|none|
|» RoleArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShield_20160616.AssociateDRTRole|

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

<h3 id="associatedrtrole-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateDRTRoleResponse](#schemaassociatedrtroleresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|AccessDeniedForDependencyException|[AccessDeniedForDependencyException](#schemaaccessdeniedfordependencyexception)|
|484|484|OptimisticLockException|[OptimisticLockException](#schemaoptimisticlockexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateHealthCheck

<a id="opIdAssociateHealthCheck"></a>

> Code samples

```bash
curl 'https://shield.us-east-1.amazonaws.com/#X-Amz-Target=AWSShield_20160616.AssociateHealthCheck' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShield_20160616.AssociateHealthCheck' \
  -d '{
    "ProtectionId": {},
    "HealthCheckArn": {}
  }'
```

`POST /#X-Amz-Target=AWSShield_20160616.AssociateHealthCheck`

<p>Adds health-based detection to the Shield Advanced protection for a resource. Shield Advanced health-based detection uses the health of your Amazon Web Services resource to improve responsiveness and accuracy in attack detection and response. </p> <p>You define the health check in Route 53 and then associate it with your Shield Advanced protection. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/ddos-overview.html#ddos-advanced-health-check-option">Shield Advanced Health-Based Detection</a> in the <i>WAF Developer Guide</i>. </p>

> Body parameter

```json
{
  "ProtectionId": {},
  "HealthCheckArn": {}
}
```

<h3 id="associatehealthcheck-parameters">Parameters</h3>

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
|body|body|[AssociateHealthCheckRequest](#schemaassociatehealthcheckrequest)|true|none|
|» ProtectionId|body|object|true|none|
|» HealthCheckArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShield_20160616.AssociateHealthCheck|

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

<h3 id="associatehealthcheck-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateHealthCheckResponse](#schemaassociatehealthcheckresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|LimitsExceededException|[LimitsExceededException](#schemalimitsexceededexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|484|484|OptimisticLockException|[OptimisticLockException](#schemaoptimisticlockexception)|
|485|485|InvalidResourceException|[InvalidResourceException](#schemainvalidresourceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateProactiveEngagementDetails

<a id="opIdAssociateProactiveEngagementDetails"></a>

> Code samples

```bash
curl 'https://shield.us-east-1.amazonaws.com/#X-Amz-Target=AWSShield_20160616.AssociateProactiveEngagementDetails' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShield_20160616.AssociateProactiveEngagementDetails' \
  -d '{
    "EmergencyContactList": {}
  }'
```

`POST /#X-Amz-Target=AWSShield_20160616.AssociateProactiveEngagementDetails`

<p>Initializes proactive engagement and sets the list of contacts for the Shield Response Team (SRT) to use. You must provide at least one phone number in the emergency contact list. </p> <p>After you have initialized proactive engagement using this call, to disable or enable proactive engagement, use the calls <code>DisableProactiveEngagement</code> and <code>EnableProactiveEngagement</code>. </p> <note> <p>This call defines the list of email addresses and phone numbers that the SRT can use to contact you for escalations to the SRT and to initiate proactive customer support.</p> <p>The contacts that you provide in the request replace any contacts that were already defined. If you already have contacts defined and want to use them, retrieve the list using <code>DescribeEmergencyContactSettings</code> and then provide it to this call. </p> </note>

> Body parameter

```json
{
  "EmergencyContactList": {}
}
```

<h3 id="associateproactiveengagementdetails-parameters">Parameters</h3>

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
|body|body|[AssociateProactiveEngagementDetailsRequest](#schemaassociateproactiveengagementdetailsrequest)|true|none|
|» EmergencyContactList|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShield_20160616.AssociateProactiveEngagementDetails|

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

<h3 id="associateproactiveengagementdetails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateProactiveEngagementDetailsResponse](#schemaassociateproactiveengagementdetailsresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|OptimisticLockException|[OptimisticLockException](#schemaoptimisticlockexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateProtection

<a id="opIdCreateProtection"></a>

> Code samples

```bash
curl 'https://shield.us-east-1.amazonaws.com/#X-Amz-Target=AWSShield_20160616.CreateProtection' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShield_20160616.CreateProtection' \
  -d '{
    "Name": {},
    "ResourceArn": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AWSShield_20160616.CreateProtection`

<p>Enables Shield Advanced for a specific Amazon Web Services resource. The resource can be an Amazon CloudFront distribution, Amazon Route 53 hosted zone, Global Accelerator standard accelerator, Elastic IP Address, Application Load Balancer, or a Classic Load Balancer. You can protect Amazon EC2 instances and Network Load Balancers by association with protected Amazon EC2 Elastic IP addresses.</p> <p>You can add protection to only a single resource with each <code>CreateProtection</code> request. You can add protection to multiple resources at once through the Shield Advanced console at <a href="https://console.aws.amazon.com/wafv2/shieldv2#/">https://console.aws.amazon.com/wafv2/shieldv2#/</a>. For more information see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/getting-started-ddos.html">Getting Started with Shield Advanced</a> and <a href="https://docs.aws.amazon.com/waf/latest/developerguide/configure-new-protection.html">Adding Shield Advanced protection to Amazon Web Services resources</a>.</p>

> Body parameter

```json
{
  "Name": {},
  "ResourceArn": {},
  "Tags": {}
}
```

<h3 id="createprotection-parameters">Parameters</h3>

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
|body|body|[CreateProtectionRequest](#schemacreateprotectionrequest)|true|none|
|» Name|body|object|true|none|
|» ResourceArn|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShield_20160616.CreateProtection|

> Example responses

> 200 Response

```json
{
  "ProtectionId": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="createprotection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateProtectionResponse](#schemacreateprotectionresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|InvalidResourceException|[InvalidResourceException](#schemainvalidresourceexception)|
|482|482|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|483|483|LimitsExceededException|[LimitsExceededException](#schemalimitsexceededexception)|
|484|484|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|485|485|OptimisticLockException|[OptimisticLockException](#schemaoptimisticlockexception)|
|486|486|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|487|487|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateProtectionGroup

<a id="opIdCreateProtectionGroup"></a>

> Code samples

```bash
curl 'https://shield.us-east-1.amazonaws.com/#X-Amz-Target=AWSShield_20160616.CreateProtectionGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShield_20160616.CreateProtectionGroup' \
  -d '{
    "ProtectionGroupId": {},
    "Aggregation": {},
    "Pattern": {},
    "ResourceType": {},
    "Members": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AWSShield_20160616.CreateProtectionGroup`

Creates a grouping of protected resources so they can be handled as a collective. This resource grouping improves the accuracy of detection and reduces false positives. 

> Body parameter

```json
{
  "ProtectionGroupId": {},
  "Aggregation": {},
  "Pattern": {},
  "ResourceType": {},
  "Members": {},
  "Tags": {}
}
```

<h3 id="createprotectiongroup-parameters">Parameters</h3>

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
|body|body|[CreateProtectionGroupRequest](#schemacreateprotectiongrouprequest)|true|none|
|» ProtectionGroupId|body|object|true|none|
|» Aggregation|body|object|true|none|
|» Pattern|body|object|true|none|
|» ResourceType|body|object|false|none|
|» Members|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShield_20160616.CreateProtectionGroup|

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

<h3 id="createprotectiongroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateProtectionGroupResponse](#schemacreateprotectiongroupresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|OptimisticLockException|[OptimisticLockException](#schemaoptimisticlockexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|485|485|LimitsExceededException|[LimitsExceededException](#schemalimitsexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateSubscription

<a id="opIdCreateSubscription"></a>

> Code samples

```bash
curl 'https://shield.us-east-1.amazonaws.com/#X-Amz-Target=AWSShield_20160616.CreateSubscription' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShield_20160616.CreateSubscription' \
  -d '{}'
```

`POST /#X-Amz-Target=AWSShield_20160616.CreateSubscription`

<p>Activates Shield Advanced for an account.</p> <note> <p>For accounts that are members of an Organizations organization, Shield Advanced subscriptions are billed against the organization's payer account, regardless of whether the payer account itself is subscribed. </p> </note> <p>When you initially create a subscription, your subscription is set to be automatically renewed at the end of the existing subscription period. You can change this by submitting an <code>UpdateSubscription</code> request. </p>

> Body parameter

```json
{}
```

<h3 id="createsubscription-parameters">Parameters</h3>

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
|body|body|[CreateSubscriptionRequest](#schemacreatesubscriptionrequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShield_20160616.CreateSubscription|

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

<h3 id="createsubscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateSubscriptionResponse](#schemacreatesubscriptionresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteProtection

<a id="opIdDeleteProtection"></a>

> Code samples

```bash
curl 'https://shield.us-east-1.amazonaws.com/#X-Amz-Target=AWSShield_20160616.DeleteProtection' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShield_20160616.DeleteProtection' \
  -d '{
    "ProtectionId": {}
  }'
```

`POST /#X-Amz-Target=AWSShield_20160616.DeleteProtection`

Deletes an Shield Advanced <a>Protection</a>.

> Body parameter

```json
{
  "ProtectionId": {}
}
```

<h3 id="deleteprotection-parameters">Parameters</h3>

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
|body|body|[DeleteProtectionRequest](#schemadeleteprotectionrequest)|true|none|
|» ProtectionId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShield_20160616.DeleteProtection|

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

<h3 id="deleteprotection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteProtectionResponse](#schemadeleteprotectionresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|OptimisticLockException|[OptimisticLockException](#schemaoptimisticlockexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteProtectionGroup

<a id="opIdDeleteProtectionGroup"></a>

> Code samples

```bash
curl 'https://shield.us-east-1.amazonaws.com/#X-Amz-Target=AWSShield_20160616.DeleteProtectionGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShield_20160616.DeleteProtectionGroup' \
  -d '{
    "ProtectionGroupId": {}
  }'
```

`POST /#X-Amz-Target=AWSShield_20160616.DeleteProtectionGroup`

Removes the specified protection group.

> Body parameter

```json
{
  "ProtectionGroupId": {}
}
```

<h3 id="deleteprotectiongroup-parameters">Parameters</h3>

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
|body|body|[DeleteProtectionGroupRequest](#schemadeleteprotectiongrouprequest)|true|none|
|» ProtectionGroupId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShield_20160616.DeleteProtectionGroup|

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

<h3 id="deleteprotectiongroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteProtectionGroupResponse](#schemadeleteprotectiongroupresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|OptimisticLockException|[OptimisticLockException](#schemaoptimisticlockexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteSubscription

<a id="opIdDeleteSubscription"></a>

> Code samples

```bash
curl 'https://shield.us-east-1.amazonaws.com/#X-Amz-Target=AWSShield_20160616.DeleteSubscription' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShield_20160616.DeleteSubscription' \
  -d '{}'
```

`POST /#X-Amz-Target=AWSShield_20160616.DeleteSubscription`

<aside class="warning">
This operation is deprecated
</aside>

Removes Shield Advanced from an account. Shield Advanced requires a 1-year subscription commitment. You cannot delete a subscription prior to the completion of that commitment. 

> Body parameter

```json
{}
```

<h3 id="deletesubscription-parameters">Parameters</h3>

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
|body|body|[DeleteSubscriptionRequest](#schemadeletesubscriptionrequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShield_20160616.DeleteSubscription|

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

<h3 id="deletesubscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteSubscriptionResponse](#schemadeletesubscriptionresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|LockedSubscriptionException|[LockedSubscriptionException](#schemalockedsubscriptionexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAttack

<a id="opIdDescribeAttack"></a>

> Code samples

```bash
curl 'https://shield.us-east-1.amazonaws.com/#X-Amz-Target=AWSShield_20160616.DescribeAttack' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShield_20160616.DescribeAttack' \
  -d '{
    "AttackId": {}
  }'
```

`POST /#X-Amz-Target=AWSShield_20160616.DescribeAttack`

Describes the details of a DDoS attack. 

> Body parameter

```json
{
  "AttackId": {}
}
```

<h3 id="describeattack-parameters">Parameters</h3>

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
|body|body|[DescribeAttackRequest](#schemadescribeattackrequest)|true|none|
|» AttackId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShield_20160616.DescribeAttack|

> Example responses

> 200 Response

```json
{
  "Attack": {
    "AttackId": {},
    "ResourceArn": {},
    "SubResources": {},
    "StartTime": {},
    "EndTime": {},
    "AttackCounters": {},
    "AttackProperties": {},
    "Mitigations": {}
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

<h3 id="describeattack-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAttackResponse](#schemadescribeattackresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAttackStatistics

<a id="opIdDescribeAttackStatistics"></a>

> Code samples

```bash
curl 'https://shield.us-east-1.amazonaws.com/#X-Amz-Target=AWSShield_20160616.DescribeAttackStatistics' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShield_20160616.DescribeAttackStatistics' \
  -d '{}'
```

`POST /#X-Amz-Target=AWSShield_20160616.DescribeAttackStatistics`

<p>Provides information about the number and type of attacks Shield has detected in the last year for all resources that belong to your account, regardless of whether you've defined Shield protections for them. This operation is available to Shield customers as well as to Shield Advanced customers.</p> <p>The operation returns data for the time range of midnight UTC, one year ago, to midnight UTC, today. For example, if the current time is <code>2020-10-26 15:39:32 PDT</code>, equal to <code>2020-10-26 22:39:32 UTC</code>, then the time range for the attack data returned is from <code>2019-10-26 00:00:00 UTC</code> to <code>2020-10-26 00:00:00 UTC</code>. </p> <p>The time range indicates the period covered by the attack statistics data items.</p>

> Body parameter

```json
{}
```

<h3 id="describeattackstatistics-parameters">Parameters</h3>

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
|body|body|[DescribeAttackStatisticsRequest](#schemadescribeattackstatisticsrequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShield_20160616.DescribeAttackStatistics|

> Example responses

> 200 Response

```json
{
  "TimeRange": {
    "FromInclusive": {},
    "ToExclusive": {}
  },
  "DataItems": {}
}
```

> 480 Response

```json
null
```

<h3 id="describeattackstatistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAttackStatisticsResponse](#schemadescribeattackstatisticsresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDRTAccess

<a id="opIdDescribeDRTAccess"></a>

> Code samples

```bash
curl 'https://shield.us-east-1.amazonaws.com/#X-Amz-Target=AWSShield_20160616.DescribeDRTAccess' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShield_20160616.DescribeDRTAccess' \
  -d '{}'
```

`POST /#X-Amz-Target=AWSShield_20160616.DescribeDRTAccess`

Returns the current role and list of Amazon S3 log buckets used by the Shield Response Team (SRT) to access your Amazon Web Services account while assisting with attack mitigation.

> Body parameter

```json
{}
```

<h3 id="describedrtaccess-parameters">Parameters</h3>

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
|body|body|[DescribeDRTAccessRequest](#schemadescribedrtaccessrequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShield_20160616.DescribeDRTAccess|

> Example responses

> 200 Response

```json
{
  "RoleArn": {},
  "LogBucketList": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="describedrtaccess-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDRTAccessResponse](#schemadescribedrtaccessresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeEmergencyContactSettings

<a id="opIdDescribeEmergencyContactSettings"></a>

> Code samples

```bash
curl 'https://shield.us-east-1.amazonaws.com/#X-Amz-Target=AWSShield_20160616.DescribeEmergencyContactSettings' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShield_20160616.DescribeEmergencyContactSettings' \
  -d '{}'
```

`POST /#X-Amz-Target=AWSShield_20160616.DescribeEmergencyContactSettings`

A list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you if you have proactive engagement enabled, for escalations to the SRT and to initiate proactive customer support.

> Body parameter

```json
{}
```

<h3 id="describeemergencycontactsettings-parameters">Parameters</h3>

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
|body|body|[DescribeEmergencyContactSettingsRequest](#schemadescribeemergencycontactsettingsrequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShield_20160616.DescribeEmergencyContactSettings|

> Example responses

> 200 Response

```json
{
  "EmergencyContactList": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="describeemergencycontactsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEmergencyContactSettingsResponse](#schemadescribeemergencycontactsettingsresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeProtection

<a id="opIdDescribeProtection"></a>

> Code samples

```bash
curl 'https://shield.us-east-1.amazonaws.com/#X-Amz-Target=AWSShield_20160616.DescribeProtection' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShield_20160616.DescribeProtection' \
  -d '{
    "ProtectionId": {},
    "ResourceArn": {}
  }'
```

`POST /#X-Amz-Target=AWSShield_20160616.DescribeProtection`

Lists the details of a <a>Protection</a> object.

> Body parameter

```json
{
  "ProtectionId": {},
  "ResourceArn": {}
}
```

<h3 id="describeprotection-parameters">Parameters</h3>

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
|body|body|[DescribeProtectionRequest](#schemadescribeprotectionrequest)|true|none|
|» ProtectionId|body|object|false|none|
|» ResourceArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShield_20160616.DescribeProtection|

> Example responses

> 200 Response

```json
{
  "Protection": {
    "Id": {},
    "Name": {},
    "ResourceArn": {},
    "HealthCheckIds": {},
    "ProtectionArn": {},
    "ApplicationLayerAutomaticResponseConfiguration": {
      "Status": {},
      "Action": {
        "Block": {},
        "Count": {}
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

<h3 id="describeprotection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeProtectionResponse](#schemadescribeprotectionresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeProtectionGroup

<a id="opIdDescribeProtectionGroup"></a>

> Code samples

```bash
curl 'https://shield.us-east-1.amazonaws.com/#X-Amz-Target=AWSShield_20160616.DescribeProtectionGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShield_20160616.DescribeProtectionGroup' \
  -d '{
    "ProtectionGroupId": {}
  }'
```

`POST /#X-Amz-Target=AWSShield_20160616.DescribeProtectionGroup`

Returns the specification for the specified protection group.

> Body parameter

```json
{
  "ProtectionGroupId": {}
}
```

<h3 id="describeprotectiongroup-parameters">Parameters</h3>

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
|body|body|[DescribeProtectionGroupRequest](#schemadescribeprotectiongrouprequest)|true|none|
|» ProtectionGroupId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShield_20160616.DescribeProtectionGroup|

> Example responses

> 200 Response

```json
{
  "ProtectionGroup": {
    "ProtectionGroupId": {},
    "Aggregation": {},
    "Pattern": {},
    "ResourceType": {},
    "Members": {},
    "ProtectionGroupArn": {}
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

<h3 id="describeprotectiongroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeProtectionGroupResponse](#schemadescribeprotectiongroupresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeSubscription

<a id="opIdDescribeSubscription"></a>

> Code samples

```bash
curl 'https://shield.us-east-1.amazonaws.com/#X-Amz-Target=AWSShield_20160616.DescribeSubscription' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShield_20160616.DescribeSubscription' \
  -d '{}'
```

`POST /#X-Amz-Target=AWSShield_20160616.DescribeSubscription`

Provides details about the Shield Advanced subscription for an account.

> Body parameter

```json
{}
```

<h3 id="describesubscription-parameters">Parameters</h3>

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
|body|body|[DescribeSubscriptionRequest](#schemadescribesubscriptionrequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShield_20160616.DescribeSubscription|

> Example responses

> 200 Response

```json
{
  "Subscription": {
    "StartTime": {},
    "EndTime": {},
    "TimeCommitmentInSeconds": {},
    "AutoRenew": {},
    "Limits": {},
    "ProactiveEngagementStatus": {},
    "SubscriptionLimits": {
      "ProtectionLimits": {
        "ProtectedResourceTypeLimits": {}
      },
      "ProtectionGroupLimits": {
        "MaxProtectionGroups": {},
        "PatternTypeLimits": {
          "ArbitraryPatternLimits": {
            "MaxMembers": {}
          }
        }
      }
    },
    "SubscriptionArn": {}
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

<h3 id="describesubscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeSubscriptionResponse](#schemadescribesubscriptionresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisableApplicationLayerAutomaticResponse

<a id="opIdDisableApplicationLayerAutomaticResponse"></a>

> Code samples

```bash
curl 'https://shield.us-east-1.amazonaws.com/#X-Amz-Target=AWSShield_20160616.DisableApplicationLayerAutomaticResponse' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShield_20160616.DisableApplicationLayerAutomaticResponse' \
  -d '{
    "ResourceArn": {}
  }'
```

`POST /#X-Amz-Target=AWSShield_20160616.DisableApplicationLayerAutomaticResponse`

Disable the Shield Advanced automatic application layer DDoS mitigation feature for the protected resource. This stops Shield Advanced from creating, verifying, and applying WAF rules for attacks that it detects for the resource. 

> Body parameter

```json
{
  "ResourceArn": {}
}
```

<h3 id="disableapplicationlayerautomaticresponse-parameters">Parameters</h3>

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
|body|body|[DisableApplicationLayerAutomaticResponseRequest](#schemadisableapplicationlayerautomaticresponserequest)|true|none|
|» ResourceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShield_20160616.DisableApplicationLayerAutomaticResponse|

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

<h3 id="disableapplicationlayerautomaticresponse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisableApplicationLayerAutomaticResponseResponse](#schemadisableapplicationlayerautomaticresponseresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|OptimisticLockException|[OptimisticLockException](#schemaoptimisticlockexception)|
|484|484|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisableProactiveEngagement

<a id="opIdDisableProactiveEngagement"></a>

> Code samples

```bash
curl 'https://shield.us-east-1.amazonaws.com/#X-Amz-Target=AWSShield_20160616.DisableProactiveEngagement' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShield_20160616.DisableProactiveEngagement' \
  -d '{}'
```

`POST /#X-Amz-Target=AWSShield_20160616.DisableProactiveEngagement`

Removes authorization from the Shield Response Team (SRT) to notify contacts about escalations to the SRT and to initiate proactive customer support.

> Body parameter

```json
{}
```

<h3 id="disableproactiveengagement-parameters">Parameters</h3>

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
|body|body|[DisableProactiveEngagementRequest](#schemadisableproactiveengagementrequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShield_20160616.DisableProactiveEngagement|

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

<h3 id="disableproactiveengagement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisableProactiveEngagementResponse](#schemadisableproactiveengagementresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|OptimisticLockException|[OptimisticLockException](#schemaoptimisticlockexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateDRTLogBucket

<a id="opIdDisassociateDRTLogBucket"></a>

> Code samples

```bash
curl 'https://shield.us-east-1.amazonaws.com/#X-Amz-Target=AWSShield_20160616.DisassociateDRTLogBucket' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShield_20160616.DisassociateDRTLogBucket' \
  -d '{
    "LogBucket": {}
  }'
```

`POST /#X-Amz-Target=AWSShield_20160616.DisassociateDRTLogBucket`

Removes the Shield Response Team's (SRT) access to the specified Amazon S3 bucket containing the logs that you shared previously.

> Body parameter

```json
{
  "LogBucket": {}
}
```

<h3 id="disassociatedrtlogbucket-parameters">Parameters</h3>

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
|body|body|[DisassociateDRTLogBucketRequest](#schemadisassociatedrtlogbucketrequest)|true|none|
|» LogBucket|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShield_20160616.DisassociateDRTLogBucket|

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

<h3 id="disassociatedrtlogbucket-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateDRTLogBucketResponse](#schemadisassociatedrtlogbucketresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|482|482|NoAssociatedRoleException|[NoAssociatedRoleException](#schemanoassociatedroleexception)|
|483|483|AccessDeniedForDependencyException|[AccessDeniedForDependencyException](#schemaaccessdeniedfordependencyexception)|
|484|484|OptimisticLockException|[OptimisticLockException](#schemaoptimisticlockexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateDRTRole

<a id="opIdDisassociateDRTRole"></a>

> Code samples

```bash
curl 'https://shield.us-east-1.amazonaws.com/#X-Amz-Target=AWSShield_20160616.DisassociateDRTRole' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShield_20160616.DisassociateDRTRole' \
  -d '{}'
```

`POST /#X-Amz-Target=AWSShield_20160616.DisassociateDRTRole`

Removes the Shield Response Team's (SRT) access to your Amazon Web Services account.

> Body parameter

```json
{}
```

<h3 id="disassociatedrtrole-parameters">Parameters</h3>

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
|body|body|[DisassociateDRTRoleRequest](#schemadisassociatedrtrolerequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShield_20160616.DisassociateDRTRole|

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

<h3 id="disassociatedrtrole-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateDRTRoleResponse](#schemadisassociatedrtroleresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|482|482|OptimisticLockException|[OptimisticLockException](#schemaoptimisticlockexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateHealthCheck

<a id="opIdDisassociateHealthCheck"></a>

> Code samples

```bash
curl 'https://shield.us-east-1.amazonaws.com/#X-Amz-Target=AWSShield_20160616.DisassociateHealthCheck' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShield_20160616.DisassociateHealthCheck' \
  -d '{
    "ProtectionId": {},
    "HealthCheckArn": {}
  }'
```

`POST /#X-Amz-Target=AWSShield_20160616.DisassociateHealthCheck`

<p>Removes health-based detection from the Shield Advanced protection for a resource. Shield Advanced health-based detection uses the health of your Amazon Web Services resource to improve responsiveness and accuracy in attack detection and response. </p> <p>You define the health check in Route 53 and then associate or disassociate it with your Shield Advanced protection. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/ddos-overview.html#ddos-advanced-health-check-option">Shield Advanced Health-Based Detection</a> in the <i>WAF Developer Guide</i>. </p>

> Body parameter

```json
{
  "ProtectionId": {},
  "HealthCheckArn": {}
}
```

<h3 id="disassociatehealthcheck-parameters">Parameters</h3>

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
|body|body|[DisassociateHealthCheckRequest](#schemadisassociatehealthcheckrequest)|true|none|
|» ProtectionId|body|object|true|none|
|» HealthCheckArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShield_20160616.DisassociateHealthCheck|

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

<h3 id="disassociatehealthcheck-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateHealthCheckResponse](#schemadisassociatehealthcheckresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|OptimisticLockException|[OptimisticLockException](#schemaoptimisticlockexception)|
|484|484|InvalidResourceException|[InvalidResourceException](#schemainvalidresourceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## EnableApplicationLayerAutomaticResponse

<a id="opIdEnableApplicationLayerAutomaticResponse"></a>

> Code samples

```bash
curl 'https://shield.us-east-1.amazonaws.com/#X-Amz-Target=AWSShield_20160616.EnableApplicationLayerAutomaticResponse' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShield_20160616.EnableApplicationLayerAutomaticResponse' \
  -d '{
    "ResourceArn": {},
    "Action": {
      "Block": {},
      "Count": {}
    }
  }'
```

`POST /#X-Amz-Target=AWSShield_20160616.EnableApplicationLayerAutomaticResponse`

<p>Enable the Shield Advanced automatic application layer DDoS mitigation for the protected resource. </p> <note> <p>This feature is available for Amazon CloudFront distributions and Application Load Balancers only.</p> </note> <p>This causes Shield Advanced to create, verify, and apply WAF rules for DDoS attacks that it detects for the resource. Shield Advanced applies the rules in a Shield rule group inside the web ACL that you've associated with the resource. For information about how automatic mitigation works and the requirements for using it, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/ddos-advanced-automatic-app-layer-response.html">Shield Advanced automatic application layer DDoS mitigation</a>.</p> <note> <p>Don't use this action to make changes to automatic mitigation settings when it's already enabled for a resource. Instead, use <a>UpdateApplicationLayerAutomaticResponse</a>.</p> </note> <p>To use this feature, you must associate a web ACL with the protected resource. The web ACL must be created using the latest version of WAF (v2). You can associate the web ACL through the Shield Advanced console at <a href="https://console.aws.amazon.com/wafv2/shieldv2#/">https://console.aws.amazon.com/wafv2/shieldv2#/</a>. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/getting-started-ddos.html">Getting Started with Shield Advanced</a>. You can also associate the web ACL to the resource through the WAF console or the WAF API, but you must manage Shield Advanced automatic mitigation through Shield Advanced. For information about WAF, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">WAF Developer Guide</a>.</p>

> Body parameter

```json
{
  "ResourceArn": {},
  "Action": {
    "Block": {},
    "Count": {}
  }
}
```

<h3 id="enableapplicationlayerautomaticresponse-parameters">Parameters</h3>

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
|body|body|[EnableApplicationLayerAutomaticResponseRequest](#schemaenableapplicationlayerautomaticresponserequest)|true|none|
|» ResourceArn|body|object|true|none|
|» Action|body|object|true|none|
|» » Block|body|object|false|none|
|» » Count|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShield_20160616.EnableApplicationLayerAutomaticResponse|

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

<h3 id="enableapplicationlayerautomaticresponse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EnableApplicationLayerAutomaticResponseResponse](#schemaenableapplicationlayerautomaticresponseresponse)|
|480|480|LimitsExceededException|[LimitsExceededException](#schemalimitsexceededexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|484|484|OptimisticLockException|[OptimisticLockException](#schemaoptimisticlockexception)|
|485|485|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## EnableProactiveEngagement

<a id="opIdEnableProactiveEngagement"></a>

> Code samples

```bash
curl 'https://shield.us-east-1.amazonaws.com/#X-Amz-Target=AWSShield_20160616.EnableProactiveEngagement' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShield_20160616.EnableProactiveEngagement' \
  -d '{}'
```

`POST /#X-Amz-Target=AWSShield_20160616.EnableProactiveEngagement`

Authorizes the Shield Response Team (SRT) to use email and phone to notify contacts about escalations to the SRT and to initiate proactive customer support.

> Body parameter

```json
{}
```

<h3 id="enableproactiveengagement-parameters">Parameters</h3>

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
|body|body|[EnableProactiveEngagementRequest](#schemaenableproactiveengagementrequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShield_20160616.EnableProactiveEngagement|

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

<h3 id="enableproactiveengagement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EnableProactiveEngagementResponse](#schemaenableproactiveengagementresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|OptimisticLockException|[OptimisticLockException](#schemaoptimisticlockexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSubscriptionState

<a id="opIdGetSubscriptionState"></a>

> Code samples

```bash
curl 'https://shield.us-east-1.amazonaws.com/#X-Amz-Target=AWSShield_20160616.GetSubscriptionState' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShield_20160616.GetSubscriptionState' \
  -d '{}'
```

`POST /#X-Amz-Target=AWSShield_20160616.GetSubscriptionState`

Returns the <code>SubscriptionState</code>, either <code>Active</code> or <code>Inactive</code>.

> Body parameter

```json
{}
```

<h3 id="getsubscriptionstate-parameters">Parameters</h3>

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
|body|body|[GetSubscriptionStateRequest](#schemagetsubscriptionstaterequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShield_20160616.GetSubscriptionState|

> Example responses

> 200 Response

```json
{
  "SubscriptionState": {}
}
```

> 480 Response

```json
null
```

<h3 id="getsubscriptionstate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSubscriptionStateResponse](#schemagetsubscriptionstateresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAttacks

<a id="opIdListAttacks"></a>

> Code samples

```bash
curl 'https://shield.us-east-1.amazonaws.com/#X-Amz-Target=AWSShield_20160616.ListAttacks' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShield_20160616.ListAttacks' \
  -d '{
    "ResourceArns": {},
    "StartTime": {
      "FromInclusive": {},
      "ToExclusive": {}
    },
    "EndTime": {
      "FromInclusive": {},
      "ToExclusive": {}
    },
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSShield_20160616.ListAttacks`

Returns all ongoing DDoS attacks or all DDoS attacks during a specified time period.

> Body parameter

```json
{
  "ResourceArns": {},
  "StartTime": {
    "FromInclusive": {},
    "ToExclusive": {}
  },
  "EndTime": {
    "FromInclusive": {},
    "ToExclusive": {}
  },
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listattacks-parameters">Parameters</h3>

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
|body|body|[ListAttacksRequest](#schemalistattacksrequest)|true|none|
|» ResourceArns|body|object|false|none|
|» StartTime|body|object|false|none|
|» » FromInclusive|body|object|false|none|
|» » ToExclusive|body|object|false|none|
|» EndTime|body|object|false|none|
|» » FromInclusive|body|object|false|none|
|» » ToExclusive|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShield_20160616.ListAttacks|

> Example responses

> 200 Response

```json
{
  "AttackSummaries": {},
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

<h3 id="listattacks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAttacksResponse](#schemalistattacksresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListProtectionGroups

<a id="opIdListProtectionGroups"></a>

> Code samples

```bash
curl 'https://shield.us-east-1.amazonaws.com/#X-Amz-Target=AWSShield_20160616.ListProtectionGroups' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShield_20160616.ListProtectionGroups' \
  -d '{
    "NextToken": {},
    "MaxResults": {},
    "InclusionFilters": {
      "ProtectionGroupIds": {},
      "Patterns": {},
      "ResourceTypes": {},
      "Aggregations": {}
    }
  }'
```

`POST /#X-Amz-Target=AWSShield_20160616.ListProtectionGroups`

Retrieves <a>ProtectionGroup</a> objects for the account. You can retrieve all protection groups or you can provide filtering criteria and retrieve just the subset of protection groups that match the criteria. 

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {},
  "InclusionFilters": {
    "ProtectionGroupIds": {},
    "Patterns": {},
    "ResourceTypes": {},
    "Aggregations": {}
  }
}
```

<h3 id="listprotectiongroups-parameters">Parameters</h3>

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
|body|body|[ListProtectionGroupsRequest](#schemalistprotectiongroupsrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» InclusionFilters|body|object|false|none|
|» » ProtectionGroupIds|body|object|false|none|
|» » Patterns|body|object|false|none|
|» » ResourceTypes|body|object|false|none|
|» » Aggregations|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShield_20160616.ListProtectionGroups|

> Example responses

> 200 Response

```json
{
  "ProtectionGroups": {},
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

<h3 id="listprotectiongroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListProtectionGroupsResponse](#schemalistprotectiongroupsresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidPaginationTokenException|[InvalidPaginationTokenException](#schemainvalidpaginationtokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListProtections

<a id="opIdListProtections"></a>

> Code samples

```bash
curl 'https://shield.us-east-1.amazonaws.com/#X-Amz-Target=AWSShield_20160616.ListProtections' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShield_20160616.ListProtections' \
  -d '{
    "NextToken": {},
    "MaxResults": {},
    "InclusionFilters": {
      "ResourceArns": {},
      "ProtectionNames": {},
      "ResourceTypes": {}
    }
  }'
```

`POST /#X-Amz-Target=AWSShield_20160616.ListProtections`

Retrieves <a>Protection</a> objects for the account. You can retrieve all protections or you can provide filtering criteria and retrieve just the subset of protections that match the criteria. 

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {},
  "InclusionFilters": {
    "ResourceArns": {},
    "ProtectionNames": {},
    "ResourceTypes": {}
  }
}
```

<h3 id="listprotections-parameters">Parameters</h3>

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
|body|body|[ListProtectionsRequest](#schemalistprotectionsrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» InclusionFilters|body|object|false|none|
|» » ResourceArns|body|object|false|none|
|» » ProtectionNames|body|object|false|none|
|» » ResourceTypes|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShield_20160616.ListProtections|

> Example responses

> 200 Response

```json
{
  "Protections": {},
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

<h3 id="listprotections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListProtectionsResponse](#schemalistprotectionsresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidPaginationTokenException|[InvalidPaginationTokenException](#schemainvalidpaginationtokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListResourcesInProtectionGroup

<a id="opIdListResourcesInProtectionGroup"></a>

> Code samples

```bash
curl 'https://shield.us-east-1.amazonaws.com/#X-Amz-Target=AWSShield_20160616.ListResourcesInProtectionGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShield_20160616.ListResourcesInProtectionGroup' \
  -d '{
    "ProtectionGroupId": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSShield_20160616.ListResourcesInProtectionGroup`

Retrieves the resources that are included in the protection group. 

> Body parameter

```json
{
  "ProtectionGroupId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listresourcesinprotectiongroup-parameters">Parameters</h3>

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
|body|body|[ListResourcesInProtectionGroupRequest](#schemalistresourcesinprotectiongrouprequest)|true|none|
|» ProtectionGroupId|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShield_20160616.ListResourcesInProtectionGroup|

> Example responses

> 200 Response

```json
{
  "ResourceArns": {},
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

<h3 id="listresourcesinprotectiongroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListResourcesInProtectionGroupResponse](#schemalistresourcesinprotectiongroupresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidPaginationTokenException|[InvalidPaginationTokenException](#schemainvalidpaginationtokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://shield.us-east-1.amazonaws.com/#X-Amz-Target=AWSShield_20160616.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShield_20160616.ListTagsForResource' \
  -d '{
    "ResourceARN": {}
  }'
```

`POST /#X-Amz-Target=AWSShield_20160616.ListTagsForResource`

Gets information about Amazon Web Services tags for a specified Amazon Resource Name (ARN) in Shield.

> Body parameter

```json
{
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
|» ResourceARN|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShield_20160616.ListTagsForResource|

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
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|InvalidResourceException|[InvalidResourceException](#schemainvalidresourceexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://shield.us-east-1.amazonaws.com/#X-Amz-Target=AWSShield_20160616.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShield_20160616.TagResource' \
  -d '{
    "ResourceARN": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AWSShield_20160616.TagResource`

Adds or updates tags for a resource in Shield.

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
|X-Amz-Target|AWSShield_20160616.TagResource|

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
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|InvalidResourceException|[InvalidResourceException](#schemainvalidresourceexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://shield.us-east-1.amazonaws.com/#X-Amz-Target=AWSShield_20160616.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShield_20160616.UntagResource' \
  -d '{
    "ResourceARN": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=AWSShield_20160616.UntagResource`

Removes tags from a resource in Shield.

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
|X-Amz-Target|AWSShield_20160616.UntagResource|

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
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|InvalidResourceException|[InvalidResourceException](#schemainvalidresourceexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateApplicationLayerAutomaticResponse

<a id="opIdUpdateApplicationLayerAutomaticResponse"></a>

> Code samples

```bash
curl 'https://shield.us-east-1.amazonaws.com/#X-Amz-Target=AWSShield_20160616.UpdateApplicationLayerAutomaticResponse' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShield_20160616.UpdateApplicationLayerAutomaticResponse' \
  -d '{
    "ResourceArn": {},
    "Action": {
      "Block": {},
      "Count": {}
    }
  }'
```

`POST /#X-Amz-Target=AWSShield_20160616.UpdateApplicationLayerAutomaticResponse`

Updates an existing Shield Advanced automatic application layer DDoS mitigation configuration for the specified resource.

> Body parameter

```json
{
  "ResourceArn": {},
  "Action": {
    "Block": {},
    "Count": {}
  }
}
```

<h3 id="updateapplicationlayerautomaticresponse-parameters">Parameters</h3>

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
|body|body|[UpdateApplicationLayerAutomaticResponseRequest](#schemaupdateapplicationlayerautomaticresponserequest)|true|none|
|» ResourceArn|body|object|true|none|
|» Action|body|object|true|none|
|» » Block|body|object|false|none|
|» » Count|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShield_20160616.UpdateApplicationLayerAutomaticResponse|

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

<h3 id="updateapplicationlayerautomaticresponse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateApplicationLayerAutomaticResponseResponse](#schemaupdateapplicationlayerautomaticresponseresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|OptimisticLockException|[OptimisticLockException](#schemaoptimisticlockexception)|
|484|484|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateEmergencyContactSettings

<a id="opIdUpdateEmergencyContactSettings"></a>

> Code samples

```bash
curl 'https://shield.us-east-1.amazonaws.com/#X-Amz-Target=AWSShield_20160616.UpdateEmergencyContactSettings' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShield_20160616.UpdateEmergencyContactSettings' \
  -d '{
    "EmergencyContactList": {}
  }'
```

`POST /#X-Amz-Target=AWSShield_20160616.UpdateEmergencyContactSettings`

Updates the details of the list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you if you have proactive engagement enabled, for escalations to the SRT and to initiate proactive customer support.

> Body parameter

```json
{
  "EmergencyContactList": {}
}
```

<h3 id="updateemergencycontactsettings-parameters">Parameters</h3>

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
|body|body|[UpdateEmergencyContactSettingsRequest](#schemaupdateemergencycontactsettingsrequest)|true|none|
|» EmergencyContactList|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShield_20160616.UpdateEmergencyContactSettings|

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

<h3 id="updateemergencycontactsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateEmergencyContactSettingsResponse](#schemaupdateemergencycontactsettingsresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|OptimisticLockException|[OptimisticLockException](#schemaoptimisticlockexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateProtectionGroup

<a id="opIdUpdateProtectionGroup"></a>

> Code samples

```bash
curl 'https://shield.us-east-1.amazonaws.com/#X-Amz-Target=AWSShield_20160616.UpdateProtectionGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShield_20160616.UpdateProtectionGroup' \
  -d '{
    "ProtectionGroupId": {},
    "Aggregation": {},
    "Pattern": {},
    "ResourceType": {},
    "Members": {}
  }'
```

`POST /#X-Amz-Target=AWSShield_20160616.UpdateProtectionGroup`

Updates an existing protection group. A protection group is a grouping of protected resources so they can be handled as a collective. This resource grouping improves the accuracy of detection and reduces false positives. 

> Body parameter

```json
{
  "ProtectionGroupId": {},
  "Aggregation": {},
  "Pattern": {},
  "ResourceType": {},
  "Members": {}
}
```

<h3 id="updateprotectiongroup-parameters">Parameters</h3>

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
|body|body|[UpdateProtectionGroupRequest](#schemaupdateprotectiongrouprequest)|true|none|
|» ProtectionGroupId|body|object|true|none|
|» Aggregation|body|object|true|none|
|» Pattern|body|object|true|none|
|» ResourceType|body|object|false|none|
|» Members|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShield_20160616.UpdateProtectionGroup|

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

<h3 id="updateprotectiongroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateProtectionGroupResponse](#schemaupdateprotectiongroupresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|OptimisticLockException|[OptimisticLockException](#schemaoptimisticlockexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateSubscription

<a id="opIdUpdateSubscription"></a>

> Code samples

```bash
curl 'https://shield.us-east-1.amazonaws.com/#X-Amz-Target=AWSShield_20160616.UpdateSubscription' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShield_20160616.UpdateSubscription' \
  -d '{
    "AutoRenew": {}
  }'
```

`POST /#X-Amz-Target=AWSShield_20160616.UpdateSubscription`

<p>Updates the details of an existing subscription. Only enter values for parameters you want to change. Empty parameters are not updated.</p> <note> <p>For accounts that are members of an Organizations organization, Shield Advanced subscriptions are billed against the organization's payer account, regardless of whether the payer account itself is subscribed. </p> </note>

> Body parameter

```json
{
  "AutoRenew": {}
}
```

<h3 id="updatesubscription-parameters">Parameters</h3>

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
|body|body|[UpdateSubscriptionRequest](#schemaupdatesubscriptionrequest)|true|none|
|» AutoRenew|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShield_20160616.UpdateSubscription|

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

<h3 id="updatesubscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateSubscriptionResponse](#schemaupdatesubscriptionresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|LockedSubscriptionException|[LockedSubscriptionException](#schemalockedsubscriptionexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|484|484|OptimisticLockException|[OptimisticLockException](#schemaoptimisticlockexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AssociateDRTLogBucketResponse">AssociateDRTLogBucketResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociatedrtlogbucketresponse"></a>
<a id="schema_AssociateDRTLogBucketResponse"></a>
<a id="tocSassociatedrtlogbucketresponse"></a>
<a id="tocsassociatedrtlogbucketresponse"></a>

```json
{}
```

<h2 id="tocS_AssociateDRTLogBucketRequest">AssociateDRTLogBucketRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatedrtlogbucketrequest"></a>
<a id="schema_AssociateDRTLogBucketRequest"></a>
<a id="tocSassociatedrtlogbucketrequest"></a>
<a id="tocsassociatedrtlogbucketrequest"></a>

```json
{
  "LogBucket": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LogBucket|object|true|none|none|

<h2 id="tocS_InternalErrorException">InternalErrorException</h2>
<!-- backwards compatibility -->
<a id="schemainternalerrorexception"></a>
<a id="schema_InternalErrorException"></a>
<a id="tocSinternalerrorexception"></a>
<a id="tocsinternalerrorexception"></a>

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

<h2 id="tocS_NoAssociatedRoleException">NoAssociatedRoleException</h2>
<!-- backwards compatibility -->
<a id="schemanoassociatedroleexception"></a>
<a id="schema_NoAssociatedRoleException"></a>
<a id="tocSnoassociatedroleexception"></a>
<a id="tocsnoassociatedroleexception"></a>

```json
null
```

<h2 id="tocS_LimitsExceededException">LimitsExceededException</h2>
<!-- backwards compatibility -->
<a id="schemalimitsexceededexception"></a>
<a id="schema_LimitsExceededException"></a>
<a id="tocSlimitsexceededexception"></a>
<a id="tocslimitsexceededexception"></a>

```json
null
```

<h2 id="tocS_InvalidParameterException">InvalidParameterException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidparameterexception"></a>
<a id="schema_InvalidParameterException"></a>
<a id="tocSinvalidparameterexception"></a>
<a id="tocsinvalidparameterexception"></a>

```json
null
```

<h2 id="tocS_AccessDeniedForDependencyException">AccessDeniedForDependencyException</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdeniedfordependencyexception"></a>
<a id="schema_AccessDeniedForDependencyException"></a>
<a id="tocSaccessdeniedfordependencyexception"></a>
<a id="tocsaccessdeniedfordependencyexception"></a>

```json
null
```

<h2 id="tocS_OptimisticLockException">OptimisticLockException</h2>
<!-- backwards compatibility -->
<a id="schemaoptimisticlockexception"></a>
<a id="schema_OptimisticLockException"></a>
<a id="tocSoptimisticlockexception"></a>
<a id="tocsoptimisticlockexception"></a>

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

<h2 id="tocS_AssociateDRTRoleResponse">AssociateDRTRoleResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociatedrtroleresponse"></a>
<a id="schema_AssociateDRTRoleResponse"></a>
<a id="tocSassociatedrtroleresponse"></a>
<a id="tocsassociatedrtroleresponse"></a>

```json
{}
```

<h2 id="tocS_AssociateDRTRoleRequest">AssociateDRTRoleRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatedrtrolerequest"></a>
<a id="schema_AssociateDRTRoleRequest"></a>
<a id="tocSassociatedrtrolerequest"></a>
<a id="tocsassociatedrtrolerequest"></a>

```json
{
  "RoleArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoleArn|object|true|none|none|

<h2 id="tocS_AssociateHealthCheckResponse">AssociateHealthCheckResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociatehealthcheckresponse"></a>
<a id="schema_AssociateHealthCheckResponse"></a>
<a id="tocSassociatehealthcheckresponse"></a>
<a id="tocsassociatehealthcheckresponse"></a>

```json
{}
```

<h2 id="tocS_AssociateHealthCheckRequest">AssociateHealthCheckRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatehealthcheckrequest"></a>
<a id="schema_AssociateHealthCheckRequest"></a>
<a id="tocSassociatehealthcheckrequest"></a>
<a id="tocsassociatehealthcheckrequest"></a>

```json
{
  "ProtectionId": {},
  "HealthCheckArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProtectionId|object|true|none|none|
|HealthCheckArn|object|true|none|none|

<h2 id="tocS_InvalidResourceException">InvalidResourceException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidresourceexception"></a>
<a id="schema_InvalidResourceException"></a>
<a id="tocSinvalidresourceexception"></a>
<a id="tocsinvalidresourceexception"></a>

```json
null
```

<h2 id="tocS_AssociateProactiveEngagementDetailsResponse">AssociateProactiveEngagementDetailsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociateproactiveengagementdetailsresponse"></a>
<a id="schema_AssociateProactiveEngagementDetailsResponse"></a>
<a id="tocSassociateproactiveengagementdetailsresponse"></a>
<a id="tocsassociateproactiveengagementdetailsresponse"></a>

```json
{}
```

<h2 id="tocS_AssociateProactiveEngagementDetailsRequest">AssociateProactiveEngagementDetailsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociateproactiveengagementdetailsrequest"></a>
<a id="schema_AssociateProactiveEngagementDetailsRequest"></a>
<a id="tocSassociateproactiveengagementdetailsrequest"></a>
<a id="tocsassociateproactiveengagementdetailsrequest"></a>

```json
{
  "EmergencyContactList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EmergencyContactList|object|true|none|none|

<h2 id="tocS_CreateProtectionResponse">CreateProtectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateprotectionresponse"></a>
<a id="schema_CreateProtectionResponse"></a>
<a id="tocScreateprotectionresponse"></a>
<a id="tocscreateprotectionresponse"></a>

```json
{
  "ProtectionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProtectionId|object|false|none|none|

<h2 id="tocS_CreateProtectionRequest">CreateProtectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateprotectionrequest"></a>
<a id="schema_CreateProtectionRequest"></a>
<a id="tocScreateprotectionrequest"></a>
<a id="tocscreateprotectionrequest"></a>

```json
{
  "Name": {},
  "ResourceArn": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|ResourceArn|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_ResourceAlreadyExistsException">ResourceAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcealreadyexistsexception"></a>
<a id="schema_ResourceAlreadyExistsException"></a>
<a id="tocSresourcealreadyexistsexception"></a>
<a id="tocsresourcealreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_CreateProtectionGroupResponse">CreateProtectionGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateprotectiongroupresponse"></a>
<a id="schema_CreateProtectionGroupResponse"></a>
<a id="tocScreateprotectiongroupresponse"></a>
<a id="tocscreateprotectiongroupresponse"></a>

```json
{}
```

<h2 id="tocS_CreateProtectionGroupRequest">CreateProtectionGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateprotectiongrouprequest"></a>
<a id="schema_CreateProtectionGroupRequest"></a>
<a id="tocScreateprotectiongrouprequest"></a>
<a id="tocscreateprotectiongrouprequest"></a>

```json
{
  "ProtectionGroupId": {},
  "Aggregation": {},
  "Pattern": {},
  "ResourceType": {},
  "Members": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProtectionGroupId|object|true|none|none|
|Aggregation|object|true|none|none|
|Pattern|object|true|none|none|
|ResourceType|object|false|none|none|
|Members|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateSubscriptionResponse">CreateSubscriptionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatesubscriptionresponse"></a>
<a id="schema_CreateSubscriptionResponse"></a>
<a id="tocScreatesubscriptionresponse"></a>
<a id="tocscreatesubscriptionresponse"></a>

```json
{}
```

<h2 id="tocS_CreateSubscriptionRequest">CreateSubscriptionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatesubscriptionrequest"></a>
<a id="schema_CreateSubscriptionRequest"></a>
<a id="tocScreatesubscriptionrequest"></a>
<a id="tocscreatesubscriptionrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteProtectionResponse">DeleteProtectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteprotectionresponse"></a>
<a id="schema_DeleteProtectionResponse"></a>
<a id="tocSdeleteprotectionresponse"></a>
<a id="tocsdeleteprotectionresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteProtectionRequest">DeleteProtectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteprotectionrequest"></a>
<a id="schema_DeleteProtectionRequest"></a>
<a id="tocSdeleteprotectionrequest"></a>
<a id="tocsdeleteprotectionrequest"></a>

```json
{
  "ProtectionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProtectionId|object|true|none|none|

<h2 id="tocS_DeleteProtectionGroupResponse">DeleteProtectionGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteprotectiongroupresponse"></a>
<a id="schema_DeleteProtectionGroupResponse"></a>
<a id="tocSdeleteprotectiongroupresponse"></a>
<a id="tocsdeleteprotectiongroupresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteProtectionGroupRequest">DeleteProtectionGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteprotectiongrouprequest"></a>
<a id="schema_DeleteProtectionGroupRequest"></a>
<a id="tocSdeleteprotectiongrouprequest"></a>
<a id="tocsdeleteprotectiongrouprequest"></a>

```json
{
  "ProtectionGroupId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProtectionGroupId|object|true|none|none|

<h2 id="tocS_DeleteSubscriptionResponse">DeleteSubscriptionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletesubscriptionresponse"></a>
<a id="schema_DeleteSubscriptionResponse"></a>
<a id="tocSdeletesubscriptionresponse"></a>
<a id="tocsdeletesubscriptionresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteSubscriptionRequest">DeleteSubscriptionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletesubscriptionrequest"></a>
<a id="schema_DeleteSubscriptionRequest"></a>
<a id="tocSdeletesubscriptionrequest"></a>
<a id="tocsdeletesubscriptionrequest"></a>

```json
{}
```

<h2 id="tocS_LockedSubscriptionException">LockedSubscriptionException</h2>
<!-- backwards compatibility -->
<a id="schemalockedsubscriptionexception"></a>
<a id="schema_LockedSubscriptionException"></a>
<a id="tocSlockedsubscriptionexception"></a>
<a id="tocslockedsubscriptionexception"></a>

```json
null
```

<h2 id="tocS_DescribeAttackResponse">DescribeAttackResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeattackresponse"></a>
<a id="schema_DescribeAttackResponse"></a>
<a id="tocSdescribeattackresponse"></a>
<a id="tocsdescribeattackresponse"></a>

```json
{
  "Attack": {
    "AttackId": {},
    "ResourceArn": {},
    "SubResources": {},
    "StartTime": {},
    "EndTime": {},
    "AttackCounters": {},
    "AttackProperties": {},
    "Mitigations": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attack|object|false|none|none|

<h2 id="tocS_DescribeAttackRequest">DescribeAttackRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeattackrequest"></a>
<a id="schema_DescribeAttackRequest"></a>
<a id="tocSdescribeattackrequest"></a>
<a id="tocsdescribeattackrequest"></a>

```json
{
  "AttackId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttackId|object|true|none|none|

<h2 id="tocS_AccessDeniedException">AccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdeniedexception"></a>
<a id="schema_AccessDeniedException"></a>
<a id="tocSaccessdeniedexception"></a>
<a id="tocsaccessdeniedexception"></a>

```json
null
```

<h2 id="tocS_DescribeAttackStatisticsResponse">DescribeAttackStatisticsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeattackstatisticsresponse"></a>
<a id="schema_DescribeAttackStatisticsResponse"></a>
<a id="tocSdescribeattackstatisticsresponse"></a>
<a id="tocsdescribeattackstatisticsresponse"></a>

```json
{
  "TimeRange": {
    "FromInclusive": {},
    "ToExclusive": {}
  },
  "DataItems": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TimeRange|object|true|none|none|
|DataItems|object|true|none|none|

<h2 id="tocS_DescribeAttackStatisticsRequest">DescribeAttackStatisticsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeattackstatisticsrequest"></a>
<a id="schema_DescribeAttackStatisticsRequest"></a>
<a id="tocSdescribeattackstatisticsrequest"></a>
<a id="tocsdescribeattackstatisticsrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeDRTAccessResponse">DescribeDRTAccessResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribedrtaccessresponse"></a>
<a id="schema_DescribeDRTAccessResponse"></a>
<a id="tocSdescribedrtaccessresponse"></a>
<a id="tocsdescribedrtaccessresponse"></a>

```json
{
  "RoleArn": {},
  "LogBucketList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoleArn|object|false|none|none|
|LogBucketList|object|false|none|none|

<h2 id="tocS_DescribeDRTAccessRequest">DescribeDRTAccessRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedrtaccessrequest"></a>
<a id="schema_DescribeDRTAccessRequest"></a>
<a id="tocSdescribedrtaccessrequest"></a>
<a id="tocsdescribedrtaccessrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeEmergencyContactSettingsResponse">DescribeEmergencyContactSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeemergencycontactsettingsresponse"></a>
<a id="schema_DescribeEmergencyContactSettingsResponse"></a>
<a id="tocSdescribeemergencycontactsettingsresponse"></a>
<a id="tocsdescribeemergencycontactsettingsresponse"></a>

```json
{
  "EmergencyContactList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EmergencyContactList|object|false|none|none|

<h2 id="tocS_DescribeEmergencyContactSettingsRequest">DescribeEmergencyContactSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeemergencycontactsettingsrequest"></a>
<a id="schema_DescribeEmergencyContactSettingsRequest"></a>
<a id="tocSdescribeemergencycontactsettingsrequest"></a>
<a id="tocsdescribeemergencycontactsettingsrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeProtectionResponse">DescribeProtectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeprotectionresponse"></a>
<a id="schema_DescribeProtectionResponse"></a>
<a id="tocSdescribeprotectionresponse"></a>
<a id="tocsdescribeprotectionresponse"></a>

```json
{
  "Protection": {
    "Id": {},
    "Name": {},
    "ResourceArn": {},
    "HealthCheckIds": {},
    "ProtectionArn": {},
    "ApplicationLayerAutomaticResponseConfiguration": {
      "Status": {},
      "Action": {
        "Block": {},
        "Count": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Protection|object|false|none|none|

<h2 id="tocS_DescribeProtectionRequest">DescribeProtectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeprotectionrequest"></a>
<a id="schema_DescribeProtectionRequest"></a>
<a id="tocSdescribeprotectionrequest"></a>
<a id="tocsdescribeprotectionrequest"></a>

```json
{
  "ProtectionId": {},
  "ResourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProtectionId|object|false|none|none|
|ResourceArn|object|false|none|none|

<h2 id="tocS_DescribeProtectionGroupResponse">DescribeProtectionGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeprotectiongroupresponse"></a>
<a id="schema_DescribeProtectionGroupResponse"></a>
<a id="tocSdescribeprotectiongroupresponse"></a>
<a id="tocsdescribeprotectiongroupresponse"></a>

```json
{
  "ProtectionGroup": {
    "ProtectionGroupId": {},
    "Aggregation": {},
    "Pattern": {},
    "ResourceType": {},
    "Members": {},
    "ProtectionGroupArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProtectionGroup|object|true|none|none|

<h2 id="tocS_DescribeProtectionGroupRequest">DescribeProtectionGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeprotectiongrouprequest"></a>
<a id="schema_DescribeProtectionGroupRequest"></a>
<a id="tocSdescribeprotectiongrouprequest"></a>
<a id="tocsdescribeprotectiongrouprequest"></a>

```json
{
  "ProtectionGroupId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProtectionGroupId|object|true|none|none|

<h2 id="tocS_DescribeSubscriptionResponse">DescribeSubscriptionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribesubscriptionresponse"></a>
<a id="schema_DescribeSubscriptionResponse"></a>
<a id="tocSdescribesubscriptionresponse"></a>
<a id="tocsdescribesubscriptionresponse"></a>

```json
{
  "Subscription": {
    "StartTime": {},
    "EndTime": {},
    "TimeCommitmentInSeconds": {},
    "AutoRenew": {},
    "Limits": {},
    "ProactiveEngagementStatus": {},
    "SubscriptionLimits": {
      "ProtectionLimits": {
        "ProtectedResourceTypeLimits": {}
      },
      "ProtectionGroupLimits": {
        "MaxProtectionGroups": {},
        "PatternTypeLimits": {
          "ArbitraryPatternLimits": {
            "MaxMembers": {}
          }
        }
      }
    },
    "SubscriptionArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Subscription|object|false|none|none|

<h2 id="tocS_DescribeSubscriptionRequest">DescribeSubscriptionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribesubscriptionrequest"></a>
<a id="schema_DescribeSubscriptionRequest"></a>
<a id="tocSdescribesubscriptionrequest"></a>
<a id="tocsdescribesubscriptionrequest"></a>

```json
{}
```

<h2 id="tocS_DisableApplicationLayerAutomaticResponseResponse">DisableApplicationLayerAutomaticResponseResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisableapplicationlayerautomaticresponseresponse"></a>
<a id="schema_DisableApplicationLayerAutomaticResponseResponse"></a>
<a id="tocSdisableapplicationlayerautomaticresponseresponse"></a>
<a id="tocsdisableapplicationlayerautomaticresponseresponse"></a>

```json
{}
```

<h2 id="tocS_DisableApplicationLayerAutomaticResponseRequest">DisableApplicationLayerAutomaticResponseRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisableapplicationlayerautomaticresponserequest"></a>
<a id="schema_DisableApplicationLayerAutomaticResponseRequest"></a>
<a id="tocSdisableapplicationlayerautomaticresponserequest"></a>
<a id="tocsdisableapplicationlayerautomaticresponserequest"></a>

```json
{
  "ResourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|

<h2 id="tocS_DisableProactiveEngagementResponse">DisableProactiveEngagementResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisableproactiveengagementresponse"></a>
<a id="schema_DisableProactiveEngagementResponse"></a>
<a id="tocSdisableproactiveengagementresponse"></a>
<a id="tocsdisableproactiveengagementresponse"></a>

```json
{}
```

<h2 id="tocS_DisableProactiveEngagementRequest">DisableProactiveEngagementRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisableproactiveengagementrequest"></a>
<a id="schema_DisableProactiveEngagementRequest"></a>
<a id="tocSdisableproactiveengagementrequest"></a>
<a id="tocsdisableproactiveengagementrequest"></a>

```json
{}
```

<h2 id="tocS_DisassociateDRTLogBucketResponse">DisassociateDRTLogBucketResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatedrtlogbucketresponse"></a>
<a id="schema_DisassociateDRTLogBucketResponse"></a>
<a id="tocSdisassociatedrtlogbucketresponse"></a>
<a id="tocsdisassociatedrtlogbucketresponse"></a>

```json
{}
```

<h2 id="tocS_DisassociateDRTLogBucketRequest">DisassociateDRTLogBucketRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatedrtlogbucketrequest"></a>
<a id="schema_DisassociateDRTLogBucketRequest"></a>
<a id="tocSdisassociatedrtlogbucketrequest"></a>
<a id="tocsdisassociatedrtlogbucketrequest"></a>

```json
{
  "LogBucket": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LogBucket|object|true|none|none|

<h2 id="tocS_DisassociateDRTRoleResponse">DisassociateDRTRoleResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatedrtroleresponse"></a>
<a id="schema_DisassociateDRTRoleResponse"></a>
<a id="tocSdisassociatedrtroleresponse"></a>
<a id="tocsdisassociatedrtroleresponse"></a>

```json
{}
```

<h2 id="tocS_DisassociateDRTRoleRequest">DisassociateDRTRoleRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatedrtrolerequest"></a>
<a id="schema_DisassociateDRTRoleRequest"></a>
<a id="tocSdisassociatedrtrolerequest"></a>
<a id="tocsdisassociatedrtrolerequest"></a>

```json
{}
```

<h2 id="tocS_DisassociateHealthCheckResponse">DisassociateHealthCheckResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatehealthcheckresponse"></a>
<a id="schema_DisassociateHealthCheckResponse"></a>
<a id="tocSdisassociatehealthcheckresponse"></a>
<a id="tocsdisassociatehealthcheckresponse"></a>

```json
{}
```

<h2 id="tocS_DisassociateHealthCheckRequest">DisassociateHealthCheckRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatehealthcheckrequest"></a>
<a id="schema_DisassociateHealthCheckRequest"></a>
<a id="tocSdisassociatehealthcheckrequest"></a>
<a id="tocsdisassociatehealthcheckrequest"></a>

```json
{
  "ProtectionId": {},
  "HealthCheckArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProtectionId|object|true|none|none|
|HealthCheckArn|object|true|none|none|

<h2 id="tocS_EnableApplicationLayerAutomaticResponseResponse">EnableApplicationLayerAutomaticResponseResponse</h2>
<!-- backwards compatibility -->
<a id="schemaenableapplicationlayerautomaticresponseresponse"></a>
<a id="schema_EnableApplicationLayerAutomaticResponseResponse"></a>
<a id="tocSenableapplicationlayerautomaticresponseresponse"></a>
<a id="tocsenableapplicationlayerautomaticresponseresponse"></a>

```json
{}
```

<h2 id="tocS_EnableApplicationLayerAutomaticResponseRequest">EnableApplicationLayerAutomaticResponseRequest</h2>
<!-- backwards compatibility -->
<a id="schemaenableapplicationlayerautomaticresponserequest"></a>
<a id="schema_EnableApplicationLayerAutomaticResponseRequest"></a>
<a id="tocSenableapplicationlayerautomaticresponserequest"></a>
<a id="tocsenableapplicationlayerautomaticresponserequest"></a>

```json
{
  "ResourceArn": {},
  "Action": {
    "Block": {},
    "Count": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|Action|object|true|none|none|

<h2 id="tocS_EnableProactiveEngagementResponse">EnableProactiveEngagementResponse</h2>
<!-- backwards compatibility -->
<a id="schemaenableproactiveengagementresponse"></a>
<a id="schema_EnableProactiveEngagementResponse"></a>
<a id="tocSenableproactiveengagementresponse"></a>
<a id="tocsenableproactiveengagementresponse"></a>

```json
{}
```

<h2 id="tocS_EnableProactiveEngagementRequest">EnableProactiveEngagementRequest</h2>
<!-- backwards compatibility -->
<a id="schemaenableproactiveengagementrequest"></a>
<a id="schema_EnableProactiveEngagementRequest"></a>
<a id="tocSenableproactiveengagementrequest"></a>
<a id="tocsenableproactiveengagementrequest"></a>

```json
{}
```

<h2 id="tocS_GetSubscriptionStateResponse">GetSubscriptionStateResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsubscriptionstateresponse"></a>
<a id="schema_GetSubscriptionStateResponse"></a>
<a id="tocSgetsubscriptionstateresponse"></a>
<a id="tocsgetsubscriptionstateresponse"></a>

```json
{
  "SubscriptionState": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubscriptionState|object|true|none|none|

<h2 id="tocS_GetSubscriptionStateRequest">GetSubscriptionStateRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsubscriptionstaterequest"></a>
<a id="schema_GetSubscriptionStateRequest"></a>
<a id="tocSgetsubscriptionstaterequest"></a>
<a id="tocsgetsubscriptionstaterequest"></a>

```json
{}
```

<h2 id="tocS_ListAttacksResponse">ListAttacksResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistattacksresponse"></a>
<a id="schema_ListAttacksResponse"></a>
<a id="tocSlistattacksresponse"></a>
<a id="tocslistattacksresponse"></a>

```json
{
  "AttackSummaries": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttackSummaries|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListAttacksRequest">ListAttacksRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistattacksrequest"></a>
<a id="schema_ListAttacksRequest"></a>
<a id="tocSlistattacksrequest"></a>
<a id="tocslistattacksrequest"></a>

```json
{
  "ResourceArns": {},
  "StartTime": {
    "FromInclusive": {},
    "ToExclusive": {}
  },
  "EndTime": {
    "FromInclusive": {},
    "ToExclusive": {}
  },
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArns|object|false|none|none|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListProtectionGroupsResponse">ListProtectionGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistprotectiongroupsresponse"></a>
<a id="schema_ListProtectionGroupsResponse"></a>
<a id="tocSlistprotectiongroupsresponse"></a>
<a id="tocslistprotectiongroupsresponse"></a>

```json
{
  "ProtectionGroups": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProtectionGroups|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListProtectionGroupsRequest">ListProtectionGroupsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistprotectiongroupsrequest"></a>
<a id="schema_ListProtectionGroupsRequest"></a>
<a id="tocSlistprotectiongroupsrequest"></a>
<a id="tocslistprotectiongroupsrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "InclusionFilters": {
    "ProtectionGroupIds": {},
    "Patterns": {},
    "ResourceTypes": {},
    "Aggregations": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|InclusionFilters|object|false|none|none|

<h2 id="tocS_InvalidPaginationTokenException">InvalidPaginationTokenException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidpaginationtokenexception"></a>
<a id="schema_InvalidPaginationTokenException"></a>
<a id="tocSinvalidpaginationtokenexception"></a>
<a id="tocsinvalidpaginationtokenexception"></a>

```json
null
```

<h2 id="tocS_ListProtectionsResponse">ListProtectionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistprotectionsresponse"></a>
<a id="schema_ListProtectionsResponse"></a>
<a id="tocSlistprotectionsresponse"></a>
<a id="tocslistprotectionsresponse"></a>

```json
{
  "Protections": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Protections|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListProtectionsRequest">ListProtectionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistprotectionsrequest"></a>
<a id="schema_ListProtectionsRequest"></a>
<a id="tocSlistprotectionsrequest"></a>
<a id="tocslistprotectionsrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "InclusionFilters": {
    "ResourceArns": {},
    "ProtectionNames": {},
    "ResourceTypes": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|InclusionFilters|object|false|none|none|

<h2 id="tocS_ListResourcesInProtectionGroupResponse">ListResourcesInProtectionGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistresourcesinprotectiongroupresponse"></a>
<a id="schema_ListResourcesInProtectionGroupResponse"></a>
<a id="tocSlistresourcesinprotectiongroupresponse"></a>
<a id="tocslistresourcesinprotectiongroupresponse"></a>

```json
{
  "ResourceArns": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArns|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListResourcesInProtectionGroupRequest">ListResourcesInProtectionGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistresourcesinprotectiongrouprequest"></a>
<a id="schema_ListResourcesInProtectionGroupRequest"></a>
<a id="tocSlistresourcesinprotectiongrouprequest"></a>
<a id="tocslistresourcesinprotectiongrouprequest"></a>

```json
{
  "ProtectionGroupId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProtectionGroupId|object|true|none|none|
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
  "ResourceARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|

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

<h2 id="tocS_UpdateApplicationLayerAutomaticResponseResponse">UpdateApplicationLayerAutomaticResponseResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateapplicationlayerautomaticresponseresponse"></a>
<a id="schema_UpdateApplicationLayerAutomaticResponseResponse"></a>
<a id="tocSupdateapplicationlayerautomaticresponseresponse"></a>
<a id="tocsupdateapplicationlayerautomaticresponseresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateApplicationLayerAutomaticResponseRequest">UpdateApplicationLayerAutomaticResponseRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateapplicationlayerautomaticresponserequest"></a>
<a id="schema_UpdateApplicationLayerAutomaticResponseRequest"></a>
<a id="tocSupdateapplicationlayerautomaticresponserequest"></a>
<a id="tocsupdateapplicationlayerautomaticresponserequest"></a>

```json
{
  "ResourceArn": {},
  "Action": {
    "Block": {},
    "Count": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|Action|object|true|none|none|

<h2 id="tocS_UpdateEmergencyContactSettingsResponse">UpdateEmergencyContactSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateemergencycontactsettingsresponse"></a>
<a id="schema_UpdateEmergencyContactSettingsResponse"></a>
<a id="tocSupdateemergencycontactsettingsresponse"></a>
<a id="tocsupdateemergencycontactsettingsresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateEmergencyContactSettingsRequest">UpdateEmergencyContactSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateemergencycontactsettingsrequest"></a>
<a id="schema_UpdateEmergencyContactSettingsRequest"></a>
<a id="tocSupdateemergencycontactsettingsrequest"></a>
<a id="tocsupdateemergencycontactsettingsrequest"></a>

```json
{
  "EmergencyContactList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EmergencyContactList|object|false|none|none|

<h2 id="tocS_UpdateProtectionGroupResponse">UpdateProtectionGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprotectiongroupresponse"></a>
<a id="schema_UpdateProtectionGroupResponse"></a>
<a id="tocSupdateprotectiongroupresponse"></a>
<a id="tocsupdateprotectiongroupresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateProtectionGroupRequest">UpdateProtectionGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprotectiongrouprequest"></a>
<a id="schema_UpdateProtectionGroupRequest"></a>
<a id="tocSupdateprotectiongrouprequest"></a>
<a id="tocsupdateprotectiongrouprequest"></a>

```json
{
  "ProtectionGroupId": {},
  "Aggregation": {},
  "Pattern": {},
  "ResourceType": {},
  "Members": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProtectionGroupId|object|true|none|none|
|Aggregation|object|true|none|none|
|Pattern|object|true|none|none|
|ResourceType|object|false|none|none|
|Members|object|false|none|none|

<h2 id="tocS_UpdateSubscriptionResponse">UpdateSubscriptionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesubscriptionresponse"></a>
<a id="schema_UpdateSubscriptionResponse"></a>
<a id="tocSupdatesubscriptionresponse"></a>
<a id="tocsupdatesubscriptionresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateSubscriptionRequest">UpdateSubscriptionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesubscriptionrequest"></a>
<a id="schema_UpdateSubscriptionRequest"></a>
<a id="tocSupdatesubscriptionrequest"></a>
<a id="tocsupdatesubscriptionrequest"></a>

```json
{
  "AutoRenew": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoRenew|object|false|none|none|

<h2 id="tocS_ApplicationLayerAutomaticResponseStatus">ApplicationLayerAutomaticResponseStatus</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationlayerautomaticresponsestatus"></a>
<a id="schema_ApplicationLayerAutomaticResponseStatus"></a>
<a id="tocSapplicationlayerautomaticresponsestatus"></a>
<a id="tocsapplicationlayerautomaticresponsestatus"></a>

```json
"ENABLED"
```

<h2 id="tocS_ResponseAction">ResponseAction</h2>
<!-- backwards compatibility -->
<a id="schemaresponseaction"></a>
<a id="schema_ResponseAction"></a>
<a id="tocSresponseaction"></a>
<a id="tocsresponseaction"></a>

```json
{
  "Block": {},
  "Count": {}
}
```

Specifies the action setting that Shield Advanced should use in the WAF rules that it creates on behalf of the protected resource in response to DDoS attacks. You specify this as part of the configuration for the automatic application layer DDoS mitigation feature, when you enable or update automatic mitigation. Shield Advanced creates the WAF rules in a Shield Advanced-managed rule group, inside the web ACL that you have associated with the resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Block|object|false|none|none|
|Count|object|false|none|none|

<h2 id="tocS_ApplicationLayerAutomaticResponseConfiguration">ApplicationLayerAutomaticResponseConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationlayerautomaticresponseconfiguration"></a>
<a id="schema_ApplicationLayerAutomaticResponseConfiguration"></a>
<a id="tocSapplicationlayerautomaticresponseconfiguration"></a>
<a id="tocsapplicationlayerautomaticresponseconfiguration"></a>

```json
{
  "Status": {},
  "Action": {
    "Block": {},
    "Count": {}
  }
}
```

The automatic application layer DDoS mitigation settings for a <a>Protection</a>. This configuration determines whether Shield Advanced automatically manages rules in the web ACL in order to respond to application layer events that Shield Advanced determines to be DDoS attacks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|true|none|none|
|Action|object|true|none|none|

<h2 id="tocS_LogBucket">LogBucket</h2>
<!-- backwards compatibility -->
<a id="schemalogbucket"></a>
<a id="schema_LogBucket"></a>
<a id="tocSlogbucket"></a>
<a id="tocslogbucket"></a>

```json
"string"
```

<h2 id="tocS_RoleArn">RoleArn</h2>
<!-- backwards compatibility -->
<a id="schemarolearn"></a>
<a id="schema_RoleArn"></a>
<a id="tocSrolearn"></a>
<a id="tocsrolearn"></a>

```json
"string"
```

<h2 id="tocS_ProtectionId">ProtectionId</h2>
<!-- backwards compatibility -->
<a id="schemaprotectionid"></a>
<a id="schema_ProtectionId"></a>
<a id="tocSprotectionid"></a>
<a id="tocsprotectionid"></a>

```json
"stringstringstringstringstringstring"
```

<h2 id="tocS_HealthCheckArn">HealthCheckArn</h2>
<!-- backwards compatibility -->
<a id="schemahealthcheckarn"></a>
<a id="schema_HealthCheckArn"></a>
<a id="tocShealthcheckarn"></a>
<a id="tocshealthcheckarn"></a>

```json
"string"
```

<h2 id="tocS_EmergencyContactList">EmergencyContactList</h2>
<!-- backwards compatibility -->
<a id="schemaemergencycontactlist"></a>
<a id="schema_EmergencyContactList"></a>
<a id="tocSemergencycontactlist"></a>
<a id="tocsemergencycontactlist"></a>

```json
[
  {
    "EmailAddress": {},
    "PhoneNumber": {},
    "ContactNotes": {}
  }
]
```

<h2 id="tocS_AttackId">AttackId</h2>
<!-- backwards compatibility -->
<a id="schemaattackid"></a>
<a id="schema_AttackId"></a>
<a id="tocSattackid"></a>
<a id="tocsattackid"></a>

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

<h2 id="tocS_SubResourceSummaryList">SubResourceSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemasubresourcesummarylist"></a>
<a id="schema_SubResourceSummaryList"></a>
<a id="tocSsubresourcesummarylist"></a>
<a id="tocssubresourcesummarylist"></a>

```json
[
  {
    "Type": {},
    "Id": {},
    "AttackVectors": {},
    "Counters": {}
  }
]
```

<h2 id="tocS_AttackTimestamp">AttackTimestamp</h2>
<!-- backwards compatibility -->
<a id="schemaattacktimestamp"></a>
<a id="schema_AttackTimestamp"></a>
<a id="tocSattacktimestamp"></a>
<a id="tocsattacktimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_SummarizedCounterList">SummarizedCounterList</h2>
<!-- backwards compatibility -->
<a id="schemasummarizedcounterlist"></a>
<a id="schema_SummarizedCounterList"></a>
<a id="tocSsummarizedcounterlist"></a>
<a id="tocssummarizedcounterlist"></a>

```json
[
  {
    "Name": {},
    "Max": {},
    "Average": {},
    "Sum": {},
    "N": {},
    "Unit": {}
  }
]
```

<h2 id="tocS_AttackProperties">AttackProperties</h2>
<!-- backwards compatibility -->
<a id="schemaattackproperties"></a>
<a id="schema_AttackProperties"></a>
<a id="tocSattackproperties"></a>
<a id="tocsattackproperties"></a>

```json
[
  {
    "AttackLayer": {},
    "AttackPropertyIdentifier": {},
    "TopContributors": {},
    "Unit": {},
    "Total": {}
  }
]
```

<h2 id="tocS_MitigationList">MitigationList</h2>
<!-- backwards compatibility -->
<a id="schemamitigationlist"></a>
<a id="schema_MitigationList"></a>
<a id="tocSmitigationlist"></a>
<a id="tocsmitigationlist"></a>

```json
[
  {
    "MitigationName": {}
  }
]
```

<h2 id="tocS_AttackDetail">AttackDetail</h2>
<!-- backwards compatibility -->
<a id="schemaattackdetail"></a>
<a id="schema_AttackDetail"></a>
<a id="tocSattackdetail"></a>
<a id="tocsattackdetail"></a>

```json
{
  "AttackId": {},
  "ResourceArn": {},
  "SubResources": {},
  "StartTime": {},
  "EndTime": {},
  "AttackCounters": {},
  "AttackProperties": {},
  "Mitigations": {}
}
```

The details of a DDoS attack.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttackId|object|false|none|none|
|ResourceArn|object|false|none|none|
|SubResources|object|false|none|none|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|
|AttackCounters|object|false|none|none|
|AttackProperties|object|false|none|none|
|Mitigations|object|false|none|none|

<h2 id="tocS_AttackLayer">AttackLayer</h2>
<!-- backwards compatibility -->
<a id="schemaattacklayer"></a>
<a id="schema_AttackLayer"></a>
<a id="tocSattacklayer"></a>
<a id="tocsattacklayer"></a>

```json
"NETWORK"
```

<h2 id="tocS_AttackProperty">AttackProperty</h2>
<!-- backwards compatibility -->
<a id="schemaattackproperty"></a>
<a id="schema_AttackProperty"></a>
<a id="tocSattackproperty"></a>
<a id="tocsattackproperty"></a>

```json
{
  "AttackLayer": {},
  "AttackPropertyIdentifier": {},
  "TopContributors": {},
  "Unit": {},
  "Total": {}
}
```

Details of a Shield event. This is provided as part of an <a>AttackDetail</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttackLayer|object|false|none|none|
|AttackPropertyIdentifier|object|false|none|none|
|TopContributors|object|false|none|none|
|Unit|object|false|none|none|
|Total|object|false|none|none|

<h2 id="tocS_AttackPropertyIdentifier">AttackPropertyIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaattackpropertyidentifier"></a>
<a id="schema_AttackPropertyIdentifier"></a>
<a id="tocSattackpropertyidentifier"></a>
<a id="tocsattackpropertyidentifier"></a>

```json
"DESTINATION_URL"
```

<h2 id="tocS_TopContributors">TopContributors</h2>
<!-- backwards compatibility -->
<a id="schematopcontributors"></a>
<a id="schema_TopContributors"></a>
<a id="tocStopcontributors"></a>
<a id="tocstopcontributors"></a>

```json
[
  {
    "Name": {},
    "Value": {}
  }
]
```

<h2 id="tocS_Unit">Unit</h2>
<!-- backwards compatibility -->
<a id="schemaunit"></a>
<a id="schema_Unit"></a>
<a id="tocSunit"></a>
<a id="tocsunit"></a>

```json
"BITS"
```

<h2 id="tocS_Long">Long</h2>
<!-- backwards compatibility -->
<a id="schemalong"></a>
<a id="schema_Long"></a>
<a id="tocSlong"></a>
<a id="tocslong"></a>

```json
0
```

<h2 id="tocS_AttackVolume">AttackVolume</h2>
<!-- backwards compatibility -->
<a id="schemaattackvolume"></a>
<a id="schema_AttackVolume"></a>
<a id="tocSattackvolume"></a>
<a id="tocsattackvolume"></a>

```json
{
  "BitsPerSecond": {
    "Max": {}
  },
  "PacketsPerSecond": {
    "Max": {}
  },
  "RequestsPerSecond": {
    "Max": {}
  }
}
```

Information about the volume of attacks during the time period, included in an <a>AttackStatisticsDataItem</a>. If the accompanying <code>AttackCount</code> in the statistics object is zero, this setting might be empty.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BitsPerSecond|object|false|none|none|
|PacketsPerSecond|object|false|none|none|
|RequestsPerSecond|object|false|none|none|

<h2 id="tocS_AttackStatisticsDataItem">AttackStatisticsDataItem</h2>
<!-- backwards compatibility -->
<a id="schemaattackstatisticsdataitem"></a>
<a id="schema_AttackStatisticsDataItem"></a>
<a id="tocSattackstatisticsdataitem"></a>
<a id="tocsattackstatisticsdataitem"></a>

```json
{
  "AttackVolume": {
    "BitsPerSecond": {
      "Max": {}
    },
    "PacketsPerSecond": {
      "Max": {}
    },
    "RequestsPerSecond": {
      "Max": {}
    }
  },
  "AttackCount": {}
}
```

A single attack statistics data record. This is returned by <a>DescribeAttackStatistics</a> along with a time range indicating the time period that the attack statistics apply to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttackVolume|object|false|none|none|
|AttackCount|object|true|none|none|

<h2 id="tocS_AttackStatisticsDataList">AttackStatisticsDataList</h2>
<!-- backwards compatibility -->
<a id="schemaattackstatisticsdatalist"></a>
<a id="schema_AttackStatisticsDataList"></a>
<a id="tocSattackstatisticsdatalist"></a>
<a id="tocsattackstatisticsdatalist"></a>

```json
[
  {
    "AttackVolume": {
      "BitsPerSecond": {
        "Max": {}
      },
      "PacketsPerSecond": {
        "Max": {}
      },
      "RequestsPerSecond": {
        "Max": {}
      }
    },
    "AttackCount": {}
  }
]
```

<h2 id="tocS_AttackSummary">AttackSummary</h2>
<!-- backwards compatibility -->
<a id="schemaattacksummary"></a>
<a id="schema_AttackSummary"></a>
<a id="tocSattacksummary"></a>
<a id="tocsattacksummary"></a>

```json
{
  "AttackId": {},
  "ResourceArn": {},
  "StartTime": {},
  "EndTime": {},
  "AttackVectors": {}
}
```

Summarizes all DDoS attacks for a specified time period.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttackId|object|false|none|none|
|ResourceArn|object|false|none|none|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|
|AttackVectors|object|false|none|none|

<h2 id="tocS_AttackSummaries">AttackSummaries</h2>
<!-- backwards compatibility -->
<a id="schemaattacksummaries"></a>
<a id="schema_AttackSummaries"></a>
<a id="tocSattacksummaries"></a>
<a id="tocsattacksummaries"></a>

```json
[
  {
    "AttackId": {},
    "ResourceArn": {},
    "StartTime": {},
    "EndTime": {},
    "AttackVectors": {}
  }
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

<h2 id="tocS_AttackVectorDescriptionList">AttackVectorDescriptionList</h2>
<!-- backwards compatibility -->
<a id="schemaattackvectordescriptionlist"></a>
<a id="schema_AttackVectorDescriptionList"></a>
<a id="tocSattackvectordescriptionlist"></a>
<a id="tocsattackvectordescriptionlist"></a>

```json
[
  {
    "VectorType": {}
  }
]
```

<h2 id="tocS_AttackVectorDescription">AttackVectorDescription</h2>
<!-- backwards compatibility -->
<a id="schemaattackvectordescription"></a>
<a id="schema_AttackVectorDescription"></a>
<a id="tocSattackvectordescription"></a>
<a id="tocsattackvectordescription"></a>

```json
{
  "VectorType": {}
}
```

Describes the attack.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VectorType|object|true|none|none|

<h2 id="tocS_AttackVolumeStatistics">AttackVolumeStatistics</h2>
<!-- backwards compatibility -->
<a id="schemaattackvolumestatistics"></a>
<a id="schema_AttackVolumeStatistics"></a>
<a id="tocSattackvolumestatistics"></a>
<a id="tocsattackvolumestatistics"></a>

```json
{
  "Max": {}
}
```

Statistics objects for the various data types in <a>AttackVolume</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Max|object|true|none|none|

<h2 id="tocS_Double">Double</h2>
<!-- backwards compatibility -->
<a id="schemadouble"></a>
<a id="schema_Double"></a>
<a id="tocSdouble"></a>
<a id="tocsdouble"></a>

```json
0
```

<h2 id="tocS_AutoRenew">AutoRenew</h2>
<!-- backwards compatibility -->
<a id="schemaautorenew"></a>
<a id="schema_AutoRenew"></a>
<a id="tocSautorenew"></a>
<a id="tocsautorenew"></a>

```json
"ENABLED"
```

<h2 id="tocS_BlockAction">BlockAction</h2>
<!-- backwards compatibility -->
<a id="schemablockaction"></a>
<a id="schema_BlockAction"></a>
<a id="tocSblockaction"></a>
<a id="tocsblockaction"></a>

```json
{}
```

<p>Specifies that Shield Advanced should configure its WAF rules with the WAF <code>Block</code> action. </p> <p>This is only used in the context of the <code>ResponseAction</code> setting. </p> <p>JSON specification: <code>"Block": {}</code> </p>

<h2 id="tocS_ContactNotes">ContactNotes</h2>
<!-- backwards compatibility -->
<a id="schemacontactnotes"></a>
<a id="schema_ContactNotes"></a>
<a id="tocScontactnotes"></a>
<a id="tocscontactnotes"></a>

```json
"string"
```

<h2 id="tocS_Contributor">Contributor</h2>
<!-- backwards compatibility -->
<a id="schemacontributor"></a>
<a id="schema_Contributor"></a>
<a id="tocScontributor"></a>
<a id="tocscontributor"></a>

```json
{
  "Name": {},
  "Value": {}
}
```

A contributor to the attack and their contribution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_CountAction">CountAction</h2>
<!-- backwards compatibility -->
<a id="schemacountaction"></a>
<a id="schema_CountAction"></a>
<a id="tocScountaction"></a>
<a id="tocscountaction"></a>

```json
{}
```

<p>Specifies that Shield Advanced should configure its WAF rules with the WAF <code>Count</code> action. </p> <p>This is only used in the context of the <code>ResponseAction</code> setting. </p> <p>JSON specification: <code>"Count": {}</code> </p>

<h2 id="tocS_ProtectionGroupId">ProtectionGroupId</h2>
<!-- backwards compatibility -->
<a id="schemaprotectiongroupid"></a>
<a id="schema_ProtectionGroupId"></a>
<a id="tocSprotectiongroupid"></a>
<a id="tocsprotectiongroupid"></a>

```json
"string"
```

<h2 id="tocS_ProtectionGroupAggregation">ProtectionGroupAggregation</h2>
<!-- backwards compatibility -->
<a id="schemaprotectiongroupaggregation"></a>
<a id="schema_ProtectionGroupAggregation"></a>
<a id="tocSprotectiongroupaggregation"></a>
<a id="tocsprotectiongroupaggregation"></a>

```json
"SUM"
```

<h2 id="tocS_ProtectionGroupPattern">ProtectionGroupPattern</h2>
<!-- backwards compatibility -->
<a id="schemaprotectiongrouppattern"></a>
<a id="schema_ProtectionGroupPattern"></a>
<a id="tocSprotectiongrouppattern"></a>
<a id="tocsprotectiongrouppattern"></a>

```json
"ALL"
```

<h2 id="tocS_ProtectedResourceType">ProtectedResourceType</h2>
<!-- backwards compatibility -->
<a id="schemaprotectedresourcetype"></a>
<a id="schema_ProtectedResourceType"></a>
<a id="tocSprotectedresourcetype"></a>
<a id="tocsprotectedresourcetype"></a>

```json
"CLOUDFRONT_DISTRIBUTION"
```

<h2 id="tocS_ProtectionGroupMembers">ProtectionGroupMembers</h2>
<!-- backwards compatibility -->
<a id="schemaprotectiongroupmembers"></a>
<a id="schema_ProtectionGroupMembers"></a>
<a id="tocSprotectiongroupmembers"></a>
<a id="tocsprotectiongroupmembers"></a>

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

<h2 id="tocS_ProtectionName">ProtectionName</h2>
<!-- backwards compatibility -->
<a id="schemaprotectionname"></a>
<a id="schema_ProtectionName"></a>
<a id="tocSprotectionname"></a>
<a id="tocsprotectionname"></a>

```json
"string"
```

<h2 id="tocS_TimeRange">TimeRange</h2>
<!-- backwards compatibility -->
<a id="schematimerange"></a>
<a id="schema_TimeRange"></a>
<a id="tocStimerange"></a>
<a id="tocstimerange"></a>

```json
{
  "FromInclusive": {},
  "ToExclusive": {}
}
```

The time range.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FromInclusive|object|false|none|none|
|ToExclusive|object|false|none|none|

<h2 id="tocS_LogBucketList">LogBucketList</h2>
<!-- backwards compatibility -->
<a id="schemalogbucketlist"></a>
<a id="schema_LogBucketList"></a>
<a id="tocSlogbucketlist"></a>
<a id="tocslogbucketlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ProtectionGroup">ProtectionGroup</h2>
<!-- backwards compatibility -->
<a id="schemaprotectiongroup"></a>
<a id="schema_ProtectionGroup"></a>
<a id="tocSprotectiongroup"></a>
<a id="tocsprotectiongroup"></a>

```json
{
  "ProtectionGroupId": {},
  "Aggregation": {},
  "Pattern": {},
  "ResourceType": {},
  "Members": {},
  "ProtectionGroupArn": {}
}
```

A grouping of protected resources that you and Shield Advanced can monitor as a collective. This resource grouping improves the accuracy of detection and reduces false positives.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProtectionGroupId|object|true|none|none|
|Aggregation|object|true|none|none|
|Pattern|object|true|none|none|
|ResourceType|object|false|none|none|
|Members|object|true|none|none|
|ProtectionGroupArn|object|false|none|none|

<h2 id="tocS_Protection">Protection</h2>
<!-- backwards compatibility -->
<a id="schemaprotection"></a>
<a id="schema_Protection"></a>
<a id="tocSprotection"></a>
<a id="tocsprotection"></a>

```json
{
  "Id": {},
  "Name": {},
  "ResourceArn": {},
  "HealthCheckIds": {},
  "ProtectionArn": {},
  "ApplicationLayerAutomaticResponseConfiguration": {
    "Status": {},
    "Action": {
      "Block": {},
      "Count": {}
    }
  }
}
```

An object that represents a resource that is under DDoS protection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Name|object|false|none|none|
|ResourceArn|object|false|none|none|
|HealthCheckIds|object|false|none|none|
|ProtectionArn|object|false|none|none|
|ApplicationLayerAutomaticResponseConfiguration|object|false|none|none|

<h2 id="tocS_Subscription">Subscription</h2>
<!-- backwards compatibility -->
<a id="schemasubscription"></a>
<a id="schema_Subscription"></a>
<a id="tocSsubscription"></a>
<a id="tocssubscription"></a>

```json
{
  "StartTime": {},
  "EndTime": {},
  "TimeCommitmentInSeconds": {},
  "AutoRenew": {},
  "Limits": {},
  "ProactiveEngagementStatus": {},
  "SubscriptionLimits": {
    "ProtectionLimits": {
      "ProtectedResourceTypeLimits": {}
    },
    "ProtectionGroupLimits": {
      "MaxProtectionGroups": {},
      "PatternTypeLimits": {
        "ArbitraryPatternLimits": {
          "MaxMembers": {}
        }
      }
    }
  },
  "SubscriptionArn": {}
}
```

Information about the Shield Advanced subscription for an account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|
|TimeCommitmentInSeconds|object|false|none|none|
|AutoRenew|object|false|none|none|
|Limits|object|false|none|none|
|ProactiveEngagementStatus|object|false|none|none|
|SubscriptionLimits|object|true|none|none|
|SubscriptionArn|object|false|none|none|

<h2 id="tocS_DurationInSeconds">DurationInSeconds</h2>
<!-- backwards compatibility -->
<a id="schemadurationinseconds"></a>
<a id="schema_DurationInSeconds"></a>
<a id="tocSdurationinseconds"></a>
<a id="tocsdurationinseconds"></a>

```json
0
```

<h2 id="tocS_EmailAddress">EmailAddress</h2>
<!-- backwards compatibility -->
<a id="schemaemailaddress"></a>
<a id="schema_EmailAddress"></a>
<a id="tocSemailaddress"></a>
<a id="tocsemailaddress"></a>

```json
"string"
```

<h2 id="tocS_PhoneNumber">PhoneNumber</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumber"></a>
<a id="schema_PhoneNumber"></a>
<a id="tocSphonenumber"></a>
<a id="tocsphonenumber"></a>

```json
"string"
```

<h2 id="tocS_EmergencyContact">EmergencyContact</h2>
<!-- backwards compatibility -->
<a id="schemaemergencycontact"></a>
<a id="schema_EmergencyContact"></a>
<a id="tocSemergencycontact"></a>
<a id="tocsemergencycontact"></a>

```json
{
  "EmailAddress": {},
  "PhoneNumber": {},
  "ContactNotes": {}
}
```

Contact information that the SRT can use to contact you if you have proactive engagement enabled, for escalations to the SRT and to initiate proactive customer support.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EmailAddress|object|true|none|none|
|PhoneNumber|object|false|none|none|
|ContactNotes|object|false|none|none|

<h2 id="tocS_SubscriptionState">SubscriptionState</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionstate"></a>
<a id="schema_SubscriptionState"></a>
<a id="tocSsubscriptionstate"></a>
<a id="tocssubscriptionstate"></a>

```json
"ACTIVE"
```

<h2 id="tocS_HealthCheckId">HealthCheckId</h2>
<!-- backwards compatibility -->
<a id="schemahealthcheckid"></a>
<a id="schema_HealthCheckId"></a>
<a id="tocShealthcheckid"></a>
<a id="tocshealthcheckid"></a>

```json
"string"
```

<h2 id="tocS_HealthCheckIds">HealthCheckIds</h2>
<!-- backwards compatibility -->
<a id="schemahealthcheckids"></a>
<a id="schema_HealthCheckIds"></a>
<a id="tocShealthcheckids"></a>
<a id="tocshealthcheckids"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ResourceArnFilters">ResourceArnFilters</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearnfilters"></a>
<a id="schema_ResourceArnFilters"></a>
<a id="tocSresourcearnfilters"></a>
<a id="tocsresourcearnfilters"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ProtectionNameFilters">ProtectionNameFilters</h2>
<!-- backwards compatibility -->
<a id="schemaprotectionnamefilters"></a>
<a id="schema_ProtectionNameFilters"></a>
<a id="tocSprotectionnamefilters"></a>
<a id="tocsprotectionnamefilters"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ProtectedResourceTypeFilters">ProtectedResourceTypeFilters</h2>
<!-- backwards compatibility -->
<a id="schemaprotectedresourcetypefilters"></a>
<a id="schema_ProtectedResourceTypeFilters"></a>
<a id="tocSprotectedresourcetypefilters"></a>
<a id="tocsprotectedresourcetypefilters"></a>

```json
[
  "CLOUDFRONT_DISTRIBUTION"
]
```

<h2 id="tocS_InclusionProtectionFilters">InclusionProtectionFilters</h2>
<!-- backwards compatibility -->
<a id="schemainclusionprotectionfilters"></a>
<a id="schema_InclusionProtectionFilters"></a>
<a id="tocSinclusionprotectionfilters"></a>
<a id="tocsinclusionprotectionfilters"></a>

```json
{
  "ResourceArns": {},
  "ProtectionNames": {},
  "ResourceTypes": {}
}
```

Narrows the set of protections that the call retrieves. You can retrieve a single protection by providing its name or the ARN (Amazon Resource Name) of its protected resource. You can also retrieve all protections for a specific resource type. You can provide up to one criteria per filter type. Shield Advanced returns protections that exactly match all of the filter criteria that you provide.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArns|object|false|none|none|
|ProtectionNames|object|false|none|none|
|ResourceTypes|object|false|none|none|

<h2 id="tocS_ProtectionGroupIdFilters">ProtectionGroupIdFilters</h2>
<!-- backwards compatibility -->
<a id="schemaprotectiongroupidfilters"></a>
<a id="schema_ProtectionGroupIdFilters"></a>
<a id="tocSprotectiongroupidfilters"></a>
<a id="tocsprotectiongroupidfilters"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ProtectionGroupPatternFilters">ProtectionGroupPatternFilters</h2>
<!-- backwards compatibility -->
<a id="schemaprotectiongrouppatternfilters"></a>
<a id="schema_ProtectionGroupPatternFilters"></a>
<a id="tocSprotectiongrouppatternfilters"></a>
<a id="tocsprotectiongrouppatternfilters"></a>

```json
[
  "ALL"
]
```

<h2 id="tocS_ProtectionGroupAggregationFilters">ProtectionGroupAggregationFilters</h2>
<!-- backwards compatibility -->
<a id="schemaprotectiongroupaggregationfilters"></a>
<a id="schema_ProtectionGroupAggregationFilters"></a>
<a id="tocSprotectiongroupaggregationfilters"></a>
<a id="tocsprotectiongroupaggregationfilters"></a>

```json
[
  "SUM"
]
```

<h2 id="tocS_InclusionProtectionGroupFilters">InclusionProtectionGroupFilters</h2>
<!-- backwards compatibility -->
<a id="schemainclusionprotectiongroupfilters"></a>
<a id="schema_InclusionProtectionGroupFilters"></a>
<a id="tocSinclusionprotectiongroupfilters"></a>
<a id="tocsinclusionprotectiongroupfilters"></a>

```json
{
  "ProtectionGroupIds": {},
  "Patterns": {},
  "ResourceTypes": {},
  "Aggregations": {}
}
```

Narrows the set of protection groups that the call retrieves. You can retrieve a single protection group by its name and you can retrieve all protection groups that are configured with a specific pattern, aggregation, or resource type. You can provide up to one criteria per filter type. Shield Advanced returns the protection groups that exactly match all of the search criteria that you provide.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProtectionGroupIds|object|false|none|none|
|Patterns|object|false|none|none|
|ResourceTypes|object|false|none|none|
|Aggregations|object|false|none|none|

<h2 id="tocS_Integer">Integer</h2>
<!-- backwards compatibility -->
<a id="schemainteger"></a>
<a id="schema_Integer"></a>
<a id="tocSinteger"></a>
<a id="tocsinteger"></a>

```json
0
```

<h2 id="tocS_Limit">Limit</h2>
<!-- backwards compatibility -->
<a id="schemalimit"></a>
<a id="schema_Limit"></a>
<a id="tocSlimit"></a>
<a id="tocslimit"></a>

```json
{
  "Type": {},
  "Max": {}
}
```

Specifies how many protections of a given type you can create.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|Max|object|false|none|none|

<h2 id="tocS_Limits">Limits</h2>
<!-- backwards compatibility -->
<a id="schemalimits"></a>
<a id="schema_Limits"></a>
<a id="tocSlimits"></a>
<a id="tocslimits"></a>

```json
[
  {
    "Type": {},
    "Max": {}
  }
]
```

<h2 id="tocS_ResourceArnFilterList">ResourceArnFilterList</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearnfilterlist"></a>
<a id="schema_ResourceArnFilterList"></a>
<a id="tocSresourcearnfilterlist"></a>
<a id="tocsresourcearnfilterlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Token">Token</h2>
<!-- backwards compatibility -->
<a id="schematoken"></a>
<a id="schema_Token"></a>
<a id="tocStoken"></a>
<a id="tocstoken"></a>

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

<h2 id="tocS_ProtectionGroups">ProtectionGroups</h2>
<!-- backwards compatibility -->
<a id="schemaprotectiongroups"></a>
<a id="schema_ProtectionGroups"></a>
<a id="tocSprotectiongroups"></a>
<a id="tocsprotectiongroups"></a>

```json
[
  {
    "ProtectionGroupId": {},
    "Aggregation": {},
    "Pattern": {},
    "ResourceType": {},
    "Members": {},
    "ProtectionGroupArn": {}
  }
]
```

<h2 id="tocS_Protections">Protections</h2>
<!-- backwards compatibility -->
<a id="schemaprotections"></a>
<a id="schema_Protections"></a>
<a id="tocSprotections"></a>
<a id="tocsprotections"></a>

```json
[
  {
    "Id": {},
    "Name": {},
    "ResourceArn": {},
    "HealthCheckIds": {},
    "ProtectionArn": {},
    "ApplicationLayerAutomaticResponseConfiguration": {
      "Status": {},
      "Action": {
        "Block": {},
        "Count": {}
      }
    }
  }
]
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

<h2 id="tocS_Mitigation">Mitigation</h2>
<!-- backwards compatibility -->
<a id="schemamitigation"></a>
<a id="schema_Mitigation"></a>
<a id="tocSmitigation"></a>
<a id="tocsmitigation"></a>

```json
{
  "MitigationName": {}
}
```

The mitigation applied to a DDoS attack.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MitigationName|object|false|none|none|

<h2 id="tocS_ProactiveEngagementStatus">ProactiveEngagementStatus</h2>
<!-- backwards compatibility -->
<a id="schemaproactiveengagementstatus"></a>
<a id="schema_ProactiveEngagementStatus"></a>
<a id="tocSproactiveengagementstatus"></a>
<a id="tocsproactiveengagementstatus"></a>

```json
"ENABLED"
```

<h2 id="tocS_ProtectionGroupArbitraryPatternLimits">ProtectionGroupArbitraryPatternLimits</h2>
<!-- backwards compatibility -->
<a id="schemaprotectiongrouparbitrarypatternlimits"></a>
<a id="schema_ProtectionGroupArbitraryPatternLimits"></a>
<a id="tocSprotectiongrouparbitrarypatternlimits"></a>
<a id="tocsprotectiongrouparbitrarypatternlimits"></a>

```json
{
  "MaxMembers": {}
}
```

Limits settings on protection groups with arbitrary pattern type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxMembers|object|true|none|none|

<h2 id="tocS_ProtectionGroupPatternTypeLimits">ProtectionGroupPatternTypeLimits</h2>
<!-- backwards compatibility -->
<a id="schemaprotectiongrouppatterntypelimits"></a>
<a id="schema_ProtectionGroupPatternTypeLimits"></a>
<a id="tocSprotectiongrouppatterntypelimits"></a>
<a id="tocsprotectiongrouppatterntypelimits"></a>

```json
{
  "ArbitraryPatternLimits": {
    "MaxMembers": {}
  }
}
```

Limits settings by pattern type in the protection groups for your subscription.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ArbitraryPatternLimits|object|true|none|none|

<h2 id="tocS_ProtectionGroupLimits">ProtectionGroupLimits</h2>
<!-- backwards compatibility -->
<a id="schemaprotectiongrouplimits"></a>
<a id="schema_ProtectionGroupLimits"></a>
<a id="tocSprotectiongrouplimits"></a>
<a id="tocsprotectiongrouplimits"></a>

```json
{
  "MaxProtectionGroups": {},
  "PatternTypeLimits": {
    "ArbitraryPatternLimits": {
      "MaxMembers": {}
    }
  }
}
```

Limits settings on protection groups for your subscription.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxProtectionGroups|object|true|none|none|
|PatternTypeLimits|object|true|none|none|

<h2 id="tocS_ProtectionLimits">ProtectionLimits</h2>
<!-- backwards compatibility -->
<a id="schemaprotectionlimits"></a>
<a id="schema_ProtectionLimits"></a>
<a id="tocSprotectionlimits"></a>
<a id="tocsprotectionlimits"></a>

```json
{
  "ProtectedResourceTypeLimits": {}
}
```

Limits settings on protections for your subscription.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProtectedResourceTypeLimits|object|true|none|none|

<h2 id="tocS_SubResourceType">SubResourceType</h2>
<!-- backwards compatibility -->
<a id="schemasubresourcetype"></a>
<a id="schema_SubResourceType"></a>
<a id="tocSsubresourcetype"></a>
<a id="tocssubresourcetype"></a>

```json
"IP"
```

<h2 id="tocS_SummarizedAttackVectorList">SummarizedAttackVectorList</h2>
<!-- backwards compatibility -->
<a id="schemasummarizedattackvectorlist"></a>
<a id="schema_SummarizedAttackVectorList"></a>
<a id="tocSsummarizedattackvectorlist"></a>
<a id="tocssummarizedattackvectorlist"></a>

```json
[
  {
    "VectorType": {},
    "VectorCounters": {}
  }
]
```

<h2 id="tocS_SubResourceSummary">SubResourceSummary</h2>
<!-- backwards compatibility -->
<a id="schemasubresourcesummary"></a>
<a id="schema_SubResourceSummary"></a>
<a id="tocSsubresourcesummary"></a>
<a id="tocssubresourcesummary"></a>

```json
{
  "Type": {},
  "Id": {},
  "AttackVectors": {},
  "Counters": {}
}
```

The attack information for the specified SubResource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|Id|object|false|none|none|
|AttackVectors|object|false|none|none|
|Counters|object|false|none|none|

<h2 id="tocS_Timestamp">Timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_Timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_SubscriptionLimits">SubscriptionLimits</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionlimits"></a>
<a id="schema_SubscriptionLimits"></a>
<a id="tocSsubscriptionlimits"></a>
<a id="tocssubscriptionlimits"></a>

```json
{
  "ProtectionLimits": {
    "ProtectedResourceTypeLimits": {}
  },
  "ProtectionGroupLimits": {
    "MaxProtectionGroups": {},
    "PatternTypeLimits": {
      "ArbitraryPatternLimits": {
        "MaxMembers": {}
      }
    }
  }
}
```

Limits settings for your subscription.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProtectionLimits|object|true|none|none|
|ProtectionGroupLimits|object|true|none|none|

<h2 id="tocS_SummarizedAttackVector">SummarizedAttackVector</h2>
<!-- backwards compatibility -->
<a id="schemasummarizedattackvector"></a>
<a id="schema_SummarizedAttackVector"></a>
<a id="tocSsummarizedattackvector"></a>
<a id="tocssummarizedattackvector"></a>

```json
{
  "VectorType": {},
  "VectorCounters": {}
}
```

A summary of information about the attack.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VectorType|object|true|none|none|
|VectorCounters|object|false|none|none|

<h2 id="tocS_SummarizedCounter">SummarizedCounter</h2>
<!-- backwards compatibility -->
<a id="schemasummarizedcounter"></a>
<a id="schema_SummarizedCounter"></a>
<a id="tocSsummarizedcounter"></a>
<a id="tocssummarizedcounter"></a>

```json
{
  "Name": {},
  "Max": {},
  "Average": {},
  "Sum": {},
  "N": {},
  "Unit": {}
}
```

The counter that describes a DDoS attack.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Max|object|false|none|none|
|Average|object|false|none|none|
|Sum|object|false|none|none|
|N|object|false|none|none|
|Unit|object|false|none|none|

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

A tag associated with an Amazon Web Services resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing or other management. Typically, the tag key represents a category, such as "environment", and the tag value represents a specific value within that category, such as "test," "development," or "production". Or you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Value|object|false|none|none|

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
