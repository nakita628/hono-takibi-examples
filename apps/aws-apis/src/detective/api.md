<h1 id="amazon-detective">Amazon Detective v2018-10-26</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>Detective uses machine learning and purpose-built visualizations to help you to analyze and investigate security issues across your Amazon Web Services (Amazon Web Services) workloads. Detective automatically extracts time-based events such as login attempts, API calls, and network traffic from CloudTrail and Amazon Virtual Private Cloud (Amazon VPC) flow logs. It also extracts findings detected by Amazon GuardDuty.</p> <p>The Detective API primarily supports the creation and management of behavior graphs. A behavior graph contains the extracted data from a set of member accounts, and is created and managed by an administrator account.</p> <p>To add a member account to the behavior graph, the administrator account sends an invitation to the account. When the account accepts the invitation, it becomes a member account in the behavior graph.</p> <p>Detective is also integrated with Organizations. The organization management account designates the Detective administrator account for the organization. That account becomes the administrator account for the organization behavior graph. The Detective administrator account is also the delegated administrator account for Detective in Organizations.</p> <p>The Detective administrator account can enable any organization account as a member account in the organization behavior graph. The organization accounts do not receive invitations. The Detective administrator account can also invite other accounts to the organization behavior graph.</p> <p>Every behavior graph is specific to a Region. You can only use the API to manage behavior graphs that belong to the Region that is associated with the currently selected endpoint.</p> <p>The administrator account for a behavior graph can use the Detective API to do the following:</p> <ul> <li> <p>Enable and disable Detective. Enabling Detective creates a new behavior graph.</p> </li> <li> <p>View the list of member accounts in a behavior graph.</p> </li> <li> <p>Add member accounts to a behavior graph.</p> </li> <li> <p>Remove member accounts from a behavior graph.</p> </li> <li> <p>Apply tags to a behavior graph.</p> </li> </ul> <p>The organization management account can use the Detective API to select the delegated administrator for Detective.</p> <p>The Detective administrator account for an organization can use the Detective API to do the following:</p> <ul> <li> <p>Perform all of the functions of an administrator account.</p> </li> <li> <p>Determine whether to automatically enable new organization accounts as member accounts in the organization behavior graph.</p> </li> </ul> <p>An invited member account can use the Detective API to do the following:</p> <ul> <li> <p>View the list of behavior graphs that they are invited to.</p> </li> <li> <p>Accept an invitation to contribute to a behavior graph.</p> </li> <li> <p>Decline an invitation to contribute to a behavior graph.</p> </li> <li> <p>Remove their account from a behavior graph.</p> </li> </ul> <p>All API actions are logged as CloudTrail events. See <a href="https://docs.aws.amazon.com/detective/latest/adminguide/logging-using-cloudtrail.html">Logging Detective API Calls with CloudTrail</a>.</p> <note> <p>We replaced the term "master account" with the term "administrator account." An administrator account is used to centrally manage multiple accounts. In the case of Detective, the administrator account manages the accounts in their behavior graph.</p> </note>

Base URLs:

* <a href="http://api.detective.us-east-1.amazonaws.com">http://api.detective.us-east-1.amazonaws.com</a> - The Amazon Detective multi-region endpoint

* <a href="https://api.detective.us-east-1.amazonaws.com">https://api.detective.us-east-1.amazonaws.com</a> - The Amazon Detective multi-region endpoint

* <a href="http://api.detective.cn-north-1.amazonaws.com.cn">http://api.detective.cn-north-1.amazonaws.com.cn</a> - The Amazon Detective endpoint for China (Beijing) and China (Ningxia)

* <a href="https://api.detective.cn-north-1.amazonaws.com.cn">https://api.detective.cn-north-1.amazonaws.com.cn</a> - The Amazon Detective endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/detective/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-detective-default">Default</h1>

## AcceptInvitation

<a id="opIdAcceptInvitation"></a>

> Code samples

```bash
curl https://detective.us-east-1.amazonaws.com/invitation \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "GraphArn": "string"
  }'
```

`PUT /invitation`

<p>Accepts an invitation for the member account to contribute data to a behavior graph. This operation can only be called by an invited member account. </p> <p>The request provides the ARN of behavior graph.</p> <p>The member account status in the graph must be <code>INVITED</code>.</p>

> Body parameter

```json
{
  "GraphArn": "string"
}
```

<h3 id="acceptinvitation-parameters">Parameters</h3>

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
|» GraphArn|body|string|true|<p>The ARN of the behavior graph that the member account is accepting the invitation for.</p> <p>The member account status in the behavior graph must be <code>INVITED</code>.</p>|

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

<h3 id="acceptinvitation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchGetGraphMemberDatasources

<a id="opIdBatchGetGraphMemberDatasources"></a>

> Code samples

```bash
curl https://detective.us-east-1.amazonaws.com/graph/datasources/get \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "GraphArn": "string",
    "AccountIds": [
      "stringstring"
    ]
  }'
```

`POST /graph/datasources/get`

Gets data source package information for the behavior graph.

> Body parameter

```json
{
  "GraphArn": "string",
  "AccountIds": [
    "stringstring"
  ]
}
```

<h3 id="batchgetgraphmemberdatasources-parameters">Parameters</h3>

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
|» GraphArn|body|string|true|The ARN of the behavior graph.|
|» AccountIds|body|[[AccountId](#schemaaccountid)]|true|The list of Amazon Web Services accounts to get data source package information on.|

> Example responses

> 200 Response

```json
{
  "MemberDatasources": {},
  "UnprocessedAccounts": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="batchgetgraphmemberdatasources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchGetGraphMemberDatasourcesResponse](#schemabatchgetgraphmemberdatasourcesresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchGetMembershipDatasources

<a id="opIdBatchGetMembershipDatasources"></a>

> Code samples

```bash
curl https://detective.us-east-1.amazonaws.com/membership/datasources/get \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "GraphArns": [
      "string"
    ]
  }'
