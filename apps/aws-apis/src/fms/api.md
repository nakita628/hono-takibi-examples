<h1 id="firewall-management-service">Firewall Management Service v2018-01-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>This is the <i>Firewall Manager API Reference</i>. This guide is for developers who need detailed information about the Firewall Manager API actions, data types, and errors. For detailed information about Firewall Manager features, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-chapter.html">Firewall Manager Developer Guide</a>.</p> <p>Some API actions require explicit resource permissions. For information, see the developer guide topic <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-security_iam_service-with-iam.html#fms-security_iam_service-with-iam-roles-service">Service roles for Firewall Manager</a>. </p>

Base URLs:

* <a href="http://fms.us-east-1.amazonaws.com">http://fms.us-east-1.amazonaws.com</a> - The FMS multi-region endpoint

* <a href="https://fms.us-east-1.amazonaws.com">https://fms.us-east-1.amazonaws.com</a> - The FMS multi-region endpoint

* <a href="http://fms.cn-north-1.amazonaws.com.cn">http://fms.cn-north-1.amazonaws.com.cn</a> - The FMS endpoint for China (Beijing) and China (Ningxia)

* <a href="https://fms.cn-north-1.amazonaws.com.cn">https://fms.cn-north-1.amazonaws.com.cn</a> - The FMS endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/fms/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="firewall-management-service-default">Default</h1>

## AssociateAdminAccount

<a id="opIdAssociateAdminAccount"></a>

> Code samples

```bash
curl 'https://fms.us-east-1.amazonaws.com/#X-Amz-Target=AWSFMS_20180101.AssociateAdminAccount' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSFMS_20180101.AssociateAdminAccount' \
  -d '{
    "AdminAccount": {}
  }'
```

`POST /#X-Amz-Target=AWSFMS_20180101.AssociateAdminAccount`

<p>Sets a Firewall Manager default administrator account. The Firewall Manager default administrator account can manage third-party firewalls and has full administrative scope that allows administration of all policy types, accounts, organizational units, and Regions. This account must be a member account of the organization in Organizations whose resources you want to protect.</p> <p>For information about working with Firewall Manager administrator accounts, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/fms-administrators.html">Managing Firewall Manager administrators</a> in the <i>Firewall Manager Developer Guide</i>.</p>

> Body parameter

```json
{
  "AdminAccount": {}
}
```

<h3 id="associateadminaccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[AssociateAdminAccountRequest](#schemaassociateadminaccountrequest)|true|none|
|» AdminAccount|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSFMS_20180101.AssociateAdminAccount|

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

<h3 id="associateadminaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateThirdPartyFirewall

<a id="opIdAssociateThirdPartyFirewall"></a>

> Code samples

```bash
curl 'https://fms.us-east-1.amazonaws.com/#X-Amz-Target=AWSFMS_20180101.AssociateThirdPartyFirewall' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSFMS_20180101.AssociateThirdPartyFirewall' \
  -d '{
    "ThirdPartyFirewall": {}
  }'
```

`POST /#X-Amz-Target=AWSFMS_20180101.AssociateThirdPartyFirewall`

Sets the Firewall Manager policy administrator as a tenant administrator of a third-party firewall service. A tenant is an instance of the third-party firewall service that's associated with your Amazon Web Services customer account.

> Body parameter

```json
{
  "ThirdPartyFirewall": {}
}
```

<h3 id="associatethirdpartyfirewall-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[AssociateThirdPartyFirewallRequest](#schemaassociatethirdpartyfirewallrequest)|true|none|
|» ThirdPartyFirewall|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSFMS_20180101.AssociateThirdPartyFirewall|

> Example responses

> 200 Response

```json
{
  "ThirdPartyFirewallStatus": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="associatethirdpartyfirewall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateThirdPartyFirewallResponse](#schemaassociatethirdpartyfirewallresponse)|
|480|480|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchAssociateResource

<a id="opIdBatchAssociateResource"></a>

> Code samples

```bash
curl 'https://fms.us-east-1.amazonaws.com/#X-Amz-Target=AWSFMS_20180101.BatchAssociateResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSFMS_20180101.BatchAssociateResource' \
  -d '{
    "ResourceSetIdentifier": {},
    "Items": {}
  }'
```

`POST /#X-Amz-Target=AWSFMS_20180101.BatchAssociateResource`

Associate resources to a Firewall Manager resource set.

> Body parameter

```json
{
  "ResourceSetIdentifier": {},
  "Items": {}
}
```

<h3 id="batchassociateresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[BatchAssociateResourceRequest](#schemabatchassociateresourcerequest)|true|none|
|» ResourceSetIdentifier|body|object|true|none|
|» Items|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSFMS_20180101.BatchAssociateResource|

> Example responses

> 200 Response

```json
{
  "ResourceSetIdentifier": {},
  "FailedItems": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="batchassociateresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchAssociateResourceResponse](#schemabatchassociateresourceresponse)|
|480|480|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchDisassociateResource

<a id="opIdBatchDisassociateResource"></a>

> Code samples

```bash
curl 'https://fms.us-east-1.amazonaws.com/#X-Amz-Target=AWSFMS_20180101.BatchDisassociateResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSFMS_20180101.BatchDisassociateResource' \
  -d '{
    "ResourceSetIdentifier": {},
    "Items": {}
  }'
```

`POST /#X-Amz-Target=AWSFMS_20180101.BatchDisassociateResource`

Disassociates resources from a Firewall Manager resource set.

> Body parameter

```json
{
  "ResourceSetIdentifier": {},
  "Items": {}
}
```

<h3 id="batchdisassociateresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[BatchDisassociateResourceRequest](#schemabatchdisassociateresourcerequest)|true|none|
|» ResourceSetIdentifier|body|object|true|none|
|» Items|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSFMS_20180101.BatchDisassociateResource|

> Example responses

> 200 Response

```json
{
  "ResourceSetIdentifier": {},
  "FailedItems": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="batchdisassociateresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchDisassociateResourceResponse](#schemabatchdisassociateresourceresponse)|
|480|480|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAppsList

<a id="opIdDeleteAppsList"></a>

> Code samples

```bash
curl 'https://fms.us-east-1.amazonaws.com/#X-Amz-Target=AWSFMS_20180101.DeleteAppsList' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSFMS_20180101.DeleteAppsList' \
  -d '{
    "ListId": {}
  }'
```

`POST /#X-Amz-Target=AWSFMS_20180101.DeleteAppsList`

Permanently deletes an Firewall Manager applications list.

> Body parameter

```json
{
  "ListId": {}
}
```

<h3 id="deleteappslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteAppsListRequest](#schemadeleteappslistrequest)|true|none|
|» ListId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSFMS_20180101.DeleteAppsList|

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

<h3 id="deleteappslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|482|482|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteNotificationChannel

<a id="opIdDeleteNotificationChannel"></a>

> Code samples

```bash
curl 'https://fms.us-east-1.amazonaws.com/#X-Amz-Target=AWSFMS_20180101.DeleteNotificationChannel' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSFMS_20180101.DeleteNotificationChannel' \
  -d '{}'
```

`POST /#X-Amz-Target=AWSFMS_20180101.DeleteNotificationChannel`

Deletes an Firewall Manager association with the IAM role and the Amazon Simple Notification Service (SNS) topic that is used to record Firewall Manager SNS logs.

> Body parameter

```json
{}
```

<h3 id="deletenotificationchannel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteNotificationChannelRequest](#schemadeletenotificationchannelrequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSFMS_20180101.DeleteNotificationChannel|

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

<h3 id="deletenotificationchannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|482|482|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeletePolicy

<a id="opIdDeletePolicy"></a>

> Code samples

```bash
curl 'https://fms.us-east-1.amazonaws.com/#X-Amz-Target=AWSFMS_20180101.DeletePolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSFMS_20180101.DeletePolicy' \
  -d '{
    "PolicyId": {},
    "DeleteAllPolicyResources": {}
  }'
```

`POST /#X-Amz-Target=AWSFMS_20180101.DeletePolicy`

Permanently deletes an Firewall Manager policy. 

> Body parameter

```json
{
  "PolicyId": {},
  "DeleteAllPolicyResources": {}
}
```

<h3 id="deletepolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeletePolicyRequest](#schemadeletepolicyrequest)|true|none|
|» PolicyId|body|object|true|none|
|» DeleteAllPolicyResources|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSFMS_20180101.DeletePolicy|

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

<h3 id="deletepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|482|482|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|483|483|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteProtocolsList

<a id="opIdDeleteProtocolsList"></a>

> Code samples

```bash
curl 'https://fms.us-east-1.amazonaws.com/#X-Amz-Target=AWSFMS_20180101.DeleteProtocolsList' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSFMS_20180101.DeleteProtocolsList' \
  -d '{
    "ListId": {}
  }'
```

`POST /#X-Amz-Target=AWSFMS_20180101.DeleteProtocolsList`

Permanently deletes an Firewall Manager protocols list.

> Body parameter

```json
{
  "ListId": {}
}
```

<h3 id="deleteprotocolslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteProtocolsListRequest](#schemadeleteprotocolslistrequest)|true|none|
|» ListId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSFMS_20180101.DeleteProtocolsList|

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

<h3 id="deleteprotocolslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|482|482|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteResourceSet

<a id="opIdDeleteResourceSet"></a>

> Code samples

```bash
curl 'https://fms.us-east-1.amazonaws.com/#X-Amz-Target=AWSFMS_20180101.DeleteResourceSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSFMS_20180101.DeleteResourceSet' \
  -d '{
    "Identifier": {}
  }'
```

`POST /#X-Amz-Target=AWSFMS_20180101.DeleteResourceSet`

Deletes the specified <a>ResourceSet</a>.

> Body parameter

```json
{
  "Identifier": {}
}
```

<h3 id="deleteresourceset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteResourceSetRequest](#schemadeleteresourcesetrequest)|true|none|
|» Identifier|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSFMS_20180101.DeleteResourceSet|

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

<h3 id="deleteresourceset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|482|482|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|483|483|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateAdminAccount

<a id="opIdDisassociateAdminAccount"></a>

> Code samples

```bash
curl 'https://fms.us-east-1.amazonaws.com/#X-Amz-Target=AWSFMS_20180101.DisassociateAdminAccount' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSFMS_20180101.DisassociateAdminAccount' \
  -d '{}'
```

`POST /#X-Amz-Target=AWSFMS_20180101.DisassociateAdminAccount`

<p>Disassociates an Firewall Manager administrator account. To set a different account as an Firewall Manager administrator, submit a <a>PutAdminAccount</a> request. To set an account as a default administrator account, you must submit an <a>AssociateAdminAccount</a> request.</p> <p>Disassociation of the default administrator account follows the first in, last out principle. If you are the default administrator, all Firewall Manager administrators within the organization must first disassociate their accounts before you can disassociate your account.</p>

> Body parameter

```json
{}
```

<h3 id="disassociateadminaccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DisassociateAdminAccountRequest](#schemadisassociateadminaccountrequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSFMS_20180101.DisassociateAdminAccount|

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

<h3 id="disassociateadminaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateThirdPartyFirewall

<a id="opIdDisassociateThirdPartyFirewall"></a>

> Code samples

```bash
curl 'https://fms.us-east-1.amazonaws.com/#X-Amz-Target=AWSFMS_20180101.DisassociateThirdPartyFirewall' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSFMS_20180101.DisassociateThirdPartyFirewall' \
  -d '{
    "ThirdPartyFirewall": {}
  }'
```

`POST /#X-Amz-Target=AWSFMS_20180101.DisassociateThirdPartyFirewall`

Disassociates a Firewall Manager policy administrator from a third-party firewall tenant. When you call <code>DisassociateThirdPartyFirewall</code>, the third-party firewall vendor deletes all of the firewalls that are associated with the account.

> Body parameter

```json
{
  "ThirdPartyFirewall": {}
}
```

<h3 id="disassociatethirdpartyfirewall-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DisassociateThirdPartyFirewallRequest](#schemadisassociatethirdpartyfirewallrequest)|true|none|
|» ThirdPartyFirewall|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSFMS_20180101.DisassociateThirdPartyFirewall|

> Example responses

> 200 Response

```json
{
  "ThirdPartyFirewallStatus": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="disassociatethirdpartyfirewall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateThirdPartyFirewallResponse](#schemadisassociatethirdpartyfirewallresponse)|
|480|480|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAdminAccount

<a id="opIdGetAdminAccount"></a>

> Code samples

```bash
curl 'https://fms.us-east-1.amazonaws.com/#X-Amz-Target=AWSFMS_20180101.GetAdminAccount' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSFMS_20180101.GetAdminAccount' \
  -d '{}'
```

`POST /#X-Amz-Target=AWSFMS_20180101.GetAdminAccount`

Returns the Organizations account that is associated with Firewall Manager as the Firewall Manager default administrator.

> Body parameter

```json
{}
```

<h3 id="getadminaccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetAdminAccountRequest](#schemagetadminaccountrequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSFMS_20180101.GetAdminAccount|

> Example responses

> 200 Response

```json
{
  "AdminAccount": {},
  "RoleStatus": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="getadminaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAdminAccountResponse](#schemagetadminaccountresponse)|
|480|480|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAdminScope

<a id="opIdGetAdminScope"></a>

> Code samples

```bash
curl 'https://fms.us-east-1.amazonaws.com/#X-Amz-Target=AWSFMS_20180101.GetAdminScope' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSFMS_20180101.GetAdminScope' \
  -d '{
    "AdminAccount": {}
  }'
```

`POST /#X-Amz-Target=AWSFMS_20180101.GetAdminScope`

Returns information about the specified account's administrative scope. The admistrative scope defines the resources that an Firewall Manager administrator can manage.

> Body parameter

```json
{
  "AdminAccount": {}
}
```

<h3 id="getadminscope-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetAdminScopeRequest](#schemagetadminscoperequest)|true|none|
|» AdminAccount|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSFMS_20180101.GetAdminScope|

> Example responses

> 200 Response

```json
{
  "AdminScope": {
    "AccountScope": {
      "Accounts": {},
      "AllAccountsEnabled": {},
      "ExcludeSpecifiedAccounts": {}
    },
    "OrganizationalUnitScope": {
      "OrganizationalUnits": {},
      "AllOrganizationalUnitsEnabled": {},
      "ExcludeSpecifiedOrganizationalUnits": {}
    },
    "RegionScope": {
      "Regions": {},
      "AllRegionsEnabled": {}
    },
    "PolicyTypeScope": {
      "PolicyTypes": {},
      "AllPolicyTypesEnabled": {}
    }
  },
  "Status": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getadminscope-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAdminScopeResponse](#schemagetadminscoperesponse)|
|480|480|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAppsList

<a id="opIdGetAppsList"></a>

> Code samples

```bash
curl 'https://fms.us-east-1.amazonaws.com/#X-Amz-Target=AWSFMS_20180101.GetAppsList' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSFMS_20180101.GetAppsList' \
  -d '{
    "ListId": {},
    "DefaultList": {}
  }'
```

`POST /#X-Amz-Target=AWSFMS_20180101.GetAppsList`

Returns information about the specified Firewall Manager applications list.

> Body parameter

```json
{
  "ListId": {},
  "DefaultList": {}
}
```

<h3 id="getappslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetAppsListRequest](#schemagetappslistrequest)|true|none|
|» ListId|body|object|true|none|
|» DefaultList|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSFMS_20180101.GetAppsList|

> Example responses

> 200 Response

```json
{
  "AppsList": {
    "ListId": {},
    "ListName": {},
    "ListUpdateToken": {},
    "CreateTime": {},
    "LastUpdateTime": {},
    "AppsList": {},
    "PreviousAppsList": {
      "property1": [
        {
          "AppName": {},
          "Protocol": {},
          "Port": {}
        }
      ],
      "property2": [
        {
          "AppName": {},
          "Protocol": {},
          "Port": {}
        }
      ]
    }
  },
  "AppsListArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="getappslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAppsListResponse](#schemagetappslistresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|482|482|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetComplianceDetail

<a id="opIdGetComplianceDetail"></a>

> Code samples

```bash
curl 'https://fms.us-east-1.amazonaws.com/#X-Amz-Target=AWSFMS_20180101.GetComplianceDetail' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSFMS_20180101.GetComplianceDetail' \
  -d '{
    "PolicyId": {},
    "MemberAccount": {}
  }'
```

`POST /#X-Amz-Target=AWSFMS_20180101.GetComplianceDetail`

<p>Returns detailed compliance information about the specified member account. Details include resources that are in and out of compliance with the specified policy. </p> <ul> <li> <p>Resources are considered noncompliant for WAF and Shield Advanced policies if the specified policy has not been applied to them.</p> </li> <li> <p>Resources are considered noncompliant for security group policies if they are in scope of the policy, they violate one or more of the policy rules, and remediation is disabled or not possible.</p> </li> <li> <p>Resources are considered noncompliant for Network Firewall policies if a firewall is missing in the VPC, if the firewall endpoint isn't set up in an expected Availability Zone and subnet, if a subnet created by the Firewall Manager doesn't have the expected route table, and for modifications to a firewall policy that violate the Firewall Manager policy's rules.</p> </li> <li> <p>Resources are considered noncompliant for DNS Firewall policies if a DNS Firewall rule group is missing from the rule group associations for the VPC. </p> </li> </ul>

> Body parameter

```json
{
  "PolicyId": {},
  "MemberAccount": {}
}
```

<h3 id="getcompliancedetail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetComplianceDetailRequest](#schemagetcompliancedetailrequest)|true|none|
|» PolicyId|body|object|true|none|
|» MemberAccount|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSFMS_20180101.GetComplianceDetail|

> Example responses

> 200 Response

```json
{
  "PolicyComplianceDetail": {
    "PolicyOwner": {},
    "PolicyId": {},
    "MemberAccount": {},
    "Violators": {},
    "EvaluationLimitExceeded": {},
    "ExpiredAt": {},
    "IssueInfoMap": {
      "property1": "string",
      "property2": "string"
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

<h3 id="getcompliancedetail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetComplianceDetailResponse](#schemagetcompliancedetailresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|483|483|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetNotificationChannel

<a id="opIdGetNotificationChannel"></a>

> Code samples

```bash
curl 'https://fms.us-east-1.amazonaws.com/#X-Amz-Target=AWSFMS_20180101.GetNotificationChannel' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSFMS_20180101.GetNotificationChannel' \
  -d '{}'
```

`POST /#X-Amz-Target=AWSFMS_20180101.GetNotificationChannel`

Information about the Amazon Simple Notification Service (SNS) topic that is used to record Firewall Manager SNS logs.

> Body parameter

```json
{}
```

<h3 id="getnotificationchannel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetNotificationChannelRequest](#schemagetnotificationchannelrequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSFMS_20180101.GetNotificationChannel|

> Example responses

> 200 Response

```json
{
  "SnsTopicArn": {},
  "SnsRoleName": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="getnotificationchannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetNotificationChannelResponse](#schemagetnotificationchannelresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|482|482|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetPolicy

<a id="opIdGetPolicy"></a>

> Code samples

```bash
curl 'https://fms.us-east-1.amazonaws.com/#X-Amz-Target=AWSFMS_20180101.GetPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSFMS_20180101.GetPolicy' \
  -d '{
    "PolicyId": {}
  }'
```

`POST /#X-Amz-Target=AWSFMS_20180101.GetPolicy`

Returns information about the specified Firewall Manager policy.

> Body parameter

```json
{
  "PolicyId": {}
}
```

<h3 id="getpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetPolicyRequest](#schemagetpolicyrequest)|true|none|
|» PolicyId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSFMS_20180101.GetPolicy|

> Example responses

> 200 Response

```json
{
  "Policy": {
    "PolicyId": {},
    "PolicyName": {},
    "PolicyUpdateToken": {},
    "SecurityServicePolicyData": {
      "Type": {},
      "ManagedServiceData": {},
      "PolicyOption": {
        "NetworkFirewallPolicy": {
          "FirewallDeploymentModel": {}
        },
        "ThirdPartyFirewallPolicy": {
          "FirewallDeploymentModel": {}
        }
      }
    },
    "ResourceType": {},
    "ResourceTypeList": {},
    "ResourceTags": {},
    "ExcludeResourceTags": {},
    "RemediationEnabled": {},
    "DeleteUnusedFMManagedResources": {},
    "IncludeMap": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "ExcludeMap": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "ResourceSetIds": {},
    "PolicyDescription": {},
    "PolicyStatus": {}
  },
  "PolicyArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetPolicyResponse](#schemagetpolicyresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|482|482|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|483|483|InvalidTypeException|[InvalidTypeException](#schemainvalidtypeexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetProtectionStatus

<a id="opIdGetProtectionStatus"></a>

> Code samples

```bash
curl 'https://fms.us-east-1.amazonaws.com/#X-Amz-Target=AWSFMS_20180101.GetProtectionStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSFMS_20180101.GetProtectionStatus' \
  -d '{
    "PolicyId": {},
    "MemberAccountId": {},
    "StartTime": {},
    "EndTime": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSFMS_20180101.GetProtectionStatus`

If you created a Shield Advanced policy, returns policy-level attack summary information in the event of a potential DDoS attack. Other policy types are currently unsupported.

> Body parameter

```json
{
  "PolicyId": {},
  "MemberAccountId": {},
  "StartTime": {},
  "EndTime": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="getprotectionstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetProtectionStatusRequest](#schemagetprotectionstatusrequest)|true|none|
|» PolicyId|body|object|true|none|
|» MemberAccountId|body|object|false|none|
|» StartTime|body|object|false|none|
|» EndTime|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSFMS_20180101.GetProtectionStatus|

> Example responses

> 200 Response

```json
{
  "AdminAccountId": {},
  "ServiceType": {},
  "Data": {},
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

<h3 id="getprotectionstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetProtectionStatusResponse](#schemagetprotectionstatusresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetProtocolsList

<a id="opIdGetProtocolsList"></a>

> Code samples

```bash
curl 'https://fms.us-east-1.amazonaws.com/#X-Amz-Target=AWSFMS_20180101.GetProtocolsList' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSFMS_20180101.GetProtocolsList' \
  -d '{
    "ListId": {},
    "DefaultList": {}
  }'
```

`POST /#X-Amz-Target=AWSFMS_20180101.GetProtocolsList`

Returns information about the specified Firewall Manager protocols list.

> Body parameter

```json
{
  "ListId": {},
  "DefaultList": {}
}
```

<h3 id="getprotocolslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetProtocolsListRequest](#schemagetprotocolslistrequest)|true|none|
|» ListId|body|object|true|none|
|» DefaultList|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSFMS_20180101.GetProtocolsList|

> Example responses

> 200 Response

```json
{
  "ProtocolsList": {
    "ListId": {},
    "ListName": {},
    "ListUpdateToken": {},
    "CreateTime": {},
    "LastUpdateTime": {},
    "ProtocolsList": {},
    "PreviousProtocolsList": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    }
  },
  "ProtocolsListArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="getprotocolslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetProtocolsListResponse](#schemagetprotocolslistresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|482|482|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetResourceSet

<a id="opIdGetResourceSet"></a>

> Code samples

```bash
curl 'https://fms.us-east-1.amazonaws.com/#X-Amz-Target=AWSFMS_20180101.GetResourceSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSFMS_20180101.GetResourceSet' \
  -d '{
    "Identifier": {}
  }'
```

`POST /#X-Amz-Target=AWSFMS_20180101.GetResourceSet`

Gets information about a specific resource set.

> Body parameter

```json
{
  "Identifier": {}
}
```

<h3 id="getresourceset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetResourceSetRequest](#schemagetresourcesetrequest)|true|none|
|» Identifier|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSFMS_20180101.GetResourceSet|

> Example responses

> 200 Response

```json
{
  "ResourceSet": {
    "Id": {},
    "Name": {},
    "Description": {},
    "UpdateToken": {},
    "ResourceTypeList": {},
    "LastUpdateTime": {},
    "ResourceSetStatus": {}
  },
  "ResourceSetArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getresourceset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetResourceSetResponse](#schemagetresourcesetresponse)|
|480|480|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetThirdPartyFirewallAssociationStatus

<a id="opIdGetThirdPartyFirewallAssociationStatus"></a>

> Code samples

```bash
curl 'https://fms.us-east-1.amazonaws.com/#X-Amz-Target=AWSFMS_20180101.GetThirdPartyFirewallAssociationStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSFMS_20180101.GetThirdPartyFirewallAssociationStatus' \
  -d '{
    "ThirdPartyFirewall": {}
  }'
```

`POST /#X-Amz-Target=AWSFMS_20180101.GetThirdPartyFirewallAssociationStatus`

The onboarding status of a Firewall Manager admin account to third-party firewall vendor tenant.

> Body parameter

```json
{
  "ThirdPartyFirewall": {}
}
```

<h3 id="getthirdpartyfirewallassociationstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetThirdPartyFirewallAssociationStatusRequest](#schemagetthirdpartyfirewallassociationstatusrequest)|true|none|
|» ThirdPartyFirewall|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSFMS_20180101.GetThirdPartyFirewallAssociationStatus|

> Example responses

> 200 Response

```json
{
  "ThirdPartyFirewallStatus": {},
  "MarketplaceOnboardingStatus": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getthirdpartyfirewallassociationstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetThirdPartyFirewallAssociationStatusResponse](#schemagetthirdpartyfirewallassociationstatusresponse)|
|480|480|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetViolationDetails

<a id="opIdGetViolationDetails"></a>

> Code samples

```bash
curl 'https://fms.us-east-1.amazonaws.com/#X-Amz-Target=AWSFMS_20180101.GetViolationDetails' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSFMS_20180101.GetViolationDetails' \
  -d '{
    "PolicyId": {},
    "MemberAccount": {},
    "ResourceId": {},
    "ResourceType": {}
  }'
```

`POST /#X-Amz-Target=AWSFMS_20180101.GetViolationDetails`

Retrieves violations for a resource based on the specified Firewall Manager policy and Amazon Web Services account.

> Body parameter

```json
{
  "PolicyId": {},
  "MemberAccount": {},
  "ResourceId": {},
  "ResourceType": {}
}
```

