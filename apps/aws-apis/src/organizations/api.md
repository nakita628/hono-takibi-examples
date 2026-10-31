<h1 id="aws-organizations">AWS Organizations v2016-11-28</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>Organizations is a web service that enables you to consolidate your multiple Amazon Web Services accounts into an <i>organization</i> and centrally manage your accounts and their resources.</p> <p>This guide provides descriptions of the Organizations operations. For more information about using this service, see the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html">Organizations User Guide</a>.</p> <p> <b>Support and feedback for Organizations</b> </p> <p>We welcome your feedback. Send your comments to <a href="mailto:feedback-awsorganizations@amazon.com">feedback-awsorganizations@amazon.com</a> or post your feedback and questions in the <a href="http://forums.aws.amazon.com/forum.jspa?forumID=219">Organizations support forum</a>. For more information about the Amazon Web Services support forums, see <a href="http://forums.aws.amazon.com/help.jspa">Forums Help</a>.</p> <p> <b>Endpoint to call When using the CLI or the Amazon Web Services SDK</b> </p> <p>For the current release of Organizations, specify the <code>us-east-1</code> region for all Amazon Web Services API and CLI calls made from the commercial Amazon Web Services Regions outside of China. If calling from one of the Amazon Web Services Regions in China, then specify <code>cn-northwest-1</code>. You can do this in the CLI by using these parameters and commands:</p> <ul> <li> <p>Use the following parameter with each command to specify both the endpoint and its region:</p> <p> <code>--endpoint-url https://organizations.us-east-1.amazonaws.com</code> <i>(from commercial Amazon Web Services Regions outside of China)</i> </p> <p>or</p> <p> <code>--endpoint-url https://organizations.cn-northwest-1.amazonaws.com.cn</code> <i>(from Amazon Web Services Regions in China)</i> </p> </li> <li> <p>Use the default endpoint, but configure your default region with this command:</p> <p> <code>aws configure set default.region us-east-1</code> <i>(from commercial Amazon Web Services Regions outside of China)</i> </p> <p>or</p> <p> <code>aws configure set default.region cn-northwest-1</code> <i>(from Amazon Web Services Regions in China)</i> </p> </li> <li> <p>Use the following parameter with each command to specify the endpoint:</p> <p> <code>--region us-east-1</code> <i>(from commercial Amazon Web Services Regions outside of China)</i> </p> <p>or</p> <p> <code>--region cn-northwest-1</code> <i>(from Amazon Web Services Regions in China)</i> </p> </li> </ul> <p> <b>Recording API Requests</b> </p> <p>Organizations supports CloudTrail, a service that records Amazon Web Services API calls for your Amazon Web Services account and delivers log files to an Amazon S3 bucket. By using information collected by CloudTrail, you can determine which requests the Organizations service received, who made the request and when, and so on. For more about Organizations and its support for CloudTrail, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_incident-response.html#orgs_cloudtrail-integration">Logging Organizations Events with CloudTrail</a> in the <i>Organizations User Guide</i>. To learn more about CloudTrail, including how to turn it on and find your log files, see the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/what_is_cloud_trail_top_level.html">CloudTrail User Guide</a>.</p>

Base URLs:

* <a href="http://organizations.us-east-1.amazonaws.com">http://organizations.us-east-1.amazonaws.com</a> - The Organizations multi-region endpoint

* <a href="https://organizations.us-east-1.amazonaws.com">https://organizations.us-east-1.amazonaws.com</a> - The Organizations multi-region endpoint

* <a href="http://organizations.cn-north-1.amazonaws.com.cn">http://organizations.cn-north-1.amazonaws.com.cn</a> - The Organizations endpoint for China (Beijing) and China (Ningxia)

* <a href="https://organizations.cn-north-1.amazonaws.com.cn">https://organizations.cn-north-1.amazonaws.com.cn</a> - The Organizations endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/organizations/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-organizations-default">Default</h1>

## AcceptHandshake

<a id="opIdAcceptHandshake"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.AcceptHandshake' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.AcceptHandshake' \
  -d '{
    "HandshakeId": {}
  }'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.AcceptHandshake`

<p>Sends a response to the originator of a handshake agreeing to the action proposed by the handshake request.</p> <p>You can only call this operation by the following principals when they also have the relevant IAM permissions:</p> <ul> <li> <p> <b>Invitation to join</b> or <b>Approve all features request</b> handshakes: only a principal from the member account.</p> <p>The user who calls the API for an invitation to join must have the <code>organizations:AcceptHandshake</code> permission. If you enabled all features in the organization, the user must also have the <code>iam:CreateServiceLinkedRole</code> permission so that Organizations can create the required service-linked role named <code>AWSServiceRoleForOrganizations</code>. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integration_services.html#orgs_integration_service-linked-roles">Organizations and Service-Linked Roles</a> in the <i>Organizations User Guide</i>.</p> </li> <li> <p> <b>Enable all features final confirmation</b> handshake: only a principal from the management account.</p> <p>For more information about invitations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_invites.html">Inviting an Amazon Web Services account to join your organization</a> in the <i>Organizations User Guide.</i> For more information about requests to enable all features in the organization, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">Enabling all features in your organization</a> in the <i>Organizations User Guide.</i> </p> </li> </ul> <p>After you accept a handshake, it continues to appear in the results of relevant APIs for only 30 days. After that, it's deleted.</p>

> Body parameter

```json
{
  "HandshakeId": {}
}
```