```

`POST /membership/datasources/get`

Gets information on the data source package history for an account.

> Body parameter

```json
{
  "GraphArns": [
    "string"
  ]
}
```

<h3 id="batchgetmembershipdatasources-parameters">Parameters</h3>

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
|» GraphArns|body|[[GraphArn](#schemagrapharn)]|true|The ARN of the behavior graph.|

> Example responses

> 200 Response

```json
{
  "MembershipDatasources": {},
  "UnprocessedGraphs": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="batchgetmembershipdatasources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchGetMembershipDatasourcesResponse](#schemabatchgetmembershipdatasourcesresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateGraph

<a id="opIdCreateGraph"></a>

> Code samples

```bash
curl https://detective.us-east-1.amazonaws.com/graph \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /graph`

<p>Creates a new behavior graph for the calling account, and sets that account as the administrator account. This operation is called by the account that is enabling Detective.</p> <p>Before you try to enable Detective, make sure that your account has been enrolled in Amazon GuardDuty for at least 48 hours. If you do not meet this requirement, you cannot enable Detective. If you do meet the GuardDuty prerequisite, then when you make the request to enable Detective, it checks whether your data volume is within the Detective quota. If it exceeds the quota, then you cannot enable Detective. </p> <p>The operation also enables Detective for the calling account in the currently selected Region. It returns the ARN of the new behavior graph.</p> <p> <code>CreateGraph</code> triggers a process to create the corresponding data tables for the new behavior graph.</p> <p>An account can only be the administrator account for one behavior graph within a Region. If the same account calls <code>CreateGraph</code> with the same administrator account, it always returns the same behavior graph ARN. It does not create a new behavior graph.</p>

> Body parameter

```json
{
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="creategraph-parameters">Parameters</h3>

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
|» Tags|body|object|false|The tags to assign to the new behavior graph. You can add up to 50 tags. For each tag, you provide the tag key and the tag value. Each tag key can contain up to 128 characters. Each tag value can contain up to 256 characters.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 200 Response

```json
{
  "GraphArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="creategraph-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateGraphResponse](#schemacreategraphresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateMembers

<a id="opIdCreateMembers"></a>

> Code samples

```bash
curl https://detective.us-east-1.amazonaws.com/graph/members \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "GraphArn": "string",
    "Message": "string",
    "DisableEmailNotification": true,
    "Accounts": [
      {
        "AccountId": {},
        "EmailAddress": {}
      }
    ]
  }'
```

`POST /graph/members`

<p> <code>CreateMembers</code> is used to send invitations to accounts. For the organization behavior graph, the Detective administrator account uses <code>CreateMembers</code> to enable organization accounts as member accounts.</p> <p>For invited accounts, <code>CreateMembers</code> sends a request to invite the specified Amazon Web Services accounts to be member accounts in the behavior graph. This operation can only be called by the administrator account for a behavior graph. </p> <p> <code>CreateMembers</code> verifies the accounts and then invites the verified accounts. The administrator can optionally specify to not send invitation emails to the member accounts. This would be used when the administrator manages their member accounts centrally.</p> <p>For organization accounts in the organization behavior graph, <code>CreateMembers</code> attempts to enable the accounts. The organization accounts do not receive invitations.</p> <p>The request provides the behavior graph ARN and the list of accounts to invite or to enable.</p> <p>The response separates the requested accounts into two lists:</p> <ul> <li> <p>The accounts that <code>CreateMembers</code> was able to process. For invited accounts, includes member accounts that are being verified, that have passed verification and are to be invited, and that have failed verification. For organization accounts in the organization behavior graph, includes accounts that can be enabled and that cannot be enabled.</p> </li> <li> <p>The accounts that <code>CreateMembers</code> was unable to process. This list includes accounts that were already invited to be member accounts in the behavior graph.</p> </li> </ul>

> Body parameter

```json
{
  "GraphArn": "string",
  "Message": "string",
  "DisableEmailNotification": true,
  "Accounts": [
    {
      "AccountId": {},
      "EmailAddress": {}
    }
  ]
}
```

<h3 id="createmembers-parameters">Parameters</h3>

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
|» GraphArn|body|string|true|The ARN of the behavior graph.|
|» Message|body|string|false|Customized message text to include in the invitation email message to the invited member accounts.|
|» DisableEmailNotification|body|boolean|false|<p>if set to <code>true</code>, then the invited accounts do not receive email notifications. By default, this is set to <code>false</code>, and the invited accounts receive email notifications.</p> <p>Organization accounts in the organization behavior graph do not receive email notifications.</p>|
|» Accounts|body|[[Account](#schemaaccount)]|true|The list of Amazon Web Services accounts to invite or to enable. You can invite or enable up to 50 accounts at a time. For each invited account, the account list contains the account identifier and the Amazon Web Services account root user email address. For organization accounts in the organization behavior graph, the email address is not required.|

> Example responses

> 200 Response

```json
{
  "Members": {},
  "UnprocessedAccounts": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="createmembers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateMembersResponse](#schemacreatemembersresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteGraph

<a id="opIdDeleteGraph"></a>

> Code samples

```bash
curl https://detective.us-east-1.amazonaws.com/graph/removal \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "GraphArn": "string"
  }'
```

`POST /graph/removal`

<p>Disables the specified behavior graph and queues it to be deleted. This operation removes the behavior graph from each member account's list of behavior graphs.</p> <p> <code>DeleteGraph</code> can only be called by the administrator account for a behavior graph.</p>

> Body parameter

```json
{
  "GraphArn": "string"
}
```

<h3 id="deletegraph-parameters">Parameters</h3>

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
|» GraphArn|body|string|true|The ARN of the behavior graph to disable.|

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

<h3 id="deletegraph-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteMembers

<a id="opIdDeleteMembers"></a>

> Code samples

```bash
curl https://detective.us-east-1.amazonaws.com/graph/members/removal \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "GraphArn": "string",
    "AccountIds": [
      "stringstring"
    ]
  }'
```

`POST /graph/members/removal`

<p>Removes the specified member accounts from the behavior graph. The removed accounts no longer contribute data to the behavior graph. This operation can only be called by the administrator account for the behavior graph.</p> <p>For invited accounts, the removed accounts are deleted from the list of accounts in the behavior graph. To restore the account, the administrator account must send another invitation.</p> <p>For organization accounts in the organization behavior graph, the Detective administrator account can always enable the organization account again. Organization accounts that are not enabled as member accounts are not included in the <code>ListMembers</code> results for the organization behavior graph.</p> <p>An administrator account cannot use <code>DeleteMembers</code> to remove their own account from the behavior graph. To disable a behavior graph, the administrator account uses the <code>DeleteGraph</code> API method.</p>

> Body parameter

```json
{
  "GraphArn": "string",
  "AccountIds": [
    "stringstring"
  ]
}
```

<h3 id="deletemembers-parameters">Parameters</h3>

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
|» GraphArn|body|string|true|The ARN of the behavior graph to remove members from.|
|» AccountIds|body|[[AccountId](#schemaaccountid)]|true|The list of Amazon Web Services account identifiers for the member accounts to remove from the behavior graph. You can remove up to 50 member accounts at a time.|

> Example responses

> 200 Response

```json
{
  "AccountIds": {},
  "UnprocessedAccounts": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="deletemembers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteMembersResponse](#schemadeletemembersresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeOrganizationConfiguration

<a id="opIdDescribeOrganizationConfiguration"></a>

> Code samples

```bash
curl https://detective.us-east-1.amazonaws.com/orgs/describeOrganizationConfiguration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "GraphArn": "string"
  }'
```

`POST /orgs/describeOrganizationConfiguration`

<p>Returns information about the configuration for the organization behavior graph. Currently indicates whether to automatically enable new organization accounts as member accounts.</p> <p>Can only be called by the Detective administrator account for the organization. </p>

> Body parameter

```json
{
  "GraphArn": "string"
}
```

<h3 id="describeorganizationconfiguration-parameters">Parameters</h3>

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
|» GraphArn|body|string|true|The ARN of the organization behavior graph.|

> Example responses

> 200 Response

```json
{
  "AutoEnable": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="describeorganizationconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeOrganizationConfigurationResponse](#schemadescribeorganizationconfigurationresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisableOrganizationAdminAccount

<a id="opIdDisableOrganizationAdminAccount"></a>

> Code samples

```bash
curl https://detective.us-east-1.amazonaws.com/orgs/disableAdminAccount \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /orgs/disableAdminAccount`

<p>Removes the Detective administrator account in the current Region. Deletes the organization behavior graph.</p> <p>Can only be called by the organization management account.</p> <p>Removing the Detective administrator account does not affect the delegated administrator account for Detective in Organizations.</p> <p>To remove the delegated administrator account in Organizations, use the Organizations API. Removing the delegated administrator account also removes the Detective administrator account in all Regions, except for Regions where the Detective administrator account is the organization management account.</p>

<h3 id="disableorganizationadminaccount-parameters">Parameters</h3>

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

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="disableorganizationadminaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateMembership

<a id="opIdDisassociateMembership"></a>

> Code samples

```bash
curl https://detective.us-east-1.amazonaws.com/membership/removal \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "GraphArn": "string"
  }'
```

`POST /membership/removal`

<p>Removes the member account from the specified behavior graph. This operation can only be called by an invited member account that has the <code>ENABLED</code> status.</p> <p> <code>DisassociateMembership</code> cannot be called by an organization account in the organization behavior graph. For the organization behavior graph, the Detective administrator account determines which organization accounts to enable or disable as member accounts.</p>

> Body parameter

```json
{
  "GraphArn": "string"
}
```

<h3 id="disassociatemembership-parameters">Parameters</h3>

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
|» GraphArn|body|string|true|<p>The ARN of the behavior graph to remove the member account from.</p> <p>The member account's member status in the behavior graph must be <code>ENABLED</code>.</p>|

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

<h3 id="disassociatemembership-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## EnableOrganizationAdminAccount

<a id="opIdEnableOrganizationAdminAccount"></a>

> Code samples

```bash
curl https://detective.us-east-1.amazonaws.com/orgs/enableAdminAccount \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AccountId": "stringstring"
  }'
```

`POST /orgs/enableAdminAccount`

<p>Designates the Detective administrator account for the organization in the current Region.</p> <p>If the account does not have Detective enabled, then enables Detective for that account and creates a new behavior graph.</p> <p>Can only be called by the organization management account.</p> <p>If the organization has a delegated administrator account in Organizations, then the Detective administrator account must be either the delegated administrator account or the organization management account.</p> <p>If the organization does not have a delegated administrator account in Organizations, then you can choose any account in the organization. If you choose an account other than the organization management account, Detective calls Organizations to make that account the delegated administrator account for Detective. The organization management account cannot be the delegated administrator account.</p>

> Body parameter

```json
{
  "AccountId": "stringstring"
}
```

<h3 id="enableorganizationadminaccount-parameters">Parameters</h3>

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
|» AccountId|body|string|true|The Amazon Web Services account identifier of the account to designate as the Detective administrator account for the organization.|

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

<h3 id="enableorganizationadminaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetMembers

<a id="opIdGetMembers"></a>

> Code samples

```bash
curl https://detective.us-east-1.amazonaws.com/graph/members/get \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "GraphArn": "string",
    "AccountIds": [
      "stringstring"
    ]
  }'
```

`POST /graph/members/get`

Returns the membership details for specified member accounts for a behavior graph.

> Body parameter

```json
{
  "GraphArn": "string",
  "AccountIds": [
    "stringstring"
  ]
}
```

<h3 id="getmembers-parameters">Parameters</h3>

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
|» GraphArn|body|string|true|The ARN of the behavior graph for which to request the member details.|
|» AccountIds|body|[[AccountId](#schemaaccountid)]|true|<p>The list of Amazon Web Services account identifiers for the member account for which to return member details. You can request details for up to 50 member accounts at a time.</p> <p>You cannot use <code>GetMembers</code> to retrieve information about member accounts that were removed from the behavior graph.</p>|

> Example responses

> 200 Response

```json
{
  "MemberDetails": {},
  "UnprocessedAccounts": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getmembers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMembersResponse](#schemagetmembersresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDatasourcePackages

<a id="opIdListDatasourcePackages"></a>

> Code samples

```bash
curl https://detective.us-east-1.amazonaws.com/graph/datasources/list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "GraphArn": "string",
    "NextToken": "string",
    "MaxResults": 1
  }'
```

`POST /graph/datasources/list`

Lists data source packages in the behavior graph.

> Body parameter

```json
{
  "GraphArn": "string",
  "NextToken": "string",
  "MaxResults": 1
}
```

<h3 id="listdatasourcepackages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» GraphArn|body|string|true|The ARN of the behavior graph.|
|» NextToken|body|string|false|For requests to get the next page of results, the pagination token that was returned with the previous set of results. The initial request does not include a pagination token.|
|» MaxResults|body|integer|false|The maximum number of results to return.|

> Example responses

> 200 Response

```json
{
  "DatasourcePackages": {
    "property1": {
      "DatasourcePackageIngestState": {},
      "LastIngestStateChange": {
        "property1": {
          "Timestamp": {}
        },
        "property2": {
          "Timestamp": {}
        }
      }
    },
    "property2": {
      "DatasourcePackageIngestState": {},
      "LastIngestStateChange": {
        "property1": {
          "Timestamp": {}
        },
        "property2": {
          "Timestamp": {}
        }
      }
    }
  },
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

<h3 id="listdatasourcepackages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDatasourcePackagesResponse](#schemalistdatasourcepackagesresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListGraphs

<a id="opIdListGraphs"></a>

> Code samples

```bash
curl https://detective.us-east-1.amazonaws.com/graphs/list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "NextToken": "string",
    "MaxResults": 1
  }'
```

`POST /graphs/list`

<p>Returns the list of behavior graphs that the calling account is an administrator account of. This operation can only be called by an administrator account.</p> <p>Because an account can currently only be the administrator of one behavior graph within a Region, the results always contain a single behavior graph.</p>

> Body parameter

```json
{
  "NextToken": "string",
  "MaxResults": 1
}
```

<h3 id="listgraphs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» NextToken|body|string|false|For requests to get the next page of results, the pagination token that was returned with the previous set of results. The initial request does not include a pagination token.|
|» MaxResults|body|integer|false|The maximum number of graphs to return at a time. The total must be less than the overall limit on the number of results to return, which is currently 200.|

> Example responses

> 200 Response

```json
{
  "GraphList": {},
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

<h3 id="listgraphs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListGraphsResponse](#schemalistgraphsresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListInvitations

<a id="opIdListInvitations"></a>

> Code samples

```bash
curl https://detective.us-east-1.amazonaws.com/invitations/list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "NextToken": "string",
    "MaxResults": 1
  }'
```

`POST /invitations/list`

<p>Retrieves the list of open and accepted behavior graph invitations for the member account. This operation can only be called by an invited member account.</p> <p>Open invitations are invitations that the member account has not responded to.</p> <p>The results do not include behavior graphs for which the member account declined the invitation. The results also do not include behavior graphs that the member account resigned from or was removed from.</p>

> Body parameter

```json
{
  "NextToken": "string",
  "MaxResults": 1
}
```

<h3 id="listinvitations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» NextToken|body|string|false|For requests to retrieve the next page of results, the pagination token that was returned with the previous page of results. The initial request does not include a pagination token.|
|» MaxResults|body|integer|false|The maximum number of behavior graph invitations to return in the response. The total must be less than the overall limit on the number of results to return, which is currently 200.|

> Example responses

> 200 Response

```json
{
  "Invitations": {},
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

<h3 id="listinvitations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListInvitationsResponse](#schemalistinvitationsresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListMembers

<a id="opIdListMembers"></a>

> Code samples

```bash
curl https://detective.us-east-1.amazonaws.com/graph/members/list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "GraphArn": "string",
    "NextToken": "string",
    "MaxResults": 1
  }'
```

`POST /graph/members/list`

<p>Retrieves the list of member accounts for a behavior graph.</p> <p>For invited accounts, the results do not include member accounts that were removed from the behavior graph.</p> <p>For the organization behavior graph, the results do not include organization accounts that the Detective administrator account has not enabled as member accounts.</p>

> Body parameter

```json
{
  "GraphArn": "string",
  "NextToken": "string",
  "MaxResults": 1
}
```

<h3 id="listmembers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» GraphArn|body|string|true|The ARN of the behavior graph for which to retrieve the list of member accounts.|
|» NextToken|body|string|false|For requests to retrieve the next page of member account results, the pagination token that was returned with the previous page of results. The initial request does not include a pagination token.|
|» MaxResults|body|integer|false|The maximum number of member accounts to include in the response. The total must be less than the overall limit on the number of results to return, which is currently 200.|

> Example responses

> 200 Response

```json
{
  "MemberDetails": {},
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

<h3 id="listmembers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListMembersResponse](#schemalistmembersresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListOrganizationAdminAccounts

<a id="opIdListOrganizationAdminAccounts"></a>

> Code samples

```bash
curl https://detective.us-east-1.amazonaws.com/orgs/adminAccountslist \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "NextToken": "string",
    "MaxResults": 1
  }'
```

`POST /orgs/adminAccountslist`

Returns information about the Detective administrator account for an organization. Can only be called by the organization management account.

> Body parameter

```json
{
  "NextToken": "string",
  "MaxResults": 1
}
```

<h3 id="listorganizationadminaccounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» NextToken|body|string|false|For requests to get the next page of results, the pagination token that was returned with the previous set of results. The initial request does not include a pagination token.|
|» MaxResults|body|integer|false|The maximum number of results to return.|

> Example responses

> 200 Response

```json
{
  "Administrators": {},
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

<h3 id="listorganizationadminaccounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListOrganizationAdminAccountsResponse](#schemalistorganizationadminaccountsresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://detective.us-east-1.amazonaws.com/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{ResourceArn}`

Returns the tag values that are assigned to a behavior graph.

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceArn|path|string|true|The ARN of the behavior graph for which to retrieve the tag values.|
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
  "Tags": {
    "property1": "string",
    "property2": "string"
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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://detective.us-east-1.amazonaws.com/tags/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /tags/{ResourceArn}`

Applies tag values to a behavior graph.

> Body parameter

```json
{
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="tagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceArn|path|string|true|The ARN of the behavior graph to assign the tags to.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Tags|body|object|true|The tags to assign to the behavior graph. You can add up to 50 tags. For each tag, you provide the tag key and the tag value. Each tag key can contain up to 128 characters. Each tag value can contain up to 256 characters.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RejectInvitation

<a id="opIdRejectInvitation"></a>

> Code samples

```bash
curl https://detective.us-east-1.amazonaws.com/invitation/removal \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "GraphArn": "string"
  }'
```

`POST /invitation/removal`

<p>Rejects an invitation to contribute the account data to a behavior graph. This operation must be called by an invited member account that has the <code>INVITED</code> status.</p> <p> <code>RejectInvitation</code> cannot be called by an organization account in the organization behavior graph. In the organization behavior graph, organization accounts do not receive an invitation.</p>

> Body parameter

```json
{
  "GraphArn": "string"
}
```

<h3 id="rejectinvitation-parameters">Parameters</h3>

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
|» GraphArn|body|string|true|<p>The ARN of the behavior graph to reject the invitation to.</p> <p>The member account's current member status in the behavior graph must be <code>INVITED</code>.</p>|

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

<h3 id="rejectinvitation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartMonitoringMember

<a id="opIdStartMonitoringMember"></a>

> Code samples

```bash
curl https://detective.us-east-1.amazonaws.com/graph/member/monitoringstate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "GraphArn": "string",
    "AccountId": "stringstring"
  }'
```

`POST /graph/member/monitoringstate`

<p>Sends a request to enable data ingest for a member account that has a status of <code>ACCEPTED_BUT_DISABLED</code>.</p> <p>For valid member accounts, the status is updated as follows.</p> <ul> <li> <p>If Detective enabled the member account, then the new status is <code>ENABLED</code>.</p> </li> <li> <p>If Detective cannot enable the member account, the status remains <code>ACCEPTED_BUT_DISABLED</code>. </p> </li> </ul>

> Body parameter

```json
{
  "GraphArn": "string",
  "AccountId": "stringstring"
}
```

<h3 id="startmonitoringmember-parameters">Parameters</h3>

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
|» GraphArn|body|string|true|The ARN of the behavior graph.|
|» AccountId|body|string|true|<p>The account ID of the member account to try to enable.</p> <p>The account must be an invited member account with a status of <code>ACCEPTED_BUT_DISABLED</code>. </p>|

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

<h3 id="startmonitoringmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://detective.us-east-1.amazonaws.com/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{ResourceArn}#tagKeys`

Removes tags from a behavior graph.

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceArn|path|string|true|The ARN of the behavior graph to remove the tags from.|
|tagKeys|query|[[TagKey](#schematagkey)]|true|The tag keys of the tags to remove from the behavior graph. You can remove up to 50 tags at a time.|
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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDatasourcePackages

<a id="opIdUpdateDatasourcePackages"></a>

> Code samples

```bash
curl https://detective.us-east-1.amazonaws.com/graph/datasources/update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "GraphArn": "string",
    "DatasourcePackages": [
      "DETECTIVE_CORE"
    ]
  }'
```

`POST /graph/datasources/update`

Starts a data source packages for the behavior graph.

> Body parameter

```json
{
  "GraphArn": "string",
  "DatasourcePackages": [
    "DETECTIVE_CORE"
  ]
}
```

<h3 id="updatedatasourcepackages-parameters">Parameters</h3>

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
|» GraphArn|body|string|true|The ARN of the behavior graph.|
|» DatasourcePackages|body|[[DatasourcePackage](#schemadatasourcepackage)]|true|The data source package start for the behavior graph.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» DatasourcePackages|DETECTIVE_CORE|
|» DatasourcePackages|EKS_AUDIT|

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

<h3 id="updatedatasourcepackages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateOrganizationConfiguration

<a id="opIdUpdateOrganizationConfiguration"></a>

> Code samples

```bash
curl https://detective.us-east-1.amazonaws.com/orgs/updateOrganizationConfiguration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "GraphArn": "string",
    "AutoEnable": true
  }'
```

`POST /orgs/updateOrganizationConfiguration`

Updates the configuration for the Organizations integration in the current Region. Can only be called by the Detective administrator account for the organization.

> Body parameter

```json
{
  "GraphArn": "string",
  "AutoEnable": true
}
```

<h3 id="updateorganizationconfiguration-parameters">Parameters</h3>

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
|» GraphArn|body|string|true|The ARN of the organization behavior graph.|
|» AutoEnable|body|boolean|false|Indicates whether to automatically enable new organization accounts as member accounts in the organization behavior graph.|

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

<h3 id="updateorganizationconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AccessDeniedException">AccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdeniedexception"></a>
<a id="schema_AccessDeniedException"></a>
<a id="tocSaccessdeniedexception"></a>
<a id="tocsaccessdeniedexception"></a>

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

<h2 id="tocS_InternalServerException">InternalServerException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserverexception"></a>
<a id="schema_InternalServerException"></a>
<a id="tocSinternalserverexception"></a>
<a id="tocsinternalserverexception"></a>

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

<h2 id="tocS_ValidationException">ValidationException</h2>
<!-- backwards compatibility -->
<a id="schemavalidationexception"></a>
<a id="schema_ValidationException"></a>
<a id="tocSvalidationexception"></a>
<a id="tocsvalidationexception"></a>

```json
null
```

<h2 id="tocS_BatchGetGraphMemberDatasourcesResponse">BatchGetGraphMemberDatasourcesResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetgraphmemberdatasourcesresponse"></a>
<a id="schema_BatchGetGraphMemberDatasourcesResponse"></a>
<a id="tocSbatchgetgraphmemberdatasourcesresponse"></a>
<a id="tocsbatchgetgraphmemberdatasourcesresponse"></a>

```json
{
  "MemberDatasources": {},
  "UnprocessedAccounts": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MemberDatasources|object|false|none|none|
|UnprocessedAccounts|object|false|none|none|

<h2 id="tocS_AccountId">AccountId</h2>
<!-- backwards compatibility -->
<a id="schemaaccountid"></a>
<a id="schema_AccountId"></a>
<a id="tocSaccountid"></a>
<a id="tocsaccountid"></a>

```json
"stringstring"
```

<h2 id="tocS_BatchGetMembershipDatasourcesResponse">BatchGetMembershipDatasourcesResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetmembershipdatasourcesresponse"></a>
<a id="schema_BatchGetMembershipDatasourcesResponse"></a>
<a id="tocSbatchgetmembershipdatasourcesresponse"></a>
<a id="tocsbatchgetmembershipdatasourcesresponse"></a>

```json
{
  "MembershipDatasources": {},
  "UnprocessedGraphs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MembershipDatasources|object|false|none|none|
|UnprocessedGraphs|object|false|none|none|

<h2 id="tocS_GraphArn">GraphArn</h2>
<!-- backwards compatibility -->
<a id="schemagrapharn"></a>
<a id="schema_GraphArn"></a>
<a id="tocSgrapharn"></a>
<a id="tocsgrapharn"></a>

```json
"string"
```

<h2 id="tocS_CreateGraphResponse">CreateGraphResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreategraphresponse"></a>
<a id="schema_CreateGraphResponse"></a>
<a id="tocScreategraphresponse"></a>
<a id="tocscreategraphresponse"></a>

```json
{
  "GraphArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GraphArn|object|false|none|none|

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

<h2 id="tocS_ServiceQuotaExceededException">ServiceQuotaExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaservicequotaexceededexception"></a>
<a id="schema_ServiceQuotaExceededException"></a>
<a id="tocSservicequotaexceededexception"></a>
<a id="tocsservicequotaexceededexception"></a>

```json
null
```

<h2 id="tocS_CreateMembersResponse">CreateMembersResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatemembersresponse"></a>
<a id="schema_CreateMembersResponse"></a>
<a id="tocScreatemembersresponse"></a>
<a id="tocscreatemembersresponse"></a>

```json
{
  "Members": {},
  "UnprocessedAccounts": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Members|object|false|none|none|
|UnprocessedAccounts|object|false|none|none|

<h2 id="tocS_Account">Account</h2>
<!-- backwards compatibility -->
<a id="schemaaccount"></a>
<a id="schema_Account"></a>
<a id="tocSaccount"></a>
<a id="tocsaccount"></a>

```json
{
  "AccountId": {},
  "EmailAddress": {}
}
```

An Amazon Web Services account that is the administrator account of or a member of a behavior graph.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|true|none|none|
|EmailAddress|object|true|none|none|

<h2 id="tocS_DeleteMembersResponse">DeleteMembersResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletemembersresponse"></a>
<a id="schema_DeleteMembersResponse"></a>
<a id="tocSdeletemembersresponse"></a>
<a id="tocsdeletemembersresponse"></a>

```json
{
  "AccountIds": {},
  "UnprocessedAccounts": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountIds|object|false|none|none|
|UnprocessedAccounts|object|false|none|none|

<h2 id="tocS_DescribeOrganizationConfigurationResponse">DescribeOrganizationConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeorganizationconfigurationresponse"></a>
<a id="schema_DescribeOrganizationConfigurationResponse"></a>
<a id="tocSdescribeorganizationconfigurationresponse"></a>
<a id="tocsdescribeorganizationconfigurationresponse"></a>

```json
{
  "AutoEnable": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoEnable|object|false|none|none|

<h2 id="tocS_TooManyRequestsException">TooManyRequestsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanyrequestsexception"></a>
<a id="schema_TooManyRequestsException"></a>
<a id="tocStoomanyrequestsexception"></a>
<a id="tocstoomanyrequestsexception"></a>

```json
null
```

<h2 id="tocS_GetMembersResponse">GetMembersResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetmembersresponse"></a>
<a id="schema_GetMembersResponse"></a>
<a id="tocSgetmembersresponse"></a>
<a id="tocsgetmembersresponse"></a>

```json
{
  "MemberDetails": {},
  "UnprocessedAccounts": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MemberDetails|object|false|none|none|
|UnprocessedAccounts|object|false|none|none|

<h2 id="tocS_ListDatasourcePackagesResponse">ListDatasourcePackagesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdatasourcepackagesresponse"></a>
<a id="schema_ListDatasourcePackagesResponse"></a>
<a id="tocSlistdatasourcepackagesresponse"></a>
<a id="tocslistdatasourcepackagesresponse"></a>

```json
{
  "DatasourcePackages": {
    "property1": {
      "DatasourcePackageIngestState": {},
      "LastIngestStateChange": {
        "property1": {
          "Timestamp": {}
        },
        "property2": {
          "Timestamp": {}
        }
      }
    },
    "property2": {
      "DatasourcePackageIngestState": {},
      "LastIngestStateChange": {
        "property1": {
          "Timestamp": {}
        },
        "property2": {
          "Timestamp": {}
        }
      }
    }
  },
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatasourcePackages|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListGraphsResponse">ListGraphsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistgraphsresponse"></a>
<a id="schema_ListGraphsResponse"></a>
<a id="tocSlistgraphsresponse"></a>
<a id="tocslistgraphsresponse"></a>

```json
{
  "GraphList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GraphList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListInvitationsResponse">ListInvitationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistinvitationsresponse"></a>
<a id="schema_ListInvitationsResponse"></a>
<a id="tocSlistinvitationsresponse"></a>
<a id="tocslistinvitationsresponse"></a>

```json
{
  "Invitations": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Invitations|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListMembersResponse">ListMembersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmembersresponse"></a>
<a id="schema_ListMembersResponse"></a>
<a id="tocSlistmembersresponse"></a>
<a id="tocslistmembersresponse"></a>

```json
{
  "MemberDetails": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MemberDetails|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListOrganizationAdminAccountsResponse">ListOrganizationAdminAccountsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistorganizationadminaccountsresponse"></a>
<a id="schema_ListOrganizationAdminAccountsResponse"></a>
<a id="tocSlistorganizationadminaccountsresponse"></a>
<a id="tocslistorganizationadminaccountsresponse"></a>

```json
{
  "Administrators": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Administrators|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|

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

<h2 id="tocS_DatasourcePackage">DatasourcePackage</h2>
<!-- backwards compatibility -->
<a id="schemadatasourcepackage"></a>
<a id="schema_DatasourcePackage"></a>
<a id="tocSdatasourcepackage"></a>
<a id="tocsdatasourcepackage"></a>

```json
"DETECTIVE_CORE"
```

<h2 id="tocS_AcceptInvitationRequest">AcceptInvitationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaacceptinvitationrequest"></a>
<a id="schema_AcceptInvitationRequest"></a>
<a id="tocSacceptinvitationrequest"></a>
<a id="tocsacceptinvitationrequest"></a>

```json
{
  "GraphArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GraphArn|object|true|none|none|

<h2 id="tocS_EmailAddress">EmailAddress</h2>
<!-- backwards compatibility -->
<a id="schemaemailaddress"></a>
<a id="schema_EmailAddress"></a>
<a id="tocSemailaddress"></a>
<a id="tocsemailaddress"></a>

```json
"string"
```

<h2 id="tocS_AccountIdExtendedList">AccountIdExtendedList</h2>
<!-- backwards compatibility -->
<a id="schemaaccountidextendedlist"></a>
<a id="schema_AccountIdExtendedList"></a>
<a id="tocSaccountidextendedlist"></a>
<a id="tocsaccountidextendedlist"></a>

```json
[
  "stringstring"
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
  "stringstring"
]
```

<h2 id="tocS_AccountList">AccountList</h2>
<!-- backwards compatibility -->
<a id="schemaaccountlist"></a>
<a id="schema_AccountList"></a>
<a id="tocSaccountlist"></a>
<a id="tocsaccountlist"></a>

```json
[
  {
    "AccountId": {},
    "EmailAddress": {}
  }
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

<h2 id="tocS_Administrator">Administrator</h2>
<!-- backwards compatibility -->
<a id="schemaadministrator"></a>
<a id="schema_Administrator"></a>
<a id="tocSadministrator"></a>
<a id="tocsadministrator"></a>

```json
{
  "AccountId": {},
  "GraphArn": {},
  "DelegationTime": {}
}
```

Information about the Detective administrator account for an organization.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|false|none|none|
|GraphArn|object|false|none|none|
|DelegationTime|object|false|none|none|

<h2 id="tocS_AdministratorList">AdministratorList</h2>
<!-- backwards compatibility -->
<a id="schemaadministratorlist"></a>
<a id="schema_AdministratorList"></a>
<a id="tocSadministratorlist"></a>
<a id="tocsadministratorlist"></a>

```json
[
  {
    "AccountId": {},
    "GraphArn": {},
    "DelegationTime": {}
  }
]
```

<h2 id="tocS_BatchGetGraphMemberDatasourcesRequest">BatchGetGraphMemberDatasourcesRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetgraphmemberdatasourcesrequest"></a>
<a id="schema_BatchGetGraphMemberDatasourcesRequest"></a>
<a id="tocSbatchgetgraphmemberdatasourcesrequest"></a>
<a id="tocsbatchgetgraphmemberdatasourcesrequest"></a>

```json
{
  "GraphArn": {},
  "AccountIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GraphArn|object|true|none|none|
|AccountIds|object|true|none|none|

<h2 id="tocS_MembershipDatasourcesList">MembershipDatasourcesList</h2>
<!-- backwards compatibility -->
<a id="schemamembershipdatasourceslist"></a>
<a id="schema_MembershipDatasourcesList"></a>
<a id="tocSmembershipdatasourceslist"></a>
<a id="tocsmembershipdatasourceslist"></a>

```json
[
  {
    "AccountId": {},
    "GraphArn": {},
    "DatasourcePackageIngestHistory": {
      "property1": {
        "property1": {
          "Timestamp": {}
        },
        "property2": {
          "Timestamp": {}
        }
      },
      "property2": {
        "property1": {
          "Timestamp": {}
        },
        "property2": {
          "Timestamp": {}
        }
      }
    }
  }
]
```

<h2 id="tocS_UnprocessedAccountList">UnprocessedAccountList</h2>
<!-- backwards compatibility -->
<a id="schemaunprocessedaccountlist"></a>
<a id="schema_UnprocessedAccountList"></a>
<a id="tocSunprocessedaccountlist"></a>
<a id="tocsunprocessedaccountlist"></a>

```json
[
  {
    "AccountId": {},
    "Reason": {}
  }
]
```

<h2 id="tocS_GraphArnList">GraphArnList</h2>
<!-- backwards compatibility -->
<a id="schemagrapharnlist"></a>
<a id="schema_GraphArnList"></a>
<a id="tocSgrapharnlist"></a>
<a id="tocsgrapharnlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_BatchGetMembershipDatasourcesRequest">BatchGetMembershipDatasourcesRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetmembershipdatasourcesrequest"></a>
<a id="schema_BatchGetMembershipDatasourcesRequest"></a>
<a id="tocSbatchgetmembershipdatasourcesrequest"></a>
<a id="tocsbatchgetmembershipdatasourcesrequest"></a>

```json
{
  "GraphArns": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GraphArns|object|true|none|none|

<h2 id="tocS_UnprocessedGraphList">UnprocessedGraphList</h2>
<!-- backwards compatibility -->
<a id="schemaunprocessedgraphlist"></a>
<a id="schema_UnprocessedGraphList"></a>
<a id="tocSunprocessedgraphlist"></a>
<a id="tocsunprocessedgraphlist"></a>

```json
[
  {
    "GraphArn": {},
    "Reason": {}
  }
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

<h2 id="tocS_ByteValue">ByteValue</h2>
<!-- backwards compatibility -->
<a id="schemabytevalue"></a>
<a id="schema_ByteValue"></a>
<a id="tocSbytevalue"></a>
<a id="tocsbytevalue"></a>

```json
0
```

<h2 id="tocS_TagMap">TagMap</h2>
<!-- backwards compatibility -->
<a id="schematagmap"></a>
<a id="schema_TagMap"></a>
<a id="tocStagmap"></a>
<a id="tocstagmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[TagValue](#schematagvalue)|false|none|none|

<h2 id="tocS_CreateGraphRequest">CreateGraphRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreategraphrequest"></a>
<a id="schema_CreateGraphRequest"></a>
<a id="tocScreategraphrequest"></a>
<a id="tocscreategraphrequest"></a>

```json
{
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|

<h2 id="tocS_EmailMessage">EmailMessage</h2>
<!-- backwards compatibility -->
<a id="schemaemailmessage"></a>
<a id="schema_EmailMessage"></a>
<a id="tocSemailmessage"></a>
<a id="tocsemailmessage"></a>

```json
"string"
```

<h2 id="tocS_CreateMembersRequest">CreateMembersRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatemembersrequest"></a>
<a id="schema_CreateMembersRequest"></a>
<a id="tocScreatemembersrequest"></a>
<a id="tocscreatemembersrequest"></a>

```json
{
  "GraphArn": {},
  "Message": {},
  "DisableEmailNotification": {},
  "Accounts": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GraphArn|object|true|none|none|
|Message|object|false|none|none|
|DisableEmailNotification|object|false|none|none|
|Accounts|object|true|none|none|

<h2 id="tocS_MemberDetailList">MemberDetailList</h2>
<!-- backwards compatibility -->
<a id="schemamemberdetaillist"></a>
<a id="schema_MemberDetailList"></a>
<a id="tocSmemberdetaillist"></a>
<a id="tocsmemberdetaillist"></a>

```json
[
  {
    "AccountId": {},
    "EmailAddress": {},
    "GraphArn": {},
    "MasterId": {},
    "AdministratorId": {},
    "Status": {},
    "DisabledReason": {},
    "InvitedTime": {},
    "UpdatedTime": {},
    "VolumeUsageInBytes": {},
    "VolumeUsageUpdatedTime": {},
    "PercentOfGraphUtilization": {},
    "PercentOfGraphUtilizationUpdatedTime": {},
    "InvitationType": {},
    "VolumeUsageByDatasourcePackage": {
      "property1": {
        "VolumeUsageInBytes": {},
        "VolumeUsageUpdateTime": {}
      },
      "property2": {
        "VolumeUsageInBytes": {},
        "VolumeUsageUpdateTime": {}
      }
    },
    "DatasourcePackageIngestStates": {
      "property1": "STARTED",
      "property2": "STARTED"
    }
  }
]
```

<h2 id="tocS_DatasourcePackageIngestState">DatasourcePackageIngestState</h2>
<!-- backwards compatibility -->
<a id="schemadatasourcepackageingeststate"></a>
<a id="schema_DatasourcePackageIngestState"></a>
<a id="tocSdatasourcepackageingeststate"></a>
<a id="tocsdatasourcepackageingeststate"></a>

```json
"STARTED"
```

<h2 id="tocS_LastIngestStateChangeDates">LastIngestStateChangeDates</h2>
<!-- backwards compatibility -->
<a id="schemalastingeststatechangedates"></a>
<a id="schema_LastIngestStateChangeDates"></a>
<a id="tocSlastingeststatechangedates"></a>
<a id="tocslastingeststatechangedates"></a>

```json
{
  "property1": {
    "Timestamp": {}
  },
  "property2": {
    "Timestamp": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[TimestampForCollection](#schematimestampforcollection)|false|none|Details on when data collection began for a source package.|

<h2 id="tocS_DatasourcePackageIngestDetail">DatasourcePackageIngestDetail</h2>
<!-- backwards compatibility -->
<a id="schemadatasourcepackageingestdetail"></a>
<a id="schema_DatasourcePackageIngestDetail"></a>
<a id="tocSdatasourcepackageingestdetail"></a>
<a id="tocsdatasourcepackageingestdetail"></a>

```json
{
  "DatasourcePackageIngestState": {},
  "LastIngestStateChange": {
    "property1": {
      "Timestamp": {}
    },
    "property2": {
      "Timestamp": {}
    }
  }
}
```

Details about the data source packages ingested by your behavior graph.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatasourcePackageIngestState|object|false|none|none|
|LastIngestStateChange|object|false|none|none|

<h2 id="tocS_DatasourcePackageIngestDetails">DatasourcePackageIngestDetails</h2>
<!-- backwards compatibility -->
<a id="schemadatasourcepackageingestdetails"></a>
<a id="schema_DatasourcePackageIngestDetails"></a>
<a id="tocSdatasourcepackageingestdetails"></a>
<a id="tocsdatasourcepackageingestdetails"></a>

```json
{
  "property1": {
    "DatasourcePackageIngestState": {},
    "LastIngestStateChange": {
      "property1": {
        "Timestamp": {}
      },
      "property2": {
        "Timestamp": {}
      }
    }
  },
  "property2": {
    "DatasourcePackageIngestState": {},
    "LastIngestStateChange": {
      "property1": {
        "Timestamp": {}
      },
      "property2": {
        "Timestamp": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[DatasourcePackageIngestDetail](#schemadatasourcepackageingestdetail)|false|none|Details about the data source packages ingested by your behavior graph.|

<h2 id="tocS_DatasourcePackageIngestHistory">DatasourcePackageIngestHistory</h2>
<!-- backwards compatibility -->
<a id="schemadatasourcepackageingesthistory"></a>
<a id="schema_DatasourcePackageIngestHistory"></a>
<a id="tocSdatasourcepackageingesthistory"></a>
<a id="tocsdatasourcepackageingesthistory"></a>

```json
{
  "property1": {
    "property1": {
      "Timestamp": {}
    },
    "property2": {
      "Timestamp": {}
    }
  },
  "property2": {
    "property1": {
      "Timestamp": {}
    },
    "property2": {
      "Timestamp": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[LastIngestStateChangeDates](#schemalastingeststatechangedates)|false|none|none|

<h2 id="tocS_DatasourcePackageIngestStates">DatasourcePackageIngestStates</h2>
<!-- backwards compatibility -->
<a id="schemadatasourcepackageingeststates"></a>
<a id="schema_DatasourcePackageIngestStates"></a>
<a id="tocSdatasourcepackageingeststates"></a>
<a id="tocsdatasourcepackageingeststates"></a>

```json
{
  "property1": "STARTED",
  "property2": "STARTED"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[DatasourcePackageIngestState](#schemadatasourcepackageingeststate)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|**additionalProperties**|STARTED|
|**additionalProperties**|STOPPED|
|**additionalProperties**|DISABLED|

<h2 id="tocS_DatasourcePackageList">DatasourcePackageList</h2>
<!-- backwards compatibility -->
<a id="schemadatasourcepackagelist"></a>
<a id="schema_DatasourcePackageList"></a>
<a id="tocSdatasourcepackagelist"></a>
<a id="tocsdatasourcepackagelist"></a>

```json
[
  "DETECTIVE_CORE"
]
```

<h2 id="tocS_DatasourcePackageUsageInfo">DatasourcePackageUsageInfo</h2>
<!-- backwards compatibility -->
<a id="schemadatasourcepackageusageinfo"></a>
<a id="schema_DatasourcePackageUsageInfo"></a>
<a id="tocSdatasourcepackageusageinfo"></a>
<a id="tocsdatasourcepackageusageinfo"></a>

```json
{
  "VolumeUsageInBytes": {},
  "VolumeUsageUpdateTime": {}
}
```

Information on the usage of a data source package in the behavior graph.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VolumeUsageInBytes|object|false|none|none|
|VolumeUsageUpdateTime|object|false|none|none|

<h2 id="tocS_DeleteGraphRequest">DeleteGraphRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletegraphrequest"></a>
<a id="schema_DeleteGraphRequest"></a>
<a id="tocSdeletegraphrequest"></a>
<a id="tocsdeletegraphrequest"></a>

```json
{
  "GraphArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GraphArn|object|true|none|none|

<h2 id="tocS_DeleteMembersRequest">DeleteMembersRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletemembersrequest"></a>
<a id="schema_DeleteMembersRequest"></a>
<a id="tocSdeletemembersrequest"></a>
<a id="tocsdeletemembersrequest"></a>

```json
{
  "GraphArn": {},
  "AccountIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GraphArn|object|true|none|none|
|AccountIds|object|true|none|none|

<h2 id="tocS_DescribeOrganizationConfigurationRequest">DescribeOrganizationConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeorganizationconfigurationrequest"></a>
<a id="schema_DescribeOrganizationConfigurationRequest"></a>
<a id="tocSdescribeorganizationconfigurationrequest"></a>
<a id="tocsdescribeorganizationconfigurationrequest"></a>

```json
{
  "GraphArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GraphArn|object|true|none|none|

<h2 id="tocS_DisassociateMembershipRequest">DisassociateMembershipRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatemembershiprequest"></a>
<a id="schema_DisassociateMembershipRequest"></a>
<a id="tocSdisassociatemembershiprequest"></a>
<a id="tocsdisassociatemembershiprequest"></a>

```json
{
  "GraphArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GraphArn|object|true|none|none|

<h2 id="tocS_EnableOrganizationAdminAccountRequest">EnableOrganizationAdminAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemaenableorganizationadminaccountrequest"></a>
<a id="schema_EnableOrganizationAdminAccountRequest"></a>
<a id="tocSenableorganizationadminaccountrequest"></a>
<a id="tocsenableorganizationadminaccountrequest"></a>

```json
{
  "AccountId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|true|none|none|

<h2 id="tocS_GetMembersRequest">GetMembersRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetmembersrequest"></a>
<a id="schema_GetMembersRequest"></a>
<a id="tocSgetmembersrequest"></a>
<a id="tocsgetmembersrequest"></a>

```json
{
  "GraphArn": {},
  "AccountIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GraphArn|object|true|none|none|
|AccountIds|object|true|none|none|

<h2 id="tocS_Graph">Graph</h2>
<!-- backwards compatibility -->
<a id="schemagraph"></a>
<a id="schema_Graph"></a>
<a id="tocSgraph"></a>
<a id="tocsgraph"></a>

```json
{
  "Arn": {},
  "CreatedTime": {}
}
```

A behavior graph in Detective.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CreatedTime|object|false|none|none|

<h2 id="tocS_GraphList">GraphList</h2>
<!-- backwards compatibility -->
<a id="schemagraphlist"></a>
<a id="schema_GraphList"></a>
<a id="tocSgraphlist"></a>
<a id="tocsgraphlist"></a>

```json
[
  {
    "Arn": {},
    "CreatedTime": {}
  }
]
```

<h2 id="tocS_InvitationType">InvitationType</h2>
<!-- backwards compatibility -->
<a id="schemainvitationtype"></a>
<a id="schema_InvitationType"></a>
<a id="tocSinvitationtype"></a>
<a id="tocsinvitationtype"></a>

```json
"INVITATION"
```

<h2 id="tocS_TimestampForCollection">TimestampForCollection</h2>
<!-- backwards compatibility -->
<a id="schematimestampforcollection"></a>
<a id="schema_TimestampForCollection"></a>
<a id="tocStimestampforcollection"></a>
<a id="tocstimestampforcollection"></a>

```json
{
  "Timestamp": {}
}
```

Details on when data collection began for a source package.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Timestamp|object|false|none|none|

<h2 id="tocS_PaginationToken">PaginationToken</h2>
<!-- backwards compatibility -->
<a id="schemapaginationtoken"></a>
<a id="schema_PaginationToken"></a>
<a id="tocSpaginationtoken"></a>
<a id="tocspaginationtoken"></a>

```json
"string"
```

<h2 id="tocS_MemberResultsLimit">MemberResultsLimit</h2>
<!-- backwards compatibility -->
<a id="schemamemberresultslimit"></a>
<a id="schema_MemberResultsLimit"></a>
<a id="tocSmemberresultslimit"></a>
<a id="tocsmemberresultslimit"></a>

```json
1
```

<h2 id="tocS_ListDatasourcePackagesRequest">ListDatasourcePackagesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdatasourcepackagesrequest"></a>
<a id="schema_ListDatasourcePackagesRequest"></a>
<a id="tocSlistdatasourcepackagesrequest"></a>
<a id="tocslistdatasourcepackagesrequest"></a>

```json
{
  "GraphArn": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GraphArn|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListGraphsRequest">ListGraphsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistgraphsrequest"></a>
<a id="schema_ListGraphsRequest"></a>
<a id="tocSlistgraphsrequest"></a>
<a id="tocslistgraphsrequest"></a>

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

<h2 id="tocS_ListInvitationsRequest">ListInvitationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistinvitationsrequest"></a>
<a id="schema_ListInvitationsRequest"></a>
<a id="tocSlistinvitationsrequest"></a>
<a id="tocslistinvitationsrequest"></a>

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

<h2 id="tocS_ListMembersRequest">ListMembersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistmembersrequest"></a>
<a id="schema_ListMembersRequest"></a>
<a id="tocSlistmembersrequest"></a>
<a id="tocslistmembersrequest"></a>

```json
{
  "GraphArn": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GraphArn|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListOrganizationAdminAccountsRequest">ListOrganizationAdminAccountsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistorganizationadminaccountsrequest"></a>
<a id="schema_ListOrganizationAdminAccountsRequest"></a>
<a id="tocSlistorganizationadminaccountsrequest"></a>
<a id="tocslistorganizationadminaccountsrequest"></a>

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

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{}
```

<h2 id="tocS_MemberStatus">MemberStatus</h2>
<!-- backwards compatibility -->
<a id="schemamemberstatus"></a>
<a id="schema_MemberStatus"></a>
<a id="tocSmemberstatus"></a>
<a id="tocsmemberstatus"></a>

```json
"INVITED"
```

<h2 id="tocS_MemberDisabledReason">MemberDisabledReason</h2>
<!-- backwards compatibility -->
<a id="schemamemberdisabledreason"></a>
<a id="schema_MemberDisabledReason"></a>
<a id="tocSmemberdisabledreason"></a>
<a id="tocsmemberdisabledreason"></a>

```json
"VOLUME_TOO_HIGH"
```

<h2 id="tocS_Percentage">Percentage</h2>
<!-- backwards compatibility -->
<a id="schemapercentage"></a>
<a id="schema_Percentage"></a>
<a id="tocSpercentage"></a>
<a id="tocspercentage"></a>

```json
0
```

<h2 id="tocS_VolumeUsageByDatasourcePackage">VolumeUsageByDatasourcePackage</h2>
<!-- backwards compatibility -->
<a id="schemavolumeusagebydatasourcepackage"></a>
<a id="schema_VolumeUsageByDatasourcePackage"></a>
<a id="tocSvolumeusagebydatasourcepackage"></a>
<a id="tocsvolumeusagebydatasourcepackage"></a>

```json
{
  "property1": {
    "VolumeUsageInBytes": {},
    "VolumeUsageUpdateTime": {}
  },
  "property2": {
    "VolumeUsageInBytes": {},
    "VolumeUsageUpdateTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[DatasourcePackageUsageInfo](#schemadatasourcepackageusageinfo)|false|none|Information on the usage of a data source package in the behavior graph.|

<h2 id="tocS_MemberDetail">MemberDetail</h2>
<!-- backwards compatibility -->
<a id="schemamemberdetail"></a>
<a id="schema_MemberDetail"></a>
<a id="tocSmemberdetail"></a>
<a id="tocsmemberdetail"></a>

```json
{
  "AccountId": {},
  "EmailAddress": {},
  "GraphArn": {},
  "MasterId": {},
  "AdministratorId": {},
  "Status": {},
  "DisabledReason": {},
  "InvitedTime": {},
  "UpdatedTime": {},
  "VolumeUsageInBytes": {},
  "VolumeUsageUpdatedTime": {},
  "PercentOfGraphUtilization": {},
  "PercentOfGraphUtilizationUpdatedTime": {},
  "InvitationType": {},
  "VolumeUsageByDatasourcePackage": {
    "property1": {
      "VolumeUsageInBytes": {},
      "VolumeUsageUpdateTime": {}
    },
    "property2": {
      "VolumeUsageInBytes": {},
      "VolumeUsageUpdateTime": {}
    }
  },
  "DatasourcePackageIngestStates": {
    "property1": "STARTED",
    "property2": "STARTED"
  }
}
```

Details about a member account in a behavior graph.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|false|none|none|
|EmailAddress|object|false|none|none|
|GraphArn|object|false|none|none|
|MasterId|object|false|none|none|
|AdministratorId|object|false|none|none|
|Status|object|false|none|none|
|DisabledReason|object|false|none|none|
|InvitedTime|object|false|none|none|
|UpdatedTime|object|false|none|none|
|VolumeUsageInBytes|object|false|none|none|
|VolumeUsageUpdatedTime|object|false|none|none|
|PercentOfGraphUtilization|object|false|none|none|
|PercentOfGraphUtilizationUpdatedTime|object|false|none|none|
|InvitationType|object|false|none|none|
|VolumeUsageByDatasourcePackage|object|false|none|none|
|DatasourcePackageIngestStates|object|false|none|none|

<h2 id="tocS_MembershipDatasources">MembershipDatasources</h2>
<!-- backwards compatibility -->
<a id="schemamembershipdatasources"></a>
<a id="schema_MembershipDatasources"></a>
<a id="tocSmembershipdatasources"></a>
<a id="tocsmembershipdatasources"></a>

```json
{
  "AccountId": {},
  "GraphArn": {},
  "DatasourcePackageIngestHistory": {
    "property1": {
      "property1": {
        "Timestamp": {}
      },
      "property2": {
        "Timestamp": {}
      }
    },
    "property2": {
      "property1": {
        "Timestamp": {}
      },
      "property2": {
        "Timestamp": {}
      }
    }
  }
}
```

Details on data source packages for members of the behavior graph.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|false|none|none|
|GraphArn|object|false|none|none|
|DatasourcePackageIngestHistory|object|false|none|none|

<h2 id="tocS_RejectInvitationRequest">RejectInvitationRequest</h2>
<!-- backwards compatibility -->
<a id="schemarejectinvitationrequest"></a>
<a id="schema_RejectInvitationRequest"></a>
<a id="tocSrejectinvitationrequest"></a>
<a id="tocsrejectinvitationrequest"></a>

```json
{
  "GraphArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GraphArn|object|true|none|none|

<h2 id="tocS_StartMonitoringMemberRequest">StartMonitoringMemberRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartmonitoringmemberrequest"></a>
<a id="schema_StartMonitoringMemberRequest"></a>
<a id="tocSstartmonitoringmemberrequest"></a>
<a id="tocsstartmonitoringmemberrequest"></a>

```json
{
  "GraphArn": {},
  "AccountId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GraphArn|object|true|none|none|
|AccountId|object|true|none|none|

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
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|true|none|none|

<h2 id="tocS_UnprocessedReason">UnprocessedReason</h2>
<!-- backwards compatibility -->
<a id="schemaunprocessedreason"></a>
<a id="schema_UnprocessedReason"></a>
<a id="tocSunprocessedreason"></a>
<a id="tocsunprocessedreason"></a>

```json
"string"
```

<h2 id="tocS_UnprocessedAccount">UnprocessedAccount</h2>
<!-- backwards compatibility -->
<a id="schemaunprocessedaccount"></a>
<a id="schema_UnprocessedAccount"></a>
<a id="tocSunprocessedaccount"></a>
<a id="tocsunprocessedaccount"></a>

```json
{
  "AccountId": {},
  "Reason": {}
}
```

A member account that was included in a request but for which the request could not be processed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|false|none|none|
|Reason|object|false|none|none|

<h2 id="tocS_UnprocessedGraph">UnprocessedGraph</h2>
<!-- backwards compatibility -->
<a id="schemaunprocessedgraph"></a>
<a id="schema_UnprocessedGraph"></a>
<a id="tocSunprocessedgraph"></a>
<a id="tocsunprocessedgraph"></a>

```json
{
  "GraphArn": {},
  "Reason": {}
}
```

Behavior graphs that could not be processed in the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GraphArn|object|false|none|none|
|Reason|object|false|none|none|

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{}
```

<h2 id="tocS_UpdateDatasourcePackagesRequest">UpdateDatasourcePackagesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedatasourcepackagesrequest"></a>
<a id="schema_UpdateDatasourcePackagesRequest"></a>
<a id="tocSupdatedatasourcepackagesrequest"></a>
<a id="tocsupdatedatasourcepackagesrequest"></a>

```json
{
  "GraphArn": {},
  "DatasourcePackages": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GraphArn|object|true|none|none|
|DatasourcePackages|object|true|none|none|

<h2 id="tocS_UpdateOrganizationConfigurationRequest">UpdateOrganizationConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateorganizationconfigurationrequest"></a>
<a id="schema_UpdateOrganizationConfigurationRequest"></a>
<a id="tocSupdateorganizationconfigurationrequest"></a>
<a id="tocsupdateorganizationconfigurationrequest"></a>

```json
{
  "GraphArn": {},
  "AutoEnable": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GraphArn|object|true|none|none|
|AutoEnable|object|false|none|none|
