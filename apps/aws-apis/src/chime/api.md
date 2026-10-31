<h1 id="amazon-chime">Amazon Chime v2018-05-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>The Amazon Chime application programming interface (API) is designed so administrators can perform key tasks, such as creating and managing Amazon Chime accounts, users, and Voice Connectors. This guide provides detailed information about the Amazon Chime API, including operations, types, inputs and outputs, and error codes.</p> <p>You can use an AWS SDK, the AWS Command Line Interface (AWS CLI), or the REST API to make API calls for Amazon Chime. We recommend using an AWS SDK or the AWS CLI. The page for each API action contains a <i>See Also</i> section that includes links to information about using the action with a language-specific AWS SDK or the AWS CLI.</p> <dl> <dt>Using an AWS SDK</dt> <dd> <p> You don't need to write code to calculate a signature for request authentication. The SDK clients authenticate your requests by using access keys that you provide. For more information about AWS SDKs, see the <a href="http://aws.amazon.com/developer/">AWS Developer Center</a>. </p> </dd> <dt>Using the AWS CLI</dt> <dd> <p>Use your access keys with the AWS CLI to make API calls. For information about setting up the AWS CLI, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/installing.html">Installing the AWS Command Line Interface</a> in the <i>AWS Command Line Interface User Guide</i>. For a list of available Amazon Chime commands, see the <a href="https://docs.aws.amazon.com/cli/latest/reference/chime/index.html">Amazon Chime commands</a> in the <i>AWS CLI Command Reference</i>. </p> </dd> <dt>Using REST APIs</dt> <dd> <p>If you use REST to make API calls, you must authenticate your request by providing a signature. Amazon Chime supports Signature Version 4. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing Process</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>When making REST API calls, use the service name <code>chime</code> and REST endpoint <code>https://service.chime.aws.amazon.com</code>.</p> </dd> </dl> <p>Administrative permissions are controlled using AWS Identity and Access Management (IAM). For more information, see <a href="https://docs.aws.amazon.com/chime/latest/ag/security-iam.html">Identity and Access Management for Amazon Chime</a> in the <i>Amazon Chime Administration Guide</i>.</p>

Base URLs:

* <a href="http://service.chime.aws.amazon.com">http://service.chime.aws.amazon.com</a> - The general Amazon Chime multi-region endpoint

* <a href="https://service.chime.aws.amazon.com">https://service.chime.aws.amazon.com</a> - The general Amazon Chime multi-region endpoint

* <a href="http://chime.cn-north-1.amazonaws.com.cn">http://chime.cn-north-1.amazonaws.com.cn</a> - The Amazon Chime endpoint for China (Beijing) and China (Ningxia)

* <a href="https://chime.cn-north-1.amazonaws.com.cn">https://chime.cn-north-1.amazonaws.com.cn</a> - The Amazon Chime endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/chime/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-chime-default">Default</h1>

## AssociatePhoneNumberWithUser

<a id="opIdAssociatePhoneNumberWithUser"></a>

> Code samples

```bash
curl 'https://chime.us-east-1.amazonaws.com/accounts/string/users/string#operation=associate-phone-number?operation=associate-phone-number' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "E164PhoneNumber": "password"
  }'
```

`POST /accounts/{accountId}/users/{userId}#operation=associate-phone-number`

Associates a phone number with the specified Amazon Chime user.

> Body parameter

```json
{
  "E164PhoneNumber": "password"
}
```

<h3 id="associatephonenumberwithuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The Amazon Chime account ID.|
|userId|path|string|true|The user ID.|
|operation|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» E164PhoneNumber|body|string(password)|true|The phone number, in E.164 format.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|operation|associate-phone-number|

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

<h3 id="associatephonenumberwithuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociatePhoneNumberWithUserResponse](#schemaassociatephonenumberwithuserresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|487|487|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociatePhoneNumbersWithVoiceConnector

<a id="opIdAssociatePhoneNumbersWithVoiceConnector"></a>

> Code samples

```bash
curl 'https://chime.us-east-1.amazonaws.com/voice-connectors/string#operation=associate-phone-numbers?operation=associate-phone-numbers' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "E164PhoneNumbers": [
      "password"
    ],
    "ForceAssociate": true
  }'
```

`POST /voice-connectors/{voiceConnectorId}#operation=associate-phone-numbers`

Associates phone numbers with the specified Amazon Chime Voice Connector.

> Body parameter

```json
{
  "E164PhoneNumbers": [
    "password"
  ],
  "ForceAssociate": true
}
```

<h3 id="associatephonenumberswithvoiceconnector-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|voiceConnectorId|path|string|true|The Amazon Chime Voice Connector ID.|
|operation|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» E164PhoneNumbers|body|[[E164PhoneNumber](#schemae164phonenumber)]|true|List of phone numbers, in E.164 format.|
|» ForceAssociate|body|boolean|false|If true, associates the provided phone numbers with the provided Amazon Chime Voice Connector and removes any previously existing associations. If false, does not associate any phone numbers that have previously existing associations.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|operation|associate-phone-numbers|

> Example responses

> 200 Response

```json
{
  "PhoneNumberErrors": {}
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

<h3 id="associatephonenumberswithvoiceconnector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociatePhoneNumbersWithVoiceConnectorResponse](#schemaassociatephonenumberswithvoiceconnectorresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|487|487|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociatePhoneNumbersWithVoiceConnectorGroup

<a id="opIdAssociatePhoneNumbersWithVoiceConnectorGroup"></a>

> Code samples

```bash
curl 'https://chime.us-east-1.amazonaws.com/voice-connector-groups/string#operation=associate-phone-numbers?operation=associate-phone-numbers' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "E164PhoneNumbers": [
      "password"
    ],
    "ForceAssociate": true
  }'
```

`POST /voice-connector-groups/{voiceConnectorGroupId}#operation=associate-phone-numbers`

Associates phone numbers with the specified Amazon Chime Voice Connector group.

> Body parameter

```json
{
  "E164PhoneNumbers": [
    "password"
  ],
  "ForceAssociate": true
}
```

<h3 id="associatephonenumberswithvoiceconnectorgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|voiceConnectorGroupId|path|string|true|The Amazon Chime Voice Connector group ID.|
|operation|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» E164PhoneNumbers|body|[[E164PhoneNumber](#schemae164phonenumber)]|true|List of phone numbers, in E.164 format.|
|» ForceAssociate|body|boolean|false|If true, associates the provided phone numbers with the provided Amazon Chime Voice Connector Group and removes any previously existing associations. If false, does not associate any phone numbers that have previously existing associations.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|operation|associate-phone-numbers|

> Example responses

> 200 Response

```json
{
  "PhoneNumberErrors": {}
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

<h3 id="associatephonenumberswithvoiceconnectorgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociatePhoneNumbersWithVoiceConnectorGroupResponse](#schemaassociatephonenumberswithvoiceconnectorgroupresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|487|487|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateSigninDelegateGroupsWithAccount

<a id="opIdAssociateSigninDelegateGroupsWithAccount"></a>

> Code samples

```bash
curl 'https://chime.us-east-1.amazonaws.com/accounts/string#operation=associate-signin-delegate-groups?operation=associate-signin-delegate-groups' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "SigninDelegateGroups": [
      {
        "GroupName": {}
      }
    ]
  }'
```

`POST /accounts/{accountId}#operation=associate-signin-delegate-groups`

Associates the specified sign-in delegate groups with the specified Amazon Chime account.

> Body parameter

```json
{
  "SigninDelegateGroups": [
    {
      "GroupName": {}
    }
  ]
}
```

<h3 id="associatesignindelegategroupswithaccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The Amazon Chime account ID.|
|operation|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» SigninDelegateGroups|body|[[SigninDelegateGroup](#schemasignindelegategroup)]|true|The sign-in delegate groups.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|operation|associate-signin-delegate-groups|

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

<h3 id="associatesignindelegategroupswithaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateSigninDelegateGroupsWithAccountResponse](#schemaassociatesignindelegategroupswithaccountresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchCreateAttendee

<a id="opIdBatchCreateAttendee"></a>

> Code samples

```bash
curl 'https://chime.us-east-1.amazonaws.com/meetings/string/attendees#operation=batch-create?operation=batch-create' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Attendees": [
      {
        "ExternalUserId": {},
        "Tags": {}
      }
    ]
  }'
```

`POST /meetings/{meetingId}/attendees#operation=batch-create`

 Creates up to 100 new attendees for an active Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime SDK Developer Guide</i>. 

> Body parameter

```json
{
  "Attendees": [
    {
      "ExternalUserId": {},
      "Tags": {}
    }
  ]
}
```

<h3 id="batchcreateattendee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|meetingId|path|string|true|The Amazon Chime SDK meeting ID.|
|operation|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Attendees|body|[[CreateAttendeeRequestItem](#schemacreateattendeerequestitem)]|true|The request containing the attendees to create.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|operation|batch-create|

> Example responses

> 201 Response

```json
{
  "Attendees": {},
  "Errors": {}
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

<h3 id="batchcreateattendee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[BatchCreateAttendeeResponse](#schemabatchcreateattendeeresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|487|487|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchCreateChannelMembership

<a id="opIdBatchCreateChannelMembership"></a>

> Code samples

```bash
curl 'https://chime.us-east-1.amazonaws.com/channels/string/memberships#operation=batch-create?operation=batch-create' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Type": "DEFAULT",
    "MemberArns": [
      "string"
    ]
  }'
```

`POST /channels/{channelArn}/memberships#operation=batch-create`

Adds a specified number of users to a channel.

> Body parameter

```json
{
  "Type": "DEFAULT",
  "MemberArns": [
    "string"
  ]
}
```

<h3 id="batchcreatechannelmembership-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelArn|path|string|true|The ARN of the channel to which you're adding users.|
|x-amz-chime-bearer|header|string|false|The <code>AppInstanceUserArn</code> of the user that makes the API call.|
|operation|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Type|body|string|false|The membership type of a user, <code>DEFAULT</code> or <code>HIDDEN</code>. Default members are always returned as part of <code>ListChannelMemberships</code>. Hidden members are only returned if the type filter in <code>ListChannelMemberships</code> equals <code>HIDDEN</code>. Otherwise hidden members are not returned. This is only supported by moderators.|
|» MemberArns|body|[[ChimeArn](#schemachimearn)]|true|The ARNs of the members you want to add to the channel.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|operation|batch-create|
|» Type|DEFAULT|
|» Type|HIDDEN|

> Example responses

> 200 Response

```json
{
  "BatchChannelMemberships": {
    "InvitedBy": {
      "Arn": {},
      "Name": {}
    },
    "Type": {},
    "Members": {},
    "ChannelArn": {}
  },
  "Errors": {}
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

<h3 id="batchcreatechannelmembership-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchCreateChannelMembershipResponse](#schemabatchcreatechannelmembershipresponse)|
|480|480|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|
|481|481|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|482|482|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|485|485|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchCreateRoomMembership

<a id="opIdBatchCreateRoomMembership"></a>

> Code samples

```bash
curl 'https://chime.us-east-1.amazonaws.com/accounts/string/rooms/string/memberships#operation=batch-create?operation=batch-create' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "MembershipItemList": [
      {
        "MemberId": {},
        "Role": {}
      }
    ]
  }'
```

`POST /accounts/{accountId}/rooms/{roomId}/memberships#operation=batch-create`

Adds up to 50 members to a chat room in an Amazon Chime Enterprise account. Members can be users or bots. The member role designates whether the member is a chat room administrator or a general chat room member.

> Body parameter

```json
{
  "MembershipItemList": [
    {
      "MemberId": {},
      "Role": {}
    }
  ]
}
```

<h3 id="batchcreateroommembership-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The Amazon Chime account ID.|
|roomId|path|string|true|The room ID.|
|operation|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» MembershipItemList|body|[[MembershipItem](#schemamembershipitem)]|true|The list of membership items.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|operation|batch-create|

> Example responses

> 201 Response

```json
{
  "Errors": {}
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

<h3 id="batchcreateroommembership-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[BatchCreateRoomMembershipResponse](#schemabatchcreateroommembershipresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchDeletePhoneNumber

<a id="opIdBatchDeletePhoneNumber"></a>

> Code samples

```bash
curl 'https://chime.us-east-1.amazonaws.com/phone-numbers#operation=batch-delete?operation=batch-delete' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "PhoneNumberIds": [
      "string"
    ]
  }'
```

`POST /phone-numbers#operation=batch-delete`

<p> Moves phone numbers into the <b>Deletion queue</b>. Phone numbers must be disassociated from any users or Amazon Chime Voice Connectors before they can be deleted. </p> <p> Phone numbers remain in the <b>Deletion queue</b> for 7 days before they are deleted permanently. </p>

> Body parameter

```json
{
  "PhoneNumberIds": [
    "string"
  ]
}
```

<h3 id="batchdeletephonenumber-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|operation|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» PhoneNumberIds|body|[[String](#schemastring)]|true|List of phone number IDs.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|operation|batch-delete|

> Example responses

> 200 Response

```json
{
  "PhoneNumberErrors": {}
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

<h3 id="batchdeletephonenumber-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchDeletePhoneNumberResponse](#schemabatchdeletephonenumberresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchSuspendUser

<a id="opIdBatchSuspendUser"></a>

> Code samples

```bash
curl 'https://chime.us-east-1.amazonaws.com/accounts/string/users#operation=suspend?operation=suspend' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "UserIdList": [
      "string"
    ]
  }'
```

`POST /accounts/{accountId}/users#operation=suspend`

<p>Suspends up to 50 users from a <code>Team</code> or <code>EnterpriseLWA</code> Amazon Chime account. For more information about different account types, see <a href="https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html">Managing Your Amazon Chime Accounts</a> in the <i>Amazon Chime Administration Guide</i>.</p> <p>Users suspended from a <code>Team</code> account are disassociated from the account,but they can continue to use Amazon Chime as free users. To remove the suspension from suspended <code>Team</code> account users, invite them to the <code>Team</code> account again. You can use the <a>InviteUsers</a> action to do so.</p> <p>Users suspended from an <code>EnterpriseLWA</code> account are immediately signed out of Amazon Chime and can no longer sign in. To remove the suspension from suspended <code>EnterpriseLWA</code> account users, use the <a>BatchUnsuspendUser</a> action.</p> <p> To sign out users without suspending them, use the <a>LogoutUser</a> action. </p>

> Body parameter

```json
{
  "UserIdList": [
    "string"
  ]
}
```

<h3 id="batchsuspenduser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The Amazon Chime account ID.|
|operation|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» UserIdList|body|[[NonEmptyString](#schemanonemptystring)]|true|The request containing the user IDs to suspend.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|operation|suspend|

> Example responses

> 200 Response

```json
{
  "UserErrors": {}
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

<h3 id="batchsuspenduser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchSuspendUserResponse](#schemabatchsuspenduserresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchUnsuspendUser

<a id="opIdBatchUnsuspendUser"></a>

> Code samples

```bash
curl 'https://chime.us-east-1.amazonaws.com/accounts/string/users#operation=unsuspend?operation=unsuspend' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "UserIdList": [
      "string"
    ]
  }'
```

`POST /accounts/{accountId}/users#operation=unsuspend`

<p>Removes the suspension from up to 50 previously suspended users for the specified Amazon Chime <code>EnterpriseLWA</code> account. Only users on <code>EnterpriseLWA</code> accounts can be unsuspended using this action. For more information about different account types, see <a href="https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html"> Managing Your Amazon Chime Accounts </a> in the account types, in the <i>Amazon Chime Administration Guide</i>. </p> <p> Previously suspended users who are unsuspended using this action are returned to <code>Registered</code> status. Users who are not previously suspended are ignored. </p>

> Body parameter

```json
{
  "UserIdList": [
    "string"
  ]
}
```

<h3 id="batchunsuspenduser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The Amazon Chime account ID.|
|operation|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» UserIdList|body|[[NonEmptyString](#schemanonemptystring)]|true|The request containing the user IDs to unsuspend.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|operation|unsuspend|

> Example responses

> 200 Response

```json
{
  "UserErrors": {}
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

<h3 id="batchunsuspenduser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchUnsuspendUserResponse](#schemabatchunsuspenduserresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchUpdatePhoneNumber

<a id="opIdBatchUpdatePhoneNumber"></a>

> Code samples

```bash
curl 'https://chime.us-east-1.amazonaws.com/phone-numbers#operation=batch-update?operation=batch-update' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "UpdatePhoneNumberRequestItems": [
      {
        "PhoneNumberId": {},
        "ProductType": {},
        "CallingName": {}
      }
    ]
  }'
```

`POST /phone-numbers#operation=batch-update`

<p>Updates phone number product types or calling names. You can update one attribute at a time for each <code>UpdatePhoneNumberRequestItem</code>. For example, you can update the product type or the calling name.</p> <p>For toll-free numbers, you cannot use the Amazon Chime Business Calling product type. For numbers outside the U.S., you must use the Amazon Chime SIP Media Application Dial-In product type.</p> <p>Updates to outbound calling names can take up to 72 hours to complete. Pending updates to outbound calling names must be complete before you can request another update.</p>

> Body parameter

```json
{
  "UpdatePhoneNumberRequestItems": [
    {
      "PhoneNumberId": {},
      "ProductType": {},
      "CallingName": {}
    }
  ]
}
```

<h3 id="batchupdatephonenumber-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|operation|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» UpdatePhoneNumberRequestItems|body|[[UpdatePhoneNumberRequestItem](#schemaupdatephonenumberrequestitem)]|true|The request containing the phone number IDs and product types or calling names to update.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|operation|batch-update|

> Example responses

> 200 Response

```json
{
  "PhoneNumberErrors": {}
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

<h3 id="batchupdatephonenumber-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchUpdatePhoneNumberResponse](#schemabatchupdatephonenumberresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListUsers

<a id="opIdListUsers"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/accounts/string/users \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /accounts/{accountId}/users`

Lists the users that belong to the specified Amazon Chime account. You can specify an email address to list only the user that the email address belongs to.

<h3 id="listusers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The Amazon Chime account ID.|
|user-email|query|string(password)|false|Optional. The user email address used to filter results. Maximum 1.|
|user-type|query|string|false|The user type.|
|max-results|query|integer|false|The maximum number of results to return in a single call. Defaults to 100.|
|next-token|query|string|false|The token to use to retrieve the next page of results.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
|user-type|PrivateUser|
|user-type|SharedDevice|

> Example responses

> 200 Response

```json
{
  "Users": {},
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

> 486 Response

```json
null
```

<h3 id="listusers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListUsersResponse](#schemalistusersresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchUpdateUser

<a id="opIdBatchUpdateUser"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/accounts/string/users \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "UpdateUserRequestItems": [
      {
        "UserId": {},
        "LicenseType": {},
        "UserType": {},
        "AlexaForBusinessMetadata": {
          "IsAlexaForBusinessEnabled": {},
          "AlexaForBusinessRoomArn": {}
        }
      }
    ]
  }'
```

`POST /accounts/{accountId}/users`

Updates user details within the <a>UpdateUserRequestItem</a> object for up to 20 users for the specified Amazon Chime account. Currently, only <code>LicenseType</code> updates are supported for this action.

> Body parameter

```json
{
  "UpdateUserRequestItems": [
    {
      "UserId": {},
      "LicenseType": {},
      "UserType": {},
      "AlexaForBusinessMetadata": {
        "IsAlexaForBusinessEnabled": {},
        "AlexaForBusinessRoomArn": {}
      }
    }
  ]
}
```

<h3 id="batchupdateuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The Amazon Chime account ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» UpdateUserRequestItems|body|[[UpdateUserRequestItem](#schemaupdateuserrequestitem)]|true|The request containing the user IDs and details to update.|

> Example responses

> 200 Response

```json
{
  "UserErrors": {}
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

<h3 id="batchupdateuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchUpdateUserResponse](#schemabatchupdateuserresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAccounts

<a id="opIdListAccounts"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/accounts \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /accounts`

Lists the Amazon Chime accounts under the administrator's AWS account. You can filter accounts by account name prefix. To find out which Amazon Chime account a user belongs to, you can filter by the user's email address, which returns one account result.

<h3 id="listaccounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|Amazon Chime account name prefix with which to filter results.|
|user-email|query|string(password)|false|User email address with which to filter results.|
|next-token|query|string|false|The token to use to retrieve the next page of results.|
|max-results|query|integer|false|The maximum number of results to return in a single call. Defaults to 100.|
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
  "Accounts": {},
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

> 486 Response

```json
null
```

<h3 id="listaccounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAccountsResponse](#schemalistaccountsresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateAccount

<a id="opIdCreateAccount"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/accounts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string"
  }'
```

`POST /accounts`

Creates an Amazon Chime account under the administrator's AWS account. Only <code>Team</code> account types are currently supported for this action. For more information about different account types, see <a href="https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html">Managing Your Amazon Chime Accounts</a> in the <i>Amazon Chime Administration Guide</i>.

> Body parameter

```json
{
  "Name": "string"
}
```

<h3 id="createaccount-parameters">Parameters</h3>

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
|» Name|body|string|true|The name of the Amazon Chime account.|

> Example responses

> 201 Response

```json
{
  "Account": {
    "AwsAccountId": {},
    "AccountId": {},
    "Name": {},
    "AccountType": {},
    "CreatedTimestamp": {},
    "DefaultLicense": {},
    "SupportedLicenses": {},
    "AccountStatus": {},
    "SigninDelegateGroups": {}
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

<h3 id="createaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateAccountResponse](#schemacreateaccountresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAppInstances

<a id="opIdListAppInstances"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/app-instances \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /app-instances`

Lists all Amazon Chime <code>AppInstance</code>s created under a single AWS account.

<h3 id="listappinstances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|max-results|query|integer|false|The maximum number of <code>AppInstance</code>s that you want to return.|
|next-token|query|string(password)|false|The token passed by previous API requests until you reach the maximum number of <code>AppInstance</code>s.|
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
  "AppInstances": {},
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

<h3 id="listappinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAppInstancesResponse](#schemalistappinstancesresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|483|483|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateAppInstance

<a id="opIdCreateAppInstance"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/app-instances \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "password",
    "Metadata": "password",
    "ClientRequestToken": "password",
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ]
  }'
```

`POST /app-instances`

Creates an Amazon Chime SDK messaging <code>AppInstance</code> under an AWS account. Only SDK messaging customers use this API. <code>CreateAppInstance</code> supports idempotency behavior as described in the AWS API Standard.

> Body parameter

```json
{
  "Name": "password",
  "Metadata": "password",
  "ClientRequestToken": "password",
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

<h3 id="createappinstance-parameters">Parameters</h3>

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
|» Name|body|string(password)|true|The name of the <code>AppInstance</code>.|
|» Metadata|body|string(password)|false|The metadata of the <code>AppInstance</code>. Limited to a 1KB string in UTF-8.|
|» ClientRequestToken|body|string(password)|true|The <code>ClientRequestToken</code> of the <code>AppInstance</code>.|
|» Tags|body|[[Tag](#schematag)]|false|Tags assigned to the <code>AppInstance</code>.|

> Example responses

> 201 Response

```json
{
  "AppInstanceArn": {}
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

<h3 id="createappinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateAppInstanceResponse](#schemacreateappinstanceresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|487|487|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAppInstanceAdmins

<a id="opIdListAppInstanceAdmins"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/app-instances/string/admins \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /app-instances/{appInstanceArn}/admins`

Returns a list of the administrators in the <code>AppInstance</code>.

<h3 id="listappinstanceadmins-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appInstanceArn|path|string|true|The ARN of the <code>AppInstance</code>.|
|max-results|query|integer|false|The maximum number of administrators that you want to return.|
|next-token|query|string(password)|false|The token returned from previous API requests until the number of administrators is reached.|
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
  "AppInstanceArn": {},
  "AppInstanceAdmins": {},
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

<h3 id="listappinstanceadmins-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAppInstanceAdminsResponse](#schemalistappinstanceadminsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|483|483|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateAppInstanceAdmin

<a id="opIdCreateAppInstanceAdmin"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/app-instances/string/admins \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AppInstanceAdminArn": "string"
  }'
```

`POST /app-instances/{appInstanceArn}/admins`

<p>Promotes an <code>AppInstanceUser</code> to an <code>AppInstanceAdmin</code>. The promoted user can perform the following actions. </p> <ul> <li> <p> <code>ChannelModerator</code> actions across all channels in the <code>AppInstance</code>.</p> </li> <li> <p> <code>DeleteChannelMessage</code> actions.</p> </li> </ul> <p>Only an <code>AppInstanceUser</code> can be promoted to an <code>AppInstanceAdmin</code> role.</p>

> Body parameter

```json
{
  "AppInstanceAdminArn": "string"
}
```

<h3 id="createappinstanceadmin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appInstanceArn|path|string|true|The ARN of the <code>AppInstance</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» AppInstanceAdminArn|body|string|true|The ARN of the administrator of the current <code>AppInstance</code>.|

> Example responses

> 201 Response

```json
{
  "AppInstanceAdmin": {
    "Arn": {},
    "Name": {}
  },
  "AppInstanceArn": {}
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

<h3 id="createappinstanceadmin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateAppInstanceAdminResponse](#schemacreateappinstanceadminresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|487|487|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateAppInstanceUser

<a id="opIdCreateAppInstanceUser"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/app-instance-users \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AppInstanceArn": "string",
    "AppInstanceUserId": "password",
    "Name": "password",
    "Metadata": "password",
    "ClientRequestToken": "password",
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ]
  }'
```

`POST /app-instance-users`

Creates a user under an Amazon Chime <code>AppInstance</code>. The request consists of a unique <code>appInstanceUserId</code> and <code>Name</code> for that user.

> Body parameter

```json
{
  "AppInstanceArn": "string",
  "AppInstanceUserId": "password",
  "Name": "password",
  "Metadata": "password",
  "ClientRequestToken": "password",
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

<h3 id="createappinstanceuser-parameters">Parameters</h3>

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
|» AppInstanceArn|body|string|true|The ARN of the <code>AppInstance</code> request.|
|» AppInstanceUserId|body|string(password)|true|The user ID of the <code>AppInstance</code>.|
|» Name|body|string(password)|true|The user's name.|
|» Metadata|body|string(password)|false|The request's metadata. Limited to a 1KB string in UTF-8.|
|» ClientRequestToken|body|string(password)|true|The token assigned to the user requesting an <code>AppInstance</code>.|
|» Tags|body|[[Tag](#schematag)]|false|Tags assigned to the <code>AppInstanceUser</code>.|

> Example responses

> 201 Response

```json
{
  "AppInstanceUserArn": {}
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

<h3 id="createappinstanceuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateAppInstanceUserResponse](#schemacreateappinstanceuserresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|487|487|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAttendees

<a id="opIdListAttendees"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/meetings/string/attendees \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /meetings/{meetingId}/attendees`

 Lists the attendees for the specified Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime SDK Developer Guide</i>. 

<h3 id="listattendees-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|meetingId|path|string|true|The Amazon Chime SDK meeting ID.|
|next-token|query|string|false|The token to use to retrieve the next page of results.|
|max-results|query|integer|false|The maximum number of results to return in a single call.|
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
  "Attendees": {},
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

> 486 Response

```json
null
```

<h3 id="listattendees-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAttendeesResponse](#schemalistattendeesresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|484|484|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateAttendee

<a id="opIdCreateAttendee"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/meetings/string/attendees \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ExternalUserId": "password",
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ]
  }'
```

`POST /meetings/{meetingId}/attendees`

 Creates a new attendee for an active Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime SDK Developer Guide</i>. 

> Body parameter

```json
{
  "ExternalUserId": "password",
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

<h3 id="createattendee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|meetingId|path|string|true|The Amazon Chime SDK meeting ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ExternalUserId|body|string(password)|true|The Amazon Chime SDK external user ID. An idempotency token. Links the attendee to an identity managed by a builder application.|
|» Tags|body|[[Tag](#schematag)]|false|The tag key-value pairs.|

> Example responses

> 201 Response

```json
{
  "Attendee": {
    "ExternalUserId": {},
    "AttendeeId": {},
    "JoinToken": {}
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

<h3 id="createattendee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateAttendeeResponse](#schemacreateattendeeresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|487|487|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListBots

<a id="opIdListBots"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/accounts/string/bots \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /accounts/{accountId}/bots`

Lists the bots associated with the administrator's Amazon Chime Enterprise account ID.

<h3 id="listbots-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The Amazon Chime account ID.|
|max-results|query|integer|false|The maximum number of results to return in a single call. The default is 10.|
|next-token|query|string|false|The token to use to retrieve the next page of results.|
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
  "Bots": {},
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

> 486 Response

```json
null
```

<h3 id="listbots-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListBotsResponse](#schemalistbotsresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|484|484|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|485|485|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|486|486|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateBot

<a id="opIdCreateBot"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/accounts/string/bots \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "DisplayName": "password",
    "Domain": "string"
  }'
```

`POST /accounts/{accountId}/bots`

Creates a bot for an Amazon Chime Enterprise account.

> Body parameter

```json
{
  "DisplayName": "password",
  "Domain": "string"
}
```

<h3 id="createbot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The Amazon Chime account ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» DisplayName|body|string(password)|true|The bot display name.|
|» Domain|body|string|false|The domain of the Amazon Chime Enterprise account.|

> Example responses

> 201 Response

```json
{
  "Bot": {
    "BotId": {},
    "UserId": {},
    "DisplayName": {},
    "BotType": {},
    "Disabled": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {},
    "BotEmail": {},
    "SecurityToken": {}
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

<h3 id="createbot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateBotResponse](#schemacreatebotresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|485|485|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|486|486|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|487|487|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateChannel

<a id="opIdCreateChannel"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/channels \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AppInstanceArn": "string",
    "Name": "password",
    "Mode": "UNRESTRICTED",
    "Privacy": "PUBLIC",
    "Metadata": "password",
    "ClientRequestToken": "password",
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ]
  }'
```

`POST /channels`

<p>Creates a channel to which you can add users and send messages.</p> <p> <b>Restriction</b>: You can't change a channel's privacy.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>

> Body parameter

```json
{
  "AppInstanceArn": "string",
  "Name": "password",
  "Mode": "UNRESTRICTED",
  "Privacy": "PUBLIC",
  "Metadata": "password",
  "ClientRequestToken": "password",
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

<h3 id="createchannel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-chime-bearer|header|string|false|The <code>AppInstanceUserArn</code> of the user that makes the API call.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» AppInstanceArn|body|string|true|The ARN of the channel request.|
|» Name|body|string(password)|true|The name of the channel.|
|» Mode|body|string|false|The channel mode: <code>UNRESTRICTED</code> or <code>RESTRICTED</code>. Administrators, moderators, and channel members can add themselves and other members to unrestricted channels. Only administrators and moderators can add members to restricted channels.|
|» Privacy|body|string|false|The channel's privacy level: <code>PUBLIC</code> or <code>PRIVATE</code>. Private channels aren't discoverable by users outside the channel. Public channels are discoverable by anyone in the <code>AppInstance</code>.|
|» Metadata|body|string(password)|false|The metadata of the creation request. Limited to 1KB and UTF-8.|
|» ClientRequestToken|body|string(password)|true|The client token for the request. An <code>Idempotency</code> token.|
|» Tags|body|[[Tag](#schematag)]|false|The tags for the creation request.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Mode|UNRESTRICTED|
|» Mode|RESTRICTED|
|» Privacy|PUBLIC|
|» Privacy|PRIVATE|

> Example responses

> 201 Response

```json
{
  "ChannelArn": {}
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

<h3 id="createchannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateChannelResponse](#schemacreatechannelresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|485|485|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|487|487|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListChannelBans

<a id="opIdListChannelBans"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/channels/string/bans \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /channels/{channelArn}/bans`

<p>Lists all the users banned from a particular channel.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>

<h3 id="listchannelbans-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelArn|path|string|true|The ARN of the channel.|
|max-results|query|integer|false|The maximum number of bans that you want returned.|
|next-token|query|string(password)|false|The token passed by previous API calls until all requested bans are returned.|
|x-amz-chime-bearer|header|string|false|The <code>AppInstanceUserArn</code> of the user that makes the API call.|
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
  "ChannelArn": {},
  "NextToken": {},
  "ChannelBans": {}
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

<h3 id="listchannelbans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListChannelBansResponse](#schemalistchannelbansresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|483|483|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateChannelBan

<a id="opIdCreateChannelBan"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/channels/string/bans \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "MemberArn": "string"
  }'
```

`POST /channels/{channelArn}/bans`

<p>Permanently bans a member from a channel. Moderators can't add banned members to a channel. To undo a ban, you first have to <code>DeleteChannelBan</code>, and then <code>CreateChannelMembership</code>. Bans are cleaned up when you delete users or channels.</p> <p>If you ban a user who is already part of a channel, that user is automatically kicked from the channel.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>

> Body parameter

```json
{
  "MemberArn": "string"
}
```

<h3 id="createchannelban-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelArn|path|string|true|The ARN of the ban request.|
|x-amz-chime-bearer|header|string|false|The <code>AppInstanceUserArn</code> of the user that makes the API call.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» MemberArn|body|string|true|The ARN of the member being banned.|

> Example responses

> 201 Response

```json
{
  "ChannelArn": {},
  "Member": {
    "Arn": {},
    "Name": {}
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

<h3 id="createchannelban-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateChannelBanResponse](#schemacreatechannelbanresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|485|485|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|487|487|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListChannelMemberships

<a id="opIdListChannelMemberships"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/channels/string/memberships \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /channels/{channelArn}/memberships`

<p>Lists all channel memberships in a channel.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>

<h3 id="listchannelmemberships-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelArn|path|string|true|The maximum number of channel memberships that you want returned.|
|type|query|string|false|The membership type of a user, <code>DEFAULT</code> or <code>HIDDEN</code>. Default members are always returned as part of <code>ListChannelMemberships</code>. Hidden members are only returned if the type filter in <code>ListChannelMemberships</code> equals <code>HIDDEN</code>. Otherwise hidden members are not returned.|
|max-results|query|integer|false|The maximum number of channel memberships that you want returned.|
|next-token|query|string(password)|false|The token passed by previous API calls until all requested channel memberships are returned.|
|x-amz-chime-bearer|header|string|false|The <code>AppInstanceUserArn</code> of the user that makes the API call.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
|type|DEFAULT|
|type|HIDDEN|

> Example responses

> 200 Response

```json
{
  "ChannelArn": {},
  "ChannelMemberships": {},
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

<h3 id="listchannelmemberships-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListChannelMembershipsResponse](#schemalistchannelmembershipsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|483|483|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateChannelMembership

<a id="opIdCreateChannelMembership"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/channels/string/memberships \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "MemberArn": "string",
    "Type": "DEFAULT"
  }'
```

`POST /channels/{channelArn}/memberships`

<p>Adds a user to a channel. The <code>InvitedBy</code> response field is derived from the request header. A channel member can:</p> <ul> <li> <p>List messages</p> </li> <li> <p>Send messages</p> </li> <li> <p>Receive messages</p> </li> <li> <p>Edit their own messages</p> </li> <li> <p>Leave the channel</p> </li> </ul> <p>Privacy settings impact this action as follows:</p> <ul> <li> <p>Public Channels: You do not need to be a member to list messages, but you must be a member to send messages.</p> </li> <li> <p>Private Channels: You must be a member to list or send messages.</p> </li> </ul> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>

> Body parameter

```json
{
  "MemberArn": "string",
  "Type": "DEFAULT"
}
```

<h3 id="createchannelmembership-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelArn|path|string|true|The ARN of the channel to which you're adding users.|
|x-amz-chime-bearer|header|string|false|The <code>AppInstanceUserArn</code> of the user that makes the API call.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» MemberArn|body|string|true|The ARN of the member you want to add to the channel.|
|» Type|body|string|true|The membership type of a user, <code>DEFAULT</code> or <code>HIDDEN</code>. Default members are always returned as part of <code>ListChannelMemberships</code>. Hidden members are only returned if the type filter in <code>ListChannelMemberships</code> equals <code>HIDDEN</code>. Otherwise hidden members are not returned. This is only supported by moderators.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Type|DEFAULT|
|» Type|HIDDEN|

> Example responses

> 201 Response

```json
{
  "ChannelArn": {},
  "Member": {
    "Arn": {},
    "Name": {}
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

<h3 id="createchannelmembership-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateChannelMembershipResponse](#schemacreatechannelmembershipresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|485|485|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|487|487|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListChannelModerators

<a id="opIdListChannelModerators"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/channels/string/moderators \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /channels/{channelArn}/moderators`

<p>Lists all the moderators for a channel.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>

<h3 id="listchannelmoderators-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelArn|path|string|true|The ARN of the channel.|
|max-results|query|integer|false|The maximum number of moderators that you want returned.|
|next-token|query|string(password)|false|The token passed by previous API calls until all requested moderators are returned.|
|x-amz-chime-bearer|header|string|false|The <code>AppInstanceUserArn</code> of the user that makes the API call.|
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
  "ChannelArn": {},
  "NextToken": {},
  "ChannelModerators": {}
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

<h3 id="listchannelmoderators-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListChannelModeratorsResponse](#schemalistchannelmoderatorsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|483|483|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateChannelModerator

<a id="opIdCreateChannelModerator"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/channels/string/moderators \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ChannelModeratorArn": "string"
  }'
```

`POST /channels/{channelArn}/moderators`

<p>Creates a new <code>ChannelModerator</code>. A channel moderator can:</p> <ul> <li> <p>Add and remove other members of the channel.</p> </li> <li> <p>Add and remove other moderators of the channel.</p> </li> <li> <p>Add and remove user bans for the channel.</p> </li> <li> <p>Redact messages in the channel.</p> </li> <li> <p>List messages in the channel.</p> </li> </ul> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>

> Body parameter

```json
{
  "ChannelModeratorArn": "string"
}
```

<h3 id="createchannelmoderator-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelArn|path|string|true|The ARN of the channel.|
|x-amz-chime-bearer|header|string|false|The <code>AppInstanceUserArn</code> of the user that makes the API call.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ChannelModeratorArn|body|string|true|The ARN of the moderator.|

> Example responses

> 201 Response

```json
{
  "ChannelArn": {},
  "ChannelModerator": {
    "Arn": {},
    "Name": {}
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

<h3 id="createchannelmoderator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateChannelModeratorResponse](#schemacreatechannelmoderatorresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|485|485|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|487|487|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListMediaCapturePipelines

<a id="opIdListMediaCapturePipelines"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/media-capture-pipelines \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /media-capture-pipelines`

Returns a list of media capture pipelines.

<h3 id="listmediacapturepipelines-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|next-token|query|string|false|The token used to retrieve the next page of results.|
|max-results|query|integer|false|The maximum number of results to return in a single call. Valid Range: 1 - 99.|
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
  "MediaCapturePipelines": {},
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

<h3 id="listmediacapturepipelines-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListMediaCapturePipelinesResponse](#schemalistmediacapturepipelinesresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|483|483|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateMediaCapturePipeline

<a id="opIdCreateMediaCapturePipeline"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/media-capture-pipelines \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "SourceType": "ChimeSdkMeeting",
    "SourceArn": "password",
    "SinkType": "S3Bucket",
    "SinkArn": "password",
    "ClientRequestToken": "password",
    "ChimeSdkMeetingConfiguration": {
      "SourceConfiguration": {
        "SelectedVideoStreams": {
          "AttendeeIds": {},
          "ExternalUserIds": {}
        }
      },
      "ArtifactsConfiguration": {
        "Audio": {
          "MuxType": {}
        },
        "Video": {
          "State": {},
          "MuxType": {}
        },
        "Content": {
          "State": {},
          "MuxType": {}
        }
      }
    }
  }'
```

`POST /media-capture-pipelines`

Creates a media capture pipeline.

> Body parameter

```json
{
  "SourceType": "ChimeSdkMeeting",
  "SourceArn": "password",
  "SinkType": "S3Bucket",
  "SinkArn": "password",
  "ClientRequestToken": "password",
  "ChimeSdkMeetingConfiguration": {
    "SourceConfiguration": {
      "SelectedVideoStreams": {
        "AttendeeIds": {},
        "ExternalUserIds": {}
      }
    },
    "ArtifactsConfiguration": {
      "Audio": {
        "MuxType": {}
      },
      "Video": {
        "State": {},
        "MuxType": {}
      },
      "Content": {
        "State": {},
        "MuxType": {}
      }
    }
  }
}
```

<h3 id="createmediacapturepipeline-parameters">Parameters</h3>

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
|» SourceType|body|string|true|Source type from which the media artifacts will be captured. A Chime SDK Meeting is the only supported source.|
|» SourceArn|body|string(password)|true|ARN of the source from which the media artifacts are captured.|
|» SinkType|body|string|true|Destination type to which the media artifacts are saved. You must use an S3 bucket. |
|» SinkArn|body|string(password)|true|The ARN of the sink type.|
|» ClientRequestToken|body|string(password)|false|The unique identifier for the client request. The token makes the API request idempotent. Use a different token for different media pipeline requests.|
|» ChimeSdkMeetingConfiguration|body|object|false|The configuration object of the Amazon Chime SDK meeting for a specified media capture pipeline. <code>SourceType</code> must be <code>ChimeSdkMeeting</code>.|
|» » SourceConfiguration|body|object|false|none|
|» » » SelectedVideoStreams|body|object|false|none|
|» » » » AttendeeIds|body|object|false|none|
|» » » » ExternalUserIds|body|object|false|none|
|» » ArtifactsConfiguration|body|object|false|none|
|» » » Audio|body|object|true|none|
|» » » » MuxType|body|object|true|none|
|» » » Video|body|object|true|none|
|» » » » State|body|object|true|none|
|» » » » MuxType|body|object|false|none|
|» » » Content|body|object|true|none|
|» » » » State|body|object|true|none|
|» » » » MuxType|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» SourceType|ChimeSdkMeeting|
|» SinkType|S3Bucket|

> Example responses

> 201 Response

```json
{
  "MediaCapturePipeline": {
    "MediaPipelineId": {},
    "SourceType": {},
    "SourceArn": {},
    "Status": {},
    "SinkType": {},
    "SinkArn": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {},
    "ChimeSdkMeetingConfiguration": {
      "SourceConfiguration": {
        "SelectedVideoStreams": {
          "AttendeeIds": {},
          "ExternalUserIds": {}
        }
      },
      "ArtifactsConfiguration": {
        "Audio": {
          "MuxType": {}
        },
        "Video": {
          "State": {},
          "MuxType": {}
        },
        "Content": {
          "State": {},
          "MuxType": {}
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

> 486 Response

```json
null
```

<h3 id="createmediacapturepipeline-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateMediaCapturePipelineResponse](#schemacreatemediacapturepipelineresponse)|
|480|480|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListMeetings

<a id="opIdListMeetings"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/meetings \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /meetings`

 Lists up to 100 active Amazon Chime SDK meetings. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime SDK Developer Guide</i>.

<h3 id="listmeetings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|next-token|query|string|false|The token to use to retrieve the next page of results.|
|max-results|query|integer|false|The maximum number of results to return in a single call.|
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
  "Meetings": {},
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

<h3 id="listmeetings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListMeetingsResponse](#schemalistmeetingsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|483|483|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateMeeting

<a id="opIdCreateMeeting"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/meetings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ClientRequestToken": "password",
    "ExternalMeetingId": "password",
    "MeetingHostId": "password",
    "MediaRegion": "string",
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "NotificationsConfiguration": {
      "SnsTopicArn": {},
      "SqsQueueArn": {}
    }
  }'
```

`POST /meetings`

 Creates a new Amazon Chime SDK meeting in the specified media Region with no initial attendees. For more information about specifying media Regions, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/chime-sdk-meetings-regions.html">Amazon Chime SDK Media Regions</a> in the <i>Amazon Chime SDK Developer Guide</i> . For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime SDK Developer Guide</i> . 

> Body parameter

```json
{
  "ClientRequestToken": "password",
  "ExternalMeetingId": "password",
  "MeetingHostId": "password",
  "MediaRegion": "string",
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ],
  "NotificationsConfiguration": {
    "SnsTopicArn": {},
    "SqsQueueArn": {}
  }
}
```

<h3 id="createmeeting-parameters">Parameters</h3>

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
|» ClientRequestToken|body|string(password)|true|The unique identifier for the client request. Use a different token for different meetings.|
|» ExternalMeetingId|body|string(password)|false|The external meeting ID.|
|» MeetingHostId|body|string(password)|false|Reserved.|
|» MediaRegion|body|string|false|<p> The Region in which to create the meeting. Default: <code>us-east-1</code>. </p> <p> Available values: <code>af-south-1</code> , <code>ap-northeast-1</code> , <code>ap-northeast-2</code> , <code>ap-south-1</code> , <code>ap-southeast-1</code> , <code>ap-southeast-2</code> , <code>ca-central-1</code> , <code>eu-central-1</code> , <code>eu-north-1</code> , <code>eu-south-1</code> , <code>eu-west-1</code> , <code>eu-west-2</code> , <code>eu-west-3</code> , <code>sa-east-1</code> , <code>us-east-1</code> , <code>us-east-2</code> , <code>us-west-1</code> , <code>us-west-2</code> . </p>|
|» Tags|body|[[Tag](#schematag)]|false|The tag key-value pairs.|
|» NotificationsConfiguration|body|object|false| The resource target configurations for receiving Amazon Chime SDK meeting and attendee event notifications. The Amazon Chime SDK supports resource targets located in the US East (N. Virginia) AWS Region (<code>us-east-1</code>). |
|» » SnsTopicArn|body|object|false|none|
|» » SqsQueueArn|body|object|false|none|

> Example responses

> 201 Response

```json
{
  "Meeting": {
    "MeetingId": {},
    "ExternalMeetingId": {},
    "MediaPlacement": {
      "AudioHostUrl": {},
      "AudioFallbackUrl": {},
      "ScreenDataUrl": {},
      "ScreenSharingUrl": {},
      "ScreenViewingUrl": {},
      "SignalingUrl": {},
      "TurnControlUrl": {},
      "EventIngestionUrl": {}
    },
    "MediaRegion": {}
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

<h3 id="createmeeting-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateMeetingResponse](#schemacreatemeetingresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|483|483|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|484|484|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateMeetingDialOut

<a id="opIdCreateMeetingDialOut"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/meetings/string/dial-outs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "FromPhoneNumber": "password",
    "ToPhoneNumber": "password",
    "JoinToken": "password"
  }'
```

`POST /meetings/{meetingId}/dial-outs`

<p>Uses the join token and call metadata in a meeting request (From number, To number, and so forth) to initiate an outbound call to a public switched telephone network (PSTN) and join them into a Chime meeting. Also ensures that the From number belongs to the customer.</p> <p>To play welcome audio or implement an interactive voice response (IVR), use the <code>CreateSipMediaApplicationCall</code> action with the corresponding SIP media application ID.</p>

> Body parameter

```json
{
  "FromPhoneNumber": "password",
  "ToPhoneNumber": "password",
  "JoinToken": "password"
}
```

<h3 id="createmeetingdialout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|meetingId|path|string|true|The Amazon Chime SDK meeting ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» FromPhoneNumber|body|string(password)|true|Phone number used as the caller ID when the remote party receives a call.|
|» ToPhoneNumber|body|string(password)|true|Phone number called when inviting someone to a meeting.|
|» JoinToken|body|string(password)|true|Token used by the Amazon Chime SDK attendee. Call the <a href="https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateAttendee.html">CreateAttendee</a> action to get a join token.|

> Example responses

> 201 Response

```json
{
  "TransactionId": {}
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

<h3 id="createmeetingdialout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateMeetingDialOutResponse](#schemacreatemeetingdialoutresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|483|483|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|484|484|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|487|487|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateMeetingWithAttendees

<a id="opIdCreateMeetingWithAttendees"></a>

> Code samples

```bash
curl 'https://chime.us-east-1.amazonaws.com/meetings#operation=create-attendees?operation=create-attendees' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ClientRequestToken": "password",
    "ExternalMeetingId": "password",
    "MeetingHostId": "password",
    "MediaRegion": "string",
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "NotificationsConfiguration": {
      "SnsTopicArn": {},
      "SqsQueueArn": {}
    },
    "Attendees": [
      {
        "ExternalUserId": {},
        "Tags": {}
      }
    ]
  }'
```

`POST /meetings#operation=create-attendees`

 Creates a new Amazon Chime SDK meeting in the specified media Region, with attendees. For more information about specifying media Regions, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/chime-sdk-meetings-regions.html">Amazon Chime SDK Media Regions</a> in the <i>Amazon Chime SDK Developer Guide</i> . For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime SDK Developer Guide</i> . 

> Body parameter

```json
{
  "ClientRequestToken": "password",
  "ExternalMeetingId": "password",
  "MeetingHostId": "password",
  "MediaRegion": "string",
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ],
  "NotificationsConfiguration": {
    "SnsTopicArn": {},
    "SqsQueueArn": {}
  },
  "Attendees": [
    {
      "ExternalUserId": {},
      "Tags": {}
    }
  ]
}
```

<h3 id="createmeetingwithattendees-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|operation|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ClientRequestToken|body|string(password)|true|The unique identifier for the client request. Use a different token for different meetings.|
|» ExternalMeetingId|body|string(password)|false|The external meeting ID.|
|» MeetingHostId|body|string(password)|false|Reserved.|
|» MediaRegion|body|string|false|<p> The Region in which to create the meeting. Default: <code>us-east-1</code> . </p> <p> Available values: <code>af-south-1</code> , <code>ap-northeast-1</code> , <code>ap-northeast-2</code> , <code>ap-south-1</code> , <code>ap-southeast-1</code> , <code>ap-southeast-2</code> , <code>ca-central-1</code> , <code>eu-central-1</code> , <code>eu-north-1</code> , <code>eu-south-1</code> , <code>eu-west-1</code> , <code>eu-west-2</code> , <code>eu-west-3</code> , <code>sa-east-1</code> , <code>us-east-1</code> , <code>us-east-2</code> , <code>us-west-1</code> , <code>us-west-2</code> . </p>|
|» Tags|body|[[Tag](#schematag)]|false|The tag key-value pairs.|
|» NotificationsConfiguration|body|object|false| The resource target configurations for receiving Amazon Chime SDK meeting and attendee event notifications. The Amazon Chime SDK supports resource targets located in the US East (N. Virginia) AWS Region (<code>us-east-1</code>). |
|» » SnsTopicArn|body|object|false|none|
|» » SqsQueueArn|body|object|false|none|
|» Attendees|body|[[CreateAttendeeRequestItem](#schemacreateattendeerequestitem)]|false|The request containing the attendees to create.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|operation|create-attendees|

> Example responses

> 201 Response

```json
{
  "Meeting": {
    "MeetingId": {},
    "ExternalMeetingId": {},
    "MediaPlacement": {
      "AudioHostUrl": {},
      "AudioFallbackUrl": {},
      "ScreenDataUrl": {},
      "ScreenSharingUrl": {},
      "ScreenViewingUrl": {},
      "SignalingUrl": {},
      "TurnControlUrl": {},
      "EventIngestionUrl": {}
    },
    "MediaRegion": {}
  },
  "Attendees": {},
  "Errors": {}
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

<h3 id="createmeetingwithattendees-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateMeetingWithAttendeesResponse](#schemacreatemeetingwithattendeesresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|483|483|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|484|484|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPhoneNumberOrders

<a id="opIdListPhoneNumberOrders"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/phone-number-orders \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /phone-number-orders`

Lists the phone number orders for the administrator's Amazon Chime account.

<h3 id="listphonenumberorders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|next-token|query|string|false|The token to use to retrieve the next page of results.|
|max-results|query|integer|false|The maximum number of results to return in a single call.|
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
  "PhoneNumberOrders": {},
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

<h3 id="listphonenumberorders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPhoneNumberOrdersResponse](#schemalistphonenumberordersresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreatePhoneNumberOrder

<a id="opIdCreatePhoneNumberOrder"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/phone-number-orders \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ProductType": "BusinessCalling",
    "E164PhoneNumbers": [
      "password"
    ]
  }'
```

`POST /phone-number-orders`

Creates an order for phone numbers to be provisioned. For toll-free numbers, you cannot use the Amazon Chime Business Calling product type. For numbers outside the U.S., you must use the Amazon Chime SIP Media Application Dial-In product type.

> Body parameter

```json
{
  "ProductType": "BusinessCalling",
  "E164PhoneNumbers": [
    "password"
  ]
}
```

<h3 id="createphonenumberorder-parameters">Parameters</h3>

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
|» ProductType|body|string|true|The phone number product type.|
|» E164PhoneNumbers|body|[[E164PhoneNumber](#schemae164phonenumber)]|true|List of phone numbers, in E.164 format.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» ProductType|BusinessCalling|
|» ProductType|VoiceConnector|
|» ProductType|SipMediaApplicationDialIn|

> Example responses

> 201 Response

```json
{
  "PhoneNumberOrder": {
    "PhoneNumberOrderId": {},
    "ProductType": {},
    "Status": {},
    "OrderedPhoneNumbers": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {}
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

<h3 id="createphonenumberorder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreatePhoneNumberOrderResponse](#schemacreatephonenumberorderresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|487|487|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListProxySessions

<a id="opIdListProxySessions"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/voice-connectors/string/proxy-sessions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /voice-connectors/{voiceConnectorId}/proxy-sessions`

Lists the proxy sessions for the specified Amazon Chime Voice Connector.

<h3 id="listproxysessions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|voiceConnectorId|path|string|true|The Amazon Chime voice connector ID.|
|status|query|string|false|The proxy session status.|
|next-token|query|string|false|The token to use to retrieve the next page of results.|
|max-results|query|integer|false|The maximum number of results to return in a single call.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
|status|Open|
|status|InProgress|
|status|Closed|

> Example responses

> 200 Response

```json
{
  "ProxySessions": {},
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

> 486 Response

```json
null
```

<h3 id="listproxysessions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListProxySessionsResponse](#schemalistproxysessionsresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateProxySession

<a id="opIdCreateProxySession"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/voice-connectors/string/proxy-sessions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ParticipantPhoneNumbers": [
      "password",
      "password"
    ],
    "Name": "password",
    "ExpiryMinutes": 1,
    "Capabilities": [
      "Voice"
    ],
    "NumberSelectionBehavior": "PreferSticky",
    "GeoMatchLevel": "Country",
    "GeoMatchParams": {
      "Country": {},
      "AreaCode": {}
    }
  }'
```

`POST /voice-connectors/{voiceConnectorId}/proxy-sessions`

Creates a proxy session on the specified Amazon Chime Voice Connector for the specified participant phone numbers.

> Body parameter

```json
{
  "ParticipantPhoneNumbers": [
    "password",
    "password"
  ],
  "Name": "password",
  "ExpiryMinutes": 1,
  "Capabilities": [
    "Voice"
  ],
  "NumberSelectionBehavior": "PreferSticky",
  "GeoMatchLevel": "Country",
  "GeoMatchParams": {
    "Country": {},
    "AreaCode": {}
  }
}
```

<h3 id="createproxysession-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|voiceConnectorId|path|string|true|The Amazon Chime voice connector ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ParticipantPhoneNumbers|body|[[E164PhoneNumber](#schemae164phonenumber)]|true|The participant phone numbers.|
|» Name|body|string(password)|false|The name of the proxy session.|
|» ExpiryMinutes|body|integer|false|The number of minutes allowed for the proxy session.|
|» Capabilities|body|[[Capability](#schemacapability)]|true|The proxy session capabilities.|
|» NumberSelectionBehavior|body|string|false|The preference for proxy phone number reuse, or stickiness, between the same participants across sessions.|
|» GeoMatchLevel|body|string|false|The preference for matching the country or area code of the proxy phone number with that of the first participant.|
|» GeoMatchParams|body|object|false|The country and area code for a proxy phone number in a proxy phone session.|
|» » Country|body|object|false|none|
|» » AreaCode|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Capabilities|Voice|
|» Capabilities|SMS|
|» NumberSelectionBehavior|PreferSticky|
|» NumberSelectionBehavior|AvoidSticky|
|» GeoMatchLevel|Country|
|» GeoMatchLevel|AreaCode|

> Example responses

> 201 Response

```json
{
  "ProxySession": {
    "VoiceConnectorId": {},
    "ProxySessionId": {},
    "Name": {},
    "Status": {},
    "ExpiryMinutes": {},
    "Capabilities": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {},
    "EndedTimestamp": {},
    "Participants": {},
    "NumberSelectionBehavior": {},
    "GeoMatchLevel": {},
    "GeoMatchParams": {
      "Country": {},
      "AreaCode": {}
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

<h3 id="createproxysession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateProxySessionResponse](#schemacreateproxysessionresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRooms

<a id="opIdListRooms"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/accounts/string/rooms \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /accounts/{accountId}/rooms`

Lists the room details for the specified Amazon Chime Enterprise account. Optionally, filter the results by a member ID (user ID or bot ID) to see a list of rooms that the member belongs to.

<h3 id="listrooms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The Amazon Chime account ID.|
|member-id|query|string|false|The member ID (user ID or bot ID).|
|max-results|query|integer|false|The maximum number of results to return in a single call.|
|next-token|query|string|false|The token to use to retrieve the next page of results.|
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
  "Rooms": {},
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

> 486 Response

```json
null
```

<h3 id="listrooms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRoomsResponse](#schemalistroomsresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateRoom

<a id="opIdCreateRoom"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/accounts/string/rooms \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "password",
    "ClientRequestToken": "password"
  }'
```

`POST /accounts/{accountId}/rooms`

Creates a chat room for the specified Amazon Chime Enterprise account.

> Body parameter

```json
{
  "Name": "password",
  "ClientRequestToken": "password"
}
```

<h3 id="createroom-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The Amazon Chime account ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string(password)|true|The room name.|
|» ClientRequestToken|body|string(password)|false|The idempotency token for the request.|

> Example responses

> 201 Response

```json
{
  "Room": {
    "RoomId": {},
    "Name": {},
    "AccountId": {},
    "CreatedBy": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {}
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

<h3 id="createroom-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateRoomResponse](#schemacreateroomresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|484|484|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|485|485|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|487|487|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRoomMemberships

<a id="opIdListRoomMemberships"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/accounts/string/rooms/string/memberships \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /accounts/{accountId}/rooms/{roomId}/memberships`

Lists the membership details for the specified room in an Amazon Chime Enterprise account, such as the members' IDs, email addresses, and names.

<h3 id="listroommemberships-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The Amazon Chime account ID.|
|roomId|path|string|true|The room ID.|
|max-results|query|integer|false|The maximum number of results to return in a single call.|
|next-token|query|string|false|The token to use to retrieve the next page of results.|
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
  "RoomMemberships": {},
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

> 486 Response

```json
null
```

<h3 id="listroommemberships-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRoomMembershipsResponse](#schemalistroommembershipsresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateRoomMembership

<a id="opIdCreateRoomMembership"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/accounts/string/rooms/string/memberships \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "MemberId": "string",
    "Role": "Administrator"
  }'
```

`POST /accounts/{accountId}/rooms/{roomId}/memberships`

Adds a member to a chat room in an Amazon Chime Enterprise account. A member can be either a user or a bot. The member role designates whether the member is a chat room administrator or a general chat room member.

> Body parameter

```json
{
  "MemberId": "string",
  "Role": "Administrator"
}
```

<h3 id="createroommembership-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The Amazon Chime account ID.|
|roomId|path|string|true|The room ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» MemberId|body|string|true|The Amazon Chime member ID (user ID or bot ID).|
|» Role|body|string|false|The role of the member.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Role|Administrator|
|» Role|Member|

> Example responses

> 201 Response

```json
{
  "RoomMembership": {
    "RoomId": {},
    "Member": {
      "MemberId": {},
      "MemberType": {},
      "Email": {},
      "FullName": {},
      "AccountId": {}
    },
    "Role": {},
    "InvitedBy": {},
    "UpdatedTimestamp": {}
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

<h3 id="createroommembership-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateRoomMembershipResponse](#schemacreateroommembershipresponse)|
|480|480|ConflictException|[ConflictException](#schemaconflictexception)|
|481|481|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|485|485|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|486|486|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|487|487|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|488|488|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSipMediaApplications

<a id="opIdListSipMediaApplications"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/sip-media-applications \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /sip-media-applications`

Lists the SIP media applications under the administrator's AWS account.

<h3 id="listsipmediaapplications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|max-results|query|integer|false|The maximum number of results to return in a single call. Defaults to 100.|
|next-token|query|string|false|The token to use to retrieve the next page of results.|
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
  "SipMediaApplications": {},
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

<h3 id="listsipmediaapplications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSipMediaApplicationsResponse](#schemalistsipmediaapplicationsresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateSipMediaApplication

<a id="opIdCreateSipMediaApplication"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/sip-media-applications \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AwsRegion": "string",
    "Name": "string",
    "Endpoints": [
      {
        "LambdaArn": {}
      }
    ]
  }'
```

`POST /sip-media-applications`

Creates a SIP media application.

> Body parameter

```json
{
  "AwsRegion": "string",
  "Name": "string",
  "Endpoints": [
    {
      "LambdaArn": {}
    }
  ]
}
```

<h3 id="createsipmediaapplication-parameters">Parameters</h3>

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
|» AwsRegion|body|string|true|The AWS Region assigned to the SIP media application.|
|» Name|body|string|true|The SIP media application name.|
|» Endpoints|body|[[SipMediaApplicationEndpoint](#schemasipmediaapplicationendpoint)]|true|List of endpoints (Lambda Amazon Resource Names) specified for the SIP media application. Currently, only one endpoint is supported.|

> Example responses

> 201 Response

```json
{
  "SipMediaApplication": {
    "SipMediaApplicationId": {},
    "AwsRegion": {},
    "Name": {},
    "Endpoints": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {}
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

<h3 id="createsipmediaapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateSipMediaApplicationResponse](#schemacreatesipmediaapplicationresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|
|487|487|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|488|488|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateSipMediaApplicationCall

<a id="opIdCreateSipMediaApplicationCall"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/sip-media-applications/string/calls \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "FromPhoneNumber": "password",
    "ToPhoneNumber": "password",
    "SipHeaders": {
      "property1": "password",
      "property2": "password"
    }
  }'
```

`POST /sip-media-applications/{sipMediaApplicationId}/calls`

Creates an outbound call to a phone number from the phone number specified in the request, and it invokes the endpoint of the specified <code>sipMediaApplicationId</code>.

> Body parameter

```json
{
  "FromPhoneNumber": "password",
  "ToPhoneNumber": "password",
  "SipHeaders": {
    "property1": "password",
    "property2": "password"
  }
}
```

<h3 id="createsipmediaapplicationcall-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sipMediaApplicationId|path|string|true|The ID of the SIP media application.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» FromPhoneNumber|body|string(password)|true|The phone number that a user calls from. This is a phone number in your Amazon Chime phone number inventory.|
|» ToPhoneNumber|body|string(password)|true|The phone number that the service should call.|
|» SipHeaders|body|object|false|The SIP headers added to an outbound call leg.|
|» » **additionalProperties**|body|[SensitiveString](#schemasensitivestring)|false|none|

> Example responses

> 201 Response

```json
{
  "SipMediaApplicationCall": {
    "TransactionId": {}
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

<h3 id="createsipmediaapplicationcall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateSipMediaApplicationCallResponse](#schemacreatesipmediaapplicationcallresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|483|483|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|484|484|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|487|487|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSipRules

<a id="opIdListSipRules"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/sip-rules \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /sip-rules`

Lists the SIP rules under the administrator's AWS account.

<h3 id="listsiprules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sip-media-application|query|string|false|The SIP media application ID.|
|max-results|query|integer|false|The maximum number of results to return in a single call. Defaults to 100.|
|next-token|query|string|false|The token to use to retrieve the next page of results.|
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
  "SipRules": {},
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

<h3 id="listsiprules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSipRulesResponse](#schemalistsiprulesresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateSipRule

<a id="opIdCreateSipRule"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/sip-rules \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "TriggerType": "ToPhoneNumber",
    "TriggerValue": "string",
    "Disabled": true,
    "TargetApplications": [
      {
        "SipMediaApplicationId": {},
        "Priority": {},
        "AwsRegion": {}
      }
    ]
  }'
```

`POST /sip-rules`

Creates a SIP rule which can be used to run a SIP media application as a target for a specific trigger type.

> Body parameter

```json
{
  "Name": "string",
  "TriggerType": "ToPhoneNumber",
  "TriggerValue": "string",
  "Disabled": true,
  "TargetApplications": [
    {
      "SipMediaApplicationId": {},
      "Priority": {},
      "AwsRegion": {}
    }
  ]
}
```

<h3 id="createsiprule-parameters">Parameters</h3>

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
|» Name|body|string|true|The name of the SIP rule.|
|» TriggerType|body|string|true|The type of trigger assigned to the SIP rule in <code>TriggerValue</code>, currently <code>RequestUriHostname</code> or <code>ToPhoneNumber</code>.|
|» TriggerValue|body|string|true|If <code>TriggerType</code> is <code>RequestUriHostname</code>, the value can be the outbound host name of an Amazon Chime Voice Connector. If <code>TriggerType</code> is <code>ToPhoneNumber</code>, the value can be a customer-owned phone number in the E164 format. The <code>SipMediaApplication</code> specified in the <code>SipRule</code> is triggered if the request URI in an incoming SIP request matches the <code>RequestUriHostname</code>, or if the <code>To</code> header in the incoming SIP request matches the <code>ToPhoneNumber</code> value.|
|» Disabled|body|boolean|false|Enables or disables a rule. You must disable rules before you can delete them.|
|» TargetApplications|body|[[SipRuleTargetApplication](#schemasipruletargetapplication)]|true|List of SIP media applications with priority and AWS Region. Only one SIP application per AWS Region can be used.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» TriggerType|ToPhoneNumber|
|» TriggerType|RequestUriHostname|

> Example responses

> 201 Response

```json
{
  "SipRule": {
    "SipRuleId": {},
    "Name": {},
    "Disabled": {},
    "TriggerType": {},
    "TriggerValue": {},
    "TargetApplications": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {}
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

<h3 id="createsiprule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateSipRuleResponse](#schemacreatesipruleresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|
|487|487|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|488|488|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateUser

<a id="opIdCreateUser"></a>

> Code samples

```bash
curl 'https://chime.us-east-1.amazonaws.com/accounts/string/users#operation=create?operation=create' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Username": "string",
    "Email": "password",
    "UserType": "PrivateUser"
  }'
```

`POST /accounts/{accountId}/users#operation=create`

Creates a user under the specified Amazon Chime account.

> Body parameter

```json
{
  "Username": "string",
  "Email": "password",
  "UserType": "PrivateUser"
}
```

<h3 id="createuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The Amazon Chime account ID.|
|operation|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Username|body|string|false|The user name.|
|» Email|body|string(password)|false|The user's email address.|
|» UserType|body|string|false|The user type.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|operation|create|
|» UserType|PrivateUser|
|» UserType|SharedDevice|

> Example responses

> 201 Response

```json
{
  "User": {
    "UserId": {},
    "AccountId": {},
    "PrimaryEmail": {},
    "PrimaryProvisionedNumber": {},
    "DisplayName": {},
    "LicenseType": {},
    "UserType": {},
    "UserRegistrationStatus": {},
    "UserInvitationStatus": {},
    "RegisteredOn": {},
    "InvitedOn": {},
    "AlexaForBusinessMetadata": {
      "IsAlexaForBusinessEnabled": {},
      "AlexaForBusinessRoomArn": {}
    },
    "PersonalPIN": {}
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

<h3 id="createuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateUserResponse](#schemacreateuserresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|485|485|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|487|487|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListVoiceConnectors

<a id="opIdListVoiceConnectors"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/voice-connectors \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /voice-connectors`

Lists the Amazon Chime Voice Connectors for the administrator's AWS account.

<h3 id="listvoiceconnectors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|next-token|query|string|false|The token to use to retrieve the next page of results.|
|max-results|query|integer|false|The maximum number of results to return in a single call.|
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
  "VoiceConnectors": {},
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

<h3 id="listvoiceconnectors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListVoiceConnectorsResponse](#schemalistvoiceconnectorsresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateVoiceConnector

<a id="opIdCreateVoiceConnector"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/voice-connectors \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "AwsRegion": "us-east-1",
    "RequireEncryption": true
  }'
```

`POST /voice-connectors`

<p>Creates an Amazon Chime Voice Connector under the administrator's AWS account. You can choose to create an Amazon Chime Voice Connector in a specific AWS Region.</p> <p> Enabling <a>CreateVoiceConnectorRequest$RequireEncryption</a> configures your Amazon Chime Voice Connector to use TLS transport for SIP signaling and Secure RTP (SRTP) for media. Inbound calls use TLS transport, and unencrypted outbound calls are blocked. </p>

> Body parameter

```json
{
  "Name": "string",
  "AwsRegion": "us-east-1",
  "RequireEncryption": true
}
```

<h3 id="createvoiceconnector-parameters">Parameters</h3>

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
|» Name|body|string|true|The name of the Amazon Chime Voice Connector.|
|» AwsRegion|body|string|false| The AWS Region in which the Amazon Chime Voice Connector is created. Default value: <code>us-east-1</code> . |
|» RequireEncryption|body|boolean|true|When enabled, requires encryption for the Amazon Chime Voice Connector.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» AwsRegion|us-east-1|
|» AwsRegion|us-west-2|

> Example responses

> 201 Response

```json
{
  "VoiceConnector": {
    "VoiceConnectorId": {},
    "AwsRegion": {},
    "Name": {},
    "OutboundHostName": {},
    "RequireEncryption": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {},
    "VoiceConnectorArn": {}
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

<h3 id="createvoiceconnector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateVoiceConnectorResponse](#schemacreatevoiceconnectorresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|487|487|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListVoiceConnectorGroups

<a id="opIdListVoiceConnectorGroups"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/voice-connector-groups \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /voice-connector-groups`

Lists the Amazon Chime Voice Connector groups for the administrator's AWS account.

<h3 id="listvoiceconnectorgroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|next-token|query|string|false|The token to use to retrieve the next page of results.|
|max-results|query|integer|false|The maximum number of results to return in a single call.|
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
  "VoiceConnectorGroups": {},
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

<h3 id="listvoiceconnectorgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListVoiceConnectorGroupsResponse](#schemalistvoiceconnectorgroupsresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateVoiceConnectorGroup

<a id="opIdCreateVoiceConnectorGroup"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/voice-connector-groups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "VoiceConnectorItems": [
      {
        "VoiceConnectorId": {},
        "Priority": {}
      }
    ]
  }'
```

`POST /voice-connector-groups`

<p>Creates an Amazon Chime Voice Connector group under the administrator's AWS account. You can associate Amazon Chime Voice Connectors with the Amazon Chime Voice Connector group by including <code>VoiceConnectorItems</code> in the request.</p> <p>You can include Amazon Chime Voice Connectors from different AWS Regions in your group. This creates a fault tolerant mechanism for fallback in case of availability events.</p>

> Body parameter

```json
{
  "Name": "string",
  "VoiceConnectorItems": [
    {
      "VoiceConnectorId": {},
      "Priority": {}
    }
  ]
}
```

<h3 id="createvoiceconnectorgroup-parameters">Parameters</h3>

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
|» Name|body|string|true|The name of the Amazon Chime Voice Connector group.|
|» VoiceConnectorItems|body|[[VoiceConnectorItem](#schemavoiceconnectoritem)]|false|The Amazon Chime Voice Connectors to route inbound calls to.|

> Example responses

> 201 Response

```json
{
  "VoiceConnectorGroup": {
    "VoiceConnectorGroupId": {},
    "Name": {},
    "VoiceConnectorItems": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {},
    "VoiceConnectorGroupArn": {}
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

<h3 id="createvoiceconnectorgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateVoiceConnectorGroupResponse](#schemacreatevoiceconnectorgroupresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|487|487|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAccount

<a id="opIdGetAccount"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/accounts/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /accounts/{accountId}`

Retrieves details for the specified Amazon Chime account, such as account type and supported licenses.

<h3 id="getaccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The Amazon Chime account ID.|
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
  "Account": {
    "AwsAccountId": {},
    "AccountId": {},
    "Name": {},
    "AccountType": {},
    "CreatedTimestamp": {},
    "DefaultLicense": {},
    "SupportedLicenses": {},
    "AccountStatus": {},
    "SigninDelegateGroups": {}
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

<h3 id="getaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAccountResponse](#schemagetaccountresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateAccount

<a id="opIdUpdateAccount"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/accounts/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "DefaultLicense": "Basic"
  }'
```

`POST /accounts/{accountId}`

Updates account details for the specified Amazon Chime account. Currently, only account name and default license updates are supported for this action.

> Body parameter

```json
{
  "Name": "string",
  "DefaultLicense": "Basic"
}
```

<h3 id="updateaccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The Amazon Chime account ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|false|The new name for the specified Amazon Chime account.|
|» DefaultLicense|body|string|false|The default license applied when you add users to an Amazon Chime account.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» DefaultLicense|Basic|
|» DefaultLicense|Plus|
|» DefaultLicense|Pro|
|» DefaultLicense|ProTrial|

> Example responses

> 200 Response

```json
{
  "Account": {
    "AwsAccountId": {},
    "AccountId": {},
    "Name": {},
    "AccountType": {},
    "CreatedTimestamp": {},
    "DefaultLicense": {},
    "SupportedLicenses": {},
    "AccountStatus": {},
    "SigninDelegateGroups": {}
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

<h3 id="updateaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateAccountResponse](#schemaupdateaccountresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAccount

<a id="opIdDeleteAccount"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/accounts/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /accounts/{accountId}`

<p>Deletes the specified Amazon Chime account. You must suspend all users before deleting <code>Team</code> account. You can use the <a>BatchSuspendUser</a> action to dodo.</p> <p>For <code>EnterpriseLWA</code> and <code>EnterpriseAD</code> accounts, you must release the claimed domains for your Amazon Chime account before deletion. As soon as you release the domain, all users under that account are suspended.</p> <p>Deleted accounts appear in your <code>Disabled</code> accounts list for 90 days. To restore deleted account from your <code>Disabled</code> accounts list, you must contact AWS Support.</p> <p>After 90 days, deleted accounts are permanently removed from your <code>Disabled</code> accounts list.</p>

<h3 id="deleteaccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The Amazon Chime account ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 204 Response

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

<h3 id="deleteaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[DeleteAccountResponse](#schemadeleteaccountresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|UnprocessableEntityException|[UnprocessableEntityException](#schemaunprocessableentityexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|487|487|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAppInstance

<a id="opIdDescribeAppInstance"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/app-instances/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /app-instances/{appInstanceArn}`

Returns the full details of an <code>AppInstance</code>.

<h3 id="describeappinstance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appInstanceArn|path|string|true|The ARN of the <code>AppInstance</code>.|
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
  "AppInstance": {
    "AppInstanceArn": {},
    "Name": {},
    "Metadata": {},
    "CreatedTimestamp": {},
    "LastUpdatedTimestamp": {}
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

<h3 id="describeappinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAppInstanceResponse](#schemadescribeappinstanceresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|483|483|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateAppInstance

<a id="opIdUpdateAppInstance"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/app-instances/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "password",
    "Metadata": "password"
  }'
```

`PUT /app-instances/{appInstanceArn}`

Updates <code>AppInstance</code> metadata.

> Body parameter

```json
{
  "Name": "password",
  "Metadata": "password"
}
```

<h3 id="updateappinstance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appInstanceArn|path|string|true|The ARN of the <code>AppInstance</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string(password)|true|The name that you want to change.|
|» Metadata|body|string(password)|false|The metadata that you want to change.|

> Example responses

> 200 Response

```json
{
  "AppInstanceArn": {}
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

<h3 id="updateappinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateAppInstanceResponse](#schemaupdateappinstanceresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|484|484|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAppInstance

<a id="opIdDeleteAppInstance"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/app-instances/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /app-instances/{appInstanceArn}`

Deletes an <code>AppInstance</code> and all associated data asynchronously.

<h3 id="deleteappinstance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appInstanceArn|path|string|true|The ARN of the <code>AppInstance</code>.|
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

<h3 id="deleteappinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|483|483|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAppInstanceAdmin

<a id="opIdDescribeAppInstanceAdmin"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/app-instances/string/admins/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /app-instances/{appInstanceArn}/admins/{appInstanceAdminArn}`

Returns the full details of an <code>AppInstanceAdmin</code>.

<h3 id="describeappinstanceadmin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appInstanceAdminArn|path|string|true|The ARN of the <code>AppInstanceAdmin</code>.|
|appInstanceArn|path|string|true|The ARN of the <code>AppInstance</code>.|
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
  "AppInstanceAdmin": {
    "Admin": {
      "Arn": {},
      "Name": {}
    },
    "AppInstanceArn": {},
    "CreatedTimestamp": {}
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

<h3 id="describeappinstanceadmin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAppInstanceAdminResponse](#schemadescribeappinstanceadminresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|483|483|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAppInstanceAdmin

<a id="opIdDeleteAppInstanceAdmin"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/app-instances/string/admins/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /app-instances/{appInstanceArn}/admins/{appInstanceAdminArn}`

Demotes an <code>AppInstanceAdmin</code> to an <code>AppInstanceUser</code>. This action does not delete the user.

<h3 id="deleteappinstanceadmin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appInstanceAdminArn|path|string|true|The ARN of the <code>AppInstance</code>'s administrator.|
|appInstanceArn|path|string|true|The ARN of the <code>AppInstance</code>.|
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

> 486 Response

```json
null
```

<h3 id="deleteappinstanceadmin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|484|484|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAppInstanceStreamingConfigurations

<a id="opIdGetAppInstanceStreamingConfigurations"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/app-instances/string/streaming-configurations \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /app-instances/{appInstanceArn}/streaming-configurations`

Gets the streaming settings for an <code>AppInstance</code>.

<h3 id="getappinstancestreamingconfigurations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appInstanceArn|path|string|true|The ARN of the <code>AppInstance</code>.|
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
  "AppInstanceStreamingConfigurations": {}
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

<h3 id="getappinstancestreamingconfigurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAppInstanceStreamingConfigurationsResponse](#schemagetappinstancestreamingconfigurationsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutAppInstanceStreamingConfigurations

<a id="opIdPutAppInstanceStreamingConfigurations"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/app-instances/string/streaming-configurations \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AppInstanceStreamingConfigurations": [
      {
        "AppInstanceDataType": {},
        "ResourceArn": {}
      }
    ]
  }'
```

`PUT /app-instances/{appInstanceArn}/streaming-configurations`

The data streaming configurations of an <code>AppInstance</code>.

> Body parameter

```json
{
  "AppInstanceStreamingConfigurations": [
    {
      "AppInstanceDataType": {},
      "ResourceArn": {}
    }
  ]
}
```

<h3 id="putappinstancestreamingconfigurations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appInstanceArn|path|string|true|The ARN of the <code>AppInstance</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» AppInstanceStreamingConfigurations|body|[[AppInstanceStreamingConfiguration](#schemaappinstancestreamingconfiguration)]|true|The streaming configurations set for an <code>AppInstance</code>.|

> Example responses

> 200 Response

```json
{
  "AppInstanceStreamingConfigurations": {}
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

<h3 id="putappinstancestreamingconfigurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutAppInstanceStreamingConfigurationsResponse](#schemaputappinstancestreamingconfigurationsresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAppInstanceStreamingConfigurations

<a id="opIdDeleteAppInstanceStreamingConfigurations"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/app-instances/string/streaming-configurations \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /app-instances/{appInstanceArn}/streaming-configurations`

Deletes the streaming configurations of an <code>AppInstance</code>.

<h3 id="deleteappinstancestreamingconfigurations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appInstanceArn|path|string|true|The ARN of the streaming configurations being deleted.|
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

> 486 Response

```json
null
```

<h3 id="deleteappinstancestreamingconfigurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAppInstanceUser

<a id="opIdDescribeAppInstanceUser"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/app-instance-users/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /app-instance-users/{appInstanceUserArn}`

Returns the full details of an <code>AppInstanceUser</code>.

<h3 id="describeappinstanceuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appInstanceUserArn|path|string|true|The ARN of the <code>AppInstanceUser</code>.|
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
  "AppInstanceUser": {
    "AppInstanceUserArn": {},
    "Name": {},
    "CreatedTimestamp": {},
    "Metadata": {},
    "LastUpdatedTimestamp": {}
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

<h3 id="describeappinstanceuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAppInstanceUserResponse](#schemadescribeappinstanceuserresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|483|483|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateAppInstanceUser

<a id="opIdUpdateAppInstanceUser"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/app-instance-users/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "password",
    "Metadata": "password"
  }'
```

`PUT /app-instance-users/{appInstanceUserArn}`

Updates the details of an <code>AppInstanceUser</code>. You can update names and metadata.

> Body parameter

```json
{
  "Name": "password",
  "Metadata": "password"
}
```

<h3 id="updateappinstanceuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appInstanceUserArn|path|string|true|The ARN of the <code>AppInstanceUser</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string(password)|true|The name of the <code>AppInstanceUser</code>.|
|» Metadata|body|string(password)|false|The metadata of the <code>AppInstanceUser</code>.|

> Example responses

> 200 Response

```json
{
  "AppInstanceUserArn": {}
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

<h3 id="updateappinstanceuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateAppInstanceUserResponse](#schemaupdateappinstanceuserresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|484|484|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAppInstanceUser

<a id="opIdDeleteAppInstanceUser"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/app-instance-users/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /app-instance-users/{appInstanceUserArn}`

Deletes an <code>AppInstanceUser</code>.

<h3 id="deleteappinstanceuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appInstanceUserArn|path|string|true|The ARN of the user request being deleted.|
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

<h3 id="deleteappinstanceuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|483|483|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAttendee

<a id="opIdGetAttendee"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/meetings/string/attendees/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /meetings/{meetingId}/attendees/{attendeeId}`

 Gets the Amazon Chime SDK attendee details for a specified meeting ID and attendee ID. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime SDK Developer Guide</i> . 

<h3 id="getattendee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|meetingId|path|string|true|The Amazon Chime SDK meeting ID.|
|attendeeId|path|string|true|The Amazon Chime SDK attendee ID.|
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
  "Attendee": {
    "ExternalUserId": {},
    "AttendeeId": {},
    "JoinToken": {}
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

<h3 id="getattendee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAttendeeResponse](#schemagetattendeeresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|484|484|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAttendee

<a id="opIdDeleteAttendee"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/meetings/string/attendees/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /meetings/{meetingId}/attendees/{attendeeId}`

Deletes an attendee from the specified Amazon Chime SDK meeting and deletes their <code>JoinToken</code>. Attendees are automatically deleted when a Amazon Chime SDK meeting is deleted. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime SDK Developer Guide</i>.

<h3 id="deleteattendee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|meetingId|path|string|true|The Amazon Chime SDK meeting ID.|
|attendeeId|path|string|true|The Amazon Chime SDK attendee ID.|
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

> 486 Response

```json
null
```

<h3 id="deleteattendee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeChannel

<a id="opIdDescribeChannel"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/channels/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /channels/{channelArn}`

<p>Returns the full details of a channel in an Amazon Chime <code>AppInstance</code>.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>

<h3 id="describechannel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelArn|path|string|true|The ARN of the channel.|
|x-amz-chime-bearer|header|string|false|The <code>AppInstanceUserArn</code> of the user that makes the API call.|
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
  "Channel": {
    "Name": {},
    "ChannelArn": {},
    "Mode": {},
    "Privacy": {},
    "Metadata": {},
    "CreatedBy": {
      "Arn": {},
      "Name": {}
    },
    "CreatedTimestamp": {},
    "LastMessageTimestamp": {},
    "LastUpdatedTimestamp": {}
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

<h3 id="describechannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeChannelResponse](#schemadescribechannelresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|483|483|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateChannel

<a id="opIdUpdateChannel"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/channels/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "password",
    "Mode": "UNRESTRICTED",
    "Metadata": "password"
  }'
```

`PUT /channels/{channelArn}`

<p>Update a channel's attributes.</p> <p> <b>Restriction</b>: You can't change a channel's privacy. </p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>

> Body parameter

```json
{
  "Name": "password",
  "Mode": "UNRESTRICTED",
  "Metadata": "password"
}
```

<h3 id="updatechannel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelArn|path|string|true|The ARN of the channel.|
|x-amz-chime-bearer|header|string|false|The <code>AppInstanceUserArn</code> of the user that makes the API call.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string(password)|true|The name of the channel.|
|» Mode|body|string|true|The mode of the update request.|
|» Metadata|body|string(password)|false|The metadata for the update request.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Mode|UNRESTRICTED|
|» Mode|RESTRICTED|

> Example responses

> 200 Response

```json
{
  "ChannelArn": {}
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

<h3 id="updatechannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateChannelResponse](#schemaupdatechannelresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteChannel

<a id="opIdDeleteChannel"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/channels/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /channels/{channelArn}`

<p>Immediately makes a channel and its memberships inaccessible and marks them for deletion. This is an irreversible process.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>

<h3 id="deletechannel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelArn|path|string|true|The ARN of the channel being deleted.|
|x-amz-chime-bearer|header|string|false|The <code>AppInstanceUserArn</code> of the user that makes the API call.|
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

<h3 id="deletechannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|483|483|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeChannelBan

<a id="opIdDescribeChannelBan"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/channels/string/bans/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /channels/{channelArn}/bans/{memberArn}`

<p>Returns the full details of a channel ban.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>

<h3 id="describechannelban-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelArn|path|string|true|The ARN of the channel from which the user is banned.|
|memberArn|path|string|true|The ARN of the member being banned.|
|x-amz-chime-bearer|header|string|false|The <code>AppInstanceUserArn</code> of the user that makes the API call.|
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
  "ChannelBan": {
    "Member": {
      "Arn": {},
      "Name": {}
    },
    "ChannelArn": {},
    "CreatedTimestamp": {},
    "CreatedBy": {
      "Arn": {},
      "Name": {}
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

<h3 id="describechannelban-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeChannelBanResponse](#schemadescribechannelbanresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteChannelBan

<a id="opIdDeleteChannelBan"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/channels/string/bans/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /channels/{channelArn}/bans/{memberArn}`

<p>Removes a user from a channel's ban list.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>

<h3 id="deletechannelban-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelArn|path|string|true|The ARN of the channel from which the <code>AppInstanceUser</code> was banned.|
|memberArn|path|string|true|The ARN of the <code>AppInstanceUser</code> that you want to reinstate.|
|x-amz-chime-bearer|header|string|false|The <code>AppInstanceUserArn</code> of the user that makes the API call.|
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

<h3 id="deletechannelban-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|483|483|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeChannelMembership

<a id="opIdDescribeChannelMembership"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/channels/string/memberships/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /channels/{channelArn}/memberships/{memberArn}`

<p>Returns the full details of a user's channel membership.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>

<h3 id="describechannelmembership-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelArn|path|string|true|The ARN of the channel.|
|memberArn|path|string|true|The ARN of the member.|
|x-amz-chime-bearer|header|string|false|The <code>AppInstanceUserArn</code> of the user that makes the API call.|
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
  "ChannelMembership": {
    "InvitedBy": {
      "Arn": {},
      "Name": {}
    },
    "Type": {},
    "Member": {
      "Arn": {},
      "Name": {}
    },
    "ChannelArn": {},
    "CreatedTimestamp": {},
    "LastUpdatedTimestamp": {}
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

<h3 id="describechannelmembership-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeChannelMembershipResponse](#schemadescribechannelmembershipresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteChannelMembership

<a id="opIdDeleteChannelMembership"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/channels/string/memberships/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /channels/{channelArn}/memberships/{memberArn}`

<p>Removes a member from a channel.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>

<h3 id="deletechannelmembership-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelArn|path|string|true|The ARN of the channel from which you want to remove the user.|
|memberArn|path|string|true|The ARN of the member that you're removing from the channel.|
|x-amz-chime-bearer|header|string|false|The <code>AppInstanceUserArn</code> of the user that makes the API call.|
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

> 486 Response

```json
null
```

<h3 id="deletechannelmembership-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetChannelMessage

<a id="opIdGetChannelMessage"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/channels/string/messages/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /channels/{channelArn}/messages/{messageId}`

<p>Gets the full details of a channel message.</p> <note> <p>The x-amz-chime-bearer request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>

<h3 id="getchannelmessage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelArn|path|string|true|The ARN of the channel.|
|messageId|path|string|true|The ID of the message.|
|x-amz-chime-bearer|header|string|false|The <code>AppInstanceUserArn</code> of the user that makes the API call.|
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
  "ChannelMessage": {
    "ChannelArn": {},
    "MessageId": {},
    "Content": {},
    "Metadata": {},
    "Type": {},
    "CreatedTimestamp": {},
    "LastEditedTimestamp": {},
    "LastUpdatedTimestamp": {},
    "Sender": {
      "Arn": {},
      "Name": {}
    },
    "Redacted": {},
    "Persistence": {}
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

<h3 id="getchannelmessage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetChannelMessageResponse](#schemagetchannelmessageresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateChannelMessage

<a id="opIdUpdateChannelMessage"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/channels/string/messages/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Content": "password",
    "Metadata": "password"
  }'
```

`PUT /channels/{channelArn}/messages/{messageId}`

<p>Updates the content of a message.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>

> Body parameter

```json
{
  "Content": "password",
  "Metadata": "password"
}
```

<h3 id="updatechannelmessage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelArn|path|string|true|The ARN of the channel.|
|messageId|path|string|true|The ID string of the message being updated.|
|x-amz-chime-bearer|header|string|false|The <code>AppInstanceUserArn</code> of the user that makes the API call.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Content|body|string(password)|false|The content of the message being updated.|
|» Metadata|body|string(password)|false|The metadata of the message being updated.|

> Example responses

> 200 Response

```json
{
  "ChannelArn": {},
  "MessageId": {}
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

<h3 id="updatechannelmessage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateChannelMessageResponse](#schemaupdatechannelmessageresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteChannelMessage

<a id="opIdDeleteChannelMessage"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/channels/string/messages/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /channels/{channelArn}/messages/{messageId}`

<p>Deletes a channel message. Only admins can perform this action. Deletion makes messages inaccessible immediately. A background process deletes any revisions created by <code>UpdateChannelMessage</code>.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>

<h3 id="deletechannelmessage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelArn|path|string|true|The ARN of the channel.|
|messageId|path|string|true|The ID of the message being deleted.|
|x-amz-chime-bearer|header|string|false|The <code>AppInstanceUserArn</code> of the user that makes the API call.|
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

<h3 id="deletechannelmessage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|483|483|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeChannelModerator

<a id="opIdDescribeChannelModerator"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/channels/string/moderators/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /channels/{channelArn}/moderators/{channelModeratorArn}`

<p>Returns the full details of a single ChannelModerator.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>

<h3 id="describechannelmoderator-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelArn|path|string|true|The ARN of the channel.|
|channelModeratorArn|path|string|true|The ARN of the channel moderator.|
|x-amz-chime-bearer|header|string|false|The <code>AppInstanceUserArn</code> of the user that makes the API call.|
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
  "ChannelModerator": {
    "Moderator": {
      "Arn": {},
      "Name": {}
    },
    "ChannelArn": {},
    "CreatedTimestamp": {},
    "CreatedBy": {
      "Arn": {},
      "Name": {}
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

<h3 id="describechannelmoderator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeChannelModeratorResponse](#schemadescribechannelmoderatorresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteChannelModerator

<a id="opIdDeleteChannelModerator"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/channels/string/moderators/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /channels/{channelArn}/moderators/{channelModeratorArn}`

<p>Deletes a channel moderator.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>

<h3 id="deletechannelmoderator-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelArn|path|string|true|The ARN of the channel.|
|channelModeratorArn|path|string|true|The ARN of the moderator being deleted.|
|x-amz-chime-bearer|header|string|false|The <code>AppInstanceUserArn</code> of the user that makes the API call.|
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

<h3 id="deletechannelmoderator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|483|483|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetEventsConfiguration

<a id="opIdGetEventsConfiguration"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/accounts/string/bots/string/events-configuration \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /accounts/{accountId}/bots/{botId}/events-configuration`

Gets details for an events configuration that allows a bot to receive outgoing events, such as an HTTPS endpoint or Lambda function ARN.

<h3 id="geteventsconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The Amazon Chime account ID.|
|botId|path|string|true|The bot ID.|
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
  "EventsConfiguration": {
    "BotId": {},
    "OutboundEventsHTTPSEndpoint": {},
    "LambdaFunctionArn": {}
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

<h3 id="geteventsconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetEventsConfigurationResponse](#schemageteventsconfigurationresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|485|485|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|486|486|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutEventsConfiguration

<a id="opIdPutEventsConfiguration"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/accounts/string/bots/string/events-configuration \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "OutboundEventsHTTPSEndpoint": "password",
    "LambdaFunctionArn": "password"
  }'
```

`PUT /accounts/{accountId}/bots/{botId}/events-configuration`

Creates an events configuration that allows a bot to receive outgoing events sent by Amazon Chime. Choose either an HTTPS endpoint or a Lambda function ARN. For more information, see <a>Bot</a>.

> Body parameter

```json
{
  "OutboundEventsHTTPSEndpoint": "password",
  "LambdaFunctionArn": "password"
}
```

<h3 id="puteventsconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The Amazon Chime account ID.|
|botId|path|string|true|The bot ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» OutboundEventsHTTPSEndpoint|body|string(password)|false|HTTPS endpoint that allows the bot to receive outgoing events.|
|» LambdaFunctionArn|body|string(password)|false|Lambda function ARN that allows the bot to receive outgoing events.|

> Example responses

> 201 Response

```json
{
  "EventsConfiguration": {
    "BotId": {},
    "OutboundEventsHTTPSEndpoint": {},
    "LambdaFunctionArn": {}
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

<h3 id="puteventsconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[PutEventsConfigurationResponse](#schemaputeventsconfigurationresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|485|485|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|486|486|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteEventsConfiguration

<a id="opIdDeleteEventsConfiguration"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/accounts/string/bots/string/events-configuration \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /accounts/{accountId}/bots/{botId}/events-configuration`

Deletes the events configuration that allows a bot to receive outgoing events.

<h3 id="deleteeventsconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The Amazon Chime account ID.|
|botId|path|string|true|The bot ID.|
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

<h3 id="deleteeventsconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|485|485|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetMediaCapturePipeline

<a id="opIdGetMediaCapturePipeline"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/media-capture-pipelines/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /media-capture-pipelines/{mediaPipelineId}`

Gets an existing media capture pipeline.

<h3 id="getmediacapturepipeline-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mediaPipelineId|path|string|true|The ID of the pipeline that you want to get.|
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
  "MediaCapturePipeline": {
    "MediaPipelineId": {},
    "SourceType": {},
    "SourceArn": {},
    "Status": {},
    "SinkType": {},
    "SinkArn": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {},
    "ChimeSdkMeetingConfiguration": {
      "SourceConfiguration": {
        "SelectedVideoStreams": {
          "AttendeeIds": {},
          "ExternalUserIds": {}
        }
      },
      "ArtifactsConfiguration": {
        "Audio": {
          "MuxType": {}
        },
        "Video": {
          "State": {},
          "MuxType": {}
        },
        "Content": {
          "State": {},
          "MuxType": {}
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

> 486 Response

```json
null
```

<h3 id="getmediacapturepipeline-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMediaCapturePipelineResponse](#schemagetmediacapturepipelineresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteMediaCapturePipeline

<a id="opIdDeleteMediaCapturePipeline"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/media-capture-pipelines/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /media-capture-pipelines/{mediaPipelineId}`

Deletes the media capture pipeline.

<h3 id="deletemediacapturepipeline-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mediaPipelineId|path|string|true|The ID of the media capture pipeline being deleted. |
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

> 486 Response

```json
null
```

<h3 id="deletemediacapturepipeline-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|484|484|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetMeeting

<a id="opIdGetMeeting"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/meetings/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /meetings/{meetingId}`

 Gets the Amazon Chime SDK meeting details for the specified meeting ID. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime SDK Developer Guide</i> . 

<h3 id="getmeeting-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|meetingId|path|string|true|The Amazon Chime SDK meeting ID.|
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
  "Meeting": {
    "MeetingId": {},
    "ExternalMeetingId": {},
    "MediaPlacement": {
      "AudioHostUrl": {},
      "AudioFallbackUrl": {},
      "ScreenDataUrl": {},
      "ScreenSharingUrl": {},
      "ScreenViewingUrl": {},
      "SignalingUrl": {},
      "TurnControlUrl": {},
      "EventIngestionUrl": {}
    },
    "MediaRegion": {}
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

<h3 id="getmeeting-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMeetingResponse](#schemagetmeetingresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|484|484|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteMeeting

<a id="opIdDeleteMeeting"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/meetings/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /meetings/{meetingId}`

Deletes the specified Amazon Chime SDK meeting. The operation deletes all attendees, disconnects all clients, and prevents new clients from joining the meeting. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime SDK Developer Guide</i>.

<h3 id="deletemeeting-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|meetingId|path|string|true|The Amazon Chime SDK meeting ID.|
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

> 486 Response

```json
null
```

<h3 id="deletemeeting-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetPhoneNumber

<a id="opIdGetPhoneNumber"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/phone-numbers/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /phone-numbers/{phoneNumberId}`

Retrieves details for the specified phone number ID, such as associations, capabilities, and product type.

<h3 id="getphonenumber-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|phoneNumberId|path|string|true|The phone number ID.|
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
  "PhoneNumber": {
    "PhoneNumberId": {},
    "E164PhoneNumber": {},
    "Country": {},
    "Type": {},
    "ProductType": {},
    "Status": {},
    "Capabilities": {
      "InboundCall": {},
      "OutboundCall": {},
      "InboundSMS": {},
      "OutboundSMS": {},
      "InboundMMS": {},
      "OutboundMMS": {}
    },
    "Associations": {},
    "CallingName": {},
    "CallingNameStatus": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {},
    "DeletionTimestamp": {}
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

<h3 id="getphonenumber-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetPhoneNumberResponse](#schemagetphonenumberresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdatePhoneNumber

<a id="opIdUpdatePhoneNumber"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/phone-numbers/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ProductType": "BusinessCalling",
    "CallingName": "password"
  }'
```

`POST /phone-numbers/{phoneNumberId}`

<p>Updates phone number details, such as product type or calling name, for the specified phone number ID. You can update one phone number detail at a time. For example, you can update either the product type or the calling name in one action.</p> <p>For toll-free numbers, you cannot use the Amazon Chime Business Calling product type. For numbers outside the U.S., you must use the Amazon Chime SIP Media Application Dial-In product type.</p> <p>Updates to outbound calling names can take 72 hours to complete. Pending updates to outbound calling names must be complete before you can request another update.</p>

> Body parameter

```json
{
  "ProductType": "BusinessCalling",
  "CallingName": "password"
}
```

<h3 id="updatephonenumber-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|phoneNumberId|path|string|true|The phone number ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ProductType|body|string|false|The product type.|
|» CallingName|body|string(password)|false|The outbound calling name associated with the phone number.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» ProductType|BusinessCalling|
|» ProductType|VoiceConnector|
|» ProductType|SipMediaApplicationDialIn|

> Example responses

> 200 Response

```json
{
  "PhoneNumber": {
    "PhoneNumberId": {},
    "E164PhoneNumber": {},
    "Country": {},
    "Type": {},
    "ProductType": {},
    "Status": {},
    "Capabilities": {
      "InboundCall": {},
      "OutboundCall": {},
      "InboundSMS": {},
      "OutboundSMS": {},
      "InboundMMS": {},
      "OutboundMMS": {}
    },
    "Associations": {},
    "CallingName": {},
    "CallingNameStatus": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {},
    "DeletionTimestamp": {}
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

<h3 id="updatephonenumber-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdatePhoneNumberResponse](#schemaupdatephonenumberresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|487|487|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeletePhoneNumber

<a id="opIdDeletePhoneNumber"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/phone-numbers/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /phone-numbers/{phoneNumberId}`

<p>Moves the specified phone number into the <b>Deletion queue</b>. A phone number must be disassociated from any users or Amazon Chime Voice Connectors before it can be deleted.</p> <p>Deleted phone numbers remain in the <b>Deletion queue</b> for 7 days before they are deleted permanently.</p>

<h3 id="deletephonenumber-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|phoneNumberId|path|string|true|The phone number ID.|
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

> 486 Response

```json
null
```

<h3 id="deletephonenumber-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetProxySession

<a id="opIdGetProxySession"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/voice-connectors/string/proxy-sessions/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /voice-connectors/{voiceConnectorId}/proxy-sessions/{proxySessionId}`

Gets the specified proxy session details for the specified Amazon Chime Voice Connector.

<h3 id="getproxysession-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|voiceConnectorId|path|string|true|The Amazon Chime voice connector ID.|
|proxySessionId|path|string|true|The proxy session ID.|
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
  "ProxySession": {
    "VoiceConnectorId": {},
    "ProxySessionId": {},
    "Name": {},
    "Status": {},
    "ExpiryMinutes": {},
    "Capabilities": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {},
    "EndedTimestamp": {},
    "Participants": {},
    "NumberSelectionBehavior": {},
    "GeoMatchLevel": {},
    "GeoMatchParams": {
      "Country": {},
      "AreaCode": {}
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

<h3 id="getproxysession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetProxySessionResponse](#schemagetproxysessionresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateProxySession

<a id="opIdUpdateProxySession"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/voice-connectors/string/proxy-sessions/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Capabilities": [
      "Voice"
    ],
    "ExpiryMinutes": 1
  }'
```

`POST /voice-connectors/{voiceConnectorId}/proxy-sessions/{proxySessionId}`

Updates the specified proxy session details, such as voice or SMS capabilities.

> Body parameter

```json
{
  "Capabilities": [
    "Voice"
  ],
  "ExpiryMinutes": 1
}
```

<h3 id="updateproxysession-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|voiceConnectorId|path|string|true|The Amazon Chime voice connector ID.|
|proxySessionId|path|string|true|The proxy session ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Capabilities|body|[[Capability](#schemacapability)]|true|The proxy session capabilities.|
|» ExpiryMinutes|body|integer|false|The number of minutes allowed for the proxy session.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Capabilities|Voice|
|» Capabilities|SMS|

> Example responses

> 201 Response

```json
{
  "ProxySession": {
    "VoiceConnectorId": {},
    "ProxySessionId": {},
    "Name": {},
    "Status": {},
    "ExpiryMinutes": {},
    "Capabilities": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {},
    "EndedTimestamp": {},
    "Participants": {},
    "NumberSelectionBehavior": {},
    "GeoMatchLevel": {},
    "GeoMatchParams": {
      "Country": {},
      "AreaCode": {}
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

<h3 id="updateproxysession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[UpdateProxySessionResponse](#schemaupdateproxysessionresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteProxySession

<a id="opIdDeleteProxySession"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/voice-connectors/string/proxy-sessions/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /voice-connectors/{voiceConnectorId}/proxy-sessions/{proxySessionId}`

Deletes the specified proxy session from the specified Amazon Chime Voice Connector.

<h3 id="deleteproxysession-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|voiceConnectorId|path|string|true|The Amazon Chime voice connector ID.|
|proxySessionId|path|string|true|The proxy session ID.|
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

> 486 Response

```json
null
```

<h3 id="deleteproxysession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRoom

<a id="opIdGetRoom"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/accounts/string/rooms/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /accounts/{accountId}/rooms/{roomId}`

Retrieves room details, such as the room name, for a room in an Amazon Chime Enterprise account.

<h3 id="getroom-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The Amazon Chime account ID.|
|roomId|path|string|true|The room ID.|
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
  "Room": {
    "RoomId": {},
    "Name": {},
    "AccountId": {},
    "CreatedBy": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {}
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

<h3 id="getroom-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRoomResponse](#schemagetroomresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateRoom

<a id="opIdUpdateRoom"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/accounts/string/rooms/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "password"
  }'
```

`POST /accounts/{accountId}/rooms/{roomId}`

Updates room details, such as the room name, for a room in an Amazon Chime Enterprise account.

> Body parameter

```json
{
  "Name": "password"
}
```

<h3 id="updateroom-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The Amazon Chime account ID.|
|roomId|path|string|true|The room ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string(password)|false|The room name.|

> Example responses

> 200 Response

```json
{
  "Room": {
    "RoomId": {},
    "Name": {},
    "AccountId": {},
    "CreatedBy": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {}
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

<h3 id="updateroom-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateRoomResponse](#schemaupdateroomresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRoom

<a id="opIdDeleteRoom"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/accounts/string/rooms/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /accounts/{accountId}/rooms/{roomId}`

Deletes a chat room in an Amazon Chime Enterprise account.

<h3 id="deleteroom-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The Amazon Chime account ID.|
|roomId|path|string|true|The chat room ID.|
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

> 486 Response

```json
null
```

<h3 id="deleteroom-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateRoomMembership

<a id="opIdUpdateRoomMembership"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/accounts/string/rooms/string/memberships/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Role": "Administrator"
  }'
```

`POST /accounts/{accountId}/rooms/{roomId}/memberships/{memberId}`

Updates room membership details, such as the member role, for a room in an Amazon Chime Enterprise account. The member role designates whether the member is a chat room administrator or a general chat room member. The member role can be updated only for user IDs.

> Body parameter

```json
{
  "Role": "Administrator"
}
```

<h3 id="updateroommembership-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The Amazon Chime account ID.|
|roomId|path|string|true|The room ID.|
|memberId|path|string|true|The member ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Role|body|string|false|The role of the member.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Role|Administrator|
|» Role|Member|

> Example responses

> 200 Response

```json
{
  "RoomMembership": {
    "RoomId": {},
    "Member": {
      "MemberId": {},
      "MemberType": {},
      "Email": {},
      "FullName": {},
      "AccountId": {}
    },
    "Role": {},
    "InvitedBy": {},
    "UpdatedTimestamp": {}
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

<h3 id="updateroommembership-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateRoomMembershipResponse](#schemaupdateroommembershipresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRoomMembership

<a id="opIdDeleteRoomMembership"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/accounts/string/rooms/string/memberships/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /accounts/{accountId}/rooms/{roomId}/memberships/{memberId}`

Removes a member from a chat room in an Amazon Chime Enterprise account.

<h3 id="deleteroommembership-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The Amazon Chime account ID.|
|roomId|path|string|true|The room ID.|
|memberId|path|string|true|The member ID (user ID or bot ID).|
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

> 486 Response

```json
null
```

<h3 id="deleteroommembership-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSipMediaApplication

<a id="opIdGetSipMediaApplication"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/sip-media-applications/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /sip-media-applications/{sipMediaApplicationId}`

Retrieves the information for a SIP media application, including name, AWS Region, and endpoints.

<h3 id="getsipmediaapplication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sipMediaApplicationId|path|string|true|The SIP media application ID.|
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
  "SipMediaApplication": {
    "SipMediaApplicationId": {},
    "AwsRegion": {},
    "Name": {},
    "Endpoints": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {}
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

<h3 id="getsipmediaapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSipMediaApplicationResponse](#schemagetsipmediaapplicationresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateSipMediaApplication

<a id="opIdUpdateSipMediaApplication"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/sip-media-applications/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "Endpoints": [
      {
        "LambdaArn": {}
      }
    ]
  }'
```

`PUT /sip-media-applications/{sipMediaApplicationId}`

Updates the details of the specified SIP media application.

> Body parameter

```json
{
  "Name": "string",
  "Endpoints": [
    {
      "LambdaArn": {}
    }
  ]
}
```

<h3 id="updatesipmediaapplication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sipMediaApplicationId|path|string|true|The SIP media application ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|false|The new name for the specified SIP media application.|
|» Endpoints|body|[[SipMediaApplicationEndpoint](#schemasipmediaapplicationendpoint)]|false|The new set of endpoints for the specified SIP media application.|

> Example responses

> 200 Response

```json
{
  "SipMediaApplication": {
    "SipMediaApplicationId": {},
    "AwsRegion": {},
    "Name": {},
    "Endpoints": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {}
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

<h3 id="updatesipmediaapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateSipMediaApplicationResponse](#schemaupdatesipmediaapplicationresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|487|487|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteSipMediaApplication

<a id="opIdDeleteSipMediaApplication"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/sip-media-applications/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /sip-media-applications/{sipMediaApplicationId}`

Deletes a SIP media application.

<h3 id="deletesipmediaapplication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sipMediaApplicationId|path|string|true|The SIP media application ID.|
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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="deletesipmediaapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|487|487|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSipRule

<a id="opIdGetSipRule"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/sip-rules/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /sip-rules/{sipRuleId}`

Retrieves the details of a SIP rule, such as the rule ID, name, triggers, and target endpoints.

<h3 id="getsiprule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sipRuleId|path|string|true|The SIP rule ID.|
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
  "SipRule": {
    "SipRuleId": {},
    "Name": {},
    "Disabled": {},
    "TriggerType": {},
    "TriggerValue": {},
    "TargetApplications": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {}
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

<h3 id="getsiprule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSipRuleResponse](#schemagetsipruleresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateSipRule

<a id="opIdUpdateSipRule"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/sip-rules/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "Disabled": true,
    "TargetApplications": [
      {
        "SipMediaApplicationId": {},
        "Priority": {},
        "AwsRegion": {}
      }
    ]
  }'
```

`PUT /sip-rules/{sipRuleId}`

Updates the details of the specified SIP rule.

> Body parameter

```json
{
  "Name": "string",
  "Disabled": true,
  "TargetApplications": [
    {
      "SipMediaApplicationId": {},
      "Priority": {},
      "AwsRegion": {}
    }
  ]
}
```

<h3 id="updatesiprule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sipRuleId|path|string|true|The SIP rule ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|true|The new name for the specified SIP rule.|
|» Disabled|body|boolean|false|The new value specified to indicate whether the rule is disabled.|
|» TargetApplications|body|[[SipRuleTargetApplication](#schemasipruletargetapplication)]|false|The new value of the list of target applications.|

> Example responses

> 202 Response

```json
{
  "SipRule": {
    "SipRuleId": {},
    "Name": {},
    "Disabled": {},
    "TriggerType": {},
    "TriggerValue": {},
    "TargetApplications": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {}
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

<h3 id="updatesiprule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[UpdateSipRuleResponse](#schemaupdatesipruleresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|486|486|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|487|487|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|488|488|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteSipRule

<a id="opIdDeleteSipRule"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/sip-rules/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /sip-rules/{sipRuleId}`

Deletes a SIP rule. You must disable a SIP rule before you can delete it.

<h3 id="deletesiprule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sipRuleId|path|string|true|The SIP rule ID.|
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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="deletesiprule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|487|487|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetVoiceConnector

<a id="opIdGetVoiceConnector"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/voice-connectors/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /voice-connectors/{voiceConnectorId}`

Retrieves details for the specified Amazon Chime Voice Connector, such as timestamps,name, outbound host, and encryption requirements.

<h3 id="getvoiceconnector-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|voiceConnectorId|path|string|true|The Amazon Chime Voice Connector ID.|
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
  "VoiceConnector": {
    "VoiceConnectorId": {},
    "AwsRegion": {},
    "Name": {},
    "OutboundHostName": {},
    "RequireEncryption": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {},
    "VoiceConnectorArn": {}
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

<h3 id="getvoiceconnector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetVoiceConnectorResponse](#schemagetvoiceconnectorresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateVoiceConnector

<a id="opIdUpdateVoiceConnector"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/voice-connectors/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "RequireEncryption": true
  }'
```

`PUT /voice-connectors/{voiceConnectorId}`

Updates details for the specified Amazon Chime Voice Connector.

> Body parameter

```json
{
  "Name": "string",
  "RequireEncryption": true
}
```

<h3 id="updatevoiceconnector-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|voiceConnectorId|path|string|true|The Amazon Chime Voice Connector ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|true|The name of the Amazon Chime Voice Connector.|
|» RequireEncryption|body|boolean|true|When enabled, requires encryption for the Amazon Chime Voice Connector.|

> Example responses

> 200 Response

```json
{
  "VoiceConnector": {
    "VoiceConnectorId": {},
    "AwsRegion": {},
    "Name": {},
    "OutboundHostName": {},
    "RequireEncryption": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {},
    "VoiceConnectorArn": {}
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

<h3 id="updatevoiceconnector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateVoiceConnectorResponse](#schemaupdatevoiceconnectorresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteVoiceConnector

<a id="opIdDeleteVoiceConnector"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/voice-connectors/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /voice-connectors/{voiceConnectorId}`

Deletes the specified Amazon Chime Voice Connector. Any phone numbers associated with the Amazon Chime Voice Connector must be disassociated from it before it can be deleted.

<h3 id="deletevoiceconnector-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|voiceConnectorId|path|string|true|The Amazon Chime Voice Connector ID.|
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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="deletevoiceconnector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|487|487|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetVoiceConnectorEmergencyCallingConfiguration

<a id="opIdGetVoiceConnectorEmergencyCallingConfiguration"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/voice-connectors/string/emergency-calling-configuration \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /voice-connectors/{voiceConnectorId}/emergency-calling-configuration`

Gets the emergency calling configuration details for the specified Amazon Chime Voice Connector.

<h3 id="getvoiceconnectoremergencycallingconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|voiceConnectorId|path|string|true|The Amazon Chime Voice Connector ID.|
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
  "EmergencyCallingConfiguration": {
    "DNIS": {}
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

<h3 id="getvoiceconnectoremergencycallingconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetVoiceConnectorEmergencyCallingConfigurationResponse](#schemagetvoiceconnectoremergencycallingconfigurationresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutVoiceConnectorEmergencyCallingConfiguration

<a id="opIdPutVoiceConnectorEmergencyCallingConfiguration"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/voice-connectors/string/emergency-calling-configuration \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "EmergencyCallingConfiguration": {
      "DNIS": {}
    }
  }'
```

`PUT /voice-connectors/{voiceConnectorId}/emergency-calling-configuration`

Puts emergency calling configuration details to the specified Amazon Chime Voice Connector, such as emergency phone numbers and calling countries. Origination and termination settings must be enabled for the Amazon Chime Voice Connector before emergency calling can be configured.

> Body parameter

```json
{
  "EmergencyCallingConfiguration": {
    "DNIS": {}
  }
}
```

<h3 id="putvoiceconnectoremergencycallingconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|voiceConnectorId|path|string|true|The Amazon Chime Voice Connector ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» EmergencyCallingConfiguration|body|object|true|The emergency calling configuration details associated with an Amazon Chime Voice Connector.|
|» » DNIS|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "EmergencyCallingConfiguration": {
    "DNIS": {}
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

<h3 id="putvoiceconnectoremergencycallingconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutVoiceConnectorEmergencyCallingConfigurationResponse](#schemaputvoiceconnectoremergencycallingconfigurationresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteVoiceConnectorEmergencyCallingConfiguration

<a id="opIdDeleteVoiceConnectorEmergencyCallingConfiguration"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/voice-connectors/string/emergency-calling-configuration \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /voice-connectors/{voiceConnectorId}/emergency-calling-configuration`

Deletes the emergency calling configuration details from the specified Amazon Chime Voice Connector.

<h3 id="deletevoiceconnectoremergencycallingconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|voiceConnectorId|path|string|true|The Amazon Chime Voice Connector ID.|
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

> 486 Response

```json
null
```

<h3 id="deletevoiceconnectoremergencycallingconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetVoiceConnectorGroup

<a id="opIdGetVoiceConnectorGroup"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/voice-connector-groups/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /voice-connector-groups/{voiceConnectorGroupId}`

 Retrieves details for the specified Amazon Chime Voice Connector group, such as timestamps,name, and associated <code>VoiceConnectorItems</code>.

<h3 id="getvoiceconnectorgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|voiceConnectorGroupId|path|string|true|The Amazon Chime Voice Connector group ID.|
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
  "VoiceConnectorGroup": {
    "VoiceConnectorGroupId": {},
    "Name": {},
    "VoiceConnectorItems": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {},
    "VoiceConnectorGroupArn": {}
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

<h3 id="getvoiceconnectorgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetVoiceConnectorGroupResponse](#schemagetvoiceconnectorgroupresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateVoiceConnectorGroup

<a id="opIdUpdateVoiceConnectorGroup"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/voice-connector-groups/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "VoiceConnectorItems": [
      {
        "VoiceConnectorId": {},
        "Priority": {}
      }
    ]
  }'
```

`PUT /voice-connector-groups/{voiceConnectorGroupId}`

Updates details of the specified Amazon Chime Voice Connector group, such as the name and Amazon Chime Voice Connector priority ranking.

> Body parameter

```json
{
  "Name": "string",
  "VoiceConnectorItems": [
    {
      "VoiceConnectorId": {},
      "Priority": {}
    }
  ]
}
```

<h3 id="updatevoiceconnectorgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|voiceConnectorGroupId|path|string|true|The Amazon Chime Voice Connector group ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|true|The name of the Amazon Chime Voice Connector group.|
|» VoiceConnectorItems|body|[[VoiceConnectorItem](#schemavoiceconnectoritem)]|true|The <code>VoiceConnectorItems</code> to associate with the group.|

> Example responses

> 202 Response

```json
{
  "VoiceConnectorGroup": {
    "VoiceConnectorGroupId": {},
    "Name": {},
    "VoiceConnectorItems": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {},
    "VoiceConnectorGroupArn": {}
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

<h3 id="updatevoiceconnectorgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[UpdateVoiceConnectorGroupResponse](#schemaupdatevoiceconnectorgroupresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|487|487|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteVoiceConnectorGroup

<a id="opIdDeleteVoiceConnectorGroup"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/voice-connector-groups/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /voice-connector-groups/{voiceConnectorGroupId}`

Deletes the specified Amazon Chime Voice Connector group. Any <code>VoiceConnectorItems</code> and phone numbers associated with the group must be removed before it can be deleted.

<h3 id="deletevoiceconnectorgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|voiceConnectorGroupId|path|string|true|The Amazon Chime Voice Connector group ID.|
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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="deletevoiceconnectorgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|487|487|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetVoiceConnectorOrigination

<a id="opIdGetVoiceConnectorOrigination"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/voice-connectors/string/origination \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /voice-connectors/{voiceConnectorId}/origination`

Retrieves origination setting details for the specified Amazon Chime Voice Connector.

<h3 id="getvoiceconnectororigination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|voiceConnectorId|path|string|true|The Amazon Chime Voice Connector ID.|
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
  "Origination": {
    "Routes": {},
    "Disabled": {}
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

<h3 id="getvoiceconnectororigination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetVoiceConnectorOriginationResponse](#schemagetvoiceconnectororiginationresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutVoiceConnectorOrigination

<a id="opIdPutVoiceConnectorOrigination"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/voice-connectors/string/origination \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Origination": {
      "Routes": {},
      "Disabled": {}
    }
  }'
```

`PUT /voice-connectors/{voiceConnectorId}/origination`

<p>Adds origination settings for the specified Amazon Chime Voice Connector.</p> <note> <p>If emergency calling is configured for the Amazon Chime Voice Connector, it must be deleted prior to turning off origination settings.</p> </note>

> Body parameter

```json
{
  "Origination": {
    "Routes": {},
    "Disabled": {}
  }
}
```

<h3 id="putvoiceconnectororigination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|voiceConnectorId|path|string|true|The Amazon Chime Voice Connector ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Origination|body|object|true|<p>Origination settings enable your SIP hosts to receive inbound calls using your Amazon Chime Voice Connector.</p> <note> <p>The parameters listed below are not required, but you must use at least one. </p> </note>|
|» » Routes|body|object|false|none|
|» » Disabled|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "Origination": {
    "Routes": {},
    "Disabled": {}
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

<h3 id="putvoiceconnectororigination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutVoiceConnectorOriginationResponse](#schemaputvoiceconnectororiginationresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteVoiceConnectorOrigination

<a id="opIdDeleteVoiceConnectorOrigination"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/voice-connectors/string/origination \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /voice-connectors/{voiceConnectorId}/origination`

<p>Deletes the origination settings for the specified Amazon Chime Voice Connector.</p> <note> <p>If emergency calling is configured for the Amazon Chime Voice Connector, it must be deleted prior to deleting the origination settings.</p> </note>

<h3 id="deletevoiceconnectororigination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|voiceConnectorId|path|string|true|The Amazon Chime Voice Connector ID.|
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

> 486 Response

```json
null
```

<h3 id="deletevoiceconnectororigination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetVoiceConnectorProxy

<a id="opIdGetVoiceConnectorProxy"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/voice-connectors/string/programmable-numbers/proxy \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /voice-connectors/{voiceConnectorId}/programmable-numbers/proxy`

Gets the proxy configuration details for the specified Amazon Chime Voice Connector.

<h3 id="getvoiceconnectorproxy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|voiceConnectorId|path|string|true|The Amazon Chime voice connector ID.|
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
  "Proxy": {
    "DefaultSessionExpiryMinutes": {},
    "Disabled": {},
    "FallBackPhoneNumber": {},
    "PhoneNumberCountries": {}
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

<h3 id="getvoiceconnectorproxy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetVoiceConnectorProxyResponse](#schemagetvoiceconnectorproxyresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutVoiceConnectorProxy

<a id="opIdPutVoiceConnectorProxy"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/voice-connectors/string/programmable-numbers/proxy \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "DefaultSessionExpiryMinutes": 0,
    "PhoneNumberPoolCountries": [
      "string"
    ],
    "FallBackPhoneNumber": "password",
    "Disabled": true
  }'
```

`PUT /voice-connectors/{voiceConnectorId}/programmable-numbers/proxy`

Puts the specified proxy configuration to the specified Amazon Chime Voice Connector.

> Body parameter

```json
{
  "DefaultSessionExpiryMinutes": 0,
  "PhoneNumberPoolCountries": [
    "string"
  ],
  "FallBackPhoneNumber": "password",
  "Disabled": true
}
```

<h3 id="putvoiceconnectorproxy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|voiceConnectorId|path|string|true|The Amazon Chime voice connector ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» DefaultSessionExpiryMinutes|body|integer|true|The default number of minutes allowed for proxy sessions.|
|» PhoneNumberPoolCountries|body|[[Country](#schemacountry)]|true|The countries for proxy phone numbers to be selected from.|
|» FallBackPhoneNumber|body|string(password)|false|The phone number to route calls to after a proxy session expires.|
|» Disabled|body|boolean|false|When true, stops proxy sessions from being created on the specified Amazon Chime Voice Connector.|

> Example responses

> 200 Response

```json
{
  "Proxy": {
    "DefaultSessionExpiryMinutes": {},
    "Disabled": {},
    "FallBackPhoneNumber": {},
    "PhoneNumberCountries": {}
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

<h3 id="putvoiceconnectorproxy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutVoiceConnectorProxyResponse](#schemaputvoiceconnectorproxyresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|485|485|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|487|487|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteVoiceConnectorProxy

<a id="opIdDeleteVoiceConnectorProxy"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/voice-connectors/string/programmable-numbers/proxy \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /voice-connectors/{voiceConnectorId}/programmable-numbers/proxy`

Deletes the proxy configuration from the specified Amazon Chime Voice Connector.

<h3 id="deletevoiceconnectorproxy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|voiceConnectorId|path|string|true|The Amazon Chime Voice Connector ID.|
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

> 486 Response

```json
null
```

<h3 id="deletevoiceconnectorproxy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetVoiceConnectorStreamingConfiguration

<a id="opIdGetVoiceConnectorStreamingConfiguration"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/voice-connectors/string/streaming-configuration \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /voice-connectors/{voiceConnectorId}/streaming-configuration`

Retrieves the streaming configuration details for the specified Amazon Chime Voice Connector. Shows whether media streaming is enabled for sending to Amazon Kinesis. It also shows the retention period, in hours, for the Amazon Kinesis data.

<h3 id="getvoiceconnectorstreamingconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|voiceConnectorId|path|string|true|The Amazon Chime Voice Connector ID.|
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
  "StreamingConfiguration": {
    "DataRetentionInHours": {},
    "Disabled": {},
    "StreamingNotificationTargets": {}
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

<h3 id="getvoiceconnectorstreamingconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetVoiceConnectorStreamingConfigurationResponse](#schemagetvoiceconnectorstreamingconfigurationresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutVoiceConnectorStreamingConfiguration

<a id="opIdPutVoiceConnectorStreamingConfiguration"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/voice-connectors/string/streaming-configuration \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "StreamingConfiguration": {
      "DataRetentionInHours": {},
      "Disabled": {},
      "StreamingNotificationTargets": {}
    }
  }'
```

`PUT /voice-connectors/{voiceConnectorId}/streaming-configuration`

Adds a streaming configuration for the specified Amazon Chime Voice Connector. The streaming configuration specifies whether media streaming is enabled for sending to Kinesis. It also sets the retention period, in hours, for the Amazon Kinesis data.

> Body parameter

```json
{
  "StreamingConfiguration": {
    "DataRetentionInHours": {},
    "Disabled": {},
    "StreamingNotificationTargets": {}
  }
}
```

<h3 id="putvoiceconnectorstreamingconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|voiceConnectorId|path|string|true|The Amazon Chime Voice Connector ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» StreamingConfiguration|body|object|true|The streaming configuration associated with an Amazon Chime Voice Connector. Specifies whether media streaming is enabled for sending to Amazon Kinesis, and shows the retention period for the Amazon Kinesis data, in hours.|
|» » DataRetentionInHours|body|object|false|none|
|» » Disabled|body|object|false|none|
|» » StreamingNotificationTargets|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "StreamingConfiguration": {
    "DataRetentionInHours": {},
    "Disabled": {},
    "StreamingNotificationTargets": {}
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

<h3 id="putvoiceconnectorstreamingconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutVoiceConnectorStreamingConfigurationResponse](#schemaputvoiceconnectorstreamingconfigurationresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteVoiceConnectorStreamingConfiguration

<a id="opIdDeleteVoiceConnectorStreamingConfiguration"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/voice-connectors/string/streaming-configuration \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /voice-connectors/{voiceConnectorId}/streaming-configuration`

Deletes the streaming configuration for the specified Amazon Chime Voice Connector.

<h3 id="deletevoiceconnectorstreamingconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|voiceConnectorId|path|string|true|The Amazon Chime Voice Connector ID.|
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

> 486 Response

```json
null
```

<h3 id="deletevoiceconnectorstreamingconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetVoiceConnectorTermination

<a id="opIdGetVoiceConnectorTermination"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/voice-connectors/string/termination \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /voice-connectors/{voiceConnectorId}/termination`

Retrieves termination setting details for the specified Amazon Chime Voice Connector.

<h3 id="getvoiceconnectortermination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|voiceConnectorId|path|string|true|The Amazon Chime Voice Connector ID.|
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
  "Termination": {
    "CpsLimit": {},
    "DefaultPhoneNumber": {},
    "CallingRegions": {},
    "CidrAllowedList": {},
    "Disabled": {}
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

<h3 id="getvoiceconnectortermination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetVoiceConnectorTerminationResponse](#schemagetvoiceconnectorterminationresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutVoiceConnectorTermination

<a id="opIdPutVoiceConnectorTermination"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/voice-connectors/string/termination \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Termination": {
      "CpsLimit": {},
      "DefaultPhoneNumber": {},
      "CallingRegions": {},
      "CidrAllowedList": {},
      "Disabled": {}
    }
  }'
```

`PUT /voice-connectors/{voiceConnectorId}/termination`

<p>Adds termination settings for the specified Amazon Chime Voice Connector.</p> <note> <p>If emergency calling is configured for the Amazon Chime Voice Connector, it must be deleted prior to turning off termination settings.</p> </note>

> Body parameter

```json
{
  "Termination": {
    "CpsLimit": {},
    "DefaultPhoneNumber": {},
    "CallingRegions": {},
    "CidrAllowedList": {},
    "Disabled": {}
  }
}
```

<h3 id="putvoiceconnectortermination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|voiceConnectorId|path|string|true|The Amazon Chime Voice Connector ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Termination|body|object|true|Termination settings enable your SIP hosts to make outbound calls using your Amazon Chime Voice Connector.|
|» » CpsLimit|body|object|false|none|
|» » DefaultPhoneNumber|body|object|false|none|
|» » CallingRegions|body|object|false|none|
|» » CidrAllowedList|body|object|false|none|
|» » Disabled|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "Termination": {
    "CpsLimit": {},
    "DefaultPhoneNumber": {},
    "CallingRegions": {},
    "CidrAllowedList": {},
    "Disabled": {}
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

<h3 id="putvoiceconnectortermination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutVoiceConnectorTerminationResponse](#schemaputvoiceconnectorterminationresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|487|487|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteVoiceConnectorTermination

<a id="opIdDeleteVoiceConnectorTermination"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/voice-connectors/string/termination \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /voice-connectors/{voiceConnectorId}/termination`

<p>Deletes the termination settings for the specified Amazon Chime Voice Connector.</p> <note> <p>If emergency calling is configured for the Amazon Chime Voice Connector, it must be deleted prior to deleting the termination settings.</p> </note>

<h3 id="deletevoiceconnectortermination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|voiceConnectorId|path|string|true|The Amazon Chime Voice Connector ID.|
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

> 486 Response

```json
null
```

<h3 id="deletevoiceconnectortermination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteVoiceConnectorTerminationCredentials

<a id="opIdDeleteVoiceConnectorTerminationCredentials"></a>

> Code samples

```bash
curl 'https://chime.us-east-1.amazonaws.com/voice-connectors/string/termination/credentials#operation=delete?operation=delete' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Usernames": [
      "password"
    ]
  }'
```

`POST /voice-connectors/{voiceConnectorId}/termination/credentials#operation=delete`

Deletes the specified SIP credentials used by your equipment to authenticate during call termination.

> Body parameter

```json
{
  "Usernames": [
    "password"
  ]
}
```

<h3 id="deletevoiceconnectorterminationcredentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|voiceConnectorId|path|string|true|The Amazon Chime Voice Connector ID.|
|operation|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Usernames|body|[[SensitiveString](#schemasensitivestring)]|true|The RFC2617 compliant username associated with the SIP credentials, in US-ASCII format.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|operation|delete|

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

> 486 Response

```json
null
```

<h3 id="deletevoiceconnectorterminationcredentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeChannelMembershipForAppInstanceUser

<a id="opIdDescribeChannelMembershipForAppInstanceUser"></a>

> Code samples

```bash
curl 'https://chime.us-east-1.amazonaws.com/channels/string#scope=app-instance-user-membership&app-instance-user-arn?app-instance-user-arn=string&scope=app-instance-user-membership' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /channels/{channelArn}#scope=app-instance-user-membership&app-instance-user-arn`

<p> Returns the details of a channel based on the membership of the specified <code>AppInstanceUser</code>.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>

<h3 id="describechannelmembershipforappinstanceuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelArn|path|string|true|The ARN of the channel to which the user belongs.|
|app-instance-user-arn|query|string|true|The ARN of the user in a channel.|
|x-amz-chime-bearer|header|string|false|The <code>AppInstanceUserArn</code> of the user that makes the API call.|
|scope|query|string|true|none|
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
|scope|app-instance-user-membership|

> Example responses

> 200 Response

```json
{
  "ChannelMembership": {
    "ChannelSummary": {
      "Name": {},
      "ChannelArn": {},
      "Mode": {},
      "Privacy": {},
      "Metadata": {},
      "LastMessageTimestamp": {}
    },
    "AppInstanceUserMembershipSummary": {
      "Type": {},
      "ReadMarkerTimestamp": {}
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

<h3 id="describechannelmembershipforappinstanceuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeChannelMembershipForAppInstanceUserResponse](#schemadescribechannelmembershipforappinstanceuserresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|483|483|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeChannelModeratedByAppInstanceUser

<a id="opIdDescribeChannelModeratedByAppInstanceUser"></a>

> Code samples

```bash
curl 'https://chime.us-east-1.amazonaws.com/channels/string#scope=app-instance-user-moderated-channel&app-instance-user-arn?app-instance-user-arn=string&scope=app-instance-user-moderated-channel' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /channels/{channelArn}#scope=app-instance-user-moderated-channel&app-instance-user-arn`

<p>Returns the full details of a channel moderated by the specified <code>AppInstanceUser</code>.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>

<h3 id="describechannelmoderatedbyappinstanceuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelArn|path|string|true|The ARN of the moderated channel.|
|app-instance-user-arn|query|string|true|The ARN of the <code>AppInstanceUser</code> in the moderated channel.|
|x-amz-chime-bearer|header|string|false|The <code>AppInstanceUserArn</code> of the user that makes the API call.|
|scope|query|string|true|none|
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
|scope|app-instance-user-moderated-channel|

> Example responses

> 200 Response

```json
{
  "Channel": {
    "ChannelSummary": {
      "Name": {},
      "ChannelArn": {},
      "Mode": {},
      "Privacy": {},
      "Metadata": {},
      "LastMessageTimestamp": {}
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

<h3 id="describechannelmoderatedbyappinstanceuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeChannelModeratedByAppInstanceUserResponse](#schemadescribechannelmoderatedbyappinstanceuserresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|483|483|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociatePhoneNumberFromUser

<a id="opIdDisassociatePhoneNumberFromUser"></a>

> Code samples

```bash
curl 'https://chime.us-east-1.amazonaws.com/accounts/string/users/string#operation=disassociate-phone-number?operation=disassociate-phone-number' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /accounts/{accountId}/users/{userId}#operation=disassociate-phone-number`

Disassociates the primary provisioned phone number from the specified Amazon Chime user.

<h3 id="disassociatephonenumberfromuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The Amazon Chime account ID.|
|userId|path|string|true|The user ID.|
|operation|query|string|true|none|
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
|operation|disassociate-phone-number|

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

<h3 id="disassociatephonenumberfromuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociatePhoneNumberFromUserResponse](#schemadisassociatephonenumberfromuserresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociatePhoneNumbersFromVoiceConnector

<a id="opIdDisassociatePhoneNumbersFromVoiceConnector"></a>

> Code samples

```bash
curl 'https://chime.us-east-1.amazonaws.com/voice-connectors/string#operation=disassociate-phone-numbers?operation=disassociate-phone-numbers' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "E164PhoneNumbers": [
      "password"
    ]
  }'
```

`POST /voice-connectors/{voiceConnectorId}#operation=disassociate-phone-numbers`

Disassociates the specified phone numbers from the specified Amazon Chime Voice Connector.

> Body parameter

```json
{
  "E164PhoneNumbers": [
    "password"
  ]
}
```

<h3 id="disassociatephonenumbersfromvoiceconnector-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|voiceConnectorId|path|string|true|The Amazon Chime Voice Connector ID.|
|operation|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» E164PhoneNumbers|body|[[E164PhoneNumber](#schemae164phonenumber)]|true|List of phone numbers, in E.164 format.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|operation|disassociate-phone-numbers|

> Example responses

> 200 Response

```json
{
  "PhoneNumberErrors": {}
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

<h3 id="disassociatephonenumbersfromvoiceconnector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociatePhoneNumbersFromVoiceConnectorResponse](#schemadisassociatephonenumbersfromvoiceconnectorresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociatePhoneNumbersFromVoiceConnectorGroup

<a id="opIdDisassociatePhoneNumbersFromVoiceConnectorGroup"></a>

> Code samples

```bash
curl 'https://chime.us-east-1.amazonaws.com/voice-connector-groups/string#operation=disassociate-phone-numbers?operation=disassociate-phone-numbers' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "E164PhoneNumbers": [
      "password"
    ]
  }'
```

`POST /voice-connector-groups/{voiceConnectorGroupId}#operation=disassociate-phone-numbers`

Disassociates the specified phone numbers from the specified Amazon Chime Voice Connector group.

> Body parameter

```json
{
  "E164PhoneNumbers": [
    "password"
  ]
}
```

<h3 id="disassociatephonenumbersfromvoiceconnectorgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|voiceConnectorGroupId|path|string|true|The Amazon Chime Voice Connector group ID.|
|operation|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» E164PhoneNumbers|body|[[E164PhoneNumber](#schemae164phonenumber)]|true|List of phone numbers, in E.164 format.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|operation|disassociate-phone-numbers|

> Example responses

> 200 Response

```json
{
  "PhoneNumberErrors": {}
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

<h3 id="disassociatephonenumbersfromvoiceconnectorgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociatePhoneNumbersFromVoiceConnectorGroupResponse](#schemadisassociatephonenumbersfromvoiceconnectorgroupresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateSigninDelegateGroupsFromAccount

<a id="opIdDisassociateSigninDelegateGroupsFromAccount"></a>

> Code samples

```bash
curl 'https://chime.us-east-1.amazonaws.com/accounts/string#operation=disassociate-signin-delegate-groups?operation=disassociate-signin-delegate-groups' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "GroupNames": [
      "string"
    ]
  }'
```

`POST /accounts/{accountId}#operation=disassociate-signin-delegate-groups`

Disassociates the specified sign-in delegate groups from the specified Amazon Chime account.

> Body parameter

```json
{
  "GroupNames": [
    "string"
  ]
}
```

<h3 id="disassociatesignindelegategroupsfromaccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The Amazon Chime account ID.|
|operation|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» GroupNames|body|[[String](#schemastring)]|true|The sign-in delegate group names.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|operation|disassociate-signin-delegate-groups|

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

<h3 id="disassociatesignindelegategroupsfromaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateSigninDelegateGroupsFromAccountResponse](#schemadisassociatesignindelegategroupsfromaccountresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAccountSettings

<a id="opIdGetAccountSettings"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/accounts/string/settings \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /accounts/{accountId}/settings`

Retrieves account settings for the specified Amazon Chime account ID, such as remote control and dialout settings. For more information about these settings, see <a href="https://docs.aws.amazon.com/chime/latest/ag/policies.html">Use the Policies Page</a> in the <i>Amazon Chime Administration Guide</i>. 

<h3 id="getaccountsettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The Amazon Chime account ID.|
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
  "AccountSettings": {
    "DisableRemoteControl": {},
    "EnableDialOut": {}
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

<h3 id="getaccountsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAccountSettingsResponse](#schemagetaccountsettingsresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateAccountSettings

<a id="opIdUpdateAccountSettings"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/accounts/string/settings \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AccountSettings": {
      "DisableRemoteControl": {},
      "EnableDialOut": {}
    }
  }'
```

`PUT /accounts/{accountId}/settings`

Updates the settings for the specified Amazon Chime account. You can update settings for remote control of shared screens, or for the dial-out option. For more information about these settings, see <a href="https://docs.aws.amazon.com/chime/latest/ag/policies.html">Use the Policies Page</a> in the <i>Amazon Chime Administration Guide</i>.

> Body parameter

```json
{
  "AccountSettings": {
    "DisableRemoteControl": {},
    "EnableDialOut": {}
  }
}
```

<h3 id="updateaccountsettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The Amazon Chime account ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» AccountSettings|body|object|true|Settings related to the Amazon Chime account. This includes settings that start or stop remote control of shared screens, or start or stop the dial-out option in the Amazon Chime web application. For more information about these settings, see <a href="https://docs.aws.amazon.com/chime/latest/ag/policies.html">Use the Policies Page</a> in the <i>Amazon Chime Administration Guide</i>.|
|» » DisableRemoteControl|body|object|false|none|
|» » EnableDialOut|body|object|false|none|

> Example responses

> 204 Response

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

<h3 id="updateaccountsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[UpdateAccountSettingsResponse](#schemaupdateaccountsettingsresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|487|487|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAppInstanceRetentionSettings

<a id="opIdGetAppInstanceRetentionSettings"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/app-instances/string/retention-settings \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /app-instances/{appInstanceArn}/retention-settings`

Gets the retention settings for an <code>AppInstance</code>.

<h3 id="getappinstanceretentionsettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appInstanceArn|path|string|true|The ARN of the <code>AppInstance</code>.|
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
  "AppInstanceRetentionSettings": {
    "ChannelRetentionSettings": {
      "RetentionDays": {}
    }
  },
  "InitiateDeletionTimestamp": {}
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

<h3 id="getappinstanceretentionsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAppInstanceRetentionSettingsResponse](#schemagetappinstanceretentionsettingsresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutAppInstanceRetentionSettings

<a id="opIdPutAppInstanceRetentionSettings"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/app-instances/string/retention-settings \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AppInstanceRetentionSettings": {
      "ChannelRetentionSettings": {
        "RetentionDays": {}
      }
    }
  }'
```

`PUT /app-instances/{appInstanceArn}/retention-settings`

Sets the amount of time in days that a given <code>AppInstance</code> retains data.

> Body parameter

```json
{
  "AppInstanceRetentionSettings": {
    "ChannelRetentionSettings": {
      "RetentionDays": {}
    }
  }
}
```

<h3 id="putappinstanceretentionsettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appInstanceArn|path|string|true|The ARN of the <code>AppInstance</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» AppInstanceRetentionSettings|body|object|true|The details of the data-retention settings for an <code>AppInstance</code>.|
|» » ChannelRetentionSettings|body|object|false|none|
|» » » RetentionDays|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "AppInstanceRetentionSettings": {
    "ChannelRetentionSettings": {
      "RetentionDays": {}
    }
  },
  "InitiateDeletionTimestamp": {}
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

<h3 id="putappinstanceretentionsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutAppInstanceRetentionSettingsResponse](#schemaputappinstanceretentionsettingsresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|487|487|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBot

<a id="opIdGetBot"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/accounts/string/bots/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /accounts/{accountId}/bots/{botId}`

Retrieves details for the specified bot, such as bot email address, bot type, status, and display name.

<h3 id="getbot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The Amazon Chime account ID.|
|botId|path|string|true|The bot ID.|
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
  "Bot": {
    "BotId": {},
    "UserId": {},
    "DisplayName": {},
    "BotType": {},
    "Disabled": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {},
    "BotEmail": {},
    "SecurityToken": {}
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

<h3 id="getbot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBotResponse](#schemagetbotresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|486|486|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateBot

<a id="opIdUpdateBot"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/accounts/string/bots/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Disabled": true
  }'
```

`POST /accounts/{accountId}/bots/{botId}`

Updates the status of the specified bot, such as starting or stopping the bot from running in your Amazon Chime Enterprise account.

> Body parameter

```json
{
  "Disabled": true
}
```

<h3 id="updatebot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The Amazon Chime account ID.|
|botId|path|string|true|The bot ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Disabled|body|boolean|false|When true, stops the specified bot from running in your account.|

> Example responses

> 200 Response

```json
{
  "Bot": {
    "BotId": {},
    "UserId": {},
    "DisplayName": {},
    "BotType": {},
    "Disabled": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {},
    "BotEmail": {},
    "SecurityToken": {}
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

<h3 id="updatebot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateBotResponse](#schemaupdatebotresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|485|485|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|486|486|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetGlobalSettings

<a id="opIdGetGlobalSettings"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/settings \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /settings`

Retrieves global settings for the administrator's AWS account, such as Amazon Chime Business Calling and Amazon Chime Voice Connector settings.

<h3 id="getglobalsettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
  "BusinessCalling": {
    "CdrBucket": {}
  },
  "VoiceConnector": {
    "CdrBucket": {}
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

<h3 id="getglobalsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetGlobalSettingsResponse](#schemagetglobalsettingsresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateGlobalSettings

<a id="opIdUpdateGlobalSettings"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/settings \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "BusinessCalling": {
      "CdrBucket": {}
    },
    "VoiceConnector": {
      "CdrBucket": {}
    }
  }'
```

`PUT /settings`

Updates global settings for the administrator's AWS account, such as Amazon Chime Business Calling and Amazon Chime Voice Connector settings.

> Body parameter

```json
{
  "BusinessCalling": {
    "CdrBucket": {}
  },
  "VoiceConnector": {
    "CdrBucket": {}
  }
}
```

<h3 id="updateglobalsettings-parameters">Parameters</h3>

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
|» BusinessCalling|body|object|false|The Amazon Chime Business Calling settings for the administrator's AWS account. Includes any Amazon S3 buckets designated for storing call detail records.|
|» » CdrBucket|body|object|false|none|
|» VoiceConnector|body|object|false|The Amazon Chime Voice Connector settings. Includes any Amazon S3 buckets designated for storing call detail records.|
|» » CdrBucket|body|object|false|none|

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

<h3 id="updateglobalsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetMessagingSessionEndpoint

<a id="opIdGetMessagingSessionEndpoint"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/endpoints/messaging-session \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /endpoints/messaging-session`

The details of the endpoint for the messaging session.

<h3 id="getmessagingsessionendpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
  "Endpoint": {
    "Url": {}
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

<h3 id="getmessagingsessionendpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMessagingSessionEndpointResponse](#schemagetmessagingsessionendpointresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetPhoneNumberOrder

<a id="opIdGetPhoneNumberOrder"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/phone-number-orders/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /phone-number-orders/{phoneNumberOrderId}`

Retrieves details for the specified phone number order, such as the order creation timestamp, phone numbers in E.164 format, product type, and order status.

<h3 id="getphonenumberorder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|phoneNumberOrderId|path|string|true|The ID for the phone number order.|
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
  "PhoneNumberOrder": {
    "PhoneNumberOrderId": {},
    "ProductType": {},
    "Status": {},
    "OrderedPhoneNumbers": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {}
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

<h3 id="getphonenumberorder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetPhoneNumberOrderResponse](#schemagetphonenumberorderresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetPhoneNumberSettings

<a id="opIdGetPhoneNumberSettings"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/settings/phone-number \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /settings/phone-number`

Retrieves the phone number settings for the administrator's AWS account, such as the default outbound calling name.

<h3 id="getphonenumbersettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
  "CallingName": {},
  "CallingNameUpdatedTimestamp": {}
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

<h3 id="getphonenumbersettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetPhoneNumberSettingsResponse](#schemagetphonenumbersettingsresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdatePhoneNumberSettings

<a id="opIdUpdatePhoneNumberSettings"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/settings/phone-number \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "CallingName": "password"
  }'
```

`PUT /settings/phone-number`

Updates the phone number settings for the administrator's AWS account, such as the default outbound calling name. You can update the default outbound calling name once every seven days. Outbound calling names can take up to 72 hours to update.

> Body parameter

```json
{
  "CallingName": "password"
}
```

<h3 id="updatephonenumbersettings-parameters">Parameters</h3>

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
|» CallingName|body|string(password)|true|The default outbound calling name for the account.|

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

<h3 id="updatephonenumbersettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRetentionSettings

<a id="opIdGetRetentionSettings"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/accounts/string/retention-settings \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /accounts/{accountId}/retention-settings`

 Gets the retention settings for the specified Amazon Chime Enterprise account. For more information about retention settings, see <a href="https://docs.aws.amazon.com/chime/latest/ag/chat-retention.html">Managing Chat Retention Policies</a> in the <i>Amazon Chime Administration Guide</i>. 

<h3 id="getretentionsettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The Amazon Chime account ID.|
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
  "RetentionSettings": {
    "RoomRetentionSettings": {
      "RetentionDays": {}
    },
    "ConversationRetentionSettings": {
      "RetentionDays": {}
    }
  },
  "InitiateDeletionTimestamp": {}
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

<h3 id="getretentionsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRetentionSettingsResponse](#schemagetretentionsettingsresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutRetentionSettings

<a id="opIdPutRetentionSettings"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/accounts/string/retention-settings \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "RetentionSettings": {
      "RoomRetentionSettings": {
        "RetentionDays": {}
      },
      "ConversationRetentionSettings": {
        "RetentionDays": {}
      }
    }
  }'
```

`PUT /accounts/{accountId}/retention-settings`

<p> Puts retention settings for the specified Amazon Chime Enterprise account. We recommend using AWS CloudTrail to monitor usage of this API for your account. For more information, see <a href="https://docs.aws.amazon.com/chime/latest/ag/cloudtrail.html">Logging Amazon Chime API Calls with AWS CloudTrail</a> in the <i>Amazon Chime Administration Guide</i>.</p> <p> To turn off existing retention settings, remove the number of days from the corresponding <b>RetentionDays</b> field in the <b>RetentionSettings</b> object. For more information about retention settings, see <a href="https://docs.aws.amazon.com/chime/latest/ag/chat-retention.html">Managing Chat Retention Policies</a> in the <i>Amazon Chime Administration Guide</i>.</p>

> Body parameter

```json
{
  "RetentionSettings": {
    "RoomRetentionSettings": {
      "RetentionDays": {}
    },
    "ConversationRetentionSettings": {
      "RetentionDays": {}
    }
  }
}
```

<h3 id="putretentionsettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The Amazon Chime account ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» RetentionSettings|body|object|true|The retention settings for an Amazon Chime Enterprise account that determine how long to retain items such as chat-room messages and chat-conversation messages.|
|» » RoomRetentionSettings|body|object|false|none|
|» » » RetentionDays|body|object|false|none|
|» » ConversationRetentionSettings|body|object|false|none|
|» » » RetentionDays|body|object|false|none|

> Example responses

> 204 Response

```json
{
  "RetentionSettings": {
    "RoomRetentionSettings": {
      "RetentionDays": {}
    },
    "ConversationRetentionSettings": {
      "RetentionDays": {}
    }
  },
  "InitiateDeletionTimestamp": {}
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

<h3 id="putretentionsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[PutRetentionSettingsResponse](#schemaputretentionsettingsresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|487|487|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSipMediaApplicationLoggingConfiguration

<a id="opIdGetSipMediaApplicationLoggingConfiguration"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/sip-media-applications/string/logging-configuration \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /sip-media-applications/{sipMediaApplicationId}/logging-configuration`

Returns the logging configuration for the specified SIP media application.

<h3 id="getsipmediaapplicationloggingconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sipMediaApplicationId|path|string|true|The SIP media application ID.|
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
  "SipMediaApplicationLoggingConfiguration": {
    "EnableSipMediaApplicationMessageLogs": {}
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

<h3 id="getsipmediaapplicationloggingconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSipMediaApplicationLoggingConfigurationResponse](#schemagetsipmediaapplicationloggingconfigurationresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutSipMediaApplicationLoggingConfiguration

<a id="opIdPutSipMediaApplicationLoggingConfiguration"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/sip-media-applications/string/logging-configuration \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "SipMediaApplicationLoggingConfiguration": {
      "EnableSipMediaApplicationMessageLogs": {}
    }
  }'
```

`PUT /sip-media-applications/{sipMediaApplicationId}/logging-configuration`

Updates the logging configuration for the specified SIP media application.

> Body parameter

```json
{
  "SipMediaApplicationLoggingConfiguration": {
    "EnableSipMediaApplicationMessageLogs": {}
  }
}
```

<h3 id="putsipmediaapplicationloggingconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sipMediaApplicationId|path|string|true|The SIP media application ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» SipMediaApplicationLoggingConfiguration|body|object|false|Logging configuration of the SIP media application.|
|» » EnableSipMediaApplicationMessageLogs|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "SipMediaApplicationLoggingConfiguration": {
    "EnableSipMediaApplicationMessageLogs": {}
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

<h3 id="putsipmediaapplicationloggingconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutSipMediaApplicationLoggingConfigurationResponse](#schemaputsipmediaapplicationloggingconfigurationresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetUser

<a id="opIdGetUser"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/accounts/string/users/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /accounts/{accountId}/users/{userId}`

<p>Retrieves details for the specified user ID, such as primary email address, license type,and personal meeting PIN.</p> <p> To retrieve user details with an email address instead of a user ID, use the <a>ListUsers</a> action, and then filter by email address. </p>

<h3 id="getuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The Amazon Chime account ID.|
|userId|path|string|true|The user ID.|
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
  "User": {
    "UserId": {},
    "AccountId": {},
    "PrimaryEmail": {},
    "PrimaryProvisionedNumber": {},
    "DisplayName": {},
    "LicenseType": {},
    "UserType": {},
    "UserRegistrationStatus": {},
    "UserInvitationStatus": {},
    "RegisteredOn": {},
    "InvitedOn": {},
    "AlexaForBusinessMetadata": {
      "IsAlexaForBusinessEnabled": {},
      "AlexaForBusinessRoomArn": {}
    },
    "PersonalPIN": {}
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

<h3 id="getuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetUserResponse](#schemagetuserresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateUser

<a id="opIdUpdateUser"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/accounts/string/users/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "LicenseType": "Basic",
    "UserType": "PrivateUser",
    "AlexaForBusinessMetadata": {
      "IsAlexaForBusinessEnabled": {},
      "AlexaForBusinessRoomArn": {}
    }
  }'
```

`POST /accounts/{accountId}/users/{userId}`

Updates user details for a specified user ID. Currently, only <code>LicenseType</code> updates are supported for this action.

> Body parameter

```json
{
  "LicenseType": "Basic",
  "UserType": "PrivateUser",
  "AlexaForBusinessMetadata": {
    "IsAlexaForBusinessEnabled": {},
    "AlexaForBusinessRoomArn": {}
  }
}
```

<h3 id="updateuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The Amazon Chime account ID.|
|userId|path|string|true|The user ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» LicenseType|body|string|false|The user license type to update. This must be a supported license type for the Amazon Chime account that the user belongs to.|
|» UserType|body|string|false|The user type.|
|» AlexaForBusinessMetadata|body|object|false|The Alexa for Business metadata associated with an Amazon Chime user, used to integrate Alexa for Business with a device.|
|» » IsAlexaForBusinessEnabled|body|object|false|none|
|» » AlexaForBusinessRoomArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» LicenseType|Basic|
|» LicenseType|Plus|
|» LicenseType|Pro|
|» LicenseType|ProTrial|
|» UserType|PrivateUser|
|» UserType|SharedDevice|

> Example responses

> 200 Response

```json
{
  "User": {
    "UserId": {},
    "AccountId": {},
    "PrimaryEmail": {},
    "PrimaryProvisionedNumber": {},
    "DisplayName": {},
    "LicenseType": {},
    "UserType": {},
    "UserRegistrationStatus": {},
    "UserInvitationStatus": {},
    "RegisteredOn": {},
    "InvitedOn": {},
    "AlexaForBusinessMetadata": {
      "IsAlexaForBusinessEnabled": {},
      "AlexaForBusinessRoomArn": {}
    },
    "PersonalPIN": {}
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

<h3 id="updateuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateUserResponse](#schemaupdateuserresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetUserSettings

<a id="opIdGetUserSettings"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/accounts/string/users/string/settings \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /accounts/{accountId}/users/{userId}/settings`

Retrieves settings for the specified user ID, such as any associated phone number settings.

<h3 id="getusersettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The Amazon Chime account ID.|
|userId|path|string|true|The user ID.|
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
  "UserSettings": {
    "Telephony": {
      "InboundCalling": {},
      "OutboundCalling": {},
      "SMS": {}
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

<h3 id="getusersettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetUserSettingsResponse](#schemagetusersettingsresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateUserSettings

<a id="opIdUpdateUserSettings"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/accounts/string/users/string/settings \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "UserSettings": {
      "Telephony": {
        "InboundCalling": {},
        "OutboundCalling": {},
        "SMS": {}
      }
    }
  }'
```

`PUT /accounts/{accountId}/users/{userId}/settings`

Updates the settings for the specified user, such as phone number settings.

> Body parameter

```json
{
  "UserSettings": {
    "Telephony": {
      "InboundCalling": {},
      "OutboundCalling": {},
      "SMS": {}
    }
  }
}
```

<h3 id="updateusersettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The Amazon Chime account ID.|
|userId|path|string|true|The user ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» UserSettings|body|object|true|Settings associated with an Amazon Chime user, including inbound and outbound calling and text messaging.|
|» » Telephony|body|object|false|none|
|» » » InboundCalling|body|object|true|none|
|» » » OutboundCalling|body|object|true|none|
|» » » SMS|body|object|true|none|

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

> 486 Response

```json
null
```

<h3 id="updateusersettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetVoiceConnectorLoggingConfiguration

<a id="opIdGetVoiceConnectorLoggingConfiguration"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/voice-connectors/string/logging-configuration \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /voice-connectors/{voiceConnectorId}/logging-configuration`

Retrieves the logging configuration details for the specified Amazon Chime Voice Connector. Shows whether SIP message logs are enabled for sending to Amazon CloudWatch Logs.

<h3 id="getvoiceconnectorloggingconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|voiceConnectorId|path|string|true|The Amazon Chime Voice Connector ID.|
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
  "LoggingConfiguration": {
    "EnableSIPLogs": {},
    "EnableMediaMetricLogs": {}
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

<h3 id="getvoiceconnectorloggingconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetVoiceConnectorLoggingConfigurationResponse](#schemagetvoiceconnectorloggingconfigurationresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutVoiceConnectorLoggingConfiguration

<a id="opIdPutVoiceConnectorLoggingConfiguration"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/voice-connectors/string/logging-configuration \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "LoggingConfiguration": {
      "EnableSIPLogs": {},
      "EnableMediaMetricLogs": {}
    }
  }'
```

`PUT /voice-connectors/{voiceConnectorId}/logging-configuration`

Adds a logging configuration for the specified Amazon Chime Voice Connector. The logging configuration specifies whether SIP message logs are enabled for sending to Amazon CloudWatch Logs.

> Body parameter

```json
{
  "LoggingConfiguration": {
    "EnableSIPLogs": {},
    "EnableMediaMetricLogs": {}
  }
}
```

<h3 id="putvoiceconnectorloggingconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|voiceConnectorId|path|string|true|The Amazon Chime Voice Connector ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» LoggingConfiguration|body|object|true|The logging configuration associated with an Amazon Chime Voice Connector. Specifies whether SIP message logs are enabled for sending to Amazon CloudWatch Logs.|
|» » EnableSIPLogs|body|object|false|none|
|» » EnableMediaMetricLogs|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "LoggingConfiguration": {
    "EnableSIPLogs": {},
    "EnableMediaMetricLogs": {}
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

<h3 id="putvoiceconnectorloggingconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutVoiceConnectorLoggingConfigurationResponse](#schemaputvoiceconnectorloggingconfigurationresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetVoiceConnectorTerminationHealth

<a id="opIdGetVoiceConnectorTerminationHealth"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/voice-connectors/string/termination/health \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /voice-connectors/{voiceConnectorId}/termination/health`

Retrieves information about the last time a SIP <code>OPTIONS</code> ping was received from your SIP infrastructure for the specified Amazon Chime Voice Connector.

<h3 id="getvoiceconnectorterminationhealth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|voiceConnectorId|path|string|true|The Amazon Chime Voice Connector ID.|
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
  "TerminationHealth": {
    "Timestamp": {},
    "Source": {}
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

<h3 id="getvoiceconnectorterminationhealth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetVoiceConnectorTerminationHealthResponse](#schemagetvoiceconnectorterminationhealthresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## InviteUsers

<a id="opIdInviteUsers"></a>

> Code samples

```bash
curl 'https://chime.us-east-1.amazonaws.com/accounts/string/users#operation=add?operation=add' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "UserEmailList": [
      "password"
    ],
    "UserType": "PrivateUser"
  }'
```

`POST /accounts/{accountId}/users#operation=add`

Sends email to a maximum of 50 users, inviting them to the specified Amazon Chime <code>Team</code> account. Only <code>Team</code> account types are currently supported for this action.

> Body parameter

```json
{
  "UserEmailList": [
    "password"
  ],
  "UserType": "PrivateUser"
}
```

<h3 id="inviteusers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The Amazon Chime account ID.|
|operation|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» UserEmailList|body|[[EmailAddress](#schemaemailaddress)]|true|The user email addresses to which to send the email invitation.|
|» UserType|body|string|false|The user type.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|operation|add|
|» UserType|PrivateUser|
|» UserType|SharedDevice|

> Example responses

> 201 Response

```json
{
  "Invites": {}
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

<h3 id="inviteusers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[InviteUsersResponse](#schemainviteusersresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAppInstanceUsers

<a id="opIdListAppInstanceUsers"></a>

> Code samples

```bash
curl 'https://chime.us-east-1.amazonaws.com/app-instance-users#app-instance-arn?app-instance-arn=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /app-instance-users#app-instance-arn`

List all <code>AppInstanceUsers</code> created under a single <code>AppInstance</code>. 

<h3 id="listappinstanceusers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app-instance-arn|query|string|true|The ARN of the <code>AppInstance</code>.|
|max-results|query|integer|false|The maximum number of requests that you want returned.|
|next-token|query|string(password)|false|The token passed by previous API calls until all requested users are returned.|
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
  "AppInstanceArn": {},
  "AppInstanceUsers": {},
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

<h3 id="listappinstanceusers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAppInstanceUsersResponse](#schemalistappinstanceusersresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|483|483|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAttendeeTags

<a id="opIdListAttendeeTags"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/meetings/string/attendees/string/tags \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /meetings/{meetingId}/attendees/{attendeeId}/tags`

Lists the tags applied to an Amazon Chime SDK attendee resource.

<h3 id="listattendeetags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|meetingId|path|string|true|The Amazon Chime SDK meeting ID.|
|attendeeId|path|string|true|The Amazon Chime SDK attendee ID.|
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

<h3 id="listattendeetags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAttendeeTagsResponse](#schemalistattendeetagsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|484|484|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListChannelMembershipsForAppInstanceUser

<a id="opIdListChannelMembershipsForAppInstanceUser"></a>

> Code samples

```bash
curl 'https://chime.us-east-1.amazonaws.com/channels#scope=app-instance-user-memberships?scope=app-instance-user-memberships' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /channels#scope=app-instance-user-memberships`

<p> Lists all channels that a particular <code>AppInstanceUser</code> is a part of. Only an <code>AppInstanceAdmin</code> can call the API with a user ARN that is not their own. </p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>

<h3 id="listchannelmembershipsforappinstanceuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app-instance-user-arn|query|string|false|The ARN of the <code>AppInstanceUser</code>s|
|max-results|query|integer|false|The maximum number of users that you want returned.|
|next-token|query|string(password)|false|The token returned from previous API requests until the number of channel memberships is reached.|
|x-amz-chime-bearer|header|string|false|The <code>AppInstanceUserArn</code> of the user that makes the API call.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|scope|query|string|true|none|
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
|scope|app-instance-user-memberships|

> Example responses

> 200 Response

```json
{
  "ChannelMemberships": {},
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

<h3 id="listchannelmembershipsforappinstanceuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListChannelMembershipsForAppInstanceUserResponse](#schemalistchannelmembershipsforappinstanceuserresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|483|483|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListChannelMessages

<a id="opIdListChannelMessages"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/channels/string/messages \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /channels/{channelArn}/messages`

<p>List all the messages in a channel. Returns a paginated list of <code>ChannelMessages</code>. By default, sorted by creation timestamp in descending order.</p> <note> <p>Redacted messages appear in the results as empty, since they are only redacted, not deleted. Deleted messages do not appear in the results. This action always returns the latest version of an edited message.</p> <p>Also, the x-amz-chime-bearer request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>

<h3 id="listchannelmessages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelArn|path|string|true|The ARN of the channel.|
|sort-order|query|string|false|The order in which you want messages sorted. Default is Descending, based on time created.|
|not-before|query|string(date-time)|false|The initial or starting time stamp for your requested messages.|
|not-after|query|string(date-time)|false|The final or ending time stamp for your requested messages.|
|max-results|query|integer|false|The maximum number of messages that you want returned.|
|next-token|query|string(password)|false|The token passed by previous API calls until all requested messages are returned.|
|x-amz-chime-bearer|header|string|false|The <code>AppInstanceUserArn</code> of the user that makes the API call.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
|sort-order|ASCENDING|
|sort-order|DESCENDING|

> Example responses

> 200 Response

```json
{
  "ChannelArn": {},
  "NextToken": {},
  "ChannelMessages": {}
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

<h3 id="listchannelmessages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListChannelMessagesResponse](#schemalistchannelmessagesresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|483|483|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SendChannelMessage

<a id="opIdSendChannelMessage"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/channels/string/messages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Content": "password",
    "Type": "STANDARD",
    "Persistence": "PERSISTENT",
    "Metadata": "password",
    "ClientRequestToken": "password"
  }'
```

`POST /channels/{channelArn}/messages`

<p>Sends a message to a particular channel that the member is a part of.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> <p>Also, <code>STANDARD</code> messages can contain 4KB of data and the 1KB of metadata. <code>CONTROL</code> messages can contain 30 bytes of data and no metadata.</p> </note>

> Body parameter

```json
{
  "Content": "password",
  "Type": "STANDARD",
  "Persistence": "PERSISTENT",
  "Metadata": "password",
  "ClientRequestToken": "password"
}
```

<h3 id="sendchannelmessage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelArn|path|string|true|The ARN of the channel.|
|x-amz-chime-bearer|header|string|false|The <code>AppInstanceUserArn</code> of the user that makes the API call.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Content|body|string(password)|true|The content of the message.|
|» Type|body|string|true|The type of message, <code>STANDARD</code> or <code>CONTROL</code>.|
|» Persistence|body|string|true|Boolean that controls whether the message is persisted on the back end. Required.|
|» Metadata|body|string(password)|false|The optional metadata for each message.|
|» ClientRequestToken|body|string(password)|true|The <code>Idempotency</code> token for each client request.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Type|STANDARD|
|» Type|CONTROL|
|» Persistence|PERSISTENT|
|» Persistence|NON_PERSISTENT|

> Example responses

> 201 Response

```json
{
  "ChannelArn": {},
  "MessageId": {}
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

<h3 id="sendchannelmessage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[SendChannelMessageResponse](#schemasendchannelmessageresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListChannels

<a id="opIdListChannels"></a>

> Code samples

```bash
curl 'https://chime.us-east-1.amazonaws.com/channels#app-instance-arn?app-instance-arn=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /channels#app-instance-arn`

<p>Lists all Channels created under a single Chime App as a paginated list. You can specify filters to narrow results.</p> <p class="title"> <b>Functionality &amp; restrictions</b> </p> <ul> <li> <p>Use privacy = <code>PUBLIC</code> to retrieve all public channels in the account.</p> </li> <li> <p>Only an <code>AppInstanceAdmin</code> can set privacy = <code>PRIVATE</code> to list the private channels in an account.</p> </li> </ul> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>

<h3 id="listchannels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app-instance-arn|query|string|true|The ARN of the <code>AppInstance</code>.|
|privacy|query|string|false|The privacy setting. <code>PUBLIC</code> retrieves all the public channels. <code>PRIVATE</code> retrieves private channels. Only an <code>AppInstanceAdmin</code> can retrieve private channels. |
|max-results|query|integer|false|The maximum number of channels that you want to return.|
|next-token|query|string(password)|false|The token passed by previous API calls until all requested channels are returned.|
|x-amz-chime-bearer|header|string|false|The <code>AppInstanceUserArn</code> of the user that makes the API call.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
|privacy|PUBLIC|
|privacy|PRIVATE|

> Example responses

> 200 Response

```json
{
  "Channels": {},
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

<h3 id="listchannels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListChannelsResponse](#schemalistchannelsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|483|483|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListChannelsModeratedByAppInstanceUser

<a id="opIdListChannelsModeratedByAppInstanceUser"></a>

> Code samples

```bash
curl 'https://chime.us-east-1.amazonaws.com/channels#scope=app-instance-user-moderated-channels?scope=app-instance-user-moderated-channels' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /channels#scope=app-instance-user-moderated-channels`

<p>A list of the channels moderated by an <code>AppInstanceUser</code>.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>

<h3 id="listchannelsmoderatedbyappinstanceuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app-instance-user-arn|query|string|false|The ARN of the user in the moderated channel.|
|max-results|query|integer|false|The maximum number of channels in the request.|
|next-token|query|string(password)|false|The token returned from previous API requests until the number of channels moderated by the user is reached.|
|x-amz-chime-bearer|header|string|false|The <code>AppInstanceUserArn</code> of the user that makes the API call.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|scope|query|string|true|none|
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
|scope|app-instance-user-moderated-channels|

> Example responses

> 200 Response

```json
{
  "Channels": {},
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

<h3 id="listchannelsmoderatedbyappinstanceuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListChannelsModeratedByAppInstanceUserResponse](#schemalistchannelsmoderatedbyappinstanceuserresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|483|483|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListMeetingTags

<a id="opIdListMeetingTags"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/meetings/string/tags \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /meetings/{meetingId}/tags`

Lists the tags applied to an Amazon Chime SDK meeting resource.

<h3 id="listmeetingtags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|meetingId|path|string|true|The Amazon Chime SDK meeting ID.|
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

<h3 id="listmeetingtags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListMeetingTagsResponse](#schemalistmeetingtagsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|484|484|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPhoneNumbers

<a id="opIdListPhoneNumbers"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/phone-numbers \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /phone-numbers`

Lists the phone numbers for the specified Amazon Chime account, Amazon Chime user, Amazon Chime Voice Connector, or Amazon Chime Voice Connector group.

<h3 id="listphonenumbers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|status|query|string|false|The phone number status.|
|product-type|query|string|false|The phone number product type.|
|filter-name|query|string|false|The filter to use to limit the number of results.|
|filter-value|query|string|false|The value to use for the filter.|
|max-results|query|integer|false|The maximum number of results to return in a single call.|
|next-token|query|string|false|The token to use to retrieve the next page of results.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
|status|AcquireInProgress|
|status|AcquireFailed|
|status|Unassigned|
|status|Assigned|
|status|ReleaseInProgress|
|status|DeleteInProgress|
|status|ReleaseFailed|
|status|DeleteFailed|
|product-type|BusinessCalling|
|product-type|VoiceConnector|
|product-type|SipMediaApplicationDialIn|
|filter-name|AccountId|
|filter-name|UserId|
|filter-name|VoiceConnectorId|
|filter-name|VoiceConnectorGroupId|
|filter-name|SipRuleId|

> Example responses

> 200 Response

```json
{
  "PhoneNumbers": {},
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

> 486 Response

```json
null
```

<h3 id="listphonenumbers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPhoneNumbersResponse](#schemalistphonenumbersresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSupportedPhoneNumberCountries

<a id="opIdListSupportedPhoneNumberCountries"></a>

> Code samples

```bash
curl 'https://chime.us-east-1.amazonaws.com/phone-number-countries#product-type?product-type=BusinessCalling' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /phone-number-countries#product-type`

Lists supported phone number countries.

<h3 id="listsupportedphonenumbercountries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product-type|query|string|true|The phone number product type.|
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
|product-type|BusinessCalling|
|product-type|VoiceConnector|
|product-type|SipMediaApplicationDialIn|

> Example responses

> 200 Response

```json
{
  "PhoneNumberCountries": {}
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

<h3 id="listsupportedphonenumbercountries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSupportedPhoneNumberCountriesResponse](#schemalistsupportedphonenumbercountriesresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://chime.us-east-1.amazonaws.com/tags#arn?arn=password' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags#arn`

Lists the tags applied to an Amazon Chime SDK meeting resource.

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|arn|query|string(password)|true|The resource ARN.|
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
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListVoiceConnectorTerminationCredentials

<a id="opIdListVoiceConnectorTerminationCredentials"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/voice-connectors/string/termination/credentials \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /voice-connectors/{voiceConnectorId}/termination/credentials`

Lists the SIP credentials for the specified Amazon Chime Voice Connector.

<h3 id="listvoiceconnectorterminationcredentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|voiceConnectorId|path|string|true|The Amazon Chime Voice Connector ID.|
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
  "Usernames": {}
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

<h3 id="listvoiceconnectorterminationcredentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListVoiceConnectorTerminationCredentialsResponse](#schemalistvoiceconnectorterminationcredentialsresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## LogoutUser

<a id="opIdLogoutUser"></a>

> Code samples

```bash
curl 'https://chime.us-east-1.amazonaws.com/accounts/string/users/string#operation=logout?operation=logout' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /accounts/{accountId}/users/{userId}#operation=logout`

Logs out the specified user from all of the devices they are currently logged into.

<h3 id="logoutuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The Amazon Chime account ID.|
|userId|path|string|true|The user ID.|
|operation|query|string|true|none|
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
|operation|logout|

> Example responses

> 204 Response

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

<h3 id="logoutuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[LogoutUserResponse](#schemalogoutuserresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutVoiceConnectorTerminationCredentials

<a id="opIdPutVoiceConnectorTerminationCredentials"></a>

> Code samples

```bash
curl 'https://chime.us-east-1.amazonaws.com/voice-connectors/string/termination/credentials#operation=put?operation=put' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Credentials": [
      {
        "Username": {},
        "Password": {}
      }
    ]
  }'
```

`POST /voice-connectors/{voiceConnectorId}/termination/credentials#operation=put`

Adds termination SIP credentials for the specified Amazon Chime Voice Connector.

> Body parameter

```json
{
  "Credentials": [
    {
      "Username": {},
      "Password": {}
    }
  ]
}
```

<h3 id="putvoiceconnectorterminationcredentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|voiceConnectorId|path|string|true|The Amazon Chime Voice Connector ID.|
|operation|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Credentials|body|[[Credential](#schemacredential)]|false|The termination SIP credentials.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|operation|put|

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

> 486 Response

```json
null
```

<h3 id="putvoiceconnectorterminationcredentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RedactChannelMessage

<a id="opIdRedactChannelMessage"></a>

> Code samples

```bash
curl 'https://chime.us-east-1.amazonaws.com/channels/string/messages/string#operation=redact?operation=redact' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /channels/{channelArn}/messages/{messageId}#operation=redact`

<p>Redacts message content, but not metadata. The message exists in the back end, but the action returns null content, and the state shows as redacted.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>

<h3 id="redactchannelmessage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelArn|path|string|true|The ARN of the channel containing the messages that you want to redact.|
|messageId|path|string|true|The ID of the message being redacted.|
|x-amz-chime-bearer|header|string|false|The <code>AppInstanceUserArn</code> of the user that makes the API call.|
|operation|query|string|true|none|
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
|operation|redact|

> Example responses

> 200 Response

```json
{
  "ChannelArn": {},
  "MessageId": {}
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

<h3 id="redactchannelmessage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RedactChannelMessageResponse](#schemaredactchannelmessageresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|483|483|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RedactConversationMessage

<a id="opIdRedactConversationMessage"></a>

> Code samples

```bash
curl 'https://chime.us-east-1.amazonaws.com/accounts/string/conversations/string/messages/string#operation=redact?operation=redact' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /accounts/{accountId}/conversations/{conversationId}/messages/{messageId}#operation=redact`

Redacts the specified message from the specified Amazon Chime conversation.

<h3 id="redactconversationmessage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The Amazon Chime account ID.|
|conversationId|path|string|true|The conversation ID.|
|messageId|path|string|true|The message ID.|
|operation|query|string|true|none|
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
|operation|redact|

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

<h3 id="redactconversationmessage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RedactConversationMessageResponse](#schemaredactconversationmessageresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|483|483|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|484|484|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RedactRoomMessage

<a id="opIdRedactRoomMessage"></a>

> Code samples

```bash
curl 'https://chime.us-east-1.amazonaws.com/accounts/string/rooms/string/messages/string#operation=redact?operation=redact' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /accounts/{accountId}/rooms/{roomId}/messages/{messageId}#operation=redact`

Redacts the specified message from the specified Amazon Chime channel.

<h3 id="redactroommessage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The Amazon Chime account ID.|
|roomId|path|string|true|The room ID.|
|messageId|path|string|true|The message ID.|
|operation|query|string|true|none|
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
|operation|redact|

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

<h3 id="redactroommessage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RedactRoomMessageResponse](#schemaredactroommessageresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|483|483|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|484|484|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RegenerateSecurityToken

<a id="opIdRegenerateSecurityToken"></a>

> Code samples

```bash
curl 'https://chime.us-east-1.amazonaws.com/accounts/string/bots/string#operation=regenerate-security-token?operation=regenerate-security-token' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /accounts/{accountId}/bots/{botId}#operation=regenerate-security-token`

Regenerates the security token for a bot.

<h3 id="regeneratesecuritytoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The Amazon Chime account ID.|
|botId|path|string|true|The bot ID.|
|operation|query|string|true|none|
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
|operation|regenerate-security-token|

> Example responses

> 200 Response

```json
{
  "Bot": {
    "BotId": {},
    "UserId": {},
    "DisplayName": {},
    "BotType": {},
    "Disabled": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {},
    "BotEmail": {},
    "SecurityToken": {}
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

<h3 id="regeneratesecuritytoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RegenerateSecurityTokenResponse](#schemaregeneratesecuritytokenresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|485|485|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|486|486|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ResetPersonalPIN

<a id="opIdResetPersonalPIN"></a>

> Code samples

```bash
curl 'https://chime.us-east-1.amazonaws.com/accounts/string/users/string#operation=reset-personal-pin?operation=reset-personal-pin' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /accounts/{accountId}/users/{userId}#operation=reset-personal-pin`

Resets the personal meeting PIN for the specified user on an Amazon Chime account. Returns the <a>User</a> object with the updated personal meeting PIN.

<h3 id="resetpersonalpin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The Amazon Chime account ID.|
|userId|path|string|true|The user ID.|
|operation|query|string|true|none|
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
|operation|reset-personal-pin|

> Example responses

> 200 Response

```json
{
  "User": {
    "UserId": {},
    "AccountId": {},
    "PrimaryEmail": {},
    "PrimaryProvisionedNumber": {},
    "DisplayName": {},
    "LicenseType": {},
    "UserType": {},
    "UserRegistrationStatus": {},
    "UserInvitationStatus": {},
    "RegisteredOn": {},
    "InvitedOn": {},
    "AlexaForBusinessMetadata": {
      "IsAlexaForBusinessEnabled": {},
      "AlexaForBusinessRoomArn": {}
    },
    "PersonalPIN": {}
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

<h3 id="resetpersonalpin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResetPersonalPINResponse](#schemaresetpersonalpinresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RestorePhoneNumber

<a id="opIdRestorePhoneNumber"></a>

> Code samples

```bash
curl 'https://chime.us-east-1.amazonaws.com/phone-numbers/string#operation=restore?operation=restore' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /phone-numbers/{phoneNumberId}#operation=restore`

Moves a phone number from the <b>Deletion queue</b> back into the phone number <b>Inventory</b>.

<h3 id="restorephonenumber-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|phoneNumberId|path|string|true|The phone number.|
|operation|query|string|true|none|
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
|operation|restore|

> Example responses

> 200 Response

```json
{
  "PhoneNumber": {
    "PhoneNumberId": {},
    "E164PhoneNumber": {},
    "Country": {},
    "Type": {},
    "ProductType": {},
    "Status": {},
    "Capabilities": {
      "InboundCall": {},
      "OutboundCall": {},
      "InboundSMS": {},
      "OutboundSMS": {},
      "InboundMMS": {},
      "OutboundMMS": {}
    },
    "Associations": {},
    "CallingName": {},
    "CallingNameStatus": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {},
    "DeletionTimestamp": {}
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

<h3 id="restorephonenumber-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RestorePhoneNumberResponse](#schemarestorephonenumberresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|487|487|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SearchAvailablePhoneNumbers

<a id="opIdSearchAvailablePhoneNumbers"></a>

> Code samples

```bash
curl 'https://chime.us-east-1.amazonaws.com/search#type=phone-numbers?type=phone-numbers' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /search#type=phone-numbers`

Searches for phone numbers that can be ordered. For US numbers, provide at least one of the following search filters: <code>AreaCode</code>, <code>City</code>, <code>State</code>, or <code>TollFreePrefix</code>. If you provide <code>City</code>, you must also provide <code>State</code>. Numbers outside the US only support the <code>PhoneNumberType</code> filter, which you must use.

<h3 id="searchavailablephonenumbers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|area-code|query|string|false|The area code used to filter results. Only applies to the US.|
|city|query|string|false|The city used to filter results. Only applies to the US.|
|country|query|string|false|The country used to filter results. Defaults to the US Format: ISO 3166-1 alpha-2.|
|state|query|string|false|The state used to filter results. Required only if you provide <code>City</code>. Only applies to the US.|
|toll-free-prefix|query|string|false|The toll-free prefix that you use to filter results. Only applies to the US.|
|phone-number-type|query|string|false|The phone number type used to filter results. Required for non-US numbers.|
|max-results|query|integer|false|The maximum number of results to return in a single call.|
|next-token|query|string|false|The token used to retrieve the next page of results.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|type|query|string|true|none|
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
|phone-number-type|Local|
|phone-number-type|TollFree|
|type|phone-numbers|

> Example responses

> 200 Response

```json
{
  "E164PhoneNumbers": {},
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

> 486 Response

```json
null
```

<h3 id="searchavailablephonenumbers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SearchAvailablePhoneNumbersResponse](#schemasearchavailablephonenumbersresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartMeetingTranscription

<a id="opIdStartMeetingTranscription"></a>

> Code samples

```bash
curl 'https://chime.us-east-1.amazonaws.com/meetings/string/transcription#operation=start?operation=start' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "TranscriptionConfiguration": {
      "EngineTranscribeSettings": {
        "LanguageCode": {},
        "VocabularyFilterMethod": {},
        "VocabularyFilterName": {},
        "VocabularyName": {},
        "Region": {},
        "EnablePartialResultsStabilization": {},
        "PartialResultsStability": {},
        "ContentIdentificationType": {},
        "ContentRedactionType": {},
        "PiiEntityTypes": {},
        "LanguageModelName": {},
        "IdentifyLanguage": {},
        "LanguageOptions": {},
        "PreferredLanguage": {},
        "VocabularyNames": {},
        "VocabularyFilterNames": {}
      },
      "EngineTranscribeMedicalSettings": {
        "LanguageCode": {},
        "Specialty": {},
        "Type": {},
        "VocabularyName": {},
        "Region": {},
        "ContentIdentificationType": {}
      }
    }
  }'
```

`POST /meetings/{meetingId}/transcription#operation=start`

<p>Starts transcription for the specified <code>meetingId</code>. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/meeting-transcription.html"> Using Amazon Chime SDK live transcription </a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> <p>If you specify an invalid configuration, a <code>TranscriptFailed</code> event will be sent with the contents of the <code>BadRequestException</code> generated by Amazon Transcribe. For more information on each parameter and which combinations are valid, refer to the <a href="https://docs.aws.amazon.com/transcribe/latest/APIReference/API_streaming_StartStreamTranscription.html">StartStreamTranscription</a> API in the <i>Amazon Transcribe Developer Guide</i>.</p> <important> <p>Amazon Chime SDK live transcription is powered by Amazon Transcribe. Use of Amazon Transcribe is subject to the <a href="https://aws.amazon.com/service-terms/">AWS Service Terms</a>, including the terms specific to the AWS Machine Learning and Artificial Intelligence Services.</p> </important>

> Body parameter

```json
{
  "TranscriptionConfiguration": {
    "EngineTranscribeSettings": {
      "LanguageCode": {},
      "VocabularyFilterMethod": {},
      "VocabularyFilterName": {},
      "VocabularyName": {},
      "Region": {},
      "EnablePartialResultsStabilization": {},
      "PartialResultsStability": {},
      "ContentIdentificationType": {},
      "ContentRedactionType": {},
      "PiiEntityTypes": {},
      "LanguageModelName": {},
      "IdentifyLanguage": {},
      "LanguageOptions": {},
      "PreferredLanguage": {},
      "VocabularyNames": {},
      "VocabularyFilterNames": {}
    },
    "EngineTranscribeMedicalSettings": {
      "LanguageCode": {},
      "Specialty": {},
      "Type": {},
      "VocabularyName": {},
      "Region": {},
      "ContentIdentificationType": {}
    }
  }
}
```

<h3 id="startmeetingtranscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|meetingId|path|string|true|The unique ID of the meeting being transcribed.|
|operation|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» TranscriptionConfiguration|body|object|true|The configuration for the current transcription operation. Must contain <code>EngineTranscribeSettings</code> or <code>EngineTranscribeMedicalSettings</code>.|
|» » EngineTranscribeSettings|body|object|false|none|
|» » » LanguageCode|body|object|false|none|
|» » » VocabularyFilterMethod|body|object|false|none|
|» » » VocabularyFilterName|body|object|false|none|
|» » » VocabularyName|body|object|false|none|
|» » » Region|body|object|false|none|
|» » » EnablePartialResultsStabilization|body|object|false|none|
|» » » PartialResultsStability|body|object|false|none|
|» » » ContentIdentificationType|body|object|false|none|
|» » » ContentRedactionType|body|object|false|none|
|» » » PiiEntityTypes|body|object|false|none|
|» » » LanguageModelName|body|object|false|none|
|» » » IdentifyLanguage|body|object|false|none|
|» » » LanguageOptions|body|object|false|none|
|» » » PreferredLanguage|body|object|false|none|
|» » » VocabularyNames|body|object|false|none|
|» » » VocabularyFilterNames|body|object|false|none|
|» » EngineTranscribeMedicalSettings|body|object|false|none|
|» » » LanguageCode|body|object|true|none|
|» » » Specialty|body|object|true|none|
|» » » Type|body|object|true|none|
|» » » VocabularyName|body|object|false|none|
|» » » Region|body|object|false|none|
|» » » ContentIdentificationType|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|operation|start|

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

> 488 Response

```json
null
```

<h3 id="startmeetingtranscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartMeetingTranscriptionResponse](#schemastartmeetingtranscriptionresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|486|486|UnprocessableEntityException|[UnprocessableEntityException](#schemaunprocessableentityexception)|
|487|487|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|488|488|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopMeetingTranscription

<a id="opIdStopMeetingTranscription"></a>

> Code samples

```bash
curl 'https://chime.us-east-1.amazonaws.com/meetings/string/transcription#operation=stop?operation=stop' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /meetings/{meetingId}/transcription#operation=stop`

Stops transcription for the specified <code>meetingId</code>.

<h3 id="stopmeetingtranscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|meetingId|path|string|true|The unique ID of the meeting for which you stop transcription.|
|operation|query|string|true|none|
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
|operation|stop|

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

<h3 id="stopmeetingtranscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopMeetingTranscriptionResponse](#schemastopmeetingtranscriptionresponse)|
|480|480|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|484|484|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|485|485|UnprocessableEntityException|[UnprocessableEntityException](#schemaunprocessableentityexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|487|487|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagAttendee

<a id="opIdTagAttendee"></a>

> Code samples

```bash
curl 'https://chime.us-east-1.amazonaws.com/meetings/string/attendees/string/tags#operation=add?operation=add' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ]
  }'
```

`POST /meetings/{meetingId}/attendees/{attendeeId}/tags#operation=add`

Applies the specified tags to the specified Amazon Chime SDK attendee.

> Body parameter

```json
{
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

<h3 id="tagattendee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|meetingId|path|string|true|The Amazon Chime SDK meeting ID.|
|attendeeId|path|string|true|The Amazon Chime SDK attendee ID.|
|operation|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Tags|body|[[Tag](#schematag)]|true|The tag key-value pairs.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|operation|add|

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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="tagattendee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|487|487|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagMeeting

<a id="opIdTagMeeting"></a>

> Code samples

```bash
curl 'https://chime.us-east-1.amazonaws.com/meetings/string/tags#operation=add?operation=add' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ]
  }'
```

`POST /meetings/{meetingId}/tags#operation=add`

Applies the specified tags to the specified Amazon Chime SDK meeting.

> Body parameter

```json
{
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

<h3 id="tagmeeting-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|meetingId|path|string|true|The Amazon Chime SDK meeting ID.|
|operation|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Tags|body|[[Tag](#schematag)]|true|The tag key-value pairs.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|operation|add|

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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="tagmeeting-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|487|487|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://chime.us-east-1.amazonaws.com/tags#operation=tag-resource?operation=tag-resource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ResourceARN": "password",
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ]
  }'
```

`POST /tags#operation=tag-resource`

Applies the specified tags to the specified Amazon Chime SDK meeting resource.

> Body parameter

```json
{
  "ResourceARN": "password",
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

<h3 id="tagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|operation|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ResourceARN|body|string(password)|true|The resource ARN.|
|» Tags|body|[[Tag](#schematag)]|true|The tag key-value pairs.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|operation|tag-resource|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagAttendee

<a id="opIdUntagAttendee"></a>

> Code samples

```bash
curl 'https://chime.us-east-1.amazonaws.com/meetings/string/attendees/string/tags#operation=delete?operation=delete' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "TagKeys": [
      "password"
    ]
  }'
```

`POST /meetings/{meetingId}/attendees/{attendeeId}/tags#operation=delete`

Untags the specified tags from the specified Amazon Chime SDK attendee.

> Body parameter

```json
{
  "TagKeys": [
    "password"
  ]
}
```

<h3 id="untagattendee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|meetingId|path|string|true|The Amazon Chime SDK meeting ID.|
|attendeeId|path|string|true|The Amazon Chime SDK attendee ID.|
|operation|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» TagKeys|body|[[TagKey](#schematagkey)]|true|The tag keys.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|operation|delete|

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

> 486 Response

```json
null
```

<h3 id="untagattendee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagMeeting

<a id="opIdUntagMeeting"></a>

> Code samples

```bash
curl 'https://chime.us-east-1.amazonaws.com/meetings/string/tags#operation=delete?operation=delete' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "TagKeys": [
      "password"
    ]
  }'
```

`POST /meetings/{meetingId}/tags#operation=delete`

Untags the specified tags from the specified Amazon Chime SDK meeting.

> Body parameter

```json
{
  "TagKeys": [
    "password"
  ]
}
```

<h3 id="untagmeeting-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|meetingId|path|string|true|The Amazon Chime SDK meeting ID.|
|operation|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» TagKeys|body|[[TagKey](#schematagkey)]|true|The tag keys.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|operation|delete|

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

> 486 Response

```json
null
```

<h3 id="untagmeeting-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://chime.us-east-1.amazonaws.com/tags#operation=untag-resource?operation=untag-resource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ResourceARN": "password",
    "TagKeys": [
      "password"
    ]
  }'
```

`POST /tags#operation=untag-resource`

Untags the specified tags from the specified Amazon Chime SDK meeting resource.

> Body parameter

```json
{
  "ResourceARN": "password",
  "TagKeys": [
    "password"
  ]
}
```

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|operation|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ResourceARN|body|string(password)|true|The resource ARN.|
|» TagKeys|body|[[TagKey](#schematagkey)]|true|The tag keys.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|operation|untag-resource|

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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateChannelReadMarker

<a id="opIdUpdateChannelReadMarker"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/channels/string/readMarker \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`PUT /channels/{channelArn}/readMarker`

<p>The details of the time when a user last read messages in a channel.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>

<h3 id="updatechannelreadmarker-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelArn|path|string|true|The ARN of the channel.|
|x-amz-chime-bearer|header|string|false|The <code>AppInstanceUserArn</code> of the user that makes the API call.|
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
  "ChannelArn": {}
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

<h3 id="updatechannelreadmarker-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateChannelReadMarkerResponse](#schemaupdatechannelreadmarkerresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateSipMediaApplicationCall

<a id="opIdUpdateSipMediaApplicationCall"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/sip-media-applications/string/calls/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Arguments": {
      "property1": "password",
      "property2": "password"
    }
  }'
```

`POST /sip-media-applications/{sipMediaApplicationId}/calls/{transactionId}`

Invokes the AWS Lambda function associated with the SIP media application and transaction ID in an update request. The Lambda function can then return a new set of actions.

> Body parameter

```json
{
  "Arguments": {
    "property1": "password",
    "property2": "password"
  }
}
```

<h3 id="updatesipmediaapplicationcall-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sipMediaApplicationId|path|string|true|The ID of the SIP media application handling the call.|
|transactionId|path|string|true|The ID of the call transaction.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Arguments|body|object|true|Arguments made available to the Lambda function as part of the <code>CALL_UPDATE_REQUESTED</code> event. Can contain 0-20 key-value pairs.|
|» » **additionalProperties**|body|[SensitiveString](#schemasensitivestring)|false|none|

> Example responses

> 202 Response

```json
{
  "SipMediaApplicationCall": {
    "TransactionId": {}
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

<h3 id="updatesipmediaapplicationcall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[UpdateSipMediaApplicationCallResponse](#schemaupdatesipmediaapplicationcallresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|487|487|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ValidateE911Address

<a id="opIdValidateE911Address"></a>

> Code samples

```bash
curl https://chime.us-east-1.amazonaws.com/emergency-calling/address \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AwsAccountId": "string",
    "StreetNumber": "password",
    "StreetInfo": "password",
    "City": "password",
    "State": "password",
    "Country": "password",
    "PostalCode": "password"
  }'
```

`POST /emergency-calling/address`

Validates an address to be used for 911 calls made with Amazon Chime Voice Connectors. You can use validated addresses in a Presence Information Data Format Location Object file that you include in SIP requests. That helps ensure that addresses are routed to the appropriate Public Safety Answering Point.

> Body parameter

```json
{
  "AwsAccountId": "string",
  "StreetNumber": "password",
  "StreetInfo": "password",
  "City": "password",
  "State": "password",
  "Country": "password",
  "PostalCode": "password"
}
```

<h3 id="validatee911address-parameters">Parameters</h3>

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
|» AwsAccountId|body|string|true|The AWS account ID.|
|» StreetNumber|body|string(password)|true|The address street number, such as <code>200</code> or <code>2121</code>.|
|» StreetInfo|body|string(password)|true|The address street information, such as <code>8th Avenue</code>.|
|» City|body|string(password)|true|The address city, such as <code>Portland</code>.|
|» State|body|string(password)|true|The address state, such as <code>ME</code>.|
|» Country|body|string(password)|true|The address country, such as <code>US</code>. |
|» PostalCode|body|string(password)|true|The address postal code, such as <code>04352</code>.|

> Example responses

> 202 Response

```json
{
  "ValidationResult": {},
  "AddressExternalId": {},
  "Address": {
    "streetName": {},
    "streetSuffix": {},
    "postDirectional": {},
    "preDirectional": {},
    "streetNumber": {},
    "city": {},
    "state": {},
    "postalCode": {},
    "postalCodePlus4": {},
    "country": {}
  },
  "CandidateAddressList": {}
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

<h3 id="validatee911address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[ValidateE911AddressResponse](#schemavalidatee911addressresponse)|
|480|480|UnauthorizedClientException|[UnauthorizedClientException](#schemaunauthorizedclientexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ThrottledClientException|[ThrottledClientException](#schemathrottledclientexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AssociatePhoneNumberWithUserResponse">AssociatePhoneNumberWithUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociatephonenumberwithuserresponse"></a>
<a id="schema_AssociatePhoneNumberWithUserResponse"></a>
<a id="tocSassociatephonenumberwithuserresponse"></a>
<a id="tocsassociatephonenumberwithuserresponse"></a>

```json
{}
```

<h2 id="tocS_UnauthorizedClientException">UnauthorizedClientException</h2>
<!-- backwards compatibility -->
<a id="schemaunauthorizedclientexception"></a>
<a id="schema_UnauthorizedClientException"></a>
<a id="tocSunauthorizedclientexception"></a>
<a id="tocsunauthorizedclientexception"></a>

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

<h2 id="tocS_ForbiddenException">ForbiddenException</h2>
<!-- backwards compatibility -->
<a id="schemaforbiddenexception"></a>
<a id="schema_ForbiddenException"></a>
<a id="tocSforbiddenexception"></a>
<a id="tocsforbiddenexception"></a>

```json
null
```

<h2 id="tocS_BadRequestException">BadRequestException</h2>
<!-- backwards compatibility -->
<a id="schemabadrequestexception"></a>
<a id="schema_BadRequestException"></a>
<a id="tocSbadrequestexception"></a>
<a id="tocsbadrequestexception"></a>

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

<h2 id="tocS_ThrottledClientException">ThrottledClientException</h2>
<!-- backwards compatibility -->
<a id="schemathrottledclientexception"></a>
<a id="schema_ThrottledClientException"></a>
<a id="tocSthrottledclientexception"></a>
<a id="tocsthrottledclientexception"></a>

```json
null
```

<h2 id="tocS_ServiceUnavailableException">ServiceUnavailableException</h2>
<!-- backwards compatibility -->
<a id="schemaserviceunavailableexception"></a>
<a id="schema_ServiceUnavailableException"></a>
<a id="tocSserviceunavailableexception"></a>
<a id="tocsserviceunavailableexception"></a>

```json
null
```

<h2 id="tocS_ServiceFailureException">ServiceFailureException</h2>
<!-- backwards compatibility -->
<a id="schemaservicefailureexception"></a>
<a id="schema_ServiceFailureException"></a>
<a id="tocSservicefailureexception"></a>
<a id="tocsservicefailureexception"></a>

```json
null
```

<h2 id="tocS_AssociatePhoneNumbersWithVoiceConnectorResponse">AssociatePhoneNumbersWithVoiceConnectorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociatephonenumberswithvoiceconnectorresponse"></a>
<a id="schema_AssociatePhoneNumbersWithVoiceConnectorResponse"></a>
<a id="tocSassociatephonenumberswithvoiceconnectorresponse"></a>
<a id="tocsassociatephonenumberswithvoiceconnectorresponse"></a>

```json
{
  "PhoneNumberErrors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PhoneNumberErrors|object|false|none|none|

<h2 id="tocS_E164PhoneNumber">E164PhoneNumber</h2>
<!-- backwards compatibility -->
<a id="schemae164phonenumber"></a>
<a id="schema_E164PhoneNumber"></a>
<a id="tocSe164phonenumber"></a>
<a id="tocse164phonenumber"></a>

```json
"password"
```

<h2 id="tocS_AssociatePhoneNumbersWithVoiceConnectorGroupResponse">AssociatePhoneNumbersWithVoiceConnectorGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociatephonenumberswithvoiceconnectorgroupresponse"></a>
<a id="schema_AssociatePhoneNumbersWithVoiceConnectorGroupResponse"></a>
<a id="tocSassociatephonenumberswithvoiceconnectorgroupresponse"></a>
<a id="tocsassociatephonenumberswithvoiceconnectorgroupresponse"></a>

```json
{
  "PhoneNumberErrors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PhoneNumberErrors|object|false|none|none|

<h2 id="tocS_AssociateSigninDelegateGroupsWithAccountResponse">AssociateSigninDelegateGroupsWithAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociatesignindelegategroupswithaccountresponse"></a>
<a id="schema_AssociateSigninDelegateGroupsWithAccountResponse"></a>
<a id="tocSassociatesignindelegategroupswithaccountresponse"></a>
<a id="tocsassociatesignindelegategroupswithaccountresponse"></a>

```json
{}
```

<h2 id="tocS_SigninDelegateGroup">SigninDelegateGroup</h2>
<!-- backwards compatibility -->
<a id="schemasignindelegategroup"></a>
<a id="schema_SigninDelegateGroup"></a>
<a id="tocSsignindelegategroup"></a>
<a id="tocssignindelegategroup"></a>

```json
{
  "GroupName": {}
}
```

An Active Directory (AD) group whose members are granted permission to act as delegates.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupName|object|false|none|none|

<h2 id="tocS_BatchCreateAttendeeResponse">BatchCreateAttendeeResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchcreateattendeeresponse"></a>
<a id="schema_BatchCreateAttendeeResponse"></a>
<a id="tocSbatchcreateattendeeresponse"></a>
<a id="tocsbatchcreateattendeeresponse"></a>

```json
{
  "Attendees": {},
  "Errors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attendees|object|false|none|none|
|Errors|object|false|none|none|

<h2 id="tocS_CreateAttendeeRequestItem">CreateAttendeeRequestItem</h2>
<!-- backwards compatibility -->
<a id="schemacreateattendeerequestitem"></a>
<a id="schema_CreateAttendeeRequestItem"></a>
<a id="tocScreateattendeerequestitem"></a>
<a id="tocscreateattendeerequestitem"></a>

```json
{
  "ExternalUserId": {},
  "Tags": {}
}
```

The Amazon Chime SDK attendee fields to create, used with the BatchCreateAttendee action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExternalUserId|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_ResourceLimitExceededException">ResourceLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcelimitexceededexception"></a>
<a id="schema_ResourceLimitExceededException"></a>
<a id="tocSresourcelimitexceededexception"></a>
<a id="tocsresourcelimitexceededexception"></a>

```json
null
```

<h2 id="tocS_BatchCreateChannelMembershipResponse">BatchCreateChannelMembershipResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchcreatechannelmembershipresponse"></a>
<a id="schema_BatchCreateChannelMembershipResponse"></a>
<a id="tocSbatchcreatechannelmembershipresponse"></a>
<a id="tocsbatchcreatechannelmembershipresponse"></a>

```json
{
  "BatchChannelMemberships": {
    "InvitedBy": {
      "Arn": {},
      "Name": {}
    },
    "Type": {},
    "Members": {},
    "ChannelArn": {}
  },
  "Errors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BatchChannelMemberships|object|false|none|none|
|Errors|object|false|none|none|

<h2 id="tocS_ChimeArn">ChimeArn</h2>
<!-- backwards compatibility -->
<a id="schemachimearn"></a>
<a id="schema_ChimeArn"></a>
<a id="tocSchimearn"></a>
<a id="tocschimearn"></a>

```json
"string"
```

<h2 id="tocS_BatchCreateRoomMembershipResponse">BatchCreateRoomMembershipResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchcreateroommembershipresponse"></a>
<a id="schema_BatchCreateRoomMembershipResponse"></a>
<a id="tocSbatchcreateroommembershipresponse"></a>
<a id="tocsbatchcreateroommembershipresponse"></a>

```json
{
  "Errors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Errors|object|false|none|none|

<h2 id="tocS_MembershipItem">MembershipItem</h2>
<!-- backwards compatibility -->
<a id="schemamembershipitem"></a>
<a id="schema_MembershipItem"></a>
<a id="tocSmembershipitem"></a>
<a id="tocsmembershipitem"></a>

```json
{
  "MemberId": {},
  "Role": {}
}
```

Membership details, such as member ID and member role.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MemberId|object|false|none|none|
|Role|object|false|none|none|

<h2 id="tocS_BatchDeletePhoneNumberResponse">BatchDeletePhoneNumberResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeletephonenumberresponse"></a>
<a id="schema_BatchDeletePhoneNumberResponse"></a>
<a id="tocSbatchdeletephonenumberresponse"></a>
<a id="tocsbatchdeletephonenumberresponse"></a>

```json
{
  "PhoneNumberErrors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PhoneNumberErrors|object|false|none|none|

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_BatchSuspendUserResponse">BatchSuspendUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchsuspenduserresponse"></a>
<a id="schema_BatchSuspendUserResponse"></a>
<a id="tocSbatchsuspenduserresponse"></a>
<a id="tocsbatchsuspenduserresponse"></a>

```json
{
  "UserErrors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserErrors|object|false|none|none|

<h2 id="tocS_NonEmptyString">NonEmptyString</h2>
<!-- backwards compatibility -->
<a id="schemanonemptystring"></a>
<a id="schema_NonEmptyString"></a>
<a id="tocSnonemptystring"></a>
<a id="tocsnonemptystring"></a>

```json
"string"
```

<h2 id="tocS_BatchUnsuspendUserResponse">BatchUnsuspendUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchunsuspenduserresponse"></a>
<a id="schema_BatchUnsuspendUserResponse"></a>
<a id="tocSbatchunsuspenduserresponse"></a>
<a id="tocsbatchunsuspenduserresponse"></a>

```json
{
  "UserErrors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserErrors|object|false|none|none|

<h2 id="tocS_BatchUpdatePhoneNumberResponse">BatchUpdatePhoneNumberResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchupdatephonenumberresponse"></a>
<a id="schema_BatchUpdatePhoneNumberResponse"></a>
<a id="tocSbatchupdatephonenumberresponse"></a>
<a id="tocsbatchupdatephonenumberresponse"></a>

```json
{
  "PhoneNumberErrors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PhoneNumberErrors|object|false|none|none|

<h2 id="tocS_UpdatePhoneNumberRequestItem">UpdatePhoneNumberRequestItem</h2>
<!-- backwards compatibility -->
<a id="schemaupdatephonenumberrequestitem"></a>
<a id="schema_UpdatePhoneNumberRequestItem"></a>
<a id="tocSupdatephonenumberrequestitem"></a>
<a id="tocsupdatephonenumberrequestitem"></a>

```json
{
  "PhoneNumberId": {},
  "ProductType": {},
  "CallingName": {}
}
```

The phone number ID, product type, or calling name fields to update, used with the <a>BatchUpdatePhoneNumber</a> and <a>UpdatePhoneNumber</a> actions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PhoneNumberId|object|true|none|none|
|ProductType|object|false|none|none|
|CallingName|object|false|none|none|

<h2 id="tocS_BatchUpdateUserResponse">BatchUpdateUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchupdateuserresponse"></a>
<a id="schema_BatchUpdateUserResponse"></a>
<a id="tocSbatchupdateuserresponse"></a>
<a id="tocsbatchupdateuserresponse"></a>

```json
{
  "UserErrors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserErrors|object|false|none|none|

<h2 id="tocS_UpdateUserRequestItem">UpdateUserRequestItem</h2>
<!-- backwards compatibility -->
<a id="schemaupdateuserrequestitem"></a>
<a id="schema_UpdateUserRequestItem"></a>
<a id="tocSupdateuserrequestitem"></a>
<a id="tocsupdateuserrequestitem"></a>

```json
{
  "UserId": {},
  "LicenseType": {},
  "UserType": {},
  "AlexaForBusinessMetadata": {
    "IsAlexaForBusinessEnabled": {},
    "AlexaForBusinessRoomArn": {}
  }
}
```

The user ID and user fields to update, used with the <a>BatchUpdateUser</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserId|object|true|none|none|
|LicenseType|object|false|none|none|
|UserType|object|false|none|none|
|AlexaForBusinessMetadata|object|false|none|none|

<h2 id="tocS_CreateAccountResponse">CreateAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateaccountresponse"></a>
<a id="schema_CreateAccountResponse"></a>
<a id="tocScreateaccountresponse"></a>
<a id="tocscreateaccountresponse"></a>

```json
{
  "Account": {
    "AwsAccountId": {},
    "AccountId": {},
    "Name": {},
    "AccountType": {},
    "CreatedTimestamp": {},
    "DefaultLicense": {},
    "SupportedLicenses": {},
    "AccountStatus": {},
    "SigninDelegateGroups": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Account|object|false|none|none|

<h2 id="tocS_CreateAppInstanceResponse">CreateAppInstanceResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateappinstanceresponse"></a>
<a id="schema_CreateAppInstanceResponse"></a>
<a id="tocScreateappinstanceresponse"></a>
<a id="tocscreateappinstanceresponse"></a>

```json
{
  "AppInstanceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppInstanceArn|object|false|none|none|

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

Describes a tag applied to a resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_ConflictException">ConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaconflictexception"></a>
<a id="schema_ConflictException"></a>
<a id="tocSconflictexception"></a>
<a id="tocsconflictexception"></a>

```json
null
```

<h2 id="tocS_CreateAppInstanceAdminResponse">CreateAppInstanceAdminResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateappinstanceadminresponse"></a>
<a id="schema_CreateAppInstanceAdminResponse"></a>
<a id="tocScreateappinstanceadminresponse"></a>
<a id="tocscreateappinstanceadminresponse"></a>

```json
{
  "AppInstanceAdmin": {
    "Arn": {},
    "Name": {}
  },
  "AppInstanceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppInstanceAdmin|object|false|none|none|
|AppInstanceArn|object|false|none|none|

<h2 id="tocS_CreateAppInstanceUserResponse">CreateAppInstanceUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateappinstanceuserresponse"></a>
<a id="schema_CreateAppInstanceUserResponse"></a>
<a id="tocScreateappinstanceuserresponse"></a>
<a id="tocscreateappinstanceuserresponse"></a>

```json
{
  "AppInstanceUserArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppInstanceUserArn|object|false|none|none|

<h2 id="tocS_CreateAttendeeResponse">CreateAttendeeResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateattendeeresponse"></a>
<a id="schema_CreateAttendeeResponse"></a>
<a id="tocScreateattendeeresponse"></a>
<a id="tocscreateattendeeresponse"></a>

```json
{
  "Attendee": {
    "ExternalUserId": {},
    "AttendeeId": {},
    "JoinToken": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attendee|object|false|none|none|

<h2 id="tocS_CreateBotResponse">CreateBotResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatebotresponse"></a>
<a id="schema_CreateBotResponse"></a>
<a id="tocScreatebotresponse"></a>
<a id="tocscreatebotresponse"></a>

```json
{
  "Bot": {
    "BotId": {},
    "UserId": {},
    "DisplayName": {},
    "BotType": {},
    "Disabled": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {},
    "BotEmail": {},
    "SecurityToken": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bot|object|false|none|none|

<h2 id="tocS_CreateChannelResponse">CreateChannelResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatechannelresponse"></a>
<a id="schema_CreateChannelResponse"></a>
<a id="tocScreatechannelresponse"></a>
<a id="tocscreatechannelresponse"></a>

```json
{
  "ChannelArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelArn|object|false|none|none|

<h2 id="tocS_CreateChannelBanResponse">CreateChannelBanResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatechannelbanresponse"></a>
<a id="schema_CreateChannelBanResponse"></a>
<a id="tocScreatechannelbanresponse"></a>
<a id="tocscreatechannelbanresponse"></a>

```json
{
  "ChannelArn": {},
  "Member": {
    "Arn": {},
    "Name": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelArn|object|false|none|none|
|Member|object|false|none|none|

<h2 id="tocS_CreateChannelMembershipResponse">CreateChannelMembershipResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatechannelmembershipresponse"></a>
<a id="schema_CreateChannelMembershipResponse"></a>
<a id="tocScreatechannelmembershipresponse"></a>
<a id="tocscreatechannelmembershipresponse"></a>

```json
{
  "ChannelArn": {},
  "Member": {
    "Arn": {},
    "Name": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelArn|object|false|none|none|
|Member|object|false|none|none|

<h2 id="tocS_CreateChannelModeratorResponse">CreateChannelModeratorResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatechannelmoderatorresponse"></a>
<a id="schema_CreateChannelModeratorResponse"></a>
<a id="tocScreatechannelmoderatorresponse"></a>
<a id="tocscreatechannelmoderatorresponse"></a>

```json
{
  "ChannelArn": {},
  "ChannelModerator": {
    "Arn": {},
    "Name": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelArn|object|false|none|none|
|ChannelModerator|object|false|none|none|

<h2 id="tocS_CreateMediaCapturePipelineResponse">CreateMediaCapturePipelineResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatemediacapturepipelineresponse"></a>
<a id="schema_CreateMediaCapturePipelineResponse"></a>
<a id="tocScreatemediacapturepipelineresponse"></a>
<a id="tocscreatemediacapturepipelineresponse"></a>

```json
{
  "MediaCapturePipeline": {
    "MediaPipelineId": {},
    "SourceType": {},
    "SourceArn": {},
    "Status": {},
    "SinkType": {},
    "SinkArn": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {},
    "ChimeSdkMeetingConfiguration": {
      "SourceConfiguration": {
        "SelectedVideoStreams": {
          "AttendeeIds": {},
          "ExternalUserIds": {}
        }
      },
      "ArtifactsConfiguration": {
        "Audio": {
          "MuxType": {}
        },
        "Video": {
          "State": {},
          "MuxType": {}
        },
        "Content": {
          "State": {},
          "MuxType": {}
        }
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MediaCapturePipeline|object|false|none|none|

<h2 id="tocS_SourceConfiguration">SourceConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemasourceconfiguration"></a>
<a id="schema_SourceConfiguration"></a>
<a id="tocSsourceconfiguration"></a>
<a id="tocssourceconfiguration"></a>

```json
{
  "SelectedVideoStreams": {
    "AttendeeIds": {},
    "ExternalUserIds": {}
  }
}
```

Source configuration for a specified media capture pipeline.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SelectedVideoStreams|object|false|none|none|

<h2 id="tocS_ArtifactsConfiguration">ArtifactsConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaartifactsconfiguration"></a>
<a id="schema_ArtifactsConfiguration"></a>
<a id="tocSartifactsconfiguration"></a>
<a id="tocsartifactsconfiguration"></a>

```json
{
  "Audio": {
    "MuxType": {}
  },
  "Video": {
    "State": {},
    "MuxType": {}
  },
  "Content": {
    "State": {},
    "MuxType": {}
  }
}
```

The configuration for the artifacts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Audio|object|true|none|none|
|Video|object|true|none|none|
|Content|object|true|none|none|

<h2 id="tocS_CreateMeetingResponse">CreateMeetingResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatemeetingresponse"></a>
<a id="schema_CreateMeetingResponse"></a>
<a id="tocScreatemeetingresponse"></a>
<a id="tocscreatemeetingresponse"></a>

```json
{
  "Meeting": {
    "MeetingId": {},
    "ExternalMeetingId": {},
    "MediaPlacement": {
      "AudioHostUrl": {},
      "AudioFallbackUrl": {},
      "ScreenDataUrl": {},
      "ScreenSharingUrl": {},
      "ScreenViewingUrl": {},
      "SignalingUrl": {},
      "TurnControlUrl": {},
      "EventIngestionUrl": {}
    },
    "MediaRegion": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Meeting|object|false|none|none|

<h2 id="tocS_Arn">Arn</h2>
<!-- backwards compatibility -->
<a id="schemaarn"></a>
<a id="schema_Arn"></a>
<a id="tocSarn"></a>
<a id="tocsarn"></a>

```json
"password"
```

<h2 id="tocS_CreateMeetingDialOutResponse">CreateMeetingDialOutResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatemeetingdialoutresponse"></a>
<a id="schema_CreateMeetingDialOutResponse"></a>
<a id="tocScreatemeetingdialoutresponse"></a>
<a id="tocscreatemeetingdialoutresponse"></a>

```json
{
  "TransactionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TransactionId|object|false|none|none|

<h2 id="tocS_CreateMeetingWithAttendeesResponse">CreateMeetingWithAttendeesResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatemeetingwithattendeesresponse"></a>
<a id="schema_CreateMeetingWithAttendeesResponse"></a>
<a id="tocScreatemeetingwithattendeesresponse"></a>
<a id="tocscreatemeetingwithattendeesresponse"></a>

```json
{
  "Meeting": {
    "MeetingId": {},
    "ExternalMeetingId": {},
    "MediaPlacement": {
      "AudioHostUrl": {},
      "AudioFallbackUrl": {},
      "ScreenDataUrl": {},
      "ScreenSharingUrl": {},
      "ScreenViewingUrl": {},
      "SignalingUrl": {},
      "TurnControlUrl": {},
      "EventIngestionUrl": {}
    },
    "MediaRegion": {}
  },
  "Attendees": {},
  "Errors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Meeting|object|false|none|none|
|Attendees|object|false|none|none|
|Errors|object|false|none|none|

<h2 id="tocS_CreatePhoneNumberOrderResponse">CreatePhoneNumberOrderResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatephonenumberorderresponse"></a>
<a id="schema_CreatePhoneNumberOrderResponse"></a>
<a id="tocScreatephonenumberorderresponse"></a>
<a id="tocscreatephonenumberorderresponse"></a>

```json
{
  "PhoneNumberOrder": {
    "PhoneNumberOrderId": {},
    "ProductType": {},
    "Status": {},
    "OrderedPhoneNumbers": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PhoneNumberOrder|object|false|none|none|

<h2 id="tocS_CreateProxySessionResponse">CreateProxySessionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateproxysessionresponse"></a>
<a id="schema_CreateProxySessionResponse"></a>
<a id="tocScreateproxysessionresponse"></a>
<a id="tocscreateproxysessionresponse"></a>

```json
{
  "ProxySession": {
    "VoiceConnectorId": {},
    "ProxySessionId": {},
    "Name": {},
    "Status": {},
    "ExpiryMinutes": {},
    "Capabilities": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {},
    "EndedTimestamp": {},
    "Participants": {},
    "NumberSelectionBehavior": {},
    "GeoMatchLevel": {},
    "GeoMatchParams": {
      "Country": {},
      "AreaCode": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProxySession|object|false|none|none|

<h2 id="tocS_Capability">Capability</h2>
<!-- backwards compatibility -->
<a id="schemacapability"></a>
<a id="schema_Capability"></a>
<a id="tocScapability"></a>
<a id="tocscapability"></a>

```json
"Voice"
```

<h2 id="tocS_Country">Country</h2>
<!-- backwards compatibility -->
<a id="schemacountry"></a>
<a id="schema_Country"></a>
<a id="tocScountry"></a>
<a id="tocscountry"></a>

```json
"string"
```

<h2 id="tocS_AreaCode">AreaCode</h2>
<!-- backwards compatibility -->
<a id="schemaareacode"></a>
<a id="schema_AreaCode"></a>
<a id="tocSareacode"></a>
<a id="tocsareacode"></a>

```json
"string"
```

<h2 id="tocS_CreateRoomResponse">CreateRoomResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateroomresponse"></a>
<a id="schema_CreateRoomResponse"></a>
<a id="tocScreateroomresponse"></a>
<a id="tocscreateroomresponse"></a>

```json
{
  "Room": {
    "RoomId": {},
    "Name": {},
    "AccountId": {},
    "CreatedBy": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Room|object|false|none|none|

<h2 id="tocS_CreateRoomMembershipResponse">CreateRoomMembershipResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateroommembershipresponse"></a>
<a id="schema_CreateRoomMembershipResponse"></a>
<a id="tocScreateroommembershipresponse"></a>
<a id="tocscreateroommembershipresponse"></a>

```json
{
  "RoomMembership": {
    "RoomId": {},
    "Member": {
      "MemberId": {},
      "MemberType": {},
      "Email": {},
      "FullName": {},
      "AccountId": {}
    },
    "Role": {},
    "InvitedBy": {},
    "UpdatedTimestamp": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoomMembership|object|false|none|none|

<h2 id="tocS_CreateSipMediaApplicationResponse">CreateSipMediaApplicationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatesipmediaapplicationresponse"></a>
<a id="schema_CreateSipMediaApplicationResponse"></a>
<a id="tocScreatesipmediaapplicationresponse"></a>
<a id="tocscreatesipmediaapplicationresponse"></a>

```json
{
  "SipMediaApplication": {
    "SipMediaApplicationId": {},
    "AwsRegion": {},
    "Name": {},
    "Endpoints": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SipMediaApplication|object|false|none|none|

<h2 id="tocS_SipMediaApplicationEndpoint">SipMediaApplicationEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemasipmediaapplicationendpoint"></a>
<a id="schema_SipMediaApplicationEndpoint"></a>
<a id="tocSsipmediaapplicationendpoint"></a>
<a id="tocssipmediaapplicationendpoint"></a>

```json
{
  "LambdaArn": {}
}
```

The endpoint assigned to the SIP media application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LambdaArn|object|false|none|none|

<h2 id="tocS_CreateSipMediaApplicationCallResponse">CreateSipMediaApplicationCallResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatesipmediaapplicationcallresponse"></a>
<a id="schema_CreateSipMediaApplicationCallResponse"></a>
<a id="tocScreatesipmediaapplicationcallresponse"></a>
<a id="tocscreatesipmediaapplicationcallresponse"></a>

```json
{
  "SipMediaApplicationCall": {
    "TransactionId": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SipMediaApplicationCall|object|false|none|none|

<h2 id="tocS_SensitiveString">SensitiveString</h2>
<!-- backwards compatibility -->
<a id="schemasensitivestring"></a>
<a id="schema_SensitiveString"></a>
<a id="tocSsensitivestring"></a>
<a id="tocssensitivestring"></a>

```json
"password"
```

<h2 id="tocS_CreateSipRuleResponse">CreateSipRuleResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatesipruleresponse"></a>
<a id="schema_CreateSipRuleResponse"></a>
<a id="tocScreatesipruleresponse"></a>
<a id="tocscreatesipruleresponse"></a>

```json
{
  "SipRule": {
    "SipRuleId": {},
    "Name": {},
    "Disabled": {},
    "TriggerType": {},
    "TriggerValue": {},
    "TargetApplications": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SipRule|object|false|none|none|

<h2 id="tocS_SipRuleTargetApplication">SipRuleTargetApplication</h2>
<!-- backwards compatibility -->
<a id="schemasipruletargetapplication"></a>
<a id="schema_SipRuleTargetApplication"></a>
<a id="tocSsipruletargetapplication"></a>
<a id="tocssipruletargetapplication"></a>

```json
{
  "SipMediaApplicationId": {},
  "Priority": {},
  "AwsRegion": {}
}
```

Target SIP media application and other details, such as priority and AWS Region, to be specified in the SIP rule. Only one SIP rule per AWS Region can be provided.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SipMediaApplicationId|object|false|none|none|
|Priority|object|false|none|none|
|AwsRegion|object|false|none|none|

<h2 id="tocS_CreateUserResponse">CreateUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateuserresponse"></a>
<a id="schema_CreateUserResponse"></a>
<a id="tocScreateuserresponse"></a>
<a id="tocscreateuserresponse"></a>

```json
{
  "User": {
    "UserId": {},
    "AccountId": {},
    "PrimaryEmail": {},
    "PrimaryProvisionedNumber": {},
    "DisplayName": {},
    "LicenseType": {},
    "UserType": {},
    "UserRegistrationStatus": {},
    "UserInvitationStatus": {},
    "RegisteredOn": {},
    "InvitedOn": {},
    "AlexaForBusinessMetadata": {
      "IsAlexaForBusinessEnabled": {},
      "AlexaForBusinessRoomArn": {}
    },
    "PersonalPIN": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|User|object|false|none|none|

<h2 id="tocS_CreateVoiceConnectorResponse">CreateVoiceConnectorResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatevoiceconnectorresponse"></a>
<a id="schema_CreateVoiceConnectorResponse"></a>
<a id="tocScreatevoiceconnectorresponse"></a>
<a id="tocscreatevoiceconnectorresponse"></a>

```json
{
  "VoiceConnector": {
    "VoiceConnectorId": {},
    "AwsRegion": {},
    "Name": {},
    "OutboundHostName": {},
    "RequireEncryption": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {},
    "VoiceConnectorArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VoiceConnector|object|false|none|none|

<h2 id="tocS_CreateVoiceConnectorGroupResponse">CreateVoiceConnectorGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatevoiceconnectorgroupresponse"></a>
<a id="schema_CreateVoiceConnectorGroupResponse"></a>
<a id="tocScreatevoiceconnectorgroupresponse"></a>
<a id="tocscreatevoiceconnectorgroupresponse"></a>

```json
{
  "VoiceConnectorGroup": {
    "VoiceConnectorGroupId": {},
    "Name": {},
    "VoiceConnectorItems": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {},
    "VoiceConnectorGroupArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VoiceConnectorGroup|object|false|none|none|

<h2 id="tocS_VoiceConnectorItem">VoiceConnectorItem</h2>
<!-- backwards compatibility -->
<a id="schemavoiceconnectoritem"></a>
<a id="schema_VoiceConnectorItem"></a>
<a id="tocSvoiceconnectoritem"></a>
<a id="tocsvoiceconnectoritem"></a>

```json
{
  "VoiceConnectorId": {},
  "Priority": {}
}
```

For Amazon Chime Voice Connector groups, the Amazon Chime Voice Connectors to which to route inbound calls. Includes priority configuration settings. Limit: 3 <code>VoiceConnectorItems</code> per Amazon Chime Voice Connector group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VoiceConnectorId|object|true|none|none|
|Priority|object|true|none|none|

<h2 id="tocS_DeleteAccountResponse">DeleteAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteaccountresponse"></a>
<a id="schema_DeleteAccountResponse"></a>
<a id="tocSdeleteaccountresponse"></a>
<a id="tocsdeleteaccountresponse"></a>

```json
{}
```

<h2 id="tocS_UnprocessableEntityException">UnprocessableEntityException</h2>
<!-- backwards compatibility -->
<a id="schemaunprocessableentityexception"></a>
<a id="schema_UnprocessableEntityException"></a>
<a id="tocSunprocessableentityexception"></a>
<a id="tocsunprocessableentityexception"></a>

```json
null
```

<h2 id="tocS_DescribeAppInstanceResponse">DescribeAppInstanceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeappinstanceresponse"></a>
<a id="schema_DescribeAppInstanceResponse"></a>
<a id="tocSdescribeappinstanceresponse"></a>
<a id="tocsdescribeappinstanceresponse"></a>

```json
{
  "AppInstance": {
    "AppInstanceArn": {},
    "Name": {},
    "Metadata": {},
    "CreatedTimestamp": {},
    "LastUpdatedTimestamp": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppInstance|object|false|none|none|

<h2 id="tocS_DescribeAppInstanceAdminResponse">DescribeAppInstanceAdminResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeappinstanceadminresponse"></a>
<a id="schema_DescribeAppInstanceAdminResponse"></a>
<a id="tocSdescribeappinstanceadminresponse"></a>
<a id="tocsdescribeappinstanceadminresponse"></a>

```json
{
  "AppInstanceAdmin": {
    "Admin": {
      "Arn": {},
      "Name": {}
    },
    "AppInstanceArn": {},
    "CreatedTimestamp": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppInstanceAdmin|object|false|none|none|

<h2 id="tocS_DescribeAppInstanceUserResponse">DescribeAppInstanceUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeappinstanceuserresponse"></a>
<a id="schema_DescribeAppInstanceUserResponse"></a>
<a id="tocSdescribeappinstanceuserresponse"></a>
<a id="tocsdescribeappinstanceuserresponse"></a>

```json
{
  "AppInstanceUser": {
    "AppInstanceUserArn": {},
    "Name": {},
    "CreatedTimestamp": {},
    "Metadata": {},
    "LastUpdatedTimestamp": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppInstanceUser|object|false|none|none|

<h2 id="tocS_DescribeChannelResponse">DescribeChannelResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribechannelresponse"></a>
<a id="schema_DescribeChannelResponse"></a>
<a id="tocSdescribechannelresponse"></a>
<a id="tocsdescribechannelresponse"></a>

```json
{
  "Channel": {
    "Name": {},
    "ChannelArn": {},
    "Mode": {},
    "Privacy": {},
    "Metadata": {},
    "CreatedBy": {
      "Arn": {},
      "Name": {}
    },
    "CreatedTimestamp": {},
    "LastMessageTimestamp": {},
    "LastUpdatedTimestamp": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Channel|object|false|none|none|

<h2 id="tocS_DescribeChannelBanResponse">DescribeChannelBanResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribechannelbanresponse"></a>
<a id="schema_DescribeChannelBanResponse"></a>
<a id="tocSdescribechannelbanresponse"></a>
<a id="tocsdescribechannelbanresponse"></a>

```json
{
  "ChannelBan": {
    "Member": {
      "Arn": {},
      "Name": {}
    },
    "ChannelArn": {},
    "CreatedTimestamp": {},
    "CreatedBy": {
      "Arn": {},
      "Name": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelBan|object|false|none|none|

<h2 id="tocS_DescribeChannelMembershipResponse">DescribeChannelMembershipResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribechannelmembershipresponse"></a>
<a id="schema_DescribeChannelMembershipResponse"></a>
<a id="tocSdescribechannelmembershipresponse"></a>
<a id="tocsdescribechannelmembershipresponse"></a>

```json
{
  "ChannelMembership": {
    "InvitedBy": {
      "Arn": {},
      "Name": {}
    },
    "Type": {},
    "Member": {
      "Arn": {},
      "Name": {}
    },
    "ChannelArn": {},
    "CreatedTimestamp": {},
    "LastUpdatedTimestamp": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelMembership|object|false|none|none|

<h2 id="tocS_DescribeChannelMembershipForAppInstanceUserResponse">DescribeChannelMembershipForAppInstanceUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribechannelmembershipforappinstanceuserresponse"></a>
<a id="schema_DescribeChannelMembershipForAppInstanceUserResponse"></a>
<a id="tocSdescribechannelmembershipforappinstanceuserresponse"></a>
<a id="tocsdescribechannelmembershipforappinstanceuserresponse"></a>

```json
{
  "ChannelMembership": {
    "ChannelSummary": {
      "Name": {},
      "ChannelArn": {},
      "Mode": {},
      "Privacy": {},
      "Metadata": {},
      "LastMessageTimestamp": {}
    },
    "AppInstanceUserMembershipSummary": {
      "Type": {},
      "ReadMarkerTimestamp": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelMembership|object|false|none|none|

<h2 id="tocS_DescribeChannelModeratedByAppInstanceUserResponse">DescribeChannelModeratedByAppInstanceUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribechannelmoderatedbyappinstanceuserresponse"></a>
<a id="schema_DescribeChannelModeratedByAppInstanceUserResponse"></a>
<a id="tocSdescribechannelmoderatedbyappinstanceuserresponse"></a>
<a id="tocsdescribechannelmoderatedbyappinstanceuserresponse"></a>

```json
{
  "Channel": {
    "ChannelSummary": {
      "Name": {},
      "ChannelArn": {},
      "Mode": {},
      "Privacy": {},
      "Metadata": {},
      "LastMessageTimestamp": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Channel|object|false|none|none|

<h2 id="tocS_DescribeChannelModeratorResponse">DescribeChannelModeratorResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribechannelmoderatorresponse"></a>
<a id="schema_DescribeChannelModeratorResponse"></a>
<a id="tocSdescribechannelmoderatorresponse"></a>
<a id="tocsdescribechannelmoderatorresponse"></a>

```json
{
  "ChannelModerator": {
    "Moderator": {
      "Arn": {},
      "Name": {}
    },
    "ChannelArn": {},
    "CreatedTimestamp": {},
    "CreatedBy": {
      "Arn": {},
      "Name": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelModerator|object|false|none|none|

<h2 id="tocS_DisassociatePhoneNumberFromUserResponse">DisassociatePhoneNumberFromUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatephonenumberfromuserresponse"></a>
<a id="schema_DisassociatePhoneNumberFromUserResponse"></a>
<a id="tocSdisassociatephonenumberfromuserresponse"></a>
<a id="tocsdisassociatephonenumberfromuserresponse"></a>

```json
{}
```

<h2 id="tocS_DisassociatePhoneNumbersFromVoiceConnectorResponse">DisassociatePhoneNumbersFromVoiceConnectorResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatephonenumbersfromvoiceconnectorresponse"></a>
<a id="schema_DisassociatePhoneNumbersFromVoiceConnectorResponse"></a>
<a id="tocSdisassociatephonenumbersfromvoiceconnectorresponse"></a>
<a id="tocsdisassociatephonenumbersfromvoiceconnectorresponse"></a>

```json
{
  "PhoneNumberErrors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PhoneNumberErrors|object|false|none|none|

<h2 id="tocS_DisassociatePhoneNumbersFromVoiceConnectorGroupResponse">DisassociatePhoneNumbersFromVoiceConnectorGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatephonenumbersfromvoiceconnectorgroupresponse"></a>
<a id="schema_DisassociatePhoneNumbersFromVoiceConnectorGroupResponse"></a>
<a id="tocSdisassociatephonenumbersfromvoiceconnectorgroupresponse"></a>
<a id="tocsdisassociatephonenumbersfromvoiceconnectorgroupresponse"></a>

```json
{
  "PhoneNumberErrors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PhoneNumberErrors|object|false|none|none|

<h2 id="tocS_DisassociateSigninDelegateGroupsFromAccountResponse">DisassociateSigninDelegateGroupsFromAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatesignindelegategroupsfromaccountresponse"></a>
<a id="schema_DisassociateSigninDelegateGroupsFromAccountResponse"></a>
<a id="tocSdisassociatesignindelegategroupsfromaccountresponse"></a>
<a id="tocsdisassociatesignindelegategroupsfromaccountresponse"></a>

```json
{}
```

<h2 id="tocS_GetAccountResponse">GetAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetaccountresponse"></a>
<a id="schema_GetAccountResponse"></a>
<a id="tocSgetaccountresponse"></a>
<a id="tocsgetaccountresponse"></a>

```json
{
  "Account": {
    "AwsAccountId": {},
    "AccountId": {},
    "Name": {},
    "AccountType": {},
    "CreatedTimestamp": {},
    "DefaultLicense": {},
    "SupportedLicenses": {},
    "AccountStatus": {},
    "SigninDelegateGroups": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Account|object|false|none|none|

<h2 id="tocS_GetAccountSettingsResponse">GetAccountSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetaccountsettingsresponse"></a>
<a id="schema_GetAccountSettingsResponse"></a>
<a id="tocSgetaccountsettingsresponse"></a>
<a id="tocsgetaccountsettingsresponse"></a>

```json
{
  "AccountSettings": {
    "DisableRemoteControl": {},
    "EnableDialOut": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountSettings|object|false|none|none|

<h2 id="tocS_GetAppInstanceRetentionSettingsResponse">GetAppInstanceRetentionSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetappinstanceretentionsettingsresponse"></a>
<a id="schema_GetAppInstanceRetentionSettingsResponse"></a>
<a id="tocSgetappinstanceretentionsettingsresponse"></a>
<a id="tocsgetappinstanceretentionsettingsresponse"></a>

```json
{
  "AppInstanceRetentionSettings": {
    "ChannelRetentionSettings": {
      "RetentionDays": {}
    }
  },
  "InitiateDeletionTimestamp": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppInstanceRetentionSettings|object|false|none|none|
|InitiateDeletionTimestamp|object|false|none|none|

<h2 id="tocS_GetAppInstanceStreamingConfigurationsResponse">GetAppInstanceStreamingConfigurationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetappinstancestreamingconfigurationsresponse"></a>
<a id="schema_GetAppInstanceStreamingConfigurationsResponse"></a>
<a id="tocSgetappinstancestreamingconfigurationsresponse"></a>
<a id="tocsgetappinstancestreamingconfigurationsresponse"></a>

```json
{
  "AppInstanceStreamingConfigurations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppInstanceStreamingConfigurations|object|false|none|none|

<h2 id="tocS_GetAttendeeResponse">GetAttendeeResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetattendeeresponse"></a>
<a id="schema_GetAttendeeResponse"></a>
<a id="tocSgetattendeeresponse"></a>
<a id="tocsgetattendeeresponse"></a>

```json
{
  "Attendee": {
    "ExternalUserId": {},
    "AttendeeId": {},
    "JoinToken": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attendee|object|false|none|none|

<h2 id="tocS_GetBotResponse">GetBotResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetbotresponse"></a>
<a id="schema_GetBotResponse"></a>
<a id="tocSgetbotresponse"></a>
<a id="tocsgetbotresponse"></a>

```json
{
  "Bot": {
    "BotId": {},
    "UserId": {},
    "DisplayName": {},
    "BotType": {},
    "Disabled": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {},
    "BotEmail": {},
    "SecurityToken": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bot|object|false|none|none|

<h2 id="tocS_GetChannelMessageResponse">GetChannelMessageResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetchannelmessageresponse"></a>
<a id="schema_GetChannelMessageResponse"></a>
<a id="tocSgetchannelmessageresponse"></a>
<a id="tocsgetchannelmessageresponse"></a>

```json
{
  "ChannelMessage": {
    "ChannelArn": {},
    "MessageId": {},
    "Content": {},
    "Metadata": {},
    "Type": {},
    "CreatedTimestamp": {},
    "LastEditedTimestamp": {},
    "LastUpdatedTimestamp": {},
    "Sender": {
      "Arn": {},
      "Name": {}
    },
    "Redacted": {},
    "Persistence": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelMessage|object|false|none|none|

<h2 id="tocS_GetEventsConfigurationResponse">GetEventsConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemageteventsconfigurationresponse"></a>
<a id="schema_GetEventsConfigurationResponse"></a>
<a id="tocSgeteventsconfigurationresponse"></a>
<a id="tocsgeteventsconfigurationresponse"></a>

```json
{
  "EventsConfiguration": {
    "BotId": {},
    "OutboundEventsHTTPSEndpoint": {},
    "LambdaFunctionArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventsConfiguration|object|false|none|none|

<h2 id="tocS_GetGlobalSettingsResponse">GetGlobalSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetglobalsettingsresponse"></a>
<a id="schema_GetGlobalSettingsResponse"></a>
<a id="tocSgetglobalsettingsresponse"></a>
<a id="tocsgetglobalsettingsresponse"></a>

```json
{
  "BusinessCalling": {
    "CdrBucket": {}
  },
  "VoiceConnector": {
    "CdrBucket": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BusinessCalling|object|false|none|none|
|VoiceConnector|object|false|none|none|

<h2 id="tocS_GetMediaCapturePipelineResponse">GetMediaCapturePipelineResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetmediacapturepipelineresponse"></a>
<a id="schema_GetMediaCapturePipelineResponse"></a>
<a id="tocSgetmediacapturepipelineresponse"></a>
<a id="tocsgetmediacapturepipelineresponse"></a>

```json
{
  "MediaCapturePipeline": {
    "MediaPipelineId": {},
    "SourceType": {},
    "SourceArn": {},
    "Status": {},
    "SinkType": {},
    "SinkArn": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {},
    "ChimeSdkMeetingConfiguration": {
      "SourceConfiguration": {
        "SelectedVideoStreams": {
          "AttendeeIds": {},
          "ExternalUserIds": {}
        }
      },
      "ArtifactsConfiguration": {
        "Audio": {
          "MuxType": {}
        },
        "Video": {
          "State": {},
          "MuxType": {}
        },
        "Content": {
          "State": {},
          "MuxType": {}
        }
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MediaCapturePipeline|object|false|none|none|

<h2 id="tocS_GetMeetingResponse">GetMeetingResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetmeetingresponse"></a>
<a id="schema_GetMeetingResponse"></a>
<a id="tocSgetmeetingresponse"></a>
<a id="tocsgetmeetingresponse"></a>

```json
{
  "Meeting": {
    "MeetingId": {},
    "ExternalMeetingId": {},
    "MediaPlacement": {
      "AudioHostUrl": {},
      "AudioFallbackUrl": {},
      "ScreenDataUrl": {},
      "ScreenSharingUrl": {},
      "ScreenViewingUrl": {},
      "SignalingUrl": {},
      "TurnControlUrl": {},
      "EventIngestionUrl": {}
    },
    "MediaRegion": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Meeting|object|false|none|none|

<h2 id="tocS_GetMessagingSessionEndpointResponse">GetMessagingSessionEndpointResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetmessagingsessionendpointresponse"></a>
<a id="schema_GetMessagingSessionEndpointResponse"></a>
<a id="tocSgetmessagingsessionendpointresponse"></a>
<a id="tocsgetmessagingsessionendpointresponse"></a>

```json
{
  "Endpoint": {
    "Url": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Endpoint|object|false|none|none|

<h2 id="tocS_GetPhoneNumberResponse">GetPhoneNumberResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetphonenumberresponse"></a>
<a id="schema_GetPhoneNumberResponse"></a>
<a id="tocSgetphonenumberresponse"></a>
<a id="tocsgetphonenumberresponse"></a>

```json
{
  "PhoneNumber": {
    "PhoneNumberId": {},
    "E164PhoneNumber": {},
    "Country": {},
    "Type": {},
    "ProductType": {},
    "Status": {},
    "Capabilities": {
      "InboundCall": {},
      "OutboundCall": {},
      "InboundSMS": {},
      "OutboundSMS": {},
      "InboundMMS": {},
      "OutboundMMS": {}
    },
    "Associations": {},
    "CallingName": {},
    "CallingNameStatus": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {},
    "DeletionTimestamp": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PhoneNumber|object|false|none|none|

<h2 id="tocS_GetPhoneNumberOrderResponse">GetPhoneNumberOrderResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetphonenumberorderresponse"></a>
<a id="schema_GetPhoneNumberOrderResponse"></a>
<a id="tocSgetphonenumberorderresponse"></a>
<a id="tocsgetphonenumberorderresponse"></a>

```json
{
  "PhoneNumberOrder": {
    "PhoneNumberOrderId": {},
    "ProductType": {},
    "Status": {},
    "OrderedPhoneNumbers": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PhoneNumberOrder|object|false|none|none|

<h2 id="tocS_GetPhoneNumberSettingsResponse">GetPhoneNumberSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetphonenumbersettingsresponse"></a>
<a id="schema_GetPhoneNumberSettingsResponse"></a>
<a id="tocSgetphonenumbersettingsresponse"></a>
<a id="tocsgetphonenumbersettingsresponse"></a>

```json
{
  "CallingName": {},
  "CallingNameUpdatedTimestamp": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CallingName|object|false|none|none|
|CallingNameUpdatedTimestamp|object|false|none|none|

<h2 id="tocS_GetProxySessionResponse">GetProxySessionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetproxysessionresponse"></a>
<a id="schema_GetProxySessionResponse"></a>
<a id="tocSgetproxysessionresponse"></a>
<a id="tocsgetproxysessionresponse"></a>

```json
{
  "ProxySession": {
    "VoiceConnectorId": {},
    "ProxySessionId": {},
    "Name": {},
    "Status": {},
    "ExpiryMinutes": {},
    "Capabilities": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {},
    "EndedTimestamp": {},
    "Participants": {},
    "NumberSelectionBehavior": {},
    "GeoMatchLevel": {},
    "GeoMatchParams": {
      "Country": {},
      "AreaCode": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProxySession|object|false|none|none|

<h2 id="tocS_GetRetentionSettingsResponse">GetRetentionSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetretentionsettingsresponse"></a>
<a id="schema_GetRetentionSettingsResponse"></a>
<a id="tocSgetretentionsettingsresponse"></a>
<a id="tocsgetretentionsettingsresponse"></a>

```json
{
  "RetentionSettings": {
    "RoomRetentionSettings": {
      "RetentionDays": {}
    },
    "ConversationRetentionSettings": {
      "RetentionDays": {}
    }
  },
  "InitiateDeletionTimestamp": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RetentionSettings|object|false|none|none|
|InitiateDeletionTimestamp|object|false|none|none|

<h2 id="tocS_GetRoomResponse">GetRoomResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetroomresponse"></a>
<a id="schema_GetRoomResponse"></a>
<a id="tocSgetroomresponse"></a>
<a id="tocsgetroomresponse"></a>

```json
{
  "Room": {
    "RoomId": {},
    "Name": {},
    "AccountId": {},
    "CreatedBy": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Room|object|false|none|none|

<h2 id="tocS_GetSipMediaApplicationResponse">GetSipMediaApplicationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsipmediaapplicationresponse"></a>
<a id="schema_GetSipMediaApplicationResponse"></a>
<a id="tocSgetsipmediaapplicationresponse"></a>
<a id="tocsgetsipmediaapplicationresponse"></a>

```json
{
  "SipMediaApplication": {
    "SipMediaApplicationId": {},
    "AwsRegion": {},
    "Name": {},
    "Endpoints": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SipMediaApplication|object|false|none|none|

<h2 id="tocS_GetSipMediaApplicationLoggingConfigurationResponse">GetSipMediaApplicationLoggingConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsipmediaapplicationloggingconfigurationresponse"></a>
<a id="schema_GetSipMediaApplicationLoggingConfigurationResponse"></a>
<a id="tocSgetsipmediaapplicationloggingconfigurationresponse"></a>
<a id="tocsgetsipmediaapplicationloggingconfigurationresponse"></a>

```json
{
  "SipMediaApplicationLoggingConfiguration": {
    "EnableSipMediaApplicationMessageLogs": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SipMediaApplicationLoggingConfiguration|object|false|none|none|

<h2 id="tocS_GetSipRuleResponse">GetSipRuleResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsipruleresponse"></a>
<a id="schema_GetSipRuleResponse"></a>
<a id="tocSgetsipruleresponse"></a>
<a id="tocsgetsipruleresponse"></a>

```json
{
  "SipRule": {
    "SipRuleId": {},
    "Name": {},
    "Disabled": {},
    "TriggerType": {},
    "TriggerValue": {},
    "TargetApplications": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SipRule|object|false|none|none|

<h2 id="tocS_GetUserResponse">GetUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetuserresponse"></a>
<a id="schema_GetUserResponse"></a>
<a id="tocSgetuserresponse"></a>
<a id="tocsgetuserresponse"></a>

```json
{
  "User": {
    "UserId": {},
    "AccountId": {},
    "PrimaryEmail": {},
    "PrimaryProvisionedNumber": {},
    "DisplayName": {},
    "LicenseType": {},
    "UserType": {},
    "UserRegistrationStatus": {},
    "UserInvitationStatus": {},
    "RegisteredOn": {},
    "InvitedOn": {},
    "AlexaForBusinessMetadata": {
      "IsAlexaForBusinessEnabled": {},
      "AlexaForBusinessRoomArn": {}
    },
    "PersonalPIN": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|User|object|false|none|none|

<h2 id="tocS_GetUserSettingsResponse">GetUserSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetusersettingsresponse"></a>
<a id="schema_GetUserSettingsResponse"></a>
<a id="tocSgetusersettingsresponse"></a>
<a id="tocsgetusersettingsresponse"></a>

```json
{
  "UserSettings": {
    "Telephony": {
      "InboundCalling": {},
      "OutboundCalling": {},
      "SMS": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserSettings|object|false|none|none|

<h2 id="tocS_GetVoiceConnectorResponse">GetVoiceConnectorResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetvoiceconnectorresponse"></a>
<a id="schema_GetVoiceConnectorResponse"></a>
<a id="tocSgetvoiceconnectorresponse"></a>
<a id="tocsgetvoiceconnectorresponse"></a>

```json
{
  "VoiceConnector": {
    "VoiceConnectorId": {},
    "AwsRegion": {},
    "Name": {},
    "OutboundHostName": {},
    "RequireEncryption": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {},
    "VoiceConnectorArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VoiceConnector|object|false|none|none|

<h2 id="tocS_GetVoiceConnectorEmergencyCallingConfigurationResponse">GetVoiceConnectorEmergencyCallingConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetvoiceconnectoremergencycallingconfigurationresponse"></a>
<a id="schema_GetVoiceConnectorEmergencyCallingConfigurationResponse"></a>
<a id="tocSgetvoiceconnectoremergencycallingconfigurationresponse"></a>
<a id="tocsgetvoiceconnectoremergencycallingconfigurationresponse"></a>

```json
{
  "EmergencyCallingConfiguration": {
    "DNIS": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EmergencyCallingConfiguration|object|false|none|none|

<h2 id="tocS_GetVoiceConnectorGroupResponse">GetVoiceConnectorGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetvoiceconnectorgroupresponse"></a>
<a id="schema_GetVoiceConnectorGroupResponse"></a>
<a id="tocSgetvoiceconnectorgroupresponse"></a>
<a id="tocsgetvoiceconnectorgroupresponse"></a>

```json
{
  "VoiceConnectorGroup": {
    "VoiceConnectorGroupId": {},
    "Name": {},
    "VoiceConnectorItems": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {},
    "VoiceConnectorGroupArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VoiceConnectorGroup|object|false|none|none|

<h2 id="tocS_GetVoiceConnectorLoggingConfigurationResponse">GetVoiceConnectorLoggingConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetvoiceconnectorloggingconfigurationresponse"></a>
<a id="schema_GetVoiceConnectorLoggingConfigurationResponse"></a>
<a id="tocSgetvoiceconnectorloggingconfigurationresponse"></a>
<a id="tocsgetvoiceconnectorloggingconfigurationresponse"></a>

```json
{
  "LoggingConfiguration": {
    "EnableSIPLogs": {},
    "EnableMediaMetricLogs": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoggingConfiguration|object|false|none|none|

<h2 id="tocS_GetVoiceConnectorOriginationResponse">GetVoiceConnectorOriginationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetvoiceconnectororiginationresponse"></a>
<a id="schema_GetVoiceConnectorOriginationResponse"></a>
<a id="tocSgetvoiceconnectororiginationresponse"></a>
<a id="tocsgetvoiceconnectororiginationresponse"></a>

```json
{
  "Origination": {
    "Routes": {},
    "Disabled": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Origination|object|false|none|none|

<h2 id="tocS_GetVoiceConnectorProxyResponse">GetVoiceConnectorProxyResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetvoiceconnectorproxyresponse"></a>
<a id="schema_GetVoiceConnectorProxyResponse"></a>
<a id="tocSgetvoiceconnectorproxyresponse"></a>
<a id="tocsgetvoiceconnectorproxyresponse"></a>

```json
{
  "Proxy": {
    "DefaultSessionExpiryMinutes": {},
    "Disabled": {},
    "FallBackPhoneNumber": {},
    "PhoneNumberCountries": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Proxy|object|false|none|none|

<h2 id="tocS_GetVoiceConnectorStreamingConfigurationResponse">GetVoiceConnectorStreamingConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetvoiceconnectorstreamingconfigurationresponse"></a>
<a id="schema_GetVoiceConnectorStreamingConfigurationResponse"></a>
<a id="tocSgetvoiceconnectorstreamingconfigurationresponse"></a>
<a id="tocsgetvoiceconnectorstreamingconfigurationresponse"></a>

```json
{
  "StreamingConfiguration": {
    "DataRetentionInHours": {},
    "Disabled": {},
    "StreamingNotificationTargets": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamingConfiguration|object|false|none|none|

<h2 id="tocS_GetVoiceConnectorTerminationResponse">GetVoiceConnectorTerminationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetvoiceconnectorterminationresponse"></a>
<a id="schema_GetVoiceConnectorTerminationResponse"></a>
<a id="tocSgetvoiceconnectorterminationresponse"></a>
<a id="tocsgetvoiceconnectorterminationresponse"></a>

```json
{
  "Termination": {
    "CpsLimit": {},
    "DefaultPhoneNumber": {},
    "CallingRegions": {},
    "CidrAllowedList": {},
    "Disabled": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Termination|object|false|none|none|

<h2 id="tocS_GetVoiceConnectorTerminationHealthResponse">GetVoiceConnectorTerminationHealthResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetvoiceconnectorterminationhealthresponse"></a>
<a id="schema_GetVoiceConnectorTerminationHealthResponse"></a>
<a id="tocSgetvoiceconnectorterminationhealthresponse"></a>
<a id="tocsgetvoiceconnectorterminationhealthresponse"></a>

```json
{
  "TerminationHealth": {
    "Timestamp": {},
    "Source": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TerminationHealth|object|false|none|none|

<h2 id="tocS_InviteUsersResponse">InviteUsersResponse</h2>
<!-- backwards compatibility -->
<a id="schemainviteusersresponse"></a>
<a id="schema_InviteUsersResponse"></a>
<a id="tocSinviteusersresponse"></a>
<a id="tocsinviteusersresponse"></a>

```json
{
  "Invites": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Invites|object|false|none|none|

<h2 id="tocS_EmailAddress">EmailAddress</h2>
<!-- backwards compatibility -->
<a id="schemaemailaddress"></a>
<a id="schema_EmailAddress"></a>
<a id="tocSemailaddress"></a>
<a id="tocsemailaddress"></a>

```json
"password"
```

<h2 id="tocS_ListAccountsResponse">ListAccountsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistaccountsresponse"></a>
<a id="schema_ListAccountsResponse"></a>
<a id="tocSlistaccountsresponse"></a>
<a id="tocslistaccountsresponse"></a>

```json
{
  "Accounts": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Accounts|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListAppInstanceAdminsResponse">ListAppInstanceAdminsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistappinstanceadminsresponse"></a>
<a id="schema_ListAppInstanceAdminsResponse"></a>
<a id="tocSlistappinstanceadminsresponse"></a>
<a id="tocslistappinstanceadminsresponse"></a>

```json
{
  "AppInstanceArn": {},
  "AppInstanceAdmins": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppInstanceArn|object|false|none|none|
|AppInstanceAdmins|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListAppInstanceUsersResponse">ListAppInstanceUsersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistappinstanceusersresponse"></a>
<a id="schema_ListAppInstanceUsersResponse"></a>
<a id="tocSlistappinstanceusersresponse"></a>
<a id="tocslistappinstanceusersresponse"></a>

```json
{
  "AppInstanceArn": {},
  "AppInstanceUsers": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppInstanceArn|object|false|none|none|
|AppInstanceUsers|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListAppInstancesResponse">ListAppInstancesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistappinstancesresponse"></a>
<a id="schema_ListAppInstancesResponse"></a>
<a id="tocSlistappinstancesresponse"></a>
<a id="tocslistappinstancesresponse"></a>

```json
{
  "AppInstances": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppInstances|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListAttendeeTagsResponse">ListAttendeeTagsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistattendeetagsresponse"></a>
<a id="schema_ListAttendeeTagsResponse"></a>
<a id="tocSlistattendeetagsresponse"></a>
<a id="tocslistattendeetagsresponse"></a>

```json
{
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|

<h2 id="tocS_ListAttendeesResponse">ListAttendeesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistattendeesresponse"></a>
<a id="schema_ListAttendeesResponse"></a>
<a id="tocSlistattendeesresponse"></a>
<a id="tocslistattendeesresponse"></a>

```json
{
  "Attendees": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attendees|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListBotsResponse">ListBotsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistbotsresponse"></a>
<a id="schema_ListBotsResponse"></a>
<a id="tocSlistbotsresponse"></a>
<a id="tocslistbotsresponse"></a>

```json
{
  "Bots": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bots|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListChannelBansResponse">ListChannelBansResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistchannelbansresponse"></a>
<a id="schema_ListChannelBansResponse"></a>
<a id="tocSlistchannelbansresponse"></a>
<a id="tocslistchannelbansresponse"></a>

```json
{
  "ChannelArn": {},
  "NextToken": {},
  "ChannelBans": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelArn|object|false|none|none|
|NextToken|object|false|none|none|
|ChannelBans|object|false|none|none|

<h2 id="tocS_ListChannelMembershipsResponse">ListChannelMembershipsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistchannelmembershipsresponse"></a>
<a id="schema_ListChannelMembershipsResponse"></a>
<a id="tocSlistchannelmembershipsresponse"></a>
<a id="tocslistchannelmembershipsresponse"></a>

```json
{
  "ChannelArn": {},
  "ChannelMemberships": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelArn|object|false|none|none|
|ChannelMemberships|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListChannelMembershipsForAppInstanceUserResponse">ListChannelMembershipsForAppInstanceUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistchannelmembershipsforappinstanceuserresponse"></a>
<a id="schema_ListChannelMembershipsForAppInstanceUserResponse"></a>
<a id="tocSlistchannelmembershipsforappinstanceuserresponse"></a>
<a id="tocslistchannelmembershipsforappinstanceuserresponse"></a>

```json
{
  "ChannelMemberships": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelMemberships|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListChannelMessagesResponse">ListChannelMessagesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistchannelmessagesresponse"></a>
<a id="schema_ListChannelMessagesResponse"></a>
<a id="tocSlistchannelmessagesresponse"></a>
<a id="tocslistchannelmessagesresponse"></a>

```json
{
  "ChannelArn": {},
  "NextToken": {},
  "ChannelMessages": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelArn|object|false|none|none|
|NextToken|object|false|none|none|
|ChannelMessages|object|false|none|none|

<h2 id="tocS_ListChannelModeratorsResponse">ListChannelModeratorsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistchannelmoderatorsresponse"></a>
<a id="schema_ListChannelModeratorsResponse"></a>
<a id="tocSlistchannelmoderatorsresponse"></a>
<a id="tocslistchannelmoderatorsresponse"></a>

```json
{
  "ChannelArn": {},
  "NextToken": {},
  "ChannelModerators": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelArn|object|false|none|none|
|NextToken|object|false|none|none|
|ChannelModerators|object|false|none|none|

<h2 id="tocS_ListChannelsResponse">ListChannelsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistchannelsresponse"></a>
<a id="schema_ListChannelsResponse"></a>
<a id="tocSlistchannelsresponse"></a>
<a id="tocslistchannelsresponse"></a>

```json
{
  "Channels": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Channels|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListChannelsModeratedByAppInstanceUserResponse">ListChannelsModeratedByAppInstanceUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistchannelsmoderatedbyappinstanceuserresponse"></a>
<a id="schema_ListChannelsModeratedByAppInstanceUserResponse"></a>
<a id="tocSlistchannelsmoderatedbyappinstanceuserresponse"></a>
<a id="tocslistchannelsmoderatedbyappinstanceuserresponse"></a>

```json
{
  "Channels": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Channels|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListMediaCapturePipelinesResponse">ListMediaCapturePipelinesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmediacapturepipelinesresponse"></a>
<a id="schema_ListMediaCapturePipelinesResponse"></a>
<a id="tocSlistmediacapturepipelinesresponse"></a>
<a id="tocslistmediacapturepipelinesresponse"></a>

```json
{
  "MediaCapturePipelines": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MediaCapturePipelines|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListMeetingTagsResponse">ListMeetingTagsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmeetingtagsresponse"></a>
<a id="schema_ListMeetingTagsResponse"></a>
<a id="tocSlistmeetingtagsresponse"></a>
<a id="tocslistmeetingtagsresponse"></a>

```json
{
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|

<h2 id="tocS_ListMeetingsResponse">ListMeetingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmeetingsresponse"></a>
<a id="schema_ListMeetingsResponse"></a>
<a id="tocSlistmeetingsresponse"></a>
<a id="tocslistmeetingsresponse"></a>

```json
{
  "Meetings": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Meetings|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListPhoneNumberOrdersResponse">ListPhoneNumberOrdersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistphonenumberordersresponse"></a>
<a id="schema_ListPhoneNumberOrdersResponse"></a>
<a id="tocSlistphonenumberordersresponse"></a>
<a id="tocslistphonenumberordersresponse"></a>

```json
{
  "PhoneNumberOrders": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PhoneNumberOrders|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListPhoneNumbersResponse">ListPhoneNumbersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistphonenumbersresponse"></a>
<a id="schema_ListPhoneNumbersResponse"></a>
<a id="tocSlistphonenumbersresponse"></a>
<a id="tocslistphonenumbersresponse"></a>

```json
{
  "PhoneNumbers": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PhoneNumbers|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListProxySessionsResponse">ListProxySessionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistproxysessionsresponse"></a>
<a id="schema_ListProxySessionsResponse"></a>
<a id="tocSlistproxysessionsresponse"></a>
<a id="tocslistproxysessionsresponse"></a>

```json
{
  "ProxySessions": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProxySessions|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListRoomMembershipsResponse">ListRoomMembershipsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistroommembershipsresponse"></a>
<a id="schema_ListRoomMembershipsResponse"></a>
<a id="tocSlistroommembershipsresponse"></a>
<a id="tocslistroommembershipsresponse"></a>

```json
{
  "RoomMemberships": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoomMemberships|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListRoomsResponse">ListRoomsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistroomsresponse"></a>
<a id="schema_ListRoomsResponse"></a>
<a id="tocSlistroomsresponse"></a>
<a id="tocslistroomsresponse"></a>

```json
{
  "Rooms": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Rooms|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListSipMediaApplicationsResponse">ListSipMediaApplicationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsipmediaapplicationsresponse"></a>
<a id="schema_ListSipMediaApplicationsResponse"></a>
<a id="tocSlistsipmediaapplicationsresponse"></a>
<a id="tocslistsipmediaapplicationsresponse"></a>

```json
{
  "SipMediaApplications": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SipMediaApplications|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListSipRulesResponse">ListSipRulesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsiprulesresponse"></a>
<a id="schema_ListSipRulesResponse"></a>
<a id="tocSlistsiprulesresponse"></a>
<a id="tocslistsiprulesresponse"></a>

```json
{
  "SipRules": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SipRules|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListSupportedPhoneNumberCountriesResponse">ListSupportedPhoneNumberCountriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsupportedphonenumbercountriesresponse"></a>
<a id="schema_ListSupportedPhoneNumberCountriesResponse"></a>
<a id="tocSlistsupportedphonenumbercountriesresponse"></a>
<a id="tocslistsupportedphonenumbercountriesresponse"></a>

```json
{
  "PhoneNumberCountries": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PhoneNumberCountries|object|false|none|none|

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

<h2 id="tocS_ListUsersResponse">ListUsersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistusersresponse"></a>
<a id="schema_ListUsersResponse"></a>
<a id="tocSlistusersresponse"></a>
<a id="tocslistusersresponse"></a>

```json
{
  "Users": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Users|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListVoiceConnectorGroupsResponse">ListVoiceConnectorGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistvoiceconnectorgroupsresponse"></a>
<a id="schema_ListVoiceConnectorGroupsResponse"></a>
<a id="tocSlistvoiceconnectorgroupsresponse"></a>
<a id="tocslistvoiceconnectorgroupsresponse"></a>

```json
{
  "VoiceConnectorGroups": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VoiceConnectorGroups|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListVoiceConnectorTerminationCredentialsResponse">ListVoiceConnectorTerminationCredentialsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistvoiceconnectorterminationcredentialsresponse"></a>
<a id="schema_ListVoiceConnectorTerminationCredentialsResponse"></a>
<a id="tocSlistvoiceconnectorterminationcredentialsresponse"></a>
<a id="tocslistvoiceconnectorterminationcredentialsresponse"></a>

```json
{
  "Usernames": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Usernames|object|false|none|none|

<h2 id="tocS_ListVoiceConnectorsResponse">ListVoiceConnectorsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistvoiceconnectorsresponse"></a>
<a id="schema_ListVoiceConnectorsResponse"></a>
<a id="tocSlistvoiceconnectorsresponse"></a>
<a id="tocslistvoiceconnectorsresponse"></a>

```json
{
  "VoiceConnectors": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VoiceConnectors|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_LogoutUserResponse">LogoutUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemalogoutuserresponse"></a>
<a id="schema_LogoutUserResponse"></a>
<a id="tocSlogoutuserresponse"></a>
<a id="tocslogoutuserresponse"></a>

```json
{}
```

<h2 id="tocS_PutAppInstanceRetentionSettingsResponse">PutAppInstanceRetentionSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputappinstanceretentionsettingsresponse"></a>
<a id="schema_PutAppInstanceRetentionSettingsResponse"></a>
<a id="tocSputappinstanceretentionsettingsresponse"></a>
<a id="tocsputappinstanceretentionsettingsresponse"></a>

```json
{
  "AppInstanceRetentionSettings": {
    "ChannelRetentionSettings": {
      "RetentionDays": {}
    }
  },
  "InitiateDeletionTimestamp": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppInstanceRetentionSettings|object|false|none|none|
|InitiateDeletionTimestamp|object|false|none|none|

<h2 id="tocS_ChannelRetentionSettings">ChannelRetentionSettings</h2>
<!-- backwards compatibility -->
<a id="schemachannelretentionsettings"></a>
<a id="schema_ChannelRetentionSettings"></a>
<a id="tocSchannelretentionsettings"></a>
<a id="tocschannelretentionsettings"></a>

```json
{
  "RetentionDays": {}
}
```

The details of the retention settings for a channel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RetentionDays|object|false|none|none|

<h2 id="tocS_PutAppInstanceStreamingConfigurationsResponse">PutAppInstanceStreamingConfigurationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputappinstancestreamingconfigurationsresponse"></a>
<a id="schema_PutAppInstanceStreamingConfigurationsResponse"></a>
<a id="tocSputappinstancestreamingconfigurationsresponse"></a>
<a id="tocsputappinstancestreamingconfigurationsresponse"></a>

```json
{
  "AppInstanceStreamingConfigurations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppInstanceStreamingConfigurations|object|false|none|none|

<h2 id="tocS_AppInstanceStreamingConfiguration">AppInstanceStreamingConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaappinstancestreamingconfiguration"></a>
<a id="schema_AppInstanceStreamingConfiguration"></a>
<a id="tocSappinstancestreamingconfiguration"></a>
<a id="tocsappinstancestreamingconfiguration"></a>

```json
{
  "AppInstanceDataType": {},
  "ResourceArn": {}
}
```

The details of the streaming configuration of an <code>AppInstance</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppInstanceDataType|object|true|none|none|
|ResourceArn|object|true|none|none|

<h2 id="tocS_PutEventsConfigurationResponse">PutEventsConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputeventsconfigurationresponse"></a>
<a id="schema_PutEventsConfigurationResponse"></a>
<a id="tocSputeventsconfigurationresponse"></a>
<a id="tocsputeventsconfigurationresponse"></a>

```json
{
  "EventsConfiguration": {
    "BotId": {},
    "OutboundEventsHTTPSEndpoint": {},
    "LambdaFunctionArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventsConfiguration|object|false|none|none|

<h2 id="tocS_PutRetentionSettingsResponse">PutRetentionSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputretentionsettingsresponse"></a>
<a id="schema_PutRetentionSettingsResponse"></a>
<a id="tocSputretentionsettingsresponse"></a>
<a id="tocsputretentionsettingsresponse"></a>

```json
{
  "RetentionSettings": {
    "RoomRetentionSettings": {
      "RetentionDays": {}
    },
    "ConversationRetentionSettings": {
      "RetentionDays": {}
    }
  },
  "InitiateDeletionTimestamp": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RetentionSettings|object|false|none|none|
|InitiateDeletionTimestamp|object|false|none|none|

<h2 id="tocS_RoomRetentionSettings">RoomRetentionSettings</h2>
<!-- backwards compatibility -->
<a id="schemaroomretentionsettings"></a>
<a id="schema_RoomRetentionSettings"></a>
<a id="tocSroomretentionsettings"></a>
<a id="tocsroomretentionsettings"></a>

```json
{
  "RetentionDays": {}
}
```

The retention settings that determine how long to retain chat-room messages for an Amazon Chime Enterprise account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RetentionDays|object|false|none|none|

<h2 id="tocS_ConversationRetentionSettings">ConversationRetentionSettings</h2>
<!-- backwards compatibility -->
<a id="schemaconversationretentionsettings"></a>
<a id="schema_ConversationRetentionSettings"></a>
<a id="tocSconversationretentionsettings"></a>
<a id="tocsconversationretentionsettings"></a>

```json
{
  "RetentionDays": {}
}
```

The retention settings that determine how long to retain conversation messages for an Amazon Chime Enterprise account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RetentionDays|object|false|none|none|

<h2 id="tocS_PutSipMediaApplicationLoggingConfigurationResponse">PutSipMediaApplicationLoggingConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputsipmediaapplicationloggingconfigurationresponse"></a>
<a id="schema_PutSipMediaApplicationLoggingConfigurationResponse"></a>
<a id="tocSputsipmediaapplicationloggingconfigurationresponse"></a>
<a id="tocsputsipmediaapplicationloggingconfigurationresponse"></a>

```json
{
  "SipMediaApplicationLoggingConfiguration": {
    "EnableSipMediaApplicationMessageLogs": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SipMediaApplicationLoggingConfiguration|object|false|none|none|

<h2 id="tocS_Boolean">Boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_Boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
```

<h2 id="tocS_PutVoiceConnectorEmergencyCallingConfigurationResponse">PutVoiceConnectorEmergencyCallingConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputvoiceconnectoremergencycallingconfigurationresponse"></a>
<a id="schema_PutVoiceConnectorEmergencyCallingConfigurationResponse"></a>
<a id="tocSputvoiceconnectoremergencycallingconfigurationresponse"></a>
<a id="tocsputvoiceconnectoremergencycallingconfigurationresponse"></a>

```json
{
  "EmergencyCallingConfiguration": {
    "DNIS": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EmergencyCallingConfiguration|object|false|none|none|

<h2 id="tocS_DNISEmergencyCallingConfigurationList">DNISEmergencyCallingConfigurationList</h2>
<!-- backwards compatibility -->
<a id="schemadnisemergencycallingconfigurationlist"></a>
<a id="schema_DNISEmergencyCallingConfigurationList"></a>
<a id="tocSdnisemergencycallingconfigurationlist"></a>
<a id="tocsdnisemergencycallingconfigurationlist"></a>

```json
[
  {
    "EmergencyPhoneNumber": {},
    "TestPhoneNumber": {},
    "CallingCountry": {}
  }
]
```

<h2 id="tocS_PutVoiceConnectorLoggingConfigurationResponse">PutVoiceConnectorLoggingConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputvoiceconnectorloggingconfigurationresponse"></a>
<a id="schema_PutVoiceConnectorLoggingConfigurationResponse"></a>
<a id="tocSputvoiceconnectorloggingconfigurationresponse"></a>
<a id="tocsputvoiceconnectorloggingconfigurationresponse"></a>

```json
{
  "LoggingConfiguration": {
    "EnableSIPLogs": {},
    "EnableMediaMetricLogs": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoggingConfiguration|object|false|none|none|

<h2 id="tocS_PutVoiceConnectorOriginationResponse">PutVoiceConnectorOriginationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputvoiceconnectororiginationresponse"></a>
<a id="schema_PutVoiceConnectorOriginationResponse"></a>
<a id="tocSputvoiceconnectororiginationresponse"></a>
<a id="tocsputvoiceconnectororiginationresponse"></a>

```json
{
  "Origination": {
    "Routes": {},
    "Disabled": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Origination|object|false|none|none|

<h2 id="tocS_OriginationRouteList">OriginationRouteList</h2>
<!-- backwards compatibility -->
<a id="schemaoriginationroutelist"></a>
<a id="schema_OriginationRouteList"></a>
<a id="tocSoriginationroutelist"></a>
<a id="tocsoriginationroutelist"></a>

```json
[
  {
    "Host": {},
    "Port": {},
    "Protocol": {},
    "Priority": {},
    "Weight": {}
  }
]
```

<h2 id="tocS_PutVoiceConnectorProxyResponse">PutVoiceConnectorProxyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputvoiceconnectorproxyresponse"></a>
<a id="schema_PutVoiceConnectorProxyResponse"></a>
<a id="tocSputvoiceconnectorproxyresponse"></a>
<a id="tocsputvoiceconnectorproxyresponse"></a>

```json
{
  "Proxy": {
    "DefaultSessionExpiryMinutes": {},
    "Disabled": {},
    "FallBackPhoneNumber": {},
    "PhoneNumberCountries": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Proxy|object|false|none|none|

<h2 id="tocS_PutVoiceConnectorStreamingConfigurationResponse">PutVoiceConnectorStreamingConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputvoiceconnectorstreamingconfigurationresponse"></a>
<a id="schema_PutVoiceConnectorStreamingConfigurationResponse"></a>
<a id="tocSputvoiceconnectorstreamingconfigurationresponse"></a>
<a id="tocsputvoiceconnectorstreamingconfigurationresponse"></a>

```json
{
  "StreamingConfiguration": {
    "DataRetentionInHours": {},
    "Disabled": {},
    "StreamingNotificationTargets": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamingConfiguration|object|false|none|none|

<h2 id="tocS_DataRetentionInHours">DataRetentionInHours</h2>
<!-- backwards compatibility -->
<a id="schemadataretentioninhours"></a>
<a id="schema_DataRetentionInHours"></a>
<a id="tocSdataretentioninhours"></a>
<a id="tocsdataretentioninhours"></a>

```json
0
```

<h2 id="tocS_StreamingNotificationTargetList">StreamingNotificationTargetList</h2>
<!-- backwards compatibility -->
<a id="schemastreamingnotificationtargetlist"></a>
<a id="schema_StreamingNotificationTargetList"></a>
<a id="tocSstreamingnotificationtargetlist"></a>
<a id="tocsstreamingnotificationtargetlist"></a>

```json
[
  {
    "NotificationTarget": {}
  }
]
```

<h2 id="tocS_PutVoiceConnectorTerminationResponse">PutVoiceConnectorTerminationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputvoiceconnectorterminationresponse"></a>
<a id="schema_PutVoiceConnectorTerminationResponse"></a>
<a id="tocSputvoiceconnectorterminationresponse"></a>
<a id="tocsputvoiceconnectorterminationresponse"></a>

```json
{
  "Termination": {
    "CpsLimit": {},
    "DefaultPhoneNumber": {},
    "CallingRegions": {},
    "CidrAllowedList": {},
    "Disabled": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Termination|object|false|none|none|

<h2 id="tocS_CpsLimit">CpsLimit</h2>
<!-- backwards compatibility -->
<a id="schemacpslimit"></a>
<a id="schema_CpsLimit"></a>
<a id="tocScpslimit"></a>
<a id="tocscpslimit"></a>

```json
1
```

<h2 id="tocS_CallingRegionList">CallingRegionList</h2>
<!-- backwards compatibility -->
<a id="schemacallingregionlist"></a>
<a id="schema_CallingRegionList"></a>
<a id="tocScallingregionlist"></a>
<a id="tocscallingregionlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_StringList">StringList</h2>
<!-- backwards compatibility -->
<a id="schemastringlist"></a>
<a id="schema_StringList"></a>
<a id="tocSstringlist"></a>
<a id="tocsstringlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Credential">Credential</h2>
<!-- backwards compatibility -->
<a id="schemacredential"></a>
<a id="schema_Credential"></a>
<a id="tocScredential"></a>
<a id="tocscredential"></a>

```json
{
  "Username": {},
  "Password": {}
}
```

The SIP credentials used to authenticate requests to your Amazon Chime Voice Connector.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Username|object|false|none|none|
|Password|object|false|none|none|

<h2 id="tocS_RedactChannelMessageResponse">RedactChannelMessageResponse</h2>
<!-- backwards compatibility -->
<a id="schemaredactchannelmessageresponse"></a>
<a id="schema_RedactChannelMessageResponse"></a>
<a id="tocSredactchannelmessageresponse"></a>
<a id="tocsredactchannelmessageresponse"></a>

```json
{
  "ChannelArn": {},
  "MessageId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelArn|object|false|none|none|
|MessageId|object|false|none|none|

<h2 id="tocS_RedactConversationMessageResponse">RedactConversationMessageResponse</h2>
<!-- backwards compatibility -->
<a id="schemaredactconversationmessageresponse"></a>
<a id="schema_RedactConversationMessageResponse"></a>
<a id="tocSredactconversationmessageresponse"></a>
<a id="tocsredactconversationmessageresponse"></a>

```json
{}
```

<h2 id="tocS_RedactRoomMessageResponse">RedactRoomMessageResponse</h2>
<!-- backwards compatibility -->
<a id="schemaredactroommessageresponse"></a>
<a id="schema_RedactRoomMessageResponse"></a>
<a id="tocSredactroommessageresponse"></a>
<a id="tocsredactroommessageresponse"></a>

```json
{}
```

<h2 id="tocS_RegenerateSecurityTokenResponse">RegenerateSecurityTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemaregeneratesecuritytokenresponse"></a>
<a id="schema_RegenerateSecurityTokenResponse"></a>
<a id="tocSregeneratesecuritytokenresponse"></a>
<a id="tocsregeneratesecuritytokenresponse"></a>

```json
{
  "Bot": {
    "BotId": {},
    "UserId": {},
    "DisplayName": {},
    "BotType": {},
    "Disabled": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {},
    "BotEmail": {},
    "SecurityToken": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bot|object|false|none|none|

<h2 id="tocS_ResetPersonalPINResponse">ResetPersonalPINResponse</h2>
<!-- backwards compatibility -->
<a id="schemaresetpersonalpinresponse"></a>
<a id="schema_ResetPersonalPINResponse"></a>
<a id="tocSresetpersonalpinresponse"></a>
<a id="tocsresetpersonalpinresponse"></a>

```json
{
  "User": {
    "UserId": {},
    "AccountId": {},
    "PrimaryEmail": {},
    "PrimaryProvisionedNumber": {},
    "DisplayName": {},
    "LicenseType": {},
    "UserType": {},
    "UserRegistrationStatus": {},
    "UserInvitationStatus": {},
    "RegisteredOn": {},
    "InvitedOn": {},
    "AlexaForBusinessMetadata": {
      "IsAlexaForBusinessEnabled": {},
      "AlexaForBusinessRoomArn": {}
    },
    "PersonalPIN": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|User|object|false|none|none|

<h2 id="tocS_RestorePhoneNumberResponse">RestorePhoneNumberResponse</h2>
<!-- backwards compatibility -->
<a id="schemarestorephonenumberresponse"></a>
<a id="schema_RestorePhoneNumberResponse"></a>
<a id="tocSrestorephonenumberresponse"></a>
<a id="tocsrestorephonenumberresponse"></a>

```json
{
  "PhoneNumber": {
    "PhoneNumberId": {},
    "E164PhoneNumber": {},
    "Country": {},
    "Type": {},
    "ProductType": {},
    "Status": {},
    "Capabilities": {
      "InboundCall": {},
      "OutboundCall": {},
      "InboundSMS": {},
      "OutboundSMS": {},
      "InboundMMS": {},
      "OutboundMMS": {}
    },
    "Associations": {},
    "CallingName": {},
    "CallingNameStatus": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {},
    "DeletionTimestamp": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PhoneNumber|object|false|none|none|

<h2 id="tocS_SearchAvailablePhoneNumbersResponse">SearchAvailablePhoneNumbersResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchavailablephonenumbersresponse"></a>
<a id="schema_SearchAvailablePhoneNumbersResponse"></a>
<a id="tocSsearchavailablephonenumbersresponse"></a>
<a id="tocssearchavailablephonenumbersresponse"></a>

```json
{
  "E164PhoneNumbers": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|E164PhoneNumbers|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_SendChannelMessageResponse">SendChannelMessageResponse</h2>
<!-- backwards compatibility -->
<a id="schemasendchannelmessageresponse"></a>
<a id="schema_SendChannelMessageResponse"></a>
<a id="tocSsendchannelmessageresponse"></a>
<a id="tocssendchannelmessageresponse"></a>

```json
{
  "ChannelArn": {},
  "MessageId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelArn|object|false|none|none|
|MessageId|object|false|none|none|

<h2 id="tocS_StartMeetingTranscriptionResponse">StartMeetingTranscriptionResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartmeetingtranscriptionresponse"></a>
<a id="schema_StartMeetingTranscriptionResponse"></a>
<a id="tocSstartmeetingtranscriptionresponse"></a>
<a id="tocsstartmeetingtranscriptionresponse"></a>

```json
{}
```

<h2 id="tocS_EngineTranscribeSettings">EngineTranscribeSettings</h2>
<!-- backwards compatibility -->
<a id="schemaenginetranscribesettings"></a>
<a id="schema_EngineTranscribeSettings"></a>
<a id="tocSenginetranscribesettings"></a>
<a id="tocsenginetranscribesettings"></a>

```json
{
  "LanguageCode": {},
  "VocabularyFilterMethod": {},
  "VocabularyFilterName": {},
  "VocabularyName": {},
  "Region": {},
  "EnablePartialResultsStabilization": {},
  "PartialResultsStability": {},
  "ContentIdentificationType": {},
  "ContentRedactionType": {},
  "PiiEntityTypes": {},
  "LanguageModelName": {},
  "IdentifyLanguage": {},
  "LanguageOptions": {},
  "PreferredLanguage": {},
  "VocabularyNames": {},
  "VocabularyFilterNames": {}
}
```

<p>Settings specific for Amazon Transcribe as the live transcription engine.</p> <p>If you specify an invalid combination of parameters, a <code>TranscriptFailed</code> event will be sent with the contents of the <code>BadRequestException</code> generated by Amazon Transcribe. For more information on each parameter and which combinations are valid, refer to the <a href="https://docs.aws.amazon.com/transcribe/latest/APIReference/API_streaming_StartStreamTranscription.html">StartStreamTranscription</a> API in the <i>Amazon Transcribe Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LanguageCode|object|false|none|none|
|VocabularyFilterMethod|object|false|none|none|
|VocabularyFilterName|object|false|none|none|
|VocabularyName|object|false|none|none|
|Region|object|false|none|none|
|EnablePartialResultsStabilization|object|false|none|none|
|PartialResultsStability|object|false|none|none|
|ContentIdentificationType|object|false|none|none|
|ContentRedactionType|object|false|none|none|
|PiiEntityTypes|object|false|none|none|
|LanguageModelName|object|false|none|none|
|IdentifyLanguage|object|false|none|none|
|LanguageOptions|object|false|none|none|
|PreferredLanguage|object|false|none|none|
|VocabularyNames|object|false|none|none|
|VocabularyFilterNames|object|false|none|none|

<h2 id="tocS_EngineTranscribeMedicalSettings">EngineTranscribeMedicalSettings</h2>
<!-- backwards compatibility -->
<a id="schemaenginetranscribemedicalsettings"></a>
<a id="schema_EngineTranscribeMedicalSettings"></a>
<a id="tocSenginetranscribemedicalsettings"></a>
<a id="tocsenginetranscribemedicalsettings"></a>

```json
{
  "LanguageCode": {},
  "Specialty": {},
  "Type": {},
  "VocabularyName": {},
  "Region": {},
  "ContentIdentificationType": {}
}
```

Settings specific to the Amazon Transcribe Medical engine.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LanguageCode|object|true|none|none|
|Specialty|object|true|none|none|
|Type|object|true|none|none|
|VocabularyName|object|false|none|none|
|Region|object|false|none|none|
|ContentIdentificationType|object|false|none|none|

<h2 id="tocS_StopMeetingTranscriptionResponse">StopMeetingTranscriptionResponse</h2>
<!-- backwards compatibility -->
<a id="schemastopmeetingtranscriptionresponse"></a>
<a id="schema_StopMeetingTranscriptionResponse"></a>
<a id="tocSstopmeetingtranscriptionresponse"></a>
<a id="tocsstopmeetingtranscriptionresponse"></a>

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
"password"
```

<h2 id="tocS_UpdateAccountResponse">UpdateAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateaccountresponse"></a>
<a id="schema_UpdateAccountResponse"></a>
<a id="tocSupdateaccountresponse"></a>
<a id="tocsupdateaccountresponse"></a>

```json
{
  "Account": {
    "AwsAccountId": {},
    "AccountId": {},
    "Name": {},
    "AccountType": {},
    "CreatedTimestamp": {},
    "DefaultLicense": {},
    "SupportedLicenses": {},
    "AccountStatus": {},
    "SigninDelegateGroups": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Account|object|false|none|none|

<h2 id="tocS_UpdateAccountSettingsResponse">UpdateAccountSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateaccountsettingsresponse"></a>
<a id="schema_UpdateAccountSettingsResponse"></a>
<a id="tocSupdateaccountsettingsresponse"></a>
<a id="tocsupdateaccountsettingsresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateAppInstanceResponse">UpdateAppInstanceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateappinstanceresponse"></a>
<a id="schema_UpdateAppInstanceResponse"></a>
<a id="tocSupdateappinstanceresponse"></a>
<a id="tocsupdateappinstanceresponse"></a>

```json
{
  "AppInstanceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppInstanceArn|object|false|none|none|

<h2 id="tocS_UpdateAppInstanceUserResponse">UpdateAppInstanceUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateappinstanceuserresponse"></a>
<a id="schema_UpdateAppInstanceUserResponse"></a>
<a id="tocSupdateappinstanceuserresponse"></a>
<a id="tocsupdateappinstanceuserresponse"></a>

```json
{
  "AppInstanceUserArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppInstanceUserArn|object|false|none|none|

<h2 id="tocS_UpdateBotResponse">UpdateBotResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebotresponse"></a>
<a id="schema_UpdateBotResponse"></a>
<a id="tocSupdatebotresponse"></a>
<a id="tocsupdatebotresponse"></a>

```json
{
  "Bot": {
    "BotId": {},
    "UserId": {},
    "DisplayName": {},
    "BotType": {},
    "Disabled": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {},
    "BotEmail": {},
    "SecurityToken": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bot|object|false|none|none|

<h2 id="tocS_UpdateChannelResponse">UpdateChannelResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatechannelresponse"></a>
<a id="schema_UpdateChannelResponse"></a>
<a id="tocSupdatechannelresponse"></a>
<a id="tocsupdatechannelresponse"></a>

```json
{
  "ChannelArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelArn|object|false|none|none|

<h2 id="tocS_UpdateChannelMessageResponse">UpdateChannelMessageResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatechannelmessageresponse"></a>
<a id="schema_UpdateChannelMessageResponse"></a>
<a id="tocSupdatechannelmessageresponse"></a>
<a id="tocsupdatechannelmessageresponse"></a>

```json
{
  "ChannelArn": {},
  "MessageId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelArn|object|false|none|none|
|MessageId|object|false|none|none|

<h2 id="tocS_UpdateChannelReadMarkerResponse">UpdateChannelReadMarkerResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatechannelreadmarkerresponse"></a>
<a id="schema_UpdateChannelReadMarkerResponse"></a>
<a id="tocSupdatechannelreadmarkerresponse"></a>
<a id="tocsupdatechannelreadmarkerresponse"></a>

```json
{
  "ChannelArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelArn|object|false|none|none|

<h2 id="tocS_UpdatePhoneNumberResponse">UpdatePhoneNumberResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatephonenumberresponse"></a>
<a id="schema_UpdatePhoneNumberResponse"></a>
<a id="tocSupdatephonenumberresponse"></a>
<a id="tocsupdatephonenumberresponse"></a>

```json
{
  "PhoneNumber": {
    "PhoneNumberId": {},
    "E164PhoneNumber": {},
    "Country": {},
    "Type": {},
    "ProductType": {},
    "Status": {},
    "Capabilities": {
      "InboundCall": {},
      "OutboundCall": {},
      "InboundSMS": {},
      "OutboundSMS": {},
      "InboundMMS": {},
      "OutboundMMS": {}
    },
    "Associations": {},
    "CallingName": {},
    "CallingNameStatus": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {},
    "DeletionTimestamp": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PhoneNumber|object|false|none|none|

<h2 id="tocS_UpdateProxySessionResponse">UpdateProxySessionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateproxysessionresponse"></a>
<a id="schema_UpdateProxySessionResponse"></a>
<a id="tocSupdateproxysessionresponse"></a>
<a id="tocsupdateproxysessionresponse"></a>

```json
{
  "ProxySession": {
    "VoiceConnectorId": {},
    "ProxySessionId": {},
    "Name": {},
    "Status": {},
    "ExpiryMinutes": {},
    "Capabilities": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {},
    "EndedTimestamp": {},
    "Participants": {},
    "NumberSelectionBehavior": {},
    "GeoMatchLevel": {},
    "GeoMatchParams": {
      "Country": {},
      "AreaCode": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProxySession|object|false|none|none|

<h2 id="tocS_UpdateRoomResponse">UpdateRoomResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateroomresponse"></a>
<a id="schema_UpdateRoomResponse"></a>
<a id="tocSupdateroomresponse"></a>
<a id="tocsupdateroomresponse"></a>

```json
{
  "Room": {
    "RoomId": {},
    "Name": {},
    "AccountId": {},
    "CreatedBy": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Room|object|false|none|none|

<h2 id="tocS_UpdateRoomMembershipResponse">UpdateRoomMembershipResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateroommembershipresponse"></a>
<a id="schema_UpdateRoomMembershipResponse"></a>
<a id="tocSupdateroommembershipresponse"></a>
<a id="tocsupdateroommembershipresponse"></a>

```json
{
  "RoomMembership": {
    "RoomId": {},
    "Member": {
      "MemberId": {},
      "MemberType": {},
      "Email": {},
      "FullName": {},
      "AccountId": {}
    },
    "Role": {},
    "InvitedBy": {},
    "UpdatedTimestamp": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoomMembership|object|false|none|none|

<h2 id="tocS_UpdateSipMediaApplicationResponse">UpdateSipMediaApplicationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesipmediaapplicationresponse"></a>
<a id="schema_UpdateSipMediaApplicationResponse"></a>
<a id="tocSupdatesipmediaapplicationresponse"></a>
<a id="tocsupdatesipmediaapplicationresponse"></a>

```json
{
  "SipMediaApplication": {
    "SipMediaApplicationId": {},
    "AwsRegion": {},
    "Name": {},
    "Endpoints": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SipMediaApplication|object|false|none|none|

<h2 id="tocS_UpdateSipMediaApplicationCallResponse">UpdateSipMediaApplicationCallResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesipmediaapplicationcallresponse"></a>
<a id="schema_UpdateSipMediaApplicationCallResponse"></a>
<a id="tocSupdatesipmediaapplicationcallresponse"></a>
<a id="tocsupdatesipmediaapplicationcallresponse"></a>

```json
{
  "SipMediaApplicationCall": {
    "TransactionId": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SipMediaApplicationCall|object|false|none|none|

<h2 id="tocS_UpdateSipRuleResponse">UpdateSipRuleResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesipruleresponse"></a>
<a id="schema_UpdateSipRuleResponse"></a>
<a id="tocSupdatesipruleresponse"></a>
<a id="tocsupdatesipruleresponse"></a>

```json
{
  "SipRule": {
    "SipRuleId": {},
    "Name": {},
    "Disabled": {},
    "TriggerType": {},
    "TriggerValue": {},
    "TargetApplications": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SipRule|object|false|none|none|

<h2 id="tocS_UpdateUserResponse">UpdateUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateuserresponse"></a>
<a id="schema_UpdateUserResponse"></a>
<a id="tocSupdateuserresponse"></a>
<a id="tocsupdateuserresponse"></a>

```json
{
  "User": {
    "UserId": {},
    "AccountId": {},
    "PrimaryEmail": {},
    "PrimaryProvisionedNumber": {},
    "DisplayName": {},
    "LicenseType": {},
    "UserType": {},
    "UserRegistrationStatus": {},
    "UserInvitationStatus": {},
    "RegisteredOn": {},
    "InvitedOn": {},
    "AlexaForBusinessMetadata": {
      "IsAlexaForBusinessEnabled": {},
      "AlexaForBusinessRoomArn": {}
    },
    "PersonalPIN": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|User|object|false|none|none|

<h2 id="tocS_TelephonySettings">TelephonySettings</h2>
<!-- backwards compatibility -->
<a id="schematelephonysettings"></a>
<a id="schema_TelephonySettings"></a>
<a id="tocStelephonysettings"></a>
<a id="tocstelephonysettings"></a>

```json
{
  "InboundCalling": {},
  "OutboundCalling": {},
  "SMS": {}
}
```

Settings that allow management of telephony permissions for an Amazon Chime user, such as inbound and outbound calling and text messaging.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InboundCalling|object|true|none|none|
|OutboundCalling|object|true|none|none|
|SMS|object|true|none|none|

<h2 id="tocS_UpdateVoiceConnectorResponse">UpdateVoiceConnectorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatevoiceconnectorresponse"></a>
<a id="schema_UpdateVoiceConnectorResponse"></a>
<a id="tocSupdatevoiceconnectorresponse"></a>
<a id="tocsupdatevoiceconnectorresponse"></a>

```json
{
  "VoiceConnector": {
    "VoiceConnectorId": {},
    "AwsRegion": {},
    "Name": {},
    "OutboundHostName": {},
    "RequireEncryption": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {},
    "VoiceConnectorArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VoiceConnector|object|false|none|none|

<h2 id="tocS_UpdateVoiceConnectorGroupResponse">UpdateVoiceConnectorGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatevoiceconnectorgroupresponse"></a>
<a id="schema_UpdateVoiceConnectorGroupResponse"></a>
<a id="tocSupdatevoiceconnectorgroupresponse"></a>
<a id="tocsupdatevoiceconnectorgroupresponse"></a>

```json
{
  "VoiceConnectorGroup": {
    "VoiceConnectorGroupId": {},
    "Name": {},
    "VoiceConnectorItems": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {},
    "VoiceConnectorGroupArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VoiceConnectorGroup|object|false|none|none|

<h2 id="tocS_ValidateE911AddressResponse">ValidateE911AddressResponse</h2>
<!-- backwards compatibility -->
<a id="schemavalidatee911addressresponse"></a>
<a id="schema_ValidateE911AddressResponse"></a>
<a id="tocSvalidatee911addressresponse"></a>
<a id="tocsvalidatee911addressresponse"></a>

```json
{
  "ValidationResult": {},
  "AddressExternalId": {},
  "Address": {
    "streetName": {},
    "streetSuffix": {},
    "postDirectional": {},
    "preDirectional": {},
    "streetNumber": {},
    "city": {},
    "state": {},
    "postalCode": {},
    "postalCodePlus4": {},
    "country": {}
  },
  "CandidateAddressList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ValidationResult|object|false|none|none|
|AddressExternalId|object|false|none|none|
|Address|object|false|none|none|
|CandidateAddressList|object|false|none|none|

<h2 id="tocS_AccountType">AccountType</h2>
<!-- backwards compatibility -->
<a id="schemaaccounttype"></a>
<a id="schema_AccountType"></a>
<a id="tocSaccounttype"></a>
<a id="tocsaccounttype"></a>

```json
"Team"
```

<h2 id="tocS_Iso8601Timestamp">Iso8601Timestamp</h2>
<!-- backwards compatibility -->
<a id="schemaiso8601timestamp"></a>
<a id="schema_Iso8601Timestamp"></a>
<a id="tocSiso8601timestamp"></a>
<a id="tocsiso8601timestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_License">License</h2>
<!-- backwards compatibility -->
<a id="schemalicense"></a>
<a id="schema_License"></a>
<a id="tocSlicense"></a>
<a id="tocslicense"></a>

```json
"Basic"
```

<h2 id="tocS_LicenseList">LicenseList</h2>
<!-- backwards compatibility -->
<a id="schemalicenselist"></a>
<a id="schema_LicenseList"></a>
<a id="tocSlicenselist"></a>
<a id="tocslicenselist"></a>

```json
[
  "Basic"
]
```

<h2 id="tocS_AccountStatus">AccountStatus</h2>
<!-- backwards compatibility -->
<a id="schemaaccountstatus"></a>
<a id="schema_AccountStatus"></a>
<a id="tocSaccountstatus"></a>
<a id="tocsaccountstatus"></a>

```json
"Suspended"
```

<h2 id="tocS_SigninDelegateGroupList">SigninDelegateGroupList</h2>
<!-- backwards compatibility -->
<a id="schemasignindelegategrouplist"></a>
<a id="schema_SigninDelegateGroupList"></a>
<a id="tocSsignindelegategrouplist"></a>
<a id="tocssignindelegategrouplist"></a>

```json
[
  {
    "GroupName": {}
  }
]
```

<h2 id="tocS_Account">Account</h2>
<!-- backwards compatibility -->
<a id="schemaaccount"></a>
<a id="schema_Account"></a>
<a id="tocSaccount"></a>
<a id="tocsaccount"></a>

```json
{
  "AwsAccountId": {},
  "AccountId": {},
  "Name": {},
  "AccountType": {},
  "CreatedTimestamp": {},
  "DefaultLicense": {},
  "SupportedLicenses": {},
  "AccountStatus": {},
  "SigninDelegateGroups": {}
}
```

The Amazon Chime account details. An AWS account can have multiple Amazon Chime accounts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AwsAccountId|object|true|none|none|
|AccountId|object|true|none|none|
|Name|object|true|none|none|
|AccountType|object|false|none|none|
|CreatedTimestamp|object|false|none|none|
|DefaultLicense|object|false|none|none|
|SupportedLicenses|object|false|none|none|
|AccountStatus|object|false|none|none|
|SigninDelegateGroups|object|false|none|none|

<h2 id="tocS_AccountList">AccountList</h2>
<!-- backwards compatibility -->
<a id="schemaaccountlist"></a>
<a id="schema_AccountList"></a>
<a id="tocSaccountlist"></a>
<a id="tocsaccountlist"></a>

```json
[
  {
    "AwsAccountId": {},
    "AccountId": {},
    "Name": {},
    "AccountType": {},
    "CreatedTimestamp": {},
    "DefaultLicense": {},
    "SupportedLicenses": {},
    "AccountStatus": {},
    "SigninDelegateGroups": {}
  }
]
```

<h2 id="tocS_AccountName">AccountName</h2>
<!-- backwards compatibility -->
<a id="schemaaccountname"></a>
<a id="schema_AccountName"></a>
<a id="tocSaccountname"></a>
<a id="tocsaccountname"></a>

```json
"string"
```

<h2 id="tocS_AccountSettings">AccountSettings</h2>
<!-- backwards compatibility -->
<a id="schemaaccountsettings"></a>
<a id="schema_AccountSettings"></a>
<a id="tocSaccountsettings"></a>
<a id="tocsaccountsettings"></a>

```json
{
  "DisableRemoteControl": {},
  "EnableDialOut": {}
}
```

Settings related to the Amazon Chime account. This includes settings that start or stop remote control of shared screens, or start or stop the dial-out option in the Amazon Chime web application. For more information about these settings, see <a href="https://docs.aws.amazon.com/chime/latest/ag/policies.html">Use the Policies Page</a> in the <i>Amazon Chime Administration Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DisableRemoteControl|object|false|none|none|
|EnableDialOut|object|false|none|none|

<h2 id="tocS_SensitiveNonEmptyString">SensitiveNonEmptyString</h2>
<!-- backwards compatibility -->
<a id="schemasensitivenonemptystring"></a>
<a id="schema_SensitiveNonEmptyString"></a>
<a id="tocSsensitivenonemptystring"></a>
<a id="tocssensitivenonemptystring"></a>

```json
"password"
```

<h2 id="tocS_Address">Address</h2>
<!-- backwards compatibility -->
<a id="schemaaddress"></a>
<a id="schema_Address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>

```json
{
  "streetName": {},
  "streetSuffix": {},
  "postDirectional": {},
  "preDirectional": {},
  "streetNumber": {},
  "city": {},
  "state": {},
  "postalCode": {},
  "postalCodePlus4": {},
  "country": {}
}
```

A validated address.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|streetName|object|false|none|none|
|streetSuffix|object|false|none|none|
|postDirectional|object|false|none|none|
|preDirectional|object|false|none|none|
|streetNumber|object|false|none|none|
|city|object|false|none|none|
|state|object|false|none|none|
|postalCode|object|false|none|none|
|postalCodePlus4|object|false|none|none|
|country|object|false|none|none|

<h2 id="tocS_AlexaForBusinessMetadata">AlexaForBusinessMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaalexaforbusinessmetadata"></a>
<a id="schema_AlexaForBusinessMetadata"></a>
<a id="tocSalexaforbusinessmetadata"></a>
<a id="tocsalexaforbusinessmetadata"></a>

```json
{
  "IsAlexaForBusinessEnabled": {},
  "AlexaForBusinessRoomArn": {}
}
```

The Alexa for Business metadata associated with an Amazon Chime user, used to integrate Alexa for Business with a device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IsAlexaForBusinessEnabled|object|false|none|none|
|AlexaForBusinessRoomArn|object|false|none|none|

<h2 id="tocS_Alpha2CountryCode">Alpha2CountryCode</h2>
<!-- backwards compatibility -->
<a id="schemaalpha2countrycode"></a>
<a id="schema_Alpha2CountryCode"></a>
<a id="tocSalpha2countrycode"></a>
<a id="tocsalpha2countrycode"></a>

```json
"string"
```

<h2 id="tocS_NonEmptyResourceName">NonEmptyResourceName</h2>
<!-- backwards compatibility -->
<a id="schemanonemptyresourcename"></a>
<a id="schema_NonEmptyResourceName"></a>
<a id="tocSnonemptyresourcename"></a>
<a id="tocsnonemptyresourcename"></a>

```json
"password"
```

<h2 id="tocS_Metadata">Metadata</h2>
<!-- backwards compatibility -->
<a id="schemametadata"></a>
<a id="schema_Metadata"></a>
<a id="tocSmetadata"></a>
<a id="tocsmetadata"></a>

```json
"password"
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

<h2 id="tocS_AppInstance">AppInstance</h2>
<!-- backwards compatibility -->
<a id="schemaappinstance"></a>
<a id="schema_AppInstance"></a>
<a id="tocSappinstance"></a>
<a id="tocsappinstance"></a>

```json
{
  "AppInstanceArn": {},
  "Name": {},
  "Metadata": {},
  "CreatedTimestamp": {},
  "LastUpdatedTimestamp": {}
}
```

The details of an <code>AppInstance</code>, an instance of an Amazon Chime SDK messaging application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppInstanceArn|object|false|none|none|
|Name|object|false|none|none|
|Metadata|object|false|none|none|
|CreatedTimestamp|object|false|none|none|
|LastUpdatedTimestamp|object|false|none|none|

<h2 id="tocS_Identity">Identity</h2>
<!-- backwards compatibility -->
<a id="schemaidentity"></a>
<a id="schema_Identity"></a>
<a id="tocSidentity"></a>
<a id="tocsidentity"></a>

```json
{
  "Arn": {},
  "Name": {}
}
```

The details of a user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS_AppInstanceAdmin">AppInstanceAdmin</h2>
<!-- backwards compatibility -->
<a id="schemaappinstanceadmin"></a>
<a id="schema_AppInstanceAdmin"></a>
<a id="tocSappinstanceadmin"></a>
<a id="tocsappinstanceadmin"></a>

```json
{
  "Admin": {
    "Arn": {},
    "Name": {}
  },
  "AppInstanceArn": {},
  "CreatedTimestamp": {}
}
```

The details of an <code>AppInstanceAdmin</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Admin|object|false|none|none|
|AppInstanceArn|object|false|none|none|
|CreatedTimestamp|object|false|none|none|

<h2 id="tocS_AppInstanceAdminSummary">AppInstanceAdminSummary</h2>
<!-- backwards compatibility -->
<a id="schemaappinstanceadminsummary"></a>
<a id="schema_AppInstanceAdminSummary"></a>
<a id="tocSappinstanceadminsummary"></a>
<a id="tocsappinstanceadminsummary"></a>

```json
{
  "Admin": {
    "Arn": {},
    "Name": {}
  }
}
```

Summary of the details of an <code>AppInstanceAdmin</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Admin|object|false|none|none|

<h2 id="tocS_AppInstanceAdminList">AppInstanceAdminList</h2>
<!-- backwards compatibility -->
<a id="schemaappinstanceadminlist"></a>
<a id="schema_AppInstanceAdminList"></a>
<a id="tocSappinstanceadminlist"></a>
<a id="tocsappinstanceadminlist"></a>

```json
[
  {
    "Admin": {
      "Arn": {},
      "Name": {}
    }
  }
]
```

<h2 id="tocS_AppInstanceDataType">AppInstanceDataType</h2>
<!-- backwards compatibility -->
<a id="schemaappinstancedatatype"></a>
<a id="schema_AppInstanceDataType"></a>
<a id="tocSappinstancedatatype"></a>
<a id="tocsappinstancedatatype"></a>

```json
"Channel"
```

<h2 id="tocS_AppInstanceSummary">AppInstanceSummary</h2>
<!-- backwards compatibility -->
<a id="schemaappinstancesummary"></a>
<a id="schema_AppInstanceSummary"></a>
<a id="tocSappinstancesummary"></a>
<a id="tocsappinstancesummary"></a>

```json
{
  "AppInstanceArn": {},
  "Name": {},
  "Metadata": {}
}
```

Summary of the data for an <code>AppInstance</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppInstanceArn|object|false|none|none|
|Name|object|false|none|none|
|Metadata|object|false|none|none|

<h2 id="tocS_AppInstanceList">AppInstanceList</h2>
<!-- backwards compatibility -->
<a id="schemaappinstancelist"></a>
<a id="schema_AppInstanceList"></a>
<a id="tocSappinstancelist"></a>
<a id="tocsappinstancelist"></a>

```json
[
  {
    "AppInstanceArn": {},
    "Name": {},
    "Metadata": {}
  }
]
```

<h2 id="tocS_AppInstanceRetentionSettings">AppInstanceRetentionSettings</h2>
<!-- backwards compatibility -->
<a id="schemaappinstanceretentionsettings"></a>
<a id="schema_AppInstanceRetentionSettings"></a>
<a id="tocSappinstanceretentionsettings"></a>
<a id="tocsappinstanceretentionsettings"></a>

```json
{
  "ChannelRetentionSettings": {
    "RetentionDays": {}
  }
}
```

The details of the data-retention settings for an <code>AppInstance</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelRetentionSettings|object|false|none|none|

<h2 id="tocS_AppInstanceStreamingConfigurationList">AppInstanceStreamingConfigurationList</h2>
<!-- backwards compatibility -->
<a id="schemaappinstancestreamingconfigurationlist"></a>
<a id="schema_AppInstanceStreamingConfigurationList"></a>
<a id="tocSappinstancestreamingconfigurationlist"></a>
<a id="tocsappinstancestreamingconfigurationlist"></a>

```json
[
  {
    "AppInstanceDataType": {},
    "ResourceArn": {}
  }
]
```

<h2 id="tocS_UserName">UserName</h2>
<!-- backwards compatibility -->
<a id="schemausername"></a>
<a id="schema_UserName"></a>
<a id="tocSusername"></a>
<a id="tocsusername"></a>

```json
"password"
```

<h2 id="tocS_AppInstanceUser">AppInstanceUser</h2>
<!-- backwards compatibility -->
<a id="schemaappinstanceuser"></a>
<a id="schema_AppInstanceUser"></a>
<a id="tocSappinstanceuser"></a>
<a id="tocsappinstanceuser"></a>

```json
{
  "AppInstanceUserArn": {},
  "Name": {},
  "CreatedTimestamp": {},
  "Metadata": {},
  "LastUpdatedTimestamp": {}
}
```

The details of an <code>AppInstanceUser</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppInstanceUserArn|object|false|none|none|
|Name|object|false|none|none|
|CreatedTimestamp|object|false|none|none|
|Metadata|object|false|none|none|
|LastUpdatedTimestamp|object|false|none|none|

<h2 id="tocS_AppInstanceUserSummary">AppInstanceUserSummary</h2>
<!-- backwards compatibility -->
<a id="schemaappinstanceusersummary"></a>
<a id="schema_AppInstanceUserSummary"></a>
<a id="tocSappinstanceusersummary"></a>
<a id="tocsappinstanceusersummary"></a>

```json
{
  "AppInstanceUserArn": {},
  "Name": {},
  "Metadata": {}
}
```

Summary of the details of an <code>AppInstanceUser</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppInstanceUserArn|object|false|none|none|
|Name|object|false|none|none|
|Metadata|object|false|none|none|

<h2 id="tocS_AppInstanceUserList">AppInstanceUserList</h2>
<!-- backwards compatibility -->
<a id="schemaappinstanceuserlist"></a>
<a id="schema_AppInstanceUserList"></a>
<a id="tocSappinstanceuserlist"></a>
<a id="tocsappinstanceuserlist"></a>

```json
[
  {
    "AppInstanceUserArn": {},
    "Name": {},
    "Metadata": {}
  }
]
```

<h2 id="tocS_ChannelMembershipType">ChannelMembershipType</h2>
<!-- backwards compatibility -->
<a id="schemachannelmembershiptype"></a>
<a id="schema_ChannelMembershipType"></a>
<a id="tocSchannelmembershiptype"></a>
<a id="tocschannelmembershiptype"></a>

```json
"DEFAULT"
```

<h2 id="tocS_AppInstanceUserMembershipSummary">AppInstanceUserMembershipSummary</h2>
<!-- backwards compatibility -->
<a id="schemaappinstanceusermembershipsummary"></a>
<a id="schema_AppInstanceUserMembershipSummary"></a>
<a id="tocSappinstanceusermembershipsummary"></a>
<a id="tocsappinstanceusermembershipsummary"></a>

```json
{
  "Type": {},
  "ReadMarkerTimestamp": {}
}
```

Summary of the membership details of an <code>AppInstanceUser</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|ReadMarkerTimestamp|object|false|none|none|

<h2 id="tocS_AudioArtifactsConfiguration">AudioArtifactsConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaaudioartifactsconfiguration"></a>
<a id="schema_AudioArtifactsConfiguration"></a>
<a id="tocSaudioartifactsconfiguration"></a>
<a id="tocsaudioartifactsconfiguration"></a>

```json
{
  "MuxType": {}
}
```

The audio artifact configuration object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MuxType|object|true|none|none|

<h2 id="tocS_VideoArtifactsConfiguration">VideoArtifactsConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemavideoartifactsconfiguration"></a>
<a id="schema_VideoArtifactsConfiguration"></a>
<a id="tocSvideoartifactsconfiguration"></a>
<a id="tocsvideoartifactsconfiguration"></a>

```json
{
  "State": {},
  "MuxType": {}
}
```

The video artifact configuration object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|State|object|true|none|none|
|MuxType|object|false|none|none|

<h2 id="tocS_ContentArtifactsConfiguration">ContentArtifactsConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacontentartifactsconfiguration"></a>
<a id="schema_ContentArtifactsConfiguration"></a>
<a id="tocScontentartifactsconfiguration"></a>
<a id="tocscontentartifactsconfiguration"></a>

```json
{
  "State": {},
  "MuxType": {}
}
```

The content artifact object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|State|object|true|none|none|
|MuxType|object|false|none|none|

<h2 id="tocS_ArtifactsState">ArtifactsState</h2>
<!-- backwards compatibility -->
<a id="schemaartifactsstate"></a>
<a id="schema_ArtifactsState"></a>
<a id="tocSartifactsstate"></a>
<a id="tocsartifactsstate"></a>

```json
"Enabled"
```

<h2 id="tocS_AssociatePhoneNumberWithUserRequest">AssociatePhoneNumberWithUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatephonenumberwithuserrequest"></a>
<a id="schema_AssociatePhoneNumberWithUserRequest"></a>
<a id="tocSassociatephonenumberwithuserrequest"></a>
<a id="tocsassociatephonenumberwithuserrequest"></a>

```json
{
  "E164PhoneNumber": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|E164PhoneNumber|object|true|none|none|

<h2 id="tocS_E164PhoneNumberList">E164PhoneNumberList</h2>
<!-- backwards compatibility -->
<a id="schemae164phonenumberlist"></a>
<a id="schema_E164PhoneNumberList"></a>
<a id="tocSe164phonenumberlist"></a>
<a id="tocse164phonenumberlist"></a>

```json
[
  "password"
]
```

<h2 id="tocS_NullableBoolean">NullableBoolean</h2>
<!-- backwards compatibility -->
<a id="schemanullableboolean"></a>
<a id="schema_NullableBoolean"></a>
<a id="tocSnullableboolean"></a>
<a id="tocsnullableboolean"></a>

```json
true
```

<h2 id="tocS_AssociatePhoneNumbersWithVoiceConnectorGroupRequest">AssociatePhoneNumbersWithVoiceConnectorGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatephonenumberswithvoiceconnectorgrouprequest"></a>
<a id="schema_AssociatePhoneNumbersWithVoiceConnectorGroupRequest"></a>
<a id="tocSassociatephonenumberswithvoiceconnectorgrouprequest"></a>
<a id="tocsassociatephonenumberswithvoiceconnectorgrouprequest"></a>

```json
{
  "E164PhoneNumbers": {},
  "ForceAssociate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|E164PhoneNumbers|object|true|none|none|
|ForceAssociate|object|false|none|none|

<h2 id="tocS_PhoneNumberErrorList">PhoneNumberErrorList</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumbererrorlist"></a>
<a id="schema_PhoneNumberErrorList"></a>
<a id="tocSphonenumbererrorlist"></a>
<a id="tocsphonenumbererrorlist"></a>

```json
[
  {
    "PhoneNumberId": {},
    "ErrorCode": {},
    "ErrorMessage": {}
  }
]
```

<h2 id="tocS_AssociatePhoneNumbersWithVoiceConnectorRequest">AssociatePhoneNumbersWithVoiceConnectorRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatephonenumberswithvoiceconnectorrequest"></a>
<a id="schema_AssociatePhoneNumbersWithVoiceConnectorRequest"></a>
<a id="tocSassociatephonenumberswithvoiceconnectorrequest"></a>
<a id="tocsassociatephonenumberswithvoiceconnectorrequest"></a>

```json
{
  "E164PhoneNumbers": {},
  "ForceAssociate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|E164PhoneNumbers|object|true|none|none|
|ForceAssociate|object|false|none|none|

<h2 id="tocS_AssociateSigninDelegateGroupsWithAccountRequest">AssociateSigninDelegateGroupsWithAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatesignindelegategroupswithaccountrequest"></a>
<a id="schema_AssociateSigninDelegateGroupsWithAccountRequest"></a>
<a id="tocSassociatesignindelegategroupswithaccountrequest"></a>
<a id="tocsassociatesignindelegategroupswithaccountrequest"></a>

```json
{
  "SigninDelegateGroups": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SigninDelegateGroups|object|true|none|none|

<h2 id="tocS_ExternalUserIdType">ExternalUserIdType</h2>
<!-- backwards compatibility -->
<a id="schemaexternaluseridtype"></a>
<a id="schema_ExternalUserIdType"></a>
<a id="tocSexternaluseridtype"></a>
<a id="tocsexternaluseridtype"></a>

```json
"password"
```

<h2 id="tocS_GuidString">GuidString</h2>
<!-- backwards compatibility -->
<a id="schemaguidstring"></a>
<a id="schema_GuidString"></a>
<a id="tocSguidstring"></a>
<a id="tocsguidstring"></a>

```json
"string"
```

<h2 id="tocS_JoinTokenString">JoinTokenString</h2>
<!-- backwards compatibility -->
<a id="schemajointokenstring"></a>
<a id="schema_JoinTokenString"></a>
<a id="tocSjointokenstring"></a>
<a id="tocsjointokenstring"></a>

```json
"password"
```

<h2 id="tocS_Attendee">Attendee</h2>
<!-- backwards compatibility -->
<a id="schemaattendee"></a>
<a id="schema_Attendee"></a>
<a id="tocSattendee"></a>
<a id="tocsattendee"></a>

```json
{
  "ExternalUserId": {},
  "AttendeeId": {},
  "JoinToken": {}
}
```

<p> An Amazon Chime SDK meeting attendee. Includes a unique <code>AttendeeId</code> and <code>JoinToken</code> . The <code>JoinToken</code> allows a client to authenticate and join as the specified attendee. The <code>JoinToken</code> expires when the meeting ends or when <a>DeleteAttendee</a> is called. After that, the attendee is unable to join the meeting. </p> <p>We recommend securely transferring each <code>JoinToken</code> from your server application to the client so that no other client has access to the token except for the one authorized to represent the attendee.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExternalUserId|object|false|none|none|
|AttendeeId|object|false|none|none|
|JoinToken|object|false|none|none|

<h2 id="tocS_AttendeeIdList">AttendeeIdList</h2>
<!-- backwards compatibility -->
<a id="schemaattendeeidlist"></a>
<a id="schema_AttendeeIdList"></a>
<a id="tocSattendeeidlist"></a>
<a id="tocsattendeeidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AttendeeList">AttendeeList</h2>
<!-- backwards compatibility -->
<a id="schemaattendeelist"></a>
<a id="schema_AttendeeList"></a>
<a id="tocSattendeelist"></a>
<a id="tocsattendeelist"></a>

```json
[
  {
    "ExternalUserId": {},
    "AttendeeId": {},
    "JoinToken": {}
  }
]
```

<h2 id="tocS_AttendeeTagKeyList">AttendeeTagKeyList</h2>
<!-- backwards compatibility -->
<a id="schemaattendeetagkeylist"></a>
<a id="schema_AttendeeTagKeyList"></a>
<a id="tocSattendeetagkeylist"></a>
<a id="tocsattendeetagkeylist"></a>

```json
[
  "password"
]
```

<h2 id="tocS_AttendeeTagList">AttendeeTagList</h2>
<!-- backwards compatibility -->
<a id="schemaattendeetaglist"></a>
<a id="schema_AttendeeTagList"></a>
<a id="tocSattendeetaglist"></a>
<a id="tocsattendeetaglist"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_AudioMuxType">AudioMuxType</h2>
<!-- backwards compatibility -->
<a id="schemaaudiomuxtype"></a>
<a id="schema_AudioMuxType"></a>
<a id="tocSaudiomuxtype"></a>
<a id="tocsaudiomuxtype"></a>

```json
"AudioOnly"
```

<h2 id="tocS_Members">Members</h2>
<!-- backwards compatibility -->
<a id="schemamembers"></a>
<a id="schema_Members"></a>
<a id="tocSmembers"></a>
<a id="tocsmembers"></a>

```json
[
  {
    "Arn": {},
    "Name": {}
  }
]
```

<h2 id="tocS_BatchChannelMemberships">BatchChannelMemberships</h2>
<!-- backwards compatibility -->
<a id="schemabatchchannelmemberships"></a>
<a id="schema_BatchChannelMemberships"></a>
<a id="tocSbatchchannelmemberships"></a>
<a id="tocsbatchchannelmemberships"></a>

```json
{
  "InvitedBy": {
    "Arn": {},
    "Name": {}
  },
  "Type": {},
  "Members": {},
  "ChannelArn": {}
}
```

The membership information, including member ARNs, the channel ARN, and membership types.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InvitedBy|object|false|none|none|
|Type|object|false|none|none|
|Members|object|false|none|none|
|ChannelArn|object|false|none|none|

<h2 id="tocS_CreateAttendeeError">CreateAttendeeError</h2>
<!-- backwards compatibility -->
<a id="schemacreateattendeeerror"></a>
<a id="schema_CreateAttendeeError"></a>
<a id="tocScreateattendeeerror"></a>
<a id="tocscreateattendeeerror"></a>

```json
{
  "ExternalUserId": {},
  "ErrorCode": {},
  "ErrorMessage": {}
}
```

The list of errors returned when errors are encountered during the BatchCreateAttendee and CreateAttendee actions. This includes external user IDs, error codes, and error messages.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExternalUserId|object|false|none|none|
|ErrorCode|object|false|none|none|
|ErrorMessage|object|false|none|none|

<h2 id="tocS_BatchCreateAttendeeErrorList">BatchCreateAttendeeErrorList</h2>
<!-- backwards compatibility -->
<a id="schemabatchcreateattendeeerrorlist"></a>
<a id="schema_BatchCreateAttendeeErrorList"></a>
<a id="tocSbatchcreateattendeeerrorlist"></a>
<a id="tocsbatchcreateattendeeerrorlist"></a>

```json
[
  {
    "ExternalUserId": {},
    "ErrorCode": {},
    "ErrorMessage": {}
  }
]
```

<h2 id="tocS_CreateAttendeeRequestItemList">CreateAttendeeRequestItemList</h2>
<!-- backwards compatibility -->
<a id="schemacreateattendeerequestitemlist"></a>
<a id="schema_CreateAttendeeRequestItemList"></a>
<a id="tocScreateattendeerequestitemlist"></a>
<a id="tocscreateattendeerequestitemlist"></a>

```json
[
  {
    "ExternalUserId": {},
    "Tags": {}
  }
]
```

<h2 id="tocS_BatchCreateAttendeeRequest">BatchCreateAttendeeRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchcreateattendeerequest"></a>
<a id="schema_BatchCreateAttendeeRequest"></a>
<a id="tocSbatchcreateattendeerequest"></a>
<a id="tocsbatchcreateattendeerequest"></a>

```json
{
  "Attendees": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attendees|object|true|none|none|

<h2 id="tocS_ErrorCode">ErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemaerrorcode"></a>
<a id="schema_ErrorCode"></a>
<a id="tocSerrorcode"></a>
<a id="tocserrorcode"></a>

```json
"BadRequest"
```

<h2 id="tocS_BatchCreateChannelMembershipError">BatchCreateChannelMembershipError</h2>
<!-- backwards compatibility -->
<a id="schemabatchcreatechannelmembershiperror"></a>
<a id="schema_BatchCreateChannelMembershipError"></a>
<a id="tocSbatchcreatechannelmembershiperror"></a>
<a id="tocsbatchcreatechannelmembershiperror"></a>

```json
{
  "MemberArn": {},
  "ErrorCode": {},
  "ErrorMessage": {}
}
```

A list of failed member ARNs, error codes, and error messages.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MemberArn|object|false|none|none|
|ErrorCode|object|false|none|none|
|ErrorMessage|object|false|none|none|

<h2 id="tocS_BatchCreateChannelMembershipErrors">BatchCreateChannelMembershipErrors</h2>
<!-- backwards compatibility -->
<a id="schemabatchcreatechannelmembershiperrors"></a>
<a id="schema_BatchCreateChannelMembershipErrors"></a>
<a id="tocSbatchcreatechannelmembershiperrors"></a>
<a id="tocsbatchcreatechannelmembershiperrors"></a>

```json
[
  {
    "MemberArn": {},
    "ErrorCode": {},
    "ErrorMessage": {}
  }
]
```

<h2 id="tocS_MemberArns">MemberArns</h2>
<!-- backwards compatibility -->
<a id="schemamemberarns"></a>
<a id="schema_MemberArns"></a>
<a id="tocSmemberarns"></a>
<a id="tocsmemberarns"></a>

```json
[
  "string"
]
```

<h2 id="tocS_BatchCreateChannelMembershipRequest">BatchCreateChannelMembershipRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchcreatechannelmembershiprequest"></a>
<a id="schema_BatchCreateChannelMembershipRequest"></a>
<a id="tocSbatchcreatechannelmembershiprequest"></a>
<a id="tocsbatchcreatechannelmembershiprequest"></a>

```json
{
  "Type": {},
  "MemberArns": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|MemberArns|object|true|none|none|

<h2 id="tocS_MembershipItemList">MembershipItemList</h2>
<!-- backwards compatibility -->
<a id="schemamembershipitemlist"></a>
<a id="schema_MembershipItemList"></a>
<a id="tocSmembershipitemlist"></a>
<a id="tocsmembershipitemlist"></a>

```json
[
  {
    "MemberId": {},
    "Role": {}
  }
]
```

<h2 id="tocS_BatchCreateRoomMembershipRequest">BatchCreateRoomMembershipRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchcreateroommembershiprequest"></a>
<a id="schema_BatchCreateRoomMembershipRequest"></a>
<a id="tocSbatchcreateroommembershiprequest"></a>
<a id="tocsbatchcreateroommembershiprequest"></a>

```json
{
  "MembershipItemList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MembershipItemList|object|true|none|none|

<h2 id="tocS_MemberErrorList">MemberErrorList</h2>
<!-- backwards compatibility -->
<a id="schemamembererrorlist"></a>
<a id="schema_MemberErrorList"></a>
<a id="tocSmembererrorlist"></a>
<a id="tocsmembererrorlist"></a>

```json
[
  {
    "MemberId": {},
    "ErrorCode": {},
    "ErrorMessage": {}
  }
]
```

<h2 id="tocS_NonEmptyStringList">NonEmptyStringList</h2>
<!-- backwards compatibility -->
<a id="schemanonemptystringlist"></a>
<a id="schema_NonEmptyStringList"></a>
<a id="tocSnonemptystringlist"></a>
<a id="tocsnonemptystringlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_BatchDeletePhoneNumberRequest">BatchDeletePhoneNumberRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeletephonenumberrequest"></a>
<a id="schema_BatchDeletePhoneNumberRequest"></a>
<a id="tocSbatchdeletephonenumberrequest"></a>
<a id="tocsbatchdeletephonenumberrequest"></a>

```json
{
  "PhoneNumberIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PhoneNumberIds|object|true|none|none|

<h2 id="tocS_UserIdList">UserIdList</h2>
<!-- backwards compatibility -->
<a id="schemauseridlist"></a>
<a id="schema_UserIdList"></a>
<a id="tocSuseridlist"></a>
<a id="tocsuseridlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_BatchSuspendUserRequest">BatchSuspendUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchsuspenduserrequest"></a>
<a id="schema_BatchSuspendUserRequest"></a>
<a id="tocSbatchsuspenduserrequest"></a>
<a id="tocsbatchsuspenduserrequest"></a>

```json
{
  "UserIdList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserIdList|object|true|none|none|

<h2 id="tocS_UserErrorList">UserErrorList</h2>
<!-- backwards compatibility -->
<a id="schemausererrorlist"></a>
<a id="schema_UserErrorList"></a>
<a id="tocSusererrorlist"></a>
<a id="tocsusererrorlist"></a>

```json
[
  {
    "UserId": {},
    "ErrorCode": {},
    "ErrorMessage": {}
  }
]
```

<h2 id="tocS_BatchUnsuspendUserRequest">BatchUnsuspendUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchunsuspenduserrequest"></a>
<a id="schema_BatchUnsuspendUserRequest"></a>
<a id="tocSbatchunsuspenduserrequest"></a>
<a id="tocsbatchunsuspenduserrequest"></a>

```json
{
  "UserIdList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserIdList|object|true|none|none|

<h2 id="tocS_UpdatePhoneNumberRequestItemList">UpdatePhoneNumberRequestItemList</h2>
<!-- backwards compatibility -->
<a id="schemaupdatephonenumberrequestitemlist"></a>
<a id="schema_UpdatePhoneNumberRequestItemList"></a>
<a id="tocSupdatephonenumberrequestitemlist"></a>
<a id="tocsupdatephonenumberrequestitemlist"></a>

```json
[
  {
    "PhoneNumberId": {},
    "ProductType": {},
    "CallingName": {}
  }
]
```

<h2 id="tocS_BatchUpdatePhoneNumberRequest">BatchUpdatePhoneNumberRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchupdatephonenumberrequest"></a>
<a id="schema_BatchUpdatePhoneNumberRequest"></a>
<a id="tocSbatchupdatephonenumberrequest"></a>
<a id="tocsbatchupdatephonenumberrequest"></a>

```json
{
  "UpdatePhoneNumberRequestItems": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UpdatePhoneNumberRequestItems|object|true|none|none|

<h2 id="tocS_UpdateUserRequestItemList">UpdateUserRequestItemList</h2>
<!-- backwards compatibility -->
<a id="schemaupdateuserrequestitemlist"></a>
<a id="schema_UpdateUserRequestItemList"></a>
<a id="tocSupdateuserrequestitemlist"></a>
<a id="tocsupdateuserrequestitemlist"></a>

```json
[
  {
    "UserId": {},
    "LicenseType": {},
    "UserType": {},
    "AlexaForBusinessMetadata": {
      "IsAlexaForBusinessEnabled": {},
      "AlexaForBusinessRoomArn": {}
    }
  }
]
```

<h2 id="tocS_BatchUpdateUserRequest">BatchUpdateUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchupdateuserrequest"></a>
<a id="schema_BatchUpdateUserRequest"></a>
<a id="tocSbatchupdateuserrequest"></a>
<a id="tocsbatchupdateuserrequest"></a>

```json
{
  "UpdateUserRequestItems": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UpdateUserRequestItems|object|true|none|none|

<h2 id="tocS_BotType">BotType</h2>
<!-- backwards compatibility -->
<a id="schemabottype"></a>
<a id="schema_BotType"></a>
<a id="tocSbottype"></a>
<a id="tocsbottype"></a>

```json
"ChatBot"
```

<h2 id="tocS_Bot">Bot</h2>
<!-- backwards compatibility -->
<a id="schemabot"></a>
<a id="schema_Bot"></a>
<a id="tocSbot"></a>
<a id="tocsbot"></a>

```json
{
  "BotId": {},
  "UserId": {},
  "DisplayName": {},
  "BotType": {},
  "Disabled": {},
  "CreatedTimestamp": {},
  "UpdatedTimestamp": {},
  "BotEmail": {},
  "SecurityToken": {}
}
```

A resource that allows Enterprise account administrators to configure an interface to receive events from Amazon Chime.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BotId|object|false|none|none|
|UserId|object|false|none|none|
|DisplayName|object|false|none|none|
|BotType|object|false|none|none|
|Disabled|object|false|none|none|
|CreatedTimestamp|object|false|none|none|
|UpdatedTimestamp|object|false|none|none|
|BotEmail|object|false|none|none|
|SecurityToken|object|false|none|none|

<h2 id="tocS_BotList">BotList</h2>
<!-- backwards compatibility -->
<a id="schemabotlist"></a>
<a id="schema_BotList"></a>
<a id="tocSbotlist"></a>
<a id="tocsbotlist"></a>

```json
[
  {
    "BotId": {},
    "UserId": {},
    "DisplayName": {},
    "BotType": {},
    "Disabled": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {},
    "BotEmail": {},
    "SecurityToken": {}
  }
]
```

<h2 id="tocS_BusinessCallingSettings">BusinessCallingSettings</h2>
<!-- backwards compatibility -->
<a id="schemabusinesscallingsettings"></a>
<a id="schema_BusinessCallingSettings"></a>
<a id="tocSbusinesscallingsettings"></a>
<a id="tocsbusinesscallingsettings"></a>

```json
{
  "CdrBucket": {}
}
```

The Amazon Chime Business Calling settings for the administrator's AWS account. Includes any Amazon S3 buckets designated for storing call detail records.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CdrBucket|object|false|none|none|

<h2 id="tocS_CallingName">CallingName</h2>
<!-- backwards compatibility -->
<a id="schemacallingname"></a>
<a id="schema_CallingName"></a>
<a id="tocScallingname"></a>
<a id="tocscallingname"></a>

```json
"password"
```

<h2 id="tocS_CallingNameStatus">CallingNameStatus</h2>
<!-- backwards compatibility -->
<a id="schemacallingnamestatus"></a>
<a id="schema_CallingNameStatus"></a>
<a id="tocScallingnamestatus"></a>
<a id="tocscallingnamestatus"></a>

```json
"Unassigned"
```

<h2 id="tocS_CallingRegion">CallingRegion</h2>
<!-- backwards compatibility -->
<a id="schemacallingregion"></a>
<a id="schema_CallingRegion"></a>
<a id="tocScallingregion"></a>
<a id="tocscallingregion"></a>

```json
"string"
```

<h2 id="tocS_CandidateAddress">CandidateAddress</h2>
<!-- backwards compatibility -->
<a id="schemacandidateaddress"></a>
<a id="schema_CandidateAddress"></a>
<a id="tocScandidateaddress"></a>
<a id="tocscandidateaddress"></a>

```json
{
  "streetInfo": {},
  "streetNumber": {},
  "city": {},
  "state": {},
  "postalCode": {},
  "postalCodePlus4": {},
  "country": {}
}
```

A suggested address.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|streetInfo|object|false|none|none|
|streetNumber|object|false|none|none|
|city|object|false|none|none|
|state|object|false|none|none|
|postalCode|object|false|none|none|
|postalCodePlus4|object|false|none|none|
|country|object|false|none|none|

<h2 id="tocS_CandidateAddressList">CandidateAddressList</h2>
<!-- backwards compatibility -->
<a id="schemacandidateaddresslist"></a>
<a id="schema_CandidateAddressList"></a>
<a id="tocScandidateaddresslist"></a>
<a id="tocscandidateaddresslist"></a>

```json
[
  {
    "streetInfo": {},
    "streetNumber": {},
    "city": {},
    "state": {},
    "postalCode": {},
    "postalCodePlus4": {},
    "country": {}
  }
]
```

<h2 id="tocS_CapabilityList">CapabilityList</h2>
<!-- backwards compatibility -->
<a id="schemacapabilitylist"></a>
<a id="schema_CapabilityList"></a>
<a id="tocScapabilitylist"></a>
<a id="tocscapabilitylist"></a>

```json
[
  "Voice"
]
```

<h2 id="tocS_ChannelMode">ChannelMode</h2>
<!-- backwards compatibility -->
<a id="schemachannelmode"></a>
<a id="schema_ChannelMode"></a>
<a id="tocSchannelmode"></a>
<a id="tocschannelmode"></a>

```json
"UNRESTRICTED"
```

<h2 id="tocS_ChannelPrivacy">ChannelPrivacy</h2>
<!-- backwards compatibility -->
<a id="schemachannelprivacy"></a>
<a id="schema_ChannelPrivacy"></a>
<a id="tocSchannelprivacy"></a>
<a id="tocschannelprivacy"></a>

```json
"PUBLIC"
```

<h2 id="tocS_Channel">Channel</h2>
<!-- backwards compatibility -->
<a id="schemachannel"></a>
<a id="schema_Channel"></a>
<a id="tocSchannel"></a>
<a id="tocschannel"></a>

```json
{
  "Name": {},
  "ChannelArn": {},
  "Mode": {},
  "Privacy": {},
  "Metadata": {},
  "CreatedBy": {
    "Arn": {},
    "Name": {}
  },
  "CreatedTimestamp": {},
  "LastMessageTimestamp": {},
  "LastUpdatedTimestamp": {}
}
```

The details of a channel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|ChannelArn|object|false|none|none|
|Mode|object|false|none|none|
|Privacy|object|false|none|none|
|Metadata|object|false|none|none|
|CreatedBy|object|false|none|none|
|CreatedTimestamp|object|false|none|none|
|LastMessageTimestamp|object|false|none|none|
|LastUpdatedTimestamp|object|false|none|none|

<h2 id="tocS_ChannelBan">ChannelBan</h2>
<!-- backwards compatibility -->
<a id="schemachannelban"></a>
<a id="schema_ChannelBan"></a>
<a id="tocSchannelban"></a>
<a id="tocschannelban"></a>

```json
{
  "Member": {
    "Arn": {},
    "Name": {}
  },
  "ChannelArn": {},
  "CreatedTimestamp": {},
  "CreatedBy": {
    "Arn": {},
    "Name": {}
  }
}
```

The details of a channel ban.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Member|object|false|none|none|
|ChannelArn|object|false|none|none|
|CreatedTimestamp|object|false|none|none|
|CreatedBy|object|false|none|none|

<h2 id="tocS_ChannelBanSummary">ChannelBanSummary</h2>
<!-- backwards compatibility -->
<a id="schemachannelbansummary"></a>
<a id="schema_ChannelBanSummary"></a>
<a id="tocSchannelbansummary"></a>
<a id="tocschannelbansummary"></a>

```json
{
  "Member": {
    "Arn": {},
    "Name": {}
  }
}
```

Summary of the details of a <code>ChannelBan</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Member|object|false|none|none|

<h2 id="tocS_ChannelBanSummaryList">ChannelBanSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemachannelbansummarylist"></a>
<a id="schema_ChannelBanSummaryList"></a>
<a id="tocSchannelbansummarylist"></a>
<a id="tocschannelbansummarylist"></a>

```json
[
  {
    "Member": {
      "Arn": {},
      "Name": {}
    }
  }
]
```

<h2 id="tocS_ChannelMembership">ChannelMembership</h2>
<!-- backwards compatibility -->
<a id="schemachannelmembership"></a>
<a id="schema_ChannelMembership"></a>
<a id="tocSchannelmembership"></a>
<a id="tocschannelmembership"></a>

```json
{
  "InvitedBy": {
    "Arn": {},
    "Name": {}
  },
  "Type": {},
  "Member": {
    "Arn": {},
    "Name": {}
  },
  "ChannelArn": {},
  "CreatedTimestamp": {},
  "LastUpdatedTimestamp": {}
}
```

The details of a channel member.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InvitedBy|object|false|none|none|
|Type|object|false|none|none|
|Member|object|false|none|none|
|ChannelArn|object|false|none|none|
|CreatedTimestamp|object|false|none|none|
|LastUpdatedTimestamp|object|false|none|none|

<h2 id="tocS_ChannelSummary">ChannelSummary</h2>
<!-- backwards compatibility -->
<a id="schemachannelsummary"></a>
<a id="schema_ChannelSummary"></a>
<a id="tocSchannelsummary"></a>
<a id="tocschannelsummary"></a>

```json
{
  "Name": {},
  "ChannelArn": {},
  "Mode": {},
  "Privacy": {},
  "Metadata": {},
  "LastMessageTimestamp": {}
}
```

Summary of the details of a <code>Channel</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|ChannelArn|object|false|none|none|
|Mode|object|false|none|none|
|Privacy|object|false|none|none|
|Metadata|object|false|none|none|
|LastMessageTimestamp|object|false|none|none|

<h2 id="tocS_ChannelMembershipForAppInstanceUserSummary">ChannelMembershipForAppInstanceUserSummary</h2>
<!-- backwards compatibility -->
<a id="schemachannelmembershipforappinstanceusersummary"></a>
<a id="schema_ChannelMembershipForAppInstanceUserSummary"></a>
<a id="tocSchannelmembershipforappinstanceusersummary"></a>
<a id="tocschannelmembershipforappinstanceusersummary"></a>

```json
{
  "ChannelSummary": {
    "Name": {},
    "ChannelArn": {},
    "Mode": {},
    "Privacy": {},
    "Metadata": {},
    "LastMessageTimestamp": {}
  },
  "AppInstanceUserMembershipSummary": {
    "Type": {},
    "ReadMarkerTimestamp": {}
  }
}
```

Summary of the channel membership details of an <code>AppInstanceUser</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelSummary|object|false|none|none|
|AppInstanceUserMembershipSummary|object|false|none|none|

<h2 id="tocS_ChannelMembershipForAppInstanceUserSummaryList">ChannelMembershipForAppInstanceUserSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemachannelmembershipforappinstanceusersummarylist"></a>
<a id="schema_ChannelMembershipForAppInstanceUserSummaryList"></a>
<a id="tocSchannelmembershipforappinstanceusersummarylist"></a>
<a id="tocschannelmembershipforappinstanceusersummarylist"></a>

```json
[
  {
    "ChannelSummary": {
      "Name": {},
      "ChannelArn": {},
      "Mode": {},
      "Privacy": {},
      "Metadata": {},
      "LastMessageTimestamp": {}
    },
    "AppInstanceUserMembershipSummary": {
      "Type": {},
      "ReadMarkerTimestamp": {}
    }
  }
]
```

<h2 id="tocS_ChannelMembershipSummary">ChannelMembershipSummary</h2>
<!-- backwards compatibility -->
<a id="schemachannelmembershipsummary"></a>
<a id="schema_ChannelMembershipSummary"></a>
<a id="tocSchannelmembershipsummary"></a>
<a id="tocschannelmembershipsummary"></a>

```json
{
  "Member": {
    "Arn": {},
    "Name": {}
  }
}
```

Summary of the details of a <code>ChannelMembership</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Member|object|false|none|none|

<h2 id="tocS_ChannelMembershipSummaryList">ChannelMembershipSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemachannelmembershipsummarylist"></a>
<a id="schema_ChannelMembershipSummaryList"></a>
<a id="tocSchannelmembershipsummarylist"></a>
<a id="tocschannelmembershipsummarylist"></a>

```json
[
  {
    "Member": {
      "Arn": {},
      "Name": {}
    }
  }
]
```

<h2 id="tocS_MessageId">MessageId</h2>
<!-- backwards compatibility -->
<a id="schemamessageid"></a>
<a id="schema_MessageId"></a>
<a id="tocSmessageid"></a>
<a id="tocsmessageid"></a>

```json
"string"
```

<h2 id="tocS_Content">Content</h2>
<!-- backwards compatibility -->
<a id="schemacontent"></a>
<a id="schema_Content"></a>
<a id="tocScontent"></a>
<a id="tocscontent"></a>

```json
"password"
```

<h2 id="tocS_ChannelMessageType">ChannelMessageType</h2>
<!-- backwards compatibility -->
<a id="schemachannelmessagetype"></a>
<a id="schema_ChannelMessageType"></a>
<a id="tocSchannelmessagetype"></a>
<a id="tocschannelmessagetype"></a>

```json
"STANDARD"
```

<h2 id="tocS_NonNullableBoolean">NonNullableBoolean</h2>
<!-- backwards compatibility -->
<a id="schemanonnullableboolean"></a>
<a id="schema_NonNullableBoolean"></a>
<a id="tocSnonnullableboolean"></a>
<a id="tocsnonnullableboolean"></a>

```json
true
```

<h2 id="tocS_ChannelMessagePersistenceType">ChannelMessagePersistenceType</h2>
<!-- backwards compatibility -->
<a id="schemachannelmessagepersistencetype"></a>
<a id="schema_ChannelMessagePersistenceType"></a>
<a id="tocSchannelmessagepersistencetype"></a>
<a id="tocschannelmessagepersistencetype"></a>

```json
"PERSISTENT"
```

<h2 id="tocS_ChannelMessage">ChannelMessage</h2>
<!-- backwards compatibility -->
<a id="schemachannelmessage"></a>
<a id="schema_ChannelMessage"></a>
<a id="tocSchannelmessage"></a>
<a id="tocschannelmessage"></a>

```json
{
  "ChannelArn": {},
  "MessageId": {},
  "Content": {},
  "Metadata": {},
  "Type": {},
  "CreatedTimestamp": {},
  "LastEditedTimestamp": {},
  "LastUpdatedTimestamp": {},
  "Sender": {
    "Arn": {},
    "Name": {}
  },
  "Redacted": {},
  "Persistence": {}
}
```

The details of a message in a channel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelArn|object|false|none|none|
|MessageId|object|false|none|none|
|Content|object|false|none|none|
|Metadata|object|false|none|none|
|Type|object|false|none|none|
|CreatedTimestamp|object|false|none|none|
|LastEditedTimestamp|object|false|none|none|
|LastUpdatedTimestamp|object|false|none|none|
|Sender|object|false|none|none|
|Redacted|object|false|none|none|
|Persistence|object|false|none|none|

<h2 id="tocS_ChannelMessageSummary">ChannelMessageSummary</h2>
<!-- backwards compatibility -->
<a id="schemachannelmessagesummary"></a>
<a id="schema_ChannelMessageSummary"></a>
<a id="tocSchannelmessagesummary"></a>
<a id="tocschannelmessagesummary"></a>

```json
{
  "MessageId": {},
  "Content": {},
  "Metadata": {},
  "Type": {},
  "CreatedTimestamp": {},
  "LastUpdatedTimestamp": {},
  "LastEditedTimestamp": {},
  "Sender": {
    "Arn": {},
    "Name": {}
  },
  "Redacted": {}
}
```

Summary of the messages in a <code>Channel</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MessageId|object|false|none|none|
|Content|object|false|none|none|
|Metadata|object|false|none|none|
|Type|object|false|none|none|
|CreatedTimestamp|object|false|none|none|
|LastUpdatedTimestamp|object|false|none|none|
|LastEditedTimestamp|object|false|none|none|
|Sender|object|false|none|none|
|Redacted|object|false|none|none|

<h2 id="tocS_ChannelMessageSummaryList">ChannelMessageSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemachannelmessagesummarylist"></a>
<a id="schema_ChannelMessageSummaryList"></a>
<a id="tocSchannelmessagesummarylist"></a>
<a id="tocschannelmessagesummarylist"></a>

```json
[
  {
    "MessageId": {},
    "Content": {},
    "Metadata": {},
    "Type": {},
    "CreatedTimestamp": {},
    "LastUpdatedTimestamp": {},
    "LastEditedTimestamp": {},
    "Sender": {
      "Arn": {},
      "Name": {}
    },
    "Redacted": {}
  }
]
```

<h2 id="tocS_ChannelModeratedByAppInstanceUserSummary">ChannelModeratedByAppInstanceUserSummary</h2>
<!-- backwards compatibility -->
<a id="schemachannelmoderatedbyappinstanceusersummary"></a>
<a id="schema_ChannelModeratedByAppInstanceUserSummary"></a>
<a id="tocSchannelmoderatedbyappinstanceusersummary"></a>
<a id="tocschannelmoderatedbyappinstanceusersummary"></a>

```json
{
  "ChannelSummary": {
    "Name": {},
    "ChannelArn": {},
    "Mode": {},
    "Privacy": {},
    "Metadata": {},
    "LastMessageTimestamp": {}
  }
}
```

Summary of the details of a moderated channel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelSummary|object|false|none|none|

<h2 id="tocS_ChannelModeratedByAppInstanceUserSummaryList">ChannelModeratedByAppInstanceUserSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemachannelmoderatedbyappinstanceusersummarylist"></a>
<a id="schema_ChannelModeratedByAppInstanceUserSummaryList"></a>
<a id="tocSchannelmoderatedbyappinstanceusersummarylist"></a>
<a id="tocschannelmoderatedbyappinstanceusersummarylist"></a>

```json
[
  {
    "ChannelSummary": {
      "Name": {},
      "ChannelArn": {},
      "Mode": {},
      "Privacy": {},
      "Metadata": {},
      "LastMessageTimestamp": {}
    }
  }
]
```

<h2 id="tocS_ChannelModerator">ChannelModerator</h2>
<!-- backwards compatibility -->
<a id="schemachannelmoderator"></a>
<a id="schema_ChannelModerator"></a>
<a id="tocSchannelmoderator"></a>
<a id="tocschannelmoderator"></a>

```json
{
  "Moderator": {
    "Arn": {},
    "Name": {}
  },
  "ChannelArn": {},
  "CreatedTimestamp": {},
  "CreatedBy": {
    "Arn": {},
    "Name": {}
  }
}
```

The details of a channel moderator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Moderator|object|false|none|none|
|ChannelArn|object|false|none|none|
|CreatedTimestamp|object|false|none|none|
|CreatedBy|object|false|none|none|

<h2 id="tocS_ChannelModeratorSummary">ChannelModeratorSummary</h2>
<!-- backwards compatibility -->
<a id="schemachannelmoderatorsummary"></a>
<a id="schema_ChannelModeratorSummary"></a>
<a id="tocSchannelmoderatorsummary"></a>
<a id="tocschannelmoderatorsummary"></a>

```json
{
  "Moderator": {
    "Arn": {},
    "Name": {}
  }
}
```

Summary of the details of a <code>ChannelModerator</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Moderator|object|false|none|none|

<h2 id="tocS_ChannelModeratorSummaryList">ChannelModeratorSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemachannelmoderatorsummarylist"></a>
<a id="schema_ChannelModeratorSummaryList"></a>
<a id="tocSchannelmoderatorsummarylist"></a>
<a id="tocschannelmoderatorsummarylist"></a>

```json
[
  {
    "Moderator": {
      "Arn": {},
      "Name": {}
    }
  }
]
```

<h2 id="tocS_RetentionDays">RetentionDays</h2>
<!-- backwards compatibility -->
<a id="schemaretentiondays"></a>
<a id="schema_RetentionDays"></a>
<a id="tocSretentiondays"></a>
<a id="tocsretentiondays"></a>

```json
1
```

<h2 id="tocS_ChannelSummaryList">ChannelSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemachannelsummarylist"></a>
<a id="schema_ChannelSummaryList"></a>
<a id="tocSchannelsummarylist"></a>
<a id="tocschannelsummarylist"></a>

```json
[
  {
    "Name": {},
    "ChannelArn": {},
    "Mode": {},
    "Privacy": {},
    "Metadata": {},
    "LastMessageTimestamp": {}
  }
]
```

<h2 id="tocS_ChimeSdkMeetingConfiguration">ChimeSdkMeetingConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemachimesdkmeetingconfiguration"></a>
<a id="schema_ChimeSdkMeetingConfiguration"></a>
<a id="tocSchimesdkmeetingconfiguration"></a>
<a id="tocschimesdkmeetingconfiguration"></a>

```json
{
  "SourceConfiguration": {
    "SelectedVideoStreams": {
      "AttendeeIds": {},
      "ExternalUserIds": {}
    }
  },
  "ArtifactsConfiguration": {
    "Audio": {
      "MuxType": {}
    },
    "Video": {
      "State": {},
      "MuxType": {}
    },
    "Content": {
      "State": {},
      "MuxType": {}
    }
  }
}
```

The configuration object of the Amazon Chime SDK meeting for a specified media capture pipeline. <code>SourceType</code> must be <code>ChimeSdkMeeting</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceConfiguration|object|false|none|none|
|ArtifactsConfiguration|object|false|none|none|

<h2 id="tocS_ClientRequestToken">ClientRequestToken</h2>
<!-- backwards compatibility -->
<a id="schemaclientrequesttoken"></a>
<a id="schema_ClientRequestToken"></a>
<a id="tocSclientrequesttoken"></a>
<a id="tocsclientrequesttoken"></a>

```json
"password"
```

<h2 id="tocS_ContentMuxType">ContentMuxType</h2>
<!-- backwards compatibility -->
<a id="schemacontentmuxtype"></a>
<a id="schema_ContentMuxType"></a>
<a id="tocScontentmuxtype"></a>
<a id="tocscontentmuxtype"></a>

```json
"ContentOnly"
```

<h2 id="tocS_CountryList">CountryList</h2>
<!-- backwards compatibility -->
<a id="schemacountrylist"></a>
<a id="schema_CountryList"></a>
<a id="tocScountrylist"></a>
<a id="tocscountrylist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_CreateAccountRequest">CreateAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateaccountrequest"></a>
<a id="schema_CreateAccountRequest"></a>
<a id="tocScreateaccountrequest"></a>
<a id="tocscreateaccountrequest"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_CreateAppInstanceAdminRequest">CreateAppInstanceAdminRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateappinstanceadminrequest"></a>
<a id="schema_CreateAppInstanceAdminRequest"></a>
<a id="tocScreateappinstanceadminrequest"></a>
<a id="tocscreateappinstanceadminrequest"></a>

```json
{
  "AppInstanceAdminArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppInstanceAdminArn|object|true|none|none|

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

<h2 id="tocS_CreateAppInstanceRequest">CreateAppInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateappinstancerequest"></a>
<a id="schema_CreateAppInstanceRequest"></a>
<a id="tocScreateappinstancerequest"></a>
<a id="tocscreateappinstancerequest"></a>

```json
{
  "Name": {},
  "Metadata": {},
  "ClientRequestToken": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Metadata|object|false|none|none|
|ClientRequestToken|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_UserId">UserId</h2>
<!-- backwards compatibility -->
<a id="schemauserid"></a>
<a id="schema_UserId"></a>
<a id="tocSuserid"></a>
<a id="tocsuserid"></a>

```json
"password"
```

<h2 id="tocS_CreateAppInstanceUserRequest">CreateAppInstanceUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateappinstanceuserrequest"></a>
<a id="schema_CreateAppInstanceUserRequest"></a>
<a id="tocScreateappinstanceuserrequest"></a>
<a id="tocscreateappinstanceuserrequest"></a>

```json
{
  "AppInstanceArn": {},
  "AppInstanceUserId": {},
  "Name": {},
  "Metadata": {},
  "ClientRequestToken": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppInstanceArn|object|true|none|none|
|AppInstanceUserId|object|true|none|none|
|Name|object|true|none|none|
|Metadata|object|false|none|none|
|ClientRequestToken|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateAttendeeRequest">CreateAttendeeRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateattendeerequest"></a>
<a id="schema_CreateAttendeeRequest"></a>
<a id="tocScreateattendeerequest"></a>
<a id="tocscreateattendeerequest"></a>

```json
{
  "ExternalUserId": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExternalUserId|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateBotRequest">CreateBotRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatebotrequest"></a>
<a id="schema_CreateBotRequest"></a>
<a id="tocScreatebotrequest"></a>
<a id="tocscreatebotrequest"></a>

```json
{
  "DisplayName": {},
  "Domain": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DisplayName|object|true|none|none|
|Domain|object|false|none|none|

<h2 id="tocS_CreateChannelBanRequest">CreateChannelBanRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatechannelbanrequest"></a>
<a id="schema_CreateChannelBanRequest"></a>
<a id="tocScreatechannelbanrequest"></a>
<a id="tocscreatechannelbanrequest"></a>

```json
{
  "MemberArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MemberArn|object|true|none|none|

<h2 id="tocS_CreateChannelMembershipRequest">CreateChannelMembershipRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatechannelmembershiprequest"></a>
<a id="schema_CreateChannelMembershipRequest"></a>
<a id="tocScreatechannelmembershiprequest"></a>
<a id="tocscreatechannelmembershiprequest"></a>

```json
{
  "MemberArn": {},
  "Type": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MemberArn|object|true|none|none|
|Type|object|true|none|none|

<h2 id="tocS_CreateChannelModeratorRequest">CreateChannelModeratorRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatechannelmoderatorrequest"></a>
<a id="schema_CreateChannelModeratorRequest"></a>
<a id="tocScreatechannelmoderatorrequest"></a>
<a id="tocscreatechannelmoderatorrequest"></a>

```json
{
  "ChannelModeratorArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelModeratorArn|object|true|none|none|

<h2 id="tocS_CreateChannelRequest">CreateChannelRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatechannelrequest"></a>
<a id="schema_CreateChannelRequest"></a>
<a id="tocScreatechannelrequest"></a>
<a id="tocscreatechannelrequest"></a>

```json
{
  "AppInstanceArn": {},
  "Name": {},
  "Mode": {},
  "Privacy": {},
  "Metadata": {},
  "ClientRequestToken": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppInstanceArn|object|true|none|none|
|Name|object|true|none|none|
|Mode|object|false|none|none|
|Privacy|object|false|none|none|
|Metadata|object|false|none|none|
|ClientRequestToken|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_MediaPipelineSourceType">MediaPipelineSourceType</h2>
<!-- backwards compatibility -->
<a id="schemamediapipelinesourcetype"></a>
<a id="schema_MediaPipelineSourceType"></a>
<a id="tocSmediapipelinesourcetype"></a>
<a id="tocsmediapipelinesourcetype"></a>

```json
"ChimeSdkMeeting"
```

<h2 id="tocS_MediaPipelineSinkType">MediaPipelineSinkType</h2>
<!-- backwards compatibility -->
<a id="schemamediapipelinesinktype"></a>
<a id="schema_MediaPipelineSinkType"></a>
<a id="tocSmediapipelinesinktype"></a>
<a id="tocsmediapipelinesinktype"></a>

```json
"S3Bucket"
```

<h2 id="tocS_CreateMediaCapturePipelineRequest">CreateMediaCapturePipelineRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatemediacapturepipelinerequest"></a>
<a id="schema_CreateMediaCapturePipelineRequest"></a>
<a id="tocScreatemediacapturepipelinerequest"></a>
<a id="tocscreatemediacapturepipelinerequest"></a>

```json
{
  "SourceType": {},
  "SourceArn": {},
  "SinkType": {},
  "SinkArn": {},
  "ClientRequestToken": {},
  "ChimeSdkMeetingConfiguration": {
    "SourceConfiguration": {
      "SelectedVideoStreams": {
        "AttendeeIds": {},
        "ExternalUserIds": {}
      }
    },
    "ArtifactsConfiguration": {
      "Audio": {
        "MuxType": {}
      },
      "Video": {
        "State": {},
        "MuxType": {}
      },
      "Content": {
        "State": {},
        "MuxType": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceType|object|true|none|none|
|SourceArn|object|true|none|none|
|SinkType|object|true|none|none|
|SinkArn|object|true|none|none|
|ClientRequestToken|object|false|none|none|
|ChimeSdkMeetingConfiguration|object|false|none|none|

<h2 id="tocS_MediaCapturePipeline">MediaCapturePipeline</h2>
<!-- backwards compatibility -->
<a id="schemamediacapturepipeline"></a>
<a id="schema_MediaCapturePipeline"></a>
<a id="tocSmediacapturepipeline"></a>
<a id="tocsmediacapturepipeline"></a>

```json
{
  "MediaPipelineId": {},
  "SourceType": {},
  "SourceArn": {},
  "Status": {},
  "SinkType": {},
  "SinkArn": {},
  "CreatedTimestamp": {},
  "UpdatedTimestamp": {},
  "ChimeSdkMeetingConfiguration": {
    "SourceConfiguration": {
      "SelectedVideoStreams": {
        "AttendeeIds": {},
        "ExternalUserIds": {}
      }
    },
    "ArtifactsConfiguration": {
      "Audio": {
        "MuxType": {}
      },
      "Video": {
        "State": {},
        "MuxType": {}
      },
      "Content": {
        "State": {},
        "MuxType": {}
      }
    }
  }
}
```

A media capture pipeline object consisting of an ID, source type, source ARN, a sink type, a sink ARN, and a configuration object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MediaPipelineId|object|false|none|none|
|SourceType|object|false|none|none|
|SourceArn|object|false|none|none|
|Status|object|false|none|none|
|SinkType|object|false|none|none|
|SinkArn|object|false|none|none|
|CreatedTimestamp|object|false|none|none|
|UpdatedTimestamp|object|false|none|none|
|ChimeSdkMeetingConfiguration|object|false|none|none|

<h2 id="tocS_CreateMeetingDialOutRequest">CreateMeetingDialOutRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatemeetingdialoutrequest"></a>
<a id="schema_CreateMeetingDialOutRequest"></a>
<a id="tocScreatemeetingdialoutrequest"></a>
<a id="tocscreatemeetingdialoutrequest"></a>

```json
{
  "FromPhoneNumber": {},
  "ToPhoneNumber": {},
  "JoinToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FromPhoneNumber|object|true|none|none|
|ToPhoneNumber|object|true|none|none|
|JoinToken|object|true|none|none|

<h2 id="tocS_ExternalMeetingIdType">ExternalMeetingIdType</h2>
<!-- backwards compatibility -->
<a id="schemaexternalmeetingidtype"></a>
<a id="schema_ExternalMeetingIdType"></a>
<a id="tocSexternalmeetingidtype"></a>
<a id="tocsexternalmeetingidtype"></a>

```json
"password"
```

<h2 id="tocS_MeetingTagList">MeetingTagList</h2>
<!-- backwards compatibility -->
<a id="schemameetingtaglist"></a>
<a id="schema_MeetingTagList"></a>
<a id="tocSmeetingtaglist"></a>
<a id="tocsmeetingtaglist"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_MeetingNotificationConfiguration">MeetingNotificationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemameetingnotificationconfiguration"></a>
<a id="schema_MeetingNotificationConfiguration"></a>
<a id="tocSmeetingnotificationconfiguration"></a>
<a id="tocsmeetingnotificationconfiguration"></a>

```json
{
  "SnsTopicArn": {},
  "SqsQueueArn": {}
}
```

 The resource target configurations for receiving Amazon Chime SDK meeting and attendee event notifications. The Amazon Chime SDK supports resource targets located in the US East (N. Virginia) AWS Region (<code>us-east-1</code>).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SnsTopicArn|object|false|none|none|
|SqsQueueArn|object|false|none|none|

<h2 id="tocS_CreateMeetingRequest">CreateMeetingRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatemeetingrequest"></a>
<a id="schema_CreateMeetingRequest"></a>
<a id="tocScreatemeetingrequest"></a>
<a id="tocscreatemeetingrequest"></a>

```json
{
  "ClientRequestToken": {},
  "ExternalMeetingId": {},
  "MeetingHostId": {},
  "MediaRegion": {},
  "Tags": {},
  "NotificationsConfiguration": {
    "SnsTopicArn": {},
    "SqsQueueArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientRequestToken|object|true|none|none|
|ExternalMeetingId|object|false|none|none|
|MeetingHostId|object|false|none|none|
|MediaRegion|object|false|none|none|
|Tags|object|false|none|none|
|NotificationsConfiguration|object|false|none|none|

<h2 id="tocS_Meeting">Meeting</h2>
<!-- backwards compatibility -->
<a id="schemameeting"></a>
<a id="schema_Meeting"></a>
<a id="tocSmeeting"></a>
<a id="tocsmeeting"></a>

```json
{
  "MeetingId": {},
  "ExternalMeetingId": {},
  "MediaPlacement": {
    "AudioHostUrl": {},
    "AudioFallbackUrl": {},
    "ScreenDataUrl": {},
    "ScreenSharingUrl": {},
    "ScreenViewingUrl": {},
    "SignalingUrl": {},
    "TurnControlUrl": {},
    "EventIngestionUrl": {}
  },
  "MediaRegion": {}
}
```

A meeting created using the Amazon Chime SDK.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MeetingId|object|false|none|none|
|ExternalMeetingId|object|false|none|none|
|MediaPlacement|object|false|none|none|
|MediaRegion|object|false|none|none|

<h2 id="tocS_CreateMeetingWithAttendeesRequestItemList">CreateMeetingWithAttendeesRequestItemList</h2>
<!-- backwards compatibility -->
<a id="schemacreatemeetingwithattendeesrequestitemlist"></a>
<a id="schema_CreateMeetingWithAttendeesRequestItemList"></a>
<a id="tocScreatemeetingwithattendeesrequestitemlist"></a>
<a id="tocscreatemeetingwithattendeesrequestitemlist"></a>

```json
[
  {
    "ExternalUserId": {},
    "Tags": {}
  }
]
```

<h2 id="tocS_CreateMeetingWithAttendeesRequest">CreateMeetingWithAttendeesRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatemeetingwithattendeesrequest"></a>
<a id="schema_CreateMeetingWithAttendeesRequest"></a>
<a id="tocScreatemeetingwithattendeesrequest"></a>
<a id="tocscreatemeetingwithattendeesrequest"></a>

```json
{
  "ClientRequestToken": {},
  "ExternalMeetingId": {},
  "MeetingHostId": {},
  "MediaRegion": {},
  "Tags": {},
  "NotificationsConfiguration": {
    "SnsTopicArn": {},
    "SqsQueueArn": {}
  },
  "Attendees": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientRequestToken|object|true|none|none|
|ExternalMeetingId|object|false|none|none|
|MeetingHostId|object|false|none|none|
|MediaRegion|object|false|none|none|
|Tags|object|false|none|none|
|NotificationsConfiguration|object|false|none|none|
|Attendees|object|false|none|none|

<h2 id="tocS_PhoneNumberProductType">PhoneNumberProductType</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumberproducttype"></a>
<a id="schema_PhoneNumberProductType"></a>
<a id="tocSphonenumberproducttype"></a>
<a id="tocsphonenumberproducttype"></a>

```json
"BusinessCalling"
```

<h2 id="tocS_CreatePhoneNumberOrderRequest">CreatePhoneNumberOrderRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatephonenumberorderrequest"></a>
<a id="schema_CreatePhoneNumberOrderRequest"></a>
<a id="tocScreatephonenumberorderrequest"></a>
<a id="tocscreatephonenumberorderrequest"></a>

```json
{
  "ProductType": {},
  "E164PhoneNumbers": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProductType|object|true|none|none|
|E164PhoneNumbers|object|true|none|none|

<h2 id="tocS_PhoneNumberOrder">PhoneNumberOrder</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumberorder"></a>
<a id="schema_PhoneNumberOrder"></a>
<a id="tocSphonenumberorder"></a>
<a id="tocsphonenumberorder"></a>

```json
{
  "PhoneNumberOrderId": {},
  "ProductType": {},
  "Status": {},
  "OrderedPhoneNumbers": {},
  "CreatedTimestamp": {},
  "UpdatedTimestamp": {}
}
```

The details of a phone number order created for Amazon Chime.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PhoneNumberOrderId|object|false|none|none|
|ProductType|object|false|none|none|
|Status|object|false|none|none|
|OrderedPhoneNumbers|object|false|none|none|
|CreatedTimestamp|object|false|none|none|
|UpdatedTimestamp|object|false|none|none|

<h2 id="tocS_NonEmptyString128">NonEmptyString128</h2>
<!-- backwards compatibility -->
<a id="schemanonemptystring128"></a>
<a id="schema_NonEmptyString128"></a>
<a id="tocSnonemptystring128"></a>
<a id="tocsnonemptystring128"></a>

```json
"string"
```

<h2 id="tocS_ParticipantPhoneNumberList">ParticipantPhoneNumberList</h2>
<!-- backwards compatibility -->
<a id="schemaparticipantphonenumberlist"></a>
<a id="schema_ParticipantPhoneNumberList"></a>
<a id="tocSparticipantphonenumberlist"></a>
<a id="tocsparticipantphonenumberlist"></a>

```json
[
  "password",
  "password"
]
```

<h2 id="tocS_ProxySessionNameString">ProxySessionNameString</h2>
<!-- backwards compatibility -->
<a id="schemaproxysessionnamestring"></a>
<a id="schema_ProxySessionNameString"></a>
<a id="tocSproxysessionnamestring"></a>
<a id="tocsproxysessionnamestring"></a>

```json
"password"
```

<h2 id="tocS_PositiveInteger">PositiveInteger</h2>
<!-- backwards compatibility -->
<a id="schemapositiveinteger"></a>
<a id="schema_PositiveInteger"></a>
<a id="tocSpositiveinteger"></a>
<a id="tocspositiveinteger"></a>

```json
1
```

<h2 id="tocS_NumberSelectionBehavior">NumberSelectionBehavior</h2>
<!-- backwards compatibility -->
<a id="schemanumberselectionbehavior"></a>
<a id="schema_NumberSelectionBehavior"></a>
<a id="tocSnumberselectionbehavior"></a>
<a id="tocsnumberselectionbehavior"></a>

```json
"PreferSticky"
```

<h2 id="tocS_GeoMatchLevel">GeoMatchLevel</h2>
<!-- backwards compatibility -->
<a id="schemageomatchlevel"></a>
<a id="schema_GeoMatchLevel"></a>
<a id="tocSgeomatchlevel"></a>
<a id="tocsgeomatchlevel"></a>

```json
"Country"
```

<h2 id="tocS_GeoMatchParams">GeoMatchParams</h2>
<!-- backwards compatibility -->
<a id="schemageomatchparams"></a>
<a id="schema_GeoMatchParams"></a>
<a id="tocSgeomatchparams"></a>
<a id="tocsgeomatchparams"></a>

```json
{
  "Country": {},
  "AreaCode": {}
}
```

The country and area code for a proxy phone number in a proxy phone session.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Country|object|true|none|none|
|AreaCode|object|true|none|none|

<h2 id="tocS_CreateProxySessionRequest">CreateProxySessionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateproxysessionrequest"></a>
<a id="schema_CreateProxySessionRequest"></a>
<a id="tocScreateproxysessionrequest"></a>
<a id="tocscreateproxysessionrequest"></a>

```json
{
  "ParticipantPhoneNumbers": {},
  "Name": {},
  "ExpiryMinutes": {},
  "Capabilities": {},
  "NumberSelectionBehavior": {},
  "GeoMatchLevel": {},
  "GeoMatchParams": {
    "Country": {},
    "AreaCode": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ParticipantPhoneNumbers|object|true|none|none|
|Name|object|false|none|none|
|ExpiryMinutes|object|false|none|none|
|Capabilities|object|true|none|none|
|NumberSelectionBehavior|object|false|none|none|
|GeoMatchLevel|object|false|none|none|
|GeoMatchParams|object|false|none|none|

<h2 id="tocS_ProxySession">ProxySession</h2>
<!-- backwards compatibility -->
<a id="schemaproxysession"></a>
<a id="schema_ProxySession"></a>
<a id="tocSproxysession"></a>
<a id="tocsproxysession"></a>

```json
{
  "VoiceConnectorId": {},
  "ProxySessionId": {},
  "Name": {},
  "Status": {},
  "ExpiryMinutes": {},
  "Capabilities": {},
  "CreatedTimestamp": {},
  "UpdatedTimestamp": {},
  "EndedTimestamp": {},
  "Participants": {},
  "NumberSelectionBehavior": {},
  "GeoMatchLevel": {},
  "GeoMatchParams": {
    "Country": {},
    "AreaCode": {}
  }
}
```

The proxy session for an Amazon Chime Voice Connector.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VoiceConnectorId|object|false|none|none|
|ProxySessionId|object|false|none|none|
|Name|object|false|none|none|
|Status|object|false|none|none|
|ExpiryMinutes|object|false|none|none|
|Capabilities|object|false|none|none|
|CreatedTimestamp|object|false|none|none|
|UpdatedTimestamp|object|false|none|none|
|EndedTimestamp|object|false|none|none|
|Participants|object|false|none|none|
|NumberSelectionBehavior|object|false|none|none|
|GeoMatchLevel|object|false|none|none|
|GeoMatchParams|object|false|none|none|

<h2 id="tocS_RoomMembershipRole">RoomMembershipRole</h2>
<!-- backwards compatibility -->
<a id="schemaroommembershiprole"></a>
<a id="schema_RoomMembershipRole"></a>
<a id="tocSroommembershiprole"></a>
<a id="tocsroommembershiprole"></a>

```json
"Administrator"
```

<h2 id="tocS_CreateRoomMembershipRequest">CreateRoomMembershipRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateroommembershiprequest"></a>
<a id="schema_CreateRoomMembershipRequest"></a>
<a id="tocScreateroommembershiprequest"></a>
<a id="tocscreateroommembershiprequest"></a>

```json
{
  "MemberId": {},
  "Role": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MemberId|object|true|none|none|
|Role|object|false|none|none|

<h2 id="tocS_RoomMembership">RoomMembership</h2>
<!-- backwards compatibility -->
<a id="schemaroommembership"></a>
<a id="schema_RoomMembership"></a>
<a id="tocSroommembership"></a>
<a id="tocsroommembership"></a>

```json
{
  "RoomId": {},
  "Member": {
    "MemberId": {},
    "MemberType": {},
    "Email": {},
    "FullName": {},
    "AccountId": {}
  },
  "Role": {},
  "InvitedBy": {},
  "UpdatedTimestamp": {}
}
```

The room membership details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoomId|object|false|none|none|
|Member|object|false|none|none|
|Role|object|false|none|none|
|InvitedBy|object|false|none|none|
|UpdatedTimestamp|object|false|none|none|

<h2 id="tocS_CreateRoomRequest">CreateRoomRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateroomrequest"></a>
<a id="schema_CreateRoomRequest"></a>
<a id="tocScreateroomrequest"></a>
<a id="tocscreateroomrequest"></a>

```json
{
  "Name": {},
  "ClientRequestToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|ClientRequestToken|object|false|none|none|

<h2 id="tocS_Room">Room</h2>
<!-- backwards compatibility -->
<a id="schemaroom"></a>
<a id="schema_Room"></a>
<a id="tocSroom"></a>
<a id="tocsroom"></a>

```json
{
  "RoomId": {},
  "Name": {},
  "AccountId": {},
  "CreatedBy": {},
  "CreatedTimestamp": {},
  "UpdatedTimestamp": {}
}
```

The Amazon Chime chat room details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoomId|object|false|none|none|
|Name|object|false|none|none|
|AccountId|object|false|none|none|
|CreatedBy|object|false|none|none|
|CreatedTimestamp|object|false|none|none|
|UpdatedTimestamp|object|false|none|none|

<h2 id="tocS_SipHeadersMap">SipHeadersMap</h2>
<!-- backwards compatibility -->
<a id="schemasipheadersmap"></a>
<a id="schema_SipHeadersMap"></a>
<a id="tocSsipheadersmap"></a>
<a id="tocssipheadersmap"></a>

```json
{
  "property1": "password",
  "property2": "password"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[SensitiveString](#schemasensitivestring)|false|none|none|

<h2 id="tocS_CreateSipMediaApplicationCallRequest">CreateSipMediaApplicationCallRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatesipmediaapplicationcallrequest"></a>
<a id="schema_CreateSipMediaApplicationCallRequest"></a>
<a id="tocScreatesipmediaapplicationcallrequest"></a>
<a id="tocscreatesipmediaapplicationcallrequest"></a>

```json
{
  "FromPhoneNumber": {},
  "ToPhoneNumber": {},
  "SipHeaders": {
    "property1": "password",
    "property2": "password"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FromPhoneNumber|object|true|none|none|
|ToPhoneNumber|object|true|none|none|
|SipHeaders|object|false|none|none|

<h2 id="tocS_SipMediaApplicationCall">SipMediaApplicationCall</h2>
<!-- backwards compatibility -->
<a id="schemasipmediaapplicationcall"></a>
<a id="schema_SipMediaApplicationCall"></a>
<a id="tocSsipmediaapplicationcall"></a>
<a id="tocssipmediaapplicationcall"></a>

```json
{
  "TransactionId": {}
}
```

A <code>Call</code> instance for a SIP media application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TransactionId|object|false|none|none|

<h2 id="tocS_SipMediaApplicationName">SipMediaApplicationName</h2>
<!-- backwards compatibility -->
<a id="schemasipmediaapplicationname"></a>
<a id="schema_SipMediaApplicationName"></a>
<a id="tocSsipmediaapplicationname"></a>
<a id="tocssipmediaapplicationname"></a>

```json
"string"
```

<h2 id="tocS_SipMediaApplicationEndpointList">SipMediaApplicationEndpointList</h2>
<!-- backwards compatibility -->
<a id="schemasipmediaapplicationendpointlist"></a>
<a id="schema_SipMediaApplicationEndpointList"></a>
<a id="tocSsipmediaapplicationendpointlist"></a>
<a id="tocssipmediaapplicationendpointlist"></a>

```json
[
  {
    "LambdaArn": {}
  }
]
```

<h2 id="tocS_CreateSipMediaApplicationRequest">CreateSipMediaApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatesipmediaapplicationrequest"></a>
<a id="schema_CreateSipMediaApplicationRequest"></a>
<a id="tocScreatesipmediaapplicationrequest"></a>
<a id="tocscreatesipmediaapplicationrequest"></a>

```json
{
  "AwsRegion": {},
  "Name": {},
  "Endpoints": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AwsRegion|object|true|none|none|
|Name|object|true|none|none|
|Endpoints|object|true|none|none|

<h2 id="tocS_SipMediaApplication">SipMediaApplication</h2>
<!-- backwards compatibility -->
<a id="schemasipmediaapplication"></a>
<a id="schema_SipMediaApplication"></a>
<a id="tocSsipmediaapplication"></a>
<a id="tocssipmediaapplication"></a>

```json
{
  "SipMediaApplicationId": {},
  "AwsRegion": {},
  "Name": {},
  "Endpoints": {},
  "CreatedTimestamp": {},
  "UpdatedTimestamp": {}
}
```

The details of the SIP media application, including name and endpoints. An AWS account can have multiple SIP media applications.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SipMediaApplicationId|object|false|none|none|
|AwsRegion|object|false|none|none|
|Name|object|false|none|none|
|Endpoints|object|false|none|none|
|CreatedTimestamp|object|false|none|none|
|UpdatedTimestamp|object|false|none|none|

<h2 id="tocS_SipRuleName">SipRuleName</h2>
<!-- backwards compatibility -->
<a id="schemasiprulename"></a>
<a id="schema_SipRuleName"></a>
<a id="tocSsiprulename"></a>
<a id="tocssiprulename"></a>

```json
"string"
```

<h2 id="tocS_SipRuleTriggerType">SipRuleTriggerType</h2>
<!-- backwards compatibility -->
<a id="schemasipruletriggertype"></a>
<a id="schema_SipRuleTriggerType"></a>
<a id="tocSsipruletriggertype"></a>
<a id="tocssipruletriggertype"></a>

```json
"ToPhoneNumber"
```

<h2 id="tocS_SipRuleTargetApplicationList">SipRuleTargetApplicationList</h2>
<!-- backwards compatibility -->
<a id="schemasipruletargetapplicationlist"></a>
<a id="schema_SipRuleTargetApplicationList"></a>
<a id="tocSsipruletargetapplicationlist"></a>
<a id="tocssipruletargetapplicationlist"></a>

```json
[
  {
    "SipMediaApplicationId": {},
    "Priority": {},
    "AwsRegion": {}
  }
]
```

<h2 id="tocS_CreateSipRuleRequest">CreateSipRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatesiprulerequest"></a>
<a id="schema_CreateSipRuleRequest"></a>
<a id="tocScreatesiprulerequest"></a>
<a id="tocscreatesiprulerequest"></a>

```json
{
  "Name": {},
  "TriggerType": {},
  "TriggerValue": {},
  "Disabled": {},
  "TargetApplications": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|TriggerType|object|true|none|none|
|TriggerValue|object|true|none|none|
|Disabled|object|false|none|none|
|TargetApplications|object|true|none|none|

<h2 id="tocS_SipRule">SipRule</h2>
<!-- backwards compatibility -->
<a id="schemasiprule"></a>
<a id="schema_SipRule"></a>
<a id="tocSsiprule"></a>
<a id="tocssiprule"></a>

```json
{
  "SipRuleId": {},
  "Name": {},
  "Disabled": {},
  "TriggerType": {},
  "TriggerValue": {},
  "TargetApplications": {},
  "CreatedTimestamp": {},
  "UpdatedTimestamp": {}
}
```

The SIP rule details, including name, triggers, and target applications. An AWS account can have multiple SIP rules.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SipRuleId|object|false|none|none|
|Name|object|false|none|none|
|Disabled|object|false|none|none|
|TriggerType|object|false|none|none|
|TriggerValue|object|false|none|none|
|TargetApplications|object|false|none|none|
|CreatedTimestamp|object|false|none|none|
|UpdatedTimestamp|object|false|none|none|

<h2 id="tocS_UserType">UserType</h2>
<!-- backwards compatibility -->
<a id="schemausertype"></a>
<a id="schema_UserType"></a>
<a id="tocSusertype"></a>
<a id="tocsusertype"></a>

```json
"PrivateUser"
```

<h2 id="tocS_CreateUserRequest">CreateUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateuserrequest"></a>
<a id="schema_CreateUserRequest"></a>
<a id="tocScreateuserrequest"></a>
<a id="tocscreateuserrequest"></a>

```json
{
  "Username": {},
  "Email": {},
  "UserType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Username|object|false|none|none|
|Email|object|false|none|none|
|UserType|object|false|none|none|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "UserId": {},
  "AccountId": {},
  "PrimaryEmail": {},
  "PrimaryProvisionedNumber": {},
  "DisplayName": {},
  "LicenseType": {},
  "UserType": {},
  "UserRegistrationStatus": {},
  "UserInvitationStatus": {},
  "RegisteredOn": {},
  "InvitedOn": {},
  "AlexaForBusinessMetadata": {
    "IsAlexaForBusinessEnabled": {},
    "AlexaForBusinessRoomArn": {}
  },
  "PersonalPIN": {}
}
```

The user on the Amazon Chime account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserId|object|true|none|none|
|AccountId|object|false|none|none|
|PrimaryEmail|object|false|none|none|
|PrimaryProvisionedNumber|object|false|none|none|
|DisplayName|object|false|none|none|
|LicenseType|object|false|none|none|
|UserType|object|false|none|none|
|UserRegistrationStatus|object|false|none|none|
|UserInvitationStatus|object|false|none|none|
|RegisteredOn|object|false|none|none|
|InvitedOn|object|false|none|none|
|AlexaForBusinessMetadata|object|false|none|none|
|PersonalPIN|object|false|none|none|

<h2 id="tocS_VoiceConnectorGroupName">VoiceConnectorGroupName</h2>
<!-- backwards compatibility -->
<a id="schemavoiceconnectorgroupname"></a>
<a id="schema_VoiceConnectorGroupName"></a>
<a id="tocSvoiceconnectorgroupname"></a>
<a id="tocsvoiceconnectorgroupname"></a>

```json
"string"
```

<h2 id="tocS_VoiceConnectorItemList">VoiceConnectorItemList</h2>
<!-- backwards compatibility -->
<a id="schemavoiceconnectoritemlist"></a>
<a id="schema_VoiceConnectorItemList"></a>
<a id="tocSvoiceconnectoritemlist"></a>
<a id="tocsvoiceconnectoritemlist"></a>

```json
[
  {
    "VoiceConnectorId": {},
    "Priority": {}
  }
]
```

<h2 id="tocS_CreateVoiceConnectorGroupRequest">CreateVoiceConnectorGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatevoiceconnectorgrouprequest"></a>
<a id="schema_CreateVoiceConnectorGroupRequest"></a>
<a id="tocScreatevoiceconnectorgrouprequest"></a>
<a id="tocscreatevoiceconnectorgrouprequest"></a>

```json
{
  "Name": {},
  "VoiceConnectorItems": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|VoiceConnectorItems|object|false|none|none|

<h2 id="tocS_VoiceConnectorGroup">VoiceConnectorGroup</h2>
<!-- backwards compatibility -->
<a id="schemavoiceconnectorgroup"></a>
<a id="schema_VoiceConnectorGroup"></a>
<a id="tocSvoiceconnectorgroup"></a>
<a id="tocsvoiceconnectorgroup"></a>

```json
{
  "VoiceConnectorGroupId": {},
  "Name": {},
  "VoiceConnectorItems": {},
  "CreatedTimestamp": {},
  "UpdatedTimestamp": {},
  "VoiceConnectorGroupArn": {}
}
```

The Amazon Chime Voice Connector group configuration, including associated Amazon Chime Voice Connectors. You can include Amazon Chime Voice Connectors from different AWS Regions in your group. This creates a fault tolerant mechanism for fallback in case of availability events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VoiceConnectorGroupId|object|false|none|none|
|Name|object|false|none|none|
|VoiceConnectorItems|object|false|none|none|
|CreatedTimestamp|object|false|none|none|
|UpdatedTimestamp|object|false|none|none|
|VoiceConnectorGroupArn|object|false|none|none|

<h2 id="tocS_VoiceConnectorName">VoiceConnectorName</h2>
<!-- backwards compatibility -->
<a id="schemavoiceconnectorname"></a>
<a id="schema_VoiceConnectorName"></a>
<a id="tocSvoiceconnectorname"></a>
<a id="tocsvoiceconnectorname"></a>

```json
"string"
```

<h2 id="tocS_VoiceConnectorAwsRegion">VoiceConnectorAwsRegion</h2>
<!-- backwards compatibility -->
<a id="schemavoiceconnectorawsregion"></a>
<a id="schema_VoiceConnectorAwsRegion"></a>
<a id="tocSvoiceconnectorawsregion"></a>
<a id="tocsvoiceconnectorawsregion"></a>

```json
"us-east-1"
```

<h2 id="tocS_CreateVoiceConnectorRequest">CreateVoiceConnectorRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatevoiceconnectorrequest"></a>
<a id="schema_CreateVoiceConnectorRequest"></a>
<a id="tocScreatevoiceconnectorrequest"></a>
<a id="tocscreatevoiceconnectorrequest"></a>

```json
{
  "Name": {},
  "AwsRegion": {},
  "RequireEncryption": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|AwsRegion|object|false|none|none|
|RequireEncryption|object|true|none|none|

<h2 id="tocS_VoiceConnector">VoiceConnector</h2>
<!-- backwards compatibility -->
<a id="schemavoiceconnector"></a>
<a id="schema_VoiceConnector"></a>
<a id="tocSvoiceconnector"></a>
<a id="tocsvoiceconnector"></a>

```json
{
  "VoiceConnectorId": {},
  "AwsRegion": {},
  "Name": {},
  "OutboundHostName": {},
  "RequireEncryption": {},
  "CreatedTimestamp": {},
  "UpdatedTimestamp": {},
  "VoiceConnectorArn": {}
}
```

The Amazon Chime Voice Connector configuration, including outbound host name and encryption settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VoiceConnectorId|object|false|none|none|
|AwsRegion|object|false|none|none|
|Name|object|false|none|none|
|OutboundHostName|object|false|none|none|
|RequireEncryption|object|false|none|none|
|CreatedTimestamp|object|false|none|none|
|UpdatedTimestamp|object|false|none|none|
|VoiceConnectorArn|object|false|none|none|

<h2 id="tocS_CredentialList">CredentialList</h2>
<!-- backwards compatibility -->
<a id="schemacredentiallist"></a>
<a id="schema_CredentialList"></a>
<a id="tocScredentiallist"></a>
<a id="tocscredentiallist"></a>

```json
[
  {
    "Username": {},
    "Password": {}
  }
]
```

<h2 id="tocS_DNISEmergencyCallingConfiguration">DNISEmergencyCallingConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemadnisemergencycallingconfiguration"></a>
<a id="schema_DNISEmergencyCallingConfiguration"></a>
<a id="tocSdnisemergencycallingconfiguration"></a>
<a id="tocsdnisemergencycallingconfiguration"></a>

```json
{
  "EmergencyPhoneNumber": {},
  "TestPhoneNumber": {},
  "CallingCountry": {}
}
```

The Dialed Number Identification Service (DNIS) emergency calling configuration details associated with an Amazon Chime Voice Connector's emergency calling configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EmergencyPhoneNumber|object|true|none|none|
|TestPhoneNumber|object|false|none|none|
|CallingCountry|object|true|none|none|

<h2 id="tocS_DeleteAccountRequest">DeleteAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteaccountrequest"></a>
<a id="schema_DeleteAccountRequest"></a>
<a id="tocSdeleteaccountrequest"></a>
<a id="tocsdeleteaccountrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteAppInstanceAdminRequest">DeleteAppInstanceAdminRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteappinstanceadminrequest"></a>
<a id="schema_DeleteAppInstanceAdminRequest"></a>
<a id="tocSdeleteappinstanceadminrequest"></a>
<a id="tocsdeleteappinstanceadminrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteAppInstanceRequest">DeleteAppInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteappinstancerequest"></a>
<a id="schema_DeleteAppInstanceRequest"></a>
<a id="tocSdeleteappinstancerequest"></a>
<a id="tocsdeleteappinstancerequest"></a>

```json
{}
```

<h2 id="tocS_DeleteAppInstanceStreamingConfigurationsRequest">DeleteAppInstanceStreamingConfigurationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteappinstancestreamingconfigurationsrequest"></a>
<a id="schema_DeleteAppInstanceStreamingConfigurationsRequest"></a>
<a id="tocSdeleteappinstancestreamingconfigurationsrequest"></a>
<a id="tocsdeleteappinstancestreamingconfigurationsrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteAppInstanceUserRequest">DeleteAppInstanceUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteappinstanceuserrequest"></a>
<a id="schema_DeleteAppInstanceUserRequest"></a>
<a id="tocSdeleteappinstanceuserrequest"></a>
<a id="tocsdeleteappinstanceuserrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteAttendeeRequest">DeleteAttendeeRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteattendeerequest"></a>
<a id="schema_DeleteAttendeeRequest"></a>
<a id="tocSdeleteattendeerequest"></a>
<a id="tocsdeleteattendeerequest"></a>

```json
{}
```

<h2 id="tocS_DeleteChannelBanRequest">DeleteChannelBanRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletechannelbanrequest"></a>
<a id="schema_DeleteChannelBanRequest"></a>
<a id="tocSdeletechannelbanrequest"></a>
<a id="tocsdeletechannelbanrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteChannelMembershipRequest">DeleteChannelMembershipRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletechannelmembershiprequest"></a>
<a id="schema_DeleteChannelMembershipRequest"></a>
<a id="tocSdeletechannelmembershiprequest"></a>
<a id="tocsdeletechannelmembershiprequest"></a>

```json
{}
```

<h2 id="tocS_DeleteChannelMessageRequest">DeleteChannelMessageRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletechannelmessagerequest"></a>
<a id="schema_DeleteChannelMessageRequest"></a>
<a id="tocSdeletechannelmessagerequest"></a>
<a id="tocsdeletechannelmessagerequest"></a>

```json
{}
```

<h2 id="tocS_DeleteChannelModeratorRequest">DeleteChannelModeratorRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletechannelmoderatorrequest"></a>
<a id="schema_DeleteChannelModeratorRequest"></a>
<a id="tocSdeletechannelmoderatorrequest"></a>
<a id="tocsdeletechannelmoderatorrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteChannelRequest">DeleteChannelRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletechannelrequest"></a>
<a id="schema_DeleteChannelRequest"></a>
<a id="tocSdeletechannelrequest"></a>
<a id="tocsdeletechannelrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteEventsConfigurationRequest">DeleteEventsConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteeventsconfigurationrequest"></a>
<a id="schema_DeleteEventsConfigurationRequest"></a>
<a id="tocSdeleteeventsconfigurationrequest"></a>
<a id="tocsdeleteeventsconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteMediaCapturePipelineRequest">DeleteMediaCapturePipelineRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletemediacapturepipelinerequest"></a>
<a id="schema_DeleteMediaCapturePipelineRequest"></a>
<a id="tocSdeletemediacapturepipelinerequest"></a>
<a id="tocsdeletemediacapturepipelinerequest"></a>

```json
{}
```

<h2 id="tocS_DeleteMeetingRequest">DeleteMeetingRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletemeetingrequest"></a>
<a id="schema_DeleteMeetingRequest"></a>
<a id="tocSdeletemeetingrequest"></a>
<a id="tocsdeletemeetingrequest"></a>

```json
{}
```

<h2 id="tocS_DeletePhoneNumberRequest">DeletePhoneNumberRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletephonenumberrequest"></a>
<a id="schema_DeletePhoneNumberRequest"></a>
<a id="tocSdeletephonenumberrequest"></a>
<a id="tocsdeletephonenumberrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteProxySessionRequest">DeleteProxySessionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteproxysessionrequest"></a>
<a id="schema_DeleteProxySessionRequest"></a>
<a id="tocSdeleteproxysessionrequest"></a>
<a id="tocsdeleteproxysessionrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteRoomMembershipRequest">DeleteRoomMembershipRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteroommembershiprequest"></a>
<a id="schema_DeleteRoomMembershipRequest"></a>
<a id="tocSdeleteroommembershiprequest"></a>
<a id="tocsdeleteroommembershiprequest"></a>

```json
{}
```

<h2 id="tocS_DeleteRoomRequest">DeleteRoomRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteroomrequest"></a>
<a id="schema_DeleteRoomRequest"></a>
<a id="tocSdeleteroomrequest"></a>
<a id="tocsdeleteroomrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteSipMediaApplicationRequest">DeleteSipMediaApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletesipmediaapplicationrequest"></a>
<a id="schema_DeleteSipMediaApplicationRequest"></a>
<a id="tocSdeletesipmediaapplicationrequest"></a>
<a id="tocsdeletesipmediaapplicationrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteSipRuleRequest">DeleteSipRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletesiprulerequest"></a>
<a id="schema_DeleteSipRuleRequest"></a>
<a id="tocSdeletesiprulerequest"></a>
<a id="tocsdeletesiprulerequest"></a>

```json
{}
```

<h2 id="tocS_DeleteVoiceConnectorEmergencyCallingConfigurationRequest">DeleteVoiceConnectorEmergencyCallingConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletevoiceconnectoremergencycallingconfigurationrequest"></a>
<a id="schema_DeleteVoiceConnectorEmergencyCallingConfigurationRequest"></a>
<a id="tocSdeletevoiceconnectoremergencycallingconfigurationrequest"></a>
<a id="tocsdeletevoiceconnectoremergencycallingconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteVoiceConnectorGroupRequest">DeleteVoiceConnectorGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletevoiceconnectorgrouprequest"></a>
<a id="schema_DeleteVoiceConnectorGroupRequest"></a>
<a id="tocSdeletevoiceconnectorgrouprequest"></a>
<a id="tocsdeletevoiceconnectorgrouprequest"></a>

```json
{}
```

<h2 id="tocS_DeleteVoiceConnectorOriginationRequest">DeleteVoiceConnectorOriginationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletevoiceconnectororiginationrequest"></a>
<a id="schema_DeleteVoiceConnectorOriginationRequest"></a>
<a id="tocSdeletevoiceconnectororiginationrequest"></a>
<a id="tocsdeletevoiceconnectororiginationrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteVoiceConnectorProxyRequest">DeleteVoiceConnectorProxyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletevoiceconnectorproxyrequest"></a>
<a id="schema_DeleteVoiceConnectorProxyRequest"></a>
<a id="tocSdeletevoiceconnectorproxyrequest"></a>
<a id="tocsdeletevoiceconnectorproxyrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteVoiceConnectorRequest">DeleteVoiceConnectorRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletevoiceconnectorrequest"></a>
<a id="schema_DeleteVoiceConnectorRequest"></a>
<a id="tocSdeletevoiceconnectorrequest"></a>
<a id="tocsdeletevoiceconnectorrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteVoiceConnectorStreamingConfigurationRequest">DeleteVoiceConnectorStreamingConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletevoiceconnectorstreamingconfigurationrequest"></a>
<a id="schema_DeleteVoiceConnectorStreamingConfigurationRequest"></a>
<a id="tocSdeletevoiceconnectorstreamingconfigurationrequest"></a>
<a id="tocsdeletevoiceconnectorstreamingconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_SensitiveStringList">SensitiveStringList</h2>
<!-- backwards compatibility -->
<a id="schemasensitivestringlist"></a>
<a id="schema_SensitiveStringList"></a>
<a id="tocSsensitivestringlist"></a>
<a id="tocssensitivestringlist"></a>

```json
[
  "password"
]
```

<h2 id="tocS_DeleteVoiceConnectorTerminationCredentialsRequest">DeleteVoiceConnectorTerminationCredentialsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletevoiceconnectorterminationcredentialsrequest"></a>
<a id="schema_DeleteVoiceConnectorTerminationCredentialsRequest"></a>
<a id="tocSdeletevoiceconnectorterminationcredentialsrequest"></a>
<a id="tocsdeletevoiceconnectorterminationcredentialsrequest"></a>

```json
{
  "Usernames": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Usernames|object|true|none|none|

<h2 id="tocS_DeleteVoiceConnectorTerminationRequest">DeleteVoiceConnectorTerminationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletevoiceconnectorterminationrequest"></a>
<a id="schema_DeleteVoiceConnectorTerminationRequest"></a>
<a id="tocSdeletevoiceconnectorterminationrequest"></a>
<a id="tocsdeletevoiceconnectorterminationrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeAppInstanceAdminRequest">DescribeAppInstanceAdminRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeappinstanceadminrequest"></a>
<a id="schema_DescribeAppInstanceAdminRequest"></a>
<a id="tocSdescribeappinstanceadminrequest"></a>
<a id="tocsdescribeappinstanceadminrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeAppInstanceRequest">DescribeAppInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeappinstancerequest"></a>
<a id="schema_DescribeAppInstanceRequest"></a>
<a id="tocSdescribeappinstancerequest"></a>
<a id="tocsdescribeappinstancerequest"></a>

```json
{}
```

<h2 id="tocS_DescribeAppInstanceUserRequest">DescribeAppInstanceUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeappinstanceuserrequest"></a>
<a id="schema_DescribeAppInstanceUserRequest"></a>
<a id="tocSdescribeappinstanceuserrequest"></a>
<a id="tocsdescribeappinstanceuserrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeChannelBanRequest">DescribeChannelBanRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribechannelbanrequest"></a>
<a id="schema_DescribeChannelBanRequest"></a>
<a id="tocSdescribechannelbanrequest"></a>
<a id="tocsdescribechannelbanrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeChannelMembershipForAppInstanceUserRequest">DescribeChannelMembershipForAppInstanceUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribechannelmembershipforappinstanceuserrequest"></a>
<a id="schema_DescribeChannelMembershipForAppInstanceUserRequest"></a>
<a id="tocSdescribechannelmembershipforappinstanceuserrequest"></a>
<a id="tocsdescribechannelmembershipforappinstanceuserrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeChannelMembershipRequest">DescribeChannelMembershipRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribechannelmembershiprequest"></a>
<a id="schema_DescribeChannelMembershipRequest"></a>
<a id="tocSdescribechannelmembershiprequest"></a>
<a id="tocsdescribechannelmembershiprequest"></a>

```json
{}
```

<h2 id="tocS_DescribeChannelModeratedByAppInstanceUserRequest">DescribeChannelModeratedByAppInstanceUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribechannelmoderatedbyappinstanceuserrequest"></a>
<a id="schema_DescribeChannelModeratedByAppInstanceUserRequest"></a>
<a id="tocSdescribechannelmoderatedbyappinstanceuserrequest"></a>
<a id="tocsdescribechannelmoderatedbyappinstanceuserrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeChannelModeratorRequest">DescribeChannelModeratorRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribechannelmoderatorrequest"></a>
<a id="schema_DescribeChannelModeratorRequest"></a>
<a id="tocSdescribechannelmoderatorrequest"></a>
<a id="tocsdescribechannelmoderatorrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeChannelRequest">DescribeChannelRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribechannelrequest"></a>
<a id="schema_DescribeChannelRequest"></a>
<a id="tocSdescribechannelrequest"></a>
<a id="tocsdescribechannelrequest"></a>

```json
{}
```

<h2 id="tocS_DisassociatePhoneNumberFromUserRequest">DisassociatePhoneNumberFromUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatephonenumberfromuserrequest"></a>
<a id="schema_DisassociatePhoneNumberFromUserRequest"></a>
<a id="tocSdisassociatephonenumberfromuserrequest"></a>
<a id="tocsdisassociatephonenumberfromuserrequest"></a>

```json
{}
```

<h2 id="tocS_DisassociatePhoneNumbersFromVoiceConnectorGroupRequest">DisassociatePhoneNumbersFromVoiceConnectorGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatephonenumbersfromvoiceconnectorgrouprequest"></a>
<a id="schema_DisassociatePhoneNumbersFromVoiceConnectorGroupRequest"></a>
<a id="tocSdisassociatephonenumbersfromvoiceconnectorgrouprequest"></a>
<a id="tocsdisassociatephonenumbersfromvoiceconnectorgrouprequest"></a>

```json
{
  "E164PhoneNumbers": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|E164PhoneNumbers|object|true|none|none|

<h2 id="tocS_DisassociatePhoneNumbersFromVoiceConnectorRequest">DisassociatePhoneNumbersFromVoiceConnectorRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatephonenumbersfromvoiceconnectorrequest"></a>
<a id="schema_DisassociatePhoneNumbersFromVoiceConnectorRequest"></a>
<a id="tocSdisassociatephonenumbersfromvoiceconnectorrequest"></a>
<a id="tocsdisassociatephonenumbersfromvoiceconnectorrequest"></a>

```json
{
  "E164PhoneNumbers": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|E164PhoneNumbers|object|true|none|none|

<h2 id="tocS_DisassociateSigninDelegateGroupsFromAccountRequest">DisassociateSigninDelegateGroupsFromAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatesignindelegategroupsfromaccountrequest"></a>
<a id="schema_DisassociateSigninDelegateGroupsFromAccountRequest"></a>
<a id="tocSdisassociatesignindelegategroupsfromaccountrequest"></a>
<a id="tocsdisassociatesignindelegategroupsfromaccountrequest"></a>

```json
{
  "GroupNames": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupNames|object|true|none|none|

<h2 id="tocS_EmailStatus">EmailStatus</h2>
<!-- backwards compatibility -->
<a id="schemaemailstatus"></a>
<a id="schema_EmailStatus"></a>
<a id="tocSemailstatus"></a>
<a id="tocsemailstatus"></a>

```json
"NotSent"
```

<h2 id="tocS_EmergencyCallingConfiguration">EmergencyCallingConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaemergencycallingconfiguration"></a>
<a id="schema_EmergencyCallingConfiguration"></a>
<a id="tocSemergencycallingconfiguration"></a>
<a id="tocsemergencycallingconfiguration"></a>

```json
{
  "DNIS": {}
}
```

The emergency calling configuration details associated with an Amazon Chime Voice Connector.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DNIS|object|false|none|none|

<h2 id="tocS_TranscribeMedicalLanguageCode">TranscribeMedicalLanguageCode</h2>
<!-- backwards compatibility -->
<a id="schematranscribemedicallanguagecode"></a>
<a id="schema_TranscribeMedicalLanguageCode"></a>
<a id="tocStranscribemedicallanguagecode"></a>
<a id="tocstranscribemedicallanguagecode"></a>

```json
"en-US"
```

<h2 id="tocS_TranscribeMedicalSpecialty">TranscribeMedicalSpecialty</h2>
<!-- backwards compatibility -->
<a id="schematranscribemedicalspecialty"></a>
<a id="schema_TranscribeMedicalSpecialty"></a>
<a id="tocStranscribemedicalspecialty"></a>
<a id="tocstranscribemedicalspecialty"></a>

```json
"PRIMARYCARE"
```

<h2 id="tocS_TranscribeMedicalType">TranscribeMedicalType</h2>
<!-- backwards compatibility -->
<a id="schematranscribemedicaltype"></a>
<a id="schema_TranscribeMedicalType"></a>
<a id="tocStranscribemedicaltype"></a>
<a id="tocstranscribemedicaltype"></a>

```json
"CONVERSATION"
```

<h2 id="tocS_TranscribeMedicalRegion">TranscribeMedicalRegion</h2>
<!-- backwards compatibility -->
<a id="schematranscribemedicalregion"></a>
<a id="schema_TranscribeMedicalRegion"></a>
<a id="tocStranscribemedicalregion"></a>
<a id="tocstranscribemedicalregion"></a>

```json
"us-east-1"
```

<h2 id="tocS_TranscribeMedicalContentIdentificationType">TranscribeMedicalContentIdentificationType</h2>
<!-- backwards compatibility -->
<a id="schematranscribemedicalcontentidentificationtype"></a>
<a id="schema_TranscribeMedicalContentIdentificationType"></a>
<a id="tocStranscribemedicalcontentidentificationtype"></a>
<a id="tocstranscribemedicalcontentidentificationtype"></a>

```json
"PHI"
```

<h2 id="tocS_TranscribeLanguageCode">TranscribeLanguageCode</h2>
<!-- backwards compatibility -->
<a id="schematranscribelanguagecode"></a>
<a id="schema_TranscribeLanguageCode"></a>
<a id="tocStranscribelanguagecode"></a>
<a id="tocstranscribelanguagecode"></a>

```json
"en-US"
```

<h2 id="tocS_TranscribeVocabularyFilterMethod">TranscribeVocabularyFilterMethod</h2>
<!-- backwards compatibility -->
<a id="schematranscribevocabularyfiltermethod"></a>
<a id="schema_TranscribeVocabularyFilterMethod"></a>
<a id="tocStranscribevocabularyfiltermethod"></a>
<a id="tocstranscribevocabularyfiltermethod"></a>

```json
"remove"
```

<h2 id="tocS_TranscribeRegion">TranscribeRegion</h2>
<!-- backwards compatibility -->
<a id="schematranscriberegion"></a>
<a id="schema_TranscribeRegion"></a>
<a id="tocStranscriberegion"></a>
<a id="tocstranscriberegion"></a>

```json
"us-east-2"
```

<h2 id="tocS_TranscribePartialResultsStability">TranscribePartialResultsStability</h2>
<!-- backwards compatibility -->
<a id="schematranscribepartialresultsstability"></a>
<a id="schema_TranscribePartialResultsStability"></a>
<a id="tocStranscribepartialresultsstability"></a>
<a id="tocstranscribepartialresultsstability"></a>

```json
"low"
```

<h2 id="tocS_TranscribeContentIdentificationType">TranscribeContentIdentificationType</h2>
<!-- backwards compatibility -->
<a id="schematranscribecontentidentificationtype"></a>
<a id="schema_TranscribeContentIdentificationType"></a>
<a id="tocStranscribecontentidentificationtype"></a>
<a id="tocstranscribecontentidentificationtype"></a>

```json
"PII"
```

<h2 id="tocS_TranscribeContentRedactionType">TranscribeContentRedactionType</h2>
<!-- backwards compatibility -->
<a id="schematranscribecontentredactiontype"></a>
<a id="schema_TranscribeContentRedactionType"></a>
<a id="tocStranscribecontentredactiontype"></a>
<a id="tocstranscribecontentredactiontype"></a>

```json
"PII"
```

<h2 id="tocS_TranscribePiiEntityTypes">TranscribePiiEntityTypes</h2>
<!-- backwards compatibility -->
<a id="schematranscribepiientitytypes"></a>
<a id="schema_TranscribePiiEntityTypes"></a>
<a id="tocStranscribepiientitytypes"></a>
<a id="tocstranscribepiientitytypes"></a>

```json
"string"
```

<h2 id="tocS_TranscribeLanguageModelName">TranscribeLanguageModelName</h2>
<!-- backwards compatibility -->
<a id="schematranscribelanguagemodelname"></a>
<a id="schema_TranscribeLanguageModelName"></a>
<a id="tocStranscribelanguagemodelname"></a>
<a id="tocstranscribelanguagemodelname"></a>

```json
"string"
```

<h2 id="tocS_TranscribeLanguageOptions">TranscribeLanguageOptions</h2>
<!-- backwards compatibility -->
<a id="schematranscribelanguageoptions"></a>
<a id="schema_TranscribeLanguageOptions"></a>
<a id="tocStranscribelanguageoptions"></a>
<a id="tocstranscribelanguageoptions"></a>

```json
"string"
```

<h2 id="tocS_TranscribeVocabularyNamesOrFilterNamesString">TranscribeVocabularyNamesOrFilterNamesString</h2>
<!-- backwards compatibility -->
<a id="schematranscribevocabularynamesorfilternamesstring"></a>
<a id="schema_TranscribeVocabularyNamesOrFilterNamesString"></a>
<a id="tocStranscribevocabularynamesorfilternamesstring"></a>
<a id="tocstranscribevocabularynamesorfilternamesstring"></a>

```json
"string"
```

<h2 id="tocS_EventsConfiguration">EventsConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaeventsconfiguration"></a>
<a id="schema_EventsConfiguration"></a>
<a id="tocSeventsconfiguration"></a>
<a id="tocseventsconfiguration"></a>

```json
{
  "BotId": {},
  "OutboundEventsHTTPSEndpoint": {},
  "LambdaFunctionArn": {}
}
```

The configuration that allows a bot to receive outgoing events. Can be either an HTTPS endpoint or a Lambda function ARN.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BotId|object|false|none|none|
|OutboundEventsHTTPSEndpoint|object|false|none|none|
|LambdaFunctionArn|object|false|none|none|

<h2 id="tocS_ExternalUserIdList">ExternalUserIdList</h2>
<!-- backwards compatibility -->
<a id="schemaexternaluseridlist"></a>
<a id="schema_ExternalUserIdList"></a>
<a id="tocSexternaluseridlist"></a>
<a id="tocsexternaluseridlist"></a>

```json
[
  "password"
]
```

<h2 id="tocS_FunctionArn">FunctionArn</h2>
<!-- backwards compatibility -->
<a id="schemafunctionarn"></a>
<a id="schema_FunctionArn"></a>
<a id="tocSfunctionarn"></a>
<a id="tocsfunctionarn"></a>

```json
"password"
```

<h2 id="tocS_GetAccountRequest">GetAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetaccountrequest"></a>
<a id="schema_GetAccountRequest"></a>
<a id="tocSgetaccountrequest"></a>
<a id="tocsgetaccountrequest"></a>

```json
{}
```

<h2 id="tocS_GetAccountSettingsRequest">GetAccountSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetaccountsettingsrequest"></a>
<a id="schema_GetAccountSettingsRequest"></a>
<a id="tocSgetaccountsettingsrequest"></a>
<a id="tocsgetaccountsettingsrequest"></a>

```json
{}
```

<h2 id="tocS_GetAppInstanceRetentionSettingsRequest">GetAppInstanceRetentionSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetappinstanceretentionsettingsrequest"></a>
<a id="schema_GetAppInstanceRetentionSettingsRequest"></a>
<a id="tocSgetappinstanceretentionsettingsrequest"></a>
<a id="tocsgetappinstanceretentionsettingsrequest"></a>

```json
{}
```

<h2 id="tocS_GetAppInstanceStreamingConfigurationsRequest">GetAppInstanceStreamingConfigurationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetappinstancestreamingconfigurationsrequest"></a>
<a id="schema_GetAppInstanceStreamingConfigurationsRequest"></a>
<a id="tocSgetappinstancestreamingconfigurationsrequest"></a>
<a id="tocsgetappinstancestreamingconfigurationsrequest"></a>

```json
{}
```

<h2 id="tocS_GetAttendeeRequest">GetAttendeeRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetattendeerequest"></a>
<a id="schema_GetAttendeeRequest"></a>
<a id="tocSgetattendeerequest"></a>
<a id="tocsgetattendeerequest"></a>

```json
{}
```

<h2 id="tocS_GetBotRequest">GetBotRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbotrequest"></a>
<a id="schema_GetBotRequest"></a>
<a id="tocSgetbotrequest"></a>
<a id="tocsgetbotrequest"></a>

```json
{}
```

<h2 id="tocS_GetChannelMessageRequest">GetChannelMessageRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetchannelmessagerequest"></a>
<a id="schema_GetChannelMessageRequest"></a>
<a id="tocSgetchannelmessagerequest"></a>
<a id="tocsgetchannelmessagerequest"></a>

```json
{}
```

<h2 id="tocS_GetEventsConfigurationRequest">GetEventsConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemageteventsconfigurationrequest"></a>
<a id="schema_GetEventsConfigurationRequest"></a>
<a id="tocSgeteventsconfigurationrequest"></a>
<a id="tocsgeteventsconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_VoiceConnectorSettings">VoiceConnectorSettings</h2>
<!-- backwards compatibility -->
<a id="schemavoiceconnectorsettings"></a>
<a id="schema_VoiceConnectorSettings"></a>
<a id="tocSvoiceconnectorsettings"></a>
<a id="tocsvoiceconnectorsettings"></a>

```json
{
  "CdrBucket": {}
}
```

The Amazon Chime Voice Connector settings. Includes any Amazon S3 buckets designated for storing call detail records.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CdrBucket|object|false|none|none|

<h2 id="tocS_GetMediaCapturePipelineRequest">GetMediaCapturePipelineRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetmediacapturepipelinerequest"></a>
<a id="schema_GetMediaCapturePipelineRequest"></a>
<a id="tocSgetmediacapturepipelinerequest"></a>
<a id="tocsgetmediacapturepipelinerequest"></a>

```json
{}
```

<h2 id="tocS_GetMeetingRequest">GetMeetingRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetmeetingrequest"></a>
<a id="schema_GetMeetingRequest"></a>
<a id="tocSgetmeetingrequest"></a>
<a id="tocsgetmeetingrequest"></a>

```json
{}
```

<h2 id="tocS_GetMessagingSessionEndpointRequest">GetMessagingSessionEndpointRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetmessagingsessionendpointrequest"></a>
<a id="schema_GetMessagingSessionEndpointRequest"></a>
<a id="tocSgetmessagingsessionendpointrequest"></a>
<a id="tocsgetmessagingsessionendpointrequest"></a>

```json
{}
```

<h2 id="tocS_MessagingSessionEndpoint">MessagingSessionEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemamessagingsessionendpoint"></a>
<a id="schema_MessagingSessionEndpoint"></a>
<a id="tocSmessagingsessionendpoint"></a>
<a id="tocsmessagingsessionendpoint"></a>

```json
{
  "Url": {}
}
```

The websocket endpoint used to connect to Amazon Chime SDK messaging.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Url|object|false|none|none|

<h2 id="tocS_GetPhoneNumberOrderRequest">GetPhoneNumberOrderRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetphonenumberorderrequest"></a>
<a id="schema_GetPhoneNumberOrderRequest"></a>
<a id="tocSgetphonenumberorderrequest"></a>
<a id="tocsgetphonenumberorderrequest"></a>

```json
{}
```

<h2 id="tocS_GetPhoneNumberRequest">GetPhoneNumberRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetphonenumberrequest"></a>
<a id="schema_GetPhoneNumberRequest"></a>
<a id="tocSgetphonenumberrequest"></a>
<a id="tocsgetphonenumberrequest"></a>

```json
{}
```

<h2 id="tocS_PhoneNumber">PhoneNumber</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumber"></a>
<a id="schema_PhoneNumber"></a>
<a id="tocSphonenumber"></a>
<a id="tocsphonenumber"></a>

```json
{
  "PhoneNumberId": {},
  "E164PhoneNumber": {},
  "Country": {},
  "Type": {},
  "ProductType": {},
  "Status": {},
  "Capabilities": {
    "InboundCall": {},
    "OutboundCall": {},
    "InboundSMS": {},
    "OutboundSMS": {},
    "InboundMMS": {},
    "OutboundMMS": {}
  },
  "Associations": {},
  "CallingName": {},
  "CallingNameStatus": {},
  "CreatedTimestamp": {},
  "UpdatedTimestamp": {},
  "DeletionTimestamp": {}
}
```

A phone number used for Amazon Chime Business Calling or an Amazon Chime Voice Connector.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PhoneNumberId|object|false|none|none|
|E164PhoneNumber|object|false|none|none|
|Country|object|false|none|none|
|Type|object|false|none|none|
|ProductType|object|false|none|none|
|Status|object|false|none|none|
|Capabilities|object|false|none|none|
|Associations|object|false|none|none|
|CallingName|object|false|none|none|
|CallingNameStatus|object|false|none|none|
|CreatedTimestamp|object|false|none|none|
|UpdatedTimestamp|object|false|none|none|
|DeletionTimestamp|object|false|none|none|

<h2 id="tocS_GetProxySessionRequest">GetProxySessionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetproxysessionrequest"></a>
<a id="schema_GetProxySessionRequest"></a>
<a id="tocSgetproxysessionrequest"></a>
<a id="tocsgetproxysessionrequest"></a>

```json
{}
```

<h2 id="tocS_GetRetentionSettingsRequest">GetRetentionSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetretentionsettingsrequest"></a>
<a id="schema_GetRetentionSettingsRequest"></a>
<a id="tocSgetretentionsettingsrequest"></a>
<a id="tocsgetretentionsettingsrequest"></a>

```json
{}
```

<h2 id="tocS_RetentionSettings">RetentionSettings</h2>
<!-- backwards compatibility -->
<a id="schemaretentionsettings"></a>
<a id="schema_RetentionSettings"></a>
<a id="tocSretentionsettings"></a>
<a id="tocsretentionsettings"></a>

```json
{
  "RoomRetentionSettings": {
    "RetentionDays": {}
  },
  "ConversationRetentionSettings": {
    "RetentionDays": {}
  }
}
```

The retention settings for an Amazon Chime Enterprise account that determine how long to retain items such as chat-room messages and chat-conversation messages.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoomRetentionSettings|object|false|none|none|
|ConversationRetentionSettings|object|false|none|none|

<h2 id="tocS_GetRoomRequest">GetRoomRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetroomrequest"></a>
<a id="schema_GetRoomRequest"></a>
<a id="tocSgetroomrequest"></a>
<a id="tocsgetroomrequest"></a>

```json
{}
```

<h2 id="tocS_GetSipMediaApplicationLoggingConfigurationRequest">GetSipMediaApplicationLoggingConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsipmediaapplicationloggingconfigurationrequest"></a>
<a id="schema_GetSipMediaApplicationLoggingConfigurationRequest"></a>
<a id="tocSgetsipmediaapplicationloggingconfigurationrequest"></a>
<a id="tocsgetsipmediaapplicationloggingconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_SipMediaApplicationLoggingConfiguration">SipMediaApplicationLoggingConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemasipmediaapplicationloggingconfiguration"></a>
<a id="schema_SipMediaApplicationLoggingConfiguration"></a>
<a id="tocSsipmediaapplicationloggingconfiguration"></a>
<a id="tocssipmediaapplicationloggingconfiguration"></a>

```json
{
  "EnableSipMediaApplicationMessageLogs": {}
}
```

Logging configuration of the SIP media application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EnableSipMediaApplicationMessageLogs|object|false|none|none|

<h2 id="tocS_GetSipMediaApplicationRequest">GetSipMediaApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsipmediaapplicationrequest"></a>
<a id="schema_GetSipMediaApplicationRequest"></a>
<a id="tocSgetsipmediaapplicationrequest"></a>
<a id="tocsgetsipmediaapplicationrequest"></a>

```json
{}
```

<h2 id="tocS_GetSipRuleRequest">GetSipRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsiprulerequest"></a>
<a id="schema_GetSipRuleRequest"></a>
<a id="tocSgetsiprulerequest"></a>
<a id="tocsgetsiprulerequest"></a>

```json
{}
```

<h2 id="tocS_GetUserRequest">GetUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetuserrequest"></a>
<a id="schema_GetUserRequest"></a>
<a id="tocSgetuserrequest"></a>
<a id="tocsgetuserrequest"></a>

```json
{}
```

<h2 id="tocS_GetUserSettingsRequest">GetUserSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetusersettingsrequest"></a>
<a id="schema_GetUserSettingsRequest"></a>
<a id="tocSgetusersettingsrequest"></a>
<a id="tocsgetusersettingsrequest"></a>

```json
{}
```

<h2 id="tocS_UserSettings">UserSettings</h2>
<!-- backwards compatibility -->
<a id="schemausersettings"></a>
<a id="schema_UserSettings"></a>
<a id="tocSusersettings"></a>
<a id="tocsusersettings"></a>

```json
{
  "Telephony": {
    "InboundCalling": {},
    "OutboundCalling": {},
    "SMS": {}
  }
}
```

Settings associated with an Amazon Chime user, including inbound and outbound calling and text messaging.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Telephony|object|true|none|none|

<h2 id="tocS_GetVoiceConnectorEmergencyCallingConfigurationRequest">GetVoiceConnectorEmergencyCallingConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetvoiceconnectoremergencycallingconfigurationrequest"></a>
<a id="schema_GetVoiceConnectorEmergencyCallingConfigurationRequest"></a>
<a id="tocSgetvoiceconnectoremergencycallingconfigurationrequest"></a>
<a id="tocsgetvoiceconnectoremergencycallingconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_GetVoiceConnectorGroupRequest">GetVoiceConnectorGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetvoiceconnectorgrouprequest"></a>
<a id="schema_GetVoiceConnectorGroupRequest"></a>
<a id="tocSgetvoiceconnectorgrouprequest"></a>
<a id="tocsgetvoiceconnectorgrouprequest"></a>

```json
{}
```

<h2 id="tocS_GetVoiceConnectorLoggingConfigurationRequest">GetVoiceConnectorLoggingConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetvoiceconnectorloggingconfigurationrequest"></a>
<a id="schema_GetVoiceConnectorLoggingConfigurationRequest"></a>
<a id="tocSgetvoiceconnectorloggingconfigurationrequest"></a>
<a id="tocsgetvoiceconnectorloggingconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_LoggingConfiguration">LoggingConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaloggingconfiguration"></a>
<a id="schema_LoggingConfiguration"></a>
<a id="tocSloggingconfiguration"></a>
<a id="tocsloggingconfiguration"></a>

```json
{
  "EnableSIPLogs": {},
  "EnableMediaMetricLogs": {}
}
```

The logging configuration associated with an Amazon Chime Voice Connector. Specifies whether SIP message logs are enabled for sending to Amazon CloudWatch Logs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EnableSIPLogs|object|false|none|none|
|EnableMediaMetricLogs|object|false|none|none|

<h2 id="tocS_GetVoiceConnectorOriginationRequest">GetVoiceConnectorOriginationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetvoiceconnectororiginationrequest"></a>
<a id="schema_GetVoiceConnectorOriginationRequest"></a>
<a id="tocSgetvoiceconnectororiginationrequest"></a>
<a id="tocsgetvoiceconnectororiginationrequest"></a>

```json
{}
```

<h2 id="tocS_Origination">Origination</h2>
<!-- backwards compatibility -->
<a id="schemaorigination"></a>
<a id="schema_Origination"></a>
<a id="tocSorigination"></a>
<a id="tocsorigination"></a>

```json
{
  "Routes": {},
  "Disabled": {}
}
```

<p>Origination settings enable your SIP hosts to receive inbound calls using your Amazon Chime Voice Connector.</p> <note> <p>The parameters listed below are not required, but you must use at least one. </p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Routes|object|false|none|none|
|Disabled|object|false|none|none|

<h2 id="tocS_GetVoiceConnectorProxyRequest">GetVoiceConnectorProxyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetvoiceconnectorproxyrequest"></a>
<a id="schema_GetVoiceConnectorProxyRequest"></a>
<a id="tocSgetvoiceconnectorproxyrequest"></a>
<a id="tocsgetvoiceconnectorproxyrequest"></a>

```json
{}
```

<h2 id="tocS_Proxy">Proxy</h2>
<!-- backwards compatibility -->
<a id="schemaproxy"></a>
<a id="schema_Proxy"></a>
<a id="tocSproxy"></a>
<a id="tocsproxy"></a>

```json
{
  "DefaultSessionExpiryMinutes": {},
  "Disabled": {},
  "FallBackPhoneNumber": {},
  "PhoneNumberCountries": {}
}
```

The proxy configuration for an Amazon Chime Voice Connector.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DefaultSessionExpiryMinutes|object|false|none|none|
|Disabled|object|false|none|none|
|FallBackPhoneNumber|object|false|none|none|
|PhoneNumberCountries|object|false|none|none|

<h2 id="tocS_GetVoiceConnectorRequest">GetVoiceConnectorRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetvoiceconnectorrequest"></a>
<a id="schema_GetVoiceConnectorRequest"></a>
<a id="tocSgetvoiceconnectorrequest"></a>
<a id="tocsgetvoiceconnectorrequest"></a>

```json
{}
```

<h2 id="tocS_GetVoiceConnectorStreamingConfigurationRequest">GetVoiceConnectorStreamingConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetvoiceconnectorstreamingconfigurationrequest"></a>
<a id="schema_GetVoiceConnectorStreamingConfigurationRequest"></a>
<a id="tocSgetvoiceconnectorstreamingconfigurationrequest"></a>
<a id="tocsgetvoiceconnectorstreamingconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_StreamingConfiguration">StreamingConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemastreamingconfiguration"></a>
<a id="schema_StreamingConfiguration"></a>
<a id="tocSstreamingconfiguration"></a>
<a id="tocsstreamingconfiguration"></a>

```json
{
  "DataRetentionInHours": {},
  "Disabled": {},
  "StreamingNotificationTargets": {}
}
```

The streaming configuration associated with an Amazon Chime Voice Connector. Specifies whether media streaming is enabled for sending to Amazon Kinesis, and shows the retention period for the Amazon Kinesis data, in hours.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataRetentionInHours|object|true|none|none|
|Disabled|object|false|none|none|
|StreamingNotificationTargets|object|false|none|none|

<h2 id="tocS_GetVoiceConnectorTerminationHealthRequest">GetVoiceConnectorTerminationHealthRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetvoiceconnectorterminationhealthrequest"></a>
<a id="schema_GetVoiceConnectorTerminationHealthRequest"></a>
<a id="tocSgetvoiceconnectorterminationhealthrequest"></a>
<a id="tocsgetvoiceconnectorterminationhealthrequest"></a>

```json
{}
```

<h2 id="tocS_TerminationHealth">TerminationHealth</h2>
<!-- backwards compatibility -->
<a id="schematerminationhealth"></a>
<a id="schema_TerminationHealth"></a>
<a id="tocSterminationhealth"></a>
<a id="tocsterminationhealth"></a>

```json
{
  "Timestamp": {},
  "Source": {}
}
```

The termination health details, including the source IP address and timestamp of the last successful SIP <code>OPTIONS</code> message from your SIP infrastructure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Timestamp|object|false|none|none|
|Source|object|false|none|none|

<h2 id="tocS_GetVoiceConnectorTerminationRequest">GetVoiceConnectorTerminationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetvoiceconnectorterminationrequest"></a>
<a id="schema_GetVoiceConnectorTerminationRequest"></a>
<a id="tocSgetvoiceconnectorterminationrequest"></a>
<a id="tocsgetvoiceconnectorterminationrequest"></a>

```json
{}
```

<h2 id="tocS_Termination">Termination</h2>
<!-- backwards compatibility -->
<a id="schematermination"></a>
<a id="schema_Termination"></a>
<a id="tocStermination"></a>
<a id="tocstermination"></a>

```json
{
  "CpsLimit": {},
  "DefaultPhoneNumber": {},
  "CallingRegions": {},
  "CidrAllowedList": {},
  "Disabled": {}
}
```

Termination settings enable your SIP hosts to make outbound calls using your Amazon Chime Voice Connector.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CpsLimit|object|false|none|none|
|DefaultPhoneNumber|object|false|none|none|
|CallingRegions|object|false|none|none|
|CidrAllowedList|object|false|none|none|
|Disabled|object|false|none|none|

<h2 id="tocS_ResourceName">ResourceName</h2>
<!-- backwards compatibility -->
<a id="schemaresourcename"></a>
<a id="schema_ResourceName"></a>
<a id="tocSresourcename"></a>
<a id="tocsresourcename"></a>

```json
"password"
```

<h2 id="tocS_Integer">Integer</h2>
<!-- backwards compatibility -->
<a id="schemainteger"></a>
<a id="schema_Integer"></a>
<a id="tocSinteger"></a>
<a id="tocsinteger"></a>

```json
0
```

<h2 id="tocS_InviteStatus">InviteStatus</h2>
<!-- backwards compatibility -->
<a id="schemainvitestatus"></a>
<a id="schema_InviteStatus"></a>
<a id="tocSinvitestatus"></a>
<a id="tocsinvitestatus"></a>

```json
"Pending"
```

<h2 id="tocS_Invite">Invite</h2>
<!-- backwards compatibility -->
<a id="schemainvite"></a>
<a id="schema_Invite"></a>
<a id="tocSinvite"></a>
<a id="tocsinvite"></a>

```json
{
  "InviteId": {},
  "Status": {},
  "EmailAddress": {},
  "EmailStatus": {}
}
```

Invitation object returned after emailing users to invite them to join the Amazon Chime <code>Team</code> account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InviteId|object|false|none|none|
|Status|object|false|none|none|
|EmailAddress|object|false|none|none|
|EmailStatus|object|false|none|none|

<h2 id="tocS_InviteList">InviteList</h2>
<!-- backwards compatibility -->
<a id="schemainvitelist"></a>
<a id="schema_InviteList"></a>
<a id="tocSinvitelist"></a>
<a id="tocsinvitelist"></a>

```json
[
  {
    "InviteId": {},
    "Status": {},
    "EmailAddress": {},
    "EmailStatus": {}
  }
]
```

<h2 id="tocS_UserEmailList">UserEmailList</h2>
<!-- backwards compatibility -->
<a id="schemauseremaillist"></a>
<a id="schema_UserEmailList"></a>
<a id="tocSuseremaillist"></a>
<a id="tocsuseremaillist"></a>

```json
[
  "password"
]
```

<h2 id="tocS_InviteUsersRequest">InviteUsersRequest</h2>
<!-- backwards compatibility -->
<a id="schemainviteusersrequest"></a>
<a id="schema_InviteUsersRequest"></a>
<a id="tocSinviteusersrequest"></a>
<a id="tocsinviteusersrequest"></a>

```json
{
  "UserEmailList": {},
  "UserType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserEmailList|object|true|none|none|
|UserType|object|false|none|none|

<h2 id="tocS_ProfileServiceMaxResults">ProfileServiceMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemaprofileservicemaxresults"></a>
<a id="schema_ProfileServiceMaxResults"></a>
<a id="tocSprofileservicemaxresults"></a>
<a id="tocsprofileservicemaxresults"></a>

```json
1
```

<h2 id="tocS_ListAccountsRequest">ListAccountsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistaccountsrequest"></a>
<a id="schema_ListAccountsRequest"></a>
<a id="tocSlistaccountsrequest"></a>
<a id="tocslistaccountsrequest"></a>

```json
{}
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

<h2 id="tocS_NextToken">NextToken</h2>
<!-- backwards compatibility -->
<a id="schemanexttoken"></a>
<a id="schema_NextToken"></a>
<a id="tocSnexttoken"></a>
<a id="tocsnexttoken"></a>

```json
"password"
```

<h2 id="tocS_ListAppInstanceAdminsRequest">ListAppInstanceAdminsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistappinstanceadminsrequest"></a>
<a id="schema_ListAppInstanceAdminsRequest"></a>
<a id="tocSlistappinstanceadminsrequest"></a>
<a id="tocslistappinstanceadminsrequest"></a>

```json
{}
```

<h2 id="tocS_ListAppInstanceUsersRequest">ListAppInstanceUsersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistappinstanceusersrequest"></a>
<a id="schema_ListAppInstanceUsersRequest"></a>
<a id="tocSlistappinstanceusersrequest"></a>
<a id="tocslistappinstanceusersrequest"></a>

```json
{}
```

<h2 id="tocS_ListAppInstancesRequest">ListAppInstancesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistappinstancesrequest"></a>
<a id="schema_ListAppInstancesRequest"></a>
<a id="tocSlistappinstancesrequest"></a>
<a id="tocslistappinstancesrequest"></a>

```json
{}
```

<h2 id="tocS_ListAttendeeTagsRequest">ListAttendeeTagsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistattendeetagsrequest"></a>
<a id="schema_ListAttendeeTagsRequest"></a>
<a id="tocSlistattendeetagsrequest"></a>
<a id="tocslistattendeetagsrequest"></a>

```json
{}
```

<h2 id="tocS_ResultMax">ResultMax</h2>
<!-- backwards compatibility -->
<a id="schemaresultmax"></a>
<a id="schema_ResultMax"></a>
<a id="tocSresultmax"></a>
<a id="tocsresultmax"></a>

```json
1
```

<h2 id="tocS_ListAttendeesRequest">ListAttendeesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistattendeesrequest"></a>
<a id="schema_ListAttendeesRequest"></a>
<a id="tocSlistattendeesrequest"></a>
<a id="tocslistattendeesrequest"></a>

```json
{}
```

<h2 id="tocS_ListBotsRequest">ListBotsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistbotsrequest"></a>
<a id="schema_ListBotsRequest"></a>
<a id="tocSlistbotsrequest"></a>
<a id="tocslistbotsrequest"></a>

```json
{}
```

<h2 id="tocS_ListChannelBansRequest">ListChannelBansRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistchannelbansrequest"></a>
<a id="schema_ListChannelBansRequest"></a>
<a id="tocSlistchannelbansrequest"></a>
<a id="tocslistchannelbansrequest"></a>

```json
{}
```

<h2 id="tocS_ListChannelMembershipsForAppInstanceUserRequest">ListChannelMembershipsForAppInstanceUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistchannelmembershipsforappinstanceuserrequest"></a>
<a id="schema_ListChannelMembershipsForAppInstanceUserRequest"></a>
<a id="tocSlistchannelmembershipsforappinstanceuserrequest"></a>
<a id="tocslistchannelmembershipsforappinstanceuserrequest"></a>

```json
{}
```

<h2 id="tocS_ListChannelMembershipsRequest">ListChannelMembershipsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistchannelmembershipsrequest"></a>
<a id="schema_ListChannelMembershipsRequest"></a>
<a id="tocSlistchannelmembershipsrequest"></a>
<a id="tocslistchannelmembershipsrequest"></a>

```json
{}
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

<h2 id="tocS_ListChannelMessagesRequest">ListChannelMessagesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistchannelmessagesrequest"></a>
<a id="schema_ListChannelMessagesRequest"></a>
<a id="tocSlistchannelmessagesrequest"></a>
<a id="tocslistchannelmessagesrequest"></a>

```json
{}
```

<h2 id="tocS_ListChannelModeratorsRequest">ListChannelModeratorsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistchannelmoderatorsrequest"></a>
<a id="schema_ListChannelModeratorsRequest"></a>
<a id="tocSlistchannelmoderatorsrequest"></a>
<a id="tocslistchannelmoderatorsrequest"></a>

```json
{}
```

<h2 id="tocS_ListChannelsModeratedByAppInstanceUserRequest">ListChannelsModeratedByAppInstanceUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistchannelsmoderatedbyappinstanceuserrequest"></a>
<a id="schema_ListChannelsModeratedByAppInstanceUserRequest"></a>
<a id="tocSlistchannelsmoderatedbyappinstanceuserrequest"></a>
<a id="tocslistchannelsmoderatedbyappinstanceuserrequest"></a>

```json
{}
```

<h2 id="tocS_ListChannelsRequest">ListChannelsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistchannelsrequest"></a>
<a id="schema_ListChannelsRequest"></a>
<a id="tocSlistchannelsrequest"></a>
<a id="tocslistchannelsrequest"></a>

```json
{}
```

<h2 id="tocS_ListMediaCapturePipelinesRequest">ListMediaCapturePipelinesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistmediacapturepipelinesrequest"></a>
<a id="schema_ListMediaCapturePipelinesRequest"></a>
<a id="tocSlistmediacapturepipelinesrequest"></a>
<a id="tocslistmediacapturepipelinesrequest"></a>

```json
{}
```

<h2 id="tocS_MediaCapturePipelineList">MediaCapturePipelineList</h2>
<!-- backwards compatibility -->
<a id="schemamediacapturepipelinelist"></a>
<a id="schema_MediaCapturePipelineList"></a>
<a id="tocSmediacapturepipelinelist"></a>
<a id="tocsmediacapturepipelinelist"></a>

```json
[
  {
    "MediaPipelineId": {},
    "SourceType": {},
    "SourceArn": {},
    "Status": {},
    "SinkType": {},
    "SinkArn": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {},
    "ChimeSdkMeetingConfiguration": {
      "SourceConfiguration": {
        "SelectedVideoStreams": {
          "AttendeeIds": {},
          "ExternalUserIds": {}
        }
      },
      "ArtifactsConfiguration": {
        "Audio": {
          "MuxType": {}
        },
        "Video": {
          "State": {},
          "MuxType": {}
        },
        "Content": {
          "State": {},
          "MuxType": {}
        }
      }
    }
  }
]
```

<h2 id="tocS_ListMeetingTagsRequest">ListMeetingTagsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistmeetingtagsrequest"></a>
<a id="schema_ListMeetingTagsRequest"></a>
<a id="tocSlistmeetingtagsrequest"></a>
<a id="tocslistmeetingtagsrequest"></a>

```json
{}
```

<h2 id="tocS_ListMeetingsRequest">ListMeetingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistmeetingsrequest"></a>
<a id="schema_ListMeetingsRequest"></a>
<a id="tocSlistmeetingsrequest"></a>
<a id="tocslistmeetingsrequest"></a>

```json
{}
```

<h2 id="tocS_MeetingList">MeetingList</h2>
<!-- backwards compatibility -->
<a id="schemameetinglist"></a>
<a id="schema_MeetingList"></a>
<a id="tocSmeetinglist"></a>
<a id="tocsmeetinglist"></a>

```json
[
  {
    "MeetingId": {},
    "ExternalMeetingId": {},
    "MediaPlacement": {
      "AudioHostUrl": {},
      "AudioFallbackUrl": {},
      "ScreenDataUrl": {},
      "ScreenSharingUrl": {},
      "ScreenViewingUrl": {},
      "SignalingUrl": {},
      "TurnControlUrl": {},
      "EventIngestionUrl": {}
    },
    "MediaRegion": {}
  }
]
```

<h2 id="tocS_ListPhoneNumberOrdersRequest">ListPhoneNumberOrdersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistphonenumberordersrequest"></a>
<a id="schema_ListPhoneNumberOrdersRequest"></a>
<a id="tocSlistphonenumberordersrequest"></a>
<a id="tocslistphonenumberordersrequest"></a>

```json
{}
```

<h2 id="tocS_PhoneNumberOrderList">PhoneNumberOrderList</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumberorderlist"></a>
<a id="schema_PhoneNumberOrderList"></a>
<a id="tocSphonenumberorderlist"></a>
<a id="tocsphonenumberorderlist"></a>

```json
[
  {
    "PhoneNumberOrderId": {},
    "ProductType": {},
    "Status": {},
    "OrderedPhoneNumbers": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {}
  }
]
```

<h2 id="tocS_PhoneNumberStatus">PhoneNumberStatus</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumberstatus"></a>
<a id="schema_PhoneNumberStatus"></a>
<a id="tocSphonenumberstatus"></a>
<a id="tocsphonenumberstatus"></a>

```json
"AcquireInProgress"
```

<h2 id="tocS_PhoneNumberAssociationName">PhoneNumberAssociationName</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumberassociationname"></a>
<a id="schema_PhoneNumberAssociationName"></a>
<a id="tocSphonenumberassociationname"></a>
<a id="tocsphonenumberassociationname"></a>

```json
"AccountId"
```

<h2 id="tocS_ListPhoneNumbersRequest">ListPhoneNumbersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistphonenumbersrequest"></a>
<a id="schema_ListPhoneNumbersRequest"></a>
<a id="tocSlistphonenumbersrequest"></a>
<a id="tocslistphonenumbersrequest"></a>

```json
{}
```

<h2 id="tocS_PhoneNumberList">PhoneNumberList</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumberlist"></a>
<a id="schema_PhoneNumberList"></a>
<a id="tocSphonenumberlist"></a>
<a id="tocsphonenumberlist"></a>

```json
[
  {
    "PhoneNumberId": {},
    "E164PhoneNumber": {},
    "Country": {},
    "Type": {},
    "ProductType": {},
    "Status": {},
    "Capabilities": {
      "InboundCall": {},
      "OutboundCall": {},
      "InboundSMS": {},
      "OutboundSMS": {},
      "InboundMMS": {},
      "OutboundMMS": {}
    },
    "Associations": {},
    "CallingName": {},
    "CallingNameStatus": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {},
    "DeletionTimestamp": {}
  }
]
```

<h2 id="tocS_ProxySessionStatus">ProxySessionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaproxysessionstatus"></a>
<a id="schema_ProxySessionStatus"></a>
<a id="tocSproxysessionstatus"></a>
<a id="tocsproxysessionstatus"></a>

```json
"Open"
```

<h2 id="tocS_NextTokenString">NextTokenString</h2>
<!-- backwards compatibility -->
<a id="schemanexttokenstring"></a>
<a id="schema_NextTokenString"></a>
<a id="tocSnexttokenstring"></a>
<a id="tocsnexttokenstring"></a>

```json
"string"
```

<h2 id="tocS_ListProxySessionsRequest">ListProxySessionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistproxysessionsrequest"></a>
<a id="schema_ListProxySessionsRequest"></a>
<a id="tocSlistproxysessionsrequest"></a>
<a id="tocslistproxysessionsrequest"></a>

```json
{}
```

<h2 id="tocS_ProxySessions">ProxySessions</h2>
<!-- backwards compatibility -->
<a id="schemaproxysessions"></a>
<a id="schema_ProxySessions"></a>
<a id="tocSproxysessions"></a>
<a id="tocsproxysessions"></a>

```json
[
  {
    "VoiceConnectorId": {},
    "ProxySessionId": {},
    "Name": {},
    "Status": {},
    "ExpiryMinutes": {},
    "Capabilities": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {},
    "EndedTimestamp": {},
    "Participants": {},
    "NumberSelectionBehavior": {},
    "GeoMatchLevel": {},
    "GeoMatchParams": {
      "Country": {},
      "AreaCode": {}
    }
  }
]
```

<h2 id="tocS_ListRoomMembershipsRequest">ListRoomMembershipsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistroommembershipsrequest"></a>
<a id="schema_ListRoomMembershipsRequest"></a>
<a id="tocSlistroommembershipsrequest"></a>
<a id="tocslistroommembershipsrequest"></a>

```json
{}
```

<h2 id="tocS_RoomMembershipList">RoomMembershipList</h2>
<!-- backwards compatibility -->
<a id="schemaroommembershiplist"></a>
<a id="schema_RoomMembershipList"></a>
<a id="tocSroommembershiplist"></a>
<a id="tocsroommembershiplist"></a>

```json
[
  {
    "RoomId": {},
    "Member": {
      "MemberId": {},
      "MemberType": {},
      "Email": {},
      "FullName": {},
      "AccountId": {}
    },
    "Role": {},
    "InvitedBy": {},
    "UpdatedTimestamp": {}
  }
]
```

<h2 id="tocS_ListRoomsRequest">ListRoomsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistroomsrequest"></a>
<a id="schema_ListRoomsRequest"></a>
<a id="tocSlistroomsrequest"></a>
<a id="tocslistroomsrequest"></a>

```json
{}
```

<h2 id="tocS_RoomList">RoomList</h2>
<!-- backwards compatibility -->
<a id="schemaroomlist"></a>
<a id="schema_RoomList"></a>
<a id="tocSroomlist"></a>
<a id="tocsroomlist"></a>

```json
[
  {
    "RoomId": {},
    "Name": {},
    "AccountId": {},
    "CreatedBy": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {}
  }
]
```

<h2 id="tocS_ListSipMediaApplicationsRequest">ListSipMediaApplicationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistsipmediaapplicationsrequest"></a>
<a id="schema_ListSipMediaApplicationsRequest"></a>
<a id="tocSlistsipmediaapplicationsrequest"></a>
<a id="tocslistsipmediaapplicationsrequest"></a>

```json
{}
```

<h2 id="tocS_SipMediaApplicationList">SipMediaApplicationList</h2>
<!-- backwards compatibility -->
<a id="schemasipmediaapplicationlist"></a>
<a id="schema_SipMediaApplicationList"></a>
<a id="tocSsipmediaapplicationlist"></a>
<a id="tocssipmediaapplicationlist"></a>

```json
[
  {
    "SipMediaApplicationId": {},
    "AwsRegion": {},
    "Name": {},
    "Endpoints": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {}
  }
]
```

<h2 id="tocS_ListSipRulesRequest">ListSipRulesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistsiprulesrequest"></a>
<a id="schema_ListSipRulesRequest"></a>
<a id="tocSlistsiprulesrequest"></a>
<a id="tocslistsiprulesrequest"></a>

```json
{}
```

<h2 id="tocS_SipRuleList">SipRuleList</h2>
<!-- backwards compatibility -->
<a id="schemasiprulelist"></a>
<a id="schema_SipRuleList"></a>
<a id="tocSsiprulelist"></a>
<a id="tocssiprulelist"></a>

```json
[
  {
    "SipRuleId": {},
    "Name": {},
    "Disabled": {},
    "TriggerType": {},
    "TriggerValue": {},
    "TargetApplications": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {}
  }
]
```

<h2 id="tocS_ListSupportedPhoneNumberCountriesRequest">ListSupportedPhoneNumberCountriesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistsupportedphonenumbercountriesrequest"></a>
<a id="schema_ListSupportedPhoneNumberCountriesRequest"></a>
<a id="tocSlistsupportedphonenumbercountriesrequest"></a>
<a id="tocslistsupportedphonenumbercountriesrequest"></a>

```json
{}
```

<h2 id="tocS_PhoneNumberCountriesList">PhoneNumberCountriesList</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumbercountrieslist"></a>
<a id="schema_PhoneNumberCountriesList"></a>
<a id="tocSphonenumbercountrieslist"></a>
<a id="tocsphonenumbercountrieslist"></a>

```json
[
  {
    "CountryCode": {},
    "SupportedPhoneNumberTypes": {}
  }
]
```

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{}
```

<h2 id="tocS_ListUsersRequest">ListUsersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistusersrequest"></a>
<a id="schema_ListUsersRequest"></a>
<a id="tocSlistusersrequest"></a>
<a id="tocslistusersrequest"></a>

```json
{}
```

<h2 id="tocS_UserList">UserList</h2>
<!-- backwards compatibility -->
<a id="schemauserlist"></a>
<a id="schema_UserList"></a>
<a id="tocSuserlist"></a>
<a id="tocsuserlist"></a>

```json
[
  {
    "UserId": {},
    "AccountId": {},
    "PrimaryEmail": {},
    "PrimaryProvisionedNumber": {},
    "DisplayName": {},
    "LicenseType": {},
    "UserType": {},
    "UserRegistrationStatus": {},
    "UserInvitationStatus": {},
    "RegisteredOn": {},
    "InvitedOn": {},
    "AlexaForBusinessMetadata": {
      "IsAlexaForBusinessEnabled": {},
      "AlexaForBusinessRoomArn": {}
    },
    "PersonalPIN": {}
  }
]
```

<h2 id="tocS_ListVoiceConnectorGroupsRequest">ListVoiceConnectorGroupsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistvoiceconnectorgroupsrequest"></a>
<a id="schema_ListVoiceConnectorGroupsRequest"></a>
<a id="tocSlistvoiceconnectorgroupsrequest"></a>
<a id="tocslistvoiceconnectorgroupsrequest"></a>

```json
{}
```

<h2 id="tocS_VoiceConnectorGroupList">VoiceConnectorGroupList</h2>
<!-- backwards compatibility -->
<a id="schemavoiceconnectorgrouplist"></a>
<a id="schema_VoiceConnectorGroupList"></a>
<a id="tocSvoiceconnectorgrouplist"></a>
<a id="tocsvoiceconnectorgrouplist"></a>

```json
[
  {
    "VoiceConnectorGroupId": {},
    "Name": {},
    "VoiceConnectorItems": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {},
    "VoiceConnectorGroupArn": {}
  }
]
```

<h2 id="tocS_ListVoiceConnectorTerminationCredentialsRequest">ListVoiceConnectorTerminationCredentialsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistvoiceconnectorterminationcredentialsrequest"></a>
<a id="schema_ListVoiceConnectorTerminationCredentialsRequest"></a>
<a id="tocSlistvoiceconnectorterminationcredentialsrequest"></a>
<a id="tocslistvoiceconnectorterminationcredentialsrequest"></a>

```json
{}
```

<h2 id="tocS_ListVoiceConnectorsRequest">ListVoiceConnectorsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistvoiceconnectorsrequest"></a>
<a id="schema_ListVoiceConnectorsRequest"></a>
<a id="tocSlistvoiceconnectorsrequest"></a>
<a id="tocslistvoiceconnectorsrequest"></a>

```json
{}
```

<h2 id="tocS_VoiceConnectorList">VoiceConnectorList</h2>
<!-- backwards compatibility -->
<a id="schemavoiceconnectorlist"></a>
<a id="schema_VoiceConnectorList"></a>
<a id="tocSvoiceconnectorlist"></a>
<a id="tocsvoiceconnectorlist"></a>

```json
[
  {
    "VoiceConnectorId": {},
    "AwsRegion": {},
    "Name": {},
    "OutboundHostName": {},
    "RequireEncryption": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {},
    "VoiceConnectorArn": {}
  }
]
```

<h2 id="tocS_LogoutUserRequest">LogoutUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemalogoutuserrequest"></a>
<a id="schema_LogoutUserRequest"></a>
<a id="tocSlogoutuserrequest"></a>
<a id="tocslogoutuserrequest"></a>

```json
{}
```

<h2 id="tocS_MediaPipelineStatus">MediaPipelineStatus</h2>
<!-- backwards compatibility -->
<a id="schemamediapipelinestatus"></a>
<a id="schema_MediaPipelineStatus"></a>
<a id="tocSmediapipelinestatus"></a>
<a id="tocsmediapipelinestatus"></a>

```json
"Initializing"
```

<h2 id="tocS_UriType">UriType</h2>
<!-- backwards compatibility -->
<a id="schemauritype"></a>
<a id="schema_UriType"></a>
<a id="tocSuritype"></a>
<a id="tocsuritype"></a>

```json
"string"
```

<h2 id="tocS_MediaPlacement">MediaPlacement</h2>
<!-- backwards compatibility -->
<a id="schemamediaplacement"></a>
<a id="schema_MediaPlacement"></a>
<a id="tocSmediaplacement"></a>
<a id="tocsmediaplacement"></a>

```json
{
  "AudioHostUrl": {},
  "AudioFallbackUrl": {},
  "ScreenDataUrl": {},
  "ScreenSharingUrl": {},
  "ScreenViewingUrl": {},
  "SignalingUrl": {},
  "TurnControlUrl": {},
  "EventIngestionUrl": {}
}
```

A set of endpoints used by clients to connect to the media service group for an Amazon Chime SDK meeting.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AudioHostUrl|object|false|none|none|
|AudioFallbackUrl|object|false|none|none|
|ScreenDataUrl|object|false|none|none|
|ScreenSharingUrl|object|false|none|none|
|ScreenViewingUrl|object|false|none|none|
|SignalingUrl|object|false|none|none|
|TurnControlUrl|object|false|none|none|
|EventIngestionUrl|object|false|none|none|

<h2 id="tocS_MeetingTagKeyList">MeetingTagKeyList</h2>
<!-- backwards compatibility -->
<a id="schemameetingtagkeylist"></a>
<a id="schema_MeetingTagKeyList"></a>
<a id="tocSmeetingtagkeylist"></a>
<a id="tocsmeetingtagkeylist"></a>

```json
[
  "password"
]
```

<h2 id="tocS_MemberType">MemberType</h2>
<!-- backwards compatibility -->
<a id="schemamembertype"></a>
<a id="schema_MemberType"></a>
<a id="tocSmembertype"></a>
<a id="tocsmembertype"></a>

```json
"User"
```

<h2 id="tocS_Member">Member</h2>
<!-- backwards compatibility -->
<a id="schemamember"></a>
<a id="schema_Member"></a>
<a id="tocSmember"></a>
<a id="tocsmember"></a>

```json
{
  "MemberId": {},
  "MemberType": {},
  "Email": {},
  "FullName": {},
  "AccountId": {}
}
```

The member details, such as email address, name, member ID, and member type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MemberId|object|false|none|none|
|MemberType|object|false|none|none|
|Email|object|false|none|none|
|FullName|object|false|none|none|
|AccountId|object|false|none|none|

<h2 id="tocS_MemberError">MemberError</h2>
<!-- backwards compatibility -->
<a id="schemamembererror"></a>
<a id="schema_MemberError"></a>
<a id="tocSmembererror"></a>
<a id="tocsmembererror"></a>

```json
{
  "MemberId": {},
  "ErrorCode": {},
  "ErrorMessage": {}
}
```

The list of errors returned when a member action results in an error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MemberId|object|false|none|none|
|ErrorCode|object|false|none|none|
|ErrorMessage|object|false|none|none|

<h2 id="tocS_UrlType">UrlType</h2>
<!-- backwards compatibility -->
<a id="schemaurltype"></a>
<a id="schema_UrlType"></a>
<a id="tocSurltype"></a>
<a id="tocsurltype"></a>

```json
"string"
```

<h2 id="tocS_NonEmptyContent">NonEmptyContent</h2>
<!-- backwards compatibility -->
<a id="schemanonemptycontent"></a>
<a id="schema_NonEmptyContent"></a>
<a id="tocSnonemptycontent"></a>
<a id="tocsnonemptycontent"></a>

```json
"password"
```

<h2 id="tocS_NotificationTarget">NotificationTarget</h2>
<!-- backwards compatibility -->
<a id="schemanotificationtarget"></a>
<a id="schema_NotificationTarget"></a>
<a id="tocSnotificationtarget"></a>
<a id="tocsnotificationtarget"></a>

```json
"EventBridge"
```

<h2 id="tocS_OrderedPhoneNumberStatus">OrderedPhoneNumberStatus</h2>
<!-- backwards compatibility -->
<a id="schemaorderedphonenumberstatus"></a>
<a id="schema_OrderedPhoneNumberStatus"></a>
<a id="tocSorderedphonenumberstatus"></a>
<a id="tocsorderedphonenumberstatus"></a>

```json
"Processing"
```

<h2 id="tocS_OrderedPhoneNumber">OrderedPhoneNumber</h2>
<!-- backwards compatibility -->
<a id="schemaorderedphonenumber"></a>
<a id="schema_OrderedPhoneNumber"></a>
<a id="tocSorderedphonenumber"></a>
<a id="tocsorderedphonenumber"></a>

```json
{
  "E164PhoneNumber": {},
  "Status": {}
}
```

A phone number for which an order has been placed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|E164PhoneNumber|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_OrderedPhoneNumberList">OrderedPhoneNumberList</h2>
<!-- backwards compatibility -->
<a id="schemaorderedphonenumberlist"></a>
<a id="schema_OrderedPhoneNumberList"></a>
<a id="tocSorderedphonenumberlist"></a>
<a id="tocsorderedphonenumberlist"></a>

```json
[
  {
    "E164PhoneNumber": {},
    "Status": {}
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

<h2 id="tocS_OriginationRouteProtocol">OriginationRouteProtocol</h2>
<!-- backwards compatibility -->
<a id="schemaoriginationrouteprotocol"></a>
<a id="schema_OriginationRouteProtocol"></a>
<a id="tocSoriginationrouteprotocol"></a>
<a id="tocsoriginationrouteprotocol"></a>

```json
"TCP"
```

<h2 id="tocS_OriginationRoutePriority">OriginationRoutePriority</h2>
<!-- backwards compatibility -->
<a id="schemaoriginationroutepriority"></a>
<a id="schema_OriginationRoutePriority"></a>
<a id="tocSoriginationroutepriority"></a>
<a id="tocsoriginationroutepriority"></a>

```json
1
```

<h2 id="tocS_OriginationRouteWeight">OriginationRouteWeight</h2>
<!-- backwards compatibility -->
<a id="schemaoriginationrouteweight"></a>
<a id="schema_OriginationRouteWeight"></a>
<a id="tocSoriginationrouteweight"></a>
<a id="tocsoriginationrouteweight"></a>

```json
1
```

<h2 id="tocS_OriginationRoute">OriginationRoute</h2>
<!-- backwards compatibility -->
<a id="schemaoriginationroute"></a>
<a id="schema_OriginationRoute"></a>
<a id="tocSoriginationroute"></a>
<a id="tocsoriginationroute"></a>

```json
{
  "Host": {},
  "Port": {},
  "Protocol": {},
  "Priority": {},
  "Weight": {}
}
```

<p>Origination routes define call distribution properties for your SIP hosts to receive inbound calls using your Amazon Chime Voice Connector. Limit: Ten origination routes for each Amazon Chime Voice Connector.</p> <note> <p>The parameters listed below are not required, but you must use at least one. </p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Host|object|false|none|none|
|Port|object|false|none|none|
|Protocol|object|false|none|none|
|Priority|object|false|none|none|
|Weight|object|false|none|none|

<h2 id="tocS_Participant">Participant</h2>
<!-- backwards compatibility -->
<a id="schemaparticipant"></a>
<a id="schema_Participant"></a>
<a id="tocSparticipant"></a>
<a id="tocsparticipant"></a>

```json
{
  "PhoneNumber": {},
  "ProxyPhoneNumber": {}
}
```

The phone number and proxy phone number for a participant in an Amazon Chime Voice Connector proxy session.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PhoneNumber|object|false|none|none|
|ProxyPhoneNumber|object|false|none|none|

<h2 id="tocS_Participants">Participants</h2>
<!-- backwards compatibility -->
<a id="schemaparticipants"></a>
<a id="schema_Participants"></a>
<a id="tocSparticipants"></a>
<a id="tocsparticipants"></a>

```json
[
  {
    "PhoneNumber": {},
    "ProxyPhoneNumber": {}
  }
]
```

<h2 id="tocS_PhoneNumberType">PhoneNumberType</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumbertype"></a>
<a id="schema_PhoneNumberType"></a>
<a id="tocSphonenumbertype"></a>
<a id="tocsphonenumbertype"></a>

```json
"Local"
```

<h2 id="tocS_PhoneNumberCapabilities">PhoneNumberCapabilities</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumbercapabilities"></a>
<a id="schema_PhoneNumberCapabilities"></a>
<a id="tocSphonenumbercapabilities"></a>
<a id="tocsphonenumbercapabilities"></a>

```json
{
  "InboundCall": {},
  "OutboundCall": {},
  "InboundSMS": {},
  "OutboundSMS": {},
  "InboundMMS": {},
  "OutboundMMS": {}
}
```

The phone number capabilities for Amazon Chime Business Calling phone numbers, such as enabled inbound and outbound calling and text messaging.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InboundCall|object|false|none|none|
|OutboundCall|object|false|none|none|
|InboundSMS|object|false|none|none|
|OutboundSMS|object|false|none|none|
|InboundMMS|object|false|none|none|
|OutboundMMS|object|false|none|none|

<h2 id="tocS_PhoneNumberAssociationList">PhoneNumberAssociationList</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumberassociationlist"></a>
<a id="schema_PhoneNumberAssociationList"></a>
<a id="tocSphonenumberassociationlist"></a>
<a id="tocsphonenumberassociationlist"></a>

```json
[
  {
    "Value": {},
    "Name": {},
    "AssociatedTimestamp": {}
  }
]
```

<h2 id="tocS_PhoneNumberAssociation">PhoneNumberAssociation</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumberassociation"></a>
<a id="schema_PhoneNumberAssociation"></a>
<a id="tocSphonenumberassociation"></a>
<a id="tocsphonenumberassociation"></a>

```json
{
  "Value": {},
  "Name": {},
  "AssociatedTimestamp": {}
}
```

The phone number associations, such as Amazon Chime account ID, Amazon Chime user ID, Amazon Chime Voice Connector ID, or Amazon Chime Voice Connector group ID.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Value|object|false|none|none|
|Name|object|false|none|none|
|AssociatedTimestamp|object|false|none|none|

<h2 id="tocS_PhoneNumberCountry">PhoneNumberCountry</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumbercountry"></a>
<a id="schema_PhoneNumberCountry"></a>
<a id="tocSphonenumbercountry"></a>
<a id="tocsphonenumbercountry"></a>

```json
{
  "CountryCode": {},
  "SupportedPhoneNumberTypes": {}
}
```

The phone number country.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CountryCode|object|false|none|none|
|SupportedPhoneNumberTypes|object|false|none|none|

<h2 id="tocS_PhoneNumberTypeList">PhoneNumberTypeList</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumbertypelist"></a>
<a id="schema_PhoneNumberTypeList"></a>
<a id="tocSphonenumbertypelist"></a>
<a id="tocsphonenumbertypelist"></a>

```json
[
  "Local"
]
```

<h2 id="tocS_PhoneNumberError">PhoneNumberError</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumbererror"></a>
<a id="schema_PhoneNumberError"></a>
<a id="tocSphonenumbererror"></a>
<a id="tocsphonenumbererror"></a>

```json
{
  "PhoneNumberId": {},
  "ErrorCode": {},
  "ErrorMessage": {}
}
```

If the phone number action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PhoneNumberId|object|false|none|none|
|ErrorCode|object|false|none|none|
|ErrorMessage|object|false|none|none|

<h2 id="tocS_PhoneNumberMaxResults">PhoneNumberMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumbermaxresults"></a>
<a id="schema_PhoneNumberMaxResults"></a>
<a id="tocSphonenumbermaxresults"></a>
<a id="tocsphonenumbermaxresults"></a>

```json
1
```

<h2 id="tocS_PhoneNumberOrderStatus">PhoneNumberOrderStatus</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumberorderstatus"></a>
<a id="schema_PhoneNumberOrderStatus"></a>
<a id="tocSphonenumberorderstatus"></a>
<a id="tocsphonenumberorderstatus"></a>

```json
"Processing"
```

<h2 id="tocS_String128">String128</h2>
<!-- backwards compatibility -->
<a id="schemastring128"></a>
<a id="schema_String128"></a>
<a id="tocSstring128"></a>
<a id="tocsstring128"></a>

```json
"string"
```

<h2 id="tocS_PutAppInstanceRetentionSettingsRequest">PutAppInstanceRetentionSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputappinstanceretentionsettingsrequest"></a>
<a id="schema_PutAppInstanceRetentionSettingsRequest"></a>
<a id="tocSputappinstanceretentionsettingsrequest"></a>
<a id="tocsputappinstanceretentionsettingsrequest"></a>

```json
{
  "AppInstanceRetentionSettings": {
    "ChannelRetentionSettings": {
      "RetentionDays": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppInstanceRetentionSettings|object|true|none|none|

<h2 id="tocS_PutAppInstanceStreamingConfigurationsRequest">PutAppInstanceStreamingConfigurationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputappinstancestreamingconfigurationsrequest"></a>
<a id="schema_PutAppInstanceStreamingConfigurationsRequest"></a>
<a id="tocSputappinstancestreamingconfigurationsrequest"></a>
<a id="tocsputappinstancestreamingconfigurationsrequest"></a>

```json
{
  "AppInstanceStreamingConfigurations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppInstanceStreamingConfigurations|object|true|none|none|

<h2 id="tocS_PutEventsConfigurationRequest">PutEventsConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputeventsconfigurationrequest"></a>
<a id="schema_PutEventsConfigurationRequest"></a>
<a id="tocSputeventsconfigurationrequest"></a>
<a id="tocsputeventsconfigurationrequest"></a>

```json
{
  "OutboundEventsHTTPSEndpoint": {},
  "LambdaFunctionArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OutboundEventsHTTPSEndpoint|object|false|none|none|
|LambdaFunctionArn|object|false|none|none|

<h2 id="tocS_PutRetentionSettingsRequest">PutRetentionSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputretentionsettingsrequest"></a>
<a id="schema_PutRetentionSettingsRequest"></a>
<a id="tocSputretentionsettingsrequest"></a>
<a id="tocsputretentionsettingsrequest"></a>

```json
{
  "RetentionSettings": {
    "RoomRetentionSettings": {
      "RetentionDays": {}
    },
    "ConversationRetentionSettings": {
      "RetentionDays": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RetentionSettings|object|true|none|none|

<h2 id="tocS_PutSipMediaApplicationLoggingConfigurationRequest">PutSipMediaApplicationLoggingConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputsipmediaapplicationloggingconfigurationrequest"></a>
<a id="schema_PutSipMediaApplicationLoggingConfigurationRequest"></a>
<a id="tocSputsipmediaapplicationloggingconfigurationrequest"></a>
<a id="tocsputsipmediaapplicationloggingconfigurationrequest"></a>

```json
{
  "SipMediaApplicationLoggingConfiguration": {
    "EnableSipMediaApplicationMessageLogs": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SipMediaApplicationLoggingConfiguration|object|false|none|none|

<h2 id="tocS_PutVoiceConnectorEmergencyCallingConfigurationRequest">PutVoiceConnectorEmergencyCallingConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputvoiceconnectoremergencycallingconfigurationrequest"></a>
<a id="schema_PutVoiceConnectorEmergencyCallingConfigurationRequest"></a>
<a id="tocSputvoiceconnectoremergencycallingconfigurationrequest"></a>
<a id="tocsputvoiceconnectoremergencycallingconfigurationrequest"></a>

```json
{
  "EmergencyCallingConfiguration": {
    "DNIS": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EmergencyCallingConfiguration|object|true|none|none|

<h2 id="tocS_PutVoiceConnectorLoggingConfigurationRequest">PutVoiceConnectorLoggingConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputvoiceconnectorloggingconfigurationrequest"></a>
<a id="schema_PutVoiceConnectorLoggingConfigurationRequest"></a>
<a id="tocSputvoiceconnectorloggingconfigurationrequest"></a>
<a id="tocsputvoiceconnectorloggingconfigurationrequest"></a>

```json
{
  "LoggingConfiguration": {
    "EnableSIPLogs": {},
    "EnableMediaMetricLogs": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoggingConfiguration|object|true|none|none|

<h2 id="tocS_PutVoiceConnectorOriginationRequest">PutVoiceConnectorOriginationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputvoiceconnectororiginationrequest"></a>
<a id="schema_PutVoiceConnectorOriginationRequest"></a>
<a id="tocSputvoiceconnectororiginationrequest"></a>
<a id="tocsputvoiceconnectororiginationrequest"></a>

```json
{
  "Origination": {
    "Routes": {},
    "Disabled": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Origination|object|true|none|none|

<h2 id="tocS_PutVoiceConnectorProxyRequest">PutVoiceConnectorProxyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputvoiceconnectorproxyrequest"></a>
<a id="schema_PutVoiceConnectorProxyRequest"></a>
<a id="tocSputvoiceconnectorproxyrequest"></a>
<a id="tocsputvoiceconnectorproxyrequest"></a>

```json
{
  "DefaultSessionExpiryMinutes": {},
  "PhoneNumberPoolCountries": {},
  "FallBackPhoneNumber": {},
  "Disabled": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DefaultSessionExpiryMinutes|object|true|none|none|
|PhoneNumberPoolCountries|object|true|none|none|
|FallBackPhoneNumber|object|false|none|none|
|Disabled|object|false|none|none|

<h2 id="tocS_PutVoiceConnectorStreamingConfigurationRequest">PutVoiceConnectorStreamingConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputvoiceconnectorstreamingconfigurationrequest"></a>
<a id="schema_PutVoiceConnectorStreamingConfigurationRequest"></a>
<a id="tocSputvoiceconnectorstreamingconfigurationrequest"></a>
<a id="tocsputvoiceconnectorstreamingconfigurationrequest"></a>

```json
{
  "StreamingConfiguration": {
    "DataRetentionInHours": {},
    "Disabled": {},
    "StreamingNotificationTargets": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamingConfiguration|object|true|none|none|

<h2 id="tocS_PutVoiceConnectorTerminationCredentialsRequest">PutVoiceConnectorTerminationCredentialsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputvoiceconnectorterminationcredentialsrequest"></a>
<a id="schema_PutVoiceConnectorTerminationCredentialsRequest"></a>
<a id="tocSputvoiceconnectorterminationcredentialsrequest"></a>
<a id="tocsputvoiceconnectorterminationcredentialsrequest"></a>

```json
{
  "Credentials": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Credentials|object|false|none|none|

<h2 id="tocS_PutVoiceConnectorTerminationRequest">PutVoiceConnectorTerminationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputvoiceconnectorterminationrequest"></a>
<a id="schema_PutVoiceConnectorTerminationRequest"></a>
<a id="tocSputvoiceconnectorterminationrequest"></a>
<a id="tocsputvoiceconnectorterminationrequest"></a>

```json
{
  "Termination": {
    "CpsLimit": {},
    "DefaultPhoneNumber": {},
    "CallingRegions": {},
    "CidrAllowedList": {},
    "Disabled": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Termination|object|true|none|none|

<h2 id="tocS_RedactChannelMessageRequest">RedactChannelMessageRequest</h2>
<!-- backwards compatibility -->
<a id="schemaredactchannelmessagerequest"></a>
<a id="schema_RedactChannelMessageRequest"></a>
<a id="tocSredactchannelmessagerequest"></a>
<a id="tocsredactchannelmessagerequest"></a>

```json
{}
```

<h2 id="tocS_RedactConversationMessageRequest">RedactConversationMessageRequest</h2>
<!-- backwards compatibility -->
<a id="schemaredactconversationmessagerequest"></a>
<a id="schema_RedactConversationMessageRequest"></a>
<a id="tocSredactconversationmessagerequest"></a>
<a id="tocsredactconversationmessagerequest"></a>

```json
{}
```

<h2 id="tocS_RedactRoomMessageRequest">RedactRoomMessageRequest</h2>
<!-- backwards compatibility -->
<a id="schemaredactroommessagerequest"></a>
<a id="schema_RedactRoomMessageRequest"></a>
<a id="tocSredactroommessagerequest"></a>
<a id="tocsredactroommessagerequest"></a>

```json
{}
```

<h2 id="tocS_RegenerateSecurityTokenRequest">RegenerateSecurityTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemaregeneratesecuritytokenrequest"></a>
<a id="schema_RegenerateSecurityTokenRequest"></a>
<a id="tocSregeneratesecuritytokenrequest"></a>
<a id="tocsregeneratesecuritytokenrequest"></a>

```json
{}
```

<h2 id="tocS_RegistrationStatus">RegistrationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaregistrationstatus"></a>
<a id="schema_RegistrationStatus"></a>
<a id="tocSregistrationstatus"></a>
<a id="tocsregistrationstatus"></a>

```json
"Unregistered"
```

<h2 id="tocS_ResetPersonalPINRequest">ResetPersonalPINRequest</h2>
<!-- backwards compatibility -->
<a id="schemaresetpersonalpinrequest"></a>
<a id="schema_ResetPersonalPINRequest"></a>
<a id="tocSresetpersonalpinrequest"></a>
<a id="tocsresetpersonalpinrequest"></a>

```json
{}
```

<h2 id="tocS_RestorePhoneNumberRequest">RestorePhoneNumberRequest</h2>
<!-- backwards compatibility -->
<a id="schemarestorephonenumberrequest"></a>
<a id="schema_RestorePhoneNumberRequest"></a>
<a id="tocSrestorephonenumberrequest"></a>
<a id="tocsrestorephonenumberrequest"></a>

```json
{}
```

<h2 id="tocS_SMAUpdateCallArgumentsMap">SMAUpdateCallArgumentsMap</h2>
<!-- backwards compatibility -->
<a id="schemasmaupdatecallargumentsmap"></a>
<a id="schema_SMAUpdateCallArgumentsMap"></a>
<a id="tocSsmaupdatecallargumentsmap"></a>
<a id="tocssmaupdatecallargumentsmap"></a>

```json
{
  "property1": "password",
  "property2": "password"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[SensitiveString](#schemasensitivestring)|false|none|none|

<h2 id="tocS_TollFreePrefix">TollFreePrefix</h2>
<!-- backwards compatibility -->
<a id="schematollfreeprefix"></a>
<a id="schema_TollFreePrefix"></a>
<a id="tocStollfreeprefix"></a>
<a id="tocstollfreeprefix"></a>

```json
"str"
```

<h2 id="tocS_SearchAvailablePhoneNumbersRequest">SearchAvailablePhoneNumbersRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchavailablephonenumbersrequest"></a>
<a id="schema_SearchAvailablePhoneNumbersRequest"></a>
<a id="tocSsearchavailablephonenumbersrequest"></a>
<a id="tocssearchavailablephonenumbersrequest"></a>

```json
{}
```

<h2 id="tocS_SelectedVideoStreams">SelectedVideoStreams</h2>
<!-- backwards compatibility -->
<a id="schemaselectedvideostreams"></a>
<a id="schema_SelectedVideoStreams"></a>
<a id="tocSselectedvideostreams"></a>
<a id="tocsselectedvideostreams"></a>

```json
{
  "AttendeeIds": {},
  "ExternalUserIds": {}
}
```

The video streams to capture for a specified media capture pipeline. The total number of video streams can't exceed 25.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttendeeIds|object|false|none|none|
|ExternalUserIds|object|false|none|none|

<h2 id="tocS_SendChannelMessageRequest">SendChannelMessageRequest</h2>
<!-- backwards compatibility -->
<a id="schemasendchannelmessagerequest"></a>
<a id="schema_SendChannelMessageRequest"></a>
<a id="tocSsendchannelmessagerequest"></a>
<a id="tocssendchannelmessagerequest"></a>

```json
{
  "Content": {},
  "Type": {},
  "Persistence": {},
  "Metadata": {},
  "ClientRequestToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Content|object|true|none|none|
|Type|object|true|none|none|
|Persistence|object|true|none|none|
|Metadata|object|false|none|none|
|ClientRequestToken|object|true|none|none|

<h2 id="tocS_SipApplicationPriority">SipApplicationPriority</h2>
<!-- backwards compatibility -->
<a id="schemasipapplicationpriority"></a>
<a id="schema_SipApplicationPriority"></a>
<a id="tocSsipapplicationpriority"></a>
<a id="tocssipapplicationpriority"></a>

```json
1
```

<h2 id="tocS_TranscriptionConfiguration">TranscriptionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schematranscriptionconfiguration"></a>
<a id="schema_TranscriptionConfiguration"></a>
<a id="tocStranscriptionconfiguration"></a>
<a id="tocstranscriptionconfiguration"></a>

```json
{
  "EngineTranscribeSettings": {
    "LanguageCode": {},
    "VocabularyFilterMethod": {},
    "VocabularyFilterName": {},
    "VocabularyName": {},
    "Region": {},
    "EnablePartialResultsStabilization": {},
    "PartialResultsStability": {},
    "ContentIdentificationType": {},
    "ContentRedactionType": {},
    "PiiEntityTypes": {},
    "LanguageModelName": {},
    "IdentifyLanguage": {},
    "LanguageOptions": {},
    "PreferredLanguage": {},
    "VocabularyNames": {},
    "VocabularyFilterNames": {}
  },
  "EngineTranscribeMedicalSettings": {
    "LanguageCode": {},
    "Specialty": {},
    "Type": {},
    "VocabularyName": {},
    "Region": {},
    "ContentIdentificationType": {}
  }
}
```

The configuration for the current transcription operation. Must contain <code>EngineTranscribeSettings</code> or <code>EngineTranscribeMedicalSettings</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EngineTranscribeSettings|object|false|none|none|
|EngineTranscribeMedicalSettings|object|false|none|none|

<h2 id="tocS_StartMeetingTranscriptionRequest">StartMeetingTranscriptionRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartmeetingtranscriptionrequest"></a>
<a id="schema_StartMeetingTranscriptionRequest"></a>
<a id="tocSstartmeetingtranscriptionrequest"></a>
<a id="tocsstartmeetingtranscriptionrequest"></a>

```json
{
  "TranscriptionConfiguration": {
    "EngineTranscribeSettings": {
      "LanguageCode": {},
      "VocabularyFilterMethod": {},
      "VocabularyFilterName": {},
      "VocabularyName": {},
      "Region": {},
      "EnablePartialResultsStabilization": {},
      "PartialResultsStability": {},
      "ContentIdentificationType": {},
      "ContentRedactionType": {},
      "PiiEntityTypes": {},
      "LanguageModelName": {},
      "IdentifyLanguage": {},
      "LanguageOptions": {},
      "PreferredLanguage": {},
      "VocabularyNames": {},
      "VocabularyFilterNames": {}
    },
    "EngineTranscribeMedicalSettings": {
      "LanguageCode": {},
      "Specialty": {},
      "Type": {},
      "VocabularyName": {},
      "Region": {},
      "ContentIdentificationType": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TranscriptionConfiguration|object|true|none|none|

<h2 id="tocS_StopMeetingTranscriptionRequest">StopMeetingTranscriptionRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopmeetingtranscriptionrequest"></a>
<a id="schema_StopMeetingTranscriptionRequest"></a>
<a id="tocSstopmeetingtranscriptionrequest"></a>
<a id="tocsstopmeetingtranscriptionrequest"></a>

```json
{}
```

<h2 id="tocS_StreamingNotificationTarget">StreamingNotificationTarget</h2>
<!-- backwards compatibility -->
<a id="schemastreamingnotificationtarget"></a>
<a id="schema_StreamingNotificationTarget"></a>
<a id="tocSstreamingnotificationtarget"></a>
<a id="tocsstreamingnotificationtarget"></a>

```json
{
  "NotificationTarget": {}
}
```

The targeted recipient for a streaming configuration notification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotificationTarget|object|true|none|none|

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"password"
```

<h2 id="tocS_TagAttendeeRequest">TagAttendeeRequest</h2>
<!-- backwards compatibility -->
<a id="schematagattendeerequest"></a>
<a id="schema_TagAttendeeRequest"></a>
<a id="tocStagattendeerequest"></a>
<a id="tocstagattendeerequest"></a>

```json
{
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|true|none|none|

<h2 id="tocS_TagKeyList">TagKeyList</h2>
<!-- backwards compatibility -->
<a id="schematagkeylist"></a>
<a id="schema_TagKeyList"></a>
<a id="tocStagkeylist"></a>
<a id="tocstagkeylist"></a>

```json
[
  "password"
]
```

<h2 id="tocS_TagMeetingRequest">TagMeetingRequest</h2>
<!-- backwards compatibility -->
<a id="schematagmeetingrequest"></a>
<a id="schema_TagMeetingRequest"></a>
<a id="tocStagmeetingrequest"></a>
<a id="tocstagmeetingrequest"></a>

```json
{
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|true|none|none|

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

<h2 id="tocS_UntagAttendeeRequest">UntagAttendeeRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagattendeerequest"></a>
<a id="schema_UntagAttendeeRequest"></a>
<a id="tocSuntagattendeerequest"></a>
<a id="tocsuntagattendeerequest"></a>

```json
{
  "TagKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TagKeys|object|true|none|none|

<h2 id="tocS_UntagMeetingRequest">UntagMeetingRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagmeetingrequest"></a>
<a id="schema_UntagMeetingRequest"></a>
<a id="tocSuntagmeetingrequest"></a>
<a id="tocsuntagmeetingrequest"></a>

```json
{
  "TagKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TagKeys|object|true|none|none|

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

<h2 id="tocS_UpdateAccountRequest">UpdateAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateaccountrequest"></a>
<a id="schema_UpdateAccountRequest"></a>
<a id="tocSupdateaccountrequest"></a>
<a id="tocsupdateaccountrequest"></a>

```json
{
  "Name": {},
  "DefaultLicense": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|DefaultLicense|object|false|none|none|

<h2 id="tocS_UpdateAccountSettingsRequest">UpdateAccountSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateaccountsettingsrequest"></a>
<a id="schema_UpdateAccountSettingsRequest"></a>
<a id="tocSupdateaccountsettingsrequest"></a>
<a id="tocsupdateaccountsettingsrequest"></a>

```json
{
  "AccountSettings": {
    "DisableRemoteControl": {},
    "EnableDialOut": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountSettings|object|true|none|none|

<h2 id="tocS_UpdateAppInstanceRequest">UpdateAppInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateappinstancerequest"></a>
<a id="schema_UpdateAppInstanceRequest"></a>
<a id="tocSupdateappinstancerequest"></a>
<a id="tocsupdateappinstancerequest"></a>

```json
{
  "Name": {},
  "Metadata": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Metadata|object|false|none|none|

<h2 id="tocS_UpdateAppInstanceUserRequest">UpdateAppInstanceUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateappinstanceuserrequest"></a>
<a id="schema_UpdateAppInstanceUserRequest"></a>
<a id="tocSupdateappinstanceuserrequest"></a>
<a id="tocsupdateappinstanceuserrequest"></a>

```json
{
  "Name": {},
  "Metadata": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Metadata|object|false|none|none|

<h2 id="tocS_UpdateBotRequest">UpdateBotRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebotrequest"></a>
<a id="schema_UpdateBotRequest"></a>
<a id="tocSupdatebotrequest"></a>
<a id="tocsupdatebotrequest"></a>

```json
{
  "Disabled": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Disabled|object|false|none|none|

<h2 id="tocS_UpdateChannelMessageRequest">UpdateChannelMessageRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatechannelmessagerequest"></a>
<a id="schema_UpdateChannelMessageRequest"></a>
<a id="tocSupdatechannelmessagerequest"></a>
<a id="tocsupdatechannelmessagerequest"></a>

```json
{
  "Content": {},
  "Metadata": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Content|object|false|none|none|
|Metadata|object|false|none|none|

<h2 id="tocS_UpdateChannelReadMarkerRequest">UpdateChannelReadMarkerRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatechannelreadmarkerrequest"></a>
<a id="schema_UpdateChannelReadMarkerRequest"></a>
<a id="tocSupdatechannelreadmarkerrequest"></a>
<a id="tocsupdatechannelreadmarkerrequest"></a>

```json
{}
```

<h2 id="tocS_UpdateChannelRequest">UpdateChannelRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatechannelrequest"></a>
<a id="schema_UpdateChannelRequest"></a>
<a id="tocSupdatechannelrequest"></a>
<a id="tocsupdatechannelrequest"></a>

```json
{
  "Name": {},
  "Mode": {},
  "Metadata": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Mode|object|true|none|none|
|Metadata|object|false|none|none|

<h2 id="tocS_UpdateGlobalSettingsRequest">UpdateGlobalSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateglobalsettingsrequest"></a>
<a id="schema_UpdateGlobalSettingsRequest"></a>
<a id="tocSupdateglobalsettingsrequest"></a>
<a id="tocsupdateglobalsettingsrequest"></a>

```json
{
  "BusinessCalling": {
    "CdrBucket": {}
  },
  "VoiceConnector": {
    "CdrBucket": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BusinessCalling|object|false|none|none|
|VoiceConnector|object|false|none|none|

<h2 id="tocS_UpdatePhoneNumberRequest">UpdatePhoneNumberRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatephonenumberrequest"></a>
<a id="schema_UpdatePhoneNumberRequest"></a>
<a id="tocSupdatephonenumberrequest"></a>
<a id="tocsupdatephonenumberrequest"></a>

```json
{
  "ProductType": {},
  "CallingName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProductType|object|false|none|none|
|CallingName|object|false|none|none|

<h2 id="tocS_UpdatePhoneNumberSettingsRequest">UpdatePhoneNumberSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatephonenumbersettingsrequest"></a>
<a id="schema_UpdatePhoneNumberSettingsRequest"></a>
<a id="tocSupdatephonenumbersettingsrequest"></a>
<a id="tocsupdatephonenumbersettingsrequest"></a>

```json
{
  "CallingName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CallingName|object|true|none|none|

<h2 id="tocS_UpdateProxySessionRequest">UpdateProxySessionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateproxysessionrequest"></a>
<a id="schema_UpdateProxySessionRequest"></a>
<a id="tocSupdateproxysessionrequest"></a>
<a id="tocsupdateproxysessionrequest"></a>

```json
{
  "Capabilities": {},
  "ExpiryMinutes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Capabilities|object|true|none|none|
|ExpiryMinutes|object|false|none|none|

<h2 id="tocS_UpdateRoomMembershipRequest">UpdateRoomMembershipRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateroommembershiprequest"></a>
<a id="schema_UpdateRoomMembershipRequest"></a>
<a id="tocSupdateroommembershiprequest"></a>
<a id="tocsupdateroommembershiprequest"></a>

```json
{
  "Role": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Role|object|false|none|none|

<h2 id="tocS_UpdateRoomRequest">UpdateRoomRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateroomrequest"></a>
<a id="schema_UpdateRoomRequest"></a>
<a id="tocSupdateroomrequest"></a>
<a id="tocsupdateroomrequest"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|

<h2 id="tocS_UpdateSipMediaApplicationCallRequest">UpdateSipMediaApplicationCallRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesipmediaapplicationcallrequest"></a>
<a id="schema_UpdateSipMediaApplicationCallRequest"></a>
<a id="tocSupdatesipmediaapplicationcallrequest"></a>
<a id="tocsupdatesipmediaapplicationcallrequest"></a>

```json
{
  "Arguments": {
    "property1": "password",
    "property2": "password"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arguments|object|true|none|none|

<h2 id="tocS_UpdateSipMediaApplicationRequest">UpdateSipMediaApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesipmediaapplicationrequest"></a>
<a id="schema_UpdateSipMediaApplicationRequest"></a>
<a id="tocSupdatesipmediaapplicationrequest"></a>
<a id="tocsupdatesipmediaapplicationrequest"></a>

```json
{
  "Name": {},
  "Endpoints": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Endpoints|object|false|none|none|

<h2 id="tocS_UpdateSipRuleRequest">UpdateSipRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesiprulerequest"></a>
<a id="schema_UpdateSipRuleRequest"></a>
<a id="tocSupdatesiprulerequest"></a>
<a id="tocsupdatesiprulerequest"></a>

```json
{
  "Name": {},
  "Disabled": {},
  "TargetApplications": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Disabled|object|false|none|none|
|TargetApplications|object|false|none|none|

<h2 id="tocS_UpdateUserRequest">UpdateUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateuserrequest"></a>
<a id="schema_UpdateUserRequest"></a>
<a id="tocSupdateuserrequest"></a>
<a id="tocsupdateuserrequest"></a>

```json
{
  "LicenseType": {},
  "UserType": {},
  "AlexaForBusinessMetadata": {
    "IsAlexaForBusinessEnabled": {},
    "AlexaForBusinessRoomArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LicenseType|object|false|none|none|
|UserType|object|false|none|none|
|AlexaForBusinessMetadata|object|false|none|none|

<h2 id="tocS_UpdateUserSettingsRequest">UpdateUserSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateusersettingsrequest"></a>
<a id="schema_UpdateUserSettingsRequest"></a>
<a id="tocSupdateusersettingsrequest"></a>
<a id="tocsupdateusersettingsrequest"></a>

```json
{
  "UserSettings": {
    "Telephony": {
      "InboundCalling": {},
      "OutboundCalling": {},
      "SMS": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserSettings|object|true|none|none|

<h2 id="tocS_UpdateVoiceConnectorGroupRequest">UpdateVoiceConnectorGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatevoiceconnectorgrouprequest"></a>
<a id="schema_UpdateVoiceConnectorGroupRequest"></a>
<a id="tocSupdatevoiceconnectorgrouprequest"></a>
<a id="tocsupdatevoiceconnectorgrouprequest"></a>

```json
{
  "Name": {},
  "VoiceConnectorItems": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|VoiceConnectorItems|object|true|none|none|

<h2 id="tocS_UpdateVoiceConnectorRequest">UpdateVoiceConnectorRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatevoiceconnectorrequest"></a>
<a id="schema_UpdateVoiceConnectorRequest"></a>
<a id="tocSupdatevoiceconnectorrequest"></a>
<a id="tocsupdatevoiceconnectorrequest"></a>

```json
{
  "Name": {},
  "RequireEncryption": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|RequireEncryption|object|true|none|none|

<h2 id="tocS_UserError">UserError</h2>
<!-- backwards compatibility -->
<a id="schemausererror"></a>
<a id="schema_UserError"></a>
<a id="tocSusererror"></a>
<a id="tocsusererror"></a>

```json
{
  "UserId": {},
  "ErrorCode": {},
  "ErrorMessage": {}
}
```

The list of errors returned when errors are encountered during the <a>BatchSuspendUser</a>, <a>BatchUnsuspendUser</a>, or <a>BatchUpdateUser</a> actions. This includes user IDs, error codes, and error messages.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserId|object|false|none|none|
|ErrorCode|object|false|none|none|
|ErrorMessage|object|false|none|none|

<h2 id="tocS_ValidateE911AddressRequest">ValidateE911AddressRequest</h2>
<!-- backwards compatibility -->
<a id="schemavalidatee911addressrequest"></a>
<a id="schema_ValidateE911AddressRequest"></a>
<a id="tocSvalidatee911addressrequest"></a>
<a id="tocsvalidatee911addressrequest"></a>

```json
{
  "AwsAccountId": {},
  "StreetNumber": {},
  "StreetInfo": {},
  "City": {},
  "State": {},
  "Country": {},
  "PostalCode": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AwsAccountId|object|true|none|none|
|StreetNumber|object|true|none|none|
|StreetInfo|object|true|none|none|
|City|object|true|none|none|
|State|object|true|none|none|
|Country|object|true|none|none|
|PostalCode|object|true|none|none|

<h2 id="tocS_ValidationResult">ValidationResult</h2>
<!-- backwards compatibility -->
<a id="schemavalidationresult"></a>
<a id="schema_ValidationResult"></a>
<a id="tocSvalidationresult"></a>
<a id="tocsvalidationresult"></a>

```json
0
```

<h2 id="tocS_VideoMuxType">VideoMuxType</h2>
<!-- backwards compatibility -->
<a id="schemavideomuxtype"></a>
<a id="schema_VideoMuxType"></a>
<a id="tocSvideomuxtype"></a>
<a id="tocsvideomuxtype"></a>

```json
"VideoOnly"
```

<h2 id="tocS_VoiceConnectorItemPriority">VoiceConnectorItemPriority</h2>
<!-- backwards compatibility -->
<a id="schemavoiceconnectoritempriority"></a>
<a id="schema_VoiceConnectorItemPriority"></a>
<a id="tocSvoiceconnectoritempriority"></a>
<a id="tocsvoiceconnectoritempriority"></a>

```json
1
```
