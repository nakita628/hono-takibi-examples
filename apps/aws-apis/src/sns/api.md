<h1 id="amazon-simple-notification-service">Amazon Simple Notification Service v2010-03-31</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Amazon Simple Notification Service</fullname> <p>Amazon Simple Notification Service (Amazon SNS) is a web service that enables you to build distributed web-enabled applications. Applications can use Amazon SNS to easily push real-time notification messages to interested subscribers over multiple delivery protocols. For more information about this product see the <a href="http://aws.amazon.com/sns/">Amazon SNS product page</a>. For detailed information about Amazon SNS features and their associated API calls, see the <a href="https://docs.aws.amazon.com/sns/latest/dg/">Amazon SNS Developer Guide</a>. </p> <p>For information on the permissions you need to use this API, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-authentication-and-access-control.html">Identity and access management in Amazon SNS</a> in the <i>Amazon SNS Developer Guide.</i> </p> <p>We also provide SDKs that enable you to access Amazon SNS from your preferred programming language. The SDKs contain functionality that automatically takes care of tasks such as: cryptographically signing your service requests, retrying requests, and handling error responses. For a list of available SDKs, go to <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>. </p>

Base URLs:

* <a href="http://sns.us-east-1.amazonaws.com">http://sns.us-east-1.amazonaws.com</a> - The Amazon SNS multi-region endpoint

* <a href="https://sns.us-east-1.amazonaws.com">https://sns.us-east-1.amazonaws.com</a> - The Amazon SNS multi-region endpoint

* <a href="http://sns.cn-north-1.amazonaws.com.cn">http://sns.cn-north-1.amazonaws.com.cn</a> - The Amazon SNS endpoint for China (Beijing) and China (Ningxia)

* <a href="https://sns.cn-north-1.amazonaws.com.cn">https://sns.cn-north-1.amazonaws.com.cn</a> - The Amazon SNS endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/sns/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-simple-notification-service-default">Default</h1>

## GET_AddPermission

<a id="opIdGET_AddPermission"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=AddPermission?TopicArn=string&Label=string&AWSAccountId=string&ActionName=string&Action=AddPermission&Version=2010-03-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=AddPermission`

<p>Adds a statement to a topic's access control policy, granting access for the specified Amazon Web Services accounts to the specified actions.</p> <note> <p>To remove the ability to change topic permissions, you must deny permissions to the <code>AddPermission</code>, <code>RemovePermission</code>, and <code>SetTopicAttributes</code> actions in your IAM policy.</p> </note>

<h3 id="getaddpermission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TopicArn|query|string|true|The ARN of the topic whose access control policy you wish to modify.|
|Label|query|string|true|A unique identifier for the new policy statement.|
|AWSAccountId|query|[[delegate](#schemadelegate)]|true|The Amazon Web Services account IDs of the users (principals) who will be given access to the specified actions. The users must have Amazon Web Services account, but do not need to be signed up for this service.|
|ActionName|query|[[action](#schemaaction)]|true|<p>The action you want to allow for the specified principal(s).</p> <p>Valid values: Any Amazon SNS action name, for example <code>Publish</code>.</p>|
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
|Action|AddPermission|
|Version|2010-03-31|

<h3 id="getaddpermission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_AddPermission

<a id="opIdPOST_AddPermission"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=AddPermission?Action=AddPermission&Version=2010-03-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"TopicArn":{},"Label":{},"AWSAccountId":{},"ActionName":{}}'
```

`POST /#Action=AddPermission`

<p>Adds a statement to a topic's access control policy, granting access for the specified Amazon Web Services accounts to the specified actions.</p> <note> <p>To remove the ability to change topic permissions, you must deny permissions to the <code>AddPermission</code>, <code>RemovePermission</code>, and <code>SetTopicAttributes</code> actions in your IAM policy.</p> </note>

> Body parameter

```json
{
  "TopicArn": {},
  "Label": {},
  "AWSAccountId": {},
  "ActionName": {}
}
```