<h3 id="accepthandshake-parameters">Parameters</h3>

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
|body|body|[AcceptHandshakeRequest](#schemaaccepthandshakerequest)|true|none|
|» HandshakeId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.AcceptHandshake|

> Example responses

> 200 Response

```json
{
  "Handshake": {
    "Action": "INVITE",
    "Arn": "arn:aws:organizations::111111111111:handshake/o-exampleorgid/invite/h-examplehandshakeid111",
    "ExpirationTimestamp": "20170228T1215Z",
    "Id": "h-examplehandshakeid111",
    "Parties": [
      {
        "Id": "o-exampleorgid",
        "Type": "ORGANIZATION"
      },
      {
        "Id": "juan@example.com",
        "Type": "EMAIL"
      }
    ],
    "RequestedTimestamp": "20170214T1215Z",
    "Resources": [
      {
        "Resources": [
          {
            "Type": "MASTER_EMAIL",
            "Value": "bill@amazon.com"
          },
          {
            "Type": "MASTER_NAME",
            "Value": "Org Master Account"
          },
          {
            "Type": "ORGANIZATION_FEATURE_SET",
            "Value": "ALL"
          }
        ],
        "Type": "ORGANIZATION",
        "Value": "o-exampleorgid"
      },
      {
        "Type": "ACCOUNT",
        "Value": "222222222222"
      }
    ],
    "State": "ACCEPTED"
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

<h3 id="accepthandshake-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AcceptHandshakeResponse](#schemaaccepthandshakeresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|AWSOrganizationsNotInUseException|[AWSOrganizationsNotInUseException](#schemaawsorganizationsnotinuseexception)|
|482|482|HandshakeConstraintViolationException|[HandshakeConstraintViolationException](#schemahandshakeconstraintviolationexception)|
|483|483|HandshakeNotFoundException|[HandshakeNotFoundException](#schemahandshakenotfoundexception)|
|484|484|InvalidHandshakeTransitionException|[InvalidHandshakeTransitionException](#schemainvalidhandshaketransitionexception)|
|485|485|HandshakeAlreadyInStateException|[HandshakeAlreadyInStateException](#schemahandshakealreadyinstateexception)|
|486|486|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|487|487|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|488|488|ServiceException|[ServiceException](#schemaserviceexception)|
|489|489|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|490|490|AccessDeniedForDependencyException|[AccessDeniedForDependencyException](#schemaaccessdeniedfordependencyexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AttachPolicy

<a id="opIdAttachPolicy"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.AttachPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.AttachPolicy' \
  -d '{
    "PolicyId": {},
    "TargetId": {}
  }'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.AttachPolicy`

<p>Attaches a policy to a root, an organizational unit (OU), or an individual account. How the policy affects accounts depends on the type of policy. Refer to the <i>Organizations User Guide</i> for information about each policy type:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html">AISERVICES_OPT_OUT_POLICY</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_backup.html">BACKUP_POLICY</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html">SERVICE_CONTROL_POLICY</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">TAG_POLICY</a> </p> </li> </ul> <p>This operation can be called only from the organization's management account.</p>

> Body parameter

```json
{
  "PolicyId": {},
  "TargetId": {}
}
```

<h3 id="attachpolicy-parameters">Parameters</h3>

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
|body|body|[AttachPolicyRequest](#schemaattachpolicyrequest)|true|none|
|» PolicyId|body|object|true|none|
|» TargetId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.AttachPolicy|

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

<h3 id="attachpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|AWSOrganizationsNotInUseException|[AWSOrganizationsNotInUseException](#schemaawsorganizationsnotinuseexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|483|483|ConstraintViolationException|[ConstraintViolationException](#schemaconstraintviolationexception)|
|484|484|DuplicatePolicyAttachmentException|[DuplicatePolicyAttachmentException](#schemaduplicatepolicyattachmentexception)|
|485|485|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|486|486|PolicyNotFoundException|[PolicyNotFoundException](#schemapolicynotfoundexception)|
|487|487|PolicyTypeNotEnabledException|[PolicyTypeNotEnabledException](#schemapolicytypenotenabledexception)|
|488|488|ServiceException|[ServiceException](#schemaserviceexception)|
|489|489|TargetNotFoundException|[TargetNotFoundException](#schematargetnotfoundexception)|
|490|490|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|491|491|UnsupportedAPIEndpointException|[UnsupportedAPIEndpointException](#schemaunsupportedapiendpointexception)|
|492|492|PolicyChangesInProgressException|[PolicyChangesInProgressException](#schemapolicychangesinprogressexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CancelHandshake

<a id="opIdCancelHandshake"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.CancelHandshake' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.CancelHandshake' \
  -d '{
    "HandshakeId": {}
  }'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.CancelHandshake`

<p>Cancels a handshake. Canceling a handshake sets the handshake state to <code>CANCELED</code>.</p> <p>This operation can be called only from the account that originated the handshake. The recipient of the handshake can't cancel it, but can use <a>DeclineHandshake</a> instead. After a handshake is canceled, the recipient can no longer respond to that handshake.</p> <p>After you cancel a handshake, it continues to appear in the results of relevant APIs for only 30 days. After that, it's deleted.</p>

> Body parameter

```json
{
  "HandshakeId": {}
}
```

<h3 id="cancelhandshake-parameters">Parameters</h3>

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
|body|body|[CancelHandshakeRequest](#schemacancelhandshakerequest)|true|none|
|» HandshakeId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.CancelHandshake|

> Example responses

> 200 Response

```json
{
  "Handshake": {
    "Action": "INVITE",
    "Arn": "arn:aws:organizations::111111111111:handshake/o-exampleorgid/invite/h-examplehandshakeid111",
    "ExpirationTimestamp": "20170228T1215Z",
    "Id": "h-examplehandshakeid111",
    "Parties": [
      {
        "Id": "o-exampleorgid",
        "Type": "ORGANIZATION"
      },
      {
        "Id": "susan@example.com",
        "Type": "EMAIL"
      }
    ],
    "RequestedTimestamp": "20170214T1215Z",
    "Resources": [
      {
        "Resources": [
          {
            "Type": "MASTER_EMAIL",
            "Value": "bill@example.com"
          },
          {
            "Type": "MASTER_NAME",
            "Value": "Master Account"
          },
          {
            "Type": "ORGANIZATION_FEATURE_SET",
            "Value": "CONSOLIDATED_BILLING"
          }
        ],
        "Type": "ORGANIZATION",
        "Value": "o-exampleorgid"
      },
      {
        "Type": "ACCOUNT",
        "Value": "222222222222"
      },
      {
        "Type": "NOTES",
        "Value": "This is a request for Susan's account to join Bob's organization."
      }
    ],
    "State": "CANCELED"
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

<h3 id="cancelhandshake-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelHandshakeResponse](#schemacancelhandshakeresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|482|482|HandshakeNotFoundException|[HandshakeNotFoundException](#schemahandshakenotfoundexception)|
|483|483|InvalidHandshakeTransitionException|[InvalidHandshakeTransitionException](#schemainvalidhandshaketransitionexception)|
|484|484|HandshakeAlreadyInStateException|[HandshakeAlreadyInStateException](#schemahandshakealreadyinstateexception)|
|485|485|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|486|486|ServiceException|[ServiceException](#schemaserviceexception)|
|487|487|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CloseAccount

<a id="opIdCloseAccount"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.CloseAccount' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.CloseAccount' \
  -d '{
    "AccountId": {}
  }'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.CloseAccount`

<p>Closes an Amazon Web Services member account within an organization. You can close an account when <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all features are enabled </a>. You can't close the management account with this API. This is an asynchronous request that Amazon Web Services performs in the background. Because <code>CloseAccount</code> operates asynchronously, it can return a successful completion message even though account closure might still be in progress. You need to wait a few minutes before the account is fully closed. To check the status of the request, do one of the following:</p> <ul> <li> <p>Use the <code>AccountId</code> that you sent in the <code>CloseAccount</code> request to provide as a parameter to the <a>DescribeAccount</a> operation. </p> <p>While the close account request is in progress, Account status will indicate PENDING_CLOSURE. When the close account request completes, the status will change to SUSPENDED. </p> </li> <li> <p>Check the CloudTrail log for the <code>CloseAccountResult</code> event that gets published after the account closes successfully. For information on using CloudTrail with Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_security_incident-response.html#orgs_cloudtrail-integration">Logging and monitoring in Organizations</a> in the <i>Organizations User Guide.</i> </p> </li> </ul> <note> <ul> <li> <p>You can close only 10% of member accounts, between 10 and 200, within a rolling 30 day period. This quota is not bound by a calendar month, but starts when you close an account.</p> <p>After you reach this limit, you can close additional accounts in the Billing console. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/close-account.html">Closing an account</a> in the Amazon Web Services Billing and Cost Management User Guide.</p> </li> <li> <p>To reinstate a closed account, contact Amazon Web Services Support within the 90-day grace period while the account is in SUSPENDED status. </p> </li> <li> <p>If the Amazon Web Services account you attempt to close is linked to an Amazon Web Services GovCloud (US) account, the <code>CloseAccount</code> request will close both accounts. To learn important pre-closure details, see <a href="https://docs.aws.amazon.com/govcloud-us/latest/UserGuide/Closing-govcloud-account.html"> Closing an Amazon Web Services GovCloud (US) account</a> in the <i> Amazon Web Services GovCloud User Guide</i>.</p> </li> </ul> </note> <p>For more information about closing accounts, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_close.html">Closing an Amazon Web Services account</a> in the <i>Organizations User Guide.</i> </p>

> Body parameter

```json
{
  "AccountId": {}
}
```

<h3 id="closeaccount-parameters">Parameters</h3>

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
|body|body|[CloseAccountRequest](#schemacloseaccountrequest)|true|none|
|» AccountId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.CloseAccount|

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

<h3 id="closeaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|AccountAlreadyClosedException|[AccountAlreadyClosedException](#schemaaccountalreadyclosedexception)|
|482|482|AccountNotFoundException|[AccountNotFoundException](#schemaaccountnotfoundexception)|
|483|483|AWSOrganizationsNotInUseException|[AWSOrganizationsNotInUseException](#schemaawsorganizationsnotinuseexception)|
|484|484|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|
|486|486|ConstraintViolationException|[ConstraintViolationException](#schemaconstraintviolationexception)|
|487|487|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|488|488|ServiceException|[ServiceException](#schemaserviceexception)|
|489|489|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|490|490|UnsupportedAPIEndpointException|[UnsupportedAPIEndpointException](#schemaunsupportedapiendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateAccount

<a id="opIdCreateAccount"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.CreateAccount' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.CreateAccount' \
  -d '{
    "Email": {},
    "AccountName": {},
    "RoleName": {},
    "IamUserAccessToBilling": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.CreateAccount`

<p>Creates an Amazon Web Services account that is automatically a member of the organization whose credentials made the request. This is an asynchronous request that Amazon Web Services performs in the background. Because <code>CreateAccount</code> operates asynchronously, it can return a successful completion message even though account initialization might still be in progress. You might need to wait a few minutes before you can successfully access the account. To check the status of the request, do one of the following:</p> <ul> <li> <p>Use the <code>Id</code> value of the <code>CreateAccountStatus</code> response element from this operation to provide as a parameter to the <a>DescribeCreateAccountStatus</a> operation.</p> </li> <li> <p>Check the CloudTrail log for the <code>CreateAccountResult</code> event. For information on using CloudTrail with Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_security_incident-response.html#orgs_cloudtrail-integration">Logging and monitoring in Organizations</a> in the <i>Organizations User Guide.</i> </p> </li> </ul> <p>The user who calls the API to create an account must have the <code>organizations:CreateAccount</code> permission. If you enabled all features in the organization, Organizations creates the required service-linked role named <code>AWSServiceRoleForOrganizations</code>. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html#orgs_integrate_services-using_slrs">Organizations and Service-Linked Roles</a> in the <i>Organizations User Guide</i>.</p> <p>If the request includes tags, then the requester must have the <code>organizations:TagResource</code> permission.</p> <p>Organizations preconfigures the new member account with a role (named <code>OrganizationAccountAccessRole</code> by default) that grants users in the management account administrator permissions in the new member account. Principals in the management account can assume the role. Organizations clones the company name and address information for the new account from the organization's management account.</p> <p>This operation can be called only from the organization's management account.</p> <p>For more information about creating accounts, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_create.html">Creating an Amazon Web Services account in Your Organization</a> in the <i>Organizations User Guide.</i> </p> <important> <ul> <li> <p>When you create an account in an organization using the Organizations console, API, or CLI commands, the information required for the account to operate as a standalone account, such as a payment method and signing the end user license agreement (EULA) is <i>not</i> automatically collected. If you must remove an account from your organization later, you can do so only after you provide the missing information. Follow the steps at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info"> To leave an organization as a member account</a> in the <i>Organizations User Guide</i>.</p> </li> <li> <p>If you get an exception that indicates that you exceeded your account limits for the organization, contact <a href="https://console.aws.amazon.com/support/home#/">Amazon Web Services Support</a>.</p> </li> <li> <p>If you get an exception that indicates that the operation failed because your organization is still initializing, wait one hour and then try again. If the error persists, contact <a href="https://console.aws.amazon.com/support/home#/">Amazon Web Services Support</a>.</p> </li> <li> <p>Using <code>CreateAccount</code> to create multiple temporary accounts isn't recommended. You can only close an account from the Billing and Cost Management console, and you must be signed in as the root user. For information on the requirements and process for closing an account, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_close.html">Closing an Amazon Web Services account</a> in the <i>Organizations User Guide</i>.</p> </li> </ul> </important> <note> <p>When you create a member account with this operation, you can choose whether to create the account with the <b>IAM User and Role Access to Billing Information</b> switch enabled. If you enable it, IAM users and roles that have appropriate permissions can view billing information for the account. If you disable it, only the account root user can access billing information. For information about how to disable this switch for an account, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/grantaccess.html">Granting Access to Your Billing Information and Tools</a>.</p> </note>

> Body parameter

```json
{
  "Email": {},
  "AccountName": {},
  "RoleName": {},
  "IamUserAccessToBilling": {},
  "Tags": {}
}
```

<h3 id="createaccount-parameters">Parameters</h3>

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
|body|body|[CreateAccountRequest](#schemacreateaccountrequest)|true|none|
|» Email|body|object|true|none|
|» AccountName|body|object|true|none|
|» RoleName|body|object|false|none|
|» IamUserAccessToBilling|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.CreateAccount|

> Example responses

> 200 Response

```json
{
  "CreateAccountStatus": {
    "Id": "car-examplecreateaccountrequestid111",
    "State": "IN_PROGRESS"
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

<h3 id="createaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateAccountResponse](#schemacreateaccountresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|AWSOrganizationsNotInUseException|[AWSOrganizationsNotInUseException](#schemaawsorganizationsnotinuseexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|483|483|ConstraintViolationException|[ConstraintViolationException](#schemaconstraintviolationexception)|
|484|484|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|485|485|FinalizingOrganizationException|[FinalizingOrganizationException](#schemafinalizingorganizationexception)|
|486|486|ServiceException|[ServiceException](#schemaserviceexception)|
|487|487|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|488|488|UnsupportedAPIEndpointException|[UnsupportedAPIEndpointException](#schemaunsupportedapiendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateGovCloudAccount

<a id="opIdCreateGovCloudAccount"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.CreateGovCloudAccount' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.CreateGovCloudAccount' \
  -d '{
    "Email": {},
    "AccountName": {},
    "RoleName": {},
    "IamUserAccessToBilling": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.CreateGovCloudAccount`

<p>This action is available if all of the following are true:</p> <ul> <li> <p>You're authorized to create accounts in the Amazon Web Services GovCloud (US) Region. For more information on the Amazon Web Services GovCloud (US) Region, see the <a href="https://docs.aws.amazon.com/govcloud-us/latest/UserGuide/welcome.html"> <i>Amazon Web Services GovCloud User Guide</i>.</a> </p> </li> <li> <p>You already have an account in the Amazon Web Services GovCloud (US) Region that is paired with a management account of an organization in the commercial Region.</p> </li> <li> <p>You call this action from the management account of your organization in the commercial Region.</p> </li> <li> <p>You have the <code>organizations:CreateGovCloudAccount</code> permission. </p> </li> </ul> <p>Organizations automatically creates the required service-linked role named <code>AWSServiceRoleForOrganizations</code>. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html#orgs_integrate_services-using_slrs">Organizations and Service-Linked Roles</a> in the <i>Organizations User Guide.</i> </p> <p>Amazon Web Services automatically enables CloudTrail for Amazon Web Services GovCloud (US) accounts, but you should also do the following:</p> <ul> <li> <p>Verify that CloudTrail is enabled to store logs.</p> </li> <li> <p>Create an Amazon S3 bucket for CloudTrail log storage.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/govcloud-us/latest/UserGuide/verifying-cloudtrail.html">Verifying CloudTrail Is Enabled</a> in the <i>Amazon Web Services GovCloud User Guide</i>. </p> </li> </ul> <p>If the request includes tags, then the requester must have the <code>organizations:TagResource</code> permission. The tags are attached to the commercial account associated with the GovCloud account, rather than the GovCloud account itself. To add tags to the GovCloud account, call the <a>TagResource</a> operation in the GovCloud Region after the new GovCloud account exists.</p> <p>You call this action from the management account of your organization in the commercial Region to create a standalone Amazon Web Services account in the Amazon Web Services GovCloud (US) Region. After the account is created, the management account of an organization in the Amazon Web Services GovCloud (US) Region can invite it to that organization. For more information on inviting standalone accounts in the Amazon Web Services GovCloud (US) to join an organization, see <a href="https://docs.aws.amazon.com/govcloud-us/latest/UserGuide/govcloud-organizations.html">Organizations</a> in the <i>Amazon Web Services GovCloud User Guide.</i> </p> <p>Calling <code>CreateGovCloudAccount</code> is an asynchronous request that Amazon Web Services performs in the background. Because <code>CreateGovCloudAccount</code> operates asynchronously, it can return a successful completion message even though account initialization might still be in progress. You might need to wait a few minutes before you can successfully access the account. To check the status of the request, do one of the following:</p> <ul> <li> <p>Use the <code>OperationId</code> response element from this operation to provide as a parameter to the <a>DescribeCreateAccountStatus</a> operation.</p> </li> <li> <p>Check the CloudTrail log for the <code>CreateAccountResult</code> event. For information on using CloudTrail with Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_monitoring.html">Monitoring the Activity in Your Organization</a> in the <i>Organizations User Guide.</i> </p> </li> </ul> <p/> <p>When you call the <code>CreateGovCloudAccount</code> action, you create two accounts: a standalone account in the Amazon Web Services GovCloud (US) Region and an associated account in the commercial Region for billing and support purposes. The account in the commercial Region is automatically a member of the organization whose credentials made the request. Both accounts are associated with the same email address.</p> <p>A role is created in the new account in the commercial Region that allows the management account in the organization in the commercial Region to assume it. An Amazon Web Services GovCloud (US) account is then created and associated with the commercial account that you just created. A role is also created in the new Amazon Web Services GovCloud (US) account that can be assumed by the Amazon Web Services GovCloud (US) account that is associated with the management account of the commercial organization. For more information and to view a diagram that explains how account access works, see <a href="https://docs.aws.amazon.com/govcloud-us/latest/UserGuide/govcloud-organizations.html">Organizations</a> in the <i>Amazon Web Services GovCloud User Guide.</i> </p> <p>For more information about creating accounts, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_create.html">Creating an Amazon Web Services account in Your Organization</a> in the <i>Organizations User Guide.</i> </p> <important> <ul> <li> <p>When you create an account in an organization using the Organizations console, API, or CLI commands, the information required for the account to operate as a standalone account is <i>not</i> automatically collected. This includes a payment method and signing the end user license agreement (EULA). If you must remove an account from your organization later, you can do so only after you provide the missing information. Follow the steps at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info"> To leave an organization as a member account</a> in the <i>Organizations User Guide.</i> </p> </li> <li> <p>If you get an exception that indicates that you exceeded your account limits for the organization, contact <a href="https://console.aws.amazon.com/support/home#/">Amazon Web Services Support</a>.</p> </li> <li> <p>If you get an exception that indicates that the operation failed because your organization is still initializing, wait one hour and then try again. If the error persists, contact <a href="https://console.aws.amazon.com/support/home#/">Amazon Web Services Support</a>.</p> </li> <li> <p>Using <code>CreateGovCloudAccount</code> to create multiple temporary accounts isn't recommended. You can only close an account from the Amazon Web Services Billing and Cost Management console, and you must be signed in as the root user. For information on the requirements and process for closing an account, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_close.html">Closing an Amazon Web Services account</a> in the <i>Organizations User Guide</i>.</p> </li> </ul> </important> <note> <p>When you create a member account with this operation, you can choose whether to create the account with the <b>IAM User and Role Access to Billing Information</b> switch enabled. If you enable it, IAM users and roles that have appropriate permissions can view billing information for the account. If you disable it, only the account root user can access billing information. For information about how to disable this switch for an account, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/grantaccess.html">Granting Access to Your Billing Information and Tools</a>.</p> </note>

> Body parameter

```json
{
  "Email": {},
  "AccountName": {},
  "RoleName": {},
  "IamUserAccessToBilling": {},
  "Tags": {}
}
```

<h3 id="creategovcloudaccount-parameters">Parameters</h3>

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
|body|body|[CreateGovCloudAccountRequest](#schemacreategovcloudaccountrequest)|true|none|
|» Email|body|object|true|none|
|» AccountName|body|object|true|none|
|» RoleName|body|object|false|none|
|» IamUserAccessToBilling|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.CreateGovCloudAccount|

> Example responses

> 200 Response

```json
{
  "CreateAccountStatus": {
    "Id": {},
    "AccountName": {},
    "State": {},
    "RequestedTimestamp": {},
    "CompletedTimestamp": {},
    "AccountId": {},
    "GovCloudAccountId": {},
    "FailureReason": {}
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

<h3 id="creategovcloudaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateGovCloudAccountResponse](#schemacreategovcloudaccountresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|AWSOrganizationsNotInUseException|[AWSOrganizationsNotInUseException](#schemaawsorganizationsnotinuseexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|483|483|ConstraintViolationException|[ConstraintViolationException](#schemaconstraintviolationexception)|
|484|484|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|485|485|FinalizingOrganizationException|[FinalizingOrganizationException](#schemafinalizingorganizationexception)|
|486|486|ServiceException|[ServiceException](#schemaserviceexception)|
|487|487|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|488|488|UnsupportedAPIEndpointException|[UnsupportedAPIEndpointException](#schemaunsupportedapiendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateOrganization

<a id="opIdCreateOrganization"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.CreateOrganization' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.CreateOrganization' \
  -d '{
    "FeatureSet": {}
  }'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.CreateOrganization`

<p>Creates an Amazon Web Services organization. The account whose user is calling the <code>CreateOrganization</code> operation automatically becomes the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account">management account</a> of the new organization.</p> <p>This operation must be called using credentials from the account that is to become the new organization's management account. The principal must also have the relevant IAM permissions.</p> <p>By default (or if you set the <code>FeatureSet</code> parameter to <code>ALL</code>), the new organization is created with all features enabled and service control policies automatically enabled in the root. If you instead choose to create the organization supporting only the consolidated billing features by setting the <code>FeatureSet</code> parameter to <code>CONSOLIDATED_BILLING"</code>, no policy types are enabled by default, and you can't use organization policies</p>

> Body parameter

```json
{
  "FeatureSet": {}
}
```

<h3 id="createorganization-parameters">Parameters</h3>

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
|body|body|[CreateOrganizationRequest](#schemacreateorganizationrequest)|true|none|
|» FeatureSet|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.CreateOrganization|

> Example responses

> 200 Response

```json
{
  "Organization": {
    "Arn": "arn:aws:organizations::111111111111:organization/o-exampleorgid",
    "AvailablePolicyTypes": [],
    "FeatureSet": "CONSOLIDATED_BILLING",
    "Id": "o-exampleorgid",
    "MasterAccountArn": "arn:aws:organizations::111111111111:account/o-exampleorgid/111111111111",
    "MasterAccountEmail": "bill@example.com",
    "MasterAccountId": "111111111111"
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

<h3 id="createorganization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateOrganizationResponse](#schemacreateorganizationresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|AlreadyInOrganizationException|[AlreadyInOrganizationException](#schemaalreadyinorganizationexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|483|483|ConstraintViolationException|[ConstraintViolationException](#schemaconstraintviolationexception)|
|484|484|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|485|485|ServiceException|[ServiceException](#schemaserviceexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|487|487|AccessDeniedForDependencyException|[AccessDeniedForDependencyException](#schemaaccessdeniedfordependencyexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateOrganizationalUnit

<a id="opIdCreateOrganizationalUnit"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.CreateOrganizationalUnit' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.CreateOrganizationalUnit' \
  -d '{
    "ParentId": {},
    "Name": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.CreateOrganizationalUnit`

<p>Creates an organizational unit (OU) within a root or parent OU. An OU is a container for accounts that enables you to organize your accounts to apply policies according to your business requirements. The number of levels deep that you can nest OUs is dependent upon the policy types enabled for that root. For service control policies, the limit is five.</p> <p>For more information about OUs, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html">Managing Organizational Units</a> in the <i>Organizations User Guide.</i> </p> <p>If the request includes tags, then the requester must have the <code>organizations:TagResource</code> permission.</p> <p>This operation can be called only from the organization's management account.</p>

> Body parameter

```json
{
  "ParentId": {},
  "Name": {},
  "Tags": {}
}
```

<h3 id="createorganizationalunit-parameters">Parameters</h3>

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
|body|body|[CreateOrganizationalUnitRequest](#schemacreateorganizationalunitrequest)|true|none|
|» ParentId|body|object|true|none|
|» Name|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.CreateOrganizationalUnit|

> Example responses

> 200 Response

```json
{
  "OrganizationalUnit": {
    "Arn": "arn:aws:organizations::111111111111:ou/o-exampleorgid/ou-examplerootid111-exampleouid111",
    "Id": "ou-examplerootid111-exampleouid111",
    "Name": "AccountingOU"
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

<h3 id="createorganizationalunit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateOrganizationalUnitResponse](#schemacreateorganizationalunitresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|AWSOrganizationsNotInUseException|[AWSOrganizationsNotInUseException](#schemaawsorganizationsnotinuseexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|483|483|ConstraintViolationException|[ConstraintViolationException](#schemaconstraintviolationexception)|
|484|484|DuplicateOrganizationalUnitException|[DuplicateOrganizationalUnitException](#schemaduplicateorganizationalunitexception)|
|485|485|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|486|486|ParentNotFoundException|[ParentNotFoundException](#schemaparentnotfoundexception)|
|487|487|ServiceException|[ServiceException](#schemaserviceexception)|
|488|488|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreatePolicy

<a id="opIdCreatePolicy"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.CreatePolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.CreatePolicy' \
  -d '{
    "Content": {},
    "Description": {},
    "Name": {},
    "Type": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.CreatePolicy`

<p>Creates a policy of a specified type that you can attach to a root, an organizational unit (OU), or an individual Amazon Web Services account.</p> <p>For more information about policies and their use, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies.html">Managing Organization Policies</a>.</p> <p>If the request includes tags, then the requester must have the <code>organizations:TagResource</code> permission.</p> <p>This operation can be called only from the organization's management account.</p>

> Body parameter

```json
{
  "Content": {},
  "Description": {},
  "Name": {},
  "Type": {},
  "Tags": {}
}
```

<h3 id="createpolicy-parameters">Parameters</h3>

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
|body|body|[CreatePolicyRequest](#schemacreatepolicyrequest)|true|none|
|» Content|body|object|true|none|
|» Description|body|object|true|none|
|» Name|body|object|true|none|
|» Type|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.CreatePolicy|

> Example responses

> 200 Response

```json
{
  "Policy": {
    "Content": "{\"Version\":\"2012-10-17\",\"Statement\":{\"Effect\":\"Allow\",\"Action\":\"s3:*\"}}",
    "PolicySummary": {
      "Arn": "arn:aws:organizations::111111111111:policy/o-exampleorgid/service_control_policy/p-examplepolicyid111",
      "Description": "Allows delegation of all S3 actions",
      "Name": "AllowAllS3Actions",
      "Type": "SERVICE_CONTROL_POLICY"
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

<h3 id="createpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreatePolicyResponse](#schemacreatepolicyresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|AWSOrganizationsNotInUseException|[AWSOrganizationsNotInUseException](#schemaawsorganizationsnotinuseexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|483|483|ConstraintViolationException|[ConstraintViolationException](#schemaconstraintviolationexception)|
|484|484|DuplicatePolicyException|[DuplicatePolicyException](#schemaduplicatepolicyexception)|
|485|485|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|486|486|MalformedPolicyDocumentException|[MalformedPolicyDocumentException](#schemamalformedpolicydocumentexception)|
|487|487|PolicyTypeNotAvailableForOrganizationException|[PolicyTypeNotAvailableForOrganizationException](#schemapolicytypenotavailablefororganizationexception)|
|488|488|ServiceException|[ServiceException](#schemaserviceexception)|
|489|489|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|490|490|UnsupportedAPIEndpointException|[UnsupportedAPIEndpointException](#schemaunsupportedapiendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeclineHandshake

<a id="opIdDeclineHandshake"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.DeclineHandshake' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.DeclineHandshake' \
  -d '{
    "HandshakeId": {}
  }'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.DeclineHandshake`

<p>Declines a handshake request. This sets the handshake state to <code>DECLINED</code> and effectively deactivates the request.</p> <p>This operation can be called only from the account that received the handshake. The originator of the handshake can use <a>CancelHandshake</a> instead. The originator can't reactivate a declined request, but can reinitiate the process with a new handshake request.</p> <p>After you decline a handshake, it continues to appear in the results of relevant APIs for only 30 days. After that, it's deleted.</p>

> Body parameter

```json
{
  "HandshakeId": {}
}
```

<h3 id="declinehandshake-parameters">Parameters</h3>

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
|body|body|[DeclineHandshakeRequest](#schemadeclinehandshakerequest)|true|none|
|» HandshakeId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.DeclineHandshake|

> Example responses

> 200 Response

```json
{
  "Handshake": {
    "Action": "INVITE",
    "Arn": "arn:aws:organizations::111111111111:handshake/o-exampleorgid/invite/h-examplehandshakeid111",
    "ExpirationTimestamp": "2016-12-15T19:27:58Z",
    "Id": "h-examplehandshakeid111",
    "Parties": [
      {
        "Id": "222222222222",
        "Type": "ACCOUNT"
      },
      {
        "Id": "o-exampleorgid",
        "Type": "ORGANIZATION"
      }
    ],
    "RequestedTimestamp": "2016-11-30T19:27:58Z",
    "Resources": [
      {
        "Resources": [
          {
            "Type": "MASTER_EMAIL",
            "Value": "bill@example.com"
          },
          {
            "Type": "MASTER_NAME",
            "Value": "Master Account"
          }
        ],
        "Type": "ORGANIZATION",
        "Value": "o-exampleorgid"
      },
      {
        "Type": "ACCOUNT",
        "Value": "222222222222"
      },
      {
        "Type": "NOTES",
        "Value": "This is an invitation to Susan's account to join the Bill's organization."
      }
    ],
    "State": "DECLINED"
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

<h3 id="declinehandshake-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeclineHandshakeResponse](#schemadeclinehandshakeresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|482|482|HandshakeNotFoundException|[HandshakeNotFoundException](#schemahandshakenotfoundexception)|
|483|483|InvalidHandshakeTransitionException|[InvalidHandshakeTransitionException](#schemainvalidhandshaketransitionexception)|
|484|484|HandshakeAlreadyInStateException|[HandshakeAlreadyInStateException](#schemahandshakealreadyinstateexception)|
|485|485|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|486|486|ServiceException|[ServiceException](#schemaserviceexception)|
|487|487|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteOrganization

<a id="opIdDeleteOrganization"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.DeleteOrganization' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.DeleteOrganization'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.DeleteOrganization`

Deletes the organization. You can delete an organization only by using credentials from the management account. The organization must be empty of member accounts.

<h3 id="deleteorganization-parameters">Parameters</h3>

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

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.DeleteOrganization|

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

<h3 id="deleteorganization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|AWSOrganizationsNotInUseException|[AWSOrganizationsNotInUseException](#schemaawsorganizationsnotinuseexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|483|483|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|484|484|OrganizationNotEmptyException|[OrganizationNotEmptyException](#schemaorganizationnotemptyexception)|
|485|485|ServiceException|[ServiceException](#schemaserviceexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteOrganizationalUnit

<a id="opIdDeleteOrganizationalUnit"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.DeleteOrganizationalUnit' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.DeleteOrganizationalUnit' \
  -d '{
    "OrganizationalUnitId": {}
  }'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.DeleteOrganizationalUnit`

<p>Deletes an organizational unit (OU) from a root or another OU. You must first remove all accounts and child OUs from the OU that you want to delete.</p> <p>This operation can be called only from the organization's management account.</p>

> Body parameter

```json
{
  "OrganizationalUnitId": {}
}
```

<h3 id="deleteorganizationalunit-parameters">Parameters</h3>

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
|body|body|[DeleteOrganizationalUnitRequest](#schemadeleteorganizationalunitrequest)|true|none|
|» OrganizationalUnitId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.DeleteOrganizationalUnit|

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

<h3 id="deleteorganizationalunit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|AWSOrganizationsNotInUseException|[AWSOrganizationsNotInUseException](#schemaawsorganizationsnotinuseexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|483|483|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|484|484|OrganizationalUnitNotEmptyException|[OrganizationalUnitNotEmptyException](#schemaorganizationalunitnotemptyexception)|
|485|485|OrganizationalUnitNotFoundException|[OrganizationalUnitNotFoundException](#schemaorganizationalunitnotfoundexception)|
|486|486|ServiceException|[ServiceException](#schemaserviceexception)|
|487|487|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeletePolicy

<a id="opIdDeletePolicy"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.DeletePolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.DeletePolicy' \
  -d '{
    "PolicyId": {}
  }'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.DeletePolicy`

<p>Deletes the specified policy from your organization. Before you perform this operation, you must first detach the policy from all organizational units (OUs), roots, and accounts.</p> <p>This operation can be called only from the organization's management account.</p>

> Body parameter

```json
{
  "PolicyId": {}
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

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.DeletePolicy|

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

> 488 Response

```json
null
```

<h3 id="deletepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|AWSOrganizationsNotInUseException|[AWSOrganizationsNotInUseException](#schemaawsorganizationsnotinuseexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|483|483|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|484|484|PolicyInUseException|[PolicyInUseException](#schemapolicyinuseexception)|
|485|485|PolicyNotFoundException|[PolicyNotFoundException](#schemapolicynotfoundexception)|
|486|486|ServiceException|[ServiceException](#schemaserviceexception)|
|487|487|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|488|488|UnsupportedAPIEndpointException|[UnsupportedAPIEndpointException](#schemaunsupportedapiendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteResourcePolicy

<a id="opIdDeleteResourcePolicy"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.DeleteResourcePolicy' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.DeleteResourcePolicy'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.DeleteResourcePolicy`

<p>Deletes the resource policy from your organization.</p> <p>You can only call this operation from the organization's management account.</p>

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

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.DeleteResourcePolicy|

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

<h3 id="deleteresourcepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ServiceException|[ServiceException](#schemaserviceexception)|
|482|482|UnsupportedAPIEndpointException|[UnsupportedAPIEndpointException](#schemaunsupportedapiendpointexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|485|485|ConstraintViolationException|[ConstraintViolationException](#schemaconstraintviolationexception)|
|486|486|AWSOrganizationsNotInUseException|[AWSOrganizationsNotInUseException](#schemaawsorganizationsnotinuseexception)|
|487|487|ResourcePolicyNotFoundException|[ResourcePolicyNotFoundException](#schemaresourcepolicynotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeregisterDelegatedAdministrator

<a id="opIdDeregisterDelegatedAdministrator"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.DeregisterDelegatedAdministrator' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.DeregisterDelegatedAdministrator' \
  -d '{
    "AccountId": {},
    "ServicePrincipal": {}
  }'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.DeregisterDelegatedAdministrator`

<p>Removes the specified member Amazon Web Services account as a delegated administrator for the specified Amazon Web Services service.</p> <important> <p>Deregistering a delegated administrator can have unintended impacts on the functionality of the enabled Amazon Web Services service. See the documentation for the enabled service before you deregister a delegated administrator so that you understand any potential impacts.</p> </important> <p>You can run this action only for Amazon Web Services services that support this feature. For a current list of services that support it, see the column <i>Supports Delegated Administrator</i> in the table at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services_list.html">Amazon Web Services Services that you can use with Organizations</a> in the <i>Organizations User Guide.</i> </p> <p>This operation can be called only from the organization's management account.</p>

> Body parameter

```json
{
  "AccountId": {},
  "ServicePrincipal": {}
}
```

<h3 id="deregisterdelegatedadministrator-parameters">Parameters</h3>

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
|body|body|[DeregisterDelegatedAdministratorRequest](#schemaderegisterdelegatedadministratorrequest)|true|none|
|» AccountId|body|object|true|none|
|» ServicePrincipal|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.DeregisterDelegatedAdministrator|

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

> 488 Response

```json
null
```

> 489 Response

```json
null
```

<h3 id="deregisterdelegatedadministrator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|AccountNotFoundException|[AccountNotFoundException](#schemaaccountnotfoundexception)|
|482|482|AccountNotRegisteredException|[AccountNotRegisteredException](#schemaaccountnotregisteredexception)|
|483|483|AWSOrganizationsNotInUseException|[AWSOrganizationsNotInUseException](#schemaawsorganizationsnotinuseexception)|
|484|484|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|485|485|ConstraintViolationException|[ConstraintViolationException](#schemaconstraintviolationexception)|
|486|486|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|487|487|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|488|488|ServiceException|[ServiceException](#schemaserviceexception)|
|489|489|UnsupportedAPIEndpointException|[UnsupportedAPIEndpointException](#schemaunsupportedapiendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAccount

<a id="opIdDescribeAccount"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.DescribeAccount' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.DescribeAccount' \
  -d '{
    "AccountId": {}
  }'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.DescribeAccount`

<p>Retrieves Organizations-related information about the specified account.</p> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>

> Body parameter

```json
{
  "AccountId": {}
}
```

<h3 id="describeaccount-parameters">Parameters</h3>

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
|body|body|[DescribeAccountRequest](#schemadescribeaccountrequest)|true|none|
|» AccountId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.DescribeAccount|

> Example responses

> 200 Response

```json
{
  "Account": {
    "Arn": "arn:aws:organizations::111111111111:account/o-exampleorgid/555555555555",
    "Email": "anika@example.com",
    "Id": "555555555555",
    "Name": "Beta Account"
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

<h3 id="describeaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAccountResponse](#schemadescribeaccountresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|AccountNotFoundException|[AccountNotFoundException](#schemaaccountnotfoundexception)|
|482|482|AWSOrganizationsNotInUseException|[AWSOrganizationsNotInUseException](#schemaawsorganizationsnotinuseexception)|
|483|483|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|484|484|ServiceException|[ServiceException](#schemaserviceexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeCreateAccountStatus

<a id="opIdDescribeCreateAccountStatus"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.DescribeCreateAccountStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.DescribeCreateAccountStatus' \
  -d '{
    "CreateAccountRequestId": {}
  }'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.DescribeCreateAccountStatus`

<p>Retrieves the current status of an asynchronous request to create an account.</p> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>

> Body parameter

```json
{
  "CreateAccountRequestId": {}
}
```

<h3 id="describecreateaccountstatus-parameters">Parameters</h3>

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
|body|body|[DescribeCreateAccountStatusRequest](#schemadescribecreateaccountstatusrequest)|true|none|
|» CreateAccountRequestId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.DescribeCreateAccountStatus|

> Example responses

> 200 Response

```json
{
  "CreateAccountStatus": {
    "AccountId": "333333333333",
    "Id": "car-exampleaccountcreationrequestid",
    "State": "SUCCEEDED"
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

<h3 id="describecreateaccountstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeCreateAccountStatusResponse](#schemadescribecreateaccountstatusresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|AWSOrganizationsNotInUseException|[AWSOrganizationsNotInUseException](#schemaawsorganizationsnotinuseexception)|
|482|482|CreateAccountStatusNotFoundException|[CreateAccountStatusNotFoundException](#schemacreateaccountstatusnotfoundexception)|
|483|483|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|484|484|ServiceException|[ServiceException](#schemaserviceexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|486|486|UnsupportedAPIEndpointException|[UnsupportedAPIEndpointException](#schemaunsupportedapiendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeEffectivePolicy

<a id="opIdDescribeEffectivePolicy"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.DescribeEffectivePolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.DescribeEffectivePolicy' \
  -d '{
    "PolicyType": {},
    "TargetId": {}
  }'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.DescribeEffectivePolicy`

<p>Returns the contents of the effective policy for specified policy type and account. The effective policy is the aggregation of any policies of the specified type that the account inherits, plus any policy of that type that is directly attached to the account.</p> <p>This operation applies only to policy types <i>other</i> than service control policies (SCPs).</p> <p>For more information about policy inheritance, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies-inheritance.html">How Policy Inheritance Works</a> in the <i>Organizations User Guide</i>.</p> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>

> Body parameter

```json
{
  "PolicyType": {},
  "TargetId": {}
}
```

<h3 id="describeeffectivepolicy-parameters">Parameters</h3>

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
|body|body|[DescribeEffectivePolicyRequest](#schemadescribeeffectivepolicyrequest)|true|none|
|» PolicyType|body|object|true|none|
|» TargetId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.DescribeEffectivePolicy|

> Example responses

> 200 Response

```json
{
  "EffectivePolicy": {
    "PolicyContent": {},
    "LastUpdatedTimestamp": {},
    "TargetId": {},
    "PolicyType": {}
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

<h3 id="describeeffectivepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEffectivePolicyResponse](#schemadescribeeffectivepolicyresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|AWSOrganizationsNotInUseException|[AWSOrganizationsNotInUseException](#schemaawsorganizationsnotinuseexception)|
|482|482|ConstraintViolationException|[ConstraintViolationException](#schemaconstraintviolationexception)|
|483|483|ServiceException|[ServiceException](#schemaserviceexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|TargetNotFoundException|[TargetNotFoundException](#schematargetnotfoundexception)|
|486|486|EffectivePolicyNotFoundException|[EffectivePolicyNotFoundException](#schemaeffectivepolicynotfoundexception)|
|487|487|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|488|488|UnsupportedAPIEndpointException|[UnsupportedAPIEndpointException](#schemaunsupportedapiendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeHandshake

<a id="opIdDescribeHandshake"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.DescribeHandshake' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.DescribeHandshake' \
  -d '{
    "HandshakeId": {}
  }'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.DescribeHandshake`

<p>Retrieves information about a previously requested handshake. The handshake ID comes from the response to the original <a>InviteAccountToOrganization</a> operation that generated the handshake.</p> <p>You can access handshakes that are <code>ACCEPTED</code>, <code>DECLINED</code>, or <code>CANCELED</code> for only 30 days after they change to that state. They're then deleted and no longer accessible.</p> <p>This operation can be called from any account in the organization.</p>

> Body parameter

```json
{
  "HandshakeId": {}
}
```

<h3 id="describehandshake-parameters">Parameters</h3>

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
|body|body|[DescribeHandshakeRequest](#schemadescribehandshakerequest)|true|none|
|» HandshakeId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.DescribeHandshake|

> Example responses

> 200 Response

```json
{
  "Handshake": {
    "Action": "INVITE",
    "Arn": "arn:aws:organizations::111111111111:handshake/o-exampleorgid/invite/h-examplehandshakeid111",
    "ExpirationTimestamp": "2016-11-30T17:24:58.046Z",
    "Id": "h-examplehandshakeid111",
    "Parties": [
      {
        "Id": "o-exampleorgid",
        "Type": "ORGANIZATION"
      },
      {
        "Id": "333333333333",
        "Type": "ACCOUNT"
      }
    ],
    "RequestedTimestamp": "2016-11-30T17:24:58.046Z",
    "Resources": [
      {
        "Resources": [
          {
            "Type": "MASTER_EMAIL",
            "Value": "bill@example.com"
          },
          {
            "Type": "MASTER_NAME",
            "Value": "Master Account"
          }
        ],
        "Type": "ORGANIZATION",
        "Value": "o-exampleorgid"
      },
      {
        "Type": "ACCOUNT",
        "Value": "333333333333"
      }
    ],
    "State": "OPEN"
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

<h3 id="describehandshake-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeHandshakeResponse](#schemadescribehandshakeresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|482|482|HandshakeNotFoundException|[HandshakeNotFoundException](#schemahandshakenotfoundexception)|
|483|483|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|484|484|ServiceException|[ServiceException](#schemaserviceexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeOrganization

<a id="opIdDescribeOrganization"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.DescribeOrganization' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.DescribeOrganization'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.DescribeOrganization`

<p>Retrieves information about the organization that the user's account belongs to.</p> <p>This operation can be called from any account in the organization.</p> <note> <p>Even if a policy type is shown as available in the organization, you can disable it separately at the root level with <a>DisablePolicyType</a>. Use <a>ListRoots</a> to see the status of policy types for a specified root.</p> </note>

<h3 id="describeorganization-parameters">Parameters</h3>

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

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.DescribeOrganization|

> Example responses

> 200 Response

```json
{
  "Organization": {
    "Arn": "arn:aws:organizations::111111111111:organization/o-exampleorgid",
    "AvailablePolicyTypes": [
      {
        "Status": "ENABLED",
        "Type": "SERVICE_CONTROL_POLICY"
      }
    ],
    "FeatureSet": "ALL",
    "Id": "o-exampleorgid",
    "MasterAccountArn": "arn:aws:organizations::111111111111:account/o-exampleorgid/111111111111",
    "MasterAccountEmail": "bill@example.com"
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

<h3 id="describeorganization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeOrganizationResponse](#schemadescribeorganizationresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|AWSOrganizationsNotInUseException|[AWSOrganizationsNotInUseException](#schemaawsorganizationsnotinuseexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|483|483|ServiceException|[ServiceException](#schemaserviceexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeOrganizationalUnit

<a id="opIdDescribeOrganizationalUnit"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.DescribeOrganizationalUnit' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.DescribeOrganizationalUnit' \
  -d '{
    "OrganizationalUnitId": {}
  }'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.DescribeOrganizationalUnit`

<p>Retrieves information about an organizational unit (OU).</p> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>

> Body parameter

```json
{
  "OrganizationalUnitId": {}
}
```

<h3 id="describeorganizationalunit-parameters">Parameters</h3>

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
|body|body|[DescribeOrganizationalUnitRequest](#schemadescribeorganizationalunitrequest)|true|none|
|» OrganizationalUnitId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.DescribeOrganizationalUnit|

> Example responses

> 200 Response

```json
{
  "OrganizationalUnit": {
    "Arn": "arn:aws:organizations::111111111111:ou/o-exampleorgid/ou-examplerootid111-exampleouid111",
    "Id": "ou-examplerootid111-exampleouid111",
    "Name": "Accounting Group"
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

<h3 id="describeorganizationalunit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeOrganizationalUnitResponse](#schemadescribeorganizationalunitresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|AWSOrganizationsNotInUseException|[AWSOrganizationsNotInUseException](#schemaawsorganizationsnotinuseexception)|
|482|482|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|483|483|OrganizationalUnitNotFoundException|[OrganizationalUnitNotFoundException](#schemaorganizationalunitnotfoundexception)|
|484|484|ServiceException|[ServiceException](#schemaserviceexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribePolicy

<a id="opIdDescribePolicy"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.DescribePolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.DescribePolicy' \
  -d '{
    "PolicyId": {}
  }'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.DescribePolicy`

<p>Retrieves information about a policy.</p> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>

> Body parameter

```json
{
  "PolicyId": {}
}
```

<h3 id="describepolicy-parameters">Parameters</h3>

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
|body|body|[DescribePolicyRequest](#schemadescribepolicyrequest)|true|none|
|» PolicyId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.DescribePolicy|

> Example responses

> 200 Response

```json
{
  "Policy": {
    "Content": "{\\n  \\\"Version\\\": \\\"2012-10-17\\\",\\n  \\\"Statement\\\": [\\n    {\\n      \\\"Effect\\\": \\\"Allow\\\",\\n      \\\"Action\\\": \\\"*\\\",\\n      \\\"Resource\\\": \\\"*\\\"\\n    }\\n  ]\\n}",
    "PolicySummary": {
      "Arn": "arn:aws:organizations::111111111111:policy/o-exampleorgid/service_control_policy/p-examplepolicyid111",
      "AwsManaged": false,
      "Description": "Enables admins to delegate S3 permissions",
      "Id": "p-examplepolicyid111",
      "Name": "AllowAllS3Actions",
      "Type": "SERVICE_CONTROL_POLICY"
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

<h3 id="describepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribePolicyResponse](#schemadescribepolicyresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|AWSOrganizationsNotInUseException|[AWSOrganizationsNotInUseException](#schemaawsorganizationsnotinuseexception)|
|482|482|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|483|483|PolicyNotFoundException|[PolicyNotFoundException](#schemapolicynotfoundexception)|
|484|484|ServiceException|[ServiceException](#schemaserviceexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|486|486|UnsupportedAPIEndpointException|[UnsupportedAPIEndpointException](#schemaunsupportedapiendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeResourcePolicy

<a id="opIdDescribeResourcePolicy"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.DescribeResourcePolicy' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.DescribeResourcePolicy'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.DescribeResourcePolicy`

<p>Retrieves information about a resource policy.</p> <p>You can only call this operation from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>

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

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.DescribeResourcePolicy|

> Example responses

> 200 Response

```json
{
  "ResourcePolicy": {
    "ResourcePolicySummary": {
      "Id": {},
      "Arn": {}
    },
    "Content": {}
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

<h3 id="describeresourcepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeResourcePolicyResponse](#schemadescriberesourcepolicyresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ServiceException|[ServiceException](#schemaserviceexception)|
|482|482|UnsupportedAPIEndpointException|[UnsupportedAPIEndpointException](#schemaunsupportedapiendpointexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|AWSOrganizationsNotInUseException|[AWSOrganizationsNotInUseException](#schemaawsorganizationsnotinuseexception)|
|485|485|ResourcePolicyNotFoundException|[ResourcePolicyNotFoundException](#schemaresourcepolicynotfoundexception)|
|486|486|ConstraintViolationException|[ConstraintViolationException](#schemaconstraintviolationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DetachPolicy

<a id="opIdDetachPolicy"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.DetachPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.DetachPolicy' \
  -d '{
    "PolicyId": {},
    "TargetId": {}
  }'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.DetachPolicy`

<p>Detaches a policy from a target root, organizational unit (OU), or account.</p> <important> <p>If the policy being detached is a service control policy (SCP), the changes to permissions for Identity and Access Management (IAM) users and roles in affected accounts are immediate.</p> </important> <p>Every root, OU, and account must have at least one SCP attached. If you want to replace the default <code>FullAWSAccess</code> policy with an SCP that limits the permissions that can be delegated, you must attach the replacement SCP before you can remove the default SCP. This is the authorization strategy of an "<a href="https://docs.aws.amazon.com/organizations/latest/userguide/SCP_strategies.html#orgs_policies_allowlist">allow list</a>". If you instead attach a second SCP and leave the <code>FullAWSAccess</code> SCP still attached, and specify <code>"Effect": "Deny"</code> in the second SCP to override the <code>"Effect": "Allow"</code> in the <code>FullAWSAccess</code> policy (or any other attached SCP), you're using the authorization strategy of a "<a href="https://docs.aws.amazon.com/organizations/latest/userguide/SCP_strategies.html#orgs_policies_denylist">deny list</a>".</p> <p>This operation can be called only from the organization's management account.</p>

> Body parameter

```json
{
  "PolicyId": {},
  "TargetId": {}
}
```

<h3 id="detachpolicy-parameters">Parameters</h3>

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
|body|body|[DetachPolicyRequest](#schemadetachpolicyrequest)|true|none|
|» PolicyId|body|object|true|none|
|» TargetId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.DetachPolicy|

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

<h3 id="detachpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|AWSOrganizationsNotInUseException|[AWSOrganizationsNotInUseException](#schemaawsorganizationsnotinuseexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|483|483|ConstraintViolationException|[ConstraintViolationException](#schemaconstraintviolationexception)|
|484|484|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|485|485|PolicyNotAttachedException|[PolicyNotAttachedException](#schemapolicynotattachedexception)|
|486|486|PolicyNotFoundException|[PolicyNotFoundException](#schemapolicynotfoundexception)|
|487|487|ServiceException|[ServiceException](#schemaserviceexception)|
|488|488|TargetNotFoundException|[TargetNotFoundException](#schematargetnotfoundexception)|
|489|489|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|490|490|UnsupportedAPIEndpointException|[UnsupportedAPIEndpointException](#schemaunsupportedapiendpointexception)|
|491|491|PolicyChangesInProgressException|[PolicyChangesInProgressException](#schemapolicychangesinprogressexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisableAWSServiceAccess

<a id="opIdDisableAWSServiceAccess"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.DisableAWSServiceAccess' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.DisableAWSServiceAccess' \
  -d '{
    "ServicePrincipal": {}
  }'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.DisableAWSServiceAccess`

<p>Disables the integration of an Amazon Web Services service (the service that is specified by <code>ServicePrincipal</code>) with Organizations. When you disable integration, the specified service no longer can create a <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html">service-linked role</a> in <i>new</i> accounts in your organization. This means the service can't perform operations on your behalf on any new accounts in your organization. The service can still perform operations in older accounts until the service completes its clean-up from Organizations.</p> <important> <p>We <b> <i>strongly recommend</i> </b> that you don't use this command to disable integration between Organizations and the specified Amazon Web Services service. Instead, use the console or commands that are provided by the specified service. This lets the trusted service perform any required initialization when enabling trusted access, such as creating any required resources and any required clean up of resources when disabling trusted access. </p> <p>For information about how to disable trusted service access to your organization using the trusted service, see the <b>Learn more</b> link under the <b>Supports Trusted Access</b> column at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services_list.html">Amazon Web Services services that you can use with Organizations</a>. on this page.</p> <p>If you disable access by using this command, it causes the following actions to occur:</p> <ul> <li> <p>The service can no longer create a service-linked role in the accounts in your organization. This means that the service can't perform operations on your behalf on any new accounts in your organization. The service can still perform operations in older accounts until the service completes its clean-up from Organizations. </p> </li> <li> <p>The service can no longer perform tasks in the member accounts in the organization, unless those operations are explicitly permitted by the IAM policies that are attached to your roles. This includes any data aggregation from the member accounts to the management account, or to a delegated administrator account, where relevant.</p> </li> <li> <p>Some services detect this and clean up any remaining data or resources related to the integration, while other services stop accessing the organization but leave any historical data and configuration in place to support a possible re-enabling of the integration.</p> </li> </ul> <p>Using the other service's console or commands to disable the integration ensures that the other service is aware that it can clean up any resources that are required only for the integration. How the service cleans up its resources in the organization's accounts depends on that service. For more information, see the documentation for the other Amazon Web Services service. </p> </important> <p>After you perform the <code>DisableAWSServiceAccess</code> operation, the specified service can no longer perform operations in your organization's accounts </p> <p>For more information about integrating other services with Organizations, including the list of services that work with Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html">Integrating Organizations with Other Amazon Web Services Services</a> in the <i>Organizations User Guide.</i> </p> <p>This operation can be called only from the organization's management account.</p>

> Body parameter

```json
{
  "ServicePrincipal": {}
}
```

<h3 id="disableawsserviceaccess-parameters">Parameters</h3>

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
|body|body|[DisableAWSServiceAccessRequest](#schemadisableawsserviceaccessrequest)|true|none|
|» ServicePrincipal|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.DisableAWSServiceAccess|

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

<h3 id="disableawsserviceaccess-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|AWSOrganizationsNotInUseException|[AWSOrganizationsNotInUseException](#schemaawsorganizationsnotinuseexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|483|483|ConstraintViolationException|[ConstraintViolationException](#schemaconstraintviolationexception)|
|484|484|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|485|485|ServiceException|[ServiceException](#schemaserviceexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|487|487|UnsupportedAPIEndpointException|[UnsupportedAPIEndpointException](#schemaunsupportedapiendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisablePolicyType

<a id="opIdDisablePolicyType"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.DisablePolicyType' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.DisablePolicyType' \
  -d '{
    "RootId": {},
    "PolicyType": {}
  }'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.DisablePolicyType`

<p>Disables an organizational policy type in a root. A policy of a certain type can be attached to entities in a root only if that type is enabled in the root. After you perform this operation, you no longer can attach policies of the specified type to that root or to any organizational unit (OU) or account in that root. You can undo this by using the <a>EnablePolicyType</a> operation.</p> <p>This is an asynchronous request that Amazon Web Services performs in the background. If you disable a policy type for a root, it still appears enabled for the organization if <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all features</a> are enabled for the organization. Amazon Web Services recommends that you first use <a>ListRoots</a> to see the status of policy types for a specified root, and then use this operation.</p> <p>This operation can be called only from the organization's management account.</p> <p> To view the status of available policy types in the organization, use <a>DescribeOrganization</a>.</p>

> Body parameter

```json
{
  "RootId": {},
  "PolicyType": {}
}
```

<h3 id="disablepolicytype-parameters">Parameters</h3>

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
|body|body|[DisablePolicyTypeRequest](#schemadisablepolicytyperequest)|true|none|
|» RootId|body|object|true|none|
|» PolicyType|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.DisablePolicyType|

> Example responses

> 200 Response

```json
{
  "Root": {
    "Arn": "arn:aws:organizations::111111111111:root/o-exampleorgid/r-examplerootid111",
    "Id": "r-examplerootid111",
    "Name": "Root",
    "PolicyTypes": []
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

<h3 id="disablepolicytype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisablePolicyTypeResponse](#schemadisablepolicytyperesponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|AWSOrganizationsNotInUseException|[AWSOrganizationsNotInUseException](#schemaawsorganizationsnotinuseexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|483|483|ConstraintViolationException|[ConstraintViolationException](#schemaconstraintviolationexception)|
|484|484|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|485|485|PolicyTypeNotEnabledException|[PolicyTypeNotEnabledException](#schemapolicytypenotenabledexception)|
|486|486|RootNotFoundException|[RootNotFoundException](#schemarootnotfoundexception)|
|487|487|ServiceException|[ServiceException](#schemaserviceexception)|
|488|488|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|489|489|UnsupportedAPIEndpointException|[UnsupportedAPIEndpointException](#schemaunsupportedapiendpointexception)|
|490|490|PolicyChangesInProgressException|[PolicyChangesInProgressException](#schemapolicychangesinprogressexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## EnableAWSServiceAccess

<a id="opIdEnableAWSServiceAccess"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.EnableAWSServiceAccess' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.EnableAWSServiceAccess' \
  -d '{
    "ServicePrincipal": {}
  }'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.EnableAWSServiceAccess`

<p>Enables the integration of an Amazon Web Services service (the service that is specified by <code>ServicePrincipal</code>) with Organizations. When you enable integration, you allow the specified service to create a <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html">service-linked role</a> in all the accounts in your organization. This allows the service to perform operations on your behalf in your organization and its accounts.</p> <important> <p>We recommend that you enable integration between Organizations and the specified Amazon Web Services service by using the console or commands that are provided by the specified service. Doing so ensures that the service is aware that it can create the resources that are required for the integration. How the service creates those resources in the organization's accounts depends on that service. For more information, see the documentation for the other Amazon Web Services service.</p> </important> <p>For more information about enabling services to integrate with Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html">Integrating Organizations with Other Amazon Web Services Services</a> in the <i>Organizations User Guide.</i> </p> <p>You can only call this operation from the organization's management account and only if the organization has <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">enabled all features</a>.</p>

> Body parameter

```json
{
  "ServicePrincipal": {}
}
```

<h3 id="enableawsserviceaccess-parameters">Parameters</h3>

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
|body|body|[EnableAWSServiceAccessRequest](#schemaenableawsserviceaccessrequest)|true|none|
|» ServicePrincipal|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.EnableAWSServiceAccess|

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

<h3 id="enableawsserviceaccess-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|AWSOrganizationsNotInUseException|[AWSOrganizationsNotInUseException](#schemaawsorganizationsnotinuseexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|483|483|ConstraintViolationException|[ConstraintViolationException](#schemaconstraintviolationexception)|
|484|484|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|485|485|ServiceException|[ServiceException](#schemaserviceexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|487|487|UnsupportedAPIEndpointException|[UnsupportedAPIEndpointException](#schemaunsupportedapiendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## EnableAllFeatures

<a id="opIdEnableAllFeatures"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.EnableAllFeatures' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.EnableAllFeatures' \
  -d '{}'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.EnableAllFeatures`

<p>Enables all features in an organization. This enables the use of organization policies that can restrict the services and actions that can be called in each account. Until you enable all features, you have access only to consolidated billing, and you can't use any of the advanced account administration features that Organizations supports. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">Enabling All Features in Your Organization</a> in the <i>Organizations User Guide.</i> </p> <important> <p>This operation is required only for organizations that were created explicitly with only the consolidated billing features enabled. Calling this operation sends a handshake to every invited account in the organization. The feature set change can be finalized and the additional features enabled only after all administrators in the invited accounts approve the change by accepting the handshake.</p> </important> <p>After you enable all features, you can separately enable or disable individual policy types in a root using <a>EnablePolicyType</a> and <a>DisablePolicyType</a>. To see the status of policy types in a root, use <a>ListRoots</a>.</p> <p>After all invited member accounts accept the handshake, you finalize the feature set change by accepting the handshake that contains <code>"Action": "ENABLE_ALL_FEATURES"</code>. This completes the change.</p> <p>After you enable all features in your organization, the management account in the organization can apply policies on all member accounts. These policies can restrict what users and even administrators in those accounts can do. The management account can apply policies that prevent accounts from leaving the organization. Ensure that your account administrators are aware of this.</p> <p>This operation can be called only from the organization's management account.</p>

> Body parameter

```json
{}
```

<h3 id="enableallfeatures-parameters">Parameters</h3>

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
|body|body|[EnableAllFeaturesRequest](#schemaenableallfeaturesrequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.EnableAllFeatures|

> Example responses

> 200 Response

```json
{
  "Handshake": {
    "Action": "ENABLE_ALL_FEATURES",
    "Arn": "arn:aws:organizations::111111111111:handshake/o-exampleorgid/enable_all_features/h-examplehandshakeid111",
    "ExpirationTimestamp": "2017-02-28T09:35:40.05Z",
    "Id": "h-examplehandshakeid111",
    "Parties": [
      {
        "Id": "o-exampleorgid",
        "Type": "ORGANIZATION"
      }
    ],
    "RequestedTimestamp": "2017-02-13T09:35:40.05Z",
    "Resources": [
      {
        "Type": "ORGANIZATION",
        "Value": "o-exampleorgid"
      }
    ],
    "State": "REQUESTED"
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

<h3 id="enableallfeatures-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EnableAllFeaturesResponse](#schemaenableallfeaturesresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|AWSOrganizationsNotInUseException|[AWSOrganizationsNotInUseException](#schemaawsorganizationsnotinuseexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|483|483|HandshakeConstraintViolationException|[HandshakeConstraintViolationException](#schemahandshakeconstraintviolationexception)|
|484|484|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|485|485|ServiceException|[ServiceException](#schemaserviceexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## EnablePolicyType

<a id="opIdEnablePolicyType"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.EnablePolicyType' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.EnablePolicyType' \
  -d '{
    "RootId": {},
    "PolicyType": {}
  }'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.EnablePolicyType`

<p>Enables a policy type in a root. After you enable a policy type in a root, you can attach policies of that type to the root, any organizational unit (OU), or account in that root. You can undo this by using the <a>DisablePolicyType</a> operation.</p> <p>This is an asynchronous request that Amazon Web Services performs in the background. Amazon Web Services recommends that you first use <a>ListRoots</a> to see the status of policy types for a specified root, and then use this operation.</p> <p>This operation can be called only from the organization's management account.</p> <p>You can enable a policy type in a root only if that policy type is available in the organization. To view the status of available policy types in the organization, use <a>DescribeOrganization</a>.</p>

> Body parameter

```json
{
  "RootId": {},
  "PolicyType": {}
}
```

<h3 id="enablepolicytype-parameters">Parameters</h3>

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
|body|body|[EnablePolicyTypeRequest](#schemaenablepolicytyperequest)|true|none|
|» RootId|body|object|true|none|
|» PolicyType|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.EnablePolicyType|

> Example responses

> 200 Response

```json
{
  "Root": {
    "Arn": "arn:aws:organizations::111111111111:root/o-exampleorgid/r-examplerootid111",
    "Id": "r-examplerootid111",
    "Name": "Root",
    "PolicyTypes": [
      {
        "Status": "ENABLED",
        "Type": "SERVICE_CONTROL_POLICY"
      }
    ]
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

<h3 id="enablepolicytype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EnablePolicyTypeResponse](#schemaenablepolicytyperesponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|AWSOrganizationsNotInUseException|[AWSOrganizationsNotInUseException](#schemaawsorganizationsnotinuseexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|483|483|ConstraintViolationException|[ConstraintViolationException](#schemaconstraintviolationexception)|
|484|484|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|485|485|PolicyTypeAlreadyEnabledException|[PolicyTypeAlreadyEnabledException](#schemapolicytypealreadyenabledexception)|
|486|486|RootNotFoundException|[RootNotFoundException](#schemarootnotfoundexception)|
|487|487|ServiceException|[ServiceException](#schemaserviceexception)|
|488|488|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|489|489|PolicyTypeNotAvailableForOrganizationException|[PolicyTypeNotAvailableForOrganizationException](#schemapolicytypenotavailablefororganizationexception)|
|490|490|UnsupportedAPIEndpointException|[UnsupportedAPIEndpointException](#schemaunsupportedapiendpointexception)|
|491|491|PolicyChangesInProgressException|[PolicyChangesInProgressException](#schemapolicychangesinprogressexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## InviteAccountToOrganization

<a id="opIdInviteAccountToOrganization"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.InviteAccountToOrganization' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.InviteAccountToOrganization' \
  -d '{
    "Target": {
      "Id": {},
      "Type": {}
    },
    "Notes": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.InviteAccountToOrganization`

<p>Sends an invitation to another account to join your organization as a member account. Organizations sends email on your behalf to the email address that is associated with the other account's owner. The invitation is implemented as a <a>Handshake</a> whose details are in the response.</p> <important> <ul> <li> <p>You can invite Amazon Web Services accounts only from the same seller as the management account. For example, if your organization's management account was created by Amazon Internet Services Pvt. Ltd (AISPL), an Amazon Web Services seller in India, you can invite only other AISPL accounts to your organization. You can't combine accounts from AISPL and Amazon Web Services or from any other Amazon Web Services seller. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/useconsolidatedbilliing-India.html">Consolidated Billing in India</a>.</p> </li> <li> <p>If you receive an exception that indicates that you exceeded your account limits for the organization or that the operation failed because your organization is still initializing, wait one hour and then try again. If the error persists after an hour, contact <a href="https://console.aws.amazon.com/support/home#/">Amazon Web Services Support</a>.</p> </li> </ul> </important> <p>If the request includes tags, then the requester must have the <code>organizations:TagResource</code> permission.</p> <p>This operation can be called only from the organization's management account.</p>

> Body parameter

```json
{
  "Target": {
    "Id": {},
    "Type": {}
  },
  "Notes": {},
  "Tags": {}
}
```

<h3 id="inviteaccounttoorganization-parameters">Parameters</h3>

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
|body|body|[InviteAccountToOrganizationRequest](#schemainviteaccounttoorganizationrequest)|true|none|
|» Target|body|object|true|none|
|» » Id|body|object|true|none|
|» » Type|body|object|true|none|
|» Notes|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.InviteAccountToOrganization|

> Example responses

> 200 Response

```json
{
  "Handshake": {
    "Action": "INVITE",
    "Arn": "arn:aws:organizations::111111111111:handshake/o-exampleorgid/invite/h-examplehandshakeid111",
    "ExpirationTimestamp": "2017-02-16T09:36:05.02Z",
    "Id": "h-examplehandshakeid111",
    "Parties": [
      {
        "Id": "o-exampleorgid",
        "Type": "ORGANIZATION"
      },
      {
        "Id": "juan@example.com",
        "Type": "EMAIL"
      }
    ],
    "RequestedTimestamp": "2017-02-01T09:36:05.02Z",
    "Resources": [
      {
        "Resources": [
          {
            "Type": "MASTER_EMAIL",
            "Value": "bill@amazon.com"
          },
          {
            "Type": "MASTER_NAME",
            "Value": "Org Master Account"
          },
          {
            "Type": "ORGANIZATION_FEATURE_SET",
            "Value": "FULL"
          }
        ],
        "Type": "ORGANIZATION",
        "Value": "o-exampleorgid"
      },
      {
        "Type": "EMAIL",
        "Value": "juan@example.com"
      }
    ],
    "State": "OPEN"
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

<h3 id="inviteaccounttoorganization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[InviteAccountToOrganizationResponse](#schemainviteaccounttoorganizationresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|AWSOrganizationsNotInUseException|[AWSOrganizationsNotInUseException](#schemaawsorganizationsnotinuseexception)|
|482|482|AccountOwnerNotVerifiedException|[AccountOwnerNotVerifiedException](#schemaaccountownernotverifiedexception)|
|483|483|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|484|484|HandshakeConstraintViolationException|[HandshakeConstraintViolationException](#schemahandshakeconstraintviolationexception)|
|485|485|DuplicateHandshakeException|[DuplicateHandshakeException](#schemaduplicatehandshakeexception)|
|486|486|ConstraintViolationException|[ConstraintViolationException](#schemaconstraintviolationexception)|
|487|487|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|488|488|FinalizingOrganizationException|[FinalizingOrganizationException](#schemafinalizingorganizationexception)|
|489|489|ServiceException|[ServiceException](#schemaserviceexception)|
|490|490|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## LeaveOrganization

<a id="opIdLeaveOrganization"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.LeaveOrganization' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.LeaveOrganization'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.LeaveOrganization`

<p>Removes a member account from its parent organization. This version of the operation is performed by the account that wants to leave. To remove a member account as a user in the management account, use <a>RemoveAccountFromOrganization</a> instead.</p> <p>This operation can be called only from a member account in the organization.</p> <important> <ul> <li> <p>The management account in an organization with all features enabled can set service control policies (SCPs) that can restrict what administrators of member accounts can do. This includes preventing them from successfully calling <code>LeaveOrganization</code> and leaving the organization.</p> </li> <li> <p>You can leave an organization as a member account only if the account is configured with the information required to operate as a standalone account. When you create an account in an organization using the Organizations console, API, or CLI commands, the information required of standalone accounts is <i>not</i> automatically collected. For each account that you want to make standalone, you must perform the following steps. If any of the steps are already completed for this account, that step doesn't appear.</p> <ul> <li> <p>Choose a support plan</p> </li> <li> <p>Provide and verify the required contact information</p> </li> <li> <p>Provide a current payment method</p> </li> </ul> <p>Amazon Web Services uses the payment method to charge for any billable (not free tier) Amazon Web Services activity that occurs while the account isn't attached to an organization. Follow the steps at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info"> To leave an organization when all required account information has not yet been provided</a> in the <i>Organizations User Guide.</i> </p> </li> <li> <p>The account that you want to leave must not be a delegated administrator account for any Amazon Web Services service enabled for your organization. If the account is a delegated administrator, you must first change the delegated administrator account to another account that is remaining in the organization.</p> </li> <li> <p>You can leave an organization only after you enable IAM user access to billing in your account. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/grantaccess.html#ControllingAccessWebsite-Activate">Activating Access to the Billing and Cost Management Console</a> in the <i>Amazon Web Services Billing and Cost Management User Guide.</i> </p> </li> <li> <p>After the account leaves the organization, all tags that were attached to the account object in the organization are deleted. Amazon Web Services accounts outside of an organization do not support tags.</p> </li> <li> <p>A newly created account has a waiting period before it can be removed from its organization. If you get an error that indicates that a wait period is required, then try again in a few days.</p> </li> </ul> </important>

<h3 id="leaveorganization-parameters">Parameters</h3>

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

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.LeaveOrganization|

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

> 488 Response

```json
null
```

<h3 id="leaveorganization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|AccountNotFoundException|[AccountNotFoundException](#schemaaccountnotfoundexception)|
|482|482|AWSOrganizationsNotInUseException|[AWSOrganizationsNotInUseException](#schemaawsorganizationsnotinuseexception)|
|483|483|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|484|484|ConstraintViolationException|[ConstraintViolationException](#schemaconstraintviolationexception)|
|485|485|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|486|486|MasterCannotLeaveOrganizationException|[MasterCannotLeaveOrganizationException](#schemamastercannotleaveorganizationexception)|
|487|487|ServiceException|[ServiceException](#schemaserviceexception)|
|488|488|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAWSServiceAccessForOrganization

<a id="opIdListAWSServiceAccessForOrganization"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.ListAWSServiceAccessForOrganization' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.ListAWSServiceAccessForOrganization' \
  -d '{
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.ListAWSServiceAccessForOrganization`

<p>Returns a list of the Amazon Web Services services that you enabled to integrate with your organization. After a service on this list creates the resources that it requires for the integration, it can perform operations on your organization and its accounts.</p> <p>For more information about integrating other services with Organizations, including the list of services that currently work with Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html">Integrating Organizations with Other Amazon Web Services Services</a> in the <i>Organizations User Guide.</i> </p> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listawsserviceaccessfororganization-parameters">Parameters</h3>

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
|body|body|[ListAWSServiceAccessForOrganizationRequest](#schemalistawsserviceaccessfororganizationrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.ListAWSServiceAccessForOrganization|

> Example responses

> 200 Response

```json
{
  "EnabledServicePrincipals": {},
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

<h3 id="listawsserviceaccessfororganization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAWSServiceAccessForOrganizationResponse](#schemalistawsserviceaccessfororganizationresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|AWSOrganizationsNotInUseException|[AWSOrganizationsNotInUseException](#schemaawsorganizationsnotinuseexception)|
|482|482|ConstraintViolationException|[ConstraintViolationException](#schemaconstraintviolationexception)|
|483|483|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|484|484|ServiceException|[ServiceException](#schemaserviceexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|486|486|UnsupportedAPIEndpointException|[UnsupportedAPIEndpointException](#schemaunsupportedapiendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAccounts

<a id="opIdListAccounts"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.ListAccounts' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.ListAccounts' \
  -d '{
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.ListAccounts`

<p>Lists all the accounts in the organization. To request only the accounts in a specified root or organizational unit (OU), use the <a>ListAccountsForParent</a> operation instead.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listaccounts-parameters">Parameters</h3>

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
|body|body|[ListAccountsRequest](#schemalistaccountsrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.ListAccounts|

> Example responses

> 200 Response

```json
{
  "Accounts": [
    {
      "Arn": "arn:aws:organizations::111111111111:account/o-exampleorgid/111111111111",
      "Email": "bill@example.com",
      "Id": "111111111111",
      "JoinedMethod": "INVITED",
      "JoinedTimestamp": "20161215T193015Z",
      "Name": "Master Account",
      "Status": "ACTIVE"
    },
    {
      "Arn": "arn:aws:organizations::111111111111:account/o-exampleorgid/222222222222",
      "Email": "alice@example.com",
      "Id": "222222222222",
      "JoinedMethod": "INVITED",
      "JoinedTimestamp": "20161215T210221Z",
      "Name": "Developer Account",
      "Status": "ACTIVE"
    },
    {
      "Arn": "arn:aws:organizations::111111111111:account/o-exampleorgid/333333333333",
      "Email": "juan@example.com",
      "Id": "333333333333",
      "JoinedMethod": "INVITED",
      "JoinedTimestamp": "20161215T210347Z",
      "Name": "Test Account",
      "Status": "ACTIVE"
    },
    {
      "Arn": "arn:aws:organizations::111111111111:account/o-exampleorgid/444444444444",
      "Email": "anika@example.com",
      "Id": "444444444444",
      "JoinedMethod": "INVITED",
      "JoinedTimestamp": "20161215T210332Z",
      "Name": "Production Account",
      "Status": "ACTIVE"
    }
  ]
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="listaccounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAccountsResponse](#schemalistaccountsresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|AWSOrganizationsNotInUseException|[AWSOrganizationsNotInUseException](#schemaawsorganizationsnotinuseexception)|
|482|482|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|483|483|ServiceException|[ServiceException](#schemaserviceexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAccountsForParent

<a id="opIdListAccountsForParent"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.ListAccountsForParent' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.ListAccountsForParent' \
  -d '{
    "ParentId": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.ListAccountsForParent`

<p>Lists the accounts in an organization that are contained by the specified target root or organizational unit (OU). If you specify the root, you get a list of all the accounts that aren't in any OU. If you specify an OU, you get a list of all the accounts in only that OU and not in any child OUs. To get a list of all accounts in the organization, use the <a>ListAccounts</a> operation.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>

> Body parameter

```json
{
  "ParentId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listaccountsforparent-parameters">Parameters</h3>

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
|body|body|[ListAccountsForParentRequest](#schemalistaccountsforparentrequest)|true|none|
|» ParentId|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.ListAccountsForParent|

> Example responses

> 200 Response

```json
{
  "Accounts": [
    {
      "Arn": "arn:aws:organizations::111111111111:account/o-exampleorgid/333333333333",
      "Email": "juan@example.com",
      "Id": "333333333333",
      "JoinedMethod": "INVITED",
      "JoinedTimestamp": 1481835795.536,
      "Name": "Development Account",
      "Status": "ACTIVE"
    },
    {
      "Arn": "arn:aws:organizations::111111111111:account/o-exampleorgid/444444444444",
      "Email": "anika@example.com",
      "Id": "444444444444",
      "JoinedMethod": "INVITED",
      "JoinedTimestamp": 1481835812.143,
      "Name": "Test Account",
      "Status": "ACTIVE"
    }
  ]
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="listaccountsforparent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAccountsForParentResponse](#schemalistaccountsforparentresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|AWSOrganizationsNotInUseException|[AWSOrganizationsNotInUseException](#schemaawsorganizationsnotinuseexception)|
|482|482|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|483|483|ParentNotFoundException|[ParentNotFoundException](#schemaparentnotfoundexception)|
|484|484|ServiceException|[ServiceException](#schemaserviceexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListChildren

<a id="opIdListChildren"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.ListChildren' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.ListChildren' \
  -d '{
    "ParentId": {},
    "ChildType": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.ListChildren`

<p>Lists all of the organizational units (OUs) or accounts that are contained in the specified parent OU or root. This operation, along with <a>ListParents</a> enables you to traverse the tree structure that makes up this root.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>

> Body parameter

```json
{
  "ParentId": {},
  "ChildType": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listchildren-parameters">Parameters</h3>

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
|body|body|[ListChildrenRequest](#schemalistchildrenrequest)|true|none|
|» ParentId|body|object|true|none|
|» ChildType|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.ListChildren|

> Example responses

> 200 Response

```json
{
  "Children": [
    {
      "Id": "ou-examplerootid111-exampleouid111",
      "Type": "ORGANIZATIONAL_UNIT"
    },
    {
      "Id": "ou-examplerootid111-exampleouid222",
      "Type": "ORGANIZATIONAL_UNIT"
    }
  ]
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="listchildren-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListChildrenResponse](#schemalistchildrenresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|AWSOrganizationsNotInUseException|[AWSOrganizationsNotInUseException](#schemaawsorganizationsnotinuseexception)|
|482|482|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|483|483|ParentNotFoundException|[ParentNotFoundException](#schemaparentnotfoundexception)|
|484|484|ServiceException|[ServiceException](#schemaserviceexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListCreateAccountStatus

<a id="opIdListCreateAccountStatus"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.ListCreateAccountStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.ListCreateAccountStatus' \
  -d '{
    "States": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.ListCreateAccountStatus`

<p>Lists the account creation requests that match the specified status that is currently being tracked for the organization.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>

> Body parameter

```json
{
  "States": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listcreateaccountstatus-parameters">Parameters</h3>

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
|body|body|[ListCreateAccountStatusRequest](#schemalistcreateaccountstatusrequest)|true|none|
|» States|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.ListCreateAccountStatus|

> Example responses

> 200 Response

```json
{
  "CreateAccountStatuses": [
    {
      "AccountName": "Production Account",
      "Id": "car-exampleaccountcreationrequestid2",
      "RequestedTimestamp": "2017-01-15T13:45:23.01Z",
      "State": "IN_PROGRESS"
    }
  ]
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="listcreateaccountstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListCreateAccountStatusResponse](#schemalistcreateaccountstatusresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|AWSOrganizationsNotInUseException|[AWSOrganizationsNotInUseException](#schemaawsorganizationsnotinuseexception)|
|482|482|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|483|483|ServiceException|[ServiceException](#schemaserviceexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|UnsupportedAPIEndpointException|[UnsupportedAPIEndpointException](#schemaunsupportedapiendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDelegatedAdministrators

<a id="opIdListDelegatedAdministrators"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.ListDelegatedAdministrators' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.ListDelegatedAdministrators' \
  -d '{
    "ServicePrincipal": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.ListDelegatedAdministrators`

<p>Lists the Amazon Web Services accounts that are designated as delegated administrators in this organization.</p> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>

> Body parameter

```json
{
  "ServicePrincipal": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listdelegatedadministrators-parameters">Parameters</h3>

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
|body|body|[ListDelegatedAdministratorsRequest](#schemalistdelegatedadministratorsrequest)|true|none|
|» ServicePrincipal|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.ListDelegatedAdministrators|

> Example responses

> 200 Response

```json
{
  "DelegatedAdministrators": {},
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

<h3 id="listdelegatedadministrators-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDelegatedAdministratorsResponse](#schemalistdelegatedadministratorsresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|AWSOrganizationsNotInUseException|[AWSOrganizationsNotInUseException](#schemaawsorganizationsnotinuseexception)|
|482|482|ConstraintViolationException|[ConstraintViolationException](#schemaconstraintviolationexception)|
|483|483|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|ServiceException|[ServiceException](#schemaserviceexception)|
|486|486|UnsupportedAPIEndpointException|[UnsupportedAPIEndpointException](#schemaunsupportedapiendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDelegatedServicesForAccount

<a id="opIdListDelegatedServicesForAccount"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.ListDelegatedServicesForAccount' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.ListDelegatedServicesForAccount' \
  -d '{
    "AccountId": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.ListDelegatedServicesForAccount`

<p>List the Amazon Web Services services for which the specified account is a delegated administrator.</p> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>

> Body parameter

```json
{
  "AccountId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listdelegatedservicesforaccount-parameters">Parameters</h3>

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
|body|body|[ListDelegatedServicesForAccountRequest](#schemalistdelegatedservicesforaccountrequest)|true|none|
|» AccountId|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.ListDelegatedServicesForAccount|

> Example responses

> 200 Response

```json
{
  "DelegatedServices": {},
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

> 487 Response

```json
null
```

> 488 Response

```json
null
```

<h3 id="listdelegatedservicesforaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDelegatedServicesForAccountResponse](#schemalistdelegatedservicesforaccountresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|AccountNotFoundException|[AccountNotFoundException](#schemaaccountnotfoundexception)|
|482|482|AccountNotRegisteredException|[AccountNotRegisteredException](#schemaaccountnotregisteredexception)|
|483|483|AWSOrganizationsNotInUseException|[AWSOrganizationsNotInUseException](#schemaawsorganizationsnotinuseexception)|
|484|484|ConstraintViolationException|[ConstraintViolationException](#schemaconstraintviolationexception)|
|485|485|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|487|487|ServiceException|[ServiceException](#schemaserviceexception)|
|488|488|UnsupportedAPIEndpointException|[UnsupportedAPIEndpointException](#schemaunsupportedapiendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListHandshakesForAccount

<a id="opIdListHandshakesForAccount"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.ListHandshakesForAccount' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.ListHandshakesForAccount' \
  -d '{
    "Filter": {
      "ActionType": {},
      "ParentHandshakeId": {}
    },
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.ListHandshakesForAccount`

<p>Lists the current handshakes that are associated with the account of the requesting user.</p> <p>Handshakes that are <code>ACCEPTED</code>, <code>DECLINED</code>, <code>CANCELED</code>, or <code>EXPIRED</code> appear in the results of this API for only 30 days after changing to that state. After that, they're deleted and no longer accessible.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called from any account in the organization.</p>

> Body parameter

```json
{
  "Filter": {
    "ActionType": {},
    "ParentHandshakeId": {}
  },
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listhandshakesforaccount-parameters">Parameters</h3>

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
|body|body|[ListHandshakesForAccountRequest](#schemalisthandshakesforaccountrequest)|true|none|
|» Filter|body|object|false|none|
|» » ActionType|body|object|false|none|
|» » ParentHandshakeId|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.ListHandshakesForAccount|

> Example responses

> 200 Response

```json
{
  "Handshakes": [
    {
      "Action": "INVITE",
      "Arn": "arn:aws:organizations::111111111111:handshake/o-exampleorgid/invite/h-examplehandshakeid111",
      "ExpirationTimestamp": "2017-01-28T14:35:23.3Z",
      "Id": "h-examplehandshakeid111",
      "Parties": [
        {
          "Id": "o-exampleorgid",
          "Type": "ORGANIZATION"
        },
        {
          "Id": "juan@example.com",
          "Type": "EMAIL"
        }
      ],
      "RequestedTimestamp": "2017-01-13T14:35:23.3Z",
      "Resources": [
        {
          "Resources": [
            {
              "Type": "MASTER_EMAIL",
              "Value": "bill@amazon.com"
            },
            {
              "Type": "MASTER_NAME",
              "Value": "Org Master Account"
            },
            {
              "Type": "ORGANIZATION_FEATURE_SET",
              "Value": "FULL"
            }
          ],
          "Type": "ORGANIZATION",
          "Value": "o-exampleorgid"
        },
        {
          "Type": "EMAIL",
          "Value": "juan@example.com"
        }
      ],
      "State": "OPEN"
    }
  ]
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="listhandshakesforaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListHandshakesForAccountResponse](#schemalisthandshakesforaccountresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|482|482|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|483|483|ServiceException|[ServiceException](#schemaserviceexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListHandshakesForOrganization

<a id="opIdListHandshakesForOrganization"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.ListHandshakesForOrganization' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.ListHandshakesForOrganization' \
  -d '{
    "Filter": {
      "ActionType": {},
      "ParentHandshakeId": {}
    },
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.ListHandshakesForOrganization`

<p>Lists the handshakes that are associated with the organization that the requesting user is part of. The <code>ListHandshakesForOrganization</code> operation returns a list of handshake structures. Each structure contains details and status about a handshake.</p> <p>Handshakes that are <code>ACCEPTED</code>, <code>DECLINED</code>, <code>CANCELED</code>, or <code>EXPIRED</code> appear in the results of this API for only 30 days after changing to that state. After that, they're deleted and no longer accessible.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>

> Body parameter

```json
{
  "Filter": {
    "ActionType": {},
    "ParentHandshakeId": {}
  },
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listhandshakesfororganization-parameters">Parameters</h3>

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
|body|body|[ListHandshakesForOrganizationRequest](#schemalisthandshakesfororganizationrequest)|true|none|
|» Filter|body|object|false|none|
|» » ActionType|body|object|false|none|
|» » ParentHandshakeId|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.ListHandshakesForOrganization|

> Example responses

> 200 Response

```json
{
  "Handshakes": [
    {
      "Action": "INVITE",
      "Arn": "arn:aws:organizations::111111111111:handshake/o-exampleorgid/invite/h-examplehandshakeid111",
      "ExpirationTimestamp": "2017-01-28T14:35:23.3Z",
      "Id": "h-examplehandshakeid111",
      "Parties": [
        {
          "Id": "o-exampleorgid",
          "Type": "ORGANIZATION"
        },
        {
          "Id": "juan@example.com",
          "Type": "EMAIL"
        }
      ],
      "RequestedTimestamp": "2017-01-13T14:35:23.3Z",
      "Resources": [
        {
          "Resources": [
            {
              "Type": "MASTER_EMAIL",
              "Value": "bill@amazon.com"
            },
            {
              "Type": "MASTER_NAME",
              "Value": "Org Master Account"
            },
            {
              "Type": "ORGANIZATION_FEATURE_SET",
              "Value": "FULL"
            }
          ],
          "Type": "ORGANIZATION",
          "Value": "o-exampleorgid"
        },
        {
          "Type": "EMAIL",
          "Value": "juan@example.com"
        }
      ],
      "State": "OPEN"
    },
    {
      "Action": "INVITE",
      "Arn": "arn:aws:organizations::111111111111:handshake/o-exampleorgid/invite/h-examplehandshakeid111",
      "ExpirationTimestamp": "2017-01-28T14:35:23.3Z",
      "Id": "h-examplehandshakeid222",
      "Parties": [
        {
          "Id": "o-exampleorgid",
          "Type": "ORGANIZATION"
        },
        {
          "Id": "anika@example.com",
          "Type": "EMAIL"
        }
      ],
      "RequestedTimestamp": "2017-01-13T14:35:23.3Z",
      "Resources": [
        {
          "Resources": [
            {
              "Type": "MASTER_EMAIL",
              "Value": "bill@example.com"
            },
            {
              "Type": "MASTER_NAME",
              "Value": "Master Account"
            }
          ],
          "Type": "ORGANIZATION",
          "Value": "o-exampleorgid"
        },
        {
          "Type": "EMAIL",
          "Value": "anika@example.com"
        },
        {
          "Type": "NOTES",
          "Value": "This is an invitation to Anika's account to join Bill's organization."
        }
      ],
      "State": "ACCEPTED"
    }
  ]
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="listhandshakesfororganization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListHandshakesForOrganizationResponse](#schemalisthandshakesfororganizationresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|AWSOrganizationsNotInUseException|[AWSOrganizationsNotInUseException](#schemaawsorganizationsnotinuseexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|483|483|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|484|484|ServiceException|[ServiceException](#schemaserviceexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListOrganizationalUnitsForParent

<a id="opIdListOrganizationalUnitsForParent"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.ListOrganizationalUnitsForParent' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.ListOrganizationalUnitsForParent' \
  -d '{
    "ParentId": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.ListOrganizationalUnitsForParent`

<p>Lists the organizational units (OUs) in a parent organizational unit or root.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>

> Body parameter

```json
{
  "ParentId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listorganizationalunitsforparent-parameters">Parameters</h3>

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
|body|body|[ListOrganizationalUnitsForParentRequest](#schemalistorganizationalunitsforparentrequest)|true|none|
|» ParentId|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.ListOrganizationalUnitsForParent|

> Example responses

> 200 Response

```json
{
  "OrganizationalUnits": [
    {
      "Arn": "arn:aws:organizations::111111111111:ou/o-exampleorgid/ou-examlerootid111-exampleouid111",
      "Id": "ou-examplerootid111-exampleouid111",
      "Name": "Development"
    },
    {
      "Arn": "arn:aws:organizations::111111111111:ou/o-exampleorgid/ou-examlerootid111-exampleouid222",
      "Id": "ou-examplerootid111-exampleouid222",
      "Name": "Production"
    }
  ]
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="listorganizationalunitsforparent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListOrganizationalUnitsForParentResponse](#schemalistorganizationalunitsforparentresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|AWSOrganizationsNotInUseException|[AWSOrganizationsNotInUseException](#schemaawsorganizationsnotinuseexception)|
|482|482|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|483|483|ParentNotFoundException|[ParentNotFoundException](#schemaparentnotfoundexception)|
|484|484|ServiceException|[ServiceException](#schemaserviceexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListParents

<a id="opIdListParents"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.ListParents' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.ListParents' \
  -d '{
    "ChildId": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.ListParents`

<p>Lists the root or organizational units (OUs) that serve as the immediate parent of the specified child OU or account. This operation, along with <a>ListChildren</a> enables you to traverse the tree structure that makes up this root.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p> <note> <p>In the current release, a child can have only a single parent.</p> </note>

> Body parameter

```json
{
  "ChildId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listparents-parameters">Parameters</h3>

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
|body|body|[ListParentsRequest](#schemalistparentsrequest)|true|none|
|» ChildId|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.ListParents|

> Example responses

> 200 Response

```json
{
  "Parents": [
    {
      "Id": "ou-examplerootid111-exampleouid111",
      "Type": "ORGANIZATIONAL_UNIT"
    }
  ]
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="listparents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListParentsResponse](#schemalistparentsresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|AWSOrganizationsNotInUseException|[AWSOrganizationsNotInUseException](#schemaawsorganizationsnotinuseexception)|
|482|482|ChildNotFoundException|[ChildNotFoundException](#schemachildnotfoundexception)|
|483|483|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|484|484|ServiceException|[ServiceException](#schemaserviceexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPolicies

<a id="opIdListPolicies"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.ListPolicies' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.ListPolicies' \
  -d '{
    "Filter": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.ListPolicies`

<p>Retrieves the list of all policies in an organization of a specified type.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>

> Body parameter

```json
{
  "Filter": {},
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
|» Filter|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.ListPolicies|

> Example responses

> 200 Response

```json
{
  "Policies": [
    {
      "Arn": "arn:aws:organizations::111111111111:policy/o-exampleorgid/service_control_policy/p-examplepolicyid111",
      "AwsManaged": false,
      "Description": "Enables account admins to delegate permissions for any S3 actions to users and roles in their accounts.",
      "Id": "p-examplepolicyid111",
      "Name": "AllowAllS3Actions",
      "Type": "SERVICE_CONTROL_POLICY"
    },
    {
      "Arn": "arn:aws:organizations::111111111111:policy/o-exampleorgid/service_control_policy/p-examplepolicyid222",
      "AwsManaged": false,
      "Description": "Enables account admins to delegate permissions for any EC2 actions to users and roles in their accounts.",
      "Id": "p-examplepolicyid222",
      "Name": "AllowAllEC2Actions",
      "Type": "SERVICE_CONTROL_POLICY"
    },
    {
      "Arn": "arn:aws:organizations::aws:policy/service_control_policy/p-FullAWSAccess",
      "AwsManaged": true,
      "Description": "Allows access to every operation",
      "Id": "p-FullAWSAccess",
      "Name": "FullAWSAccess",
      "Type": "SERVICE_CONTROL_POLICY"
    }
  ]
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="listpolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPoliciesResponse](#schemalistpoliciesresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|AWSOrganizationsNotInUseException|[AWSOrganizationsNotInUseException](#schemaawsorganizationsnotinuseexception)|
|482|482|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|483|483|ServiceException|[ServiceException](#schemaserviceexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|UnsupportedAPIEndpointException|[UnsupportedAPIEndpointException](#schemaunsupportedapiendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPoliciesForTarget

<a id="opIdListPoliciesForTarget"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.ListPoliciesForTarget' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.ListPoliciesForTarget' \
  -d '{
    "TargetId": {},
    "Filter": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.ListPoliciesForTarget`

<p>Lists the policies that are directly attached to the specified target root, organizational unit (OU), or account. You must specify the policy type that you want included in the returned list.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>

> Body parameter

```json
{
  "TargetId": {},
  "Filter": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listpoliciesfortarget-parameters">Parameters</h3>

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
|body|body|[ListPoliciesForTargetRequest](#schemalistpoliciesfortargetrequest)|true|none|
|» TargetId|body|object|true|none|
|» Filter|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.ListPoliciesForTarget|

> Example responses

> 200 Response

```json
{
  "Policies": [
    {
      "Arn": "arn:aws:organizations::111111111111:policy/o-exampleorgid/service_control_policy/p-examplepolicyid222",
      "AwsManaged": false,
      "Description": "Enables account admins to delegate permissions for any EC2 actions to users and roles in their accounts.",
      "Id": "p-examplepolicyid222",
      "Name": "AllowAllEC2Actions",
      "Type": "SERVICE_CONTROL_POLICY"
    }
  ]
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
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

<h3 id="listpoliciesfortarget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPoliciesForTargetResponse](#schemalistpoliciesfortargetresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|AWSOrganizationsNotInUseException|[AWSOrganizationsNotInUseException](#schemaawsorganizationsnotinuseexception)|
|482|482|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|483|483|ServiceException|[ServiceException](#schemaserviceexception)|
|484|484|TargetNotFoundException|[TargetNotFoundException](#schematargetnotfoundexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|486|486|UnsupportedAPIEndpointException|[UnsupportedAPIEndpointException](#schemaunsupportedapiendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRoots

<a id="opIdListRoots"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.ListRoots' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.ListRoots' \
  -d '{
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.ListRoots`

<p>Lists the roots that are defined in the current organization.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p> <note> <p>Policy types can be enabled and disabled in roots. This is distinct from whether they're available in the organization. When you enable all features, you make policy types available for use in that organization. Individual policy types can then be enabled and disabled in a root. To see the availability of a policy type in an organization, use <a>DescribeOrganization</a>.</p> </note>

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listroots-parameters">Parameters</h3>

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
|body|body|[ListRootsRequest](#schemalistrootsrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.ListRoots|

> Example responses

> 200 Response

```json
{
  "Roots": [
    {
      "Arn": "arn:aws:organizations::111111111111:root/o-exampleorgid/r-examplerootid111",
      "Id": "r-examplerootid111",
      "Name": "Root",
      "PolicyTypes": [
        {
          "Status": "ENABLED",
          "Type": "SERVICE_CONTROL_POLICY"
        }
      ]
    }
  ]
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="listroots-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRootsResponse](#schemalistrootsresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|AWSOrganizationsNotInUseException|[AWSOrganizationsNotInUseException](#schemaawsorganizationsnotinuseexception)|
|482|482|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|483|483|ServiceException|[ServiceException](#schemaserviceexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.ListTagsForResource' \
  -d '{
    "ResourceId": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.ListTagsForResource`

<p>Lists tags that are attached to the specified resource.</p> <p>You can attach tags to the following resources in Organizations.</p> <ul> <li> <p>Amazon Web Services account</p> </li> <li> <p>Organization root</p> </li> <li> <p>Organizational unit (OU)</p> </li> <li> <p>Policy (any type)</p> </li> </ul> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>

> Body parameter

```json
{
  "ResourceId": {},
  "NextToken": {}
}
```

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
|» ResourceId|body|object|true|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.ListTagsForResource|

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
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|AWSOrganizationsNotInUseException|[AWSOrganizationsNotInUseException](#schemaawsorganizationsnotinuseexception)|
|482|482|TargetNotFoundException|[TargetNotFoundException](#schematargetnotfoundexception)|
|483|483|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|484|484|ServiceException|[ServiceException](#schemaserviceexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTargetsForPolicy

<a id="opIdListTargetsForPolicy"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.ListTargetsForPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.ListTargetsForPolicy' \
  -d '{
    "PolicyId": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.ListTargetsForPolicy`

<p>Lists all the roots, organizational units (OUs), and accounts that the specified policy is attached to.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>

> Body parameter

```json
{
  "PolicyId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listtargetsforpolicy-parameters">Parameters</h3>

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
|body|body|[ListTargetsForPolicyRequest](#schemalisttargetsforpolicyrequest)|true|none|
|» PolicyId|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.ListTargetsForPolicy|

> Example responses

> 200 Response

```json
{
  "Targets": [
    {
      "Arn": "arn:aws:organizations::111111111111:root/o-exampleorgid/r-examplerootid111",
      "Name": "Root",
      "TargetId": "r-examplerootid111",
      "Type": "ROOT"
    },
    {
      "Arn": "arn:aws:organizations::111111111111:account/o-exampleorgid/333333333333;",
      "Name": "Developer Test Account",
      "TargetId": "333333333333",
      "Type": "ACCOUNT"
    },
    {
      "Arn": "arn:aws:organizations::111111111111:ou/o-exampleorgid/ou-examplerootid111-exampleouid111",
      "Name": "Accounting",
      "TargetId": "ou-examplerootid111-exampleouid111",
      "Type": "ORGANIZATIONAL_UNIT"
    }
  ]
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
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

<h3 id="listtargetsforpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTargetsForPolicyResponse](#schemalisttargetsforpolicyresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|AWSOrganizationsNotInUseException|[AWSOrganizationsNotInUseException](#schemaawsorganizationsnotinuseexception)|
|482|482|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|483|483|PolicyNotFoundException|[PolicyNotFoundException](#schemapolicynotfoundexception)|
|484|484|ServiceException|[ServiceException](#schemaserviceexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|486|486|UnsupportedAPIEndpointException|[UnsupportedAPIEndpointException](#schemaunsupportedapiendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## MoveAccount

<a id="opIdMoveAccount"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.MoveAccount' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.MoveAccount' \
  -d '{
    "AccountId": {},
    "SourceParentId": {},
    "DestinationParentId": {}
  }'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.MoveAccount`

<p>Moves an account from its current source parent root or organizational unit (OU) to the specified destination parent root or OU.</p> <p>This operation can be called only from the organization's management account.</p>

> Body parameter

```json
{
  "AccountId": {},
  "SourceParentId": {},
  "DestinationParentId": {}
}
```

<h3 id="moveaccount-parameters">Parameters</h3>

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
|body|body|[MoveAccountRequest](#schemamoveaccountrequest)|true|none|
|» AccountId|body|object|true|none|
|» SourceParentId|body|object|true|none|
|» DestinationParentId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.MoveAccount|

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

> 488 Response

```json
null
```

> 489 Response

```json
null
```

<h3 id="moveaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|SourceParentNotFoundException|[SourceParentNotFoundException](#schemasourceparentnotfoundexception)|
|483|483|DestinationParentNotFoundException|[DestinationParentNotFoundException](#schemadestinationparentnotfoundexception)|
|484|484|DuplicateAccountException|[DuplicateAccountException](#schemaduplicateaccountexception)|
|485|485|AccountNotFoundException|[AccountNotFoundException](#schemaaccountnotfoundexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|487|487|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|488|488|AWSOrganizationsNotInUseException|[AWSOrganizationsNotInUseException](#schemaawsorganizationsnotinuseexception)|
|489|489|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutResourcePolicy

<a id="opIdPutResourcePolicy"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.PutResourcePolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.PutResourcePolicy' \
  -d '{
    "Content": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.PutResourcePolicy`

<p>Creates or updates a resource policy.</p> <p>You can only call this operation from the organization's management account.</p>

> Body parameter

```json
{
  "Content": {},
  "Tags": {}
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
|» Content|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.PutResourcePolicy|

> Example responses

> 200 Response

```json
{
  "ResourcePolicy": {
    "ResourcePolicySummary": {
      "Id": {},
      "Arn": {}
    },
    "Content": {}
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

<h3 id="putresourcepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutResourcePolicyResponse](#schemaputresourcepolicyresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ServiceException|[ServiceException](#schemaserviceexception)|
|482|482|UnsupportedAPIEndpointException|[UnsupportedAPIEndpointException](#schemaunsupportedapiendpointexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|485|485|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|486|486|ConstraintViolationException|[ConstraintViolationException](#schemaconstraintviolationexception)|
|487|487|AWSOrganizationsNotInUseException|[AWSOrganizationsNotInUseException](#schemaawsorganizationsnotinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RegisterDelegatedAdministrator

<a id="opIdRegisterDelegatedAdministrator"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.RegisterDelegatedAdministrator' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.RegisterDelegatedAdministrator' \
  -d '{
    "AccountId": {},
    "ServicePrincipal": {}
  }'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.RegisterDelegatedAdministrator`

<p>Enables the specified member account to administer the Organizations features of the specified Amazon Web Services service. It grants read-only access to Organizations service data. The account still requires IAM permissions to access and administer the Amazon Web Services service.</p> <p>You can run this action only for Amazon Web Services services that support this feature. For a current list of services that support it, see the column <i>Supports Delegated Administrator</i> in the table at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services_list.html">Amazon Web Services Services that you can use with Organizations</a> in the <i>Organizations User Guide.</i> </p> <p>This operation can be called only from the organization's management account.</p>

> Body parameter

```json
{
  "AccountId": {},
  "ServicePrincipal": {}
}
```

<h3 id="registerdelegatedadministrator-parameters">Parameters</h3>

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
|body|body|[RegisterDelegatedAdministratorRequest](#schemaregisterdelegatedadministratorrequest)|true|none|
|» AccountId|body|object|true|none|
|» ServicePrincipal|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.RegisterDelegatedAdministrator|

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

> 488 Response

```json
null
```

> 489 Response

```json
null
```

<h3 id="registerdelegatedadministrator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|AccountAlreadyRegisteredException|[AccountAlreadyRegisteredException](#schemaaccountalreadyregisteredexception)|
|482|482|AccountNotFoundException|[AccountNotFoundException](#schemaaccountnotfoundexception)|
|483|483|AWSOrganizationsNotInUseException|[AWSOrganizationsNotInUseException](#schemaawsorganizationsnotinuseexception)|
|484|484|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|485|485|ConstraintViolationException|[ConstraintViolationException](#schemaconstraintviolationexception)|
|486|486|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|487|487|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|488|488|ServiceException|[ServiceException](#schemaserviceexception)|
|489|489|UnsupportedAPIEndpointException|[UnsupportedAPIEndpointException](#schemaunsupportedapiendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RemoveAccountFromOrganization

<a id="opIdRemoveAccountFromOrganization"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.RemoveAccountFromOrganization' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.RemoveAccountFromOrganization' \
  -d '{
    "AccountId": {}
  }'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.RemoveAccountFromOrganization`

<p>Removes the specified account from the organization.</p> <p>The removed account becomes a standalone account that isn't a member of any organization. It's no longer subject to any policies and is responsible for its own bill payments. The organization's management account is no longer charged for any expenses accrued by the member account after it's removed from the organization.</p> <p>This operation can be called only from the organization's management account. Member accounts can remove themselves with <a>LeaveOrganization</a> instead.</p> <important> <ul> <li> <p>You can remove an account from your organization only if the account is configured with the information required to operate as a standalone account. When you create an account in an organization using the Organizations console, API, or CLI commands, the information required of standalone accounts is <i>not</i> automatically collected. For an account that you want to make standalone, you must choose a support plan, provide and verify the required contact information, and provide a current payment method. Amazon Web Services uses the payment method to charge for any billable (not free tier) Amazon Web Services activity that occurs while the account isn't attached to an organization. To remove an account that doesn't yet have this information, you must sign in as the member account and follow the steps at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info"> To leave an organization when all required account information has not yet been provided</a> in the <i>Organizations User Guide.</i> </p> </li> <li> <p>The account that you want to leave must not be a delegated administrator account for any Amazon Web Services service enabled for your organization. If the account is a delegated administrator, you must first change the delegated administrator account to another account that is remaining in the organization.</p> </li> <li> <p>After the account leaves the organization, all tags that were attached to the account object in the organization are deleted. Amazon Web Services accounts outside of an organization do not support tags.</p> </li> </ul> </important>

> Body parameter

```json
{
  "AccountId": {}
}
```

<h3 id="removeaccountfromorganization-parameters">Parameters</h3>

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
|body|body|[RemoveAccountFromOrganizationRequest](#schemaremoveaccountfromorganizationrequest)|true|none|
|» AccountId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.RemoveAccountFromOrganization|

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

> 488 Response

```json
null
```

<h3 id="removeaccountfromorganization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|AccountNotFoundException|[AccountNotFoundException](#schemaaccountnotfoundexception)|
|482|482|AWSOrganizationsNotInUseException|[AWSOrganizationsNotInUseException](#schemaawsorganizationsnotinuseexception)|
|483|483|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|484|484|ConstraintViolationException|[ConstraintViolationException](#schemaconstraintviolationexception)|
|485|485|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|486|486|MasterCannotLeaveOrganizationException|[MasterCannotLeaveOrganizationException](#schemamastercannotleaveorganizationexception)|
|487|487|ServiceException|[ServiceException](#schemaserviceexception)|
|488|488|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.TagResource' \
  -d '{
    "ResourceId": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.TagResource`

<p>Adds one or more tags to the specified resource.</p> <p>Currently, you can attach tags to the following resources in Organizations.</p> <ul> <li> <p>Amazon Web Services account</p> </li> <li> <p>Organization root</p> </li> <li> <p>Organizational unit (OU)</p> </li> <li> <p>Policy (any type)</p> </li> </ul> <p>This operation can be called only from the organization's management account.</p>

> Body parameter

```json
{
  "ResourceId": {},
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
|» ResourceId|body|object|true|none|
|» Tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.TagResource|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|482|482|AWSOrganizationsNotInUseException|[AWSOrganizationsNotInUseException](#schemaawsorganizationsnotinuseexception)|
|483|483|TargetNotFoundException|[TargetNotFoundException](#schematargetnotfoundexception)|
|484|484|ConstraintViolationException|[ConstraintViolationException](#schemaconstraintviolationexception)|
|485|485|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|486|486|ServiceException|[ServiceException](#schemaserviceexception)|
|487|487|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.UntagResource' \
  -d '{
    "ResourceId": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.UntagResource`

<p>Removes any tags with the specified keys from the specified resource.</p> <p>You can attach tags to the following resources in Organizations.</p> <ul> <li> <p>Amazon Web Services account</p> </li> <li> <p>Organization root</p> </li> <li> <p>Organizational unit (OU)</p> </li> <li> <p>Policy (any type)</p> </li> </ul> <p>This operation can be called only from the organization's management account.</p>

> Body parameter

```json
{
  "ResourceId": {},
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
|» ResourceId|body|object|true|none|
|» TagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.UntagResource|

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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|482|482|AWSOrganizationsNotInUseException|[AWSOrganizationsNotInUseException](#schemaawsorganizationsnotinuseexception)|
|483|483|TargetNotFoundException|[TargetNotFoundException](#schematargetnotfoundexception)|
|484|484|ConstraintViolationException|[ConstraintViolationException](#schemaconstraintviolationexception)|
|485|485|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|486|486|ServiceException|[ServiceException](#schemaserviceexception)|
|487|487|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateOrganizationalUnit

<a id="opIdUpdateOrganizationalUnit"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.UpdateOrganizationalUnit' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.UpdateOrganizationalUnit' \
  -d '{
    "OrganizationalUnitId": {},
    "Name": {}
  }'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.UpdateOrganizationalUnit`

<p>Renames the specified organizational unit (OU). The ID and ARN don't change. The child OUs and accounts remain in place, and any attached policies of the OU remain attached.</p> <p>This operation can be called only from the organization's management account.</p>

> Body parameter

```json
{
  "OrganizationalUnitId": {},
  "Name": {}
}
```

<h3 id="updateorganizationalunit-parameters">Parameters</h3>

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
|body|body|[UpdateOrganizationalUnitRequest](#schemaupdateorganizationalunitrequest)|true|none|
|» OrganizationalUnitId|body|object|true|none|
|» Name|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.UpdateOrganizationalUnit|

> Example responses

> 200 Response

```json
{
  "OrganizationalUnit": {
    "Arn": "arn:aws:organizations::111111111111:ou/o-exampleorgid/ou-examplerootid111-exampleouid111",
    "Id": "ou-examplerootid111-exampleouid111",
    "Name": "AccountingOU"
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

<h3 id="updateorganizationalunit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateOrganizationalUnitResponse](#schemaupdateorganizationalunitresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|AWSOrganizationsNotInUseException|[AWSOrganizationsNotInUseException](#schemaawsorganizationsnotinuseexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|483|483|DuplicateOrganizationalUnitException|[DuplicateOrganizationalUnitException](#schemaduplicateorganizationalunitexception)|
|484|484|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|485|485|OrganizationalUnitNotFoundException|[OrganizationalUnitNotFoundException](#schemaorganizationalunitnotfoundexception)|
|486|486|ServiceException|[ServiceException](#schemaserviceexception)|
|487|487|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdatePolicy

<a id="opIdUpdatePolicy"></a>

> Code samples

```bash
curl 'https://organizations.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrganizationsV20161128.UpdatePolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrganizationsV20161128.UpdatePolicy' \
  -d '{
    "PolicyId": {},
    "Name": {},
    "Description": {},
    "Content": {}
  }'
```

`POST /#X-Amz-Target=AWSOrganizationsV20161128.UpdatePolicy`

<p>Updates an existing policy with a new name, description, or content. If you don't supply any parameter, that value remains unchanged. You can't change a policy's type.</p> <p>This operation can be called only from the organization's management account.</p>

> Body parameter

```json
{
  "PolicyId": {},
  "Name": {},
  "Description": {},
  "Content": {}
}
```

<h3 id="updatepolicy-parameters">Parameters</h3>

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
|body|body|[UpdatePolicyRequest](#schemaupdatepolicyrequest)|true|none|
|» PolicyId|body|object|true|none|
|» Name|body|object|false|none|
|» Description|body|object|false|none|
|» Content|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrganizationsV20161128.UpdatePolicy|

> Example responses

> 200 Response

```json
{
  "Policy": {
    "Content": "{ \\\"Version\\\": \\\"2012-10-17\\\", \\\"Statement\\\": { \\\"Effect\\\": \\\"Allow\\\", \\\"Action\\\": \\\"s3:*\\\", \\\"Resource\\\": \\\"*\\\" } }",
    "PolicySummary": {
      "Arn": "arn:aws:organizations::111111111111:policy/o-exampleorgid/service_control_policy/p-examplepolicyid111",
      "AwsManaged": false,
      "Description": "This description replaces the original.",
      "Id": "p-examplepolicyid111",
      "Name": "Renamed-Policy",
      "Type": "SERVICE_CONTROL_POLICY"
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

<h3 id="updatepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdatePolicyResponse](#schemaupdatepolicyresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|AWSOrganizationsNotInUseException|[AWSOrganizationsNotInUseException](#schemaawsorganizationsnotinuseexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|483|483|ConstraintViolationException|[ConstraintViolationException](#schemaconstraintviolationexception)|
|484|484|DuplicatePolicyException|[DuplicatePolicyException](#schemaduplicatepolicyexception)|
|485|485|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|486|486|MalformedPolicyDocumentException|[MalformedPolicyDocumentException](#schemamalformedpolicydocumentexception)|
|487|487|PolicyNotFoundException|[PolicyNotFoundException](#schemapolicynotfoundexception)|
|488|488|ServiceException|[ServiceException](#schemaserviceexception)|
|489|489|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|490|490|UnsupportedAPIEndpointException|[UnsupportedAPIEndpointException](#schemaunsupportedapiendpointexception)|
|491|491|PolicyChangesInProgressException|[PolicyChangesInProgressException](#schemapolicychangesinprogressexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AcceptHandshakeResponse">AcceptHandshakeResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaccepthandshakeresponse"></a>
<a id="schema_AcceptHandshakeResponse"></a>
<a id="tocSaccepthandshakeresponse"></a>
<a id="tocsaccepthandshakeresponse"></a>

```json
{
  "Handshake": {
    "Action": "INVITE",
    "Arn": "arn:aws:organizations::111111111111:handshake/o-exampleorgid/invite/h-examplehandshakeid111",
    "ExpirationTimestamp": "20170228T1215Z",
    "Id": "h-examplehandshakeid111",
    "Parties": [
      {
        "Id": "o-exampleorgid",
        "Type": "ORGANIZATION"
      },
      {
        "Id": "juan@example.com",
        "Type": "EMAIL"
      }
    ],
    "RequestedTimestamp": "20170214T1215Z",
    "Resources": [
      {
        "Resources": [
          {
            "Type": "MASTER_EMAIL",
            "Value": "bill@amazon.com"
          },
          {
            "Type": "MASTER_NAME",
            "Value": "Org Master Account"
          },
          {
            "Type": "ORGANIZATION_FEATURE_SET",
            "Value": "ALL"
          }
        ],
        "Type": "ORGANIZATION",
        "Value": "o-exampleorgid"
      },
      {
        "Type": "ACCOUNT",
        "Value": "222222222222"
      }
    ],
    "State": "ACCEPTED"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Handshake|object|false|none|none|

<h2 id="tocS_AcceptHandshakeRequest">AcceptHandshakeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaccepthandshakerequest"></a>
<a id="schema_AcceptHandshakeRequest"></a>
<a id="tocSaccepthandshakerequest"></a>
<a id="tocsaccepthandshakerequest"></a>

```json
{
  "HandshakeId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HandshakeId|object|true|none|none|

<h2 id="tocS_AccessDeniedException">AccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdeniedexception"></a>
<a id="schema_AccessDeniedException"></a>
<a id="tocSaccessdeniedexception"></a>
<a id="tocsaccessdeniedexception"></a>

```json
null
```

<h2 id="tocS_AWSOrganizationsNotInUseException">AWSOrganizationsNotInUseException</h2>
<!-- backwards compatibility -->
<a id="schemaawsorganizationsnotinuseexception"></a>
<a id="schema_AWSOrganizationsNotInUseException"></a>
<a id="tocSawsorganizationsnotinuseexception"></a>
<a id="tocsawsorganizationsnotinuseexception"></a>

```json
null
```

<h2 id="tocS_HandshakeConstraintViolationException">HandshakeConstraintViolationException</h2>
<!-- backwards compatibility -->
<a id="schemahandshakeconstraintviolationexception"></a>
<a id="schema_HandshakeConstraintViolationException"></a>
<a id="tocShandshakeconstraintviolationexception"></a>
<a id="tocshandshakeconstraintviolationexception"></a>

```json
null
```

<h2 id="tocS_HandshakeNotFoundException">HandshakeNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemahandshakenotfoundexception"></a>
<a id="schema_HandshakeNotFoundException"></a>
<a id="tocShandshakenotfoundexception"></a>
<a id="tocshandshakenotfoundexception"></a>

```json
null
```

<h2 id="tocS_InvalidHandshakeTransitionException">InvalidHandshakeTransitionException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidhandshaketransitionexception"></a>
<a id="schema_InvalidHandshakeTransitionException"></a>
<a id="tocSinvalidhandshaketransitionexception"></a>
<a id="tocsinvalidhandshaketransitionexception"></a>

```json
null
```

<h2 id="tocS_HandshakeAlreadyInStateException">HandshakeAlreadyInStateException</h2>
<!-- backwards compatibility -->
<a id="schemahandshakealreadyinstateexception"></a>
<a id="schema_HandshakeAlreadyInStateException"></a>
<a id="tocShandshakealreadyinstateexception"></a>
<a id="tocshandshakealreadyinstateexception"></a>

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

<h2 id="tocS_ConcurrentModificationException">ConcurrentModificationException</h2>
<!-- backwards compatibility -->
<a id="schemaconcurrentmodificationexception"></a>
<a id="schema_ConcurrentModificationException"></a>
<a id="tocSconcurrentmodificationexception"></a>
<a id="tocsconcurrentmodificationexception"></a>

```json
null
```

<h2 id="tocS_ServiceException">ServiceException</h2>
<!-- backwards compatibility -->
<a id="schemaserviceexception"></a>
<a id="schema_ServiceException"></a>
<a id="tocSserviceexception"></a>
<a id="tocsserviceexception"></a>

```json
null
```

<h2 id="tocS_TooManyRequestsException">TooManyRequestsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanyrequestsexception"></a>
<a id="schema_TooManyRequestsException"></a>
<a id="tocStoomanyrequestsexception"></a>
<a id="tocstoomanyrequestsexception"></a>

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

<h2 id="tocS_AttachPolicyRequest">AttachPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaattachpolicyrequest"></a>
<a id="schema_AttachPolicyRequest"></a>
<a id="tocSattachpolicyrequest"></a>
<a id="tocsattachpolicyrequest"></a>

```json
{
  "PolicyId": {},
  "TargetId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyId|object|true|none|none|
|TargetId|object|true|none|none|

<h2 id="tocS_ConstraintViolationException">ConstraintViolationException</h2>
<!-- backwards compatibility -->
<a id="schemaconstraintviolationexception"></a>
<a id="schema_ConstraintViolationException"></a>
<a id="tocSconstraintviolationexception"></a>
<a id="tocsconstraintviolationexception"></a>

```json
null
```

<h2 id="tocS_DuplicatePolicyAttachmentException">DuplicatePolicyAttachmentException</h2>
<!-- backwards compatibility -->
<a id="schemaduplicatepolicyattachmentexception"></a>
<a id="schema_DuplicatePolicyAttachmentException"></a>
<a id="tocSduplicatepolicyattachmentexception"></a>
<a id="tocsduplicatepolicyattachmentexception"></a>

```json
null
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

<h2 id="tocS_PolicyTypeNotEnabledException">PolicyTypeNotEnabledException</h2>
<!-- backwards compatibility -->
<a id="schemapolicytypenotenabledexception"></a>
<a id="schema_PolicyTypeNotEnabledException"></a>
<a id="tocSpolicytypenotenabledexception"></a>
<a id="tocspolicytypenotenabledexception"></a>

```json
null
```

<h2 id="tocS_TargetNotFoundException">TargetNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schematargetnotfoundexception"></a>
<a id="schema_TargetNotFoundException"></a>
<a id="tocStargetnotfoundexception"></a>
<a id="tocstargetnotfoundexception"></a>

```json
null
```

<h2 id="tocS_UnsupportedAPIEndpointException">UnsupportedAPIEndpointException</h2>
<!-- backwards compatibility -->
<a id="schemaunsupportedapiendpointexception"></a>
<a id="schema_UnsupportedAPIEndpointException"></a>
<a id="tocSunsupportedapiendpointexception"></a>
<a id="tocsunsupportedapiendpointexception"></a>

```json
null
```

<h2 id="tocS_PolicyChangesInProgressException">PolicyChangesInProgressException</h2>
<!-- backwards compatibility -->
<a id="schemapolicychangesinprogressexception"></a>
<a id="schema_PolicyChangesInProgressException"></a>
<a id="tocSpolicychangesinprogressexception"></a>
<a id="tocspolicychangesinprogressexception"></a>

```json
null
```

<h2 id="tocS_CancelHandshakeResponse">CancelHandshakeResponse</h2>
<!-- backwards compatibility -->
<a id="schemacancelhandshakeresponse"></a>
<a id="schema_CancelHandshakeResponse"></a>
<a id="tocScancelhandshakeresponse"></a>
<a id="tocscancelhandshakeresponse"></a>

```json
{
  "Handshake": {
    "Action": "INVITE",
    "Arn": "arn:aws:organizations::111111111111:handshake/o-exampleorgid/invite/h-examplehandshakeid111",
    "ExpirationTimestamp": "20170228T1215Z",
    "Id": "h-examplehandshakeid111",
    "Parties": [
      {
        "Id": "o-exampleorgid",
        "Type": "ORGANIZATION"
      },
      {
        "Id": "susan@example.com",
        "Type": "EMAIL"
      }
    ],
    "RequestedTimestamp": "20170214T1215Z",
    "Resources": [
      {
        "Resources": [
          {
            "Type": "MASTER_EMAIL",
            "Value": "bill@example.com"
          },
          {
            "Type": "MASTER_NAME",
            "Value": "Master Account"
          },
          {
            "Type": "ORGANIZATION_FEATURE_SET",
            "Value": "CONSOLIDATED_BILLING"
          }
        ],
        "Type": "ORGANIZATION",
        "Value": "o-exampleorgid"
      },
      {
        "Type": "ACCOUNT",
        "Value": "222222222222"
      },
      {
        "Type": "NOTES",
        "Value": "This is a request for Susan's account to join Bob's organization."
      }
    ],
    "State": "CANCELED"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Handshake|object|false|none|none|

<h2 id="tocS_CancelHandshakeRequest">CancelHandshakeRequest</h2>
<!-- backwards compatibility -->
<a id="schemacancelhandshakerequest"></a>
<a id="schema_CancelHandshakeRequest"></a>
<a id="tocScancelhandshakerequest"></a>
<a id="tocscancelhandshakerequest"></a>

```json
{
  "HandshakeId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HandshakeId|object|true|none|none|

<h2 id="tocS_CloseAccountRequest">CloseAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemacloseaccountrequest"></a>
<a id="schema_CloseAccountRequest"></a>
<a id="tocScloseaccountrequest"></a>
<a id="tocscloseaccountrequest"></a>

```json
{
  "AccountId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|true|none|none|

<h2 id="tocS_AccountAlreadyClosedException">AccountAlreadyClosedException</h2>
<!-- backwards compatibility -->
<a id="schemaaccountalreadyclosedexception"></a>
<a id="schema_AccountAlreadyClosedException"></a>
<a id="tocSaccountalreadyclosedexception"></a>
<a id="tocsaccountalreadyclosedexception"></a>

```json
null
```

<h2 id="tocS_AccountNotFoundException">AccountNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaaccountnotfoundexception"></a>
<a id="schema_AccountNotFoundException"></a>
<a id="tocSaccountnotfoundexception"></a>
<a id="tocsaccountnotfoundexception"></a>

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

<h2 id="tocS_CreateAccountResponse">CreateAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateaccountresponse"></a>
<a id="schema_CreateAccountResponse"></a>
<a id="tocScreateaccountresponse"></a>
<a id="tocscreateaccountresponse"></a>

```json
{
  "CreateAccountStatus": {
    "Id": "car-examplecreateaccountrequestid111",
    "State": "IN_PROGRESS"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreateAccountStatus|object|false|none|none|

<h2 id="tocS_CreateAccountRequest">CreateAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateaccountrequest"></a>
<a id="schema_CreateAccountRequest"></a>
<a id="tocScreateaccountrequest"></a>
<a id="tocscreateaccountrequest"></a>

```json
{
  "Email": {},
  "AccountName": {},
  "RoleName": {},
  "IamUserAccessToBilling": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Email|object|true|none|none|
|AccountName|object|true|none|none|
|RoleName|object|false|none|none|
|IamUserAccessToBilling|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_FinalizingOrganizationException">FinalizingOrganizationException</h2>
<!-- backwards compatibility -->
<a id="schemafinalizingorganizationexception"></a>
<a id="schema_FinalizingOrganizationException"></a>
<a id="tocSfinalizingorganizationexception"></a>
<a id="tocsfinalizingorganizationexception"></a>

```json
null
```

<h2 id="tocS_CreateGovCloudAccountResponse">CreateGovCloudAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreategovcloudaccountresponse"></a>
<a id="schema_CreateGovCloudAccountResponse"></a>
<a id="tocScreategovcloudaccountresponse"></a>
<a id="tocscreategovcloudaccountresponse"></a>

```json
{
  "CreateAccountStatus": {
    "Id": {},
    "AccountName": {},
    "State": {},
    "RequestedTimestamp": {},
    "CompletedTimestamp": {},
    "AccountId": {},
    "GovCloudAccountId": {},
    "FailureReason": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreateAccountStatus|[CreateAccountStatus](#schemacreateaccountstatus)|false|none|Contains the status about a <a>CreateAccount</a> or <a>CreateGovCloudAccount</a> request to create an Amazon Web Services account or an Amazon Web Services GovCloud (US) account in an organization.|

<h2 id="tocS_CreateGovCloudAccountRequest">CreateGovCloudAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreategovcloudaccountrequest"></a>
<a id="schema_CreateGovCloudAccountRequest"></a>
<a id="tocScreategovcloudaccountrequest"></a>
<a id="tocscreategovcloudaccountrequest"></a>

```json
{
  "Email": {},
  "AccountName": {},
  "RoleName": {},
  "IamUserAccessToBilling": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Email|object|true|none|none|
|AccountName|object|true|none|none|
|RoleName|object|false|none|none|
|IamUserAccessToBilling|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateOrganizationResponse">CreateOrganizationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateorganizationresponse"></a>
<a id="schema_CreateOrganizationResponse"></a>
<a id="tocScreateorganizationresponse"></a>
<a id="tocscreateorganizationresponse"></a>

```json
{
  "Organization": {
    "Arn": "arn:aws:organizations::111111111111:organization/o-exampleorgid",
    "AvailablePolicyTypes": [],
    "FeatureSet": "CONSOLIDATED_BILLING",
    "Id": "o-exampleorgid",
    "MasterAccountArn": "arn:aws:organizations::111111111111:account/o-exampleorgid/111111111111",
    "MasterAccountEmail": "bill@example.com",
    "MasterAccountId": "111111111111"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Organization|object|false|none|none|

<h2 id="tocS_CreateOrganizationRequest">CreateOrganizationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateorganizationrequest"></a>
<a id="schema_CreateOrganizationRequest"></a>
<a id="tocScreateorganizationrequest"></a>
<a id="tocscreateorganizationrequest"></a>

```json
{
  "FeatureSet": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FeatureSet|object|false|none|none|

<h2 id="tocS_AlreadyInOrganizationException">AlreadyInOrganizationException</h2>
<!-- backwards compatibility -->
<a id="schemaalreadyinorganizationexception"></a>
<a id="schema_AlreadyInOrganizationException"></a>
<a id="tocSalreadyinorganizationexception"></a>
<a id="tocsalreadyinorganizationexception"></a>

```json
null
```

<h2 id="tocS_CreateOrganizationalUnitResponse">CreateOrganizationalUnitResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateorganizationalunitresponse"></a>
<a id="schema_CreateOrganizationalUnitResponse"></a>
<a id="tocScreateorganizationalunitresponse"></a>
<a id="tocscreateorganizationalunitresponse"></a>

```json
{
  "OrganizationalUnit": {
    "Arn": "arn:aws:organizations::111111111111:ou/o-exampleorgid/ou-examplerootid111-exampleouid111",
    "Id": "ou-examplerootid111-exampleouid111",
    "Name": "AccountingOU"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationalUnit|object|false|none|none|

<h2 id="tocS_CreateOrganizationalUnitRequest">CreateOrganizationalUnitRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateorganizationalunitrequest"></a>
<a id="schema_CreateOrganizationalUnitRequest"></a>
<a id="tocScreateorganizationalunitrequest"></a>
<a id="tocscreateorganizationalunitrequest"></a>

```json
{
  "ParentId": {},
  "Name": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ParentId|object|true|none|none|
|Name|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DuplicateOrganizationalUnitException">DuplicateOrganizationalUnitException</h2>
<!-- backwards compatibility -->
<a id="schemaduplicateorganizationalunitexception"></a>
<a id="schema_DuplicateOrganizationalUnitException"></a>
<a id="tocSduplicateorganizationalunitexception"></a>
<a id="tocsduplicateorganizationalunitexception"></a>

```json
null
```

<h2 id="tocS_ParentNotFoundException">ParentNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaparentnotfoundexception"></a>
<a id="schema_ParentNotFoundException"></a>
<a id="tocSparentnotfoundexception"></a>
<a id="tocsparentnotfoundexception"></a>

```json
null
```

<h2 id="tocS_CreatePolicyResponse">CreatePolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatepolicyresponse"></a>
<a id="schema_CreatePolicyResponse"></a>
<a id="tocScreatepolicyresponse"></a>
<a id="tocscreatepolicyresponse"></a>

```json
{
  "Policy": {
    "Content": "{\"Version\":\"2012-10-17\",\"Statement\":{\"Effect\":\"Allow\",\"Action\":\"s3:*\"}}",
    "PolicySummary": {
      "Arn": "arn:aws:organizations::111111111111:policy/o-exampleorgid/service_control_policy/p-examplepolicyid111",
      "Description": "Allows delegation of all S3 actions",
      "Name": "AllowAllS3Actions",
      "Type": "SERVICE_CONTROL_POLICY"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Policy|object|false|none|none|

<h2 id="tocS_CreatePolicyRequest">CreatePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatepolicyrequest"></a>
<a id="schema_CreatePolicyRequest"></a>
<a id="tocScreatepolicyrequest"></a>
<a id="tocscreatepolicyrequest"></a>

```json
{
  "Content": {},
  "Description": {},
  "Name": {},
  "Type": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Content|object|true|none|none|
|Description|object|true|none|none|
|Name|object|true|none|none|
|Type|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DuplicatePolicyException">DuplicatePolicyException</h2>
<!-- backwards compatibility -->
<a id="schemaduplicatepolicyexception"></a>
<a id="schema_DuplicatePolicyException"></a>
<a id="tocSduplicatepolicyexception"></a>
<a id="tocsduplicatepolicyexception"></a>

```json
null
```

<h2 id="tocS_MalformedPolicyDocumentException">MalformedPolicyDocumentException</h2>
<!-- backwards compatibility -->
<a id="schemamalformedpolicydocumentexception"></a>
<a id="schema_MalformedPolicyDocumentException"></a>
<a id="tocSmalformedpolicydocumentexception"></a>
<a id="tocsmalformedpolicydocumentexception"></a>

```json
null
```

<h2 id="tocS_PolicyTypeNotAvailableForOrganizationException">PolicyTypeNotAvailableForOrganizationException</h2>
<!-- backwards compatibility -->
<a id="schemapolicytypenotavailablefororganizationexception"></a>
<a id="schema_PolicyTypeNotAvailableForOrganizationException"></a>
<a id="tocSpolicytypenotavailablefororganizationexception"></a>
<a id="tocspolicytypenotavailablefororganizationexception"></a>

```json
null
```

<h2 id="tocS_DeclineHandshakeResponse">DeclineHandshakeResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeclinehandshakeresponse"></a>
<a id="schema_DeclineHandshakeResponse"></a>
<a id="tocSdeclinehandshakeresponse"></a>
<a id="tocsdeclinehandshakeresponse"></a>

```json
{
  "Handshake": {
    "Action": "INVITE",
    "Arn": "arn:aws:organizations::111111111111:handshake/o-exampleorgid/invite/h-examplehandshakeid111",
    "ExpirationTimestamp": "2016-12-15T19:27:58Z",
    "Id": "h-examplehandshakeid111",
    "Parties": [
      {
        "Id": "222222222222",
        "Type": "ACCOUNT"
      },
      {
        "Id": "o-exampleorgid",
        "Type": "ORGANIZATION"
      }
    ],
    "RequestedTimestamp": "2016-11-30T19:27:58Z",
    "Resources": [
      {
        "Resources": [
          {
            "Type": "MASTER_EMAIL",
            "Value": "bill@example.com"
          },
          {
            "Type": "MASTER_NAME",
            "Value": "Master Account"
          }
        ],
        "Type": "ORGANIZATION",
        "Value": "o-exampleorgid"
      },
      {
        "Type": "ACCOUNT",
        "Value": "222222222222"
      },
      {
        "Type": "NOTES",
        "Value": "This is an invitation to Susan's account to join the Bill's organization."
      }
    ],
    "State": "DECLINED"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Handshake|object|false|none|none|

<h2 id="tocS_DeclineHandshakeRequest">DeclineHandshakeRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeclinehandshakerequest"></a>
<a id="schema_DeclineHandshakeRequest"></a>
<a id="tocSdeclinehandshakerequest"></a>
<a id="tocsdeclinehandshakerequest"></a>

```json
{
  "HandshakeId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HandshakeId|object|true|none|none|

<h2 id="tocS_OrganizationNotEmptyException">OrganizationNotEmptyException</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationnotemptyexception"></a>
<a id="schema_OrganizationNotEmptyException"></a>
<a id="tocSorganizationnotemptyexception"></a>
<a id="tocsorganizationnotemptyexception"></a>

```json
null
```

<h2 id="tocS_DeleteOrganizationalUnitRequest">DeleteOrganizationalUnitRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteorganizationalunitrequest"></a>
<a id="schema_DeleteOrganizationalUnitRequest"></a>
<a id="tocSdeleteorganizationalunitrequest"></a>
<a id="tocsdeleteorganizationalunitrequest"></a>

```json
{
  "OrganizationalUnitId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationalUnitId|object|true|none|none|

<h2 id="tocS_OrganizationalUnitNotEmptyException">OrganizationalUnitNotEmptyException</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationalunitnotemptyexception"></a>
<a id="schema_OrganizationalUnitNotEmptyException"></a>
<a id="tocSorganizationalunitnotemptyexception"></a>
<a id="tocsorganizationalunitnotemptyexception"></a>

```json
null
```

<h2 id="tocS_OrganizationalUnitNotFoundException">OrganizationalUnitNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationalunitnotfoundexception"></a>
<a id="schema_OrganizationalUnitNotFoundException"></a>
<a id="tocSorganizationalunitnotfoundexception"></a>
<a id="tocsorganizationalunitnotfoundexception"></a>

```json
null
```

<h2 id="tocS_DeletePolicyRequest">DeletePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletepolicyrequest"></a>
<a id="schema_DeletePolicyRequest"></a>
<a id="tocSdeletepolicyrequest"></a>
<a id="tocsdeletepolicyrequest"></a>

```json
{
  "PolicyId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyId|object|true|none|none|

<h2 id="tocS_PolicyInUseException">PolicyInUseException</h2>
<!-- backwards compatibility -->
<a id="schemapolicyinuseexception"></a>
<a id="schema_PolicyInUseException"></a>
<a id="tocSpolicyinuseexception"></a>
<a id="tocspolicyinuseexception"></a>

```json
null
```

<h2 id="tocS_ResourcePolicyNotFoundException">ResourcePolicyNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcepolicynotfoundexception"></a>
<a id="schema_ResourcePolicyNotFoundException"></a>
<a id="tocSresourcepolicynotfoundexception"></a>
<a id="tocsresourcepolicynotfoundexception"></a>

```json
null
```

<h2 id="tocS_DeregisterDelegatedAdministratorRequest">DeregisterDelegatedAdministratorRequest</h2>
<!-- backwards compatibility -->
<a id="schemaderegisterdelegatedadministratorrequest"></a>
<a id="schema_DeregisterDelegatedAdministratorRequest"></a>
<a id="tocSderegisterdelegatedadministratorrequest"></a>
<a id="tocsderegisterdelegatedadministratorrequest"></a>

```json
{
  "AccountId": {},
  "ServicePrincipal": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|true|none|none|
|ServicePrincipal|object|true|none|none|

<h2 id="tocS_AccountNotRegisteredException">AccountNotRegisteredException</h2>
<!-- backwards compatibility -->
<a id="schemaaccountnotregisteredexception"></a>
<a id="schema_AccountNotRegisteredException"></a>
<a id="tocSaccountnotregisteredexception"></a>
<a id="tocsaccountnotregisteredexception"></a>

```json
null
```

<h2 id="tocS_DescribeAccountResponse">DescribeAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaccountresponse"></a>
<a id="schema_DescribeAccountResponse"></a>
<a id="tocSdescribeaccountresponse"></a>
<a id="tocsdescribeaccountresponse"></a>

```json
{
  "Account": {
    "Arn": "arn:aws:organizations::111111111111:account/o-exampleorgid/555555555555",
    "Email": "anika@example.com",
    "Id": "555555555555",
    "Name": "Beta Account"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Account|object|false|none|none|

<h2 id="tocS_DescribeAccountRequest">DescribeAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaccountrequest"></a>
<a id="schema_DescribeAccountRequest"></a>
<a id="tocSdescribeaccountrequest"></a>
<a id="tocsdescribeaccountrequest"></a>

```json
{
  "AccountId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|true|none|none|

<h2 id="tocS_DescribeCreateAccountStatusResponse">DescribeCreateAccountStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribecreateaccountstatusresponse"></a>
<a id="schema_DescribeCreateAccountStatusResponse"></a>
<a id="tocSdescribecreateaccountstatusresponse"></a>
<a id="tocsdescribecreateaccountstatusresponse"></a>

```json
{
  "CreateAccountStatus": {
    "AccountId": "333333333333",
    "Id": "car-exampleaccountcreationrequestid",
    "State": "SUCCEEDED"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreateAccountStatus|object|false|none|none|

<h2 id="tocS_DescribeCreateAccountStatusRequest">DescribeCreateAccountStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribecreateaccountstatusrequest"></a>
<a id="schema_DescribeCreateAccountStatusRequest"></a>
<a id="tocSdescribecreateaccountstatusrequest"></a>
<a id="tocsdescribecreateaccountstatusrequest"></a>

```json
{
  "CreateAccountRequestId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreateAccountRequestId|object|true|none|none|

<h2 id="tocS_CreateAccountStatusNotFoundException">CreateAccountStatusNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemacreateaccountstatusnotfoundexception"></a>
<a id="schema_CreateAccountStatusNotFoundException"></a>
<a id="tocScreateaccountstatusnotfoundexception"></a>
<a id="tocscreateaccountstatusnotfoundexception"></a>

```json
null
```

<h2 id="tocS_DescribeEffectivePolicyResponse">DescribeEffectivePolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeeffectivepolicyresponse"></a>
<a id="schema_DescribeEffectivePolicyResponse"></a>
<a id="tocSdescribeeffectivepolicyresponse"></a>
<a id="tocsdescribeeffectivepolicyresponse"></a>

```json
{
  "EffectivePolicy": {
    "PolicyContent": {},
    "LastUpdatedTimestamp": {},
    "TargetId": {},
    "PolicyType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EffectivePolicy|object|false|none|none|

<h2 id="tocS_DescribeEffectivePolicyRequest">DescribeEffectivePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeeffectivepolicyrequest"></a>
<a id="schema_DescribeEffectivePolicyRequest"></a>
<a id="tocSdescribeeffectivepolicyrequest"></a>
<a id="tocsdescribeeffectivepolicyrequest"></a>

```json
{
  "PolicyType": {},
  "TargetId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyType|object|true|none|none|
|TargetId|object|false|none|none|

<h2 id="tocS_EffectivePolicyNotFoundException">EffectivePolicyNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaeffectivepolicynotfoundexception"></a>
<a id="schema_EffectivePolicyNotFoundException"></a>
<a id="tocSeffectivepolicynotfoundexception"></a>
<a id="tocseffectivepolicynotfoundexception"></a>

```json
null
```

<h2 id="tocS_DescribeHandshakeResponse">DescribeHandshakeResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribehandshakeresponse"></a>
<a id="schema_DescribeHandshakeResponse"></a>
<a id="tocSdescribehandshakeresponse"></a>
<a id="tocsdescribehandshakeresponse"></a>

```json
{
  "Handshake": {
    "Action": "INVITE",
    "Arn": "arn:aws:organizations::111111111111:handshake/o-exampleorgid/invite/h-examplehandshakeid111",
    "ExpirationTimestamp": "2016-11-30T17:24:58.046Z",
    "Id": "h-examplehandshakeid111",
    "Parties": [
      {
        "Id": "o-exampleorgid",
        "Type": "ORGANIZATION"
      },
      {
        "Id": "333333333333",
        "Type": "ACCOUNT"
      }
    ],
    "RequestedTimestamp": "2016-11-30T17:24:58.046Z",
    "Resources": [
      {
        "Resources": [
          {
            "Type": "MASTER_EMAIL",
            "Value": "bill@example.com"
          },
          {
            "Type": "MASTER_NAME",
            "Value": "Master Account"
          }
        ],
        "Type": "ORGANIZATION",
        "Value": "o-exampleorgid"
      },
      {
        "Type": "ACCOUNT",
        "Value": "333333333333"
      }
    ],
    "State": "OPEN"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Handshake|object|false|none|none|

<h2 id="tocS_DescribeHandshakeRequest">DescribeHandshakeRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribehandshakerequest"></a>
<a id="schema_DescribeHandshakeRequest"></a>
<a id="tocSdescribehandshakerequest"></a>
<a id="tocsdescribehandshakerequest"></a>

```json
{
  "HandshakeId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HandshakeId|object|true|none|none|

<h2 id="tocS_DescribeOrganizationResponse">DescribeOrganizationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeorganizationresponse"></a>
<a id="schema_DescribeOrganizationResponse"></a>
<a id="tocSdescribeorganizationresponse"></a>
<a id="tocsdescribeorganizationresponse"></a>

```json
{
  "Organization": {
    "Arn": "arn:aws:organizations::111111111111:organization/o-exampleorgid",
    "AvailablePolicyTypes": [
      {
        "Status": "ENABLED",
        "Type": "SERVICE_CONTROL_POLICY"
      }
    ],
    "FeatureSet": "ALL",
    "Id": "o-exampleorgid",
    "MasterAccountArn": "arn:aws:organizations::111111111111:account/o-exampleorgid/111111111111",
    "MasterAccountEmail": "bill@example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Organization|object|false|none|none|

<h2 id="tocS_DescribeOrganizationalUnitResponse">DescribeOrganizationalUnitResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeorganizationalunitresponse"></a>
<a id="schema_DescribeOrganizationalUnitResponse"></a>
<a id="tocSdescribeorganizationalunitresponse"></a>
<a id="tocsdescribeorganizationalunitresponse"></a>

```json
{
  "OrganizationalUnit": {
    "Arn": "arn:aws:organizations::111111111111:ou/o-exampleorgid/ou-examplerootid111-exampleouid111",
    "Id": "ou-examplerootid111-exampleouid111",
    "Name": "Accounting Group"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationalUnit|object|false|none|none|

<h2 id="tocS_DescribeOrganizationalUnitRequest">DescribeOrganizationalUnitRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeorganizationalunitrequest"></a>
<a id="schema_DescribeOrganizationalUnitRequest"></a>
<a id="tocSdescribeorganizationalunitrequest"></a>
<a id="tocsdescribeorganizationalunitrequest"></a>

```json
{
  "OrganizationalUnitId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationalUnitId|object|true|none|none|

<h2 id="tocS_DescribePolicyResponse">DescribePolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribepolicyresponse"></a>
<a id="schema_DescribePolicyResponse"></a>
<a id="tocSdescribepolicyresponse"></a>
<a id="tocsdescribepolicyresponse"></a>

```json
{
  "Policy": {
    "Content": "{\\n  \\\"Version\\\": \\\"2012-10-17\\\",\\n  \\\"Statement\\\": [\\n    {\\n      \\\"Effect\\\": \\\"Allow\\\",\\n      \\\"Action\\\": \\\"*\\\",\\n      \\\"Resource\\\": \\\"*\\\"\\n    }\\n  ]\\n}",
    "PolicySummary": {
      "Arn": "arn:aws:organizations::111111111111:policy/o-exampleorgid/service_control_policy/p-examplepolicyid111",
      "AwsManaged": false,
      "Description": "Enables admins to delegate S3 permissions",
      "Id": "p-examplepolicyid111",
      "Name": "AllowAllS3Actions",
      "Type": "SERVICE_CONTROL_POLICY"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Policy|object|false|none|none|

<h2 id="tocS_DescribePolicyRequest">DescribePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribepolicyrequest"></a>
<a id="schema_DescribePolicyRequest"></a>
<a id="tocSdescribepolicyrequest"></a>
<a id="tocsdescribepolicyrequest"></a>

```json
{
  "PolicyId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyId|object|true|none|none|

<h2 id="tocS_DescribeResourcePolicyResponse">DescribeResourcePolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescriberesourcepolicyresponse"></a>
<a id="schema_DescribeResourcePolicyResponse"></a>
<a id="tocSdescriberesourcepolicyresponse"></a>
<a id="tocsdescriberesourcepolicyresponse"></a>

```json
{
  "ResourcePolicy": {
    "ResourcePolicySummary": {
      "Id": {},
      "Arn": {}
    },
    "Content": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourcePolicy|object|false|none|none|

<h2 id="tocS_DetachPolicyRequest">DetachPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadetachpolicyrequest"></a>
<a id="schema_DetachPolicyRequest"></a>
<a id="tocSdetachpolicyrequest"></a>
<a id="tocsdetachpolicyrequest"></a>

```json
{
  "PolicyId": {},
  "TargetId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyId|object|true|none|none|
|TargetId|object|true|none|none|

<h2 id="tocS_PolicyNotAttachedException">PolicyNotAttachedException</h2>
<!-- backwards compatibility -->
<a id="schemapolicynotattachedexception"></a>
<a id="schema_PolicyNotAttachedException"></a>
<a id="tocSpolicynotattachedexception"></a>
<a id="tocspolicynotattachedexception"></a>

```json
null
```

<h2 id="tocS_DisableAWSServiceAccessRequest">DisableAWSServiceAccessRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisableawsserviceaccessrequest"></a>
<a id="schema_DisableAWSServiceAccessRequest"></a>
<a id="tocSdisableawsserviceaccessrequest"></a>
<a id="tocsdisableawsserviceaccessrequest"></a>

```json
{
  "ServicePrincipal": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServicePrincipal|object|true|none|none|

<h2 id="tocS_DisablePolicyTypeResponse">DisablePolicyTypeResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisablepolicytyperesponse"></a>
<a id="schema_DisablePolicyTypeResponse"></a>
<a id="tocSdisablepolicytyperesponse"></a>
<a id="tocsdisablepolicytyperesponse"></a>

```json
{
  "Root": {
    "Arn": "arn:aws:organizations::111111111111:root/o-exampleorgid/r-examplerootid111",
    "Id": "r-examplerootid111",
    "Name": "Root",
    "PolicyTypes": []
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Root|object|false|none|none|

<h2 id="tocS_DisablePolicyTypeRequest">DisablePolicyTypeRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisablepolicytyperequest"></a>
<a id="schema_DisablePolicyTypeRequest"></a>
<a id="tocSdisablepolicytyperequest"></a>
<a id="tocsdisablepolicytyperequest"></a>

```json
{
  "RootId": {},
  "PolicyType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RootId|object|true|none|none|
|PolicyType|object|true|none|none|

<h2 id="tocS_RootNotFoundException">RootNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemarootnotfoundexception"></a>
<a id="schema_RootNotFoundException"></a>
<a id="tocSrootnotfoundexception"></a>
<a id="tocsrootnotfoundexception"></a>

```json
null
```

<h2 id="tocS_EnableAWSServiceAccessRequest">EnableAWSServiceAccessRequest</h2>
<!-- backwards compatibility -->
<a id="schemaenableawsserviceaccessrequest"></a>
<a id="schema_EnableAWSServiceAccessRequest"></a>
<a id="tocSenableawsserviceaccessrequest"></a>
<a id="tocsenableawsserviceaccessrequest"></a>

```json
{
  "ServicePrincipal": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServicePrincipal|object|true|none|none|

<h2 id="tocS_EnableAllFeaturesResponse">EnableAllFeaturesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaenableallfeaturesresponse"></a>
<a id="schema_EnableAllFeaturesResponse"></a>
<a id="tocSenableallfeaturesresponse"></a>
<a id="tocsenableallfeaturesresponse"></a>

```json
{
  "Handshake": {
    "Action": "ENABLE_ALL_FEATURES",
    "Arn": "arn:aws:organizations::111111111111:handshake/o-exampleorgid/enable_all_features/h-examplehandshakeid111",
    "ExpirationTimestamp": "2017-02-28T09:35:40.05Z",
    "Id": "h-examplehandshakeid111",
    "Parties": [
      {
        "Id": "o-exampleorgid",
        "Type": "ORGANIZATION"
      }
    ],
    "RequestedTimestamp": "2017-02-13T09:35:40.05Z",
    "Resources": [
      {
        "Type": "ORGANIZATION",
        "Value": "o-exampleorgid"
      }
    ],
    "State": "REQUESTED"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Handshake|object|false|none|none|

<h2 id="tocS_EnableAllFeaturesRequest">EnableAllFeaturesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaenableallfeaturesrequest"></a>
<a id="schema_EnableAllFeaturesRequest"></a>
<a id="tocSenableallfeaturesrequest"></a>
<a id="tocsenableallfeaturesrequest"></a>

```json
{}
```

<h2 id="tocS_EnablePolicyTypeResponse">EnablePolicyTypeResponse</h2>
<!-- backwards compatibility -->
<a id="schemaenablepolicytyperesponse"></a>
<a id="schema_EnablePolicyTypeResponse"></a>
<a id="tocSenablepolicytyperesponse"></a>
<a id="tocsenablepolicytyperesponse"></a>

```json
{
  "Root": {
    "Arn": "arn:aws:organizations::111111111111:root/o-exampleorgid/r-examplerootid111",
    "Id": "r-examplerootid111",
    "Name": "Root",
    "PolicyTypes": [
      {
        "Status": "ENABLED",
        "Type": "SERVICE_CONTROL_POLICY"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Root|object|false|none|none|

<h2 id="tocS_EnablePolicyTypeRequest">EnablePolicyTypeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaenablepolicytyperequest"></a>
<a id="schema_EnablePolicyTypeRequest"></a>
<a id="tocSenablepolicytyperequest"></a>
<a id="tocsenablepolicytyperequest"></a>

```json
{
  "RootId": {},
  "PolicyType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RootId|object|true|none|none|
|PolicyType|object|true|none|none|

<h2 id="tocS_PolicyTypeAlreadyEnabledException">PolicyTypeAlreadyEnabledException</h2>
<!-- backwards compatibility -->
<a id="schemapolicytypealreadyenabledexception"></a>
<a id="schema_PolicyTypeAlreadyEnabledException"></a>
<a id="tocSpolicytypealreadyenabledexception"></a>
<a id="tocspolicytypealreadyenabledexception"></a>

```json
null
```

<h2 id="tocS_InviteAccountToOrganizationResponse">InviteAccountToOrganizationResponse</h2>
<!-- backwards compatibility -->
<a id="schemainviteaccounttoorganizationresponse"></a>
<a id="schema_InviteAccountToOrganizationResponse"></a>
<a id="tocSinviteaccounttoorganizationresponse"></a>
<a id="tocsinviteaccounttoorganizationresponse"></a>

```json
{
  "Handshake": {
    "Action": "INVITE",
    "Arn": "arn:aws:organizations::111111111111:handshake/o-exampleorgid/invite/h-examplehandshakeid111",
    "ExpirationTimestamp": "2017-02-16T09:36:05.02Z",
    "Id": "h-examplehandshakeid111",
    "Parties": [
      {
        "Id": "o-exampleorgid",
        "Type": "ORGANIZATION"
      },
      {
        "Id": "juan@example.com",
        "Type": "EMAIL"
      }
    ],
    "RequestedTimestamp": "2017-02-01T09:36:05.02Z",
    "Resources": [
      {
        "Resources": [
          {
            "Type": "MASTER_EMAIL",
            "Value": "bill@amazon.com"
          },
          {
            "Type": "MASTER_NAME",
            "Value": "Org Master Account"
          },
          {
            "Type": "ORGANIZATION_FEATURE_SET",
            "Value": "FULL"
          }
        ],
        "Type": "ORGANIZATION",
        "Value": "o-exampleorgid"
      },
      {
        "Type": "EMAIL",
        "Value": "juan@example.com"
      }
    ],
    "State": "OPEN"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Handshake|object|false|none|none|

<h2 id="tocS_InviteAccountToOrganizationRequest">InviteAccountToOrganizationRequest</h2>
<!-- backwards compatibility -->
<a id="schemainviteaccounttoorganizationrequest"></a>
<a id="schema_InviteAccountToOrganizationRequest"></a>
<a id="tocSinviteaccounttoorganizationrequest"></a>
<a id="tocsinviteaccounttoorganizationrequest"></a>

```json
{
  "Target": {
    "Id": {},
    "Type": {}
  },
  "Notes": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Target|object|true|none|none|
|Notes|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_AccountOwnerNotVerifiedException">AccountOwnerNotVerifiedException</h2>
<!-- backwards compatibility -->
<a id="schemaaccountownernotverifiedexception"></a>
<a id="schema_AccountOwnerNotVerifiedException"></a>
<a id="tocSaccountownernotverifiedexception"></a>
<a id="tocsaccountownernotverifiedexception"></a>

```json
null
```

<h2 id="tocS_DuplicateHandshakeException">DuplicateHandshakeException</h2>
<!-- backwards compatibility -->
<a id="schemaduplicatehandshakeexception"></a>
<a id="schema_DuplicateHandshakeException"></a>
<a id="tocSduplicatehandshakeexception"></a>
<a id="tocsduplicatehandshakeexception"></a>

```json
null
```

<h2 id="tocS_MasterCannotLeaveOrganizationException">MasterCannotLeaveOrganizationException</h2>
<!-- backwards compatibility -->
<a id="schemamastercannotleaveorganizationexception"></a>
<a id="schema_MasterCannotLeaveOrganizationException"></a>
<a id="tocSmastercannotleaveorganizationexception"></a>
<a id="tocsmastercannotleaveorganizationexception"></a>

```json
null
```

<h2 id="tocS_ListAWSServiceAccessForOrganizationResponse">ListAWSServiceAccessForOrganizationResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistawsserviceaccessfororganizationresponse"></a>
<a id="schema_ListAWSServiceAccessForOrganizationResponse"></a>
<a id="tocSlistawsserviceaccessfororganizationresponse"></a>
<a id="tocslistawsserviceaccessfororganizationresponse"></a>

```json
{
  "EnabledServicePrincipals": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EnabledServicePrincipals|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListAWSServiceAccessForOrganizationRequest">ListAWSServiceAccessForOrganizationRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistawsserviceaccessfororganizationrequest"></a>
<a id="schema_ListAWSServiceAccessForOrganizationRequest"></a>
<a id="tocSlistawsserviceaccessfororganizationrequest"></a>
<a id="tocslistawsserviceaccessfororganizationrequest"></a>

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

<h2 id="tocS_ListAccountsResponse">ListAccountsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistaccountsresponse"></a>
<a id="schema_ListAccountsResponse"></a>
<a id="tocSlistaccountsresponse"></a>
<a id="tocslistaccountsresponse"></a>

```json
{
  "Accounts": [
    {
      "Arn": "arn:aws:organizations::111111111111:account/o-exampleorgid/111111111111",
      "Email": "bill@example.com",
      "Id": "111111111111",
      "JoinedMethod": "INVITED",
      "JoinedTimestamp": "20161215T193015Z",
      "Name": "Master Account",
      "Status": "ACTIVE"
    },
    {
      "Arn": "arn:aws:organizations::111111111111:account/o-exampleorgid/222222222222",
      "Email": "alice@example.com",
      "Id": "222222222222",
      "JoinedMethod": "INVITED",
      "JoinedTimestamp": "20161215T210221Z",
      "Name": "Developer Account",
      "Status": "ACTIVE"
    },
    {
      "Arn": "arn:aws:organizations::111111111111:account/o-exampleorgid/333333333333",
      "Email": "juan@example.com",
      "Id": "333333333333",
      "JoinedMethod": "INVITED",
      "JoinedTimestamp": "20161215T210347Z",
      "Name": "Test Account",
      "Status": "ACTIVE"
    },
    {
      "Arn": "arn:aws:organizations::111111111111:account/o-exampleorgid/444444444444",
      "Email": "anika@example.com",
      "Id": "444444444444",
      "JoinedMethod": "INVITED",
      "JoinedTimestamp": "20161215T210332Z",
      "Name": "Production Account",
      "Status": "ACTIVE"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Accounts|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListAccountsRequest">ListAccountsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistaccountsrequest"></a>
<a id="schema_ListAccountsRequest"></a>
<a id="tocSlistaccountsrequest"></a>
<a id="tocslistaccountsrequest"></a>

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

<h2 id="tocS_ListAccountsForParentResponse">ListAccountsForParentResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistaccountsforparentresponse"></a>
<a id="schema_ListAccountsForParentResponse"></a>
<a id="tocSlistaccountsforparentresponse"></a>
<a id="tocslistaccountsforparentresponse"></a>

```json
{
  "Accounts": [
    {
      "Arn": "arn:aws:organizations::111111111111:account/o-exampleorgid/333333333333",
      "Email": "juan@example.com",
      "Id": "333333333333",
      "JoinedMethod": "INVITED",
      "JoinedTimestamp": 1481835795.536,
      "Name": "Development Account",
      "Status": "ACTIVE"
    },
    {
      "Arn": "arn:aws:organizations::111111111111:account/o-exampleorgid/444444444444",
      "Email": "anika@example.com",
      "Id": "444444444444",
      "JoinedMethod": "INVITED",
      "JoinedTimestamp": 1481835812.143,
      "Name": "Test Account",
      "Status": "ACTIVE"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Accounts|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListAccountsForParentRequest">ListAccountsForParentRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistaccountsforparentrequest"></a>
<a id="schema_ListAccountsForParentRequest"></a>
<a id="tocSlistaccountsforparentrequest"></a>
<a id="tocslistaccountsforparentrequest"></a>

```json
{
  "ParentId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ParentId|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListChildrenResponse">ListChildrenResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistchildrenresponse"></a>
<a id="schema_ListChildrenResponse"></a>
<a id="tocSlistchildrenresponse"></a>
<a id="tocslistchildrenresponse"></a>

```json
{
  "Children": [
    {
      "Id": "ou-examplerootid111-exampleouid111",
      "Type": "ORGANIZATIONAL_UNIT"
    },
    {
      "Id": "ou-examplerootid111-exampleouid222",
      "Type": "ORGANIZATIONAL_UNIT"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Children|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListChildrenRequest">ListChildrenRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistchildrenrequest"></a>
<a id="schema_ListChildrenRequest"></a>
<a id="tocSlistchildrenrequest"></a>
<a id="tocslistchildrenrequest"></a>

```json
{
  "ParentId": {},
  "ChildType": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ParentId|object|true|none|none|
|ChildType|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListCreateAccountStatusResponse">ListCreateAccountStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcreateaccountstatusresponse"></a>
<a id="schema_ListCreateAccountStatusResponse"></a>
<a id="tocSlistcreateaccountstatusresponse"></a>
<a id="tocslistcreateaccountstatusresponse"></a>

```json
{
  "CreateAccountStatuses": [
    {
      "AccountName": "Production Account",
      "Id": "car-exampleaccountcreationrequestid2",
      "RequestedTimestamp": "2017-01-15T13:45:23.01Z",
      "State": "IN_PROGRESS"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreateAccountStatuses|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListCreateAccountStatusRequest">ListCreateAccountStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcreateaccountstatusrequest"></a>
<a id="schema_ListCreateAccountStatusRequest"></a>
<a id="tocSlistcreateaccountstatusrequest"></a>
<a id="tocslistcreateaccountstatusrequest"></a>

```json
{
  "States": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|States|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListDelegatedAdministratorsResponse">ListDelegatedAdministratorsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdelegatedadministratorsresponse"></a>
<a id="schema_ListDelegatedAdministratorsResponse"></a>
<a id="tocSlistdelegatedadministratorsresponse"></a>
<a id="tocslistdelegatedadministratorsresponse"></a>

```json
{
  "DelegatedAdministrators": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DelegatedAdministrators|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListDelegatedAdministratorsRequest">ListDelegatedAdministratorsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdelegatedadministratorsrequest"></a>
<a id="schema_ListDelegatedAdministratorsRequest"></a>
<a id="tocSlistdelegatedadministratorsrequest"></a>
<a id="tocslistdelegatedadministratorsrequest"></a>

```json
{
  "ServicePrincipal": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServicePrincipal|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListDelegatedServicesForAccountResponse">ListDelegatedServicesForAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdelegatedservicesforaccountresponse"></a>
<a id="schema_ListDelegatedServicesForAccountResponse"></a>
<a id="tocSlistdelegatedservicesforaccountresponse"></a>
<a id="tocslistdelegatedservicesforaccountresponse"></a>

```json
{
  "DelegatedServices": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DelegatedServices|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListDelegatedServicesForAccountRequest">ListDelegatedServicesForAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdelegatedservicesforaccountrequest"></a>
<a id="schema_ListDelegatedServicesForAccountRequest"></a>
<a id="tocSlistdelegatedservicesforaccountrequest"></a>
<a id="tocslistdelegatedservicesforaccountrequest"></a>

```json
{
  "AccountId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListHandshakesForAccountResponse">ListHandshakesForAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisthandshakesforaccountresponse"></a>
<a id="schema_ListHandshakesForAccountResponse"></a>
<a id="tocSlisthandshakesforaccountresponse"></a>
<a id="tocslisthandshakesforaccountresponse"></a>

```json
{
  "Handshakes": [
    {
      "Action": "INVITE",
      "Arn": "arn:aws:organizations::111111111111:handshake/o-exampleorgid/invite/h-examplehandshakeid111",
      "ExpirationTimestamp": "2017-01-28T14:35:23.3Z",
      "Id": "h-examplehandshakeid111",
      "Parties": [
        {
          "Id": "o-exampleorgid",
          "Type": "ORGANIZATION"
        },
        {
          "Id": "juan@example.com",
          "Type": "EMAIL"
        }
      ],
      "RequestedTimestamp": "2017-01-13T14:35:23.3Z",
      "Resources": [
        {
          "Resources": [
            {
              "Type": "MASTER_EMAIL",
              "Value": "bill@amazon.com"
            },
            {
              "Type": "MASTER_NAME",
              "Value": "Org Master Account"
            },
            {
              "Type": "ORGANIZATION_FEATURE_SET",
              "Value": "FULL"
            }
          ],
          "Type": "ORGANIZATION",
          "Value": "o-exampleorgid"
        },
        {
          "Type": "EMAIL",
          "Value": "juan@example.com"
        }
      ],
      "State": "OPEN"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Handshakes|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListHandshakesForAccountRequest">ListHandshakesForAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisthandshakesforaccountrequest"></a>
<a id="schema_ListHandshakesForAccountRequest"></a>
<a id="tocSlisthandshakesforaccountrequest"></a>
<a id="tocslisthandshakesforaccountrequest"></a>

```json
{
  "Filter": {
    "ActionType": {},
    "ParentHandshakeId": {}
  },
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filter|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListHandshakesForOrganizationResponse">ListHandshakesForOrganizationResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisthandshakesfororganizationresponse"></a>
<a id="schema_ListHandshakesForOrganizationResponse"></a>
<a id="tocSlisthandshakesfororganizationresponse"></a>
<a id="tocslisthandshakesfororganizationresponse"></a>

```json
{
  "Handshakes": [
    {
      "Action": "INVITE",
      "Arn": "arn:aws:organizations::111111111111:handshake/o-exampleorgid/invite/h-examplehandshakeid111",
      "ExpirationTimestamp": "2017-01-28T14:35:23.3Z",
      "Id": "h-examplehandshakeid111",
      "Parties": [
        {
          "Id": "o-exampleorgid",
          "Type": "ORGANIZATION"
        },
        {
          "Id": "juan@example.com",
          "Type": "EMAIL"
        }
      ],
      "RequestedTimestamp": "2017-01-13T14:35:23.3Z",
      "Resources": [
        {
          "Resources": [
            {
              "Type": "MASTER_EMAIL",
              "Value": "bill@amazon.com"
            },
            {
              "Type": "MASTER_NAME",
              "Value": "Org Master Account"
            },
            {
              "Type": "ORGANIZATION_FEATURE_SET",
              "Value": "FULL"
            }
          ],
          "Type": "ORGANIZATION",
          "Value": "o-exampleorgid"
        },
        {
          "Type": "EMAIL",
          "Value": "juan@example.com"
        }
      ],
      "State": "OPEN"
    },
    {
      "Action": "INVITE",
      "Arn": "arn:aws:organizations::111111111111:handshake/o-exampleorgid/invite/h-examplehandshakeid111",
      "ExpirationTimestamp": "2017-01-28T14:35:23.3Z",
      "Id": "h-examplehandshakeid222",
      "Parties": [
        {
          "Id": "o-exampleorgid",
          "Type": "ORGANIZATION"
        },
        {
          "Id": "anika@example.com",
          "Type": "EMAIL"
        }
      ],
      "RequestedTimestamp": "2017-01-13T14:35:23.3Z",
      "Resources": [
        {
          "Resources": [
            {
              "Type": "MASTER_EMAIL",
              "Value": "bill@example.com"
            },
            {
              "Type": "MASTER_NAME",
              "Value": "Master Account"
            }
          ],
          "Type": "ORGANIZATION",
          "Value": "o-exampleorgid"
        },
        {
          "Type": "EMAIL",
          "Value": "anika@example.com"
        },
        {
          "Type": "NOTES",
          "Value": "This is an invitation to Anika's account to join Bill's organization."
        }
      ],
      "State": "ACCEPTED"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Handshakes|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListHandshakesForOrganizationRequest">ListHandshakesForOrganizationRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisthandshakesfororganizationrequest"></a>
<a id="schema_ListHandshakesForOrganizationRequest"></a>
<a id="tocSlisthandshakesfororganizationrequest"></a>
<a id="tocslisthandshakesfororganizationrequest"></a>

```json
{
  "Filter": {
    "ActionType": {},
    "ParentHandshakeId": {}
  },
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filter|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListOrganizationalUnitsForParentResponse">ListOrganizationalUnitsForParentResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistorganizationalunitsforparentresponse"></a>
<a id="schema_ListOrganizationalUnitsForParentResponse"></a>
<a id="tocSlistorganizationalunitsforparentresponse"></a>
<a id="tocslistorganizationalunitsforparentresponse"></a>

```json
{
  "OrganizationalUnits": [
    {
      "Arn": "arn:aws:organizations::111111111111:ou/o-exampleorgid/ou-examlerootid111-exampleouid111",
      "Id": "ou-examplerootid111-exampleouid111",
      "Name": "Development"
    },
    {
      "Arn": "arn:aws:organizations::111111111111:ou/o-exampleorgid/ou-examlerootid111-exampleouid222",
      "Id": "ou-examplerootid111-exampleouid222",
      "Name": "Production"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationalUnits|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListOrganizationalUnitsForParentRequest">ListOrganizationalUnitsForParentRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistorganizationalunitsforparentrequest"></a>
<a id="schema_ListOrganizationalUnitsForParentRequest"></a>
<a id="tocSlistorganizationalunitsforparentrequest"></a>
<a id="tocslistorganizationalunitsforparentrequest"></a>

```json
{
  "ParentId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ParentId|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListParentsResponse">ListParentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistparentsresponse"></a>
<a id="schema_ListParentsResponse"></a>
<a id="tocSlistparentsresponse"></a>
<a id="tocslistparentsresponse"></a>

```json
{
  "Parents": [
    {
      "Id": "ou-examplerootid111-exampleouid111",
      "Type": "ORGANIZATIONAL_UNIT"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Parents|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListParentsRequest">ListParentsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistparentsrequest"></a>
<a id="schema_ListParentsRequest"></a>
<a id="tocSlistparentsrequest"></a>
<a id="tocslistparentsrequest"></a>

```json
{
  "ChildId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChildId|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ChildNotFoundException">ChildNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemachildnotfoundexception"></a>
<a id="schema_ChildNotFoundException"></a>
<a id="tocSchildnotfoundexception"></a>
<a id="tocschildnotfoundexception"></a>

```json
null
```

<h2 id="tocS_ListPoliciesResponse">ListPoliciesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistpoliciesresponse"></a>
<a id="schema_ListPoliciesResponse"></a>
<a id="tocSlistpoliciesresponse"></a>
<a id="tocslistpoliciesresponse"></a>

```json
{
  "Policies": [
    {
      "Arn": "arn:aws:organizations::111111111111:policy/o-exampleorgid/service_control_policy/p-examplepolicyid111",
      "AwsManaged": false,
      "Description": "Enables account admins to delegate permissions for any S3 actions to users and roles in their accounts.",
      "Id": "p-examplepolicyid111",
      "Name": "AllowAllS3Actions",
      "Type": "SERVICE_CONTROL_POLICY"
    },
    {
      "Arn": "arn:aws:organizations::111111111111:policy/o-exampleorgid/service_control_policy/p-examplepolicyid222",
      "AwsManaged": false,
      "Description": "Enables account admins to delegate permissions for any EC2 actions to users and roles in their accounts.",
      "Id": "p-examplepolicyid222",
      "Name": "AllowAllEC2Actions",
      "Type": "SERVICE_CONTROL_POLICY"
    },
    {
      "Arn": "arn:aws:organizations::aws:policy/service_control_policy/p-FullAWSAccess",
      "AwsManaged": true,
      "Description": "Allows access to every operation",
      "Id": "p-FullAWSAccess",
      "Name": "FullAWSAccess",
      "Type": "SERVICE_CONTROL_POLICY"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Policies|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListPoliciesRequest">ListPoliciesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistpoliciesrequest"></a>
<a id="schema_ListPoliciesRequest"></a>
<a id="tocSlistpoliciesrequest"></a>
<a id="tocslistpoliciesrequest"></a>

```json
{
  "Filter": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filter|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListPoliciesForTargetResponse">ListPoliciesForTargetResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistpoliciesfortargetresponse"></a>
<a id="schema_ListPoliciesForTargetResponse"></a>
<a id="tocSlistpoliciesfortargetresponse"></a>
<a id="tocslistpoliciesfortargetresponse"></a>

```json
{
  "Policies": [
    {
      "Arn": "arn:aws:organizations::111111111111:policy/o-exampleorgid/service_control_policy/p-examplepolicyid222",
      "AwsManaged": false,
      "Description": "Enables account admins to delegate permissions for any EC2 actions to users and roles in their accounts.",
      "Id": "p-examplepolicyid222",
      "Name": "AllowAllEC2Actions",
      "Type": "SERVICE_CONTROL_POLICY"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Policies|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListPoliciesForTargetRequest">ListPoliciesForTargetRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistpoliciesfortargetrequest"></a>
<a id="schema_ListPoliciesForTargetRequest"></a>
<a id="tocSlistpoliciesfortargetrequest"></a>
<a id="tocslistpoliciesfortargetrequest"></a>

```json
{
  "TargetId": {},
  "Filter": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetId|object|true|none|none|
|Filter|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListRootsResponse">ListRootsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistrootsresponse"></a>
<a id="schema_ListRootsResponse"></a>
<a id="tocSlistrootsresponse"></a>
<a id="tocslistrootsresponse"></a>

```json
{
  "Roots": [
    {
      "Arn": "arn:aws:organizations::111111111111:root/o-exampleorgid/r-examplerootid111",
      "Id": "r-examplerootid111",
      "Name": "Root",
      "PolicyTypes": [
        {
          "Status": "ENABLED",
          "Type": "SERVICE_CONTROL_POLICY"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Roots|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListRootsRequest">ListRootsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistrootsrequest"></a>
<a id="schema_ListRootsRequest"></a>
<a id="tocSlistrootsrequest"></a>
<a id="tocslistrootsrequest"></a>

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
  "ResourceId": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTargetsForPolicyResponse">ListTargetsForPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttargetsforpolicyresponse"></a>
<a id="schema_ListTargetsForPolicyResponse"></a>
<a id="tocSlisttargetsforpolicyresponse"></a>
<a id="tocslisttargetsforpolicyresponse"></a>

```json
{
  "Targets": [
    {
      "Arn": "arn:aws:organizations::111111111111:root/o-exampleorgid/r-examplerootid111",
      "Name": "Root",
      "TargetId": "r-examplerootid111",
      "Type": "ROOT"
    },
    {
      "Arn": "arn:aws:organizations::111111111111:account/o-exampleorgid/333333333333;",
      "Name": "Developer Test Account",
      "TargetId": "333333333333",
      "Type": "ACCOUNT"
    },
    {
      "Arn": "arn:aws:organizations::111111111111:ou/o-exampleorgid/ou-examplerootid111-exampleouid111",
      "Name": "Accounting",
      "TargetId": "ou-examplerootid111-exampleouid111",
      "Type": "ORGANIZATIONAL_UNIT"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Targets|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTargetsForPolicyRequest">ListTargetsForPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttargetsforpolicyrequest"></a>
<a id="schema_ListTargetsForPolicyRequest"></a>
<a id="tocSlisttargetsforpolicyrequest"></a>
<a id="tocslisttargetsforpolicyrequest"></a>

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

<h2 id="tocS_MoveAccountRequest">MoveAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemamoveaccountrequest"></a>
<a id="schema_MoveAccountRequest"></a>
<a id="tocSmoveaccountrequest"></a>
<a id="tocsmoveaccountrequest"></a>

```json
{
  "AccountId": {},
  "SourceParentId": {},
  "DestinationParentId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|true|none|none|
|SourceParentId|object|true|none|none|
|DestinationParentId|object|true|none|none|

<h2 id="tocS_SourceParentNotFoundException">SourceParentNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemasourceparentnotfoundexception"></a>
<a id="schema_SourceParentNotFoundException"></a>
<a id="tocSsourceparentnotfoundexception"></a>
<a id="tocssourceparentnotfoundexception"></a>

```json
null
```

<h2 id="tocS_DestinationParentNotFoundException">DestinationParentNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemadestinationparentnotfoundexception"></a>
<a id="schema_DestinationParentNotFoundException"></a>
<a id="tocSdestinationparentnotfoundexception"></a>
<a id="tocsdestinationparentnotfoundexception"></a>

```json
null
```

<h2 id="tocS_DuplicateAccountException">DuplicateAccountException</h2>
<!-- backwards compatibility -->
<a id="schemaduplicateaccountexception"></a>
<a id="schema_DuplicateAccountException"></a>
<a id="tocSduplicateaccountexception"></a>
<a id="tocsduplicateaccountexception"></a>

```json
null
```

<h2 id="tocS_PutResourcePolicyResponse">PutResourcePolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputresourcepolicyresponse"></a>
<a id="schema_PutResourcePolicyResponse"></a>
<a id="tocSputresourcepolicyresponse"></a>
<a id="tocsputresourcepolicyresponse"></a>

```json
{
  "ResourcePolicy": {
    "ResourcePolicySummary": {
      "Id": {},
      "Arn": {}
    },
    "Content": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourcePolicy|object|false|none|none|

<h2 id="tocS_PutResourcePolicyRequest">PutResourcePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputresourcepolicyrequest"></a>
<a id="schema_PutResourcePolicyRequest"></a>
<a id="tocSputresourcepolicyrequest"></a>
<a id="tocsputresourcepolicyrequest"></a>

```json
{
  "Content": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Content|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_RegisterDelegatedAdministratorRequest">RegisterDelegatedAdministratorRequest</h2>
<!-- backwards compatibility -->
<a id="schemaregisterdelegatedadministratorrequest"></a>
<a id="schema_RegisterDelegatedAdministratorRequest"></a>
<a id="tocSregisterdelegatedadministratorrequest"></a>
<a id="tocsregisterdelegatedadministratorrequest"></a>

```json
{
  "AccountId": {},
  "ServicePrincipal": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|true|none|none|
|ServicePrincipal|object|true|none|none|

<h2 id="tocS_AccountAlreadyRegisteredException">AccountAlreadyRegisteredException</h2>
<!-- backwards compatibility -->
<a id="schemaaccountalreadyregisteredexception"></a>
<a id="schema_AccountAlreadyRegisteredException"></a>
<a id="tocSaccountalreadyregisteredexception"></a>
<a id="tocsaccountalreadyregisteredexception"></a>

```json
null
```

<h2 id="tocS_RemoveAccountFromOrganizationRequest">RemoveAccountFromOrganizationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremoveaccountfromorganizationrequest"></a>
<a id="schema_RemoveAccountFromOrganizationRequest"></a>
<a id="tocSremoveaccountfromorganizationrequest"></a>
<a id="tocsremoveaccountfromorganizationrequest"></a>

```json
{
  "AccountId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|true|none|none|

<h2 id="tocS_TagResourceRequest">TagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schematagresourcerequest"></a>
<a id="schema_TagResourceRequest"></a>
<a id="tocStagresourcerequest"></a>
<a id="tocstagresourcerequest"></a>

```json
{
  "ResourceId": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|true|none|none|
|Tags|object|true|none|none|

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{
  "ResourceId": {},
  "TagKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|true|none|none|
|TagKeys|object|true|none|none|

<h2 id="tocS_UpdateOrganizationalUnitResponse">UpdateOrganizationalUnitResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateorganizationalunitresponse"></a>
<a id="schema_UpdateOrganizationalUnitResponse"></a>
<a id="tocSupdateorganizationalunitresponse"></a>
<a id="tocsupdateorganizationalunitresponse"></a>

```json
{
  "OrganizationalUnit": {
    "Arn": "arn:aws:organizations::111111111111:ou/o-exampleorgid/ou-examplerootid111-exampleouid111",
    "Id": "ou-examplerootid111-exampleouid111",
    "Name": "AccountingOU"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationalUnit|object|false|none|none|

<h2 id="tocS_UpdateOrganizationalUnitRequest">UpdateOrganizationalUnitRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateorganizationalunitrequest"></a>
<a id="schema_UpdateOrganizationalUnitRequest"></a>
<a id="tocSupdateorganizationalunitrequest"></a>
<a id="tocsupdateorganizationalunitrequest"></a>

```json
{
  "OrganizationalUnitId": {},
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationalUnitId|object|true|none|none|
|Name|object|false|none|none|

<h2 id="tocS_UpdatePolicyResponse">UpdatePolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepolicyresponse"></a>
<a id="schema_UpdatePolicyResponse"></a>
<a id="tocSupdatepolicyresponse"></a>
<a id="tocsupdatepolicyresponse"></a>

```json
{
  "Policy": {
    "Content": "{ \\\"Version\\\": \\\"2012-10-17\\\", \\\"Statement\\\": { \\\"Effect\\\": \\\"Allow\\\", \\\"Action\\\": \\\"s3:*\\\", \\\"Resource\\\": \\\"*\\\" } }",
    "PolicySummary": {
      "Arn": "arn:aws:organizations::111111111111:policy/o-exampleorgid/service_control_policy/p-examplepolicyid111",
      "AwsManaged": false,
      "Description": "This description replaces the original.",
      "Id": "p-examplepolicyid111",
      "Name": "Renamed-Policy",
      "Type": "SERVICE_CONTROL_POLICY"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Policy|object|false|none|none|

<h2 id="tocS_UpdatePolicyRequest">UpdatePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepolicyrequest"></a>
<a id="schema_UpdatePolicyRequest"></a>
<a id="tocSupdatepolicyrequest"></a>
<a id="tocsupdatepolicyrequest"></a>

```json
{
  "PolicyId": {},
  "Name": {},
  "Description": {},
  "Content": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyId|object|true|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|Content|object|false|none|none|

<h2 id="tocS_HandshakeId">HandshakeId</h2>
<!-- backwards compatibility -->
<a id="schemahandshakeid"></a>
<a id="schema_HandshakeId"></a>
<a id="tocShandshakeid"></a>
<a id="tocshandshakeid"></a>

```json
"string"
```

<h2 id="tocS_Handshake">Handshake</h2>
<!-- backwards compatibility -->
<a id="schemahandshake"></a>
<a id="schema_Handshake"></a>
<a id="tocShandshake"></a>
<a id="tocshandshake"></a>

```json
{
  "Id": {},
  "Arn": {},
  "Parties": {},
  "State": {},
  "RequestedTimestamp": {},
  "ExpirationTimestamp": {},
  "Action": {},
  "Resources": {}
}
```

<p>Contains information that must be exchanged to securely establish a relationship between two accounts (an <i>originator</i> and a <i>recipient</i>). For example, when a management account (the originator) invites another account (the recipient) to join its organization, the two accounts exchange information as a series of handshake requests and responses.</p> <p> <b>Note:</b> Handshakes that are <code>CANCELED</code>, <code>ACCEPTED</code>, <code>DECLINED</code>, or <code>EXPIRED</code> show up in lists for only 30 days after entering that state After that they are deleted.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|
|Parties|object|false|none|none|
|State|object|false|none|none|
|RequestedTimestamp|object|false|none|none|
|ExpirationTimestamp|object|false|none|none|
|Action|object|false|none|none|
|Resources|object|false|none|none|

<h2 id="tocS_AccountId">AccountId</h2>
<!-- backwards compatibility -->
<a id="schemaaccountid"></a>
<a id="schema_AccountId"></a>
<a id="tocSaccountid"></a>
<a id="tocsaccountid"></a>

```json
"string"
```

<h2 id="tocS_AccountArn">AccountArn</h2>
<!-- backwards compatibility -->
<a id="schemaaccountarn"></a>
<a id="schema_AccountArn"></a>
<a id="tocSaccountarn"></a>
<a id="tocsaccountarn"></a>

```json
"string"
```

<h2 id="tocS_Email">Email</h2>
<!-- backwards compatibility -->
<a id="schemaemail"></a>
<a id="schema_Email"></a>
<a id="tocSemail"></a>
<a id="tocsemail"></a>

```json
"password"
```

<h2 id="tocS_AccountName">AccountName</h2>
<!-- backwards compatibility -->
<a id="schemaaccountname"></a>
<a id="schema_AccountName"></a>
<a id="tocSaccountname"></a>
<a id="tocsaccountname"></a>

```json
"password"
```

<h2 id="tocS_AccountStatus">AccountStatus</h2>
<!-- backwards compatibility -->
<a id="schemaaccountstatus"></a>
<a id="schema_AccountStatus"></a>
<a id="tocSaccountstatus"></a>
<a id="tocsaccountstatus"></a>

```json
"ACTIVE"
```

<h2 id="tocS_AccountJoinedMethod">AccountJoinedMethod</h2>
<!-- backwards compatibility -->
<a id="schemaaccountjoinedmethod"></a>
<a id="schema_AccountJoinedMethod"></a>
<a id="tocSaccountjoinedmethod"></a>
<a id="tocsaccountjoinedmethod"></a>

```json
"INVITED"
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

<h2 id="tocS_Account">Account</h2>
<!-- backwards compatibility -->
<a id="schemaaccount"></a>
<a id="schema_Account"></a>
<a id="tocSaccount"></a>
<a id="tocsaccount"></a>

```json
{
  "Id": {},
  "Arn": {},
  "Email": {},
  "Name": {},
  "Status": {},
  "JoinedMethod": {},
  "JoinedTimestamp": {}
}
```

Contains information about an Amazon Web Services account that is a member of an organization.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|
|Email|object|false|none|none|
|Name|object|false|none|none|
|Status|object|false|none|none|
|JoinedMethod|object|false|none|none|
|JoinedTimestamp|object|false|none|none|

<h2 id="tocS_Accounts">Accounts</h2>
<!-- backwards compatibility -->
<a id="schemaaccounts"></a>
<a id="schema_Accounts"></a>
<a id="tocSaccounts"></a>
<a id="tocsaccounts"></a>

```json
[
  {
    "Id": {},
    "Arn": {},
    "Email": {},
    "Name": {},
    "Status": {},
    "JoinedMethod": {},
    "JoinedTimestamp": {}
  }
]
```

<h2 id="tocS_ActionType">ActionType</h2>
<!-- backwards compatibility -->
<a id="schemaactiontype"></a>
<a id="schema_ActionType"></a>
<a id="tocSactiontype"></a>
<a id="tocsactiontype"></a>

```json
"INVITE"
```

<h2 id="tocS_PolicyId">PolicyId</h2>
<!-- backwards compatibility -->
<a id="schemapolicyid"></a>
<a id="schema_PolicyId"></a>
<a id="tocSpolicyid"></a>
<a id="tocspolicyid"></a>

```json
"string"
```

<h2 id="tocS_PolicyTargetId">PolicyTargetId</h2>
<!-- backwards compatibility -->
<a id="schemapolicytargetid"></a>
<a id="schema_PolicyTargetId"></a>
<a id="tocSpolicytargetid"></a>
<a id="tocspolicytargetid"></a>

```json
"string"
```

<h2 id="tocS_AwsManagedPolicy">AwsManagedPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaawsmanagedpolicy"></a>
<a id="schema_AwsManagedPolicy"></a>
<a id="tocSawsmanagedpolicy"></a>
<a id="tocsawsmanagedpolicy"></a>

```json
true
```

<h2 id="tocS_ChildId">ChildId</h2>
<!-- backwards compatibility -->
<a id="schemachildid"></a>
<a id="schema_ChildId"></a>
<a id="tocSchildid"></a>
<a id="tocschildid"></a>

```json
"string"
```

<h2 id="tocS_ChildType">ChildType</h2>
<!-- backwards compatibility -->
<a id="schemachildtype"></a>
<a id="schema_ChildType"></a>
<a id="tocSchildtype"></a>
<a id="tocschildtype"></a>

```json
"ACCOUNT"
```

<h2 id="tocS_Child">Child</h2>
<!-- backwards compatibility -->
<a id="schemachild"></a>
<a id="schema_Child"></a>
<a id="tocSchild"></a>
<a id="tocschild"></a>

```json
{
  "Id": {},
  "Type": {}
}
```

Contains a list of child entities, either OUs or accounts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Type|object|false|none|none|

<h2 id="tocS_Children">Children</h2>
<!-- backwards compatibility -->
<a id="schemachildren"></a>
<a id="schema_Children"></a>
<a id="tocSchildren"></a>
<a id="tocschildren"></a>

```json
[
  {
    "Id": {},
    "Type": {}
  }
]
```

<h2 id="tocS_CreateAccountFailureReason">CreateAccountFailureReason</h2>
<!-- backwards compatibility -->
<a id="schemacreateaccountfailurereason"></a>
<a id="schema_CreateAccountFailureReason"></a>
<a id="tocScreateaccountfailurereason"></a>
<a id="tocscreateaccountfailurereason"></a>

```json
"ACCOUNT_LIMIT_EXCEEDED"
```

<h2 id="tocS_CreateAccountName">CreateAccountName</h2>
<!-- backwards compatibility -->
<a id="schemacreateaccountname"></a>
<a id="schema_CreateAccountName"></a>
<a id="tocScreateaccountname"></a>
<a id="tocscreateaccountname"></a>

```json
"password"
```

<h2 id="tocS_RoleName">RoleName</h2>
<!-- backwards compatibility -->
<a id="schemarolename"></a>
<a id="schema_RoleName"></a>
<a id="tocSrolename"></a>
<a id="tocsrolename"></a>

```json
"string"
```

<h2 id="tocS_IAMUserAccessToBilling">IAMUserAccessToBilling</h2>
<!-- backwards compatibility -->
<a id="schemaiamuseraccesstobilling"></a>
<a id="schema_IAMUserAccessToBilling"></a>
<a id="tocSiamuseraccesstobilling"></a>
<a id="tocsiamuseraccesstobilling"></a>

```json
"ALLOW"
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

<h2 id="tocS_CreateAccountRequestId">CreateAccountRequestId</h2>
<!-- backwards compatibility -->
<a id="schemacreateaccountrequestid"></a>
<a id="schema_CreateAccountRequestId"></a>
<a id="tocScreateaccountrequestid"></a>
<a id="tocscreateaccountrequestid"></a>

```json
"string"
```

<h2 id="tocS_CreateAccountStatus">CreateAccountStatus</h2>
<!-- backwards compatibility -->
<a id="schemacreateaccountstatus"></a>
<a id="schema_CreateAccountStatus"></a>
<a id="tocScreateaccountstatus"></a>
<a id="tocscreateaccountstatus"></a>

```json
{
  "Id": {},
  "AccountName": {},
  "State": {},
  "RequestedTimestamp": {},
  "CompletedTimestamp": {},
  "AccountId": {},
  "GovCloudAccountId": {},
  "FailureReason": {}
}
```

Contains the status about a <a>CreateAccount</a> or <a>CreateGovCloudAccount</a> request to create an Amazon Web Services account or an Amazon Web Services GovCloud (US) account in an organization.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|AccountName|object|false|none|none|
|State|object|false|none|none|
|RequestedTimestamp|object|false|none|none|
|CompletedTimestamp|object|false|none|none|
|AccountId|object|false|none|none|
|GovCloudAccountId|object|false|none|none|
|FailureReason|object|false|none|none|

<h2 id="tocS_CreateAccountState">CreateAccountState</h2>
<!-- backwards compatibility -->
<a id="schemacreateaccountstate"></a>
<a id="schema_CreateAccountState"></a>
<a id="tocScreateaccountstate"></a>
<a id="tocscreateaccountstate"></a>

```json
"IN_PROGRESS"
```

<h2 id="tocS_CreateAccountStates">CreateAccountStates</h2>
<!-- backwards compatibility -->
<a id="schemacreateaccountstates"></a>
<a id="schema_CreateAccountStates"></a>
<a id="tocScreateaccountstates"></a>
<a id="tocscreateaccountstates"></a>

```json
[
  "IN_PROGRESS"
]
```

<h2 id="tocS_CreateAccountStatuses">CreateAccountStatuses</h2>
<!-- backwards compatibility -->
<a id="schemacreateaccountstatuses"></a>
<a id="schema_CreateAccountStatuses"></a>
<a id="tocScreateaccountstatuses"></a>
<a id="tocscreateaccountstatuses"></a>

```json
[
  {
    "Id": {},
    "AccountName": {},
    "State": {},
    "RequestedTimestamp": {},
    "CompletedTimestamp": {},
    "AccountId": {},
    "GovCloudAccountId": {},
    "FailureReason": {}
  }
]
```

<h2 id="tocS_OrganizationFeatureSet">OrganizationFeatureSet</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationfeatureset"></a>
<a id="schema_OrganizationFeatureSet"></a>
<a id="tocSorganizationfeatureset"></a>
<a id="tocsorganizationfeatureset"></a>

```json
"ALL"
```

<h2 id="tocS_Organization">Organization</h2>
<!-- backwards compatibility -->
<a id="schemaorganization"></a>
<a id="schema_Organization"></a>
<a id="tocSorganization"></a>
<a id="tocsorganization"></a>

```json
{
  "Id": {},
  "Arn": {},
  "FeatureSet": {},
  "MasterAccountArn": {},
  "MasterAccountId": {},
  "MasterAccountEmail": {},
  "AvailablePolicyTypes": {}
}
```

Contains details about an organization. An organization is a collection of accounts that are centrally managed together using consolidated billing, organized hierarchically with organizational units (OUs), and controlled with policies .

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|
|FeatureSet|object|false|none|none|
|MasterAccountArn|object|false|none|none|
|MasterAccountId|object|false|none|none|
|MasterAccountEmail|object|false|none|none|
|AvailablePolicyTypes|object|false|none|none|

<h2 id="tocS_ParentId">ParentId</h2>
<!-- backwards compatibility -->
<a id="schemaparentid"></a>
<a id="schema_ParentId"></a>
<a id="tocSparentid"></a>
<a id="tocsparentid"></a>

```json
"string"
```

<h2 id="tocS_OrganizationalUnitName">OrganizationalUnitName</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationalunitname"></a>
<a id="schema_OrganizationalUnitName"></a>
<a id="tocSorganizationalunitname"></a>
<a id="tocsorganizationalunitname"></a>

```json
"string"
```

<h2 id="tocS_OrganizationalUnit">OrganizationalUnit</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationalunit"></a>
<a id="schema_OrganizationalUnit"></a>
<a id="tocSorganizationalunit"></a>
<a id="tocsorganizationalunit"></a>

```json
{
  "Id": {},
  "Arn": {},
  "Name": {}
}
```

Contains details about an organizational unit (OU). An OU is a container of Amazon Web Services accounts within a root of an organization. Policies that are attached to an OU apply to all accounts contained in that OU and in any child OUs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS_PolicyContent">PolicyContent</h2>
<!-- backwards compatibility -->
<a id="schemapolicycontent"></a>
<a id="schema_PolicyContent"></a>
<a id="tocSpolicycontent"></a>
<a id="tocspolicycontent"></a>

```json
"string"
```

<h2 id="tocS_PolicyDescription">PolicyDescription</h2>
<!-- backwards compatibility -->
<a id="schemapolicydescription"></a>
<a id="schema_PolicyDescription"></a>
<a id="tocSpolicydescription"></a>
<a id="tocspolicydescription"></a>

```json
"string"
```

<h2 id="tocS_PolicyName">PolicyName</h2>
<!-- backwards compatibility -->
<a id="schemapolicyname"></a>
<a id="schema_PolicyName"></a>
<a id="tocSpolicyname"></a>
<a id="tocspolicyname"></a>

```json
"string"
```

<h2 id="tocS_PolicyType">PolicyType</h2>
<!-- backwards compatibility -->
<a id="schemapolicytype"></a>
<a id="schema_PolicyType"></a>
<a id="tocSpolicytype"></a>
<a id="tocspolicytype"></a>

```json
"SERVICE_CONTROL_POLICY"
```

<h2 id="tocS_Policy">Policy</h2>
<!-- backwards compatibility -->
<a id="schemapolicy"></a>
<a id="schema_Policy"></a>
<a id="tocSpolicy"></a>
<a id="tocspolicy"></a>

```json
{
  "PolicySummary": {
    "Id": {},
    "Arn": {},
    "Name": {},
    "Description": {},
    "Type": {},
    "AwsManaged": {}
  },
  "Content": {}
}
```

Contains rules to be applied to the affected accounts. Policies can be attached directly to accounts, or to roots and OUs to affect all accounts in those hierarchies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicySummary|object|false|none|none|
|Content|object|false|none|none|

<h2 id="tocS_DelegatedAdministrator">DelegatedAdministrator</h2>
<!-- backwards compatibility -->
<a id="schemadelegatedadministrator"></a>
<a id="schema_DelegatedAdministrator"></a>
<a id="tocSdelegatedadministrator"></a>
<a id="tocsdelegatedadministrator"></a>

```json
{
  "Id": {},
  "Arn": {},
  "Email": {},
  "Name": {},
  "Status": {},
  "JoinedMethod": {},
  "JoinedTimestamp": {},
  "DelegationEnabledDate": {}
}
```

Contains information about the delegated administrator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|
|Email|object|false|none|none|
|Name|object|false|none|none|
|Status|object|false|none|none|
|JoinedMethod|object|false|none|none|
|JoinedTimestamp|object|false|none|none|
|DelegationEnabledDate|object|false|none|none|

<h2 id="tocS_DelegatedAdministrators">DelegatedAdministrators</h2>
<!-- backwards compatibility -->
<a id="schemadelegatedadministrators"></a>
<a id="schema_DelegatedAdministrators"></a>
<a id="tocSdelegatedadministrators"></a>
<a id="tocsdelegatedadministrators"></a>

```json
[
  {
    "Id": {},
    "Arn": {},
    "Email": {},
    "Name": {},
    "Status": {},
    "JoinedMethod": {},
    "JoinedTimestamp": {},
    "DelegationEnabledDate": {}
  }
]
```

<h2 id="tocS_ServicePrincipal">ServicePrincipal</h2>
<!-- backwards compatibility -->
<a id="schemaserviceprincipal"></a>
<a id="schema_ServicePrincipal"></a>
<a id="tocSserviceprincipal"></a>
<a id="tocsserviceprincipal"></a>

```json
"string"
```

<h2 id="tocS_DelegatedService">DelegatedService</h2>
<!-- backwards compatibility -->
<a id="schemadelegatedservice"></a>
<a id="schema_DelegatedService"></a>
<a id="tocSdelegatedservice"></a>
<a id="tocsdelegatedservice"></a>

```json
{
  "ServicePrincipal": {},
  "DelegationEnabledDate": {}
}
```

Contains information about the Amazon Web Services service for which the account is a delegated administrator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServicePrincipal|object|false|none|none|
|DelegationEnabledDate|object|false|none|none|

<h2 id="tocS_DelegatedServices">DelegatedServices</h2>
<!-- backwards compatibility -->
<a id="schemadelegatedservices"></a>
<a id="schema_DelegatedServices"></a>
<a id="tocSdelegatedservices"></a>
<a id="tocsdelegatedservices"></a>

```json
[
  {
    "ServicePrincipal": {},
    "DelegationEnabledDate": {}
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
"string"
```

<h2 id="tocS_EffectivePolicyType">EffectivePolicyType</h2>
<!-- backwards compatibility -->
<a id="schemaeffectivepolicytype"></a>
<a id="schema_EffectivePolicyType"></a>
<a id="tocSeffectivepolicytype"></a>
<a id="tocseffectivepolicytype"></a>

```json
"TAG_POLICY"
```

<h2 id="tocS_EffectivePolicy">EffectivePolicy</h2>
<!-- backwards compatibility -->
<a id="schemaeffectivepolicy"></a>
<a id="schema_EffectivePolicy"></a>
<a id="tocSeffectivepolicy"></a>
<a id="tocseffectivepolicy"></a>

```json
{
  "PolicyContent": {},
  "LastUpdatedTimestamp": {},
  "TargetId": {},
  "PolicyType": {}
}
```

Contains rules to be applied to the affected accounts. The effective policy is the aggregation of any policies the account inherits, plus any policy directly attached to the account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyContent|object|false|none|none|
|LastUpdatedTimestamp|object|false|none|none|
|TargetId|object|false|none|none|
|PolicyType|object|false|none|none|

<h2 id="tocS_ResourcePolicy">ResourcePolicy</h2>
<!-- backwards compatibility -->
<a id="schemaresourcepolicy"></a>
<a id="schema_ResourcePolicy"></a>
<a id="tocSresourcepolicy"></a>
<a id="tocsresourcepolicy"></a>

```json
{
  "ResourcePolicySummary": {
    "Id": {},
    "Arn": {}
  },
  "Content": {}
}
```

A structure that contains details about a resource policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourcePolicySummary|object|false|none|none|
|Content|object|false|none|none|

<h2 id="tocS_RootId">RootId</h2>
<!-- backwards compatibility -->
<a id="schemarootid"></a>
<a id="schema_RootId"></a>
<a id="tocSrootid"></a>
<a id="tocsrootid"></a>

```json
"string"
```

<h2 id="tocS_Root">Root</h2>
<!-- backwards compatibility -->
<a id="schemaroot"></a>
<a id="schema_Root"></a>
<a id="tocSroot"></a>
<a id="tocsroot"></a>

```json
{
  "Id": {},
  "Arn": {},
  "Name": {},
  "PolicyTypes": {}
}
```

Contains details about a root. A root is a top-level parent node in the hierarchy of an organization that can contain organizational units (OUs) and accounts. The root contains every Amazon Web Services account in the organization.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|
|Name|object|false|none|none|
|PolicyTypes|object|false|none|none|

<h2 id="tocS_EnabledServicePrincipal">EnabledServicePrincipal</h2>
<!-- backwards compatibility -->
<a id="schemaenabledserviceprincipal"></a>
<a id="schema_EnabledServicePrincipal"></a>
<a id="tocSenabledserviceprincipal"></a>
<a id="tocsenabledserviceprincipal"></a>

```json
{
  "ServicePrincipal": {},
  "DateEnabled": {}
}
```

A structure that contains details of a service principal that represents an Amazon Web Services service that is enabled to integrate with Organizations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServicePrincipal|object|false|none|none|
|DateEnabled|object|false|none|none|

<h2 id="tocS_EnabledServicePrincipals">EnabledServicePrincipals</h2>
<!-- backwards compatibility -->
<a id="schemaenabledserviceprincipals"></a>
<a id="schema_EnabledServicePrincipals"></a>
<a id="tocSenabledserviceprincipals"></a>
<a id="tocsenabledserviceprincipals"></a>

```json
[
  {
    "ServicePrincipal": {},
    "DateEnabled": {}
  }
]
```

<h2 id="tocS_GenericArn">GenericArn</h2>
<!-- backwards compatibility -->
<a id="schemagenericarn"></a>
<a id="schema_GenericArn"></a>
<a id="tocSgenericarn"></a>
<a id="tocsgenericarn"></a>

```json
"string"
```

<h2 id="tocS_HandshakeArn">HandshakeArn</h2>
<!-- backwards compatibility -->
<a id="schemahandshakearn"></a>
<a id="schema_HandshakeArn"></a>
<a id="tocShandshakearn"></a>
<a id="tocshandshakearn"></a>

```json
"string"
```

<h2 id="tocS_HandshakeParties">HandshakeParties</h2>
<!-- backwards compatibility -->
<a id="schemahandshakeparties"></a>
<a id="schema_HandshakeParties"></a>
<a id="tocShandshakeparties"></a>
<a id="tocshandshakeparties"></a>

```json
[
  {
    "Id": {},
    "Type": {}
  }
]
```

<h2 id="tocS_HandshakeState">HandshakeState</h2>
<!-- backwards compatibility -->
<a id="schemahandshakestate"></a>
<a id="schema_HandshakeState"></a>
<a id="tocShandshakestate"></a>
<a id="tocshandshakestate"></a>

```json
"REQUESTED"
```

<h2 id="tocS_HandshakeResources">HandshakeResources</h2>
<!-- backwards compatibility -->
<a id="schemahandshakeresources"></a>
<a id="schema_HandshakeResources"></a>
<a id="tocShandshakeresources"></a>
<a id="tocshandshakeresources"></a>

```json
[
  {
    "Value": {},
    "Type": {},
    "Resources": {}
  }
]
```

<h2 id="tocS_HandshakeFilter">HandshakeFilter</h2>
<!-- backwards compatibility -->
<a id="schemahandshakefilter"></a>
<a id="schema_HandshakeFilter"></a>
<a id="tocShandshakefilter"></a>
<a id="tocshandshakefilter"></a>

```json
{
  "ActionType": {},
  "ParentHandshakeId": {}
}
```

Specifies the criteria that are used to select the handshakes for the operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActionType|object|false|none|none|
|ParentHandshakeId|object|false|none|none|

<h2 id="tocS_HandshakeNotes">HandshakeNotes</h2>
<!-- backwards compatibility -->
<a id="schemahandshakenotes"></a>
<a id="schema_HandshakeNotes"></a>
<a id="tocShandshakenotes"></a>
<a id="tocshandshakenotes"></a>

```json
"password"
```

<h2 id="tocS_HandshakeParty">HandshakeParty</h2>
<!-- backwards compatibility -->
<a id="schemahandshakeparty"></a>
<a id="schema_HandshakeParty"></a>
<a id="tocShandshakeparty"></a>
<a id="tocshandshakeparty"></a>

```json
{
  "Id": {},
  "Type": {}
}
```

Identifies a participant in a handshake.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|Type|object|true|none|none|

<h2 id="tocS_HandshakePartyId">HandshakePartyId</h2>
<!-- backwards compatibility -->
<a id="schemahandshakepartyid"></a>
<a id="schema_HandshakePartyId"></a>
<a id="tocShandshakepartyid"></a>
<a id="tocshandshakepartyid"></a>

```json
"password"
```

<h2 id="tocS_HandshakePartyType">HandshakePartyType</h2>
<!-- backwards compatibility -->
<a id="schemahandshakepartytype"></a>
<a id="schema_HandshakePartyType"></a>
<a id="tocShandshakepartytype"></a>
<a id="tocshandshakepartytype"></a>

```json
"ACCOUNT"
```

<h2 id="tocS_HandshakeResourceValue">HandshakeResourceValue</h2>
<!-- backwards compatibility -->
<a id="schemahandshakeresourcevalue"></a>
<a id="schema_HandshakeResourceValue"></a>
<a id="tocShandshakeresourcevalue"></a>
<a id="tocshandshakeresourcevalue"></a>

```json
"password"
```

<h2 id="tocS_HandshakeResourceType">HandshakeResourceType</h2>
<!-- backwards compatibility -->
<a id="schemahandshakeresourcetype"></a>
<a id="schema_HandshakeResourceType"></a>
<a id="tocShandshakeresourcetype"></a>
<a id="tocshandshakeresourcetype"></a>

```json
"ACCOUNT"
```

<h2 id="tocS_HandshakeResource">HandshakeResource</h2>
<!-- backwards compatibility -->
<a id="schemahandshakeresource"></a>
<a id="schema_HandshakeResource"></a>
<a id="tocShandshakeresource"></a>
<a id="tocshandshakeresource"></a>

```json
{
  "Value": {},
  "Type": {},
  "Resources": {}
}
```

Contains additional data that is needed to process a handshake.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Value|object|false|none|none|
|Type|object|false|none|none|
|Resources|object|false|none|none|

<h2 id="tocS_Handshakes">Handshakes</h2>
<!-- backwards compatibility -->
<a id="schemahandshakes"></a>
<a id="schema_Handshakes"></a>
<a id="tocShandshakes"></a>
<a id="tocshandshakes"></a>

```json
[
  {
    "Id": {},
    "Arn": {},
    "Parties": {},
    "State": {},
    "RequestedTimestamp": {},
    "ExpirationTimestamp": {},
    "Action": {},
    "Resources": {}
  }
]
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

<h2 id="tocS_OrganizationalUnits">OrganizationalUnits</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationalunits"></a>
<a id="schema_OrganizationalUnits"></a>
<a id="tocSorganizationalunits"></a>
<a id="tocsorganizationalunits"></a>

```json
[
  {
    "Id": {},
    "Arn": {},
    "Name": {}
  }
]
```

<h2 id="tocS_Parents">Parents</h2>
<!-- backwards compatibility -->
<a id="schemaparents"></a>
<a id="schema_Parents"></a>
<a id="tocSparents"></a>
<a id="tocsparents"></a>

```json
[
  {
    "Id": {},
    "Type": {}
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
[
  {
    "Id": {},
    "Arn": {},
    "Name": {},
    "Description": {},
    "Type": {},
    "AwsManaged": {}
  }
]
```

<h2 id="tocS_Roots">Roots</h2>
<!-- backwards compatibility -->
<a id="schemaroots"></a>
<a id="schema_Roots"></a>
<a id="tocSroots"></a>
<a id="tocsroots"></a>

```json
[
  {
    "Id": {},
    "Arn": {},
    "Name": {},
    "PolicyTypes": {}
  }
]
```

<h2 id="tocS_TaggableResourceId">TaggableResourceId</h2>
<!-- backwards compatibility -->
<a id="schemataggableresourceid"></a>
<a id="schema_TaggableResourceId"></a>
<a id="tocStaggableresourceid"></a>
<a id="tocstaggableresourceid"></a>

```json
"string"
```

<h2 id="tocS_PolicyTargets">PolicyTargets</h2>
<!-- backwards compatibility -->
<a id="schemapolicytargets"></a>
<a id="schema_PolicyTargets"></a>
<a id="tocSpolicytargets"></a>
<a id="tocspolicytargets"></a>

```json
[
  {
    "TargetId": {},
    "Arn": {},
    "Name": {},
    "Type": {}
  }
]
```

<h2 id="tocS_OrganizationId">OrganizationId</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationid"></a>
<a id="schema_OrganizationId"></a>
<a id="tocSorganizationid"></a>
<a id="tocsorganizationid"></a>

```json
"string"
```

<h2 id="tocS_OrganizationArn">OrganizationArn</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationarn"></a>
<a id="schema_OrganizationArn"></a>
<a id="tocSorganizationarn"></a>
<a id="tocsorganizationarn"></a>

```json
"string"
```

<h2 id="tocS_PolicyTypes">PolicyTypes</h2>
<!-- backwards compatibility -->
<a id="schemapolicytypes"></a>
<a id="schema_PolicyTypes"></a>
<a id="tocSpolicytypes"></a>
<a id="tocspolicytypes"></a>

```json
[
  {
    "Type": {},
    "Status": {}
  }
]
```

<h2 id="tocS_OrganizationalUnitArn">OrganizationalUnitArn</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationalunitarn"></a>
<a id="schema_OrganizationalUnitArn"></a>
<a id="tocSorganizationalunitarn"></a>
<a id="tocsorganizationalunitarn"></a>

```json
"string"
```

<h2 id="tocS_ParentType">ParentType</h2>
<!-- backwards compatibility -->
<a id="schemaparenttype"></a>
<a id="schema_ParentType"></a>
<a id="tocSparenttype"></a>
<a id="tocsparenttype"></a>

```json
"ROOT"
```

<h2 id="tocS_Parent">Parent</h2>
<!-- backwards compatibility -->
<a id="schemaparent"></a>
<a id="schema_Parent"></a>
<a id="tocSparent"></a>
<a id="tocsparent"></a>

```json
{
  "Id": {},
  "Type": {}
}
```

Contains information about either a root or an organizational unit (OU) that can contain OUs or accounts in an organization.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Type|object|false|none|none|

<h2 id="tocS_PolicySummary">PolicySummary</h2>
<!-- backwards compatibility -->
<a id="schemapolicysummary"></a>
<a id="schema_PolicySummary"></a>
<a id="tocSpolicysummary"></a>
<a id="tocspolicysummary"></a>

```json
{
  "Id": {},
  "Arn": {},
  "Name": {},
  "Description": {},
  "Type": {},
  "AwsManaged": {}
}
```

Contains information about a policy, but does not include the content. To see the content of a policy, see <a>DescribePolicy</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|Type|object|false|none|none|
|AwsManaged|object|false|none|none|

<h2 id="tocS_PolicyArn">PolicyArn</h2>
<!-- backwards compatibility -->
<a id="schemapolicyarn"></a>
<a id="schema_PolicyArn"></a>
<a id="tocSpolicyarn"></a>
<a id="tocspolicyarn"></a>

```json
"string"
```

<h2 id="tocS_TargetName">TargetName</h2>
<!-- backwards compatibility -->
<a id="schematargetname"></a>
<a id="schema_TargetName"></a>
<a id="tocStargetname"></a>
<a id="tocstargetname"></a>

```json
"string"
```

<h2 id="tocS_TargetType">TargetType</h2>
<!-- backwards compatibility -->
<a id="schematargettype"></a>
<a id="schema_TargetType"></a>
<a id="tocStargettype"></a>
<a id="tocstargettype"></a>

```json
"ACCOUNT"
```

<h2 id="tocS_PolicyTargetSummary">PolicyTargetSummary</h2>
<!-- backwards compatibility -->
<a id="schemapolicytargetsummary"></a>
<a id="schema_PolicyTargetSummary"></a>
<a id="tocSpolicytargetsummary"></a>
<a id="tocspolicytargetsummary"></a>

```json
{
  "TargetId": {},
  "Arn": {},
  "Name": {},
  "Type": {}
}
```

Contains information about a root, OU, or account that a policy is attached to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetId|object|false|none|none|
|Arn|object|false|none|none|
|Name|object|false|none|none|
|Type|object|false|none|none|

<h2 id="tocS_PolicyTypeStatus">PolicyTypeStatus</h2>
<!-- backwards compatibility -->
<a id="schemapolicytypestatus"></a>
<a id="schema_PolicyTypeStatus"></a>
<a id="tocSpolicytypestatus"></a>
<a id="tocspolicytypestatus"></a>

```json
"ENABLED"
```

<h2 id="tocS_PolicyTypeSummary">PolicyTypeSummary</h2>
<!-- backwards compatibility -->
<a id="schemapolicytypesummary"></a>
<a id="schema_PolicyTypeSummary"></a>
<a id="tocSpolicytypesummary"></a>
<a id="tocspolicytypesummary"></a>

```json
{
  "Type": {},
  "Status": {}
}
```

Contains information about a policy type and its status in the associated root.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_ResourcePolicyContent">ResourcePolicyContent</h2>
<!-- backwards compatibility -->
<a id="schemaresourcepolicycontent"></a>
<a id="schema_ResourcePolicyContent"></a>
<a id="tocSresourcepolicycontent"></a>
<a id="tocsresourcepolicycontent"></a>

```json
"string"
```

<h2 id="tocS_ResourcePolicySummary">ResourcePolicySummary</h2>
<!-- backwards compatibility -->
<a id="schemaresourcepolicysummary"></a>
<a id="schema_ResourcePolicySummary"></a>
<a id="tocSresourcepolicysummary"></a>
<a id="tocsresourcepolicysummary"></a>

```json
{
  "Id": {},
  "Arn": {}
}
```

A structure that contains resource policy ID and Amazon Resource Name (ARN).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|

<h2 id="tocS_ResourcePolicyArn">ResourcePolicyArn</h2>
<!-- backwards compatibility -->
<a id="schemaresourcepolicyarn"></a>
<a id="schema_ResourcePolicyArn"></a>
<a id="tocSresourcepolicyarn"></a>
<a id="tocsresourcepolicyarn"></a>

```json
"string"
```

<h2 id="tocS_ResourcePolicyId">ResourcePolicyId</h2>
<!-- backwards compatibility -->
<a id="schemaresourcepolicyid"></a>
<a id="schema_ResourcePolicyId"></a>
<a id="tocSresourcepolicyid"></a>
<a id="tocsresourcepolicyid"></a>

```json
"string"
```

<h2 id="tocS_RootArn">RootArn</h2>
<!-- backwards compatibility -->
<a id="schemarootarn"></a>
<a id="schema_RootArn"></a>
<a id="tocSrootarn"></a>
<a id="tocsrootarn"></a>

```json
"string"
```

<h2 id="tocS_RootName">RootName</h2>
<!-- backwards compatibility -->
<a id="schemarootname"></a>
<a id="schema_RootName"></a>
<a id="tocSrootname"></a>
<a id="tocsrootname"></a>

```json
"string"
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

<p>A custom key-value pair associated with a resource within your organization.</p> <p>You can attach tags to any of the following organization resources.</p> <ul> <li> <p>Amazon Web Services account</p> </li> <li> <p>Organizational unit (OU)</p> </li> <li> <p>Organization root</p> </li> <li> <p>Policy</p> </li> </ul>

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