<h3 id="getviolationdetails-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetViolationDetailsRequest](#schemagetviolationdetailsrequest)|true|none|
|» PolicyId|body|object|true|none|
|» MemberAccount|body|object|true|none|
|» ResourceId|body|object|true|none|
|» ResourceType|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSFMS_20180101.GetViolationDetails|

> Example responses

> 200 Response

```json
{
  "ViolationDetail": {
    "PolicyId": {},
    "MemberAccount": {},
    "ResourceId": {},
    "ResourceType": {},
    "ResourceViolations": {},
    "ResourceTags": {},
    "ResourceDescription": {}
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

<h3 id="getviolationdetails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetViolationDetailsResponse](#schemagetviolationdetailsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAdminAccountsForOrganization

<a id="opIdListAdminAccountsForOrganization"></a>

> Code samples

```bash
curl 'https://fms.us-east-1.amazonaws.com/#X-Amz-Target=AWSFMS_20180101.ListAdminAccountsForOrganization' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSFMS_20180101.ListAdminAccountsForOrganization' \
  -d '{
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSFMS_20180101.ListAdminAccountsForOrganization`

<p>Returns a <code>AdminAccounts</code> object that lists the Firewall Manager administrators within the organization that are onboarded to Firewall Manager by <a>AssociateAdminAccount</a>.</p> <p>This operation can be called only from the organization's management account.</p>

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listadminaccountsfororganization-parameters">Parameters</h3>

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
|body|body|[ListAdminAccountsForOrganizationRequest](#schemalistadminaccountsfororganizationrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSFMS_20180101.ListAdminAccountsForOrganization|

> Example responses

> 200 Response

```json
{
  "AdminAccounts": {},
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

<h3 id="listadminaccountsfororganization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAdminAccountsForOrganizationResponse](#schemalistadminaccountsfororganizationresponse)|
|480|480|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAdminsManagingAccount

<a id="opIdListAdminsManagingAccount"></a>

> Code samples

```bash
curl 'https://fms.us-east-1.amazonaws.com/#X-Amz-Target=AWSFMS_20180101.ListAdminsManagingAccount' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSFMS_20180101.ListAdminsManagingAccount' \
  -d '{
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSFMS_20180101.ListAdminsManagingAccount`

Lists the accounts that are managing the specified Organizations member account. This is useful for any member account so that they can view the accounts who are managing their account. This operation only returns the managing administrators that have the requested account within their <a>AdminScope</a>.

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listadminsmanagingaccount-parameters">Parameters</h3>

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
|body|body|[ListAdminsManagingAccountRequest](#schemalistadminsmanagingaccountrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSFMS_20180101.ListAdminsManagingAccount|

> Example responses

> 200 Response

```json
{
  "AdminAccounts": {},
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

<h3 id="listadminsmanagingaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAdminsManagingAccountResponse](#schemalistadminsmanagingaccountresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAppsLists

<a id="opIdListAppsLists"></a>

> Code samples

```bash
curl 'https://fms.us-east-1.amazonaws.com/#X-Amz-Target=AWSFMS_20180101.ListAppsLists' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSFMS_20180101.ListAppsLists' \
  -d '{
    "DefaultLists": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSFMS_20180101.ListAppsLists`

Returns an array of <code>AppsListDataSummary</code> objects.

> Body parameter

```json
{
  "DefaultLists": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listappslists-parameters">Parameters</h3>

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
|body|body|[ListAppsListsRequest](#schemalistappslistsrequest)|true|none|
|» DefaultLists|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSFMS_20180101.ListAppsLists|

> Example responses

> 200 Response

```json
{
  "AppsLists": {},
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

<h3 id="listappslists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAppsListsResponse](#schemalistappslistsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListComplianceStatus

<a id="opIdListComplianceStatus"></a>

> Code samples

```bash
curl 'https://fms.us-east-1.amazonaws.com/#X-Amz-Target=AWSFMS_20180101.ListComplianceStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSFMS_20180101.ListComplianceStatus' \
  -d '{
    "PolicyId": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSFMS_20180101.ListComplianceStatus`

Returns an array of <code>PolicyComplianceStatus</code> objects. Use <code>PolicyComplianceStatus</code> to get a summary of which member accounts are protected by the specified policy. 

> Body parameter

```json
{
  "PolicyId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listcompliancestatus-parameters">Parameters</h3>

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
|body|body|[ListComplianceStatusRequest](#schemalistcompliancestatusrequest)|true|none|
|» PolicyId|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSFMS_20180101.ListComplianceStatus|

> Example responses

> 200 Response

```json
{
  "PolicyComplianceStatusList": {},
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

<h3 id="listcompliancestatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListComplianceStatusResponse](#schemalistcompliancestatusresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDiscoveredResources

<a id="opIdListDiscoveredResources"></a>

> Code samples

```bash
curl 'https://fms.us-east-1.amazonaws.com/#X-Amz-Target=AWSFMS_20180101.ListDiscoveredResources' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSFMS_20180101.ListDiscoveredResources' \
  -d '{
    "MemberAccountIds": {},
    "ResourceType": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AWSFMS_20180101.ListDiscoveredResources`

Returns an array of resources in the organization's accounts that are available to be associated with a resource set.

> Body parameter

```json
{
  "MemberAccountIds": {},
  "ResourceType": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listdiscoveredresources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListDiscoveredResourcesRequest](#schemalistdiscoveredresourcesrequest)|true|none|
|» MemberAccountIds|body|object|true|none|
|» ResourceType|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSFMS_20180101.ListDiscoveredResources|

> Example responses

> 200 Response

```json
{
  "Items": {},
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

<h3 id="listdiscoveredresources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDiscoveredResourcesResponse](#schemalistdiscoveredresourcesresponse)|
|480|480|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListMemberAccounts

<a id="opIdListMemberAccounts"></a>

> Code samples

```bash
curl 'https://fms.us-east-1.amazonaws.com/#X-Amz-Target=AWSFMS_20180101.ListMemberAccounts' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSFMS_20180101.ListMemberAccounts' \
  -d '{
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSFMS_20180101.ListMemberAccounts`

<p>Returns a <code>MemberAccounts</code> object that lists the member accounts in the administrator's Amazon Web Services organization.</p> <p>Either an Firewall Manager administrator or the organization's management account can make this request.</p>

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listmemberaccounts-parameters">Parameters</h3>

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
|body|body|[ListMemberAccountsRequest](#schemalistmemberaccountsrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSFMS_20180101.ListMemberAccounts|

> Example responses

> 200 Response

```json
{
  "MemberAccounts": {},
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

<h3 id="listmemberaccounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListMemberAccountsResponse](#schemalistmemberaccountsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPolicies

<a id="opIdListPolicies"></a>

> Code samples

```bash
curl 'https://fms.us-east-1.amazonaws.com/#X-Amz-Target=AWSFMS_20180101.ListPolicies' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSFMS_20180101.ListPolicies' \
  -d '{
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSFMS_20180101.ListPolicies`

Returns an array of <code>PolicySummary</code> objects.

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listpolicies-parameters">Parameters</h3>

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
|body|body|[ListPoliciesRequest](#schemalistpoliciesrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSFMS_20180101.ListPolicies|

> Example responses

> 200 Response

```json
{
  "PolicyList": {},
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

<h3 id="listpolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPoliciesResponse](#schemalistpoliciesresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListProtocolsLists

<a id="opIdListProtocolsLists"></a>

> Code samples

```bash
curl 'https://fms.us-east-1.amazonaws.com/#X-Amz-Target=AWSFMS_20180101.ListProtocolsLists' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSFMS_20180101.ListProtocolsLists' \
  -d '{
    "DefaultLists": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSFMS_20180101.ListProtocolsLists`

Returns an array of <code>ProtocolsListDataSummary</code> objects.

> Body parameter

```json
{
  "DefaultLists": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listprotocolslists-parameters">Parameters</h3>

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
|body|body|[ListProtocolsListsRequest](#schemalistprotocolslistsrequest)|true|none|
|» DefaultLists|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSFMS_20180101.ListProtocolsLists|

> Example responses

> 200 Response

```json
{
  "ProtocolsLists": {},
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

<h3 id="listprotocolslists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListProtocolsListsResponse](#schemalistprotocolslistsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|482|482|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListResourceSetResources

<a id="opIdListResourceSetResources"></a>

> Code samples

```bash
curl 'https://fms.us-east-1.amazonaws.com/#X-Amz-Target=AWSFMS_20180101.ListResourceSetResources' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSFMS_20180101.ListResourceSetResources' \
  -d '{
    "Identifier": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AWSFMS_20180101.ListResourceSetResources`

Returns an array of resources that are currently associated to a resource set.

> Body parameter

```json
{
  "Identifier": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listresourcesetresources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListResourceSetResourcesRequest](#schemalistresourcesetresourcesrequest)|true|none|
|» Identifier|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSFMS_20180101.ListResourceSetResources|

> Example responses

> 200 Response

```json
{
  "Items": {},
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

<h3 id="listresourcesetresources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListResourceSetResourcesResponse](#schemalistresourcesetresourcesresponse)|
|480|480|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListResourceSets

<a id="opIdListResourceSets"></a>

> Code samples

```bash
curl 'https://fms.us-east-1.amazonaws.com/#X-Amz-Target=AWSFMS_20180101.ListResourceSets' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSFMS_20180101.ListResourceSets' \
  -d '{
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSFMS_20180101.ListResourceSets`

Returns an array of <code>ResourceSetSummary</code> objects.

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listresourcesets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListResourceSetsRequest](#schemalistresourcesetsrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSFMS_20180101.ListResourceSets|

> Example responses

> 200 Response

```json
{
  "ResourceSets": {},
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

<h3 id="listresourcesets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListResourceSetsResponse](#schemalistresourcesetsresponse)|
|480|480|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://fms.us-east-1.amazonaws.com/#X-Amz-Target=AWSFMS_20180101.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSFMS_20180101.ListTagsForResource' \
  -d '{
    "ResourceArn": {}
  }'
```

`POST /#X-Amz-Target=AWSFMS_20180101.ListTagsForResource`

Retrieves the list of tags for the specified Amazon Web Services resource. 

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
|X-Amz-Target|AWSFMS_20180101.ListTagsForResource|

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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|482|482|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|483|483|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListThirdPartyFirewallFirewallPolicies

<a id="opIdListThirdPartyFirewallFirewallPolicies"></a>

> Code samples

```bash
curl 'https://fms.us-east-1.amazonaws.com/#X-Amz-Target=AWSFMS_20180101.ListThirdPartyFirewallFirewallPolicies' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSFMS_20180101.ListThirdPartyFirewallFirewallPolicies' \
  -d '{
    "ThirdPartyFirewall": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSFMS_20180101.ListThirdPartyFirewallFirewallPolicies`

Retrieves a list of all of the third-party firewall policies that are associated with the third-party firewall administrator's account.

> Body parameter

```json
{
  "ThirdPartyFirewall": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listthirdpartyfirewallfirewallpolicies-parameters">Parameters</h3>

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
|body|body|[ListThirdPartyFirewallFirewallPoliciesRequest](#schemalistthirdpartyfirewallfirewallpoliciesrequest)|true|none|
|» ThirdPartyFirewall|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSFMS_20180101.ListThirdPartyFirewallFirewallPolicies|

> Example responses

> 200 Response

```json
{
  "ThirdPartyFirewallFirewallPolicies": {},
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

<h3 id="listthirdpartyfirewallfirewallpolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListThirdPartyFirewallFirewallPoliciesResponse](#schemalistthirdpartyfirewallfirewallpoliciesresponse)|
|480|480|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutAdminAccount

<a id="opIdPutAdminAccount"></a>

> Code samples

```bash
curl 'https://fms.us-east-1.amazonaws.com/#X-Amz-Target=AWSFMS_20180101.PutAdminAccount' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSFMS_20180101.PutAdminAccount' \
  -d '{
    "AdminAccount": {},
    "AdminScope": {
      "AccountScope": {
        "Accounts": {},
        "AllAccountsEnabled": {},
        "ExcludeSpecifiedAccounts": {}
      },
      "OrganizationalUnitScope": {
        "OrganizationalUnits": {},
        "AllOrganizationalUnitsEnabled": {},
        "ExcludeSpecifiedOrganizationalUnits": {}
      },
      "RegionScope": {
        "Regions": {},
        "AllRegionsEnabled": {}
      },
      "PolicyTypeScope": {
        "PolicyTypes": {},
        "AllPolicyTypesEnabled": {}
      }
    }
  }'
```

`POST /#X-Amz-Target=AWSFMS_20180101.PutAdminAccount`

Creates or updates an Firewall Manager administrator account. The account must be a member of the organization that was onboarded to Firewall Manager by <a>AssociateAdminAccount</a>. Only the organization's management account can create an Firewall Manager administrator account. When you create an Firewall Manager administrator account, the service checks to see if the account is already a delegated administrator within Organizations. If the account isn't a delegated administrator, Firewall Manager calls Organizations to delegate the account within Organizations. For more information about administrator accounts within Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts.html">Managing the Amazon Web Services Accounts in Your Organization</a>.

> Body parameter

```json
{
  "AdminAccount": {},
  "AdminScope": {
    "AccountScope": {
      "Accounts": {},
      "AllAccountsEnabled": {},
      "ExcludeSpecifiedAccounts": {}
    },
    "OrganizationalUnitScope": {
      "OrganizationalUnits": {},
      "AllOrganizationalUnitsEnabled": {},
      "ExcludeSpecifiedOrganizationalUnits": {}
    },
    "RegionScope": {
      "Regions": {},
      "AllRegionsEnabled": {}
    },
    "PolicyTypeScope": {
      "PolicyTypes": {},
      "AllPolicyTypesEnabled": {}
    }
  }
}
```

<h3 id="putadminaccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[PutAdminAccountRequest](#schemaputadminaccountrequest)|true|none|
|» AdminAccount|body|object|true|none|
|» AdminScope|body|object|false|none|
|» » AccountScope|body|object|false|none|
|» » » Accounts|body|object|false|none|
|» » » AllAccountsEnabled|body|object|false|none|
|» » » ExcludeSpecifiedAccounts|body|object|false|none|
|» » OrganizationalUnitScope|body|object|false|none|
|» » » OrganizationalUnits|body|object|false|none|
|» » » AllOrganizationalUnitsEnabled|body|object|false|none|
|» » » ExcludeSpecifiedOrganizationalUnits|body|object|false|none|
|» » RegionScope|body|object|false|none|
|» » » Regions|body|object|false|none|
|» » » AllRegionsEnabled|body|object|false|none|
|» » PolicyTypeScope|body|object|false|none|
|» » » PolicyTypes|body|object|false|none|
|» » » AllPolicyTypesEnabled|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSFMS_20180101.PutAdminAccount|

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

<h3 id="putadminaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutAppsList

<a id="opIdPutAppsList"></a>

> Code samples

```bash
curl 'https://fms.us-east-1.amazonaws.com/#X-Amz-Target=AWSFMS_20180101.PutAppsList' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSFMS_20180101.PutAppsList' \
  -d '{
    "AppsList": {
      "ListId": {},
      "ListName": {},
      "ListUpdateToken": {},
      "CreateTime": {},
      "LastUpdateTime": {},
      "AppsList": {},
      "PreviousAppsList": {
        "property1": [
          {
            "AppName": {},
            "Protocol": {},
            "Port": {}
          }
        ],
        "property2": [
          {
            "AppName": {},
            "Protocol": {},
            "Port": {}
          }
        ]
      }
    },
    "TagList": {}
  }'
```

`POST /#X-Amz-Target=AWSFMS_20180101.PutAppsList`

Creates an Firewall Manager applications list.

> Body parameter

```json
{
  "AppsList": {
    "ListId": {},
    "ListName": {},
    "ListUpdateToken": {},
    "CreateTime": {},
    "LastUpdateTime": {},
    "AppsList": {},
    "PreviousAppsList": {
      "property1": [
        {
          "AppName": {},
          "Protocol": {},
          "Port": {}
        }
      ],
      "property2": [
        {
          "AppName": {},
          "Protocol": {},
          "Port": {}
        }
      ]
    }
  },
  "TagList": {}
}
```

<h3 id="putappslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[PutAppsListRequest](#schemaputappslistrequest)|true|none|
|» AppsList|body|object|true|none|
|» » ListId|body|object|false|none|
|» » ListName|body|object|true|none|
|» » ListUpdateToken|body|object|false|none|
|» » CreateTime|body|object|false|none|
|» » LastUpdateTime|body|object|false|none|
|» » AppsList|body|object|true|none|
|» » PreviousAppsList|body|object|false|none|
|» » » **additionalProperties**|body|[AppsList](#schemaappslist)|false|none|
|» TagList|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSFMS_20180101.PutAppsList|

> Example responses

> 200 Response

```json
{
  "AppsList": {
    "ListId": {},
    "ListName": {},
    "ListUpdateToken": {},
    "CreateTime": {},
    "LastUpdateTime": {},
    "AppsList": {},
    "PreviousAppsList": {
      "property1": [
        {
          "AppName": {},
          "Protocol": {},
          "Port": {}
        }
      ],
      "property2": [
        {
          "AppName": {},
          "Protocol": {},
          "Port": {}
        }
      ]
    }
  },
  "AppsListArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="putappslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutAppsListResponse](#schemaputappslistresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|482|482|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutNotificationChannel

<a id="opIdPutNotificationChannel"></a>

> Code samples

```bash
curl 'https://fms.us-east-1.amazonaws.com/#X-Amz-Target=AWSFMS_20180101.PutNotificationChannel' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSFMS_20180101.PutNotificationChannel' \
  -d '{
    "SnsTopicArn": {},
    "SnsRoleName": {}
  }'
```

`POST /#X-Amz-Target=AWSFMS_20180101.PutNotificationChannel`

<p>Designates the IAM role and Amazon Simple Notification Service (SNS) topic that Firewall Manager uses to record SNS logs.</p> <p>To perform this action outside of the console, you must first configure the SNS topic's access policy to allow the <code>SnsRoleName</code> to publish SNS logs. If the <code>SnsRoleName</code> provided is a role other than the <code>AWSServiceRoleForFMS</code> service-linked role, this role must have a trust relationship configured to allow the Firewall Manager service principal <code>fms.amazonaws.com</code> to assume this role. For information about configuring an SNS access policy, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-security_iam_service-with-iam.html#fms-security_iam_service-with-iam-roles-service">Service roles for Firewall Manager</a> in the <i>Firewall Manager Developer Guide</i>.</p>

> Body parameter

```json
{
  "SnsTopicArn": {},
  "SnsRoleName": {}
}
```

<h3 id="putnotificationchannel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[PutNotificationChannelRequest](#schemaputnotificationchannelrequest)|true|none|
|» SnsTopicArn|body|object|true|none|
|» SnsRoleName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSFMS_20180101.PutNotificationChannel|

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

<h3 id="putnotificationchannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|482|482|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutPolicy

<a id="opIdPutPolicy"></a>

> Code samples

```bash
curl 'https://fms.us-east-1.amazonaws.com/#X-Amz-Target=AWSFMS_20180101.PutPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSFMS_20180101.PutPolicy' \
  -d '{
    "Policy": {
      "PolicyId": {},
      "PolicyName": {},
      "PolicyUpdateToken": {},
      "SecurityServicePolicyData": {
        "Type": {},
        "ManagedServiceData": {},
        "PolicyOption": {
          "NetworkFirewallPolicy": {
            "FirewallDeploymentModel": {}
          },
          "ThirdPartyFirewallPolicy": {
            "FirewallDeploymentModel": {}
          }
        }
      },
      "ResourceType": {},
      "ResourceTypeList": {},
      "ResourceTags": {},
      "ExcludeResourceTags": {},
      "RemediationEnabled": {},
      "DeleteUnusedFMManagedResources": {},
      "IncludeMap": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      },
      "ExcludeMap": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      },
      "ResourceSetIds": {},
      "PolicyDescription": {},
      "PolicyStatus": {}
    },
    "TagList": {}
  }'
```

`POST /#X-Amz-Target=AWSFMS_20180101.PutPolicy`

<p>Creates an Firewall Manager policy.</p> <p>Firewall Manager provides the following types of policies: </p> <ul> <li> <p>An WAF policy (type WAFV2), which defines rule groups to run first in the corresponding WAF web ACL and rule groups to run last in the web ACL.</p> </li> <li> <p>An WAF Classic policy (type WAF), which defines a rule group. </p> </li> <li> <p>A Shield Advanced policy, which applies Shield Advanced protection to specified accounts and resources.</p> </li> <li> <p>A security group policy, which manages VPC security groups across your Amazon Web Services organization. </p> </li> <li> <p>An Network Firewall policy, which provides firewall rules to filter network traffic in specified Amazon VPCs.</p> </li> <li> <p>A DNS Firewall policy, which provides Route 53 Resolver DNS Firewall rules to filter DNS queries for specified VPCs.</p> </li> </ul> <p>Each policy is specific to one of the types. If you want to enforce more than one policy type across accounts, create multiple policies. You can create multiple policies for each type.</p> <p>You must be subscribed to Shield Advanced to create a Shield Advanced policy. For more information about subscribing to Shield Advanced, see <a href="https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_CreateSubscription.html">CreateSubscription</a>.</p>

> Body parameter

```json
{
  "Policy": {
    "PolicyId": {},
    "PolicyName": {},
    "PolicyUpdateToken": {},
    "SecurityServicePolicyData": {
      "Type": {},
      "ManagedServiceData": {},
      "PolicyOption": {
        "NetworkFirewallPolicy": {
          "FirewallDeploymentModel": {}
        },
        "ThirdPartyFirewallPolicy": {
          "FirewallDeploymentModel": {}
        }
      }
    },
    "ResourceType": {},
    "ResourceTypeList": {},
    "ResourceTags": {},
    "ExcludeResourceTags": {},
    "RemediationEnabled": {},
    "DeleteUnusedFMManagedResources": {},
    "IncludeMap": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "ExcludeMap": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "ResourceSetIds": {},
    "PolicyDescription": {},
    "PolicyStatus": {}
  },
  "TagList": {}
}
```

<h3 id="putpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[PutPolicyRequest](#schemaputpolicyrequest)|true|none|
|» Policy|body|object|true|none|
|» » PolicyId|body|object|false|none|
|» » PolicyName|body|object|true|none|
|» » PolicyUpdateToken|body|object|false|none|
|» » SecurityServicePolicyData|body|object|true|none|
|» » » Type|body|object|true|none|
|» » » ManagedServiceData|body|object|false|none|
|» » » PolicyOption|body|object|false|none|
|» » » » NetworkFirewallPolicy|body|object|false|none|
|» » » » » FirewallDeploymentModel|body|object|false|none|
|» » » » ThirdPartyFirewallPolicy|body|object|false|none|
|» » » » » FirewallDeploymentModel|body|object|false|none|
|» » ResourceType|body|object|true|none|
|» » ResourceTypeList|body|object|false|none|
|» » ResourceTags|body|object|false|none|
|» » ExcludeResourceTags|body|object|true|none|
|» » RemediationEnabled|body|object|true|none|
|» » DeleteUnusedFMManagedResources|body|object|false|none|
|» » IncludeMap|body|object|false|none|
|» » » **additionalProperties**|body|[CustomerPolicyScopeIdList](#schemacustomerpolicyscopeidlist)|false|none|
|» » ExcludeMap|body|object|false|none|
|» » » **additionalProperties**|body|[CustomerPolicyScopeIdList](#schemacustomerpolicyscopeidlist)|false|none|
|» » ResourceSetIds|body|object|false|none|
|» » PolicyDescription|body|object|false|none|
|» » PolicyStatus|body|object|false|none|
|» TagList|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSFMS_20180101.PutPolicy|

> Example responses

> 200 Response

```json
{
  "Policy": {
    "PolicyId": {},
    "PolicyName": {},
    "PolicyUpdateToken": {},
    "SecurityServicePolicyData": {
      "Type": {},
      "ManagedServiceData": {},
      "PolicyOption": {
        "NetworkFirewallPolicy": {
          "FirewallDeploymentModel": {}
        },
        "ThirdPartyFirewallPolicy": {
          "FirewallDeploymentModel": {}
        }
      }
    },
    "ResourceType": {},
    "ResourceTypeList": {},
    "ResourceTags": {},
    "ExcludeResourceTags": {},
    "RemediationEnabled": {},
    "DeleteUnusedFMManagedResources": {},
    "IncludeMap": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "ExcludeMap": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "ResourceSetIds": {},
    "PolicyDescription": {},
    "PolicyStatus": {}
  },
  "PolicyArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="putpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutPolicyResponse](#schemaputpolicyresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|482|482|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|485|485|InvalidTypeException|[InvalidTypeException](#schemainvalidtypeexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutProtocolsList

<a id="opIdPutProtocolsList"></a>

> Code samples

```bash
curl 'https://fms.us-east-1.amazonaws.com/#X-Amz-Target=AWSFMS_20180101.PutProtocolsList' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSFMS_20180101.PutProtocolsList' \
  -d '{
    "ProtocolsList": {
      "ListId": {},
      "ListName": {},
      "ListUpdateToken": {},
      "CreateTime": {},
      "LastUpdateTime": {},
      "ProtocolsList": {},
      "PreviousProtocolsList": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      }
    },
    "TagList": {}
  }'
```

`POST /#X-Amz-Target=AWSFMS_20180101.PutProtocolsList`

Creates an Firewall Manager protocols list.

> Body parameter

```json
{
  "ProtocolsList": {
    "ListId": {},
    "ListName": {},
    "ListUpdateToken": {},
    "CreateTime": {},
    "LastUpdateTime": {},
    "ProtocolsList": {},
    "PreviousProtocolsList": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    }
  },
  "TagList": {}
}
```

<h3 id="putprotocolslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[PutProtocolsListRequest](#schemaputprotocolslistrequest)|true|none|
|» ProtocolsList|body|object|true|none|
|» » ListId|body|object|false|none|
|» » ListName|body|object|true|none|
|» » ListUpdateToken|body|object|false|none|
|» » CreateTime|body|object|false|none|
|» » LastUpdateTime|body|object|false|none|
|» » ProtocolsList|body|object|true|none|
|» » PreviousProtocolsList|body|object|false|none|
|» » » **additionalProperties**|body|[ProtocolsList](#schemaprotocolslist)|false|none|
|» TagList|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSFMS_20180101.PutProtocolsList|

> Example responses

> 200 Response

```json
{
  "ProtocolsList": {
    "ListId": {},
    "ListName": {},
    "ListUpdateToken": {},
    "CreateTime": {},
    "LastUpdateTime": {},
    "ProtocolsList": {},
    "PreviousProtocolsList": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    }
  },
  "ProtocolsListArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="putprotocolslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutProtocolsListResponse](#schemaputprotocolslistresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|482|482|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutResourceSet

<a id="opIdPutResourceSet"></a>

> Code samples

```bash
curl 'https://fms.us-east-1.amazonaws.com/#X-Amz-Target=AWSFMS_20180101.PutResourceSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSFMS_20180101.PutResourceSet' \
  -d '{
    "ResourceSet": {
      "Id": {},
      "Name": {},
      "Description": {},
      "UpdateToken": {},
      "ResourceTypeList": {},
      "LastUpdateTime": {},
      "ResourceSetStatus": {}
    },
    "TagList": {}
  }'
```

`POST /#X-Amz-Target=AWSFMS_20180101.PutResourceSet`

<p>Creates the resource set.</p> <p>An Firewall Manager resource set defines the resources to import into an Firewall Manager policy from another Amazon Web Services service.</p>

> Body parameter

```json
{
  "ResourceSet": {
    "Id": {},
    "Name": {},
    "Description": {},
    "UpdateToken": {},
    "ResourceTypeList": {},
    "LastUpdateTime": {},
    "ResourceSetStatus": {}
  },
  "TagList": {}
}
```

<h3 id="putresourceset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[PutResourceSetRequest](#schemaputresourcesetrequest)|true|none|
|» ResourceSet|body|object|true|none|
|» » Id|body|object|false|none|
|» » Name|body|object|true|none|
|» » Description|body|object|false|none|
|» » UpdateToken|body|object|false|none|
|» » ResourceTypeList|body|object|true|none|
|» » LastUpdateTime|body|object|false|none|
|» » ResourceSetStatus|body|object|false|none|
|» TagList|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSFMS_20180101.PutResourceSet|

> Example responses

> 200 Response

```json
{
  "ResourceSet": {
    "Id": {},
    "Name": {},
    "Description": {},
    "UpdateToken": {},
    "ResourceTypeList": {},
    "LastUpdateTime": {},
    "ResourceSetStatus": {}
  },
  "ResourceSetArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="putresourceset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutResourceSetResponse](#schemaputresourcesetresponse)|
|480|480|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://fms.us-east-1.amazonaws.com/#X-Amz-Target=AWSFMS_20180101.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSFMS_20180101.TagResource' \
  -d '{
    "ResourceArn": {},
    "TagList": {}
  }'
```

`POST /#X-Amz-Target=AWSFMS_20180101.TagResource`

Adds one or more tags to an Amazon Web Services resource.

> Body parameter

```json
{
  "ResourceArn": {},
  "TagList": {}
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
|» TagList|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSFMS_20180101.TagResource|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|482|482|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|483|483|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://fms.us-east-1.amazonaws.com/#X-Amz-Target=AWSFMS_20180101.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSFMS_20180101.UntagResource' \
  -d '{
    "ResourceArn": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=AWSFMS_20180101.UntagResource`

Removes one or more tags from an Amazon Web Services resource.

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
|X-Amz-Target|AWSFMS_20180101.UntagResource|

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
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|482|482|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|483|483|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AssociateAdminAccountRequest">AssociateAdminAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociateadminaccountrequest"></a>
<a id="schema_AssociateAdminAccountRequest"></a>
<a id="tocSassociateadminaccountrequest"></a>
<a id="tocsassociateadminaccountrequest"></a>

```json
{
  "AdminAccount": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdminAccount|object|true|none|none|

<h2 id="tocS_InvalidOperationException">InvalidOperationException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidoperationexception"></a>
<a id="schema_InvalidOperationException"></a>
<a id="tocSinvalidoperationexception"></a>
<a id="tocsinvalidoperationexception"></a>

```json
null
```

<h2 id="tocS_InvalidInputException">InvalidInputException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidinputexception"></a>
<a id="schema_InvalidInputException"></a>
<a id="tocSinvalidinputexception"></a>
<a id="tocsinvalidinputexception"></a>

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

<h2 id="tocS_InternalErrorException">InternalErrorException</h2>
<!-- backwards compatibility -->
<a id="schemainternalerrorexception"></a>
<a id="schema_InternalErrorException"></a>
<a id="tocSinternalerrorexception"></a>
<a id="tocsinternalerrorexception"></a>

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

<h2 id="tocS_AssociateThirdPartyFirewallResponse">AssociateThirdPartyFirewallResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociatethirdpartyfirewallresponse"></a>
<a id="schema_AssociateThirdPartyFirewallResponse"></a>
<a id="tocSassociatethirdpartyfirewallresponse"></a>
<a id="tocsassociatethirdpartyfirewallresponse"></a>

```json
{
  "ThirdPartyFirewallStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ThirdPartyFirewallStatus|object|false|none|none|

<h2 id="tocS_AssociateThirdPartyFirewallRequest">AssociateThirdPartyFirewallRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatethirdpartyfirewallrequest"></a>
<a id="schema_AssociateThirdPartyFirewallRequest"></a>
<a id="tocSassociatethirdpartyfirewallrequest"></a>
<a id="tocsassociatethirdpartyfirewallrequest"></a>

```json
{
  "ThirdPartyFirewall": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ThirdPartyFirewall|object|true|none|none|

<h2 id="tocS_BatchAssociateResourceResponse">BatchAssociateResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchassociateresourceresponse"></a>
<a id="schema_BatchAssociateResourceResponse"></a>
<a id="tocSbatchassociateresourceresponse"></a>
<a id="tocsbatchassociateresourceresponse"></a>

```json
{
  "ResourceSetIdentifier": {},
  "FailedItems": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceSetIdentifier|object|true|none|none|
|FailedItems|object|true|none|none|

<h2 id="tocS_BatchAssociateResourceRequest">BatchAssociateResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchassociateresourcerequest"></a>
<a id="schema_BatchAssociateResourceRequest"></a>
<a id="tocSbatchassociateresourcerequest"></a>
<a id="tocsbatchassociateresourcerequest"></a>

```json
{
  "ResourceSetIdentifier": {},
  "Items": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceSetIdentifier|object|true|none|none|
|Items|object|true|none|none|

<h2 id="tocS_BatchDisassociateResourceResponse">BatchDisassociateResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchdisassociateresourceresponse"></a>
<a id="schema_BatchDisassociateResourceResponse"></a>
<a id="tocSbatchdisassociateresourceresponse"></a>
<a id="tocsbatchdisassociateresourceresponse"></a>

```json
{
  "ResourceSetIdentifier": {},
  "FailedItems": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceSetIdentifier|object|true|none|none|
|FailedItems|object|true|none|none|

<h2 id="tocS_BatchDisassociateResourceRequest">BatchDisassociateResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchdisassociateresourcerequest"></a>
<a id="schema_BatchDisassociateResourceRequest"></a>
<a id="tocSbatchdisassociateresourcerequest"></a>
<a id="tocsbatchdisassociateresourcerequest"></a>

```json
{
  "ResourceSetIdentifier": {},
  "Items": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceSetIdentifier|object|true|none|none|
|Items|object|true|none|none|

<h2 id="tocS_DeleteAppsListRequest">DeleteAppsListRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteappslistrequest"></a>
<a id="schema_DeleteAppsListRequest"></a>
<a id="tocSdeleteappslistrequest"></a>
<a id="tocsdeleteappslistrequest"></a>

```json
{
  "ListId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ListId|object|true|none|none|

<h2 id="tocS_DeleteNotificationChannelRequest">DeleteNotificationChannelRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletenotificationchannelrequest"></a>
<a id="schema_DeleteNotificationChannelRequest"></a>
<a id="tocSdeletenotificationchannelrequest"></a>
<a id="tocsdeletenotificationchannelrequest"></a>

```json
{}
```

<h2 id="tocS_DeletePolicyRequest">DeletePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletepolicyrequest"></a>
<a id="schema_DeletePolicyRequest"></a>
<a id="tocSdeletepolicyrequest"></a>
<a id="tocsdeletepolicyrequest"></a>

```json
{
  "PolicyId": {},
  "DeleteAllPolicyResources": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyId|object|true|none|none|
|DeleteAllPolicyResources|object|false|none|none|

<h2 id="tocS_DeleteProtocolsListRequest">DeleteProtocolsListRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteprotocolslistrequest"></a>
<a id="schema_DeleteProtocolsListRequest"></a>
<a id="tocSdeleteprotocolslistrequest"></a>
<a id="tocsdeleteprotocolslistrequest"></a>

```json
{
  "ListId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ListId|object|true|none|none|

<h2 id="tocS_DeleteResourceSetRequest">DeleteResourceSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteresourcesetrequest"></a>
<a id="schema_DeleteResourceSetRequest"></a>
<a id="tocSdeleteresourcesetrequest"></a>
<a id="tocsdeleteresourcesetrequest"></a>

```json
{
  "Identifier": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Identifier|object|true|none|none|

<h2 id="tocS_DisassociateAdminAccountRequest">DisassociateAdminAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateadminaccountrequest"></a>
<a id="schema_DisassociateAdminAccountRequest"></a>
<a id="tocSdisassociateadminaccountrequest"></a>
<a id="tocsdisassociateadminaccountrequest"></a>

```json
{}
```

<h2 id="tocS_DisassociateThirdPartyFirewallResponse">DisassociateThirdPartyFirewallResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatethirdpartyfirewallresponse"></a>
<a id="schema_DisassociateThirdPartyFirewallResponse"></a>
<a id="tocSdisassociatethirdpartyfirewallresponse"></a>
<a id="tocsdisassociatethirdpartyfirewallresponse"></a>

```json
{
  "ThirdPartyFirewallStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ThirdPartyFirewallStatus|object|false|none|none|

<h2 id="tocS_DisassociateThirdPartyFirewallRequest">DisassociateThirdPartyFirewallRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatethirdpartyfirewallrequest"></a>
<a id="schema_DisassociateThirdPartyFirewallRequest"></a>
<a id="tocSdisassociatethirdpartyfirewallrequest"></a>
<a id="tocsdisassociatethirdpartyfirewallrequest"></a>

```json
{
  "ThirdPartyFirewall": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ThirdPartyFirewall|object|true|none|none|

<h2 id="tocS_GetAdminAccountResponse">GetAdminAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetadminaccountresponse"></a>
<a id="schema_GetAdminAccountResponse"></a>
<a id="tocSgetadminaccountresponse"></a>
<a id="tocsgetadminaccountresponse"></a>

```json
{
  "AdminAccount": {},
  "RoleStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdminAccount|object|false|none|none|
|RoleStatus|object|false|none|none|

<h2 id="tocS_GetAdminAccountRequest">GetAdminAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetadminaccountrequest"></a>
<a id="schema_GetAdminAccountRequest"></a>
<a id="tocSgetadminaccountrequest"></a>
<a id="tocsgetadminaccountrequest"></a>

```json
{}
```

<h2 id="tocS_GetAdminScopeResponse">GetAdminScopeResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetadminscoperesponse"></a>
<a id="schema_GetAdminScopeResponse"></a>
<a id="tocSgetadminscoperesponse"></a>
<a id="tocsgetadminscoperesponse"></a>

```json
{
  "AdminScope": {
    "AccountScope": {
      "Accounts": {},
      "AllAccountsEnabled": {},
      "ExcludeSpecifiedAccounts": {}
    },
    "OrganizationalUnitScope": {
      "OrganizationalUnits": {},
      "AllOrganizationalUnitsEnabled": {},
      "ExcludeSpecifiedOrganizationalUnits": {}
    },
    "RegionScope": {
      "Regions": {},
      "AllRegionsEnabled": {}
    },
    "PolicyTypeScope": {
      "PolicyTypes": {},
      "AllPolicyTypesEnabled": {}
    }
  },
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdminScope|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_GetAdminScopeRequest">GetAdminScopeRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetadminscoperequest"></a>
<a id="schema_GetAdminScopeRequest"></a>
<a id="tocSgetadminscoperequest"></a>
<a id="tocsgetadminscoperequest"></a>

```json
{
  "AdminAccount": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdminAccount|object|true|none|none|

<h2 id="tocS_GetAppsListResponse">GetAppsListResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetappslistresponse"></a>
<a id="schema_GetAppsListResponse"></a>
<a id="tocSgetappslistresponse"></a>
<a id="tocsgetappslistresponse"></a>

```json
{
  "AppsList": {
    "ListId": {},
    "ListName": {},
    "ListUpdateToken": {},
    "CreateTime": {},
    "LastUpdateTime": {},
    "AppsList": {},
    "PreviousAppsList": {
      "property1": [
        {
          "AppName": {},
          "Protocol": {},
          "Port": {}
        }
      ],
      "property2": [
        {
          "AppName": {},
          "Protocol": {},
          "Port": {}
        }
      ]
    }
  },
  "AppsListArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppsList|object|false|none|none|
|AppsListArn|object|false|none|none|

<h2 id="tocS_GetAppsListRequest">GetAppsListRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetappslistrequest"></a>
<a id="schema_GetAppsListRequest"></a>
<a id="tocSgetappslistrequest"></a>
<a id="tocsgetappslistrequest"></a>

```json
{
  "ListId": {},
  "DefaultList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ListId|object|true|none|none|
|DefaultList|object|false|none|none|

<h2 id="tocS_GetComplianceDetailResponse">GetComplianceDetailResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcompliancedetailresponse"></a>
<a id="schema_GetComplianceDetailResponse"></a>
<a id="tocSgetcompliancedetailresponse"></a>
<a id="tocsgetcompliancedetailresponse"></a>

```json
{
  "PolicyComplianceDetail": {
    "PolicyOwner": {},
    "PolicyId": {},
    "MemberAccount": {},
    "Violators": {},
    "EvaluationLimitExceeded": {},
    "ExpiredAt": {},
    "IssueInfoMap": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyComplianceDetail|object|false|none|none|

<h2 id="tocS_GetComplianceDetailRequest">GetComplianceDetailRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcompliancedetailrequest"></a>
<a id="schema_GetComplianceDetailRequest"></a>
<a id="tocSgetcompliancedetailrequest"></a>
<a id="tocsgetcompliancedetailrequest"></a>

```json
{
  "PolicyId": {},
  "MemberAccount": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyId|object|true|none|none|
|MemberAccount|object|true|none|none|

<h2 id="tocS_GetNotificationChannelResponse">GetNotificationChannelResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetnotificationchannelresponse"></a>
<a id="schema_GetNotificationChannelResponse"></a>
<a id="tocSgetnotificationchannelresponse"></a>
<a id="tocsgetnotificationchannelresponse"></a>

```json
{
  "SnsTopicArn": {},
  "SnsRoleName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SnsTopicArn|object|false|none|none|
|SnsRoleName|object|false|none|none|

<h2 id="tocS_GetNotificationChannelRequest">GetNotificationChannelRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetnotificationchannelrequest"></a>
<a id="schema_GetNotificationChannelRequest"></a>
<a id="tocSgetnotificationchannelrequest"></a>
<a id="tocsgetnotificationchannelrequest"></a>

```json
{}
```

<h2 id="tocS_GetPolicyResponse">GetPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetpolicyresponse"></a>
<a id="schema_GetPolicyResponse"></a>
<a id="tocSgetpolicyresponse"></a>
<a id="tocsgetpolicyresponse"></a>

```json
{
  "Policy": {
    "PolicyId": {},
    "PolicyName": {},
    "PolicyUpdateToken": {},
    "SecurityServicePolicyData": {
      "Type": {},
      "ManagedServiceData": {},
      "PolicyOption": {
        "NetworkFirewallPolicy": {
          "FirewallDeploymentModel": {}
        },
        "ThirdPartyFirewallPolicy": {
          "FirewallDeploymentModel": {}
        }
      }
    },
    "ResourceType": {},
    "ResourceTypeList": {},
    "ResourceTags": {},
    "ExcludeResourceTags": {},
    "RemediationEnabled": {},
    "DeleteUnusedFMManagedResources": {},
    "IncludeMap": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "ExcludeMap": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "ResourceSetIds": {},
    "PolicyDescription": {},
    "PolicyStatus": {}
  },
  "PolicyArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Policy|object|false|none|none|
|PolicyArn|object|false|none|none|

<h2 id="tocS_GetPolicyRequest">GetPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetpolicyrequest"></a>
<a id="schema_GetPolicyRequest"></a>
<a id="tocSgetpolicyrequest"></a>
<a id="tocsgetpolicyrequest"></a>

```json
{
  "PolicyId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyId|object|true|none|none|

<h2 id="tocS_InvalidTypeException">InvalidTypeException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidtypeexception"></a>
<a id="schema_InvalidTypeException"></a>
<a id="tocSinvalidtypeexception"></a>
<a id="tocsinvalidtypeexception"></a>

```json
null
```

<h2 id="tocS_GetProtectionStatusResponse">GetProtectionStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetprotectionstatusresponse"></a>
<a id="schema_GetProtectionStatusResponse"></a>
<a id="tocSgetprotectionstatusresponse"></a>
<a id="tocsgetprotectionstatusresponse"></a>

```json
{
  "AdminAccountId": {},
  "ServiceType": {},
  "Data": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdminAccountId|object|false|none|none|
|ServiceType|object|false|none|none|
|Data|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetProtectionStatusRequest">GetProtectionStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetprotectionstatusrequest"></a>
<a id="schema_GetProtectionStatusRequest"></a>
<a id="tocSgetprotectionstatusrequest"></a>
<a id="tocsgetprotectionstatusrequest"></a>

```json
{
  "PolicyId": {},
  "MemberAccountId": {},
  "StartTime": {},
  "EndTime": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyId|object|true|none|none|
|MemberAccountId|object|false|none|none|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_GetProtocolsListResponse">GetProtocolsListResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetprotocolslistresponse"></a>
<a id="schema_GetProtocolsListResponse"></a>
<a id="tocSgetprotocolslistresponse"></a>
<a id="tocsgetprotocolslistresponse"></a>

```json
{
  "ProtocolsList": {
    "ListId": {},
    "ListName": {},
    "ListUpdateToken": {},
    "CreateTime": {},
    "LastUpdateTime": {},
    "ProtocolsList": {},
    "PreviousProtocolsList": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    }
  },
  "ProtocolsListArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProtocolsList|object|false|none|none|
|ProtocolsListArn|object|false|none|none|

<h2 id="tocS_GetProtocolsListRequest">GetProtocolsListRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetprotocolslistrequest"></a>
<a id="schema_GetProtocolsListRequest"></a>
<a id="tocSgetprotocolslistrequest"></a>
<a id="tocsgetprotocolslistrequest"></a>

```json
{
  "ListId": {},
  "DefaultList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ListId|object|true|none|none|
|DefaultList|object|false|none|none|

<h2 id="tocS_GetResourceSetResponse">GetResourceSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetresourcesetresponse"></a>
<a id="schema_GetResourceSetResponse"></a>
<a id="tocSgetresourcesetresponse"></a>
<a id="tocsgetresourcesetresponse"></a>

```json
{
  "ResourceSet": {
    "Id": {},
    "Name": {},
    "Description": {},
    "UpdateToken": {},
    "ResourceTypeList": {},
    "LastUpdateTime": {},
    "ResourceSetStatus": {}
  },
  "ResourceSetArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceSet|object|true|none|none|
|ResourceSetArn|object|true|none|none|

<h2 id="tocS_GetResourceSetRequest">GetResourceSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetresourcesetrequest"></a>
<a id="schema_GetResourceSetRequest"></a>
<a id="tocSgetresourcesetrequest"></a>
<a id="tocsgetresourcesetrequest"></a>

```json
{
  "Identifier": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Identifier|object|true|none|none|

<h2 id="tocS_GetThirdPartyFirewallAssociationStatusResponse">GetThirdPartyFirewallAssociationStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetthirdpartyfirewallassociationstatusresponse"></a>
<a id="schema_GetThirdPartyFirewallAssociationStatusResponse"></a>
<a id="tocSgetthirdpartyfirewallassociationstatusresponse"></a>
<a id="tocsgetthirdpartyfirewallassociationstatusresponse"></a>

```json
{
  "ThirdPartyFirewallStatus": {},
  "MarketplaceOnboardingStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ThirdPartyFirewallStatus|object|false|none|none|
|MarketplaceOnboardingStatus|object|false|none|none|

<h2 id="tocS_GetThirdPartyFirewallAssociationStatusRequest">GetThirdPartyFirewallAssociationStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetthirdpartyfirewallassociationstatusrequest"></a>
<a id="schema_GetThirdPartyFirewallAssociationStatusRequest"></a>
<a id="tocSgetthirdpartyfirewallassociationstatusrequest"></a>
<a id="tocsgetthirdpartyfirewallassociationstatusrequest"></a>

```json
{
  "ThirdPartyFirewall": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ThirdPartyFirewall|object|true|none|none|

<h2 id="tocS_GetViolationDetailsResponse">GetViolationDetailsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetviolationdetailsresponse"></a>
<a id="schema_GetViolationDetailsResponse"></a>
<a id="tocSgetviolationdetailsresponse"></a>
<a id="tocsgetviolationdetailsresponse"></a>

```json
{
  "ViolationDetail": {
    "PolicyId": {},
    "MemberAccount": {},
    "ResourceId": {},
    "ResourceType": {},
    "ResourceViolations": {},
    "ResourceTags": {},
    "ResourceDescription": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ViolationDetail|object|false|none|none|

<h2 id="tocS_GetViolationDetailsRequest">GetViolationDetailsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetviolationdetailsrequest"></a>
<a id="schema_GetViolationDetailsRequest"></a>
<a id="tocSgetviolationdetailsrequest"></a>
<a id="tocsgetviolationdetailsrequest"></a>

```json
{
  "PolicyId": {},
  "MemberAccount": {},
  "ResourceId": {},
  "ResourceType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyId|object|true|none|none|
|MemberAccount|object|true|none|none|
|ResourceId|object|true|none|none|
|ResourceType|object|true|none|none|

<h2 id="tocS_ListAdminAccountsForOrganizationResponse">ListAdminAccountsForOrganizationResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistadminaccountsfororganizationresponse"></a>
<a id="schema_ListAdminAccountsForOrganizationResponse"></a>
<a id="tocSlistadminaccountsfororganizationresponse"></a>
<a id="tocslistadminaccountsfororganizationresponse"></a>

```json
{
  "AdminAccounts": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdminAccounts|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListAdminAccountsForOrganizationRequest">ListAdminAccountsForOrganizationRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistadminaccountsfororganizationrequest"></a>
<a id="schema_ListAdminAccountsForOrganizationRequest"></a>
<a id="tocSlistadminaccountsfororganizationrequest"></a>
<a id="tocslistadminaccountsfororganizationrequest"></a>

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

<h2 id="tocS_ListAdminsManagingAccountResponse">ListAdminsManagingAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistadminsmanagingaccountresponse"></a>
<a id="schema_ListAdminsManagingAccountResponse"></a>
<a id="tocSlistadminsmanagingaccountresponse"></a>
<a id="tocslistadminsmanagingaccountresponse"></a>

```json
{
  "AdminAccounts": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdminAccounts|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListAdminsManagingAccountRequest">ListAdminsManagingAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistadminsmanagingaccountrequest"></a>
<a id="schema_ListAdminsManagingAccountRequest"></a>
<a id="tocSlistadminsmanagingaccountrequest"></a>
<a id="tocslistadminsmanagingaccountrequest"></a>

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

<h2 id="tocS_ListAppsListsResponse">ListAppsListsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistappslistsresponse"></a>
<a id="schema_ListAppsListsResponse"></a>
<a id="tocSlistappslistsresponse"></a>
<a id="tocslistappslistsresponse"></a>

```json
{
  "AppsLists": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppsLists|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListAppsListsRequest">ListAppsListsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistappslistsrequest"></a>
<a id="schema_ListAppsListsRequest"></a>
<a id="tocSlistappslistsrequest"></a>
<a id="tocslistappslistsrequest"></a>

```json
{
  "DefaultLists": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DefaultLists|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|true|none|none|

<h2 id="tocS_ListComplianceStatusResponse">ListComplianceStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcompliancestatusresponse"></a>
<a id="schema_ListComplianceStatusResponse"></a>
<a id="tocSlistcompliancestatusresponse"></a>
<a id="tocslistcompliancestatusresponse"></a>

```json
{
  "PolicyComplianceStatusList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyComplianceStatusList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListComplianceStatusRequest">ListComplianceStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcompliancestatusrequest"></a>
<a id="schema_ListComplianceStatusRequest"></a>
<a id="tocSlistcompliancestatusrequest"></a>
<a id="tocslistcompliancestatusrequest"></a>

```json
{
  "PolicyId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyId|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListDiscoveredResourcesResponse">ListDiscoveredResourcesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdiscoveredresourcesresponse"></a>
<a id="schema_ListDiscoveredResourcesResponse"></a>
<a id="tocSlistdiscoveredresourcesresponse"></a>
<a id="tocslistdiscoveredresourcesresponse"></a>

```json
{
  "Items": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListDiscoveredResourcesRequest">ListDiscoveredResourcesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdiscoveredresourcesrequest"></a>
<a id="schema_ListDiscoveredResourcesRequest"></a>
<a id="tocSlistdiscoveredresourcesrequest"></a>
<a id="tocslistdiscoveredresourcesrequest"></a>

```json
{
  "MemberAccountIds": {},
  "ResourceType": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MemberAccountIds|object|true|none|none|
|ResourceType|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListMemberAccountsResponse">ListMemberAccountsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmemberaccountsresponse"></a>
<a id="schema_ListMemberAccountsResponse"></a>
<a id="tocSlistmemberaccountsresponse"></a>
<a id="tocslistmemberaccountsresponse"></a>

```json
{
  "MemberAccounts": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MemberAccounts|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListMemberAccountsRequest">ListMemberAccountsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistmemberaccountsrequest"></a>
<a id="schema_ListMemberAccountsRequest"></a>
<a id="tocSlistmemberaccountsrequest"></a>
<a id="tocslistmemberaccountsrequest"></a>

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

<h2 id="tocS_ListPoliciesResponse">ListPoliciesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistpoliciesresponse"></a>
<a id="schema_ListPoliciesResponse"></a>
<a id="tocSlistpoliciesresponse"></a>
<a id="tocslistpoliciesresponse"></a>

```json
{
  "PolicyList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListPoliciesRequest">ListPoliciesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistpoliciesrequest"></a>
<a id="schema_ListPoliciesRequest"></a>
<a id="tocSlistpoliciesrequest"></a>
<a id="tocslistpoliciesrequest"></a>

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

<h2 id="tocS_ListProtocolsListsResponse">ListProtocolsListsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistprotocolslistsresponse"></a>
<a id="schema_ListProtocolsListsResponse"></a>
<a id="tocSlistprotocolslistsresponse"></a>
<a id="tocslistprotocolslistsresponse"></a>

```json
{
  "ProtocolsLists": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProtocolsLists|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListProtocolsListsRequest">ListProtocolsListsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistprotocolslistsrequest"></a>
<a id="schema_ListProtocolsListsRequest"></a>
<a id="tocSlistprotocolslistsrequest"></a>
<a id="tocslistprotocolslistsrequest"></a>

```json
{
  "DefaultLists": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DefaultLists|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|true|none|none|

<h2 id="tocS_ListResourceSetResourcesResponse">ListResourceSetResourcesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistresourcesetresourcesresponse"></a>
<a id="schema_ListResourceSetResourcesResponse"></a>
<a id="tocSlistresourcesetresourcesresponse"></a>
<a id="tocslistresourcesetresourcesresponse"></a>

```json
{
  "Items": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListResourceSetResourcesRequest">ListResourceSetResourcesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistresourcesetresourcesrequest"></a>
<a id="schema_ListResourceSetResourcesRequest"></a>
<a id="tocSlistresourcesetresourcesrequest"></a>
<a id="tocslistresourcesetresourcesrequest"></a>

```json
{
  "Identifier": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Identifier|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListResourceSetsResponse">ListResourceSetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistresourcesetsresponse"></a>
<a id="schema_ListResourceSetsResponse"></a>
<a id="tocSlistresourcesetsresponse"></a>
<a id="tocslistresourcesetsresponse"></a>

```json
{
  "ResourceSets": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceSets|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListResourceSetsRequest">ListResourceSetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistresourcesetsrequest"></a>
<a id="schema_ListResourceSetsRequest"></a>
<a id="tocSlistresourcesetsrequest"></a>
<a id="tocslistresourcesetsrequest"></a>

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
  "TagList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TagList|object|false|none|none|

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

<h2 id="tocS_ListThirdPartyFirewallFirewallPoliciesResponse">ListThirdPartyFirewallFirewallPoliciesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistthirdpartyfirewallfirewallpoliciesresponse"></a>
<a id="schema_ListThirdPartyFirewallFirewallPoliciesResponse"></a>
<a id="tocSlistthirdpartyfirewallfirewallpoliciesresponse"></a>
<a id="tocslistthirdpartyfirewallfirewallpoliciesresponse"></a>

```json
{
  "ThirdPartyFirewallFirewallPolicies": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ThirdPartyFirewallFirewallPolicies|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListThirdPartyFirewallFirewallPoliciesRequest">ListThirdPartyFirewallFirewallPoliciesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistthirdpartyfirewallfirewallpoliciesrequest"></a>
<a id="schema_ListThirdPartyFirewallFirewallPoliciesRequest"></a>
<a id="tocSlistthirdpartyfirewallfirewallpoliciesrequest"></a>
<a id="tocslistthirdpartyfirewallfirewallpoliciesrequest"></a>

```json
{
  "ThirdPartyFirewall": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ThirdPartyFirewall|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|true|none|none|

<h2 id="tocS_PutAdminAccountRequest">PutAdminAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputadminaccountrequest"></a>
<a id="schema_PutAdminAccountRequest"></a>
<a id="tocSputadminaccountrequest"></a>
<a id="tocsputadminaccountrequest"></a>

```json
{
  "AdminAccount": {},
  "AdminScope": {
    "AccountScope": {
      "Accounts": {},
      "AllAccountsEnabled": {},
      "ExcludeSpecifiedAccounts": {}
    },
    "OrganizationalUnitScope": {
      "OrganizationalUnits": {},
      "AllOrganizationalUnitsEnabled": {},
      "ExcludeSpecifiedOrganizationalUnits": {}
    },
    "RegionScope": {
      "Regions": {},
      "AllRegionsEnabled": {}
    },
    "PolicyTypeScope": {
      "PolicyTypes": {},
      "AllPolicyTypesEnabled": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdminAccount|object|true|none|none|
|AdminScope|object|false|none|none|

<h2 id="tocS_PutAppsListResponse">PutAppsListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputappslistresponse"></a>
<a id="schema_PutAppsListResponse"></a>
<a id="tocSputappslistresponse"></a>
<a id="tocsputappslistresponse"></a>

```json
{
  "AppsList": {
    "ListId": {},
    "ListName": {},
    "ListUpdateToken": {},
    "CreateTime": {},
    "LastUpdateTime": {},
    "AppsList": {},
    "PreviousAppsList": {
      "property1": [
        {
          "AppName": {},
          "Protocol": {},
          "Port": {}
        }
      ],
      "property2": [
        {
          "AppName": {},
          "Protocol": {},
          "Port": {}
        }
      ]
    }
  },
  "AppsListArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppsList|object|false|none|none|
|AppsListArn|object|false|none|none|

<h2 id="tocS_PutAppsListRequest">PutAppsListRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputappslistrequest"></a>
<a id="schema_PutAppsListRequest"></a>
<a id="tocSputappslistrequest"></a>
<a id="tocsputappslistrequest"></a>

```json
{
  "AppsList": {
    "ListId": {},
    "ListName": {},
    "ListUpdateToken": {},
    "CreateTime": {},
    "LastUpdateTime": {},
    "AppsList": {},
    "PreviousAppsList": {
      "property1": [
        {
          "AppName": {},
          "Protocol": {},
          "Port": {}
        }
      ],
      "property2": [
        {
          "AppName": {},
          "Protocol": {},
          "Port": {}
        }
      ]
    }
  },
  "TagList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppsList|object|true|none|none|
|TagList|object|false|none|none|

<h2 id="tocS_PutNotificationChannelRequest">PutNotificationChannelRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputnotificationchannelrequest"></a>
<a id="schema_PutNotificationChannelRequest"></a>
<a id="tocSputnotificationchannelrequest"></a>
<a id="tocsputnotificationchannelrequest"></a>

```json
{
  "SnsTopicArn": {},
  "SnsRoleName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SnsTopicArn|object|true|none|none|
|SnsRoleName|object|true|none|none|

<h2 id="tocS_PutPolicyResponse">PutPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputpolicyresponse"></a>
<a id="schema_PutPolicyResponse"></a>
<a id="tocSputpolicyresponse"></a>
<a id="tocsputpolicyresponse"></a>

```json
{
  "Policy": {
    "PolicyId": {},
    "PolicyName": {},
    "PolicyUpdateToken": {},
    "SecurityServicePolicyData": {
      "Type": {},
      "ManagedServiceData": {},
      "PolicyOption": {
        "NetworkFirewallPolicy": {
          "FirewallDeploymentModel": {}
        },
        "ThirdPartyFirewallPolicy": {
          "FirewallDeploymentModel": {}
        }
      }
    },
    "ResourceType": {},
    "ResourceTypeList": {},
    "ResourceTags": {},
    "ExcludeResourceTags": {},
    "RemediationEnabled": {},
    "DeleteUnusedFMManagedResources": {},
    "IncludeMap": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "ExcludeMap": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "ResourceSetIds": {},
    "PolicyDescription": {},
    "PolicyStatus": {}
  },
  "PolicyArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Policy|object|false|none|none|
|PolicyArn|object|false|none|none|

<h2 id="tocS_PutPolicyRequest">PutPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputpolicyrequest"></a>
<a id="schema_PutPolicyRequest"></a>
<a id="tocSputpolicyrequest"></a>
<a id="tocsputpolicyrequest"></a>

```json
{
  "Policy": {
    "PolicyId": {},
    "PolicyName": {},
    "PolicyUpdateToken": {},
    "SecurityServicePolicyData": {
      "Type": {},
      "ManagedServiceData": {},
      "PolicyOption": {
        "NetworkFirewallPolicy": {
          "FirewallDeploymentModel": {}
        },
        "ThirdPartyFirewallPolicy": {
          "FirewallDeploymentModel": {}
        }
      }
    },
    "ResourceType": {},
    "ResourceTypeList": {},
    "ResourceTags": {},
    "ExcludeResourceTags": {},
    "RemediationEnabled": {},
    "DeleteUnusedFMManagedResources": {},
    "IncludeMap": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "ExcludeMap": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "ResourceSetIds": {},
    "PolicyDescription": {},
    "PolicyStatus": {}
  },
  "TagList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Policy|object|true|none|none|
|TagList|object|false|none|none|

<h2 id="tocS_PutProtocolsListResponse">PutProtocolsListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputprotocolslistresponse"></a>
<a id="schema_PutProtocolsListResponse"></a>
<a id="tocSputprotocolslistresponse"></a>
<a id="tocsputprotocolslistresponse"></a>

```json
{
  "ProtocolsList": {
    "ListId": {},
    "ListName": {},
    "ListUpdateToken": {},
    "CreateTime": {},
    "LastUpdateTime": {},
    "ProtocolsList": {},
    "PreviousProtocolsList": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    }
  },
  "ProtocolsListArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProtocolsList|object|false|none|none|
|ProtocolsListArn|object|false|none|none|

<h2 id="tocS_PutProtocolsListRequest">PutProtocolsListRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputprotocolslistrequest"></a>
<a id="schema_PutProtocolsListRequest"></a>
<a id="tocSputprotocolslistrequest"></a>
<a id="tocsputprotocolslistrequest"></a>

```json
{
  "ProtocolsList": {
    "ListId": {},
    "ListName": {},
    "ListUpdateToken": {},
    "CreateTime": {},
    "LastUpdateTime": {},
    "ProtocolsList": {},
    "PreviousProtocolsList": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    }
  },
  "TagList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProtocolsList|object|true|none|none|
|TagList|object|false|none|none|

<h2 id="tocS_PutResourceSetResponse">PutResourceSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputresourcesetresponse"></a>
<a id="schema_PutResourceSetResponse"></a>
<a id="tocSputresourcesetresponse"></a>
<a id="tocsputresourcesetresponse"></a>

```json
{
  "ResourceSet": {
    "Id": {},
    "Name": {},
    "Description": {},
    "UpdateToken": {},
    "ResourceTypeList": {},
    "LastUpdateTime": {},
    "ResourceSetStatus": {}
  },
  "ResourceSetArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceSet|object|true|none|none|
|ResourceSetArn|object|true|none|none|

<h2 id="tocS_PutResourceSetRequest">PutResourceSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputresourcesetrequest"></a>
<a id="schema_PutResourceSetRequest"></a>
<a id="tocSputresourcesetrequest"></a>
<a id="tocsputresourcesetrequest"></a>

```json
{
  "ResourceSet": {
    "Id": {},
    "Name": {},
    "Description": {},
    "UpdateToken": {},
    "ResourceTypeList": {},
    "LastUpdateTime": {},
    "ResourceSetStatus": {}
  },
  "TagList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceSet|object|true|none|none|
|TagList|object|false|none|none|

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
  "TagList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|TagList|object|true|none|none|

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

<h2 id="tocS_AWSAccountId">AWSAccountId</h2>
<!-- backwards compatibility -->
<a id="schemaawsaccountid"></a>
<a id="schema_AWSAccountId"></a>
<a id="tocSawsaccountid"></a>
<a id="tocsawsaccountid"></a>

```json
"string"
```

<h2 id="tocS_AWSAccountIdList">AWSAccountIdList</h2>
<!-- backwards compatibility -->
<a id="schemaawsaccountidlist"></a>
<a id="schema_AWSAccountIdList"></a>
<a id="tocSawsaccountidlist"></a>
<a id="tocsawsaccountidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AWSRegion">AWSRegion</h2>
<!-- backwards compatibility -->
<a id="schemaawsregion"></a>
<a id="schema_AWSRegion"></a>
<a id="tocSawsregion"></a>
<a id="tocsawsregion"></a>

```json
"string"
```

<h2 id="tocS_AWSRegionList">AWSRegionList</h2>
<!-- backwards compatibility -->
<a id="schemaawsregionlist"></a>
<a id="schema_AWSRegionList"></a>
<a id="tocSawsregionlist"></a>
<a id="tocsawsregionlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AccountIdList">AccountIdList</h2>
<!-- backwards compatibility -->
<a id="schemaaccountidlist"></a>
<a id="schema_AccountIdList"></a>
<a id="tocSaccountidlist"></a>
<a id="tocsaccountidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AccountRoleStatus">AccountRoleStatus</h2>
<!-- backwards compatibility -->
<a id="schemaaccountrolestatus"></a>
<a id="schema_AccountRoleStatus"></a>
<a id="tocSaccountrolestatus"></a>
<a id="tocsaccountrolestatus"></a>

```json
"READY"
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

<h2 id="tocS_AccountScope">AccountScope</h2>
<!-- backwards compatibility -->
<a id="schemaaccountscope"></a>
<a id="schema_AccountScope"></a>
<a id="tocSaccountscope"></a>
<a id="tocsaccountscope"></a>

```json
{
  "Accounts": {},
  "AllAccountsEnabled": {},
  "ExcludeSpecifiedAccounts": {}
}
```

Configures the accounts within the administrator's Organizations organization that the specified Firewall Manager administrator can apply policies to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Accounts|object|false|none|none|
|AllAccountsEnabled|object|false|none|none|
|ExcludeSpecifiedAccounts|object|false|none|none|

<h2 id="tocS_ResourceId">ResourceId</h2>
<!-- backwards compatibility -->
<a id="schemaresourceid"></a>
<a id="schema_ResourceId"></a>
<a id="tocSresourceid"></a>
<a id="tocsresourceid"></a>

```json
"string"
```

<h2 id="tocS_LengthBoundedString">LengthBoundedString</h2>
<!-- backwards compatibility -->
<a id="schemalengthboundedstring"></a>
<a id="schema_LengthBoundedString"></a>
<a id="tocSlengthboundedstring"></a>
<a id="tocslengthboundedstring"></a>

```json
"string"
```

<h2 id="tocS_ActionTarget">ActionTarget</h2>
<!-- backwards compatibility -->
<a id="schemaactiontarget"></a>
<a id="schema_ActionTarget"></a>
<a id="tocSactiontarget"></a>
<a id="tocsactiontarget"></a>

```json
{
  "ResourceId": {},
  "Description": {}
}
```

Describes a remediation action target.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|false|none|none|
|Description|object|false|none|none|

<h2 id="tocS_OrganizationStatus">OrganizationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationstatus"></a>
<a id="schema_OrganizationStatus"></a>
<a id="tocSorganizationstatus"></a>
<a id="tocsorganizationstatus"></a>

```json
"ONBOARDING"
```

<h2 id="tocS_AdminAccountSummary">AdminAccountSummary</h2>
<!-- backwards compatibility -->
<a id="schemaadminaccountsummary"></a>
<a id="schema_AdminAccountSummary"></a>
<a id="tocSadminaccountsummary"></a>
<a id="tocsadminaccountsummary"></a>

```json
{
  "AdminAccount": {},
  "DefaultAdmin": {},
  "Status": {}
}
```

Contains high level information about the Firewall Manager administrator account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdminAccount|object|false|none|none|
|DefaultAdmin|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_AdminAccountSummaryList">AdminAccountSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaadminaccountsummarylist"></a>
<a id="schema_AdminAccountSummaryList"></a>
<a id="tocSadminaccountsummarylist"></a>
<a id="tocsadminaccountsummarylist"></a>

```json
[
  {
    "AdminAccount": {},
    "DefaultAdmin": {},
    "Status": {}
  }
]
```

<h2 id="tocS_OrganizationalUnitScope">OrganizationalUnitScope</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationalunitscope"></a>
<a id="schema_OrganizationalUnitScope"></a>
<a id="tocSorganizationalunitscope"></a>
<a id="tocsorganizationalunitscope"></a>

```json
{
  "OrganizationalUnits": {},
  "AllOrganizationalUnitsEnabled": {},
  "ExcludeSpecifiedOrganizationalUnits": {}
}
```

Defines the Organizations organizational units (OUs) that the specified Firewall Manager administrator can apply policies to. For more information about OUs in Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html">Managing organizational units (OUs) </a> in the <i>Organizations User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationalUnits|object|false|none|none|
|AllOrganizationalUnitsEnabled|object|false|none|none|
|ExcludeSpecifiedOrganizationalUnits|object|false|none|none|

<h2 id="tocS_RegionScope">RegionScope</h2>
<!-- backwards compatibility -->
<a id="schemaregionscope"></a>
<a id="schema_RegionScope"></a>
<a id="tocSregionscope"></a>
<a id="tocsregionscope"></a>

```json
{
  "Regions": {},
  "AllRegionsEnabled": {}
}
```

Defines the Amazon Web Services Regions that the specified Firewall Manager administrator can manage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Regions|object|false|none|none|
|AllRegionsEnabled|object|false|none|none|

<h2 id="tocS_PolicyTypeScope">PolicyTypeScope</h2>
<!-- backwards compatibility -->
<a id="schemapolicytypescope"></a>
<a id="schema_PolicyTypeScope"></a>
<a id="tocSpolicytypescope"></a>
<a id="tocspolicytypescope"></a>

```json
{
  "PolicyTypes": {},
  "AllPolicyTypesEnabled": {}
}
```

Defines the policy types that the specified Firewall Manager administrator can manage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyTypes|object|false|none|none|
|AllPolicyTypesEnabled|object|false|none|none|

<h2 id="tocS_AdminScope">AdminScope</h2>
<!-- backwards compatibility -->
<a id="schemaadminscope"></a>
<a id="schema_AdminScope"></a>
<a id="tocSadminscope"></a>
<a id="tocsadminscope"></a>

```json
{
  "AccountScope": {
    "Accounts": {},
    "AllAccountsEnabled": {},
    "ExcludeSpecifiedAccounts": {}
  },
  "OrganizationalUnitScope": {
    "OrganizationalUnits": {},
    "AllOrganizationalUnitsEnabled": {},
    "ExcludeSpecifiedOrganizationalUnits": {}
  },
  "RegionScope": {
    "Regions": {},
    "AllRegionsEnabled": {}
  },
  "PolicyTypeScope": {
    "PolicyTypes": {},
    "AllPolicyTypesEnabled": {}
  }
}
```

Defines the resources that the Firewall Manager administrator can manage. For more information about administrative scope, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-administrators.html">Managing Firewall Manager administrators</a> in the <i>Firewall Manager Developer Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountScope|object|false|none|none|
|OrganizationalUnitScope|object|false|none|none|
|RegionScope|object|false|none|none|
|PolicyTypeScope|object|false|none|none|

<h2 id="tocS_ResourceName">ResourceName</h2>
<!-- backwards compatibility -->
<a id="schemaresourcename"></a>
<a id="schema_ResourceName"></a>
<a id="tocSresourcename"></a>
<a id="tocsresourcename"></a>

```json
"string"
```

<h2 id="tocS_Protocol">Protocol</h2>
<!-- backwards compatibility -->
<a id="schemaprotocol"></a>
<a id="schema_Protocol"></a>
<a id="tocSprotocol"></a>
<a id="tocsprotocol"></a>

```json
"string"
```

<h2 id="tocS_IPPortNumber">IPPortNumber</h2>
<!-- backwards compatibility -->
<a id="schemaipportnumber"></a>
<a id="schema_IPPortNumber"></a>
<a id="tocSipportnumber"></a>
<a id="tocsipportnumber"></a>

```json
0
```

<h2 id="tocS_App">App</h2>
<!-- backwards compatibility -->
<a id="schemaapp"></a>
<a id="schema_App"></a>
<a id="tocSapp"></a>
<a id="tocsapp"></a>

```json
{
  "AppName": {},
  "Protocol": {},
  "Port": {}
}
```

An individual Firewall Manager application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppName|object|true|none|none|
|Protocol|object|true|none|none|
|Port|object|true|none|none|

<h2 id="tocS_AppsList">AppsList</h2>
<!-- backwards compatibility -->
<a id="schemaappslist"></a>
<a id="schema_AppsList"></a>
<a id="tocSappslist"></a>
<a id="tocsappslist"></a>

```json
[
  {
    "AppName": {},
    "Protocol": {},
    "Port": {}
  }
]
```

<h2 id="tocS_ListId">ListId</h2>
<!-- backwards compatibility -->
<a id="schemalistid"></a>
<a id="schema_ListId"></a>
<a id="tocSlistid"></a>
<a id="tocslistid"></a>

```json
"stringstringstringstringstringstring"
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

<h2 id="tocS_TimeStamp">TimeStamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_TimeStamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_PreviousAppsList">PreviousAppsList</h2>
<!-- backwards compatibility -->
<a id="schemapreviousappslist"></a>
<a id="schema_PreviousAppsList"></a>
<a id="tocSpreviousappslist"></a>
<a id="tocspreviousappslist"></a>

```json
{
  "property1": [
    {
      "AppName": {},
      "Protocol": {},
      "Port": {}
    }
  ],
  "property2": [
    {
      "AppName": {},
      "Protocol": {},
      "Port": {}
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[AppsList](#schemaappslist)|false|none|none|

<h2 id="tocS_AppsListData">AppsListData</h2>
<!-- backwards compatibility -->
<a id="schemaappslistdata"></a>
<a id="schema_AppsListData"></a>
<a id="tocSappslistdata"></a>
<a id="tocsappslistdata"></a>

```json
{
  "ListId": {},
  "ListName": {},
  "ListUpdateToken": {},
  "CreateTime": {},
  "LastUpdateTime": {},
  "AppsList": {},
  "PreviousAppsList": {
    "property1": [
      {
        "AppName": {},
        "Protocol": {},
        "Port": {}
      }
    ],
    "property2": [
      {
        "AppName": {},
        "Protocol": {},
        "Port": {}
      }
    ]
  }
}
```

An Firewall Manager applications list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ListId|object|false|none|none|
|ListName|object|true|none|none|
|ListUpdateToken|object|false|none|none|
|CreateTime|object|false|none|none|
|LastUpdateTime|object|false|none|none|
|AppsList|object|true|none|none|
|PreviousAppsList|object|false|none|none|

<h2 id="tocS_ResourceArn">ResourceArn</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearn"></a>
<a id="schema_ResourceArn"></a>
<a id="tocSresourcearn"></a>
<a id="tocsresourcearn"></a>

```json
"string"
```

<h2 id="tocS_AppsListDataSummary">AppsListDataSummary</h2>
<!-- backwards compatibility -->
<a id="schemaappslistdatasummary"></a>
<a id="schema_AppsListDataSummary"></a>
<a id="tocSappslistdatasummary"></a>
<a id="tocsappslistdatasummary"></a>

```json
{
  "ListArn": {},
  "ListId": {},
  "ListName": {},
  "AppsList": {}
}
```

Details of the Firewall Manager applications list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ListArn|object|false|none|none|
|ListId|object|false|none|none|
|ListName|object|false|none|none|
|AppsList|object|false|none|none|

<h2 id="tocS_AppsListsData">AppsListsData</h2>
<!-- backwards compatibility -->
<a id="schemaappslistsdata"></a>
<a id="schema_AppsListsData"></a>
<a id="tocSappslistsdata"></a>
<a id="tocsappslistsdata"></a>

```json
[
  {
    "ListArn": {},
    "ListId": {},
    "ListName": {},
    "AppsList": {}
  }
]
```

<h2 id="tocS_ThirdPartyFirewall">ThirdPartyFirewall</h2>
<!-- backwards compatibility -->
<a id="schemathirdpartyfirewall"></a>
<a id="schema_ThirdPartyFirewall"></a>
<a id="tocSthirdpartyfirewall"></a>
<a id="tocsthirdpartyfirewall"></a>

```json
"PALO_ALTO_NETWORKS_CLOUD_NGFW"
```

<h2 id="tocS_ThirdPartyFirewallAssociationStatus">ThirdPartyFirewallAssociationStatus</h2>
<!-- backwards compatibility -->
<a id="schemathirdpartyfirewallassociationstatus"></a>
<a id="schema_ThirdPartyFirewallAssociationStatus"></a>
<a id="tocSthirdpartyfirewallassociationstatus"></a>
<a id="tocsthirdpartyfirewallassociationstatus"></a>

```json
"ONBOARDING"
```

<h2 id="tocS_ViolationTarget">ViolationTarget</h2>
<!-- backwards compatibility -->
<a id="schemaviolationtarget"></a>
<a id="schema_ViolationTarget"></a>
<a id="tocSviolationtarget"></a>
<a id="tocsviolationtarget"></a>

```json
"string"
```

<h2 id="tocS_AwsEc2NetworkInterfaceViolations">AwsEc2NetworkInterfaceViolations</h2>
<!-- backwards compatibility -->
<a id="schemaawsec2networkinterfaceviolations"></a>
<a id="schema_AwsEc2NetworkInterfaceViolations"></a>
<a id="tocSawsec2networkinterfaceviolations"></a>
<a id="tocsawsec2networkinterfaceviolations"></a>

```json
[
  {
    "ViolationTarget": {},
    "ViolatingSecurityGroups": {}
  }
]
```

<h2 id="tocS_AwsEc2InstanceViolation">AwsEc2InstanceViolation</h2>
<!-- backwards compatibility -->
<a id="schemaawsec2instanceviolation"></a>
<a id="schema_AwsEc2InstanceViolation"></a>
<a id="tocSawsec2instanceviolation"></a>
<a id="tocsawsec2instanceviolation"></a>

```json
{
  "ViolationTarget": {},
  "AwsEc2NetworkInterfaceViolations": {}
}
```

Violation detail for an EC2 instance resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ViolationTarget|object|false|none|none|
|AwsEc2NetworkInterfaceViolations|object|false|none|none|

<h2 id="tocS_ResourceIdList">ResourceIdList</h2>
<!-- backwards compatibility -->
<a id="schemaresourceidlist"></a>
<a id="schema_ResourceIdList"></a>
<a id="tocSresourceidlist"></a>
<a id="tocsresourceidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AwsEc2NetworkInterfaceViolation">AwsEc2NetworkInterfaceViolation</h2>
<!-- backwards compatibility -->
<a id="schemaawsec2networkinterfaceviolation"></a>
<a id="schema_AwsEc2NetworkInterfaceViolation"></a>
<a id="tocSawsec2networkinterfaceviolation"></a>
<a id="tocsawsec2networkinterfaceviolation"></a>

```json
{
  "ViolationTarget": {},
  "ViolatingSecurityGroups": {}
}
```

Violation detail for network interfaces associated with an EC2 instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ViolationTarget|object|false|none|none|
|ViolatingSecurityGroups|object|false|none|none|

<h2 id="tocS_PartialMatches">PartialMatches</h2>
<!-- backwards compatibility -->
<a id="schemapartialmatches"></a>
<a id="schema_PartialMatches"></a>
<a id="tocSpartialmatches"></a>
<a id="tocspartialmatches"></a>

```json
[
  {
    "Reference": {},
    "TargetViolationReasons": {}
  }
]
```

<h2 id="tocS_SecurityGroupRemediationActions">SecurityGroupRemediationActions</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroupremediationactions"></a>
<a id="schema_SecurityGroupRemediationActions"></a>
<a id="tocSsecuritygroupremediationactions"></a>
<a id="tocssecuritygroupremediationactions"></a>

```json
[
  {
    "RemediationActionType": {},
    "Description": {},
    "RemediationResult": {
      "IPV4Range": {},
      "IPV6Range": {},
      "PrefixListId": {},
      "Protocol": {},
      "FromPort": {},
      "ToPort": {}
    },
    "IsDefaultAction": {}
  }
]
```

<h2 id="tocS_AwsVPCSecurityGroupViolation">AwsVPCSecurityGroupViolation</h2>
<!-- backwards compatibility -->
<a id="schemaawsvpcsecuritygroupviolation"></a>
<a id="schema_AwsVPCSecurityGroupViolation"></a>
<a id="tocSawsvpcsecuritygroupviolation"></a>
<a id="tocsawsvpcsecuritygroupviolation"></a>

```json
{
  "ViolationTarget": {},
  "ViolationTargetDescription": {},
  "PartialMatches": {},
  "PossibleSecurityGroupRemediationActions": {}
}
```

Violation detail for the rule violation in a security group when compared to the primary security group of the Firewall Manager policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ViolationTarget|object|false|none|none|
|ViolationTargetDescription|object|false|none|none|
|PartialMatches|object|false|none|none|
|PossibleSecurityGroupRemediationActions|object|false|none|none|

<h2 id="tocS_Base62Id">Base62Id</h2>
<!-- backwards compatibility -->
<a id="schemabase62id"></a>
<a id="schema_Base62Id"></a>
<a id="tocSbase62id"></a>
<a id="tocsbase62id"></a>

```json
"stringstringstringstri"
```

<h2 id="tocS_BasicInteger">BasicInteger</h2>
<!-- backwards compatibility -->
<a id="schemabasicinteger"></a>
<a id="schema_BasicInteger"></a>
<a id="tocSbasicinteger"></a>
<a id="tocsbasicinteger"></a>

```json
-2147483648
```

<h2 id="tocS_Identifier">Identifier</h2>
<!-- backwards compatibility -->
<a id="schemaidentifier"></a>
<a id="schema_Identifier"></a>
<a id="tocSidentifier"></a>
<a id="tocsidentifier"></a>

```json
"string"
```

<h2 id="tocS_IdentifierList">IdentifierList</h2>
<!-- backwards compatibility -->
<a id="schemaidentifierlist"></a>
<a id="schema_IdentifierList"></a>
<a id="tocSidentifierlist"></a>
<a id="tocsidentifierlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_FailedItemList">FailedItemList</h2>
<!-- backwards compatibility -->
<a id="schemafaileditemlist"></a>
<a id="schema_FailedItemList"></a>
<a id="tocSfaileditemlist"></a>
<a id="tocsfaileditemlist"></a>

```json
[
  {
    "URI": {},
    "Reason": {}
  }
]
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

<h2 id="tocS_ViolationReason">ViolationReason</h2>
<!-- backwards compatibility -->
<a id="schemaviolationreason"></a>
<a id="schema_ViolationReason"></a>
<a id="tocSviolationreason"></a>
<a id="tocsviolationreason"></a>

```json
"WEB_ACL_MISSING_RULE_GROUP"
```

<h2 id="tocS_ResourceType">ResourceType</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetype"></a>
<a id="schema_ResourceType"></a>
<a id="tocSresourcetype"></a>
<a id="tocsresourcetype"></a>

```json
"string"
```

<h2 id="tocS_ComplianceViolatorMetadata">ComplianceViolatorMetadata</h2>
<!-- backwards compatibility -->
<a id="schemacomplianceviolatormetadata"></a>
<a id="schema_ComplianceViolatorMetadata"></a>
<a id="tocScomplianceviolatormetadata"></a>
<a id="tocscomplianceviolatormetadata"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[LengthBoundedString](#schemalengthboundedstring)|false|none|none|

<h2 id="tocS_ComplianceViolator">ComplianceViolator</h2>
<!-- backwards compatibility -->
<a id="schemacomplianceviolator"></a>
<a id="schema_ComplianceViolator"></a>
<a id="tocScomplianceviolator"></a>
<a id="tocscomplianceviolator"></a>

```json
{
  "ResourceId": {},
  "ViolationReason": {},
  "ResourceType": {},
  "Metadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

Details of the resource that is not protected by the policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|false|none|none|
|ViolationReason|object|false|none|none|
|ResourceType|object|false|none|none|
|Metadata|object|false|none|none|

<h2 id="tocS_ComplianceViolators">ComplianceViolators</h2>
<!-- backwards compatibility -->
<a id="schemacomplianceviolators"></a>
<a id="schema_ComplianceViolators"></a>
<a id="tocScomplianceviolators"></a>
<a id="tocscomplianceviolators"></a>

```json
[
  {
    "ResourceId": {},
    "ViolationReason": {},
    "ResourceType": {},
    "Metadata": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_CustomerPolicyScopeId">CustomerPolicyScopeId</h2>
<!-- backwards compatibility -->
<a id="schemacustomerpolicyscopeid"></a>
<a id="schema_CustomerPolicyScopeId"></a>
<a id="tocScustomerpolicyscopeid"></a>
<a id="tocscustomerpolicyscopeid"></a>

```json
"string"
```

<h2 id="tocS_CustomerPolicyScopeIdList">CustomerPolicyScopeIdList</h2>
<!-- backwards compatibility -->
<a id="schemacustomerpolicyscopeidlist"></a>
<a id="schema_CustomerPolicyScopeIdList"></a>
<a id="tocScustomerpolicyscopeidlist"></a>
<a id="tocscustomerpolicyscopeidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_CustomerPolicyScopeIdType">CustomerPolicyScopeIdType</h2>
<!-- backwards compatibility -->
<a id="schemacustomerpolicyscopeidtype"></a>
<a id="schema_CustomerPolicyScopeIdType"></a>
<a id="tocScustomerpolicyscopeidtype"></a>
<a id="tocscustomerpolicyscopeidtype"></a>

```json
"ACCOUNT"
```

<h2 id="tocS_CustomerPolicyScopeMap">CustomerPolicyScopeMap</h2>
<!-- backwards compatibility -->
<a id="schemacustomerpolicyscopemap"></a>
<a id="schema_CustomerPolicyScopeMap"></a>
<a id="tocScustomerpolicyscopemap"></a>
<a id="tocscustomerpolicyscopemap"></a>

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
|**additionalProperties**|[CustomerPolicyScopeIdList](#schemacustomerpolicyscopeidlist)|false|none|none|

<h2 id="tocS_CustomerPolicyStatus">CustomerPolicyStatus</h2>
<!-- backwards compatibility -->
<a id="schemacustomerpolicystatus"></a>
<a id="schema_CustomerPolicyStatus"></a>
<a id="tocScustomerpolicystatus"></a>
<a id="tocscustomerpolicystatus"></a>

```json
"ACTIVE"
```

<h2 id="tocS_PolicyId">PolicyId</h2>
<!-- backwards compatibility -->
<a id="schemapolicyid"></a>
<a id="schema_PolicyId"></a>
<a id="tocSpolicyid"></a>
<a id="tocspolicyid"></a>

```json
"stringstringstringstringstringstring"
```

<h2 id="tocS_DependentServiceName">DependentServiceName</h2>
<!-- backwards compatibility -->
<a id="schemadependentservicename"></a>
<a id="schema_DependentServiceName"></a>
<a id="tocSdependentservicename"></a>
<a id="tocsdependentservicename"></a>

```json
"AWSCONFIG"
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

<h2 id="tocS_DestinationType">DestinationType</h2>
<!-- backwards compatibility -->
<a id="schemadestinationtype"></a>
<a id="schema_DestinationType"></a>
<a id="tocSdestinationtype"></a>
<a id="tocsdestinationtype"></a>

```json
"IPV4"
```

<h2 id="tocS_DetailedInfo">DetailedInfo</h2>
<!-- backwards compatibility -->
<a id="schemadetailedinfo"></a>
<a id="schema_DetailedInfo"></a>
<a id="tocSdetailedinfo"></a>
<a id="tocsdetailedinfo"></a>

```json
"string"
```

<h2 id="tocS_DiscoveredResource">DiscoveredResource</h2>
<!-- backwards compatibility -->
<a id="schemadiscoveredresource"></a>
<a id="schema_DiscoveredResource"></a>
<a id="tocSdiscoveredresource"></a>
<a id="tocsdiscoveredresource"></a>

```json
{
  "URI": {},
  "AccountId": {},
  "Type": {},
  "Name": {}
}
```

A resource in the organization that's available to be associated with a Firewall Manager resource set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|URI|object|false|none|none|
|AccountId|object|false|none|none|
|Type|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS_DiscoveredResourceList">DiscoveredResourceList</h2>
<!-- backwards compatibility -->
<a id="schemadiscoveredresourcelist"></a>
<a id="schema_DiscoveredResourceList"></a>
<a id="tocSdiscoveredresourcelist"></a>
<a id="tocsdiscoveredresourcelist"></a>

```json
[
  {
    "URI": {},
    "AccountId": {},
    "Type": {},
    "Name": {}
  }
]
```

<h2 id="tocS_DnsDuplicateRuleGroupViolation">DnsDuplicateRuleGroupViolation</h2>
<!-- backwards compatibility -->
<a id="schemadnsduplicaterulegroupviolation"></a>
<a id="schema_DnsDuplicateRuleGroupViolation"></a>
<a id="tocSdnsduplicaterulegroupviolation"></a>
<a id="tocsdnsduplicaterulegroupviolation"></a>

```json
{
  "ViolationTarget": {},
  "ViolationTargetDescription": {}
}
```

A DNS Firewall rule group that Firewall Manager tried to associate with a VPC is already associated with the VPC and can't be associated again.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ViolationTarget|object|false|none|none|
|ViolationTargetDescription|object|false|none|none|

<h2 id="tocS_DnsRuleGroupLimitExceededViolation">DnsRuleGroupLimitExceededViolation</h2>
<!-- backwards compatibility -->
<a id="schemadnsrulegrouplimitexceededviolation"></a>
<a id="schema_DnsRuleGroupLimitExceededViolation"></a>
<a id="tocSdnsrulegrouplimitexceededviolation"></a>
<a id="tocsdnsrulegrouplimitexceededviolation"></a>

```json
{
  "ViolationTarget": {},
  "ViolationTargetDescription": {},
  "NumberOfRuleGroupsAlreadyAssociated": {}
}
```

The VPC that Firewall Manager was applying a DNS Fireall policy to reached the limit for associated DNS Firewall rule groups. Firewall Manager tried to associate another rule group with the VPC and failed due to the limit.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ViolationTarget|object|false|none|none|
|ViolationTargetDescription|object|false|none|none|
|NumberOfRuleGroupsAlreadyAssociated|object|false|none|none|

<h2 id="tocS_DnsRuleGroupPriority">DnsRuleGroupPriority</h2>
<!-- backwards compatibility -->
<a id="schemadnsrulegrouppriority"></a>
<a id="schema_DnsRuleGroupPriority"></a>
<a id="tocSdnsrulegrouppriority"></a>
<a id="tocsdnsrulegrouppriority"></a>

```json
0
```

<h2 id="tocS_DnsRuleGroupPriorities">DnsRuleGroupPriorities</h2>
<!-- backwards compatibility -->
<a id="schemadnsrulegrouppriorities"></a>
<a id="schema_DnsRuleGroupPriorities"></a>
<a id="tocSdnsrulegrouppriorities"></a>
<a id="tocsdnsrulegrouppriorities"></a>

```json
[
  0
]
```

<h2 id="tocS_DnsRuleGroupPriorityConflictViolation">DnsRuleGroupPriorityConflictViolation</h2>
<!-- backwards compatibility -->
<a id="schemadnsrulegrouppriorityconflictviolation"></a>
<a id="schema_DnsRuleGroupPriorityConflictViolation"></a>
<a id="tocSdnsrulegrouppriorityconflictviolation"></a>
<a id="tocsdnsrulegrouppriorityconflictviolation"></a>

```json
{
  "ViolationTarget": {},
  "ViolationTargetDescription": {},
  "ConflictingPriority": {},
  "ConflictingPolicyId": {},
  "UnavailablePriorities": {}
}
```

A rule group that Firewall Manager tried to associate with a VPC has the same priority as a rule group that's already associated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ViolationTarget|object|false|none|none|
|ViolationTargetDescription|object|false|none|none|
|ConflictingPriority|object|false|none|none|
|ConflictingPolicyId|object|false|none|none|
|UnavailablePriorities|object|false|none|none|

<h2 id="tocS_EC2AssociateRouteTableAction">EC2AssociateRouteTableAction</h2>
<!-- backwards compatibility -->
<a id="schemaec2associateroutetableaction"></a>
<a id="schema_EC2AssociateRouteTableAction"></a>
<a id="tocSec2associateroutetableaction"></a>
<a id="tocsec2associateroutetableaction"></a>

```json
{
  "Description": {},
  "RouteTableId": {
    "ResourceId": {},
    "Description": {}
  },
  "SubnetId": {
    "ResourceId": {},
    "Description": {}
  },
  "GatewayId": {
    "ResourceId": {},
    "Description": {}
  }
}
```

The action of associating an EC2 resource, such as a subnet or internet gateway, with a route table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|RouteTableId|object|true|none|none|
|SubnetId|object|false|none|none|
|GatewayId|object|false|none|none|

<h2 id="tocS_EC2CopyRouteTableAction">EC2CopyRouteTableAction</h2>
<!-- backwards compatibility -->
<a id="schemaec2copyroutetableaction"></a>
<a id="schema_EC2CopyRouteTableAction"></a>
<a id="tocSec2copyroutetableaction"></a>
<a id="tocsec2copyroutetableaction"></a>

```json
{
  "Description": {},
  "VpcId": {
    "ResourceId": {},
    "Description": {}
  },
  "RouteTableId": {
    "ResourceId": {},
    "Description": {}
  }
}
```

An action that copies the EC2 route table for use in remediation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|VpcId|object|true|none|none|
|RouteTableId|object|true|none|none|

<h2 id="tocS_EC2CreateRouteAction">EC2CreateRouteAction</h2>
<!-- backwards compatibility -->
<a id="schemaec2createrouteaction"></a>
<a id="schema_EC2CreateRouteAction"></a>
<a id="tocSec2createrouteaction"></a>
<a id="tocsec2createrouteaction"></a>

```json
{
  "Description": {},
  "DestinationCidrBlock": {},
  "DestinationPrefixListId": {},
  "DestinationIpv6CidrBlock": {},
  "VpcEndpointId": {
    "ResourceId": {},
    "Description": {}
  },
  "GatewayId": {
    "ResourceId": {},
    "Description": {}
  },
  "RouteTableId": {
    "ResourceId": {},
    "Description": {}
  }
}
```

Information about the CreateRoute action in Amazon EC2.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|DestinationCidrBlock|object|false|none|none|
|DestinationPrefixListId|object|false|none|none|
|DestinationIpv6CidrBlock|object|false|none|none|
|VpcEndpointId|object|false|none|none|
|GatewayId|object|false|none|none|
|RouteTableId|object|true|none|none|

<h2 id="tocS_EC2CreateRouteTableAction">EC2CreateRouteTableAction</h2>
<!-- backwards compatibility -->
<a id="schemaec2createroutetableaction"></a>
<a id="schema_EC2CreateRouteTableAction"></a>
<a id="tocSec2createroutetableaction"></a>
<a id="tocsec2createroutetableaction"></a>

```json
{
  "Description": {},
  "VpcId": {
    "ResourceId": {},
    "Description": {}
  }
}
```

Information about the CreateRouteTable action in Amazon EC2.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|VpcId|object|true|none|none|

<h2 id="tocS_EC2DeleteRouteAction">EC2DeleteRouteAction</h2>
<!-- backwards compatibility -->
<a id="schemaec2deleterouteaction"></a>
<a id="schema_EC2DeleteRouteAction"></a>
<a id="tocSec2deleterouteaction"></a>
<a id="tocsec2deleterouteaction"></a>

```json
{
  "Description": {},
  "DestinationCidrBlock": {},
  "DestinationPrefixListId": {},
  "DestinationIpv6CidrBlock": {},
  "RouteTableId": {
    "ResourceId": {},
    "Description": {}
  }
}
```

Information about the DeleteRoute action in Amazon EC2.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|DestinationCidrBlock|object|false|none|none|
|DestinationPrefixListId|object|false|none|none|
|DestinationIpv6CidrBlock|object|false|none|none|
|RouteTableId|object|true|none|none|

<h2 id="tocS_EC2ReplaceRouteAction">EC2ReplaceRouteAction</h2>
<!-- backwards compatibility -->
<a id="schemaec2replacerouteaction"></a>
<a id="schema_EC2ReplaceRouteAction"></a>
<a id="tocSec2replacerouteaction"></a>
<a id="tocsec2replacerouteaction"></a>

```json
{
  "Description": {},
  "DestinationCidrBlock": {},
  "DestinationPrefixListId": {},
  "DestinationIpv6CidrBlock": {},
  "GatewayId": {
    "ResourceId": {},
    "Description": {}
  },
  "RouteTableId": {
    "ResourceId": {},
    "Description": {}
  }
}
```

Information about the ReplaceRoute action in Amazon EC2.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|DestinationCidrBlock|object|false|none|none|
|DestinationPrefixListId|object|false|none|none|
|DestinationIpv6CidrBlock|object|false|none|none|
|GatewayId|object|false|none|none|
|RouteTableId|object|true|none|none|

<h2 id="tocS_EC2ReplaceRouteTableAssociationAction">EC2ReplaceRouteTableAssociationAction</h2>
<!-- backwards compatibility -->
<a id="schemaec2replaceroutetableassociationaction"></a>
<a id="schema_EC2ReplaceRouteTableAssociationAction"></a>
<a id="tocSec2replaceroutetableassociationaction"></a>
<a id="tocsec2replaceroutetableassociationaction"></a>

```json
{
  "Description": {},
  "AssociationId": {
    "ResourceId": {},
    "Description": {}
  },
  "RouteTableId": {
    "ResourceId": {},
    "Description": {}
  }
}
```

Information about the ReplaceRouteTableAssociation action in Amazon EC2.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|AssociationId|object|true|none|none|
|RouteTableId|object|true|none|none|

<h2 id="tocS_PolicyComplianceStatusType">PolicyComplianceStatusType</h2>
<!-- backwards compatibility -->
<a id="schemapolicycompliancestatustype"></a>
<a id="schema_PolicyComplianceStatusType"></a>
<a id="tocSpolicycompliancestatustype"></a>
<a id="tocspolicycompliancestatustype"></a>

```json
"COMPLIANT"
```

<h2 id="tocS_ResourceCount">ResourceCount</h2>
<!-- backwards compatibility -->
<a id="schemaresourcecount"></a>
<a id="schema_ResourceCount"></a>
<a id="tocSresourcecount"></a>
<a id="tocsresourcecount"></a>

```json
0
```

<h2 id="tocS_EvaluationResult">EvaluationResult</h2>
<!-- backwards compatibility -->
<a id="schemaevaluationresult"></a>
<a id="schema_EvaluationResult"></a>
<a id="tocSevaluationresult"></a>
<a id="tocsevaluationresult"></a>

```json
{
  "ComplianceStatus": {},
  "ViolatorCount": {},
  "EvaluationLimitExceeded": {}
}
```

Describes the compliance status for the account. An account is considered noncompliant if it includes resources that are not protected by the specified policy or that don't comply with the policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ComplianceStatus|object|false|none|none|
|ViolatorCount|object|false|none|none|
|EvaluationLimitExceeded|object|false|none|none|

<h2 id="tocS_EvaluationResults">EvaluationResults</h2>
<!-- backwards compatibility -->
<a id="schemaevaluationresults"></a>
<a id="schema_EvaluationResults"></a>
<a id="tocSevaluationresults"></a>
<a id="tocsevaluationresults"></a>

```json
[
  {
    "ComplianceStatus": {},
    "ViolatorCount": {},
    "EvaluationLimitExceeded": {}
  }
]
```

<h2 id="tocS_LengthBoundedStringList">LengthBoundedStringList</h2>
<!-- backwards compatibility -->
<a id="schemalengthboundedstringlist"></a>
<a id="schema_LengthBoundedStringList"></a>
<a id="tocSlengthboundedstringlist"></a>
<a id="tocslengthboundedstringlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ExpectedRoute">ExpectedRoute</h2>
<!-- backwards compatibility -->
<a id="schemaexpectedroute"></a>
<a id="schema_ExpectedRoute"></a>
<a id="tocSexpectedroute"></a>
<a id="tocsexpectedroute"></a>

```json
{
  "IpV4Cidr": {},
  "PrefixListId": {},
  "IpV6Cidr": {},
  "ContributingSubnets": {},
  "AllowedTargets": {},
  "RouteTableId": {}
}
```

Information about the expected route in the route table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IpV4Cidr|object|false|none|none|
|PrefixListId|object|false|none|none|
|IpV6Cidr|object|false|none|none|
|ContributingSubnets|object|false|none|none|
|AllowedTargets|object|false|none|none|
|RouteTableId|object|false|none|none|

<h2 id="tocS_ExpectedRoutes">ExpectedRoutes</h2>
<!-- backwards compatibility -->
<a id="schemaexpectedroutes"></a>
<a id="schema_ExpectedRoutes"></a>
<a id="tocSexpectedroutes"></a>
<a id="tocsexpectedroutes"></a>

```json
[
  {
    "IpV4Cidr": {},
    "PrefixListId": {},
    "IpV6Cidr": {},
    "ContributingSubnets": {},
    "AllowedTargets": {},
    "RouteTableId": {}
  }
]
```

<h2 id="tocS_ManagedServiceData">ManagedServiceData</h2>
<!-- backwards compatibility -->
<a id="schemamanagedservicedata"></a>
<a id="schema_ManagedServiceData"></a>
<a id="tocSmanagedservicedata"></a>
<a id="tocsmanagedservicedata"></a>

```json
"string"
```

<h2 id="tocS_FMSPolicyUpdateFirewallCreationConfigAction">FMSPolicyUpdateFirewallCreationConfigAction</h2>
<!-- backwards compatibility -->
<a id="schemafmspolicyupdatefirewallcreationconfigaction"></a>
<a id="schema_FMSPolicyUpdateFirewallCreationConfigAction"></a>
<a id="tocSfmspolicyupdatefirewallcreationconfigaction"></a>
<a id="tocsfmspolicyupdatefirewallcreationconfigaction"></a>

```json
{
  "Description": {},
  "FirewallCreationConfig": {}
}
```

Contains information about the actions that you can take to remediate scope violations caused by your policy's <code>FirewallCreationConfig</code>. <code>FirewallCreationConfig</code> is an optional configuration that you can use to choose which Availability Zones Firewall Manager creates Network Firewall endpoints in.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|FirewallCreationConfig|object|false|none|none|

<h2 id="tocS_FailedItemReason">FailedItemReason</h2>
<!-- backwards compatibility -->
<a id="schemafaileditemreason"></a>
<a id="schema_FailedItemReason"></a>
<a id="tocSfaileditemreason"></a>
<a id="tocsfaileditemreason"></a>

```json
"NOT_VALID_ARN"
```

<h2 id="tocS_FailedItem">FailedItem</h2>
<!-- backwards compatibility -->
<a id="schemafaileditem"></a>
<a id="schema_FailedItem"></a>
<a id="tocSfaileditem"></a>
<a id="tocsfaileditem"></a>

```json
{
  "URI": {},
  "Reason": {}
}
```

Details of a resource that failed when trying to update it's association to a resource set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|URI|object|false|none|none|
|Reason|object|false|none|none|

<h2 id="tocS_FirewallDeploymentModel">FirewallDeploymentModel</h2>
<!-- backwards compatibility -->
<a id="schemafirewalldeploymentmodel"></a>
<a id="schema_FirewallDeploymentModel"></a>
<a id="tocSfirewalldeploymentmodel"></a>
<a id="tocsfirewalldeploymentmodel"></a>

```json
"CENTRALIZED"
```

<h2 id="tocS_FirewallPolicyId">FirewallPolicyId</h2>
<!-- backwards compatibility -->
<a id="schemafirewallpolicyid"></a>
<a id="schema_FirewallPolicyId"></a>
<a id="tocSfirewallpolicyid"></a>
<a id="tocsfirewallpolicyid"></a>

```json
"string"
```

<h2 id="tocS_FirewallPolicyName">FirewallPolicyName</h2>
<!-- backwards compatibility -->
<a id="schemafirewallpolicyname"></a>
<a id="schema_FirewallPolicyName"></a>
<a id="tocSfirewallpolicyname"></a>
<a id="tocsfirewallpolicyname"></a>

```json
"string"
```

<h2 id="tocS_FirewallSubnetIsOutOfScopeViolation">FirewallSubnetIsOutOfScopeViolation</h2>
<!-- backwards compatibility -->
<a id="schemafirewallsubnetisoutofscopeviolation"></a>
<a id="schema_FirewallSubnetIsOutOfScopeViolation"></a>
<a id="tocSfirewallsubnetisoutofscopeviolation"></a>
<a id="tocsfirewallsubnetisoutofscopeviolation"></a>

```json
{
  "FirewallSubnetId": {},
  "VpcId": {},
  "SubnetAvailabilityZone": {},
  "SubnetAvailabilityZoneId": {},
  "VpcEndpointId": {}
}
```

Contains details about the firewall subnet that violates the policy scope.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallSubnetId|object|false|none|none|
|VpcId|object|false|none|none|
|SubnetAvailabilityZone|object|false|none|none|
|SubnetAvailabilityZoneId|object|false|none|none|
|VpcEndpointId|object|false|none|none|

<h2 id="tocS_FirewallSubnetMissingVPCEndpointViolation">FirewallSubnetMissingVPCEndpointViolation</h2>
<!-- backwards compatibility -->
<a id="schemafirewallsubnetmissingvpcendpointviolation"></a>
<a id="schema_FirewallSubnetMissingVPCEndpointViolation"></a>
<a id="tocSfirewallsubnetmissingvpcendpointviolation"></a>
<a id="tocsfirewallsubnetmissingvpcendpointviolation"></a>

```json
{
  "FirewallSubnetId": {},
  "VpcId": {},
  "SubnetAvailabilityZone": {},
  "SubnetAvailabilityZoneId": {}
}
```

The violation details for a firewall subnet's VPC endpoint that's deleted or missing.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallSubnetId|object|false|none|none|
|VpcId|object|false|none|none|
|SubnetAvailabilityZone|object|false|none|none|
|SubnetAvailabilityZoneId|object|false|none|none|

<h2 id="tocS_PolicyComplianceDetail">PolicyComplianceDetail</h2>
<!-- backwards compatibility -->
<a id="schemapolicycompliancedetail"></a>
<a id="schema_PolicyComplianceDetail"></a>
<a id="tocSpolicycompliancedetail"></a>
<a id="tocspolicycompliancedetail"></a>

```json
{
  "PolicyOwner": {},
  "PolicyId": {},
  "MemberAccount": {},
  "Violators": {},
  "EvaluationLimitExceeded": {},
  "ExpiredAt": {},
  "IssueInfoMap": {
    "property1": "string",
    "property2": "string"
  }
}
```

Describes the noncompliant resources in a member account for a specific Firewall Manager policy. A maximum of 100 entries are displayed. If more than 100 resources are noncompliant, <code>EvaluationLimitExceeded</code> is set to <code>True</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyOwner|object|false|none|none|
|PolicyId|object|false|none|none|
|MemberAccount|object|false|none|none|
|Violators|object|false|none|none|
|EvaluationLimitExceeded|object|false|none|none|
|ExpiredAt|object|false|none|none|
|IssueInfoMap|object|false|none|none|

<h2 id="tocS_Policy">Policy</h2>
<!-- backwards compatibility -->
<a id="schemapolicy"></a>
<a id="schema_Policy"></a>
<a id="tocSpolicy"></a>
<a id="tocspolicy"></a>

```json
{
  "PolicyId": {},
  "PolicyName": {},
  "PolicyUpdateToken": {},
  "SecurityServicePolicyData": {
    "Type": {},
    "ManagedServiceData": {},
    "PolicyOption": {
      "NetworkFirewallPolicy": {
        "FirewallDeploymentModel": {}
      },
      "ThirdPartyFirewallPolicy": {
        "FirewallDeploymentModel": {}
      }
    }
  },
  "ResourceType": {},
  "ResourceTypeList": {},
  "ResourceTags": {},
  "ExcludeResourceTags": {},
  "RemediationEnabled": {},
  "DeleteUnusedFMManagedResources": {},
  "IncludeMap": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "ExcludeMap": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "ResourceSetIds": {},
  "PolicyDescription": {},
  "PolicyStatus": {}
}
```

An Firewall Manager policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyId|object|false|none|none|
|PolicyName|object|true|none|none|
|PolicyUpdateToken|object|false|none|none|
|SecurityServicePolicyData|object|true|none|none|
|ResourceType|object|true|none|none|
|ResourceTypeList|object|false|none|none|
|ResourceTags|object|false|none|none|
|ExcludeResourceTags|object|true|none|none|
|RemediationEnabled|object|true|none|none|
|DeleteUnusedFMManagedResources|object|false|none|none|
|IncludeMap|object|false|none|none|
|ExcludeMap|object|false|none|none|
|ResourceSetIds|object|false|none|none|
|PolicyDescription|object|false|none|none|
|PolicyStatus|object|false|none|none|

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

<h2 id="tocS_SecurityServiceType">SecurityServiceType</h2>
<!-- backwards compatibility -->
<a id="schemasecurityservicetype"></a>
<a id="schema_SecurityServiceType"></a>
<a id="tocSsecurityservicetype"></a>
<a id="tocssecurityservicetype"></a>

```json
"WAF"
```

<h2 id="tocS_ProtectionData">ProtectionData</h2>
<!-- backwards compatibility -->
<a id="schemaprotectiondata"></a>
<a id="schema_ProtectionData"></a>
<a id="tocSprotectiondata"></a>
<a id="tocsprotectiondata"></a>

```json
"string"
```

<h2 id="tocS_ProtocolsListData">ProtocolsListData</h2>
<!-- backwards compatibility -->
<a id="schemaprotocolslistdata"></a>
<a id="schema_ProtocolsListData"></a>
<a id="tocSprotocolslistdata"></a>
<a id="tocsprotocolslistdata"></a>

```json
{
  "ListId": {},
  "ListName": {},
  "ListUpdateToken": {},
  "CreateTime": {},
  "LastUpdateTime": {},
  "ProtocolsList": {},
  "PreviousProtocolsList": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  }
}
```

An Firewall Manager protocols list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ListId|object|false|none|none|
|ListName|object|true|none|none|
|ListUpdateToken|object|false|none|none|
|CreateTime|object|false|none|none|
|LastUpdateTime|object|false|none|none|
|ProtocolsList|object|true|none|none|
|PreviousProtocolsList|object|false|none|none|

<h2 id="tocS_ResourceSet">ResourceSet</h2>
<!-- backwards compatibility -->
<a id="schemaresourceset"></a>
<a id="schema_ResourceSet"></a>
<a id="tocSresourceset"></a>
<a id="tocsresourceset"></a>

```json
{
  "Id": {},
  "Name": {},
  "Description": {},
  "UpdateToken": {},
  "ResourceTypeList": {},
  "LastUpdateTime": {},
  "ResourceSetStatus": {}
}
```

A set of resources to include in a policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Name|object|true|none|none|
|Description|object|false|none|none|
|UpdateToken|object|false|none|none|
|ResourceTypeList|object|true|none|none|
|LastUpdateTime|object|false|none|none|
|ResourceSetStatus|object|false|none|none|

<h2 id="tocS_MarketplaceSubscriptionOnboardingStatus">MarketplaceSubscriptionOnboardingStatus</h2>
<!-- backwards compatibility -->
<a id="schemamarketplacesubscriptiononboardingstatus"></a>
<a id="schema_MarketplaceSubscriptionOnboardingStatus"></a>
<a id="tocSmarketplacesubscriptiononboardingstatus"></a>
<a id="tocsmarketplacesubscriptiononboardingstatus"></a>

```json
"NO_SUBSCRIPTION"
```

<h2 id="tocS_ViolationDetail">ViolationDetail</h2>
<!-- backwards compatibility -->
<a id="schemaviolationdetail"></a>
<a id="schema_ViolationDetail"></a>
<a id="tocSviolationdetail"></a>
<a id="tocsviolationdetail"></a>

```json
{
  "PolicyId": {},
  "MemberAccount": {},
  "ResourceId": {},
  "ResourceType": {},
  "ResourceViolations": {},
  "ResourceTags": {},
  "ResourceDescription": {}
}
```

Violations for a resource based on the specified Firewall Manager policy and Amazon Web Services account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyId|object|true|none|none|
|MemberAccount|object|true|none|none|
|ResourceId|object|true|none|none|
|ResourceType|object|true|none|none|
|ResourceViolations|object|true|none|none|
|ResourceTags|object|false|none|none|
|ResourceDescription|object|false|none|none|

<h2 id="tocS_IssueInfoMap">IssueInfoMap</h2>
<!-- backwards compatibility -->
<a id="schemaissueinfomap"></a>
<a id="schema_IssueInfoMap"></a>
<a id="tocSissueinfomap"></a>
<a id="tocsissueinfomap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[DetailedInfo](#schemadetailedinfo)|false|none|none|

<h2 id="tocS_PolicyComplianceStatusList">PolicyComplianceStatusList</h2>
<!-- backwards compatibility -->
<a id="schemapolicycompliancestatuslist"></a>
<a id="schema_PolicyComplianceStatusList"></a>
<a id="tocSpolicycompliancestatuslist"></a>
<a id="tocspolicycompliancestatuslist"></a>

```json
[
  {
    "PolicyOwner": {},
    "PolicyId": {},
    "PolicyName": {},
    "MemberAccount": {},
    "EvaluationResults": {},
    "LastUpdated": {},
    "IssueInfoMap": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_MemberAccounts">MemberAccounts</h2>
<!-- backwards compatibility -->
<a id="schemamemberaccounts"></a>
<a id="schema_MemberAccounts"></a>
<a id="tocSmemberaccounts"></a>
<a id="tocsmemberaccounts"></a>

```json
[
  "string"
]
```

<h2 id="tocS_PolicySummaryList">PolicySummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapolicysummarylist"></a>
<a id="schema_PolicySummaryList"></a>
<a id="tocSpolicysummarylist"></a>
<a id="tocspolicysummarylist"></a>

```json
[
  {
    "PolicyArn": {},
    "PolicyId": {},
    "PolicyName": {},
    "ResourceType": {},
    "SecurityServiceType": {},
    "RemediationEnabled": {},
    "DeleteUnusedFMManagedResources": {},
    "PolicyStatus": {}
  }
]
```

<h2 id="tocS_ProtocolsListsData">ProtocolsListsData</h2>
<!-- backwards compatibility -->
<a id="schemaprotocolslistsdata"></a>
<a id="schema_ProtocolsListsData"></a>
<a id="tocSprotocolslistsdata"></a>
<a id="tocsprotocolslistsdata"></a>

```json
[
  {
    "ListArn": {},
    "ListId": {},
    "ListName": {},
    "ProtocolsList": {}
  }
]
```

<h2 id="tocS_ResourceList">ResourceList</h2>
<!-- backwards compatibility -->
<a id="schemaresourcelist"></a>
<a id="schema_ResourceList"></a>
<a id="tocSresourcelist"></a>
<a id="tocsresourcelist"></a>

```json
[
  {
    "URI": {},
    "AccountId": {}
  }
]
```

<h2 id="tocS_ResourceSetSummaryList">ResourceSetSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaresourcesetsummarylist"></a>
<a id="schema_ResourceSetSummaryList"></a>
<a id="tocSresourcesetsummarylist"></a>
<a id="tocsresourcesetsummarylist"></a>

```json
[
  {
    "Id": {},
    "Name": {},
    "Description": {},
    "LastUpdateTime": {},
    "ResourceSetStatus": {}
  }
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

<h2 id="tocS_ThirdPartyFirewallFirewallPolicies">ThirdPartyFirewallFirewallPolicies</h2>
<!-- backwards compatibility -->
<a id="schemathirdpartyfirewallfirewallpolicies"></a>
<a id="schema_ThirdPartyFirewallFirewallPolicies"></a>
<a id="tocSthirdpartyfirewallfirewallpolicies"></a>
<a id="tocsthirdpartyfirewallfirewallpolicies"></a>

```json
[
  {
    "FirewallPolicyId": {},
    "FirewallPolicyName": {}
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

<h2 id="tocS_NetworkFirewallAction">NetworkFirewallAction</h2>
<!-- backwards compatibility -->
<a id="schemanetworkfirewallaction"></a>
<a id="schema_NetworkFirewallAction"></a>
<a id="tocSnetworkfirewallaction"></a>
<a id="tocsnetworkfirewallaction"></a>

```json
"string"
```

<h2 id="tocS_NetworkFirewallActionList">NetworkFirewallActionList</h2>
<!-- backwards compatibility -->
<a id="schemanetworkfirewallactionlist"></a>
<a id="schema_NetworkFirewallActionList"></a>
<a id="tocSnetworkfirewallactionlist"></a>
<a id="tocsnetworkfirewallactionlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Routes">Routes</h2>
<!-- backwards compatibility -->
<a id="schemaroutes"></a>
<a id="schema_Routes"></a>
<a id="tocSroutes"></a>
<a id="tocsroutes"></a>

```json
[
  {
    "DestinationType": {},
    "TargetType": {},
    "Destination": {},
    "Target": {}
  }
]
```

<h2 id="tocS_NetworkFirewallBlackHoleRouteDetectedViolation">NetworkFirewallBlackHoleRouteDetectedViolation</h2>
<!-- backwards compatibility -->
<a id="schemanetworkfirewallblackholeroutedetectedviolation"></a>
<a id="schema_NetworkFirewallBlackHoleRouteDetectedViolation"></a>
<a id="tocSnetworkfirewallblackholeroutedetectedviolation"></a>
<a id="tocsnetworkfirewallblackholeroutedetectedviolation"></a>

```json
{
  "ViolationTarget": {},
  "RouteTableId": {},
  "VpcId": {},
  "ViolatingRoutes": {}
}
```

Violation detail for an internet gateway route with an inactive state in the customer subnet route table or Network Firewall subnet route table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ViolationTarget|object|false|none|none|
|RouteTableId|object|false|none|none|
|VpcId|object|false|none|none|
|ViolatingRoutes|object|false|none|none|

<h2 id="tocS_NetworkFirewallInternetTrafficNotInspectedViolation">NetworkFirewallInternetTrafficNotInspectedViolation</h2>
<!-- backwards compatibility -->
<a id="schemanetworkfirewallinternettrafficnotinspectedviolation"></a>
<a id="schema_NetworkFirewallInternetTrafficNotInspectedViolation"></a>
<a id="tocSnetworkfirewallinternettrafficnotinspectedviolation"></a>
<a id="tocsnetworkfirewallinternettrafficnotinspectedviolation"></a>

```json
{
  "SubnetId": {},
  "SubnetAvailabilityZone": {},
  "RouteTableId": {},
  "ViolatingRoutes": {},
  "IsRouteTableUsedInDifferentAZ": {},
  "CurrentFirewallSubnetRouteTable": {},
  "ExpectedFirewallEndpoint": {},
  "FirewallSubnetId": {},
  "ExpectedFirewallSubnetRoutes": {},
  "ActualFirewallSubnetRoutes": {},
  "InternetGatewayId": {},
  "CurrentInternetGatewayRouteTable": {},
  "ExpectedInternetGatewayRoutes": {},
  "ActualInternetGatewayRoutes": {},
  "VpcId": {}
}
```

Violation detail for the subnet for which internet traffic that hasn't been inspected.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubnetId|object|false|none|none|
|SubnetAvailabilityZone|object|false|none|none|
|RouteTableId|object|false|none|none|
|ViolatingRoutes|object|false|none|none|
|IsRouteTableUsedInDifferentAZ|object|false|none|none|
|CurrentFirewallSubnetRouteTable|object|false|none|none|
|ExpectedFirewallEndpoint|object|false|none|none|
|FirewallSubnetId|object|false|none|none|
|ExpectedFirewallSubnetRoutes|object|false|none|none|
|ActualFirewallSubnetRoutes|object|false|none|none|
|InternetGatewayId|object|false|none|none|
|CurrentInternetGatewayRouteTable|object|false|none|none|
|ExpectedInternetGatewayRoutes|object|false|none|none|
|ActualInternetGatewayRoutes|object|false|none|none|
|VpcId|object|false|none|none|

<h2 id="tocS_Route">Route</h2>
<!-- backwards compatibility -->
<a id="schemaroute"></a>
<a id="schema_Route"></a>
<a id="tocSroute"></a>
<a id="tocsroute"></a>

```json
{
  "DestinationType": {},
  "TargetType": {},
  "Destination": {},
  "Target": {}
}
```

Describes a route in a route table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DestinationType|object|false|none|none|
|TargetType|object|false|none|none|
|Destination|object|false|none|none|
|Target|object|false|none|none|

<h2 id="tocS_NetworkFirewallInvalidRouteConfigurationViolation">NetworkFirewallInvalidRouteConfigurationViolation</h2>
<!-- backwards compatibility -->
<a id="schemanetworkfirewallinvalidrouteconfigurationviolation"></a>
<a id="schema_NetworkFirewallInvalidRouteConfigurationViolation"></a>
<a id="tocSnetworkfirewallinvalidrouteconfigurationviolation"></a>
<a id="tocsnetworkfirewallinvalidrouteconfigurationviolation"></a>

```json
{
  "AffectedSubnets": {},
  "RouteTableId": {},
  "IsRouteTableUsedInDifferentAZ": {},
  "ViolatingRoute": {
    "DestinationType": {},
    "TargetType": {},
    "Destination": {},
    "Target": {}
  },
  "CurrentFirewallSubnetRouteTable": {},
  "ExpectedFirewallEndpoint": {},
  "ActualFirewallEndpoint": {},
  "ExpectedFirewallSubnetId": {},
  "ActualFirewallSubnetId": {},
  "ExpectedFirewallSubnetRoutes": {},
  "ActualFirewallSubnetRoutes": {},
  "InternetGatewayId": {},
  "CurrentInternetGatewayRouteTable": {},
  "ExpectedInternetGatewayRoutes": {},
  "ActualInternetGatewayRoutes": {},
  "VpcId": {}
}
```

Violation detail for the improperly configured subnet route. It's possible there is a missing route table route, or a configuration that causes traffic to cross an Availability Zone boundary.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AffectedSubnets|object|false|none|none|
|RouteTableId|object|false|none|none|
|IsRouteTableUsedInDifferentAZ|object|false|none|none|
|ViolatingRoute|object|false|none|none|
|CurrentFirewallSubnetRouteTable|object|false|none|none|
|ExpectedFirewallEndpoint|object|false|none|none|
|ActualFirewallEndpoint|object|false|none|none|
|ExpectedFirewallSubnetId|object|false|none|none|
|ActualFirewallSubnetId|object|false|none|none|
|ExpectedFirewallSubnetRoutes|object|false|none|none|
|ActualFirewallSubnetRoutes|object|false|none|none|
|InternetGatewayId|object|false|none|none|
|CurrentInternetGatewayRouteTable|object|false|none|none|
|ExpectedInternetGatewayRoutes|object|false|none|none|
|ActualInternetGatewayRoutes|object|false|none|none|
|VpcId|object|false|none|none|

<h2 id="tocS_NetworkFirewallMissingExpectedRTViolation">NetworkFirewallMissingExpectedRTViolation</h2>
<!-- backwards compatibility -->
<a id="schemanetworkfirewallmissingexpectedrtviolation"></a>
<a id="schema_NetworkFirewallMissingExpectedRTViolation"></a>
<a id="tocSnetworkfirewallmissingexpectedrtviolation"></a>
<a id="tocsnetworkfirewallmissingexpectedrtviolation"></a>

```json
{
  "ViolationTarget": {},
  "VPC": {},
  "AvailabilityZone": {},
  "CurrentRouteTable": {},
  "ExpectedRouteTable": {}
}
```

Violation detail for Network Firewall for a subnet that's not associated to the expected Firewall Manager managed route table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ViolationTarget|object|false|none|none|
|VPC|object|false|none|none|
|AvailabilityZone|object|false|none|none|
|CurrentRouteTable|object|false|none|none|
|ExpectedRouteTable|object|false|none|none|

<h2 id="tocS_NetworkFirewallMissingExpectedRoutesViolation">NetworkFirewallMissingExpectedRoutesViolation</h2>
<!-- backwards compatibility -->
<a id="schemanetworkfirewallmissingexpectedroutesviolation"></a>
<a id="schema_NetworkFirewallMissingExpectedRoutesViolation"></a>
<a id="tocSnetworkfirewallmissingexpectedroutesviolation"></a>
<a id="tocsnetworkfirewallmissingexpectedroutesviolation"></a>

```json
{
  "ViolationTarget": {},
  "ExpectedRoutes": {},
  "VpcId": {}
}
```

Violation detail for an expected route missing in Network Firewall.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ViolationTarget|object|false|none|none|
|ExpectedRoutes|object|false|none|none|
|VpcId|object|false|none|none|

<h2 id="tocS_TargetViolationReason">TargetViolationReason</h2>
<!-- backwards compatibility -->
<a id="schematargetviolationreason"></a>
<a id="schema_TargetViolationReason"></a>
<a id="tocStargetviolationreason"></a>
<a id="tocstargetviolationreason"></a>

```json
"string"
```

<h2 id="tocS_NetworkFirewallMissingFirewallViolation">NetworkFirewallMissingFirewallViolation</h2>
<!-- backwards compatibility -->
<a id="schemanetworkfirewallmissingfirewallviolation"></a>
<a id="schema_NetworkFirewallMissingFirewallViolation"></a>
<a id="tocSnetworkfirewallmissingfirewallviolation"></a>
<a id="tocsnetworkfirewallmissingfirewallviolation"></a>

```json
{
  "ViolationTarget": {},
  "VPC": {},
  "AvailabilityZone": {},
  "TargetViolationReason": {}
}
```

Violation detail for Network Firewall for a subnet that doesn't have a Firewall Manager managed firewall in its VPC.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ViolationTarget|object|false|none|none|
|VPC|object|false|none|none|
|AvailabilityZone|object|false|none|none|
|TargetViolationReason|object|false|none|none|

<h2 id="tocS_NetworkFirewallMissingSubnetViolation">NetworkFirewallMissingSubnetViolation</h2>
<!-- backwards compatibility -->
<a id="schemanetworkfirewallmissingsubnetviolation"></a>
<a id="schema_NetworkFirewallMissingSubnetViolation"></a>
<a id="tocSnetworkfirewallmissingsubnetviolation"></a>
<a id="tocsnetworkfirewallmissingsubnetviolation"></a>

```json
{
  "ViolationTarget": {},
  "VPC": {},
  "AvailabilityZone": {},
  "TargetViolationReason": {}
}
```

Violation detail for Network Firewall for an Availability Zone that's missing the expected Firewall Manager managed subnet.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ViolationTarget|object|false|none|none|
|VPC|object|false|none|none|
|AvailabilityZone|object|false|none|none|
|TargetViolationReason|object|false|none|none|

<h2 id="tocS_NetworkFirewallOverrideAction">NetworkFirewallOverrideAction</h2>
<!-- backwards compatibility -->
<a id="schemanetworkfirewalloverrideaction"></a>
<a id="schema_NetworkFirewallOverrideAction"></a>
<a id="tocSnetworkfirewalloverrideaction"></a>
<a id="tocsnetworkfirewalloverrideaction"></a>

```json
"DROP_TO_ALERT"
```

<h2 id="tocS_NetworkFirewallPolicy">NetworkFirewallPolicy</h2>
<!-- backwards compatibility -->
<a id="schemanetworkfirewallpolicy"></a>
<a id="schema_NetworkFirewallPolicy"></a>
<a id="tocSnetworkfirewallpolicy"></a>
<a id="tocsnetworkfirewallpolicy"></a>

```json
{
  "FirewallDeploymentModel": {}
}
```

Configures the firewall policy deployment model of Network Firewall. For information about Network Firewall deployment models, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/architectures.html">Network Firewall example architectures with routing</a> in the <i>Network Firewall Developer Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallDeploymentModel|object|false|none|none|

<h2 id="tocS_StatelessRuleGroupList">StatelessRuleGroupList</h2>
<!-- backwards compatibility -->
<a id="schemastatelessrulegrouplist"></a>
<a id="schema_StatelessRuleGroupList"></a>
<a id="tocSstatelessrulegrouplist"></a>
<a id="tocsstatelessrulegrouplist"></a>

```json
[
  {
    "RuleGroupName": {},
    "ResourceId": {},
    "Priority": {}
  }
]
```

<h2 id="tocS_StatefulRuleGroupList">StatefulRuleGroupList</h2>
<!-- backwards compatibility -->
<a id="schemastatefulrulegrouplist"></a>
<a id="schema_StatefulRuleGroupList"></a>
<a id="tocSstatefulrulegrouplist"></a>
<a id="tocsstatefulrulegrouplist"></a>

```json
[
  {
    "RuleGroupName": {},
    "ResourceId": {},
    "Priority": {},
    "Override": {
      "Action": {}
    }
  }
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
  "RuleOrder": {}
}
```

Configuration settings for the handling of the stateful rule groups in a Network Firewall firewall policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleOrder|object|false|none|none|

<h2 id="tocS_NetworkFirewallPolicyDescription">NetworkFirewallPolicyDescription</h2>
<!-- backwards compatibility -->
<a id="schemanetworkfirewallpolicydescription"></a>
<a id="schema_NetworkFirewallPolicyDescription"></a>
<a id="tocSnetworkfirewallpolicydescription"></a>
<a id="tocsnetworkfirewallpolicydescription"></a>

```json
{
  "StatelessRuleGroups": {},
  "StatelessDefaultActions": {},
  "StatelessFragmentDefaultActions": {},
  "StatelessCustomActions": {},
  "StatefulRuleGroups": {},
  "StatefulDefaultActions": {},
  "StatefulEngineOptions": {
    "RuleOrder": {}
  }
}
```

The definition of the Network Firewall firewall policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StatelessRuleGroups|object|false|none|none|
|StatelessDefaultActions|object|false|none|none|
|StatelessFragmentDefaultActions|object|false|none|none|
|StatelessCustomActions|object|false|none|none|
|StatefulRuleGroups|object|false|none|none|
|StatefulDefaultActions|object|false|none|none|
|StatefulEngineOptions|object|false|none|none|

<h2 id="tocS_NetworkFirewallPolicyModifiedViolation">NetworkFirewallPolicyModifiedViolation</h2>
<!-- backwards compatibility -->
<a id="schemanetworkfirewallpolicymodifiedviolation"></a>
<a id="schema_NetworkFirewallPolicyModifiedViolation"></a>
<a id="tocSnetworkfirewallpolicymodifiedviolation"></a>
<a id="tocsnetworkfirewallpolicymodifiedviolation"></a>

```json
{
  "ViolationTarget": {},
  "CurrentPolicyDescription": {
    "StatelessRuleGroups": {},
    "StatelessDefaultActions": {},
    "StatelessFragmentDefaultActions": {},
    "StatelessCustomActions": {},
    "StatefulRuleGroups": {},
    "StatefulDefaultActions": {},
    "StatefulEngineOptions": {
      "RuleOrder": {}
    }
  },
  "ExpectedPolicyDescription": {
    "StatelessRuleGroups": {},
    "StatelessDefaultActions": {},
    "StatelessFragmentDefaultActions": {},
    "StatelessCustomActions": {},
    "StatefulRuleGroups": {},
    "StatefulDefaultActions": {},
    "StatefulEngineOptions": {
      "RuleOrder": {}
    }
  }
}
```

Violation detail for Network Firewall for a firewall policy that has a different <a>NetworkFirewallPolicyDescription</a> than is required by the Firewall Manager policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ViolationTarget|object|false|none|none|
|CurrentPolicyDescription|object|false|none|none|
|ExpectedPolicyDescription|object|false|none|none|

<h2 id="tocS_NetworkFirewallResourceName">NetworkFirewallResourceName</h2>
<!-- backwards compatibility -->
<a id="schemanetworkfirewallresourcename"></a>
<a id="schema_NetworkFirewallResourceName"></a>
<a id="tocSnetworkfirewallresourcename"></a>
<a id="tocsnetworkfirewallresourcename"></a>

```json
"string"
```

<h2 id="tocS_NetworkFirewallStatefulRuleGroupOverride">NetworkFirewallStatefulRuleGroupOverride</h2>
<!-- backwards compatibility -->
<a id="schemanetworkfirewallstatefulrulegroupoverride"></a>
<a id="schema_NetworkFirewallStatefulRuleGroupOverride"></a>
<a id="tocSnetworkfirewallstatefulrulegroupoverride"></a>
<a id="tocsnetworkfirewallstatefulrulegroupoverride"></a>

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

<h2 id="tocS_NetworkFirewallUnexpectedFirewallRoutesViolation">NetworkFirewallUnexpectedFirewallRoutesViolation</h2>
<!-- backwards compatibility -->
<a id="schemanetworkfirewallunexpectedfirewallroutesviolation"></a>
<a id="schema_NetworkFirewallUnexpectedFirewallRoutesViolation"></a>
<a id="tocSnetworkfirewallunexpectedfirewallroutesviolation"></a>
<a id="tocsnetworkfirewallunexpectedfirewallroutesviolation"></a>

```json
{
  "FirewallSubnetId": {},
  "ViolatingRoutes": {},
  "RouteTableId": {},
  "FirewallEndpoint": {},
  "VpcId": {}
}
```

Violation detail for an unexpected route that's present in a route table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallSubnetId|object|false|none|none|
|ViolatingRoutes|object|false|none|none|
|RouteTableId|object|false|none|none|
|FirewallEndpoint|object|false|none|none|
|VpcId|object|false|none|none|

<h2 id="tocS_NetworkFirewallUnexpectedGatewayRoutesViolation">NetworkFirewallUnexpectedGatewayRoutesViolation</h2>
<!-- backwards compatibility -->
<a id="schemanetworkfirewallunexpectedgatewayroutesviolation"></a>
<a id="schema_NetworkFirewallUnexpectedGatewayRoutesViolation"></a>
<a id="tocSnetworkfirewallunexpectedgatewayroutesviolation"></a>
<a id="tocsnetworkfirewallunexpectedgatewayroutesviolation"></a>

```json
{
  "GatewayId": {},
  "ViolatingRoutes": {},
  "RouteTableId": {},
  "VpcId": {}
}
```

Violation detail for an unexpected gateway route that’s present in a route table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayId|object|false|none|none|
|ViolatingRoutes|object|false|none|none|
|RouteTableId|object|false|none|none|
|VpcId|object|false|none|none|

<h2 id="tocS_RemediationActionWithOrder">RemediationActionWithOrder</h2>
<!-- backwards compatibility -->
<a id="schemaremediationactionwithorder"></a>
<a id="schema_RemediationActionWithOrder"></a>
<a id="tocSremediationactionwithorder"></a>
<a id="tocsremediationactionwithorder"></a>

```json
{
  "RemediationAction": {
    "Description": {},
    "EC2CreateRouteAction": {
      "Description": {},
      "DestinationCidrBlock": {},
      "DestinationPrefixListId": {},
      "DestinationIpv6CidrBlock": {},
      "VpcEndpointId": {
        "ResourceId": {},
        "Description": {}
      },
      "GatewayId": {
        "ResourceId": {},
        "Description": {}
      },
      "RouteTableId": {
        "ResourceId": {},
        "Description": {}
      }
    },
    "EC2ReplaceRouteAction": {
      "Description": {},
      "DestinationCidrBlock": {},
      "DestinationPrefixListId": {},
      "DestinationIpv6CidrBlock": {},
      "GatewayId": {
        "ResourceId": {},
        "Description": {}
      },
      "RouteTableId": {
        "ResourceId": {},
        "Description": {}
      }
    },
    "EC2DeleteRouteAction": {
      "Description": {},
      "DestinationCidrBlock": {},
      "DestinationPrefixListId": {},
      "DestinationIpv6CidrBlock": {},
      "RouteTableId": {
        "ResourceId": {},
        "Description": {}
      }
    },
    "EC2CopyRouteTableAction": {
      "Description": {},
      "VpcId": {
        "ResourceId": {},
        "Description": {}
      },
      "RouteTableId": {
        "ResourceId": {},
        "Description": {}
      }
    },
    "EC2ReplaceRouteTableAssociationAction": {
      "Description": {},
      "AssociationId": {
        "ResourceId": {},
        "Description": {}
      },
      "RouteTableId": {
        "ResourceId": {},
        "Description": {}
      }
    },
    "EC2AssociateRouteTableAction": {
      "Description": {},
      "RouteTableId": {
        "ResourceId": {},
        "Description": {}
      },
      "SubnetId": {
        "ResourceId": {},
        "Description": {}
      },
      "GatewayId": {
        "ResourceId": {},
        "Description": {}
      }
    },
    "EC2CreateRouteTableAction": {
      "Description": {},
      "VpcId": {
        "ResourceId": {},
        "Description": {}
      }
    },
    "FMSPolicyUpdateFirewallCreationConfigAction": {
      "Description": {},
      "FirewallCreationConfig": {}
    }
  },
  "Order": {}
}
```

An ordered list of actions you can take to remediate a violation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RemediationAction|object|false|none|none|
|Order|object|false|none|none|

<h2 id="tocS_OrderedRemediationActions">OrderedRemediationActions</h2>
<!-- backwards compatibility -->
<a id="schemaorderedremediationactions"></a>
<a id="schema_OrderedRemediationActions"></a>
<a id="tocSorderedremediationactions"></a>
<a id="tocsorderedremediationactions"></a>

```json
[
  {
    "RemediationAction": {
      "Description": {},
      "EC2CreateRouteAction": {
        "Description": {},
        "DestinationCidrBlock": {},
        "DestinationPrefixListId": {},
        "DestinationIpv6CidrBlock": {},
        "VpcEndpointId": {
          "ResourceId": {},
          "Description": {}
        },
        "GatewayId": {
          "ResourceId": {},
          "Description": {}
        },
        "RouteTableId": {
          "ResourceId": {},
          "Description": {}
        }
      },
      "EC2ReplaceRouteAction": {
        "Description": {},
        "DestinationCidrBlock": {},
        "DestinationPrefixListId": {},
        "DestinationIpv6CidrBlock": {},
        "GatewayId": {
          "ResourceId": {},
          "Description": {}
        },
        "RouteTableId": {
          "ResourceId": {},
          "Description": {}
        }
      },
      "EC2DeleteRouteAction": {
        "Description": {},
        "DestinationCidrBlock": {},
        "DestinationPrefixListId": {},
        "DestinationIpv6CidrBlock": {},
        "RouteTableId": {
          "ResourceId": {},
          "Description": {}
        }
      },
      "EC2CopyRouteTableAction": {
        "Description": {},
        "VpcId": {
          "ResourceId": {},
          "Description": {}
        },
        "RouteTableId": {
          "ResourceId": {},
          "Description": {}
        }
      },
      "EC2ReplaceRouteTableAssociationAction": {
        "Description": {},
        "AssociationId": {
          "ResourceId": {},
          "Description": {}
        },
        "RouteTableId": {
          "ResourceId": {},
          "Description": {}
        }
      },
      "EC2AssociateRouteTableAction": {
        "Description": {},
        "RouteTableId": {
          "ResourceId": {},
          "Description": {}
        },
        "SubnetId": {
          "ResourceId": {},
          "Description": {}
        },
        "GatewayId": {
          "ResourceId": {},
          "Description": {}
        }
      },
      "EC2CreateRouteTableAction": {
        "Description": {},
        "VpcId": {
          "ResourceId": {},
          "Description": {}
        }
      },
      "FMSPolicyUpdateFirewallCreationConfigAction": {
        "Description": {},
        "FirewallCreationConfig": {}
      }
    },
    "Order": {}
  }
]
```

<h2 id="tocS_OrganizationalUnitId">OrganizationalUnitId</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationalunitid"></a>
<a id="schema_OrganizationalUnitId"></a>
<a id="tocSorganizationalunitid"></a>
<a id="tocsorganizationalunitid"></a>

```json
"stringstringstri"
```

<h2 id="tocS_OrganizationalUnitIdList">OrganizationalUnitIdList</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationalunitidlist"></a>
<a id="schema_OrganizationalUnitIdList"></a>
<a id="tocSorganizationalunitidlist"></a>
<a id="tocsorganizationalunitidlist"></a>

```json
[
  "stringstringstri"
]
```

<h2 id="tocS_ReferenceRule">ReferenceRule</h2>
<!-- backwards compatibility -->
<a id="schemareferencerule"></a>
<a id="schema_ReferenceRule"></a>
<a id="tocSreferencerule"></a>
<a id="tocsreferencerule"></a>

```json
"string"
```

<h2 id="tocS_TargetViolationReasons">TargetViolationReasons</h2>
<!-- backwards compatibility -->
<a id="schematargetviolationreasons"></a>
<a id="schema_TargetViolationReasons"></a>
<a id="tocStargetviolationreasons"></a>
<a id="tocstargetviolationreasons"></a>

```json
[
  "string"
]
```

<h2 id="tocS_PartialMatch">PartialMatch</h2>
<!-- backwards compatibility -->
<a id="schemapartialmatch"></a>
<a id="schema_PartialMatch"></a>
<a id="tocSpartialmatch"></a>
<a id="tocspartialmatch"></a>

```json
{
  "Reference": {},
  "TargetViolationReasons": {}
}
```

The reference rule that partially matches the <code>ViolationTarget</code> rule and violation reason.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Reference|object|false|none|none|
|TargetViolationReasons|object|false|none|none|

<h2 id="tocS_PolicyUpdateToken">PolicyUpdateToken</h2>
<!-- backwards compatibility -->
<a id="schemapolicyupdatetoken"></a>
<a id="schema_PolicyUpdateToken"></a>
<a id="tocSpolicyupdatetoken"></a>
<a id="tocspolicyupdatetoken"></a>

```json
"string"
```

<h2 id="tocS_SecurityServicePolicyData">SecurityServicePolicyData</h2>
<!-- backwards compatibility -->
<a id="schemasecurityservicepolicydata"></a>
<a id="schema_SecurityServicePolicyData"></a>
<a id="tocSsecurityservicepolicydata"></a>
<a id="tocssecurityservicepolicydata"></a>

```json
{
  "Type": {},
  "ManagedServiceData": {},
  "PolicyOption": {
    "NetworkFirewallPolicy": {
      "FirewallDeploymentModel": {}
    },
    "ThirdPartyFirewallPolicy": {
      "FirewallDeploymentModel": {}
    }
  }
}
```

Details about the security service that is being used to protect the resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|true|none|none|
|ManagedServiceData|object|false|none|none|
|PolicyOption|object|false|none|none|

<h2 id="tocS_ResourceTypeList">ResourceTypeList</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetypelist"></a>
<a id="schema_ResourceTypeList"></a>
<a id="tocSresourcetypelist"></a>
<a id="tocsresourcetypelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ResourceTags">ResourceTags</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetags"></a>
<a id="schema_ResourceTags"></a>
<a id="tocSresourcetags"></a>
<a id="tocsresourcetags"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_ResourceSetIds">ResourceSetIds</h2>
<!-- backwards compatibility -->
<a id="schemaresourcesetids"></a>
<a id="schema_ResourceSetIds"></a>
<a id="tocSresourcesetids"></a>
<a id="tocsresourcesetids"></a>

```json
[
  "stringstringstringstri"
]
```

<h2 id="tocS_ResourceDescription">ResourceDescription</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedescription"></a>
<a id="schema_ResourceDescription"></a>
<a id="tocSresourcedescription"></a>
<a id="tocsresourcedescription"></a>

```json
"string"
```

<h2 id="tocS_PolicyComplianceStatus">PolicyComplianceStatus</h2>
<!-- backwards compatibility -->
<a id="schemapolicycompliancestatus"></a>
<a id="schema_PolicyComplianceStatus"></a>
<a id="tocSpolicycompliancestatus"></a>
<a id="tocspolicycompliancestatus"></a>

```json
{
  "PolicyOwner": {},
  "PolicyId": {},
  "PolicyName": {},
  "MemberAccount": {},
  "EvaluationResults": {},
  "LastUpdated": {},
  "IssueInfoMap": {
    "property1": "string",
    "property2": "string"
  }
}
```

Indicates whether the account is compliant with the specified policy. An account is considered noncompliant if it includes resources that are not protected by the policy, for WAF and Shield Advanced policies, or that are noncompliant with the policy, for security group policies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyOwner|object|false|none|none|
|PolicyId|object|false|none|none|
|PolicyName|object|false|none|none|
|MemberAccount|object|false|none|none|
|EvaluationResults|object|false|none|none|
|LastUpdated|object|false|none|none|
|IssueInfoMap|object|false|none|none|

<h2 id="tocS_ThirdPartyFirewallPolicy">ThirdPartyFirewallPolicy</h2>
<!-- backwards compatibility -->
<a id="schemathirdpartyfirewallpolicy"></a>
<a id="schema_ThirdPartyFirewallPolicy"></a>
<a id="tocSthirdpartyfirewallpolicy"></a>
<a id="tocsthirdpartyfirewallpolicy"></a>

```json
{
  "FirewallDeploymentModel": {}
}
```

Configures the deployment model for the third-party firewall.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallDeploymentModel|object|false|none|none|

<h2 id="tocS_PolicyOption">PolicyOption</h2>
<!-- backwards compatibility -->
<a id="schemapolicyoption"></a>
<a id="schema_PolicyOption"></a>
<a id="tocSpolicyoption"></a>
<a id="tocspolicyoption"></a>

```json
{
  "NetworkFirewallPolicy": {
    "FirewallDeploymentModel": {}
  },
  "ThirdPartyFirewallPolicy": {
    "FirewallDeploymentModel": {}
  }
}
```

Contains the Network Firewall firewall policy options to configure the policy's deployment model and third-party firewall policy settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NetworkFirewallPolicy|object|false|none|none|
|ThirdPartyFirewallPolicy|object|false|none|none|

<h2 id="tocS_PolicySummary">PolicySummary</h2>
<!-- backwards compatibility -->
<a id="schemapolicysummary"></a>
<a id="schema_PolicySummary"></a>
<a id="tocSpolicysummary"></a>
<a id="tocspolicysummary"></a>

```json
{
  "PolicyArn": {},
  "PolicyId": {},
  "PolicyName": {},
  "ResourceType": {},
  "SecurityServiceType": {},
  "RemediationEnabled": {},
  "DeleteUnusedFMManagedResources": {},
  "PolicyStatus": {}
}
```

Details of the Firewall Manager policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyArn|object|false|none|none|
|PolicyId|object|false|none|none|
|PolicyName|object|false|none|none|
|ResourceType|object|false|none|none|
|SecurityServiceType|object|false|none|none|
|RemediationEnabled|object|false|none|none|
|DeleteUnusedFMManagedResources|object|false|none|none|
|PolicyStatus|object|false|none|none|

<h2 id="tocS_SecurityServiceTypeList">SecurityServiceTypeList</h2>
<!-- backwards compatibility -->
<a id="schemasecurityservicetypelist"></a>
<a id="schema_SecurityServiceTypeList"></a>
<a id="tocSsecurityservicetypelist"></a>
<a id="tocssecurityservicetypelist"></a>

```json
[
  "WAF"
]
```

<h2 id="tocS_PossibleRemediationAction">PossibleRemediationAction</h2>
<!-- backwards compatibility -->
<a id="schemapossibleremediationaction"></a>
<a id="schema_PossibleRemediationAction"></a>
<a id="tocSpossibleremediationaction"></a>
<a id="tocspossibleremediationaction"></a>

```json
{
  "Description": {},
  "OrderedRemediationActions": {},
  "IsDefaultAction": {}
}
```

A list of remediation actions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|OrderedRemediationActions|object|true|none|none|
|IsDefaultAction|object|false|none|none|

<h2 id="tocS_PossibleRemediationActionList">PossibleRemediationActionList</h2>
<!-- backwards compatibility -->
<a id="schemapossibleremediationactionlist"></a>
<a id="schema_PossibleRemediationActionList"></a>
<a id="tocSpossibleremediationactionlist"></a>
<a id="tocspossibleremediationactionlist"></a>

```json
[
  {
    "Description": {},
    "OrderedRemediationActions": {},
    "IsDefaultAction": {}
  }
]
```

<h2 id="tocS_PossibleRemediationActions">PossibleRemediationActions</h2>
<!-- backwards compatibility -->
<a id="schemapossibleremediationactions"></a>
<a id="schema_PossibleRemediationActions"></a>
<a id="tocSpossibleremediationactions"></a>
<a id="tocspossibleremediationactions"></a>

```json
{
  "Description": {},
  "Actions": {}
}
```

A list of possible remediation action lists. Each individual possible remediation action is a list of individual remediation actions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|Actions|object|false|none|none|

<h2 id="tocS_PreviousListVersion">PreviousListVersion</h2>
<!-- backwards compatibility -->
<a id="schemapreviouslistversion"></a>
<a id="schema_PreviousListVersion"></a>
<a id="tocSpreviouslistversion"></a>
<a id="tocspreviouslistversion"></a>

```json
"st"
```

<h2 id="tocS_ProtocolsList">ProtocolsList</h2>
<!-- backwards compatibility -->
<a id="schemaprotocolslist"></a>
<a id="schema_ProtocolsList"></a>
<a id="tocSprotocolslist"></a>
<a id="tocsprotocolslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_PreviousProtocolsList">PreviousProtocolsList</h2>
<!-- backwards compatibility -->
<a id="schemapreviousprotocolslist"></a>
<a id="schema_PreviousProtocolsList"></a>
<a id="tocSpreviousprotocolslist"></a>
<a id="tocspreviousprotocolslist"></a>

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
|**additionalProperties**|[ProtocolsList](#schemaprotocolslist)|false|none|none|

<h2 id="tocS_PriorityNumber">PriorityNumber</h2>
<!-- backwards compatibility -->
<a id="schemaprioritynumber"></a>
<a id="schema_PriorityNumber"></a>
<a id="tocSprioritynumber"></a>
<a id="tocsprioritynumber"></a>

```json
0
```

<h2 id="tocS_ProtocolsListDataSummary">ProtocolsListDataSummary</h2>
<!-- backwards compatibility -->
<a id="schemaprotocolslistdatasummary"></a>
<a id="schema_ProtocolsListDataSummary"></a>
<a id="tocSprotocolslistdatasummary"></a>
<a id="tocsprotocolslistdatasummary"></a>

```json
{
  "ListArn": {},
  "ListId": {},
  "ListName": {},
  "ProtocolsList": {}
}
```

Details of the Firewall Manager protocols list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ListArn|object|false|none|none|
|ListId|object|false|none|none|
|ListName|object|false|none|none|
|ProtocolsList|object|false|none|none|

<h2 id="tocS_RemediationAction">RemediationAction</h2>
<!-- backwards compatibility -->
<a id="schemaremediationaction"></a>
<a id="schema_RemediationAction"></a>
<a id="tocSremediationaction"></a>
<a id="tocsremediationaction"></a>

```json
{
  "Description": {},
  "EC2CreateRouteAction": {
    "Description": {},
    "DestinationCidrBlock": {},
    "DestinationPrefixListId": {},
    "DestinationIpv6CidrBlock": {},
    "VpcEndpointId": {
      "ResourceId": {},
      "Description": {}
    },
    "GatewayId": {
      "ResourceId": {},
      "Description": {}
    },
    "RouteTableId": {
      "ResourceId": {},
      "Description": {}
    }
  },
  "EC2ReplaceRouteAction": {
    "Description": {},
    "DestinationCidrBlock": {},
    "DestinationPrefixListId": {},
    "DestinationIpv6CidrBlock": {},
    "GatewayId": {
      "ResourceId": {},
      "Description": {}
    },
    "RouteTableId": {
      "ResourceId": {},
      "Description": {}
    }
  },
  "EC2DeleteRouteAction": {
    "Description": {},
    "DestinationCidrBlock": {},
    "DestinationPrefixListId": {},
    "DestinationIpv6CidrBlock": {},
    "RouteTableId": {
      "ResourceId": {},
      "Description": {}
    }
  },
  "EC2CopyRouteTableAction": {
    "Description": {},
    "VpcId": {
      "ResourceId": {},
      "Description": {}
    },
    "RouteTableId": {
      "ResourceId": {},
      "Description": {}
    }
  },
  "EC2ReplaceRouteTableAssociationAction": {
    "Description": {},
    "AssociationId": {
      "ResourceId": {},
      "Description": {}
    },
    "RouteTableId": {
      "ResourceId": {},
      "Description": {}
    }
  },
  "EC2AssociateRouteTableAction": {
    "Description": {},
    "RouteTableId": {
      "ResourceId": {},
      "Description": {}
    },
    "SubnetId": {
      "ResourceId": {},
      "Description": {}
    },
    "GatewayId": {
      "ResourceId": {},
      "Description": {}
    }
  },
  "EC2CreateRouteTableAction": {
    "Description": {},
    "VpcId": {
      "ResourceId": {},
      "Description": {}
    }
  },
  "FMSPolicyUpdateFirewallCreationConfigAction": {
    "Description": {},
    "FirewallCreationConfig": {}
  }
}
```

Information about an individual action you can take to remediate a violation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|EC2CreateRouteAction|object|false|none|none|
|EC2ReplaceRouteAction|object|false|none|none|
|EC2DeleteRouteAction|object|false|none|none|
|EC2CopyRouteTableAction|object|false|none|none|
|EC2ReplaceRouteTableAssociationAction|object|false|none|none|
|EC2AssociateRouteTableAction|object|false|none|none|
|EC2CreateRouteTableAction|object|false|none|none|
|FMSPolicyUpdateFirewallCreationConfigAction|object|false|none|none|

<h2 id="tocS_RemediationActionDescription">RemediationActionDescription</h2>
<!-- backwards compatibility -->
<a id="schemaremediationactiondescription"></a>
<a id="schema_RemediationActionDescription"></a>
<a id="tocSremediationactiondescription"></a>
<a id="tocsremediationactiondescription"></a>

```json
"string"
```

<h2 id="tocS_RemediationActionType">RemediationActionType</h2>
<!-- backwards compatibility -->
<a id="schemaremediationactiontype"></a>
<a id="schema_RemediationActionType"></a>
<a id="tocSremediationactiontype"></a>
<a id="tocsremediationactiontype"></a>

```json
"REMOVE"
```

<h2 id="tocS_Resource">Resource</h2>
<!-- backwards compatibility -->
<a id="schemaresource"></a>
<a id="schema_Resource"></a>
<a id="tocSresource"></a>
<a id="tocsresource"></a>

```json
{
  "URI": {},
  "AccountId": {}
}
```

Details of a resource that is associated to an Firewall Manager resource set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|URI|object|true|none|none|
|AccountId|object|false|none|none|

<h2 id="tocS_ResourceSetStatus">ResourceSetStatus</h2>
<!-- backwards compatibility -->
<a id="schemaresourcesetstatus"></a>
<a id="schema_ResourceSetStatus"></a>
<a id="tocSresourcesetstatus"></a>
<a id="tocsresourcesetstatus"></a>

```json
"ACTIVE"
```

<h2 id="tocS_ResourceSetSummary">ResourceSetSummary</h2>
<!-- backwards compatibility -->
<a id="schemaresourcesetsummary"></a>
<a id="schema_ResourceSetSummary"></a>
<a id="tocSresourcesetsummary"></a>
<a id="tocsresourcesetsummary"></a>

```json
{
  "Id": {},
  "Name": {},
  "Description": {},
  "LastUpdateTime": {},
  "ResourceSetStatus": {}
}
```

Summarizes the resource sets used in a policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|LastUpdateTime|object|false|none|none|
|ResourceSetStatus|object|false|none|none|

<h2 id="tocS_ResourceTagKey">ResourceTagKey</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetagkey"></a>
<a id="schema_ResourceTagKey"></a>
<a id="tocSresourcetagkey"></a>
<a id="tocsresourcetagkey"></a>

```json
"string"
```

<h2 id="tocS_ResourceTagValue">ResourceTagValue</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetagvalue"></a>
<a id="schema_ResourceTagValue"></a>
<a id="tocSresourcetagvalue"></a>
<a id="tocsresourcetagvalue"></a>

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
  "Key": {},
  "Value": {}
}
```

The resource tags that Firewall Manager uses to determine if a particular resource should be included or excluded from the Firewall Manager policy. Tags enable you to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. Each tag consists of a key and an optional value. Firewall Manager combines the tags with "AND" so that, if you add more than one tag to a policy scope, a resource must have all the specified tags to be included or excluded. For more information, see <a href="https://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/tag-editor.html">Working with Tag Editor</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|false|none|none|

<h2 id="tocS_RouteHasOutOfScopeEndpointViolation">RouteHasOutOfScopeEndpointViolation</h2>
<!-- backwards compatibility -->
<a id="schemaroutehasoutofscopeendpointviolation"></a>
<a id="schema_RouteHasOutOfScopeEndpointViolation"></a>
<a id="tocSroutehasoutofscopeendpointviolation"></a>
<a id="tocsroutehasoutofscopeendpointviolation"></a>

```json
{
  "SubnetId": {},
  "VpcId": {},
  "RouteTableId": {},
  "ViolatingRoutes": {},
  "SubnetAvailabilityZone": {},
  "SubnetAvailabilityZoneId": {},
  "CurrentFirewallSubnetRouteTable": {},
  "FirewallSubnetId": {},
  "FirewallSubnetRoutes": {},
  "InternetGatewayId": {},
  "CurrentInternetGatewayRouteTable": {},
  "InternetGatewayRoutes": {}
}
```

Contains details about the route endpoint that violates the policy scope.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubnetId|object|false|none|none|
|VpcId|object|false|none|none|
|RouteTableId|object|false|none|none|
|ViolatingRoutes|object|false|none|none|
|SubnetAvailabilityZone|object|false|none|none|
|SubnetAvailabilityZoneId|object|false|none|none|
|CurrentFirewallSubnetRouteTable|object|false|none|none|
|FirewallSubnetId|object|false|none|none|
|FirewallSubnetRoutes|object|false|none|none|
|InternetGatewayId|object|false|none|none|
|CurrentInternetGatewayRouteTable|object|false|none|none|
|InternetGatewayRoutes|object|false|none|none|

<h2 id="tocS_ThirdPartyFirewallMissingFirewallViolation">ThirdPartyFirewallMissingFirewallViolation</h2>
<!-- backwards compatibility -->
<a id="schemathirdpartyfirewallmissingfirewallviolation"></a>
<a id="schema_ThirdPartyFirewallMissingFirewallViolation"></a>
<a id="tocSthirdpartyfirewallmissingfirewallviolation"></a>
<a id="tocsthirdpartyfirewallmissingfirewallviolation"></a>

```json
{
  "ViolationTarget": {},
  "VPC": {},
  "AvailabilityZone": {},
  "TargetViolationReason": {}
}
```

The violation details about a third-party firewall's subnet that doesn't have a Firewall Manager managed firewall in its VPC.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ViolationTarget|object|false|none|none|
|VPC|object|false|none|none|
|AvailabilityZone|object|false|none|none|
|TargetViolationReason|object|false|none|none|

<h2 id="tocS_ThirdPartyFirewallMissingSubnetViolation">ThirdPartyFirewallMissingSubnetViolation</h2>
<!-- backwards compatibility -->
<a id="schemathirdpartyfirewallmissingsubnetviolation"></a>
<a id="schema_ThirdPartyFirewallMissingSubnetViolation"></a>
<a id="tocSthirdpartyfirewallmissingsubnetviolation"></a>
<a id="tocsthirdpartyfirewallmissingsubnetviolation"></a>

```json
{
  "ViolationTarget": {},
  "VPC": {},
  "AvailabilityZone": {},
  "TargetViolationReason": {}
}
```

The violation details for a third-party firewall for an Availability Zone that's missing the Firewall Manager managed subnet.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ViolationTarget|object|false|none|none|
|VPC|object|false|none|none|
|AvailabilityZone|object|false|none|none|
|TargetViolationReason|object|false|none|none|

<h2 id="tocS_ThirdPartyFirewallMissingExpectedRouteTableViolation">ThirdPartyFirewallMissingExpectedRouteTableViolation</h2>
<!-- backwards compatibility -->
<a id="schemathirdpartyfirewallmissingexpectedroutetableviolation"></a>
<a id="schema_ThirdPartyFirewallMissingExpectedRouteTableViolation"></a>
<a id="tocSthirdpartyfirewallmissingexpectedroutetableviolation"></a>
<a id="tocsthirdpartyfirewallmissingexpectedroutetableviolation"></a>

```json
{
  "ViolationTarget": {},
  "VPC": {},
  "AvailabilityZone": {},
  "CurrentRouteTable": {},
  "ExpectedRouteTable": {}
}
```

The violation details for a third-party firewall that's not associated with an Firewall Manager managed route table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ViolationTarget|object|false|none|none|
|VPC|object|false|none|none|
|AvailabilityZone|object|false|none|none|
|CurrentRouteTable|object|false|none|none|
|ExpectedRouteTable|object|false|none|none|

<h2 id="tocS_ResourceViolation">ResourceViolation</h2>
<!-- backwards compatibility -->
<a id="schemaresourceviolation"></a>
<a id="schema_ResourceViolation"></a>
<a id="tocSresourceviolation"></a>
<a id="tocsresourceviolation"></a>

```json
{
  "AwsVPCSecurityGroupViolation": {
    "ViolationTarget": {},
    "ViolationTargetDescription": {},
    "PartialMatches": {},
    "PossibleSecurityGroupRemediationActions": {}
  },
  "AwsEc2NetworkInterfaceViolation": {
    "ViolationTarget": {},
    "ViolatingSecurityGroups": {}
  },
  "AwsEc2InstanceViolation": {
    "ViolationTarget": {},
    "AwsEc2NetworkInterfaceViolations": {}
  },
  "NetworkFirewallMissingFirewallViolation": {
    "ViolationTarget": {},
    "VPC": {},
    "AvailabilityZone": {},
    "TargetViolationReason": {}
  },
  "NetworkFirewallMissingSubnetViolation": {
    "ViolationTarget": {},
    "VPC": {},
    "AvailabilityZone": {},
    "TargetViolationReason": {}
  },
  "NetworkFirewallMissingExpectedRTViolation": {
    "ViolationTarget": {},
    "VPC": {},
    "AvailabilityZone": {},
    "CurrentRouteTable": {},
    "ExpectedRouteTable": {}
  },
  "NetworkFirewallPolicyModifiedViolation": {
    "ViolationTarget": {},
    "CurrentPolicyDescription": {
      "StatelessRuleGroups": {},
      "StatelessDefaultActions": {},
      "StatelessFragmentDefaultActions": {},
      "StatelessCustomActions": {},
      "StatefulRuleGroups": {},
      "StatefulDefaultActions": {},
      "StatefulEngineOptions": {
        "RuleOrder": {}
      }
    },
    "ExpectedPolicyDescription": {
      "StatelessRuleGroups": {},
      "StatelessDefaultActions": {},
      "StatelessFragmentDefaultActions": {},
      "StatelessCustomActions": {},
      "StatefulRuleGroups": {},
      "StatefulDefaultActions": {},
      "StatefulEngineOptions": {
        "RuleOrder": {}
      }
    }
  },
  "NetworkFirewallInternetTrafficNotInspectedViolation": {
    "SubnetId": {},
    "SubnetAvailabilityZone": {},
    "RouteTableId": {},
    "ViolatingRoutes": {},
    "IsRouteTableUsedInDifferentAZ": {},
    "CurrentFirewallSubnetRouteTable": {},
    "ExpectedFirewallEndpoint": {},
    "FirewallSubnetId": {},
    "ExpectedFirewallSubnetRoutes": {},
    "ActualFirewallSubnetRoutes": {},
    "InternetGatewayId": {},
    "CurrentInternetGatewayRouteTable": {},
    "ExpectedInternetGatewayRoutes": {},
    "ActualInternetGatewayRoutes": {},
    "VpcId": {}
  },
  "NetworkFirewallInvalidRouteConfigurationViolation": {
    "AffectedSubnets": {},
    "RouteTableId": {},
    "IsRouteTableUsedInDifferentAZ": {},
    "ViolatingRoute": {
      "DestinationType": {},
      "TargetType": {},
      "Destination": {},
      "Target": {}
    },
    "CurrentFirewallSubnetRouteTable": {},
    "ExpectedFirewallEndpoint": {},
    "ActualFirewallEndpoint": {},
    "ExpectedFirewallSubnetId": {},
    "ActualFirewallSubnetId": {},
    "ExpectedFirewallSubnetRoutes": {},
    "ActualFirewallSubnetRoutes": {},
    "InternetGatewayId": {},
    "CurrentInternetGatewayRouteTable": {},
    "ExpectedInternetGatewayRoutes": {},
    "ActualInternetGatewayRoutes": {},
    "VpcId": {}
  },
  "NetworkFirewallBlackHoleRouteDetectedViolation": {
    "ViolationTarget": {},
    "RouteTableId": {},
    "VpcId": {},
    "ViolatingRoutes": {}
  },
  "NetworkFirewallUnexpectedFirewallRoutesViolation": {
    "FirewallSubnetId": {},
    "ViolatingRoutes": {},
    "RouteTableId": {},
    "FirewallEndpoint": {},
    "VpcId": {}
  },
  "NetworkFirewallUnexpectedGatewayRoutesViolation": {
    "GatewayId": {},
    "ViolatingRoutes": {},
    "RouteTableId": {},
    "VpcId": {}
  },
  "NetworkFirewallMissingExpectedRoutesViolation": {
    "ViolationTarget": {},
    "ExpectedRoutes": {},
    "VpcId": {}
  },
  "DnsRuleGroupPriorityConflictViolation": {
    "ViolationTarget": {},
    "ViolationTargetDescription": {},
    "ConflictingPriority": {},
    "ConflictingPolicyId": {},
    "UnavailablePriorities": {}
  },
  "DnsDuplicateRuleGroupViolation": {
    "ViolationTarget": {},
    "ViolationTargetDescription": {}
  },
  "DnsRuleGroupLimitExceededViolation": {
    "ViolationTarget": {},
    "ViolationTargetDescription": {},
    "NumberOfRuleGroupsAlreadyAssociated": {}
  },
  "PossibleRemediationActions": {
    "Description": {},
    "Actions": {}
  },
  "FirewallSubnetIsOutOfScopeViolation": {
    "FirewallSubnetId": {},
    "VpcId": {},
    "SubnetAvailabilityZone": {},
    "SubnetAvailabilityZoneId": {},
    "VpcEndpointId": {}
  },
  "RouteHasOutOfScopeEndpointViolation": {
    "SubnetId": {},
    "VpcId": {},
    "RouteTableId": {},
    "ViolatingRoutes": {},
    "SubnetAvailabilityZone": {},
    "SubnetAvailabilityZoneId": {},
    "CurrentFirewallSubnetRouteTable": {},
    "FirewallSubnetId": {},
    "FirewallSubnetRoutes": {},
    "InternetGatewayId": {},
    "CurrentInternetGatewayRouteTable": {},
    "InternetGatewayRoutes": {}
  },
  "ThirdPartyFirewallMissingFirewallViolation": {
    "ViolationTarget": {},
    "VPC": {},
    "AvailabilityZone": {},
    "TargetViolationReason": {}
  },
  "ThirdPartyFirewallMissingSubnetViolation": {
    "ViolationTarget": {},
    "VPC": {},
    "AvailabilityZone": {},
    "TargetViolationReason": {}
  },
  "ThirdPartyFirewallMissingExpectedRouteTableViolation": {
    "ViolationTarget": {},
    "VPC": {},
    "AvailabilityZone": {},
    "CurrentRouteTable": {},
    "ExpectedRouteTable": {}
  },
  "FirewallSubnetMissingVPCEndpointViolation": {
    "FirewallSubnetId": {},
    "VpcId": {},
    "SubnetAvailabilityZone": {},
    "SubnetAvailabilityZoneId": {}
  }
}
```

Violation detail based on resource type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AwsVPCSecurityGroupViolation|object|false|none|none|
|AwsEc2NetworkInterfaceViolation|object|false|none|none|
|AwsEc2InstanceViolation|object|false|none|none|
|NetworkFirewallMissingFirewallViolation|object|false|none|none|
|NetworkFirewallMissingSubnetViolation|object|false|none|none|
|NetworkFirewallMissingExpectedRTViolation|object|false|none|none|
|NetworkFirewallPolicyModifiedViolation|object|false|none|none|
|NetworkFirewallInternetTrafficNotInspectedViolation|object|false|none|none|
|NetworkFirewallInvalidRouteConfigurationViolation|object|false|none|none|
|NetworkFirewallBlackHoleRouteDetectedViolation|[NetworkFirewallBlackHoleRouteDetectedViolation](#schemanetworkfirewallblackholeroutedetectedviolation)|false|none|Violation detail for an internet gateway route with an inactive state in the customer subnet route table or Network Firewall subnet route table.|
|NetworkFirewallUnexpectedFirewallRoutesViolation|object|false|none|none|
|NetworkFirewallUnexpectedGatewayRoutesViolation|object|false|none|none|
|NetworkFirewallMissingExpectedRoutesViolation|object|false|none|none|
|DnsRuleGroupPriorityConflictViolation|object|false|none|none|
|DnsDuplicateRuleGroupViolation|object|false|none|none|
|DnsRuleGroupLimitExceededViolation|object|false|none|none|
|PossibleRemediationActions|object|false|none|none|
|FirewallSubnetIsOutOfScopeViolation|object|false|none|none|
|RouteHasOutOfScopeEndpointViolation|object|false|none|none|
|ThirdPartyFirewallMissingFirewallViolation|object|false|none|none|
|ThirdPartyFirewallMissingSubnetViolation|object|false|none|none|
|ThirdPartyFirewallMissingExpectedRouteTableViolation|object|false|none|none|
|FirewallSubnetMissingVPCEndpointViolation|object|false|none|none|

<h2 id="tocS_ResourceViolations">ResourceViolations</h2>
<!-- backwards compatibility -->
<a id="schemaresourceviolations"></a>
<a id="schema_ResourceViolations"></a>
<a id="tocSresourceviolations"></a>
<a id="tocsresourceviolations"></a>

```json
[
  {
    "AwsVPCSecurityGroupViolation": {
      "ViolationTarget": {},
      "ViolationTargetDescription": {},
      "PartialMatches": {},
      "PossibleSecurityGroupRemediationActions": {}
    },
    "AwsEc2NetworkInterfaceViolation": {
      "ViolationTarget": {},
      "ViolatingSecurityGroups": {}
    },
    "AwsEc2InstanceViolation": {
      "ViolationTarget": {},
      "AwsEc2NetworkInterfaceViolations": {}
    },
    "NetworkFirewallMissingFirewallViolation": {
      "ViolationTarget": {},
      "VPC": {},
      "AvailabilityZone": {},
      "TargetViolationReason": {}
    },
    "NetworkFirewallMissingSubnetViolation": {
      "ViolationTarget": {},
      "VPC": {},
      "AvailabilityZone": {},
      "TargetViolationReason": {}
    },
    "NetworkFirewallMissingExpectedRTViolation": {
      "ViolationTarget": {},
      "VPC": {},
      "AvailabilityZone": {},
      "CurrentRouteTable": {},
      "ExpectedRouteTable": {}
    },
    "NetworkFirewallPolicyModifiedViolation": {
      "ViolationTarget": {},
      "CurrentPolicyDescription": {
        "StatelessRuleGroups": {},
        "StatelessDefaultActions": {},
        "StatelessFragmentDefaultActions": {},
        "StatelessCustomActions": {},
        "StatefulRuleGroups": {},
        "StatefulDefaultActions": {},
        "StatefulEngineOptions": {
          "RuleOrder": {}
        }
      },
      "ExpectedPolicyDescription": {
        "StatelessRuleGroups": {},
        "StatelessDefaultActions": {},
        "StatelessFragmentDefaultActions": {},
        "StatelessCustomActions": {},
        "StatefulRuleGroups": {},
        "StatefulDefaultActions": {},
        "StatefulEngineOptions": {
          "RuleOrder": {}
        }
      }
    },
    "NetworkFirewallInternetTrafficNotInspectedViolation": {
      "SubnetId": {},
      "SubnetAvailabilityZone": {},
      "RouteTableId": {},
      "ViolatingRoutes": {},
      "IsRouteTableUsedInDifferentAZ": {},
      "CurrentFirewallSubnetRouteTable": {},
      "ExpectedFirewallEndpoint": {},
      "FirewallSubnetId": {},
      "ExpectedFirewallSubnetRoutes": {},
      "ActualFirewallSubnetRoutes": {},
      "InternetGatewayId": {},
      "CurrentInternetGatewayRouteTable": {},
      "ExpectedInternetGatewayRoutes": {},
      "ActualInternetGatewayRoutes": {},
      "VpcId": {}
    },
    "NetworkFirewallInvalidRouteConfigurationViolation": {
      "AffectedSubnets": {},
      "RouteTableId": {},
      "IsRouteTableUsedInDifferentAZ": {},
      "ViolatingRoute": {
        "DestinationType": {},
        "TargetType": {},
        "Destination": {},
        "Target": {}
      },
      "CurrentFirewallSubnetRouteTable": {},
      "ExpectedFirewallEndpoint": {},
      "ActualFirewallEndpoint": {},
      "ExpectedFirewallSubnetId": {},
      "ActualFirewallSubnetId": {},
      "ExpectedFirewallSubnetRoutes": {},
      "ActualFirewallSubnetRoutes": {},
      "InternetGatewayId": {},
      "CurrentInternetGatewayRouteTable": {},
      "ExpectedInternetGatewayRoutes": {},
      "ActualInternetGatewayRoutes": {},
      "VpcId": {}
    },
    "NetworkFirewallBlackHoleRouteDetectedViolation": {
      "ViolationTarget": {},
      "RouteTableId": {},
      "VpcId": {},
      "ViolatingRoutes": {}
    },
    "NetworkFirewallUnexpectedFirewallRoutesViolation": {
      "FirewallSubnetId": {},
      "ViolatingRoutes": {},
      "RouteTableId": {},
      "FirewallEndpoint": {},
      "VpcId": {}
    },
    "NetworkFirewallUnexpectedGatewayRoutesViolation": {
      "GatewayId": {},
      "ViolatingRoutes": {},
      "RouteTableId": {},
      "VpcId": {}
    },
    "NetworkFirewallMissingExpectedRoutesViolation": {
      "ViolationTarget": {},
      "ExpectedRoutes": {},
      "VpcId": {}
    },
    "DnsRuleGroupPriorityConflictViolation": {
      "ViolationTarget": {},
      "ViolationTargetDescription": {},
      "ConflictingPriority": {},
      "ConflictingPolicyId": {},
      "UnavailablePriorities": {}
    },
    "DnsDuplicateRuleGroupViolation": {
      "ViolationTarget": {},
      "ViolationTargetDescription": {}
    },
    "DnsRuleGroupLimitExceededViolation": {
      "ViolationTarget": {},
      "ViolationTargetDescription": {},
      "NumberOfRuleGroupsAlreadyAssociated": {}
    },
    "PossibleRemediationActions": {
      "Description": {},
      "Actions": {}
    },
    "FirewallSubnetIsOutOfScopeViolation": {
      "FirewallSubnetId": {},
      "VpcId": {},
      "SubnetAvailabilityZone": {},
      "SubnetAvailabilityZoneId": {},
      "VpcEndpointId": {}
    },
    "RouteHasOutOfScopeEndpointViolation": {
      "SubnetId": {},
      "VpcId": {},
      "RouteTableId": {},
      "ViolatingRoutes": {},
      "SubnetAvailabilityZone": {},
      "SubnetAvailabilityZoneId": {},
      "CurrentFirewallSubnetRouteTable": {},
      "FirewallSubnetId": {},
      "FirewallSubnetRoutes": {},
      "InternetGatewayId": {},
      "CurrentInternetGatewayRouteTable": {},
      "InternetGatewayRoutes": {}
    },
    "ThirdPartyFirewallMissingFirewallViolation": {
      "ViolationTarget": {},
      "VPC": {},
      "AvailabilityZone": {},
      "TargetViolationReason": {}
    },
    "ThirdPartyFirewallMissingSubnetViolation": {
      "ViolationTarget": {},
      "VPC": {},
      "AvailabilityZone": {},
      "TargetViolationReason": {}
    },
    "ThirdPartyFirewallMissingExpectedRouteTableViolation": {
      "ViolationTarget": {},
      "VPC": {},
      "AvailabilityZone": {},
      "CurrentRouteTable": {},
      "ExpectedRouteTable": {}
    },
    "FirewallSubnetMissingVPCEndpointViolation": {
      "FirewallSubnetId": {},
      "VpcId": {},
      "SubnetAvailabilityZone": {},
      "SubnetAvailabilityZoneId": {}
    }
  }
]
```

<h2 id="tocS_TargetType">TargetType</h2>
<!-- backwards compatibility -->
<a id="schematargettype"></a>
<a id="schema_TargetType"></a>
<a id="tocStargettype"></a>
<a id="tocstargettype"></a>

```json
"GATEWAY"
```

<h2 id="tocS_RuleOrder">RuleOrder</h2>
<!-- backwards compatibility -->
<a id="schemaruleorder"></a>
<a id="schema_RuleOrder"></a>
<a id="tocSruleorder"></a>
<a id="tocsruleorder"></a>

```json
"STRICT_ORDER"
```

<h2 id="tocS_SecurityGroupRuleDescription">SecurityGroupRuleDescription</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroupruledescription"></a>
<a id="schema_SecurityGroupRuleDescription"></a>
<a id="tocSsecuritygroupruledescription"></a>
<a id="tocssecuritygroupruledescription"></a>

```json
{
  "IPV4Range": {},
  "IPV6Range": {},
  "PrefixListId": {},
  "Protocol": {},
  "FromPort": {},
  "ToPort": {}
}
```

Describes a set of permissions for a security group rule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IPV4Range|object|false|none|none|
|IPV6Range|object|false|none|none|
|PrefixListId|object|false|none|none|
|Protocol|object|false|none|none|
|FromPort|object|false|none|none|
|ToPort|object|false|none|none|

<h2 id="tocS_SecurityGroupRemediationAction">SecurityGroupRemediationAction</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroupremediationaction"></a>
<a id="schema_SecurityGroupRemediationAction"></a>
<a id="tocSsecuritygroupremediationaction"></a>
<a id="tocssecuritygroupremediationaction"></a>

```json
{
  "RemediationActionType": {},
  "Description": {},
  "RemediationResult": {
    "IPV4Range": {},
    "IPV6Range": {},
    "PrefixListId": {},
    "Protocol": {},
    "FromPort": {},
    "ToPort": {}
  },
  "IsDefaultAction": {}
}
```

Remediation option for the rule specified in the <code>ViolationTarget</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RemediationActionType|object|false|none|none|
|Description|object|false|none|none|
|RemediationResult|object|false|none|none|
|IsDefaultAction|object|false|none|none|

<h2 id="tocS_StatefulRuleGroup">StatefulRuleGroup</h2>
<!-- backwards compatibility -->
<a id="schemastatefulrulegroup"></a>
<a id="schema_StatefulRuleGroup"></a>
<a id="tocSstatefulrulegroup"></a>
<a id="tocsstatefulrulegroup"></a>

```json
{
  "RuleGroupName": {},
  "ResourceId": {},
  "Priority": {},
  "Override": {
    "Action": {}
  }
}
```

Network Firewall stateful rule group, used in a <a>NetworkFirewallPolicyDescription</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleGroupName|object|false|none|none|
|ResourceId|object|false|none|none|
|Priority|object|false|none|none|
|Override|object|false|none|none|

<h2 id="tocS_StatelessRuleGroupPriority">StatelessRuleGroupPriority</h2>
<!-- backwards compatibility -->
<a id="schemastatelessrulegrouppriority"></a>
<a id="schema_StatelessRuleGroupPriority"></a>
<a id="tocSstatelessrulegrouppriority"></a>
<a id="tocsstatelessrulegrouppriority"></a>

```json
1
```

<h2 id="tocS_StatelessRuleGroup">StatelessRuleGroup</h2>
<!-- backwards compatibility -->
<a id="schemastatelessrulegroup"></a>
<a id="schema_StatelessRuleGroup"></a>
<a id="tocSstatelessrulegroup"></a>
<a id="tocsstatelessrulegroup"></a>

```json
{
  "RuleGroupName": {},
  "ResourceId": {},
  "Priority": {}
}
```

Network Firewall stateless rule group, used in a <a>NetworkFirewallPolicyDescription</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleGroupName|object|false|none|none|
|ResourceId|object|false|none|none|
|Priority|object|false|none|none|

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

A collection of key:value pairs associated with an Amazon Web Services resource. The key:value pair can be anything you define. Typically, the tag key represents a category (such as "environment") and the tag value represents a specific value within that category (such as "test," "development," or "production"). You can add up to 50 tags to each Amazon Web Services resource.

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

<h2 id="tocS_ThirdPartyFirewallFirewallPolicy">ThirdPartyFirewallFirewallPolicy</h2>
<!-- backwards compatibility -->
<a id="schemathirdpartyfirewallfirewallpolicy"></a>
<a id="schema_ThirdPartyFirewallFirewallPolicy"></a>
<a id="tocSthirdpartyfirewallfirewallpolicy"></a>
<a id="tocsthirdpartyfirewallfirewallpolicy"></a>

```json
{
  "FirewallPolicyId": {},
  "FirewallPolicyName": {}
}
```

Configures the third-party firewall's firewall policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirewallPolicyId|object|false|none|none|
|FirewallPolicyName|object|false|none|none|