<h3 id="postaddpermission-parameters">Parameters</h3>

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
|body|body|[AddPermissionInput](#schemaaddpermissioninput)|false|none|
|» TopicArn|body|object|true|none|
|» Label|body|object|true|none|
|» AWSAccountId|body|object|true|none|
|» ActionName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|AddPermission|
|Version|2010-03-31|

<h3 id="postaddpermission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CheckIfPhoneNumberIsOptedOut

<a id="opIdGET_CheckIfPhoneNumberIsOptedOut"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=CheckIfPhoneNumberIsOptedOut?phoneNumber=string&Action=CheckIfPhoneNumberIsOptedOut&Version=2010-03-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CheckIfPhoneNumberIsOptedOut`

<p>Accepts a phone number and indicates whether the phone holder has opted out of receiving SMS messages from your Amazon Web Services account. You cannot send SMS messages to a number that is opted out.</p> <p>To resume sending messages, you can opt in the number by using the <code>OptInPhoneNumber</code> action.</p>

<h3 id="getcheckifphonenumberisoptedout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|phoneNumber|query|string|true|The phone number for which you want to check the opt out status.|
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
|Action|CheckIfPhoneNumberIsOptedOut|
|Version|2010-03-31|

<h3 id="getcheckifphonenumberisoptedout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CheckIfPhoneNumberIsOptedOutResponse](#schemacheckifphonenumberisoptedoutresponse)|
|480|480|ThrottledException|[ThrottledException](#schemathrottledexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CheckIfPhoneNumberIsOptedOut

<a id="opIdPOST_CheckIfPhoneNumberIsOptedOut"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=CheckIfPhoneNumberIsOptedOut?Action=CheckIfPhoneNumberIsOptedOut&Version=2010-03-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"phoneNumber":{}}'
```

`POST /#Action=CheckIfPhoneNumberIsOptedOut`

<p>Accepts a phone number and indicates whether the phone holder has opted out of receiving SMS messages from your Amazon Web Services account. You cannot send SMS messages to a number that is opted out.</p> <p>To resume sending messages, you can opt in the number by using the <code>OptInPhoneNumber</code> action.</p>

> Body parameter

```json
{
  "phoneNumber": {}
}
```

<h3 id="postcheckifphonenumberisoptedout-parameters">Parameters</h3>

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
|body|body|[CheckIfPhoneNumberIsOptedOutInput](#schemacheckifphonenumberisoptedoutinput)|false|none|
|» phoneNumber|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CheckIfPhoneNumberIsOptedOut|
|Version|2010-03-31|

<h3 id="postcheckifphonenumberisoptedout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CheckIfPhoneNumberIsOptedOutResponse](#schemacheckifphonenumberisoptedoutresponse)|
|480|480|ThrottledException|[ThrottledException](#schemathrottledexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ConfirmSubscription

<a id="opIdGET_ConfirmSubscription"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=ConfirmSubscription?TopicArn=string&Token=string&Action=ConfirmSubscription&Version=2010-03-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ConfirmSubscription`

Verifies an endpoint owner's intent to receive messages by validating the token sent to the endpoint by an earlier <code>Subscribe</code> action. If the token is valid, the action creates a new subscription and returns its Amazon Resource Name (ARN). This call requires an AWS signature only when the <code>AuthenticateOnUnsubscribe</code> flag is set to "true".

<h3 id="getconfirmsubscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TopicArn|query|string|true|The ARN of the topic for which you wish to confirm a subscription.|
|Token|query|string|true|Short-lived token sent to an endpoint during the <code>Subscribe</code> action.|
|AuthenticateOnUnsubscribe|query|string|false|Disallows unauthenticated unsubscribes of the subscription. If the value of this parameter is <code>true</code> and the request has an Amazon Web Services signature, then only the topic owner and the subscription owner can unsubscribe the endpoint. The unsubscribe action requires Amazon Web Services authentication. |
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
|Action|ConfirmSubscription|
|Version|2010-03-31|

<h3 id="getconfirmsubscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ConfirmSubscriptionResponse](#schemaconfirmsubscriptionresponse)|
|480|480|SubscriptionLimitExceededException|[SubscriptionLimitExceededException](#schemasubscriptionlimitexceededexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|484|484|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|485|485|FilterPolicyLimitExceededException|[FilterPolicyLimitExceededException](#schemafilterpolicylimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ConfirmSubscription

<a id="opIdPOST_ConfirmSubscription"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=ConfirmSubscription?Action=ConfirmSubscription&Version=2010-03-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"TopicArn":{},"Token":{},"AuthenticateOnUnsubscribe":{}}'
```

`POST /#Action=ConfirmSubscription`

Verifies an endpoint owner's intent to receive messages by validating the token sent to the endpoint by an earlier <code>Subscribe</code> action. If the token is valid, the action creates a new subscription and returns its Amazon Resource Name (ARN). This call requires an AWS signature only when the <code>AuthenticateOnUnsubscribe</code> flag is set to "true".

> Body parameter

```json
{
  "TopicArn": {},
  "Token": {},
  "AuthenticateOnUnsubscribe": {}
}
```

<h3 id="postconfirmsubscription-parameters">Parameters</h3>

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
|body|body|[ConfirmSubscriptionInput](#schemaconfirmsubscriptioninput)|false|none|
|» TopicArn|body|object|true|none|
|» Token|body|object|true|none|
|» AuthenticateOnUnsubscribe|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ConfirmSubscription|
|Version|2010-03-31|

<h3 id="postconfirmsubscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ConfirmSubscriptionResponse](#schemaconfirmsubscriptionresponse)|
|480|480|SubscriptionLimitExceededException|[SubscriptionLimitExceededException](#schemasubscriptionlimitexceededexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|484|484|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|485|485|FilterPolicyLimitExceededException|[FilterPolicyLimitExceededException](#schemafilterpolicylimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreatePlatformApplication

<a id="opIdGET_CreatePlatformApplication"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=CreatePlatformApplication?Name=string&Platform=string&property1=string&property2=string&Action=CreatePlatformApplication&Version=2010-03-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreatePlatformApplication`

<p>Creates a platform application object for one of the supported push notification services, such as APNS and GCM (Firebase Cloud Messaging), to which devices and mobile apps may register. You must specify <code>PlatformPrincipal</code> and <code>PlatformCredential</code> attributes when using the <code>CreatePlatformApplication</code> action.</p> <p> <code>PlatformPrincipal</code> and <code>PlatformCredential</code> are received from the notification service.</p> <ul> <li> <p>For <code>ADM</code>, <code>PlatformPrincipal</code> is <code>client id</code> and <code>PlatformCredential</code> is <code>client secret</code>.</p> </li> <li> <p>For <code>Baidu</code>, <code>PlatformPrincipal</code> is <code>API key</code> and <code>PlatformCredential</code> is <code>secret key</code>.</p> </li> <li> <p>For <code>APNS</code> and <code>APNS_SANDBOX</code> using certificate credentials, <code>PlatformPrincipal</code> is <code>SSL certificate</code> and <code>PlatformCredential</code> is <code>private key</code>.</p> </li> <li> <p>For <code>APNS</code> and <code>APNS_SANDBOX</code> using token credentials, <code>PlatformPrincipal</code> is <code>signing key ID</code> and <code>PlatformCredential</code> is <code>signing key</code>.</p> </li> <li> <p>For <code>GCM</code> (Firebase Cloud Messaging), there is no <code>PlatformPrincipal</code> and the <code>PlatformCredential</code> is <code>API key</code>.</p> </li> <li> <p>For <code>MPNS</code>, <code>PlatformPrincipal</code> is <code>TLS certificate</code> and <code>PlatformCredential</code> is <code>private key</code>.</p> </li> <li> <p>For <code>WNS</code>, <code>PlatformPrincipal</code> is <code>Package Security Identifier</code> and <code>PlatformCredential</code> is <code>secret key</code>.</p> </li> </ul> <p>You can use the returned <code>PlatformApplicationArn</code> as an attribute for the <code>CreatePlatformEndpoint</code> action.</p>

<h3 id="getcreateplatformapplication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Name|query|string|true|Application names must be made up of only uppercase and lowercase ASCII letters, numbers, underscores, hyphens, and periods, and must be between 1 and 256 characters long.|
|Platform|query|string|true|The following platforms are supported: ADM (Amazon Device Messaging), APNS (Apple Push Notification Service), APNS_SANDBOX, and GCM (Firebase Cloud Messaging).|
|Attributes|query|object|true|For a list of attributes, see <a href="https://docs.aws.amazon.com/sns/latest/api/API_SetPlatformApplicationAttributes.html">SetPlatformApplicationAttributes</a>.|
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
|Action|CreatePlatformApplication|
|Version|2010-03-31|

<h3 id="getcreateplatformapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreatePlatformApplicationResponse](#schemacreateplatformapplicationresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreatePlatformApplication

<a id="opIdPOST_CreatePlatformApplication"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=CreatePlatformApplication?Action=CreatePlatformApplication&Version=2010-03-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Name":{},"Platform":{},"Attributes":{"property1":"string","property2":"string"}}'
```

`POST /#Action=CreatePlatformApplication`

<p>Creates a platform application object for one of the supported push notification services, such as APNS and GCM (Firebase Cloud Messaging), to which devices and mobile apps may register. You must specify <code>PlatformPrincipal</code> and <code>PlatformCredential</code> attributes when using the <code>CreatePlatformApplication</code> action.</p> <p> <code>PlatformPrincipal</code> and <code>PlatformCredential</code> are received from the notification service.</p> <ul> <li> <p>For <code>ADM</code>, <code>PlatformPrincipal</code> is <code>client id</code> and <code>PlatformCredential</code> is <code>client secret</code>.</p> </li> <li> <p>For <code>Baidu</code>, <code>PlatformPrincipal</code> is <code>API key</code> and <code>PlatformCredential</code> is <code>secret key</code>.</p> </li> <li> <p>For <code>APNS</code> and <code>APNS_SANDBOX</code> using certificate credentials, <code>PlatformPrincipal</code> is <code>SSL certificate</code> and <code>PlatformCredential</code> is <code>private key</code>.</p> </li> <li> <p>For <code>APNS</code> and <code>APNS_SANDBOX</code> using token credentials, <code>PlatformPrincipal</code> is <code>signing key ID</code> and <code>PlatformCredential</code> is <code>signing key</code>.</p> </li> <li> <p>For <code>GCM</code> (Firebase Cloud Messaging), there is no <code>PlatformPrincipal</code> and the <code>PlatformCredential</code> is <code>API key</code>.</p> </li> <li> <p>For <code>MPNS</code>, <code>PlatformPrincipal</code> is <code>TLS certificate</code> and <code>PlatformCredential</code> is <code>private key</code>.</p> </li> <li> <p>For <code>WNS</code>, <code>PlatformPrincipal</code> is <code>Package Security Identifier</code> and <code>PlatformCredential</code> is <code>secret key</code>.</p> </li> </ul> <p>You can use the returned <code>PlatformApplicationArn</code> as an attribute for the <code>CreatePlatformEndpoint</code> action.</p>

> Body parameter

```json
{
  "Name": {},
  "Platform": {},
  "Attributes": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="postcreateplatformapplication-parameters">Parameters</h3>

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
|body|body|[CreatePlatformApplicationInput](#schemacreateplatformapplicationinput)|false|none|
|» Name|body|object|true|none|
|» Platform|body|object|true|none|
|» Attributes|body|object|true|none|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreatePlatformApplication|
|Version|2010-03-31|

<h3 id="postcreateplatformapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreatePlatformApplicationResponse](#schemacreateplatformapplicationresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreatePlatformEndpoint

<a id="opIdGET_CreatePlatformEndpoint"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=CreatePlatformEndpoint?PlatformApplicationArn=string&Token=string&Action=CreatePlatformEndpoint&Version=2010-03-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreatePlatformEndpoint`

<p>Creates an endpoint for a device and mobile app on one of the supported push notification services, such as GCM (Firebase Cloud Messaging) and APNS. <code>CreatePlatformEndpoint</code> requires the <code>PlatformApplicationArn</code> that is returned from <code>CreatePlatformApplication</code>. You can use the returned <code>EndpointArn</code> to send a message to a mobile app or by the <code>Subscribe</code> action for subscription to a topic. The <code>CreatePlatformEndpoint</code> action is idempotent, so if the requester already owns an endpoint with the same device token and attributes, that endpoint's ARN is returned without creating a new endpoint. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. </p> <p>When using <code>CreatePlatformEndpoint</code> with Baidu, two attributes must be provided: ChannelId and UserId. The token field must also contain the ChannelId. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePushBaiduEndpoint.html">Creating an Amazon SNS Endpoint for Baidu</a>. </p>

<h3 id="getcreateplatformendpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PlatformApplicationArn|query|string|true|PlatformApplicationArn returned from CreatePlatformApplication is used to create a an endpoint.|
|Token|query|string|true|Unique identifier created by the notification service for an app on a device. The specific name for Token will vary, depending on which notification service is being used. For example, when using APNS as the notification service, you need the device token. Alternatively, when using GCM (Firebase Cloud Messaging) or ADM, the device token equivalent is called the registration ID.|
|CustomUserData|query|string|false|Arbitrary user data to associate with the endpoint. Amazon SNS does not use this data. The data must be in UTF-8 format and less than 2KB.|
|Attributes|query|object|false|For a list of attributes, see <a href="https://docs.aws.amazon.com/sns/latest/api/API_SetEndpointAttributes.html">SetEndpointAttributes</a>.|
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
|Action|CreatePlatformEndpoint|
|Version|2010-03-31|

<h3 id="getcreateplatformendpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateEndpointResponse](#schemacreateendpointresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreatePlatformEndpoint

<a id="opIdPOST_CreatePlatformEndpoint"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=CreatePlatformEndpoint?Action=CreatePlatformEndpoint&Version=2010-03-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"PlatformApplicationArn":{},"Token":{},"CustomUserData":{},"Attributes":{"property1":"string","property2":"string"}}'
```

`POST /#Action=CreatePlatformEndpoint`

<p>Creates an endpoint for a device and mobile app on one of the supported push notification services, such as GCM (Firebase Cloud Messaging) and APNS. <code>CreatePlatformEndpoint</code> requires the <code>PlatformApplicationArn</code> that is returned from <code>CreatePlatformApplication</code>. You can use the returned <code>EndpointArn</code> to send a message to a mobile app or by the <code>Subscribe</code> action for subscription to a topic. The <code>CreatePlatformEndpoint</code> action is idempotent, so if the requester already owns an endpoint with the same device token and attributes, that endpoint's ARN is returned without creating a new endpoint. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. </p> <p>When using <code>CreatePlatformEndpoint</code> with Baidu, two attributes must be provided: ChannelId and UserId. The token field must also contain the ChannelId. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePushBaiduEndpoint.html">Creating an Amazon SNS Endpoint for Baidu</a>. </p>

> Body parameter

```json
{
  "PlatformApplicationArn": {},
  "Token": {},
  "CustomUserData": {},
  "Attributes": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="postcreateplatformendpoint-parameters">Parameters</h3>

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
|body|body|[CreatePlatformEndpointInput](#schemacreateplatformendpointinput)|false|none|
|» PlatformApplicationArn|body|object|true|none|
|» Token|body|object|true|none|
|» CustomUserData|body|object|false|none|
|» Attributes|body|object|false|none|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreatePlatformEndpoint|
|Version|2010-03-31|

<h3 id="postcreateplatformendpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateEndpointResponse](#schemacreateendpointresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateSMSSandboxPhoneNumber

<a id="opIdGET_CreateSMSSandboxPhoneNumber"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=CreateSMSSandboxPhoneNumber?PhoneNumber=string&Action=CreateSMSSandboxPhoneNumber&Version=2010-03-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateSMSSandboxPhoneNumber`

<p>Adds a destination phone number to an Amazon Web Services account in the SMS sandbox and sends a one-time password (OTP) to that phone number.</p> <p>When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the <i>SMS sandbox</i>. The SMS sandbox provides a safe environment for you to try Amazon SNS features without risking your reputation as an SMS sender. While your Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send SMS messages only to verified destination phone numbers. For more information, including how to move out of the sandbox to send messages without restrictions, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">SMS sandbox</a> in the <i>Amazon SNS Developer Guide</i>.</p>

<h3 id="getcreatesmssandboxphonenumber-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PhoneNumber|query|string|true|The destination phone number to verify. On verification, Amazon SNS adds this phone number to the list of verified phone numbers that you can send SMS messages to.|
|LanguageCode|query|string|false|The language to use for sending the OTP. The default value is <code>en-US</code>.|
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
|LanguageCode|en-US|
|LanguageCode|en-GB|
|LanguageCode|es-419|
|LanguageCode|es-ES|
|LanguageCode|de-DE|
|LanguageCode|fr-CA|
|LanguageCode|fr-FR|
|LanguageCode|it-IT|
|LanguageCode|ja-JP|
|LanguageCode|pt-BR|
|LanguageCode|kr-KR|
|LanguageCode|zh-CN|
|LanguageCode|zh-TW|
|Action|CreateSMSSandboxPhoneNumber|
|Version|2010-03-31|

<h3 id="getcreatesmssandboxphonenumber-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateSMSSandboxPhoneNumberResult](#schemacreatesmssandboxphonenumberresult)|
|480|480|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|OptedOutException|[OptedOutException](#schemaoptedoutexception)|
|484|484|UserErrorException|[UserErrorException](#schemausererrorexception)|
|485|485|ThrottledException|[ThrottledException](#schemathrottledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateSMSSandboxPhoneNumber

<a id="opIdPOST_CreateSMSSandboxPhoneNumber"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=CreateSMSSandboxPhoneNumber?Action=CreateSMSSandboxPhoneNumber&Version=2010-03-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"PhoneNumber":{},"LanguageCode":{}}'
```

`POST /#Action=CreateSMSSandboxPhoneNumber`

<p>Adds a destination phone number to an Amazon Web Services account in the SMS sandbox and sends a one-time password (OTP) to that phone number.</p> <p>When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the <i>SMS sandbox</i>. The SMS sandbox provides a safe environment for you to try Amazon SNS features without risking your reputation as an SMS sender. While your Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send SMS messages only to verified destination phone numbers. For more information, including how to move out of the sandbox to send messages without restrictions, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">SMS sandbox</a> in the <i>Amazon SNS Developer Guide</i>.</p>

> Body parameter

```json
{
  "PhoneNumber": {},
  "LanguageCode": {}
}
```

<h3 id="postcreatesmssandboxphonenumber-parameters">Parameters</h3>

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
|body|body|[CreateSMSSandboxPhoneNumberInput](#schemacreatesmssandboxphonenumberinput)|false|none|
|» PhoneNumber|body|object|true|none|
|» LanguageCode|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateSMSSandboxPhoneNumber|
|Version|2010-03-31|

<h3 id="postcreatesmssandboxphonenumber-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateSMSSandboxPhoneNumberResult](#schemacreatesmssandboxphonenumberresult)|
|480|480|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|OptedOutException|[OptedOutException](#schemaoptedoutexception)|
|484|484|UserErrorException|[UserErrorException](#schemausererrorexception)|
|485|485|ThrottledException|[ThrottledException](#schemathrottledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateTopic

<a id="opIdGET_CreateTopic"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=CreateTopic?Name=string&Action=CreateTopic&Version=2010-03-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateTopic`

Creates a topic to which notifications can be published. Users can create at most 100,000 standard topics (at most 1,000 FIFO topics). For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-create-topic.html">Creating an Amazon SNS topic</a> in the <i>Amazon SNS Developer Guide</i>. This action is idempotent, so if the requester already owns a topic with the specified name, that topic's ARN is returned without creating a new topic.

<h3 id="getcreatetopic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Name|query|string|true|<p>The name of the topic you want to create.</p> <p>Constraints: Topic names must be made up of only uppercase and lowercase ASCII letters, numbers, underscores, and hyphens, and must be between 1 and 256 characters long.</p> <p>For a FIFO (first-in-first-out) topic, the name must end with the <code>.fifo</code> suffix. </p>|
|Attributes|query|object|false|<p>A map of attributes with their corresponding values.</p> <p>The following lists the names, descriptions, and values of the special request parameters that the <code>CreateTopic</code> action uses:</p> <ul> <li> <p> <code>DeliveryPolicy</code> – The policy that defines how Amazon SNS retries failed deliveries to HTTP/S endpoints.</p> </li> <li> <p> <code>DisplayName</code> – The display name to use for a topic with SMS subscriptions.</p> </li> <li> <p> <code>FifoTopic</code> – Set to true to create a FIFO topic.</p> </li> <li> <p> <code>Policy</code> – The policy that defines who can access your topic. By default, only the topic owner can publish or subscribe to the topic.</p> </li> <li> <p> <code>SignatureVersion</code> – The signature version corresponds to the hashing algorithm used while creating the signature of the notifications, subscription confirmations, or unsubscribe confirmation messages sent by Amazon SNS. By default, <code>SignatureVersion</code> is set to <code>1</code>.</p> </li> <li> <p> <code>TracingConfig</code> – Tracing mode of an Amazon SNS topic. By default <code>TracingConfig</code> is set to <code>PassThrough</code>, and the topic passes through the tracing header it receives from an Amazon SNS publisher to its subscriptions. If set to <code>Active</code>, Amazon SNS will vend X-Ray segment data to topic owner account if the sampled flag in the tracing header is true. This is only supported on standard topics.</p> </li> </ul> <p>The following attribute applies only to <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html">server-side encryption</a>:</p> <ul> <li> <p> <code>KmsMasterKeyId</code> – The ID of an Amazon Web Services managed customer master key (CMK) for Amazon SNS or a custom CMK. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html#sse-key-terms">Key Terms</a>. For more examples, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters">KeyId</a> in the <i>Key Management Service API Reference</i>. </p> </li> </ul> <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-fifo-topics.html">FIFO topics</a>:</p> <ul> <li> <p> <code>FifoTopic</code> – When this is set to <code>true</code>, a FIFO topic is created.</p> </li> <li> <p> <code>ContentBasedDeduplication</code> – Enables content-based deduplication for FIFO topics.</p> <ul> <li> <p>By default, <code>ContentBasedDeduplication</code> is set to <code>false</code>. If you create a FIFO topic and this attribute is <code>false</code>, you must specify a value for the <code>MessageDeduplicationId</code> parameter for the <a href="https://docs.aws.amazon.com/sns/latest/api/API_Publish.html">Publish</a> action. </p> </li> <li> <p>When you set <code>ContentBasedDeduplication</code> to <code>true</code>, Amazon SNS uses a SHA-256 hash to generate the <code>MessageDeduplicationId</code> using the body of the message (but not the attributes of the message).</p> <p>(Optional) To override the generated value, you can specify a value for the <code>MessageDeduplicationId</code> parameter for the <code>Publish</code> action.</p> </li> </ul> </li> </ul>|
|Tags|query|[[Tag](#schematag)]|false|<p>The list of tags to add to a new topic.</p> <note> <p>To be able to tag a topic on creation, you must have the <code>sns:CreateTopic</code> and <code>sns:TagResource</code> permissions.</p> </note>|
|DataProtectionPolicy|query|string|false|<p>The body of the policy document you want to use for this topic.</p> <p>You can only add one policy per topic.</p> <p>The policy must be in JSON string format.</p> <p>Length Constraints: Maximum length of 30,720.</p>|
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
|Action|CreateTopic|
|Version|2010-03-31|

<h3 id="getcreatetopic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateTopicResponse](#schemacreatetopicresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|TopicLimitExceededException|[TopicLimitExceededException](#schematopiclimitexceededexception)|
|482|482|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|483|483|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|484|484|InvalidSecurityException|[InvalidSecurityException](#schemainvalidsecurityexception)|
|485|485|TagLimitExceededException|[TagLimitExceededException](#schemataglimitexceededexception)|
|486|486|StaleTagException|[StaleTagException](#schemastaletagexception)|
|487|487|TagPolicyException|[TagPolicyException](#schematagpolicyexception)|
|488|488|ConcurrentAccessException|[ConcurrentAccessException](#schemaconcurrentaccessexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateTopic

<a id="opIdPOST_CreateTopic"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=CreateTopic?Action=CreateTopic&Version=2010-03-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Name":{},"Attributes":{"property1":"string","property2":"string"},"Tags":{},"DataProtectionPolicy":{}}'
```

`POST /#Action=CreateTopic`

Creates a topic to which notifications can be published. Users can create at most 100,000 standard topics (at most 1,000 FIFO topics). For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-create-topic.html">Creating an Amazon SNS topic</a> in the <i>Amazon SNS Developer Guide</i>. This action is idempotent, so if the requester already owns a topic with the specified name, that topic's ARN is returned without creating a new topic.

> Body parameter

```json
{
  "Name": {},
  "Attributes": {
    "property1": "string",
    "property2": "string"
  },
  "Tags": {},
  "DataProtectionPolicy": {}
}
```

<h3 id="postcreatetopic-parameters">Parameters</h3>

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
|body|body|[CreateTopicInput](#schemacreatetopicinput)|false|none|
|» Name|body|object|true|none|
|» Attributes|body|object|false|none|
|» » **additionalProperties**|body|[attributeValue](#schemaattributevalue)|false|none|
|» Tags|body|object|false|none|
|» DataProtectionPolicy|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateTopic|
|Version|2010-03-31|

<h3 id="postcreatetopic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateTopicResponse](#schemacreatetopicresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|TopicLimitExceededException|[TopicLimitExceededException](#schematopiclimitexceededexception)|
|482|482|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|483|483|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|484|484|InvalidSecurityException|[InvalidSecurityException](#schemainvalidsecurityexception)|
|485|485|TagLimitExceededException|[TagLimitExceededException](#schemataglimitexceededexception)|
|486|486|StaleTagException|[StaleTagException](#schemastaletagexception)|
|487|487|TagPolicyException|[TagPolicyException](#schematagpolicyexception)|
|488|488|ConcurrentAccessException|[ConcurrentAccessException](#schemaconcurrentaccessexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteEndpoint

<a id="opIdGET_DeleteEndpoint"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=DeleteEndpoint?EndpointArn=string&Action=DeleteEndpoint&Version=2010-03-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteEndpoint`

<p>Deletes the endpoint for a device and mobile app from Amazon SNS. This action is idempotent. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. </p> <p>When you delete an endpoint that is also subscribed to a topic, then you must also unsubscribe the endpoint from the topic.</p>

<h3 id="getdeleteendpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EndpointArn|query|string|true|EndpointArn of endpoint to delete.|
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
|Action|DeleteEndpoint|
|Version|2010-03-31|

<h3 id="getdeleteendpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteEndpoint

<a id="opIdPOST_DeleteEndpoint"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=DeleteEndpoint?Action=DeleteEndpoint&Version=2010-03-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"EndpointArn":{}}'
```

`POST /#Action=DeleteEndpoint`

<p>Deletes the endpoint for a device and mobile app from Amazon SNS. This action is idempotent. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. </p> <p>When you delete an endpoint that is also subscribed to a topic, then you must also unsubscribe the endpoint from the topic.</p>

> Body parameter

```json
{
  "EndpointArn": {}
}
```

<h3 id="postdeleteendpoint-parameters">Parameters</h3>

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
|body|body|[DeleteEndpointInput](#schemadeleteendpointinput)|false|none|
|» EndpointArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteEndpoint|
|Version|2010-03-31|

<h3 id="postdeleteendpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeletePlatformApplication

<a id="opIdGET_DeletePlatformApplication"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=DeletePlatformApplication?PlatformApplicationArn=string&Action=DeletePlatformApplication&Version=2010-03-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeletePlatformApplication`

Deletes a platform application object for one of the supported push notification services, such as APNS and GCM (Firebase Cloud Messaging). For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. 

<h3 id="getdeleteplatformapplication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PlatformApplicationArn|query|string|true|PlatformApplicationArn of platform application object to delete.|
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
|Action|DeletePlatformApplication|
|Version|2010-03-31|

<h3 id="getdeleteplatformapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeletePlatformApplication

<a id="opIdPOST_DeletePlatformApplication"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=DeletePlatformApplication?Action=DeletePlatformApplication&Version=2010-03-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"PlatformApplicationArn":{}}'
```

`POST /#Action=DeletePlatformApplication`

Deletes a platform application object for one of the supported push notification services, such as APNS and GCM (Firebase Cloud Messaging). For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. 

> Body parameter

```json
{
  "PlatformApplicationArn": {}
}
```

<h3 id="postdeleteplatformapplication-parameters">Parameters</h3>

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
|body|body|[DeletePlatformApplicationInput](#schemadeleteplatformapplicationinput)|false|none|
|» PlatformApplicationArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeletePlatformApplication|
|Version|2010-03-31|

<h3 id="postdeleteplatformapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteSMSSandboxPhoneNumber

<a id="opIdGET_DeleteSMSSandboxPhoneNumber"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=DeleteSMSSandboxPhoneNumber?PhoneNumber=string&Action=DeleteSMSSandboxPhoneNumber&Version=2010-03-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteSMSSandboxPhoneNumber`

<p>Deletes an Amazon Web Services account's verified or pending phone number from the SMS sandbox.</p> <p>When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the <i>SMS sandbox</i>. The SMS sandbox provides a safe environment for you to try Amazon SNS features without risking your reputation as an SMS sender. While your Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send SMS messages only to verified destination phone numbers. For more information, including how to move out of the sandbox to send messages without restrictions, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">SMS sandbox</a> in the <i>Amazon SNS Developer Guide</i>.</p>

<h3 id="getdeletesmssandboxphonenumber-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PhoneNumber|query|string|true|The destination phone number to delete.|
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
|Action|DeleteSMSSandboxPhoneNumber|
|Version|2010-03-31|

<h3 id="getdeletesmssandboxphonenumber-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteSMSSandboxPhoneNumberResult](#schemadeletesmssandboxphonenumberresult)|
|480|480|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|UserErrorException|[UserErrorException](#schemausererrorexception)|
|485|485|ThrottledException|[ThrottledException](#schemathrottledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteSMSSandboxPhoneNumber

<a id="opIdPOST_DeleteSMSSandboxPhoneNumber"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=DeleteSMSSandboxPhoneNumber?Action=DeleteSMSSandboxPhoneNumber&Version=2010-03-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"PhoneNumber":{}}'
```

`POST /#Action=DeleteSMSSandboxPhoneNumber`

<p>Deletes an Amazon Web Services account's verified or pending phone number from the SMS sandbox.</p> <p>When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the <i>SMS sandbox</i>. The SMS sandbox provides a safe environment for you to try Amazon SNS features without risking your reputation as an SMS sender. While your Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send SMS messages only to verified destination phone numbers. For more information, including how to move out of the sandbox to send messages without restrictions, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">SMS sandbox</a> in the <i>Amazon SNS Developer Guide</i>.</p>

> Body parameter

```json
{
  "PhoneNumber": {}
}
```

<h3 id="postdeletesmssandboxphonenumber-parameters">Parameters</h3>

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
|body|body|[DeleteSMSSandboxPhoneNumberInput](#schemadeletesmssandboxphonenumberinput)|false|none|
|» PhoneNumber|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteSMSSandboxPhoneNumber|
|Version|2010-03-31|

<h3 id="postdeletesmssandboxphonenumber-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteSMSSandboxPhoneNumberResult](#schemadeletesmssandboxphonenumberresult)|
|480|480|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|UserErrorException|[UserErrorException](#schemausererrorexception)|
|485|485|ThrottledException|[ThrottledException](#schemathrottledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteTopic

<a id="opIdGET_DeleteTopic"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=DeleteTopic?TopicArn=string&Action=DeleteTopic&Version=2010-03-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteTopic`

Deletes a topic and all its subscriptions. Deleting a topic might prevent some messages previously sent to the topic from being delivered to subscribers. This action is idempotent, so deleting a topic that does not exist does not result in an error.

<h3 id="getdeletetopic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TopicArn|query|string|true|The ARN of the topic you want to delete.|
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
|Action|DeleteTopic|
|Version|2010-03-31|

<h3 id="getdeletetopic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|StaleTagException|[StaleTagException](#schemastaletagexception)|
|485|485|TagPolicyException|[TagPolicyException](#schematagpolicyexception)|
|486|486|ConcurrentAccessException|[ConcurrentAccessException](#schemaconcurrentaccessexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteTopic

<a id="opIdPOST_DeleteTopic"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=DeleteTopic?Action=DeleteTopic&Version=2010-03-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"TopicArn":{}}'
```

`POST /#Action=DeleteTopic`

Deletes a topic and all its subscriptions. Deleting a topic might prevent some messages previously sent to the topic from being delivered to subscribers. This action is idempotent, so deleting a topic that does not exist does not result in an error.

> Body parameter

```json
{
  "TopicArn": {}
}
```

<h3 id="postdeletetopic-parameters">Parameters</h3>

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
|body|body|[DeleteTopicInput](#schemadeletetopicinput)|false|none|
|» TopicArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteTopic|
|Version|2010-03-31|

<h3 id="postdeletetopic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|StaleTagException|[StaleTagException](#schemastaletagexception)|
|485|485|TagPolicyException|[TagPolicyException](#schematagpolicyexception)|
|486|486|ConcurrentAccessException|[ConcurrentAccessException](#schemaconcurrentaccessexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_GetDataProtectionPolicy

<a id="opIdGET_GetDataProtectionPolicy"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=GetDataProtectionPolicy?ResourceArn=string&Action=GetDataProtectionPolicy&Version=2010-03-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=GetDataProtectionPolicy`

Retrieves the specified inline <code>DataProtectionPolicy</code> document that is stored in the specified Amazon SNS topic. 

<h3 id="getgetdataprotectionpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceArn|query|string|true|<p>The ARN of the topic whose <code>DataProtectionPolicy</code> you want to get.</p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the Amazon Web Services General Reference.</p>|
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
|Action|GetDataProtectionPolicy|
|Version|2010-03-31|

<h3 id="getgetdataprotectionpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDataProtectionPolicyResponse](#schemagetdataprotectionpolicyresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|484|484|InvalidSecurityException|[InvalidSecurityException](#schemainvalidsecurityexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_GetDataProtectionPolicy

<a id="opIdPOST_GetDataProtectionPolicy"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=GetDataProtectionPolicy?Action=GetDataProtectionPolicy&Version=2010-03-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ResourceArn":{}}'
```

`POST /#Action=GetDataProtectionPolicy`

Retrieves the specified inline <code>DataProtectionPolicy</code> document that is stored in the specified Amazon SNS topic. 

> Body parameter

```json
{
  "ResourceArn": {}
}
```

<h3 id="postgetdataprotectionpolicy-parameters">Parameters</h3>

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
|body|body|[GetDataProtectionPolicyInput](#schemagetdataprotectionpolicyinput)|false|none|
|» ResourceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|GetDataProtectionPolicy|
|Version|2010-03-31|

<h3 id="postgetdataprotectionpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDataProtectionPolicyResponse](#schemagetdataprotectionpolicyresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|484|484|InvalidSecurityException|[InvalidSecurityException](#schemainvalidsecurityexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_GetEndpointAttributes

<a id="opIdGET_GetEndpointAttributes"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=GetEndpointAttributes?EndpointArn=string&Action=GetEndpointAttributes&Version=2010-03-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=GetEndpointAttributes`

Retrieves the endpoint attributes for a device on one of the supported push notification services, such as GCM (Firebase Cloud Messaging) and APNS. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. 

<h3 id="getgetendpointattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EndpointArn|query|string|true|EndpointArn for GetEndpointAttributes input.|
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
|Action|GetEndpointAttributes|
|Version|2010-03-31|

<h3 id="getgetendpointattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetEndpointAttributesResponse](#schemagetendpointattributesresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_GetEndpointAttributes

<a id="opIdPOST_GetEndpointAttributes"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=GetEndpointAttributes?Action=GetEndpointAttributes&Version=2010-03-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"EndpointArn":{}}'
```

`POST /#Action=GetEndpointAttributes`

Retrieves the endpoint attributes for a device on one of the supported push notification services, such as GCM (Firebase Cloud Messaging) and APNS. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. 

> Body parameter

```json
{
  "EndpointArn": {}
}
```

<h3 id="postgetendpointattributes-parameters">Parameters</h3>

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
|body|body|[GetEndpointAttributesInput](#schemagetendpointattributesinput)|false|none|
|» EndpointArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|GetEndpointAttributes|
|Version|2010-03-31|

<h3 id="postgetendpointattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetEndpointAttributesResponse](#schemagetendpointattributesresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_GetPlatformApplicationAttributes

<a id="opIdGET_GetPlatformApplicationAttributes"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=GetPlatformApplicationAttributes?PlatformApplicationArn=string&Action=GetPlatformApplicationAttributes&Version=2010-03-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=GetPlatformApplicationAttributes`

Retrieves the attributes of the platform application object for the supported push notification services, such as APNS and GCM (Firebase Cloud Messaging). For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. 

<h3 id="getgetplatformapplicationattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PlatformApplicationArn|query|string|true|PlatformApplicationArn for GetPlatformApplicationAttributesInput.|
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
|Action|GetPlatformApplicationAttributes|
|Version|2010-03-31|

<h3 id="getgetplatformapplicationattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetPlatformApplicationAttributesResponse](#schemagetplatformapplicationattributesresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_GetPlatformApplicationAttributes

<a id="opIdPOST_GetPlatformApplicationAttributes"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=GetPlatformApplicationAttributes?Action=GetPlatformApplicationAttributes&Version=2010-03-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"PlatformApplicationArn":{}}'
```

`POST /#Action=GetPlatformApplicationAttributes`

Retrieves the attributes of the platform application object for the supported push notification services, such as APNS and GCM (Firebase Cloud Messaging). For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. 

> Body parameter

```json
{
  "PlatformApplicationArn": {}
}
```

<h3 id="postgetplatformapplicationattributes-parameters">Parameters</h3>

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
|body|body|[GetPlatformApplicationAttributesInput](#schemagetplatformapplicationattributesinput)|false|none|
|» PlatformApplicationArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|GetPlatformApplicationAttributes|
|Version|2010-03-31|

<h3 id="postgetplatformapplicationattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetPlatformApplicationAttributesResponse](#schemagetplatformapplicationattributesresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_GetSMSAttributes

<a id="opIdGET_GetSMSAttributes"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=GetSMSAttributes?Action=GetSMSAttributes&Version=2010-03-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=GetSMSAttributes`

<p>Returns the settings for sending SMS messages from your Amazon Web Services account.</p> <p>These settings are set with the <code>SetSMSAttributes</code> action.</p>

<h3 id="getgetsmsattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|attributes|query|[[String](#schemastring)]|false|<p>A list of the individual attribute names, such as <code>MonthlySpendLimit</code>, for which you want values.</p> <p>For all attribute names, see <a href="https://docs.aws.amazon.com/sns/latest/api/API_SetSMSAttributes.html">SetSMSAttributes</a>.</p> <p>If you don't use this parameter, Amazon SNS returns all SMS attributes.</p>|
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
|Action|GetSMSAttributes|
|Version|2010-03-31|

<h3 id="getgetsmsattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSMSAttributesResponse](#schemagetsmsattributesresponse)|
|480|480|ThrottledException|[ThrottledException](#schemathrottledexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_GetSMSAttributes

<a id="opIdPOST_GetSMSAttributes"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=GetSMSAttributes?Action=GetSMSAttributes&Version=2010-03-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"attributes":{}}'
```

`POST /#Action=GetSMSAttributes`

<p>Returns the settings for sending SMS messages from your Amazon Web Services account.</p> <p>These settings are set with the <code>SetSMSAttributes</code> action.</p>

> Body parameter

```json
{
  "attributes": {}
}
```

<h3 id="postgetsmsattributes-parameters">Parameters</h3>

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
|body|body|[GetSMSAttributesInput](#schemagetsmsattributesinput)|false|none|
|» attributes|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|GetSMSAttributes|
|Version|2010-03-31|

<h3 id="postgetsmsattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSMSAttributesResponse](#schemagetsmsattributesresponse)|
|480|480|ThrottledException|[ThrottledException](#schemathrottledexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_GetSMSSandboxAccountStatus

<a id="opIdGET_GetSMSSandboxAccountStatus"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=GetSMSSandboxAccountStatus?Action=GetSMSSandboxAccountStatus&Version=2010-03-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=GetSMSSandboxAccountStatus`

<p>Retrieves the SMS sandbox status for the calling Amazon Web Services account in the target Amazon Web Services Region.</p> <p>When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the <i>SMS sandbox</i>. The SMS sandbox provides a safe environment for you to try Amazon SNS features without risking your reputation as an SMS sender. While your Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send SMS messages only to verified destination phone numbers. For more information, including how to move out of the sandbox to send messages without restrictions, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">SMS sandbox</a> in the <i>Amazon SNS Developer Guide</i>.</p>

<h3 id="getgetsmssandboxaccountstatus-parameters">Parameters</h3>

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
|Action|GetSMSSandboxAccountStatus|
|Version|2010-03-31|

<h3 id="getgetsmssandboxaccountstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSMSSandboxAccountStatusResult](#schemagetsmssandboxaccountstatusresult)|
|480|480|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|ThrottledException|[ThrottledException](#schemathrottledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_GetSMSSandboxAccountStatus

<a id="opIdPOST_GetSMSSandboxAccountStatus"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=GetSMSSandboxAccountStatus?Action=GetSMSSandboxAccountStatus&Version=2010-03-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{}'
```

`POST /#Action=GetSMSSandboxAccountStatus`

<p>Retrieves the SMS sandbox status for the calling Amazon Web Services account in the target Amazon Web Services Region.</p> <p>When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the <i>SMS sandbox</i>. The SMS sandbox provides a safe environment for you to try Amazon SNS features without risking your reputation as an SMS sender. While your Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send SMS messages only to verified destination phone numbers. For more information, including how to move out of the sandbox to send messages without restrictions, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">SMS sandbox</a> in the <i>Amazon SNS Developer Guide</i>.</p>

> Body parameter

```json
{}
```

<h3 id="postgetsmssandboxaccountstatus-parameters">Parameters</h3>

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
|body|body|[GetSMSSandboxAccountStatusInput](#schemagetsmssandboxaccountstatusinput)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|GetSMSSandboxAccountStatus|
|Version|2010-03-31|

<h3 id="postgetsmssandboxaccountstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSMSSandboxAccountStatusResult](#schemagetsmssandboxaccountstatusresult)|
|480|480|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|ThrottledException|[ThrottledException](#schemathrottledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_GetSubscriptionAttributes

<a id="opIdGET_GetSubscriptionAttributes"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=GetSubscriptionAttributes?SubscriptionArn=string&Action=GetSubscriptionAttributes&Version=2010-03-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=GetSubscriptionAttributes`

Returns all of the properties of a subscription.

<h3 id="getgetsubscriptionattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SubscriptionArn|query|string|true|The ARN of the subscription whose properties you want to get.|
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
|Action|GetSubscriptionAttributes|
|Version|2010-03-31|

<h3 id="getgetsubscriptionattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSubscriptionAttributesResponse](#schemagetsubscriptionattributesresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_GetSubscriptionAttributes

<a id="opIdPOST_GetSubscriptionAttributes"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=GetSubscriptionAttributes?Action=GetSubscriptionAttributes&Version=2010-03-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"SubscriptionArn":{}}'
```

`POST /#Action=GetSubscriptionAttributes`

Returns all of the properties of a subscription.

> Body parameter

```json
{
  "SubscriptionArn": {}
}
```

<h3 id="postgetsubscriptionattributes-parameters">Parameters</h3>

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
|body|body|[GetSubscriptionAttributesInput](#schemagetsubscriptionattributesinput)|false|none|
|» SubscriptionArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|GetSubscriptionAttributes|
|Version|2010-03-31|

<h3 id="postgetsubscriptionattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSubscriptionAttributesResponse](#schemagetsubscriptionattributesresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_GetTopicAttributes

<a id="opIdGET_GetTopicAttributes"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=GetTopicAttributes?TopicArn=string&Action=GetTopicAttributes&Version=2010-03-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=GetTopicAttributes`

Returns all of the properties of a topic. Topic properties returned might differ based on the authorization of the user.

<h3 id="getgettopicattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TopicArn|query|string|true|The ARN of the topic whose properties you want to get.|
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
|Action|GetTopicAttributes|
|Version|2010-03-31|

<h3 id="getgettopicattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetTopicAttributesResponse](#schemagettopicattributesresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|484|484|InvalidSecurityException|[InvalidSecurityException](#schemainvalidsecurityexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_GetTopicAttributes

<a id="opIdPOST_GetTopicAttributes"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=GetTopicAttributes?Action=GetTopicAttributes&Version=2010-03-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"TopicArn":{}}'
```

`POST /#Action=GetTopicAttributes`

Returns all of the properties of a topic. Topic properties returned might differ based on the authorization of the user.

> Body parameter

```json
{
  "TopicArn": {}
}
```

<h3 id="postgettopicattributes-parameters">Parameters</h3>

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
|body|body|[GetTopicAttributesInput](#schemagettopicattributesinput)|false|none|
|» TopicArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|GetTopicAttributes|
|Version|2010-03-31|

<h3 id="postgettopicattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetTopicAttributesResponse](#schemagettopicattributesresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|484|484|InvalidSecurityException|[InvalidSecurityException](#schemainvalidsecurityexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ListEndpointsByPlatformApplication

<a id="opIdGET_ListEndpointsByPlatformApplication"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=ListEndpointsByPlatformApplication?PlatformApplicationArn=string&Action=ListEndpointsByPlatformApplication&Version=2010-03-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ListEndpointsByPlatformApplication`

<p>Lists the endpoints and endpoint attributes for devices in a supported push notification service, such as GCM (Firebase Cloud Messaging) and APNS. The results for <code>ListEndpointsByPlatformApplication</code> are paginated and return a limited list of endpoints, up to 100. If additional records are available after the first page results, then a NextToken string will be returned. To receive the next page, you call <code>ListEndpointsByPlatformApplication</code> again using the NextToken string received from the previous call. When there are no more records to return, NextToken will be null. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. </p> <p>This action is throttled at 30 transactions per second (TPS).</p>

<h3 id="getlistendpointsbyplatformapplication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PlatformApplicationArn|query|string|true|PlatformApplicationArn for ListEndpointsByPlatformApplicationInput action.|
|NextToken|query|string|false|NextToken string is used when calling ListEndpointsByPlatformApplication action to retrieve additional records that are available after the first page results.|
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
|Action|ListEndpointsByPlatformApplication|
|Version|2010-03-31|

<h3 id="getlistendpointsbyplatformapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListEndpointsByPlatformApplicationResponse](#schemalistendpointsbyplatformapplicationresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ListEndpointsByPlatformApplication

<a id="opIdPOST_ListEndpointsByPlatformApplication"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=ListEndpointsByPlatformApplication?Action=ListEndpointsByPlatformApplication&Version=2010-03-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"PlatformApplicationArn":{},"NextToken":{}}'
```

`POST /#Action=ListEndpointsByPlatformApplication`

<p>Lists the endpoints and endpoint attributes for devices in a supported push notification service, such as GCM (Firebase Cloud Messaging) and APNS. The results for <code>ListEndpointsByPlatformApplication</code> are paginated and return a limited list of endpoints, up to 100. If additional records are available after the first page results, then a NextToken string will be returned. To receive the next page, you call <code>ListEndpointsByPlatformApplication</code> again using the NextToken string received from the previous call. When there are no more records to return, NextToken will be null. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. </p> <p>This action is throttled at 30 transactions per second (TPS).</p>

> Body parameter

```json
{
  "PlatformApplicationArn": {},
  "NextToken": {}
}
```

<h3 id="postlistendpointsbyplatformapplication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
|body|body|[ListEndpointsByPlatformApplicationInput](#schemalistendpointsbyplatformapplicationinput)|false|none|
|» PlatformApplicationArn|body|object|true|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListEndpointsByPlatformApplication|
|Version|2010-03-31|

<h3 id="postlistendpointsbyplatformapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListEndpointsByPlatformApplicationResponse](#schemalistendpointsbyplatformapplicationresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ListOriginationNumbers

<a id="opIdGET_ListOriginationNumbers"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=ListOriginationNumbers?Action=ListOriginationNumbers&Version=2010-03-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ListOriginationNumbers`

Lists the calling Amazon Web Services account's dedicated origination numbers and their metadata. For more information about origination numbers, see <a href="https://docs.aws.amazon.com/sns/latest/dg/channels-sms-originating-identities-origination-numbers.html">Origination numbers</a> in the <i>Amazon SNS Developer Guide</i>.

<h3 id="getlistoriginationnumbers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|Token that the previous <code>ListOriginationNumbers</code> request returns.|
|MaxResults|query|integer|false|The maximum number of origination numbers to return.|
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
|Action|ListOriginationNumbers|
|Version|2010-03-31|

<h3 id="getlistoriginationnumbers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListOriginationNumbersResult](#schemalistoriginationnumbersresult)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|482|482|ThrottledException|[ThrottledException](#schemathrottledexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ListOriginationNumbers

<a id="opIdPOST_ListOriginationNumbers"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=ListOriginationNumbers?Action=ListOriginationNumbers&Version=2010-03-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"NextToken":{},"MaxResults":{}}'
```

`POST /#Action=ListOriginationNumbers`

Lists the calling Amazon Web Services account's dedicated origination numbers and their metadata. For more information about origination numbers, see <a href="https://docs.aws.amazon.com/sns/latest/dg/channels-sms-originating-identities-origination-numbers.html">Origination numbers</a> in the <i>Amazon SNS Developer Guide</i>.

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="postlistoriginationnumbers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
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
|body|body|[ListOriginationNumbersRequest](#schemalistoriginationnumbersrequest)|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListOriginationNumbers|
|Version|2010-03-31|

<h3 id="postlistoriginationnumbers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListOriginationNumbersResult](#schemalistoriginationnumbersresult)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|482|482|ThrottledException|[ThrottledException](#schemathrottledexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ListPhoneNumbersOptedOut

<a id="opIdGET_ListPhoneNumbersOptedOut"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=ListPhoneNumbersOptedOut?Action=ListPhoneNumbersOptedOut&Version=2010-03-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ListPhoneNumbersOptedOut`

<p>Returns a list of phone numbers that are opted out, meaning you cannot send SMS messages to them.</p> <p>The results for <code>ListPhoneNumbersOptedOut</code> are paginated, and each page returns up to 100 phone numbers. If additional phone numbers are available after the first page of results, then a <code>NextToken</code> string will be returned. To receive the next page, you call <code>ListPhoneNumbersOptedOut</code> again using the <code>NextToken</code> string received from the previous call. When there are no more records to return, <code>NextToken</code> will be null.</p>

<h3 id="getlistphonenumbersoptedout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|A <code>NextToken</code> string is used when you call the <code>ListPhoneNumbersOptedOut</code> action to retrieve additional records that are available after the first page of results.|
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
|Action|ListPhoneNumbersOptedOut|
|Version|2010-03-31|

<h3 id="getlistphonenumbersoptedout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPhoneNumbersOptedOutResponse](#schemalistphonenumbersoptedoutresponse)|
|480|480|ThrottledException|[ThrottledException](#schemathrottledexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ListPhoneNumbersOptedOut

<a id="opIdPOST_ListPhoneNumbersOptedOut"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=ListPhoneNumbersOptedOut?Action=ListPhoneNumbersOptedOut&Version=2010-03-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"nextToken":{}}'
```

`POST /#Action=ListPhoneNumbersOptedOut`

<p>Returns a list of phone numbers that are opted out, meaning you cannot send SMS messages to them.</p> <p>The results for <code>ListPhoneNumbersOptedOut</code> are paginated, and each page returns up to 100 phone numbers. If additional phone numbers are available after the first page of results, then a <code>NextToken</code> string will be returned. To receive the next page, you call <code>ListPhoneNumbersOptedOut</code> again using the <code>NextToken</code> string received from the previous call. When there are no more records to return, <code>NextToken</code> will be null.</p>

> Body parameter

```json
{
  "nextToken": {}
}
```

<h3 id="postlistphonenumbersoptedout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|Pagination token|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListPhoneNumbersOptedOutInput](#schemalistphonenumbersoptedoutinput)|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListPhoneNumbersOptedOut|
|Version|2010-03-31|

<h3 id="postlistphonenumbersoptedout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPhoneNumbersOptedOutResponse](#schemalistphonenumbersoptedoutresponse)|
|480|480|ThrottledException|[ThrottledException](#schemathrottledexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ListPlatformApplications

<a id="opIdGET_ListPlatformApplications"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=ListPlatformApplications?Action=ListPlatformApplications&Version=2010-03-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ListPlatformApplications`

<p>Lists the platform application objects for the supported push notification services, such as APNS and GCM (Firebase Cloud Messaging). The results for <code>ListPlatformApplications</code> are paginated and return a limited list of applications, up to 100. If additional records are available after the first page results, then a NextToken string will be returned. To receive the next page, you call <code>ListPlatformApplications</code> using the NextToken string received from the previous call. When there are no more records to return, <code>NextToken</code> will be null. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. </p> <p>This action is throttled at 15 transactions per second (TPS).</p>

<h3 id="getlistplatformapplications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|NextToken string is used when calling ListPlatformApplications action to retrieve additional records that are available after the first page results.|
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
|Action|ListPlatformApplications|
|Version|2010-03-31|

<h3 id="getlistplatformapplications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPlatformApplicationsResponse](#schemalistplatformapplicationsresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ListPlatformApplications

<a id="opIdPOST_ListPlatformApplications"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=ListPlatformApplications?Action=ListPlatformApplications&Version=2010-03-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"NextToken":{}}'
```

`POST /#Action=ListPlatformApplications`

<p>Lists the platform application objects for the supported push notification services, such as APNS and GCM (Firebase Cloud Messaging). The results for <code>ListPlatformApplications</code> are paginated and return a limited list of applications, up to 100. If additional records are available after the first page results, then a NextToken string will be returned. To receive the next page, you call <code>ListPlatformApplications</code> using the NextToken string received from the previous call. When there are no more records to return, <code>NextToken</code> will be null. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. </p> <p>This action is throttled at 15 transactions per second (TPS).</p>

> Body parameter

```json
{
  "NextToken": {}
}
```

<h3 id="postlistplatformapplications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
|body|body|[ListPlatformApplicationsInput](#schemalistplatformapplicationsinput)|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListPlatformApplications|
|Version|2010-03-31|

<h3 id="postlistplatformapplications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPlatformApplicationsResponse](#schemalistplatformapplicationsresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ListSMSSandboxPhoneNumbers

<a id="opIdGET_ListSMSSandboxPhoneNumbers"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=ListSMSSandboxPhoneNumbers?Action=ListSMSSandboxPhoneNumbers&Version=2010-03-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ListSMSSandboxPhoneNumbers`

<p>Lists the calling Amazon Web Services account's current verified and pending destination phone numbers in the SMS sandbox.</p> <p>When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the <i>SMS sandbox</i>. The SMS sandbox provides a safe environment for you to try Amazon SNS features without risking your reputation as an SMS sender. While your Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send SMS messages only to verified destination phone numbers. For more information, including how to move out of the sandbox to send messages without restrictions, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">SMS sandbox</a> in the <i>Amazon SNS Developer Guide</i>.</p>

<h3 id="getlistsmssandboxphonenumbers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|Token that the previous <code>ListSMSSandboxPhoneNumbersInput</code> request returns.|
|MaxResults|query|integer|false|The maximum number of phone numbers to return.|
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
|Action|ListSMSSandboxPhoneNumbers|
|Version|2010-03-31|

<h3 id="getlistsmssandboxphonenumbers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSMSSandboxPhoneNumbersResult](#schemalistsmssandboxphonenumbersresult)|
|480|480|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottledException|[ThrottledException](#schemathrottledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ListSMSSandboxPhoneNumbers

<a id="opIdPOST_ListSMSSandboxPhoneNumbers"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=ListSMSSandboxPhoneNumbers?Action=ListSMSSandboxPhoneNumbers&Version=2010-03-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"NextToken":{},"MaxResults":{}}'
```

`POST /#Action=ListSMSSandboxPhoneNumbers`

<p>Lists the calling Amazon Web Services account's current verified and pending destination phone numbers in the SMS sandbox.</p> <p>When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the <i>SMS sandbox</i>. The SMS sandbox provides a safe environment for you to try Amazon SNS features without risking your reputation as an SMS sender. While your Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send SMS messages only to verified destination phone numbers. For more information, including how to move out of the sandbox to send messages without restrictions, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">SMS sandbox</a> in the <i>Amazon SNS Developer Guide</i>.</p>

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="postlistsmssandboxphonenumbers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
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
|body|body|[ListSMSSandboxPhoneNumbersInput](#schemalistsmssandboxphonenumbersinput)|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListSMSSandboxPhoneNumbers|
|Version|2010-03-31|

<h3 id="postlistsmssandboxphonenumbers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSMSSandboxPhoneNumbersResult](#schemalistsmssandboxphonenumbersresult)|
|480|480|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottledException|[ThrottledException](#schemathrottledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ListSubscriptions

<a id="opIdGET_ListSubscriptions"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=ListSubscriptions?Action=ListSubscriptions&Version=2010-03-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ListSubscriptions`

<p>Returns a list of the requester's subscriptions. Each call returns a limited list of subscriptions, up to 100. If there are more subscriptions, a <code>NextToken</code> is also returned. Use the <code>NextToken</code> parameter in a new <code>ListSubscriptions</code> call to get further results.</p> <p>This action is throttled at 30 transactions per second (TPS).</p>

<h3 id="getlistsubscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|Token returned by the previous <code>ListSubscriptions</code> request.|
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
|Action|ListSubscriptions|
|Version|2010-03-31|

<h3 id="getlistsubscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSubscriptionsResponse](#schemalistsubscriptionsresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ListSubscriptions

<a id="opIdPOST_ListSubscriptions"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=ListSubscriptions?Action=ListSubscriptions&Version=2010-03-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"NextToken":{}}'
```

`POST /#Action=ListSubscriptions`

<p>Returns a list of the requester's subscriptions. Each call returns a limited list of subscriptions, up to 100. If there are more subscriptions, a <code>NextToken</code> is also returned. Use the <code>NextToken</code> parameter in a new <code>ListSubscriptions</code> call to get further results.</p> <p>This action is throttled at 30 transactions per second (TPS).</p>

> Body parameter

```json
{
  "NextToken": {}
}
```

<h3 id="postlistsubscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
|body|body|[ListSubscriptionsInput](#schemalistsubscriptionsinput)|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListSubscriptions|
|Version|2010-03-31|

<h3 id="postlistsubscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSubscriptionsResponse](#schemalistsubscriptionsresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ListSubscriptionsByTopic

<a id="opIdGET_ListSubscriptionsByTopic"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=ListSubscriptionsByTopic?TopicArn=string&Action=ListSubscriptionsByTopic&Version=2010-03-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ListSubscriptionsByTopic`

<p>Returns a list of the subscriptions to a specific topic. Each call returns a limited list of subscriptions, up to 100. If there are more subscriptions, a <code>NextToken</code> is also returned. Use the <code>NextToken</code> parameter in a new <code>ListSubscriptionsByTopic</code> call to get further results.</p> <p>This action is throttled at 30 transactions per second (TPS).</p>

<h3 id="getlistsubscriptionsbytopic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TopicArn|query|string|true|The ARN of the topic for which you wish to find subscriptions.|
|NextToken|query|string|false|Token returned by the previous <code>ListSubscriptionsByTopic</code> request.|
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
|Action|ListSubscriptionsByTopic|
|Version|2010-03-31|

<h3 id="getlistsubscriptionsbytopic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSubscriptionsByTopicResponse](#schemalistsubscriptionsbytopicresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ListSubscriptionsByTopic

<a id="opIdPOST_ListSubscriptionsByTopic"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=ListSubscriptionsByTopic?Action=ListSubscriptionsByTopic&Version=2010-03-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"TopicArn":{},"NextToken":{}}'
```

`POST /#Action=ListSubscriptionsByTopic`

<p>Returns a list of the subscriptions to a specific topic. Each call returns a limited list of subscriptions, up to 100. If there are more subscriptions, a <code>NextToken</code> is also returned. Use the <code>NextToken</code> parameter in a new <code>ListSubscriptionsByTopic</code> call to get further results.</p> <p>This action is throttled at 30 transactions per second (TPS).</p>

> Body parameter

```json
{
  "TopicArn": {},
  "NextToken": {}
}
```

<h3 id="postlistsubscriptionsbytopic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
|body|body|[ListSubscriptionsByTopicInput](#schemalistsubscriptionsbytopicinput)|false|none|
|» TopicArn|body|object|true|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListSubscriptionsByTopic|
|Version|2010-03-31|

<h3 id="postlistsubscriptionsbytopic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSubscriptionsByTopicResponse](#schemalistsubscriptionsbytopicresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ListTagsForResource

<a id="opIdGET_ListTagsForResource"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=ListTagsForResource?ResourceArn=string&Action=ListTagsForResource&Version=2010-03-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ListTagsForResource`

List all tags added to the specified Amazon SNS topic. For an overview, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-tags.html">Amazon SNS Tags</a> in the <i>Amazon Simple Notification Service Developer Guide</i>.

<h3 id="getlisttagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceArn|query|string|true|The ARN of the topic for which to list tags.|
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
|Action|ListTagsForResource|
|Version|2010-03-31|

<h3 id="getlisttagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|TagPolicyException|[TagPolicyException](#schematagpolicyexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|484|484|ConcurrentAccessException|[ConcurrentAccessException](#schemaconcurrentaccessexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ListTagsForResource

<a id="opIdPOST_ListTagsForResource"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=ListTagsForResource?Action=ListTagsForResource&Version=2010-03-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ResourceArn":{}}'
```

`POST /#Action=ListTagsForResource`

List all tags added to the specified Amazon SNS topic. For an overview, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-tags.html">Amazon SNS Tags</a> in the <i>Amazon Simple Notification Service Developer Guide</i>.

> Body parameter

```json
{
  "ResourceArn": {}
}
```

<h3 id="postlisttagsforresource-parameters">Parameters</h3>

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
|body|body|[ListTagsForResourceRequest](#schemalisttagsforresourcerequest)|false|none|
|» ResourceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListTagsForResource|
|Version|2010-03-31|

<h3 id="postlisttagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|TagPolicyException|[TagPolicyException](#schematagpolicyexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|484|484|ConcurrentAccessException|[ConcurrentAccessException](#schemaconcurrentaccessexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ListTopics

<a id="opIdGET_ListTopics"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=ListTopics?Action=ListTopics&Version=2010-03-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ListTopics`

<p>Returns a list of the requester's topics. Each call returns a limited list of topics, up to 100. If there are more topics, a <code>NextToken</code> is also returned. Use the <code>NextToken</code> parameter in a new <code>ListTopics</code> call to get further results.</p> <p>This action is throttled at 30 transactions per second (TPS).</p>

<h3 id="getlisttopics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|Token returned by the previous <code>ListTopics</code> request.|
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
|Action|ListTopics|
|Version|2010-03-31|

<h3 id="getlisttopics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTopicsResponse](#schemalisttopicsresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ListTopics

<a id="opIdPOST_ListTopics"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=ListTopics?Action=ListTopics&Version=2010-03-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"NextToken":{}}'
```

`POST /#Action=ListTopics`

<p>Returns a list of the requester's topics. Each call returns a limited list of topics, up to 100. If there are more topics, a <code>NextToken</code> is also returned. Use the <code>NextToken</code> parameter in a new <code>ListTopics</code> call to get further results.</p> <p>This action is throttled at 30 transactions per second (TPS).</p>

> Body parameter

```json
{
  "NextToken": {}
}
```

<h3 id="postlisttopics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
|body|body|[ListTopicsInput](#schemalisttopicsinput)|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListTopics|
|Version|2010-03-31|

<h3 id="postlisttopics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTopicsResponse](#schemalisttopicsresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_OptInPhoneNumber

<a id="opIdGET_OptInPhoneNumber"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=OptInPhoneNumber?phoneNumber=string&Action=OptInPhoneNumber&Version=2010-03-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=OptInPhoneNumber`

<p>Use this request to opt in a phone number that is opted out, which enables you to resume sending SMS messages to the number.</p> <p>You can opt in a phone number only once every 30 days.</p>

<h3 id="getoptinphonenumber-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|phoneNumber|query|string|true|The phone number to opt in. Use E.164 format.|
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
|Action|OptInPhoneNumber|
|Version|2010-03-31|

<h3 id="getoptinphonenumber-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[OptInPhoneNumberResponse](#schemaoptinphonenumberresponse)|
|480|480|ThrottledException|[ThrottledException](#schemathrottledexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_OptInPhoneNumber

<a id="opIdPOST_OptInPhoneNumber"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=OptInPhoneNumber?Action=OptInPhoneNumber&Version=2010-03-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"phoneNumber":{}}'
```

`POST /#Action=OptInPhoneNumber`

<p>Use this request to opt in a phone number that is opted out, which enables you to resume sending SMS messages to the number.</p> <p>You can opt in a phone number only once every 30 days.</p>

> Body parameter

```json
{
  "phoneNumber": {}
}
```

<h3 id="postoptinphonenumber-parameters">Parameters</h3>

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
|body|body|[OptInPhoneNumberInput](#schemaoptinphonenumberinput)|false|none|
|» phoneNumber|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|OptInPhoneNumber|
|Version|2010-03-31|

<h3 id="postoptinphonenumber-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[OptInPhoneNumberResponse](#schemaoptinphonenumberresponse)|
|480|480|ThrottledException|[ThrottledException](#schemathrottledexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_Publish

<a id="opIdGET_Publish"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=Publish?Message=string&Action=Publish&Version=2010-03-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=Publish`

<p>Sends a message to an Amazon SNS topic, a text message (SMS message) directly to a phone number, or a message to a mobile platform endpoint (when you specify the <code>TargetArn</code>).</p> <p>If you send a message to a topic, Amazon SNS delivers the message to each endpoint that is subscribed to the topic. The format of the message depends on the notification protocol for each subscribed endpoint.</p> <p>When a <code>messageId</code> is returned, the message is saved and Amazon SNS immediately delivers it to subscribers.</p> <p>To use the <code>Publish</code> action for publishing a message to a mobile endpoint, such as an app on a Kindle device or mobile phone, you must specify the EndpointArn for the TargetArn parameter. The EndpointArn is returned when making a call with the <code>CreatePlatformEndpoint</code> action. </p> <p>For more information about formatting messages, see <a href="https://docs.aws.amazon.com/sns/latest/dg/mobile-push-send-custommessage.html">Send Custom Platform-Specific Payloads in Messages to Mobile Devices</a>. </p> <important> <p>You can publish messages only to topics and endpoints in the same Amazon Web Services Region.</p> </important>

<h3 id="getpublish-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TopicArn|query|string|false|<p>The topic you want to publish to.</p> <p>If you don't specify a value for the <code>TopicArn</code> parameter, you must specify a value for the <code>PhoneNumber</code> or <code>TargetArn</code> parameters.</p>|
|TargetArn|query|string|false|If you don't specify a value for the <code>TargetArn</code> parameter, you must specify a value for the <code>PhoneNumber</code> or <code>TopicArn</code> parameters.|
|PhoneNumber|query|string|false|<p>The phone number to which you want to deliver an SMS message. Use E.164 format.</p> <p>If you don't specify a value for the <code>PhoneNumber</code> parameter, you must specify a value for the <code>TargetArn</code> or <code>TopicArn</code> parameters.</p>|
|Message|query|string|true|<p>The message you want to send.</p> <p>If you are publishing to a topic and you want to send the same message to all transport protocols, include the text of the message as a String value. If you want to send different messages for each transport protocol, set the value of the <code>MessageStructure</code> parameter to <code>json</code> and use a JSON object for the <code>Message</code> parameter. </p> <p/> <p>Constraints:</p> <ul> <li> <p>With the exception of SMS, messages must be UTF-8 encoded strings and at most 256 KB in size (262,144 bytes, not 262,144 characters).</p> </li> <li> <p>For SMS, each message can contain up to 140 characters. This character limit depends on the encoding schema. For example, an SMS message can contain 160 GSM characters, 140 ASCII characters, or 70 UCS-2 characters.</p> <p>If you publish a message that exceeds this size limit, Amazon SNS sends the message as multiple messages, each fitting within the size limit. Messages aren't truncated mid-word but are cut off at whole-word boundaries.</p> <p>The total size limit for a single SMS <code>Publish</code> action is 1,600 characters.</p> </li> </ul> <p>JSON-specific constraints:</p> <ul> <li> <p>Keys in the JSON object that correspond to supported transport protocols must have simple JSON string values.</p> </li> <li> <p>The values will be parsed (unescaped) before they are used in outgoing messages.</p> </li> <li> <p>Outbound notifications are JSON encoded (meaning that the characters will be reescaped for sending).</p> </li> <li> <p>Values have a minimum length of 0 (the empty string, "", is allowed).</p> </li> <li> <p>Values have a maximum length bounded by the overall message size (so, including multiple protocols may limit message sizes).</p> </li> <li> <p>Non-string values will cause the key to be ignored.</p> </li> <li> <p>Keys that do not correspond to supported transport protocols are ignored.</p> </li> <li> <p>Duplicate keys are not allowed.</p> </li> <li> <p>Failure to parse or validate any key or value in the message will cause the <code>Publish</code> call to return an error (no partial delivery).</p> </li> </ul>|
|Subject|query|string|false|<p>Optional parameter to be used as the "Subject" line when the message is delivered to email endpoints. This field will also be included, if present, in the standard JSON messages delivered to other endpoints.</p> <p>Constraints: Subjects must be ASCII text that begins with a letter, number, or punctuation mark; must not include line breaks or control characters; and must be less than 100 characters long.</p>|
|MessageStructure|query|string|false|<p>Set <code>MessageStructure</code> to <code>json</code> if you want to send a different message for each protocol. For example, using one publish action, you can send a short message to your SMS subscribers and a longer message to your email subscribers. If you set <code>MessageStructure</code> to <code>json</code>, the value of the <code>Message</code> parameter must: </p> <ul> <li> <p>be a syntactically valid JSON object; and</p> </li> <li> <p>contain at least a top-level JSON key of "default" with a value that is a string.</p> </li> </ul> <p>You can define other top-level keys that define the message you want to send to a specific transport protocol (e.g., "http").</p> <p>Valid value: <code>json</code> </p>|
|MessageAttributes|query|object|false|Message attributes for Publish action.|
|MessageDeduplicationId|query|string|false|<p>This parameter applies only to FIFO (first-in-first-out) topics. The <code>MessageDeduplicationId</code> can contain up to 128 alphanumeric characters <code>(a-z, A-Z, 0-9)</code> and punctuation <code>(!"#$%&amp;'()*+,-./:;&lt;=&gt;?@[\]^_`{\|}~)</code>.</p> <p>Every message must have a unique <code>MessageDeduplicationId</code>, which is a token used for deduplication of sent messages. If a message with a particular <code>MessageDeduplicationId</code> is sent successfully, any message sent with the same <code>MessageDeduplicationId</code> during the 5-minute deduplication interval is treated as a duplicate. </p> <p>If the topic has <code>ContentBasedDeduplication</code> set, the system generates a <code>MessageDeduplicationId</code> based on the contents of the message. Your <code>MessageDeduplicationId</code> overrides the generated one.</p>|
|MessageGroupId|query|string|false|<p>This parameter applies only to FIFO (first-in-first-out) topics. The <code>MessageGroupId</code> can contain up to 128 alphanumeric characters <code>(a-z, A-Z, 0-9)</code> and punctuation <code>(!"#$%&amp;'()*+,-./:;&lt;=&gt;?@[\]^_`{\|}~)</code>.</p> <p>The <code>MessageGroupId</code> is a tag that specifies that a message belongs to a specific message group. Messages that belong to the same message group are processed in a FIFO manner (however, messages in different message groups might be processed out of order). Every message must include a <code>MessageGroupId</code>.</p>|
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
|Action|Publish|
|Version|2010-03-31|

<h3 id="getpublish-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PublishResponse](#schemapublishresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|EndpointDisabledException|[EndpointDisabledException](#schemaendpointdisabledexception)|
|485|485|PlatformApplicationDisabledException|[PlatformApplicationDisabledException](#schemaplatformapplicationdisabledexception)|
|486|486|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|487|487|KMSDisabledException|[KMSDisabledException](#schemakmsdisabledexception)|
|488|488|KMSInvalidStateException|[KMSInvalidStateException](#schemakmsinvalidstateexception)|
|489|489|KMSNotFoundException|[KMSNotFoundException](#schemakmsnotfoundexception)|
|490|490|KMSOptInRequired|[KMSOptInRequired](#schemakmsoptinrequired)|
|491|491|KMSThrottlingException|[KMSThrottlingException](#schemakmsthrottlingexception)|
|492|492|KMSAccessDeniedException|[KMSAccessDeniedException](#schemakmsaccessdeniedexception)|
|493|493|InvalidSecurityException|[InvalidSecurityException](#schemainvalidsecurityexception)|
|494|494|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_Publish

<a id="opIdPOST_Publish"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=Publish?Action=Publish&Version=2010-03-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"TopicArn":{},"TargetArn":{},"PhoneNumber":{},"Message":{},"Subject":{},"MessageStructure":{},"MessageAttributes":{"property1":{"DataType":{},"StringValue":{},"BinaryValue":{}},"property2":{"DataType":{},"StringValue":{},"BinaryValue":{}}},"MessageDeduplicationId":{},"MessageGroupId":{}}'
```

`POST /#Action=Publish`

<p>Sends a message to an Amazon SNS topic, a text message (SMS message) directly to a phone number, or a message to a mobile platform endpoint (when you specify the <code>TargetArn</code>).</p> <p>If you send a message to a topic, Amazon SNS delivers the message to each endpoint that is subscribed to the topic. The format of the message depends on the notification protocol for each subscribed endpoint.</p> <p>When a <code>messageId</code> is returned, the message is saved and Amazon SNS immediately delivers it to subscribers.</p> <p>To use the <code>Publish</code> action for publishing a message to a mobile endpoint, such as an app on a Kindle device or mobile phone, you must specify the EndpointArn for the TargetArn parameter. The EndpointArn is returned when making a call with the <code>CreatePlatformEndpoint</code> action. </p> <p>For more information about formatting messages, see <a href="https://docs.aws.amazon.com/sns/latest/dg/mobile-push-send-custommessage.html">Send Custom Platform-Specific Payloads in Messages to Mobile Devices</a>. </p> <important> <p>You can publish messages only to topics and endpoints in the same Amazon Web Services Region.</p> </important>

> Body parameter

```json
{
  "TopicArn": {},
  "TargetArn": {},
  "PhoneNumber": {},
  "Message": {},
  "Subject": {},
  "MessageStructure": {},
  "MessageAttributes": {
    "property1": {
      "DataType": {},
      "StringValue": {},
      "BinaryValue": {}
    },
    "property2": {
      "DataType": {},
      "StringValue": {},
      "BinaryValue": {}
    }
  },
  "MessageDeduplicationId": {},
  "MessageGroupId": {}
}
```

<h3 id="postpublish-parameters">Parameters</h3>

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
|body|body|[PublishInput](#schemapublishinput)|false|none|
|» TopicArn|body|object|false|none|
|» TargetArn|body|object|false|none|
|» PhoneNumber|body|object|false|none|
|» Message|body|object|true|none|
|» Subject|body|object|false|none|
|» MessageStructure|body|object|false|none|
|» MessageAttributes|body|object|false|none|
|» » **additionalProperties**|body|[MessageAttributeValue](#schemamessageattributevalue)|false|<p>The user-specified message attribute value. For string data types, the value attribute has the same restrictions on the content as the message body. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/api/API_Publish.html">Publish</a>.</p> <p>Name, type, and value must not be empty or null. In addition, the message body should not be empty or null. All parts of the message attribute, including name, type, and value, are included in the message size restriction, which is currently 256 KB (262,144 bytes). For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMessageAttributes.html">Amazon SNS message attributes</a> and <a href="https://docs.aws.amazon.com/sns/latest/dg/sms_publish-to-phone.html">Publishing to a mobile phone</a> in the <i>Amazon SNS Developer Guide.</i> </p>|
|» MessageDeduplicationId|body|object|false|none|
|» MessageGroupId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|Publish|
|Version|2010-03-31|

<h3 id="postpublish-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PublishResponse](#schemapublishresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|EndpointDisabledException|[EndpointDisabledException](#schemaendpointdisabledexception)|
|485|485|PlatformApplicationDisabledException|[PlatformApplicationDisabledException](#schemaplatformapplicationdisabledexception)|
|486|486|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|487|487|KMSDisabledException|[KMSDisabledException](#schemakmsdisabledexception)|
|488|488|KMSInvalidStateException|[KMSInvalidStateException](#schemakmsinvalidstateexception)|
|489|489|KMSNotFoundException|[KMSNotFoundException](#schemakmsnotfoundexception)|
|490|490|KMSOptInRequired|[KMSOptInRequired](#schemakmsoptinrequired)|
|491|491|KMSThrottlingException|[KMSThrottlingException](#schemakmsthrottlingexception)|
|492|492|KMSAccessDeniedException|[KMSAccessDeniedException](#schemakmsaccessdeniedexception)|
|493|493|InvalidSecurityException|[InvalidSecurityException](#schemainvalidsecurityexception)|
|494|494|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_PublishBatch

<a id="opIdGET_PublishBatch"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=PublishBatch?TopicArn=string&PublishBatchRequestEntries=%7B%22Id%22%3A%7B%7D%2C%22Message%22%3A%7B%7D%2C%22Subject%22%3A%7B%7D%2C%22MessageStructure%22%3A%7B%7D%2C%22MessageAttributes%22%3A%7B%22property1%22%3A%7B%22DataType%22%3A%7B%7D%2C%22StringValue%22%3A%7B%7D%2C%22BinaryValue%22%3A%7B%7D%7D%2C%22property2%22%3A%7B%22DataType%22%3A%7B%7D%2C%22StringValue%22%3A%7B%7D%2C%22BinaryValue%22%3A%7B%7D%7D%7D%2C%22MessageDeduplicationId%22%3A%7B%7D%2C%22MessageGroupId%22%3A%7B%7D%7D&Action=PublishBatch&Version=2010-03-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=PublishBatch`

<p>Publishes up to ten messages to the specified topic. This is a batch version of <code>Publish</code>. For FIFO topics, multiple messages within a single batch are published in the order they are sent, and messages are deduplicated within the batch and across batches for 5 minutes.</p> <p>The result of publishing each message is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of <code>200</code>.</p> <p>The maximum allowed individual message size and the maximum total payload size (the sum of the individual lengths of all of the batched messages) are both 256 KB (262,144 bytes). </p> <p>Some actions take lists of parameters. These lists are specified using the <code>param.n</code> notation. Values of <code>n</code> are integers starting from 1. For example, a parameter list with two elements looks like this: </p> <p>&amp;AttributeName.1=first</p> <p>&amp;AttributeName.2=second</p> <p>If you send a batch message to a topic, Amazon SNS publishes the batch message to each endpoint that is subscribed to the topic. The format of the batch message depends on the notification protocol for each subscribed endpoint.</p> <p>When a <code>messageId</code> is returned, the batch message is saved and Amazon SNS immediately delivers the message to subscribers.</p>

<h3 id="getpublishbatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TopicArn|query|string|true|The Amazon resource name (ARN) of the topic you want to batch publish to.|
|PublishBatchRequestEntries|query|[[PublishBatchRequestEntry](#schemapublishbatchrequestentry)]|true|A list of <code>PublishBatch</code> request entries to be sent to the SNS topic.|
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
|Action|PublishBatch|
|Version|2010-03-31|

<h3 id="getpublishbatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PublishBatchResponse](#schemapublishbatchresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|EndpointDisabledException|[EndpointDisabledException](#schemaendpointdisabledexception)|
|485|485|PlatformApplicationDisabledException|[PlatformApplicationDisabledException](#schemaplatformapplicationdisabledexception)|
|486|486|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|487|487|BatchEntryIdsNotDistinctException|[BatchEntryIdsNotDistinctException](#schemabatchentryidsnotdistinctexception)|
|488|488|BatchRequestTooLongException|[BatchRequestTooLongException](#schemabatchrequesttoolongexception)|
|489|489|EmptyBatchRequestException|[EmptyBatchRequestException](#schemaemptybatchrequestexception)|
|490|490|InvalidBatchEntryIdException|[InvalidBatchEntryIdException](#schemainvalidbatchentryidexception)|
|491|491|TooManyEntriesInBatchRequestException|[TooManyEntriesInBatchRequestException](#schematoomanyentriesinbatchrequestexception)|
|492|492|KMSDisabledException|[KMSDisabledException](#schemakmsdisabledexception)|
|493|493|KMSInvalidStateException|[KMSInvalidStateException](#schemakmsinvalidstateexception)|
|494|494|KMSNotFoundException|[KMSNotFoundException](#schemakmsnotfoundexception)|
|495|495|KMSOptInRequired|[KMSOptInRequired](#schemakmsoptinrequired)|
|496|496|KMSThrottlingException|[KMSThrottlingException](#schemakmsthrottlingexception)|
|497|497|KMSAccessDeniedException|[KMSAccessDeniedException](#schemakmsaccessdeniedexception)|
|498|498|InvalidSecurityException|[InvalidSecurityException](#schemainvalidsecurityexception)|
|499|499|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_PublishBatch

<a id="opIdPOST_PublishBatch"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=PublishBatch?Action=PublishBatch&Version=2010-03-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"TopicArn":{},"PublishBatchRequestEntries":{}}'
```

`POST /#Action=PublishBatch`

<p>Publishes up to ten messages to the specified topic. This is a batch version of <code>Publish</code>. For FIFO topics, multiple messages within a single batch are published in the order they are sent, and messages are deduplicated within the batch and across batches for 5 minutes.</p> <p>The result of publishing each message is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of <code>200</code>.</p> <p>The maximum allowed individual message size and the maximum total payload size (the sum of the individual lengths of all of the batched messages) are both 256 KB (262,144 bytes). </p> <p>Some actions take lists of parameters. These lists are specified using the <code>param.n</code> notation. Values of <code>n</code> are integers starting from 1. For example, a parameter list with two elements looks like this: </p> <p>&amp;AttributeName.1=first</p> <p>&amp;AttributeName.2=second</p> <p>If you send a batch message to a topic, Amazon SNS publishes the batch message to each endpoint that is subscribed to the topic. The format of the batch message depends on the notification protocol for each subscribed endpoint.</p> <p>When a <code>messageId</code> is returned, the batch message is saved and Amazon SNS immediately delivers the message to subscribers.</p>

> Body parameter

```json
{
  "TopicArn": {},
  "PublishBatchRequestEntries": {}
}
```

<h3 id="postpublishbatch-parameters">Parameters</h3>

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
|body|body|[PublishBatchInput](#schemapublishbatchinput)|false|none|
|» TopicArn|body|object|true|none|
|» PublishBatchRequestEntries|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|PublishBatch|
|Version|2010-03-31|

<h3 id="postpublishbatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PublishBatchResponse](#schemapublishbatchresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|EndpointDisabledException|[EndpointDisabledException](#schemaendpointdisabledexception)|
|485|485|PlatformApplicationDisabledException|[PlatformApplicationDisabledException](#schemaplatformapplicationdisabledexception)|
|486|486|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|487|487|BatchEntryIdsNotDistinctException|[BatchEntryIdsNotDistinctException](#schemabatchentryidsnotdistinctexception)|
|488|488|BatchRequestTooLongException|[BatchRequestTooLongException](#schemabatchrequesttoolongexception)|
|489|489|EmptyBatchRequestException|[EmptyBatchRequestException](#schemaemptybatchrequestexception)|
|490|490|InvalidBatchEntryIdException|[InvalidBatchEntryIdException](#schemainvalidbatchentryidexception)|
|491|491|TooManyEntriesInBatchRequestException|[TooManyEntriesInBatchRequestException](#schematoomanyentriesinbatchrequestexception)|
|492|492|KMSDisabledException|[KMSDisabledException](#schemakmsdisabledexception)|
|493|493|KMSInvalidStateException|[KMSInvalidStateException](#schemakmsinvalidstateexception)|
|494|494|KMSNotFoundException|[KMSNotFoundException](#schemakmsnotfoundexception)|
|495|495|KMSOptInRequired|[KMSOptInRequired](#schemakmsoptinrequired)|
|496|496|KMSThrottlingException|[KMSThrottlingException](#schemakmsthrottlingexception)|
|497|497|KMSAccessDeniedException|[KMSAccessDeniedException](#schemakmsaccessdeniedexception)|
|498|498|InvalidSecurityException|[InvalidSecurityException](#schemainvalidsecurityexception)|
|499|499|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_PutDataProtectionPolicy

<a id="opIdGET_PutDataProtectionPolicy"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=PutDataProtectionPolicy?ResourceArn=string&DataProtectionPolicy=string&Action=PutDataProtectionPolicy&Version=2010-03-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=PutDataProtectionPolicy`

Adds or updates an inline policy document that is stored in the specified Amazon SNS topic.

<h3 id="getputdataprotectionpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceArn|query|string|true|<p>The ARN of the topic whose <code>DataProtectionPolicy</code> you want to add or update.</p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the Amazon Web Services General Reference.</p>|
|DataProtectionPolicy|query|string|true|<p>The JSON serialization of the topic's <code>DataProtectionPolicy</code>.</p> <p>The <code>DataProtectionPolicy</code> must be in JSON string format.</p> <p>Length Constraints: Maximum length of 30,720.</p>|
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
|Action|PutDataProtectionPolicy|
|Version|2010-03-31|

<h3 id="getputdataprotectionpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|484|484|InvalidSecurityException|[InvalidSecurityException](#schemainvalidsecurityexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_PutDataProtectionPolicy

<a id="opIdPOST_PutDataProtectionPolicy"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=PutDataProtectionPolicy?Action=PutDataProtectionPolicy&Version=2010-03-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ResourceArn":{},"DataProtectionPolicy":{}}'
```

`POST /#Action=PutDataProtectionPolicy`

Adds or updates an inline policy document that is stored in the specified Amazon SNS topic.

> Body parameter

```json
{
  "ResourceArn": {},
  "DataProtectionPolicy": {}
}
```

<h3 id="postputdataprotectionpolicy-parameters">Parameters</h3>

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
|body|body|[PutDataProtectionPolicyInput](#schemaputdataprotectionpolicyinput)|false|none|
|» ResourceArn|body|object|true|none|
|» DataProtectionPolicy|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|PutDataProtectionPolicy|
|Version|2010-03-31|

<h3 id="postputdataprotectionpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|484|484|InvalidSecurityException|[InvalidSecurityException](#schemainvalidsecurityexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_RemovePermission

<a id="opIdGET_RemovePermission"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=RemovePermission?TopicArn=string&Label=string&Action=RemovePermission&Version=2010-03-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=RemovePermission`

<p>Removes a statement from a topic's access control policy.</p> <note> <p>To remove the ability to change topic permissions, you must deny permissions to the <code>AddPermission</code>, <code>RemovePermission</code>, and <code>SetTopicAttributes</code> actions in your IAM policy.</p> </note>

<h3 id="getremovepermission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TopicArn|query|string|true|The ARN of the topic whose access control policy you wish to modify.|
|Label|query|string|true|The unique label of the statement you want to remove.|
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
|Action|RemovePermission|
|Version|2010-03-31|

<h3 id="getremovepermission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_RemovePermission

<a id="opIdPOST_RemovePermission"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=RemovePermission?Action=RemovePermission&Version=2010-03-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"TopicArn":{},"Label":{}}'
```

`POST /#Action=RemovePermission`

<p>Removes a statement from a topic's access control policy.</p> <note> <p>To remove the ability to change topic permissions, you must deny permissions to the <code>AddPermission</code>, <code>RemovePermission</code>, and <code>SetTopicAttributes</code> actions in your IAM policy.</p> </note>

> Body parameter

```json
{
  "TopicArn": {},
  "Label": {}
}
```

<h3 id="postremovepermission-parameters">Parameters</h3>

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
|body|body|[RemovePermissionInput](#schemaremovepermissioninput)|false|none|
|» TopicArn|body|object|true|none|
|» Label|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|RemovePermission|
|Version|2010-03-31|

<h3 id="postremovepermission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_SetEndpointAttributes

<a id="opIdGET_SetEndpointAttributes"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=SetEndpointAttributes?EndpointArn=string&property1=string&property2=string&Action=SetEndpointAttributes&Version=2010-03-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=SetEndpointAttributes`

Sets the attributes for an endpoint for a device on one of the supported push notification services, such as GCM (Firebase Cloud Messaging) and APNS. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. 

<h3 id="getsetendpointattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EndpointArn|query|string|true|EndpointArn used for SetEndpointAttributes action.|
|Attributes|query|object|true|<p>A map of the endpoint attributes. Attributes in this map include the following:</p> <ul> <li> <p> <code>CustomUserData</code> – arbitrary user data to associate with the endpoint. Amazon SNS does not use this data. The data must be in UTF-8 format and less than 2KB.</p> </li> <li> <p> <code>Enabled</code> – flag that enables/disables delivery to the endpoint. Amazon SNS will set this to false when a notification service indicates to Amazon SNS that the endpoint is invalid. Users can set it back to true, typically after updating Token.</p> </li> <li> <p> <code>Token</code> – device token, also referred to as a registration id, for an app and mobile device. This is returned from the notification service when an app and mobile device are registered with the notification service.</p> </li> </ul>|
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
|Action|SetEndpointAttributes|
|Version|2010-03-31|

<h3 id="getsetendpointattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_SetEndpointAttributes

<a id="opIdPOST_SetEndpointAttributes"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=SetEndpointAttributes?Action=SetEndpointAttributes&Version=2010-03-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"EndpointArn":{},"Attributes":{"property1":"string","property2":"string"}}'
```

`POST /#Action=SetEndpointAttributes`

Sets the attributes for an endpoint for a device on one of the supported push notification services, such as GCM (Firebase Cloud Messaging) and APNS. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. 

> Body parameter

```json
{
  "EndpointArn": {},
  "Attributes": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="postsetendpointattributes-parameters">Parameters</h3>

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
|body|body|[SetEndpointAttributesInput](#schemasetendpointattributesinput)|false|none|
|» EndpointArn|body|object|true|none|
|» Attributes|body|object|true|none|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|SetEndpointAttributes|
|Version|2010-03-31|

<h3 id="postsetendpointattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_SetPlatformApplicationAttributes

<a id="opIdGET_SetPlatformApplicationAttributes"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=SetPlatformApplicationAttributes?PlatformApplicationArn=string&property1=string&property2=string&Action=SetPlatformApplicationAttributes&Version=2010-03-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=SetPlatformApplicationAttributes`

Sets the attributes of the platform application object for the supported push notification services, such as APNS and GCM (Firebase Cloud Messaging). For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. For information on configuring attributes for message delivery status, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-msg-status.html">Using Amazon SNS Application Attributes for Message Delivery Status</a>. 

<h3 id="getsetplatformapplicationattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PlatformApplicationArn|query|string|true|PlatformApplicationArn for SetPlatformApplicationAttributes action.|
|Attributes|query|object|true|<p>A map of the platform application attributes. Attributes in this map include the following:</p> <ul> <li> <p> <code>PlatformCredential</code> – The credential received from the notification service.</p> <ul> <li> <p>For ADM, <code>PlatformCredential</code>is client secret.</p> </li> <li> <p>For Apple Services using certificate credentials, <code>PlatformCredential</code> is private key.</p> </li> <li> <p>For Apple Services using token credentials, <code>PlatformCredential</code> is signing key.</p> </li> <li> <p>For GCM (Firebase Cloud Messaging), <code>PlatformCredential</code> is API key. </p> </li> </ul> </li> </ul> <ul> <li> <p> <code>PlatformPrincipal</code> – The principal received from the notification service.</p> <ul> <li> <p>For ADM, <code>PlatformPrincipal</code>is client id.</p> </li> <li> <p>For Apple Services using certificate credentials, <code>PlatformPrincipal</code> is SSL certificate.</p> </li> <li> <p>For Apple Services using token credentials, <code>PlatformPrincipal</code> is signing key ID.</p> </li> <li> <p>For GCM (Firebase Cloud Messaging), there is no <code>PlatformPrincipal</code>. </p> </li> </ul> </li> </ul> <ul> <li> <p> <code>EventEndpointCreated</code> – Topic ARN to which <code>EndpointCreated</code> event notifications are sent.</p> </li> <li> <p> <code>EventEndpointDeleted</code> – Topic ARN to which <code>EndpointDeleted</code> event notifications are sent.</p> </li> <li> <p> <code>EventEndpointUpdated</code> – Topic ARN to which <code>EndpointUpdate</code> event notifications are sent.</p> </li> <li> <p> <code>EventDeliveryFailure</code> – Topic ARN to which <code>DeliveryFailure</code> event notifications are sent upon Direct Publish delivery failure (permanent) to one of the application's endpoints.</p> </li> <li> <p> <code>SuccessFeedbackRoleArn</code> – IAM role ARN used to give Amazon SNS write access to use CloudWatch Logs on your behalf.</p> </li> <li> <p> <code>FailureFeedbackRoleArn</code> – IAM role ARN used to give Amazon SNS write access to use CloudWatch Logs on your behalf.</p> </li> <li> <p> <code>SuccessFeedbackSampleRate</code> – Sample rate percentage (0-100) of successfully delivered messages.</p> </li> </ul> <p>The following attributes only apply to <code>APNs</code> token-based authentication:</p> <ul> <li> <p> <code>ApplePlatformTeamID</code> – The identifier that's assigned to your Apple developer account team.</p> </li> <li> <p> <code>ApplePlatformBundleID</code> – The bundle identifier that's assigned to your iOS app.</p> </li> </ul>|
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
|Action|SetPlatformApplicationAttributes|
|Version|2010-03-31|

<h3 id="getsetplatformapplicationattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_SetPlatformApplicationAttributes

<a id="opIdPOST_SetPlatformApplicationAttributes"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=SetPlatformApplicationAttributes?Action=SetPlatformApplicationAttributes&Version=2010-03-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"PlatformApplicationArn":{},"Attributes":{"property1":"string","property2":"string"}}'
```

`POST /#Action=SetPlatformApplicationAttributes`

Sets the attributes of the platform application object for the supported push notification services, such as APNS and GCM (Firebase Cloud Messaging). For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. For information on configuring attributes for message delivery status, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-msg-status.html">Using Amazon SNS Application Attributes for Message Delivery Status</a>. 

> Body parameter

```json
{
  "PlatformApplicationArn": {},
  "Attributes": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="postsetplatformapplicationattributes-parameters">Parameters</h3>

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
|body|body|[SetPlatformApplicationAttributesInput](#schemasetplatformapplicationattributesinput)|false|none|
|» PlatformApplicationArn|body|object|true|none|
|» Attributes|body|object|true|none|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|SetPlatformApplicationAttributes|
|Version|2010-03-31|

<h3 id="postsetplatformapplicationattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_SetSMSAttributes

<a id="opIdGET_SetSMSAttributes"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=SetSMSAttributes?property1=string&property2=string&Action=SetSMSAttributes&Version=2010-03-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=SetSMSAttributes`

<p>Use this request to set the default settings for sending SMS messages and receiving daily SMS usage reports.</p> <p>You can override some of these settings for a single message when you use the <code>Publish</code> action with the <code>MessageAttributes.entry.N</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sms_publish-to-phone.html">Publishing to a mobile phone</a> in the <i>Amazon SNS Developer Guide</i>.</p> <note> <p>To use this operation, you must grant the Amazon SNS service principal (<code>sns.amazonaws.com</code>) permission to perform the <code>s3:ListBucket</code> action. </p> </note>

<h3 id="getsetsmsattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|attributes|query|object|true|<p>The default settings for sending SMS messages from your Amazon Web Services account. You can set values for the following attribute names:</p> <p> <code>MonthlySpendLimit</code> – The maximum amount in USD that you are willing to spend each month to send SMS messages. When Amazon SNS determines that sending an SMS message would incur a cost that exceeds this limit, it stops sending SMS messages within minutes.</p> <important> <p>Amazon SNS stops sending SMS messages within minutes of the limit being crossed. During that interval, if you continue to send SMS messages, you will incur costs that exceed your limit.</p> </important> <p>By default, the spend limit is set to the maximum allowed by Amazon SNS. If you want to raise the limit, submit an <a href="https://console.aws.amazon.com/support/home#/case/create?issueType=service-limit-increase&amp;limitType=service-code-sns">SNS Limit Increase case</a>. For <b>New limit value</b>, enter your desired monthly spend limit. In the <b>Use Case Description</b> field, explain that you are requesting an SMS monthly spend limit increase.</p> <p> <code>DeliveryStatusIAMRole</code> – The ARN of the IAM role that allows Amazon SNS to write logs about SMS deliveries in CloudWatch Logs. For each SMS message that you send, Amazon SNS writes a log that includes the message price, the success or failure status, the reason for failure (if the message failed), the message dwell time, and other information.</p> <p> <code>DeliveryStatusSuccessSamplingRate</code> – The percentage of successful SMS deliveries for which Amazon SNS will write logs in CloudWatch Logs. The value can be an integer from 0 - 100. For example, to write logs only for failed deliveries, set this value to <code>0</code>. To write logs for 10% of your successful deliveries, set it to <code>10</code>.</p> <p> <code>DefaultSenderID</code> – A string, such as your business brand, that is displayed as the sender on the receiving device. Support for sender IDs varies by country. The sender ID can be 1 - 11 alphanumeric characters, and it must contain at least one letter.</p> <p> <code>DefaultSMSType</code> – The type of SMS message that you will send by default. You can assign the following values:</p> <ul> <li> <p> <code>Promotional</code> – (Default) Noncritical messages, such as marketing messages. Amazon SNS optimizes the message delivery to incur the lowest cost.</p> </li> <li> <p> <code>Transactional</code> – Critical messages that support customer transactions, such as one-time passcodes for multi-factor authentication. Amazon SNS optimizes the message delivery to achieve the highest reliability.</p> </li> </ul> <p> <code>UsageReportS3Bucket</code> – The name of the Amazon S3 bucket to receive daily SMS usage reports from Amazon SNS. Each day, Amazon SNS will deliver a usage report as a CSV file to the bucket. The report includes the following information for each SMS message that was successfully delivered by your Amazon Web Services account:</p> <ul> <li> <p>Time that the message was published (in UTC)</p> </li> <li> <p>Message ID</p> </li> <li> <p>Destination phone number</p> </li> <li> <p>Message type</p> </li> <li> <p>Delivery status</p> </li> <li> <p>Message price (in USD)</p> </li> <li> <p>Part number (a message is split into multiple parts if it is too long for a single message)</p> </li> <li> <p>Total number of parts</p> </li> </ul> <p>To receive the report, the bucket must have a policy that allows the Amazon SNS service principal to perform the <code>s3:PutObject</code> and <code>s3:GetBucketLocation</code> actions.</p> <p>For an example bucket policy and usage report, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sms_stats.html">Monitoring SMS Activity</a> in the <i>Amazon SNS Developer Guide</i>.</p>|
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
|Action|SetSMSAttributes|
|Version|2010-03-31|

<h3 id="getsetsmsattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SetSMSAttributesResponse](#schemasetsmsattributesresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ThrottledException|[ThrottledException](#schemathrottledexception)|
|482|482|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|483|483|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_SetSMSAttributes

<a id="opIdPOST_SetSMSAttributes"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=SetSMSAttributes?Action=SetSMSAttributes&Version=2010-03-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"attributes":{"property1":"string","property2":"string"}}'
```

`POST /#Action=SetSMSAttributes`

<p>Use this request to set the default settings for sending SMS messages and receiving daily SMS usage reports.</p> <p>You can override some of these settings for a single message when you use the <code>Publish</code> action with the <code>MessageAttributes.entry.N</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sms_publish-to-phone.html">Publishing to a mobile phone</a> in the <i>Amazon SNS Developer Guide</i>.</p> <note> <p>To use this operation, you must grant the Amazon SNS service principal (<code>sns.amazonaws.com</code>) permission to perform the <code>s3:ListBucket</code> action. </p> </note>

> Body parameter

```json
{
  "attributes": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="postsetsmsattributes-parameters">Parameters</h3>

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
|body|body|[SetSMSAttributesInput](#schemasetsmsattributesinput)|false|none|
|» attributes|body|object|true|none|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|SetSMSAttributes|
|Version|2010-03-31|

<h3 id="postsetsmsattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SetSMSAttributesResponse](#schemasetsmsattributesresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ThrottledException|[ThrottledException](#schemathrottledexception)|
|482|482|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|483|483|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_SetSubscriptionAttributes

<a id="opIdGET_SetSubscriptionAttributes"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=SetSubscriptionAttributes?SubscriptionArn=string&AttributeName=string&Action=SetSubscriptionAttributes&Version=2010-03-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=SetSubscriptionAttributes`

Allows a subscription owner to set an attribute of the subscription to a new value.

<h3 id="getsetsubscriptionattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SubscriptionArn|query|string|true|The ARN of the subscription to modify.|
|AttributeName|query|string|true|<p>A map of attributes with their corresponding values.</p> <p>The following lists the names, descriptions, and values of the special request parameters that this action uses:</p> <ul> <li> <p> <code>DeliveryPolicy</code> – The policy that defines how Amazon SNS retries failed deliveries to HTTP/S endpoints.</p> </li> <li> <p> <code>FilterPolicy</code> – The simple JSON object that lets your subscriber receive only a subset of messages, rather than receiving every message published to the topic.</p> </li> <li> <p> <code>FilterPolicyScope</code> – This attribute lets you choose the filtering scope by using one of the following string value types:</p> <ul> <li> <p> <code>MessageAttributes</code> (default) – The filter is applied on the message attributes.</p> </li> <li> <p> <code>MessageBody</code> – The filter is applied on the message body.</p> </li> </ul> </li> <li> <p> <code>RawMessageDelivery</code> – When set to <code>true</code>, enables raw message delivery to Amazon SQS or HTTP/S endpoints. This eliminates the need for the endpoints to process JSON formatting, which is otherwise created for Amazon SNS metadata.</p> </li> <li> <p> <code>RedrivePolicy</code> – When specified, sends undeliverable messages to the specified Amazon SQS dead-letter queue. Messages that can't be delivered due to client errors (for example, when the subscribed endpoint is unreachable) or server errors (for example, when the service that powers the subscribed endpoint becomes unavailable) are held in the dead-letter queue for further analysis or reprocessing.</p> </li> </ul> <p>The following attribute applies only to Amazon Kinesis Data Firehose delivery stream subscriptions:</p> <ul> <li> <p> <code>SubscriptionRoleArn</code> – The ARN of the IAM role that has the following:</p> <ul> <li> <p>Permission to write to the Kinesis Data Firehose delivery stream</p> </li> <li> <p>Amazon SNS listed as a trusted entity</p> </li> </ul> <p>Specifying a valid ARN for this attribute is required for Kinesis Data Firehose delivery stream subscriptions. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-firehose-as-subscriber.html">Fanout to Kinesis Data Firehose delivery streams</a> in the <i>Amazon SNS Developer Guide</i>.</p> </li> </ul>|
|AttributeValue|query|string|false|The new value for the attribute in JSON format.|
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
|Action|SetSubscriptionAttributes|
|Version|2010-03-31|

<h3 id="getsetsubscriptionattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|FilterPolicyLimitExceededException|[FilterPolicyLimitExceededException](#schemafilterpolicylimitexceededexception)|
|482|482|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_SetSubscriptionAttributes

<a id="opIdPOST_SetSubscriptionAttributes"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=SetSubscriptionAttributes?Action=SetSubscriptionAttributes&Version=2010-03-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"SubscriptionArn":{},"AttributeName":{},"AttributeValue":{}}'
```

`POST /#Action=SetSubscriptionAttributes`

Allows a subscription owner to set an attribute of the subscription to a new value.

> Body parameter

```json
{
  "SubscriptionArn": {},
  "AttributeName": {},
  "AttributeValue": {}
}
```

<h3 id="postsetsubscriptionattributes-parameters">Parameters</h3>

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
|body|body|[SetSubscriptionAttributesInput](#schemasetsubscriptionattributesinput)|false|none|
|» SubscriptionArn|body|object|true|none|
|» AttributeName|body|object|true|none|
|» AttributeValue|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|SetSubscriptionAttributes|
|Version|2010-03-31|

<h3 id="postsetsubscriptionattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|FilterPolicyLimitExceededException|[FilterPolicyLimitExceededException](#schemafilterpolicylimitexceededexception)|
|482|482|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_SetTopicAttributes

<a id="opIdGET_SetTopicAttributes"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=SetTopicAttributes?TopicArn=string&AttributeName=string&Action=SetTopicAttributes&Version=2010-03-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=SetTopicAttributes`

<p>Allows a topic owner to set an attribute of the topic to a new value.</p> <note> <p>To remove the ability to change topic permissions, you must deny permissions to the <code>AddPermission</code>, <code>RemovePermission</code>, and <code>SetTopicAttributes</code> actions in your IAM policy.</p> </note>

<h3 id="getsettopicattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TopicArn|query|string|true|The ARN of the topic to modify.|
|AttributeName|query|string|true|<p>A map of attributes with their corresponding values.</p> <p>The following lists the names, descriptions, and values of the special request parameters that the <code>SetTopicAttributes</code> action uses:</p> <ul> <li> <p> <code>ApplicationSuccessFeedbackRoleArn</code> – Indicates failed message delivery status for an Amazon SNS topic that is subscribed to a platform application endpoint.</p> </li> <li> <p> <code>DeliveryPolicy</code> – The policy that defines how Amazon SNS retries failed deliveries to HTTP/S endpoints.</p> </li> <li> <p> <code>DisplayName</code> – The display name to use for a topic with SMS subscriptions.</p> </li> <li> <p> <code>Policy</code> – The policy that defines who can access your topic. By default, only the topic owner can publish or subscribe to the topic.</p> </li> <li> <p> <code>TracingConfig</code> – Tracing mode of an Amazon SNS topic. By default <code>TracingConfig</code> is set to <code>PassThrough</code>, and the topic passes through the tracing header it receives from an Amazon SNS publisher to its subscriptions. If set to <code>Active</code>, Amazon SNS will vend X-Ray segment data to topic owner account if the sampled flag in the tracing header is true. This is only supported on standard topics.</p> </li> <li> <p>HTTP</p> <ul> <li> <p> <code>HTTPSuccessFeedbackRoleArn</code> – Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an HTTP endpoint. </p> </li> <li> <p> <code>HTTPSuccessFeedbackSampleRate</code> – Indicates percentage of successful messages to sample for an Amazon SNS topic that is subscribed to an HTTP endpoint.</p> </li> <li> <p> <code>HTTPFailureFeedbackRoleArn</code> – Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an HTTP endpoint.</p> </li> </ul> </li> <li> <p>Amazon Kinesis Data Firehose</p> <ul> <li> <p> <code>FirehoseSuccessFeedbackRoleArn</code> – Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an Amazon Kinesis Data Firehose endpoint.</p> </li> <li> <p> <code>FirehoseSuccessFeedbackSampleRate</code> – Indicates percentage of successful messages to sample for an Amazon SNS topic that is subscribed to an Amazon Kinesis Data Firehose endpoint.</p> </li> <li> <p> <code>FirehoseFailureFeedbackRoleArn</code> – Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an Amazon Kinesis Data Firehose endpoint. </p> </li> </ul> </li> <li> <p>Lambda</p> <ul> <li> <p> <code>LambdaSuccessFeedbackRoleArn</code> – Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an Lambda endpoint.</p> </li> <li> <p> <code>LambdaSuccessFeedbackSampleRate</code> – Indicates percentage of successful messages to sample for an Amazon SNS topic that is subscribed to an Lambda endpoint.</p> </li> <li> <p> <code>LambdaFailureFeedbackRoleArn</code> – Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an Lambda endpoint. </p> </li> </ul> </li> <li> <p>Platform application endpoint</p> <ul> <li> <p> <code>ApplicationSuccessFeedbackRoleArn</code> – Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an Amazon Web Services application endpoint.</p> </li> <li> <p> <code>ApplicationSuccessFeedbackSampleRate</code> – Indicates percentage of successful messages to sample for an Amazon SNS topic that is subscribed to an Amazon Web Services application endpoint.</p> </li> <li> <p> <code>ApplicationFailureFeedbackRoleArn</code> – Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an Amazon Web Services application endpoint.</p> </li> </ul> <note> <p>In addition to being able to configure topic attributes for message delivery status of notification messages sent to Amazon SNS application endpoints, you can also configure application attributes for the delivery status of push notification messages sent to push notification services.</p> <p>For example, For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-msg-status.html">Using Amazon SNS Application Attributes for Message Delivery Status</a>. </p> </note> </li> <li> <p>Amazon SQS</p> <ul> <li> <p> <code>SQSSuccessFeedbackRoleArn</code> – Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an Amazon SQS endpoint. </p> </li> <li> <p> <code>SQSSuccessFeedbackSampleRate</code> – Indicates percentage of successful messages to sample for an Amazon SNS topic that is subscribed to an Amazon SQS endpoint. </p> </li> <li> <p> <code>SQSFailureFeedbackRoleArn</code> – Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an Amazon SQS endpoint. </p> </li> </ul> </li> </ul> <note> <p>The &lt;ENDPOINT&gt;SuccessFeedbackRoleArn and &lt;ENDPOINT&gt;FailureFeedbackRoleArn attributes are used to give Amazon SNS write access to use CloudWatch Logs on your behalf. The &lt;ENDPOINT&gt;SuccessFeedbackSampleRate attribute is for specifying the sample rate percentage (0-100) of successfully delivered messages. After you configure the &lt;ENDPOINT&gt;FailureFeedbackRoleArn attribute, then all failed message deliveries generate CloudWatch Logs. </p> </note> <p>The following attribute applies only to <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html">server-side-encryption</a>:</p> <ul> <li> <p> <code>KmsMasterKeyId</code> – The ID of an Amazon Web Services managed customer master key (CMK) for Amazon SNS or a custom CMK. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html#sse-key-terms">Key Terms</a>. For more examples, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters">KeyId</a> in the <i>Key Management Service API Reference</i>. </p> </li> <li> <p> <code>SignatureVersion</code> – The signature version corresponds to the hashing algorithm used while creating the signature of the notifications, subscription confirmations, or unsubscribe confirmation messages sent by Amazon SNS. By default, <code>SignatureVersion</code> is set to <code>1</code>.</p> </li> </ul> <p>The following attribute applies only to <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-fifo-topics.html">FIFO topics</a>:</p> <ul> <li> <p> <code>ContentBasedDeduplication</code> – Enables content-based deduplication for FIFO topics.</p> <ul> <li> <p>By default, <code>ContentBasedDeduplication</code> is set to <code>false</code>. If you create a FIFO topic and this attribute is <code>false</code>, you must specify a value for the <code>MessageDeduplicationId</code> parameter for the <a href="https://docs.aws.amazon.com/sns/latest/api/API_Publish.html">Publish</a> action. </p> </li> <li> <p>When you set <code>ContentBasedDeduplication</code> to <code>true</code>, Amazon SNS uses a SHA-256 hash to generate the <code>MessageDeduplicationId</code> using the body of the message (but not the attributes of the message).</p> <p>(Optional) To override the generated value, you can specify a value for the <code>MessageDeduplicationId</code> parameter for the <code>Publish</code> action.</p> </li> </ul> </li> </ul>|
|AttributeValue|query|string|false|The new value for the attribute.|
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
|Action|SetTopicAttributes|
|Version|2010-03-31|

<h3 id="getsettopicattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|484|484|InvalidSecurityException|[InvalidSecurityException](#schemainvalidsecurityexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_SetTopicAttributes

<a id="opIdPOST_SetTopicAttributes"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=SetTopicAttributes?Action=SetTopicAttributes&Version=2010-03-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"TopicArn":{},"AttributeName":{},"AttributeValue":{}}'
```

`POST /#Action=SetTopicAttributes`

<p>Allows a topic owner to set an attribute of the topic to a new value.</p> <note> <p>To remove the ability to change topic permissions, you must deny permissions to the <code>AddPermission</code>, <code>RemovePermission</code>, and <code>SetTopicAttributes</code> actions in your IAM policy.</p> </note>

> Body parameter

```json
{
  "TopicArn": {},
  "AttributeName": {},
  "AttributeValue": {}
}
```

<h3 id="postsettopicattributes-parameters">Parameters</h3>

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
|body|body|[SetTopicAttributesInput](#schemasettopicattributesinput)|false|none|
|» TopicArn|body|object|true|none|
|» AttributeName|body|object|true|none|
|» AttributeValue|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|SetTopicAttributes|
|Version|2010-03-31|

<h3 id="postsettopicattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|484|484|InvalidSecurityException|[InvalidSecurityException](#schemainvalidsecurityexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_Subscribe

<a id="opIdGET_Subscribe"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=Subscribe?TopicArn=string&Protocol=string&Action=Subscribe&Version=2010-03-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=Subscribe`

<p>Subscribes an endpoint to an Amazon SNS topic. If the endpoint type is HTTP/S or email, or if the endpoint and the topic are not in the same Amazon Web Services account, the endpoint owner must run the <code>ConfirmSubscription</code> action to confirm the subscription.</p> <p>You call the <code>ConfirmSubscription</code> action with the token from the subscription response. Confirmation tokens are valid for three days.</p> <p>This action is throttled at 100 transactions per second (TPS).</p>

<h3 id="getsubscribe-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TopicArn|query|string|true|The ARN of the topic you want to subscribe to.|
|Protocol|query|string|true|<p>The protocol that you want to use. Supported protocols include:</p> <ul> <li> <p> <code>http</code> – delivery of JSON-encoded message via HTTP POST</p> </li> <li> <p> <code>https</code> – delivery of JSON-encoded message via HTTPS POST</p> </li> <li> <p> <code>email</code> – delivery of message via SMTP</p> </li> <li> <p> <code>email-json</code> – delivery of JSON-encoded message via SMTP</p> </li> <li> <p> <code>sms</code> – delivery of message via SMS</p> </li> <li> <p> <code>sqs</code> – delivery of JSON-encoded message to an Amazon SQS queue</p> </li> <li> <p> <code>application</code> – delivery of JSON-encoded message to an EndpointArn for a mobile app and device</p> </li> <li> <p> <code>lambda</code> – delivery of JSON-encoded message to an Lambda function</p> </li> <li> <p> <code>firehose</code> – delivery of JSON-encoded message to an Amazon Kinesis Data Firehose delivery stream.</p> </li> </ul>|
|Endpoint|query|string|false|<p>The endpoint that you want to receive notifications. Endpoints vary by protocol:</p> <ul> <li> <p>For the <code>http</code> protocol, the (public) endpoint is a URL beginning with <code>http://</code>.</p> </li> <li> <p>For the <code>https</code> protocol, the (public) endpoint is a URL beginning with <code>https://</code>.</p> </li> <li> <p>For the <code>email</code> protocol, the endpoint is an email address.</p> </li> <li> <p>For the <code>email-json</code> protocol, the endpoint is an email address.</p> </li> <li> <p>For the <code>sms</code> protocol, the endpoint is a phone number of an SMS-enabled device.</p> </li> <li> <p>For the <code>sqs</code> protocol, the endpoint is the ARN of an Amazon SQS queue.</p> </li> <li> <p>For the <code>application</code> protocol, the endpoint is the EndpointArn of a mobile app and device.</p> </li> <li> <p>For the <code>lambda</code> protocol, the endpoint is the ARN of an Lambda function.</p> </li> <li> <p>For the <code>firehose</code> protocol, the endpoint is the ARN of an Amazon Kinesis Data Firehose delivery stream.</p> </li> </ul>|
|Attributes|query|object|false|<p>A map of attributes with their corresponding values.</p> <p>The following lists the names, descriptions, and values of the special request parameters that the <code>Subscribe</code> action uses:</p> <ul> <li> <p> <code>DeliveryPolicy</code> – The policy that defines how Amazon SNS retries failed deliveries to HTTP/S endpoints.</p> </li> <li> <p> <code>FilterPolicy</code> – The simple JSON object that lets your subscriber receive only a subset of messages, rather than receiving every message published to the topic.</p> </li> <li> <p> <code>FilterPolicyScope</code> – This attribute lets you choose the filtering scope by using one of the following string value types:</p> <ul> <li> <p> <code>MessageAttributes</code> (default) – The filter is applied on the message attributes.</p> </li> <li> <p> <code>MessageBody</code> – The filter is applied on the message body.</p> </li> </ul> </li> <li> <p> <code>RawMessageDelivery</code> – When set to <code>true</code>, enables raw message delivery to Amazon SQS or HTTP/S endpoints. This eliminates the need for the endpoints to process JSON formatting, which is otherwise created for Amazon SNS metadata.</p> </li> <li> <p> <code>RedrivePolicy</code> – When specified, sends undeliverable messages to the specified Amazon SQS dead-letter queue. Messages that can't be delivered due to client errors (for example, when the subscribed endpoint is unreachable) or server errors (for example, when the service that powers the subscribed endpoint becomes unavailable) are held in the dead-letter queue for further analysis or reprocessing.</p> </li> </ul> <p>The following attribute applies only to Amazon Kinesis Data Firehose delivery stream subscriptions:</p> <ul> <li> <p> <code>SubscriptionRoleArn</code> – The ARN of the IAM role that has the following:</p> <ul> <li> <p>Permission to write to the Kinesis Data Firehose delivery stream</p> </li> <li> <p>Amazon SNS listed as a trusted entity</p> </li> </ul> <p>Specifying a valid ARN for this attribute is required for Kinesis Data Firehose delivery stream subscriptions. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-firehose-as-subscriber.html">Fanout to Kinesis Data Firehose delivery streams</a> in the <i>Amazon SNS Developer Guide</i>.</p> </li> </ul>|
|ReturnSubscriptionArn|query|boolean|false|<p>Sets whether the response from the <code>Subscribe</code> request includes the subscription ARN, even if the subscription is not yet confirmed.</p> <p>If you set this parameter to <code>true</code>, the response includes the ARN in all cases, even if the subscription is not yet confirmed. In addition to the ARN for confirmed subscriptions, the response also includes the <code>pending subscription</code> ARN value for subscriptions that aren't yet confirmed. A subscription becomes confirmed when the subscriber calls the <code>ConfirmSubscription</code> action with a confirmation token.</p> <p/> <p>The default value is <code>false</code>.</p>|
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
|Action|Subscribe|
|Version|2010-03-31|

<h3 id="getsubscribe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SubscribeResponse](#schemasubscriberesponse)|
|480|480|SubscriptionLimitExceededException|[SubscriptionLimitExceededException](#schemasubscriptionlimitexceededexception)|
|481|481|FilterPolicyLimitExceededException|[FilterPolicyLimitExceededException](#schemafilterpolicylimitexceededexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|486|486|InvalidSecurityException|[InvalidSecurityException](#schemainvalidsecurityexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_Subscribe

<a id="opIdPOST_Subscribe"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=Subscribe?Action=Subscribe&Version=2010-03-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"TopicArn":{},"Protocol":{},"Endpoint":{},"Attributes":{"property1":"string","property2":"string"},"ReturnSubscriptionArn":{}}'
```

`POST /#Action=Subscribe`

<p>Subscribes an endpoint to an Amazon SNS topic. If the endpoint type is HTTP/S or email, or if the endpoint and the topic are not in the same Amazon Web Services account, the endpoint owner must run the <code>ConfirmSubscription</code> action to confirm the subscription.</p> <p>You call the <code>ConfirmSubscription</code> action with the token from the subscription response. Confirmation tokens are valid for three days.</p> <p>This action is throttled at 100 transactions per second (TPS).</p>

> Body parameter

```json
{
  "TopicArn": {},
  "Protocol": {},
  "Endpoint": {},
  "Attributes": {
    "property1": "string",
    "property2": "string"
  },
  "ReturnSubscriptionArn": {}
}
```

<h3 id="postsubscribe-parameters">Parameters</h3>

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
|body|body|[SubscribeInput](#schemasubscribeinput)|false|none|
|» TopicArn|body|object|true|none|
|» Protocol|body|object|true|none|
|» Endpoint|body|object|false|none|
|» Attributes|body|object|false|none|
|» » **additionalProperties**|body|[attributeValue](#schemaattributevalue)|false|none|
|» ReturnSubscriptionArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|Subscribe|
|Version|2010-03-31|

<h3 id="postsubscribe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SubscribeResponse](#schemasubscriberesponse)|
|480|480|SubscriptionLimitExceededException|[SubscriptionLimitExceededException](#schemasubscriptionlimitexceededexception)|
|481|481|FilterPolicyLimitExceededException|[FilterPolicyLimitExceededException](#schemafilterpolicylimitexceededexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|486|486|InvalidSecurityException|[InvalidSecurityException](#schemainvalidsecurityexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_TagResource

<a id="opIdGET_TagResource"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=TagResource?ResourceArn=string&Tags=%7B%22Key%22%3A%7B%7D%2C%22Value%22%3A%7B%7D%7D&Action=TagResource&Version=2010-03-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=TagResource`

<p>Add tags to the specified Amazon SNS topic. For an overview, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-tags.html">Amazon SNS Tags</a> in the <i>Amazon SNS Developer Guide</i>.</p> <p>When you use topic tags, keep the following guidelines in mind:</p> <ul> <li> <p>Adding more than 50 tags to a topic isn't recommended.</p> </li> <li> <p>Tags don't have any semantic meaning. Amazon SNS interprets tags as character strings.</p> </li> <li> <p>Tags are case-sensitive.</p> </li> <li> <p>A new tag with a key identical to that of an existing tag overwrites the existing tag.</p> </li> <li> <p>Tagging actions are limited to 10 TPS per Amazon Web Services account, per Amazon Web Services Region. If your application requires a higher throughput, file a <a href="https://console.aws.amazon.com/support/home#/case/create?issueType=technical">technical support request</a>.</p> </li> </ul>

<h3 id="gettagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceArn|query|string|true|The ARN of the topic to which to add tags.|
|Tags|query|[[Tag](#schematag)]|true|The tags to be added to the specified topic. A tag consists of a required key and an optional value.|
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
|Action|TagResource|
|Version|2010-03-31|

<h3 id="gettagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|TagLimitExceededException|[TagLimitExceededException](#schemataglimitexceededexception)|
|482|482|StaleTagException|[StaleTagException](#schemastaletagexception)|
|483|483|TagPolicyException|[TagPolicyException](#schematagpolicyexception)|
|484|484|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|485|485|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|486|486|ConcurrentAccessException|[ConcurrentAccessException](#schemaconcurrentaccessexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_TagResource

<a id="opIdPOST_TagResource"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=TagResource?Action=TagResource&Version=2010-03-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ResourceArn":{},"Tags":{}}'
```

`POST /#Action=TagResource`

<p>Add tags to the specified Amazon SNS topic. For an overview, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-tags.html">Amazon SNS Tags</a> in the <i>Amazon SNS Developer Guide</i>.</p> <p>When you use topic tags, keep the following guidelines in mind:</p> <ul> <li> <p>Adding more than 50 tags to a topic isn't recommended.</p> </li> <li> <p>Tags don't have any semantic meaning. Amazon SNS interprets tags as character strings.</p> </li> <li> <p>Tags are case-sensitive.</p> </li> <li> <p>A new tag with a key identical to that of an existing tag overwrites the existing tag.</p> </li> <li> <p>Tagging actions are limited to 10 TPS per Amazon Web Services account, per Amazon Web Services Region. If your application requires a higher throughput, file a <a href="https://console.aws.amazon.com/support/home#/case/create?issueType=technical">technical support request</a>.</p> </li> </ul>

> Body parameter

```json
{
  "ResourceArn": {},
  "Tags": {}
}
```

<h3 id="posttagresource-parameters">Parameters</h3>

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
|body|body|[TagResourceRequest](#schematagresourcerequest)|false|none|
|» ResourceArn|body|object|true|none|
|» Tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|TagResource|
|Version|2010-03-31|

<h3 id="posttagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|TagLimitExceededException|[TagLimitExceededException](#schemataglimitexceededexception)|
|482|482|StaleTagException|[StaleTagException](#schemastaletagexception)|
|483|483|TagPolicyException|[TagPolicyException](#schematagpolicyexception)|
|484|484|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|485|485|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|486|486|ConcurrentAccessException|[ConcurrentAccessException](#schemaconcurrentaccessexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_Unsubscribe

<a id="opIdGET_Unsubscribe"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=Unsubscribe?SubscriptionArn=string&Action=Unsubscribe&Version=2010-03-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=Unsubscribe`

<p>Deletes a subscription. If the subscription requires authentication for deletion, only the owner of the subscription or the topic's owner can unsubscribe, and an Amazon Web Services signature is required. If the <code>Unsubscribe</code> call does not require authentication and the requester is not the subscription owner, a final cancellation message is delivered to the endpoint, so that the endpoint owner can easily resubscribe to the topic if the <code>Unsubscribe</code> request was unintended.</p> <note> <p>Amazon SQS queue subscriptions require authentication for deletion. Only the owner of the subscription, or the owner of the topic can unsubscribe using the required Amazon Web Services signature.</p> </note> <p>This action is throttled at 100 transactions per second (TPS).</p>

<h3 id="getunsubscribe-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SubscriptionArn|query|string|true|The ARN of the subscription to be deleted.|
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
|Action|Unsubscribe|
|Version|2010-03-31|

<h3 id="getunsubscribe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|InvalidSecurityException|[InvalidSecurityException](#schemainvalidsecurityexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_Unsubscribe

<a id="opIdPOST_Unsubscribe"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=Unsubscribe?Action=Unsubscribe&Version=2010-03-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"SubscriptionArn":{}}'
```

`POST /#Action=Unsubscribe`

<p>Deletes a subscription. If the subscription requires authentication for deletion, only the owner of the subscription or the topic's owner can unsubscribe, and an Amazon Web Services signature is required. If the <code>Unsubscribe</code> call does not require authentication and the requester is not the subscription owner, a final cancellation message is delivered to the endpoint, so that the endpoint owner can easily resubscribe to the topic if the <code>Unsubscribe</code> request was unintended.</p> <note> <p>Amazon SQS queue subscriptions require authentication for deletion. Only the owner of the subscription, or the owner of the topic can unsubscribe using the required Amazon Web Services signature.</p> </note> <p>This action is throttled at 100 transactions per second (TPS).</p>

> Body parameter

```json
{
  "SubscriptionArn": {}
}
```

<h3 id="postunsubscribe-parameters">Parameters</h3>

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
|body|body|[UnsubscribeInput](#schemaunsubscribeinput)|false|none|
|» SubscriptionArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|Unsubscribe|
|Version|2010-03-31|

<h3 id="postunsubscribe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|InvalidSecurityException|[InvalidSecurityException](#schemainvalidsecurityexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_UntagResource

<a id="opIdGET_UntagResource"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=UntagResource?ResourceArn=string&TagKeys=string&Action=UntagResource&Version=2010-03-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=UntagResource`

Remove tags from the specified Amazon SNS topic. For an overview, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-tags.html">Amazon SNS Tags</a> in the <i>Amazon SNS Developer Guide</i>.

<h3 id="getuntagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceArn|query|string|true|The ARN of the topic from which to remove tags.|
|TagKeys|query|[[TagKey](#schematagkey)]|true|The list of tag keys to remove from the specified topic.|
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
|Action|UntagResource|
|Version|2010-03-31|

<h3 id="getuntagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|TagLimitExceededException|[TagLimitExceededException](#schemataglimitexceededexception)|
|482|482|StaleTagException|[StaleTagException](#schemastaletagexception)|
|483|483|TagPolicyException|[TagPolicyException](#schematagpolicyexception)|
|484|484|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|485|485|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|486|486|ConcurrentAccessException|[ConcurrentAccessException](#schemaconcurrentaccessexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_UntagResource

<a id="opIdPOST_UntagResource"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=UntagResource?Action=UntagResource&Version=2010-03-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ResourceArn":{},"TagKeys":{}}'
```

`POST /#Action=UntagResource`

Remove tags from the specified Amazon SNS topic. For an overview, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-tags.html">Amazon SNS Tags</a> in the <i>Amazon SNS Developer Guide</i>.

> Body parameter

```json
{
  "ResourceArn": {},
  "TagKeys": {}
}
```

<h3 id="postuntagresource-parameters">Parameters</h3>

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
|body|body|[UntagResourceRequest](#schemauntagresourcerequest)|false|none|
|» ResourceArn|body|object|true|none|
|» TagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|UntagResource|
|Version|2010-03-31|

<h3 id="postuntagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|TagLimitExceededException|[TagLimitExceededException](#schemataglimitexceededexception)|
|482|482|StaleTagException|[StaleTagException](#schemastaletagexception)|
|483|483|TagPolicyException|[TagPolicyException](#schematagpolicyexception)|
|484|484|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|485|485|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|486|486|ConcurrentAccessException|[ConcurrentAccessException](#schemaconcurrentaccessexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_VerifySMSSandboxPhoneNumber

<a id="opIdGET_VerifySMSSandboxPhoneNumber"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=VerifySMSSandboxPhoneNumber?PhoneNumber=string&OneTimePassword=string&Action=VerifySMSSandboxPhoneNumber&Version=2010-03-31' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=VerifySMSSandboxPhoneNumber`

<p>Verifies a destination phone number with a one-time password (OTP) for the calling Amazon Web Services account.</p> <p>When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the <i>SMS sandbox</i>. The SMS sandbox provides a safe environment for you to try Amazon SNS features without risking your reputation as an SMS sender. While your Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send SMS messages only to verified destination phone numbers. For more information, including how to move out of the sandbox to send messages without restrictions, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">SMS sandbox</a> in the <i>Amazon SNS Developer Guide</i>.</p>

<h3 id="getverifysmssandboxphonenumber-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PhoneNumber|query|string|true|The destination phone number to verify.|
|OneTimePassword|query|string|true|The OTP sent to the destination number from the <code>CreateSMSSandBoxPhoneNumber</code> call.|
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
|Action|VerifySMSSandboxPhoneNumber|
|Version|2010-03-31|

<h3 id="getverifysmssandboxphonenumber-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[VerifySMSSandboxPhoneNumberResult](#schemaverifysmssandboxphonenumberresult)|
|480|480|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|VerificationException|[VerificationException](#schemaverificationexception)|
|485|485|ThrottledException|[ThrottledException](#schemathrottledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_VerifySMSSandboxPhoneNumber

<a id="opIdPOST_VerifySMSSandboxPhoneNumber"></a>

> Code samples

```bash
curl 'https://sns.us-east-1.amazonaws.com/#Action=VerifySMSSandboxPhoneNumber?Action=VerifySMSSandboxPhoneNumber&Version=2010-03-31' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"PhoneNumber":{},"OneTimePassword":{}}'
```

`POST /#Action=VerifySMSSandboxPhoneNumber`

<p>Verifies a destination phone number with a one-time password (OTP) for the calling Amazon Web Services account.</p> <p>When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the <i>SMS sandbox</i>. The SMS sandbox provides a safe environment for you to try Amazon SNS features without risking your reputation as an SMS sender. While your Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send SMS messages only to verified destination phone numbers. For more information, including how to move out of the sandbox to send messages without restrictions, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">SMS sandbox</a> in the <i>Amazon SNS Developer Guide</i>.</p>

> Body parameter

```json
{
  "PhoneNumber": {},
  "OneTimePassword": {}
}
```

<h3 id="postverifysmssandboxphonenumber-parameters">Parameters</h3>

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
|body|body|[VerifySMSSandboxPhoneNumberInput](#schemaverifysmssandboxphonenumberinput)|false|none|
|» PhoneNumber|body|object|true|none|
|» OneTimePassword|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|VerifySMSSandboxPhoneNumber|
|Version|2010-03-31|

<h3 id="postverifysmssandboxphonenumber-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[VerifySMSSandboxPhoneNumberResult](#schemaverifysmssandboxphonenumberresult)|
|480|480|AuthorizationErrorException|[AuthorizationErrorException](#schemaauthorizationerrorexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|VerificationException|[VerificationException](#schemaverificationexception)|
|485|485|ThrottledException|[ThrottledException](#schemathrottledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_delegate">delegate</h2>
<!-- backwards compatibility -->
<a id="schemadelegate"></a>
<a id="schema_delegate"></a>
<a id="tocSdelegate"></a>
<a id="tocsdelegate"></a>

```json
"string"
```

<h2 id="tocS_action">action</h2>
<!-- backwards compatibility -->
<a id="schemaaction"></a>
<a id="schema_action"></a>
<a id="tocSaction"></a>
<a id="tocsaction"></a>

```json
"string"
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

<h2 id="tocS_InternalErrorException">InternalErrorException</h2>
<!-- backwards compatibility -->
<a id="schemainternalerrorexception"></a>
<a id="schema_InternalErrorException"></a>
<a id="tocSinternalerrorexception"></a>
<a id="tocsinternalerrorexception"></a>

```json
null
```

<h2 id="tocS_AuthorizationErrorException">AuthorizationErrorException</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizationerrorexception"></a>
<a id="schema_AuthorizationErrorException"></a>
<a id="tocSauthorizationerrorexception"></a>
<a id="tocsauthorizationerrorexception"></a>

```json
null
```

<h2 id="tocS_NotFoundException">NotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemanotfoundexception"></a>
<a id="schema_NotFoundException"></a>
<a id="tocSnotfoundexception"></a>
<a id="tocsnotfoundexception"></a>

```json
null
```

<h2 id="tocS_CheckIfPhoneNumberIsOptedOutResponse">CheckIfPhoneNumberIsOptedOutResponse</h2>
<!-- backwards compatibility -->
<a id="schemacheckifphonenumberisoptedoutresponse"></a>
<a id="schema_CheckIfPhoneNumberIsOptedOutResponse"></a>
<a id="tocScheckifphonenumberisoptedoutresponse"></a>
<a id="tocscheckifphonenumberisoptedoutresponse"></a>

```json
{
  "isOptedOut": {}
}
```

The response from the <code>CheckIfPhoneNumberIsOptedOut</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isOptedOut|object|false|none|none|

<h2 id="tocS_ThrottledException">ThrottledException</h2>
<!-- backwards compatibility -->
<a id="schemathrottledexception"></a>
<a id="schema_ThrottledException"></a>
<a id="tocSthrottledexception"></a>
<a id="tocsthrottledexception"></a>

```json
null
```

<h2 id="tocS_ConfirmSubscriptionResponse">ConfirmSubscriptionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaconfirmsubscriptionresponse"></a>
<a id="schema_ConfirmSubscriptionResponse"></a>
<a id="tocSconfirmsubscriptionresponse"></a>
<a id="tocsconfirmsubscriptionresponse"></a>

```json
{
  "SubscriptionArn": {}
}
```

Response for ConfirmSubscriptions action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubscriptionArn|object|false|none|none|

<h2 id="tocS_SubscriptionLimitExceededException">SubscriptionLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionlimitexceededexception"></a>
<a id="schema_SubscriptionLimitExceededException"></a>
<a id="tocSsubscriptionlimitexceededexception"></a>
<a id="tocssubscriptionlimitexceededexception"></a>

```json
null
```

<h2 id="tocS_FilterPolicyLimitExceededException">FilterPolicyLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemafilterpolicylimitexceededexception"></a>
<a id="schema_FilterPolicyLimitExceededException"></a>
<a id="tocSfilterpolicylimitexceededexception"></a>
<a id="tocsfilterpolicylimitexceededexception"></a>

```json
null
```

<h2 id="tocS_CreatePlatformApplicationResponse">CreatePlatformApplicationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateplatformapplicationresponse"></a>
<a id="schema_CreatePlatformApplicationResponse"></a>
<a id="tocScreateplatformapplicationresponse"></a>
<a id="tocscreateplatformapplicationresponse"></a>

```json
{
  "PlatformApplicationArn": {}
}
```

Response from CreatePlatformApplication action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PlatformApplicationArn|object|false|none|none|

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_CreateEndpointResponse">CreateEndpointResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateendpointresponse"></a>
<a id="schema_CreateEndpointResponse"></a>
<a id="tocScreateendpointresponse"></a>
<a id="tocscreateendpointresponse"></a>

```json
{
  "EndpointArn": {}
}
```

Response from CreateEndpoint action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointArn|object|false|none|none|

<h2 id="tocS_CreateSMSSandboxPhoneNumberResult">CreateSMSSandboxPhoneNumberResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatesmssandboxphonenumberresult"></a>
<a id="schema_CreateSMSSandboxPhoneNumberResult"></a>
<a id="tocScreatesmssandboxphonenumberresult"></a>
<a id="tocscreatesmssandboxphonenumberresult"></a>

```json
{}
```

<h2 id="tocS_OptedOutException">OptedOutException</h2>
<!-- backwards compatibility -->
<a id="schemaoptedoutexception"></a>
<a id="schema_OptedOutException"></a>
<a id="tocSoptedoutexception"></a>
<a id="tocsoptedoutexception"></a>

```json
null
```

<h2 id="tocS_UserErrorException">UserErrorException</h2>
<!-- backwards compatibility -->
<a id="schemausererrorexception"></a>
<a id="schema_UserErrorException"></a>
<a id="tocSusererrorexception"></a>
<a id="tocsusererrorexception"></a>

```json
null
```

<h2 id="tocS_CreateTopicResponse">CreateTopicResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatetopicresponse"></a>
<a id="schema_CreateTopicResponse"></a>
<a id="tocScreatetopicresponse"></a>
<a id="tocscreatetopicresponse"></a>

```json
{
  "TopicArn": {}
}
```

Response from CreateTopic action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TopicArn|object|false|none|none|

<h2 id="tocS_attributeValue">attributeValue</h2>
<!-- backwards compatibility -->
<a id="schemaattributevalue"></a>
<a id="schema_attributeValue"></a>
<a id="tocSattributevalue"></a>
<a id="tocsattributevalue"></a>

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

The list of tags to be added to the specified topic.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_TopicLimitExceededException">TopicLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schematopiclimitexceededexception"></a>
<a id="schema_TopicLimitExceededException"></a>
<a id="tocStopiclimitexceededexception"></a>
<a id="tocstopiclimitexceededexception"></a>

```json
null
```

<h2 id="tocS_InvalidSecurityException">InvalidSecurityException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidsecurityexception"></a>
<a id="schema_InvalidSecurityException"></a>
<a id="tocSinvalidsecurityexception"></a>
<a id="tocsinvalidsecurityexception"></a>

```json
null
```

<h2 id="tocS_TagLimitExceededException">TagLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemataglimitexceededexception"></a>
<a id="schema_TagLimitExceededException"></a>
<a id="tocStaglimitexceededexception"></a>
<a id="tocstaglimitexceededexception"></a>

```json
null
```

<h2 id="tocS_StaleTagException">StaleTagException</h2>
<!-- backwards compatibility -->
<a id="schemastaletagexception"></a>
<a id="schema_StaleTagException"></a>
<a id="tocSstaletagexception"></a>
<a id="tocsstaletagexception"></a>

```json
null
```

<h2 id="tocS_TagPolicyException">TagPolicyException</h2>
<!-- backwards compatibility -->
<a id="schematagpolicyexception"></a>
<a id="schema_TagPolicyException"></a>
<a id="tocStagpolicyexception"></a>
<a id="tocstagpolicyexception"></a>

```json
null
```

<h2 id="tocS_ConcurrentAccessException">ConcurrentAccessException</h2>
<!-- backwards compatibility -->
<a id="schemaconcurrentaccessexception"></a>
<a id="schema_ConcurrentAccessException"></a>
<a id="tocSconcurrentaccessexception"></a>
<a id="tocsconcurrentaccessexception"></a>

```json
null
```

<h2 id="tocS_DeleteSMSSandboxPhoneNumberResult">DeleteSMSSandboxPhoneNumberResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletesmssandboxphonenumberresult"></a>
<a id="schema_DeleteSMSSandboxPhoneNumberResult"></a>
<a id="tocSdeletesmssandboxphonenumberresult"></a>
<a id="tocsdeletesmssandboxphonenumberresult"></a>

```json
{}
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

<h2 id="tocS_GetDataProtectionPolicyResponse">GetDataProtectionPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdataprotectionpolicyresponse"></a>
<a id="schema_GetDataProtectionPolicyResponse"></a>
<a id="tocSgetdataprotectionpolicyresponse"></a>
<a id="tocsgetdataprotectionpolicyresponse"></a>

```json
{
  "DataProtectionPolicy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataProtectionPolicy|object|false|none|none|

<h2 id="tocS_GetEndpointAttributesResponse">GetEndpointAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetendpointattributesresponse"></a>
<a id="schema_GetEndpointAttributesResponse"></a>
<a id="tocSgetendpointattributesresponse"></a>
<a id="tocsgetendpointattributesresponse"></a>

```json
{
  "Attributes": {
    "property1": "string",
    "property2": "string"
  }
}
```

Response from GetEndpointAttributes of the EndpointArn.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attributes|object|false|none|none|

<h2 id="tocS_GetPlatformApplicationAttributesResponse">GetPlatformApplicationAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetplatformapplicationattributesresponse"></a>
<a id="schema_GetPlatformApplicationAttributesResponse"></a>
<a id="tocSgetplatformapplicationattributesresponse"></a>
<a id="tocsgetplatformapplicationattributesresponse"></a>

```json
{
  "Attributes": {
    "property1": "string",
    "property2": "string"
  }
}
```

Response for GetPlatformApplicationAttributes action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attributes|object|false|none|none|

<h2 id="tocS_GetSMSAttributesResponse">GetSMSAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsmsattributesresponse"></a>
<a id="schema_GetSMSAttributesResponse"></a>
<a id="tocSgetsmsattributesresponse"></a>
<a id="tocsgetsmsattributesresponse"></a>

```json
{
  "attributes": {
    "property1": "string",
    "property2": "string"
  }
}
```

The response from the <code>GetSMSAttributes</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|none|

<h2 id="tocS_GetSMSSandboxAccountStatusResult">GetSMSSandboxAccountStatusResult</h2>
<!-- backwards compatibility -->
<a id="schemagetsmssandboxaccountstatusresult"></a>
<a id="schema_GetSMSSandboxAccountStatusResult"></a>
<a id="tocSgetsmssandboxaccountstatusresult"></a>
<a id="tocsgetsmssandboxaccountstatusresult"></a>

```json
{
  "IsInSandbox": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IsInSandbox|object|true|none|none|

<h2 id="tocS_GetSubscriptionAttributesResponse">GetSubscriptionAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsubscriptionattributesresponse"></a>
<a id="schema_GetSubscriptionAttributesResponse"></a>
<a id="tocSgetsubscriptionattributesresponse"></a>
<a id="tocsgetsubscriptionattributesresponse"></a>

```json
{
  "Attributes": {
    "property1": "string",
    "property2": "string"
  }
}
```

Response for GetSubscriptionAttributes action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attributes|object|false|none|none|

<h2 id="tocS_GetTopicAttributesResponse">GetTopicAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagettopicattributesresponse"></a>
<a id="schema_GetTopicAttributesResponse"></a>
<a id="tocSgettopicattributesresponse"></a>
<a id="tocsgettopicattributesresponse"></a>

```json
{
  "Attributes": {
    "property1": "string",
    "property2": "string"
  }
}
```

Response for GetTopicAttributes action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attributes|object|false|none|none|

<h2 id="tocS_ListEndpointsByPlatformApplicationResponse">ListEndpointsByPlatformApplicationResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistendpointsbyplatformapplicationresponse"></a>
<a id="schema_ListEndpointsByPlatformApplicationResponse"></a>
<a id="tocSlistendpointsbyplatformapplicationresponse"></a>
<a id="tocslistendpointsbyplatformapplicationresponse"></a>

```json
{
  "Endpoints": {},
  "NextToken": {}
}
```

Response for ListEndpointsByPlatformApplication action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Endpoints|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListOriginationNumbersResult">ListOriginationNumbersResult</h2>
<!-- backwards compatibility -->
<a id="schemalistoriginationnumbersresult"></a>
<a id="schema_ListOriginationNumbersResult"></a>
<a id="tocSlistoriginationnumbersresult"></a>
<a id="tocslistoriginationnumbersresult"></a>

```json
{
  "NextToken": {},
  "PhoneNumbers": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|PhoneNumbers|object|false|none|none|

<h2 id="tocS_ValidationException">ValidationException</h2>
<!-- backwards compatibility -->
<a id="schemavalidationexception"></a>
<a id="schema_ValidationException"></a>
<a id="tocSvalidationexception"></a>
<a id="tocsvalidationexception"></a>

```json
null
```

<h2 id="tocS_ListPhoneNumbersOptedOutResponse">ListPhoneNumbersOptedOutResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistphonenumbersoptedoutresponse"></a>
<a id="schema_ListPhoneNumbersOptedOutResponse"></a>
<a id="tocSlistphonenumbersoptedoutresponse"></a>
<a id="tocslistphonenumbersoptedoutresponse"></a>

```json
{
  "phoneNumbers": {},
  "nextToken": {}
}
```

The response from the <code>ListPhoneNumbersOptedOut</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|phoneNumbers|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListPlatformApplicationsResponse">ListPlatformApplicationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistplatformapplicationsresponse"></a>
<a id="schema_ListPlatformApplicationsResponse"></a>
<a id="tocSlistplatformapplicationsresponse"></a>
<a id="tocslistplatformapplicationsresponse"></a>

```json
{
  "PlatformApplications": {},
  "NextToken": {}
}
```

Response for ListPlatformApplications action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PlatformApplications|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListSMSSandboxPhoneNumbersResult">ListSMSSandboxPhoneNumbersResult</h2>
<!-- backwards compatibility -->
<a id="schemalistsmssandboxphonenumbersresult"></a>
<a id="schema_ListSMSSandboxPhoneNumbersResult"></a>
<a id="tocSlistsmssandboxphonenumbersresult"></a>
<a id="tocslistsmssandboxphonenumbersresult"></a>

```json
{
  "PhoneNumbers": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PhoneNumbers|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListSubscriptionsResponse">ListSubscriptionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsubscriptionsresponse"></a>
<a id="schema_ListSubscriptionsResponse"></a>
<a id="tocSlistsubscriptionsresponse"></a>
<a id="tocslistsubscriptionsresponse"></a>

```json
{
  "Subscriptions": {},
  "NextToken": {}
}
```

Response for ListSubscriptions action

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Subscriptions|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListSubscriptionsByTopicResponse">ListSubscriptionsByTopicResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsubscriptionsbytopicresponse"></a>
<a id="schema_ListSubscriptionsByTopicResponse"></a>
<a id="tocSlistsubscriptionsbytopicresponse"></a>
<a id="tocslistsubscriptionsbytopicresponse"></a>

```json
{
  "Subscriptions": {},
  "NextToken": {}
}
```

Response for ListSubscriptionsByTopic action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Subscriptions|object|false|none|none|
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

<h2 id="tocS_ListTopicsResponse">ListTopicsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttopicsresponse"></a>
<a id="schema_ListTopicsResponse"></a>
<a id="tocSlisttopicsresponse"></a>
<a id="tocslisttopicsresponse"></a>

```json
{
  "Topics": {},
  "NextToken": {}
}
```

Response for ListTopics action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Topics|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_OptInPhoneNumberResponse">OptInPhoneNumberResponse</h2>
<!-- backwards compatibility -->
<a id="schemaoptinphonenumberresponse"></a>
<a id="schema_OptInPhoneNumberResponse"></a>
<a id="tocSoptinphonenumberresponse"></a>
<a id="tocsoptinphonenumberresponse"></a>

```json
{}
```

The response for the OptInPhoneNumber action.

<h2 id="tocS_PublishResponse">PublishResponse</h2>
<!-- backwards compatibility -->
<a id="schemapublishresponse"></a>
<a id="schema_PublishResponse"></a>
<a id="tocSpublishresponse"></a>
<a id="tocspublishresponse"></a>

```json
{
  "MessageId": {},
  "SequenceNumber": {}
}
```

Response for Publish action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MessageId|object|false|none|none|
|SequenceNumber|object|false|none|none|

<h2 id="tocS_MessageAttributeValue">MessageAttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemamessageattributevalue"></a>
<a id="schema_MessageAttributeValue"></a>
<a id="tocSmessageattributevalue"></a>
<a id="tocsmessageattributevalue"></a>

```json
{
  "DataType": {},
  "StringValue": {},
  "BinaryValue": {}
}
```

<p>The user-specified message attribute value. For string data types, the value attribute has the same restrictions on the content as the message body. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/api/API_Publish.html">Publish</a>.</p> <p>Name, type, and value must not be empty or null. In addition, the message body should not be empty or null. All parts of the message attribute, including name, type, and value, are included in the message size restriction, which is currently 256 KB (262,144 bytes). For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMessageAttributes.html">Amazon SNS message attributes</a> and <a href="https://docs.aws.amazon.com/sns/latest/dg/sms_publish-to-phone.html">Publishing to a mobile phone</a> in the <i>Amazon SNS Developer Guide.</i> </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataType|object|true|none|none|
|StringValue|object|false|none|none|
|BinaryValue|object|false|none|none|

<h2 id="tocS_InvalidParameterValueException">InvalidParameterValueException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidparametervalueexception"></a>
<a id="schema_InvalidParameterValueException"></a>
<a id="tocSinvalidparametervalueexception"></a>
<a id="tocsinvalidparametervalueexception"></a>

```json
null
```

<h2 id="tocS_EndpointDisabledException">EndpointDisabledException</h2>
<!-- backwards compatibility -->
<a id="schemaendpointdisabledexception"></a>
<a id="schema_EndpointDisabledException"></a>
<a id="tocSendpointdisabledexception"></a>
<a id="tocsendpointdisabledexception"></a>

```json
null
```

<h2 id="tocS_PlatformApplicationDisabledException">PlatformApplicationDisabledException</h2>
<!-- backwards compatibility -->
<a id="schemaplatformapplicationdisabledexception"></a>
<a id="schema_PlatformApplicationDisabledException"></a>
<a id="tocSplatformapplicationdisabledexception"></a>
<a id="tocsplatformapplicationdisabledexception"></a>

```json
null
```

<h2 id="tocS_KMSDisabledException">KMSDisabledException</h2>
<!-- backwards compatibility -->
<a id="schemakmsdisabledexception"></a>
<a id="schema_KMSDisabledException"></a>
<a id="tocSkmsdisabledexception"></a>
<a id="tocskmsdisabledexception"></a>

```json
null
```

<h2 id="tocS_KMSInvalidStateException">KMSInvalidStateException</h2>
<!-- backwards compatibility -->
<a id="schemakmsinvalidstateexception"></a>
<a id="schema_KMSInvalidStateException"></a>
<a id="tocSkmsinvalidstateexception"></a>
<a id="tocskmsinvalidstateexception"></a>

```json
null
```

<h2 id="tocS_KMSNotFoundException">KMSNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemakmsnotfoundexception"></a>
<a id="schema_KMSNotFoundException"></a>
<a id="tocSkmsnotfoundexception"></a>
<a id="tocskmsnotfoundexception"></a>

```json
null
```

<h2 id="tocS_KMSOptInRequired">KMSOptInRequired</h2>
<!-- backwards compatibility -->
<a id="schemakmsoptinrequired"></a>
<a id="schema_KMSOptInRequired"></a>
<a id="tocSkmsoptinrequired"></a>
<a id="tocskmsoptinrequired"></a>

```json
null
```

<h2 id="tocS_KMSThrottlingException">KMSThrottlingException</h2>
<!-- backwards compatibility -->
<a id="schemakmsthrottlingexception"></a>
<a id="schema_KMSThrottlingException"></a>
<a id="tocSkmsthrottlingexception"></a>
<a id="tocskmsthrottlingexception"></a>

```json
null
```

<h2 id="tocS_KMSAccessDeniedException">KMSAccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemakmsaccessdeniedexception"></a>
<a id="schema_KMSAccessDeniedException"></a>
<a id="tocSkmsaccessdeniedexception"></a>
<a id="tocskmsaccessdeniedexception"></a>

```json
null
```

<h2 id="tocS_PublishBatchResponse">PublishBatchResponse</h2>
<!-- backwards compatibility -->
<a id="schemapublishbatchresponse"></a>
<a id="schema_PublishBatchResponse"></a>
<a id="tocSpublishbatchresponse"></a>
<a id="tocspublishbatchresponse"></a>

```json
{
  "Successful": {},
  "Failed": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Successful|object|false|none|none|
|Failed|object|false|none|none|

<h2 id="tocS_PublishBatchRequestEntry">PublishBatchRequestEntry</h2>
<!-- backwards compatibility -->
<a id="schemapublishbatchrequestentry"></a>
<a id="schema_PublishBatchRequestEntry"></a>
<a id="tocSpublishbatchrequestentry"></a>
<a id="tocspublishbatchrequestentry"></a>

```json
{
  "Id": {},
  "Message": {},
  "Subject": {},
  "MessageStructure": {},
  "MessageAttributes": {
    "property1": {
      "DataType": {},
      "StringValue": {},
      "BinaryValue": {}
    },
    "property2": {
      "DataType": {},
      "StringValue": {},
      "BinaryValue": {}
    }
  },
  "MessageDeduplicationId": {},
  "MessageGroupId": {}
}
```

Contains the details of a single Amazon SNS message along with an <code>Id</code> that identifies a message within the batch.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|Message|object|true|none|none|
|Subject|object|false|none|none|
|MessageStructure|object|false|none|none|
|MessageAttributes|object|false|none|none|
|MessageDeduplicationId|object|false|none|none|
|MessageGroupId|object|false|none|none|

<h2 id="tocS_BatchEntryIdsNotDistinctException">BatchEntryIdsNotDistinctException</h2>
<!-- backwards compatibility -->
<a id="schemabatchentryidsnotdistinctexception"></a>
<a id="schema_BatchEntryIdsNotDistinctException"></a>
<a id="tocSbatchentryidsnotdistinctexception"></a>
<a id="tocsbatchentryidsnotdistinctexception"></a>

```json
null
```

<h2 id="tocS_BatchRequestTooLongException">BatchRequestTooLongException</h2>
<!-- backwards compatibility -->
<a id="schemabatchrequesttoolongexception"></a>
<a id="schema_BatchRequestTooLongException"></a>
<a id="tocSbatchrequesttoolongexception"></a>
<a id="tocsbatchrequesttoolongexception"></a>

```json
null
```

<h2 id="tocS_EmptyBatchRequestException">EmptyBatchRequestException</h2>
<!-- backwards compatibility -->
<a id="schemaemptybatchrequestexception"></a>
<a id="schema_EmptyBatchRequestException"></a>
<a id="tocSemptybatchrequestexception"></a>
<a id="tocsemptybatchrequestexception"></a>

```json
null
```

<h2 id="tocS_InvalidBatchEntryIdException">InvalidBatchEntryIdException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidbatchentryidexception"></a>
<a id="schema_InvalidBatchEntryIdException"></a>
<a id="tocSinvalidbatchentryidexception"></a>
<a id="tocsinvalidbatchentryidexception"></a>

```json
null
```

<h2 id="tocS_TooManyEntriesInBatchRequestException">TooManyEntriesInBatchRequestException</h2>
<!-- backwards compatibility -->
<a id="schematoomanyentriesinbatchrequestexception"></a>
<a id="schema_TooManyEntriesInBatchRequestException"></a>
<a id="tocStoomanyentriesinbatchrequestexception"></a>
<a id="tocstoomanyentriesinbatchrequestexception"></a>

```json
null
```

<h2 id="tocS_SetSMSAttributesResponse">SetSMSAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemasetsmsattributesresponse"></a>
<a id="schema_SetSMSAttributesResponse"></a>
<a id="tocSsetsmsattributesresponse"></a>
<a id="tocssetsmsattributesresponse"></a>

```json
{}
```

The response for the SetSMSAttributes action.

<h2 id="tocS_SubscribeResponse">SubscribeResponse</h2>
<!-- backwards compatibility -->
<a id="schemasubscriberesponse"></a>
<a id="schema_SubscribeResponse"></a>
<a id="tocSsubscriberesponse"></a>
<a id="tocssubscriberesponse"></a>

```json
{
  "SubscriptionArn": {}
}
```

Response for Subscribe action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubscriptionArn|object|false|none|none|

<h2 id="tocS_TagResourceResponse">TagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schematagresourceresponse"></a>
<a id="schema_TagResourceResponse"></a>
<a id="tocStagresourceresponse"></a>
<a id="tocstagresourceresponse"></a>

```json
{}
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

<h2 id="tocS_TagKey">TagKey</h2>
<!-- backwards compatibility -->
<a id="schematagkey"></a>
<a id="schema_TagKey"></a>
<a id="tocStagkey"></a>
<a id="tocstagkey"></a>

```json
"string"
```

<h2 id="tocS_VerifySMSSandboxPhoneNumberResult">VerifySMSSandboxPhoneNumberResult</h2>
<!-- backwards compatibility -->
<a id="schemaverifysmssandboxphonenumberresult"></a>
<a id="schema_VerifySMSSandboxPhoneNumberResult"></a>
<a id="tocSverifysmssandboxphonenumberresult"></a>
<a id="tocsverifysmssandboxphonenumberresult"></a>

```json
{}
```

The destination phone number's verification status.

<h2 id="tocS_VerificationException">VerificationException</h2>
<!-- backwards compatibility -->
<a id="schemaverificationexception"></a>
<a id="schema_VerificationException"></a>
<a id="tocSverificationexception"></a>
<a id="tocsverificationexception"></a>

```json
null
```

<h2 id="tocS_ActionsList">ActionsList</h2>
<!-- backwards compatibility -->
<a id="schemaactionslist"></a>
<a id="schema_ActionsList"></a>
<a id="tocSactionslist"></a>
<a id="tocsactionslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_topicARN">topicARN</h2>
<!-- backwards compatibility -->
<a id="schematopicarn"></a>
<a id="schema_topicARN"></a>
<a id="tocStopicarn"></a>
<a id="tocstopicarn"></a>

```json
"string"
```

<h2 id="tocS_label">label</h2>
<!-- backwards compatibility -->
<a id="schemalabel"></a>
<a id="schema_label"></a>
<a id="tocSlabel"></a>
<a id="tocslabel"></a>

```json
"string"
```

<h2 id="tocS_DelegatesList">DelegatesList</h2>
<!-- backwards compatibility -->
<a id="schemadelegateslist"></a>
<a id="schema_DelegatesList"></a>
<a id="tocSdelegateslist"></a>
<a id="tocsdelegateslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AddPermissionInput">AddPermissionInput</h2>
<!-- backwards compatibility -->
<a id="schemaaddpermissioninput"></a>
<a id="schema_AddPermissionInput"></a>
<a id="tocSaddpermissioninput"></a>
<a id="tocsaddpermissioninput"></a>

```json
{
  "TopicArn": {},
  "Label": {},
  "AWSAccountId": {},
  "ActionName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TopicArn|object|true|none|none|
|Label|object|true|none|none|
|AWSAccountId|object|true|none|none|
|ActionName|object|true|none|none|

<h2 id="tocS_AmazonResourceName">AmazonResourceName</h2>
<!-- backwards compatibility -->
<a id="schemaamazonresourcename"></a>
<a id="schema_AmazonResourceName"></a>
<a id="tocSamazonresourcename"></a>
<a id="tocsamazonresourcename"></a>

```json
"string"
```

<h2 id="tocS_boolean">boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
```

<h2 id="tocS_BatchResultErrorEntry">BatchResultErrorEntry</h2>
<!-- backwards compatibility -->
<a id="schemabatchresulterrorentry"></a>
<a id="schema_BatchResultErrorEntry"></a>
<a id="tocSbatchresulterrorentry"></a>
<a id="tocsbatchresulterrorentry"></a>

```json
{
  "Id": {},
  "Code": {},
  "Message": {},
  "SenderFault": {}
}
```

Gives a detailed description of failed messages in the batch.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|Code|object|true|none|none|
|Message|object|false|none|none|
|SenderFault|object|true|none|none|

<h2 id="tocS_BatchResultErrorEntryList">BatchResultErrorEntryList</h2>
<!-- backwards compatibility -->
<a id="schemabatchresulterrorentrylist"></a>
<a id="schema_BatchResultErrorEntryList"></a>
<a id="tocSbatchresulterrorentrylist"></a>
<a id="tocsbatchresulterrorentrylist"></a>

```json
[
  {
    "Id": {},
    "Code": {},
    "Message": {},
    "SenderFault": {}
  }
]
```

<h2 id="tocS_Binary">Binary</h2>
<!-- backwards compatibility -->
<a id="schemabinary"></a>
<a id="schema_Binary"></a>
<a id="tocSbinary"></a>
<a id="tocsbinary"></a>

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

<h2 id="tocS_CheckIfPhoneNumberIsOptedOutInput">CheckIfPhoneNumberIsOptedOutInput</h2>
<!-- backwards compatibility -->
<a id="schemacheckifphonenumberisoptedoutinput"></a>
<a id="schema_CheckIfPhoneNumberIsOptedOutInput"></a>
<a id="tocScheckifphonenumberisoptedoutinput"></a>
<a id="tocscheckifphonenumberisoptedoutinput"></a>

```json
{
  "phoneNumber": {}
}
```

The input for the <code>CheckIfPhoneNumberIsOptedOut</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|phoneNumber|object|true|none|none|

<h2 id="tocS_token">token</h2>
<!-- backwards compatibility -->
<a id="schematoken"></a>
<a id="schema_token"></a>
<a id="tocStoken"></a>
<a id="tocstoken"></a>

```json
"string"
```

<h2 id="tocS_authenticateOnUnsubscribe">authenticateOnUnsubscribe</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticateonunsubscribe"></a>
<a id="schema_authenticateOnUnsubscribe"></a>
<a id="tocSauthenticateonunsubscribe"></a>
<a id="tocsauthenticateonunsubscribe"></a>

```json
"string"
```

<h2 id="tocS_ConfirmSubscriptionInput">ConfirmSubscriptionInput</h2>
<!-- backwards compatibility -->
<a id="schemaconfirmsubscriptioninput"></a>
<a id="schema_ConfirmSubscriptionInput"></a>
<a id="tocSconfirmsubscriptioninput"></a>
<a id="tocsconfirmsubscriptioninput"></a>

```json
{
  "TopicArn": {},
  "Token": {},
  "AuthenticateOnUnsubscribe": {}
}
```

Input for ConfirmSubscription action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TopicArn|object|true|none|none|
|Token|object|true|none|none|
|AuthenticateOnUnsubscribe|object|false|none|none|

<h2 id="tocS_subscriptionARN">subscriptionARN</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionarn"></a>
<a id="schema_subscriptionARN"></a>
<a id="tocSsubscriptionarn"></a>
<a id="tocssubscriptionarn"></a>

```json
"string"
```

<h2 id="tocS_MapStringToString">MapStringToString</h2>
<!-- backwards compatibility -->
<a id="schemamapstringtostring"></a>
<a id="schema_MapStringToString"></a>
<a id="tocSmapstringtostring"></a>
<a id="tocsmapstringtostring"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[String](#schemastring)|false|none|none|

<h2 id="tocS_CreatePlatformApplicationInput">CreatePlatformApplicationInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateplatformapplicationinput"></a>
<a id="schema_CreatePlatformApplicationInput"></a>
<a id="tocScreateplatformapplicationinput"></a>
<a id="tocscreateplatformapplicationinput"></a>

```json
{
  "Name": {},
  "Platform": {},
  "Attributes": {
    "property1": "string",
    "property2": "string"
  }
}
```

Input for CreatePlatformApplication action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Platform|object|true|none|none|
|Attributes|object|true|none|none|

<h2 id="tocS_CreatePlatformEndpointInput">CreatePlatformEndpointInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateplatformendpointinput"></a>
<a id="schema_CreatePlatformEndpointInput"></a>
<a id="tocScreateplatformendpointinput"></a>
<a id="tocscreateplatformendpointinput"></a>

```json
{
  "PlatformApplicationArn": {},
  "Token": {},
  "CustomUserData": {},
  "Attributes": {
    "property1": "string",
    "property2": "string"
  }
}
```

Input for CreatePlatformEndpoint action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PlatformApplicationArn|object|true|none|none|
|Token|object|true|none|none|
|CustomUserData|object|false|none|none|
|Attributes|object|false|none|none|

<h2 id="tocS_PhoneNumberString">PhoneNumberString</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumberstring"></a>
<a id="schema_PhoneNumberString"></a>
<a id="tocSphonenumberstring"></a>
<a id="tocsphonenumberstring"></a>

```json
"string"
```

<h2 id="tocS_LanguageCodeString">LanguageCodeString</h2>
<!-- backwards compatibility -->
<a id="schemalanguagecodestring"></a>
<a id="schema_LanguageCodeString"></a>
<a id="tocSlanguagecodestring"></a>
<a id="tocslanguagecodestring"></a>

```json
"en-US"
```

Supported language code for sending OTP message

<h2 id="tocS_CreateSMSSandboxPhoneNumberInput">CreateSMSSandboxPhoneNumberInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatesmssandboxphonenumberinput"></a>
<a id="schema_CreateSMSSandboxPhoneNumberInput"></a>
<a id="tocScreatesmssandboxphonenumberinput"></a>
<a id="tocscreatesmssandboxphonenumberinput"></a>

```json
{
  "PhoneNumber": {},
  "LanguageCode": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PhoneNumber|object|true|none|none|
|LanguageCode|object|false|none|none|

<h2 id="tocS_topicName">topicName</h2>
<!-- backwards compatibility -->
<a id="schematopicname"></a>
<a id="schema_topicName"></a>
<a id="tocStopicname"></a>
<a id="tocstopicname"></a>

```json
"string"
```

<h2 id="tocS_TopicAttributesMap">TopicAttributesMap</h2>
<!-- backwards compatibility -->
<a id="schematopicattributesmap"></a>
<a id="schema_TopicAttributesMap"></a>
<a id="tocStopicattributesmap"></a>
<a id="tocstopicattributesmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[attributeValue](#schemaattributevalue)|false|none|none|

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

<h2 id="tocS_CreateTopicInput">CreateTopicInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatetopicinput"></a>
<a id="schema_CreateTopicInput"></a>
<a id="tocScreatetopicinput"></a>
<a id="tocscreatetopicinput"></a>

```json
{
  "Name": {},
  "Attributes": {
    "property1": "string",
    "property2": "string"
  },
  "Tags": {},
  "DataProtectionPolicy": {}
}
```

Input for CreateTopic action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Attributes|object|false|none|none|
|Tags|object|false|none|none|
|DataProtectionPolicy|object|false|none|none|

<h2 id="tocS_DeleteEndpointInput">DeleteEndpointInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteendpointinput"></a>
<a id="schema_DeleteEndpointInput"></a>
<a id="tocSdeleteendpointinput"></a>
<a id="tocsdeleteendpointinput"></a>

```json
{
  "EndpointArn": {}
}
```

Input for DeleteEndpoint action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointArn|object|true|none|none|

<h2 id="tocS_DeletePlatformApplicationInput">DeletePlatformApplicationInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteplatformapplicationinput"></a>
<a id="schema_DeletePlatformApplicationInput"></a>
<a id="tocSdeleteplatformapplicationinput"></a>
<a id="tocsdeleteplatformapplicationinput"></a>

```json
{
  "PlatformApplicationArn": {}
}
```

Input for DeletePlatformApplication action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PlatformApplicationArn|object|true|none|none|

<h2 id="tocS_DeleteSMSSandboxPhoneNumberInput">DeleteSMSSandboxPhoneNumberInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletesmssandboxphonenumberinput"></a>
<a id="schema_DeleteSMSSandboxPhoneNumberInput"></a>
<a id="tocSdeletesmssandboxphonenumberinput"></a>
<a id="tocsdeletesmssandboxphonenumberinput"></a>

```json
{
  "PhoneNumber": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PhoneNumber|object|true|none|none|

<h2 id="tocS_DeleteTopicInput">DeleteTopicInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletetopicinput"></a>
<a id="schema_DeleteTopicInput"></a>
<a id="tocSdeletetopicinput"></a>
<a id="tocsdeletetopicinput"></a>

```json
{
  "TopicArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TopicArn|object|true|none|none|

<h2 id="tocS_Endpoint">Endpoint</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint"></a>
<a id="schema_Endpoint"></a>
<a id="tocSendpoint"></a>
<a id="tocsendpoint"></a>

```json
{
  "EndpointArn": {},
  "Attributes": {
    "property1": "string",
    "property2": "string"
  }
}
```

The endpoint for mobile app and device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointArn|object|false|none|none|
|Attributes|object|false|none|none|

<h2 id="tocS_GetDataProtectionPolicyInput">GetDataProtectionPolicyInput</h2>
<!-- backwards compatibility -->
<a id="schemagetdataprotectionpolicyinput"></a>
<a id="schema_GetDataProtectionPolicyInput"></a>
<a id="tocSgetdataprotectionpolicyinput"></a>
<a id="tocsgetdataprotectionpolicyinput"></a>

```json
{
  "ResourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|

<h2 id="tocS_GetEndpointAttributesInput">GetEndpointAttributesInput</h2>
<!-- backwards compatibility -->
<a id="schemagetendpointattributesinput"></a>
<a id="schema_GetEndpointAttributesInput"></a>
<a id="tocSgetendpointattributesinput"></a>
<a id="tocsgetendpointattributesinput"></a>

```json
{
  "EndpointArn": {}
}
```

Input for GetEndpointAttributes action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointArn|object|true|none|none|

<h2 id="tocS_GetPlatformApplicationAttributesInput">GetPlatformApplicationAttributesInput</h2>
<!-- backwards compatibility -->
<a id="schemagetplatformapplicationattributesinput"></a>
<a id="schema_GetPlatformApplicationAttributesInput"></a>
<a id="tocSgetplatformapplicationattributesinput"></a>
<a id="tocsgetplatformapplicationattributesinput"></a>

```json
{
  "PlatformApplicationArn": {}
}
```

Input for GetPlatformApplicationAttributes action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PlatformApplicationArn|object|true|none|none|

<h2 id="tocS_ListString">ListString</h2>
<!-- backwards compatibility -->
<a id="schemaliststring"></a>
<a id="schema_ListString"></a>
<a id="tocSliststring"></a>
<a id="tocsliststring"></a>

```json
[
  "string"
]
```

<h2 id="tocS_GetSMSAttributesInput">GetSMSAttributesInput</h2>
<!-- backwards compatibility -->
<a id="schemagetsmsattributesinput"></a>
<a id="schema_GetSMSAttributesInput"></a>
<a id="tocSgetsmsattributesinput"></a>
<a id="tocsgetsmsattributesinput"></a>

```json
{
  "attributes": {}
}
```

The input for the <code>GetSMSAttributes</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|none|

<h2 id="tocS_GetSMSSandboxAccountStatusInput">GetSMSSandboxAccountStatusInput</h2>
<!-- backwards compatibility -->
<a id="schemagetsmssandboxaccountstatusinput"></a>
<a id="schema_GetSMSSandboxAccountStatusInput"></a>
<a id="tocSgetsmssandboxaccountstatusinput"></a>
<a id="tocsgetsmssandboxaccountstatusinput"></a>

```json
{}
```

<h2 id="tocS_GetSubscriptionAttributesInput">GetSubscriptionAttributesInput</h2>
<!-- backwards compatibility -->
<a id="schemagetsubscriptionattributesinput"></a>
<a id="schema_GetSubscriptionAttributesInput"></a>
<a id="tocSgetsubscriptionattributesinput"></a>
<a id="tocsgetsubscriptionattributesinput"></a>

```json
{
  "SubscriptionArn": {}
}
```

Input for GetSubscriptionAttributes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubscriptionArn|object|true|none|none|

<h2 id="tocS_SubscriptionAttributesMap">SubscriptionAttributesMap</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionattributesmap"></a>
<a id="schema_SubscriptionAttributesMap"></a>
<a id="tocSsubscriptionattributesmap"></a>
<a id="tocssubscriptionattributesmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[attributeValue](#schemaattributevalue)|false|none|none|

<h2 id="tocS_GetTopicAttributesInput">GetTopicAttributesInput</h2>
<!-- backwards compatibility -->
<a id="schemagettopicattributesinput"></a>
<a id="schema_GetTopicAttributesInput"></a>
<a id="tocSgettopicattributesinput"></a>
<a id="tocsgettopicattributesinput"></a>

```json
{
  "TopicArn": {}
}
```

Input for GetTopicAttributes action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TopicArn|object|true|none|none|

<h2 id="tocS_Iso2CountryCode">Iso2CountryCode</h2>
<!-- backwards compatibility -->
<a id="schemaiso2countrycode"></a>
<a id="schema_Iso2CountryCode"></a>
<a id="tocSiso2countrycode"></a>
<a id="tocsiso2countrycode"></a>

```json
"st"
```

The two-character code, in ISO 3166-1 alpha-2 format, for the country or region. For example, GB or US.

<h2 id="tocS_ListEndpointsByPlatformApplicationInput">ListEndpointsByPlatformApplicationInput</h2>
<!-- backwards compatibility -->
<a id="schemalistendpointsbyplatformapplicationinput"></a>
<a id="schema_ListEndpointsByPlatformApplicationInput"></a>
<a id="tocSlistendpointsbyplatformapplicationinput"></a>
<a id="tocslistendpointsbyplatformapplicationinput"></a>

```json
{
  "PlatformApplicationArn": {},
  "NextToken": {}
}
```

Input for ListEndpointsByPlatformApplication action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PlatformApplicationArn|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListOfEndpoints">ListOfEndpoints</h2>
<!-- backwards compatibility -->
<a id="schemalistofendpoints"></a>
<a id="schema_ListOfEndpoints"></a>
<a id="tocSlistofendpoints"></a>
<a id="tocslistofendpoints"></a>

```json
[
  {
    "EndpointArn": {},
    "Attributes": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_PlatformApplication">PlatformApplication</h2>
<!-- backwards compatibility -->
<a id="schemaplatformapplication"></a>
<a id="schema_PlatformApplication"></a>
<a id="tocSplatformapplication"></a>
<a id="tocsplatformapplication"></a>

```json
{
  "PlatformApplicationArn": {},
  "Attributes": {
    "property1": "string",
    "property2": "string"
  }
}
```

Platform application object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PlatformApplicationArn|object|false|none|none|
|Attributes|object|false|none|none|

<h2 id="tocS_ListOfPlatformApplications">ListOfPlatformApplications</h2>
<!-- backwards compatibility -->
<a id="schemalistofplatformapplications"></a>
<a id="schema_ListOfPlatformApplications"></a>
<a id="tocSlistofplatformapplications"></a>
<a id="tocslistofplatformapplications"></a>

```json
[
  {
    "PlatformApplicationArn": {},
    "Attributes": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_nextToken">nextToken</h2>
<!-- backwards compatibility -->
<a id="schemanexttoken"></a>
<a id="schema_nextToken"></a>
<a id="tocSnexttoken"></a>
<a id="tocsnexttoken"></a>

```json
"string"
```

<h2 id="tocS_MaxItemsListOriginationNumbers">MaxItemsListOriginationNumbers</h2>
<!-- backwards compatibility -->
<a id="schemamaxitemslistoriginationnumbers"></a>
<a id="schema_MaxItemsListOriginationNumbers"></a>
<a id="tocSmaxitemslistoriginationnumbers"></a>
<a id="tocsmaxitemslistoriginationnumbers"></a>

```json
1
```

<h2 id="tocS_ListOriginationNumbersRequest">ListOriginationNumbersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistoriginationnumbersrequest"></a>
<a id="schema_ListOriginationNumbersRequest"></a>
<a id="tocSlistoriginationnumbersrequest"></a>
<a id="tocslistoriginationnumbersrequest"></a>

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

<h2 id="tocS_PhoneNumberInformationList">PhoneNumberInformationList</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumberinformationlist"></a>
<a id="schema_PhoneNumberInformationList"></a>
<a id="tocSphonenumberinformationlist"></a>
<a id="tocsphonenumberinformationlist"></a>

```json
[
  {
    "CreatedAt": {},
    "PhoneNumber": {},
    "Status": {},
    "Iso2CountryCode": {},
    "RouteType": {},
    "NumberCapabilities": {}
  }
]
```

List of customer owned phone numbers.

<h2 id="tocS_string">string</h2>
<!-- backwards compatibility -->
<a id="schemastring-1"></a>
<a id="schema_string"></a>
<a id="tocSstring-1"></a>
<a id="tocsstring-1"></a>

```json
"string"
```

<h2 id="tocS_ListPhoneNumbersOptedOutInput">ListPhoneNumbersOptedOutInput</h2>
<!-- backwards compatibility -->
<a id="schemalistphonenumbersoptedoutinput"></a>
<a id="schema_ListPhoneNumbersOptedOutInput"></a>
<a id="tocSlistphonenumbersoptedoutinput"></a>
<a id="tocslistphonenumbersoptedoutinput"></a>

```json
{
  "nextToken": {}
}
```

The input for the <code>ListPhoneNumbersOptedOut</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|

<h2 id="tocS_PhoneNumberList">PhoneNumberList</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumberlist"></a>
<a id="schema_PhoneNumberList"></a>
<a id="tocSphonenumberlist"></a>
<a id="tocsphonenumberlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ListPlatformApplicationsInput">ListPlatformApplicationsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistplatformapplicationsinput"></a>
<a id="schema_ListPlatformApplicationsInput"></a>
<a id="tocSlistplatformapplicationsinput"></a>
<a id="tocslistplatformapplicationsinput"></a>

```json
{
  "NextToken": {}
}
```

Input for ListPlatformApplications action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|

<h2 id="tocS_MaxItems">MaxItems</h2>
<!-- backwards compatibility -->
<a id="schemamaxitems"></a>
<a id="schema_MaxItems"></a>
<a id="tocSmaxitems"></a>
<a id="tocsmaxitems"></a>

```json
1
```

<h2 id="tocS_ListSMSSandboxPhoneNumbersInput">ListSMSSandboxPhoneNumbersInput</h2>
<!-- backwards compatibility -->
<a id="schemalistsmssandboxphonenumbersinput"></a>
<a id="schema_ListSMSSandboxPhoneNumbersInput"></a>
<a id="tocSlistsmssandboxphonenumbersinput"></a>
<a id="tocslistsmssandboxphonenumbersinput"></a>

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

<h2 id="tocS_SMSSandboxPhoneNumberList">SMSSandboxPhoneNumberList</h2>
<!-- backwards compatibility -->
<a id="schemasmssandboxphonenumberlist"></a>
<a id="schema_SMSSandboxPhoneNumberList"></a>
<a id="tocSsmssandboxphonenumberlist"></a>
<a id="tocssmssandboxphonenumberlist"></a>

```json
[
  {
    "PhoneNumber": {},
    "Status": {}
  }
]
```

<h2 id="tocS_ListSubscriptionsByTopicInput">ListSubscriptionsByTopicInput</h2>
<!-- backwards compatibility -->
<a id="schemalistsubscriptionsbytopicinput"></a>
<a id="schema_ListSubscriptionsByTopicInput"></a>
<a id="tocSlistsubscriptionsbytopicinput"></a>
<a id="tocslistsubscriptionsbytopicinput"></a>

```json
{
  "TopicArn": {},
  "NextToken": {}
}
```

Input for ListSubscriptionsByTopic action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TopicArn|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_SubscriptionsList">SubscriptionsList</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionslist"></a>
<a id="schema_SubscriptionsList"></a>
<a id="tocSsubscriptionslist"></a>
<a id="tocssubscriptionslist"></a>

```json
[
  {
    "SubscriptionArn": {},
    "Owner": {},
    "Protocol": {},
    "Endpoint": {},
    "TopicArn": {}
  }
]
```

<h2 id="tocS_ListSubscriptionsInput">ListSubscriptionsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistsubscriptionsinput"></a>
<a id="schema_ListSubscriptionsInput"></a>
<a id="tocSlistsubscriptionsinput"></a>
<a id="tocslistsubscriptionsinput"></a>

```json
{
  "NextToken": {}
}
```

Input for ListSubscriptions action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|

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

<h2 id="tocS_ListTopicsInput">ListTopicsInput</h2>
<!-- backwards compatibility -->
<a id="schemalisttopicsinput"></a>
<a id="schema_ListTopicsInput"></a>
<a id="tocSlisttopicsinput"></a>
<a id="tocslisttopicsinput"></a>

```json
{
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|

<h2 id="tocS_TopicsList">TopicsList</h2>
<!-- backwards compatibility -->
<a id="schematopicslist"></a>
<a id="schema_TopicsList"></a>
<a id="tocStopicslist"></a>
<a id="tocstopicslist"></a>

```json
[
  {
    "TopicArn": {}
  }
]
```

<h2 id="tocS_MessageAttributeMap">MessageAttributeMap</h2>
<!-- backwards compatibility -->
<a id="schemamessageattributemap"></a>
<a id="schema_MessageAttributeMap"></a>
<a id="tocSmessageattributemap"></a>
<a id="tocsmessageattributemap"></a>

```json
{
  "property1": {
    "DataType": {},
    "StringValue": {},
    "BinaryValue": {}
  },
  "property2": {
    "DataType": {},
    "StringValue": {},
    "BinaryValue": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[MessageAttributeValue](#schemamessageattributevalue)|false|none|<p>The user-specified message attribute value. For string data types, the value attribute has the same restrictions on the content as the message body. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/api/API_Publish.html">Publish</a>.</p> <p>Name, type, and value must not be empty or null. In addition, the message body should not be empty or null. All parts of the message attribute, including name, type, and value, are included in the message size restriction, which is currently 256 KB (262,144 bytes). For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMessageAttributes.html">Amazon SNS message attributes</a> and <a href="https://docs.aws.amazon.com/sns/latest/dg/sms_publish-to-phone.html">Publishing to a mobile phone</a> in the <i>Amazon SNS Developer Guide.</i> </p>|

<h2 id="tocS_NumberCapability">NumberCapability</h2>
<!-- backwards compatibility -->
<a id="schemanumbercapability"></a>
<a id="schema_NumberCapability"></a>
<a id="tocSnumbercapability"></a>
<a id="tocsnumbercapability"></a>

```json
"SMS"
```

Enum listing out all supported number capabilities.

<h2 id="tocS_NumberCapabilityList">NumberCapabilityList</h2>
<!-- backwards compatibility -->
<a id="schemanumbercapabilitylist"></a>
<a id="schema_NumberCapabilityList"></a>
<a id="tocSnumbercapabilitylist"></a>
<a id="tocsnumbercapabilitylist"></a>

```json
[
  "SMS"
]
```

List of number capability (SMS,MMS,Voice).

<h2 id="tocS_OTPCode">OTPCode</h2>
<!-- backwards compatibility -->
<a id="schemaotpcode"></a>
<a id="schema_OTPCode"></a>
<a id="tocSotpcode"></a>
<a id="tocsotpcode"></a>

```json
"string"
```

String of Origination/Destination address including phone numbers and email addresses

<h2 id="tocS_OptInPhoneNumberInput">OptInPhoneNumberInput</h2>
<!-- backwards compatibility -->
<a id="schemaoptinphonenumberinput"></a>
<a id="schema_OptInPhoneNumberInput"></a>
<a id="tocSoptinphonenumberinput"></a>
<a id="tocsoptinphonenumberinput"></a>

```json
{
  "phoneNumber": {}
}
```

Input for the OptInPhoneNumber action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|phoneNumber|object|true|none|none|

<h2 id="tocS_Timestamp">Timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_Timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_RouteType">RouteType</h2>
<!-- backwards compatibility -->
<a id="schemaroutetype"></a>
<a id="schema_RouteType"></a>
<a id="tocSroutetype"></a>
<a id="tocsroutetype"></a>

```json
"Transactional"
```

Enum listing out all supported route types. The following enum values are supported. 1. Transactional : Non-marketing traffic 2. Promotional : Marketing 3. Premium : Premium routes for OTP delivery to the carriers

<h2 id="tocS_PhoneNumberInformation">PhoneNumberInformation</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumberinformation"></a>
<a id="schema_PhoneNumberInformation"></a>
<a id="tocSphonenumberinformation"></a>
<a id="tocsphonenumberinformation"></a>

```json
{
  "CreatedAt": {},
  "PhoneNumber": {},
  "Status": {},
  "Iso2CountryCode": {},
  "RouteType": {},
  "NumberCapabilities": {}
}
```

A list of phone numbers and their metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreatedAt|object|false|none|none|
|PhoneNumber|object|false|none|none|
|Status|object|false|none|none|
|Iso2CountryCode|object|false|none|none|
|RouteType|object|false|none|none|
|NumberCapabilities|object|false|none|none|

<h2 id="tocS_PublishBatchRequestEntryList">PublishBatchRequestEntryList</h2>
<!-- backwards compatibility -->
<a id="schemapublishbatchrequestentrylist"></a>
<a id="schema_PublishBatchRequestEntryList"></a>
<a id="tocSpublishbatchrequestentrylist"></a>
<a id="tocspublishbatchrequestentrylist"></a>

```json
[
  {
    "Id": {},
    "Message": {},
    "Subject": {},
    "MessageStructure": {},
    "MessageAttributes": {
      "property1": {
        "DataType": {},
        "StringValue": {},
        "BinaryValue": {}
      },
      "property2": {
        "DataType": {},
        "StringValue": {},
        "BinaryValue": {}
      }
    },
    "MessageDeduplicationId": {},
    "MessageGroupId": {}
  }
]
```

<h2 id="tocS_PublishBatchInput">PublishBatchInput</h2>
<!-- backwards compatibility -->
<a id="schemapublishbatchinput"></a>
<a id="schema_PublishBatchInput"></a>
<a id="tocSpublishbatchinput"></a>
<a id="tocspublishbatchinput"></a>

```json
{
  "TopicArn": {},
  "PublishBatchRequestEntries": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TopicArn|object|true|none|none|
|PublishBatchRequestEntries|object|true|none|none|

<h2 id="tocS_message">message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
"string"
```

<h2 id="tocS_subject">subject</h2>
<!-- backwards compatibility -->
<a id="schemasubject"></a>
<a id="schema_subject"></a>
<a id="tocSsubject"></a>
<a id="tocssubject"></a>

```json
"string"
```

<h2 id="tocS_messageStructure">messageStructure</h2>
<!-- backwards compatibility -->
<a id="schemamessagestructure"></a>
<a id="schema_messageStructure"></a>
<a id="tocSmessagestructure"></a>
<a id="tocsmessagestructure"></a>

```json
"string"
```

<h2 id="tocS_PublishBatchResultEntryList">PublishBatchResultEntryList</h2>
<!-- backwards compatibility -->
<a id="schemapublishbatchresultentrylist"></a>
<a id="schema_PublishBatchResultEntryList"></a>
<a id="tocSpublishbatchresultentrylist"></a>
<a id="tocspublishbatchresultentrylist"></a>

```json
[
  {
    "Id": {},
    "MessageId": {},
    "SequenceNumber": {}
  }
]
```

<h2 id="tocS_messageId">messageId</h2>
<!-- backwards compatibility -->
<a id="schemamessageid"></a>
<a id="schema_messageId"></a>
<a id="tocSmessageid"></a>
<a id="tocsmessageid"></a>

```json
"string"
```

<h2 id="tocS_PublishBatchResultEntry">PublishBatchResultEntry</h2>
<!-- backwards compatibility -->
<a id="schemapublishbatchresultentry"></a>
<a id="schema_PublishBatchResultEntry"></a>
<a id="tocSpublishbatchresultentry"></a>
<a id="tocspublishbatchresultentry"></a>

```json
{
  "Id": {},
  "MessageId": {},
  "SequenceNumber": {}
}
```

Encloses data related to a successful message in a batch request for topic.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|MessageId|object|false|none|none|
|SequenceNumber|object|false|none|none|

<h2 id="tocS_PublishInput">PublishInput</h2>
<!-- backwards compatibility -->
<a id="schemapublishinput"></a>
<a id="schema_PublishInput"></a>
<a id="tocSpublishinput"></a>
<a id="tocspublishinput"></a>

```json
{
  "TopicArn": {},
  "TargetArn": {},
  "PhoneNumber": {},
  "Message": {},
  "Subject": {},
  "MessageStructure": {},
  "MessageAttributes": {
    "property1": {
      "DataType": {},
      "StringValue": {},
      "BinaryValue": {}
    },
    "property2": {
      "DataType": {},
      "StringValue": {},
      "BinaryValue": {}
    }
  },
  "MessageDeduplicationId": {},
  "MessageGroupId": {}
}
```

Input for Publish action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TopicArn|object|false|none|none|
|TargetArn|object|false|none|none|
|PhoneNumber|object|false|none|none|
|Message|object|true|none|none|
|Subject|object|false|none|none|
|MessageStructure|object|false|none|none|
|MessageAttributes|object|false|none|none|
|MessageDeduplicationId|object|false|none|none|
|MessageGroupId|object|false|none|none|

<h2 id="tocS_PutDataProtectionPolicyInput">PutDataProtectionPolicyInput</h2>
<!-- backwards compatibility -->
<a id="schemaputdataprotectionpolicyinput"></a>
<a id="schema_PutDataProtectionPolicyInput"></a>
<a id="tocSputdataprotectionpolicyinput"></a>
<a id="tocsputdataprotectionpolicyinput"></a>

```json
{
  "ResourceArn": {},
  "DataProtectionPolicy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|DataProtectionPolicy|object|true|none|none|

<h2 id="tocS_RemovePermissionInput">RemovePermissionInput</h2>
<!-- backwards compatibility -->
<a id="schemaremovepermissioninput"></a>
<a id="schema_RemovePermissionInput"></a>
<a id="tocSremovepermissioninput"></a>
<a id="tocsremovepermissioninput"></a>

```json
{
  "TopicArn": {},
  "Label": {}
}
```

Input for RemovePermission action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TopicArn|object|true|none|none|
|Label|object|true|none|none|

<h2 id="tocS_SMSSandboxPhoneNumberVerificationStatus">SMSSandboxPhoneNumberVerificationStatus</h2>
<!-- backwards compatibility -->
<a id="schemasmssandboxphonenumberverificationstatus"></a>
<a id="schema_SMSSandboxPhoneNumberVerificationStatus"></a>
<a id="tocSsmssandboxphonenumberverificationstatus"></a>
<a id="tocssmssandboxphonenumberverificationstatus"></a>

```json
"Pending"
```

Enum listing out all supported destination phone number verification statuses. The following enum values are supported. 1. PENDING : The destination phone number is pending verification. 2. VERIFIED : The destination phone number is verified.

<h2 id="tocS_SMSSandboxPhoneNumber">SMSSandboxPhoneNumber</h2>
<!-- backwards compatibility -->
<a id="schemasmssandboxphonenumber"></a>
<a id="schema_SMSSandboxPhoneNumber"></a>
<a id="tocSsmssandboxphonenumber"></a>
<a id="tocssmssandboxphonenumber"></a>

```json
{
  "PhoneNumber": {},
  "Status": {}
}
```

<p>A verified or pending destination phone number in the SMS sandbox.</p> <p>When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the <i>SMS sandbox</i>. The SMS sandbox provides a safe environment for you to try Amazon SNS features without risking your reputation as an SMS sender. While your Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send SMS messages only to verified destination phone numbers. For more information, including how to move out of the sandbox to send messages without restrictions, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">SMS sandbox</a> in the <i>Amazon SNS Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PhoneNumber|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_SetEndpointAttributesInput">SetEndpointAttributesInput</h2>
<!-- backwards compatibility -->
<a id="schemasetendpointattributesinput"></a>
<a id="schema_SetEndpointAttributesInput"></a>
<a id="tocSsetendpointattributesinput"></a>
<a id="tocssetendpointattributesinput"></a>

```json
{
  "EndpointArn": {},
  "Attributes": {
    "property1": "string",
    "property2": "string"
  }
}
```

Input for SetEndpointAttributes action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointArn|object|true|none|none|
|Attributes|object|true|none|none|

<h2 id="tocS_SetPlatformApplicationAttributesInput">SetPlatformApplicationAttributesInput</h2>
<!-- backwards compatibility -->
<a id="schemasetplatformapplicationattributesinput"></a>
<a id="schema_SetPlatformApplicationAttributesInput"></a>
<a id="tocSsetplatformapplicationattributesinput"></a>
<a id="tocssetplatformapplicationattributesinput"></a>

```json
{
  "PlatformApplicationArn": {},
  "Attributes": {
    "property1": "string",
    "property2": "string"
  }
}
```

Input for SetPlatformApplicationAttributes action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PlatformApplicationArn|object|true|none|none|
|Attributes|object|true|none|none|

<h2 id="tocS_SetSMSAttributesInput">SetSMSAttributesInput</h2>
<!-- backwards compatibility -->
<a id="schemasetsmsattributesinput"></a>
<a id="schema_SetSMSAttributesInput"></a>
<a id="tocSsetsmsattributesinput"></a>
<a id="tocssetsmsattributesinput"></a>

```json
{
  "attributes": {
    "property1": "string",
    "property2": "string"
  }
}
```

The input for the SetSMSAttributes action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|true|none|none|

<h2 id="tocS_attributeName">attributeName</h2>
<!-- backwards compatibility -->
<a id="schemaattributename"></a>
<a id="schema_attributeName"></a>
<a id="tocSattributename"></a>
<a id="tocsattributename"></a>

```json
"string"
```

<h2 id="tocS_SetSubscriptionAttributesInput">SetSubscriptionAttributesInput</h2>
<!-- backwards compatibility -->
<a id="schemasetsubscriptionattributesinput"></a>
<a id="schema_SetSubscriptionAttributesInput"></a>
<a id="tocSsetsubscriptionattributesinput"></a>
<a id="tocssetsubscriptionattributesinput"></a>

```json
{
  "SubscriptionArn": {},
  "AttributeName": {},
  "AttributeValue": {}
}
```

Input for SetSubscriptionAttributes action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubscriptionArn|object|true|none|none|
|AttributeName|object|true|none|none|
|AttributeValue|object|false|none|none|

<h2 id="tocS_SetTopicAttributesInput">SetTopicAttributesInput</h2>
<!-- backwards compatibility -->
<a id="schemasettopicattributesinput"></a>
<a id="schema_SetTopicAttributesInput"></a>
<a id="tocSsettopicattributesinput"></a>
<a id="tocssettopicattributesinput"></a>

```json
{
  "TopicArn": {},
  "AttributeName": {},
  "AttributeValue": {}
}
```

Input for SetTopicAttributes action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TopicArn|object|true|none|none|
|AttributeName|object|true|none|none|
|AttributeValue|object|false|none|none|

<h2 id="tocS_protocol">protocol</h2>
<!-- backwards compatibility -->
<a id="schemaprotocol"></a>
<a id="schema_protocol"></a>
<a id="tocSprotocol"></a>
<a id="tocsprotocol"></a>

```json
"string"
```

<h2 id="tocS_endpoint">endpoint</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint-1"></a>
<a id="schema_endpoint"></a>
<a id="tocSendpoint-1"></a>
<a id="tocsendpoint-1"></a>

```json
"string"
```

<h2 id="tocS_SubscribeInput">SubscribeInput</h2>
<!-- backwards compatibility -->
<a id="schemasubscribeinput"></a>
<a id="schema_SubscribeInput"></a>
<a id="tocSsubscribeinput"></a>
<a id="tocssubscribeinput"></a>

```json
{
  "TopicArn": {},
  "Protocol": {},
  "Endpoint": {},
  "Attributes": {
    "property1": "string",
    "property2": "string"
  },
  "ReturnSubscriptionArn": {}
}
```

Input for Subscribe action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TopicArn|object|true|none|none|
|Protocol|object|true|none|none|
|Endpoint|object|false|none|none|
|Attributes|object|false|none|none|
|ReturnSubscriptionArn|object|false|none|none|

<h2 id="tocS_account">account</h2>
<!-- backwards compatibility -->
<a id="schemaaccount"></a>
<a id="schema_account"></a>
<a id="tocSaccount"></a>
<a id="tocsaccount"></a>

```json
"string"
```

<h2 id="tocS_Subscription">Subscription</h2>
<!-- backwards compatibility -->
<a id="schemasubscription"></a>
<a id="schema_Subscription"></a>
<a id="tocSsubscription"></a>
<a id="tocssubscription"></a>

```json
{
  "SubscriptionArn": {},
  "Owner": {},
  "Protocol": {},
  "Endpoint": {},
  "TopicArn": {}
}
```

A wrapper type for the attributes of an Amazon SNS subscription.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubscriptionArn|object|false|none|none|
|Owner|object|false|none|none|
|Protocol|object|false|none|none|
|Endpoint|object|false|none|none|
|TopicArn|object|false|none|none|

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

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

<h2 id="tocS_Topic">Topic</h2>
<!-- backwards compatibility -->
<a id="schematopic"></a>
<a id="schema_Topic"></a>
<a id="tocStopic"></a>
<a id="tocstopic"></a>

```json
{
  "TopicArn": {}
}
```

A wrapper type for the topic's Amazon Resource Name (ARN). To retrieve a topic's attributes, use <code>GetTopicAttributes</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TopicArn|object|false|none|none|

<h2 id="tocS_UnsubscribeInput">UnsubscribeInput</h2>
<!-- backwards compatibility -->
<a id="schemaunsubscribeinput"></a>
<a id="schema_UnsubscribeInput"></a>
<a id="tocSunsubscribeinput"></a>
<a id="tocsunsubscribeinput"></a>

```json
{
  "SubscriptionArn": {}
}
```

Input for Unsubscribe action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubscriptionArn|object|true|none|none|

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

<h2 id="tocS_VerifySMSSandboxPhoneNumberInput">VerifySMSSandboxPhoneNumberInput</h2>
<!-- backwards compatibility -->
<a id="schemaverifysmssandboxphonenumberinput"></a>
<a id="schema_VerifySMSSandboxPhoneNumberInput"></a>
<a id="tocSverifysmssandboxphonenumberinput"></a>
<a id="tocsverifysmssandboxphonenumberinput"></a>

```json
{
  "PhoneNumber": {},
  "OneTimePassword": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PhoneNumber|object|true|none|none|
|OneTimePassword|object|true|none|none|
